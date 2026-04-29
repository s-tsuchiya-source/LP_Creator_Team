# Customer Scene Hero

## 概要

顧客（利用者）のシーン写真をヒーローに配置するパターン。

## Best Use Cases

- 採用LP（実在社員のシーン）
- 教育・スクール（受講生のシーン）
- BtoCサービス（利用者の体験シーン）
- カスタマーストーリー訴求

## NG Use Cases

- 顧客の許諾取れない場合
- ストックフォトしか使えない場合

## 構成要素

```
- 顧客の写真（許諾済）
- 顧客の声（実名 or イニシャル + 業種・役職）
- 数値効果（あれば）
- メインキャッチ
- メインCTA
```

## CV貢献

- 共感誘発（同じ業種・役職）
- 実在感（信頼形成）
- 「自分もこう変われる」期待

## 注意点

- 顧客の許諾必須
- 写真は実物（ストックフォトNG）
- 数値に出典付き

## 例

```html
<section class="hero hero-customer-scene">
  <img src="customer-photo.webp" alt="A社の人事部長 山田様（許諾済）">

  <div class="hero-content">
    <blockquote class="customer-quote">
      「採用工数が月150h → 月60hに。
      朝、ダッシュボードを見るだけで状況把握。」
    </blockquote>
    <p class="customer-attribution">
      A社（製造業 / 100名）人事部長 山田様（仮名・許諾済）
    </p>

    <h1 class="hero-title">採用業務、こう変わります</h1>

    <a class="btn btn-primary">同業種の事例を見る</a>
  </div>
</section>
```

## 採用判断

```
文脈: 5
共感: 5（顧客と同じ立場）
CV: 4（事例の説得力）
差別化: 5（独自顧客）
実現: 3（許諾取得の手間）
合計: 22
```

## 関連

- skill: `skills/11_hero_art_direction/photo-annotation-hero-skill.md`
- agent: `lp-photo-composition-director`
- 法務: `knowledge/legal-expression-rules/`
