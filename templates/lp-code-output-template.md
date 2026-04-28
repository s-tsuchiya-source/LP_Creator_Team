# 実装出力: [案件名]

## ファイル構成

```
outputs/06_code/[案件名]/
├─ index.html
├─ style.css
├─ script.js
├─ images/
│  ├─ hero.webp
│  ├─ logo.svg
│  └─ ...
├─ README.md          ← この実装メモ
├─ qa-report.md
├─ perf-report.md
├─ a11y-report.md
└─ security.md
```

## 実装方針
- アーキテクチャ: 静的HTML / CSS / バニラJS
- ビルド: なし（直接配信）/ Vite / Astro
- 配信: 静的サーバー / CDN / Netlify / Vercel
- フォーム送信先: 

## 計測用 data 属性
- メインCTA: `data-event="cta_click" data-position="fv"`
- フォーム送信: `data-event="form_submit"`
- 電話クリック: `data-event="phone_click"`
- FAQ開閉: `data-event="faq_open" data-faq-id="X"`

## フォーム実装メモ
- 必須項目:
- バリデーション:
- 送信先API:
- スパム対策: reCAPTCHA / honeypot
- 自動返信:

## 注意点
- 画像: WebP / AVIF + fallback
- フォント: preload + font-display: swap
- JS: defer / async
- CSS: クリティカルCSSをインライン化

## ビルド・配信手順
（ビルドツール使用時）

```bash
npm install
npm run build
# dist/ を本番に配置
```

## 動作確認手順
1. ブラウザで index.html を開く
2. 主要ブラウザで表示確認
3. SP（実機 / DevTools）で表示確認
4. フォーム送信テスト（テスト送信先設定）
5. GTM プレビューで計測確認
6. Lighthouse で速度・a11y 確認

## 既知の制約
- 

## 公開時の差し替え
- フォーム送信先 URL
- GTM コンテナID
- Google Ads コンバージョンID
- ドメイン依存リンク
