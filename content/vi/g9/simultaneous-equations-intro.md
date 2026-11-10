---
title: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn
description: Nhận biết phương trình bậc nhất hai ẩn, kiểm tra nghiệm, biểu diễn tập nghiệm bằng đường thẳng và hiểu nghiệm của hệ hai phương trình.
minutes: 20
---

:::goals
- Nhận biết phương trình bậc nhất hai ẩn $ax+by=c$ và kiểm tra một cặp số có phải là nghiệm không.
- Biểu diễn tập nghiệm của phương trình bậc nhất hai ẩn bằng một đường thẳng trong mặt phẳng toạ độ.
- Nhận biết hệ hai phương trình bậc nhất hai ẩn và kiểm tra nghiệm của hệ.
:::

Bạn Lan có $60$ nghìn đồng để mua đồ dùng học tập. Mỗi chiếc bút giá $5$ nghìn đồng, mỗi quyển vở giá $8$ nghìn đồng, và Lan muốn tiêu vừa hết số tiền. Lan có thể mua bao nhiêu bút, bao nhiêu vở? Nếu Lan muốn mua đúng $9$ món đồ thì sao?

Bài toán có hai số chưa biết: số bút và số vở. Ta cần một loại phương trình mới, có **hai ẩn**.

## Phương trình bậc nhất hai ẩn

### Khám phá: những cách mua vừa hết tiền

Gọi $x$ là số bút, $y$ là số vở. Tổng số tiền là $5x+8y$ (nghìn đồng), nên điều kiện "vừa hết tiền" là $5x+8y=60$. Ta thử vài giá trị của $x$ và tính $y=\dfrac{60-5x}{8}$:

| $x$ | $0$ | $4$ | $8$ | $12$ |
|---|---|---|---|---|
| $y$ | $7{,}5$ | $5$ | $2{,}5$ | $0$ |

Mỗi giá trị của $x$ cho một giá trị của $y$, nên có rất nhiều cặp số thoả mãn. Nhưng số bút, số vở phải là số tự nhiên, nên chỉ có hai cách mua: $4$ bút và $5$ vở, hoặc $12$ bút.

:::definition Phương trình bậc nhất hai ẩn
**Phương trình bậc nhất hai ẩn** $x$ và $y$ là hệ thức dạng
$$ax+by=c,$$
trong đó $a$, $b$, $c$ là các số đã biết, $a\neq 0$ hoặc $b\neq 0$.

Nếu $ax_0+by_0=c$ thì cặp số $(x_0; y_0)$ là một **nghiệm** của phương trình.
:::

:::example Kiểm tra nghiệm
Trong các cặp số $(1; -1)$, $(3; 2)$, $(-2; -3)$, cặp nào là nghiệm của phương trình $2x-3y=5$?

**Lời giải.** Thay từng cặp vào vế trái $2x-3y$ rồi so sánh với $5$:

$$\begin{aligned} (1; -1):&\quad 2\cdot1-3\cdot(-1)=2+3=5;\\ (3; 2):&\quad 2\cdot3-3\cdot2=0\neq5;\\ (-2; -3):&\quad 2\cdot(-2)-3\cdot(-3)=-4+9=5. \end{aligned}$$

Vậy $(1; -1)$ và $(-2; -3)$ là nghiệm, còn $(3; 2)$ không phải là nghiệm.
:::

## Biểu diễn tập nghiệm bằng đường thẳng

Phương trình bậc nhất hai ẩn luôn có vô số nghiệm. Mỗi nghiệm $(x_0; y_0)$ là một điểm trong mặt phẳng toạ độ, và tất cả các điểm đó nằm trên một đường thẳng.

- Nếu $b\neq 0$: ta viết $y=-\dfrac{a}{b}x+\dfrac{c}{b}$. Đây là đồ thị của hàm số bậc nhất (hoặc hàm hằng khi $a=0$) mà bạn đã học ở lớp 8.
- Nếu $b=0$ (khi đó $a\neq0$): phương trình trở thành $x=\dfrac{c}{a}$, là một đường thẳng song song với trục tung (hoặc trùng với trục tung khi $c=0$).

