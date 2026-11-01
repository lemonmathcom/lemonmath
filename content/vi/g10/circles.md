---
title: Đường tròn trong mặt phẳng toạ độ
description: Viết phương trình đường tròn từ tâm và bán kính, nhận biết đường tròn từ phương trình khai triển và tìm tiếp tuyến.
minutes: 16
---

:::goals
- Viết phương trình đường tròn từ tâm và bán kính, và ngược lại.
- Xác định $x^2+y^2-2ax-2by+c=0$ có phải là đường tròn hay không.
- Tìm đường tròn khi biết đường kính hoặc ba điểm.
- Viết tiếp tuyến tại một điểm và dùng điều kiện khoảng cách để xét tiếp xúc.
:::

Đường tròn gồm mọi điểm cách tâm một khoảng bằng nhau. Nếu bạn biết công thức khoảng cách thì bạn đã biết phương trình đường tròn: đó chính là công thức khoảng cách được viết thành một quy tắc. Bài này biến hình ảnh "mọi điểm cách $I$ một khoảng $R$" thành đại số.

## Phương trình đường tròn

:::definition Phương trình đường tròn
Đường tròn tâm $I(a; b)$ bán kính $R>0$ là tập hợp các điểm $M(x; y)$ thoả mãn $IM=R$:
$$(x-a)^2+(y-b)^2=R^2.$$
:::

Khai triển ta được **dạng tổng quát** $x^2+y^2-2ax-2by+c=0$ với $c=a^2+b^2-R^2$. Ngược lại, một phương trình dạng này là đường tròn khi và chỉ khi $R^2=a^2+b^2-c>0$; khi đó tâm là $(a; b)$ và bán kính là $R=\sqrt{a^2+b^2-c}$.

:::example Từ tâm và bán kính đến phương trình
Viết phương trình đường tròn tâm $I(1; -2)$ bán kính $3$.

**Lời giải.** $(x-1)^2+(y+2)^2=9$. Khai triển: $x^2+y^2-2x+4y+1+4-9=0$, tức $x^2+y^2-2x+4y-4=0$.
:::

:::example Từ phương trình đến tâm và bán kính
$x^2+y^2-6x+4y-12=0$ có phải là đường tròn không? Còn $x^2+y^2+2x+2y+5=0$?

**Lời giải.**
- Phương trình thứ nhất: $-2a=-6$ cho $a=3$ và $-2b=4$ cho $b=-2$, $c=-12$. $R^2=9+4+12=25>0$: đó là đường tròn tâm $(3; -2)$ bán kính $5$.
- Phương trình thứ hai: $a=-1$, $b=-1$, $c=5$. $R^2=1+1-5=-3<0$: không phải đường tròn (không có điểm nào thoả mãn).
:::

## Tìm đường tròn

:::example Đường tròn có đường kính cho trước
Viết phương trình đường tròn đường kính $AB$ với $A(1; 2)$ và $B(5; 6)$.

**Lời giải.** Tâm là trung điểm $I(3; 4)$. Đường kính $AB=\sqrt{16+16}=4\sqrt2$, nên $R=2\sqrt2$ và $R^2=8$. Đường tròn: $(x-3)^2+(y-4)^2=8$.
:::

:::example Đường tròn đi qua ba điểm
Viết phương trình đường tròn đi qua $O(0; 0)$, $A(4; 0)$ và $B(0; 2)$.

**Lời giải.** Dùng $x^2+y^2-2ax-2by+c=0$.
- $O$: $c=0$.
- $A$: $16-8a=0$, nên $a=2$.
- $B$: $4-4b=0$, nên $b=1$.

Đường tròn: $(x-2)^2+(y-1)^2=5$ (thật vậy $R^2=4+1-0=5$).
:::

## Tiếp tuyến

Đường thẳng **tiếp xúc** với đường tròn khi nó chỉ có đúng một điểm chung với đường tròn, và khi đó nó vuông góc với bán kính tại điểm đó. Vậy tiếp tuyến tại $M_0$ nhận $\overrightarrow{IM_0}$ làm vectơ pháp tuyến.

:::graph Tiếp tuyến của đường tròn tại $M$
alt: Đường tròn tâm I(1; 1) và một đường thẳng tiếp xúc với nó tại điểm M(4; 5)
x: -5..8
y: -5..8
plot: 1 + sqrt(25 - (x-1)^2) ; -4..6
plot: 1 - sqrt(25 - (x-1)^2) ; -4..6
plot: (32 - 3x)/4 ; 0..8
point: (1, 1) "I" below-left
point: (4, 5) "M" above-right
:::

:::example Tiếp tuyến tại một điểm
Viết phương trình tiếp tuyến của $(x-1)^2+(y-1)^2=25$ tại $M(4; 5)$.

**Lời giải.** Kiểm tra: $3^2+4^2=25$ ✓ nên $M$ thuộc đường tròn. $\overrightarrow{IM}=(3; 4)$ là vectơ pháp tuyến, nên $3(x-4)+4(y-5)=0$, tức $3x+4y-32=0$.
:::

Đường thẳng tiếp xúc với đường tròn $(I, R)$ khi và chỉ khi khoảng cách từ tâm đến nó bằng $R$: $d(I, \Delta)=R$. Nếu $d<R$ thì nó cắt đường tròn tại hai điểm; nếu $d>R$ thì không có điểm chung.

