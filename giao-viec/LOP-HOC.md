# Lớp học của tôi: giao bài về nhà có hẹn giờ

Tính năng cho giáo viên (chủ dự án chốt ngày 20/11/2026): tài khoản giáo viên, lớp có danh sách học sinh và mã cá nhân, giao bài từ ngân hàng câu hỏi theo khung giờ (ví dụ 20:00 đến 21:00), bài tự đóng, chấm ngay, bảng kết quả cho giáo viên.

- Trang giáo viên: /vi/lop-hoc/ và /classroom/ (assets/classroom.js)
- Trang học sinh: /vi/lam-bai/?m=MÃBÀI và /homework/?m=CODE (assets/hw.js)
- Máy chủ: thư mục api/ (Cloudflare Worker + cơ sở dữ liệu D1), tự đăng bằng .github/workflows/api.yml
- Hai trang trên chỉ được sinh ra khi data/curriculum.json có "site" → "api" (workflow tự ghi sau lần đăng đầu).
- **Đã bật ngày 20/11/2026**: máy chủ https://lemonmath-api.chanh101.workers.dev (tài khoản Cloudflare chanh101, D1 "lemonmath" ở APAC, token GitHub tên lemonmath-github-api chỉ có quyền Workers + D1 của tài khoản này).

## Chủ dự án làm một lần (khoảng 10 phút)

Lemonmath đã dùng Cloudflare Web Analytics nên đã có tài khoản Cloudflare.

1. **Đặt tên miền con workers.dev.** Vào https://dash.cloudflare.com → Workers & Pages (cột trái, mục Compute). Lần đầu vào, Cloudflare hỏi tên miền con dạng `<tên>.workers.dev`: chọn một tên, ví dụ `lemonmath`. Máy chủ sẽ có địa chỉ `https://lemonmath-api.<tên>.workers.dev`.
2. **Chép Account ID.** Cũng ở trang Workers & Pages, khung bên phải có "Account ID". Bấm sao chép.
3. **Tạo API token.** Bấm ảnh đại diện góc phải trên → My Profile → API Tokens → Create Token → dòng "Edit Cloudflare Workers" bấm Use template. Ở phần Permissions bấm "+ Add more", thêm dòng: Account · D1 · Edit. Account Resources: chọn tài khoản của bạn; Zone Resources: All zones. Bấm Continue to summary → Create Token, rồi sao chép token (chỉ hiện một lần).
4. **Dán vào GitHub.** Mở https://github.com/lemonmathcom/lemonmath/settings/secrets/actions → New repository secret, tạo hai secret:
   - Tên `CLOUDFLARE_API_TOKEN`, giá trị là token ở bước 3.
   - Tên `CLOUDFLARE_ACCOUNT_ID`, giá trị là Account ID ở bước 2.
5. **Chạy.** Mở https://github.com/lemonmathcom/lemonmath/actions/workflows/api.yml → Run workflow → Run workflow. Khoảng 2 phút sau: cơ sở dữ liệu được tạo, máy chủ được đăng, khóa bí mật được sinh, địa chỉ máy chủ được ghi vào data/curriculum.json và website tự dựng lại. Khi xong, mở https://lemonmath.com/vi/lop-hoc/.

Không bao giờ xóa secret `PEPPER` của Worker trong Cloudflare: đó là khóa dùng để kiểm tra mật khẩu, mất là mọi giáo viên phải dùng mã khôi phục để đặt lại mật khẩu.

## Hoạt động thế nào

