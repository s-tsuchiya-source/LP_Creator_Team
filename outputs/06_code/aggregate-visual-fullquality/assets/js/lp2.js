/* ===========================================================
   lp2.js — 応募数LP個別挙動
   - スクロールに合わせたヒーロー浮遊カードのサブパララックス
   - feature card stagger reveal (CSSと組合せ)
   =========================================================== */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  // hero subtle floating bobbing
  const floaters = document.querySelectorAll('.lp2-floater');
  if (floaters.length) {
    let frame = 0;
    const animate = () => {
      frame += 1;
      floaters.forEach((el, i) => {
        const phase = (frame / 90) + i * 0.7;
        const dy = Math.sin(phase) * 4;
        el.style.translate = `0 ${dy}px`;
      });
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
})();
