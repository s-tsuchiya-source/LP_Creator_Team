# Accessibility Implementation Skill

## Purpose

WCAG 2.1 AA 相当のa11y対応を実装する。

## When to Use

- LP実装時

## Required Inputs

- HTML構造
- デザイン仕様

## Step-by-Step Procedure

1. 見出し階層を整える（h1 → h2 → h3）
2. ランドマーク要素を活用（header / nav / main / aside / footer）
3. 全画像に alt
4. ARIA属性（aria-label / aria-expanded / aria-controls）
5. フォーカスリング常時可視（:focus-visible）
6. キーボード操作で全機能利用可能
7. コントラスト 4.5:1 以上
8. prefers-reduced-motion 対応
9. フォームラベルと input の関連付け（label for / aria-labelledby）
10. axe-core / Lighthouse で検証

## Output Format

実装ファイル + 監査レポート（`outputs/06_code/[案件名]/a11y-report.md`）

## Quality Criteria

- 見出し階層正常
- 全画像 alt
- フォーカスリング可視
- キーボード全操作可能
- コントラスト合格
- Lighthouse a11y 90点以上

## Common Failure Patterns

- alt 省略
- :focus { outline: none } で消す
- 装飾画像も alt 付与
- aria-label 過多
- 見出し階層スキップ

## Self Check

- [ ] alt 全画像
- [ ] フォーカスリング可視
- [ ] Lighthouse 90+

## Related Agents

- `lp-accessibility-engineer`
- `lp-frontend-engineer`
