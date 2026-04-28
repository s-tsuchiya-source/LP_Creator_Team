# Gate 3: Structure Gate

## 目的

セクション構成・ワイヤーがCV最大化に向けて機能するかを判定する。

## 担当エージェント

- `lp-structure-designer`
- `lp-wireframe-planner`
- `lp-cta-flow-designer`

## 合格条件

- [ ] ファーストビューで価値が3秒で伝わる
- [ ] セクション順序が自然（PASONA / AIDA 等のフレーム整合）
- [ ] CTA導線が複数（最低3箇所）配置
- [ ] 不安解消セクション（FAQ）がある
- [ ] 証拠提示（実績・事例）がある
- [ ] スマホで読みやすい

## 不合格条件

- FVに価値訴求がない
- CTA が最終1箇所のみ
- 証拠なしで強みだけ並べる
- セクション数が極端（3以下 / 20以上）

## 差し戻し条件

- 上記不合格条件
- ワイヤーがPCのみ・SPなし
- 視線誘導が不明

## 確認チェックリスト

```markdown
## Structure Gate チェック
- [ ] FV: 価値・CTA・信頼要素
- [ ] 中盤: 問題→解決→証拠
- [ ] FAQ
- [ ] 最終CTA
- [ ] PC / SP 両ワイヤー
- [ ] CTA配置 ≥ 3箇所
- [ ] 視線誘導指示
```

## 通過後の次フェーズ

→ Gate 4: Copy Gate

---

## Related Contract / Scorecard

- **Related Contract**: `contracts/structure-output-contract.md` / `contracts/wireframe-output-contract.md`
- **Related Scorecard**: `scoring/first-view-scorecard.md`
- **Minimum Passing Score**: first-view-scorecard 90+
- **Critical Fail Conditions**: FVなし / CTA配置1箇所 / 証拠セクションなし
- **Required Fix Actions**: `skills/02_structure/` で再設計

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
