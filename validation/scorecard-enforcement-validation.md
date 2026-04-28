# Scorecard Enforcement Validation

## Purpose

`lp-director` および各エージェントが、scorecard で 80点未満の成果物を本当に差し戻したかを検証する。

## What to Validate

- 80点未満を差し戻したか
- 90点未満を納品推奨にしていないか
- Critical Fail を見逃していないか
- 差し戻し理由が明示されているか
- 修正後に再採点しているか

## Passing Criteria

- 全成果物が該当 scorecard で採点されている
- 80点未満があれば差し戻しログがある
- Critical Fail 該当なし、または該当時に必ず差し戻し
- 再採点ログが存在

## Failure Criteria

- 採点なしで納品
- 80点未満が放置されている
- Critical Fail を「軽微」として通過させた
- 再採点ログがない

## Critical Fail Conditions

- 法務 Critical Fail を見逃した
- 個人情報生送信を見逃した
- 出典なき断定数値を放置
- 主要ブラウザ崩れを「許容範囲」とした

## Required Evidence

- `outputs/08_review/scorecard-summary.md`（全 scorecard の集計）
- 差し戻しログ（該当時）
- 再採点ログ（該当時）

## Output Log

### scorecard-summary.md テンプレート

```markdown
# Scorecard Summary

## 必須スコアカード
| Scorecard | スコア | 必須スコア | 判定 |
|---|---|---|---|
| lp-master-scorecard | ___ | 90+ | PASS/FAIL |
| emotional-cvr-scorecard | ___ | 85+ | PASS/FAIL |
| benefit-clarity-scorecard | ___ | 85+ | PASS/FAIL |
| expectation-scorecard | ___ | 85+ | PASS/FAIL |
| self-relevance-scorecard | ___ | 85+ | PASS/FAIL |
| human-naturalness-scorecard | ___ | 85+ | PASS/FAIL |
| anti-ai-smell-scorecard | ___ | 90+ | PASS/FAIL |
| code-practicality-scorecard | ___ | 85+ | PASS/FAIL |
| legal-risk-scorecard | ___ | 95+ | PASS/FAIL |
| final-output-scorecard | ___ | 90+ | PASS/FAIL |

## Critical Fail Conditions
| Condition | 該当 | 詳細 |

## 差し戻し履歴
| 日時 | 該当 scorecard | スコア | 差し戻し先 | 修正後スコア |

## 最終判定
- 全 PASS / 修正必須 / 公開不可
```

## Related Files

- `scoring/` 全 scorecard
- `quality-gates/`
- agent: `lp-director` / `lp-final-gatekeeper`
