# Design Differentiation Scorecard

## Purpose

LPデザインが一辺倒・AI風・汎用テンプレートになっていないかを100点満点で採点する。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| Design Concept | 15 | 商材・ターゲット・CV目的に合う明確なコンセプトがある |
| Reference Direction | 10 | 参考元の原理を抽出し、丸写ししていない |
| Icon Strategy | 10 | アイコンの種類・使う理由・使わない理由が明確 |
| UI Component Strategy | 15 | UI選定が理解促進・CV促進に繋がる |
| Typography Strategy | 10 | 伝えたい印象とフォント方針が一致 |
| Animation Strategy | 10 | 装飾ではなく理解・期待・CTAに貢献 |
| Visual Hierarchy | 10 | 見る順番が設計されCTAへ導いている |
| Emotional Role | 10 | 信頼・期待・安心などの感情役割がある |
| Conversion Role | 10 | CVへの貢献仮説がある |

合計: **100点**

## Passing Score

- 85点以上: 合格
- 75〜84点: 修正後再判定
- 74点以下: Design Gate差し戻し

## Critical Fail Conditions

- 汎用SaaS風・テンプレート風のhero
- アイコンやイラストに意味がない
- UIコンポーネントの選定理由がない
- フォントが訴求とズレている
- アニメーションが装飾目的のみ
- 視覚階層がCTAに向いていない
- CVへの貢献仮説がない

## Related Files

- `design-differentiation/mandatory-design-differentiation.md`
- `validation/design-differentiation-validation.md`
- `contracts/design-differentiation-output-contract.md`
- `quality-gates/design-differentiation-gate.md`

---

## Visual Expression Layer 連携（追加）

design-differentiation の評価には、以下のサブ scorecard を必ず参照する：

- `scoring/visual-expression-scorecard.md`（85+ 必須）
- `scoring/motion-variety-scorecard.md`（85+ 必須）
- `scoring/japanese-label-naturalness-scorecard.md`（85+ 必須）
- `scoring/shape-language-scorecard.md`（85+ 必須）

### Critical Fail（差別化観点）

- 全セクション translateY reveal（モーションの差別化なし）
- 全セクション角丸カード（形状の差別化なし）
- 装飾英語乱用（タイポの差別化なし）
- 参考サイトの丸写し（独自性なし）

### 関連 Validation

- `validation/design-differentiation-validation.md`
- `quality-gates/visual-expression-gate.md`
