# Expected: HTML/CSS/JS 実用レベル

## 期待される実装

### ファイル構成

```
outputs/06_code/[案件名]/
├─ index.html
├─ style.css
├─ script.js
├─ images/
│  ├─ hero.webp
│  ├─ logo.svg
│  └─ ...
├─ README.md（実装メモ）
├─ qa-report.md
├─ perf-report.md
├─ a11y-report.md
└─ security.md
```

### HTML 期待要素

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>...</title>
  <meta name="description" content="...">
  <!-- OGP -->
  <!-- GTM -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>...</h1>
  </header>
  <main>
    <section id="fv">...</section>
    <section id="problem">...</section>
    <section id="solution">...</section>
    ...
    <form>
      <label for="name">名前 [必須]</label>
      <input type="text" id="name" name="name" required>
      ...
      <button type="submit"
              data-event="form_submit"
              data-position="main">
        無料で資料を受け取る
      </button>
    </form>
  </main>
  <footer>...</footer>
  <script src="script.js" defer></script>
</body>
</html>
```

### CTA 計測属性

```html
<a href="#form"
   class="cta cta-main"
   data-event="cta_click"
   data-position="fv">
  3分で資料を受け取る
</a>
```

### フォーム

```html
<form id="main_form">
  <div class="form-group">
    <label for="company">会社名 [必須]</label>
    <input type="text" id="company" name="company" required
           autocomplete="organization">
  </div>
  <div class="form-group">
    <label for="email">メールアドレス [必須]</label>
    <input type="email" id="email" name="email" required
           inputmode="email" autocomplete="email">
  </div>
  ...
</form>
```

### CSS 期待要素

- リセットCSS
- CSS Custom Properties（:root）
- モバイルファースト（min-width メディアクエリ）
- prefers-reduced-motion 対応

### パフォーマンス期待

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms
- 画像 WebP / AVIF
- フォント preload

### Lighthouse スコア

```
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
```

## NG パターン

❌ alt 欠落
❌ フォーム label 欠落
❌ 計測 data 属性なし
❌ h1 複数
❌ SP表示崩れ
❌ LCP > 2.5s

## 採点基準

`scoring/code-practicality-scorecard.md` で 85+ 必須。

Critical Fail（点数に関係なく差し戻し）：
- SP崩れ / フォーム送信不可 / CTA機能不能 / 計測欠落 / HTML破綻 / キーボード操作不能

## Related

- `tests/validation-scenarios/05-html-css-js-practicality-test.md`
- `validation/code-practicality-validation.md`
- `scoring/code-practicality-scorecard.md`
