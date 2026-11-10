---
title: Số lần xuất hiện của một sự kiện
description: Em học cách ghi kết quả nhiều lần thử, dùng vạch kiểm đếm và đếm số lần xuất hiện của từng sự kiện, rồi kiểm tra tổng bằng số lần thử.
minutes: 15
---

:::goals
- Biết đếm số lần xuất hiện của một sự kiện trong nhiều lần thử.
- Dùng bảng kiểm đếm (vạch kiểm đếm) để ghi và đọc kết quả.
- Kiểm tra: tổng số lần các sự kiện bằng số lần thử.
:::

Nam tung một đồng xu $10$ lần và ghi lại kết quả mỗi lần: mặt ngửa (N) hay mặt sấp (S). Kết quả là: N, S, S, N, N, S, N, N, S, N. Mặt ngửa xuất hiện bao nhiêu lần? Mặt sấp xuất hiện bao nhiêu lần?

Em đã biết đọc dãy số liệu và biểu đồ cột. Bài này dạy em cách đếm kết quả của những lần thử như thế.

## Cùng khám phá

Mỗi lần tung đồng xu gọi là một **lần thử**. Mặt ngửa hay mặt sấp xuất hiện là một **sự kiện**. Ta đếm từng sự kiện bằng **vạch kiểm đếm**: mỗi lần xuất hiện, ta gạch một vạch. Cứ đủ $5$ vạch thì gom thành một nhóm cho dễ đếm.

Với dãy N, S, S, N, N, S, N, N, S, N, em đọc từng lần:

- Lần $1$: N, lần $4$: N, lần $5$: N, lần $7$: N, lần $8$: N, lần $10$: N. Có $6$ lần ngửa.
- Lần $2$, $3$, $6$, $9$ là S. Có $4$ lần sấp.

| Sự kiện | Vạch kiểm đếm | Số lần |
|---|---|---|
| Mặt ngửa | $\mid\mid\mid\mid\mid\ \mid$ | $6$ |
| Mặt sấp | $\mid\mid\mid\mid$ | $4$ |

Em kiểm tra lại: $6+4=10$, đúng bằng số lần tung.

:::definition Số lần xuất hiện của một sự kiện
**Số lần xuất hiện** của một sự kiện là số lần sự kiện đó xảy ra trong tất cả các lần thử. Tổng số lần xuất hiện của mọi sự kiện bằng số lần thử.
:::

Điều này đúng vì mỗi lần thử cho đúng một kết quả. Nên đếm hết các kết quả thì ta được đúng số lần thử.

## Ví dụ

Ta bắt đầu với bài toán đếm trực tiếp.

:::example Đếm từ dãy kết quả
Tung đồng xu $10$ lần được: N, S, S, N, N, S, N, N, S, N. Hỏi mặt ngửa và mặt sấp mỗi mặt xuất hiện mấy lần?

**Lời giải.** Ta đếm từng mặt, đánh dấu để không sót và không đếm trùng:
$$\text{ngửa: } 6\ \text{lần},\qquad \text{sấp: } 4\ \text{lần}.$$
Kiểm tra: $6+4=10$ lần tung. Vậy ngửa $6$ lần, sấp $4$ lần.
:::

Bây giờ có ba kết quả khác nhau thay vì hai.

:::example Lấy bi
Trong hộp có bi đỏ, bi xanh và bi vàng. Hà lấy một viên ra xem rồi bỏ lại, làm $12$ lần. Kết quả lần lượt là: Đ, X, Đ, Đ, V, X, Đ, V, Đ, X, Đ, Đ. Mỗi màu xuất hiện mấy lần?

**Lời giải.** Đếm từng màu trong dãy:
$$\text{Đỏ: } 7\ \text{lần},\qquad \text{Xanh: } 3\ \text{lần},\qquad \text{Vàng: } 2\ \text{lần}.$$
Kiểm tra: $7+3+2=12$ lần lấy. Vậy đỏ $7$ lần, xanh $3$ lần, vàng $2$ lần.
:::

