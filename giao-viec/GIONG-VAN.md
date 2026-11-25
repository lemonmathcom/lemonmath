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
| 27 | g10/vectors-in-coordinates | xong 25/11/2026 (ChatGPT) |
| 28 | g9/acute-angle-trig-ratios | xong 25/11/2026 (ChatGPT) |
| 29 | g9/arc-length-sector-area | xong 25/11/2026 (ChatGPT) |
| 30 | g9/arcs-and-chords | xong 25/11/2026 (ChatGPT) |
| 31 | g9/circumcircle-incircle | xong 25/11/2026 (ChatGPT) |
| 32 | g9/cube-roots | xong 25/11/2026 (ChatGPT) |
| 33 | g9/cyclic-quadrilaterals | xong 25/11/2026 (ChatGPT) |
| 34 | g9/cylinders-and-cones | xong 25/11/2026 (ChatGPT) |
| 35 | g9/equations-reducible-to-linear | xong 25/11/2026 (ChatGPT) |
| 36 | g9/event-probability-experiments | xong 25/11/2026 (ChatGPT) |
| 37 | g9/frequency-tables-charts | xong 25/11/2026 (ChatGPT) |
| 38 | g9/function-y-equals-ax2 | xong 25/11/2026 (ChatGPT) |
| 39 | g9/g9-equation-word-problems | xong 25/11/2026 (ChatGPT) |
| 40 | g9/grouped-frequency-tables | xong 25/11/2026 (ChatGPT) |
| 41 | g9/inequalities-and-properties | giao Vinax258-GV-3 (đợt 3) |
| 42 | g9/inscribed-angles | giao Vinax258-GV-3 (đợt 3) |
| 43 | g9/intro-to-circles | giao Vinax258-GV-3 (đợt 3) |
| 44 | g9/line-circle-positions | giao Vinax258-GV-3 (đợt 3) |
| 45 | g9/linear-inequalities-one-unknown | xong 25/11/2026 (ChatGPT) |
| 46 | g9/quadratic-equations | xong 25/11/2026 (ChatGPT) |
| 47 | g9/random-experiments-sample-space | xong 25/11/2026 (ChatGPT) |
| 48 | g9/regular-polygons | xong 25/11/2026 (ChatGPT) |
| 49 | g9/relative-frequency-tables | xong 25/11/2026 (ChatGPT) |
| 50 | g9/right-triangle-side-angle-relations | xong 25/11/2026 (ChatGPT) |
| 51 | g9/simplifying-root-expressions | xong 25/11/2026 (ChatGPT) |
| 52 | g9/simultaneous-equation-problems | xong 25/11/2026 (ChatGPT) |
| 53 | g9/simultaneous-equations-intro | xong 25/11/2026 (ChatGPT) |
| 54 | g9/solving-simultaneous-equations | xong 25/11/2026 (ChatGPT) |
| 55 | g9/spheres | xong 25/11/2026 (ChatGPT) |
| 56 | g9/square-roots-multiply-divide | xong 25/11/2026 (ChatGPT) |
| 57 | g9/square-roots-radicals | xong 25/11/2026 (ChatGPT) |
| 58 | g9/two-circle-positions | xong 25/11/2026 (ChatGPT) |
| 59 | g9/vietes-theorem | xong 25/11/2026 (ChatGPT) |
| 60 | g12/angle-formulas-space | giao Lemonmath112-GV-1 (đợt 3) |
| 61 | g12/antiderivatives | giao Lemonmath112-GV-1 (đợt 3) |
| 62 | g12/asymptotes | giao Lemonmath112-GV-2 (đợt 3) |
| 63 | g12/conditional-probability-intro | giao Lemonmath112-GV-2 (đợt 3) |
| 64 | g12/coordinate-system-space | giao Lemonmath112-GV-2 (đợt 3) |
| 65 | g12/definite-integrals | giao Lemonmath112-GV-2 (đợt 3) |
| 66 | g12/derivative-real-problems | xong 25/11/2026 (ChatGPT) |
| 67 | g12/exam-format-strategy | xong 25/11/2026 (ChatGPT) |
| 68 | g12/graphing-functions | xong 25/11/2026 (ChatGPT) |
| 69 | g12/grouped-range-iqr | xong 25/11/2026 (ChatGPT) |
| 70 | g12/grouped-variance-sd | xong 25/11/2026 (ChatGPT) |
| 71 | g12/integral-applications | xong 25/11/2026 (ChatGPT) |
| 72 | g12/line-equation-space | xong 25/11/2026 (ChatGPT) |
| 73 | g12/max-min-values | xong 25/11/2026 (ChatGPT) |
| 74 | g12/monotonicity-extrema | xong 25/11/2026 (ChatGPT) |
| 75 | g12/plane-equation | xong 25/11/2026 (ChatGPT) |
| 76 | g12/practice-paper-thpt-1 | xong 25/11/2026 (ChatGPT) |
| 77 | g12/practice-paper-thpt-2 | xong 25/11/2026 (ChatGPT) |
| 78 | g12/practice-paper-thpt-3 | xong 25/11/2026 (ChatGPT) |
| 79 | g12/practice-paper-thpt-4 | xong 25/11/2026 (ChatGPT) |
| 80 | g12/review-coordinates-space | xong 25/11/2026 (ChatGPT) |
| 81 | g12/review-functions-derivatives | xong 25/11/2026 (ChatGPT) |
| 82 | g12/review-integrals | xong 25/11/2026 (ChatGPT) |
| 83 | g12/review-optimisation-real-life | xong 25/11/2026 (ChatGPT) |
| 84 | g12/review-space-geometry | xong 25/11/2026 (ChatGPT) |
| 85 | g12/review-statistics-probability | xong 25/11/2026 (ChatGPT) |
| 86 | g12/review-trig-exp-log-sequences | xong 25/11/2026 (ChatGPT) |
| 87 | g12/sphere-equation | xong 25/11/2026 (ChatGPT) |
| 88 | g12/total-probability-bayes | xong 25/11/2026 (ChatGPT) |
| 89 | g12/vector-coordinate-operations | xong 25/11/2026 (ChatGPT) |
| 90 | g12/vectors-in-space | xong 25/11/2026 (ChatGPT) |
| 91 | g1/add-1-digit-to-2-digit | xong 25/11/2026 (ChatGPT) |
| 92 | g1/add-2-digit-numbers | xong 25/11/2026 (ChatGPT) |
| 93 | g1/addition-subtraction-facts-to-10 | xong 25/11/2026 (ChatGPT) |
| 94 | g1/addition-within-10 | xong 25/11/2026 (ChatGPT) |
| 95 | g1/comparing-two-digit-numbers | xong 25/11/2026 (ChatGPT) |
| 96 | g1/cubes-and-cuboids | xong 25/11/2026 (ChatGPT) |
| 97 | g1/g1-comparing-numbers | xong 25/11/2026 (ChatGPT) |
| 98 | g1/more-fewer-same | xong 25/11/2026 (ChatGPT) |
| 99 | g1/number-bonds | xong 25/11/2026 (ChatGPT) |
| 100 | g1/numbers-0-to-5 | xong 25/11/2026 (ChatGPT) |
| 101 | g1/numbers-6-to-10 | xong 25/11/2026 (ChatGPT) |
| 102 | g1/position-and-direction | xong 25/11/2026 (ChatGPT) |
| 103 | g1/squares-circles-triangles-rectangles | xong 25/11/2026 (ChatGPT) |
| 104 | g1/subtract-1-digit-from-2-digit | xong 25/11/2026 (ChatGPT) |
| 105 | g1/subtract-2-digit-numbers | xong 25/11/2026 (ChatGPT) |
| 106 | g1/subtraction-within-10 | xong 25/11/2026 (ChatGPT) |
| 107 | g1/two-digit-numbers | xong 25/11/2026 (ChatGPT) |
| 108 | g2/addition-crossing-10 | xong 25/11/2026 (ChatGPT) |
| 109 | g2/comparing-multiples-of-10-100 | xong 25/11/2026 (ChatGPT) |
| 110 | g2/comparing-three-digit-numbers | xong 25/11/2026 (ChatGPT) |
| 111 | g2/cylinders-and-spheres | xong 25/11/2026 (ChatGPT) |
| 112 | g2/decimetres-metres-kilometres | xong 25/11/2026 (ChatGPT) |
| 113 | g2/multiples-of-10-and-100 | xong 25/11/2026 (ChatGPT) |
| 114 | g2/ones-tens-hundreds-thousands | xong 25/11/2026 (ChatGPT) |
| 115 | g2/partitioning-hundreds-tens-ones | xong 25/11/2026 (ChatGPT) |
| 116 | g2/points-lines-curves | xong 25/11/2026 (ChatGPT) |
| 117 | g2/regroup-add-1-digit | xong 25/11/2026 (ChatGPT) |
| 118 | g2/regroup-add-2-digit | xong 25/11/2026 (ChatGPT) |
| 119 | g2/regroup-subtract-1-digit | xong 25/11/2026 (ChatGPT) |
| 120 | g2/regroup-subtract-2-digit | xong 25/11/2026 (ChatGPT) |
| 121 | g2/three-digit-numbers | xong 25/11/2026 (ChatGPT) |
| 122 | g3/circle-centre-radius-diameter | xong 25/11/2026 (ChatGPT) |
| 123 | g3/data-tables | xong 25/11/2026 (ChatGPT) |
| 124 | g3/eight-times-table | xong 25/11/2026 (ChatGPT) |
| 125 | g3/four-times-table | xong 25/11/2026 (ChatGPT) |
| 126 | g3/g3-cubes-and-cuboids | xong 25/11/2026 (ChatGPT) |
| 127 | g3/g3-midpoints | xong 25/11/2026 (ChatGPT) |
| 128 | g3/g3-vietnamese-money | xong 25/11/2026 (ChatGPT) |
| 129 | g3/likelihood-of-an-event | xong 25/11/2026 (ChatGPT) |
| 130 | g3/missing-numbers-add-subtract | xong 25/11/2026 (ChatGPT) |
| 131 | g3/missing-numbers-multiply-divide | xong 25/11/2026 (ChatGPT) |
| 132 | g3/multiply-2-digit-by-1-digit | xong 25/11/2026 (ChatGPT) |
| 133 | g3/multiply-4-digit-by-1-digit | xong 25/11/2026 (ChatGPT) |
| 134 | g3/nine-times-table | xong 25/11/2026 (ChatGPT) |
| 135 | g3/perimeter-of-shapes | xong 25/11/2026 (ChatGPT) |
| 136 | g3/right-angles | xong 25/11/2026 (ChatGPT) |
| 137 | g3/rounding-thousands-ten-thousands | xong 25/11/2026 (ChatGPT) |
| 138 | g3/seven-times-table | xong 25/11/2026 (ChatGPT) |
| 139 | g3/six-times-table | xong 25/11/2026 (ChatGPT) |
| 140 | g3/three-times-table | xong 25/11/2026 (ChatGPT) |
| 141 | g3/triangles-quadrilaterals-rectangles | xong 25/11/2026 (ChatGPT) |
| 142 | g3/unit-fractions | xong 25/11/2026 (ChatGPT) |
| 143 | g4/basic-property-of-fractions | xong 25/11/2026 (ChatGPT) |
| 144 | g4/event-frequency | xong 25/11/2026 (ChatGPT) |
| 145 | g4/finding-the-mean | xong 25/11/2026 (ChatGPT) |
| 146 | g4/fractions-and-division | xong 25/11/2026 (ChatGPT) |
| 147 | g4/g4-bar-charts | xong 25/11/2026 (ChatGPT) |
| 148 | g4/odd-and-even-numbers | xong 25/11/2026 (ChatGPT) |
| 149 | g4/review-calculations-to-100000 | xong 25/11/2026 (ChatGPT) |
| 150 | g4/review-numbers-to-100000 | xong 25/11/2026 (ChatGPT) |
| 151 | g4/square-dm-m-mm | xong 25/11/2026 (ChatGPT) |
| 152 | g4/statistical-data-lists | xong 25/11/2026 (ChatGPT) |
| 153 | g4/unitary-method | xong 25/11/2026 (ChatGPT) |
| 154 | g4/what-is-a-fraction | xong 25/11/2026 (ChatGPT) |
| 155 | g5/adding-decimals | xong 25/11/2026 (ChatGPT) |
| 156 | g5/g5-practice-paper-1 | xong 25/11/2026 (ChatGPT) |
| 157 | g5/g5-review-decimals-percent | xong 25/11/2026 (ChatGPT) |
| 158 | g5/one-number-as-percentage | xong 25/11/2026 (ChatGPT) |
| 159 | g5/organising-data | xong 25/11/2026 (ChatGPT) |
| 160 | g5/percentage-of-an-amount | xong 25/11/2026 (ChatGPT) |
| 161 | g5/review-natural-number-operations | xong 25/11/2026 (ChatGPT) |
| 162 | g5/subtracting-decimals | xong 25/11/2026 (ChatGPT) |
| 163 | g5/surface-area-of-a-cube | xong 25/11/2026 (ChatGPT) |
| 164 | g5/surface-area-of-a-cuboid | xong 25/11/2026 (ChatGPT) |
| 165 | g5/volume-of-a-cuboid | xong 25/11/2026 (ChatGPT) |
| 166 | g7/intro-to-probability | xong 25/11/2026 (ChatGPT) |
| 167 | g7/medians-angle-bisectors | xong 25/11/2026 (ChatGPT) |
| 168 | g8/linear-functions-graphs | xong 25/11/2026 (ChatGPT) |
| 169 | g8/monomials | xong 25/11/2026 (ChatGPT) |
| 170 | g11/multiplication-rule | giao Lemonmath112-GV-1 (đợt 3) |
| 171 | g11/perpendicular-planes | giao Lemonmath112-GV-1 (đợt 3) |
| 172 | exams/act/act-algebra-functions | xong 25/11/2026 (ChatGPT) |
| 173 | exams/act/act-geometry | xong 25/11/2026 (ChatGPT) |
| 174 | exams/act/act-modelling-integrating | xong 25/11/2026 (ChatGPT) |
| 175 | exams/act/act-number-quantity | xong 25/11/2026 (ChatGPT) |
| 176 | exams/act/act-overview | xong 25/11/2026 (ChatGPT) |
| 177 | exams/act/act-practice-test-1 | xong 25/11/2026 (ChatGPT) |
| 178 | exams/act/act-statistics-probability | xong 25/11/2026 (ChatGPT) |
| 179 | exams/ap-calculus/apcalc-accumulation-ftc | xong 25/11/2026 (ChatGPT) |
| 180 | exams/ap-calculus/apcalc-analytical-applications | xong 25/11/2026 (ChatGPT) |
| 181 | exams/ap-calculus/apcalc-area-volume | xong 25/11/2026 (ChatGPT) |
| 182 | exams/ap-calculus/apcalc-bc-parametric-polar | xong 25/11/2026 (ChatGPT) |
| 183 | exams/ap-calculus/apcalc-bc-series | xong 25/11/2026 (ChatGPT) |
| 184 | exams/ap-calculus/apcalc-contextual-applications | xong 25/11/2026 (ChatGPT) |
| 185 | exams/ap-calculus/apcalc-differential-equations | xong 25/11/2026 (ChatGPT) |
| 186 | exams/ap-calculus/apcalc-differentiation-rules | xong 25/11/2026 (ChatGPT) |
| 187 | exams/ap-calculus/apcalc-frq-strategies | xong 25/11/2026 (ChatGPT) |
| 188 | exams/ap-calculus/apcalc-implicit-inverse | xong 25/11/2026 (ChatGPT) |
| 189 | exams/ap-calculus/apcalc-integration-techniques | xong 25/11/2026 (ChatGPT) |
| 190 | exams/ap-calculus/apcalc-limits-continuity | xong 25/11/2026 (ChatGPT) |
| 191 | exams/ap-calculus/apcalc-overview | xong 25/11/2026 (ChatGPT) |
| 192 | exams/ap-calculus/apcalc-practice-exam-ab | xong 25/11/2026 (ChatGPT) |
| 193 | exams/ap-calculus/apcalc-practice-exam-bc | xong 25/11/2026 (ChatGPT) |
| 194 | exams/ap-precalculus/apprecalc-frq-strategies | xong 25/11/2026 (ChatGPT) |
| 195 | exams/ap-precalculus/apprecalc-logarithms-semilog | xong 25/11/2026 (ChatGPT) |
| 196 | exams/ap-precalculus/apprecalc-overview | xong 25/11/2026 (ChatGPT) |
| 197 | exams/ap-precalculus/apprecalc-practice-exam-1 | xong 25/11/2026 (ChatGPT) |
| 198 | exams/ap-precalculus/apprecalc-rates-polynomials | xong 25/11/2026 (ChatGPT) |
| 199 | exams/ap-precalculus/apprecalc-rational-transformations | xong 25/11/2026 (ChatGPT) |
| 200 | exams/ap-precalculus/apprecalc-sequences-exponentials | xong 25/11/2026 (ChatGPT) |
| 201 | exams/ap-precalculus/apprecalc-trig-equations-polar | xong 25/11/2026 (ChatGPT) |
| 202 | exams/ap-precalculus/apprecalc-trig-functions-modelling | xong 25/11/2026 (ChatGPT) |
| 203 | exams/ap-statistics/apstats-one-variable-data | xong 25/11/2026 (ChatGPT) |
| 204 | exams/ap-statistics/apstats-overview | xong 25/11/2026 (ChatGPT) |
| 205 | exams/ap-statistics/apstats-two-variable-regression | xong 25/11/2026 (ChatGPT) |
| 206 | exams/ib-aa/ibaa-calculus | xong 25/11/2026 (ChatGPT) |
| 207 | exams/ib-aa/ibaa-functions | xong 25/11/2026 (ChatGPT) |
| 208 | exams/ib-aa/ibaa-geometry-trigonometry | xong 25/11/2026 (ChatGPT) |
| 209 | exams/ib-aa/ibaa-hl-complex-proof | xong 25/11/2026 (ChatGPT) |
| 210 | exams/ib-aa/ibaa-hl-further-calculus | xong 25/11/2026 (ChatGPT) |
| 211 | exams/ib-aa/ibaa-hl-vectors | xong 25/11/2026 (ChatGPT) |
| 212 | exams/ib-aa/ibaa-number-algebra | xong 25/11/2026 (ChatGPT) |
| 213 | exams/ib-aa/ibaa-overview | xong 25/11/2026 (ChatGPT) |
| 214 | exams/ib-aa/ibaa-paper3-exploration | xong 25/11/2026 (ChatGPT) |
| 215 | exams/ib-aa/ibaa-practice-paper-hl | xong 25/11/2026 (ChatGPT) |
| 216 | exams/ib-aa/ibaa-practice-paper-sl | xong 25/11/2026 (ChatGPT) |
| 217 | exams/ib-aa/ibaa-statistics-probability | xong 25/11/2026 (ChatGPT) |
| 218 | exams/sat/sat-area-volume-lines-angles | xong 25/11/2026 (ChatGPT) |
| 219 | exams/sat/sat-desmos-strategies | xong 25/11/2026 (ChatGPT) |
| 220 | exams/sat/sat-equivalent-expressions | xong 25/11/2026 (ChatGPT) |
| 221 | exams/sat/sat-exponential-functions | xong 25/11/2026 (ChatGPT) |
| 222 | exams/sat/sat-linear-equations-systems | xong 25/11/2026 (ChatGPT) |
| 223 | exams/sat/sat-linear-functions-inequalities | xong 25/11/2026 (ChatGPT) |
| 224 | exams/sat/sat-overview | xong 25/11/2026 (ChatGPT) |
| 225 | exams/sat/sat-practice-test-1 | xong 25/11/2026 (ChatGPT) |
| 226 | exams/sat/sat-practice-test-2 | xong 25/11/2026 (ChatGPT) |
| 227 | exams/sat/sat-quadratics-nonlinear | xong 25/11/2026 (ChatGPT) |
| 228 | exams/sat/sat-ratios-percentages-units | xong 25/11/2026 (ChatGPT) |
| 229 | exams/sat/sat-statistics-probability | xong 25/11/2026 (ChatGPT) |
| 230 | exams/sat/sat-triangles-trig-circles | xong 25/11/2026 (ChatGPT) |
| 231 | exams/study-skills/calculator-skills | xong 25/11/2026 (ChatGPT) |
| 232 | exams/study-skills/calm-under-pressure | xong 25/11/2026 (ChatGPT) |
| 233 | exams/study-skills/error-log | xong 25/11/2026 (ChatGPT) |
| 234 | exams/study-skills/evidence-based-revision | xong 25/11/2026 (ChatGPT) |
| 235 | exams/study-skills/exam-day-strategy | xong 25/11/2026 (ChatGPT) |
| 236 | exams/study-skills/revision-plan | xong 25/11/2026 (ChatGPT) |