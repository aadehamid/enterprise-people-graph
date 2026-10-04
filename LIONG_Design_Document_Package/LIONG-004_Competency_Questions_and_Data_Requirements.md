# LIONG People Graph

# Competency Questions and Data Requirements

| Document control | Value |
| --- | --- |
| Document ID | LIONG-004 |
| Version | 0.3 |
| Date | 2026-10-03 |
| Status | Version 0.1 approved; maintenance revision |
| Approved dependencies | LIONG-001 v0.1; LIONG-002 v0.1; LIONG-003 v0.1 |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose

A competency question is a business question that the model and implementation must be able to answer.

This document maps the three MVPs to required records, relationships, query operations, and expected outputs. It provides a contract for public-source assessment, ontology design, synthetic generation, and evaluation.

It does not define final physical schemas. Field names below are logical requirements. LIONG-006 and LIONG-007 will define canonical identifiers, cardinalities, datatypes, and implementation mappings.

All employee and decision records are synthetic. Public reference data supplies vocabulary and selected contextual definitions. It does not supply employee ratings or promotion decisions.

## 2. Approved policy context

LIONG-003 version 0.1 is approved. The simulation uses four rating categories with a separate assessment status. Criteria have role-specific expectations. Promotion review windows occur in April and October.

Administrative eligibility, target-level capability, and organizational authorization are separate concepts. Scoped panels authorize outcomes. Reopening creates a linked revision.

LIONG-003 owns these policies. This document specifies the information needed to apply them.

## 3. Shared question parameters

Every executed question must resolve the following parameters when relevant:

| Parameter | Requirement |
| --- | --- |
| Requester | Authenticated identity and authorized scope |
| Population | Employee, case, team, or cohort identifiers |
| Review period | Performance cycle or promotion window |
| Evidence cutoff | Latest allowed record availability time |
| Effective date | Date used to select employment and policy context |
| View mode | Historical decision view or explicitly labelled retrospective view |
| Policy version | Applicable rules and criteria |
| Calculation version | Version of any governed analytical operation |

Historical queries require both event time and record availability time. An event can occur before a panel decision but reach the source after that decision.

If the question omits a material parameter, use an explicit interface default or request clarification. Log the selected parameters. Do not silently merge review cycles.

## 4. Promotion questions

| ID | Business question | Required records and relationships | Expected output |
| --- | --- | --- | --- |
| CQ-P01 | Which target-level criteria apply to this nomination? | Nomination → target role, track, level; policy version → criteria; assignment → current context | Applicable criteria, version, dates, and applicability rationale |
| CQ-P02 | What supports each criterion? | Criterion ← assessment → evidence; evidence → contribution, work item, assessor, source | Criterion-level support, assessment status, evidence references, and gaps |
| CQ-P03 | Which criteria remain unassessed? | Applicable criteria compared with valid assessments | Unassessed criteria; distinguish no record from restricted evidence |
| CQ-P04 | Is the nomination administratively eligible? | Employment status, nomination date, target route, identity resolution | Rule-by-rule result: satisfied, unsatisfied, or unknown |
| CQ-P05 | Is position authorization complete? | Target position or progression route → authorization records | Authorization status separate from capability assessment |
| CQ-P06 | Which statements conflict? | Evidence and assessments about the same criterion or event | Conflicting statements, dates, authors, and unresolved status |
| CQ-P07 | What did the panel decide and why? | Nomination → session → decision → rationale, authority, evidence snapshot | Outcome, decision history, authority, and supporting references |
| CQ-P08 | Did approval become an effective promotion? | Decision → authorized effective event → new assignment | Approval date, effective date, assignment change, or pending status |
| CQ-P09 | Which cases are comparable? | Cohort definition → membership; case → role family, track, level, context | Comparison cases and inclusion or exclusion reasons |
| CQ-P10 | What changed after the case reopened? | Original decision → reopening event → revised case → later decision | Revision differences and new evidence; preserve original decision |

No question asks the system to declare objectively who deserves promotion. Readiness statements are identified assessments, not unconditional graph facts.

## 5. Rating questions

