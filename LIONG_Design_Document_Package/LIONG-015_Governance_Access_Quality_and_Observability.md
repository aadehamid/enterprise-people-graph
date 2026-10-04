# LIONG People Graph

# Governance, Access, Quality, and Observability

| Document control | Value |
| --- | --- |
| Document ID | LIONG-015 |
| Version | 0.3 |
| Date | 2026-10-03 |
| Status | Version 0.1 approved; maintenance revision |
| Approved dependencies | LIONG-009 integration, LIONG-012 architecture, LIONG-013 analytics, LIONG-014 v0.1 interfaces, and approved ontology assessment |
| Implementation status | Proposed simulation controls; no deployed access or retention configuration |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose and governing boundary

This document defines who can use each data class, how disclosure is controlled, how records are retained, and how quality and operations are checked.

All employee records are fictional. The rules below are proposed LIONG simulation policies, not observed enterprise practices or a statement of statutory retention requirements. A later use with real personnel data requires separately approved policies.

Cloudflare R2 stores all durable data. Serving copies, indexes, caches, prompts, analytical products, and exports must respect the same classification and access rules. Cloudflare, Databricks, and model choices retain their approved exceptions. Other components require version-specific open-source checks.

The first conversational path remains read-only. Human actions pass the approved workflow forms and authority checks. A role, ontology term, model instruction, or storage locator cannot grant permission.

## 2. Governance responsibilities

| Responsibility | Accountable role | Required record |
| --- | --- | --- |
| Employment and assignments | Synthetic HR data owner | Field authority, source contract, correction history |
| Rating and review policy | Synthetic performance policy owner | Policy versions, applicability, approval |
| Calibration decisions | Scoped panel chair and workflow owner | Session scope, conflicts, authority, rationale |
| Reference vocabulary | Vocabulary steward | Artifact/license evidence, mapping rationale, version |
| Identity resolution | Data steward | Candidate evidence, reviewed crosswalk, resolution history |
| Access and disclosure | Access policy owner | Policy version, assignments, action grants, revocations |
| Retention and removal | Records policy owner | Retention class, preservation exception, purge report |
| Release publication | Release operator | Manifest, checks, exceptions, activation record |
| Evaluation truth | Evaluation owner | Isolated packages and access inventory |

The operator does not receive personnel narrative access merely to troubleshoot a failed job. A reviewer cannot modify source identity mappings through a personnel decision form. Keep business and technical responsibilities distinct.

## 3. Classification

Use five approved classes under DEC-068.

| Class | Examples | Default access |
| --- | --- | --- |
| Reference | Approved role vocabulary, fictional public policy extracts, licenses | Approved reference users/services; no automatic public bucket |
| Organizational | Position definitions, non-sensitive unit/site structures | Scoped internal users and authorized tools |
| Personnel | Assignments, work contributions, learning records | Authorized case or business scope |
| Restricted personnel | Ratings, assessment narratives, nomination dossiers, panel notes, conflicts | Specific assessment, HR, or panel entitlement |
| Evaluation private | Generator truth, planted-anomaly labels, scoring keys | Generator/evaluator identities only |

Classification is metadata on a record or artifact version. Chunks inherit the parent's class and scope unless a reviewed redaction rule creates a separately classified derivative. A summary of restricted content is restricted by default.

A reference policy can describe a rule without disclosing employee cases. Do not downgrade a personnel document because it quotes public material. Mixed artifacts inherit the highest applicable restriction unless safely separated.

## 4. Authorization decision contract

Evaluate subject, resource, action, and context for every request.

| Input | Required information |
| --- | --- |
| Subject | Authenticated ID, service/user type, active role and scope assignments |
| Resource | Record/version ID, class, person/case, source, period, session, release |
| Action | Read metadata, read content, aggregate, submit, authorize, reopen, export, or administer |
| Context | Current policy version, request time, purpose/workspace, conflicts, token validity |

Deny by default when a required entitlement is absent or unresolved. Evaluate case authority at commit, not only when a screen opens. Token scope permits a service operation; business policy determines whether this specific record and action are permitted.

Historic reporting lines explain assessment context. They do not grant a former manager continuing access. A current manager's scope does not automatically grant every historic narrative. Use approved explicit case-period grants for cross-manager review under DEC-069. Each grant records its period, fields, purpose, authority, and expiry or revocation.

Distinguish analysis historical time from authorization time. A requester can select an old decision snapshot, but current access rules still govern disclosure. Preserve the authority that originally made the decision without treating that historic authority as current permission.

