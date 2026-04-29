/* ===========================================================
   lp4.js — データ可視化LP個別挙動
   - sparkline draw-in animation on metric wall cards
   - PDCA arc reveal sequencing
   =========================================================== */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  // sparkline path drawIn animation
  const sparklines = document.querySelectorAll('.lp4-wall__card-spark path');
  sparklines.forEach((p) => {
    try {
      const len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(.2,.7,.2,1)';
    } catch (_) {}
  });
  const cards = document.querySelectorAll('.lp4-wall__card');
  if (!cards.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const sp = e.target.querySelector('.lp4-wall__card-spark path');
      if (sp) sp.style.strokeDashoffset = '0';
      io.unobserve(e.target);
    });
  }, { threshold: 0.35 });
  cards.forEach((c) => io.observe(c));
})();