:::example Tiếp xúc bằng khoảng cách
Với giá trị nào của $m$ thì $3x-4y+m=0$ tiếp xúc với $(x-2)^2+(y+1)^2=4$?

**Lời giải.** $I(2; -1)$, $R=2$: $\dfrac{|6+4+m|}{5}=2$, suy ra $|m+10|=10$, cho $m=0$ hoặc $m=-20$.
:::

:::example Vị trí của một điểm
Điểm $P(5; 1)$ nằm ở đâu so với $(x-1)^2+(y-2)^2=25$?

**Lời giải.** $IP^2=16+1=17<25$ nên $P$ nằm trong đường tròn. (Nếu $IP^2=R^2$ thì điểm nằm trên đường tròn; nếu lớn hơn thì nằm ngoài.)
:::

:::warning Những sai lầm thường gặp
- Sai dấu: tâm của $(x+2)^2+(y-3)^2=16$ là $(-2; 3)$ chứ không phải $(2; -3)$.
- Viết $R$ thay vì $R^2$ ở vế phải.
- Quên kiểm tra $R^2>0$ với phương trình dạng khai triển.
- Lấy sai vectơ pháp tuyến của tiếp tuyến: nó là $\overrightarrow{IM_0}$ (chính là bán kính), không phải vectơ vuông góc với bán kính.
:::

## Thuật ngữ

:::terms
- đường tròn | circle
- tâm | centre
- bán kính | radius
- đường kính | diameter
- tiếp tuyến | tangent line
- tiếp điểm | point of tangency
- phương trình tổng quát của đường tròn | general equation of a circle
- nằm trong / nằm ngoài | inside / outside
:::

## Tóm tắt

- Đường tròn $(I(a; b), R)$: $(x-a)^2+(y-b)^2=R^2$.
- Dạng tổng quát $x^2+y^2-2ax-2by+c=0$ là đường tròn khi và chỉ khi $R^2=a^2+b^2-c>0$.
- Tiếp tuyến tại $M_0$ nhận $\overrightarrow{IM_0}$ làm vectơ pháp tuyến. Đường thẳng tiếp xúc khi và chỉ khi $d(I, \Delta)=R$.
- Điểm $P$ nằm trong, trên hay ngoài đường tròn tuỳ theo $IP^2<R^2$, $=R^2$, $>R^2$.

## Luyện tập

:::practice
1. Viết phương trình đường tròn tâm $(-2; 3)$ bán kính $4$.
2. Tìm tâm và bán kính của $x^2+y^2-4x+6y-3=0$.
3. $x^2+y^2-2x+4y+6=0$ có phải là đường tròn không?
4. Viết phương trình đường tròn tâm $I(2; -1)$ đi qua $A(5; 3)$.
5. Viết phương trình đường tròn đường kính $AB$ với $A(-1; 3)$ và $B(3; -1)$.
6. Viết phương trình đường tròn đi qua $O(0; 0)$, $A(6; 0)$ và $B(0; 8)$.
7. Viết phương trình tiếp tuyến của $x^2+y^2=25$ tại $M(3; 4)$.
8. Với giá trị nào của $m$ thì $3x+4y+m=0$ tiếp xúc với $x^2+y^2=9$?
9. Thử thách. Tìm các điểm chung của $x^2+y^2-4x=0$ và đường thẳng $x+y-4=0$.
10. Thử thách. Viết phương trình các tiếp tuyến của $x^2+y^2=4$ đi qua $P(4; 0)$.
:::

:::solution Xem lời giải
1. $(x+2)^2+(y-3)^2=16$.
2. $a=2$, $b=-3$, $c=-3$. $R^2=4+9+3=16$, nên tâm là $(2; -3)$ và $R=4$.
3. $a=1$, $b=-2$, $c=6$: $R^2=1+4-6=-1<0$. Không phải đường tròn.
4. $R^2=IA^2=9+16=25$. $(x-2)^2+(y+1)^2=25$.
5. Tâm là $(1; 1)$ và $AB^2=16+16=32$, nên $R^2=\frac{32}{4}=8$. $(x-1)^2+(y-1)^2=8$.
6. $c=0$; $A$: $36-12a=0$, nên $a=3$; $B$: $64-16b=0$, nên $b=4$. $R^2=9+16=25$. $(x-3)^2+(y-4)^2=25$.
7. $\overrightarrow{OM}=(3; 4)$: $3(x-3)+4(y-4)=0$, suy ra $3x+4y-25=0$.
8. $\frac{|m|}{5}=3$, nên $m=\pm15$.
9. Thế $y=4-x$: $x^2+(4-x)^2-4x=0$, suy ra $2x^2-12x+16=0$, $x^2-6x+8=0$, $x=2$ hoặc $x=4$. Các điểm là $(2; 2)$ và $(4; 0)$.
10. Đường thẳng đi qua $P$: $kx-y-4k=0$. Điều kiện tiếp xúc: $\frac{|4k|}{\sqrt{k^2+1}}=2$, suy ra $16k^2=4k^2+4$, $k^2=\frac13$, $k=\pm\frac1{\sqrt3}$. Các tiếp tuyến là $x-\sqrt3\,y-4=0$ và $x+\sqrt3\,y-4=0$.
:::
