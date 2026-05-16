# ROAM KPI Definitions

**Version:** 1.0
**Last Updated:** 2026-04-02

---

## Overview

This document defines 8 key performance indicators (KPIs) for evaluating robotaxi remote operations platforms. These KPIs are designed to be measurable, comparable across operators, and actionable for continuous improvement.

Each KPI includes: definition, formula, target value, measurement method, and data source.

> 2026-05 standards note: this open-source v1.0 document keeps 8 core KPIs as the public baseline. The CSAE / CAICV pre-research draft is exploring an expanded 16-KPI structure for the group standard track; final KPI items and thresholds require drafting-group consensus and calibration with real operating data.

---

## KPI 1: MTTR (Mean Time To Resolution)

### Definition

The average time elapsed from anomaly detection to confirmed resolution, measured across all incidents within a reporting period. MTTR is the single most important operational efficiency metric — it directly correlates with passenger experience, traffic impact, and fleet utilization.

### Formula

```
MTTR = SUM(resolution_time - detection_time) / COUNT(incidents)
        for all incidents in reporting period
```

Where:
- `detection_time` = timestamp when anomaly is first flagged by the platform
- `resolution_time` = timestamp when anomaly is confirmed resolved (vehicle in safe state, passenger safe, traffic cleared)

### Target Values

| Category | Target MTTR | Stretch Goal |
|----------|:-----------:|:------------:|
| Layer 1 (AI Autonomous) | < 10 seconds | < 5 seconds |
| Layer 2 (AI + Human) | < 3 minutes | < 90 seconds |
| Layer 3 (Remote/On-Site) | < 15 minutes | < 10 minutes |
| Overall (weighted) | < 2 minutes | < 1 minute |

### Measurement Method

- Automated logging of detection and resolution timestamps in the incident database
- Resolution requires explicit confirmation (automated verification or operator sign-off)
- Report as: overall MTTR, per-layer MTTR, per-severity MTTR, and per-scenario MTTR
- Exclude incidents where resolution involves external services (tow truck, emergency services) from the core MTTR calculation; track separately as "Extended Resolution Time"

### Data Source

- Incident database: `detection_time`, `resolution_time` fields
- Per-layer breakdown from the Decision Engine routing log

---

## KPI 2: AI Autonomous Resolution Rate

### Definition

The percentage of all anomalies that Layer 1 (AI Autonomous) resolves without any human involvement. This is the primary measure of platform automation maturity. Higher is better — it means fewer incidents require expensive human attention.

### Formula

```
AI Resolution Rate = COUNT(incidents resolved by Layer 1) / COUNT(all incidents) * 100%
```

### Target Values

| Fleet Maturity | Target | Stretch Goal |
|----------------|:------:|:------------:|
| Early deployment (<6 months) | > 50% | > 60% |
| Operational (6-18 months) | > 65% | > 75% |
| Mature (>18 months) | > 70% | > 80% |

### Measurement Method

- Automated classification based on which layer handled the incident to resolution
- An incident counts as "Layer 1 resolved" if no human operator action was taken between detection and resolution
- Report monthly with trend line; break down by scenario category (A-F)
- Track "attempted Layer 1 but escalated" separately to identify automation improvement opportunities

### Data Source

- Decision Engine routing log: layer assignment and escalation events
- Incident database: `resolution_layer` field

---

## KPI 3: False Escalation Rate

### Definition

The percentage of incidents escalated from Layer 1 to Layer 2 (or Layer 2 to Layer 3) where the escalation was unnecessary — the lower layer could have resolved the anomaly without human involvement. False escalations waste operator time and reduce effective capacity.

### Formula

```
False Escalation Rate = COUNT(escalated incidents where operator took no action
                              or confirmed AI recommendation unchanged)
                        / COUNT(all escalated incidents) * 100%
```

### Target Values

| Metric | Target | Stretch Goal |
|--------|:------:|:------------:|
| L1 -> L2 False Escalation | < 15% | < 10% |
| L2 -> L3 False Escalation | < 10% | < 5% |

### Measurement Method

