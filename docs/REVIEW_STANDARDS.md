# Review standards

What blocks a merge in an independent review of this repository. This file
holds judgement rules only; every mechanical rule runs in `scripts/check.sh`.
Each rule names the incident that taught it. First round recorded
2026-11-08 ([EPG-DEC-0001](decisions/EPG-DEC-0001-reconcile-entire-and-dagger.md)
review, round 1).

- **A claim about tooling this repository delegates to must match the tooling
  outside the repository.** A decision record may say "the way-of-working
  skill keeps working unchanged" only when nothing has changed in it: changes
  to the skill's scripts — however small — are changes, and the record says
  what changed and where their PR is. Incident: round 1 of the EPG-DEC-0001
  review (2026-11-08) found a record that called the skill unchanged while
  seven of its files carried the Kimi `--auto` change.
