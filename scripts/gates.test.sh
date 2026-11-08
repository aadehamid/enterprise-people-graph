#!/bin/bash
# Behavioral harness for the repository gate's pre-push hook and helpers.
# Run by scripts/check.sh (and on its own by hand). Every case runs in a
# throwaway repository with stubbed tools; nothing outside $TMPDIR is
# touched. The stub Entire CLI shadows the real one everywhere: no test runs
# the real `entire`.
set -euo pipefail

# A test's git calls must not inherit the hook runner's GIT_* variables.
for var in $(env | sed -n 's/^\(GIT_[A-Za-z_]*\)=.*/\1/p'); do unset "$var"; done

repo=$(git rev-parse --show-toplevel)
passed=0
failed=0
failures=""
ok()  { passed=$((passed + 1)); }
bad() { failed=$((failed + 1)); failures="$failures
- $1"; }
assert_eq() { if [ "$2" = "$3" ]; then ok; else bad "$1: got [$2], want [$3]"; fi; }
assert_contains() { if [ -f "$2" ] && grep -q -- "$3" "$2"; then ok; else bad "$1: [$2] lacks [$3]"; fi; }
assert_missing() { if [ -f "$2" ] && grep -q -- "$3" "$2"; then bad "$1: [$2] unexpectedly holds [$3]"; else ok; fi; }
assert_nonempty() { if [ -s "$2" ]; then ok; else bad "$1: [$2] is empty"; fi; }

work=$(mktemp -d "${TMPDIR:-/tmp}/gates.XXXXXX")
trap 'rm -rf "$work"' EXIT

# Stub Entire CLI: logs its arguments and stdin byte count, exits on demand.
stub="$work/stub"
mkdir -p "$stub"
cat > "$stub/entire" <<'STUB'
#!/bin/sh
log="${STUB_LOG:?}"
printf 'entire' >> "$log"
printf ' %s' "$@" >> "$log"
printf ' stdin-bytes=' >> "$log"
wc -c < /dev/stdin | tr -d ' ' >> "$log"
[ "${ENTIRE_STUB_EXIT:-0}" -eq 0 ] || { echo "stub entire failure" >&2; exit "$ENTIRE_STUB_EXIT"; }
STUB
chmod +x "$stub/entire"

stub_path="$stub:$PATH"
safe_path="/usr/bin:/bin" # no entire, no stubs

export STUB_LOG="$work/stub.log"
export CHECK_LOG="$work/check.log"

zeros="0000000000000000000000000000000000000000"

# Fixture repo: the tracked pre-push hook, a stub check script, one commit.
fixture() {
  : > "$STUB_LOG"
  : > "$CHECK_LOG"
  t="$work/$1"
  git init -q "$t"
  (
    cd "$t"
    mkdir -p scripts/hooks
    cp "$repo/scripts/hooks/pre-push" scripts/hooks/pre-push
    cat > scripts/check.sh <<'CHECK'
#!/bin/sh
printf 'ran ' >> "$CHECK_LOG"
if [ "${CHECK_STUB_EXIT:-0}" -eq 1 ]; then echo "stub check failure" >&2; exit 1; fi
CHECK
    chmod +x scripts/check.sh
    git add -A
    git -c user.email=guard@test -c user.name=guard commit -qm init
  )
}

run_hook() { # run_hook <repo> <input file> <PATH> : prints the hook's status
  (cd "$1" && PATH="$3" sh scripts/hooks/pre-push origin < "$2" >/dev/null 2>&1; echo $?)
}

head=$(git rev-parse HEAD)
printf 'refs/heads/main %s refs/heads/tests/other %s\n' "$head" "$zeros" > "$work/normal-input"
printf 'refs/heads/main %s refs/heads/tests/gone %s\n' "$zeros" "$zeros" > "$work/delete-input"

# 1. Empty stdin (git hook run): no checks; Entire always sees the push.
fixture empty
status=$(run_hook "$work/empty" /dev/null "$stub_path")
assert_eq "empty stdin exit" "$status" "0"
if [ -s "$CHECK_LOG" ]; then bad "empty stdin: check unexpectedly ran"; else ok; fi
assert_contains "empty stdin: entire ran" "$STUB_LOG" "stdin-bytes=0"

# 2. Deletion-only push skips the checks; Entire still sees the push.
CHECK_STUB_EXIT=0
fixture delete
status=$(run_hook "$work/delete" "$work/delete-input" "$stub_path")
assert_eq "deletion-only exit" "$status" "0"
if [ -s "$CHECK_LOG" ]; then bad "deletion-only: check unexpectedly ran"; else ok; fi
assert_contains "deletion-only: entire ran" "$STUB_LOG" "pre-push origin"
assert_contains "deletion-only: entire saw whole stdin" "$STUB_LOG" "stdin-bytes=$(wc -c < "$work/delete-input" | tr -d ' ')"

# 3. Normal push runs the checks, then passes the exact stdin bytes to Entire.
fixture normal
status=$(run_hook "$work/normal" "$work/normal-input" "$stub_path")
assert_eq "normal push exit" "$status" "0"
assert_contains "normal push: check ran" "$CHECK_LOG" "ran"
assert_contains "normal push: entire ran" "$STUB_LOG" "pre-push origin"
assert_contains "normal push: entire saw whole stdin" "$STUB_LOG" "stdin-bytes=$(wc -c < "$work/normal-input" | tr -d ' ')"

# 4. A failing check blocks the push and Entire never runs.
fixture checkfail
export CHECK_STUB_EXIT=1
status=$(run_hook "$work/checkfail" "$work/normal-input" "$stub_path")
export CHECK_STUB_EXIT=0
assert_eq "failing check exit" "$status" "1"
assert_contains "failing check: check attempted" "$CHECK_LOG" "ran"
assert_missing "failing check: entire not run" "$STUB_LOG" "entire"

# 5. A failing Entire run propagates after the checks passed.
fixture entirefail
export ENTIRE_STUB_EXIT=1
status=$(run_hook "$work/entirefail" "$work/normal-input" "$stub_path")
export ENTIRE_STUB_EXIT=0
assert_eq "failing entire exit" "$status" "1"
assert_contains "failing entire: check ran" "$CHECK_LOG" "ran"
assert_contains "failing entire: entire attempted" "$STUB_LOG" "pre-push origin"

# 6. Entire absent: the hook runs the checks and exits 0.
fixture noentire
status=$(run_hook "$work/noentire" "$work/normal-input" "$safe_path")
assert_eq "no entire exit" "$status" "0"
assert_contains "no entire: check ran" "$CHECK_LOG" "ran"

# 7. An awk failure while parsing the refs blocks the push, Entire never runs.
fakebin="$work/fakebin"
mkdir -p "$fakebin"
printf '#!/bin/sh\nexit 3\n' > "$fakebin/awk"
chmod +x "$fakebin/awk"
fixture brokenparse
status=$(run_hook "$work/brokenparse" "$work/normal-input" "$fakebin:$stub:$PATH")
assert_eq "broken awk exit" "$status" "3"
assert_missing "broken awk: entire not run" "$STUB_LOG" "entire"

# 8. lint-md.sh fails on an empty list instead of passing vacuously.
if printf '' | MD_LINT_BIN="$fakebin/absent" MD_LINT_CONFIG=nothing \
  bash "$repo/scripts/lint-md.sh" >/dev/null 2>&1; then
  bad "lint-md: empty list passed"
else ok; fi

# 9. lint-md.sh carries a newline-bearing filename through NUL parsing.
lintcase="$work/lint"
mkdir -p "$lintcase"
printf '# h\ntext\n' > "$lintcase/first.md"
printf '# h\ntext\n' > "$lintcase/$(printf 'with\nnewline').md"
printf '#!/bin/sh\nexit 0\n' > "$fakebin/markdownlint-cli2"
chmod +x "$fakebin/markdownlint-cli2"
if (cd "$lintcase" && find . -name '*.md' -print0 \
  | MD_LINT_BIN="$fakebin/markdownlint-cli2" MD_LINT_CONFIG=/dev/null \
  bash "$repo/scripts/lint-md.sh" >/dev/null 2>&1); then ok; else bad "lint-md: newline filename run failed"; fi

echo "gates: $passed passed, $failed failed$failures"
[ "$failed" -eq 0 ]
