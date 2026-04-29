# Shape Language Scorecard

## Purpose

LPの形状言語（角丸・直角・円・多角形）の使い分けと、角丸カード依存の排除度を採点する（100点満点）。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. 角丸カード比率 | 25 | 50%以下（必須） |
| 2. 形状種別多様性 | 20 | 4種類以上の形状を使い分け |
| 3. セクション間の形状変化 | 15 | 連続2セクション同形状なし |
| 4. 形状採用理由記録 | 15 | shape-language-map.md 完備 |
| 5. 業種文脈整合 | 10 | 業種感性に合う形状選定 |
| 6. UI部品の階層整合 | 10 | 主CTA / サブCTA / バッジで形状区別 |
| 7. ブランドガイドライン整合 | 5 | 違反なし |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能（必須）
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善必須

## Critical Fail Conditions

点数に関係なく差し戻し：

- 角丸カード比率 50%超
- 全セクション同じ形状
- 形状の意味を考えず装飾選定
- 業種感性とのミスマッチ
- 採用理由なき形状

## 形状種別チェック

4種類以上を使い分け：

```
□ 角丸 large radius (12〜20px)
□ 角丸 small radius (4〜8px)
□ 直角 (border-radius: 0)
□ 円・楕円 (border-radius: 50%)
□ 多角形（hex / triangle）
□ 有機形状（blob）
```

## Review Questions

- 角丸カードが全体の半分以下か
- セクション間で形状が変化しているか
- 各形状に採用理由があるか
- 業種感性に合っているか
- 主CTA / サブCTA が形状で区別されているか

## Improvement Actions

### 85点未満
- `skills/10_visual_expression/shape-language-design-skill.md` で再設計
- shape-language-map.md を再作成

### 角丸カード比率 50%超
- 一部を直角・円形・多角形に置換
- 業種文脈に合う形状を選定

## Related

- skill: `skills/10_visual_expression/shape-language-design-skill.md`
- agent: `lp-shape-language-designer`
- contract: `contracts/shape-language-contract.md`
- gate: `quality-gates/visual-expression-gate.md`
