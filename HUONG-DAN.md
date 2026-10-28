# Hướng dẫn đưa Lemonmath lên GitHub và gắn tên miền lemonmath.com

Phiên bản này **dựng sẵn từng bài thành một trang riêng** (địa chỉ thật như `lemonmath.com/lessons/law-of-sines/`, chữ và công thức đã có sẵn trong trang). Nhờ vậy Google đọc và lập chỉ mục từng bài dễ hơn bản trước.

Chi phí: **0đ/tháng** ngoài tiền gia hạn tên miền (GitHub Pages miễn phí cho repository công khai).

---

## 1. Cách hoạt động, nói đơn giản

1. Bạn viết bài bằng file văn bản `.md`.
2. Mỗi lần bạn lưu thay đổi (Commit) trên GitHub, GitHub tự chạy một "máy in" (file `tools/build.js`, chạy trong dịch vụ GitHub Actions). Máy in biến các file `.md` thành các trang HTML hoàn chỉnh, vẽ sẵn công thức.
3. GitHub đưa các trang vừa in lên website. Mất khoảng 1–3 phút.

Bạn **không cần cài phần mềm nào** trên máy. Việc chạy thử trên máy (mục 9) là tùy chọn.

### Trong bộ file có gì

```
lemonmath/
├── curriculum.json          DANH SÁCH chương và bài (bạn sửa file này khi thêm bài)
├── content/                 Các bài học viết bằng Markdown (.md)
│   ├── ch1/  ch2/
├── assets/                  Giao diện (style.css), script nhỏ (site.js); để hình ảnh vào đây
├── _templates/              Mẫu bài học và mẫu trang "About"
├── tools/                   "Máy in": build.js, render.js, serve.js (thường không cần sửa)
├── .github/workflows/
│   └── deploy.yml           Lệnh bảo GitHub tự dựng và đăng website
├── package.json, package-lock.json   Khai báo thư viện cần cho "máy in" (KaTeX, marked)
├── README.md, HUONG-DAN.md  Giới thiệu và file này
```

Hai thư mục `node_modules/` và `dist/` **không có** trong bộ file và **đừng tải lên** GitHub: chúng tự sinh ra khi dựng.

---

## 2. Tạo tài khoản và repository

1. Vào https://github.com, chọn **Sign up**, tạo tài khoản và xác nhận email.
   Tên người dùng (username) sẽ hiện trong địa chỉ tạm `username.github.io`, hãy chọn tên gọn, nghiêm túc.
2. Bấm dấu **+** ở góc trên bên phải, chọn **New repository**:
   - **Repository name:** `lemonmath`
   - **Public** (bắt buộc với gói miễn phí nếu muốn dùng GitHub Pages)
   - **Không** tích "Add a README file".
   - Bấm **Create repository**.

---

## 3. Bật GitHub Pages bằng GitHub Actions (làm TRƯỚC khi tải file)

1. Trong repository, vào **Settings** → ở thanh bên chọn **Pages** (nhóm "Code, planning, and automation").
2. Mục **Build and deployment** → **Source** → chọn **GitHub Actions**.
3. Nếu GitHub gợi ý các mẫu workflow, **bỏ qua** (bộ file đã có sẵn workflow riêng).

Làm bước này trước để lần dựng đầu tiên chạy thành công. Nếu lỡ tải file lên trước, lần chạy đầu sẽ báo lỗi (dấu ✗ đỏ): chỉ cần chọn Source như trên rồi vào tab **Actions**, bấm vào lần chạy bị lỗi và chọn **Re-run all jobs**.

---

## 4. Tải file lên

1. Giải nén file zip trên máy.
2. Ở trang repository (đang trống), bấm liên kết **uploading an existing file**.
3. Mở thư mục `lemonmath` đã giải nén, chọn **tất cả** file và thư mục **bên trong** rồi kéo thả vào trang GitHub.
   - Kéo nội dung bên trong, **không** kéo thư mục `lemonmath` bọc ngoài. `curriculum.json` và `package.json` phải nằm ở ngoài cùng của repository.
   - Hãy dùng Chrome hoặc Edge. Trên macOS, thư mục bắt đầu bằng dấu chấm (`.github`) bị ẩn: nhấn **Cmd + Shift + .** trong Finder để hiện nó.
4. Đợi tải xong, kéo xuống ô **Commit changes**, bấm **Commit changes**.
5. **Kiểm tra bắt buộc:** ở trang repository phải thấy thư mục `.github`, bên trong có `workflows/deploy.yml`.
   Tôi chưa thể thử riêng trình tải lên của GitHub với thư mục bắt đầu bằng dấu chấm, nên nếu `.github` không lên, hãy tạo tay: **Add file → Create new file**, ở ô tên gõ `.github/workflows/deploy.yml` (gõ dấu `/` để tạo thư mục), dán nội dung ở **Phụ lục** cuối file này, rồi **Commit changes**.

