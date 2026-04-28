# Headline Generation Skill

## Purpose

3秒で価値が伝わるFVヘッドラインを生成する。

## When to Use

- FVヘッドライン作成時
- 各セクション見出し作成時

## Required Inputs

- 訴求軸
- ペルソナ
- オファー設計
- 業種playbook

## Step-by-Step Procedure

1. 訴求軸を再確認
2. ヘッドラインを5案以上作成（型を変える）：
   - ベネフィット型「[誰の][課題]を[改善]」
   - 数字型「[実績数][カテゴリ]No.1」
   - 質問型「[共通悩み]ありませんか？」
   - 否定型「[よくある誤解]はもう不要」
   - ストーリー型「[Before]だった私が[After]になった理由」
3. 各案を 4U（Useful / Urgent / Unique / Ultra-specific）で評価
4. 最優秀1案+次点2案を選定
5. サブコピー（補足機能）を作成
6. `outputs/04_copy/headlines.md` に保存

## Output Format

```markdown
## Headlines

### Main Candidate
- メインキャッチ:
- サブコピー:
- CTA文言:

### Alternatives
- 案A:
- 案B:

### 4U Evaluation
| 案 | Useful | Urgent | Unique | Ultra-specific | 合計 |
```

## Quality Criteria

- 5案以上作成
- 4Uのうち2つ以上満たす
- 3秒で意味取れる
- ペルソナの関心と一致

## Common Failure Patterns

- 商品名だけ
- 抽象的「世界を変える」
- 4U評価なし
- 案が1案のみ

## Self Check

- [ ] 5案以上作成済み
- [ ] 4U評価済み
- [ ] 3秒テスト合格

## Related Agents

- `lp-headline-specialist`

## Components 参照

- `components/first-view/`
