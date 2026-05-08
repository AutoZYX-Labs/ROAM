# TR-A 论文详细 Outline

**Beyond Type Approval: Operational Governance Gaps in L4 Autonomous Vehicle Deployment — A Comparative Analysis of U.S. and Chinese Regulatory Responses and a Production-Calibrated Reference Architecture**

> 中文译题：超越型式认证——L4 自动驾驶车辆部署中的运营治理空白：美中监管响应的比较分析与一种产业实证校准的参考架构

---

> 投稿目标：Transportation Research Part A: Policy and Practice
> 专刊：VSI: CAV-Safety-TRA · 智能网联汽车治理：证据、伦理与政策创新
> 总词数：11,000 – 12,000 words
> 状态：v0.1 outline，张玉新 + 李盼合作起草
> 日期：2026-05-08

---

## 0. 论文核心论点（Central Thesis）

L4 自动驾驶车辆商业化部署中，"型式认证（vehicle type approval）"和"数据通道（safety event data interaction）"两层标准已被覆盖，但**异常发生后由谁、何时、用什么方式做出处置决策**这一"运营治理（operational governance）"层仍是全球监管盲区。

武汉萝卜快跑事件（2026-03，100 辆 Robotaxi 同时熄火）和 Markey 国会调查（2026-03，七家头部公司均拒绝披露介入频率）同时暴露了这一盲区。加州 DMV Article 3.7 Express Terms 2026 是全球首部尝试系统填补的法规。本文通过四步贡献——跨国监管对比 + 三个关键事件分析 + 参考架构（ROAM）+ Waymo 实证 KPI 校准——提出 5 项对中国监管 + 3 项对国际标准化的可操作建议。

---

## 1. Introduction（引言，1200 words）

### 核心叙事

开篇用两个事件并置（split-screen narrative）：

> 2026 年 3 月 31 日，武汉某高架路段，近百辆百度萝卜快跑 L4 出租车同时熄火，乘客被困两小时；同月，美国参议员 Markey 发布国会调查报告，七家头部自动驾驶公司均拒绝披露其无人车需要远程人工干预的频率。两起事件相隔太平洋，但都指向同一空白——当 L4 车辆已通过型式认证、按规上报数据，却在实际运营中失效时，监管框架对"谁来处置"几乎沉默。

### 结构

- 1.1 The L4 Deployment Paradox（约 300 words）
  - 中美 L4 商业化规模数据：北京 / 武汉 / 广州 / 上海 千车级；Waymo / Cruise（已撤）/ Tesla Robotaxi 累计百万英里
  - 单车技术成熟度（Disengagement rate < 1 per 10,000 miles 等指标）
  - 与"运营层失效"的悖论：技术成熟 ≠ 运营治理成熟

- 1.2 Two Triggering Events（约 400 words）
  - Wuhan Apollo mass shutdown 2026-03-31（事实陈述 + 政策响应：14 天内三部门会议、10+ 城市收紧 L4 准入）
  - Markey RAOS investigation 2026-03（事实陈述：七家公司、两家拒绝披露、Waymo 海外 RAO ~50%）
  - 两个事件指向的共同问题：opacity + accountability gap in L4 operations

- 1.3 Research Questions（约 200 words）
  - RQ1: How do current U.S. and Chinese regulatory frameworks address operational governance of L4 AV systems, and where are the gaps?
  - RQ2: What governance lessons emerge from recent high-impact L4 incidents and disclosure failures?
  - RQ3: Can a production-calibrated reference architecture provide an actionable framework for closing the operational governance gap?

- 1.4 Contributions（约 200 words，4 条贡献）
  - C1 [Comparative]: First systematic comparison of operational governance dimensions across U.S. (CA DMV Article 3.7), China (GB/T draft, CSAE T-standards, YD/T 4778-4783), Germany (StVFernLV), and international standards (ISO 22737, SAE J3016)
  - C2 [Empirical]: Three-case analysis of governance failures with policy implications: Wuhan Apollo, Markey investigation, Cruise SF permit revocation
  - C3 [Framework]: ROAM (Remote Operations & Anomaly Management) reference architecture — 10 operating modes × 3 decision layers × 7 responsibility dimensions × 16 KPIs × FRIP template
  - C4 [Production-grounded]: Empirical calibration of the ROAM framework against Waymo deployment data, including the "Last 4-5%" characterization of irreducible Layer-3 decisions

