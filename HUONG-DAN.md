# Hướng dẫn cập nhật Lemonmath bản song ngữ (v3)

Bản này thay đổi giao diện, thêm tiếng Việt tại `lemonmath.com/vi/`, thêm lộ trình toán lớp 1–12 và nội dung Toán lớp 10. Bạn **không cần làm lại** cài đặt GitHub Pages, tên miền hay DNS: kho `lemonmathcom/lemonmath` đang chạy, bạn chỉ thay file bên trong.

Bạn sẽ nhận hai gói nén:

| Gói | Chứa gì | Tải lên khi nào |
|---|---|---|
| `1-khung-website.zip` | giao diện và công cụ dựng website | Bước 1 (một lần) |
| `2-bai-hoc-co-san.zip` | các bài lớp 10 đã viết xong + trang Giới thiệu | Bước 2 |

Thêm thư mục `goi-viet-bai` (17 file lời nhắc) để các tài khoản Claude khác cùng viết nốt các bài còn thiếu (Phần C).

---

## Phần A. Cập nhật website lên bản mới

### Bước 1. Xoá những file của bản cũ

Vào https://github.com/lemonmathcom/lemonmath

1. Bấm vào thư mục **content** → bấm vào thư mục **ch1** → bấm nút **⋯** (ba chấm) góc trên bên phải → **Delete directory** → ô **Commit changes** → **Commit changes** (nút xanh). Làm tương tự với thư mục **ch2**.
2. Quay về trang đầu của kho, bấm vào file **curriculum.json** → biểu tượng **thùng rác** (Delete file) → **Commit changes**.

### Bước 2. Tải bộ khung mới

1. Giải nén `1-khung-website.zip` trên máy. Bạn sẽ thấy các thư mục `tools`, `assets`, `data`, `_templates` và các file `package.json`, `package-lock.json`, `README.md`, `HUONG-DAN.md`.
2. Trên trang đầu của kho bấm **Add file → Upload files**.
3. Dùng chuột **kéo cả các thư mục và file đã giải nén** vào khung (kéo thư mục, không bấm vào trong từng thư mục) để GitHub giữ nguyên cấu trúc thư mục.
4. Cuộn xuống, bấm **Commit changes**. File trùng tên sẽ được thay bằng bản mới.

> Không cần tải lại thư mục `.github` (nằm trong kho từ lần trước) hay `.gitignore`.

### Bước 3. Tải các bài học có sẵn

1. Giải nén `2-bai-hoc-co-san.zip`. Bạn sẽ thấy thư mục `content`.
2. **Add file → Upload files**, kéo **thư mục `content`** vào, **Commit changes**.

### Bước 4. Xem kết quả

1. Bấm tab **Actions**. Một dòng mới sẽ chạy: vòng tròn vàng là đang dựng, **dấu ✓ xanh** là xong (khoảng 1–2 phút). Dấu ✗ đỏ là có lỗi: xem Phần D.
2. Mở https://lemonmath.com (bản tiếng Anh) và https://lemonmath.com/vi/ (bản tiếng Việt). Nếu thấy trang cũ, nhấn **Ctrl + F5** (Mac: **Cmd + Shift + R**).

Các bài chưa có file sẽ tự hiện "sắp ra mắt", website vẫn chạy bình thường.

---

## Phần B. Cấu trúc nội dung (để biết file nào để đâu)

Mỗi bài có **hai file cùng tên**, một tiếng Anh một tiếng Việt:

```
content/en/g10/functions.md        ← bản tiếng Anh, hiện ở lemonmath.com/grade-10/...
content/vi/g10/functions.md        ← bản tiếng Việt, hiện ở lemonmath.com/vi/lop-10/...
```

- Bài chỉ hiện trên website khi **cả hai file** đều có.
- Tên file là mã bài (`id`) trong `data/curriculum.json`. **Không đổi tên file**, vì địa chỉ trang dựa vào đó.
- Muốn sửa nội dung bài: mở file trên GitHub → biểu tượng **bút chì** → sửa → **Commit changes**.
- Mẫu bài và quy cách viết: `_templates/lesson-template.md` và `_templates/WRITING-SPEC.md`.

---

## Phần C. Viết nốt các bài còn thiếu bằng nhiều tài khoản

Hiện còn **17 việc** (14 bài viết mới Anh + Việt, và 3 bài chỉ thiếu bản Việt). Danh sách nằm trong thư mục `goi-viet-bai`, mỗi việc là một file `.txt`, tên bắt đầu bằng số thứ tự `01` … `17`. Mỗi file đủ nhỏ cho một lần hỏi.

### Cách giao việc cho từng tài khoản

