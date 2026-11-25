# Nhóm học tập và Đấu trường Lemon (từ 25/11/2026)

Tài liệu thiết kế và nghiên cứu: Claude Docs "Thiết kế: Nhóm học tập và Đấu trường Lemon – Lemonmath".

## Đấu trường Lemon

- Trang: /vi/dau-truong/ và /arena/ (arenaPage trong tools/build.js, mã ở assets/arena.js). Mục "Đấu trường" trên thanh menu.
- Ba cách chơi: luyện một mình (chạy cả khi tắt mạng, câu hỏi sinh ngay trên máy), Thử thách hôm nay (cùng một bộ 10 câu cho mọi người cùng bộ câu trong ngày, theo giờ Việt Nam; lần đầu được tính và gửi tới nhóm), Phòng đấu (mã 6 số, tối đa 30 người, chủ phòng có thể chỉ điều khiển để chiếu lên màn hình).
- Bộ câu: 14 bộ tính nhẩm sinh tự động (GEN trong arena.js: add20, add100, times, mul, frac, dec, int, pow, lin, alg, sqrt, trig, exp, deriv) và 12 bộ "Kiến thức lớp N" (k1–k12) lấy câu trắc nghiệm mức NB, TH từ ngân hàng câu hỏi <trang giáo viên>/bank/gN.json. Bài mới đăng tự vào bộ kiến thức.
- Thêm một bộ tính nhẩm: viết một hàm trong GEN trả về Q(lời dẫn, biểu thức TeX, opts(...)/sopts(...), lời giải thích ngắn), thêm một dòng vào DECKS, thêm tên ngắn vào DECK trong assets/groups.js. Kiểm tra bằng cách sinh hàng nghìn câu (xem "Kiểm tra" bên dưới). Tiểu học dùng optsP (không có số âm).
- Tính điểm chế độ Tốc độ: đúng được tới 100 điểm theo phần thời gian còn lại, sai bị trừ đúng số đó, "Chưa chắc" 0 điểm, tổng không âm (quy tắc "high speed, high stakes" của Math Garden). Chế độ Thong thả: 100 điểm mỗi câu đúng, không bấm giờ. Thời gian mỗi câu: 20 giây (tiểu học), 25 giây (THCS, THPT), 45 giây (câu kiến thức).
- Phòng đấu dùng Firebase của lớp trực tiếp, cùng nhánh live/<6 số> (meta có kind: 'arena', deck, mode, n, seed, r = số trận, host, hp = chủ phòng có chơi không; p/<id> = { n, av, s, i, c, d, r }). Không cần sửa quy tắc Firebase. Mọi người hỏi lại cả phòng 2 giây một lần (không giữ kết nối). Học sinh lỡ nhập mã phòng đấu ở trang Vào lớp sẽ được chuyển sang Đấu trường.
- Lưu trên máy: lm-arena (kỷ lục, các trận, điểm thử thách), lm-arena-pref, lm-arena-room, lm-nick, lm-av.

## Nhóm học tập

- Trang: /vi/nhom-hoc/ và /study-groups/ (groupsPage, assets/groups.js); chỉ sinh khi "site" → "api" có địa chỉ. Ở mục "Thêm" trên menu, trong menu điện thoại, trang chủ (khối "Học cùng nhau"), trang Hành trình học, Phụ huynh, Giáo viên.
- Máy chủ: Worker api/src/index.js, đường /v1/groups/new | peek | join | sync | cheer | room | admin | leave | delete; bảng groups và group_members (migration api/migrations/0006_groups.sql). Mã nhóm 8 kí tự và khoá thành viên chỉ lưu dạng HMAC.
- Giới hạn: 30 thành viên một nhóm; 5 nhóm một máy; mỗi mạng mỗi ngày 30 nhóm mới, 300 lần vào nhóm, 60 lần nhập sai mã. Cổ vũ: 👏 💪 🌟 🍋, mỗi người gửi mỗi bạn 1 lần một ngày; nhắc nhẹ 🔔 1 lần một ngày.
- Mục tiêu tuần mặc định 3 bài × số thành viên (trưởng nhóm đổi được). Một "bài luyện" là một lần nộp :::quiz / đề thật (lm-log) hoặc một trận Đấu trường (lm-arena). Tuần và ngày tính theo giờ Việt Nam.
- assets/site.js (window.lmGroups) gửi bản tóm tắt tuần của máy này tới các nhóm: 5 giây sau mỗi bài test, sau mỗi trận đấu, và khi mở trang nếu lần gửi trước đã quá 15 phút.
- Dọn dẹp (cron hằng ngày): thành viên 60 ngày không mở trang bị gỡ, nhóm 90 ngày không hoạt động bị xoá, nhóm mất trưởng nhóm tự có trưởng nhóm mới.

## Kiểm tra tại máy

```
cd api && printf 'PEPPER="local-dev-pepper-0123456789abcdef"\nALLOW_LOCALHOST="1"\nRESEND_API_KEY="re_local_test_key"\nMAIL_DEBUG="1"\n' > .dev.vars
npx wrangler d1 migrations apply lemonmath --local && npx wrangler dev --local --port 8787     # cửa sổ 1
node test/groups.test.mjs                                                                      # 26 phép thử nhóm học tập
node test/api.test.mjs                                                                         # 71 phép thử lớp học, mã học tập
cd .. && node tools/dev/mock-live.js                                                           # cửa sổ 2: Firebase giả
LIVE_DB=http://localhost:9099 API_URL=http://127.0.0.1:8787 npm run build && node tools/serve.js
```

Sinh thử câu hỏi: mở trang Đấu trường với `window.lmArenaTest = function (a) { window.__A = a; }` chạy trước arena.js, rồi gọi `__A.makeSet(__A.DECKS[i], seed, 10)`. Lần kiểm tra 25/11/2026: 112.000 câu, không câu nào trùng phương án, sai TeX hay sai đáp án.

## Chưa làm (giai đoạn 2–3)

- Xếp hạng Elo theo từng bộ câu và ghép đấu công khai (cần lọc biệt danh, nút báo cáo, người kiểm duyệt).
- Giải đấu giữa các nhóm theo mùa; huy hiệu.
- "Đấu trường lớp" gắn với Lớp học của tôi (dùng danh sách lớp, đưa điểm sang Phân tích điểm).
- Phòng quên đóng: hiện phải xoá tay nhánh live trong Firebase (giống lớp trực tiếp).