:::example Vẽ đường thẳng biểu diễn tập nghiệm
Biểu diễn tập nghiệm của mỗi phương trình trên cùng một mặt phẳng toạ độ: a) $x+2y=4$; b) $0x+y=3$; c) $2x+0y=-2$.

**Lời giải.** Ta đưa từng phương trình về dạng $y=\dots$ hoặc $x=\dots$:

$$\begin{aligned} \text{a) }& x+2y=4\iff y=-\tfrac12x+2;\\ \text{b) }& 0x+y=3\iff y=3;\\ \text{c) }& 2x+0y=-2\iff x=-1. \end{aligned}$$

Vậy a) là đường thẳng đi qua $(0; 2)$ và $(4; 0)$; b) là đường thẳng song song với trục hoành, cắt trục tung tại $(0; 3)$; c) là đường thẳng song song với trục tung, cắt trục hoành tại $(-1; 0)$.
:::

:::graph Ba đường thẳng biểu diễn tập nghiệm
alt: Mặt phẳng toạ độ với đường thẳng đi qua (0; 2) và (4; 0), đường thẳng nằm ngang y bằng 3 và đường thẳng thẳng đứng x bằng −1
x: -3..6
y: -2..5
plot: -x/2 + 2
hline: 3
vline: -1
point: (0, 2) "(0; 2)" above-right
point: (4, 0) "(4; 0)" below
label: (4.5, 3.4) "y = 3"
label: (-1.9, -1.4) "x = −1"
:::

## Hệ hai phương trình bậc nhất hai ẩn

Quay lại bài toán của Lan. Nếu Lan muốn mua đúng $9$ món đồ thì $x$ và $y$ phải thoả mãn **cùng lúc** hai phương trình: $5x+8y=60$ và $x+y=9$.

:::definition Hệ hai phương trình bậc nhất hai ẩn
**Hệ hai phương trình bậc nhất hai ẩn** có dạng
$$\begin{cases} ax+by=c\\ a'x+b'y=c' \end{cases}$$
trong đó mỗi phương trình là một phương trình bậc nhất hai ẩn. Cặp số $(x_0; y_0)$ là **nghiệm của hệ** nếu nó là nghiệm của **cả hai** phương trình.
:::

Về hình học, nghiệm của hệ là toạ độ giao điểm của hai đường thẳng biểu diễn hai phương trình.

:::example Nghiệm của hệ
Cặp số nào trong hai cặp $(2; 1)$ và $(3; -1)$ là nghiệm của hệ $\begin{cases} x+y=3\\ 2x-y=3 \end{cases}$?

**Lời giải.** Một cặp số là nghiệm của hệ khi nó thoả mãn cả hai phương trình, nên ta kiểm tra từng phương trình:

$$\begin{aligned} (2; 1):&\quad 2+1=3,\quad 2\cdot2-1=3;\\ (3; -1):&\quad 3+(-1)=2\neq 3. \end{aligned}$$

Vậy $(2; 1)$ là nghiệm của hệ; $(3; -1)$ không phải là nghiệm vì không thoả mãn phương trình thứ nhất.
:::

Bây giờ ta trả lời câu hỏi thứ hai ở đầu bài.

:::example Lập hệ từ bài toán mua đồ
Lan muốn tiêu vừa hết $60$ nghìn đồng và mua đúng $9$ món đồ. Lập hệ phương trình và chứng tỏ $(4; 5)$ là nghiệm của hệ.

**Lời giải.** Gọi $x$ là số bút, $y$ là số vở ($x$, $y$ là số tự nhiên). Tiền mua là $5x+8y$, số món đồ là $x+y$, nên:

$$\begin{cases} 5x+8y=60\\ x+y=9 \end{cases}\qquad 5\cdot4+8\cdot5=20+40=60,\quad 4+5=9.$$

Vậy Lan mua $4$ bút và $5$ vở. Bài sau sẽ chỉ cách tìm nghiệm này mà không cần đoán.
:::

