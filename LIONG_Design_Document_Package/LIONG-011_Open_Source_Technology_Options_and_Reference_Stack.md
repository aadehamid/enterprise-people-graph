# LIONG People Graph

# Open Source Technology Options and Reference Stack

| Document control | Value |
| --- | --- |
| Document ID | LIONG-011 |
| Version | 0.6 |
| Date | 2026-10-03 |
| Status | Version 0.2 approved; maintenance revision |
| Approved dependencies | LIONG-001 through LIONG-010, each approved at version 0.1 |
| Research scope | Official repositories, license files, and model cards inspected on 2026-10-03 |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose and recommendation

Use Cloudflare R2 as the durable data store for the first executable simulation. Use a small set of processing and serving components. Add complete source applications and extra services only when they satisfy a defined requirement.

The user approved version 0.2 and DEC-041 through DEC-046 on 2026-10-03. Deployment checks remain open.

Every used component must be open source except Cloudflare services, Databricks, and model choices. These exceptions are confirmed user requirements. Model choices include generative and embedding models, whether locally served or accessed through a hosted API. Other runtime libraries remain subject to the component rule. A supplier's proprietary products do not disqualify its separately licensed open-source component.

This document recommends component boundaries. It does not approve uninspected plugins, managed services, container contents, or model backends.

Repository-level licenses were checked for the listed components. Exact release pins, dependency inventories, compatibility tests, and image checks remain release gates. No complete deployed stack has been certified by this research review.

## 2. Selection states

| State | Meaning |
| --- | --- |
| Recommended | Preferred component scope; Reference scope accepted; requires release checks |
| Optional | Add only when a requirement justifies it |
| Conditional | Capability, artifact, or dependency gate remains unresolved |
| Deferred | Not needed for the first stage |
| Excluded | Outside the open-source execution path or not assessed for use |

Approval of this document approves the reference choices and gates. It does not extend the named exceptions to unrelated proprietary components or waive unresolved capability and artifact checks.

## 3. Minimum execution profiles

### 3.1 Data and evidence foundation

Use CPython, PostgreSQL, DuckDB, RDFLib, pySHACL, NetworkX, Pydantic, Faker, and Jinja for generation, storage, validation, and evidence construction.

Store all data in Cloudflare R2, including public reference packages, synthetic data, source projections, canonical releases, corpus artifacts, and evaluation packages. Local files are temporary working copies. Publish validated outputs to R2 before a release is complete.

### 3.2 Graph and workflow demonstration

Add Neo4j Community core for property-graph queries. Use a custom FastAPI application with Jinja-rendered interfaces for dossiers and workflow records.

Keep RDF authoring and validation in libraries initially. A persistent RDF server is optional until SPARQL serving or shared semantic access requires it.

### 3.3 Authorized conversational demonstration

Add Keycloak, application authorization, governed tools, and a selected local or hosted model. MCP SDK and LangGraph are optional adapters, not policy authorities.

A template-only question interface is useful for early fixtures but does not complete the conversational MVP. That MVP passes only after a selected model and its runtime satisfy applicable terms, answer quality, access, and latency checks.

## 4. Recommended foundation components

| Component and scope | License observed | Intended use | Boundary and release check |
| --- | --- | --- | --- |
| CPython interpreter and standard library | PSF license family | Generator and service runtime | Pin interpreter; inspect bundled third-party notices [S1] |
| PostgreSQL server | PostgreSQL License | Serving facts, workflow transactions, identity crosswalks, traces; durable releases and exports in R2 | Open-source server scope; publish durable data to R2 [S2] |
| DuckDB core | MIT | Batch reconciliation and analytical fixtures | Inspect each added extension separately [S3] |
| RDFLib library | BSD-3-Clause | RDF artifacts and reference graph handling | Pin parser/store dependencies [S4] |
| pySHACL library | Apache-2.0 | SHACL validation | Separate application temporal rules [S5] |
| NetworkX library | BSD-3-Clause | Hierarchy cycle checks and fixture graph analysis | Not a multiuser operational database [S6] |
| Pydantic library | MIT | Typed payload contracts | Hosted services not required; inspect compiled dependencies [S7] |
| Faker library | MIT | Original synthetic identity attributes | Domain constraints remain project logic [S8] |
| Jinja library | BSD-3-Clause | Evidence templates and rendered UI | Templates do not grant access or invent facts [S9] |
| FastAPI framework | MIT | Governed APIs and workflow endpoints | ASGI server, auth libraries, and transitive packages require pins [S10] |
| Neo4j Community core | GPLv3 | Operational property graph and Cypher traversal | Exclude Enterprise components and unverified add-ons [S11] |
| Keycloak server | Apache-2.0 | Identity and token issuance | Application still enforces evidence scope [S12] |
| Podman engine | Apache-2.0 | Optional Linux container execution | Review OCI images and dependencies separately [S13] |

