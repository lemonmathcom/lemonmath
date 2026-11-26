# Chuyển lemonmath.com sang Cloudflare (giai đoạn 2) và giai đoạn 3

Chủ dự án duyệt 26/11/2026. Mục tiêu: web không còn bị giới hạn 1 GB của GitHub Pages, có kho R2 cho tài liệu tải về
(khoảng 20 GB), email vẫn chạy như cũ.

## Trạng thái

| Việc | Ai làm | Trạng thái |
|---|---|---|
| Web chạy song song trên Cloudflare Workers (`lemonmath-site`, chỉ file tĩnh, cùng `dist/`) | Claude | đăng tự động mỗi lần build (deploy.yml) |
| Thêm `lemonmath.com` vào Cloudflare (gói Free), để các bản ghi A/CNAME ở chế độ **DNS only** | chủ dự án | |
| Đổi nameserver ở Nhân Hòa sang 2 nameserver Cloudflare | chủ dự án | |
| Thêm thẻ thanh toán, bật R2 | chủ dự án | |
| Bổ sung quyền cho token Cloudflare (xem dưới) | chủ dự án | |
| `cloudflare-setup.yml` bước `r2`: bucket `lemonmath-tailieu` + `tai-lieu.lemonmath.com` | Claude | |
| `cloudflare-setup.yml` bước `ten-mien`: lemonmath.com → Worker, www → chuyển về lemonmath.com | Claude | |
| Kiểm tra web, email (support@ chuyển tiếp qua ImprovMX, mã khôi phục qua Resend) | Claude + chủ dự án | |
| Sau vài ngày ổn định: `"hosting": { "pages": false }`, tắt GitHub Pages | Claude | |

## Bản ghi DNS phải giữ nguyên (đọc ngày 26/11/2026)

| Loại | Tên | Giá trị | Ghi chú |
|---|---|---|---|
| MX | lemonmath.com | 10 mx1.improvmx.com, 20 mx2.improvmx.com | nhận thư support@, admin@ chuyển tiếp sang Gmail |
| TXT | lemonmath.com | `v=spf1 include:spf.improvmx.com include:_spf.google.com ~all` | SPF |
| TXT | _dmarc | `v=DMARC1; p=none;` | |
| TXT | resend._domainkey | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQ…2oPcdaK79hjjzwIDAQAB` (218 kí tự) | DKIM của Resend |
| CNAME | send | send.forge.rmta.net | Resend, **DNS only** |
| CNAME | rsend | rsend-apne1.forge.rmta.net | Resend, **DNS only** |
| A ×4 | lemonmath.com | 185.199.108–111.153 | GitHub Pages; bước `ten-mien` thay bằng Worker |
| CNAME | www | lemonmathcom.github.io | bước `ten-mien` thay bằng Worker chuyển hướng |

Không có DNSSEC (không có bản ghi DS), nên đổi nameserver không cần tắt gì trước.

## Quyền của token Cloudflare (secret CLOUDFLARE_API_TOKEN)

Sửa token đang dùng (https://dash.cloudflare.com/profile/api-tokens → token của Lemonmath → Edit), giữ các quyền cũ
và thêm: **Account → Workers R2 Storage: Edit**; **Zone → Zone: Read, DNS: Edit, Workers Routes: Edit** (Zone
Resources: lemonmath.com). Sửa quyền không đổi chuỗi token, không phải dán lại secret.

## Chạy các bước

`gh workflow run cloudflare-setup.yml -f buoc=kiem-tra` (chỉ đọc: trạng thái vùng, nameserver, bản ghi, R2), rồi `r2`,
rồi `ten-mien` khi vùng đã **active** và https://lemonmath-site.chanh101.workers.dev/vi/ đã kiểm tra xong.
Xem kết quả: `gh run view --log` (tìm các dòng "==").

## Tài liệu tải về (R2)

- Bucket `lemonmath-tailieu` (vùng APAC), địa chỉ công khai `https://tai-lieu.lemonmath.com/<đường dẫn file>`.
- Chỉ đưa lên tài liệu do Lemonmath làm hoặc được phép đăng (quy định kho TaiLieuToan trong CLAUDE.md: kho là nguyên
  liệu, không đăng lại nguyên file).
- Tải lên từ máy chủ dự án: `tools/r2/TAI-LEN-R2.bat` (rclone, đồng bộ thư mục `Dropbox\Lemonmath.com\tai-lieu-r2`
  lên bucket; lần đầu hỏi Access Key ID/Secret của R2 token, tạo ở R2 → Manage API tokens → quyền Object Read & Write,
  chỉ bucket lemonmath-tailieu).
- Không đưa PDF, zip, video vào repo git.
- Chi phí: 10 GB đầu miễn phí, phần vượt 0,015 USD/GB/tháng, tải xuống không mất phí.

## Giai đoạn 3 (chưa cần, có cầu chì báo)

Cloudflare Workers nhận 20.000 file mỗi phiên bản ở gói miễn phí (100.000 ở Workers Paid, 5 USD/tháng), mỗi file tối
đa 25 MiB. build.js đếm file sau mỗi lần dựng: cảnh báo ở 75% `"hosting" → "maxFiles"`, dừng đăng ở 97,5% (bản đang
chạy giữ nguyên), báo lỗi nếu có file quá 25 MiB. Khi có cảnh báo: nâng Workers Paid rồi đặt `"maxFiles": 100000`,
hoặc sinh trang đề từ dữ liệu khi có người mở (Worker + D1/R2). Ngân hàng câu hỏi chuyển vào D1 khi build cảnh báo
một file vượt 1 MB.
