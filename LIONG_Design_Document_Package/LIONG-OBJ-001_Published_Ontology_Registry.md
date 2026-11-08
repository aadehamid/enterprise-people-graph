# LIONG People Graph

# Published Ontology Registry (Running List)

| Document control | Value |
| --- | --- |
| Document ID | LIONG-OBJ-001 |
| Version | 0.1 |
| Date | 2026-11-08 |
| Status | Running list draft |
| Related register | [LIONG-REF-001](LIONG-REF-001_Consolidated_Reference_Register.md) owns assessments, links, and reuse boundaries |

## 1. Purpose

This is the running list of published ontologies, vocabularies, and standards the project touches. It answers one question at a glance: what exists, and where does it stand in this project?

Each entry records what the artifact is, which domain concepts it covers, its license state, and its current use in the project. [LIONG-REF-001](LIONG-REF-001_Consolidated_Reference_Register.md) remains the assessment authority for links, licenses, and reuse boundaries. This list changes more often than that register; a status change here does not approve anything.

## 2. Status values

| Status | Meaning |
| --- | --- |
| In scope | The package's approved design or policy includes this artifact's concepts |
| Assess | A candidate under active assessment; a gate must close before use |
| Pattern source | Read for modeling patterns; no artifact import planned |
| Pilot | Bounded use in one defined scenario; general adoption open |
| Later scope | Deferred to a later release |
| Discovery aid | Search ground for finding other artifacts; never used as model content |
| Reading | Evidence or background for design rationale |

## 3. The running list

| Artifact | Maintainer | Format and scale | Domain coverage in this project | License state | Status | Where used |
| --- | --- | --- | --- | --- | --- | --- |
| SKOS | W3C | RDF vocabulary; the standard for controlled terms | Skills, themes, taxonomies; mapping relations for crosswalks | Open standard (W3C) | In scope | LIONG-005/006/007 |
| PROV-O | W3C | RDF ontology; entities, activities, agents | Provenance of every assessment, decision, and record version | Open standard (W3C) | In scope | LIONG-006/007/013 |
| OWL-Time | W3C | RDF vocabulary; instants, intervals, durations | Review periods, assignment validity, evidence availability times | Open standard (W3C) | In scope | LIONG-006/007 |
| SHACL | W3C | Constraint shapes; closed-world validation | Structural, temporal, and policy validation of the model-as-code | Open standard (W3C) | In scope | LIONG-007/011/017 |
| ORG | W3C | RDF vocabulary; organizations, units, posts, membership | Org units, positions, reporting lines | Open standard (W3C) | Assess | LIONG-006 §9.2 |
| PSDO | EDM-era community; EBI OLS | OWL ontology; performance summary and feedback display | Ratings summaries, feedback displays | CC BY upstream mismatch; release gate open | Assess (selective reuse authorized, DEC-055) | LIONG-005/006/013/014 |
| CTDL-ASN | Credential Engine | ASN competency/rubric vocabulary | Target-level criteria and rubric expectations | Publisher terms; import gate open | Assess | LIONG-005/006/013/014 |
| CTDL | Credential Engine | Credential schema family | Credentials, assessment offerings, learning pathways | Publisher terms | Later scope | LIONG-005 |
| Web Annotation | W3C | Annotation model | Link reviewer comments and assessments to evidence passages | Open standard (W3C) | Assess | LIONG-006 §9.2 |
| SEPIO | Scientific community (OBO/OLS) | OWL claims-and-evidence ontology | Claim-to-evidence links in one promotion dossier | Terms per publisher | Pilot (DEC-056) | LIONG-006/013 |
| ESCO | European Commission | SKOS-based; ~3,000 occupations, ~13,900 skills, 28 languages | Skills, occupations, role-requirement mapping | Conditional on selected-dataset reuse evidence (DEC-014) | Assess | LIONG-005/006 |
| O*NET Content Model + SOC | US Department of Labor | Database plus linked vocabularies | Role-competency scaffold for the skills pilot | Open US Government data; selected release gate open | In scope (bounded scaffold, DEC-013) | LIONG-005/006 |
| NICE Framework | CISA/NIST | Work-role, task, knowledge, and skill reference | Cybersecurity work roles for relevant digital-role templates | US Government publication; release gate open | Assess | LIONG-005 |
| DOL skills taxonomy | US Department of Labor | Plain-language dataset taxonomy | Source-discovery example; not employee skills content | US Government publication | Assess | LIONG-005 |
| ODRL | W3C | Rights-expression vocabulary | Evidence-use policy expression | Open standard (W3C) | Later scope (DEC-056) | Deferred |
| RDF 1.1 RDF, RDFS, Turtle | W3C | Data model, schema layer, serialization | The representation layer the graph and exports use | Open standards (W3C) | In scope as base standards | LIONG-006/007 |
| RDF 1.2 / RDF-star | W3C | Triple terms: statements about statements | Alternative to the record-version pattern for rating and decision provenance | Candidate Recommendation draft | Assess; no adoption implied | Assessment only (LIONG-006/007) |
| JSON-LD 1.1 | W3C | RDF serialized as JSON | API and export serialization option | Open standard (W3C) | Assess for MVP | Serialization candidate (LIONG-007/011) |
| SKOS-Thes | DCMI | ISO 25964 thesaurus features as a SKOS extension | Thesaurus features if the skills pilot adopts a thesaurus | Spec per DCMI | Assess | LIONG-REF-001 §2 |
| DCMI Terms | DCMI | Dublin Core element set as RDF | Field and date conventions for record descriptions | Open standard (DCMI) | Assess (small subset) | LIONG-007 conventions |
| schema.org | Google, Microsoft, Yahoo, Yandex consortium | Web structured-data vocabulary; ~800 types, ~1,500 properties | Person, EmployeeRole, and org links at the web margin | Publisher terms to verify | Assess | Margin use; LRMI builds on it |
| ECO | Evidence Ontology community (OBO) | OWL; evidence types + assertion methods | Typical evidence for assessment claims; human-versus-machine assessor | CC0-1.0 confirmed 2026-11-08 | Assess | Candidate; not yet in LIONG-006 |
| CCO (Agent Ontology) | Common Core Ontologies community | BFO-grounded OWL suite | Person, organization, and role modeling patterns | License and repository location to verify | Pattern source | Pattern reading only |
| Core-O | FOIS 2024 authors (Calhau et al.) | OntoUML reference model + OWL artifact | Competency structure for the skills layer | License to verify; stability open | Assess | Candidate base for the competency layer |
| FOAF | W3C-adjacent community (xmlns.com) | RDF vocabulary; persons and agents | Person identity at the graph margin | Open; terms per spec | Assess | Candidate |
| LRMI | DCMI | schema.org extension, small | Courses and learning resources | Publisher terms to verify | Assess | Candidate for the learning area |
| ResumeRDF | Uldis Bojars / DERI Galway | RDF/XML spec, small | Employment, education, and skill terms from a CV | Stated CC license; variant unverified | Pattern source | Reference only; stale (2002-2006) |
| SSSOM | mapping-commons community | Tabular mapping-exchange standard with provenance | Reviewed crosswalks between LIONG terms and public vocabularies | BSD-3 (spec), MIT (toolkit); observed 2026-11-08 | Assess | Mapping-format candidate (OI-13) |
| BARTOC | University of Basel | Registry of 5,000+ KOS | Vocabulary discovery before building terms | Registry only | Discovery aid | LIONG-005 discovery |
| Linked Open Vocabularies | Open community | Registry of RDF vocabularies | Reuse check before defining new terms | Registry only | Discovery aid | LIONG-005 discovery |
| Linked Open Data Cloud | Open community | Dataset registry and diagram | Locate linked datasets and endpoints | Registry only | Discovery aid | LIONG-005 discovery |
| ISO 25964-1/2; ANSI/NISO Z39.19 | ISO; NISO | Vocabulary-construction standards | Taxonomy construction and mapping method | Purchased standards; cited as method | Pattern source | Guideline work; OI-13 |

