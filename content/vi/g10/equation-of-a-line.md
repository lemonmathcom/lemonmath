---
title: Phương trình đường thẳng
description: Mô tả đường thẳng bằng một điểm và vectơ chỉ phương hoặc vectơ pháp tuyến, rồi chuyển giữa dạng tham số, tổng quát và dạng hệ số góc.
minutes: 28
---

:::goals
- Dùng vectơ chỉ phương $\vec{u}$ và vectơ pháp tuyến $\vec{n}$ của đường thẳng.
- Viết phương trình tham số, tổng quát và dạng hệ số góc của đường thẳng, rồi chuyển đổi giữa chúng.
- Viết phương trình đường thẳng đi qua hai điểm, đường thẳng song song và vuông góc.
- Dùng giao điểm với các trục để vẽ đường thẳng.
:::

Một robot hút bụi xuất phát tại điểm $M(1; 2)$ trên sàn nhà (đơn vị: mét). Mỗi giây nó dịch chuyển theo vectơ $\vec{u}=(2; 3)$, tức là sang phải $2$ m và lên trên $3$ m. Robot có đi qua điểm $N(9; 14)$ không, và nếu có thì sau bao nhiêu giây?

Robot chỉ cần một **điểm xuất phát** và một **hướng đi** là vạch ra cả một đường thẳng. Bài này biến ý tưởng đó thành phương trình.

## Vectơ chỉ phương và vectơ pháp tuyến

### Khám phá: vị trí của robot

Sau $t$ giây robot ở điểm $M+t\vec{u}$. Ta ghi vài vị trí:

| $t$ (giây) | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| vị trí | $(1; 2)$ | $(3; 5)$ | $(5; 8)$ | $(7; 11)$ |

Các điểm này thẳng hàng, và vị trí sau $t$ giây là $(1+2t; 2+3t)$. Muốn đến $N(9; 14)$ ta cần $1+2t=9$ và $2+3t=14$. Cả hai cùng cho $t=4$, nên robot đi qua $N$ sau $4$ giây.

:::graph Đường đi của robot
alt: Đường thẳng đi qua các vị trí của robot tại t bằng 0, 1, 2 và điểm N(9; 14)
x: -1..10
y: -1..15
plot: (3x + 1)/2
point: (1, 2) "t=0" right
point: (3, 5) "t=1" right
point: (5, 8) "t=2" right
point: (9, 14) "N" right
:::

Vectơ $\vec{u}=(2; 3)$ cho **hướng** của đường thẳng. Vectơ $\vec{n}=(3; -2)$ vuông góc với nó, vì $\vec{u}\cdot\vec{n}=2\cdot3+3\cdot(-2)=0$.

:::definition Vectơ chỉ phương và vectơ pháp tuyến
- **Vectơ chỉ phương** của đường thẳng $\Delta$ là vectơ $\vec{u}\neq\vec{0}$ có giá song song hoặc trùng với $\Delta$.
- **Vectơ pháp tuyến** của $\Delta$ là vectơ $\vec{n}\neq\vec{0}$ có giá vuông góc với $\Delta$.
- Nếu $\vec{u}=(a; b)$ thì $\vec{n}=(-b; a)$ (hoặc $(b; -a)$) là một vectơ pháp tuyến. Mọi bội khác $\vec{0}$ của $\vec{u}$ (hoặc $\vec{n}$) cũng dùng được.
:::

## Ba dạng phương trình

:::definition Phương trình đường thẳng
Cho đường thẳng đi qua $M_0(x_0; y_0)$.
- **Tham số:** với vectơ chỉ phương $\vec{u}=(a; b)$,
$$\begin{cases}x=x_0+at\\ y=y_0+bt\end{cases}\quad(t\in\mathbb{R}).$$
- **Tổng quát:** với vectơ pháp tuyến $\vec{n}=(A; B)$,
$$A(x-x_0)+B(y-y_0)=0,\ \text{ tức là }\ Ax+By+C=0.$$
- **Dạng hệ số góc:** đường thẳng không song song với trục tung có dạng $y=kx+m$, trong đó $k$ là hệ số góc.
:::

