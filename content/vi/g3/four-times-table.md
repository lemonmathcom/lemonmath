---
title: Bảng nhân 4, bảng chia 4
description: Em học bảng nhân 4 bằng cách gấp đôi bảng nhân 2 và cộng thêm 4, rồi dùng bảng nhân 4 để chia cho 4 và giải bài toán.
minutes: 15
---

:::goals
- Thuộc và lập được bảng nhân 4.
- Dùng bảng nhân 4 để chia cho 4.
- Giải bài toán có lời văn bằng một phép nhân hoặc một phép chia.
:::

Trong chuồng có $5$ con chó, mỗi con có $4$ cái chân. Hỏi $5$ con chó có tất cả bao nhiêu cái chân?

Em có thể đếm từng cái chân, nhưng sẽ chậm và dễ nhầm. Bài này giúp em tính nhanh bằng bảng nhân $4$.

## Cùng khám phá

Mỗi con chó có $4$ chân, tức là $4$ chân một nhóm. Ta cộng dần từng nhóm:

- $1$ con: $4$ chân.
- $2$ con: $4+4=8$ chân.
- $3$ con: $8+4=12$ chân.
- $4$ con: $12+4=16$ chân.
- $5$ con: $16+4=20$ chân.

Vậy $5$ con chó có $20$ chân, tức là $4\times5=20$. Mỗi lần thêm một nhóm, tích tăng thêm $4$.

:::graph Trên tia số: mỗi bước nhảy 4 đơn vị
alt: Tia số từ 0 đến 24 đánh dấu các điểm 0, 4, 8, 12, 16, 20 và 24, mỗi điểm cách điểm trước 4 đơn vị
x: -1..25
y: -1..1
segment: (0, 0) (24, 0)
point: (0, 0) "0" below
point: (4, 0) "4" above
point: (8, 0) "8" below
point: (12, 0) "12" above
point: (16, 0) "16" below
point: (20, 0) "20" above
point: (24, 0) "24" below
:::

Em còn một mẹo nữa: $4$ gấp đôi $2$, nên $4\times5$ gấp đôi $2\times5=10$, và $10+10=20$.

:::theorem Bảng nhân 4
Muốn tính $4\times n$, em lấy $4\times(n-1)$ rồi cộng thêm $4$. Em cũng có thể lấy $2\times n$ rồi gấp đôi.

| $4\times1$ | $4\times2$ | $4\times3$ | $4\times4$ | $4\times5$ |
|---|---|---|---|---|
| $4$ | $8$ | $12$ | $16$ | $20$ |

| $4\times6$ | $4\times7$ | $4\times8$ | $4\times9$ | $4\times10$ |
|---|---|---|---|---|
| $24$ | $28$ | $32$ | $36$ | $40$ |
:::

Bảng chia $4$ suy ra từ bảng nhân $4$. Vì $4\times5=20$ nên $20:4=5$. Em chia $20$ vật thành các nhóm $4$ vật thì được $5$ nhóm.

## Ví dụ

Ta bắt đầu bằng cách lấy tích liền trước cộng thêm $4$.

:::example Tính $4\times7$
**Lời giải.** Em biết $4\times6=24$. Thêm một nhóm $4$ nữa:
$$4\times7=4\times6+4=24+4=28.$$
Vậy $4\times7=28$.
:::

Bây giờ em dùng mẹo gấp đôi.

:::example Tính $4\times8$ bằng cách gấp đôi
**Lời giải.** Ta có $4\times4=16$. Mà $8$ gấp đôi $4$ nên $4\times8$ gấp đôi $4\times4$:
$$4\times8=16+16=32.$$
Vậy $4\times8=32$.
:::

Tiếp theo là phép chia. Em tìm trong bảng nhân $4$ một tích bằng số bị chia.

:::example Tính $36:4$
**Lời giải.** Em tìm số nào nhân $4$ bằng $36$. Trong bảng nhân $4$ ta có $4\times9=36$, nên
$$36:4=9.$$
**Thử lại.** $4\times9=36$. Đúng.

Vậy $36:4=9$.
:::

Bây giờ em giải bài toán có lời văn bằng phép nhân.

:::example Chỗ ngồi
Mỗi bàn có $4$ bạn ngồi. Hỏi $6$ bàn như vậy có bao nhiêu bạn ngồi?

**Lời giải.** Mỗi bàn là một nhóm $4$ bạn, $6$ bàn là $6$ nhóm, nên em làm phép nhân. Số bạn ngồi là:
$$4\times6=24\ \text{(bạn)}.$$
Vậy $6$ bàn có $24$ bạn ngồi.
:::

Cuối cùng, em giải một bài toán bằng phép chia.

