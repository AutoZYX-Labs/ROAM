# ROAM CSAE 团标立项总体说明

> 中国汽车工程学会团体标准立项工作总览
> Project Overview · CSAE Group Standard Proposal for ROAM

---

> 文档版本：v0.1
> 日期：2026-05-08
> 牵头单位：吉林大学
> 联合牵头：中国智能网联汽车产业创新联盟
> 项目对接：张玉新（yuxinzhang@jlu.edu.cn）

---

## 一、立项标的

### 标准题目

中文：智能网联汽车 L4 自动驾驶车辆运营异常管理参考架构

英文：Intelligent and connected vehicles — Reference architecture for L4 ADS operations and anomaly management

题目里"参考架构"四字是与现行《智能网联汽车安全事件数据交互与管理系统技术规范》（GB 讨论稿）切割的关键标签。前者是 reference architecture（治理框架与方法论），后者是 requirements specification（数据格式与通信协议）。

### 标准类型

- 项目类型：单项标准
- 标准属性：管理类
- 起草性质：制定（非修订）
- 标准代号：拟纳入 T/CSAE 5xx 系列（待 CSAE 标委会分配）

### 计划周期

立项 2026-06，发布 2026-12，全周期约 7 个月。

---

## 二、卡位定位

### CSAE 十五五标准体系内的位置

```
CSAE 十五五 Robotaxi 标准体系
├── 整车技术要求
│   └── 搭载高度自动驾驶系统（无驾驶人）乘用车技术要求及测试方法（2026-Q2 报批）
├── 测试方法
│   └── 无人化测试系列
├── 运营平台管理 ←─── ROAM 卡这里的上游
│   ├── 〈Robotaxi 运营平台管理规范〉（已规划，未启动）
│   └── 〈L4 自动驾驶车辆运营异常管理参考架构〉← 本立项
└── 数据交互
    └── （走 GB 强标路径，不在 CSAE 范围内）
```

ROAM 不是与既有标准并列的新规范，而是为既有标准提供运营治理参考架构。下游标准（运营平台管理规范、数据交互规范）使用 ROAM 提供的术语、分类、责任矩阵作为实操依据。

### 与 GB 讨论稿的差异化

| 维度 | GB 讨论稿 | ROAM 团标 |
|---|---|---|
| 抽象层级 | 数据通道（字节级） | 治理框架（架构级） |
| 监管对象 | 车辆制造商、企业平台、国家平台 | 运营企业内部决策流程 |
| 技术对象 | 数据格式 / 通信协议 / 加密 / 上报 | 决策架构 / 责任矩阵 / KPI / 应急流程 |
| 强制性 | 强制（GB） | 推荐（T/CSAE） |

详见 `02-positioning-vs-gb-draft.md`。

---

## 三、起草组组成

### 牵头单位

吉林大学（项目负责人：张玉新副教授）

### 联合牵头

中国智能网联汽车产业创新联盟（联盟秘书处提供标准化流程支持）

### 参与单位

| 类别 | 单位 | 职能 |
|---|---|---|
| 高校 | 同济大学 | 学界代表 |
| OEM | 一汽集团 | 传统大型整车厂 L4 转型代表 |
| 技术 OEM | 卓驭科技 | 智能驾驶技术供应商 |
| 检测研究院 | 中汽中心 | 国家级检测机构 |
| 法规研究 | 公安部道路交通安全研究中心 | 执法与紧急响应权威 |
| Robotaxi 运营 | 百度 Apollo | 武汉萝卜快跑事件当事方 |
| Robotaxi 运营 | 小马智行 | Robotaxi 头部 |
| Robotaxi 运营 | 文远知行 | Robotaxi 头部 |
| 出行平台 | 滴滴自动驾驶 | 出行 + 自动驾驶融合 |

起草组合计 11 家（含 1 家牵头 + 1 家联合牵头 + 9 家参与）。覆盖产学研用四个维度，满足 CSAE 评审"至少 5 家起草单位"要求并显著超出。

公安部道路交通安全研究中心的加入，使第一响应者交互计划（FRIP）章节获得权威背书，对应加州 DMV § 227.42(i) 的要求在中国语境下落地。

---

## 四、技术内容范围

### 主要章节

```
1. 范围
2. 规范性引用文件
3. 术语和定义
4. 缩略语
5. 总体框架（参考架构总览）
6. L4 运营模式分类（10 模式）
7. 异常事件场景分类（29 子场景，严重度 S0–S4，紧急度 U0–U3）
8. 三层决策参考架构（L1 AI 自主 / L2 AI 辅助 + 人工 / L3 远程驾驶 / 线下）
9. 责任矩阵（10 模式 × 3 层 × 7 维度）
10. KPI 评价基准（16 项）
11. 第一响应者交互计划（FRIP）模板要求
12. 试验方法（文档审查 + 桌面推演 + 历史事件复盘）
附录 A（资料性）：与加州 DMV Article 3.7 / Markey RAOS 报告的对照
附录 B（资料性）：典型异常事件案例库
附录 C（资料性）：与 YD/T 4778-4783 / GB 讨论稿的引用关系
```

### 适用范围

适用于以下 10 种 L4 运营模式：

