# LIONG People Graph

# Implementation Roadmap and Build Runbook

| Document control | Value |
| --- | --- |
| Document ID | LIONG-017 |
| Version | 0.2 |
| Date | 2026-10-03 |
| Status | Version 0.1 approved; maintenance revision |
| Approved dependencies | LIONG-001 through LIONG-016 at their approved baselines; decision register |
| Implementation status | Proposed delivery procedure; no application built or deployed |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose and scope

This document orders the work needed to build the fictional LIONG People Graph and operate a controlled demonstration. It defines build outputs, dependency gates, release activation, rollback, and recovery.

LIONG-016 v0.1 and DEC-074 through DEC-078 are approved. Its evaluation thresholds are accepted simulation objectives, not measured results. The build must preserve the approved promotion, rating, conversational, access, retention, and evidence contracts.

All durable data, including synthetic sources, private truth, evidence, canonical releases, workflow archives, backups, and evaluation reports, resides in Cloudflare R2. PostgreSQL and Neo4j are serving copies. Temporary local work follows the approved cleanup policy.

Cloudflare, Databricks, and model choices retain their open-source exemptions. Other used components require exact version, edition, dependency, and license checks. Databricks and additional orchestration remain optional. This roadmap does not select a model or provision paid services.

## 2. Delivery principles

Build one complete case path before expanding volume. Start with deterministic context, analytical queries, and evidence retrieval. Add conversational explanation after those contracts pass independently. Keep workflow writes in approved human forms; conversational agents remain read-only.

Preserve the distinction between valid time, availability time, release version, and current access. A historical snapshot cannot restore revoked permission. A generated scenario label cannot become operational evidence.

Use named milestones with exit evidence rather than calendar promises. Effort depends on staffing, exact artifacts, selected infrastructure, and measured failures. No fixed delivery date is approved here.

## 3. Accountable work areas

| Area | Accountable role | Review partner |
| --- | --- | --- |
| Synthetic business policies and criteria | Performance/HR policy owner | Calibration workflow owner |
| Model, mappings and vocabulary | Semantic/data steward | Source-contract owner |
| Generator and source projection | Data engineering owner | Evaluation owner |
| Canonical integration and analytics | Data engineering owner | Policy owner |
| UI, tools and workflow | Application owner | Access policy owner |
| Credentials, storage and recovery | Platform owner | Records/access owners |
| Evaluation and release evidence | Evaluation owner | Independent acceptance reviewer |

One person can hold several roles in the simulation. Record that overlap. A release author should not be the only reviewer of critical access or expected-result checks. Assign real project owners at implementation; fictional workforce identities are not delivery personnel.

## 4. Milestone sequence

| Milestone | Deliverable | Entry dependencies | Exit evidence |
| --- | --- | --- | --- |
| M0 — Baseline and prerequisites | Versioned design index, open-gate inventory, pinned artifacts | Approved documents and register | Exact used licenses/terms, scope, owners, configuration plan |
| M1 — Model and fixed cases | Schemas, mappings, constraints, small connected fixtures | M0 core artifact closure | Model checks and independent expected-output review |
| M2 — Storage and isolation | Private R2 areas, scoped identities, manifests, cleanup | M0 platform choices | Operational identities denied truth; grants and recovery plan checked |
| M3 — Generator and source packages | Reproducible workforce/source/evidence releases | M1, M2 | Allocations reconcile, timestamps and IDs valid, digests recorded |
| M4 — Canonical integration | Versioned canonical release, exceptions, checkpoints | M3 source contracts | Identity, authority, temporal and replay fixtures pass |
| M5 — Serving and analytics | Compatible PostgreSQL/Neo4j projections and measures | M4 | Exact cohort/count tests and projection reconciliation pass |
| M6 — Evidence and workflow | Authorized evidence retrieval, dossiers, human forms, outbox | M5 plus access policy | Snapshots, state transitions, conflicts, retry tests pass |
| M7 — Conversation | Read-only tool path and cited explanations | M6 deterministic path | Trusted scope, claim support, cached-context checks pass |
| M8 — Acceptance and rehearsal | LIONG-016 report, recovery exercise, demonstration package | M7 | All critical gates and approved quality/operating objectives pass |

Model and platform design can proceed concurrently where independent. Source generation cannot publish until storage and isolation checks pass. An optional component is introduced only through a recorded need and its own compatibility/terms gate.

## 5. M0 prerequisite checklist

Resolve exact core versions and dependencies for Python, PostgreSQL, Neo4j Community, DuckDB, RDFLib, pySHACL, NetworkX, Pydantic, Faker, Jinja, FastAPI, and Keycloak where used. Optional components are assessed only when selected. Record feature/edition limits and compatibility tests. Do not assume a feature exists because another edition supports it.

