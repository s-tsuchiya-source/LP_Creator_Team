# No Image Bold Copy Hero

## 概要

画像を使わず、大胆なコピーだけでヒーローを構成するパターン。

## Best Use Cases

- ブランド・哲学訴求
- 採用LP（カルチャー訴求）
- 高単価コンサル
- ペルソナが「言葉」で意思決定する商材
- 競合が画像ヒーローばかりで差別化したい

## NG Use Cases

- 商材の機能・利用シーン訴求が必要
- 画像で訴求すべき商材（EC等）

## 構成要素

```
- 大胆な背景色（ブランドカラー単色）
- 圧倒的なタイポ（48〜120px）
- 短く強いメインキャッチ
- 補足コピー（控えめ）
- メインCTA
- 装飾は最小限
```

## CV貢献

- ブランド表現
- 哲学・ミッション伝達
- 差別化（画像ヒーロー多い中で目立つ）
- 短く強い印象

## 例

```html
<section class="hero hero-bold">
  <h1 class="hero-title-massive">
    採用は、技術で<br class="pc">
    変えられる。
  </h1>
  <p class="hero-sub">
    導入1,200社が選ぶ、採用管理ツール。
  </p>
  <a class="btn btn-primary btn-lg">3分で資料を受け取る</a>
</section>
```

```css
.hero-bold {
  background: var(--brand-primary);
  padding: clamp(80px, 15vh, 200px) 5vw;
  text-align: center;
}
.hero-title-massive {
  font-size: clamp(48px, 10vw, 120px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: white;
}
```

## 注意点

- タイポの選定が重要（読みやすさ + ブランド整合）
- 短いコピーで強く伝える設計力が必要
- 装飾を増やすと意味が薄れる

## 採用判断

```
文脈: 4（ブランド系商材）
共感: 3〜4（哲学共感）
CV: 3（機能訴求弱い）
差別化: 5（差別化最強）
実現: 5（画像不要）
合計: 19〜20
```

## 関連

- skill: `skills/11_hero_art_direction/hero-background-treatment-skill.md`
- agent: `lp-typography-director` 連携
- skill: `skills/12_japanese_copy_rhythm/headline-rhythm-editing-skill.md`
