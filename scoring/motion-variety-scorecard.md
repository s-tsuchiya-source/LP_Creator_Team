# Motion Variety Scorecard

## Purpose

LPのモーション・アニメーションの「意味設計」と「多様性」を採点する（100点満点）。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. モーション目的明示 | 25 | 各モーションに「何を理解させる動きか」記載 |
| 2. 種別多様性 | 20 | 5種類以上のモーション種別を使い分け |
| 3. translateY reveal 比率 | 15 | 40%以下 |
| 4. CV直前の過剰モーション排除 | 15 | 最終CTA直前の動きが最小化 |
| 5. prefers-reduced-motion 対応 | 10 | 完全対応 |
| 6. パフォーマンス | 10 | 60fps維持、INP < 200ms |
| 7. 採用理由ログ | 5 | motion-storyboard.md 完備 |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能（必須）
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善必須

## Critical Fail Conditions

点数に関係なく差し戻し：

- 全セクション同じ translateY reveal
- translateY reveal 40%超
- CV直前で目が泳ぐモーション
- prefers-reduced-motion 未対応
- 採用理由なきモーション
- 60fps 割れ

## モーション種別チェック

5種類以上を使い分け：

```
□ translateY reveal（情報展開）
□ 横スライド（プロセス・時系列）
□ スケール変化（強調）
□ パスアニメーション（関係性）
□ クロスフェード（状態変化）
□ カウントアップ（数値）
□ ホバー応答（フィードバック）
□ パララックス（奥行き）
```

## Review Questions

- 各モーションに目的が記載されているか
- 同じ種別ばかりになっていないか
- translateY reveal が連発していないか
- CV直前で目が泳がないか
- 装飾だけのモーションがないか

## Improvement Actions

### 85点未満
- `skills/10_visual_expression/motion-meaning-design-skill.md` で再設計
- motion-storyboard.md を再作成

## Related

- skill: `skills/10_visual_expression/motion-meaning-design-skill.md`
- agent: `lp-motion-director`
- contract: `contracts/motion-storyboard-contract.md`
