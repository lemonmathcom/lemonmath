---
title: Thống kê và xác suất
description: ACT Math thống kê và xác suất: trung bình, trung vị, mốt, độ phân tán, giá trị còn thiếu, đếm, xác suất của biến cố kết hợp, bảng hai chiều, kì vọng.
minutes: 45
---

:::goals
- Tìm và so sánh trung bình, trung vị, mốt, khoảng biến thiên, và nhận xét tập dữ liệu nào phân tán hơn.
- Tìm giá trị còn thiếu khi biết trung bình, kể cả trung bình có trọng số.
- Đếm số cách sắp xếp và lựa chọn bằng quy tắc nhân, hoán vị và tổ hợp.
- Tính xác suất của biến cố đơn và biến cố kết hợp, kể cả xác suất có điều kiện từ bảng.
- Tính giá trị kì vọng.
:::

Câu hỏi thống kê và xác suất trong ACT hiếm khi cần tính toán dài. Chúng kiểm tra xem bạn có hiểu chính xác ý nghĩa của từng số đặc trưng và biết dùng quy tắc đếm nào. Một câu điển hình cho một tập dữ liệu nhỏ, một bảng hoặc một mô tả ngắn, và hỏi một con số. Hãy viết quy tắc bạn dùng trước khi tính; điều đó ngăn được phần lớn lỗi sai.

## Trung bình, trung vị, mốt và độ phân tán

**Số trung bình (mean)** là tổng chia cho số giá trị; **trung vị (median)** là giá trị đứng giữa của dãy đã sắp xếp (trung bình của hai giá trị giữa nếu số giá trị chẵn); **mốt (mode)** là giá trị xuất hiện nhiều nhất; **khoảng biến thiên (range)** là giá trị lớn nhất trừ giá trị nhỏ nhất. **Độ lệch chuẩn (standard deviation)** đo mức các giá trị thường cách xa trung bình: dữ liệu càng phân tán thì độ lệch chuẩn càng lớn.

:::example Ba số đặc trưng đo xu thế trung tâm
Với dữ liệu $4, 7, 7, 9, 13$, khẳng định nào đúng?
A. Số trung bình lớn hơn trung vị.
B. Trung vị lớn hơn số trung bình.
C. Mốt lớn hơn trung vị.
D. Số trung bình, trung vị và mốt bằng nhau.

**Lời giải.** Số trung bình là $\dfrac{4+7+7+9+13}{5}=\dfrac{40}{5}=8$.

Dữ liệu đã được sắp xếp, nên trung vị là giá trị thứ ba, bằng $7$. Mốt là $7$, vì nó xuất hiện hai lần.

Vì $8>7$ nên số trung bình lớn hơn trung vị.

Vậy khẳng định A đúng, chọn đáp án **A**.
:::

:::example Điểm cần đạt
Điểm trung bình của Minh trong $5$ bài kiểm tra là $82$. Minh cần đạt bao nhiêu điểm ở bài thứ sáu để điểm trung bình tăng lên $85$?
A. $85$
B. $88$
C. $95$
D. $100$

**Lời giải.** Tổng điểm của $5$ bài đầu là $5\times82=410$.

Để trung bình của $6$ bài là $85$, tổng điểm phải bằng $6\times85=510$.

Do đó điểm bài thứ sáu phải là $510-410=100$.

Vậy Minh cần đạt $100$ điểm, chọn đáp án **D**. Phương án B cộng hiệu $3$ vào $85$ thay vì làm việc với các tổng.
:::

## Đếm

Theo **quy tắc nhân**, nếu một lựa chọn có $m$ cách và lựa chọn thứ hai có $n$ cách thì cả hai lựa chọn có $mn$ cách. Số cách xếp $n$ đồ vật khác nhau thành một hàng là $n!$. Số cách chọn $r$ đồ vật từ $n$ đồ vật, khi không tính thứ tự, là $\dbinom nr=\dfrac{n!}{r!(n-r)!}$.

:::example Có thứ tự hay không
Một câu lạc bộ có $8$ thành viên. Có bao nhiêu cách chọn một ban gồm $3$ thành viên?
A. $336$
B. $56$
C. $24$
D. $512$

**Lời giải.** Thứ tự các thành viên trong một ban không quan trọng, nên ta đếm tổ hợp:
$$\binom83=\frac{8\times7\times6}{3\times2\times1}=56.$$