- Post-incident analysis of operator actions on escalated incidents
- An escalation is classified as "false" if the operator either:
  (a) Confirmed the AI recommendation without any modification, AND the scenario was one that Layer 1 could have handled
  (b) Reviewed and closed the incident without taking any action
- Requires periodic calibration by senior operators reviewing a sample of escalation decisions
- Report monthly; use to tune escalation thresholds in the Decision Engine

### Data Source

- Operator action log: actions taken (or not taken) on escalated incidents
- Decision Engine: escalation trigger reason
- Post-incident review annotations by senior operators

---

## KPI 4: Missed Escalation Rate

### Definition

The percentage of incidents where Layer 1 attempted autonomous resolution but should have been escalated to Layer 2 or Layer 3 — the AI response was insufficient, incorrect, or led to a worse outcome. Missed escalations are more dangerous than false escalations because they mean the system failed to recognize it needed help.

### Formula

```
Missed Escalation Rate = COUNT(L1-resolved incidents later reclassified
                               as requiring human intervention)
                         / COUNT(all L1-resolved incidents) * 100%
```

### Target Values

| Metric | Target | Stretch Goal |
|--------|:------:|:------------:|
| Missed Escalation Rate | < 2% | < 1% |

### Measurement Method

- Post-incident review process: every S2+ incident is reviewed to determine if Layer 1 should have escalated
- Automated pattern detection: identify Layer 1 resolutions where the anomaly recurred within 10 minutes
- Passenger complaint correlation: incidents where passenger filed complaint after Layer 1 resolution
- Report monthly; this is a critical safety metric — any upward trend requires immediate investigation

### Data Source

- Post-incident review database (manual annotation by safety team)
- Incident database: recurrence within 10-minute window
- Passenger feedback system: complaint-to-incident linking

---

## KPI 5: Passenger Trapped Duration

### Definition

The time a passenger remains unable to exit the vehicle after requesting to do so, measured from the first SOS/help request to the moment the passenger can exit. This is arguably the most passenger-critical metric — being trapped in a robot vehicle is the scenario that generates the most public outrage and regulatory scrutiny.

### Formula

```
Passenger Trapped Duration = exit_available_time - first_help_request_time

Report as:
- P50 (median)
- P95 (95th percentile — worst 5% of cases)
- Maximum (worst single case in period)
```

### Target Values

| Metric | Target | Stretch Goal |
|--------|:------:|:------------:|
| P50 Trapped Duration | < 2 minutes | < 1 minute |
| P95 Trapped Duration | < 5 minutes | < 3 minutes |
| Maximum Trapped Duration | < 10 minutes | < 5 minutes |
| Never-responded rate (no response within 10 min) | 0% | 0% |

### Measurement Method

- SOS button press timestamp as start time
- Door unlock confirmation OR on-site rescue timestamp as end time
- Interior camera + passenger app activity as secondary data sources
- Every passenger trapped event is individually reviewed regardless of duration
- Zero-tolerance policy: any trapped duration >10 minutes triggers root cause review

### Data Source

- SOS system log: button press timestamps
- Vehicle door status log: lock/unlock events
- Passenger app: help request timestamps
- Operator action log: door unlock commands

---

## KPI 6: Traffic Recovery Time

### Definition

The time from when a robotaxi anomaly begins disrupting traffic flow to when traffic returns to normal. Measures the external impact of anomalies on other road users and the city transportation network.

### Formula

```
Traffic Recovery Time = traffic_normal_time - traffic_disruption_start_time

Report as:
- Mean (across all traffic-disrupting incidents)
- P95
- Per-severity breakdown
```

### Target Values

| Severity | Target Recovery Time | Stretch Goal |
|----------|:-------------------:|:------------:|
| S1 (minor) | < 3 minutes | < 1 minute |
| S2 (moderate) | < 15 minutes | < 10 minutes |
| S3 (severe) | < 45 minutes | < 30 minutes |

### Measurement Method

- Traffic disruption start: vehicle telemetry indicates blocking a traffic lane OR external traffic data shows speed reduction in the area
- Traffic recovery: vehicle removed from traffic lane OR traffic speed returns to baseline
- For multi-vehicle incidents: measured from first vehicle blocking to last vehicle cleared
- External validation: traffic authority data (where available) as ground truth

