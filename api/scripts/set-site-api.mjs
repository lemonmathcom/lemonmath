// Writes the classroom API address into data/curriculum.json ("site" → "api"), keeping the file's layout.
// Used by .github/workflows/api.yml after a deploy:  node api/scripts/set-site-api.mjs https://lemonmath-api.<name>.workers.dev
import fs from 'node:fs';
const url = String(process.argv[2] || '').replace(/\/+$/, '');
if (!/^https:\/\/[a-z0-9.-]+$/.test(url)) { console.error('Bad URL: ' + url); process.exit(1); }
const file = new URL('../../data/curriculum.json', import.meta.url);
let s = fs.readFileSync(file, 'utf8');
const cur = JSON.parse(s).site.api || '';
if (cur === url) { console.log('unchanged'); process.exit(0); }
const start = s.indexOf('"site": {'), end = s.indexOf('\n  },', start);
if (start < 0 || end < 0) { console.error('No "site" block found'); process.exit(1); }
let block = s.slice(start, end);
if (/"api":\s*"[^"]*"/.test(block)) block = block.replace(/"api":\s*"[^"]*"/, '"api": "' + url + '"');
else block = block.replace(/\s*$/, '') + ',\n    "api": "' + url + '"';
s = s.slice(0, start) + block + s.slice(end);
JSON.parse(s);
fs.writeFileSync(file, s);
console.log('changed');
