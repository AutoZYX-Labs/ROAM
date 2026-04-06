# Sections 3–8 Detailed Outlines

**Paper:** From Isolated Silos to Open Baselines
Each outline: ~500 words, mapping the argument structure, key citations, and figures/tables for that section.

---

## Section 3 — International Regulatory Landscape (~2,000 words)

**Argument:** No prior survey synthesizes the 2024–2026 regulatory wave across jurisdictions. We map eight regulatory instruments onto a unified requirement taxonomy with five dimensions: communication, operator qualification, MRM, data retention (DSSAD), and liability allocation. The synthesis reveals two emerging convergences — a "competent and careful human driver" safety baseline (UN GTR, UK AV Act) and explicit MRM-on-comm-loss requirements (China GB, German StVFernLV) — and three persistent divergences (permitted control modes, operator ratio caps, cross-border data flows).

**Sub-sections:**

**3.1 UN WP.29/GRVA Draft GTR on ADS (Jan 2026).** The *Global Technical Regulation* centers on a "competent and careful human driver" baseline and requires deployers to submit a Safety Case incorporating a Safety Management System (SMS). Implicit remote-operations requirements: the Safety Case must address residual risks of remote intervention, and the SMS must encompass operator protocols [5–7].

**3.2 China — GB Draft ADS Safety + Local Legislation.** The GB draft (February 2026) Appendix C.2 defines remote assistance requirements: prohibits ADS from relying on remote assistance for DDT, sets communication-quality thresholds (signal strength, latency, jitter), mandates MRM on comm failure, and specifies information-exchange content. Appendix D defines Safety Case structure with quantitative residual risk targets (collision rate < 10⁻⁴/h, fatality rate < 10⁻⁷/h). Effective July 1, 2027 [8]. The Ministry of Transport sets remote safety-operator-to-vehicle ratio at maximum 1:3 [9]. Shenzhen (2022) and Beijing (2025) provide local ICV legislation [10, 11].

**3.3 US — NHTSA SGO + AV Framework.** The Standing General Order (2021, amended 2024) mandates 30-second crash reporting for ADS-equipped vehicles. The April 2025 AV Framework streamlined reporting procedures while preserving safety baselines [12–14]. The Cruise Consent Order (2024) established precedent for fleet-recall remedies.

**3.4 UK — Automated Vehicles Act 2024.** Royal Assent May 2024. Establishes the Authorised Self-Driving Entity (ASDE) role and distinguishes User-in-Charge (UIC) vs. No-User-in-Charge (NUIC) modes. Safety standard: "equal to or higher than careful and competent human drivers" [15–17]. Commercial pilot operations targeted for spring 2026.

**3.5 Germany — StVFernLV (Dec 2025).** Europe's first comprehensive teleoperated-driving ordinance. Permits remote-controlled operation up to 80 km/h in approved zones for a 5-year trial. Specifies operator qualification, communication redundancy, and working-hour limits [18–20]. Vay Technology is the primary initial beneficiary.

**3.6 Japan — SIP-adus.** Launched 2014 as the Cross-ministerial Strategic Innovation Promotion Program. Incorporates remote monitoring and control as essential capability for automated buses; conducts systematic field operational tests with RSU + vehicle camera coordination [21, 22]. Provides the deepest public record of low-speed remote operations deployment.

**3.7 EU — AI Act Touchpoints + Type-Approval Regulations.** The EU AI Act (in force August 2024) classifies automated driving AI components as high-risk, imposing documentation, post-market monitoring, and human-oversight requirements that touch remote operations. EU-level type-approval provisions for automated vehicles (GEAR 2030 follow-ups) create secondary constraints.

**3.8 Singapore — LTA Sandbox and ASEAN Harmonization.** Singapore's Land Transport Authority operates a regulatory sandbox for AV deployment on designated routes, with remote operations provisions embedded in the Road Traffic Act amendments. ASEAN-level harmonization efforts are nascent but worth tracking.

