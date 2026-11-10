---
title: Biểu đồ cột
description: Em học cách đọc biểu đồ cột: đọc số liệu của từng cột, so sánh các cột, tìm cột cao nhất và thấp nhất, rồi tính tổng và hiệu.
minutes: 15
---

:::goals
- Biết các phần của biểu đồ cột: cột, trục ngang, trục dọc.
- Đọc được số liệu của từng cột, tìm cột cao nhất và thấp nhất.
- So sánh các cột bằng phép trừ, tính tổng và trung bình cộng từ biểu đồ.
:::

Thư viện lớp em ghi số quyển sách các bạn mượn mỗi ngày trong tuần rồi vẽ thành biểu đồ cột. Ngày nào các bạn mượn nhiều sách nhất? Ngày nào ít nhất?

Em đã biết đọc một dãy số liệu. Biểu đồ cột giúp em nhìn các số liệu đó thành những cột cao thấp khác nhau.

## Cùng khám phá

Hãy nhìn biểu đồ dưới đây.

:::diagram Số quyển sách mượn mỗi ngày trong tuần
alt: Biểu đồ cột có năm cột ứng với T2 đến T6, cao lần lượt 6, 10, 8, 12 và 4; trục dọc ghi các số 2, 4, đến 12
point P1 1,0 ""
point P2 2,0 ""
point P3 2,6 ""
point P4 1,6 ""
point P5 3,0 ""
point P6 4,0 ""
point P7 4,10 ""
point P8 3,10 ""
point P9 5,0 ""
point P10 6,0 ""
point P11 6,8 ""
point P12 5,8 ""
point P13 7,0 ""
point P14 8,0 ""
point P15 8,12 ""
point P16 7,12 ""
point P17 9,0 ""
point P18 10,0 ""
point P19 10,4 ""
point P20 9,4 ""
polygon P1 P2 P3 P4
polygon P5 P6 P7 P8
polygon P9 P10 P11 P12
polygon P13 P14 P15 P16
polygon P17 P18 P19 P20
grid
label 1.5,-0.8 "T2"
label 1.5,6.6 "6"
label 3.5,-0.8 "T3"
label 3.5,10.6 "10"
label 5.5,-0.8 "T4"
label 5.5,8.6 "8"
label 7.5,-0.8 "T5"
label 7.5,12.6 "12"
label 9.5,-0.8 "T6"
label 9.5,4.6 "4"
label 0.3,2 "2"
label 0.3,4 "4"
label 0.3,6 "6"
label 0.3,8 "8"
label 0.3,10 "10"
label 0.3,12 "12"
:::

- Các cột đứng cạnh nhau. Mỗi cột ứng với một ngày: T2 là Thứ Hai, T3 là Thứ Ba, và cứ thế.
- Trên đỉnh mỗi cột có ghi số quyển sách. Cột Thứ Hai ghi $6$.
- Mép trái ghi các số $2, 4, 6, \ldots, 12$. Đó là số quyển sách.

Cột nào cao hơn thì số quyển sách nhiều hơn. Cột Thứ Năm cao nhất, ghi $12$. Cột Thứ Sáu thấp nhất, ghi $4$. Vậy Thứ Năm mượn nhiều nhất, Thứ Sáu ít nhất.

:::definition Biểu đồ cột
**Biểu đồ cột** dùng các cột có chiều rộng bằng nhau để biểu diễn số liệu. **Trục ngang** cho biết các đối tượng (ví dụ các ngày). **Trục dọc** cho biết số liệu. Cột càng cao thì số liệu càng lớn.
:::

Khi đọc một biểu đồ cột, em làm ba việc: xem tên biểu đồ và hai trục để biết biểu đồ nói về gì; xem mỗi vạch ứng với mấy đơn vị; rồi nhìn đỉnh cột để đọc số liệu.

## Ví dụ

Ta bắt đầu bằng việc đọc số liệu của từng cột.

:::example Đọc biểu đồ
Dùng biểu đồ trên. Hỏi: a) Thứ Ba các bạn mượn bao nhiêu quyển? b) Ngày nào mượn nhiều nhất, bao nhiêu quyển? c) Ngày nào mượn ít nhất?

