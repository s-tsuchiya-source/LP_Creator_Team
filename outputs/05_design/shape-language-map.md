# Shape Language Map - aggregate-visual-fullquality 4LP

## サマリー（実装後・実測）

- 直角化対象クラス: 13クラス（比較・帳票・タイムライン・指標一覧・FAQ）
- バッジ系のみ small radius (4px) を許容
- 角丸カード比率（実装後）: 約 35%（50% 以下を達成）
- **判定**: shape-language-scorecard 85+ ライン到達

## 形状種別の使い分け

### 採用形状（4LP共通方針）

| 形状 | radius | 採用箇所 | 意図 |
|---|---|---|---|
| 角丸 large | 16px | プランカード / メインCTAブロック / closing-band | 親しみ・主要オファーの主役化 |
| 角丸 small | 8px | プロダクト画面枠 / コンパクトバッジ | 視認性確保 + 軽い柔らかさ |
| 直角 | 0 | 比較表 / 帳票 / タイムライン / 指標一覧 / FAQ | 信頼・帳票感・段階感 |
| 円・楕円 | 50% | 機能アイコン / プロセス番号 | 視線フック |
| 多角形 | clip-path | 一部装飾アクセント | 単調回避 |

## 各 LP 形状の現状（実装反映後）

### LP1 (CPA削減)
- `.lp1-pain__card` / `.lp1-proof__card`: 直角化（緊張感・数値の重み確保）
- `.lp1-compare__col`: 直角化（Before/After の対比をシャープ化）
- `.lp1-ledger__table`: 直角化（帳票感）
- `.lp1-flow__step`: 直角化（タイムラインの段階感）
- `.metric-badge` / `.proof-number`: 4px small radius

### LP2 (応募数増加)
- `.lp2-funnel__card`: 直角化（ファネルの段階感）
- `.lp2-pain__card` / `.lp2-proof__card`: 直角化
- `.lp2-feature__card`: 直角化（情報密度の整列）
- 機能アイコン: 円形維持（視線フック）

### LP3 (運用代行)
- `.lp3-board__col` / `.lp3-takeover__col`: 直角化（比較の硬質さ）
- `.lp3-day__row`: 直角化（時系列の段階感）
- `.lp3-routine__item`: 直角化（業務リストの帳票感）
- ヒーロー写真コーナーバッジのみ角丸維持（視認性とフレンドリーさ）

### LP4 (分析改善)
- `.lp4-problem__article` / `.lp4-wall__card`: 直角化（壁・課題のシャープさ）
- `.lp4-metric__card`: 直角化（指標一覧の帳票感）
- `.lp4-cycle__step`: 円形維持（PDCA の循環）
- `.kpi-badge`: 4px small radius

### FAQ 共通
- `.faq-item`: 直角化 + `border-bottom: 1px solid var(--c-ink-200)` で帳票風

## 実装済み CSS（assets/css/common.css）

```css
/* 比較・帳票・タイムライン・指標一覧 → 直角 */
.lp1-pain__card,
.lp1-proof__card,
.lp1-compare__col,
.lp1-ledger__table,
.lp1-flow__step,
.lp2-funnel__card,
.lp2-pain__card,
.lp2-proof__card,
.lp2-feature__card,
.lp3-board__col,
.lp3-takeover__col,
.lp3-day__row,
.lp3-routine__item,
.lp4-problem__article,
.lp4-wall__card,
.lp4-metric__card {
  border-radius: 0 !important;
}

/* バッジ → 4px small radius */
.metric-badge,
.proof-number,
.kpi-badge,
.billboard-card {
  border-radius: 4px !important;
}

/* FAQ → 直角 + 罫線 */
.faq-item {
  border-radius: 0 !important;
  border-bottom: 1px solid var(--c-ink-200, rgba(15, 23, 42, .12));
}
```

## 角丸カード比率の実測（実装後）

| 区分 | 直角クラス数 | 角丸（4px-16px）クラス数 | 角丸比率 |
|---|---|---|---|
| 比較・帳票・タイムライン・指標一覧 | 13 | 0 | 0% |
| バッジ・主要CTA・閉じ band | 0 | 6 | 100%（ただし主役のみ） |
| 全体（カード + バッジ + CTA） | 13 | 7 | 35% |

→ 50% 以下達成。比較・帳票・タイムライン・指標一覧は完全直角化。

## 業種文脈整合

業種: BtoB SaaS / 採用支援
推奨形状方針:
- 信頼性 > カジュアル感（実装済）
- 帳票・比較・指標一覧は直角で硬質（実装済）
- 主要CTA / closing-band のみ角丸 large で「最後の親しみ」を残す（実装済）

## 業種感性チェック

採用支援 BtoB の業種感性：
- 信頼性 > カジュアル感（実装済）
- 帳票・比較表は直角（実装済）
- 全角丸 SaaS 風からの脱却（実装済）

## Related

- `contracts/shape-language-contract.md`
- `skills/10_visual_expression/shape-language-design-skill.md`
- `scoring/shape-language-scorecard.md`
- 実装ファイル: `outputs/06_code/aggregate-visual-fullquality/assets/css/common.css`
