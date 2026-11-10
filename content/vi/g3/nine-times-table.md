---
title: Bảng nhân 9, bảng chia 9
description: Em học bảng nhân 9 bằng mẹo lấy 10 lần rồi bớt đi, hoặc cộng thêm 9, rồi dùng bảng nhân 9 để chia cho 9 và giải bài toán.
minutes: 15
---

:::goals
- Thuộc và lập được bảng nhân 9.
- Dùng bảng nhân 9 để chia cho 9.
- Giải bài toán có lời văn bằng một phép nhân hoặc một phép chia.
:::

Mỗi hộp có $9$ cây bút màu. Hỏi $4$ hộp như vậy có tất cả bao nhiêu cây bút màu?

Em có thể cộng $9+9+9+9$, nhưng cộng nhiều lần thì chậm. Bài này giúp em tính nhanh bằng bảng nhân $9$.

## Cùng khám phá

Mỗi hộp là một nhóm $9$ cây. Ta cộng dần từng hộp:

- $1$ hộp: $9$ cây.
- $2$ hộp: $9+9=18$ cây.
- $3$ hộp: $18+9=27$ cây.
- $4$ hộp: $27+9=36$ cây.

Vậy $4$ hộp có $36$ cây bút màu, tức là $9\times4=36$. Mỗi lần thêm một hộp, tích tăng thêm $9$.

:::graph Trên tia số: mỗi bước nhảy 9 đơn vị
alt: Tia số từ 0 đến 54 đánh dấu các điểm 0, 9, 18, 27, 36, 45 và 54, mỗi điểm cách điểm trước 9 đơn vị
x: -1..56
y: -1..1
segment: (0, 0) (54, 0)
point: (0, 0) "0" below
point: (9, 0) "9" above
point: (18, 0) "18" below
point: (27, 0) "27" above
point: (36, 0) "36" below
point: (45, 0) "45" above
point: (54, 0) "54" below
:::

Em còn một mẹo hay: $9=10-1$, nên $9\times4=10\times4-4=40-4=36$.

:::theorem Bảng nhân 9
Muốn tính $9\times n$, em lấy $10\times n$ rồi bớt đi $n$. Em cũng có thể lấy $9\times(n-1)$ rồi cộng thêm $9$.

| $9\times1$ | $9\times2$ | $9\times3$ | $9\times4$ | $9\times5$ |
|---|---|---|---|---|
| $9$ | $18$ | $27$ | $36$ | $45$ |

| $9\times6$ | $9\times7$ | $9\times8$ | $9\times9$ | $9\times10$ |
|---|---|---|---|---|
| $54$ | $63$ | $72$ | $81$ | $90$ |
:::

Em để ý: các tích có hai chữ số trong bảng nhân $9$ đều có tổng hai chữ số bằng $9$. Ví dụ $63$ có $6+3=9$.

Bảng chia $9$ suy ra từ bảng nhân $9$. Vì $9\times4=36$ nên $36:9=4$. Em chia $36$ cây bút thành các hộp $9$ cây thì được $4$ hộp.

## Ví dụ

Ta bắt đầu bằng mẹo lấy $10$ lần rồi bớt đi.

:::example Tính $9\times4$
**Lời giải.** $9$ nhỏ hơn $10$ một đơn vị, nên $9\times4$ bằng $10\times4$ bớt đi $4$:
$$9\times4=40-4=36.$$
Vậy $9\times4=36$.
:::

Bây giờ em làm với số lớn hơn.

:::example Tính $9\times7$
**Lời giải.** Lấy $10\times7$ rồi bớt đi $7$:
$$9\times7=70-7=63.$$
**Kiểm tra.** $6+3=9$, đúng với mẹo tổng hai chữ số.

Vậy $9\times7=63$.
:::

Em cũng có thể lấy tích liền trước cộng thêm $9$.

:::example Tính $9\times8$
**Lời giải.** Em biết $9\times7=63$. Thêm một nhóm $9$ nữa:
$$9\times8=9\times7+9=63+9=72.$$
Vậy $9\times8=72$.
:::

Tiếp theo là phép chia.

:::example Tính $81:9$
**Lời giải.** Em tìm số nào nhân $9$ bằng $81$. Trong bảng nhân $9$ ta có $9\times9=81$, nên
$$81:9=9.$$
**Thử lại.** $9\times9=81$. Đúng.

Vậy $81:9=9$.
:::

Cuối cùng, em giải một bài toán có lời văn.

:::example Chia nhóm học sinh
Có $72$ học sinh chia thành các nhóm, mỗi nhóm $9$ em. Hỏi chia được bao nhiêu nhóm?