Pin public reference artifacts and mapping contracts. Close the PSDO license discrepancy, imported dependencies, and exact terms before using that artifact in a release. Follow the approved selective ontology assessment; full ontology imports are not required. Keep unused candidates out of runtime dependencies.

Record the selected model/provider revision, capabilities, request configuration, terms, retention/data handling, and test requirements. If data-handling terms cannot support approved rules, the configuration cannot enter acceptance. This is an implementation selection gate, not a new open-source restriction on models.

Assign field/case grants, classification, retention anchors, preservation exceptions, projection mapping, and recovery dependencies. Close workforce joint-allocation constraints before full generation. Record unresolved items in the register; do not treat design approval as evidence of completed configuration.

## 6. Proposed implementation repository layout

| Area | Contents | Data boundary |
| --- | --- | --- |
| docs/ | Approved designs, decisions, glossary, source links | No employee records or credentials |
| models/ | Canonical schemas, semantic definitions, constraints | Versioned definitions |
| mappings/ | Source and ontology mapping contracts | Definitions and reviewed rationale |
| generator/ | Rules and reproducible generation code | Truth outputs written to private R2 area |
| integration/ | Validation, identity, canonical publication | Scoped source/canonical access |
| analytics/ | Explicit cohort and measure implementations | Authorized canonical inputs |
| app/ | UI, read tools, authorization and workflow | Trusted subject context |
| evaluation/ | Runner and rubrics | Keys/outputs remain in protected R2 areas |
| operations/ | Configuration templates, migrations, release/recovery commands | Secret references only |

This layout is approved under DEC-080. It is not an existing repository. Keep durable datasets, keys, backups, and generated reports in R2. Small non-sensitive schema examples may be checked into code only when reviewed as definitions/test templates, not as a second durable data store.

## 7. First complete case

Build a transferred engineer case with two source IDs, dated assignments, one course completion, assessed target criteria, a contradictory assessment, a missing nomination field, and separate organizational authorization. Add a manager-distribution comparison and one frozen panel decision.

Prove identity and time reconstruction, applicable policy, evidence passage resolution, criterion coverage, cohort counts, and authorized viewing without a language model. Then prove a scoped human form can create an immutable decision revision and export it durably. Finally explain the same case through approved read tools with authorized citations.

Include unauthorized and former-manager counterparts from the start. An accessible positive path and a safely denied path are both required. Do not use a private expected decision as the assistant's answer source.

## 8. Generation and ingestion runbook

1. Select approved configuration, seed, model/mapping versions, and source contracts.
2. Generate connected histories into the private generator boundary.
3. Validate workforce allocation, keys, intervals, source projections, and evidence origins.
4. Publish author-visible source packages separately from truth and scoring keys.
5. Record manifests, digests, classification, retention, and completion status in R2.
6. Ingest only completed source packages with the approved integration identity.
7. Apply schema, authority, identity and temporal checks; quarantine unsafe records.
8. Publish a canonical candidate and its exceptions/checkpoints without activating serving views.
9. Reconcile accepted, rejected, unchanged and pending counts against source manifests.

Generation replay uses the pinned configuration and seed. Record any non-deterministic provider output and its exact retained artifact; a seed alone does not make external generation reproducible. Ingestion replay uses source/version identity and digests. Do not overwrite prior source or canonical versions.

Planted contradictory evidence is valid if attributed and structurally valid. Ambiguous identity is not permission to merge people. A source outage is a freshness limitation, not an employee event.

## 9. Projection and activation runbook

1. Confirm the candidate canonical manifest is complete and its required objects resolve.
2. Build candidate relational and graph serving projections under the same declared release.
3. Load evidence indexes with inherited classification and current policy checks.
4. Validate counts, mappings, snapshot references, digests and required analytical fixtures.
5. Test authorized and denied access with actual service identities.
6. Record all projection checkpoints and compatibility results.
7. Activate the compatible release through one application-visible release manifest/reference.
8. Run scoped smoke checks and retain the previous compatible release for rollback.

Separate databases do not supply a distributed transaction automatically. During activation, the service verifies declared compatibility and refuses combined answers from mismatched projections. Do not briefly label divergent stores as complete merely to switch quickly.

Release activation needs accountable review and the recorded gate results. The implementation must define the exact atomic reference-update mechanism and concurrency control before use. DEC-081 approves this release procedure without prescribing an untested storage operation.

## 10. Human decision and outbox runbook

The user opens an authorized case form and selects the permitted action. The service rechecks current grants, conflict, policy, state and snapshot at commit. Record actor, authority, rationale, exact evidence versions, and the new immutable event.

Commit the local decision event and outbox entry in the same database transaction. Show pending durable publication until the R2 archive is verified. Export with the stable event/version key; retries must not create a new decision or overwrite prior content. Record digest disagreement as a blocked export.

