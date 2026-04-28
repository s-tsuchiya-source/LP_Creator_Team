# Single File HTML LP Skill

## Purpose

LPを1ページの静的HTMLとして実装する標準手順。最軽量・最少依存。

## When to Use

- 静的LP実装時
- 軽量配信が必要なとき

## Required Inputs

- デザイン仕様
- コピー全文
- 計測設計

## Step-by-Step Procedure

1. ファイル構成決定：
   ```
   index.html
   style.css
   script.js
   images/
   ```
2. HTMLをセマンティックに記述（header / main / section / footer）
3. CSSはクリティカルCSSをインライン化、その他を style.css
4. JSは defer 読込
5. 画像は WebP / AVIF + fallback
6. 計測タグ（GTM / GA4）を head に配置
7. 計測 data 属性を CTA / フォームに付与
8. OGP / favicon / metadata を設定
9. `outputs/06_code/[案件名]/` に保存
10. 実装メモ `README.md` を併記

## Output Format

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[案件タイトル]</title>
  <meta name="description" content="...">
  <!-- OGP -->
  <meta property="og:title" content="...">
  <!-- GTM -->
  <script>(function(w,d,s,l,i){...})(...)</script>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- noscript GTM -->
  <header>...</header>
  <main>
    <section id="fv">...</section>
    <section id="problem">...</section>
    ...
  </main>
  <footer>...</footer>
  <script src="script.js" defer></script>
</body>
</html>
```

## Quality Criteria

- セマンティックHTML
- LCP < 2.5s 達成可能
- 計測 data 属性完備
- alt 全画像
- a11y 基本対応

## Common Failure Patterns

- 巨大画像直配
- 不要なフレームワーク
- インラインJS過多
- 計測未実装

## Self Check

- [ ] セマンティックHTML
- [ ] 計測 data 属性
- [ ] alt 全画像
- [ ] LCP / CLS 確認

## Related Agents

- `lp-frontend-engineer`
- `lp-html-css-specialist`