:::warning Những sai lầm thường gặp
- **Đảo thứ tự trong cặp số.** Sai: "$(5; 4)$ là cách mua $4$ bút, $5$ vở". Lí do sai: số đứng trước là $x$ (số bút). Đúng: cách mua đó là $(4; 5)$.
- **Chỉ kiểm tra một phương trình của hệ.** Sai: "$(3; -1)$ thoả mãn $2x-y=7$ nên là nghiệm của hệ $x+y=3$, $2x-y=7$". Lí do sai: $3+(-1)=2\neq3$. Đúng: phải thoả mãn **cả hai** phương trình.
- **Cho rằng $0x+3y=6$ không phải phương trình bậc nhất hai ẩn.** Lí do sai: chỉ cần $a$ hoặc $b$ khác $0$. Đúng: đây là phương trình bậc nhất hai ẩn, tập nghiệm là đường thẳng $y=2$.
:::

## Thuật ngữ

:::terms
- phương trình bậc nhất hai ẩn | linear equation in two unknowns
- ẩn | unknown
- hệ số | coefficient
- nghiệm | solution
- tập nghiệm | solution set
- hệ hai phương trình bậc nhất hai ẩn | simultaneous linear equations in two unknowns
- nghiệm của hệ | solution of the simultaneous equations
- mặt phẳng toạ độ | coordinate plane
:::

## Tóm tắt

- Phương trình bậc nhất hai ẩn: $ax+by=c$ với $a\neq0$ hoặc $b\neq0$.
- $(x_0; y_0)$ là nghiệm khi $ax_0+by_0=c$; phương trình có vô số nghiệm.
- Tập nghiệm là một đường thẳng: $y=-\dfrac{a}{b}x+\dfrac{c}{b}$ nếu $b\neq0$; $x=\dfrac{c}{a}$ nếu $b=0$.
- Nghiệm của hệ hai phương trình là cặp số thoả mãn **cả hai** phương trình, tức là giao điểm của hai đường thẳng.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Phương trình nào sau đây là phương trình bậc nhất hai ẩn? a) $3x-y=2$; b) $0x+5y=-10$; c) $x+y^2=4$; d) $0x+0y=7$.

::hint
**Kiến thức:** $ax+by=c$ là phương trình bậc nhất hai ẩn khi $a\neq0$ hoặc $b\neq0$, và $x$, $y$ không có số mũ khác $1$.

**Gợi ý các bước:**
1. Đọc hệ số của $x$ và $y$ trong từng phương trình.
2. Loại phương trình có $y^2$ và phương trình có cả hai hệ số bằng $0$.

::solution
a) $a=3$, $b=-1$: đúng dạng. b) $a=0$, $b=5\neq0$: đúng dạng. c) có $y^2$: không phải. d) $a=b=0$: không phải.

**Đáp số.** a) và b).
:::

:::exercise
Cặp số nào là nghiệm của phương trình $3x+2y=8$: $(2; 1)$, $(0; 4)$, $(4; -2)$, $(1; 3)$?

::hint
**Kiến thức:** $(x_0; y_0)$ là nghiệm khi $3x_0+2y_0=8$.

**Gợi ý các bước:**
1. Thay từng cặp vào $3x+2y$.
2. So sánh kết quả với $8$.

::solution
$3\cdot2+2\cdot1=8$; $3\cdot0+2\cdot4=8$; $3\cdot4+2\cdot(-2)=8$; $3\cdot1+2\cdot3=9\neq8$.

**Đáp số.** $(2; 1)$, $(0; 4)$ và $(4; -2)$.
:::

:::exercise
Tìm $x$ để $(x; -1)$ là nghiệm của phương trình $4x+3y=9$.

::hint
**Kiến thức:** thay giá trị đã biết vào phương trình, ta được một phương trình bậc nhất một ẩn.

**Gợi ý các bước:**
1. Thay $y=-1$.
2. Giải phương trình một ẩn vừa nhận được.

::solution
$4x-3=9\iff 4x=12\iff x=3$.

