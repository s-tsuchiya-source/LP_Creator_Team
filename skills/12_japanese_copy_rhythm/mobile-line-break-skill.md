# Mobile Line Break Skill

## Purpose

PC と SP で改行位置を分ける。SP表示で読みやすい改行を設計する。

## When to Use

- 全コピー実装時
- SP表示で改行が不自然なとき

## Required Inputs

- 全見出しコピー
- PC レイアウト
- SP レイアウト

## Step-by-Step Procedure

### Step 1: PC / SP 分離 の必要性

```
PC: 横幅広い → 1行に多く入る
SP: 横幅狭い → 折り返しが多い

→ 同じ改行を使うと、SP で不自然な折り返しが発生
```

### Step 2: br クラス分離

```html
<h1 class="hero-title">
  採用業務を、最大60%削減。<br class="pc">
  <br class="sp">中小企業の人事担当者向け
</h1>
```

```css
@media (max-width: 640px) {
  br.pc { display: none; }
}

@media (min-width: 641px) {
  br.sp { display: none; }
}
```

### Step 3: SP 推奨改行ルール

```
SP（〜639px）:
- 1行 13〜18文字目安
- 助詞の前後で改行可
- 短い文を多めに

PC（640px〜）:
- 1行 25〜35文字目安
- 並列要素の改行
- 中文を活かす
```

### Step 4: SP で問題が起きやすいパターン

#### 問題1: 助詞が行末に残る

```
PC: 採用業務を、最大60%
    削減します

SP: 採用業務を、最大60
    %削減します
    （「60」と「%」が分断、または「を、」が行末）
```

→ SP では明示的に `<br class="sp">` で改行制御。

#### 問題2: 数字と単位の分断

```
NG SP: 採用工数 月150
       時間
（「150」と「時間」が分断）

OK SP: 採用工数
       月150時間
```

`white-space: nowrap` で数字単位を保護：

```css
.metric { white-space: nowrap; }
```

### Step 5: 実装例

#### Before（PC のみ最適化）

```html
<h1>採用業務を、最大60%削減<br>中小企業の人事担当者向け採用管理ツール</h1>
```

PC: OK / SP: 不自然な折り返し多発

#### After（PC / SP 分離）

```html
<h1>
  採用業務を、最大60%削減<br class="pc">
  <br class="sp">中小企業の人事担当者向け<br>
  採用管理ツール
</h1>
```

```css
@media (max-width: 640px) {
  br.pc { display: none; }
}
@media (min-width: 641px) {
  br.sp { display: none; }
}
```

### Step 6: 検証手順

実機 / DevTools で確認：

```
1. 320px（最小スマホ）
2. 375px（iPhone 標準）
3. 640px（タブレット境界）
4. 1024px（PC 境界）
5. 1440px（PC 標準）
```

各幅で改行が自然か確認。

### Step 7: 改行採用理由を記録

```markdown
## SP 改行設計

### h1 (FV メインキャッチ)

**PC 表示**:
採用業務を、最大60%削減
中小企業の人事担当者向け採用管理ツール

**SP 表示**:
採用業務を、
最大60%削減
中小企業の人事担当者向け
採用管理ツール

**改行採用理由**:
- PC は 2行で完結、SP は 4行で読みやすく
- 助詞「を」「を、」が行末に残らないよう調整
- 数字「60%」が分断されないよう注意
```

## Output Format

`outputs/05_design/japanese-line-break-review.md` に PC / SP 改行表を記録。

## Quality Criteria

- PC / SP で改行を分離
- SP で助詞・数字単位の分断なし
- 各見出しに採用理由

## Common Failure Patterns

- PC 改行のみで SP 不自然
- `<br>` 1種類で全幅対応しようとする
- SP 検証なしの納品

## Self Check

- [ ] PC / SP 分離（br.pc / br.sp）
- [ ] SP で助詞・数字分断なし
- [ ] 320 / 375 / 640 / 1024px で確認

## Related

- agent: `lp-japanese-copy-rhythm-editor`
- skill: `skills/12_japanese_copy_rhythm/japanese-line-break-skill.md`
- skill: `skills/12_japanese_copy_rhythm/br-tag-control-skill.md`
- scorecard: `scoring/japanese-line-break-scorecard.md`
