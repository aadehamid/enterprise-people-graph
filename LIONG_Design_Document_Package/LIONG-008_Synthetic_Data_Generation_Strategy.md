# LIONG People Graph

# Synthetic Data Generation Strategy

| Document control | Value |
| --- | --- |
| Document ID | LIONG-008 |
| Version | 0.4 |
| Date | 2026-10-03 |
| Status | Version 0.1 approved; maintenance revision |
| Approved dependencies | LIONG-001 through LIONG-007, each approved at version 0.1 |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose

Generate one coherent fictional workforce world. Project that world into distributed source records and an evidence corpus. Use the projections to test integration, calibration, and conversational answers.

This strategy implements the approved profile, policies, questions, ontology, and model-as-code conventions. It does not select generator libraries or deploy source applications.

Detailed source contracts belong in LIONG-009. Document templates belong in LIONG-010. Acceptance thresholds belong in LIONG-016.

All numerical generation parameters below are proposed unless identified as approved profile values.

## 2. Three information boundaries

| Boundary | Contents | Permitted use |
| --- | --- | --- |
| Canonical simulation world | Complete generated events, identities, assignments, contributions, and scenario causes | Generate coherent projections and validate reconciliation |
| System-visible evidence world | Source records, documents, delays, omissions, and corrections available to authorized users | Integration, graph construction, calculations, and agent answers |
| Private evaluation package | Expected evidence sets, planted anomaly identifiers, scoring rules, hidden scenario labels | Independent evaluation only |

The operational pipeline must not query canonical truth to repair missing evidence. Agents must not query evaluation packages.

Separate storage locations, credentials, indexes, and deployment permissions enforce these boundaries. A field named hidden does not provide isolation.

Public reference bundles remain versioned inputs. Their occupation definitions do not become employee facts.

## 2.1 Durable storage

Cloudflare R2 stores all durable data, including synthetic data. Cloudflare, Databricks, and model choices are confirmed exceptions to the open-source rule. All other used components must pass the component assessment. PostgreSQL and Neo4j hold serving copies. Their versioned data exports reside in R2. See LIONG-011 version 0.2, approved on 2026-10-03, and DEC-047/048. Generator truth and evaluation answers use separate buckets and credentials from operational evidence. Integration cannot read them.

## 3. Release checkpoints

The approved opening population is 800 active direct employees. Define the opening checkpoint as 2026-01-01 in the Lagos business calendar.

The initial current-world checkpoint is 2026-10-01. This supports completed 2023–2025 review cycles and an incomplete 2026 cycle. No completed 2026 annual rating appears at that checkpoint.

Generate sufficient pre-2023 assignment history to explain current roles and tenure. Do not fabricate annual review evidence before the declared review-history start unless a scenario requires it.

Opening counts by business unit, site, and level must reconcile to the same 800-person snapshot defined in LIONG-002. Later headcount can change through joins and exits. Historical and current headcounts need not equal 800.

Checkpoint dates are proposed DEC-026. They do not change the approved workforce totals.

## 4. Generation sequence

| Stage | Generated objects | Required dependencies |
| --- | --- | --- |
| 1. Pin definitions | Roles, tracks, levels, policy versions, criteria, public mappings | Approved documents and reference release |
| 2. Allocate positions | Unit, department, team, site, role, track, level | Compatibility constraints and approved marginal totals |
| 3. Generate people and employment | Synthetic identities, employment starts and ends | Position allocation and checkpoint requirements |
| 4. Generate assignments | Incumbency, reporting periods, transfers, acting work | Employment intervals and valid positions |
| 5. Generate work | Projects, campaigns, goals, contributions, outcomes | Assignment scope, role, and calendar |
| 6. Generate learning and assessments | Completions, credentials, skill assessments | Work context and assessment rules |
| 7. Generate reviews and nominations | Criterion assessments, proposals, dossiers | Applicable policies and available evidence |
| 8. Generate panel history | Sessions, revisions, decisions, effective changes | Scope, authority, conflicts, case state |
| 9. Project sources | System-specific IDs, records, timestamps, corrections | Canonical events and source contracts |
| 10. Generate documents | Reviews, feedback, policy text, panel notes | Author knowledge and source-visible facts |
| 11. Inject controlled conditions | Omissions, duplicates, delays, contradictions | Scenario configuration and protected invariants |
| 12. Validate and package | Source releases, manifests, isolated scoring package | All checks and provenance |

