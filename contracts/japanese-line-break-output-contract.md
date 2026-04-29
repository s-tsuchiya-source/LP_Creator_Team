# Japanese Line Break Output Contract

## Purpose

日本語コピーの改行・リズム編集結果を構造化された形で記録する。
`outputs/05_design/japanese-line-break-review.md` の必須形式。

## Required Sections

### 1. 全コピー一覧
- セクション
- 元コピー
- 改行修正後

### 2. PC / SP 改行表
- 各見出しの PC 改行と SP 改行を併記

### 3. 修正履歴
- 修正前 → 修正後 + 理由

### 4. NG パターン検出ログ
- 助詞分断
- 複合語分断
- 修飾語分断
- ランダム改行

### 5. br タグ使用記録
- 使用箇所
- 適切性判定

### 6. リズムチェック
- 文字数バランス
- 句読点リズム
- 体言止め活用

### 7. 最終判定
- japanese-line-break-scorecard
- 合格 / 不合格

## Format Rules

```markdown
# Japanese Line Break Review

## 1. 全コピー一覧

### FV メインキャッチ
**元**: 「採用業務を最大60%削減し中小企業の人事担当者の負担を軽減します」（35文字、句読点なし、長い）

**修正後**:
PC: 「採用業務を、最大60%削減<br class="pc">中小企業の人事担当者向け」
SP: 「採用業務を、最大60%削減<br class="sp">中小企業の<br class="sp">人事担当者向け」

### 各セクション見出し
（同様）

## 2. PC / SP 改行表

| 見出し | PC 改行位置 | SP 改行位置 |
|---|---|---|
| FV メインキャッチ | 「削減」後 | 「削減」後 + 「中小企業の」後 |
| 課題提起 | なし | 「ありませんか」後 |

## 3. 修正履歴

| 元 | 修正後 | 理由 |
|---|---|---|
| 採用<br>業務 | 採用業務 | 複合語分断防止 |
| 中小企業の<br>人事担当者 | 中小企業の人事担当者<br>向け | 修飾語分断防止 |
| 業務を効率<br>化します | 業務を効率化します | 複合語分断防止 |

## 4. NG パターン検出

| パターン | 件数 | 修正済 |
|---|---|---|
| 助詞分断 | 3 | 3 |
| 複合語分断 | 5 | 5 |
| 修飾語分断 | 2 | 2 |
| ランダム改行 | 4 | 4 |

## 5. br タグ使用記録

| 配置 | 用途 | 適切性 |
|---|---|---|
| h1 内 PC/SP 分離 | 改行制御 | OK |
| h2 内 意味区切り | 改行 | OK |
| section 末尾 装飾 | 装飾間隔 | NG → CSS margin に修正 |
| 連続 br × 3 | 空行 | NG → <p> + margin に修正 |

## 6. リズムチェック

| セクション | 文字数 | 句読点 | リズム |
|---|---|---|---|
| FV メイン | 15 | 「、」1個 | 短・強 |
| FV サブ | 25 | 「、」2個 | 中・補足 |
| 課題提起 | 12 | なし | 短・問いかけ |

## 7. 最終判定
- japanese-line-break-scorecard: __/100
- 合格 / 不合格
```

## Acceptance Criteria

- 7セクション全て記録
- 全コピーの PC / SP 改行記録
- NG パターン検出 + 修正
- br タグ使用記録

## Rejection Criteria

- セクション欠落
- 助詞・複合語の分断残存
- ランダム改行残存
- br タグ乱用

## Related

- agent: `lp-japanese-copy-rhythm-editor`
- skills: `skills/12_japanese_copy_rhythm/`
- scorecard: `scoring/japanese-line-break-scorecard.md`
- gate: `quality-gates/japanese-line-break-gate.md`