**Cross-jurisdiction synthesis table:** Table 1 (see 04-figures-tables-plan.md) cross-tabulates the eight jurisdictions against five requirement dimensions.

**Key figure:** Figure 3 — Regulatory timeline (2018–2027) showing instrument enactment and effective dates.

**Closing insight:** Convergence on communication-reliability and MRM requirements is emerging; divergence on control-mode permissiveness (Germany allows direct remote driving up to 80 km/h; China prohibits DDT reliance) will likely persist through 2030.

---

## Section 4 — Industry Practice: Comparative Architecture Analysis (~2,000 words)

**Argument:** Six operators (Waymo, Tesla, Baidu Apollo, Pony.ai, Vay, Ottopia) have deployed measurably distinct remote operations architectures. We compare them on five axes — control mode, operator ratio, workstation UX, latency budget, contingency architecture — and attribute incident outcomes to these architectural choices.

**4.1 Waymo Fleet Response.** Advisory model: ADS retains full vehicle control; remote agents provide contextual information only. ~3,000 vehicles, ~70 on-duty agents, ~1:41 ratio. Centers in Arizona, Michigan, and the Philippines. US-center median latency ~150 ms; Philippines ~250 ms. Published independent safety audit (Nov 2025). Weakness exposed by SF December 2025 outage [25–27].

**4.2 Tesla Teleops.** Direct-control model: remote operators can assume full vehicle control, speed-capped at 10 mph (~16 km/h). Austin launch June 2025, unsupervised transition January 2026. Custom teleoperation system; expansion to seven cities H1 2026 [28–30]. Latency-bandwidth criticality substantially higher than Waymo model.

**4.3 Baidu Apollo Go.** Chinese regulatory constraint (1:3 ratio) shapes architecture. Q4 2025: 3.4M orders. Wuhan March 2026 shutdown exposed systemic deficiencies: no dedicated roadside team, ineffective remote intervention, non-functional SOS buttons, overloaded customer service [3, 4, 31]. Architecture treats remote assistance as exception-handling rather than first-class capability.

**4.4 Pony.ai.** Operates in Beijing, Guangzhou, Shanghai; Beijing ops temporarily suspended after vehicle fire incident [40]. Architecture approximates Waymo's advisory model with stricter regulatory compliance (1:3 ratio).

**4.5 Vay Technology.** Teleoperated-first (not autonomy-first) rental model in Las Vegas: 30 vehicles, 17,000+ trips by July 2025 [32]. Direct remote driving for relocation, autonomous transition possible but not required. Beneficiary of German StVFernLV.

**4.6 Ottopia, GetUgo, and Teleoperation Startups.** Ottopia: AI-powered teleoperation platform supporting collaborative human-machine intervention. GetUgo: end-to-end encrypted communication. ~13 companies globally in the AV teleoperation startup ecosystem [33, 34].

**Comparative table:** Table 2 — six-operator comparison across five architectural axes plus deployment scale.

**Key figure:** Figure 4 — architecture diagram overlay comparing Waymo advisory vs. Tesla direct-control vs. Vay teleop-first.

**Closing insight:** The three architectural families (advisory, direct-control, teleop-first) imply fundamentally different regulatory classifications and different failure modes; no single "best" architecture — choice depends on ODD, regulatory regime, and operational economics.

---

## Section 5 — Academic Research Frontiers (~1,800 words)

**Argument:** Five research streams address the technical constraints of remote operations. We synthesize them into an integrated view.

**5.1 Network Latency and Communication.** Hofbauer et al. (2024) systematic review: operator performance degrades significantly beyond 300 ms end-to-end latency; current cellular networks exhibit substantial urban variance [35]. 5G URLLC mitigations explored but not yet deployed at scale.

**5.2 Indirect Control and Waypoint Setting.** Kim et al. (2025): waypoint-setting-based tele-operated driving assistance elevates operator role from low-level control to high-level path decisions, reducing latency sensitivity [36]. Alternative to direct-steering paradigm.

