// ===================================================
// ROYALTY MASSAGE & WELLNESS — SCRIPT
// ===================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    var cta = document.querySelector('.header-cta');

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.classList.toggle('is-open', isOpen);
      if (cta) {
        cta.classList.toggle('is-open', isOpen);
      }
    });

    // close menu after tapping a link
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        if (cta) {
          cta.classList.remove('is-open');
        }
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.getElementById('header');
  var lastScroll = 0;

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y > 12) {
      header.style.boxShadow = '0 4px 20px rgba(43,38,32,0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastScroll = y;
  });

});
