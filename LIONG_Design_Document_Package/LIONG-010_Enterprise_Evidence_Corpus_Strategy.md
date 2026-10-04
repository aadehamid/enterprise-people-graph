# LIONG People Graph

# Enterprise Evidence Corpus Strategy

| Document control | Value |
| --- | --- |
| Document ID | LIONG-010 |
| Version | 0.4 |
| Date | 2026-10-03 |
| Status | Version 0.1 approved; maintenance revision |
| Approved dependencies | LIONG-001 through LIONG-009, each approved at version 0.1 |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose

The enterprise evidence corpus is the collection of synthetic documents and narrative records used to explain workforce cases.

It complements structured HR, performance, learning, project, and calibration records. It does not replace their defined source authority.

The corpus must support promotion calibration, rating calibration, and conversational people insights. It must preserve author perspective, time, access classification, and document versions.

This document defines artifact types, generation contracts, retrieval preparation, and quality gates. It does not select language models, storage products, or retrieval software.

## 1.1 Durable corpus storage

Cloudflare R2 stores all durable data, including synthetic data. Cloudflare, Databricks, and model choices are confirmed exceptions to the open-source rule. All other used components must pass the component assessment. PostgreSQL and Neo4j hold serving copies. Their versioned data exports reside in R2. See LIONG-011 version 0.2, approved on 2026-10-03, and DEC-047/048. Each document and chunk resolves to an immutable evidence version. Isolate evaluator-only artifacts from corpus credentials.

## 2. Evidence boundaries

The canonical world supplies coherent events. Each document uses only the facts and assessments that its author could know at its modeled creation time.

An author cannot cite a future panel decision or a later assessment unless the artifact is an explicitly retrospective revision.

A document can contain an opinion, incomplete account, or disagreement. Synthetic provenance does not make every statement true within the scenario.

Private causes, anomaly labels, expected answer sets, and scoring keys never enter the operational corpus.

## 3. Artifact catalogue

| Artifact ID | Type | Author role | Main use | Required context |
| --- | --- | --- | --- | --- |
| ART-01 | Policy document | Authorized policy owner | Applicable rating and promotion rules | Policy version, effective dates, approval |
| ART-02 | Goal agreement | Employee and manager | Agreed expectations | Review cycle, assignment, criterion references |
| ART-03 | Work contribution note | Employee or project lead | Individual work evidence | Work item, contribution period, author scope |
| ART-04 | Manager assessment | Relevant manager | Criterion and rating rationale | Assignment period, cycle, assessed criteria |
| ART-05 | Peer feedback | Eligible colleague | Attributed observations | Relationship context and observation period |
| ART-06 | Learning or competence note | Trainer or assessor | Completion and capability distinctions | Learning item, assessment, evidence references |
| ART-07 | Promotion nomination | Submitting manager | Target-level case | Target, window, policy, criterion support |
| ART-08 | Completeness review | HR partner | Evidence gaps and eligibility checks | Nomination revision and unresolved items |
| ART-09 | Panel discussion note | Authorized participant | Deliberation context | Session, participants, cutoff, conflicts |
| ART-10 | Decision rationale | Authorized chair | Traceable final outcome | Decision version, authority, snapshot |
| ART-11 | Calibration change note | Authorized reviewer | Explain a rating revision | Prior and new rating, reason, evidence |
| ART-12 | Reopening or correction note | Authorized case owner | Later evidence and revised context | Prior decision, new version, authority |

Candidate résumés, career aspirations, mentor records, and recruiting correspondence are later scope. Do not generate large collections for use cases outside the MVP.

## 4. Artifact metadata contract

Each artifact version requires:

- artifact_id and immutable artifact_version_id.
- artifact_type and template_version.
- source_system and source_record_id.
- author identity and author role at creation.
- audience or authorized scope.
- created_at, available_at, and ingested_at.
- subject and relevant case, cycle, assignment, or work-item references.
- access_classification.
- provenance_category.
- content location, media type, and checksum.
- revision_of when applicable.
- generation configuration and validation result references.

Do not place hidden scenario truth in an operational metadata extension.

Creation time is not the same as availability time. A delayed upload can make an earlier note unavailable to the panel.

## 5. Author knowledge contract

Generate a permitted context bundle for each author and artifact date.

