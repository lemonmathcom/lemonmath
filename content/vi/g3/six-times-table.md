---
title: Bảng nhân 6, bảng chia 6
description: Em học bảng nhân 6 bằng cách gấp đôi bảng nhân 3 và cộng thêm 6, rồi dùng bảng nhân 6 để chia cho 6 và giải bài toán.
minutes: 15
---

:::goals
- Thuộc và lập được bảng nhân 6.
- Dùng bảng nhân 6 để chia cho 6.
- Giải bài toán có lời văn bằng một phép nhân hoặc một phép chia.
:::

Một vỉ có $6$ quả trứng. Mẹ mua $4$ vỉ như vậy. Hỏi mẹ mua tất cả bao nhiêu quả trứng?

Em có thể cộng $6+6+6+6$, nhưng cộng nhiều lần dễ nhầm. Bài này giúp em tính nhanh bằng bảng nhân $6$.

## Cùng khám phá

Mỗi vỉ có $6$ quả. Ta cộng dần từng vỉ:

- $1$ vỉ: $6$ quả.
- $2$ vỉ: $6+6=12$ quả.
- $3$ vỉ: $12+6=18$ quả.
- $4$ vỉ: $18+6=24$ quả.

Vậy $4$ vỉ có $24$ quả trứng, tức là $6\times4=24$. Mỗi lần thêm một vỉ, tích tăng thêm $6$.

:::graph Trên tia số: mỗi bước nhảy 6 đơn vị
alt: Tia số từ 0 đến 36 đánh dấu các điểm 0, 6, 12, 18, 24, 30 và 36, mỗi điểm cách điểm trước 6 đơn vị
x: -1..38
y: -1..1
segment: (0, 0) (36, 0)
point: (0, 0) "0" below
point: (6, 0) "6" above
point: (12, 0) "12" below
point: (18, 0) "18" above
point: (24, 0) "24" below
point: (30, 0) "30" above
point: (36, 0) "36" below
:::

Em còn một mẹo nữa: $6$ gấp đôi $3$, nên $6\times4$ gấp đôi $3\times4=12$, và $12+12=24$.

:::theorem Bảng nhân 6
Muốn tính $6\times n$, em lấy $6\times(n-1)$ rồi cộng thêm $6$. Em cũng có thể lấy $3\times n$ rồi gấp đôi.

| $6\times1$ | $6\times2$ | $6\times3$ | $6\times4$ | $6\times5$ |
|---|---|---|---|---|
| $6$ | $12$ | $18$ | $24$ | $30$ |

| $6\times6$ | $6\times7$ | $6\times8$ | $6\times9$ | $6\times10$ |
|---|---|---|---|---|
| $36$ | $42$ | $48$ | $54$ | $60$ |
:::

Bảng chia $6$ suy ra từ bảng nhân $6$. Vì $6\times4=24$ nên $24:6=4$. Em chia $24$ quả thành các vỉ $6$ quả thì được $4$ vỉ.

## Ví dụ

Ta bắt đầu bằng mẹo gấp đôi bảng nhân $3$.

:::example Tính $6\times4$ bằng cách gấp đôi
**Lời giải.** Ta có $3\times4=12$. Mà $6$ gấp đôi $3$ nên $6\times4$ gấp đôi $3\times4$:
$$6\times4=12+12=24.$$
Vậy $6\times4=24$.
:::

Bây giờ em lấy tích liền trước cộng thêm $6$.

:::example Tính $6\times7$
**Lời giải.** Em biết $6\times6=36$. Thêm một nhóm $6$ nữa:
$$6\times7=6\times6+6=36+6=42.$$
Vậy $6\times7=42$.
:::

Có khi em lấy tích liền sau rồi bớt đi $6$ sẽ dễ hơn.

:::example Tính $6\times9$
**Lời giải.** Em biết $6\times10=60$. Bớt đi một nhóm $6$:
$$6\times9=6\times10-6=60-6=54.$$
Vậy $6\times9=54$.
:::

Tiếp theo là phép chia.

:::example Tính $48:6$
**Lời giải.** Em tìm số nào nhân $6$ bằng $48$. Trong bảng nhân $6$ ta có $6\times8=48$, nên
$$48:6=8.$$
**Thử lại.** $6\times8=48$. Đúng.

Vậy $48:6=8$.
:::

Cuối cùng, em giải một bài toán có lời văn.

:::example Gói kẹo
Có $30$ cái kẹo, chia vào các túi, mỗi túi $6$ cái. Hỏi chia được bao nhiêu túi?

