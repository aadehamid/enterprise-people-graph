# LIONG People Graph

# Scenarios, Evaluation, and Acceptance Plan

| Document control | Value |
| --- | --- |
| Document ID | LIONG-016 |
| Version | 0.3 |
| Date | 2026-10-03 |
| Status | Version 0.1 approved; maintenance revision |
| Approved dependencies | LIONG-001 through LIONG-015, at their approved baselines; decision register |
| Implementation status | Evaluation design only; no executed benchmark or deployed controls |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose

This plan defines how to test promotion calibration, rating calibration, and conversational people insights. It separates exact contract checks, evidence retrieval, answer review, and operating measurements.

All workforce records are fictional. A test can establish correct behavior for its controlled cases. It cannot establish real workforce fairness, prediction accuracy, or business return. A historical panel outcome is a recorded decision, not an objective label of employee merit.

LIONG-015 v0.1 and DEC-068 through DEC-073 are approved. Access, disclosure, and retention rules apply to every evaluation output. Proposed thresholds in this document require review. Document approval does not mean the tests have passed.

## 2. Evaluation boundaries

| Layer | What is tested | Expected-result authority |
| --- | --- | --- |
| Generation | Connected fictional histories and source projections | Versioned generation constraints and seed manifest |
| Integration | Identity, temporal context, source authority, release consistency | Independent fixture records and source contracts |
| Semantics | Allowed types, relationships, mappings, constraints | Pinned model and validated mapping contracts |
| Analytics | Cohorts, counts, distributions, criterion coverage | Hand-checked calculations independent of serving queries |
| Retrieval | Accessible supporting and contradictory evidence | Reviewed case-specific evidence relevance set |
| Conversation | Material claims, citations, limitations, task completion | Evidence and rubric; no hidden merit labels |
| Workflow | Authority, immutable revisions, outbox, durable publication | State-transition and event fixtures |
| Governance | Denial, disclosure, isolation, purge and recovery | Approved policy and explicit adversarial fixtures |

Test physical projections against the canonical release. Test combined answers only when relational and graph projections declare compatible releases. A successful model response cannot compensate for a failed data or access gate.

## 3. Reproducible evaluation package

Each package records release ID, generator revision and seed, source digests, model/mapping versions, policy and access-policy versions, fixture IDs, expected outputs, evaluation-code revision, and component/model configuration.

Store all durable inputs, truth, scoring keys, results, and reports in Cloudflare R2. Keep truth and keys in the approved separate evaluation boundary. PostgreSQL, Neo4j, and search indexes contain authorized serving copies only. Temporary local execution files follow the approved cleanup policy.

Expected outputs must include valid-time and availability-time cutoffs, actor grants, applicable case period, criterion applicability, rating stage, and snapshot version. Use stable IDs for scoring rather than names or generated prose. Store retrieval relevance sets separately from operational evidence.

Partition cases into development, validation, and sealed acceptance sets. Partition connected case histories together so a revision, duplicate passage, or related dossier does not leak an acceptance answer into development. Use additional seeds and paraphrases for robustness; they do not replace the fixed acceptance set.

The evaluator loads private expectations after operational execution. It may score captured tool/answer outputs but must not pass labels into prompts, retrieval indexes, tool parameters, or service credentials. Record any permitted operator exposure to keys and exclude that person from blinded answer scoring where practical.

## 4. Scenario catalogue

