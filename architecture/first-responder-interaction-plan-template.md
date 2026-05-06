# First Responder Interaction Plan（FRIP）模板

**ROAM 框架基于加州 DMV Article 3.7 的实操模板**

---

> 版本：v1.0
> 日期：2026-04-27
> 法定依据：California DMV Article 3.7 (Express Terms 2026), § 227.42(b)(3)(I) and § 227.42(i)
> 适用范围：申请 Original Driverless Testing Permit、Driverless Testing Permit Renewal Application、或 Driverless Testing Permit Operational Parameters Modification Application 的制造商

---

## 使用说明

加州 DMV Article 3.7 修订版要求每个申请 Driverless Testing Permit 的制造商必须开发、维护并向 DMV、加州公路巡警（CHP）、以及运营设计域（ODD）内的执法机构和第一响应者提供 First Responder Interaction Plan（以下简称"FRIP"）。该计划必须包含 15 项核心要素（A 到 O），并至少每年更新一次。

本模板由 ROAM 项目根据 § 227.42(i)(1)(A-O) 的法定要求设计，提供：

1. 每项法定要素的标题、要求摘要、内容模板
2. 在 ROAM 框架（场景分类 / 责任矩阵 / KPI）中的对应
3. 制造商需要填入的字段（用 `[ ... ]` 标注）

使用方式：

- 复制本文件至企业内部文档管理系统
- 逐项填入企业自身信息
- 至少每年评审一次，发生事故后立即触发评审
- 评审记录保留至少 3 年

---

## 文档元信息（请填写）

| 字段 | 内容 |
|------|------|
| 制造商名称 | [ MANUFACTURER NAME ] |
| 制造商地址 | [ STREET, CITY, STATE, ZIP ] |
| FRIP 文档版本 | [ vX.Y ] |
| 最后更新日期 | [ YYYY-MM-DD ] |
| 法律责任人 | [ NAME, TITLE ] |
| 紧急专线（24/7） | [ +1 (XXX) XXX-XXXX ] |
| 上传至 DMV 日期 | [ YYYY-MM-DD ] |
| ODD 内的执法机构清单（已通知） | [ AGENCY 1, AGENCY 2, ... ] |
| 法定依据 | California DMV Article 3.7 § 227.42(i) |

---

## A. 运营设计域描述（Operational Design Domain Description）

> 法定要求（§ 227.42(i)(1)(A)）：A description of the operational design domain, including, but not limited to geographical area description, road types, speed range, weather condition, time of day.

### A.1 地理范围

[ Describe geographic boundaries with maps and street-level detail. Include municipal boundary, freeway segments, excluded zones, etc. ]

### A.2 道路类型

- [ ] 城市干道
- [ ] 居民区街道
- [ ] 商业区街道
- [ ] 高速公路（限速 ≥ 55 mph）
- [ ] 快速路（限速 35-55 mph）
- [ ] 学校区域
- [ ] 施工区域
- [ ] 其他：[ DESCRIBE ]

### A.3 速度范围

| 道路类型 | 最低 | 最高 | 备注 |
|---------|------|------|------|
| 城市街道 | [ X mph ] | [ X mph ] | [ NOTES ] |
| 高速公路 | [ X mph ] | [ X mph ] | [ NOTES ] |

### A.4 天气条件

- 允许的天气：[ CLEAR, LIGHT RAIN, ... ]
- 禁止的天气：[ HEAVY RAIN, SNOW, FOG <100m VISIBILITY, ... ]
- 退化条件下的处置策略：[ DESCRIBE — typically MRM activation ]

### A.5 时段

- 允许的时段：[ 24/7 OR HH:MM-HH:MM ]
- 禁止的时段：[ NIGHT WITHOUT STREETLIGHTS, ... ]

### A.6 ROAM 对应

- 本 ODD 描述应与企业内部的 ROAM 场景库交叉引用
- ODD 边界外的事件应触发场景 B3（极端天气感知退化）或对应的 ODD-exit 处置流程

---

## B. 远程运营支持描述（Remote Operations Support Description）

> 法定要求（§ 227.42(i)(1)(B)）：A description of remote operations support – roles and responsibility, types of services and hours of operation.

### B.1 角色与职责

