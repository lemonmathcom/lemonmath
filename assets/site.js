/*
 * Lemonmath: small enhancements.
 * Every page is complete HTML and works without this file. It only adds:
 * the light/dark switch, the mobile menu, search, progress ticks and a language hint.
 */
(function () {
  'use strict';

  var d = document;
  var root = d.documentElement;

  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  var isVi = root.lang === 'vi';

  /* ---------- light / dark ---------- */
  var themeBtn = $('#theme-btn');
  if (themeBtn) {
    themeBtn.hidden = false;
    themeBtn.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme') ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      lsSet('lm-theme', next);
    });
  }

  /* ---------- menu drawer (phones and tablets): main menu + lessons of the grade ---------- */
  var menuBtn = $('#menu-btn');
  var sidebar = $('#sidebar');
  var scrim = $('#scrim');
  var menuClose = $('#menu-close');
  if (menuBtn && sidebar && scrim) {
    menuBtn.hidden = false;
    if (menuClose) menuClose.hidden = false;
    var setMenu = function (open) {
      sidebar.classList.toggle('open', open);
      scrim.hidden = !open;
      d.body.classList.toggle('menu-open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        var cur = $('a[aria-current="page"]', sidebar);
        if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'center' });
      }
    };
    menuBtn.addEventListener('click', function () { setMenu(!sidebar.classList.contains('open')); });
    if (menuClose) menuClose.addEventListener('click', function () { setMenu(false); menuBtn.focus(); });
    scrim.addEventListener('click', function () { setMenu(false); });
    sidebar.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a')) setMenu(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 960 && sidebar.classList.contains('open')) setMenu(false); });
  }

  /* ---------- a long formula inside a sentence scrolls on its own, the page never does ---------- */
  var fitMath = function () {
    // lay out the answer options first (formulas at full width), then let any formula that still overflows scroll
    $$('.main .katex-wide').forEach(function (k) { k.classList.remove('katex-wide'); });
    fitOpts();
    $$('.main .katex').forEach(function (k) {
      if (k.parentNode.classList.contains('katex-display')) return;
      var box = k.parentNode;
      while (box && box !== d.body && getComputedStyle(box).display === 'inline') box = box.parentNode;
      if (box && k.getBoundingClientRect().width > box.clientWidth + 1) k.classList.add('katex-wide');
    });
  };
  /* answer options that do not fit side by side: four per row -> two per row -> one per row */
  var optsOverflow = function (g) {
    var kids = g.children, i, j, c, w, r, parts;
    for (i = 0; i < kids.length; i++) {
      c = kids[i].firstElementChild && kids[i].firstElementChild.tagName === 'LABEL' ? kids[i].firstElementChild : kids[i];
      w = kids[i].clientWidth;
      if (!w) continue;
      if (c.scrollWidth > w + 1 || kids[i].scrollWidth > w + 1) return true;
      // a formula that cannot wrap may stick out of a flex label without changing scrollWidth: compare edges
      r = kids[i].getBoundingClientRect().right;
      parts = kids[i].querySelectorAll('.katex');
      for (j = 0; j < parts.length; j++) if (parts[j].getBoundingClientRect().right > r + 1) return true;
    }
    return false;
  };
  var fitOpts = function () {
    $$('.mc-opts, .qz-opts').forEach(function (g) {
      g.classList.remove('stack', 'half');
      if (!optsOverflow(g)) return;
      if (g.classList.contains('cols-4')) { g.classList.add('half'); if (!optsOverflow(g)) return; g.classList.remove('half'); }
      g.classList.add('stack');
    });
  };
  if ($('.main .katex') || $('.mc-opts, .qz-opts')) {
    fitMath();
    window.addEventListener('load', fitMath);
    if (d.fonts && d.fonts.ready) d.fonts.ready.then(fitMath);
    var fitT; window.addEventListener('resize', function () { clearTimeout(fitT); fitT = setTimeout(fitMath, 150); });
    d.addEventListener('toggle', function () { fitMath(); }, true);
  }

  /* ---------- progress (saved in this browser only; shared by both languages) ---------- */
  var done = [];
  try {
    done = JSON.parse(lsGet('lm-done') || '[]');
    if (!Array.isArray(done)) done = [];
  } catch (e) { done = []; }
  function isDone(id) { return done.indexOf(id) !== -1; }

  /* ---------- learning journal: every marked test, kept in this browser (the "My progress" page reads it) ----------
     lm-log     [{ id, t: time, l: lesson id, q: test no. on the page, k: 'quiz' | 'test' | 'paper', g: points, m: out of,
                   v: { NB: [right, of], TH, VD, VDC } }]
     lm-done-at { lesson id: time ticked, negative when unticked }  (lets two devices be merged)
     lm-code    the learning code, when the student saved the journey (then changes are sent in the background) */
  var journal = (function () {
    var LESSON = (($('#done-btn') || { getAttribute: function () { return ''; } }).getAttribute('data-lesson')) || '';
    var API = ($('meta[name="lm-api"]') || { getAttribute: function () { return ''; } }).getAttribute('content') || '';
    var syncT = null;
    function read(k, def) { try { var x = JSON.parse(lsGet(k) || 'null'); return x == null ? def : x; } catch (e) { return def; } }
    function rid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); }
    function doc() {
      var at = read('lm-done-at', {}), dn = {};
      done.forEach(function (id) { dn[id] = at[id] > 0 ? at[id] : 1; });        // ticks from before the journal: time unknown
      Object.keys(at).forEach(function (id) { if (at[id] < 0 && !(id in dn)) dn[id] = at[id]; });
      return { v: 1, nick: lsGet('lm-nick') || '', nt: +(lsGet('lm-nick-t') || 0), goal: +(lsGet('lm-goal') || 3), gt: +(lsGet('lm-goal-t') || 0), done: dn, log: read('lm-log', []) };
    }
    function apply(x) {             // a merged copy came back from the server: it becomes this browser's journal
      if (!x || typeof x !== 'object') return;
      var at = {}, ids = [];
      Object.keys(x.done || {}).forEach(function (id) { var t = x.done[id]; if (t !== 1) at[id] = t; if (t > 0) ids.push(id); });
      done = ids; lsSet('lm-done', JSON.stringify(ids)); lsSet('lm-done-at', JSON.stringify(at));
      lsSet('lm-log', JSON.stringify(x.log || []));
      if (x.nick != null) { lsSet('lm-nick', x.nick); lsSet('lm-nick-t', String(x.nt || 0)); }
      if (x.goal) { lsSet('lm-goal', String(x.goal)); lsSet('lm-goal-t', String(x.gt || 0)); }
      paint();
    }
    function sync(now) {
      clearTimeout(syncT);
      var code = lsGet('lm-code');
      if (!code || !API || !window.fetch) return Promise.resolve(null);
      var go = function () {
        return fetch(API + '/v1/journey/sync', { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ code: code, data: doc() }) })
          .then(function (r) { return r.json().then(function (j) { return { s: r.status, j: j }; }); })
          .then(function (x) {
            if (x.s === 200 && x.j.data) { apply(x.j.data); lsSet('lm-synced', String(Date.now())); return x.j; }
            if (x.s === 404) { lsSet('lm-code', ''); }                 // the journey was deleted (here or on another device)
            return null;
          }, function () { return null; });
      };
      if (now) return go();
      syncT = setTimeout(go, 4000);
      return Promise.resolve(null);
    }
    function add(e) {
      var log = read('lm-log', []); if (!Array.isArray(log)) log = [];
      e.id = e.id || rid(); e.t = e.t || Date.now(); e.l = e.l != null ? e.l : LESSON;
      if (!e.l) e.p = location.pathname;
      var i = -1; log.forEach(function (x, n) { if (x.id === e.id) i = n; });
      if (i >= 0) log[i] = e; else log.push(e);
      if (log.length > 2000) log = log.slice(-2000);
      lsSet('lm-log', JSON.stringify(log));
      sync();
    }
    function tick(id, on) { var at = read('lm-done-at', {}); at[id] = on ? Date.now() : -Date.now(); lsSet('lm-done-at', JSON.stringify(at)); sync(); }
    // a device linked to a code picks up what was done on the others, at most every 15 minutes
    if (lsGet('lm-code') && Date.now() - +(lsGet('lm-synced') || 0) > 15 * 60e3) setTimeout(function () { sync(true); }, 1500);
    return { add: add, tick: tick, doc: doc, apply: apply, sync: sync, api: API, lesson: LESSON, read: read };
  })();
  window.lmJournal = journal;

  function paint() {
    $$('a[data-lesson]').forEach(function (a) {
      var on = isDone(a.getAttribute('data-lesson'));
      var tick = $('.tick', a);
      var label = $('[data-done-label]', a);
      if (tick) tick.classList.toggle('on', on);
      if (label) label.hidden = !on;
    });
    $$('[data-lessons]').forEach(function (card) {
      var ids = card.getAttribute('data-lessons').split(',').filter(Boolean);
      if (!ids.length) return;
      var n = ids.filter(isDone).length;
      var pct = Math.round(100 * n / ids.length);
      var bar = $('.bar', card);
      var meta = $('.card-meta', card);
      if (bar) { bar.hidden = n === 0; $('i', bar).style.width = pct + '%'; }
      if (meta) meta.textContent = meta.getAttribute('data-base') + (n ? ' · ' + pct + '% ' + meta.getAttribute('data-complete') : '');
      var badge = $('.gbadge', card);
      if (badge && n) badge.textContent = pct + '%';
    });
    var start = $('#start-btn');
    if (start && done.length) {
      var links = $$('#nav a[data-lesson]');
      // on the home page there is no sidebar: continue from the first unfinished lesson we know about
      for (var i = 0; i < links.length; i++) {
        if (!isDone(links[i].getAttribute('data-lesson'))) { start.setAttribute('href', links[i].getAttribute('href')); break; }
      }
    }
  }

  var doneBtn = $('#done-btn');
  if (doneBtn) {
    var lessonId = doneBtn.getAttribute('data-lesson');
    var txt = $('.done-text', doneBtn);
    doneBtn.hidden = false;
    var syncBtn = function () {
      var on = isDone(lessonId);
      doneBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (txt) txt.textContent = doneBtn.getAttribute(on ? 'data-on' : 'data-off');
    };
    doneBtn.addEventListener('click', function () {
      var i = done.indexOf(lessonId);
      if (i === -1) done.push(lessonId); else done.splice(i, 1);
      lsSet('lm-done', JSON.stringify(done));
      journal.tick(lessonId, i === -1);
      syncBtn();
      paint();
    });
    syncBtn();
  }
  paint();

  /* ---------- search ---------- */
  var box = $('.searchbox');
  var input = $('#q');
  var list = $('#results');
  if (box && input && list) {
    box.hidden = false;
    var topBar = $('.topbar'), sBtn = $('#search-btn'), sClose = $('#search-close');
    var setSearch = function (open) {
      topBar.classList.toggle('searching', open);
      if (sBtn) sBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) input.focus(); else { list.hidden = true; }
    };
    if (topBar && sBtn && sClose) {
      sBtn.hidden = false; sClose.hidden = false;
      sBtn.addEventListener('click', function () { setSearch(true); });
      sClose.addEventListener('click', function () { setSearch(false); sBtn.focus(); });
      d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && topBar.classList.contains('searching')) setSearch(false); });
    }
    var base = (root.getAttribute('data-root') || '.').replace(/\/$/, '');
    var prefix = base === '.' ? '' : base + '/';
    var index = null, loading = false, active = -1;
    var fold = function (s) {
      return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
    };
    var load = function (cb) {
      if (index) return cb();
      if (loading) return;
      loading = true;
      fetch(prefix + 'search-index.json').then(function (r) { return r.json(); }).then(function (j) {
        index = j.map(function (r) { r.k = fold(r.t + ' ' + r.s); return r; });
        loading = false; cb();
      }).catch(function () { loading = false; });
    };
    var show = function () {
      var q = fold(input.value.trim());
      list.innerHTML = '';
      active = -1;
      if (!q || !index) { list.hidden = true; return; }
      var words = q.split(/\s+/);
      var hits = index.filter(function (r) { return words.every(function (w) { return r.k.indexOf(w) !== -1; }); }).slice(0, 8);
      if (!hits.length) {
        var none = d.createElement('li'); none.className = 'none';
        none.textContent = isVi ? 'Không tìm thấy kết quả' : 'Nothing found';
        list.appendChild(none);
      }
      hits.forEach(function (r) {
        var li = d.createElement('li'), a = d.createElement('a'), s = d.createElement('small');
        a.href = prefix + r.u + '/'; a.textContent = r.t; s.textContent = r.s; a.appendChild(s); li.appendChild(a); list.appendChild(li);
      });
      list.hidden = false;
    };
    input.addEventListener('input', function () { load(show); });
    input.addEventListener('focus', function () { load(show); });
    input.addEventListener('keydown', function (e) {
      var items = $$('a', list);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!items.length) return;
        active = (active + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
        items.forEach(function (a, i) { a.classList.toggle('active', i === active); });
      } else if (e.key === 'Enter' && items.length) {
        e.preventDefault();
        location.href = items[active < 0 ? 0 : active].href;
      } else if (e.key === 'Escape') { list.hidden = true; }
    });
    d.addEventListener('click', function (e) { if (!box.contains(e.target)) list.hidden = true; });
  }


  /* ---------- after a test: level, a friendly remark, likely causes and what to do next ---------- */
  var feedback = (function () {
    var young = d.body.classList.contains('lvl-primary');
    var you = isVi ? (young ? 'em' : 'bạn') : 'you';
    var fill = function (s) { return s.replace(/\{b\}/g, you).replace(/\{B\}/g, you.charAt(0).toUpperCase() + you.slice(1)); };
    var pick = function (a) { return a[Math.floor(Math.random() * a.length)]; };
    var fmt = function (x) { var t = (Math.round(x * 100) / 100).toString(); return isVi ? t.replace('.', ',') : t; };
    /* bands on the 10-point scale: [from, name, remark, cute lines] */
    var BANDS = isVi ? [
      [0, 'Cần cố gắng nhiều', 'Bài này còn khó với {b}, và điều đó hoàn toàn bình thường khi mới học. Lemon thương sự cố gắng của {b} lắm. Điểm hôm nay chỉ cho biết {b} đang đứng ở đâu, không nói {b} sẽ đi được bao xa.',
        ['Lemon ở ngay đây với {b}. Mình cùng làm lại từng câu một, chậm thôi cũng được, {b} nhé! 🍋', 'Lemon tin {b} lắm: ai giỏi toán cũng từng bắt đầu từ một bài làm sai nhiều như thế này. 🌱', '{B} đã ngồi xuống và làm bài thật nghiêm túc, Lemon quý điều đó hơn cả điểm số. Mai mình thử lại nha! 🤗']],
      [3.5, 'Chưa đạt', '{B} đã làm đúng được một phần rồi đấy, nghĩa là {b} không hề mất gốc. Chỉ còn một đoạn ngắn nữa thôi là qua mức 5, cố thêm chút nữa {b} nhé.',
        ['Gần tới rồi {b} ơi! Lemon đang đứng ở vạch 5 điểm, vẫy tay chờ {b} đây. 👋🍋', 'Lemon thấy {b} đang tiến lên từng chút một. Đừng nản nhé, Lemon luôn cổ vũ {b}! 💛', 'Sai chỗ nào, mai mình giỏi chỗ đó. Lemon học cùng {b} mà! 😊']],
      [5, 'Trung bình', '{B} đã qua mức đạt rồi, Lemon mừng cho {b} lắm! Phần cơ bản của bài {b} đã nắm được. Giờ mình luyện thêm cho thật chắc tay nhé.',
        ['Qua vạch rồi! Lemon tặng {b} một lát chanh mát lạnh nè. 🍋', 'Lemon biết {b} đã cố gắng nhiều. Mỗi ngày thêm một chút, {b} sẽ bất ngờ về chính mình đấy! 🌟', 'Nền móng có rồi, mình cùng xây thêm tầng nữa nha {b}! 🧱💛']],
      [6.5, 'Khá', '{B} hiểu bài khá vững và làm đúng phần lớn các câu, giỏi lắm! Những câu còn sai chính là món quà của hôm nay: sửa xong là {b} tiến thêm một bậc.',
        ['Lemon vỗ tay cho {b} bằng cả hai chiếc lá! 🍃👏', 'Lemon tự hào về {b} lắm. Thêm một chút cẩn thận nữa là lên Giỏi ngay thôi! ✨', 'Ly nước chanh của {b} thơm rồi đấy, thêm chút đường nữa là tuyệt! 🍹']],
      [8, 'Giỏi', '{B} nắm bài rất chắc và làm cẩn thận, Lemon vui quá! Chỉ còn vài chi tiết nhỏ nữa thôi là trọn vẹn.',
        ['Giỏi quá {b} ơi! Lemon phải đeo kính râm vì {b} toả sáng. 😎🍋', 'Lemon tự hào về {b} vô cùng. Công sức luyện tập của {b} đang nở hoa đấy! 🌼', 'Suýt tuyệt đối rồi! Lần sau mình "vắt" nốt mấy điểm còn lại nha {b}. 🍋💛']],
      [9, 'Xuất sắc', 'Một bài làm xuất sắc! {B} hiểu sâu và gần như không mắc lỗi nào. Lemon biết {b} đã chăm chỉ thế nào để có ngày hôm nay.',
        ['Xuất sắc! Lemon xin ngả mũ trước {b}. 🎩🍋', 'Lemon hãnh diện về {b} lắm lắm! Ngọt như chanh ngâm mật ong. 🍯', 'Chỉ cách điểm 10 một cái chớp mắt thôi. {B} tuyệt lắm! 👀✨']],
      [10, 'Tuyệt đối', 'Điểm tuyệt đối! {B} làm đúng tất cả, không sót một câu nào. Lemon mừng muốn rơi nước mắt luôn rồi!',
        ['10 điểm tròn như một quả chanh! Lemon nhảy múa mừng {b} đây! 💃🍋', 'Hôm nay cả vườn chanh mở hội vì {b}! Lemon tự hào về {b} vô cùng. 🎉', 'Lemon ôm {b} một cái thật chặt nào! {B} xứng đáng lắm. 🤗💛']]
    ] : [
      [0, 'Just getting started', 'This one was tough, and that is normal when a topic is new. Today’s score only shows where you are standing, not how far you can go.',
        ['Lemon is right here with you. Let’s go through it again one question at a time, as slowly as you like! 🍋', 'Lemon believes in you: everyone who is good at maths once got a page full of wrong answers. 🌱', 'You sat down and gave it a real try, and Lemon treasures that more than any score. Let’s try again tomorrow! 🤗']],
      [3.5, 'Not there yet', 'You got part of it right, so the basics are not lost. There is only a short stretch left to reach 5.',
        ['So close! Lemon is waving at you from the 5-point line. 👋🍋', 'Lemon can see you moving forward bit by bit. Don’t lose heart, Lemon is cheering for you! 💛', 'What you got wrong today is what you will be good at tomorrow. Lemon is learning with you! 😊']],
      [5, 'Pass', 'You are over the line: the basics of this lesson are in place. Now it is time to make them steady.',
        ['Over the line! Lemon hands you a cool slice of lemon. 🍋', 'Lemon knows how hard you tried. A little more each day and you will surprise yourself! 🌟', 'The foundation is there. Let’s build the next floor together! 🧱💛']],
      [6.5, 'Good', 'You understand this well and got most questions right. The ones you missed are the best thing to learn from today.',
        ['Lemon is clapping for you with both leaves! 🍃👏', 'Lemon is so proud of you. A bit more care and this becomes “very good”! ✨', 'Your lemonade smells great, one more spoon of sugar and it is perfect. 🍹']],
      [8, 'Very good', 'You know this lesson well and worked carefully. Only a few small details are left.',
        ['Brilliant! Lemon needs sunglasses, you are shining. 😎🍋', 'Lemon is so proud of you. All that practice is coming into bloom! 🌼', 'So close to full marks. Squeeze out the last few points next time! 🍋']],
      [9, 'Excellent', 'An excellent paper: deep understanding and almost no slips.',
        ['Excellent! Lemon takes its hat off to you. 🎩🍋', 'Lemon could not be prouder of you. Sweet as lemon in honey! 🍯', 'Full marks are just a blink away. 👀✨']],
      [10, 'Perfect score', 'Full marks! Every single answer is right.',
        ['A 10 as round as a lemon! Lemon is dancing for you! 💃🍋', 'The whole lemon orchard is having a party today! 🎉', 'Here comes a big hug from Lemon. You earned it! 🤗💛']]
    ];
    var bandOf = function (s) { var k = 0; for (var i = 0; i < BANDS.length; i++) if (s >= BANDS[i][0] - 1e-9) k = i; return k; };
    var W = isVi ? {
      score: 'Điểm', scale: 'thang 10', level: 'Mức', causes: 'Vì sao điểm chưa cao? (nguyên nhân có thể)', fix: 'Làm gì bây giờ?', aim: 'Hướng đi tiếp theo', how: 'Cách làm',
      last: function (a, b) { return b > a ? 'Lần trước ' + fmt(a) + ', lần này ' + fmt(b) + ': tiến bộ ' + fmt(b - a) + ' điểm. Cứ đà này nhé! 📈' : b < a ? 'Lần trước ' + fmt(a) + ', lần này ' + fmt(b) + '. Không sao cả, có hôm thế này hôm thế khác: xem kĩ câu sai là đủ.' : 'Bằng đúng lần trước (' + fmt(a) + '). Thử đổi cách học một chút xem sao.'; }
    } : {
      score: 'Score', scale: 'out of 10', level: 'Level', causes: 'Why is the score low? (likely causes)', fix: 'What to do now', aim: 'Where to go next', how: 'How to get there',
      last: function (a, b) { return b > a ? 'Last time ' + fmt(a) + ', this time ' + fmt(b) + ': up by ' + fmt(b - a) + '. Keep it going! 📈' : b < a ? 'Last time ' + fmt(a) + ', this time ' + fmt(b) + '. That happens. Go through the wrong answers and you are fine.' : 'The same as last time (' + fmt(a) + '). Try changing how you study a little.'; }
    };
    /* one line for the parent sitting next to the child (primary and lower secondary) */
    var withParent = young || d.body.classList.contains('lvl-middle');
    var PARENT = isVi ? ['Bố mẹ ơi, lúc này con cần một cái ôm hơn là một lời trách. Bố mẹ ngồi cạnh con 15 phút, cùng đọc lại một ví dụ trong bài, rồi để con tự làm lại một câu sai nhé.',
      'Bố mẹ hãy nhờ con giảng lại một câu con làm sai và lắng nghe con nói. Khen sự cố gắng của con trước, chuyện điểm số để sau: con sẽ muốn chia sẻ với bố mẹ nhiều hơn.',
      'Bố mẹ hãy khen một điều cụ thể con đã làm tốt và hỏi con thấy vui nhất ở câu nào. Rồi để con tự chọn bài tiếp theo: được tin tưởng, con sẽ càng thích tự học.']
      : ['Right now your child needs a hug more than a telling-off. Sit with them for 15 minutes, reread one example from the lesson together, then let them redo one wrong question.',
        'Ask your child to explain one question they got wrong, and really listen. Praise the effort first and leave the score for later: they will want to share more with you.',
        'Praise one specific thing your child did well and ask which question they enjoyed most. Then let them choose the next lesson: a child who feels trusted enjoys studying on their own.'];
    var parentsUrl0 = (root.getAttribute('data-root') || '.').replace(/\/$/, '');
    var parentsUrl = (parentsUrl0 === '.' ? '' : parentsUrl0 + '/') + (isVi ? 'phu-huynh/' : 'parents/');
    var base = (root.getAttribute('data-root') || '.').replace(/\/$/, '');
    var examsUrl = (base === '.' ? '' : base + '/') + (isVi ? 'on-thi/' : 'exams/');
    var journeyUrl = (base === '.' ? '' : base + '/') + (isVi ? 'hanh-trinh/' : 'my-progress/');

    /* st: { n, blank, wrong: [labels], tf: {pts, max}, sa: {n, ok}, written: [labels of weak written problems] } */
    /* ctx (from My classes and live tests, optional): { mode: 'home' | 'test' | 'free' | 'live', later: 'time the explanations appear' or '' }
       so the advice never mentions a "Try again" button or explanations that are not on the page. */
    function advice(s, k, st, ctx) {
      var causes = [], steps = [], aim = '';
      ctx = ctx || {};
      var once = ctx.mode === 'test' || ctx.mode === 'live', practise = ctx.mode === 'home' || ctx.mode === 'free';
      var answered = st.n - st.blank, wrongAnswered = st.wrong.length - st.blank;
      var list = st.wrong.slice(0, 12).join(', ') + (st.wrong.length > 12 ? ', …' : '');
      var hasTheory = !!$('.box-example, .box-definition, .box-theorem');
      if (s < 5) {
        if (st.blank >= Math.max(2, 0.3 * st.n)) causes.push(isVi ? '{B} để trống ' + st.blank + ' trên ' + st.n + ' câu. Có thể {b} chưa kịp giờ, hoặc phần đó {b} chưa học tới.' : 'You left ' + st.blank + ' of ' + st.n + ' questions blank. Maybe time ran out, or you have not studied that part yet.');
        if (answered > 0 && wrongAnswered >= 0.5 * answered) causes.push(isVi ? 'Trong các câu đã làm, {b} sai từ một nửa trở lên. Vậy chỗ vướng nằm ở kiến thức nền của bài, chứ chưa hẳn do vội.' : 'Of the questions you answered, at least half are wrong. So the gap is in the basics of the lesson, not just in rushing.');
        else if (answered > 0) causes.push(isVi ? 'Những câu {b} đã làm thì đúng khá nhiều. Điểm thấp chủ yếu vì số câu chưa làm, không phải vì {b} không hiểu.' : 'Most of what you answered is right. The score is low mainly because of the questions you did not do, not because you do not understand.');
        if (st.tf.max && st.tf.pts < 0.4 * st.tf.max) causes.push(isVi ? 'Phần đúng sai mất nhiều điểm. Ở dạng này, sai một ý là điểm cả câu tụt mạnh, nên cần xét kĩ từng ý một.' : 'The true/false part cost a lot. One wrong statement drops the mark for the whole question, so each statement needs checking on its own.');
        if (st.sa.n && st.sa.ok < 0.4 * st.sa.n) causes.push(isVi ? 'Phần trả lời ngắn sai nhiều. Thường là do tính nhầm ở bước cuối hoặc làm tròn chưa đúng yêu cầu của đề.' : 'Many short answers are wrong. The usual reasons are a slip in the last step or rounding differently from what the question asks.');
        if (st.written.length) causes.push(isVi ? 'Bài tự luận số ' + st.written.join(', ') + ' được dưới nửa số điểm: {b} xem lại cách trình bày và các bước lập luận.' : 'Written problems ' + st.written.join(', ') + ' scored under half: look again at the reasoning and how you set it out.');
        causes = causes.slice(0, 3);
        if (st.wrong.length && ctx.later) steps.push(isVi ? 'Khi bài đóng (' + ctx.later + '), mở lại trang này để xem lời giải các câu: ' + list + '. Đọc xong, che lại rồi tự làm lần nữa vào vở.' : 'When it closes (' + ctx.later + '), open this page again to see the explanations for questions ' + list + '. Read them, cover them, then redo the questions in your book.');
        else if (st.wrong.length) steps.push(isVi ? 'Xem lại ngay các câu: ' + list + '. Lời giải thích đã hiện dưới từng câu. Đọc xong, che lại rồi tự làm lần nữa vào vở.' : 'Look again at questions ' + list + ' now. The explanation is shown under each one. Read it, cover it, then redo the question in your notebook.');
        steps.push(hasTheory ? (isVi ? 'Đọc lại phần lí thuyết và các ví dụ ở đầu bài này, đi chậm từng bước, tay cầm bút viết theo.' : 'Reread the theory and the worked examples at the top of this lesson, slowly, pen in hand.')
          : (isVi ? 'Chủ đề nào sai nhiều nhất thì tìm bài học của chủ đề đó (ô tìm kiếm ở đầu trang) và học lại từ ví dụ.' : 'Find the lesson for the topic you missed most (the search box at the top) and study it again from the examples.'));
        var target = isVi ? (k === 0 ? '3,5' : '5') : (k === 0 ? '3.5' : '5');
        steps.push(once ? (isVi ? 'Bài kiểm tra sau, mục tiêu vừa sức: ' + target + ' điểm. Mỗi lần nhích lên một chút là đủ.' : 'Next test, a fair target: ' + target + ' points. A little higher each time is enough.')
          : practise ? (isVi ? 'Bấm “Luyện lại” bên dưới để làm lại các câu (không tính điểm), đến khi tự làm đúng được.' : 'Press “Practise again” below to redo the questions (not scored) until you can get them right on your own.')
          : (isVi ? 'Ngày mai bấm “Làm lại”. Mục tiêu vừa sức: ' + target + ' điểm. Mỗi lần nhích lên một chút là đủ.' : 'Tomorrow press “Try again”. A fair target: ' + target + ' points. A little higher each time is enough.'));
      } else {
        var next = BANDS[k + 1];
        aim = k === 6 ? (isVi ? '{B} đã làm chủ bài này. Việc tiếp theo là giữ phong độ và thử sức ở nội dung khó hơn.' : 'You have mastered this. Next: keep it steady and try something harder.')
          : (isVi ? 'Chặng tiếp theo: lên mức ' + next[1] + ' (từ ' + fmt(next[0]) + ' điểm), tức là cần thêm khoảng ' + fmt(next[0] - s) + ' điểm nữa.' : 'Next stop: “' + next[1] + '” (from ' + fmt(next[0]) + ' points), about ' + fmt(next[0] - s) + ' more.');
        if (st.wrong.length) steps.push(ctx.later
          ? (isVi ? 'Khi bài đóng (' + ctx.later + ') và có lời giải, xem lại các câu còn sai: ' + list + '. Với mỗi câu, tự hỏi: mình sai vì chưa hiểu, vì tính nhầm, hay vì đọc sót đề?' : 'When it closes (' + ctx.later + ') and the explanations appear, look again at the questions you missed: ' + list + '. For each one ask: did I not understand, miscalculate, or misread the question?')
          : (isVi ? 'Sửa các câu còn sai: ' + list + '. Với mỗi câu, tự hỏi: mình sai vì chưa hiểu, vì tính nhầm, hay vì đọc sót đề?' : 'Fix the questions you missed: ' + list + '. For each one ask: did I not understand, miscalculate, or misread the question?'));
        if (st.written.length) steps.push(isVi ? 'Viết lại lời giải bài tự luận số ' + st.written.join(', ') + ' cho đầy đủ các bước, rồi so với lời giải mẫu.' : 'Rewrite the solution to ' + st.written.join(', ') + ' with every step, then compare with the model solution.');
        if (k <= 3) steps.push(hasTheory ? (isVi ? 'Làm thêm các bài tập của bài này: tự làm trước, rồi mới mở lời giải để đối chiếu.' : 'Do the exercises of this lesson: try first, then open the solution to compare.')
          : once ? (isVi ? 'Ôn lại bài học của những chủ đề còn sai (ô tìm kiếm ở đầu trang giúp tìm nhanh).' : 'Review the lessons for the topics you missed (the search box at the top finds them fast).')
          : practise ? (isVi ? 'Bấm “Luyện lại” để làm lại các câu, rồi ôn bài học của những chủ đề còn sai.' : 'Press “Practise again” to redo the questions, then review the lessons for the topics you missed.')
          : (isVi ? 'Ôn lại bài học của những chủ đề còn sai, rồi làm lại đề này sau vài ngày.' : 'Review the lessons for the topics you missed, then redo this paper in a few days.'));
        else steps.push(isVi ? 'Thử sức có bấm giờ với một đề trong <a href="' + examsUrl + '">mục Ôn thi và Kho đề thi</a>.' : 'Try a timed paper from the <a href="' + examsUrl + '">exam prep section and past papers bank</a>.');
        if (k >= 5) steps.push(isVi ? 'Giảng lại một câu khó cho bạn bè. Giảng được cho người khác là lúc mình hiểu sâu nhất.' : 'Explain one hard question to a friend. Teaching it is when you understand it most deeply.');
        var nx = $('.pager-next');
        if (k >= 4 && nx) steps.push((isVi ? 'Sẵn sàng rồi thì sang bài tiếp theo: ' : 'When you are ready, move on: ') + '<a href="' + nx.getAttribute('href') + '">' + $('span', nx).textContent.replace(/</g, '&lt;') + '</a>.');
      }
      return { causes: causes, steps: steps, aim: aim };
    }

    function ul(items) { return '<ul>' + items.map(function (t) { return '<li>' + fill(t) + '</li>'; }).join('') + '</ul>'; }
    /* host: element the panel is placed after; key: where the last score is remembered ('' = do not remember) */
    function show(host, got, max, st, key, ctx) {
      clear(host);
      if (!max) return;
      var s = Math.round(got / max * 1000) / 100, k = bandOf(s), B = BANDS[k], a = advice(s, k, st, ctx);
      var box = d.createElement('section');
      box.className = 'fb fb-' + (s < 5 ? 'low' : k >= 4 ? 'top' : 'mid');
      box.setAttribute('aria-live', 'polite');
      var prev = key ? parseFloat(lsGet(key)) : NaN;
      box.innerHTML = '<div class="fb-head"><span class="fb-art"></span><div><p class="fb-score"><b>' + fmt(s) + '</b><span> / 10</span></p><p class="fb-level">' + W.level + ': <b>' + B[1] + '</b></p></div></div>' +
        '<p class="fb-remark">' + fill(B[2]) + '</p><p class="fb-cute">' + fill(pick(B[3])) + '</p>' +
        (!isNaN(prev) ? '<p class="fb-last">' + W.last(prev, s) + '</p>' : '') +
        (s < 5 ? (a.causes.length ? '<h4>' + W.causes + '</h4>' + ul(a.causes) : '') + '<h4>' + W.fix + '</h4>' + ul(a.steps)
          : '<h4>' + W.aim + '</h4><p>' + fill(a.aim) + '</p><h4>' + W.how + '</h4>' + ul(a.steps)) +
        (withParent ? '<p class="fb-parent"><b>' + (isVi ? 'Dành cho bố mẹ' : 'For parents') + ':</b> ' + PARENT[s < 5 ? 0 : k >= 4 ? 2 : 1] + ' <a href="' + parentsUrl + '">' + (isVi ? 'Cách đồng hành cùng con' : 'How to support your child') + ' →</a></p>' : '');
      // on the site's own tests (not homework or a live class): where the journey continues
      if (!ctx) { var jr = d.createElement('p'); jr.className = 'fb-jr'; jr.innerHTML = '<a href="' + journeyUrl + '">' + (isVi ? '📈 Xem hành trình học: học gì tiếp, ôn gì, tiến bộ ra sao' : '📈 My progress: what to learn next, what to review, how you are doing') + ' →</a>'; box.appendChild(jr); }
      var art = $('.foot-mark');
      if (art) { var c = art.cloneNode(true); c.setAttribute('class', 'fb-mascot'); c.setAttribute('aria-hidden', 'true'); $('.fb-art', box).appendChild(c); }
      host.parentNode.insertBefore(box, host.nextSibling);
      if (key) lsSet(key, String(s));
    }
    function clear(host) { var n = host.nextSibling; if (n && n.classList && n.classList.contains('fb')) n.remove(); }
    return { show: show, clear: clear, bandOf: bandOf, bands: BANDS };
  })();
  window.lmFeedback = feedback;

  /* ---------- mini test: mark like the graduation exam ---------- */
  $$('[data-quiz]').forEach(function (qz) {
    var submit = $('.qz-submit', qz), retry = $('.qz-retry', qz), out = $('.qz-score', qz), keys = $('.qz-keys', qz);
    if (!submit) return;
    submit.hidden = false;
    if (keys) keys.hidden = true;
    var num = function (s) { s = String(s).replace(/\s/g, '').replace(',', '.'); return s === '' ? NaN : Number(s); };
    var fmt = function (x) { var t = (Math.round(x * 100) / 100).toString(); return isVi ? t.replace('.', ',') : t; };
    submit.addEventListener('click', function () {
      var got = 0, max = 0, plain = qz.hasAttribute('data-count');
      var st = { n: 0, blank: 0, wrong: [], tf: { pts: 0, max: 0 }, sa: { n: 0, ok: 0 }, written: [] }, lv = {};
      var tally = function (L, right) { if (!L) return; lv[L] = lv[L] || [0, 0]; lv[L][1]++; if (right) lv[L][0]++; };
      var parts = $$('.qz-part', qz).filter(function (p) { return $('h3', p); });
      $$('.qz-item', qz).forEach(function (it) {
        var t = it.getAttribute('data-type'), key = it.getAttribute('data-key'), ok = false, pts = 0, empty = false;
        var lvs = (it.getAttribute('data-lv') || '').split(' ').filter(Boolean);
        if (t === 'mc') {
          max += 0.25;
          var c = $('input:checked', it); ok = !!c && c.value === key; pts = ok ? 0.25 : 0; empty = !c;
          $$('li', it).forEach(function (li, i) { li.classList.toggle('qz-right', 'ABCD'[i] === key); li.classList.toggle('qz-wrong', !!c && c.parentNode.parentNode === li && c.value !== key); });
        } else if (t === 'tf') {
          max += 1;
          var k = 0;
          $$('tr', it).forEach(function (tr, i) {
            var c = $('input:checked', tr), r = !!c && c.value === key.charAt(i);
            if (r) k++;
            tally(lvs[i] || lvs[0], r);
            tr.classList.toggle('qz-right', r); tr.classList.toggle('qz-wrong', !r);
          });
          pts = [0, 0.1, 0.25, 0.5, 1][k]; ok = k === 4; empty = !$('input:checked', it);
          st.tf.max += 1; st.tf.pts += pts;
        } else {
          max += 0.5;
          var v = num($('input', it).value), w = num(key);
          ok = !isNaN(v) && Math.abs(v - w) < 1e-9; pts = ok ? 0.5 : 0; empty = $('input', it).value.trim() === '';
          st.sa.n++; if (ok) st.sa.ok++;
        }
        if (t !== 'tf') tally(lvs[0], ok);
        st.n++; if (empty) st.blank++;
        if (!ok) {
          var lab = (($('.qz-q b', it) || {}).textContent || '').replace(/[^0-9]/g, ''), pi = parts.indexOf(it.parentNode);
          st.wrong.push((parts.length > 1 && pi >= 0 ? ['I', 'II', 'III'][pi] + '.' : '') + lab);
        }
        if (plain) { max += 1 - (t === 'mc' ? 0.25 : t === 'tf' ? 1 : 0.5); pts = ok ? 1 : 0; }
        got += pts;
        it.classList.toggle('qz-ok', ok); it.classList.toggle('qz-no', !ok);
        var e = $('.qz-expl', it); if (e) e.hidden = false;
      });
      if (qz.hasAttribute('data-paper')) { qz.setAttribute('data-got', got); qz.setAttribute('data-max', max); }
      out.textContent = plain ? (isVi ? 'Số câu đúng: ' : 'Correct answers: ') + got + ' / ' + max
        : qz.hasAttribute('data-paper') ? (isVi ? 'Điểm phần trắc nghiệm: ' : 'Objective part: ') + fmt(got) + ' / ' + fmt(max) + (isVi ? ' điểm' : ' points')
        : (isVi ? 'Điểm của bạn: ' : 'Your score: ') + fmt(got) + ' / ' + fmt(max) + (isVi ? ' (quy ra thang 10: ' : ' (out of 10: ') + fmt(got / max * 10) + ')';
      qz.lmStats = st; qz.lmLv = lv;
      submit.hidden = true; retry.hidden = false;
      if (!qz.hasAttribute('data-paper') && max) journal.add({ q: $$('[data-quiz]').indexOf(qz), k: plain ? 'test' : 'quiz', g: Math.round(got * 1000) / 1000, m: max, v: lv });
      if (!qz.hasAttribute('data-paper')) feedback.show(submit.parentNode, got, max, st, 'lm-score:' + location.pathname + '#' + $$('[data-quiz]').indexOf(qz));
      d.dispatchEvent(new CustomEvent('lm-quiz-marked'));
    });
    retry.addEventListener('click', function () {
      $$('input', qz).forEach(function (i) { if (i.type === 'text') i.value = ''; else i.checked = false; });
      $$('.qz-item, li, tr', qz).forEach(function (x) { x.classList.remove('qz-ok', 'qz-no', 'qz-right', 'qz-wrong'); });
      $$('.qz-expl', qz).forEach(function (x) { x.hidden = true; });
      out.textContent = ''; submit.hidden = false; retry.hidden = true;
      qz.lmStats = null; feedback.clear(submit.parentNode);
    });
  });

  /* ---------- real exam papers: timer, hand-in, self-marking of written problems ---------- */
  var ph = $('.paper-head');
  if (ph) (function () {
    var mins = parseFloat(ph.getAttribute('data-min')) || 0, key = 'lm-paper-end:' + location.pathname;
    var startBtn = $('.paper-start', ph), timer = $('.paper-timer', ph), clock = $('.pt-clock', ph), stopBtn = $('.paper-stop', ph);
    var fmt = function (x) { var t = (Math.round(x * 100) / 100).toString(); return isVi ? t.replace('.', ',') : t; };
    var num = function (s) { s = String(s).replace(/\s/g, '').replace(',', '.'); return s === '' ? NaN : Number(s); };
    var tick = null, handed = false, attempt = '';
    // self-marking box under each written problem that states its points
    var qs = $$('.paper-q[data-pts]');
    qs.forEach(function (q) {
      var p = d.createElement('p'); p.className = 'paper-self'; p.hidden = true;
      var lab = d.createElement('label');
      lab.innerHTML = (isVi ? 'Điểm tự chấm: ' : 'Your points: ');
      var inp = d.createElement('input'); inp.type = 'text'; inp.inputMode = 'decimal'; inp.maxLength = 5; inp.size = 4; inp.setAttribute('data-max', q.getAttribute('data-pts'));
      inp.addEventListener('input', total);
      lab.appendChild(inp); lab.appendChild(d.createTextNode(' / ' + fmt(+q.getAttribute('data-pts'))));
      p.appendChild(lab); $('.box-body', q).appendChild(p);
    });
    var sum = d.createElement('p'); sum.className = 'paper-total'; sum.hidden = true; sum.setAttribute('aria-live', 'polite');
    var lastBox = qs.length ? qs[qs.length - 1] : $('[data-quiz]');
    if (lastBox) lastBox.parentNode.insertBefore(sum, lastBox.nextSibling);
    var hint = null;
    if (lastBox && qs.length) { hint = d.createElement('p'); hint.className = 'fb-hint'; hint.hidden = true; hint.textContent = isVi ? 'Nhập điểm tự chấm cho từng bài tự luận để nhận nhận xét và gợi ý cho cả đề.' : 'Enter your own mark for each written problem to get feedback and next steps for the whole paper.'; sum.parentNode.insertBefore(hint, sum.nextSibling); }
    function total() {
      var got = 0, max = 0;
      $$('[data-quiz][data-paper]').forEach(function (qz) { got += +(qz.getAttribute('data-got') || 0); max += +(qz.getAttribute('data-max') || 0); });
      $$('.paper-self input').forEach(function (i) { var v = num(i.value), m = +i.getAttribute('data-max'); max += m; if (!isNaN(v)) got += Math.max(0, Math.min(v, m)); });
      sum.textContent = ph.getAttribute('data-total') + ': ' + fmt(got) + ' ' + ph.getAttribute('data-of') + ' ' + fmt(max);
      // remark on the whole paper: once the objective part is marked and every written problem has its self-mark
      var st = { n: 0, blank: 0, wrong: [], tf: { pts: 0, max: 0 }, sa: { n: 0, ok: 0 }, written: [] }, ready = true;
      $$('[data-quiz][data-paper]').forEach(function (qz) {
        var q = qz.lmStats; if (!q) { ready = false; return; }
        st.n += q.n; st.blank += q.blank; st.wrong = st.wrong.concat(q.wrong); st.tf.pts += q.tf.pts; st.tf.max += q.tf.max; st.sa.n += q.sa.n; st.sa.ok += q.sa.ok;
      });
      $$('.paper-self input').forEach(function (i, n) { var v = num(i.value); if (isNaN(v)) ready = false; else if (v < 0.5 * +i.getAttribute('data-max')) st.written.push(String(n + 1)); });
      if (ready && max) {
        var lv = {};
        $$('[data-quiz][data-paper]').forEach(function (qz) { var x = qz.lmLv || {}; Object.keys(x).forEach(function (L) { lv[L] = lv[L] || [0, 0]; lv[L][0] += x[L][0]; lv[L][1] += x[L][1]; }); });
        attempt = attempt || Math.random().toString(36).slice(2, 12);
        journal.add({ id: attempt, k: 'paper', g: Math.round(got * 1000) / 1000, m: max, v: lv });
      }
      if (ready && max) feedback.show(sum, got, max, st, 'lm-score:' + location.pathname); else { feedback.clear(sum); if (hint) hint.hidden = !$('.paper-self input') || sum.hidden; }
      if (ready && hint) hint.hidden = true;
    }
    function reveal() {
      $$('.paper-self').forEach(function (p) { p.hidden = false; });
      if (qs.length || $('[data-quiz][data-paper]')) { sum.hidden = false; total(); }
    }
    function handIn(timeUp) {
      if (handed) return; handed = true;
      clearInterval(tick); lsSet(key, '');
      root.classList.remove('paper-running');
      timer.hidden = true; startBtn.hidden = false;
      $$('.qz-submit').forEach(function (b) { if (!b.hidden) b.click(); });
      if (timeUp) { var m = d.createElement('p'); m.className = 'paper-up'; m.textContent = ph.getAttribute('data-up'); ph.appendChild(m); }
      reveal();
    }
    function run(end) {
      handed = false; root.classList.add('paper-running');
      startBtn.hidden = true; timer.hidden = false;
      var draw = function () {
        var left = Math.max(0, Math.round((end - Date.now()) / 1000));
        var h = Math.floor(left / 3600), m = Math.floor(left % 3600 / 60), s2 = left % 60;
        clock.textContent = (h ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s2 < 10 ? '0' : '') + s2;
        timer.classList.toggle('pt-low', left <= 300);
        if (!left) handIn(true);
      };
      draw(); tick = setInterval(draw, 1000);
    }
    if (mins) {
      startBtn.hidden = false;
      startBtn.addEventListener('click', function () {
        $$('.qz-retry').forEach(function (b) { if (!b.hidden) b.click(); });
        $$('.paper-up').forEach(function (x) { x.remove(); });
        var end = Date.now() + mins * 60000; lsSet(key, String(end)); run(end);
        timer.scrollIntoView({ block: 'nearest' });
      });
      stopBtn.addEventListener('click', function () { handIn(false); });
      var saved = +(lsGet(key) || 0);
      if (saved > Date.now()) run(saved);
    }
    d.addEventListener('lm-quiz-marked', function () { reveal(); total(); });
  })();

  /* ---------- remember the chosen language; gently offer Vietnamese ---------- */
  var langBtn = $('.lang-btn');
  if (langBtn) langBtn.addEventListener('click', function () { lsSet('lm-lang', langBtn.getAttribute('data-lang')); });
  if (!isVi && $('.hero') && !lsGet('lm-lang') && /^vi/i.test(navigator.language || '')) {
    var bar = d.createElement('div');
    bar.className = 'langbar';
    bar.innerHTML = '<span>Bạn muốn xem website bằng tiếng Việt?</span>';
    var a = d.createElement('a'); a.href = langBtn ? langBtn.getAttribute('href') : 'vi/'; a.textContent = 'Xem bằng tiếng Việt';
    a.addEventListener('click', function () { lsSet('lm-lang', 'vi'); });
    var x = d.createElement('button'); x.type = 'button'; x.textContent = 'Không, cảm ơn';
    x.addEventListener('click', function () { lsSet('lm-lang', 'en'); bar.remove(); });
    bar.appendChild(a); bar.appendChild(x);
    d.body.insertBefore(bar, d.body.firstChild.nextSibling);
  }
})();

