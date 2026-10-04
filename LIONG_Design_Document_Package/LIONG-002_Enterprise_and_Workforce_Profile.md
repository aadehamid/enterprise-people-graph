# LIONG People Graph

# Enterprise and Workforce Profile

| Document control | Value |
| --- | --- |
| Document ID | LIONG-002 |
| Version | 0.3 |
| Date | 2026-10-03 |
| Status | Version 0.1 approved; maintenance revision |
| Governing baseline | LIONG-001 version 0.1, approved by the user |
| Decision register | LIONG-REG-001 |

## Current package status — 2026-10-03

LIONG-001 through LIONG-017 are approved at the baselines recorded in LIONG-REG-001. This maintenance revision consolidates status references; it does not change approved policy. Earlier draft wording and future-tense sequence descriptions describe design history, not pending approval. Implementation gates and unexecuted tests remain open. See [README](README.md) for current document versions and [reference register](LIONG-REF-001_Consolidated_Reference_Register.md) for source links.

## 1. Purpose and authority

This document defines the fictional enterprise used by the People Graph simulation. It supplies the organizational context for promotion calibration, rating calibration, and conversational people insights.

The enterprise name and three MVPs are confirmed requirements. The user approved this profile on 2026-10-03. Locations, workforce counts, job levels, and role definitions are approved simulation assumptions. Generated employment histories remain synthetic. They do not describe a real company.

This document owns the workforce profile. LIONG-003 will own workflow requirements. LIONG-006 will own canonical concept definitions. LIONG-008 will own detailed generation rules.

No software component is selected here.

## 2. Enterprise boundary

Lagos Integrated Oil and Gas Company (LIONG) is a fictional Nigerian integrated energy enterprise. Its designed business portfolio includes upstream production, gas processing, refining, product distribution, and commercial services.

The first workforce world concentrates on refining, gas processing, terminals, commercial work, and corporate support. It includes a small upstream team to test cross-business comparisons. It does not simulate the complete operating economics of each business.

The People Graph represents employment and work evidence. Equipment, process units, customers, and commercial products provide assignment context. The MVP does not require complete operational twins of these objects.

### 2.1 Organizational hierarchy

Use the following primary hierarchy:

**Enterprise → Business Unit → Department → Team.**

Site is a separate location dimension. A team can support several sites. A site can host employees from several business units.

A reporting relationship connects an employee's assignment to a manager's assignment for a defined period. A project relationship can cross the primary hierarchy without changing the employee's reporting manager.

Do not force site, department, and team into a single permanent hierarchy. These dimensions answer different questions.

### 2.2 Business units and opening headcount

| Business unit ID | Business unit | Opening employees | Main work context |
| --- | --- | ---: | --- |
| BU-REF | Refining and Manufacturing | 240 | Process operations, laboratory work, production support |
| BU-GAS | Gas and Upstream Operations | 100 | Gas processing, production operations, field support |
| BU-LOG | Terminals and Logistics | 100 | Storage, movements, scheduling, distribution |
| BU-MRE | Maintenance and Reliability | 140 | Maintenance, reliability, inspection, work planning |
| BU-EPR | Engineering and Projects | 70 | Engineering, modifications, project delivery |
| BU-COM | Commercial and Supply | 60 | Supply planning, commercial analysis, trading support |
| BU-HSE | HSE and Process Safety | 30 | Safety, environmental work, process safety |
| BU-DIG | Digital and Data | 30 | Data products, applications, platform support |
| BU-COR | Corporate Services | 30 | People services, finance, procurement support |
| **Total** | | **800** | |

Opening headcount is a snapshot count of active employees. It is not a count of employment-history rows, positions, or review records.

The counts are scenario design choices. They are not industry benchmarks or recommended staffing levels.

## 3. Sites and work locations

| Site ID | Fictional location | Opening employees | Context |
| --- | --- | ---: | --- |
| SITE-LAG-HQ | Lagos Corporate Centre | 120 | Corporate, commercial, digital, and central support |
| SITE-LEK-REF | Lekki Refining Complex | 360 | Refining and associated technical support |
| SITE-OGU-GAS | Ogun Gas Processing Centre | 120 | Gas processing and utilities |
| SITE-ONN-TER | Onne Coastal Terminal | 100 | Marine movements, storage, and distribution |
| SITE-WAR-FLD | Warri Field Support Base | 60 | Upstream and field support |
| SITE-IBD-DEP | Ibadan Distribution Depot | 40 | Inland distribution |
| **Total** | | **800** | |

