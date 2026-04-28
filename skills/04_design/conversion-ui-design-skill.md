# Conversion UI Design Skill

## Purpose

CV直結率を最大化するUI設計（CTA / 視線誘導 / 余白 / 配色）を行う。

## When to Use

- デザインフェーズ
- CVR改善時

## Required Inputs

- ワイヤー
- アートディレクション
- CTA設計

## Step-by-Step Procedure

1. 視線誘導を決定（Z型 / F型 / 中央集中）
2. CTAコントラスト比4.5:1以上を確保
3. CTAサイズを決定（PC: 高さ56px / SP: 56px / タップ44x44px）
4. CTAホバーエフェクト設計
5. 余白を機能させる（CTA周辺は上下32〜48px）
6. 装飾過多を排除
7. `outputs/05_design/conversion-ui.md` に保存

## Output Format

```markdown
## Conversion UI

### 視線誘導
- PC: Z型
- SP: F型 / 中央

### CTA
- 色: #色（コントラスト 4.5:1 以上）
- サイズ: PC 56px / SP 56px
- ホバー: 色変化 + シャドウ + わずかな浮き上がり
- フォーカスリング: 常時可視

### 余白
- セクション間: 80〜120px (PC) / 48〜64px (SP)
- CTA周辺: 上下 32〜48px
```

## Quality Criteria

- CTAコントラスト4.5:1以上
- タップターゲット44px以上
- 装飾でCTAを埋もれさせない
- 余白が機能している

## Common Failure Patterns

- CTAが背景に埋もれる
- 装飾過多
- タップターゲット小
- 余白不足で詰まり感

## Self Check

- [ ] CTAコントラスト合格
- [ ] タップターゲット合格
- [ ] 余白設計済み

## Related Agents

- `lp-art-director`
- `lp-web-designer`
- `lp-ui-designer`

## Knowledge 参照

- `knowledge/design-patterns/high-conversion-design.md`
