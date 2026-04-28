# Measurement Scorecard

## Purpose

計測設計の採点（100点満点）。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. ファネル網羅性 | 25 | FV / CTAクリック / Form到達 / 開始 / エラー / 送信 |
| 2. イベント命名統一 | 10 | snake_case 統一 |
| 3. データレイヤー仕様 | 10 | 実装可能粒度 |
| 4. Key Event 指定 | 10 | 主CV / 補助CV |
| 5. 媒体CV送信 | 15 | 出稿媒体ごとに正しく |
| 6. プライバシー準拠 | 15 | 個人情報を計測パラメータに含めない |
| 7. プレビュー検証 | 10 | GTM プレビューで確認 |
| 8. ドキュメント | 5 | 仕様書あり |

合計: **100点**

## Passing Score

- **85以上**: PASS
- **75〜84**: 軽微修正
- **74以下**: 作り直し

## Critical Fail Conditions

- 個人情報の生送信
- ファネル中間段階の計測欠落
- プレビュー検証なしで本番公開

## Review Questions

- どこで離脱しているか分かる計測か
- 媒体CVが正しく送られるか
- 個人情報をGAに送っていないか

## Improvement Actions

- イベント追加（`skills/06_measurement/ga4-event-design-skill.md`）
- GTM 構成見直し（`skills/06_measurement/gtm-implementation-skill.md`）
- フォーム計測強化（`skills/06_measurement/form-tracking-skill.md`）
