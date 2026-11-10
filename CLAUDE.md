# Lemonmath – ghi chú cho tài khoản Pro (điều phối)

Vai trò: tài khoản Pro chỉ ĐIỀU PHỐI và KIỂM TRA, không tự viết bài (để tiết kiệm hạn mức). Bài do 11 tài khoản Claude Free viết theo file giao việc.

- Bài nộp về: Dropbox\Lemonmath.com\viec da lam (đọc qua công cụ remote-devices, stage vào /mnt/user-data/uploads/...).
- Phân công hiện hành: Dropbox\Lemonmath.com\giao-viec-tuan\2026-11-16\09-PHAN-CONG-VIET-BAI-11-TAI-KHOAN.txt (mã việc 001–374).
- File giao việc gốc: Dropbox\Lemonmath.com\giao-viec-theo-tai-khoan\ (001–279) và giao-viec-tuan\2026-11-16\bai-moi-lop5-lop11\ (280–374).

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
