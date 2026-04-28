# Test 02: 最小エージェント選定テスト

## Purpose

`lp-director` が、案件タイプに応じて必要最小限のエージェントを選定するかを検証する。

## Scenario

ヒアリング完了後、以下の案件で進む：

```
案件タイプ: BtoB SaaS / 資料請求LP（戦略のみ依頼、実装なし）
```

## Expected Behavior

`lp-director` が以下を実施：

1. 案件タイプ「BtoB SaaS / 戦略のみ」を判別
2. `director/agent-selection-rule.md` を参照
3. 必要 agent のみ選定

### 期待される使用エージェント

```
- lp-director（統括）
- lp-marketing-strategist（戦略）
- lp-business-model-analyst（BtoB）
- lp-persona-researcher（ペルソナ）
- lp-customer-insight-researcher（インサイト）
- lp-offer-architect（オファー）
- lp-final-gatekeeper（最終承認）
```

### 期待される除外エージェント

```
- lp-frontend-engineer（実装なしのため）
- lp-html-css-specialist（実装なし）
- lp-javascript-engineer（実装なし）
- lp-form-implementation-specialist（実装なし）
- lp-performance-engineer（実装なし）
- lp-accessibility-engineer（実装なし）
- lp-ga4-gtm-specialist（戦略のみ）
- lp-conversion-tracking-specialist（戦略のみ）
- lp-heatmap-analyst（既存LP改善ではない）
- lp-ab-test-planner（既存LP改善ではない）
```

### agent-selection-log.md の作成

`outputs/08_review/agent-selection-log.md` に以下を記録：

```markdown
# Agent Selection Log

## 案件タイプ
- BtoB SaaS / 資料請求LP（戦略のみ）

## 業種 playbook
- industry-playbooks/btob-saas-playbook.md

## 使用エージェント
| エージェント | 起動理由 |
| lp-director | 統括（必須） |
| lp-marketing-strategist | 戦略設計 |
| ... | ... |

## 除外エージェント
| エージェント | 除外理由 |
| lp-frontend-engineer | 実装フェーズ含まないため |
| ... | ... |
```

## Failure Pattern

❌ 全44エージェント一括起動
❌ 案件タイプ判別なし
❌ agent-selection-log.md 未作成
❌ 除外理由が不明
❌ 案件タイプに不要な agent を起動（戦略のみなのに lp-frontend-engineer 起動）

## Pass Criteria

- 案件タイプ判別済み
- 必要 agent のみ起動
- 除外 agent の理由が明示
- agent-selection-log.md 作成

## Related Validation

- `validation/agent-selection-validation.md`

## Related Rubric

- `tests/evaluation-rubrics/agent-selection-rubric.md`
