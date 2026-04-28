# Legal Expression Review Skill

## Purpose

LP内の表現が景表法・薬機法・特商法・各業法に準拠しているか監査する。

## When to Use

- コピー完成後
- 公開前

## Required Inputs

- 全コピー
- 商材情報（業界判別）
- 実績データの出典

## Step-by-Step Procedure

1. 業界該当法令を特定（医療 / 美容 / 金融 / 不動産 / 教育 等）
2. 全コピーから法的リスク表現を抽出
3. No.1表現の根拠確認
4. 数値の出典確認
5. Before / After 表現の妥当性
6. 効果効能の業法準拠
7. 個人情報取扱の同意UI
8. 修正案を提示
9. `outputs/08_review/legal.md` に保存

## Output Format

```markdown
## Legal Expression Review

### 該当法令
- 景品表示法
- 薬機法（該当時）
- 特商法
- ...

### リスク表現一覧
| 表現 | 法令 | リスク | 修正案 |

### No.1表現チェック
- 根拠あり / 修正必要

### 数値出典チェック
- 全出典あり / 不足あり

### 判定
- 公開可 / 修正後可 / 公開不可
```

## Quality Criteria

- 業界法令を特定
- 全リスク表現を抽出
- 修正案具体的

## Common Failure Patterns

- 業界該当法令の確認なし
- 「営業表現」として残す
- 出典なき数値の見逃し

## Self Check

- [ ] 業界法令特定
- [ ] 全リスク表現抽出
- [ ] 修正案具体的

## Related Agents

- `lp-legal-expression-checker`

## Knowledge 参照

- `knowledge/legal-expression-rules/`