Đôi khi kết quả đã cho trong bảng kiểm đếm. Ta đọc bảng rồi trả lời.

:::example Gieo xúc xắc
Gieo một con xúc xắc $20$ lần, ta được số lần xuất hiện của từng mặt:

| Mặt | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| Số lần | $3$ | $4$ | $2$ | $5$ | $3$ | $3$ |

Hỏi: a) Mặt nào xuất hiện nhiều nhất, mấy lần? b) Mặt nào ít nhất? c) Các mặt chẵn ($2$, $4$, $6$) xuất hiện tất cả mấy lần?

**Lời giải.** Trước hết kiểm tra bảng: $3+4+2+5+3+3=20$, đúng bằng số lần gieo.

a) Số lớn nhất là $5$, ứng với mặt $4$. Mặt $4$ xuất hiện nhiều nhất, $5$ lần.

b) Số nhỏ nhất là $2$, ứng với mặt $3$.

c) Cộng số lần của ba mặt chẵn:
$$4+5+3=12\ \text{(lần)}.$$
Vậy các mặt chẵn xuất hiện $12$ lần.
:::

Biết tổng số lần thử, ta có thể tìm số lần còn thiếu.

:::example Tìm số lần còn thiếu
Tung đồng xu $15$ lần, mặt ngửa xuất hiện $9$ lần. Mặt sấp xuất hiện mấy lần?

**Lời giải.** Mỗi lần tung cho ngửa hoặc sấp, nên số lần ngửa cộng số lần sấp bằng $15$. Vậy số lần sấp là:
$$15-9=6\ \text{(lần)}.$$
**Kiểm tra.** $9+6=15$. Đúng.
:::

:::warning Những lỗi em hay gặp
- **Đếm sót hoặc đếm trùng.** Sai: dãy N, S, S, N, N có $2$ lần N. Vì sao sai: bỏ sót một lần N. Đúng: $3$ lần N. Em hãy đánh dấu từng kết quả khi đếm.
- **Tổng không bằng số lần thử.** Sai: $6+5=11$ nhưng chỉ tung $10$ lần. Vì sao sai: có chỗ đếm trùng. Đúng: đếm lại cho đến khi tổng bằng $10$.
- **Nhầm số lần với tên sự kiện.** Sai: "Mặt ngửa xuất hiện nhiều nhất là $6$" khi hỏi mặt nào. Vì sao sai: $6$ là số lần, còn câu hỏi cần tên mặt. Đúng: mặt ngửa, $6$ lần.
:::

## Thuật ngữ

:::terms
- sự kiện | event
- lần thử | trial
- số lần xuất hiện | frequency (number of times)
- kiểm đếm | tally
- vạch kiểm đếm | tally mark
- đồng xu | coin
- xúc xắc | dice
:::

## Tóm tắt

- Mỗi lần tung, lấy, gieo là một lần thử; kết quả của lần thử là một sự kiện.
- Số lần xuất hiện của một sự kiện: đếm xem sự kiện xảy ra mấy lần.
- Vạch kiểm đếm: mỗi lần một vạch, đủ $5$ vạch thì gom thành nhóm.
- Tổng số lần của mọi sự kiện bằng số lần thử.
- Biết tổng và số lần của một sự kiện thì tìm số lần còn lại bằng phép trừ.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tung đồng xu $8$ lần được: N, N, S, N, S, S, N, N. Mỗi mặt xuất hiện mấy lần?

::hint
**Kiến thức:** đếm từng mặt rồi kiểm tra tổng bằng $8$.

**Gợi ý các bước:**
1. Đếm các chữ N.
2. Đếm các chữ S.
3. Cộng lại xem có bằng $8$ không.

::solution
N xuất hiện $5$ lần, S xuất hiện $3$ lần. Kiểm tra $5+3=8$.

**Đáp số.** Ngửa $5$ lần, sấp $3$ lần.
:::

