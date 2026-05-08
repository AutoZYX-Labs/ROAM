# ROAM × 李盼 合作研究方向 v0.1

> 中国 L4 自动驾驶车辆运营治理研究合作框架
> 起草人：张玉新（吉林大学）
> 致：李盼博士（同济大学）
> 日期：2026-05-08
> 状态：v0.1 草案，待双方协商后定稿

---

## 1. 项目背景

ROAM（Remote Operations and Anomaly Management）是一个面向 L4 自动驾驶车辆运营治理的开源参考架构项目。2026 年 1 月在 GitHub 开源，截至 2026 年 5 月已迭代至 v1.2 版本，包含：

- 6 大类 29 子场景的异常事件分类体系
- 10 种 L4 运营模式定义
- 三层决策参考架构（Layer 1 AI 自主 / Layer 2 AI 辅助 + 人工 / Layer 3 远程驾驶 / 线下派人）
- 10 模式 × 3 层 × 7 维度的责任矩阵
- 16 项 KPI 评价基准
- 第一响应者交互计划（FRIP）模板

框架已对齐 17 项国内外标准与法规，包括加州 DMV Article 3.7 Express Terms 2026、Markey RAOS 国会调查报告、ISO 22737、SAE J3016、YD/T 4778-4783 系列等。

当前 ROAM 项目正在并行推进三个学术 / 标准化产出：

- CSAE 团体标准立项（2026-06 立项答辩，2026-12 发布目标）
- 中文综述论文（《汽车维修》约稿）
- TR-A 国际期刊论文（VSI: CAV-Safety-TRA 专刊，2026-12-31 截稿）

李盼博士在 Waymo 的产业经验（Server-Side Perception 与 Oracle Perception 团队）为 ROAM 框架的"产业实证校准"提供了独特的资产。本文件目的是把双方已有的合作意向转化为具体的研究分工建议，供双方协商。

---

## 2. 已建立的合作角色

### 2.1 TR-A 论文（拟于 2026 年 Q4 投稿）

题目（草拟）：

> Beyond Type Approval: Operational Governance Gaps in L4 Autonomous Vehicle Deployment — A Comparative Analysis of U.S. and Chinese Regulatory Responses and a Production-Calibrated Reference Architecture

建议章节分工：

| 章节 | 张玉新 | 李盼 |
|---|---|---|
| §1 Introduction | Lead | Review |
| §2 Literature Review | Lead | Review |
| §3 Methodology | Lead | Review |
| §4 Cross-National Regulatory | Lead | Review |
| §5 Empirical Cases | Lead（武汉 + Cruise SF）| Lead（Markey + Waymo 跨境 RAO）|
| §6 ROAM Production-Calibrated | Lead（§6.1-6.3 + §6.5-6.8）| Lead（§6.4 Production-Grounded Calibration）|
| §7 Policy Recommendations | Lead | Review |
| §8 Conclusion | Joint | Joint |

§6.4 是李盼博士贡献的核心创新点，是本论文与其他 TR-A 投稿者最大的差异化资产。

### 2.2 ROAM 框架长期演进

建议李盼博士作为 ROAM 框架的"产业经验顾问"，从 v1.3 起定期参与版本评审。具体形式由双方协商决定（如季度评审会议 / 异步评论 / 仅在重大版本前评审等）。

---

## 3. 推荐李盼博士牵头的两个独立研究方向

基于李盼博士《Waymo 工作总结与未来研究展望》中的五个延伸方向，以及与 ROAM 框架的契合度评估，推荐以下两个方向作为李盼博士独立 first-author 的研究项目：

### 方向 A —— "The Last 4-5%": 不可约人类决策的实证刻画

研究问题：在 L4 自动驾驶运营中，约 96% 的决策可由 AI 自主或 AI 辅助完成，但剩余的 4-5% 必须由人类远程驾驶员（Layer 3）介入。这 4-5% 的决策具有什么特征？是哪些场景天然落入 Layer 3？这对运营治理（人员配置、法律责任、KPI 设计、企业合规架构）有什么含义？

李盼博士的资产：Waymo SSP 把 RS contacts 从 2.5 → 0.1 per trip 的实证数据轨迹（在合规授权范围内引用），是全球少数能定量刻画"人类不可约决策"的研究者之一。

双重产出建议：

1. TR-A 论文 §6.4 子节（与张玉新共同贡献）
2. 后续独立 paper（李盼博士 first author + 张玉新 co-author）：
   - 题目（草拟）：The Irreducible 4-5%: Empirically Characterizing Layer-3 Remote Driving Decisions in L4 Autonomous Vehicle Operations
   - 投稿目标：Transportation Research Part C 或 IEEE Transactions on Intelligent Transportation Systems

与 ROAM 框架的衔接：

- 把 ROAM 三层架构的 70/25/5 占比假设升级为占比实证
- 与 ROAM 29 子场景做映射（哪些场景天然落入 Layer 3）
- 反哺 ROAM v1.3 责任矩阵优化

### 方向 B —— 基于 Oracle 范式的独立 KPI 审计方法学

研究问题：监管方（加州 DMV、中国 SAC/TC114/SC34）依赖运营商自报 KPI，但缺少独立审计方法。Waymo Oracle Perception 提供的"分布式真值生成"范式，可以扩展到运营 KPI 审计领域，回答"如何独立验证运营商自报的 MTTR、AI 处置率、监管限制合规时限等指标"。