### Vì sao phương trình tổng quát đúng?

Điểm $M(x; y)$ thuộc đường thẳng khi và chỉ khi $\overrightarrow{M_0M}=(x-x_0; y-y_0)$ vuông góc với $\vec{n}$. Hai vectơ vuông góc khi tích vô hướng bằng $0$:
$$\vec{n}\cdot\overrightarrow{M_0M}=A(x-x_0)+B(y-y_0)=0.$$
Ngược lại, trong phương trình $Ax+By+C=0$ thì $(A; B)$ là một vectơ pháp tuyến. Nếu $B\neq 0$, giải theo $y$ được $y=-\dfrac{A}{B}x-\dfrac{C}{B}$, nên hệ số góc là $k=-\dfrac{A}{B}$.

Với robot ở đầu bài, ta viết được ngay cả hai dạng.

:::example Từ một điểm và một vectơ pháp tuyến
Viết phương trình tổng quát và phương trình tham số của đường thẳng đi qua $M(1; 2)$ với vectơ pháp tuyến $\vec{n}=(3; -2)$.

**Lời giải.** Thay điểm và vectơ pháp tuyến vào dạng $A(x-x_0)+B(y-y_0)=0$:

$$3(x-1)-2(y-2)=0\iff 3x-2y+1=0.$$

Đổi chỗ hai toạ độ của $\vec{n}$ rồi đổi dấu một toạ độ, ta được vectơ chỉ phương $\vec{u}=(2; 3)$.

Vậy đường thẳng có phương trình tổng quát $3x-2y+1=0$ và phương trình tham số $\begin{cases}x=1+2t\\ y=2+3t.\end{cases}$

**Kiểm tra.** Điểm $N(9; 14)$ ở đầu bài: $3\cdot9-2\cdot14+1=0$, khớp với kết quả $t=4$.
:::

## Đường thẳng đi qua hai điểm

Khi chỉ biết hai điểm, ta tự tạo ra hướng: vectơ nối hai điểm chính là một vectơ chỉ phương.

:::graph Đường thẳng đi qua $A$ và $B$
alt: Đường thẳng có hệ số góc dương đi qua A(1; 3) và B(4; 9)
x: -2..6
y: -2..10
plot: 2x + 1
point: (1, 3) "A" below-right
point: (4, 9) "B" below-right
:::

:::example Hai điểm
Viết phương trình đường thẳng đi qua $A(1; 3)$ và $B(4; 9)$.

**Lời giải.** Lấy $\overrightarrow{AB}$ làm vectơ chỉ phương, rồi suy ra vectơ pháp tuyến:

$$\overrightarrow{AB}=(3; 6)=3(1; 2)\ \Rightarrow\ \vec{u}=(1; 2),\ \vec{n}=(2; -1).$$

$$2(x-1)-(y-3)=0\iff 2x-y+1=0\iff y=2x+1.$$

Vậy đường thẳng $AB$ là $2x-y+1=0$, có hệ số góc $k=2$.

**Kiểm tra.** Điểm $B$: $2\cdot4-9+1=0$.
:::

## Chuyển đổi và vẽ đường thẳng

Để vẽ một đường thẳng cho ở dạng tổng quát, cách nhanh nhất là tìm hai giao điểm với các trục.

:::example Giao điểm với các trục
Vẽ đường thẳng $2x+3y-6=0$ và tìm hệ số góc.

**Lời giải.** Cho lần lượt $y=0$ và $x=0$:

$$y=0\Rightarrow x=3,\qquad x=0\Rightarrow y=2.$$

Đường thẳng đi qua $(3; 0)$ và $(0; 2)$, nên có dạng đoạn chắn $\dfrac{x}{3}+\dfrac{y}{2}=1$. Giải theo $y$: $y=-\dfrac23x+2$.

Vậy hệ số góc là $k=-\dfrac23$.
:::

