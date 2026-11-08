# LIONG People Graph

# Assumptions, Decisions, and Open Questions

| Document control | Value |
| --- | --- |
| Document ID | LIONG-REG-001 |
| Version | 0.26 |
| Date | 2026-11-07 |
| Status | Working register |

## Scope and approval status — 2026-10-27

LIONG-001 through LIONG-017 remain approved at the baselines recorded below. REQ-11 records the owner's 2026-10-27 scope expansion. REQ-12 records the owner's 2026-11-07 plan supplement: proposed pilot trigger rules, skills sequencing, success-criteria specifics, outcome-bullet organization options, and real-project status items. DEC-084 through DEC-088 hold those proposals; none is approved. The current document revisions describe the expansion; exact conversation and skills rules remain open in OI-12 and OI-13. Implementation gates and unexecuted tests remain open. See [README](README.md) for current versions and the [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

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
| REQ-02 | Retain promotion calibration, rating calibration, and conversational people insights in the MVP | User instruction and supplied notes | Confirmed |
| REQ-11 | Expand the existing scope with four purpose-driven conversation pilots and bounded skills inference | User instruction, 2026-10-27: "it does not replace it . it expands it" | Confirmed scope; exact rules open |
| REQ-12 | Record the owner's 2026-11-07 plan supplement as context: per-pilot trigger proposals (DEC-084 through DEC-086), skills sequencing (DEC-087), success-criteria specifics (DEC-088), promotion outcomes captured through an existing agentic workflow, outcome-bullet organization options (OI-14), and real-project status items (§6.2) | Owner-supplied consolidated plan, 2026-11-07 | Confirmed context; proposed rules not approved |
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

The charter's versions 0.2 and 0.3 were maintenance revisions. Version 0.1 remains the approved baseline. REQ-11 records the later scope expansion; OI-12 and OI-13 keep its exact rules open.

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

## 5.18 Owner-supplement proposals (2026-11-07, not approved)

| ID | Proposal | Authority | Status |
| --- | --- | --- | --- |
| DEC-084 | Career-growth signal: the audience is managers of employees whose earlier nomination was not approved, and long-tenured high performers who have not been nominated; refine the criteria and suppress a prompt when a recent check-in already covered career growth; a nomination record alone does not trigger a prompt | Owner plan, 2026-11-07: "Nomination history alone should not trigger a conversation; refine criteria and account for whether a recent MYCI already covered career growth" | Proposed |
| DEC-085 | New-to-role/new-hire signal: use the optional-check-in eligibility cutoff and a minimum time in role so new employees are not prompted too soon | Owner plan, 2026-11-07: "April 16 was discussed" and "A 60-day threshold was suggested, not agreed" | Proposed |
| DEC-086 | Performance-follow-up signal: prompt the manager when an agreed number of days has passed after a recorded low-performance indicator without documented action; qualifying actions include a follow-up check-in, a structured improvement plan, or a managed-exit action | Owner plan, 2026-11-07: "where an agreed number of days has passed without clear documented action, such as a follow-up check-in or PIP/PEP activity" | Proposed |
| DEC-087 | Skills pilot sequence: source-supplied skill records first, then one defined taxonomy, then inference that combines skills with profile and performance evidence | Owner plan, 2026-11-07: "starting point is 8Fold, then need taxonomy defined, then inference based on skills AND employee profile/performance information" | Proposed |
| DEC-088 | Success-criteria specifics: five to ten defined promotion and rating questions answered correctly with reviewer sign-off, and two to three graph tools registered in the MCP catalogue returning authorized results | Owner plan, 2026-11-07: "5–10 defined promotion and ratings calibration questions answered correctly, signed off by ESBPs / calibration leads"; "2–3 graph tools registered ... returning correct, access-controlled results" | Proposed |

A proposal does not become approved because it appears in the supplement. Each decision moves to Approved only through the owner's recorded words.

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
| OI-09 | How will logical models map to physical graph implementations? | LIONG-007 and LIONG-012 | Canonical ontology and selected components | Open. Neo4j neosemantics (n10s) is now an optional projection mechanism assessed in LIONG-011 §7; its selection stays gated |

OI-10: Resolve the PSDO artifact license mismatch, imported dependency terms, and exact term mappings. Owners: LIONG-005/006/007. Status: open.

OI-11: Pin shortlist artifacts, inspect licenses/imports, and complete definition-level mappings. Owners: LIONG-005/006/007. Status: open.

OI-12: Define the audience, evidence, suppression rules, eligibility dates, and waiting periods for each conversation pilot. Owner: project owner. Status: open. The four pilot purposes are in scope under REQ-11; exact triggers are not approved. The 2026-11-07 supplement adds candidate rules (DEC-084 through DEC-086) with recorded statuses: the year-end-preparation audience and signal remain undefined; an April 16 optional-eligibility cutoff was discussed, not confirmed; a 60-day time-in-role threshold was suggested, not agreed; the follow-up interval and its qualifying actions need agreement.

OI-13: Select a pinned public skills taxonomy release, review its reuse terms and role mappings, validate the source-supplied person-skill claim contract, and define how the bounded skills pilot marks inferences and checks them against evidence. Owners: LIONG-005/006/007/009. Status: open. REQ-11 includes the pilot, not an automatic employee decision. The 2026-11-07 supplement proposes the sequence in DEC-087. SSSOM is a candidate mapping-exchange format assessed in LIONG-REF-001 §2, and qSKOS plus Skosify are optional review tools assessed in LIONG-011 §7.

OI-14: Choose how the plan's outcome bullets are organized. Option A nests the four pilots and skills inference inside the plan's existing three outcome bullets. Option B replaces them with three new bullets covering graph-powered insights, the Signal Library, and graph-based skills inference. Resolve at the same time whether the strikethrough on the promotion-calibration and ratings-calibration bullets in the source document de-scopes those bullets. Owner: project owner. Status: open.

OI-15: Track real-project delivery items that this simulation records but does not resolve: which MVP sources sit in the vendor pilot scope and their data volumes; whether MCP integration is vendor scope or internal engineering work after handover; DGC approval and offshore data access for sensitive data; and the IT platform decision on the graph engine. Owner: project owner. Status: open.

## 6.1 Source-plan vocabulary map

The owner's plan uses working terms that this package maps to LIONG concepts. The fictional simulation continues to exclude original company and participant identities.

| Source-plan term | Meaning in the source plan | LIONG treatment |
| --- | --- | --- |
| MYCI | Mid-year performance and development conversation | A check-in record with conversation topics; the recency filter for career-growth and new-hire prompts |
| V2MOM | Goal framework (vision, values, methods, obstacles, measures) with documented progress and gaps | Goal records and documented progress; the year-end-preparation signal compares them with rated performance |
| LPI | Low-performance indicator: a recorded flag that performance is not meeting expectations | A recorded performance concern; the performance-follow-up trigger |
| PIP | Performance improvement plan: a structured 30–60 day improvement timeline | A qualifying follow-up action for the performance-follow-up signal |
| PEP | Voluntary exit package offered in the performance workflow | A managed-exit qualifying action; access class needs LIONG-015 review before simulation use |
| ES / ESBP | Employee Success function and its business partners | The HR partner persona and review audiences |
| 8Fold | Internal skills baseline that starts the skills pipeline | Source-supplied skill records with provenance labels |
| Snowflake data foundation | The governed analytical system of record for workforce data | The governed record store and analytical layer; LIONG-001 §11 owns this boundary |
| ES Data Insights MCP | Relationship-aware MCP tools exposed beside the semantic layer | LIONG-014 §7 defines the read-only MCP pilot and its access controls |
| Neo4j Bloom | Graph visualization interface | A LIONG-014 interface option; component selection stays with LIONG-011 |
| DGC | Data governance council review for sensitive workforce data | Ownership and disclosure decisions in LIONG-015 |
| Career Connect | Source that provisions skills data | A source of source-supplied skill records |
| Workday / BaseCamp / Talent Review | HR, check-in, and talent-review systems of record | Logical source projections in LIONG-009; identity-neutral in the simulation |
| Agentic promotion workflow | The existing workflow that captures promotion outcomes (approved, not approved) | Promotion case outcome recorded as a decision with provenance (LIONG-006, LIONG-013) |

## 6.2 Real-project status items

These items describe the real project's state as of the 2026-11-07 supplement. They are context for scope and planning. Only this package's own gates approve simulation work.

| Item | Status in the supplement |
| --- | --- |
| Neo4j development environment onboarding | Completed |
| Framework (Git repository and tooling) from the platform team | Expected the week of September 30 |
| Confirm MVP sources in the data foundation for the MVP load | In progress |
| Privacy and governance review for performance, feedback, and promotion data | Not started |

## 7. Deferred scope

Recruiting workflows, full career recommendations, internal opportunity placement, and learning-effect analysis remain later scope. The bounded skills pilot may show target-role gaps and redeployment options for human review; it does not run a marketplace or make a placement.

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

| Artifact | Version | Change | Status |
| --- | --- | --- | --- |
| LIONG-001 | 0.21 | Records 2026-11-07 supplement proposals and adds SC-14/SC-15 | Owner-supplement draft |
| LIONG-002 | 0.4 | Expanded-scope reference draft; workforce profile unchanged | Expansion draft |
| LIONG-003 | 0.5 | Records 2026-11-07 supplement pilot proposals in §7.7 | Owner-supplement draft |
| LIONG-004 | 0.4 | Expanded question catalogue draft | Expansion draft |
| LIONG-005 | 0.7 | Public reference assessment draft | Expansion draft |
| LIONG-006 | 0.6 | Expanded model concepts draft | Expansion draft |
| LIONG-007 | 0.6 | Current approved-package maintenance revision | Maintenance revision |
| LIONG-008 | 0.5 | Expanded fixture strategy draft | Expansion draft |
| LIONG-009 | 0.5 | Expanded logical source contract draft | Expansion draft |
| LIONG-010 | 0.5 | Expanded-scope evidence reference draft | Expansion draft |
| LIONG-011 | 0.8 | Adds four optional components: n10s, SSSOM, qSKOS, Skosify | Reference-addition draft |
| LIONG-011 | 0.7 | Expanded source-to-component mapping draft | Expansion draft |
| LIONG-012 | 0.7 | Expanded architecture responsibilities draft | Expansion draft |
| LIONG-013 | 0.3 | Current approved-package maintenance revision | Maintenance revision |
| LIONG-014 | 0.4 | Expanded read-tool catalogue draft | Expansion draft |
| LIONG-015 | 0.4 | Expanded derived-record governance draft | Expansion draft |
| LIONG-016 | 0.4 | Expanded scenario catalogue draft | Expansion draft |
| LIONG-017 | 0.3 | Expanded delivery sequence draft | Expansion draft |
| LIONG-REG-001 | 0.25 | Adds REQ-12, DEC-084 through DEC-088, OI-14/OI-15, vocabulary map, project status; latest revision is wording only | Owner-supplement draft |
| LIONG-REF-001 | 0.3 | Adds standards, registries, interface candidates, and KG-LLM papers | Reference-addition draft |
| LIONG-REF-001 | 0.2 | Adds public reference links; both repository copies match | Reference draft |

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

Maintenance record: 0.21 recorded the later source plan as context on 2026-10-27.

Revision 0.22 records the owner's scope expansion and replaces the former scope question with open pilot-rule and taxonomy questions. README v0.3 is an expansion draft.

Consolidation drafts: README v0.3 and LIONG-REF-001 v0.2. REQ-11 changes scope; exact pilot policies remain open.

Revision 0.23 records the owner's 2026-11-07 plan supplement: REQ-12, proposals DEC-084 through DEC-088, updated OI-12, new OI-14 and OI-15, the source-plan vocabulary map, and real-project status items. README v0.4 matches.

Revision 0.24 rewords the plan-outline terminology (OI-14). No requirement, decision, or approval status changes.

Revision 0.25 replaces those document-term references with neutral wording: the OI-14 choice becomes the organization of the plan's outcome bullets. No requirement, decision, or approval status changes.

Revision 0.26 adds the reference additions: OI-09 and OI-13 gain pointers to the new optional components and mapping-format candidates. No decision status changes.
