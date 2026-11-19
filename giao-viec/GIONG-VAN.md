# Viết lại giọng văn (chuẩn 2f – người thầy tâm huyết)

Quyết định 12/11/2026: chủ dự án muốn toàn bộ phần lời (mở bài, giải thích, lập luận, chuyển ý, hộp mẹo/lỗi/tóm tắt) viết lại tự nhiên, thân thiện như một nhà giáo tâm huyết, cả bản Việt và bản Anh; tài khoản Pro tự viết dần, **mỗi ngày 10 bài học** (lịch tự chạy 13h29 và 17h29, mỗi lượt 5 bài).

## Cách làm một bài (giữ nguyên toán)

1. Đọc chuẩn 2f trong `_templates/WRITING-SPEC.md` và bài mẫu `content/*/g10/equation-of-a-line.md` (đã viết lại).
2. Đọc bài bản Việt và bản Anh (phần trước `## Luyện tập` / `## Practice`; phần bài tập chỉ sửa câu dẫn đầu mục).
3. Viết lại các đoạn lời: đoạn mở sau tình huống, đoạn khám phá, các câu chuyển ý, câu dẫn trước ví dụ, đoạn "Vì sao…", các hộp tip/warning (giữ nội dung), thêm 1–2 câu chốt cuối phần Tóm tắt nối lại với câu hỏi đầu bài.
4. KHÔNG đổi: công thức, số liệu, đề, lời giải, cấu trúc hộp, liên kết, hình, bảng thuật ngữ. Hai bản Việt–Anh nói cùng một ý.
5. Áp dụng bằng các cặp thay thế chính xác (old → new), chạy `node tools/check.js <bài>`; xong lô: `node tools/check.js --all && npm run build`, đánh dấu bảng dưới, commit + push.

## Từ 16/11/2026: phần còn lại giao ChatGPT Plus

