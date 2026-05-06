# 加州 DMV Article 3.7（Express Terms 2026）与 ROAM 框架映射

**California DMV Article 3.7 (Express Terms 2026) ↔ ROAM Framework Mapping**

---

> 作者：Yuxin Zhang
> 日期：2026 年 4 月 27 日
> 版本：v1.0

---

## 引言

加州 DMV 于 2026 年发布的 Article 3.7（Testing of Autonomous Vehicles）"Express Terms"修订版，是迄今为止全球最详尽的远程运营监管文件。本文档系统梳理加州 DMV 修订条款与 ROAM 框架四大模块（事件数据库、场景分类、参考架构、评价基准）的映射关系，为：

1. 在加州运营的企业提供"满足 DMV 安全档案要求的实操工具"
2. 中国 GB/T 立项工作组提供"国际监管对标的具体素材"
3. ROAM 框架自身演进提供"被法规验证的扩展方向"

---

## A. 关键术语映射

| DMV 法定术语 | DMV 法定定义要点 | ROAM 对应概念 | 映射关系 |
|------------|----------------|------------|---------|
| Remote operations support | 包含 remote assistance、remote driving、customer support、dispatching | ROAM 项目命名（Remote Operations & Anomaly Management） | 法规层面验证 ROAM 命名逻辑 |
| Remote assistant | 提供信息/建议，不驾驶车辆 | Layer 2 决策者（Decider） | 直接对应 |
| Remote driver | 实时执行 DDT 或 fallback（含实时刹车、转向、加速、变速） | Layer 3 操作员（Operator） | 直接对应 |
| Designee | 制造商授权进行远程运营支持的自然人 | Koopman 六角色 + ROAM 责任矩阵的"执行责任"维度 | 部分对应 |
| Automated driving system service | OEM 通过订阅向 end user 提供 ADS 能力的服务模式 | M4-M6 模式（个人所有 + OEM 订阅、+ 闲时共享、+ 纯私人 L4） | 验证 ROAM 多模式假设 |
| End user | 注册车主或承租人（非制造商） | M4-M6 模式中的"消费者"角色 | 直接对应 |
| Avoidance area | 应急官员通过紧急地理围栏指定的车队必须撤离区域 | 场景 E5（v1.1 新增） | ROAM 新增场景 |
| Override system | 允许执法和消防人员手动控制车辆的物理装置 | 场景 E6（v1.1 新增）+ 责任矩阵第五维度 | ROAM 新增维度 |
| Emergency geofencing message | 应急官员发送的紧急地理围栏消息 | 场景 E5 触发条件 | 直接对应 |
| Dynamic driving task performance relevant system failure | ADS 性能相关系统失效的法定定义 | 场景 D1-D4（车辆硬件故障）共同触发条件 | 法规化的事件库分类依据 |
| Vehicle immobilization | 车辆停在车道无法继续 DDT，需驾驶员或远程驾驶员驶离 | 场景 C1（路中停车） | 法规化的对应概念 |
| Cybersecurity | 包含 communications、backend logistics、remote assistance systems | 支柱 5（网络安全与数据保护） | 直接对应 |
| Imminent hazard | 可能导致严重伤害的运营状况 | ROAM 严重度分级 S3-S4 | 概念对应 |

---

## B. DMV 安全档案 14 项核心元素 ↔ ROAM 框架映射

DMV 修订后的 § 227.04 要求安全档案必须包含 14 项核心元素。以下为每项与 ROAM 框架的映射：

