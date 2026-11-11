---
title: Thống kê, đọc biểu đồ và xác suất
description: SAT Data Analysis: số trung bình, trung vị, giá trị ngoại lai, bảng tần số, biểu đồ phân tán, bảng hai chiều, xác suất có điều kiện và chọn mẫu.
minutes: 35
---

:::goals
- Tính và so sánh số trung bình, trung vị, giải thích ảnh hưởng của giá trị ngoại lai lên từng số.
- Đọc bảng tần số, biểu đồ phân tán và đường thẳng khớp nhất, giải thích hệ số góc và tung độ gốc.
- Tính xác suất, kể cả xác suất có điều kiện, từ bảng hai chiều.
- Xác định một cuộc khảo sát hay nghiên cứu cho phép rút ra kết luận nào.
:::

Câu hỏi thống kê trong SAT hiếm khi đòi tính toán dài. Thay vào đó, đề kiểm tra xem bạn có **hiểu** một số đặc trưng hay không: điều gì làm thay đổi số trung bình nhưng không làm thay đổi trung vị, hệ số góc trong biểu đồ phân tán có nghĩa gì, hay một cuộc khảo sát có đại diện được cho cả tổng thể không. Học sinh Việt Nam học phần lớn các ý này từ lớp 6 đến lớp 10; phần mới là từ vựng, vì vậy bảng thuật ngữ ở cuối bài rất quan trọng.

## Số trung bình, trung vị và giá trị ngoại lai

**Số trung bình** (mean) bằng tổng các giá trị chia cho số giá trị. **Trung vị** (median) là giá trị đứng giữa của dãy đã sắp xếp (là trung bình của hai giá trị đứng giữa khi số giá trị chẵn). **Giá trị ngoại lai** (outlier) là giá trị cách xa các giá trị còn lại: nó kéo số trung bình về phía mình nhưng hầu như không làm trung vị dịch chuyển.

:::example Tìm giá trị còn thiếu
Số trung bình của 6 bài kiểm tra đầu tiên của Nam là 82. Sau bài thứ bảy, số trung bình của cả 7 bài là 84. Nam được bao nhiêu điểm ở bài thứ bảy?

**Lời giải.** Hãy làm việc với tổng, không phải với số trung bình. Tổng 6 bài đầu là $6\cdot82=492$; tổng cả 7 bài là $7\cdot84=588$. Điểm bài thứ bảy là $588-492=96$. Bạn gõ **96**.
:::

:::example Ảnh hưởng của giá trị ngoại lai
Một công ty nhỏ có 9 nhân viên. Mức lương cao nhất lớn hơn rất nhiều so với tất cả các mức lương còn lại. Nếu bỏ mức lương đó ra khỏi dữ liệu thì câu nào đúng?
A. Số trung bình và trung vị đều tăng.
B. Số trung bình giảm, còn trung vị thay đổi ít.
C. Trung vị giảm, còn số trung bình không đổi.
D. Số trung bình và trung vị đều không đổi.

**Lời giải.** Giá trị ngoại lai cao hơn hẳn các giá trị khác, nên bỏ nó đi làm số trung bình giảm nhiều. Trung vị chỉ chuyển từ giá trị thứ 5 thành trung bình của giá trị thứ 4 và thứ 5 trong 8 giá trị còn lại, một thay đổi nhỏ. Đáp án là **B**.
:::

**Độ lệch chuẩn** (standard deviation) đo mức độ phân tán của các giá trị quanh số trung bình. SAT chỉ yêu cầu so sánh: tập dữ liệu có các giá trị tập trung sát số trung bình có độ lệch chuẩn nhỏ hơn tập có các giá trị trải rộng. **Khoảng biến thiên** (range) là giá trị lớn nhất trừ giá trị nhỏ nhất.

## Bảng tần số và biểu đồ phân tán

:::example Trung vị từ bảng tần số
Bảng cho biết số sách 20 học sinh đã đọc trong tháng trước.

| Số sách | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| Số học sinh | $3$ | $5$ | $8$ | $4$ |

