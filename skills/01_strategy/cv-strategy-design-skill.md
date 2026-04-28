# CV Strategy Design Skill

## Purpose

LP の CV 地点・補助CV・KPIツリーを設計し、戦略全体の骨子を決める。

## When to Use

- 戦略フェーズ開始時
- ブリーフ確定後

## Required Inputs

- 確定ブリーフ
- 営業プロセス情報（BtoB案件）
- 出稿媒体情報（広告案件）

## Step-by-Step Procedure

1. ブリーフから「最終ゴール」を確認
2. CV地点を決定（フォーム送信 / 電話 / 申込 等）
3. 補助CV を3個以下で選定（資料DL / 動画再生 等）
4. KPIツリーを描く（Impression → CTR → Session → Form到達 → Form送信 → CV → 商談化 → 受注）
5. 媒体別CV単価目安を整理（広告連動時）
6. 主要KPIの目標値を仮置き
7. `outputs/02_strategy/cv-strategy.md` に保存

## Output Format

```markdown
## CV Strategy

### Main CV
- 種別:
- 想定数 / 月:

### Supporting CV
- 1.
- 2.

### KPI Tree
- Impression:
- CTR:
- Session:
- Form到達率:
- Form送信率:
- CV:
- 商談化率:
- 受注率:
- CPA:
- LTV / CAC:
```

## Quality Criteria

- メインCVが1つに絞られている
- 補助CVが3個以下
- KPIツリーが連結している
- 目標値が仮置きでも明示

## Common Failure Patterns

- メインCVが複数（CV分散）
- 補助CV を増やしすぎ
- KPIが連結していない
- 計測不可能な指標

## Self Check

- [ ] メインCVは1つか
- [ ] KPIが計測可能か
- [ ] 商談化〜受注まで含まれているか（BtoB）

## Related Agents

- `lp-marketing-strategist`
- `lp-business-model-analyst`
