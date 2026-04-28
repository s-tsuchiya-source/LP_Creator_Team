# Final Human Review Skill

## Purpose

LP納品前の最終 Human Quality 検査。`lp-final-gatekeeper` がこのスキルを使って人間品質を判定する。

## When to Use

- 納品直前の最終レビュー
- すべての validation 通過後
- final-acceptance-validation の前段

## Required Inputs

- 完成LP（コピー / デザイン / 実装）
- 各 scorecard の採点結果
- すべての validation ログ

## Step-by-Step Procedure

### 4階層検査

```
階層1: 単語レベル検査（AIっぽい危険語）
階層2: 文レベル検査（AIっぽい文構造）
階層3: セクションレベル検査（AIっぽいセクション）
階層4: 全体レベル検査（競合置き換えテスト）
```

### 詳細手順

#### Step 1: 危険語検査

`human-quality/ai-smell-detection-list.md` の危険語リストでLP全体を検索：

```
- 最適化
- 革新的
- 寄り添う
- 課題解決
- シームレス
- 業界をリード
- お客様第一
- 唯一無二
- 業界初
- 最高品質
```

連続使用（3つ以上）を検出 → 修正必須。

#### Step 2: NG文構造検査

```
- 「〜を実現します」連発
- 「お客様」「ユーザー」抽象化
- 機能羅列のみ
- 文がきれいすぎる（余白なし）
```

#### Step 3: NGセクション検査

各セクションが以下に該当しないか：

```
- FV: ターゲット明示なし、抽象キャッチ
- 課題: 業界一般論
- 解決策: 機能羅列
- 実績: 出典なき数値
- FAQ: 「ご安心ください」だけ
- CTA: 「お問い合わせ」だけ
```

#### Step 4: 競合置き換えテスト

LPコピー全体を、競合社名に置き換えて成立しないか確認：

```
✅ 不成立（自社固有）= 人間らしい
❌ 成立（汎用）= AIっぽい → 修正
```

#### Step 5: 5つの検証軸の総合確認

```
1. 競合置き換えテスト
2. 業務シーン再現テスト
3. 担当者の本音テスト
4. 数字の出典テスト
5. 商材文脈テスト
```

`human-quality/proof-of-humanity-check.md` の25-30項目チェックリストで採点。

## Output Format

### Final Human Review Report

```markdown
# Final Human Review Report

## 階層1: 危険語検査
| 危険語 | 出現箇所 | 連続使用 |
|---|---|---|
| 最適化 | FV / 解決策 | 連続使用なし |
| ... | ... | ... |

## 階層2: NG文構造
| パターン | 該当箇所 | 修正提案 |

## 階層3: NGセクション
| セクション | 問題 | 修正提案 |

## 階層4: 競合置き換えテスト
| 文 | 置き換え後 | 成立 / 不成立 |
| ... | ... | ✓/✗ |

成立率: ___%（低いほど良い）

## 5つの検証軸
| 検証軸 | 結果 |
|---|---|
| 競合置き換えテスト | PASS/FAIL |
| 業務シーン再現 | PASS/FAIL |
| 担当者の本音 | PASS/FAIL |
| 数字の出典 | PASS/FAIL |
| 商材文脈 | PASS/FAIL |

## 25-30項目チェック
- [ ] 全項目チェック完了
- 達成: ___/30

## scorecard
- human-naturalness-scorecard: ___/100
- anti-ai-smell-scorecard: ___/100

## 判定
- [ ] 合格（最終納品可）
- [ ] 修正必須（差し戻し）

## 差し戻し先（不合格の場合）
- 該当 agent / skill
```

## Quality Criteria

- 危険語の連続使用なし
- NG文構造なし
- NGセクションなし
- 競合置き換えテスト 90%以上不成立
- 5つの検証軸すべて PASS
- human-naturalness 85+
- anti-ai-smell 90+

## Common Failure Patterns

- 検査をスキップして「合格」とする
- 一部のセクションだけチェック
- 競合置き換えテストの省略
- 25-30項目チェックリストの飛ばし読み

## Self Check

- [ ] 4階層全てチェック
- [ ] 5つの検証軸すべてチェック
- [ ] 25-30項目チェックリスト完了
- [ ] scorecard 採点
- [ ] 不合格時の差し戻し先明示

## Related Agents

- `lp-final-gatekeeper`
- `lp-director`

## Related References

- `human-quality/ai-smell-detection-list.md`
- `human-quality/proof-of-humanity-check.md`
- `validation/anti-ai-output-validation.md`
- `validation/final-acceptance-validation.md`
- `scoring/human-naturalness-scorecard.md`
- `scoring/anti-ai-smell-scorecard.md`
