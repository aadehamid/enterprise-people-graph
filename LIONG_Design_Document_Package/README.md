# LIONG People Graph — Document Index

Version: 0.1. Date: 2026-10-03. Status: consolidation draft for review.

The 17 design documents are approved at the baselines identified in the decision register. Current file versions include maintenance updates. No application has been built or deployed and no acceptance benchmark has been executed.

## 1. Approved boundaries

The MVP covers promotion calibration, rating calibration, and conversational people insights for a fictional oil-and-gas company. All identities and personnel records are synthetic. Later talent, learning and recruiting scope requires its own requirements.

All durable data, including synthetic data and private evaluation truth, resides in Cloudflare R2. PostgreSQL and Neo4j are serving copies. Cloudflare, Databricks and model choices are exempt from the open-source criterion. Other used components require exact license and dependency checks. Databricks remains optional.

Conversational tools are read-only. Human workflow forms enforce current authority. Ratings are ordinal; do not average them. Course completion is separate from competence. Evidence provenance is separate from truth. A historical decision is not an objective merit label.

## 2. Reading order and current versions

| Document | Current version | Purpose | Design approval |
| --- | --- | --- | --- |
| [LIONG-001 — Problem Statement and Simulation Charter](LIONG-001_Problem_Statement_and_Simulation_Charter.md) | 0.18 | Problem, scope and simulation boundary | Approved; see register |
| [LIONG-002 — Enterprise and Workforce Profile](LIONG-002_Enterprise_and_Workforce_Profile.md) | 0.3 | Fictional organization, roles and workforce | Approved; see register |
| [LIONG-003 — Use Cases and MVP Requirements](LIONG-003_Use_Cases_and_MVP_Requirements.md) | 0.3 | MVP workflows and policy requirements | Approved; see register |
| [LIONG-004 — Competency Questions and Data Requirements](LIONG-004_Competency_Questions_and_Data_Requirements.md) | 0.3 | Business questions and required data | Approved; see register |
| [LIONG-005 — Public Data and Reference Source Strategy](LIONG-005_Public_Data_and_Reference_Source_Strategy.md) | 0.6 | Public sources, reuse terms and ontology shortlist | Approved; see register |
| [LIONG-006 — People Ontology and Canonical Domain Model](LIONG-006_People_Ontology_and_Canonical_Domain_Model.md) | 0.5 | Canonical people, evidence and decision concepts | Approved; see register |
| [LIONG-007 — Data Modeling and Model-as-Code Standard](LIONG-007_Data_Modeling_and_Model_As_Code_Standard.md) | 0.6 | Schemas, mappings, constraints and model-as-code | Approved; see register |
| [LIONG-008 — Synthetic Data Generation Strategy](LIONG-008_Synthetic_Data_Generation_Strategy.md) | 0.4 | Connected synthetic histories and source projections | Approved; see register |
| [LIONG-009 — Source Systems and Integration Architecture](LIONG-009_Source_Systems_and_Integration_Architecture.md) | 0.4 | Source contracts, integration, temporal authority and replay | Approved; see register |
| [LIONG-010 — Enterprise Evidence Corpus Strategy](LIONG-010_Enterprise_Evidence_Corpus_Strategy.md) | 0.4 | Versioned author-visible evidence and passage retrieval | Approved; see register |
| [LIONG-011 — Open Source Technology Options and Reference Stack](LIONG-011_Open_Source_Technology_Options_and_Reference_Stack.md) | 0.6 | Reference stack, exemptions and component gates | Approved; see register |
| [LIONG-012 — End-to-End Solution Architecture](LIONG-012_End_To_End_Solution_Architecture.md) | 0.5 | R2 boundaries, serving projections and end-to-end flow | Approved; see register |
| [LIONG-013 — Calibration Analytics and Decision Provenance](LIONG-013_Calibration_Analytics_and_Decision_Provenance.md) | 0.3 | Exact calibration measures and decision provenance | Approved; see register |
| [LIONG-014 — Agent, MCP, and User Experience Design](LIONG-014_Agent_MCP_and_User_Experience_Design.md) | 0.3 | Read tools, MCP boundary, human forms and UI | Approved; see register |
| [LIONG-015 — Governance, Access, Quality, and Observability](LIONG-015_Governance_Access_Quality_and_Observability.md) | 0.3 | Access, disclosure, retention, quality and monitoring | Approved; see register |
| [LIONG-016 — Scenarios, Evaluation, and Acceptance Plan](LIONG-016_Scenarios_Evaluation_and_Acceptance_Plan.md) | 0.3 | Scenario fixtures, scoring and acceptance objectives | Approved; see register |
| [LIONG-017 — Implementation Roadmap and Build Runbook](LIONG-017_Implementation_Roadmap_and_Build_Runbook.md) | 0.2 | Dependency milestones, activation, recovery and handover | Approved; see register |

## 3. Supporting registers

- [Assumptions, decisions and open questions](LIONG-REG-001_Assumptions_Decisions_and_Open_Questions.md): authoritative approval record through APR-018 and decisions through DEC-083.
- [Consolidated reference register](LIONG-REF-001_Consolidated_Reference_Register.md): ontology descriptions, project uses, and existing source links.

The decision register controls approval status. Maintenance file numbers do not indicate a new policy approval. Earlier proposed wording is part of design history; use the recorded decisions and later approved rules when status differs.

## 4. Implementation entry gates

Before building an accepted release, pin used software/model versions and terms, close selected ontology licenses/imports and mappings, assign field/case grants and retention configuration, reconcile workforce allocation, define physical projections and activation concurrency, configure scoped credentials and recovery dependencies, and execute LIONG-016.

The PSDO artifact license discrepancy remains open. The ontology shortlist approves selective assessment, not full imports or automatic equivalence. No existing reference grants permission to expose employee records.

## 5. Next work

After this consolidation is reviewed, implementation starts at LIONG-017 milestone M0. The implementer records each closed gate and actual test result. Optional tooling, production personnel data, and new talent features require separately authorized scope.

The numerical objectives in LIONG-016 are approved simulation targets. They are not observed performance or security guarantees. The project can establish controlled behavior for its fixtures; it cannot establish real workforce fairness or business return.
