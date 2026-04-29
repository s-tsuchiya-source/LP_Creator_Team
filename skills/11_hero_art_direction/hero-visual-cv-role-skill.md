# Hero Visual CV Role Skill

## Purpose

ヒーローの全 visual 要素（画像 / 図解 / 注釈 / KPI / 装飾）に CVへの貢献役割を持たせる。

「装飾だけ」の visual を排除する。

## When to Use

- ヒーロー設計時
- 既存ヒーローの visual 要素見直し時

## Required Inputs

- ヒーロー設計案
- ペルソナのCV直前心理
- 主要 KPI / 数値

## Step-by-Step Procedure

### Step 1: visual 要素の役割分類

各 visual を以下のいずれかに分類：

```
1. 文脈伝達（context）: 何のサービスか伝える
2. 信頼形成（trust）: 数値・ロゴで信頼を作る
3. 期待生成（expectation）: 導入後の未来像
4. 共感誘発（empathy）: 業務シーンで共感
5. 行動誘発（action）: CTA に視線を集める
```

「装飾だけ」は不採用。

### Step 2: visual ごとに役割を記録

```markdown
## ヒーロー visual 要素

### 写真背景（採用業務シーン）
- 役割: 共感誘発 + 文脈伝達
- CV貢献: 「自分の業務だ」と認識させる

### KPI バッジ「導入1,200社」
- 役割: 信頼形成
- CV貢献: 実在感ある数値で安心

### 注釈「月150h → 月60h」
- 役割: 期待生成
- CV貢献: 「自分もこう変わる」未来想起

### CTAボタン「無料で資料請求」
- 役割: 行動誘発
- CV貢献: クリック直結

### 装飾線・抽象図形
- 役割: なし
- → 不採用
```

### Step 3: CV貢献の優先順位

ヒーロー内での視線誘導：

```
1. ターゲット明示「中小企業の人事担当者へ」（自分ごと化）
   ↓
2. メインキャッチ（メリット）
   ↓
3. 信頼バッジ（KPI / ロゴ）
   ↓
4. CTAボタン（行動）
```

各要素が CV経路の一部であることを確認。

### Step 4: 装飾要素の排除

以下を不採用：

```
❌ 抽象的なグラデーション線
❌ 関係ない3D図形
❌ 装飾的な英語ラベル
❌ 意味のない数字（「VOL.01」等）
❌ デコレーション目的のアイコン
```

### Step 5: visual 要素チェックリスト

各要素について問う：

```
✅ Q: この visual はCV貢献するか？
✅ Q: なくしても CV取れるか？（取れるなら装飾の可能性）
✅ Q: ペルソナがこの visual で感情変化するか？
```

3問すべて Yes なら採用、それ以外は再検討。

## Output Format

`outputs/05_design/hero-art-direction.md` に記録：

```markdown
## ヒーロー visual 要素一覧

| visual | 役割 | CV貢献 |
|---|---|---|
| 写真背景 | 共感誘発 | 業務シーン共感 |
| KPIバッジ | 信頼形成 | 実在感 |
| 注釈 | 期待生成 | 未来想起 |
| CTA | 行動誘発 | クリック |
| (装飾線) | なし | 不採用 |
```

## Quality Criteria

- 全 visual に役割明示
- 装飾だけの要素なし
- CV貢献理由を記録

## Common Failure Patterns

- 装飾的なグラデーション・3D図形を採用
- 「綺麗だから」の判断
- visual の役割が不明
- CV貢献理由なし

## Self Check

- [ ] 全 visual に役割
- [ ] 装飾だけの要素を排除
- [ ] CV貢献理由を記録

## Related

- agent: `lp-hero-art-director`
- contract: `contracts/hero-art-direction-output-contract.md`
- scorecard: `scoring/hero-art-direction-scorecard.md`
