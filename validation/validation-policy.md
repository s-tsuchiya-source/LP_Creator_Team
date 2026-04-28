# Validation Policy

## Purpose

LP_Creator_Team が最高品質のLPを安定生成するための検証方針です。

## Validation Principles

- 生成より先にヒアリング品質を確認する
- agent数ではなく、必要性で選定する
- Emotional CVR Layer の反映を確認する
- 80点未満は必ず差し戻す
- HTML/CSS/JSは見た目だけでなく実用性を確認する
- AIっぽさは納品前に必ず検査する

## Required Validation Files

- director-behavior-validation.md
- agent-selection-validation.md
- emotional-cvr-validation.md
- scorecard-enforcement-validation.md
- code-practicality-validation.md
- lp-structure-completeness-validation.md
- anti-ai-output-validation.md
- final-acceptance-validation.md

## Required Logs

`outputs/08_review/` に以下を残す。

- agent-selection-log.md
- validation-report.md
- scorecard-summary.md
- human-quality-review.md
- code-practicality-review.md
- final-acceptance-report.md
