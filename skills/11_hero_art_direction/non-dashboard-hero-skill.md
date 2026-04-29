# Non-Dashboard Hero Skill

## Purpose

ダッシュボード型ヒーローを「BtoB SaaS のデフォルト」にせず、商材文脈に合った別パターンを意図的に選ぶ。

## When to Use

- BtoB / BtoC を問わず、ヒーロー設計時
- ダッシュボード型を検討する前のチェック
- 既存ヒーローがダッシュボード風で差別化弱いとき

## Required Inputs

- 商材文脈
- ペルソナの業務状況
- 競合のヒーロー傾向
- CV種別

## Step-by-Step Procedure

### Step 1: ダッシュボード型の妥当性チェック

ダッシュボード型を採用してよい条件：

```
✅ 採用OK:
- 商材の利用シーンが画面操作で完結
- ペルソナがプロダクト画面で意思決定
- 「画面の見やすさ」が CV理由になる
- 競合と比較して画面UI が圧倒的に優れる

❌ 採用NG:
- 「BtoB SaaS だから」だけの理由
- とりあえず画面 SS
- 画面UI が業界平均レベル
- 商材が画面操作以外（コンサル / 研修 等）
```

### Step 2: 代替パターンの強制比較

ダッシュボード型を選ぼうとしたら、必ず3パターン比較：

#### パターンA: photo-annotation-hero
- 写真 + 注釈 + KPI で訴求装置化
- 採用 / コンサル / 高単価サービス向き

#### パターンB: editorial-typography-hero
- タイポ主体、画像最小限
- 哲学・ミッション系商材向き
- ダイレクトメッセージで強く伝える

#### パターンC: workflow-diagram-hero
- 業務フロー図
- 「こう変わる」を視覚化
- BtoB 業務改善系向き

### Step 3: 商材タイプ別の推奨パターン

| 商材タイプ | 推奨パターン | 理由 |
|---|---|---|
| BtoB SaaS（業務効率化） | photo-annotation / workflow-diagram | 利用シーン明示 |
| BtoB SaaS（データ分析） | product-ui-preview（条件付き） | 画面が訴求装置 |
| BtoB コンサル | editorial-typography / photo-annotation | 権威性 + 信頼 |
| 採用LP | customer-scene / photo-annotation | 働く未来を見せる |
| 採用LP（エンジニア） | editorial-typography / video-demo | カルチャー伝達 |
| EC / 物販 | photo-annotation / video-demo | 商品と利用シーン |
| 教育 / スクール | before-after / customer-scene | 変化を見せる |
| 高単価サービス | photo-annotation / editorial-typography | 信頼 + 権威 |

### Step 4: 採用判断の透明化

```markdown
## ダッシュボード型採用判断

### 採用検討した理由
- 商材は採用管理 SaaS
- 画面UI が業界比較で優れる

### 不採用にした理由
- ペルソナ（中小企業人事）は画面より「結果」に関心
- 競合も全社ダッシュボード型 → 差別化なし
- 画面UI 差別化は実機で見せた方が伝わる

### 代替採用
- photo-annotation-hero
- 採用現場の写真 + KPI注釈
- 「採用工数 60%削減」を主訴求に
```

### Step 5: ダッシュボード型を使う場合のルール

どうしても採用する場合：

```
- 単純な画面 SS ではなく、注釈・KPI を重ねる
- 画面の中の特定機能を強調
- 「この画面で何ができるか」を併記
- 装飾的な抽象3D図形を排除
```

## Output Format

`outputs/05_design/hero-pattern-selection.md` に判断記録。

## Quality Criteria

- ダッシュボード型を理由なくデフォルト化していない
- 3パターン以上比較
- 商材文脈・ペルソナで判断
- 採用 / 不採用理由を明示

## Common Failure Patterns

- 「BtoB SaaS だからダッシュボード」
- 競合が全社ダッシュボード型なのに同じパターン採用
- 採用理由が「綺麗だから」「業界標準だから」

## Self Check

- [ ] 3パターン比較済み
- [ ] 商材文脈で判断
- [ ] ダッシュボード型なら強い理由あり
- [ ] hero-pattern-selection.md 記録

## Related

- agent: `lp-hero-art-director` / `lp-hero-pattern-reviewer`
- skill: `skills/11_hero_art_direction/hero-pattern-selection-skill.md`
- scorecard: `scoring/non-dashboard-hero-scorecard.md`
- library: `hero-pattern-library/`
