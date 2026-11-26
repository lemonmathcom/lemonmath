/* Lemonmath · LemonMath Tools · Random Group Maker.
 *
 * LMT.makeGroups shuffles fairly (crypto random) and deals the class into groups whose sizes differ by at most 1,
 * so every student is in exactly one group. Moving a student keeps that true (move() below, unit-tested).
 * Students move by drag and drop, or by tapping a name and then "Move here" (phones, keyboard, screen readers).
 * The last result is saved per class on this device only.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) { module.exports = api; return; }
  if (root.LMT) groupsUI(root, api);
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  /** move student mi of group gi to group to (returns false when nothing could move) */
  function move(groups, gi, mi, to) {
    if (gi === to || !groups[gi] || !groups[to] || mi < 0 || mi >= groups[gi].members.length) return false;
    groups[to].members.push(groups[gi].members.splice(mi, 1)[0]);
    return true;
  }
  /** every name of the list in exactly one group? (the same multiset of names) */
  function intact(groups, names) {
    var a = [].concat.apply([], groups.map(function (g) { return g.members; })).slice().sort(), b = names.slice().sort();
    return a.length === b.length && a.every(function (x, i) { return x === b[i]; });
  }
  return { move: move, intact: intact };
});

function groupsUI(root, G) {
  'use strict';
  var L = root.LMT;
  L.usesClasses('random-group-maker');
  L.tool('random-group-maker', function (app, ctx) {
    var S = ctx.vi ? {
      classH: 'Danh sách lớp', how: 'Cách chia', byG: 'Theo số nhóm', byS: 'Theo số em mỗi nhóm', nG: 'Số nhóm', nS: 'Số em mỗi nhóm (tối đa)',
      make: '🎲 Chia nhóm', again: '🔀 Chia lại', copy: '📋 Chép danh sách nhóm', csv: '📤 Xuất CSV', print: '🖨 In', groupN: function (i) { return 'Nhóm ' + i; },
      plan: function (n, sizes) { return n + ' em → ' + sum(sizes); }, members: function (n) { return n + ' em'; },
      empty: 'Thêm tên học sinh vào danh sách ở trên để chia nhóm.', moveHere: '→ Chuyển vào đây', moveHelp: 'Muốn đổi chỗ: kéo một tên sang nhóm khác, hoặc chạm vào tên rồi chạm “Chuyển vào đây”.',
      changed: 'Danh sách lớp đã thay đổi sau lần chia này. Bấm “Chia lại” để chia theo danh sách mới.', groupName: 'Tên nhóm', csvG: 'Nhóm', csvN: 'Họ và tên', moved: function (n, g) { return 'Đã chuyển ' + n + ' sang ' + g; },
      bad: function (max) { return 'Hãy nhập một số từ 1 đến ' + max + '.'; }, keys: 'Phím tắt: <kbd>G</kbd> chia lại · <kbd>F</kbd> toàn màn hình · <kbd>Esc</kbd> bỏ chọn'
    } : {
      classH: 'Class list', how: 'How to split', byG: 'By number of groups', byS: 'By students per group', nG: 'Number of groups', nS: 'Students per group (at most)',
      make: '🎲 Make groups', again: '🔀 Shuffle again', copy: '📋 Copy the groups', csv: '📤 Export CSV', print: '🖨 Print', groupN: function (i) { return 'Group ' + i; },
      plan: function (n, sizes) { return n + ' students → ' + sum(sizes); }, members: function (n) { return n + (n === 1 ? ' student' : ' students'); },
      empty: 'Add your students’ names to the list above to make groups.', moveHere: '→ Move here', moveHelp: 'To swap someone: drag a name to another group, or tap the name and then “Move here”.',
      changed: 'The class list has changed since these groups were made. Press “Shuffle again” to use the new list.', groupName: 'Group name', csvG: 'Group', csvN: 'Name', moved: function (n, g) { return n + ' moved to ' + g; },
      bad: function (max) { return 'Enter a number from 1 to ' + max + '.'; }, keys: 'Shortcuts: <kbd>G</kbd> shuffle again · <kbd>F</kbd> full screen · <kbd>Esc</kbd> deselect'
    };
    function sum(sizes) {   // "6 nhóm, mỗi nhóm 5 em" / "4 groups of 5 and 2 groups of 4"
      var u = sizes.filter(function (x, i) { return sizes.indexOf(x) === i; }).sort(function (a, b) { return b - a; });
      var cnt = function (s) { return sizes.filter(function (x) { return x === s; }).length; };
      if (ctx.vi) return u.length === 1 ? sizes.length + ' nhóm, mỗi nhóm ' + u[0] + ' em' : u.map(function (s) { return cnt(s) + ' nhóm ' + s + ' em'; }).join(', ');
      return u.map(function (s) { var c = cnt(s); return c + (c === 1 ? ' group of ' : ' groups of ') + s; }).join(' and ');
    }
    var COLORS = ['#FFD43B', '#FB923C', '#4ADE80', '#818CF8', '#F472B6', '#22D3EE', '#F87171', '#A78BFA', '#A3E635', '#FBBF24', '#2DD4BF', '#E879F9'];
    var esc = L.esc, $ = function (s) { return L.$(s, app); }, store = ctx.store;

    app.innerHTML =
      '<div class="tl-panel"><h2>👩‍🏫 ' + esc(S.classH) + '</h2><div class="gm-cls"></div></div>' +
      '<div class="tl-panel gm-set" style="margin-top:12px">' +
      '  <div class="tl-row"><span class="tl-help">' + esc(S.how) + '</span><span class="tl-seg" role="group" aria-label="' + esc(S.how) + '"><button type="button" data-by="groups">' + esc(S.byG) + '</button><button type="button" data-by="size">' + esc(S.byS) + '</button></span></div>' +
      '  <form class="tl-row gm-form" novalidate><label><span class="gm-nlab"></span> <input type="number" class="gm-n" min="1" step="1" inputmode="numeric" required></label>' +
      '    <button type="submit" class="btn gm-make">' + esc(S.make) + '</button><span class="tl-help gm-plan" aria-live="polite"></span></form>' +
      '  <p class="tl-kbd">' + S.keys + '</p>' +
      '</div>' +
      '<div class="tl-stage gm-out"><div class="tl-stage-bar"><button type="button" class="btn btn-outline btn-sm gm-full"></button></div>' +
      '  <p class="gm-note" hidden></p><div class="gm-grid"></div>' +
      '  <p class="tl-help gm-movehelp" hidden>' + esc(S.moveHelp) + '</p>' +
      '  <div class="gm-acts" hidden><button type="button" class="btn btn-outline btn-sm gm-again">' + esc(S.again) + '</button><button type="button" class="btn btn-outline btn-sm gm-copy">' + esc(S.copy) + '</button>' +
      '    <button type="button" class="btn btn-outline btn-sm gm-csv">' + esc(S.csv) + '</button><button type="button" class="btn btn-outline btn-sm gm-print">' + esc(S.print) + '</button><span class="tl-msg gm-msg" aria-live="polite"></span></div>' +
      '</div>';

    var grid = $('.gm-grid'), nIn = $('.gm-n'), plan = $('.gm-plan'), note = $('.gm-note'), out = $('.gm-out'), msg = $('.gm-msg');
    var cls = null, res = null, sel = null;   // sel = { g, m } while a student is picked up to move
    var opt = { by: store.get('by', 'groups') === 'size' ? 'size' : 'groups', n: store.get('n', 4) };
    nIn.value = opt.n;

    function names() { return cls ? cls.names : []; }
    function sig(list) { return list.join('\n'); }
    function maxN() { return Math.max(1, names().length); }
    function sizes() { var n = Math.floor(+nIn.value || 0); return n >= 1 && n <= maxN() ? L.groupSizes(names().length, opt.by === 'groups' ? { groups: n } : { size: n }) : []; }
    function drawSet() {
      L.$$('[data-by]', app).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-by') === opt.by ? 'true' : 'false'); });
      $('.gm-nlab').textContent = opt.by === 'groups' ? S.nG : S.nS;
      nIn.max = maxN();
      var n = Math.floor(+nIn.value || 0), all = names().length;
      if (!all) plan.textContent = S.empty;
      else if (!(n >= 1 && n <= all)) plan.textContent = S.bad(all);
      else plan.textContent = S.plan(all, sizes());
      $('.gm-make').disabled = !all || !(n >= 1 && n <= all);
    }
    function flash(t) { msg.textContent = t; clearTimeout(flash.t); flash.t = setTimeout(function () { msg.textContent = ''; }, 2500); }
    function save() { if (cls) store.set('res:' + cls.id, res); }
    function make() {
      var sz = sizes();
      if (!sz.length) { drawSet(); return; }
      var old = res && res.groups ? res.groups.map(function (g) { return g.name; }) : [];
      var parts = L.makeGroups(names(), opt.by === 'groups' ? { groups: Math.floor(+nIn.value) } : { size: Math.floor(+nIn.value) });
      res = { sig: sig(names()), at: Date.now(), groups: parts.map(function (m, i) { return { name: old[i] || S.groupN(i + 1), members: m }; }) };
      sel = null; save(); drawOut();
      L.say(S.plan(names().length, sz));
    }
    function drawOut() {
      var has = !!(res && res.groups && res.groups.length);
      $('.gm-acts').hidden = !has; $('.gm-movehelp').hidden = !has;
      note.hidden = !has || res.sig === sig(names()); note.textContent = S.changed;
      if (!has) { grid.innerHTML = ''; return; }
      grid.innerHTML = res.groups.map(function (g, gi) {
        return '<section class="gm-group" data-g="' + gi + '" style="--gc:' + COLORS[gi % COLORS.length] + '">' +
          '<div class="gm-gh"><label class="sr" for="gm-g' + gi + '">' + esc(S.groupName) + '</label><input id="gm-g' + gi + '" class="gm-gname" type="text" maxlength="40" value="' + esc(g.name) + '"><span class="gm-count">' + esc(S.members(g.members.length)) + '</span></div>' +
          '<ul class="gm-list">' + g.members.map(function (m, mi) {
            var on = sel && sel.g === gi && sel.m === mi;
            return '<li><button type="button" class="gm-m" draggable="true" data-g="' + gi + '" data-m="' + mi + '" aria-pressed="' + (on ? 'true' : 'false') + '">' + esc(m) + '</button></li>';
          }).join('') + '</ul>' +
          (sel && sel.g !== gi ? '<button type="button" class="gm-here" data-to="' + gi + '">' + esc(S.moveHere) + '</button>' : '') +
          '</section>';
      }).join('');
    }
    function doMove(gi, mi, to) {
      var who = res.groups[gi] && res.groups[gi].members[mi];
      if (!G.move(res.groups, gi, mi, to)) return;
      sel = null; save(); drawOut();
      L.say(S.moved(who, res.groups[to].name));
      var b = L.$$('.gm-group[data-g="' + to + '"] .gm-m', app).pop(); if (b) b.focus();
    }
    function asText() {
      return res.groups.map(function (g) { return g.name + ' (' + S.members(g.members.length) + '): ' + g.members.join(', '); }).join('\n');
    }

    /* events */
    L.$$('[data-by]', app).forEach(function (b) {
      b.addEventListener('click', function () { opt.by = b.getAttribute('data-by'); store.set('by', opt.by); drawSet(); });
    });
    nIn.addEventListener('input', function () { opt.n = Math.floor(+nIn.value || 0); if (opt.n >= 1) store.set('n', opt.n); drawSet(); });
    $('.gm-form').addEventListener('submit', function (e) { e.preventDefault(); make(); });
    $('.gm-again').addEventListener('click', make);
    $('.gm-copy').addEventListener('click', function () { L.copyText(asText()).then(function () { flash(ctx.C.copied); }, function () { flash(ctx.C.copyFail); }); });
    $('.gm-csv').addEventListener('click', function () {
      var rows = [[S.csvG, S.csvN]];
      res.groups.forEach(function (g) { g.members.forEach(function (m) { rows.push([g.name, m]); }); });
      L.csvDownload(((cls && cls.name) || 'groups').replace(/[\\\/:*?"<>|]+/g, '-') + '.csv', rows);
    });
    $('.gm-print').addEventListener('click', function () { if (root.lmPrint) root.lmPrint(); else root.print(); });
    grid.addEventListener('input', function (e) {
      var inp = e.target.closest('.gm-gname');
      if (!inp) return;
      var gi = +inp.closest('.gm-group').getAttribute('data-g');
      res.groups[gi].name = inp.value.trim().slice(0, 40) || S.groupN(gi + 1);
      save();
    });
    grid.addEventListener('click', function (e) {
      var m = e.target.closest('.gm-m'), here = e.target.closest('.gm-here');
      if (here && sel) { doMove(sel.g, sel.m, +here.getAttribute('data-to')); return; }
      if (!m) return;
      var gi = +m.getAttribute('data-g'), mi = +m.getAttribute('data-m');
      sel = sel && sel.g === gi && sel.m === mi ? null : { g: gi, m: mi };
      drawOut();
      var again = L.$('.gm-m[data-g="' + gi + '"][data-m="' + mi + '"]', app); if (again) again.focus();
    });
    /* drag and drop (mouse, trackpad) */
    var drag = null;
    grid.addEventListener('dragstart', function (e) {
      var m = e.target.closest && e.target.closest('.gm-m');
      if (!m) return;
      drag = { g: +m.getAttribute('data-g'), m: +m.getAttribute('data-m') };
      m.classList.add('dragging');
      try { e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', m.textContent); } catch (x) {}
    });
    grid.addEventListener('dragend', function () { drag = null; L.$$('.dragging, .drop', app).forEach(function (el) { el.classList.remove('dragging', 'drop'); }); });
    grid.addEventListener('dragover', function (e) {
      var g = drag && e.target.closest('.gm-group');
      if (!g) return;
      e.preventDefault();
      L.$$('.gm-group.drop', app).forEach(function (x) { if (x !== g) x.classList.remove('drop'); });
      g.classList.add('drop');
    });
    grid.addEventListener('drop', function (e) {
      var g = drag && e.target.closest('.gm-group');
      if (!g) return;
      e.preventDefault();
      var d = drag; drag = null;
      doMove(d.g, d.m, +g.getAttribute('data-g'));
    });
    L.fullButton($('.gm-full'), out);
    L.keys({ g: function () { if (res) make(); }, f: function () { L.fullscreen(out); }, Escape: function () { if (sel) { sel = null; drawOut(); } } });

    function loadClass(c) {
      cls = c;
      var r = store.get('res:' + c.id, null);
      res = r && Array.isArray(r.groups) ? r : null;
      sel = null; drawSet(); drawOut();
    }
    var editor = L.classEditor($('.gm-cls'), loadClass);
    loadClass(editor.current());
  });
}
