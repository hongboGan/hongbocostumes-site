// Insert the packing-volume post at the top of BLOG_POSTS, then self-check.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const root = process.cwd();
const blogPath = path.join(root, 'src', 'content', 'blog.js');
const catDir = path.join(root, 'catalog');

const raw = fs.readFileSync(blogPath, 'utf8');
const nl = raw.includes('\r\n') ? '\r\n' : '\n';
console.log('CRLF=' + raw.includes('\r\n'));

let text = '';
for (let i = 1; i <= 7; i++) {
  text += fs.readFileSync(path.join(catDir, 'pv' + i + '.txt'), 'utf8') + '\n@@@BLOCK@@@\n';
}
const blocks = text
  .split(/\r?\n@@@BLOCK@@@\r?\n/)
  .map((s) => s.replace(/^\uFEFF/, '').trim())
  .filter((s) => s.length > 0);
console.log('BLOCKS=' + blocks.length);

const esc = (s) => s.replace(/'/g, "\\'").replace(/\n/g, '\\n');
const bodyJS = blocks.map((b) => "      '" + esc(b) + '\\n\\n\'').join(' +' + nl);

const L = [];
L.push('  {');
L.push("    slug: 'costume-packing-volume-shipping-cost',");
L.push("    title: 'Costume Packing Volume: Why Bulky Costumes Cost More to Ship',");
L.push("    date: '2026-10-05',");
L.push("    tags: ['Wholesale', 'Logistics', 'Product specs'],");
L.push("    cover: '/products/custom-3d-bodysuit.jpg',");
L.push('    excerpt:');
L.push("      'A costume\\'s freight bill is set by the space it takes up rather than the weight on the scale \\u2014 which makes packability an order spec, not a logistics afterthought.',");
L.push('    sources: [');
L.push("      'r/shipping costume and apparel freight cost threads',");
L.push("      'r/CosplayHelp transporting props and packing discussions',");
L.push("      'r/Fabrics vacuum and shrink-pack fabric risk thread',");
L.push("      'r/logistics dimensional weight and density class thread',");
L.push('    ],');
L.push('    body:');
L.push(bodyJS);
L.push('  },');
const postSrc = L.join(nl) + nl;

const marker = 'export const BLOG_POSTS = [' + nl;
const i = raw.indexOf(marker);
if (i < 0) throw new Error('ANCHOR_MISSING');
const out = raw.slice(0, i + marker.length) + postSrc + raw.slice(i + marker.length);
fs.writeFileSync(blogPath, out, 'utf8');
console.log('INSERTED_BYTES=' + postSrc.length);

const mod = await import(url.pathToFileURL(blogPath).href + '?v=' + Date.now());
const posts = mod.BLOG_POSTS;
const first = posts[0];
console.log('POSTS_TOTAL=' + posts.length);
console.log('FIRST_SLUG=' + first.slug);
console.log('FIRST_FIELDS=' + Object.keys(first).join(','));
console.log('DATE=' + first.date);
console.log('COVER=' + first.cover);
console.log('BODY_CHARS=' + first.body.length);
console.log('H2_COUNT=' + (first.body.match(/^## /gm) || []).length);
console.log('SUG_COUNT=' + (first.body.match(/^        - /gm) || []).length);
const body = first.body;
for (const s of ['/products/custom-3d-bodysuit', '/products/dino-inflatable', '/products/templar-knight-set', '/products/tactical-ghost-mask', '/inquiry', 'Message us on WhatsApp']) {
  console.log('HAS ' + s + '=' + body.includes(s));
}
console.log('WORDS=' + body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/\s+/).filter(Boolean).length);
console.log('BODY_TAIL=' + body.slice(-70).replace(/\n/g, '|'));
console.log('LITERAL_LINK_RESIDUE=' + /\]\([^)]*$/.test(body));
