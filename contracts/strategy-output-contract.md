# Strategy Output Contract

## Purpose

LP戦略書の出力形式を固定化し、構成・コピー・デザインフェーズの指針として機能させる。

## Required Sections

- LP目的
- CV戦略（メイン / 補助CV）
- KPI設計
- ペルソナ（メイン / サブ）
- 訴求軸（主・副）
- オファー設計
- 競合比較
- 差別化ポイント
- CTA方針
- ファネル設計

## Required Fields

- メインCV（1つ）
- メインペルソナ（実在人物レベル）
- 主訴求（差別化要素含む）
- 主オファー
- 差別化ポイント3点

## Optional Fields

- サブCV（最大3個）
- サブペルソナ
- 副訴求
- ポジショニングマップ

## Format Rules

- `templates/lp-strategy-template.md` に準拠
- ペルソナは複数項目構造化
- 訴求軸は根拠付き
- KPIツリーは連結している

## Acceptance Criteria

- ペルソナが「実在する人物」レベル
- 訴求軸が差別化されている
- KPI が計測可能
- オファーが行動理由になっている

## Rejection Criteria

- ペルソナが「30代男性」程度
- 訴求軸が抽象的（「品質」「便利」だけ）
- KPI が計測不能
- オファーが弱い

## Related

- skill: `skills/01_strategy/`
- scorecard: `scoring/lp-master-scorecard.md`, `scoring/offer-scorecard.md`
- gate: `quality-gates/02-strategy-gate.md`
- template: `templates/lp-strategy-template.md`
