# Checklist bảo mật lemonmath.com

Cập nhật 17/11/2026. Phần **A** là việc đã làm sẵn trong mã (chỉ cần merge + đăng). Phần **B, C, D** là việc **bạn phải tự bấm trong các console** (Claude không vào tài khoản của bạn).

Bối cảnh: site là trang **tĩnh** trên GitHub Pages (repo `lemonmathcom/lemonmath`), không có máy chủ riêng. "Phần động" duy nhất là **Firebase Realtime Database** (`lemonmathlive`) cho công cụ cả lớp làm bài trực tiếp. Vì vậy phần lớn rủi ro tập trung ở Firebase và ở các tài khoản/hạ tầng, chứ không phải ở mã trang.

---

## A. Đã làm trong mã (có trong PR này)

1. **Content-Security-Policy (CSP)** gắn vào mọi trang (`tools/build.js`): khóa `default-src 'self'`, chỉ mở đúng origin Firebase và Cloudflare Analytics đang dùng; chặn `object-src`, siết `base-uri`, `connect-src`. Giảm thiệt hại nếu có lỗ hổng chèn mã (XSS). CSP tự cập nhật theo cấu hình trong `data/curriculum.json`.
2. **`Referrer-Policy: strict-origin-when-cross-origin`** (thẻ meta) — bớt rò rỉ đường dẫn khi người dùng bấm sang trang khác.
3. **Firebase rules siết chặt** — xem `giao-viec/LOP-TRUC-TIEP.md`. Thêm kiểm tra kiểu và trần độ dài cho mọi trường, chặn khoá lạ, chặn nhồi dữ liệu làm cạn quota.

> Đã kiểm tra `npm run build` và `node tools/check.js --all` đều chạy tốt; trang vào lớp vẫn gọi được Firebase (origin có trong `connect-src`). **Nhưng CSP nên được xem thử trên trình duyệt thật** sau khi đăng: mở lemonmath.com, mở Console (F12) xem có dòng đỏ "Refused to … Content Security Policy" không; thử vào một lớp trực tiếp thật để chắc công cụ live vẫn chạy.

---

## B. Làm ngay (nhanh, tác động lớn)

1. **Bật "Enforce HTTPS" trên GitHub Pages** (nếu chưa).
   - GitHub → repo `lemonmathcom/lemonmath` → **Settings → Pages** → tích **Enforce HTTPS**.
   - Khi bật, GitHub tự gửi HSTS, ép mọi truy cập dùng HTTPS. 1 lần bấm.

2. **Dán lại Firebase rules mới** (bản trong `giao-viec/LOP-TRUC-TIEP.md`).
   - Firebase Console → dự án `lemonmathlive` → **Realtime Database → Rules** → xoá hết, dán khối JSON mới, **Publish**.
   - Sau đó chạy lại bài test tay trong `LOP-TRUC-TIEP.md`: tạo lớp thử → vào lớp bằng cửa sổ khác → trả lời → hiện đúng/sai → kết thúc → đóng lớp → kiểm tra trong thẻ Data là lớp đã bị xoá. Nếu bước nào báo lỗi "permission denied", báo lại để chỉnh rule cho khớp.

3. **Bật bảo vệ cho repo trên GitHub** (Settings → **Code security**):
   - **Dependabot alerts** + **Dependabot security updates**: tự cảnh báo khi thư viện (katex, marked…) có lỗ hổng.
   - **Secret scanning** + **Push protection**: chặn lỡ tay commit khóa bí mật lên repo.
   - (Repo công khai thì các mục này miễn phí.)

4. **Bật xác thực 2 bước (2FA) cho mọi tài khoản liên quan**, đặc biệt:
   - **Tên miền** (Nhân Hòa) — đây là tài sản quan trọng nhất; bật 2FA + khóa chuyển nhượng tên miền (registrar lock) nếu có.
   - GitHub, Google (Firebase), Dropbox, Cloudflare.
   - Mất một trong các tài khoản này nguy hiểm hơn mọi lỗ hổng trên trang.

---

