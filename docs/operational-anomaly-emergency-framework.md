# Operational Anomaly and Traffic Safety Emergency Framework

ROAM public alignment note · v1.3 draft · 2026-06-13

This note summarizes the public-facing framework update derived from ROAM's CSAE group-standard drafting work. It is not the CSAE group standard text, and it does not disclose unpublished drafting-group clauses. The purpose is to make the open-source ROAM framework consistent with the latest drafting direction while preserving the boundary between ROAM as an open research framework and the CSAE standard as a consensus document.

## 中文摘要

本文件是 ROAM v1.3 的公开框架说明，不是 CSAE 团体标准文本，也不发布起草组未定稿条款。

核心口径如下：

1. 运营管理异常事件是总概念。
2. 交通安全突发事件是异常事件中高影响、高紧急度或强外部协同的子集。
3. 并非所有异常事件都是突发事件，但所有交通安全突发事件都应进入异常事件证据链。
4. 普通异常事件强调运营闭环、记录留痕、复盘改进。
5. 交通安全突发事件在此基础上需要更高等级的升级指挥、外部协同、数据保全、现场处置、公众沟通、专项复盘和整改验证。

公开仓库只吸收可复用的框架口径：术语关系、升级判定门、责任矩阵补充、FRIP 面向第一响应者的接口、KPI 组和验证方法。不公开 CSAE 未定稿条款，也不直接引用其他协会未发布草案。

---

## 1. Core Relationship

ROAM now treats `operations management anomaly event` as the umbrella concept.

A `traffic safety emergency event` is a high-impact, high-urgency, or strong external-coordination subset of an operations management anomaly event.

In practice:

| Concept | Public ROAM meaning | Governance focus |
|---|---|---|
| Operations management anomaly event | Any operational condition that requires the operator, ROC, technology provider, fleet owner, or external party to identify, classify, respond, recover, record, or review | Closed-loop operations, evidence, recovery, continuous improvement |
| Traffic safety emergency event | An anomaly event that has caused or may cause injury, property loss, traffic obstruction, public-order impact, large operational interruption, or first-responder involvement | Escalated command, external coordination, data preservation, site safety, public communication, special review |

Not every anomaly is an emergency. But every traffic safety emergency is an anomaly event and must remain inside the anomaly-management evidence chain.

---

## 2. Upgrade Gate

An anomaly should be evaluated for traffic-safety-emergency upgrade using at least the following factors:

- Severity and urgency level
- Road traffic impact
- Passenger, cargo, or public safety impact
- First-responder involvement
- Fleet-level or regional propagation risk
- Duration and recoverability
- Request from regulators, local demonstration-zone platforms, traffic police, fire rescue, emergency medical services, roadside rescue, or other authorized coordination bodies

ROAM recommends treating the following situations as traffic safety emergency candidates:

| Trigger | Typical examples |
|---|---|
| S3 or S4 severity | Serious injury risk, road blockage, major public impact, regional service interruption |
| First-responder participation | Traffic police move request, fire rescue, medical emergency, roadside rescue |
| Road obstruction or secondary-crash risk | Vehicle stopped in lane, intersection blockage, long-duration lane occupation |
| Passenger safety issue | Passenger trapped, passenger injury, sudden illness, child/elderly/mobility-impaired passenger rescue |
| Energy-system or fire risk | Smoke, fire, thermal runaway, high-voltage hazard |
| Fleet-level anomaly | Multi-vehicle stop, region-wide service pause, public gathering, platform outage |
| External upgrade request | Local platform, regulator, or first responder requests emergency handling |

---

## 3. What Changes After Upgrade

For ordinary anomaly events, the minimum requirement is operational closure: response, record keeping, review, and improvement.

After upgrade to a traffic safety emergency, ROAM adds a stricter governance layer:

1. Establish the internal command chain and accountable owner.
2. Coordinate ROC, field rescue, customer support, technical support, fleet owner, and external management platforms.
3. Follow first-responder command for on-scene traffic order, rescue, fire response, or accident investigation.
4. Preserve data, logs, decision records, and evidence chain.
5. Suspend affected vehicles, ODDs, regions, or operating modes when needed.
6. Conduct special post-event review and verify corrective actions before closure.

