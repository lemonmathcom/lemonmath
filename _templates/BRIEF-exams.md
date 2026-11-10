# Brief: mục Ôn thi (exam prep) – SAT, ACT, AP, IB, IGCSE và kĩ năng ôn thi

Project root: /home/claude/lemonmath. Lộ trình, id và tên bài: mảng `exams` trong `data/curriculum.json`.
File bài: `content/vi/exams/<exam-id>/<lesson-id>.md` và `content/en/exams/<exam-id>/<lesson-id>.md` (cùng id, cùng cấu trúc, cùng số liệu).
Trang web: `/exams/<exam-id>/…` (EN) và `/vi/on-thi/<exam-id>/…` (VI). Trang tổng: `content/<lang>/exams.md`.

Đọc trước: `_templates/WRITING-SPEC.md` (cú pháp các khung, mục 2b và 2d), `_templates/GLOSSARY.md`, bài mẫu ôn theo chủ đề `content/*/g12/review-integrals.md`, bài mẫu hướng dẫn `content/*/exams/study-skills/evidence-based-revision.md`.

## Ba loại bài

### 1. Bài hướng dẫn (`type: guide`)
Dùng cho bài "<kì thi> gồm những gì và cách ôn" và các bài kĩ năng. Front matter có thêm dòng `type: guide`.
Bắt buộc: `:::goals`, ít nhất 4 mục `##`, ít nhất 700 từ. Không cần ví dụ, bài tập, kiểm tra mini.
Bài tổng quan kì thi gồm: kì thi dành cho ai và dùng để làm gì → cấu trúc đề (bảng) → cách tính điểm → nội dung thi theo mảng (bảng, kèm link `[..](lesson:<id>)` tới bài chủ đề ĐÃ CÓ trên web; bài chưa có thì chỉ ghi tên, không link) → học sinh học chương trình Việt Nam đã biết gì, còn thiếu gì → kế hoạch ôn 8–12 tuần → 3 câu hỏi mẫu đủ kiểu, có lời giải (dùng `:::example`) → tài nguyên chính thức miễn phí (chỉ nêu tên: Bluebook, Khan Academy Official SAT Prep, AP Classroom, AP Central; KHÔNG bịa đường link).

### 2. Bài chủ đề (không có `type`)
Thứ tự:
1. `:::goals`.
2. Mở bài ngắn: chủ đề này xuất hiện ở phần nào của đề, thường chiếm bao nhiêu câu (chỉ dùng số trong phần "Dữ kiện về kì thi" của file giao việc).
3. 3–4 mục `##` lí thuyết trọng tâm: tóm tắt trong `:::theorem`/`:::note` hoặc bảng; mỗi mục 1–2 `:::example` viết ĐÚNG KIỂU câu hỏi của kì thi (tổng cộng ít nhất 4 ví dụ, lời giải gọn kiểu Pólya: một câu ý tưởng, các dòng tính, kết luận).
4. `:::warning` các bẫy thường gặp; `:::tip` mẹo làm nhanh (ví dụ cách kiểm tra bằng Desmos với SAT, cách bấm GDC với IB).
5. `:::terms` (thuật ngữ Việt | Anh).
6. `## Bài tập tương tự` / `## Similar exercises`: 5 `:::exercise`, mỗi bài bám sát một ví dụ, đổi số liệu.
7. `## Bài tập vận dụng` / `## Application exercises`: 4–5 `:::exercise` tình huống mới, ít nhất 2 bài thực tế, bài cuối ghi "Thử thách"/"Challenge".
8. `:::quiz` kiểm tra mini: 4 `::mc`, 1 `::tf`, 2 `::sa` (đáp số tối đa 4 kí tự).
Mỗi `:::exercise` phải có `::hint` (Kiến thức + Gợi ý các bước) và `::solution`. Ít nhất 1 hình (`:::graph` hoặc `:::diagram`) khi chủ đề có đồ thị hay hình học.

