# Design Output Contract

## Purpose

LPデザイン仕様の出力形式を固定化する。

## Required Sections

- トーン
- カラーパレット
- タイポグラフィ
- レイアウト方針
- FV方針
- CTA方針
- SP方針
- ビジュアル素材
- アニメーション方針
- NG表現

## Required Fields

- メインカラー / アクセントカラー / ベースカラー
- 見出しフォント / 本文フォント
- ブレークポイント
- CTA色・サイズ・状態（hover / focus / pressed）
- コントラスト比 4.5:1 以上の確認

## Optional Fields

- ムードボード
- 参考デザイン

## Format Rules

- `templates/lp-design-brief-template.md` に準拠
- カラーは HEX 値
- フォントサイズは PC / SP 両方
- アニメーションは prefers-reduced-motion 対応必須

## Acceptance Criteria

- ブランド整合
- コントラスト 4.5:1 以上
- タイポ階層明確
- SP方針あり
- アニメーションが a11y 配慮

## Rejection Criteria

- ブランドガイドライン違反
- コントラスト不足
- SP未対応
- prefers-reduced-motion 未対応

## Related

- skill: `skills/04_design/`
- scorecard: `scoring/design-scorecard.md`
- gate: `quality-gates/05-design-gate.md`
- template: `templates/lp-design-brief-template.md`
- agent: `lp-creative-director`, `lp-art-director`, `lp-web-designer`
