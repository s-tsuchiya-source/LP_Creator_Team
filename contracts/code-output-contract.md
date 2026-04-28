# Code Output Contract

## Purpose

LP実装コードの出力形式を固定化する。

## Required Sections

- ファイル構成
- index.html
- style.css
- script.js
- 実装メモ（README.md）
- 計測 data 属性
- alt / aria 属性
- 実機検証手順

## Required Fields

- セマンティックHTML（header / main / section / footer 等）
- レスポンシブCSS
- バニラJS（または最小限のライブラリ）
- 全画像 alt
- フォーカスリング :focus-visible
- 計測 data-event / data-position
- フォーム送信先（環境変数 or プレースホルダー）
- OGP / favicon / metadata

## Optional Fields

- ビルドツール設定
- CMS連携コード

## Format Rules

- HTML5 doctype
- 文字コード UTF-8
- インデントは2スペース
- CSS Custom Properties 活用
- コメントは最小限

## Acceptance Criteria

- セマンティックHTML
- レスポンシブ対応
- LCP < 2.5s
- CLS < 0.1
- 計測 data 属性完備
- a11y 基本対応
- 主要ブラウザ動作

## Rejection Criteria

- 巨大画像直配
- alt 省略
- インラインJS過多
- 計測未実装
- 主要ブラウザで崩れ

## Related

- skill: `skills/05_development/`
- scorecard: `scoring/final-output-scorecard.md`
- gate: `quality-gates/06-code-gate.md`
- template: `templates/lp-code-output-template.md`
- agent: `lp-frontend-engineer`
