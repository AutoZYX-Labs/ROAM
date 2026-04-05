# Lessons from UAV Remote Operations for L4+ Robotaxi Platforms

**从无人机远程运营中汲取的Robotaxi平台设计经验**

> Author: [Yuxin Zhang](https://www.linkedin.com/in/zhangyuxin/)
> Date: April 2026
> Version: v1.0

---

## Why This Matters / 为什么重要

Self-driving car companies are repeating early UAV mistakes from 30 years ago. Military UAV remote operations have accumulated 35+ years of painful lessons, and industrial drone operations (led by DJI) have productized these lessons at scale. Robotaxi remote operations can skip much of this learning curve by applying what UAV operations already know.

自动驾驶公司正在重复30年前无人机领域犯过的错误。美军无人机远程运营积累了35年以上的血泪经验，工业级无人机运营（以DJI为代表）已将这些经验工程化、产品化。Robotaxi远程运营可以跳过大部分学习曲线，直接吸收无人机领域的成熟方案。

This document synthesizes two sources:
- Cummings (2026) on military UAV lessons applicable to self-driving cars [1]
- DJI's productized drone remote operations platform (OcuSync, Dock 2, FlightHub 2, UTC training) [2-4]

---

## 1. Latency: The Hard Ceiling / 延迟：物理天花板

### Cummings' Finding / Cummings的研究发现

Human neuromuscular lag is 200-500ms. Any remote operation requiring an operator to react within 200ms is physically infeasible. Military teleoperation of UAVs with 2s latency produced accident rates so high that remote takeoff/landing was abandoned in favor of local line-of-sight operation, later replaced by full automation [1].

人类神经肌肉反应延迟为200-500ms。要求远程操作员在200ms内响应的场景在物理上不可行。早期美军2秒延迟的远程起降事故率极高，最终被本地视距操作取代，进一步演进为全自动化。

### DJI's Engineering Answer / DJI的工程解答

DJI O4 Air Unit achieves 15ms end-to-end video latency via direct physical-layer transmission (no TCP/IP handshake overhead), 15km range under FCC standards, adaptive frequency hopping across 5.170-5.250 GHz and 5.725-5.850 GHz bands [2].

DJI O4 Air Unit通过直接物理层传输（无TCP/IP握手延迟）实现15ms端到端图传延迟，FCC标准下15km传输距离，5.170-5.250 GHz与5.725-5.850 GHz波段自适应跳频。

### Application to ROAM / 对ROAM的应用

| Operation Mode | Max Tolerable Latency | Recommended Approach |
|---------------|----------------------|---------------------|
| Layer 3 Remote Driving (teleoperation) | < 150ms | Dedicated physical-layer link (DJI-style), speed cap ≤ 10 km/h |
| Layer 2 AI-Assisted Confirm | < 500ms | Commercial cellular OK, AI pre-computes options |
| Layer 1 AI Autonomous | N/A (edge-local) | No latency dependency |

**Key design decision:** Never architect Robotaxi remote driving on best-effort cellular networks. Adopt UAV-style dedicated transmission links with adaptive frequency hopping.

关键设计决策：绝不将Robotaxi远程驾驶架构建立在"尽力而为"的蜂窝网络上。应采用DJI无人机式的专用传输链路与自适应跳频。

---

## 2. Workstation Design / 工作站设计

### Cummings' Finding

- Army Shadow UAV: 80% of crashes due to poor interface design
- Air Force Global Hawk: Only 1 aircraft lost to human factors (high automation, well-designed interface)
- Waymo's inability to recall vehicles during 2025 SF power outage suggests workstation design flaws

Poor control devices (Xbox/PS5 gamepads for shuttle operators) introduce:
- Force feedback absence → inadvertent actuation
- Negative training transfer from gaming
- Unstable control positions

### DJI's Engineering Answer

DJI FlightHub 2 Virtual Cockpit [3]:
- Three-panel layout: map (left), device/flight info (center), operating controls (right)
- Mouse + keyboard input with force-resistant actuation (not gamepad)
- Audible prompts, FPV window, map re-centering
- Single interface scales from 1 drone to fleet operations

DJI RC Plus industrial remote [2]:
- High-brightness outdoor screen, IP54 protection
- Dual joystick mode with force feedback
- Extended battery life for long operations

### Application to ROAM

Remote operator workstation requirements for Layer 2/3:

| Requirement | Specification | Source |
|------------|--------------|--------|
| Primary input | Keyboard + mouse (Layer 2), dedicated force-feedback controller (Layer 3) | DJI FlightHub 2 |
| Display | Multi-monitor: map + live video + vehicle telemetry | DJI Virtual Cockpit |
| Audible alerts | Different tones for warning/error/takeover requests | Military UAV best practice |
| Anti-accidental-actuation | Force thresholds, two-step confirmation for critical commands | DJI RC Plus design |
| Standardized keyboard shortcuts | Industry-common mappings to reduce training | Open question |

---

## 3. Operator Workload / 操作员负荷

### Cummings' Finding

Waymo: 70 operators supervising ~2,000 vehicles = 1:29 ratio. Military has spent hundreds of millions trying to invert to 1:many, still requires multiple operators per single UAV due to:
- Cognitive switching costs between vehicles/tasks
- Workload spikes during emergencies (power outage overwhelmed Waymo's operators)
- Boredom + complacency during quiet periods
- Vigilance decrement over long shifts

Waymo's 2024-2025 delay time data shows NO improvement in incident resolution times (M=21.5min → M=20.3min, p=0.82), suggesting the 1:29 ratio is at a capability ceiling.

### DJI's Engineering Answer

DJI Dock 2 + FlightHub 2 automate most routine operations [4]:
- Pre-programmed mission execution (no operator required for normal flight)
- Operator intervenes only on exceptions (true Layer 2 model)
- AI Copilot (added 2026) triages incoming events before operator attention
- One operator can manage multiple docks because Dock handles local automation

### Application to ROAM

Rethink the operator-to-vehicle ratio question:

| Scenario | Waymo Current (1:29) | DJI Model Equivalent | ROAM Recommendation |
|---------|---------------------|--------------------|--------------------|
| Normal operation | Operator supervises 29 cars | Operator supervises unlimited (automation handles routine) | Let AI handle Layer 1 (70%), operator load scales with Layer 2 events only |
| Emergency surge | System overloads | Cloud platform triages events | Implement AI Copilot-style event triage before operator queue |
| Urban congestion | Routine tasks compete with emergencies | Separate routine ops from emergency response | Dedicated emergency operator pool with lower vehicle ratio |

**Staffing recommendation:** Two-tier operator model:
- Tier 1 (routine supervision): 1:100+ ratio, handles Layer 2 confirmations
- Tier 2 (emergency response): 1:20 ratio, handles all Layer 3 events

分级配置建议：
- 第一级（常规监督）：1:100+ 人车比，处理Layer 2确认任务
- 第二级（应急响应）：1:20 人车比，处理所有Layer 3事件

---

## 4. Training & Certification / 训练与认证

### Cummings' Finding

Military UAV accidents traced to inadequate training preparation. First formal Knowledge-Skills-Abilities (KSA) analysis was conducted AFTER operations were established, resulting in accident strings [1]. Self-driving industry has:
- No published KSA studies for remote operators
- No independent certification requirements
- No checkride-equivalent assessment policy
- No re-certification after software upgrades

### DJI's Engineering Answer

DJI has built one of the world's most mature commercial drone pilot training infrastructures [5]:
- 200+ DJI Unmanned Aerial System Training Centers (UTC) worldwide
- 40,000+ certified pilots through DJI curriculum
- Enterprise Certification: 12 hours online + 2 days in-person training + flight exam
- Explicit KSA-based curriculum covering flight operation, mission workflow, safety, maintenance
- Standardized across countries and aircraft models

### Application to ROAM

Robotaxi remote operator training framework proposal:

| Certification Level | Roles Covered | Training Requirement | Recertification |
|--------------------|--------------|--------------------|-----------------|
| Level 1 Operator | Layer 2 Decider | 8 hours online + 1 day workstation training + scenario exam | Annual + after major ADS updates |
| Level 2 Operator | Layer 3 Responder | Level 1 + 2 days on-vehicle training + supervised shadow shifts | Annual + quarterly scenario refresher |
| Level 3 Operator | Layer 3 Remote Driver | Level 2 + driving simulator + road test + checkride | Semi-annual + after any incident |

Borrow from DJI UTC model: establish regional training centers, standardized curriculum, independent examination authority.

借鉴DJI UTC模式：建立区域性培训中心，标准化课程体系，独立考试机构。

---

## 5. Contingency Planning / 应急预案

### Cummings' Finding

Waymo's inability to recall vehicles during 2025 SF power outage is a contingency planning failure at the leadership level, not just operator level. Military learned that:
- Staffing models valid under nominal conditions WILL fail under emergencies
- Contingency plans must be drilled, not just documented
- Leadership, not operators, are accountable for contingency adequacy

### DJI's Engineering Answer

DJI Dock 2 engineering [4]:
- IP55 weather resistance (operates in rain, dust, extreme temperatures)
- Dual RTK antennas for GPS-denied positioning
- Onboard battery backup independent of grid power
- Automatic return-to-dock on communication loss
- Pre-programmed emergency behaviors (no cloud required)

### Application to ROAM

Robotaxi contingency planning baseline:

| Scenario | Current Industry State | UAV-Inspired Solution |
|---------|----------------------|---------------------|
| Cloud connectivity loss | Vehicles freeze (Wuhan 2026) | Edge-cached decision logic, pre-programmed MRC behaviors |
| Operations center power failure | Waymo SF 2025 paralysis | Geographically distributed backup centers, automatic failover |
| Mass emergency event | Operator overload | Pre-drilled surge protocols, automatic triage escalation |
| Fleet-wide software bug | No recall mechanism | Automatic return-to-depot trigger (like DJI return-to-dock) |
| Regional weather event | Untested behavior | Pre-defined weather-ODD-exit protocols |

**Contingency drills:** Quarterly fleet-wide emergency drills simulating the above scenarios. Board-level accountability for contingency readiness metrics.

---

## 6. DJI/ZYT Heritage Advantage / DJI/卓驭技术传承优势

Zhuoyu Technology (formerly DJI Automotive) inherits DJI's drone remote operations technology stack. This creates structural advantages other Robotaxi operators cannot easily replicate:

| Domain | DJI/ZYT Heritage | Other Robotaxi Operators |
|--------|-----------------|------------------------|
| Low-latency transmission | 30 years of OcuSync development, 15ms physical-layer achievement | Generic cellular-based solutions |
| Operator workstation UX | DJI Fly/Pilot/FlightHub proven interfaces | Custom builds, often immature |
| Certification infrastructure | DJI UTC network with 40,000+ certified pilots | Internal ad-hoc training |
| Hardware engineering | RC Plus-style industrial controllers with force feedback | Gaming controllers or keyboard/mouse |
| Remote + autonomous coexistence | DJI Dock 2 model (autonomous with remote oversight) | Still evolving |
| Edge + cloud architecture | Dock (edge) + FlightHub (cloud) hybrid | Cloud-centric (single point of failure) |

卓驭科技继承DJI无人机远程运营技术栈，在上述六个维度形成其他Robotaxi运营商难以复制的结构性优势。

---

## 7. Recommended ROAM Contributions

The UAV-to-Robotaxi knowledge transfer opens several contribution directions for the ROAM project:

1. **Latency Budget Specification**: Formalize latency requirements per layer in the reference architecture (done in Section 10 of reference-architecture.md)
2. **Workstation Design Guidelines**: Publish open-source workstation UX specifications drawing from DJI FlightHub 2 patterns
3. **Operator Certification Framework**: Propose industry-standard KSA and certification levels
4. **Contingency Planning Template**: Publish open-source emergency drill protocols
5. **Incident Taxonomy Extension**: Add UAV-incident patterns to ROAM's scenario taxonomy

---

## References

[1] Cummings, M., "What self-driving companies should learn from drone remote operations," College of Engineering & Computing, George Mason University, 2026.

[2] DJI Enterprise, "OcuSync/O4 Video Transmission Technology Overview." [Link](https://enterprise.dji.com/)

[3] DJI Enterprise Insights, "DJI FlightHub 2: Virtual Cockpit Now Available." [Link](https://enterprise-insights.dji.com/blog/dji-flighthub-2-virtual-cockpit-now-available)

[4] DJI Enterprise, "DJI Dock 2 Elevates Automated Drone Operations to New Heights." [Link](https://enterprise.dji.com/news/detail/dji-dock-2-release)

[5] DJI Enterprise, "DJI UTC (Unmanned Aerial System Training Centers) Program." [Link](https://enterprise-insights.dji.com/learning-center)

---

*This document is part of the ROAM open-source project. Contributions are welcome.*
