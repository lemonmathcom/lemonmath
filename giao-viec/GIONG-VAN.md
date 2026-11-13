# Viết lại giọng văn (chuẩn 2f – người thầy tâm huyết)

Quyết định 12/11/2026: chủ dự án muốn toàn bộ phần lời (mở bài, giải thích, lập luận, chuyển ý, hộp mẹo/lỗi/tóm tắt) viết lại tự nhiên, thân thiện như một nhà giáo tâm huyết, cả bản Việt và bản Anh; tài khoản Pro tự viết dần, **mỗi ngày 10 bài học** (lịch tự chạy 13h29 và 17h29, mỗi lượt 5 bài).

## Cách làm một bài (giữ nguyên toán)

1. Đọc chuẩn 2f trong `_templates/WRITING-SPEC.md` và bài mẫu `content/*/g10/equation-of-a-line.md` (đã viết lại).
2. Đọc bài bản Việt và bản Anh (phần trước `## Luyện tập` / `## Practice`; phần bài tập chỉ sửa câu dẫn đầu mục).
3. Viết lại các đoạn lời: đoạn mở sau tình huống, đoạn khám phá, các câu chuyển ý, câu dẫn trước ví dụ, đoạn "Vì sao…", các hộp tip/warning (giữ nội dung), thêm 1–2 câu chốt cuối phần Tóm tắt nối lại với câu hỏi đầu bài.
4. KHÔNG đổi: công thức, số liệu, đề, lời giải, cấu trúc hộp, liên kết, hình, bảng thuật ngữ. Hai bản Việt–Anh nói cùng một ý.
5. Áp dụng bằng các cặp thay thế chính xác (old → new), chạy `node tools/check.js <bài>`; xong lô: `node tools/check.js --all && npm run build`, đánh dấu bảng dưới, commit + push.

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
| 17 | g10/quadratic-function |  |
| 18 | g10/scalar-multiplication |  |
| 19 | g10/sets-and-set-operations |  |
| 20 | g10/sign-of-quadratic |  |
| 21 | g10/statements |  |
| 22 | g10/systems-linear-inequalities |  |
| 23 | g10/triangle-relations |  |
| 24 | g10/trig-ratios-0-180 |  |
| 25 | g10/vector-basics |  |
| 26 | g10/vector-sum-difference |  |
| 27 | g10/vectors-in-coordinates |  |
| 28 | g9/acute-angle-trig-ratios |  |
| 29 | g9/arc-length-sector-area |  |
| 30 | g9/arcs-and-chords |  |
| 31 | g9/circumcircle-incircle |  |
| 32 | g9/cube-roots |  |
| 33 | g9/cyclic-quadrilaterals |  |
| 34 | g9/cylinders-and-cones |  |
| 35 | g9/equations-reducible-to-linear |  |
| 36 | g9/event-probability-experiments |  |
| 37 | g9/frequency-tables-charts |  |
| 38 | g9/function-y-equals-ax2 |  |
| 39 | g9/g9-equation-word-problems |  |
| 40 | g9/grouped-frequency-tables |  |
| 41 | g9/inequalities-and-properties |  |
| 42 | g9/inscribed-angles |  |
| 43 | g9/intro-to-circles |  |
| 44 | g9/line-circle-positions |  |
| 45 | g9/linear-inequalities-one-unknown |  |
| 46 | g9/quadratic-equations |  |
| 47 | g9/random-experiments-sample-space |  |
| 48 | g9/regular-polygons |  |
| 49 | g9/relative-frequency-tables |  |
| 50 | g9/right-triangle-side-angle-relations |  |
| 51 | g9/simplifying-root-expressions |  |
| 52 | g9/simultaneous-equation-problems |  |
| 53 | g9/simultaneous-equations-intro |  |
| 54 | g9/solving-simultaneous-equations |  |
| 55 | g9/spheres |  |
| 56 | g9/square-roots-multiply-divide |  |
| 57 | g9/square-roots-radicals |  |
| 58 | g9/two-circle-positions |  |
| 59 | g9/vietes-theorem |  |
| 60 | g12/angle-formulas-space |  |
| 61 | g12/antiderivatives |  |
| 62 | g12/asymptotes |  |
| 63 | g12/conditional-probability-intro |  |
| 64 | g12/coordinate-system-space |  |
| 65 | g12/definite-integrals |  |
| 66 | g12/derivative-real-problems |  |
| 67 | g12/exam-format-strategy |  |
| 68 | g12/graphing-functions |  |
| 69 | g12/grouped-range-iqr |  |
| 70 | g12/grouped-variance-sd |  |
| 71 | g12/integral-applications |  |
| 72 | g12/line-equation-space |  |
| 73 | g12/max-min-values |  |
| 74 | g12/monotonicity-extrema |  |
| 75 | g12/plane-equation |  |
| 76 | g12/practice-paper-thpt-1 |  |
| 77 | g12/practice-paper-thpt-2 |  |
| 78 | g12/practice-paper-thpt-3 |  |
| 79 | g12/practice-paper-thpt-4 |  |
| 80 | g12/review-coordinates-space |  |
| 81 | g12/review-functions-derivatives |  |
| 82 | g12/review-integrals |  |
| 83 | g12/review-optimisation-real-life |  |
| 84 | g12/review-space-geometry |  |
| 85 | g12/review-statistics-probability |  |
| 86 | g12/review-trig-exp-log-sequences |  |
| 87 | g12/sphere-equation |  |
| 88 | g12/total-probability-bayes |  |
| 89 | g12/vector-coordinate-operations |  |
| 90 | g12/vectors-in-space |  |
| 91 | g1/add-1-digit-to-2-digit |  |
| 92 | g1/add-2-digit-numbers |  |
| 93 | g1/addition-subtraction-facts-to-10 |  |
| 94 | g1/addition-within-10 |  |
| 95 | g1/comparing-two-digit-numbers |  |
| 96 | g1/cubes-and-cuboids |  |
| 97 | g1/g1-comparing-numbers |  |
| 98 | g1/more-fewer-same |  |
| 99 | g1/number-bonds |  |
| 100 | g1/numbers-0-to-5 |  |
| 101 | g1/numbers-6-to-10 |  |
| 102 | g1/position-and-direction |  |
| 103 | g1/squares-circles-triangles-rectangles |  |
| 104 | g1/subtract-1-digit-from-2-digit |  |
| 105 | g1/subtract-2-digit-numbers |  |
| 106 | g1/subtraction-within-10 |  |
| 107 | g1/two-digit-numbers |  |
| 108 | g2/addition-crossing-10 |  |
| 109 | g2/comparing-multiples-of-10-100 |  |
| 110 | g2/comparing-three-digit-numbers |  |
| 111 | g2/cylinders-and-spheres |  |
| 112 | g2/decimetres-metres-kilometres |  |
| 113 | g2/multiples-of-10-and-100 |  |
| 114 | g2/ones-tens-hundreds-thousands |  |
| 115 | g2/partitioning-hundreds-tens-ones |  |
| 116 | g2/points-lines-curves |  |
| 117 | g2/regroup-add-1-digit |  |
| 118 | g2/regroup-add-2-digit |  |
| 119 | g2/regroup-subtract-1-digit |  |
| 120 | g2/regroup-subtract-2-digit |  |
| 121 | g2/three-digit-numbers |  |
| 122 | g3/circle-centre-radius-diameter |  |
| 123 | g3/data-tables |  |
| 124 | g3/eight-times-table |  |
| 125 | g3/four-times-table |  |
| 126 | g3/g3-cubes-and-cuboids |  |
| 127 | g3/g3-midpoints |  |
| 128 | g3/g3-vietnamese-money |  |
| 129 | g3/likelihood-of-an-event |  |
| 130 | g3/missing-numbers-add-subtract |  |
| 131 | g3/missing-numbers-multiply-divide |  |
| 132 | g3/multiply-2-digit-by-1-digit |  |
| 133 | g3/multiply-4-digit-by-1-digit |  |
| 134 | g3/nine-times-table |  |
| 135 | g3/perimeter-of-shapes |  |
| 136 | g3/right-angles |  |
| 137 | g3/rounding-thousands-ten-thousands |  |
| 138 | g3/seven-times-table |  |
| 139 | g3/six-times-table |  |
| 140 | g3/three-times-table |  |
| 141 | g3/triangles-quadrilaterals-rectangles |  |
| 142 | g3/unit-fractions |  |
| 143 | g4/basic-property-of-fractions |  |
| 144 | g4/event-frequency |  |
| 145 | g4/finding-the-mean |  |
| 146 | g4/fractions-and-division |  |
| 147 | g4/g4-bar-charts |  |
| 148 | g4/odd-and-even-numbers |  |
| 149 | g4/review-calculations-to-100000 |  |
| 150 | g4/review-numbers-to-100000 |  |
| 151 | g4/square-dm-m-mm |  |
| 152 | g4/statistical-data-lists |  |
| 153 | g4/unitary-method |  |
| 154 | g4/what-is-a-fraction |  |
| 155 | g5/adding-decimals |  |
| 156 | g5/g5-practice-paper-1 |  |
| 157 | g5/g5-review-decimals-percent |  |
| 158 | g5/one-number-as-percentage |  |
| 159 | g5/organising-data |  |
| 160 | g5/percentage-of-an-amount |  |
| 161 | g5/review-natural-number-operations |  |
| 162 | g5/subtracting-decimals |  |
| 163 | g5/surface-area-of-a-cube |  |
| 164 | g5/surface-area-of-a-cuboid |  |
| 165 | g5/volume-of-a-cuboid |  |
| 166 | g7/intro-to-probability |  |
| 167 | g7/medians-angle-bisectors |  |
| 168 | g8/linear-functions-graphs |  |
| 169 | g8/monomials |  |
| 170 | g11/multiplication-rule |  |
| 171 | g11/perpendicular-planes |  |
| 172 | exams/act/act-algebra-functions |  |
| 173 | exams/act/act-geometry |  |
| 174 | exams/act/act-modelling-integrating |  |
| 175 | exams/act/act-number-quantity |  |
| 176 | exams/act/act-overview |  |
| 177 | exams/act/act-practice-test-1 |  |
| 178 | exams/act/act-statistics-probability |  |
| 179 | exams/ap-calculus/apcalc-accumulation-ftc |  |
| 180 | exams/ap-calculus/apcalc-analytical-applications |  |
| 181 | exams/ap-calculus/apcalc-area-volume |  |
| 182 | exams/ap-calculus/apcalc-bc-parametric-polar |  |
| 183 | exams/ap-calculus/apcalc-bc-series |  |
| 184 | exams/ap-calculus/apcalc-contextual-applications |  |
| 185 | exams/ap-calculus/apcalc-differential-equations |  |
| 186 | exams/ap-calculus/apcalc-differentiation-rules |  |
| 187 | exams/ap-calculus/apcalc-frq-strategies |  |
| 188 | exams/ap-calculus/apcalc-implicit-inverse |  |
| 189 | exams/ap-calculus/apcalc-integration-techniques |  |
| 190 | exams/ap-calculus/apcalc-limits-continuity |  |
| 191 | exams/ap-calculus/apcalc-overview |  |
| 192 | exams/ap-calculus/apcalc-practice-exam-ab |  |
| 193 | exams/ap-calculus/apcalc-practice-exam-bc |  |
| 194 | exams/ap-precalculus/apprecalc-frq-strategies |  |
| 195 | exams/ap-precalculus/apprecalc-logarithms-semilog |  |
| 196 | exams/ap-precalculus/apprecalc-overview |  |
| 197 | exams/ap-precalculus/apprecalc-practice-exam-1 |  |
| 198 | exams/ap-precalculus/apprecalc-rates-polynomials |  |
| 199 | exams/ap-precalculus/apprecalc-rational-transformations |  |
| 200 | exams/ap-precalculus/apprecalc-sequences-exponentials |  |
| 201 | exams/ap-precalculus/apprecalc-trig-equations-polar |  |
| 202 | exams/ap-precalculus/apprecalc-trig-functions-modelling |  |
| 203 | exams/ap-statistics/apstats-one-variable-data |  |
| 204 | exams/ap-statistics/apstats-overview |  |
| 205 | exams/ap-statistics/apstats-two-variable-regression |  |
| 206 | exams/ib-aa/ibaa-calculus |  |
| 207 | exams/ib-aa/ibaa-functions |  |
| 208 | exams/ib-aa/ibaa-geometry-trigonometry |  |
| 209 | exams/ib-aa/ibaa-hl-complex-proof |  |
| 210 | exams/ib-aa/ibaa-hl-further-calculus |  |
| 211 | exams/ib-aa/ibaa-hl-vectors |  |
| 212 | exams/ib-aa/ibaa-number-algebra |  |
| 213 | exams/ib-aa/ibaa-overview |  |
| 214 | exams/ib-aa/ibaa-paper3-exploration |  |
| 215 | exams/ib-aa/ibaa-practice-paper-hl |  |
| 216 | exams/ib-aa/ibaa-practice-paper-sl |  |
| 217 | exams/ib-aa/ibaa-statistics-probability |  |
| 218 | exams/sat/sat-area-volume-lines-angles |  |
| 219 | exams/sat/sat-desmos-strategies |  |
| 220 | exams/sat/sat-equivalent-expressions |  |
| 221 | exams/sat/sat-exponential-functions |  |
| 222 | exams/sat/sat-linear-equations-systems |  |
| 223 | exams/sat/sat-linear-functions-inequalities |  |
| 224 | exams/sat/sat-overview |  |
| 225 | exams/sat/sat-practice-test-1 |  |
| 226 | exams/sat/sat-practice-test-2 |  |
| 227 | exams/sat/sat-quadratics-nonlinear |  |
| 228 | exams/sat/sat-ratios-percentages-units |  |
| 229 | exams/sat/sat-statistics-probability |  |
| 230 | exams/sat/sat-triangles-trig-circles |  |
| 231 | exams/study-skills/calculator-skills |  |
| 232 | exams/study-skills/calm-under-pressure |  |
| 233 | exams/study-skills/error-log |  |
| 234 | exams/study-skills/evidence-based-revision |  |
| 235 | exams/study-skills/exam-day-strategy |  |
| 236 | exams/study-skills/revision-plan |  |