| DMV 安全档案元素 | DMV 要求要点 | ROAM 对应模块 | ROAM 实操工具 |
|----------------|------------|------------|------------|
| (1) Use Case Description | 高层 ADS 用例描述、与其他道路使用者交互、消费者、基础设施、车队规模、潜在危险 | 运营模式分类（10 模式） | `taxonomy/operating-models-v1.0.md` |
| (2) Operational Design Domain | 仅限 driverless 测试与部署 | 场景分类体系 | `taxonomy/scenario-taxonomy-v1.0.md` |
| (3) Non-Proprietary System Design | 系统关键元素之间交互的概要 | 参考架构（三层决策模型） | `architecture/reference-architecture.md` |
| (4) Vehicle Integration | 现有车辆平台、对车辆基础安全特性的影响、新硬件/软件的集成测试 | 支柱 1（自动驾驶感知与决策） | `docs/technology-pillars.md` |
| (5) Validation and Verification Testing | 测试与分析的过程、未知不安全场景的覆盖、安全保证流程 | 评价基准 + 事件库 | `benchmarks/kpi-definitions.md` + `incidents/` |
| (6) Safety Relevant HMI | 人机界面通信系统的功能 | 支柱 2（远程遥控与人机交互） | `docs/technology-pillars.md` |
| (7) Safety Management Systems | 安全政策/促进/风险管理/保证四子项 + 安全风险管理示例 + 反馈循环 | ROAM 整体框架 | 全部模块 |
| (8) Fleet Operations and Maintenance | 损坏跟踪、维护检查、复用流程 | 责任矩阵（M1-M10）+ KPI | `architecture/responsibility-matrix.md` |
| **(9) Remote Operations, including Remote Assistance** | **激活流程、共享数据、通信延迟、培训四子项** | **ROAM 核心：参考架构 + 评价基准** | **直接对应** |
| (10) Incident Response and Post-Incident Analysis | 事件响应流程、与第三方信息共享、测试演练（仿真、实地、桌面）、根因分析 | 事件数据库 + 场景分类 | `incidents/` + `taxonomy/` |
| (11) Post Crash Vehicle Response | 内/外部沟通、对乘客和路人的支持、事故数据收集 | 场景 E1、F1、F4 + 责任矩阵 | `taxonomy/scenario-taxonomy-v1.0.md` |
| (12) First Responder Safety Interactions | 仅限 driverless 测试与部署 | 场景 E3、E5、E6 | `taxonomy/scenario-taxonomy-v1.0.md` |
| (13) Safety-Relevant Cybersecurity | 公司安全目标、方法论的基础元素 | 支柱 5（网络安全与数据保护） | `docs/technology-pillars.md` |
| (14) Misuse Mitigation | 安全指南、教育项目、ADS 对滥用的响应 | 场景 F3（乘客干扰车辆） + 责任矩阵 | `taxonomy/scenario-taxonomy-v1.0.md` |

---

## C. DMV 量化阈值 ↔ ROAM KPI 映射

| DMV 法定阈值 | DMV 章节 | ROAM KPI | 备注 |
|------------|---------|---------|------|
| 30 秒接通时间 | § 227.42(b)(3)(B) | KPI 9 Emergency Response Phone Pickup Time | 直接对应 |
| 30 秒触达时间 | § 227.42(b)(3)(D) | KPI 10 First Responder Two-Way Communication Reach Time | 直接对应 |
| 2 分钟撤离时间 | § 227.42(b)(3)(F) | KPI 11 Emergency Geofencing Avoidance Compliance Time | 直接对应 |
| 50,000 英里测试里程 | § 227.42(a)(1) | KPI 12 Driverless Permit Pre-Application Test Mileage | 直接对应 |
| 25,000 英里改装前里程 | § 227.42(b)(1) | KPI 13 Operational Parameters Modification Pre-Application Mileage | 直接对应 |

ROAM 原有的 KPI 1-8（MTTR、AI 自主率、误升级率、漏升级率、乘客被困时长、交通恢复时间、人车比、场景覆盖率）与 DMV 14 项安全档案元素中的（5）（10）相互补充，但 DMV 未在法规层面明确对应阈值，给行业留下了"超出 DMV 强制要求的进阶基准"的空间。

---

## D. DMV 人员监管章节 ↔ ROAM 责任矩阵

| DMV 章节 | 监管对象 | 法规要求摘要 | ROAM 对应 |
|---------|---------|-----------|---------|
| § 227.34 Autonomous Vehicle Test Driver Qualifications | 车内测试驾驶员 | 驾照、违章、用药、酒驾、培训完成等 | M1-M10 全部模式 Layer 3（车内人员） |
| § 227.36 AV Test Driver Training Program | 车内测试驾驶员培训 | 培训大纲、敏捷化操作、ADS 能力与限制 | 责任矩阵 + 支柱 6 |
| **§ 227.38 Requirements for Remote Drivers** | **远程驾驶员（实时控制）** | **9 项功能要求 + 5 项培训要求 + 8 项资质** | **Layer 3 远程驾驶 + 责任矩阵** |
| **§ 227.40 Requirements for Remote Assistants** | **远程协助员（提供信息/建议）** | **7 项功能要求 + 5 项培训要求 + 3 项资质** | **Layer 2 AI 辅助 + 人工确认** |
| § 227.42 Driverless Testing Permit | 整体 driverless 运营 | 通信链路、冗余、应急响应、紧急地理围栏、override system、First Responder Interaction Plan | ROAM 整体框架 |
| § 227.46 Restriction of Testing Permit | 分级运营限制 | 介于无处罚与吊销之间的中间地带 | 责任矩阵 + KPI 反馈循环 |

---