**5.3 Control Center Architecture.** Wolf et al. (2025, IEEE IV): modular control-center framework with situation-awareness, communication-management, and task-allocation modules provides an engineering reference [37].

**5.4 Trust Calibration for AI Decision-Making.** Cui et al. (2026, C-TRAIL): commonsense world framework with Adaptive Trust Calibration using EMA-based reward-adaptive decay [43]. Direct application to ROAM Layer 1 (AI Autonomous) confidence-threshold escalation.

**5.5 Human Roles Taxonomy.** Koopman (April 2026): six-role × two-location = twelve-combination framework challenging the "assistant vs. driver" dichotomy. Critiques AVSC's position that remote assistance bears no DDT safety responsibility as "accountability laundering" [44].

**5.6 Foundational Surveys.** Lu et al. (2022, IEEE MASS) and Majstorovic et al. (2022, IEEE SMC) provide the principal prior art [38]; both predate the 2024–2026 regulatory wave.

**Key figure:** Figure 5 — integrated view of five research streams and their cross-links.

**Closing insight:** Latency research assumes direct control; indirect control sidesteps it; Koopman's framework reframes the question from "who is in control?" to "who bears responsibility for which decisions?" — and this reframing has direct regulatory consequences.

---

## Section 6 — Empirical Incident Analysis (~1,500 words)

**Argument:** Four anchor incidents, coded using a seven-dimension schema, reveal structural patterns that cannot be seen from narrative retellings.

**6.1 The Seven-Dimension Coding Schema.** (i) Trigger (perception / comm / power / software / traffic-environment / human-intervention), (ii) Detection Latency (time from trigger to human awareness), (iii) Intervention Path (operator command / ADS fallback / police / passenger), (iv) MRM Outcome (successful / partial / failed), (v) Severity (NHTSA severity taxonomy), (vi) Systemic vs Isolated, (vii) Recovery Time (to full service restoration).

**6.2 Coded Incidents.**
- **Cruise SF October 2023:** Isolated, perception trigger, failed MRM, high severity (injury), ~60s detection latency.
- **Waymo SF December 2025:** Regional, comm trigger, partial MRM, low severity (no injury), operational disruption.
- **Apollo Go Wuhan March 2026:** Systemic, software/platform trigger, failed fleet-wide MRM, moderate severity (traffic disruption, no reported injury), recovery ~hours.
- **Pony.ai Beijing 2025:** Isolated, hardware trigger (fire), partial MRM, service suspension follow-on.

**6.3 Cross-Incident Patterns.**
- Systemic failures (Apollo Go) have no precedent handling in existing operator playbooks
- Detection latency scales with architectural distance (remote centers, cross-border ops)
- MRM effectiveness drops sharply when triggers involve operations-center or network layer rather than vehicle layer

**6.4 Severity Distribution + Broader Data.** NHTSA crash database (Waymo 1,429 accidents July 2021–November 2025, 117 injuries, 2 fatalities [39]) provides aggregate context.

**Key figure:** Figure 6 — incident distribution scatterplot (x-axis: detection latency; y-axis: severity; marker: systemic/isolated).

**Closing insight:** Current remote operations architectures are calibrated for isolated-perception incidents (Cruise-class) and handle regional-comm incidents (Waymo-class) poorly; they are entirely unprepared for systemic common-cause incidents (Apollo-class). This asymmetry is the most important empirical finding of the review.

---

## Section 7 — Cross-Domain Lessons from UAV Heritage (~1,800 words)

**Argument:** 35+ years of military UAV operations and 30 years of DJI industrial drone productization provide a reference baseline that robotaxi remote operations have yet to systematically exploit.

