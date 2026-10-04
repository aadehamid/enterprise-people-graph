# LIONG People Graph

# Problem Statement and Simulation Charter

| Document control | Value |
| --- | --- |
| Document ID | LIONG-001 |
| Version | 0.18 |
| Date | 2026-10-02 |
| Status | Maintenance revision; version 0.1 approved |
| Enterprise | Lagos Integrated Oil and Gas Company (LIONG) |
| Initial scope | Promotion calibration, rating calibration, and conversational people insights |
| Document role | Business problem and simulation boundaries |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose

LIONG is a fictional integrated oil and gas enterprise.

This project will create an executable workforce simulation. The simulation will connect employment records, performance evidence, evaluation criteria, and talent decisions through a People Graph.

A **People Graph** represents people and the relationships that give their work context. These relationships include assignments, reporting lines, roles, goals, skills, contributions, assessments, and decisions.

The central question is:

> What evidence supports a proposed rating or promotion, which criteria apply, and can an authorized reviewer trace the decision?

The project will first support three minimum viable product (MVP) use cases:

1. Promotion calibration.
2. Rating calibration.
3. Conversational people insights.

The project will use public reference data and synthetic internal records. It will not require confidential employee data to establish the first design baseline.

This document defines the problem, outcomes, scope, constraints, and demonstration requirements. It does not select technology or define the complete ontology.

## 2. Requirement authority

### 2.1 Confirmed requirements

The following requirements come from the current project instructions and the valid use cases in the supplied materials.

| ID | Confirmed requirement |
| --- | --- |
| CR-01 | Use LIONG as the fictional enterprise. Exclude original company identities and participant identities from project examples. |
| CR-02 | Prioritize promotion calibration, rating calibration, and conversational people insights. |
| CR-03 | Retain the later talent use cases in the design roadmap. |
| CR-04 | Use public reference data and synthetic enterprise records to simulate the design. |
| CR-05 | Every non-exempt component must be open source. Cloudflare, Databricks, and model choices are explicit exceptions. All durable data resides in Cloudflare R2. |
| CR-06 | Deliver project documents as downloadable Markdown files. |
| CR-07 | Follow the ASD-STE100-inspired writing principles in the reference repository. |
| CR-08 | Exclude the build-versus-buy narrative from the project. |

The supplied notes also establish design intent: consumers use conversational interfaces; the semantic model connects distributed sources; and analytical queries and graph queries can serve different needs.

These intentions do not establish a selected stack, a measured latency target, or a verified ingestion capability for LIONG.

### 2.2 Proposed design decisions

This charter proposes one canonical synthetic workforce world, temporal evidence records, isolated evaluation truth, and governed conversational tools.

These are design proposals. They are not observed facts about an enterprise.

### 2.3 Source boundaries

The attached materials supply business context and use cases. They do not supply verified employee records or complete field specifications.

Supplier comparisons, product claims, sales narratives, and historical implementation anecdotes do not define LIONG requirements.

Future documents must identify the source of each material requirement. When a source leaves a gap, record an assumption instead of inventing a confirmed requirement.

## 3. Business problem

### 3.1 Workforce information is distributed

An employee's context can span several sources:

- An HR system stores employment status, position, level, manager, and transfers.
- A performance system stores goals, assessments, ratings, and feedback.
- A learning system stores course completions and assessment results.
- Project and work systems store assignments, contributions, and outcomes.
- Documents store nomination cases, policy interpretations, and panel decisions.

Each source can describe the same person differently. Sources can use different identifiers, dates, role names, and update schedules.

The reviewer must reconstruct the context before assessing the case. A missing record can mean several things: no activity occurred, the source is incomplete, the record is restricted, or the integration failed.

The solution must preserve these distinctions.

### 3.2 Promotion cases can lack consistent evidence

**Promotion calibration** is the review of proposed promotions against applicable criteria and comparable cases.

