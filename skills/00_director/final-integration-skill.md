# Final Integration Skill

## Purpose

各フェーズの成果物を統合し、`final-delivery-contract.md` に準拠した最終納品形式に仕上げる。

## When to Use

- 全フェーズ通過後
- 最終承認直前

## Required Inputs

- 各フェーズの成果物（outputs/01〜08/）
- 各scorecardの採点結果
- レビューボード判定結果

## Step-by-Step Procedure

1. 全フェーズ成果物を集約
2. `contracts/final-delivery-contract.md` の必須セクションをチェック
3. 不足セクションを補完
4. 各scorecardのスコアを集計
5. `scoring/lp-master-scorecard.md` で総合採点
6. 80点未満なら差し戻し
7. 80〜89点なら軽微修正
8. 90点以上で `lp-final-gatekeeper` へ最終判定依頼
9. PASS判定後、最終納品ドキュメントを `outputs/08_review/final-delivery.md` に生成

## Output Format

`contracts/final-delivery-contract.md` に準拠。以下を必ず含む：

- 制作前提
- 仮置き事項
- LP戦略
- ターゲット
- 訴求軸
- LP構成
- ワイヤーフレーム
- コピー全文
- デザイン方針
- 実装ファイル
- 計測設計
- QA結果
- 法務チェック結果
- 改善提案
- 次アクション

## Quality Criteria

- 全フェーズ成果物が統合されている
- 総合スコア90点以上
- 法務リスクスコアがCritical Failに該当しない
- 仮置き事項・確認事項が明示されている

## Common Failure Patterns

- セクション欠落
- スコア未満で納品
- 法務リスクの見逃し
- 仮置きを断定値として記載

## Self Check

- [ ] final-delivery-contractの全項目を満たすか
- [ ] 総合スコア90点以上か
- [ ] 法務リスク Critical Failなしか
- [ ] 仮置きと確定値が区別されているか

## Related Agents

- `lp-director`
- `lp-final-gatekeeper`
