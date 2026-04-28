# LP Structure Completeness Validation

## Purpose

LP構成として必須の流れが網羅されているかを検証する。
案件タイプにより省略可能な項目は、`lp-director` の理由付き判断を許容する。

## What to Validate

LP Structure Blueprint の必須16項目が、案件タイプに応じて適切に構成されているか。

### 必須フロー（16項目）

```
1. 流入意図の受け止め（Traffic Intent Match）
2. ファーストビュー（First View）
3. 誰向けかの明示
4. 得られるメリット
5. 課題・悩みの言語化
6. 放置リスク
7. 解決策の提示
8. 解決メカニズム
9. 具体的なベネフィット
10. 証拠・実績・事例
11. 競合・代替手段との違い
12. 導入・利用の流れ
13. 不安解消FAQ
14. CTA直前の行動理由
15. CV後に何が起きるか
16. 最終CTA
```

## Passing Criteria

- `lp-structure-completeness-scorecard.md`: **85点以上**
- 必須項目すべて含まれている、または省略項目が理由付きで明示
- セクション順序が `lp-structure-blueprint/high-converting-lp-flow.md` と整合

## Failure Criteria

- 必須項目が理由なしに欠落
- セクション順序が断絶（共感→解決→証拠 の流れが崩れている）
- CTA配置が1箇所のみ

## Critical Fail Conditions

- 「ファーストビュー」がない、または機能していない
- 「最終CTA」がない
- 「証拠・実績・事例」がない
- 「不安解消FAQ」がない
- 「CV後に何が起きるか」が完全に不明

## 案件タイプ別の省略可能項目

`lp-director` が理由付きで省略可能な項目：

### セミナー / ウェビナーLP
- 省略可: 競合との違い（業界共通テーマの場合）
- 必須: 開催概要 / プログラム / 講師紹介

### EC / 物販LP
- 省略可: 「導入・利用の流れ」（即購入の場合）
- 必須: 価格 / 配送 / 返金保証

### ローカルサービスLP
- 省略可: 「競合との違い」（地域訴求の場合）
- 必須: アクセス / 営業時間 / 電話CTA

### 採用LP（カジュアル面談特化）
- 省略可: 「競合との違い」
- 必須: 1日の流れ / 社員インタビュー / 選考フロー

省略する場合は、`outputs/08_review/lp-structure-validation.md` に必ず理由を記録。

## Required Evidence

- `outputs/03_structure/sections.md`
- `lp-structure-blueprint/high-converting-lp-flow.md` との照合結果
- 省略項目の理由（あれば）

## Output Log

### lp-structure-validation.md テンプレート

```markdown
# LP Structure Validation

## 案件タイプ
- [新規LP / 改善 / 広告 / BtoB / 採用 / SaaS / セミナー / EC / ローカル]

## 必須16項目チェック
| # | 項目 | 含有 | 配置セクション | 備考 |
|---|---|---|---|---|
| 1 | 流入意図の受け止め | ✓/✗ | FV | |
| 2 | ファーストビュー | ✓/✗ | FV | |
| 3 | 誰向けかの明示 | ✓/✗ | FV / 課題セクション | |
| 4 | 得られるメリット | ✓/✗ | FV / 解決策 | |
| 5 | 課題・悩みの言語化 | ✓/✗ | 課題セクション | |
| 6 | 放置リスク | ✓/✗ | 課題セクション | |
| 7 | 解決策の提示 | ✓/✗ | 解決策セクション | |
| 8 | 解決メカニズム | ✓/✗ | 機能セクション | |
| 9 | 具体的なベネフィット | ✓/✗ | 機能 / 強み | |
| 10 | 証拠・実績・事例 | ✓/✗ | 実績 / 事例 | |
| 11 | 競合との違い | ✓/✗ | 比較表 | |
| 12 | 導入・利用の流れ | ✓/✗ | 導入フロー | |
| 13 | 不安解消FAQ | ✓/✗ | FAQ | |
| 14 | CTA直前の行動理由 | ✓/✗ | 最終CTA直前 | |
| 15 | CV後に何が起きるか | ✓/✗ | 最終CTA / サンクスページ | |
| 16 | 最終CTA | ✓/✗ | 最終CTA | |

## 省略項目
| # | 項目 | 省略理由 |

## scorecard
- lp-structure-completeness-scorecard: ___/100

## 判定
- 合格 / 不合格
```

## Related Files

- `lp-structure-blueprint/high-converting-lp-flow.md`
- `scoring/lp-structure-completeness-scorecard.md`
- `contracts/lp-structure-blueprint-contract.md`
- agent: `lp-structure-designer` / `lp-director`
