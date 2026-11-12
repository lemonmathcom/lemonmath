# Phân công viết bài Lemonmath (bản thống nhất, 10/11/2026)

Thay toàn bộ phân công cũ (mã 001–374). Danh sách lấy tự động từ `data/curriculum.json`: còn **216 bài song ngữ** chưa có trên web, đánh mã mới **B001–B216**.

Sức viết: 11 tài khoản Claude Free (mỗi tài khoản 1 phần) + 1 ChatGPT Plus (3 phần) = 14 phần. Các bài nhỏ gần nhau đã được gộp (78 bài gộp vào bài khác), nên tổng số bài giảm từ 294 xuống 216. Mỗi tài khoản nhận một khối bài liền nhau, cùng lớp và cùng chương để văn phong thống nhất.

| Tài khoản | Số bài | Lớp | Mã | File giao việc |
|---|---|---|---|---|
| Kinangtoan | 16 | lớp 1, lớp 2 | B001–B016 | `00-Kinangtoan.txt` |
| Alexnguyen122222 | 16 | lớp 2, lớp 3 | B017–B032 | `01-Alexnguyen122222.txt` |
| thichgiaitoan | 16 | lớp 3, lớp 4 | B033–B048 | `02-thichgiaitoan.txt` |
| Lemonmath.com | 16 | lớp 4, lớp 5 | B049–B064 | `03-Lemonmath.com.txt` |
| Vinax.vn | 16 | lớp 5 | B065–B080 | `04-Vinax.vn.txt` |
| Nguyenchanh2358 | 15 | lớp 5, lớp 6 | B081–B095 | `05-Nguyenchanh2358.txt` |
| ChatGPT-Plus | 46 | lớp 6, lớp 7 | B096–B141 | `06-ChatGPT-Plus.txt` |
| Vinax258 | 15 | lớp 7, lớp 8 | B142–B156 | `07-Vinax258.txt` |
| Vimus2358 | 15 | lớp 8 | B157–B171 | `08-Vimus2358.txt` |
| Lemonmath112 | 15 | lớp 8, lớp 9, lớp 11 | B172–B186 | `09-Lemonmath112.txt` |
| Xedap102 | 15 | lớp 11 | B187–B201 | `10-Xedap102.txt` |
| chanh106 | 15 | lớp 11 | B202–B216 | `11-chanh106.txt` |

## Cách giao
- Mỗi lần dán cho một tài khoản: nội dung file `.txt` của tài khoản đó (toàn bộ), kèm 4 file trong thư mục `dinh-kem/`: WRITING-SPEC.md, GLOSSARY.md và cặp bài mẫu đúng cấp (tiểu học / THCS / THPT).
- Mỗi tài khoản chỉ có MỘT file, viết lần lượt từ trên xuống; hết hạn mức thì lần sau nhắn "viết tiếp bài kế". Bài gộp (nhiều nội dung) được ghi chú rõ trong file.
- Bài nộp về: tải file .md về một thư mục rồi gửi cho tài khoản Pro (đính kèm vào chat). Pro chạy `tools/qa/intake.py`, kiểm tra và đăng lên web.

## Danh sách đầy đủ

