# Section 2 — Systematic Review Methodology

**Paper:** From Isolated Silos to Open Baselines
**Section target:** ~1,200 words

---

## 2.1 Review Protocol

We follow the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA 2020) framework [Page et al., *BMJ* 2021] adapted for a narrative engineering systematic review. This protocol was drafted 2026-04-05 and is reported here in full for reproducibility; it was not pre-registered in PROSPERO because that registry is restricted to health-science reviews. The protocol covers three complementary harvests: (i) academic peer-reviewed literature, (ii) regulatory and standards documents, and (iii) industry disclosures (safety reports, press releases, operator blog posts, investor relations filings). Each harvest uses distinct databases and screening criteria documented below.

## 2.2 PRISMA Flow (Target Numbers)

```
IDENTIFICATION
  IEEE Xplore           : ~160 records
  ScienceDirect         : ~120 records
  ACM Digital Library   :  ~40 records
  Google Scholar (top)  : ~100 records
  Web of Science        :  ~80 records
  Regulatory DBs (UNECE, NHTSA, EUR-Lex, MIIT, CarNewsChina) : ~35 documents
  Industry sources (Waymo/Tesla/Baidu/Vay blogs + IR)        : ~25 documents
  Total identified      : ~560

SCREENING
  Duplicates removed    : ~190
  Title/abstract screen : ~185 retained
  Records excluded (off-topic, non-English-or-Chinese, non-peer-reviewed opinion) : ~185

ELIGIBILITY
  Full-text assessed    :  ~95
  Excluded with reasons :  ~35
    - Simulator-only, no operational relevance: 12
    - Pre-2018 (outside time window): 8
    - Single-vehicle teleop without fleet/operations context: 10
    - Unavailable / paywalled without institutional access: 5

INCLUDED in synthesis   : 50–65 references
```

## 2.3 Database Search Strategy

**IEEE Xplore.** Queried on title, abstract, and keywords using combined Boolean strings. The primary query:

```
("remote operation*" OR "teleoperation" OR "tele-operation" OR
 "remote driving" OR "remote assistance" OR "fleet response")
AND ("autonomous vehicle*" OR "automated driving" OR
      "robotaxi" OR "robo-taxi" OR "L4" OR "Level 4" OR "SAE L4")
AND PUB_YEAR >= 2018
```

Secondary targeted queries were issued for specific sub-topics: latency compensation, indirect control, control center architecture, human factors in teleoperation, operator workload, and safety cases.

**ScienceDirect (Elsevier).** Same Boolean strings applied across Title-Abstract-Keywords field, further filtered by journal scope (Transportation Research Part C, Accident Analysis & Prevention, Reliability Engineering & System Safety, Applied Ergonomics).

**ACM Digital Library.** Targeted queries on HMI and CHI-adjacent venues (CHI, IUI, AutomotiveUI) for remote operator workstation design and situation awareness literature.

**Google Scholar.** Top-100 results for the primary query, sorted by relevance and by year (2023–2026), used to surface preprints and non-indexed journal issues. Results cross-validated against IEEE Xplore and ScienceDirect to avoid duplicate selection.

**Web of Science.** Used for citation-chasing: forward citations of seminal works (Lu et al. 2022, Hofbauer et al. 2024, Majstorovic et al. 2022, SAE J3016:2024) to identify recent high-impact extensions.

**Regulatory databases.**
- UNECE WP.29/GRVA: Session documents, GTR drafts, working papers (2023–2026)
- NHTSA: Standing General Order on Crash Reporting + amendments, Cruise Consent Order, AV Framework (April 2025)
- EUR-Lex + national gazettes: UK AV Act 2024, German StVFernLV 2025, EU AI Act touchpoints
- MIIT (China): GB draft ADS Safety Standard, Ministry of Transport safety operator ratio guideline, Shenzhen/Beijing local regulations
- CarNewsChina, MobilityEngTech: Translation and analysis of Chinese regulatory drafts

**Industry sources.** Official operator blog posts (Waymo, Baidu, Tesla, Vay, DJI Enterprise), investor relations filings (Baidu IR, Alphabet IR), press releases, and independent safety audits (Waymo November 2025 audit). These are treated as *disclosed artifacts*, not peer-reviewed evidence, and are used primarily for architecture descriptions and operational scale figures.

## 2.4 Inclusion Criteria

A record is included in the synthesis if it satisfies *all* of the following:

