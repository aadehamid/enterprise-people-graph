#!/bin/bash
# The one check script: every mechanical gate, run locally, by the pre-push
# hook (scripts/hooks/pre-push) and by CI (.github/workflows/check.yml).
#
# Plain run: the check tools, directly, with the local Node. Works in any
# clone and needs neither Entire nor Dagger.
# `--with-dagger`: additionally runs the container checks of .dagger (module
# people-graph-ci): Markdown structure, link targets, tool tests, and the
# decision-record check. The gate harness and the tree guard are local-only
# by nature; they never claim container coverage. Like every step between the
# two snapshot points, a Dagger-side tree change fails the check.
set -euo pipefail
cd "$(dirname "$0")/.."

# The checks read the repository; none of them may change it. The guard
# hashes every file system entry's contents, type, mode and symlink target,
# plus the index blobs and git's status view, before and after
# (scripts/tree-guard.mjs; its comment names the excluded paths and why).
guard_state=$(mktemp "${TMPDIR:-/tmp}/check-tree-guard.XXXXXX")
list_state=$(mktemp "${TMPDIR:-/tmp}/check-md-files.XXXXXX")
md_list=$(mktemp "${TMPDIR:-/tmp}/check-md-existing.XXXXXX")
trap 'rm -f "$guard_state" "$list_state" "$md_list"' EXIT
node scripts/tree-guard.mjs snapshot "$guard_state"

if [ "${1:-}" = "--with-dagger" ]; then
  if command -v dagger >/dev/null 2>&1; then
    dagger check
  else
    echo "check: --with-dagger set but the dagger CLI is not on PATH; running local checks only." >&2
  fi
fi

# ci dependencies: install when the folder is missing or older than the
# manifests. Installs outside the guarded population (see tree-guard).
(
  cd ci
  if [ ! -d node_modules ] \
    || [ package.json -nt node_modules ] \
    || [ package-lock.json -nt node_modules ]; then
    npm ci --ignore-scripts --no-audit --no-fund
  fi
)

# 1. The check tools' own tests (link checker, tree guard, decision guard).
(cd ci && npm test)

# 2. Markdown structure over the tracked Markdown. The population is every
# tracked *.md, and each file must live inside one of the Dagger mount's
# roots (asserted here), so the local and container checks cannot silently
# diverge (population roots: scripts/md-set.sh; container mount: .dagger/modules/people-graph-ci/src/index.ts).
git ls-files -z -- '*.md' > "$list_state"
# Population roots live in scripts/md-set.sh; the container mount and the
# local set stay one population by agreement (EPG-DEC-0001).
bash scripts/md-set.sh < "$list_state" > "$md_list"
lint_log=$(mktemp "${TMPDIR:-/tmp}/check-lint.XXXXXX")
trap 'rm -f "$guard_state" "$list_state" "$md_list" "$lint_log"' EXIT
bash scripts/lint-md.sh < "$md_list" > "$lint_log"
grep -q "^lint-md: linted [1-9][0-9]* file" "$lint_log" || {
  echo "check: the lint step reported no files; failing closed" >&2
  cat "$lint_log" >&2
  exit 1
}
cat "$lint_log"

# 3. Local link and image targets. The checker follows symlinks, skips
# node_modules and tool dot-directories (except .github), and scans the
# repository root, so a local scan matches the Dagger mount.
node ci/check-links.mjs .

# 4. Each decision record's Status agrees with docs/decisions/INDEX.md,
# checked fail-closed (scripts/check-decisions.mjs).
node scripts/check-decisions.mjs docs/decisions

# 5. The behavioral harness for the gate itself.
bash scripts/gates.test.sh

# The tree must be exactly as the snapshot left it: contents, entry types,
# modes, symlink targets, index blobs, and git's status view.
node scripts/tree-guard.mjs verify "$guard_state"

echo "check: all checks passed."
