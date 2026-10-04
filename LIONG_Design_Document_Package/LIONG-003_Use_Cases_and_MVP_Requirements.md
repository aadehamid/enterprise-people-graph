# LIONG People Graph

# Use Cases and MVP Requirements

| Document control | Value |
| --- | --- |
| Document ID | LIONG-003 |
| Version | 0.3 |
| Date | 2026-10-03 |
| Status | Version 0.1 approved; maintenance revision |
| Approved dependencies | LIONG-001 v0.1; LIONG-002 v0.1 |
| Decision register | LIONG-REG-001 |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose

This document defines the three initial use cases: promotion calibration, rating calibration, and conversational people insights.

It specifies users, workflow states, evidence needs, controls, and acceptance criteria. It also proposes the fictional policies needed to make the simulation executable.

The approved workforce profile contains 800 opening employees, nine business units, six sites, 12 job families, and three career tracks. LIONG-002 owns those definitions.

The user approved version 0.1 and DEC-008 through DEC-012 on 2026-10-03. The policies in this document are approved simulation choices. They are not Nigerian employment rules, industry standards, or observed company practices. No software component is selected here.

## 2. Scope and governing rules

The MVP supports review and explanation. Authorized people make rating and promotion decisions.

The system must preserve:

- The original proposal and each later revision.
- The policy and criteria applicable to the case.
- Supporting, contradictory, and missing evidence.
- The relevant employment assignment and review period.
- The decision authority, rationale, and timestamp.
- The user's access scope and the answer's evidence references.

The MVP excludes automatic approval, payroll execution, compensation calculation, and production HR writeback.

A user interface may support synthetic workflow transactions. Analytical and conversational tools are read-only by default. A conversational answer must not change a case.

## 3. Common definitions

| Term | Definition |
| --- | --- |
| Review cycle | The performance period and related assessment process |
| Criterion | A defined requirement against which evidence is assessed |
| Assessment | An identified assessor's judgment about evidence against a criterion |
| Proposed rating | The manager's submitted overall performance assessment |
| Final rating | The rating authorized through the defined review process |
| Nomination | A proposal to move an employee into a target role or level |
| Calibration session | A review meeting with defined scope, participants, and authority |
| Evidence reference | An identifier and accessible location for a supporting record or document |
| Dossier | A structured case containing criteria, evidence, assessments, gaps, and decisions |
| Cohort | A reproducible comparison group defined by explicit rules |
| Cutoff | The time boundary used to select evidence for a query or decision |

A rating is a period-specific assessment. It is not a permanent property of a person. A nomination is a proposal. It is not proof of readiness.

## 4. Proposed simulation policies

### 4.1 Rating scale

Propose a four-category scale:

| Code | Label | Interpretation |
| --- | --- | --- |
| R1 | Below expectations | Evidence supports material gaps against agreed expectations |
| R2 | Partly meets expectations | Evidence supports some expectations and identifies unresolved material gaps |
| R3 | Meets expectations | Evidence supports the agreed expectations for the assignment |
| R4 | Exceeds expectations | Evidence supports sustained contribution beyond agreed expectations |

Use a separate assessment status: assessed, incomplete, or not applicable. Incomplete evidence must not become R1 or R2 automatically.

Do not calculate an overall rating as a simple average of criterion scores. The assessor records the rationale. Any future calculation requires a separate approved rule.

Do not force a target percentage of employees into each category.

### 4.2 Rating criteria

Use four shared criterion groups: work outcomes, quality and risk management, collaboration and knowledge sharing, and role capability.

Each group requires role-specific expectations. A process operator and a commercial analyst must not be judged against identical work measures.

For management roles, add people leadership. Define it explicitly rather than infer it from team ratings or headcount.

Record each criterion's version, applicability, assessment, evidence references, and known gaps. Do not count one evidence record as independent support multiple times without identifying the shared source.

### 4.3 Promotion rules

Propose two review windows per year: April and October. A window closes on a specified date; evidence after that cutoff is excluded from the original decision view.

