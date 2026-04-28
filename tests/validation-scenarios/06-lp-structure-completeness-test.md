# Test 06: LP構成網羅性テスト

## Purpose

LP構成として必須16項目が網羅されているかを検証する。

## Scenario

完成した LP セクション構成を検証：

```
outputs/03_structure/sections.md
outputs/03_structure/wireframe.md
```

## Expected Behavior

### 16必須項目チェック

```
1. 流入意図の受け止め
2. ファーストビュー
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

各項目について：

```
- 含有 / 省略
- 配置セクション
- 省略の場合は理由
```

### 案件タイプ別の省略可能性

`lp-director` が以下の理由で省略を判断可能：

#### セミナー / ウェビナー
- 省略可: 競合との違い

#### EC / 物販
- 省略可: 「導入・利用の流れ」（即購入時）

#### ローカルサービス
- 省略可: 「競合との違い」（地域訴求時）

#### 採用LP（カジュアル面談）
- 省略可: 「競合との違い」

省略する場合は、必ず `outputs/08_review/lp-structure-validation.md` に理由を記録。

## Failure Pattern

❌ ファーストビューがない、または機能していない
❌ 最終CTAがない
❌ 証拠・実績がない
❌ 不安解消FAQがない
❌ CV後に何が起きるか完全不明
❌ 必須項目が理由なしに欠落
❌ セクション順序断絶（共感→解決→証拠 の流れ崩れ）

## Pass Criteria

- 16必須項目すべて含有、または省略項目に理由
- セクション順序が論理的
- lp-structure-completeness-scorecard 85+
- Critical Fail なし

## サンプル評価例

### 入力（不完全構成）

```
1. FV
2. 機能羅列
3. 価格
4. CTA
```

→ 課題提起 / 解決約束 / 実績 / 比較 / FAQ / CV後 が欠落。

### 期待される検査結果

```
## LP Structure Validation

### 必須16項目チェック
| # | 項目 | 含有 | 省略理由 |
|---|---|---|---|
| 1 | 流入意図 | ✓ | |
| 2 | FV | ✓ | |
| 3 | 誰向け明示 | ✗ | 理由なし → 不合格 |
| 4 | メリット | ✓ | |
| 5 | 課題言語化 | ✗ | 理由なし → 不合格 |
| ... | ... | ... | ... |

### 判定
- lp-structure-completeness-scorecard: 35 / 100
- Critical Fail: 課題提起なし、FAQなし、CV後なし
- 結果: 主要改善必須

### 差し戻し先
- lp-structure-designer
```

## Related Validation

- `validation/lp-structure-completeness-validation.md`

## Related Scorecard

- `scoring/lp-structure-completeness-scorecard.md`

## Related Files

- `lp-structure-blueprint/high-converting-lp-flow.md`
- `contracts/lp-structure-blueprint-contract.md`

## Related Rubric

- `tests/evaluation-rubrics/lp-structure-rubric.md`
