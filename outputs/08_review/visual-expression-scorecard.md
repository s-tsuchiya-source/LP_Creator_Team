# Visual Expression Scorecard - aggregate-visual-fullquality 4LP

## 採点日
- 2026-04-29

## 採点対象
- aggregate-visual-fullquality 配下 4LP

## 各 Scorecard 採点

### 1. visual-expression-scorecard: 80 / 100

| 項目 | 配点 | 得点 | 備考 |
|---|---:|---:|---|
| モーション意味設計 | 20 | 18 | 4種使い分け、目的記録あり |
| 日本語ラベル自然さ | 15 | 9 | 装飾英語残存 |
| 形状言語多様性 | 15 | 9 | 角丸カード 50%超 |
| Visual Rhythm 多様性 | 10 | 9 | OK |
| 参考サイト原理抽出 | 10 | 10 | 丸写しなし |
| CV貢献記録 | 10 | 10 | 全要素記録 |
| AIっぽさ排除 | 10 | 5 | タイポ・形状で残存 |
| 商材文脈整合 | 5 | 5 | OK |
| prefers-reduced-motion | 5 | 5 | 完全対応 |

合計: **80 / 100**

### 2. motion-variety-scorecard: 87 / 100（PASS）

| 項目 | 配点 | 得点 | 備考 |
|---|---:|---:|---|
| モーション目的明示 | 25 | 25 | 全モーション記録 |
| 種別多様性 | 20 | 18 | 4種使用 |
| translateY reveal比率 | 15 | 15 | 全LP 40%以下 |
| CV直前過剰モーション排除 | 15 | 15 | closing fade のみ |
| prefers-reduced-motion 対応 | 10 | 10 | 完全対応 |
| パフォーマンス | 10 | 7 | 60fps 維持想定 |
| 採用理由ログ | 5 | 5 | motion-storyboard.md |

合計: **87 / 100** ✓ PASS（85+）

### 3. japanese-label-naturalness-scorecard: 76 / 100

| 項目 | 配点 | 得点 | 備考 |
|---|---:|---:|---|
| 装飾英語ゼロ | 30 | 15 | 17件残存 |
| 日本語ラベル自然さ | 20 | 18 | 業界語彙適切 |
| 文字数適正 | 10 | 9 | OK |
| ラベル採用理由記録 | 15 | 15 | typography-rationale.md |
| 残した英語の妥当性 | 10 | 10 | 業界用語のみ |
| CTA文言具体性 | 10 | 7 | 一部抽象 |
| 階層整合 | 5 | 2 | 装飾見出しあり |

合計: **76 / 100** NEEDS WORK

### 4. shape-language-scorecard: 72 / 100

| 項目 | 配点 | 得点 | 備考 |
|---|---:|---:|---|
| 角丸カード比率 | 25 | 10 | 推定60〜65%（50%超） |
| 形状種別多様性 | 20 | 17 | 4種使用 |
| セクション間形状変化 | 15 | 13 | OK |
| 形状採用理由記録 | 15 | 15 | shape-language-map.md |
| 業種文脈整合 | 10 | 7 | カジュアル寄り |
| UI部品階層整合 | 10 | 8 | OK |
| ブランドガイドライン整合 | 5 | 2 | 既存ガイドラインなし |

合計: **72 / 100** NEEDS WORK

## 総合判定

```
visual-expression: 80 → NEEDS WORK
motion-variety: 87 → PASS ✓
japanese-label-naturalness: 76 → NEEDS WORK
shape-language: 72 → NEEDS WORK
```

**総合**: 段階的改善必要（モーションは完了、タイポ・形状は次フェーズ）

## Critical Fail Conditions

| 条件 | 該当 |
|---|---|
| 全セクション同じ translateY reveal | なし ✓ |
| reveal系 40%超 | なし ✓ |
| 装飾英語残存 | あり（段階改善） |
| 角丸カード 50%超 | あり（段階改善） |
| CV直前過剰モーション | なし ✓ |
| 参考サイト丸写し | なし ✓ |
| prefers-reduced-motion 未対応 | なし ✓ |

## 改善ロードマップ

### Phase 1 (本フェーズ・完了)
- ✓ Visual Expression Layer 基盤導入
- ✓ モーション多様化実装
- ✓ 出力ファイル全作成

### Phase 2 (次回リリース)
- 装飾英語の日本語化（17件）
- 角丸カードの一部直角化
- japanese-label-naturalness 85+ 達成
- shape-language 85+ 達成

### Phase 3 (リリース後検証)
- 実機での動作確認
- A/Bテスト
- visual-expression 90+ 達成

## Related

- `quality-gates/visual-expression-gate.md`
- `outputs/08_review/visual-expression-review.md`
- `outputs/05_design/visual-expression-map.md`
