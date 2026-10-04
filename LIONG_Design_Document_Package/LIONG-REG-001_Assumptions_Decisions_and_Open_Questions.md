# LIONG People Graph

# Assumptions, Decisions, and Open Questions

| Document control | Value |
| --- | --- |
| Document ID | LIONG-REG-001 |
| Version | 0.20 |
| Date | 2026-10-03 |
| Status | Working register |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose

This register tracks requirement authority, proposed choices, approvals, and unresolved questions. Each topic has one authoritative document. Other documents refer to that definition and retain only the detail they need.

A proposal does not become approved because it appears in a later document.

## 2. Status rules

| Status | Meaning |
| --- | --- |
| Confirmed | Explicit user requirement |
| Proposed | Design choice awaiting review |
| Approved | User accepted the identified choice or document version |
| Open | Answer not established |
| Deferred | Outside the current release |
| Superseded | Replaced by an identified later decision |

Retain decision IDs. Record a rationale and affected documents when a choice changes. Material changes to approved scope or constraints require review. Editorial corrections and reference updates do not reopen the entire baseline.

## 3. Confirmed requirements

| ID | Requirement | Authority | Status |
| --- | --- | --- | --- |
| REQ-01 | Use fictional LIONG and exclude original company and participant identities | User instruction | Confirmed |
| REQ-02 | First MVPs: promotion calibration, rating calibration, conversational people insights | User instruction and supplied notes | Confirmed |
| REQ-03 | Retain later talent use cases in the roadmap | User instruction | Confirmed |
| REQ-04 | Use public reference data and synthetic enterprise records | User instruction | Confirmed |
| REQ-05 | Every non-exempt used component must be open source; Cloudflare, Databricks, and model choices are explicit exceptions | User instruction | Confirmed |
| REQ-06 | Deliver downloadable Markdown files | User instruction | Confirmed |
| REQ-07 | Use the reference repository's ASD-STE100-inspired style | User instruction | Confirmed |
| REQ-08 | Exclude build-versus-buy framing | User instruction | Confirmed |
| REQ-10 | Store all durable data, including synthetic data, in Cloudflare R2 | User instruction, 2026-10-03 | Confirmed |
| REQ-09 | Draft in dependency order and maintain affected prior documents | User accepted the document-maintenance approach | Confirmed |

## 4. Approval record

| Approval ID | Artifact | Approved version | Evidence | Boundary |
| --- | --- | --- | --- | --- |
| APR-001 | LIONG-001 | 0.1 | User response: “looks good to me” | Approves the charter; does not approve later workforce proposals |
| APR-002 | LIONG-002 | 0.1 | User response: “approved”, 2026-10-03 | Approves DEC-001 through DEC-007; later policies remain proposals |
| APR-003 | LIONG-003 | 0.1 | User response: “looks good and approved”, 2026-10-03 | Approves DEC-008 through DEC-012 and MVP requirements |
| APR-004 | LIONG-004 | 0.1 | User response: “read and approved”, 2026-10-03 | Approves competency questions and logical data requirements |
| APR-005 | LIONG-005 | 0.1 | User response: “reviewed and approved”, 2026-10-03 | Approves DEC-013 through DEC-016; acquisition gates remain open |
| APR-006 | LIONG-006 | 0.1 | User response: “reviewed and approved”, 2026-10-03 | Approves DEC-017 through DEC-020 and canonical model |
| APR-007 | LIONG-007 | 0.1 | User response: “reviewed and approved”, 2026-10-03 | Approves DEC-021 through DEC-025 and model-as-code standard |
| APR-008 | LIONG-008 | 0.1 | User response: “reviewed and approved”, 2026-10-03 | Approves DEC-026 through DEC-030 and generation strategy |
| APR-009 | LIONG-009 | 0.1 | User response: “reviewed and approved”, 2026-10-03 | Approves DEC-031 through DEC-035 and integration architecture |
| APR-010 | LIONG-010 | 0.1 | User response: “review and approved”, 2026-10-03 | Approves DEC-036 through DEC-040 and corpus strategy |
| APR-011 | LIONG-011 | 0.2 | User response: “all reviewed and approved”, 2026-10-03 | Approves DEC-041 through DEC-046; confirms DEC-047/048; deployment gates remain open |

