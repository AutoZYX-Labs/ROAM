# Abstract and Section 1 Introduction

**Paper:** From Isolated Silos to Open Baselines: A Systematic Review of Remote Operations for L4+ Robotaxis
**Target:** IEEE Transactions on Intelligent Vehicles
**Author:** Yuxin Zhang, Jilin University / Zhuoyu Technology / DRIVEResearch

---

## Abstract (250 words)

Remote operations have emerged as a critical enabling capability for the large-scale commercial deployment of Level 4+ (L4+) robotaxis, yet the architectural, regulatory, and operational dimensions of this domain remain fragmented across proprietary silos. Between October 2023 and March 2026, three widely reported incidents — the Cruise pedestrian dragging accident in San Francisco, the Waymo regional network outage during the SF power blackout, and the Apollo Go mass shutdown in Wuhan — revealed systemic deficiencies in current remote operations frameworks: delayed intervention, ineffective fleet-wide recall mechanisms, overloaded operator workstations, and absent contingency architectures.

This paper presents the first systematic review of L4+ robotaxi remote operations that integrates (i) regulatory synthesis across eight jurisdictions (UN WP.29/GRVA, China, US, UK, Germany, Japan, EU, Singapore), (ii) comparative architecture analysis of six industry operators (Waymo, Tesla, Baidu Apollo, Pony.ai, Vay, Ottopia), (iii) academic research frontiers on latency, indirect control, trust calibration, and human role taxonomies, (iv) empirical incident coding using a structured seven-dimension schema, and (v) cross-domain lessons from 35+ years of military Unmanned Aerial Vehicle (UAV) operations and DJI's productized industrial drone solutions.

We identify six research gaps — systemic failure response, terminology divergence, operator-to-vehicle ratio economics, communication latency bounds, liability attribution, and naturalistic behavior baselines — and propose the ROAM (RoboTaxi Operations Anomaly Management) open-source reference architecture as a shared baseline to replace proprietary silos. ROAM provides a standardized incident database, an ISO 34502-aligned scenario taxonomy, a modular three-layer decision architecture, and open evaluation benchmarks, supporting the emergence of Remote Operations as a Service (ROaaS) and data-driven risk pricing.

**Index Terms:** Remote operations, robotaxi, L4 automated driving, teleoperation, functional safety, SOTIF, ISO 21448, ISO 34502, open reference architecture, human-machine interaction.

---

## Section 1 — Introduction (~1,500 words)

### 1.1 Three Incidents That Reframed the Debate

Between late 2023 and early 2026, three widely reported incidents exposed the fragility of current L4+ robotaxi remote operations architectures and forced a reconsideration of what "remote operations" should do.

**Cruise, San Francisco, October 2023.** A Cruise autonomous vehicle struck a pedestrian who had first been hit by a human-driven vehicle; the Cruise AV subsequently dragged the pedestrian approximately 20 feet before stopping [1]. The remote operator on duty did not intervene in time, and Cruise's subsequent communications with the National Highway Traffic Safety Administration (NHTSA) omitted the dragging event from initial reporting. The outcome was a full fleet recall of Cruise's AVs, a USD 1.5 million civil penalty, and the effective end of Cruise's commercial robotaxi ambitions. The incident surfaced questions about remote operator situational awareness, detection latency, and the boundary between "advisory" and "takeover" authority.

**Waymo, San Francisco, December 2025.** During a regional power outage affecting a portion of San Francisco, a subset of Waymo's fleet became communication-disrupted, and the operations center was unable to recall the vehicles in timely fashion [2]. The root cause was later attributed to a combination of regional infrastructure dependency and insufficient local-edge fallback behavior. This was not a vehicle-level perception failure; it was an operations-center and contingency-planning failure.

**Apollo Go (Baidu), Wuhan, March 31, 2026.** A mass system shutdown of Baidu Apollo's robotaxi fleet in Wuhan left vehicles stationary across multiple districts of the city, blocking traffic and requiring police intervention [3], [4]. Passenger-side SOS buttons failed to function, customer service phone lines became saturated, and no dedicated roadside assistance team was available. Unlike Cruise (a single-vehicle perception incident) and Waymo SF (a regional network incident), Apollo Go Wuhan was a fleet-wide common-cause failure — the simultaneous incapacitation of hundreds of vehicles exposed the absence of systemic contingency planning in the entire industry, not only in Baidu's implementation.

These three incidents — an *isolated intervention failure*, a *regional infrastructure cascade*, and a *fleet-wide common-cause failure* — together delineate the problem space of this review. They demonstrate that current remote operations frameworks handle routine exceptions but break down under compound stressors, and that the failure modes differ structurally across incident classes in ways that existing surveys do not address.

### 1.2 Why an Integrated Review Is Needed Now

Three convergent developments make the present moment the correct time for a systematic review:

