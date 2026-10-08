// Re-sort BLOG_POSTS newest-first, preserving each post's source text verbatim.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const root = process.cwd();
const blogPath = path.join(root, 'src', 'content', 'blog.js');
const raw = fs.readFileSync(blogPath, 'utf8');
const nl = raw.includes('\r\n') ? '\r\n' : '\n';

const marker = 'export const BLOG_POSTS = [' + nl;
const m = raw.indexOf(marker);
if (m < 0) throw new Error('ANCHOR_MISSING');
const startIdx = m + marker.length;
const endIdx = raw.indexOf(nl + '];', startIdx);
if (endIdx < 0) throw new Error('ARRAY_END_MISSING');

const body = raw.slice(startIdx, endIdx);
const blocks = body.match(/  \{\r?\n[\s\S]*?\r?\n  \},/g);
if (!blocks) throw new Error('NO_BLOCKS');
console.log('BLOCKS_FOUND=' + blocks.length);

const withDate = blocks.map((b) => {
  const d = (b.match(/    date: '(\d{4}-\d{2}-\d{2})'/) || [])[1];
  const s = (b.match(/    slug: '([^']+)'/) || [])[1];
  if (!d || !s) throw new Error('PARSE_FAIL');
  return { d, s, b };
});
console.log('BEFORE=' + withDate.map((x) => x.d + ':' + x.s).slice(0, 5).join(' | '));

withDate.sort((x, y) => (x.d < y.d ? 1 : x.d > y.d ? -1 : 0));

const reconciled = withDate.map((x) => x.b).join(nl);
const out = raw.slice(0, startIdx) + reconciled + raw.slice(endIdx);
if (!out.includes('export const BLOG_POSTS = [')) throw new Error('LOST_EXPORT');
fs.writeFileSync(blogPath, out, 'utf8');

const mod = await import(url.pathToFileURL(blogPath).href + '?v=' + Date.now());
const posts = mod.BLOG_POSTS;
console.log('POSTS_TOTAL=' + posts.length);
console.log('AFTER=' + posts.map((p) => p.date + ':' + p.slug).slice(0, 5).join(' | '));
let descending = true;
for (let i = 1; i < posts.length; i++) if (posts[i - 1].date < posts[i].date) descending = false;
console.log('DESCENDING=' + descending);
const f = posts[0];
console.log('FIRST_FIELDS=' + Object.keys(f).join(','));
console.log('EVERY_HAS_BODY=' + posts.every((p) => typeof p.body === 'string' && p.body.length > 500));