:::graph Đường thẳng $2x+3y-6=0$
alt: Đường thẳng có hệ số góc âm cắt trục hoành tại 3 và trục tung tại 2
x: -2..5
y: -2..4
plot: (6 - 2x)/3
point: (3, 0) "(3; 0)" above-right
point: (0, 2) "(0; 2)" above-right
:::

Chiều ngược lại cũng thường gặp: từ phương trình tham số, ta đọc ra một điểm và vectơ chỉ phương.

:::example Từ tham số sang tổng quát
Chuyển $\begin{cases}x=1+2t\\ y=-1+3t\end{cases}$ về phương trình tổng quát.

**Lời giải.** Ứng với $t=0$ là điểm $(1; -1)$; hệ số của $t$ cho vectơ chỉ phương $\vec{u}=(2; 3)$, nên $\vec{n}=(3; -2)$:

$$3(x-1)-2(y+1)=0\iff 3x-2y-5=0.$$

Vậy phương trình tổng quát là $3x-2y-5=0$.
:::

## Đường thẳng song song và vuông góc

Đường thẳng song song với $Ax+By+C=0$ có cùng vectơ pháp tuyến, nên có dạng $Ax+By+C'=0$ với $C'\neq C$. Đường thẳng vuông góc với nó nhận vectơ chỉ phương $(B; -A)$ của đường thẳng cũ làm vectơ pháp tuyến, nên có dạng $Bx-Ay+C''=0$.

:::example Song song và vuông góc
Viết phương trình đường thẳng đi qua $P(2; -1)$ và a) song song, b) vuông góc với $3x-4y+5=0$.

**Lời giải.** Ta viết dạng chung rồi thay toạ độ của $P$ để tìm hệ số tự do:

$$\begin{aligned} \text{a) }& 3x-4y+C'=0,\ \ 3\cdot2-4\cdot(-1)+C'=0\Rightarrow C'=-10;\\ \text{b) }& 4x+3y+C''=0,\ \ 4\cdot2+3\cdot(-1)+C''=0\Rightarrow C''=-5. \end{aligned}$$

Vậy đường thẳng song song là $3x-4y-10=0$ và đường thẳng vuông góc là $4x+3y-5=0$.
:::

Ví dụ cuối dùng đường thẳng vuông góc trong một tình huống thực tế: tìm vị trí cách đều hai điểm.

:::example Trạm bơm cách đều hai làng
Trên một bản đồ (đơn vị: km), hai làng ở $A(1; 1)$ và $B(5; 3)$, còn một con kênh chạy dọc trục hoành. Cần đặt một trạm bơm trên kênh, cách đều hai làng. Tìm vị trí trạm bơm.

**Lời giải.** Các điểm cách đều $A$ và $B$ nằm trên đường trung trực của $AB$. Đường này đi qua trung điểm $I(3; 2)$ và nhận $\overrightarrow{AB}=(4; 2)$ làm vectơ pháp tuyến:

$$4(x-3)+2(y-2)=0\iff 2x+y-8=0.$$

Trạm bơm nằm trên kênh nên $y=0$, suy ra $2x-8=0$, tức $x=4$.

Vậy trạm bơm đặt tại điểm $(4; 0)$.

**Kiểm tra.** Khoảng cách đến hai làng: $\sqrt{3^2+1^2}=\sqrt{10}$ và $\sqrt{1^2+3^2}=\sqrt{10}$ (km), bằng nhau.
:::

:::warning Những sai lầm thường gặp
- **Nhầm vectơ pháp tuyến với vectơ chỉ phương.** Sai: đường thẳng qua $M(1; 2)$ có $\vec{u}=(2; 3)$ được viết là $2(x-1)+3(y-2)=0$. Lí do sai: hệ số của $x$, $y$ trong dạng tổng quát là toạ độ của vectơ **pháp tuyến**. Đúng: dùng $\vec{n}=(3; -2)$, được $3x-2y+1=0$.
- **Sai dấu hệ số góc.** Sai: $2x+3y-6=0$ có $k=\dfrac23$. Lí do sai: giải theo $y$ được $y=-\dfrac23x+2$. Đúng: $k=-\dfrac{A}{B}=-\dfrac23$.
- **Chia cho $B=0$.** Đường thẳng $x-4=0$ có $B=0$, song song với trục tung, nên không có hệ số góc. Đừng cố viết nó dưới dạng $y=kx+m$.
:::

