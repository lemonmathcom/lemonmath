/*
 * Lemonmath, "My classes" (teachers): /vi/lop-hoc/ and /classroom/.
 * A teacher account (email + password; a recovery code replaces password-reset e-mails), classes with a list of
 * students and a 4-digit personal code for each, homework built from the site's question bank with a time window
 * (for example 20:00 to 21:00), and a results board. Data lives in the classroom API (api/, Cloudflare Worker + D1).
 * The password never leaves the browser: it is turned into a PBKDF2 hash here, and the server stores only a keyed
 * hash of that. Students do the work on /vi/lam-bai/ (assets/hw.js).
 */
(function () {
  'use strict';
  var d = document, vi = d.documentElement.lang === 'vi', app = d.getElementById('cr-app');
  if (!app) return;
  var API = (app.getAttribute('data-api') || '').replace(/\/+$/, ''), BANK = app.getAttribute('data-bank'), HW = app.getAttribute('data-hw'), SC = app.getAttribute('data-sc'), KEY = 'lm-teacher';
  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function el(tag, cls, html) { var e = d.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fmt(x, n) { var p = Math.pow(10, n == null ? 2 : n), t = (Math.round(x * p) / p).toString(); return vi ? t.replace('.', ',') : t; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function drawMath(root) {
    if (!window.katex) return;
    $$('.tex', root).forEach(function (s) { try { window.katex.render(s.textContent, s, { displayMode: s.hasAttribute('data-d'), throwOnError: false, strict: 'ignore' }); s.classList.remove('tex'); } catch (e) {} });
  }
  var OK_TAGS = /^(p|span|b|strong|i|em|u|s|sub|sup|br|hr|ul|ol|li|table|thead|tbody|tfoot|tr|th|td|caption|div|small|code|figure|figcaption|img|svg|g|path|line|circle|ellipse|rect|polygon|polyline|text|tspan|defs|marker|title|desc|lineargradient|stop|clippath|use)$/;
  function safe(html) {
    var t = d.createElement('template'); t.innerHTML = String(html == null ? '' : html);
    (function walk(node) {
      Array.prototype.slice.call(node.children || node.childNodes).forEach(function (n) {
        if (n.nodeType !== 1) return;
        if (!OK_TAGS.test(n.localName.toLowerCase())) { n.remove(); return; }
        Array.prototype.slice.call(n.attributes).forEach(function (a) {
          var k = a.name.toLowerCase(), v = a.value.replace(/\s+/g, '').toLowerCase();
          if (/^on/.test(k) || ((k === 'href' || k === 'src' || k === 'xlink:href') && /^(javascript|vbscript|data:text)/.test(v)) || (k === 'style' && /url\(|expression|@import/.test(v))) n.removeAttribute(a.name);
        });
        walk(n);
      });
    })(t.content);
    return t.innerHTML;
  }
  function plain(html) { var t = d.createElement('template'); t.innerHTML = String(html || ''); return (t.content.textContent || '').replace(/\s+/g, ' ').trim(); }

  var T = vi ? {
    login: 'Đăng nhập', signup: 'Tạo tài khoản giáo viên', forgot: 'Quên mật khẩu', logout: 'Đăng xuất', account: 'Tài khoản',
    email: 'Email', pw: 'Mật khẩu', pw2: 'Nhập lại mật khẩu', pwNew: 'Mật khẩu mới', name: 'Họ tên (học sinh và phụ huynh sẽ thấy, ví dụ: Cô Nguyễn Thị Lan)', school: 'Trường (không bắt buộc)', rc: 'Mã khôi phục (12 kí tự)',
    agree: 'Tôi là giáo viên. Tôi đồng ý để Lemonmath lưu danh sách học sinh, mã cá nhân và bài làm của lớp tôi để chấm bài và báo kết quả cho tôi. Bài làm tự xóa 30 ngày sau khi bài đóng; tôi có thể xóa lớp hoặc cả tài khoản bất cứ lúc nào.',
    needAgree: 'Thầy cô vui lòng đánh dấu ô đồng ý ở trên.', short: 'Mật khẩu cần ít nhất 8 kí tự.', mismatch: 'Hai mật khẩu chưa giống nhau.', fill: 'Thầy cô điền đủ các ô nhé.',
    errs: { bad_login: 'Email hoặc mật khẩu chưa đúng.', bad_recovery: 'Email hoặc mã khôi phục chưa đúng.', email_taken: 'Email này đã có tài khoản. Thầy cô bấm Đăng nhập, hoặc Quên mật khẩu.', bad_email: 'Email chưa đúng dạng.', locked: 'Thử sai nhiều lần nên tài khoản tạm khóa 15 phút. Thầy cô thử lại sau nhé.', offline: 'Chưa kết nối được máy chủ. Thầy cô kiểm tra mạng rồi thử lại.', too_many_today: 'Hôm nay thầy cô đã giao nhiều bài, mai thử lại nhé.', bad_time: 'Giờ đóng phải sau giờ mở.', past: 'Giờ đóng đã qua rồi.', too_long: 'Mỗi bài mở tối đa 60 ngày.', no_students: 'Danh sách học sinh đang trống.', too_many_students: 'Mỗi lớp tối đa 80 học sinh.', too_many_classes: 'Mỗi tài khoản tối đa 40 lớp.', server: 'Máy chủ gặp lỗi. Thầy cô thử lại sau ít phút.' },
    rcTitle: 'Mã khôi phục của thầy cô', rcLead: 'Thầy cô chép lại mã này và cất ở chỗ an toàn (sổ tay, ghi chú trên điện thoại). Khi quên mật khẩu, mã này giúp đặt mật khẩu mới. Mã chỉ hiện một lần.', rcCopy: 'Sao chép mã', rcSave: 'Tải về máy', rcDone: 'Tôi đã lưu mã', copied: 'Đã sao chép',
    hello: 'Xin chào', classes: 'Lớp của tôi', noClass: 'Thầy cô chưa có lớp nào. Tạo lớp đầu tiên ở dưới.', newClass: 'Tạo lớp mới', className: 'Tên lớp (ví dụ: 10A1)', grade: 'Khối lớp', namesL: 'Danh sách học sinh, mỗi dòng một em, theo thứ tự trong sổ', namesPh: 'Nguyễn Văn An\nTrần Thị Bình\nLê Minh Châu', create: 'Tạo lớp',
    stu: 'học sinh', hws: 'bài đã giao', back: '← Lớp của tôi', backClass: '← Về lớp', tabHw: 'Bài đã giao', tabStu: 'Học sinh và mã cá nhân',
    newHw: '+ Giao bài mới', noHw: 'Lớp này chưa có bài nào.', code: 'Mã bài', st: { soon: 'Sắp mở', open: 'Đang mở', closed: 'Đã đóng' }, doneOf: function (a, b) { return a + '/' + b + ' em đã nộp'; },
    no: 'STT', sname: 'Họ và tên', pin: 'Mã cá nhân', act: '', newPin: 'Đổi mã', remove: 'Xóa khỏi lớp', rename: 'Sửa tên', addStu: 'Thêm học sinh (mỗi dòng một em)', add: 'Thêm vào lớp', printSlips: '🖨 In phiếu mã cá nhân', delClass: 'Xóa lớp này',
    sureRemove: function (n) { return 'Xóa ' + n + ' khỏi lớp? Bài đã làm của em vẫn giữ trong các bài cũ.'; }, sureNewPin: function (n) { return 'Đổi mã cá nhân của ' + n + '? Mã cũ sẽ không dùng được nữa.'; }, askName: 'Tên mới:',
    sureDelClass: function (n) { return 'Xóa lớp ' + n + ' cùng toàn bộ bài đã giao và bài làm của học sinh? Không thể hoàn tác.'; },
    slipHead: 'Lemonmath · Bài tập Toán', slipGo: 'Vào trang', slipPin: 'Mã cá nhân', slipNote: 'Giữ kín mã này, không đưa cho bạn khác.',
    pinNote: 'Mỗi em có một mã cá nhân 4 chữ số. Khi làm bài, em chọn tên mình rồi nhập mã, nên bạn khác không làm thay được. Thầy cô in phiếu và phát cho từng em (hoặc nhắn riêng cho phụ huynh).',
    hwTitle: 'Giao bài mới', hwName: 'Tên bài', hwNameV: function (d) { return 'Bài tập ngày ' + d; }, bank: 'Lấy câu hỏi từ', pickBank: 'Chọn…', lessons: 'Chọn bài học', all: 'Chọn tất cả', none: 'Bỏ chọn', count: 'Số câu', mc: 'Nhiều lựa chọn', tf: 'Đúng sai', sa: 'Trả lời ngắn', have: 'có',
    shuffleL: 'Trộn thứ tự câu và phương án cho từng em (giảm chép bài của nhau)', mode: 'Hình thức', modes: { home: 'Bài tập về nhà', class2: 'Luyện tập buổi 2 tại lớp', free: 'Luyện tập tự nguyện cùng bố mẹ' },
    freeNote: 'Lớp 1 đến lớp 5 học 2 buổi/ngày không giao bài tập về nhà, nên Lemonmath chỉ có hình thức tự nguyện: không hạn nộp gấp, bảng theo dõi không hiện điểm từng em.',
    when: 'Thời gian làm bài', from: 'Mở lúc', to: 'Đóng lúc', presets: ['Tối nay 20:00 đến 21:00', 'Đến 21:00 tối mai', 'Trong tiết này (45 phút)', 'Mở một tuần'],
    dur: 'Mỗi em được làm tối đa (phút, để 0 nếu được làm suốt khung giờ)', needPin: 'Yêu cầu mã cá nhân (nên bật với bài kiểm tra)', keyWhen: 'Học sinh xem đáp án và lời giải', keyOpts: { close: 'sau khi bài đóng (nên chọn với bài kiểm tra)', submit: 'ngay khi em nộp bài (hợp với bài luyện tập)' },
    est: function (m) { return 'Ước tính khoảng ' + m + ' phút làm bài.'; }, estLong: ' Hơi dài cho một buổi tối: nghiên cứu cho thấy bài về nhà ngắn, đều đặn hiệu quả hơn bài dài.', estWin: ' Khung giờ ngắn hơn thời gian ước tính.',
    give: 'Giao bài', needLesson: 'Thầy cô chọn ít nhất một bài học.', needCount: 'Thầy cô nhập số câu cho ít nhất một phần.', loadErr: 'Chưa tải được ngân hàng câu hỏi. Thầy cô kiểm tra mạng rồi thử lại.',
    shareH: 'Gửi bài cho học sinh', shareLead: 'Học sinh mở đường dẫn, chọn tên và nhập mã cá nhân. Hoặc vào trang làm bài rồi gõ mã bài.', link: 'Đường dẫn', copyLink: 'Sao chép đường dẫn', zalo: 'Tin nhắn mẫu để dán vào nhóm Zalo lớp', copyMsg: 'Sao chép tin nhắn', scan: 'Quét mã để mở trang làm bài, rồi gõ mã bài',
    msg: function (a, link, cls, t1, t2) { return '📚 ' + a.title + ' (lớp ' + cls + ')\nThời gian: từ ' + t1 + ' đến ' + t2 + (a.duration_min ? ', mỗi em làm tối đa ' + a.duration_min + ' phút' : '') + '.\nCác con mở đường dẫn: ' + link + '\nChọn đúng tên mình' + (a.require_pin ? ', nhập mã cá nhân 4 số cô đã phát' : '') + ', rồi làm bài. Nhớ ghi lời giải vào vở nhé!\nMã bài: ' + a.code + '\nNhờ bố mẹ nhắc con làm đúng giờ và khen con khi con cố gắng. Cảm ơn các bố mẹ!'; },
    board: 'Kết quả', refresh: 'Làm mới', closeNow: 'Đóng bài ngay', sureClose: 'Đóng bài ngay bây giờ? Em nào đang làm sẽ được tự nộp với các câu đã làm.', extend: 'Gia hạn', ext: ['+15 phút', '+1 giờ', '+1 ngày'], reshare: 'Gửi lại cho học sinh', delHw: 'Xóa bài', sureDelHw: 'Xóa bài này cùng bài làm của học sinh? Không thể hoàn tác.',
    copyScores: 'Chép bảng điểm', csv: 'Tải CSV', toSc: 'Viết nhận xét gửi phụ huynh →', status: 'Trạng thái', score: 'Điểm', time: 'Thời gian', q: 'Câu',
    s: { none: 'Chưa vào', work: 'Đang làm', done: 'Đã nộp', auto: 'Tự nộp khi hết giờ', late: 'Nộp muộn (mất mạng)', locked: 'Khóa (sai mã nhiều lần)' },
    reset: 'Cho làm lại', unlock: 'Mở khóa', sureReset: function (n) { return 'Xóa bài làm của ' + n + ' để em làm lại từ đầu?'; },
    sum: { n: 'Đã nộp', mean: 'Điểm trung bình', med: 'Trung vị', pass: 'Từ 5 trở lên', good: 'Từ 8 trở lên', work: 'Đang làm', none: 'Chưa vào' },
    fix: '3 câu nên chữa đầu giờ', fixLead: 'Những câu cả lớp làm đúng ít nhất, kèm phương án sai được chọn nhiều nhất (thường là chỗ hiểu nhầm cần gỡ).', right: '% đúng', chose: 'Các em chọn', perQ: 'Tỉ lệ đúng từng câu', topic: 'Chủ đề',
    freeHide: 'Hình thức tự nguyện: bảng chỉ hiện em nào đã luyện tập, không hiện điểm từng em.', waitOpen: 'Bài chưa mở. Bảng sẽ có số liệu khi học sinh bắt đầu làm.', mins: 'phút',
    delAcc: 'Xóa tài khoản', delAccLead: 'Xóa tài khoản sẽ xóa luôn mọi lớp, danh sách học sinh, bài đã giao và bài làm. Gõ email của thầy cô để xác nhận.', delAccGo: 'Xóa vĩnh viễn', sureDelAcc: 'Thầy cô chắc chắn muốn xóa tài khoản?',
    gName: function (n) { return 'Lớp ' + n; }, loading: 'Đang tải…'
  } : {
    login: 'Log in', signup: 'Create a teacher account', forgot: 'Forgot password', logout: 'Log out', account: 'Account',
    email: 'Email', pw: 'Password', pw2: 'Password again', pwNew: 'New password', name: 'Your name (students and parents will see it, e.g. Ms Lan Nguyen)', school: 'School (optional)', rc: 'Recovery code (12 characters)',
    agree: 'I am a teacher. I agree that Lemonmath keeps my class list, the personal codes and my students’ answers to mark the work and report to me. Answers are deleted 30 days after an assignment closes; I can delete a class or the whole account at any time.',
    needAgree: 'Please tick the agreement box above.', short: 'The password needs at least 8 characters.', mismatch: 'The two passwords are not the same.', fill: 'Please fill in every box.',
    errs: { bad_login: 'Email or password is not right.', bad_recovery: 'Email or recovery code is not right.', email_taken: 'This email already has an account. Log in, or use Forgot password.', bad_email: 'That email does not look right.', locked: 'Too many wrong tries, so the account is locked for 15 minutes. Please try later.', offline: 'Could not reach the server. Check your connection and try again.', too_many_today: 'You have set many assignments today. Please try tomorrow.', bad_time: 'The closing time must be after the opening time.', past: 'The closing time has already passed.', too_long: 'An assignment can stay open for at most 60 days.', no_students: 'The class list is empty.', too_many_students: 'A class can have at most 80 students.', too_many_classes: 'An account can have at most 40 classes.', server: 'The server hit an error. Please try again in a few minutes.' },
    rcTitle: 'Your recovery code', rcLead: 'Write this code down and keep it somewhere safe (a notebook, a note on your phone). If you forget your password, it lets you set a new one. It is shown only once.', rcCopy: 'Copy the code', rcSave: 'Save to this device', rcDone: 'I have saved the code', copied: 'Copied',
    hello: 'Hello', classes: 'My classes', noClass: 'You have no classes yet. Create the first one below.', newClass: 'Create a class', className: 'Class name (e.g. 10A1)', grade: 'Grade', namesL: 'Students, one per line, in register order', namesPh: 'Anna Nguyen\nBinh Tran\nChau Le', create: 'Create the class',
    stu: 'students', hws: 'assignments', back: '← My classes', backClass: '← Back to the class', tabHw: 'Assignments', tabStu: 'Students and personal codes',
    newHw: '+ New assignment', noHw: 'No assignments for this class yet.', code: 'Code', st: { soon: 'Opens soon', open: 'Open', closed: 'Closed' }, doneOf: function (a, b) { return a + '/' + b + ' handed in'; },
    no: 'No.', sname: 'Name', pin: 'Personal code', act: '', newPin: 'New code', remove: 'Remove', rename: 'Rename', addStu: 'Add students (one per line)', add: 'Add to the class', printSlips: '🖨 Print personal code slips', delClass: 'Delete this class',
    sureRemove: function (n) { return 'Remove ' + n + ' from the class? Their work in earlier assignments is kept.'; }, sureNewPin: function (n) { return 'Give ' + n + ' a new personal code? The old one will stop working.'; }, askName: 'New name:',
    sureDelClass: function (n) { return 'Delete class ' + n + ' with all its assignments and the students’ work? This cannot be undone.'; },
    slipHead: 'Lemonmath · Maths assignments', slipGo: 'Go to', slipPin: 'Personal code', slipNote: 'Keep this code to yourself.',
    pinNote: 'Each student has a 4-digit personal code. To start an assignment they choose their name and type the code, so nobody else can do it for them. Print the slips and hand them out (or message them to parents).',
    hwTitle: 'New assignment', hwName: 'Title', hwNameV: function (d) { return 'Homework for ' + d; }, bank: 'Questions from', pickBank: 'Choose…', lessons: 'Choose lessons', all: 'Select all', none: 'Clear', count: 'Number of questions', mc: 'Multiple choice', tf: 'True or false', sa: 'Short answer', have: 'available',
    shuffleL: 'Shuffle the questions and options for each student (makes copying harder)', mode: 'Type', modes: { home: 'Homework', class2: 'Practice in class', free: 'Optional practice with parents' },
    freeNote: 'For grades 1 to 5 Lemonmath offers optional practice only: no tight deadline, and the board does not show each child’s score.',
    when: 'When', from: 'Opens', to: 'Closes', presets: ['Tonight 20:00 to 21:00', 'Until 21:00 tomorrow', 'This lesson (45 minutes)', 'Open for a week'],
    dur: 'Time allowed per student (minutes, 0 = the whole window)', needPin: 'Require the personal code (recommended for tests)', keyWhen: 'Students see answers and explanations', keyOpts: { close: 'after the assignment closes (best for tests)', submit: 'as soon as they hand in (good for practice)' },
    est: function (m) { return 'About ' + m + ' minutes of work.'; }, estLong: ' Rather long for one evening: short, regular homework works better than long homework.', estWin: ' The window is shorter than the estimated time.',
    give: 'Set the assignment', needLesson: 'Please choose at least one lesson.', needCount: 'Enter a number of questions for at least one part.', loadErr: 'The question bank could not be loaded. Check your connection and try again.',
    shareH: 'Send it to your students', shareLead: 'Students open the link, choose their name and type their personal code. Or they open the homework page and type the code.', link: 'Link', copyLink: 'Copy the link', zalo: 'A message to paste into the class group', copyMsg: 'Copy the message', scan: 'Scan to open the homework page, then type the code',
    msg: function (a, link, cls, t1, t2) { return '📚 ' + a.title + ' (class ' + cls + ')\nWhen: ' + t1 + ' to ' + t2 + (a.duration_min ? ', up to ' + a.duration_min + ' minutes each' : '') + '.\nOpen: ' + link + '\nChoose your name' + (a.require_pin ? ', type your 4-digit personal code' : '') + ', then start. Remember to write your working in your book!\nCode: ' + a.code + '\nParents, please remind your child of the time and praise the effort. Thank you!'; },
    board: 'Results', refresh: 'Refresh', closeNow: 'Close now', sureClose: 'Close the assignment now? Students still working are handed in with what they have.', extend: 'Extend', ext: ['+15 min', '+1 hour', '+1 day'], reshare: 'Send to students again', delHw: 'Delete', sureDelHw: 'Delete this assignment and the students’ work? This cannot be undone.',
    copyScores: 'Copy scores', csv: 'Download CSV', toSc: 'Write notes for parents →', status: 'Status', score: 'Score', time: 'Time', q: 'Q',
    s: { none: 'Not started', work: 'Working', done: 'Handed in', auto: 'Handed in when time ran out', late: 'Late (no connection)', locked: 'Locked (wrong code too often)' },
    reset: 'Let them start again', unlock: 'Unlock', sureReset: function (n) { return 'Delete ' + n + '’s work so they can start again?'; },
    sum: { n: 'Handed in', mean: 'Mean', med: 'Median', pass: '5 or above', good: '8 or above', work: 'Working', none: 'Not started' },
    fix: '3 questions to go over in class', fixLead: 'The questions the class got right least often, with the wrong option chosen most (usually the misconception to clear up).', right: '% right', chose: 'Chosen', perQ: 'Right answers per question', topic: 'Topic',
    freeHide: 'Optional practice: the board shows who has practised, not each child’s score.', waitOpen: 'Not open yet. The board fills in when students start.', mins: 'min',
    delAcc: 'Delete account', delAccLead: 'Deleting the account deletes every class, class list, assignment and all students’ work. Type your email to confirm.', delAccGo: 'Delete for good', sureDelAcc: 'Are you sure you want to delete the account?',
    gName: function (n) { return 'Grade ' + n; }, loading: 'Loading…'
  };

  /* ------------------------------------------------------------ session and API */
  var me = null;
  try { me = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  function setMe(x) { me = x; try { if (x) localStorage.setItem(KEY, JSON.stringify(x)); else localStorage.removeItem(KEY); } catch (e) {} }
  function api(method, path, body) {
    var h = {}; if (body) h['Content-Type'] = 'application/json'; if (me && me.token) h.Authorization = 'Bearer ' + me.token;
    return fetch(API + path, { method: method, headers: h, body: body ? JSON.stringify(body) : undefined, cache: 'no-store' }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        j.status = r.status;
        if (r.status === 401 && j.error === 'login') { setMe(null); go('#/'); throw j; }
        if (r.status >= 400) throw j;
        return j;
      });
    }, function () { throw { error: 'offline' }; });
  }
  function errText(e) { return (e && T.errs[e.error]) || T.errs.server; }
  function pwHash(email, pw) {
    var enc = new TextEncoder();
    return crypto.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveBits']).then(function (k) {
      return crypto.subtle.deriveBits({ name: 'PBKDF2', salt: enc.encode('lemonmath.com|' + email.trim().toLowerCase()), iterations: 150000, hash: 'SHA-256' }, k, 256);
    }).then(function (b) { return Array.from(new Uint8Array(b), function (x) { return x.toString(16).padStart(2, '0'); }).join(''); });
  }
  var fmtDT = function (t, day) {
    try { return new Intl.DateTimeFormat(vi ? 'vi-VN' : 'en-GB', day ? { hour: '2-digit', minute: '2-digit', weekday: 'short', day: 'numeric', month: 'numeric' } : { hour: '2-digit', minute: '2-digit' }).format(new Date(t)); } catch (e) { return new Date(t).toLocaleString(); }
  };
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function toInput(t) { var x = new Date(t); return x.getFullYear() + '-' + pad(x.getMonth() + 1) + '-' + pad(x.getDate()) + 'T' + pad(x.getHours()) + ':' + pad(x.getMinutes()); }
  function fromInput(s) { var t = new Date(s).getTime(); return isNaN(t) ? NaN : t; }
  function at(h, m, addDays) { var x = new Date(); x.setDate(x.getDate() + (addDays || 0)); x.setHours(h, m, 0, 0); return x.getTime(); }
  function stateOf(a, now) { return now < a.open_at ? 'soon' : now < a.close_at ? 'open' : 'closed'; }
  function copyText(t, btn, label) { if (!navigator.clipboard) return; navigator.clipboard.writeText(t).then(function () { btn.textContent = '✓ ' + T.copied; setTimeout(function () { btn.textContent = label; }, 2000); }, function () {}); }
  function msgBox(id) { return '<p class="tool-msg" id="' + id + '" aria-live="polite"></p>'; }
  function busy(btn, on) { if (btn) btn.disabled = on; }

  /* ------------------------------------------------------------ router */
  var timer = 0;
  function go(h) { if (location.hash === h) render(); else location.hash = h; }
  window.addEventListener('hashchange', render);
  app.hidden = false;
  render();
  function render() {
    clearInterval(timer);
    var h = location.hash.replace(/^#\/?/, '').split('/');
    if (!me || !me.token) { if (h[0] === 'khoi-phuc' || h[0] === 'recover') authView('forgot'); else authView(h[0] === 'dang-ki' || h[0] === 'signup' ? 'signup' : 'login'); return; }
    if (h[0] === 'lop' && h[1] && h[2] === 'giao') newHwView(h[1]);
    else if (h[0] === 'lop' && h[1]) classView(h[1], h[2] === 'hoc-sinh' ? 'stu' : 'hw');
    else if (h[0] === 'bai' && h[1]) hwView(h[1]);
    else if (h[0] === 'tai-khoan') accountView();
    else homeView();
    window.scrollTo(0, 0);
  }
  function top(extra) {
    return '<div class="cr-top"><span class="cr-me">' + T.hello + ', <b>' + esc(me.teacher.name) + '</b></span><span class="cr-links">' + (extra || '') + '<a href="#/tai-khoan">' + T.account + '</a></span></div>';
  }

  /* ------------------------------------------------------------ 1. log in, sign up, recover */
  function authView(mode) {
    var tab = function (m, label, href) { return '<a href="' + href + '" class="cr-tab' + (mode === m ? ' on' : '') + '">' + label + '</a>'; };
    var f = function (id, label, type, extra) { return '<label>' + label + '<input id="' + id + '" type="' + type + '" ' + (extra || '') + '></label>'; };
    app.innerHTML = '<div class="cr-tabs">' + tab('login', T.login, '#/') + tab('signup', T.signup, '#/dang-ki') + tab('forgot', T.forgot, '#/khoi-phuc') + '</div>' +
      '<form class="jn-form cr-auth" id="cr-f">' +
      (mode === 'signup' ? f('cr-name', T.name, 'text', 'maxlength="80" autocomplete="name"') + f('cr-school', T.school, 'text', 'maxlength="120" autocomplete="organization"') : '') +
      f('cr-email', T.email, 'email', 'autocomplete="email" maxlength="254"') +
      (mode === 'forgot' ? f('cr-rc', T.rc, 'text', 'autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="20"') : '') +
      f('cr-pw', mode === 'forgot' ? T.pwNew : T.pw, 'password', 'autocomplete="' + (mode === 'login' ? 'current-password' : 'new-password') + '" maxlength="200"') +
      (mode !== 'login' ? f('cr-pw2', T.pw2, 'password', 'autocomplete="new-password" maxlength="200"') : '') +
      (mode === 'signup' ? '<label class="tool-check cr-agree"><input type="checkbox" id="cr-agree"> <span>' + T.agree + '</span></label>' : '') +
      '<button class="btn" type="submit" id="cr-go">' + (mode === 'login' ? T.login : mode === 'signup' ? T.signup : T.forgot) + '</button>' + msgBox('cr-msg') + '</form>';
    $('#cr-f').addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = $('#cr-msg'), btn = $('#cr-go'), email = $('#cr-email').value.trim(), pw = $('#cr-pw').value;
      if (!email || !pw || (mode === 'signup' && !$('#cr-name').value.trim()) || (mode === 'forgot' && !$('#cr-rc').value.trim())) { msg.textContent = T.fill; return; }
      if (mode !== 'login') {
        if (pw.length < 8) { msg.textContent = T.short; return; }
        if (pw !== $('#cr-pw2').value) { msg.textContent = T.mismatch; return; }
      }
      if (mode === 'signup' && !$('#cr-agree').checked) { msg.textContent = T.needAgree; return; }
      busy(btn, true); msg.textContent = T.loading;
      pwHash(email, pw).then(function (h) {
        if (mode === 'login') return api('POST', '/v1/auth/login', { email: email, pw: h });
        if (mode === 'signup') return api('POST', '/v1/auth/signup', { email: email, pw: h, name: $('#cr-name').value, school: $('#cr-school').value });
        return api('POST', '/v1/auth/recover', { email: email, pw: h, recovery: $('#cr-rc').value });
      }).then(function (r) {
        setMe({ token: r.token, teacher: r.teacher });
        if (r.recovery) recoveryView(r.recovery); else go('#/');
      }).catch(function (er) { busy(btn, false); msg.textContent = errText(er); });
    });
  }
  function recoveryView(rc) {
    app.innerHTML = '<section class="tool cr-rc"><h2>' + T.rcTitle + '</h2><p class="cr-code">' + esc(rc) + '</p><p>' + T.rcLead + '</p><p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-c">' + T.rcCopy + '</button><button type="button" class="btn btn-outline" id="cr-s">' + T.rcSave + '</button><button type="button" class="btn" id="cr-ok">' + T.rcDone + '</button></p></section>';
    $('#cr-c').addEventListener('click', function () { copyText(rc, $('#cr-c'), T.rcCopy); });
    $('#cr-s').addEventListener('click', function () {
      var b = new Blob(['Lemonmath\n' + T.rcTitle + ': ' + rc + '\n' + T.email + ': ' + me.teacher.email + '\n'], { type: 'text/plain' }), a = el('a');
      a.href = URL.createObjectURL(b); a.download = 'lemonmath-ma-khoi-phuc.txt'; d.body.appendChild(a); a.click(); a.remove();
    });
    $('#cr-ok').addEventListener('click', function () { go('#/'); });
  }

  /* ------------------------------------------------------------ 2. my classes */
  function gradeSelect(id, val) {
    var o = ''; for (var g = 1; g <= 12; g++) o += '<option value="' + g + '"' + (String(val) === String(g) ? ' selected' : '') + '>' + T.gName(g) + '</option>';
    return '<select id="' + id + '">' + o + '</select>';
  }
  function homeView() {
    app.innerHTML = top() + '<h2>' + T.classes + '</h2><div id="cr-list" class="cr-cards"><p>' + T.loading + '</p></div>' +
      '<section class="tool"><h3>' + T.newClass + '</h3><div class="tool-row"><label class="grow">' + T.className + ' <input type="text" id="cr-cn" maxlength="60"></label><label>' + T.grade + ' ' + gradeSelect('cr-cg', 10) + '</label></div>' +
      '<label class="cr-lbl" for="cr-names">' + T.namesL + '</label><textarea id="cr-names" rows="8" placeholder="' + esc(T.namesPh) + '"></textarea>' +
      '<p class="tool-actions"><button type="button" class="btn" id="cr-mk">' + T.create + '</button></p>' + msgBox('cr-msg') + '</section>';
    api('GET', '/v1/classes').then(function (r) {
      var box = $('#cr-list'); if (!box) return;
      box.innerHTML = r.classes.length ? r.classes.map(function (c) {
        return '<a class="cr-card" href="#/lop/' + esc(c.id) + '"><b>' + esc(c.name) + '</b><span>' + (c.grade ? T.gName(c.grade) + ' · ' : '') + c.n + ' ' + T.stu + ' · ' + c.hw + ' ' + T.hws + '</span></a>';
      }).join('') : '<p>' + T.noClass + '</p>';
    }).catch(function (e) { var box = $('#cr-list'); if (box) box.innerHTML = '<p class="tool-msg">' + errText(e) + '</p>'; });
    $('#cr-mk').addEventListener('click', function () {
      var btn = this, msg = $('#cr-msg'), names = $('#cr-names').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
      if (!$('#cr-cn').value.trim() || !names.length) { msg.textContent = T.fill; return; }
      busy(btn, true);
      api('POST', '/v1/classes', { name: $('#cr-cn').value, grade: $('#cr-cg').value, students: names }).then(function (r) { go('#/lop/' + r.class.id + '/hoc-sinh'); })
        .catch(function (e) { busy(btn, false); msg.textContent = errText(e); });
    });
  }

  /* ------------------------------------------------------------ 3. one class: assignments, students */
  function classView(id, tab) {
    app.innerHTML = top('<a href="#/">' + T.back + '</a> · ') + '<p>' + T.loading + '</p>';
    api('GET', '/v1/classes/' + id).then(function (r) {
      var c = r.class, students = r.students;
      app.innerHTML = top('<a href="#/">' + T.back + '</a> · ') + '<h2 class="cr-h">' + esc(c.name) + ' <small>' + (c.grade ? T.gName(c.grade) + ' · ' : '') + students.length + ' ' + T.stu + '</small></h2>' +
        '<div class="cr-tabs"><a class="cr-tab' + (tab === 'hw' ? ' on' : '') + '" href="#/lop/' + id + '">' + T.tabHw + '</a><a class="cr-tab' + (tab === 'stu' ? ' on' : '') + '" href="#/lop/' + id + '/hoc-sinh">' + T.tabStu + '</a></div><div id="cr-body"></div>';
      if (tab === 'stu') studentsTab(c, students); else hwTab(c, students);
    }).catch(function (e) { app.innerHTML = top('<a href="#/">' + T.back + '</a> · ') + '<p class="tool-msg">' + errText(e) + '</p>'; });
  }
  function hwTab(c, students) {
    var body = $('#cr-body');
    body.innerHTML = '<p class="tool-actions"><a class="btn" href="#/lop/' + c.id + '/giao">' + T.newHw + '</a></p><div id="cr-hws">' + T.loading + '</div>';
    api('GET', '/v1/classes/' + c.id + '/assignments').then(function (r) {
      var now = r.now;
      $('#cr-hws').innerHTML = r.assignments.length ? '<div class="cr-cards">' + r.assignments.map(function (a) {
        var s = stateOf(a, now);
        return '<a class="cr-card cr-' + s + '" href="#/bai/' + a.code + '"><b>' + esc(a.title) + '</b><span>' + T.st[s] + ' · ' + esc(fmtDT(a.open_at, true)) + ' → ' + esc(fmtDT(a.close_at, true)) + '</span><span>' + T.code + ' ' + a.code + ' · ' + T.doneOf(a.done, students.length) + '</span></a>';
      }).join('') + '</div>' : '<p>' + T.noHw + '</p>';
    }).catch(function (e) { $('#cr-hws').innerHTML = '<p class="tool-msg">' + errText(e) + '</p>'; });
  }
  function studentsTab(c, students) {
    var body = $('#cr-body');
    var draw = function (list) {
      students = list;
      body.innerHTML = '<p class="tool-mini">' + T.pinNote + '</p><p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-print">' + T.printSlips + '</button></p>' +
        '<div class="cr-scroll"><table class="cr-table"><thead><tr><th>' + T.no + '</th><th class="l">' + T.sname + '</th><th>' + T.pin + '</th><th></th></tr></thead><tbody>' +
        list.map(function (s) {
          return '<tr data-id="' + esc(s.id) + '"><td>' + s.no + '</td><td class="l">' + esc(s.name) + '</td><td class="cr-pin">' + esc(s.pin) + '</td><td class="cr-act"><button type="button" class="tool-link" data-do="rename">' + T.rename + '</button> <button type="button" class="tool-link" data-do="repin">' + T.newPin + '</button> <button type="button" class="tool-link" data-do="remove">' + T.remove + '</button></td></tr>';
        }).join('') + '</tbody></table></div>' +
        '<label class="cr-lbl" for="cr-add">' + T.addStu + '</label><textarea id="cr-add" rows="3"></textarea><p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-addgo">' + T.add + '</button><button type="button" class="btn btn-outline cr-danger" id="cr-del">' + T.delClass + '</button></p>' + msgBox('cr-msg');
      $('#cr-print').addEventListener('click', function () { printSlips(c, students); });
      $('#cr-addgo').addEventListener('click', function () {
        var add = $('#cr-add').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
        if (add.length) patch({ add: add }, this);
      });
      $('#cr-del').addEventListener('click', function () {
        if (!window.confirm(T.sureDelClass(c.name))) return;
        api('DELETE', '/v1/classes/' + c.id).then(function () { go('#/'); }).catch(function (e) { $('#cr-msg').textContent = errText(e); });
      });
    };
    var patch = function (b, btn) {
      busy(btn, true);
      api('PATCH', '/v1/classes/' + c.id, b).then(function (r) { draw(r.students); }).catch(function (e) { busy(btn, false); $('#cr-msg').textContent = errText(e); });
    };
    body.onclick = function (e) {
      var b = e.target.closest ? e.target.closest('[data-do]') : null; if (!b) return;
      var id = b.closest('tr').getAttribute('data-id'), s = students.filter(function (x) { return x.id === id; })[0]; if (!s) return;
      var k = b.getAttribute('data-do');
      if (k === 'remove' && window.confirm(T.sureRemove(s.name))) patch({ remove: [id] }, b);
      if (k === 'repin' && window.confirm(T.sureNewPin(s.name))) patch({ repin: [id] }, b);
      if (k === 'rename') { var n = window.prompt(T.askName, s.name); if (n && n.trim() && n.trim() !== s.name) patch({ rename: [{ id: id, name: n }] }, b); }
    };
    draw(students);
  }
  function printSlips(c, students) {
    var link = HW.replace(/^https?:\/\//, '').replace(/\/$/, '');
    var box = el('div', 'cr-slips'); box.id = 'cr-print-area';
    box.innerHTML = students.map(function (s) {
      return '<div class="cr-slip"><p class="cr-slip-h">' + T.slipHead + '</p><p><b>' + esc(c.name) + ' · ' + s.no + '. ' + esc(s.name) + '</b></p><p>' + T.slipPin + ': <b class="cr-slip-pin">' + esc(s.pin) + '</b></p><p>' + T.slipGo + ': ' + esc(link) + '</p><p class="cr-slip-n">' + T.slipNote + '</p></div>';
    }).join('');
    d.body.appendChild(box); d.documentElement.classList.add('cr-printing');
    var done = function () { d.documentElement.classList.remove('cr-printing'); box.remove(); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    setTimeout(function () { window.print(); setTimeout(function () { if (d.documentElement.classList.contains('cr-printing') && !window.matchMedia('print').matches) done(); }, 1500); }, 50);
  }

  /* ------------------------------------------------------------ 4. a new assignment */
  var LV_MIN = { NB: 1, TH: 2, VD: 4, VDC: 6 }, TF_MIN = { NB: 0.5, TH: 0.75, VD: 1.25, VDC: 2 };
  function minutesOf(it) {
    if (it.y === 'tf') { var v = Array.isArray(it.v) ? it.v : []; return v.length ? v.reduce(function (s, x) { return s + (TF_MIN[x] || 0.75); }, 0) : 3; }
    return LV_MIN[it.v] || 2;
  }
  function newHwView(classId) {
    app.innerHTML = top('<a href="#/lop/' + esc(classId) + '">' + T.backClass + '</a> · ') + '<p>' + T.loading + '</p>';
    Promise.all([api('GET', '/v1/classes/' + classId), fetch(BANK + 'index.json').then(function (r) { return r.json(); })]).then(function (res) {
      var c = res[0].class, nStu = res[0].students.length, banks = res[1], g = parseInt(c.grade, 10) || 0, primary = g >= 1 && g <= 5;
      var today = new Intl.DateTimeFormat(vi ? 'vi-VN' : 'en-GB', { day: 'numeric', month: 'numeric' }).format(new Date());
      app.innerHTML = top('<a href="#/lop/' + esc(classId) + '">' + T.backClass + '</a> · ') + '<section class="tool cr-new"><h2>' + T.hwTitle + ' · ' + esc(c.name) + '</h2>' +
        '<div class="tool-row"><label class="grow">' + T.hwName + ' <input type="text" id="nw-title" maxlength="120" value="' + esc(T.hwNameV(today)) + '"></label><label>' + T.bank + ' <select id="nw-bank"><option value="">' + T.pickBank + '</option>' +
        banks.map(function (b) { return '<option value="' + esc(b.id) + '"' + (b.id === 'g' + g ? ' selected' : '') + '>' + esc(b.name) + ' (' + b.n + ')</option>'; }).join('') + '</select></label></div>' +
        '<fieldset class="tool-set" id="nw-ls" hidden><legend>' + T.lessons + '</legend><p class="tool-mini"><button type="button" class="tool-link" id="nw-all">' + T.all + '</button> · <button type="button" class="tool-link" id="nw-none">' + T.none + '</button></p><div id="nw-tree"></div></fieldset>' +
        '<fieldset class="tool-set"><legend>' + T.count + '</legend><div class="tool-row">' + ['mc', 'tf', 'sa'].map(function (k, i) { return '<label>' + T[k] + ' <input type="number" id="nw-' + k + '" min="0" max="40" value="' + [10, 0, 0][i] + '" inputmode="numeric"> <small id="nw-h-' + k + '"></small></label>'; }).join('') + '</div>' +
        '<label class="tool-check"><input type="checkbox" id="nw-shuf" checked> ' + T.shuffleL + '</label></fieldset>' +
        '<fieldset class="tool-set"><legend>' + T.mode + '</legend>' + ['home', 'class2', 'free'].map(function (m) { var off = primary && m !== 'free'; return '<label class="tool-check cr-radio"><input type="radio" name="nw-mode" value="' + m + '"' + ((primary ? m === 'free' : m === 'home') ? ' checked' : '') + (off ? ' disabled' : '') + '> ' + T.modes[m] + '</label>'; }).join('') +
        (primary ? '<p class="tool-mini">' + T.freeNote + '</p>' : '') + '</fieldset>' +
        '<fieldset class="tool-set"><legend>' + T.when + '</legend><p class="cr-presets">' + T.presets.map(function (p, i) { return '<button type="button" class="btn btn-outline cr-pre" data-p="' + i + '">' + p + '</button>'; }).join('') + '</p>' +
        '<div class="tool-row"><label>' + T.from + ' <input type="datetime-local" id="nw-open"></label><label>' + T.to + ' <input type="datetime-local" id="nw-close"></label><label>' + T.dur + ' <input type="number" id="nw-dur" min="0" max="300" value="0" inputmode="numeric"></label></div>' +
        '<label class="tool-check"><input type="checkbox" id="nw-pin"' + (primary ? '' : ' checked') + '> ' + T.needPin + '</label>' +
        '<div class="tool-row"><label class="grow">' + T.keyWhen + ' <select id="nw-key"><option value="close">' + T.keyOpts.close + '</option><option value="submit"' + (primary ? ' selected' : '') + '>' + T.keyOpts.submit + '</option></select></label></div></fieldset>' +
        '<p class="tool-msg" id="nw-est"></p><p class="tool-actions"><button type="button" class="btn" id="nw-go">' + T.give + '</button></p>' + msgBox('nw-msg') + '</section>';
      var bank = null, cache = {}, tree = $('#nw-tree');
      var setWin = function (a, b) { $('#nw-open').value = toInput(a); $('#nw-close').value = toInput(b); est(); };
      var presets = [
        function () { var a = at(20, 0, 0); if (Date.now() > at(20, 45, 0)) a = at(20, 0, 1); setWin(a, a + 3600e3); },
        function () { setWin(Date.now(), at(21, 0, 1)); },
        function () { setWin(Date.now(), Date.now() + 45 * 60e3); },
        function () { setWin(Date.now(), at(21, 0, 7)); }
      ];
      if (primary) presets[3](); else presets[0]();
      $$('.cr-pre').forEach(function (b) { b.addEventListener('click', function () { presets[+b.getAttribute('data-p')](); }); });
      $$('input[name="nw-mode"]').forEach(function (r) { r.addEventListener('change', function () { var m = r.value; $('#nw-pin').checked = m !== 'free'; $('#nw-key').value = m === 'home' ? 'close' : 'submit'; if (m === 'class2') presets[2](); }); });
      function chosen() { return $$('input[data-l]:checked', tree).map(function (i) { return +i.getAttribute('data-l'); }); }
      function avail() {
        var ids = chosen(), n = { mc: 0, tf: 0, sa: 0 };
        if (bank) bank.items.forEach(function (it) { if (ids.indexOf(it.l) !== -1) n[it.y]++; });
        ['mc', 'tf', 'sa'].forEach(function (k) { $('#nw-h-' + k).textContent = '(' + T.have + ' ' + n[k] + ')'; });
        est();
      }
      function est() {
        var box = $('#nw-est'); if (!box) return;
        if (!bank) { box.textContent = ''; return; }
        var ids = chosen(), mins = 0;
        ['mc', 'tf', 'sa'].forEach(function (k) {
          var pool = bank.items.filter(function (it) { return it.y === k && ids.indexOf(it.l) !== -1; }), n = Math.min(pool.length, parseInt($('#nw-' + k).value, 10) || 0);
          if (n) mins += n * pool.reduce(function (s, it) { return s + minutesOf(it); }, 0) / pool.length;
        });
        mins = Math.round(mins);
        var win = (fromInput($('#nw-close').value) - fromInput($('#nw-open').value)) / 60e3;
        box.textContent = mins ? T.est(mins) + (mins > 60 ? T.estLong : '') + (win > 0 && win < mins ? T.estWin : '') : '';
      }
      function drawTree() {
        tree.innerHTML = '';
        bank.chapters.forEach(function (ch, ci) {
          var det = el('details', 'tq-ch'), sum = el('summary', '', '<label class="tool-check"><input type="checkbox" data-ch="' + ci + '"> <b>' + esc(ch.t) + '</b></label>'), ul = el('ul', 'tq-ls');
          ch.lessons.forEach(function (ls) { ul.appendChild(el('li', '', '<label class="tool-check"><input type="checkbox" data-l="' + ls.i + '" data-c="' + ci + '"> ' + esc(ls.t) + ' <small>(' + (ls.n[0] + ls.n[1] + ls.n[2]) + ')</small></label>')); });
          det.appendChild(sum); det.appendChild(ul); tree.appendChild(det);
        });
        $('#nw-ls').hidden = false; avail();
      }
      tree.addEventListener('change', function (e) {
        var t = e.target, ci;
        if (t.hasAttribute('data-ch')) { ci = t.getAttribute('data-ch'); $$('input[data-c="' + ci + '"]', tree).forEach(function (i) { i.checked = t.checked; }); }
        else if (t.hasAttribute('data-c')) { ci = t.getAttribute('data-c'); var all = $$('input[data-c="' + ci + '"]', tree); $('input[data-ch="' + ci + '"]', tree).checked = all.every(function (i) { return i.checked; }); }
        avail();
      });
      $('#nw-all').addEventListener('click', function () { $$('input[type=checkbox]', tree).forEach(function (i) { i.checked = true; }); avail(); });
      $('#nw-none').addEventListener('click', function () { $$('input[type=checkbox]', tree).forEach(function (i) { i.checked = false; }); avail(); });
      ['nw-mc', 'nw-tf', 'nw-sa', 'nw-open', 'nw-close'].forEach(function (id) { $('#' + id).addEventListener('input', est); });
      var loadBank = function () {
        var id = $('#nw-bank').value; bank = null; $('#nw-ls').hidden = true; est();
        if (!id) return;
        if (cache[id]) { bank = cache[id]; drawTree(); return; }
        fetch(BANK + id + '.json').then(function (r) { return r.json(); }).then(function (b) { cache[id] = b; if ($('#nw-bank').value === id) { bank = b; drawTree(); } }).catch(function () { $('#nw-msg').textContent = T.loadErr; });
      };
      $('#nw-bank').addEventListener('change', loadBank); loadBank();
      function lessonTitle(i) { var t = ''; bank.chapters.forEach(function (ch) { ch.lessons.forEach(function (l) { if (l.i === i) t = l.t; }); }); return t; }
      /* n questions of one kind, spread evenly over the chosen lessons */
      function take(kind, n, ids) {
        var by = {}, order = [], res = [];
        bank.items.forEach(function (it) { if (it.y === kind && ids.indexOf(it.l) !== -1) { if (!by[it.l]) { by[it.l] = []; order.push(it.l); } by[it.l].push(it); } });
        order.forEach(function (l) { by[l] = shuffle(by[l]); });
        for (var round = 0; res.length < n; round++) {
          var added = 0;
          order.forEach(function (l) { if (res.length < n && by[l][round]) { res.push(by[l][round]); added++; } });
          if (!added) break;
        }
        return res.sort(function (a, b) { return a.l - b.l; });
      }
      $('#nw-go').addEventListener('click', function () {
        var btn = this, msg = $('#nw-msg'), ids = chosen(), list = [];
        if (!bank || !ids.length) { msg.textContent = T.needLesson; return; }
        ['mc', 'tf', 'sa'].forEach(function (k) { var n = Math.max(0, Math.min(40, parseInt($('#nw-' + k).value, 10) || 0)); if (n) list = list.concat(take(k, n, ids)); });
        if (!list.length) { msg.textContent = T.needCount; return; }
        var open = fromInput($('#nw-open').value), close = fromInput($('#nw-close').value);
        if (!(close > open)) { msg.textContent = T.errs.bad_time; return; }
        var mode = ($('input[name="nw-mode"]:checked') || {}).value || 'home';
        busy(btn, true); msg.textContent = T.loading;
        api('POST', '/v1/assignments', {
          class_id: classId, title: $('#nw-title').value, lang: vi ? 'vi' : 'en', bank: $('#nw-bank').value, mode: mode,
          open_at: open, close_at: close, duration_min: parseInt($('#nw-dur').value, 10) || 0, require_pin: $('#nw-pin').checked, show_key: $('#nw-key').value, shuffle: $('#nw-shuf').checked,
          items: list.map(function (it) { var o = { y: it.y, q: it.q, k: it.k, e: it.e || '', lt: lessonTitle(it.l) }; if (it.o) o.o = it.o; if (it.c) o.c = it.c; if (it.x) o.x = 1; if (it.v) o.v = it.v; return o; })
        }).then(function (r) { location.hash = '#/bai/' + r.assignment.code + '/gui'; })
          .catch(function (e) { busy(btn, false); msg.textContent = errText(e); });
      });
      est();
    }).catch(function (e) { app.innerHTML = top('<a href="#/lop/' + esc(classId) + '">' + T.backClass + '</a> · ') + '<p class="tool-msg">' + (e && e.error ? errText(e) : T.loadErr) + '</p>'; });
  }

  /* ------------------------------------------------------------ 5. one assignment: send it, follow it */
  function shareHtml(a, cls) {
    var link = HW + '?m=' + a.code, qr = $('#cr-qr');
    return '<section class="tool cr-share" id="cr-share"><h3>' + T.shareH + '</h3><p>' + T.shareLead + '</p><div class="cr-share-grid"><div><p class="cr-code">' + a.code + '</p>' +
      '<p class="cr-linkline"><span>' + T.link + ':</span> <a href="' + esc(link) + '" target="_blank" rel="noopener">' + esc(link.replace(/^https?:\/\//, '')) + '</a></p>' +
      '<p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-cl">' + T.copyLink + '</button></p></div>' + (qr ? '<figure class="cr-qr">' + qr.innerHTML + '<figcaption>' + T.scan + '</figcaption></figure>' : '') + '</div>' +
      '<label class="cr-lbl" for="cr-zalo">' + T.zalo + '</label><textarea id="cr-zalo" rows="7">' + esc(T.msg(a, link, cls, fmtDT(a.open_at, true), fmtDT(a.close_at, true))) + '</textarea>' +
      '<p class="tool-actions"><button type="button" class="btn" id="cr-cm">' + T.copyMsg + '</button></p></section>';
  }
  function bindShare(a) {
    var link = HW + '?m=' + a.code;
    $('#cr-cl').addEventListener('click', function () { copyText(link, $('#cr-cl'), T.copyLink); });
    $('#cr-cm').addEventListener('click', function () { copyText($('#cr-zalo').value, $('#cr-cm'), T.copyMsg); });
  }
  var MAXP = { mc: 0.25, tf: 1, sa: 0.5 };
  function numVal(s) { s = String(s).replace(/\s/g, '').replace(',', '.'); return s === '' || !/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(s) ? NaN : Number(s); }
  function has(it, a) { a = a == null ? '' : String(a); return it.y === 'tf' ? /[TF]/.test(a) : a.trim() !== ''; }
  function pts(it, a) {
    if (!has(it, a)) return 0; a = String(a);
    if (it.y === 'mc') return a === it.k ? 0.25 : 0;
    if (it.y === 'tf') { var c = 0; for (var j = 0; j < 4; j++) if (a.charAt(j) === it.k.charAt(j)) c++; return [0, 0.1, 0.25, 0.5, 1][c]; }
    var v = numVal(a), w = numVal(it.k);
    if (!isNaN(v) && !isNaN(w)) return Math.abs(v - w) < 1e-9 ? 0.5 : 0;
    return a.toLowerCase().replace(/\s/g, '').replace(/,/g, '.') === String(it.k).toLowerCase().replace(/\s/g, '').replace(/,/g, '.') ? 0.5 : 0;
  }
  function hwView(code) {
    var share = /\/gui$/.test(location.hash);
    app.innerHTML = top() + '<p>' + T.loading + '</p>';
    var load = function () {
      return api('GET', '/v1/assignments/' + code).then(function (r) { draw(r); return r; }).catch(function (e) { app.innerHTML = top() + '<p class="tool-msg">' + errText(e) + '</p>'; });
    };
    var draw = function (r) {
      var a = r.assignment, items = r.items, now = r.now, s = stateOf(a, now), free = a.mode === 'free';
      var by = {}; r.attempts.forEach(function (x) { by[x.student_id] = x; });
      var rows = r.students.filter(function (st) { return st.active || by[st.id]; }).map(function (st) {
        var x = by[st.id], k = !x || !x.started_at ? (x && x.pin_locked ? 'locked' : 'none') : !x.submitted_at ? 'work' : x.late ? 'late' : x.auto ? 'auto' : 'done';
        return { st: st, x: x, k: k, s10: x && x.submitted_at && x.max ? x.score / x.max * 10 : null };
      });
      var done = rows.filter(function (w) { return w.s10 != null; }), xs = done.map(function (w) { return w.s10; }).sort(function (p, q) { return p - q; }), n = xs.length;
      var mean = n ? xs.reduce(function (p, q) { return p + q; }, 0) / n : 0, med = n ? (n % 2 ? xs[(n - 1) / 2] : (xs[n / 2 - 1] + xs[n / 2]) / 2) : 0;
      var stat = function (l, v) { return '<div class="sc-stat"><b>' + v + '</b><span>' + l + '</span></div>'; };
      var cnt = function (k) { return rows.filter(function (w) { return w.k === k; }).length; };
      // per question: share of points won by those who handed in, and the wrong option chosen most
      var qs = items.map(function (it, i) {
        var got = 0, opt = {};
        done.forEach(function (w) { var ans = w.x.answers[i]; got += pts(it, ans) / MAXP[it.y]; if (it.y === 'mc' && ans) opt[ans] = (opt[ans] || 0) + 1; });
        return { i: i, it: it, pc: n ? Math.round(100 * got / n) : null, opt: opt };
      });
      var worst = qs.filter(function (q) { return q.pc != null && q.pc < 100; }).sort(function (p, q) { return p.pc - q.pc; }).slice(0, 3);
      var cell = function (it, ans, sub) {
        if (!has(it, ans)) return '<td class="' + (sub ? 'no' : '') + '">·</td>';
        if (!sub) return '<td class="on"></td>';
        var p = pts(it, ans) / MAXP[it.y]; return '<td class="' + (p >= 1 ? 'ok' : p > 0 ? 'half' : 'no') + '">' + (p >= 1 ? '✓' : p > 0 ? '½' : '✗') + '</td>';
      };
      var dur = function (x) { return x && x.submitted_at && x.started_at ? Math.max(1, Math.round((x.submitted_at - x.started_at) / 60e3)) + ' ' + T.mins : ''; };
      app.innerHTML = top('<a href="#/lop/' + esc(a.class_id) + '">' + T.backClass + '</a> · ') +
        '<h2 class="cr-h">' + esc(a.title) + ' <small>' + esc(r.class.name) + ' · ' + T.code + ' <b>' + a.code + '</b></small></h2>' +
        '<p class="cr-when"><span class="cr-badge cr-' + s + '">' + T.st[s] + '</span> ' + esc(fmtDT(a.open_at, true)) + ' → ' + esc(fmtDT(a.close_at, true)) + (a.duration_min ? ' · ' + a.duration_min + ' ' + T.mins : '') + ' · ' + esc(T.modes[a.mode]) + '</p>' +
        '<p class="tool-actions">' + (s !== 'closed' ? '<button type="button" class="btn btn-outline" id="cr-sh">' + T.reshare + '</button><button type="button" class="btn btn-outline" id="cr-close">' + T.closeNow + '</button>' : '') +
        '<span class="cr-ext">' + T.extend + ': ' + T.ext.map(function (t, i) { return '<button type="button" class="tool-link" data-ext="' + i + '">' + t + '</button>'; }).join(' ') + '</span>' +
        '<button type="button" class="btn btn-outline" id="cr-rf">' + T.refresh + '</button></p>' +
        (share ? shareHtml(a, r.class.name) : '<div id="cr-sharebox"></div>') +
        '<h3>' + T.board + '</h3>' + (s === 'soon' && !r.attempts.length ? '<p>' + T.waitOpen + '</p>' : '') +
        '<div class="sc-stats">' + stat(T.sum.n, n + '/' + rows.filter(function (w) { return w.st.active; }).length) + stat(T.sum.work, cnt('work')) + stat(T.sum.none, cnt('none') + cnt('locked')) +
        (!free && n ? stat(T.sum.mean, fmt(mean)) + stat(T.sum.med, fmt(med)) + stat(T.sum.pass, Math.round(100 * xs.filter(function (v) { return v >= 5; }).length / n) + '%') + stat(T.sum.good, Math.round(100 * xs.filter(function (v) { return v >= 8; }).length / n) + '%') : '') + '</div>' +
        (free ? '<p class="tool-mini">' + T.freeHide + '</p>' : '') +
        '<div class="cr-scroll"><table class="lv-board cr-board"><thead><tr><th>' + T.no + '</th><th class="l">' + T.sname + '</th><th class="l">' + T.status + '</th>' + (free ? '' : '<th>' + T.score + '</th>') + '<th>' + T.time + '</th>' +
        items.map(function (it, i) { return '<th><span class="k-' + it.y + '">' + (i + 1) + '</span></th>'; }).join('') + '<th></th></tr></thead><tbody>' +
        rows.map(function (w) {
          var x = w.x, sub = !!(x && x.submitted_at);
          return '<tr data-id="' + esc(w.st.id) + '" data-n="' + esc(w.st.name) + '"><td>' + w.st.no + '</td><td class="l">' + esc(w.st.name) + '</td><td class="l cr-s-' + w.k + '">' + T.s[w.k] + '</td>' + (free ? '' : '<td class="s">' + (w.s10 != null ? fmt(w.s10) : '') + '</td>') + '<td class="cr-t">' + dur(x) + '</td>' +
            items.map(function (it, i) { return x && x.started_at ? (free && sub ? '<td class="on"></td>' : cell(it, x.answers[i], sub)) : '<td></td>'; }).join('') +
            '<td class="cr-act">' + (x ? '<button type="button" class="tool-link" data-reset="1">' + (w.k === 'locked' ? T.unlock : T.reset) + '</button>' : '') + '</td></tr>';
        }).join('') + '</tbody>' + (n ? '<tfoot><tr><td></td><td class="l">' + T.right + '</td><td></td>' + (free ? '' : '<td></td>') + '<td></td>' + qs.map(function (q) { return '<td class="' + (q.pc < 50 ? 'lo' : '') + '">' + q.pc + '</td>'; }).join('') + '<td></td></tr></tfoot>' : '') + '</table></div>' +
        (worst.length ? '<h3>' + T.fix + '</h3><p class="tool-mini">' + T.fixLead + '</p>' + worst.map(function (q) {
          var it = q.it, wrong = it.y === 'mc' ? Object.keys(q.opt).filter(function (L) { return L !== it.k; }).sort(function (p, z) { return q.opt[z] - q.opt[p]; }) : [];
          return '<section class="jn-q cr-fixq"><div class="jn-stem"><b>' + T.q + ' ' + (q.i + 1) + '</b> · ' + q.pc + T.right + (it.lt ? ' · ' + T.topic + ': ' + esc(it.lt) : '') + '<div>' + safe(it.q) + '</div></div>' +
            (it.y === 'mc' ? '<div class="jn-opts c' + (it.c || 1) + '">' + it.o.map(function (o, k) { var L = 'ABCD'[k]; return '<div class="jn-o' + (L === it.k ? ' ok' : L === wrong[0] ? ' no' : '') + '"><b>' + L + '.</b> <span>' + safe(o) + '</span> <i>(' + (q.opt[L] || 0) + ')</i></div>'; }).join('') + '</div>' : '') +
            (it.e ? '<div class="jn-expl">' + safe(it.e) + '</div>' : '') + '</section>';
        }).join('') : '') +
        (!free && n ? '<p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-copy">' + T.copyScores + '</button><button type="button" class="btn btn-outline" id="cr-csv">' + T.csv + '</button>' + (SC ? '<button type="button" class="btn" id="cr-tosc">' + T.toSc + '</button>' : '') + '</p>' : '') +
        '<p class="tool-actions cr-foot"><button type="button" class="btn btn-outline cr-danger" id="cr-delhw">' + T.delHw + '</button></p>' + msgBox('cr-msg');
      drawMath(app);
      if (share) bindShare(a);
      var on = function (id, fn) { var b = $('#' + id); if (b) b.addEventListener('click', fn); };
      on('cr-rf', load);
      on('cr-sh', function () { share = true; draw(r); $('#cr-share').scrollIntoView({ block: 'start' }); });
      on('cr-close', function () { if (window.confirm(T.sureClose)) api('PATCH', '/v1/assignments/' + code, { close_now: true }).then(load).catch(function (e) { $('#cr-msg').textContent = errText(e); }); });
      $$('[data-ext]').forEach(function (b) {
        b.addEventListener('click', function () {
          var add = [15 * 60e3, 3600e3, 864e5][+b.getAttribute('data-ext')], base = Math.max(a.close_at, Date.now());
          api('PATCH', '/v1/assignments/' + code, { close_at: base + add }).then(load).catch(function (e) { $('#cr-msg').textContent = errText(e); });
        });
      });
      on('cr-delhw', function () { if (window.confirm(T.sureDelHw)) api('DELETE', '/v1/assignments/' + code).then(function () { go('#/lop/' + a.class_id); }).catch(function (e) { $('#cr-msg').textContent = errText(e); }); });
      var lines = function (sep) { return done.map(function (w) { return w.st.name + sep + fmt(w.s10); }); };
      on('cr-copy', function () { copyText(lines('\t').join('\n'), $('#cr-copy'), T.copyScores); });
      on('cr-csv', function () {
        var q = function (v) { v = String(v == null ? '' : v); return /[",;\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
        var csv = [[T.no, T.sname, T.status, T.score].concat(items.map(function (it, i) { return T.q + (i + 1); })).map(q).join(',')].concat(rows.map(function (w) {
          return [w.st.no, w.st.name, T.s[w.k], w.s10 != null ? fmt(w.s10) : ''].concat(items.map(function (it, i) { return w.x && w.x.answers[i] != null ? w.x.answers[i] : ''; })).map(q).join(',');
        })).join('\r\n');
        var b = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }), lk = el('a');
        lk.href = URL.createObjectURL(b); lk.download = 'lemonmath-' + a.code + '.csv'; d.body.appendChild(lk); lk.click(); lk.remove();
      });
      on('cr-tosc', function () { try { sessionStorage.setItem('lm-sc-prefill', JSON.stringify({ rows: lines(' ') })); } catch (e) {} location.href = SC + '#sc-app'; });
      $$('[data-reset]').forEach(function (b) {
        b.addEventListener('click', function () {
          var tr = b.closest('tr');
          if (window.confirm(T.sureReset(tr.getAttribute('data-n')))) api('POST', '/v1/assignments/' + code + '/reset', { student_id: tr.getAttribute('data-id') }).then(load).catch(function (e) { $('#cr-msg').textContent = errText(e); });
        });
      });
      clearInterval(timer);
      if (s !== 'closed' || now - a.close_at < 20 * 60e3) timer = setInterval(function () { if (d.visibilityState === 'visible' && location.hash.indexOf('#/bai/' + code) === 0) load(); }, 30000);
    };
    load();
  }

  /* ------------------------------------------------------------ 6. account */
  function accountView() {
    app.innerHTML = top('<a href="#/">' + T.back + '</a> · ') + '<section class="tool"><h2>' + T.account + '</h2><p><b>' + esc(me.teacher.name) + '</b><br>' + esc(me.teacher.email) + (me.teacher.school ? '<br>' + esc(me.teacher.school) : '') + '</p>' +
      '<p class="tool-actions"><button type="button" class="btn" id="cr-out">' + T.logout + '</button></p></section>' +
      '<section class="tool"><h3>' + T.delAcc + '</h3><p>' + T.delAccLead + '</p><div class="tool-row"><label class="grow">' + T.email + ' <input type="text" id="cr-de" autocomplete="off"></label></div><p class="tool-actions"><button type="button" class="btn btn-outline cr-danger" id="cr-dg">' + T.delAccGo + '</button></p>' + msgBox('cr-msg') + '</section>';
    $('#cr-out').addEventListener('click', function () { api('POST', '/v1/auth/logout').catch(function () {}).then(function () { setMe(null); go('#/'); }); });
    $('#cr-dg').addEventListener('click', function () {
      if (!window.confirm(T.sureDelAcc)) return;
      api('DELETE', '/v1/me', { email: $('#cr-de').value }).then(function () { setMe(null); go('#/'); }).catch(function (e) { $('#cr-msg').textContent = e && e.error === 'confirm' ? T.fill : errText(e); });
    });
  }
})();
