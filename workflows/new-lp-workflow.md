# 新規LP制作ワークフロー

ゼロから新規LPを制作する標準フロー。

## 全体所要時間目安

- 戦略: 1〜2日
- 構成: 1日
- コピー: 2〜3日
- デザイン: 2〜3日
- 実装: 2〜4日
- 計測: 1日
- QA / レビュー: 1〜2日
- 合計: 10〜16日

## ステップ詳細

### Step 1: Brief（半日〜1日）
- ユーザーから依頼受領
- `lp-director` がヒアリング（最大12問）
- ブリーフを `outputs/01_brief/` に保存
- **Gate 1**: Brief Completeness Gate

### Step 2: Strategy（1〜2日）
- `lp-marketing-strategist` 起動
- ペルソナ・訴求軸・差別化決定
- 必要に応じて `lp-persona-researcher` / `lp-competitor-researcher`
- オファー設計: `lp-offer-architect`
- 出力: `outputs/02_strategy/`
- **Gate 2**: Strategy Gate

### Step 3: Structure（1日）
- `lp-structure-designer` でセクション構成
- `lp-wireframe-planner` でワイヤー
- `lp-cta-flow-designer` でCTA設計
- 出力: `outputs/03_structure/`
- **Gate 3**: Structure Gate

### Step 4: Copy（2〜3日）
- `lp-chief-copywriter` 統括
- `lp-headline-specialist` でFV
- `lp-sales-copywriter` で本文
- `lp-proof-copywriter` で実績
- `lp-faq-copywriter` でFAQ
- 出力: `outputs/04_copy/`
- **Gate 4**: Copy Gate

### Step 5: Design（2〜3日）
- `lp-creative-director` で方針
- `lp-art-director` で意匠
- `lp-web-designer` でセクション
- `lp-responsive-specialist` でSP
- **Design Differentiation 必須判断**:
  - `lp-visual-asset-director` 起動 → visual orchestration
  - Icon Strategy / UI Component Strategy / Typography Strategy / Animation Strategy / Visual Hierarchy / Emotional Role / Conversion Role を `templates/visual-brief-template.md` 形式で記録
  - `contracts/design-differentiation-output-contract.md` 必須セクションすべて記録
  - 該当業種 `industry-playbooks/[業種]-playbook.md` の Design Direction を参照
- 出力: `outputs/05_design/`
- **Gate 5**: Design Gate
- **Sub-Gate**: `quality-gates/design-differentiation-gate.md`（**design-differentiation-scorecard 85+ 必須**）→ `lp-visual-quality-gate` で判定

### Step 6: Code（2〜4日）
- `lp-frontend-engineer` 統括
- `lp-html-css-specialist` / `lp-javascript-engineer` / `lp-form-implementation-specialist`
- `lp-performance-engineer` で速度最適化
- `lp-accessibility-engineer` で a11y
- 出力: `outputs/06_code/[案件名]/`
- **Gate 6**: Code Gate

### Step 7: Measurement（1日）
- `lp-ga4-gtm-specialist` で計測設計
- `lp-conversion-tracking-specialist` で広告CV
- 出力: `outputs/07_measurement/`
- **Gate 7**: Measurement Gate

### Step 8: QA & Legal（1日）
- `lp-qa-lead` 統括
- `lp-browser-test-specialist`
- `lp-legal-expression-checker`
- `lp-security-checker`
- **Gate 8**: Legal Gate

### Step 9: Final Review（半日〜1日）
- `lp-executive-reviewer`
- `lp-conversion-reviewer`
- `lp-brand-reviewer`
- `lp-final-gatekeeper` で統合判定
- 出力: `outputs/08_review/`
- **Gate 9**: Final Release Gate

### Step 10: Release
- `lp-release-manager` で公開手順
- 公開実行
- 公開後監視

---

## 使用 agent / skills / contracts / scorecards / components / playbook

- **agent**: lp-director, lp-marketing-strategist, lp-persona-researcher, lp-structure-designer, lp-chief-copywriter, lp-creative-director, lp-frontend-engineer, lp-ga4-gtm-specialist, lp-qa-lead, lp-legal-expression-checker, lp-final-gatekeeper
- **skills**: 全カテゴリ（00_director〜07_review）
- **contracts**: brief / strategy / persona / structure / wireframe / copy / design / code / measurement / qa / final-delivery
- **scorecards**: lp-master / first-view / offer / copy / design / cta-form / measurement / legal-risk / final-output
- **components**: first-view / cta / proof / form / faq / section（全カテゴリ）
- **playbook**: 案件業種に応じて選定

## 完了条件

- final-output-scorecard 90点以上
- legal-risk-scorecard 95点以上 / Critical Fail なし
- 全 quality-gates 通過
- final-delivery-contract に準拠

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

### Validation 全 9 種合格

- [ ] director-behavior-validation
- [ ] agent-selection-validation
- [ ] emotional-cvr-validation
- [ ] scorecard-enforcement-validation
- [ ] code-practicality-validation
- [ ] lp-structure-completeness-validation
- [ ] anti-ai-output-validation
- [ ] **design-differentiation-validation**
- [ ] final-acceptance-validation

### Human Quality / 構成 / コード / デザイン差別化 必須スコア

```
- human-naturalness-scorecard: 85+
- anti-ai-smell-scorecard: 90+
- lp-structure-completeness-scorecard: 85+
- code-practicality-scorecard: 85+
- design-differentiation-scorecard: 85+
```

### 必須ログ作成（outputs/08_review/）

- agent-selection-log.md
- validation-report.md
- scorecard-summary.md
- human-quality-review.md
- code-practicality-review.md
- lp-structure-validation.md
- **design-differentiation-layer-report.md**
- final-acceptance-report.md

参照：
- `validation/`
- `lp-structure-blueprint/`
- `human-quality/`
- `skills/09_humanization/`
- `design-differentiation/`
- `docs/visual-agent-architecture.md`
- `docs/visual-production-workflow.md`
