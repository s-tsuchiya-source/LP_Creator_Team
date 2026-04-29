# Shape Language Design Skill

## Purpose

LPの形状言語（角丸・直角・円・多角形・有機形状）を商材文脈に合わせて多様化する。

「全セクション角丸カード」依存を排除し、形状で意味を伝える。

## When to Use

- デザインフェーズ
- UIパーツ設計時
- 既存LPの形状見直し時

## Required Inputs

- セクション構成
- ブランドガイドライン
- 業種 playbook

## Step-by-Step Procedure

### Step 1: 形状の意味分類

形状ごとに伝わるメッセージ：

| 形状 | 伝わる意味 | 推奨用途 |
|---|---|---|
| 角丸（large radius） | 親しみ・カジュアル | BtoC / 採用LP / EC |
| 角丸（small radius） | 信頼・誠実 | BtoB / 金融 |
| 直角 | 厳格・プロフェッショナル | 金融 / 医療 / 法務 |
| 円・楕円 | 柔軟・包容 | サービス紹介 / コラム |
| 多角形（hex / triangle） | 独自性・先進 | テック / 革新訴求 |
| 有機形状（blob） | 個性・人間味 | クリエイティブ / 教育 |

### Step 2: 角丸カード依存を測定

LP全体のカード形状を集計：

```
- 角丸カード: ___ 個
- 直角カード: ___ 個
- 円形・楕円: ___ 個
- 多角形: ___ 個
- 形状なし（テキストのみ）: ___ 個

合計: ___

角丸カード比率 = 角丸 / 合計 × 100%
```

**50%超えたら差し戻し**。

### Step 3: 形状の使い分け設計

各セクションで形状を意図的に変える：

#### 例: BtoB SaaS

```
FV: 形状なし（テキスト + プロダクト画面）
課題: 直角の枠線（緊張感）
解決策: 角丸カード（親しみ）
機能: 円形アイコン + テキスト
実績: 直角バッジ（信頼）
事例: 角丸カード（柔らかさ）
比較表: 直角テーブル（厳格）
価格: 角丸カード（推奨ハイライト）
FAQ: 直角アコーディオン（整理感）
最終CTA: 角丸 + シャドウ（行動誘発）
```

### Step 4: 形状の組み合わせルール

```
✅ 同セクション内で形状混在OK
- 数値バッジ（直角）+ コメントカード（角丸）

✅ 隣接セクションで形状変化
- 信頼セクション（直角）→ 事例セクション（角丸）

❌ NG: 全カード同形状
- 全部 border-radius: 16px の角丸カード
```

### Step 5: 採用理由を記録

`outputs/05_design/shape-language-map.md` に各形状の採用理由を記録：

```markdown
## セクション: 課題提起

### 採用形状
- 直角の枠線（border 1px solid）

### 採用理由
- 「課題」の緊張感を伝えるため
- 角丸だと共感が薄まる
- BtoB の業務シーンに合う

### NG 案との比較
- ❌ 角丸カード: 親しみ寄りで緊張感が出ない
- ❌ 円形アイコン: 課題の重さが伝わらない
- ✅ 直角枠線: 業務文書の構造感
```

## Output Format

`contracts/shape-language-contract.md` に準拠。

## Quality Criteria

- 角丸カード比率 50%以下
- 各形状に採用理由
- セクション間で形状変化
- 商材文脈に合う形状選定

## Common Failure Patterns

- 全セクション角丸カード
- 形状の意味を考えず装飾選定
- 角丸 16px で統一しすぎ
- 業種感性と形状のミスマッチ

## Self Check

- [ ] 角丸カード比率 50%以下
- [ ] 各形状に採用理由
- [ ] セクション間で形状変化
- [ ] 業種文脈に合う

## Related

- agent: `lp-shape-language-designer`
- contract: `contracts/shape-language-contract.md`
- scorecard: `scoring/shape-language-scorecard.md`
- gate: `quality-gates/visual-expression-gate.md`
