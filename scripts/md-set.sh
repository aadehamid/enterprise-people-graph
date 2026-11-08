#!/bin/bash
# Validate and emit a NUL-delimited Markdown set from a NUL-delimited input
# list. Every file must exist on disk and live inside one of the population
# roots. Anything else fails the run.
#
# The roots below and the Dagger module's mount
# (.dagger/modules/people-graph-ci/src/index.ts) are one population by
# agreement (EPG-DEC-0001): changing one is changing the other, in the same
# pull request.
set -euo pipefail

list=$(mktemp "${TMPDIR:-/tmp}/md-set.XXXXXX")
out=$(mktemp "${TMPDIR:-/tmp}/md-set-out.XXXXXX")
trap 'rm -f "$list" "$out"' EXIT
cat > "$list"
if [ ! -s "$list" ]; then
  echo "md-set: empty file list; refusing to run an empty check" >&2
  exit 1
fi

while IFS= read -r -d '' file; do
  if [ ! -f "$file" ]; then
    echo "md-set: listed file missing on disk: $file" >&2
    exit 1
  fi
  case "$file" in
    */*) case "$file" in
           .github/*|docs/*|guideline_to_map_ontology_to_LPG/*|LIONG_Design_Document_Package/*) printf '%s\0' "$file" >> "$out" ;;
           *) echo "md-set: tracked Markdown outside the checked population: $file — add its root to .dagger/modules/people-graph-ci/src/index.ts and this case" >&2
              exit 1 ;;
         esac ;;
    *) printf '%s\0' "$file" >> "$out" ;;
  esac
done < "$list"

if [ ! -s "$out" ]; then
  echo "md-set: no files inside the population roots" >&2
  exit 1
fi
cat "$out"