:::exercise
Rút một thẻ từ ba loại thẻ A, B, C rồi trả lại, làm $10$ lần: A, B, A, C, A, B, A, A, C, B. Mỗi loại thẻ được rút mấy lần?

::hint
**Kiến thức:** đếm lần lượt từng loại thẻ.

**Gợi ý các bước:**
1. Đếm chữ A, rồi B, rồi C.
2. Kiểm tra tổng bằng $10$.

::solution
A: $5$ lần, B: $3$ lần, C: $2$ lần. Kiểm tra: $5+3+2=10$.

**Đáp số.** A $5$ lần, B $3$ lần, C $2$ lần.
:::

:::exercise
Em hãy nhớ lại bài biểu đồ cột: biểu đồ cho số lần xuất hiện của ba mặt xúc xắc, cột mặt $1$ cao $3$, cột mặt $2$ cao $5$, cột mặt $3$ cao $4$. Tổng số lần gieo là bao nhiêu? Mặt nào xuất hiện nhiều nhất?

::hint
**Kiến thức:** cột cao nhất là số lớn nhất; tổng các số lần là số lần gieo.

**Gợi ý các bước:**
1. Đọc số trên đỉnh ba cột.
2. Cộng ba số; tìm số lớn nhất.

::solution
$3+5+4=12$ (lần). Cột cao nhất là cột mặt $2$ ($5$ lần).

**Đáp số.** $12$ lần; mặt $2$.
:::

:::exercise
Tung đồng xu $20$ lần, mặt ngửa xuất hiện $11$ lần. Mặt sấp xuất hiện mấy lần?

::hint
**Kiến thức:** số lần ngửa cộng số lần sấp bằng số lần tung.

**Gợi ý các bước:**
1. Viết phép trừ.
2. Kiểm tra bằng phép cộng.

::solution
$20-11=9$ (lần). Kiểm tra: $11+9=20$.

**Đáp số.** $9$ lần.
:::

:::exercise
Vì sao tổng số lần xuất hiện của hai mặt đồng xu luôn bằng số lần tung? Kiểm tra với trường hợp ngửa $6$ lần, sấp $4$ lần.

::hint
**Kiến thức:** mỗi lần tung cho đúng một kết quả: ngửa hoặc sấp.

**Gợi ý các bước:**
1. Mỗi lần tung được tính vào mấy mặt?
2. Cộng $6$ và $4$.

::solution
Mỗi lần tung chỉ cho một mặt, nên mỗi lần được đếm đúng một lần, và đếm hết thì được đúng số lần tung. Với $6+4=10$, đúng bằng $10$ lần tung.

**Đáp số.** Vì mỗi lần tung có đúng một kết quả; $6+4=10$.
:::

:::exercise
Lan đếm dãy Đ, X, Đ, Đ, X và nói: "Đ xuất hiện $4$ lần, X xuất hiện $2$ lần." Lan sai ở đâu? Hãy đếm lại.

::hint
**Kiến thức:** tổng số lần phải bằng số lần thử.

**Gợi ý các bước:**
1. Đếm có mấy lần thử.
2. Đếm lại từng chữ.

::solution
Dãy có $5$ lần thử mà Lan tính $4+2=6$, nên đếm trùng. Đếm đúng: Đ có $3$ lần, X có $2$ lần ($3+2=5$).

**Đáp số.** Đ $3$ lần, X $2$ lần.
:::

:::exercise
Trong $30$ phút trước cổng trường, bảng kiểm đếm số xe đi qua là: xe đạp $12$, xe máy $9$, ô tô $5$, còn lại là người đi bộ. 
a) Có bao nhiêu người đi bộ?
b) Xe máy và ô tô đi qua tất cả bao nhiêu chiếc?
c) Xe đạp nhiều hơn ô tô bao nhiêu chiếc?

::hint
**Kiến thức:** đề cho tổng $30$ lượt; trừ đi các số đã biết.

