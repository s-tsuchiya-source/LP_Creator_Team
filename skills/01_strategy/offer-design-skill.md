# Offer Design Skill

## Purpose

ターゲットが「いま行動したくなる」オファーを設計し、CTAの魅力度を最大化する。

## When to Use

- 戦略フェーズ
- CV直結する行動理由が弱いとき

## Required Inputs

- 商材情報・価格
- 営業プロセス
- ターゲットの購買障壁

## Step-by-Step Procedure

1. ターゲットの購買障壁を3〜5個列挙
2. 障壁を解消するオファー候補を3案提示
3. 主オファー / 副オファーを決定
4. 限定性・緊急性・保証を組み合わせ
5. リードマグネット案を作成（資料DL / 診断 / 試算 等）
6. 法的に問題ないか確認（景表法 / 特商法）
7. `outputs/02_strategy/offer.md` に保存

## Output Format

```markdown
## Offer Design

### Main Offer
- 内容:
- 行動理由:

### Sub Offer
- 内容:

### 限定性 / 緊急性
- 数量限定 / 期間限定 / 対象限定:

### 保証
- 内容:
- 実行可能性:

### リードマグネット
- 種別:
- 提供価値:
```

## Quality Criteria

- 障壁解消とオファーが対応している
- 限定性は嘘でない
- 保証は実行可能
- リードマグネットがリード質と相関

## Common Failure Patterns

- 嘘の限定性（常時セール）
- 実行不能な保証
- 商材価値を毀損する過剰割引
- リードマグネットの質と量のミスマッチ

## Self Check

- [ ] 限定性は実態に即しているか
- [ ] 保証は実行可能か
- [ ] 法的問題はないか

## Related Agents

- `lp-offer-architect`
- `lp-marketing-strategist`
