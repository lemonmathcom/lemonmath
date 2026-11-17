# Đưa lemonmath.com qua Cloudflare (gói miễn phí)

Mục đích: đặt Cloudflare đứng trước GitHub Pages để có **header bảo mật thật** (chống nhúng khung, nosniff, HSTS mạnh) mà GitHub Pages không cho đặt, kèm **chống DDoS** và **cache giúp trang nhanh hơn** cho học sinh mạng kém.

> **Làm vào giờ ít người dùng** (ví dụ khuya), vì đổi nameserver có thể gây chập chờn vài phút đến vài giờ. Có mục "Nếu hỏng thì làm gì" ở cuối để quay lui nhanh.

---

## Bước 0 — Ghi lại DNS hiện tại (phòng khi cần quay lui)

Vào trang quản lý tên miền ở **Nhân Hòa**, mở phần DNS của lemonmath.com, **chụp màn hình toàn bộ bản ghi hiện có**. GitHub Pages thường dùng:
- `lemonmath.com` (apex): 4 bản ghi **A** trỏ tới `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (có thể kèm bản ghi **AAAA** IPv6).
- `www`: một bản ghi **CNAME** trỏ tới `lemonmathcom.github.io`.

Nếu bản ghi của bạn khác, cứ ghi đúng cái đang có — lát nữa sẽ chép y nguyên sang Cloudflare.

## Bước 1 — Tạo tài khoản và thêm site

1. Đăng ký tại https://dash.cloudflare.com (miễn phí), bật luôn **2FA** cho tài khoản này.
2. **Add a site** → gõ `lemonmath.com` → chọn gói **Free** → Continue.
3. Cloudflare tự quét DNS hiện có. **Đối chiếu** với ảnh chụp ở Bước 0: đủ 4 bản ghi A (và AAAA nếu có) cho apex, và CNAME cho `www`. Thiếu cái nào thì **Add record** cho đủ.
4. Mỗi bản ghi A/CNAME của website để **đám mây màu cam (Proxied)** — đây chính là phần bật lớp chắn Cloudflare.

## Bước 2 — Đổi nameserver ở Nhân Hòa

1. Cloudflare sẽ hiện **2 nameserver** (dạng `xxx.ns.cloudflare.com`).
2. Về trang Nhân Hòa, vào mục **Nameserver / DNS management** của lemonmath.com, **thay toàn bộ nameserver cũ** bằng 2 cái của Cloudflare, lưu lại.
3. Quay lại Cloudflare bấm **Done, check nameservers**. Chờ Cloudflare báo trạng thái **Active** (thường vài phút đến vài giờ; Cloudflare gửi email khi xong).

## Bước 3 — Cấu hình SSL (quan trọng nhất, tránh lỗi)

Khi site đã **Active**:

1. **SSL/TLS → Overview** → đặt chế độ mã hoá là **Full**.
   - ⚠️ **Tuyệt đối không chọn "Flexible"** — Flexible sẽ gây lặp chuyển hướng vô hạn (redirect loop) với GitHub Pages, trang không mở được.
   - Khi mọi thứ chạy ổn vài ngày, có thể nâng lên **Full (strict)** cho chặt hơn (GitHub cấp chứng chỉ hợp lệ nên Full strict chạy được).
2. **SSL/TLS → Edge Certificates** → bật **Always Use HTTPS** và **Automatic HTTPS Rewrites**.
3. Trong **GitHub → Settings → Pages**, giữ nguyên **Enforce HTTPS** đã bật.

## Bước 4 — Thêm header bảo mật

Vào **Rules → Transform Rules → Modify Response Header → Create rule** (hoặc **Rules → Overview** tùy giao diện mới). Tạo một rule áp dụng cho **tất cả request**, thêm các header **Static**:

| Header | Giá trị |
|---|---|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |

- `X-Frame-Options: DENY` chặn người khác nhúng lemonmath.com vào khung iframe của họ (chống clickjacking) — đây là thứ GitHub Pages không đặt được.
- `X-Content-Type-Options: nosniff` chặn trình duyệt đoán sai kiểu file.

## Bước 5 — Bật HSTS (sau khi chắc HTTPS chạy tốt)

Chỉ làm bước này **sau khi** đã xác nhận trang mở tốt qua HTTPS vài ngày:
- **SSL/TLS → Edge Certificates → HTTP Strict Transport Security (HSTS) → Enable**.
- Đặt **Max-Age = 6 months**, chưa vội bật `Preload`.
- ⚠️ HSTS "dính": một khi bật, trình duyệt sẽ ép HTTPS cho tên miền này trong suốt thời gian Max-Age. Nếu sau này có trục trặc chứng chỉ, trang sẽ khó mở. Vì vậy chỉ bật khi HTTPS đã chắc chắn ổn.

## Kiểm tra sau khi xong

1. Mở `https://lemonmath.com` — trang hiện bình thường, có ổ khoá.
2. Thử **một lớp trực tiếp thật** (tạo lớp + vào bằng điện thoại khác) để chắc công cụ live vẫn chạy qua Cloudflare.
3. Kiểm tra header: vào https://securityheaders.com, gõ lemonmath.com, thấy X-Frame-Options / nosniff / Referrer-Policy xuất hiện là đạt.

## Nếu hỏng thì làm gì (quay lui)

- **Trang trắng / lỗi chứng chỉ ngay sau khi proxy:** vào Cloudflare DNS, bấm vào bản ghi và chuyển đám mây cam **Proxied** thành xám **DNS only**, chờ ~1 giờ để GitHub cấp lại chứng chỉ, rồi bật Proxied lại. (Để DNS only thì traffic đi thẳng tới GitHub như trước, trang vẫn chạy.)
- **Lặp chuyển hướng:** gần như chắc chắn do SSL để **Flexible** — đổi sang **Full**.
- **Muốn bỏ hẳn Cloudflare:** ở Nhân Hòa đổi nameserver trở lại nameserver cũ (ảnh chụp Bước 0). Sau khi lan truyền, mọi thứ về như trước khi dùng Cloudflare.

---

Ghi chú: CSP và Referrer-Policy hiện đã gắn sẵn trong trang (thẻ meta). Khi đã có Cloudflare, về sau có thể chuyển CSP lên thành HTTP header thật qua Transform Rules để chặt hơn nữa — nhờ tài khoản Pro làm nếu bạn muốn.