### 3. Đề luyện
- Đề trắc nghiệm (SAT, ACT, phần trắc nghiệm AP): `type: test`; toàn bộ câu nằm trong một hộp `:::quiz test` (chỉ `::mc` 4 phương án và `::sa`; đáp số `::sa` là số, tối đa 6 kí tự; mỗi câu có `::key` và lời giải). Web chấm mỗi câu 1 điểm. Câu tự luận AP viết sau hộp quiz, mỗi câu một `:::exercise`, lời giải ghi rõ từng điểm thành phần.
- Đề tự luận (IB, IGCSE): `type: exam`; mỗi câu một `:::exercise` có `::hint` và `::solution`, ít nhất 10 câu, ghi [số điểm] sau từng ý.
- Mở đầu đề: bảng thời gian, dụng cụ được dùng, cách tự chấm. Cuối đề: bảng "câu nào thuộc chủ đề nào" có link về bài chủ đề.

## Dữ kiện về kì thi
Mỗi file giao việc `giao-viec/on-thi/Oxx-*.txt` có mục "DỮ KIỆN VỀ KÌ THI", đã đối chiếu nguồn chính thức tháng 11/2026 (AP Central, College Board, act.org, ibo.org, cambridgeinternational.org). Người viết chỉ dùng các dữ kiện đó. Lưu ý các thay đổi dễ nhầm với tài liệu cũ:
- AP Calculus và AP Precalculus từ 5/2027 có 42 câu trắc nghiệm (trước là 45 và 40).
- AP Statistics từ 5/2027: khung mới 5 unit, 42 câu trắc nghiệm 4 phương án, 4 câu tự luận 10 điểm, thi hoàn toàn trên máy.
- ACT từ 2025: Toán 45 câu, 50 phút, 4 phương án.
- IB HL Paper 3: 1 giờ 15 phút từ các kì thi 2025.
- IGCSE 0580 từ 2025: có bài không máy tính ở cả hai cấp.

Thi trong nước (đã nằm trong lớp 9 và lớp 12, dùng `_templates/BRIEF-g9.md` và `BRIEF-g12-*.md`):
- Thi vào 10 Hà Nội 2025 và 2026: Toán tự luận 120 phút, 5 bài lớn (thống kê và xác suất; biểu thức đại số; giải bài toán bằng cách lập phương trình và định lí Viète; hình học; bài vận dụng, tối ưu thực tế).
- Thi vào 10 TP.HCM 2026: Toán tự luận 120 phút, đề tham khảo 7 bài, kiến thức chủ yếu lớp 8–9, nhiều bài thực tế.
- Tốt nghiệp THPT từ 2025: 90 phút, 12 câu nhiều lựa chọn + 4 câu đúng/sai + 6 câu trả lời ngắn.

## Quy tắc chất lượng
- Câu hỏi tự soạn 100%. Không chép đề thật, sách luyện thi, hay ngân hàng câu hỏi của bên khác.
- Tự giải lại mọi câu (python/sympy hoặc node). Đáp án A–D rải đều.
- Bản Anh dùng thuật ngữ đúng của kì thi (SAT, ACT, AP: chính tả Mỹ, "math", "factor"; IB, IGCSE: chính tả Anh, "maths", "factorise"). Đây là ngoại lệ so với GLOSSARY.
- Sau mỗi cặp bài: `node tools/check.js <id>`; cuối cùng `node tools/check.js --all && node tools/build.js`.
- Không sửa tools/, assets/, data/ hay bài của người khác.
- Trắc nghiệm (trong `:::example`, `:::exercise` hay `:::quiz`) trình bày theo bố cục đề THPT: viết 4 dòng liền nhau `A. …` đến `D. …` ngay dưới dòng đề, không dòng trống xen giữa; website tự xếp 4, 2 hoặc 1 phương án mỗi hàng theo độ dài. Không dùng kí hiệu đô la cho tiền (trùng dấu công thức): viết "dollars" / "đô la".
