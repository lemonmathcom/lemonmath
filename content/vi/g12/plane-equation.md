---
title: Phương trình mặt phẳng
description: Vectơ pháp tuyến, phương trình tổng quát của mặt phẳng, mặt phẳng qua ba điểm, hai mặt phẳng song song, vuông góc và khoảng cách từ điểm đến mặt phẳng.
minutes: 26
---

:::goals
- Nhận biết vectơ pháp tuyến và cặp vectơ chỉ phương của một mặt phẳng.
- Viết phương trình mặt phẳng qua một điểm khi biết vectơ pháp tuyến, qua ba điểm, theo đoạn chắn.
- Nhận biết các mặt phẳng đặc biệt; xét hai mặt phẳng song song, vuông góc.
- Tính khoảng cách từ một điểm đến một mặt phẳng.
:::

Một tấm bạt che nắng hình tam giác được căng giữa ba điểm: hai cọc trên mặt đất và một móc trên cột ở góc sân. Đặt chân cột ở gốc toạ độ, đơn vị mét: ba góc tấm bạt là $A(3; 0; 0)$, $B(0; 6; 0)$ và $C(0; 0; 3)$. Một chiếc drone quay phim đang đứng yên tại $M(3; 6; 3)$. Drone cách mặt phẳng tấm bạt bao xa?

Để trả lời, ta cần một phương trình mô tả mọi điểm của mặt phẳng $(ABC)$. Bài này cho ta phương trình đó và một công thức khoảng cách chỉ gồm vài phép tính.

:::diagram Tấm bạt che nắng $ABC$
alt: Hệ trục Oxyz; tấm bạt hình tam giác ABC có A trên trục Ox, B trên trục Oy, C trên trục Oz
point O 0,0 above-left
point X -2.4,-2.4 left "x"
point Y 5.2,0 right "y"
point Z 0,3.6 left "z"
point A -1.5,-1.5 left
point B 4.2,0 below
point C 0,2.4 left
arrow O X
arrow O Y
arrow O Z
polygon A B C
:::

## Vectơ pháp tuyến của mặt phẳng

### Khám phá: một vectơ vuông góc với tấm bạt

Ta có $\overrightarrow{AB}=(-3; 6; 0)$ và $\overrightarrow{AC}=(-3; 0; 3)$. Thử vectơ $\vec{n}=(2; 1; 2)$:
$$\vec{n}\cdot\overrightarrow{AB}=-6+6+0=0,\qquad \vec{n}\cdot\overrightarrow{AC}=-6+0+6=0.$$
Vậy $\vec{n}$ vuông góc với hai cạnh không cùng phương của tấm bạt, nên vuông góc với cả tấm bạt. Một điểm $P(x; y; z)$ nằm trên mặt phẳng $(ABC)$ khi và chỉ khi $\overrightarrow{AP}\perp\vec{n}$, tức là
$$2(x-3)+1\cdot(y-0)+2(z-0)=0\iff 2x+y+2z-6=0.$$

:::definition Vectơ pháp tuyến, cặp vectơ chỉ phương
- Vectơ $\vec{n}\neq\vec{0}$ là một **vectơ pháp tuyến** của mặt phẳng $(P)$ nếu giá của $\vec{n}$ vuông góc với $(P)$.
- Hai vectơ $\vec{u}$, $\vec{v}$ **không cùng phương** là một **cặp vectơ chỉ phương** của $(P)$ nếu giá của chúng song song hoặc nằm trong $(P)$.
- Nếu $\vec{n}$ là vectơ pháp tuyến thì $k\vec{n}$ ($k\neq0$) cũng là vectơ pháp tuyến.
:::

Khi chỉ biết một cặp vectơ chỉ phương, ta cần một cách tìm ngay một vectơ vuông góc với cả hai.

