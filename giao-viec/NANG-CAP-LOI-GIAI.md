# Nâng cấp lời giải theo chuẩn 2e (trình bày chi tiết như SGK)

Quyết định 11/11/2026 (phương án 3): tài khoản Pro tự viết lại lời giải lớp 9, lớp 12 và mục Ôn thi; các lớp còn lại giao tài khoản Free theo file trong `giao-viec/nang-cap/`. File nộp về tên `NC-<tài khoản>.md` (thư mục Dropbox "viec da lam"); ghép bằng `python3 tools/qa/upgrade.py apply <file>`, rồi `node tools/check.js --all && npm run build`. Tiến độ: `python3 tools/qa/style-audit.py --list`.

| File giao | Số bài học | Cỡ file | Các bài |
|---|---|---|---|
| nang-cap/NC-00-Kinangtoan.txt | 7 | 36 KB | g7/intro-to-probability, g7/medians-angle-bisectors, g8/linear-functions-graphs, g8/monomials, g10/approximations-errors, g10/binomial-theorem, g10/central-tendency |
| nang-cap/NC-02-thichgiaitoan.txt | 7 | 35 KB | g10/circles, g10/conic-sections, g10/counting-rules, g10/dispersion, g10/dot-product, g10/equation-of-a-line, g10/equations-reducible-quadratic |
| nang-cap/NC-03-Lemonmath.com.txt | 7 | 37 KB | g10/functions, g10/linear-inequality-two-variables, g10/lines-angles-distances, g10/permutations-combinations, g10/probability-practice, g10/quadratic-function, g10/scalar-multiplication |
| nang-cap/NC-04-Vinax.vn.txt | 7 | 41 KB | g10/sets-and-set-operations, g10/sign-of-quadratic, g10/statements, g10/systems-linear-inequalities, g10/triangle-relations, g10/trig-ratios-0-180, g10/vector-basics |
| nang-cap/NC-06-ChatGPT-Plus.txt | 4 | 25 KB | g10/vector-sum-difference, g10/vectors-in-coordinates, g11/multiplication-rule, g11/perpendicular-planes |
| nang-cap/NC-01-Alexnguyen122222.txt | 11 | 30 KB | g1/add-1-digit-to-2-digit, g1/add-2-digit-numbers, g1/addition-subtraction-facts-to-10, g1/addition-within-10, g1/comparing-two-digit-numbers, g1/cubes-and-cuboids, g1/g1-comparing-numbers, g1/more-fewer-same, g1/number-bonds, g1/numbers-0-to-5, g1/numbers-6-to-10 |
| nang-cap/NC-05-Nguyenchanh2358.txt | 11 | 31 KB | g1/position-and-direction, g1/squares-circles-triangles-rectangles, g1/subtract-1-digit-from-2-digit, g1/subtract-2-digit-numbers, g1/subtraction-within-10, g1/two-digit-numbers, g2/addition-crossing-10, g2/comparing-multiples-of-10-100, g2/comparing-three-digit-numbers, g2/cylinders-and-spheres, g2/decimetres-metres-kilometres |
| nang-cap/NC-07-Vinax258.txt | 11 | 36 KB | g2/multiples-of-10-and-100, g2/ones-tens-hundreds-thousands, g2/partitioning-hundreds-tens-ones, g2/points-lines-curves, g2/regroup-add-1-digit, g2/regroup-add-2-digit, g2/regroup-subtract-1-digit, g2/regroup-subtract-2-digit, g2/three-digit-numbers, g3/circle-centre-radius-diameter, g3/data-tables |
| nang-cap/NC-08-Vimus2358.txt | 11 | 41 KB | g3/eight-times-table, g3/four-times-table, g3/g3-cubes-and-cuboids, g3/g3-midpoints, g3/g3-vietnamese-money, g3/likelihood-of-an-event, g3/missing-numbers-add-subtract, g3/missing-numbers-multiply-divide, g3/multiply-2-digit-by-1-digit, g3/multiply-4-digit-by-1-digit, g3/nine-times-table |
| nang-cap/NC-09-Lemonmath112.txt | 11 | 41 KB | g3/perimeter-of-shapes, g3/right-angles, g3/rounding-thousands-ten-thousands, g3/seven-times-table, g3/six-times-table, g3/three-times-table, g3/triangles-quadrilaterals-rectangles, g3/unit-fractions, g4/basic-property-of-fractions, g4/event-frequency, g4/finding-the-mean |
| nang-cap/NC-10-Xedap102.txt | 11 | 41 KB | g4/fractions-and-division, g4/g4-bar-charts, g4/odd-and-even-numbers, g4/review-calculations-to-100000, g4/review-numbers-to-100000, g4/square-dm-m-mm, g4/statistical-data-lists, g4/unitary-method, g4/what-is-a-fraction, g5/adding-decimals, g5/g5-review-decimals-percent |
| nang-cap/NC-11-chanh106.txt | 8 | 27 KB | g5/one-number-as-percentage, g5/organising-data, g5/percentage-of-an-amount, g5/review-natural-number-operations, g5/subtracting-decimals, g5/surface-area-of-a-cube, g5/surface-area-of-a-cuboid, g5/volume-of-a-cuboid |

## Phần tài khoản Pro tự viết

Thứ tự: lớp 9 → lớp 12 → Ôn thi. Mỗi lượt 4–6 bài học; file lời giải đã ghép lưu ở `giao-viec/nang-cap/da-ghep/`.

| Lô | Bài học | Trạng thái |
|---|---|---|
| g9-lo1 | equations-reducible-to-linear, linear-inequalities-one-unknown | xong 11/11/2026 |
