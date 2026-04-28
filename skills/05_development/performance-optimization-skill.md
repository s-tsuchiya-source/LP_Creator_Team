# Performance Optimization Skill

## Purpose

LCP < 2.5s / CLS < 0.1 / INP < 200ms を達成する。

## When to Use

- LP実装後
- 速度改善時

## Required Inputs

- 実装ファイル
- 画像素材
- フォント

## Step-by-Step Procedure

1. 画像最適化
   - WebP / AVIF 変換
   - レスポンシブイメージ（srcset / sizes）
   - 遅延読み込み（loading="lazy"）
   - FV 画像は preload + fetchpriority="high"
2. フォント最適化
   - font-display: swap
   - サブセット化
   - preload
3. クリティカルCSS インライン化
4. JS は defer / async
5. リソースヒント（preconnect / dns-prefetch）
6. キャッシュヘッダ
7. Lighthouse / PageSpeed Insights で測定
8. `outputs/06_code/[案件名]/perf-report.md` に記録

## Output Format

```markdown
## Performance Report

### Lighthouse Scores
- Performance: XX
- LCP: X.Xs
- CLS: X.XX
- INP: XXms

### 改善前 vs 改善後
| 項目 | 改善前 | 改善後 |
| LCP | | |
| CLS | | |
| Total Size | | |
```

## Quality Criteria

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms
- Total Size < 1MB
- Lighthouse Performance 90+

## Common Failure Patterns

- 巨大画像直配（5MB等）
- フォント過剰読込
- 同期JS でブロック
- preload 未使用

## Self Check

- [ ] LCP / CLS / INP 達成
- [ ] 画像最適化済み
- [ ] フォント最適化済み

## Related Agents

- `lp-performance-engineer`
- `lp-frontend-engineer`
