# ROAM Standards Mapping

**Version:** 1.0
**Last Updated:** 2026-04-03
**Maintainer:** Zhang Yuxin (张玉新)

This document maps international and Chinese standards to ROAM's four core modules: **Incident Database**, **Scenario Taxonomy**, **Reference Architecture**, and **Evaluation Benchmarks**.

---

## Overview Table

| # | Standard | Full Title | Version / Year | Primary ROAM Module(s) |
|---|----------|-----------|----------------|----------------------|
| 1 | GB XXXXX—XXXX | 智能网联汽车 自动驾驶系统安全要求 (Intelligent Connected Vehicles — Safety Requirements for Automated Driving Systems) | Draft, 2026-02 | Architecture, Benchmarks |
| 2 | UN GTR on ADS | GRVA draft Global Technical Regulation on Automated Driving Systems | ECE-TRANS-WP.29-GRVA-2026-02e | Benchmarks, Incidents |
| 3 | ISO 34502 | Road vehicles — Test scenarios for automated driving systems | 2022 | Taxonomy |
| 4 | ISO 21448 | Road vehicles — Safety of the intended functionality (SOTIF) | 2022 | Taxonomy, Incidents |
| 5 | ISO 26262 | Road vehicles — Functional safety | 2018 (2nd ed.) | Architecture, Benchmarks |
| 6 | ISO 22737 | Low-speed automated driving systems — Performance requirements for automated driving — Predefined routes | 2021 | Architecture |
| 7 | ISO/PAS 8800 | Road vehicles — Safety and artificial intelligence | 2024 | Architecture, Benchmarks |
| 8 | SAE J3016 | Taxonomy and Definitions for Terms Related to Driving Automation Systems for On-Road Motor Vehicles | Rev. May 2024 | Taxonomy, Architecture |
| 9 | UK AV Act 2024 | Automated Vehicles Act 2024 | 2024 | Architecture, Incidents |
| 10 | German StVFernLV | Straßenverkehr-Fernlenk-Verordnung (Road Traffic Remote Driving Ordinance) | Dec 2025 | Architecture |
| 11 | NHTSA SGO | Standing General Order on Crash Reporting (NHTSA Order 5010.01) | 2021, amended 2024 | Incidents |
| 12 | CSAE 316.1 / 316.2 | 智能网联汽车 环境感知系统预期功能安全 (ICV Environment Perception System SOTIF) | 2023 | Taxonomy |
| 13 | CSAE 336 | 智能网联汽车预期功能安全场景要素及管理要求 (ICV SOTIF Scenario Elements and Management Requirements) | 2024 | Taxonomy, Benchmarks |

---

## Detailed Mapping

### 1. GB XXXXX—XXXX — 智能网联汽车 自动驾驶系统安全要求

**Status:** 征求意见稿 (Public comment draft), released February 2026

**Key Sections Relevant to ROAM:**

- **Appendix C.2 — Remote Assistance Requirements (远程协助要求):** Defines the functional requirements for L4 ADS remote assistance, including communication latency thresholds, operator qualification, and fallback procedures when remote links fail. Directly maps to ROAM's Layer 2 (AI-Assisted + Human Confirm) and Layer 3 (Remote Driving / On-Site) in the Reference Architecture.
- **Appendix D — Safety Case Structure (安全档案结构):** Specifies the content and format of the safety case that ADS developers must compile. ROAM's Incident Database provides the empirical evidence base that feeds into Safety Case sections on operational experience and residual risk demonstration.
- **Table D.1 — Hazard Categories (危害类别):** Enumerates hazard types by severity and exposure. ROAM's Scenario Taxonomy (Categories A-F) can be mapped to these hazard categories for completeness analysis.
- **Residual Risk Acceptance Criteria:** Specifies quantitative targets (e.g., 10^-4/h for critical failures). ROAM's Benchmarks module defines KPIs that support measurement against these thresholds.

