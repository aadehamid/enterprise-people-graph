# LIONG People Graph

# Public Data and Reference Source Strategy

| Document control | Value |
| --- | --- |
| Document ID | LIONG-005 |
| Version | 0.6 |
| Date | 2026-10-03 |
| Status | Version 0.1 approved; maintenance revision |
| Approved dependencies | LIONG-001 through LIONG-004, each approved at version 0.1 |
| Research checkpoint | Official source pages checked on 2026-10-03 |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose and conclusion

Public data is sufficient to supply a reference scaffold for the LIONG People Graph simulation. Synthetic records must supply the employee evidence and decisions required by the calibration MVPs.

Public reference data cannot establish LIONG employee competence, ratings, reporting lines, or promotion outcomes. The fictional enterprise does not have observed employee facts.

This document defines source priorities, reuse gates, mapping rules, provenance, and acquisition requirements. It does not claim that source packages have been downloaded or that all 36 LIONG roles have been mapped.

Official pages were inspected for source characteristics and licensing statements. Package-level checks remain implementation work.

## 2. Requirements from the approved question catalogue

| Required information | Relevant question group | Public data contribution | Enterprise generation |
| --- | --- | --- | --- |
| Role and task vocabulary | CQ-P01, CQ-P02 | Occupation descriptions, tasks, skills | LIONG role, track, level, and criterion extensions |
| Applicable promotion policy | CQ-P01, CQ-P04, CQ-P05 | No external policy is required | Approved fictional policy and authorizations |
| Assessments and supporting evidence | CQ-P02, CQ-P03, CQ-P06 | Domain terminology only | Goals, contributions, feedback, assessments |
| Decisions and revisions | CQ-P07, CQ-P08, CQ-P10, CQ-R02 | No employee-level contribution | Panel sessions, rationale, revisions, assignments |
| Rating distributions and cohorts | CQ-R01, CQ-R03, CQ-R04 | No observed LIONG distribution | Eligible reviews and versioned cohort membership |
| Temporal and access context | CQ-C01 through CQ-C07 | General reference concepts only | Availability times, classifications, user scopes |

CQ-P09 and CQ-R08 can use occupational context. They still require synthetic assignments and review history.

The first release does not need a large public-person dataset. It needs explicit reference definitions and coherent enterprise evidence.

## 3. Source selection principles

Select sources against the question catalogue. A source must have a defined role in the model or generation process.

Separate three assessments:

1. Can the source be accessed?
2. May the intended material be copied, adapted, and distributed?
3. Does it support the required business meaning?

Public visibility does not establish open-data reuse. An open API does not establish a dataset license. A dataset license does not establish that API software satisfies the open-source component constraint.

Prefer versioned downloadable packages for reproducible reference imports. No remote proprietary service is required to execute the simulation.

## 4. Source register

| Source ID | Source | Proposed use | Access finding | Reuse finding | Release treatment |
| --- | --- | --- | --- | --- | --- |
| SRC-01 | O*NET database | Primary occupational scaffold | Download formats documented | Database license states CC BY 4.0, with defined scope | Recommended baseline; package checks required |
| SRC-02 | ESCO classification | Secondary skill vocabulary and mapping | Downloads documented | Selected dataset reuse evidence not yet established in this review | Conditional candidate; not a required dependency |
| SRC-03 | OPITO public catalogue | Industry context and credential distinctions | Public catalogue pages accessible | No approved bulk-reuse basis established | Link-only research reference |
| SRC-04 | Original LIONG definitions | Local roles, policies, criteria, courses | Authored within project | Project release license to be recorded | Required synthetic extension |
| SRC-05 | Real professional profiles | None in MVP | Not assessed | Not assessed | Excluded |
| SRC-06 | Labor-market aggregates | Optional later workforce planning context | Not assessed | Not assessed | Deferred |

“Recommended baseline” identifies a design recommendation. It does not mean ingestion has occurred or user approval has been recorded.

## 5. O*NET database strategy

The official database page identifies release 31.0 and provides tabular, SQL, and RDF options. Its occupational framework describes work in the U.S. economy. [S1]

Propose a bounded import using occupation definitions, task records, skills, work activities, and their supporting dictionaries. Preserve the source release and identifiers.

The database license permits reuse and adaptation under CC BY 4.0 within its specified scope. Required treatment includes attribution, a license link, and identification of changes. The license page distinguishes database files from other tools and website material. [S2]

Retain the source notice and a project change record. Do not suggest provider endorsement of LIONG mappings.

The reference does not define LIONG job levels, Nigerian employment policy, employee proficiency, or promotion eligibility. Do not convert occupational ratings directly into person ratings.

### 5.1 Import boundary

