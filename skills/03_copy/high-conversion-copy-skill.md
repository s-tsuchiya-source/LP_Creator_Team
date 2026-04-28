# High Conversion Copy Skill

## Purpose

CV最大化のためのセールスコピーを、購買心理フレームワークで設計する。

## When to Use

- コピーフェーズ
- 問題提起〜解決策の本文執筆時

## Required Inputs

- ペルソナ
- インサイト整理書
- 訴求軸
- 商材情報

## Step-by-Step Procedure

1. PASONA / QUEST / AIDA から最適フレームワークを選定
2. 共感→緊張→解決の流れで本文を組む
3. ベネフィットを具体数字で表現
4. 行動を促す動詞を散りばめる
5. ペルソナの言葉を使う（業界用語の自然な利用）
6. 誇大表現・No.1表現は根拠付きのみ
7. `outputs/04_copy/sales.md` に保存

## Output Format

```markdown
## High Conversion Copy

### 問題提起セクション
- 見出し:
- リード文:
- 悩みリスト（3〜5個）:

### 共感セクション
- 見出し:
- 本文:

### 解決策セクション
- 見出し:
- リード文:
- 解決アプローチ（3個）:

### ベネフィットセクション
- 機能 → ベネフィット翻訳済み
```

## Quality Criteria

- 共感→緊張→解決の流れ
- ベネフィット具体的
- ペルソナ言葉
- 誇大表現なし

## Common Failure Patterns

- 機能羅列のみ
- 「業界No.1」根拠なし
- 抽象的訴求（「便利」「品質が良い」）
- 営業臭強すぎ

## Self Check

- [ ] 4つの問い（誰向け/何が得られる/なぜ信頼/なぜ今）に答えているか
- [ ] ペルソナ言葉になっているか
- [ ] 誇大表現なしか

## Related Agents

- `lp-sales-copywriter`
- `lp-chief-copywriter`

## Components 参照

- `components/section/problem-section-patterns.md`
- `components/section/solution-section-patterns.md`