**7.1 The Five UAV Lessons.** (i) Latency physical ceiling (human neuromuscular lag 200–500ms); (ii) Workstation UX determines outcomes (Army Shadow 80% crashes from interface, Global Hawk 1 loss to HF); (iii) Operator workload faces an order-of-magnitude gap; (iv) KSA-based training and certification is necessary; (v) Contingency drills must be mandatory, not documentary [45].

**7.2 DJI's Productized Solutions.** OcuSync/O4 (15ms video latency, physical-layer transmission) [46]; FlightHub 2 Virtual Cockpit (three-panel, keyboard+mouse, replaces gamepads) [47]; Dock 2 (IP55, dual RTK, auto return-to-dock) [48]; UTC (200+ centers, 40k+ certified pilots) [49].

**7.3 Latency Budget Application to Robotaxi.** Layer-3 remote driving: <150 ms, dedicated physical-layer link, speed cap ≤10 km/h. Layer-2 AI-assisted: <500 ms, commercial cellular OK. Layer-1 AI autonomous: no latency dependency (edge-local).

**7.4 Operator-to-Vehicle Ratio Rethink.** Waymo's 1:29 ratio shows no improvement in incident resolution times (t=−0.217, p=0.82 per Cummings 2026 [45]). DJI Dock model suggests tier-separation: Tier-1 routine supervision 1:100+, Tier-2 emergency response 1:20.

**7.5 Zhuoyu Structural Advantage.** Chinese robotaxi operator inheriting DJI's drone remote operations stack; low-latency transmission, workstation UX, certification infrastructure, and edge+cloud architecture maturity cannot be easily replicated by pure-AV-background competitors.

**Key figure:** Figure 7 — UAV-to-Robotaxi lessons mapping diagram.

**Closing insight:** Robotaxi remote operations repeat early-UAV mistakes the drone industry already solved. Borrowing drone engineering is not optional; it is the fastest path to operational safety at scale.

---

## Section 8 — Research Gaps, Open Baselines, Future Directions (~1,200 words)

**Argument:** The review identifies six research gaps, and we propose ROAM as an open-source baseline to replace isolated proprietary silos.

**8.1 Six Research Gaps.**
1. Systemic failure response architecture absent
2. Terminology divergence between "remote assistance" and "remote driving"
3. Operator ratio economics (Waymo 1:41 vs. China 1:3, >10× gap)
4. Communication latency bounds (Philippines 250 ms)
5. Liability attribution ambiguity (ASDE clearest; others evolving)
6. Naturalistic behavior baselines missing (esp. China urban scenarios)

**8.2 The Open-Baseline Proposition.** CVE database analogy: cybersecurity transformed from proprietary silos to shared infrastructure once a common vocabulary and standardized reporting existed. Robotaxi remote operations can follow the same trajectory.

**8.3 ROAM as Proposed Baseline.** Four modules: Incident Database (structured YAML schema compatible with NHTSA SGO fields), Scenario Taxonomy (ISO 34502-aligned, six top-level categories), Reference Architecture (modular three-layer decision model + personnel roles from Koopman framework), Evaluation Benchmarks (KPIs for operator comparison).

**8.4 The Remote Operations as a Service (ROaaS) Roadmap.**
- Near-term (2026–2028): standards crystallize; ROAM accumulates structured data.
- Mid-term (2028–2030): third-party remote operations service providers emerge; robotaxi insurance products launch.
- Long-term (2030+): three-party ecosystem (operators + ROaaS + insurers); data-driven risk pricing.

**8.5 Call to Collaborate.** Open repository at github.com/zyx312/ROAM. Invite incident contributions, architecture extensions, and benchmark participation.

**Key table:** Table 6 — Research gaps vs. ROAM modules mapping.

**Closing insight:** Proprietary silos protected early-stage commercial positioning but now impede industry maturation. Open baselines are the fastest path forward — not because they are ideologically preferable, but because the CVE analogy proves they are operationally effective.

---

*End of Sections 3–8 outlines. Each section will be expanded to full word targets during Weeks 2–4 of the writing timeline (see 00-paper-plan.md).*
