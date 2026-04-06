# Survey Paper Plan — ROAM / IEEE T-IV Submission

**Working Title:** From Isolated Silos to Open Baselines: A Systematic Review of Remote Operations for L4+ Robotaxis — Regulations, Architectures, and Cross-Domain Lessons from Drone Heritage

**Target Journal:** IEEE Transactions on Intelligent Vehicles (T-IV)
**Impact Factor:** 8.2 (2024 JCR) | CAS Q1 | Top venue for ITS / AV safety research
**Manuscript Length:** 12,000–15,000 words (main text), 50–70 references
**Author:** Yuxin Zhang, Associate Professor, Jilin University; Functional Safety Lead, Zhuoyu Technology; Founder, DRIVEResearch
**Target Submission:** 2026-06-30 (6-week writing window from 2026-04-05)

---

## 1. Target Journal Scope and Submission Guidelines

IEEE Transactions on Intelligent Vehicles (T-IV) is the premier journal for intelligent vehicle research, covering sensing, perception, decision-making, control, human-vehicle interaction, and safety/verification for automated and connected vehicles. Survey papers are explicitly welcomed and typically fall in the 15–25 page (double-column) range, corresponding to 12,000–18,000 words of main text. Submissions are handled through the IEEE Author Center; color figures are free; supplementary material (e.g., extended tables, bibliography) is supported.

**Relevance to T-IV scope:** Remote operations for L4+ robotaxis sit at the intersection of fleet management, human-vehicle interaction, safety argumentation, and vehicular communications — all core T-IV topics. Recent T-IV coverage has been dominated by perception and planning algorithms; systematic reviews on operational safety and remote supervision are underrepresented, creating an editorial opening.

**Formatting compliance checklist (finalized during copy-edit):**
- IEEE Transactions LaTeX template, double-column, 10pt
- Structured abstract (≤250 words)
- Author photo + biography (required)
- Graphical abstract (optional but recommended)
- Figures at 300 DPI minimum, source files for vector graphics
- References: IEEE format, DOI when available, permanent URL

---

## 2. Differentiation Analysis — Existing Surveys

A thorough search of IEEE Xplore, Scopus, Web of Science, and Google Scholar yielded five surveys on closely adjacent topics. This paper's positioning is explicitly differentiated against each:

**[S1] Hofbauer, M. et al. (2024). "Network latency challenges in teleoperation of connected and automated vehicles: A systematic review." *Sensors* 24(12):3957.**
Focus: Latency measurement, compensation algorithms, network protocols. Scope: Single technical dimension. **Our differentiation:** Hofbauer treats latency as an algorithmic problem; we treat it as one of five interlocking operational design dimensions (latency + workstation UX + operator workload + training + contingency) and ground it in regulatory constraints and real incident data.

**[S2] Lu, S. et al. (2022). "Teleoperation technologies for enhancing connected and autonomous vehicles." IEEE MASS 2022.**
Focus: Communication architecture, HMI interfaces, safety mechanisms. Scope: Technology survey circa 2022. **Our differentiation:** Lu et al. predate the 2024–2026 regulatory wave (UN GTR, German StVFernLV, China GB draft, UK AV Act), the three anchor incidents (Cruise 2023, Waymo SF 2025, Apollo Go Wuhan 2026), and the commercial scaling of Waymo (3,000+ vehicles) and Tesla teleoperations. We add four years of operational evidence and provide the first post-regulation synthesis.

**[S3] Majstorovic, D. et al. (2022). "Survey on Teleoperation Concepts for Automated Vehicles." IEEE SMC 2022.**
Focus: Classification of teleoperation concepts (direct control, shared control, indirect control, dispatcher). **Our differentiation:** Majstorovic provides a taxonomy of control modes; we reframe teleoperation as *one layer* in a three-layer operations stack (AI autonomous / AI-assisted + human confirm / remote driving), aligning with the Koopman (2026) six-role framework and the emergent ROaaS business model.

**[S4] Zhang, T. (2020). "Toward automated vehicle teleoperation: Vision, opportunities, and challenges." IEEE IoT Journal 7(12):11347–11354.**
Focus: Vision piece, primarily conceptual. **Our differentiation:** Pre-dates nearly all production deployments (Waymo scaled post-2021, Tesla Teleops 2025, Vay 2025). We provide empirical grounding Zhang could not.

**[S5] Kang, L. et al. (2018). "Do you need teleoperation? A survey of autonomous vehicle systems, challenges, and supporting technologies." Tsinghua Science and Technology.**
Focus: Supporting technologies (5G, V2X). **Our differentiation:** We go beyond "do you need it?" to "given that operators already deploy it, how should it be architected, regulated, staffed, and certified?" — a post-adoption question.

