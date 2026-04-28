# components/ — LP部品の勝ちパターン

components は、LPの各部品（FV / CTA / 証拠 / FAQ 等）の高CVRパターンと悪パターンを集約したライブラリです。

## ディレクトリ構成

```
components/
├─ first-view/   # FV パターン
├─ cta/          # CTA パターン
├─ proof/        # 証拠・実績パターン
├─ form/         # フォームパターン
├─ faq/          # FAQパターン
└─ section/      # 各セクションパターン
```

## 使い方

各エージェントは、該当部品の作成時に該当componentファイルを参照してください。

`knowledge/section-patterns/` は概念的な説明、`components/` は実装に近い具体パターンを扱います。

## ファイル構成

各 component ファイルは以下の構成：

- Role in LP（部品の役割）
- Best Use Cases（使うべき場面）
- Required Elements（必須要素）
- High Conversion Pattern（勝ちパターン）
- Bad Pattern（悪い型）
- Copy Examples（コピー例）
- Design Notes（デザイン上の注意）
- Measurement Notes（計測上の注意）
- Checklist（チェックリスト）

## 重点強化ファイル

- `first-view/` — LP最重要部品
- `cta/` — CV直結
- `form/` — CV最終地点
- `proof/` — 信頼性
