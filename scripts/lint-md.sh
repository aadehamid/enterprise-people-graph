#!/bin/bash
# Lint a NUL-delimited list of Markdown files (stdin). Every listed file must
# exist on disk; an empty list is an error, not a pass. Overrides for the
# harness: MD_LINT_BIN, MD_LINT_CONFIG.
set -euo pipefail

bin=${MD_LINT_BIN:-ci/node_modules/.bin/markdownlint-cli2}
config=${MD_LINT_CONFIG:-ci/markdownlint-cli2.jsonc}

list=$(mktemp "${TMPDIR:-/tmp}/lint-md.XXXXXX")
existing=$(mktemp "${TMPDIR:-/tmp}/lint-md-existing.XXXXXX")
trap 'rm -f "$list" "$existing"' EXIT
cat > "$list"
if [ ! -s "$list" ]; then
  echo "lint-md: empty file list; refusing to run an empty check" >&2
  exit 1
fi
status=0
n=0
while IFS= read -r -d '' file; do
  n=$((n + 1))
  if [ ! -f "$file" ]; then
    echo "lint-md: listed file missing on disk: $file" >&2
    status=1
    continue
  fi
  printf '%s\0' "$file" >> "$existing"
done < "$list"

if [ "$status" -ne 0 ]; then
  echo "lint-md: $n file(s) listed; aborting before lint" >&2
  exit 1
fi

# Runs the linter once with the surviving files; xargs exits nonzero when the
# linter rejects any of them. The run must be observable: the caller asserts
# the count line, so a dropped or silent lint step cannot pass a check.
xargs -0 "$bin" --config "$config" < "$existing"
printf 'lint-md: linted %s file(s) with %s\n' "$(tr '\0' '\n' < "$existing" | grep -c .)" "$bin"