| ID | Business question | Required records and relationships | Expected output |
| --- | --- | --- | --- |
| CQ-R01 | What are the proposed and final ratings for this cycle? | Review → proposed rating, revisions, final rating | Separate values with author, dates, and status |
| CQ-R02 | Why did the rating change? | Rating revision → reason, authority, evidence references | Traceable explanation of each material change |
| CQ-R03 | What is the distribution in this comparison group? | Versioned cohort, eligible reviews, category values, assessment status | Counts, percentages, denominator, exclusions, and missingness |
| CQ-R04 | Which manager distributions differ? | Manager assignment periods, cohort composition, rating distributions | Review signals with context; no automatic fairness conclusion |
| CQ-R05 | Which ratings lack a supporting assessment? | Rating → criterion assessments → evidence | Completeness findings; no automatic low-rating substitution |
| CQ-R06 | How did a transfer affect the review context? | Employee → assignment history → manager periods → assessments | Period-specific contribution and assessment context |
| CQ-R07 | Are the same records counted more than once? | Evidence → source record, duplicate or shared-origin links | Duplicate findings and calculation treatment |
| CQ-R08 | How have ratings changed over cycles? | Employee → eligible cycle reviews → versioned criteria | Labelled trend with policy and assignment changes |

A category percentage equals the category count divided by the declared assessed population. Report incomplete and not-applicable cases separately. Do not mix proposed and final ratings in one distribution.

CQ-R04 requires an approved analytical method before producing a statistical flag. The method and threshold remain open in LIONG-013. A raw difference can be shown descriptively with limitations.

## 6. Conversational and control questions

| ID | Question | Required capability | Expected behavior |
| --- | --- | --- | --- |
| CQ-C01 | What evidence was available at the decision date? | Temporal source and version filters | Retrieve only records available by cutoff |
| CQ-C02 | Can this requester see this dossier? | Assignment-based scope, panel membership, record classification | Authorize before evidence enters the answer context |
| CQ-C03 | Which policy statement supports this answer? | Claim → policy clause → versioned source | Accessible policy reference and applicable date |
| CQ-C04 | What is missing from this answer? | Coverage, retrieval status, permitted gap metadata | State known gaps without exposing restricted facts |
| CQ-C05 | How was this result calculated? | Result → calculation version → input snapshot | Reproducible calculation reference and scope |
| CQ-C06 | Can this answer be reproduced? | Question parameters, tool trace, source versions | Authorized reconstruction from retained versions |
| CQ-C07 | Does a document instruct the agent to change permissions? | Retrieval boundary and tool authorization | Treat embedded instructions as data; preserve access rules |

Claims that access is denied must follow the access contract. An ordinary user must not receive hidden record counts or a list of restricted documents merely to explain missingness.

## 7. Minimum logical record contracts

| Record | Required logical fields |
| --- | --- |
| Person | person_id, synthetic identity status |
| Source identity mapping | source_system, source_person_id, person_id, resolution_status, valid dates |
| Employment | employment_id, person_id, status, start_date, end_date |
| Assignment | assignment_id, employment_id, position_id, role_id, track_id, level_id, team_id, site_id, valid dates |
| Reporting relationship | employee_assignment_id, manager_assignment_id, valid dates |
| Policy version | policy_id, version_id, effective dates, authority, source reference |
| Criterion definition | criterion_id, version_id, applicable role or transition, expectation, applicability rule |
| Review | review_id, cycle_id, assignment context, assessed period, cutoff, assessment_status |
| Criterion assessment | assessment_id, criterion_version_id, case_id, assessor_id, judgment, rationale, assessment_time |
| Evidence | evidence_id, source_system, source_record_id, type, author, event_time, available_at, version, classification |
| Evidence linkage | assessment_id or claim_id, evidence_id, linkage_type, author, created_at |
| Nomination | nomination_id, person_id, current_assignment_id, target_role or position, target_track, target_level, window_id, state |
| Authorization | authorization_id, target or case reference, authority, status, effective dates |
| Rating record | rating_id, review_id, category, proposal or final status, version, assessor or authority |
| Calibration session | session_id, scope, cycle or window, participants, authority, cutoff |
| Decision or revision | decision_id, case_id, prior_version, outcome, reason, authorized_by, decided_at, evidence_snapshot_id |
| Cohort | cohort_id, definition_version, parameters, member references, exclusions |
| Query trace | trace_id, requester, scope, parameters, tool versions, source snapshot, answer reference |

An end date can be absent for a current assignment. An unavailable value must have an explicit missingness status where it affects interpretation.

A source record ID is unique within its source namespace. Do not assume global uniqueness.