| APR-012 | LIONG-012 | 0.2 | User response: “reviewed and approved”, 2026-10-03 | Approves DEC-049 through DEC-054; artifact and deployment checks remain open |

| APR-013 | Ontology update set: LIONG-005 v0.5, LIONG-006 v0.4, LIONG-007 v0.5, LIONG-011 v0.5, LIONG-012 v0.3, register v0.14 | Identified versions | User response: “reviewed and approved”, 2026-10-03 | Approves descriptions, links, and selective assessment direction; exact artifact and mapping gates remain open |

| APR-014 | LIONG-013 | 0.1 | User response: “doc reviewd and approved”, 2026-10-03 | Approves DEC-057 through DEC-061 and simulation signal settings; disclosure and operational evaluation gates remain open |

| APR-015 | LIONG-014 | 0.1 | User response: “Reviewed and approved”, 2026-10-03 | Approves DEC-062 through DEC-067; detailed governance and deployment gates remain open |

| APR-016 | LIONG-015 | 0.1 | User response: “reviewed and approved”, 2026-10-03 | Approves DEC-068 through DEC-073; exact configuration and evaluation gates remain open |

| APR-017 | LIONG-016 | 0.1 | User response: “reviewed and approved”, 2026-10-03 | Approves DEC-074 through DEC-078; evaluation objectives accepted, execution remains pending |

| APR-018 | LIONG-017 | 0.1 | User response: “reviewed and approved”, 2026-10-03 | Approves DEC-079 through DEC-083; implementation and measured acceptance remain pending |

The charter's versions 0.2 and 0.3 are maintenance revisions. It records approval of version 0.1 and references the new drafts. It does not change approved scope.

## 5. Workforce decisions

| ID | Proposal | Rationale | Authoritative document | Affected documents | Status |
| --- | --- | --- | --- | --- | --- |
| DEC-001 | 800 active employees at the opening checkpoint | Bounded population with varied cohorts | LIONG-002 §2 | LIONG-001, LIONG-008 | Approved |
| DEC-002 | Nine business units and six fictional sites | Cross-business and cross-location evidence | LIONG-002 §§2–3 | LIONG-006, LIONG-008 | Approved |
| DEC-003 | 12 job families and 36 reusable role templates | Enough work variation without a large catalogue | LIONG-002 §7 | LIONG-006, LIONG-008 | Approved |
| DEC-004 | Technical, specialist, and management tracks with six level codes | Separates career paths and comparison context | LIONG-002 §8 | LIONG-003, LIONG-006, LIONG-013 | Approved |
| DEC-005 | Three completed annual cycles, 2023–2025; incomplete 2026 cycle | Historical context without future evidence leakage | LIONG-002 §9 | LIONG-008, LIONG-016 | Approved |
| DEC-006 | Direct employees in initial calibration population | Avoids mixing employee and contractor policy | LIONG-002 §6 | LIONG-003, LIONG-008 | Approved |
| DEC-007 | Africa/Lagos business calendar; UTC machine timestamps | Makes time handling explicit | LIONG-002 §3 | LIONG-007, LIONG-008 | Approved |

These counts are scenario assumptions. They are not observed workforce statistics.

## 5.1 Approved MVP policies

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-008 | Four rating categories and separate assessment status | LIONG-003 §4.1 | Approved |
| DEC-009 | Shared criterion groups with role-specific expectations | LIONG-003 §4.2 | Approved |
| DEC-010 | April and October promotion windows | LIONG-003 §4.3 | Approved |
| DEC-011 | Separate eligibility, capability, and position authorization; no universal tenure threshold | LIONG-003 §4.3 | Approved |
| DEC-012 | Scoped panel authority, conflict declarations, and versioned reopening | LIONG-003 §4.4 | Approved |

## 5.2 Approved public-source decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-013 | Bounded O*NET database scaffold | LIONG-005 §5 | Approved |
| DEC-014 | ESCO conditional on selected dataset reuse evidence | LIONG-005 §6 | Approved |
| DEC-015 | OPITO link-only; original fictional training records | LIONG-005 §7 | Approved |
| DEC-016 | Pinned local bundles and reviewed mappings | LIONG-005 §§10–11 | Approved |

