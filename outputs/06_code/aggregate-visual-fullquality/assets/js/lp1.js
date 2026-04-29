/* ===========================================================
   lp1.js — 応募単価LP個別挙動
   - hero ledger card subtle parallax (mouse-only, reduce-motion safe)
   - bar fill animation on enter
   =========================================================== */

(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. hero overlay subtle parallax
  if (!reduce && window.matchMedia('(min-width: 980px)').matches) {
    const visual = document.querySelector('.lp1-hero__visual');
    const cards = document.querySelectorAll('.lp1-overlay-card');
    if (visual && cards.length) {
      visual.addEventListener('mousemove', (e) => {
        const r = visual.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        cards.forEach((c, i) => {
          const k = (i + 1) * 4;
          c.style.transform = `translate(${x * k}px, ${y * k}px)`;
        });
      });
      visual.addEventListener('mouseleave', () => {
        cards.forEach((c) => { c.style.transform = ''; });
      });
    }
  }

  // 2. bar fill animation in overlay card
  const fills = document.querySelectorAll('[data-bar-fill]');
  if (fills.length) {
    const animate = (el) => {
      const target = parseFloat(el.dataset.barFill);
      const inner = el.querySelector('span');
      if (!inner) return;
      if (reduce) { inner.style.width = target + '%'; return; }
      let w = 0;
      const start = performance.now();
      const dur = 1400;
      const tick = (now) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        inner.style.width = (target * eased) + '%';
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    fills.forEach((el) => io.observe(el));
  }
})();
