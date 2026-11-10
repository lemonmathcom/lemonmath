---
title: Bảng nhân 8, bảng chia 8
description: Em học bảng nhân 8 bằng cách gấp đôi bảng nhân 4 hoặc cộng thêm 8, rồi dùng bảng nhân 8 để chia cho 8 và giải bài toán.
minutes: 15
---

:::goals
- Thuộc và lập được bảng nhân 8.
- Dùng bảng nhân 8 để chia cho 8.
- Giải bài toán có lời văn bằng một phép nhân hoặc một phép chia.
:::

Mỗi con nhện có $8$ cái chân. Hỏi $3$ con nhện có tất cả bao nhiêu cái chân?

Em có thể cộng $8+8+8$, nhưng với nhiều con nhện thì cộng sẽ chậm. Bài này giúp em tính nhanh bằng bảng nhân $8$.

## Cùng khám phá

Mỗi con nhện là một nhóm $8$ chân. Ta cộng dần từng con:

- $1$ con: $8$ chân.
- $2$ con: $8+8=16$ chân.
- $3$ con: $16+8=24$ chân.

Vậy $3$ con nhện có $24$ chân, tức là $8\times3=24$. Mỗi lần thêm một nhóm, tích tăng thêm $8$.

:::graph Trên tia số: mỗi bước nhảy 8 đơn vị
alt: Tia số từ 0 đến 48 đánh dấu các điểm 0, 8, 16, 24, 32, 40 và 48, mỗi điểm cách điểm trước 8 đơn vị
x: -1..50
y: -1..1
segment: (0, 0) (48, 0)
point: (0, 0) "0" below
point: (8, 0) "8" above
point: (16, 0) "16" below
point: (24, 0) "24" above
point: (32, 0) "32" below
point: (40, 0) "40" above
point: (48, 0) "48" below
:::

Em còn một mẹo nữa: $8$ gấp đôi $4$, nên $8\times3$ gấp đôi $4\times3=12$, và $12+12=24$.

:::theorem Bảng nhân 8
Muốn tính $8\times n$, em lấy $8\times(n-1)$ rồi cộng thêm $8$. Em cũng có thể lấy $4\times n$ rồi gấp đôi.

| $8\times1$ | $8\times2$ | $8\times3$ | $8\times4$ | $8\times5$ |
|---|---|---|---|---|
| $8$ | $16$ | $24$ | $32$ | $40$ |

| $8\times6$ | $8\times7$ | $8\times8$ | $8\times9$ | $8\times10$ |
|---|---|---|---|---|
| $48$ | $56$ | $64$ | $72$ | $80$ |
:::

Bảng chia $8$ suy ra từ bảng nhân $8$. Vì $8\times3=24$ nên $24:8=3$. Em chia $24$ chân thành các nhóm $8$ chân thì được $3$ nhóm.

## Ví dụ

Ta bắt đầu bằng mẹo gấp đôi bảng nhân $4$.

:::example Tính $8\times6$ bằng cách gấp đôi
**Lời giải.** Ta có $4\times6=24$. Mà $8$ gấp đôi $4$ nên $8\times6$ gấp đôi $4\times6$:
$$8\times6=24+24=48.$$
Vậy $8\times6=48$.
:::

Bây giờ em lấy tích liền trước cộng thêm $8$.

:::example Tính $8\times7$
**Lời giải.** Em biết $8\times6=48$. Thêm một nhóm $8$ nữa:
$$8\times7=8\times6+8=48+8=56.$$
Vậy $8\times7=56$.
:::

Có khi em lấy tích liền sau rồi bớt đi $8$ sẽ dễ hơn.

:::example Tính $8\times9$
**Lời giải.** Em biết $8\times10=80$. Bớt đi một nhóm $8$:
$$8\times9=8\times10-8=80-8=72.$$
Vậy $8\times9=72$.
:::

Tiếp theo là phép chia.

:::example Tính $64:8$
**Lời giải.** Em tìm số nào nhân $8$ bằng $64$. Trong bảng nhân $8$ ta có $8\times8=64$, nên
$$64:8=8.$$
**Thử lại.** $8\times8=64$. Đúng.

Vậy $64:8=8$.
:::

Cuối cùng, em giải một bài toán có lời văn.

:::example Chia bánh vào hộp
Có $40$ cái bánh, chia vào các hộp, mỗi hộp $8$ cái. Hỏi chia được bao nhiêu hộp?