**Lời giải.** Ta nhìn số ghi trên đỉnh mỗi cột:

a) Cột Thứ Ba ghi $10$, nên các bạn mượn $10$ quyển.

b) Cột cao nhất là cột Thứ Năm, ghi $12$. Vậy Thứ Năm mượn nhiều nhất, $12$ quyển.

c) Cột thấp nhất là cột Thứ Sáu. Vậy Thứ Sáu mượn ít nhất, $4$ quyển.
:::

Bây giờ ta so sánh hai cột bằng phép trừ.

:::example So sánh hai cột
Thứ Năm các bạn mượn nhiều hơn Thứ Hai bao nhiêu quyển?

**Lời giải.** Thứ Năm mượn $12$ quyển, Thứ Hai mượn $6$ quyển. Muốn biết nhiều hơn bao nhiêu, ta lấy số lớn trừ số bé:
$$12-6=6\ \text{(quyển)}.$$
Vậy Thứ Năm mượn nhiều hơn Thứ Hai $6$ quyển.
:::

Ta cũng có thể cộng các cột và tìm trung bình cộng.

:::example Cả tuần
Cả tuần các bạn mượn tất cả bao nhiêu quyển? Trung bình mỗi ngày mượn bao nhiêu quyển?

**Lời giải.** Cộng số quyển của cả năm ngày:
$$6+10+8+12+4=40\ \text{(quyển)}.$$
Trung bình mỗi ngày là tổng chia cho số ngày:
$$40:5=8\ \text{(quyển)}.$$
Vậy cả tuần mượn $40$ quyển, trung bình mỗi ngày $8$ quyển.
:::

Cuối cùng, ta tìm các cột thoả một điều kiện.

:::example Hơn $7$ quyển
Những ngày nào các bạn mượn nhiều hơn $7$ quyển?

**Lời giải.** Ta so sánh số trên đỉnh từng cột với $7$: Thứ Hai $6<7$; Thứ Ba $10>7$; Thứ Tư $8>7$; Thứ Năm $12>7$; Thứ Sáu $4<7$.

Vậy các ngày mượn nhiều hơn $7$ quyển là Thứ Ba, Thứ Tư và Thứ Năm.
:::

:::warning Những lỗi em hay gặp
- **Đọc nhầm cột.** Sai: nhìn cột Thứ Tư rồi đọc số của cột Thứ Ba. Vì sao sai: mỗi cột ứng với đúng một ngày. Đúng: đọc số ngay trên đỉnh cột của ngày đó.
- **Cộng thay vì trừ khi so sánh.** Sai: Thứ Năm hơn Thứ Hai là $12+6=18$ quyển. Vì sao sai: "hơn bao nhiêu" là hiệu hai số. Đúng: $12-6=6$.
- **Bỏ sót một cột khi tính tổng.** Sai: $6+10+8+12=36$. Vì sao sai: quên cột Thứ Sáu. Đúng: $6+10+8+12+4=40$.
:::

## Thuật ngữ

:::terms
- biểu đồ cột | bar chart
- cột | bar
- trục ngang | horizontal axis
- trục dọc | vertical axis
- vạch chia | scale mark
- so sánh | compare
- số liệu | data value
:::

## Tóm tắt

- Biểu đồ cột dùng các cột để biểu diễn số liệu; cột cao hơn thì số liệu lớn hơn.
- Trục ngang cho các đối tượng, trục dọc cho số liệu.
- Đọc số liệu ở đỉnh mỗi cột.
- Hơn kém bao nhiêu: lấy số lớn trừ số bé.
- Tổng: cộng tất cả các cột; trung bình cộng: lấy tổng chia cho số cột.

## Luyện tập

Các bài dưới đây dùng biểu đồ trong bài học (số quyển sách mượn: T2 $6$, T3 $10$, T4 $8$, T5 $12$, T6 $4$) hoặc mô tả biểu đồ bằng lời. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Ngày nào các bạn mượn ít nhất, và mượn bao nhiêu quyển?

