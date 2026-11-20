/*
 * Lemonmath classroom API (Cloudflare Worker + D1).
 *
 * Teachers: sign up with email + password (the browser turns the password into a PBKDF2 hash first; the server keeps
 * only HMAC(PEPPER, that hash)). A recovery code shown once at sign-up replaces "forgot password" e-mails.
 * Classes hold a list of students, each with a 4-digit personal code. An assignment is a snapshot of questions from
 * the site's question bank, open to one class between open_at and close_at. The server decides the time: answers that
 * reach it after the deadline are refused, except answers locked on the student's phone before the deadline and sent
 * within GRACE (no connection at the time); those are marked late.
 *
 * Routes (JSON in, JSON out):
 *   POST /v1/auth/signup | /v1/auth/login | /v1/auth/recover | /v1/auth/logout
 *   GET  /v1/me            DELETE /v1/me (removes the account and everything in it)
 *   GET  /v1/classes       POST /v1/classes        GET|PATCH|DELETE /v1/classes/:id
 *   GET  /v1/classes/:id/assignments              POST /v1/assignments
 *   GET|PATCH|DELETE /v1/assignments/:code        POST /v1/assignments/:code/reset
 *   GET  /v1/hw/:code      POST /v1/hw/:code/start   PUT /v1/hw/:code/save   POST /v1/hw/:code/submit   POST /v1/hw/:code/result
 *   GET  /v1/info (is e-mail switched on?)   POST /v1/auth/reset-request | /v1/auth/reset (6-digit code by e-mail)   POST /v1/me/recovery (new recovery code)
 * Two kinds of assignment: homework (mode "home", any window, time limit optional) and tests (mode "test": a start time,
 * a time limit, a few minutes to come in late, personal code and shuffling always on, answers shown after closing).
 * E-mail (welcome mail with the recovery code, password reset codes) goes through Resend when the secret RESEND_API_KEY
 * is set; without it everything else works and the recovery code is the only way back in.
 * A daily cron removes assignments 30 days after they close, with their answers, and expired sessions.
 */

const MIN = 60e3, DAY = 864e5;
const GRACE = 15 * MIN;            // offline students: answers locked before the deadline may arrive this much later
const SLACK = 5000;                // clock and network slack at the deadline
const SESSION_DAYS = 30, KEEP_DAYS = 30, MAX_PIN_FAILS = 8, MAX_LOGIN_FAILS = 8;
const MAXP = { mc: 0.25, tf: 1, sa: 0.5 }, TFP = [0, 0.1, 0.25, 0.5, 1];
const CODE_ABC = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
const MAIL_PER_DAY = 90;           // Resend's free plan allows 100 e-mails a day
const RESET_MIN = 15, RESET_TRIES = 5, RESET_PER_HOUR = 3;

class HttpError extends Error {
  constructor(status, code, extra) { super(code); this.status = status; this.code = code; this.extra = extra || {}; }
}
const fail = (status, code, extra) => { throw new HttpError(status, code, extra); };

export default {
  async fetch(req, env, ctx) {
    const cors = corsHeaders(env, req.headers.get('origin') || '');
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    let res;
    try {
      res = await route(req, env, ctx);
    } catch (e) {
      if (e instanceof HttpError) res = json(Object.assign({ error: e.code, now: Date.now() }, e.extra), e.status);
      else { console.error(e && e.stack ? e.stack : String(e)); res = json({ error: 'server' }, 500); }
    }
    Object.keys(cors).forEach((k) => res.headers.set(k, cors[k]));
    return res;
  },
  async scheduled(event, env, ctx) { ctx.waitUntil(cleanup(env)); }
};

function corsHeaders(env, origin) {
  const allow = String(env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  const ok = allow.includes(origin) || (env.ALLOW_LOCALHOST === '1' && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin));
  const h = { 'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Max-Age': '86400', 'Vary': 'Origin' };
  if (ok) h['Access-Control-Allow-Origin'] = origin;
  return h;
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
}

async function readBody(req, limit) {
  const t = await req.text();
  if (t.length > (limit || 64e3)) fail(413, 'too_big');
  if (!t) return {};
  try { const b = JSON.parse(t); if (b && typeof b === 'object' && !Array.isArray(b)) return b; } catch (e) { /* fall through */ }
  fail(400, 'bad_json');
}

async function route(req, env, ctx) {
  const url = new URL(req.url), p = url.pathname.replace(/\/+$/, '').split('/').slice(1), m = req.method;
  if (p[0] !== 'v1') return !p.length ? json({ ok: true, service: 'lemonmath-api' }) : fail(404, 'not_found');
  const [, a, b, c] = p;
  if (a === 'auth') {
    if (m === 'POST' && b === 'signup') return signup(req, env, ctx);
    if (m === 'POST' && b === 'reset-request') return resetRequest(req, env, ctx);
    if (m === 'POST' && b === 'reset') return resetWithCode(req, env);
    if (m === 'POST' && b === 'login') return login(req, env);
    if (m === 'POST' && b === 'recover') return recover(req, env);
    if (m === 'POST' && b === 'logout') return logout(req, env);
  }
  if (a === 'info' && !b && m === 'GET') return json({ email: !!env.RESEND_API_KEY, now: Date.now() });
  if (a === 'me' && b === 'recovery' && m === 'POST') return newRecovery(req, env, ctx);
  if (a === 'me' && !b) {
    if (m === 'GET') { const t = await auth(req, env); return json({ teacher: pubTeacher(t), now: Date.now() }); }
    if (m === 'DELETE') return deleteMe(req, env);
  }
  if (a === 'classes') {
    if (!b && m === 'GET') return listClasses(req, env);
    if (!b && m === 'POST') return createClass(req, env);
    if (b && !c && m === 'GET') return getClass(req, env, b);
    if (b && !c && m === 'PATCH') return patchClass(req, env, b);
    if (b && !c && m === 'DELETE') return deleteClass(req, env, b);
    if (b && c === 'assignments' && m === 'GET') return listAssignments(req, env, b);
  }
  if (a === 'assignments') {
    if (!b && m === 'POST') return createAssignment(req, env);
    if (b && !c && m === 'GET') return getAssignment(req, env, b.toUpperCase());
    if (b && !c && m === 'PATCH') return patchAssignment(req, env, b.toUpperCase());
    if (b && !c && m === 'DELETE') return deleteAssignment(req, env, b.toUpperCase());
    if (b && c === 'reset' && m === 'POST') return resetAttempt(req, env, b.toUpperCase());
  }
  if (a === 'hw' && b) {
    const code = b.toUpperCase();
    if (!c && m === 'GET') return hwInfo(env, code);
    if (c === 'start' && m === 'POST') return hwStart(req, env, code);
    if (c === 'save' && (m === 'PUT' || m === 'POST')) return hwSave(req, env, code, false);   // POST: navigator.sendBeacon when the page is closed
    if (c === 'submit' && m === 'POST') return hwSave(req, env, code, true);
    if (c === 'result' && m === 'POST') return hwResult(req, env, code);
  }
  fail(404, 'not_found');
}

