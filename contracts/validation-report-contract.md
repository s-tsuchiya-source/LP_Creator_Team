# Validation Report Contract

## Purpose

各 validation の検証結果を構造化された形で記録するための contract。
`outputs/08_review/validation-report.md` の必須形式。

## Required Sections

### 1. 検証対象
- どのフェーズ・どの成果物を検証したか

### 2. 検証シナリオ
- 検証で実施したシナリオ
- 入力・期待動作

### 3. 期待動作
- 合格時の動作
- 受け入れ条件

### 4. 実際の動作
- 実測動作
- 差分があれば明示

### 5. 合格 / 不合格
- 各 validation の判定

### 6. 不合格理由
- 不合格の場合、具体的な理由
- 関連 scorecard スコア

### 7. 差し戻し先
- どの agent / skill に差し戻すか
- 差し戻し優先度

### 8. 修正指示
- 具体的な修正内容
- 参照すべきファイル

### 9. 再検証結果
- 修正後の再採点結果
- 最終合否

## Required Fields

各 validation について：

- validation 名
- 期待動作
- 実際の動作
- 合格 / 不合格
- 該当 scorecard スコア（必須スコア達成度）

## Optional Fields

- 修正履歴（複数回差し戻しの場合）
- 関連ログのパス
- 参照ドキュメント

## Format Rules

```markdown
# Validation Report

## サマリー
| Validation | 結果 |
|---|---|
| director-behavior-validation | PASS / FAIL |
| agent-selection-validation | PASS / FAIL |
| emotional-cvr-validation | PASS / FAIL |
| scorecard-enforcement-validation | PASS / FAIL |
| code-practicality-validation | PASS / FAIL |
| lp-structure-completeness-validation | PASS / FAIL |
| anti-ai-output-validation | PASS / FAIL |
| final-acceptance-validation | PASS / FAIL |

## 詳細

### Validation 1: director-behavior-validation
- 検証対象:
- 検証シナリオ:
- 期待動作:
- 実際の動作:
- 合格 / 不合格:
- 不合格理由（あれば）:
- 差し戻し先:
- 修正指示:
- 再検証結果:

### Validation 2: agent-selection-validation
（同様）

...
```

## Acceptance Criteria

- 全 validation の結果が記録されている
- 不合格時に必ず差し戻し先・修正指示
- 再検証結果が記録されている

## Rejection Criteria

- validation 欠落
- 不合格理由不明
- 差し戻し先未記載

## Related

- すべての `validation/` ファイル
- すべての `scoring/` scorecard
- agent: `lp-director` / `lp-final-gatekeeper`