## 5. Proposed access matrix

All entries require explicit scope and record classification checks.

| Persona | Permitted read | Permitted action | Explicit boundary |
| --- | --- | --- | --- |
| Line manager | Granted employee/case periods, permitted evidence and proposed ratings | Submit a proposal or nomination | No unrelated teams; no final panel authorization by title alone |
| HR partner | Assigned business and case scope, authorized comparisons | Completeness review and policy-supported workflow steps | No global HR access from role label alone |
| Panel member | Assigned cases and permitted frozen evidence | Record review comments | Declared conflict removes affected-case review/action entitlement |
| Panel chair | Assigned non-conflicted cases and session records | Authorize outcome or reopening within policy | Cannot silently create HR effective assignment |
| Data steward | Assigned source mappings and exceptions; permitted resolution fields | Record reviewed mapping/correction resolution | No automatic access to full rating narratives |
| Operator | Bounded run metadata and failure codes | Replay, recover, publish under technical scope | Personnel content access requires a separate time-bounded grant |
| Evaluator | Isolated truth and scoring fixtures | Score system results | Evaluator identity is never used by serving tools |

This matrix defines approved conflict handling beyond authentication. LIONG-003 already prevents a conflicted member from authorizing a case. The approved rule also removes that member's case review access unless a separately documented policy permits a narrower disclosure. The user approved that added restriction with version 0.1.

No employee self-service portal is introduced in the MVP. Later self-access and correction workflows require their own requirements and permissions.

## 6. Service and storage boundaries

Use the separate R2 buckets and credentials proposed and approved in LIONG-012. Bucket permissions isolate data areas; application policy enforces employee/case granularity.

| Service | Reads | Writes | Prohibited scope |
| --- | --- | --- | --- |
| Generator | References and generator configuration | Truth and designed source packages | Serving under a user identity |
| Integration | Source and reference packages | Canonical releases, exceptions, run reports | Truth and scoring keys |
| Corpus publisher | Bounded author-visible records | Evidence versions and chunks | Unrestricted generator truth |
| Projection loader | Published canonical release | Serving projections and checkpoints | Hidden answers |
| Retrieval tool | Authorized indexes and permitted evidence | Bounded trace records | Arbitrary bucket traversal |
| Workflow exporter | Committed outbox events | Versioned R2 workflow/archive objects | Rewriting prior decision content |
| Evaluator | Truth, keys, permitted test outputs | Evaluation results | Production conversation identity |

Neo4j Community remains behind service tools. Do not assume Enterprise security features. PostgreSQL row policies can add protection but must be tested with actual service identities. UI filtering alone is not enforcement.

Private R2 buckets, scoped credentials, transport authentication, and secret rotation are deployment gates. Do not log secrets or place them in release manifests. Record credential purpose and owner without retaining credential values in ordinary project artifacts.

## 7. Analytical disclosure

DEC-058's minimum of 10 assessed cases per manager/remainder group is an analytical rule. It does not guarantee privacy.

Use these approved simulation disclosure controls under DEC-070:

1. Publish only predefined, versioned aggregate products for each granted scope.
2. Require at least 10 assessed cases for a displayed cohort distribution.
3. Suppress nonzero category cells smaller than 5 unless the requester has explicit individual-case access to every member represented.
4. Suppress additional cells or totals whenever visible values would reveal a suppressed value by subtraction.
5. Prevent ad hoc filters and overlapping aggregate releases that permit the same inference.

The disclosure service must consider counts and denominators together. Suppressing a count but returning its percentage and denominator does not protect it. A zero cell can also become revealing in combination with other outputs; do not apply a blanket zero-cell exception.

Where a safe product cannot be built, return that the requested aggregate is unavailable for the authorized view. Do not fabricate rounded counts or silently widen the population. Individual-case entitlements remain separate from aggregate entitlements.

The proposed thresholds are simulation settings, not a validated privacy guarantee. LIONG-016 must test complementary suppression, repeated queries, version differencing, exports, and unauthorized scope inference.

## 8. Retention, correction, and removal

Use approved retention defaults under DEC-071. Durations below are simulation policies measured from the specified event, not employment law requirements.