- M1 Robotaxi（车队运营商所有 + 平台运营）
- M2 OEM 直营 L4 车队
- M3 车队即服务（FaaS）
- M4 OEM 服务化 L4 + 个人订阅
- M4.5 个人所有 + 闲时共享（Tesla 模式）
- M5 个人所有 L4
- M6 L4 公交（固定路线）
- M7 L4 微循环接驳
- M8 L4 无人配送（Last Mile）
- M9 特定环境专用（矿区 / 港口 / 机场 / 园区）

不适用于：
- L0–L3 驾驶辅助系统（非自动驾驶）
- 测试阶段的 L4 系统（适用 CSAE 无人化测试系列标准）
- 车端→国家平台的强制数据上报（适用 GB 讨论稿强标）

---

## 五、时间线

| 阶段 | 时间 | 关键产出 |
|---|---|---|
| 起草准备 | 2026-05-08 ~ 05-15 | 公开层 5 项材料就绪 |
| 起草组组建 | 2026-05-16 ~ 05-31 | 合作单位确认函 + 申请表盖章 + PPT 视觉化 |
| 立项申请 | 2026-06 初 | 提交 CSAE 立项 |
| 立项答辩 | 2026-06 底 | 通过立项审查 |
| 标准起草 | 2026-07 ~ 09 | 标准草案 v1.0 |
| 公开征求意见 | 2026-10 | 30 天征求意见稿 |
| 处理意见 | 2026-11 | 报批稿 |
| 团标发布 | 2026-12 | T/CSAE XXX-2026 |
| 国标转化预备 | 2026-09 起同步 | TC114/SC34 沟通 |
| 国际标准提案 | 2027-Q1 | SAE / ISO TC22 NWIP |

---

## 六、产出物结构

### 公开层（GitHub 仓库内）

`/standards/csae-proposal-2026/` 目录：

| 文件 | 内容 | 用途 |
|---|---|---|
| 00-overview.md | 本文 | 立项总览 |
| 01-application-draft.md | 申请表纯文本草案 | 用于填入官方 docx 模板 |
| 02-positioning-vs-gb-draft.md | 与 GB 讨论稿差异化定位 | 立项答辩 / 论文素材 |
| 03-ppt-outline.md | 答辩 PPT 章节 outline | 用于制作 .pptx |
| 04-standard-draft.md | 标准草案 v0.1 | 起草阶段起点 |
| 99-changelog.md | 立项进度记录 | 持续更新 |

### 私有层（不进 git）

`~/Desktop/WorkToDo/roam-csae-proposal-private/`：

```
01-application-form/        含盖章签字版申请表
02-pptx-defense/            答辩 PPT 多版本
03-coordination/            合作单位邀请函与沟通纪要
04-internal-research/       调研报告（含本立项的内部分析）
05-references-snapshot/     8 份原始参考材料快照
```

`.gitignore` 已追加排除规则：`*盖章*`、`*-PRIVATE.docx`、`*-PRIVATE.pdf`、`standards/csae-proposal-2026/PRIVATE/`。

---

## 七、风险与应对

| 风险 | 应对 |
|---|---|
| 评审专家担心与 GB 讨论稿冲突 | 立项 PPT 主动加入第 3.5 章差异化定位；标准前言引言两处明确切割措辞；详见 02-positioning |
| 参考架构型标准国内立项案例少 | 引用 ISO 22737（LSAD）、SAE J3016、ISO 21448（SOTIF）三份成熟非要求型标准做范本 |
| 时间窗口被国汽智联 / 信通院抢占 | 5 月底前完成所有公开材料并对外亮相，6 月初准时提交 |
| 第 12 章试验方法无成熟样板 | 借鉴 ISO 21448 的 argumentation-based assurance 范式 |
| 起草组协调跨单位时间成本高 | CAICV 联盟秘书处统筹日程，飞书共享文档异步评审 |

---

## 八、与既有 ROAM 框架的衔接

本立项的标准草案以 ROAM v1.2 为技术基础。各章节的源材料：

| 标准章节 | 源材料 |
|---|---|
| 第 5 章 总体框架 | architecture/responsibility-matrix.md |
| 第 6 章 运营模式 | taxonomy/operating-models-v1.0.md |
| 第 7 章 场景分类 | taxonomy/scenario-taxonomy-v1.0.md（v1.1） |
| 第 8 章 三层决策 | architecture/responsibility-matrix.md（三层模型部分） |
| 第 9 章 责任矩阵 | architecture/responsibility-matrix.md（v1.2 含监管反馈维度） |
| 第 10 章 KPI | benchmarks/kpi-definitions.md（v1.2 含 KPI 14-16） |
| 第 11 章 FRIP | architecture/first-responder-interaction-plan-template.md |
| 附录 A | docs/california-article-3-7-mapping.md |
| 附录 B | incidents/ 目录下的事件 YAML |
| 附录 C | standards/landscape.md |

标准草案的撰写本质是把 ROAM v1.2 的"洞察 / 对照 / 分析"语气转化为"应规定 / 应包含 / 应满足"的规范语气。

---

## 九、文档维护

- 公开层文件由张玉新（yuxinzhang@jlu.edu.cn）维护，欢迎通过 GitHub Issues 提出修订建议
- 起草组成员的修订建议通过飞书共享文档汇集，每周整理一次合并到 master
- 每次重大修订需更新 99-changelog.md
- 立项答辩通过后，本文件迁移到 standards/proposal-roadmap.md 作为历史记录

---

*本文件是 ROAM 开源框架的核心组成部分。源代码与文档协议：Apache 2.0。*