---

## 5. Theo dõi lần dựng đầu tiên

1. Vào tab **Actions**. Lần chạy tên "Build and deploy website" sẽ có biểu tượng vàng (đang chạy), rồi **✓ xanh** (thành công) sau 1–3 phút.
2. Vào **Settings → Pages**: GitHub hiện địa chỉ website, dạng `https://username.github.io/lemonmath/`. Mở thử.
3. Nếu có **✗ đỏ**: bấm vào lần chạy đó → bấm bước **Build the website** để đọc lỗi. Lỗi do bài viết được báo bằng tiếng Việt, kèm tên file (xem mục 10).

Trên địa chỉ tạm, website chạy bình thường (mọi liên kết trong trang đều tương đối). Riêng thẻ canonical và sitemap đã trỏ sẵn về `https://lemonmath.com`, nên chỉ có tác dụng đầy đủ sau khi bạn gắn tên miền.

---

## 6. Gắn tên miền lemonmath.com

Thứ tự quan trọng. Tài liệu GitHub khuyên **khai báo tên miền với GitHub trước khi trỏ DNS**, để người khác không thể chiếm dùng tên miền của bạn.

### 6.1. Xác minh tên miền (khuyến nghị)
GitHub khuyên xác minh tên miền để tránh bị chiếm quyền. Tìm hướng dẫn "Verifying your custom domain for GitHub Pages" trên docs.github.com. Về cơ bản bạn thêm một bản ghi **TXT** do GitHub cung cấp vào DNS của tên miền (cách thêm giống mục 6.3).

### 6.2. Khai báo tên miền trong repository
**Settings → Pages → Custom domain:** nhập `lemonmath.com`, bấm **Save**.

Lưu ý: vì website được đăng bằng GitHub Actions, **file `CNAME` trong repository không có tác dụng**. Tên miền phải khai ở ô Custom domain này. GitHub có thể báo "DNS check unsuccessful" cho tới khi DNS cập nhật xong, đó là bình thường.

### 6.3. Thêm bản ghi DNS tại Nhân Hòa

| Loại | Tên (Host) | Giá trị |
|------|------------|---------|
| A | `@` (hoặc để trống) | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA (khuyến nghị) | `@` | `2606:50c0:8000::153` |
| AAAA (khuyến nghị) | `@` | `2606:50c0:8001::153` |
| AAAA (khuyến nghị) | `@` | `2606:50c0:8002::153` |
| AAAA (khuyến nghị) | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `username.github.io` (thay `username` bằng tên GitHub của bạn, **không** ghi tên repository) |

(Địa chỉ lấy từ tài liệu chính thức của GitHub, đối chiếu lại trên docs.github.com khi làm vì có thể thay đổi.)

**Vào trang quản lý DNS của Nhân Hòa**, tùy giao diện tài khoản của bạn:

- **Giao diện mới:** đăng nhập https://id.nhanhoa.com/login/do → **Quản lý tên miền** → **Dịch vụ tên miền quốc tế** → ô **Quản lý DNS**. Bản ghi được thêm ở https://zonedns.vn/: bấm vào tên miền, điền **Tên record**, **Loại record**, **Giá trị record**, **TTL** (để mặc định).
- **Giao diện cũ:** đăng nhập domain.nhanhoa.com (Hà Nội) hoặc hcmdomain.nhanhoa.com (TP.HCM) → **ManageOrders → List/Search Orders** → bấm tên miền → **DNS Management FREE → Manage DNS** → **Add A Record** (để trống **Host Name** cho tên miền gốc).

Bài hướng dẫn của Nhân Hòa: https://nhanhoa.com/tin-tuc/huong-dan-quan-ly-dns-cho-ten-mien.html và https://nhanhoa.com/trang/huong-dan-tro-ip-cho-ten-mien-quoc-te.html

