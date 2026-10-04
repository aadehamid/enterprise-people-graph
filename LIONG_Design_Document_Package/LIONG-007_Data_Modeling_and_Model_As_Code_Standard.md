# LIONG People Graph

# Data Modeling and Model-as-Code Standard

| Document control | Value |
| --- | --- |
| Document ID | LIONG-007 |
| Version | 0.6 |
| Date | 2026-10-03 |
| Status | Version 0.1 approved; maintenance revision |
| Approved dependencies | LIONG-001 through LIONG-006, each approved at version 0.1 |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose

This standard converts the approved canonical model into repeatable schema, mapping, validation, and release conventions.

Model-as-code means that definitions, constraints, mappings, and change history are versioned artifacts. A diagram is a view of those artifacts. It is not the only model authority.

LIONG-006 owns conceptual meaning. This document owns implementation conventions. LIONG-011 defines approved component recommendations and named exceptions. No database or validator product is selected here.

The user approved version 0.1 and DEC-021 through DEC-025 on 2026-10-03. The conventions below are approved. Example schemas are design examples, not completed implementation files.

## 2. Artifact authority

| Artifact | Responsibility | Authority boundary |
| --- | --- | --- |
| Domain catalogue | Define entities and relationships | Must implement LIONG-006 |
| Data dictionary | Define fields, types, grain, and missingness | Does not invent new business rules |
| Schema contracts | Validate record structure | Cannot establish assessment truth |
| Ontology artifacts | Express canonical meaning and vocabulary links | Do not perform authoritative calculations |
| Validation shapes | Check supported graph constraints | Do not replace all temporal checks |
| Mapping specifications | Transform source records and project canonical records | Must preserve evidence and version identity |
| Migration files | Change physical structures and data | Must retain historical decision references |
| Fixtures | Demonstrate rule behavior | Hidden evaluation answers remain isolated |
| Release manifest | Pin artifacts, dependencies, and checksums | Defines a reproducible model release |

Use one governed field definition per concept. Physical names can differ by projection, but mappings must be explicit.

### 2.1 PSDO mapping artifacts

