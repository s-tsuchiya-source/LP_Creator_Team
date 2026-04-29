# BtoB リード獲得LPワークフロー

BtoB商材のリード獲得LPフロー。商談化率・受注率を見据えた設計。

## 特徴

- 顧客単価: 高め（数十万円〜数千万円）
- 意思決定者: 複数（担当者 / 上長 / 決裁者）
- 商談プロセスあり
- リード質が重要

## 必須エージェント

- `lp-business-model-analyst`（収益構造踏まえたLP設計）
- `lp-marketing-strategist`
- `lp-persona-researcher`（複数ペルソナ）
- `lp-customer-insight-researcher`
- `lp-offer-architect`（資料請求 / 無料相談 / デモ）
- `lp-proof-copywriter`（導入事例・実績）
- `lp-faq-copywriter`（決裁時の不安解消）
- `lp-cta-flow-designer`
- `lp-crm-ma-integration-specialist`（CRM連携あれば）
- `lp-qa-lead`

## ステップ

### Step 1: 営業プロセスの理解
- 商談化率・受注率
- 顧客単価・LTV
- 商談で負ける理由

### Step 2: ペルソナ複数定義
- 担当者: 業務上の課題
- 上長: 部門KPI整合
- 決裁者: ROI・リスク
- それぞれにあった訴求要素を整理

### Step 3: オファー設計
- 第1次CV: 資料請求 / 無料相談
- 第2次CV: デモ / 個別相談
- リード質を担保（フォーム項目で篩い分け）

### Step 4: 構成・コピー
- 課題の言語化（業界特化）
- 解決策の機能・効果
- 導入事例（同規模・同業種）
- 比較表・ROI試算
- 詳細FAQ

### Step 5: CRM連携
- HubSpot / Salesforce 等への連携
- リードスコアリング初期設計
- 営業引き渡し情報

### Step 6: 計測・QA・公開

## リード質の担保

- フォーム項目: 役職 / 従業員規模 / 検討状況 を必須化
- ただし過剰に増やさない（5〜7項目目安）
- 自動返信メールで温度感維持

---

## 使用 agent / skills / contracts / scorecards / components / playbook

- **agent**: lp-director, lp-business-model-analyst, lp-marketing-strategist, lp-persona-researcher, lp-customer-insight-researcher, lp-offer-architect, lp-proof-copywriter, lp-faq-copywriter, lp-cta-flow-designer, lp-crm-ma-integration-specialist, lp-qa-lead
- **skills**: 01_strategy (全), 02_structure (objection-handling), 03_copy (proof / faq)
- **contracts**: strategy / persona / copy / measurement
- **scorecards**: lp-master / offer / copy / cta-form
- **components**: first-view/fv-btob-leadgen / proof / faq / form
- **playbook**: btob-saas-playbook.md / high-ticket-service-playbook.md

## 完了条件

- リード質を担保（業種・規模・役職取得）
- CRM連携設計完了
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
- design-differentiation-layer-report.md
- final-acceptance-report.md

参照：
- `validation/`
- `lp-structure-blueprint/`
- `human-quality/`
- `skills/09_humanization/`
- `design-differentiation/`

---

## Design Differentiation Mandatory（必須・全フェーズ通過）

BtoB高単価LPは「綺麗なだけ」では商談化しない。商材・複数意思決定者（担当 / 上長 / 決裁者 / 情シス）・CV目的に応じて、Reference Direction / Icon Strategy / UI Component Strategy / Typography Strategy / Animation Strategy / Visual Hierarchy / Emotional Role / Conversion Role を**選んで決める**。

### このワークフローでの必須事項

- デザインフェーズで `lp-visual-asset-director` を起動し、`templates/visual-brief-template.md` を出力
- `contracts/design-differentiation-output-contract.md` の必須セクションすべて記録
- `industry-playbooks/btob-saas-playbook.md`（または `consulting-playbook.md` / `high-ticket-service-playbook.md`）の Design Direction を反映
- 比較表 / 導入事例 / セキュリティバッジなど BtoB 特有の UI Component を、CV貢献仮説とともに採用
- `quality-gates/design-differentiation-gate.md` を Design Gate のサブゲートとして必ず通過
- `scoring/design-differentiation-scorecard.md` **85点以上** 必須

### Validation 追加

- [ ] **design-differentiation-validation 合格**

### 必須参照

- `.ai-workflow/director/design-differentiation-task.md`
- `design-differentiation/mandatory-design-differentiation.md`
- `contracts/design-differentiation-output-contract.md`
- `scoring/design-differentiation-scorecard.md`
- `quality-gates/design-differentiation-gate.md`
- `validation/design-differentiation-validation.md`
- `templates/visual-brief-template.md`
- `templates/visual-review-sheet.md`
- `docs/visual-agent-architecture.md`
- `docs/visual-production-workflow.md`
- `configs/visual-agent-registry.json`