These are fictional facilities associated with real geographic place names. They do not identify actual assets or employment at actual facilities.

Business-unit counts and site counts are two views of the same 800 employees. They must not be added together. The generator will produce a joint allocation that reconciles both sets of totals.

Each active employee has one primary work site at a snapshot date. Temporary visits and remote project support are separate assignment records.

The corporate calendar and workforce timestamps use Africa/Lagos as the business timezone. Store machine timestamps in UTC and retain the business timezone. Review dates use local calendar dates.

## 4. Departments and teams

The following department examples establish the required variety. Detailed team names can be generated later.

| Business unit | Example departments |
| --- | --- |
| Refining and Manufacturing | Process Operations; Laboratory; Production Planning |
| Gas and Upstream Operations | Gas Operations; Production Support; Field Operations |
| Terminals and Logistics | Terminal Operations; Transport Scheduling; Inventory Control |
| Maintenance and Reliability | Mechanical Maintenance; Electrical and Instrumentation; Reliability; Inspection; Work Planning |
| Engineering and Projects | Process Engineering; Project Engineering; Project Controls |
| Commercial and Supply | Supply Planning; Commercial Analysis; Trading Support |
| HSE and Process Safety | Occupational Safety; Process Safety; Environmental Management |
| Digital and Data | Data Engineering; Analytics; Business Applications |
| Corporate Services | People and Capability; Finance; Procurement Support |

Start with approximately 50–70 teams. This range is provisional. Team size and manager span must follow role constraints rather than uniform random allocation.

A department head can manage team managers. Team managers can have direct reports and contribute to projects. A project lead does not automatically become the reporting manager of every project member.

## 5. Workforce concepts

| Concept | Working definition |
| --- | --- |
| Person | A synthetic individual with a stable person identifier |
| Employment | The relationship between a person and LIONG as an employer |
| Role | A reusable description of work and required capabilities |
| Position | An organizational seat associated with a role and organizational context |
| Assignment | A person's occupation of a position for a specified period |
| Job family | A group of roles with related work |
| Job level | A designed measure of work scope within a career track |
| Site | A work location |
| Team | A group with a defined organizational purpose |
| Project assignment | Participation in a temporary work initiative |

One person can have several historical assignments. A vacant position has no incumbent. A role can describe many positions.

Use stable identifiers that do not encode mutable facts such as manager, site, or level. Source systems can use different local identifiers. Identity crosswalks must record their mappings.

## 6. Employment population

The opening workforce contains 800 active direct employees. Contractor personnel are outside the first employee-rating and promotion population.

A later extension can represent contractor participation in projects. Such records must not inherit employee promotion policies by default.

Generate joins, exits, transfers, and temporary assignments across the review history. Preserve the 800-person opening snapshot as a release checkpoint. Later snapshots can differ as events occur.

Use wholly fictional names and synthetic contact addresses under reserved example domains. Do not adapt real professional profiles into LIONG employee records.

Protected characteristics are not required for the first MVP. Any later fairness-analysis fields need a separate purpose, access model, and evaluation design. Their absence means the MVP cannot claim demographic fairness validation.

## 7. Job families and role catalogue

Use 12 initial job families and 36 reusable role templates.

| Family ID | Job family | Role templates |
| --- | --- | --- |
| JF-OPS | Process Operations | Process Operator; Control Room Operator; Operations Supervisor |
| JF-GAS | Gas and Production Operations | Gas Plant Operator; Production Technician; Production Engineer |
| JF-MEC | Mechanical Maintenance | Mechanical Technician; Rotating Equipment Technician; Mechanical Maintenance Supervisor |
| JF-EIC | Electrical and Instrumentation | Electrical Technician; Instrument Technician; Control Systems Engineer |
| JF-REL | Reliability and Integrity | Reliability Engineer; Inspection Engineer; Asset Integrity Engineer |
| JF-PLN | Planning and Scheduling | Maintenance Planner; Turnaround Planner; Work Scheduler |
| JF-ENG | Engineering and Projects | Process Engineer; Project Engineer; Project Controls Analyst |
| JF-LOG | Logistics and Terminal Operations | Terminal Operator; Logistics Scheduler; Inventory Analyst |
| JF-COM | Commercial and Supply | Supply Planner; Commercial Analyst; Trading Support Analyst |
| JF-HSE | HSE and Process Safety | HSE Adviser; Process Safety Engineer; Environmental Specialist |
| JF-DIG | Digital and Data | Data Engineer; Analytics Specialist; Business Applications Specialist |
| JF-COR | Corporate Services | People Partner; Finance Analyst; Procurement Specialist |

