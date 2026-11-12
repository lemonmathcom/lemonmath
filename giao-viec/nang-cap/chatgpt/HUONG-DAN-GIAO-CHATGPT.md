# Giao ChatGPT nâng cấp lời giải (lớp 12 + Ôn thi)

Có 12 gói, mỗi gói là một file `.txt` đã chứa đủ: hướng dẫn chi tiết, ví dụ chuẩn, đề và lời giải cũ (cả bản Việt và bản Anh) của từng bài tập cần viết lại.

| Gói | Nội dung | Số bài tập |
|---|---|---|
| GOI-L12-01 | Lớp 12: góc trong không gian, nguyên hàm, tiệm cận, xác suất có điều kiện, hệ toạ độ, tích phân | 45 |
| GOI-L12-02 | Lớp 12: đạo hàm thực tế, chiến lược thi, khảo sát hàm số, khoảng tứ phân vị, phương sai, ứng dụng tích phân | 41 |
| GOI-L12-03 | Lớp 12: phương trình đường thẳng, GTLN–GTNN, đơn điệu–cực trị, phương trình mặt phẳng, ôn tập hàm số | 39 |
| GOI-L12-04 | Lớp 12: ôn tập tích phân, tối ưu thực tế, hình học không gian, thống kê–xác suất | 40 |
| GOI-L12-05 | Lớp 12: mặt cầu, toạ độ vectơ, vectơ trong không gian | 21 |
| GOI-ONTHI-01 | SAT (4 bài học) | 37 |
| GOI-ONTHI-02 | SAT (4 bài học) | 38 |
| GOI-ONTHI-03 | SAT + AP Calculus | 44 |
| GOI-ONTHI-04 | AP Calculus | 45 |
| GOI-ONTHI-05 | AP Calculus + IB AA | 45 |
| GOI-ONTHI-06 | IB AA | 45 |
| GOI-ONTHI-07 | ACT, AP Precalculus, AP Statistics (phần còn sót) | 8 |

## Cách giao (mỗi gói một cuộc trò chuyện mới)

1. Mở **một cuộc trò chuyện mới** trong ChatGPT (dùng tài khoản Plus, bật công cụ phân tích dữ liệu/Python nếu được hỏi).
2. Tải file gói lên (ví dụ `GOI-L12-01.txt`).
3. Dán nguyên văn lời nhắn sau:

> Hãy đọc kĩ toàn bộ file đính kèm, nhất là các mục 1–7 ở đầu file, rồi làm đúng theo đó. Làm lần lượt từng bài học (mỗi lượt trả lời một bài học), tính lại mọi phép tính bằng Python, ghi nối tiếp kết quả vào file /mnt/data/NC-ChatGPT-<tên gói>.md đúng định dạng ở mục 6. Bắt đầu với bài học đầu tiên.

4. Mỗi lần ChatGPT báo "Đã xong bài học …", gõ **tiếp**.
5. Khi ChatGPT báo xong cả gói, nó sẽ đưa đường dẫn tải file `NC-ChatGPT-GOI-…md`. Tải về và lưu vào thư mục Dropbox **Lemonmath.com\viec da lam** (giữ nguyên tên file).
6. Nhắn cho tài khoản Pro (Claude): "đã có file nâng cấp lời giải từ ChatGPT". Claude sẽ ghép vào website, kiểm tra, và báo các chỗ ChatGPT ghi GHI CHÚ (nghi đáp số cũ sai) hoặc đáp số bị đổi.

Lưu ý:
- Nếu ChatGPT dừng giữa chừng hoặc hết lượt, lần sau mở lại đúng cuộc trò chuyện đó và gõ **tiếp**; nếu file trong /mnt/data đã mất, bảo nó "viết lại từ đầu bài học chưa có trong file đã tải lần trước" và tải file lần trước lên.
- Có thể nộp file dở dang: phần đã xong vẫn được ghép bình thường; gói đó sẽ được đóng gói lại phần còn thiếu.
- Không cần chép lại đề hay sửa gì trong file kết quả.

## Phía Claude (Pro) khi nhận file

```
python3 tools/qa/upgrade.py apply "<thư mục đã stage>/NC-ChatGPT-GOI-L12-01.md"
node tools/check.js --all && npm run build    # rồi commit + push
python3 tools/qa/style-audit.py --list        # xem còn bài nào thiếu
python3 tools/qa/upgrade.py pack              # đóng gói lại phần còn thiếu (nếu cần)
```
`apply` in ra các dòng `*** GHI CHÚ` (không đưa lên web) và `KHÁC ĐÁP SỐ` (đáp số mới khác đáp số cũ) để kiểm tra tay.