:::theorem Tìm vectơ pháp tuyến từ cặp vectơ chỉ phương
Nếu $\vec{u}=(a; b; c)$ và $\vec{v}=(a'; b'; c')$ là một cặp vectơ chỉ phương của $(P)$ thì
$$\vec{n}=[\vec{u}, \vec{v}]=(bc'-b'c;\ ca'-c'a;\ ab'-a'b)$$
là một vectơ pháp tuyến của $(P)$. Vectơ này gọi là **tích có hướng** của $\vec{u}$ và $\vec{v}$.
:::

**Vì sao đúng?** Nhân vô hướng với $\vec{u}$: $a(bc'-b'c)+b(ca'-c'a)+c(ab'-a'b)=0$, vì các số hạng triệt tiêu từng cặp. Tương tự $\vec{n}\cdot\vec{v}=0$. Vì $\vec{u}$, $\vec{v}$ không cùng phương nên $\vec{n}\neq\vec{0}$.

**Cách nhớ.** Viết toạ độ $\vec{u}$ trên, $\vec{v}$ dưới. Muốn toạ độ thứ nhất, che cột thứ nhất và tính định thức $2\times2$ còn lại; toạ độ thứ hai che cột thứ hai rồi lấy *cột 3 nhân chéo với cột 1*; toạ độ thứ ba che cột thứ ba.

## Phương trình tổng quát của mặt phẳng

:::theorem Phương trình mặt phẳng
Mặt phẳng đi qua $M_0(x_0; y_0; z_0)$ và có vectơ pháp tuyến $\vec{n}=(A; B; C)$ có phương trình
$$A(x-x_0)+B(y-y_0)+C(z-z_0)=0.$$
Ngược lại, mỗi phương trình $Ax+By+Cz+D=0$ với $A^2+B^2+C^2>0$ là phương trình của một mặt phẳng nhận $\vec{n}=(A; B; C)$ làm vectơ pháp tuyến. Phương trình này gọi là **phương trình tổng quát** của mặt phẳng.
:::

**Vì sao đúng?** Điểm $M(x; y; z)$ thuộc mặt phẳng khi và chỉ khi $\overrightarrow{M_0M}=(x-x_0; y-y_0; z-z_0)$ vuông góc với $\vec{n}$, tức tích vô hướng của chúng bằng $0$. Khai triển ta được dạng $Ax+By+Cz+D=0$ với $D=-(Ax_0+By_0+Cz_0)$.

:::example Biết một điểm và vectơ pháp tuyến
Viết phương trình mặt phẳng $(P)$ đi qua $M(1; -2; 3)$ và có vectơ pháp tuyến $\vec{n}=(2; -1; 4)$.

**Lời giải.** Thay toạ độ điểm và vectơ pháp tuyến vào công thức. Chú ý $y-(-2)=y+2$:

$$2(x-1)-(y+2)+4(z-3)=0\iff 2x-y+4z-16=0.$$

Vậy $(P): 2x-y+4z-16=0$.

**Kiểm tra.** Thay $M$: $2+2+12-16=0$.
:::

Khi đề cho ba điểm, ta tự tạo cặp vectơ chỉ phương từ ba điểm đó.

:::example Mặt phẳng qua ba điểm
Viết phương trình mặt phẳng đi qua $A(1; 2; 0)$, $B(2; 0; 1)$, $C(0; 1; 3)$.

**Lời giải.** Hai vectơ $\overrightarrow{AB}$, $\overrightarrow{AC}$ là cặp vectơ chỉ phương; tích có hướng của chúng là vectơ pháp tuyến:

$$\overrightarrow{AB}=(1; -2; 1),\qquad \overrightarrow{AC}=(-1; -1; 3),$$

$$[\overrightarrow{AB}, \overrightarrow{AC}]=\big((-2)\cdot3-(-1)\cdot1;\ 1\cdot(-1)-3\cdot1;\ 1\cdot(-1)-(-1)\cdot(-2)\big)=(-5; -4; -3).$$

Ta chọn $\vec{n}=(5; 4; 3)$ cho gọn rồi dùng điểm $A$:

$$5(x-1)+4(y-2)+3z=0\iff 5x+4y+3z-13=0.$$

Vậy $(ABC): 5x+4y+3z-13=0$.

**Kiểm tra.** $B$: $10+0+3-13=0$; $C$: $0+4+9-13=0$.
:::

### Các mặt phẳng đặc biệt

Xét $(P): Ax+By+Cz+D=0$.
- $D=0$: $(P)$ đi qua gốc $O$.
- $A=0$: $\vec{n}=(0; B; C)$ vuông góc với $\vec{i}$, nên $(P)$ song song với hoặc chứa trục $Ox$. Tương tự với $B=0$ (trục $Oy$) và $C=0$ (trục $Oz$).
- $A=B=0$: $(P): z=z_0$ song song với hoặc trùng mặt phẳng $(Oxy)$. Ba mặt phẳng toạ độ là $(Oxy): z=0$, $(Oyz): x=0$, $(Ozx): y=0$.
- Mặt phẳng cắt ba trục tại $(a; 0; 0)$, $(0; b; 0)$, $(0; 0; c)$ với $abc\neq0$ có **phương trình theo đoạn chắn**
$$\frac{x}{a}+\frac{y}{b}+\frac{z}{c}=1.$$

Với tấm bạt, $a=3$, $b=6$, $c=3$, nên $\dfrac{x}{3}+\dfrac{y}{6}+\dfrac{z}{3}=1$; nhân hai vế với $6$ ta lại được $2x+y+2z-6=0$.

:::example Mặt phẳng song song với $(Oxy)$, mặt phẳng chứa $Ox$
Cho $M(2; -1; 3)$. Viết phương trình mặt phẳng đi qua $M$ và a) song song với $(Oxy)$; b) chứa trục $Ox$.

