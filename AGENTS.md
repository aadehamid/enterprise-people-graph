# Agent instructions — enterprise-people-graph

Shared instructions for coding agents working in this repo (Claude Code loads
this file through [CLAUDE.md](CLAUDE.md); Codex and Cursor read it directly).
Start at [LIONG-README](LIONG_Design_Document_Package/README.md) for
orientation, at
[LIONG-REG-001](LIONG_Design_Document_Package/LIONG-REG-001_Assumptions_Decisions_and_Open_Questions.md)
for requirement authority and open questions, and at
[the decision record index](docs/decisions/INDEX.md) for process decisions.
To set this standard up in another repository, start at
[Repo bootstrap](docs/agents/repo-bootstrap.md).

## Skills every agent loads

- **Writing for a person:** before writing anything a person will read, load
  the `clear-writing` skill and follow it — every reply, status update, doc,
  README, commit message, PR description, and any text the user asks to edit.
  Subagents load it too.
- **Changing the repo:** before changing anything, load the `way-of-working`
  skill and follow it. It owns the pull-request flow, the checks before every
  push, the independent review, watching open PRs, and the decision rules;
  this file points rather than restates. Where this file sets its own rule,
  this file wins; the hook wiring below is its one project-specific decision
  ([EPG-DEC-0001](docs/decisions/EPG-DEC-0001-reconcile-entire-and-dagger.md)).

## Before every push

1. **`scripts/check.sh` passes.** It runs the check tool's tests, lints the
   tracked Markdown, checks local link targets, verifies the decision-record
   index, runs the gate harness, and proves the run left the tree unchanged.
   CI ([`.github/workflows/check.yml`](.github/workflows/check.yml)) and the
   pre-push hook run the same script. `scripts/check.sh --with-dagger`
   additionally runs the container checks of the Dagger module (`.dagger`):
   Markdown structure, link targets, tool tests, and the decision-record
   check. The gate harness and the working-tree guard run locally only; a
   plain run is the same local steps without the containers.
2. **The hooks are wired.** A fresh clone runs `./scripts/bootstrap.sh` once;
   it sets `core.hooksPath` to `scripts/hooks`. Each hook chains the check
   script ahead of a verbatim copy of Entire's hook, so Entire's checkpoints
   and session-log sync keep working. With Entire absent, `commit-msg` prints
   a fallback note on stderr and the other four hooks run their non-Entire
   parts silently; each branch is asserted in `scripts/gates.test.sh`. The
   wiring shape is Decided in
   [EPG-DEC-0001](docs/decisions/EPG-DEC-0001-reconcile-entire-and-dagger.md)
   (tracked delegating hooks in `scripts/hooks`, confirmed by the owner
   2026-11-08). On a machine where Entire re-manages `.git/hooks`, that stays
   Entire's own state; this repo's hook entry point stays `scripts/hooks`.
   When the Entire CLI updates, re-diff `scripts/hooks/*` against the
   `.git/hooks` copies it installs.
3. **The independent review runs on the committed diff** before the pull
   request opens, per the `way-of-working` skill's review order. The findings
   are fixed or answered before the push.

## Working rules

- **Every change goes through a pull request.** One concern per PR. A reviewer
  merges or holds; address holds on the same branch.
- **Nothing is Decided or Approved without the owner's recorded words**, quoted
  in a [decision record](docs/decisions/INDEX.md). Decision records live in
  `docs/decisions/`; one record per decision, with its index row kept in step.
  What blocks a merge in review is in
  [REVIEW_STANDARDS.md](docs/REVIEW_STANDARDS.md).

## Entire and Dagger (EPG-DEC-0001)

- The **GitHub pull request** is the code-review and merge surface. Entire
  trails hold project-level intent across repositories: keep the trail
  description current after work, post project-level findings with
  `entire trail finding` (never as comments), and link the trail URL in the PR
  when one exists. Merging code goes through the reviewed PR, not
  `entire trail merge`.
- **Checkpoints are automatic.** The commit hooks capture the AI session; do
  not create manual checkpoints unless the owner asks.
- **Dagger** (`.dagger`, module `people-graph-ci`) runs the checks in
  containers. Its Markdown set and `scripts/check.sh`'s are one population:
  the population roots live in `scripts/md-set.sh`, and a change to the
  module's mount is a change to them, in the same PR. The container runs the
  Markdown, link, tool-test, and decision-record checks; the gate harness and
  the working-tree guard are local-only by nature, so the exact split — not
  an equivalence claim — is what this file states.
- **Everything degrades.** Without Entire, `commit-msg` prints a fallback
  note and the other four hooks run their non-Entire parts silently. Without
  Dagger, `check.sh` runs the same check steps through the local Node; with
  no CI, the pre-push hook is still the gate.

## Agent skills

GitHub Issues are the issue tracker through the `gh` CLI; PR bodies are not a
triage surface.
