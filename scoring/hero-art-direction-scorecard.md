# Hero Art Direction Scorecard

## Purpose

LPのヒーロー（FV）設計を総合採点する（100点満点）。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. パターン選定の妥当性 | 20 | 3パターン比較 + 5軸採点完了 |
| 2. visual 要素のCV貢献 | 15 | 全要素に役割記載、装飾だけなし |
| 3. 背景処理 | 15 | 抽象グラデ単独使用なし、商材文脈整合 |
| 4. メインコピー設計 | 10 | 文字数適正、リズムあり |
| 5. 信頼バッジ・KPI | 10 | 数値 + 出典付き |
| 6. PC / SP レイアウト | 10 | 両方で破綻なし、視認性確保 |
| 7. CTAボタン | 5 | 行動動詞 + ベネフィット |
| 8. 採用理由ログ | 10 | 全要素に採用理由 |
| 9. アニメーション | 5 | prefers-reduced-motion 対応 |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能（必須）
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善必須

## Critical Fail Conditions

- ダッシュボード型のデフォルト採用（理由なし）
- 1パターンのみ検討
- 抽象グラデ単独背景
- visual 要素に装飾だけのもの多数
- 採用理由なし

## Review Questions

- 3パターン以上比較したか
- 各 visual 要素に CV貢献理由があるか
- 背景に意味があるか
- ダッシュボード型の場合、強い根拠があるか

## Related

- skill: `skills/11_hero_art_direction/`
- agent: `lp-hero-art-director` / `lp-hero-pattern-reviewer`
- gate: `quality-gates/hero-art-direction-gate.md`
- contract: `contracts/hero-art-direction-output-contract.md`
