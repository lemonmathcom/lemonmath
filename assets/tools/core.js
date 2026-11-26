/* Lemonmath · LemonMath Tools, shared core (window.LMT).
 * Loaded on the tools hub and on every tool page, before the tool's own script (assets/tools/<id>.js).
 *
 *   Pure helpers (also used by the unit tests, tools/test/tools-core.test.js):
 *     randInt, shuffle, sampleIndexes   fair randomness (crypto.getRandomValues + rejection sampling)
 *     groupSizes, makeGroups            balanced groups: sizes never differ by more than 1
 *     parseNames, namesFromCSV, toCSV   class lists pasted from Excel, Word or a CSV file
 *     fmtClock, norm                    "05:00" / "1:02:03"; text without accents for searching
 *   Page helpers: saving on this device only (localStorage, keys "lm-tl-…"), shared class lists, favourites and
 *   recently used tools, fullscreen (with a fallback where the browser has none), a gentle chime, copy, download,
 *   and the class-list editor used by the name picker and the group maker.
 * Nothing here sends data anywhere.
 */
(function (root, factory) {
  var api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.LMT = api;
})(typeof window !== 'undefined' ? window : globalThis, function (root) {
  'use strict';
  var d = root.document;
  var vi = !!(d && d.documentElement.lang === 'vi');
  var MAX_NAMES = 500, MAX_LEN = 80, PREFIX = 'lm-tl-';

  /* ---------------- fair randomness ---------------- */
  /** @param {number} n @returns {number} an integer in [0, n), every value equally likely */
  function randInt(n) {
    n = Math.floor(n);
    if (!(n >= 1)) throw new RangeError('randInt: n must be at least 1');
    var c = root.crypto;
    if (c && c.getRandomValues) {
      var lim = Math.floor(4294967296 / n) * n, b = new Uint32Array(1);
      do { c.getRandomValues(b); } while (b[0] >= lim);   // drop the uneven tail, so no value is favoured
      return b[0] % n;
    }
    return Math.floor(Math.random() * n);
  }
  /** Fisher–Yates on a copy. rnd(n) must return an integer in [0, n) (randInt by default). */
  function shuffle(arr, rnd) {
    rnd = rnd || randInt;
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  /** k different indexes out of 0..n-1, in the order they were drawn. */
  function sampleIndexes(n, k, rnd) {
    rnd = rnd || randInt;
    k = Math.max(0, Math.min(Math.floor(k), n));
    var a = [], i;
    for (i = 0; i < n; i++) a.push(i);
    for (i = 0; i < k; i++) { var j = i + rnd(n - i), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a.slice(0, k);
  }

  /* ---------------- groups ---------------- */
  /** Sizes of the groups for n people. opt = { groups: g } or { size: s }. Sizes differ by at most 1, none is empty,
   *  and with { size: s } no group is bigger than s (10 people in groups of 4 -> 4, 3, 3, not 4, 4, 2). */
  function groupSizes(n, opt) {
    n = Math.max(0, Math.floor(n));
    if (!n) return [];
    var g;
    if (opt && opt.groups) g = Math.min(Math.max(1, Math.floor(opt.groups)), n);
    else g = Math.ceil(n / Math.max(1, Math.floor((opt && opt.size) || 1)));
    var base = Math.floor(n / g), extra = n % g, out = [];
    for (var i = 0; i < g; i++) out.push(base + (i < extra ? 1 : 0));
    return out;
  }
  /** Shuffle the items and deal them into groups of the sizes above: every item lands in exactly one group. */
  function makeGroups(items, opt, rnd) {
    var sizes = groupSizes(items.length, opt), sh = shuffle(items, rnd), out = [], k = 0;
    sizes.forEach(function (s) { out.push(sh.slice(k, k + s)); k += s; });
    return out;
  }

  /* ---------------- class lists ---------------- */
  var HEADER = /^(stt|tt|so tt|ho va ten|ho ten|ho dem|ten|ten hoc sinh|hoc sinh|name|names|full name|student|student name|first name|last name)$/;
  var GENDER = /^(nam|nu|male|female|m|f|boy|girl)$/;
  var DATE = /\d{1,4}[\/.\-]\d{1,2}[\/.\-]\d{1,4}/;
  function norm(s) {
    return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/\s+/g, ' ').trim();
  }
  function cleanName(s) {
    s = String(s).replace(/[\u0000-\u001F\u007F​﻿]/g, ' ').replace(/\s+/g, ' ').trim();
    s = s.replace(/^\d{1,3}\s*[.)\]\-–:]\s*/, '');          // "1. Lan", "02) Minh", "3 - Hoa"
    s = s.replace(/^["']+|["']+$/g, '').trim();
    return s.slice(0, MAX_LEN).trim();
  }
  /* one row of a table (cells): the name, or '' for headers and rows without a name.
     "Nguyễn Văn | An" (family names and given name in two columns) are joined; codes, dates, numbers and gender are skipped */
  function nameFromCells(cells) {
    var keep = cells.map(cleanName).filter(function (c) { return c && !/\d/.test(c) && !DATE.test(c) && !GENDER.test(norm(c)); });
    if (!keep.length || HEADER.test(norm(keep[0]))) return '';
    var name = keep[0];
    if (keep[1] && keep[0].split(' ').length <= 3 && keep[1].indexOf(' ') < 0 && !HEADER.test(norm(keep[1])) && /^[A-ZÀ-ỸĐ]/.test(keep[1])) name += ' ' + keep[1];
    return name.slice(0, MAX_LEN);
  }
  /** Names from pasted text: one per line, or "An, Bình; Chi" on a single line, or rows copied from Excel (tabs). */
  function parseNames(text) {
    var src = String(text || '').replace(/^﻿/, '').replace(/\r\n?/g, '\n');
    var lines = src.split('\n').filter(function (l) { return l.trim(); });
    if (lines.length === 1 && /[,;]/.test(lines[0]) && lines[0].indexOf('\t') < 0) lines = lines[0].split(/[,;]/);
    var out = [];
    lines.forEach(function (line) {
      var n = line.indexOf('\t') >= 0 ? nameFromCells(line.split('\t')) : nameFromCells([line]);
      if (n) out.push(n);
    });
    return out.slice(0, MAX_NAMES);
  }
  /** Rows of a CSV file (quotes, "" inside quotes, line breaks inside quotes). The separator is , or ; whichever the first line uses more. */
  function parseCSV(text) {
    var s = String(text || '').replace(/^﻿/, ''), first = s.split(/\r?\n/)[0] || '';
    var sep = (first.match(/;/g) || []).length > (first.match(/,/g) || []).length ? ';' : (first.indexOf('\t') >= 0 && first.indexOf(',') < 0 ? '\t' : ',');
    var rows = [], row = [], f = '', q = false;
    for (var i = 0; i < s.length; i++) {
      var ch = s[i];
      if (q) {
        if (ch === '"') { if (s[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += ch;
      } else if (ch === '"' && f === '') q = true;
      else if (ch === sep) { row.push(f); f = ''; }
      else if (ch === '\n' || ch === '\r') { if (ch === '\r' && s[i + 1] === '\n') i++; row.push(f); rows.push(row); row = []; f = ''; }
      else f += ch;
    }
    if (f !== '' || row.length) { row.push(f); rows.push(row); }
    return rows;
  }
  function namesFromCSV(text) {
    var out = [];
    parseCSV(text).forEach(function (r) { var n = nameFromCells(r); if (n) out.push(n); });
    return out.slice(0, MAX_NAMES);
  }
  /** CSV text for Excel. A cell starting with = + - @ gets a leading ' so a spreadsheet never runs it as a formula. */
  function toCSV(rows) {
    return rows.map(function (r) {
      return r.map(function (v) {
        v = String(v == null ? '' : v);
        if (/^[=+\-@]/.test(v)) v = "'" + v;
        return /[",;\r\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
      }).join(',');
    }).join('\r\n');
  }
  /** seconds -> "05:00", "59:59", "1:00:00" */
  function fmtClock(sec) {
    sec = Math.max(0, Math.floor(sec));
    var h = Math.floor(sec / 3600), m = Math.floor(sec / 60) % 60, s = sec % 60, p = function (x) { return (x < 10 ? '0' : '') + x; };
    return h ? h + ':' + p(m) + ':' + p(s) : p(m) + ':' + p(s);
  }

  var api = { vi: vi, randInt: randInt, shuffle: shuffle, sampleIndexes: sampleIndexes, groupSizes: groupSizes, makeGroups: makeGroups,
    parseNames: parseNames, parseCSV: parseCSV, namesFromCSV: namesFromCSV, toCSV: toCSV, fmtClock: fmtClock, norm: norm, MAX_NAMES: MAX_NAMES };
  if (!d) return api;   // Node (unit tests): pure helpers only

  /* ================= in the browser ================= */
  var C = vi ? {
    sure: 'Bấm lần nữa để xoá', sureCls: 'Bấm lần nữa để xoá (gồm cả các danh sách lớp)', cleared: 'Đã xoá. Đang tải lại…', favOn: 'Bỏ khỏi yêu thích', favOff: 'Thêm vào yêu thích',
    cls: 'Lớp', clsName: 'Tên lớp', newCls: '+ Lớp mới', delCls: 'Xoá lớp này', delSure: 'Bấm lần nữa để xoá lớp', myClass: 'Lớp của tôi', classN: function (n) { return 'Lớp ' + n; },
    listH: function (n) { return 'Danh sách học sinh (' + n + ' em)'; }, listHelp: 'Mỗi dòng một tên. Có thể chép cả cột họ tên trong Excel, Word hay Zalo rồi dán vào đây.',
    importCsv: '📥 Nhập từ file CSV', exportCsv: '📤 Xuất CSV', saved: 'Đã lưu trên máy ✓', imported: function (n) { return 'Đã nhập ' + n + ' tên ✓'; }, noNames: 'Không tìm thấy tên nào trong file này.',
    tooMany: 'Mỗi lớp tối đa ' + MAX_NAMES + ' tên.', badFile: 'Không đọc được file. Hãy lưu từ Excel dạng CSV UTF-8.', csvHead: 'Họ và tên', fullOn: 'Toàn màn hình', fullOff: 'Thoát toàn màn hình',
    copied: 'Đã chép ✓', copyFail: 'Không chép được, bạn hãy bôi đen rồi chép tay.'
  } : {
    sure: 'Press again to delete', sureCls: 'Press again to delete (class lists included)', cleared: 'Deleted. Reloading…', favOn: 'Remove from favourites', favOff: 'Add to favourites',
    cls: 'Class', clsName: 'Class name', newCls: '+ New class', delCls: 'Delete this class', delSure: 'Press again to delete the class', myClass: 'My class', classN: function (n) { return 'Class ' + n; },
    listH: function (n) { return 'Students (' + n + ')'; }, listHelp: 'One name per line. You can copy a whole column of names from Excel, Word or a chat and paste it here.',
    importCsv: '📥 Import a CSV file', exportCsv: '📤 Export CSV', saved: 'Saved on this device ✓', imported: function (n) { return n + ' names imported ✓'; }, noNames: 'No names found in this file.',
    tooMany: 'At most ' + MAX_NAMES + ' names per class.', badFile: 'Could not read the file. Save it from Excel as CSV UTF-8.', csvHead: 'Name', fullOn: 'Full screen', fullOff: 'Exit full screen',
    copied: 'Copied ✓', copyFail: 'Could not copy. Select the text and copy it by hand.'
  };
  api.C = C;
  var $ = function (s, r) { return (r || d).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  api.$ = $; api.$$ = $$; api.esc = esc;
  api.reduced = function () { return !!(root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches); };

  /* ---------------- saving on this device ---------------- */
  function lsGet(k) { try { return root.localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { root.localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function lsDel(k) { try { root.localStorage.removeItem(k); } catch (e) {} }
  function read(k, def) { try { var x = JSON.parse(lsGet(k) || 'null'); return x == null ? def : x; } catch (e) { return def; } }
  function write(k, v) { return lsSet(k, JSON.stringify(v)); }
  /** Saved values of one tool: keys "lm-tl-<tool>:<key>". */
  api.store = function (ns) {
    var p = PREFIX + ns + ':';
    return { get: function (k, def) { return read(p + k, def); }, set: function (k, v) { return write(p + k, v); }, del: function (k) { lsDel(p + k); } };
  };
  var SHARED = {};   // tools that use the shared class lists: deleting their data deletes the lists too
  api.usesClasses = function (id) { SHARED[id] = true; };
  /** Delete what one tool saved (scope = its id), or what every tool saved (scope = ''). */
  api.clearSaved = function (scope) {
    var keys = [], i;
    try { for (i = 0; i < root.localStorage.length; i++) keys.push(root.localStorage.key(i)); } catch (e) {}
    keys.forEach(function (k) {
      if (!k || k.indexOf(PREFIX) !== 0) return;
      if (!scope || k.indexOf(PREFIX + scope + ':') === 0 || (SHARED[scope] && /^lm-tl-class/.test(k))) lsDel(k);
    });
  };

  /* ---------------- shared class lists ---------------- */
  var K_CLS = PREFIX + 'classes', K_CUR = PREFIX + 'class-cur';
  var classes = api.classes = {
    all: function () { var a = read(K_CLS, []); return Array.isArray(a) ? a.filter(function (c) { return c && c.id && Array.isArray(c.names); }) : []; },
    save: function (list) { return write(K_CLS, list); },
    get: function (id) { return classes.all().filter(function (c) { return c.id === id; })[0] || null; },
    put: function (cls) { var a = classes.all(), i = a.map(function (c) { return c.id; }).indexOf(cls.id); cls.at = Date.now(); if (i < 0) a.push(cls); else a[i] = cls; classes.save(a); return cls; },
    remove: function (id) { classes.save(classes.all().filter(function (c) { return c.id !== id; })); },
    current: function () {
      var a = classes.all(), id = read(K_CUR, '');
      var c = a.filter(function (x) { return x.id === id; })[0] || a[0];
      if (!c) c = classes.put({ id: newId(), name: C.myClass, names: [] });
      write(K_CUR, c.id);
      return c;
    },
    select: function (id) { write(K_CUR, id); }
  };
  function newId() { return Date.now().toString(36) + randInt(1679616).toString(36); }
  api.newId = newId;

  /* ---------------- favourites, recently used ---------------- */
  var K_FAV = PREFIX + 'fav', K_REC = PREFIX + 'recent';
  api.favs = function () { var a = read(K_FAV, []); return Array.isArray(a) ? a : []; };
  api.recent = function () { var a = read(K_REC, []); return Array.isArray(a) ? a : []; };
  api.isFav = function (id) { return api.favs().indexOf(id) >= 0; };
  api.toggleFav = function (id) {
    var a = api.favs().filter(function (x) { return x !== id; });
    var on = a.length === api.favs().length;
    if (on) a.unshift(id);
    write(K_FAV, a.slice(0, 50));
    d.dispatchEvent(new CustomEvent('lmt-fav', { detail: { id: id, on: on } }));
    return on;
  };
  function markRecent(id) { write(K_REC, [id].concat(api.recent().filter(function (x) { return x !== id; })).slice(0, 6)); }

  /* ---------------- screen, sound, files ---------------- */
  var fsEl = function () { return d.fullscreenElement || d.webkitFullscreenElement || null; };
  api.isFull = function (el) { return fsEl() === el || el.classList.contains('tl-max'); };
  function fake(el, on) {
    el.classList.toggle('tl-max', on);
    d.documentElement.classList.toggle('tl-maxed', on);
    d.dispatchEvent(new CustomEvent('lmt-full'));
  }
  /** Full screen for one element; where the browser has no fullscreen (iPhone), the element fills the window instead. */
  api.fullscreen = function (el, on) {
    var want = on == null ? !api.isFull(el) : on;
    if (want) {
      var req = el.requestFullscreen || el.webkitRequestFullscreen;
      if (req) {
        try { var p = req.call(el); if (p && p.catch) p.catch(function () { fake(el, true); }); return; } catch (e) {}
      }
      fake(el, true);
    } else {
      if (fsEl()) { var ex = d.exitFullscreen || d.webkitExitFullscreen; try { ex.call(d); } catch (e) {} }
      if (el.classList.contains('tl-max')) fake(el, false);
    }
  };
  api.onFull = function (cb) { ['fullscreenchange', 'webkitfullscreenchange', 'lmt-full'].forEach(function (ev) { d.addEventListener(ev, cb); }); };
  d.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') $$('.tl-max').forEach(function (el) { fake(el, false); });
  });
  /** A button that switches full screen for el and keeps its label right. */
  api.fullButton = function (btn, el) {
    var sync = function () { var on = api.isFull(el); btn.textContent = (on ? '🗗 ' : '⛶ ') + (on ? C.fullOff : C.fullOn); btn.setAttribute('aria-pressed', on ? 'true' : 'false'); };
    btn.addEventListener('click', function () { api.fullscreen(el); });
    api.onFull(sync); sync();
  };

  var actx = null;
  /** Call from a click (browsers only allow sound after the user has touched the page). */
  api.unlockSound = function () {
    if (!actx) { var A = root.AudioContext || root.webkitAudioContext; if (!A) return null; try { actx = new A(); } catch (e) { return null; } }
    if (actx.state === 'suspended' && actx.resume) actx.resume();
    return actx;
  };
  /** kind: 'end' (four rising notes, twice), 'pick' (two notes), 'tick' (one short note) */
  api.chime = function (kind) {
    var c = api.unlockSound();
    if (!c) return;
    var notes = kind === 'tick' ? [1320] : kind === 'pick' ? [660, 990] : [784, 988, 1175, 1568, 0, 784, 988, 1175, 1568];
    var t0 = c.currentTime + 0.03, step = kind === 'tick' ? 0.1 : 0.17;
    notes.forEach(function (f, i) {
      if (!f) return;
      var o = c.createOscillator(), g = c.createGain(), t = t0 + i * step;
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(kind === 'tick' ? 0.15 : 0.32, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + (kind === 'tick' ? 0.12 : 0.55));
      o.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t + 0.6);
    });
  };
  api.copyText = function (s) {
    if (root.navigator.clipboard && root.isSecureContext) return root.navigator.clipboard.writeText(s);
    return new Promise(function (res, rej) {
      var ta = d.createElement('textarea');
      ta.value = s; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      d.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = d.execCommand('copy'); } catch (e) {}
      d.body.removeChild(ta);
      if (ok) res(); else rej(new Error('copy'));
    });
  };
  api.download = function (name, text, type) {
    var b = new Blob([text], { type: type || 'text/plain;charset=utf-8' }), u = URL.createObjectURL(b), a = d.createElement('a');
    a.href = u; a.download = name; d.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(u); a.remove(); }, 1000);
  };
  api.csvDownload = function (name, rows) { api.download(name, '﻿' + toCSV(rows), 'text/csv;charset=utf-8'); };   // BOM: Excel opens Vietnamese letters correctly
  api.readFile = function (file) {
    return new Promise(function (res, rej) {
      if (!file || file.size > 1024 * 1024) { rej(new Error('size')); return; }
      var r = new FileReader();
      r.onload = function () { res(String(r.result || '')); };
      r.onerror = function () { rej(r.error); };
      r.readAsText(file, 'utf-8');
    });
  };
  /** Short spoken message for screen readers (one shared polite live region). */
  api.say = function (msg) {
    var r = $('#tl-say');
    if (!r) { r = d.createElement('p'); r.id = 'tl-say'; r.className = 'sr'; r.setAttribute('aria-live', 'polite'); d.body.appendChild(r); }
    r.textContent = '';
    setTimeout(function () { r.textContent = msg; }, 60);
  };
  /** Key shortcuts for a tool, ignored while typing, with Ctrl/Alt/Cmd, or (for Space/Enter) on a button. map: { ' ': fn, r: fn } */
  api.keys = function (map) {
    d.addEventListener('keydown', function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return;
      var t = e.target, tag = t && t.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (t && t.isContentEditable)) return;
      if ((e.key === ' ' || e.key === 'Enter') && (tag === 'BUTTON' || tag === 'A' || tag === 'SUMMARY')) return;
      var fn = map[e.key.length === 1 ? e.key.toLowerCase() : e.key];
      if (fn) { e.preventDefault(); fn(e); }
    });
  };
  /** Two-press confirmation on a button, without a browser dialog. */
  api.confirmButton = function (btn, sureText, run) {
    var label = btn.textContent, timer = 0;
    btn.addEventListener('click', function () {
      if (btn.getAttribute('data-sure') === '1') { clearTimeout(timer); btn.removeAttribute('data-sure'); btn.textContent = label; run(); return; }
      btn.setAttribute('data-sure', '1'); btn.textContent = sureText;
      timer = setTimeout(function () { btn.removeAttribute('data-sure'); btn.textContent = label; }, 4000);
    });
  };

  /* ---------------- class-list editor (name picker, group maker) ---------------- */
  /** Draws the class chooser and the list editor into box. onChange(cls) runs when the class or its names change. */
  api.classEditor = function (box, onChange) {
    box.innerHTML = '<div class="tl-row tl-clsbar"><label>' + esc(C.cls) + ' <select class="tl-cls-sel"></select></label>' +
      '<label class="grow">' + esc(C.clsName) + ' <input type="text" class="tl-cls-name" maxlength="40"></label>' +
      '<span class="tl-clsbtns"><button type="button" class="btn btn-outline btn-sm tl-cls-new">' + esc(C.newCls) + '</button> <button type="button" class="btn btn-outline btn-sm tl-cls-del">' + esc(C.delCls) + '</button></span></div>' +
      '<details class="tl-cls-edit"><summary class="tl-cls-sum"></summary><p class="tl-help">' + esc(C.listHelp) + '</p>' +
      '<label class="sr" for="tl-names">' + esc(C.listHelp) + '</label><textarea id="tl-names" class="tl-names" rows="9" spellcheck="false"></textarea>' +
      '<p class="tl-row tl-clsio"><label class="btn btn-outline btn-sm tl-file">' + esc(C.importCsv) + '<input type="file" accept=".csv,.txt,text/csv,text/plain" hidden></label> ' +
      '<button type="button" class="btn btn-outline btn-sm tl-cls-csv">' + esc(C.exportCsv) + '</button> <span class="tl-msg" aria-live="polite"></span></p></details>';
    var sel = $('.tl-cls-sel', box), nameIn = $('.tl-cls-name', box), ta = $('.tl-names', box), sum = $('.tl-cls-sum', box), msg = $('.tl-msg', box), det = $('.tl-cls-edit', box);
    var cur = classes.current(), saveT = 0;
    function fill() {
      var all = classes.all();
      sel.innerHTML = all.map(function (c) { return '<option value="' + esc(c.id) + '"' + (c.id === cur.id ? ' selected' : '') + '>' + esc(c.name) + ' (' + c.names.length + ')</option>'; }).join('');
      nameIn.value = cur.name;
      ta.value = cur.names.join('\n');
      sum.textContent = C.listH(cur.names.length);
      if (!cur.names.length) det.open = true;
    }
    function changed() { sum.textContent = C.listH(cur.names.length); var o = sel.options[sel.selectedIndex]; if (o) o.textContent = cur.name + ' (' + cur.names.length + ')'; onChange(cur); }
    function flash(t) { msg.textContent = t; clearTimeout(flash.t); flash.t = setTimeout(function () { msg.textContent = ''; }, 2500); }
    sel.addEventListener('change', function () { cur = classes.get(sel.value) || classes.current(); classes.select(cur.id); fill(); onChange(cur); });
    nameIn.addEventListener('input', function () { cur.name = nameIn.value.trim().slice(0, 40) || C.myClass; classes.put(cur); var o = sel.options[sel.selectedIndex]; if (o) o.textContent = cur.name + ' (' + cur.names.length + ')'; });
    ta.addEventListener('input', function () {
      clearTimeout(saveT);
      saveT = setTimeout(function () {
        var raw = ta.value.split(/\r?\n/).length > MAX_NAMES;
        cur.names = parseNames(ta.value);
        classes.put(cur); changed(); flash(raw ? C.tooMany : C.saved);
      }, 500);
    });
    ta.addEventListener('blur', function () { if (parseNames(ta.value).join('\n') !== ta.value.trim()) ta.value = cur.names.join('\n'); });   // tidy what was pasted
    $('.tl-cls-new', box).addEventListener('click', function () {
      cur = classes.put({ id: newId(), name: C.classN(classes.all().length + 1), names: [] });
      classes.select(cur.id); fill(); onChange(cur); det.open = true; nameIn.select(); nameIn.focus();
    });
    api.confirmButton($('.tl-cls-del', box), C.delSure, function () {
      classes.remove(cur.id); cur = classes.current(); fill(); onChange(cur);
    });
    $('.tl-file input', box).addEventListener('change', function (e) {
      var f = e.target.files && e.target.files[0];
      e.target.value = '';
      api.readFile(f).then(function (text) {
        var names = /\.csv$/i.test(f.name) || /[,;]/.test(text.split('\n')[0] || '') ? namesFromCSV(text) : parseNames(text);
        if (!names.length) { flash(C.noNames); return; }
        cur.names = names; classes.put(cur); fill(); changed(); flash(C.imported(names.length));
      }, function () { flash(C.badFile); });
    });
    $('.tl-cls-csv', box).addEventListener('click', function () {
      api.csvDownload((cur.name || 'class').replace(/[\\\/:*?"<>|]+/g, '-') + '.csv', [[C.csvHead]].concat(cur.names.map(function (n) { return [n]; })));
    });
    fill();
    return { current: function () { return cur; }, open: function () { det.open = true; ta.focus(); } };
  };

  /* ---------------- page wiring ---------------- */
  var tools = {};
  /** A tool registers itself: LMT.tool('classroom-timer', function (app, ctx) { … }). The panel shows once it is drawn. */
  api.tool = function (id, init) { tools[id] = init; start(); };
  function start() {
    var app = $('#tl-app');
    if (!app || app.getAttribute('data-ready')) return;
    var id = app.getAttribute('data-tool'), init = tools[id];
    if (!init) return;
    app.setAttribute('data-ready', '1');
    try { init(app, { vi: vi, store: api.store(id), C: C }); app.hidden = false; }
    catch (e) { if (root.console) console.error(e); }
  }
  function syncStars() {
    var favs = api.favs();
    $$('.tl-card').forEach(function (card) {
      var b = $('.tl-star', card), on = favs.indexOf(card.getAttribute('data-id')) >= 0;
      if (!b) return;
      b.hidden = false; b.textContent = on ? '★' : '☆'; b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    var fb = $('#tl-fav'), app = $('#tl-app');
    if (fb && app) {
      var on2 = api.isFav(app.getAttribute('data-tool'));
      fb.hidden = false; fb.setAttribute('aria-pressed', on2 ? 'true' : 'false');
      fb.textContent = (on2 ? '★ ' : '☆ ') + fb.getAttribute(on2 ? 'data-on' : 'data-off');
    }
  }
  api.syncStars = syncStars;
  d.addEventListener('click', function (e) {
    var star = e.target.closest && e.target.closest('.tl-star');
    if (star) { var card = star.closest('.tl-card'); if (card) api.toggleFav(card.getAttribute('data-id')); return; }
    if (e.target.closest && e.target.closest('#tl-fav')) { var app = $('#tl-app'); if (app) api.toggleFav(app.getAttribute('data-tool')); }
  });
  d.addEventListener('lmt-fav', syncStars);
  function wire() {
    var app = $('#tl-app');
    if (app) markRecent(app.getAttribute('data-tool'));
    syncStars();
    $$('.tl-clear').forEach(function (b) {
      var scope = b.getAttribute('data-scope') || '';
      b.hidden = false;
      api.confirmButton(b, scope && SHARED[scope] ? C.sureCls : C.sure, function () {
        api.clearSaved(scope); b.disabled = true; b.textContent = C.cleared;
        setTimeout(function () { root.location.reload(); }, 700);
      });
    });
    start();
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', wire); else wire();
  return api;
});
