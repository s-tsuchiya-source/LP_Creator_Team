# Code Practicality Validation

## Purpose

LP実装ファイル（HTML / CSS / JS）が「見た目だけ」ではなく「実用レベル」であるかを検証する。

## What to Validate

- `index.html` / `style.css` / `script.js` が存在するか
- HTMLがセマンティックか（header / main / section / footer 等）
- レスポンシブ対応しているか
- CTAに `data-*` 属性があるか（計測対応）
- フォームに `<label>` があるか
- 全画像に `alt` 属性があるか
- 不要に重い JS がないか
- 外部ライブラリ依存が過剰でないか
- スマホ固定CTA（追従CTA）が必要に応じてあるか
- GA4/GTM で計測しやすい構造か

## Passing Criteria

- `code-practicality-scorecard.md`: **85点以上**
- Critical Fail なし
- 主要ブラウザ（Chrome / Safari / Edge）動作OK
- LCP < 2.5s / CLS < 0.1 / INP < 200ms

## Failure Criteria

- code-practicality-scorecard 85未満
- 計測 data 属性欠落
- alt 一部欠落
- フォーム label 一部欠落

## Critical Fail Conditions

**点数に関係なく差し戻し**：

- SP（モバイル）で表示崩れ
- フォームが送信できない
- CTAが機能しない（リンク切れ / クリック不能）
- 計測 data 属性が完全になし
- HTML構造が破綻している（h1 複数 / セマンティック要素誤用）
- キーボード操作不能（Tab で進めない）

## Required Evidence

- `outputs/06_code/[案件名]/index.html` 等の実ファイル
- Lighthouse 採点結果（Performance / Accessibility / SEO / Best Practices）
- 主要ブラウザ動作確認結果
- レスポンシブ確認（320px / 768px / 1200px）

## Output Log

### code-practicality-review.md テンプレート

```markdown
# Code Practicality Review

## ファイル存在確認
- [ ] index.html
- [ ] style.css
- [ ] script.js
- [ ] images/

## HTML構造
- [ ] DOCTYPE html
- [ ] lang="ja"
- [ ] meta viewport
- [ ] セマンティック要素（header / main / section / footer）
- [ ] h1 単一
- [ ] 見出し階層正常

## アクセシビリティ
- [ ] 全画像 alt
- [ ] フォーム label
- [ ] フォーカスリング :focus-visible
- [ ] aria-label 適切
- [ ] キーボード操作OK

## レスポンシブ
- [ ] SP（〜639px）動作
- [ ] Tablet（640〜1023）動作
- [ ] PC（1024〜）動作
- [ ] 320pxで横スクロール発生なし

## 計測
- [ ] CTA に data-event / data-position
- [ ] フォーム送信に dataLayer push
- [ ] 電話クリック計測

## パフォーマンス
- [ ] LCP < 2.5s（実測）
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] 画像 WebP / AVIF
- [ ] フォント preload + font-display: swap

## Lighthouse スコア
- Performance: ___
- Accessibility: ___
- Best Practices: ___
- SEO: ___

## 判定
- code-practicality-scorecard: ___/100
- Critical Fail: あり / なし
- 合格 / 修正必須 / 差し戻し
```

## Related Files

- `scoring/code-practicality-scorecard.md`
- `contracts/code-output-contract.md`
- `skills/05_development/`
- agent: `lp-frontend-engineer` / `lp-qa-lead` / `lp-accessibility-engineer`
