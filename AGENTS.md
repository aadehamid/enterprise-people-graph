# Agent instructions — enterprise-people-graph

Shared instructions for coding agents working in this repo (Claude Code reads
this file through `CLAUDE.md`; Codex and Cursor read it directly). Start at
[LIONG-README](LIONG_Design_Document_Package/README.md) for orientation, at
[LIONG-REG-001](LIONG_Design_Document_Package/LIONG-REG-001_Assumptions_Decisions_and_Open_Questions.md)
for requirement authority and open questions, and at
[the decision record index](docs/decisions/INDEX.md) for process decisions.

## Skills every agent loads

- **Writing for a person:** load the `clear-writing` skill first and follow it.
  That covers every reply, status update, doc, README, commit message, PR
  description, and any text the user asks to edit. Subagents load it too.
- **Changing the repo:** load the `way-of-working` skill first and follow it.
  Where this file sets its own rule, this file wins
  ([EPG-DEC-0001](docs/decisions/EPG-DEC-0001-reconcile-entire-and-dagger.md)
  records the owner's choice).

## Before every push

1. **`scripts/check.sh` passes.** It runs the check tool's tests, Markdown
   structure over the tracked Markdown, local link checks, and the
   decision-record index comparison. CI
   ([`.github/workflows/check.yml`](.github/workflows/check.yml)) and the
   pre-push hook run it too. With the `dagger` CLI installed,
   `scripts/check.sh --with-dagger` additionally runs the container checks of
   the Dagger module (`.dagger`); a plain run is identical without them.
2. **The hooks are wired.** A fresh clone runs `./scripts/bootstrap.sh` once;
   it sets `core.hooksPath` to `scripts/hooks`. The hook files delegate to
   Entire, so Entire's checkpoints and session-log sync keep working, and
   degrade silently when Entire is not installed. On a machine where Entire
   re-manages `.git/hooks`, that remains Entire's own state; this repo's hook
   entry point stays `scripts/hooks`.
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
  containers. Its Markdown set and `scripts/check.sh`'s must stay the same
  population; a change to one is a change to the other in the same PR.
- **Everything degrades.** Without Entire, the hooks run their non-Entire
  parts and print Entire's fallback note. Without Dagger, `check.sh` runs the
  same checks through the local Node. Without CI, the pre-push hook is still
  the gate.

## Agent skills

GitHub Issues are the issue tracker through the `gh` CLI; PR bodies are not a
triage surface.