Chủ dự án yêu cầu dừng lượt tự viết của Pro; 210 bài còn lại (từ #27) đóng thành 25 gói `giao-viec/giong-van/chatgpt/GV-01.txt` … `GV-25.txt` cho một tài khoản ChatGPT. Cách giao: `giao-viec/giong-van/HUONG-DAN-GIAO-CHATGPT.md`. Khi nhận file `GV-ChatGPT-GV-NN.md`: `python3 tools/qa/giongvan.py apply <file>` (tự ghi "xong … (ChatGPT)" vào bảng), rồi check.js + build + push. Gói lại phần còn thiếu: `python3 tools/qa/giongvan.py pack --out giao-viec/giong-van/chatgpt/dot2` (lấy các dòng trống hoặc "giao ChatGPT").

## Đợt 3 (19/11/2026): thu hồi các gói cũ, chia lại cho 15 tài khoản Claude Free

Chủ dự án thu hồi phần đã giao ChatGPT Plus (12 gói GOI-*, gói NC-06, 25 gói giọng văn GV-*) và bỏ các gói NC cũ của tài khoản Free. Toàn bộ lời giải còn vắn tắt (trừ lớp 6, lớp 9 do Pro đã làm) và 210 bài giọng văn chia lại theo dải lớp liền nhau, mỗi bài học chỉ một tài khoản làm (cả lời giải lẫn giọng văn). Bảng giao: `giao-viec/dot3/BANG-GIAO.md`; bài trong từng file: `giao-viec/dot3/CHI-TIET.md`; tạo lại: `python3 tools/qa/dot3.py`.

Khi nhận: file `*-LG-ketqua.md` → `python3 tools/qa/upgrade.py apply <file>`; `*-GV-ketqua.md` → `python3 tools/qa/giongvan.py apply <file>`; `*-MD-ketqua.txt` → `python3 tools/qa/mucdo.py apply <file>`; đề Kho đề thi `<mã đề>.vi.md` / `.en.md` → chép vào content/<lang>/exams/kho-de-thi/, thêm vào chương trong curriculum.json. Rồi check.js + build + push.

## Tiến độ

- [x] Trang chung: trang chủ (tools/ui.js), Giới thiệu, Phụ huynh (đoạn mở, đoạn khi con sai), Học trên giấy (đoạn mở), Ôn thi (đoạn mở) – 12/11/2026

| # | Bài học | Trạng thái |
|---|---|---|
| 1 | g10/approximations-errors | xong 12/11/2026 |
| 2 | g10/binomial-theorem | xong 12/11/2026 |
| 3 | g10/central-tendency | xong 12/11/2026 |
| 4 | g10/circles | xong 12/11/2026 |
| 5 | g10/conic-sections | xong 12/11/2026 |
| 6 | g10/counting-rules | xong 12/11/2026 |
| 7 | g10/dispersion | xong 12/11/2026 |
| 8 | g10/dot-product | xong 12/11/2026 |
| 9 | g10/equation-of-a-line | xong 12/11/2026 |
| 10 | g10/equations-reducible-quadratic | xong 12/11/2026 |
| 11 | g10/events-classical-probability | xong 12/11/2026 |
| 12 | g10/functions | xong 13/11/2026 |
| 13 | g10/linear-inequality-two-variables | xong 13/11/2026 |
| 14 | g10/lines-angles-distances | xong 13/11/2026 |
| 15 | g10/permutations-combinations | xong 13/11/2026 |
| 16 | g10/probability-practice | xong 13/11/2026 |
| 17 | g10/quadratic-function | xong 13/11/2026 |
| 18 | g10/scalar-multiplication | xong 13/11/2026 |
| 19 | g10/sets-and-set-operations | xong 13/11/2026 |
| 20 | g10/sign-of-quadratic | xong 13/11/2026 |
| 21 | g10/statements | xong 13/11/2026 |
| 22 | g10/systems-linear-inequalities | xong 14/11/2026 |
| 23 | g10/triangle-relations | xong 14/11/2026 |
| 24 | g10/trig-ratios-0-180 | xong 14/11/2026 |
| 25 | g10/vector-basics | xong 14/11/2026 |
| 26 | g10/vector-sum-difference | xong 14/11/2026 |
| 27 | g10/vectors-in-coordinates | giao Vimus2358-GV-4 (đợt 3) |
| 28 | g9/acute-angle-trig-ratios | giao Nguyenchanh2358-GV-3 (đợt 3) |
| 29 | g9/arc-length-sector-area | giao Nguyenchanh2358-GV-3 (đợt 3) |
| 30 | g9/arcs-and-chords | giao Nguyenchanh2358-GV-3 (đợt 3) |
| 31 | g9/circumcircle-incircle | giao Nguyenchanh2358-GV-4 (đợt 3) |
| 32 | g9/cube-roots | giao Nguyenchanh2358-GV-4 (đợt 3) |
| 33 | g9/cyclic-quadrilaterals | giao Vinax258-GV-1 (đợt 3) |
| 34 | g9/cylinders-and-cones | giao Vinax258-GV-1 (đợt 3) |
| 35 | g9/equations-reducible-to-linear | giao Vinax258-GV-1 (đợt 3) |
| 36 | g9/event-probability-experiments | giao Vinax258-GV-1 (đợt 3) |
| 37 | g9/frequency-tables-charts | giao Vinax258-GV-2 (đợt 3) |
| 38 | g9/function-y-equals-ax2 | giao Vinax258-GV-2 (đợt 3) |
| 39 | g9/g9-equation-word-problems | giao Vinax258-GV-2 (đợt 3) |
| 40 | g9/grouped-frequency-tables | giao Vinax258-GV-2 (đợt 3) |
| 41 | g9/inequalities-and-properties | giao Vinax258-GV-3 (đợt 3) |
| 42 | g9/inscribed-angles | giao Vinax258-GV-3 (đợt 3) |
| 43 | g9/intro-to-circles | giao Vinax258-GV-3 (đợt 3) |
| 44 | g9/line-circle-positions | giao Vinax258-GV-3 (đợt 3) |
| 45 | g9/linear-inequalities-one-unknown | giao Vinax258-GV-4 (đợt 3) |
| 46 | g9/quadratic-equations | giao Vinax258-GV-4 (đợt 3) |
| 47 | g9/random-experiments-sample-space | giao Vimus2358-GV-1 (đợt 3) |
| 48 | g9/regular-polygons | giao Vimus2358-GV-1 (đợt 3) |
| 49 | g9/relative-frequency-tables | giao Vimus2358-GV-1 (đợt 3) |
| 50 | g9/right-triangle-side-angle-relations | giao Vimus2358-GV-1 (đợt 3) |
| 51 | g9/simplifying-root-expressions | giao Vimus2358-GV-2 (đợt 3) |
| 52 | g9/simultaneous-equation-problems | giao Vimus2358-GV-2 (đợt 3) |
| 53 | g9/simultaneous-equations-intro | giao Vimus2358-GV-2 (đợt 3) |
| 54 | g9/solving-simultaneous-equations | giao Vimus2358-GV-2 (đợt 3) |
| 55 | g9/spheres | giao Vimus2358-GV-3 (đợt 3) |
| 56 | g9/square-roots-multiply-divide | giao Vimus2358-GV-3 (đợt 3) |
| 57 | g9/square-roots-radicals | giao Vimus2358-GV-3 (đợt 3) |
| 58 | g9/two-circle-positions | giao Vimus2358-GV-3 (đợt 3) |
| 59 | g9/vietes-theorem | giao Vimus2358-GV-4 (đợt 3) |
| 60 | g12/angle-formulas-space | giao Lemonmath112-GV-1 (đợt 3) |
| 61 | g12/antiderivatives | giao Lemonmath112-GV-1 (đợt 3) |
| 62 | g12/asymptotes | giao Lemonmath112-GV-2 (đợt 3) |
| 63 | g12/conditional-probability-intro | giao Lemonmath112-GV-2 (đợt 3) |
| 64 | g12/coordinate-system-space | giao Lemonmath112-GV-2 (đợt 3) |
| 65 | g12/definite-integrals | giao Lemonmath112-GV-2 (đợt 3) |
| 66 | g12/derivative-real-problems | giao Lemonmath112-GV-3 (đợt 3) |
| 67 | g12/exam-format-strategy | giao Lemonmath112-GV-3 (đợt 3) |
| 68 | g12/graphing-functions | giao Lemonmath112-GV-3 (đợt 3) |
| 69 | g12/grouped-range-iqr | giao Lemonmath112-GV-3 (đợt 3) |
| 70 | g12/grouped-variance-sd | giao Lemonmath112-GV-4 (đợt 3) |
| 71 | g12/integral-applications | giao Lemonmath112-GV-4 (đợt 3) |
| 72 | g12/line-equation-space | giao hanibi108-GV-1 (đợt 3) |
| 73 | g12/max-min-values | giao hanibi108-GV-1 (đợt 3) |
| 74 | g12/monotonicity-extrema | giao hanibi108-GV-1 (đợt 3) |
| 75 | g12/plane-equation | giao hanibi108-GV-1 (đợt 3) |
| 76 | g12/practice-paper-thpt-1 | giao hanibi108-GV-2 (đợt 3) |
| 77 | g12/practice-paper-thpt-2 | giao hanibi108-GV-2 (đợt 3) |
| 78 | g12/practice-paper-thpt-3 | giao hanibi108-GV-2 (đợt 3) |
| 79 | g12/practice-paper-thpt-4 | giao hanibi108-GV-2 (đợt 3) |
| 80 | g12/review-coordinates-space | giao hanibi108-GV-3 (đợt 3) |
| 81 | g12/review-functions-derivatives | giao hanibi108-GV-3 (đợt 3) |
| 82 | g12/review-integrals | giao hanibi108-GV-3 (đợt 3) |
| 83 | g12/review-optimisation-real-life | giao hanibi108-GV-3 (đợt 3) |
| 84 | g12/review-space-geometry | giao hanibi108-GV-4 (đợt 3) |
| 85 | g12/review-statistics-probability | giao hanibi108-GV-4 (đợt 3) |
| 86 | g12/review-trig-exp-log-sequences | giao Xedap102-GV-1 (đợt 3) |
| 87 | g12/sphere-equation | giao Xedap102-GV-1 (đợt 3) |
| 88 | g12/total-probability-bayes | giao Xedap102-GV-1 (đợt 3) |
| 89 | g12/vector-coordinate-operations | giao Xedap102-GV-1 (đợt 3) |
| 90 | g12/vectors-in-space | giao Xedap102-GV-2 (đợt 3) |
| 91 | g1/add-1-digit-to-2-digit | giao Kinangtoan-GV-1 (đợt 3) |
| 92 | g1/add-2-digit-numbers | giao Kinangtoan-GV-1 (đợt 3) |
| 93 | g1/addition-subtraction-facts-to-10 | giao Kinangtoan-GV-1 (đợt 3) |
| 94 | g1/addition-within-10 | giao Kinangtoan-GV-1 (đợt 3) |
| 95 | g1/comparing-two-digit-numbers | giao Kinangtoan-GV-2 (đợt 3) |
| 96 | g1/cubes-and-cuboids | giao Kinangtoan-GV-2 (đợt 3) |
| 97 | g1/g1-comparing-numbers | giao Kinangtoan-GV-2 (đợt 3) |
| 98 | g1/more-fewer-same | giao Kinangtoan-GV-2 (đợt 3) |
| 99 | g1/number-bonds | giao Kinangtoan-GV-3 (đợt 3) |
| 100 | g1/numbers-0-to-5 | giao Kinangtoan-GV-3 (đợt 3) |
| 101 | g1/numbers-6-to-10 | giao Kinangtoan-GV-3 (đợt 3) |
| 102 | g1/position-and-direction | giao Kinangtoan-GV-3 (đợt 3) |
| 103 | g1/squares-circles-triangles-rectangles | giao Kinangtoan-GV-4 (đợt 3) |
| 104 | g1/subtract-1-digit-from-2-digit | giao Kinangtoan-GV-4 (đợt 3) |
| 105 | g1/subtract-2-digit-numbers | giao Alexnguyen122222-GV-1 (đợt 3) |
| 106 | g1/subtraction-within-10 | giao Alexnguyen122222-GV-1 (đợt 3) |
| 107 | g1/two-digit-numbers | giao Alexnguyen122222-GV-1 (đợt 3) |
| 108 | g2/addition-crossing-10 | giao Alexnguyen122222-GV-1 (đợt 3) |
| 109 | g2/comparing-multiples-of-10-100 | giao Alexnguyen122222-GV-2 (đợt 3) |
| 110 | g2/comparing-three-digit-numbers | giao Alexnguyen122222-GV-2 (đợt 3) |
| 111 | g2/cylinders-and-spheres | giao Alexnguyen122222-GV-2 (đợt 3) |
| 112 | g2/decimetres-metres-kilometres | giao Alexnguyen122222-GV-2 (đợt 3) |
| 113 | g2/multiples-of-10-and-100 | giao Alexnguyen122222-GV-3 (đợt 3) |
| 114 | g2/ones-tens-hundreds-thousands | giao Alexnguyen122222-GV-3 (đợt 3) |
| 115 | g2/partitioning-hundreds-tens-ones | giao Alexnguyen122222-GV-3 (đợt 3) |
| 116 | g2/points-lines-curves | giao Alexnguyen122222-GV-3 (đợt 3) |
| 117 | g2/regroup-add-1-digit | giao Alexnguyen122222-GV-4 (đợt 3) |
| 118 | g2/regroup-add-2-digit | giao Alexnguyen122222-GV-4 (đợt 3) |
| 119 | g2/regroup-subtract-1-digit | giao thichgiaitoan-GV-1 (đợt 3) |
| 120 | g2/regroup-subtract-2-digit | giao thichgiaitoan-GV-1 (đợt 3) |
| 121 | g2/three-digit-numbers | giao thichgiaitoan-GV-1 (đợt 3) |
| 122 | g3/circle-centre-radius-diameter | giao thichgiaitoan-GV-1 (đợt 3) |
| 123 | g3/data-tables | giao thichgiaitoan-GV-2 (đợt 3) |
| 124 | g3/eight-times-table | giao thichgiaitoan-GV-2 (đợt 3) |
| 125 | g3/four-times-table | giao thichgiaitoan-GV-2 (đợt 3) |
| 126 | g3/g3-cubes-and-cuboids | giao thichgiaitoan-GV-2 (đợt 3) |
| 127 | g3/g3-midpoints | giao thichgiaitoan-GV-3 (đợt 3) |
| 128 | g3/g3-vietnamese-money | giao thichgiaitoan-GV-3 (đợt 3) |
| 129 | g3/likelihood-of-an-event | giao thichgiaitoan-GV-3 (đợt 3) |
| 130 | g3/missing-numbers-add-subtract | giao thichgiaitoan-GV-3 (đợt 3) |
| 131 | g3/missing-numbers-multiply-divide | giao thichgiaitoan-GV-4 (đợt 3) |
| 132 | g3/multiply-2-digit-by-1-digit | giao thichgiaitoan-GV-4 (đợt 3) |
| 133 | g3/multiply-4-digit-by-1-digit | giao Lemonmath.com-GV-1 (đợt 3) |
| 134 | g3/nine-times-table | giao Lemonmath.com-GV-1 (đợt 3) |
| 135 | g3/perimeter-of-shapes | giao Lemonmath.com-GV-1 (đợt 3) |
| 136 | g3/right-angles | giao Lemonmath.com-GV-1 (đợt 3) |
| 137 | g3/rounding-thousands-ten-thousands | giao Lemonmath.com-GV-2 (đợt 3) |
| 138 | g3/seven-times-table | giao Lemonmath.com-GV-2 (đợt 3) |
| 139 | g3/six-times-table | giao Lemonmath.com-GV-2 (đợt 3) |
| 140 | g3/three-times-table | giao Lemonmath.com-GV-2 (đợt 3) |
| 141 | g3/triangles-quadrilaterals-rectangles | giao Lemonmath.com-GV-3 (đợt 3) |
| 142 | g3/unit-fractions | giao Lemonmath.com-GV-3 (đợt 3) |
| 143 | g4/basic-property-of-fractions | giao Lemonmath.com-GV-3 (đợt 3) |
| 144 | g4/event-frequency | giao Lemonmath.com-GV-3 (đợt 3) |
| 145 | g4/finding-the-mean | giao Lemonmath.com-GV-4 (đợt 3) |
| 146 | g4/fractions-and-division | giao Lemonmath.com-GV-4 (đợt 3) |
| 147 | g4/g4-bar-charts | giao Vinax.vn-GV-1 (đợt 3) |
| 148 | g4/odd-and-even-numbers | giao Vinax.vn-GV-1 (đợt 3) |
| 149 | g4/review-calculations-to-100000 | giao Vinax.vn-GV-1 (đợt 3) |
| 150 | g4/review-numbers-to-100000 | giao Vinax.vn-GV-1 (đợt 3) |
| 151 | g4/square-dm-m-mm | giao Vinax.vn-GV-2 (đợt 3) |
| 152 | g4/statistical-data-lists | giao Vinax.vn-GV-2 (đợt 3) |
| 153 | g4/unitary-method | giao Vinax.vn-GV-2 (đợt 3) |
| 154 | g4/what-is-a-fraction | giao Vinax.vn-GV-2 (đợt 3) |
| 155 | g5/adding-decimals | giao Vinax.vn-GV-3 (đợt 3) |
| 156 | g5/g5-practice-paper-1 | giao Vinax.vn-GV-3 (đợt 3) |
| 157 | g5/g5-review-decimals-percent | giao Vinax.vn-GV-3 (đợt 3) |
| 158 | g5/one-number-as-percentage | giao Vinax.vn-GV-3 (đợt 3) |
| 159 | g5/organising-data | giao Vinax.vn-GV-4 (đợt 3) |
| 160 | g5/percentage-of-an-amount | giao Vinax.vn-GV-4 (đợt 3) |
| 161 | g5/review-natural-number-operations | giao Nguyenchanh2358-GV-1 (đợt 3) |
| 162 | g5/subtracting-decimals | giao Nguyenchanh2358-GV-1 (đợt 3) |
| 163 | g5/surface-area-of-a-cube | giao Nguyenchanh2358-GV-1 (đợt 3) |
| 164 | g5/surface-area-of-a-cuboid | giao Nguyenchanh2358-GV-1 (đợt 3) |
| 165 | g5/volume-of-a-cuboid | giao Nguyenchanh2358-GV-2 (đợt 3) |
| 166 | g7/intro-to-probability | giao Nguyenchanh2358-GV-2 (đợt 3) |
| 167 | g7/medians-angle-bisectors | giao Nguyenchanh2358-GV-2 (đợt 3) |
| 168 | g8/linear-functions-graphs | giao Nguyenchanh2358-GV-2 (đợt 3) |
| 169 | g8/monomials | giao Nguyenchanh2358-GV-3 (đợt 3) |
| 170 | g11/multiplication-rule | giao Lemonmath112-GV-1 (đợt 3) |
| 171 | g11/perpendicular-planes | giao Lemonmath112-GV-1 (đợt 3) |
| 172 | exams/act/act-algebra-functions | giao chanh106-GV-2 (đợt 3) |
| 173 | exams/act/act-geometry | giao chanh106-GV-2 (đợt 3) |
| 174 | exams/act/act-modelling-integrating | giao chanh106-GV-2 (đợt 3) |
| 175 | exams/act/act-number-quantity | giao chanh106-GV-2 (đợt 3) |
| 176 | exams/act/act-overview | giao chanh106-GV-3 (đợt 3) |
| 177 | exams/act/act-practice-test-1 | giao chanh106-GV-3 (đợt 3) |
| 178 | exams/act/act-statistics-probability | giao chanh106-GV-3 (đợt 3) |
| 179 | exams/ap-calculus/apcalc-accumulation-ftc | giao thaodebao1-GV-2 (đợt 3) |
| 180 | exams/ap-calculus/apcalc-analytical-applications | giao thaodebao1-GV-2 (đợt 3) |
| 181 | exams/ap-calculus/apcalc-area-volume | giao thaodebao1-GV-3 (đợt 3) |
| 182 | exams/ap-calculus/apcalc-bc-parametric-polar | giao thaodebao1-GV-3 (đợt 3) |
| 183 | exams/ap-calculus/apcalc-bc-series | giao thaodebao1-GV-3 (đợt 3) |
| 184 | exams/ap-calculus/apcalc-contextual-applications | giao thaodebao1-GV-3 (đợt 3) |
| 185 | exams/ap-calculus/apcalc-differential-equations | giao thaodebao1-GV-4 (đợt 3) |
| 186 | exams/ap-calculus/apcalc-differentiation-rules | giao thaodebao1-GV-4 (đợt 3) |
| 187 | exams/ap-calculus/apcalc-frq-strategies | giao nguoibuonthinh-GV-1 (đợt 3) |
| 188 | exams/ap-calculus/apcalc-implicit-inverse | giao nguoibuonthinh-GV-1 (đợt 3) |
| 189 | exams/ap-calculus/apcalc-integration-techniques | giao nguoibuonthinh-GV-1 (đợt 3) |
| 190 | exams/ap-calculus/apcalc-limits-continuity | giao nguoibuonthinh-GV-1 (đợt 3) |
| 191 | exams/ap-calculus/apcalc-overview | giao nguoibuonthinh-GV-2 (đợt 3) |
| 192 | exams/ap-calculus/apcalc-practice-exam-ab | giao nguoibuonthinh-GV-2 (đợt 3) |
| 193 | exams/ap-calculus/apcalc-practice-exam-bc | giao nguoibuonthinh-GV-2 (đợt 3) |
| 194 | exams/ap-precalculus/apprecalc-frq-strategies | giao chanh106-GV-3 (đợt 3) |
| 195 | exams/ap-precalculus/apprecalc-logarithms-semilog | giao chanh106-GV-4 (đợt 3) |
| 196 | exams/ap-precalculus/apprecalc-overview | giao chanh106-GV-4 (đợt 3) |
| 197 | exams/ap-precalculus/apprecalc-practice-exam-1 | giao thaodebao1-GV-1 (đợt 3) |
| 198 | exams/ap-precalculus/apprecalc-rates-polynomials | giao thaodebao1-GV-1 (đợt 3) |
| 199 | exams/ap-precalculus/apprecalc-rational-transformations | giao thaodebao1-GV-1 (đợt 3) |
| 200 | exams/ap-precalculus/apprecalc-sequences-exponentials | giao thaodebao1-GV-1 (đợt 3) |
| 201 | exams/ap-precalculus/apprecalc-trig-equations-polar | giao thaodebao1-GV-2 (đợt 3) |
| 202 | exams/ap-precalculus/apprecalc-trig-functions-modelling | giao thaodebao1-GV-2 (đợt 3) |
| 203 | exams/ap-statistics/apstats-one-variable-data | giao nguoibuonthinh-GV-2 (đợt 3) |
| 204 | exams/ap-statistics/apstats-overview | giao nguoibuonthinh-GV-3 (đợt 3) |
| 205 | exams/ap-statistics/apstats-two-variable-regression | giao nguoibuonthinh-GV-3 (đợt 3) |
| 206 | exams/ib-aa/ibaa-calculus | giao nguoibuonthinh-GV-3 (đợt 3) |
| 207 | exams/ib-aa/ibaa-functions | giao nguoibuonthinh-GV-3 (đợt 3) |
| 208 | exams/ib-aa/ibaa-geometry-trigonometry | giao nguoibuonthinh-GV-4 (đợt 3) |
| 209 | exams/ib-aa/ibaa-hl-complex-proof | giao nguoibuonthinh-GV-4 (đợt 3) |
| 210 | exams/ib-aa/ibaa-hl-further-calculus | giao huongamuong1-GV-1 (đợt 3) |
| 211 | exams/ib-aa/ibaa-hl-vectors | giao huongamuong1-GV-1 (đợt 3) |
| 212 | exams/ib-aa/ibaa-number-algebra | giao huongamuong1-GV-1 (đợt 3) |
| 213 | exams/ib-aa/ibaa-overview | giao huongamuong1-GV-1 (đợt 3) |
| 214 | exams/ib-aa/ibaa-paper3-exploration | giao huongamuong1-GV-2 (đợt 3) |
| 215 | exams/ib-aa/ibaa-practice-paper-hl | giao huongamuong1-GV-2 (đợt 3) |
| 216 | exams/ib-aa/ibaa-practice-paper-sl | giao huongamuong1-GV-2 (đợt 3) |
| 217 | exams/ib-aa/ibaa-statistics-probability | giao huongamuong1-GV-2 (đợt 3) |
| 218 | exams/sat/sat-area-volume-lines-angles | giao Xedap102-GV-2 (đợt 3) |
| 219 | exams/sat/sat-desmos-strategies | giao Xedap102-GV-2 (đợt 3) |
| 220 | exams/sat/sat-equivalent-expressions | giao Xedap102-GV-2 (đợt 3) |
| 221 | exams/sat/sat-exponential-functions | giao Xedap102-GV-3 (đợt 3) |
| 222 | exams/sat/sat-linear-equations-systems | giao Xedap102-GV-3 (đợt 3) |
| 223 | exams/sat/sat-linear-functions-inequalities | giao Xedap102-GV-3 (đợt 3) |
| 224 | exams/sat/sat-overview | giao Xedap102-GV-3 (đợt 3) |
| 225 | exams/sat/sat-practice-test-1 | giao Xedap102-GV-4 (đợt 3) |
| 226 | exams/sat/sat-practice-test-2 | giao Xedap102-GV-4 (đợt 3) |
| 227 | exams/sat/sat-quadratics-nonlinear | giao chanh106-GV-1 (đợt 3) |
| 228 | exams/sat/sat-ratios-percentages-units | giao chanh106-GV-1 (đợt 3) |
| 229 | exams/sat/sat-statistics-probability | giao chanh106-GV-1 (đợt 3) |
| 230 | exams/sat/sat-triangles-trig-circles | giao chanh106-GV-1 (đợt 3) |
| 231 | exams/study-skills/calculator-skills | giao huongamuong1-GV-3 (đợt 3) |
| 232 | exams/study-skills/calm-under-pressure | giao huongamuong1-GV-3 (đợt 3) |
| 233 | exams/study-skills/error-log | giao huongamuong1-GV-3 (đợt 3) |
| 234 | exams/study-skills/evidence-based-revision | giao huongamuong1-GV-3 (đợt 3) |
| 235 | exams/study-skills/exam-day-strategy | giao huongamuong1-GV-4 (đợt 3) |
| 236 | exams/study-skills/revision-plan | giao huongamuong1-GV-4 (đợt 3) |