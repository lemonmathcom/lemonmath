// End-to-end test of the classroom API against a running local worker:
//   npx wrangler dev --local --port 8787   (with .dev.vars: PEPPER=..., ALLOW_LOCALHOST=1)
//   node test/api.test.mjs [http://127.0.0.1:8787]
import assert from 'node:assert/strict';

const API = process.argv[2] || 'http://127.0.0.1:8787';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let token = '';
async function call(method, path, body, tok) {
  const r = await fetch(API + path, { method, headers: Object.assign({ 'Content-Type': 'application/json' }, (tok || token) ? { Authorization: 'Bearer ' + (tok || token) } : {}), body: body ? JSON.stringify(body) : undefined });
  const j = await r.json();
  return { status: r.status, ...j };
}
const pw = (s) => Array.from(s.padEnd(64, '0').slice(0, 64)).map((c) => (c.charCodeAt(0) % 16).toString(16)).join('');
const email = 'gv' + Date.now() + '@example.com';
let n = 0; const ok = (m) => console.log('  ✓ ' + m + (++n ? '' : ''));

const items = [
  { y: 'mc', q: '1 + 1 = ?', o: ['1', '2', '3', '4'], k: 'B', e: 'Vì 1 + 1 = 2.', lt: 'Phép cộng' },
  { y: 'mc', q: 'Cả A và B?', o: ['x', 'y', 'Cả A và B', 'Không'], k: 'C', x: 1, lt: 'Phép cộng' },
  { y: 'tf', q: 'Xét các ý', o: ['a', 'b', 'c', 'd'], k: 'TFTF', lt: 'Logic' },
  { y: 'sa', q: '2,5 + 1 = ?', k: '3,5', lt: 'Số thập phân' }
];

console.log('Accounts');
let r = await call('POST', '/v1/auth/signup', { email, name: 'Cô Lan', pw: pw('matkhau1') });
assert.equal(r.status, 200); assert.match(r.recovery, /^[0-9A-Z]{4}-[0-9A-Z]{4}-[0-9A-Z]{4}$/); token = r.token; const recovery = r.recovery; ok('sign up gives a token and a recovery code');
r = await call('POST', '/v1/auth/signup', { email, name: 'X', pw: pw('a') }); assert.equal(r.error, 'email_taken'); ok('same email refused');
r = await call('POST', '/v1/auth/login', { email, pw: pw('sai') }, 'none'); assert.equal(r.error, 'bad_login'); ok('wrong password refused');
r = await call('POST', '/v1/auth/login', { email: email.toUpperCase(), pw: pw('matkhau1') }, 'none'); assert.equal(r.status, 200); token = r.token; ok('log in (email in capitals)');
r = await call('GET', '/v1/me'); assert.equal(r.teacher.name, 'Cô Lan'); ok('who am I');
r = await call('POST', '/v1/auth/recover', { email, recovery: recovery.toLowerCase(), pw: pw('matkhau2') }, 'none'); assert.equal(r.status, 200); assert.notEqual(r.recovery, recovery); const oldTok = token; token = r.token; ok('recover with the code, new code issued');
r = await call('GET', '/v1/me', null, oldTok); assert.equal(r.error, 'login'); ok('old sessions are signed out after recovery');
r = await call('POST', '/v1/auth/login', { email, pw: pw('matkhau2') }, 'none'); assert.equal(r.status, 200); ok('new password works');

console.log('Classes');
r = await call('POST', '/v1/classes', { name: '10A1', grade: 'g10', students: ['1. Nguyễn Văn An', 'Trần Thị Bình', '  ', 'Lê Minh Châu'] });
assert.equal(r.status, 200); assert.equal(r.students.length, 3); assert.equal(r.students[0].name, 'Nguyễn Văn An'); assert.match(r.students[0].pin, /^\d{4}$/);
const cls = r.class.id, st = r.students; ok('class with 3 students, numbered, with 4-digit codes');
r = await call('PATCH', '/v1/classes/' + cls, { add: ['Phạm Thu Dung'], rename: [{ id: st[1].id, name: 'Trần Thị Bình An' }], remove: [st[2].id] });
assert.equal(r.students.length, 3); assert.equal(r.students[2].no, 4); assert.equal(r.students[1].name, 'Trần Thị Bình An'); ok('add, rename, remove a student');
r = await call('GET', '/v1/classes'); assert.equal(r.classes[0].n, 3); ok('class list counts students');
const other = await call('POST', '/v1/auth/signup', { email: 'x' + email, name: 'Thầy Hùng', pw: pw('abc') }, 'none');
r = await call('GET', '/v1/classes/' + cls, null, other.token); assert.equal(r.error, 'no_class'); ok("another teacher cannot see this class");