| Artifact | Proposed retention | Anchor |
| --- | --- | --- |
| Pinned reference packages and model mappings | While any retained release depends on them | Dependency retention |
| Final decision, policy, evidence snapshot, source versions needed for replay | 24 months | Final publication; reopening establishes its own version anchor |
| Unsubmitted drafts and working corpus artifacts | 90 days | Last authorized update |
| Bounded query traces and operational logs | 90 days | Trace/event creation |
| Temporary local processing files | Delete at task completion; purge abandoned files within 24 hours | Completion or failed task |
| Recovery copies | 30-day rolling window, subject to dependency needs | Snapshot creation |
| Generator truth and evaluation packages | Declared evaluation-release lifecycle | Evaluation owner sets retirement date |

Retain dependent source and policy versions for as long as a retained decision requires them. A shorter general artifact rule must not break a valid frozen snapshot. A documented preservation exception can extend retention; record owner, reason, scope, and review date.

Corrections append versions and identify affected serving views. Access withdrawal changes disclosure immediately; it does not rewrite the original decision. Removal or redaction creates a tombstone or permitted replacement reference so a query can distinguish a removed artifact from a retrieval failure without disclosing prohibited detail.

Propagate expiry/removal to R2 objects, serving tables, graph projections, search indexes, caches, conversation context, and recovery policy. Restoring a backup must replay revocations and tombstones before user access resumes. Do not promise immediate physical deletion from every recovery copy; disclose the approved expiry schedule internally.

Assess R2 bucket locks only after these retention rules are accepted and removal behavior is tested. Lock settings must not make the proposed purge requirements impossible. Application versioned keys and retention locks are separate controls.

## 9. Quality rules and publication consequences

| Rule group | Example check | Failure treatment |
| --- | --- | --- |
| Structure | Required fields, allowed category/status, valid datatypes | Reject/quarantine malformed version |
| Identity | Source ID resolves through a reviewed temporal crosswalk | Block unsafe linkage; steward review |
| Temporal | Employment/assignment intervals and available timestamps consistent | Quarantine invalid context |
| Hierarchy | Reporting cycle absent in effective snapshot | Block affected release scope |
| Policy | Criterion applicability and authority versions resolve | Block affected finalization |
| Evidence | Snapshot members exist and digests match | Block durable decision publication |
| Corpus | Critical claims refer to source-visible facts or attributed assessments | Reject unsupported document version |
| Duplicate origin | Shared/quoted source retained | Prevent false independent-support counts |
| Analytics | Status buckets and denominators reconcile | Block analytical product publication |
| Projection | Required relational/graph versions match declared release | Keep prior active compatible release |
| Access | No restricted content enters unauthorized context or trace | Block response; record bounded incident |
| Isolation | Operational identities cannot read truth/keys | Block release gate |

Do not treat a planted contradiction as a structural defect automatically. The simulation can contain valid conflicting statements. Validation checks that they are attributed, dated, and preserved. Private scenario labels authorize the evaluator's expectation; they do not exempt malformed operational contracts.

An accepted exception has an owner, exact rule/version, bounded scope, rationale, expiry/review date, and publication limitation. It cannot waive access, truth isolation, or unresolved decision authority merely to complete a demo.

## 10. Observability and audit

| Metric | Purpose | Avoid |
| --- | --- | --- |
| Source checkpoint/freshness | Identify unavailable or lagging inputs | Claiming absent events from retrieval failure |
| Identity/vocabulary backlog | Track unresolved integration work | Exposing personnel details in broad dashboards |
| Validation failure counts | Identify broken release gates | Treating exceptions as employee performance measures |
| Projection lag and mismatch | Keep combined answers consistent | Reporting complete state for divergent releases |
| Outbox backlog/oldest event | Identify pending durable publication | Reporting locally committed actions as archived |
| Citation failures | Detect unresolvable or unauthorized references | Logging restricted document bodies |
| Denied/suppressed requests | Check enforcement and disclosure behavior | Revealing hidden case existence to requesters |
| Model/tool errors and budgets | Monitor conversational completion | Using model confidence as evidence correctness |
| Purge/recovery checks | Verify retention and replay | Restoring stale permissions |

Audit events identify actor/service, action, permitted resource reference, policy/version, result, time, trace, and release/checkpoint. Store exact decision events in their protected archive. Routine logs contain IDs and bounded codes, not full review text, prompts, or credentials.

Store durable audit and operational exports in R2 under separate access rules. Keep an immutable version/digest chain for archived events where the implementation supports it. This design does not claim tamper-proof storage or a deployed forensic guarantee.

