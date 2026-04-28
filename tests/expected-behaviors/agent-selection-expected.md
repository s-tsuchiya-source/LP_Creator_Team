# Expected: 必要 agent だけを選定

## 期待される lp-director の挙動

### Step 1: 案件タイプ判別

```
案件タイプ: BtoB SaaS / 資料請求LP（戦略のみ）
業種 playbook: industry-playbooks/btob-saas-playbook.md
```

### Step 2: 必要 agent 選定

`director/agent-selection-rule.md` の BtoB高単価LP行を参照：

```
- lp-director（必須）
- lp-marketing-strategist
- lp-business-model-analyst
- lp-persona-researcher
- lp-customer-insight-researcher
- lp-offer-architect
- lp-proof-copywriter（実績訴求）
- lp-faq-copywriter（不安解消）
- lp-cta-flow-designer
- lp-final-gatekeeper（最終承認）
```

### Step 3: 除外 agent と理由

```
- lp-frontend-engineer: 実装フェーズ含まない
- lp-html-css-specialist: 実装含まない
- lp-javascript-engineer: 実装含まない
- lp-form-implementation-specialist: 実装含まない
- lp-performance-engineer: 実装含まない
- lp-accessibility-engineer: 実装含まない
- lp-ga4-gtm-specialist: 戦略のみ
- lp-conversion-tracking-specialist: 戦略のみ
- lp-heatmap-analyst: 既存LPなし
- lp-ab-test-planner: 既存LPなし
- lp-crm-ma-integration-specialist: CRM連携不明
- lp-recruiting-pertinent agent群: 採用LPでない
- lp-graphic-designer: グラフィック詳細不要（戦略のみ）
```

### Step 4: agent-selection-log.md 作成

```markdown
# Agent Selection Log

## 案件
- 案件名: 採用管理クラウド RecruitFlow（架空）
- 案件タイプ: BtoB SaaS / 資料請求LP / 戦略のみ

## 業種 playbook
- industry-playbooks/btob-saas-playbook.md

## 使用エージェント
| エージェント | 起動理由 |
|---|---|
| lp-director | 統括（必須） |
| lp-marketing-strategist | 戦略設計 |
| lp-business-model-analyst | BtoBファネル設計 |
| lp-persona-researcher | ペルソナ設計 |
| lp-customer-insight-researcher | インサイト |
| lp-offer-architect | オファー設計 |
| lp-proof-copywriter | 実績訴求 |
| lp-faq-copywriter | 不安解消 |
| lp-cta-flow-designer | CTA設計 |
| lp-final-gatekeeper | 最終承認 |

## 除外エージェント
| エージェント | 除外理由 |
|---|---|
| lp-frontend-engineer | 実装フェーズ含まない |
| lp-ga4-gtm-specialist | 戦略のみ |
| lp-heatmap-analyst | 既存LPなし |
| ... | ... |
```

## NG パターン

❌ 全44エージェント起動
❌ agent-selection-log.md なし
❌ 除外理由なし
❌ 案件タイプ判別なし

## 採点基準

| 項目 | 配点 |
|---|---|
| 案件タイプ判別 | 20 |
| 必要 agent のみ起動 | 30 |
| 除外 agent の理由 | 20 |
| agent-selection-log.md 作成 | 30 |

合計 80+ で合格。

## Related

- `tests/validation-scenarios/02-minimum-agent-selection-test.md`
- `validation/agent-selection-validation.md`
- `director/agent-selection-rule.md`