These templates describe work. They do not by themselves encode seniority. A position combines a role template with a permitted track and level.

Leadership seats use the relevant family plus a leadership designation. A supervisor title does not remove the need for explicit management criteria.

The catalogue is a starting model. LIONG-006 must distinguish occupational reference mappings from LIONG-specific role definitions.

## 8. Career tracks and levels

Use three proposed career tracks: technical operations, professional specialist, and people management.

| Level code | Technical operations track | Professional specialist track | People management track |
| --- | --- | --- | --- |
| L1 | Trainee | Graduate or entry professional | Not applicable |
| L2 | Qualified practitioner | Practitioner | Not applicable |
| L3 | Senior practitioner | Senior specialist | Team supervisor |
| L4 | Lead practitioner | Lead specialist | Team manager |
| L5 | Principal practitioner | Principal specialist | Department manager |
| L6 | Not used initially | Enterprise specialist | Business-unit leader |

Level codes permit a common index. They do not make scope identical across tracks or families.

A same-level comparison requires more context than the level code. Promotion eligibility and criteria must be defined for each permitted transition.

A promotion can increase level within a track. A lateral move changes work without increasing level. A move into management can change track. Acting assignments are temporary and do not establish a permanent promotion.

Opening level distribution:

| Level | Employees |
| --- | ---: |
| L1 | 50 |
| L2 | 280 |
| L3 | 250 |
| L4 | 140 |
| L5 | 65 |
| L6 | 15 |
| **Total** | **800** |

These are generation targets. Joint allocations must respect role and track restrictions. A generator must not assign an L1 employee to an L6 leadership position to satisfy marginal counts.

## 9. Review calendar

Use three completed annual review cycles for historical scenarios: 2023, 2024, and 2025. Use 2026 as a current, incomplete cycle.

| Cycle stage | Proposed timing | Record type |
| --- | --- | --- |
| Goal setting | January–February | Goals and agreed criteria |
| Midyear review | June–July | Progress evidence and feedback |
| Year-end assessment | January following the performance year | Proposed rating and manager assessment |
| Calibration | February following the performance year | Case review, revisions, and final rating |
| Promotion review | A separate defined panel window | Nomination and decision |

A performance cycle refers to the year being assessed. A decision can occur in the following calendar year.

Do not create completed 2026 annual ratings at an October 2026 scenario checkpoint. Future-dated outcomes belong only in explicitly labelled future scenarios.

Promotion review need not occur at the same time as rating calibration. LIONG-003 will specify the relationship and authority boundaries.

The exact rating scale, promotion windows, and eligibility rules remain open. This document defines timing context, not policy outcomes.

## 10. Work and evidence context

Use projects and work campaigns that produce identifiable contributions.

| Work context | Example evidence | Important distinction |
| --- | --- | --- |
| Maintenance campaign | Work completion, inspection findings, supervisor assessment | Participation does not establish individual competence |
| Turnaround preparation | Planning deliverables, dependency reviews, handover notes | Team outcome differs from individual contribution |
| Process improvement | Analysis, trial results, review notes | A proposed benefit differs from a measured result |
| Terminal reliability | Scheduling changes, incident follow-up, work records | Assignment scope differs across sites |
| Commercial planning | Forecast review, supply analysis, decision support | Financial outcomes can depend on market conditions |
| Data product delivery | Requirements, quality checks, release notes | Delivery volume is not a complete performance measure |

Project outcomes and individual assessments are separate records. Courses, credentials, role requirements, self-declarations, and observed contributions provide different evidence types.

Include evidence gaps and disagreements as controlled scenario features. Do not give every employee complete, consistent evidence.

## 11. Calibration cohorts

A cohort is a defined comparison group. Its construction must be explicit and reproducible.

Candidate dimensions include review cycle, role family, career track, job level, assignment duration, and work context.

Site and manager can be analytical dimensions. They must not automatically determine the comparison group. Small groups require bounded output and a documented aggregation rule.

Do not compare a new trainee with a long-serving specialist because both belong to one business unit. Do not compare manager ratings without accounting for their team composition.