### Data Source

- Vehicle telemetry: position, motion status, lane occupancy
- Traffic data feed: segment speed data (if available from city traffic management)
- Incident database: disruption start/end timestamps
- Operator log: vehicle movement commands and confirmation

---

## KPI 7: Operator-to-Vehicle Ratio

### Definition

The number of active fleet vehicles per on-duty operator (Layer 2 + Layer 3 combined). This is the primary operational cost efficiency metric. A higher ratio means fewer operators needed per vehicle, but too high risks slow response times.

### Formula

```
Operator-to-Vehicle Ratio = COUNT(active vehicles in service)
                            / COUNT(on-duty operators)

Report as:
- Peak hour ratio (worst case)
- Average ratio
- Ratio at time of worst MTTR incident
```

### Target Values

| Fleet Maturity | Target Ratio | Stretch Goal |
|----------------|:------------:|:------------:|
| Early deployment | 1 : 15-20 | — |
| Operational | 1 : 30-50 | 1 : 60 |
| Mature | 1 : 50-80 | 1 : 100+ |

### Measurement Method

- Real-time monitoring of active vehicle count and on-duty operator count
- Ratio tracked continuously; alert if ratio exceeds safe maximum during peak anomaly periods
- Correlation analysis: plot MTTR vs. operator-to-vehicle ratio to find the optimal balance point
- Account for operator specialization: Layer 2 operators and Layer 3 remote drivers may be counted separately

### Data Source

- Fleet management system: active vehicle count by time
- Workforce management system: operator shift schedule, clock-in/out
- Decision Engine: operator utilization rate (% of time actively handling incidents)

---

## KPI 8: Scenario Coverage Rate

### Definition

The percentage of taxonomy sub-scenarios for which the platform has a defined, tested, and validated response procedure (across all three layers). Measures operational readiness breadth — how many known scenario types the platform is prepared to handle.

### Formula

```
Scenario Coverage Rate = COUNT(scenarios with validated response procedure)
                         / COUNT(all scenarios in taxonomy) * 100%

Where "validated" means:
- Layer 1 handler exists and has been tested in simulation
- Layer 2 operator procedure documented and trained
- Layer 3 escalation path defined and dispatch agreements in place
```

### Target Values

| Maturity | Target Coverage | Stretch Goal |
|----------|:--------------:|:------------:|
| Pre-launch | > 80% of A/B/C/D categories | > 90% |
| Operational | > 90% of all categories | > 95% |
| Mature | > 95% of all categories | 100% |

### Measurement Method

- Quarterly audit: review each taxonomy sub-scenario against platform capabilities
- For each scenario, verify:
  1. Layer 1 handler exists (code or rule)
  2. Layer 1 handler tested in simulation with pass rate >95%
  3. Layer 2 SOP document exists and operators are trained
  4. Layer 3 dispatch agreement exists (tow, emergency, security)
- Gaps identified in audit become priority items for the next development cycle
- After any S3+ incident, re-verify coverage for the triggering scenario

### Data Source

- Platform capability registry: scenario handlers, test results
- Training management system: operator certification records
- Dispatch agreement database: active contracts with service providers
- Simulation test results: pass rates per scenario

---

## KPI Dashboard Summary

| # | KPI | Unit | Target | Measurement Frequency |
|---|-----|------|:------:|:--------------------:|
| 1 | MTTR | seconds/minutes | < 2 min overall | Real-time, report daily |
| 2 | AI Autonomous Resolution Rate | % | > 70% | Daily, report monthly |
| 3 | False Escalation Rate | % | < 15% (L1->L2) | Weekly review, report monthly |
| 4 | Missed Escalation Rate | % | < 2% | Weekly review, report monthly |
| 5 | Passenger Trapped Duration | minutes (P50/P95) | P50 < 2 min, P95 < 5 min | Per-event, report monthly |
| 6 | Traffic Recovery Time | minutes | Per-severity targets | Per-event, report monthly |
| 7 | Operator-to-Vehicle Ratio | ratio | 1:50+ (mature) | Real-time, report monthly |
| 8 | Scenario Coverage Rate | % | > 95% (mature) | Quarterly audit |

