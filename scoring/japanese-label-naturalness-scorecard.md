# Japanese Label Naturalness Scorecard

## Purpose

LP内の日本語ラベルの自然さと、装飾英語の排除度を採点する（100点満点）。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. 装飾英語ゼロ | 30 | FEATURE / ABOUT / FLOW 等の不採用 |
| 2. 日本語ラベル自然さ | 20 | ペルソナ語彙に合う |
| 3. 文字数適正 | 10 | セクション見出し 8〜15、ナビ 4〜8 等 |
| 4. ラベル採用理由記録 | 15 | typography-rationale.md 完備 |
| 5. 残した英語の妥当性 | 10 | ブランド名・業界用語のみ |
| 6. CTA文言具体性 | 10 | 「動詞 + ベネフィット」 |
| 7. 階層整合 | 5 | h1〜h6 + 補助テキストのバランス |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能（必須）
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善必須

## Critical Fail Conditions

点数に関係なく差し戻し：

- 装飾英語の残存（FEATURE / ABOUT / FLOW / BEAUTY / SMART 等）
- 「みなさま」「すべての方」だけのラベル
- CTA「お問い合わせ」だけ
- ペルソナ語彙との不整合

## NG ラベルリスト（検出対象）

```
- FEATURE
- ABOUT
- FLOW
- POINT 01（装飾）
- BEAUTY
- SMART
- SOLUTION
- INNOVATION
- RECOMMEND（おすすめ で良い）
- LIMITED（限定 で良い）
- CONTACT（お問い合わせ で良い）
- SERVICE（サービス で良い）
- HOME（ホーム で良い）
```

## Review Questions

- 各ラベルに採用理由があるか
- 装飾英語が残っていないか
- ペルソナの語彙に合うか
- 文字数は適正か
- CTA が具体的か

## Improvement Actions

### 85点未満
- `skills/10_visual_expression/japanese-microcopy-label-skill.md` で再設計
- typography-rationale.md を再作成

## Related

- skill: `skills/10_visual_expression/japanese-microcopy-label-skill.md`
- agent: `lp-typography-director`
- contract: `contracts/typography-rationale-contract.md`
- human-quality: `human-quality/anti-ai-writing-principles.md`