| 角色 | 法定术语对应 | ROAM 框架对应 | 24/7 在岗 |
|------|------------|------------|----------|
| Remote Driver | DMV § 227.02(uu) | Layer 3 | [ Y/N ] |
| Remote Assistant | DMV § 227.02(tt) | Layer 2 | [ Y/N ] |
| Customer Support | DMV § 227.02(vv) "Remote operations support" | 客服支持 | [ Y/N ] |
| Dispatcher | DMV § 227.02(vv) | 调度 | [ Y/N ] |
| Designee（指定授权人） | DMV § 227.02(m) | 责任矩阵执行责任 | [ Y/N ] |

### B.2 服务类型与运营时段

| 服务类型 | 启动条件 | 服务时段 | 平均响应时间 |
|---------|---------|---------|-----------|
| Remote Assistance（信息/建议） | [ TRIGGER ] | [ 24/7 OR ... ] | [ X seconds ] |
| Remote Driving（实时控制） | [ TRIGGER ] | [ 24/7 OR ... ] | [ X seconds ] |
| Emergency Geofencing 响应 | DMV § 227.42(b)(3)(F) | 24/7 | < 2 分钟 |
| 紧急专线接听 | 任何来电 | 24/7 | < 30 秒 |

### B.3 ROAM 对应

- 应详细描述本企业在 ROAM 三层决策架构中的人员配比、班次安排、跨时区协同方案
- 参考 `architecture/responsibility-matrix.md` 责任矩阵中本企业对应的运营模式（M1-M10）

---

## C. 紧急专线电话号码（Dedicated Emergency Telephone Number）

> 法定要求（§ 227.42(i)(1)(C)）：A telephone number dedicated for emergency response officials to directly contact and communicate with a remote operations support personnel who has situational awareness of the vehicle and is available at all times that the vehicle is in operation, and how to use the two-way voice communication link enabling communication between emergency response officials and the remote operations support personnel.

### C.1 紧急专线信息

| 字段 | 内容 |
|------|------|
| 专线号码 | [ +1 (XXX) XXX-XXXX ] |
| 启用时段 | 24/7 在车辆公路运营期间 |
| 接听人员 | 具备车辆态势感知的远程运营支持人员 |
| 接通时间目标 | < 30 秒（DMV § 227.42(b)(3)(B)，法定要求）|
| 替代专线（备用） | [ +1 (XXX) XXX-XXXX ] |

### C.2 双向语音通信链路使用方法

[ Describe step-by-step how a first responder can use the two-way voice communication link installed in the vehicle. Include physical button location, expected behavior, fallback if no response. ]

### C.3 ROAM 对应

- 30 秒接通时间目标对应 KPI 9（Emergency Response Phone Pickup Time）
- 双向语音触达时间对应 KPI 10（First Responder Two-Way Communication Reach Time）

---

## D. 制造商地址（Manufacturer's Address）

> 法定要求（§ 227.42(i)(1)(D)）：The manufacturer's address.

[ MANUFACTURER LEGAL ADDRESS ]
[ FOR SERVICE OF PROCESS / OFFICIAL CORRESPONDENCE ]

如有 California 营业地址，亦应在此列出：[ CALIFORNIA OFFICE ADDRESS ]

---

## E. 车辆识别（Vehicle Identification）

> 法定要求（§ 227.42(i)(1)(E)）：A description and pictures, diagrams, or other means to identify the autonomous vehicle.

### E.1 车辆型号

[ MODEL, YEAR, BODY STYLE ]

### E.2 视觉识别要素

[ Insert photos showing the vehicle from front, rear, side. Include any distinctive markings, lighting, sensor pods, or company branding that allows first responders to identify the vehicle as autonomous. ]

### E.3 标识灯（Marker Lamps）

[ Describe location, color, behavior of automated driving system marker lamps as required by Vehicle Code § 38750(d)(4)(i), if applicable ]

### E.4 ROAM 对应

- 车辆识别信息应与企业事件数据库（incidents/）的 vehicle_id 字段交叉引用

---

## F. 安全接近指引（Safe Approach Instructions）

> 法定要求（§ 227.42(i)(1)(F)）：Instructions on how to safely approach the autonomous vehicle; how to determine the vehicle's mode (e.g., autonomous mode); and how to immobilize the autonomous vehicle when equipped with an override system.

### F.1 安全接近步骤

1. [ STEP 1 — e.g., observe vehicle from a safe distance to determine if moving ]
2. [ STEP 2 — e.g., check marker lamps to determine autonomous mode ]
3. [ STEP 3 — e.g., approach from the front-side rather than directly in front ]
4. [ STEP 4 — e.g., use two-way communication device on driver-side B-pillar ]

### F.2 模式判断方法

