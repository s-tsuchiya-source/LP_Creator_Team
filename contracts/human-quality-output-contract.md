# Human Quality Output Contract

## Purpose

Human Quality Layer の検査結果を構造化された形で出力するための contract。
`outputs/08_review/human-quality-review.md` の必須形式。

## Required Sections

### 1. AIっぽさ検出結果
- 危険語リスト
- 連続使用の有無
- 該当セクション

### 2. 抽象表現の修正一覧
- Before / After の対比
- 修正理由

### 3. 具体化した表現
- 数字の追加（出典付き）
- 業務シーンの追加
- 人物の具体化

### 4. 現場感を追加した箇所
- 担当者の本音
- 業務の特定瞬間
- ペルソナの語彙

### 5. 売り込み臭を下げた箇所
- 「資料を見るだけOK」要素
- 「営業電話なし」明示
- 「お断り歓迎」明示

### 6. 画像・デザインの人間味チェック
- 装飾画像の削減
- 商材文脈整合
- AI生成感の不自然さチェック

### 7. 残るリスク
- 修正できなかった箇所
- 理由
- 影響範囲

### 8. 最終判定
- 合格 / 不合格
- 該当 scorecard スコア
- 不合格時の差し戻し先

## Required Fields

- 危険語リスト + 該当箇所
- Before / After の修正例（最低3箇所）
- 競合置き換えテスト結果
- human-naturalness-scorecard スコア
- anti-ai-smell-scorecard スコア
- 最終判定

## Optional Fields

- 業務シーン追加の詳細
- 画像変更履歴
- ペルソナ語彙との整合検証

## Format Rules

```markdown
# Human Quality Review

## 1. AIっぽさ検出結果

### 危険語
| 危険語 | 出現箇所 | 連続使用 |
|---|---|---|

### NG文構造
| パターン | 該当箇所 |

### NGセクション
| セクション | 問題 |

## 2. 抽象表現の修正一覧

| Before | After | 修正理由 |
|---|---|---|

## 3-7. （省略・テンプレート参照）

## 8. 最終判定

- human-naturalness-scorecard: ___/100（必須85+）
- anti-ai-smell-scorecard: ___/100（必須90+）
- 競合置き換えテスト: ___% 不成立（必須90%+）

判定: 合格 / 不合格

差し戻し先（不合格の場合）:
- ...
```

## Acceptance Criteria

- 全 8セクション含まれる
- human-naturalness 85+
- anti-ai-smell 90+
- 競合置き換えテスト 90%以上不成立
- Before / After 例が最低3箇所
- 残るリスクが明示

## Rejection Criteria

- セクション欠落
- スコア未達
- 競合置き換えテスト不合格
- Before / After 例の欠落

## Related

- skill: `skills/09_humanization/anti-ai-copy-editing-skill.md`
- skill: `skills/09_humanization/final-human-review-skill.md`
- validation: `validation/anti-ai-output-validation.md`
- scorecard: `scoring/human-naturalness-scorecard.md`
- scorecard: `scoring/anti-ai-smell-scorecard.md`
- agent: `lp-final-gatekeeper`
