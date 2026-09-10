// One-off utility: downloads product images hosted on 1688's CDN (cbu01.alicdn.com),
// which blocks hotlinking via Referer (403), into public/products/ so the site
// serves them from its own origin.
// Usage: node scripts/selfhost-1688-images.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTS } from '../src/data.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'products');
mkdirSync(outDir, { recursive: true });

const targets = PRODUCTS.filter((p) => /cbu01\.alicdn\.com/.test(p.image));
console.log(`Found ${targets.length} products on cbu01 CDN`);

for (const p of targets) {
  const ext = (p.image.split('.').pop() || 'jpg').split('?')[0];
  const file = `${p.id}.${ext}`;
  const res = await fetch(p.image);
  if (!res.ok) {
    console.log(`FAIL ${p.id} -> HTTP ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(join(outDir, file), buf);
  console.log(`SAVED ${p.id} -> /products/${file} (${Math.round(buf.length / 1024)} KB)`);
}
