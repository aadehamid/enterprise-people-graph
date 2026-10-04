# LIONG People Graph — Consolidated Reference Register

| Document control | Value |
| --- | --- |
| Document ID | LIONG-REF-001 |
| Version | 0.1 |
| Date | 2026-10-03 |
| Status | Consolidation draft for review |
| Evidence boundary | Links and assessments carried forward from approved documents; no new remote verification in this consolidation |

## 1. How to use this register

This register consolidates sources already cited in the design package. A URL is a discovery reference, not a pinned artifact or reuse clearance. Consult LIONG-005/006/007 for artifact terms and mappings, and LIONG-011 for component gates. Store selected immutable packages, license evidence, digests, imports, attribution and mapping versions in R2.

## 2. Ontologies and linked vocabularies

| Reference | Brief description | LIONG use | Approved assessment direction |
| --- | --- | --- | --- |
| [PSDO](https://www.ebi.ac.uk/ols4/ontologies/psdo) | Performance summary and feedback-display concepts | Describe performance communication and displays; retain core LIONG assessments and decisions | Selective supporting reuse; exact release/license closure open |
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

PSDO upstream and registry license declarations differ in the existing assessment. Resolve the selected immutable release and dependency terms before import or redistribution. SEPIO is a bounded scientific-evidence pilot; cross-domain suitability remains open. ODRL is deferred and does not enforce access. Public classifications do not define Nigerian employment policy or LIONG levels. Approved shortlist descriptions do not approve full imports or class equivalence.

## 3. Existing reference links by source document

The table below deduplicates exact URLs and retains every source-document association. It includes core standards, data/license references, candidate software, optional tools and model examples, MCP specifications, and writing/project references. Listing an optional component or model does not select it. Mutable branches, model cards and specification URLs require version-specific checks at implementation.

| ID | Existing reference link | Cited in |
| --- | --- | --- |
| REF-001 | [CTDL-ASN](https://credreg.net/ctdlasn/terms) | LIONG-005, LIONG-006, LIONG-013, LIONG-014 |
| REF-002 | [R2 S3 API compatibility](https://developers.cloudflare.com/r2/api/s3/api/) | LIONG-012 |
| REF-003 | [R2 authentication](https://developers.cloudflare.com/r2/api/tokens/) | LIONG-012 |
| REF-004 | [R2 bucket locks](https://developers.cloudflare.com/r2/buckets/bucket-locks/) | LIONG-012 |
| REF-005 | [Python license](https://docs.python.org/3/license.html) | LIONG-011 |
| REF-006 | [ESCO official FAQ](https://esco.ec.europa.eu/en/about-esco/faq?page=1) | LIONG-005 |
| REF-007 | [ESCO](https://esco.ec.europa.eu/en/use-esco) | LIONG-005, LIONG-006, LIONG-013, LIONG-014 |
| REF-008 | [ESCO downloads](https://esco.ec.europa.eu/en/use-esco/download) | LIONG-005 |
| REF-009 | [ESCO API access and software license](https://esco.ec.europa.eu/en/use-esco/use-esco-services-api) | LIONG-005 |
| REF-010 | [pySHACL](https://github.com/RDFLib/pySHACL) | LIONG-011 |
| REF-011 | [RDFLib](https://github.com/RDFLib/rdflib) | LIONG-011 |
| REF-012 | [reference repository README](https://github.com/aadehamid/pearland-petroleum-corporation/blob/main/README.md) | LIONG-001 |
| REF-013 | [PPC architecture and stack](https://github.com/aadehamid/pearland-petroleum-corporation/blob/main/docs/PPC-002_Enterprise_Architecture_and_Technology_Stack.md) | LIONG-012 |
| REF-014 | [OLMo code](https://github.com/allenai/OLMo) | LIONG-011 |
| REF-015 | [Apache Jena license](https://github.com/apache/jena/blob/main/LICENSE) | LIONG-011 |
| REF-016 | [Apache Superset](https://github.com/apache/superset) | LIONG-011 |
| REF-017 | [Dagster OSS](https://github.com/dagster-io/dagster) | LIONG-011 |
| REF-018 | [DuckDB source and license](https://github.com/duckdb/duckdb) | LIONG-011 |
| REF-019 | [FastAPI](https://github.com/fastapi/fastapi) | LIONG-011 |
| REF-020 | [Frappe HR license](https://github.com/frappe/hrms/blob/develop/license.txt) | LIONG-011 |
| REF-021 | [llama.cpp license](https://github.com/ggml-org/llama.cpp/blob/master/LICENSE) | LIONG-011 |
| REF-022 | [Transformers](https://github.com/huggingface/transformers) | LIONG-011 |
| REF-023 | [Faker license](https://github.com/joke2k/faker/blob/master/LICENSE.txt) | LIONG-011 |
| REF-024 | [Keycloak](https://github.com/keycloak/keycloak) | LIONG-011 |
| REF-025 | [LangGraph library](https://github.com/langchain-ai/langgraph) | LIONG-011 |
| REF-026 | [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) | LIONG-011 |
| REF-027 | [Moodle core](https://github.com/moodle/moodle) | LIONG-011 |
| REF-028 | [Neo4j core and edition licensing](https://github.com/neo4j/neo4j) | LIONG-011 |
| REF-029 | [NetworkX license](https://github.com/networkx/networkx/blob/main/LICENSE.txt) | LIONG-011 |
| REF-030 | [Open Policy Agent](https://github.com/open-policy-agent/opa) | LIONG-011 |
| REF-031 | [Jinja license](https://github.com/pallets/jinja/blob/main/LICENSE.txt) | LIONG-011 |
| REF-032 | [pgvector license](https://github.com/pgvector/pgvector/blob/master/LICENSE) | LIONG-011 |
| REF-033 | [Podman](https://github.com/podman-container-tools/podman) | LIONG-011 |
| REF-034 | [Pydantic license](https://github.com/pydantic/pydantic/blob/main/LICENSE) | LIONG-011 |
| REF-035 | [PyTorch](https://github.com/pytorch/pytorch) | LIONG-011 |
| REF-036 | [OLMo 2 7B Instruct model card](https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct) | LIONG-011 |
| REF-037 | [MCP authorization specification](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization) | LIONG-014 |
| REF-038 | [MCP tools specification](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) | LIONG-014 |
| REF-039 | [OBO Foundry registry](https://obofoundry.org/ontology/psdo.html) | LIONG-005 |
| REF-040 | [OPITO sample competence-assessment product](https://opito.com/standards-and-qualifications/industry-standards-library/drilling-rigger-competence-assessment-standard) | LIONG-005 |
| REF-041 | [OPITO oil-and-gas catalogue](https://opito.com/standards-and-qualifications/industry-standards-library/oil-and-gas) | LIONG-005 |
| REF-042 | [OPITO website terms](https://opito.com/website-terms) | LIONG-005 |
| REF-043 | [upstream OWL artifact](https://raw.githubusercontent.com/Display-Lab/psdo/master/psdo.owl) | LIONG-005 |
| REF-044 | [ASD Simplified Technical English](https://www.asd-ste100.org/index.html) | LIONG-001 |
| REF-045 | [CTDL](https://www.credreg.com/ctdl/handbook) | LIONG-005, LIONG-006 |
| REF-046 | [Performance Summary Display Ontology (PSDO)](https://www.ebi.ac.uk/ols4/ontologies/psdo) | LIONG-005, LIONG-006, LIONG-007, LIONG-011, LIONG-012, LIONG-013, LIONG-014 |
| REF-047 | [SEPIO](https://www.ebi.ac.uk/ols4/ontologies/sepio) | LIONG-005, LIONG-006, LIONG-013, LIONG-014 |
| REF-048 | [O*NET database and formats](https://www.onetcenter.org/database.html) | LIONG-005 |
| REF-049 | [O*NET database license](https://www.onetcenter.org/license_db.html) | LIONG-005 |
| REF-050 | [PostgreSQL license](https://www.postgresql.org/about/licence/) | LIONG-011 |
| REF-051 | [Web Annotation](https://www.w3.org/TR/annotation-model/) | LIONG-005, LIONG-006, LIONG-013, LIONG-014 |
| REF-052 | [ODRL](https://www.w3.org/TR/odrl-model/) | LIONG-005, LIONG-006 |
| REF-053 | [OWL-Time](https://www.w3.org/TR/owl-time/) | LIONG-005, LIONG-006, LIONG-013, LIONG-014 |
| REF-054 | [PROV-O](https://www.w3.org/TR/prov-o/) | LIONG-005, LIONG-006, LIONG-013, LIONG-014 |
| REF-055 | [S3 — SHACL](https://www.w3.org/TR/shacl/) | LIONG-006 |
| REF-056 | [SKOS](https://www.w3.org/TR/skos-reference/) | LIONG-005, LIONG-006, LIONG-013, LIONG-014 |
| REF-057 | [ORG](https://www.w3.org/TR/vocab-org/) | LIONG-005, LIONG-006, LIONG-013, LIONG-014 |

## 4. Artifact acceptance record to complete

For each actually used artifact record owner, publisher, exact version/commit, original URL, retrieval date, digest, R2 locator, license and attribution, imported dependencies, permitted redistribution, reviewed definitions/mappings, validation result, and release dependencies. For software include edition and enabled features. For hosted services/models include terms, provider revision, data handling and capabilities.

No selected artifact pin, compatibility result, or legal clearance is invented by this register. Existing document assessments remain the source of their claims; current provider terms must be checked when a selection is made.
