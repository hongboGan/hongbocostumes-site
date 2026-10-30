// Prerenders every public route to static HTML inside dist/, so crawlers read
// real content without executing JavaScript. Run AFTER `vite build`:
//   npm run build   (vite build && node scripts/prerender.mjs)
// Vercel serves these files directly; the catch-all rewrite in vercel.json only
// applies to paths with no matching file (query routes, unknown URLs).
import { createServer } from 'vite';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATEGORIES, PRODUCTS } from '../src/data.js';
import { BLOG_POSTS } from '../src/content/blog.js';
import { VIDEOS } from '../src/content/videos.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://www.hongbocostumes.com';

// Category pages live at /collections/:slug so they can be prerendered as real
// files with their own title, H1 and filtered grid. Legacy /products?cat=...
// links still resolve client-side but are no longer the canonical form.
const routes = [
  '/',
  '/products',
  ...CATEGORIES.map((c) => `/collections/${c.id}`),
  ...PRODUCTS.map((p) => `/products/${p.id}`),
  '/inquiry',
  '/blog',
  ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
  '/videos',
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

const ORG_ID = `${SITE}/#organization`;
const SITE_ID = `${SITE}/#website`;

const absUrl = (p) => (p ? (p.startsWith('http') ? p : `${SITE}${p}`) : undefined);

const crumb = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.path}`,
  })),
});

// Structured data is emitted into the static HTML, not the client bundle: the
// crawlers that matter here (Googlebot's first pass, Bingbot, GPTBot) never run
// JavaScript, so anything injected after hydration is invisible to them.
function structuredData(route) {
  const graph = [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Hongbo Costumes',
      legalName: 'Wuhan Ouwanni Clothing Co., Ltd.',
      url: SITE,
      description:
        'Factory-direct Halloween, cosplay and stage costume manufacturer in Wuhan, China. OEM/ODM production, low MOQ and FBA-ready packing.',
      email: 'Zoe@hoburn.group',
      telephone: '+86 181 2042 4228',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Wuhan',
        addressRegion: 'Hubei',
        addressCountry: 'CN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+86 181 2042 4228',
        email: 'Zoe@hoburn.group',
        availableLanguage: ['en', 'zh'],
        areaServed: 'Worldwide',
      },
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: SITE,
      name: 'Hongbo Costumes',
      inLanguage: 'en',
      publisher: { '@id': ORG_ID },
    },
  ];

  if (route === '/products') {
    graph.push({
      '@type': 'CollectionPage',
      name: 'Wholesale Costumes & Cosplay Catalog',
      url: `${SITE}/products`,
      isPartOf: { '@id': SITE_ID },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: PRODUCTS.length,
        itemListElement: PRODUCTS.slice(0, 30).map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE}/products/${p.id}`,
          name: p.name,
        })),
      },
    });
  }

  if (route.startsWith('/collections/')) {
    const id = route.split('/')[2];
    const cat = CATEGORIES.find((c) => c.id === id);
    const items = PRODUCTS.filter((p) => p.cat === id);
    if (cat) {
      graph.push({
        '@type': 'CollectionPage',
        name: `${cat.label} — wholesale costumes`,
        description: cat.blurb,
        url: `${SITE}${route}`,
        isPartOf: { '@id': SITE_ID },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: items.length,
          itemListElement: items.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${SITE}/products/${p.id}`,
            name: p.name,
          })),
        },
      });
      graph.push(
        crumb([
          { name: 'Home', path: '/' },
          { name: 'Collections', path: '/products' },
          { name: cat.label, path: route },
        ])
      );
    }
  }

  if (route.startsWith('/products/')) {
    const p = PRODUCTS.find((x) => `/products/${x.id}` === route);
    if (p) {
      graph.push({
        '@type': 'Product',
        '@id': `${SITE}${route}#product`,
        name: p.name,
        alternateName: p.fullTitle,
        description: p.blurb,
        image: [absUrl(p.image)],
        sku: p.id,
        category: p.ali,
        brand: { '@type': 'Brand', name: 'Hongbo Costumes' },
        manufacturer: { '@id': ORG_ID },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: p.priceFrom,
          highPrice: p.priceTo,
          offerCount: 1,
          availability: 'https://schema.org/InStock',
          url: `${SITE}${route}`,
          seller: { '@id': ORG_ID },
        },
      });
      graph.push(
        crumb([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: p.name, path: route },
        ])
      );
    }
  }

  if (route.startsWith('/blog/')) {
    const post = BLOG_POSTS.find((x) => `/blog/${x.slug}` === route);
    if (post) {
      graph.push({
        '@type': 'BlogPosting',
        '@id': `${SITE}${route}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        image: [absUrl(post.cover)],
        articleSection: post.tags,
        inLanguage: 'en',
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}${route}` },
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
      });
      graph.push(
        crumb([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: route },
        ])
      );
    }
  }

  if (route === '/videos') {
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${SITE}/videos#page`,
      name: 'Workshop Videos — Costume & Prop Craft Technique',
      description:
        'Curated craft videos on EVA foam armor, patterning and finishing, for buyers judging costume build quality.',
      isPartOf: { '@id': SITE_ID },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: VIDEOS.map((v, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'VideoObject',
            name: v.title,
            description: v.why,
            thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
            embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
            contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
            duration: `PT${v.duration.split(':')[0]}M${v.duration.split(':')[1]}S`,
            publisher: { '@type': 'Organization', name: v.channel },
          },
        })),
      },
    });
    graph.push(
      crumb([
        { name: 'Home', path: '/' },
        { name: 'Videos', path: '/videos' },
      ])
    );
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
    /<\//g,
    '<\\/'
  );
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
      .replace('</head>', `  ${headTags(route, meta)}\n    <script type="application/ld+json">${structuredData(route)}</script>\n  </head>`)
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