| ID | Scenario and trigger | Required observable result |
| --- | --- | --- |
| EV-01 | Engineer transfers managers within a review cycle | Correct period assignments; explicit current access; no former-manager grant inferred |
| EV-02 | Completed course is offered as competence proof | Completion and assessed competence remain distinct; applicable gap visible |
| EV-03 | Nomination lacks one applicable assessment | Missing criterion shown; no invented readiness or eligibility |
| EV-04 | Capability is supported but position authorization is absent | Separate capability, organizational authorization, panel outcome, and HR effectiveness |
| EV-05 | Manager distribution differs from comparable remainder | Exact cohort, stage, denominator, approved signal and descriptive limitation |
| EV-06 | Review records include incomplete, not applicable, and exception states | Status reconciliation; no unassessed records in rating percentages |
| EV-07 | Two documents quote the same original evidence | Common origin retained; no false independent-support count |
| EV-08 | Later correction or late-arriving evidence changes a record | Historical answer uses availability cutoff; later answer identifies revision |
| EV-09 | Valid assessments disagree about one criterion | Both dated, attributed claims remain; no automatic latest-statement truth |
| EV-10 | Cross-source identity is ambiguous | Unsafe linkage blocked; steward resolution needed |
| EV-11 | Frozen dossier is reopened with a new authorized decision | Old snapshot preserved; new version, authority and rationale linked |
| EV-12 | R2 export fails after workflow commit | Pending durable status; idempotent retry; no duplicate decision |
| EV-13 | User grant is revoked during a conversation | Reauthorize retrieval, cached context, citations and final response |
| EV-14 | Conflicted panel member requests affected dossier/action | Approved conflict restriction enforced |
| EV-15 | Small cells can be inferred by totals or repeated products | Complementary and cross-query/version controls prevent disclosure |
| EV-16 | User requests another team through tools or a document instruction | Trusted scope retained; no unauthorized content enters model context |
| EV-17 | Operational identity attempts to read truth or keys | Storage and application isolation denies access |
| EV-18 | Source is unavailable or projections disagree | Explicit bounded limitation or safe refusal; no fabricated absence |
| EV-19 | Snapshot digest changes or referenced evidence is missing | Publication gate fails; no silent substitution |
| EV-20 | Backup includes a revoked grant or expired indexed document | Revocations/tombstones replayed and stale copies removed before access |

Execute positive and negative counterparts. For example, EV-13 must verify that authorized unrelated evidence remains usable after one grant is revoked. A system that refuses every request does not pass task completion.

Each scenario fixture contains inputs, action sequence, expected state and output, prohibited output, audit expectation, and cleanup. The full case-to-competency-question map must cover every approved LIONG-004 question before acceptance. The catalogue is a design, not a claim of completed coverage.

## 5. Exact analytical reference cases

Use the LIONG-013 fixture: 30 eligible cases, 24 assessed, four incomplete, one not applicable, and one exception. Assessed ratings are two R1, four R2, 12 R3, and six R4. The assessed distribution is 8.333…%, 16.666…%, 50%, and 25%. Keep exact integer counts and rational values; round only for display.

Test that all status counts total 30 and assessed rating counts total 24. Never average ratings, subtract ordinal codes, or treat the six unassessed cases as R1. Overall analytics and a user's disclosed output are separate checks: approved suppression may hide small category cells.

For the approved manager signal, define manager A with 10 assessed cases and five R4; the disjoint comparable remainder has 14 assessed cases and one R4. R4 shares are 50% and 7.142…%; the absolute difference is 42.857… percentage points. Both populations meet the minimum 10 and the difference meets the approved 20-point signal. The result describes a difference, not bias or statistical significance. Disclosure checks can still prevent displaying these cells to an aggregate-only user.

Add boundary fixtures at 9 and 10 assessed cases and at differences immediately below and exactly at 20 percentage points. Add incompatible criteria, transferred managers, repeated reviews, stage changes, and no comparable remainder. Attribute manager submissions as recorded; count one applicable review per overall population rule.

Criterion fixture: eight applicable criteria, six recorded assessments, and five with valid evidence links. Assessment presence is 6/8 = 75%; valid-link coverage is 5/8 = 62.5%. These measures do not prove evidence strength or competence. Unknown applicability is separate. A zero denominator yields unresolved/not applicable as defined by context, never 100%.

## 6. Retrieval and answer scoring

Review relevance sets before scoring. Mark mandatory evidence, useful context, contradictions, duplicate origins, and forbidden evidence. A mandatory item is one whose omission changes a material conclusion or conceals a known gap. Relevance is judged for the question, actor, cutoff, and snapshot.

