# Microcopy Skill

## Purpose

CTA文言・フォーム入力補助・エラーメッセージ・サンクスページなど、細部のマイクロコピーを最適化する。

## When to Use

- フォーム実装時
- CTA文言確定時
- エラー / 成功メッセージ作成時

## Required Inputs

- フォーム項目仕様
- CTA設計
- ターゲット情報

## Step-by-Step Procedure

1. CTA文言を「行動動詞 + ベネフィット」で作成
2. フォーム入力補助文を作成（プレースホルダー / 補足説明）
3. エラーメッセージを具体化（「入力エラー」だけにしない）
4. 送信ボタン文言（CTAと一貫）
5. サンクスページの次アクション提示
6. ローディング中のマイクロコピー
7. `outputs/04_copy/microcopy.md` に保存

## Output Format

```markdown
## Microcopy

### CTA Buttons
- 主CTA: 「無料で資料を受け取る」
- 副CTA: 「詳細を見る」

### Form Helpers
- メールアドレス: 「半角英数で入力してください」
- 電話番号: 「ハイフンなしで入力してください」

### Error Messages
- 必須未入力: 「[項目名] を入力してください」
- 形式エラー: 「正しい[項目]の形式で入力してください」

### Submit Loading
- 「送信中です... しばらくお待ちください」

### Thank You
- 「お申し込みありがとうございます。担当者より3営業日以内にご連絡いたします」
```

## Quality Criteria

- CTAが具体的
- エラーメッセージが原因明示
- 送信成功後の次アクション明示
- ローディング中のフィードバック

## Common Failure Patterns

- CTA「お問い合わせ」だけ
- エラー「入力エラー」だけ
- 送信後の沈黙
- 法務違反「絶対送信成功」

## Self Check

- [ ] CTA具体的
- [ ] エラー原因明示
- [ ] 次アクション明示

## Related Agents

- `lp-form-implementation-specialist`
- `lp-chief-copywriter`