[Performance Summary Display Ontology (PSDO)](https://www.ebi.ac.uk/ols4/ontologies/psdo) is an authorized supporting vocabulary for performance summaries and feedback displays (DEC-055). Retain the LIONG core model for employment, assessments, evidence, nominations, authority, and decisions. Selective reuse requires reviewed definitions and pinned mappings. Full import and class equivalence are not approved.

Keep pinned upstream artifacts separate from LIONG definitions. Each mapping records the LIONG concept ID, PSDO term IRI, artifact revision and checksum, mapping relation, rationale, reviewer, status, and mapping version. Store large reference packages in R2; keep small model specifications and attribution notices in Git.

Validate deprecated terms, imported axioms, and dependency licenses. Shared labels do not establish equivalence. Rendering R1–R4 in order does not permit arithmetic on their codes. Mapping changes create a new model release and retain historical references.

### 2.2 Multi-vocabulary mapping standard

DEC-056 extends the PSDO mapping checks to the shortlist in LIONG-005 §8.2 and LIONG-006 §9.2. Each selected term requires an upstream IRI, artifact revision and checksum, definition rationale, mapping relation, reviewer, status, and imported-dependency record.

Record vocabulary scope separately from implementation software. Test one connected case across ORG organizational context, CTDL-ASN criteria, Web Annotation passages, PROV-O derivation, and PSDO presentation. SEPIO is a bounded pilot. Use OWL-Time only where it improves interval interchange; keep valid and available timestamps explicit. SKOS and ESCO mappings do not create employee skills. CTDL and ODRL remain later or deferred.

New mappings create versioned semantic artifacts and projection fixtures. Do not claim a full dependency closure has passed because source pages were inspected.

## 3. Proposed repository layout

| Path | Contents |
| --- | --- |
| docs/ | Approved documents and working drafts |
| model/catalogue/ | Entity, relationship, and field definitions |
| model/vocabularies/ | Controlled values and reference mappings |
| model/contracts/ | Record schemas and payload contracts |
| semantic/ontology/ | RDF ontology artifacts |
| semantic/shapes/ | RDF validation shapes |
| mappings/source/ | Source-to-canonical rules |
| mappings/projection/ | Canonical-to-relational and graph rules |
| migrations/ | Ordered physical schema changes |
| validation/ | Structural, temporal, and reconciliation checks |
| fixtures/public/ | Non-secret examples and expected contract behavior |
| evaluations/private/ | Access-isolated scoring keys; excluded from operational indexes |
| releases/ | Small release manifests and attribution notices |

Large generated datasets and evidence corpora remain outside Git. Cloudflare R2 stores all durable data. Repository code and small manifests remain in Git. Large data objects reside in R2; local files are temporary copies.

A directory name alone does not enforce isolation. Permissions and deployment boundaries must protect private evaluation material.

## 4. Naming and identifiers

Use singular PascalCase for conceptual classes, lower_snake_case for field and table names, and explicit verbs for relationship names.

Examples: CriterionAssessment, criterion_assessment, assessment_id, assesses_criterion.

Use opaque text identifiers with a defined namespace. Do not encode mutable organizational facts in person identifiers.

Propose reserved example namespaces for design artifacts:

- https://liong.example/ontology/ for model terms.
- https://liong.example/id/ for synthetic entity identities.
- https://liong.example/version/ for immutable record versions.

These are illustrative namespaces under a reserved example domain. They are not deployed resolution services.

A source key is qualified by source_system. A canonical entity ID and a record-version ID are different fields.

Do not use names or email addresses as primary keys. Avoid global equivalence assertions for unresolved identity mappings.

## 5. Record grain and keys

Every contract must state what one row or object represents.

| Record | Grain | Required identity |
| --- | --- | --- |
| Person | One synthetic individual | person_id |
| Assignment | One dated occupation of a position | assignment_id plus version_id |
| Reporting relationship | One dated assignment-to-manager link | relationship_id plus version_id |
| Evidence version | One immutable source-record version | evidence_version_id |
| Criterion assessment | One assessor judgment against one criterion for one case | assessment_id plus version_id |
| Rating version | One proposed, revised, or final rating record | rating_id plus version_id |
| Decision | One authorized case decision revision | decision_id plus version_id |
| Evidence snapshot member | One selected evidence version in one snapshot | snapshot_id and evidence_version_id |
| Cohort membership | One subject included in one versioned comparison | cohort_version_id and subject_id |

Natural uniqueness constraints supplement identifiers. For example, the same snapshot cannot contain duplicate references to the same evidence version.

Do not assume one review row per person forever. Cycle, case version, and assignment context matter.

## 6. Datatypes and missingness

| Logical type | Convention |
| --- | --- |
| Identifier | Non-empty text; namespace rules validated |
| Timestamp | Timezone-aware value normalized to UTC |
| Calendar date | Date without invented time of day |
| Decimal measure | Defined precision, scale, and unit |
| Category | Stable code from a versioned vocabulary |
| Boolean | Use only when true or false is established |
| Narrative | Text linked to author, version, and classification |
| Collection | Explicit member records when identity or provenance is required |

Do not store a calendar review date as midnight UTC when that changes its local interpretation.

Missing booleans must not default to false. Missing ratings must not default to R1. Missing percentages must not default to zero.

Separate assessment_status from rating_category. Incomplete and not-applicable records have no assessed category unless an explicit policy defines otherwise.

For material missing fields, record a gap reason such as absent_source, unresolved_identity, or pending_assessment. Restricted metadata remains internal unless disclosure is authorized.

## 7. Validity and record versions

Validity intervals are half-open: valid_from is included; valid_to is excluded. An absent valid_to means continuing validity.

Each material version retains available_at and ingested_at. Where relevant, also retain event time, assessed period, decision time, and effective date.

Corrections append immutable versions. Current views select the applicable version without deleting prior versions.

A decision snapshot references specific evidence versions and policy versions. Updating a document must not change the evidence previously considered by a panel.

An historical query declares whether it reconstructs source-available evidence or system-received evidence. These modes can return different results.

## 8. Example logical contract

The following specification illustrates a CriterionAssessment contract. It does not prescribe a serialization library.

```yaml
entity: CriterionAssessment
contract_version: 0.1.0
grain: one assessor judgment against one criterion for one case
identity:
  entity_key: assessment_id
  version_key: version_id
required_fields:
  - assessment_id
  - version_id
  - case_id
  - criterion_version_id
  - assessor_id
  - assessment_status
  - assessed_at
  - available_at
  - ingested_at
  - provenance_category
  - access_classification
optional_fields:
  - judgment
  - rationale
constraints:
  - criterion_version_id resolves to an applicable criterion
  - assessor_id resolves to a permitted actor
  - judgment is present only when assessment_status is assessed
  - evidence links identify immutable evidence versions
```

The final contract must add exact types, allowed values, reference targets, and conditional constraints. Contract schemas must reject unknown fields unless an explicit extension container permits them.

A validated shape does not prove that the judgment is correct. It proves only the checked structural and application conditions.

## 9. Mapping specifications

Every source mapping must define:

1. Source contract and record grain.
2. Source identity namespace and resolution rules.
3. Target entity and version semantics.
4. Field transformations and vocabulary mappings.
5. Timezone and interval treatment.
6. Missingness and rejection behavior.
7. Provenance and classification propagation.
8. Idempotency key and correction behavior.
9. Validation checks and example inputs.

Do not discard source codes when normalizing labels. Preserve raw values and mapped values separately where they affect interpretation.

Source omissions remain omissions. Mapping logic must not create employee capability from role requirements or course completion.

Reject or quarantine ambiguous identities. Similar names do not establish a merge.

## 10. Physical projection rules

### 10.1 Relational projection

Use explicit primary and foreign keys. Association tables preserve many-to-many evidence links and snapshot membership.

Application or database validation must enforce temporal rules. A foreign key alone cannot establish that a manager assignment was valid during a reporting period.

### 10.2 RDF projection

Preserve canonical identifiers and version-specific resources. Use qualified relationship entities when links need author, dates, interpretation, or independent identity.

SHACL artifacts may encode supported structural constraints. Temporal overlap, hierarchy cycles, and access decisions can require separate checks.

### 10.3 Property-graph projection

Retain nodes for material evidence versions, assessments, decisions, and qualified relationships. Use edge properties only when they preserve required identity and multiplicity.

Derived convenience edges must identify their generating rule and source records. They are views, not independent authoritative evidence.

### 10.4 Projection equivalence

Run the same competency fixtures against each supported projection. Compare identities, accessible evidence sets, temporal results, and analytical outputs.

Do not claim equivalence based only on matching node and row counts.

## 11. Validation ownership

| Rule group | Primary check | Failure treatment |
| --- | --- | --- |
| Required fields and datatypes | Contract validation | Reject malformed payload |
| Identifiers and vocabulary values | Dictionary and reference validation | Quarantine unknown values |
| Referential integrity | Target-key validation | Quarantine unresolved links |
| Role, track, and level combinations | Approved compatibility matrix | Reject invalid combinations |
| Assignment and reporting intervals | Temporal validator | Quarantine conflicting periods |
| Reporting hierarchy cycles | Snapshot graph check | Reject invalid primary hierarchy |
| Decision authority and conflicts | Policy and access validator | Block finalization |
| Immutable snapshot references | Version-resolution check | Block incomplete snapshot publication |
| Duplicate source evidence | Lineage and reconciliation check | Preserve source history; adjust declared counting rules |
| Workforce totals | Release reconciliation | Fail dataset checkpoint |
| License evidence | Component or data-source release gate | Exclude unresolved dependencies |
| Hidden answer exposure | Deployment and index boundary check | Fail evaluation release |

Map SEM-01 through SEM-12 from LIONG-006 to named checks in the implementation catalogue. No rule may disappear during projection.

## 12. Contract evolution

Use semantic versioning for model releases: major.minor.patch.

A major change removes or redefines a concept, changes grain, or invalidates existing consumers. A minor change adds compatible fields or optional capabilities. A patch corrects documentation or validation behavior without changing the intended contract.

An added required field can be breaking unless a migration and compatible default are explicitly established. Do not label every addition minor.

Documents keep their own review versions. A document version is not automatically the deployed model release version.

For each change, record rationale, affected artifacts, migration, backfill need, compatibility assessment, and acceptance fixtures.

## 13. Migration and replay

Migrations are ordered and immutable after release. A corrected migration uses a new identifier.

Validate upgrades against a checkpoint copy before publishing. Define backup and restoration steps. A rollback that destroys later decision records is not an acceptable routine recovery path.

Replay from pinned source versions must preserve canonical identity. Material transformation changes create a new projection release with lineage to the prior release.

Do not overwrite the release used by a historical dossier merely because a current transformation improves a label.

## 14. Release manifest

A release manifest records:

- Model release identifier and source commit.
- Approved document versions and decision IDs.
- Contract, ontology, vocabulary, shape, and mapping versions.
- Pinned public-reference packages and attribution notices.
- Selected component versions and license evidence when available.
- Dataset checkpoint identifier and checksums.
- Validation results and known exceptions.
- Supported query fixtures and deployment configuration version.

Secrets and private answer keys do not belong in the public manifest.

A release is reproducible only when the required versions and inputs are retained. A current URL alone is insufficient.

## 15. Definition of done for a model change

A model change is complete when its meaning, grain, fields, constraints, projections, migration impact, and question coverage are recorded.

Run checks proportionate to the change. Meaningful tests cover invalid references, temporal boundaries, immutable evidence, missingness, and projection behavior. Do not substitute tests that merely repeat field names for behavioral validation.

Material changes to approved meaning return to the decision register for review. Routine formatting changes do not reopen business approval.

## 16. Proposed decisions and open items

| ID | Proposal | Status |
| --- | --- | --- |
| DEC-021 | Versioned model artifacts with explicit authority and ownership | Approved |
| DEC-022 | Opaque identifiers, separate entity and record-version identity | Approved |
| DEC-023 | Conditional missingness rules and immutable correction history | Approved |
| DEC-024 | Validation divided across structural, temporal, policy, and reconciliation checks | Approved |
| DEC-025 | Semantic model releases with manifests and projection-equivalence fixtures | Approved |

Physical database engines, serialization libraries, and validators remain unselected. Final field-level contracts are implementation deliverables, not attachments to this draft.

## 17. Impact and next document

LIONG-006 version 0.1 and DEC-017 through DEC-020 are approved. This standard implements those choices without changing canonical meaning.

The decision register records approval and new proposals. The charter references the current drafting stage.

Sequence reference (approved design): LIONG-008 — Synthetic Data Generation Strategy. It will define the canonical world, source projections, controlled anomalies, and isolated evaluation truth.

## 18. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | First schema, versioning, mapping, validation, and release standard | Approved on 2026-10-03 |
| 0.2 | Records approval; standard unchanged | Maintenance revision |
| 0.3 | Aligns artifact storage and component references with approved LIONG-011 | Maintenance revision |
| 0.4 | Adds authorized PSDO scope, link, and release checks | Targeted user-authorized revision |
| 0.5 | Adds authorized ontology shortlist, descriptions, links, and reuse boundaries | Targeted revision |

Maintenance record: 0.6 consolidates the approved package status and index links on 2026-10-03.