## Thuật ngữ

:::terms
- vectơ chỉ phương | direction vector
- vectơ pháp tuyến | normal vector
- phương trình tham số | parametric equations
- phương trình tổng quát | general (Cartesian) equation
- hệ số góc | gradient
- giao điểm với trục | intercept
- song song | parallel
- đường trung trực | perpendicular bisector
:::

## Tóm tắt

- Một đường thẳng được xác định bởi một điểm $M_0(x_0; y_0)$ và vectơ chỉ phương $\vec{u}=(a; b)$ hoặc vectơ pháp tuyến $\vec{n}=(A; B)$; $\vec{u}=(a; b)$ thì $\vec{n}=(-b; a)$.
- Tham số: $x=x_0+at$, $y=y_0+bt$.
- Tổng quát: $A(x-x_0)+B(y-y_0)=0$, tức $Ax+By+C=0$.
- Hệ số góc $k=-\dfrac{A}{B}$ (khi $B\neq 0$). Vẽ nhanh: tìm giao điểm với hai trục.
- Song song: giữ $(A; B)$. Vuông góc: đổi $(A; B)$ thành $(B; -A)$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Viết phương trình tổng quát của đường thẳng đi qua $A(2; 1)$ với vectơ pháp tuyến $\vec{n}=(1; -3)$.

::hint
**Kiến thức:** đường thẳng qua $M_0(x_0; y_0)$ có vectơ pháp tuyến $(A; B)$ là $A(x-x_0)+B(y-y_0)=0$.

**Gợi ý các bước:**
1. Thay $A=1$, $B=-3$, $x_0=2$, $y_0=1$.
2. Khai triển và rút gọn.

::solution
$1\cdot(x-2)-3(y-1)=0\iff x-3y+1=0$. Kiểm tra $A$: $2-3+1=0$.

**Đáp số.** $x-3y+1=0$.
:::

:::exercise
Viết phương trình tham số và phương trình tổng quát của đường thẳng đi qua $A(1; 1)$ với vectơ chỉ phương $\vec{u}=(2; 1)$.

::hint
**Kiến thức:** $\vec{u}=(a; b)$ thì $\vec{n}=(-b; a)$ hoặc $(b; -a)$.

**Gợi ý các bước:**
1. Viết dạng tham số từ điểm và $\vec{u}$.
2. Lấy $\vec{n}=(1; -2)$ rồi viết dạng tổng quát.

::solution
Tham số: $x=1+2t$, $y=1+t$. Với $\vec{n}=(1; -2)$: $(x-1)-2(y-1)=0\iff x-2y+1=0$.

**Đáp số.** $\begin{cases}x=1+2t\\ y=1+t\end{cases}$ và $x-2y+1=0$.
:::

:::exercise
Viết phương trình tổng quát của đường thẳng đi qua $A(-1; 2)$ và $B(3; -2)$.

::hint
**Kiến thức:** $\overrightarrow{AB}$ là một vectơ chỉ phương của đường thẳng $AB$.

**Gợi ý các bước:**
1. Tính $\overrightarrow{AB}$, rút gọn thành vectơ đơn giản hơn.
2. Suy ra vectơ pháp tuyến và viết phương trình qua $A$.

::solution
$\overrightarrow{AB}=(4; -4)=4(1; -1)$, nên $\vec{u}=(1; -1)$ và $\vec{n}=(1; 1)$. Ta có $(x+1)+(y-2)=0\iff x+y-1=0$. Kiểm tra $B$: $3-2-1=0$.

**Đáp số.** $x+y-1=0$.
:::