Vậy có $56$ cách chọn ban, chọn đáp án **B**. Phương án A đếm các cách chọn có thứ tự, chẳng hạn chủ tịch, thư kí và thủ quỹ.
:::

## Xác suất

Với các kết quả đồng khả năng, $P(A)=\dfrac{\text{số kết quả thuận lợi}}{\text{số kết quả có thể}}$. Với hai biến cố **độc lập**, $P(A\text{ và }B)=P(A)P(B)$. Xác suất để $A$ không xảy ra là $1-P(A)$. **Xác suất có điều kiện** chỉ xét các kết quả thoả mãn điều kiện.

:::example Một đồng xu và một con xúc xắc
Tung một đồng xu cân đối và gieo một con xúc xắc cân đối sáu mặt. Xác suất được mặt ngửa và mặt $6$ chấm là
A. $\dfrac{1}{12}$
B. $\dfrac{2}{3}$
C. $\dfrac{1}{8}$
D. $\dfrac{7}{12}$

**Lời giải.** Đồng xu và con xúc xắc không ảnh hưởng đến nhau, nên hai biến cố độc lập:
$$P(\text{ngửa và }6)=\frac12\times\frac16=\frac{1}{12}.$$

Vậy xác suất cần tìm là $\dfrac{1}{12}$, chọn đáp án **A**. Phương án B cộng hai xác suất thay vì nhân.
:::

:::example Xác suất có điều kiện từ bảng
Một khảo sát hỏi $100$ người xem họ có uống trà và có uống cà phê hay không.

| | Cà phê | Không cà phê | Tổng |
|---|---|---|---|
| Trà | $25$ | $15$ | $40$ |
| Không trà | $35$ | $25$ | $60$ |
| Tổng | $60$ | $40$ | $100$ |

Chọn ngẫu nhiên một người uống trà. Xác suất người đó cũng uống cà phê là
A. $\dfrac14$
B. $\dfrac{5}{12}$
C. $\dfrac58$
D. $\dfrac35$

**Lời giải.** Điều kiện "uống trà" giới hạn ta trong $40$ người ở hàng Trà. Trong số đó, $25$ người cũng uống cà phê.

Do đó xác suất là
$$\frac{25}{40}=\frac58.$$

Vậy xác suất cần tìm là $\dfrac58$, chọn đáp án **C**. Phương án A chia cho $100$, còn phương án B chia cho $60$ người uống cà phê.
:::

## Giá trị kì vọng

Giá trị kì vọng của một biến ngẫu nhiên là $E(X)=\sum x\,P(X=x)$: kết quả trung bình mỗi lần thử khi lặp lại rất nhiều lần.

:::example Có nên chơi trò này không?
Trong một trò chơi, người chơi thắng $10$ đô la với xác suất $0{,}2$, ngược lại thì thua $3$ đô la. Số tiền lãi kì vọng mỗi ván là
A. $7$ đô la
B. $-0{,}4$ đô la
C. $2$ đô la
D. $0{,}4$ đô la

**Lời giải.** Người chơi thua với xác suất $1-0{,}2=0{,}8$. Do đó
$$E=10(0{,}2)+(-3)(0{,}8)=2-2{,}4=-0{,}4.$$

Vậy số tiền lãi kì vọng là $-0{,}4$ đô la mỗi ván, tức trung bình mỗi ván lỗ $40$ xu, chọn đáp án **B**.
:::

:::warning Những cái bẫy thường gặp
- **Trung vị của dữ liệu chưa sắp xếp:** hãy sắp xếp trước.
- **Bài toán về trung bình:** làm việc với tổng, không làm với hiệu các trung bình.
- **Hoán vị hay tổ hợp:** thứ tự có quan trọng không? Một ban: không; xếp hạng hay các vai trò khác nhau: có.
- **"Và" với "hoặc":** nhân với "và" khi các biến cố độc lập; với "hoặc", cộng rồi trừ phần chung.
- **Mẫu số của xác suất có điều kiện** là tổng của nhóm thoả điều kiện, không phải tổng chung.
:::

:::terms
- mean, median, mode, range | trung bình, trung vị, mốt, khoảng biến thiên
- standard deviation | độ lệch chuẩn
- weighted average | trung bình có trọng số
- multiplication principle | quy tắc nhân
- permutation, combination | hoán vị, tổ hợp
- independent events | biến cố độc lập
- conditional probability | xác suất có điều kiện
- expected value | giá trị kì vọng
:::

