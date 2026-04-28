# Code Practicality Scorecard

## Purpose

HTML/CSS/JS の実用性を採点する（100点満点）。
見た目だけでなく、計測対応・a11y・レスポンシブ・パフォーマンスを評価。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. ファイル存在 | 5 | index.html / style.css / script.js |
| 2. セマンティックHTML | 10 | header / main / section / footer 等 |
| 3. レスポンシブ | 15 | SP / Tablet / PC で破綻なし |
| 4. CTA計測対応 | 10 | data-event / data-position |
| 5. フォーム実装 | 10 | label / バリデーション / 送信完了 |
| 6. alt 属性 | 5 | 全画像 alt |
| 7. JS 軽量化 | 5 | 不要な依存なし、defer 読込 |
| 8. パフォーマンス | 15 | LCP / CLS / INP 達成 |
| 9. アクセシビリティ | 10 | フォーカスリング / キーボード操作 |
| 10. 計測タグ | 10 | GA4 / GTM 実装 |
| 11. SP固定CTA | 3 | 必要時に追従CTA |
| 12. プライバシー対応 | 2 | 同意UI / プライバシーポリシーリンク |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善必須

## Critical Fail Conditions

**点数に関係なく差し戻し**：

- SPで表示崩れ
- CTAが機能しない（クリック不能 / リンク切れ）
- フォームが送信できない
- フォーム label なし
- 計測 data 属性が完全になし
- HTML構造破綻（h1 複数 / セマンティック誤用）
- キーボード操作不能
- 個人情報の生送信

## Review Questions

- 主要ブラウザ（Chrome / Safari / Edge）動作OK か
- LCP < 2.5s 達成か
- CLS < 0.1 か
- INP < 200ms か
- 計測タグが正常発火するか
- a11y Lighthouse 90+ か

## Improvement Actions

### 85点未満
- `skills/05_development/` で再実装
- `lp-frontend-engineer` 差し戻し

### 70点以下
- `lp-html-css-specialist` から見直し
- パフォーマンス最適化を `lp-performance-engineer` に依頼
- a11y を `lp-accessibility-engineer` に依頼

## Related

- `validation/code-practicality-validation.md`
- `skills/05_development/` 全 skill
- `contracts/code-output-contract.md`
- agent: `lp-frontend-engineer` / `lp-html-css-specialist` / `lp-javascript-engineer` / `lp-form-implementation-specialist` / `lp-performance-engineer` / `lp-accessibility-engineer`
