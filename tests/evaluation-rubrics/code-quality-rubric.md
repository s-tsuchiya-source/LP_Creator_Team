# Rubric: Code Quality

## 評価基準

| 軸 | 5点 | 3点 | 1点 |
|---|---|---|---|
| HTML 構造 | セマンティック + 階層正常 | 一部不適切 | 破綻 |
| アクセシビリティ | Lighthouse 95+ / 全 alt / focus | 90+ / 一部alt欠落 | 80以下 |
| レスポンシブ | 全帯域動作 + 単位統一 | 一部崩れ | SP 崩れ |
| 計測 | 全 CTA / フォーム計測 | 一部欠落 | 計測なし |
| パフォーマンス | LCP/CLS/INP 達成 + 90+ | 達成 / 80+ | 未達 |
| フォーム | label / バリ / 送信完了 | 一部不足 | 送信不可 |

## 採点

5点 × 6軸 = 30点満点

- 27+: 優（合格）
- 22〜26: 良（軽微修正）
- 21以下: 差し戻し

## 関連 scorecard 必須スコア

```
code-practicality-scorecard: 85+
final-output-scorecard: 90+
```

## Critical Fail（点数に関係なく差し戻し）

❌ SP表示崩れ
❌ フォーム送信不可
❌ CTA機能不能
❌ 計測 data 属性完全欠落
❌ HTML構造破綻
❌ キーボード操作不能

## チェック項目

### HTML
- [ ] DOCTYPE html
- [ ] lang="ja"
- [ ] meta viewport
- [ ] セマンティック要素
- [ ] h1 単一
- [ ] 見出し階層

### a11y
- [ ] 全画像 alt
- [ ] フォーム label
- [ ] :focus-visible
- [ ] キーボード操作
- [ ] aria-label

### レスポンシブ
- [ ] SP動作
- [ ] Tablet 動作
- [ ] PC動作
- [ ] 320px 横スクロールなし

### 計測
- [ ] CTA data-event / data-position
- [ ] フォーム dataLayer push
- [ ] 電話クリック計測

### パフォーマンス
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] WebP / AVIF
- [ ] フォント preload

### フォーム
- [ ] label
- [ ] inputmode / autocomplete
- [ ] リアルタイムバリデーション
- [ ] エラー原因明示
- [ ] 送信完了サンクスページ

## Related

- `validation/code-practicality-validation.md`
- `scoring/code-practicality-scorecard.md`
- `tests/validation-scenarios/05-html-css-js-practicality-test.md`
