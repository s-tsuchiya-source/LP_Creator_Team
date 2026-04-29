/* ===========================================================
   common.js — 4LP共通の挙動
   - スクロールリビール（IntersectionObserver）
   - 数値カウントアップ（hero KPI）
   - スティッキーCTA表示制御
   - prefers-reduced-motion 完全尊重
   =========================================================== */

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const docReady = (fn) => {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };

  // ---- 1. Scroll reveal (multi-motion) -------------------------------------
  // Visual Expression Layer: 単一 translateY reveal の連発を避けるため、
  // data-motion 属性で種別を指定可能。
  // - reveal: translateY fade-in（デフォルト・既存互換）
  // - slide-x: 横スライド（プロセス・時系列向け）
  // - scale: スケール拡大（数値強調・バッジ向け）
  // - fade: フェードのみ（CV直前・控えめ向け）
  function initReveal() {
    const els = document.querySelectorAll('[data-reveal], [data-motion]');
    if (!els.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach((el) => {
        el.classList.add('is-revealed');
        if (el.dataset.motion) el.classList.add('is-' + el.dataset.motion);
      });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-revealed');
          const motion = e.target.dataset.motion;
          if (motion) e.target.classList.add('is-' + motion);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
  }

  // ---- 2. Number count-up ---------------------------------------------------
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function initCountUp() {
    const targets = document.querySelectorAll('[data-countup]');
    if (!targets.length) return;
    if (reduceMotion) {
      targets.forEach((el) => {
        el.textContent = el.dataset.countup;
      });
      return;
    }
    const animate = (el) => {
      const end = parseFloat(el.dataset.countup);
      const decimals = (el.dataset.countup.split('.')[1] || '').length;
      const duration = parseInt(el.dataset.duration || '1400', 10);
      const startTime = performance.now();
      const formatter = new Intl.NumberFormat('ja-JP', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      const tick = (now) => {
        const t = Math.min((now - startTime) / duration, 1);
        const v = end * easeOutCubic(t);
        el.textContent = formatter.format(v);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = formatter.format(end);
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
    targets.forEach((el) => io.observe(el));
  }

  // ---- 3. Sticky CTA on scroll past hero -----------------------------------
  function initStickyCTA() {
    const sticky = document.querySelector('[data-sticky-cta]');
    const trigger = document.querySelector('[data-sticky-trigger]');
    if (!sticky || !trigger) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        sticky.classList.toggle('is-visible', !e.isIntersecting && e.boundingClientRect.top < 0);
      });
    }, { threshold: 0 });
    io.observe(trigger);
  }

  // ---- 4. Smooth anchor scroll with offset for sticky header ---------------
  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const headerH = document.querySelector('.site-header')?.offsetHeight || 0;
        const y = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
        window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
  }

  // ---- 5. Boot --------------------------------------------------------------
  docReady(() => {
    initReveal();
    initCountUp();
    initStickyCTA();
    initAnchors();
  });

  // expose for LP-specific scripts
  window.LPCommon = { reduceMotion, easeOutCubic };
})();