**What this paper adds that no existing survey does:**
1. **Regulatory synthesis across 8 jurisdictions** with explicit requirement-to-architecture mapping (no prior survey covers UN GTR 2026 + China GB 2026 draft + German StVFernLV + UK AV Act in one framework)
2. **Incident-grounded analysis using the ROAM open incident database** (structured coding of Cruise 2023, Waymo SF 2025, Apollo Go Wuhan 2026, Pony.ai Beijing) — no prior survey performs comparative incident coding
3. **Cross-domain knowledge transfer from military UAV + DJI industrial drones**, citing Cummings (2026) and DJI productized solutions, providing the first systematic UAV-to-Robotaxi operational lessons mapping in an IEEE journal
4. **A reference architecture with open-source baseline** (ROAM framework on GitHub), contrasting with the "isolated silos" of Waymo/Tesla/Baidu proprietary systems — this is the paper's signature contribution

---

## 3. Full Section Outline (8 sections, 12,000–15,000 words)

| # | Section | Word Target | Purpose |
|---|---------|-------------|---------|
| 1 | Introduction | 1,500 | Motivation via anchor incidents; research questions; contributions; paper organization |
| 2 | Systematic Review Methodology | 1,200 | PRISMA protocol; search strategy; inclusion/exclusion; quality assessment |
| 3 | International Regulatory Landscape | 2,000 | 8 jurisdictions: UN WP.29/GRVA, China GB+local, US NHTSA, UK AV Act, German StVFernLV, Japan SIP-adus, EU AI Act touchpoints, Singapore LTA |
| 4 | Industry Practice: Comparative Architecture Analysis | 2,000 | Waymo, Tesla, Baidu Apollo, Pony.ai, Vay, Ottopia — architecture, operator ratios, control modes |
| 5 | Academic Research Frontiers | 1,800 | Latency, indirect control, trust calibration, human roles taxonomy, control center frameworks |
| 6 | Empirical Incident Analysis | 1,500 | ROAM incident database; four anchor incidents coded; cross-incident patterns; severity distribution |
| 7 | Cross-Domain Lessons: Military UAV + DJI Heritage | 1,800 | Cummings 2026 + DJI productization; 5-lesson framework; Zhuoyu structural advantage |
| 8 | Research Gaps, Open Baselines, Future Directions | 1,200 | Six identified gaps; ROAM as open baseline; ROaaS commercial model; 2026–2030 roadmap |
| — | Conclusion | 300 | Restate contributions; call to action for open collaboration |

**Flexibility buffer:** Sections 3, 4, 7 can each absorb ±200 words; Section 5 (academic frontiers) is the compressible reserve if total length pressure requires cuts during copy-edit.

---

## 4. Six-Week Writing Timeline (2026-04-05 to 2026-06-30)

**Week 1 (2026-04-05 to 2026-04-11): Foundation**
- Finalize PRISMA search queries and execute across 4 databases
- Complete reference harvest (target: 70+ candidates, filter to 50–65)
- Draft Sections 1 (Introduction) + 2 (Methodology)
- Deliverable: Draft-v0.1 (intro + methodology, ~2,700 words)

**Week 2 (2026-04-12 to 2026-04-18): Regulatory + Industry**
- Draft Section 3 (Regulatory Landscape) — reuse content from ROAM literature-review + related-standards.md
- Draft Section 4 (Industry Practice) — build comparative operator table
- Finalize regulatory timeline figure
- Deliverable: Draft-v0.2 (intro + methods + sections 3,4; ~6,700 words)

**Week 3 (2026-04-19 to 2026-04-25): Academic + Incidents**
- Draft Section 5 (Academic Frontiers) — integrate Hofbauer, Lu, Majstorovic, Wolf, Kim, Cui, Koopman
- Draft Section 6 (Incident Analysis) — code ROAM incident database entries
- Build incident distribution figures
- Deliverable: Draft-v0.3 (~10,000 words)

**Week 4 (2026-04-26 to 2026-05-02): Cross-Domain + Gaps**
- Draft Section 7 (UAV Heritage) — adapt uav-lessons-learned.md
- Draft Section 8 (Gaps + Future)
- Draft Conclusion
- Deliverable: Draft-v0.4 (complete first draft, ~12,500 words)

**Week 5 (2026-05-03 to 2026-05-16): Figures + Tables + Internal Review**
- Finalize all 8–12 figures and 6–10 tables
- Internal review round with 2 collaborators (Zhuoyu Chief Scientist + Jilin PhD student)
- Incorporate feedback
- Deliverable: Draft-v0.5 (figures/tables complete, internally reviewed)