This upgrade layer is intentionally separate from legal liability determination. ROAM describes operating governance and evidence responsibilities; courts, regulators, police, insurers, and competent authorities decide legal responsibility according to applicable law.

---

## 4. Mapping to ROAM Modules

| ROAM module | v1.3 public update |
|---|---|
| Incident database | Add an `emergency_candidate` / `traffic_safety_emergency` review field where evidence supports it; keep source-based annotation rather than speculation. |
| Scenario taxonomy | Preserve A-F anomaly categories, but add an emergency-upgrade gate across categories rather than creating a separate emergency-only category. |
| Severity and urgency scales | Treat S3/S4 and U3 as strong upgrade signals; allow lower levels to upgrade when first responders, passengers, road obstruction, or fleet-level propagation are involved. |
| Reference architecture | Keep the three-layer response model, but add an emergency escalation path above normal Layer 1/2/3 routing. |
| Responsibility matrix | Add emergency upgrade responsibility: decide upgrade, activate command chain, coordinate external parties, preserve data, notify stakeholders, verify corrective actions. |
| KPI benchmark | Add an emergency escalation KPI group: upgrade detection accuracy, upgrade trigger timeliness, external coordination response time, data-preservation completion, special-review completion, corrective-action closure. |
| FRIP | Treat FRIP as the first-responder-facing document and process package for traffic safety emergencies and other external-coordination events. |
| Verification | Add document review, system-record review, tabletop exercise, historical-event review, sampling audit, and field drill methods for emergency-upgrade readiness. |

---

## 5. FRIP Public Profile

In the public ROAM v1.3 framework, a First Responder Interaction Plan should support at least these information blocks:

1. Scope of vehicles, ODDs, regions, service type, passenger/cargo state
2. Vehicle identification and autonomous-state confirmation
3. Contact channels and escalation chain
4. Safe approach and isolation
5. Passenger and cabin rescue
6. Traffic command and temporary-control coordination
7. Remote assistance and remote-driving boundary
8. Power isolation and energy-system handling
9. Smoke, fire, thermal runaway, and secondary risk
10. Collision and post-incident handling
11. Vehicle movement, towing, and release
12. Data support and personal-information protection
13. Fleet-level anomaly and regional recovery
14. Unmanned delivery, low-speed, and special-purpose vehicle handling
15. Training materials and exercise package
16. Version maintenance and post-event improvement

For public-facing ROAM, these blocks are presented as a reference profile. Operators must adapt them to vehicle design, local emergency processes, Chinese regulatory requirements, and their own service model.

---

## 6. Verification Methods

ROAM recommends validating emergency-upgrade readiness through a combined evidence approach:

| Method | What to check |
|---|---|
| Document review | Operating-mode identification, anomaly classification, emergency-upgrade rules, three-layer process, responsibility matrix, SLA, KPI, FRIP, training, fleet-level anomaly plan |
| System-record review | S2+ anomaly records, remote-assistance and remote-driving records, SOS records, first-responder contact records, emergency-upgrade logs, data-preservation logs, KPI records |
| Tabletop exercise | Emergency upgrade, first-responder participation, fleet anomaly escalation, fire/thermal runaway, passenger rescue, road blockage, temporary traffic control |
| Historical-event review | S3+ events, all traffic safety emergencies, fleet-level anomalies, first-responder events, passenger-trapped events, recurring root causes |
| Sampling audit | Whether actions, timestamps, owners, and closure evidence match the responsibility matrix |
| Field drill | Vehicle identification, approach, power isolation, passenger rescue, towing, ROC contact, data handoff, regional recovery |

---

## 7. Boundary

This public framework does not:

- Replace road traffic rules, accident-liability determination, or on-scene law-enforcement authority
- Replace vehicle type-approval, ADS performance testing, cybersecurity testing, OTA testing, or crash-reporting rules
- Publish or quote unpublished CSAE drafting-group text
- Treat California, China, EU, or other jurisdictional rules as directly interchangeable

The public ROAM role is to provide a reusable open framework, structured evidence model, and terminology bridge. The CSAE group standard remains a Chinese-context consensus document developed through its own procedure.
