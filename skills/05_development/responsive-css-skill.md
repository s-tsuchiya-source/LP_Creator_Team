# Responsive CSS Skill

## Purpose

モバイルファーストかつ単位体系統一のレスポンシブCSSを実装する。

## When to Use

- LP CSS実装時

## Required Inputs

- デザイン仕様
- ブレークポイント定義

## Step-by-Step Procedure

1. リセットCSS（box-sizing: border-box 等）
2. CSS Custom Properties で色・余白・フォントを定義
3. モバイルファースト（`min-width` メディアクエリ）
4. 単位を統一（`clamp()` / `rem` / `%`）
5. Grid / Flexbox を使い分け
6. ブレークポイントは 640 / 1024 を基本
7. `prefers-reduced-motion` 対応

## Output Format

```css
:root {
  --color-main: #2563EB;
  --color-accent: #F59E0B;
  --color-bg: #ffffff;
  --color-text: #1f2937;
  --space-section: clamp(48px, 8vw, 120px);
  --font-h1: clamp(28px, 5vw, 56px);
}

* { box-sizing: border-box; }
body { margin: 0; font-size: 16px; line-height: 1.7; color: var(--color-text); }

.section { padding: var(--space-section) 1rem; }
.container { max-width: 1200px; margin: 0 auto; }

/* モバイルファースト */
.fv { ... }

@media (min-width: 640px) {
  .fv { ... }
}

@media (min-width: 1024px) {
  .fv { ... }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Quality Criteria

- 単位統一
- カスタムプロパティ活用
- prefers-reduced-motion 対応
- ブレークポイント境界で段差なし

## Common Failure Patterns

- 単位混在（vw + % + px）
- メディアクエリで !important 多用
- カスタムプロパティ未使用

## Self Check

- [ ] 単位統一
- [ ] prefers-reduced-motion 対応
- [ ] 境界段差確認

## Related Agents

- `lp-html-css-specialist`
- `lp-responsive-specialist`