- 1.5 Paper Roadmap（约 100 words）

### 关键文献（Introduction 引用）

Wadud et al. 2016, Koopman 2022, Mitra et al. 2023, NHTSA SGO Reports, NTSB Waymo 2025, CA DMV Article 3.7 (Express Terms 2026), Markey US Senate Investigation 2026

---

## 2. Literature Review（文献综述，1500 words）

### 三层文献切割（mirror the three-layer regulatory landscape）

- 2.1 Vehicle-Level Safety Literature（约 400 words）
  - Type approval frameworks (UN R157, China GB/T 44721-2024)
  - Functional safety (ISO 26262, GB/T 34590-2022)
  - SOTIF (ISO 21448:2022, GB/T 43267-2023)
  - Cybersecurity (ISO/SAE 21434, UN R155, GB 44495-2024)
  - 关键论点：这一层文献成熟，但聚焦"车辆离开工厂前的安全"，不覆盖运营层

- 2.2 Remote Operations & Teleoperation Literature（约 400 words）
  - Koopman's six-role framework for human roles in AV systems (2024)
  - Phil Koopman 2022 on autonomy safety arguments
  - Mutzenich et al. on teleoperation cognitive load (2021)
  - Tener & Lanir on remote driving HMI (2022)
  - Wadud et al. on shared mobility safety (2016)
  - Markey US Senate Investigation 2026 on remote assistance opacity
  - 关键论点：这一层文献快速增长，但偏 HCI / 工程视角，缺政策与治理视角

- 2.3 Comparative CAV Policy Research（约 400 words）
  - Stayton & Stilgoe 2020 on AV policy framing
  - Taeihagh & Lim 2019 on governance challenges
  - Bonnefon et al. 2020 on ethics
  - Liu et al. 2024 on China's AV governance
  - Wang et al. 2023 on regulatory sandbox approach
  - 关键论点：跨国比较文献存在，但**多停留在"规划许可"层，未深入"运营异常处置"层**

- 2.4 Positioning of This Paper（约 300 words）
  - 对 2.1-2.3 的综合：运营治理层是三层文献交集中的"洞"
  - 本文的方法学创新：把"抽象层级 + 监管对象 + 强制性"作为新的分析维度
  - 本文的实证创新：Waymo 内部数据进入开放学术框架（李盼资产）

### 预期 Figure 1: Literature gap map

二维图：横轴 = research domain（vehicle / remote ops / policy comparison），纵轴 = abstraction layer（vehicle / data / governance）。ROAM 占据 governance × policy comparison 的空白象限。

---

## 3. Methodology（方法论，800 words）

### 结构

- 3.1 Research Design（约 200 words）
  - Mixed-method: comparative policy analysis + empirical case studies + framework synthesis + production data calibration
  - 哲学定位：critical realism (treats institutions and incidents as real-world data points)
  - 分析单元：regulatory text + corporate disclosure + incident report

- 3.2 Data Sources（约 300 words，分四类）
  - **Regulatory texts**: CA DMV Article 3.7 Express Terms 2026 (full text, 50+ pages); China GB/T draft on safety event data interaction; German StVFernLV (2025-12); CSAE 团体标准在研; YD/T 4778-4783 series (国家标准信息查询平台 verified)
  - **Corporate disclosures**: Markey investigation responses from 7 companies; Waymo Safety Report; Cruise quarterly disclosures
  - **Incident reports**: Wuhan Apollo (基于公开新闻报道 + 国家三部门会议公开通报); NTSB Waymo school bus incident; Cruise SF pedestrian incident
  - **Production data (with consent)**: Aggregated, de-identified Waymo SSP/PO metrics where authorized — RS contacts per trip trends, p95 latency benchmarks, automation rate progression

- 3.3 Analytical Framework（约 300 words，三维分析法）
  - **Dimension 1: Abstraction layer** — vehicle / data channel / operational governance / regulatory feedback
  - **Dimension 2: Regulated subject** — manufacturer / platform operator / fleet owner / remote operator
  - **Dimension 3: Enforcement strength** — mandatory regulation / mandatory standard / recommended standard / voluntary guidance
  - 用三维做政策对比表（Table 1）

