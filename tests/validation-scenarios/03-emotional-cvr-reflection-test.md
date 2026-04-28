# Test 03: Emotional CVR 反映テスト

## Purpose

LP出力に Emotional CVR Layer（メリット・期待・自分ごと化・不安解消・CV直前行動意欲・CV後安心）が反映されているかを検証する。

## Scenario

完成した LP コピー / 構成 / デザイン に対して、9段階感情ジャーニーが反映されているか検証。

## Expected Behavior

### 9段階感情ジャーニーの反映

各セクションで対応する感情が機能している：

| 段階 | 期待感情 | 対応セクション |
|---|---|---|
| 1. 流入 | 興味 | FV |
| 2. 自分ごと化 | 共感 | FV / 課題提起 |
| 3. 課題共感 | 緊張 | 課題提起 |
| 4. 期待 | わくわく | 解決策 / 機能 |
| 5. 信頼 | 安心 | 実績 / 事例 |
| 6. 不安解消 | 確信 | FAQ / 比較表 |
| 7. 行動意欲 | 推進力 | 最終CTA前 |
| 8. CV直前 | 決断 | 最終CTA |
| 9. CV後 | 安心 | サンクスページ |

### 4 scorecard での採点

```
- emotional-cvr-scorecard: 85+
- benefit-clarity-scorecard: 85+
- expectation-scorecard: 85+
- self-relevance-scorecard: 85+
```

## Failure Pattern

❌ 9段階の途中で感情ジャーニーが断絶
❌ 機能羅列のみで「期待」「安心」がない
❌ 自分ごと化要素が皆無
❌ CV後の流れが完全に不明
❌ 4 scorecard のうち1つでも 85未満

## Pass Criteria

- 9段階すべてが LP のいずれかのセクションで機能
- 4 Emotional CVR scorecards 全て 85+
- 「自分ごと化」「期待」「安心」要素が確認できる

## サンプル評価例

### NG例: 機能羅列で期待が薄い

```
## 解決策
- API連携機能
- 自動メール機能
- ダッシュボード機能
```

→ 期待感ゼロ。何が変わるか分からない。

### OK例: ベネフィット + 期待感

```
## あなたの業務が、こう変わります

### 朝
ダッシュボードを開くだけで状況把握。
「あ、ここ対応済みだな」と確認するだけ。

### 日中
重要な意思決定に集中できる。
手作業のデータ集計はゼロ。

### 夕方
自動レポートをチェックするだけ。
残業せずに帰れる。

これを実現するのは、API連携・自動メール・ダッシュボード機能です。

※ 自社調べ・100社平均・効果には個人差があります
```

→ 期待感あり、未来像あり、ベネフィット → 機能 の順序OK。

## Related Validation

- `validation/emotional-cvr-validation.md`

## Related Scorecards

- `scoring/emotional-cvr-scorecard.md`
- `scoring/benefit-clarity-scorecard.md`
- `scoring/expectation-scorecard.md`
- `scoring/self-relevance-scorecard.md`

## Related Rubric

- `tests/evaluation-rubrics/emotional-cvr-rubric.md`
