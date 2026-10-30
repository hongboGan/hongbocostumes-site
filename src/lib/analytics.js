import { ANALYTICS } from '../config/analytics.js';

let started = false;

function loadScript(src) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadClarity(id) {
  // Official Clarity snippet, kept inline so the project ID is the only input.
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', id);
}

export function track(event, params = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') window.gtag('event', event, params);
  if (typeof window.clarity === 'function') window.clarity('event', event);
}

function classifyLink(href) {
  if (!href) return null;
  if (href.includes('wa.me') || href.includes('api.whatsapp.com')) return 'whatsapp_click';
  if (href.startsWith('mailto:')) return 'email_click';
  if (href.startsWith('tel:')) return 'phone_click';
  if (/\.pdf(\?|#|$)/i.test(href)) return 'catalog_download';
  return null;
}

// One delegated listener covers every CTA on the site, including cards rendered
// after navigation, so per-component handlers are not needed.
function onClick(e) {
  const el = e.target instanceof Element ? e.target.closest('a[href]') : null;
  if (!el) return;
  const event = classifyLink(el.getAttribute('href') || '');
  if (!event) return;
  track(event, {
    link_url: el.href,
    page_path: window.location.pathname + window.location.search,
    link_text: (el.textContent || '').trim().slice(0, 80),
  });
}

export function initAnalytics() {
  if (started || typeof window === 'undefined') return;
  started = true;

  if (ANALYTICS.ga4) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.ga4}`);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', ANALYTICS.ga4, { anonymize_ip: true });
  }

  if (ANALYTICS.clarity) loadClarity(ANALYTICS.clarity);

  if (ANALYTICS.ga4 || ANALYTICS.clarity) {
    document.addEventListener('click', onClick, true);
  }
}