**Lời giải.** a) Mặt phẳng song song với $(Oxy)$ có dạng $z=z_0$. Nó đi qua $M$ nên $z=3$.

b) Mặt phẳng chứa $Ox$ đi qua $O$ và có $A=0$, nên có dạng $By+Cz=0$. Thay $M$:

$$B\cdot(-1)+C\cdot3=0\iff B=3C.$$

Chọn $C=1$, $B=3$. Vậy hai mặt phẳng cần tìm là $z=3$ và $3y+z=0$.
:::

## Hai mặt phẳng song song, vuông góc

Hai mặt phẳng song song có vectơ pháp tuyến cùng phương. Hai mặt phẳng vuông góc thì hai vectơ pháp tuyến của chúng vuông góc.

:::theorem Vị trí của hai mặt phẳng
Cho $(P): Ax+By+Cz+D=0$ và $(P'): A'x+B'y+C'z+D'=0$ với vectơ pháp tuyến $\vec{n}$, $\vec{n'}$.
- $(P)\parallel(P')$ khi và chỉ khi $\vec{n'}=k\vec{n}$ và $D'\neq kD$; nếu thêm $D'=kD$ thì hai mặt phẳng trùng nhau.
- $(P)\perp(P')$ khi và chỉ khi $\vec{n}\cdot\vec{n'}=AA'+BB'+CC'=0$.
:::

:::example Mặt phẳng song song và mặt phẳng vuông góc
a) Viết phương trình mặt phẳng đi qua $M(1; 2; 3)$ và song song với $(Q): 2x-3y+z+5=0$.

b) Viết phương trình mặt phẳng $(R)$ đi qua $A(1; 0; 1)$, $B(2; 1; 0)$ và vuông góc với $(S): x+y+z-3=0$.

**Lời giải.** a) Mặt phẳng song song với $(Q)$ có dạng $2x-3y+z+D=0$. Thay $M$:

$$2-6+3+D=0\iff D=1.$$

Vì $D=1\neq5$ nên mặt phẳng $2x-3y+z+1=0$ không trùng $(Q)$.

b) $(R)$ chứa đường $AB$ và chứa phương của $\vec{n}_S$ (vì vuông góc với $(S)$), nên $\overrightarrow{AB}=(1; 1; -1)$ và $\vec{n}_S=(1; 1; 1)$ là cặp vectơ chỉ phương:

$$[\overrightarrow{AB}, \vec{n}_S]=\big(1\cdot1-1\cdot(-1);\ (-1)\cdot1-1\cdot1;\ 1\cdot1-1\cdot1\big)=(2; -2; 0).$$

Chọn $\vec{n}=(1; -1; 0)$ và điểm $A$: $(x-1)-y=0$.

Vậy a) $2x-3y+z+1=0$; b) $(R): x-y-1=0$.