李盼博士的资产：Waymo Oracle Perception 项目共同领导人，对 O(100M) 规模独立真值生成的方法学有第一手经验。

研究价值：

- 直接对应 TR-A 征稿主题 4「智能网联汽车安全评估方法及验证机制」+ 主题 5「问责框架」
- 对应中国 GB/T 在研标准的"数据审计"配套需求
- 是李盼博士独立 first-author 的最佳 signature paper，建立独立学术声望

独立 paper 建议：

- 题目（草拟）：Closing the Self-Reporting Loophole: An Oracle-Based Independent Audit Framework for L4 Autonomous Vehicle Operational KPIs Under Graduated Regulatory Restrictions
- 投稿目标：TR-A（与本次专刊投稿形成姊妹论文）或 IEEE T-ITS

### 方向选择建议

如果时间精力有限，建议优先方向 A，因为它与 TR-A 论文 §6.4 形成共振，可以"一组数据两个产出"。方向 B 可作为 2026-2027 年的独立长期项目。

最终选择由李盼博士根据自身研究兴趣与时间安排决定。

---

## 4. Waymo 数据使用范围确认清单

为确保后续合作中 Waymo 内部数据的合规使用，请李盼博士在合作启动前对以下事项作出判断。本清单仅为讨论起点，最终边界以李盼博士的判断为准。

### 4.1 拟在 TR-A 论文中引用的数据

请李盼博士确认以下每项数据的可公开引用程度（公开 / 需脱敏 / 不可使用 / 需 Waymo 法务审阅）：

- RS contacts per trip 趋势（2.5 → 0.1）
- Pullover obstruction RPM 数据（0.17 → 0.027）
- SSP p95 < 2s SLA
- Oracle Perception 项目规模描述（O(100M)）
- 其他公开演讲 / Safety Report 中已披露的指标

### 4.2 数据归因方式建议

如部分数据需要软性归因，可考虑以下措辞：

- "Based on industry reports and authors' production experience"
- "Inferred from publicly disclosed Safety Reports of major AV operators"
- "Order-of-magnitude estimates from author's prior work in production AV systems"

具体归因方式由李盼博士判断与 Waymo 法务（如必要）协商后决定。

### 4.3 论文投稿前的最终审阅权

涉及 Waymo 数据的所有章节（特别是 §5.2 Markey 案例、§6.4 Production Calibration），在投稿前由李盼博士做最终审阅与签字确认。如李盼博士判断某段措辞不合适，张玉新承诺无条件按其建议修改。

---

## 5. 协作机制建议（待双方协商）

### 5.1 沟通渠道

- 主要文档协作：飞书共享文档 + GitHub 仓库（roam.autozyx.com 公开层）
- 关键决策：邮件留痕（yuxinzhang@jlu.edu.cn ↔ 李盼邮箱）
- 即时讨论：微信
- Waymo 数据相关敏感讨论：仅邮件，不进入即时通讯

### 5.2 知识产权与署名建议

- TR-A 论文（共同投稿）：张玉新 first author + corresponding author，李盼 second author
- 方向 A 独立 paper：李盼 first author，张玉新 second author + corresponding author
- 方向 B 独立 paper：李盼 first author + corresponding author，张玉新 second author（让李盼博士建立独立学术声望）
- ROAM 开源框架贡献：通过 GitHub commits 体现，从 v1.3 起李盼博士可作为 maintainer

最终署名顺序由李盼博士的实际贡献程度与意愿决定，本节仅为初始建议。

### 5.3 评审节奏

- TR-A 论文：每章节起草后给李盼博士 7 天 review 窗口（如李盼博士时间有限，可调整）
- 独立 paper：李盼博士自主决定节奏，张玉新提供 ROAM 框架支撑与中国监管语境分析

---

## 6. 即时协商事项

请李盼博士在阅读本文件后，对以下事项给出意见：

1. 对方向 A、方向 B 的优先级判断（推荐方向 A 优先，与 TR-A 论文共振）
2. Waymo 数据使用范围（§4 三个清单的逐项确认）
3. 协作机制（§5 三个子项的接受 / 调整）
4. 是否希望补充或替换其他研究方向（来自《Waymo 工作总结》5 个方向的其余 3 个：基础模型 / 安全关键 LLM / 自动分诊）
5. TR-A 论文 inquiry email 是否可以在 1-2 周内由张玉新发送（已起草 v0.1，发送前会请李盼博士做最终 sign-off）

确认后，张玉新将：

- 把本文件 v1.0 作为合作启动正式文件存档
- 启动方向 A 的具体研究规划
- 在 TR-A 论文 inquiry email 发送前同步给李盼博士最终 sign-off

---

## 7. 联系方式

张玉新

吉林大学汽车工程学院 / 自动驾驶安全联合实验室主任

邮箱：yuxinzhang@jlu.edu.cn

GitHub：github.com/AutoZYX-Labs/ROAM

项目网站：roam.autozyx.com

---

*本文件为 ROAM × 李盼博士合作研究方向 v0.1 草案，待双方协商后定稿。本草案的所有提议均可按李盼博士的判断与意愿调整。*
