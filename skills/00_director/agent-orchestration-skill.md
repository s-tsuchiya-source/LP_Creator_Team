# Agent Orchestration Skill

## Purpose

LP制作工程に応じて必要最小限のエージェントを選定し、目的・入力・期待出力を明示して呼び出す。

## When to Use

- ブリーフ確定後の各フェーズ着手時
- 案件タイプ判別後

## Required Inputs

- 確定済みブリーフ
- 案件タイプ（新規 / 改善 / 広告 / BtoB 等）

## Step-by-Step Procedure

1. 案件タイプを `director/agent-selection-rule.md` で判別
2. 必要最小限のエージェントリストを抽出
3. 各エージェント呼び出し時のテンプレを準備：
   - 目的
   - 入力（参照ドキュメント）
   - 期待出力（contract指定）
   - スコアリング（scorecard指定）
   - 連携先
4. 独立タスクは並行呼び出し
5. 直列タスクは前段成果物を確定後に呼び出し
6. 各成果物を contract / scorecard で照合
7. スコア80未満は差し戻し

## Output Format

```
[エージェント名] 呼び出し:
- 目的:
- 参照: [ファイルパス]
- 期待出力: [contract名]
- スコアリング: [scorecard名]
- 連携先: [次エージェント or director]
```

## Quality Criteria

- 不要なエージェント呼び出しなし
- 並行可能なタスクは並行
- 各呼び出しに目的・入力・期待出力が明示
- contracts と scorecards の指定がある

## Common Failure Patterns

- 全エージェントを順次呼び出す
- 同観点を複数エージェントで重複
- 入力情報なしの依頼
- contract / scorecard 未指定

## Self Check

- [ ] 案件タイプに最小構成か
- [ ] 並行可能なタスクは並行か
- [ ] 各呼び出しにcontract/scorecardが紐づくか

## Related Agents

- `lp-director`（このskillの主使用者）
