# QA Output Contract

## Purpose

QAレポートの出力形式を固定化する。

## Required Sections

- 表示確認（主要ブラウザ）
- レスポンシブ確認
- リンク確認
- CTA確認
- フォーム確認
- 計測動作確認
- 法務チェック
- 速度確認
- a11y 確認
- セキュリティ確認

## Required Fields

- 各チェック項目のPASS / FAIL
- FAIL 項目の詳細・修正案
- 主要ブラウザ動作確認結果
- LCP / CLS / INP の値
- Lighthouse スコア

## Optional Fields

- スクリーンショット
- セッションリプレイ

## Format Rules

- `templates/qa-checklist-template.md` に準拠
- チェックボックス形式で記述
- FAIL 項目は次工程に明示

## Acceptance Criteria

- 全項目チェック済み
- BLOCKER FAIL なし
- LCP / CLS / INP 達成
- 計測動作確認済み
- 法務 PASS

## Rejection Criteria

- BLOCKER FAIL あり
- 計測未確認
- 法務未通過
- 主要ブラウザでの崩れ

## Related

- skill: `skills/07_review/`
- scorecard: `scoring/final-output-scorecard.md`, `scoring/legal-risk-scorecard.md`
- gate: `quality-gates/08-legal-gate.md`, `quality-gates/09-final-release-gate.md`
- template: `templates/qa-checklist-template.md`
- agent: `lp-qa-lead`