### 预期 Figure 2: Three-dimensional analytical framework

三维立方体图，把每条法规 / 标准映射为立方体内一个点，可视化"哪些象限有覆盖，哪些是空白"。

---

## 4. Cross-National Regulatory Landscape（跨国监管图景，2200 words）

### 结构

- 4.1 United States: California DMV Article 3.7 Express Terms 2026（约 600 words）
  - Background: from 2014 Article 3.7 to 2026 modified text
  - Key innovations:
    - Remote Operations Support 法定术语
    - Remote Driver vs Remote Assistant 二分（§ 227.38, § 227.40）
    - 14 mandatory safety case elements (§ 227.04 周边章节)
    - Quantitative thresholds: 30-second emergency response, 2-min geofencing exit, pre-application 50,000-mile testing
    - § 227.46 graduated restriction mechanism (5-tier)
    - § 227.42(i) First Responder Interaction Plan template (15 sections)
  - Critique: 强项 + 局限（强项：覆盖广 + 量化阈值; 局限：执法资源 + 跨境管辖）

- 4.2 China: A Three-Track Patchwork（约 600 words）
  - Track 1 - Vehicle: GB/T 44721-2024 ADS general technical requirements (TC114), GB/T 43267-2023 SOTIF, GB 44495/44496/44497 cybersecurity & OTA
  - Track 2 - Data channel: 《智能网联汽车安全事件数据交互与管理系统技术规范》(GB/T draft, TC114/SC34, 公示期 2025-12 ~ 2026-01); YD/T 4778-2024 至 4783-2024 系列
  - Track 3 - Operational governance: **VOID**
  - Recent regulatory response post-Wuhan: 三部门会议、10+ 城市准入收紧、CSAE 团标启动
  - Critique: 三轨并行，运营治理空白

- 4.3 Germany: StVFernLV 2025-12（约 350 words）
  - Federal regulation on remote driving authorization
  - 量化阈值与 DMV 比较
  - 适用范围限制（§ 1a-c StVG L4 限定）

- 4.4 International Standards（约 350 words）
  - ISO 22737:2021 LSAD — partial coverage of low-speed cases
  - SAE J3016_202104 — explicit refusal to define teleoperation
  - UN GTR on ADS (under WP.29) — operational governance not yet addressed
  - ISO/PAS 8800:2024 AI safety — 与 SOTIF 并行的新维度

- 4.5 Comparative Synthesis（约 300 words + Table 1）

### 预期 Table 1: Cross-national operational governance comparison

| Dimension | CA DMV Art. 3.7 | China (multi-track) | Germany StVFernLV | ISO 22737 | SAE J3016 |
|---|---|---|---|---|---|
| Operational scope | All driverless | Vehicle + data | Remote driving only | LSAD only | None |
| Remote Driver definition | Yes | Partial (YD/T) | Yes | Partial | No |
| Remote Assistant definition | Yes | No | No | No | No |
| 30s emergency response | Yes | No | Implicit | No | No |
| Graduated restriction | Yes (5-tier) | No | No | No | No |
| FRIP requirement | Yes (15 sections) | No | Partial | No | No |
| Enforcement | Mandatory regulation | Mixed | Mandatory regulation | Recommended | Voluntary |
| Operational KPI requirements | Implicit | No | Implicit | No | No |

### 预期 Figure 3: Regulatory coverage heatmap

矩阵图：横轴 = governance dimensions（10 项）；纵轴 = jurisdictions（5 个）。颜色深浅 = 覆盖程度。直观显示中国"运营治理列"几乎全空白。

---

## 5. Empirical Case Studies（实证案例研究，2200 words）

### Case selection rationale（约 100 words）

三案例覆盖三类失效：
- **Wuhan**: 大规模运营失效 + 监管被动响应
- **Markey**: 行业透明度失效 + 信息不对称
- **Cruise SF**: 渐进式监管处置（permit revocation）

