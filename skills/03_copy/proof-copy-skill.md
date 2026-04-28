# Proof Copy Skill

## Purpose

実績・お客様の声・権威要素のコピーを、誇大表現なくCVに繋がる形で執筆する。

## When to Use

- 実績・事例セクション執筆時
- 信頼性訴求時

## Required Inputs

- 実績データ（顧客名 / 数字 / 受賞 / 認証）
- 顧客許諾情報

## Step-by-Step Procedure

1. 数値実績を出典・条件付きで整理
2. お客様の声は許諾済みのみ採用
3. 比較表を客観評価軸で作成
4. メディア掲載・受賞は正式名称で
5. 「No.1」「最高」「最安」は根拠必須（`knowledge/legal-expression-rules/no1-expression-check.md`参照）
6. Before/After は誇大表現NG
7. `outputs/04_copy/proof.md` に保存

## Output Format

```markdown
## Proof Copy

### 数値実績
- 「導入企業 X社（YYYY年MM月時点 / 自社調べ）」

### お客様の声
- [事例1]: 業種 / 規模 / コメント / 効果数値

### 比較表
| 項目 | 自社 | A社 | B社 |

### 受賞・認証
- [賞名]（YYYY年・主催）
```

## Quality Criteria

- 全数値に出典
- No.1表現に根拠
- 顧客名・写真は許諾済み
- 比較項目が客観的

## Common Failure Patterns

- 出典なき数値
- 根拠なきNo.1
- 許諾なき名前掲載
- 比較対象不明の優位性

## Self Check

- [ ] 全数値に出典あり
- [ ] No.1根拠あり
- [ ] 許諾確認済み

## Related Agents

- `lp-proof-copywriter`
- `lp-legal-expression-checker`

## Components 参照

- `components/proof/`
