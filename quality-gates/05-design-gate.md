# Gate 5: Design Gate

## 目的

デザインが信頼性・CV・SP対応を満たすかを判定する。

## 担当エージェント

- `lp-creative-director`
- `lp-art-director`
- `lp-brand-reviewer`

## 合格条件

- [ ] 信頼感がある
- [ ] 視線誘導がある
- [ ] CTAが目立つ（コントラスト・サイズ）
- [ ] 余白が適切
- [ ] SP表示に強い
- [ ] ブランドを毀損しない
- [ ] コントラスト 4.5:1 以上

## 不合格条件

- CTA が背景に埋もれる
- 装飾過多で本文が読めない
- SP未対応
- ブランドガイドライン違反

## 差し戻し条件

- 上記不合格条件
- 主要セクションのデザインが未確定

## 確認チェックリスト

```markdown
## Design Gate チェック
- [ ] 配色（コントラスト）
- [ ] タイポ階層
- [ ] 余白
- [ ] CTA可視性
- [ ] SP表示
- [ ] ブランド整合
```

## 通過後の次フェーズ

→ **Design Differentiation Gate**（必須サブゲート / 次の `quality-gates/design-differentiation-gate.md` を必ず通過）
→ Gate 6: Code Gate

---

## Related Contract / Scorecard

- **Related Contract**: `contracts/design-output-contract.md`
- **Related Scorecard**: `scoring/design-scorecard.md`
- **Minimum Passing Score**: design-scorecard 85+
- **Critical Fail Conditions**: ブランド違反 / コントラスト不足 / SP未対応
- **Required Fix Actions**: `skills/04_design/` で再設計

### Design Differentiation Sub-Gate（必須）

このゲート通過後、`quality-gates/design-differentiation-gate.md` を**必ず通過**しなければ Code Gate に進めない。

- **Related Contract**: `contracts/design-differentiation-output-contract.md`
- **Related Scorecard**: `scoring/design-differentiation-scorecard.md`
- **Minimum Passing Score**: design-differentiation-scorecard **85+**
- **Critical Fail Conditions**: 汎用SaaS風 / 装飾アイコン羅列 / 装飾モーション / フォント採用理由なし / Visual Hierarchy 未定義 / 競合置換可能なデザイン
- **Required Fix Actions**: `skills/04_design/visual-direction-skill.md` で Reference Direction / Icon Strategy / Typography Strategy / Animation Strategy / Visual Hierarchy を再定義

---

## Emotional CVR Check（追加）

このゲートでは、Emotional CVR Layer の観点も必ず確認する：

- [ ] ユーザーが得るメリットは明確か
- [ ] 導入後の未来が想像できるか
- [ ] 不安から期待への転換があるか
- [ ] CTA直前の行動意欲が高まっているか
- [ ] CV後の流れが明確か
- [ ] ファーストビューで「自分のことだ」と感じるか
- [ ] 期待感が誇大表現でなく根拠ベース

### Required Emotional Scorecards

- `scoring/emotional-cvr-scorecard.md`: **85点以上**
- `scoring/benefit-clarity-scorecard.md`: **85点以上**
- `scoring/expectation-scorecard.md`: **85点以上**
- `scoring/self-relevance-scorecard.md`: **85点以上**

### Required References

- `experience-design/emotional-cvr-principles.md`
- `experience-design/cv-emotion-journey.md`
- `contracts/emotional-cvr-output-contract.md`

---

## Validation Layer / Human Quality Layer 通過確認

### Validation Layer
- [ ] director-behavior-validation 合格
- [ ] agent-selection-validation 合格
- [ ] emotional-cvr-validation 合格
- [ ] scorecard-enforcement-validation 合格
- [ ] code-practicality-validation 合格
- [ ] lp-structure-completeness-validation 合格
- [ ] anti-ai-output-validation 合格

### Human Quality Layer
- [ ] human-naturalness-scorecard 85+
- [ ] anti-ai-smell-scorecard 90+
- [ ] 競合置き換えテスト 90%以上不成立
- [ ] 業務シーン描写あり
- [ ] 担当者の本音入り
- [ ] 数字に出典付き
- [ ] 商材文脈に合うビジュアル

### LP Structure Blueprint 準拠
- [ ] 16必須項目網羅、または省略項目に理由
- [ ] セクション順序が論理的
- [ ] CTA 最低3箇所
- [ ] FAQ 6カテゴリ網羅

### 実用コード検査
- [ ] code-practicality-scorecard 85+
- [ ] LCP / CLS / INP 達成
- [ ] 計測 data 属性完備
- [ ] a11y Lighthouse 90+

詳細は `validation/` 配下の各ファイルを参照。

---

## Visual Expression Layer 通過確認（追加）

### 必須スコア
- [ ] visual-expression-scorecard 85+
- [ ] motion-variety-scorecard 85+
- [ ] japanese-label-naturalness-scorecard 85+
- [ ] shape-language-scorecard 85+

### Critical Fail（点数に関係なく差し戻し）
- [ ] 全セクション同じ translateY reveal なし
- [ ] reveal系 40%以下
- [ ] 装飾英語ゼロ
- [ ] 角丸カード比率 50%以下
- [ ] CV直前の過剰モーションなし
- [ ] 参考サイト丸写しなし
- [ ] prefers-reduced-motion 完全対応

### 必須出力ファイル
- [ ] outputs/05_design/visual-expression-map.md
- [ ] outputs/05_design/motion-storyboard.md
- [ ] outputs/05_design/typography-rationale.md
- [ ] outputs/05_design/shape-language-map.md
- [ ] outputs/08_review/visual-expression-review.md
- [ ] outputs/08_review/visual-expression-scorecard.md

詳細は `quality-gates/visual-expression-gate.md` を参照。
