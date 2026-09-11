// Dumps every image URL referenced by the site (products + categories + hero)
// to catalog/site-images.json so a bulk visual audit can be run.
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTS, CATEGORIES } from '../src/data.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const out = [];

PRODUCTS.forEach((p) => out.push({ label: `product:${p.id}`, url: p.image }));
CATEGORIES.forEach((c) => out.push({ label: `category:${c.id}`, url: c.image }));

writeFileSync(join(root, 'catalog', 'site-images.json'), JSON.stringify(out, null, 2));
console.log('dumped', out.length, 'image references');
