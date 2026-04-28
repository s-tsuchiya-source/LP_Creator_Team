# Lightweight JS Skill

## Purpose

過剰でない、必要十分なバニラJSでLPの動的挙動を実装する。

## When to Use

- LP JS実装時

## Required Inputs

- インタラクション要件
- アニメーション方針

## Step-by-Step Procedure

1. 必要なJS機能を最小化（FAQ開閉 / スムーズスクロール / 追従CTA / アニメーション）
2. バニラJSのみ使用（ライブラリ不要）
3. defer 読込
4. IntersectionObserver でスクロール連動
5. prefers-reduced-motion 対応
6. メイン機能はJS無効でも動作（progressive enhancement）

## Output Format

```javascript
// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(el => {
  el.querySelector('.faq-question').addEventListener('click', () => {
    el.classList.toggle('is-open');
    dataLayer.push({
      event: 'faq_open',
      faq_id: el.dataset.faqId
    });
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sticky CTA
const sticky = document.querySelector('.sticky-cta');
const fv = document.querySelector('#fv');
const stickyObserver = new IntersectionObserver(([entry]) => {
  sticky.classList.toggle('is-visible', !entry.isIntersecting);
});
stickyObserver.observe(fv);

// Section Animation (with prefers-reduced-motion respect)
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion) {
  const animObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('is-visible');
    });
  });
  document.querySelectorAll('.fade-in').forEach(el => animObs.observe(el));
}

// CTA Click Tracking
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

- ライブラリ依存なし
- defer 読込
- prefers-reduced-motion 対応
- 計測 dataLayer 連携

## Common Failure Patterns

- jQuery / 巨大ライブラリ依存
- 同期JS でレンダリングブロック
- prefers-reduced-motion 無視

## Self Check

- [ ] バニラJSのみ
- [ ] defer 読込
- [ ] motion-reduce 対応

## Related Agents

- `lp-javascript-engineer`
- `lp-frontend-engineer`