| Author | Permitted context examples | Excluded by default |
| --- | --- | --- |
| Employee | Own assignments, goals, work, permitted feedback | Confidential panel deliberation |
| Manager | Assigned-team evidence for authorized periods | Unrelated teams' confidential cases |
| Project lead | Contributions and project outcomes within scope | Full employee rating history |
| HR partner | Scoped cases and applicable policies | Enterprise-wide unrestricted access |
| Panel member | Session dossiers and permitted comparison cases | Future decisions or private scoring keys |
| Policy owner | Approved policy content and changes | Invented assessments of specific employees |

Knowledge permission and runtime access are separate. A document can legitimately contain information that a later requester may not access.

Retain the generation context manifest privately for validation. Operational retrieval sees the document and permitted lineage, not hidden causes.

## 6. Template-first generation

Use templates for identifiers, dates, policy references, rating categories, decision outcomes, and other critical facts.

Templates can vary wording while preserving those facts. They must not introduce new cases, qualifications, performance measures, or authority.

The first release must work without model-generated text. If a language model is later selected, its model choice is exempt from the open-source rule. Applicable terms, factual validation, and authorized data handling still apply. Non-exempt runtime libraries require component assessment.

Optional model generation receives a bounded author context. It returns text, not authoritative records. Validate its output before publishing.

On failure, reject the artifact or use a template fallback. Do not repair unsupported claims by adding invented records to the canonical world.

## 7. Required template structure

| Artifact group | Required sections |
| --- | --- |
| Policy | Purpose; scope; definitions; rules; authority; effective period; revision history |
| Assessment | Assignment and period; criterion expectations; supporting observations; gaps; attributed judgment |
| Nomination | Current and target context; eligibility; criterion evidence; unresolved gaps; organizational authorization |
| Panel note | Session and cutoff; reviewed cases; discussion; conflicts; unresolved matters; references |
| Decision rationale | Outcome; applicable criteria; evidence used; reason; authority; pending effective change |
| Correction | Prior version; corrected statement; reason; new evidence; effect on case status |

Use the project's ASD-STE100-inspired style for policies and structured explanations. Peer feedback can show controlled variation in tone, but must remain clear and attributable.

Do not use elaborate prose to hide missing evidence.

## 8. Claim-level consistency

Critical claims must map to a structured record or an explicitly attributed assessment.

| Claim type | Validation |
| --- | --- |
| Employment or assignment fact | Matches applicable SYS-HR version |
| Rating value | Matches the identified proposed, revised, or final rating version |
| Panel outcome | Matches the authorized SYS-CAL decision |
| Learning completion | Matches SYS-LEARN record and date |
| Competence judgment | Identifies assessment and assessor |
| Work result | Matches recorded outcome or remains an attributed statement |
| Policy requirement | Links to applicable policy clause and version |
| Unsupported advocacy | Remains an attributed claim with no fabricated verification |

A document can repeat a source claim without independently verifying it. Preserve that lineage. Five documents quoting one assessment are not five independent confirmations.

## 9. Controlled imperfections

| Condition | Generation rule | Expected answer behavior |
| --- | --- | --- |
| Missing evidence | Omit an expected record through a declared scenario | Report a bounded gap |
| Conflicting views | Generate distinct attributed judgments | Describe accessible disagreement |
| Stale note | Keep an older version with valid dates | Identify age or supersession where relevant |
| Late arrival | Set availability after panel cutoff | Exclude from original decision view |
| Duplicate quotation | Reuse a claim with common source lineage | Avoid false independent support |
| Strong advocacy | Add persuasive opinion without extra facts | Separate endorsement from evidence |
| Correction | Create a linked later version | Preserve original and corrected context |
| Hostile instruction | Insert into designated evaluation artifacts | Treat as data; do not alter tools or authority |

The private exception manifest identifies planted conditions. Operational documents do not reveal the intended answer.

Do not make all contradictions resolvable. The system must support genuine uncertainty within a synthetic scenario.

## 10. Document and structured-record authority

A narrative and a structured record can disagree. Preserve both with their source and version.

Use the approved authority matrix in LIONG-009. A manager note cannot overwrite an employment level. A decision rationale cannot create an effective assignment change.

If structured records omit rationale, the narrative can supply the rationale through a linked evidence version. It does not silently rewrite the outcome.

Reconciliation exceptions identify the conflict and responsible owner. Agents explain permitted evidence; they do not adjudicate source authority outside approved rules.

## 11. Versioning and corrections

Material revisions create immutable artifact versions. Finalized dossiers reference specific versions and content checksums.

Keep creation and availability times for each version. A later correction does not become evidence available to an earlier panel.

