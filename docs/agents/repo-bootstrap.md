# Repo bootstrap: way-of-working, Entire, and Dagger

How to set up the standard in a new repository, whichever of the three pieces
it has. Written for the agent that does the setup, on the owner's behalf.
The owner runs every setup or destructive tool command (`entire enable`,
`entire disable`, `entire clean`, `entire login`); the agent runs everything
else. This guide's decisions trace to
[EPG-DEC-0001](../decisions/EPG-DEC-0001-reconcile-entire-and-dagger.md) in
this repository, which the owner confirmed on 2026-11-08.

## The three layers

1. **The `way-of-working` skill** — the owner's personal standard. It lives
   outside any repository and mentions neither Entire nor Dagger. It is never
   modified by a repository; a repo adapts to it, not the other way.
2. **The repository's `AGENTS.md`** — project rules, including how the tools
   slot in. Where the project rule exists, it wins over the skill.
3. **The tools** — Entire (session check-pointing, trails) and Dagger
   (container checks). Either can be absent; every layer must keep working.

## What each tool contributes, and how absence looks

| Piece | Present | Absent |
| --- | --- | --- |
| Entire | commit hooks capture the session as checkpoints; `entire trail` holds project-level intent across repositories; `pre-push` syncs session logs on push | the delegating hooks run their non-Entire parts (`commit-msg` prints a fallback note; the other four run silently); no checkpoints; nothing else changes |
| Dagger | `dagger check` runs the same Markdown, link, tool-test, and decision checks in containers | `scripts/check.sh` runs them with the local Node; the container gate simply is not invoked |
| CI | `.github/workflows/check.yml` runs the local gate on every push and PR | the pre-push hook is the gate |

## Setup steps

Work in this order. Copy the reference files from this repository
(`docs/agents` sits beside them) unless the target repo has its own.

1. **`AGENTS.md` and the bridge.** Write the target repo's `AGENTS.md` on the
   model of [this repo's](../../AGENTS.md): skills to load, the
   check-and-push rules with this repo's file names, the tool section, and
   pointers instead of restated rules. Point every rule at its one owner
   file. Add `CLAUDE.md` as a one-line bridge to `AGENTS.md`.
2. **The gate.** Copy `scripts/check.sh`, `scripts/md-set.sh`,
   `scripts/lint-md.sh`, `scripts/check-decisions.mjs`,
   `scripts/tree-guard.mjs`, and `scripts/gates.test.sh`. In `md-set.sh` set
   the population roots to the target repo's Markdown layout — these are the
   same roots the Dagger module mounts (step 6), one population by agreement.
3. **The hooks.** Copy `scripts/hooks/*` and `scripts/bootstrap.sh`. When
   Entire is enabled, diff each hook against the copy Entire installs in
   `.git/hooks`; every tracked hook stays a verbatim copy of Entire's, until
   the check chain in `pre-push`. Re-diff on Entire CLI updates. A git
   hook install is permitted only in the simple case of the skill's
   `guardrails.md` (no other tool owns hooks); otherwise report and ask.
4. **Decision records.** Create `docs/decisions/` with an `INDEX.md` (Record |
   Title | Status) and a first record quoting the owner's words for this
   setup, then wire the target repo's decision folder into
   `check-decisions.mjs` invocations of `check.sh` (path argument).
5. **The review standards file.** `docs/REVIEW_STANDARDS.md`, empty of rules
   except the pointer; rules land only from real findings, each with the
   incident that taught it.
6. **Dagger, if the repo has it.** Keep `dagger.toml` and the module; widen
   the module's mount to the population roots (all files under them, since
   link targets live there too), mount `scripts/` beside the tests, install
   git (Alpine: `apk add --no-cache git`) so no tool test silently skips, add
   the decisions check, and run `dagger generate` after any `src/index.ts`
   edit — the stale-source-map check fails first otherwise.
7. **CI.** Copy `.github/workflows/check.yml`; it calls `scripts/check.sh`.
   Pin action tags to refs that exist.
8. **Entire, if the repo has it.** The owner runs `entire enable` (an agent
   never runs enable, disable, clean, or auth). Verify with
   `entire agent-help`, then `entire doctor` — it must report `Git hooks: OK`
   with the tracked hooks wired.
9. **Verify, in this order** — a check that has never failed is not trusted:
   `scripts/bootstrap.sh` (sets `core.hooksPath`), `scripts/check.sh`
   (all green), break one Markdown file and expect `git hook run pre-push`
   (or a direct `sh scripts/hooks/pre-push <remote> < input`) to exit 1,
   restore, expect 0. Then commit: the `Entire-Checkpoint` trailer proves the
   commit hooks work.

## The rules that bit us here (do not relearn them)

- `git checkout -- <file>` used to restore a broken test fixture also
  discards real uncommitted edits to that file. The AGENTS.md wording lost to
  it reached a review round late. Stage by name instead, or commit before
  failure-path testing.
- A shell pipeline's exit status is its last command's. `awk ... | head`
  swallowed an awk failure inside a hook. Compute with awk alone (`{ print; exit }`),
  or fail explicitly with `|| exit 1`.
- An untested check passes vacuously. Every gate added here was first made to
  fail on purpose; keep that for the next repo.
- macOS `/bin/sh` is bash in POSIX mode: no `set -o pipefail`, no `<(...)`
  process substitution. Write POSIX-compatible hooks; use `#!/bin/bash` for
  scripts that need bash features.
- `grep` patterns in assert helpers: use `grep -qF` or bracketed patterns
  silently become character classes.

## Keeping both worlds

`AGENTS.md` in the target repo states the exact same contract this repo
states: the PR is the code-review and merge surface; trails record intent and
findings, never merge code; checkpoints are automatic; the population roots
live in one file (`md-set.sh`) and a Dagger mount change is a change to them,
in the same PR. When Entire or Dagger is not installed, nothing in that
contract changes.
