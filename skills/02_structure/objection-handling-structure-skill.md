# Objection Handling Structure Skill

## Purpose

ターゲットの反論・不安を構造的に解消するセクション設計を行う。

## When to Use

- 構成フェーズ
- 高単価商材LP
- BtoB案件

## Required Inputs

- インサイト整理書（反論リスト）
- ペルソナ
- 営業ヒアリング情報

## Step-by-Step Procedure

1. 反論リストを精査（10〜20件）
2. カテゴリ分類（価格 / 効果 / 時間 / 既存代替 / 自社事情 / 解約 / 信頼）
3. 主要5〜10件を FAQ セクション化
4. 残りを各セクションで暗黙的に対応
5. FAQ位置を最終CTA直前に配置
6. 不安解消の流れを設計
7. `outputs/03_structure/objection-handling.md` に保存

## Output Format

```markdown
## Objection Handling Structure

### FAQ Items (5〜10件)
- Q1 (カテゴリ: 価格): ...
- Q2 (カテゴリ: 効果): ...
- ...

### 暗黙対応セクション
- 価格セクション: 分割払い・ROI試算
- 実績セクション: 数値・事例
- セキュリティ: 認証バッジ
```

## Quality Criteria

- 主要反論を網羅
- FAQ位置が CTA直前
- 暗黙対応も設計
- 法的に問題のある保証なし

## Common Failure Patterns

- FAQ内容が薄い（「ご安心ください」だけ）
- 主要反論欠落
- 法的保証の過度な記載
- FAQ位置がFV直下

## Self Check

- [ ] 主要反論カテゴリ網羅
- [ ] FAQ位置適切
- [ ] 暗黙対応設計済み

## Related Agents

- `lp-structure-designer`
- `lp-faq-copywriter`

## Components 参照

- `components/faq/`
