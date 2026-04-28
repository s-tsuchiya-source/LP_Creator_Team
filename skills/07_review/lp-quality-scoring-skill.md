# LP Quality Scoring Skill

## Purpose

完成LPを `scoring/lp-master-scorecard.md` に基づき採点し、納品可否を判断する。

## When to Use

- 各フェーズ完了時
- 最終納品判定時

## Required Inputs

- 完成成果物
- 該当 scorecard

## Step-by-Step Procedure

1. 該当 scorecard を選定
2. 各評価項目を100点満点で採点
3. Critical Fail Conditions に該当しないか確認
4. 総合スコアを算出
5. 結果に応じて差し戻し / 修正 / 納品判定
   - 90+ : 納品可能
   - 80〜89 : 軽微修正
   - 70〜79 : 主要改善必須
   - 69- : 作り直し
6. `outputs/08_review/scoring.md` に結果を保存

## Output Format

```markdown
## LP Quality Scoring

### 該当scorecard
- scoring/lp-master-scorecard.md

### 評価結果
| 項目 | 配点 | 得点 | 備考 |

### 総合スコア
- XX / 100

### Critical Fail
- なし / 該当: [理由]

### 判定
- 納品可能 / 軽微修正 / 主要改善 / 作り直し

### 改善アクション
- 1.
- 2.
```

## Quality Criteria

- 全項目を採点
- Critical Fail を確認
- 総合スコアと判定が一致
- 改善アクション具体的

## Common Failure Patterns

- 採点が主観的
- Critical Fail を見逃す
- 80未満で納品

## Self Check

- [ ] 全項目採点済み
- [ ] Critical Fail確認
- [ ] 改善アクション具体的

## Related Agents

- `lp-final-gatekeeper`
- `lp-director`
