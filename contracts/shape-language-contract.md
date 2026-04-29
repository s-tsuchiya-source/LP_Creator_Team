# Shape Language Contract

## Purpose

LP内の全UI部品の形状（角丸・直角・円・多角形・有機）を記録し、形状言語の使い分けを保証する。
`outputs/05_design/shape-language-map.md` の必須形式。

## Required Sections

### 1. 全UI部品一覧
- セクション
- UI部品種別
- 採用形状
- 採用理由

### 2. 角丸カード比率測定
- 全カード数
- 角丸カード数
- 比率（必須50%以下）

### 3. 形状の使い分け
- セクションごとの形状変化

### 4. 業種文脈整合
- 業種に合う形状か

## Required Fields

```yaml
セクション: 課題提起
UI部品: 課題リストカード
形状: 直角枠線（border 1px solid）
border-radius: 0
採用理由: 課題の緊張感を伝える
業種文脈: BtoB の業務文書感
```

## Format Rules

```markdown
# Shape Language Map

## サマリー
- 全UI部品数: ___ 個
- 角丸カード: ___ 個
- 角丸カード比率: ___%（50%以下）

## UI部品別形状

| セクション | UI部品 | 形状 | radius | 採用理由 |
|---|---|---|---|---|
| FV | プロダクト画面枠 | 角丸 small | 8px | 親しみ |
| FV | CTA ボタン | 角丸 medium | 12px | 行動誘発 |
| 課題 | 課題カード | 直角枠線 | 0 | 緊張感 |
| 解決策 | アプローチカード | 角丸 large | 16px | 親しみ |
| 機能 | 機能アイコン | 円形 | 50% | 柔軟 |
| 実績 | 数値バッジ | 直角 | 4px | 信頼感 |
| 事例 | 事例カード | 角丸 medium | 12px | 読みやすさ |
| 比較表 | テーブル | 直角 | 0 | 厳格 |
| 価格 | プランカード | 角丸 large | 16px | 推奨ハイライト |
| FAQ | アコーディオン | 直角 | 0 | 整理感 |
| CTA | 最終CTAボタン | 角丸 large | 16px | 行動誘発 |

## 形状の使い分け確認

- セクション間で形状変化: あり / なし
- 連続2セクション同形状: なし（OK）/ あり（NG）

## 業種文脈整合

業種: BtoB SaaS / 中小企業向け

形状方針:
- 信頼感（直角・small radius）と親しみ（angle radius）の両立
- 全角丸は親しみ寄りすぎる → 不採用
- 全直角は厳格すぎる → 一部のみ

## 角丸カード比率計算

```
角丸カード数: 6
全カード数: 11
比率: 54%

→ 50%超え検出 → 一部直角・円形に変更必須
```

## NG パターン検出

- [ ] 全カード border-radius: 16px → 該当なし / 修正済
- [ ] 全カード同サイズ → 該当なし
- [ ] 形状装飾選定（理由なし）→ 該当なし
```

## Acceptance Criteria

- 全UI部品に形状記載
- 各形状に採用理由
- 角丸カード比率 50%以下
- 業種文脈整合
- セクション間で形状変化

## Rejection Criteria

- 角丸カード 50%超
- 形状の意味を考えず装飾選定
- 業種感性とのミスマッチ
- 採用理由なし

## Related

- skill: `skills/10_visual_expression/shape-language-design-skill.md`
- agent: `lp-shape-language-designer`
- scorecard: `scoring/shape-language-scorecard.md`
- gate: `quality-gates/visual-expression-gate.md`
