# scoring/ — 品質採点表

scoring は、LPの各成果物を100点満点で採点する scorecard 群です。

## 採点運用

- **90点以上**: 納品可能
- **80〜89点**: 軽微修正後に納品可能
- **70〜79点**: 主要改善が必要
- **69点以下**: 作り直し

## Critical Fail Conditions

各 scorecard には Critical Fail Conditions があり、点数に関係なく不合格になる条件が定義されています。

例：
- 法務リスクスコアが Critical Fail → 必ず差し戻し
- 個人情報の生送信 → 必ず差し戻し

## ファイル一覧

| Scorecard | 用途 |
|---|---|
| lp-master-scorecard.md | LP全体の総合採点 |
| first-view-scorecard.md | FVの採点 |
| offer-scorecard.md | オファーの採点 |
| copy-scorecard.md | コピーの採点 |
| design-scorecard.md | デザインの採点 |
| cta-form-scorecard.md | CTA / フォームの採点 |
| measurement-scorecard.md | 計測の採点 |
| legal-risk-scorecard.md | 法務リスクの採点 |
| final-output-scorecard.md | 最終納品物の採点 |

## 採点担当

- 各フェーズ完了時: 該当エージェントが自己採点
- 中間ゲート: ディレクターが採点
- 最終承認: `lp-final-gatekeeper` が総合採点

## 採点視点

LPの見た目ではなく、以下を中心に採点：

- CV最大化
- ターゲット適合
- 信頼性
- 実装可能性
- 計測可能性
- 法務安全性