| 视觉信号 | 含义 |
|---------|------|
| [ Marker lamp on, color X ] | 自主模式 |
| [ Marker lamp off ] | 常规模式或熄火 |
| [ Hazard lights flashing + marker lamp X ] | MRM 激活，车辆处于安全停车状态 |

### F.3 Override 系统使用（如配备）

如车辆配备 override 系统：

1. [ Location of override interface — e.g., driver-side B-pillar ]
2. [ Procedure — e.g., insert physical key + press hold button for 3 seconds ]
3. [ Expected behavior — e.g., vehicle's autonomous mode disengages within 5 seconds ]
4. [ Move/immobilize commands — e.g., joystick controls forward/reverse at <5 mph ]

如车辆未配备 override 系统：

1. 联系紧急专线 [ +1 (XXX) XXX-XXXX ]
2. 远程运营人员将协助移动或固定车辆

### F.4 ROAM 对应

- Override 触发对应 ROAM 场景 E6（First Responder Override System Activation）
- 接近车辆的安全步骤应与 ROAM 场景 E1（被他车撞击）的事后处置流程协同

---

## G. 注册、许可、保险信息访问（Registration / Permit / Proof of Insurance Access）

> 法定要求（§ 227.42(i)(1)(G)）：Instructions for accessing registration, permit, and proof of insurance information.

### G.1 文件存放位置

| 文件 | 物理位置 | 备份位置 |
|------|---------|---------|
| Vehicle Registration | [ LOCATION IN VEHICLE ] | 制造商法规事务部 |
| Driverless Testing Permit (OL 315A) 副本 | [ LOCATION IN VEHICLE ] | 制造商法规事务部 |
| 保险证明 | [ LOCATION IN VEHICLE ] | 制造商法务部 |

### G.2 远程访问方法

[ If documents are accessible remotely — e.g., through a QR code on vehicle or via two-way communication device — describe the procedure ]

---

## H. 电源与电气安全（Power Source / Electrical Safety）

> 法定要求（§ 227.42(i)(1)(H)）：Instructions on the vehicle's electrical power source and instructions for safely disconnecting or otherwise disabling electrical power on the vehicle.

### H.1 电源类型

- [ ] 纯电动（BEV）
- [ ] 混动（HEV / PHEV）
- [ ] 燃油（ICE）
- [ ] 燃料电池（FCEV）

### H.2 电池规格（如电动）

| 参数 | 值 |
|------|-----|
| 电压 | [ X V ] |
| 容量 | [ X kWh ] |
| 化学类型 | [ NMC / LFP / OTHER ] |
| 热失控特征 | [ DESCRIBE ] |

### H.3 紧急断电步骤

1. [ STEP 1 — Locate emergency cut-off switch (typically under hood / front trunk) ]
2. [ STEP 2 — Press / pull / rotate as appropriate ]
3. [ STEP 3 — Wait X minutes for capacitors to discharge ]
4. [ STEP 4 — Validate power disconnection by [ INDICATOR ] ]

### H.4 高压电缆识别

[ Color coding (typically orange) and location diagram ]

---

## I. 与远程运营协同移动车辆（Coordination with Remote Operations to Move Vehicle）

> 法定要求（§ 227.42(i)(1)(I)）：Instructions that enable first responders to act independently or in concert with remote operations support personnel to drive or otherwise safely remove the autonomous vehicle from the active portion of the roadway. Instructions shall include how first responders will move the autonomous vehicle from the roadway, if the vehicle is equipped with an override system.

### I.1 优先级

1. 第一选择——通过双向语音联系远程运营人员，协调远程移动
2. 第二选择——如车辆配备 override 系统，使用 override 直接控制（参见 F.3）
3. 第三选择——拖车

### I.2 远程协同步骤

[ Describe how a first responder communicates the desired action (move forward 10ft, pull to curb, etc.) to remote operations personnel, and the expected feedback loop ]

### I.3 ROAM 对应

- 该流程对应 ROAM 责任矩阵 Layer 3（远程驾驶 + 线下派人）
- 需详细描述责任分配：移动指令由谁下达、谁执行、谁记录

---

## J. 乘客检测（Passenger Detection）

> 法定要求（§ 227.42(i)(1)(J)）：The means for determining the presence of passengers and how first responders may assist them with exiting the vehicle.

### J.1 乘客数量检测

[ Describe how first responders can determine if passengers are inside — e.g., visual through windows, in-cabin camera feed accessible via emergency line, occupancy sensor indicator ]

### J.2 协助乘客出车流程

1. [ STEP 1 — Verify passenger consciousness and condition ]
2. [ STEP 2 — Unlock doors via [ METHOD — e.g., emergency line request, manual override ] ]
3. [ STEP 3 — Assist as needed ]

### J.3 ROAM 对应

- 该流程对应 ROAM 场景 F1（乘客被困）和 F4（乘客医疗紧急情况）

---

## K. 乘客撤离特殊考虑（Special Extrication Considerations）

> 法定要求（§ 227.42(i)(1)(K)）：Any special considerations for extricating passengers from the autonomous vehicle, including any appropriate or inappropriate cut points or cut zones in the vehicle body/structure.

### K.1 切割安全区域（Safe Cut Zones）

[ Reference manufacturer's vehicle structural diagram showing zones where hydraulic spreaders/cutters are safe to use ]

### K.2 禁切区域（No-Cut Zones）

| 区域 | 原因 |
|------|------|
| [ ZONE A ] | [ High-voltage cable runs ] |
| [ ZONE B ] | [ Battery pack location ] |
| [ ZONE C ] | [ Pressurized component ] |

### K.3 推荐撤离工具与流程

[ Specific tools and step-by-step extrication procedure approved by the manufacturer ]

---

## L. 火灾考虑（Fire Considerations）

> 法定要求（§ 227.42(i)(1)(L)）：A description of any unique hazards or special considerations for extinguishing fires on or around the vehicle, if applicable.

### L.1 电池火灾应对（如电动）

[ Specific procedure for lithium-ion or other chemistry — typically large amounts of water, isolation, monitoring for re-ignition ]

### L.2 推荐灭火剂

| 火灾类型 | 推荐灭火剂 | 用量估计 |
|---------|----------|---------|
| 电池火灾 | 大量水 | [ X gallons ] |
| 燃油火灾 | [ AGENT ] | [ AMOUNT ] |
| 电气火灾 | [ AGENT ] | [ AMOUNT ] |

### L.3 复燃监测

[ Battery thermal runaway can re-ignite hours later. Provide monitoring procedure ]

### L.4 ROAM 对应

- 对应 ROAM 场景 D3（车辆起火）

---

## M. 拖车协同（Towing Coordination）

> 法定要求（§ 227.42(i)(1)(M)）：Instructions for coordinating with remote operations support personnel and safety considerations for first responders needing to tow the autonomous vehicle from the roadway.

### M.1 拖车前协同流程

1. 通过紧急专线通知远程运营人员
2. 远程运营人员将：
   - [ ] 解锁车辆
   - [ ] 关闭自主模式
   - [ ] 释放电子驻车（如适用）
   - [ ] 提供拖车位置建议（前轮 / 后轮 / 全装）
3. 第一响应者确认远程运营人员已完成准备后开始拖车

### M.2 拖车安全注意事项

| 项目 | 说明 |
|------|------|
| 拖车类型 | [ FLATBED ONLY / WHEEL LIFT OK / etc. ] |
| 高压系统隔离 | [ PROCEDURE ] |
| 传感器保护 | [ DO NOT TOUCH SENSOR DOMES ] |

---

## N. 自主模式判断与停用（Mode Determination and Deactivation）

> 法定要求（§ 227.42(i)(1)(N)）：How to recognize whether the vehicle is in autonomous mode, description of the visual indicator inside the cabin that indicates when the autonomous technology is engaged, description of automated driving system marker lamps as described in Vehicle Code 38750(d)(4)(i), if applicable, and if possible, how to safely deactivate the autonomous mode and validate that the autonomous mode has been deactivated.

### N.1 车内视觉指示

[ Description of in-cabin display showing autonomous mode status — typically a digital cluster icon or status panel ]

### N.2 车外标识灯

[ Description of marker lamps per Vehicle Code § 38750(d)(4)(i) — color, location, behavior ]

### N.3 自主模式停用步骤

1. [ STEP 1 — e.g., press emergency stop button on driver-side B-pillar ]
2. [ STEP 2 — Verify deactivation via [ INDICATOR — e.g., cluster light extinguishes, two-way communication confirms ] ]
3. [ STEP 3 — Vehicle remains in conventional mode until manually re-enabled by manufacturer ]

### N.4 验证停用

[ Describe how a first responder can independently verify that autonomous mode has been deactivated, not merely paused ]

---

## O. 其他危险信息（Other Hazard Information）

> 法定要求（§ 227.42(i)(1)(O)）：Any additional information the manufacturer deems necessary regarding hazardous conditions or public safety risks associated with the operation of the autonomous vehicle.

### O.1 已知危险或限制

[ Examples: visibility limitations of certain sensors in heavy rain; behavior in active emergency scenes that may surprise responders; LIDAR eye safety ratings; etc. ]

### O.2 制造商主动披露的注意事项

[ Items not legally required but the manufacturer believes first responders should know ]

---

## P. 重型商用车额外要求（Heavy-Duty Commercial Motor Vehicle Additional Requirements）

> 法定要求（§ 227.42(i)(2)）：In addition to the requirements of subsection (i)(1), the First Responder Interaction Plan for autonomous heavy-duty commercial motor vehicles shall include the following.

仅适用于 autonomous heavy-duty commercial motor vehicle（GVWR ≥ 10,001 lbs）。

### P.1 车辆检查站机动方案

[ Description of how the vehicle will maneuver to designated location for vehicle inspection without unreasonable risk ]

### P.2 ADS 与远程人员对检查的响应能力

- ADS 能识别并响应执法人员的检查指令：[ Y/N + DESCRIBE ]
- Remote Driver 与 Remote Assistant 在检查期间的合规承诺：[ DESCRIBE ]

### P.3 检查响应详细描述

[ Description of how ADS recognizes and responds to vehicle inspection — directions by law enforcement, traffic control devices, signal lamps, changeable message signs, pavement markings, designated inspection zones ]

### P.4 检查/交通停车遵从性认证

每个 Remote Assistant 和 Remote Driver 应遵从执法官员命令，未经执法官员指示不得移动车辆。本企业以书面形式认证此项要求：[ CERTIFICATION STATEMENT ]

### P.5 紧急专线对接（重型商用车专用）

如果重型商用车有专属应急专线，请在此列出：

| 字段 | 内容 |
|------|------|
| 专属应急专线 | [ +1 (XXX) XXX-XXXX ] |
| 24/7 接听确认 | [ Y/N ] |
| 接通时间目标 | < 30 秒 |

---

## 评审与维护

### 评审周期

- 常规评审——每年至少一次（DMV § 227.42(i)(2)/(3)）
- 触发评审——发生以下情况立即触发：
  - 与执法/消防/医疗的实际交互事件
  - 车辆设计、运营软件、远程运营流程的重大变更
  - DMV 或其他监管方提出的新要求
  - ROAM 框架的版本升级（v1.x → v1.y）

### 评审流程

1. 制造商内部评审（法务、安全、运营三方共同确认）
2. 与至少一家 ODD 内的第一响应机构进行实战演练或桌面演练
3. 更新 FRIP，提交至 DMV、CHP、ODD 内所有执法机构
4. 在 DMV 官网公示更新版本日期

### 评审记录模板

| 评审日期 | 触发原因 | 主要变更 | 责任人 | DMV 提交日期 |
|---------|---------|---------|--------|------------|
| [ DATE ] | [ ANNUAL / TRIGGERED ] | [ SUMMARY ] | [ NAME ] | [ DATE ] |

---

## 在 ROAM 框架中的位置

本 FRIP 模板对应 ROAM 框架的以下模块：

| FRIP 章节 | ROAM 对应 |
|----------|---------|
| A. ODD 描述 | 场景分类 + ODD 监控 |
| B. 远程运营支持描述 | 责任矩阵 + 三层决策架构 |
| C. 紧急专线 | KPI 9, 10 |
| D. 制造商地址 | 责任矩阵法律责任维度 |
| E. 车辆识别 | 事件数据库 vehicle_id 字段 |
| F. 安全接近 + Override | 场景 E6 + 责任矩阵 Override 维度 |
| G-O. 其他章节 | 责任矩阵 + 场景分类（D3、E1、F1、F4 等） |
| 评审周期 | KPI 16（Restriction Recurrence Rate）+ 监管反馈维度 |

---

## 版本历史

- v1.0（2026-04-27）：初始发布。基于加州 DMV Article 3.7 Express Terms (2026) § 227.42(i) 的 15 项法定要求 + 重型商用车 5 项附加要求。

---

## 法律免责声明

本模板由 ROAM 开源项目提供，仅作为制造商起草 FRIP 的参考起点。最终的 FRIP 文档必须由制造商的法务团队和合规专家审查，确保其准确反映本企业的车辆设计、运营实际和承诺。ROAM 项目不对基于本模板编写的任何 FRIP 内容承担法律责任。

---

*本模板是 ROAM 开源框架的核心组成部分。欢迎通过 GitHub Issues 提交修订建议。*
