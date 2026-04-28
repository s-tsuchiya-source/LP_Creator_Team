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

---

## 使用 agent / skills / contracts / scorecards / components / playbook

- **agent**: lp-frontend-engineer, lp-html-css-specialist, lp-javascript-engineer, lp-form-implementation-specialist, lp-performance-engineer, lp-accessibility-engineer, lp-qa-lead, lp-browser-test-specialist
- **skills**: 05_development (全)
- **contracts**: code-output
- **scorecards**: final-output (実装品質)
- **components**: cta / form / first-view
- **playbook**: 案件業種に応じて選定

## 完了条件

- LCP < 2.5s / CLS < 0.1 / INP < 200ms
- a11y 90+
- 計測 data 属性完備
- 主要ブラウザ動作

---

## Validation / Human Quality 完了条件（追加）

このフロー完了時に、以下を全達成必須：

### Validation 全 8 種合格

- [ ] director-behavior-validation
- [ ] agent-selection-validation
- [ ] emotional-cvr-validation
- [ ] scorecard-enforcement-validation
- [ ] code-practicality-validation
- [ ] lp-structure-completeness-validation
- [ ] anti-ai-output-validation
- [ ] final-acceptance-validation

### Human Quality / 構成 / コード 必須スコア

```
- human-naturalness-scorecard: 85+
- anti-ai-smell-scorecard: 90+
- lp-structure-completeness-scorecard: 85+
- code-practicality-scorecard: 85+
```

### 必須ログ作成（outputs/08_review/）

- agent-selection-log.md
- validation-report.md
- scorecard-summary.md
- human-quality-review.md
- code-practicality-review.md
- lp-structure-validation.md
- final-acceptance-report.md

参照：
- `validation/`
- `lp-structure-blueprint/`
- `human-quality/`
- `skills/09_humanization/`