:::example Xếp cam vào đĩa
Có $28$ quả cam, xếp vào các đĩa, mỗi đĩa $4$ quả. Hỏi xếp được bao nhiêu đĩa?

**Lời giải.** Em chia $28$ quả thành các nhóm $4$ quả, nên em làm phép chia. Số đĩa là:
$$28:4=7\ \text{(đĩa)}.$$
**Thử lại.** $4\times7=28$. Đúng.

Vậy xếp được $7$ đĩa.
:::

:::warning Những lỗi em hay gặp
- **Lấy sai hàng liền kề.** Sai: $4\times7=24$. Vì sao sai: $24$ là $4\times6$, em quên thêm một nhóm $4$. Đúng: $4\times7=24+4=28$.
- **Cộng thay cho nhân.** Sai: $4\times6=10$. Vì sao sai: $4+6$ là phép cộng, còn $4\times6$ là $6$ nhóm, mỗi nhóm $4$. Đúng: $4\times6=24$.
- **Chia nhầm với tích gần đúng.** Sai: $36:4=8$. Vì sao sai: $4\times8=32$, không phải $36$. Đúng: $4\times9=36$ nên $36:4=9$.
- **Quên đơn vị.** Sai: "Đáp số: $24$". Đúng: "Đáp số: $24$ bạn".
:::

## Thuật ngữ

:::terms
- bảng nhân 4 | 4 times table
- bảng chia 4 | division facts for 4
- thừa số | factor
- tích | product
- số bị chia | dividend
- số chia | divisor
- thương | quotient
- gấp đôi | double
:::

## Tóm tắt

- Bảng nhân $4$: $4,\ 8,\ 12,\ 16,\ 20,\ 24,\ 28,\ 32,\ 36,\ 40$.
- Mỗi lần thêm một nhóm, tích tăng thêm $4$: $4\times n=4\times(n-1)+4$.
- $4$ gấp đôi $2$, nên $4\times n$ gấp đôi $2\times n$.
- Từ $4\times a=b$ ta có $b:4=a$ và $b:a=4$.
- Ghi đơn vị trong đáp số; thử lại phép chia bằng phép nhân.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính:

a) $4\times3$.

b) $4\times5$.

c) $4\times9$.

::hint
**Kiến thức:** bảng nhân $4$: mỗi lần thêm một nhóm, tích tăng thêm $4$.

**Gợi ý các bước:**
1. Đếm cách $4$: $4,\ 8,\ 12,\ \dots$
2. Dừng ở số thứ tự cần tìm.

::solution
a) $4\times3=12$.

b) $4\times5=20$.

c) $4\times9=36$.

**Đáp số.** a) $12$; b) $20$; c) $36$.
:::

:::exercise
Tính:

a) $4\times7$.

b) $4\times10$.

c) $4\times4$.

::hint
**Kiến thức:** $4\times n=4\times(n-1)+4$.

**Gợi ý các bước:**
1. Nhớ tích liền trước.
2. Cộng thêm $4$.

::solution
a) $4\times7=24+4=28$.

b) $4\times10=36+4=40$.

c) $4\times4=12+4=16$.

**Đáp số.** a) $28$; b) $40$; c) $16$.
:::

:::exercise
Em hãy nhớ lại bảng nhân $3$. Tính rồi so sánh:

a) $3\times4$.

b) $4\times3$.

c) $3\times8$ và $4\times6$.

::hint
**Kiến thức:** đổi chỗ hai thừa số thì tích không đổi.

**Gợi ý các bước:**
1. Tính từng tích bằng bảng nhân $3$ hoặc $4$.
2. So sánh kết quả.

::solution
a) $3\times4=12$.

b) $4\times3=12$, bằng $3\times4$.

c) $3\times8=24$ và $4\times6=24$, hai tích bằng nhau.

**Đáp số.** a) $12$; b) $12$; c) $24$ và $24$.
:::

:::exercise
Tính:

a) $12:4$.

b) $28:4$.

c) $40:4$.

::hint
**Kiến thức:** từ $4\times a=b$ ta có $b:4=a$.

**Gợi ý các bước:**
1. Tìm trong bảng nhân $4$ tích bằng số bị chia.
2. Số còn lại là thương.

::solution
a) $4\times3=12$ nên $12:4=3$.

b) $4\times7=28$ nên $28:4=7$.

c) $4\times10=40$ nên $40:4=10$.

**Đáp số.** a) $3$; b) $7$; c) $10$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống. Vì sao?

a) $4\times7 \;\square\; 30$.

b) $24:4 \;\square\; 4\times2$.

c) $4\times9 \;\square\; 3\times12$.

