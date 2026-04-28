# 採用・求人LPワークフロー

求職者向け採用LPの制作フロー。

## 特徴

- ターゲット: 求職者
- CV: 応募 / 説明会予約 / カジュアル面談
- 訴求要素: 仕事内容 / 環境 / メンバー / 福利厚生
- 心理: 「この会社で働く未来が見える」

## 必須エージェント

- `lp-persona-researcher`（求職者ペルソナ）
- `lp-customer-insight-researcher`（転職動機）
- `lp-marketing-strategist`
- `lp-chief-copywriter`
- `lp-sales-copywriter`（ストーリー）
- `lp-proof-copywriter`（社員の声）
- `lp-faq-copywriter`
- `lp-creative-director`（ブランド表現）
- `lp-web-designer`
- `lp-frontend-engineer`
- `lp-qa-lead`

## ステップ

### Step 1: 求職者ペルソナ
- ターゲット属性（業界 / 経験年数 / 志向）
- 転職動機（不満 / 期待）
- 検討段階（情報収集 / 比較 / 決断）

### Step 2: 訴求要素整理
- 仕事内容: ミッション・期待役割
- 環境: 制度・カルチャー
- メンバー: 社員プロフィール・社員の声
- 福利厚生: 給与・休暇・成長機会

### Step 3: 構成・コピー
- FV: 「誰の」「どんな未来」
- 共感: 求職者の悩み・期待
- 仕事内容
- 社員の声（複数）
- 福利厚生
- 選考フロー
- FAQ
- CTA: 応募 / 説明会 / カジュアル面談

### Step 4: デザイン・実装
- 写真の使い方が重要（実在社員 / オフィス）
- 動画があれば活用
- ブランドガイドライン準拠

### Step 5: QA・公開
- 法務: 男女雇用機会均等法・年齢制限表現
- 写真・氏名は本人同意済みか確認

## 注意点

- 「成長できる」「やりがい」だけの抽象訴求はNG
- 具体的な日常・数字を伝える
- 求職者の不安に正面から答える

---

## 使用 agent / skills / contracts / scorecards / components / playbook

- **agent**: lp-director, lp-persona-researcher, lp-customer-insight-researcher, lp-marketing-strategist, lp-chief-copywriter, lp-sales-copywriter, lp-proof-copywriter, lp-faq-copywriter, lp-creative-director, lp-web-designer, lp-frontend-engineer, lp-legal-expression-checker, lp-qa-lead
- **skills**: 01_strategy, 03_copy (全), 04_design, 07_review (legal)
- **contracts**: persona / strategy / copy / design
- **scorecards**: copy / design / legal-risk / final-output
- **components**: first-view/fv-recruiting / proof / faq
- **playbook**: hr-recruiting-playbook.md

## 完了条件

- 性別・年齢制限表現なし（法務）
- 写真・氏名は社員許諾済み
- legal-risk-scorecard 95点以上
- final-output-scorecard 90点以上

---

## Emotional CVR Check（追加）

このフロー完了時に、Emotional CVR Layer の観点で追加確認する。

### 完了条件（Emotional CVR）

- `scoring/emotional-cvr-scorecard.md` で **85点以上**
- `scoring/benefit-clarity-scorecard.md` で **85点以上**
- `scoring/expectation-scorecard.md` で **85点以上**
- `scoring/self-relevance-scorecard.md` で **85点以上**

### 使用する Emotional CVR 要素

- **experience-design**: cv-emotion-journey / benefit-realization / expectation / future-state / anxiety-to-expectation
- **skills/08_experience**: benefit-translation / expectation-building / future-state-copy / self-relevance-design / trust-to-action / cv-motivation-boost
- **contracts**: experience-value-output-contract / emotional-cvr-output-contract
- **components/emotion**: benefit-before-feature / future-state-section / expectation-copy / emotional-proof / anxiety-to-confidence / action-motivation-cta / cv-after-experience

### Emotional CVR フェーズ統合

通常フローに加えて、以下を実施する：

1. ペルソナ確定後、`experience-design/user-motivation-map.md` で動機マップを作成
2. 構成フェーズで `experience-design/cv-emotion-journey.md` の 9段階を反映
3. コピーフェーズで `skills/08_experience/` 全カテゴリを参照
4. デザインフェーズで `components/emotion/` を参照
5. 最終承認時に Emotional CVR 4 scorecard を全て採点

---

## Validation / Human Quality 完了条件（追加）

このフロー完了時に、以下を全達成必須：

### Validation 全 8 種合格

- [ ] director-behavior-validation
- [ ] agent-selection-validation
- [ ] emotional-cvr-validation
- [ ] scorecard-enforcement-validation
- [ ] code-practicality-validation
- [ ] lp-structure-completeness-validation
- [ ] anti-ai-output-validation
- [ ] final-acceptance-validation

### Human Quality / 構成 / コード 必須スコア

```
- human-naturalness-scorecard: 85+
- anti-ai-smell-scorecard: 90+
- lp-structure-completeness-scorecard: 85+
- code-practicality-scorecard: 85+
```

### 必須ログ作成（outputs/08_review/）

- agent-selection-log.md
- validation-report.md
- scorecard-summary.md
- human-quality-review.md
- code-practicality-review.md
- lp-structure-validation.md
- final-acceptance-report.md

参照：
- `validation/`
- `lp-structure-blueprint/`
- `human-quality/`
- `skills/09_humanization/`
