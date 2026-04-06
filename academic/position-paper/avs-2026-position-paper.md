# The Case for an Open Baseline: Why the Robotaxi Industry Urgently Needs a Shared Framework for Remote Operations Safety

**Author:** Yuxin Zhang
**Affiliations:** Jilin University College of Automotive Engineering / Zhuoyu Technology (formerly DJI Automotive) / DRIVEResearch
**Target Venue:** Automated Vehicles Symposium (AVS) 2026
**Paper Type:** Position Paper, 6-8 pages IEEE double-column format (~5000 words)

---

## Abstract

On March 31, 2026, nearly 100 Baidu Apollo robotaxis simultaneously shut down on Wuhan's elevated highways. Passengers were trapped for two hours. SOS buttons went unanswered. The only resolution was police officers rescuing vehicles one by one. Three months earlier, a power outage in San Francisco stranded Waymo's fleet, while emergency services waited a combined 2.5 hours on the operator's hotline. These incidents are not anomalies—they are previews of what happens when L4 robotaxi fleets scale without a shared baseline for remote operations safety. Each operator currently builds isolated remote operations silos following entirely different philosophies, with no cross-operator learning, no standardized incident taxonomy, and no independent way for regulators to compare safety performance. This paper argues that the robotaxi industry urgently needs an open baseline framework for remote operations—a shared structural foundation that individual operators can build upon without duplicating foundational work. We introduce ROAM (RoboTaxi Operations Anomaly Management), an open-source baseline comprising four modules: a structured incident database, a scenario taxonomy, a three-layer reference architecture, and evaluation benchmarks. Drawing on 35 years of military UAV remote operations lessons (Cummings, 2026) and DJI's 30 years of productized drone remote operations, we show that the robotaxi industry is repeating known mistakes. We call for regulators, operators, OEMs, and researchers to converge on an open baseline before the next systemic failure.

**Keywords:** L4 Robotaxi, remote operations, teleoperation, scenario taxonomy, open-source baseline, UAV heritage, insurance pricing

---

## 1. Introduction: The Remote Operations Blind Spot

On March 31, 2026, at 20:57 local time, nearly 100 Baidu Apollo Go robotaxis simultaneously stopped functioning on Wuhan's elevated expressway network—the Erhuanxian Yangsigang Bridge, Baishazhou Bridge, and Sanhuanxian. Multiple vehicles froze side-by-side in the leftmost lanes, compressing three-lane roads to one. Traffic collapsed into what Wuhan Traffic Police officially terms a "liver-red" level of congestion. Passengers trapped inside vehicles pressed SOS buttons that went unanswered; customer service lines were overloaded. After two hours, the situation was resolved only because police officers physically walked from vehicle to vehicle [1, 2].

Three months earlier, on December 20, 2025, a regional power outage in San Francisco exposed a parallel vulnerability. Waymo's fleet was simultaneously affected: dozens of vehicles stalled in traffic, blocking intersections and bus lanes. Emergency services called Waymo's first-responder hotline 31 times, accumulating 2 hours 36 minutes of combined wait time [3, 4]. San Francisco 311 logged 20 reports of stranded Waymo vehicles between 4:30 PM and 10:00 PM that evening.