## 5.3 Approved model decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-017 | Explicit assignments and qualified evidence links | LIONG-006 | Approved |
| DEC-018 | Immutable evidence versions and temporal snapshots | LIONG-006 | Approved |
| DEC-019 | SKOS, PROV-O, and SHACL alignment | LIONG-006 | Approved |
| DEC-020 | Convenience edges as traceable derived views | LIONG-006 | Approved |

## 5.4 Approved model-as-code decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-021 | Versioned artifacts with explicit authority | LIONG-007 | Approved |
| DEC-022 | Opaque entity and record-version IDs | LIONG-007 | Approved |
| DEC-023 | Conditional missingness and immutable corrections | LIONG-007 | Approved |
| DEC-024 | Separate structural, temporal, policy, and reconciliation validation | LIONG-007 | Approved |
| DEC-025 | Versioned releases, manifests, and projection fixtures | LIONG-007 | Approved |

## 5.5 Approved generation decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-026 | Opening and current checkpoints | LIONG-008 | Approved |
| DEC-027 | Separate truth, operational evidence, and evaluation packages | LIONG-008 | Approved |
| DEC-028 | Constraint-first chronological deterministic generation | LIONG-008 | Approved |
| DEC-029 | Template-first corpus generation | LIONG-008 | Approved |
| DEC-030 | Scenario gates and exception manifests | LIONG-008 | Approved |

## 5.6 Approved integration decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-031 | Logical sources with field-level authority | LIONG-009 | Approved |
| DEC-032 | Initial batch and ordered incremental ingestion | LIONG-009 | Approved |
| DEC-033 | Version idempotency and immutable replay | LIONG-009 | Approved |
| DEC-034 | Exception review and compatible publication checkpoints | LIONG-009 | Approved |
| DEC-035 | Contract-first source emulation | LIONG-009 | Approved |

## 5.7 Approved corpus decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-036 | Twelve context-linked artifact types | LIONG-010 | Approved |
| DEC-037 | Author knowledge boundaries and template-first generation | LIONG-010 | Approved |
| DEC-038 | Claim validation and common-source lineage | LIONG-010 | Approved |
| DEC-039 | Versioned, authorized retrieval chunks | LIONG-010 | Approved |
| DEC-040 | Corpus support, time, access, and isolation gates | LIONG-010 | Approved |

## 5.8 Approved technology decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-041 | Minimal self-hostable foundation | LIONG-011 | Approved |
| DEC-042 | Neo4j Community core graph candidate | LIONG-011 | Approved |
| DEC-043 | Emulators first; optional Frappe HR and Moodle | LIONG-011 | Approved |
| DEC-044 | Scoped API and identity with optional agent adapters | LIONG-011 | Approved |
| DEC-045 | Local or hosted model selection; OLMo is optional | LIONG-011 | Approved |
| DEC-046 | Version and dependency gates before deployment | LIONG-011 | Approved |

## 5.9 Confirmed storage and selection exceptions

| ID | Requirement | Authority | Status |
| --- | --- | --- | --- |
| DEC-047 | Cloudflare R2 stores all durable data, including synthetic data; serving copies publish to R2 | User instruction, 2026-10-03 | Confirmed |
| DEC-048 | Cloudflare, Databricks, and model choices are exempt from the open-source rule | User instruction, 2026-10-03 | Confirmed |

These requirements supersede conflicting blanket exclusions. They do not approve the remaining LIONG-011 stack proposals. The exact PPC storage configuration, Databricks edition, R2 integration, and serving export intervals remain open. LIONG-001, LIONG-005, LIONG-007, LIONG-008, LIONG-009, and LIONG-010 now align their affected passages. LIONG-006 needs no conceptual change.

