# CTAクリック計測

## 計測対象
- メインCTA（FV / 中盤 / 最終）
- 追従CTA
- 電話番号
- 補助CTA（資料DL / 動画再生 等）

## 実装

### data 属性方式（推奨）

```html
<a href="#form" class="cta" data-event="cta_click" data-position="fv">
  無料で資料請求
</a>
```

### GTM トリガー設定
- タイプ: クリック - 全要素
- 条件: `Click Element` matches CSS selector `[data-event="cta_click"]`

### dataLayer 連携
```javascript
document.querySelectorAll('[data-event]').forEach(el => {
  el.addEventListener('click', () => {
    dataLayer.push({
      event: el.dataset.event,
      cta_position: el.dataset.position,
      cta_text: el.textContent.trim()
    });
  });
});
```

## 分析指標
- CTAクリック率 = クリック / セッション
- 位置別CTR（FV / 中盤 / 最終）
- どのCTAが最も寄与しているか

## 電話クリック計測
```html
<a href="tel:0312345678" data-event="phone_click" data-position="fv">
  03-1234-5678
</a>
```
