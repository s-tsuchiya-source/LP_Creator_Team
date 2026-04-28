# Validation Layer

LP_Creator_Team が、単にLPを生成するだけでなく、意図通りに制作工程を実行しているかを検証するための基盤です。

## Purpose

以下を検証します。

1. `lp-director` が必ずヒアリングから開始するか
2. 必要最小限のagentだけを選定しているか
3. Emotional CVR Layer が成果物に反映されているか
4. scorecardで80点未満を差し戻しているか
5. HTML/CSS/JSが実用レベルか
6. LP構成の王道フローを満たしているか
7. AIっぽい文章・構成・画像・デザインを排除できているか

## Timing

- 初回応答後
- agent選定後
- 構成作成後
- コピー作成後
- デザイン方針作成後
- コード生成後
- 最終納品前

## Output

検証結果は原則として `outputs/08_review/validation-report.md` に保存します。

## Pass / Fail

- すべての必須validationを通過した場合のみ納品可能
- Critical Failが1つでもある場合は点数に関係なく差し戻し
- 80点未満の成果物は必ず該当フェーズへ差し戻し
- 90点未満は納品推奨にしない
