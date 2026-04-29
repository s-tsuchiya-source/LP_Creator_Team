# Hero Pattern Selection Skill

## Purpose

LPのヒーロー（FV）を「ダッシュボード型のデフォルト」にせず、最低3つのパターンを比較して選定する。

商材文脈・ペルソナ・CV種別に最適なヒーローを意図的に選ぶ。

## When to Use

- LP制作のFV設計時
- 既存LPのヒーロー見直し時
- ダッシュボード風ヒーローが多用されているとき

## Required Inputs

- 商材情報・特性
- ペルソナ・業務状況
- CV地点
- ブランドガイドライン
- 業種 playbook

## Step-by-Step Procedure

### Step 1: ヒーローパターンライブラリから候補抽出

`hero-pattern-library/` から最低3パターンを比較対象に：

```
1. product-ui-preview-hero（ダッシュボード型）
2. photo-annotation-hero（写真+注釈）
3. editorial-typography-hero（タイポ主体）
4. before-after-hero（比較型）
5. workflow-diagram-hero（業務フロー型）
6. customer-scene-hero（顧客シーン型）
7. report-ledger-hero（帳票・レポート型）
8. video-demo-hero（動画型）
9. problem-visualization-hero（課題可視化型）
10. no-image-bold-copy-hero（画像なし大胆コピー型）
```

### Step 2: 各パターンを評価軸で採点

5軸で各候補を採点（5点満点）：

```
1. 商材文脈整合
2. ペルソナの共感度
3. CV直結性
4. 差別化（業界平均との差）
5. 制作実現性
```

### Step 3: 比較表を作成

```markdown
| パターン | 文脈 | 共感 | CV | 差別化 | 実現 | 合計 |
|---|---|---|---|---|---|---|
| product-ui-preview | 4 | 3 | 4 | 1 | 5 | 17 |
| photo-annotation | 5 | 5 | 4 | 4 | 4 | 22 |
| problem-visualization | 4 | 4 | 5 | 5 | 3 | 21 |

→ photo-annotation 採用
```

### Step 4: 採用理由・不採用理由を記録

`outputs/05_design/hero-pattern-selection.md` に記録：

```markdown
## 採用パターン: photo-annotation-hero

### 採用理由
- 商材は採用支援 → 採用現場の写真が文脈に合う
- 数値訴求 + 注釈で「実在感」を強化
- ダッシュボード型は SaaS 一般感で差別化できない

### 比較した他パターン
- product-ui-preview-hero: SaaS 一般感、差別化弱（採用しない）
- problem-visualization-hero: 興味深いが制作工数高い（次案）
```

### Step 5: ダッシュボード型回避ルール

```
❌ NGデフォルト:
- 「BtoB SaaS だからダッシュボード」
- 「とりあえず画面 SS」
- 「業界先行例がそうだから」

✅ OK判断:
- 商材の利用シーンが画面で完結する場合のみ
- ペルソナがプロダクト画面で意思決定する場合のみ
- 必ず他パターンと比較した上で選定
```

## Output Format

`contracts/hero-pattern-selection-contract.md` に準拠。

## Quality Criteria

- 最低3パターン比較
- 評価軸 5軸で採点
- 採用理由 + 不採用理由を記録
- ダッシュボード型を理由なくデフォルト化していない

## Common Failure Patterns

- 1パターンしか検討しない
- 「とりあえずダッシュボード」
- 採用理由が「綺麗だから」
- ペルソナ無視のパターン選定

## Self Check

- [ ] 3パターン以上比較
- [ ] 5軸採点
- [ ] 採用理由 + 不採用理由記録
- [ ] hero-pattern-selection.md 作成

## Related

- agent: `lp-hero-art-director` / `lp-hero-pattern-reviewer`
- library: `hero-pattern-library/`
- contract: `contracts/hero-pattern-selection-contract.md`
- scorecard: `scoring/hero-art-direction-scorecard.md`