After acknowledgement, update durable status and preserve the archive locator/digest. A process crash between upload and acknowledgement must be recoverable by verifying the existing matching object and completing the local checkpoint. Do not infer completion solely from an attempted upload.

An authorized reopening creates a new linked version. HR effective assignment remains a separate approved action. Conversational tools cannot bypass forms by requesting arbitrary SQL, graph writes, bucket paths, or actor fields.

## 11. Observability and routine checks

| Frequency/trigger | Check | Response |
| --- | --- | --- |
| Every publication | Digests, schema, authority, identity, projection compatibility | Block unsafe candidate |
| Every request/action | Current grants, scope, conflict, citation access | Deny or limit before disclosure |
| Continuous during test operations | Outbox age, tool errors, projection mismatch, source freshness | Apply approved LIONG-016 alerts and bounded limitations |
| Scheduled cleanup run | Temporary files, expired drafts/logs, dependencies and holds | Produce protected purge report |
| Before/after restore | Snapshot integrity, revoked grants, tombstones, indexes | Keep access closed until checks pass |
| Material change | Affected regression and acceptance coverage | Record new results before activation |

The scheduler frequency and execution mechanism are implementation configuration, not an automation created by this document. Durable monitoring/audit outputs go to R2. Logs contain bounded IDs and codes; they do not retain unrestricted personnel narratives or credentials.

## 12. Incident, rollback, and recovery runbook

For an access or truth-boundary breach, stop the affected path, revoke the relevant scope/credential, preserve bounded evidence, identify affected context/caches/exports, correct the cause, and retest before reopening. No automatic external messages are authorized by this design.

Rollback switches serving reads to the previous compatible release after current access and tombstone checks. It must not erase decisions committed after that release, resurrect expired evidence, restore revoked grants, or downgrade policy silently. Preserve and reconcile workflow events separately. Forward correction may be safer when old snapshots cannot satisfy current policy.

For destructive recovery, keep user access closed. Select a verified recovery manifest and required R2 source/archive dependencies. Restore serving state, rebuild derived projections, replay durable events idempotently, apply current revocations/tombstones, and reconcile pending local events where recoverable. Verify critical checks before opening access.

Measure the approved controlled-recovery target of 60 minutes. Prove no loss of acknowledged R2 releases/archives. Report unarchived local commits separately; destructive loss before durable acknowledgement is not covered by a zero-loss claim. The 30-day recovery window does not permit deleting dependencies needed by retained decisions.

## 13. Acceptance and demonstration handover

Execute LIONG-016 with the sealed case package, exact critical fixtures, at least 100 held-out conversational cases, independent scoring, concurrency run, failure injection, purge, and restore exercises. Report all attempts and actual environment. Keep accepted targets distinct from measured results.

The acceptance reviewer confirms that every critical gate passes, quality/operating objectives are met, and no unresolved item invalidates an MVP requirement. A failed gate produces a fix or a formally reviewed scope/target change; a demo deadline cannot waive access or evidence integrity.

The handover package contains approved design index, versioned build/configuration references, used component and artifact register, release manifests, test report, open limitations, role/grant inventory, operator instructions, rollback/recovery evidence, and retention configuration. Store restricted materials under the approved access class. Use fictional identities throughout the demonstration.

The final documentation pass will produce a README index and consolidated reference register, repair stale cross-references, and distinguish approved policy, implementation gates, and measured results. It does not claim an application is deployed.

## 14. Later scope

After MVP acceptance, evaluate learning pathways, broader talent insights, recruiting, optional embeddings/orchestration, or optional Databricks processing through separate requirements and decision records. Use CTDL/ESCO only within their reviewed mapping and reuse boundaries. ODRL remains deferred.

Do not add predictive merit scores, forced rating distributions, autonomous promotion decisions, employee self-service, or a production personnel-data migration through this runbook. These require separately authorized scope and policies.

## 15. Approved decisions and open gates

| ID | Proposal | Status |
| --- | --- | --- |
| DEC-079 | Dependency-driven milestones and one complete case before scale | Approved |
| DEC-080 | Repository responsibility layout with R2 durable data boundary | Approved |
| DEC-081 | Candidate projection validation and compatible release activation | Approved |
| DEC-082 | Decision/outbox publication, rollback and recovery procedures | Approved |
| DEC-083 | Acceptance handover and final documentation consolidation | Approved |

The user approved v0.1 and DEC-079 through DEC-083 on 2026-10-03. Open gates include named implementers, exact software/model choices, ontology license/import closure, field grants, workforce allocation, physical mapping, credentials, atomic activation mechanism, recovery topology, corpus volume, and executed test results. The build must update the existing decision register as these gates close.

## 16. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | Proposes build milestones, run procedures, activation, recovery and handover | Pending review |

Maintenance record: 0.2 consolidates the approved package status and index links on 2026-10-03.
