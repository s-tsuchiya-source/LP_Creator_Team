# Anti-AI Output Validation

## Purpose

LP出力が「AIっぽい」テンプレート的・抽象的・無機質な仕上がりになっていないかを検証する。

人間が現場を理解して書いたような具体性・自然さ・実在感を担保する。

## What to Validate

### コピー観点
- 抽象語が多すぎないか（「最適化」「革新的」「寄り添う」「課題解決」を雑に使っていないか）
- どの会社にも当てはまるコピーになっていないか
- 具体的な現場描写があるか
- ユーザーの本音が入っているか
- 実在感のあるベネフィットがあるか
- 機能羅列で終わっていないか

### デザイン観点
- 汎用的な青いグラデーションheroになっていないか
- AI生成画像っぽい不自然さ（手・顔・光沢・抽象未来都市）がないか
- 意味のないアイコン羅列になっていないか
- 文字量・余白が整いすぎて印象が薄くないか
- CTAがテンプレート的でないか

### 全体観点
- 商材文脈に合った画像・デザインになっているか
- 事例・証拠が実在感を持っているか
- FAQが本当にユーザーの不安に答えているか
- 「競合社名に置き換えても成立する」コピーになっていないか

## Passing Criteria

- `human-naturalness-scorecard.md`: **85点以上**
- `anti-ai-smell-scorecard.md`: **90点以上**
- 「競合社名に置き換えても成立する」コピーがない
- 商材独自の現場描写・本音・実在感がある

## Failure Criteria

- human-naturalness 85未満 or anti-ai-smell 90未満
- 抽象語の連続使用（3つ以上連続）
- 機能羅列のみ
- 汎用ストックフォト多用

## Critical Fail Conditions

**点数に関係なく差し戻し**：

- どの会社にも当てはまるFV
- 抽象語だらけのコピー
- 意味の薄い AI 風ビジュアル（抽象未来都市・3D人物だけ）
- 実在感のない事例（「A社では〜」だけで詳細なし）
- CTAが「お問い合わせ」だけで行動理由なし

## Required Evidence

- 全コピー精読チェックリスト
- 画像・デザイン精査チェックリスト
- 「競合置き換えテスト」結果
- ストックフォト依存度チェック

## Output Log

### human-quality-review.md テンプレート

```markdown
# Human Quality Review

## AIっぽさ検出結果
| 検出項目 | 該当箇所 | 修正提案 |
|---|---|---|
| 抽象語の連続使用 | | |
| 競合置き換え可能コピー | | |
| 機能羅列 | | |
| 汎用 hero画像 | | |
| 意味の薄いアイコン羅列 | | |

## 抽象表現の修正一覧
| 修正前 | 修正後 |

## 具体化した表現
- ...

## 現場感を追加した箇所
- ...

## 売り込み臭を下げた箇所
- ...

## 画像・デザインの人間味チェック
- [ ] 商材文脈に合うビジュアル
- [ ] AI画像っぽい不自然さなし
- [ ] アイコン・イラストが汎用素材だけになっていない

## 残るリスク
- ...

## scorecard
- human-naturalness-scorecard: ___/100
- anti-ai-smell-scorecard: ___/100

## 判定
- 合格 / 不合格
- 不合格時の差し戻し先
```

## Related Files

- `human-quality/anti-ai-writing-principles.md`
- `human-quality/human-copy-rules.md`
- `human-quality/non-generic-design-rules.md`
- `human-quality/image-direction-rules.md`
- `human-quality/ai-smell-detection-list.md`
- `skills/09_humanization/` 全 skill
- `scoring/human-naturalness-scorecard.md`
- `scoring/anti-ai-smell-scorecard.md`
- agent: `lp-chief-copywriter` / `lp-creative-director` / `lp-final-gatekeeper`