**Lưu ý quan trọng:**
- Hai bài hướng dẫn trên của Nhân Hòa chỉ mô tả bản ghi **A** và **MX**. Tôi chưa xác nhận được giao diện của họ có cho thêm **AAAA** và **CNAME** hay không. Hãy xem danh sách "Loại record" trong trang của bạn. Nếu không có CNAME, thử tạo 4 bản ghi **A** cho tên `www` với cùng 4 địa chỉ IP ở trên, hoặc nhắn bộ phận hỗ trợ Nhân Hòa và gửi họ bảng trên.
- **Xóa bản ghi A/AAAA/CNAME cũ** của `@` và `www` đang trỏ nơi khác, kẻo xung đột.
- **Không xóa bản ghi MX hoặc TXT** nếu bạn đang dùng email theo tên miền.
- **Không dùng bản ghi wildcard** (`*`): GitHub cảnh báo đây là rủi ro bị chiếm quyền tên miền phụ.
- Bản ghi chỉ có tác dụng nếu tên miền đang dùng name server của Nhân Hòa. Nếu bạn đã đổi name server sang nơi khác, hãy thêm bản ghi ở nơi đó.

### 6.4. Chờ và kiểm tra
- GitHub nói DNS có thể mất **tới 24 giờ**, thường nhanh hơn.
- Kiểm tra: gõ `nslookup lemonmath.com` trong Terminal/PowerShell, kết quả phải có địa chỉ bắt đầu bằng `185.199.`.

### 6.5. Bật HTTPS
Khi GitHub báo DNS hợp lệ: **Settings → Pages**, tích **Enforce HTTPS** (có thể mất tới 24 giờ mới hiện ra). Sau đó mở https://lemonmath.com để kiểm tra.

---

## 7. Cho Google biết website của bạn

Sau khi lemonmath.com chạy ổn:

1. Đăng ký **Google Search Console** (miễn phí, search.google.com/search-console), thêm tên miền `lemonmath.com`. Google sẽ yêu cầu xác minh quyền sở hữu, thường bằng một bản ghi **TXT** thêm vào DNS ở Nhân Hòa (cách thêm giống mục 6.3).
2. Vào mục **Sitemaps**, gửi địa chỉ `https://lemonmath.com/sitemap.xml` (website tự tạo file này mỗi lần dựng).
3. Dùng công cụ **URL Inspection** để kiểm tra một bài, ví dụ `https://lemonmath.com/lessons/law-of-sines/`, và xem Google có đọc được nội dung và công thức không.

Không ai bảo đảm được thứ hạng, và tên miền mới thường cần nhiều tháng để có chỗ đứng. Những bước trên chỉ loại bỏ rào cản kỹ thuật. Nội dung tốt, đầy đủ, viết theo đúng điều học sinh hay tìm kiếm vẫn là yếu tố chính.

---

## 8. Hằng ngày: sửa bài, thêm bài

### Sửa một bài
Repository → thư mục `content` → mở file `.md` → bấm biểu tượng **bút chì** → sửa → **Commit changes**. Theo dõi ở tab **Actions**, 1–3 phút sau website cập nhật (nhấn Ctrl+F5 để tải lại sạch).

### Thêm một bài mới
1. **Add file → Create new file.** Ô tên gõ ví dụ `content/ch1/03-vertex-form.md`. Dán nội dung từ `_templates/lesson-template.md`, viết bài, **Commit**.
2. Mở `curriculum.json`, bấm bút chì, thêm một khối vào danh sách `lessons` của chương:

```json
{
  "id": "vertex-form",
  "title": "Vertex form of a quadratic function",
  "description": "One sentence (about 100-155 characters) that says what the lesson teaches. Google may show it under the title.",
  "file": "content/ch1/03-vertex-form.md",
  "minutes": 12
}
```

   Nhớ **dấu phẩy** giữa các khối: thiếu hoặc thừa dấu phẩy là lỗi thường gặp nhất.
3. **Commit changes.**

Giải thích các trường:
- `id`: là phần địa chỉ của bài, ví dụ `vertex-form` → `lemonmath.com/lessons/vertex-form/`. Chỉ dùng chữ thường không dấu, số và dấu gạch ngang.
- `description`: mô tả riêng cho từng bài, nên dài khoảng 100–155 ký tự. Nếu bỏ trống, website tạm lấy đoạn đầu của bài và cảnh báo.
- `title`: tiêu đề bài, hiện ở đầu bài và trên tab trình duyệt.

### **Đừng đổi `id` sau khi đã đăng**
GitHub Pages **không có chuyển hướng 301 chuẩn**, nên nếu bạn đổi `id` thì địa chỉ cũ thành trang lỗi 404 và bài mất vị trí đã có trên Google. Hãy đặt `id` thật kỹ ngay từ đầu (ngắn, bằng chữ, mô tả đúng nội dung).

### Thêm một chương mới
Thêm một khối vào danh sách `chapters` trong `curriculum.json`, cùng dạng với các chương đang có (`id`, `title`, `summary`, `lessons`). `summary` nên ≤ 160 ký tự.