A nomination can contain strong advocacy but weak supporting evidence. Another nomination can contain strong evidence but an incomplete narrative.

A panel needs to know:

- Which next-level criteria apply?
- Which evidence supports each criterion?
- Which evidence describes current-role performance rather than next-level capability?
- Which statements are assessments or inferences?
- Which criteria remain unassessed?
- How does the case compare with other relevant cases?
- What did the panel decide, and why?

The graph must support evidence review. It must not equate a nomination, manager endorsement, or past promotion with objective readiness.

### 3.3 Rating reviews can obscure important differences

**Rating calibration** is the review of proposed performance ratings for consistency with criteria, evidence, and comparable work context.

The same rating label can be applied differently across teams. Differences can also be legitimate. Employees can have different goals, assignment scope, resources, or review periods.

A distribution difference is a review signal. It does not prove that a manager is unfair or that an employee's rating is wrong.

The reviewer needs both analytical comparisons and case-level evidence. An aggregate chart alone cannot explain a decision.

### 3.4 Decisions can lose their history

A final rating can overwrite a proposed rating. A promotion outcome can be retained without the criteria, alternatives, or rationale used by the panel.

This prevents reliable answers to questions such as:

> What changed during calibration, who authorized the change, and which evidence was available at that time?

The simulation must retain proposals, revisions, decisions, and reasons as separate records.

### 3.5 Conversational access needs governed context

Managers and HR partners should be able to ask ordinary business questions. The application must connect their questions to approved analytical and graph tools.

An answer must identify its supporting evidence, review period, and known gaps. It must respect the user's access rights before retrieving or summarizing sensitive records.

The language model must not invent an authoritative rating, policy, calculation, or promotion decision.

## 4. Intended users and responsibilities

| User | Primary need | Responsibility boundary |
| --- | --- | --- |
| Line manager | Assemble and review cases for an authorized team | Proposes assessments and nominations; does not gain unrestricted enterprise access |
| HR partner | Review evidence and consistency across an assigned scope | Supports calibration and interprets approved policy |
| Calibration panel member | Compare cases and record decisions | Uses the authority assigned to the panel |
| Employee | Review permitted personal evidence and development context | Broader self-service is a later capability; confidential panel records remain restricted |
| Data steward | Resolve identity, terminology, and quality issues | Corrects governed data without silently changing decision history |
| Graph and data engineer | Validate mappings, pipelines, and query behavior | Operates technical tools with controlled access |
| Evaluation reviewer | Compare system outputs with scenario expectations | Holds isolated evaluation records that agents cannot access |

These are proposed simulation personas. Detailed permissions belong in LIONG-015.

## 5. MVP scope

### 5.1 Promotion calibration

The simulation must support a nomination dossier. A **dossier** is a structured collection of criteria, evidence, assessments, gaps, and decision history for one case.

The dossier must connect:

- The employee and employment assignment at the relevant date.
- The current role and proposed target role or level.
- The applicable policy version and criteria.
- Supporting contributions, assessments, and feedback.
- Contradictory, incomplete, and stale evidence.
- Relevant comparison cases and the basis for comparison.
- The panel decision, authority, date, and rationale.

The application can flag incomplete cases and retrieve relevant evidence. The authorized panel retains decision authority.

### 5.2 Rating calibration

The simulation must retain the proposed rating and the final rating for each review cycle.

It must support comparisons by approved dimensions, such as role family, level, review cycle, or site. Comparison rules must account for available context and report cohort limitations.

The application must show the evidence behind a selected case and record each material change during calibration.

The MVP will not impose a forced rating distribution or treat statistical normalization as a correction to employee performance.

### 5.3 Conversational people insights

The simulation must support an authorized user asking questions such as:

- Show promotion cases that lack evidence for a required criterion.
- Explain why a proposed rating changed during calibration.
- Compare rating patterns for the same role family and level.
- Show evidence available before the panel decision date.
- Identify unresolved contradictions in this nomination.

