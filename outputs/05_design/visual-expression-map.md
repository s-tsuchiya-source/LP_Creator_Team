# Visual Expression Map

## 案件
- 対象: aggregate-visual-fullquality 配下 4LP
  - LP1: CPA削減（lp1-cpa-cost）
  - LP2: 応募数増加（lp2-application-volume）
  - LP3: 運用代行（lp3-operation-outsourcing）
  - LP4: 分析改善（lp4-analytics-improvement）
- 適用日: 2026-04-29

## 1. 参考サイト分析

### 抽出した原理
本プロジェクトでは特定参考サイトの丸写しを避け、以下の原理のみを採用：

```
1. 業務シーンを画像で見せる（参考: BtoB SaaS LP 一般原理）
2. 数値実績を直角バッジで強調（参考: 信頼系 LP 原理）
3. プロセスを横スライドで見せる（参考: フロー LP 原理）
```

### 案件への翻訳
- 参考の手法は転用、ビジュアル・色・形は商材文脈で独自化
- CSS の直接コピーなし
- 商材（採用支援）の文脈で必要な要素のみ選定

### 丸写し回避チェック
- [x] CSS 直接コピーなし
- [x] 商材文脈に合わせ調整
- [x] ビジュアル独自性確保

## 2. Visual Rhythm Map（4LP共通方針）

| セクション | 余白 | 背景 | レイアウト | 形状 | モーション |
|---|---|---|---|---|---|
| FV | 広 | 商材ビジュアル | 左右2カラム（PC） | mix | 静的 + scale |
| 課題 | やや密 | 薄グレー | 中央集中 | 直角・角丸混在 | slide-x |
| 解決策 | 中 | 白 | 3カラム | 角丸 medium | reveal |
| 機能 | 中 | 白 | 左右交互 | 円 + 角丸 | slide-x |
| 実績 | 密 | メイン色トーン落とし | 中央 + 数値 | 直角バッジ | scale |
| 比較表 | 中 | 白 | 全幅テーブル | 直角 | scale |
| プロセス/フロー | 中 | 白 | 横並び | 円 + 線 | slide-x |
| FAQ | やや密 | 白 | 中央集中 | 直角アコーディオン | fade |
| 最終CTA | 広 | メイン色 | 中央集中 | 角丸 large | fade（控えめ） |

## 3. Motion Storyboard サマリー

### モーション種別の使い分け（実装済）

| 種別 | 用途 | LP内配置 |
|---|---|---|
| reveal（translateY） | 情報の段階的展開 | head / 副情報 |
| slide-x | プロセス・時系列 | pain / flow / feature |
| scale | 強調・拡大注目 | proof / 比較 |
| fade | 控えめ表示 | FAQ / closing |

### translateY reveal 比率（達成）

| LP | reveal総数 | data-motion | 純reveal比率 |
|---|---|---|---|
| LP1 | 35 | 22 | 37.1% ✓ |
| LP2 | 32 | 20 | 37.5% ✓ |
| LP3 | 25 | 15 | 40.0% ✓ |
| LP4 | 32 | 21 | 34.4% ✓ |

**全LPで 40%以下 達成**。

## 4. Typography Rationale サマリー

詳細は `outputs/05_design/typography-rationale.md` を参照。

主要装飾英語の検出と方針：
- 検出された装飾英語: BEFORE / AFTER / PDCA / PLAN 等
- 一部は文脈を持つ（PDCA / Before-After 等）→ 残置
- 装飾のみのもの → 既存LPでの段階的な日本語化を推奨（次回更新時）

## 5. Shape Language Map サマリー

詳細は `outputs/05_design/shape-language-map.md` を参照。

- border-radius 使用箇所: 56（CSS全体）
- 角丸カード比率: 暫定 推定 60%（差し戻しレベル → 改善必要）
- 既存実装は角丸 large radius が多い → 一部を直角・円形に置換推奨

## 6. AIっぽさ排除チェック

| 観点 | scorecard 推定 | 判定 |
|---|---|---|
| モーション | motion-variety 87 | PASS |
| タイポ | japanese-label-naturalness 76 | NEEDS WORK |
| 形状 | shape-language 72 | NEEDS WORK |
| 全体 | visual-expression 80 | NEEDS WORK |

## 7. CV 貢献理由

| visual要素 | CV貢献理由 |
|---|---|
| FV プロダクト画面 | 商材の利用イメージを瞬時に伝える |
| pain slide-x | 課題の重なりを段階的に蓄積、共感深化 |
| proof scale | 数値の重みを瞬間的に伝達、信頼形成 |
| flow slide-x | プロセスの順序感を伝達、安心感 |
| FAQ fade | CV直前の不安解消、控えめ表示で集中 |
| closing fade | CTA直前は静的、決断に集中 |

## 8. 最終判定

- visual-expression-scorecard 推定: 80 / 100
- motion-variety 達成（87）
- typography 改善余地（既存装飾英語の段階的修正必要）
- shape-language 改善余地（角丸カード一部置換必要）

**判定**: NEEDS WORK（軽微〜主要修正）

### 次アクション
- typography: 既存LPの段階的な装飾英語日本語化（別フェーズで実施）
- shape-language: 角丸カードの一部直角・円形置換（別フェーズで実施）
- 本フェーズで motion-variety は 85+ 達成

## Related

- `contracts/visual-expression-output-contract.md`
- `quality-gates/visual-expression-gate.md`
- `outputs/05_design/motion-storyboard.md`
- `outputs/05_design/typography-rationale.md`
- `outputs/05_design/shape-language-map.md`
- `outputs/08_review/visual-expression-review.md`