1. **Topical relevance:** Addresses remote operations, teleoperation, fleet response, remote assistance, or operator-related aspects of L3/L4/L4+ automated driving systems OR provides direct cross-domain reference (military UAV, industrial drone, maritime remote operations) with explicit operational-transfer relevance.
2. **Time window:** Published 2018-01-01 or later (pre-2018 seminal works cited but not counted in the systematic harvest). Regulatory documents follow their effective dates regardless.
3. **Language:** English or Chinese. Non-English-and-non-Chinese sources excluded due to translation overhead.
4. **Substantive content:** Empirical data, architectural design, regulatory text, incident record, or theoretical framework. Pure opinion editorials are excluded.
5. **Peer-review or authoritative source status:** Peer-reviewed journal/conference, recognized regulatory body, or operator-official disclosure. Individual blogs excluded unless authored by a recognized domain expert with declared affiliation (e.g., Koopman, Cummings).

## 2.5 Exclusion Criteria

A record is excluded if it meets any of the following:

- Simulator-only studies without explicit operational-deployment relevance
- Single-vehicle teleoperation studies without fleet-level considerations (e.g., lab-scale robotics)
- Surveys of generic ITS or V2X without teleoperation focus
- Non-peer-reviewed opinion pieces without supporting data or authoritative affiliation
- Duplicate conference-to-journal extensions: we retain the journal version only
- Vendor marketing material without architectural or operational detail
- Sources unavailable via institutional access or open web after reasonable search effort

## 2.6 Quality Assessment Rubric

Each included record is scored on a 5-point rubric adapted from PRISMA-QA and EBSE guidelines for systematic reviews in software engineering:

| Dimension | Score | Criterion |
|-----------|-------|-----------|
| **Reproducibility** | 0–2 | 0 = method undescribed; 1 = method described but not reproducible; 2 = method described and independently reproducible |
| **Empirical grounding** | 0–2 | 0 = opinion only; 1 = anecdotal or case-based; 2 = quantitative empirical data |
| **Theoretical contribution** | 0–2 | 0 = no novel concept; 1 = incremental; 2 = novel framework or reclassification |
| **Currency** | 0–2 | 0 = pre-2020; 1 = 2020–2023; 2 = 2024–2026 |
| **Peer-review status** | 0–2 | 0 = blog/press release; 1 = conference; 2 = journal or regulatory instrument |
| **Total** | 0–10 | Records scoring ≥ 5 included in synthesis; scoring 3–4 included only for specific claim support |

**Inter-rater reliability:** Two reviewers (primary author + one collaborator) independently scored a 20% sample (~18 records); Cohen's kappa ≥ 0.70 required for proceeding with single-reviewer scoring of the remainder.

## 2.7 Data Extraction Framework

For each included record, we extract:

**Bibliographic metadata.** Author(s), year, title, venue, DOI/URL, record type (journal / conference / regulation / industry report / book chapter).

**Research context.** Jurisdiction (if regulatory), operator (if industry), L-level focus, operational scenario (urban / highway / low-speed shuttle / parcel delivery).

**Technical content.** Control mode (advisory / shared / direct / dispatcher), latency figures (if reported), operator-to-vehicle ratio (if reported), architecture description, safety-case framing.

**Empirical data.** Incident counts, severity distribution, intervention effectiveness, operator workload metrics, response-time statistics.

**Claims and findings.** Primary thesis, quantitative results, identified gaps.

**Cross-links.** Citation relationships to other included records; alignment with ISO/IEC/SAE standards covered in Section 3.

Extracted data is stored in a structured spreadsheet (to be released with the paper as supplementary material, Appendix C: Data Extraction Sheets).

## 2.8 Synthesis Approach

Extracted data is synthesized through three complementary approaches:

**Narrative synthesis** for Sections 3 (Regulatory Landscape) and 5 (Academic Frontiers), where the research objects are qualitatively distinct across jurisdictions/topics.

**Comparative tabular synthesis** for Section 4 (Industry Practice) and Section 7 (UAV Cross-Domain), where structured comparison across operators / domains is the analytical goal.

**Structured incident coding** for Section 6 (Empirical Incident Analysis), using a seven-dimension schema (trigger, detection latency, intervention path, MRM outcome, severity, systemic-vs-isolated, recovery time) applied uniformly to each coded incident.

Gap identification (Section 8) is performed by cross-tabulating the research-question space (RQ1–RQ5) against the included-records coverage matrix; cells with < 3 records receive explicit gap-flagging.

---

*End of Section 2. The full PRISMA flow diagram appears as Figure 2 (see 04-figures-tables-plan.md).*