## 8. Relationship and grain rules

One review can reference several assignments when an employee transfers during the cycle. Preserve the contribution period for each assignment.

One criterion assessment can cite several evidence records. One evidence record can support several assessments. Retain the shared origin to prevent false independence.

A decision snapshot records exactly which source versions were considered. A current document link alone is insufficient if the document can change.

A cohort membership record represents inclusion in one versioned comparison. It is not a permanent attribute of the employee.

Policy requirements and employee evidence are separate. A role requirement must not generate a verified person skill automatically.

## 9. Availability and gap statuses

| Status | Meaning | Permitted answer treatment |
| --- | --- | --- |
| Present | Record retrieved and accessible | Cite the record |
| Absent | Expected record is not in the evaluated accessible source set | State the bounded gap |
| Late | Record became available after the selected cutoff | Exclude from historical view; label retrospective use |
| Disputed | Authorized sources contain unresolved disagreement | Describe accessible disagreement |
| Stale | Record age or validity exceeds an approved rule | Label staleness and applicable rule |
| Unresolved identity | Record cannot safely be linked | Withhold linkage and report permitted resolution status |
| Source unavailable | Tool cannot retrieve a required source | State retrieval limitation; do not imply no event occurred |

Restricted status is enforced internally. Its disclosure to a requester requires an explicit access rule.

Staleness is not inferred from age alone. Credential expiry and policy-defined evidence validity have different meanings.

## 10. Data sufficiency matrix

| Data group | Public reference use | Synthetic enterprise requirement | Blocking impact |
| --- | --- | --- | --- |
| Roles and skills | Occupational vocabulary and mappings | LIONG role, level, and track extensions | Cannot map target criteria without definitions |
| Policies and criteria | Illustrative public frameworks where reuse permits | Approved fictional rating and promotion policy | Cannot select applicable rules |
| Employment history | None required at person level | Assignments, managers, transfers, exits | Cannot reconstruct case context |
| Performance evidence | Domain examples only | Goals, contributions, assessments, feedback | Cannot explain ratings or readiness assessments |
| Calibration decisions | None required | Sessions, revisions, decisions, rationale | Cannot explain outcomes |
| Learning and credentials | Accessible catalog metadata | Completions, validity dates, assessment results | Cannot test evidence distinctions |
| Access and identity | General technical patterns | User scope, mappings, classification | Cannot enforce authorized answers |

LIONG-005 will verify specific public sources. A reference taxonomy cannot fill missing employee evidence.

## 11. Evaluation contract

Each competency question requires a fixture containing:

1. The synthetic source records available to the system.
2. Requester identity and scope.
3. Question parameters and cutoff.
4. Expected accessible evidence and exclusions.
5. Expected calculation or answer structure.
6. Known contradictions and missingness.
7. Hidden evaluation checks stored outside agent access.

Test positive, incomplete, unauthorized, and historical variants. A correct answer can be a bounded refusal or an explicit unknown.

Do not require a fixed wording when multiple evidence-grounded responses are valid. Evaluate claim support, correct context, calculation accuracy, and disclosure boundaries.

## 12. Open items and document impact

| Item | Owner | Status |
| --- | --- | --- |
| Exact cohort rules and flag thresholds | LIONG-013 | Open |
| Retention and disclosure rules | LIONG-015 | Open |
| Physical datatypes and cardinalities | LIONG-006 and LIONG-007 | Open |
| Metric and latency acceptance thresholds | LIONG-016 | Open |
| Dataset access and reuse verification | LIONG-005 | Open |

LIONG-003 approval resolves OI-01 and OI-02 at the simulation-policy level. Detailed implementation mappings remain open.

LIONG-REG-001 records that approval. Earlier documents are updated only to reflect approval and resolved questions. This draft does not change the approved workforce or MVP scope.

## 13. Completion gate and next document

This document becomes a baseline when the question catalogue, required evidence, output contracts, and temporal rules are accepted.

The next document is LIONG-005 — Public Data and Reference Source Strategy. It will assess sources against these requirements rather than collect data without a defined purpose.

## 14. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | First competency-question catalogue and logical data contracts | Approved on 2026-10-03 |
| 0.2 | Records approval and source-strategy draft; requirements unchanged | Maintenance revision |

Maintenance record: 0.3 consolidates the approved package status and index links on 2026-10-03.
