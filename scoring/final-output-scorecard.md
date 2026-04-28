# Final Output Scorecard

## Purpose

最終納品物の採点（100点満点）。`final-delivery-contract.md` の必須セクション充足度を中心に評価。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. 必須セクション網羅 | 20 | final-delivery-contractの15項目すべて |
| 2. 仮置き / 確定値の明示 | 5 | 区別がついている |
| 3. 戦略品質 | 10 | lp-master-scorecard で 80+ |
| 4. コピー品質 | 10 | copy-scorecard で 80+ |
| 5. デザイン品質 | 10 | design-scorecard で 80+ |
| 6. 実装品質 | 15 | LCP/CLS/INP 達成、a11y 90+ |
| 7. 計測完備 | 10 | measurement-scorecard で 85+ |
| 8. 法務適合 | 10 | legal-risk-scorecard で 95+、Critical Failなし |
| 9. 改善提案 | 5 | A/Bテスト案・中長期ロードマップあり |
| 10. 公開後監視 | 5 | 監視項目・ロールバック計画あり |

合計: **100点**

## Passing Score

- **90以上**: 納品可能
- **80〜89**: 軽微修正後納品
- **79以下**: 主要改善が必要

## Critical Fail Conditions

- final-delivery-contract の必須セクション欠落
- 法務 Critical Fail
- 計測完全欠落
- 主要ブラウザで崩れ
- 公開後監視項目なし

## Review Questions

- ユーザーの本来意図と一致しているか
- 全15セクション含まれているか
- 各scorecard でPASSしているか
- 公開後にCVが計測できるか
- ロールバック可能か

## Improvement Actions

- 不足セクション補完
- 各scorecard の差し戻し
- 計測実装
- 公開後監視項目の整理
