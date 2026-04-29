# Design Differentiation Validation

## Purpose

LP生成時に、デザインが商材・ターゲット・訴求・CV目的に応じて設計されているかを検証する。

## What to Validate

- Design Concept
- Reference Direction
- Icon Strategy
- UI Component Strategy
- Typography Strategy
- Animation Strategy
- Visual Hierarchy
- Emotional Role
- Conversion Role
- Anti-Generic Design Check

## Passing Criteria

- `design-differentiation/mandatory-design-differentiation.md` の必須項目をすべて満たす
- `scoring/design-differentiation-scorecard.md` で85点以上
- Critical Fail がない

## Critical Fail Conditions

- 汎用SaaS風の青いグラデーションhero
- 意味のない抽象背景
- アイコンが装飾目的のみ
- UIコンポーネントの選定理由がない
- フォントが商材・訴求とズレている
- アニメーションが装飾目的のみ
- 参考サイトの丸写し
- CVへの貢献仮説がない

## Output Log

`outputs/08_review/design-differentiation-review.md`

## Related Files

- `design-differentiation/mandatory-design-differentiation.md`
- `contracts/design-differentiation-output-contract.md`
- `scoring/design-differentiation-scorecard.md`
- `quality-gates/design-differentiation-gate.md`

---

## Visual Expression Layer 連携（追加）

このvalidationは、Visual Expression Layer の以下4 scorecard を必ず参照する：

- `scoring/visual-expression-scorecard.md`
- `scoring/motion-variety-scorecard.md`
- `scoring/japanese-label-naturalness-scorecard.md`
- `scoring/shape-language-scorecard.md`

### 必須制約（差別化）

```
1. 全セクション同じ translateY reveal を使わない（モーションの独自性）
2. 装飾英語禁止（タイポの独自性）
3. 角丸カード比率 50%以下（形状の独自性）
4. 参考サイト丸写し禁止（全体の独自性）
```

### 出力ログ

`outputs/08_review/visual-expression-review.md` に検証結果を記録。

### Related

- `quality-gates/visual-expression-gate.md`
- `lp-human-art-reviewer` agent
- `skills/10_visual_expression/`