/* Share a lesson: the phone's share sheet (Zalo, Messenger, …) or, on a computer, copy the link. */
(function () {
  document.querySelectorAll('.share-lesson').forEach(function (b) {
    b.addEventListener('click', function () {
      var data = { title: document.title, url: location.href.split('#')[0] };
      if (navigator.share) { navigator.share(data).catch(function () {}); return; }
      if (navigator.clipboard) navigator.clipboard.writeText(data.url).then(function () { b.textContent = '✓ ' + b.getAttribute('data-copied'); }, function () {});
    });
  });
  /* the closing "pass it on" block: a plain copy button next to the share sheet */
  document.querySelectorAll('.copy-link').forEach(function (b) {
    if (!navigator.clipboard) return;
    b.hidden = false;
    b.addEventListener('click', function () {
      navigator.clipboard.writeText(location.href.split('#')[0]).then(function () { b.textContent = '✓ ' + b.getAttribute('data-copied'); }, function () {});
    });
  });
})();

/* Back to top: appears after a long scroll, on phones, tablets and computers alike. */
(function () {
  var d = document, b = d.createElement('button'), vi = d.documentElement.lang === 'vi', tick = false;
  b.type = 'button'; b.className = 'to-top'; b.textContent = '↑';
  b.setAttribute('aria-label', vi ? 'Lên đầu trang' : 'Back to top'); b.title = vi ? 'Lên đầu trang' : 'Back to top';
  b.addEventListener('click', function () { window.scrollTo(0, 0); var m = d.getElementById('main'); if (m) m.focus({ preventScroll: true }); });
  d.body.appendChild(b);
  var last = window.pageYOffset;
  /* only while scrolling back up, so it never sits on top of what is being read */
  var sync = function () { tick = false; var y = window.pageYOffset; if (Math.abs(y - last) < 6) return; b.classList.toggle('show', y < last && y > Math.max(900, window.innerHeight * 1.5)); last = y; };
  window.addEventListener('scroll', function () { if (!tick) { tick = true; (window.requestAnimationFrame || setTimeout)(sync); } }, { passive: true });
  sync();
})();