- 5.1 Case 1: Wuhan Apollo Robotaxi Mass Shutdown 2026-03-31（约 700 words）
  - Timeline reconstruction（基于公开报道）：t=0 熄火 → t=15min SOS 失效 → t=120min 交警逐车施救
  - Governance dimensions exposed:
    - No Layer-3 fallback protocol scaling to 100 vehicles
    - No FRIP-equivalent emergency response document
    - No regulatory feedback loop matching event severity
  - Policy response analysis: 14-day three-ministry meeting, 10+ city L4 access tightening
  - **Lesson learned**: type-approved vehicles can fail at fleet scale; vehicle-level safety standards are necessary but insufficient

- 5.2 Case 2: Markey RAOS Investigation 2026-03（约 700 words）
  - Investigation scope: 7 companies, 23-question survey
  - Findings (per company table):
    - Disclosure rates of intervention frequency
    - Latency disclosures (May Mobility 100-140ms ... Zoox 333ms)
    - Aurora & Tesla refused
    - Waymo overseas RAO ~50%
  - NTSB cross-reference: Waymo school bus incident (RAO error)
  - **Lesson learned**: opacity hides systemic risk; current U.S. federal regulation has no disclosure requirement; CA DMV Article 3.7 doesn't address corporate-level transparency

- 5.3 Case 3: Cruise SF Pedestrian Incident & Permit Revocation 2023-2024（约 500 words）
  - Incident: October 2 2023 hit-and-drag pedestrian
  - Cruise's failure: omitted 6m drag from initial DMV report
  - DMV response: October 24 2023 revoked driverless permit citing § 227.46-style discretion
  - **Lesson learned**: the binary "permit vs no permit" outcome was crude; DMV Article 3.7 § 227.46 graduated restriction was designed in part to address this

- 5.4 Cross-Case Synthesis（约 200 words + Table 2）

### 预期 Table 2: Cross-case governance failure analysis

| Case | Governance dimension that failed | Why existing frameworks didn't catch it | Implication for ROAM design |
|---|---|---|---|
| Wuhan | Layer-3 + FRIP + Avoidance Area | China lacks operational governance standard | KPIs 1, 9, 14 + FRIP § 9 |
| Markey | Disclosure + transparency | US federal lacks disclosure mandate | KPI 12 + reporting infrastructure |
| Cruise | Graduated regulatory feedback | Pre-2026 DMV had no § 227.46 equivalent | Responsibility matrix dim 7 |

### 预期 Figure 4: Wuhan event timeline + governance gap visualization

时间线 + 在每个时间点标注"哪个治理维度本应介入但未介入"。

---

## 6. ROAM: A Production-Calibrated Reference Architecture（核心贡献章节，2200 words）

### 结构（升级后的 §6，融入李盼贡献）

- 6.1 Framework Overview（约 200 words）
  - Four modules: classification (operating modes + scenarios) + decision (3-layer + responsibility matrix) + evaluation (KPI + FRIP) + assessment (test method)
  - Reference architecture vs requirements specification 区分
  - Open-source release: github.com/AutoZYX-Labs/ROAM (v1.2)

- 6.2 Operating Modes Typology and Anomaly Scenario Classification（约 300 words）
  - 10 operating modes (M1 Robotaxi, M2 OEM-direct fleet, M3 FaaS, M4 OEM subscription, M4.5 personal+shared, M5 personal L4, M6 transit, M7 micro-circulation, M8 logistics, M9 specialized environment)
  - 29 sub-scenarios in 6 categories (A-F)
  - Severity (S0-S4) × Urgency (U0-U3) classification

- 6.3 Three-Layer Decision Architecture（约 300 words）
  - Layer 1 AI autonomous (target ~70%): full ADS handling, no human intervention
  - Layer 2 AI-assisted with human confirmation (target ~25%): Remote Assistant role
  - Layer 3 Remote driving / dispatch (target ~5%): Remote Driver role + offline rescue
  - Escalation/de-escalation triggers and conditions

