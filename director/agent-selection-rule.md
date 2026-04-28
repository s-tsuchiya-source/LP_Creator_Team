# agent-selection-rule.md — エージェント選定ルール

案件タイプごとの推奨エージェント構成。

## 基本構成（Director 必須）

すべての案件で `lp-director` を起点とする。

## 案件タイプ別推奨構成

### 1. 簡易LP（Brief / 構成 / コピー / 簡易デザイン / 実装）
- `lp-structure-designer`
- `lp-chief-copywriter` + `lp-headline-specialist`
- `lp-web-designer`
- `lp-frontend-engineer`
- `lp-qa-lead`

### 2. 広告LP（広告流入 / 計測重視）
- `lp-marketing-strategist`
- `lp-lpo-strategist`
- `lp-headline-specialist`
- `lp-sales-copywriter`
- `lp-cta-flow-designer`
- `lp-ga4-gtm-specialist`
- `lp-conversion-tracking-specialist`
- `lp-qa-lead`

### 3. BtoB高単価LP
- `lp-business-model-analyst`
- `lp-marketing-strategist`
- `lp-persona-researcher`
- `lp-customer-insight-researcher`
- `lp-offer-architect`
- `lp-proof-copywriter`
- `lp-faq-copywriter`
- `lp-cta-flow-designer`
- `lp-qa-lead`

### 4. 採用LP
- `lp-persona-researcher`（求職者ペルソナ）
- `lp-customer-insight-researcher`
- `lp-marketing-strategist`
- `lp-chief-copywriter` + `lp-sales-copywriter`
- `lp-faq-copywriter`
- `lp-creative-director` + `lp-web-designer`
- `lp-qa-lead`

### 5. SaaS LP
- `lp-business-model-analyst`
- `lp-marketing-strategist`
- `lp-offer-architect`（無料トライアル / デモ）
- `lp-headline-specialist`
- `lp-proof-copywriter`
- `lp-faq-copywriter`
- `lp-frontend-engineer`
- `lp-ga4-gtm-specialist`
- `lp-qa-lead`

### 6. セミナーLP
- `lp-marketing-strategist`
- `lp-headline-specialist`
- `lp-faq-copywriter`
- `lp-cta-flow-designer`
- `lp-web-designer`
- `lp-frontend-engineer`
- `lp-qa-lead`

### 7. 既存LP改善
- `lp-lpo-strategist`
- `lp-heatmap-analyst`
- `lp-ab-test-planner`
- `lp-chief-copywriter`
- `lp-cta-flow-designer`
- `lp-qa-lead`

### 8. HTML実装あり
基本構成に追加:
- `lp-frontend-engineer`
- `lp-html-css-specialist`
- `lp-javascript-engineer`
- `lp-form-implementation-specialist`
- `lp-performance-engineer`
- `lp-accessibility-engineer`

### 9. 計測設計あり
基本構成に追加:
- `lp-ga4-gtm-specialist`
- `lp-conversion-tracking-specialist`
- `lp-crm-ma-integration-specialist`（CRM連携あり）

### 10. 法務リスクあり（医療 / 美容 / 健康食品 / 金融 等）
基本構成に追加（**必須**）:
- `lp-legal-expression-checker`

### 11. スマホCV重視（C向け広告流入）
基本構成に追加:
- `lp-responsive-specialist`
- `lp-form-implementation-specialist`

### 12. 表示速度重視（広告品質 / SEO重視）
基本構成に追加:
- `lp-performance-engineer`
- `lp-accessibility-engineer`

## 最終承認フェーズ（共通）

すべての案件で以下を経由:
- `lp-qa-lead`
- 必要に応じて `lp-legal-expression-checker` / `lp-security-checker`
- `lp-executive-reviewer` / `lp-conversion-reviewer` / `lp-brand-reviewer`（重要案件）
- `lp-final-gatekeeper`

## 不要なエージェントを呼ばない原則

- 簡易LPで `lp-business-model-analyst` は不要
- 既存LP改善で `lp-marketing-strategist` の戦略フル設計は不要（観点提供のみ）
- 計測なしLPで `lp-ga4-gtm-specialist` は不要
- 法務リスクなしLPで `lp-legal-expression-checker` は任意

## 判断補助

「このエージェントを使う必要がある？」と迷ったら：

1. 成果物に直接影響するか？
2. 他エージェントで代替できないか？
3. 案件規模に見合うか？

3問すべて Yes なら使う。それ以外は省略する。