/* Install as an app + offline reading. The service worker (/sw.js) keeps the pages already opened. */
(function () {
  var d = document, n = navigator, vi = d.documentElement.lang === 'vi';
  if ('serviceWorker' in n && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { n.serviceWorker.register('/sw.js').catch(function () {}); });
  }
  var get = function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } };
  var set = function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} };
  var standalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || n.standalone === true;
  if (standalone || get('lm-install') === 'no') return;
  /* offer it only to someone who keeps coming back: from the third page on */
  var seen = (parseInt(get('lm-views'), 10) || 0) + 1;
  set('lm-views', String(seen));
  var bar = null;
  function show(text, action) {
    if (bar || seen < 3) return;
    bar = d.createElement('div'); bar.className = 'install-bar'; bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', vi ? 'Cài Lemonmath' : 'Install Lemonmath');
    var p = d.createElement('p'); p.textContent = text; bar.appendChild(p);
    if (action) {
      var b = d.createElement('button'); b.type = 'button'; b.className = 'btn'; b.textContent = vi ? 'Cài đặt' : 'Install';
      b.addEventListener('click', action); bar.appendChild(b);
    }
    var x = d.createElement('button'); x.type = 'button'; x.className = 'install-x'; x.textContent = '✕';
    x.setAttribute('aria-label', vi ? 'Đóng' : 'Close');
    x.addEventListener('click', function () { set('lm-install', 'no'); bar.remove(); });
    bar.appendChild(x);
    d.body.appendChild(bar);
  }
  var deferred = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault(); deferred = e;
    show(vi ? 'Cài Lemonmath lên màn hình chính để mở nhanh và đọc lại bài khi không có mạng.' : 'Add Lemonmath to your home screen: opens fast, and saved lessons work offline.', function () {
      if (!deferred) return;
      deferred.prompt();
      deferred.userChoice.then(function (c) { if (c && c.outcome !== 'accepted') set('lm-install', 'no'); }, function () {});
      deferred = null; if (bar) bar.remove();
    });
  });
  window.addEventListener('appinstalled', function () { set('lm-install', 'no'); if (bar) bar.remove(); });
  /* iPhone and iPad have no install prompt: explain the two taps instead */
  var ua = n.userAgent || '';
  var ios = /iPad|iPhone|iPod/.test(ua) || (n.platform === 'MacIntel' && n.maxTouchPoints > 1);
  if (ios && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua)) {
    show(vi ? 'Muốn mở Lemonmath như một ứng dụng? Bấm nút Chia sẻ rồi chọn “Thêm vào Màn hình chính”.' : 'Want Lemonmath as an app? Tap the Share button, then “Add to Home Screen”.', null);
  }
})();