Import only records needed for the initial role catalogue. Keep untouched source records separate from normalized project records.

Retain source scale definitions for numerical attributes. An importance value is not an employee proficiency score. Job Zone is not a LIONG career level.

This bounded import avoids making the complete public taxonomy a mandatory operational graph.

## 6. ESCO strategy

ESCO provides downloadable classifications, including CSV and SKOS-RDF formats. Its purpose includes interoperability across occupations and skills in the European labor market. [S3, S4]

Use it as a secondary candidate for canonical skill labels, synonyms, and occupation-to-skill relationships. Preserve source concept identifiers and release metadata.

The official API page identifies an EUPL 1.2 license for API software. That statement is not treated as the classification dataset's reuse license. [S5]

Before importing ESCO data, retain the selected package's applicable reuse notice and any exceptions. Do not assign a dataset license from a general Commission policy without verifying its scope.

The MVP can proceed with the O*NET reference scaffold and original LIONG extensions while this gate remains open. No ESCO API deployment is selected here.

## 7. OPITO strategy

The public oil-and-gas catalogue lists training and competence-assessment products. A sample product page describes assessment context and states that full specifications can be requested by eligible stakeholders. [S6, S7]

This supports a modeling distinction between training, work experience, competence assessment, and reassessment. It does not grant rights to republish product specifications.

Use links for research context. Do not bulk-copy catalog descriptions, assessment units, or standards into the released simulation without established reuse rights. Website terms require separate consideration. [S8]

The release can instead use original fictional LIONG courses and competency assessments. Mark them as synthetic. Do not present fictional completions as actual OPITO certification.

OPITO material is not a mandatory runtime dependency.

## 8. Original LIONG extension

The extension supplies information that reference taxonomies cannot establish:

- LIONG job families, positions, tracks, and levels.
- Role-specific expectations and target-level criteria.
- Approved fictional rating and promotion policies.
- Site and project context.
- Fictional learning items and competency assessments.
- Evidence-type definitions and interpretation rules.

Each authored definition must carry an owner document, version, and status. A role-to-reference mapping does not replace the local definition.

The project release license is still open. Imported attribution obligations must remain visible regardless of the license chosen for original artifacts.

### 8.1 PSDO reference source

