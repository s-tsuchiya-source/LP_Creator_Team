# Visual Expression Scorecard

## Purpose

LPの Visual Expression Layer（モーション / タイポ / 形状 / 全体ビジュアル）を総合採点する（100点満点）。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. モーション意味設計 | 20 | 各モーションに目的、translateY reveal 40%以下 |
| 2. 日本語ラベル自然さ | 15 | 装飾英語ゼロ、ペルソナ語彙整合 |
| 3. 形状言語多様性 | 15 | 角丸カード比率 50%以下、形状使い分け |
| 4. Visual Rhythm 多様性 | 10 | 余白・背景・レイアウトの3軸変化 |
| 5. 参考サイト原理抽出 | 10 | 丸写しなし、原理抽出済み |
| 6. CV貢献記録 | 10 | 各visual要素にCV貢献理由 |
| 7. AIっぽさ排除 | 10 | 「どのSaaSにも見える」感なし |
| 8. 商材文脈整合 | 5 | 業種感性に合う |
| 9. prefers-reduced-motion | 5 | 完全対応 |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能（必須）
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善必須

## Critical Fail Conditions

点数に関係なく差し戻し：

- 全セクション同じ translateY reveal
- 角丸カード比率 50%超
- 装飾英語残存（FEATURE / ABOUT / FLOW 等）
- CV直前の過剰モーション
- 参考サイトの丸写し（CSS 直接コピー）
- prefers-reduced-motion 未対応

## Review Questions

- 各モーションに「何を理解させる動きか」が記載されているか
- 角丸カード以外の形状が使われているか
- 装飾英語が残っていないか
- セクション間で visual rhythm が変化しているか
- 参考サイトをそのまま真似ていないか
- CV貢献理由が全要素に記録されているか

## Improvement Actions

### 90点未満
- `skills/10_visual_expression/` 全 skill を再適用
- 4 サブ scorecard で詳細採点

### 75点未満
- 戦略フェーズから visual 方針見直し
- `lp-creative-director` で再設計

## Related

- 4 サブ scorecard:
  - `scoring/motion-variety-scorecard.md`
  - `scoring/japanese-label-naturalness-scorecard.md`
  - `scoring/shape-language-scorecard.md`
  - `scoring/design-differentiation-scorecard.md`
- agent: `lp-human-art-reviewer`
- gate: `quality-gates/visual-expression-gate.md`
- contract: `contracts/visual-expression-output-contract.md`
