# Gắn mức độ nhận thức cho câu hỏi: hướng dẫn giao việc

Mục tiêu: mọi câu :::quiz trên lemonmath.com có mức độ NB / TH / VD / VDC (GDPT 2018), để Góc giáo viên tạo đề theo ma trận.
24 gói `MD-01.txt` … `MD-24.txt`, mỗi gói khoảng 100–230 câu, vừa một lượt 5 giờ của một tài khoản Claude Free. Phân công: `PHAN-CONG.md`.

## Cách giao (chủ dự án làm)

1. Mở một cuộc trò chuyện MỚI trong tài khoản được giao.
2. Đính kèm file `MD-NN.txt` (hoặc dán toàn bộ nội dung), gửi kèm một câu: **"Làm đúng theo hướng dẫn trong file."**
3. Nếu tài khoản dừng giữa chừng (hết lượt hoặc trả lời bị cắt): lượt sau nhắn **"tiếp"** trong CÙNG cuộc trò chuyện.
4. Khi thấy dòng `HẾT GÓI MD-NN`: chép toàn bộ các khối kết quả (kể cả các phần "tiếp") vào MỘT file văn bản tên `MD-NN-ketqua.txt`, lưu vào Dropbox `Lemonmath.com/viec da lam`.
5. Nhắn tài khoản Pro: **"nhận kết quả mức độ"**.

Mỗi tài khoản làm 2 gói, gói thứ hai mở cuộc trò chuyện mới. Không cần làm theo thứ tự gói.

## Cách nhận (tài khoản Pro làm)

1. Stage các file `MD-*-ketqua.txt` trong "viec da lam".
2. `python3 tools/qa/mucdo.py apply <các file>`: ghi mức vào cả bản Việt và Anh (`::mc VD`, `::tf NB TH VD VDC`), báo LỖI (mã sai, mức sai, sai số mức của câu Đúng/Sai) và THIẾU.
3. Xem nhanh vài bài: tỉ lệ VDC quá cao hoặc toàn một mức là dấu hiệu làm ẩu, trả lại gói đó.
4. Đánh dấu "xong" trong `PHAN-CONG.md`, rồi `node tools/check.js --all && npm run build`, commit + push.
5. Câu còn thiếu hoặc bài mới đăng: `python3 tools/qa/mucdo.py pack --packs N` để đóng gói lại phần CHƯA có mức (mã bài trong `ma-bai.json` giữ nguyên).

## Ghi chú

- Bài mới từ nay nên viết sẵn mức ngay trên dòng `::mc` / `::tf` / `::sa`; câu chưa có mức vẫn hợp lệ.
- Thang đo dùng chung: `THANG-DO.md` (đã nằm sẵn trong mỗi gói).