:::exercise
Tìm hệ số góc và giao điểm với hai trục toạ độ của đường thẳng $4x-2y+8=0$.

::hint
**Kiến thức:** giải theo $y$ để đọc hệ số góc; cho $x=0$ hoặc $y=0$ để tìm giao điểm với trục.

**Gợi ý các bước:**
1. Viết $y$ theo $x$.
2. Cho $y=0$, rồi cho $x=0$.

::solution
$4x-2y+8=0\iff y=2x+4$, nên $k=2$. Với $y=0$: $x=-2$. Với $x=0$: $y=4$.

**Đáp số.** $k=2$; giao điểm $(-2; 0)$ và $(0; 4)$.
:::

:::exercise
Chuyển phương trình tham số $\begin{cases}x=2-t\\ y=3+2t\end{cases}$ về phương trình tổng quát.

::hint
**Kiến thức:** trong dạng tham số, $t=0$ cho một điểm và các hệ số của $t$ cho vectơ chỉ phương.

**Gợi ý các bước:**
1. Đọc điểm $(2; 3)$ và $\vec{u}=(-1; 2)$.
2. Lấy $\vec{n}=(2; 1)$ rồi viết dạng tổng quát.

::solution
$\vec{u}=(-1; 2)$, $\vec{n}=(2; 1)$, điểm $(2; 3)$: $2(x-2)+(y-3)=0\iff 2x+y-7=0$.

**Đáp số.** $2x+y-7=0$.
:::

:::exercise
Cho đường thẳng $d: x-2y+4=0$. Mỗi khẳng định sau đúng hay sai?

a) $d$ có một vectơ pháp tuyến là $\vec{n}=(1; -2)$.

b) $d$ có một vectơ chỉ phương là $\vec{u}=(2; 1)$.

c) Điểm $M(2; 1)$ thuộc $d$.

d) Đường thẳng đi qua gốc toạ độ và vuông góc với $d$ có phương trình $2x+y=0$.

::hint
**Kiến thức:** $Ax+By+C=0$ có $\vec{n}=(A; B)$ và $\vec{u}=(B; -A)$; một điểm thuộc đường thẳng khi toạ độ của nó thoả mãn phương trình.

**Gợi ý các bước:**
1. Đọc $\vec{n}$ và kiểm tra $\vec{u}\cdot\vec{n}=0$.
2. Thay $M$ vào phương trình.
3. Đường vuông góc nhận $\vec{u}$ của $d$ làm vectơ pháp tuyến.

::solution
a) **Đúng**: các hệ số của $x$, $y$ là $1$ và $-2$.

b) **Đúng**: $\vec{u}\cdot\vec{n}=2\cdot1+1\cdot(-2)=0$, nên $\vec{u}$ song song với $d$.

c) **Sai**: $2-2\cdot1+4=4\neq 0$.

d) **Đúng**: đường vuông góc nhận $(2; 1)$ làm vectơ pháp tuyến và qua $O(0; 0)$: $2x+y=0$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Đường thẳng $\Delta$ đi qua $P(1; -2)$ và song song với đường thẳng $2x-y+3=0$. Tìm tung độ giao điểm của $\Delta$ với trục tung.

::hint
**Kiến thức:** đường thẳng song song với $Ax+By+C=0$ có dạng $Ax+By+C'=0$.

**Gợi ý các bước:**
1. Viết $2x-y+C'=0$ và thay toạ độ $P$ để tìm $C'$.
2. Cho $x=0$ để tìm giao điểm với trục tung.

::solution
$2x-y+C'=0$ đi qua $P$: $2+2+C'=0$, nên $C'=-4$ và $\Delta: 2x-y-4=0$. Với $x=0$: $y=-4$.

**Đáp số.** $-4$.
:::

:::exercise
Trên một hải đồ (đơn vị: km), một tàu xuất phát từ $A(2; 1)$ và mỗi giờ đi được một đoạn ứng với vectơ $\vec{v}=(3; 4)$.