- **6.4 Production-Grounded Calibration（约 600 words，李盼贡献核心节）**
  - Methodology: empirical anchoring of ROAM's three-layer occupancy hypothesis using Waymo deployment data (with appropriate authorization scope)
  - Empirical anchor 1: Waymo SSP automation progression — RS contacts dropped from 2.5 → 0.1 per trip over deployment cycle (96% automation rate)
  - Empirical anchor 2: Pullover obstruction RPM 0.17 → 0.027 (84% reduction in long-tail event remediation cost)
  - Empirical anchor 3: SSP p95 latency < 2 seconds for safety-critical inference
  - **The "Last 4-5%" characterization**: which scenarios are fundamentally irreducible to human Layer-3 decisions?
    - Scenario taxonomy of irreducible decisions (mapped to ROAM 29 sub-scenarios)
    - Implication: Layer-3 capacity sizing (how many remote drivers per fleet)
    - Implication: legal liability (who carries the can for the irreducible 5%)
  - Calibrated KPI baselines: revised targets for KPI 2 (AI resolution rate) by operational maturity tier — ML1=70% / ML3=90% / ML5=96%

- 6.5 Seven-Dimensional Responsibility Matrix（约 250 words）
  - Original four dimensions: execution / decision / technical / legal
  - Added v1.1: Override System (DMV § 227.42(b)(3)(H-I)) + Avoidance Area (§ 227.42(b)(3)(F-G))
  - Added v1.2: Regulatory Feedback (§ 227.46 graduated restriction)
  - Cross-mode allocation: how each dimension differs across M1-M9
  - Use case: Wuhan event reanalyzed through 7-dim matrix shows dim 5 (Override) and dim 7 (Regulatory feedback) failures

- 6.6 KPIs with Empirical Baselines（约 250 words）
  - 16 KPIs in three groups: baseline (1-8) / DMV-aligned (9-13) / regulatory feedback (14-16)
  - Each KPI: definition + measurement method + empirical baseline (where available from Waymo data) + regulatory threshold (where available from DMV)
  - Full definitions in supplementary material

- 6.7 First Responder Interaction Plan with Graceful Degradation（约 150 words）
  - 15 sections per DMV § 227.42(i) + heavy-duty extension
  - **Graceful degradation extension**: ROC-side failure modes (L0 full / L1 degraded / L2 emergency-only / L3 full failure)

- 6.8 Standards Mapping and Open-Source Release（约 150 words）
  - ROAM ↔ ISO 22737 / SAE J3016 / DMV / GB/T / YD/T mapping table
  - GitHub repo + 17 standards aligned + community contribution model

### 预期 Figure 5: ROAM 4-module architecture diagram
### 预期 Figure 6: Production-calibrated three-layer decision architecture (with Waymo data overlay)
### 预期 Figure 7: Seven-dimensional responsibility matrix nested structure
### 预期 Table 3: Empirically-calibrated 16 KPIs with target values, measurement methods, and Waymo baselines
### 预期 Table 4: ROAM ↔ existing standards mapping

---

## 7. Policy Implications and Recommendations（政策含义与建议，1300 words）

### 结构

- 7.1 Recommendations for Chinese Regulators（约 600 words，5 条具体建议）
  - **R1**: Establish "operational governance reference architecture" as a distinct standard category (beyond vehicle-level GB/T 44721 and data-level GB/T draft) — pilot via CSAE T-standard, transition to GB/T over 2-3 years
  - **R2**: Adopt graduated regulatory restriction mechanism (DMV § 227.46-style) — 5-tier: rectification notice / daily restriction / mandatory personnel / immediate restriction / full revocation
  - **R3**: Mandate operator transparency on intervention frequency (Markey-style disclosure) — quarterly aggregated reporting, not raw data
  - **R4**: Require FRIP-equivalent emergency response documentation — leverage 公安部道路交通安全研究中心 expertise
  - **R5**: Integrate operational KPIs into deployment permits — KPI 1, 9, 12, 14 as deployment-conditional metrics

- 7.2 Recommendations for International Standardization（约 400 words，3 条建议）
  - **R6**: SAE J3016 should add operational governance addendum addressing teleoperation roles (currently explicitly out of scope)
  - **R7**: ISO TC 22/SC 33/WG 9 should consider "operational governance reference architecture" as a new work item — building on ISO 22737 LSAD experience but extending to high-speed/Robotaxi cases
  - **R8**: UN GTR on ADS should explicitly include the operational dimension — currently focused on vehicle behavior not fleet-level governance

