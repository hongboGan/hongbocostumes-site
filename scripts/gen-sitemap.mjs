// Generates public/sitemap.xml from the product catalog in src/data.js.
// Usage: node scripts/gen-sitemap.mjs
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTS, CATEGORIES } from '../src/data.js';
import { BLOG_POSTS } from '../src/content/blog.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.hongbocostumes.com';
const today = new Date().toISOString().slice(0, 10);
const sitemapPath = join(root, 'public', 'sitemap.xml');

// Preserve the lastmod a URL already carried. Stamping every URL with today's
// date on each run teaches crawlers to ignore lastmod entirely.
const prevLastmod = new Map();
if (existsSync(sitemapPath)) {
  const prev = readFileSync(sitemapPath, 'utf8');
  for (const m of prev.matchAll(
    /<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g
  )) {
    prevLastmod.set(m[1], m[2]);
  }
}

const urls = [
  { loc: `${BASE}/`, priority: '1.0', freq: 'weekly' },
  { loc: `${BASE}/products`, priority: '0.9', freq: 'weekly' },
  ...CATEGORIES.map((c) => ({
    loc: `${BASE}/collections/${c.id}`,
    priority: '0.7',
    freq: 'weekly',
  })),
  ...PRODUCTS.map((p) => ({
    loc: `${BASE}/products/${p.id}`,
    priority: '0.8',
    freq: 'monthly',
  })),
  { loc: `${BASE}/inquiry`, priority: '0.9', freq: 'yearly' },
  { loc: `${BASE}/blog`, priority: '0.9', freq: 'daily' },
  ...BLOG_POSTS.map((p) => ({
    loc: `${BASE}/blog/${p.slug}`,
    priority: '0.7',
    freq: 'monthly',
    lastmod: p.date,
  })),
];

const body = urls
  .map(
    (u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod || prevLastmod.get(u.loc) || today}</lastmod>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

mkdirSync(join(root, 'public'), { recursive: true });
writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml written with ${urls.length} URLs`);
