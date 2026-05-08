# TR-A Submission Abstract（投稿摘要）

> Target journal: Transportation Research Part A: Policy and Practice
> Special Issue: VSI: CAV-Safety-TRA · Connected and Automated Vehicle Governance — Evidence, Ethics, and Policy Innovation
> Status: v0.1 draft for co-author review
> Date: 2026-05-08

---

## Title

**Beyond Type Approval: Operational Governance Gaps in L4 Autonomous Vehicle Deployment — A Comparative Analysis of U.S. and Chinese Regulatory Responses and a Production-Calibrated Reference Architecture**

中文译题：超越型式认证——L4 自动驾驶车辆部署中的运营治理空白：美中监管响应的比较分析与一种产业实证校准的参考架构

---

## Authors（草拟）

Yuxin Zhang ¹·* · Pan Li ²

¹ College of Automotive Engineering, Jilin University, Changchun, China

² College of Transportation Engineering, Tongji University, Shanghai, China

\* Corresponding author: yuxinzhang@jlu.edu.cn

---

## Abstract（300 words）

In March 2026, two events on opposite sides of the Pacific exposed an overlooked layer of autonomous vehicle (AV) regulation. Nearly one hundred Robotaxis stalled simultaneously on a Wuhan elevated highway, stranding passengers for two hours; the same month, a U.S. Senate investigation found that seven leading AV companies refused to disclose remote-intervention frequencies. Both point to a global gap. While vehicle type approval and safety event data interaction have established standards, operational governance — who decides what to do when an L4 vehicle fails in service, and how regulators verify and respond — remains largely uncodified. California DMV Article 3.7 Express Terms 2026 is the first regulation to systematically address this gap.

We compare operational governance frameworks across the United States, China, Germany, and international standards bodies through regulatory text analysis, three case studies (Wuhan 2026, Markey investigation 2026, Cruise SF 2023), and empirical calibration from production deployment data. We propose ROAM (Remote Operations and Anomaly Management), an open-source reference architecture comprising ten operating modes, twenty-nine anomaly sub-scenarios, a three-layer decision architecture, a seven-dimensional responsibility matrix that newly incorporates a regulatory feedback dimension, and sixteen quantitative KPIs aligned with DMV thresholds. The framework is empirically calibrated against Waymo deployment metrics — including rider-support contacts per trip dropping from 2.5 to 0.1 and an "irreducible 4-5%" of decisions requiring human Layer-3 intervention — providing the first production-grounded baselines for L4 operational KPIs.

We close with five recommendations for Chinese regulators (including a graduated restriction mechanism inspired by DMV § 227.46 and an intervention-frequency disclosure mandate), three for international standardization (SAE J3016, ISO TC 22/SC 33, UN GTR on ADS), and a compliance design checklist for fleet operators. The paper offers transport policy researchers and regulators an actionable blueprint for closing the operational governance gap as L4 commercial deployment scales globally.

---

## Keywords（6 个）

Connected and automated vehicles; Operational governance; Comparative regulatory analysis; Reference architecture; Remote operations; Robotaxi safety policy

---

## Word Count Check

| Section | Words |
|---|---|
| Paragraph 1 (problem framing) | ~120 |
| Paragraph 2 (methods + framework) | ~135 |
| Paragraph 3 (recommendations + take-away) | ~55 |
| **Total** | **~310** |

> 注：略超 300，提交时若编辑系统严格限制 300 字，可删减第二段第二句的"that newly incorporates a regulatory feedback dimension"（- 7 词）至 ~303。或删第三段最后一句"The paper offers..."（- 25 词）至 ~285。

---

## 设计说明（给共同作者评审用）

### 信息密度

每句承载明确信息，无修辞冗余：

- 第 1 句：时间 + 地点 + 事件 + 共同议题
- 第 2 句：武汉事件量化（100 辆 + 2 小时）
- 第 3 句：Markey 事件量化（7 家公司 + 拒绝披露）
- 第 4 句：定位"运营治理"为本文核心概念
- 第 5 句：DMV Article 3.7 锚定为参照点
- 第 6 句：方法学 4 要素同时压缩到一句
- 第 7 句：ROAM 框架 5 个具体组件 + 监管反馈维度作为创新点
- 第 8 句：李盼贡献的 Waymo 数据 + 4-5% 锚定
- 第 9 句：5+3+1 政策建议浓缩
- 第 10 句：对 TR-A 读者的明确价值承诺

### 4 条 contributions 的覆盖

| Contribution | Abstract 对应位置 |
|---|---|
| C1 跨国比较 | P2 第 1 句"compare operational governance frameworks across..." |
| C2 实证案例 | P2 第 1 句"three case studies (Wuhan, Markey, Cruise SF)" |
| C3 ROAM 框架 | P2 第 2 句完整描述 5 大组件 |
| C4 产业实证校准（李盼）| P2 第 3 句"empirically calibrated against Waymo deployment metrics" |

### 关键 hook 设计

- "Two events on opposite sides of the Pacific"——叙事钩子，符合 TR-A 偏好的"问题导向"开篇
- "Operational governance"——本文核心概念，反复出现 3 次
- "Beyond Type Approval"——题目里的 hook，与 abstract 第 4 句"vehicle type approval...has established standards"形成回响
- "Irreducible 4-5%"——记忆点强的术语，区别于其他 CAV 政策论文

### TR-A 读者群匹配

TR-A 读者主要是交通政策学者 + 城市交通规划者 + 部分监管者。Abstract 末句"actionable blueprint for closing the operational governance gap as L4 commercial deployment scales globally"是对这个读者群的精准定位。

### 与客座编辑亲和度

5 位客座编辑中：
- 杨凯棣 NUS（CAV 仿真 + 混合交通）：第 2 段框架部分对其有吸引力
- 卢庆龙 中山（中国语境）：第 1 段武汉事件 + 第 3 段对中国监管建议
- Stern 明尼苏达（CAV 安全评估）：第 2 段 KPI 校准部分
- 高坤 Chalmers（仿真测试）：偏弱，但 §6.6 KPI 测量方法有交集
- 梁晋豪 NUS（较新）：暂不优先

---

## 待共同作者确认

- [ ] 李盼是否同意"empirically calibrated against Waymo deployment metrics"这一表述（避免授权范围超界）
- [ ] "irreducible 4-5%"是否可作为 paper 与 abstract 的招牌术语
- [ ] 第 3 段"intervention-frequency disclosure mandate"对中国监管的措辞是否需要软化
- [ ] 关键词第 6 个"Robotaxi safety policy"是否需要换成"Reference architecture for L4 governance"

---

*This abstract is the v0.1 draft for co-author review. The final submission abstract will incorporate co-author feedback and be paired with the inquiry email to the special issue guest editors.*
