# Figures and Tables Plan

**Paper:** From Isolated Silos to Open Baselines
**Target:** 8–12 figures, 6–10 tables

All figures drawn as vector SVG (hand-coded, no external libraries per project conventions), exported to PDF at 300 DPI for IEEE submission. All tables produced in LaTeX (booktabs + multicol).

---

## Figures (10 planned, 8 minimum / 12 maximum)

### Figure 1 — Three Anchor Incidents Timeline and Classification
- **Title:** Three Anchor Incidents (2023–2026) — From Isolated Perception Failure to Fleet-Wide Systemic Shutdown
- **Description:** Horizontal timeline (October 2023 → March 2026) marking Cruise SF, Waymo SF, Apollo Go Wuhan incidents. Each marker annotated with: trigger class, affected vehicle count, severity, fleet recall outcome. Color-coded by incident class (isolated / regional / systemic).
- **Data source:** NHTSA Cruise Consent Order [1]; TechCrunch Waymo explanation [2]; Huxiu + Sina Apollo Go analysis [3, 4]
- **Section:** §1 Introduction
- **Size:** Single-column, 3.5" × 2"

### Figure 2 — PRISMA Flow Diagram
- **Title:** PRISMA Flow Diagram for Systematic Literature Harvest
- **Description:** Four-phase PRISMA 2020 diagram: Identification (560 records across 7 sources) → Screening (190 duplicates removed, 185 title/abstract excluded) → Eligibility (95 full-text assessed, 35 excluded with reasons) → Included (50–65 records). Exclusion reasons tabulated in right-side annotation.
- **Data source:** Own search results (see §2 Methodology)
- **Section:** §2 Methodology
- **Size:** Double-column, 7" × 4"

### Figure 3 — Regulatory Instrument Timeline (2018–2027)
- **Title:** Global Regulatory Timeline for L4+ Robotaxi Remote Operations
- **Description:** Horizontal timeline with 8 parallel jurisdiction tracks (UN, China, US, UK, Germany, Japan, EU, Singapore). Instrument enactment dates marked with filled circles; effective dates with open circles; ranges shaded. Color-coded by instrument type (binding law / draft / guideline / standard).
- **Data source:** UNECE GRVA [5–7]; MIIT GB draft [8]; NHTSA SGO [12]; UK AV Act [15]; German StVFernLV [18]; Japan SIP-adus [21]; EU AI Act; Singapore LTA sandbox.
- **Section:** §3 Regulatory Landscape
- **Size:** Double-column, 7" × 3.5"

### Figure 4 — Operator Architecture Comparison
- **Title:** Three Architectural Families for Robotaxi Remote Operations
- **Description:** Side-by-side architecture diagrams for Waymo (advisory model), Tesla (direct-control model), Vay (teleop-first model). Each diagram shows: ADS, communication link, operator workstation, control authority arrow. Key architectural parameters (max latency tolerance, speed cap, control mode) annotated below.
- **Data source:** Waymo Fleet Response blog [25]; Tesla Teleops reporting [28–30]; Vay press releases [20, 32]
- **Section:** §4 Industry Practice
- **Size:** Double-column, 7" × 3"

### Figure 5 — Academic Research Streams Integrated View
- **Title:** Five Research Streams on Remote Operations Technical Constraints
- **Description:** Concept map with five streams (latency, indirect control, control center architecture, trust calibration, human roles) plus their inter-dependencies. Streams that assume/constrain each other shown with directed edges.
- **Data source:** Hofbauer 2024 [35]; Kim 2025 [36]; Wolf 2025 [37]; Cui 2026 [43]; Koopman 2026 [44]; Lu 2022 [38]
- **Section:** §5 Academic Frontiers
- **Size:** Single-column, 3.5" × 3.5"

### Figure 6 — Incident Severity vs. Detection Latency Scatter
- **Title:** Incident Outcome Distribution: Detection Latency vs. Severity
- **Description:** Scatter plot with x-axis = detection latency (seconds, log scale), y-axis = NHTSA severity rating. Each marker is an incident; shape indicates systemic/regional/isolated; color indicates trigger class. Four anchor incidents labeled.
- **Data source:** NHTSA SGO database [12, 39]; ROAM incident database
- **Section:** §6 Incident Analysis
- **Size:** Single-column, 3.5" × 3"

