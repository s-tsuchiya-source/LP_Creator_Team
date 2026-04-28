# Competitor Positioning Skill

## Purpose

競合・代替手段との位置取りを決め、自社が選ばれる理由を言語化する。

## When to Use

- 戦略フェーズ
- 訴求軸の差別化が弱いとき

## Required Inputs

- 競合URL（あれば）
- 代替手段情報（人力 / Excel / 既存ツール）
- 自社の強み・弱み

## Step-by-Step Procedure

1. 直接競合3〜5社のLPを精読
2. 各社のFV / 訴求 / オファー / 価格 / 信頼要素を要素分解
3. 比較マトリクスを作成
4. 自社の優位性 / 劣位性を洗い出し
5. 差別化ポイントを3点抽出（嘘がない範囲）
6. ポジショニングマップを作成（2軸）
7. `outputs/02_strategy/competitor.md` に保存

## Output Format

```markdown
## Competitor Analysis

### Comparison Matrix
| 項目 | 自社 | A社 | B社 | C社 |
|---|---|---|---|---|

### 自社の優位点
1.
2.
3.

### 自社の劣位点
1.
2.

### Positioning Map
（2軸の概念図）
```

## Quality Criteria

- 競合3社以上を分析
- 比較項目が客観的（機能 / 価格 / サポート / 期間）
- 差別化が嘘でない
- 劣位点も正直に記載

## Common Failure Patterns

- 競合への一方的批判
- 検証なき優位性主張
- 比較項目が主観的
- 自社が ○ になる項目だけ並べる

## Self Check

- [ ] 競合3社以上を比較
- [ ] 比較項目が客観的
- [ ] 劣位点も含めたか

## Related Agents

- `lp-competitor-researcher`
- `lp-marketing-strategist`