**Gợi ý các bước:**
1. Tính tổng xe đạp, xe máy, ô tô.
2. Lấy $30$ trừ đi để tìm số người đi bộ.

::solution
a) Xe đạp, xe máy, ô tô: $12+9+5=26$. Người đi bộ: $30-26=4$. b) $9+5=14$ (chiếc). c) $12-5=7$ (chiếc).

**Đáp số.** a) $4$ người; b) $14$ chiếc; c) $7$ chiếc.
:::

:::exercise Thử thách
Gieo một con xúc xắc $20$ lần, các mặt chẵn xuất hiện tất cả $12$ lần. Biết mặt $2$ xuất hiện $5$ lần, mặt $6$ xuất hiện $3$ lần. Hỏi mặt $4$ xuất hiện mấy lần? Các mặt lẻ xuất hiện tất cả mấy lần?

::hint
**Kiến thức:** các mặt chẵn là $2$, $4$, $6$; tổng các mặt chẵn là $12$ lần.

**Gợi ý các bước:**
1. Tìm mặt $4$ bằng phép trừ.
2. Số lần mặt lẻ bằng $20$ trừ số lần mặt chẵn.

::solution
Mặt $4$: $12-5-3=4$ (lần). Mặt lẻ: $20-12=8$ (lần).

**Kiểm tra.** $5+4+3=12$ và $12+8=20$. Đúng.

**Đáp số.** Mặt $4$ xuất hiện $4$ lần; mặt lẻ $8$ lần.
:::

## Kiểm tra mini

:::quiz
::mc
Tung đồng xu $10$ lần, mặt ngửa xuất hiện $6$ lần. Mặt sấp xuất hiện
A. $6$ lần.
B. $4$ lần.
C. $16$ lần.
D. $10$ lần.
::key B
$10-6=4$. Phương án C là cộng thay vì trừ.

::mc
Trong dãy Đ, X, Đ, Đ, X, kí hiệu Đ xuất hiện mấy lần?
A. $2$ lần.
B. $3$ lần.
C. $5$ lần.
D. $4$ lần.
::key B
Đ ở lần $1$, $3$, $4$, tức $3$ lần. Phương án C là số lần thử.

::mc
Tổng số lần xuất hiện của mọi sự kiện luôn bằng
A. số lần thử.
B. số lần lớn nhất.
C. $1$.
D. $0$.
::key A
Mỗi lần thử cho đúng một kết quả. Phương án B là nhầm với số lớn nhất.

::mc
Trước cổng trường có $12$ xe đạp, $9$ xe máy và $5$ ô tô đi qua. Có tất cả bao nhiêu xe?
A. $26$ xe.
B. $14$ xe.
C. $17$ xe.
D. $12$ xe.
::key A
$12+9+5=26$. Phương án B bỏ sót xe đạp, C bỏ sót xe máy.

::tf
Gieo xúc xắc $20$ lần được số lần các mặt $1$ đến $6$ lần lượt là $3, 4, 2, 5, 3, 3$.
a) Mặt $4$ xuất hiện $5$ lần.
b) Mặt $3$ xuất hiện ít nhất.
c) Tổng số lần xuất hiện của các mặt là $20$.
d) Các mặt chẵn xuất hiện tất cả $10$ lần.
::key Đ Đ Đ S
a) Đúng. b) Đúng: $2$ lần là ít nhất. c) Đúng: $3+4+2+5+3+3=20$. d) Sai: $4+5+3=12$ lần.

::sa
Tung đồng xu $15$ lần, ngửa xuất hiện $9$ lần. Sấp xuất hiện mấy lần?
::key 6
$15-9=6$.

::sa
Gieo xúc xắc $20$ lần với số lần các mặt $1$ đến $6$ là $3, 4, 2, 5, 3, 3$. Các mặt chẵn xuất hiện tất cả mấy lần?
::key 12
Mặt $2$, $4$, $6$: $4+5+3=12$.
:::
