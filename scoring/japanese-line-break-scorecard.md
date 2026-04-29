# Japanese Line Break Scorecard

## Purpose

日本語コピーの改行・リズム品質を採点する（100点満点）。

## Score Breakdown

| 評価項目 | 配点 | 判断基準 |
|---|---:|---|
| 1. 助詞分断なし | 20 | 「を」「が」「に」の前後で分断なし |
| 2. 複合語分断なし | 20 | 「採用業務」等の複合語が分断なし |
| 3. 修飾語分断なし | 15 | 修飾語と名詞の分断なし |
| 4. PC / SP 改行分離 | 15 | br クラス制御 |
| 5. br タグ適正使用 | 10 | 装飾的 br ゼロ、`<p>` で段落分け |
| 6. 文字数バランス | 10 | 短・中・長の使い分け |
| 7. 句読点リズム | 5 | 適切配置で読みやすい |
| 8. 採用理由ログ | 5 | japanese-line-break-review.md 完備 |

合計: **100点**

## Passing Score

- **85点以上**: 納品可能
- **75〜84点**: 軽微修正
- **74点以下**: 主要改善

## Critical Fail Conditions

- 助詞の途中で改行
- 複合語の分断
- ランダム改行多数
- 連続 br での空行作成
- PC / SP 検証なし

## NG パターンチェック

```
❌ 採用<br>業務（複合語分断）
❌ 中小企業の<br>人事担当者（修飾語分断）
❌ 採用業務を、<br>削減します（助詞分断）
❌ <br><br><br>（連続br装飾）
❌ <p>テキスト<br>テキスト<br>テキスト</p>（段落をbrで作る）
```

## Review Questions

- 全コピーで助詞分断ないか
- 全コピーで複合語分断ないか
- PC / SP で改行が適切か
- br タグが必要最小限か
- リズムにメリハリがあるか

## Related

- skill: `skills/12_japanese_copy_rhythm/`
- agent: `lp-japanese-copy-rhythm-editor`
- gate: `quality-gates/japanese-line-break-gate.md`
- contract: `contracts/japanese-line-break-output-contract.md`