### Figure 7 — UAV-to-Robotaxi Lessons Mapping
- **Title:** Cross-Domain Knowledge Transfer: Military UAV + DJI Productization → Robotaxi Remote Operations
- **Description:** Two-column mapping diagram. Left column: Cummings' 5 UAV lessons. Middle column: DJI's productized solutions. Right column: robotaxi architectural implications. Arrows show lesson-to-solution-to-implication chains.
- **Data source:** Cummings 2026 [45]; DJI Enterprise documentation [46–49]
- **Section:** §7 UAV Heritage
- **Size:** Double-column, 7" × 4"

### Figure 8 — ROAM Three-Layer Decision Architecture
- **Title:** ROAM Reference Architecture: Three-Layer Decision Model with Personnel Roles
- **Description:** Layered architecture diagram. Layer 1 (AI Autonomous, ~70% of events). Layer 2 (AI-Assisted + Human Confirm, ~25%). Layer 3 (Remote Driving / On-Site, ~5%). Each layer annotated with: latency budget, personnel role (Koopman taxonomy), typical events, escalation conditions.
- **Data source:** ROAM project reference-architecture.md; Koopman human-roles framework [44]
- **Section:** §8 Gaps & Baselines
- **Size:** Double-column, 7" × 4"

### Figure 9 — Latency Budget Decision Flow
- **Title:** Latency Budget Decision Flow for Remote Operations Mode Selection
- **Description:** Flowchart: given task (e.g., traffic-light ID, obstacle classification, emergency takeover), traverse decision branches (latency tolerance → control mode → dedicated vs. commercial link → speed cap) to mode recommendation.
- **Data source:** uav-lessons-learned.md §1 Latency table; Hofbauer 2024 [35]
- **Section:** §7 UAV Heritage
- **Size:** Single-column, 3.5" × 4"

### Figure 10 — ROaaS Three-Layer Service Architecture and Insurance Ecosystem
- **Title:** Remote Operations as a Service (ROaaS) Ecosystem: 2026–2030 Roadmap
- **Description:** Three stacked service layers (ROaaS operations / incident response insurance / data-driven risk pricing). Maps ROAM modules to insurance ecosystem roles. Timeline annotation: near/mid/long-term milestones.
- **Data source:** literature-review.md §7 Future Outlook; Swiss Re + Waymo partnership [41]; PICC + Ping An ICV insurance [42]
- **Section:** §8 Future Directions
- **Size:** Double-column, 7" × 3.5"

**Optional additions (if word count permits):**
- **Figure 11** — Operator-to-vehicle ratio history (1996 military UAV → 2025 Waymo) showing ratio ceiling
- **Figure 12** — Scenario taxonomy tree (ROAM six top-level categories × sub-categories)

---

## Tables (8 planned, 6 minimum / 10 maximum)

### Table 1 — Regulatory Requirement Cross-Tabulation
- **Title:** Cross-Jurisdictional Remote Operations Requirements: Eight Jurisdictions × Five Dimensions
- **Columns:** Jurisdiction | Communication Requirements | Operator Qualification | MRM Provisions | Data Retention (DSSAD) | Liability Framework
- **Rows:** UN GTR 2026 | China GB 2026 | UK AV Act 2024 | German StVFernLV 2025 | NHTSA SGO | Japan SIP-adus | EU AI Act | Singapore LTA
- **Data source:** [5–22]; related-standards.md cross-reference matrix
- **Section:** §3 Regulatory Landscape

### Table 2 — Industry Operator Architecture Comparison
- **Title:** Six-Operator Comparison: Architectural Choices and Deployment Scale
- **Columns:** Operator | Control Mode | Operator:Vehicle Ratio | Workstation UX | Max Latency Tolerance | Speed Cap | Deployment Scale | ROC Locations
- **Rows:** Waymo | Tesla | Baidu Apollo | Pony.ai | Vay | Ottopia
- **Data source:** [9, 25–34, 40]
- **Section:** §4 Industry Practice

