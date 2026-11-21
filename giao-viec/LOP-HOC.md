# Lớp học của tôi: giao bài về nhà có hẹn giờ

Tính năng cho giáo viên (chủ dự án chốt ngày 20/11/2026): tài khoản giáo viên, lớp có danh sách học sinh và mã cá nhân, giao bài từ ngân hàng câu hỏi theo khung giờ (ví dụ 20:00 đến 21:00), bài tự đóng, chấm ngay, bảng kết quả cho giáo viên.

- Trang giáo viên: /vi/lop-hoc/ và /classroom/ (assets/classroom.js)
- Không thay thế công cụ cũ: Góc giáo viên (/vi/giao-vien/) vẫn tạo đề nhiều mã đề và "Cho cả lớp làm trực tiếp" KHÔNG cần tài khoản. Đầu trang Góc giáo viên có hai thẻ "Tạo đề ngay, không cần tài khoản" và "Lớp học của tôi"; trang đăng nhập Lớp học có dòng dẫn sang /vi/giao-vien/#tq-app (chủ dự án nhắc ngày 20/11/2026).
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

## Bật gửi email (mã khôi phục, mã đặt lại mật khẩu)

Không bật thì mọi thứ vẫn chạy, giáo viên chỉ dùng mã khôi phục. Bật bằng Resend (gói miễn phí: 3.000 email/tháng, 100 email/ngày, 1 tên miền; máy chủ tự giới hạn 90 email/ngày):

1. Tạo tài khoản ở https://resend.com → Domains → Add Domain → `lemonmath.com` (vùng Tokyo hoặc Singapore).
2. Resend hiện 3–4 bản ghi DNS (MX và TXT cho `send.lemonmath.com`, TXT DKIM `resend._domainkey`). Thêm đúng các bản ghi đó ở nơi quản lý DNS của lemonmath.com (trang quản trị tên miền ở Nhân Hòa, hoặc Cloudflare nếu DNS đã chuyển sang đó). Không xóa bản ghi cũ của GitHub Pages. Chờ Resend báo Verified.
3. Resend → API Keys → Create API Key (quyền Sending access, chỉ tên miền lemonmath.com) → sao chép khóa (bắt đầu bằng `re_`).
4. GitHub → Settings → Secrets → Actions → New repository secret: tên `RESEND_API_KEY`, giá trị là khóa ở bước 3.
5. Chạy lại workflow api.yml. Bước "E-mail key" đưa khóa vào Worker; `GET /v1/info` trả `{"email": true}` là đã bật.

Người gửi: `Lemonmath <khong-tra-loi@lemonmath.com>` (biến MAIL_FROM trong api/wrangler.toml).

**Đã bật 20/11/2026.** Tài khoản Resend của chủ dự án, tên miền lemonmath.com vùng Tokyo (ap-northeast-1), trạng thái Verified. DNS của lemonmath.com do Nhân Hòa quản lý (máy chủ tên miền `*.zonedns.vn`, trang customer.nhanhoa.com → Tên miền → DNS Record). Đã thêm 4 bản ghi: TXT `resend._domainkey` (khóa DKIM), CNAME `send` → `send.forge.rmta.net`, CNAME `rsend` → `rsend-apne1.forge.rmta.net`, TXT `_dmarc` = `v=DMARC1; p=none;`. Không thêm MX (Lemonmath chỉ gửi, không nhận thư). Không xóa 4 bản ghi A và CNAME `www` của GitHub Pages. Khóa API tên `lemonmath-api` (Sending access, chỉ lemonmath.com) nằm trong GitHub secret RESEND_API_KEY và secret cùng tên của Worker.

## Hoạt động thế nào

