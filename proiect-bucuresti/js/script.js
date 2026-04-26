/* =========================================================
   BUCUREȘTI NOCTURN — JavaScript
   Turnea Cristian | Facultatea de Marketing, ASE | An II
   Grupa 1734 | Seria C
   ========================================================= */

(function () {
  'use strict';

  /* ---- NAV: scroll state ---- */
  const nav       = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ---- NAV: hamburger toggle ---- */
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Close nav when a link is clicked (mobile) */
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ---- STAR FIELD ---- */
  (function buildStars() {
    const container = document.getElementById('stars');
    const count = window.innerWidth < 600 ? 80 : 160;

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2.2 + 0.4;
      const x    = Math.random() * 100;
      const y    = Math.random() * 100;
      const dur  = (Math.random() * 4 + 3).toFixed(2);
      const del  = (Math.random() * 6).toFixed(2);
      const op   = (Math.random() * 0.55 + 0.1).toFixed(2);

      Object.assign(star.style, {
        position:     'absolute',
        width:        `${size}px`,
        height:       `${size}px`,
        borderRadius: '50%',
        background:   '#e8d09a',
        left:         `${x}%`,
        top:          `${y}%`,
        opacity:      op,
        animation:    `twinkle ${dur}s ${del}s ease-in-out infinite`,
        pointerEvents:'none',
      });

      container.appendChild(star);
    }

    /* Inject twinkle keyframes */
    if (!document.getElementById('twinkle-kf')) {
      const style = document.createElement('style');
      style.id = 'twinkle-kf';
      style.textContent = `
        @keyframes twinkle {
          0%, 100% { opacity: var(--op, 0.2); transform: scale(1); }
          50%       { opacity: 0.05;           transform: scale(0.6); }
        }
      `;
      document.head.appendChild(style);
    }
  })();

  /* ---- LIGHTBOX ---- */
  const lightbox        = document.getElementById('lightbox');
  const lightboxImg     = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose   = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery__img-wrap').forEach(wrap => {
    wrap.addEventListener('click', () => {
      const img     = wrap.querySelector('.gallery__img');
      const caption = wrap.closest('.gallery__frame')
                         .querySelector('.gallery__name').textContent;
      lightboxImg.src     = img.src;
      lightboxImg.alt     = img.alt;
      lightboxCaption.textContent = caption;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ---- SCROLL REVEAL ---- */
  const revealEls = document.querySelectorAll(
    '.gallery__frame, .story__block, .about__card, .about__project, .section-header'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings in the same parent
          const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 80}ms`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(el => observer.observe(el));

  /* ---- SMOOTH active nav link highlight on scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav__link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

})();
