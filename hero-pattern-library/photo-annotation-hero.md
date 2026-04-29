# Photo Annotation Hero

## 概要

業務シーンの写真を背景に、網掛け + 注釈 + KPI + 短コピーを重ねるパターン。

## Best Use Cases

- ペルソナの業務シーンが具体的に描ける
- 数値実績が訴求装置になる
- 競合が SaaS 一般感の画面 SS を採用 → 差別化したい

## NG Use Cases

- 業務シーンが抽象（コンサル等で写真が決まらない）
- ストックフォトしか入手できない
- 写真とコピーが無関係

## 構成要素

```
- 写真背景（業務シーン）
- ブランドカラー オーバーレイ（透過 60〜75%）
- ターゲット明示
- メインキャッチ（短文 15〜25文字）
- サブコピー（30〜50文字）
- 注釈（写真の特定箇所を指す）
- KPI バッジ（コーナー）
- メインCTA + 副CTA
```

## CV貢献

- 業務シーン共感（自分ごと化）
- 数値で実在感（信頼形成）
- 注釈で具体性（期待生成）
- ストック感のない実在感（差別化）

## 注意点

- 必ず実利用シーン（ストックフォトNG）
- オーバーレイで文字視認性確保
- 注釈に意味あり（装飾線NG）
- KPI に出典付き

## 採用判断

5軸採点目安（採用支援 / 教育 / 高単価向き）:

```
文脈: 5（業務文脈即時伝達）
共感: 5（自分の業務シーン）
CV: 4（実在感ある期待）
差別化: 4（SaaS 一般感を超える）
実現: 4（写真選定 + 注釈設計の手間）
合計: 22
```

## 採用例（採用支援 SaaS）

```html
<section class="hero">
  <img src="hero-photo.webp" alt="人事担当者がダッシュボードで状況確認" class="hero-bg">
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <p class="hero-target">中小企業の人事担当者へ</p>
    <h1 class="hero-title">採用工数を、最大60%削減</h1>
    <p class="hero-sub">中小企業向け 採用管理ツール</p>

    <div class="hero-cta">
      <a href="#form" class="btn btn-primary">3分で資料を受け取る</a>
      <a href="#demo" class="btn btn-secondary">無料デモを予約</a>
    </div>
  </div>

  <div class="hero-annotation">
    <span class="annotation-line"></span>
    <p>月150h → 月60h<br><small>自社調べ・100社平均</small></p>
  </div>

  <div class="hero-kpi">
    <strong>1,200</strong>
    <small>社が導入<br>（自社調べ・2026年4月）</small>
  </div>
</section>
```

## 関連

- skill: `skills/11_hero_art_direction/photo-annotation-hero-skill.md`
- agent: `lp-photo-composition-director`
- contract: `contracts/photo-annotation-hero-contract.md`
- scorecard: `scoring/photo-annotation-hero-scorecard.md`
