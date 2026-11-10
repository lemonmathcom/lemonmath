# Phân công viết bài Lemonmath (bản thống nhất, 10/11/2026)

Thay toàn bộ phân công cũ (mã 001–374). Danh sách lấy tự động từ `data/curriculum.json`: còn **294 bài song ngữ** chưa có trên web, đánh mã mới **B001–B294**.

Sức viết: 11 tài khoản Claude Free (mỗi tài khoản 1 phần) + 1 ChatGPT Plus (khoảng 3 phần) = 14 phần, mỗi phần khoảng 21 bài. Mỗi tài khoản nhận một khối bài liền nhau, cùng lớp và cùng chương để văn phong thống nhất.

| Tài khoản | Số bài | Lớp | Mã | File giao việc |
|---|---|---|---|---|
| Kinangtoan | 21 | lớp 1, lớp 2 | B001–B021 | `00-Kinangtoan.txt` |
| Alexnguyen122222 | 21 | lớp 2, lớp 3 | B022–B042 | `01-Alexnguyen122222.txt` |
| thichgiaitoan | 21 | lớp 3 | B043–B063 | `02-thichgiaitoan.txt` |
| Lemonmath.com | 21 | lớp 4 | B064–B084 | `03-Lemonmath.com.txt` |
| Vinax.vn | 21 | lớp 4, lớp 5 | B085–B105 | `04-Vinax.vn.txt` |
| Nguyenchanh2358 | 21 | lớp 5 | B106–B126 | `05-Nguyenchanh2358.txt` |
| ChatGPT-Plus | 63 | lớp 5, lớp 6, lớp 7 | B127–B189 | `06-ChatGPT-Plus.txt` |
| Vinax258 | 21 | lớp 7 | B190–B210 | `07-Vinax258.txt` |
| Vimus2358 | 21 | lớp 7, lớp 8 | B211–B231 | `08-Vimus2358.txt` |
| Lemonmath112 | 21 | lớp 8 | B232–B252 | `09-Lemonmath112.txt` |
| Xedap102 | 21 | lớp 9, lớp 11 | B253–B273 | `10-Xedap102.txt` |
| Tai-khoan-11 | 21 | lớp 11 | B274–B294 | `11-Tai-khoan-11.txt` |

## Cách giao
- Mỗi lần dán cho một tài khoản: nội dung file `.txt` của tài khoản đó (từ đầu đến hết **một đợt**), kèm 4 file trong thư mục `dinh-kem/`: WRITING-SPEC.md, GLOSSARY.md và cặp bài mẫu đúng cấp (tiểu học / THCS / THPT).
- Claude Free: mỗi đợt 7 bài (khoảng 2–3 bài mỗi ngày). ChatGPT Plus: mỗi đợt 21 bài.
- Bài nộp về: tải file .md về một thư mục rồi gửi cho tài khoản Pro (đính kèm vào chat). Pro chạy `tools/qa/intake.py`, kiểm tra và đăng lên web.

## Danh sách đầy đủ