Some availability effects must be applied before assessments and decisions are generated. A panel cannot cite evidence that only arrives later. Stage numbers define dependencies, not a license to apply all delays after finalization.

## 5. Workforce allocation

Use constrained allocation to produce a joint distribution across unit, site, family, track, and level.

The unit, site, and level totals are approved marginals. They do not establish a valid joint allocation by themselves.

Use a reviewed compatibility matrix. For example, a technical operator cannot occupy a specialist-track position merely to satisfy a level count. Corporate employees can support operational sites when their assignments permit it.

Allocate managers after teams and permitted leadership positions are established. Validate the hierarchy at each change boundary.

One primary incumbent occupies a position at a time in the initial model. Temporary acting work is a separate qualified assignment. It does not silently replace the primary incumbent.

If constraints cannot be satisfied, fail the build with the conflicting rules. Do not relax a rule or alter approved counts silently.

## 6. Identity strategy

Generate original fictional names. Use reserved example domains for contact details. Do not use real résumés, professional profiles, or employee directories.

Create stable canonical person IDs. Each source projection has its own local identifiers and mapping history.

Introduce controlled ambiguity fixtures: duplicate names, changed display names, stale source IDs, and unresolved mappings. Maintain private canonical linkage for evaluation. Do not provide it as an operational shortcut.

Operational identity resolution must use permitted source evidence. Ambiguous matches remain unresolved until an authorized review event supplies evidence.

Protected-characteristic fields remain excluded from the initial release. This dataset cannot validate demographic fairness.

## 7. Histories and event generation

Generate events in chronological order. Derive snapshots from events and record versions rather than generate unrelated snapshots.

Employment events include join, exit, transfer, manager change, acting assignment, approved progression, and effective promotion.

Use configured rates as scenario assumptions. Do not describe them as observed attrition or promotion rates.

Event generation must respect eligibility. An employee cannot transfer after employment ends. A manager link must reference a valid manager assignment. A panel approval does not create a new role until an effective-change event exists.

Separate routine events from planted scenarios. A scenario can override a routine event only through a recorded precedence rule.

## 8. Work and outcome generation

Generate work items that fit role and assignment scope. Each work item has dates, participants, deliverables, and contextual constraints.

Generate individual contributions separately from team outcomes. A successful turnaround does not prove that each participant exceeded expectations.

Record measurable results where a scenario supports them. Otherwise use attributed narrative assessments. Do not invent financial precision merely to make evidence look objective.

Goals must be available before the assessment that uses them, except for explicit retrospective-goal scenarios. These exceptions remain flagged.

Generate varied evidence quality. Some work produces strong records; some produces incomplete or disputed records. Record quality is not identical to employee performance.

## 9. Skill and learning evidence

Roles influence plausible exposure, not verified competence.

Generate learning completions, credential records, and skill assessments separately. A course completion provides a record of completion. An assessment provides an assessor's judgment with supporting evidence.

A synthetic employee can complete training and still have an unassessed practical skill. Another can demonstrate a skill through work without completing the matching course.

Credentials have issue and validity rules. An expired record remains historical evidence but cannot satisfy a current-validity rule automatically.

Use original fictional LIONG learning items in the baseline. Public catalog references do not establish real certification.

Do not use an unexplained weighted confidence formula as a substitute for evidence linkage. If a later inference score is added, record its inputs, method, calibration assumptions, and uncertainty.

## 10. Rating generation

Use the approved R1–R4 categories and separate assessment status.