- **Giáo viên** tạo tài khoản bằng email và mật khẩu. Mật khẩu được băm (PBKDF2, 150.000 vòng) ngay trên trình duyệt; máy chủ chỉ lưu HMAC của bản băm với khóa bí mật PEPPER. Khi tạo tài khoản, giáo viên nhận một **mã khôi phục 12 kí tự** (chỉ hiện một lần) để tự đặt lại mật khẩu, nên không cần dịch vụ gửi email. Sai 8 lần liền thì tài khoản khóa 15 phút.
- **Lớp**: dán danh sách học sinh (mỗi dòng một em). Mỗi em được một **mã cá nhân 4 chữ số**; giáo viên in phiếu phát cho từng em. Trang làm bài chỉ hiện "số thứ tự. tên gọi" (ví dụ "12. An"), họ tên đầy đủ chỉ hiện sau khi em nhập đúng mã. Sai mã 8 lần thì tên đó khóa trong bài đó, giáo viên bấm "Mở khóa".
- **Giao bài**: chọn bài học trong ngân hàng câu hỏi, số câu mỗi phần, hình thức (bài về nhà / luyện tập buổi 2 / tự nguyện cùng bố mẹ; lớp 1–5 chỉ có tự nguyện), giờ mở và giờ đóng (có nút nhanh "Tối nay 20:00 đến 21:00"), thời gian tối đa cho mỗi em, có bắt mã cá nhân không, khi nào cho xem đáp án. Câu hỏi được chụp lại (cả đáp án) vào cơ sở dữ liệu lúc giao, nên ngân hàng đổi về sau cũng không ảnh hưởng bài đã giao. Có ước tính số phút (NB 1, TH 2, VD 4, VDC 6 phút mỗi câu; câu đúng sai theo từng ý).
- **Chống chép**: mỗi em một thứ tự câu và thứ tự phương án riêng (giữ nguyên ba phần; câu có phương án nhắc tới chữ cái như "Cả A và B" thì không trộn phương án). Đáp án không gửi xuống máy học sinh trước khi nộp (hoặc trước giờ đóng, tùy cài đặt).
- **Giờ do máy chủ quyết định**: trước giờ mở không vào được; sau giờ đóng máy chủ từ chối câu trả lời mới. Câu trả lời lưu ngay trên máy em và gửi lên vài giây một lần. Mất mạng lúc đóng bài: máy khóa bài đúng giờ và gửi khi có mạng, máy chủ nhận trong 15 phút sau giờ đóng và đánh dấu "nộp muộn". Em không bấm nộp thì hết giờ (cộng 15 phút) bài được tự nộp với các câu đã lưu.
- **Bảng kết quả**: ai đã nộp, đang làm, chưa vào; điểm thang 10 (chấm như đề tốt nghiệp: nhiều lựa chọn 0,25; đúng sai 0,1/0,25/0,5/1; trả lời ngắn 0,5); ô đúng/sai từng câu; % đúng từng câu; "3 câu nên chữa đầu giờ" kèm phương án sai chọn nhiều nhất; chép bảng điểm, tải CSV, chuyển sang công cụ viết nhận xét gửi phụ huynh. Giáo viên đóng bài ngay, gia hạn, cho một em làm lại, xóa bài. Hình thức tự nguyện không hiện điểm từng em.
- **Dữ liệu**: bài giao và bài làm tự xóa 30 ngày sau giờ đóng (cron Worker chạy 02:17 giờ Việt Nam). Xóa lớp hay xóa tài khoản là xóa hết dữ liệu đi kèm.

## Giới hạn gói miễn phí của Cloudflare

Workers Free: 100.000 lượt gọi mỗi ngày, 10 ms CPU mỗi lượt. D1 Free: 5 triệu dòng đọc và 100.000 dòng ghi mỗi ngày, 5 GB. Một lớp 40 em làm một bài khoảng 3.000 lượt gọi và 1.500 dòng ghi, nên mỗi ngày đủ cho khoảng 30 lượt lớp làm bài. Vượt mức thì nâng lên Workers Paid (5 USD/tháng).

## Thử trên máy

```
cd api && npm ci
printf 'PEPPER="local-dev-pepper-0123456789abcdef"\nALLOW_LOCALHOST="1"\n' > .dev.vars
npx wrangler d1 migrations apply lemonmath --local
npx wrangler dev --local --port 8787          # cửa sổ 1
node test/api.test.mjs                         # cửa sổ 2: 39 phép thử
cd .. && API_URL=http://127.0.0.1:8787 npm run build && node tools/serve.js   # rồi mở http://localhost:8000/vi/lop-hoc/
```

Thêm bảng hoặc cột: tạo file mới api/migrations/0002_<tên>.sql (không sửa file cũ); workflow tự áp dụng.

## Việc tiếp theo (theo tài liệu nghiên cứu, chưa làm)

Giai đoạn 2: ôn xen kẽ 2–3 câu bài cũ, kiểm tra ghi vở, làm lại bằng câu tương tự, đề riêng từng em (câu khác nhau cùng bài cùng mức), làm trên giấy rồi nhập đáp số. Giai đoạn 3: sổ lớp nhiều tuần, bản tin tuần cho phụ huynh, đăng nhập Google cho giáo viên. Bài kiểm tra quan trọng: câu hỏi trong ngân hàng cũng có trong các bài học công khai trên website, nên nên thêm "câu hỏi riêng của giáo viên" (không công khai).
