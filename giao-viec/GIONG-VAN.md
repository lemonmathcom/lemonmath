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
| 27 | g10/vectors-in-coordinates | giao ChatGPT GV-01 |
| 28 | g9/acute-angle-trig-ratios | giao ChatGPT GV-01 |
| 29 | g9/arc-length-sector-area | giao ChatGPT GV-01 |
| 30 | g9/arcs-and-chords | giao ChatGPT GV-01 |
| 31 | g9/circumcircle-incircle | giao ChatGPT GV-01 |
| 32 | g9/cube-roots | giao ChatGPT GV-01 |
| 33 | g9/cyclic-quadrilaterals | giao ChatGPT GV-01 |
| 34 | g9/cylinders-and-cones | giao ChatGPT GV-01 |
| 35 | g9/equations-reducible-to-linear | giao ChatGPT GV-01 |
| 36 | g9/event-probability-experiments | giao ChatGPT GV-02 |
| 37 | g9/frequency-tables-charts | giao ChatGPT GV-02 |
| 38 | g9/function-y-equals-ax2 | giao ChatGPT GV-02 |
| 39 | g9/g9-equation-word-problems | giao ChatGPT GV-02 |
| 40 | g9/grouped-frequency-tables | giao ChatGPT GV-02 |
| 41 | g9/inequalities-and-properties | giao ChatGPT GV-02 |
| 42 | g9/inscribed-angles | giao ChatGPT GV-02 |
| 43 | g9/intro-to-circles | giao ChatGPT GV-02 |
| 44 | g9/line-circle-positions | giao ChatGPT GV-02 |
| 45 | g9/linear-inequalities-one-unknown | giao ChatGPT GV-03 |
| 46 | g9/quadratic-equations | giao ChatGPT GV-03 |
| 47 | g9/random-experiments-sample-space | giao ChatGPT GV-03 |
| 48 | g9/regular-polygons | giao ChatGPT GV-03 |
| 49 | g9/relative-frequency-tables | giao ChatGPT GV-03 |
| 50 | g9/right-triangle-side-angle-relations | giao ChatGPT GV-03 |
| 51 | g9/simplifying-root-expressions | giao ChatGPT GV-03 |
| 52 | g9/simultaneous-equation-problems | giao ChatGPT GV-03 |
| 53 | g9/simultaneous-equations-intro | giao ChatGPT GV-03 |
| 54 | g9/solving-simultaneous-equations | giao ChatGPT GV-04 |
| 55 | g9/spheres | giao ChatGPT GV-04 |
| 56 | g9/square-roots-multiply-divide | giao ChatGPT GV-04 |
| 57 | g9/square-roots-radicals | giao ChatGPT GV-04 |
| 58 | g9/two-circle-positions | giao ChatGPT GV-04 |
| 59 | g9/vietes-theorem | giao ChatGPT GV-04 |
| 60 | g12/angle-formulas-space | giao ChatGPT GV-05 |
| 61 | g12/antiderivatives | giao ChatGPT GV-05 |
| 62 | g12/asymptotes | giao ChatGPT GV-05 |
| 63 | g12/conditional-probability-intro | giao ChatGPT GV-05 |
| 64 | g12/coordinate-system-space | giao ChatGPT GV-05 |
| 65 | g12/definite-integrals | giao ChatGPT GV-05 |
| 66 | g12/derivative-real-problems | giao ChatGPT GV-06 |
| 67 | g12/exam-format-strategy | giao ChatGPT GV-06 |
| 68 | g12/graphing-functions | giao ChatGPT GV-06 |
| 69 | g12/grouped-range-iqr | giao ChatGPT GV-06 |
| 70 | g12/grouped-variance-sd | giao ChatGPT GV-06 |
| 71 | g12/integral-applications | giao ChatGPT GV-06 |
| 72 | g12/line-equation-space | giao ChatGPT GV-06 |
| 73 | g12/max-min-values | giao ChatGPT GV-07 |
| 74 | g12/monotonicity-extrema | giao ChatGPT GV-07 |
| 75 | g12/plane-equation | giao ChatGPT GV-07 |
| 76 | g12/practice-paper-thpt-1 | giao ChatGPT GV-07 |
| 77 | g12/practice-paper-thpt-2 | giao ChatGPT GV-07 |
| 78 | g12/practice-paper-thpt-3 | giao ChatGPT GV-07 |
| 79 | g12/practice-paper-thpt-4 | giao ChatGPT GV-07 |
| 80 | g12/review-coordinates-space | giao ChatGPT GV-07 |
| 81 | g12/review-functions-derivatives | giao ChatGPT GV-07 |
| 82 | g12/review-integrals | giao ChatGPT GV-07 |
| 83 | g12/review-optimisation-real-life | giao ChatGPT GV-08 |
| 84 | g12/review-space-geometry | giao ChatGPT GV-08 |
| 85 | g12/review-statistics-probability | giao ChatGPT GV-08 |
| 86 | g12/review-trig-exp-log-sequences | giao ChatGPT GV-08 |
| 87 | g12/sphere-equation | giao ChatGPT GV-08 |
| 88 | g12/total-probability-bayes | giao ChatGPT GV-08 |
| 89 | g12/vector-coordinate-operations | giao ChatGPT GV-08 |
| 90 | g12/vectors-in-space | giao ChatGPT GV-09 |
| 91 | g1/add-1-digit-to-2-digit | giao ChatGPT GV-09 |
| 92 | g1/add-2-digit-numbers | giao ChatGPT GV-09 |
| 93 | g1/addition-subtraction-facts-to-10 | giao ChatGPT GV-09 |
| 94 | g1/addition-within-10 | giao ChatGPT GV-09 |
| 95 | g1/comparing-two-digit-numbers | giao ChatGPT GV-09 |
| 96 | g1/cubes-and-cuboids | giao ChatGPT GV-09 |
| 97 | g1/g1-comparing-numbers | giao ChatGPT GV-09 |
| 98 | g1/more-fewer-same | giao ChatGPT GV-09 |
| 99 | g1/number-bonds | giao ChatGPT GV-09 |
| 100 | g1/numbers-0-to-5 | giao ChatGPT GV-10 |
| 101 | g1/numbers-6-to-10 | giao ChatGPT GV-10 |
| 102 | g1/position-and-direction | giao ChatGPT GV-10 |
| 103 | g1/squares-circles-triangles-rectangles | giao ChatGPT GV-10 |
| 104 | g1/subtract-1-digit-from-2-digit | giao ChatGPT GV-10 |
| 105 | g1/subtract-2-digit-numbers | giao ChatGPT GV-10 |
| 106 | g1/subtraction-within-10 | giao ChatGPT GV-10 |
| 107 | g1/two-digit-numbers | giao ChatGPT GV-10 |
| 108 | g2/addition-crossing-10 | giao ChatGPT GV-11 |
| 109 | g2/comparing-multiples-of-10-100 | giao ChatGPT GV-11 |
| 110 | g2/comparing-three-digit-numbers | giao ChatGPT GV-11 |
| 111 | g2/cylinders-and-spheres | giao ChatGPT GV-11 |
| 112 | g2/decimetres-metres-kilometres | giao ChatGPT GV-11 |
| 113 | g2/multiples-of-10-and-100 | giao ChatGPT GV-11 |
| 114 | g2/ones-tens-hundreds-thousands | giao ChatGPT GV-11 |
| 115 | g2/partitioning-hundreds-tens-ones | giao ChatGPT GV-11 |
| 116 | g2/points-lines-curves | giao ChatGPT GV-11 |
| 117 | g2/regroup-add-1-digit | giao ChatGPT GV-11 |
| 118 | g2/regroup-add-2-digit | giao ChatGPT GV-12 |
| 119 | g2/regroup-subtract-1-digit | giao ChatGPT GV-12 |
| 120 | g2/regroup-subtract-2-digit | giao ChatGPT GV-12 |
| 121 | g2/three-digit-numbers | giao ChatGPT GV-12 |
| 122 | g3/circle-centre-radius-diameter | giao ChatGPT GV-12 |
| 123 | g3/data-tables | giao ChatGPT GV-12 |
| 124 | g3/eight-times-table | giao ChatGPT GV-12 |
| 125 | g3/four-times-table | giao ChatGPT GV-12 |
| 126 | g3/g3-cubes-and-cuboids | giao ChatGPT GV-12 |
| 127 | g3/g3-midpoints | giao ChatGPT GV-12 |
| 128 | g3/g3-vietnamese-money | giao ChatGPT GV-13 |
| 129 | g3/likelihood-of-an-event | giao ChatGPT GV-13 |
| 130 | g3/missing-numbers-add-subtract | giao ChatGPT GV-13 |
| 131 | g3/missing-numbers-multiply-divide | giao ChatGPT GV-13 |
| 132 | g3/multiply-2-digit-by-1-digit | giao ChatGPT GV-13 |
| 133 | g3/multiply-4-digit-by-1-digit | giao ChatGPT GV-13 |
| 134 | g3/nine-times-table | giao ChatGPT GV-13 |
| 135 | g3/perimeter-of-shapes | giao ChatGPT GV-13 |
| 136 | g3/right-angles | giao ChatGPT GV-13 |
| 137 | g3/rounding-thousands-ten-thousands | giao ChatGPT GV-13 |
| 138 | g3/seven-times-table | giao ChatGPT GV-14 |
| 139 | g3/six-times-table | giao ChatGPT GV-14 |
| 140 | g3/three-times-table | giao ChatGPT GV-14 |
| 141 | g3/triangles-quadrilaterals-rectangles | giao ChatGPT GV-14 |
| 142 | g3/unit-fractions | giao ChatGPT GV-14 |
| 143 | g4/basic-property-of-fractions | giao ChatGPT GV-15 |
| 144 | g4/event-frequency | giao ChatGPT GV-15 |
| 145 | g4/finding-the-mean | giao ChatGPT GV-15 |
| 146 | g4/fractions-and-division | giao ChatGPT GV-15 |
| 147 | g4/g4-bar-charts | giao ChatGPT GV-15 |
| 148 | g4/odd-and-even-numbers | giao ChatGPT GV-15 |
| 149 | g4/review-calculations-to-100000 | giao ChatGPT GV-15 |
| 150 | g4/review-numbers-to-100000 | giao ChatGPT GV-15 |
| 151 | g4/square-dm-m-mm | giao ChatGPT GV-15 |
| 152 | g4/statistical-data-lists | giao ChatGPT GV-15 |
| 153 | g4/unitary-method | giao ChatGPT GV-16 |
| 154 | g4/what-is-a-fraction | giao ChatGPT GV-16 |
| 155 | g5/adding-decimals | giao ChatGPT GV-16 |
| 156 | g5/g5-practice-paper-1 | giao ChatGPT GV-16 |
| 157 | g5/g5-review-decimals-percent | giao ChatGPT GV-16 |
| 158 | g5/one-number-as-percentage | giao ChatGPT GV-16 |
| 159 | g5/organising-data | giao ChatGPT GV-16 |
| 160 | g5/percentage-of-an-amount | giao ChatGPT GV-16 |
| 161 | g5/review-natural-number-operations | giao ChatGPT GV-16 |
| 162 | g5/subtracting-decimals | giao ChatGPT GV-16 |
| 163 | g5/surface-area-of-a-cube | giao ChatGPT GV-17 |
| 164 | g5/surface-area-of-a-cuboid | giao ChatGPT GV-17 |
| 165 | g5/volume-of-a-cuboid | giao ChatGPT GV-17 |
| 166 | g7/intro-to-probability | giao ChatGPT GV-17 |
| 167 | g7/medians-angle-bisectors | giao ChatGPT GV-17 |
| 168 | g8/linear-functions-graphs | giao ChatGPT GV-18 |
| 169 | g8/monomials | giao ChatGPT GV-18 |
| 170 | g11/multiplication-rule | giao ChatGPT GV-18 |
| 171 | g11/perpendicular-planes | giao ChatGPT GV-18 |
| 172 | exams/act/act-algebra-functions | giao ChatGPT GV-18 |
| 173 | exams/act/act-geometry | giao ChatGPT GV-18 |
| 174 | exams/act/act-modelling-integrating | giao ChatGPT GV-18 |
| 175 | exams/act/act-number-quantity | giao ChatGPT GV-18 |
| 176 | exams/act/act-overview | giao ChatGPT GV-18 |
| 177 | exams/act/act-practice-test-1 | giao ChatGPT GV-19 |
| 178 | exams/act/act-statistics-probability | giao ChatGPT GV-19 |
| 179 | exams/ap-calculus/apcalc-accumulation-ftc | giao ChatGPT GV-19 |
| 180 | exams/ap-calculus/apcalc-analytical-applications | giao ChatGPT GV-19 |
| 181 | exams/ap-calculus/apcalc-area-volume | giao ChatGPT GV-19 |
| 182 | exams/ap-calculus/apcalc-bc-parametric-polar | giao ChatGPT GV-19 |
| 183 | exams/ap-calculus/apcalc-bc-series | giao ChatGPT GV-19 |
| 184 | exams/ap-calculus/apcalc-contextual-applications | giao ChatGPT GV-19 |
| 185 | exams/ap-calculus/apcalc-differential-equations | giao ChatGPT GV-19 |
| 186 | exams/ap-calculus/apcalc-differentiation-rules | giao ChatGPT GV-19 |
| 187 | exams/ap-calculus/apcalc-frq-strategies | giao ChatGPT GV-20 |
| 188 | exams/ap-calculus/apcalc-implicit-inverse | giao ChatGPT GV-20 |
| 189 | exams/ap-calculus/apcalc-integration-techniques | giao ChatGPT GV-20 |
| 190 | exams/ap-calculus/apcalc-limits-continuity | giao ChatGPT GV-20 |
| 191 | exams/ap-calculus/apcalc-overview | giao ChatGPT GV-20 |
| 192 | exams/ap-calculus/apcalc-practice-exam-ab | giao ChatGPT GV-20 |
| 193 | exams/ap-calculus/apcalc-practice-exam-bc | giao ChatGPT GV-20 |
| 194 | exams/ap-precalculus/apprecalc-frq-strategies | giao ChatGPT GV-21 |
| 195 | exams/ap-precalculus/apprecalc-logarithms-semilog | giao ChatGPT GV-21 |
| 196 | exams/ap-precalculus/apprecalc-overview | giao ChatGPT GV-21 |
| 197 | exams/ap-precalculus/apprecalc-practice-exam-1 | giao ChatGPT GV-21 |
| 198 | exams/ap-precalculus/apprecalc-rates-polynomials | giao ChatGPT GV-21 |
| 199 | exams/ap-precalculus/apprecalc-rational-transformations | giao ChatGPT GV-21 |
| 200 | exams/ap-precalculus/apprecalc-sequences-exponentials | giao ChatGPT GV-21 |
| 201 | exams/ap-precalculus/apprecalc-trig-equations-polar | giao ChatGPT GV-21 |
| 202 | exams/ap-precalculus/apprecalc-trig-functions-modelling | giao ChatGPT GV-21 |
| 203 | exams/ap-statistics/apstats-one-variable-data | giao ChatGPT GV-22 |
| 204 | exams/ap-statistics/apstats-overview | giao ChatGPT GV-22 |
| 205 | exams/ap-statistics/apstats-two-variable-regression | giao ChatGPT GV-22 |
| 206 | exams/ib-aa/ibaa-calculus | giao ChatGPT GV-22 |
| 207 | exams/ib-aa/ibaa-functions | giao ChatGPT GV-22 |
| 208 | exams/ib-aa/ibaa-geometry-trigonometry | giao ChatGPT GV-22 |
| 209 | exams/ib-aa/ibaa-hl-complex-proof | giao ChatGPT GV-22 |
| 210 | exams/ib-aa/ibaa-hl-further-calculus | giao ChatGPT GV-22 |
| 211 | exams/ib-aa/ibaa-hl-vectors | giao ChatGPT GV-22 |
| 212 | exams/ib-aa/ibaa-number-algebra | giao ChatGPT GV-22 |
| 213 | exams/ib-aa/ibaa-overview | giao ChatGPT GV-23 |
| 214 | exams/ib-aa/ibaa-paper3-exploration | giao ChatGPT GV-23 |
| 215 | exams/ib-aa/ibaa-practice-paper-hl | giao ChatGPT GV-23 |
| 216 | exams/ib-aa/ibaa-practice-paper-sl | giao ChatGPT GV-23 |
| 217 | exams/ib-aa/ibaa-statistics-probability | giao ChatGPT GV-23 |
| 218 | exams/sat/sat-area-volume-lines-angles | giao ChatGPT GV-24 |
| 219 | exams/sat/sat-desmos-strategies | giao ChatGPT GV-24 |
| 220 | exams/sat/sat-equivalent-expressions | giao ChatGPT GV-24 |
| 221 | exams/sat/sat-exponential-functions | giao ChatGPT GV-24 |
| 222 | exams/sat/sat-linear-equations-systems | giao ChatGPT GV-24 |
| 223 | exams/sat/sat-linear-functions-inequalities | giao ChatGPT GV-24 |
| 224 | exams/sat/sat-overview | giao ChatGPT GV-24 |
| 225 | exams/sat/sat-practice-test-1 | giao ChatGPT GV-24 |
| 226 | exams/sat/sat-practice-test-2 | giao ChatGPT GV-24 |
| 227 | exams/sat/sat-quadratics-nonlinear | giao ChatGPT GV-24 |
| 228 | exams/sat/sat-ratios-percentages-units | giao ChatGPT GV-25 |
| 229 | exams/sat/sat-statistics-probability | giao ChatGPT GV-25 |
| 230 | exams/sat/sat-triangles-trig-circles | giao ChatGPT GV-25 |
| 231 | exams/study-skills/calculator-skills | giao ChatGPT GV-25 |
| 232 | exams/study-skills/calm-under-pressure | giao ChatGPT GV-25 |
| 233 | exams/study-skills/error-log | giao ChatGPT GV-25 |
| 234 | exams/study-skills/evidence-based-revision | giao ChatGPT GV-25 |
| 235 | exams/study-skills/exam-day-strategy | giao ChatGPT GV-25 |
| 236 | exams/study-skills/revision-plan | giao ChatGPT GV-25 |