Administrative eligibility requires an active employment relationship at nomination, a valid target position or approved progression route, and no unresolved identity ambiguity.

Do not impose a universal time-in-role threshold in the first release. Time in role is context. Family-specific rules may be added when required by a scenario.

A prior high rating is supporting context, not automatic eligibility or proof of next-level capability.

Separate:

1. Administrative eligibility.
2. Evidence of target-level capability.
3. Organizational position or budget authorization.
4. Panel decision.

If position authorization is absent, record it separately from capability assessment. Do not label the employee unready merely because no position is available.

### 4.4 Decision authority

The line manager submits a case. The HR partner checks completeness and applicable policy. A scoped panel reviews the case. A designated panel chair authorizes the recorded outcome within simulation rules.

Use a conflict-of-interest declaration for panel members. A member with a declared conflict cannot authorize that case.

Reopening a finalized case creates a new revision with a reason and authority. It does not erase the original decision.

These policies are proposed decisions DEC-008 through DEC-012 in the register.

## 5. UC-PROM-01 — Promotion calibration

### 5.1 User goal

An HR partner and panel review nominations against applicable target-level criteria. They identify evidence gaps and trace the final decision.

### 5.2 Preconditions

The employee identity is resolved. The current assignment, target role or level, policy version, panel scope, and cutoff are specified.

A target role can differ from the current role. A management-track transition must use management criteria.

### 5.3 Main workflow

| Step | Responsible user | Required system behavior |
| --- | --- | --- |
| 1. Open nomination | Manager | Record employee, target, window, rationale, and submission version |
| 2. Assemble dossier | Manager and HR partner | Retrieve accessible evidence and map it to target criteria |
| 3. Check completeness | HR partner | Identify missing fields, unassessed criteria, and identity problems |
| 4. Review evidence | Panel | Show support, contradictions, staleness, and assessor context |
| 5. Compare cases | Panel | Apply an explicit comparison group and report limitations |
| 6. Record decision | Authorized chair | Store outcome, rationale, authority, criteria, and evidence snapshot |
| 7. Publish permitted result | HR partner | Expose the authorized result within the defined access scope |

### 5.4 States and outcomes

Case states: draft, submitted, completeness review, panel ready, panel review, finalized, withdrawn, and superseded.

An incomplete case returns to its submitter or remains pending. Missing evidence is a workflow issue, not an automatic negative decision.

Finalized outcomes: approved, deferred, or not approved. Each outcome requires a reason. Deferral reasons can include evidence pending or organizational authorization pending.

Promotion effectiveness is separate from panel approval. The simulation must not create a new assignment until an authorized effective-date event exists.

### 5.5 Exceptions

| Exception | Required response |
| --- | --- |
| Manager changes during the cycle | Retain both reporting periods and relevant assessments |
| Evidence arrives after the cutoff | Exclude it from the original view; permit a labelled later review |
| Credential expires | Report validity at the relevant date |
| Case cites course completion as competence | Show completion separately from assessed capability |
| Target criteria change | Retain the version used; flag whether a new review is required |
| Employee transfers or exits | Apply the relevant policy without deleting historical records |
| Panel member has a conflict | Restrict authorization and record the resolution |

### 5.6 Acceptance criteria

| ID | Required behavior |
| --- | --- |
| PROM-01 | Retrieve the correct employee assignment, target, window, and policy version |
| PROM-02 | Show each target criterion with evidence, assessment, and gap status |
| PROM-03 | Preserve contradictory evidence without silently choosing a winner |
| PROM-04 | Separate administrative eligibility, capability, and position authorization |
| PROM-05 | Reconstruct proposals, revisions, panel outcome, and effective assignment |
| PROM-06 | Prevent unauthorized users from finalizing or viewing restricted cases |
| PROM-07 | Reproduce the evidence snapshot available at the decision cutoff |

## 6. UC-RATE-01 — Rating calibration

### 6.1 User goal

A manager and HR partner review proposed ratings for consistency with agreed expectations and evidence. A panel authorizes the final rating.