## E. ROAM 框架受 DMV 修订验证的核心论点

### E.1 三层决策架构

DMV 严格区分 Remote Driver（实时 DDT）和 Remote Assistant（仅信息建议），并分别设立专章。这与 ROAM 的三层架构完全一致：
- Layer 2（AI 辅助 + 人工确认）= Remote Assistant 的法规化表达
- Layer 3（远程驾驶 + 线下派人）= Remote Driver 的法规化表达

### E.2 OEM 服务化转型

DMV 新增的 "Automated driving system service" 和 "End user" 两个法定术语，正是 ROAM 论文 Section 3 提出的 M4-M6 模式（个人所有 + OEM 订阅服务）的法规化表达。法规层面承认了"OEM 必须从制造商升级为服务提供者"这一转型。

### E.3 群体级监管

DMV 引入的 "Avoidance area" 概念，赋予应急官员单方面下达"车队级"指令的权力。这超越了传统"单车-单事件"监管模式，与 ROAM 论文 Section 8.5 提出的"车队韧性工程"命题相呼应。

### E.4 "Remote Operations Support" 作为统一术语

DMV 将 remote assistance、remote driving、customer support、dispatching 统一在 "Remote operations support" 这一术语下。这正是 ROAM 项目命名（Remote Operations & Anomaly Management）的核心逻辑。

---

## F. ROAM 框架因 DMV 修订需要补充的方向

| 方向 | DMV 触发条款 | ROAM 改进项 | 已完成？ |
|------|------------|----------|--------|
| 紧急地理围栏场景分类 | § 227.42(b)(3)(F-G) | 新增场景 E5 | ✅ v1.1 已添加 |
| Override system 责任划分 | § 227.42(b)(3)(H-I) | 责任矩阵新增第五维度 | ✅ v1.1 已添加 |
| 法规对齐的 KPI 阈值 | § 227.42(b)(3)(B-D)、(F)、§ 227.42(a)(1)、(b)(1) | KPI 9-13 | ✅ v1.1 已添加 |
| 安全档案 14 项实操对接 | § 227.04 | 本文档（california-article-3-7-mapping.md） | ✅ 本文档 |
| 分级运营限制（监管反馈循环） | § 227.46 | 责任矩阵 + KPI 体系增加"监管反馈维度" | 🚧 v1.2 规划 |
| First Responder Interaction Plan 模板 | § 227.42 多处 | 新增 `architecture/first-responder-interaction-plan-template.md` | 🚧 v1.2 规划 |

---

## G. 战略意义

### 对 ROAM 项目

1. **正向**：法规层面验证了 ROAM 的核心命名逻辑、三层决策架构、十种运营模式假设
2. **挑战**：若中国国标晚于加州法规发布，可能面临"被加州术语体系裹挟"的风险
3. **机会**：ROAM 的开源框架可作为企业满足 DMV 安全档案要求的实操工具

### 对中国标准化工作

中国 TC114/SC34 GB/T《智能网联汽车 自动驾驶系统 远程运营与异常管理参考架构》立项时间窗口收紧，建议：

1. 加快立项节奏（建议 2026 年 Q4 完成立项申请）
2. 在术语体系上参照但不照搬加州 DMV 二分法（Remote Driver / Remote Assistant），结合中国《自动驾驶汽车运输安全服务指南》和 YD/T 4778-4783 的术语形成本地化定义
3. 在量化阈值上对齐 DMV 30 秒/2 分钟等基线，但根据中国实际场景适度调整（如中国 1:3 安全员比例 vs 加州无明确人车比要求）

### 对在加州运营的企业

DMV § 227.04 安全档案 14 项强制元素的合规成本极高。ROAM 开源框架可作为：

1. 安全档案各章节的内容模板
2. 跨企业 KPI 对比的参考基准
3. 应急响应流程的实操指南

---

## H. 参考资料

- 完整 PDF：`docs/california-dmv-article-3-7-modified-text.pdf`
- ROAM 标准全景：`standards/landscape.md` § B.4
- 场景分类 v1.1：`taxonomy/scenario-taxonomy-v1.0.md`
- 责任矩阵 v1.1：`architecture/responsibility-matrix.md` 洞察 5、6
- KPI v1.1：`benchmarks/kpi-definitions.md` KPI 9-13
- 论文 Section 2.3：`paper/manuscript-zh.md`

---

## 版本历史

- **v1.0**（2026-04-27）：初始发布，基于加州 DMV Article 3.7 Express Terms（2026）的全文映射

---

*本文档是 ROAM 开源框架的核心组成部分。欢迎通过 GitHub Issues 提交修订建议。*