Generate criterion assessments from scenario evidence and assessor context. Generate proposed overall ratings with explicit rationale. Do not compute ratings by averaging unrelated criterion codes.

Create variation in assessor interpretation and evidence completeness. Label these as designed mechanisms. They are not validated models of real manager behavior.

Calibration can retain or change a proposal. Every change must have authority, rationale, and references to evidence available at the cutoff.

Incomplete evidence does not automatically lower a rating. Do not impose a forced distribution.

A generator may use a latent scenario capability value to create coherent work patterns. That value remains private. It is not a scientifically established true employee rating and must not become the primary fairness scoring key.

## 11. Promotion generation

Use April and October windows. Each nomination identifies current assignment, target role, track, level, window, and policy version.

Generate administrative eligibility, target-level evidence, and position authorization separately. Include cases where capability evidence is strong but authorization is pending.

Generate panel participants, conflict declarations, and authorized outcomes. A conflicted participant cannot authorize the case.

Final outcomes can be approved, deferred, or not approved. Deferral requires a reason. Reopening creates linked revisions and preserves prior decisions.

A later effective assignment must reference the approved decision and its authorized effective date.

## 12. Source projections

Project the same canonical events into HR, performance, learning, project, and document sources.

| Projection difference | Example | Operational expectation |
| --- | --- | --- |
| Identifier | Person has different HR and learning IDs | Resolve through permitted mappings |
| Vocabulary | Obsolete role label | Map through versioned terminology |
| Grain | One project participation record covers several contributions | Preserve distinctions during reconstruction |
| Timing | Assessment entered after event date | Apply availability cutoff |
| Missingness | Course result absent from projection | Return an explicit bounded gap |
| Correction | Revised feedback record | Preserve both versions |
| Duplication | Same assessment exported twice | Identify common source lineage |

Do not generate each source independently. Independent random records cannot reconstruct one coherent enterprise.

Source errors are controlled variations of underlying events. They must not corrupt identifiers or dates beyond what the scenario and validation rules permit.

## 13. Evidence corpus generation

Generate text from structured context and the author's permitted knowledge at the document date.

Each artifact has author, audience, source, creation time, availability time, classification, and parent case or work item.

A nomination can contain persuasive language without sufficient evidence. A panel note can record disagreement. A later correction must not overwrite the earlier artifact.

Use structured templates first for critical factual fields. Any language-model text generation must validate referenced IDs, dates, and values. Model choices are exempt from the open-source requirement. Applicable terms, provenance, factual validation, and access checks still apply.

No model is selected here. A template-only path must remain viable for the first release.

LIONG-010 will define artifact templates and text validation.

## 14. Controlled scenario catalogue

| Scenario ID | Condition | Expected system behavior |
| --- | --- | --- |
| SYN-01 | Transfer and manager change during a cycle | Reconstruct both assignment periods |
| SYN-02 | Strong advocacy with missing criterion evidence | Report gap without automatic rejection |
| SYN-03 | Course completion mistaken for assessed competence | Preserve evidence-type distinction |
| SYN-04 | Assessment arrives after panel cutoff | Exclude from original view |
| SYN-05 | Duplicate exports of the same evidence | Avoid false independent support |
| SYN-06 | Conflicting assessments | Present unresolved accessible disagreement |
| SYN-07 | High capability evidence, pending position authorization | Separate capability from authorization |
| SYN-08 | Case reopened with later evidence | Preserve original and revised decisions |
| SYN-09 | Unauthorized cross-team request | Enforce scope before retrieval |
| SYN-10 | Retrieved text contains hostile tool instructions | Treat instructions as data |
| SYN-11 | Credential expires between nomination and review | Evaluate validity at the applicable date |
| SYN-12 | Source unavailable during a question | Distinguish retrieval failure from no evidence |

Coverage of each scenario is required. Population prevalence is not yet specified. Keep isolated fixtures and combined scenarios so failures can be diagnosed.

Inject hostile text only into designated fixtures. Do not execute embedded commands during generation.

