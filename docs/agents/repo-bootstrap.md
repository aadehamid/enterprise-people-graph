# Repo bootstrap: way-of-working, Entire, and Dagger

How to set up the standard in a new repository, whichever of the three pieces
it has. Written for the agent that does the setup, on the owner's behalf.
The owner runs every setup or destructive tool command (`entire enable`,
`entire disable`, `entire clean`, `entire login`); the agent runs everything
else.

**Source.** Everything this guide says to copy comes from
`gh/aadehamid/enterprise-people-graph`, pinned at commit `a51e8b03a77c552222c023eb7950ea25a6cde24c` — the commit
the guide's review covered; a later reviewed commit on its main supersedes
this pin, and the pin is updated at merge and together with any manifest
change. This guide's decisions trace to
[EPG-DEC-0001](https://github.com/aadehamid/enterprise-people-graph/blob/a51e8b03a77c552222c023eb7950ea25a6cde24c/docs/decisions/EPG-DEC-0001-reconcile-entire-and-dagger.md),
which the owner confirmed on 2026-11-08. The copied target owns its own
agrees-with-its-index checks; never link the target back into a
source-record file that its manifest does not copy.

## The three layers

1. **The `way-of-working` skill** — the owner's personal standard. Its
   installed copy lives outside the target repository; its source repository
   is `personal-agent-skills`. It mentions neither Entire nor Dagger. Never
   modify it to accommodate Entire or Dagger: where review finds a genuine
   skill change, make it in `personal-agent-skills` through that
   repository's own pull request and record the changed files in the target
   repo's decision record. A repo adapts to the skill, not the other way.
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

Work in this order. Copy from this repository — each name below exists in the
branch that carries this file.

1. **`AGENTS.md` and the bridge.** Write the target repo's `AGENTS.md` on the
   model of [this repo's](../../AGENTS.md): skills to load, the
   check-and-push rules with the target's file names, the tool section, and
   pointers instead of restated rules. Point every rule at its one owner
   file. Add `CLAUDE.md` as a one-line bridge to `AGENTS.md`.
2. **The `.gitignore` rules first.** Add `**/node_modules/` (any other tool
   state folders the tools write into `.gitignore` too), and, when Dagger is
   present, keep `dagger.lock` tracked and copied from this repo's.
3. **The gate and its tools.** Copy `scripts/check.sh`, `scripts/md-set.sh`,
   `scripts/lint-md.sh`, `scripts/check-decisions.mjs`,
   `scripts/tree-guard.mjs`, and `scripts/gates.test.sh` — plus the whole
   tracked `ci/` directory the gate depends on: `ci/package.json`,
   `ci/package-lock.json`, `ci/markdownlint-cli2.jsonc`, `ci/check-links.mjs`,
   `ci/check-links.test.mjs`, `ci/check-decisions.test.mjs`,
   `ci/tree-guard.test.mjs` (never `ci/node_modules`). In `scripts/md-set.sh`
   set the population roots to the target repo's Markdown layout — these are
   the same roots the Dagger module mounts (step 7), one population by
   agreement.
4. **Decision records.** Create the target's decision folder (default
   `docs/decisions/`) with an `INDEX.md` (Record | Title | Status) and a
   first record quoting the owner's words for this setup, then set the
   target's decision folder and record prefix in every place the checks read
   them, so local and container checks see one population: the checker's own
   defaults in `scripts/check-decisions.mjs` (function and command-line),
   the `DECISIONS_DIR` / `DECISION_PREFIX` lines in `scripts/check.sh`, the
   `check-decisions.mjs` arguments in the Dagger module's `decisions` check
   (`src/index.ts`), and the folder in the module's mount. A target that
   sets them anywhere else but leaves the checker defaults still fails
   direct `node scripts/check-decisions.mjs` calls. The defaults in this
   repo are `docs/decisions` and the record prefix `EPG-DEC`; a prefix uses
   letters, digits and hyphens (anything else is a configuration error, not
   a looser match).
5. **The review standards file.** `docs/REVIEW_STANDARDS.md`, holding only
   the pointer to the instruction file it judges — the target's own
   `AGENTS.md` requirements — and empty of rules until a reviewer actually
   makes a finding; each rule names the incident that taught it.
6. **The hooks.** Copy `scripts/hooks/*` and `scripts/bootstrap.sh`. A git
   hook install is permitted only in the simple case of the skill's
   `guardrails.md` (default `hooksPath`, no other tool owns hooks, one
   worktree); otherwise report and ask. When Entire is enabled (step 9),
   diff each hook against the copy Entire installs in `.git/hooks`; every
   tracked hook stays a verbatim copy of Entire's, until the check chain in
   `pre-push`. Re-diff on Entire CLI updates.
7. **Dagger, if the repo has it.** Keep `dagger.toml` and the module, and
   copy `dagger.lock`. Set the decision folder in the `decisions` check
   (step 4) and include the target's decision folder in the mount. Widen the
   module's mount to the population roots (all files under them, since link
   targets live there too), keep the `scripts/` and `.github/**` mounts that
   the tool tests and link targets need, install git (`apk add --no-cache
   git` on Alpine) so no tool test silently skips, and run `dagger generate -y`
   (noninteractive apply; plain `dagger generate` exits 1 asking for
   `-y/--auto-apply`, and `--no-apply` is the read-only preview) after any `src/index.ts` edit — the stale-source-map check fails first
   otherwise. Run `dagger check` and expect one passing check per check
   defined; then break one input and expect the container check to fail
   before restoring it. `scripts/check.sh --with-dagger` runs the same
   container checks locally, inside the tree guard's snapshot.
8. **CI.** Copy `.github/workflows/check.yml`; it calls `scripts/check.sh`.
   Pin action tags to refs that exist.
9. **Entire, if the repo has it.** The owner runs `entire enable` (an agent
   never runs enable, disable, clean, or auth). Then, in order: diff the
   hooks per step 6, run `scripts/bootstrap.sh`, confirm `git config
   core.hooksPath` prints `scripts/hooks`, and run `entire doctor` — it must
   report `Git hooks: OK` with the tracked hooks wired.
10. **Verify, in this order** — a check that has never failed is not trusted.
    The target's Markdown must be staged (`git add -- <named setup files>`)
    and `HEAD` must exist before the full gate: run `scripts/bootstrap.sh`
    (if not already), make the initial commit of the setup files, and only
    then run `scripts/check.sh` (all green). For the failure path, break one
    tracked Markdown file, pipe a valid four-field, nondeletion ref record
    (`refs/heads/main <HEAD sha> refs/heads/test 0000…0`, the local sha of
    the current commit) into `sh scripts/hooks/pre-push origin`, and require
    exit 1 with the injected diagnostic (an **empty stdin does not run the
    checks** — that is the hook's own contract, tested in
    `scripts/gates.test.sh`); restore the file with `git restore --worktree
    -- <file>` and repeat the same input, expecting exit 0. For the final
    commit: with Entire present and verified, the commit carries the
    `Entire-Checkpoint` trailer; with Entire absent, require a successful
    commit and the `commit-msg` fallback note instead — the trailer cannot
    exist there.

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