**Kiểm tra.** $B$: $2-1-1=0$; $\vec{n}\cdot\vec{n}_S=1-1+0=0$.
:::

## Khoảng cách từ một điểm đến một mặt phẳng

:::theorem Công thức khoảng cách
Khoảng cách từ $M_0(x_0; y_0; z_0)$ đến $(P): Ax+By+Cz+D=0$ là
$$d(M_0, (P))=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}.$$
:::

**Vì sao đúng?** Gọi $H$ là hình chiếu của $M_0$ trên $(P)$. Khi đó $\overrightarrow{HM_0}=t\vec{n}$ với một số $t$, và $M_0H=|t|\cdot|\vec{n}|$. Vì $H$ thuộc $(P)$, thay $H=M_0-t\vec{n}$ vào phương trình ta được $Ax_0+By_0+Cz_0+D=t(A^2+B^2+C^2)$. Rút $t$ rồi nhân với $|\vec{n}|=\sqrt{A^2+B^2+C^2}$ ta có công thức.

:::example Drone và tấm bạt
Tính khoảng cách từ drone $M(3; 6; 3)$ đến mặt phẳng tấm bạt $(ABC): 2x+y+2z-6=0$ (đơn vị: mét).

**Lời giải.** Thay toạ độ $M$ vào vế trái rồi chia cho độ dài vectơ pháp tuyến:

$$d(M, (ABC))=\frac{|2\cdot3+6+2\cdot3-6|}{\sqrt{2^2+1^2+2^2}}=\frac{12}{3}=4.$$

Vậy drone cách mặt phẳng tấm bạt $4$ m.
:::

Ví dụ cuối nhiều bước hơn, nên ta làm theo bốn bước.

