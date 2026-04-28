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
- 出力: `outputs/05_design/`
- **Gate 5**: Design Gate

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
