---
title: Phương trình đường thẳng
description: Mô tả đường thẳng bằng một điểm và vectơ chỉ phương hoặc vectơ pháp tuyến, rồi chuyển giữa dạng tham số, tổng quát và dạng hệ số góc.
minutes: 18
---

:::goals
- Dùng vectơ chỉ phương $\vec{u}$ và vectơ pháp tuyến $\vec{n}$ của đường thẳng.
- Viết phương trình tham số, tổng quát và dạng hệ số góc của đường thẳng, rồi chuyển đổi giữa chúng.
- Viết phương trình đường thẳng đi qua hai điểm, đường thẳng song song và vuông góc.
- Dùng giao điểm với các trục để vẽ đường thẳng.
:::

Máy định vị GPS cho bạn một điểm xuất phát và một hướng đi. Hai thứ đó đủ để xác định một con đường thẳng, không cần thêm thông tin gì. Đó cũng chính là cách ta mô tả đường thẳng trong toạ độ: một **điểm** thuộc đường thẳng và một **hướng**. Bài này biến ý tưởng ấy thành phương trình dưới ba dạng hữu ích.

## Vectơ chỉ phương và vectơ pháp tuyến

**Vectơ chỉ phương** $\vec{u}=(a; b)\neq\vec{0}$ của đường thẳng là vectơ song song với đường thẳng. **Vectơ pháp tuyến** $\vec{n}=(A; B)\neq\vec{0}$ là vectơ vuông góc với đường thẳng. Vì $\vec{u}\perp\vec{n}$, từ $\vec{u}=(a; b)$ ta lấy $\vec{n}=(-b; a)$ (hoặc $(b; -a)$). Mọi bội khác $0$ của $\vec{u}$ (hoặc $\vec{n}$) cũng dùng được.

## Ba dạng phương trình

:::definition Phương trình đường thẳng
Cho đường thẳng đi qua $M_0(x_0; y_0)$.
- **Tham số:** với vectơ chỉ phương $\vec{u}=(a; b)$,
$$\begin{cases}x=x_0+at\\ y=y_0+bt\end{cases}\quad(t\in\mathbb{R}).$$
- **Tổng quát:** với vectơ pháp tuyến $\vec{n}=(A; B)$,
$$A(x-x_0)+B(y-y_0)=0,\ \text{ tức là }\ Ax+By+C=0.$$
- **Dạng hệ số góc:** đường thẳng không thẳng đứng là $y=kx+m$, trong đó $k$ là hệ số góc.
:::

Trong dạng tổng quát, cặp hệ số $(A; B)$ là một vectơ pháp tuyến của đường thẳng. Nếu $B\neq 0$ thì hệ số góc là $k=-\frac{A}{B}$.

:::example Từ một điểm và một vectơ pháp tuyến
Viết phương trình đường thẳng đi qua $M(1; 2)$ với vectơ pháp tuyến $\vec{n}=(3; -2)$ và nêu một vectơ chỉ phương.

**Lời giải.** $3(x-1)-2(y-2)=0$, suy ra $3x-3-2y+4=0$, tức $3x-2y+1=0$. Một vectơ chỉ phương là $\vec{u}=(2; 3)$ (đổi chỗ hai toạ độ của $\vec{n}$ rồi đổi dấu một toạ độ). Kiểm tra: $3\cdot 1-2\cdot 2+1=0$ ✓.
:::

## Đường thẳng đi qua hai điểm

Với $A(x_A; y_A)$ và $B(x_B; y_B)$, lấy $\overrightarrow{AB}$ làm vectơ chỉ phương, suy ra vectơ pháp tuyến, rồi viết dạng tổng quát.

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

**Lời giải.** $\overrightarrow{AB}=(3; 6)$, nên lấy $\vec{u}=(1; 2)$ và $\vec{n}=(2; -1)$. Đường thẳng: $2(x-1)-(y-3)=0$, tức $2x-y+1=0$, hay $y=2x+1$ với hệ số góc $k=2$. Kiểm tra $B$: $2\cdot 4-9+1=0$ ✓.
:::

## Chuyển đổi và vẽ đường thẳng

:::example Dạng đoạn chắn
Vẽ đường thẳng $2x+3y-6=0$ và tìm hệ số góc.

**Lời giải.** Với $y=0$: $x=3$. Với $x=0$: $y=2$. Đường thẳng đi qua $(3; 0)$ và $(0; 2)$, nên theo dạng đoạn chắn là $\frac{x}{3}+\frac{y}{2}=1$. Giải theo $y$: $y=-\frac23x+2$, hệ số góc $k=-\frac23$.
:::

:::graph Đường thẳng $2x+3y-6=0$
alt: Đường thẳng có hệ số góc âm cắt trục hoành tại 3 và trục tung tại 2
x: -2..5
y: -2..4
plot: (6 - 2x)/3
point: (3, 0) "(3; 0)" above-right
point: (0, 2) "(0; 2)" above-right
:::

:::example Từ tham số sang tổng quát
Chuyển $\begin{cases}x=1+2t\\ y=-1+3t\end{cases}$ về phương trình tổng quát.

**Lời giải.** Vectơ chỉ phương là $\vec{u}=(2; 3)$, nên $\vec{n}=(3; -2)$, và đường thẳng đi qua $(1; -1)$: $3(x-1)-2(y+1)=0$, tức $3x-2y-5=0$.
:::

## Đường thẳng song song và vuông góc

Đường thẳng song song với $Ax+By+C=0$ có dạng $Ax+By+C'=0$ (cùng $\vec{n}$). Đường thẳng vuông góc với nó nhận $\vec{n}'=\vec{u}=(B; -A)$ làm vectơ pháp tuyến, tức có dạng $Bx-Ay+C''=0$.