:::diagram Hình lập phương và mặt phẳng $(A'BD)$
alt: Hình lập phương ABCD.A'B'C'D' vẽ phối cảnh, tam giác A'BD được tô, các cạnh khuất vẽ nét đứt
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,3 left
point B' 3,3 above
point C' 4.2,4.4 above-right
point D' 1.2,4.4 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
polygon A' B D
:::

:::example Khoảng cách trong hình lập phương
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $2$. Tính khoảng cách từ $A$ đến mặt phẳng $(A'BD)$ (làm tròn đến hàng phần trăm).

**Lời giải.**

*Hiểu đề.* Cần khoảng cách từ một đỉnh đến một mặt phẳng đi qua ba đỉnh khác.

*Tìm cách giải.* Đặt $A$ ở gốc, $B$ trên $Ox$, $D$ trên $Oy$, $A'$ trên $Oz$. Ba điểm $B$, $D$, $A'$ nằm trên ba trục, nên dùng phương trình theo đoạn chắn.

*Giải.* $B(2; 0; 0)$, $D(0; 2; 0)$, $A'(0; 0; 2)$, nên

$$(A'BD): \frac{x}{2}+\frac{y}{2}+\frac{z}{2}=1\iff x+y+z-2=0,\qquad d(A, (A'BD))=\frac{|0+0+0-2|}{\sqrt{3}}=\frac{2}{\sqrt3}\approx1{,}15.$$

*Nhìn lại.* Chọn hệ trục khéo làm mặt phẳng cắt ba trục đúng tại ba đỉnh, nên không cần tính tích có hướng.
:::

:::warning Những sai lầm thường gặp
- **Sai dấu khi thay điểm.** Sai: mặt phẳng qua $M(1; -2; 3)$ với $\vec{n}=(2; -1; 4)$ viết thành $2(x-1)-(y-2)+4(z-3)=0$. Vì sao sai: $y-y_0=y-(-2)=y+2$. Đúng: $2(x-1)-(y+2)+4(z-3)=0$.
- **Quên $D$ hoặc quên căn trong công thức khoảng cách.** Sai: $d(M, (ABC))=\dfrac{|6+6+6|}{3}=6$ hoặc $\dfrac{12}{9}$. Vì sao sai: tử số là cả vế trái $Ax_0+By_0+Cz_0+D$, mẫu số là $\sqrt{A^2+B^2+C^2}$. Đúng: $\dfrac{12}{3}=4$.
- **Khoảng cách giữa hai mặt phẳng song song khi hệ số chưa khớp.** Với $(P): 2x-y+2z+1=0$ và $(Q): 4x-2y+4z-10=0$. Sai: $\dfrac{|1-(-10)|}{3}=\dfrac{11}{3}$. Vì sao sai: hai vectơ pháp tuyến $(2; -1; 2)$ và $(4; -2; 4)$ chưa bằng nhau. Đúng: lấy điểm $E(0; 0; 2{,}5)$ thuộc $(Q)$, rồi $d(E, (P))=\dfrac{|5+1|}{3}=2$.
- **Nhầm mặt phẳng chứa trục với mặt phẳng toạ độ.** Sai: mặt phẳng chứa $Ox$ là $x=0$. Vì sao sai: $x=0$ là mặt phẳng $(Oyz)$, vuông góc với $Ox$. Đúng: mặt phẳng chứa $Ox$ có dạng $By+Cz=0$.
:::

## Thuật ngữ

:::terms
- mặt phẳng | plane
- vectơ pháp tuyến | normal vector
- cặp vectơ chỉ phương | pair of direction vectors
- tích có hướng | cross product (vector product)
- phương trình tổng quát của mặt phẳng | Cartesian (general) equation of a plane
- phương trình mặt phẳng theo đoạn chắn | intercept form of a plane
- mặt phẳng toạ độ | coordinate plane
- hai mặt phẳng song song | parallel planes
- hai mặt phẳng vuông góc | perpendicular planes
- khoảng cách từ điểm đến mặt phẳng | distance from a point to a plane
:::

## Tóm tắt

- Mặt phẳng qua $M_0(x_0; y_0; z_0)$, vectơ pháp tuyến $\vec{n}=(A; B; C)$: $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.
- $Ax+By+Cz+D=0$ có vectơ pháp tuyến $(A; B; C)$.
- Cặp vectơ chỉ phương $\vec{u}=(a; b; c)$, $\vec{v}=(a'; b'; c')$ cho $\vec{n}=[\vec{u}, \vec{v}]=(bc'-b'c;\ ca'-c'a;\ ab'-a'b)$.
- Theo đoạn chắn: $\dfrac{x}{a}+\dfrac{y}{b}+\dfrac{z}{c}=1$; $(Oxy): z=0$, $(Oyz): x=0$, $(Ozx): y=0$.
- Song song: $\vec{n'}=k\vec{n}$, $D'\neq kD$. Vuông góc: $\vec{n}\cdot\vec{n'}=0$.
- $d(M_0, (P))=\dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Viết phương trình mặt phẳng đi qua $M(2; 1; -1)$ và có vectơ pháp tuyến $\vec{n}=(1; -3; 2)$.

::hint
**Kiến thức:** $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.

**Gợi ý các bước:**
1. Thay $x_0=2$, $y_0=1$, $z_0=-1$ và $A=1$, $B=-3$, $C=2$.
2. Khai triển và rút gọn.

::solution
$$(x-2)-3(y-1)+2(z+1)=0\iff x-3y+2z+3=0.$$
Kiểm tra $M$: $2-3-2+3=0$.

**Đáp số.** $x-3y+2z+3=0$.
:::

:::exercise
Cho $A(1; 2; 3)$ và $B(3; 0; 5)$. Viết phương trình mặt phẳng trung trực của đoạn $AB$ (mặt phẳng vuông góc với $AB$ tại trung điểm của nó).

::hint
**Kiến thức:** mặt phẳng trung trực đi qua trung điểm $I$ của $AB$ và nhận $\overrightarrow{AB}$ làm vectơ pháp tuyến.

**Gợi ý các bước:**
1. Tìm $I$ và $\overrightarrow{AB}$.
2. Rút gọn vectơ pháp tuyến rồi viết phương trình.

::solution
$I(2; 1; 4)$, $\overrightarrow{AB}=(2; -2; 2)=2(1; -1; 1)$. Chọn $\vec{n}=(1; -1; 1)$:
$$(x-2)-(y-1)+(z-4)=0\iff x-y+z-5=0.$$

**Đáp số.** $x-y+z-5=0$.
:::

:::exercise
Viết phương trình mặt phẳng đi qua $A(2; 1; -1)$, $B(3; 0; 1)$, $C(1; 3; 0)$.

::hint
**Kiến thức:** $\vec{n}=[\overrightarrow{AB}, \overrightarrow{AC}]$ là một vectơ pháp tuyến của $(ABC)$.

**Gợi ý các bước:**
1. Tính $\overrightarrow{AB}$, $\overrightarrow{AC}$.
2. Tính tích có hướng, rồi viết phương trình qua $A$.

::solution
$\overrightarrow{AB}=(1; -1; 2)$, $\overrightarrow{AC}=(-1; 2; 1)$.
$$[\overrightarrow{AB}, \overrightarrow{AC}]=\big((-1)\cdot1-2\cdot2;\ 2\cdot(-1)-1\cdot1;\ 1\cdot2-(-1)\cdot(-1)\big)=(-5; -3; 1).$$
Chọn $\vec{n}=(5; 3; -1)$: $5(x-2)+3(y-1)-(z+1)=0\iff 5x+3y-z-14=0$.
Kiểm tra $C$: $5+9-0-14=0$.

**Đáp số.** $5x+3y-z-14=0$.
:::

:::exercise
Một mặt phẳng cắt các trục $Ox$, $Oy$, $Oz$ lần lượt tại $(2; 0; 0)$, $(0; -3; 0)$, $(0; 0; 6)$. Viết phương trình tổng quát của nó.

::hint
**Kiến thức:** phương trình theo đoạn chắn $\dfrac{x}{a}+\dfrac{y}{b}+\dfrac{z}{c}=1$.

**Gợi ý các bước:**
1. Thay $a=2$, $b=-3$, $c=6$.
2. Nhân hai vế với $6$ để bỏ mẫu.

::solution
$$\frac{x}{2}+\frac{y}{-3}+\frac{z}{6}=1\iff 3x-2y+z-6=0.$$

**Đáp số.** $3x-2y+z-6=0$.
:::

:::exercise
Cho mặt phẳng $(P): 2x-y+2z-3=0$. Mỗi khẳng định sau đúng hay sai?

a) $\vec{n}=(2; -1; 2)$ là một vectơ pháp tuyến của $(P)$.

b) Điểm $M(1; 2; 1)$ thuộc $(P)$.

c) $(P)$ song song với mặt phẳng $(Q): 4x-2y+4z+1=0$.

d) Khoảng cách từ $O$ đến $(P)$ bằng $3$.