/* ------------------------------------------------------------------ crypto helpers */
const enc = new TextEncoder();
const hex = (buf) => Array.from(new Uint8Array(buf), (x) => x.toString(16).padStart(2, '0')).join('');
async function sha256(s) { return hex(await crypto.subtle.digest('SHA-256', enc.encode(s))); }
async function hmac(env, s) {
  if (!env.PEPPER || String(env.PEPPER).length < 16) fail(500, 'config');
  const key = await crypto.subtle.importKey('raw', enc.encode(env.PEPPER), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return hex(await crypto.subtle.sign('HMAC', key, enc.encode(s)));
}
function same(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let r = 0; for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
function randBytes(n) { return crypto.getRandomValues(new Uint8Array(n)); }
function randId(n) { const abc = 'abcdefghijkmnopqrstuvwxyz23456789'; return Array.from(randBytes(n || 16), (x) => abc[x % abc.length]).join(''); }
function randCode(n) { return Array.from(randBytes(n), (x) => CODE_ABC[x % CODE_ABC.length]).join(''); }
function randInt(n) { const x = new Uint32Array(1); crypto.getRandomValues(x); return x[0] % n; }
function shuffled(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = randInt(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function newPin(used) { for (let k = 0; k < 50; k++) { const s = String(randInt(10000)).padStart(4, '0'); if (!used.has(s)) { used.add(s); return s; } } return String(randInt(10000)).padStart(4, '0'); }

/* ------------------------------------------------------------------ validation helpers */
const clean = (s, max) => String(s == null ? '' : s).replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
const normEmail = (s) => String(s || '').trim().toLowerCase();
const isEmail = (s) => /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/.test(s) && s.length <= 254;
const isPwHash = (s) => typeof s === 'string' && /^[0-9a-f]{64}$/.test(s);
const normRc = (s) => String(s || '').toUpperCase().replace(/[^0-9A-Z]/g, '');
function num(v, lo, hi, dflt) { const n = Number(v); if (!Number.isFinite(n)) return dflt; return Math.min(hi, Math.max(lo, Math.round(n))); }
function nickOf(name) { const w = String(name).trim().split(/\s+/); return w[w.length - 1] || name; }

/* ------------------------------------------------------------------ teacher accounts */
function pubTeacher(t) { return { id: t.id, email: t.email, name: t.name, school: t.school }; }

async function newSession(env, teacherId) {
  const token = hex(randBytes(32)), now = Date.now();
  await env.DB.prepare('INSERT INTO sessions (token, teacher_id, expires_at) VALUES (?, ?, ?)').bind(await sha256(token), teacherId, now + SESSION_DAYS * DAY).run();
  return token;
}

async function auth(req, env) {
  const h = req.headers.get('authorization') || '', m = /^Bearer ([0-9a-f]{64})$/.exec(h);
  if (!m) fail(401, 'login');
  const row = await env.DB.prepare('SELECT t.* , s.expires_at AS exp FROM sessions s JOIN teachers t ON t.id = s.teacher_id WHERE s.token = ?').bind(await sha256(m[1])).first();
  if (!row || row.exp < Date.now()) fail(401, 'login');
  return row;
}

async function signup(req, env, ctx) {
  const b = await readBody(req), email = normEmail(b.email), name = clean(b.name, 80), school = clean(b.school, 120);
  if (!isEmail(email)) fail(400, 'bad_email');
  if (!name) fail(400, 'bad_name');
  if (!isPwHash(b.pw)) fail(400, 'bad_password');
  if (await env.DB.prepare('SELECT 1 FROM teachers WHERE email = ?').bind(email).first()) fail(409, 'email_taken');
  const id = randId(16), rc = randCode(12), now = Date.now();
  await env.DB.prepare('INSERT INTO teachers (id, email, name, school, pw, rc, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .bind(id, email, name, school, await hmac(env, 'pw:' + email + ':' + b.pw), await hmac(env, 'rc:' + email + ':' + rc), now).run();
  const token = await newSession(env, id), shown = rc.match(/.{4}/g).join('-');
  const mailed = await mailLater(env, ctx, 'welcome', email, mailWelcome(name, shown, b.lang === 'en'));
  return json({ token, teacher: { id, email, name, school }, recovery: shown, mailed, now });
}

async function checkLock(t) { if (t && t.locked_until > Date.now()) fail(429, 'locked', { until: t.locked_until }); }
async function noteFail(env, t) {
  if (!t) return;
  const f = t.fails + 1, lock = f >= MAX_LOGIN_FAILS;
  await env.DB.prepare('UPDATE teachers SET fails = ?, locked_until = ? WHERE id = ?').bind(lock ? 0 : f, lock ? Date.now() + 15 * MIN : t.locked_until, t.id).run();
}

async function login(req, env) {
  const b = await readBody(req), email = normEmail(b.email);
  if (!isEmail(email) || !isPwHash(b.pw)) fail(401, 'bad_login');
  const t = await env.DB.prepare('SELECT * FROM teachers WHERE email = ?').bind(email).first();
  await checkLock(t);
  if (!t || !same(await hmac(env, 'pw:' + email + ':' + b.pw), t.pw)) { await noteFail(env, t); fail(401, 'bad_login'); }
  if (t.fails) await env.DB.prepare('UPDATE teachers SET fails = 0 WHERE id = ?').bind(t.id).run();
  return json({ token: await newSession(env, t.id), teacher: pubTeacher(t), now: Date.now() });
}

async function recover(req, env) {
  const b = await readBody(req), email = normEmail(b.email), rc = normRc(b.recovery);
  if (!isEmail(email) || rc.length !== 12 || !isPwHash(b.pw)) fail(401, 'bad_recovery');
  const t = await env.DB.prepare('SELECT * FROM teachers WHERE email = ?').bind(email).first();
  await checkLock(t);
  if (!t || !same(await hmac(env, 'rc:' + email + ':' + rc), t.rc)) { await noteFail(env, t); fail(401, 'bad_recovery'); }
  const nrc = randCode(12);
  await env.DB.batch([
    env.DB.prepare('UPDATE teachers SET pw = ?, rc = ?, fails = 0, locked_until = 0 WHERE id = ?').bind(await hmac(env, 'pw:' + email + ':' + b.pw), await hmac(env, 'rc:' + email + ':' + nrc), t.id),
    env.DB.prepare('DELETE FROM sessions WHERE teacher_id = ?').bind(t.id)
  ]);
  return json({ token: await newSession(env, t.id), teacher: pubTeacher(t), recovery: nrc.match(/.{4}/g).join('-'), now: Date.now() });
}

async function logout(req, env) {
  const m = /^Bearer ([0-9a-f]{64})$/.exec(req.headers.get('authorization') || '');
  if (m) await env.DB.prepare('DELETE FROM sessions WHERE token = ?').bind(await sha256(m[1])).run();
  return json({ ok: true });
}

async function deleteMe(req, env) {
  const t = await auth(req, env);
  const b = await readBody(req);
  if (normEmail(b.email) !== t.email) fail(400, 'confirm');
  await env.DB.batch([
    env.DB.prepare('DELETE FROM attempts WHERE assignment_id IN (SELECT id FROM assignments WHERE teacher_id = ?)').bind(t.id),
    env.DB.prepare('DELETE FROM assignments WHERE teacher_id = ?').bind(t.id),
    env.DB.prepare('DELETE FROM students WHERE class_id IN (SELECT id FROM classes WHERE teacher_id = ?)').bind(t.id),
    env.DB.prepare('DELETE FROM classes WHERE teacher_id = ?').bind(t.id),
    env.DB.prepare('DELETE FROM sessions WHERE teacher_id = ?').bind(t.id),
    env.DB.prepare('DELETE FROM teachers WHERE id = ?').bind(t.id)
  ]);
  return json({ ok: true });
}

/* ------------------------------------------------------------------ classes */
async function ownClass(env, t, id) {
  const c = await env.DB.prepare('SELECT * FROM classes WHERE id = ? AND teacher_id = ?').bind(id, t.id).first();
  if (!c) fail(404, 'no_class');
  return c;
}
function cleanNames(list) {
  if (!Array.isArray(list)) return [];
  return list.map((s) => clean(String(s).replace(/^\s*\d+[.)\-:\s]+/, ''), 60)).filter(Boolean).slice(0, 80);
}
function insertStudents(env, classId, startNo, names, used) {
  const stmts = [];
  for (let i = 0; i < names.length; i += 20) {
    const chunk = names.slice(i, i + 20), vals = [], args = [];
    chunk.forEach((n, j) => { vals.push('(?, ?, ?, ?, ?)'); args.push(randId(12), classId, startNo + i + j, n, newPin(used)); });
    stmts.push(env.DB.prepare('INSERT INTO students (id, class_id, no, name, pin) VALUES ' + vals.join(', ')).bind(...args));
  }
  return stmts;
}
async function studentsOf(env, classId, all) {
  const r = await env.DB.prepare('SELECT id, no, name, pin, active FROM students WHERE class_id = ?' + (all ? '' : ' AND active = 1') + ' ORDER BY no').bind(classId).all();
  return r.results;
}

async function listClasses(req, env) {
  const t = await auth(req, env);
  const r = await env.DB.prepare('SELECT c.id, c.name, c.grade, c.created_at, (SELECT count(*) FROM students s WHERE s.class_id = c.id AND s.active = 1) AS n, (SELECT count(*) FROM assignments a WHERE a.class_id = c.id) AS hw FROM classes c WHERE c.teacher_id = ? ORDER BY c.created_at DESC').bind(t.id).all();
  return json({ classes: r.results, now: Date.now() });
}

async function createClass(req, env) {
  const t = await auth(req, env), b = await readBody(req, 32e3);
  const name = clean(b.name, 60), grade = clean(b.grade, 12), names = cleanNames(b.students);
  if (!name) fail(400, 'bad_name');
  if (!names.length) fail(400, 'no_students');
  const n = await env.DB.prepare('SELECT count(*) AS n FROM classes WHERE teacher_id = ?').bind(t.id).first();
  if (n.n >= 40) fail(400, 'too_many_classes');
  const id = randId(12);
  await env.DB.batch([env.DB.prepare('INSERT INTO classes (id, teacher_id, name, grade, created_at) VALUES (?, ?, ?, ?, ?)').bind(id, t.id, name, grade, Date.now())].concat(insertStudents(env, id, 1, names, new Set())));
  return json({ class: { id, name, grade }, students: await studentsOf(env, id, false) });
}

async function getClass(req, env, id) {
  const t = await auth(req, env), c = await ownClass(env, t, id);
  return json({ class: { id: c.id, name: c.name, grade: c.grade }, students: await studentsOf(env, id, false), now: Date.now() });
}

async function patchClass(req, env, id) {
  const t = await auth(req, env), c = await ownClass(env, t, id), b = await readBody(req, 32e3), stmts = [];
  if (b.name != null) { const n = clean(b.name, 60); if (!n) fail(400, 'bad_name'); stmts.push(env.DB.prepare('UPDATE classes SET name = ? WHERE id = ?').bind(n, id)); }
  if (b.grade != null) stmts.push(env.DB.prepare('UPDATE classes SET grade = ? WHERE id = ?').bind(clean(b.grade, 12), id));
  const all = await studentsOf(env, id, true), mine = new Set(all.map((s) => s.id)), used = new Set(all.map((s) => s.pin));
  (Array.isArray(b.rename) ? b.rename : []).slice(0, 80).forEach((r) => { const n = clean(r && r.name, 60); if (r && mine.has(r.id) && n) stmts.push(env.DB.prepare('UPDATE students SET name = ? WHERE id = ?').bind(n, r.id)); });
  (Array.isArray(b.remove) ? b.remove : []).slice(0, 80).forEach((sid) => { if (mine.has(sid)) stmts.push(env.DB.prepare('UPDATE students SET active = 0 WHERE id = ?').bind(sid)); });
  (Array.isArray(b.repin) ? b.repin : []).slice(0, 80).forEach((sid) => { if (mine.has(sid)) stmts.push(env.DB.prepare('UPDATE students SET pin = ? WHERE id = ?').bind(newPin(used), sid)); });
  const add = cleanNames(b.add);
  if (add.length) {
    if (all.filter((s) => s.active).length + add.length > 80) fail(400, 'too_many_students');
    const next = all.reduce((x, s) => Math.max(x, s.no), 0) + 1;
    stmts.push(...insertStudents(env, id, next, add, used));
  }
  if (stmts.length) await env.DB.batch(stmts);
  const cc = await env.DB.prepare('SELECT * FROM classes WHERE id = ?').bind(id).first();
  return json({ class: { id: c.id, name: cc.name, grade: cc.grade }, students: await studentsOf(env, id, false) });
}

async function deleteClass(req, env, id) {
  const t = await auth(req, env); await ownClass(env, t, id);
  await env.DB.batch([
    env.DB.prepare('DELETE FROM attempts WHERE assignment_id IN (SELECT id FROM assignments WHERE class_id = ?)').bind(id),
    env.DB.prepare('DELETE FROM assignments WHERE class_id = ?').bind(id),
    env.DB.prepare('DELETE FROM students WHERE class_id = ?').bind(id),
    env.DB.prepare('DELETE FROM classes WHERE id = ?').bind(id)
  ]);
  return json({ ok: true });
}

/* ------------------------------------------------------------------ assignments (teacher side) */
function cleanItems(list) {
  if (!Array.isArray(list) || !list.length || list.length > 80) fail(400, 'bad_items');
  const s = (v, max) => { if (typeof v !== 'string' || v.length > max) fail(400, 'bad_items'); return v; };
  return list.map((it) => {
    if (!it || typeof it !== 'object') fail(400, 'bad_items');
    const y = it.y, out = { y, q: s(it.q, 20000), e: it.e ? s(it.e, 20000) : '', lt: it.lt ? s(it.lt, 200) : '' };
    if (y === 'mc' || y === 'tf') {
      if (!Array.isArray(it.o) || it.o.length !== 4) fail(400, 'bad_items');
      out.o = it.o.map((o) => s(o, 5000));
    }
    if (y === 'mc') { if (!/^[ABCD]$/.test(it.k)) fail(400, 'bad_items'); out.c = num(it.c, 1, 4, 1); out.x = it.x ? 1 : 0; }
    else if (y === 'tf') { if (!/^[TF]{4}$/.test(it.k)) fail(400, 'bad_items'); }
    else if (y === 'sa') { s(it.k, 40); if (!String(it.k).trim()) fail(400, 'bad_items'); }
    else fail(400, 'bad_items');
    out.k = it.k;
    if (it.v != null) out.v = Array.isArray(it.v) ? it.v.slice(0, 4).map((x) => clean(x, 4)) : clean(it.v, 4);
    return out;
  });
}

async function ownAssignment(env, t, code, withItems) {
  const a = await env.DB.prepare('SELECT ' + (withItems ? '*' : 'id, teacher_id, class_id, title, lang, bank, mode, open_at, close_at, duration_min, require_pin, show_key, shuffle, n, created_at, purge_at') + ' FROM assignments WHERE id = ? AND teacher_id = ?').bind(code, t.id).first();
  if (!a) fail(404, 'no_assignment');
  return a;
}
function pubAssignment(a) {
  return { code: a.id, class_id: a.class_id, title: a.title, lang: a.lang, bank: a.bank, mode: a.mode, open_at: a.open_at, close_at: a.close_at, duration_min: a.duration_min, require_pin: !!a.require_pin, show_key: a.show_key, shuffle: !!a.shuffle, n: a.n, created_at: a.created_at };
}
function window_(b, a) {
  const now = Date.now(), open = num(b.open_at, 0, 4e12, a ? a.open_at : now), close = num(b.close_at, 0, 4e12, a ? a.close_at : now + DAY);
  if (close <= open) fail(400, 'bad_time');
  if (close - open > 62 * DAY) fail(400, 'too_long');
  if (close < now - MIN && (!a || close !== a.close_at)) fail(400, 'past');
  return { open, close };
}

async function createAssignment(req, env) {
  const t = await auth(req, env), b = await readBody(req, 1.8e6), c = await ownClass(env, t, String(b.class_id || ''));
  const items = cleanItems(b.items), w = window_(b, null), title = clean(b.title, 120) || 'Bài tập';
  const mode = ['home', 'test', 'class2', 'free'].includes(b.mode) ? b.mode : 'home';
  const test = mode === 'test';
  if (test && !(num(b.duration_min, 0, 300, 0) >= 1)) fail(400, 'need_duration');
  if (test && w.close - w.open < num(b.duration_min, 0, 300, 0) * MIN) fail(400, 'bad_time');
  const showKey = test ? 'close' : b.show_key === 'submit' ? 'submit' : 'close';
  const recent = await env.DB.prepare('SELECT count(*) AS n FROM assignments WHERE teacher_id = ? AND created_at > ?').bind(t.id, Date.now() - DAY).first();
  if (recent.n >= 60) fail(429, 'too_many_today');
  let code = '';
  for (let k = 0; k < 6 && !code; k++) { const x = randCode(6); if (!(await env.DB.prepare('SELECT 1 FROM assignments WHERE id = ?').bind(x).first())) code = x; }
  if (!code) fail(500, 'no_code');
  const a = { id: code, class_id: c.id, title, lang: b.lang === 'en' ? 'en' : 'vi', bank: clean(b.bank, 20), mode, open_at: w.open, close_at: w.close, duration_min: num(b.duration_min, 0, 300, 0), require_pin: test || b.require_pin !== false ? 1 : 0, show_key: showKey, shuffle: test || b.shuffle !== false ? 1 : 0, n: items.length, created_at: Date.now() };
  await env.DB.prepare('INSERT INTO assignments (id, teacher_id, class_id, title, lang, bank, mode, open_at, close_at, duration_min, require_pin, show_key, shuffle, n, items, created_at, purge_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(a.id, t.id, a.class_id, a.title, a.lang, a.bank, a.mode, a.open_at, a.close_at, a.duration_min, a.require_pin, a.show_key, a.shuffle, a.n, JSON.stringify(items), a.created_at, a.close_at + KEEP_DAYS * DAY).run();
  return json({ assignment: pubAssignment(a), now: Date.now() });
}

async function listAssignments(req, env, classId) {
  const t = await auth(req, env); await ownClass(env, t, classId);
  const r = await env.DB.prepare('SELECT a.id, a.class_id, a.title, a.lang, a.bank, a.mode, a.open_at, a.close_at, a.duration_min, a.require_pin, a.show_key, a.shuffle, a.n, a.created_at, (SELECT count(*) FROM attempts x WHERE x.assignment_id = a.id AND x.started_at IS NOT NULL) AS started, (SELECT count(*) FROM attempts x WHERE x.assignment_id = a.id AND x.submitted_at IS NOT NULL) AS done FROM assignments a WHERE a.class_id = ? ORDER BY a.open_at DESC').bind(classId).all();
  return json({ assignments: r.results.map((a) => Object.assign(pubAssignment(a), { started: a.started, done: a.done })), now: Date.now() });
}

async function getAssignment(req, env, code) {
  const t = await auth(req, env), a = await ownAssignment(env, t, code, true), items = JSON.parse(a.items);
  await finalizeDue(env, a, items);
  const students = await studentsOf(env, a.class_id, true);
  const r = await env.DB.prepare('SELECT student_id, answers, pin_fails, started_at, saved_at, submitted_at, auto, late, score, max, away FROM attempts WHERE assignment_id = ?').bind(code).all();
  const cls = await env.DB.prepare('SELECT name, grade FROM classes WHERE id = ?').bind(a.class_id).first();
  return json({
    assignment: pubAssignment(a), class: cls, items, now: Date.now(),
    students: students.map((s) => ({ id: s.id, no: s.no, name: s.name, active: s.active })),
    attempts: r.results.map((x) => ({ student_id: x.student_id, answers: JSON.parse(x.answers || '{}'), pin_locked: x.pin_fails >= MAX_PIN_FAILS, started_at: x.started_at, saved_at: x.saved_at, submitted_at: x.submitted_at, auto: !!x.auto, late: !!x.late, score: x.score, max: x.max, away: x.away || 0 }))
  });
}

async function patchAssignment(req, env, code) {
  const t = await auth(req, env), a = await ownAssignment(env, t, code, false), b = await readBody(req), now = Date.now();
  const title = b.title != null ? clean(b.title, 120) || a.title : a.title;
  let w = { open: a.open_at, close: a.close_at };
  if (b.close_now) w = { open: Math.min(a.open_at, now), close: now };
  else if (b.open_at != null || b.close_at != null) w = window_(b, a);
  const showKey = b.show_key === 'submit' || b.show_key === 'close' ? b.show_key : a.show_key;
  await env.DB.prepare('UPDATE assignments SET title = ?, open_at = ?, close_at = ?, show_key = ?, purge_at = ? WHERE id = ?').bind(title, w.open, w.close, showKey, w.close + KEEP_DAYS * DAY, code).run();
  return json({ assignment: pubAssignment(Object.assign(a, { title, open_at: w.open, close_at: w.close, show_key: showKey })), now });
}

async function deleteAssignment(req, env, code) {
  const t = await auth(req, env); await ownAssignment(env, t, code, false);
  await env.DB.batch([env.DB.prepare('DELETE FROM attempts WHERE assignment_id = ?').bind(code), env.DB.prepare('DELETE FROM assignments WHERE id = ?').bind(code)]);
  return json({ ok: true });
}

async function resetAttempt(req, env, code) {
  const t = await auth(req, env); await ownAssignment(env, t, code, false);
  const b = await readBody(req);
  await env.DB.prepare('DELETE FROM attempts WHERE assignment_id = ? AND student_id = ?').bind(code, String(b.student_id || '')).run();
  return json({ ok: true });
}

/* ------------------------------------------------------------------ marking */
function numVal(s) { s = String(s).replace(/\s/g, '').replace(',', '.'); return s === '' || !/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(s) ? NaN : Number(s); }
function has(it, a) { a = a == null ? '' : String(a); return it.y === 'tf' ? /[TF]/.test(a) : a.trim() !== ''; }
function tfRight(it, a) { let c = 0; for (let j = 0; j < 4; j++) if (String(a).charAt(j) === it.k.charAt(j)) c++; return c; }
function pts(it, a) {
  if (!has(it, a)) return 0;
  a = String(a);
  if (it.y === 'mc') return a === it.k ? MAXP.mc : 0;
  if (it.y === 'tf') return TFP[tfRight(it, a)];
  const v = numVal(a), w = numVal(it.k);
  if (!isNaN(v) && !isNaN(w)) return Math.abs(v - w) < 1e-9 ? MAXP.sa : 0;
  const n = (s) => String(s).toLowerCase().replace(/\s/g, '').replace(/,/g, '.');
  return n(a) === n(it.k) ? MAXP.sa : 0;
}
function mark(items, answers) {
  let got = 0, max = 0;
  items.forEach((it, i) => { got += pts(it, answers[i]); max += MAXP[it.y]; });
  return { score: Math.round(got * 1000) / 1000, max: Math.round(max * 1000) / 1000 };
}

/* The student's own order of questions and options. Answers are kept in the teacher's order (canonical). */
function makeFrame(items, shuffle) {
  const idx = items.map((_, i) => i), perm = {};
  if (!shuffle) return { ord: idx, perm };
  items.forEach((it, i) => { if (it.y === 'mc' && !it.x) perm[i] = shuffled([0, 1, 2, 3]); });
  // keep the three parts (multiple choice, true/false, short answer) together, shuffle inside each part
  const ord = [].concat(...['mc', 'tf', 'sa'].map((y) => shuffled(idx.filter((i) => items[i].y === y))));
  return { ord, perm };
}
function toCanon(frame, items, disp) {
  const out = {};
  if (!disp || typeof disp !== 'object') return out;
  Object.keys(disp).forEach((k) => {
    const d = Number(k), ci = frame.ord[d];
    if (!Number.isInteger(d) || ci == null) return;
    let a = String(disp[k] == null ? '' : disp[k]).slice(0, 20);
    const it = items ? items[ci] : null, p = frame.perm[ci];
    if (p && /^[ABCD]$/.test(a)) a = 'ABCD'[p['ABCD'.indexOf(a)]];
    if (it && it.y === 'tf' && !/^[TF-]{4}$/.test(a)) return;
    if (a.trim()) out[ci] = a;
  });
  return out;
}
function toDisp(frame, canon) {
  const out = {};
  frame.ord.forEach((ci, d) => {
    let a = canon[ci];
    if (a == null) return;
    const p = frame.perm[ci];
    if (p && /^[ABCD]$/.test(a)) a = 'ABCD'[p.indexOf('ABCD'.indexOf(a))];
    out[d] = a;
  });
  return out;
}
function studentItems(items, frame) {
  return frame.ord.map((ci) => {
    const it = items[ci], p = frame.perm[ci], o = { y: it.y, q: it.q };
    if (it.o) o.o = p ? p.map((j) => it.o[j]) : it.o;
    if (it.c) o.c = it.c;
    return o;
  });
}
function deadlineOf(a, att) {
  const d = a.duration_min && att && att.started_at ? att.started_at + a.duration_min * MIN : Infinity;
  return Math.min(a.close_at, d);
}

/* Attempts whose time is up but were never handed in: mark what was saved. */
async function finalizeDue(env, a, items) {
  const now = Date.now();
  const r = await env.DB.prepare('SELECT id, started_at, answers FROM attempts WHERE assignment_id = ? AND submitted_at IS NULL AND started_at IS NOT NULL').bind(a.id).all();
  const due = r.results.filter((x) => deadlineOf(a, x) + GRACE < now);
  if (!due.length) return;
  await env.DB.batch(due.map((x) => {
    const s = mark(items, JSON.parse(x.answers || '{}'));
    return env.DB.prepare('UPDATE attempts SET submitted_at = ?, auto = 1, score = ?, max = ? WHERE id = ? AND submitted_at IS NULL').bind(deadlineOf(a, x), s.score, s.max, x.id);
  }));
}

/* ------------------------------------------------------------------ student side */
async function assignmentByCode(env, code, withItems) {
  if (!/^[0-9A-Z]{6}$/.test(code)) fail(404, 'no_assignment');
  const a = await env.DB.prepare('SELECT ' + (withItems ? 'a.*' : 'a.id, a.class_id, a.teacher_id, a.title, a.lang, a.mode, a.open_at, a.close_at, a.duration_min, a.require_pin, a.show_key, a.shuffle, a.n') + ', c.name AS class_name, t.name AS teacher_name FROM assignments a JOIN classes c ON c.id = a.class_id JOIN teachers t ON t.id = a.teacher_id WHERE a.id = ?').bind(code).first();
  if (!a) fail(404, 'no_assignment');
  return a;
}

async function hwInfo(env, code) {
  const a = await assignmentByCode(env, code, true), items = JSON.parse(a.items);
  const roster = (await studentsOf(env, a.class_id, false)).map((s) => ({ id: s.id, no: s.no, nick: nickOf(s.name) }));
  const parts = { mc: 0, tf: 0, sa: 0 }; items.forEach((it) => { parts[it.y]++; });
  return json({
    code: a.id, title: a.title, class_name: a.class_name, teacher: a.teacher_name, lang: a.lang, mode: a.mode,
    open_at: a.open_at, close_at: a.close_at, duration_min: a.duration_min, require_pin: !!a.require_pin, show_key: a.show_key,
    n: a.n, parts, roster, now: Date.now()
  });
}

async function attemptByToken(env, code, token) {
  if (typeof token !== 'string' || !/^[0-9a-f]{64}$/.test(token)) fail(401, 'token');
  const x = await env.DB.prepare('SELECT * FROM attempts WHERE token = ? AND assignment_id = ?').bind(await sha256(token), code).first();
  if (!x) fail(401, 'token');
  return x;
}

function resultOf(a, items, frame, att, now) {
  const canon = JSON.parse(att.answers || '{}'), disp = toDisp(frame, canon), sitems = studentItems(items, frame);
  const open = a.show_key === 'submit' || now >= a.close_at;
  const st = { n: items.length, blank: 0, wrong: [], tf: { pts: 0, max: 0 }, sa: { n: 0, ok: 0 }, written: [] };
  let got = 0, max = 0;
  const review = frame.ord.map((ci, d) => {
    const it = items[ci], p = pts(it, canon[ci]);
    got += p; max += MAXP[it.y];
    if (p < MAXP[it.y]) st.wrong.push(String(d + 1));
    if (!has(it, canon[ci])) st.blank++;
    if (it.y === 'tf') { st.tf.max += 1; st.tf.pts += p; }
    if (it.y === 'sa') { st.sa.n++; if (p) st.sa.ok++; }
    if (!open) return null;
    const perm = frame.perm[ci];
    let k = it.k;
    if (perm && it.y === 'mc') k = 'ABCD'[perm.indexOf('ABCD'.indexOf(it.k))];
    return Object.assign({}, sitems[d], { k, e: it.e || '', mine: disp[d] == null ? '' : disp[d], pts: p, max: MAXP[it.y] });
  });
  return { got: Math.round(got * 1000) / 1000, max: Math.round(max * 1000) / 1000, stats: st, auto: !!att.auto, late: !!att.late, submitted_at: att.submitted_at, review: open ? review : null, key_at: open ? null : a.close_at };
}

async function hwStart(req, env, code) {
  const b = await readBody(req), now = Date.now(), a = await assignmentByCode(env, code, true), items = JSON.parse(a.items);
  let att = null;
  if (b.token) {
    att = await attemptByToken(env, code, b.token).catch(() => null);
  }
  let token = att ? b.token : null;
  if (!att) {
    const sid = String(b.sid || '');
    const s = await env.DB.prepare('SELECT * FROM students WHERE id = ? AND class_id = ? AND active = 1').bind(sid, a.class_id).first();
    if (!s) fail(404, 'no_student');
    att = await env.DB.prepare('SELECT * FROM attempts WHERE assignment_id = ? AND student_id = ?').bind(code, sid).first();
    if (a.require_pin) {
      if (att && att.pin_fails >= MAX_PIN_FAILS) fail(423, 'pin_locked');
      if (String(b.pin || '').replace(/\D/g, '') !== s.pin) {
        if (att) await env.DB.prepare('UPDATE attempts SET pin_fails = pin_fails + 1 WHERE id = ?').bind(att.id).run();
        else await env.DB.prepare('INSERT INTO attempts (id, assignment_id, student_id, pin_fails) VALUES (?, ?, ?, 1) ON CONFLICT (assignment_id, student_id) DO UPDATE SET pin_fails = pin_fails + 1').bind(randId(16), code, sid).run();
        const f = (att ? att.pin_fails : 0) + 1;
        fail(403, f >= MAX_PIN_FAILS ? 'pin_locked' : 'bad_pin', { left: Math.max(0, MAX_PIN_FAILS - f) });
      }
    } else if (att && att.token) fail(409, 'taken');
    if (now < a.open_at) fail(425, 'not_open', { open_at: a.open_at });
    if (now >= a.close_at && !(att && att.started_at)) fail(410, 'closed', { close_at: a.close_at });
    // a test: everyone gets the full time, so nobody may start after the last start time (close - duration)
    if (a.mode === 'test' && a.duration_min && !(att && att.started_at) && now > a.close_at - a.duration_min * MIN + SLACK) fail(410, 'late_start', { last_start: a.close_at - a.duration_min * MIN });
    token = hex(randBytes(32));
    const th = await sha256(token);
    if (att) {
      await env.DB.prepare('UPDATE attempts SET token = ?, pin_fails = 0, started_at = COALESCE(started_at, ?), frame = COALESCE(frame, ?) WHERE id = ?').bind(th, now, JSON.stringify(makeFrame(items, a.shuffle)), att.id).run();
    } else {
      await env.DB.prepare('INSERT INTO attempts (id, assignment_id, student_id, token, frame, started_at) VALUES (?, ?, ?, ?, ?, ?)').bind(randId(16), code, sid, th, JSON.stringify(makeFrame(items, a.shuffle)), now).run();
    }
    att = await env.DB.prepare('SELECT * FROM attempts WHERE assignment_id = ? AND student_id = ?').bind(code, sid).first();
  } else if (now < a.open_at) fail(425, 'not_open', { open_at: a.open_at });
  const s = await env.DB.prepare('SELECT name, no FROM students WHERE id = ?').bind(att.student_id).first();
  const frame = JSON.parse(att.frame), deadline = deadlineOf(a, att);
  if (!att.submitted_at && deadline + GRACE < now) {
    const sc = mark(items, JSON.parse(att.answers || '{}'));
    await env.DB.prepare('UPDATE attempts SET submitted_at = ?, auto = 1, score = ?, max = ? WHERE id = ?').bind(deadline, sc.score, sc.max, att.id).run();
    att.submitted_at = deadline; att.auto = 1; att.score = sc.score; att.max = sc.max;
  }
  return json({
    token, name: s ? s.name : '', no: s ? s.no : 0, now, deadline, close_at: a.close_at, started_at: att.started_at, duration_min: a.duration_min, submitted: !!att.submitted_at,
    items: studentItems(items, frame), answers: toDisp(frame, JSON.parse(att.answers || '{}')),
    result: att.submitted_at ? resultOf(a, items, frame, att, now) : null
  });
}

/* save = keep a draft; submit = hand in and get marked. body: { token, answers (student's order), locked_at? } */
async function hwSave(req, env, code, submit) {
  const b = await readBody(req, 64e3), now = Date.now();
  const a = await assignmentByCode(env, code, submit), att = await attemptByToken(env, code, b.token);
  if (att.submitted_at) fail(409, 'submitted');
  const deadline = deadlineOf(a, att);
  if (now < a.open_at) fail(425, 'not_open', { open_at: a.open_at });
  let late = 0;
  if (now > deadline + SLACK) {
    const lockedAt = Number(b.locked_at);
    // the phone locked the answers in time but had no connection: accept within GRACE, marked late
    if (!(Number.isFinite(lockedAt) && lockedAt <= deadline + SLACK && now <= deadline + GRACE)) fail(410, 'closed', { deadline });
    late = 1; submit = true;
  }
  const frame = JSON.parse(att.frame);
  const items = submit ? JSON.parse(a.items || (await assignmentByCode(env, code, true)).items) : null;
  const canon = toCanon(frame, items, b.answers);
  const away = a.mode === 'test' ? Math.max(att.away || 0, num(b.away, 0, 999, 0)) : 0;   // times the page was left during a test
  if (!submit) {
    await env.DB.prepare('UPDATE attempts SET answers = ?, saved_at = ?, away = ? WHERE id = ? AND submitted_at IS NULL').bind(JSON.stringify(canon), now, away, att.id).run();
    return json({ ok: true, now, deadline });
  }
  const sc = mark(items, canon);
  await env.DB.prepare('UPDATE attempts SET answers = ?, saved_at = ?, submitted_at = ?, late = ?, score = ?, max = ?, away = ? WHERE id = ? AND submitted_at IS NULL').bind(JSON.stringify(canon), now, now, late, sc.score, sc.max, away, att.id).run();
  const done = Object.assign({}, att, { answers: JSON.stringify(canon), submitted_at: now, late, score: sc.score, max: sc.max });
  return json({ ok: true, now, deadline, result: resultOf(a, items, frame, done, now) });
}

async function hwResult(req, env, code) {
  const b = await readBody(req), now = Date.now(), a = await assignmentByCode(env, code, true), att = await attemptByToken(env, code, b.token), items = JSON.parse(a.items);
  const frame = JSON.parse(att.frame), deadline = deadlineOf(a, att);
  if (!att.submitted_at) {
    if (deadline + GRACE >= now) return json({ result: null, now, deadline });
    const sc = mark(items, JSON.parse(att.answers || '{}'));
    await env.DB.prepare('UPDATE attempts SET submitted_at = ?, auto = 1, score = ?, max = ? WHERE id = ?').bind(deadline, sc.score, sc.max, att.id).run();
    att.submitted_at = deadline; att.auto = 1;
  }
  return json({ result: resultOf(a, items, frame, att, now), now, deadline });
}

/* ------------------------------------------------------------------ e-mail (Resend) */
const escH = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function mailWelcome(name, rc, en) {
  return en ? {
    subject: 'Welcome to Lemonmath: your recovery code',
    text: 'Hello ' + name + ',\n\nYour Lemonmath teacher account is ready.\n\nRecovery code: ' + rc + '\n\nKeep this e-mail. If you forget your password, open https://lemonmath.com/classroom/#/recover and use this code (or ask for a reset code by e-mail).\n\nLemonmath'
  } : {
    subject: 'Chào mừng thầy cô đến với Lemonmath: mã khôi phục tài khoản',
    text: 'Kính chào ' + name + ',\n\nTài khoản giáo viên Lemonmath của thầy cô đã sẵn sàng.\n\nMã khôi phục: ' + rc + '\n\nThầy cô giữ lại email này. Khi quên mật khẩu, mở https://lemonmath.com/vi/lop-hoc/#/khoi-phuc và dùng mã này (hoặc nhận mã đặt lại qua email).\n\nLemonmath'
  };
}
function mailCode(code, en) {
  return en ? {
    subject: 'Lemonmath password reset code: ' + code,
    text: 'Your code to set a new Lemonmath password: ' + code + '\n\nIt works for ' + RESET_MIN + ' minutes. If you did not ask for it, ignore this e-mail; your password has not changed.\n\nLemonmath'
  } : {
    subject: 'Mã đặt lại mật khẩu Lemonmath: ' + code,
    text: 'Mã để đặt mật khẩu mới cho tài khoản Lemonmath của thầy cô: ' + code + '\n\nMã dùng được trong ' + RESET_MIN + ' phút. Nếu thầy cô không yêu cầu, hãy bỏ qua email này; mật khẩu vẫn giữ nguyên.\n\nLemonmath'
  };
}
function mailRecovery(name, rc, en) {
  return en ? {
    subject: 'Your new Lemonmath recovery code',
    text: 'Hello ' + name + ',\n\nYou made a new recovery code. The old one no longer works.\n\nRecovery code: ' + rc + '\n\nLemonmath'
  } : {
    subject: 'Mã khôi phục mới của tài khoản Lemonmath',
    text: 'Kính chào ' + name + ',\n\nThầy cô vừa tạo mã khôi phục mới; mã cũ không dùng được nữa.\n\nMã khôi phục: ' + rc + '\n\nLemonmath'
  };
}
/* Counts against the daily cap first; returns true when the mail was handed to Resend (sent in the background). */
async function mailLater(env, ctx, kind, to, msg) {
  if (!env.RESEND_API_KEY) return false;
  const now = Date.now(), day = await env.DB.prepare('SELECT count(*) AS n FROM mail_log WHERE at > ?').bind(now - DAY).first();
  if (day.n >= MAIL_PER_DAY) return false;
  await env.DB.prepare('INSERT INTO mail_log (kind, at) VALUES (?, ?)').bind(kind, now).run();
  const send = fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.MAIL_FROM || 'Lemonmath <khong-tra-loi@lemonmath.com>', to: [to], subject: msg.subject, text: msg.text, html: '<div style="font:16px/1.6 sans-serif">' + escH(msg.text).replace(/\n/g, '<br>') + '</div>' })
  }).then((r) => { if (!r.ok) return r.text().then((t) => console.error('resend ' + r.status + ' ' + t.slice(0, 300))); }).catch((e) => console.error('resend ' + e));
  if (ctx && ctx.waitUntil) ctx.waitUntil(send); else await send;
  return true;
}

/* Forgot password, by e-mail: always answers the same, whether or not the address has an account. */
async function resetRequest(req, env, ctx) {
  const b = await readBody(req), email = normEmail(b.email), now = Date.now();
  if (!env.RESEND_API_KEY) fail(503, 'email_off');
  if (!isEmail(email)) fail(400, 'bad_email');
  const t = await env.DB.prepare('SELECT id FROM teachers WHERE email = ?').bind(email).first();
  if (t) {
    const r = await env.DB.prepare('SELECT * FROM resets WHERE email = ?').bind(email).first();
    const inHour = r && r.window_start > now - 3600e3 ? r.sent : 0;
    if (inHour < RESET_PER_HOUR) {
      const code = String(randInt(1000000)).padStart(6, '0');
      await env.DB.prepare('INSERT INTO resets (email, code, expires_at, tries, sent, window_start) VALUES (?, ?, ?, 0, 1, ?) ON CONFLICT (email) DO UPDATE SET code = excluded.code, expires_at = excluded.expires_at, tries = 0, sent = CASE WHEN resets.window_start > ? THEN resets.sent + 1 ELSE 1 END, window_start = CASE WHEN resets.window_start > ? THEN resets.window_start ELSE excluded.window_start END')
        .bind(email, await hmac(env, 'reset:' + email + ':' + code), now + RESET_MIN * MIN, now, now - 3600e3, now - 3600e3).run();
      await mailLater(env, ctx, 'reset', email, mailCode(code, b.lang === 'en'));
      if (env.MAIL_DEBUG === '1') return json({ ok: true, minutes: RESET_MIN, now, debug_code: code });   // local tests only (.dev.vars)
    }
  }
  return json({ ok: true, minutes: RESET_MIN, now });
}

async function resetWithCode(req, env) {
  const b = await readBody(req), email = normEmail(b.email), code = String(b.code || '').replace(/\D/g, ''), now = Date.now();
  if (!isEmail(email) || code.length !== 6 || !isPwHash(b.pw)) fail(400, 'bad_code');
  const r = await env.DB.prepare('SELECT * FROM resets WHERE email = ?').bind(email).first();
  if (!r || r.expires_at < now || r.tries >= RESET_TRIES) fail(400, 'bad_code');
  if (!same(await hmac(env, 'reset:' + email + ':' + code), r.code)) {
    await env.DB.prepare('UPDATE resets SET tries = tries + 1 WHERE email = ?').bind(email).run();
    fail(400, 'bad_code', { left: Math.max(0, RESET_TRIES - r.tries - 1) });
  }
  const t = await env.DB.prepare('SELECT * FROM teachers WHERE email = ?').bind(email).first();
  if (!t) fail(400, 'bad_code');
  await env.DB.batch([
    env.DB.prepare('UPDATE teachers SET pw = ?, fails = 0, locked_until = 0 WHERE id = ?').bind(await hmac(env, 'pw:' + email + ':' + b.pw), t.id),
    env.DB.prepare('DELETE FROM sessions WHERE teacher_id = ?').bind(t.id),
    env.DB.prepare('DELETE FROM resets WHERE email = ?').bind(email)
  ]);
  return json({ token: await newSession(env, t.id), teacher: pubTeacher(t), now: Date.now() });
}

/* A new recovery code for a teacher who is logged in (shown once, and e-mailed when e-mail is on). */
async function newRecovery(req, env, ctx) {
  const t = await auth(req, env), b = await readBody(req), rc = randCode(12), shown = rc.match(/.{4}/g).join('-');
  await env.DB.prepare('UPDATE teachers SET rc = ? WHERE id = ?').bind(await hmac(env, 'rc:' + t.email + ':' + rc), t.id).run();
  const mailed = await mailLater(env, ctx, 'recovery', t.email, mailRecovery(t.name, shown, b.lang === 'en'));
  return json({ recovery: shown, mailed, now: Date.now() });
}

/* ------------------------------------------------------------------ daily cleanup */
async function cleanup(env) {
  const now = Date.now();
  await env.DB.batch([
    env.DB.prepare('DELETE FROM attempts WHERE assignment_id IN (SELECT id FROM assignments WHERE purge_at < ?)').bind(now),
    env.DB.prepare('DELETE FROM assignments WHERE purge_at < ?').bind(now),
    env.DB.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(now),
    env.DB.prepare('DELETE FROM resets WHERE expires_at < ?').bind(now - DAY),
    env.DB.prepare('DELETE FROM mail_log WHERE at < ?').bind(now - 2 * DAY)
  ]);
}

export const _test = { mark, makeFrame, toCanon, toDisp, studentItems, pts, nickOf, cleanNames };