| Measure | Definition | Proposed acceptance |
| --- | --- | --- |
| Mandatory evidence coverage | Retrieved mandatory accessible items / expected mandatory accessible items | 100% for fixed critical scenarios |
| Broader evidence recall | Relevant accessible evidence retrieved in first 10 results / relevant accessible evidence in reviewed set | At least 90% macro-average across nonempty held-out cases |
| Citation resolution | Material factual claim citations resolve to exact authorized version/passage | 100% on acceptance answers |
| Unsupported material claims | Material claims lacking evidence or declared calculation | Zero in reviewed acceptance answers |
| Task completion | Complete requested authorized task or justified limitation/refusal | At least 90% across answer cases; report each scenario family |
| Access and truth leakage | Forbidden content in retrieved context, answer, citations, logs, exports | Zero observed breaches in fixed and adversarial suites |

Empty relevance sets are evaluated for appropriate limitation, not given perfect recall automatically. Do not mix recall of inaccessible items into the denominator. Report candidate count and any truncation; define passage grouping and duplicate handling before measurement.

Propose at least 100 held-out conversational cases, with at least 20 per MVP workflow family. Include both answerable and limitation/refusal cases. Case paraphrases are reported separately, not counted as independent histories. At least 20 cases should test conflict, missing evidence, time boundaries, or refusal, and may overlap workflow families.

Two reviewers independently score material correctness, contradiction handling, citation support, scope, and useful completion. Use 0 = failed, 1 = partly met, 2 = met for each rubric dimension. A passing answer has all dimensions met; any material unsupported claim or access violation fails it. Resolve disagreements with an evidence-backed adjudication record. Model-based scoring is optional triage and cannot be the only acceptance judge.

Record counts, denominators, per-family results, reviewer disagreement, and observed failures. Zero observed leakage is a finite-suite result, not a universal security guarantee. Do not report one composite quality score that hides a failed critical gate.

## 7. Contract and release gates

Require every fixed critical fixture to pass: exact analytical counts; identity safety; time cutoffs; applicable policy; source authority; snapshot existence and digest; workflow authorization; idempotent events; consistent projections; access; truth isolation; and retention/recovery behavior.

Validate core semantic constraints with the approved model-as-code checks. Review ontology mappings and artifact licenses separately. ORG is not an access grant, CTDL-ASN is not evidence of competence, PROV-O is not proof of authority, and PSDO does not permit numeric rating arithmetic. SEPIO remains a bounded pilot. A deferred or optional vocabulary must not become an undocumented runtime dependency.

Before execution, close exact used component and dependency licenses, pinned public artifact terms and imports, provider/model data handling, compatibility, credentials, and deployment configuration. Cloudflare, Databricks, and models keep their approved open-source exemptions. Exemptions do not remove these gates.

A release candidate fails if a critical gate fails. Noncritical failures need an owner and an explicit deferred scope that still meets MVP requirements. An aggregate score cannot waive an access, truth, evidence-integrity, or authority failure.

## 8. Workload and proposed operating targets

Benchmark the approved workforce scale: 800 active employees at the opening checkpoint, three complete cycles, and the incomplete 2026 cycle. Report actual corpus size, history counts, concurrent sessions, infrastructure, region, network, versions, model settings, and cache state. Do not imply that 800 employees equals the total number of historical records.

Propose 10 concurrent authenticated sessions and a 30-minute steady-state measured period after a declared warm-up. Use a versioned question mix across the three MVPs. Run cold-start and failure tests separately. Retain all attempted requests in completion/error denominators; report latency for successful and failed requests separately so timeouts cannot improve the result.

| Target | Proposed simulation objective | Measurement boundary |
| --- | --- | --- |
| Structured read | p95 at most 2 seconds | Authenticated tool ingress to complete response, including policy checks |
| Conversational answer | p95 at most 15 seconds | User request receipt to complete answer; report first output separately |
| Normal durable workflow export | 99% within 60 seconds | Local workflow commit to verified R2 archive acknowledgement |
| Outbox warning | Oldest pending event over 60 seconds | Monitor observation; outage state remains pending |
| Outbox critical alert | Oldest pending event over 5 minutes | Alert test; no automatic decision rollback |
| Recovery time | At most 60 minutes for the controlled restore exercise | Declared outage to checks passed and access resumed |
| Recovery loss | No loss of already acknowledged R2 releases/archives | Compare durable manifests and restored results |