console.log('Assignment, open now');
const now = Date.now();
r = await call('POST', '/v1/assignments', { class_id: cls, title: 'Bài về nhà 1', lang: 'vi', bank: 'g10', mode: 'home', open_at: now - 60e3, close_at: now + 600e3, items, show_key: 'submit' });
assert.equal(r.status, 200); const code = r.assignment.code; assert.match(code, /^[0-9A-Z]{6}$/); ok('assignment created, code ' + code);
r = await call('GET', '/v1/hw/' + code.toLowerCase(), null, 'none');
assert.equal(r.title, 'Bài về nhà 1'); assert.equal(r.roster.length, 3); assert.equal(r.roster[0].nick, 'An'); assert.equal(r.roster[0].name, undefined); assert.deepEqual(r.parts, { mc: 2, tf: 1, sa: 1 }); ok('students see the title and a roster of given names only');
const an = st[0];
r = await call('POST', '/v1/hw/' + code + '/start', { sid: an.id, pin: '0000' === an.pin ? '1111' : '0000' }, 'none'); assert.equal(r.error, 'bad_pin'); assert.equal(r.left, 7); ok('wrong personal code refused, 7 tries left');
r = await call('POST', '/v1/hw/' + code + '/start', { sid: an.id, pin: an.pin }, 'none');
assert.equal(r.status, 200); assert.equal(r.name, 'Nguyễn Văn An'); assert.equal(r.items.length, 4); assert.equal(r.items[0].k, undefined); const stTok = r.token; ok('right code: questions arrive without answers');
// answer correctly in the student's own order
const disp = {};
r.items.forEach((it, d) => {
  const ci = items.findIndex((x) => x.q === it.q), src = items[ci];
  if (src.y === 'mc') disp[d] = 'ABCD'[it.o.indexOf(src.o['ABCD'.indexOf(src.k)])];
  else disp[d] = src.k;
});
const d2 = r.items.findIndex((it) => it.q === 'Cả A và B?'); assert.deepEqual(r.items[d2].o, items[1].o); ok('options that name other letters are not shuffled');
r = await call('PUT', '/v1/hw/' + code + '/save', { token: stTok, answers: disp }, 'none'); assert.equal(r.ok, true); ok('draft saved');
r = await call('GET', '/v1/assignments/' + code); const at = r.attempts.find((x) => x.student_id === an.id);
assert.equal(at.answers[0], 'B'); assert.equal(at.answers[2], 'TFTF'); assert.equal(at.submitted_at, null); ok('teacher sees the draft in the original order');
r = await call('POST', '/v1/hw/' + code + '/start', { sid: an.id, pin: an.pin }, 'none'); const tok2 = r.token; assert.deepEqual(r.answers, disp); ok('opening again on another phone brings the answers back');
r = await call('PUT', '/v1/hw/' + code + '/save', { token: stTok, answers: disp }, 'none'); assert.equal(r.error, 'token'); ok('the first phone is signed out');
r = await call('POST', '/v1/hw/' + code + '/submit', { token: tok2, answers: disp }, 'none');
assert.equal(r.result.got, 2); assert.equal(r.result.max, 2); assert.equal(r.result.review.length, 4); assert.equal(r.result.review[0].e !== undefined, true); ok('hand in: 2/2, answers shown (show_key = submit)');
r = await call('PUT', '/v1/hw/' + code + '/save', { token: tok2, answers: {} }, 'none'); assert.equal(r.error, 'submitted'); ok('no changes after handing in');

const binh = st[1];
r = await call('POST', '/v1/hw/' + code + '/start', { sid: binh.id, pin: binh.pin }, 'none'); const bTok = r.token;
const bd = {}; r.items.forEach((it, d) => { if (it.y === 'tf') bd[d] = 'TFFF'; if (it.y === 'sa') bd[d] = '3.5'; });
r = await call('POST', '/v1/hw/' + code + '/submit', { token: bTok, answers: bd }, 'none'); assert.equal(r.result.got, 0.5 + 0.5); ok('true/false 3 of 4 = 0.5, "3.5" equals "3,5" (1/2)');

