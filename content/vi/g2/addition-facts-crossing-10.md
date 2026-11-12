---
title: Bảng cộng (qua 10)
description: Em học cách cộng qua 10 bằng cách tách số để được 10, lập bảng cộng 9, 8, 7, 6 cộng một số và dùng tính chất đổi chỗ để tính nhanh.
minutes: 15
---

:::goals
- Cộng hai số có tổng lớn hơn 10 bằng cách tách số để làm tròn 10.
- Lập và ghi nhớ bảng cộng qua 10 trong phạm vi 20.
- Dùng tính chất đổi chỗ $a+b=b+a$ để tính nhẩm nhanh hơn.
- Giải bài toán có lời văn bằng phép cộng qua 10.
:::

Giả sử Lan có 9 chiếc kẹo, mẹ cho Lan thêm 5 chiếc nữa. Lan có thể đếm tiếp từng chiếc: 10, 11, 12, 13, 14. Nhưng nếu phải tính nhiều lần, cách ấy mất thời gian.

Có cách nào cộng nhanh mà không cần đếm từng chiếc? Lan có tất cả bao nhiêu chiếc kẹo?

## Cùng khám phá

Em để ý: 9 chỉ cần thêm 1 là được 10, và 10 là số rất dễ cộng. Em tách số 5 thành $1+4$. Lấy 1 cho 9 để được 10, rồi cộng với 4 còn lại.

:::graph Trên tia số: từ 9 nhảy 1 đến 10, rồi nhảy thêm 4 đến 14
alt: Tia số từ 8 đến 15; đoạn từ 9 đến 14 được tô đậm, đánh dấu ba điểm 9, 10 và 14
x: 8..15
y: -1..1
segment: (9, 0) (14, 0)
point: (9, 0) "9" below
point: (10, 0) "10" above
point: (14, 0) "14" below
:::

Vậy $9+5=14$, và Lan có 14 chiếc kẹo.

:::theorem Cộng qua 10
Để tính $a+b$ với tổng lớn hơn 10:
1. Tách số $b$ thành hai phần, sao cho một phần cùng $a$ làm thành 10.
2. Cộng 10 với phần còn lại.
:::

Vì sao cách này đúng? Cộng 5 cũng như cộng 1 rồi cộng thêm 4, nên $9+5=9+1+4$. Ta làm tròn đến 10 trước, vì 10 cộng thêm một số bé rất dễ:
$$9+5=9+1+4=10+4=14.$$

Dưới đây là **bảng cộng qua 10**. Em thấy trong mỗi cột, số hạng thứ hai tăng 1 thì tổng cũng tăng 1.

| Số hạng thứ hai | 9 + … | 8 + … | 7 + … | 6 + … |
|---|---|---|---|---|
| 2 | 9 + 2 = 11 | | | |
| 3 | 9 + 3 = 12 | 8 + 3 = 11 | | |
| 4 | 9 + 4 = 13 | 8 + 4 = 12 | 7 + 4 = 11 | |
| 5 | 9 + 5 = 14 | 8 + 5 = 13 | 7 + 5 = 12 | 6 + 5 = 11 |
| 6 | 9 + 6 = 15 | 8 + 6 = 14 | 7 + 6 = 13 | 6 + 6 = 12 |
| 7 | 9 + 7 = 16 | 8 + 7 = 15 | 7 + 7 = 14 | 6 + 7 = 13 |
| 8 | 9 + 8 = 17 | 8 + 8 = 16 | 7 + 8 = 15 | 6 + 8 = 14 |
| 9 | 9 + 9 = 18 | 8 + 9 = 17 | 7 + 9 = 16 | 6 + 9 = 15 |

Muốn tính các phép cộng còn lại, em đổi chỗ hai số hạng: $a+b=b+a$. Ví dụ $5+9=9+5=14$.

**Kết nối.** Bài này dùng tia số và phép cộng trong phạm vi 10 em đã học. Bảng cộng qua 10 sẽ giúp em làm phép trừ qua 10 ở các bài sau.

## Ví dụ

Ta bắt đầu với số hạng có thể tách thành $1$ cộng một số.

:::example Tính $9+6$
**Lời giải.** Ta tách $6=1+5$ để $9$ cộng $1$ được $10$:
$$9+6=9+1+5=10+5=15.$$
Vậy $9+6=15$.
:::

Khi số thứ nhất là 8, em cần thêm 2 để được 10.

:::example Tính $8+5$
**Lời giải.** Ta tách $5=2+3$ để $8$ cộng $2$ được $10$:
$$8+5=8+2+3=10+3=13.$$
Vậy $8+5=13$.
:::

Với số 7, em cần thêm 3.

:::example Tính $7+6$
**Lời giải.** Ta tách $6=3+3$ để $7$ cộng $3$ được $10$:
$$7+6=7+3+3=10+3=13.$$
Vậy $7+6=13$.
:::

