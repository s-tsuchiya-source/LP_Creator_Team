# Hero Pattern Selection Contract

## Purpose

ヒーローパターン選定プロセスを構造化された形で記録する。
`outputs/05_design/hero-pattern-selection.md` の必須形式。

## Required Sections

### 1. 案件情報
- 案件名・業種・CV種別

### 2. 比較対象パターン（最低3つ）
- パターン名
- 概要
- 採用検討理由

### 3. 5軸採点表
- 商材文脈整合
- ペルソナの共感度
- CV直結性
- 差別化（業界平均との差）
- 制作実現性

### 4. 採用パターン
- 最高点パターン
- 採用理由（詳細）

### 5. 不採用パターン理由
- 各パターンの不採用理由

### 6. ダッシュボード型回避記録
- ダッシュボード型を採用しなかった理由（採用しない場合）
- 採用した場合の強い根拠（採用する場合）

## Format Rules

```markdown
# Hero Pattern Selection

## 1. 案件
- 案件名: 採用管理SaaS LP
- 業種: BtoB SaaS / 採用支援
- CV: 資料請求 / 無料デモ
- ペルソナ: 中小企業（50〜300名）人事担当者

## 2. 比較対象パターン

### A. product-ui-preview-hero
- 概要: ダッシュボード SS をヒーローに
- 採用検討理由: BtoB SaaS の定番パターン

### B. photo-annotation-hero
- 概要: 業務シーン写真 + 注釈 + KPI
- 採用検討理由: 採用業務の文脈即時伝達

### C. workflow-diagram-hero
- 概要: 業務フロー図解
- 採用検討理由: 「こう変わる」を視覚化

## 3. 5軸採点

| パターン | 文脈 | 共感 | CV | 差別化 | 実現 | 合計 |
|---|---|---|---|---|---|---|
| A. product-ui | 4 | 3 | 4 | 1 | 5 | 17 |
| B. photo-annotation | 5 | 5 | 4 | 4 | 4 | 22 |
| C. workflow-diagram | 4 | 4 | 5 | 5 | 3 | 21 |

## 4. 採用: B. photo-annotation-hero

### 採用理由
- 商材は採用支援 → 採用現場の写真が文脈に合う（文脈 5）
- 業務シーンで「自分のことだ」と共感誘発（共感 5）
- KPI注釈で実在感を強化（CV 4）
- 競合が全社ダッシュボード型 → 写真で差別化（差別化 4）

## 5. 不採用理由

### A. product-ui-preview
- 競合と差別化弱い（差別化 1）
- 画面UIが特別優れているわけでない

### C. workflow-diagram
- 制作工数高い（実現 3）
- 次回アップデートで採用検討

## 6. ダッシュボード型回避記録

ダッシュボード型を採用しなかった理由:
- 採用業務支援は「結果」に関心、画面 UI に関心は低い
- 競合全社ダッシュボード型 → 差別化なし
- ペルソナ共感度が photo-annotation の方が高い

## 関連 scorecard

- hero-art-direction-scorecard: 想定 88
- non-dashboard-hero-scorecard: 想定 90
```

## Acceptance Criteria

- 最低3パターン比較
- 5軸採点完了
- 採用 + 不採用理由
- ダッシュボード型回避記録

## Rejection Criteria

- 1パターンしか比較なし
- 採用理由が「綺麗だから」
- ダッシュボード型のデフォルト化

## Related

- agent: `lp-hero-art-director` / `lp-hero-pattern-reviewer`
- skill: `skills/11_hero_art_direction/hero-pattern-selection-skill.md`
- library: `hero-pattern-library/`
- scorecard: `scoring/non-dashboard-hero-scorecard.md`
