# Section Architecture Skill

## Purpose

LP全体のセクション順序・各セクションの目的・要素を設計する。

## When to Use

- 構成フェーズ
- FV以降の全体構成決定時

## Required Inputs

- 戦略書
- ペルソナ
- 訴求軸
- 業種別 playbook（該当時）

## Step-by-Step Procedure

1. 案件タイプを判別
2. `industry-playbooks/` の該当playbookを参照
3. 標準セクション順序を選定（PASONA / AIDA / QUEST 等）
4. 各セクションの目的・必須要素を定義
5. 中盤CTAの配置を決定
6. 最終CTAセクションを設計
7. セクション数は10〜13を目安
8. `outputs/03_structure/sections.md` に保存

## Output Format

```markdown
## Section Architecture

| # | セクション | 目的 | 必須要素 | CTA |
|---|---|---|---|---|
| 1 | FV | 価値提示 | キャッチ + CTA + 信頼 | ◯ |
| 2 | 問題提起 | 共感 | 悩みリスト | - |
| 3 | 解決策 | 提案 | 3アプローチ | - |
| ... | ... | ... | ... | ... |
| N | 最終CTA | 決断 | 再訴求 + CTA | ◯ |
```

## Quality Criteria

- FVに価値・CTA・信頼
- 問題→解決→証拠→FAQ→CTAの流れ
- 中盤CTA最低1箇所
- セクション数10〜13

## Common Failure Patterns

- セクション数が多すぎ（15以上）/ 少なすぎ（5以下）
- 証拠なしで強みだけ並べる
- CTA最終1箇所のみ
- 業界特性無視

## Self Check

- [ ] 業種playbook参照済み
- [ ] CTA配置3箇所以上
- [ ] 証拠セクションあり

## Related Agents

- `lp-structure-designer`

## Components / Playbooks 参照

- `components/section/`
- `industry-playbooks/`