The answer must state the scope, use traceable evidence references, and identify uncertainty.

If evidence is missing or access is insufficient, the system must return a bounded response. It must not infer confidential facts from restricted records.

## 6. Later scope

The model should permit the following extensions without implementing all of them in the MVP.

| Later use case | Intended capability |
| --- | --- |
| Employee 360 | Assemble employment, experience, skills, learning, and evidence into one governed view |
| Skills inventory | Distinguish declared, inferred, assessed, and verified skills |
| Career pathways | Show plausible transitions and their evidence; distinguish observed history from recommendations |
| Opportunity matching | Match people to roles, projects, assignments, and mentors with explicit gaps |
| Learning and performance | Explore development activities and later outcomes without assuming causation |
| Recruiting and talent search | Search synthetic candidate profiles, résumés, skills, and career histories |
| Workforce capability analysis | Examine capability coverage and concentration across organizational boundaries |

The MVP must use stable concepts that can support these extensions. It does not need to populate every later concept.

## 7. Explicit exclusions

The first release excludes:

- Real employee or candidate profiles.
- Automatic promotion approval or automatic rating changes.
- Payroll, compensation, and benefits processing.
- Production writeback to an actual HR system.
- Validation of a model that predicts real employee success.
- Claims that learning causes performance improvement.
- Comprehensive collaboration surveillance or social influence scoring.
- Full recruiting and internal marketplace workflows.
- A supplier procurement or build-versus-buy assessment.

These boundaries keep the initial work focused on evidence, context, and traceable calibration.

## 8. Simulation design principles

### 8.1 Generate one coherent workforce world

Generate the canonical workforce world first. Then project its records into simulated source systems.

The source projections must represent the same underlying employees and events. They may introduce controlled identifier differences, omissions, delays, and schema differences.

Integration pipelines must reconstruct the governed view from these projections. They must not read the canonical world as a shortcut.

### 8.2 Distinguish requirements from evidence

A role requires a skill. This does not prove that its incumbent has that skill.

A course completion records participation or completion. It does not necessarily establish competence.

A project assignment records involvement. It does not establish the person's contribution or the quality of that contribution.

The graph must connect these records to assessments and evidence rather than collapse them into unsupported skill claims.

### 8.3 Preserve time and knowledge boundaries

Record when an event occurred and when its record became available.

A retrospective query may use later evidence. A query about an earlier decision must use the evidence available at that decision time.

Employment transfers, manager changes, policy versions, and corrected records must retain their history.

### 8.4 Separate provenance from claim status

**Provenance** identifies where a record or value came from.

**Claim status** identifies how a statement should be interpreted. Examples include a recorded assessment, an inference, a disputed claim, or an unknown.

These are separate dimensions. A synthetic feedback record can contain a disputed assessment. A deterministic calculation can use incomplete evidence.

| Provenance category | Meaning in this project |
| --- | --- |
| OBSERVED | Reference information retrieved from an identified public source; not proof of a LIONG employee fact |
| SYNTHETIC | A fictional LIONG employee, event, document, or decision |
| DERIVED | A deterministic result computed from identified inputs |
| ESTIMATED | A statistical or model-based estimate with stated limitations |
| SCENARIO_ASSUMPTION | A designed condition used to construct or test a scenario |

### 8.5 Isolate evaluation truth

The generator may retain complete scenario truth, planted anomalies, and expected evidence sets.

Evaluated agents and integration pipelines must not receive these answer keys. Agent-visible sources must contain only the evidence intended for the scenario and user.

Evaluation must test retrieval and reasoning against evidence. It must not reward reproduction of a hidden decision label as proof of fairness.

## 9. Public data strategy boundary

Public data will supply reference vocabulary and contextual material. Candidate source classes include occupation taxonomies, skills classifications, competency references, and accessible course or credential metadata.

