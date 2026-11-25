// End-to-end test of study groups against a running local worker (same set-up as api.test.mjs):
//   npx wrangler dev --local --port 8787   (with .dev.vars: PEPPER=..., ALLOW_LOCALHOST=1)
//   node test/groups.test.mjs [http://127.0.0.1:8787]
import assert from 'node:assert/strict';

const API = process.argv[2] || 'http://127.0.0.1:8787';
// each run pretends to come from its own network, so the daily limits of earlier runs do not get in the way
const IP = '10.' + (Date.now() % 250) + '.' + Math.floor(Math.random() * 250) + '.1';
async function call(path, body, ip) {
  const r = await fetch(API + '/v1/groups/' + path, { method: 'POST', headers: { 'Content-Type': 'text/plain', 'CF-Connecting-IP': ip || IP }, body: JSON.stringify(body || {}) });
  return Object.assign({ status: r.status }, await r.json());
}
let n = 0; const ok = (m) => console.log('  ✓ ' + m, ++n ? '' : '');
const VN = 7 * 3600e3, DAY = 864e5, now = Date.now();
const vnDay = (t) => new Date(t + VN).toISOString().slice(0, 10);
const dow = (new Date(now + VN).getUTCDay() + 6) % 7, wk = vnDay(now - dow * DAY), today = vnDay(now);
const days = '0000000'.split('').map((c, i) => (i === dow ? '1' : '0')).join('');

console.log('Create and join');
let r = await call('new', { name: 'Tổ 2 – 8A', nick: 'An', av: '🦊' });
assert.equal(r.error, 'consent'); ok('a group needs the consent box');
r = await call('new', { name: '  ', nick: 'An', av: '🦊', consent: true }); assert.equal(r.error, 'bad_name'); ok('a group needs a name');
r = await call('new', { name: 'Tổ 2 – 8A', nick: 'An', av: '🦊', consent: true, st: { wk, n: 4, days, st: 3, ld: today, dc: { d: today, k: 'int', s: 640 } } });
assert.equal(r.status, 200); assert.match(r.group.code, /^[0-9A-Z]{4}-[0-9A-Z]{4}$/); assert.match(r.key, /^[a-z0-9]{24}$/);
const code = r.group.code, an = { mid: r.mid, key: r.key };
assert.equal(r.group.lead, true); assert.equal(r.group.members.length, 1); assert.equal(r.group.total, 4); assert.equal(r.group.goal, 3);
assert.equal(r.group.members[0].today, true); assert.equal(r.group.members[0].st, 3); assert.deepEqual(r.group.members[0].dc, { k: 'int', s: 640 });
ok('created ' + code + ': leader, this week counted, automatic goal 3, today\'s challenge shown');
r = await call('peek', { code: code.toLowerCase().replace('-', ' ') }); assert.equal(r.name, 'Tổ 2 – 8A'); assert.equal(r.n, 1); ok('peek with the code typed loosely shows the name before joining');
r = await call('peek', { code: 'ZZZZ-ZZZZ' }); assert.equal(r.error, 'no_group'); ok('unknown code: no_group');
r = await call('join', { code, nick: 'Bình', av: '👽', consent: true });
assert.equal(r.status, 200); assert.equal(r.group.members[1].av, '🍋'); assert.equal(r.group.lead, false); assert.equal(r.group.goal, 6);
const binh = { mid: r.mid, key: r.key }; ok('join: an avatar outside the list becomes 🍋, goal grows to 6');
r = await call('join', { code, nick: 'Chi', av: '🐼', consent: true }); const chi = { mid: r.mid, key: r.key }; ok('third member');

