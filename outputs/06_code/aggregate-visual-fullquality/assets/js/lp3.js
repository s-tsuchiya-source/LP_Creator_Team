/* ===========================================================
   lp3.js — 運用代行LP個別挙動
   - timeline blocks staggered draw-in
   - checklist tick reveal
   =========================================================== */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  // タイムラインブロックのスタガー演出
  const tracks = document.querySelectorAll('.lp3-timeline__tracks');
  if (!tracks.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const blocks = e.target.querySelectorAll('.lp3-timeline__block');
      blocks.forEach((b, i) => {
        b.style.opacity = '0';
        b.style.transform = 'translateX(-12px)';
        b.style.transition = 'opacity .5s ease, transform .5s ease';
        setTimeout(() => {
          b.style.opacity = '1';
          b.style.transform = 'translateX(0)';
        }, 80 + i * 90);
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  tracks.forEach((t) => io.observe(t));
})();