| Mã | Lớp | id | Tên bài | Tài khoản |
|---|---|---|---|---|
| B001 | 1 | hundred-square | Bảng các số từ 1 đến 100 | Kinangtoan |
| B002 | 1 | longer-and-shorter | Dài hơn, ngắn hơn. Đơn vị đo độ dài | Kinangtoan |
| B003 | 1 | time-to-the-hour | Xem giờ đúng trên đồng hồ. Các ngày trong tuần | Kinangtoan |
| B004 | 2 | number-line-before-after | Tia số. Số liền trước, số liền sau. Các thành phần của phép cộng, phép trừ | Kinangtoan |
| B005 | 2 | how-many-more-or-fewer | Hơn, kém nhau bao nhiêu | Kinangtoan |
| B006 | 2 | addition-facts-crossing-10 | Bảng cộng (qua 10) | Kinangtoan |
| B007 | 2 | adding-on-taking-away-problems | Bài toán về thêm, bớt một số đơn vị. Bài toán về nhiều hơn, ít hơn một số đơn vị | Kinangtoan |
| B008 | 2 | subtraction-crossing-10 | Phép trừ (qua 10) trong phạm vi 20. Bảng trừ (qua 10) | Kinangtoan |
| B009 | 2 | kilograms | Ki-lô-gam. Lít | Kinangtoan |
| B010 | 2 | broken-lines-quadrilaterals | Đường gấp khúc. Hình tứ giác | Kinangtoan |
| B011 | 2 | days-hours-minutes | Ngày - giờ, giờ - phút. Ngày - tháng | Kinangtoan |
| B012 | 2 | intro-to-multiplication | Phép nhân. Thừa số, tích | Kinangtoan |
| B013 | 2 | two-times-table | Bảng nhân 2. Bảng nhân 5 | Kinangtoan |
| B014 | 2 | intro-to-division | Phép chia. Số bị chia, số chia, thương | Kinangtoan |
| B015 | 2 | division-facts-for-2 | Bảng chia 2. Bảng chia 5 | Kinangtoan |
| B016 | 2 | vietnamese-money | Giới thiệu tiền Việt Nam | Kinangtoan |
| B017 | 2 | add-within-1000-no-regrouping | Phép cộng (không nhớ) trong phạm vi 1000. Phép cộng (có nhớ) trong phạm vi 1000 | Alexnguyen122222 |
| B018 | 2 | subtract-within-1000-no-regrouping | Phép trừ (không nhớ) trong phạm vi 1000. Phép trừ (có nhớ) trong phạm vi 1000 | Alexnguyen122222 |
| B019 | 2 | collecting-sorting-tallying | Thu thập, phân loại, kiểm đếm số liệu. Biểu đồ tranh | Alexnguyen122222 |
| B020 | 2 | certain-possible-impossible | Chắc chắn, có thể, không thể | Alexnguyen122222 |
| B021 | 3 | scaling-up | Gấp một số lên một số lần. Giảm một số đi một số lần | Alexnguyen122222 |
| B022 | 3 | division-with-remainders | Phép chia hết, phép chia có dư. Chia số có hai chữ số cho số có một chữ số | Alexnguyen122222 |
| B023 | 3 | two-step-problems | Bài toán giải bằng hai bước tính | Alexnguyen122222 |
| B024 | 3 | millimetres | Mi-li-mét. Gam | Alexnguyen122222 |
| B025 | 3 | millilitres | Mi-li-lít. Nhiệt độ. Đơn vị đo nhiệt độ | Alexnguyen122222 |
| B026 | 3 | multiply-3-digit-by-1-digit | Nhân số có ba chữ số với số có một chữ số. Chia số có ba chữ số cho số có một chữ số | Alexnguyen122222 |
| B027 | 3 | numerical-expressions | Biểu thức số. Tính giá trị của biểu thức số | Alexnguyen122222 |
| B028 | 3 | how-many-times-larger | So sánh số lớn gấp mấy lần số bé | Alexnguyen122222 |
| B029 | 3 | four-digit-numbers | Các số có bốn chữ số. Số 10 000. So sánh các số trong phạm vi 10 000 | Alexnguyen122222 |
| B030 | 3 | roman-numerals | Làm quen với chữ số La Mã | Alexnguyen122222 |
| B031 | 3 | rounding-to-tens-hundreds | Làm tròn số đến hàng chục, hàng trăm | Alexnguyen122222 |
| B032 | 3 | area-square-centimetres | Diện tích của một hình. Xăng-ti-mét vuông. Diện tích hình chữ nhật, diện tích hình vuông | Alexnguyen122222 |
| B033 | 3 | addition-within-10000 | Phép cộng trong phạm vi 10 000. Phép trừ trong phạm vi 10 000 | thichgiaitoan |
| B034 | 3 | divide-4-digit-by-1-digit | Chia số có bốn chữ số cho số có một chữ số | thichgiaitoan |
| B035 | 3 | five-digit-numbers | Các số có năm chữ số. Số 100 000. So sánh các số trong phạm vi 100 000 | thichgiaitoan |
| B036 | 3 | addition-within-100000 | Phép cộng trong phạm vi 100 000. Phép trừ trong phạm vi 100 000 | thichgiaitoan |
| B037 | 3 | clocks-months-years | Xem đồng hồ. Tháng - năm | thichgiaitoan |
| B038 | 3 | multiply-5-digit-by-1-digit | Nhân số có năm chữ số với số có một chữ số. Chia số có năm chữ số cho số có một chữ số | thichgiaitoan |
| B039 | 4 | expressions-with-letters | Biểu thức chứa chữ | thichgiaitoan |
| B040 | 4 | three-step-problems | Giải bài toán có ba bước tính | thichgiaitoan |
| B041 | 4 | measuring-angles | Đo góc, đơn vị đo góc. Góc nhọn, góc tù, góc bẹt | thichgiaitoan |
| B042 | 4 | six-digit-numbers | Số có sáu chữ số. Số 1 000 000. Hàng và lớp | thichgiaitoan |
| B043 | 4 | numbers-in-the-millions | Các số trong phạm vi lớp triệu. So sánh các số có nhiều chữ số | thichgiaitoan |
| B044 | 4 | rounding-hundred-thousands | Làm tròn số đến hàng trăm nghìn. Làm quen với dãy số tự nhiên | thichgiaitoan |
| B045 | 4 | yen-ta-tonnes | Yến, tạ, tấn. Giây, thế kỉ | thichgiaitoan |
| B046 | 4 | adding-large-numbers | Phép cộng các số có nhiều chữ số. Phép trừ các số có nhiều chữ số | thichgiaitoan |
| B047 | 4 | commutative-associative-addition | Tính chất giao hoán và kết hợp của phép cộng | thichgiaitoan |
| B048 | 4 | sum-and-difference-problems | Tìm hai số biết tổng và hiệu của hai số đó | thichgiaitoan |
| B049 | 4 | perpendicular-lines | Hai đường thẳng vuông góc. Hai đường thẳng song song | Lemonmath.com |
| B050 | 4 | parallelograms-and-rhombuses | Hình bình hành, hình thoi | Lemonmath.com |
| B051 | 4 | multiply-by-1-digit | Nhân với số có một chữ số. Chia cho số có một chữ số | Lemonmath.com |
| B052 | 4 | commutative-associative-multiplication | Tính chất giao hoán và kết hợp của phép nhân. Tính chất phân phối của phép nhân đối với phép cộng | Lemonmath.com |
| B053 | 4 | multiply-divide-by-10-100-1000 | Nhân, chia với 10, 100, 1 000, ... | Lemonmath.com |
| B054 | 4 | multiply-by-2-digit | Nhân với số có hai chữ số | Lemonmath.com |
| B055 | 4 | divide-by-2-digit | Chia cho số có hai chữ số | Lemonmath.com |
| B056 | 4 | simplifying-fractions | Rút gọn phân số. Quy đồng mẫu số các phân số | Lemonmath.com |
| B057 | 4 | g4-comparing-fractions | So sánh phân số | Lemonmath.com |
| B058 | 4 | g4-adding-fractions | Phép cộng phân số. Phép trừ phân số | Lemonmath.com |
| B059 | 4 | multiplying-fractions | Phép nhân phân số. Phép chia phân số | Lemonmath.com |
| B060 | 4 | fraction-of-an-amount | Tìm phân số của một số | Lemonmath.com |
| B061 | 5 | review-natural-numbers | Ôn tập số tự nhiên | Lemonmath.com |
| B062 | 5 | review-fractions | Ôn tập phân số | Lemonmath.com |
| B063 | 5 | decimal-fractions | Phân số thập phân | Lemonmath.com |
| B064 | 5 | review-fraction-operations | Ôn tập các phép tính với phân số | Lemonmath.com |
| B065 | 5 | add-subtract-unlike-fractions | Cộng, trừ hai phân số khác mẫu số | Vinax.vn |
| B066 | 5 | mixed-numbers | Hỗn số | Vinax.vn |
| B067 | 5 | review-geometry-measures | Ôn tập hình học và đo lường | Vinax.vn |
| B068 | 5 | introducing-decimals | Khái niệm số thập phân. So sánh các số thập phân | Vinax.vn |
| B069 | 5 | measures-as-decimals | Viết số đo đại lượng dưới dạng số thập phân. Làm tròn số thập phân | Vinax.vn |
| B070 | 5 | square-kilometres-hectares | Ki-lô-mét vuông. Héc-ta. Các đơn vị đo diện tích | Vinax.vn |
| B071 | 5 | multiplying-decimals | Phép nhân số thập phân | Vinax.vn |
| B072 | 5 | dividing-decimals | Phép chia số thập phân | Vinax.vn |
| B073 | 5 | decimals-by-powers-of-ten | Nhân, chia số thập phân với 10; 100; 1000;... hoặc với 0,1; 0,01; 0,001; ... | Vinax.vn |
| B074 | 5 | area-of-a-triangle | Hình tam giác. Diện tích hình tam giác. Hình thang. Diện tích hình thang | Vinax.vn |
| B075 | 5 | circumference-area-circle | Đường tròn. Chu vi và diện tích hình tròn | Vinax.vn |
| B076 | 5 | ratios-and-percentages | Tỉ số. Tỉ số phần trăm. Tỉ lệ bản đồ và ứng dụng | Vinax.vn |
| B077 | 5 | sum-and-ratio-problems | Tìm hai số khi biết tổng và tỉ số của hai số đó. Tìm hai số khi biết hiệu và tỉ số của hai số đó | Vinax.vn |
| B078 | 5 | using-a-calculator | Máy tính cầm tay | Vinax.vn |
| B079 | 5 | volume-of-a-shape | Thể tích của một hình. Xăng-ti-mét khối. Đề-xi-mét khối. Mét khối | Vinax.vn |
| B080 | 5 | nets-of-solids | Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ | Vinax.vn |
| B081 | 5 | volume-of-a-cube | Thể tích của hình lập phương | Nguyenchanh2358 |
| B082 | 5 | units-of-time | Các đơn vị đo thời gian. Cộng, trừ số đo thời gian | Nguyenchanh2358 |
| B083 | 5 | multiplying-dividing-times | Nhân, chia số đo thời gian với một số | Nguyenchanh2358 |
| B084 | 5 | speed-uniform-motion | Vận tốc của một chuyển động đều. Quãng đường, thời gian của một chuyển động đều | Nguyenchanh2358 |
| B085 | 5 | g5-pie-charts | Biểu đồ hình quạt tròn. Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện | Nguyenchanh2358 |
| B086 | 5 | g5-review-numbers-fractions | Ôn tập: số tự nhiên và phân số | Nguyenchanh2358 |
| B087 | 5 | g5-review-geometry-measures | Ôn tập: hình học và đo lường | Nguyenchanh2358 |
| B088 | 5 | g5-review-motion-word-problems | Ôn tập: chuyển động đều và toán có lời văn | Nguyenchanh2358 |
| B089 | 5 | g5-practice-paper-2 | Đề ôn tập cuối cấp tiểu học số 2 | Nguyenchanh2358 |
| B090 | 6 | intro-to-sets | Tập hợp | Nguyenchanh2358 |
| B091 | 6 | writing-natural-numbers | Cách ghi số tự nhiên. Thứ tự trong tập hợp các số tự nhiên | Nguyenchanh2358 |
| B092 | 6 | add-subtract-natural-numbers | Phép cộng và phép trừ số tự nhiên. Phép nhân và phép chia số tự nhiên | Nguyenchanh2358 |
| B093 | 6 | powers-natural-exponents | Lũy thừa với số mũ tự nhiên | Nguyenchanh2358 |
| B094 | 6 | order-of-operations | Thứ tự thực hiện các phép tính | Nguyenchanh2358 |
| B095 | 6 | divisibility-and-properties | Quan hệ chia hết và tính chất. Dấu hiệu chia hết | Nguyenchanh2358 |
| B096 | 6 | prime-numbers | Số nguyên tố | ChatGPT-Plus |
| B097 | 6 | highest-common-factor | Ước chung. Ước chung lớn nhất | ChatGPT-Plus |
| B098 | 6 | lowest-common-multiple | Bội chung. Bội chung nhỏ nhất | ChatGPT-Plus |
| B099 | 6 | set-of-integers | Tập hợp các số nguyên | ChatGPT-Plus |
| B100 | 6 | add-subtract-integers | Phép cộng và phép trừ số nguyên. Quy tắc dấu ngoặc | ChatGPT-Plus |
| B101 | 6 | multiplying-integers | Phép nhân số nguyên. Phép chia hết. Ước và bội của một số nguyên | ChatGPT-Plus |
| B102 | 6 | triangles-squares-hexagons | Hình tam giác đều. Hình vuông. Hình lục giác đều. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân | ChatGPT-Plus |
| B103 | 6 | quadrilateral-perimeter-area | Chu vi và diện tích của một số tứ giác đã học | ChatGPT-Plus |
| B104 | 6 | line-symmetry | Hình có trục đối xứng. Hình có tâm đối xứng | ChatGPT-Plus |
| B105 | 6 | g6-equivalent-fractions | Mở rộng phân số. Phân số bằng nhau | ChatGPT-Plus |
| B106 | 6 | comparing-fractions-mixed-numbers | So sánh phân số. Hỗn số dương | ChatGPT-Plus |
| B107 | 6 | g6-add-subtract-fractions | Phép cộng và phép trừ phân số | ChatGPT-Plus |
| B108 | 6 | g6-multiply-divide-fractions | Phép nhân và phép chia phân số | ChatGPT-Plus |
| B109 | 6 | two-fraction-problems | Hai bài toán về phân số | ChatGPT-Plus |
| B110 | 6 | decimal-numbers | Số thập phân. Tính toán với số thập phân | ChatGPT-Plus |
| B111 | 6 | rounding-and-estimating | Làm tròn và ước lượng | ChatGPT-Plus |
| B112 | 6 | ratio-percentage-problems | Một số bài toán về tỉ số và tỉ số phần trăm | ChatGPT-Plus |
| B113 | 6 | points-and-lines | Điểm và đường thẳng. Điểm nằm giữa hai điểm. Tia | ChatGPT-Plus |
| B114 | 6 | line-segments | Đoạn thẳng. Độ dài đoạn thẳng. Trung điểm của đoạn thẳng | ChatGPT-Plus |
| B115 | 6 | intro-to-angles | Góc. Số đo góc | ChatGPT-Plus |
| B116 | 6 | data-collection | Dữ liệu và thu thập dữ liệu. Bảng thống kê và biểu đồ tranh | ChatGPT-Plus |
| B117 | 6 | g6-bar-charts | Biểu đồ cột. Biểu đồ cột kép | ChatGPT-Plus |
| B118 | 6 | outcomes-and-events | Kết quả có thể và sự kiện trong trò chơi, thí nghiệm. Xác suất thực nghiệm | ChatGPT-Plus |
| B119 | 7 | set-of-rational-numbers | Tập hợp các số hữu tỉ | ChatGPT-Plus |
| B120 | 7 | rational-number-operations | Cộng, trừ, nhân, chia số hữu tỉ | ChatGPT-Plus |
| B121 | 7 | powers-of-rational-numbers | Lũy thừa với số mũ tự nhiên của một số hữu tỉ | ChatGPT-Plus |
| B122 | 7 | operations-and-transposition | Thứ tự thực hiện các phép tính. Quy tắc chuyển vế | ChatGPT-Plus |
| B123 | 7 | recurring-decimals | Làm quen với số thập phân vô hạn tuần hoàn. Số vô tỉ. Căn bậc hai số học | ChatGPT-Plus |
| B124 | 7 | set-of-real-numbers | Tập hợp các số thực | ChatGPT-Plus |
| B125 | 7 | angle-pairs-bisectors | Góc ở vị trí đặc biệt. Tia phân giác của một góc | ChatGPT-Plus |
| B126 | 7 | identifying-parallel-lines | Hai đường thẳng song song và dấu hiệu nhận biết. Tiên đề Euclid. Tính chất của hai đường thẳng song song | ChatGPT-Plus |
| B127 | 7 | theorems-and-proofs | Định lí và chứng minh định lí | ChatGPT-Plus |
| B128 | 7 | triangle-angle-sum | Tổng các góc trong một tam giác | ChatGPT-Plus |
| B129 | 7 | congruent-triangles-sss | Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác | ChatGPT-Plus |
| B130 | 7 | congruence-sas-asa | Trường hợp bằng nhau thứ hai và thứ ba của tam giác | ChatGPT-Plus |
| B131 | 7 | right-triangle-congruence | Các trường hợp bằng nhau của tam giác vuông | ChatGPT-Plus |
| B132 | 7 | isosceles-perpendicular-bisector | Tam giác cân. Đường trung trực của đoạn thẳng | ChatGPT-Plus |
| B133 | 7 | g7-collecting-classifying-data | Thu thập và phân loại dữ liệu. Biểu đồ hình quạt tròn | ChatGPT-Plus |
| B134 | 7 | line-graphs | Biểu đồ đoạn thẳng | ChatGPT-Plus |
| B135 | 7 | proportions | Tỉ lệ thức. Tính chất của dãy tỉ số bằng nhau | ChatGPT-Plus |
| B136 | 7 | direct-proportion | Đại lượng tỉ lệ thuận. Đại lượng tỉ lệ nghịch | ChatGPT-Plus |
| B137 | 7 | algebraic-expressions | Biểu thức đại số. Đa thức một biến | ChatGPT-Plus |
| B138 | 7 | g7-add-subtract-polynomials | Phép cộng và phép trừ đa thức một biến. Phép nhân đa thức một biến | ChatGPT-Plus |
| B139 | 7 | dividing-polynomials | Phép chia đa thức một biến | ChatGPT-Plus |
| B140 | 7 | intro-to-events | Làm quen với biến cố | ChatGPT-Plus |
| B141 | 7 | angles-and-opposite-sides | Quan hệ giữa góc và cạnh đối diện trong một tam giác. Quan hệ giữa đường vuông góc và đường xiên | ChatGPT-Plus |
| B142 | 7 | triangle-inequality | Quan hệ giữa ba cạnh của một tam giác | Vinax258 |
| B143 | 7 | perpendicular-bisectors-altitudes | Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác | Vinax258 |
| B144 | 7 | g7-cuboids-and-cubes | Hình hộp chữ nhật và hình lập phương. Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác | Vinax258 |
| B145 | 8 | polynomials-several-variables | Đa thức. Phép cộng và phép trừ đa thức | Vinax258 |
| B146 | 8 | g8-multiplying-polynomials | Phép nhân đa thức. Phép chia đa thức cho đơn thức | Vinax258 |
| B147 | 8 | squares-identities | Hiệu hai bình phương. Bình phương của một tổng hay một hiệu | Vinax258 |
| B148 | 8 | cubes-of-sums-differences | Lập phương của một tổng. Lập phương của một hiệu. Tổng và hiệu hai lập phương | Vinax258 |
| B149 | 8 | factorising-polynomials | Phân tích đa thức thành nhân tử | Vinax258 |
| B150 | 8 | quadrilaterals | Tứ giác | Vinax258 |
| B151 | 8 | isosceles-trapeziums | Hình thang cân | Vinax258 |
| B152 | 8 | parallelograms | Hình bình hành | Vinax258 |
| B153 | 8 | rectangles | Hình chữ nhật | Vinax258 |
| B154 | 8 | rhombuses-and-squares | Hình thoi và hình vuông | Vinax258 |
| B155 | 8 | thales-theorem-triangle | Định lí Thalès trong tam giác | Vinax258 |
| B156 | 8 | triangle-midline | Đường trung bình của tam giác | Vinax258 |
| B157 | 8 | angle-bisector-theorem | Tính chất đường phân giác của tam giác | Vimus2358 |
| B158 | 8 | g8-collecting-classifying-data | Thu thập và phân loại dữ liệu. Biểu diễn dữ liệu bằng bảng, biểu đồ | Vimus2358 |
| B159 | 8 | analysing-charts | Phân tích số liệu thống kê dựa vào biểu đồ | Vimus2358 |
| B160 | 8 | intro-algebraic-fractions | Phân thức đại số. Tính chất cơ bản của phân thức đại số | Vimus2358 |
| B161 | 8 | add-subtract-algebraic-fractions | Phép cộng và phép trừ phân thức đại số | Vimus2358 |
| B162 | 8 | multiply-divide-algebraic-fractions | Phép nhân và phép chia phân thức đại số | Vimus2358 |
| B163 | 8 | linear-equations-one-unknown | Phương trình bậc nhất một ẩn | Vimus2358 |
| B164 | 8 | g8-equation-word-problems | Giải bài toán bằng cách lập phương trình | Vimus2358 |
| B165 | 8 | intro-functions-graphs | Khái niệm hàm số và đồ thị của hàm số | Vimus2358 |
| B166 | 8 | gradient-of-a-line | Hệ số góc của đường thẳng | Vimus2358 |
| B167 | 8 | possible-favourable-outcomes | Kết quả có thể và kết quả thuận lợi. Cách tính xác suất của biến cố bằng tỉ số | Vimus2358 |
| B168 | 8 | experimental-theoretical-probability | Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng | Vimus2358 |
| B169 | 8 | similar-triangles | Hai tam giác đồng dạng | Vimus2358 |
| B170 | 8 | triangle-similarity-conditions | Ba trường hợp đồng dạng của hai tam giác | Vimus2358 |
| B171 | 8 | pythagoras-theorem | Định lí Pythagore và ứng dụng | Vimus2358 |
| B172 | 8 | right-triangle-similarity | Các trường hợp đồng dạng của hai tam giác vuông | Lemonmath112 |
| B173 | 8 | similar-shapes | Hình đồng dạng | Lemonmath112 |
| B174 | 8 | regular-triangular-pyramids | Hình chóp tam giác đều. Hình chóp tứ giác đều | Lemonmath112 |
| B175 | 9 | entrance-exam-overview | Đề thi vào 10 gồm những gì và cách ôn | Lemonmath112 |
| B176 | 9 | review-radical-expressions | Chuyên đề: rút gọn biểu thức chứa căn | Lemonmath112 |
| B177 | 9 | review-quadratic-vieta | Chuyên đề: phương trình bậc hai và định lí Viète | Lemonmath112 |
| B178 | 9 | review-word-problems-equations | Chuyên đề: giải bài toán bằng cách lập phương trình, hệ phương trình | Lemonmath112 |
| B179 | 9 | review-parabola-line | Chuyên đề: parabol y = ax² và đường thẳng | Lemonmath112 |
| B180 | 9 | review-circle-geometry | Chuyên đề: hình học đường tròn | Lemonmath112 |
| B181 | 9 | review-right-triangle-real-life | Chuyên đề: hệ thức lượng và hình học thực tế | Lemonmath112 |
| B182 | 9 | review-statistics-probability-g9 | Chuyên đề: thống kê và xác suất | Lemonmath112 |
| B183 | 9 | practice-paper-grade10-1 | Đề luyện thi vào 10 số 1 | Lemonmath112 |
| B184 | 9 | practice-paper-grade10-2 | Đề luyện thi vào 10 số 2 | Lemonmath112 |
| B185 | 9 | practice-paper-grade10-3 | Đề luyện thi vào 10 số 3 | Lemonmath112 |
| B186 | 11 | angle-trig-values | Giá trị lượng giác của góc lượng giác | Lemonmath112 |
| B187 | 11 | trig-formulas | Công thức lượng giác | Xedap102 |
| B188 | 11 | trig-function-graphs | Hàm số lượng giác | Xedap102 |
| B189 | 11 | basic-trig-equations | Phương trình lượng giác cơ bản | Xedap102 |
| B190 | 11 | sequences-intro | Dãy số | Xedap102 |
| B191 | 11 | arithmetic-progressions | Cấp số cộng | Xedap102 |
| B192 | 11 | geometric-progressions | Cấp số nhân | Xedap102 |
| B193 | 11 | grouped-data | Mẫu số liệu ghép nhóm | Xedap102 |
| B194 | 11 | grouped-central-tendency | Các số đặc trưng đo xu thế trung tâm | Xedap102 |
| B195 | 11 | lines-planes-space | Đường thẳng và mặt phẳng trong không gian | Xedap102 |
| B196 | 11 | parallel-lines-space | Hai đường thẳng song song | Xedap102 |
| B197 | 11 | line-plane-parallel | Đường thẳng và mặt phẳng song song | Xedap102 |
| B198 | 11 | parallel-planes | Hai mặt phẳng song song | Xedap102 |
| B199 | 11 | parallel-projection | Phép chiếu song song | Xedap102 |
| B200 | 11 | sequence-limits | Giới hạn của dãy số | Xedap102 |
| B201 | 11 | function-limits | Giới hạn của hàm số | Xedap102 |
| B202 | 11 | continuity | Hàm số liên tục | chanh106 |
| B203 | 11 | real-exponents | Luỹ thừa với số mũ thực | chanh106 |
| B204 | 11 | logarithms | Lôgarit | chanh106 |
| B205 | 11 | exp-log-functions | Hàm số mũ và hàm số lôgarit | chanh106 |
| B206 | 11 | exp-log-equations | Phương trình, bất phương trình mũ và lôgarit | chanh106 |
| B207 | 11 | derivative-definition | Đạo hàm | chanh106 |
| B208 | 11 | differentiation-rules | Các quy tắc tính đạo hàm | chanh106 |
| B209 | 11 | second-derivative | Đạo hàm cấp hai | chanh106 |
| B210 | 11 | perpendicular-lines-space | Hai đường thẳng vuông góc | chanh106 |
| B211 | 11 | line-perpendicular-plane | Đường thẳng vuông góc với mặt phẳng | chanh106 |
| B212 | 11 | orthogonal-projection-angle | Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng | chanh106 |
| B213 | 11 | distances-space | Khoảng cách trong không gian | chanh106 |
| B214 | 11 | volumes | Thể tích | chanh106 |
| B215 | 11 | union-intersection-events | Biến cố hợp, biến cố giao, biến cố độc lập | chanh106 |
| B216 | 11 | addition-rule | Công thức cộng xác suất | chanh106 |


## Đợt 2 (13/11/2026): 23 bài lớp 7 B119–B141 chuyển từ ChatGPT Plus sang các tài khoản Claude Free đã nộp đủ

File giao: `giao-viec/dot2-lop7/NN-<tài khoản>.txt`.

| Tài khoản | Bài |
|---|---|
| Kinangtoan | B119, B120, B121 |
| Alexnguyen122222 | B122, B123, B124 |
| thichgiaitoan | B125, B126, B127 |
| Lemonmath.com | B128, B129, B130 |
| Vinax.vn | B131, B132, B141 |
| Nguyenchanh2358 | B133, B134 |
| Vinax258 | B135, B136 |
| Vimus2358 | B137, B138 |
| Lemonmath112 | B139, B140 |
