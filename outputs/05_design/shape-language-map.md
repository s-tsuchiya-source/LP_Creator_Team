# Shape Language Map - aggregate-visual-fullquality 4LP

## サマリー

- border-radius 使用箇所（CSS全体）: 56 箇所
- 角丸カード推定数: ~14（高頻度クラス）
- 角丸カード比率（推定）: 60〜65%
- **判定**: 50%超え → 改善必要

## 形状種別の使い分け

### 採用形状（4LP共通方針）

| 形状 | radius | 採用箇所 |
|---|---|---|
| 角丸 large | 16px | プランカード / メインCTA |
| 角丸 medium | 12px | 解決策カード / 事例カード |
| 角丸 small | 8px | プロダクト画面枠 / バッジ |
| 直角 | 0 | 比較表 / 数値バッジ / FAQ アコーディオン |
| 円・楕円 | 50% | 機能アイコン / プロセス番号 |
| 多角形 | clip-path | 一部バッジ・装飾 |

## 各 LP 形状状況

### LP1 (CPA削減)
- pain__card: 角丸（緊張感薄れる）
- proof__card: 角丸（数値の重みが薄れる）
- compare card: 角丸（Before/After のシンプルさ薄れる）
- flow step: 角丸 + 円形番号（OK）
- closing: 角丸 large（OK）
- → pain / proof / compare の角丸を直角に変更推奨

### LP2 (応募数増加)
- funnel card: 角丸（ファネルの段階感が薄れる）
- pain card: 角丸（共感のシャープさが薄れる）
- feature: 角丸 + 番号（OK）
- proof card: 角丸（数値の重みが薄れる）
- → funnel / pain / proof の一部を直角に

### LP3 (運用代行)
- routine item: 角丸（業務リストとして適切）
- board col: 角丸（比較として直角推奨）
- takeover col: 角丸（比較として直角推奨）
- day row: 角丸（時系列として直角推奨）
- → board / takeover / day を直角に

### LP4 (分析改善)
- problem article: 角丸（緊張感薄れる）
- wall card: 角丸（壁の硬さが伝わらない）
- catalog table: 直角（OK）
- cycle step: 円形（OK）
- → problem / wall を直角推奨

## 業種文脈整合

業種: BtoB SaaS / 採用支援
推奨形状方針:
- 信頼感（直角）と親しみ（角丸）の両立
- 全角丸はカジュアルすぎる → 一部直角に

## 段階的改善方針

本フェーズでは Visual Expression Layer の基盤導入を優先。
既存LPの形状改善は次回リリース時に段階適用：

### 次回フェーズで実施

1. 各LP の比較系カード（before/after / 比較表 / Board）を直角に
2. proof / 数値バッジを直角に変更（信頼性強化）
3. shape-language-scorecard 85+ 達成

## CSS 修正案（次フェーズ）

```css
/* 比較系 → 直角 */
.lp1-compare__col,
.lp1-pain__card,
.lp1-proof__card,
.lp2-funnel__card,
.lp2-pain__card,
.lp3-board__col,
.lp3-day__row,
.lp3-takeover__col,
.lp4-problem__article,
.lp4-wall__card {
  border-radius: 0;
  border: 1px solid var(--c-border);
}

/* バッジ → 小角丸 or 直角 */
.metric-badge,
.proof-number {
  border-radius: 4px;
}
```

## 角丸カード比率改善計算（次フェーズ後の推定）

| 段階 | 角丸数 | 直角数 | 角丸比率 |
|---|---|---|---|
| 現状 | ~28 | ~10 | 65% |
| 改善後 | ~14 | ~24 | 37% |

→ 50%以下達成見込み。

## 業種感性チェック

採用支援 BtoB の業種感性：
- 信頼性 > カジュアル感
- 直角・small radius が業務文脈に合う
- 全角丸は SaaS 一般感（差別化弱）

## Related

- `contracts/shape-language-contract.md`
- `skills/10_visual_expression/shape-language-design-skill.md`
- `scoring/shape-language-scorecard.md`