[Performance Summary Display Ontology (PSDO)](https://www.ebi.ac.uk/ols4/ontologies/psdo) is an authorized supporting vocabulary for performance summaries and feedback displays (DEC-055). Retain the LIONG core model for employment, assessments, evidence, nominations, authority, and decisions. Selective reuse requires reviewed definitions and pinned mappings. Full import and class equivalence are not approved.

The inspected [upstream OWL artifact](https://raw.githubusercontent.com/Display-Lab/psdo/master/psdo.owl) declares CC BY 4.0. The [OBO Foundry registry](https://obofoundry.org/ontology/psdo.html) lists CC BY 3.0. Resolve this mismatch for the selected immutable release before import or redistribution. Record attribution, version IRI, checksum, and imported dependency licenses. The ontology license is separate from software licensing.

Store the pinned artifact, dependency closure, license evidence, and mappings in R2. Use OLS for discovery; operational queries use pinned artifacts. No package acquisition or production mapping has passed its gate. PSDO supplies definitions, not workforce data or promotion policy.

### 8.2 Additional ontology and vocabulary shortlist

DEC-056 authorizes selective assessment of the resources below. They complement the PSDO display vocabulary. None provides a complete promotion-calibration workflow.

| Resource | Brief description | LIONG use | Adoption state |
| --- | --- | --- | --- |
| [ORG](https://www.w3.org/TR/vocab-org/) | Organizational structure, posts, roles, sites, and membership | Map business units, positions, and dated organizational context | Assess for MVP |
| [CTDL-ASN](https://credreg.net/ctdlasn/terms) | Competency frameworks, competencies, rubrics, criteria, and levels | Describe target-level expectations and evaluation rubrics | Assess for MVP |
| [Web Annotation](https://www.w3.org/TR/annotation-model/) | Associations between an annotation body and a resource or selected passage | Link reviewer comments and assessments to exact evidence passages | Assess for MVP |
| [SEPIO](https://www.ebi.ac.uk/ols4/ontologies/sepio) | Scientific claims, evidence lines, supporting information, methods, and agents | Pilot claim-to-evidence links in one promotion dossier | Bounded pilot; cross-domain fit open |
| [PROV-O](https://www.w3.org/TR/prov-o/) | Entities, activities, agents, and provenance relationships | Trace assessment authorship, source versions, derivation, and revisions | Existing alignment; make mappings explicit |
| [OWL-Time](https://www.w3.org/TR/owl-time/) | Temporal instants, intervals, and their relationships | Represent assignment and review periods | Assess a small subset |
| [ESCO](https://esco.ec.europa.eu/en/use-esco) | Linked occupations and skill concepts with relationships | Normalize role/skill references and support later career matching | Existing source assessment |
| [SKOS](https://www.w3.org/TR/skos-reference/) | Concept schemes, labels, semantic relations, and mappings | Maintain controlled terms and reviewed reference mappings | Existing alignment |
| [CTDL](https://www.credreg.com/ctdl/handbook) | Credentials, assessment offerings, learning opportunities, and pathways | Describe later learning and career options | Later scope |
| [ODRL](https://www.w3.org/TR/odrl-model/) | Permissions, prohibitions, duties, and constraints | Express evidence-use policies after access rules are defined | Deferred; enforcement remains in application |

CTDL-ASN publisher documentation states CC BY 4.0. The SEPIO upstream project and OBO registry state CC BY 3.0. Pin artifacts and inspect imported dependency terms before use. External competency-framework records require their own reuse assessment; a schema license does not license all instance data.

The [ESCO official FAQ](https://esco.ec.europa.eu/en/about-esco/faq?page=1) permits free download, use, reproduction, and reuse under Commission Decision 2011/833/EU. This addresses the general classification-reuse uncertainty. Retain the applicable conditions and attribution; selected package verification and local mappings remain open. Do not substitute the API software license for the classification terms.

W3C public specifications and machine-readable vocabularies support assessment. Capture the exact artifact notices and applicable terms. Do not infer that a public specification certifies every implementation's software license.

Store pinned vocabularies, license evidence, dependency closures, and mappings in R2. Preserve stable upstream identifiers. Full imports, equivalence assertions, and deployment are not approved by the shortlist.

## 9. Role coverage and mapping plan

| LIONG family | Reference search focus | Local extension need |
| --- | --- | --- |
| Process Operations | Plant operations, control-room tasks | Unit context and operating scope |
| Gas and Production Operations | Gas processing and petroleum operations | Local production assignments |
| Mechanical Maintenance | Machinery maintenance and mechanical work | Equipment disciplines and responsibility |
| Electrical and Instrumentation | Electrical maintenance, controls, instrumentation | Site systems and competence evidence |
| Reliability and Integrity | Engineering, inspection, maintenance analysis | Reliability and integrity specialization |
| Planning and Scheduling | Maintenance, scheduling, project coordination | Turnaround and work-management context |
| Engineering and Projects | Process engineering and project delivery | LIONG project role boundaries |
| Logistics and Terminals | Storage, transport, inventory | Terminal and movement context |
| Commercial and Supply | Planning, analysis, trading support | Energy-commercial terminology |
| HSE and Process Safety | Safety, environmental and engineering work | Process-safety responsibility |
| Digital and Data | Software, data and analytics work | Product and platform context |
| Corporate Services | HR, finance, procurement | Local policy and authority scope |

These are search directions, not verified mappings. Do not invent source codes to fill the table.

For each of the 36 role templates, record a candidate mapping or an explicit unmapped status. The release gate requires reviewed coverage of all role templates. It does not require an artificial exact match for every role.

## 10. Mapping record contract

| Field | Requirement |
| --- | --- |
| mapping_id | Stable project identifier |
| local_concept_id | LIONG role, task, or skill identifier |
| source_id and release | Source register entry and pinned version |
| source_concept_id | Actual identifier from the acquired package |
| relation_type | Exact, close, broader, narrower, related, or unmapped |
| mapping_rationale | Why the mapping is suitable and where it differs |
| review_status | Candidate, reviewed, accepted, or rejected |
| reviewer and reviewed_at | Identity and date of review |
| transformation_version | Version of normalization and mapping rules |

Similar labels do not prove identical scope. One LIONG role can map to several occupations. Several LIONG roles can share one occupational reference.

Keep candidate suggestions separate from accepted mappings. Any language-model suggestions require validation against acquired source records.

## 11. Acquisition and provenance contract

For each imported release, retain source URL, retrieval time, publisher, release identifier, language, file format, license reference, package checksum, and acquisition status.

For each normalized record, retain source concept ID, source release, transformation version, and material changes.

Recommended sequence:

1. Select the package and intended record subset.
2. Retain applicable license and attribution evidence.
3. Acquire the package through an allowed source route.
4. Calculate a checksum and validate package structure.
5. Preserve a raw immutable copy in the selected storage system.
6. Normalize records without overwriting source identifiers.
7. Review mappings and unresolved concepts.
8. Publish the reference bundle with attribution and change notes.

Store selection remains in LIONG-011 and LIONG-012. No proprietary storage service is assumed.

Runtime queries use a pinned reference bundle stored durably in R2. A local copy is a temporary cache. Refreshes create a new version. They must not silently change prior dossiers or decision snapshots.

## 12. Provenance and temporal treatment

Public reference definitions have OBSERVED provenance. Original employee and company records have SYNTHETIC provenance. Mapping and normalized outputs can be DERIVED when their inputs and rules are explicit.

A source assessment of an occupation does not become observed evidence of an employee skill.

The 2026 reference package is suitable for current design. Do not portray it as a package available to a panel in 2023. Historical enterprise scenarios must use applicable fictional policy versions and retain the date of their reference mappings.

If historically accurate public taxonomy versions are needed, acquire archived releases and record their publication dates. Otherwise label the retrospective mapping as a current interpretation.

## 13. Excluded and deferred sources

Exclude real employee lists, scraped professional profiles, real résumés, executive biography imports, and person-level public social-network data from the MVP.

These sources do not solve the calibration evidence gap and are unnecessary for a fictional population.

Defer labor-market aggregates and job-posting corpora until a workforce-planning or recruiting question requires them. Their geographic and licensing scope must be checked separately.

No public material supplies a statistically validated Nigerian promotion model for this project.

## 14. Source and mapping quality gates

| Gate | Passing condition |
| --- | --- |
| Access | Required bytes can be acquired through the permitted route |
| Reuse | Intended copying, adaptation, and distribution have documented permission |
| Attribution | Notices and source links are present |
| Identity | Imported concept IDs resolve within the pinned release |
| Structure | Required dictionaries and links pass validation |
| Coverage | All 36 roles have a reviewed mapping or explicit gap |
| Meaning | Role scope and source scope differences are recorded |
| Temporal context | Publication and interpretation dates are retained |
| Separation | Public vocabulary cannot be mistaken for employee evidence |
| Reproducibility | A pinned package and transformation reproduce the reference bundle |

The current research check does not satisfy package checksum, row-level mapping, or byte-acquisition gates. These remain implementation tasks.

## 15. Proposed decisions and open items

| ID | Proposed decision | Status |
| --- | --- | --- |
| DEC-013 | Use a bounded O*NET database import as the primary scaffold | Approved |
| DEC-014 | Keep ESCO conditional until selected dataset reuse terms are retained | Approved |
| DEC-015 | Treat OPITO as link-only context; use original fictional training records | Approved |
| DEC-016 | Use pinned reference bundles in R2 with reviewed mapping records | Approved |

OI-06 now has a partial proposed resolution: one verified database license, one conditional source, and one non-import reference. The full source gate remains open until package checks are complete.

The user approved version 0.1 and DEC-013 through DEC-016 on 2026-10-03. Package acquisition and mapping gates remain incomplete.

The separate software-component assessment remains OI-07. No API or graph implementation is approved by this data-source document.

## 16. Impact and next document

LIONG-004 is approved and remains the question authority. This source strategy does not change its required records.

LIONG-001 is updated to reflect the source-strategy draft. LIONG-REG-001 records the question-catalogue approval and new source proposals.

Sequence reference (approved design): LIONG-006 — People Ontology and Canonical Domain Model.

## 17. Research references

The following official pages were inspected on 2026-10-03. Links provide source attribution; they do not indicate that a dataset was downloaded.

| Reference | Official source |
| --- | --- |
| S1 | [O*NET database and formats](https://www.onetcenter.org/database.html) |
| S2 | [O*NET database license](https://www.onetcenter.org/license_db.html) |
| S3 | [ESCO downloads](https://esco.ec.europa.eu/en/use-esco/download) |
| S4 | [Use ESCO](https://esco.ec.europa.eu/en/use-esco) |
| S5 | [ESCO API access and software license](https://esco.ec.europa.eu/en/use-esco/use-esco-services-api) |
| S6 | [OPITO oil-and-gas catalogue](https://opito.com/standards-and-qualifications/industry-standards-library/oil-and-gas) |
| S7 | [OPITO sample competence-assessment product](https://opito.com/standards-and-qualifications/industry-standards-library/drilling-rigger-competence-assessment-standard) |
| S8 | [OPITO website terms](https://opito.com/website-terms) |

## 18. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | First source assessment, reuse gates, mapping and acquisition strategy | Approved on 2026-10-03 |
| 0.2 | Records source-strategy approval; package verification remains open | Maintenance revision |
| 0.3 | Aligns durable reference storage with DEC-047; dataset reuse gates unchanged | Maintenance revision |
| 0.4 | Adds authorized PSDO scope, link, and release checks | Targeted user-authorized revision |
| 0.5 | Adds authorized ontology shortlist, descriptions, links, and reuse boundaries | Targeted revision |

Maintenance record: 0.6 consolidates the approved package status and index links on 2026-10-03.