### Table 3 — Academic Research Streams Summary
- **Title:** Five Academic Research Streams: Key Findings and Operational Implications
- **Columns:** Research Stream | Representative Works | Key Finding | Operational Implication | Gap Identified
- **Rows:** Latency & Communication | Indirect Control | Control Center Architecture | Trust Calibration | Human Roles Taxonomy
- **Data source:** [35–38, 43, 44]
- **Section:** §5 Academic Frontiers

### Table 4 — Incident Coding Sheet (Four Anchor Incidents)
- **Title:** Structured Seven-Dimension Coding of Four Anchor Incidents
- **Columns:** Incident | Trigger | Detection Latency | Intervention Path | MRM Outcome | Severity | Systemic/Isolated | Recovery Time
- **Rows:** Cruise SF 2023 | Waymo SF 2025 | Apollo Go Wuhan 2026 | Pony.ai Beijing 2025
- **Data source:** [1–4, 39, 40]; ROAM incident database
- **Section:** §6 Incident Analysis

### Table 5 — UAV-to-Robotaxi KPI Benchmarks
- **Title:** UAV Operations KPIs as Benchmarks for Robotaxi Remote Operations
- **Columns:** Operational Dimension | Military UAV (1996–2020) | DJI Industrial (2015–2026) | Robotaxi Current (2025) | Recommended Target
- **Rows:** Latency | Operator Ratio | Workstation Input Device | Certification Hours | Contingency Drills Frequency | Weather Resistance
- **Data source:** Cummings 2026 [45]; DJI Enterprise [46–49]; Waymo/Baidu disclosures [26, 31]
- **Section:** §7 UAV Heritage

### Table 6 — Research Gaps vs. ROAM Modules Mapping
- **Title:** Six Identified Research Gaps and ROAM Module Coverage
- **Columns:** Gap | Description | Affected Stakeholder | ROAM Module(s) Addressing It | Open Research Question
- **Rows:** Systemic Failure Response | Terminology Divergence | Operator Ratio Economics | Latency Bounds | Liability Attribution | Naturalistic Baselines
- **Data source:** §6 synthesis + §8 roadmap
- **Section:** §8 Gaps & Baselines

### Table 7 — ROAM Module Specifications
- **Title:** ROAM Four-Module Reference Architecture
- **Columns:** Module | Scope | Data Schema | Standards Alignment | Output
- **Rows:** Incident Database | Scenario Taxonomy | Reference Architecture | Evaluation Benchmarks
- **Data source:** ROAM project architecture docs; related-standards.md
- **Section:** §8 Future Directions

### Table 8 — 2026–2030 Commercial Ecosystem Roadmap
- **Title:** Projected Emergence of Remote Operations as a Service (ROaaS) Ecosystem
- **Columns:** Timeframe | Industry Milestone | Regulatory Milestone | Insurance Milestone | ROAM Milestone
- **Rows:** 2026–2028 Near-term | 2028–2030 Mid-term | 2030+ Long-term
- **Data source:** literature-review.md §7.5; current roadmap
- **Section:** §8 Future Directions

**Optional additions (if word count permits):**
- **Table 9** — Complete Standards-to-ROAM cross-reference matrix (expanded from related-standards.md)
- **Table 10** — Operator workstation UX component checklist (keyboard+mouse vs. gamepad; force feedback; multi-monitor)

---

## Figure/Table Production Workflow

1. **Data preparation:** Each figure/table has a source data file in `academic/survey-paper/data/figN-data.csv` or `tableN-data.csv`
2. **Draft generation:** SVG for figures, LaTeX for tables; initial drafts during Week 3
3. **Internal review:** Week 5 with co-reviewers; revisions in-place
4. **Final export:** Week 6 — SVG → PDF via rsvg-convert; LaTeX compiled to booktabs tables
5. **Submission package:** All figures as separate PDF files + LaTeX source files

---

*End of figures/tables plan. All assets to be stored in `academic/survey-paper/assets/` with source files retained.*