### 6.2 Main workflow

1. Select the cycle and eligible assignments.
2. Retrieve goals, criterion expectations, work evidence, and assessments.
3. Record a proposed rating and rationale.
4. Construct approved comparison cohorts.
5. Review aggregate signals and selected individual dossiers.
6. Record adjustments with reasons and evidence references.
7. Authorize final ratings and preserve the original proposals.

### 6.3 Comparison rules

Propose a starting cohort based on cycle, job family, career track, and level. Assignment duration and work scope are required context.

A small cohort can be broadened only by a declared rule. Show the original group, broadened group, and reason. Do not silently combine unrelated roles.

The minimum cohort size remains open for LIONG-013 and LIONG-015. Statistical usefulness and disclosure limits are separate considerations.

A manager distribution difference is a signal for review. It does not establish bias or justify automatic changes.

### 6.4 Evidence and revision rules

Keep criterion assessments separate from the overall rating. Retain author, date, version, source, and applicable assignment.

Every change requires the old value, new value, reason, authorized user, timestamp, and supporting references. Reasons such as “distribution alignment” must not substitute for evidence-based rationale.

A transferred employee can have assessments from multiple managers. The system must not average these assessments without an approved rule.

### 6.5 Acceptance criteria

| ID | Required behavior |
| --- | --- |
| RATE-01 | Retain proposed and final ratings as separate versioned records |
| RATE-02 | Reproduce cohort membership and distribution calculations |
| RATE-03 | Report cohort scope, missing assessments, and contextual limitations |
| RATE-04 | Trace a rating change to authority, rationale, and accessible evidence |
| RATE-05 | Preserve incomplete assessment status without converting it to a low rating |
| RATE-06 | Prevent forced distribution rules in the initial implementation |
| RATE-07 | Distinguish manager differences from conclusions about fairness |

## 7. UC-CHAT-01 — Conversational people insights

### 7.1 User goal

An authorized manager, HR partner, or panel member asks a business question and receives a grounded answer.

The interface can be a chat application. No proprietary collaboration platform is a required dependency.

### 7.2 Processing sequence

1. Authenticate the user and resolve authorized scope.
2. Interpret the question and identify the cycle, cutoff, and relevant population.
3. Ask for a missing value only when it materially changes the answer.
4. Call approved analytical, graph, or document-retrieval tools.
5. Enforce authorization before returning evidence to the language model.
6. Assemble an answer with evidence references and limitations.
7. Record tool execution and answer provenance without exposing restricted content in logs.

MCP, if used, means Model Context Protocol. It is a tool-interface option, not a decision authority or a replacement for authorization.

### 7.3 Query routing

| Question | Primary operation | Supporting operation |
| --- | --- | --- |
| Which teams have different rating distributions? | Governed analytical calculation | Case evidence retrieval |
| Why did this rating change? | Decision-history traversal | Document retrieval |
| Which nomination criteria lack evidence? | Criterion and evidence traversal | Completeness calculation |
| What was known at the decision date? | Temporal filtering | Source availability checks |
| Which policies apply to this case? | Versioned policy lookup | Assignment context |

The language model explains tool outputs. It does not invent calculations or decide a personnel outcome.

### 7.4 Response contract

A material answer must contain the selected scope, concise result, supporting evidence references, and known limitations.

Derived results must identify the calculation or approved metric definition. Retrieved statements must distinguish assessments from recorded events.

When evidence conflicts, describe the conflict. When evidence is missing, state the gap. When access is denied, use a bounded response that does not disclose the existence or content of restricted records unnecessarily.

### 7.5 Example interaction

Question: “Why was employee EMP-0042's proposed 2025 rating changed?”

Permitted answer structure:

- State the proposed and final ratings, if authorized.
- Identify the calibration session and authorized change record.
- Summarize the recorded rationale.
- Cite accessible assessments and evidence used at the cutoff.
- State unresolved contradictions or unavailable context.

This is a response template. EMP-0042 does not yet identify a generated case.