### Liên kết giữa các bài
Viết `[law of cosines](lesson:law-of-cosines)` (dùng `id` của bài). Liên kết tới chương: `[Quadratic Functions](chapter:quadratics)`. Nối các bài liên quan với nhau như vậy giúp học sinh và Google đi từ bài này sang bài khác. Nếu viết sai `id`, lần dựng sẽ báo lỗi để bạn sửa.

### Hình ảnh
Tải file hình vào thư mục `assets/` (Add file → Upload files), rồi trong bài viết `![mô tả hình bằng tiếng Anh](assets/ten-hinh.png)`. Luôn viết phần mô tả (alt). Nên nén hình nhỏ (dưới khoảng 200 KB) trước khi tải lên để trang tải nhanh. Đường dẫn luôn bắt đầu bằng `assets/`, website tự đổi cho đúng từng trang.

### Trang giới thiệu tác giả (nên làm)
Làm theo hướng dẫn ở đầu file `_templates/about-template.md`. Trang này giúp học sinh và Google biết ai đứng sau Lemonmath, tăng độ tin cậy.

### Cú pháp viết bài

| Muốn viết | Cách gõ |
|-----------|---------|
| Công thức trong dòng | `$x^2 + 1$` (không có khoảng trắng sát dấu `$`) |
| Công thức riêng dòng | `$$ \frac{a}{b} $$` |
| Dấu đô la (tiền) | `\$5` |
| Tiêu đề mục | `## Tên mục` (không dùng `#`: tiêu đề bài lấy từ `curriculum.json`) |
| Danh sách | `- gạch đầu dòng` hoặc `1. đánh số` |
| In đậm, nghiêng | `**đậm**`, `*nghiêng*` |
| Bảng | cú pháp bảng Markdown (xem mẫu trong bài 1) |

**Các hộp đặc biệt** (mở bằng `:::loại Tiêu đề`, đóng bằng `:::` ở dòng riêng):

| Loại | Công dụng |
|------|-----------|
| `definition` | Định nghĩa (xanh dương) |
| `theorem` | Định lý, công thức (tím) |
| `example` | Ví dụ minh họa (xanh lá) |
| `note` | Ghi chú, tóm tắt (vàng) |
| `tip` | Mẹo học (xanh ngọc) |
| `warning` | Lỗi hay gặp (đỏ) |
| `practice` | Khung luyện tập (cam) |
| `solution` | Lời giải **gập lại**, học sinh bấm để mở |

Các hộp không lồng vào nhau được.

---

## 9. Xem thử trên máy (tùy chọn)

Cần cài **Node.js phiên bản 20 trở lên** (tải ở nodejs.org, bản LTS). Mở Terminal (Windows: PowerShell) trong thư mục `lemonmath` rồi chạy:

```
npm ci
npm start
```

Mở http://localhost:8000 trong trình duyệt. Sau khi sửa bài, nhấn Ctrl+C rồi chạy lại `npm start` (hoặc chạy `npm run build` để chỉ kiểm tra lỗi). Nhấp đôi vào file HTML trong thư mục `dist/` không phải cách xem đúng.

Nếu không muốn cài gì, bỏ qua mục này: sửa bài trực tiếp trên GitHub và xem kết quả trên website.

---

## 10. Lỗi thường gặp

Khi dựng bị lỗi, tab **Actions** hiện ✗ đỏ. Bấm vào, mở bước **Build the website**, đọc dòng bắt đầu bằng `LỖI:`. **Website cũ vẫn chạy bình thường** cho tới khi bạn sửa xong và dựng thành công.

