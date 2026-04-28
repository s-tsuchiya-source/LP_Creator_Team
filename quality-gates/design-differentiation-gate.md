# Design Differentiation Gate

## Purpose

LPデザインが一辺倒・AI風・汎用テンプレートにならず、商材・ターゲット・CV目的に応じて差別化されているかを判定する。

## Related Contract

- `contracts/design-differentiation-output-contract.md`

## Related Scorecard

- `scoring/design-differentiation-scorecard.md`

## Minimum Passing Score

- `design-differentiation-scorecard`: 85点以上

## Required Checks

- [ ] Design Concept がある
- [ ] Reference Direction がある
- [ ] Icon Strategy がある
- [ ] UI Component Strategy がある
- [ ] Typography Strategy がある
- [ ] Animation Strategy がある
- [ ] Visual Hierarchy がある
- [ ] Emotional Role がある
- [ ] Conversion Role がある
- [ ] Anti-Generic Design Check がある

## Critical Fail Conditions

以下のいずれかに該当する場合は、点数に関係なく差し戻し。

- 汎用SaaS風・テンプレート風のhero
- 参考サイトの丸写し
- 意味のないアイコン・イラスト
- UIコンポーネント選定理由なし
- フォント選定理由なし
- アニメーションが装飾目的のみ
- 視覚階層がCTAに向いていない
- CVへの貢献仮説なし

## Required Fix Actions

- `lp-creative-director` にコンセプト再設計を依頼
- `lp-web-designer` にUI/ビジュアル方針の再設計を依頼
- `lp-ui-designer` にコンポーネント選定理由を再作成させる
- `lp-final-gatekeeper` はこのgate未通過の場合、納品承認しない

## Output Log

- `outputs/08_review/design-differentiation-review.md`