- 7.3 Recommendations for Operators（约 300 words）
  - Compliance design checklist based on 7-dim matrix
  - Production calibration: continuously feed deployment KPIs back to ROC architecture refinement
  - Cross-jurisdictional preparation: DMV Article 3.7 readiness audit even for non-California operators (anticipated convergence)

---

## 8. Conclusion（结论，400 words）

- Summary of contributions（recapping C1-C4）
- Theoretical implication: a useful analytical separation of "vehicle / data / governance" three-layer regulatory landscape
- Practical implication: ROAM as one possible (open-source, production-calibrated) reference for closing the operational governance gap
- Limitations:
  - Data coverage: Waymo data is one operator; Chinese operator data largely opaque due to Markey-style problem
  - Generalizability: focus on U.S. + China + Germany leaves emerging markets under-examined
  - Temporal validity: regulatory landscape evolving fast (DMV Article 3.7 took 2 years to draft)
- Future research directions:
  - Multi-operator KPI benchmark study
  - "Last 4-5%" deeper characterization (李盼方向 5 follow-up paper)
  - Independent KPI auditing methodology (李盼方向 2 follow-up paper)
  - Emerging market case studies (东南亚、拉美 L4 引入路径)

---

## References（参考文献清单，目标 60-80 篇）

### 法规与标准类（Regulations & Standards，约 15-20 篇）

- California Code of Regulations Title 13, Article 3.7 (Express Terms 2026)
- GB/T 44721-2024, GB/T 43267-2023, GB 44495-2024, GB 44496-2024, GB 44497-2024
- YD/T 4778-2024 至 YD/T 4783-2024
- ISO 22737:2021, ISO 21448:2022, ISO 26262:2018, ISO/PAS 8800:2024, ISO/SAE 21434:2021
- SAE J3016_202104
- UN R155, R156, R157
- StVFernLV (BGBl. 2025 I Nr. 176)

### 政府文件与企业披露（Government & Corporate Documents，约 8-10 篇）

- Markey US Senate Investigation 2026 + 7 companies' written responses
- NHTSA SGO Reports 2021-2026
- NTSB Waymo school bus investigation 2025
- Cruise SF incident DMV order of suspension 2023-10-24
- China 三部门会议 2026-04 公开通报
- Waymo Safety Reports 2020-2025

### 学术文献（Academic Literature，约 30-40 篇）

- Wadud, MacKenzie, Leiby (2016) - shared mobility safety
- Stayton & Stilgoe (2020) - AV policy framing
- Taeihagh & Lim (2019) - governance challenges
- Bonnefon, Shariff, Rahwan (2020) - ethics
- Koopman (2022, 2024) - autonomy safety arguments + 6-role framework
- Mutzenich et al. (2021) - teleoperation cognitive load
- Tener & Lanir (2022) - remote driving HMI
- Liu et al. (2024) - China AV governance
- Wang et al. (2023) - regulatory sandbox
- 张玉新 (2026) - 中文综述论文（《汽车维修》）作为前置工作引用
- 李盼相关 production-grounded references (待 Waymo 公开论文授权)

### Datasets and Tools（约 5-8 篇）

- Waymo Open Dataset
- ROAM open-source repository (github.com/AutoZYX-Labs/ROAM)
- ROAM Incident DB (567 structured records)

---

## 关键图表清单（详）

| # | 类型 | 标题（中英文）| 用途 | 数据来源 |
|---|---|---|---|---|
| Fig 1 | 概念图 | Literature gap map（文献空白图）| §2.4 定位本文 | 自制 |
| Fig 2 | 框架图 | Three-dimensional analytical framework（三维分析框架）| §3.3 方法论 | 自制 |
| Fig 3 | 热力图 | Regulatory coverage heatmap（监管覆盖热力图）| §4.5 跨国对比 | 法规文本分析 |
| Fig 4 | 时间线 | Wuhan event timeline + governance gap（武汉事件时间线 + 治理空白）| §5.1 实证 | 公开报道 + ROAM 分析 |
| Fig 5 | 架构图 | ROAM 4-module reference architecture（ROAM 四模块参考架构）| §6.1 框架综述 | ROAM 文档 |
| Fig 6 | 实证图 | Production-calibrated three-layer decision architecture（产业实证校准的三层决策架构）| §6.4 核心贡献 | Waymo 数据 + ROAM |
| Fig 7 | 嵌套图 | Seven-dimensional responsibility matrix nested structure（七维责任矩阵嵌套结构）| §6.5 责任矩阵 | ROAM 文档 |