---

## Notes

1. All KPIs should be measured and reported consistently. Cherry-picking favorable time windows or excluding outliers without documented justification undermines the entire benchmarking purpose.
2. KPIs 3 and 4 (False/Missed Escalation) are intentionally in tension. Reducing false escalations by raising thresholds risks increasing missed escalations, and vice versa. The balance point is a key engineering decision.
3. Targets represent what we consider achievable for a well-engineered platform. Early-stage operators should set intermediate milestones.
4. Industry-wide benchmarking requires standardized measurement methodology. We encourage operators to publish anonymized KPI data using these definitions.

---

## Regulatory-Aligned Thresholds (v1.1, 2026-04-27)

Following the publication of California DMV Article 3.7 (Express Terms 2026), ROAM has aligned several KPIs with regulatory thresholds. These are not ROAM-proposed targets but **legally binding values** for operators in California's jurisdiction. ROAM treats them as floor values that all operators should meet regardless of jurisdiction.

### KPI 9: Emergency Response Phone Pickup Time (DMV-Aligned)

**Definition:** Time from emergency response official's call to dedicated emergency response telephone line until pickup by remote operations support personnel with situational awareness.

**Target:** < 30 seconds (DMV § 227.42(b)(3)(B), legally binding for California)

**Measurement Method:** Per-call timestamp logging on dedicated emergency line. Audit monthly.

**Data Source:** Emergency response telephone line system logs.

### KPI 10: First Responder Two-Way Communication Reach Time (DMV-Aligned)

**Definition:** Time from emergency response official's request through two-way voice communication device until reaching remote operations support personnel.

**Target:** < 30 seconds (DMV § 227.42(b)(3)(D), legally binding)

**Measurement Method:** Per-call timestamp on two-way device, paired with operator response confirmation.

**Data Source:** Two-way voice communication device logs.

### KPI 11: Emergency Geofencing Avoidance Compliance Time (DMV-Aligned)

**Definition:** Time from receipt of emergency geofencing message (designating an avoidance area) until manufacturer issues fleet-wide directive to leave or avoid the identified area.

**Target:** < 2 minutes (DMV § 227.42(b)(3)(F), legally binding)

**Measurement Method:** Geofencing message timestamp paired with fleet directive issuance timestamp. Per-event audit.

**Data Source:** ROC fleet management system + geofencing message receipt log.

### KPI 12: Driverless Permit Pre-Application Test Mileage (DMV-Aligned)

**Definition:** Cumulative autonomous miles driven on public roads with valid Drivered Testing Permit, throughout the operational design domain, prior to applying for Driverless Testing Permit.

**Target:**
- Standard AV (passenger): ≥ 50,000 miles (DMV § 227.42(a)(1))
- Low-speed AV: ≥ 10,000 miles
- Heavy-duty commercial: ≥ 500,000 miles total (≥ 100,000 miles in California)

**Measurement Method:** Per-vehicle odometer reporting tied to autonomous-mode-engaged time, monthly cumulative report.

**Data Source:** Vehicle telematics + DSSAD (Data Storage System for Automated Driving).

### KPI 13: Operational Parameters Modification Pre-Application Mileage (DMV-Aligned)

**Definition:** Cumulative autonomous miles driven with valid Drivered Testing Permit prior to applying for Driverless Testing Permit Operational Parameters Modification.

**Target:**
- Standard AV (passenger): ≥ 25,000 miles (DMV § 227.42(b)(1))
- Low-speed AV: ≥ 10,000 miles
- Heavy-duty commercial: ≥ 250,000 miles

**Measurement Method:** Per-modification-application cumulative mileage report.

**Data Source:** Vehicle telematics + DSSAD.

---

## Regulatory Feedback Dimension KPIs (v1.2, 2026-04-27)