Public data will not supply LIONG performance reviews, reporting lines, promotion histories, or panel deliberations. These records will be synthetic.

Each imported source requires an access and reuse check. Public visibility does not establish permission to redistribute content.

Foreign occupational classifications can provide a scaffold. They do not establish Nigerian job levels, local employment policy, or LIONG promotion rules.

The public-source strategy document will verify specific sources and record coverage gaps. This charter does not approve a dataset or assert that its current license has been verified.

## 10. Open-source component constraint

Cloudflare R2 stores all durable data, including synthetic data. Cloudflare, Databricks, and model choices are confirmed exceptions to the open-source rule. All other used components must pass the component assessment. PostgreSQL and Neo4j hold serving copies. Their versioned data exports reside in R2. See LIONG-011 version 0.2, approved on 2026-10-03, and DEC-047/048.

For each non-exempt component, record its edition, version, source repository, license, features, dependencies, and deployment responsibilities. Free pricing and source visibility alone do not qualify. For exempt services and models, record applicable terms, data handling, artifact or provider revision, and capability tests. Public dataset reuse remains a separate assessment.

R2 is a required hosted storage dependency. Databricks is permitted but optional. Exact model selection remains open. Approval of component recommendations does not pass deployment gates.

## 11. Architecture boundary

The logical design must distinguish four responsibilities:

| Responsibility | Purpose |
| --- | --- |
| Semantic definition | Define concepts, relationships, criteria, and constraints |
| Analytical calculation | Compute distributions, comparisons, and criterion coverage using explicit rules |
| Relationship retrieval | Trace employment context, supporting evidence, and decision history |
| Conversational explanation | Interpret questions and explain retrieved results within access rules |

A People Graph does not replace every analytical query. The implementation may combine relational calculations, graph traversal, and document retrieval.

An open-standard ontology can define shared meaning. Physical implementations still need mappings, constraints, and performance tests.

The MVP should begin with the minimum components required to demonstrate these responsibilities. Streaming, multiple graph engines, and large orchestration stacks require a demonstrated need.

## 12. First reference scenario

### 12.1 Scenario setting

A LIONG review cycle includes employees from maintenance, operations, engineering, commercial services, and digital teams.

One engineer has changed managers during the cycle. Their project evidence sits in two source systems. A nomination cites a completed course as proof of advanced competence. A later assessment records a gap against one target-level criterion.

A comparison employee has relevant evidence but an incomplete nomination. A manager's proposed rating distribution differs from a comparable cohort.

All scenario records are synthetic. The role mix and events are proposed assumptions.

### 12.2 Required demonstration

The system must:

1. Resolve the employee's records across sources.
2. Reconstruct the employment assignment for the review period.
3. Select the applicable policy version and criteria.
4. Retrieve supporting and contradictory evidence.
5. Distinguish completion from assessed competence.
6. Present relevant comparisons with cohort limitations.
7. Flag the rating distribution difference without assigning blame.
8. Record the panel decision and reason for any change.
9. Answer an authorized user's question with evidence references.
10. Exclude restricted evidence and hidden evaluation records.

The panel outcome is one fictional decision. The demonstration evaluates the evidence chain and workflow, not whether that outcome is objectively correct.

## 13. Success criteria

The following criteria define the required behavior. Numerical performance thresholds will be proposed in LIONG-016 after the workload is defined.

