#!/bin/sh
# Wire this repository's tracked hooks for the first time (a fresh clone runs
# this once; see AGENTS.md, "Before every push").
set -eu
cd "$(dirname "$0")/.."

chmod +x scripts/check.sh scripts/hooks/*
git config core.hooksPath scripts/hooks

echo "core.hooksPath -> $(git config core.hooksPath)"
echo "Hooks:" "$(git rev-parse --show-toplevel)/$(git config core.hooksPath)"