## Bài tập tương tự

:::exercise
Tìm trung vị của dữ liệu $3, 8, 1, 9, 5, 12$.

::hint
**Kiến thức:** sắp xếp dữ liệu; khi số giá trị chẵn, lấy trung bình của hai giá trị giữa.

::solution
Sắp xếp dữ liệu, ta được $1, 3, 5, 8, 9, 12$.

Có $6$ giá trị, nên trung vị là trung bình của giá trị thứ ba và thứ tư:
$$\frac{5+8}{2}=6{,}5.$$

Vậy trung vị của dữ liệu là $6{,}5$.

**Đáp số.** $6{,}5$.
:::

:::exercise
Trung bình của bốn số là $15$. Ba trong bốn số là $12$, $18$ và $10$. Tìm số thứ tư.

::hint
**Kiến thức:** tổng $=$ trung bình $\times$ số giá trị.

::solution
Tổng của bốn số là $4\times15=60$.

Ba số đã biết có tổng $12+18+10=40$.

Do đó số thứ tư là $60-40=20$.

Vậy số thứ tư là $20$.

**Đáp số.** $20$.
:::

:::exercise
Gieo hai con xúc xắc cân đối sáu mặt. Tính xác suất để tổng số chấm bằng $7$.

::hint
**Kiến thức:** có $36$ kết quả đồng khả năng; liệt kê các cặp có tổng bằng $7$.

::solution
Mỗi con xúc xắc có $6$ kết quả, nên có $6\times6=36$ kết quả đồng khả năng.

Các cặp có tổng bằng $7$ là $(1,6)$, $(2,5)$, $(3,4)$, $(4,3)$, $(5,2)$ và $(6,1)$: có $6$ kết quả.

Vậy xác suất để tổng số chấm bằng $7$ là $\dfrac{6}{36}=\dfrac16$.

**Đáp số.** $\dfrac16$.
:::

:::exercise
Một ổ khoá dùng mã gồm $4$ chữ số từ $0$ đến $9$. Có bao nhiêu mã nếu các chữ số được lặp lại? Có bao nhiêu mã nếu bốn chữ số phải khác nhau?

::hint
**Kiến thức:** quy tắc nhân; khi không lặp lại, mỗi vị trí ít hơn vị trí trước một lựa chọn.

::solution
Khi được lặp lại, mỗi vị trí trong $4$ vị trí có $10$ lựa chọn, nên có $10^4=10.000$ mã.

Khi không lặp lại, các vị trí lần lượt có $10$, $9$, $8$ và $7$ lựa chọn, nên có $10\times9\times8\times7=5040$ mã.

Vậy có $10.000$ mã khi được lặp lại và $5040$ mã khi bốn chữ số khác nhau.

**Đáp số.** $10.000$ và $5040$.
:::

:::exercise
Có bao nhiêu cách chọn $2$ học sinh từ một nhóm $6$ học sinh?

::hint
**Kiến thức:** không tính thứ tự, nên dùng $\dbinom62$.

::solution
Chọn một cặp học sinh không phụ thuộc thứ tự, nên số cách chọn là
$$\binom62=\frac{6\times5}{2\times1}=15.$$

Vậy có $15$ cách chọn hai học sinh.

**Đáp số.** $15$.
:::

## Bài tập vận dụng

:::exercise
Điểm tổng kết một môn học gồm $60\%$ điểm kiểm tra và $40\%$ điểm bài tập về nhà. Điểm kiểm tra trung bình của Hoa là $80$ và điểm bài tập về nhà trung bình là $95$. Tính điểm tổng kết của Hoa.

::hint
**Kiến thức:** trung bình có trọng số: nhân mỗi phần với trọng số của nó rồi cộng lại.

::solution
Điểm tổng kết là trung bình có trọng số
$$0{,}6\times80+0{,}4\times95=48+38=86.$$

Vậy điểm tổng kết của Hoa là $86$.

**Đáp số.** $86$.
:::

:::exercise
Một hộp có $20$ bóng đèn, trong đó $3$ bóng bị lỗi. Lấy ngẫu nhiên lần lượt hai bóng không hoàn lại. Tính xác suất cả hai bóng đều bị lỗi.

::hint
**Kiến thức:** sau khi lấy được một bóng lỗi, còn $2$ bóng lỗi trong $19$ bóng.