**Đáp số.** $x=3$.
:::

:::exercise
Biểu diễn tập nghiệm của mỗi phương trình: a) $2x-y=1$; b) $0x+2y=6$.

::hint
**Kiến thức:** khi $b\neq0$, viết $y$ theo $x$ rồi vẽ đường thẳng qua hai điểm.

**Gợi ý các bước:**
1. Đưa về dạng $y=\dots$.
2. Tìm hai điểm của đường thẳng (ví dụ với $x=0$ và $x=1$).

::solution
a) $y=2x-1$: đường thẳng đi qua $(0; -1)$ và $(1; 1)$. b) $2y=6\iff y=3$: đường thẳng song song với trục hoành, cắt trục tung tại $(0; 3)$.

**Đáp số.** a) Đường thẳng $y=2x-1$; b) đường thẳng $y=3$.
:::

:::exercise
Một nhóm $7$ người đi xem phim. Vé học sinh giá $45$ nghìn đồng, vé người lớn giá $70$ nghìn đồng, cả nhóm trả $365$ nghìn đồng. Gọi $x$ là số học sinh, $y$ là số người lớn. Lập hệ phương trình, rồi cho biết cặp nào trong $(5; 2)$ và $(4; 3)$ là nghiệm của hệ.

::hint
**Kiến thức:** mỗi điều kiện của đề cho một phương trình; nghiệm của hệ thoả mãn cả hai.

**Gợi ý các bước:**
1. Số người cho $x+y=7$.
2. Số tiền cho $45x+70y=365$.
3. Thay từng cặp vào cả hai phương trình.

::solution
Hệ: $x+y=7$ và $45x+70y=365$. Với $(5; 2)$: $5+2=7$, $225+140=365$. Với $(4; 3)$: $4+3=7$ nhưng $180+210=390\neq365$.

**Đáp số.** $(5; 2)$: nhóm có $5$ học sinh và $2$ người lớn.
:::

:::exercise Ôn tập
Viết phương trình $3x+y=5$ dưới dạng $y=ax+b$. Đường thẳng biểu diễn tập nghiệm có hệ số góc bằng bao nhiêu và cắt trục tung tại điểm nào?

::hint
**Kiến thức:** đường thẳng $y=ax+b$ có hệ số góc $a$ và cắt trục tung tại $(0; b)$ (lớp 8).

**Gợi ý các bước:**
1. Chuyển $3x$ sang vế phải.
2. Đọc $a$ và $b$.

::solution
$3x+y=5\iff y=-3x+5$, nên $a=-3$, $b=5$.

**Đáp số.** Hệ số góc $-3$; cắt trục tung tại $(0; 5)$.
:::

:::exercise
Cho phương trình $x-2y=4$.

a) Tìm nghiệm của phương trình có $x=0$ và nghiệm có $y=0$.

b) Vẽ đường thẳng biểu diễn tập nghiệm của phương trình.

c) Trong hai nghiệm $(6; 1)$ và $(2; -1)$ của phương trình, nghiệm nào cũng là nghiệm của phương trình $2x+y=3$?

::hint
**Kiến thức:** hai nghiệm cho hai điểm của đường thẳng; nghiệm chung của hai phương trình là nghiệm của hệ.

**Gợi ý các bước:**
1. Thay $x=0$, rồi $y=0$.
2. Vẽ đường thẳng qua hai điểm vừa tìm.
3. Thay từng cặp vào $2x+y$.

::solution
a) $x=0$: $-2y=4\iff y=-2$. $y=0$: $x=4$. Hai nghiệm là $(0; -2)$ và $(4; 0)$.

b) Đường thẳng đi qua $(0; -2)$ và $(4; 0)$, tức là $y=\dfrac12x-2$.

c) $2\cdot6+1=13\neq3$; $2\cdot2+(-1)=3$.

**Đáp số.** a) $(0; -2)$, $(4; 0)$; b) đường thẳng qua hai điểm đó; c) $(2; -1)$.
:::