::hint
**Kiến thức:** vectơ pháp tuyến $(A; B; C)$; điều kiện song song $\vec{n'}=k\vec{n}$, $D'\neq kD$; công thức khoảng cách.

**Gợi ý các bước:**
1. Đọc vectơ pháp tuyến và thay toạ độ $M$.
2. So sánh hệ số của $(P)$ và $(Q)$.
3. Tính $d(O, (P))$.

::solution
a) **Đúng.** Các hệ số của $x$, $y$, $z$ là $2$, $-1$, $2$.

b) **Sai.** $2-2+2-3=-1\neq0$.

c) **Đúng.** $(4; -2; 4)=2(2; -1; 2)$ nhưng $1\neq2\cdot(-3)$.

d) **Sai.** $d(O, (P))=\dfrac{|-3|}{\sqrt{4+1+4}}=1$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Một sườn đồi được coi gần đúng là mặt phẳng $(P): x+2y+2z-30=0$ (đơn vị: mét). Một drone khảo sát địa hình đang ở $M(10; 20; 25)$. Tính khoảng cách từ drone đến sườn đồi (đơn vị: mét, làm tròn đến hàng phần mười).

::hint
**Kiến thức:** $d(M, (P))=\dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.

**Gợi ý các bước:**
1. Thay toạ độ $M$ vào vế trái, lấy giá trị tuyệt đối.
2. Chia cho $\sqrt{1+4+4}$.

::solution
$$d=\frac{|10+40+50-30|}{\sqrt{1+4+4}}=\frac{70}{3}\approx23{,}3.$$