## 5.10 Approved architecture decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-049 | Separate R2 buckets and credentials for operational data, truth, and evaluation | LIONG-012 §5 | Approved |
| DEC-050 | Staged release publication and one initial activation publisher | LIONG-012 §7 | Approved |
| DEC-051 | Transactional outbox and R2 acknowledgment for workflow publication | LIONG-012 §8 | Approved |
| DEC-052 | Serving copies with R2 exports and recovery artifacts | LIONG-012 §§9/13 | Approved |
| DEC-053 | Common release, scoped tools, and authorized citation resolution | LIONG-012 §10 | Approved |
| DEC-054 | Python/DuckDB first; optional tested Databricks route | LIONG-012 §12 | Approved |

## 5.11 Authorized PSDO reuse

| ID | Decision | Authority | Status |
| --- | --- | --- | --- |
| DEC-055 | Selectively assess and reuse [Performance Summary Display Ontology (PSDO)](https://www.ebi.ac.uk/ols4/ontologies/psdo) for performance summaries and feedback displays; retain the LIONG core model | User instruction, 2026-10-03 | Confirmed; release and mapping gates open |

LIONG-005 owns acquisition and license resolution. LIONG-006 owns semantic fit. LIONG-007 owns mapping artifacts. LIONG-011 records the vocabulary boundary. LIONG-012 defines its semantic and display path. LIONG-013 and LIONG-014 will apply reviewed terms. This does not approve full ontology import, untested equivalence, or bypassing architecture implementation gates.

## 5.12 Authorized ontology shortlist

| ID | Decision | Authority | Status |
| --- | --- | --- | --- |
| DEC-056 | Assess ORG, CTDL-ASN, Web Annotation, and a small OWL-Time subset; pilot SEPIO; retain PROV-O/SKOS and ESCO assessment; keep CTDL later and ODRL deferred | User instruction, 2026-10-03 | Confirmed assessment scope; artifact and mapping gates open |

Descriptions and ontology links: LIONG-005 §8.2 and LIONG-006 §9.2. LIONG-007 owns mapping checks; LIONG-011 owns component boundaries; LIONG-012 owns data flow. General ESCO reuse guidance is found; selected package checks remain open. This does not approve all vocabulary imports or new runtime services.

## 5.13 Approved calibration analytics decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-057 | Explicit cohorts and period-correct manager attribution | LIONG-013 §§4/7 | Approved |
| DEC-058 | Descriptive R4-share signal; minimum 10 assessed cases per group; threshold 20 percentage points | LIONG-013 §6 | Approved |
| DEC-059 | Separate criterion applicability, assessment coverage, evidence-link coverage, and disputes | LIONG-013 §7 | Approved |
| DEC-060 | Versioned decision dossiers with exact evidence and authority provenance | LIONG-013 §§9/10 | Approved |
| DEC-061 | Reproducible analytical context, calculations, and acceptance fixtures | LIONG-013 §§3/12 | Approved |

## 5.14 Approved agent and interface decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-062 | Read-only conversation; personnel writes through explicit forms | LIONG-014 §§1/10 | Approved |
| DEC-063 | Shared governed service tools for UI and optional MCP | LIONG-014 §§5/7 | Approved |
| DEC-064 | Context-aware answers with authorized versioned citations and checks | LIONG-014 §8 | Approved |
| DEC-065 | Scoped review queues, dossiers, comparisons, sessions, and exceptions | LIONG-014 §3 | Approved |
| DEC-066 | Read-only MCP pilot with transport and business-scope checks | LIONG-014 §7 | Approved |
| DEC-067 | Bounded retries, injection controls, access rechecks, and outage fallbacks | LIONG-014 §9 | Approved |

## 5.15 Approved governance decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-068 | Five data classes and inherited restrictions | LIONG-015 §3 | Approved |
| DEC-069 | Resource/action scope, historical case grants, and conflict access restriction | LIONG-015 §§4/5 | Approved |
| DEC-070 | Predefined aggregates, minimum 10, small-cell threshold 5, complementary/cross-query suppression | LIONG-015 §7 | Approved |
| DEC-071 | Simulation retention, dependency preservation, removal and revocation replay | LIONG-015 §8 | Approved |
| DEC-072 | Quality gates and bounded publication exceptions | LIONG-015 §9 | Approved |
| DEC-073 | Scoped audit, monitoring, incident and recovery checks | LIONG-015 §§10/11/13 | Approved |

## 5.16 Approved evaluation decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-074 | Isolated versioned evaluation packages and connected-history holdouts | LIONG-016 §3 | Approved |
| DEC-075 | Scenario coverage and exact critical gates | LIONG-016 §§4/5/7 | Approved |
| DEC-076 | Retrieval/answer thresholds and independent human scoring | LIONG-016 §6 | Approved |
| DEC-077 | Workload, latency, export and recovery targets | LIONG-016 §8 | Approved |
| DEC-078 | Failure, disclosure, purge, recovery and regression verification | LIONG-016 §§9/10 | Approved |

## 5.17 Approved delivery decisions

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-079 | Milestones and complete case before scale | LIONG-017 §§2/4/7 | Approved |
| DEC-080 | Repository responsibilities and R2 data boundary | LIONG-017 §6 | Approved |
| DEC-081 | Compatible candidate release activation | LIONG-017 §9 | Approved |
| DEC-082 | Outbox, rollback and recovery procedures | LIONG-017 §§10/12 | Approved |
| DEC-083 | Acceptance handover and documentation consolidation | LIONG-017 §13 | Approved |

## 6. Open questions

| ID | Question | Resolution owner | Dependencies | Status |
| --- | --- | --- | --- | --- |
| OI-01 | Which rating scale and criteria will apply? | LIONG-003 | Role and level context | Resolved by approved LIONG-003 v0.1 |
| OI-02 | What are promotion eligibility, authority, and review windows? | LIONG-003 | Career tracks | Resolved by approved LIONG-003 v0.1 |
| OI-03 | What joint allocation reconciles unit, site, role, and level counts? | LIONG-008 | Accepted workforce profile | Open |
| OI-04 | Which cohorts and minimum sizes support comparisons? | LIONG-013 | Requirements and analytical scenarios | Resolved for initial simulation by approved LIONG-013 v0.1; disclosure and evaluation gates remain open |
| OI-05 | What access and retention rules apply to each field and artifact? | LIONG-015 | Personas and source contracts | Resolved at simulation-policy level by approved LIONG-015 v0.1; exact grants/configuration remain gates |
| OI-06 | Which public datasets have adequate coverage and reuse terms? | LIONG-005 | Source and artifact assessment | Approved shortlist; exact artifact license/import closure remains open |
| OI-07 | Which exact software components and model artifacts qualify? | LIONG-011 | Component versions, dependencies and provider terms | Approved reference stack and exemptions; exact selections remain open |
| OI-08 | What query and evaluation thresholds fit the workload? | LIONG-016 | Defined scenarios and stack | Resolved at target-policy level by approved LIONG-016 v0.1; execution/measurement pending |
| OI-09 | How will logical models map to physical graph implementations? | LIONG-007 and LIONG-012 | Canonical ontology and selected components | Open |

OI-10: Resolve the PSDO artifact license mismatch, imported dependency terms, and exact term mappings. Owners: LIONG-005/006/007. Status: open.

OI-11: Pin shortlist artifacts, inspect licenses/imports, and complete definition-level mappings. Owners: LIONG-005/006/007. Status: open.

## 7. Deferred scope

Recruiting workflows, career recommendations, internal opportunity marketplaces, and learning-effect analysis remain later scope. Their shared concepts can appear in the model without requiring their complete implementation in the MVP.

LIONG-011 v0.2 reference recommendations are approved. Exact releases and deployment gates remain open. Optional tools remain optional; approval does not require their deployment.

## 8. Document ownership

| Topic | Authoritative document |
| --- | --- |
| Problem, scope, and constraints | LIONG-001 |
| Enterprise and workforce profile | LIONG-002 |
| Workflows and requirements | LIONG-003, approved |
| Business questions and required data | LIONG-004, approved |
| Public data assessment | LIONG-005, approved |
| Canonical concepts | LIONG-006, approved |
| Physical schema conventions | LIONG-007, approved |
| Synthetic generation | LIONG-008, approved |
| Source projections and integration | LIONG-009, approved |
| Document evidence generation | LIONG-010, approved |
| Component selection and licenses | LIONG-011 v0.2 approved |
| Architecture and data flows | LIONG-012 v0.2 approved |
| Calibration calculations | LIONG-013 v0.1 approved |
| Conversational tools and experience | LIONG-014 v0.1 approved |
| Access, quality, and observability | LIONG-015 v0.1 approved |
| Evaluation | LIONG-016 v0.1 approved |
| Delivery sequence and runbook | LIONG-017 v0.1 approved |

## 9. Maintenance procedure

For each new document:

1. Identify requirements and proposals by register ID.
2. Record resolved questions and their authority.
3. Identify affected sections in existing documents.
4. Apply targeted reference, assumption, or consistency changes.
5. Increment the versions of changed documents.
6. Preserve the approved version and describe material changes separately.
7. Deliver current files with a short change summary.

After each drafting stage, check the full set for conflicting definitions, stale assumptions, broken references, and unsupported approval claims.

## 10. Current change set

| Artifact | Version | Change |
| --- | --- | --- |
| LIONG-001 | 0.18 | Current approved-package maintenance revision |
| LIONG-002 | 0.3 | Current approved-package maintenance revision |
| LIONG-REG-001 | 0.20 | Current approved-package maintenance revision |
| LIONG-004 | 0.3 | Current approved-package maintenance revision |
| LIONG-005 | 0.6 | Current approved-package maintenance revision |
| LIONG-006 | 0.5 | Current approved-package maintenance revision |
| LIONG-007 | 0.6 | Current approved-package maintenance revision |
| LIONG-008 | 0.4 | Current approved-package maintenance revision |
| LIONG-009 | 0.4 | Current approved-package maintenance revision |
| LIONG-010 | 0.4 | Current approved-package maintenance revision |
| LIONG-011 | 0.6 | Current approved-package maintenance revision |
| LIONG-012 | 0.5 | Current approved-package maintenance revision |
| LIONG-013 | 0.3 | Current approved-package maintenance revision |
| LIONG-014 | 0.3 | Current approved-package maintenance revision |
| LIONG-015 | 0.3 | Current approved-package maintenance revision |
| LIONG-016 | 0.3 | Current approved-package maintenance revision |
| LIONG-017 | 0.2 | Current approved-package maintenance revision |
| LIONG-003 | 0.3 | Current approved-package maintenance revision |

## 11. Change history

| Version | Change |
| --- | --- |
| 0.1 | Initial register; charter approval and workforce proposals |
| 0.2 | Records APR-002, approves workforce choices, and adds DEC-008 through DEC-012 |
| 0.3 | Records APR-003, approves DEC-008 through DEC-012, and references LIONG-004 draft |
| 0.4 | Records APR-004 and adds DEC-013 through DEC-016 |
| 0.5 | Records APR-005 and adds DEC-017 through DEC-020 |
| 0.6 | Records APR-006 and adds DEC-021 through DEC-025 |
| 0.7 | Records APR-007 and adds DEC-026 through DEC-030 |
| 0.8 | Records APR-008 and adds DEC-031 through DEC-035 |
| 0.9 | Records APR-009 and adds DEC-036 through DEC-040 |
| 0.10 | Records APR-010 and adds DEC-041 through DEC-046 |
| 0.11 | Revises REQ-05; adds REQ-10 and confirmed DEC-047/048; records remaining alignment work |
| 0.12 | Records APR-011; aligns prior documents and adds DEC-049 through DEC-054 |
| 0.13 | Adds authorized PSDO scope, link, and release checks; Targeted user-authorized revision |
| 0.14 | Adds authorized ontology shortlist, descriptions, links, and reuse boundaries; Targeted revision |
| 0.15 | Records APR-013 and DEC-057 through DEC-061 |
| 0.16 | Records APR-014 and adds DEC-062 through DEC-067 |
| 0.17 | Records APR-015 and adds DEC-068 through DEC-073 |

| 0.18 | Records APR-016, adds DEC-074 through DEC-078, and repairs OI-06/07 dependency/status cells |

| 0.19 | Records APR-017 and adds DEC-079 through DEC-083 |

Maintenance record: 0.20 consolidates the approved package status and index links on 2026-10-03.

Consolidation drafts: README v0.1 and LIONG-REF-001 v0.1. No new policy decisions.