r = await call('GET', '/v1/classes/' + cls + '/assignments'); assert.equal(r.assignments[0].done, 2); ok('assignment list: 2 handed in');

console.log('Time window');
r = await call('POST', '/v1/assignments', { class_id: cls, title: 'Kiểm tra 15 phút', open_at: Date.now() + 3600e3, close_at: Date.now() + 7200e3, items });
const later = r.assignment.code;
r = await call('POST', '/v1/hw/' + later + '/start', { sid: an.id, pin: an.pin }, 'none'); assert.equal(r.error, 'not_open'); assert.ok(r.open_at > Date.now()); ok('before the opening time: refused, with the opening time');
r = await call('POST', '/v1/assignments', { class_id: cls, title: 'Đóng sau 4 giây', open_at: Date.now() - 1000, close_at: Date.now() + 4000, items });
const soon = r.assignment.code;
r = await call('POST', '/v1/hw/' + soon + '/start', { sid: an.id, pin: an.pin }, 'none'); const sTok = r.token; assert.ok(r.deadline <= Date.now() + 4100);
r = await call('POST', '/v1/hw/' + soon + '/start', { sid: binh.id, pin: binh.pin }, 'none'); const sTok2 = r.token;
r = await call('POST', '/v1/hw/' + soon + '/start', { sid: st.find((s) => s.no === 4) ? 'x' : 'x', pin: '1' }, 'none'); assert.equal(r.error, 'no_student'); ok('unknown student refused');
const firstMc = (await call('POST', '/v1/hw/' + soon + '/start', { token: sTok }, 'none'));
await call('PUT', '/v1/hw/' + soon + '/save', { token: sTok, answers: { 0: 'A' } }, 'none');
await sleep(10000);
r = await call('PUT', '/v1/hw/' + soon + '/save', { token: sTok, answers: { 0: 'B' } }, 'none'); assert.equal(r.error, 'closed'); ok('after the closing time: new answers refused');
r = await call('POST', '/v1/hw/' + soon + '/submit', { token: sTok2, answers: { 1: 'A' }, locked_at: Date.now() - 7000 }, 'none'); assert.equal(r.ok, true); assert.equal(r.result.late, true); ok('answers locked on the phone before the deadline, sent late: accepted, marked late');
r = await call('POST', '/v1/hw/' + soon + '/submit', { token: sTok, answers: { 0: 'B' }, locked_at: Date.now() }, 'none'); assert.equal(r.error, 'closed'); ok('answers locked after the deadline: refused');
r = await call('POST', '/v1/hw/' + soon + '/result', { token: sTok }, 'none'); assert.equal(r.result, null); ok('within the grace period the draft waits');
r = await call('POST', '/v1/hw/' + soon + '/start', { sid: st[2].id, pin: '0000' }, 'none'); assert.ok(['no_student', 'closed', 'bad_pin'].includes(r.error)); ok('removed student cannot start');

console.log('Teacher controls');
r = await call('PATCH', '/v1/assignments/' + code, { close_now: true }); assert.ok(r.assignment.close_at <= Date.now()); ok('close now');
r = await call('POST', '/v1/assignments/' + code + '/reset', { student_id: binh.id }); r = await call('GET', '/v1/assignments/' + code); assert.equal(r.attempts.length, 1); ok('let a student start again');
r = await call('PATCH', '/v1/assignments/' + code, { close_at: Date.now() + 3600e3 }); assert.ok(r.assignment.close_at > Date.now()); ok('reopen / extend');
r = await call('DELETE', '/v1/assignments/' + later); assert.equal(r.ok, true); ok('delete an assignment');
r = await call('DELETE', '/v1/me', { email: 'wrong@x.com' }, other.token); assert.equal(r.error, 'confirm');
r = await call('DELETE', '/v1/me', { email: 'x' + email }, other.token); assert.equal(r.ok, true); ok('delete an account (with e-mail confirmation)');
r = await call('DELETE', '/v1/classes/' + cls); assert.equal(r.ok, true); r = await call('GET', '/v1/hw/' + code, null, 'none'); assert.equal(r.error, 'no_assignment'); ok('deleting the class removes its assignments');
r = await call('POST', '/v1/auth/logout'); r = await call('GET', '/v1/me'); assert.equal(r.error, 'login'); ok('log out');
console.log('\nAll ' + n + ' checks passed.');