Trung vị của số sách là
A. $2$
B. $2{,}5$
C. $3$
D. $2{,}65$

**Lời giải.** Có 20 giá trị, nên trung vị là trung bình của giá trị thứ 10 và thứ 11. Đếm dần: các giá trị thứ 1 đến 3 là "1", thứ 4 đến 8 là "2", thứ 9 đến 16 là "3". Cả giá trị thứ 10 và thứ 11 đều là $3$, nên trung vị là $3$: đáp án **C**. Phương án D là số trung bình, $\dfrac{3+10+24+16}{20}=2{,}65$.
:::

**Biểu đồ phân tán** (scatterplot) biểu diễn các cặp dữ liệu. **Đường thẳng khớp nhất** (line of best fit) $y=mx+b$ mô tả xu hướng: hệ số góc $m$ là mức thay đổi dự đoán của $y$ khi $x$ tăng $1$, còn $b$ là giá trị dự đoán của $y$ khi $x=0$.

:::graph Số giờ học và điểm kiểm tra, với đường thẳng khớp nhất $y=2{,}5x+40$
alt: Tám điểm dữ liệu đi lên từ trái sang phải quanh một đường thẳng bắt đầu từ 40 trên trục y
x: 0..9
y: 35..65
shape: free
plot: 2.5x + 40
point: (1, 42)
point: (2, 46)
point: (3, 48)
point: (4, 51)
point: (5, 52)
point: (6, 56)
point: (7, 57)
point: (8, 61)
:::

:::example Giải thích đường thẳng khớp nhất
Với dữ liệu trong biểu đồ phân tán, đường thẳng khớp nhất là $y=2{,}5x+40$, trong đó $x$ là số giờ một học sinh đã học và $y$ là điểm kiểm tra. Câu nào giải thích đúng nhất ý nghĩa của $2{,}5$?
A. Mỗi học sinh đã học 2,5 giờ.
B. Học sinh không học được dự đoán đạt 2,5 điểm.
C. Mỗi giờ học thêm, điểm dự đoán tăng 2,5 điểm.
D. Điểm của mọi học sinh tăng 2,5 điểm cho mỗi giờ học.

**Lời giải.** Hệ số góc là mức thay đổi của điểm **dự đoán** theo mỗi giờ: đáp án là **C**. Phương án D quá mạnh: mô hình dự đoán xu hướng, không dự đoán điểm của từng học sinh. Mô hình dự đoán $2{,}5\cdot6+40=55$ điểm cho 6 giờ học.
:::

## Bảng hai chiều và xác suất

Khi mọi kết quả đồng khả năng, xác suất của một biến cố là $\dfrac{\text{số kết quả thuận lợi}}{\text{tổng số kết quả}}$. Trong bảng hai chiều, **xác suất có điều kiện** "biết rằng…" (given that) thu hẹp tổng về một hàng hoặc một cột.

:::example Bảng hai chiều
Bảng cho biết câu lạc bộ mà 80 học sinh chọn.

| | CLB Toán | CLB Mĩ thuật | Tổng |
|---|---|---|---|
| Lớp 10 | $18$ | $12$ | $30$ |
| Lớp 11 | $22$ | $28$ | $50$ |
| Tổng | $40$ | $40$ | $80$ |

Chọn ngẫu nhiên một học sinh trong số các bạn thuộc CLB Mĩ thuật. Xác suất để học sinh đó học lớp 11 là
A. $\dfrac{7}{20}$
B. $\dfrac{14}{25}$
C. $\dfrac{7}{10}$
D. $\dfrac{5}{8}$

**Lời giải.** "Trong số các bạn thuộc CLB Mĩ thuật" nghĩa là tổng là cột Mĩ thuật, $40$. Trong đó $28$ bạn học lớp 11: $\dfrac{28}{40}=\dfrac{7}{10}$. Đáp án là **C**. Phương án B là $\dfrac{28}{50}$, xác suất chọn Mĩ thuật **biết** học lớp 11; phương án A là $\dfrac{28}{80}$.
:::

