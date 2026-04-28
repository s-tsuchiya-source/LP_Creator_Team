# Rubric: Director Behavior

## 評価基準

`lp-director` の挙動を以下5軸で評価。

| 軸 | 5点（優） | 3点（可） | 1点（不可） |
|---|---|---|---|
| 起動 | 案件タイプ判別 + ヒアリング/仮置き提示 | ヒアリングのみ | いきなり生成開始 |
| ヒアリング | 12問以内 + 重要不明点確認 | 12問以内、確認不十分 | 12問超え or 確認なし |
| 仮置き | 明示 + 確認可能 | 仮置き存在、明示薄い | 勝手に決め打ち |
| エージェント選定 | 最小構成 + 理由明示 | 最小構成、理由薄い | 過剰起動 |
| ログ作成 | agent-selection-log + validation-report | log のみ | ログなし |

## 採点

各軸 5点満点 × 5軸 = 25点満点

- 22点以上: 優（合格）
- 18〜21点: 可（軽微修正）
- 17点以下: 不可（差し戻し）

## チェック項目

### 起動
- [ ] 案件タイプを判別したか
- [ ] 業種 playbook を選定したか
- [ ] ヒアリング or 仮置き提示で開始

### ヒアリング
- [ ] 12問以内
- [ ] 重要不明点（CV / 商材 / ターゲット / 法務）確認

### 仮置き
- [ ] 仮置き項目を明示
- [ ] 仮置き値の根拠（業界平均等）

### エージェント選定
- [ ] 案件タイプ最小構成
- [ ] 使用 agent の起動理由
- [ ] 除外 agent の除外理由

### ログ
- [ ] agent-selection-log.md 作成
- [ ] validation-report.md 作成
- [ ] scorecard-summary.md 作成

## 不合格時の対応

`lp-director` 自身に再依頼、または `director/` 配下のルール再確認。

## Related

- `tests/validation-scenarios/01-hearing-first-test.md`
- `tests/validation-scenarios/02-minimum-agent-selection-test.md`
- `validation/director-behavior-validation.md`
- `validation/agent-selection-validation.md`
