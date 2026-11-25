/* Lemonmath · Arena (Đấu trường Lemon).
 * Ten quick questions a game, on a phone, with the thumb. Three ways to play:
 *   - on your own (works with the internet off: questions are made right here in the browser),
 *   - today's challenge (the same ten questions for everyone on the same deck today; the first go of the day counts
 *     and is shown in your study groups),
 *   - a room with friends: a 6-digit code, everyone gets the same questions, a live scoreboard. Rooms use the same
 *     Firebase Realtime Database (REST, no SDK) and the same "live/<6 digits>" branch as the live class test, so the
 *     security rules in giao-viec/LOP-TRUC-TIEP.md need no change: live/<code>/meta (kind: 'arena') and live/<code>/p/<id>.
 * Scoring in "Speed" mode follows the high-speed-high-stakes rule of Math Garden (Maris & van der Maas, 2012): a right
 * answer earns the share of time left (up to 100 points), a wrong one loses the same, "Not sure" is 0. Guessing does
 * not pay, careful work does. "Calm" mode has no clock at all.
 * Kept on this device: lm-arena = { best: { deck: { s: best speed score, c: best calm score } }, runs: [...], dc: { 'day|deck': score } },
 * lm-nick / lm-av (nickname and avatar, shared with study groups).
 */
