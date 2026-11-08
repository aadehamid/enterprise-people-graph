# EPG-DEC-0001 — Reconcile Entire and Dagger with the way-of-working guardrails

| Field | Value |
| --- | --- |
| Record ID | EPG-DEC-0001 |
| Status | Decided |
| Date | 2026-11-08 |
| Decided by | Hamid Adesokan (owner) |

## Context

The repository runs Entire (session check-pointing, trails) and Dagger
(container checks in `.dagger`) beside the `way-of-working` guardrails. Entire
had installed its Git hooks into `.git/hooks`, so no tracked pre-push hook ran
the check script, which is what the guardrails require before every push. The
guardrails say an existing or shared hook setup is reported and wired by the
owner's decision, not overwritten.

## Recommendation presented

The recommendation the owner answered, from the session message of 2026-11-08
(condensed; the original message carried the same options in full): keep the
division of labor of GitHub pull request as the review and merge surface,
Entire trails as the project-level record with findings instead of comments,
and Dagger as the container check runner; and wire the checks into the
repository by tracking delegating hooks in `scripts/hooks`, pointing
`core.hooksPath` there through `scripts/bootstrap.sh`, with each hook
delegating to Entire when its CLI is installed and degrading silently when it
is not — so the tracked-hook model of way-of-working keeps working in any
repository, Entire or not.

## Decision

The owner's words, quoted verbatim from the 2026-11-08 session message
(no Markdown stripped, typos kept):

"let us address all of this. Please do not modify way of working dramatically. It needs to keep working where there is no entire and dagger. but must work together when they are all present . Also adress the small items take insipration from enteprise performance model repo AGENTS.md

have whatever we do be reivewed by independent review as required by way of working"

## What this settles and what stays open

- Settled: the reconciliation runs in this repository, on the owner's words,
  with the way-of-working skill left unchanged.
- Settled: every change from this work goes through the independent review the
  owner restated ("have whatever we do be reivewed...").
- Proposed, pending the owner's confirmation on the pull request: the hook
  wiring detail — tracked delegating hooks in `scripts/hooks` plus
  `core.hooksPath` — rather than wrapping the untracked `.git/hooks/pre-push`
  in place. The owner's message names the direction (way-of-working keeps
  working without Entire and Dagger) but not this detail. Either choice
  satisfies what the owner said; `scripts/hooks` was chosen because it is
  tracked and survives a fresh clone.

## Alternatives considered

- Wrapping `entire`'s hooks in `.git/hooks` in place: not tracked, lost on a
  fresh clone, and overwritten by an Entire CLI update or reinstall.
- Leaving hook checks out and relying on Dagger CI alone: breaks the
  check-before-every-push rule wherever Dagger or CI is absent, and this
  repository currently has no GitHub workflow running Dagger.

## Evidence

- `git config core.hooksPath` printed nothing; `.git/hooks` held Entire's
  five hooks (`prepare-commit-msg`, `commit-msg`, `post-commit`, `post-rewrite`,
  `pre-push`), each delegating to `entire hooks git <name>`.
- `entire agent-help` on 2026-11-08: `pre-push` pushes session logs alongside
  the user's push; checkpoints sync on commit; trails span repositories.
- `entire doctor` on 2026-11-08 reported hooks OK and finalized 2 exited
  sessions; it re-ran clean after the wiring.
- The Dagger module `.dagger/modules/people-graph-ci` ran three checks
  (markdown structure, link targets, checker tests) in containers, mounted
  from the repository's Markdown include set.
