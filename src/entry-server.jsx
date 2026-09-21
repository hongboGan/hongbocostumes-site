import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App.jsx';
import { setMetaCollector } from './lib/seo.js';

// Prerender entry: renders one route to static HTML and reports the page
// metadata that usePageMeta captured during that render.
let captured = null;

setMetaCollector((meta) => {
  captured = meta;
});

export function render(path) {
  captured = null;
  try {
    const html = renderToString(
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>
    );
    return { html, meta: captured };
  } catch (err) {
    return { html: '', meta: captured, error: err?.message || String(err) };
  }
}