(function () {
  'use strict';
  var d = document, vi = d.documentElement.lang === 'vi', app = d.getElementById('ar-app');
  if (!app) return;
  var DB = (app.getAttribute('data-db') || '').replace(/\/+$/, ''), BANK = app.getAttribute('data-bank') || '', GROUPS_URL = app.getAttribute('data-groups') || '';
  var API = (app.getAttribute('data-api') || '').replace(/\/+$/, '');
  var AVATARS = ['🍋', '🦊', '🐼', '🐯', '🐸', '🐧', '🦉', '🐳', '🦄', '🐝', '🐢', '🐙', '🌻', '🚀', '⭐', '🎈'];
  var VN = 7 * 3600e3, DAY = 864e5, POLL = 2000, MAXP = 30;
  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k, def) { try { var x = JSON.parse(lsGet(k) || 'null'); return x == null ? def : x; } catch (e) { return def; } }
  function tex(s) { return '<span class="tex">' + esc(s) + '</span>'; }
  function drawMath(root) {
    if (!window.katex) return;
    $$('.tex', root).forEach(function (s) { try { window.katex.render(s.textContent, s, { displayMode: s.hasAttribute('data-d'), throwOnError: false, strict: 'ignore' }); s.classList.remove('tex'); } catch (e) {} });
  }
  var vnDay = function (t) { return new Date(t + VN).toISOString().slice(0, 10); };

  /* ------------------------------------------------------------------ words */
  var T = vi ? {
    you: function (p) { return p ? 'em' : 'bạn'; },
    levels: { p: 'Tiểu học', m: 'THCS', h: 'THPT', k: 'Kiến thức theo lớp' }, grade: function (g) { return 'Lớp ' + g; },
    pick: 'Chọn bộ câu', mode: 'Cách chơi', speed: '⚡ Tốc độ', calm: '🌿 Thong thả',
    speedTip: function (s) { return 'Mỗi câu ' + s + ' giây. Đúng được tới 100 điểm, càng nhanh càng nhiều; sai bị trừ đúng số điểm đó; chưa chắc thì bấm “Chưa chắc” (0 điểm).'; },
    calmTip: 'Không bấm giờ. Mỗi câu đúng 100 điểm, sai không bị trừ. Hợp khi mới học hoặc khi muốn nghĩ thật kĩ.',
    play: '▶ Luyện ngay', daily: '📅 Thử thách hôm nay', dailyDone: function (s) { return 'Hôm nay: ' + s + ' điểm ✓ · làm lại để luyện'; }, dailyTip: 'Cả nhóm cùng một bộ 10 câu mỗi ngày. Lần làm đầu tiên được tính.',
    best: 'Kỷ lục', none: 'chưa chơi', me: 'Tên và hình của bạn', nickPh: 'Biệt danh, ví dụ: An 6A', nickHint: 'Bạn bè trong phòng đấu và trong nhóm sẽ thấy tên này. Đừng ghi họ tên đầy đủ.', change: 'Đổi',
    roomH: 'Phòng đấu với bạn bè', roomP: 'Tạo phòng, gửi mã 6 số cho bạn bè (hoặc chiếu lên màn hình lớp), cả phòng cùng giải một bộ câu và xem bảng điểm trực tiếp. Tối đa 30 người.',
    create: 'Tạo phòng', joinCode: 'Mã phòng', join: 'Vào phòng', noRooms: 'Phòng đấu cần kết nối mạng và chưa được bật trên trang này.',
    groupsH: 'Học cùng nhóm', groupsP: 'Lập nhóm với bạn cùng lớp, anh chị em hoặc cả nhà: cùng một mục tiêu mỗi tuần, cổ vũ nhau, điểm thử thách hôm nay hiện cho cả nhóm.', groupsGo: 'Đến Nhóm học tập →',
    howH: 'Vì sao trả lời vội mà sai lại bị trừ điểm?',
    howP: '<p>Toán giỏi không phải là làm nhanh, mà là làm đúng và hiểu mình đang làm gì. Cách tính điểm ở chế độ Tốc độ lấy từ Math Garden, một hệ thống luyện toán được các nhà nghiên cứu ở Đại học Amsterdam kiểm chứng trên hàng trăm nghìn học sinh: đoán bừa thì không có lợi, còn khi chưa chắc mà dám bấm “Chưa chắc” thì không mất gì.</p><p>Nếu thấy hồi hộp khi có đồng hồ, hãy chơi chế độ Thong thả. Lemon chỉ mong bạn vui và tiến bộ từng ngày, không cần nhanh hơn ai cả.</p>',
    q: 'Câu', score: 'điểm', notSure: '❓ Chưa chắc', timeUp: 'Hết giờ', right: 'Đúng rồi!', wrong: 'Chưa đúng', skipped: 'Để sau',
    quit: 'Dừng', sureQuit: 'Dừng trận này? Điểm sẽ không được lưu.',
    prompts: { calc: 'Tính', x: 'Tìm x, biết', simp: 'Rút gọn', exp: 'Khai triển', fac: 'Phân tích thành nhân tử', pow: 'Viết dưới dạng một luỹ thừa', val: 'Giá trị của', der: 'Đạo hàm của hàm số', of: 'của' },
    resH: function (s) { return s + ' điểm'; }, resC: function (c, n) { return 'Đúng ' + c + '/' + n + ' câu'; }, newBest: '🏆 Kỷ lục mới!', bestWas: function (b) { return 'Kỷ lục của bạn: ' + b; },
    again: '↻ Chơi lại', other: 'Đổi bộ câu', toRoom: 'Rủ bạn đấu bộ này', review: 'Xem lại từng câu', yours: 'Bạn chọn', key: 'Đáp án đúng', noAns: 'không trả lời',
    hasty: function (k, p) { return 'Có ' + k + ' câu sai khi ' + T.you(p) + ' bấm rất nhanh, dưới 3 giây. Chậm lại một nhịp, đọc hết đề rồi hãy bấm nhé.'; },
    skipsNote: function (k, p) { return k + ' câu ' + T.you(p) + ' bấm “Chưa chắc”. Thật thà với chính mình là bước đầu của tiến bộ: xem lại các câu đó bên dưới nhé.'; },
    dailyCounted: 'Điểm này được tính cho thử thách hôm nay và gửi tới nhóm của bạn.', dailyPractice: 'Lần làm lại để luyện, không thay điểm thử thách hôm nay.',
    hostH: 'Tạo phòng đấu', count: 'Số câu', iPlay: 'Tôi cùng chơi (bỏ chọn nếu chỉ điều khiển, chiếu lên màn hình)', tellGroup: 'Báo cho nhóm', noGroup: 'Không báo',
    open: 'Mở phòng', cancel: 'Thôi', code: 'Mã phòng', goTo: 'Vào trang', enter: 'rồi nhập mã', scan: 'Hoặc quét mã QR rồi nhập mã phòng.',
    players: function (n) { return n + ' người trong phòng'; }, waitP: 'Đang chờ các bạn vào phòng…', start: 'Bắt đầu', kick: 'Mời ra', close: 'Đóng phòng', sureClose: 'Đóng phòng? Bảng điểm sẽ bị xoá.',
    end: 'Kết thúc trận', rematch: '↻ Đấu lại', board: 'Bảng điểm', done: 'xong', playing: 'đang làm', ready: 'Sẵn sàng!',
    hi: 'Chào', waitHost: 'Bạn đã vào phòng! Chờ chủ phòng bấm Bắt đầu nhé.', waitEnd: 'Bạn đã làm xong. Chờ các bạn khác một chút…', waitNext: 'Chờ chủ phòng bắt đầu trận tiếp theo…',
    rank: function (k, n) { return 'Hạng ' + k + '/' + n; }, gone: 'Chủ phòng đã đóng phòng.', kicked: 'Bạn đã ra khỏi phòng này.', noRoom: 'Không tìm thấy phòng này. Kiểm tra lại mã nhé.',
    isClass: 'Mã này là của một lớp làm bài trực tiếp.', toClass: 'Vào lớp', full: 'Phòng đã đủ 30 người.', lost: 'Mất kết nối, đang thử lại…', err: 'Chưa kết nối được. Kiểm tra mạng rồi thử lại.',
    needNick: 'Bạn đặt một biệt danh trước nhé.', needCode: 'Nhập đủ 6 chữ số của mã phòng.', leave: 'Rời phòng', deckOf: 'Bộ câu', modeOf: 'Chế độ', round: 'Trận',
    loadBank: 'Đang tải câu hỏi…', bankErr: 'Chưa tải được câu hỏi của lớp này. Kiểm tra mạng, hoặc chọn một bộ tính nhẩm (chơi được cả khi không có mạng).',
    stars: ['Cố lên!', 'Khá lắm!', 'Giỏi quá!', 'Xuất sắc!'], countIn: 'Chuẩn bị…', shared: 'Đã báo cho nhóm', link: 'Chép link mời', copied: 'Đã chép ✓'
  } : {
    you: function () { return 'you'; },
    levels: { p: 'Primary', m: 'Middle school', h: 'High school', k: 'Grade knowledge' }, grade: function (g) { return 'Grade ' + g; },
    pick: 'Choose a deck', mode: 'How to play', speed: '⚡ Speed', calm: '🌿 Calm',
    speedTip: function (s) { return s + ' seconds a question. A right answer earns up to 100 points, more when quicker; a wrong one loses the same; not sure? Press “Not sure” (0 points).'; },
    calmTip: 'No clock. 100 points for each right answer, nothing lost for a wrong one. Good when you are new to a topic or want to think it through.',
    play: '▶ Play now', daily: '📅 Today’s challenge', dailyDone: function (s) { return 'Today: ' + s + ' points ✓ · play again to practise'; }, dailyTip: 'The same 10 questions for the whole group every day. Your first go counts.',
    best: 'Best', none: 'not played', me: 'Your name and picture', nickPh: 'Nickname, e.g. Sam 6A', nickHint: 'Friends in rooms and groups will see this name. Do not use your full name.', change: 'Change',
    roomH: 'Play with friends', roomP: 'Open a room, send the 6-digit code to friends (or show it on the classroom screen); everyone answers the same questions and sees the scoreboard live. Up to 30 players.',
    create: 'Open a room', joinCode: 'Room code', join: 'Join', noRooms: 'Rooms need an internet connection and are not switched on for this site.',
    groupsH: 'Learn as a group', groupsP: 'Make a group with classmates, brothers and sisters or the whole family: one goal each week, cheers for each other, and today’s challenge scores for the group.', groupsGo: 'Go to Study groups →',
    howH: 'Why does a quick wrong answer lose points?',
    howP: '<p>Being good at maths is not about being fast: it is about being right and knowing what you are doing. Speed mode scores the way Math Garden does, a practice system that researchers at the University of Amsterdam tested with hundreds of thousands of children: guessing does not pay, and pressing “Not sure” costs nothing.</p><p>If the clock makes you nervous, play Calm mode. Lemon only wants you to enjoy it and get a little better every day, not to beat anyone.</p>',
    q: 'Question', score: 'points', notSure: '❓ Not sure', timeUp: 'Time is up', right: 'Right!', wrong: 'Not quite', skipped: 'Later',
    quit: 'Stop', sureQuit: 'Stop this game? The score will not be saved.',
    prompts: { calc: 'Work out', x: 'Find x if', simp: 'Simplify', exp: 'Expand', fac: 'Factorise', pow: 'Write as a single power', val: 'The value of', der: 'The derivative of', of: 'of' },
    resH: function (s) { return s + ' points'; }, resC: function (c, n) { return c + '/' + n + ' right'; }, newBest: '🏆 New best!', bestWas: function (b) { return 'Your best: ' + b; },
    again: '↻ Play again', other: 'Change deck', toRoom: 'Challenge friends on this deck', review: 'Go through each question', yours: 'You chose', key: 'Right answer', noAns: 'no answer',
    hasty: function (k) { return k + ' wrong answers came in under 3 seconds. Slow down a beat: read the whole question, then press.'; },
    skipsNote: function (k) { return 'You pressed “Not sure” ' + k + ' times. Being honest with yourself is where progress starts: look at those questions below.'; },
    dailyCounted: 'This counts as today’s challenge and is sent to your groups.', dailyPractice: 'A practice go: today’s challenge score stays the same.',
    hostH: 'Open a room', count: 'Questions', iPlay: 'I play too (untick to only run it, e.g. on a projector)', tellGroup: 'Tell a group', noGroup: 'No',
    open: 'Open the room', cancel: 'Cancel', code: 'Room code', goTo: 'Go to', enter: 'and enter the code', scan: 'Or scan the QR code, then enter the room code.',
    players: function (n) { return n + (n === 1 ? ' player' : ' players'); }, waitP: 'Waiting for friends to join…', start: 'Start', kick: 'Remove', close: 'Close the room', sureClose: 'Close the room? The scoreboard will be deleted.',
    end: 'End the game', rematch: '↻ Rematch', board: 'Scoreboard', done: 'done', playing: 'playing', ready: 'Ready!',
    hi: 'Hi', waitHost: 'You are in! Wait for the host to press Start.', waitEnd: 'All done. Waiting for the others…', waitNext: 'Waiting for the host to start the next game…',
    rank: function (k, n) { return 'Place ' + k + ' of ' + n; }, gone: 'The host has closed the room.', kicked: 'You are no longer in this room.', noRoom: 'Room not found. Check the code.',
    isClass: 'This code belongs to a live class test.', toClass: 'Join the class', full: 'The room is full (30 players).', lost: 'Connection lost, trying again…', err: 'Could not connect. Check your connection and try again.',
    needNick: 'Choose a nickname first.', needCode: 'Enter all 6 digits of the room code.', leave: 'Leave the room', deckOf: 'Deck', modeOf: 'Mode', round: 'Game',
    loadBank: 'Loading questions…', bankErr: 'Could not load this grade’s questions. Check your connection, or pick a mental-maths deck (they work offline).',
    stars: ['Keep going!', 'Nice work!', 'Great!', 'Brilliant!'], countIn: 'Get ready…', shared: 'Group told', link: 'Copy invite link', copied: 'Copied ✓'
  };
  var LEMON = vi ? [
    ['Tuyệt đối! Không sai câu nào. Lemon tự hào về {y} lắm! 🍋', 'Hoàn hảo! {Y} làm chắc tay như một nhà toán học nhỏ vậy.'],
    ['Rất tốt! Chỉ còn một chút nữa thôi là trọn vẹn. Xem lại câu sai rồi thử lại nhé.', 'Giỏi lắm! {Y} đang nắm rất chắc bộ này rồi đấy.'],
    ['Khá lắm! {Y} làm đúng hơn một nửa. Đọc kĩ các câu sai bên dưới, lần sau sẽ hơn.', 'Ổn rồi đấy! Mỗi lần chơi là một lần não {y} khoẻ thêm một chút.'],
    ['Chưa được như ý, nhưng không sao cả. Thử chế độ Thong thả, làm chậm mà chắc nhé.', 'Lemon thấy {y} đã cố gắng. Ôn lại bài học của phần này rồi quay lại, chắc chắn sẽ khác.'],
    ['Bộ này còn khó với {y} lúc này, và điều đó hoàn toàn bình thường. Thử một bộ dễ hơn hoặc chế độ Thong thả nhé.', 'Đừng nản nha! Ai cũng bắt đầu từ đây. Xem lại từng câu bên dưới, hiểu một câu là thắng một câu.']
  ] : [
    ['Perfect! Not a single slip. Lemon is so proud of you! 🍋', 'Flawless! You worked like a real mathematician.'],
    ['Very good! Almost all of them. Look at the one you missed and try again.', 'Great job! You really know this deck.'],
    ['Nice! More than half right. Read the missed ones below and you will do better next time.', 'Good going! Every game makes your brain a little stronger.'],
    ['Not quite what you hoped, and that is fine. Try Calm mode: slow and sure.', 'Lemon can see you tried. Go over the lesson for this topic and come back: it will feel different.'],
    ['This deck is still hard for you right now, and that is completely normal. Try an easier deck or Calm mode.', 'Do not give up! Everyone starts here. Go through each question below: every one you understand is a win.']
  ];

  /* ------------------------------------------------------------------ questions */
  function rng(seed) { var a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function newSeed() { return Math.floor(Math.random() * 4294967295); }
  function N(x) { var s = String(Math.round(x * 1e6) / 1e6); return vi ? s.replace('.', '{,}') : s; }      // a number in TeX
  function P(x) { return x < 0 ? '(' + N(x) + ')' : N(x); }
  var DIV = vi ? ':' : '\\div', TIMES = '\\times';
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  function fr(a, b) { if (b < 0) { a = -a; b = -b; } return (a < 0 ? '-' : '') + '\\frac{' + Math.abs(a) + '}{' + b + '}'; }
  function poly(terms, v) {       // [[coefficient, power], …] → "4x^2 + 12x + 9"
    var out = '';
    terms.forEach(function (t) {
      var c = t[0], p = t[1]; if (!c) return;
      var a = Math.abs(c), body = p === 0 ? String(a) : (a === 1 ? '' : String(a)) + v + (p === 1 ? '' : '^{' + p + '}');
      out += out ? (c < 0 ? ' - ' : ' + ') + body : (c < 0 ? '-' : '') + body;
    });
    return out || '0';
  }
  /* four different options, the right one at a random place; numbers turned into TeX */
  function opts(r, ans, ds, fmt) {
    fmt = fmt || N;
    var key = fmt(ans), seen = {}, list = [];
    seen[key] = 1;
    ds.forEach(function (x) { var s = fmt(x); if (!seen[s] && list.length < 3) { seen[s] = 1; list.push(s); } });
    var k = 1; while (list.length < 3 && typeof ans === 'number') { var y = ans + (k % 2 ? 1 : -1) * Math.ceil(k / 2); var s = fmt(y); if (!seen[s] && y >= 0) { seen[s] = 1; list.push(s); } k++; if (k > 40) break; }
    var at = Math.floor(r() * 4); list.splice(at, 0, key);
    return { o: list, k: at };
  }
  function optsP(r, ans, ds) { return opts(r, ans, ds.filter(function (x) { return x >= 0; })); }     // primary decks: no negative numbers
  function sopts(r, ans, ds) { return opts(r, ans, ds, function (s) { return s; }); }
  function Q(p, x, o, e) { return { p: p, x: x, o: o.o, k: o.k, e: e || '' }; }
  var ri = function (r, a, b) { return a + Math.floor(r() * (b - a + 1)); };
  var pick = function (r, a) { return a[Math.floor(r() * a.length)]; };
  var Pr = function () { return T.prompts; };

  var GEN = {
    add20: function (r) {
      if (r() < 0.5) { var a = ri(r, 2, 15), b = ri(r, 1, 20 - a), s = a + b; return Q(Pr().calc, a + ' + ' + b, optsP(r, s, [s + 1, s - 1, s + 2, s - 2, s + 10])); }
      var c = ri(r, 6, 20), e = ri(r, 1, c - 1), t = c - e; return Q(Pr().calc, c + ' - ' + e, optsP(r, t, [t + 1, t - 1, c + e > 30 ? t + 2 : c + e, t - 2]));
    },
    add100: function (r) {
      if (r() < 0.5) {
        var a = ri(r, 12, 79), b = ri(r, 5, 99 - a), s = a + b, nc = (a % 10 + b % 10) % 10 + 10 * (Math.floor(a / 10) + Math.floor(b / 10));
        return Q(Pr().calc, a + ' + ' + b, optsP(r, s, [nc !== s ? nc : s + 10, s - 10, s + 1, s - 1]), vi ? 'Cộng hàng đơn vị trước, nhớ 1 sang hàng chục nếu tổng từ 10 trở lên.' : 'Add the ones first; carry 1 to the tens when they make 10 or more.');
      }
      var c = ri(r, 30, 99), e = ri(r, 11, c - 5), t = c - e, br = 10 * (Math.floor(c / 10) - Math.floor(e / 10)) + Math.abs(c % 10 - e % 10);
      return Q(Pr().calc, c + ' - ' + e, optsP(r, t, [br !== t ? br : t + 10, t - 10, t + 1, t - 1]), vi ? 'Hàng đơn vị không đủ trừ thì mượn 1 chục, rồi trả lại ở hàng chục.' : 'If the ones are too small, exchange a ten for ten ones first.');
    },
    times: function (r) {
      var a = ri(r, 2, 9), b = ri(r, 2, 10), p = a * b;
      if (r() < 0.6) return Q(Pr().calc, a + ' ' + TIMES + ' ' + b, optsP(r, p, [a * (b + 1), a * (b - 1), p + 1, (a + 1) * b, p - 1]));
      return Q(Pr().calc, p + ' ' + DIV + ' ' + a, optsP(r, b, [b + 1, b - 1, a === b ? b + 2 : a, b + 2]), vi ? 'Nhẩm ngược bảng nhân: ' + a + ' nhân mấy bằng ' + p + '?' : 'Think backwards: ' + a + ' times what is ' + p + '?');
    },
    mul: function (r) {
      var b = ri(r, 2, 9);
      if (r() < 0.55) { var a = ri(r, 12, 499), p = a * b; return Q(Pr().calc, a + ' ' + TIMES + ' ' + b, optsP(r, p, [p + b, p - b, p + 10, p - 10, p + 100])); }
      var q = ri(r, 12, 199), n = q * b; return Q(Pr().calc, n + ' ' + DIV + ' ' + b, optsP(r, q, [q + 1, q - 1, q + 10, q - 10]), vi ? 'Thử lại bằng phép nhân: ' + q + ' × ' + b + ' = ' + n + '.' : 'Check by multiplying: ' + q + ' × ' + b + ' = ' + n + '.');
    },
    frac: function (r) {
      var t = r();
      if (t < 0.35) {
        var b = ri(r, 3, 12), a = ri(r, 1, b - 1), c = ri(r, 1, b - 1), sub = r() < 0.4 && a > c, s = sub ? a - c : a + c;
        // wrong answers that children really give (adding the denominators too, mixing up + and −), never equal in value to the answer
        var ds = [[s, 2 * b], [sub ? a + c : Math.abs(a - c), b], [s + 1, b], [a * c, b], [s, b + 1], [s > 1 ? s - 1 : s + 2, b]]
          .filter(function (x) { return x[0] * b !== s * x[1]; }).map(function (x) { return fr(x[0], x[1]); });
        return Q(Pr().calc, fr(a, b) + (sub ? ' - ' : ' + ') + fr(c, b), sopts(r, fr(s, b), ds), vi ? 'Cùng mẫu số: giữ nguyên mẫu, ' + (sub ? 'trừ' : 'cộng') + ' các tử số.' : 'Same denominator: keep it and ' + (sub ? 'subtract' : 'add') + ' the numerators.');
      }
      if (t < 0.7) {
        var den = ri(r, 2, 9), num = ri(r, 1, den - 1); while (gcd(num, den) !== 1) num = ri(r, 1, den - 1);
        var k = ri(r, 2, 6), ds2 = [fr(num, k * den), fr(k * num, den), fr(num + 1, den + 1), fr(num, den + 1)];
        return Q(Pr().simp, fr(k * num, k * den), sopts(r, fr(num, den), ds2), vi ? 'Chia cả tử và mẫu cho ' + k + '.' : 'Divide the top and bottom by ' + k + '.');
      }
      var dd = ri(r, 2, 8), nn = ri(r, 1, dd - 1), m = ri(r, 2, 12), whole = dd * m, ans = nn * m;
      return Q(Pr().calc, fr(nn, dd) + '\\text{ ' + Pr().of + ' }' + whole, optsP(r, ans, [m, ans + nn, whole - ans === ans ? ans + 1 : whole - ans, ans - 1]), vi ? 'Lấy ' + whole + ' chia ' + dd + ' rồi nhân ' + nn + '.' : 'Divide ' + whole + ' by ' + dd + ', then multiply by ' + nn + '.');
    },
    dec: function (r) {
      var t = r();
      if (t < 0.4) {
        var A = ri(r, 11, 199), B = ri(r, 11, 199), sub = r() < 0.4 && A > B, S = sub ? A - B : A + B;
        return Q(Pr().calc, N(A / 10) + (sub ? ' - ' : ' + ') + N(B / 10), optsP(r, S / 10, [S / 10 + 1, S / 10 - 0.1, S / 10 + 0.1, S]), vi ? 'Đặt thẳng dấu phẩy, tính như số tự nhiên.' : 'Line up the decimal points and work as with whole numbers.');
      }
      if (t < 0.7) {
        var x = ri(r, 101, 9999) / 100, f = pick(r, [10, 100, 1000]), mul = r() < 0.6, y = mul ? x * f : x / f;
        return Q(Pr().calc, N(x) + ' ' + (mul ? TIMES : DIV) + ' ' + f, optsP(r, y, mul ? [x * f * 10, x * f / 10, x + f] : [x / f * 10, x / f / 10, x * f]), vi ? (mul ? 'Nhân với ' + f + ': dời dấu phẩy sang phải ' + (String(f).length - 1) + ' chữ số.' : 'Chia cho ' + f + ': dời dấu phẩy sang trái ' + (String(f).length - 1) + ' chữ số.') : 'Move the decimal point ' + (String(f).length - 1) + ' places to the ' + (mul ? 'right.' : 'left.'));
      }
      var p = pick(r, [10, 20, 25, 50, 75, 5]), w = 20 * ri(r, 1, 20), a = p * w / 100;
      return Q(Pr().calc, p + '\\%\\text{ ' + Pr().of + ' }' + w, optsP(r, a, [p * w / 10, w - a, a + p, a * 2]), vi ? p + '% của ' + w + ' = ' + w + ' × ' + p + ' : 100.' : p + '% of ' + w + ' = ' + w + ' × ' + p + ' ÷ 100.');
    },
    int: function (r) {
      var a = ri(r, -20, 20) || 7, b = ri(r, -15, 15) || -4, t = r(), e = vi ? 'Nhớ quy tắc dấu: cộng hai số âm là số âm; nhân, chia hai số cùng dấu được số dương, khác dấu được số âm.' : 'Signs: two negatives add to a negative; same signs multiply to a positive, different signs to a negative.';
      if (t < 0.4) { var s = a + b; return Q(Pr().calc, N(a) + ' + ' + P(b), opts(r, s, [-s, a - b, s + 1, s - 1]), e); }
      if (t < 0.7) { var m = a - b; return Q(Pr().calc, N(a) + ' - ' + P(b), opts(r, m, [a + b, -m, m + 1, m - 1]), e); }
      var u = ri(r, -9, 9) || -3, v = ri(r, -9, 9) || 6;
      if (r() < 0.6) return Q(Pr().calc, P(u) + ' ' + TIMES + ' ' + P(v), opts(r, u * v, [-u * v, u + v, u * v + 1]), e);
      return Q(Pr().calc, P(u * v) + ' ' + DIV + ' ' + P(v), opts(r, u, [-u, u * v, u + 1]), e);
    },
    pow: function (r) {
      var t = r();
      if (t < 0.35) { var a = ri(r, 2, 5), n = ri(r, 2, a === 2 ? 8 : a === 3 ? 5 : 4), p = Math.pow(a, n); return Q(Pr().calc, a + '^{' + n + '}', opts(r, p, [a * n, Math.pow(a, n - 1), Math.pow(n, a), p + a]), vi ? a + '^' + n + ' là tích của ' + n + ' thừa số ' + a + ', không phải ' + a + ' × ' + n + '.' : a + '^' + n + ' means ' + n + ' factors of ' + a + ', not ' + a + ' × ' + n + '.'); }
      if (t < 0.7) {
        var x = ri(r, 2, 20), y = ri(r, 2, 9), z = ri(r, 2, 9), br = r() < 0.4;
        var ans = br ? (x + y) * z : x + y * z;
        return Q(Pr().calc, br ? '(' + x + ' + ' + y + ') ' + TIMES + ' ' + z : x + ' + ' + y + ' ' + TIMES + ' ' + z, opts(r, ans, br ? [x + y * z, x * z + y, ans + z] : [(x + y) * z, x * y + z, ans - 1]), vi ? 'Trong ngoặc trước, rồi nhân chia trước, cộng trừ sau.' : 'Brackets first, then multiply and divide, then add and subtract.');
      }
      var b = pick(r, ['2', '3', '5', 'a', 'x']), m = ri(r, 2, 7), k = ri(r, 2, 6), div = r() < 0.35 && m > k;
      var e0 = div ? m - k : m + k, es = (div ? [m + k, m * k, e0 + 1, Math.max(1, e0 - 1), m] : [m * k, Math.abs(m - k), e0 + 1, e0 - 1, m]).filter(function (e) { return e > 0 && e !== e0; });
      return Q(Pr().pow, b + '^{' + m + '}' + (div ? ' ' + DIV + ' ' : ' \\cdot ') + b + '^{' + k + '}', sopts(r, b + '^{' + e0 + '}', es.map(function (e) { return b + '^{' + e + '}'; })), vi ? (div ? 'Chia hai luỹ thừa cùng cơ số: giữ cơ số, trừ số mũ.' : 'Nhân hai luỹ thừa cùng cơ số: giữ cơ số, cộng số mũ.') : (div ? 'Same base, dividing: keep the base, subtract the powers.' : 'Same base, multiplying: keep the base, add the powers.'));
    },
    lin: function (r) {
      var x = ri(r, -9, 9) || 4, a = pick(r, [2, 3, 4, 5, 6, 7, 8, 9, -2, -3, -5]), b = ri(r, -20, 20) || 5, c = a * x + b;
      var lhs = (a === 1 ? '' : a === -1 ? '-' : a) + 'x' + (b < 0 ? ' - ' + (-b) : ' + ' + b);
      var wrong1 = (c + b) % a === 0 ? (c + b) / a : x + 2;
      return Q(Pr().x, lhs + ' = ' + c, opts(r, x, [-x, wrong1, x + 1, x - 1, c - b]), vi ? 'Chuyển ' + b + ' sang vế phải (đổi dấu): ' + (a === 1 ? '' : a) + 'x = ' + (c - b) + ', rồi chia cho ' + a + '.' : 'Move ' + b + ' across (change its sign): ' + a + 'x = ' + (c - b) + ', then divide by ' + a + '.');
    },
    alg: function (r) {
      var a = ri(r, 1, 9), v = pick(r, ['x', 'x', 'y']), t = r(), two = r() < 0.3, c = two ? 2 : 1, cv = (two ? '2' : '') + v, c2 = c * c, ac = a * c, aa = a * a;
      var P2 = function (x2, x1, x0) { return poly([[x2, 2], [x1, 1], [x0, 0]], v); };
      if (t < 0.3) return Q(Pr().exp, '(' + cv + ' + ' + a + ')^2', sopts(r, P2(c2, 2 * ac, aa), [P2(c2, 0, aa), P2(c2, ac, aa), P2(c, 2 * ac, aa), P2(c2, 2 * ac, 2 * a), P2(c2, -2 * ac, aa), P2(c2, 2 * ac, -aa)]), '(A + B)² = A² + 2AB + B².');
      if (t < 0.55) return Q(Pr().exp, '(' + cv + ' - ' + a + ')^2', sopts(r, P2(c2, -2 * ac, aa), [P2(c2, 0, -aa), P2(c2, 2 * ac, aa), P2(c2, -2 * ac, -aa), P2(c2, -ac, aa), P2(c2, 0, aa)]), '(A − B)² = A² − 2AB + B².');
      if (t < 0.8) return Q(Pr().exp, '(' + cv + ' - ' + a + ')(' + cv + ' + ' + a + ')', sopts(r, P2(c2, 0, -aa), [P2(c2, 0, aa), P2(c2, -2 * ac, aa), P2(c2, 2 * ac, -aa), P2(c2, 0, -2 * aa), P2(c2, 0, -a)]), '(A − B)(A + B) = A² − B².');
      return Q(Pr().fac, P2(c2, 0, -aa), sopts(r, '(' + cv + ' - ' + a + ')(' + cv + ' + ' + a + ')', ['(' + cv + ' - ' + a + ')^2', '(' + cv + ' + ' + a + ')^2', '(' + cv + ' - ' + aa + ')(' + cv + ' + ' + aa + ')', '(' + cv + ' - ' + (a + 1) + ')(' + cv + ' + ' + (a + 1) + ')']), 'A² − B² = (A − B)(A + B).');
    },
    sqrt: function (r) {
      var t = r();
      if (t < 0.3) { var n = ri(r, 2, 20); return Q(Pr().calc, '\\sqrt{' + n * n + '}', opts(r, n, [n + 1, n - 1, n * n / 2 === Math.round(n * n / 2) ? n * n / 2 : n + 2, 2 * n])); }
      if (t < 0.5) { var m = ri(r, 2, 15) * (r() < 0.5 ? -1 : 1); return Q(Pr().calc, '\\sqrt{' + P(m) + '^2}', opts(r, Math.abs(m), [-Math.abs(m), m * m, Math.abs(m) + 1]), vi ? '√(A²) = |A|, luôn không âm.' : '√(A²) = |A|, never negative.'); }
      if (t < 0.75) { var p = pick(r, [[2, 8], [2, 18], [3, 12], [5, 20], [2, 32], [3, 27], [6, 24], [2, 50]]), s = Math.sqrt(p[0] * p[1]); return Q(Pr().calc, '\\sqrt{' + p[0] + '} \\cdot \\sqrt{' + p[1] + '}', opts(r, s, [p[0] * p[1], s * 2, s + 1]), vi ? '√a · √b = √(ab) = √' + p[0] * p[1] + '.' : '√a · √b = √(ab) = √' + p[0] * p[1] + '.'); }
      var k = ri(r, 2, 6), q = pick(r, [2, 3, 5, 6, 7]);
      return Q(Pr().simp, '\\sqrt{' + k * k * q + '}', sopts(r, k + '\\sqrt{' + q + '}', [q + '\\sqrt{' + k + '}', k * k + '\\sqrt{' + q + '}', k + '\\sqrt{' + 2 * q + '}', (k + 1) + '\\sqrt{' + q + '}']), vi ? k * k * q + ' = ' + k * k + ' · ' + q + ', nên √' + k * k * q + ' = ' + k + '√' + q + '.' : k * k * q + ' = ' + k * k + ' × ' + q + ', so √' + k * k * q + ' = ' + k + '√' + q + '.');
    },
    trig: function (r) {
      var V = { '0': '0', h: '\\frac{1}{2}', r2: '\\frac{\\sqrt{2}}{2}', r3: '\\frac{\\sqrt{3}}{2}', '1': '1', s3: '\\sqrt{3}', t3: '\\frac{\\sqrt{3}}{3}' };
      var neg = function (k) { return k === '0' ? '0' : '-' + V[k]; };
      var A = [[0, '0', '1', '0'], [30, 'h', 'r3', 't3'], [45, 'r2', 'r2', '1'], [60, 'r3', 'h', 's3'], [90, '1', '0', null], [120, 'r3', '-h', '-s3'], [135, 'r2', '-r2', '-1'], [150, 'h', '-r3', '-t3'], [180, '0', '-1', '0']];
      var RAD = { 0: '0', 30: '\\frac{\\pi}{6}', 45: '\\frac{\\pi}{4}', 60: '\\frac{\\pi}{3}', 90: '\\frac{\\pi}{2}', 120: '\\frac{2\\pi}{3}', 135: '\\frac{3\\pi}{4}', 150: '\\frac{5\\pi}{6}', 180: '\\pi' };
      var row = A[ri(r, 0, A.length - 1)], fi = ri(r, 1, row[3] == null ? 2 : 3), val = row[fi];
      var show = function (k) { return k.charAt(0) === '-' ? neg(k.slice(1)) : V[k]; };
      var fn = ['', '\\sin', '\\cos', '\\tan'][fi], ang = r() < 0.4 && row[0] ? RAD[row[0]] : row[0] + '^\\circ';
      var pool = ['0', '1', 'h', 'r2', 'r3', 's3', 't3', '-h', '-r3', '-1'].map(show).filter(function (s) { return s !== show(val); });
      for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)), tt = pool[i]; pool[i] = pool[j]; pool[j] = tt; }
      return Q(Pr().val, fn + ' ' + ang, sopts(r, show(val), pool), vi ? 'Nhớ bảng giá trị: sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2; cos thì ngược lại; góc tù đổi dấu cos và tan.' : 'Remember: sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2; cos goes the other way; obtuse angles flip the sign of cos and tan.');
    },
    exp: function (r) {
      var t = r(), b = pick(r, [2, 3, 5, 10]), n = ri(r, 1, b === 2 ? 7 : b === 10 ? 5 : 4), p = Math.pow(b, n);
      if (t < 0.4) return Q(Pr().calc, '\\log_{' + b + '} ' + p, opts(r, n, [n + 1, n - 1, p / b, b * n]), vi ? b + '^' + n + ' = ' + p + ' nên log cơ số ' + b + ' của ' + p + ' bằng ' + n + '.' : b + '^' + n + ' = ' + p + ', so log base ' + b + ' of ' + p + ' is ' + n + '.');
      if (t < 0.7) return Q(Pr().x, b + '^x = ' + p, opts(r, n, [n + 1, n - 1, p / b, p - b]), vi ? 'Viết ' + p + ' = ' + b + '^' + n + ', so sánh số mũ.' : 'Write ' + p + ' as ' + b + '^' + n + ' and compare the powers.');
      if (t < 0.85) { var k = ri(r, 2, 9) * (r() < 0.3 ? -1 : 1); return Q(Pr().calc, '\\ln e^{' + k + '}', opts(r, k, [-k, k + 1, 1, Math.abs(k) * 2]), 'ln(eᵏ) = k.'); }
      var m = ri(r, 1, 4); return Q(Pr().calc, '\\log ' + N(Math.pow(10, -m)), opts(r, -m, [m, -m - 1, -m + 1, Math.pow(10, -m) * 10]), vi ? N(Math.pow(10, -m)).replace('{,}', ',') + ' = 10^(−' + m + ').' : '10^(−' + m + ') = ' + Math.pow(10, -m) + '.');
    },
    deriv: function (r) {
      var t = r();
      if (t < 0.35) { var n = ri(r, 2, 9); return Q(Pr().der, 'y = x^{' + n + '}', sopts(r, poly([[n, n - 1]], 'x'), [poly([[1, n - 1]], 'x'), poly([[n, n]], 'x'), poly([[n - 1, n - 1]], 'x'), poly([[n + 1, n + 1]], 'x')]), vi ? '(xⁿ)′ = n·xⁿ⁻¹.' : '(xⁿ)′ = n·xⁿ⁻¹.'); }
      if (t < 0.7) {
        var a = ri(r, 1, 6) * (r() < 0.3 ? -1 : 1), b = ri(r, -9, 9) || 3, c = ri(r, -9, 9);
        return Q(Pr().der, 'y = ' + poly([[a, 2], [b, 1], [c, 0]], 'x'), sopts(r, poly([[2 * a, 1], [b, 0]], 'x'), [poly([[a, 1], [b, 0]], 'x'), poly([[2 * a, 1], [b + c, 0]], 'x'), poly([[2 * a, 1]], 'x'), poly([[2 * a, 2], [b, 1]], 'x')]), vi ? 'Đạo hàm từng hạng tử: (ax²)′ = 2ax, (bx)′ = b, hằng số có đạo hàm 0.' : 'Term by term: (ax²)′ = 2ax, (bx)′ = b, a constant gives 0.');
      }
      var F = [['\\sin x', '\\cos x'], ['\\cos x', '-\\sin x'], ['e^x', 'e^x'], ['\\ln x', '\\frac{1}{x}'], ['\\sqrt{x}', '\\frac{1}{2\\sqrt{x}}'], ['\\frac{1}{x}', '-\\frac{1}{x^2}'], ['\\tan x', '\\frac{1}{\\cos^2 x}']];
      var f = pick(r, F), pool = ['\\cos x', '-\\sin x', '\\sin x', '-\\cos x', 'e^x', 'x e^{x-1}', '\\frac{1}{x}', '\\ln x', '\\frac{1}{2\\sqrt{x}}', '2\\sqrt{x}', '-\\frac{1}{x^2}', '\\frac{1}{x^2}', '\\frac{1}{\\cos^2 x}', '-\\frac{1}{\\sin^2 x}'].filter(function (s) { return s !== f[1]; });
      for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)), tt = pool[i]; pool[i] = pool[j]; pool[j] = tt; }
      return Q(Pr().der, 'y = ' + f[0], sopts(r, f[1], pool), vi ? 'Thuộc lòng bảng đạo hàm cơ bản: đây là một công thức trong bảng.' : 'This one comes straight from the table of basic derivatives.');
    }
  };
  var DECKS = [
    ['add20', '1', 'p', 'Cộng, trừ trong phạm vi 20', 'Add and subtract within 20'],
    ['add100', '2', 'p', 'Cộng, trừ trong phạm vi 100', 'Add and subtract within 100'],
    ['times', '2–3', 'p', 'Bảng nhân, bảng chia', 'Times tables and division facts'],
    ['mul', '3–4', 'p', 'Nhân, chia với số có một chữ số', 'Multiply and divide by one digit'],
    ['frac', '4–5', 'p', 'Phân số', 'Fractions'],
    ['dec', '5', 'p', 'Số thập phân, tỉ số phần trăm', 'Decimals and percentages'],
    ['int', '6', 'm', 'Số nguyên', 'Integers'],
    ['pow', '6–7', 'm', 'Luỹ thừa, thứ tự phép tính', 'Powers and order of operations'],
    ['lin', '7–8', 'm', 'Tìm x', 'Solve for x'],
    ['alg', '8', 'm', 'Hằng đẳng thức đáng nhớ', 'Special products'],
    ['sqrt', '9', 'm', 'Căn bậc hai', 'Square roots'],
    ['trig', '9–11', 'h', 'Giá trị lượng giác', 'Trig values'],
    ['exp', '11', 'h', 'Luỹ thừa, lôgarit', 'Exponents and logarithms'],
    ['deriv', '11–12', 'h', 'Đạo hàm', 'Derivatives']
  ].map(function (x) { return { id: x[0], g: x[1], lv: x[2], name: vi ? x[3] : x[4], t: x[2] === 'p' ? 20 : 25 }; });
  for (var gi = 1; gi <= 12; gi++) DECKS.push({ id: 'k' + gi, g: String(gi), lv: 'k', bank: 'g' + gi, name: vi ? 'Kiến thức lớp ' + gi : 'Grade ' + gi + ' knowledge', t: 45, kp: gi <= 5 });
  if (typeof window.lmArenaTest === 'function') window.lmArenaTest({ GEN: GEN, DECKS: DECKS, makeSet: function (a, b, c) { return makeSet(a, b, c); }, rng: rng });
  var deckOf = function (id) { for (var i = 0; i < DECKS.length; i++) if (DECKS[i].id === id) return DECKS[i]; return DECKS[0]; };
  var isPrimary = function (dk) { return dk.lv === 'p' || !!dk.kp; };
  var bankCache = {};
  function loadBank(dk) {
    if (bankCache[dk.bank]) return Promise.resolve(bankCache[dk.bank]);
    return fetch(BANK + dk.bank + '.json').then(function (r) { if (!r.ok) throw new Error('bank'); return r.json(); }).then(function (b) {
      var items = (b.items || []).filter(function (it) { return it.y === 'mc' && it.o && it.o.length === 4 && (!it.v || it.v === 'NB' || it.v === 'TH'); });
      if (items.length < 10) throw new Error('bank');
      bankCache[dk.bank] = items; return items;
    });
  }
  /* the questions of one game: the same seed and deck give the same questions on every phone */
  function makeSet(dk, seed, n) {
    var r = rng(seed);
    if (dk.bank) {
      var all = bankCache[dk.bank], idx = all.map(function (_, i) { return i; });
      for (var i = idx.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)), t = idx[i]; idx[i] = idx[j]; idx[j] = t; }
      return idx.slice(0, n).map(function (i) { var it = all[i]; return { h: it.q, o: it.o, k: 'ABCD'.indexOf(it.k), e: it.e || '', c: it.c || 1 }; });
    }
    var out = [], seen = {};
    for (var k = 0; out.length < n && k < n * 20; k++) { var q = GEN[dk.id](r); if (!seen[q.x] || k > n * 10) { seen[q.x] = 1; out.push(q); } }
    return out;
  }
  function needs(dk) { return dk.bank ? loadBank(dk) : Promise.resolve(); }

  /* ------------------------------------------------------------------ this device */
  var store = read('lm-arena', {}); if (!store || typeof store !== 'object') store = {};
  store.best = store.best || {}; store.runs = Array.isArray(store.runs) ? store.runs : []; store.dc = store.dc || {};
  function save() { lsSet('lm-arena', JSON.stringify(store)); }
  var me = { nick: lsGet('lm-nick') || '', av: lsGet('lm-av') || AVATARS[0] };
  if (AVATARS.indexOf(me.av) < 0) me.av = AVATARS[0];
  var pref = read('lm-arena-pref', {}) || {};
  var cur = { deck: deckOf(pref.deck || 'times'), mode: pref.mode === 'calm' ? 'calm' : 'speed', tab: pref.tab || '' };
  if (!cur.tab) cur.tab = cur.deck.lv;
  function savePref() { lsSet('lm-arena-pref', JSON.stringify({ deck: cur.deck.id, mode: cur.mode, tab: cur.tab })); }
  function groupsList() { var g = read('lm-groups', []); return Array.isArray(g) ? g : []; }
  function starsOf(score, n, mode) { var x = mode === 'calm' ? score / (100 * n) : score / (100 * n); var lim = mode === 'calm' ? [0.5, 0.8, 1] : [0.4, 0.65, 0.85]; return x >= lim[2] ? 3 : x >= lim[1] ? 2 : x >= lim[0] ? 1 : 0; }
  function starStr(k) { return '★★★'.slice(0, k) + '<i>' + '★★★'.slice(k) + '</i>'; }

  /* ------------------------------------------------------------------ home */
  var params = new URLSearchParams(location.search);
  app.hidden = false;
  function playing(on) { var art = app.closest('article'); if (art) art.classList.toggle('ar-playing', on); if (on) window.scrollTo(0, 0); }
  function home() {
    stopPoll(); clearTimers(); playing(false);
    var today = vnDay(Date.now()), dcKey = today + '|' + cur.deck.id, dc = store.dc[dcKey];
    var tabs = ['p', 'm', 'h', 'k'].map(function (L) { return '<button type="button" class="ar-tab' + (cur.tab === L ? ' on' : '') + '" data-tab="' + L + '">' + T.levels[L] + '</button>'; }).join('');
    var chips = DECKS.filter(function (x) { return x.lv === cur.tab; }).map(function (x) {
      var b = store.best[x.id] || {}, s = cur.mode === 'calm' ? b.c : b.s;
      return '<button type="button" class="ar-deck' + (x.id === cur.deck.id ? ' on' : '') + '" data-deck="' + x.id + '"><b>' + esc(x.name) + '</b><span>' + T.grade(x.g) + ' · ' + (s != null ? T.best + ' ' + s + ' <em class="ar-st">' + starStr(starsOf(s, 10, cur.mode)) + '</em>' : T.none) + '</span></button>';
    }).join('');
    app.innerHTML =
      '<section class="ar-me tool"><div class="ar-me-row"><span class="ar-av">' + me.av + '</span><div class="ar-me-txt"><b>' + (me.nick ? esc(me.nick) : '<span class="ar-ph">' + esc(T.nickPh) + '</span>') + '</b><small>' + T.me + '</small></div><button type="button" class="btn btn-ghost ar-sm" id="ar-me-edit">' + T.change + '</button></div><div id="ar-me-form" hidden></div></section>' +
      '<section class="tool ar-pickbox"><h2>' + T.pick + '</h2><div class="ar-tabs" role="tablist">' + tabs + '</div><div class="ar-decks">' + chips + '</div>' +
      '<h3>' + T.mode + '</h3><div class="ar-modes"><button type="button" class="ar-mode' + (cur.mode === 'speed' ? ' on' : '') + '" data-mode="speed">' + T.speed + '</button><button type="button" class="ar-mode' + (cur.mode === 'calm' ? ' on' : '') + '" data-mode="calm">' + T.calm + '</button></div>' +
      '<p class="tool-mini ar-tip">' + (cur.mode === 'calm' ? T.calmTip : T.speedTip(cur.deck.t)) + '</p>' +
      '<div class="ar-go"><button type="button" class="btn ar-big" id="ar-play">' + T.play + '</button><button type="button" class="btn btn-outline ar-big" id="ar-daily">' + T.daily + '</button></div>' +
      '<p class="tool-mini">' + (dc != null ? T.dailyDone(dc) : T.dailyTip) + '</p><p id="ar-msg" class="tool-msg" aria-live="polite"></p></section>' +
      '<section class="tool"><h2>' + T.roomH + '</h2><p class="tool-mini">' + T.roomP + '</p>' + (DB ?
        '<div class="ar-room-row"><button type="button" class="btn" id="ar-host">' + T.create + '</button><form id="ar-join" class="ar-join"><label class="sr" for="ar-pin">' + T.joinCode + '</label><input id="ar-pin" inputmode="numeric" maxlength="7" autocomplete="off" placeholder="' + T.joinCode + '"><button class="btn btn-outline" type="submit">' + T.join + '</button></form></div><p id="ar-rmsg" class="tool-msg" aria-live="polite"></p>'
        : '<p class="soon-note">' + T.noRooms + '</p>') + '</section>' +
      (GROUPS_URL ? '<section class="tool ar-grp"><h2>' + T.groupsH + '</h2><p class="tool-mini">' + T.groupsP + '</p><p><a class="btn btn-outline" href="' + esc(GROUPS_URL) + '">' + T.groupsGo + '</a></p></section>' : '') +
      '<details class="tool ar-how"><summary><b>' + T.howH + '</b></summary>' + T.howP + '</details>';
    $$('.ar-tab', app).forEach(function (b) { b.onclick = function () { cur.tab = b.getAttribute('data-tab'); var first = DECKS.filter(function (x) { return x.lv === cur.tab; })[0]; if (cur.deck.lv !== cur.tab) cur.deck = first; savePref(); home(); }; });
    $$('.ar-deck', app).forEach(function (b) { b.onclick = function () { cur.deck = deckOf(b.getAttribute('data-deck')); savePref(); home(); }; });
    $$('.ar-mode', app).forEach(function (b) { b.onclick = function () { cur.mode = b.getAttribute('data-mode'); savePref(); home(); }; });
    $('#ar-me-edit').onclick = function () { meForm($('#ar-me-form'), home); };
    $('#ar-play').onclick = function () { startSolo('solo'); };
    $('#ar-daily').onclick = function () { startSolo('daily'); };
    if (DB) {
      $('#ar-host').onclick = function () { if (!me.nick) { meForm($('#ar-me-form'), function () { hostForm(); }); $('#ar-rmsg').textContent = T.needNick; return; } hostForm(); };
      var pin0 = /^\d{6}$/.test(params.get('r') || '') ? params.get('r') : '';
      if (pin0) $('#ar-pin').value = pin0.slice(0, 3) + ' ' + pin0.slice(3);
      $('#ar-join').onsubmit = function (e) { e.preventDefault(); var p = $('#ar-pin').value.replace(/\D/g, ''); if (p.length !== 6) { $('#ar-rmsg').textContent = T.needCode; return; } if (!me.nick) { meForm($('#ar-me-form'), function () { joinRoom(p); }); $('#ar-rmsg').textContent = T.needNick; return; } joinRoom(p); };
    }
    if (!me.nick && params.get('r')) meForm($('#ar-me-form'), function () { joinRoom(params.get('r').replace(/\D/g, '')); });
  }
  function meForm(box, then) {
    box.hidden = false;
    box.innerHTML = '<div class="ar-me-f"><label>' + T.me + '<input id="ar-nick" maxlength="20" autocomplete="nickname" placeholder="' + esc(T.nickPh) + '" value="' + esc(me.nick) + '"></label><small>' + T.nickHint + '</small><div class="ar-avs">' +
      AVATARS.map(function (a) { return '<button type="button" class="ar-avb' + (a === me.av ? ' on' : '') + '" data-av="' + a + '" aria-label="' + a + '">' + a + '</button>'; }).join('') + '</div><button type="button" class="btn" id="ar-me-ok">OK</button></div>';
    var av = me.av;
    $$('.ar-avb', box).forEach(function (b) { b.onclick = function () { av = b.getAttribute('data-av'); $$('.ar-avb', box).forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    $('#ar-nick', box).focus();
    $('#ar-me-ok', box).onclick = function () {
      var n = $('#ar-nick', box).value.replace(/\s+/g, ' ').trim().slice(0, 20);
      if (!n) { $('#ar-nick', box).focus(); return; }
      me.nick = n; me.av = av; lsSet('lm-nick', n); lsSet('lm-nick-t', String(Date.now())); lsSet('lm-av', av);
      if (window.lmGroups) window.lmGroups.later();
      then();
    };
  }

  /* ------------------------------------------------------------------ one game (solo, daily, room) */
  var G = null, tick = 0, nextT = 0;
  function clearTimers() { cancelAnimationFrame(tick); clearTimeout(nextT); }
  function startSolo(kind) {
    var dk = cur.deck, msg = $('#ar-msg');
    if (msg) msg.textContent = dk.bank ? T.loadBank : '';
    needs(dk).then(function () {
      var seed = kind === 'daily' ? hash(vnDay(Date.now()) + '|' + dk.id) : newSeed();
      play({ kind: kind, deck: dk, mode: kind === 'daily' ? 'speed' : cur.mode, n: 10, seed: seed }, function (res) { result(res); });
    }, function () { if (msg) msg.textContent = T.bankErr; });
  }
  /* o = { kind, deck, mode, n, seed, room? }; done(result) when the last question is answered */
  function play(o, done, onStep) {
    clearTimers();
    var qs = makeSet(o.deck, o.seed, o.n), lim = o.deck.t * 1000;
    G = { o: o, qs: qs, i: 0, score: 0, right: 0, ans: [], done: done, step: onStep || function () {} };
    var p = isPrimary(o.deck);
    playing(true);
    app.innerHTML = '<div class="ar-play' + (o.mode === 'calm' ? ' calm' : '') + '"><div class="ar-bar"><span class="ar-n" id="ar-n"></span><span class="ar-sc" id="ar-sc">0</span><button type="button" class="ar-x" id="ar-quit" aria-label="' + T.quit + '">✕</button></div>' +
      (o.mode === 'speed' ? '<div class="ar-clock"><i id="ar-clock"></i></div>' : '') + '<div id="ar-card" class="ar-card"></div>' +
      '<div id="ar-opts" class="ar-opts"></div><div class="ar-low">' + (o.mode === 'speed' ? '<button type="button" class="btn btn-ghost" id="ar-skip">' + T.notSure + '</button>' : '<button type="button" class="btn btn-ghost" id="ar-skip">' + T.skipped + '</button>') + '<span id="ar-fb" class="ar-fb" aria-live="assertive"></span></div>' +
      (o.room ? '<div id="ar-mini" class="ar-mini"></div>' : '') + '</div>';
    $('#ar-quit').onclick = function () {
      if (o.room && R && R.host) { stopGame(); onRoom(); return; }       // the host stops playing but keeps running the room
      if (o.room ? confirm(T.leave + '?') : confirm(T.sureQuit)) { clearTimers(); if (o.room) leaveRoom(); else home(); }
    };
    $('#ar-skip').onclick = function () { answer(-1); };
    if (o.room) renderMini();
    show();
    function show() {
      var q = qs[G.i];
      $('#ar-n').textContent = T.q + ' ' + (G.i + 1) + '/' + qs.length;
      $('#ar-sc').textContent = G.score + ' ' + T.score;
      $('#ar-fb').textContent = ''; $('#ar-fb').className = 'ar-fb';
      $('#ar-card').innerHTML = q.h != null ? '<div class="ar-h">' + q.h + '</div>' : '<p class="ar-p">' + esc(q.p) + '</p><div class="ar-x2"><span class="tex" data-d>' + esc(q.x) + '</span></div>';
      $('#ar-opts').className = 'ar-opts' + (q.h != null && (q.c || 1) === 1 ? ' stack' : '');      // long options of a bank question: one per line
      $('#ar-opts').innerHTML = q.o.map(function (s, k) { return '<button type="button" class="ar-o" data-k="' + k + '"><b class="ar-ok">' + 'ABCD'[k] + '</b><span class="ar-ot">' + (q.h != null ? s : tex(s)) + '</span></button>'; }).join('');
      drawMath(app);
      $$('.ar-o', app).forEach(function (b) { b.onclick = function () { answer(+b.getAttribute('data-k')); }; });
      G.t0 = performance.now(); G.locked = false;
      if (o.mode === 'speed') {
        var bar = $('#ar-clock');
        var run = function () {
          var left = Math.max(0, lim - (performance.now() - G.t0));
          bar.style.width = (100 * left / lim) + '%'; bar.className = left < lim * 0.25 ? 'low' : '';
          if (left <= 0) { answer(-2); return; }
          tick = requestAnimationFrame(run);
        };
        tick = requestAnimationFrame(run);
      }
    }
    function answer(k) {
      if (G.locked) return; G.locked = true; cancelAnimationFrame(tick);
      var q = qs[G.i], ms = performance.now() - G.t0, left = Math.max(0, lim - ms), ok = k === q.k, pts = 0;
      if (o.mode === 'speed') { var v = Math.max(1, Math.round(100 * left / lim)); pts = k < 0 ? 0 : ok ? v : -v; } else pts = ok ? 100 : 0;
      G.score = Math.max(0, G.score + pts); if (ok) G.right++;
      G.ans.push({ k: k, ms: Math.round(ms), pts: pts });
      $$('.ar-o', app).forEach(function (b) { var j = +b.getAttribute('data-k'); b.disabled = true; if (j === q.k) b.classList.add('ok'); else if (j === k) b.classList.add('no'); });
      var fb = $('#ar-fb');
      fb.textContent = k === -2 ? T.timeUp : k === -1 ? '' : ok ? T.right + (o.mode === 'speed' ? ' +' + pts : '') : T.wrong + (o.mode === 'speed' ? ' ' + pts : '');
      fb.className = 'ar-fb ' + (ok ? 'ok' : k >= 0 ? 'no' : '');
      $('#ar-sc').textContent = G.score + ' ' + T.score;
      G.step(G);
      nextT = setTimeout(function () {
        G.i++;
        if (G.i < qs.length) show();
        else finish();
      }, ok ? 650 : 1500);
    }
    function finish() {
      var res = { o: o, qs: qs, ans: G.ans, score: G.score, right: G.right, n: qs.length };
      // keep the result on this device; today's challenge keeps its first go
      var b = store.best[o.deck.id] = store.best[o.deck.id] || {}, key = o.mode === 'calm' ? 'c' : 's';
      res.prev = o.n === 10 ? b[key] : null;
      if (o.n === 10 && (b[key] == null || res.score > b[key])) { res.record = b[key] != null; b[key] = res.score; }
      if (o.kind === 'daily') { var dk = vnDay(Date.now()) + '|' + o.deck.id; res.counted = store.dc[dk] == null; if (res.counted) store.dc[dk] = res.score; }
      store.runs.push({ t: Date.now(), k: o.deck.id, m: o.mode, w: o.kind, s: res.score, c: res.right, n: res.n });
      if (store.runs.length > 300) store.runs = store.runs.slice(-300);
      Object.keys(store.dc).forEach(function (k) { if (k.slice(0, 10) < vnDay(Date.now() - 14 * DAY)) delete store.dc[k]; });
      save();
      if (window.lmGroups) window.lmGroups.later(o.kind === 'daily' ? 800 : 4000);
      G.done(res);
    }
  }
  function lemonSay(res) {
    var p = isPrimary(res.o.deck), x = res.right / res.n, band = x >= 1 ? 0 : x >= 0.8 ? 1 : x >= 0.5 ? 2 : x >= 0.3 ? 3 : 4;
    var arr = LEMON[band], s = arr[Math.floor(Math.random() * arr.length)], y = T.you(p);
    return s.replace(/\{y\}/g, y).replace(/\{Y\}/g, y.charAt(0).toUpperCase() + y.slice(1));
  }
  function reviewHtml(res) {
    return '<details class="ar-rev"><summary>' + T.review + '</summary><ol>' + res.qs.map(function (q, i) {
      var a = res.ans[i] || { k: -1 }, ok = a.k === q.k, opt = function (k) { return k < 0 ? '<i>' + (k === -1 ? T.notSure.replace('❓ ', '') : k === -2 ? T.timeUp : T.noAns) + '</i>' : '<b>' + 'ABCD'[k] + '.</b> ' + (q.h != null ? q.o[k] : tex(q.o[k])); };
      return '<li class="' + (ok ? 'ok' : 'no') + '"><div class="ar-rq">' + (q.h != null ? q.h : esc(q.p) + ' ' + tex(q.x)) + '</div><p class="ar-ra">' + (ok ? '✅ ' : '❌ ') + T.yours + ': ' + opt(a.k) + (ok ? '' : ' · ' + T.key + ': ' + opt(q.k)) + (a.pts && res.o.mode === 'speed' ? ' <span class="ar-pt ' + (a.pts > 0 ? 'up' : 'down') + '">' + (a.pts > 0 ? '+' : '−') + Math.abs(a.pts) + ' ' + T.score + '</span>' : '') + '</p>' + (q.e && !ok ? '<div class="ar-re">💡 ' + (q.h != null ? q.e : esc(q.e)) + '</div>' : '') + '</li>';
    }).join('') + '</ol></details>';
  }
  function notesHtml(res) {
    var p = isPrimary(res.o.deck), hasty = 0, skips = 0;
    res.ans.forEach(function (a, i) { if (a.k >= 0 && a.k !== res.qs[i].k && a.ms < 3000) hasty++; if (a.k === -1) skips++; });
    var out = [];
    if (res.o.mode === 'speed' && hasty >= 2) out.push(T.hasty(hasty, p));
    if (skips >= 2) out.push(T.skipsNote(skips, p));
    return out.map(function (s) { return '<p class="ar-note">' + esc(s) + '</p>'; }).join('');
  }
  function mascot() { var art = $('.foot-mark'); if (!art) return ''; var x = art.cloneNode(true); x.setAttribute('class', 'fb-mascot'); var w = d.createElement('div'); w.appendChild(x); return w.innerHTML; }
  function result(res) {
    playing(false);
    var k = starsOf(res.score, res.n, res.o.mode);
    app.innerHTML = '<section class="ar-res tool"><div class="ar-res-top">' + mascot() + '<div><p class="ar-res-s">' + T.resH(res.score) + '</p><p class="ar-res-c">' + T.resC(res.right, res.n) + ' · <span class="ar-st">' + starStr(k) + '</span> ' + T.stars[k] + '</p>' +
      (res.record ? '<p class="ar-rec">' + T.newBest + '</p>' : res.prev != null ? '<p class="tool-mini">' + T.bestWas(Math.max(res.prev, res.score)) + '</p>' : '') + '</div></div>' +
      '<p class="ar-lemon">' + esc(lemonSay(res)) + '</p>' + notesHtml(res) +
      (res.o.kind === 'daily' ? '<p class="tool-mini">' + (res.counted ? T.dailyCounted : T.dailyPractice) + '</p>' : '') +
      '<div class="ar-go"><button type="button" class="btn" id="ar-again">' + T.again + '</button><button type="button" class="btn btn-outline" id="ar-home">' + T.other + '</button>' + (DB ? '<button type="button" class="btn btn-ghost" id="ar-toroom">' + T.toRoom + '</button>' : '') + '</div>' +
      reviewHtml(res) + '</section>';
    drawMath(app);
    $('#ar-again').onclick = function () { startSolo(res.o.kind); };
    $('#ar-home').onclick = home;
    if ($('#ar-toroom')) $('#ar-toroom').onclick = function () { if (!me.nick) { home(); return; } hostForm(); };
    window.scrollTo(0, 0);
  }

  /* ------------------------------------------------------------------ rooms (Firebase REST, branch live/<6 digits>) */
  function fb(method, path, body) {
    return fetch(DB + '/live/' + path + '.json', { method: method, body: body === undefined ? undefined : JSON.stringify(body) }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
  }
  var R = null, pollT = 0;
  function stopPoll() { clearTimeout(pollT); pollT = 0; }
  function pid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); }
  function keepRoom() { if (R) lsSet('lm-arena-room', JSON.stringify({ pin: R.pin, id: R.id, host: R.host })); else lsSet('lm-arena-room', ''); }
  function hostForm() {
    stopPoll(); clearTimers();
    var gl = groupsList(), dk = cur.deck;
    app.innerHTML = '<section class="tool"><h2>' + T.hostH + '</h2>' +
      '<div class="tool-row"><label class="grow">' + T.deckOf + '<select id="ar-hd">' + ['p', 'm', 'h', 'k'].map(function (L) { return '<optgroup label="' + T.levels[L] + '">' + DECKS.filter(function (x) { return x.lv === L; }).map(function (x) { return '<option value="' + x.id + '"' + (x.id === dk.id ? ' selected' : '') + '>' + esc(x.name) + ' (' + T.grade(x.g) + ')</option>'; }).join('') + '</optgroup>'; }).join('') + '</select></label></div>' +
      '<div class="tool-row"><label>' + T.modeOf + '<select id="ar-hm"><option value="speed"' + (cur.mode === 'speed' ? ' selected' : '') + '>' + T.speed + '</option><option value="calm"' + (cur.mode === 'calm' ? ' selected' : '') + '>' + T.calm + '</option></select></label>' +
      '<label>' + T.count + '<select id="ar-hn"><option>10</option><option>15</option><option>20</option></select></label>' +
      (gl.length ? '<label>' + T.tellGroup + '<select id="ar-hg"><option value="">' + T.noGroup + '</option>' + gl.map(function (g, i) { return '<option value="' + i + '"' + (params.get('g') && params.get('g').replace(/\W/g, '').toUpperCase() === String(g.code).replace(/\W/g, '') ? ' selected' : '') + '>' + esc(g.name || g.code) + '</option>'; }).join('') + '</select></label>' : '') + '</div>' +
      '<label class="tool-check"><input type="checkbox" id="ar-hp" checked> ' + T.iPlay + '</label>' +
      '<div class="tool-actions"><button type="button" class="btn" id="ar-hopen">' + T.open + '</button><button type="button" class="btn btn-ghost" id="ar-hcancel">' + T.cancel + '</button></div><p id="ar-hmsg" class="tool-msg" aria-live="polite"></p></section>';
    $('#ar-hcancel').onclick = home;
    $('#ar-hopen').onclick = function () {
      var deck = deckOf($('#ar-hd').value), mode = $('#ar-hm').value, n = +$('#ar-hn').value, plays = $('#ar-hp').checked, gsel = $('#ar-hg') ? $('#ar-hg').value : '';
      var msg = $('#ar-hmsg'); msg.textContent = deck.bank ? T.loadBank : '…';
      needs(deck).then(function () { return freePin(0); }).then(function (pin) {
        var id = pid(), meta = { state: 'lobby', bank: 'arena', ids: [0], kind: 'arena', deck: deck.id, mode: mode, n: n, seed: 0, r: 0, host: id, hp: plays, lang: vi ? 'vi' : 'en', t: { '.sv': 'timestamp' } };
        return fb('PUT', pin + '/meta', meta).then(function () { return plays ? fb('PATCH', pin + '/p/' + id, { n: me.nick, av: me.av, s: 0, i: 0, c: 0, d: false, r: 0 }) : null; }).then(function () {
          R = { pin: pin, id: id, host: true, plays: plays, meta: null, players: {}, round: -1 }; keepRoom();
          cur.deck = deck; cur.mode = mode; savePref();
          if (gsel !== '' && window.lmGroups) window.lmGroups.room(gl[+gsel], pin, deck.id);
          poll(true);
        });
      }).catch(function (e) { msg.textContent = e && e.message === 'bank' ? T.bankErr : T.err; });
    };
  }
  function freePin(k) {
    var pin = String(100000 + Math.floor(Math.random() * 900000));
    return fb('GET', pin + '/meta').then(function (m) { if (m && k < 6) return freePin(k + 1); return pin; });
  }
  function joinRoom(pin) {
    stopPoll();
    var msg = $('#ar-rmsg') || $('#ar-msg');
    if (msg) msg.textContent = '…';
    fb('GET', pin).then(function (room) {
      var m = room && room.meta;
      if (!m) { if (msg) msg.textContent = T.noRoom; return; }
      if (m.kind !== 'arena') { if (msg) msg.innerHTML = esc(T.isClass) + ' <a href="' + esc(app.getAttribute('data-join') || '#') + '?m=' + pin + '">' + T.toClass + ' →</a>'; return; }
      var old = read('lm-arena-room', null), id = old && old.pin === pin ? old.id : pid();
      var ps = room.p || {};
      if (!ps[id] && Object.keys(ps).length >= MAXP) { if (msg) msg.textContent = T.full; return; }
      var dk = deckOf(m.deck);
      return needs(dk).then(function () {
        return fb('PATCH', pin + '/p/' + id, ps[id] ? { n: me.nick, av: me.av } : { n: me.nick, av: me.av, s: 0, i: 0, c: 0, d: false, r: -1 });
      }).then(function () {
        R = { pin: pin, id: id, host: !!(old && old.pin === pin && old.host), plays: true, meta: null, players: {}, round: ps[id] ? ps[id].r : -1 };
        if (R.host) R.plays = !!m.hp;
        keepRoom(); poll(true);
      });
    }).catch(function (e) { if (msg) msg.textContent = e && e.message === 'bank' ? T.bankErr : T.err; });
  }
  function leaveRoom() {
    stopPoll(); clearTimers();
    if (R && !R.host) fb('DELETE', R.pin + '/p/' + R.id).catch(function () {});
    R = null; keepRoom(); home();
  }
  function closeRoom() {
    stopPoll(); clearTimers();
    var pin = R && R.pin; R = null; keepRoom();
    if (pin) fb('DELETE', pin).catch(function () {});
    home();
  }
  /* everyone asks for the whole room every 2 seconds (no open connection is kept, so many rooms fit the free plan) */
  function poll(now) {
    stopPoll();
    var go = function () {
      if (!R) return;
      fb('GET', R.pin).then(function (room) {
        conn(true);
        if (!R) return;
        if (!room || !room.meta) { gone(T.gone); return; }
        R.meta = room.meta; R.players = room.p || {};
        if (!R.host && R.plays && !R.players[R.id]) { gone(T.kicked); return; }
        onRoom();
      }, function () { conn(false); }).then(function () { if (R) pollT = setTimeout(go, POLL); });
    };
    if (now) go(); else pollT = setTimeout(go, POLL);
  }
  function conn(ok) { var w = $('#ar-lost'); if (w) w.hidden = ok; }
  function gone(text) { stopPoll(); clearTimers(); R = null; keepRoom(); home(); var m = $('#ar-rmsg'); if (m) m.textContent = text; }
  function list() {     // players of this room, best first; those who have not started this game count as 0
    var m = R.meta, out = Object.keys(R.players).map(function (k) { var p = R.players[k] || {}, inR = p.r === m.r; return { id: k, n: p.n || '?', av: AVATARS.indexOf(p.av) >= 0 ? p.av : '🍋', s: inR ? p.s || 0 : 0, i: inR ? p.i || 0 : 0, c: inR ? p.c || 0 : 0, d: inR && !!p.d, inR: inR }; });
    out.sort(function (a, b) { return b.s - a.s || b.c - a.c || a.n.localeCompare(b.n); });
    return out;
  }
  function boardHtml(big) {
    var m = R.meta, L = list();
    return '<ol class="ar-board' + (big ? ' big' : '') + '">' + L.map(function (p, k) {
      var pct = Math.round(100 * p.i / (m.n || 10));
      return '<li class="' + (p.id === R.id ? 'me' : '') + '"><span class="ar-bk">' + (k + 1) + '</span><span class="ar-bav">' + p.av + '</span><span class="ar-bn">' + esc(p.n) + '</span><span class="ar-bp"><i style="width:' + pct + '%"></i></span><b class="ar-bs">' + p.s + '</b>' +
        (R.host && m.state === 'lobby' && p.id !== R.id ? '<button type="button" class="ar-kick" data-kick="' + esc(p.id) + '" aria-label="' + T.kick + ' ' + esc(p.n) + '">✕</button>' : '') + '</li>';
    }).join('') + '</ol>';
  }
  function head() {
    var m = R.meta, dk = deckOf(m.deck);
    return '<div class="ar-rhead"><div><p class="ar-rcode">' + T.code + ' <b>' + R.pin.slice(0, 3) + ' ' + R.pin.slice(3) + '</b></p><p class="tool-mini">' + esc(dk.name) + ' · ' + (m.mode === 'calm' ? T.calm : T.speed) + ' · ' + m.n + ' ' + (vi ? 'câu' : 'questions') + (m.r ? ' · ' + T.round + ' ' + m.r : '') + '</p></div><span class="ar-rcount">' + T.players(Object.keys(R.players).length) + '</span></div><p id="ar-lost" class="jn-lost" hidden>' + T.lost + '</p>';
  }
  function onRoom() {
    var m = R.meta;
    if (m.state === 'run' && R.plays && R.round !== m.r) {       // a new game: everyone starts on the same seed
      R.round = m.r;
      if (R.host && !R.started) R.started = Date.now();
      countIn(function () {
        var dk = deckOf(m.deck);
        needs(dk).then(function () {
          play({ kind: 'room', deck: dk, mode: m.mode, n: m.n, seed: m.seed, room: true }, function (res) {
            R.res = res; push(res, true); onRoom();
          }, function (g) { push(g, false); });
        });
      });
      return;
    }
    if (G && G.o.room && m.state === 'run' && R.plays && G.i < G.qs.length) { renderMini(); hostAuto(); return; }
    if (G && G.o.room && G.i < G.qs.length && m.state !== 'run') stopGame();      // the host ended the game while this one was still playing
    if (R.cin) return;
    render();
    hostAuto();
  }
  function hostAuto() {       // the host's page ends the game when everyone is done, or when the time is surely over
    if (!R.host || R.meta.state !== 'run') return;
    var L = list().filter(function (p) { return p.inR || p.id === R.id; }), all = L.length && L.every(function (p) { return p.d; });
    var limit = R.meta.mode === 'calm' ? 15 * 60e3 : R.meta.n * deckOf(R.meta.deck).t * 1000 + 30e3;
    if (all || (R.started && Date.now() - R.started > limit)) endGame();
  }
  function endGame() { if (!R || !R.host) return; R.meta.state = 'end'; fb('PATCH', R.pin + '/meta', { state: 'end' }).catch(function () {}); render(); }
  function newGame() {
    if (!R || !R.host) return;
    R.started = Date.now(); R.res = null;
    fb('PATCH', R.pin + '/meta', { state: 'run', seed: newSeed(), r: (R.meta.r || 0) + 1, t0: { '.sv': 'timestamp' } }).then(function () { poll(true); }, function () { var m = $('#ar-hmsg'); if (m) m.textContent = T.err; });
  }
  var pushT = 0;
  function push(g, last) {
    var body = { n: me.nick, av: me.av, s: g.score, i: last ? g.n || g.qs.length : g.ans.length, c: g.right, d: !!last, r: R.round };
    clearTimeout(pushT);
    var send = function () { if (R) fb('PATCH', R.pin + '/p/' + R.id, body).catch(function () { pushT = setTimeout(send, 2000); }); };
    send();
  }
  /* a room game cut short: what was answered so far stands */
  function stopGame() {
    clearTimers();
    if (!G || !G.o.room) return;
    var n = G.ans.length, res = { o: G.o, qs: G.qs.slice(0, n), ans: G.ans, score: G.score, right: G.right, n: n };
    G.i = G.qs.length; R.res = res; push(res, true);
  }
  function renderMini() { var box = $('#ar-mini'); if (!box || !R || !R.meta) return; box.innerHTML = '<p class="ar-mini-h">' + T.board + '</p>' + boardHtml(false); }
  function countIn(then) {
    clearTimers(); R.cin = true;
    var n = 3;
    app.innerHTML = '<div class="ar-cin"><p>' + T.countIn + '</p><b id="ar-cin">3</b></div>';
    var step = function () { n--; if (n <= 0) { R.cin = false; then(); return; } var b = $('#ar-cin'); if (b) b.textContent = n; nextT = setTimeout(step, 800); };
    nextT = setTimeout(step, 800);
  }
  function render() {
    playing(false);
    var m = R.meta, L = list(), host = R.host, base = location.href.split('?')[0].split('#')[0];
    var lobby = m.state === 'lobby', run = m.state === 'run', end = m.state === 'end';
    var html = head();
    if (lobby) {
      html += host ? '<div class="ar-lobby"><div class="ar-qr">' + ($('#ar-qr') ? $('#ar-qr').innerHTML : '') + '</div><div><p>' + T.goTo + ' <b>' + esc(base.replace(/^https?:\/\//, '')) + '</b> ' + T.enter + '</p><p class="ar-pinbig">' + R.pin.slice(0, 3) + ' ' + R.pin.slice(3) + '</p><p class="tool-mini">' + T.scan + '</p><button type="button" class="tool-link" id="ar-copy">' + T.link + '</button></div></div>'
        : '<div class="jn-wait">' + mascot() + '<p><b>' + T.hi + ' ' + esc(me.nick) + '!</b><br>' + T.waitHost + '</p></div>';
      html += '<h3>' + (L.length ? T.players(L.length) : T.waitP) + '</h3>' + boardHtml(!R.plays);
    } else if (run) {
      if (R.plays && R.res && R.res.o && R.round === m.r) html += '<p class="ar-wait">' + T.waitEnd + '</p>';
      html += '<h3>' + T.board + '</h3>' + boardHtml(!R.plays);
    } else if (end) {
      var top = L.slice(0, 3), mine = -1;
      L.forEach(function (p, k) { if (p.id === R.id) mine = k; });
      html += '<div class="ar-podium">' + [1, 0, 2].map(function (k) { var p = top[k]; return p ? '<div class="ar-pd p' + (k + 1) + '"><span class="ar-pav">' + p.av + '</span><b>' + esc(p.n) + '</b><span>' + p.s + '</span><i>' + (k + 1) + '</i></div>' : '<div class="ar-pd empty"></div>'; }).join('') + '</div>';
      if (R.plays && mine >= 0) html += '<p class="ar-myrank">' + T.rank(mine + 1, L.length) + ' · ' + L[mine].s + ' ' + T.score + '</p>';
      if (R.res && R.res.o) html += '<p class="ar-lemon">' + esc(lemonSay(R.res)) + '</p>' + notesHtml(R.res);
      html += boardHtml(!R.plays);
      if (!host) html += '<p class="ar-wait">' + T.waitNext + '</p>';
      if (R.res && R.res.o) html += reviewHtml(R.res);
    }
    html += '<div class="tool-actions ar-ctl">' + (host
      ? (lobby ? '<button type="button" class="btn" id="ar-start"' + (L.length ? '' : ' disabled') + '>' + T.start + '</button>' : run ? '<button type="button" class="btn btn-outline" id="ar-end">' + T.end + '</button>' : '<button type="button" class="btn" id="ar-again2">' + T.rematch + '</button>') + '<button type="button" class="btn btn-ghost cr-danger" id="ar-close">' + T.close + '</button>'
      : '<button type="button" class="btn btn-ghost" id="ar-leave">' + T.leave + '</button>') + '</div><p id="ar-hmsg" class="tool-msg" aria-live="polite"></p>';
    app.innerHTML = '<section class="tool ar-room' + (!R.plays ? ' proj' : '') + '">' + html + '</section>';
    drawMath(app);
    $$('[data-kick]', app).forEach(function (b) { b.onclick = function () { fb('DELETE', R.pin + '/p/' + b.getAttribute('data-kick')).then(function () { poll(true); }); }; });
    if ($('#ar-start')) $('#ar-start').onclick = newGame;
    if ($('#ar-again2')) $('#ar-again2').onclick = newGame;
    if ($('#ar-end')) $('#ar-end').onclick = endGame;
    if ($('#ar-close')) $('#ar-close').onclick = function () { if (confirm(T.sureClose)) closeRoom(); };
    if ($('#ar-leave')) $('#ar-leave').onclick = leaveRoom;
    if ($('#ar-copy')) $('#ar-copy').onclick = function () { var u = base + '?r=' + R.pin, b = $('#ar-copy'); (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(function () { b.textContent = T.copied; }, function () { prompt('', u); }); };
  }

  /* ------------------------------------------------------------------ start */
  var back = read('lm-arena-room', null);
  if (DB && back && back.pin && /^\d{6}$/.test(back.pin) && (!params.get('r') || params.get('r') === back.pin)) {
    R = { pin: back.pin, id: back.id, host: !!back.host, plays: true, meta: null, players: {}, round: -1 };
    fb('GET', back.pin).then(function (room) {
      if (!room || !room.meta) { R = null; keepRoom(); home(); return; }
      R.plays = back.host ? !!room.meta.hp : true;
      var p = (room.p || {})[back.id]; R.round = p && p.d ? p.r : -1;      // a game left half-way starts again
      if (R.host) R.started = Date.now();
      poll(true);
    }, function () { R = null; home(); });
  } else if (DB && /^\d{6}$/.test((params.get('r') || '').replace(/\D/g, '')) && me.nick) {
    home(); joinRoom(params.get('r').replace(/\D/g, ''));
  } else {
    home();
    if (DB && params.get('host') === '1') { if (me.nick) hostForm(); else meForm($('#ar-me-form'), hostForm); }
  }
})();