**Lời giải.** Em chia $40$ cái bánh thành các nhóm $8$ cái, nên em làm phép chia. Số hộp là:
$$40:8=5\ \text{(hộp)}.$$
**Thử lại.** $8\times5=40$. Đúng.

Vậy chia được $5$ hộp.
:::

:::warning Những lỗi em hay gặp
- **Lấy nhầm tích gần đúng.** Sai: $8\times7=54$. Vì sao sai: $54$ không có trong bảng nhân $8$. Đúng: $8\times7=48+8=56$.
- **Cộng thay cho nhân.** Sai: $8\times8=16$. Vì sao sai: $8+8=16$ là phép cộng, còn $8\times8$ là $8$ nhóm $8$. Đúng: $8\times8=64$.
- **Chia nhầm.** Sai: $64:8=7$. Vì sao sai: $8\times7=56$, không phải $64$. Đúng: $8\times8=64$ nên $64:8=8$.
- **Quên đơn vị.** Sai: "Đáp số: $5$". Đúng: "Đáp số: $5$ hộp".
:::

## Thuật ngữ

:::terms
- bảng nhân 8 | 8 times table
- bảng chia 8 | division facts for 8
- thừa số | factor
- tích | product
- số bị chia | dividend
- số chia | divisor
- thương | quotient
- gấp đôi | double
:::

## Tóm tắt

- Bảng nhân $8$: $8,\ 16,\ 24,\ 32,\ 40,\ 48,\ 56,\ 64,\ 72,\ 80$.
- Mỗi lần thêm một nhóm, tích tăng thêm $8$: $8\times n=8\times(n-1)+8$.
- $8$ gấp đôi $4$, nên $8\times n$ gấp đôi $4\times n$.
- Từ $8\times a=b$ ta có $b:8=a$ và $b:a=8$.
- Ghi đơn vị trong đáp số; thử lại phép chia bằng phép nhân.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính:

a) $8\times3$.

b) $8\times5$.

c) $8\times6$.

::hint
**Kiến thức:** bảng nhân $8$: mỗi lần thêm một nhóm, tích tăng thêm $8$.

**Gợi ý các bước:**
1. Đếm cách $8$: $8,\ 16,\ 24,\ \dots$
2. Dừng ở số thứ tự cần tìm.

::solution
a) $8\times3=24$.

b) $8\times5=40$.

c) $8\times6=48$.

**Đáp số.** a) $24$; b) $40$; c) $48$.
:::

:::exercise
Tính:

a) $8\times7$.

b) $8\times9$.

c) $8\times10$.

::hint
**Kiến thức:** $8\times n=8\times(n-1)+8$.

**Gợi ý các bước:**
1. Nhớ tích liền trước.
2. Cộng thêm $8$.

::solution
a) $8\times7=48+8=56$.

b) $8\times9=64+8=72$.

c) $8\times10=72+8=80$.

**Đáp số.** a) $56$; b) $72$; c) $80$.
:::

:::exercise
Em hãy nhớ lại bảng nhân $7$. Tính rồi so sánh:

a) $7\times8$.

b) $8\times7$.

c) $7\times9$ và $8\times8$.

::hint
**Kiến thức:** đổi chỗ hai thừa số thì tích không đổi.

**Gợi ý các bước:**
1. Tính từng tích bằng bảng nhân $7$ hoặc $8$.
2. So sánh kết quả.

::solution
a) $7\times8=56$.

b) $8\times7=56$, bằng $7\times8$.

c) $7\times9=63$ và $8\times8=64$, nên $7\times9<8\times8$.

**Đáp số.** a) $56$; b) $56$; c) $63$ và $64$.
:::

:::exercise
Tính:

a) $16:8$.

b) $56:8$.

c) $80:8$.

::hint
**Kiến thức:** từ $8\times a=b$ ta có $b:8=a$.

**Gợi ý các bước:**
1. Tìm trong bảng nhân $8$ tích bằng số bị chia.
2. Số còn lại là thương.

::solution
a) $8\times2=16$ nên $16:8=2$.

b) $8\times7=56$ nên $56:8=7$.

c) $8\times10=80$ nên $80:8=10$.

**Đáp số.** a) $2$; b) $7$; c) $10$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống. Vì sao?

a) $8\times6 \;\square\; 50$.

b) $72:8 \;\square\; 8\times1$.

c) $8\times8 \;\square\; 4\times16$.

::hint
**Kiến thức:** tính từng vế trước, rồi so sánh hai số.