**Lời giải.** Em chia $72$ học sinh thành các nhóm $9$ em, nên em làm phép chia. Số nhóm là:
$$72:9=8\ \text{(nhóm)}.$$
**Thử lại.** $9\times8=72$. Đúng.

Vậy chia được $8$ nhóm.
:::

:::warning Những lỗi em hay gặp
- **Lấy thiếu một nhóm.** Sai: $9\times6=45$. Vì sao sai: $45$ là $9\times5$, em chưa đủ $6$ nhóm. Đúng: $9\times6=45+9=54$.
- **Cộng thay cho nhân.** Sai: $9\times3=12$. Vì sao sai: $9+3$ là phép cộng, còn $9\times3$ là $3$ nhóm $9$. Đúng: $9\times3=27$.
- **Chia nhầm.** Sai: $81:9=8$. Vì sao sai: $9\times8=72$, không phải $81$. Đúng: $9\times9=81$ nên $81:9=9$.
- **Quên đơn vị.** Sai: "Đáp số: $8$". Đúng: "Đáp số: $8$ nhóm".
:::

## Thuật ngữ

:::terms
- bảng nhân 9 | 9 times table
- bảng chia 9 | division facts for 9
- thừa số | factor
- tích | product
- số bị chia | dividend
- số chia | divisor
- thương | quotient
- tổng hai chữ số | sum of the two digits
:::

## Tóm tắt

- Bảng nhân $9$: $9,\ 18,\ 27,\ 36,\ 45,\ 54,\ 63,\ 72,\ 81,\ 90$.
- Mẹo: $9\times n=10\times n-n$. Hoặc $9\times n=9\times(n-1)+9$.
- Các tích có hai chữ số trong bảng nhân $9$ có tổng hai chữ số bằng $9$.
- Từ $9\times a=b$ ta có $b:9=a$ và $b:a=9$.
- Ghi đơn vị trong đáp số; thử lại phép chia bằng phép nhân.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính:

a) $9\times3$.

b) $9\times5$.

c) $9\times6$.

::hint
**Kiến thức:** bảng nhân $9$: mỗi lần thêm một nhóm, tích tăng thêm $9$.

**Gợi ý các bước:**
1. Đếm cách $9$: $9,\ 18,\ 27,\ \dots$
2. Dừng ở số thứ tự cần tìm.

::solution
a) $9\times3=27$.

b) $9\times5=45$.

c) $9\times6=54$.

**Đáp số.** a) $27$; b) $45$; c) $54$.
:::

:::exercise
Tính:

a) $9\times7$.

b) $9\times9$.

c) $9\times10$.

::hint
**Kiến thức:** $9\times n=10\times n-n$.

**Gợi ý các bước:**
1. Tính $10\times n$.
2. Bớt đi $n$.

::solution
a) $9\times7=70-7=63$.

b) $9\times9=90-9=81$.

c) $9\times10=100-10=90$.

**Đáp số.** a) $63$; b) $81$; c) $90$.
:::

:::exercise
Em hãy nhớ lại bảng nhân $8$. Tính rồi so sánh:

a) $8\times9$.

b) $9\times8$.

c) $8\times8$ và $9\times7$.

::hint
**Kiến thức:** đổi chỗ hai thừa số thì tích không đổi.

**Gợi ý các bước:**
1. Tính từng tích bằng bảng nhân $8$ hoặc $9$.
2. So sánh kết quả.

::solution
a) $8\times9=72$.

b) $9\times8=72$, bằng $8\times9$.

c) $8\times8=64$ và $9\times7=63$, nên $8\times8>9\times7$.

**Đáp số.** a) $72$; b) $72$; c) $64$ và $63$.
:::

:::exercise
Tính:

a) $27:9$.

b) $63:9$.

c) $90:9$.

::hint
**Kiến thức:** từ $9\times a=b$ ta có $b:9=a$.

**Gợi ý các bước:**
1. Tìm trong bảng nhân $9$ tích bằng số bị chia.
2. Số còn lại là thương.

::solution
a) $9\times3=27$ nên $27:9=3$.

b) $9\times7=63$ nên $63:9=7$.

c) $9\times10=90$ nên $90:9=10$.

**Đáp số.** a) $3$; b) $7$; c) $10$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống. Vì sao?

a) $9\times6 \;\square\; 50$.

b) $45:9 \;\square\; 9\times1$.

c) $9\times8 \;\square\; 8\times9$.

::hint
**Kiến thức:** tính từng vế trước, rồi so sánh hai số.

**Gợi ý các bước:**
1. Tính mỗi vế bằng bảng nhân, bảng chia.
2. So sánh kết quả.

