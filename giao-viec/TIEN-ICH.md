# Tiện ích toán (LemonMath Tools): quy tắc và tiến độ

Bắt đầu 26/11/2026 theo hai bản yêu cầu của chủ dự án ("Yêu cầu triển khai tính năng toán học tương tác" và "Project: LemonMath Tools"). Thiết kế đầy đủ (10 mục, lộ trình, rủi ro, độ phức tạp từng tiện ích): Claude Docs "Thiết kế: LemonMath Tools – Lemonmath".

Trang: `/tools/` và `/vi/tien-ich/`, mỗi tiện ích một trang `/tools/<slug-en>/`, `/vi/tien-ich/<slug-vi>/`.
Nhánh làm việc: `tien-ich`. Chỉ gộp vào `main` (tức là đăng lên web) khi chủ dự án duyệt.

## Thêm một tiện ích (3 bước)

1. Thêm một mục vào `data/tools.json`: `id`, `cat` (calculate, visualize, practice, teach, classroom, play), `icon`, `status` (`live` hoặc `soon`), `added` (ngày), `slug` (en, vi), `name`, `short`, `kw` (từ khoá tìm kiếm, hai thứ tiếng), `related` (id các tiện ích liên quan). build.js kiểm tra đủ các trường và dừng nếu thiếu.
2. Viết `assets/tools/<id>.js`: gọi `LMT.tool('<id>', function (app, ctx) { … })` (`ctx.vi`, `ctx.store` lưu trên máy, `ctx.C` chữ dùng chung). Phần tính toán thuần (không DOM) xuất ra cho Node theo khuôn của `classroom-timer.js` để viết kiểm thử.
3. Viết `content/vi/tools/<id>.md` và `content/en/tools/<id>.md` (title, description ≤ 160 kí tự; Cách dùng, Gợi ý dùng trong giờ Toán, Câu hỏi thường gặp). Trang này là phần Google đọc được.

Trang trung tâm, menu "Thêm ▾", chân trang, sitemap và ô tìm kiếm tự cập nhật.

## Quy tắc

- Chạy hết trên trình duyệt; không đăng nhập; không gửi dữ liệu đi. Lưu trên máy bằng `ctx.store` (khoá `lm-tl-<id>:…`). Mỗi trang có nút xoá dữ liệu đã lưu.
- Không dùng `eval()` hay `new Function` cho biểu thức toán. Không nhúng dịch vụ trả phí hoặc cần API key (Desmos, GeoGebra API) khi chủ dự án chưa đồng ý. Đồ thị, hình học: JSXGraph (MIT/LGPL).
- Thư viện chỉ tải trên trang cần nó. CSS chung ở `assets/tools/tools.css` (chỉ tải trên trang tiện ích). Không viết bộ chọn kiểu `.x span` cho vùng có công thức KaTeX.
- Chữ giao diện: chữ dùng chung ở `tools/ui.js` (tl…), chữ riêng của tiện ích ở bảng `S` hai thứ tiếng đầu file tiện ích. Không viết chữ thẳng trong HTML.
- Ngẫu nhiên: luôn dùng `LMT.randInt`, `LMT.shuffle`, `LMT.sampleIndexes` (crypto, không lệch).
- Không dùng màu làm cách duy nhất để báo đúng/sai; phải có chữ đi kèm. Tôn trọng "giảm chuyển động" (`LMT.reduced()`).
- Thêm dữ liệu lưu mới (kể cả chỉ trên máy) thì cập nhật hai trang Bảo mật.

## Kiểm thử (phải chạy thật trước khi báo xong)

- `node --test tools/test/tools-core.test.js`: thuật toán (ngẫu nhiên công bằng, chia nhóm, đọc danh sách lớp, CSV, đồng hồ). 14 phép thử.
- `npm run build`, rồi `python3 -m http.server 8123 --directory dist` và `python3 tools/test/tools-e2e.py http://localhost:8123 --shots <thư mục>`: mở trang thật bằng Chrome, bấm thử từng chức năng, đo tràn ngang trên điện thoại, chụp màn hình sáng/tối. Cần Python Playwright và Chrome (không chạy trên GitHub Actions).
- `node tools/check.js --all` để chắc không ảnh hưởng bài học.

## Tiến độ

| Giai đoạn | Việc | Trạng thái |
| --- | --- | --- |
| 1A Nền tảng | Sổ đăng kí, trang trung tâm (tìm kiếm, lọc, yêu thích, dùng gần đây), trang tiện ích, core.js, tools.css, song ngữ, lưu trên máy, kiểm thử | Xong 26/11/2026, chờ duyệt |
| 1B Nhanh | Đồng hồ bấm giờ, Gọi tên ngẫu nhiên, Chia nhóm ngẫu nhiên | Xong 26/11/2026, chờ duyệt |
| 1B Nhanh | Giấy kẻ ô, hệ trục; Soạn công thức (MathLive); Máy tính phân số | Chưa làm |
| 1C Bộ máy bài tập | Exercise Generator + Answer Validator dùng chung; Worksheet Generator; Math Practice | Chưa làm |
| 1D Nâng cao | Vẽ đồ thị (JSXGraph); Mô phỏng xác suất; Bảng biến thiên, bảng xét dấu; Bảng viết | Chưa làm |
| Trong bài học | Khối đồ thị tương tác tải lười; ô nhập đáp án MathLive tự chấm; bảng nháp nhỏ khi làm bài | Chưa làm |

Khi gộp vào `main`: đổi ngày hiệu lực ở hai trang Bảo mật thành ngày đăng nếu khác 26/11/2026.