**Lời giải.** Em chia $30$ cái kẹo thành các nhóm $6$ cái, nên em làm phép chia. Số túi là:
$$30:6=5\ \text{(túi)}.$$
**Thử lại.** $6\times5=30$. Đúng.

Vậy chia được $5$ túi.
:::

:::warning Những lỗi em hay gặp
- **Lấy sai hàng liền kề.** Sai: $6\times7=48$. Vì sao sai: $48$ là $6\times8$. Đúng: $6\times7=36+6=42$.
- **Nhầm nhân với cộng.** Sai: $6\times6=12$. Vì sao sai: $6+6=12$ là phép cộng, còn $6\times6$ là $6$ nhóm $6$. Đúng: $6\times6=36$.
- **Chia nhầm.** Sai: $48:6=7$. Vì sao sai: $6\times7=42$, không phải $48$. Đúng: $6\times8=48$ nên $48:6=8$.
- **Quên đơn vị.** Sai: "Đáp số: $5$". Đúng: "Đáp số: $5$ túi".
:::

## Thuật ngữ

:::terms
- bảng nhân 6 | 6 times table
- bảng chia 6 | division facts for 6
- thừa số | factor
- tích | product
- số bị chia | dividend
- số chia | divisor
- thương | quotient
- gấp đôi | double
:::

## Tóm tắt

- Bảng nhân $6$: $6,\ 12,\ 18,\ 24,\ 30,\ 36,\ 42,\ 48,\ 54,\ 60$.
- Mỗi lần thêm một nhóm, tích tăng thêm $6$: $6\times n=6\times(n-1)+6$.
- $6$ gấp đôi $3$, nên $6\times n$ gấp đôi $3\times n$.
- Từ $6\times a=b$ ta có $b:6=a$ và $b:a=6$.
- Ghi đơn vị trong đáp số; thử lại phép chia bằng phép nhân.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính:

a) $6\times3$.

b) $6\times5$.

c) $6\times8$.

::hint
**Kiến thức:** bảng nhân $6$: mỗi lần thêm một nhóm, tích tăng thêm $6$.

**Gợi ý các bước:**
1. Đếm cách $6$: $6,\ 12,\ 18,\ \dots$
2. Dừng ở số thứ tự cần tìm.

::solution
a) $6\times3=18$.

b) $6\times5=30$.

c) $6\times8=48$.

**Đáp số.** a) $18$; b) $30$; c) $48$.
:::

:::exercise
Tính:

a) $6\times7$.

b) $6\times9$.

c) $6\times10$.

::hint
**Kiến thức:** $6\times n=6\times(n-1)+6$.

**Gợi ý các bước:**
1. Nhớ tích liền trước.
2. Cộng thêm $6$.

::solution
a) $6\times7=36+6=42$.

b) $6\times9=48+6=54$.

c) $6\times10=54+6=60$.

**Đáp số.** a) $42$; b) $54$; c) $60$.
:::

:::exercise
Em hãy nhớ lại bảng nhân $4$. Tính rồi so sánh:

a) $4\times6$.

b) $6\times4$.

c) $4\times9$ và $6\times6$.

::hint
**Kiến thức:** đổi chỗ hai thừa số thì tích không đổi.

**Gợi ý các bước:**
1. Tính từng tích bằng bảng nhân $4$ hoặc $6$.
2. So sánh kết quả.

::solution
a) $4\times6=24$.

b) $6\times4=24$, bằng $4\times6$.

c) $4\times9=36$ và $6\times6=36$, hai tích bằng nhau.

**Đáp số.** a) $24$; b) $24$; c) $36$ và $36$.
:::

:::exercise
Tính:

a) $18:6$.

b) $42:6$.

c) $60:6$.

::hint
**Kiến thức:** từ $6\times a=b$ ta có $b:6=a$.

**Gợi ý các bước:**
1. Tìm trong bảng nhân $6$ tích bằng số bị chia.
2. Số còn lại là thương.

::solution
a) $6\times3=18$ nên $18:6=3$.

b) $6\times7=42$ nên $42:6=7$.

c) $6\times10=60$ nên $60:6=10$.

**Đáp số.** a) $3$; b) $7$; c) $10$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống. Vì sao?

a) $6\times5 \;\square\; 28$.

b) $36:6 \;\square\; 6\times1$.

c) $6\times8 \;\square\; 6\times7+6$.

::hint
**Kiến thức:** tính từng vế trước, rồi so sánh hai số.

**Gợi ý các bước:**
1. Tính mỗi vế bằng bảng nhân, bảng chia.
2. So sánh kết quả.

