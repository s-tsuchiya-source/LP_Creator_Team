# Video Demo Hero

## 概要

動画デモをヒーローに配置するパターン。サイレント・自動再生・ループ。

## Best Use Cases

- プロダクトの動きが訴求装置になる商材
- 動画で価値が即時伝わる商材
- 採用LP（オフィス紹介動画）
- インタラクション豊かな SaaS

## NG Use Cases

- 動画制作工数が工程的に間に合わない
- ペルソナがモバイルで音声なしの動画を見ない場合
- 動画なしでも訴求できる商材

## 構成要素

```
- 動画背景（自動再生・サイレント・ループ）
- オーバーレイ（動画上の文字視認性確保）
- メインキャッチ
- メインCTA
- 動画再生時間目安: 8〜15秒（短く・繰り返し可能）
```

## CV貢献

- 動的訴求（静止画より理解度高）
- プロダクト品質の即時伝達
- 差別化（動画ヒーロー少ない）

## 注意点

- サイレント必須（音声自動再生は離脱原因）
- モバイルでも動作（mp4 / webm 両対応）
- 容量最適化（5MB 以下推奨）
- ロード時の代替画像（poster）

## 例

```html
<section class="hero hero-video">
  <video autoplay muted loop playsinline poster="hero-poster.webp">
    <source src="hero-demo.webm" type="video/webm">
    <source src="hero-demo.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <h1>採用業務を、最大60%削減</h1>
    <a class="btn btn-primary">3分で資料を受け取る</a>
  </div>
</section>
```

```css
@media (prefers-reduced-motion: reduce) {
  .hero-video video { display: none; }
  .hero-video { background: url(hero-poster.webp) center/cover; }
}
```

## 採用判断

```
文脈: 4
共感: 4
CV: 4
差別化: 5（動画ヒーロー稀少）
実現: 2〜3（動画制作工数）
合計: 19〜20
```

## 関連

- skill: `skills/11_hero_art_direction/`
- agent: `lp-frontend-engineer` 連携
- パフォーマンス: `skills/05_development/performance-optimization-skill.md`