::solution
Xác suất bóng thứ nhất bị lỗi là $\dfrac{3}{20}$.

Nếu bóng thứ nhất bị lỗi, còn $2$ bóng lỗi trong $19$ bóng, nên xác suất bóng thứ hai cũng bị lỗi là $\dfrac{2}{19}$.

Do đó
$$P(\text{cả hai bị lỗi})=\frac{3}{20}\times\frac{2}{19}=\frac{6}{380}=\frac{3}{190}.$$

Vậy xác suất cả hai bóng đều bị lỗi là $\dfrac{3}{190}$, khoảng $0{,}016$.

**Đáp số.** $\dfrac{3}{190}$.
:::

:::exercise
Với các học sinh trong một lớp, đường thẳng khớp nhất (line of best fit) giữa số giờ tự học mỗi tuần $x$ và điểm kiểm tra $y$ là $y=2{,}5x+40$. Dự đoán điểm của một học sinh tự học $8$ giờ mỗi tuần, và giải thích ý nghĩa của hệ số góc.

::hint
**Kiến thức:** thay $x=8$; hệ số góc là mức thay đổi của $y$ khi $x$ tăng thêm một đơn vị.

::solution
Thay $x=8$, ta được $y=2{,}5(8)+40=20+40=60$.

Hệ số góc $2{,}5$ có nghĩa là mỗi giờ tự học thêm mỗi tuần gắn với điểm kiểm tra cao hơn khoảng $2{,}5$ điểm.

Vậy điểm dự đoán là $60$, và mỗi giờ tự học thêm mỗi tuần tăng khoảng $2{,}5$ điểm.

**Đáp số.** $60$ điểm.
:::

:::exercise Thử thách
Gieo một con xúc xắc cân đối $4$ lần. Tính xác suất có ít nhất một lần ra mặt $6$ chấm.

::hint
**Kiến thức:** dùng biến cố đối: $P(\text{ít nhất một lần }6)=1-P(\text{không lần nào }6)$.

::solution
Xác suất không ra mặt $6$ trong một lần gieo là $\dfrac56$. Các lần gieo độc lập, nên xác suất không lần nào ra mặt $6$ trong $4$ lần là $\left(\dfrac56\right)^4=\dfrac{625}{1296}$.

Do đó
$$P(\text{ít nhất một lần }6)=1-\frac{625}{1296}=\frac{671}{1296}\approx0{,}518.$$

Vậy xác suất có ít nhất một lần ra mặt $6$ là $\dfrac{671}{1296}$, nhỉnh hơn một nửa.

**Đáp số.** $\dfrac{671}{1296}\approx0{,}518$.
:::

:::quiz
::mc
Mốt của $2, 3, 3, 5, 7, 7, 7$ là
A. $3$
B. $5$
C. $7$
D. $4$
::key C
$7$ xuất hiện ba lần, nhiều hơn mọi giá trị khác.

::mc
Một vòng quay có $8$ ô bằng nhau, trong đó $3$ ô màu xanh. Xác suất kim dừng ở ô xanh là
A. $\dfrac38$
B. $\dfrac35$
C. $\dfrac58$
D. $\dfrac13$
::key A
Có $3$ ô thuận lợi trong $8$ ô.

::mc
Có bao nhiêu cách xếp $5$ quyển sách khác nhau lên một giá?
A. $25$
B. $60$
C. $15$
D. $120$
::key D
$5!=120$.

::mc
Số trung bình của $2, 4, 6, 8, 10$ là
A. $5$
B. $6$
C. $30$
D. $7$
::key B
$\dfrac{30}{5}=6$.

::tf
Xét dữ liệu $1, 2, 2, 3, 10$. Xét tính đúng sai của các mệnh đề sau:
a) Số trung bình bằng $3{,}6$.
b) Trung vị bằng $2$.
c) Mốt bằng $2$.
d) Bỏ giá trị $10$ đi thì số trung bình tăng.
::key T T T F
Số trung bình là $\dfrac{18}{5}=3{,}6$; bỏ giá trị $10$ thì số trung bình còn $2$.

::sa
Có bao nhiêu cách chọn $2$ đồ vật từ $5$ đồ vật?
::key 10
$\dbinom52=10$.

::sa
Tung một đồng xu cân đối hai lần. Tính xác suất được hai lần mặt sấp.
::key 0,25
$\dfrac12\times\dfrac12=0{,}25$.
:::