::solution
a) $9\times6=54$ và $54>50$ nên $9\times6>50$.

b) $45:9=5$ và $9\times1=9$, $5<9$ nên $45:9<9\times1$.

c) $9\times8=72$ và $8\times9=72$ nên hai vế bằng nhau (đổi chỗ hai thừa số thì tích không đổi).

**Đáp số.** a) $>$; b) $<$; c) $=$.
:::

:::exercise
Khoa viết: "$9\times6=45$". Khoa sai ở đâu? Hãy sửa lại.

::hint
**Kiến thức:** $9\times6=9\times5+9$.

**Gợi ý các bước:**
1. $45$ là tích của $9$ với số nào?
2. Tính lại $9\times6$ từ tích liền trước.

::solution
$45=9\times5$, Khoa thiếu một nhóm $9$. Ta có $9\times6=45+9=54$.

**Thử lại.** $54:9=6$. Đúng.

**Đáp số.** Khoa thiếu một nhóm; $9\times6=54$.
:::

:::exercise
a) Mỗi hộp có $9$ cây bút màu. Hỏi $8$ hộp có bao nhiêu cây bút?

b) Có $81$ viên kẹo chia vào các túi, mỗi túi $9$ viên. Hỏi chia được bao nhiêu túi?

::hint
**Kiến thức:** các nhóm bằng nhau: tìm số vật thì nhân, tìm số nhóm thì chia.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Chọn phép tính, tính rồi ghi đáp số có đơn vị.

::solution
a) Số bút là $9\times8=72$ (cây).

b) Số túi là $81:9=9$ (túi).

**Đáp số.** a) $72$ cây bút; b) $9$ túi.
:::

:::exercise Thử thách
Em dùng mẹo tổng hai chữ số bằng $9$.

a) Trong các số $36,\ 45,\ 48,\ 72,\ 75$, số nào là tích trong bảng nhân $9$?

b) Chia mỗi số tìm được ở câu a) cho $9$.

::hint
**Kiến thức:** tích có hai chữ số trong bảng nhân $9$ có tổng hai chữ số bằng $9$.

**Gợi ý các bước:**
1. Tính tổng hai chữ số của từng số.
2. Chọn số có tổng bằng $9$, rồi chia cho $9$ bằng bảng chia $9$.

::solution
a) $3+6=9$, $4+5=9$, $4+8=12$, $7+2=9$, $7+5=12$. Vậy $36,\ 45,\ 72$ là tích trong bảng nhân $9$.

b) $36:9=4$, $45:9=5$, $72:9=8$.

**Thử lại.** $9\times4=36$, $9\times5=45$, $9\times8=72$.

**Đáp số.** a) $36,\ 45,\ 72$; b) $4,\ 5,\ 8$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $9\times4$ là
A. $36$.
B. $13$.
C. $45$.
D. $32$.
::key A
$9\times4=40-4=36$. Phương án B là lỗi cộng $9+4$, phương án D là $8\times4$.

::mc
Kết quả của $9\times7$ là
A. $54$.
B. $63$.
C. $72$.
D. $16$.
::key B
$9\times7=70-7=63$. Phương án A là $9\times6$, thiếu một nhóm $9$.

::mc
Kết quả của $54:9$ là
A. $5$.
B. $7$.
C. $6$.
D. $45$.
::key C
Vì $9\times6=54$ nên $54:9=6$. Phương án A là lỗi nhớ nhầm $9\times5=45$.

::mc
Mỗi hàng có $9$ cái ghế. Hỏi $5$ hàng như vậy có bao nhiêu cái ghế?
A. $14$ cái.
B. $36$ cái.
C. $54$ cái.
D. $45$ cái.
::key D
$5$ nhóm, mỗi nhóm $9$ cái: $9\times5=45$. Phương án A là lỗi cộng $9+5$.

::tf
Em xét phép nhân $9\times6=54$.
a) $9\times6=60-6$.
b) $54:9=6$.
c) Tổng hai chữ số của $54$ bằng $9$.
d) $54:6=8$.
::key Đ Đ Đ S
a) Đúng: $60-6=54$. b) Đúng: $9\times6=54$. c) Đúng: $5+4=9$. d) Sai: $54:6=9$.

::sa
Tính $9\times9$.
::key 81
$9\times9=90-9=81$.

::sa
Có $63$ cái bánh xếp vào các đĩa, mỗi đĩa $9$ cái. Hỏi xếp được bao nhiêu đĩa?
::key 7
$63:9=7$ (đĩa), vì $9\times7=63$.
:::