Version fields are intentionally not populated with “latest.” Select exact stable versions after compatibility testing. Do not infer that a license checked on a moving branch proves the contents of an arbitrary release image.

No deployment may pass until required version fields, applicable license or exception evidence, and capability checks are complete.

## 5. Why this split

R2 holds durable canonical releases and all other data artifacts. PostgreSQL manages transactional serving records and publishes versioned changes and snapshots to R2. Neo4j holds a derived relationship projection. DuckDB runs bounded batch analyses. Databricks is an allowed processing option; its edition and R2 integration remain to be selected and tested.

RDFLib and pySHACL preserve semantic artifacts without requiring a second graph service at the first stage. NetworkX handles offline graph checks.

The application exposes predefined analytical and graph tools. Users do not receive unrestricted SQL or Cypher execution.

This is a design recommendation based on the approved workload. No measured performance comparison has been completed.

## 6. Source applications to consider

| Source responsibility | Application candidate | License evidence | Recommendation |
| --- | --- | --- | --- |
| HR and employee records | Frappe HR application | GPLv3 license text in official repository [S14] | Optional application pilot after contract emulators |
| Learning records | Moodle core | GPLv3 in official repository [S15] | Optional pilot for learning and assessment events |
| Work and project records | Custom source emulator | Project license not yet assigned | Required initial route; choose an open-source license before release |
| Performance and calibration | Custom workflow service | Project license not yet assigned | Explicit case states, evidence snapshots, and authority |
| Documents | Versioned templates and files | Original project artifacts | Required initial corpus route |

Frappe HR does not by itself establish that the complete LIONG panel workflow exists. Moodle completion does not establish person proficiency. Adapters must preserve the approved semantics.

Check each application's framework, database, cache, worker, frontend, and plugin dependencies. A root GPL license does not approve every optional dependency.

Do not install an unspecified current Redis distribution or replace it with another cache without checking license and application compatibility. A cache can be a hidden blocking dependency.

Emulators must expose source contracts and realistic record differences. They must not expose generator truth to integration.

## 7. Optional components and alternatives

| Component | License observed | Capability | Add only when |
| --- | --- | --- | --- |
| Apache Jena/Fuseki | Apache-2.0 [S16] | Persistent RDF and SPARQL service | Shared semantic queries require a server |
| pgvector extension | PostgreSQL-style license [S17] | Vector search within PostgreSQL | A selected embedding model improves tested retrieval |
| Dagster OSS core | Apache-2.0 [S18] | Asset orchestration and replay visibility | Script-based batches become difficult to operate |
| Apache Superset | Apache-2.0 [S19] | Rating distributions and analytical dashboards | Governed BI is needed beyond dossier interfaces |
| Open Policy Agent core | Apache-2.0 [S20] | Explicit policy decisions | External policy evaluation improves consistency |
| MCP Python SDK | MIT [S21] | Tool protocol adapter | Agent interoperability requires MCP |
| LangGraph OSS library | MIT [S22] | Stateful conversational orchestration | Tool workflow complexity warrants it |
| llama.cpp core | MIT [S23] | Local inference alternative | Exact model conversion and CPU compatibility pass |

Do not deploy all optional components by default. Each service adds configuration, access boundaries, backup needs, and maintenance.

A PostgreSQL-only relationship prototype is an alternative to Neo4j. It still must execute the approved traversal fixtures. Jena/Fuseki can be the operational graph alternative when RDF query requirements dominate. Do not run both graph servers without an explicit responsibility split.

### 7.1 PSDO vocabulary artifact