**ROAM Module Mapping:**
- Architecture: C.2 remote assistance requirements inform the three-layer decision model
- Benchmarks: Residual risk targets provide quantitative baseline for KPI definitions
- Incidents: Operational evidence for Safety Case (Appendix D)
- Taxonomy: Hazard category alignment with Table D.1

---

### 2. UN GTR on ADS — GRVA Draft Global Technical Regulation

**Status:** Under development at WP.29/GRVA, document ECE-TRANS-WP.29-GRVA-2026-02e

**Key Sections Relevant to ROAM:**

- **"Competent and Careful Human Driver" Benchmark:** Establishes the global safety baseline — an ADS must perform at least as safely as a competent and careful human driver. ROAM's Benchmarks module can provide empirical data to calibrate this standard.
- **Safety Case Requirements:** The GTR requires manufacturers to maintain a comprehensive safety case. ROAM's Incident Database and Scenario Taxonomy provide structured inputs for these safety cases.
- **Operational Design Domain (ODD) Definition:** Requires explicit ODD specification. ROAM's Taxonomy categories map to ODD boundary conditions and edge cases.

**ROAM Module Mapping:**
- Benchmarks: Empirical baseline data for "competent and careful human driver" calibration
- Incidents: Structured evidence for manufacturer safety cases
- Taxonomy: ODD boundary condition identification

---

### 3. ISO 34502 — Test Scenarios for Automated Driving Systems

**Version:** 2022

**Key Sections Relevant to ROAM:**

- **Scenario Abstraction Levels:** Defines functional scenarios, logical scenarios, and concrete scenarios. ROAM's Taxonomy operates primarily at the functional scenario level, with incident records providing concrete scenario instances.
- **Scenario Description Framework:** Provides a structured approach to describing test scenarios including road geometry, traffic participants, and environmental conditions. ROAM's incident YAML schema aligns with this framework.
- **Scenario Identification Methods:** Describes knowledge-based, data-driven, and search-based approaches. ROAM's Incident Database supports the knowledge-based approach through real-world anomaly records.

**ROAM Module Mapping:**
- Taxonomy: Primary alignment — ROAM's 6 categories map to ISO 34502 scenario layers
- Incidents: Concrete scenario instances derived from real-world events

---

### 4. ISO 21448 — Safety of the Intended Functionality (SOTIF)

**Version:** 2022

**Key Sections Relevant to ROAM:**

- **Triggering Conditions Analysis (Clause 6):** Identifies conditions that can trigger hazardous behavior in the absence of system faults. ROAM's Taxonomy Categories B (Perception/Decision Failure) and C (Planning/Execution Anomaly) directly correspond to SOTIF triggering conditions.
- **Unknown Unsafe Scenario Identification (Clause 8):** Methods for discovering previously unknown hazardous scenarios. ROAM's Incident Database serves as a continuously updated source for identifying these scenarios through real-world operational feedback.
- **Residual Risk Evaluation (Clause 10):** Framework for evaluating whether residual risk is acceptable. ROAM's Benchmarks provide quantitative metrics that support this evaluation.

**ROAM Module Mapping:**
- Taxonomy: Triggering condition classification (Categories B, C)
- Incidents: Unknown unsafe scenario discovery through operational data
- Benchmarks: Residual risk evaluation support

---

### 5. ISO 26262 — Functional Safety

**Version:** 2018 (2nd edition)

**Key Sections Relevant to ROAM:**

- **ASIL Classification (Part 3):** Automotive Safety Integrity Level determination based on severity, exposure, and controllability. ROAM incidents include severity ratings that can be mapped to ASIL parameters.
- **Safety Analysis Methods (Part 9):** Hazard analysis techniques (FMEA, FTA, HAZOP). ROAM's Taxonomy provides a structured input for these analysis methods.
- **Monitoring and Response (Part 4, Clause 7):** Requirements for safety mechanisms that detect and respond to faults. ROAM's Architecture Layer 1 (AI Autonomous Response) implements this concept at the fleet operations level.

