# README
Naming convention descriptions for feature files

# Naming convention
`<user_group>_<time_division>_<baseline_score_group>_<metric>_<app_division>`

## Breakdown
`<user_group>`
- Required: Y
- Options:
..* `all`: All users in the study
..* `app`: Only users with app usage data

`<time_division>`
- Required: Y
- Options:
..* `all`: Features from the length of the whole study
..* `tod`: Short for *time of day*; 6-hour time divisions (epochs) across a 24 hour period (e.g. late night, morning, afternoon, and evening)
..* `wkly`: Weekly metrics, across weeks study weeks 0 (baseline) - 7 (final week)

`<baseline_score_groupings>`
- Required: N
- Options:
..* `group`: Features calculated for high and low baseline groups for anxiety and depression (determined by PROMIS and / or PHQ subscale scores)
..* `ind`: Features calculated for individuals (single participants)

`<app_division>`
- Required: N
- Options:
..* `app_level`: Measures calculated for individual apps (e.g. Relax, ThoughtChallenger)
..* `agg`: Short for *aggregate*, i.e. measures calculated across all apps