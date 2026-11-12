# Lemonmath – ghi chú cho tài khoản Pro (điều phối)

Vai trò: tài khoản Pro chỉ ĐIỀU PHỐI và KIỂM TRA, không tự viết bài (để tiết kiệm hạn mức). Bài do 11 tài khoản Claude Free viết theo file giao việc.

- Bài nộp về: Dropbox\Lemonmath.com\viec da lam (đọc qua công cụ remote-devices, stage vào /mnt/user-data/uploads/...).
- Phân công hiện hành (từ 10/11/2026, thay mã cũ 001–374): giao-viec/PHAN-CONG.md, mã B001–B216 (đã gộp bài nhỏ; trường "merged" trong curriculum.json ghi id đã gộp), 11 Claude Free + 1 ChatGPT Plus (46 bài). File giao cho từng tài khoản: giao-viec/NN-<tài khoản>.txt; tạo lại bằng danh sách bài còn thiếu trong data/curriculum.json.
- Bài nộp về cũng có thể đến dưới dạng file đính kèm trong chat (/mnt/user-data/uploads): bỏ tiền tố mã băm và đổi "__1_" thành " (1)" rồi chạy intake.

Quy trình "Kiểm tra bài mới" (ít bước nhất):
1. Stage các file .md mới trong "viec da lam".
2. `python3 tools/qa/intake.py "<thư mục đã stage>"`: tự nhận Việt/Anh, bỏ trùng, chỉ nhận bài đủ hai bản, rải đều đáp án A–D, chạy check.js, báo phép tính đáng ngờ.
3. Sửa lỗi nhỏ nếu có; lỗi lớn thì ghi lời nhắn sửa vào Dropbox\Lemonmath.com\nhan-bai\BAO-CAO-KIEM-TRA.txt.
4. Lớp nào có bài đầu tiên thì đổi "status" thành "full" trong data/curriculum.json.
5. `node tools/check.js --all && npm run build`, rồi commit + push (GitHub Actions tự đăng).

Quy trình "Kiểm tra hình mới" (hình minh họa tiểu học do ChatGPT Plus vẽ, 55 hình, danh sách ở tools/qa/hinh-tieu-hoc.json):
1. Stage file hinh-minh-hoa-tieu-hoc.zip trong "viec da lam", giải nén vào một thư mục riêng.
2. Xem nhanh xem-truoc.html (đếm lại số đồ vật ở vài hình), rồi `python3 tools/qa/addfigs.py "<thư mục đã giải nén>"`: tự chép SVG vào assets/img/gN/, chèn ảnh vào cả bản Việt và Anh, lấy alt từ danh-sach.csv, bỏ qua SVG có script/ảnh nhúng.
3. `node tools/check.js --all && npm run build`, rồi commit + push.

Mỗi thứ Hai: cập nhật content/vi/this-week.md và content/en/this-week.md (trang Bài của tuần).

Mục Ôn thi (từ 11/11/2026): lộ trình trong mảng "exams" của data/curriculum.json (thi vào 10 và THPT chỉ là liên kết sang chương ôn thi của lớp 9, lớp 12; SAT, ACT, AP, IB, IGCSE, kĩ năng ôn thi là các lộ trình riêng). Bài nằm ở content/<lang>/exams/<exam-id>/<id>.md, trang web /exams/… và /vi/on-thi/…; trang tổng là content/<lang>/exams.md. Phân công đợt 2: giao-viec/ON-THI.md, 12 gói O01–O12 (mã E001–E091), brief ở _templates/BRIEF-exams.md, dữ kiện kì thi đã kiểm chứng nằm trong từng file gói (cập nhật lại mỗi năm học, AP đổi cấu trúc từ 5/2027). Loại bài: "type: guide" (hướng dẫn), "type: test" (đề trắc nghiệm, hộp ":::quiz test", chấm 1 điểm/câu), "type: exam" (đề tự luận). intake.py chưa nhận bài exams: chép tay vào đúng thư mục rồi chạy check.js.

Từ 11/11/2026 chủ dự án yêu cầu tài khoản Pro TRỰC TIẾP viết nội dung mục Ôn thi (ngoại lệ so với vai trò chỉ điều phối ở trên; các lớp 1–12 vẫn do tài khoản Free viết). Viết theo lô 3–4 bài mỗi lượt, thứ tự: SAT → kĩ năng ôn thi → AP Calculus → IB AA → ACT → AP Precalculus → AP Statistics → IB AI → IGCSE. Tiến độ ghi ở giao-viec/ON-THI.md (cột trạng thái). Trình bày trắc nghiệm theo bố cục đề thi THPT: chỉ cần viết 4 dòng liền nhau "A. …" đến "D. …" ngay dưới dòng đề (trong ví dụ, bài tập hay :::quiz); tools/render.js tự xếp 4 phương án trên một hàng nếu ngắn, 2 hàng nếu vừa, mỗi phương án một dòng nếu dài, bỏ dấu chấm cuối phương án và tự thu hẹp trên điện thoại. Không viết kí hiệu đô la (trùng dấu công thức): viết "dollars" / "đô la". Kho Dropbox (C:\Users\Admin\Dropbox\tài liệu on\SAT) chỉ có sách SAT bản giấy cũ có bản quyền: không chép, không dùng cấu trúc đề cũ.