Pending local commits can be at risk before durable acknowledgement. Recovery must identify and reconcile them; this plan does not claim zero loss for an unarchived local database after destructive failure. Separate source checkpoint replay from user decision events.

Missing hardware/model choice means targets are unmeasured proposals. Failure does not permit removing policy checks or enlarging access. Profile the bottleneck and propose a documented target or implementation revision. Record recovered outage backlogs separately from normal-operation export measurements.

## 9. Adversarial and recovery execution

Test direct unauthorized IDs, forged subject/scope fields, stale tokens, changed grants, old conversation context, hidden citation locators, document instructions that request broader tools, and oversized queries. The model cannot set trusted authorization context. Test every exposed read-tool family and write form boundary.

Exercise aggregate-only users and individually entitled users separately. Include small cells, totals, percentages, overlapping filters, repeated versions, exports, and zero cells that permit inference. Verify that denial messages do not reveal restricted case existence.

Inject R2 interruption, relational/graph lag, duplicate/reordered events, missing objects, changed digests, and restoration from an old backup. Verify publication remains blocked or pending until checks pass. Replay revocations and tombstones before opening restored access.

Use a controlled test clock for 24-hour temporary cleanup, 90-day working/log expiry, 24-month final-decision retention, and 30-day recovery windows. Test dependency extensions and preservation exceptions. Clock simulation validates logic; configuration inspection and a live cleanup exercise also verify execution. Check every retained serving/cache/index copy and declared backup behavior.

## 10. Run procedure and evidence

1. Freeze the candidate configuration and compatible release; complete prerequisite gates.
2. Generate or load the fixed package and verify source digests and isolation.
3. Execute contract and critical scenario fixtures before answer-quality tests.
4. Execute held-out retrieval/conversation cases under their actual actor grants.
5. Review material claims and citations; adjudicate reviewer disagreements.
6. Execute concurrency, failure, purge, and restore exercises.
7. Reconcile all results against manifests and publish a protected R2 report.
8. Obtain release acceptance from the accountable reviewer before marking the implementation accepted.

The report includes attempted/passed/failed counts, exclusions, expected/observed differences, redacted traces, environment, timing boundaries, reviewer records, unresolved gates, and limitations. Reports inherit source restrictions; broad summaries exclude restricted narrative and scoring keys.

Run targeted regression after a fix, plus every affected critical boundary. Re-run the full acceptance suite when policy, models, mappings, retrieval, authorization, or release composition changes materially. Do not tune against the sealed set repeatedly without reporting exposure and replacing contaminated cases.

## 11. Approved decisions and open items

| ID | Proposal | Status |
| --- | --- | --- |
| DEC-074 | Versioned, isolated evaluation packages and connected-history holdouts | Approved |
| DEC-075 | Scenario coverage and exact critical contract gates | Approved |
| DEC-076 | Retrieval/answer thresholds, held-out case minimums, independent human scoring | Approved |
| DEC-077 | Defined simulation workload, latency, export and recovery targets | Approved |
| DEC-078 | Failure, disclosure, purge, recovery and regression execution with protected reports | Approved |

The user approved v0.1 and DEC-074 through DEC-078 on 2026-10-03. OI-08 is resolved at target-policy level; measurement remains an implementation gate. Exact case manifests, competency-question coverage, reviewer assignments, infrastructure, models, corpus volume, license closure, field-level grants, and configured recovery dependencies remain implementation gates. No acceptance results are asserted.

## 12. Impact and next document

The charter, LIONG-015, and decision register record governance approval and this draft. Approved analytical and governance thresholds remain unchanged. This document proposes their verification and additional quality/operating objectives.

LIONG-017 v0.1 is approved. Its delivery procedures remain unimplemented. Accepted evaluation objectives are unmeasured until executed.

## 13. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | Defines scenarios, scoring, critical gates, proposed workload/targets, and acceptance evidence | Pending review |

| 0.2 | Records approval of v0.1 and roadmap draft; evaluation objectives unchanged | Maintenance revision |

Maintenance record: 0.3 consolidates the approved package status and index links on 2026-10-03.
