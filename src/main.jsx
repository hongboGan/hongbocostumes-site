import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoutes } from './App.jsx';
import './styles.css';

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

// Prerendered pages carry data-prerender="<path>". Only hydrate when it matches
// the current URL; otherwise (SPA fallback, query routes) mount fresh so the
// stale static markup is replaced instead of hydrated against.
function normalize(path) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

const container = document.getElementById('root');
const tree = <App />;
const prerendered = container.dataset.prerender;
const current = normalize(window.location.pathname + window.location.search);

if (prerendered && normalize(prerendered) === current) {
  hydrateRoot(container, tree);
} else {
  container.replaceChildren();
  createRoot(container).render(tree);
}