Nếu số lớn đứng sau, em đổi chỗ để dễ tính.

:::example Đổi chỗ để tính nhanh
Tính $5+9$.

**Lời giải.** Ta đổi chỗ hai số hạng, đưa số lớn lên trước:
$$5+9=9+5=14.$$
Vậy $5+9=14$.
:::

Cuối cùng, em dùng bảng cộng để giải một bài toán.

:::example Hộp bút (Vận dụng)
Giả sử một hộp có 8 chiếc bút đỏ và 7 chiếc bút xanh. Hộp có tất cả bao nhiêu chiếc bút?

**Hiểu đề.** Đề cho biết 8 bút đỏ và 7 bút xanh. Đề hỏi số bút trong hộp.

**Tìm cách giải.** "Tất cả" nghĩa là gộp lại, nên em làm phép cộng $8+7$, tách số để làm tròn 10.

**Giải.**

Bài giải

Hộp có tất cả số chiếc bút là:
$$8+7=8+2+5=15\ \text{(chiếc)}.$$
Đáp số: 15 chiếc bút.

**Nhìn lại.** Có cách tách khác không? Em có thể tách số 8 để làm tròn 10 với số 7: $8=3+5$ nên $7+3+5=10+5=15$, cũng ra 15.
:::

:::warning Những lỗi em hay gặp
- **Tách số không đúng.** Sai: $9+6=9+2+3=14$. Vì sao sai: $2+3=5$, không phải $6$, nên thiếu mất 1. Đúng: $6=1+5$ nên $9+6=9+1+5=15$.
- **Quên cộng phần còn lại.** Sai: $8+5=8+2+3=10$. Vì sao sai: được 10 rồi còn phải cộng thêm 3. Đúng: $10+3=13$.
- **Quên đơn vị trong đáp số.** Sai: "Đáp số: 15". Đúng: "Đáp số: 15 chiếc bút".
:::

## Thuật ngữ

:::terms
- cộng qua 10 | addition bridging through 10
- tách số | splitting a number
- bảng cộng | addition facts
- số hạng | addend
- tổng | sum (total)
- tính chất giao hoán | commutative property
- số tròn chục | multiple of ten
- tính nhẩm | mental calculation
:::

## Tóm tắt

- Muốn cộng qua 10, em tách số hạng thứ hai để cùng số hạng thứ nhất làm tròn 10, rồi cộng với phần còn lại. Ví dụ $9+5=9+1+4=14$.
- Số 9 cần thêm 1, số 8 cần thêm 2, số 7 cần thêm 3 để được 10.
- Đổi chỗ hai số hạng thì tổng không đổi: $a+b=b+a$.
- Trong bảng cộng, số hạng thứ hai tăng 1 thì tổng tăng 1.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính, tách số để làm tròn 10:

a) $9+4$

b) $8+6$

::hint
**Kiến thức:** tách số hạng thứ hai để cùng số hạng thứ nhất được 10.

**Gợi ý các bước:**
1. Số hạng thứ nhất cần thêm mấy để được 10?
2. Cộng 10 với phần còn lại.

::solution
a) $9+4=9+1+3=10+3=13$.

b) $8+6=8+2+4=10+4=14$.

**Đáp số.** a) 13; b) 14.
:::

:::exercise
Tính nhẩm:

a) $7+5$

b) $6+8$

c) $9+9$

::hint
**Kiến thức:** tách số, hoặc dùng bảng cộng qua 10.

**Gợi ý các bước:**
1. Câu a: $7$ cần thêm 3 để được 10.
2. Câu b: đổi chỗ thành $8+6$ rồi tách.

::solution
a) $7+5=7+3+2=10+2=12$.

b) $6+8=8+6=8+2+4=14$.

c) $9+9=9+1+8=10+8=18$.

**Đáp số.** a) 12; b) 14; c) 18.
:::

:::exercise
Tính nhẩm bằng cách đổi chỗ hai số hạng:

a) $4+9$

b) $6+7$

::hint
**Kiến thức:** $a+b=b+a$. Đưa số lớn lên trước.

**Gợi ý các bước:**
1. Viết lại phép cộng với số lớn đứng trước.
2. Tách số để làm tròn 10.

::solution
a) $4+9=9+4=9+1+3=13$.

b) $6+7=7+6=7+3+3=13$.

**Đáp số.** a) 13; b) 13.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống:
$$8+5\ \square\ 14,\qquad 7+6\ \square\ 13,\qquad 9+4\ \square\ 12.$$

::hint
**Kiến thức:** tính mỗi phép cộng trước, rồi so sánh hai số.

**Gợi ý các bước:**
1. Tính $8+5$, $7+6$, $9+4$.
2. So sánh kết quả với số bên phải.

::solution
Ta có $8+5=13$ và $13<14$.
Ta có $7+6=13$ và $13=13$.
Ta có $9+4=13$ và $13>12$.