**Đáp số.** $23{,}3$.
:::

:::exercise
Chứng minh hai mặt phẳng $(P): 2x-2y+z+4=0$ và $(Q): 2x-2y+z-5=0$ song song và tính khoảng cách giữa chúng.

::hint
**Kiến thức:** khoảng cách giữa hai mặt phẳng song song bằng khoảng cách từ một điểm bất kì của mặt này đến mặt kia.

**Gợi ý các bước:**
1. So sánh vectơ pháp tuyến và hệ số tự do.
2. Lấy một điểm dễ tìm trên $(P)$, ví dụ cho $x=y=0$.

::solution
Hai mặt phẳng có cùng vectơ pháp tuyến $(2; -2; 1)$ và $4\neq-5$, nên $(P)\parallel(Q)$. Điểm $E(0; 0; -4)$ thuộc $(P)$:
$$d((P), (Q))=d(E, (Q))=\frac{|-4-5|}{\sqrt{4+4+1}}=\frac{9}{3}=3.$$

**Đáp số.** $3$.
:::

:::exercise
Viết phương trình mặt phẳng chứa trục $Oz$ và đi qua điểm $A(1; 2; 5)$.

::hint
**Kiến thức:** mặt phẳng chứa $Oz$ đi qua $O$ và có $C=0$, nên có dạng $Ax+By=0$.

**Gợi ý các bước:**
1. Thay $A(1; 2; 5)$ vào $Ax+By=0$.
2. Chọn một cặp số $A$, $B$ thoả mãn.

::solution
$A\cdot1+B\cdot2=0$, chọn $B=-1$, $A=2$. Mặt phẳng là $2x-y=0$.
Kiểm tra: $2\cdot1-2=0$ và mọi điểm $(0; 0; z)$ đều thoả mãn.

**Đáp số.** $2x-y=0$.
:::

:::exercise
(Ôn lại [Biểu thức toạ độ của các phép toán vectơ](lesson:vector-coordinate-operations).) Ở bài trước, với $A(1; 0; 2)$, $B(2; 3; -1)$, $C(0; 4; 1)$, ta tìm được $D(-1; 1; 4)$ để $ABCD$ là hình bình hành. Viết phương trình mặt phẳng $(ABC)$ và kiểm tra rằng $D$ thuộc mặt phẳng đó.

::hint
**Kiến thức:** $\vec{n}=[\overrightarrow{AB}, \overrightarrow{AC}]$; một điểm thuộc mặt phẳng khi toạ độ của nó thoả mãn phương trình.

**Gợi ý các bước:**
1. $\overrightarrow{AB}=(1; 3; -3)$, $\overrightarrow{AC}=(-1; 4; -1)$; tính tích có hướng.
2. Viết phương trình qua $A$, rồi thay $D$.

::solution
$$[\overrightarrow{AB}, \overrightarrow{AC}]=\big(3\cdot(-1)-4\cdot(-3);\ (-3)\cdot(-1)-(-1)\cdot1;\ 1\cdot4-(-1)\cdot3\big)=(9; 4; 7).$$
$(ABC): 9(x-1)+4y+7(z-2)=0\iff 9x+4y+7z-23=0$. Thay $D$: $-9+4+28-23=0$.

**Đáp số.** $9x+4y+7z-23=0$; $D$ thuộc $(ABC)$, đúng như một hình bình hành phải nằm trong một mặt phẳng.
:::

:::exercise Thử thách
Viết phương trình mặt phẳng $(P)$ song song với $(Q): x+2y+2z+1=0$ và cách điểm $A(1; 1; 1)$ một khoảng bằng $2$.

::hint
**Kiến thức:** $(P)$ có dạng $x+2y+2z+D=0$ với $D\neq1$; công thức khoảng cách.

**Gợi ý các bước:**
1. Lập phương trình $\dfrac{|1+2+2+D|}{3}=2$.
2. Giải, rồi loại giá trị làm $(P)$ trùng $(Q)$.

::solution
$$|5+D|=6\iff D=1\ \text{hoặc}\ D=-11.$$
Với $D=1$, $(P)$ trùng $(Q)$, không phải song song, nên loại. Còn lại $D=-11$.
**Kiểm tra.** $d(A, (P))=\dfrac{|5-11|}{3}=2$.