| # | 类型 | 标题 | 用途 |
|---|---|---|---|
| Table 1 | 对比表 | Cross-national operational governance comparison | §4.5 |
| Table 2 | 综合表 | Cross-case governance failure analysis | §5.4 |
| Table 3 | 定义表 | Empirically-calibrated 16 KPIs | §6.6 + Supplementary |
| Table 4 | 映射表 | ROAM ↔ existing standards mapping | §6.8 |
| Table 5 | 建议表 | Policy recommendation matrix | §7 |

补充材料（Supplementary Material）：
- Appendix A: Detailed CA DMV Article 3.7 ↔ ROAM mapping (来自 docs/california-article-3-7-mapping.md)
- Appendix B: Full 16 KPI definitions, measurement methods, data sources
- Appendix C: Full text of ROAM responsibility matrix across 10 modes × 7 dimensions

---

## 与现有 ROAM 材料的复用率（Source Material Reuse）

| 论文章节 | 主要复用源 | 改造工作量 |
|---|---|---|
| §1 Introduction | 中文综述 paper/manuscript-zh.md §1 | 中（中→英 + 国际化）|
| §2 Literature Review | docs/literature-review-en.md | 低（已有英文版基础）|
| §3 Methodology | 全新撰写 | 高（无复用源）|
| §4 Cross-National | docs/california-article-3-7-mapping.md + standards/landscape.md | 中（重组）|
| §5 Empirical Cases | incidents/2026/ROAM-2026-004 + Markey 文件 + Cruise 案例 | 中（深化）|
| §6 ROAM Framework | architecture/ + taxonomy/ + benchmarks/ + FRIP | 低（v1.2 已就绪）|
| §6.4 Production Calibration | 李盼 Waymo 内部数据（在授权范围内）| 高（全新）|
| §7 Policy Recommendations | 中文综述 §7-9 + 新增 international + operator 部分 | 高（重新提炼）|
| §8 Conclusion | 全新撰写 | 中 |

估算：约 60% 的内容可从已有 ROAM 材料改造，40% 的实质新工作集中在 §3、§5、§6.4、§7。其中 §6.4 是李盼贡献的核心创新点，是与其他 TR-A 投稿者最大的差异化。

---

## 作者贡献声明（CRediT 草拟）

| Contribution | 张玉新 | 李盼 |
|---|---|---|
| Conceptualization | Lead | Supporting |
| Methodology | Lead | Supporting |
| Investigation | Lead | Supporting |
| Resources (data, materials) | ROAM framework + DMV / GB analysis | Waymo deployment data + production experience |
| Writing - original draft | Lead (most sections) | §6.4 + §5.2 + §8 future directions |
| Writing - review & editing | Lead | Review of all sections |
| Visualization | Joint | Joint |
| Funding acquisition | Lead | — |

---

## Outline 自检（v0.1 完成度）

- [✓] 8 章主体结构完整
- [✓] 每章字数预算合理（合计 11,800 词，目标区间）
- [✓] 每章核心论点 specific 且 actionable
- [✓] 关键证据 / 数据 / 文献清单
- [✓] 关键图表清单（7 图 5 表 + 3 附录）
- [✓] 李盼贡献明确锚定在 §6.4
- [✓] 与 ROAM 已有材料复用关系清晰
- [✓] 4 条 contributions 在 §1.4 与 §8 首尾呼应

待与共同作者确认：
- [ ] §6.4 中 Waymo 数据的授权范围（哪些可公开引用，哪些需要脱敏聚合）
- [ ] §1.2 与 §5 中 Wuhan 事件的描述边界（避免政治敏感性）
- [ ] §7.1 中对中国监管的建议措辞（需要避免被解读为外部压力）
- [ ] §8 future research directions 是否要明确指向 follow-up papers（结合点 3、4、5）

---

*本 outline 是 TR-A 论文起草的工作骨架。基于 ROAM v1.2 + 李盼 Waymo 工作总结起草。后续 abstract、inquiry email 均以此为基础。*
