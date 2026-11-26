'use strict';
/* Unit tests for LemonMath Tools (assets/tools/*.js). Run: node --test tools/test/tools-core.test.js
 * No browser and no extra packages: the tool scripts export their pure parts when loaded in Node. */
const test = require('node:test');
const assert = require('node:assert/strict');
const L = require('../../assets/tools/core.js');
const M = require('../../assets/tools/classroom-timer.js');
const P = require('../../assets/tools/random-name-picker.js');
const G = require('../../assets/tools/random-group-maker.js');

/* every sequence a random source could give: proves an algorithm is fair whenever its source is fair */
function allSequences(sizes) {
  const out = [[]];
  sizes.forEach((n) => { const next = []; out.forEach((s) => { for (let i = 0; i < n; i++) next.push(s.concat(i)); }); out.splice(0, out.length, ...next); });
  return out;
}
const fromSeq = (seq) => { let k = 0; return (n) => { const v = seq[k++]; assert.ok(v < n); return v; }; };

test('randInt stays in range and covers every value', () => {
  [1, 2, 3, 7, 10, 37].forEach((n) => {
    const seen = new Set();
    for (let i = 0; i < 4000; i++) { const v = L.randInt(n); assert.ok(Number.isInteger(v) && v >= 0 && v < n); seen.add(v); }
    assert.equal(seen.size, n);
  });
  assert.throws(() => L.randInt(0), RangeError);
});

test('randInt is uniform (chi-square, 10 values, 100 000 draws)', () => {
  const n = 10, draws = 100000, c = new Array(n).fill(0);
  for (let i = 0; i < draws; i++) c[L.randInt(n)]++;
  const e = draws / n, chi = c.reduce((s, x) => s + (x - e) * (x - e) / e, 0);
  assert.ok(chi < 40, 'chi-square ' + chi.toFixed(1) + ' (9 degrees of freedom; 40 is far beyond p = 0.0001)');
});

test('shuffle gives every order exactly once over all random sequences (Fisher–Yates)', () => {
  const items = ['A', 'B', 'C', 'D'], seen = {};
  allSequences([4, 3, 2]).forEach((seq) => { const k = L.shuffle(items, fromSeq(seq)).join(''); seen[k] = (seen[k] || 0) + 1; });
  assert.equal(Object.keys(seen).length, 24);
  assert.ok(Object.values(seen).every((x) => x === 1));
  assert.deepEqual(items, ['A', 'B', 'C', 'D'], 'the original list is not changed');
});

test('sampleIndexes: k different students, every choice equally likely', () => {
  const seen = {};
  allSequences([5, 4]).forEach((seq) => { const k = L.sampleIndexes(5, 2, fromSeq(seq)); assert.notEqual(k[0], k[1]); const key = k.join(','); seen[key] = (seen[key] || 0) + 1; });
  assert.equal(Object.keys(seen).length, 20);   // 5 × 4 ordered pairs
  assert.ok(Object.values(seen).every((x) => x === 1));
  assert.equal(L.sampleIndexes(3, 10).length, 3, 'never more than n');
  assert.equal(new Set(L.sampleIndexes(30, 30)).size, 30);
});

test('groupSizes: balanced, never empty, never over the chosen size', () => {
  assert.deepEqual(L.groupSizes(10, { size: 4 }), [4, 3, 3]);
  assert.deepEqual(L.groupSizes(38, { groups: 6 }), [7, 7, 6, 6, 6, 6]);
  assert.deepEqual(L.groupSizes(30, { groups: 6 }), [5, 5, 5, 5, 5, 5]);
  assert.deepEqual(L.groupSizes(5, { groups: 8 }), [1, 1, 1, 1, 1]);
  assert.deepEqual(L.groupSizes(7, { size: 2 }), [2, 2, 2, 1]);
  assert.deepEqual(L.groupSizes(0, { groups: 3 }), []);
  for (let n = 1; n <= 60; n++) for (let k = 1; k <= 12; k++) {
    [{ groups: k }, { size: k }].forEach((opt) => {
      const s = L.groupSizes(n, opt);
      assert.equal(s.reduce((a, b) => a + b, 0), n);
      assert.ok(Math.max(...s) - Math.min(...s) <= 1 && Math.min(...s) >= 1);
      if (opt.size) assert.ok(Math.max(...s) <= k);
      if (opt.groups) assert.equal(s.length, Math.min(k, n));
    });
  }
});

test('makeGroups: every student in exactly one group, duplicate names kept', () => {
  const names = ['An', 'Bình', 'Chi', 'An', 'Dũng', 'Hà', 'Hùng', 'Lan', 'Minh', 'Nam', 'Oanh'];
  for (let i = 0; i < 200; i++) {
    const g = L.makeGroups(names, { groups: 3 });
    assert.equal(g.length, 3);
    assert.ok(G.intact(g.map((m) => ({ members: m })), names));
  }
});

test('moving a student keeps every student in exactly one group', () => {
  const names = ['a', 'b', 'c', 'd', 'e'];
  const gs = L.makeGroups(names, { groups: 2 }).map((m, i) => ({ name: 'G' + i, members: m }));
  assert.equal(G.move(gs, 0, 0, 1), true);
  assert.ok(G.intact(gs, names));
  assert.equal(G.move(gs, 1, 99, 0), false, 'a student that is not there cannot move');
  assert.equal(G.move(gs, 1, 0, 1), false, 'moving into the same group does nothing');
  assert.ok(G.intact(gs, names));
});