These KPIs operationalize the "regulatory feedback dimension" (responsibility-matrix.md Insight 7) introduced by California DMV Article 3.7 § 227.46. They are not about avoiding regulatory action — they are about **demonstrating, in real time, that the operator is responding to regulatory action with the speed and rigor required**.

### KPI 14: Regulatory Restriction Compliance Time (DMV-Aligned)

**Definition:** Time from receipt of a regulator-issued operational restriction notice (under DMV § 227.46(a)–(c) or equivalent) until the manufacturer's fleet management system has propagated the restriction to all affected vehicles and the restriction is observably in effect on the road.

**Sub-categories:**
- **14a Standard restriction**: applied per § 227.46(a) (incremental enforcement) — target ≤ 24 hours
- **14b Imminent hazard restriction**: applied per § 227.46(c) — target ≤ 1 hour
- **14c Restriction lift**: from DMV approval of lift application to vehicles resuming normal operation — target ≤ 4 hours

**Formula:**
```
T_compliance = T_first_compliant_observation - T_restriction_notice_received
```

Where compliance is observed at the fleet level (e.g., daily fleet count drops below imposed cap; ODD restriction visible in routing decisions).

**Measurement Method:**
- Restriction notice timestamp logged at receipt (legal/regulatory affairs system)
- Fleet management system logs the moment the restriction enters effect
- Independent validation via vehicle telematics: ≥ 95% of fleet must demonstrate compliance within target time

**Data Source:** Regulator notice log + fleet management system + vehicle telematics.

**Why this matters:** Under § 227.46, failure to comply promptly can escalate the restriction or trigger full revocation. KPI 14 forces the manufacturer to design fleet management systems with first-class support for regulator-issued constraints — a capability previously not contemplated in most operators' architecture.

### KPI 15: Restriction Lift Application Cycle Time

**Definition:** Time from imposition of an operational restriction until manufacturer submits a complete restriction-lift application to the regulator, supported by data demonstrating the underlying deficiencies have been addressed.

**Target:**
- Standard restriction: ≤ 30 days (industry expectation, not legally binding)
- Imminent hazard restriction: ≤ 7 days for initial lift application

**Measurement Method:**
- Restriction imposition date and lift application submission date both timestamped in regulator-facing systems
- Application completeness verified by regulator (rejected applications do not count toward target)

**Data Source:** Regulator submission portal + internal tracker.

**Why this matters:** A long restriction-lift cycle indicates either (a) the underlying issue is harder to remediate than initially believed, or (b) the manufacturer's safety case framework is too weak to demonstrate remediation. Both signal capability gaps that should trigger root-cause investigation.

### KPI 16: Regulatory Restriction Recurrence Rate

**Definition:** Fraction of operational restrictions issued in the past 12 months that recur (i.e., restrictions imposed for the same root cause as a prior restriction lifted within the past 24 months).

**Target:** < 10% (a recurring restriction indicates the lift was premature or remediation was insufficient)

**Formula:**
```
Recurrence_Rate = N_recurring_restrictions / N_total_restrictions_12mo
```

**Measurement Method:** Each restriction is tagged with a root-cause classification (using ROAM scenario taxonomy or DMV's classification). Recurrence is determined when two restrictions in the lookback window share a root-cause tag.

**Data Source:** Regulatory restriction log + root-cause classification per ROAM scenario taxonomy v1.1.

**Why this matters:** A high recurrence rate suggests the manufacturer's safety case framework is treating symptoms rather than causes. Regulators may use this metric (or its inverse) when deciding whether to grant future lift applications.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-04-02 | Initial release: 8 KPIs defined |
| 1.1 | 2026-04-27 | Added KPIs 9-13 aligned with California DMV Article 3.7 (Express Terms 2026) regulatory thresholds: 30-second emergency response, 2-minute geofencing compliance, pre-application test mileage requirements |
| 1.2 | 2026-04-27 | Added KPIs 14-16 (Regulatory Feedback Dimension): restriction compliance time, restriction lift cycle time, restriction recurrence rate. These operationalize Insight 7 of responsibility-matrix.md v1.2 and align with DMV § 227.46 graduated restriction mechanism. |
