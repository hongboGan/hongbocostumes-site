import { useEffect } from 'react';

const SITE_URL = 'https://www.hongbocostumes.com';

// Sets document title / meta description / canonical + og:url for a route.
export function usePageMeta(title, description, path = '') {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (selector, attr, value, create) => {
      if (!value) return;
      let el = document.head.querySelector(selector);
      if (!el && create) {
        el = document.createElement(create);
        if (create === 'meta') el.setAttribute(create === 'meta' ? 'name' : 'rel', '');
        document.head.appendChild(el);
      }
      if (el) el.setAttribute(attr, value);
    };

    if (description) {
      let meta = document.head.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical && path !== undefined) {
      canonical.setAttribute('href', `${SITE_URL}${path || ''}`);
    }
    const ogUrl = document.head.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `${SITE_URL}${path || ''}`);

    setMeta('meta[property="og:title"]', 'content', title, 'meta');
  }, [title, description, path]);
}
