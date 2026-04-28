# Wireframe Output Contract

## Purpose

ワイヤーフレーム指示書の出力形式を固定化する。

## Required Sections

- ブレークポイント定義
- 各セクションのワイヤー（PC / SP）
- 視線誘導指示
- 余白方針
- CTA配置

## Required Fields

- ブレークポイント値
- 各セクションの配置（テキスト or ASCII図）
- PC / SP の差分指示
- CTA可視性確認

## Optional Fields

- Tablet レイアウト
- アニメーション挙動

## Format Rules

- `templates/lp-wireframe-template.md` に準拠
- セクションごとに PC / SP を併記
- ASCII 図 or 文章で配置を明示

## Acceptance Criteria

- PC / SP 両方の指示
- CTAが常に可視位置
- ファーストビューに価値・CTA・信頼が含まれる
- 視線誘導方針が明示

## Rejection Criteria

- PCのみ・SPのみ
- CTAが見えない位置
- 視線誘導が不明
- ブレークポイント未定義

## Related

- skill: `skills/02_structure/`
- scorecard: `scoring/first-view-scorecard.md`
- gate: `quality-gates/03-structure-gate.md`
- template: `templates/lp-wireframe-template.md`
- agent: `lp-wireframe-planner`
