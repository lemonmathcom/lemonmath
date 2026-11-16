# Giao ChatGPT viết lại giọng văn (chuẩn 2f) – 210 bài còn lại

Từ 16/11/2026 tài khoản Pro (Claude) dừng tự viết lại giọng văn. Phần còn lại (210 bài học, từ #27 trong `giao-viec/GIONG-VAN.md`) giao cho **một tài khoản ChatGPT Plus**, chia thành **25 gói**. Mỗi gói là một file `.txt` đã chứa đủ: hướng dẫn, chuẩn giọng văn 2f, quy tắc không được đổi toán, định dạng nộp bài, và nội dung các bài (cả bản Việt và bản Anh; mỗi đoạn lời cần viết lại có mã `[[P7·3fa2]]`, bài tập và quiz đã thu gọn).

ChatGPT **không sửa file bài học**: nó chỉ nộp các đoạn văn mới kèm mã. Máy ghép lại, tự từ chối đoạn nào làm mất công thức, mất liên kết, hay tạo hộp/tiêu đề lạ.

## Danh sách gói (làm theo thứ tự)

| Gói | Nội dung | Số bài | Trạng thái |
|---|---|---|---|
| GV-01 | Lớp 10 (vectors-in-coordinates) + lớp 9 (lượng giác, đường tròn, căn bậc ba, hình trụ – nón, phương trình quy về bậc nhất) | 9 | |
| GV-02 | Lớp 9: xác suất, bảng tần số, hàm $y=ax^2$, giải bài toán bằng phương trình, bất đẳng thức, góc nội tiếp, đường tròn | 9 | |
| GV-03 | Lớp 9: bất phương trình, phương trình bậc hai, phép thử, đa giác đều, hệ thức lượng, căn thức, hệ phương trình | 9 | |
| GV-04 | Lớp 9: giải hệ phương trình, hình cầu, căn bậc hai, vị trí hai đường tròn, định lí Viète | 6 | |
| GV-05 | Lớp 12: góc trong không gian, nguyên hàm, tiệm cận, xác suất có điều kiện, hệ toạ độ, tích phân | 6 | |
| GV-06 | Lớp 12: đạo hàm thực tế, chiến lược thi, khảo sát hàm số, tứ phân vị, phương sai, ứng dụng tích phân, đường thẳng | 7 | |
| GV-07 | Lớp 12: GTLN–GTNN, cực trị, mặt phẳng, 4 đề luyện THPT, ôn tập toạ độ, hàm số, tích phân | 10 | |
| GV-08 | Lớp 12: ôn tối ưu, hình không gian, thống kê – xác suất, lượng giác – mũ – log – dãy số, mặt cầu, Bayes, toạ độ vectơ | 7 | |
| GV-09 | Lớp 12 (vectơ trong không gian) + lớp 1 | 10 | |
| GV-10 | Lớp 1 | 8 | |
| GV-11 | Lớp 2 | 10 | |
| GV-12 | Lớp 2 + lớp 3 | 10 | |
| GV-13 | Lớp 3 | 10 | |
| GV-14 | Lớp 3 (bảng nhân, tam giác – tứ giác, phân số đơn vị) | 5 | |
| GV-15 | Lớp 4 | 10 | |
| GV-16 | Lớp 4 + lớp 5 | 10 | |
| GV-17 | Lớp 5 (diện tích, thể tích) + lớp 7 | 5 | |
| GV-18 | Lớp 8, lớp 11 + ACT | 9 | |
| GV-19 | ACT + AP Calculus | 10 | |
| GV-20 | AP Calculus | 7 | |
| GV-21 | AP Precalculus | 9 | |
| GV-22 | AP Statistics + IB AA | 10 | |
| GV-23 | IB AA | 5 | |
| GV-24 | SAT | 10 | |
| GV-25 | SAT + kĩ năng ôn thi | 9 | |

Danh sách bài cụ thể của từng gói ghi ở đầu file gói và ở cột Trạng thái trong `giao-viec/GIONG-VAN.md` ("giao ChatGPT GV-NN").

## Cách giao (chủ dự án làm, mỗi gói một cuộc trò chuyện mới)

1. Lấy file gói trong kho GitHub: `giao-viec/giong-van/chatgpt/GV-01.txt` (hoặc nhờ Claude gửi file). Mỗi file 70–180 KB.
2. Mở **một cuộc trò chuyện mới** trong ChatGPT (tài khoản Plus, mô hình mạnh nhất có, bật công cụ phân tích dữ liệu/Python nếu được hỏi).
3. Tải file gói lên và dán nguyên văn lời nhắn sau (đổi GV-01 thành tên gói):

> Hãy đọc kĩ toàn bộ file đính kèm GV-01.txt, nhất là các mục 1–5 ở đầu file, rồi làm đúng theo đó. Bạn chỉ viết lại phần lời (các đoạn có mã [[P…]]) theo giọng một nhà giáo tâm huyết, dung dị; tuyệt đối không đổi công thức, con số, liên kết. Mỗi lượt trả lời làm một bài học (cả bản Việt và bản Anh), dùng Python đối chiếu để chắc chắn mọi $…$ và mọi con số của đoạn cũ vẫn còn trong đoạn mới, rồi ghi nối tiếp vào file /mnt/data/GV-ChatGPT-GV-01.md đúng định dạng ở mục 4. Mã [[P…·…]] phải chép đúng từng kí tự. Bắt đầu với bài học đầu tiên.

4. Mỗi khi ChatGPT báo "Đã xong bài … (k/n)", gõ **tiếp**.
5. Xong gói: ChatGPT đưa đường dẫn tải `GV-ChatGPT-GV-01.md`. Tải về, lưu vào Dropbox **Lemonmath.com\viec da lam** (giữ nguyên tên file).
6. Nhắn cho Claude (Pro): "đã có file giọng văn từ ChatGPT". Claude ghép, kiểm tra, đăng.

Lưu ý:
- Nhịp đề xuất: 1–2 gói mỗi ngày (khoảng 10–20 bài), không cần gấp.
- ChatGPT dừng giữa chừng hoặc hết lượt: lần sau mở lại đúng cuộc trò chuyện đó và gõ **tiếp**. Nếu file trong /mnt/data đã mất: tải file đã có lần trước lên và nói "viết tiếp từ bài học chưa có trong file này, ghi nối tiếp vào cùng file".
- Có thể nộp file dở dang: phần đã xong vẫn được ghép; bài thiếu sẽ được gói lại.
- Thỉnh thoảng nhắc ChatGPT: "nhớ: lớp 1–5 xưng em, từ lớp 6 xưng bạn; không đổi công thức, con số; mã [[P…]] chép đúng".
- Nếu ChatGPT in cả đoạn văn ra khung chat thay vì ghi file: nhắc "chỉ ghi vào file, mỗi lượt báo một dòng".

## Phía Claude (Pro) khi nhận file

```
python3 tools/qa/giongvan.py apply "<thư mục đã stage>/GV-ChatGPT-GV-01.md"
```

- Kết quả in số đoạn ghép được mỗi bài, rồi ba nhóm: **LỖI** (đoạn bị bỏ qua: mất công thức, mất liên kết, mã sai hoặc băm không khớp, có dòng tạo hộp/tiêu đề/bảng), **CẢNH BÁO** (thêm công thức, con số khác: đọc lại đoạn đó trong `git diff`, sửa tay nếu cần), **GHI CHÚ của ChatGPT** (nghi lỗi toán: kiểm tra riêng).
- Bài ghép được cả hai bản tự ghi "xong <ngày> (ChatGPT)" vào `giao-viec/GIONG-VAN.md`.
- Đọc lướt `git diff` vài bài (xưng hô đúng lớp, không sáo rỗng, câu chốt cuối Tóm tắt), rồi `node tools/check.js --all && npm run build`, commit "Giọng văn (ChatGPT): GV-NN", push. Dọn file đã xử lý vào "viec da lam/da dang".
- Gói lại phần còn thiếu (bài chưa ghép đủ, đoạn bị bỏ qua nhiều): `python3 tools/qa/giongvan.py pack --out giao-viec/giong-van/chatgpt/dot2` (lấy các dòng còn trống hoặc "giao ChatGPT"; mã băm tính lại theo bài hiện tại). Đừng chạy `pack` vào thư mục gốc `chatgpt/` khi các gói cũ còn đang làm dở, vì sẽ đánh số lại và ghi đè.
- Thử khô: thêm `--dry` để xem kết quả mà không ghi file.
