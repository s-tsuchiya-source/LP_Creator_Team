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