## C. Nên làm (bịt rủi ro còn lại của công cụ lớp trực tiếp)

5. **Firebase App Check** — đây là cách bịt hẳn điểm yếu "mã lớp 6 số là bí mật duy nhất".
   - App Check chỉ cho phép yêu cầu phát ra từ **chính trang lemonmath.com** (qua reCAPTCHA), chặn người dùng `curl`/bot dò mã lớp để đọc tên + đáp án học sinh hoặc sửa đề.
   - Cần hai phần: (a) bật App Check trong Firebase Console (đăng ký app web + reCAPTCHA v3), (b) **sửa mã** để đính kèm token App Check vào các lời gọi REST trong `assets/live.js` và `assets/teacher.js`.
   - Phần (b) cần tài khoản Pro làm và test kỹ (công cụ đang có học sinh dùng thật). Nhờ mình làm khi bạn sẵn sàng.

6. **Giới hạn Web API key của Firebase** (Google Cloud Console → **APIs & Services → Credentials** → key "Browser key (auto created by Firebase)" → **Application restrictions → HTTP referrers** → thêm `lemonmath.com/*` và `*.lemonmath.com/*`).
   - Lưu ý thành thật: Realtime Database qua REST **không** bị chặn bởi key này (nó chỉ cần URL database), nên bước này **không** thay thế được App Check. Nó bảo vệ các API Google/Firebase khác của dự án khỏi bị lạm dụng bằng key công khai. Vẫn nên làm, nhưng App Check mới là chốt chính.

7. **Dọn nhánh `live` định kỳ**: thỉnh thoảng vào thẻ Data xoá nhánh `live` để bỏ các lớp giáo viên quên Đóng (đã ghi trong `LOP-TRUC-TIEP.md`). Lớp tồn đọng vừa chiếm chỗ vừa là dữ liệu học sinh nằm lại không cần thiết.

---

## D. Tùy chọn (nâng cấp hạ tầng, giá trị cao nếu có thời gian)

8. **Đưa tên miền qua Cloudflare (gói miễn phí), bật proxy.**
   - Hiện site do GitHub Pages phục vụ trực tiếp; bạn mới chỉ dùng Cloudflare *Analytics*, chưa phải proxy.
   - Nếu trỏ DNS qua Cloudflare và bật đám mây cam (proxy), bạn được: **HTTP header bảo mật thật** (HSTS mạnh, `X-Frame-Options`/`frame-ancestors` chống nhúng khung, `X-Content-Type-Options: nosniff`) qua Transform Rules — những thứ GitHub Pages không cho đặt; chống DDoS; tường lửa WAF cơ bản.
   - Đây là nâng cấp lớn nhất về mặt hạ tầng cho một trang tĩnh.

9. **Ghim GitHub Actions theo SHA** (chống rủi ro chuỗi cung ứng): thay `actions/checkout@v6` bằng `actions/checkout@<sha>`… Tùy chọn; workflow hiện đã ở mức quyền tối thiểu (`contents: read`) nên rủi ro thấp.

10. **Thêm `/.well-known/security.txt`** để người phát hiện lỗ hổng biết báo cho ai. Cần một email liên hệ; nếu bạn cho mình địa chỉ, mình thêm vào build.

---

## Những điều ĐÃ ổn sẵn (không cần làm gì)

- Workflow CI dùng quyền tối thiểu (`contents: read`, `pages: write`), xác thực OIDC, **không** dùng secret nào — tốt.
- **Không** có khóa bí mật nào bị lộ trong repo (đã quét service-account, private key, token GitHub/AWS/Slack, API key).
- Toàn bộ JavaScript và KaTeX là **nội bộ** (cùng origin), không nạp từ CDN bên ngoài — ít bề mặt tấn công; chỉ còn script thống kê Cloudflare là bên thứ ba (của Cloudflare, đáng tin).
- URL Firebase và token Cloudflare Analytics nằm trong mã trình duyệt là **đúng thiết kế** (chúng vốn công khai); cái bảo vệ dữ liệu là **rules**, không phải giấu URL.