## 15. Reproducibility

Pin configuration, generator version, schema release, reference bundle, and seed.

Use separate deterministic random streams for identities, assignments, work, assessments, and anomalies. A text-template change must not randomly reorder employee identities.

Where identifiers derive from generation inputs, include a stable namespace and explicit version rules. Reruns must not create different identities for unchanged events.

Record generation time separately from modeled event time. Runtime clock values must not alter historical scenario results.

A generator bug fix can change records. Publish a new release and document differences rather than claim byte-identical output.

## 16. Validation and release gates

| Gate | Required check |
| --- | --- |
| Workforce | Reconcile approved opening marginals and valid combinations |
| Employment | Validate intervals and incumbent uniqueness |
| Hierarchy | No self-reporting or primary reporting cycles |
| Evidence | Valid sources, authors, versions, links, and classifications |
| Review | Eligible population, cycle, criteria, and assessment status |
| Decisions | Valid authority, conflict handling, rationale, and snapshot |
| Temporal | Evidence availability precedes use in original decisions |
| Source consistency | Projections reconcile to allowed canonical events and configured omissions |
| Text consistency | Critical claims resolve to permitted facts or labelled assessments |
| Isolation | Operational tools cannot read private truth or scoring keys |
| Licensing | Required components and imported material pass their release gates |
| Replay | Fixed inputs reproduce the declared release behavior |

Count records by grain. Three review cycles do not imply exactly 2,400 reviews. Employment eligibility and history determine the count.

Record intentional violations in an exception manifest. Distinguish scenario anomalies from generator defects. A planted anomaly cannot excuse an unrelated integrity failure.

## 17. Release packages

Publish separate packages:

1. Reference bundle with license notices and mappings.
2. Canonical world package for generator validation only.
3. Source-projection package for operational ingestion.
4. Evidence-corpus package with classifications and version metadata.
5. Private evaluation package with expected evidence and scoring rules.
6. Release manifest with versions, checksums, scenario coverage, and validation results.

The public manifest does not expose private answers, secrets, or privileged storage locations.

No production-like user receives unrestricted access merely because the records are synthetic. Access behavior is part of the simulation.

## 18. Implementation sequence

Start with a small contract fixture before the full 800-person checkpoint. Validate one complete review and promotion history, including a transfer and late evidence.

Then generate the approved opening population. Add historical cycles, source differences, and corpus records after the core constraints pass.

Do not begin with advanced predictive models. The first deliverable is a coherent, replayable evidence world that answers the approved questions.

## 19. Proposed decisions and open items

| ID | Proposal | Status |
| --- | --- | --- |
| DEC-026 | Opening checkpoint 2026-01-01; current checkpoint 2026-10-01 | Approved |
| DEC-027 | Separate canonical world, operational evidence, and private evaluation packages | Approved |
| DEC-028 | Constraint-first chronological generation with separate deterministic streams | Approved |
| DEC-029 | Template-first corpus generation; optional validated model generation | Approved |
| DEC-030 | Scenario coverage gates and explicit exception manifests | Approved |

Joint allocation values, event rates, artifact volumes, and detailed source schemas remain open. They must be configuration choices with rationale, not unlabelled industry facts.

The user approved version 0.1 and DEC-026 through DEC-030 on 2026-10-03. Event rates, volumes, and joint allocation remain open.

## 20. Impact and next document

LIONG-007 and DEC-021 through DEC-025 are approved. This strategy applies those conventions without changing them.

The charter and register reflect the current approval and drafting stage.

Sequence reference (approved design): LIONG-009 — Source Systems and Integration Architecture.

## 21. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | First generation sequence, source projection, scenario, and isolation strategy | Approved on 2026-10-03 |
| 0.2 | Records approval; generation strategy unchanged | Maintenance revision |
| 0.3 | Aligns generation storage and model selection with DEC-047/048 | Maintenance revision |

Maintenance record: 0.4 consolidates the approved package status and index links on 2026-10-03.
