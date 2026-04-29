# Motion Meaning Design Skill

## Purpose

LPのアニメーション・モーションを「装飾」ではなく「意味の伝達」として設計する。

translateY reveal の連発を排除し、各モーションに「何を理解させる動きか」を明示する。

## When to Use

- デザインフェーズ
- アニメーション設計時
- 既存LPのモーション見直し時

## Required Inputs

- セクション構成
- 各セクションで伝えたい意味
- ペルソナの読書速度・集中度

## Step-by-Step Procedure

### Step 1: モーションの目的を分類

各モーションを以下のいずれかに分類：

```
1. 視線誘導（attention）: 重要要素に目を向けさせる
2. 関係性表示（relation）: 要素同士の繋がりを示す
3. 状態変化（transition）: ステータス遷移を見せる
4. 情報展開（reveal）: 情報を段階的に明かす
5. フィードバック（feedback）: 操作の応答
```

「装飾だけ」のモーションは排除。

### Step 2: モーション種別の使い分け

| 種別 | 用途 | 推奨セクション |
|---|---|---|
| translateY reveal | 情報の段階的展開 | FAQ / 強み詳細 |
| 横スライド | プロセス・時系列 | 導入フロー / Before-After |
| スケール変化 | 強調・拡大注目 | 数値実績 / 受賞バッジ |
| パスアニメーション | 関係性・連携 | 業務フロー図 |
| クロスフェード | 状態変化 | 比較表 / トグル |
| カウントアップ | 数値の重み | 実績数字 |
| ホバー応答 | フィードバック | CTA / カード |
| パララックス | 奥行き表現 | FV / 区切り |

### Step 3: 制約ルール

```
1. 同じ translateY reveal を全セクションで使わない
2. reveal系モーションは全LPの最大40%まで
3. CV直前（最終CTA前）の過剰モーション禁止
4. prefers-reduced-motion 必須対応
5. アニメーション時間は基本 200〜400ms
6. 過剰な遅延・delay は離脱原因
```

### Step 4: モーション計画書（storyboard）

各セクションで以下を記録：

```markdown
## セクション [名前]

### モーション
- 種別: [horizontal-slide / scale / cross-fade / count-up / 等]
- 目的: [何を理解させる動きか]
- 時間: [200ms / 300ms / 400ms]
- delay: [0 / 100ms]
- easing: [ease-out / cubic-bezier(...)]
- 発火条件: [scroll / click / hover / load]

### CV貢献理由
- このモーションがCVにどう貢献するか

### prefers-reduced-motion 対応
- 無効化時の挙動
```

### Step 5: 採用理由を記録

`outputs/05_design/motion-storyboard.md` に全モーションを記録。

## Output Format

`contracts/motion-storyboard-contract.md` に準拠。

## Quality Criteria

- 各モーションに目的と種別が明示
- translateY reveal が 40% 以下
- prefers-reduced-motion 対応必須
- CV直前の過剰モーションなし
- 装飾だけのモーションなし

## Common Failure Patterns

- 全セクション同じ translateY reveal
- アニメーションが意味なく派手
- CV直前で目が泳ぐモーション
- prefers-reduced-motion 未対応
- 「動いてかっこいい」だけの判断

## Self Check

- [ ] 全モーションに目的記載
- [ ] reveal系 40% 以下
- [ ] CV直前の過剰モーションなし
- [ ] prefers-reduced-motion 対応
- [ ] motion-storyboard.md 作成

## Related

- agent: `lp-motion-director`
- contract: `contracts/motion-storyboard-contract.md`
- scorecard: `scoring/motion-variety-scorecard.md`
- gate: `quality-gates/visual-expression-gate.md`
