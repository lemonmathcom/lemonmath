# Giao ChatGPT Plus sản xuất nội dung từ kho TaiLieuToan (từ 26/11/2026)

Chủ dự án quyết định ngày 26/11/2026: phần sản xuất nội dung từ kho TaiLieuToan giao **một tài khoản ChatGPT Plus**; tài khoản Claude Pro chỉ giao việc, kiểm tra và đăng. Mỗi gói là một thư mục trên máy chủ dự án, chứa sẵn file giao (.txt) và tài liệu nguồn lấy từ kho, nên chủ dự án không phải tải gì thêm.

## Hai loại việc, làm lần lượt

| Đợt | Gói | Việc | Kết quả nộp về |
|---|---|---|---|
| GPT-1 (gấp, mùa cuối HK1) | GPT-TL-12A, 12B, 09A, 09B, 10A, 10B, 11A, 11B, 08A, 08B, 07A, 07B, 06A, 06B | A = đề cương ôn tập cuối HK1 (kiến thức, dạng bài hay gặp, 10 bài mỗi chủ đề từ Nhận biết đến Vận dụng cao, lịch ôn 14 ngày, tài liệu tham khảo ghi đủ tên tác giả); B = 3 đề luyện cuối HK1 theo cấu trúc đề thật (đề 3 khó hơn). Bản tiếng Việt. | `GPT-TL-<lớp><A/B>-ketqua.md` |
| GPT-2 | GPT-KD-01 … 16 | Số hoá một đề thật cho Kho đề thi (Việt + Anh), gắn mức độ và bài học cho từng câu: TN THPT 2025, 2026, đề minh hoạ, thi thử Sở; tuyển sinh 10 Hà Nội, TP HCM, Đà Nẵng, Nghệ An, Hải Phòng; cuối HK1 lớp 6–12 | `GPT-KD-<nn>-ketqua.md` |

Thứ tự lớp ở đợt 1 đi theo lịch thi (THPT thi cuối HK1 sớm hơn) và số người dùng (lớp 12, lớp 9 đông nhất).

## Cách giao (chủ dự án làm)

1. Mở thư mục `C:\TaiLieuToan\_lemonmath\giao-chatgpt\<tên gói>`.
2. Mở MỘT cuộc trò chuyện MỚI trong ChatGPT, đặt tên chat đúng bằng tên gói (ví dụ `GPT-TL-12A`).
3. Kéo thả file `.txt` của gói và các file tài liệu trong thư mục vào ô chat, gõ: **Làm đúng theo hướng dẫn trong file.**
4. ChatGPT dừng giữa chừng: gõ **tiếp** trong cùng cuộc trò chuyện. Mỗi lượt nó đưa ra link tải file kết quả kèm một dòng tiến độ.
5. Khi thấy "ĐÃ XONG TOÀN BỘ": tải file `<tên gói>-ketqua.md`, lưu vào Dropbox `Lemonmath.com/viec da lam`, rồi nhắn Claude: **nhận bài ChatGPT**.

Gói A và gói B của cùng một lớp dùng chung tài liệu nguồn trong cùng thư mục. Có thể chạy song song nhiều cuộc trò chuyện.

## Tài khoản Pro làm khi nhận bài

- TL-A → trang đề cương `content/vi/tai-lieu/de-cuong-hk1-lop-<n>.md` (mục Tài liệu mới, có nút in, QR sang bản online); TL-B → tách 3 đề theo dòng `=== FILE: de-k ===`, đăng như đề luyện có chấm điểm (`type: paper`, source: Lemonmath biên soạn).
- KD → tách `=== VI ===`, `=== EN ===` thành hai file `content/<lang>/exams/kho-de-thi/<mã đề>.md`, thêm vào `data/curriculum.json`; phần `=== NHAN ===` (bài học, dạng, mức của từng câu) lưu vào dữ liệu dạng bài.
- Kiểm: định dạng, tổng điểm 10, đếm mức, giải lại một phần câu bằng Python, `node tools/check.js`, build, rồi push. Lỗi lớn thì trả lại đúng gói kèm lời nhắn sửa.
- Mọi trang ghi hai tên: đơn vị hoặc tác giả gốc (giữ nguyên tên) · "Số hoá và lời giải: lemonmath.com".

## Tạo lại gói

```
python3 tools/kho/danhmuc.py <danh-muc-tho.csv>                  # danh mục kho (từ kiểm kê trên máy chủ dự án)
python3 tools/kho/goi_chatgpt.py chon <danh-muc.json> --out nguon.json
python3 tools/kho/goi_chatgpt.py goi nguon.json                   # -> giao-viec/chatgpt-kho/goi/*.txt
```
rồi chép file giao + tài liệu nguồn vào `C:\TaiLieuToan\_lemonmath\giao-chatgpt\<gói>\` (stage từ kho, commit về máy).

## Tiến độ

| Gói | Giao | Nhận | Đăng |
|---|---|---|---|
| (chờ kiểm kê kho để chọn tài liệu nguồn) | | | |
