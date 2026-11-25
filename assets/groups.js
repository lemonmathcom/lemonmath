/* Lemonmath · Study groups (Nhóm học tập).
 * A few friends, a family or a class: one weekly goal for the whole group, who has practised this week, today's
 * challenge scores, cheers (four fixed emojis) and a nudge, and an arena room opened for the group.
 * No accounts and no chat: a group is opened by its 8-character code, each member has a nickname and an avatar.
 * The page talks to the classroom API (api/src/index.js, /v1/groups/*) through window.lmGroups (assets/site.js), which
 * also sends this device's weekly summary after every test and arena game.
 */
(function () {
  'use strict';
  var d = document, vi = d.documentElement.lang === 'vi', app = d.getElementById('gr-app'), L = window.lmGroups;
  if (!app || !L) return;
  var ARENA = app.getAttribute('data-arena') || '', PRIV = app.getAttribute('data-privacy') || '#', JOURNEY = app.getAttribute('data-journey') || '';
  var AVATARS = ['🍋', '🦊', '🐼', '🐯', '🐸', '🐧', '🦉', '🐳', '🦄', '🐝', '🐢', '🐙', '🌻', '🚀', '⭐', '🎈'], CHEERS = ['👏', '💪', '🌟', '🍋'], MAXG = 5;
  var DECK = vi
    ? { add20: 'Cộng, trừ trong phạm vi 20', add100: 'Cộng, trừ trong phạm vi 100', times: 'Bảng nhân, bảng chia', mul: 'Nhân, chia với số có một chữ số', frac: 'Phân số', dec: 'Số thập phân, phần trăm', int: 'Số nguyên', pow: 'Luỹ thừa', lin: 'Tìm x', alg: 'Hằng đẳng thức', sqrt: 'Căn bậc hai', trig: 'Lượng giác', exp: 'Lôgarit', deriv: 'Đạo hàm' }
    : { add20: 'Within 20', add100: 'Within 100', times: 'Times tables', mul: 'Multiply and divide', frac: 'Fractions', dec: 'Decimals and percentages', int: 'Integers', pow: 'Powers', lin: 'Solve for x', alg: 'Special products', sqrt: 'Square roots', trig: 'Trig values', exp: 'Logarithms', deriv: 'Derivatives' };
  var deckName = function (k) { var m = /^k(\d+)$/.exec(k || ''); return m ? (vi ? 'Kiến thức lớp ' : 'Grade ') + m[1] + (vi ? '' : ' knowledge') : DECK[k] || k || ''; };
  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k, def) { try { var x = JSON.parse(lsGet(k) || 'null'); return x == null ? def : x; } catch (e) { return def; } }
  var normCode = function (s) { return String(s || '').toUpperCase().replace(/[^0-9A-Z]/g, ''); };
  var showCode = function (s) { s = normCode(s); return s.slice(0, 4) + '-' + s.slice(4, 8); };

  var T = vi ? {
    introH: 'Học cùng nhau, ai cũng tiến bộ', intro: ['Cả nhóm cùng một mục tiêu mỗi tuần: mỗi bài test, mỗi trận ở Đấu trường của từng bạn đều được cộng vào.', 'Thấy ai đã học hôm nay, ai đang giữ chuỗi ngày; cổ vũ nhau bằng 👏 💪 🌟 🍋, nhắc nhẹ bạn chưa học.', 'Điểm Thử thách hôm nay của cả nhóm, và phòng đấu riêng chỉ cả nhóm biết mã.'],
    safe: 'Không có ô chat, không có bảng xếp hạng công khai. Chỉ người có mã mới vào được nhóm.',
    newH: 'Lập nhóm mới', joinH: 'Vào nhóm bằng mã', name: 'Tên nhóm', namePh: 'Ví dụ: Tổ 2 – 8A, Nhà mình, Hội Toán 6', nick: 'Biệt danh của bạn', nickPh: 'Ví dụ: An, Mẹ, Thầy Hùng', nickHint: 'Cả nhóm sẽ thấy tên này. Đừng ghi họ tên đầy đủ.',
    av: 'Hình đại diện', consent: 'Em và bố mẹ (người giám hộ) đều đồng ý cho em tham gia nhóm học tập. Người lớn tự tham gia thì đánh dấu ô này là được. <a href="' + PRIV + '" target="_blank" rel="noopener">Lemonmath lưu những gì?</a>',
    create: 'Lập nhóm', code: 'Mã nhóm', codePh: 'XXXX-XXXX', join: 'Vào nhóm', needName: 'Bạn đặt tên cho nhóm nhé.', needNick: 'Bạn đặt một biệt danh nhé.', needConsent: 'Bạn đánh dấu ô đồng ý trước nhé.', needCode: 'Mã nhóm có 8 kí tự, ví dụ K7QM-2XPA.',
    invited: function (n, k) { return 'Bạn được mời vào nhóm “' + n + '” (' + k + ' thành viên).'; }, already: 'Máy này đã ở trong nhóm này rồi.', tooMany: 'Một máy tham gia tối đa ' + MAXG + ' nhóm. Rời bớt một nhóm trước nhé.',
    mine: 'Nhóm của bạn', addOther: '+ Lập hoặc vào nhóm khác', members: function (n, m) { return n + '/' + m + ' thành viên'; },
    share: 'Mời bạn vào nhóm', shareText: function (n, c) { return 'Vào nhóm học toán “' + n + '” với mình trên Lemonmath nhé! Mã nhóm: ' + c; }, copyLink: 'Chép link mời', copied: 'Đã chép ✓', copyCode: 'Chép mã',
    goalH: 'Mục tiêu chung tuần này', goalP: function (a, b) { return 'Cả nhóm đã làm ' + a + '/' + b + ' bài luyện'; }, goalMet: '🎉 Cả nhóm đã đạt mục tiêu tuần này! Lemon tự hào về mọi người lắm.',
    goalLeft: function (k) { return 'Còn ' + k + ' bài nữa thôi. Mỗi người một bài là đủ!'; }, goalHow: 'Một bài luyện là một lần nộp bài test, đề thi trên Lemonmath, hoặc một trận ở Đấu trường.', lastWk: function (n) { return 'Tuần trước cả nhóm làm ' + n + ' bài.'; },
    roomOpen: function (c, k) { return '🏟️ Phòng đấu của nhóm đang mở: ' + c + (k ? ' · ' + k : ''); }, roomGo: 'Vào phòng', roomNew: '🏟️ Mở phòng đấu cho nhóm',
    dcH: 'Thử thách hôm nay', dcNone: 'Chưa ai làm thử thách hôm nay. Bạn mở màn nhé!', dcGo: '📅 Làm thử thách hôm nay', pts: 'điểm',
    memH: 'Các thành viên', you: 'bạn', lead: 'trưởng nhóm', week: 'tuần này', bai: 'bài', streak: function (n) { return '🔥 ' + n + ' ngày'; }, todayOk: '✓ đã học hôm nay', todayNo: 'chưa học hôm nay',
    days: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'], cheer: 'Cổ vũ', nudge: '🔔 Nhắc nhẹ', sentC: 'đã cổ vũ', sentN: 'đã nhắc',
    inboxH: 'Bạn nhận được', cheered: function (n, e) { return n + ' cổ vũ bạn ' + e; }, nudged: function (n) { return n + ' nhắc bạn luyện hôm nay 🔔'; }, someone: 'Một bạn',
    meH: 'Tên và hình của bạn trong nhóm', save: 'Lưu', leave: 'Rời nhóm', sureLeave: 'Rời nhóm này? Số liệu của bạn trong nhóm sẽ bị xoá.',
    leadH: 'Dành cho trưởng nhóm', rename: 'Đổi tên nhóm', goalSet: 'Mục tiêu mỗi tuần (số bài của cả nhóm)', goalAuto: 'Tự động: 3 bài × số thành viên', remove: 'Mời ra khỏi nhóm', pickM: 'Chọn thành viên', sureRemove: function (n) { return 'Mời ' + n + ' ra khỏi nhóm?'; },
    del: 'Xoá nhóm', sureDel: 'Xoá hẳn nhóm này cho mọi người? Không lấy lại được.',
    privacy: 'Nhóm chỉ lưu tên nhóm, biệt danh, hình đại diện, số bài mỗi tuần, các ngày đã học, chuỗi ngày, điểm thử thách hôm nay và lượt cổ vũ. Thành viên 60 ngày không mở trang sẽ tự rời nhóm; nhóm 90 ngày không hoạt động sẽ tự xoá.',
    loading: 'Đang tải…', offline: 'Đang xem bản đã lưu trên máy (chưa kết nối được).', updated: function (t) { return 'Cập nhật ' + t; },
    gone: { no_group: 'Nhóm này không còn nữa (đã bị xoá).', not_member: 'Bạn không còn ở trong nhóm này.', gone: 'Nhóm này không còn trên máy.' },
    errs: { bad_code: 'Mã nhóm chưa đúng. Kiểm tra lại đủ 8 kí tự.', no_group: 'Không tìm thấy nhóm với mã này.', full: 'Nhóm đã đủ 30 người.', too_many: 'Mạng này đã thử quá nhiều lần hôm nay. Bạn thử lại ngày mai nhé.', consent: 'Bạn đánh dấu ô đồng ý trước nhé.', bad_nick: 'Bạn đặt một biệt danh nhé.', bad_name: 'Bạn đặt tên cho nhóm nhé.', already: 'Hôm nay bạn đã gửi rồi, mai gửi tiếp nhé.', net: 'Chưa kết nối được. Kiểm tra mạng rồi thử lại.', server: 'Máy chủ đang bận, bạn thử lại sau nhé.' },
    noApi: 'Nhóm học tập cần kết nối với máy chủ và chưa được bật trên trang này.', journey: '📈 Hành trình học của bạn'
  } : {
    introH: 'Learn together, everyone gets better', intro: ['One goal for the whole group each week: every test and every arena game of each member counts.', 'See who has practised today and who is keeping a streak; cheer each other with 👏 💪 🌟 🍋 and nudge a friend who has not started yet.', 'Today’s challenge scores for the group, and a private arena room only the group knows the code of.'],
    safe: 'No chat and no public leaderboard. Only people with the code can join.',
    newH: 'Start a group', joinH: 'Join with a code', name: 'Group name', namePh: 'e.g. Table 2 – 8A, Our family, Maths club', nick: 'Your nickname', nickPh: 'e.g. Sam, Mum, Mr Hung', nickHint: 'The whole group sees this name. Do not use your full name.',
    av: 'Picture', consent: 'My parents (or guardian) and I both agree that I join this study group. Adults joining for themselves just tick this box. <a href="' + PRIV + '" target="_blank" rel="noopener">What does Lemonmath keep?</a>',
    create: 'Start the group', code: 'Group code', codePh: 'XXXX-XXXX', join: 'Join', needName: 'Give the group a name.', needNick: 'Choose a nickname.', needConsent: 'Please tick the consent box first.', needCode: 'A group code has 8 characters, like K7QM-2XPA.',
    invited: function (n, k) { return 'You are invited to “' + n + '” (' + k + (k === 1 ? ' member' : ' members') + ').'; }, already: 'This device is already in this group.', tooMany: 'A device can be in at most ' + MAXG + ' groups. Leave one first.',
    mine: 'Your groups', addOther: '+ Start or join another group', members: function (n, m) { return n + '/' + m + ' members'; },
    share: 'Invite friends', shareText: function (n, c) { return 'Join my maths group “' + n + '” on Lemonmath! Group code: ' + c; }, copyLink: 'Copy invite link', copied: 'Copied ✓', copyCode: 'Copy code',
    goalH: 'This week’s shared goal', goalP: function (a, b) { return 'The group has done ' + a + '/' + b + ' practice sessions'; }, goalMet: '🎉 The group reached this week’s goal! Lemon is proud of every one of you.',
    goalLeft: function (k) { return k + ' to go. One each and you are there!'; }, goalHow: 'A practice session is a test or paper handed in on Lemonmath, or a game in the Arena.', lastWk: function (n) { return 'Last week the group did ' + n + '.'; },
    roomOpen: function (c, k) { return '🏟️ The group’s arena room is open: ' + c + (k ? ' · ' + k : ''); }, roomGo: 'Join the room', roomNew: '🏟️ Open an arena room for the group',
    dcH: 'Today’s challenge', dcNone: 'Nobody has done today’s challenge yet. Go first!', dcGo: '📅 Do today’s challenge', pts: 'points',
    memH: 'Members', you: 'you', lead: 'leader', week: 'this week', bai: '', streak: function (n) { return '🔥 ' + n + (n === 1 ? ' day' : ' days'); }, todayOk: '✓ practised today', todayNo: 'not yet today',
    days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], cheer: 'Cheer', nudge: '🔔 Nudge', sentC: 'cheered', sentN: 'nudged',
    inboxH: 'For you', cheered: function (n, e) { return n + ' cheered you on ' + e; }, nudged: function (n) { return n + ' nudged you to practise today 🔔'; }, someone: 'A friend',
    meH: 'Your name and picture in this group', save: 'Save', leave: 'Leave the group', sureLeave: 'Leave this group? Your numbers in it will be deleted.',
    leadH: 'For the group leader', rename: 'Rename the group', goalSet: 'Weekly goal (sessions for the whole group)', goalAuto: 'Automatic: 3 × number of members', remove: 'Remove from the group', pickM: 'Choose a member', sureRemove: function (n) { return 'Remove ' + n + ' from the group?'; },
    del: 'Delete the group', sureDel: 'Delete this group for everyone? This cannot be undone.',
    privacy: 'A group keeps only its name, nicknames, pictures, sessions per week, days practised, streaks, today’s challenge scores and cheers. Members who do not open the page for 60 days leave automatically; a group quiet for 90 days is deleted.',
    loading: 'Loading…', offline: 'Showing the copy saved on this device (could not connect).', updated: function (t) { return 'Updated ' + t; },
    gone: { no_group: 'This group no longer exists.', not_member: 'You are no longer in this group.', gone: 'This group is no longer on this device.' },
    errs: { bad_code: 'That code is not right. Check all 8 characters.', no_group: 'No group has this code.', full: 'The group is full (30 members).', too_many: 'Too many tries from this network today. Try again tomorrow.', consent: 'Please tick the consent box first.', bad_nick: 'Choose a nickname.', bad_name: 'Give the group a name.', already: 'Already sent today; send another tomorrow.', net: 'Could not connect. Check your connection and try again.', server: 'The server is busy; try again later.' },
    noApi: 'Study groups need the Lemonmath server, which is not switched on for this site.', journey: '📈 My progress'
  };
  var params = new URLSearchParams(location.search), inv = normCode(params.get('g') || '');
  var nick0 = lsGet('lm-nick') || '', av0 = AVATARS.indexOf(lsGet('lm-av')) >= 0 ? lsGet('lm-av') : AVATARS[0];
  var curCode = '', refreshT = 0, base = location.href.split('?')[0].split('#')[0];
  app.hidden = false;
  if (!L.api) { app.innerHTML = '<p class="soon-note">' + T.noApi + '</p>'; return; }

  function err(j) { return (j && T.errs[j.error]) || T.errs.server; }
  function avPicker(cur, name) {
    return '<div class="ar-avs" data-name="' + name + '">' + AVATARS.map(function (a) { return '<button type="button" class="ar-avb' + (a === cur ? ' on' : '') + '" data-av="' + a + '" aria-label="' + a + '">' + a + '</button>'; }).join('') + '</div>';
  }
  function wireAv(box) { $$('.ar-avs', box).forEach(function (w) { $$('.ar-avb', w).forEach(function (b) { b.onclick = function () { $$('.ar-avb', w).forEach(function (x) { x.classList.toggle('on', x === b); }); }; }); }); }
  function avOf(box) { var b = $('.ar-avb.on', box); return b ? b.getAttribute('data-av') : AVATARS[0]; }
  function remember(code, x, name) {
    var l = L.list().filter(function (g) { return g.code !== code; });
    l.unshift({ code: code, mid: x.mid, key: x.key, name: name }); L.keep(l); L.cache(code, x.group);
    curCode = code;
  }
  function who() {
    return '<label class="gr-l">' + T.nick + '<input class="gr-nick" maxlength="20" autocomplete="nickname" placeholder="' + esc(T.nickPh) + '" value="' + esc(nick0) + '"></label><small>' + T.nickHint + '</small>' +
      '<p class="gr-l">' + T.av + '</p>' + avPicker(av0, 'av') + '<label class="tool-check gr-ok"><input type="checkbox" class="gr-consent"> <span>' + T.consent + '</span></label>';
  }

  /* ------------------------------------------------------------------ no group open: start one, join one */
  function start(msg) {
    clearTimeout(refreshT); curCode = '';
    var mine = L.list();
    app.innerHTML = (msg ? '<p class="soon-note">' + esc(msg) + '</p>' : '') +
      (mine.length ? '<section class="tool"><h2>' + T.mine + '</h2><div class="cr-cards">' + mine.map(function (g) { var c = read('lm-group:' + g.code, null); return '<a class="cr-card" href="?g=' + normCode(g.code) + '" data-open="' + esc(g.code) + '"><b>' + esc(g.name || g.code) + '</b><span>' + esc(showCode(g.code)) + (c ? ' · ' + T.members(c.members.length, c.max) : '') + '</span></a>'; }).join('') + '</div></section>' : '') +
      (!mine.length ? '<section class="tool gr-intro"><h2>' + T.introH + '</h2><ul>' + T.intro.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul><p class="tool-mini">🔒 ' + T.safe + '</p></section>' : '') +
      '<div class="gr-two"><section class="tool"><h2>' + T.joinH + '</h2><form id="gr-join"><label class="gr-l">' + T.code + '<input id="gr-code" class="gr-code" maxlength="9" autocomplete="off" autocapitalize="characters" placeholder="' + T.codePh + '" value="' + esc(inv ? showCode(inv) : '') + '"></label>' + who() + '<button class="btn" type="submit">' + T.join + '</button><p class="tool-msg" aria-live="polite"></p></form></section>' +
      '<section class="tool"><h2>' + T.newH + '</h2><form id="gr-new"><label class="gr-l">' + T.name + '<input id="gr-name" maxlength="40" placeholder="' + esc(T.namePh) + '"></label>' + who() + '<button class="btn" type="submit">' + T.create + '</button><p class="tool-msg" aria-live="polite"></p></form></section></div>';
    wireAv(app);
    $$('[data-open]', app).forEach(function (a) { a.onclick = function (e) { e.preventDefault(); open(a.getAttribute('data-open')); }; });
    $('#gr-join').onsubmit = function (e) { e.preventDefault(); submit(this, false); };
    $('#gr-new').onsubmit = function (e) { e.preventDefault(); submit(this, true); };
  }
  function submit(form, isNew) {
    var msg = $('.tool-msg', form), nick = $('.gr-nick', form).value.replace(/\s+/g, ' ').trim().slice(0, 20), av = avOf(form), ok = $('.gr-consent', form).checked;
    var code = isNew ? '' : normCode($('#gr-code').value), name = isNew ? $('#gr-name').value.replace(/\s+/g, ' ').trim() : '';
    if (isNew && !name) { msg.textContent = T.needName; return; }
    if (!isNew && code.length !== 8) { msg.textContent = T.needCode; return; }
    if (!nick) { msg.textContent = T.needNick; return; }
    if (!ok) { msg.textContent = T.needConsent; return; }
    if (!isNew && L.list().some(function (g) { return normCode(g.code) === code; })) { open(showCode(code)); return; }
    if (L.list().length >= MAXG) { msg.textContent = T.tooMany; return; }
    msg.textContent = '…';
    var body = { nick: nick, av: av, consent: true, st: L.stats() };
    if (isNew) body.name = name; else body.code = code;
    L.call(isNew ? 'new' : 'join', body).then(function (x) {
      if (x.s !== 200) { msg.textContent = err(x.j); return; }
      nick0 = nick; av0 = av; lsSet('lm-nick', nick); lsSet('lm-av', av);
      remember(x.j.group.code, x.j, x.j.group.name);
      history.replaceState(null, '', '?g=' + normCode(x.j.group.code));
      draw(x.j.group, false); schedule();
    }, function () { msg.textContent = T.errs.net; });
  }

  /* ------------------------------------------------------------------ one group */
  function open(code) {
    curCode = code;
    var g = L.list().filter(function (x) { return x.code === code; })[0], c = read('lm-group:' + code, null);
    if (!g) { start(); return; }
    lsSet('lm-groups-cur', code);
    if (c) draw(c, true); else app.innerHTML = '<p>' + T.loading + '</p>';
    refresh();
  }
  function refresh(extra) {
    clearTimeout(refreshT);
    var g = L.list().filter(function (x) { return x.code === curCode; })[0];
    if (!g) return Promise.resolve();
    return L.one(g, extra).then(function (x) {
      if (x && x.gone) { start(T.gone[x.gone] || T.gone.gone); return; }
      if (x && x.group) draw(x.group, false);
      else if (x && x.error) note(err(x));
    }, function () { var c = read('lm-group:' + curCode, null); if (c) draw(c, true); else start(T.errs.net); }).then(function () {
      if (curCode) schedule();
    });
  }
  function schedule() { clearTimeout(refreshT); refreshT = setTimeout(function () { if (d.hidden) schedule(); else refresh(); }, 6e4); }   // the page stays fresh while it is open
  function note(s) { var m = $('#gr-msg'); if (m) m.textContent = s; }
  function act(path, body) {
    var g = L.list().filter(function (x) { return x.code === curCode; })[0];
    if (!g) return;
    note('…');
    var b = { code: g.code, mid: g.mid, key: g.key }; Object.keys(body || {}).forEach(function (k) { b[k] = body[k]; });
    return L.call(path, b).then(function (x) {
      if (x.s === 404 || x.s === 403 && x.j.error === 'not_member') { L.forget(g.code); start(T.gone[x.j.error] || T.gone.gone); return null; }
      if (x.s !== 200) { note(err(x.j)); return null; }
      if (x.j.group) { L.cache(g.code, x.j.group); draw(x.j.group, false); }
      return x.j;
    }, function () { note(T.errs.net); return null; });
  }
  function draw(G, stale) {
    var mine = L.list(), meId = G.me, myM = G.members.filter(function (m) { return m.id === meId; })[0] || { nick: nick0, av: av0 };
    var seenKey = 'lm-group-seen:' + normCode(G.code), seen = +(lsGet(seenKey) || 0), fresh = G.inbox.filter(function (e) { return e.t > seen; });
    var pct = Math.min(100, Math.round(100 * G.total / Math.max(1, G.goal))), met = G.total >= G.goal, link = base + '?g=' + normCode(G.code);
    var di = (new Date(G.now + 7 * 3600e3).getUTCDay() + 6) % 7;
    var dcs = G.members.filter(function (m) { return m.dc; }).sort(function (a, b) { return b.dc.s - a.dc.s; });
    var html =
      (mine.length > 1 ? '<nav class="cr-tabs">' + mine.map(function (g) { return '<a class="cr-tab' + (g.code === curCode ? ' on' : '') + '" href="?g=' + normCode(g.code) + '" data-open="' + esc(g.code) + '">' + esc(g.name || g.code) + '</a>'; }).join('') + '</nav>' : '') +
      '<section class="tool gr-head"><div class="gr-top"><div><h2>' + esc(G.name) + '</h2><p class="tool-mini">' + T.members(G.members.length, G.max) + ' · ' + T.code + ' <b class="gr-c">' + esc(G.code) + '</b></p></div>' +
      '<div class="gr-inv"><button type="button" class="btn" id="gr-share">' + T.share + '</button><button type="button" class="tool-link" id="gr-copy">' + T.copyLink + '</button></div></div>' +
      (stale ? '<p class="tool-mini">' + T.offline + '</p>' : '') + '<p id="gr-msg" class="tool-msg" aria-live="polite"></p></section>' +
      (fresh.length ? '<section class="tool gr-inbox"><h3>' + T.inboxH + '</h3><ul>' + fresh.slice(-6).reverse().map(function (e) { var n = e.by ? e.by.av + ' ' + esc(e.by.nick) : T.someone; return '<li>' + (e.e === '🔔' ? T.nudged(n) : T.cheered(n, e.e)) + '</li>'; }).join('') + '</ul></section>' : '') +
      '<section class="tool gr-goal' + (met ? ' met' : '') + '"><h3>' + T.goalH + '</h3><p class="gr-big">' + T.goalP(G.total, G.goal) + '</p><div class="gr-bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + G.goal + '" aria-valuenow="' + G.total + '"><i style="width:' + pct + '%"></i></div>' +
      '<p class="tool-mini">' + (met ? T.goalMet : T.goalLeft(G.goal - G.total)) + (G.last ? ' ' + T.lastWk(G.last) : '') + '</p><p class="tool-mini">' + T.goalHow + '</p></section>' +
      (G.room ? '<section class="tool gr-room"><p><b>' + esc(T.roomOpen(G.room.code.slice(0, 3) + ' ' + G.room.code.slice(3), deckName(G.room.deck))) + '</b></p><a class="btn" href="' + esc(ARENA) + '?r=' + G.room.code + '">' + T.roomGo + '</a></section>' : '') +
      '<section class="tool"><h3>' + T.dcH + '</h3>' + (dcs.length ? '<ol class="gr-dc">' + dcs.map(function (m) { return '<li><span class="ar-bav">' + m.av + '</span><span class="gr-dn">' + esc(m.nick) + (m.id === meId ? ' (' + T.you + ')' : '') + '</span><small>' + esc(deckName(m.dc.k)) + '</small><b>' + m.dc.s + '</b></li>'; }).join('') + '</ol>' : '<p class="tool-mini">' + T.dcNone + '</p>') +
      '<div class="tool-actions">' + (ARENA ? '<a class="btn btn-outline" href="' + esc(ARENA) + '">' + T.dcGo + '</a><a class="btn btn-ghost" href="' + esc(ARENA) + '?host=1&amp;g=' + normCode(G.code) + '">' + T.roomNew + '</a>' : '') + '</div></section>' +
      '<section class="tool"><h3>' + T.memH + '</h3><ul class="gr-mem">' + G.members.map(function (m) {
        var self = m.id === meId, sent = G.sent[m.id] || [], hasC = sent.indexOf('c') >= 0, hasN = sent.indexOf('n') >= 0;
        return '<li class="' + (self ? 'me' : '') + '"><span class="gr-av">' + m.av + '</span><div class="gr-mi"><p class="gr-mn"><b>' + esc(m.nick) + '</b>' + (self ? ' <small>(' + T.you + ')</small>' : '') + (m.lead ? ' <small class="gr-tag">' + T.lead + '</small>' : '') + '</p>' +
          '<p class="gr-ms"><span>' + m.n + ' ' + T.bai + ' ' + T.week + '</span>' + (m.st ? ' · <span>' + T.streak(m.st) + '</span>' : '') + ' · <span class="' + (m.today ? 'gr-on' : 'gr-off') + '">' + (m.today ? T.todayOk : T.todayNo) + '</span></p>' +
          '<ol class="jr-days gr-days">' + T.days.map(function (w, i) { return '<li class="' + (m.days.charAt(i) === '1' ? 'on' : '') + (i === di ? ' now' : '') + '"><span>' + w + '</span></li>'; }).join('') + '</ol>' +
          (self ? '' : '<div class="gr-acts">' + (hasC ? '<span class="gr-sent">✓ ' + T.sentC + '</span>' : CHEERS.map(function (e) { return '<button type="button" class="gr-ch" data-to="' + esc(m.id) + '" data-e="' + e + '" aria-label="' + T.cheer + ' ' + esc(m.nick) + ' ' + e + '">' + e + '</button>'; }).join('')) +
            (!m.today ? (hasN ? '<span class="gr-sent">✓ ' + T.sentN + '</span>' : '<button type="button" class="gr-nd" data-to="' + esc(m.id) + '">' + T.nudge + '</button>') : '') + '</div>') + '</div></li>';
      }).join('') + '</ul></section>' +
      '<details class="tool"><summary><b>' + T.meH + '</b></summary><div id="gr-me"><label class="gr-l">' + T.nick + '<input class="gr-nick" maxlength="20" value="' + esc(myM.nick) + '"></label>' + avPicker(myM.av, 'me') +
      '<div class="tool-actions"><button type="button" class="btn" id="gr-mesave">' + T.save + '</button><button type="button" class="btn btn-ghost cr-danger" id="gr-leave">' + T.leave + '</button></div></div></details>' +
      (G.lead ? '<details class="tool"><summary><b>' + T.leadH + '</b></summary><div id="gr-lead"><label class="gr-l">' + T.rename + '<input id="gr-rn" maxlength="40" value="' + esc(G.name) + '"></label>' +
        '<label class="gr-l">' + T.goalSet + '<input id="gr-goal" type="number" min="1" max="999" value="' + (G.auto ? '' : G.goal) + '" placeholder="' + G.goal + '"></label><label class="tool-check"><input type="checkbox" id="gr-auto"' + (G.auto ? ' checked' : '') + '> ' + T.goalAuto + '</label>' +
        '<div class="tool-actions"><button type="button" class="btn" id="gr-lsave">' + T.save + '</button></div>' +
        (G.members.length > 1 ? '<label class="gr-l">' + T.remove + '<select id="gr-rm"><option value="">' + T.pickM + '</option>' + G.members.filter(function (m) { return m.id !== meId; }).map(function (m) { return '<option value="' + esc(m.id) + '">' + m.av + ' ' + esc(m.nick) + '</option>'; }).join('') + '</select></label><div class="tool-actions"><button type="button" class="btn btn-outline" id="gr-rmgo">' + T.remove + '</button></div>' : '') +
        '<div class="tool-actions"><button type="button" class="btn btn-ghost cr-danger" id="gr-del">' + T.del + '</button></div></div></details>' : '') +
      '<p class="tool-mini gr-priv">🔒 ' + T.privacy + '</p>' +
      '<p class="tool-actions"><button type="button" class="tool-link" id="gr-other">' + T.addOther + '</button>' + (JOURNEY ? ' <a class="tool-link" href="' + esc(JOURNEY) + '">' + T.journey + '</a>' : '') + '</p>';
    app.innerHTML = html;
    wireAv(app);
    if (fresh.length && !stale) lsSet(seenKey, String(G.now));
    $$('[data-open]', app).forEach(function (a) { a.onclick = function (e) { e.preventDefault(); history.replaceState(null, '', '?g=' + normCode(a.getAttribute('data-open'))); open(a.getAttribute('data-open')); }; });
    $('#gr-share').onclick = function () {
      var t = T.shareText(G.name, G.code);
      if (navigator.share) navigator.share({ title: G.name, text: t, url: link }).catch(function () {});
      else copy(t + ' ' + link, $('#gr-copy'));
    };
    $('#gr-copy').onclick = function () { copy(link, this); };
    $$('.gr-ch', app).forEach(function (b) { b.onclick = function () { act('cheer', { to: b.getAttribute('data-to'), e: b.getAttribute('data-e') }); }; });
    $$('.gr-nd', app).forEach(function (b) { b.onclick = function () { act('cheer', { to: b.getAttribute('data-to'), e: '🔔' }); }; });
    $('#gr-mesave').onclick = function () {
      var box = $('#gr-me'), n = $('.gr-nick', box).value.replace(/\s+/g, ' ').trim().slice(0, 20);
      if (!n) { note(T.needNick); return; }
      refresh({ nick: n, av: avOf(box) });
    };
    $('#gr-leave').onclick = function () { if (confirm(T.sureLeave)) act('leave').then(function (j) { if (j && j.ok) { L.forget(curCode); history.replaceState(null, '', base); start(); } }); };
    if ($('#gr-lsave')) $('#gr-lsave').onclick = function () {
      var name = $('#gr-rn').value.replace(/\s+/g, ' ').trim(), auto = $('#gr-auto').checked, goal = auto ? 0 : Math.max(1, Math.min(999, Math.round(+$('#gr-goal').value || 0)));
      act('admin', { name: name || G.name, goal: goal });
    };
    if ($('#gr-goal')) $('#gr-goal').oninput = function () { $('#gr-auto').checked = !this.value; };
    if ($('#gr-rmgo')) $('#gr-rmgo').onclick = function () { var s = $('#gr-rm'), id = s.value; if (!id) return; if (confirm(T.sureRemove(s.options[s.selectedIndex].text))) act('admin', { remove: id }); };
    if ($('#gr-del')) $('#gr-del').onclick = function () { if (confirm(T.sureDel)) act('delete').then(function (j) { if (j && j.ok) { L.forget(curCode); history.replaceState(null, '', base); start(); } }); };
    $('#gr-other').onclick = function () { history.replaceState(null, '', base); inv = ''; start(); };
  }
  function copy(text, btn) {
    (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(function () { var t = btn.textContent; btn.textContent = T.copied; setTimeout(function () { btn.textContent = t; }, 1800); }, function () { prompt('', text); });
  }

  /* ------------------------------------------------------------------ start */
  var mine = L.list(), invMine = inv && mine.filter(function (g) { return normCode(g.code) === inv; })[0];
  if (invMine) open(invMine.code);
  else if (inv.length === 8) {
    start();
    L.call('peek', { code: inv }).then(function (x) {
      var box = $('#gr-join');
      if (!box) return;
      if (x.s === 200) { var p = d.createElement('p'); p.className = 'gr-invited'; p.textContent = T.invited(x.j.name, x.j.n); box.insertBefore(p, box.firstChild); if (x.j.full) $('.tool-msg', box).textContent = T.errs.full; box.scrollIntoView({ block: 'start' }); $('.gr-nick', box).focus(); }
      else $('.tool-msg', box).textContent = err(x.j);
    }, function () {});
  } else if (mine.length) open((mine.filter(function (g) { return g.code === lsGet('lm-groups-cur'); })[0] || mine[0]).code);
  else start();
})();