## 4. Coverage map to project concept areas

| Concept area | Covered by | Gap |
| --- | --- | --- |
| Person and employment records | FOAF, CCO patterns, ORG, schema.org | Employment-record lifecycle terms need LIONG-006 modeling |
| Organizational structure | ORG (candidate base), CCO patterns | None beyond ORG assessment |
| Skills and competency | ESCO, O*NET, CTDL-ASN, Core-O, SKOS | Inference labeling is modeled in LIONG-006 |
| Performance and decisions | PSDO (displays only), SEPIO (pilot) | Promotion cases, talent-review placement, check-ins, calibration, follow-up action lifecycles, and documented goal progress have no published standard; LIONG-006 owns these concepts, including GoalProgress and follow-up references |
| Learning | CTDL, LRMI, schema.org | Course-catalog depth is later scope |
| Evidence and provenance | PROV-O, ECO, SEPIO, Web Annotation | Selection among ECO/SEPIO/Web Annotation roles remains open |

## 5. Maintenance

When a search pass finds a new artifact:

1. Record it here with a status from section 2 and an honest license state.
2. If it is a reusable vocabulary or standard, add it to [LIONG-REF-001](LIONG-REF-001_Consolidated_Reference_Register.md) section 2, keeping both repository copies of that register in sync.
3. If it changes how a concept area is covered, update section 4.
4. Do not mark anything "In scope" here unless the decision register authorizes that use.

## 6. Change history

| Version | Change |
| --- | --- |
| 0.1 | Initial running list compiled from the register, the 2026-11-08 web-search pass, and the Ontology Pipeline catalog additions |