::solution
a) $6\times5=30$ và $30>28$ nên $6\times5>28$.

b) $36:6=6$ và $6\times1=6$ nên hai vế bằng nhau.

c) $6\times8=48$ và $6\times7+6=42+6=48$ nên hai vế bằng nhau.

**Đáp số.** a) $>$; b) $=$; c) $=$.
:::

:::exercise
Hoa viết: "$6\times7=48$". Hoa sai ở đâu? Hãy sửa lại.

::hint
**Kiến thức:** $6\times7=6\times6+6$.

**Gợi ý các bước:**
1. Hoa đã lấy tích của số nào? Hãy tìm $48$ trong bảng nhân $6$.
2. Tính lại $6\times7$ từ tích liền trước.

::solution
$48$ là $6\times8$. Ta có $6\times7=6\times6+6=36+6=42$.

**Thử lại.** $42:6=7$. Đúng.

**Đáp số.** Hoa lấy nhầm tích liền sau; $6\times7=42$.
:::

:::exercise
a) Mỗi vỉ có $6$ quả trứng. Hỏi $8$ vỉ như vậy có bao nhiêu quả trứng?

b) Có $54$ quả trứng xếp vào các vỉ, mỗi vỉ $6$ quả. Hỏi xếp được bao nhiêu vỉ?

::hint
**Kiến thức:** các nhóm bằng nhau: tìm số vật thì nhân, tìm số nhóm thì chia.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Chọn phép tính, tính rồi ghi đáp số có đơn vị.

::solution
a) Số quả trứng là $6\times8=48$ (quả).

b) Số vỉ là $54:6=9$ (vỉ).

**Đáp số.** a) $48$ quả trứng; b) $9$ vỉ.
:::

:::exercise Thử thách
Có $60$ học sinh xếp thành các hàng, mỗi hàng $6$ em. Cô giáo đã xếp được $7$ hàng. Hỏi:

a) Cần xếp tất cả bao nhiêu hàng?

b) Còn bao nhiêu hàng chưa xếp, và còn bao nhiêu học sinh chưa xếp?

::hint
**Kiến thức:** số hàng là $60:6$; số học sinh đã xếp là $6\times7$.

**Gợi ý các bước:**
1. Tính tổng số hàng.
2. Trừ số hàng đã xếp, rồi tính số học sinh còn lại.

::solution
a) Số hàng cần xếp là $60:6=10$ (hàng).

b) Số hàng chưa xếp là $10-7=3$ (hàng). Số học sinh đã xếp là $6\times7=42$ (em), nên số học sinh chưa xếp là $60-42=18$ (em). Kiểm tra: $6\times3=18$.

**Đáp số.** a) $10$ hàng; b) $3$ hàng và $18$ học sinh.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $6\times5$ là
A. $11$.
B. $30$.
C. $36$.
D. $25$.
::key B
$6\times5=6\times4+6=24+6=30$. Phương án A là lỗi cộng $6+5$.

::mc
Kết quả của $6\times8$ là
A. $42$.
B. $54$.
C. $48$.
D. $14$.
::key C
$6\times8=42+6=48$. Phương án A là $6\times7$, thiếu một nhóm $6$.

::mc
Kết quả của $54:6$ là
A. $8$.
B. $9$.
C. $10$.
D. $48$.
::key B
Vì $6\times9=54$ nên $54:6=9$. Phương án A là lỗi nhớ nhầm $6\times8=48$.

::mc
Mỗi hộp có $6$ chiếc bánh. Hỏi $7$ hộp như vậy có bao nhiêu chiếc bánh?
A. $13$ chiếc.
B. $36$ chiếc.
C. $42$ chiếc.
D. $48$ chiếc.
::key C
$7$ nhóm, mỗi nhóm $6$ chiếc: $6\times7=42$. Phương án A là lỗi cộng $6+7$.

::tf
Em xét phép nhân $6\times6=36$.
a) $6\times6=6\times5+6$.
b) $36:6=6$.
c) $36:9=6$.
d) $6\times6$ bé hơn $30$.
::key Đ Đ S S
a) Đúng: $30+6=36$. b) Đúng: $6\times6=36$. c) Sai: $36:9=4$. d) Sai: $36>30$.

::sa
Tính $6\times9$.
::key 54
$6\times9=6\times10-6=60-6=54$.

::sa
Có $48$ quả trứng xếp vào các vỉ, mỗi vỉ $6$ quả. Hỏi xếp được bao nhiêu vỉ?
::key 8
$48:6=8$ (vỉ), vì $6\times8=48$.
:::
