# SaaS LPワークフロー

SaaSプロダクトのLP制作フロー。

## 特徴

- 商材: 月額・年額のサブスクリプション
- CV: 無料トライアル / デモ予約 / 資料請求
- 競合多し: 比較表が重要
- 機能訴求 + ベネフィット訴求 のバランス

## 必須エージェント

- `lp-business-model-analyst`
- `lp-marketing-strategist`
- `lp-offer-architect`（無料トライアル / 14日間無料 等）
- `lp-headline-specialist`
- `lp-proof-copywriter`（導入企業ロゴ・事例）
- `lp-competitor-researcher`
- `lp-faq-copywriter`
- `lp-frontend-engineer`
- `lp-ga4-gtm-specialist`
- `lp-qa-lead`

## ステップ

### Step 1: 機能 → ベネフィット翻訳
- 機能リストを作成
- 各機能をベネフィットに翻訳（「だから何ができる」）

### Step 2: 競合比較
- 主要競合3〜5社のLP分析
- 機能比較表
- 価格比較
- 差別化ポイント

### Step 3: オファー設計
- 無料トライアル（クレカ要否）
- デモ予約
- 資料請求
- フリーミアム

### Step 4: 構成・コピー
- FV: ベネフィット型キャッチ
- 課題訴求
- 機能 × ベネフィット
- 導入企業ロゴ
- 比較表
- 価格プラン
- FAQ
- CTA

### Step 5: 価格表示
- 月額 / 年額切替
- 各プランの特徴
- 推奨プランをハイライト

### Step 6: 計測・QA・公開
- 無料トライアル登録 / デモ予約 / 資料請求 のCV計測
- アクティベーション計測（次フェーズ）

## SaaS特有の注意点

- 機能羅列だけでは差別化されない
- 「誰のどんな業務がどう変わるか」を具体化
- 価格は隠さず明示（信頼）
- セキュリティ・SLA・サポート も訴求要素

---

## 使用 agent / skills / contracts / scorecards / components / playbook

- **agent**: lp-director, lp-business-model-analyst, lp-marketing-strategist, lp-offer-architect, lp-headline-specialist, lp-proof-copywriter, lp-competitor-researcher, lp-faq-copywriter, lp-frontend-engineer, lp-ga4-gtm-specialist, lp-qa-lead
- **skills**: 01_strategy (全), 02_structure, 03_copy (headline / proof), 06_measurement
- **contracts**: strategy / copy / code / measurement
- **scorecards**: lp-master / offer / copy / measurement
- **components**: first-view/fv-saas / cta / proof
- **playbook**: btob-saas-playbook.md

## 完了条件

- 価格プラン3案 + 推奨ハイライト
- 競合比較表あり
- 無料トライアル登録動作確認
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

SaaS LPは比較・機能訴求・トライアル誘導が多いため、競合と同じデザインになりやすい。商材ポジショニング（業務効率 / データ可視化 / 属人化解消 / セキュリティ）・ターゲット（担当 / 決裁 / 情シス）・CV目的（資料 / トライアル / デモ）に応じて、UI Component / Typography / Animation を**選んで決める**。

### このワークフローでの必須事項

- デザインフェーズで `lp-visual-asset-director` を起動し、`templates/visual-brief-template.md` を出力
- `contracts/design-differentiation-output-contract.md` の必須セクションすべて記録
- `industry-playbooks/btob-saas-playbook.md` の Design Direction を反映
- プロダクトUIスクショ / 機能比較表 / 価格表示の使い分けを採用理由付きで記録
- 「青グラデhero」「均一カード羅列」「装飾モーション」等の Anti-Pattern を避ける
- `quality-gates/design-differentiation-gate.md` 通過 / `scoring/design-differentiation-scorecard.md` **85点以上** 必須

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
