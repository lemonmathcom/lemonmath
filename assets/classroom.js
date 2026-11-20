/*
 * Lemonmath, "My classes" (teachers): /vi/lop-hoc/ and /classroom/.
 * A teacher account (email + password; a recovery code, and when e-mail is switched on a 6-digit code by e-mail),
 * classes with a list of students and a 4-digit personal code for each, two kinds of assignment built from the site's
 * question bank (homework with a wide window; a test with a start time and a short time limit), and a results board. Data lives in the classroom API (api/, Cloudflare Worker + D1).
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
    email: 'Email', pw: 'Mật khẩu', pw2: 'Nhập lại mật khẩu', pwNew: 'Mật khẩu mới', name: 'Họ tên hiển thị', nameHint: 'Học sinh và phụ huynh sẽ thấy tên này. Ví dụ: Cô Nguyễn Thị Lan', pwHint: 'Ít nhất 8 kí tự', newAcc: 'Tạo tài khoản', forgotQ: 'Quên mật khẩu?', backLogin: '← Quay lại đăng nhập', resetH: 'Đặt lại mật khẩu', school: 'Trường (không bắt buộc)', rc: 'Mã khôi phục (12 kí tự)',
    agree: 'Tôi là giáo viên. Tôi đồng ý để Lemonmath lưu danh sách học sinh, mã cá nhân và bài làm của lớp tôi để chấm bài và báo kết quả cho tôi. Bài làm tự xóa 30 ngày sau khi bài đóng; tôi có thể xóa lớp hoặc cả tài khoản bất cứ lúc nào.',
    needAgree: 'Thầy cô vui lòng đánh dấu ô đồng ý ở trên.', short: 'Mật khẩu cần ít nhất 8 kí tự.', mismatch: 'Hai mật khẩu chưa giống nhau.', fill: 'Thầy cô điền đủ các ô nhé.',
    errs: { bad_login: 'Email hoặc mật khẩu chưa đúng.', bad_recovery: 'Email hoặc mã khôi phục chưa đúng.', email_taken: 'Email này đã có tài khoản. Thầy cô bấm Đăng nhập, hoặc Quên mật khẩu.', bad_email: 'Email chưa đúng dạng.', locked: 'Thử sai nhiều lần nên tài khoản tạm khóa 15 phút. Thầy cô thử lại sau nhé.', offline: 'Chưa kết nối được máy chủ. Thầy cô kiểm tra mạng rồi thử lại.', too_many_today: 'Hôm nay thầy cô đã giao nhiều bài, mai thử lại nhé.', bad_time: 'Giờ đóng phải sau giờ mở.', need_duration: 'Bài kiểm tra cần thời gian làm bài (phút).', bad_code: 'Mã chưa đúng hoặc đã hết hạn.', email_off: 'Chưa bật gửi email. Thầy cô dùng mã khôi phục nhé.', past: 'Giờ đóng đã qua rồi.', too_long: 'Mỗi bài mở tối đa 60 ngày.', no_students: 'Danh sách học sinh đang trống.', too_many_students: 'Mỗi lớp tối đa 80 học sinh.', too_many_classes: 'Mỗi tài khoản tối đa 40 lớp.', server: 'Máy chủ gặp lỗi. Thầy cô thử lại sau ít phút.' },
    rcTitle: 'Mã khôi phục của thầy cô', rcLead: 'Thầy cô chép lại mã này và cất ở chỗ an toàn (sổ tay, ghi chú trên điện thoại). Khi quên mật khẩu, mã này giúp đặt mật khẩu mới. Mã chỉ hiện một lần trên màn hình.', rcMailed: 'Mã cũng đã được gửi vào email đăng kí của thầy cô (xem cả mục Thư rác nếu chưa thấy).',
    viaMail: 'Nhận mã qua email', viaRc: 'Dùng mã khôi phục', sendCode: 'Gửi mã vào email', code6: 'Mã 6 số trong email', sentCode: function (m) { return 'Nếu email này có tài khoản, Lemonmath vừa gửi một mã 6 số (dùng được trong ' + m + ' phút). Xem cả mục Thư rác.'; }, setPw: 'Đặt mật khẩu mới',
    rcNew: 'Tạo mã khôi phục mới', rcNewLead: 'Làm mất mã khôi phục? Tạo mã mới: mã cũ sẽ không dùng được nữa.', sureRc: 'Tạo mã khôi phục mới? Mã cũ sẽ không dùng được nữa.', rcCopy: 'Sao chép mã', rcSave: 'Tải về máy', rcDone: 'Tôi đã lưu mã', copied: 'Đã sao chép',
    hello: 'Xin chào', classes: 'Lớp của tôi', noClass: 'Thầy cô chưa có lớp nào. Tạo lớp đầu tiên ở dưới.', newClass: 'Tạo lớp mới', className: 'Tên lớp (ví dụ: 10A1)', grade: 'Khối lớp', namesL: 'Danh sách học sinh, mỗi dòng một em, theo thứ tự trong sổ', namesPh: 'Nguyễn Văn An\nTrần Thị Bình\nLê Minh Châu', create: 'Tạo lớp',
    rosterH: 'Danh sách học sinh', ways2: { list: ['Nhập danh sách ngay', 'Dán tên từ sổ điểm hoặc Excel, mỗi dòng một em. Mỗi em có sẵn mã cá nhân để in phát trên lớp.'], self: ['Để học sinh tự nhập tên', 'Không cần nhập gì bây giờ. Lần đầu vào làm bài, mỗi em tự gõ họ tên và nhận mã cá nhân. Thầy cô xem lại và sửa tên sau.'] },
    selfJoinL: 'Cho em chưa có tên trong danh sách tự nhập tên khi vào làm bài', selfJoinHint: 'Tên em tự nhập có dấu “tự thêm” để thầy cô kiểm tra. Khi danh sách đã đủ, bỏ chọn ô này.',
    selfBadge: 'tự thêm', okName: 'Tên đúng', stuSelf: 'các em tự nhập tên',
    emptyRoster: 'Lớp chưa có em nào. Khi thầy cô giao bài, các em mở đường dẫn, tự gõ họ tên và nhận mã cá nhân; tên các em sẽ hiện dần ở đây.', emptyRosterOff: 'Lớp chưa có em nào. Thêm danh sách ở dưới, hoặc bật ô cho các em tự nhập tên.',
    showPw: 'Hiện mật khẩu', hidePw: 'Ẩn mật khẩu', msgSelf: 'Bạn nào chưa có tên trong danh sách: bấm “Nhập họ tên của bạn”, gõ họ tên đầy đủ có dấu, rồi ghi lại mã cá nhân trang cho để dùng cho các bài sau.',
    stu: 'học sinh', hws: 'bài đã giao', back: '← Lớp của tôi', backClass: '← Về lớp', tabHw: 'Bài đã giao', tabStu: 'Học sinh và mã cá nhân',
    newHw: '+ Giao bài mới', noHw: 'Lớp này chưa có bài nào.', code: 'Mã bài', st: { soon: 'Sắp mở', open: 'Đang mở', closed: 'Đã đóng' }, doneOf: function (a, b) { return a + '/' + b + ' em đã nộp'; },
    no: 'STT', sname: 'Họ và tên', pin: 'Mã cá nhân', act: '', newPin: 'Đổi mã', remove: 'Xóa khỏi lớp', rename: 'Sửa tên', addStu: 'Thêm học sinh (mỗi dòng một em)', add: 'Thêm vào lớp', printSlips: '🖨 In phiếu mã cá nhân', delClass: 'Xóa lớp này',
    sureRemove: function (n) { return 'Xóa ' + n + ' khỏi lớp? Bài đã làm của em vẫn giữ trong các bài cũ.'; }, sureNewPin: function (n) { return 'Đổi mã cá nhân của ' + n + '? Mã cũ sẽ không dùng được nữa.'; }, askName: 'Tên mới:',
    sureDelClass: function (n) { return 'Xóa lớp ' + n + ' cùng toàn bộ bài đã giao và bài làm của học sinh? Không thể hoàn tác.'; },
    slipHead: 'Lemonmath · Bài tập Toán', slipGo: 'Vào trang', slipPin: 'Mã cá nhân', slipNote: 'Giữ kín mã này, không đưa cho bạn khác.',
    pinNote: 'Mỗi em có một mã cá nhân 4 chữ số. Khi làm bài, em chọn tên mình rồi nhập mã, nên bạn khác không làm thay được. Thầy cô in phiếu và phát cho từng em (hoặc nhắn riêng cho phụ huynh).',
    steps: ['Loại bài', 'Câu hỏi', 'Thời gian', 'Tùy chọn'],
    kindShort: { home: 'Để luyện tập. Khung giờ rộng, nộp xong xem lời giải ngay, được luyện lại.', test: 'Để đánh giá. Cả lớp làm cùng giờ, thời gian chặt, chỉ làm một lần.', free: 'Không hạn nộp gấp, không hiện điểm từng em.' },
    tTonight: '20:00 tối nay', tTomorrow: '20:00 tối mai', tNow: 'Ngay bây giờ', tl: ['Mở bài', 'Hết giờ vào', 'Bài đóng'],
    tlNote: function (l, d) { return 'Em nào vào trước ' + l + ' đều có đủ ' + d + ' phút.'; },
    durL: 'Giới hạn thời gian mỗi em (phút)', durPh: 'Không giới hạn', pinL: 'Yêu cầu mã cá nhân (để không ai làm thay)', shufL: 'Trộn thứ tự câu và phương án cho từng em',
    keyL: 'Cho xem lời giải', keyO: { submit: 'Ngay khi nộp bài', close: 'Sau khi bài đóng' },
    testFixed: ['Yêu cầu mã cá nhân', 'Trộn câu và phương án', 'Mỗi em làm một lần', 'Đáp án hiện sau khi bài đóng', 'Ghi lại số lần rời trang'], testFixedH: 'Bài kiểm tra luôn:',
    giveHw: 'Giao bài tập', giveTest: 'Giao bài kiểm tra', maxN: function (n) { return 'có ' + n; },
    hwTitle: 'Giao bài mới', hwName: 'Tên bài', hwNameV: function (d) { return 'Bài tập ngày ' + d; }, testNameV: function (d) { return 'Kiểm tra ngày ' + d; }, bank: 'Lấy câu hỏi từ', pickBank: 'Chọn…', lessons: 'Chọn bài học', all: 'Chọn tất cả', none: 'Bỏ chọn', count: 'Số câu', mc: 'Nhiều lựa chọn', tf: 'Đúng sai', sa: 'Trả lời ngắn', have: 'có',
    shuffleL: 'Trộn thứ tự câu và phương án cho từng em (giảm chép bài của nhau)', mode: 'Loại bài', modes: { home: 'Bài tập về nhà', test: 'Bài kiểm tra', class2: 'Luyện tập buổi 2 tại lớp', free: 'Luyện tập tự nguyện cùng bố mẹ' },
    kindDesc: { home: 'Để luyện tập, củng cố. Khung giờ rộng, các em làm lúc nào tiện; nộp xong xem ngay lời giải và được luyện lại (không tính điểm). Bảng theo dõi chú ý ai chưa làm và câu cả lớp hay sai.', test: 'Để đánh giá. Cả lớp làm cùng giờ, thời gian ngắn và chặt; luôn có mã cá nhân, trộn câu; chỉ làm một lần, đáp án hiện sau khi bài đóng; ghi lại số lần rời trang. Bảng theo dõi chú ý điểm và phổ điểm.', free: 'Không hạn nộp gấp, không hiện điểm từng em.' },
    freeNote: 'Lớp 1 đến lớp 5 học 2 buổi/ngày không giao bài tập về nhà, nên Lemonmath chỉ có hình thức tự nguyện: không hạn nộp gấp, bảng theo dõi không hiện điểm từng em.',
    when: 'Thời gian', from: 'Mở lúc', to: 'Hạn nộp', presets: ['Đến 21:00 tối nay', 'Đến 21:00 tối mai', 'Đến hết Chủ nhật', 'Mở một tuần'],
    tPresets: ['20:00 tối (gần nhất)', 'Ngay bây giờ (trên lớp)'], tStart: 'Bắt đầu lúc', tDur: 'Thời gian làm bài (phút)', tLate: 'Cho vào muộn tối đa (phút)',
    tCloses: function (c, l, d) { return 'Bài tự đóng lúc ' + c + '. Em nào bắt đầu trước ' + l + ' đều có đủ ' + d + ' phút; sau ' + l + ' không vào được nữa.'; },
    estShort: ' Thời gian làm bài ngắn hơn số phút ước tính.', lastStart: function (t) { return 'vào muộn nhất ' + t; }, durOpt: 'Giới hạn thời gian cho mỗi em (không bắt buộc)',
    dur: 'Mỗi em được làm tối đa (phút, để 0 nếu không giới hạn)', needPin: 'Yêu cầu mã cá nhân (nên bật với bài kiểm tra)', keyWhen: 'Học sinh xem đáp án và lời giải', keyOpts: { close: 'sau khi bài đóng (nên chọn với bài kiểm tra)', submit: 'ngay khi em nộp bài (hợp với bài luyện tập)' },
    est: function (m) { return 'Ước tính khoảng ' + m + ' phút làm bài.'; }, estLong: ' Hơi dài cho một buổi tối: nghiên cứu cho thấy bài về nhà ngắn, đều đặn hiệu quả hơn bài dài.', estWin: ' Khung giờ ngắn hơn thời gian ước tính.',
    give: 'Giao bài', needLesson: 'Thầy cô chọn ít nhất một bài học.', needCount: 'Thầy cô nhập số câu cho ít nhất một phần.', loadErr: 'Chưa tải được ngân hàng câu hỏi. Thầy cô kiểm tra mạng rồi thử lại.',
    shareH: 'Gửi bài cho học sinh', shareLead: 'Học sinh mở đường dẫn, chọn tên và nhập mã cá nhân. Hoặc vào trang làm bài rồi gõ mã bài.', link: 'Đường dẫn', copyLink: 'Sao chép đường dẫn', zalo: 'Tin nhắn mẫu để dán vào nhóm Zalo lớp', copyMsg: 'Sao chép tin nhắn', scan: 'Quét mã để mở trang làm bài, rồi gõ mã bài',
    msg: function (a, link, cls, t1, t2, tl) {
      if (a.mode === 'test') return '📝 Bài kiểm tra: ' + a.title + ' (lớp ' + cls + ')\nBắt đầu lúc ' + t1 + ', làm trong ' + a.duration_min + ' phút. Vào muộn nhất lúc ' + tl + ', sau đó trang không cho vào nữa.\nCác con mở đường dẫn: ' + link + '\nChọn đúng tên mình, nhập mã cá nhân 4 số cô đã phát, rồi bấm Bắt đầu. Đồng hồ chạy từ lúc bấm và không dừng lại khi thoát ra.\nMã bài: ' + a.code + '\nNhờ bố mẹ giúp con có chỗ ngồi yên tĩnh đúng giờ này. Cảm ơn các bố mẹ!';
      return '📚 ' + a.title + ' (lớp ' + cls + ')\nThời gian: từ ' + t1 + ' đến ' + t2 + (a.duration_min ? ', mỗi em làm tối đa ' + a.duration_min + ' phút' : '') + '.\nCác con mở đường dẫn: ' + link + '\nChọn đúng tên mình' + (a.require_pin ? ', nhập mã cá nhân 4 số' : '') + ', rồi làm bài. Nhớ ghi lời giải vào vở nhé!\nMã bài: ' + a.code + '\nNhờ bố mẹ nhắc con làm đúng giờ và khen con khi con cố gắng. Cảm ơn các bố mẹ!'; },
    board: 'Kết quả', refresh: 'Làm mới', closeNow: 'Đóng bài ngay', sureClose: 'Đóng bài ngay bây giờ? Em nào đang làm sẽ được tự nộp với các câu đã làm.', extend: 'Gia hạn', ext: ['+15 phút', '+1 giờ', '+1 ngày'], extT: ['+5 phút', '+15 phút'], extH: ['+1 giờ', '+1 ngày'], adjust: 'Gia hạn hoặc đóng sớm', perStu: function (m) { return 'mỗi em ' + m + ' phút'; }, perMax: function (m) { return 'mỗi em tối đa ' + m + ' phút'; }, due: 'Hạn nộp', opens: 'Mở', qrH: 'Mã QR để chiếu lên bảng', delHwH: 'Xóa bài này', reshare: 'Gửi cho học sinh', delHw: 'Xóa bài', sureDelHw: 'Xóa bài này cùng bài làm của học sinh? Không thể hoàn tác.',
    copyScores: 'Chép bảng điểm', csv: 'Tải CSV', toSc: 'Viết nhận xét gửi phụ huynh →', status: 'Trạng thái', score: 'Điểm', time: 'Thời gian', q: 'Câu',
    s: { none: 'Chưa vào', work: 'Đang làm', done: 'Đã nộp', auto: 'Tự nộp khi hết giờ', late: 'Nộp muộn (mất mạng)', locked: 'Khóa (sai mã nhiều lần)' },
    reset: 'Cho làm lại', unlock: 'Mở khóa', sureReset: function (n) { return 'Xóa bài làm của ' + n + ' để em làm lại từ đầu?'; },
    sum: { range: 'Thấp nhất – cao nhất', todo: 'Chưa làm', n: 'Đã nộp', mean: 'Điểm trung bình', med: 'Trung vị', pass: 'Từ 5 trở lên', good: 'Từ 8 trở lên', work: 'Đang làm', none: 'Chưa vào', hi: 'Cao nhất', lo: 'Thấp nhất', rate: 'Tỉ lệ đã làm' },
    focus: { home: 'Bài tập về nhà để luyện tập: bảng chú ý ai đã làm, ai chưa, và những câu cả lớp hay sai để chữa ở tiết sau.', test: 'Bài kiểm tra để đánh giá: bảng chú ý điểm từng em, phổ điểm, và số lần rời trang trong lúc làm.', free: 'Luyện tập tự nguyện: bảng chỉ cho biết em nào đã luyện.' },
    away: 'Rời trang', awayTip: 'Số lần em rời khỏi trang (mở ứng dụng khác, chuyển thẻ, tải lại) trong lúc làm. Học sinh được báo trước điều này. Một hai lần có thể do điện thoại; nhiều lần thì thầy cô nên hỏi lại em.',
    dist: 'Phổ điểm', bands: ['Dưới 5', 'Từ 5 đến dưới 6,5', 'Từ 6,5 đến dưới 8', 'Từ 8 trở lên'],
    remindH: 'Nhắc các em chưa làm', remindLead: 'Các em dưới đây chưa nộp. Thầy cô có thể nhắn riêng phụ huynh, hoặc gửi lời nhắc chung (không nêu tên) vào nhóm lớp.', remindCopy: 'Chép lời nhắc chung',
    remindMsg: function (a, n, t2, link) { return '⏰ Còn ' + n + ' bạn chưa làm bài "' + a.title + '". Hạn nộp: ' + t2 + '.\nCác con mở ' + link + ' và làm bài nhé. Nhờ bố mẹ nhắc con. Cảm ơn các bố mẹ!'; },
    legend: '<span><i class="ok">✓</i> đúng</span><span><i class="half">½</i> đúng một phần</span><span><i class="no">✗</i> sai</span><span><i class="no">·</i> bỏ trống</span><span><i class="on"></i> đang làm, đã trả lời</span>', legendFree: '<span><i class="on"></i> đã luyện câu này</span>',
    fix: '3 câu nên chữa đầu giờ', fixWait: 'Khi có từ 3 em nộp bài, phần này sẽ cho biết câu nào cả lớp hay sai nhất để chữa.', nPick: function (k) { return k + ' em chọn'; },
    nowLine: function (w, z, t) { return 'Đang làm: ' + w + (t ? ' · Chưa vào: ' + z : ''); }, fixLead: 'Những câu cả lớp làm đúng ít nhất, kèm phương án sai được chọn nhiều nhất (thường là chỗ hiểu nhầm cần gỡ).', right: '% đúng', chose: 'Các em chọn', perQ: 'Tỉ lệ đúng từng câu', topic: 'Chủ đề',
    freeHide: 'Hình thức tự nguyện: bảng chỉ hiện em nào đã luyện tập, không hiện điểm từng em.', waitOpen: 'Bài chưa mở. Bảng sẽ có số liệu khi học sinh bắt đầu làm.', mins: 'phút',
    delAcc: 'Xóa tài khoản', delAccLead: 'Xóa tài khoản sẽ xóa luôn mọi lớp, danh sách học sinh, bài đã giao và bài làm. Gõ email của thầy cô để xác nhận.', delAccGo: 'Xóa vĩnh viễn', sureDelAcc: 'Thầy cô chắc chắn muốn xóa tài khoản?',
    gName: function (n) { return 'Lớp ' + n; }, loading: 'Đang tải…',
    noAcc: 'Chỉ cần ra đề in giấy, hoặc cho cả lớp làm bài trực tiếp trên lớp? Không cần tài khoản:', noAccLink: 'tạo đề ngay ở Góc giáo viên →'
  } : {
    login: 'Log in', signup: 'Create a teacher account', forgot: 'Forgot password', logout: 'Log out', account: 'Account',
    email: 'Email', pw: 'Password', pw2: 'Password again', pwNew: 'New password', name: 'Display name', nameHint: 'Students and parents will see it. For example: Ms Lan Nguyen', pwHint: 'At least 8 characters', newAcc: 'Create an account', forgotQ: 'Forgot your password?', backLogin: '← Back to log in', resetH: 'Reset your password', school: 'School (optional)', rc: 'Recovery code (12 characters)',
    agree: 'I am a teacher. I agree that Lemonmath keeps my class list, the personal codes and my students’ answers to mark the work and report to me. Answers are deleted 30 days after an assignment closes; I can delete a class or the whole account at any time.',
    needAgree: 'Please tick the agreement box above.', short: 'The password needs at least 8 characters.', mismatch: 'The two passwords are not the same.', fill: 'Please fill in every box.',
    errs: { bad_login: 'Email or password is not right.', bad_recovery: 'Email or recovery code is not right.', email_taken: 'This email already has an account. Log in, or use Forgot password.', bad_email: 'That email does not look right.', locked: 'Too many wrong tries, so the account is locked for 15 minutes. Please try later.', offline: 'Could not reach the server. Check your connection and try again.', too_many_today: 'You have set many assignments today. Please try tomorrow.', bad_time: 'The closing time must be after the opening time.', need_duration: 'A test needs a time limit (minutes).', bad_code: 'The code is not right or has expired.', email_off: 'Email is not switched on yet. Please use your recovery code.', past: 'The closing time has already passed.', too_long: 'An assignment can stay open for at most 60 days.', no_students: 'The class list is empty.', too_many_students: 'A class can have at most 80 students.', too_many_classes: 'An account can have at most 40 classes.', server: 'The server hit an error. Please try again in a few minutes.' },
    rcTitle: 'Your recovery code', rcLead: 'Write this code down and keep it somewhere safe (a notebook, a note on your phone). If you forget your password, it lets you set a new one. It is shown on screen only once.', rcMailed: 'It has also been sent to your sign-up email (check the spam folder if you cannot see it).',
    viaMail: 'Get a code by email', viaRc: 'Use my recovery code', sendCode: 'Email me a code', code6: '6-digit code from the email', sentCode: function (m) { return 'If this email has an account, Lemonmath has just sent a 6-digit code (it works for ' + m + ' minutes). Check the spam folder too.'; }, setPw: 'Set the new password',
    rcNew: 'Make a new recovery code', rcNewLead: 'Lost your recovery code? Make a new one; the old one will stop working.', sureRc: 'Make a new recovery code? The old one will stop working.', rcCopy: 'Copy the code', rcSave: 'Save to this device', rcDone: 'I have saved the code', copied: 'Copied',
    hello: 'Hello', classes: 'My classes', noClass: 'You have no classes yet. Create the first one below.', newClass: 'Create a class', className: 'Class name (e.g. 10A1)', grade: 'Grade', namesL: 'Students, one per line, in register order', rosterH: 'Student list', ways2: { list: ['Enter the list now', 'Paste names from your register or a spreadsheet, one per line. Each student gets a personal code you can print and hand out.'], self: ['Let students type their names', 'Nothing to enter now. The first time they open an assignment, each student types their full name and gets a personal code. You can check and fix names later.'] },
    selfJoinL: 'Let students who are not on the list type their name when they open an assignment', selfJoinHint: 'Names typed by students are marked “added” so you can check them. Untick this once the list is complete.',
    selfBadge: 'added', okName: 'Name is right', stuSelf: 'students type their names',
    emptyRoster: 'No students yet. When you set an assignment, students open the link, type their full name and get a personal code; their names will appear here.', emptyRosterOff: 'No students yet. Add a list below, or tick the box to let students type their names.',
    showPw: 'Show password', hidePw: 'Hide password', msgSelf: 'If your name is not on the list: press “Type your name”, enter your full name, and write down the personal code you are given for next time.', namesPh: 'Anna Nguyen\nBinh Tran\nChau Le', create: 'Create the class',
    stu: 'students', hws: 'assignments', back: '← My classes', backClass: '← Back to the class', tabHw: 'Assignments', tabStu: 'Students and personal codes',
    newHw: '+ New assignment', noHw: 'No assignments for this class yet.', code: 'Code', st: { soon: 'Opens soon', open: 'Open', closed: 'Closed' }, doneOf: function (a, b) { return a + '/' + b + ' handed in'; },
    no: 'No.', sname: 'Name', pin: 'Personal code', act: '', newPin: 'New code', remove: 'Remove', rename: 'Rename', addStu: 'Add students (one per line)', add: 'Add to the class', printSlips: '🖨 Print personal code slips', delClass: 'Delete this class',
    sureRemove: function (n) { return 'Remove ' + n + ' from the class? Their work in earlier assignments is kept.'; }, sureNewPin: function (n) { return 'Give ' + n + ' a new personal code? The old one will stop working.'; }, askName: 'New name:',
    sureDelClass: function (n) { return 'Delete class ' + n + ' with all its assignments and the students’ work? This cannot be undone.'; },
    slipHead: 'Lemonmath · Maths assignments', slipGo: 'Go to', slipPin: 'Personal code', slipNote: 'Keep this code to yourself.',
    pinNote: 'Each student has a 4-digit personal code. To start an assignment they choose their name and type the code, so nobody else can do it for them. Print the slips and hand them out (or message them to parents).',
    steps: ['Kind', 'Questions', 'Time', 'Options'],
    kindShort: { home: 'For practice. A wide window, explanations straight after handing in, practise again.', test: 'For assessment. Everyone at the same time, a strict limit, one attempt.', free: 'No tight deadline, no individual scores shown.' },
    tTonight: '20:00 tonight', tTomorrow: '20:00 tomorrow', tNow: 'Right now', tl: ['Opens', 'Last start', 'Closes'],
    tlNote: function (l, d) { return 'Anyone who starts before ' + l + ' gets the full ' + d + ' minutes.'; },
    durL: 'Time limit per student (minutes)', durPh: 'No limit', pinL: 'Require the personal code (so nobody does it for them)', shufL: 'Shuffle questions and options for each student',
    keyL: 'Show explanations', keyO: { submit: 'As soon as they hand in', close: 'After it closes' },
    testFixed: ['Personal code required', 'Questions and options shuffled', 'One attempt each', 'Answers after it closes', 'Page-leaving counted'], testFixedH: 'A test always has:',
    giveHw: 'Set the homework', giveTest: 'Set the test', maxN: function (n) { return n + ' available'; },
    hwTitle: 'New assignment', hwName: 'Title', hwNameV: function (d) { return 'Homework for ' + d; }, testNameV: function (d) { return 'Test for ' + d; }, bank: 'Questions from', pickBank: 'Choose…', lessons: 'Choose lessons', all: 'Select all', none: 'Clear', count: 'Number of questions', mc: 'Multiple choice', tf: 'True or false', sa: 'Short answer', have: 'available',
    shuffleL: 'Shuffle the questions and options for each student (makes copying harder)', mode: 'Kind', modes: { home: 'Homework', test: 'Test', class2: 'Practice in class', free: 'Optional practice with parents' },
    kindDesc: { home: 'For practice. A wide window, students work when it suits them; after handing in they see the explanations at once and can practise again (not scored). The board shows who has not done it and what the class missed most.', test: 'For assessment. The whole class at the same time, with a short, strict time limit; personal code and shuffling always on; one attempt, answers only after it closes; page-leaving is counted. The board shows scores and their spread.', free: 'No tight deadline, no individual scores shown.' },
    freeNote: 'For grades 1 to 5 Lemonmath offers optional practice only: no tight deadline, and the board does not show each child’s score.',
    when: 'When', from: 'Opens', to: 'Due', presets: ['Until 21:00 tonight', 'Until 21:00 tomorrow', 'Until the end of Sunday', 'Open for a week'],
    tPresets: ['20:00 (the next one)', 'Right now (in class)'], tStart: 'Starts', tDur: 'Time allowed (minutes)', tLate: 'Late start allowed (minutes)',
    tCloses: function (c, l, d) { return 'Closes by itself at ' + c + '. Anyone who starts before ' + l + ' gets the full ' + d + ' minutes; after ' + l + ' nobody can start.'; },
    estShort: ' The time allowed is shorter than the estimate.', lastStart: function (t) { return 'last start ' + t; }, durOpt: 'Time limit per student (optional)',
    dur: 'Minutes per student (0 = no limit)', needPin: 'Require the personal code (recommended for tests)', keyWhen: 'Students see answers and explanations', keyOpts: { close: 'after the assignment closes (best for tests)', submit: 'as soon as they hand in (good for practice)' },
    est: function (m) { return 'About ' + m + ' minutes of work.'; }, estLong: ' Rather long for one evening: short, regular homework works better than long homework.', estWin: ' The window is shorter than the estimated time.',
    give: 'Set the assignment', needLesson: 'Please choose at least one lesson.', needCount: 'Enter a number of questions for at least one part.', loadErr: 'The question bank could not be loaded. Check your connection and try again.',
    shareH: 'Send it to your students', shareLead: 'Students open the link, choose their name and type their personal code. Or they open the homework page and type the code.', link: 'Link', copyLink: 'Copy the link', zalo: 'A message to paste into the class group', copyMsg: 'Copy the message', scan: 'Scan to open the homework page, then type the code',
    msg: function (a, link, cls, t1, t2, tl) {
      if (a.mode === 'test') return '📝 Test: ' + a.title + ' (class ' + cls + ')\nStarts at ' + t1 + ', ' + a.duration_min + ' minutes. Start by ' + tl + ' at the latest; after that the page will not let you in.\nOpen: ' + link + '\nChoose your name, type your 4-digit personal code, then press Start. The clock runs from then and does not stop if you leave the page.\nCode: ' + a.code + '\nParents, please help your child find a quiet place at this time. Thank you!';
      return '📚 ' + a.title + ' (class ' + cls + ')\nWhen: ' + t1 + ' to ' + t2 + (a.duration_min ? ', up to ' + a.duration_min + ' minutes each' : '') + '.\nOpen: ' + link + '\nChoose your name' + (a.require_pin ? ', type your 4-digit personal code' : '') + ', then start. Remember to write your working in your book!\nCode: ' + a.code + '\nParents, please remind your child of the time and praise the effort. Thank you!'; },
    board: 'Results', refresh: 'Refresh', closeNow: 'Close now', sureClose: 'Close the assignment now? Students still working are handed in with what they have.', extend: 'Extend', ext: ['+15 min', '+1 hour', '+1 day'], extT: ['+5 min', '+15 min'], extH: ['+1 hour', '+1 day'], adjust: 'Extend or close early', perStu: function (m) { return m + ' minutes each'; }, perMax: function (m) { return 'up to ' + m + ' minutes each'; }, due: 'Due', opens: 'Opens', qrH: 'QR code for the projector', delHwH: 'Delete this assignment', reshare: 'Send to students', delHw: 'Delete', sureDelHw: 'Delete this assignment and the students’ work? This cannot be undone.',
    copyScores: 'Copy scores', csv: 'Download CSV', toSc: 'Write notes for parents →', status: 'Status', score: 'Score', time: 'Time', q: 'Q',
    s: { none: 'Not started', work: 'Working', done: 'Handed in', auto: 'Handed in when time ran out', late: 'Late (no connection)', locked: 'Locked (wrong code too often)' },
    reset: 'Let them start again', unlock: 'Unlock', sureReset: function (n) { return 'Delete ' + n + '’s work so they can start again?'; },
    sum: { range: 'Lowest – highest', todo: 'Not done', n: 'Handed in', mean: 'Mean', med: 'Median', pass: '5 or above', good: '8 or above', work: 'Working', none: 'Not started', hi: 'Highest', lo: 'Lowest', rate: 'Done' },
    focus: { home: 'Homework is for practice: the board shows who has done it, who has not, and the questions the class missed most, to go over next lesson.', test: 'A test is for assessment: the board shows each score, the spread of scores, and how often each student left the page while working.', free: 'Optional practice: the board shows only who has practised.' },
    away: 'Left page', awayTip: 'How many times the student left the page (another app, another tab, reloading) while working. Students are told about this beforehand. Once or twice can be the phone; many times is worth a quiet word.',
    dist: 'Spread of scores', bands: ['Below 5', '5 to under 6.5', '6.5 to under 8', '8 and above'],
    remindH: 'Remind those who have not done it', remindLead: 'These students have not handed in. You can message their parents, or post a general reminder (no names) in the class group.', remindCopy: 'Copy the general reminder',
    remindMsg: function (a, n, t2, link) { return '⏰ ' + n + ' students still have to do "' + a.title + '". Due: ' + t2 + '.\nOpen ' + link + ' and do it, please. Parents, a reminder would help. Thank you!'; },
    legend: '<span><i class="ok">✓</i> right</span><span><i class="half">½</i> partly right</span><span><i class="no">✗</i> wrong</span><span><i class="no">·</i> blank</span><span><i class="on"></i> still working, answered</span>', legendFree: '<span><i class="on"></i> practised this question</span>',
    fix: '3 questions to go over in class', fixWait: 'Once 3 or more students have handed in, this shows the questions the class missed most.', nPick: function (k) { return k + ' chose it'; },
    nowLine: function (w, z, t) { return 'Working now: ' + w + (t ? ' · Not started: ' + z : ''); }, fixLead: 'The questions the class got right least often, with the wrong option chosen most (usually the misconception to clear up).', right: '% right', chose: 'Chosen', perQ: 'Right answers per question', topic: 'Topic',
    freeHide: 'Optional practice: the board shows who has practised, not each child’s score.', waitOpen: 'Not open yet. The board fills in when students start.', mins: 'min',
    delAcc: 'Delete account', delAccLead: 'Deleting the account deletes every class, class list, assignment and all students’ work. Type your email to confirm.', delAccGo: 'Delete for good', sureDelAcc: 'Are you sure you want to delete the account?',
    gName: function (n) { return 'Grade ' + n; }, loading: 'Loading…',
    noAcc: 'Just need a printed test, or a live test in class? No account needed:', noAccLink: 'make a test now in the Teachers’ corner →'
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
  /* every password box gets a small "show" button, so a typo is easy to spot */
  function eyes(root) {
    $$('input[type="password"]:not([data-eye])', root).forEach(function (inp) {
      inp.setAttribute('data-eye', '1');
      var wrap = el('span', 'cr-pwbox'); inp.parentNode.insertBefore(wrap, inp); wrap.appendChild(inp);
      var b = el('button', 'cr-eye'); b.type = 'button'; b.setAttribute('aria-pressed', 'false'); b.setAttribute('aria-label', T.showPw); b.title = T.showPw; b.textContent = '👁';
      b.addEventListener('click', function () {
        var show = inp.type === 'password'; inp.type = show ? 'text' : 'password';
        b.setAttribute('aria-pressed', String(show)); b.setAttribute('aria-label', show ? T.hidePw : T.showPw); b.title = show ? T.hidePw : T.showPw; b.classList.toggle('on', show);
        inp.focus();
      });
      wrap.appendChild(b);
    });
  }
  if (window.MutationObserver) new MutationObserver(function () { eyes(app); }).observe(app, { childList: true, subtree: true });
  var fmtDay = function (t) {
    try { return new Intl.DateTimeFormat(vi ? 'vi-VN' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'numeric' }).format(new Date(t)); } catch (e) { return new Date(t).toDateString(); }
  };
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  /* a test's three moments: opens, last start, closes */
  function timeline(open, last, close, d) {
    return '<ol>' + [open, last, close].map(function (t, i) { return '<li><b>' + esc(fmtDT(t)) + '</b><span>' + T.tl[i] + '</span></li>'; }).join('') + '</ol><p>' + esc(fmtDay(open)) + ' · ' + esc(T.tlNote(fmtDT(last), d)) + '</p>';
  }
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
    var h = location.hash.replace(/^#\/?/, '').split('/'), lead = d.querySelector('.teach .lead');
    if (lead) lead.hidden = !!(me && me.token);       // the introduction is for visitors; teachers who are in see their classes straight away
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
  var info = null;
  function getInfo() {
    if (info) return Promise.resolve(info);
    return fetch(API + '/v1/info', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (j) { info = j; return j; }, function () { return { email: false }; });
  }
  var LANG = vi ? 'vi' : 'en';
  function authView(mode, way) {
    var tab = function (m, label, href) { return '<a href="' + href + '" class="cr-tab' + (mode === m ? ' on' : '') + '">' + label + '</a>'; };
    var f = function (id, label, type, extra, hint) { return '<label>' + label + (hint ? '<small class="cr-hint">' + hint + '</small>' : '') + '<input id="' + id + '" type="' + type + '" ' + (extra || '') + '></label>'; };
    var tabs = mode === 'forgot' ? '<p class="cr-back"><a href="#/">' + T.backLogin + '</a></p><h2 class="cr-h">' + T.resetH + '</h2>'
      : '<div class="cr-tabs cr-tabs2" role="tablist">' + tab('login', T.login, '#/') + tab('signup', T.newAcc, '#/dang-ki') + '</div>';
    if (mode === 'forgot' && !way) {
      app.innerHTML = tabs + '<p>' + T.loading + '</p>';
      getInfo().then(function (i) { if (/khoi-phuc|recover/.test(location.hash) && !(me && me.token)) authView('forgot', i.email ? 'mail' : 'rc'); });
      return;
    }
    var ways = mode === 'forgot' && info && info.email ? '<p class="cr-ways">' + ['mail', 'rc'].map(function (w) { return '<button type="button" class="cr-way' + (w === way ? ' on' : '') + '" data-w="' + w + '" aria-pressed="' + (w === way) + '">' + (w === 'mail' ? T.viaMail : T.viaRc) + '</button>'; }).join('') + '</p>' : '';
    if (mode === 'forgot' && way === 'mail') return mailResetView(tabs + ways, f);
    app.innerHTML = tabs + ways +
      '<form class="jn-form cr-auth" id="cr-f">' +
      (mode === 'signup' ? f('cr-name', T.name, 'text', 'maxlength="80" autocomplete="name"', T.nameHint) + f('cr-school', T.school, 'text', 'maxlength="120" autocomplete="organization"') : '') +
      f('cr-email', T.email, 'email', 'autocomplete="email" maxlength="254"') +
      (mode === 'forgot' ? f('cr-rc', T.rc, 'text', 'autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="20"') : '') +
      f('cr-pw', mode === 'forgot' ? T.pwNew : T.pw, 'password', 'autocomplete="' + (mode === 'login' ? 'current-password' : 'new-password') + '" maxlength="200"', mode === 'login' ? '' : T.pwHint) +
      (mode !== 'login' ? f('cr-pw2', T.pw2, 'password', 'autocomplete="new-password" maxlength="200"') : '') +
      (mode === 'signup' ? '<label class="tool-check cr-agree"><input type="checkbox" id="cr-agree"> <span>' + T.agree + '</span></label>' : '') +
      '<button class="btn" type="submit" id="cr-go">' + (mode === 'login' ? T.login : mode === 'signup' ? T.signup : T.setPw) + '</button>' + msgBox('cr-msg') +
      (mode === 'login' ? '<p class="cr-forgot"><a href="#/khoi-phuc">' + T.forgotQ + '</a></p>' : '') + '</form>' +
      (mode !== 'forgot' && SC ? '<p class="cr-noacc">' + T.noAcc + ' <a href="' + esc(SC) + '#tq-app">' + T.noAccLink + '</a></p>' : '');
    bindWays();
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
        if (mode === 'signup') return api('POST', '/v1/auth/signup', { email: email, pw: h, name: $('#cr-name').value, school: $('#cr-school').value, lang: LANG });
        return api('POST', '/v1/auth/recover', { email: email, pw: h, recovery: $('#cr-rc').value });
      }).then(function (r) {
        setMe({ token: r.token, teacher: r.teacher });
        if (r.recovery) recoveryView(r.recovery, r.mailed); else go('#/');
      }).catch(function (er) { busy(btn, false); msg.textContent = errText(er); });
    });
  }
  function bindWays() {
    $$('.cr-way').forEach(function (b) { b.addEventListener('click', function () { authView('forgot', b.getAttribute('data-w')); }); });
  }
  /* Forgot password, by e-mail: step 1 sends a 6-digit code, step 2 sets the new password with it. */
  function mailResetView(head, f) {
    app.innerHTML = head + '<form class="jn-form cr-auth" id="cr-f">' + f('cr-email', T.email, 'email', 'autocomplete="email" maxlength="254"') +
      '<button class="btn btn-outline" type="button" id="cr-send">' + T.sendCode + '</button>' + msgBox('cr-sent') +
      '<div id="cr-step2" hidden>' + f('cr-code', T.code6, 'text', 'inputmode="numeric" autocomplete="one-time-code" maxlength="7" pattern="[0-9 ]*"') +
      f('cr-pw', T.pwNew, 'password', 'autocomplete="new-password" maxlength="200"', T.pwHint) + f('cr-pw2', T.pw2, 'password', 'autocomplete="new-password" maxlength="200"') +
      '<button class="btn" type="submit" id="cr-go">' + T.setPw + '</button></div>' + msgBox('cr-msg') + '</form>';
    bindWays();
    $('#cr-send').addEventListener('click', function () {
      var btn = this, email = $('#cr-email').value.trim(), out = $('#cr-sent');
      if (!email) { out.textContent = T.fill; return; }
      busy(btn, true); out.textContent = T.loading;
      api('POST', '/v1/auth/reset-request', { email: email, lang: LANG }).then(function (r) {
        out.textContent = T.sentCode(r.minutes); $('#cr-step2').hidden = false; $('#cr-code').focus();
        setTimeout(function () { busy(btn, false); }, 30000);
      }).catch(function (e) { busy(btn, false); out.textContent = errText(e); });
    });
    $('#cr-f').addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = $('#cr-msg'), btn = $('#cr-go'), email = $('#cr-email').value.trim(), pw = $('#cr-pw').value, code = $('#cr-code').value.replace(/\D/g, '');
      if (!email || !pw || code.length !== 6) { msg.textContent = T.fill; return; }
      if (pw.length < 8) { msg.textContent = T.short; return; }
      if (pw !== $('#cr-pw2').value) { msg.textContent = T.mismatch; return; }
      busy(btn, true); msg.textContent = T.loading;
      pwHash(email, pw).then(function (h) { return api('POST', '/v1/auth/reset', { email: email, code: code, pw: h }); })
        .then(function (r) { setMe({ token: r.token, teacher: r.teacher }); go('#/'); })
        .catch(function (er) { busy(btn, false); msg.textContent = errText(er); });
    });
  }
  function recoveryView(rc, mailed) {
    app.innerHTML = '<section class="tool cr-rc"><h2>' + T.rcTitle + '</h2><p class="cr-code">' + esc(rc) + '</p><p>' + T.rcLead + '</p>' + (mailed ? '<p class="cr-ok">✉️ ' + T.rcMailed + '</p>' : '') + '<p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-c">' + T.rcCopy + '</button><button type="button" class="btn btn-outline" id="cr-s">' + T.rcSave + '</button><button type="button" class="btn" id="cr-ok">' + T.rcDone + '</button></p></section>';
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
      '<p class="cr-sub">' + T.rosterH + '</p><div class="cr-kinds">' + ['list', 'self'].map(function (w, i) {
        return '<label class="cr-kind"><input type="radio" name="cr-way" value="' + w + '"' + (i === 0 ? ' checked' : '') + '><span><b>' + T.ways2[w][0] + '</b><small>' + T.ways2[w][1] + '</small></span></label>';
      }).join('') + '</div>' +
      '<div id="cr-namesbox"><label class="cr-lbl" for="cr-names">' + T.namesL + '</label><textarea id="cr-names" rows="8" placeholder="' + esc(T.namesPh) + '"></textarea></div>' +
      '<p class="tool-actions"><button type="button" class="btn" id="cr-mk">' + T.create + '</button></p>' + msgBox('cr-msg') + '</section>';
    $$('input[name="cr-way"]').forEach(function (r) { r.addEventListener('change', function () { $('#cr-namesbox').hidden = r.value === 'self' && r.checked; }); });
    api('GET', '/v1/classes').then(function (r) {
      var box = $('#cr-list'); if (!box) return;
      box.innerHTML = r.classes.length ? r.classes.map(function (c) {
        return '<a class="cr-card" href="#/lop/' + esc(c.id) + '"><b>' + esc(c.name) + '</b><span>' + (c.grade ? T.gName(c.grade) + ' · ' : '') + c.n + ' ' + T.stu + (c.self_join ? ' (' + T.stuSelf + ')' : '') + ' · ' + c.hw + ' ' + T.hws + '</span></a>';
      }).join('') : '<p>' + T.noClass + '</p>';
    }).catch(function (e) { var box = $('#cr-list'); if (box) box.innerHTML = '<p class="tool-msg">' + errText(e) + '</p>'; });
    $('#cr-mk').addEventListener('click', function () {
      var btn = this, msg = $('#cr-msg'), self = ($('input[name="cr-way"]:checked') || {}).value === 'self';
      var names = self ? [] : $('#cr-names').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
      if (!$('#cr-cn').value.trim() || (!self && !names.length)) { msg.textContent = T.fill; return; }
      busy(btn, true);
      api('POST', '/v1/classes', { name: $('#cr-cn').value, grade: $('#cr-cg').value, students: names, self_join: self }).then(function (r) { go('#/lop/' + r.class.id + '/hoc-sinh'); })
        .catch(function (e) { busy(btn, false); msg.textContent = errText(e); });
    });
  }

  /* ------------------------------------------------------------ 3. one class: assignments, students */
  function classView(id, tab) {
    app.innerHTML = top('<a href="#/">' + T.back + '</a> · ') + '<p>' + T.loading + '</p>';
    api('GET', '/v1/classes/' + id).then(function (r) {
      if (location.hash.indexOf('#/lop/' + id) !== 0) return;      // the teacher has already moved on
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
      var now = r.now, box = $('#cr-hws'); if (!box) return;     // the teacher has already moved on
      box.innerHTML = r.assignments.length ? '<div class="cr-cards">' + r.assignments.map(function (a) {
        var s = stateOf(a, now);
        var when = a.mode === 'test' ? esc(fmtDT(a.open_at, true)) + ' · ' + esc(T.perStu(a.duration_min)) : T.due + ' ' + esc(fmtDT(a.close_at, true));
        return '<a class="cr-card cr-' + s + '" href="#/bai/' + a.code + '"><span class="cr-meta"><span class="cr-kb k-' + esc(a.mode) + '">' + esc(T.modes[a.mode] || '') + '</span> <span class="cr-badge cr-' + s + '">' + T.st[s] + '</span></span><b>' + esc(a.title) + '</b><span>' + when + '</span><span>' + T.code + ' ' + a.code + ' · ' + T.doneOf(a.done, students.length) + '</span></a>';
      }).join('') + '</div>' : '<p>' + T.noHw + '</p>';
    }).catch(function (e) { var box = $('#cr-hws'); if (box) box.innerHTML = '<p class="tool-msg">' + errText(e) + '</p>'; });
  }
  function studentsTab(c, students) {
    var body = $('#cr-body');
    var draw = function (list) {
      students = list;
      body.innerHTML = '<label class="tool-check cr-sj"><input type="checkbox" id="cr-sj"' + (c.self_join ? ' checked' : '') + '> <span>' + T.selfJoinL + '<small>' + T.selfJoinHint + '</small></span></label>' +
        (list.length ? '<p class="tool-mini">' + T.pinNote + '</p><p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-print">' + T.printSlips + '</button></p>' +
        '<div class="cr-scroll"><table class="cr-table cr-stu"><thead><tr><th>' + T.no + '</th><th class="l">' + T.sname + '</th><th>' + T.pin + '</th><th></th></tr></thead><tbody>' +
        list.map(function (s) {
          return '<tr data-id="' + esc(s.id) + '"><td>' + s.no + '</td><td class="l">' + esc(s.name) + (s.self ? ' <span class="cr-selfb">' + T.selfBadge + '</span> <button type="button" class="tool-link" data-do="ok">' + T.okName + '</button>' : '') + '</td><td class="cr-pin">' + esc(s.pin) + '</td><td class="cr-act"><button type="button" class="tool-link" data-do="rename">' + T.rename + '</button> <button type="button" class="tool-link" data-do="repin">' + T.newPin + '</button> <button type="button" class="tool-link" data-do="remove">' + T.remove + '</button></td></tr>';
        }).join('') + '</tbody></table></div>' : '<p class="cr-empty">' + (c.self_join ? T.emptyRoster : T.emptyRosterOff) + '</p>') +
        '<label class="cr-lbl" for="cr-add">' + T.addStu + '</label><textarea id="cr-add" rows="3"></textarea><p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-addgo">' + T.add + '</button></p>' +
        '<details class="cr-dz"><summary>' + T.delClass + '</summary><p class="tool-mini">' + esc(T.sureDelClass(c.name)) + '</p><p><button type="button" class="btn btn-outline cr-danger" id="cr-del">' + T.delClass + '</button></p></details>' + msgBox('cr-msg');
      if ($('#cr-print')) $('#cr-print').addEventListener('click', function () { printSlips(c, students); });
      $('#cr-sj').addEventListener('change', function () { patch({ self_join: this.checked }, this); });
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
      api('PATCH', '/v1/classes/' + c.id, b).then(function (r) { c.self_join = r.class.self_join; draw(r.students); }).catch(function (e) { busy(btn, false); $('#cr-msg').textContent = errText(e); });
    };
    body.onclick = function (e) {
      var b = e.target.closest ? e.target.closest('[data-do]') : null; if (!b) return;
      var id = b.closest('tr').getAttribute('data-id'), s = students.filter(function (x) { return x.id === id; })[0]; if (!s) return;
      var k = b.getAttribute('data-do');
      if (k === 'ok') patch({ confirm: [id] }, b);
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
      var kinds = primary ? ['free'] : ['home', 'test'];
      var step = function (i, inner, id, hidden) { return '<fieldset class="tool-set cr-step"' + (id ? ' id="' + id + '"' : '') + (hidden ? ' hidden' : '') + '><legend><span class="cr-sn">' + (i + 1) + '</span> ' + T.steps[i] + '</legend>' + inner + '</fieldset>'; };
      var chip = function (cls, data, label) { return '<button type="button" class="cr-chip ' + cls + '" ' + data + '>' + label + '</button>'; };
      app.innerHTML = top('<a href="#/lop/' + esc(classId) + '">' + T.backClass + '</a> · ') + '<section class="tool cr-new"><h2>' + T.hwTitle + ' · ' + esc(c.name) + '</h2>' +
        step(0, '<div class="cr-kinds">' + kinds.map(function (m, i) {
          return '<label class="cr-kind"><input type="radio" name="nw-mode" value="' + m + '"' + (i === 0 ? ' checked' : '') + (kinds.length === 1 ? ' hidden' : '') + '><span><b>' + T.modes[m] + '</b><small>' + T.kindShort[m] + '</small></span></label>';
        }).join('') + '</div>' + (primary ? '<p class="tool-mini">' + T.freeNote + '</p>' : '')) +
        step(1, '<label class="cr-field">' + T.hwName + '<input type="text" id="nw-title" maxlength="120" value="' + esc(T.hwNameV(today)) + '"></label>' +
          '<label class="cr-field">' + T.bank + '<select id="nw-bank"><option value="">' + T.pickBank + '</option>' +
          banks.map(function (b) { return '<option value="' + esc(b.id) + '"' + (b.id === 'g' + g ? ' selected' : '') + '>' + esc(b.name) + ' (' + b.n + ')</option>'; }).join('') + '</select></label>' +
          '<div id="nw-ls" hidden><p class="cr-sub">' + T.lessons + ' <span class="tool-mini"><button type="button" class="tool-link" id="nw-all">' + T.all + '</button> · <button type="button" class="tool-link" id="nw-none">' + T.none + '</button></span></p><div id="nw-tree" class="cr-tree"></div></div>' +
          '<p class="cr-sub">' + T.count + '</p><div class="cr-counts">' + ['mc', 'tf', 'sa'].map(function (k, i) { return '<label>' + T[k] + '<input type="number" id="nw-' + k + '" min="0" max="40" value="' + [10, 0, 0][i] + '" inputmode="numeric"><small id="nw-h-' + k + '"></small></label>'; }).join('') + '</div>' +
          '<p class="cr-est" id="nw-est"></p>') +
        step(2, '<div class="cr-chips">' + T.presets.map(function (p, i) { return chip('cr-pre', 'data-p="' + i + '"', p); }).join('') + '</div>' +
          '<div class="cr-two"><label class="cr-field">' + T.from + '<input type="datetime-local" id="nw-open"></label><label class="cr-field">' + T.to + '<input type="datetime-local" id="nw-close"></label></div>' +
          '<label class="cr-field">' + T.durL + '<input type="number" id="nw-dur" min="1" max="300" placeholder="' + T.durPh + '" inputmode="numeric"></label>', 'nw-home') +
        step(2, '<label class="cr-field">' + T.tStart + '<input type="datetime-local" id="nw-tstart"></label><div class="cr-chips">' + chip('cr-tpre', 'data-p="0"', Date.now() > at(19, 55, 0) ? T.tTomorrow : T.tTonight) + chip('cr-tpre', 'data-p="1"', T.tNow) + '</div>' +
          '<div class="cr-two"><label class="cr-field">' + T.tDur + '<input type="number" id="nw-tdur" min="1" max="300" value="15" inputmode="numeric"><span class="cr-chips">' + [15, 45, 90].map(function (m) { return chip('cr-tdur', 'data-d="' + m + '"', m + ' ' + T.mins); }).join('') + '</span></label>' +
          '<label class="cr-field">' + T.tLate + '<input type="number" id="nw-tlate" min="0" max="60" value="5" inputmode="numeric"></label></div>' +
          '<div class="cr-tl" id="nw-tl" aria-live="polite"></div>', 'nw-test', true) +
        step(3, '<label class="tool-check"><input type="checkbox" id="nw-pin"' + (primary ? '' : ' checked') + '> ' + T.pinL + '</label>' +
          '<label class="tool-check"><input type="checkbox" id="nw-shuf" checked> ' + T.shufL + '</label>' +
          '<label class="cr-field cr-inline">' + T.keyL + '<select id="nw-key"><option value="submit" selected>' + T.keyO.submit + '</option><option value="close">' + T.keyO.close + '</option></select></label>', 'nw-opt') +
        step(3, '<p class="cr-sub">' + T.testFixedH + '</p><ul class="cr-fixed">' + T.testFixed.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>', 'nw-topt', true) +
        '<p class="tool-actions"><button type="button" class="btn" id="nw-go">' + (primary ? T.give : T.giveHw) + '</button></p>' + msgBox('nw-msg') + '</section>';
      var bank = null, cache = {}, tree = $('#nw-tree');
      var setWin = function (a, b, el) { $('#nw-open').value = toInput(a); $('#nw-close').value = toInput(b); $$('.cr-pre').forEach(function (x) { x.classList.toggle('on', x === el); }); est(); };
      var late = Date.now() > at(20, 0, 0), sunday = (7 - new Date().getDay()) % 7 || (late ? 7 : 0);
      var pb = function (i) { return $('.cr-pre[data-p="' + i + '"]'); };
      var presets = [
        function () { setWin(Date.now(), at(21, 0, 0), pb(0)); },
        function () { setWin(Date.now(), at(21, 0, 1), pb(1)); },
        function () { setWin(Date.now(), at(23, 59, sunday), pb(2)); },
        function () { setWin(Date.now(), at(21, 0, 7), pb(3)); }
      ];
      ['nw-open', 'nw-close'].forEach(function (id) { $('#' + id).addEventListener('input', function () { $$('.cr-pre').forEach(function (x) { x.classList.remove('on'); }); }); });
      if (late) $('.cr-pre[data-p="0"]').hidden = true;      // "until 21:00 tonight" makes no sense after 20:00
      if (primary) presets[3](); else presets[1]();
      $$('.cr-pre').forEach(function (b) { b.addEventListener('click', function () { presets[+b.getAttribute('data-p')](); }); });
      /* a test: start time + time allowed + a few minutes to come in late = closing time */
      var tPresets = [
        function () { $('#nw-tstart').value = toInput(at(20, 0, Date.now() > at(19, 55, 0) ? 1 : 0)); testTimes(); },
        function () { $('#nw-tstart').value = toInput(Date.now()); testTimes(); }
      ];
      $$('.cr-tpre').forEach(function (b) { b.addEventListener('click', function () { tPresets[+b.getAttribute('data-p')](); }); });
      $$('.cr-tdur').forEach(function (b) { b.addEventListener('click', function () { $('#nw-tdur').value = b.getAttribute('data-d'); testTimes(); }); });
      function testWin() {
        var st = fromInput($('#nw-tstart').value), dm = parseInt($('#nw-tdur').value, 10) || 0, lm = Math.max(0, Math.min(60, parseInt($('#nw-tlate').value, 10) || 0));
        return { open: st, dur: dm, close: st + (lm + dm) * 60e3, last: st + lm * 60e3 };
      }
      function testTimes() {
        var w = testWin(), box = $('#nw-tl');
        box.innerHTML = isNaN(w.open) || w.dur < 1 ? '' : timeline(w.open, w.last, w.close, w.dur);
        $$('.cr-tdur').forEach(function (b) { b.classList.toggle('on', +b.getAttribute('data-d') === w.dur); });
        est();
      }
      tPresets[0]();
      ['nw-tstart', 'nw-tdur', 'nw-tlate'].forEach(function (id) { $('#' + id).addEventListener('input', testTimes); });
      function kind() { return ($('input[name="nw-mode"]:checked') || {}).value || 'home'; }
      function showKind() {
        var t = kind() === 'test', ti = $('#nw-title');
        $('#nw-home').hidden = t; $('#nw-test').hidden = !t; $('#nw-opt').hidden = t; $('#nw-topt').hidden = !t;
        if (ti.value === T.hwNameV(today) || ti.value === T.testNameV(today)) ti.value = t ? T.testNameV(today) : T.hwNameV(today);   // only if the teacher has not typed a title
        $('#nw-go').textContent = primary ? T.give : t ? T.giveTest : T.giveHw;
        est();
      }
      $$('input[name="nw-mode"]').forEach(function (r) { r.addEventListener('change', showKind); });
      function chosen() { return $$('input[data-l]:checked', tree).map(function (i) { return +i.getAttribute('data-l'); }); }
      function avail() {
        var ids = chosen(), n = { mc: 0, tf: 0, sa: 0 };
        if (bank) bank.items.forEach(function (it) { if (ids.indexOf(it.l) !== -1) n[it.y]++; });
        ['mc', 'tf', 'sa'].forEach(function (k) { $('#nw-h-' + k).textContent = ids.length ? T.maxN(n[k]) : ''; });
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
        var t = kind() === 'test', win = (fromInput($('#nw-close').value) - fromInput($('#nw-open').value)) / 60e3, lim = t ? testWin().dur : parseInt($('#nw-dur').value, 10) || 0;
        box.textContent = mins ? T.est(mins) + (mins > 60 && !t ? T.estLong : '') + (lim > 0 && lim < mins ? T.estShort : !t && win > 0 && win < mins ? T.estWin : '') : '';
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
      ['nw-mc', 'nw-tf', 'nw-sa', 'nw-open', 'nw-close', 'nw-dur'].forEach(function (id) { $('#' + id).addEventListener('input', est); });
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
        var mode = kind(), test = mode === 'test', tw = testWin();
        var open = test ? tw.open : fromInput($('#nw-open').value), close = test ? tw.close : fromInput($('#nw-close').value);
        if (test && !(tw.dur >= 1)) { msg.textContent = T.errs.need_duration; return; }
        if (!(close > open)) { msg.textContent = T.errs.bad_time; return; }
        busy(btn, true); msg.textContent = T.loading;
        api('POST', '/v1/assignments', {
          class_id: classId, title: $('#nw-title').value, lang: vi ? 'vi' : 'en', bank: $('#nw-bank').value, mode: mode,
          open_at: open, close_at: close, duration_min: test ? tw.dur : parseInt($('#nw-dur').value, 10) || 0,
          require_pin: test || $('#nw-pin').checked, show_key: test ? 'close' : $('#nw-key').value, shuffle: test || $('#nw-shuf').checked,
          items: list.map(function (it) { var o = { y: it.y, q: it.q, k: it.k, e: it.e || '', lt: lessonTitle(it.l) }; if (it.o) o.o = it.o; if (it.c) o.c = it.c; if (it.x) o.x = 1; if (it.v) o.v = it.v; return o; })
        }).then(function (r) { location.hash = '#/bai/' + r.assignment.code + '/gui'; })
          .catch(function (e) { busy(btn, false); msg.textContent = errText(e); });
      });
      est();
    }).catch(function (e) { app.innerHTML = top('<a href="#/lop/' + esc(classId) + '">' + T.backClass + '</a> · ') + '<p class="tool-msg">' + (e && e.error ? errText(e) : T.loadErr) + '</p>'; });
  }

  /* ------------------------------------------------------------ 5. one assignment: send it, follow it */
  function shareHtml(a, cls, selfJoin) {
    var link = HW + '?m=' + a.code, qr = $('#cr-qr');
    return '<section class="tool cr-share" id="cr-share"><h3>' + T.shareH + '</h3><p class="tool-mini">' + T.shareLead + '</p><p class="cr-code">' + a.code + '</p>' +
      '<p class="cr-linkline"><a href="' + esc(link) + '" target="_blank" rel="noopener">' + esc(link.replace(/^https?:\/\//, '')) + '</a></p>' +
      '<label class="cr-lbl" for="cr-zalo">' + T.zalo + '</label><textarea id="cr-zalo" rows="5">' + esc(T.msg(a, link, cls, fmtDT(a.open_at, true), fmtDT(a.close_at, true), fmtDT(a.close_at - a.duration_min * 60e3)) + (selfJoin ? '\n' + T.msgSelf : '')) + '</textarea>' +
      '<p class="tool-actions"><button type="button" class="btn" id="cr-cm">' + T.copyMsg + '</button><button type="button" class="btn btn-outline" id="cr-cl">' + T.copyLink + '</button></p>' +
      (qr ? '<details class="cr-qrd"><summary>' + T.qrH + '</summary><figure class="cr-qr">' + qr.innerHTML + '<figcaption>' + T.scan + '</figcaption></figure></details>' : '') + '</section>';
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
      return api('GET', '/v1/assignments/' + code).then(function (r) { if (location.hash.indexOf('#/bai/' + code) === 0) draw(r); return r; }).catch(function (e) { app.innerHTML = top() + '<p class="tool-msg">' + errText(e) + '</p>'; });
    };
    var draw = function (r) {
      var a = r.assignment, items = r.items, now = r.now, s = stateOf(a, now), free = a.mode === 'free', test = a.mode === 'test';
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
      var active = rows.filter(function (w) { return w.st.active; }).length, notDone = rows.filter(function (w) { return w.st.active && w.s10 == null; });
      var bandOf = function (v) { return v < 5 ? 0 : v < 6.5 ? 1 : v < 8 ? 2 : 3; }, bandN = [0, 0, 0, 0]; xs.forEach(function (v) { bandN[bandOf(v)]++; });
      var distHtml = test && n ? '<h3>' + T.dist + '</h3><div class="cr-dist">' + T.bands.map(function (l, i) { return '<div class="cr-bar b' + i + '"><span>' + l + '</span><i style="width:' + Math.round(100 * bandN[i] / n) + '%"></i><b>' + bandN[i] + '</b></div>'; }).join('') + '</div>' : '';
      var fixHtml = worst.length && n < 3 ? '<h3>' + T.fix + '</h3><p class="tool-mini">' + T.fixWait + '</p>' : worst.length ? '<h3>' + T.fix + '</h3><p class="tool-mini">' + T.fixLead + '</p>' + worst.map(function (q) {
          var it = q.it, wrong = it.y === 'mc' ? Object.keys(q.opt).filter(function (L) { return L !== it.k; }).sort(function (p, z) { return q.opt[z] - q.opt[p]; }) : [];
          return '<section class="jn-q cr-fixq"><div class="jn-stem"><b>' + T.q + ' ' + (q.i + 1) + '</b> · ' + q.pc + T.right + (it.lt ? ' · ' + T.topic + ': ' + esc(it.lt) : '') + '<div>' + safe(it.q) + '</div></div>' +
            (it.y === 'mc' ? '<div class="jn-opts c' + (it.c || 1) + '">' + it.o.map(function (o, k) { var L = 'ABCD'[k]; return '<div class="jn-o' + (L === it.k ? ' ok' : L === wrong[0] ? ' no' : '') + '"><b>' + L + '.</b> <span>' + safe(o) + '</span> <i>(' + T.nPick(q.opt[L] || 0) + ')</i></div>'; }).join('') + '</div>' : '') +
            (it.e ? '<div class="jn-expl">' + safe(it.e) + '</div>' : '') + '</section>';
        }).join('') : '';
      var remindHtml = !test && s === 'open' && notDone.length && r.attempts.length ? '<section class="tool cr-remind"><h3>' + T.remindH + ' (' + notDone.length + ')</h3><p class="tool-mini">' + T.remindLead + '</p><p>' + notDone.map(function (w) { return esc(w.st.name); }).join(', ') + '</p>' +
        '<textarea id="cr-rmsg" rows="3">' + esc(T.remindMsg(a, notDone.length, fmtDT(a.close_at, true), HW + '?m=' + a.code)) + '</textarea><p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-rcp">' + T.remindCopy + '</button></p></section>' : '';
      var dur = function (x) { return x && x.submitted_at && x.started_at ? Math.max(1, Math.round((x.submitted_at - x.started_at) / 60e3)) + ' ' + T.mins : ''; };
      app.innerHTML = top('<a href="#/lop/' + esc(a.class_id) + '">' + T.backClass + '</a> · ') +
        '<h2 class="cr-h">' + esc(a.title) + '</h2>' +
        '<p class="cr-meta"><span class="cr-kb k-' + esc(a.mode) + '">' + esc(T.modes[a.mode] || '') + '</span> <span class="cr-badge cr-' + s + '">' + T.st[s] + '</span> <span>' + esc(r.class.name) + ' · ' + T.code + ' <b>' + a.code + '</b></span></p>' +
        (test ? '<div class="cr-tl cr-tlb">' + timeline(a.open_at, a.close_at - a.duration_min * 60e3, a.close_at, a.duration_min) + '</div>'
          : '<p class="cr-when">' + T.opens + ' <b>' + esc(fmtDT(a.open_at, true)) + '</b> → ' + T.due + ' <b>' + esc(fmtDT(a.close_at, true)) + '</b>' + (a.duration_min ? ' · ' + esc(T.perMax(a.duration_min)) : '') + '</p>') +
        '<div class="cr-bar2">' + (s !== 'closed' && !share ? '<button type="button" class="btn" id="cr-sh">' + T.reshare + '</button>' : '') + '<button type="button" class="btn btn-outline" id="cr-rf">↻ ' + T.refresh + '</button></div>' +
        (s !== 'closed' ? '<details class="cr-more"><summary>' + T.adjust + '</summary><p class="cr-chips"><span class="cr-ext-l">' + T.extend + ':</span> ' + (test ? T.extT : T.extH).map(function (t, i) { return '<button type="button" class="cr-chip" data-ext="' + (test ? ['5', '15'][i] : ['60', '1440'][i]) + '">' + t + '</button>'; }).join('') + '</p>' +
          '<p><button type="button" class="btn btn-outline" id="cr-close">' + T.closeNow + '</button></p></details>' : '') +
        (share ? shareHtml(a, r.class.name, r.class.self_join) : '<div id="cr-sharebox"></div>') +
        '<h3>' + T.board + '</h3><p class="tool-mini cr-focus">' + (T.focus[a.mode] || T.focus.home) + '</p>' + (s === 'soon' && !r.attempts.length ? '<p>' + T.waitOpen + '</p>' : '') +
        // four numbers at most; who is still working or has not started is one short line under them
        '<div class="sc-stats cr-stats">' + stat(T.sum.n, n + '/' + active) + (test
            ? (n ? stat(T.sum.mean, fmt(mean)) + stat(T.sum.range, n > 1 ? fmt(xs[0]) + '–' + fmt(xs[n - 1]) : fmt(xs[0])) + stat(T.sum.pass, Math.round(100 * xs.filter(function (v) { return v >= 5; }).length / n) + '%') : '')
            : stat(T.sum.todo, cnt('none') + cnt('locked')) + (!free && n ? stat(T.sum.mean, fmt(mean)) : '')) + '</div>' +
        '<p class="cr-live">' + T.nowLine(cnt('work'), cnt('none') + cnt('locked'), test) + '</p>' +
        (test ? distHtml : remindHtml + fixHtml) +
        (free ? '<p class="tool-mini">' + T.freeHide + '</p>' : '') +
        '<div class="cr-scroll"><table class="lv-board cr-board"><thead><tr><th>' + T.no + '</th><th class="l">' + T.sname + '</th><th class="l">' + T.status + '</th>' + (free ? '' : '<th>' + T.score + '</th>') + '<th>' + T.time + '</th>' + (test ? '<th title="' + esc(T.awayTip) + '">' + T.away + '</th>' : '') +
        items.map(function (it, i) { return '<th><span class="k-' + it.y + '">' + (i + 1) + '</span></th>'; }).join('') + '<th></th></tr></thead><tbody>' +
        rows.map(function (w) {
          var x = w.x, sub = !!(x && x.submitted_at);
          return '<tr data-id="' + esc(w.st.id) + '" data-n="' + esc(w.st.name) + '"><td>' + w.st.no + '</td><td class="l">' + esc(w.st.name) + '</td><td class="l cr-s-' + w.k + '">' + (w.k === 'none' && !test ? T.sum.todo : T.s[w.k]) + '</td>' + (free ? '' : '<td class="s">' + (w.s10 != null ? fmt(w.s10) : '') + '</td>') + '<td class="cr-t">' + dur(x) + '</td>' + (test ? '<td class="cr-away' + (x && x.away >= 3 ? ' hi' : '') + '">' + (x && x.away ? x.away : '') + '</td>' : '') +
            items.map(function (it, i) { return x && x.started_at ? (free && sub ? '<td class="on"></td>' : cell(it, x.answers[i], sub)) : '<td></td>'; }).join('') +
            '<td class="cr-act">' + (x ? '<button type="button" class="tool-link" data-reset="1">' + (w.k === 'locked' ? T.unlock : T.reset) + '</button>' : '') + '</td></tr>';
        }).join('') + '</tbody>' + (n ? '<tfoot><tr><td></td><td class="l">' + T.right + '</td><td></td>' + (free ? '' : '<td></td>') + '<td></td>' + (test ? '<td></td>' : '') + qs.map(function (q) { return '<td class="' + (q.pc < 50 ? 'lo' : '') + '">' + q.pc + '</td>'; }).join('') + '<td></td></tr></tfoot>' : '') + '</table></div>' +
        (r.attempts.length ? '<p class="cr-legend">' + (free ? T.legendFree : T.legend) + '</p>' : '') +
        (test ? fixHtml : '') +
        (!free && n ? '<p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-copy">' + T.copyScores + '</button><button type="button" class="btn btn-outline" id="cr-csv">' + T.csv + '</button>' + (SC ? '<button type="button" class="btn" id="cr-tosc">' + T.toSc + '</button>' : '') + '</p>' : '') +
        '<details class="cr-dz"><summary>' + T.delHwH + '</summary><p class="tool-mini">' + T.sureDelHw + '</p><p><button type="button" class="btn btn-outline cr-danger" id="cr-delhw">' + T.delHw + '</button></p></details>' + msgBox('cr-msg');
      drawMath(app);
      if (share) bindShare(a);
      var on = function (id, fn) { var b = $('#' + id); if (b) b.addEventListener('click', fn); };
      on('cr-rf', load);
      on('cr-rcp', function () { copyText($('#cr-rmsg').value, $('#cr-rcp'), T.remindCopy); });
      on('cr-sh', function () { share = true; draw(r); $('#cr-share').scrollIntoView({ block: 'start' }); });
      on('cr-close', function () { if (window.confirm(T.sureClose)) api('PATCH', '/v1/assignments/' + code, { close_now: true }).then(load).catch(function (e) { $('#cr-msg').textContent = errText(e); }); });
      $$('[data-ext]').forEach(function (b) {
        b.addEventListener('click', function () {
          var add = +b.getAttribute('data-ext') * 60e3, base = Math.max(a.close_at, Date.now());
          api('PATCH', '/v1/assignments/' + code, { close_at: base + add }).then(load).catch(function (e) { $('#cr-msg').textContent = errText(e); });
        });
      });
      on('cr-delhw', function () { if (window.confirm(T.sureDelHw)) api('DELETE', '/v1/assignments/' + code).then(function () { go('#/lop/' + a.class_id); }).catch(function (e) { $('#cr-msg').textContent = errText(e); }); });
      var lines = function (sep) { return done.map(function (w) { return w.st.name + sep + fmt(w.s10); }); };
      on('cr-copy', function () { copyText(lines('\t').join('\n'), $('#cr-copy'), T.copyScores); });
      on('cr-csv', function () {
        var q = function (v) { v = String(v == null ? '' : v); return /[",;\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
        var csv = [[T.no, T.sname, T.status, T.score].concat(test ? [T.away] : [], items.map(function (it, i) { return T.q + (i + 1); })).map(q).join(',')].concat(rows.map(function (w) {
          return [w.st.no, w.st.name, (w.k === 'none' && !test ? T.sum.todo : T.s[w.k]), w.s10 != null ? fmt(w.s10) : ''].concat(test ? [w.x ? w.x.away || 0 : ''] : [], items.map(function (it, i) { return w.x && w.x.answers[i] != null ? w.x.answers[i] : ''; })).map(q).join(',');
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
      '<section class="tool"><h3>' + T.rcNew + '</h3><p>' + T.rcNewLead + '</p><p class="tool-actions"><button type="button" class="btn btn-outline" id="cr-rcn">' + T.rcNew + '</button></p>' + msgBox('cr-rcmsg') + '</section>' +
      '<section class="tool"><h3>' + T.delAcc + '</h3><p>' + T.delAccLead + '</p><div class="tool-row"><label class="grow">' + T.email + ' <input type="text" id="cr-de" autocomplete="off"></label></div><p class="tool-actions"><button type="button" class="btn btn-outline cr-danger" id="cr-dg">' + T.delAccGo + '</button></p>' + msgBox('cr-msg') + '</section>';
    $('#cr-rcn').addEventListener('click', function () {
      var btn = this; if (!window.confirm(T.sureRc)) return;
      busy(btn, true);
      api('POST', '/v1/me/recovery', { lang: LANG }).then(function (r) { recoveryView(r.recovery, r.mailed); }).catch(function (e) { busy(btn, false); $('#cr-rcmsg').textContent = errText(e); });
    });
    $('#cr-out').addEventListener('click', function () { api('POST', '/v1/auth/logout').catch(function () {}).then(function () { setMe(null); go('#/'); }); });
    $('#cr-dg').addEventListener('click', function () {
      if (!window.confirm(T.sureDelAcc)) return;
      api('DELETE', '/v1/me', { email: $('#cr-de').value }).then(function () { setMe(null); go('#/'); }).catch(function (e) { $('#cr-msg').textContent = e && e.error === 'confirm' ? T.fill : errText(e); });
    });
  }
})();