Kho đề thi (từ 11/11/2026): đề thật lấy từ toanmath.com, ghi nguồn; định dạng "type: paper" (source, link, year, minutes = thời gian làm bài), :::quiz exam cho trắc nghiệm, :::exercise "Bài N (x điểm)" + ::solution cho tự luận. Trang tự có bấm giờ, chấm trắc nghiệm, ô tự chấm tự luận, bản in kèm đáp án. Quy định và tiến độ: giao-viec/KHO-DE.md.

Dropbox (từ 11/11/2026): có connector Dropbox (công cụ mcp__Dropbox__*), đọc được thư mục Lemonmath.com trực tiếp trên đám mây khi máy tính của chủ dự án tắt; khi máy bật vẫn có thể dùng remote-devices (C:\Users\Admin\Dropbox).

Trình bày lời giải (từ 11/11/2026, chủ dự án yêu cầu): ví dụ và lời giải bài tập phải chi tiết, có dẫn giải như SGK Việt Nam (chuẩn 2e trong _templates/WRITING-SPEC.md; bài mẫu content/*/g10/events-classical-probability.md). Website tự đánh số "Ví dụ 1, 2, …". Rà soát bằng `python3 tools/qa/style-audit.py --list`; khi nhận bài mới, lời giải còn vắn tắt thì sửa hoặc trả lại theo chuẩn 2e.

Nâng cấp lời giải cũ (quyết định 11/11/2026, "phương án 3"): tài khoản Pro TỰ viết lại lời giải bài tập lớp 9 → lớp 12 → Ôn thi theo chuẩn 2e, mỗi lượt 4–6 bài học (soạn file `giao-viec/nang-cap/da-ghep/<lớp>-loN.md` theo mẫu @@@ / ### rồi `python3 tools/qa/upgrade.py apply <file>`; xem đề bằng `upgrade.py export <bài>`; giữ nguyên đề, số liệu, đáp số; bản Anh giữ đúng cách viết của bài đó: "thousand đồng", tên riêng có dấu như Hà, Hùng, "$x$-axis"). Các lớp còn lại giao tài khoản Free: file giao `giao-viec/nang-cap/NC-NN-<tài khoản>.txt`, nộp về "NC-<tài khoản>.md" trong Dropbox "viec da lam", ghép bằng `upgrade.py apply`. Bảng phân công và tiến độ: giao-viec/NANG-CAP-LOI-GIAI.md; bài còn thiếu: `python3 tools/qa/style-audit.py --list`.

Từ 12/11/2026: phần nâng cấp lời giải còn lại (lớp 12 + Ôn thi) đã chuyển sang ChatGPT Plus theo 12 gói `giao-viec/nang-cap/chatgpt/GOI-*.txt` (lớp 9 và 3 bài lớp 12 do Pro làm xong). Khi nhận file `NC-ChatGPT-GOI-*.md`: `python3 tools/qa/upgrade.py apply <file>`, xem các dòng GHI CHÚ / KHÁC ĐÁP SỐ, rồi check.js + build + push; phần còn thiếu đóng gói lại bằng `upgrade.py pack`.

Giọng văn (từ 12/11/2026, chủ dự án yêu cầu): viết lại phần lời của toàn bộ trang theo giọng một nhà giáo tâm huyết, dung dị (chuẩn 2f trong _templates/WRITING-SPEC.md; bài mẫu content/*/g10/equation-of-a-line.md). Pro tự viết dần mỗi ngày 10 bài học (2 lượt tự chạy 13h29 và 17h29, mỗi lượt 5 bài), cả Việt và Anh, theo thứ tự và quy trình trong giao-viec/GIONG-VAN.md; không đổi toán, đề, lời giải. Bài mới nhận từ các tài khoản cũng phải đạt chuẩn 2f.

Viết lại bài ChatGPT (từ 12/11/2026, chủ dự án chọn): 46 bài B096–B141 (lớp 6–7) do Pro tự viết lại kỹ, mỗi lượt 7 bài (chủ dự án tăng từ 4 lên 7 ngày 12/11/2026); tiến độ và quy trình ở giao-viec/viet-lai-chatgpt/TIEN-DO.md; bản nháp ChatGPT (không đạt, chỉ tham khảo) ở giao-viec/viet-lai-chatgpt/nhap/.

Dọn thư mục nộp bài (từ 12/11/2026, chủ dự án cho phép chủ động làm): sau khi đã đăng xong một đợt, chuyển các file đã xử lý trong Dropbox "Lemonmath.com/viec da lam" vào thư mục con "viec da lam/da dang" (dùng mcp__Dropbox__move), để thư mục gốc chỉ còn bài mới. Bài chưa đạt thì để lại và ghi lời nhắn sửa.