:::exercise Thử thách
Một cửa hàng bán nhãn dán giá $3$ nghìn đồng một tờ và $5$ nghìn đồng một tờ. Bạn Hùng muốn mua mỗi loại ít nhất một tờ và tiêu vừa hết $40$ nghìn đồng. Hãy tìm tất cả các cách mua.

::hint
**Kiến thức:** cách mua là nghiệm $(x; y)$ của $3x+5y=40$ với $x$, $y$ là số nguyên dương.

**Gợi ý các bước:**
1. Viết $5y=40-3x$; vì $40$ và $5y$ chia hết cho $5$, nên $3x$ chia hết cho $5$.
2. Suy ra $x$ chia hết cho $5$; thử $x=5, 10, 15$.

::solution
$x$ phải chia hết cho $5$ và $3x<40$, nên $x\in\{5; 10\}$. Với $x=5$: $5y=25$, $y=5$. Với $x=10$: $5y=10$, $y=2$. (Với $x=15$ thì $3x=45>40$.)

**Đáp số.** Hai cách: $5$ tờ loại $3$ nghìn và $5$ tờ loại $5$ nghìn, hoặc $10$ tờ loại $3$ nghìn và $2$ tờ loại $5$ nghìn.
:::

## Kiểm tra mini

:::quiz
::mc
Phương trình nào sau đây là phương trình bậc nhất hai ẩn?
A. $x^2-y=1$.
B. $0x+0y=2$.
C. $2x+0y=6$.
D. $xy=3$.
::key C
Hệ số của $x$ khác $0$. B có cả hai hệ số bằng $0$; A, D có số hạng bậc hai.

::mc
Cặp số nào là nghiệm của phương trình $x-3y=2$?
A. $(5; 1)$.
B. $(1; 5)$.
C. $(2; 1)$.
D. $(-1; 1)$.
::key A
$5-3\cdot1=2$. Phương án B đảo thứ tự $x$, $y$; D cho $-1-3=-4$ (nếu tính sai dấu sẽ ra $-1+3=2$).

::mc
Đường thẳng biểu diễn tập nghiệm của phương trình $0x+2y=-4$ là
A. đường thẳng $x=-2$.
B. đường thẳng $y=-2$.
C. đường thẳng $y=2x-4$.
D. đường thẳng $y=-4$.
::key B
$2y=-4\iff y=-2$. Phương án A nhầm $x$ với $y$; D quên chia cho $2$.

::mc
Cặp số nào là nghiệm của hệ $\begin{cases} x+y=5\\ 2x-y=1 \end{cases}$?
A. $(1; 1)$.
B. $(3; 2)$.
C. $(1; 4)$.
D. $(2; 3)$.
::key D
$2+3=5$ và $4-3=1$. Các phương án B, C chỉ thoả mãn phương trình thứ nhất, A chỉ thoả mãn phương trình thứ hai.

::tf
Cho phương trình $2x+y=7$.
a) $(3; 1)$ là một nghiệm của phương trình.
b) Phương trình có đúng một nghiệm.
c) Đường thẳng biểu diễn tập nghiệm đi qua điểm $(0; 7)$.
d) $(3; 1)$ cũng là nghiệm của hệ $\begin{cases} 2x+y=7\\ x-y=1 \end{cases}$.
::key Đ S Đ S
a) Đúng: $6+1=7$. b) Sai: phương trình bậc nhất hai ẩn có vô số nghiệm. c) Đúng: $0+7=7$. d) Sai: $3-1=2\neq1$.

::sa
Cho phương trình $3x-2y=12$. Tìm $y$ để $(2; y)$ là nghiệm của phương trình.
::key -3
$6-2y=12\iff -2y=6\iff y=-3$.

::sa
Phương trình $x+2y=9$ có bao nhiêu nghiệm $(x; y)$ mà $x$ và $y$ đều là số nguyên dương?
::key 4
$x=9-2y>0$ nên $y\in\{1; 2; 3; 4\}$, cho các nghiệm $(7; 1)$, $(5; 2)$, $(3; 3)$, $(1; 4)$.
:::