1. Mở file `.txt` (Notepad cũng được), **chọn tất cả (Ctrl + A) → sao chép (Ctrl + C)**.
2. Mở một cuộc trò chuyện **mới** của Claude, **dán (Ctrl + V)** vào ô chat rồi gửi. Mỗi tài khoản nhận 1–2 file là vừa.
3. Claude trả về hai khối mã (hoặc hai file tải về) có tên file ở đầu, ví dụ `content/en/g10/dot-product.md`. Chép **toàn bộ nội dung trong khối mã** vào một file mới trên máy và **lưu với đúng tên đó**:
   - Windows: Notepad → Save As → Encoding chọn **UTF-8** → đặt tên (ví dụ `dot-product.md`), kiểu file chọn **All files**.
   - Nếu Claude cho tải file, dùng luôn file đó.
4. Gom file mọi người gửi vào hai thư mục trên máy bạn, giữ đúng tên: `content/en/g10/` và `content/vi/g10/`.

Các file lời nhắc `01`–`03` (chỉ bản Việt) đã kèm sẵn bản tiếng Anh, nên các tài khoản chỉ cần dịch và biên soạn bản Việt.

### Cách lắp ghép lên GitHub

1. Vào kho trên GitHub, bấm **content → en → g10**. Bấm **Add file → Upload files**, kéo vào **tất cả file `.md` tiếng Anh** mới → **Commit changes**.
2. Quay lại, bấm **content → vi → g10**, làm tương tự với các file tiếng Việt.
3. Tab **Actions** chạy lại. Mỗi bài có đủ cả hai file sẽ hiện trên website.

> Tải file vào **đúng thư mục** quan trọng: hãy bấm vào thư mục `g10` rồi mới Add file → Upload files, GitHub sẽ đặt file vào thư mục đó.

### Kiểm tra trước khi tải lên (khuyên làm)

Nội dung do AI viết cần được giáo viên đọc lại. Bạn là giáo viên toán, hãy xem mỗi bài trên website sau khi dựng xong, nhất là **đáp số các bài tập** và **hình vẽ**. Nếu muốn nhờ kiểm tra tự động trước khi tải lên, gửi các file cho tôi trong cuộc trò chuyện này: tôi kiểm tra công thức, hình vẽ, số bài tập và sự khớp nhau giữa hai ngôn ngữ.

---

## Phần D. Khi Actions báo lỗi đỏ ✗

1. Tab **Actions** → bấm vào dòng có ✗ đỏ → bấm **build** → bấm bước **Build the website**.
2. Các dòng bắt đầu bằng **LỖI:** nói rõ file nào, sai gì. Lỗi thường gặp:
   - `công thức LaTeX bị lỗi` → có công thức sai (thiếu ngoặc `}`, lệnh không có trong KaTeX). Sửa file đó.
   - `số dòng mở hộp ":::" khác số dòng đóng` → có hộp `:::` quên đóng.
   - `:::graph … cần có dòng "alt:"` → hình thiếu dòng mô tả.
   - `thiếu phần đầu "---"` → file thiếu phần `title`, `description`, `minutes` ở đầu.
3. Sửa file trên GitHub (bút chì) rồi **Commit changes**; website tự dựng lại.

Dòng **CẢNH BÁO** không làm hỏng website, chỉ là gợi ý (ví dụ mô tả dài hơn 160 ký tự).

---

## Phần E. Việc nên làm sau khi website chạy

1. **Google Search Console** (https://search.google.com/search-console): thêm tài sản `lemonmath.com`, xác minh (cách "Bản ghi DNS" ở Nhân Hòa), rồi vào **Sơ đồ trang web** gửi `sitemap.xml`. Sơ đồ đã có đủ địa chỉ tiếng Anh và tiếng Việt, kèm liên kết giữa hai bản để Google hiển thị đúng ngôn ngữ cho từng người.
2. Các trang lớp **chưa có bài** (lớp 1–9, 11, 12) được đánh dấu "noindex" để Google không coi là trang nghèo nội dung; khi lớp đó có bài, chúng ta sẽ bật lại.
3. Thêm lớp mới sau này: ghi bài vào `content/en/gN/` và `content/vi/gN/`, thêm danh sách bài vào `data/curriculum.json` và đổi `"status": "roadmap"` thành `"full"` cho lớp đó. Khi cần, hãy nhờ tôi làm.
4. Dịch vụ GitHub Pages dành cho nội dung miễn phí phục vụ giáo dục là phù hợp. Nếu sau này bạn thu phí, hãy đọc lại điều khoản của GitHub Pages hoặc chuyển sang dịch vụ khác (thay đổi này không khó vì website là các file tĩnh).

## Lưu ý về nội dung và bản quyền

- Tên chương, tên bài theo mục lục sách *Kết nối tri thức* và chương trình GDPT 2018; **toàn bộ lời giảng, ví dụ, bài tập là nội dung mới viết**, không sao chép từ sách.
- Lộ trình lớp 1–9, 11, 12 chỉ tới cấp chương. Nên đối chiếu tên chương với sách giáo khoa bản mới nhất; chỗ nào lệch, sửa trong `data/curriculum.json` (các trường `vi` và `en`).
- Bạn là giáo viên toán lớp 10: hãy là người duyệt cuối cho mọi bài trước khi giới thiệu rộng rãi.