- **Giáo viên** tạo tài khoản bằng email và mật khẩu. Mật khẩu được băm (PBKDF2, 150.000 vòng) ngay trên trình duyệt; máy chủ chỉ lưu HMAC của bản băm với khóa bí mật PEPPER. Khi tạo tài khoản, giáo viên nhận một **mã khôi phục 12 kí tự** (hiện một lần trên màn hình; khi đã bật email thì gửi kèm vào email đăng kí). Quên mật khẩu: dùng mã khôi phục, hoặc (khi đã bật email) nhận **mã 6 số qua email**, dùng được 15 phút, sai 5 lần thì hủy, tối đa 3 mã mỗi giờ; trang luôn trả lời giống nhau dù email có tài khoản hay không. Trang Tài khoản có nút "Tạo mã khôi phục mới" (mã cũ hết hiệu lực). Sai mật khẩu 8 lần liền thì tài khoản khóa 15 phút.
- **Lớp**: dán danh sách học sinh (mỗi dòng một em). Mỗi em được một **mã cá nhân 4 chữ số**; giáo viên in phiếu phát cho từng em. Trang làm bài chỉ hiện "số thứ tự. tên gọi" (ví dụ "12. An"), họ tên đầy đủ chỉ hiện sau khi em nhập đúng mã. Sai mã 8 lần thì tên đó khóa trong bài đó, giáo viên bấm "Mở khóa".
- **Hai loại bài, hai mục đích** (chủ dự án yêu cầu 20/11/2026: tách rõ đặc trưng và ý nghĩa):

  | | Bài tập về nhà (`mode: home`) | Bài kiểm tra (`mode: test`) |
  |---|---|---|
  | Ý nghĩa | Luyện tập, củng cố, học từ lỗi sai | Đánh giá mức đạt được, công bằng |
  | Thời gian | Khung rộng: đến 21:00 tối nay / tối mai / hết Chủ nhật / một tuần; giới hạn phút mỗi em không bắt buộc | Giờ bắt đầu chung + thời gian làm (15/45/90 phút) + cho vào muộn tối đa (mặc định 5 phút); giờ đóng = bắt đầu + vào muộn + thời gian làm; sau giờ vào muộn máy chủ từ chối (`late_start`) để ai vào cũng đủ giờ |
  | Mã cá nhân, trộn câu | Tùy chọn | Luôn bật (máy chủ ép) |
  | Đáp án, lời giải | Mặc định hiện ngay khi nộp | Chỉ sau khi bài đóng (máy chủ ép) |
  | Sau khi nộp | Xem lời giải, "Luyện lại (không tính điểm)" chấm ngay trên máy | Điểm được ghi, không làm lại |
  | Trong lúc làm | Nhắc ghi lời giải vào vở | Hỏi xác nhận trước khi bấm giờ; đồng hồ chạy liên tục; đếm số lần rời trang (học sinh được báo trước) |
  | Bảng của giáo viên | Tỉ lệ đã làm, "Nhắc các em chưa làm" (danh sách + lời nhắc chung không nêu tên), 3 câu nên chữa đặt trên cùng | Điểm trung bình, trung vị, cao nhất, thấp nhất, phổ điểm 4 mức, cột "Rời trang" (từ 3 lần tô đỏ) |
  | Tin nhắn Zalo | Hạn nộp, nhắc bố mẹ khen con cố gắng | Giờ bắt đầu, giờ vào muộn nhất, nhờ bố mẹ cho con chỗ yên tĩnh |

  Lớp 1–5 chỉ có "Luyện tập tự nguyện cùng bố mẹ" (`free`). Máy chủ vẫn nhận `class2` cho bài cũ nhưng giao diện không còn.
