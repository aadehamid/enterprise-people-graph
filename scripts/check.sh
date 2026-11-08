#!/bin/sh
# The one check script: every mechanical gate, run locally, by the pre-push
# hook (scripts/hooks/pre-push) and by CI (.github/workflows/check.yml).
#
# Plain run: the check tools, directly, with the local Node. Works in any
# clone and needs neither Entire nor Dagger.
# `--with-dagger`: additionally runs the same three checks in the containers
# of .dagger (module people-graph-ci) when the dagger CLI is on PATH.
set -eu
cd "$(dirname "$0")/.."

if [ "${1:-}" = "--with-dagger" ]; then
  if command -v dagger >/dev/null 2>&1; then
    dagger check
  else
    echo "check: --with-dagger set but the dagger CLI is not on PATH; running local checks only." >&2
  fi
fi

# The checks read the tree; none may write it. Snapshot, run, compare.
tree_before=$(git status --porcelain)

(
  cd ci
  if [ ! -d node_modules ] \
    || [ package.json -nt node_modules ] \
    || [ package-lock.json -nt node_modules ]; then
    npm ci --ignore-scripts --no-audit --no-fund
  fi
)

# 1. The check tool's own tests.
(cd ci && npm test)

# 2. Markdown structure over the tracked set — the same population the Dagger
# module mounts (see .dagger/modules/people-graph-ci/src/index.ts).
git ls-files '*.md' | tr '\n' '\0' | xargs -0 \
  ci/node_modules/.bin/markdownlint-cli2 --config ci/markdownlint-cli2.jsonc

# 3. Local link and image targets. The checker skips node_modules and
# dot-directories, so scanning the repository root matches the Dagger mount.
node ci/check-links.mjs .

# 4. Each decision record's Status agrees with docs/decisions/INDEX.md.
status_failures=0
for record in docs/decisions/EPG-DEC-*.md; do
  [ -e "$record" ] || break
  record_status=$(awk -F' *\\| *' '/^\| Status \|/ {print $3; exit}' "$record")
  record_id=$(basename "$record" | cut -d- -f1-3)
  index_status=$(grep -F -- "[$record_id](" docs/decisions/INDEX.md \
    | awk -F' *\\| *' '{print $4; exit}')
  if [ "$record_status" != "$index_status" ]; then
    echo "check: $record Status '$record_status' disagrees with docs/decisions/INDEX.md '$index_status'" >&2
    status_failures=1
  fi
done
[ "$status_failures" -eq 0 ]

tree_after=$(git status --porcelain)
if [ "$tree_before" != "$tree_after" ]; then
  echo "check: the checks modified the working tree" >&2
  printf '%s\n' "$tree_before" > "${TMPDIR:-/tmp}/check-tree-before"
  printf '%s\n' "$tree_after" > "${TMPDIR:-/tmp}/check-tree-after"
  diff -u "${TMPDIR:-/tmp}/check-tree-before" "${TMPDIR:-/tmp}/check-tree-after" >&2 || true
  rm -f "${TMPDIR:-/tmp}/check-tree-before" "${TMPDIR:-/tmp}/check-tree-after"
  exit 1
fi

echo "check: all checks passed."