Changing access classification does not require changing historical prose. It does require applying current retrieval permissions according to the retention and access design.

Do not keep only a current URL for a document used in a decision. Retain a resolvable version reference.

## 12. Retrieval preparation

Extract text and structural metadata from published artifact versions. Preserve section headings, clause identifiers, page or paragraph anchors where available, and parent-version links.

Chunking must not separate a claim from necessary qualifiers or attribution. Overlapping chunks remain parts of one source version.

Each chunk requires parent artifact/version, location anchor, access classification, time metadata, and extraction version.

Apply authorization before chunks enter the answer context. Do not retrieve unrestricted candidates and ask the language model to remove confidential content afterward.

Lexical or vector search returns candidate evidence. Similarity does not establish policy applicability, factual truth, or person competence.

Any embedding model and runtime must pass the component license gate. No model is selected by this document.

## 13. Answer citations

An answer reference must resolve to an accessible artifact version and a useful location within it.

Cite the passage that supports the claim. A whole dossier link alone may be insufficient for a specific rating-change statement.

For derived results, cite the calculation definition and input snapshot. For an assessment, identify it as an assessment.

When a passage contains several claims, avoid implying that one reference supports unrelated conclusions.

## 14. Corpus volume and coverage

Generate mandatory policy and workflow artifacts first. Generate case documents according to review eligibility, nominations, revisions, and scenario coverage.

Do not assign every employee the same number of feedback records. Differences in evidence availability are part of the simulation.

The release must cover all 12 approved controlled scenarios in LIONG-008. Exact document counts, lengths, and distribution parameters remain open configuration choices.

Use a small connected case set before scaling to the full workforce. Review sample artifacts for readability, temporal accuracy, and evidence consistency.

## 15. Quality and release gates

| Gate | Required result |
| --- | --- |
| Metadata | Required references, dates, classifications, and versions present |
| Identity | Referenced people and cases resolve or remain explicitly unresolved |
| Temporal | Author context and cited evidence fit availability rules |
| Facts | Critical values match their approved source or assessment |
| Authority | Author and decision roles are valid |
| Lineage | Quotations and duplicates preserve shared origin |
| Language | Clear terms, explicit relationships, no unexplained jargon |
| Retrieval | Chunks retain attribution, scope, and parent references |
| Access | Unauthorized users cannot obtain restricted content or hidden metadata |
| Isolation | No evaluation key or hidden causal label enters corpus or indexes |
| Licensing | Imported text and generation components satisfy applicable release gates |

Corpus validation does not establish real employee performance. It establishes internal consistency and intended scenario behavior.

## 16. Evaluation fixtures

Create fixtures for passage support, conflicting evidence, late corrections, repeated quotations, access denial, and hostile instructions.

Expected evidence locations and answer checks remain outside operational indexes. Evaluation must distinguish retrieval failure from reasoning failure.

A correct answer can state unknown or unresolved. Do not reward an unsupported decisive answer merely because it matches a hidden panel label.

## 17. Proposed decisions and open items

| ID | Proposal | Status |
| --- | --- | --- |
| DEC-036 | Twelve initial artifact types linked to source and case context | Approved |
| DEC-037 | Bounded author knowledge bundles and template-first publication | Approved |
| DEC-038 | Claim-level validation with shared-source lineage | Approved |
| DEC-039 | Parent-version and authorization-preserving retrieval chunks | Approved |
| DEC-040 | Corpus gates that test support, time, access, and evaluation isolation | Approved |

Artifact volume, final templates, extraction tooling, embedding models, and retention rules remain open. Original fictional training material avoids mandatory reuse of restricted external specifications.

The user approved version 0.1 and DEC-036 through DEC-040 on 2026-10-03. Corpus volumes and component release checks remain open.

## 18. Impact and next document

LIONG-009 and DEC-031 through DEC-035 are approved. This strategy uses its source authority, availability, versioning, and exception rules.

The charter and register record approval and the corpus draft. No approved integration behavior changes.

Sequence reference (approved design): LIONG-011 — Open Source Technology Options and Reference Stack. It will verify exact components, required features, licenses, and dependency boundaries.

## 19. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | First artifact catalogue, author context, generation, retrieval, and corpus validation strategy | Approved on 2026-10-03 |
| 0.2 | Records approval; corpus strategy unchanged | Maintenance revision |
| 0.3 | Aligns evidence storage and model exception; claim validation unchanged | Maintenance revision |

Maintenance record: 0.4 consolidates the approved package status and index links on 2026-10-03.
