# FAQ Objection Copy Skill

## Purpose

CV直前の不安・反論を解消するFAQコピーを作成する。

## When to Use

- FAQセクション執筆時

## Required Inputs

- インサイト整理書（反論リスト）
- 営業ヒアリング情報
- 商材情報

## Step-by-Step Procedure

1. 反論リストから主要5〜10件選定
2. カテゴリバランスを取る（価格 / 効果 / 期間 / セキュリティ / 解約 / サポート）
3. 各FAQの回答を3ステップで構成：
   - 共感
   - 論拠
   - 証拠
4. 「ご安心ください」だけのテンプレ回答を避ける
5. 不利な情報も誠実に記載
6. 法的に問題のある保証はしない
7. `outputs/04_copy/faq.md` に保存

## Output Format

```markdown
## FAQ

### Q1（カテゴリ: 価格）
[Question]

[Answer]
- 共感:
- 論拠:
- 証拠:

### Q2（カテゴリ: 効果）
...
```

## Quality Criteria

- 主要不安カテゴリ網羅
- 回答が具体的
- 法的に問題のある保証なし
- 不利情報も正直に記載

## Common Failure Patterns

- テンプレ回答ばかり
- 主要反論欠落
- 「絶対」「100%」の保証
- 不利情報の隠蔽

## Self Check

- [ ] 主要カテゴリ網羅
- [ ] 法的問題なし
- [ ] 誠実な内容

## Related Agents

- `lp-faq-copywriter`
- `lp-customer-insight-researcher`

## Components 参照

- `components/faq/`