**Đáp số.** $8+5<14$; $7+6=13$; $9+4>12$.
:::

:::exercise
Giả sử buổi sáng Lan gấp được 6 chiếc thuyền giấy, buổi chiều Lan gấp được 7 chiếc. Hỏi cả hai buổi Lan gấp được bao nhiêu chiếc thuyền?

::hint
**Kiến thức:** "cả hai buổi" nghĩa là gộp lại: dùng phép cộng.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Làm thế nào? Em dùng phép tính nào?
3. Thử lại: tổng phải lớn hơn mỗi số hạng.

::solution
Bài giải

Cả hai buổi Lan gấp được số chiếc thuyền là:
$$6+7=7+6=13\ \text{(chiếc)}.$$
Đáp số: 13 chiếc thuyền.
:::

:::exercise
Giả sử trong thư viện lớp có 8 bạn đang đọc truyện và 9 bạn đang đọc sách khoa học. Hỏi thư viện có tất cả bao nhiêu bạn đang đọc?

::hint
**Kiến thức:** "tất cả" nghĩa là gộp lại: dùng phép cộng qua 10.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Tách $9=2+7$ để $8$ cộng $2$ được $10$.
3. Thử lại bằng cách đổi chỗ: $9+8$.

::solution
Bài giải

Thư viện có tất cả số bạn đang đọc là:
$$8+9=8+2+7=10+7=17\ \text{(bạn)}.$$
Đáp số: 17 bạn.
:::

:::exercise
Nhớ lại bài tia số. Trên tia số, từ vạch 8 nhảy sang phải 7 vạch thì đến vạch nào?

::hint
**Kiến thức:** nhảy sang phải là phép cộng.

**Gợi ý các bước:**
1. Viết phép cộng tương ứng.
2. Tách số để làm tròn 10.

::solution
Nhảy sang phải 7 vạch là cộng 7:
$$8+7=8+2+5=10+5=15.$$

**Đáp số.** Vạch 15.
:::

:::exercise Thử thách
Trong các phép cộng $9+2$, $9+3$, $9+4$, …, $9+9$, những phép cộng nào có tổng lớn hơn 14 và nhỏ hơn 18?

::hint
**Kiến thức:** số hạng thứ hai tăng 1 thì tổng tăng 1.

**Gợi ý các bước:**
1. Tổng của $9+5$ bằng bao nhiêu?
2. Số hạng thứ hai tăng lên thì tổng tăng lên thế nào?

::solution
Ta có $9+5=14$, $9+6=15$, $9+7=16$, $9+8=17$, $9+9=18$. Các tổng lớn hơn 14 và nhỏ hơn 18 là 15, 16, 17.

**Đáp số.** Ba phép cộng: $9+6$, $9+7$, $9+8$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $9+7$ là
A. $16$.
B. $17$.
C. $18$.
D. $15$.
::key A
$9+7=9+1+6=10+6=16$. Phương án D tách sai (thiếu 1), phương án B và C cộng thừa.

::mc
Kết quả của $8+5$ là
A. $12$.
B. $13$.
C. $14$.
D. $10$.
::key B
$8+5=8+2+3=10+3=13$. Phương án D quên cộng phần còn lại.

::mc
Để tính $7+6$, em tách $6=3+3$. Cách làm đúng là
A. $7+3+4$.
B. $7+6+3$.
C. $7+3+3$.
D. $7+3+6$.
::key C
Sau khi lấy 3 để được 10, em còn lại $6-3=3$, nên viết $7+3+3=10+3=13$. Phương án A, B, D cộng thừa hoặc thiếu.

::mc
Giả sử hộp có 8 chiếc bút đỏ và 9 chiếc bút xanh. Hộp có tất cả
A. $16$ chiếc bút.
B. $1$ chiếc bút.
C. $18$ chiếc bút.
D. $17$ chiếc bút.
::key D
"Tất cả" là gộp lại: $8+9=17$. Phương án B là phép trừ nhầm.

::tf
Cho phép tính $8+6$.
a) Có thể tách $6=2+4$ để tính $8+6=8+2+4$.
b) $8+6=15$.
c) $8+6=6+8$.
d) Tổng $8+6$ bé hơn 14.
::key Đ S Đ S
a) Đúng: $8+2=10$, rồi cộng 4. b) Sai: $8+6=14$, không phải 15. c) Đúng: đổi chỗ hai số hạng thì tổng không đổi. d) Sai: tổng bằng 14, không bé hơn 14.

::sa
Tính $9+8$.
::key 17
$9+8=9+1+7=10+7=17$.

::sa
Buổi sáng Lan gấp 7 chiếc thuyền giấy, buổi chiều gấp 6 chiếc. Cả hai buổi Lan gấp được bao nhiêu chiếc thuyền?
::key 13
$7+6=7+3+3=13$ (chiếc).
:::