**Đáp số.** $(P): x+2y+2z-11=0$.
:::

## Kiểm tra mini

:::quiz
::mc
Trong không gian $Oxyz$, một vectơ pháp tuyến của mặt phẳng $(P): 3x-z+2=0$ là
A. $(3; -1; 2)$.
B. $(3; 0; -1)$.
C. $(3; -1; 0)$.
D. $(0; 3; -1)$.
::key B
Hệ số của $x$, $y$, $z$ là $3$, $0$, $-1$. Phương án A lấy cả hệ số tự do, phương án C và D đặt sai vị trí của toạ độ bằng $0$.

::mc
Mặt phẳng đi qua $M(1; 2; -1)$ và có vectơ pháp tuyến $\vec{n}=(2; -1; 3)$ có phương trình là
A. $2x-y+3z-3=0$.
B. $2x-y+3z=0$.
C. $2x-y+3z+3=0$.
D. $x+2y-z+3=0$.
::key C
$2(x-1)-(y-2)+3(z+1)=0\iff 2x-y+3z+3=0$. Phương án A sai dấu khi thay toạ độ $M$, phương án B quên hệ số tự do, phương án D đổi vai trò điểm và vectơ.

::mc
Khoảng cách từ $A(1; -2; 3)$ đến mặt phẳng $(P): 2x-y+2z+1=0$ bằng
A. $\dfrac{10}{3}$.
B. $\dfrac{11}{3}$.
C. $\dfrac{11}{9}$.
D. $11$.
::key B
$\dfrac{|2+2+6+1|}{\sqrt{9}}=\dfrac{11}{3}$. Phương án A quên hệ số tự do, C chia cho $A^2+B^2+C^2$ mà không lấy căn, D quên chia.

::mc
Mặt phẳng nào sau đây song song với $(P): x-2y+2z-1=0$?
A. $2x-4y+4z-2=0$.
B. $2x+y=0$.
C. $-x+2y-2z+3=0$.
D. $x+2y+2z-1=0$.
::key C
$(-1; 2; -2)=-1\cdot(1; -2; 2)$ và $3\neq(-1)\cdot(-1)$. Phương án A trùng $(P)$, phương án B vuông góc với $(P)$ vì $2-2+0=0$, phương án D sai dấu một hệ số.

::tf
Trong không gian $Oxyz$, cho $A(2; 0; 0)$, $B(0; 1; 0)$, $C(0; 0; 2)$.
a) Mặt phẳng $(ABC)$ có phương trình $x+2y+z-2=0$.
b) Điểm $M(1; 0; 1)$ thuộc mặt phẳng $(ABC)$.
c) Khoảng cách từ $O$ đến $(ABC)$ bằng $\dfrac13$.
d) Mặt phẳng $(ABC)$ vuông góc với mặt phẳng $(Q): x-y+z+5=0$.
::key Đ Đ S Đ
a) Đúng: $\dfrac{x}{2}+\dfrac{y}{1}+\dfrac{z}{2}=1\iff x+2y+z-2=0$. b) Đúng: $1+0+1-2=0$. c) Sai: $d=\dfrac{2}{\sqrt6}\approx0{,}82$; $\dfrac13$ là kết quả khi quên căn. d) Đúng: $1-2+1=0$.

::sa
Mặt phẳng đi qua $A(1; 2; -1)$ và song song với $(Q): 2x+y-2z+7=0$ có phương trình $2x+y-2z+d=0$. Tìm $d$.
::key -6
Thay $A$: $2+2+2+d=0$, nên $d=-6$ (khác $7$, nên hai mặt phẳng không trùng nhau).

::sa
Tính khoảng cách giữa hai mặt phẳng song song $(P): x+2y-2z+1=0$ và $(Q): 2x+4y-4z-7=0$ (làm tròn đến hàng phần mười).
::key 1,5
Chia phương trình $(Q)$ cho $2$: $x+2y-2z-3{,}5=0$. Khoảng cách là $\dfrac{|1-(-3{,}5)|}{3}=1{,}5$.
:::
