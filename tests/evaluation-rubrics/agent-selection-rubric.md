# Rubric: Agent Selection

## 評価基準

| 軸 | 5点 | 3点 | 1点 |
|---|---|---|---|
| 案件タイプ判別 | 明示 + playbook 選定 | 判別あり、playbook 不明 | 判別なし |
| 必要 agent 起動 | 案件最小構成 | やや過剰 | 全 agent 起動 |
| 除外 agent 理由 | 全項目に理由 | 一部理由 | 理由なし |
| log 作成 | 完全な agent-selection-log | 簡易 log | log なし |

## 採点

各軸 5点 × 4軸 = 20点満点

- 17+: 合格
- 14〜16: 軽微修正
- 13以下: 差し戻し

## チェック項目

- [ ] `director/agent-selection-rule.md` 参照
- [ ] 業種 playbook 選定
- [ ] 使用 agent リスト + 理由
- [ ] 除外 agent リスト + 理由
- [ ] `outputs/08_review/agent-selection-log.md` 作成

## NG パターン

❌ 全44エージェント起動
❌ agent-selection-log なし
❌ 除外理由なし
❌ 案件タイプ判別なし

## Related

- `validation/agent-selection-validation.md`
- `director/agent-selection-rule.md`