a) Viết phương trình tham số của đường đi của tàu, với $t$ là số giờ.

b) Sau bao nhiêu giờ tàu đến cảng $B(11; 13)$?

c) Viết phương trình tổng quát của đường đi.

::hint
**Kiến thức:** vị trí sau $t$ giờ là $A+t\vec{v}$; $\vec{v}=(3; 4)$ thì $\vec{n}=(4; -3)$.

**Gợi ý các bước:**
1. Viết $x=2+3t$, $y=1+4t$.
2. Giải $2+3t=11$ và kiểm tra $1+4t=13$.
3. Dùng $\vec{n}$ và điểm $A$ để viết dạng tổng quát.

::solution
a) $x=2+3t$, $y=1+4t$ ($t\ge 0$).

b) $2+3t=11\Rightarrow t=3$, và $1+4\cdot3=13$ cũng đúng, nên tàu đến $B$ sau $3$ giờ.

c) $4(x-2)-3(y-1)=0\iff 4x-3y-5=0$. Kiểm tra $B$: $44-39-5=0$.

**Đáp số.** a) $x=2+3t$, $y=1+4t$; b) $3$ giờ; c) $4x-3y-5=0$.
:::

:::exercise Thử thách
Một đường thẳng đi qua $M(2; 3)$ cắt trục hoành tại $A(a; 0)$ và trục tung tại $B(0; b)$ sao cho $M$ là trung điểm của $AB$. Viết phương trình của đường thẳng đó.

::hint
**Kiến thức:** trung điểm của $AB$ có toạ độ $\left(\dfrac{x_A+x_B}{2}; \dfrac{y_A+y_B}{2}\right)$; dạng đoạn chắn $\dfrac{x}{a}+\dfrac{y}{b}=1$.

**Gợi ý các bước:**
1. Từ điều kiện trung điểm, tìm $a$ và $b$.
2. Viết dạng đoạn chắn rồi đưa về dạng tổng quát.

::solution
$\dfrac{a+0}{2}=2$ và $\dfrac{0+b}{2}=3$, nên $a=4$, $b=6$. Đường thẳng $\dfrac{x}{4}+\dfrac{y}{6}=1$; nhân hai vế với $12$: $3x+2y-12=0$. Kiểm tra $M$: $6+6-12=0$.

**Đáp số.** $3x+2y-12=0$.
:::

:::exercise Ôn tập
Cho tam giác $ABC$ với $A(1; 2)$, $B(5; 4)$, $C(-1; 6)$.

a) Dùng [tích vô hướng](lesson:dot-product), chứng minh tam giác $ABC$ vuông tại $A$.

b) Viết phương trình đường cao $AH$ của tam giác.

c) Tìm toạ độ chân đường cao $H$.

::hint
**Kiến thức:** $\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$; đường cao từ $A$ vuông góc với $BC$, nên nhận $\overrightarrow{BC}$ làm vectơ pháp tuyến.

**Gợi ý các bước:**
1. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$.
2. Tính $\overrightarrow{BC}$, viết đường cao qua $A$.
3. Viết phương trình $BC$ rồi giải hệ hai phương trình.

::solution
a) $\overrightarrow{AB}=(4; 2)$, $\overrightarrow{AC}=(-2; 4)$, $\overrightarrow{AB}\cdot\overrightarrow{AC}=-8+8=0$, nên $\widehat{BAC}=90^\circ$.

b) $\overrightarrow{BC}=(-6; 2)=-2(3; -1)$, nên đường cao $AH$: $3(x-1)-(y-2)=0\iff 3x-y-1=0$.

c) $BC$ có vectơ chỉ phương $(3; -1)$, vectơ pháp tuyến $(1; 3)$: $(x-5)+3(y-4)=0\iff x+3y-17=0$. Thay $y=3x-1$: $x+9x-3-17=0$, nên $x=2$, $y=5$.

**Đáp số.** b) $3x-y-1=0$; c) $H(2; 5)$.
:::

## Kiểm tra mini

