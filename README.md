# ROAM — Remote Operations & Anomaly Management

**Open-Source Framework for L4 Autonomous Mobility Remote Operations, Incident Management & Safety Governance**

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Incidents](https://img.shields.io/badge/Incidents-16-red.svg)](#incident-database)
[![Scenarios](https://img.shields.io/badge/Scenarios-6%20categories-orange.svg)](#scenario-taxonomy)
[![Operating Models](https://img.shields.io/badge/Operating%20Models-10-blue.svg)](taxonomy/operating-models-v1.0.md)

🌐 **Website:** [AutoZYX.github.io/ROAM](https://AutoZYX.github.io/ROAM)

> **Scope (Updated 2026-04):** ROAM started as a Robotaxi-focused framework but has expanded to cover **all L4 autonomous mobility operating models** — including Robotaxi fleets, OEM direct fleets, personally-owned L4 with OEM subscription services, shared-use vehicles, public transit, logistics, and specialized environments. See [Operating Models v1.0](taxonomy/operating-models-v1.0.md) for the 10 modes we currently cover.

---

## Why ROAM?

On March 31, 2026, nearly 100 Baidu Apollo robotaxis simultaneously shut down on elevated highways in Wuhan, China. Passengers were trapped for 2 hours. SOS buttons went unanswered. The only resolution? **Police officers manually rescuing vehicles one by one.**

Three months earlier, a power outage in San Francisco left Waymo vehicles stranded across the city. Emergency services called Waymo's hotline 31 times, waiting a combined 2.5 hours.

These aren't edge cases — they're previews of what happens when L4 autonomous fleets scale without adequate remote operations infrastructure.

In March 2026, a [US Congressional investigation](docs/Markey-Remote-Back-Seat-Operators-Report-2026.pdf) revealed that **all seven major AV companies refused to disclose** how frequently their vehicles require remote human intervention — underscoring the urgent need for independent, open operational transparency.

**ROAM provides the open-source foundation for solving this problem:**

1. 📋 **Incident Database** — Structured, searchable records of every known L4 anomaly
2. 🏷️ **Scenario Taxonomy + Operating Models** — 6 scenario categories + 10 operating modes
3. 🏗️ **Reference Architecture** — Three-layer decision model with mode-specific responsibility matrix
4. 📊 **Evaluation Benchmarks** — Mode-differentiated KPIs and baseline data
5. 🔧 **Technology Pillars** — Six-pillar technical foundation (perception, teleop, wireless, AI trust, cybersecurity, human factors)

## L4 is Not Only Robotaxi

The future of L4 autonomous mobility is far more diverse than today's Robotaxi-centric picture. ROAM covers **10 operating models** across four categories:

| Category | Modes |
|---------|-------|
| **Commercial Operations** | M1 Robotaxi Operator · M2 OEM Direct Fleet · M3 Fleet-as-a-Service |
| **Personal Ownership** | M4 Personal + OEM Subscription · M5 Personal + Shared · M6 Pure Private L4 |
| **Public Transit** | M7 L4 Bus · M8 Micro-Transit Shuttle |
| **Specialized Environments** | M9 Last-Mile Delivery · M10 Restricted Environment (mine/port/airport) |

A critical insight: in modes M4–M6, **OEMs transition from manufacturers to service providers**, inheriting remote operations responsibility for privately-owned vehicles. ROAM's responsibility matrix formalizes this shift.

See [`taxonomy/operating-models-v1.0.md`](taxonomy/operating-models-v1.0.md) for full definitions.

## Who Is This For?

| Audience | Value |
|----------|-------|
| **Robotaxi Operators** (Waymo, Apollo, Pony.ai, WeRide) | Reference architecture for building remote ops platforms |
| **OEMs** (Tesla, 蔚来, 小鹏, 极氪, SAIC, FAW, Changan) | Framework for transitioning to L4 service provider role |
| **Fleet Managers & Rental Companies** (Hertz, 神州租车) | Mode-specific operations playbook for L4 fleet management |
| **Public Transit Operators** | L4 bus and micro-transit operational framework |
| **Logistics Companies** (美团、京东、Nuro) | Delivery-specific incident patterns and KPIs |
| **Startups** building teleops solutions | Open baseline to build upon, not from scratch |
| **Insurance Companies** | Evidence base for data-driven L4 risk pricing |
| **Regulators & Standards Bodies** | Evidence-based incident data for policy development |
| **Researchers** | Structured dataset for autonomous vehicle safety research |

## Quick Start

### Browse Incidents

Each incident is a YAML file in `incidents/YYYY/`:

```bash
ls incidents/2026/
# ROAM-2026-001-waymo-santa-monica-child.yaml
# ROAM-2026-002-waymo-austin-ambulance.yaml
# ROAM-2026-003-waymo-sf-two-vehicle-collision.yaml
# ROAM-2026-004-apollo-wuhan-mass-shutdown.yaml
# ...
```

### Understand the Taxonomy

See [`taxonomy/scenario-taxonomy-v1.0.md`](taxonomy/scenario-taxonomy-v1.0.md) for the full classification:

```
A. System-Wide Failure          (系统性故障)
B. Perception/Decision Failure  (感知/决策失效)
C. Planning/Execution Anomaly   (规划/执行异常)
D. Vehicle Hardware Failure     (车辆硬件故障)
E. External Conflict            (外部环境冲突)
F. Passenger-Side Issue         (乘客端异常)
```

### Reference Architecture

See [`architecture/reference-architecture.md`](architecture/reference-architecture.md) for the three-layer decision model:

```
Layer 1: AI Autonomous Response     (target: 70% of anomalies)
Layer 2: AI-Assisted + Human Confirm (target: 25%)
Layer 3: Remote Driving / On-Site    (target: 5%)
```

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**How to contribute:**
- 🐛 **Report an incident**: Use the [incident template](.github/ISSUE_TEMPLATE/new-incident.md)
- 📝 **Improve documentation**: Submit a PR
- 🔬 **Add analysis**: Contribute root cause analysis or scenario mapping
- 📊 **Share data**: Contribute baseline data or evaluation results

## Project Structure

```
ROAM/
├── incidents/              # Incident database (YAML files)
├── taxonomy/               # Classification systems
│   ├── scenario-taxonomy-v1.0.md      # 6 scenario categories
│   ├── operating-models-v1.0.md       # 10 operating modes (NEW)
│   ├── severity-scale.md
│   └── urgency-scale.md
├── architecture/           # Reference architecture & responsibility mapping
│   ├── reference-architecture.md      # Three-layer decision model
│   └── responsibility-matrix.md       # 10 modes × 3 layers (NEW)
├── benchmarks/             # KPIs and baseline data
├── website/                # GitHub Pages website (archived design)
└── docs/                   # Deployed site + white papers and research
    ├── technology-pillars.md          # Six technology pillars (NEW)
    ├── literature-review-en.md
    ├── literature-review.md
    └── related-standards.md
```

## Supported By

- **Jilin University AD Safety Joint Lab** (吉林大学自动驾驶安全联合实验室) — Scenario taxonomy, SOTIF methodology, academic research
- **DRIVEResearch** (驭研科技) — Naturalistic driving baseline data (750h+ aerial UAV, 10.5M+ trajectories)

## Related Standards

| Standard | Full Title | Relevance to ROAM |
|----------|-----------|-------------------|
| GB XXXXX—XXXX | 智能网联汽车 自动驾驶系统安全要求 (Draft, 2026-02) | Appendix C.2 defines L4 remote assistance requirements; Appendix D defines Safety Case structure |
| UN GTR on ADS | GRVA draft GTR (ECE-TRANS-WP.29-GRVA-2026-02e) | Global safety baseline: "competent and careful human driver" standard |
| ISO 34502 | Road vehicles — Test scenarios for automated driving systems (2022) | Scenario taxonomy alignment — functional, logical, and concrete scenario layers |
| ISO 21448 | Road vehicles — Safety of the intended functionality / SOTIF (2022) | SOTIF methodology for identifying unknown unsafe scenarios and triggering conditions |
| ISO 26262 | Road vehicles — Functional safety (2018, 2nd ed.) | Functional safety framework, ASIL classification, safety analysis methods |
| ISO 22737 | Low-speed automated driving systems — Predefined routes (2021) | L4 shuttle operations, includes "driverless operation dispatcher" (DOD) role |
| ISO/PAS 8800 | Road vehicles — Safety and artificial intelligence (2024) | AI safety lifecycle for ADS perception and decision components |
| SAE J3016 | Taxonomy and Definitions for Driving Automation Systems (Rev. May 2024) | Level definitions, remote support terminology (remote driving, remote assistance) |
| UK AV Act 2024 | Automated Vehicles Act 2024 | ASDE concept (legal responsibility entity), NUIC operation mode |
| German StVFernLV | Straßenverkehr-Fernlenk-Verordnung (Dec 2025) | Europe's first teleoperated driving legal framework |
| NHTSA SGO | Standing General Order on Crash Reporting (2021, amended 2024) | ADS crash reporting requirements and data elements |
| CSAE 316.1/316.2 | 智能网联汽车 环境感知系统预期功能安全 (2023) | SOTIF triggering condition analysis for perception systems |
| CSAE 336 | 智能网联汽车预期功能安全场景要素及管理要求 (2024) | Scenario element framework and management requirements |

> For detailed standard-to-module mapping, see [`docs/related-standards.md`](docs/related-standards.md).
> 中文对齐分析见 [`docs/standard-alignment-cn.md`](docs/standard-alignment-cn.md).

## Regulatory Alignment

ROAM is designed to support compliance efforts across multiple regulatory jurisdictions. Three regulatory frameworks are of particular relevance:

**China GB ADS Safety Requirements (Appendix C.2 — Remote Assistance)**
The draft GB standard's Appendix C.2 defines functional requirements for L4 remote assistance, including communication latency thresholds, operator qualification, and fallback procedures. ROAM's three-layer architecture (AI Autonomous / AI-Assisted + Human / Remote Driving) directly maps to the GB standard's graduated remote intervention model. ROAM's Incident Database provides the operational evidence required for the Safety Case (安全档案) structure defined in Appendix D.

**WP.29 GTR Safety Case Requirements**
The GRVA draft Global Technical Regulation requires manufacturers to demonstrate that their ADS performs at least as safely as a "competent and careful human driver." ROAM's Benchmarks module provides quantitative KPIs (response time, resolution rate, escalation frequency) that support this demonstration. ROAM's Incident Database offers structured records that feed into the evidence base of manufacturer safety cases.

**Germany StVFernLV Teleoperation Framework**
Germany's Road Traffic Remote Driving Ordinance (December 2025) is Europe's first comprehensive legal framework for teleoperated driving. It specifies operator training requirements, communication infrastructure standards, and operational constraints. ROAM's Architecture Layer 3 (Remote Driving / On-Site) aligns with these requirements, and ROAM's Benchmarks include communication performance KPIs that map to StVFernLV's minimum bandwidth and latency mandates.

**US Congressional Investigation: Markey RAOS Report (March 2026)**
Senator Markey's [Remote Back Seat Operators report](docs/Markey-Remote-Back-Seat-Operators-Report-2026.pdf) is the first Congressional investigation into AV remote assistance operations. Key findings: all 7 companies refused to disclose RAO intervention frequency; cross-company latency ranged from 100ms to 500ms with no federal standard; Waymo uses overseas RAOs (Philippines) without US driver's licenses. Markey announced plans for legislation establishing federal RAO standards — reinforcing the need for ROAM's open, evidence-based benchmarks.

## License

Apache License 2.0 — free for commercial use, modification, and distribution.

## Author

**[Yuxin Zhang (张玉新)](https://autozyx.com)** — Associate Professor at Jilin University, Chief Safety Expert at ZYT, Co-founder & CEO of DRIVEResearch.

- **Website**: [autozyx.com](https://autozyx.com)
- **LinkedIn**: [linkedin.com/in/zhangyuxin](https://www.linkedin.com/in/zhangyuxin/)
- **Google Scholar**: [Scholar Profile](https://scholar.google.com.au/citations?user=W8YoarEAAAAJ&hl=en)

## Citation

If you use ROAM in your research, please cite:

```bibtex
@misc{roam2026,
  title={ROAM: RoboTaxi Operations Anomaly Management},
  author={Zhang, Yuxin and Contributors},
  year={2026},
  url={https://github.com/AutoZYX/ROAM}
}
```
