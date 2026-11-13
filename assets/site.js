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
      [0, 'Cần cố gắng nhiều', 'Bài này còn khó với {b}, và điều đó hoàn toàn bình thường khi mới học. Điểm hôm nay chỉ cho biết {b} đang đứng ở đâu, không nói {b} sẽ đi được bao xa.',
        ['Chanh nào lúc đầu cũng chua, kiên nhẫn một chút là thành nước chanh ngon thôi! 🍋', 'Chanh Lemon tin {b} lắm: ai giỏi toán cũng từng bắt đầu từ một bài làm sai be bét. 🌱', 'Điểm thấp không cắn đâu, nó chỉ chỉ đường thôi. Đi tiếp nhé! 🐢']],
      [3.5, 'Chưa đạt', '{B} đã làm đúng được một phần, nghĩa là {b} không hề mất gốc. Chỉ còn thiếu một đoạn ngắn nữa là qua mức 5.',
        ['Còn thiếu vài giọt nữa là đầy ly nước chanh rồi! 🍋', 'Gần tới rồi, Chanh Lemon đang đứng ở vạch 5 điểm vẫy tay chờ {b} đây! 👋', 'Sai chỗ nào, mai giỏi chỗ đó. Món hời đấy chứ! 😉']],
      [5, 'Trung bình', '{B} đã qua mức đạt: phần cơ bản của bài {b} nắm được rồi. Giờ là lúc làm cho chắc tay hơn.',
        ['Qua vạch rồi! Chanh Lemon tặng {b} một lát chanh mát lạnh. 🍋', 'Nền móng đã có, giờ mình xây thêm tầng thôi! 🧱', 'Một bước nhỏ hôm nay, một bậc điểm ngày mai. 🪜']],
      [6.5, 'Khá', '{B} hiểu bài khá vững và làm đúng phần lớn các câu. Những câu còn sai chính là chỗ đáng học nhất hôm nay.',
        ['Khá lắm! Ly nước chanh của {b} đã thơm rồi, thêm chút đường nữa là tuyệt. 🍹', 'Chanh Lemon vỗ tay bằng cả hai chiếc lá! 🍃👏', 'Thêm một chút cẩn thận là lên Giỏi ngay đấy. ✨']],
      [8, 'Giỏi', '{B} nắm bài chắc và làm cẩn thận. Chỉ còn vài chi tiết nhỏ nữa là trọn vẹn.',
        ['Giỏi quá! Chanh Lemon phải đeo kính râm vì {b} toả sáng. 😎🍋', 'Điểm này đủ làm cả vườn chanh nở hoa! 🌼', 'Suýt tuyệt đối rồi, lần sau {b} "vắt" nốt mấy điểm còn lại nhé! 🍋']],
      [9, 'Xuất sắc', 'Một bài làm xuất sắc: {b} hiểu sâu và gần như không mắc lỗi.',
        ['Xuất sắc! Chanh Lemon xin phép ngả mũ. 🎩🍋', 'Ngọt như chanh ngâm mật ong! 🍯', 'Chỉ cách điểm 10 đúng một cái chớp mắt thôi. 👀✨']],
      [10, 'Tuyệt đối', 'Điểm tuyệt đối! {B} làm đúng tất cả, không sót một câu nào.',
        ['10 điểm tròn như một quả chanh! Chanh Lemon nhảy múa mừng {b} đây! 💃🍋', 'Hôm nay vườn chanh mở hội vì {b}! 🎉', 'Không còn gì để chê, chỉ còn nước chanh để mời. 🍹']]
    ] : [
      [0, 'Just getting started', 'This one was tough, and that is normal when a topic is new. Today’s score only shows where you are standing, not how far you can go.',
        ['Every lemon starts out sour. A little patience and it turns into lemonade! 🍋', 'Lemon believes in you: everyone who is good at maths once got a page full of wrong answers. 🌱', 'A low score does not bite. It just points the way. Keep going! 🐢']],
      [3.5, 'Not there yet', 'You got part of it right, so the basics are not lost. There is only a short stretch left to reach 5.',
        ['A few more drops and the glass of lemonade is full! 🍋', 'So close. Lemon is waving at you from the 5-point line! 👋', 'What you got wrong today is what you will be good at tomorrow. Not a bad deal! 😉']],
      [5, 'Pass', 'You are over the line: the basics of this lesson are in place. Now it is time to make them steady.',
        ['Over the line! Lemon hands you a cool slice of lemon. 🍋', 'The foundation is there. Time to build the next floor! 🧱', 'A small step today, one band higher tomorrow. 🪜']],
      [6.5, 'Good', 'You understand this well and got most questions right. The ones you missed are the best thing to learn from today.',
        ['Nicely done! Your lemonade smells great, one more spoon of sugar and it is perfect. 🍹', 'Lemon is clapping with both leaves! 🍃👏', 'A bit more care and this becomes “very good”. ✨']],
      [8, 'Very good', 'You know this lesson well and worked carefully. Only a few small details are left.',
        ['Brilliant! Lemon needs sunglasses, you are shining. 😎🍋', 'That score could make a whole lemon orchard bloom! 🌼', 'So close to full marks. Squeeze out the last few points next time! 🍋']],
      [9, 'Excellent', 'An excellent paper: deep understanding and almost no slips.',
        ['Excellent! Lemon takes its hat off to you. 🎩🍋', 'Sweet as lemon in honey! 🍯', 'Full marks are just a blink away. 👀✨']],
      [10, 'Perfect score', 'Full marks! Every single answer is right.',
        ['A 10 as round as a lemon! Lemon is dancing for you! 💃🍋', 'The whole lemon orchard is having a party today! 🎉', 'Nothing to fix. Only lemonade to pour. 🍹']]
    ];
    var bandOf = function (s) { var k = 0; for (var i = 0; i < BANDS.length; i++) if (s >= BANDS[i][0] - 1e-9) k = i; return k; };
    var W = isVi ? {
      score: 'Điểm', scale: 'thang 10', level: 'Mức', causes: 'Vì sao điểm chưa cao? (nguyên nhân có thể)', fix: 'Làm gì bây giờ?', aim: 'Hướng đi tiếp theo', how: 'Cách làm',
      last: function (a, b) { return b > a ? 'Lần trước ' + fmt(a) + ', lần này ' + fmt(b) + ': tiến bộ ' + fmt(b - a) + ' điểm. Cứ đà này nhé! 📈' : b < a ? 'Lần trước ' + fmt(a) + ', lần này ' + fmt(b) + '. Không sao cả, có hôm thế này hôm thế khác: xem kĩ câu sai là đủ.' : 'Bằng đúng lần trước (' + fmt(a) + '). Thử đổi cách học một chút xem sao.'; }
    } : {
      score: 'Score', scale: 'out of 10', level: 'Level', causes: 'Why is the score low? (likely causes)', fix: 'What to do now', aim: 'Where to go next', how: 'How to get there',
      last: function (a, b) { return b > a ? 'Last time ' + fmt(a) + ', this time ' + fmt(b) + ': up by ' + fmt(b - a) + '. Keep it going! 📈' : b < a ? 'Last time ' + fmt(a) + ', this time ' + fmt(b) + '. That happens. Go through the wrong answers and you are fine.' : 'The same as last time (' + fmt(a) + '). Try changing how you study a little.'; }
    };
    var base = (root.getAttribute('data-root') || '.').replace(/\/$/, '');
    var examsUrl = (base === '.' ? '' : base + '/') + (isVi ? 'on-thi/' : 'exams/');

    /* st: { n, blank, wrong: [labels], tf: {pts, max}, sa: {n, ok}, written: [labels of weak written problems] } */
    function advice(s, k, st) {
      var causes = [], steps = [], aim = '';
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
        if (st.wrong.length) steps.push(isVi ? 'Xem lại ngay các câu: ' + list + '. Lời giải thích đã hiện dưới từng câu. Đọc xong, che lại rồi tự làm lần nữa vào vở.' : 'Look again at questions ' + list + ' now. The explanation is shown under each one. Read it, cover it, then redo the question in your notebook.');
        steps.push(hasTheory ? (isVi ? 'Đọc lại phần lí thuyết và các ví dụ ở đầu bài này, đi chậm từng bước, tay cầm bút viết theo.' : 'Reread the theory and the worked examples at the top of this lesson, slowly, pen in hand.')
          : (isVi ? 'Chủ đề nào sai nhiều nhất thì tìm bài học của chủ đề đó (ô tìm kiếm ở đầu trang) và học lại từ ví dụ.' : 'Find the lesson for the topic you missed most (the search box at the top) and study it again from the examples.'));
        steps.push(isVi ? 'Ngày mai bấm “Làm lại”. Mục tiêu vừa sức: ' + (k === 0 ? '3,5' : '5') + ' điểm. Mỗi lần nhích lên một chút là đủ.' : 'Tomorrow press “Try again”. A fair target: ' + (k === 0 ? '3.5' : '5') + ' points. A little higher each time is enough.');
      } else {
        var next = BANDS[k + 1];
        aim = k === 6 ? (isVi ? '{B} đã làm chủ bài này. Việc tiếp theo là giữ phong độ và thử sức ở nội dung khó hơn.' : 'You have mastered this. Next: keep it steady and try something harder.')
          : (isVi ? 'Chặng tiếp theo: lên mức ' + next[1] + ' (từ ' + fmt(next[0]) + ' điểm), tức là cần thêm khoảng ' + fmt(next[0] - s) + ' điểm nữa.' : 'Next stop: “' + next[1] + '” (from ' + fmt(next[0]) + ' points), about ' + fmt(next[0] - s) + ' more.');
        if (st.wrong.length) steps.push(isVi ? 'Sửa các câu còn sai: ' + list + '. Với mỗi câu, tự hỏi: mình sai vì chưa hiểu, vì tính nhầm, hay vì đọc sót đề?' : 'Fix the questions you missed: ' + list + '. For each one ask: did I not understand, miscalculate, or misread the question?');
        if (st.written.length) steps.push(isVi ? 'Viết lại lời giải bài tự luận số ' + st.written.join(', ') + ' cho đầy đủ các bước, rồi so với lời giải mẫu.' : 'Rewrite the solution to ' + st.written.join(', ') + ' with every step, then compare with the model solution.');
        if (k <= 3) steps.push(hasTheory ? (isVi ? 'Làm thêm các bài tập của bài này: tự làm trước, rồi mới mở lời giải để đối chiếu.' : 'Do the exercises of this lesson: try first, then open the solution to compare.')
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
    function show(host, got, max, st, key) {
      clear(host);
      if (!max) return;
      var s = Math.round(got / max * 1000) / 100, k = bandOf(s), B = BANDS[k], a = advice(s, k, st);
      var box = d.createElement('section');
      box.className = 'fb fb-' + (s < 5 ? 'low' : k >= 4 ? 'top' : 'mid');
      box.setAttribute('aria-live', 'polite');
      var prev = key ? parseFloat(lsGet(key)) : NaN;
      box.innerHTML = '<div class="fb-head"><span class="fb-art"></span><div><p class="fb-score"><b>' + fmt(s) + '</b><span> / 10</span></p><p class="fb-level">' + W.level + ': <b>' + B[1] + '</b></p></div></div>' +
        '<p class="fb-remark">' + fill(B[2]) + '</p><p class="fb-cute">' + fill(pick(B[3])) + '</p>' +
        (!isNaN(prev) ? '<p class="fb-last">' + W.last(prev, s) + '</p>' : '') +
        (s < 5 ? (a.causes.length ? '<h4>' + W.causes + '</h4>' + ul(a.causes) : '') + '<h4>' + W.fix + '</h4>' + ul(a.steps)
          : '<h4>' + W.aim + '</h4><p>' + fill(a.aim) + '</p><h4>' + W.how + '</h4>' + ul(a.steps));
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
      var st = { n: 0, blank: 0, wrong: [], tf: { pts: 0, max: 0 }, sa: { n: 0, ok: 0 }, written: [] };
      var parts = $$('.qz-part', qz).filter(function (p) { return $('h3', p); });
      $$('.qz-item', qz).forEach(function (it) {
        var t = it.getAttribute('data-type'), key = it.getAttribute('data-key'), ok = false, pts = 0, empty = false;
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
      qz.lmStats = st;
      submit.hidden = true; retry.hidden = false;
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
    var tick = null, handed = false;
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
  if (!isVi && $('#start-btn') && !lsGet('lm-lang') && /^vi/i.test(navigator.language || '')) {
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