**Gợi ý các bước:**
1. Tính mỗi vế bằng bảng nhân, bảng chia.
2. So sánh kết quả.

::solution
a) $8\times6=48$ và $48<50$ nên $8\times6<50$.

b) $72:8=9$ và $8\times1=8$, $9>8$ nên $72:8>8\times1$.

c) $8\times8=64$ và $4\times16=64$ nên hai vế bằng nhau.

**Đáp số.** a) $<$; b) $>$; c) $=$.
:::

:::exercise
Tâm viết: "$8\times7=54$". Tâm sai ở đâu? Hãy sửa lại.

::hint
**Kiến thức:** $8\times7=8\times6+8$.

**Gợi ý các bước:**
1. Tính lại $8\times7$ từ tích liền trước.
2. Thử lại bằng phép chia.

::solution
$8\times7=8\times6+8=48+8=56$, không phải $54$.

**Thử lại.** $56:8=7$. Đúng.

**Đáp số.** Tâm nhớ nhầm tích; $8\times7=56$.
:::

:::exercise
a) Mỗi con nhện có $8$ chân. Hỏi $9$ con nhện có bao nhiêu chân?

b) Có $64$ quả xoài xếp vào các giỏ, mỗi giỏ $8$ quả. Hỏi xếp được bao nhiêu giỏ?

::hint
**Kiến thức:** các nhóm bằng nhau: tìm số vật thì nhân, tìm số nhóm thì chia.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Chọn phép tính, tính rồi ghi đáp số có đơn vị.

::solution
a) Số chân là $8\times9=72$ (chân).

b) Số giỏ là $64:8=8$ (giỏ).

**Đáp số.** a) $72$ chân; b) $8$ giỏ.
:::

:::exercise Thử thách
Có $80$ viên bi chia vào các túi, mỗi túi $8$ viên. Bạn Nam đã đóng được $6$ túi. Hỏi:

a) Cần tất cả bao nhiêu túi?

b) Còn bao nhiêu túi chưa đóng, và còn bao nhiêu viên bi chưa đóng túi?

::hint
**Kiến thức:** số túi là $80:8$; số bi đã đóng là $8\times6$.

**Gợi ý các bước:**
1. Tính tổng số túi.
2. Trừ số túi đã đóng, rồi tính số bi còn lại.

::solution
a) Số túi cần dùng là $80:8=10$ (túi).

b) Số túi chưa đóng là $10-6=4$ (túi). Số bi đã đóng là $8\times6=48$ (viên), nên số bi chưa đóng là $80-48=32$ (viên). Kiểm tra: $8\times4=32$.

**Đáp số.** a) $10$ túi; b) $4$ túi và $32$ viên bi.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $8\times5$ là
A. $13$.
B. $40$.
C. $45$.
D. $35$.
::key B
$8\times5=8\times4+8=32+8=40$. Phương án A là lỗi cộng $8+5$.

::mc
Kết quả của $8\times7$ là
A. $54$.
B. $48$.
C. $56$.
D. $15$.
::key C
$8\times7=48+8=56$. Phương án B là $8\times6$, thiếu một nhóm $8$.

::mc
Kết quả của $72:8$ là
A. $8$.
B. $9$.
C. $10$.
D. $64$.
::key B
Vì $8\times9=72$ nên $72:8=9$. Phương án A là lỗi nhớ nhầm $8\times8=64$.

::mc
Mỗi hộp có $8$ cây bút chì. Hỏi $6$ hộp như vậy có bao nhiêu cây bút chì?
A. $14$ cây.
B. $42$ cây.
C. $48$ cây.
D. $56$ cây.
::key C
$6$ nhóm, mỗi nhóm $8$ cây: $8\times6=48$. Phương án A là lỗi cộng $8+6$.

::tf
Em xét phép nhân $8\times8=64$.
a) $8\times8=8\times7+8$.
b) $64:8=8$.
c) $64:4=8$.
d) $8\times8$ bé hơn $60$.
::key Đ Đ S S
a) Đúng: $56+8=64$. b) Đúng: $8\times8=64$. c) Sai: $64:4=16$. d) Sai: $64>60$.

::sa
Tính $8\times9$.
::key 72
$8\times9=8\times10-8=80-8=72$.

::sa
Có $48$ cái bánh chia vào các hộp, mỗi hộp $8$ cái. Hỏi chia được bao nhiêu hộp?
::key 6
$48:8=6$ (hộp), vì $8\times6=48$.
:::
