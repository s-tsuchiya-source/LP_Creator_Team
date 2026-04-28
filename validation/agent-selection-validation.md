# Agent Selection Validation

## Purpose

`lp-director` が「全 agent 起動」ではなく「必要 agent のみ」を選定したかを検証する。

## What to Validate

- 全 agent を毎回呼んでいないか
- 案件タイプに応じて必要 agent だけ選んでいるか
- 使用 agent と除外 agent の理由が明示されているか
- `outputs/08_review/agent-selection-log.md` を作成しているか

## Passing Criteria

- 使用 agent 一覧が記録されている
- 除外 agent も理由付きで明示されている
- 案件規模に対して過剰な agent 起動がない
- `agent-selection-log.md` が存在する

## Failure Criteria

- 使用 agent / 除外 agent の記録なし
- 案件タイプに不要な agent を起動
- 同観点を複数 agent で重複呼び出し

## Critical Fail Conditions

- 全 agent（44個）を一括起動した
- agent-selection-log.md が存在しない
- 案件タイプ判別なしで agent 選定

## Required Evidence

- `outputs/08_review/agent-selection-log.md`
- `director/agent-selection-rule.md` との照合結果

## Output Log

### agent-selection-log.md テンプレート

```markdown
# Agent Selection Log

## 案件タイプ
- [新規LP / 改善 / 広告 / BtoB / 採用 / SaaS 等]

## 業種 playbook
- [選定した playbook ファイル]

## 使用エージェント
| エージェント | 起動理由 |
|---|---|
| lp-director | 統括（必須） |
| lp-marketing-strategist | 戦略設計が必要 |
| ... | ... |

## 除外エージェント
| エージェント | 除外理由 |
|---|---|
| lp-business-model-analyst | BtoCのため不要 |
| lp-heatmap-analyst | 既存LPなしのため不要 |
| ... | ... |

## 選定根拠
- `director/agent-selection-rule.md` の[案件タイプ]項に従う
- 業種 playbook の Recommended Agents を参照
```

## Related Files

- `director/agent-selection-rule.md`
- `director/session-saving-rule.md`
- `industry-playbooks/[該当業種].md`
- agent: `lp-director`