**ROAM Module Mapping:**
- Architecture: Safety mechanism design principles inform the three-layer model
- Benchmarks: ASIL-derived quantitative safety targets
- Taxonomy: Input for hazard analysis methods

---

### 6. ISO 22737 — Low-Speed Automated Driving Systems

**Version:** 2021

**Key Sections Relevant to ROAM:**

- **Driverless Operation Dispatcher (DOD) Role:** Defines the responsibilities and requirements for the person who monitors and supervises driverless shuttle operations. This concept directly informs ROAM's remote operator role in Architecture Layers 2 and 3.
- **Performance Requirements (Clause 5):** Specifies minimum performance criteria for L4 shuttle systems, including response times and safety margins. Applicable to ROAM's Benchmarks for low-speed scenarios.
- **Predefined Route Constraints:** Limits operation to predefined routes — relevant for ROAM's Taxonomy when classifying incidents by ODD characteristics.

**ROAM Module Mapping:**
- Architecture: DOD role definition informs remote operator requirements
- Benchmarks: Performance thresholds for low-speed L4 operations

---

### 7. ISO/PAS 8800 — Safety and Artificial Intelligence

**Version:** 2024

**Key Sections Relevant to ROAM:**

- **AI Safety Lifecycle (Clause 5):** Covers the safety lifecycle for AI components in road vehicles, including design, training, validation, and monitoring. ROAM's Architecture Layer 1 relies on AI systems whose safety must be managed per this standard.
- **Data Quality and Sufficiency (Clause 7):** Requirements for training and validation data. ROAM's Incident Database provides a curated dataset of edge cases that can support AI validation.
- **Performance Monitoring in Operation (Clause 9):** Ongoing monitoring of AI performance post-deployment. ROAM's Benchmarks define metrics for this operational monitoring.

**ROAM Module Mapping:**
- Architecture: AI safety lifecycle considerations for Layer 1 autonomous response
- Benchmarks: AI performance monitoring metrics
- Incidents: Edge case data for AI validation

---

### 8. SAE J3016 — Taxonomy and Definitions for Driving Automation

**Version:** Revised May 2024

**Key Sections Relevant to ROAM:**

- **Level Definitions (Clause 5):** Defines L0-L5 automation levels. ROAM focuses on L4+ operations where there is no fallback-ready user.
- **Remote Support Terminology (Clause 3):** The May 2024 revision clarifies terminology around remote driving, remote assistance, and driverless operation. ROAM adopts this terminology in its Architecture and Taxonomy.
- **DDT Fallback (Clause 5.5):** Defines the dynamic driving task fallback concept. ROAM's three-layer architecture represents a structured approach to DDT fallback at the fleet operations level.

**ROAM Module Mapping:**
- Taxonomy: Level-based classification and remote support terminology
- Architecture: DDT fallback structure informs the three-layer model

---

### 9. UK Automated Vehicles Act 2024

**Version:** 2024

**Key Sections Relevant to ROAM:**

- **Authorised Self-Driving Entity (ASDE) Concept:** The ASDE bears legal responsibility for the vehicle's driving behavior. This has implications for how ROAM's Architecture assigns responsibility across the three decision layers.
- **No User-in-Charge (NUIC) Operation Mode:** Defines operation without any human user responsible for driving. This mode is the operational context for ROAM's entire framework.
- **Investigation and Reporting Requirements:** Establishes requirements for incident investigation. ROAM's Incident Database structure supports compliance with these requirements.

**ROAM Module Mapping:**
- Architecture: ASDE responsibility model informs decision authority allocation
- Incidents: Investigation and reporting structure alignment

---

### 10. German StVFernLV — Remote Driving Ordinance

**Version:** December 2025

**Key Sections Relevant to ROAM:**

- **Teleoperated Driving Framework:** Europe's first comprehensive legal framework specifically for remote-controlled driving of motor vehicles. Defines requirements for remote operators, communication infrastructure, and operational constraints.
- **Operator Qualification and Working Conditions:** Specifies training, certification, and working hour limits for remote operators. Informs ROAM's Architecture Layer 3 operator requirements.
- **Communication Requirements:** Mandates minimum bandwidth, latency, and redundancy for remote driving links. Directly applicable to ROAM's Benchmarks for communication KPIs.

