# EPG-DEC-0001 — Reconcile Entire and Dagger with the way-of-working guardrails

| Field | Value |
| --- | --- |
| Record ID | EPG-DEC-0001 |
| Status | Decided |
| Date | 2026-11-08 |
| Decided by | Hamid Adesokan (owner) |
| Amended | 2026-11-08 (Kimi reviewer flags; see the amendment below) |

## Context

The repository runs Entire (session check-pointing, trails) and Dagger
(container checks in `.dagger`) beside the `way-of-working` guardrails. Entire
had installed its Git hooks into `.git/hooks`, so no tracked pre-push hook ran
the check script, which is what the guardrails require before every push. The
guardrails say an existing or shared hook setup is reported and wired by the
owner's decision, not overwritten.

## Recommendation presented

The recommendation the owner answered, quoted verbatim from the agent's
session message of 2026-11-08 (Markdown kept, nothing shortened):

"## Division of labor (one source of truth per rule)

- **GitHub PR:** code review and merge. Way-of-working rule 2 stays here.
- **Entire trail:** project-level record across repos and branches. Keep the trail description current with `entire trail update`, post project-level findings with `entire trail finding`. The trail description should point to the repo's decision records, not restate them.
- **Dagger:** runs the check script in CI.

## The real clash: pre-push

`core.hooksPath` is unset and Entire has installed its own hooks directly in `.git/hooks`: `prepare-commit-msg`, `commit-msg`, `post-commit`, `post-rewrite`, and `pre-push`. Entire's `pre-push` only pushes session logs. Way-of-working session-start step 3 expects a tracked pre-push hook that runs one check script, and its own rule says: report a shared or existing hook setup and ask, rather than overwrite it.

Two options for you to decide:

1. **Wrap the hook (my recommendation).** `.git/hooks/pre-push` runs the check script first, then `entire hooks git pre-push`. The check script lives in the repo (Dagger CI calls the same one), and the hook delegates to Entire last. Risk to verify: an Entire CLI update or reinstall may rewrite the hook, so the wrapper needs re-applying — test before committing to it.
2. **Track a `.githooks/` directory and set `core.hooksPath`.** Each hook delegates to Entire, and pre-push runs the check script plus `entire hooks git pre-push`. Cleaner because everything is tracked, but it changes where Entire's hooks live, and I don't know yet whether Entire installs into a custom `hooksPath`."

## Decision

The owner's words, quoted verbatim from the 2026-11-08 session message
(two messages, joined in the order sent; no Markdown stripped, typos kept):

"let us address all of this. Please do not modify way of working dramatically. It needs to keep working where there is no entire and dagger. but must work together when they are all present . Also adress the small items take insipration from enteprise performance model repo AGENTS.md

have whatever we do be reivewed by independent review as required by way of working"

## What this settles and what stays open

- Settled by the owner's words: the reconciliation runs in this repository;
  the way-of-working skill is not modified dramatically and keeps working in
  repositories with neither Entire nor Dagger; every change goes through the
  independent review the owner restated; the process file takes its shape
  from the Enterprise Performance Model repository's `AGENTS.md`.
- Proposed, pending the owner's confirmation on the pull request: the hook
  wiring detail — tracked delegating hooks in `scripts/hooks` plus
  `core.hooksPath` — rather than wrapping the untracked `.git/hooks/pre-push`
  in place. The owner's message names the direction (way-of-working keeps
  working without Entire and Dagger) but not this detail. Either option
  above satisfies what the owner said; option 2's shape (as `scripts/hooks`)
  was chosen because it is tracked and survives a fresh clone. When the pull
  request merges with the owner's confirmation, remove the Proposed marker
  from `AGENTS.md` and here.

## Alternatives considered

- Wrapping `entire`'s hooks in `.git/hooks` in place (option 1 of the
  recommendation): not tracked, lost on a fresh clone, and overwritten by an
  Entire CLI update or reinstall.
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

## Amendment 2026-11-08 — Kimi reviewer flags

Mid-review, the owner said (quoted verbatim, from the 2026-11-08 session
message):

"kimi is asking for approval. can we open it to give it auto approval next time"

The agent changed the way-of-working review scripts' Kimi flags from `-y`
(Ask When Needed, whose read-approval prompts had blocked the running
review) to `--auto` (Never Ask), in `herdr-review.sh`, `hc-review.sh`,
`rex-review.sh` and their three test suites, and changed the matching line in
`references/before-push.md`. These files live in the `personal-agent-skills`
repository, not in this one; those edits are pending that repository's own
review and pull request. Until that pull request merges, this amendment is
Proposed; the owner's words approve the direction.
