/* RecruitFlow LP — minimal interactions and measurement */
(function () {
  'use strict';

  // dataLayer is initialized by GTM container if present.
  window.dataLayer = window.dataLayer || [];

  function track(event, payload) {
    try {
      window.dataLayer.push(Object.assign({ event: event }, payload || {}));
    } catch (e) {
      // noop
    }
  }

  // --- CTA click tracking ---
  document.addEventListener('click', function (e) {
    var target = e.target.closest('[data-event]');
    if (!target) return;
    var event = target.getAttribute('data-event');
    var position = target.getAttribute('data-position') || 'unknown';
    if (event === 'cta_click') {
      track('cta_click', { position: position });
    }
  });

  // --- Form: lightweight validation + measurement ---
  var form = document.getElementById('lead-form');
  if (form) {
    var errorBox = document.getElementById('form-error');
    var successBox = document.getElementById('form-success');
    var hasStarted = false;

    form.addEventListener('input', function () {
      if (!hasStarted) {
        hasStarted = true;
        track('form_start', { form_id: 'lead-form' });
      }
    }, { once: false });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var requiredEls = form.querySelectorAll('input[required]');
      var firstInvalid = null;
      requiredEls.forEach(function (el) {
        var ok = el.checkValidity() && (el.type !== 'checkbox' || el.checked);
        el.classList.toggle('error', !ok);
        if (!ok && !firstInvalid) firstInvalid = el;
      });

      if (firstInvalid) {
        if (errorBox) {
          errorBox.hidden = false;
        }
        firstInvalid.focus();
        track('form_validation_error', { form_id: 'lead-form' });
        return;
      }

      if (errorBox) errorBox.hidden = true;

      // In a real site, post to backend. Here we simulate success.
      track('form_submit', { form_id: 'lead-form', cv: 'resource_request' });
      if (successBox) successBox.hidden = false;
      form.reset();
    });
  }

  // --- Smooth scroll polyfill for Safari older versions ---
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length <= 1) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
})();