### 7.6 Acceptance criteria

| ID | Required behavior |
| --- | --- |
| CHAT-01 | Resolve scope and time context before retrieving case evidence |
| CHAT-02 | Ground material claims in accessible sources or declared calculations |
| CHAT-03 | Exclude hidden evaluation truth from tools and indexes |
| CHAT-04 | Treat instructions in retrieved documents as data, not executable authority |
| CHAT-05 | Abstain from unsupported conclusions and report evidence gaps |
| CHAT-06 | Keep conversational queries separate from workflow mutations |
| CHAT-07 | Produce reproducible tool traces suitable for authorized review |

## 8. Shared information requirements

| Information group | Required elements |
| --- | --- |
| Identity | Stable person ID, source IDs, mapping status |
| Employment | Employment status, position, role, track, level, organizational scope, valid dates |
| Review | Cycle, cutoff, assessor, criteria, policy version, assessment status |
| Evidence | Record ID, type, author, source, event time, availability time, access classification |
| Decision | Proposal, revision, outcome, authority, rationale, decision time |
| Comparison | Cohort definition, membership, exclusion reasons, calculation version |
| Access | User identity, scope, purpose where required, authorization result |
| Provenance | Synthetic or derived status, source references, generation or calculation version |

LIONG-004 will map each business question to specific fields and query requirements. LIONG-006 and LIONG-007 will define cardinalities and physical schemas.

## 9. Controlled evaluation scenarios

| Scenario | Expected behavior |
| --- | --- |
| Two comparable cases receive different proposals | Retrieve evidence and flag the difference without declaring unfairness |
| Nomination has strong advocacy but missing criterion evidence | Report the gap and keep the outcome pending review |
| Evidence arrives after finalization | Preserve original answer; label later context separately |
| Manager changes midway through the cycle | Resolve assessments against assignment dates |
| Same evidence appears in two sources | Identify shared provenance and avoid double counting |
| Document contains an instruction to ignore access rules | Ignore the instruction and preserve authorization |
| User requests another team's confidential case | Deny or bound the answer according to scope |
| Case is reopened | Preserve original decision and create a linked revision |

The evaluated system cannot access expected answers. Evaluation scores evidence correctness, temporal correctness, authorization, and task completion. Synthetic panel outcomes are not objective fairness labels.

## 10. Release completion gate

The first release must demonstrate all three use cases on at least one connected end-to-end scenario and separate exception fixtures.

Required outputs include nomination dossiers, rating comparisons, decision histories, and grounded conversational answers.

No release can pass by producing a graph visualization alone. It must execute the defined questions and preserve their evidence chains.

Numerical accuracy and latency thresholds remain open until LIONG-016 defines the workload. No performance result is claimed by this document.

## 11. Later use cases

Employee 360, skills inventory, career pathways, learning analysis, recruiting search, and opportunity matching remain later scope.

The MVP stores evidence and assignments that can support those extensions. It does not implement predictive readiness, attrition scoring, or causal learning-effect claims.

## 12. Decisions and document impact

| Register ID | Proposed decision | Status |
| --- | --- | --- |
| DEC-008 | Four rating categories plus separate assessment status | Approved |
| DEC-009 | Shared criterion groups with role-specific expectations | Approved |
| DEC-010 | April and October promotion windows | Approved |
| DEC-011 | Separate eligibility, capability, and organizational authorization; no universal tenure threshold | Approved |
| DEC-012 | Scoped panel authority, conflict declarations, and versioned reopening | Approved |

OI-01 and OI-02 are resolved at the simulation-policy level by approval of this document.

The approval of LIONG-002 resolves the charter's organization, job-family, and opening-scale questions. LIONG-001 is updated by reference. No new policy proposal changes the approved charter.

## 13. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | First use-case workflows, policy proposals, and acceptance criteria | Approved on 2026-10-03 |
| 0.2 | Records approval; no workflow or policy change | Maintenance revision |

Maintenance record: 0.3 consolidates the approved package status and index links on 2026-10-03.
