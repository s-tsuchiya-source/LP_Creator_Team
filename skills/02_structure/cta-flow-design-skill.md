# CTA Flow Design Skill

## Purpose

CTA配置・文言・遷移パターンを設計し、CV直結率を最大化する。

## When to Use

- 構成フェーズ後半
- CVR改善時

## Required Inputs

- セクション構成
- オファー設計
- フォーム仕様

## Step-by-Step Procedure

1. CTA配置箇所を決定（FV / 中盤 / 最終 / 追従）
2. 各CTAの文言を3案作成（行動動詞 + ベネフィット）
3. 主CTA / 副CTA を区別
4. フォーム遷移パターンを決定（同ページ / 別ページ / モーダル）
5. 離脱防止CTA（Exit Intent / スクロール追従）を検討
6. SPの追従CTAを設計
7. `outputs/03_structure/cta-flow.md` に保存

## Output Format

```markdown
## CTA Flow

### Placements
- FV: 主CTA
- 強み末尾: 主CTA
- 価格末尾: 主CTA
- FAQ末尾: 主CTA + 副CTA
- 追従（SP）: 主CTA

### Copy Patterns
- 「無料で資料を受け取る」
- 「3分で診断する」
- 「無料デモを予約する」

### Form Transition
- 同ページ内スクロール / 別ページ / モーダル
```

## Quality Criteria

- CTA最低3箇所
- 文言が「動詞+ベネフィット」
- フォーム遷移1〜2ステップ
- SP追従CTAあり

## Common Failure Patterns

- 「お問い合わせ」だけ
- CTA1箇所のみ
- フォーム遷移3ステップ以上
- 追従CTAがフォームと衝突

## Self Check

- [ ] CTA3箇所以上
- [ ] 文言が具体的
- [ ] SP追従設計あり

## Related Agents

- `lp-cta-flow-designer`

## Components 参照

- `components/cta/`
