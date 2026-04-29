# Design Reference Translation Skill

## Purpose

参考サイト・参考LPを「丸写し」せず、原理だけを抽出して案件に転用する。

「Awwwards/Notionライク」をそのまま真似るのではなく、なぜそれが機能するかを理解し、商材文脈に合わせて翻訳する。

## When to Use

- 参考サイト・参考LPがあるとき
- デザイン方向性に迷っているとき
- 既存LPの差別化を強化したいとき

## Required Inputs

- 参考サイト URL（複数可）
- 商材情報・ペルソナ
- 業種 playbook

## Step-by-Step Procedure

### Step 1: 参考サイト分析

参考サイトを以下5軸で分解：

```
1. Why it works（なぜ機能するか）
   - ターゲット心理
   - 業界文脈
   - ブランド戦略

2. Visual principle（ビジュアル原理）
   - 色使い
   - タイポ
   - 形状言語
   - 余白設計

3. Motion principle（モーション原理）
   - 主な動きの種別
   - 動きが伝える意味

4. Information design（情報設計）
   - セクション順序
   - 強弱の付け方

5. UI patterns（UI部品）
   - CTAの形
   - カードの作り
   - ナビゲーション
```

### Step 2: 「原理」と「装飾」を分離

```
✅ 原理（転用可）
- 「FVで商材の利用シーンを大きく見せる」
- 「数値実績を直角バッジで強調」
- 「比較表で自社劣位点も含む正直さ」

❌ 装飾（丸写し禁止）
- 同じグラデーション色
- 同じフォント組み合わせ
- 同じカードレイアウト
- 同じアニメーション挙動
```

### Step 3: 案件文脈への翻訳

参考サイトの原理を、案件文脈に合わせて翻訳：

```markdown
## 参考: [参考サイトURL]

### 抽出した原理
1. FV で商材ビジュアルを大きく
2. 数値実績を「圧」で見せる（直角・大型・コントラスト強）
3. 比較表に自社劣位点も含む

### 案件への翻訳
1. プロダクト管理画面の SS を FV 右側に
   - 参考: [参考のFVと同じ手法]
   - 翻訳: 商材文脈に合うプロダクト画面（手法だけ転用、ビジュアルは独自）

2. 数値「導入1,200社」を直角バッジで配置
   - 参考: 数値訴求の手法
   - 翻訳: 自社実績を商材文脈で表現

3. 比較表に「価格はやや高め」も明記
   - 参考: 正直さの原理
   - 翻訳: 自社の文脈で正直に
```

### Step 4: 「丸写し」を避けるチェック

各デザイン要素について：

```
✅ 質問: この要素は商材ペルソナに必要か？
✅ 質問: 商材文脈で意味があるか？
✅ 質問: 参考サイトの色・形をそのまま使っていないか？

❌ NG: 「参考が綺麗だったから」だけで採用
❌ NG: 参考のCSS をそのままコピー
❌ NG: 参考の色をそのまま使用
```

### Step 5: 採用理由を記録

`outputs/05_design/visual-expression-map.md` に記録：

```markdown
## 参考分析: [URL]

### 抽出原理
- ...

### 案件への翻訳
- ...

### 丸写し回避チェック
- [ ] ビジュアル独自性確保
- [ ] 色・形は商材文脈に合わせ調整
- [ ] CSS 直接コピーなし
```

## Output Format

`contracts/visual-expression-output-contract.md` に準拠。

## Quality Criteria

- 参考サイト分析が5軸で実施
- 原理と装飾が分離されている
- 案件文脈への翻訳が明示
- 丸写し回避チェック合格

## Common Failure Patterns

- 参考サイトをそのまま真似る
- 「Awwwards っぽさ」だけで採用
- 商材文脈無視のビジュアル
- CSS の直接コピー

## Self Check

- [ ] 5軸分析実施
- [ ] 原理抽出済み
- [ ] 案件翻訳済み
- [ ] 丸写し回避チェック

## Related

- agent: `lp-creative-director` / `lp-human-art-reviewer`
- contract: `contracts/visual-expression-output-contract.md`
- scorecard: `scoring/visual-expression-scorecard.md`