## Mẫu và nghiên cứu

:::note Kết luận được điều gì?
- **Mẫu ngẫu nhiên** (random sample) cho phép khái quát lên tổng thể mà mẫu được chọn ra, và chỉ tổng thể đó.
- **Biên sai số** (margin of error) cho một khoảng giá trị hợp lí của tổng thể: ước lượng 64% với biên sai số 5% gợi ý giá trị thật nằm trong khoảng từ 59% đến 69%.
- Chỉ **thí nghiệm ngẫu nhiên** (đối tượng được phân ngẫu nhiên vào các nhóm) mới cho phép kết luận nhân quả. Nghiên cứu quan sát chỉ cho thấy mối liên hệ.
:::

:::warning Những cái bẫy thường gặp
- **Lấy nhầm tổng trong xác suất có điều kiện.** "Biết học lớp 11" thì chia cho tổng lớp 11, không chia cho tổng chung.
- **Số trung bình và trung vị khi có ngoại lai.** Giá trị ngoại lai làm số trung bình dịch chuyển nhiều hơn hẳn trung vị.
- **Khái quát quá mức.** Mẫu lấy ở một trường không nói chắc chắn điều gì về mọi trường trong cả nước.
- **Kết luận nhân quả từ quan sát.** "Người uống nhiều cà phê ngủ ít hơn" không chứng tỏ cà phê làm ngủ ít.
:::

:::tip Thống kê trong Desmos
Gõ một danh sách như `L=[3,9,4,7,12,5]`, rồi `mean(L)`, `median(L)` hoặc `stdev(L)`. Để tìm đường thẳng khớp nhất, nhập dữ liệu vào bảng rồi gõ `y_1~mx_1+b`.
:::

:::terms
- số trung bình | mean
- trung vị | median
- giá trị ngoại lai | outlier
- độ lệch chuẩn | standard deviation
- khoảng biến thiên | range
- biểu đồ phân tán | scatterplot
- đường thẳng khớp nhất | line of best fit
- bảng hai chiều | two-way table
- xác suất có điều kiện | conditional probability
- mẫu ngẫu nhiên | random sample
- biên sai số | margin of error
:::

## Bài tập tương tự

:::exercise Câu tự điền đáp số
Số trung bình của năm số là 12. Bốn trong năm số đó là 10, 14, 9 và 15. Số thứ năm là bao nhiêu?

::hint
**Kiến thức:** tổng = số trung bình × số giá trị.

**Gợi ý các bước:**
1. Tổng của năm số là $5\cdot12$.
2. Trừ đi bốn số đã biết.

::solution
$5\cdot12=60$ và $10+14+9+15=48$, nên số thứ năm là $12$.
:::

:::exercise Trắc nghiệm
Với tập dữ liệu 2, 4, 4, 5, 7, 9, 30, câu nào đúng?
A. Số trung bình nhỏ hơn trung vị.
B. Số trung bình bằng trung vị.
C. Số trung bình lớn hơn trung vị.
D. Trung vị là 4.

::hint
**Kiến thức:** ảnh hưởng của giá trị ngoại lai $30$.

**Gợi ý các bước:**
1. Trung vị là giá trị thứ 4 trong 7 giá trị đã sắp xếp.
2. Tính số trung bình.

::solution
Trung vị là $5$ và số trung bình là $\dfrac{61}{7}\approx8{,}7$. Giá trị ngoại lai kéo số trung bình lên: đáp án **C**.
:::

:::exercise Câu tự điền đáp số
Dùng bảng hai chiều về câu lạc bộ ở trên. Chọn ngẫu nhiên một học sinh lớp 10. Xác suất để học sinh đó thuộc CLB Toán là bao nhiêu? Viết đáp số dưới dạng số thập phân.

::hint
**Kiến thức:** "một học sinh lớp 10" nghĩa là tổng là hàng lớp 10.

