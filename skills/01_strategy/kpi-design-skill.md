# KPI Design Skill

## Purpose

LP全体のKPIツリーを設計し、計測可能な目標値を仮置きする。

## When to Use

- 戦略フェーズ後半
- CV戦略確定後

## Required Inputs

- 確定CV戦略
- 流入想定（広告 / SEO / メール）
- 想定セッション数

## Step-by-Step Procedure

1. ファネル各段階の指標を整理
2. 各段階のベンチマーク（業界平均）を仮置き
3. 主要KPIを決定（CTR / CVR / CPA / ROAS / LTV-CAC）
4. KPIツリーを描く
5. 改善余地のあるボトルネックを特定
6. 計測実装可能性を確認
7. `outputs/02_strategy/kpi.md` に保存

## Output Format

```
[流入] X imp
  ↓ CTR Y%
[セッション] X*Y
  ↓ FV閲覧 Z%
[FV閲覧]
  ↓ 中盤到達 W%
[中盤到達]
  ↓ CTAクリック V%
[CTAクリック]
  ↓ Form到達 U%
[Form到達]
  ↓ Form送信 T%
[CV] (推定数)
```

## Quality Criteria

- 全段階が連結
- 各段階に目標値（仮置き可）
- 計測実装可能
- ベンチマーク参照あり

## Common Failure Patterns

- 中間段階を飛ばす
- 計測不能な指標
- ベンチマークなしの目標
- KPIが多すぎる（5個以下推奨）

## Self Check

- [ ] 各段階に目標値があるか
- [ ] 計測可能か
- [ ] ベンチマーク参照しているか

## Related Agents

- `lp-marketing-strategist`
- `lp-ga4-gtm-specialist`