| Thông báo hoặc hiện tượng | Nguyên nhân và cách xử lý |
|---------------------------|---------------------------|
| `không đọc được curriculum.json` | File sai cú pháp: thiếu/thừa dấu phẩy, thiếu ngoặc. Dòng báo lỗi nói rõ vị trí (line, column). |
| `không tìm thấy file "content/…"` | Đường dẫn `file` không khớp tên file thật (phân biệt chữ hoa/thường). |
| `"id" phải gồm chữ thường không dấu…` | `id` có chữ hoa, dấu tiếng Việt hoặc khoảng trắng. |
| `trùng id bài` | Hai bài có cùng `id`. |
| `công thức LaTeX bị lỗi: …` | Có công thức sai cú pháp (thiếu `}`, lệnh sai…). Thông báo nêu đoạn công thức và tên file. |
| `số dòng mở hộp … khác số dòng đóng` | Có hộp `:::loại` mở mà quên đóng bằng `:::` (hoặc ngược lại). |
| `liên kết "lesson:…" trỏ tới bài không tồn tại` | Sai `id` trong liên kết `[chữ](lesson:id)`. |
| `"url" … phải có dạng "https://lemonmath.com"` | Sửa mục `url` trong `curriculum.json`, không có dấu `/` ở cuối. |
| CẢNH BÁO (không làm hỏng việc dựng) | Ví dụ: thiếu `description`, mô tả quá dài, hình thiếu mô tả. Nên sửa để SEO tốt hơn. |
| Công thức hiện nguyên `$...$` | Có khoảng trắng sát dấu `$` (`$ x $` sai, `$x$` đúng), hoặc dấu `$` đứng ngay trước chữ số (bị hiểu là tiền: viết `\$`). |
| ✗ đỏ ngay lần đầu, ở bước Setup Pages hoặc Deploy | Chưa chọn Source là **GitHub Actions** (mục 3). Chọn rồi **Re-run all jobs**. |
| Tab Actions không có gì | Thư mục `.github/workflows/deploy.yml` chưa lên repository (mục 4, bước 5). |
| Bấm vào địa chỉ tạm thấy 404 | Chờ vài phút sau lần dựng đầu thành công. Kiểm tra Settings → Pages có hiện địa chỉ website không. |
| "DNS check unsuccessful" trên GitHub | Chờ thêm; kiểm tra lại bản ghi A/CNAME, xóa bản ghi cũ xung đột. |
| Trang mở bằng địa chỉ tạm bị lệch giao diện | Nhấn Ctrl+F5 để xóa bộ nhớ đệm của trình duyệt. |

---

## 11. Giới hạn và lưu ý

- **Điều khoản GitHub Pages:** theo trang giới hạn của GitHub, Pages **không dành cho và không được phép dùng như dịch vụ hosting miễn phí để chạy kinh doanh trực tuyến, trang thương mại điện tử, hoặc trang chủ yếu phục vụ giao dịch thương mại hay phần mềm dịch vụ (SaaS)**, và không nên dùng để xử lý dữ liệu nhạy cảm như mật khẩu hay thẻ tín dụng. Với nội dung học tập miễn phí thì ổn. Nếu sau này thu học phí hoặc bán thuê bao, hãy đọc lại điều khoản và cân nhắc chuyển sang dịch vụ khác (website là file tĩnh nên chuyển khá dễ).
- **Giới hạn kỹ thuật:** website tối đa 1 GB, băng thông 100 GB/tháng (giới hạn mềm), 10 lần dựng/giờ (giới hạn mềm, không áp dụng khi dùng workflow tùy chỉnh như ở đây).
- **Không có chuyển hướng 301 và không chỉnh được HTTP header** trên GitHub Pages (theo các thảo luận của GitHub, không phải tài liệu chính thức). Vì vậy hãy giữ địa chỉ bài ổn định.
- **Repository công khai:** mọi người xem được nội dung và mã nguồn. Hãy quyết định giấy phép cho nội dung (ví dụ thêm file `LICENSE`). Nếu không ghi gì, mặc định tác giả giữ toàn bộ quyền.
- **Không bao giờ đưa API key hoặc mật khẩu vào repository.**
- **Tiến độ học** ("Mark as complete") lưu trong trình duyệt của từng học sinh, trên từng thiết bị; chưa có tài khoản đăng nhập.
- **Phần AI (gia sư, chấm bài):** làm sau, qua một đoạn code nhỏ chạy trên dịch vụ như Cloudflare Workers để giữ API key bí mật.
- **Tốc độ:** tôi chưa đo trên website thật. Sau khi lên mạng, hãy thử PageSpeed Insights (pagespeed.web.dev) với vài bài.
- **Tải font và công thức:** KaTeX (font và CSS) được lưu ngay trong website, không tải từ bên thứ ba, nên không phụ thuộc CDN bên ngoài.
- **Nâng cấp thư viện:** `package.json` ghim phiên bản KaTeX 0.19.0 và marked 18.1.1 để kết quả dựng ổn định. Đừng tự đổi nếu không cần.

---

## Phụ lục: nội dung file `.github/workflows/deploy.yml`

Chỉ cần khi thư mục `.github` không lên repository lúc tải file (mục 4, bước 5). Copy nguyên văn, giữ nguyên thụt đầu dòng:

```yaml
name: Build and deploy website

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v6
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v7
        with:
          node-version: '22'
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build the website
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload the website
        uses: actions/upload-pages-artifact@v4
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

Nguồn tham khảo: tài liệu "Managing a custom domain for your GitHub Pages site", "Using custom workflows with GitHub Pages", "Configuring a publishing source" và "GitHub Pages limits" trên docs.github.com; hướng dẫn quản lý DNS trên nhanhoa.com.