[Performance Summary Display Ontology (PSDO)](https://www.ebi.ac.uk/ols4/ontologies/psdo) is an authorized supporting vocabulary for performance summaries and feedback displays (DEC-055). Retain the LIONG core model for employment, assessments, evidence, nominations, authority, and decisions. Selective reuse requires reviewed definitions and pinned mappings. Full import and class equivalence are not approved.

PSDO is an ontology artifact, not a graph engine or source application. Assess it through the existing RDFLib/pySHACL path; no new runtime is selected. LIONG-005 owns the upstream CC BY 4.0 versus registry CC BY 3.0 mismatch. Release pins, dependency licenses, attribution, and mapping tests remain open.

### 7.2 Additional vocabulary assessment

DEC-056 authorizes the linked ontology shortlist in LIONG-005 §8.2. Assess ORG, CTDL-ASN, Web Annotation, and a small OWL-Time subset through existing semantic libraries. Pilot SEPIO against one dossier. Retain PROV-O and SKOS alignment; continue ESCO package checks. CTDL is later scope and ODRL is deferred.

These are vocabulary artifacts, not new runtime services. Their intended responsibilities and links are summarized in LIONG-006 §9.2. Exact artifact terms and imports remain gates; no new software component is selected.

## 8. Model component assessment

Model choices are exempt from the open-source requirement. OLMo remains an optional candidate, not a mandatory choice. Compare local and hosted models on answer quality, tool use, cost, latency, data handling, and reproducibility. Record provider terms or model license, revision, configuration, and known limitations. Do not describe an exempt model as open source without evidence.

Propose allenai/OLMo-2-1124-7B-Instruct as the first model candidate. Its official model card identifies an Apache-2.0 license and references training and inference material. The associated OLMo code repository is Apache-2.0. [S24, S25]

This is a candidate, not a claim that it satisfies all People Graph tasks. Validate evidence-grounded answers, structured tool use, uncertainty, and malicious retrieved instructions.

Pin a model revision, tokenizer files, configuration, chat template, weight checksums, and inference code. The model name alone is insufficient: the card describes replacement of earlier artifacts under the same name.

Transformers and PyTorch are candidate runtime dependencies. Their official repositories provide source and license material, but the selected binary distribution and backend still require review. [S26, S27]

A CPU build path remains an option. No CPU-only constraint applies to hosted model services covered by the model exception. Independently selected acceleration dependencies still require a component assessment. Hardware sizing and acceptable latency remain open.

For llama.cpp, verify model-format support and conversion. Do not assume a third-party quantization has the same verified provenance as the original weights. Prefer a reproducible conversion from pinned originals.

Open-source software licenses and open AI system completeness are separate assessments. Retain available code and training documentation. Do not certify complete training-data rights or an open-AI definition from a model-card label alone.

No embedding model is selected yet. Start with PostgreSQL lexical search and structured evidence links. Semantic similarity is optional until its artifacts pass applicable terms, provenance, quality, and access checks; model openness is not a blocking gate.

## 9. Access and component boundaries

Keycloak authenticates users. Application policy resolves assignment, HR scope, and panel membership. Database row security can provide defense in depth.

Neo4j Community must not be assumed to provide every Enterprise security feature. Protect it behind scoped service tools. Do not expose raw graph sessions to end users.

OPA, if adopted, evaluates explicit rules. It does not grant database permissions by itself.

Superset, if added, uses governed datasets and scoped credentials. BI access must not bypass case-level evidence restrictions.

The agent calls approved tools. It does not receive database credentials or unrestricted execution functions.

## 10. Storage and operating environment

Cloudflare R2 is the confirmed durable store for all data. Reuse the PPC pattern after checking its current configuration. The exact PPC page could not be retrieved during this revision; no configuration is claimed as verified or copied.

| Data area | R2 content | Permitted readers |
| --- | --- | --- |
| Reference | Pinned public packages, licenses, mappings | Acquisition and processing services |
| Generator truth | Complete synthetic world and generation configuration | Generator and evaluator only |
| Source | Source extracts, events, immutable corrections | Integration services |
| Canonical | Validated records and release manifests | Authorized processing and serving services |
| Evidence | Documents, versions, chunks, citations | Scoped retrieval service |
| Serving exports | Database snapshots, graph exports, analytical products | Scoped loaders and recovery services |
| Evaluation | Answer keys and scoring fixtures | Evaluator only |
| Operations | Audit exports, run records, reconciliation results | Authorized operators |

These areas are proposed physical boundaries. Use separate buckets and credentials for generator truth and evaluation packages. A path prefix alone does not enforce access.

Use immutable object keys for each release and record version. Record checksums, schema versions, source checkpoints, and generation configuration in manifests. Store a new release rather than overwrite evidence used by an earlier decision.

PostgreSQL and Neo4j need serving copies for their workloads. R2 does not replace transactional or graph query engines. Every persistent data class must have an R2 representation. Define transaction export timing, recovery objectives, and publication checkpoints in LIONG-012. Do not claim zero data loss before those rules are implemented and tested.

Databricks is permitted for generation, transformation, and analytics. Its use is not mandatory. Select the edition and test R2 access before promising a connector or direct table integration. Durable inputs and outputs remain in R2.

Cloudflare and Databricks are explicit service exceptions. Other selected software remains subject to exact component licensing checks. Review container images and dependencies separately.

## 11. Components outside the selected execution path

Exclude unrelated proprietary managed databases, proprietary graph editions, paid-only visualization features, closed-source agent platforms, and unverified plugins. Cloudflare, Databricks, and model choices are permitted exceptions.

Do not classify source-available code as open source solely because it can be inspected. An approved open-source license is required for each non-exempt component. Record the named exception and applicable terms for exempt selections.

GitHub is a reference and optional collaboration service, not a mandatory runtime dependency. Git repositories and local release artifacts must remain usable without GitHub-specific automation.

No claim is made that all optional vendor tools are proprietary. They remain excluded from the proposed path unless assessed and justified.

## 12. Version-specific component register

Before implementation release, each selected component requires:

| Field | Required evidence |
| --- | --- |
| Component and edition | Exact scope, including used features |
| Version and source revision | Release tag and immutable source reference |
| Artifact digest | Binary, package, image, or model digest |
| License | Applicable text for that revision |
| Dependencies | Direct and transitive inventory |
| Feature mapping | Requirement satisfied and edition availability |
| Exclusions | Add-ons and services not permitted |
| Notices | Attribution, source, and distribution obligations |
| Compatibility | Integration and fixture results |
| Gate status | Passed, blocked, or conditional |

A software bill of materials supports review but does not establish compliance by itself. Review unresolved and conflicting license entries.

Copyleft licenses are allowed. The project must honor their applicable obligations. License compatibility for linked or redistributed artifacts requires separate assessment.

Assign an open-source license to original implementation code before distributing it. Document licenses and public-data licenses remain separate.

## 13. Capability gates

| Capability | Passing condition |
| --- | --- |
| Source emulation | Reproduces approved contracts without truth shortcuts |
| Graph traversal | Answers required multi-hop and historical fixtures |
| Canonical persistence | Preserves immutable versions and snapshots |
| Validation | Executes structural, temporal, policy, and reconciliation checks |
| Authorization | Blocks unauthorized records before model context assembly |
| Corpus search | Returns useful passages with parent versions and classification |
| Conversation | Grounded answers and valid tool behavior on approved scenarios |
| License boundary | Non-exempt components pass open-source checks; exempt selections have recorded terms and boundaries |
| Replay and recovery | Reconstructs pinned release and preserves prior decisions |

No numerical benchmark or hardware sizing is claimed. The 800-employee population is small, but evidence history and corpus volume still affect workload.

## 14. Approved decisions

| ID | Proposal | Status |
| --- | --- | --- |
| DEC-041 | Minimal self-hostable Python, PostgreSQL, DuckDB, semantic-library, and template foundation | Approved |
| DEC-042 | Neo4j Community core as the initial property-graph candidate; no mandatory add-ons | Approved |
| DEC-043 | Contract emulators first; Frappe HR and Moodle as optional pilots | Approved |
| DEC-044 | Scoped FastAPI tools with Keycloak identity; optional OPA, MCP, and LangGraph | Approved |
| DEC-045 | Model selection across local and hosted candidates; OLMo is optional | Approved |
| DEC-046 | Exact pins, dependency evidence, and capability gates before deployment | Approved |
| DEC-047 | Cloudflare R2 holds all durable data, including synthetic data | Confirmed user requirement |
| DEC-048 | Cloudflare, Databricks, and model choices are exceptions to the open-source rule | Confirmed user requirement |

OI-07 is partially addressed. Component scopes have recommendations; release pins and complete dependency checks remain open. The user approval of a reference stack does not mark those gates passed.

## 15. Impact and next document

LIONG-010 and DEC-036 through DEC-040 are approved. This stack supports its template-first corpus and classified evidence retrieval.

REQ-05 is revised by the user. Earlier blanket open-source statements are superseded by DEC-048. Earlier local bundle statements now describe working copies; durable bundles reside in R2. The charter and affected storage and model passages in LIONG-005, LIONG-007, LIONG-008, LIONG-009, and LIONG-010 are aligned. LIONG-006 required no conceptual change. Their evidence, temporal, and authorization responsibilities remain unchanged.

Earlier documents retain their approved responsibilities. This draft introduces product candidates but does not silently replace their contracts.

Sequence reference (approved design): LIONG-012 — End-to-End Solution Architecture.

## 16. Official research references

The original review inspected the sources below on 2026-10-03. Moving repository branches require later immutable pins.

| ID | Source |
| --- | --- |
| S1 | [Python license](https://docs.python.org/3/license.html) |
| S2 | [PostgreSQL license](https://www.postgresql.org/about/licence/) |
| S3 | [DuckDB source and license](https://github.com/duckdb/duckdb) |
| S4 | [RDFLib](https://github.com/RDFLib/rdflib) |
| S5 | [pySHACL](https://github.com/RDFLib/pySHACL) |
| S6 | [NetworkX license](https://github.com/networkx/networkx/blob/main/LICENSE.txt) |
| S7 | [Pydantic license](https://github.com/pydantic/pydantic/blob/main/LICENSE) |
| S8 | [Faker license](https://github.com/joke2k/faker/blob/master/LICENSE.txt) |
| S9 | [Jinja license](https://github.com/pallets/jinja/blob/main/LICENSE.txt) |
| S10 | [FastAPI](https://github.com/fastapi/fastapi) |
| S11 | [Neo4j core and edition licensing](https://github.com/neo4j/neo4j) |
| S12 | [Keycloak](https://github.com/keycloak/keycloak) |
| S13 | [Podman](https://github.com/podman-container-tools/podman) |
| S14 | [Frappe HR license](https://github.com/frappe/hrms/blob/develop/license.txt) |
| S15 | [Moodle core](https://github.com/moodle/moodle) |
| S16 | [Apache Jena license](https://github.com/apache/jena/blob/main/LICENSE) |
| S17 | [pgvector license](https://github.com/pgvector/pgvector/blob/master/LICENSE) |
| S18 | [Dagster OSS](https://github.com/dagster-io/dagster) |
| S19 | [Apache Superset](https://github.com/apache/superset) |
| S20 | [Open Policy Agent](https://github.com/open-policy-agent/opa) |
| S21 | [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) |
| S22 | [LangGraph library](https://github.com/langchain-ai/langgraph) |
| S23 | [llama.cpp license](https://github.com/ggml-org/llama.cpp/blob/master/LICENSE) |
| S24 | [OLMo 2 7B Instruct model card](https://huggingface.co/allenai/OLMo-2-1124-7B-Instruct) |
| S25 | [OLMo code](https://github.com/allenai/OLMo) |
| S26 | [Transformers](https://github.com/huggingface/transformers) |
| S27 | [PyTorch](https://github.com/pytorch/pytorch) |

## 17. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | First component assessment, minimal stack, alternatives, and release gates | Pending review |
| 0.2 | Records confirmed R2 storage and Cloudflare, Databricks, and model exceptions; revises storage and model boundaries | Stack remains pending review |
| 0.3 | Records approval of v0.2 and DEC-041–046; release pins and checks remain open | Maintenance revision |
| 0.4 | Adds authorized PSDO scope, link, and release checks | Targeted user-authorized revision |
| 0.5 | Adds authorized ontology shortlist, descriptions, links, and reuse boundaries | Targeted revision |

Maintenance record: 0.6 consolidates the approved package status and index links on 2026-10-03.