**Week 6 (2026-05-17 to 2026-05-30): Polish + Submit**
- Professional English edit pass
- Format to IEEE T-IV LaTeX template
- Compile BibTeX, verify DOIs, generate graphical abstract + author bio
- Submit via IEEE Author Center
- Deliverable: Submission package uploaded

**Buffer (2026-05-31 to 2026-06-30):** Reserved for revision of any unforeseen issues + optional co-author round-robin.

---

## 5. PRISMA Systematic Review Methodology

We follow PRISMA 2020 (Page et al., *BMJ* 2021) for the literature harvest in Section 5 (Academic Frontiers) and the regulatory/industry scan in Sections 3–4 and 7.

**Registration:** This is a narrative systematic review; protocol is documented in this plan (not pre-registered on PROSPERO as that registry is health-science focused).

**Databases searched:** IEEE Xplore, ScienceDirect (Elsevier), ACM Digital Library, Google Scholar (top 100 results), Web of Science, plus regulatory databases (UNECE, NHTSA, EUR-Lex, CarNewsChina).

**Time window:** 2018-01-01 to 2026-04-15. Earlier seminal works (e.g., SAE J3016:2014) cited but not counted in the systematic harvest.

**PRISMA flow (target numbers):**
- Records identified: ~450
- After de-duplication: ~320
- Title/abstract screening: ~180 retained
- Full-text assessment: ~90 retained
- Included in synthesis: 50–65

**Eligibility criteria:** See Section 2 of the methodology file (02-methodology.md).

**Quality assessment:** 5-point rubric adapted from PRISMA-QA, scoring reproducibility, empirical grounding, theoretical contribution, currency, and peer-review status.

---

## 6. Key Novelty Claims — Four Contributions

**C1. First cross-jurisdictional regulatory synthesis for robotaxi remote operations.** We map the requirements of UN GTR ADS (2026 draft), China GB ADS Safety (2026 draft), UK AV Act 2024, German StVFernLV (Dec 2025), NHTSA SGO + 2025 AV Framework, Japan SIP-adus, and Singapore LTA sandbox rules onto a unified requirement taxonomy (communication, operator qualification, MRM, data retention, liability). No prior survey performs this cross-mapping post-2025.

**C2. First empirically-grounded comparative architecture analysis using structured incident coding.** We code four anchor incidents (Cruise 2023, Waymo SF 2025, Apollo Go Wuhan 2026, Pony.ai Beijing 2025) against a common 7-dimension schema (trigger, detection latency, intervention path, MRM outcome, severity, systemic-vs-isolated, recovery time) and contrast against operator architectural choices. This yields the first incident-to-architecture causal attribution in the literature.

**C3. First cross-domain transfer framework from military UAV + industrial drone operations to robotaxi remote operations.** Building on Cummings (2026) and DJI productized solutions, we formalize five lessons (latency physical ceiling, workstation UX, operator workload inversion, KSA certification, contingency drills) and quantify the structural advantage of drone-heritage operators (Zhuoyu/DJI) vs. pure-AV-background operators.

**C4. An open-source reference architecture + baseline (ROAM) to replace isolated proprietary silos.** The paper introduces ROAM as an open baseline with modular three-layer decision architecture, standardized incident schema, scenario taxonomy aligned with ISO 34502, and evaluation benchmarks. This transforms remote operations from a competitive moat into a shared safety infrastructure, mirroring the CVE database pattern in cybersecurity.

---

## 7. Risk Register

| Risk | Likelihood | Mitigation |
|------|-----------|-----------|
| UN GTR adopted June 2026 changes regulatory section | Medium | Draft Sec 3 with placeholder for "as of April 2026"; revise in proofs |
| Tesla/Baidu publish own remote-ops architecture disclosures | Low | Include as "2026-Q2 update" if published pre-submission |
| Reviewers demand proprietary incident data access | Medium | Emphasize ROAM open-source ethos as positive, not limitation |
| Word count overrun (14k → 16k) | High | Section 5 is compressible reserve; supplementary appendix for extended tables |
| Competing T-IV survey submission | Low | Monitor IEEE Xplore Early Access weekly; preemptive posting on arXiv if needed |

---

## 8. Supplementary Materials Plan

- **Appendix A (online only):** Full PRISMA flow diagram with exclusion reasons
- **Appendix B (online only):** Extended regulatory comparison table (25 columns × 8 jurisdictions)
- **Appendix C (online only):** Complete incident coding sheets (one page per incident)
- **Appendix D (online only):** ROAM reference architecture module specifications
- **GitHub companion:** github.com/zyx312/ROAM — incident database, scenario taxonomy YAML, reference architecture diagrams, evaluation benchmarks

---

*Plan drafted 2026-04-05. Revision 1 due 2026-04-18 after Week-1 literature harvest completes.*