**Gợi ý các bước:**
1. Tổng của lớp 10 là $30$.
2. Chia số bạn CLB Toán ở hàng đó cho $30$.

::solution
$\dfrac{18}{30}=0{,}6$. Khi nhập vào Bluebook, gõ `0.6`.
:::

:::exercise Câu tự điền đáp số
Đường thẳng khớp nhất của một tập dữ liệu là $y=1{,}8x+12$. Đường thẳng dự đoán giá trị $y$ bằng bao nhiêu khi $x=10$?

::hint
**Kiến thức:** thay vào phương trình đường thẳng.

**Gợi ý các bước:**
1. $1{,}8\cdot10+12$.

::solution
$18+12=30$.
:::

:::exercise Trắc nghiệm
Các nhà nghiên cứu phân ngẫu nhiên 100 tình nguyện viên vào hai nhóm. Một nhóm đi bộ 30 phút mỗi ngày, nhóm kia thì không. Sau 8 tuần, nhóm đi bộ có huyết áp trung bình thấp hơn đáng kể. Kết luận nào được ủng hộ tốt nhất?
A. Đi bộ mỗi ngày làm giảm huyết áp ở mọi người trưởng thành.
B. Đi bộ mỗi ngày có khả năng làm giảm huyết áp ở những người tương tự các tình nguyện viên.
C. Người có huyết áp thấp chọn đi bộ nhiều hơn.
D. Không kết luận được gì vì các tình nguyện viên không phải mẫu ngẫu nhiên.

::hint
**Kiến thức:** phân nhóm ngẫu nhiên cho phép kết luận nhân quả; cần mẫu ngẫu nhiên mới khái quát được cho tổng thể.

**Gợi ý các bước:**
1. Có phân nhóm ngẫu nhiên không? Có.
2. Có chọn mẫu ngẫu nhiên từ mọi người trưởng thành không? Không.

::solution
Phân nhóm ngẫu nhiên cho phép kết luận nhân quả, nhưng chỉ với những người giống các tình nguyện viên, vì họ không được chọn ngẫu nhiên từ mọi người trưởng thành. Đáp án là **B**. Phương án A khái quát quá mức; phương án D bỏ qua điều mà phân nhóm ngẫu nhiên đã cho thấy.
:::

## Bài tập vận dụng

:::exercise Gộp hai lớp
Lớp A có 20 học sinh với điểm trung bình 75. Lớp B có 30 học sinh với điểm trung bình 80. Điểm trung bình của cả 50 học sinh là bao nhiêu?

::hint
**Kiến thức:** gộp các tổng, không gộp các số trung bình.

**Gợi ý các bước:**
1. Tổng điểm lớp A: $20\cdot75$; lớp B: $30\cdot80$.
2. Chia tổng chung cho $50$.

::solution
$\dfrac{1.500+2.400}{50}=\dfrac{3.900}{50}=78$. Số trung bình gần 80 hơn 75 vì lớp B đông hơn.
:::

:::exercise Viên bi
Một túi có 4 viên bi đỏ, 6 viên bi xanh dương và 5 viên bi xanh lá. Lấy ngẫu nhiên một viên bi. Xác suất để viên bi đó không phải màu xanh dương là bao nhiêu?

::hint
**Kiến thức:** đếm các kết quả không phải xanh dương.

**Gợi ý các bước:**
1. Tổng là $15$.
2. Không phải xanh dương: $4+5$.

::solution
$\dfrac{9}{15}=\dfrac35$.
:::

:::exercise So sánh độ phân tán
Tập dữ liệu A là 48, 49, 50, 51, 52. Tập dữ liệu B là 30, 40, 50, 60, 70. So sánh số trung bình, khoảng biến thiên và độ lệch chuẩn của hai tập dữ liệu.

::hint
**Kiến thức:** cả hai tập đều đối xứng quanh cùng một giá trị ở giữa.

**Gợi ý các bước:**
1. Tính các số trung bình.
2. So sánh khoảng cách từ các giá trị đến số trung bình.

