# Conversion Review Skill

## Purpose

完成LPがCV最大化観点で機能しているかを監査する。

## When to Use

- 最終承認直前
- CVR改善時

## Required Inputs

- 完成LP
- 戦略書
- ペルソナ

## Step-by-Step Procedure

1. 訴求軸 → CTA → フォーム の一貫性確認
2. 不必要な離脱要因を抽出
3. フォーム入力負荷を評価
4. CTA可視性を確認
5. ベネフィット具体性を評価
6. 信頼要素の充足を確認
7. 判定: PASS / NEEDS WORK / BLOCK
8. `outputs/08_review/conversion.md` に保存

## Output Format

```markdown
## Conversion Review

### 一貫性チェック
- 訴求軸 → FV → 中盤 → CTA → フォーム

### 離脱要因
1.
2.

### CTA / フォーム評価
- CTA配置:
- フォーム項目数:

### 判定
- PASS / NEEDS WORK / BLOCK

### 改善提案
- 1.
- 2.
```

## Quality Criteria

- 一貫性確認済み
- 離脱要因抽出
- 改善提案具体的

## Common Failure Patterns

- デザイン優先でCV阻害放置
- フォーム必須項目過多放置
- 訴求とCTAの不一致

## Self Check

- [ ] 一貫性確認
- [ ] 離脱要因抽出
- [ ] 判定根拠明示

## Related Agents

- `lp-conversion-reviewer`
- `lp-lpo-strategist`