**ROAM Module Mapping:**
- Architecture: Operator requirements and communication infrastructure for Layer 3
- Benchmarks: Communication performance thresholds

---

### 11. NHTSA Standing General Order on Crash Reporting

**Version:** 2021, amended 2024

**Key Sections Relevant to ROAM:**

- **ADS Crash Reporting Requirements:** Mandates reporting of crashes involving ADS-equipped vehicles within specified timeframes. ROAM's Incident Database schema aligns with NHTSA reporting fields.
- **Data Elements:** Specifies required data elements including crash circumstances, automation level, and human involvement. ROAM's YAML incident format captures these elements.
- **Reporting Thresholds:** Defines severity thresholds that trigger mandatory reporting. ROAM's severity classification system can be calibrated to these thresholds.

**ROAM Module Mapping:**
- Incidents: Primary alignment — ROAM incident schema supports NHTSA reporting compliance

---

### 12. CSAE 316.1 / 316.2 — ICV Environment Perception System SOTIF

**Version:** 2023

**Key Sections Relevant to ROAM:**

- **SOTIF Triggering Condition Analysis for Perception Systems:** Enumerates triggering conditions specific to camera, lidar, and radar perception systems. ROAM's Taxonomy Category B (Perception/Decision Failure) aligns with these triggering conditions.
- **Performance Limitation Identification:** Methods for identifying functional insufficiencies in perception systems. ROAM incidents involving perception failures provide empirical evidence of these limitations.

**ROAM Module Mapping:**
- Taxonomy: Perception failure sub-scenarios mapped to CSAE triggering conditions
- Incidents: Real-world evidence of perception system limitations

---

### 13. CSAE 336 — ICV SOTIF Scenario Elements and Management Requirements

**Version:** 2024

**Key Sections Relevant to ROAM:**

- **Scenario Element Framework:** Defines the elements required to describe SOTIF-relevant scenarios, including static road elements, dynamic traffic participants, and environmental conditions. ROAM's Taxonomy and incident YAML schema capture these elements.
- **Scenario Management Requirements:** Specifies how scenario databases should be maintained, updated, and quality-controlled. ROAM's contributing guidelines and incident template follow these principles.

**ROAM Module Mapping:**
- Taxonomy: Scenario element alignment
- Benchmarks: Scenario completeness metrics

---

## Cross-Reference Matrix

| Standard | Incidents | Taxonomy | Architecture | Benchmarks |
|----------|:---------:|:--------:|:------------:|:----------:|
| GB XXXXX—XXXX (ADS Safety) | x | x | x | x |
| UN GTR on ADS | x | x | | x |
| ISO 34502 (Scenarios) | x | x | | |
| ISO 21448 (SOTIF) | x | x | | x |
| ISO 26262 (FuSa) | | x | x | x |
| ISO 22737 (Low-speed) | | | x | x |
| ISO/PAS 8800 (AI Safety) | x | | x | x |
| SAE J3016 (Automation Levels) | | x | x | |
| UK AV Act 2024 | x | | x | |
| German StVFernLV | | | x | x |
| NHTSA SGO (Crash Reporting) | x | | | |
| CSAE 316.1/316.2 (Perception SOTIF) | x | x | | |
| CSAE 336 (Scenario Elements) | | x | | x |

---

## Notes

1. Standard numbers and versions are current as of April 2026. The GB standard is in draft (征求意见稿) stage and its final number has not been assigned.
2. Mappings indicate primary relevance. Most standards have secondary touchpoints with additional ROAM modules.
3. ROAM does not claim compliance with any standard. This mapping identifies alignment points to support users in their own compliance efforts.
4. For the Chinese-language alignment analysis, see [standard-alignment-cn.md](standard-alignment-cn.md).