LIONG-003 and LIONG-013 will specify final cohort rules. This profile supplies the dimensions needed to implement them.

## 12. Required organizational scenarios

| Scenario ID | Designed event | People Graph requirement |
| --- | --- | --- |
| ORG-01 | Employee transfers between sites during a cycle | Attribute evidence to the correct period and assignment |
| ORG-02 | Employee changes manager during a cycle | Retain both manager relationships and assessment scope |
| ORG-03 | Specialist contributes to a cross-business project | Retrieve contributions without changing reporting lines |
| ORG-04 | Employee takes an acting supervisor assignment | Distinguish temporary scope from permanent promotion |
| ORG-05 | Position becomes vacant | Preserve position identity without inventing an incumbent |
| ORG-06 | Employee moves from technical work to management | Apply transition-specific criteria |
| ORG-07 | Source uses an obsolete role label | Resolve terminology with a versioned mapping |
| ORG-08 | Employee leaves after a review period | Preserve historical evidence and restrict current access appropriately |

Each scenario requires event time, source availability time, and a scenario checkpoint. Hidden expected results belong in the evaluation boundary.

## 13. Generation and reconciliation constraints

The synthetic generator must satisfy these rules:

1. Reconcile business-unit, site, and level totals to the same opening population.
2. Assign only valid role, track, and level combinations.
3. Keep primary assignment periods non-overlapping unless an explicit concurrent-assignment scenario permits overlap.
4. Prevent self-reporting and cycles in the primary reporting hierarchy.
5. Ensure each manager assignment is valid for its reporting period.
6. Preserve stable identities through transfers, promotions, and exits.
7. Create review records only for the eligible population and period.
8. Preserve positions, vacancies, and incumbent changes separately.
9. Keep record availability consistent with temporal scenarios.
10. Keep source-specific omissions separate from canonical truth.

Review-row counts must follow eligibility and employment history. They must not be calculated as 800 multiplied by three without checking the population in each cycle.

Generation failures must be reported. The generator must not silently relax constraints to satisfy a count.

## 14. Access context

The simulation uses assignment-based access for line managers and scoped access for HR partners and panel members.

A former manager does not retain unrestricted access because they authored historical feedback. A project lead does not receive full performance access to every project member.

Historical authorship, current access, and panel authority are separate relationships.

The detailed access model remains in LIONG-015. This document establishes the organizational facts that model will use.

## 15. Decisions and open items

| Register ID | Subject | Current status |
| --- | --- | --- |
| DEC-001 | 800 employees at the opening checkpoint | Approved |
| DEC-002 | Nine business units and six sites | Approved |
| DEC-003 | 12 job families and 36 role templates | Approved |
| DEC-004 | Three tracks and six level codes | Approved |
| DEC-005 | 2023–2025 completed history and incomplete 2026 cycle | Approved |
| DEC-006 | Direct employees only in initial calibration population | Approved |
| DEC-007 | Africa/Lagos calendar context with UTC timestamps | Approved |
| OI-01 | Rating scale and criterion definitions | Open; LIONG-003 |
| OI-02 | Promotion eligibility and panel schedule | Open; LIONG-003 |
| OI-03 | Exact joint workforce allocation | Open; LIONG-008 |
| OI-04 | Cohort minimums and comparison rules | Open; LIONG-013 |
| OI-05 | Field-level access and retention | Open; LIONG-015 |

Approval of version 0.1 resolves the corresponding charter questions. These values are approved simulation assumptions.

## 16. Impact on other documents

LIONG-001 now points to this profile for detailed workforce proposals. The opening scale is now 800 active employees, as approved in this profile.

LIONG-REG-001 records the approval of the charter and the proposals in this document. DEC-001 through DEC-007 are approved.

The charter now references the approved opening scale, organization, and role catalogue. Do not repeat this full catalogue in the charter.

## 17. Completion criteria

This document can become a baseline when the user accepts the enterprise boundary, population, organizational dimensions, role catalogue, career structure, and review history.

The detailed rating policy, technical stack, synthetic generator, and permission matrix are not required to complete this gate.

## 18. Change history

| Version | Change | Status |
| --- | --- | --- |
| 0.1 | First workforce profile and explicit generation constraints | Approved on 2026-10-03 |
| 0.2 | Records approval and updates decision status; no workforce change | Maintenance revision |

Maintenance record: 0.3 consolidates the approved package status and index links on 2026-10-03.
