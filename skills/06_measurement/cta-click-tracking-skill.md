# CTA Click Tracking Skill

## Purpose

CTAクリック・電話クリックなどの行動を計測し、CVR分析を可能にする。

## When to Use

- LP実装時

## Required Inputs

- CTA配置情報
- 計測仕様

## Step-by-Step Procedure

1. CTAに data-event / data-position 属性を付与
2. クリックイベントで dataLayer push
3. 電話番号にも同様の data 属性
4. GTM トリガーを CSS セレクタで設定
5. ポジション別 CTR を可視化

## Output Format

```html
<!-- CTA -->
<a href="#form" class="cta cta-main"
   data-event="cta_click"
   data-position="fv">
  無料で資料請求
</a>

<!-- Tel -->
<a href="tel:0312345678"
   data-event="phone_click"
   data-position="fv">
  03-1234-5678
</a>
```

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

## Quality Criteria

- 全CTAに計測属性
- 位置別計測
- 電話クリック計測

## Common Failure Patterns

- 計測属性なし
- ポジション識別なし

## Self Check

- [ ] 全CTAに data 属性
- [ ] 電話CTAも計測

## Related Agents

- `lp-conversion-tracking-specialist`
- `lp-ga4-gtm-specialist`

## Knowledge 参照

- `knowledge/measurement-patterns/cta-click-tracking.md`