First, **the regulatory wave has crystallized**. Between 2024 and 2026, a set of mutually reinforcing regulatory instruments moved from draft to binding: the UK Automated Vehicles Act 2024 (Royal Assent May 2024) [5], the German *Straßenverkehrs-Fernlenkungs-Verordnung* (StVFernLV, in force December 2025) [6], the UN WP.29/GRVA draft Global Technical Regulation on Automated Driving Systems (adopted January 2026) [7], and China's GB national safety standard for Intelligent Connected Vehicles (public-comment draft February 2026, mandatory effective date July 2027) [8]. Each of these instruments contains explicit provisions for remote operations — yet no prior survey maps their cumulative requirements onto an operational architecture.

Second, **industry deployment has reached scale**. As of late 2025, Waymo operates over 3,000 driverless vehicles, completing 400,000+ weekly paid trips, with approximately 70 on-duty remote agents — an operator-to-vehicle ratio of roughly 1:41 [9]. Tesla launched teleoperations in Austin (June 2025), transitioning to unsupervised operations in January 2026 [10]. Baidu Apollo completed 3.4 million orders in Q4 2025 [11]. Vay Technology deployed 30 teleoperated rental vehicles in Las Vegas [12]. This scale of deployment generates empirical evidence that did not exist when prior teleoperation surveys were written (2018–2022).

Third, **cross-domain knowledge has become available**. Cummings (2026) published a systematic transfer of 35+ years of U.S. military Unmanned Aerial Vehicle (UAV) remote operations experience to self-driving applications [13]. DJI has productized three decades of consumer and industrial drone remote operations in transmission systems (OcuSync/O4, 15 ms end-to-end video latency), workstations (FlightHub 2 Virtual Cockpit), automated docks (Dock 2), and pilot certification (UTC network, 40,000+ certified pilots) [14], [15], [16], [17]. This cross-domain knowledge provides a reference baseline against which the automotive industry's remote operations choices can be benchmarked — a baseline no prior robotaxi survey has exploited.

### 1.3 Research Questions

This survey addresses five research questions:

**RQ1.** What do current international regulatory instruments — across UN GTR, China GB, UK, Germany, US, Japan, EU, and Singapore — require of L4+ robotaxi remote operations, and where do their requirements converge or diverge?

**RQ2.** What architectures have leading industry operators (Waymo, Tesla, Baidu Apollo, Pony.ai, Vay, Ottopia) actually deployed, and how do their design choices (control mode, operator ratio, workstation UX, latency budget, contingency architecture) differ?

**RQ3.** What does the academic research frontier say about the technical constraints of remote operations — particularly latency bounds, indirect control approaches, trust calibration for AI-assisted decision-making, and the taxonomy of human roles in fleet operations?

**RQ4.** What do empirical incidents — coded using a structured seven-dimension schema — reveal about failure modes, intervention effectiveness, and the relationship between architectural choices and incident outcomes?

**RQ5.** What cross-domain lessons from military UAV operations and DJI's productized drone solutions apply to robotaxi remote operations, and what structural advantages does this create for operators with drone technology heritage?

### 1.4 Contributions

This paper makes four contributions:

**C1. First cross-jurisdictional regulatory synthesis for robotaxi remote operations (post-2025).** We map the requirements of eight jurisdictions onto a unified requirement taxonomy covering communication infrastructure, operator qualification, Minimal Risk Maneuver (MRM) provisions, data storage (DSSAD), and liability allocation. Prior surveys either predate the 2024–2026 regulatory wave or cover only single jurisdictions.

**C2. First empirically-grounded comparative architecture analysis using structured incident coding.** We code four anchor incidents (Cruise 2023, Waymo SF 2025, Apollo Go Wuhan 2026, Pony.ai Beijing 2025) against a common seven-dimension schema and attribute incident outcomes to architectural design choices. No prior survey performs this incident-to-architecture causal mapping.

**C3. First cross-domain transfer framework from military UAV + industrial drone operations to robotaxi remote operations in an IEEE venue.** We formalize five operational lessons (latency physical ceiling, workstation UX, operator workload limits, KSA-based certification, contingency drills) and quantify the structural advantage of drone-heritage operators.

**C4. Introduction of ROAM as an open-source reference architecture and baseline.** ROAM provides a standardized incident database, an ISO 34502-aligned scenario taxonomy, a modular three-layer decision architecture, and open evaluation benchmarks. This proposes a shift from proprietary silos toward shared safety infrastructure, mirroring the CVE database pattern in cybersecurity.

### 1.5 Paper Organization

Section 2 describes the PRISMA systematic review methodology, including database search strategy, inclusion/exclusion criteria, and quality assessment rubric. Section 3 synthesizes the international regulatory landscape across eight jurisdictions. Section 4 conducts comparative architecture analysis of six industry operators. Section 5 surveys academic research frontiers on latency, indirect control, trust calibration, human role taxonomies, and control center frameworks. Section 6 presents the empirical incident analysis using the ROAM incident database. Section 7 develops the cross-domain lessons from military UAV and DJI industrial drone operations. Section 8 identifies six research gaps and presents the ROAM open-source reference architecture as a proposed shared baseline, closing with a commercial roadmap (Remote Operations as a Service, ROaaS) and a 2026–2030 timeline. A brief conclusion restates the contributions and issues a call to open collaboration.

---

*End of Section 1. References [1]–[17] cited here are listed in the full bibliography (05-bibtex-references.bib).*
