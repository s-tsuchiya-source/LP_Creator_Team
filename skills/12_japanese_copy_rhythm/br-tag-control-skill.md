# BR Tag Control Skill

## Purpose

`<br>` タグの乱用を排除し、適切な改行制御を行う。

## When to Use

- HTML/CSS 実装時
- 既存LP の改行が乱雑なとき

## Required Inputs

- 全コピー
- レイアウト要件
- レスポンシブ要件

## Step-by-Step Procedure

### Step 1: br タグ使用ルール

```
✅ br タグ OK:
- 短い見出し内の意味区切り（FV メインキャッチ等）
- PC / SP で改行位置を変えたい時（クラス分離）
- 表形式の細胞内
- 短文の強制折り返し（住所・電話番号等）

❌ br タグ 禁止:
- 段落間の区切り（`<p>` を使う）
- 装飾的な間隔調整（CSS の margin / padding 使う）
- 連続 br で空行作成（CSS の margin-block 使う）
```

### Step 2: NG パターン

#### NG-1: 段落区切りに br 連発

```html
❌ <div>
  採用業務を効率化します<br><br>
  業務工数を削減します<br><br>
  チームの負担を軽減します
</div>
```

→ `<p>` を使う：

```html
✅ <div>
  <p>採用業務を効率化します</p>
  <p>業務工数を削減します</p>
  <p>チームの負担を軽減します</p>
</div>
```

#### NG-2: 装飾的な間隔調整

```html
❌ <h2>3つの特徴<br><br><br></h2>
```

→ CSS で：

```css
✅ h2 { margin-block-end: 32px; }
```

#### NG-3: br 1つで段落と見なす

```html
❌ <p>
  採用業務を効率化<br>
  業務工数を削減<br>
  チームの負担を軽減
</p>
```

→ リスト or 別段落：

```html
✅ <ul>
  <li>採用業務を効率化</li>
  <li>業務工数を削減</li>
  <li>チームの負担を軽減</li>
</ul>
```

### Step 3: PC / SP 分離 br

```html
<h1>
  採用業務を、最大60%削減<br class="pc">
  <br class="sp">中小企業の人事担当者向け
</h1>
```

```css
@media (max-width: 640px) { br.pc { display: none; } }
@media (min-width: 641px) { br.sp { display: none; } }
```

### Step 4: nowrap での分断防止

数字 + 単位、ブランド名等：

```html
<p>採用工数を <span class="nowrap">月150時間</span> から <span class="nowrap">月60時間</span> に削減</p>
```

```css
.nowrap { white-space: nowrap; }
```

### Step 5: アクセシビリティ配慮

br タグは スクリーンリーダー で読まれない（機種により）：

```html
❌ <br>
意味のある改行（アクセシビリティ で問題）

✅ 段落区切りは <p>
意味区切りは <br> 必要最小限
```

### Step 6: 検査ルール

各 br を以下でチェック：

```
✅ Q: この br は意味区切りか？
✅ Q: CSS の margin で代替できないか？
✅ Q: PC / SP で適切か？
✅ Q: <p> を使うべきでないか？
```

### Step 7: br 使用カウント

LPごとの br 使用数目安：

```
- ヒーロー: 2〜4個（メインキャッチ + サブ）
- 各セクション見出し: 0〜2個
- 本文: 0個（<p> で段落分け）
- フォーム周辺: 必要最小限
```

LP1ファイルで20個以上 br があれば過剰の疑い。

## Output Format

```markdown
## BR タグ使用記録

| 配置 | 用途 | 適切性 |
|---|---|---|
| h1 内 | PC/SP 分離改行 | OK |
| h2 内 | 意味区切り | OK |
| section 末尾 | 装飾間隔 | NG → CSS margin に修正 |

## 修正履歴
- 段落区切り br × 5 → <p> に変更
- 装飾 br × 3 → CSS margin に変更
```

## Quality Criteria

- 段落区切りは `<p>` 使用
- 装飾的 br ゼロ
- PC / SP 分離 br は class 制御
- スクリーンリーダー考慮

## Common Failure Patterns

- 連続 `<br><br>` で空行作成
- 段落区切りに br 使用
- 装飾的間隔調整に br 多用
- アクセシビリティ無視

## Self Check

- [ ] 段落は `<p>` 使用
- [ ] 装飾 br ゼロ
- [ ] PC / SP 分離は class 制御
- [ ] CSS margin 活用

## Related

- agent: `lp-japanese-copy-rhythm-editor` / `lp-html-css-specialist`
- skill: `skills/12_japanese_copy_rhythm/japanese-line-break-skill.md`
- skill: `skills/12_japanese_copy_rhythm/mobile-line-break-skill.md`
- scorecard: `scoring/japanese-line-break-scorecard.md`