console.log('Sync, cheers and nudges');
r = await call('sync', { code, mid: binh.mid, key: 'wrong' }); assert.equal(r.error, 'not_member'); ok('wrong member key refused');
r = await call('sync', { code, ...binh, st: { wk: '2020-01-06', n: 50, days: '1111111', st: 9, ld: '2020-01-12' } });
assert.equal(r.group.members[1].n, 0); assert.equal(r.group.members[1].st, 0); assert.equal(r.group.total, 4); ok('an old week counts as zero, an old streak as zero');
r = await call('sync', { code, ...binh, st: { wk, n: 3000, days, lw: 2, st: 1, ld: today }, nick: 'Bình An', av: '🐸' });
assert.equal(r.group.members[1].n, 999); assert.equal(r.group.members[1].nick, 'Bình An'); assert.equal(r.group.members[1].av, '🐸'); assert.equal(r.group.last, 2); ok('numbers capped, nickname and avatar changed');
r = await call('cheer', { code, ...binh, to: an.mid, e: '👏' }); assert.equal(r.status, 200); assert.deepEqual(r.group.sent[an.mid], ['c']); ok('cheer sent');
r = await call('cheer', { code, ...binh, to: an.mid, e: '🌟' }); assert.equal(r.error, 'already'); ok('one cheer a day to the same friend');
r = await call('cheer', { code, ...binh, to: an.mid, e: '🔔' }); assert.equal(r.status, 200); ok('a nudge on top is fine');
r = await call('cheer', { code, ...binh, to: binh.mid, e: '👏' }); assert.equal(r.error, 'self'); ok('no cheering yourself');
r = await call('cheer', { code, ...binh, to: chi.mid, e: 'hello' }); assert.equal(r.error, 'bad_cheer'); ok('only the fixed emojis');
r = await call('sync', { code, ...an }); assert.equal(r.group.inbox.length, 2); assert.equal(r.group.inbox[0].by.nick, 'Bình An'); assert.equal(r.group.inbox[1].e, '🔔'); ok('An sees the cheer and the nudge, with who sent them');

console.log('Arena room for the group');
r = await call('room', { code, ...chi, room: '123456', deck: 'times' }); assert.equal(r.group.room.code, '123456'); assert.ok(r.group.room.until > now + 29 * 60e3); ok('room shown for 30 minutes');
r = await call('room', { code, ...chi, room: '' }); assert.equal(r.group.room, null); ok('room removed');

console.log('Leader');
r = await call('admin', { code, ...binh, goal: 20 }); assert.equal(r.error, 'not_lead'); ok('only the leader changes the goal');
r = await call('admin', { code, ...an, goal: 20, name: 'Tổ 2' }); assert.equal(r.group.goal, 20); assert.equal(r.group.auto, false); assert.equal(r.group.name, 'Tổ 2'); ok('goal 20, renamed');
r = await call('admin', { code, ...an, remove: chi.mid }); assert.equal(r.group.members.length, 2); ok('leader removes a member');
r = await call('sync', { code, ...chi }); assert.equal(r.error, 'not_member'); ok('the removed member is out');
r = await call('leave', { code, ...an }); assert.equal(r.ok, true);
r = await call('sync', { code, ...binh }); assert.equal(r.group.lead, true); assert.equal(r.group.members.length, 1); ok('leader leaves: the group passes to the next member');
r = await call('delete', { code, ...binh }); assert.equal(r.ok, true);
r = await call('peek', { code }); assert.equal(r.error, 'no_group'); ok('group deleted');

console.log('Limits');
r = await call('new', { name: 'Đông', nick: 'A', av: '🍋', consent: true }); const big = r.group.code;
for (let i = 1; i < 30; i++) await call('join', { code: big, nick: 'B' + i, av: '🍋', consent: true });
r = await call('join', { code: big, nick: 'Thừa', av: '🍋', consent: true }); assert.equal(r.error, 'full'); ok('30 members at most');
let last;
for (let i = 0; i < 61; i++) last = await call('peek', { code: 'Q' + String(i).padStart(7, '2').replace(/[01]/g, '2') }, '10.9.9.' + (now % 200));
assert.equal(last.error, 'too_many'); ok('guessing codes from one network stops after 60 misses a day');

console.log('\n' + n + ' checks passed.');