:::example Song song và vuông góc
Viết phương trình đường thẳng đi qua $P(2; -1)$ và (a) song song, (b) vuông góc với $3x-4y+5=0$.

**Lời giải.**
- (a) $3x-4y+C'=0$ đi qua $P$: $6+4+C'=0$, nên $C'=-10$. Đường thẳng là $3x-4y-10=0$.
- (b) $4x+3y+C''=0$ đi qua $P$: $8-3+C''=0$, nên $C''=-5$. Đường thẳng là $4x+3y-5=0$.
:::

:::example Đường trung trực
Viết phương trình đường trung trực của $AB$ với $A(1; 1)$ và $B(5; 3)$.

**Lời giải.** Trung điểm là $M(3; 2)$ và $\overrightarrow{AB}=(4; 2)$ là vectơ pháp tuyến của đường trung trực. Vậy $4(x-3)+2(y-2)=0$, tức $2x+y-8=0$.
:::

:::warning Những sai lầm thường gặp
- Nhầm vectơ chỉ phương với vectơ pháp tuyến: $\vec{n}=(A; B)$ vuông góc với đường thẳng.
- Viết hệ số góc là $\frac{A}{B}$ thay vì $-\frac{A}{B}$.
- Chia cho $B$ khi $B=0$ (đường thẳng thẳng đứng: $x=\text{hằng số}$).
- Quên kiểm tra điểm đã cho có thoả mãn phương trình cuối cùng không.
:::

## Thuật ngữ

:::terms
- vectơ chỉ phương | direction vector
- vectơ pháp tuyến | normal vector
- phương trình tham số | parametric equation
- phương trình tổng quát | general equation
- hệ số góc | slope
- giao điểm với trục | intercept
- song song | parallel
- đường trung trực | perpendicular bisector
:::

## Tóm tắt

- Đường thẳng được xác định bởi một điểm và vectơ chỉ phương $\vec{u}$ hoặc vectơ pháp tuyến $\vec{n}$.
- Tham số: $x=x_0+at$, $y=y_0+bt$. Tổng quát: $A(x-x_0)+B(y-y_0)=0$ với $\vec{n}=(A; B)$.
- Dạng hệ số góc $y=kx+m$ với $k=-\frac{A}{B}$ khi $Ax+By+C=0$ và $B\neq0$.
- Hai đường thẳng song song có chung $\vec{n}$; vuông góc thì đổi $(A; B)\to(B; -A)$.

## Luyện tập

:::practice
1. Viết phương trình đường thẳng đi qua $A(2; 1)$ với vectơ pháp tuyến $\vec{n}=(1; -3)$.
2. Viết phương trình tham số và tổng quát của đường thẳng đi qua $A(1; 1)$ với vectơ chỉ phương $\vec{u}=(2; 1)$.
3. Viết phương trình đường thẳng đi qua $A(-1; 2)$ và $B(3; -2)$.
4. Tìm hệ số góc và hai giao điểm với các trục của $4x-2y+8=0$.
5. Chuyển $\begin{cases}x=2-t\\ y=3+2t\end{cases}$ về phương trình tổng quát.
6. Viết phương trình đường thẳng đi qua $P(1; -2)$ và song song với $2x-y+3=0$.
7. Viết phương trình đường thẳng đi qua $P(1; -2)$ và vuông góc với $2x-y+3=0$.
8. Viết dạng tổng quát của đường thẳng đi qua $(4; 0)$ và $(0; -3)$.
9. Thử thách. Viết phương trình đường trung trực của $A(1; 1)$ và $B(5; 3)$ và kiểm tra nó đi qua trung điểm.
10. Thử thách. Đường thẳng đi qua $M(2; 3)$ cắt các trục tại $A(a; 0)$ và $B(0; b)$ sao cho $M$ là trung điểm của $AB$. Viết phương trình của nó.
:::

:::solution Xem lời giải
1. $(x-2)-3(y-1)=0$, suy ra $x-3y+1=0$.
2. $\begin{cases}x=1+2t\\ y=1+t\end{cases}$. $\vec{n}=(1; -2)$: $(x-1)-2(y-1)=0$, suy ra $x-2y+1=0$.
3. $\overrightarrow{AB}=(4; -4)$, nên $\vec{u}=(1; -1)$ và $\vec{n}=(1; 1)$. $(x+1)+(y-2)=0$, suy ra $x+y-1=0$.
4. $y=2x+4$: hệ số góc $2$. Với $y=0$ ta có $x=-2$; với $x=0$ ta có $y=4$. Các giao điểm là $(-2; 0)$ và $(0; 4)$.
5. $\vec{u}=(-1; 2)$, $\vec{n}=(2; 1)$, điểm $(2; 3)$: $2(x-2)+(y-3)=0$, suy ra $2x+y-7=0$.
6. $2x-y+C=0$ đi qua $P$: $2+2+C=0$, nên $C=-4$. Đường thẳng: $2x-y-4=0$.
7. $\vec{n}'=(1; 2)$: $(x-1)+2(y+2)=0$, suy ra $x+2y+3=0$. Kiểm tra: $1-4+3=0$ ✓.
8. $\frac{x}{4}+\frac{y}{-3}=1$; nhân hai vế với $12$: $3x-4y=12$, suy ra $3x-4y-12=0$.
9. $M(3; 2)$, $\vec{n}=\overrightarrow{AB}=(4; 2)$: $4(x-3)+2(y-2)=0$, suy ra $2x+y-8=0$. Kiểm tra $M$: $6+2-8=0$ ✓.
10. $M$ là trung điểm: $\frac{a+0}{2}=2$ và $\frac{0+b}{2}=3$, nên $a=4$, $b=6$. Đường thẳng là $\frac{x}{4}+\frac{y}{6}=1$, tức $3x+2y-12=0$.
:::