LIONG-016 will set measured latency, export-lag, recovery, and quality thresholds. Alert on failed publication, digest disagreement, truth-boundary breach, or unauthorized disclosure immediately in the test workflow. Numeric service objectives remain open.

## 11. Access change and incident procedure

1. Detect the denied action, suspected disclosure, invalid mapping, or broken boundary.
2. Stop the affected publication or retrieval path where necessary.
3. Revoke or narrow the affected entitlement/credential.
4. Preserve bounded audit evidence under authorized incident scope.
5. Identify affected records, answers, caches, exports, and releases.
6. Correct the cause through versioned policy, data, or code changes.
7. Rebuild affected projections and invalidate inappropriate cached context.
8. Test the original failure and permitted behavior before restoring the path.

No automatic email or external notification is specified here. Notification recipients and real operating procedures are later implementation decisions. Internal incident records must not distribute personnel content broadly.

## 12. Ontology governance

Use the approved vocabulary shortlist as reviewed reference definitions. Classification and authority remain LIONG policy.

ORG cannot grant access from organizational membership. PROV-O can describe the responsible actor without proving authority. Web Annotation retains exact passage targets but does not authorize reading them. CTDL-ASN rubric definitions do not establish employee competence. PSDO display metadata does not permit numeric rating arithmetic. SEPIO remains a bounded pilot.

Pin each artifact and its dependency closure, license evidence, mappings, and checks in R2. Review deprecation, changed definitions, inherited axioms, and compatibility before a semantic release. ODRL remains deferred; policy expression must not be mistaken for enforcement.

## 13. Verification fixtures

| Fixture | Required result |
| --- | --- |
| Former manager requests historic restricted narrative without grant | Deny safely; preserve historical context for authorized users |
| Manager changes scope during conversation | Recheck context and prevent cached-evidence bypass |
| Conflicted panel member opens affected dossier | Apply proposed access restriction and block authorization |
| Aggregate small cell can be derived from totals | Complementary suppression or no aggregate publication |
| Repeated overlapping queries reveal a member's category | Refuse unsupported product combinations |
| Wrong evaluator credential injected into service configuration | Isolation gate fails |
| Source unavailable | Bounded freshness limitation; no fabricated absence |
| Final snapshot references missing evidence | Publication blocked |
| Old backup contains revoked grant | Revocation replay precedes restored user access |
| Expired artifact appears in search cache | Removal check fails until cache/index purge completes |
| Corpus contains controlled contradictory assessments | Preserve disagreement; do not overwrite by latest timestamp |
| Failed R2 export | Pending status and idempotent retry; no false durable completion |

These tests validate behavior. The user approved the simulation privacy and retention policies; exact configuration and execution checks remain implementation gates. No deployed security or real-workforce fairness claim is made.

## 14. Approved decisions and open items

| ID | Proposal | Status |
| --- | --- | --- |
| DEC-068 | Five data classes with inherited artifact/chunk restrictions | Approved |
| DEC-069 | Deny-by-default resource/action scope; explicit historical case-period grants; conflict access restriction | Approved |
| DEC-070 | Predefined aggregates, minimum 10 assessed cases, small-cell threshold 5, complementary and cross-query suppression | Approved |
| DEC-071 | Simulation retention schedule, dependency preservation, revocations, and removal replay | Approved |
| DEC-072 | Quality gates, bounded exceptions, and source/projection publication controls | Approved |
| DEC-073 | Scoped audit, monitoring, incident, purge, and recovery verification | Approved |

The user approved v0.1 and DEC-068 through DEC-073 on 2026-10-03. OI-05 is resolved at simulation-policy level. Exact subject grants, retention configuration, bucket locks, service versions, hosted-model data handling, numerical monitoring targets, and recovery objectives remain implementation/evaluation gates.

## 15. Impact and next document

LIONG-014 v0.1 and DEC-062 through DEC-067 are approved. This draft supplies the access, retention, and operational proposals that its interfaces require. It does not change the read-only agent path or the approved analytical signal threshold.

The charter, interface document, and register record approval and link to this draft. Governance decisions and LIONG-016 v0.1 are approved. Evaluation targets are accepted objectives; execution remains pending.

## 16. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | Defines proposed classification, access, disclosure, retention, quality, audit, monitoring, and recovery controls | Pending review |

| 0.2 | Records approval of v0.1 and evaluation draft; governance policy unchanged | Maintenance revision |

Maintenance record: 0.3 consolidates the approved package status and index links on 2026-10-03.