::hint
**Kiến thức:** cột thấp nhất ứng với số liệu bé nhất.

**Gợi ý các bước:**
1. Tìm cột thấp nhất.
2. Đọc số trên đỉnh cột.

::solution
Cột thấp nhất là cột Thứ Sáu, ghi $4$.

**Đáp số.** Thứ Sáu, $4$ quyển.
:::

:::exercise
Thứ Ba các bạn mượn nhiều hơn Thứ Sáu bao nhiêu quyển?

::hint
**Kiến thức:** hơn bao nhiêu thì lấy số lớn trừ số bé.

**Gợi ý các bước:**
1. Đọc số quyển của hai ngày.
2. Lấy số lớn trừ số bé.

::solution
$10-4=6$ (quyển).

**Đáp số.** $6$ quyển.
:::

:::exercise
Em hãy nhớ lại bài trước: viết dãy số liệu của biểu đồ theo thứ tự các ngày từ Thứ Hai đến Thứ Sáu, rồi sắp xếp từ bé đến lớn.

::hint
**Kiến thức:** dãy số liệu viết theo thứ tự đề cho; sắp xếp phải viết đủ mọi số.

**Gợi ý các bước:**
1. Đọc số trên đỉnh từng cột từ trái sang phải.
2. Sắp xếp các số từ bé đến lớn.

::solution
Dãy số liệu: $6, 10, 8, 12, 4$. Sắp xếp từ bé đến lớn: $4, 6, 8, 10, 12$.

**Đáp số.** $6, 10, 8, 12, 4$; sắp xếp: $4, 6, 8, 10, 12$.
:::

:::exercise
Ngày nào các bạn mượn số quyển đúng gấp đôi ngày Thứ Sáu?

::hint
**Kiến thức:** gấp đôi nghĩa là nhân với $2$.

**Gợi ý các bước:**
1. Tính số quyển của Thứ Sáu nhân $2$.
2. Tìm ngày có số quyển đó.

::solution
Thứ Sáu mượn $4$ quyển, gấp đôi là $4\times2=8$ quyển. Cột ghi $8$ là Thứ Tư.

**Đáp số.** Thứ Tư.
:::

:::exercise
Biểu đồ cột cho số bạn thích môn thể thao: cột bóng đá cao $12$, cột bơi $8$, cột cầu lông $6$, cột cờ vua $4$. Muốn biết tổng số bạn được hỏi, ta làm phép tính gì? Vì sao? Tính kết quả.

::hint
**Kiến thức:** mỗi cột là số bạn của một môn; mỗi bạn chỉ chọn một môn.

**Gợi ý các bước:**
1. Hỏi: tổng nghĩa là gộp lại hay so sánh?
2. Cộng các số trên đỉnh cột.

::solution
Ta làm phép cộng vì tổng số bạn là số bạn của cả bốn môn gộp lại: $12+8+6+4=30$ (bạn).

**Đáp số.** Phép cộng; $30$ bạn.
:::

:::exercise
Hà nói: "Thứ Năm mượn $12$ quyển, Thứ Sáu mượn $4$ quyển, nên Thứ Năm mượn nhiều hơn Thứ Sáu là $12+4=16$ quyển." Hà sai ở đâu? Hãy làm lại cho đúng.

::hint
**Kiến thức:** "nhiều hơn bao nhiêu" là hiệu của hai số.

**Gợi ý các bước:**
1. Xem Hà dùng phép tính gì.
2. Làm lại bằng phép tính đúng.

::solution
Hà dùng phép cộng, nhưng phải dùng phép trừ: $12-4=8$ (quyển).

**Đáp số.** $8$ quyển.
:::

:::exercise
Biểu đồ cột cho số cây trồng của bốn lớp, mỗi vạch ứng với $5$ cây: lớp $4$A cao $5$ vạch, lớp $4$B cao $6$ vạch, lớp $4$C cao $4$ vạch, lớp $4$D cao $5$ vạch.
a) Mỗi lớp trồng bao nhiêu cây?
b) Lớp nhiều nhất trồng hơn lớp ít nhất bao nhiêu cây?
c) Trung bình mỗi lớp trồng bao nhiêu cây?

