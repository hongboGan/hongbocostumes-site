// Prerenders every public route to static HTML inside dist/, so crawlers read
// real content without executing JavaScript. Run AFTER `vite build`:
//   npm run build   (vite build && node scripts/prerender.mjs)
// Vercel serves these files directly; the catch-all rewrite in vercel.json only
// applies to paths with no matching file (query routes, unknown URLs).
import { createServer } from 'vite';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTS } from '../src/data.js';
import { BLOG_POSTS } from '../src/content/blog.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://www.hongbocostumes.com';

// Query-based category URLs (/products?cat=...) cannot be prerendered as files;
// they stay on the SPA fallback and are excluded here.
const routes = [
  '/',
  '/products',
  ...PRODUCTS.map((p) => `/products/${p.id}`),
  '/inquiry',
  '/blog',
  ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
];

const images = new Map();
for (const p of PRODUCTS) images.set(`/products/${p.id}`, p.image);
for (const p of BLOG_POSTS) images.set(`/blog/${p.slug}`, p.cover);

const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function headTags(route, meta) {
  const title = meta?.title || 'Hongbo Costumes | Halloween & Cosplay Costume Manufacturer';
  const description = meta?.description || '';
  const canonical = `${SITE}${route}`;
  const image = images.get(route);

  return [
    `<title>${esc(title)}</title>`,
    description && `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${route.startsWith('/blog/') ? 'article' : 'website'}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    description && `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:site_name" content="Hongbo Costumes" />`,
    image && `<meta property="og:image" content="${esc(image)}" />`,
  ]
    .filter(Boolean)
    .join('\n    ');
}

function outputPath(route) {
  if (route === '/') return join(dist, 'index.html');
  return join(dist, route.replace(/^\//, ''), 'index.html');
}

const template = readFileSync(join(dist, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) {
  console.error('prerender: dist/index.html has no empty #root container - aborting');
  process.exit(1);
}

const vite = await createServer({
  root,
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom',
});

let failures = 0;
let thinnest = { route: null, size: Infinity };

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

  for (const route of routes) {
    const { html, meta, error } = render(route);
    if (error || !html) {
      failures += 1;
      console.error(`prerender: FAILED ${route} - ${error || 'empty render'}`);
      continue;
    }

    const page = template
      .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
      .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/i, '')
      .replace(/<meta\s+property="og:[^"]+"[\s\S]*?\/>\s*/gi, '')
      .replace(/<link\s+rel="canonical"[^>]*>\s*/i, '')
      .replace('</head>', `  ${headTags(route, meta)}\n  </head>`)
      .replace(
        /<div id="root"><\/div>/,
        `<div id="root" data-prerender="${route}">${html}</div>`
      );

    const file = outputPath(route);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, page, 'utf8');

    if (html.length < thinnest.size) thinnest = { route, size: html.length };
  }
} finally {
  await vite.close();
}

console.log(`prerender: ${routes.length - failures}/${routes.length} routes written to dist/`);
if (thinnest.route) console.log(`prerender: smallest payload ${thinnest.size} bytes (${thinnest.route})`);

if (failures > 0) {
  console.error(`prerender: ${failures} route(s) failed - build is not shippable`);
  process.exit(1);
}