:::quiz
::mc
Một vectơ pháp tuyến của đường thẳng $2x-5y+3=0$ là
A. $(2; 5)$.
B. $(5; 2)$.
C. $(2; -5)$.
D. $(-5; 3)$.
::key C
Trong phương trình $Ax+By+C=0$, cặp hệ số $(A; B)=(2; -5)$ là một vectơ pháp tuyến. Phương án B là một vectơ chỉ phương; A sai dấu.

::mc
Phương trình tham số của đường thẳng đi qua $A(1; -2)$ và có vectơ chỉ phương $\vec u=(3; 1)$ là
A. $\begin{cases}x=3+t\\ y=1-2t\end{cases}$.
B. $\begin{cases}x=1+t\\ y=-2+3t\end{cases}$.
C. $\begin{cases}x=1+3t\\ y=2+t\end{cases}$.
D. $\begin{cases}x=1+3t\\ y=-2+t\end{cases}$.
::key D
$x=x_0+at$, $y=y_0+bt$ với $(x_0; y_0)=(1; -2)$ và $(a; b)=(3; 1)$. Phương án A đổi vai trò điểm và vectơ, B đổi chỗ hai toạ độ của $\vec u$, C sai dấu $y_0$.

::mc
Hệ số góc của đường thẳng $3x+4y-8=0$ là
A. $\dfrac34$.
B. $-\dfrac34$.
C. $-\dfrac43$.
D. $2$.
::key B
Rút $y$: $y=-\dfrac34x+2$, nên $k=-\dfrac AB=-\dfrac34$. Phương án A quên dấu trừ; D là tung độ giao điểm với trục tung.

::mc
Đường thẳng đi qua $M(1; 2)$ và vuông góc với đường thẳng $x-3y+5=0$ có phương trình là
A. $x-3y+5=0$.
B. $3x+y+5=0$.
C. $3x+y-5=0$.
D. $3x-y-1=0$.
::key C
Đường vuông góc nhận $(3; 1)$ làm vectơ pháp tuyến: $3(x-1)+(y-2)=0\iff 3x+y-5=0$. Phương án A song song (thực ra trùng) với đường đã cho; D đi qua $M$ nhưng có vectơ pháp tuyến $(3; -1)$ nên không vuông góc.

::tf
Cho đường thẳng $d: \begin{cases}x=2+t\\ y=-1+2t\end{cases}$.
a) $d$ đi qua điểm $A(2; -1)$.
b) $\vec n=(2; 1)$ là một vectơ pháp tuyến của $d$.
c) Phương trình tổng quát của $d$ là $2x-y-5=0$.
d) $d$ cắt trục tung tại điểm có tung độ bằng $5$.
::key Đ S Đ S
a) Đúng: $t=0$. b) Sai: $\vec u=(1; 2)$ và $\vec u\cdot\vec n=4\ne0$; một vectơ pháp tuyến là $(2; -1)$. c) Đúng: $2(x-2)-(y+1)=0\iff 2x-y-5=0$. d) Sai: $x=0$ cho $y=-5$.

::sa
Đường thẳng đi qua $A(-1; 3)$ và $B(2; 9)$ cắt trục tung tại điểm có tung độ bằng bao nhiêu?
::key 5
$\overrightarrow{AB}=(3; 6)=3(1; 2)$ nên $\vec n=(2; -1)$: $2(x+1)-(y-3)=0\iff y=2x+5$. Với $x=0$ ta được $y=5$.

::sa
Trên hải đồ (đơn vị: km), một con tàu rời điểm $A(1; 2)$ và mỗi giờ đi được một độ dời bằng vectơ $\vec v=(3; -1)$. Bờ biển là đường thẳng $x+y-15=0$. Sau bao nhiêu giờ thì tàu chạm bờ?
::key 6
Sau $t$ giờ tàu ở $(1+3t; 2-t)$. Thay vào phương trình bờ: $1+3t+2-t-15=0\iff 2t=12\iff t=6$.
:::
