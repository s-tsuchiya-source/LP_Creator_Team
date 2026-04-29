# Photo Annotation Hero Scorecard

## Purpose

photo-annotation-hero パターン採用時の品質を採点する（100点満点）。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. 写真選定（業務文脈整合） | 25 | ペルソナの業務シーン、ストックフォト感なし |
| 2. オーバーレイ視認性 | 15 | コントラスト 4.5:1 以上、PC/SP 両方 |
| 3. 注釈の意味 | 15 | 装飾的でなく、写真の特定箇所を指す |
| 4. KPI バッジ | 15 | 数値 + 出典付き |
| 5. 短コピー設計 | 10 | 25文字以内 + 強く伝わる |
| 6. CTA配置 | 5 | 写真上で目立つ位置 |
| 7. PC / SP 表示 | 10 | 両方で破綻なし |
| 8. 採用理由ログ | 5 | 写真選定 + 不採用候補記録 |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善

## Critical Fail Conditions

- ストックフォト採用（業務シーン明確でない）
- オーバーレイ薄く文字読めない
- 注釈に意味なし（装飾線だけ）
- KPI 出典なし
- 写真とコピー無関係

## Review Questions

- 写真がペルソナの業務文脈と整合するか
- オーバーレイで視認性確保されているか
- 注釈は写真の特定要素を指すか
- KPI は信頼形成に貢献するか
- 短コピーは強く伝わるか

## Related

- skill: `skills/11_hero_art_direction/photo-annotation-hero-skill.md`
- agent: `lp-photo-composition-director`
- pattern: `hero-pattern-library/photo-annotation-hero.md`
- contract: `contracts/photo-annotation-hero-contract.md`
