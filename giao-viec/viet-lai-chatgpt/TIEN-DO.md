# Viết lại 46 bài ChatGPT (B096–B141, lớp 6–7)

Quyết định 12/11/2026: bản ChatGPT nộp (sinh bằng script, gợi ý chung chung, lời giải cụt, không có hình) không đăng. Chủ dự án chọn để tài khoản Pro tự viết lại kỹ cả 46 bài, mỗi lượt 7 bài (tăng từ 4 lên 7 theo yêu cầu chủ dự án ngày 12/11/2026), đạt chuẩn 2e + 2f của WRITING-SPEC.

- Bản nháp gốc của ChatGPT (chỉ để tham khảo đề mục, không chép): `giao-viec/viet-lai-chatgpt/nhap/content/...`
- Mỗi bài: viết mới `content/vi/gN/<id>.md` và `content/en/gN/<id>.md`, `node tools/check.js <id>` sạch, rồi đánh dấu ở bảng dưới, build + push.
- Bài hình học và thống kê bắt buộc có hình (:::diagram / :::graph). Bản Việt dùng c.c.c, c.g.c, g.c.g.

| Mã | Lớp | id | Tên bài | Trạng thái |
|---|---|---|---|---|
| B096 | 6 | prime-numbers | Số nguyên tố | xong 12/11 |
| B097 | 6 | highest-common-factor | Ước chung. Ước chung lớn nhất | xong 12/11 |
| B098 | 6 | lowest-common-multiple | Bội chung. Bội chung nhỏ nhất | xong 12/11 |
| B099 | 6 | set-of-integers | Tập hợp các số nguyên | xong 12/11 |
| B100 | 6 | add-subtract-integers | Phép cộng và phép trừ số nguyên. Quy tắc dấu ngoặc | xong 12/11 |
| B101 | 6 | multiplying-integers | Phép nhân số nguyên. Phép chia hết. Ước và bội của một số nguyên | xong 12/11 |
| B102 | 6 | triangles-squares-hexagons | Hình tam giác đều. Hình vuông. Hình lục giác đều. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân | xong 12/11 |
| B103 | 6 | quadrilateral-perimeter-area | Chu vi và diện tích của một số tứ giác đã học | xong 12/11 |
| B104 | 6 | line-symmetry | Hình có trục đối xứng. Hình có tâm đối xứng | xong 12/11 |
| B105 | 6 | g6-equivalent-fractions | Mở rộng phân số. Phân số bằng nhau | xong 12/11 |
| B106 | 6 | comparing-fractions-mixed-numbers | So sánh phân số. Hỗn số dương | xong 12/11 |
| B107 | 6 | g6-add-subtract-fractions | Phép cộng và phép trừ phân số | xong 12/11 |
| B108 | 6 | g6-multiply-divide-fractions | Phép nhân và phép chia phân số | xong 12/11 |
| B109 | 6 | two-fraction-problems | Hai bài toán về phân số | xong 12/11 |
| B110 | 6 | decimal-numbers | Số thập phân. Tính toán với số thập phân | xong 12/11 |
| B111 | 6 | rounding-and-estimating | Làm tròn và ước lượng | xong 12/11 |
| B112 | 6 | ratio-percentage-problems | Một số bài toán về tỉ số và tỉ số phần trăm | chưa |
| B113 | 6 | points-and-lines | Điểm và đường thẳng. Điểm nằm giữa hai điểm. Tia | chưa |
| B114 | 6 | line-segments | Đoạn thẳng. Độ dài đoạn thẳng | chưa |
| B115 | 6 | intro-to-angles | Góc và số đo góc | chưa |
| B116 | 6 | data-collection | Thu thập, phân loại và biểu diễn dữ liệu | chưa |
| B117 | 6 | g6-bar-charts | Biểu đồ cột | chưa |
| B118 | 6 | outcomes-and-events | Kết quả có thể xảy ra và sự kiện trong trò chơi, thí nghiệm | chưa |
| B119 | 7 | set-of-rational-numbers | Tập hợp các số hữu tỉ | chưa |
| B120 | 7 | rational-number-operations | Các phép tính với số hữu tỉ | chưa |
| B121 | 7 | powers-of-rational-numbers | Luỹ thừa của một số hữu tỉ | chưa |
| B122 | 7 | operations-and-transposition | Thứ tự thực hiện phép tính và quy tắc chuyển vế | chưa |
| B123 | 7 | recurring-decimals | Số thập phân hữu hạn và số thập phân vô hạn tuần hoàn | chưa |
| B124 | 7 | set-of-real-numbers | Tập hợp các số thực | chưa |
| B125 | 7 | angle-pairs-bisectors | Các cặp góc đặc biệt và tia phân giác | chưa |
| B126 | 7 | identifying-parallel-lines | Nhận biết hai đường thẳng song song | chưa |
| B127 | 7 | theorems-and-proofs | Định lí và chứng minh định lí | chưa |
| B128 | 7 | triangle-angle-sum | Tổng ba góc trong một tam giác | chưa |
| B129 | 7 | congruent-triangles-sss | Hai tam giác bằng nhau và trường hợp cạnh–cạnh–cạnh | chưa |
| B130 | 7 | congruence-sas-asa | Trường hợp cạnh–góc–cạnh và góc–cạnh–góc | chưa |
| B131 | 7 | right-triangle-congruence | Các trường hợp bằng nhau của tam giác vuông | chưa |
| B132 | 7 | isosceles-perpendicular-bisector | Tam giác cân và đường trung trực của đoạn thẳng | chưa |
| B133 | 7 | g7-collecting-classifying-data | Thu thập và phân loại dữ liệu | chưa |
| B134 | 7 | line-graphs | Biểu đồ đoạn thẳng | chưa |
| B135 | 7 | proportions | Tỉ lệ thức | chưa |
| B136 | 7 | direct-proportion | Đại lượng tỉ lệ thuận | chưa |
| B137 | 7 | algebraic-expressions | Biểu thức đại số | chưa |
| B138 | 7 | g7-add-subtract-polynomials | Cộng và trừ đa thức | chưa |
| B139 | 7 | dividing-polynomials | Phép chia đa thức | chưa |
| B140 | 7 | intro-to-events | Làm quen với biến cố và xác suất | chưa |
| B141 | 7 | angles-and-opposite-sides | Quan hệ giữa góc và cạnh đối diện trong tam giác | chưa |