| Mã | Lớp | id | Tên bài | Tài khoản |
|---|---|---|---|---|
| B001 | 1 | hundred-square | Bảng các số từ 1 đến 100 | Kinangtoan |
| B002 | 1 | longer-and-shorter | Dài hơn, ngắn hơn | Kinangtoan |
| B003 | 1 | units-of-length | Đơn vị đo độ dài | Kinangtoan |
| B004 | 1 | time-to-the-hour | Xem giờ đúng trên đồng hồ | Kinangtoan |
| B005 | 1 | days-of-the-week | Các ngày trong tuần | Kinangtoan |
| B006 | 2 | number-line-before-after | Tia số. Số liền trước, số liền sau | Kinangtoan |
| B007 | 2 | parts-of-addition-subtraction | Các thành phần của phép cộng, phép trừ | Kinangtoan |
| B008 | 2 | how-many-more-or-fewer | Hơn, kém nhau bao nhiêu | Kinangtoan |
| B009 | 2 | addition-facts-crossing-10 | Bảng cộng (qua 10) | Kinangtoan |
| B010 | 2 | adding-on-taking-away-problems | Bài toán về thêm, bớt một số đơn vị | Kinangtoan |
| B011 | 2 | subtraction-crossing-10 | Phép trừ (qua 10) trong phạm vi 20 | Kinangtoan |
| B012 | 2 | subtraction-facts-crossing-10 | Bảng trừ (qua 10) | Kinangtoan |
| B013 | 2 | more-fewer-word-problems | Bài toán về nhiều hơn, ít hơn một số đơn vị | Kinangtoan |
| B014 | 2 | kilograms | Ki-lô-gam | Kinangtoan |
| B015 | 2 | litres | Lít | Kinangtoan |
| B016 | 2 | broken-lines-quadrilaterals | Đường gấp khúc. Hình tứ giác | Kinangtoan |
| B017 | 2 | days-hours-minutes | Ngày - giờ, giờ - phút | Kinangtoan |
| B018 | 2 | days-and-months | Ngày - tháng | Kinangtoan |
| B019 | 2 | intro-to-multiplication | Phép nhân | Kinangtoan |
| B020 | 2 | factors-and-products | Thừa số, tích | Kinangtoan |
| B021 | 2 | two-times-table | Bảng nhân 2 | Kinangtoan |
| B022 | 2 | five-times-table | Bảng nhân 5 | Alexnguyen122222 |
| B023 | 2 | intro-to-division | Phép chia | Alexnguyen122222 |
| B024 | 2 | dividend-divisor-quotient | Số bị chia, số chia, thương | Alexnguyen122222 |
| B025 | 2 | division-facts-for-2 | Bảng chia 2 | Alexnguyen122222 |
| B026 | 2 | division-facts-for-5 | Bảng chia 5 | Alexnguyen122222 |
| B027 | 2 | vietnamese-money | Giới thiệu tiền Việt Nam | Alexnguyen122222 |
| B028 | 2 | add-within-1000-no-regrouping | Phép cộng (không nhớ) trong phạm vi 1000 | Alexnguyen122222 |
| B029 | 2 | add-within-1000-regrouping | Phép cộng (có nhớ) trong phạm vi 1000 | Alexnguyen122222 |
| B030 | 2 | subtract-within-1000-no-regrouping | Phép trừ (không nhớ) trong phạm vi 1000 | Alexnguyen122222 |
| B031 | 2 | subtract-within-1000-regrouping | Phép trừ (có nhớ) trong phạm vi 1000 | Alexnguyen122222 |
| B032 | 2 | collecting-sorting-tallying | Thu thập, phân loại, kiểm đếm số liệu | Alexnguyen122222 |
| B033 | 2 | g2-pictograms | Biểu đồ tranh | Alexnguyen122222 |
| B034 | 2 | certain-possible-impossible | Chắc chắn, có thể, không thể | Alexnguyen122222 |
| B035 | 3 | scaling-up | Gấp một số lên một số lần | Alexnguyen122222 |
| B036 | 3 | division-with-remainders | Phép chia hết, phép chia có dư | Alexnguyen122222 |
| B037 | 3 | divide-2-digit-by-1-digit | Chia số có hai chữ số cho số có một chữ số | Alexnguyen122222 |
| B038 | 3 | scaling-down | Giảm một số đi một số lần | Alexnguyen122222 |
| B039 | 3 | two-step-problems | Bài toán giải bằng hai bước tính | Alexnguyen122222 |
| B040 | 3 | millimetres | Mi-li-mét | Alexnguyen122222 |
| B041 | 3 | grams | Gam | Alexnguyen122222 |
| B042 | 3 | millilitres | Mi-li-lít | Alexnguyen122222 |
| B043 | 3 | temperature | Nhiệt độ. Đơn vị đo nhiệt độ | thichgiaitoan |
| B044 | 3 | multiply-3-digit-by-1-digit | Nhân số có ba chữ số với số có một chữ số | thichgiaitoan |
| B045 | 3 | divide-3-digit-by-1-digit | Chia số có ba chữ số cho số có một chữ số | thichgiaitoan |
| B046 | 3 | numerical-expressions | Biểu thức số. Tính giá trị của biểu thức số | thichgiaitoan |
| B047 | 3 | how-many-times-larger | So sánh số lớn gấp mấy lần số bé | thichgiaitoan |
| B048 | 3 | four-digit-numbers | Các số có bốn chữ số. Số 10 000 | thichgiaitoan |
| B049 | 3 | comparing-numbers-to-10000 | So sánh các số trong phạm vi 10 000 | thichgiaitoan |
| B050 | 3 | roman-numerals | Làm quen với chữ số La Mã | thichgiaitoan |
| B051 | 3 | rounding-to-tens-hundreds | Làm tròn số đến hàng chục, hàng trăm | thichgiaitoan |
| B052 | 3 | area-square-centimetres | Diện tích của một hình. Xăng-ti-mét vuông | thichgiaitoan |
| B053 | 3 | area-rectangles-squares | Diện tích hình chữ nhật, diện tích hình vuông | thichgiaitoan |
| B054 | 3 | addition-within-10000 | Phép cộng trong phạm vi 10 000 | thichgiaitoan |
| B055 | 3 | subtraction-within-10000 | Phép trừ trong phạm vi 10 000 | thichgiaitoan |
| B056 | 3 | divide-4-digit-by-1-digit | Chia số có bốn chữ số cho số có một chữ số | thichgiaitoan |
| B057 | 3 | five-digit-numbers | Các số có năm chữ số. Số 100 000 | thichgiaitoan |
| B058 | 3 | comparing-numbers-to-100000 | So sánh các số trong phạm vi 100 000 | thichgiaitoan |
| B059 | 3 | addition-within-100000 | Phép cộng trong phạm vi 100 000 | thichgiaitoan |
| B060 | 3 | subtraction-within-100000 | Phép trừ trong phạm vi 100 000 | thichgiaitoan |
| B061 | 3 | clocks-months-years | Xem đồng hồ. Tháng - năm | thichgiaitoan |
| B062 | 3 | multiply-5-digit-by-1-digit | Nhân số có năm chữ số với số có một chữ số | thichgiaitoan |
| B063 | 3 | divide-5-digit-by-1-digit | Chia số có năm chữ số cho số có một chữ số | thichgiaitoan |
| B064 | 4 | expressions-with-letters | Biểu thức chứa chữ | Lemonmath.com |
| B065 | 4 | three-step-problems | Giải bài toán có ba bước tính | Lemonmath.com |
| B066 | 4 | measuring-angles | Đo góc, đơn vị đo góc | Lemonmath.com |
| B067 | 4 | acute-obtuse-straight-angles | Góc nhọn, góc tù, góc bẹt | Lemonmath.com |
| B068 | 4 | six-digit-numbers | Số có sáu chữ số. Số 1 000 000 | Lemonmath.com |
| B069 | 4 | place-value-periods | Hàng và lớp | Lemonmath.com |
| B070 | 4 | numbers-in-the-millions | Các số trong phạm vi lớp triệu | Lemonmath.com |
| B071 | 4 | rounding-hundred-thousands | Làm tròn số đến hàng trăm nghìn | Lemonmath.com |
| B072 | 4 | comparing-large-numbers | So sánh các số có nhiều chữ số | Lemonmath.com |
| B073 | 4 | natural-number-sequence | Làm quen với dãy số tự nhiên | Lemonmath.com |
| B074 | 4 | yen-ta-tonnes | Yến, tạ, tấn | Lemonmath.com |
| B075 | 4 | seconds-and-centuries | Giây, thế kỉ | Lemonmath.com |
| B076 | 4 | adding-large-numbers | Phép cộng các số có nhiều chữ số | Lemonmath.com |
| B077 | 4 | subtracting-large-numbers | Phép trừ các số có nhiều chữ số | Lemonmath.com |
| B078 | 4 | commutative-associative-addition | Tính chất giao hoán và kết hợp của phép cộng | Lemonmath.com |
| B079 | 4 | sum-and-difference-problems | Tìm hai số biết tổng và hiệu của hai số đó | Lemonmath.com |
| B080 | 4 | perpendicular-lines | Hai đường thẳng vuông góc | Lemonmath.com |
| B081 | 4 | parallel-lines | Hai đường thẳng song song | Lemonmath.com |
| B082 | 4 | parallelograms-and-rhombuses | Hình bình hành, hình thoi | Lemonmath.com |
| B083 | 4 | multiply-by-1-digit | Nhân với số có một chữ số | Lemonmath.com |
| B084 | 4 | divide-by-1-digit | Chia cho số có một chữ số | Lemonmath.com |
| B085 | 4 | commutative-associative-multiplication | Tính chất giao hoán và kết hợp của phép nhân | Vinax.vn |
| B086 | 4 | multiply-divide-by-10-100-1000 | Nhân, chia với 10, 100, 1 000, ... | Vinax.vn |
| B087 | 4 | distributive-property | Tính chất phân phối của phép nhân đối với phép cộng | Vinax.vn |
| B088 | 4 | multiply-by-2-digit | Nhân với số có hai chữ số | Vinax.vn |
| B089 | 4 | divide-by-2-digit | Chia cho số có hai chữ số | Vinax.vn |
| B090 | 4 | simplifying-fractions | Rút gọn phân số | Vinax.vn |
| B091 | 4 | common-denominators | Quy đồng mẫu số các phân số | Vinax.vn |
| B092 | 4 | g4-comparing-fractions | So sánh phân số | Vinax.vn |
| B093 | 4 | g4-adding-fractions | Phép cộng phân số | Vinax.vn |
| B094 | 4 | g4-subtracting-fractions | Phép trừ phân số | Vinax.vn |
| B095 | 4 | multiplying-fractions | Phép nhân phân số | Vinax.vn |
| B096 | 4 | dividing-fractions | Phép chia phân số | Vinax.vn |
| B097 | 4 | fraction-of-an-amount | Tìm phân số của một số | Vinax.vn |
| B098 | 5 | review-natural-numbers | Ôn tập số tự nhiên | Vinax.vn |
| B099 | 5 | review-fractions | Ôn tập phân số | Vinax.vn |
| B100 | 5 | decimal-fractions | Phân số thập phân | Vinax.vn |
| B101 | 5 | review-fraction-operations | Ôn tập các phép tính với phân số | Vinax.vn |
| B102 | 5 | add-subtract-unlike-fractions | Cộng, trừ hai phân số khác mẫu số | Vinax.vn |
| B103 | 5 | mixed-numbers | Hỗn số | Vinax.vn |
| B104 | 5 | review-geometry-measures | Ôn tập hình học và đo lường | Vinax.vn |
| B105 | 5 | introducing-decimals | Khái niệm số thập phân | Vinax.vn |
| B106 | 5 | g5-comparing-decimals | So sánh các số thập phân | Nguyenchanh2358 |
| B107 | 5 | measures-as-decimals | Viết số đo đại lượng dưới dạng số thập phân | Nguyenchanh2358 |
| B108 | 5 | g5-rounding-decimals | Làm tròn số thập phân | Nguyenchanh2358 |
| B109 | 5 | square-kilometres-hectares | Ki-lô-mét vuông. Héc-ta | Nguyenchanh2358 |
| B110 | 5 | units-of-area | Các đơn vị đo diện tích | Nguyenchanh2358 |
| B111 | 5 | multiplying-decimals | Phép nhân số thập phân | Nguyenchanh2358 |
| B112 | 5 | dividing-decimals | Phép chia số thập phân | Nguyenchanh2358 |
| B113 | 5 | decimals-by-powers-of-ten | Nhân, chia số thập phân với 10; 100; 1000;... hoặc với 0,1; 0,01; 0,001; ... | Nguyenchanh2358 |
| B114 | 5 | area-of-a-triangle | Hình tam giác. Diện tích hình tam giác | Nguyenchanh2358 |
| B115 | 5 | area-of-a-trapezium | Hình thang. Diện tích hình thang | Nguyenchanh2358 |
| B116 | 5 | circumference-area-circle | Đường tròn. Chu vi và diện tích hình tròn | Nguyenchanh2358 |
| B117 | 5 | ratios-and-percentages | Tỉ số. Tỉ số phần trăm | Nguyenchanh2358 |
| B118 | 5 | map-scales | Tỉ lệ bản đồ và ứng dụng | Nguyenchanh2358 |
| B119 | 5 | sum-and-ratio-problems | Tìm hai số khi biết tổng và tỉ số của hai số đó | Nguyenchanh2358 |
| B120 | 5 | difference-and-ratio-problems | Tìm hai số khi biết hiệu và tỉ số của hai số đó | Nguyenchanh2358 |
| B121 | 5 | using-a-calculator | Máy tính cầm tay | Nguyenchanh2358 |
| B122 | 5 | volume-of-a-shape | Thể tích của một hình | Nguyenchanh2358 |
| B123 | 5 | cubic-centimetres-decimetres | Xăng-ti-mét khối. Đề-xi-mét khối | Nguyenchanh2358 |
| B124 | 5 | cubic-metres | Mét khối | Nguyenchanh2358 |
| B125 | 5 | nets-of-solids | Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ | Nguyenchanh2358 |
| B126 | 5 | volume-of-a-cube | Thể tích của hình lập phương | Nguyenchanh2358 |
| B127 | 5 | units-of-time | Các đơn vị đo thời gian | ChatGPT-Plus |
| B128 | 5 | adding-subtracting-times | Cộng, trừ số đo thời gian | ChatGPT-Plus |
| B129 | 5 | multiplying-dividing-times | Nhân, chia số đo thời gian với một số | ChatGPT-Plus |
| B130 | 5 | speed-uniform-motion | Vận tốc của một chuyển động đều | ChatGPT-Plus |
| B131 | 5 | distance-time-uniform-motion | Quãng đường, thời gian của một chuyển động đều | ChatGPT-Plus |
| B132 | 5 | g5-pie-charts | Biểu đồ hình quạt tròn | ChatGPT-Plus |
| B133 | 5 | g5-relative-frequency | Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện | ChatGPT-Plus |
| B134 | 5 | g5-review-numbers-fractions | Ôn tập: số tự nhiên và phân số | ChatGPT-Plus |
| B135 | 5 | g5-review-geometry-measures | Ôn tập: hình học và đo lường | ChatGPT-Plus |
| B136 | 5 | g5-review-motion-word-problems | Ôn tập: chuyển động đều và toán có lời văn | ChatGPT-Plus |
| B137 | 5 | g5-practice-paper-2 | Đề ôn tập cuối cấp tiểu học số 2 | ChatGPT-Plus |
| B138 | 6 | intro-to-sets | Tập hợp | ChatGPT-Plus |
| B139 | 6 | writing-natural-numbers | Cách ghi số tự nhiên | ChatGPT-Plus |
| B140 | 6 | ordering-natural-numbers | Thứ tự trong tập hợp các số tự nhiên | ChatGPT-Plus |
| B141 | 6 | add-subtract-natural-numbers | Phép cộng và phép trừ số tự nhiên | ChatGPT-Plus |
| B142 | 6 | multiply-divide-natural-numbers | Phép nhân và phép chia số tự nhiên | ChatGPT-Plus |
| B143 | 6 | powers-natural-exponents | Lũy thừa với số mũ tự nhiên | ChatGPT-Plus |
| B144 | 6 | order-of-operations | Thứ tự thực hiện các phép tính | ChatGPT-Plus |
| B145 | 6 | divisibility-and-properties | Quan hệ chia hết và tính chất | ChatGPT-Plus |
| B146 | 6 | divisibility-rules | Dấu hiệu chia hết | ChatGPT-Plus |
| B147 | 6 | prime-numbers | Số nguyên tố | ChatGPT-Plus |
| B148 | 6 | highest-common-factor | Ước chung. Ước chung lớn nhất | ChatGPT-Plus |
| B149 | 6 | lowest-common-multiple | Bội chung. Bội chung nhỏ nhất | ChatGPT-Plus |
| B150 | 6 | set-of-integers | Tập hợp các số nguyên | ChatGPT-Plus |
| B151 | 6 | add-subtract-integers | Phép cộng và phép trừ số nguyên | ChatGPT-Plus |
| B152 | 6 | bracket-rules | Quy tắc dấu ngoặc | ChatGPT-Plus |
| B153 | 6 | multiplying-integers | Phép nhân số nguyên | ChatGPT-Plus |
| B154 | 6 | integer-factors-multiples | Phép chia hết. Ước và bội của một số nguyên | ChatGPT-Plus |
| B155 | 6 | triangles-squares-hexagons | Hình tam giác đều. Hình vuông. Hình lục giác đều | ChatGPT-Plus |
| B156 | 6 | special-quadrilaterals | Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân | ChatGPT-Plus |
| B157 | 6 | quadrilateral-perimeter-area | Chu vi và diện tích của một số tứ giác đã học | ChatGPT-Plus |
| B158 | 6 | line-symmetry | Hình có trục đối xứng | ChatGPT-Plus |
| B159 | 6 | point-symmetry | Hình có tâm đối xứng | ChatGPT-Plus |
| B160 | 6 | g6-equivalent-fractions | Mở rộng phân số. Phân số bằng nhau | ChatGPT-Plus |
| B161 | 6 | comparing-fractions-mixed-numbers | So sánh phân số. Hỗn số dương | ChatGPT-Plus |
| B162 | 6 | g6-add-subtract-fractions | Phép cộng và phép trừ phân số | ChatGPT-Plus |
| B163 | 6 | g6-multiply-divide-fractions | Phép nhân và phép chia phân số | ChatGPT-Plus |
| B164 | 6 | two-fraction-problems | Hai bài toán về phân số | ChatGPT-Plus |
| B165 | 6 | decimal-numbers | Số thập phân | ChatGPT-Plus |
| B166 | 6 | calculating-with-decimals | Tính toán với số thập phân | ChatGPT-Plus |
| B167 | 6 | rounding-and-estimating | Làm tròn và ước lượng | ChatGPT-Plus |
| B168 | 6 | ratio-percentage-problems | Một số bài toán về tỉ số và tỉ số phần trăm | ChatGPT-Plus |
| B169 | 6 | points-and-lines | Điểm và đường thẳng | ChatGPT-Plus |
| B170 | 6 | points-between-rays | Điểm nằm giữa hai điểm. Tia | ChatGPT-Plus |
| B171 | 6 | line-segments | Đoạn thẳng. Độ dài đoạn thẳng | ChatGPT-Plus |
| B172 | 6 | midpoint-of-a-segment | Trung điểm của đoạn thẳng | ChatGPT-Plus |
| B173 | 6 | intro-to-angles | Góc | ChatGPT-Plus |
| B174 | 6 | angle-measure | Số đo góc | ChatGPT-Plus |
| B175 | 6 | data-collection | Dữ liệu và thu thập dữ liệu | ChatGPT-Plus |
| B176 | 6 | tables-and-pictograms | Bảng thống kê và biểu đồ tranh | ChatGPT-Plus |
| B177 | 6 | g6-bar-charts | Biểu đồ cột | ChatGPT-Plus |
| B178 | 6 | dual-bar-charts | Biểu đồ cột kép | ChatGPT-Plus |
| B179 | 6 | outcomes-and-events | Kết quả có thể và sự kiện trong trò chơi, thí nghiệm | ChatGPT-Plus |
| B180 | 6 | experimental-probability | Xác suất thực nghiệm | ChatGPT-Plus |
| B181 | 7 | set-of-rational-numbers | Tập hợp các số hữu tỉ | ChatGPT-Plus |
| B182 | 7 | rational-number-operations | Cộng, trừ, nhân, chia số hữu tỉ | ChatGPT-Plus |
| B183 | 7 | powers-of-rational-numbers | Lũy thừa với số mũ tự nhiên của một số hữu tỉ | ChatGPT-Plus |
| B184 | 7 | operations-and-transposition | Thứ tự thực hiện các phép tính. Quy tắc chuyển vế | ChatGPT-Plus |
| B185 | 7 | recurring-decimals | Làm quen với số thập phân vô hạn tuần hoàn | ChatGPT-Plus |
| B186 | 7 | irrational-numbers-square-roots | Số vô tỉ. Căn bậc hai số học | ChatGPT-Plus |
| B187 | 7 | set-of-real-numbers | Tập hợp các số thực | ChatGPT-Plus |
| B188 | 7 | angle-pairs-bisectors | Góc ở vị trí đặc biệt. Tia phân giác của một góc | ChatGPT-Plus |
| B189 | 7 | identifying-parallel-lines | Hai đường thẳng song song và dấu hiệu nhận biết | ChatGPT-Plus |
| B190 | 7 | euclids-parallel-postulate | Tiên đề Euclid. Tính chất của hai đường thẳng song song | Vinax258 |
| B191 | 7 | theorems-and-proofs | Định lí và chứng minh định lí | Vinax258 |
| B192 | 7 | triangle-angle-sum | Tổng các góc trong một tam giác | Vinax258 |
| B193 | 7 | congruent-triangles-sss | Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác | Vinax258 |
| B194 | 7 | congruence-sas-asa | Trường hợp bằng nhau thứ hai và thứ ba của tam giác | Vinax258 |
| B195 | 7 | right-triangle-congruence | Các trường hợp bằng nhau của tam giác vuông | Vinax258 |
| B196 | 7 | isosceles-perpendicular-bisector | Tam giác cân. Đường trung trực của đoạn thẳng | Vinax258 |
| B197 | 7 | g7-collecting-classifying-data | Thu thập và phân loại dữ liệu | Vinax258 |
| B198 | 7 | g7-pie-charts | Biểu đồ hình quạt tròn | Vinax258 |
| B199 | 7 | line-graphs | Biểu đồ đoạn thẳng | Vinax258 |
| B200 | 7 | proportions | Tỉ lệ thức | Vinax258 |
| B201 | 7 | equal-ratios-property | Tính chất của dãy tỉ số bằng nhau | Vinax258 |
| B202 | 7 | direct-proportion | Đại lượng tỉ lệ thuận | Vinax258 |
| B203 | 7 | inverse-proportion | Đại lượng tỉ lệ nghịch | Vinax258 |
| B204 | 7 | algebraic-expressions | Biểu thức đại số | Vinax258 |
| B205 | 7 | polynomials-one-variable | Đa thức một biến | Vinax258 |
| B206 | 7 | g7-add-subtract-polynomials | Phép cộng và phép trừ đa thức một biến | Vinax258 |
| B207 | 7 | g7-multiplying-polynomials | Phép nhân đa thức một biến | Vinax258 |
| B208 | 7 | dividing-polynomials | Phép chia đa thức một biến | Vinax258 |
| B209 | 7 | intro-to-events | Làm quen với biến cố | Vinax258 |
| B210 | 7 | angles-and-opposite-sides | Quan hệ giữa góc và cạnh đối diện trong một tam giác | Vinax258 |
| B211 | 7 | perpendicular-and-oblique-lines | Quan hệ giữa đường vuông góc và đường xiên | Vimus2358 |
| B212 | 7 | triangle-inequality | Quan hệ giữa ba cạnh của một tam giác | Vimus2358 |
| B213 | 7 | perpendicular-bisectors-altitudes | Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác | Vimus2358 |
| B214 | 7 | g7-cuboids-and-cubes | Hình hộp chữ nhật và hình lập phương | Vimus2358 |
| B215 | 7 | right-prisms | Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác | Vimus2358 |
| B216 | 8 | polynomials-several-variables | Đa thức | Vimus2358 |
| B217 | 8 | g8-add-subtract-polynomials | Phép cộng và phép trừ đa thức | Vimus2358 |
| B218 | 8 | g8-multiplying-polynomials | Phép nhân đa thức | Vimus2358 |
| B219 | 8 | dividing-polynomial-by-monomial | Phép chia đa thức cho đơn thức | Vimus2358 |
| B220 | 8 | squares-identities | Hiệu hai bình phương. Bình phương của một tổng hay một hiệu | Vimus2358 |
| B221 | 8 | cubes-of-sums-differences | Lập phương của một tổng. Lập phương của một hiệu | Vimus2358 |
| B222 | 8 | sum-difference-of-cubes | Tổng và hiệu hai lập phương | Vimus2358 |
| B223 | 8 | factorising-polynomials | Phân tích đa thức thành nhân tử | Vimus2358 |
| B224 | 8 | quadrilaterals | Tứ giác | Vimus2358 |
| B225 | 8 | isosceles-trapeziums | Hình thang cân | Vimus2358 |
| B226 | 8 | parallelograms | Hình bình hành | Vimus2358 |
| B227 | 8 | rectangles | Hình chữ nhật | Vimus2358 |
| B228 | 8 | rhombuses-and-squares | Hình thoi và hình vuông | Vimus2358 |
| B229 | 8 | thales-theorem-triangle | Định lí Thalès trong tam giác | Vimus2358 |
| B230 | 8 | triangle-midline | Đường trung bình của tam giác | Vimus2358 |
| B231 | 8 | angle-bisector-theorem | Tính chất đường phân giác của tam giác | Vimus2358 |
| B232 | 8 | g8-collecting-classifying-data | Thu thập và phân loại dữ liệu | Lemonmath112 |
| B233 | 8 | tables-and-charts | Biểu diễn dữ liệu bằng bảng, biểu đồ | Lemonmath112 |
| B234 | 8 | analysing-charts | Phân tích số liệu thống kê dựa vào biểu đồ | Lemonmath112 |
| B235 | 8 | intro-algebraic-fractions | Phân thức đại số | Lemonmath112 |
| B236 | 8 | basic-property-algebraic-fractions | Tính chất cơ bản của phân thức đại số | Lemonmath112 |
| B237 | 8 | add-subtract-algebraic-fractions | Phép cộng và phép trừ phân thức đại số | Lemonmath112 |
| B238 | 8 | multiply-divide-algebraic-fractions | Phép nhân và phép chia phân thức đại số | Lemonmath112 |
| B239 | 8 | linear-equations-one-unknown | Phương trình bậc nhất một ẩn | Lemonmath112 |
| B240 | 8 | g8-equation-word-problems | Giải bài toán bằng cách lập phương trình | Lemonmath112 |
| B241 | 8 | intro-functions-graphs | Khái niệm hàm số và đồ thị của hàm số | Lemonmath112 |
| B242 | 8 | gradient-of-a-line | Hệ số góc của đường thẳng | Lemonmath112 |
| B243 | 8 | possible-favourable-outcomes | Kết quả có thể và kết quả thuận lợi | Lemonmath112 |
| B244 | 8 | probability-as-a-ratio | Cách tính xác suất của biến cố bằng tỉ số | Lemonmath112 |
| B245 | 8 | experimental-theoretical-probability | Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng | Lemonmath112 |
| B246 | 8 | similar-triangles | Hai tam giác đồng dạng | Lemonmath112 |
| B247 | 8 | triangle-similarity-conditions | Ba trường hợp đồng dạng của hai tam giác | Lemonmath112 |
| B248 | 8 | pythagoras-theorem | Định lí Pythagore và ứng dụng | Lemonmath112 |
| B249 | 8 | right-triangle-similarity | Các trường hợp đồng dạng của hai tam giác vuông | Lemonmath112 |
| B250 | 8 | similar-shapes | Hình đồng dạng | Lemonmath112 |
| B251 | 8 | regular-triangular-pyramids | Hình chóp tam giác đều | Lemonmath112 |
| B252 | 8 | square-based-pyramids | Hình chóp tứ giác đều | Lemonmath112 |
| B253 | 9 | entrance-exam-overview | Đề thi vào 10 gồm những gì và cách ôn | Xedap102 |
| B254 | 9 | review-radical-expressions | Chuyên đề: rút gọn biểu thức chứa căn | Xedap102 |
| B255 | 9 | review-quadratic-vieta | Chuyên đề: phương trình bậc hai và định lí Viète | Xedap102 |
| B256 | 9 | review-word-problems-equations | Chuyên đề: giải bài toán bằng cách lập phương trình, hệ phương trình | Xedap102 |
| B257 | 9 | review-parabola-line | Chuyên đề: parabol y = ax² và đường thẳng | Xedap102 |
| B258 | 9 | review-circle-geometry | Chuyên đề: hình học đường tròn | Xedap102 |
| B259 | 9 | review-right-triangle-real-life | Chuyên đề: hệ thức lượng và hình học thực tế | Xedap102 |
| B260 | 9 | review-statistics-probability-g9 | Chuyên đề: thống kê và xác suất | Xedap102 |
| B261 | 9 | practice-paper-grade10-1 | Đề luyện thi vào 10 số 1 | Xedap102 |
| B262 | 9 | practice-paper-grade10-2 | Đề luyện thi vào 10 số 2 | Xedap102 |
| B263 | 9 | practice-paper-grade10-3 | Đề luyện thi vào 10 số 3 | Xedap102 |
| B264 | 11 | angle-trig-values | Giá trị lượng giác của góc lượng giác | Xedap102 |
| B265 | 11 | trig-formulas | Công thức lượng giác | Xedap102 |
| B266 | 11 | trig-function-graphs | Hàm số lượng giác | Xedap102 |
| B267 | 11 | basic-trig-equations | Phương trình lượng giác cơ bản | Xedap102 |
| B268 | 11 | sequences-intro | Dãy số | Xedap102 |
| B269 | 11 | arithmetic-progressions | Cấp số cộng | Xedap102 |
| B270 | 11 | geometric-progressions | Cấp số nhân | Xedap102 |
| B271 | 11 | grouped-data | Mẫu số liệu ghép nhóm | Xedap102 |
| B272 | 11 | grouped-central-tendency | Các số đặc trưng đo xu thế trung tâm | Xedap102 |
| B273 | 11 | lines-planes-space | Đường thẳng và mặt phẳng trong không gian | Xedap102 |
| B274 | 11 | parallel-lines-space | Hai đường thẳng song song | Tai-khoan-11 |
| B275 | 11 | line-plane-parallel | Đường thẳng và mặt phẳng song song | Tai-khoan-11 |
| B276 | 11 | parallel-planes | Hai mặt phẳng song song | Tai-khoan-11 |
| B277 | 11 | parallel-projection | Phép chiếu song song | Tai-khoan-11 |
| B278 | 11 | sequence-limits | Giới hạn của dãy số | Tai-khoan-11 |
| B279 | 11 | function-limits | Giới hạn của hàm số | Tai-khoan-11 |
| B280 | 11 | continuity | Hàm số liên tục | Tai-khoan-11 |
| B281 | 11 | real-exponents | Luỹ thừa với số mũ thực | Tai-khoan-11 |
| B282 | 11 | logarithms | Lôgarit | Tai-khoan-11 |
| B283 | 11 | exp-log-functions | Hàm số mũ và hàm số lôgarit | Tai-khoan-11 |
| B284 | 11 | exp-log-equations | Phương trình, bất phương trình mũ và lôgarit | Tai-khoan-11 |
| B285 | 11 | derivative-definition | Đạo hàm | Tai-khoan-11 |
| B286 | 11 | differentiation-rules | Các quy tắc tính đạo hàm | Tai-khoan-11 |
| B287 | 11 | second-derivative | Đạo hàm cấp hai | Tai-khoan-11 |
| B288 | 11 | perpendicular-lines-space | Hai đường thẳng vuông góc | Tai-khoan-11 |
| B289 | 11 | line-perpendicular-plane | Đường thẳng vuông góc với mặt phẳng | Tai-khoan-11 |
| B290 | 11 | orthogonal-projection-angle | Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng | Tai-khoan-11 |
| B291 | 11 | distances-space | Khoảng cách trong không gian | Tai-khoan-11 |
| B292 | 11 | volumes | Thể tích | Tai-khoan-11 |
| B293 | 11 | union-intersection-events | Biến cố hợp, biến cố giao, biến cố độc lập | Tai-khoan-11 |
| B294 | 11 | addition-rule | Công thức cộng xác suất | Tai-khoan-11 |