| ID | Success criterion | Validation approach |
| --- | --- | --- |
| SC-01 | Each demonstration case connects to the applicable assignment, cycle, criteria, and policy version | Compare retrieved context with isolated scenario expectations |
| SC-02 | Material answer claims trace to accessible evidence or a declared calculation | Inspect claim-to-evidence references and calculation inputs |
| SC-03 | Historical queries exclude evidence unavailable at the requested time | Use delayed and corrected records in temporal tests |
| SC-04 | Missing and contradictory evidence remains visible | Test incomplete and conflicting dossiers |
| SC-05 | Proposed ratings, final ratings, and changes remain distinct | Reconstruct a complete calibration history |
| SC-06 | Comparison cohorts have explicit rules and limitations | Reproduce cohort membership and analytical results |
| SC-07 | Restricted records are excluded before answer generation | Test unauthorized requests and indirect disclosures |
| SC-08 | The evaluated system cannot access answer keys | Inspect tool permissions, indexes, and evaluation fixtures |
| SC-09 | Required selected components satisfy the open-source constraint | Complete a version-specific component and dependency register |
| SC-10 | Generation is reproducible and source projections remain coherent | Replay a fixed seed and reconcile related records |
| SC-11 | Conversational responses remain within the user's question and authority | Review task completion and bounded responses |

Latency, scale, retrieval accuracy, and cohort minimum size are open design choices. This draft does not claim measured results.

## 14. What the simulation can establish

The simulation can establish whether the proposed model supports the business questions, whether the integration reconstructs context, and whether the application produces traceable answers.

It can test temporal behavior, permissions, evidence retrieval, calculations, and decision history under controlled conditions.

It cannot establish real workforce fairness, production prediction accuracy, employee acceptance, or business return. Synthetic patterns reflect generator assumptions.

A later production phase would require real source assessment, approved policy interpretation, user validation, and operational evaluation.

## 15. Initial scale assumptions

Version 0.1 of this charter is approved. LIONG-002 version 0.1 is approved. It establishes 800 active employees at the opening checkpoint, nine business units, six sites, 12 job families, and 36 role templates. The ranges below remain the original planning context; LIONG-002 owns the current detailed profile. See LIONG-REG-001 for decision status.

| Area | Proposed starting assumption | Reason |
| --- | --- | --- |
| Workforce | 500–1,000 synthetic employees | Supports varied cohorts while keeping case inspection practical |
| Roles | 25–40 roles across selected job families | Provides enough variation for contextual comparisons |
| Review history | Three review cycles | Supports revisions, transfers, and longitudinal questions |
| Enterprise scope | Selected operational and corporate teams | Keeps the calibration MVP bounded |
| Source projections | HR, performance, learning, project records, and documents | Exercises cross-source evidence assembly |

These values are planning assumptions. LIONG-002 and LIONG-008 will refine them. Generated volume should follow the scenario and evaluation needs.

## 16. Risks and design responses

| Risk | Design response |
| --- | --- |
| Random records produce implausible cases | Generate connected histories from rules and constraints |
| Historical decisions are treated as objective truth | Separate recorded decisions from assessments of evidence quality |
| A job title becomes proof of skill | Model role requirements separately from person assessments |
| Later evidence contaminates an earlier decision | Track event time and record availability time |
| Identity errors combine different employees | Use controlled identifiers and review ambiguous matches |
| Evaluation keys enter retrieval indexes | Keep hidden truth in a separate access boundary |
| A required feature exists only in a proprietary edition | Verify component-level licensing before selection |
| Talent-hub ambitions expand the MVP | Keep later use cases in the roadmap and enforce release boundaries |
| Duplicate terminology weakens model consistency | Maintain one glossary and stable concept identifiers |

## 17. Decisions required in subsequent documents

The following questions remain open:

1. Resolved: business units and sites are defined in approved LIONG-002.
2. Resolved: job families, tracks, and levels are defined in approved LIONG-002.
3. Resolved at policy level: approved LIONG-003 defines the rating scale and criterion groups; role-specific criteria remain to be modelled.
4. Resolved at policy level: approved LIONG-003 separates administrative eligibility, capability assessment, and organizational authorization.
5. Which comparison dimensions create useful cohorts?
6. What evidence may each persona access?
7. Which open-source applications can supply realistic source projections?
8. Which technology components meet the required features and licenses?
9. Which models, if any, qualify for the conversational layer?
10. Which acceptance thresholds fit the defined workload?

Do not treat answers as approved until their status is recorded.

