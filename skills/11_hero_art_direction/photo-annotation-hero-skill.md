# Photo Annotation Hero Skill

## Purpose

写真を背景にしたヒーローを「装飾」から「訴求装置」へ転換する。
網掛け / 注釈 / KPI / 短コピー で写真にメッセージを乗せる。

## When to Use

- ヒーローを photo-annotation-hero パターンで作るとき
- 写真ヒーローが装飾的になっているとき

## Required Inputs

- 商材文脈
- ペルソナ
- 主要KPI / 数値実績
- 写真素材（実利用シーン）

## Step-by-Step Procedure

### Step 1: 写真素材の選定

```
✅ 採用しやすい写真
- 実際の利用シーン（業務・現場）
- ペルソナの仕事風景
- プロダクトと人が一緒に映る
- 文脈が明確

❌ 避ける写真
- 抽象的なオフィス風景（誰にでも当てはまる）
- ストックフォトの握手・笑顔
- 関係ない自然・都市風景
```

### Step 2: 網掛け（オーバーレイ）設計

写真にコピーを載せるため、視認性を確保：

```css
.hero-photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.35) 50%,
    rgba(0, 0, 0, 0.55) 100%
  );
}
```

または商材色のオーバーレイ：

```css
background: linear-gradient(
  135deg,
  rgba(13, 71, 161, 0.78) 0%,
  rgba(13, 71, 161, 0.45) 100%
);
```

### Step 3: 注釈（callout）配置

写真の特定箇所に注釈を配置：

```html
<div class="hero-photo">
  <img src="hero.webp" alt="採用担当者がダッシュボードで状況を確認">
  <div class="hero-overlay"></div>

  <!-- 主コピー -->
  <h1 class="hero-title">
    採用工数を、最大60%削減<br class="pc">
    手作業からダッシュボードへ
  </h1>

  <!-- 注釈：写真の中の要素を指す -->
  <div class="hero-annotation hero-annotation--top-right">
    <span class="annotation-line"></span>
    <p class="annotation-text">
      <strong>月150h → 月60h</strong><br>
      <small>自社調べ・100社平均</small>
    </p>
  </div>

  <!-- KPI バッジ -->
  <div class="hero-kpi">
    <strong>1,200社</strong>
    <small>導入実績（2026年4月時点）</small>
  </div>
</div>
```

### Step 4: KPI バッジ配置

写真のコーナーに信頼バッジ：

```html
<div class="hero-kpi-badges">
  <div class="kpi-badge">
    <strong>1,200</strong>
    <small>社が導入</small>
  </div>
  <div class="kpi-badge">
    <strong>60%</strong>
    <small>工数削減（平均）</small>
  </div>
  <div class="kpi-badge">
    <strong>4.6</strong>
    <small>満足度（5段階）</small>
  </div>
</div>
```

### Step 5: 短コピー設計

写真上のコピーは「短く・強く」：

```
NG（長すぎ）:
私たちは中小企業の人事担当者向けに、最適な採用支援サービスを提供することで...

OK（短く強く）:
採用工数を、最大60%削減
（自社調べ・100社平均）
```

文字数目安：
- メインキャッチ: 15〜25文字
- サブコピー: 30〜50文字
- 注釈: 各 10〜20文字

### Step 6: 文脈整合チェック

- [ ] 写真とコピーが整合（写真の中身がコピーを補強）
- [ ] 注釈が写真の特定箇所を指す（意味のある注釈）
- [ ] KPI が信頼性に直結
- [ ] 装飾的な配置でない

## Output Format

`contracts/photo-annotation-hero-contract.md` に準拠。

## Quality Criteria

- 写真がペルソナの業務文脈と整合
- 網掛けで文字視認性確保
- 注釈に意味あり
- KPI に出典付き
- 短コピーで強く伝える

## Common Failure Patterns

- ストックフォトを選定
- 網掛けが薄すぎて文字が読めない
- 注釈が装飾的（意味のない線）
- KPI に出典なし
- 写真とコピーが無関係

## Self Check

- [ ] 写真選定理由を記録
- [ ] 網掛け視認性確認
- [ ] 注釈に意味あり
- [ ] KPI 出典付き
- [ ] 短コピー（25文字以内）

## Related

- agent: `lp-photo-composition-director` / `lp-hero-art-director`
- pattern: `hero-pattern-library/photo-annotation-hero.md`
- contract: `contracts/photo-annotation-hero-contract.md`
- scorecard: `scoring/photo-annotation-hero-scorecard.md`