::hint
**Kiến thức:** tính từng vế trước, rồi so sánh hai số.

**Gợi ý các bước:**
1. Tính mỗi vế bằng bảng nhân, bảng chia.
2. So sánh kết quả.

::solution
a) $4\times7=28$ và $28<30$ nên $4\times7<30$.

b) $24:4=6$ và $4\times2=8$, $6<8$ nên $24:4<4\times2$.

c) $4\times9=36$ và $3\times12=36$ nên hai vế bằng nhau.

**Đáp số.** a) $<$; b) $<$; c) $=$.
:::

:::exercise
Bình làm: "$36:4=8$ vì $4\times8=36$". Bình sai ở đâu? Hãy sửa lại.

::hint
**Kiến thức:** thử lại phép chia bằng phép nhân.

**Gợi ý các bước:**
1. Tính $4\times8$ xem có bằng $36$ không.
2. Tìm số đúng trong bảng nhân $4$.

::solution
$4\times8=32$, không phải $36$. Ta có $4\times9=36$ nên $36:4=9$.

**Thử lại.** $4\times9=36$. Đúng.

**Đáp số.** Bình nhớ sai tích; $36:4=9$.
:::

:::exercise
a) Mỗi xe có $4$ bánh. Hỏi $8$ xe như vậy có bao nhiêu bánh?

b) Có $36$ chiếc bánh xếp vào các hộp, mỗi hộp $4$ chiếc. Hỏi xếp được bao nhiêu hộp?

::hint
**Kiến thức:** các nhóm bằng nhau: tìm số vật thì nhân, tìm số nhóm thì chia.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Chọn phép tính, tính rồi ghi đáp số có đơn vị.

::solution
a) Số bánh xe là $4\times8=32$ (bánh).

b) Số hộp là $36:4=9$ (hộp).

**Đáp số.** a) $32$ bánh; b) $9$ hộp.
:::

:::exercise Thử thách
Lan xếp $40$ quả bóng vào các hộp, mỗi hộp $4$ quả. Lan đã xếp được $6$ hộp. Hỏi:

a) Cần tất cả bao nhiêu hộp?

b) Còn bao nhiêu hộp chưa xếp, và còn bao nhiêu quả bóng chưa xếp?

::hint
**Kiến thức:** số hộp là $40:4$; số bóng đã xếp là $4\times6$.

**Gợi ý các bước:**
1. Tính tổng số hộp.
2. Trừ số hộp đã xếp, rồi tính số bóng còn lại.

::solution
a) Số hộp cần dùng là $40:4=10$ (hộp).

b) Số hộp chưa xếp là $10-6=4$ (hộp). Số bóng đã xếp là $4\times6=24$ (quả), nên số bóng chưa xếp là $40-24=16$ (quả). Kiểm tra: $4\times4=16$.

**Đáp số.** a) $10$ hộp; b) $4$ hộp và $16$ quả bóng.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $4\times6$ là
A. $10$.
B. $28$.
C. $20$.
D. $24$.
::key D
$4\times6=4\times5+4=20+4=24$. Phương án A là lỗi cộng $4+6$.

::mc
Kết quả của $4\times7$ là
A. $28$.
B. $32$.
C. $24$.
D. $11$.
::key A
$4\times7=24+4=28$. Phương án C là $4\times6$, thiếu một nhóm $4$.

::mc
Kết quả của $32:4$ là
A. $9$.
B. $8$.
C. $7$.
D. $28$.
::key B
Vì $4\times8=32$ nên $32:4=8$. Phương án C là $28:4$.

::mc
Mỗi chuồng có $4$ con thỏ. Hỏi $9$ chuồng như vậy có bao nhiêu con thỏ?
A. $13$ con.
B. $32$ con.
C. $36$ con.
D. $40$ con.
::key C
$9$ nhóm, mỗi nhóm $4$ con: $4\times9=36$. Phương án A là lỗi cộng $4+9$.

::tf
Em xét phép nhân $4\times8=32$.
a) $4\times8=4\times7+4$.
b) $32:4=8$.
c) $32:8=4$.
d) $4\times8$ lớn hơn $36$.
::key Đ Đ Đ S
a) Đúng: $28+4=32$. b) Đúng: $4\times8=32$. c) Đúng: $8\times4=32$. d) Sai: $32<36$.

::sa
Tính $4\times9$.
::key 36
$4\times9=4\times8+4=32+4=36$.

::sa
Có $40$ cái bút, xếp vào các hộp, mỗi hộp $4$ cái bút. Hỏi xếp được bao nhiêu hộp?
::key 10
$40:4=10$ (hộp), vì $4\times10=40$.
:::