## 18. Document sequence and completion gate

The next document is **LIONG-002 — Enterprise and Workforce Profile**. Version 0.1 is approved. LIONG-003 version 0.1 is approved. LIONG-004 version 0.1 is approved. LIONG-005 version 0.1 is approved. LIONG-006 version 0.1 is approved. LIONG-007 version 0.1 is approved. LIONG-008 version 0.1 is approved. LIONG-009 version 0.1 is approved. LIONG-010 version 0.1 is approved. LIONG-011 version 0.2 is approved. LIONG-012 version 0.3 and the ontology update set are approved. LIONG-013 version 0.1 is approved. LIONG-014 version 0.1 is approved. LIONG-015 version 0.1 is approved. LIONG-016 version 0.1 is approved. LIONG-017 version 0.1 is approved. The README and consolidated reference register are prepared for review. LIONG-REG-001 now tracks assumptions, decisions, and open questions.

It will define the fictional organizational setting needed to make the MVP concrete. LIONG-003 will then detail workflows and requirements. LIONG-004 will map business questions to data.

The charter is ready to become a baseline when its problem, scope, exclusions, constraints, and assumption boundaries are accepted. Technology selection is not required to complete this gate.

## 19. Writing and reference conventions

This document follows the ASD-STE100-inspired principles stated in the [reference repository README](https://github.com/aadehamid/pearland-petroleum-corporation/blob/main/README.md): consistent terms, direct verbs, short sections, explicit relationships, and clear status distinctions.

It does not claim formal ASD-STE100 compliance.

The writing reference is [ASD Simplified Technical English](https://www.asd-ste100.org/index.html). Its full standard and the linked commentary were not retrieved for this draft. The repository's documented principles are the working writing baseline.

Project source materials include the supplied notes and background documents. Their valid use cases have been adapted to LIONG. Original company identities, participant identities, and supplier narratives are excluded.

Related document IDs in this charter identify planned documents. They are not download links to completed files.

## 20. Review record

| Version | Change | Review status |
| --- | --- | --- |
| 0.1 | First problem statement and simulation charter | Approved by the user on 2026-10-02 |
| 0.2 | Records baseline approval and references the workforce draft and decision register; no scope change | Maintenance revision |


| 0.3 | References approved workforce profile and resolves organization questions; scope unchanged | Maintenance revision, 2026-10-03 |
| 0.4 | References approved MVP policies and resolves policy-level questions | Maintenance revision, 2026-10-03 |
| 0.5 | Records question-catalogue approval and source-strategy draft | Maintenance revision, 2026-10-03 |
| 0.6 | Records approved source strategy and canonical-model draft | Maintenance revision, 2026-10-03 |
| 0.7 | Records approved canonical model and model-as-code draft | Maintenance revision, 2026-10-03 |
| 0.8 | Records approved model-as-code standard and generation draft | Maintenance revision, 2026-10-03 |
| 0.9 | Records approved generation strategy and integration draft | Maintenance revision, 2026-10-03 |
| 0.10 | Records approved integration architecture and corpus draft | Maintenance revision, 2026-10-03 |
| 0.11 | Records approved corpus strategy and technology assessment draft | Maintenance revision, 2026-10-03 |
| 0.12 | Records LIONG-011 v0.2 approval and user-authorized storage and license changes | Maintenance revision |
| 0.13 | Records ontology-update approval and calibration analytics draft; approved scope unchanged | Maintenance revision |
| 0.14 | Records analytical approval and agent/interface draft; scope unchanged | Maintenance revision |
| 0.15 | Records interface approval and governance draft; scope unchanged | Maintenance revision |

| 0.16 | Records governance approval and evaluation draft; scope unchanged | Maintenance revision |

| 0.17 | Records evaluation approval and roadmap draft; scope unchanged | Maintenance revision |

Maintenance record: 0.18 consolidates the approved package status and index links on 2026-10-03.
