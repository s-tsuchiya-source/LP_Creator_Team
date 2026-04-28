# Sticky CTA Patterns

## Role in LP

スクロール中も常時CTAをスマホ画面下部に表示し、CV機会を最大化する。

## Best Use Cases

- SP流入が多いLP（広告 / SNS）
- BtoCサービス
- 低単価サービス

## Required Elements

- 高さ 60〜72px
- 主CTA + 補助CTA（電話 等）
- 表示・非表示ロジック

## High Conversion Pattern

### 表示・非表示ルール

- **FV外**: ON
- **フォーム到達 or フォーカス時**: OFF
- **フッター到達**: OFF（重複防止）

### レイアウト

```
┌─────────────────────────────┐
| [📞 電話]   [無料で資料請求]  |
└─────────────────────────────┘
```

- 主CTA 60% / 副CTA 40%
- 主CTA: メインカラー
- 副CTA: 線・ゴースト

## Bad Pattern

- 常時表示でフォーム阻害
- 高さ100px以上で本文圧迫
- フォーカス時もONのまま
- アニメーションで気になる

## Implementation

```html
<div class="sticky-cta">
  <a href="tel:0312345678" class="sticky-cta-tel">📞 電話</a>
  <a href="#form" class="sticky-cta-main">無料で資料請求</a>
</div>
```

```css
.sticky-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 64px;
  background: #fff;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
  z-index: 50;
  transform: translateY(100%);
  transition: transform 0.3s;
}
.sticky-cta.is-visible { transform: translateY(0); }

@media (min-width: 768px) {
  .sticky-cta { display: none; }
}
```

```javascript
const sticky = document.querySelector('.sticky-cta');
const fv = document.querySelector('#fv');
const form = document.querySelector('#form');

const fvObs = new IntersectionObserver(([e]) => {
  sticky.classList.toggle('is-visible', !e.isIntersecting);
});
fvObs.observe(fv);

const formObs = new IntersectionObserver(([e]) => {
  if (e.isIntersecting) sticky.classList.remove('is-visible');
});
formObs.observe(form);
```

## Measurement Notes

- 主CTA: `data-event="cta_click" data-position="sticky-main"`
- 補助CTA: `data-event="phone_click" data-position="sticky-tel"`

## Checklist

- [ ] FV外でON
- [ ] フォーム到達でOFF
- [ ] 高さ60〜72px
- [ ] PC非表示（768px+で hide）
- [ ] 計測属性
