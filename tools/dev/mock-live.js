#!/usr/bin/env node
/*
 * A tiny stand-in for the Firebase Realtime Database REST API, for trying the live class test on a laptop:
 *   node tools/dev/mock-live.js            (listens on :9099)
 *   LIVE_DB=http://localhost:9099 npm run build && node tools/serve.js
 * It speaks the part the site uses: GET / PUT / PATCH / DELETE on <path>.json, {".sv":"timestamp"},
 * and streaming (Accept: text/event-stream -> "put" and "patch" events). Data is kept in memory only.
 */
'use strict';
const http = require('http');
const root = {};
const streams = [];
const parts = (u) => decodeURIComponent(u.split('?')[0]).replace(/\.json$/, '').split('/').filter(Boolean);
const get = (ks) => ks.reduce((o, k) => (o != null && typeof o === 'object' ? o[k] : undefined), root);
function set(ks, v) {
  if (!ks.length) return;
  let o = root;
  for (let i = 0; i < ks.length - 1; i++) { if (o[ks[i]] == null || typeof o[ks[i]] !== 'object') o[ks[i]] = {}; o = o[ks[i]]; }
  if (v === null || v === undefined) delete o[ks[ks.length - 1]]; else o[ks[ks.length - 1]] = v;
}
const stamp = (v) => (v && typeof v === 'object' ? (v['.sv'] === 'timestamp' ? Date.now() : Object.keys(v).reduce((o, k) => { o[k] = stamp(v[k]); return o; }, Array.isArray(v) ? [] : {})) : v);
function tell(ks, event, data) {
  streams.forEach((s) => {
    if (s.ks.length > ks.length || !s.ks.every((k, i) => k === ks[i])) return;
    s.res.write('event: ' + event + '\ndata: ' + JSON.stringify({ path: '/' + ks.slice(s.ks.length).join('/'), data }) + '\n\n');
  });
}
http.createServer((req, res) => {
  const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, PUT, PATCH, POST, DELETE, OPTIONS', 'Access-Control-Allow-Headers': '*' };
  if (req.method === 'OPTIONS') { res.writeHead(204, cors); return res.end(); }
  const ks = parts(req.url);
  if (req.method === 'GET' && /text\/event-stream/.test(req.headers.accept || '')) {
    res.writeHead(200, Object.assign({ 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' }, cors));
    const v = get(ks);
    res.write('event: put\ndata: ' + JSON.stringify({ path: '/', data: v === undefined ? null : v }) + '\n\n');
    const s = { ks, res }; streams.push(s);
    req.on('close', () => streams.splice(streams.indexOf(s), 1));
    return;
  }
  let body = '';
  req.on('data', (c) => { body += c; });
  req.on('end', () => {
    let out = null;
    try {
      if (req.method === 'GET') { const v = get(ks); out = v === undefined ? null : v; }
      else if (req.method === 'PUT') { out = stamp(JSON.parse(body)); set(ks, out); tell(ks, 'put', out); }
      else if (req.method === 'PATCH') { out = stamp(JSON.parse(body)); Object.keys(out).forEach((k) => set(ks.concat(k.split('/')), out[k])); tell(ks, 'patch', out); }
      else if (req.method === 'DELETE') { set(ks, null); tell(ks, 'put', null); }
    } catch (e) { res.writeHead(400, cors); return res.end(JSON.stringify({ error: String(e.message) })); }
    res.writeHead(200, Object.assign({ 'Content-Type': 'application/json' }, cors));
    res.end(JSON.stringify(out));
  });
}).listen(process.env.PORT || 9099, () => console.log('mock realtime database on :' + (process.env.PORT || 9099)));
