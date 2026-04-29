# Before After Hero

## 概要

Before/After を視覚的に対比してヒーローに配置するパターン。

## Best Use Cases

- 業務改善 SaaS（Before/After が明確）
- 教育・スクール（変化訴求）
- フィットネス・ダイエット系
- 改善コンサル

## NG Use Cases

- Before/After が定量化できない商材
- 法務リスク高い表現の業界（薬機法等）

## 構成要素

```
- 左: Before（現状）
  - 業務シーン or 数字
  - 課題感あるトーン
- 右: After（導入後）
  - 改善後シーン or 数字
  - 解放感あるトーン
- 中央: 矢印 or "→"
- 下: メインCTA
```

## CV貢献

- 変化の即時理解
- 期待生成
- 自分ごと化（「自分もこう変わる」）

## 例

```html
<section class="hero hero-before-after">
  <div class="ba-grid">
    <div class="ba-before">
      <p class="ba-label">導入前</p>
      <p class="ba-data">月150時間</p>
      <p class="ba-desc">手作業で疲弊</p>
    </div>
    <div class="ba-arrow">→</div>
    <div class="ba-after">
      <p class="ba-label">導入後</p>
      <p class="ba-data">月60時間</p>
      <p class="ba-desc">ダッシュボードで把握</p>
    </div>
  </div>
  <p class="ba-source">※ 自社調べ・100社平均</p>
  <a class="btn btn-primary">3分で資料を受け取る</a>
</section>
```

## 注意点

- 数字に出典必須
- 「個人差」明記
- 法務リスク確認（医療系・効果効能）

## 採用判断

```
文脈: 4
共感: 4
CV: 5（変化訴求強）
差別化: 4
実現: 4
合計: 21
```

## 関連

- skill: `skills/11_hero_art_direction/hero-pattern-selection-skill.md`
- agent: `lp-hero-art-director`
