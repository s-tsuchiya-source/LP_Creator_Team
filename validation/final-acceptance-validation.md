# Final Acceptance Validation

## Purpose

LP公開直前の最終納品判定。`lp-final-gatekeeper` がすべての validation・scorecard を統合判定する。

## What to Validate

すべての前段 validation の合格 + 必須 scorecard の達成。

## Passing Criteria

**すべて合格しない限り納品禁止**：

### Validation
- [ ] director-behavior-validation 合格
- [ ] agent-selection-validation 合格
- [ ] emotional-cvr-validation 合格
- [ ] scorecard-enforcement-validation 合格
- [ ] code-practicality-validation 合格
- [ ] lp-structure-completeness-validation 合格
- [ ] anti-ai-output-validation 合格

### Scorecard（必須スコア）
- [ ] lp-master-scorecard: **90点以上**
- [ ] emotional-cvr-scorecard: **85点以上**
- [ ] benefit-clarity-scorecard: **85点以上**
- [ ] expectation-scorecard: **85点以上**
- [ ] self-relevance-scorecard: **85点以上**
- [ ] human-naturalness-scorecard: **85点以上**
- [ ] anti-ai-smell-scorecard: **90点以上**
- [ ] code-practicality-scorecard: **85点以上**
- [ ] legal-risk-scorecard: **95点以上**
- [ ] final-output-scorecard: **90点以上**

### Critical Fail
- [ ] 法務 Critical Fail なし
- [ ] 計測 Critical Fail なし
- [ ] 主要動作 Critical Fail なし
- [ ] AIっぽさ Critical Fail なし

## Failure Criteria

- 1つでも validation 不合格
- 1つでも必須 scorecard 未達
- Critical Fail 該当あり

## Critical Fail Conditions

**点数に関係なく公開不可**：

- 法令違反表現あり
- 個人情報の生送信あり
- 主要ブラウザで崩れ
- AIっぽさ Critical Fail（どの会社にも当てはまるFV等）
- メインCV不在
- 計測完全欠落

## Required Evidence

すべての前段 validation のログ：

- `outputs/08_review/agent-selection-log.md`
- `outputs/08_review/scorecard-summary.md`
- `outputs/08_review/human-quality-review.md`
- `outputs/08_review/code-practicality-review.md`
- `outputs/08_review/lp-structure-validation.md`

## Output Log

### final-acceptance-report.md テンプレート

```markdown
# Final Acceptance Report

## 案件情報
- 案件名:
- 業種:
- 公開予定日:

## Validation 結果
| Validation | 結果 |
|---|---|
| director-behavior | PASS / FAIL |
| agent-selection | PASS / FAIL |
| emotional-cvr | PASS / FAIL |
| scorecard-enforcement | PASS / FAIL |
| code-practicality | PASS / FAIL |
| lp-structure-completeness | PASS / FAIL |
| anti-ai-output | PASS / FAIL |

## 必須スコアカード
| Scorecard | 必須スコア | 実績 | 判定 |
|---|---|---|---|
| lp-master | 90+ | ___ | PASS/FAIL |
| emotional-cvr | 85+ | ___ | PASS/FAIL |
| benefit-clarity | 85+ | ___ | PASS/FAIL |
| expectation | 85+ | ___ | PASS/FAIL |
| self-relevance | 85+ | ___ | PASS/FAIL |
| human-naturalness | 85+ | ___ | PASS/FAIL |
| anti-ai-smell | 90+ | ___ | PASS/FAIL |
| code-practicality | 85+ | ___ | PASS/FAIL |
| legal-risk | 95+ | ___ | PASS/FAIL |
| final-output | 90+ | ___ | PASS/FAIL |

## Critical Fail 確認
| カテゴリ | 該当 |
|---|---|
| 法務 | あり / なし |
| 計測 | あり / なし |
| 主要動作 | あり / なし |
| AIっぽさ | あり / なし |

## 最終判定
- [ ] 公開承認
- [ ] 修正後再判定
- [ ] 公開不可

## 公開後監視項目
- ...

## ロールバック計画
- ...
```

## Related Files

- すべての validation ファイル
- すべての scorecard
- `quality-gates/09-final-release-gate.md`
- `contracts/final-delivery-contract.md`
- agent: `lp-final-gatekeeper`