- **Danh sách lớp: nhập ngay hoặc để học sinh tự nhập tên** (chủ dự án yêu cầu 20/11/2026). Khi tạo lớp có hai lựa chọn rõ ràng: "Nhập danh sách ngay" (dán tên, mỗi em có mã cá nhân để in phát) hoặc "Để học sinh tự nhập tên" (không nhập gì). Lớp có cột `self_join` (migration 0004): bật thì trang làm bài có ô "Nhập họ tên của bạn" (danh sách rỗng thì hiện ô này ngay), em gõ họ tên đầy đủ, máy chủ (`POST /v1/hw/:code/join`) tạo học sinh mới, cấp mã cá nhân 4 số và hiện cho em ghi lại; lần sau em chọn tên trong danh sách và nhập mã. Trùng tên đã có thì bị từ chối (`name_taken`) và trang quay về danh sách. Học sinh tự thêm có dấu "tự thêm" (cột `students.self`) và nút "Tên đúng" ở thẻ Học sinh; sửa tên cũng bỏ dấu này. Ô "Cho em chưa có tên trong danh sách tự nhập tên" ở thẻ Học sinh bật/tắt bất cứ lúc nào. Tin nhắn Zalo tự thêm một dòng hướng dẫn khi lớp đang bật.
- **Mật khẩu**: mọi ô mật khẩu ở Lớp học của tôi có nút 👁 hiện/ẩn (hàm `eyes()` trong classroom.js, tự gắn vào ô mới nhờ MutationObserver).
- **Giao bài** (4 bước đánh số, 20/11/2026): 1. Loại bài (chọn trước vì quyết định mọi thứ sau) → 2. Câu hỏi (tên bài, ngân hàng, bài học, số câu, ước tính số phút) → 3. Thời gian (bài về nhà: nút nhanh + giờ mở, hạn nộp, giới hạn phút tùy chọn; bài kiểm tra: giờ bắt đầu, thời gian làm, vào muộn tối đa, dòng thời gian "Mở bài → Hết giờ vào → Bài đóng") → 4. Tùy chọn (bài về nhà: mã cá nhân, trộn câu, cho xem lời giải; bài kiểm tra: danh sách các điều luôn bật). Nút giao đổi chữ theo loại bài.
- **Nguyên tắc giao diện** (chủ dự án nhắc 20/11/2026: gọn gàng, dễ hiểu, dễ dùng, không gây hiểu lầm): mỗi màn hình chỉ một việc chính; bảng kết quả tối đa 4 ô số; nút nguy hiểm (Xóa lớp, Xóa bài, Đóng bài ngay) nằm trong mục gập riêng; lời khuyên của Lemon theo loại bài (không nhắc nút "Làm lại" ở bài kiểm tra, không nói "lời giải đã hiện" khi chưa tới giờ); "3 câu nên chữa" chỉ hiện khi có từ 3 em nộp; dưới bảng có chú thích kí hiệu ✓ ½ ✗ ·. Kiểm tra lại bằng ảnh chụp ở bề rộng 390px và 1280px trước khi đăng. Câu hỏi được chụp lại (cả đáp án) vào cơ sở dữ liệu lúc giao, nên ngân hàng đổi về sau cũng không ảnh hưởng bài đã giao. Có ước tính số phút (NB 1, TH 2, VD 4, VDC 6 phút mỗi câu; câu đúng sai theo từng ý).
- **Chống chép**: mỗi em một thứ tự câu và thứ tự phương án riêng (giữ nguyên ba phần; câu có phương án nhắc tới chữ cái như "Cả A và B" thì không trộn phương án). Đáp án không gửi xuống máy học sinh trước khi nộp (hoặc trước giờ đóng, tùy cài đặt).
- **Giờ do máy chủ quyết định**: trước giờ mở không vào được; sau giờ đóng máy chủ từ chối câu trả lời mới. Câu trả lời lưu ngay trên máy em và gửi lên vài giây một lần. Mất mạng lúc đóng bài: máy khóa bài đúng giờ và gửi khi có mạng, máy chủ nhận trong 15 phút sau giờ đóng và đánh dấu "nộp muộn". Em không bấm nộp thì hết giờ (cộng 15 phút) bài được tự nộp với các câu đã lưu.
- **Bảng kết quả**: ai đã nộp, đang làm, chưa vào; điểm thang 10 (chấm như đề tốt nghiệp: nhiều lựa chọn 0,25; đúng sai 0,1/0,25/0,5/1; trả lời ngắn 0,5); ô đúng/sai từng câu; % đúng từng câu; "3 câu nên chữa đầu giờ" kèm phương án sai chọn nhiều nhất; chép bảng điểm, tải CSV, chuyển sang công cụ viết nhận xét gửi phụ huynh. Giáo viên đóng bài ngay, gia hạn, cho một em làm lại, xóa bài. Hình thức tự nguyện không hiện điểm từng em.
- **Dữ liệu**: bài giao và bài làm tự xóa 30 ngày sau giờ đóng (cron Worker chạy 02:17 giờ Việt Nam). Xóa lớp hay xóa tài khoản là xóa hết dữ liệu đi kèm.

## Giới hạn gói miễn phí của Cloudflare

Workers Free: 100.000 lượt gọi mỗi ngày, 10 ms CPU mỗi lượt. D1 Free: 5 triệu dòng đọc và 100.000 dòng ghi mỗi ngày, 5 GB. Một lớp 40 em làm một bài khoảng 3.000 lượt gọi và 1.500 dòng ghi, nên mỗi ngày đủ cho khoảng 30 lượt lớp làm bài. Vượt mức thì nâng lên Workers Paid (5 USD/tháng).

## Thử trên máy

```
cd api && npm ci
printf 'PEPPER="local-dev-pepper-0123456789abcdef"\nALLOW_LOCALHOST="1"\nRESEND_API_KEY="re_local_test_key"\nMAIL_DEBUG="1"\n' > .dev.vars   # MAIL_DEBUG chỉ dùng ở máy: trả mã 6 số trong phản hồi
npx wrangler d1 migrations apply lemonmath --local
npx wrangler dev --local --port 8787          # cửa sổ 1
node test/api.test.mjs                         # cửa sổ 2: 71 phép thử (gồm cả mã học tập của học sinh)
cd .. && API_URL=http://127.0.0.1:8787 npm run build && node tools/serve.js   # rồi mở http://localhost:8000/vi/lop-hoc/
```

Thêm bảng hoặc cột: tạo file mới api/migrations/000N_<tên>.sql (đã có 0001 khởi tạo, 0002 email, 0003 số lần rời trang, 0004 học sinh tự nhập tên, 0005 mã học tập (journeys) và bảng đếm rate; không sửa file cũ); workflow tự áp dụng.

## Việc tiếp theo (theo tài liệu nghiên cứu, chưa làm)

Giai đoạn 2: ôn xen kẽ 2–3 câu bài cũ, kiểm tra ghi vở, làm lại bằng câu tương tự, đề riêng từng em (câu khác nhau cùng bài cùng mức), làm trên giấy rồi nhập đáp số. Giai đoạn 3: sổ lớp nhiều tuần, bản tin tuần cho phụ huynh, đăng nhập Google cho giáo viên. Bài kiểm tra quan trọng: câu hỏi trong ngân hàng cũng có trong các bài học công khai trên website, nên nên thêm "câu hỏi riêng của giáo viên" (không công khai).
