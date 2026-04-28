# コーディングワークフロー

HTML / CSS / JS 実装を含む案件のフロー。

## 想定スタック

選択肢（プロジェクトに応じて選定）：

1. **静的HTML / CSS / バニラJS** — 最軽量・推奨デフォルト
2. **Astro** — 静的サイトジェネレーション・部分的JS
3. **Next.js** — SSR / フォーム連携が必要なら

## ファイル構成

```
outputs/06_code/[案件名]/
├─ index.html
├─ style.css
├─ script.js
├─ images/
│  ├─ hero.webp
│  └─ ...
├─ README.md          ← 実装メモ
├─ qa-report.md
├─ perf-report.md
├─ a11y-report.md
└─ security.md
```

## 実装フェーズ

### Phase 1: HTML 構造（lp-html-css-specialist）
- セマンティックHTML
- 見出し階層
- ランドマーク要素
- alt 属性

### Phase 2: CSS 設計（lp-html-css-specialist）
- リセットCSS
- カスタムプロパティ（color / spacing / font）
- レイアウト（Grid / Flexbox）
- レスポンシブ（モバイルファースト）

### Phase 3: JS 実装（lp-javascript-engineer）
- FAQ 開閉
- スムーズスクロール
- スクロール連動アニメーション
- 追従CTA

### Phase 4: フォーム（lp-form-implementation-specialist）
- バリデーション
- エラーメッセージ
- 送信処理
- スパム対策

### Phase 5: 画像最適化（lp-performance-engineer）
- WebP / AVIF 変換
- レスポンシブイメージ（srcset / sizes）
- 遅延読み込み（loading="lazy"）

### Phase 6: 計測タグ（lp-frontend-engineer）
- GA4 / GTM タグ埋め込み
- data-gtm 属性付与
- 広告タグ

### Phase 7: a11y / 監査
- a11y 監査（Lighthouse / axe）
- パフォーマンス監査
- セキュリティ監査

### Phase 8: QA
- ブラウザテスト
- フォーム送信テスト
- 計測テスト

## 実装メモ（README.md）

各案件の `outputs/06_code/[案件名]/README.md` には以下を記載：

- 想定動作環境
- ビルド / 配信手順
- 計測タグの確認方法
- フォーム送信先の差し替え方法
- 注意点
