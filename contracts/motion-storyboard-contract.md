# Motion Storyboard Contract

## Purpose

LPの全モーションを「目的・種別・時間・採用理由」で記録する。
`outputs/05_design/motion-storyboard.md` の必須形式。

## Required Sections

### 1. 全モーション一覧
- セクション
- モーション種別
- 目的（何を理解させる動きか）
- 時間 / easing / delay
- 発火条件
- prefers-reduced-motion 対応

### 2. translateY reveal 集計
- 全モーション数
- reveal系モーション数
- 比率（必須40%以下）

### 3. CV直前モーション確認
- 最終CTA前の過剰モーションなし

### 4. 採用理由ログ
- 各モーションの「なぜこの種別か」

## Required Fields

各モーションに：

```yaml
セクション: 課題提起
種別: 横スライド
目的: 課題リストを順次見せ、「自分のことだ」を蓄積させる
時間: 300ms
delay: 100ms（カード間）
easing: cubic-bezier(0.16, 1, 0.3, 1)
発火条件: scroll（IntersectionObserver）
prefers-reduced-motion: 即座に表示（アニメーションなし）
CV貢献: 段階的共感を促進
```

## Format Rules

```markdown
# Motion Storyboard

## サマリー
- 全モーション数: ___ 個
- reveal系比率: ___%（40%以下）
- CV直前モーション: 該当なし

## モーション一覧

### Section: FV
- 種別: 静的（モーションなし）
- 理由: FV 即時表示で価値提示

### Section: 課題提起
- 種別: 横スライド
- 目的: 課題リストを順次見せる
- 時間: 300ms / delay: 100ms（カード間）
- easing: cubic-bezier(0.16, 1, 0.3, 1)
- 発火: IntersectionObserver
- prefers-reduced-motion: 即時表示
- CV貢献: 段階的共感を促進

### Section: 解決策
- 種別: スケール変化（数値強調）
- 目的: 「60%削減」の重みを伝える
- 時間: 400ms
- easing: ease-out
- CV貢献: 数値の説得力

### Section: 実績
- 種別: カウントアップ
- 目的: 数値の重み
- CV貢献: 信頼性訴求

### Section: 比較表
- 種別: クロスフェード（toggle）
- CV貢献: 状態変化の理解

### Section: FAQ
- 種別: アコーディオン展開
- CV貢献: 不安解消

### Section: 最終CTA
- 種別: なし or ホバー応答のみ
- 理由: CV直前に過剰モーション禁止

## prefers-reduced-motion 対応

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
```

## Acceptance Criteria

- 全モーションに目的・種別・時間記載
- translateY reveal 40%以下
- CV直前の過剰モーションなし
- prefers-reduced-motion 対応
- 各モーションに CV貢献理由

## Rejection Criteria

- 採用理由なきモーション
- translateY reveal 40%超
- CV直前の過剰モーション
- prefers-reduced-motion 未対応

## Related

- skill: `skills/10_visual_expression/motion-meaning-design-skill.md`
- agent: `lp-motion-director`
- scorecard: `scoring/motion-variety-scorecard.md`
- gate: `quality-gates/visual-expression-gate.md`