test('parseNames: pasted from Excel, Word, chats and numbered lists', () => {
  assert.deepEqual(L.parseNames('An\nBình\n\n  Chi  \n'), ['An', 'Bình', 'Chi']);
  assert.deepEqual(L.parseNames('1. Nguyễn Văn An\n2) Trần Thị Bình\n3 - Lê Chi'), ['Nguyễn Văn An', 'Trần Thị Bình', 'Lê Chi']);
  assert.deepEqual(L.parseNames('An, Bình; Chi'), ['An', 'Bình', 'Chi']);
  // an Excel table: STT | Họ và tên | Ngày sinh | Giới tính
  assert.deepEqual(L.parseNames('STT\tHọ và tên\tNgày sinh\tGiới tính\n1\tNguyễn Văn An\t12/03/2011\tNam\n2\tTrần Thị Bình\t05/09/2011\tNữ'), ['Nguyễn Văn An', 'Trần Thị Bình']);
  // family names and given name in two columns
  assert.deepEqual(L.parseNames('Nguyễn Văn\tAn\nTrần Thị\tBình'), ['Nguyễn Văn An', 'Trần Thị Bình']);
  assert.deepEqual(L.parseNames('﻿An\r\nBình'), ['An', 'Bình'], 'BOM and Windows line ends');
  assert.equal(L.parseNames(Array.from({ length: 700 }, (_, i) => 'HS ' + String.fromCharCode(65 + (i % 26)) + i).join('\n')).length <= L.MAX_NAMES, true);
});

test('CSV: read with quotes and semicolons, written safely for Excel', () => {
  assert.deepEqual(L.namesFromCSV('Họ và tên,Lớp\n"Nguyễn Văn An",10A\n"Lê ""Bé"" Chi",10A\n'), ['Nguyễn Văn An', 'Lê "Bé" Chi']);
  assert.deepEqual(L.namesFromCSV('STT;Họ tên\n1;An\n2;Bình'), ['An', 'Bình']);
  assert.equal(L.toCSV([['Nhóm', 'Họ và tên'], ['Nhóm 1', 'An, Bình']]), 'Nhóm,Họ và tên\r\nNhóm 1,"An, Bình"');
  assert.equal(L.toCSV([['=HYPERLINK("x")']]), '"\'=HYPERLINK(""x"")"', 'a formula is never run by a spreadsheet');
});

test('fmtClock and norm', () => {
  assert.equal(L.fmtClock(0), '00:00');
  assert.equal(L.fmtClock(65), '01:05');
  assert.equal(L.fmtClock(3599), '59:59');
  assert.equal(L.fmtClock(3600), '1:00:00');
  assert.equal(L.norm('  Đồng HỒ   bấm giờ '), 'dong ho bam gio');
});

test('timer: counts from the real clock, so a sleeping tab does not change the time', () => {
  const st = M.make('down', 300);
  M.start(st, 1000);
  assert.equal(M.shown(st, 1000), 300);
  assert.equal(M.shown(st, 1001), 300, '5:00 stays until a full second has gone');
  assert.equal(M.shown(st, 2000), 299);
  assert.equal(M.shown(st, 1000 + 240000), 60, 'no redraw for 4 minutes (background tab): still exactly right');
  M.pause(st, 1000 + 250000);
  assert.equal(M.shown(st, 1000 + 999999), 50, 'paused: the time stands still');
  M.start(st, 2000000);
  assert.equal(M.shown(st, 2000000 + 10000), 40);
  assert.equal(M.done(st, 2000000 + 50000), true);
  assert.equal(M.shown(st, 2000000 + 70000), 0);
  assert.equal(-M.remaining(st, 2000000 + 70000), 20000, 'overtime is counted');
});

test('timer: adding and taking away time', () => {
  const st = M.make('down', 60);
  M.add(st, 30, 0);
  assert.equal(st.total, 90, 'before the start it changes the length');
  M.start(st, 0);
  M.add(st, 60, 30000);
  assert.equal(M.shown(st, 30000), 120);
  M.add(st, -500, 40000);
  assert.equal(M.shown(st, 40000), 0, 'taking away more than is left stops at 00:00');
  assert.equal(M.done(st, 40000), true);
  assert.equal(st.running, false);
  M.reset(st);
  assert.equal(M.shown(st, 99999), st.total);
  assert.equal(M.make('down', 99999999).total, M.MAX, 'at most 12 hours');
  assert.equal(M.make('down', 0).total, 1);
});

test('timer: stopwatch and saved state', () => {
  const st = M.make('up', 300);
  M.start(st, 0);
  assert.equal(M.shown(st, 61500), 61);
  assert.equal(M.done(st, 1e9), false, 'a stopwatch never ends');
  assert.equal(M.valid(JSON.parse(JSON.stringify(st))), true);
  assert.equal(M.valid({ mode: 'down', total: -1, running: false, base: 0 }), false);
  assert.equal(M.valid(null), false);
});

test('name picker: no repeats until the whole class has been picked', () => {
  const names = ['An', 'Bình', 'An', 'Chi'];
  assert.deepEqual(P.pool(names, []), names);
  assert.deepEqual(P.pool(names, ['An']), ['Bình', 'An', 'Chi'], 'two students called An: one is still in the hat');
  assert.deepEqual(P.pool(names, ['An', 'An', 'Bình', 'Chi']), []);
  assert.deepEqual(P.keepPicked(['An', 'Bình'], ['An', 'An', 'Dũng']), ['An'], 'picks of removed names are dropped');
  // a whole round by drawing: every student exactly once
  let picked = [];
  while (P.pool(names, picked).length) { const h = P.pool(names, picked); picked = picked.concat(h[L.randInt(h.length)]); }
  assert.deepEqual(picked.slice().sort(), names.slice().sort());
});