::solution
Cả hai số trung bình đều là $50$. Khoảng biến thiên của A là $4$, của B là $40$. Các giá trị của B nằm xa số trung bình hơn nhiều, nên B có độ lệch chuẩn lớn hơn.
:::

:::exercise Thử thách
Các số 6, 8, $x$, 15, 21 được viết theo thứ tự tăng dần, và số trung bình của chúng bằng trung vị. Giá trị của $x$ bằng bao nhiêu?

::hint
**Kiến thức:** với năm giá trị đã sắp xếp, trung vị là giá trị ở giữa, $x$.

**Gợi ý các bước:**
1. Viết số trung bình là $\dfrac{50+x}{5}$.
2. Cho nó bằng $x$.

::solution
$\dfrac{50+x}{5}=x\iff50+x=5x\iff x=12{,}5$. Giá trị này nằm giữa $8$ và $15$, nên thứ tự vẫn đúng.
:::

:::quiz
::mc
Trung vị của tập dữ liệu 3, 9, 4, 7, 12, 5 là
A. $5$
B. $6$
C. $7$
D. $6{,}7$
::key B
Sắp xếp: 3, 4, 5, 7, 9, 12. Trung vị là $\dfrac{5+7}{2}=6$. Phương án D là số trung bình, khoảng $6{,}7$.

::mc
Số trung bình của 4, 8, 10 và 14 là
A. $8$
B. $10$
C. $9$
D. $36$
::key C
$\dfrac{36}{4}=9$. Phương án D là tổng.

::mc
Một hộp có 3 quả bóng đỏ, 5 quả bóng trắng và 2 quả bóng đen. Chọn ngẫu nhiên một quả. Xác suất để quả bóng đó màu trắng là
A. $\dfrac12$
B. $\dfrac15$
C. $\dfrac{3}{10}$
D. $\dfrac{1}{10}$
::key A
$\dfrac{5}{10}=\dfrac12$.

::mc
Một mẫu ngẫu nhiên gồm 300 người trưởng thành ở một thành phố được hỏi có dùng phương tiện công cộng không. Trong số đó, 45% trả lời có. Kết luận nào được ủng hộ tốt nhất?
A. Đúng 45% người trưởng thành trong cả nước dùng phương tiện công cộng.
B. Phương tiện công cộng làm 45% người trưởng thành đi lại ít hơn.
C. Đúng 135 người trưởng thành trong thành phố dùng phương tiện công cộng.
D. Khoảng 45% người trưởng thành trong thành phố dùng phương tiện công cộng.
::key D
Mẫu ngẫu nhiên cho phép ước lượng tổng thể mà mẫu được chọn ra, tức người trưởng thành ở thành phố đó, và chỉ ở mức gần đúng.

::tf
Dùng bảng hai chiều về câu lạc bộ trong bài.
a) Có tổng cộng 80 học sinh.
b) Xác suất để một học sinh chọn ngẫu nhiên thuộc CLB Toán là $\dfrac12$.
c) Xác suất để một học sinh lớp 10 chọn ngẫu nhiên thuộc CLB Mĩ thuật là $0{,}4$.
d) Xác suất để một thành viên CLB Toán chọn ngẫu nhiên học lớp 10 là $0{,}6$.
::key Đ Đ Đ S
a) Đúng. b) Đúng: $\dfrac{40}{80}$. c) Đúng: $\dfrac{12}{30}=0{,}4$. d) Sai: $\dfrac{18}{40}=0{,}45$.

::sa
Số trung bình của 7 số là 10. Khi bỏ đi một số trong đó là 22, số trung bình của các số còn lại là bao nhiêu?
::key 8
$\dfrac{70-22}{6}=\dfrac{48}{6}=8$.

::sa
Dùng bảng hai chiều về câu lạc bộ. Chọn ngẫu nhiên một thành viên CLB Toán. Xác suất để học sinh đó học lớp 11 là bao nhiêu? Viết đáp số dưới dạng số thập phân.
::key 0,55
$\dfrac{22}{40}=0{,}55$.
:::
