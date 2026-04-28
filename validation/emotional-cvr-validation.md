# Emotional CVR Validation

## Purpose

LPに Emotional CVR Layer（メリット・期待・安心・自分ごと化・行動意欲・CV後安心）が反映されているかを検証する。

## What to Validate

- メリットが明確か（機能羅列で終わっていないか）
- 期待感が誇張ではなく根拠ベースか
- 自分ごと化要素が FV と課題セクションにあるか
- 不安から期待への転換があるか（6不安カテゴリ対応）
- CTA直前の行動意欲が設計されているか
- CV後の流れが分かるか

## Passing Criteria

以下スコア全達成：

- `emotional-cvr-scorecard.md`: **85点以上**
- `benefit-clarity-scorecard.md`: **85点以上**
- `expectation-scorecard.md`: **85点以上**
- `self-relevance-scorecard.md`: **85点以上**

加えて以下を満たす：

- 9段階感情ジャーニーが構成に反映されている
- ベネフィットが「機能 → 業務 → 心理 → 評価 → 未来」まで翻訳されている
- 数値根拠 / 事例根拠 / プロセス根拠 / 第三者根拠 のうち最低2種類配置
- 「個人差・業種差」明記

## Failure Criteria

- 4 scorecard のうち1つでも 85未満
- 9段階感情ジャーニーが断絶している
- 機能羅列のみのコピー
- ベネフィットの数値根拠なし

## Critical Fail Conditions

- 期待感が「絶対」「100%」など誇大表現で作られている
- 自分ごと化要素が皆無（「みなさん」「すべての方」だけ）
- 不安解消セクションが完全欠落
- CV後の流れが完全に不明
- CTA文言が「お問い合わせ」だけ

## Required Evidence

- 4 scorecard の採点結果
- 9段階感情ジャーニー反映マップ
- ベネフィット変換ログ（7段階）

## Output Log

### emotional-cvr-validation-log.md テンプレート

```markdown
# Emotional CVR Validation Log

## Scorecards
- emotional-cvr: ___/100
- benefit-clarity: ___/100
- expectation: ___/100
- self-relevance: ___/100

## 9段階感情ジャーニー反映
- [1] 流入 → 自分ごと化: ✓/✗
- [2] 課題共感: ✓/✗
- [3] 期待: ✓/✗
- [4] 信頼: ✓/✗
- [5] 不安解消: ✓/✗
- [6] 行動意欲: ✓/✗
- [7] CV直前: ✓/✗
- [8] CV後: ✓/✗

## 判定
- 合格 / 不合格
- 不合格時の差し戻し先
```

## Related Files

- `experience-design/cv-emotion-journey.md`
- `experience-design/emotional-cvr-principles.md`
- `contracts/emotional-cvr-output-contract.md`
- `contracts/experience-value-output-contract.md`
- 4 scorecards: emotional-cvr / benefit-clarity / expectation / self-relevance
- agent: `lp-chief-copywriter` / `lp-final-gatekeeper`
