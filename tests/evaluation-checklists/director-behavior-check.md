# Director Behavior Check

`lp-director` の挙動を検証するチェックリスト。

## 必須挙動

### 起動時
- [ ] LPタイプを判別したか
- [ ] 業種 playbook を選定したか
- [ ] 必要情報の充足率を判定したか

### ヒアリング
- [ ] 12問以内のヒアリングを提示したか
- [ ] 重要不明点（CV / 商材 / 法務）を確認したか
- [ ] 仮置き事項を明示したか

### エージェント選定
- [ ] 全エージェント呼び出しをしていないか
- [ ] 案件タイプに応じた最小構成か
- [ ] 法務リスク該当業種で `lp-legal-expression-checker` を含めたか

### エージェント呼び出し
- [ ] 目的・参照・期待出力・contract / scorecard を明示したか
- [ ] 並行可能なタスクは並行呼び出しか

### 品質判定
- [ ] 各 scorecard で採点したか
- [ ] 80点未満は差し戻したか
- [ ] 法務 Critical Fail を見逃していないか

### Intent Alignment
- [ ] 9項目チェックを実施したか
- [ ] ズレ発見時に差し戻したか

### Emotional CVR
- [ ] 9項目の Emotional CVR Mandatory Check を実施したか
- [ ] 4 Emotional CVR scorecards で 85+ 達成したか

### 最終判定
- [ ] `lp-final-gatekeeper` に判定依頼したか
- [ ] `final-delivery-contract` に沿って統合出力したか

## NG挙動

- 全エージェント一括呼び出し
- 12問超える初回ヒアリング
- 仮置きと確定値の混同
- スコア80未満で納品
- 法務 Critical Fail 見逃し
- Emotional CVR チェックスキップ

## 採点

各項目1点とし、満点 / 達成率を記録。

満点達成 = 95%以上の項目達成