/*
 * Learn offline. A family saves a chapter or a whole grade on the device once (cache "lm-pack-<key>"),
 * then every saved lesson opens with the internet off. Lists and sizes come from /offline-data/ (tools/build.js).
 * What is saved is remembered in localStorage "lm-off": { <key>: { t, u, v, all, c: { <chapter id>: 1 } } }.
 */
(function () {
  var d = document, n = navigator, vi = d.documentElement.lang === 'vi';
  var ok = 'caches' in window && 'serviceWorker' in n && window.fetch && /^https?:$/.test(location.protocol);
  var L = vi ? {
    pitch: 'Học không cần mạng: tải bài về máy một lần, tắt Wi-Fi vẫn mở được.',
    ch: 'Tải chương này', all: 'Tải cả ', how: 'Cách dùng', manage: 'Bài đã tải',
    savedCh: 'Chương này đã nằm trên máy. Tắt mạng vẫn học được.', savedAll: ' đã nằm trên máy. Tắt mạng vẫn học được.',
    going: 'Đang tải', pages: 'trang', keep: 'Cứ để trang này mở cho đến khi tải xong.',
    fail: 'Mạng chập chờn nên chưa tải hết. Bấm lại để tải tiếp phần còn thiếu.', full: 'Máy không còn đủ chỗ trống để lưu.',
    get: 'Tải về', got: 'Đã lưu', part: 'Đã lưu một phần', rest: 'Tải nốt', upd: 'Cập nhật bản mới', del: 'Xoá', lessons: 'bài',
    used: 'Lemonmath đang dùng khoảng ', onDevice: ' trên máy này.', none: 'Trình duyệt này chưa lưu được bài để học offline. Bạn thử Chrome, Edge hoặc Safari bản mới nhé.',
    chip: 'Mất mạng · bài đã tải vẫn mở được', miss: 'Chưa tải về máy', delAsk: 'Xoá bài đã lưu của ', other: 'Bản tiếng Anh', mb: ' MB'
  } : {
    pitch: 'Learn with the internet off: save the lessons once and they open with no connection.',
    ch: 'Save this chapter', all: 'Save all of ', how: 'How it works', manage: 'Saved lessons',
    savedCh: 'This chapter is saved on this device. It opens with no internet.', savedAll: ' is saved on this device. It opens with no internet.',
    going: 'Saving', pages: 'pages', keep: 'Keep this page open until it finishes.',
    fail: 'The connection dropped before everything was saved. Tap again to fetch the rest.', full: 'There is not enough free space on this device.',
    get: 'Save', got: 'Saved', part: 'Partly saved', rest: 'Save the rest', upd: 'Update', del: 'Remove', lessons: 'lessons',
    used: 'Lemonmath is using about ', onDevice: ' on this device.', none: 'This browser cannot save lessons for offline use. Try a recent Chrome, Edge or Safari.',
    chip: 'No internet · saved lessons still open', miss: 'Not saved on this device', delAsk: 'Remove the saved lessons of ', other: 'Vietnamese edition', mb: ' MB'
  };
  var meta = function () { try { return JSON.parse(localStorage.getItem('lm-off') || '{}') || {}; } catch (e) { return {}; } };
  var setMeta = function (m) { try { localStorage.setItem('lm-off', JSON.stringify(m)); } catch (e) {} };
  var mb = function (b) { var x = b / 1048576; x = x < 10 ? Math.max(0.1, Math.round(x * 10) / 10) : Math.round(x); return String(x).replace('.', vi ? ',' : '.') + L.mb; };
  var el = function (tag, cls, text) { var e = d.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  var indexP = null;
  var index = function () { return indexP || (indexP = fetch('/offline-data/packs.json').then(function (r) { if (!r.ok) throw 0; return r.json(); })); };
  var busy = {};

  /* Save a pack. chapters: array of chapter ids, or null for the whole grade. force: fetch again what is already saved (an update). */
  function download(key, chapters, force, onStep) {
    if (busy[key]) return busy[key];
    var p = Promise.all([index(), fetch('/offline-data/' + key + '.json', { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error('net'); return r.json(); }), caches.open('lm-pack-' + key)])
      .then(function (a) {
        var info = a[0][key], pack = a[1], cache = a[2], m = meta(), cur = m[key] || {};
        if (cur.v && cur.v !== pack.v) force = true;               /* the lessons changed since they were saved */
        var ids = chapters || Object.keys(pack.c);
        if (force) Object.keys(cur.c || {}).forEach(function (id) { if (pack.c[id] && ids.indexOf(id) < 0) ids.push(id); });
        var urls = pack.base.slice();
        ids.forEach(function (id) { urls = urls.concat(pack.c[id] || []); });
        var i = 0, done = 0, failed = 0, quota = false;
        if (n.storage && n.storage.persist) n.storage.persist().catch(function () {});
        function one() {
          if (i >= urls.length || quota) return Promise.resolve();
          var u = urls[i++];
          return cache.match(u).then(function (hit) {
            if (hit && !force) return;
            return fetch(u, { cache: 'no-cache' }).then(function (res) {
              if (!res.ok || res.redirected) { failed++; return; }
              return cache.put(u, res);
            });
          }).catch(function (e) { failed++; if (e && e.name === 'QuotaExceededError') quota = true; })
            .then(function () { done++; if (onStep) onStep(done, urls.length); return one(); });
        }
        return Promise.all([one(), one(), one(), one()]).then(function () {
          if (quota) throw new Error('quota');
          if (failed) throw new Error('net');
          m = meta(); cur = m[key] || { c: {} };
          var c = force ? {} : (cur.c || {});
          ids.forEach(function (id) { c[id] = 1; });
          m[key] = { t: info ? info.t : key, u: info ? info.u : '/', v: pack.v, c: c, all: Object.keys(pack.c).every(function (id) { return c[id]; }) };
          setMeta(m);
        });
      });
    busy[key] = p;
    var clear = function () { delete busy[key]; };
    p.then(clear, clear);
    return p;
  }
  function remove(key) { var m = meta(); delete m[key]; setMeta(m); return caches.delete('lm-pack-' + key); }

  function progress(host) {
    var w = el('div', 'off-prog'), bar = el('div', 'bar'), fill = el('i'), txt = el('p', 'off-note', L.going + '…');
    bar.appendChild(fill); w.appendChild(bar); w.appendChild(txt); host.appendChild(w);
    return function (a, b) { fill.style.width = Math.round(100 * a / b) + '%'; txt.textContent = L.going + ' ' + a + '/' + b + ' ' + L.pages + '. ' + L.keep; };
  }
  function errText(e) { return e && e.message === 'quota' ? L.full : L.fail; }

  /* ---- the box on grade, chapter and lesson pages ---- */
  function box(b, idx) {
    var key = b.getAttribute('data-pack'), ch = b.getAttribute('data-ch'), hub = b.getAttribute('data-hub'), info = idx[key];
    if (!info) return;
    var chInfo = ch && info.c.filter(function (x) { return x.id === ch; })[0];
    function draw(msg) {
      var m = meta()[key] || {}, haveCh = !!(ch && m.c && m.c[ch]), haveAll = !!m.all, stale = m.v && m.v !== info.v;
      b.textContent = ''; b.hidden = false;
      b.classList.toggle('saved', haveAll || haveCh);
      var p = el('p', 'off-msg', haveAll ? info.t + L.savedAll : haveCh ? L.savedCh : L.pitch);
      p.insertBefore(el('span', 'off-ico', haveAll || haveCh ? '✓' : '⬇'), p.firstChild);
      b.appendChild(p);
      var row = el('p', 'off-row');
      function btn(label, chapters, force) {
        var x = el('button', 'btn btn-outline', label); x.type = 'button';
        x.addEventListener('click', function () {
          row.hidden = true;
          download(key, chapters, force, progress(b)).then(function () { draw(); }, function (e) { draw(errText(e)); });
        });
        row.appendChild(x);
      }
      if (stale) btn(L.upd, null, true);
      else {
        if (chInfo && !haveCh && !haveAll) btn(L.ch + ' · ' + mb(chInfo.w + info.a), [ch]);
        if (!haveAll) btn(L.all + info.t + ' · ' + mb(info.w), null);
      }
      var a = el('a', 'off-how', haveAll || haveCh ? L.manage : L.how); a.href = hub; row.appendChild(a);
      b.appendChild(row);
      if (msg) b.appendChild(el('p', 'off-note off-err', msg));
    }
    draw();
  }

  /* ---- the list on the "Learn offline" page ---- */
  function hub(h, idx) {
    var lang = vi ? 'vi-' : 'en-';
    var list = el('ul', 'off-list'), foot = el('p', 'off-note');
    h.appendChild(list); h.appendChild(foot);
    function usage() {
      if (!(n.storage && n.storage.estimate)) return;
      n.storage.estimate().then(function (e) { foot.textContent = e && e.usage > 200000 ? L.used + mb(e.usage) + L.onDevice : ''; }, function () {});
    }
    function row(key) {
      var info = idx[key], li = el('li');
      function draw(msg) {
        var m = meta()[key] || {}, some = m.c && Object.keys(m.c).length, stale = m.v && m.v !== info.v;
        li.textContent = ''; li.className = m.all ? 'saved' : '';
        var a = el('a', 'off-name', info.t + (key.indexOf(lang) === 0 ? '' : ' (' + L.other + ')')); a.href = info.u; li.appendChild(a);
        li.appendChild(el('span', 'off-meta', info.n + ' ' + L.lessons + ' · ' + mb(info.w) + (m.all ? ' · ✓ ' + L.got : some ? ' · ' + L.part : '')));
        var acts = el('span', 'off-acts'); li.appendChild(acts);
        function btn(label, fn, cls) { var x = el('button', 'btn ' + (cls || ''), label); x.type = 'button'; x.addEventListener('click', fn); acts.appendChild(x); }
        function go(force) { return function () { acts.hidden = true; download(key, null, force, progress(li)).then(function () { draw(); usage(); }, function (e) { draw(errText(e)); usage(); }); }; }
        if (stale) btn(L.upd, go(true));
        else if (!m.all) btn(some ? L.rest : L.get, go(false));
        if (some) btn(L.del, function () { if (window.confirm(L.delAsk + info.t + '?')) remove(key).then(function () { draw(); usage(); }); }, 'btn-outline');
        if (msg) li.appendChild(el('p', 'off-note off-err', msg));
      }
      draw();
      return li;
    }
    var saved = meta();
    Object.keys(idx).filter(function (k) { return k.indexOf(lang) === 0 || saved[k]; }).forEach(function (k) { list.appendChild(row(k)); });
    usage();
  }

  /* ---- no internet: say so, and grey out the links that are not saved ---- */
  var chip = null;
  function offline() {
    var off = n.onLine === false;
    d.body.classList.toggle('is-offline', off);
    if (!off) { if (chip) { chip.remove(); chip = null; } [].forEach.call(d.querySelectorAll('a.off-miss'), function (a) { a.classList.remove('off-miss'); a.removeAttribute('title'); }); return; }
    if (!chip) { chip = el('div', 'off-chip', L.chip); chip.setAttribute('role', 'status'); d.body.appendChild(chip); }
    if (!ok) return;
    [].slice.call(d.querySelectorAll('.main a[href], .sidebar a[href]'), 0, 500).forEach(function (a) {
      if (a.origin !== location.origin || a.pathname === location.pathname) return;
      caches.match(a.pathname, { ignoreSearch: true }).then(function (hit) { if (!hit) { a.classList.add('off-miss'); a.title = L.miss; } }, function () {});
    });
  }
  window.addEventListener('online', offline); window.addEventListener('offline', offline);
  offline();

  var boxes = [].slice.call(d.querySelectorAll('.off-box')), h = d.getElementById('off-hub');
  if (!boxes.length && !h) return;
  if (!ok) { if (h) h.appendChild(el('p', 'soon-note', L.none)); return; }
  index().then(function (idx) {
    boxes.forEach(function (b) { box(b, idx); });
    if (h) hub(h, idx);
  }, function () {});
})();
