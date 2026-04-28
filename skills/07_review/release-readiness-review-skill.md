# Release Readiness Review Skill

## Purpose

LP公開直前に、QA / 法務 / セキュリティ / 計測 / レビューボードの全観点で公開可否を最終判定する。

## When to Use

- 公開直前

## Required Inputs

- QAレポート
- 法務監査レポート
- セキュリティ監査書
- 計測動作確認結果
- レビューボード判定（経営 / CV / ブランド）

## Step-by-Step Procedure

1. 各レポートを集約
2. 各観点の判定（PASS / NEEDS WORK / BLOCK）を確認
3. BLOCK が1つでもあれば公開不可
4. NEEDS WORK は重要度（BLOCKER / IMPORTANT / NIT）で判定
5. ロールバック計画の確認
6. 公開後監視項目の確認
7. 最終判定書 `outputs/08_review/final.md` を作成

## Output Format

```markdown
## Release Readiness Review

### 各観点判定
- 経営: PASS / NEEDS WORK / BLOCK
- CV: PASS / ...
- ブランド: PASS / ...
- 法務: PASS / ...
- セキュリティ: PASS / ...
- QA: PASS / ...

### BLOCK事項
- なし / 該当: [理由]

### NEEDS WORK事項
- BLOCKER:
- IMPORTANT:
- NIT:

### ロールバック計画
- 

### 公開後監視項目
- 

### 最終判定
- 公開承認 / 修正後再判定 / 公開不可
```

## Quality Criteria

- 全観点を確認
- BLOCK は必ず公開不可判定
- ロールバック計画あり
- 監視項目あり

## Common Failure Patterns

- BLOCK を見逃す
- ロールバック計画なし
- 監視項目なし

## Self Check

- [ ] 全観点確認
- [ ] BLOCK確認
- [ ] ロールバック / 監視あり

## Related Agents

- `lp-final-gatekeeper`
- `lp-release-manager`
