# Gate 4: Copy Gate

## 目的

LPコピー全体がCV最大化に向けて機能するかを判定する。

## 担当エージェント

- `lp-chief-copywriter`
- `lp-legal-expression-checker`（並行）

## 合格条件

- [ ] 「誰向け」が分かる
- [ ] 「何が得られる」が分かる
- [ ] 「なぜ信頼できる」が分かる
- [ ] 「なぜ今行動すべきか」が分かる
- [ ] ベネフィットと証拠がセット
- [ ] CTAが具体的（「お問い合わせ」だけでない）
- [ ] 誇大表現がない
- [ ] トーンが一貫

## 不合格条件

- 抽象的すぎる訴求
- ベネフィット欠如
- 証拠なき断定
- 法令違反表現
- CTA文言が抽象

## 差し戻し条件

- 上記不合格条件
- ペルソナの言葉と乖離
- FAQ未作成

## 確認チェックリスト

```markdown
## Copy Gate チェック
- [ ] FV: メインキャッチ・サブ・CTA
- [ ] 問題提起・共感・解決策
- [ ] ベネフィット明確
- [ ] 実績・お客様の声
- [ ] FAQ ≥ 5件
- [ ] 最終CTA
- [ ] トーン一貫
- [ ] 誇大表現なし
```

## 通過後の次フェーズ

→ Gate 5: Design Gate

---

## Related Contract / Scorecard

- **Related Contract**: `contracts/copy-output-contract.md`
- **Related Scorecard**: `scoring/copy-scorecard.md` / `scoring/legal-risk-scorecard.md`
- **Minimum Passing Score**: copy-scorecard 85+ / legal-risk 95+
- **Critical Fail Conditions**: 法令違反表現 / 出典なき断定数値 / 機能羅列のみ
- **Required Fix Actions**: `skills/03_copy/` で再執筆 / `lp-legal-expression-checker` を通す

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

## Hero Art Direction + Japanese Line Break 通過確認（追加）

### Hero Art Direction
- [ ] 3パターン以上比較
- [ ] hero-art-direction-scorecard 85+
- [ ] non-dashboard-hero-scorecard 85+
- [ ] photo-annotation-hero-scorecard 85+（写真パターン時）
- [ ] hero-pattern-selection.md 作成

### Japanese Line Break
- [ ] japanese-line-break-scorecard 85+
- [ ] 助詞分断ゼロ
- [ ] 複合語分断ゼロ
- [ ] PC / SP 改行分離（br クラス）
- [ ] japanese-line-break-review.md 作成

詳細は以下を参照：
- `quality-gates/hero-art-direction-gate.md`
- `quality-gates/japanese-line-break-gate.md`