::hint
**Kiến thức:** số cây bằng số vạch nhân $5$.

**Gợi ý các bước:**
1. Nhân số vạch của từng cột với $5$.
2. Lấy số lớn nhất trừ số bé nhất.
3. Cộng bốn số rồi chia cho $4$.

::solution
a) $4$A: $5\times5=25$; $4$B: $6\times5=30$; $4$C: $4\times5=20$; $4$D: $25$ (cây). b) $30-20=10$ (cây). c) $(25+30+20+25):4=100:4=25$ (cây).

**Đáp số.** a) $25$, $30$, $20$, $25$ cây; b) $10$ cây; c) $25$ cây.
:::

:::exercise Thử thách
Biểu đồ có ba cột A, B, C. Cột C cao $5$. Cột B cao hơn cột C là $3$. Cột A cao hơn cột B là $4$. Hỏi chiều cao mỗi cột và tổng chiều cao ba cột.

::hint
**Kiến thức:** cao hơn bao nhiêu thì cộng thêm bấy nhiêu.

**Gợi ý các bước:**
1. Tìm cột B từ cột C.
2. Tìm cột A từ cột B.
3. Cộng ba cột.

::solution
Cột B: $5+3=8$. Cột A: $8+4=12$. Tổng: $12+8+5=25$.

**Kiểm tra.** $12-8=4$ và $8-5=3$. Đúng.

**Đáp số.** A cao $12$, B cao $8$, C cao $5$; tổng $25$.
:::

## Kiểm tra mini

Các câu dưới đây dùng biểu đồ số quyển sách mượn trong bài (T2 $6$, T3 $10$, T4 $8$, T5 $12$, T6 $4$).

:::quiz
::mc
Cột cao nhất của biểu đồ cột ứng với
A. số liệu nhỏ nhất.
B. số liệu lớn nhất.
C. số liệu đầu tiên.
D. tổng các số liệu.
::key B
Cột càng cao thì số liệu càng lớn. Phương án C là lỗi chọn cột bên trái nhất.

::mc
Thứ Tư các bạn mượn bao nhiêu quyển sách?
A. $6$ quyển.
B. $10$ quyển.
C. $8$ quyển.
D. $12$ quyển.
::key C
Cột Thứ Tư ghi $8$. Phương án B là số của ngày Thứ Ba bên cạnh.

::mc
Thứ Năm mượn nhiều hơn Thứ Hai bao nhiêu quyển?
A. $18$ quyển.
B. $8$ quyển.
C. $12$ quyển.
D. $6$ quyển.
::key D
$12-6=6$. Phương án A là lấy $12+6$, nhầm sang phép cộng.

::mc
Cả tuần các bạn mượn tất cả bao nhiêu quyển?
A. $40$ quyển.
B. $8$ quyển.
C. $12$ quyển.
D. $36$ quyển.
::key A
$6+10+8+12+4=40$. Phương án D bỏ sót cột Thứ Sáu, B là trung bình mỗi ngày.

::tf
Em xét biểu đồ số quyển sách mượn.
a) Thứ Ba mượn $10$ quyển.
b) Thứ Sáu là ngày mượn ít nhất.
c) Có $3$ ngày mượn nhiều hơn $8$ quyển.
d) Bốn ngày từ Thứ Hai đến Thứ Năm mượn tất cả $36$ quyển.
::key Đ Đ S Đ
a) Đúng. b) Đúng: cột Thứ Sáu thấp nhất. c) Sai: chỉ Thứ Ba ($10$) và Thứ Năm ($12$) nhiều hơn $8$, tức $2$ ngày. d) Đúng: $6+10+8+12=36$.

::sa
Thứ Ba mượn nhiều hơn Thứ Sáu bao nhiêu quyển?
::key 6
$10-4=6$.

::sa
Trung bình mỗi ngày trong tuần các bạn mượn bao nhiêu quyển?
::key 8
$(6+10+8+12+4):5=40:5=8$.
:::
