// Generic post inserter: inserts directly BELOW the newest post, then self-checks.
// Usage: node catalog/insert2.mjs <metaFile.mjs> <chunkPrefix> <chunkCount>
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const [, , metaArg, prefix, countArg] = process.argv;
const root = process.cwd();
const blogPath = path.join(root, 'src', 'content', 'blog.js');
const meta = (await import(url.pathToFileURL(path.resolve(root, metaArg)).href)).default;
const count = Number(countArg);

const raw = fs.readFileSync(blogPath, 'utf8');
const nl = raw.includes('\r\n') ? '\r\n' : '\n';

let text = '';
for (let i = 1; i <= count; i++) {
  text += fs.readFileSync(path.join(root, 'catalog', prefix + i + '.txt'), 'utf8') + '\n@@@BLOCK@@@\n';
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
L.push("    slug: '" + meta.slug + "',");
L.push("    title: '" + esc(meta.title) + "',");
L.push("    date: '" + meta.date + "',");
L.push('    tags: [' + meta.tags.map((t) => "'" + t + "'").join(', ') + '],');
L.push("    cover: '" + meta.cover + "',");
L.push('    excerpt:');
L.push("      '" + esc(meta.excerpt) + "',");
L.push('    sources: [');
for (const s of meta.sources) L.push("      '" + esc(s) + "',");
L.push('    ],');
L.push('    body:');
L.push(bodyJS);
L.push('  },');
const postSrc = L.join(nl) + nl;

const marker = 'export const BLOG_POSTS = [' + nl;
const i = raw.indexOf(marker);
if (i < 0) throw new Error('ANCHOR_MISSING');
const closeTok = '  },' + nl;
const c = raw.indexOf(closeTok, i + marker.length);
if (c < 0) throw new Error('CLOSE_MISSING');
const insertPos = c + closeTok.length;
const out = raw.slice(0, insertPos) + postSrc + raw.slice(insertPos);
fs.writeFileSync(blogPath, out, 'utf8');
console.log('INSERTED_BYTES=' + postSrc.length);

const mod = await import(url.pathToFileURL(blogPath).href + '?v=' + Date.now());
const posts = mod.BLOG_POSTS;
console.log('POSTS_TOTAL=' + posts.length);
console.log('ORDER_TOP4=' + posts.slice(0, 4).map((p) => p.date + ':' + p.slug).join(' | '));
const first = posts[0];
console.log('FIRST_SLUG=' + first.slug);
console.log('FIRST_FIELDS=' + Object.keys(first).join(','));
const p = posts[1];
const body = p.body;
console.log('TARGET_SLUG=' + p.slug + ' EXPECTED=' + meta.slug + ' MATCH=' + (p.slug === meta.slug));
console.log('TARGET_DATE=' + p.date);
console.log('TARGET_COVER=' + p.cover);
console.log('TARGET_SOURCES=' + p.sources.length);
console.log('BODY_CHARS=' + body.length);
console.log('H2_COUNT=' + (body.match(/^## /gm) || []).length);
console.log('BULLET_COUNT=' + (body.match(/^- /gm) || []).length);
console.log('WORDS=' + body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/\s+/).filter(Boolean).length);
console.log('HAS_INQUIRY=' + body.includes('/inquiry'));
console.log('HAS_WHATSAPP=' + body.includes('Message us on WhatsApp'));
console.log('PRODUCT_LINKS=' + Array.from(new Set(Array.from(body.matchAll(/\(\/products\/[^)]+\)/g)).map((m) => m[0]))).join(','));
console.log('LITERAL_LINK_RESIDUE=' + /\]\([^)]*$/.test(body));
console.log('SRC_RAW_EMDASH=' + fs.readFileSync(blogPath, 'utf8').includes(String.fromCharCode(8212)));