These are not isolated incidents. They are two data points in a pattern that includes the October 2023 Cruise pedestrian dragging incident (which resulted in a USD 1.5M NHTSA fine, a nationwide fleet recall, and Cruise's subsequent exit from robotaxi operations) [5]; the recurring "two-Waymo-blocking-each-other" incidents in San Francisco; and Waymo's acknowledgment that first responders have taken control of stuck Waymo vehicles at least six times in 2026 alone [6].

**The pattern is clear: robotaxi remote operations are a safety-critical capability that the industry has not adequately addressed.**

Meanwhile, deployment accelerates. Baidu Apollo Go completed 3.4 million orders in Q4 2025 [7]. Waymo operates 3,000+ vehicles with approximately 70 operators—a 1:41 operator-to-vehicle ratio [8]. Tesla launched unsupervised robotaxi operations in January 2026 with direct remote control capability up to 10 mph. Every major operator has a remote operations capability. None of them share a common framework.

**This paper argues four claims:**

1. **Remote operations are a blind spot in robotaxi safety governance.** Existing regulations treat remote operations as an implementation detail of individual operators, not as critical safety infrastructure requiring industry-wide standards.

2. **Each operator's isolated approach creates systemic risk.** Without shared taxonomies, architectures, and benchmarks, failures in one operator cannot inform the practices of others. The Wuhan event and the SF blackout would likely repeat with different operators because the industry has no mechanism for structured learning across operators.

3. **The industry is repeating mistakes made 25-30 years ago in the UAV domain.** Cummings (2026) synthesized five lessons from 35 years of military UAV remote operations—latency, workstation design, operator workload, training, contingency planning [9]. Waymo's and Baidu's failures map precisely onto these known failure modes.

4. **An open-source baseline framework can close this gap.** We propose ROAM as a starting point: a structured incident database, scenario taxonomy, reference architecture, and evaluation benchmarks that any operator can build upon.

The paper is organized as follows. Section 2 analyzes the current fragmented state of remote operations and identifies six systemic gaps. Section 3 argues that the current regulatory window makes this the right moment to converge on a baseline. Section 4 describes the ROAM framework and its alignment with existing regulations. Section 5 issues specific calls to action for operators, OEMs, regulators, and researchers. Section 6 concludes.

---

## 2. The Problem: Fragmented, Opaque, Unproven

### 2.1 The Current State of Remote Operations

Four operators dominate global robotaxi remote operations, and they follow four fundamentally different philosophies:

**Waymo: Fleet Response as Advisory Service.** Waymo's remote operators do not have driving controls. They receive contextual information requests from the autonomous driving system (ADS) and respond with semantic information (e.g., "that lane is closed," "that object is a traffic cone"). The ADS retains full control [10]. Median one-way latency is ~150ms for US centers and ~250ms for Waymo's operations in the Philippines.

**Tesla: Teleops with Direct Control.** Tesla's remote operators can assume direct vehicle control at speeds up to 10 mph in rare cases, framed as "the final escalation after all other intervention actions have been exhausted" [11]. This design inverts Waymo's philosophy.

**Baidu Apollo Go: Opaque Operational Model.** Baidu has not published its remote operations architecture. The Wuhan event revealed that Baidu's 3.4 million-order-scale operation did not have a proprietary road rescue team, effective remote intervention, or a functioning SOS system [1].

**Pony.ai / WeRide / Others:** Similarly opaque, operating under general guidelines from Chinese regulators without publicly disclosed remote operations specifications.

### 2.2 Six Systemic Gaps

Analysis of published incidents, regulatory documents, and academic literature identifies six structural gaps shared across operators:

**Gap 1: No mechanism for systemic failure response.** When a cloud platform, network backbone, or power infrastructure fails simultaneously across many vehicles, no operator has demonstrated an effective response. The Wuhan event and SF blackout confirm this gap is industry-wide.

**Gap 2: Terminology chaos between "assistance" and "driving."** SAE J3016 deliberately avoids "teleoperation" because the term has inconsistent meanings [12]. ISO 22737 defines a "Driverless Operation Dispatcher" role [13]. China's draft GB standard uses "远程协助" (remote assistance). Germany's StVFernLV specifically covers remote direct driving. This terminological fragmentation prevents cross-jurisdiction comparison and creates liability ambiguity [14].

**Gap 3: Order-of-magnitude disagreement on operator-to-vehicle ratios.** Waymo operates at approximately 1:41 [8]. Chinese regulations mandate a maximum of 1:3 [15]. This is not a gradual convergence toward a shared standard—it reflects fundamentally different beliefs about what remote operators do and whether AI can reliably substitute for them. Cummings documents that 35+ years of US military investment has not achieved 1-operator-to-many-UAV ratios even with intensive R&D, because of cognitive switching costs [9].

**Gap 4: Communication security and latency constraints are unmeasured.** Current systems use best-effort cellular networks. Waymo's Philippine operations center adds ~100ms of cross-border latency that materially affects decision quality. No operator publishes latency distributions or communication reliability metrics.

**Gap 5: Legal liability allocation is ambiguous.** The UK Automated Vehicles Act 2024's ASDE (Authorised Self-Driving Entity) framework is the clearest globally, placing responsibility on the entity making driving decisions. But most jurisdictions—including China's national framework—still lack explicit liability assignment for remote operator decisions [16]. When a remote decider tells a Waymo to turn left into oncoming traffic [17], who bears liability?

**Gap 6: Naturalistic driving behavior baselines are missing.** China's draft GB standard sets residual risk criteria at 10⁻⁴ collisions per hour, 10⁻⁷ fatalities per hour [15]. These criteria require human driver behavioral baselines as a reference. Yet credible large-scale naturalistic driving datasets for specific Chinese urban environments remain scarce.

[Figure 1: ROAM Four Modules mapped to Six Systemic Gaps]

---

## 3. Why Now: The Regulatory and Technical Window

### 3.1 Regulatory Convergence

Multiple regulatory frameworks are converging on operational requirements that directly implicate remote operations:

- **UN WP.29/GRVA GTR on ADS** was adopted in draft form in January 2026, with formal adoption targeted for June 2026. It requires manufacturers to submit a Safety Case with a Safety Management System, implicitly requiring documentation of remote operations architecture [18].

- **China's draft GB standard** (智能网联汽车 自动驾驶系统安全要求, February 2026 public consultation draft) includes Appendix C.2 "Remote Assistance," specifying that ADS shall not depend on remote assistance for DDT execution, communication requirements (signal strength, latency, jitter), and information exchange requirements [15]. The mandatory standard takes effect July 1, 2027.

- **UK Automated Vehicles Act 2024** creates the ASDE concept and explicitly distinguishes User-in-Charge (UIC) and No-User-in-Charge (NUIC) operations—commercial pilots are targeted from Spring 2026 [14].

- **Germany's StVFernLV** (December 2025) is Europe's first regulation specifically covering teleoperated direct driving, permitting remote-controlled vehicles up to 80 km/h in approved operating areas [19].

This regulatory activity creates a 12-18 month window during which industry input can materially shape implementation. After 2028, frameworks will harden and changes become much more costly.

### 3.2 Intellectual Foundations Becoming Available

Two recent works provide critical intellectual scaffolding:

- **Koopman (April 2026) "Human Roles in AVs and Embodied AI Systems"** introduces a six-role × two-location framework (Operator, Supervisor, Decider, Responder, Standby, Maintainer × On-site/Remote) that explicitly challenges the industry's "assistant vs. driver" dichotomy. Koopman argues that remote Deciders bear substantive safety responsibility and that "accountability laundering" (attributing decisions to AI computers) is illegitimate [20].

- **Cummings (2026) "What self-driving companies should learn from drone remote operations"** synthesizes 35+ years of military UAV experience into five lessons (latency, workstation, workload, training, contingency), explicitly mapping each to current robotaxi failures [9].

Neither framework exists in isolation. Together, they provide the conceptual and empirical foundation for a shared industry baseline.

### 3.3 Technical Proofs-of-Concept Exist

DJI's productized drone remote operations stack demonstrates that the technical challenges identified by Cummings are solvable:

- **OcuSync/O4 video transmission** achieves 15ms end-to-end video latency through physical-layer direct connection, 15km range with adaptive frequency hopping across 5.170-5.250 GHz and 5.725-5.850 GHz bands [21].
- **DJI Dock 2** enables autonomous drone operations with IP55 weather resistance, dual RTK antennas, battery backup, and automatic return-to-dock on communication loss [22].
- **DJI FlightHub 2 Virtual Cockpit** provides a three-panel operator workstation (map + telemetry + controls) with keyboard+mouse input and force-resistant actuation [23].
- **DJI UTC (Unmanned Aerial System Training Centers)**—200+ global training centers with 40,000+ certified pilots—demonstrates that large-scale operator certification is achievable [24].

Entities with drone-industry heritage (e.g., Zhuoyu Technology, formerly DJI Automotive) hold native advantages in these technical dimensions that pure-AV-background operators cannot easily replicate. This cross-domain knowledge transfer is a critical lever for rapid industry maturation.

---

## 4. The Proposal: ROAM Open Baseline

### 4.1 Four Modules

ROAM (RoboTaxi Operations Anomaly Management) is an open-source baseline framework comprising four interconnected modules:

**Module 1: Incident Database.** Structured YAML records of L4+ robotaxi operational anomalies, with verifiable source URLs, scenario codes, severity (S0-S4), and urgency (U0-U3) classifications. Current database includes 16 incidents across four operators (Waymo, Cruise, Baidu Apollo, Pony.ai) spanning 2023-2026.

**Module 2: Scenario Taxonomy.** Six categories (System-Wide Failure, Perception/Decision Failure, Planning/Execution Anomaly, Vehicle Hardware Failure, External Conflict, Passenger-Side Issue) × 27 sub-scenarios, aligned with ISO 34502 scenario classification methodology and China's GB standard Table D.1 hazard categories.

**Module 3: Reference Architecture.** Three-layer decision model:
- Layer 1 (AI Autonomous Response, target 70%): Edge-local decisions without network dependency
- Layer 2 (AI-Assisted + Human Confirm, target 25%): AI generates action plan, remote operator reviews
- Layer 3 (Remote Driving / On-Site Dispatch, target 5%): Direct teleoperation ≤10 km/h or physical rescue dispatch

**Module 4: Evaluation Benchmarks.** Eight KPIs with target values: MTTR (<5min AI, <15min human), AI resolution rate (>70%), false escalation rate (<10%), missed escalation rate (<1%), passenger trapped duration (<10min), traffic recovery time (<20min), operator-to-vehicle ratio (1:80-1:100 target), scenario coverage rate (>90%).

[Figure 2: Three-Layer Architecture + Six-Role Human Responsibilities Mapping]

### 4.2 Regulatory Alignment

Table 1 maps ROAM modules to existing regulations:

| ROAM Module | China GB Standard | UN GRVA GTR | UK AV Act | German StVFernLV |
|-------------|-------------------|-------------|-----------|------------------|
| Incident Database | Appendix D Safety Case evidence | Safety Case documentation | ASDE incident reporting | Operator reporting |
| Scenario Taxonomy | Appendix D Table D.1 hazards | Hazard identification | - | Operational domain |
| Reference Architecture | Appendix C.2 remote assistance | Safety Management System | NUIC operation modes | Teleoperation framework |
| Evaluation Benchmarks | Residual risk criteria (10⁻⁴/h etc.) | "Competent and careful driver" | Safety equivalence | Operational metrics |

### 4.3 Cross-Domain Integration: UAV Heritage

[Figure 3: UAV-to-Robotaxi Lesson Mapping, showing Cummings' five lessons mapped to DJI's productized solutions and ROAM's architecture modules]

ROAM systematically incorporates the DJI/UAV engineering lessons that Cummings identifies as missing from current robotaxi operations: physical-layer low-latency transmission (vs. best-effort cellular), three-panel workstation UI (vs. ad-hoc gaming controllers), pilot-grade certification (vs. internal training), and graceful-degradation contingency planning (vs. cloud-dependent architectures).

---

## 5. Call to Action

### 5.1 For Robotaxi Operators (Waymo, Baidu, Pony.ai, WeRide, Tesla, etc.)

**Short-term (2026):**
1. Adopt ROAM scenario taxonomy for internal incident classification; publish taxonomy-mapped incident summaries.
2. Publish operator-to-vehicle ratios and latency distributions for transparency.
3. Contribute incidents to the open database (with appropriate anonymization).

**Medium-term (2026-2027):**
4. Implement the three-layer reference architecture as a comparative baseline.
5. Adopt the KPI framework and publish quarterly performance reports.
6. Participate in cross-operator incident review.

### 5.2 For OEMs (SAIC, FAW, Changan, BYD, GM, Ford, etc.)

**Short-term:**
1. Use ROAM scenario taxonomy for L4 service deployment city planning—understand which scenarios dominate in each target city.
2. Design operator-facing systems aligned with the three-layer architecture.

**Medium-term:**
3. Partner with entities holding UAV remote-operations heritage (where applicable) to accelerate remote operations capability.
4. Adopt KPI benchmarks for supplier evaluation.

### 5.3 For Regulators (MIIT, MPS, NHTSA, UK DfT, BMVI, etc.)

**Short-term:**
1. Reference ROAM taxonomy in incident reporting requirements.
2. Require operator-to-vehicle ratios and latency metrics in operating permits.
3. Create cross-operator incident review mechanisms.

**Medium-term:**
4. Standardize terminology across jurisdictions (remote assistance vs. remote driving, operator vs. decider).
5. Establish pilot-grade certification requirements for Layer 3 operators (analog to the DJI UTC model).
6. Integrate remote operations metrics into the Safety Case / Safety Management System requirements.

### 5.4 For Researchers

**Short-term:**
1. Use the ROAM incident database as a shared research artifact—enables comparable empirical studies across research groups.
2. Contribute incident data, scenario refinements, and architecture enhancements.

**Medium-term:**
3. Build on the ROAM scenario taxonomy as a shared reference for publication comparability.
4. Develop tools that automate ROAM-compliant data collection and analysis.

---

## 6. Conclusion

The robotaxi industry stands at a critical juncture. Deployment is accelerating. Incidents are becoming more frequent and more severe. Yet remote operations—the human-in-the-loop safety infrastructure that makes these deployments viable—remains fragmented across operators with incompatible architectures, opaque specifications, and no cross-operator learning mechanism.

This paper has argued that the remedy is not another set of regulations or another proprietary platform. The remedy is a shared open baseline that operators, regulators, researchers, and insurers can all reference and build upon. ROAM provides a concrete starting point: a structured incident database, a scenario taxonomy, a three-layer reference architecture, and evaluation benchmarks—all open source, all continuously community-maintained.

Cummings observed that self-driving car companies appear to be repeating many of the same early mistakes made in military UAV programs more than 30 years ago. The UAV industry paid for its lessons in lost aircraft; the robotaxi industry is paying for its lessons in stranded passengers, blocked ambulances, and a dragged pedestrian. We can continue repeating those 30-year-old mistakes, or we can adopt an open baseline now.

**We have electricity. It's time to redesign the factory.**

---

## References

[1] Huxiu. "萝卜快跑瘫痪事故暴露的阿喀琉斯之踵." April 2026. https://www.huxiu.com/article/4847431.html

[2] NBC News. "Passengers stranded in moving traffic after robotaxi outage in China's Wuhan." April 2026. https://www.nbcnews.com/world/asia/passengers-stranded-moving-traffic-robotaxi-outage-china-wuhan-rcna266192

[3] TechCrunch. "Waymo explains why its robotaxis got stuck during the SF blackout." December 2025. https://techcrunch.com/2025/12/24/waymo-explains-why-its-robotaxis-got-stuck-during-the-sf-blackout/

[4] SF Standard. "WTF happened to Waymo during the blackout? Industry experts have some guesses." December 2025. https://sfstandard.com/2025/12/23/wtf-happened-waymo-blackout-industry-experts-have-guesses/

[5] TechCrunch. "Cruise recalls entire fleet after robotaxi ran over, dragged pedestrian." November 2023. https://techcrunch.com/2023/11/08/cruise-recalls-entire-fleet-after-robotaxi-ran-over-dragged-pedestrian/

[6] TechCrunch. "Waymo robotaxi roadside assistance and emergency first responders." March 2026. https://techcrunch.com/2026/03/25/waymo-robotaxi-roadside-assistance-emergency-first-responders/

[7] CNBC. "Baidu robotaxis reportedly halted mid-traffic causing crashes in Wuhan, China." April 2026. https://www.cnbc.com/2026/04/01/baidu-robotaxis-caused-crashes-in-wuhan-reports.html

[8] Waymo. "Fleet response: Lending a helpful hand to Waymo's autonomously driven vehicles." May 2024. https://waymo.com/blog/2024/05/fleet-response/

[9] Cummings, M. "What self-driving companies should learn from drone remote operations." College of Engineering & Computing, George Mason University, 2026.

[10] Waymo. "Independent Audits of Waymo's Safety Case and Remote Assistance Programs." November 2025. https://waymo.com/blog/2025/11/independent-audits/

[11] Futurism. "Tesla Workers Are Seizing Control of Robotaxis When They Get Stuck." 2025. https://futurism.com/advanced-transport/tesla-robotaxis-driven-remotely

[12] SAE International. "J3016_202405: Taxonomy and Definitions for Terms Related to Driving Automation Systems." May 2024.

[13] ISO. "ISO 22737:2021 - Intelligent transport systems - Low-speed automated driving systems for predefined routes." 2021. https://www.iso.org/standard/73767.html

[14] UK Parliament. "Automated Vehicles Act 2024." Royal Assent May 20, 2024. https://www.legislation.gov.uk/ukpga/2024/10

[15] 中华人民共和国工业和信息化部. "GB XXXXX—XXXX 智能网联汽车 自动驾驶系统安全要求 征求意见稿." February 2026.

[16] Hogan Lovells. "UK passes Automated Vehicles Act 2024." 2024. https://www.hoganlovells.com/en/publications/uk-passes-automated-vehicles-act-2024

[17] Autoblog. "Waymo Robotaxis Crash in San Francisco Just Days After One Helped Deliver a Baby." 2026. https://www.autoblog.com/news/waymo-robotaxis-incidents-san-francisco

[18] UNECE. "ECE-TRANS-WP.29-GRVA-2026-02e: Draft Global Technical Regulation on Automated Driving Systems." January 2026. https://unece.org/sites/default/files/2026-01/ECE-TRANS-WP.29-GRVA-2026-02e.pdf

[19] Taylor Wessing. "Legal framework for automated and autonomous driving and teledriving in the EU and Germany." February 2026. https://www.taylorwessing.com/en/insights-and-events/insights/2026/02/legal-frameworks-for-autonomous-driving-and-teledriving

[20] Koopman, P. "Human Roles in AVs and Embodied AI Systems." Phil & Junko on AV Safety, Substack, April 4, 2026. https://philkoopman.substack.com/p/embodied-ai-accountability-for-remote

[21] DJI Enterprise. "OcuSync/O4 Video Transmission Technology." 2024. https://enterprise.dji.com/

[22] DJI Enterprise. "DJI Dock 2 Elevates Automated Drone Operations to New Heights." 2024. https://enterprise.dji.com/news/detail/dji-dock-2-release

[23] DJI Enterprise Insights. "DJI FlightHub 2: Virtual Cockpit Now Available." 2024. https://enterprise-insights.dji.com/blog/dji-flighthub-2-virtual-cockpit-now-available

[24] DJI Enterprise. "DJI UTC Program." 2024. https://enterprise-insights.dji.com/learning-center

---

**Author Bio:**

Yuxin Zhang is an Associate Professor at Jilin University College of Automotive Engineering, where he directs the Automated Driving Safety Joint Laboratory. He concurrently serves as Head of Functional Safety at Zhuoyu Technology (formerly DJI Automotive), leading L2/L3/L4 safety compliance work and participating in ISO 21448 and GB L2/L3 standardization. He is the founder of DRIVEResearch, a small-and-beautiful data venture built around a 750+ hour aerial UAV naturalistic driving dataset with 10.5+ million trajectories. His research spans SOTIF (ISO 21448), ISO 26262 functional safety, and scenario-based testing for automated driving. He initiated the ROAM open-source project in April 2026. Contact: https://www.linkedin.com/in/zhangyuxin/
