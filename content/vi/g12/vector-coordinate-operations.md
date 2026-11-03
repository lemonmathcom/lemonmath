---
title: Biểu thức toạ độ của các phép toán vectơ
description: Cộng, trừ, nhân vectơ với một số và tính tích vô hướng bằng toạ độ trong Oxyz; tìm độ dài, góc, xét vuông góc, cùng phương và giải bài toán hình học.
minutes: 24
---

:::goals
- Cộng, trừ, nhân vectơ với một số theo toạ độ trong không gian.
- Tính tích vô hướng $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2+z_1z_2$ và độ dài $|\vec{a}|$.
- Tính góc giữa hai vectơ; nhận biết hai vectơ vuông góc, cùng phương.
- Dùng toạ độ để tìm đỉnh hình bình hành, góc của tam giác, chứng minh vuông góc.
:::

Một chiếc lều cắm trại có cột dựng thẳng đứng, đỉnh cột ở độ cao $3$ m. Hai sợi dây néo đi từ đỉnh cột xuống hai cọc trên mặt đất. Đặt chân cột ở gốc toạ độ, đơn vị mét: đỉnh cột là $T(0; 0; 3)$, hai cọc là $P(2; -1; 0)$ và $Q(-1; 2; 0)$. Hai sợi dây hợp với nhau một góc bao nhiêu độ?

Bài trước cho ta toạ độ của điểm và vectơ. Bài này biến mọi phép toán vectơ, kể cả tích vô hướng, thành phép tính trên các con số, nên câu hỏi trên chỉ còn là vài phép nhân và cộng.

## Cộng, trừ và nhân với một số

Vì $\vec{a}=x_1\vec{i}+y_1\vec{j}+z_1\vec{k}$ và $\vec{b}=x_2\vec{i}+y_2\vec{j}+z_2\vec{k}$, ta gom các số hạng cùng vectơ đơn vị:
$$\vec{a}+\vec{b}=(x_1+x_2)\vec{i}+(y_1+y_2)\vec{j}+(z_1+z_2)\vec{k}.$$
Hiệu và tích với một số làm tương tự.

:::theorem Các phép toán theo toạ độ
Cho $\vec{a}=(x_1; y_1; z_1)$, $\vec{b}=(x_2; y_2; z_2)$ và số $k$. Khi đó
- $\vec{a}+\vec{b}=(x_1+x_2;\ y_1+y_2;\ z_1+z_2)$, $\vec{a}-\vec{b}=(x_1-x_2;\ y_1-y_2;\ z_1-z_2)$;
- $k\vec{a}=(kx_1;\ ky_1;\ kz_1)$;
- với $\vec{a}\neq\vec{0}$: $\vec{b}$ cùng phương với $\vec{a}$ khi và chỉ khi có số $k$ sao cho $\vec{b}=k\vec{a}$, tức $x_2=kx_1$, $y_2=ky_1$, $z_2=kz_1$.
:::

:::example Kết hợp các vectơ
Cho $\vec{a}=(1; -2; 3)$ và $\vec{b}=(2; 0; -1)$. Tìm $\vec{a}+\vec{b}$ và $2\vec{a}-3\vec{b}$.

**Lời giải.** Ta làm từng toạ độ. Với biểu thức thứ hai, nhân trước rồi trừ:

$$\vec{a}+\vec{b}=(3; -2; 2),\qquad 2\vec{a}=(2; -4; 6),\quad 3\vec{b}=(6; 0; -3),\quad 2\vec{a}-3\vec{b}=(-4; -4; 9).$$

Vậy $\vec{a}+\vec{b}=(3; -2; 2)$ và $2\vec{a}-3\vec{b}=(-4; -4; 9)$.
:::

Điều kiện cùng phương cho ta cách kiểm tra ba điểm thẳng hàng: $A$, $B$, $C$ thẳng hàng khi và chỉ khi $\overrightarrow{AB}$ và $\overrightarrow{AC}$ cùng phương.

:::example Ba điểm thẳng hàng và hai vectơ cùng phương
a) Chứng minh $A(1; 2; -1)$, $B(3; 1; 1)$, $C(7; -1; 5)$ thẳng hàng.

b) Tìm $x$, $y$ để $\vec{u}=(2; x; -4)$ và $\vec{v}=(-1; 3; y)$ cùng phương.

**Lời giải.** a) Ta so sánh $\overrightarrow{AB}$ và $\overrightarrow{AC}$:

$$\overrightarrow{AB}=(2; -1; 2),\qquad \overrightarrow{AC}=(6; -3; 6)=3\overrightarrow{AB}.$$

Hai vectơ cùng phương và chung điểm $A$, nên $A$, $B$, $C$ thẳng hàng.

b) Toạ độ thứ nhất của $\vec{v}$ khác $0$ và đã biết, nên tìm $k$ từ đó: $\vec{u}=k\vec{v}$ cần $2=k\cdot(-1)$, tức $k=-2$. Hai toạ độ còn lại phải khớp:

$$x=-2\cdot3=-6,\qquad -4=-2y\iff y=2.$$

Vậy $x=-6$, $y=2$, và $\vec{u}=-2\vec{v}$.
:::

## Tích vô hướng theo toạ độ

### Khám phá: nhân phân phối với $\vec{i}$, $\vec{j}$, $\vec{k}$

Ta tính thử $(\vec{i}+2\vec{j})\cdot(3\vec{i}+\vec{k})$ bằng cách nhân phân phối. Có bốn tích:
$$3\,\vec{i}\cdot\vec{i}+\vec{i}\cdot\vec{k}+6\,\vec{j}\cdot\vec{i}+2\,\vec{j}\cdot\vec{k}.$$
Vì $\vec{i}\cdot\vec{i}=1$ còn các tích của hai vectơ đơn vị khác nhau bằng $0$, chỉ còn $3$. Đó đúng bằng $1\cdot3+2\cdot0+0\cdot1$: nhân các toạ độ cùng vị trí rồi cộng lại.

:::theorem Tích vô hướng, độ dài, góc
Cho $\vec{a}=(x_1; y_1; z_1)$ và $\vec{b}=(x_2; y_2; z_2)$. Khi đó
$$\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2+z_1z_2,\qquad |\vec{a}|=\sqrt{x_1^2+y_1^2+z_1^2}.$$
Với $\vec{a}$, $\vec{b}$ khác $\vec{0}$:
$$\cos(\vec{a}, \vec{b})=\frac{x_1x_2+y_1y_2+z_1z_2}{\sqrt{x_1^2+y_1^2+z_1^2}\cdot\sqrt{x_2^2+y_2^2+z_2^2}},\qquad \vec{a}\perp\vec{b}\iff x_1x_2+y_1y_2+z_1z_2=0.$$
:::

**Vì sao đúng?** Nhân phân phối $\vec{a}\cdot\vec{b}$ như phần Khám phá cho chín tích; sáu tích của hai vectơ đơn vị khác nhau bằng $0$, ba tích còn lại là $x_1x_2$, $y_1y_2$, $z_1z_2$. Lấy $\vec{b}=\vec{a}$ ta được $|\vec{a}|^2=\vec{a}\cdot\vec{a}=x_1^2+y_1^2+z_1^2$.

:::example Tích vô hướng, góc và vuông góc
Cho $\vec{a}=(1; 2; 2)$, $\vec{b}=(2; -1; 2)$, $\vec{c}=(2; 1; -2)$. Tính góc $(\vec{a}, \vec{b})$ và chứng minh $\vec{a}\perp\vec{c}$.

**Lời giải.** Tính tích vô hướng và hai độ dài:

$$\vec{a}\cdot\vec{b}=2-2+4=4,\qquad |\vec{a}|=\sqrt{1+4+4}=3,\qquad |\vec{b}|=\sqrt{4+1+4}=3.$$

Thay vào công thức góc:

$$\cos(\vec{a}, \vec{b})=\frac{4}{3\cdot3}=\frac49,\qquad (\vec{a}, \vec{b})\approx63{,}6^\circ.$$

Còn $\vec{a}\cdot\vec{c}=2+2-4=0$, nên $\vec{a}\perp\vec{c}$.

Vậy $(\vec{a}, \vec{b})\approx63{,}6^\circ$ và $\vec{a}\perp\vec{c}$.
:::

Bây giờ ta trả lời câu hỏi chiếc lều. Góc giữa hai sợi dây là góc giữa hai vectơ cùng xuất phát từ đỉnh cột.

:::diagram Cột lều và hai sợi dây néo
alt: Hệ trục Oxyz; cột lều dựng trên trục Oz từ O lên đỉnh T, hai mũi tên đi từ T xuống hai cọc P và Q trên mặt phẳng Oxy, với cung góc tại T
point O 0,0 above-left
point X -2.4,-2.4 left "x"
point Y 4,0 right "y"
point Z 0,4.2 left "z"
point T 0,3 right
point P -2.2,-1.2 below-left
point Q 2.6,0.6 below-right
arrow O X
arrow O Y
arrow O Z
segment O T
arrow T P
arrow T Q
angle P T Q
:::

:::example Góc giữa hai sợi dây néo
Với $T(0; 0; 3)$, $P(2; -1; 0)$, $Q(-1; 2; 0)$ (đơn vị: mét), tính góc $\widehat{PTQ}$ (làm tròn đến hàng phần mười của độ) và độ dài mỗi sợi dây.

**Lời giải.** Góc $\widehat{PTQ}$ là góc giữa $\overrightarrow{TP}$ và $\overrightarrow{TQ}$, hai vectơ chung điểm đầu $T$:

$$\overrightarrow{TP}=(2; -1; -3),\qquad \overrightarrow{TQ}=(-1; 2; -3),\qquad \overrightarrow{TP}\cdot\overrightarrow{TQ}=-2-2+9=5.$$

Hai sợi dây dài bằng nhau:

$$TP=TQ=\sqrt{4+1+9}=\sqrt{14}\approx3{,}74,\qquad \cos\widehat{PTQ}=\frac{5}{\sqrt{14}\cdot\sqrt{14}}=\frac{5}{14}.$$

Vậy hai sợi dây hợp với nhau góc khoảng $69{,}1^\circ$, mỗi sợi dài khoảng $3{,}74$ m.

**Kiểm tra.** $\cos\widehat{PTQ}>0$ nên góc nhọn, phù hợp với hình ảnh hai sợi dây cùng chĩa xuống đất.
:::

## Giải bài toán hình học bằng toạ độ

Khi đã có toạ độ, nhiều câu hỏi hình học trở thành tính toán: hình bình hành $ABCD$ cần $\overrightarrow{AD}=\overrightarrow{BC}$, hai đường thẳng vuông góc cần tích vô hướng bằng $0$.

:::example Đỉnh thứ tư của hình bình hành
Cho $A(1; 0; 2)$, $B(2; 3; -1)$, $C(0; 4; 1)$. Chứng minh $A$, $B$, $C$ không thẳng hàng và tìm $D$ để $ABCD$ là hình bình hành.

**Lời giải.** Trước hết, $\overrightarrow{AB}=(1; 3; -3)$ và $\overrightarrow{AC}=(-1; 4; -1)$. Nếu $\overrightarrow{AC}=k\overrightarrow{AB}$ thì toạ độ đầu cho $k=-1$, nhưng toạ độ thứ hai cần $4=-3$, vô lí. Vậy ba điểm không thẳng hàng.

Gọi $D(x; y; z)$. $ABCD$ là hình bình hành khi $\overrightarrow{AD}=\overrightarrow{BC}$:

$$(x-1;\ y;\ z-2)=(-2; 1; 2)\iff x=-1,\ y=1,\ z=4.$$

Vậy $D(-1; 1; 4)$.

**Kiểm tra.** Trung điểm của $AC$ là $\left(\frac12; 2; \frac32\right)$, trùng trung điểm của $BD$.
:::

Ví dụ cuối nhiều bước hơn, nên ta làm theo bốn bước.

:::example Đường chéo của hình lập phương
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Chứng minh $A'C\perp BD$ và tính góc giữa $\overrightarrow{A'C}$ và $\overrightarrow{AB}$.

**Lời giải.**

*Hiểu đề.* Cần một tích vô hướng bằng $0$ và một góc giữa hai vectơ trong hình lập phương.

*Tìm cách giải.* Đặt hình lập phương vào hệ $Oxyz$ với $A$ ở gốc, $B$ trên $Ox$, $D$ trên $Oy$, $A'$ trên $Oz$, rồi tính bằng toạ độ.

*Giải.* Ta có $A(0; 0; 0)$, $B(1; 0; 0)$, $C(1; 1; 0)$, $D(0; 1; 0)$, $A'(0; 0; 1)$. Khi đó:

$$\overrightarrow{A'C}=(1; 1; -1),\qquad \overrightarrow{BD}=(-1; 1; 0),\qquad \overrightarrow{A'C}\cdot\overrightarrow{BD}=-1+1+0=0.$$

Vậy $A'C\perp BD$. Với $\overrightarrow{AB}=(1; 0; 0)$:

$$\cos(\overrightarrow{A'C}, \overrightarrow{AB})=\frac{1}{\sqrt3\cdot1}=\frac{1}{\sqrt3}\approx0{,}577,\qquad (\overrightarrow{A'C}, \overrightarrow{AB})\approx54{,}7^\circ.$$

*Nhìn lại.* Hệ toạ độ biến một chứng minh hình học không gian thành một phép tính ba dòng. Bước quan trọng nhất là đặt hình vào hệ trục sao cho nhiều toạ độ bằng $0$.
:::

:::warning Những sai lầm thường gặp
- **Coi tích vô hướng là vectơ.** Sai: $(1; 2; 2)\cdot(2; -1; 2)=(2; -2; 4)$. Vì sao sai: tích vô hướng là một số. Đúng: $2-2+4=4$.
- **Quên căn khi tính độ dài.** Sai: $|(1; 2; 2)|=1+4+4=9$. Đúng: $|(1; 2; 2)|=\sqrt9=3$.
- **Xét cùng phương bằng tỉ số khi có toạ độ bằng $0$.** Với $(0; 2; 4)$ và $(0; 1; 2)$, tỉ số $\frac00$ vô nghĩa. Đúng: tìm $k$ từ một toạ độ khác $0$: $(0; 2; 4)=2(0; 1; 2)$, nên hai vectơ cùng phương.
- **Lấy góc giữa hai vectơ không chung điểm đầu.** Sai: dùng $\overrightarrow{PT}$ và $\overrightarrow{TQ}$ để tính $\widehat{PTQ}$. Vì sao sai: $\overrightarrow{PT}=-\overrightarrow{TP}$ đổi dấu cosin, cho góc $180^\circ-69{,}1^\circ$. Đúng: dùng $\overrightarrow{TP}$ và $\overrightarrow{TQ}$.
:::

## Thuật ngữ

:::terms
- biểu thức toạ độ | component form
- tích vô hướng | scalar product (dot product)
- độ dài của vectơ | length of a vector
- góc giữa hai vectơ | angle between two vectors
- hai vectơ vuông góc | perpendicular vectors
- hai vectơ cùng phương | parallel (collinear) vectors
- ba điểm thẳng hàng | collinear points
- hình bình hành | parallelogram
:::

## Tóm tắt

- Cộng, trừ, nhân với một số: làm trên từng toạ độ.
- $\vec{b}$ cùng phương $\vec{a}\neq\vec{0}$ $\iff$ $\vec{b}=k\vec{a}$; $A$, $B$, $C$ thẳng hàng $\iff$ $\overrightarrow{AB}$, $\overrightarrow{AC}$ cùng phương.
- $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2+z_1z_2$ (một số); $|\vec{a}|=\sqrt{x_1^2+y_1^2+z_1^2}$.
- $\cos(\vec{a}, \vec{b})=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}$; $\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$.
- Góc $\widehat{BAC}$ của tam giác là góc giữa $\overrightarrow{AB}$ và $\overrightarrow{AC}$.
- Hình bình hành $ABCD$: $\overrightarrow{AD}=\overrightarrow{BC}$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho $\vec{u}=(2; -1; 3)$ và $\vec{v}=(-1; 4; 0)$. Tìm $\vec{u}+\vec{v}$, $3\vec{u}-2\vec{v}$ và $\vec{u}\cdot\vec{v}$.

::hint
**Kiến thức:** cộng, trừ, nhân với một số từng toạ độ; $\vec{u}\cdot\vec{v}=x_1x_2+y_1y_2+z_1z_2$.

**Gợi ý các bước:**
1. Tính $3\vec{u}$ và $2\vec{v}$ trước.
2. Nhân các toạ độ cùng vị trí rồi cộng.

::solution
$\vec{u}+\vec{v}=(1; 3; 3)$. $3\vec{u}=(6; -3; 9)$, $2\vec{v}=(-2; 8; 0)$, nên $3\vec{u}-2\vec{v}=(8; -11; 9)$. $\vec{u}\cdot\vec{v}=-2-4+0=-6$.

**Đáp số.** $(1; 3; 3)$; $(8; -11; 9)$; $-6$.
:::

:::exercise
Cho $\vec{a}=(2; -3; 6)$. Tính $|\vec{a}|$ và tìm vectơ $\vec{e}$ cùng hướng với $\vec{a}$ có độ dài bằng $1$.

::hint
**Kiến thức:** $|\vec{a}|=\sqrt{x^2+y^2+z^2}$; $\dfrac{1}{|\vec{a}|}\vec{a}$ cùng hướng với $\vec{a}$ và có độ dài $1$.

**Gợi ý các bước:**
1. Tính $|\vec{a}|$.
2. Chia từng toạ độ cho $|\vec{a}|$.

::solution
$|\vec{a}|=\sqrt{4+9+36}=7$, nên $\vec{e}=\dfrac17\vec{a}=\left(\dfrac27; -\dfrac37; \dfrac67\right)$.

**Đáp số.** $|\vec{a}|=7$; $\vec{e}=\left(\dfrac27; -\dfrac37; \dfrac67\right)$.
:::

:::exercise
Tính góc giữa hai vectơ $\vec{a}=(1; 1; 0)$ và $\vec{b}=(0; 1; 1)$.

::hint
**Kiến thức:** $\cos(\vec{a}, \vec{b})=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}$.

**Gợi ý các bước:**
1. Tính $\vec{a}\cdot\vec{b}$, $|\vec{a}|$, $|\vec{b}|$.
2. Tìm góc có cosin bằng kết quả.

::solution
$$\vec{a}\cdot\vec{b}=0+1+0=1,\qquad |\vec{a}|=|\vec{b}|=\sqrt2,\qquad \cos(\vec{a}, \vec{b})=\frac{1}{2}.$$

**Đáp số.** $60^\circ$.
:::

:::exercise
Trong ba vectơ $\vec{u}=(1; 2; -1)$, $\vec{v}=(3; -1; 1)$, $\vec{w}=(1; 1; 3)$, những cặp nào vuông góc với nhau?

::hint
**Kiến thức:** $\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$.

**Gợi ý các bước:**
1. Tính ba tích vô hướng $\vec{u}\cdot\vec{v}$, $\vec{u}\cdot\vec{w}$, $\vec{v}\cdot\vec{w}$.
2. Chọn những tích bằng $0$.

::solution
$\vec{u}\cdot\vec{v}=3-2-1=0$, $\vec{u}\cdot\vec{w}=1+2-3=0$, $\vec{v}\cdot\vec{w}=3-1+3=5$.

**Đáp số.** $\vec{u}\perp\vec{v}$ và $\vec{u}\perp\vec{w}$; $\vec{v}$ và $\vec{w}$ không vuông góc.
:::

:::exercise
Tìm $x$, $y$ để hai vectơ $\vec{a}=(1; x; 3)$ và $\vec{b}=(-2; 4; y)$ cùng phương.

::hint
**Kiến thức:** $\vec{b}$ cùng phương $\vec{a}$ $\iff$ $\vec{b}=k\vec{a}$.

**Gợi ý các bước:**
1. Tìm $k$ từ hoành độ: $-2=k\cdot1$.
2. Dùng $k$ cho hai toạ độ còn lại.

::solution
$k=-2$. Khi đó $4=-2x$ nên $x=-2$, và $y=-2\cdot3=-6$.

**Đáp số.** $x=-2$, $y=-6$.
:::

:::exercise
Cho $A(3; 2; -1)$, $B(1; 1; 1)$, $C(2; 3; 3)$. Chứng minh tam giác $ABC$ vuông tại $B$ và tính diện tích của nó.

::hint
**Kiến thức:** tam giác vuông tại $B$ $\iff$ $\overrightarrow{BA}\cdot\overrightarrow{BC}=0$; diện tích tam giác vuông bằng nửa tích hai cạnh góc vuông.

**Gợi ý các bước:**
1. Tính $\overrightarrow{BA}$, $\overrightarrow{BC}$ và tích vô hướng.
2. Tính $BA$, $BC$.

::solution
$$\overrightarrow{BA}=(2; 1; -2),\quad \overrightarrow{BC}=(1; 2; 2),\quad \overrightarrow{BA}\cdot\overrightarrow{BC}=2+2-4=0.$$
$BA=BC=3$, nên $S=\dfrac12\cdot3\cdot3=4{,}5$.

**Đáp số.** Tam giác vuông (và cân) tại $B$; $S=4{,}5$.
:::

:::exercise
Cho $\vec{a}=(1; -2; 2)$ và $\vec{b}=(2; 2; 1)$. Mỗi khẳng định sau đúng hay sai?

a) $|\vec{a}|=3$.

b) $\vec{a}\perp\vec{b}$.

c) $\vec{a}-\vec{b}=(-1; -4; 3)$.

d) $|\vec{a}+\vec{b}|=6$.

::hint
**Kiến thức:** công thức độ dài, tích vô hướng, phép trừ theo toạ độ.

**Gợi ý các bước:**
1. Tính $|\vec{a}|$ và $\vec{a}\cdot\vec{b}$.
2. Trừ từng toạ độ.
3. Tính $\vec{a}+\vec{b}$ rồi độ dài của nó.

::solution
a) **Đúng.** $|\vec{a}|=\sqrt{1+4+4}=3$.

b) **Đúng.** $\vec{a}\cdot\vec{b}=2-4+2=0$.

c) **Sai.** $\vec{a}-\vec{b}=(1-2;\ -2-2;\ 2-1)=(-1; -4; 1)$.

d) **Sai.** $\vec{a}+\vec{b}=(3; 0; 3)$, nên $|\vec{a}+\vec{b}|=\sqrt{18}=3\sqrt2\approx4{,}24$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Sai.
:::

:::exercise
Một người kéo một chiếc xe trượt bằng lực $\vec{F}=(10; 5; -2)$ (đơn vị: N). Xe dịch chuyển theo vectơ $\vec{d}=(3; 4; 0)$ (đơn vị: m). Tính góc giữa lực kéo và hướng dịch chuyển (đơn vị: độ, làm tròn đến hàng đơn vị).

::hint
**Kiến thức:** $\cos(\vec{F}, \vec{d})=\dfrac{\vec{F}\cdot\vec{d}}{|\vec{F}||\vec{d}|}$; trong vật lí, $\vec{F}\cdot\vec{d}$ là công của lực (đơn vị: J).

**Gợi ý các bước:**
1. Tính $\vec{F}\cdot\vec{d}$.
2. Tính $|\vec{F}|$, $|\vec{d}|$ rồi cosin của góc.

::solution
$$\vec{F}\cdot\vec{d}=30+20+0=50,\qquad |\vec{F}|=\sqrt{100+25+4}=\sqrt{129},\qquad |\vec{d}|=5.$$
$$\cos(\vec{F}, \vec{d})=\frac{50}{5\sqrt{129}}=\frac{10}{\sqrt{129}}\approx0{,}880,\qquad (\vec{F}, \vec{d})\approx28{,}3^\circ.$$
(Công của lực là $50$ J.)

**Đáp số.** $28$.
:::

:::exercise
(Ôn lại [Vectơ và các phép toán trong không gian](lesson:vectors-in-space).) Ở bài trước, bằng cách phân tích vectơ, ta tính được góc giữa $\overrightarrow{AC}$ và $\overrightarrow{A'D}$ trong hình lập phương $ABCD.A'B'C'D'$ bằng $60^\circ$. Hãy tính lại bằng toạ độ, với hình lập phương cạnh $1$, $A$ ở gốc, $B(1; 0; 0)$, $D(0; 1; 0)$, $A'(0; 0; 1)$.

::hint
**Kiến thức:** toạ độ đỉnh của hình lập phương; công thức cosin của góc.

**Gợi ý các bước:**
1. Viết $C(1; 1; 0)$ và tìm $\overrightarrow{AC}$, $\overrightarrow{A'D}$.
2. Tính cosin.

::solution
$$\overrightarrow{AC}=(1; 1; 0),\qquad \overrightarrow{A'D}=(0; 1; -1),\qquad \cos=\frac{0+1+0}{\sqrt2\cdot\sqrt2}=\frac12.$$

**Đáp số.** $60^\circ$, trùng với kết quả của bài trước.
:::

:::exercise Thử thách
Cho $A(2; 1; 1)$ và $B(4; -1; 1)$. Tìm các điểm $M$ trên trục $Ox$ sao cho tam giác $MAB$ vuông tại $M$.

::hint
**Kiến thức:** điểm trên $Ox$ có dạng $M(t; 0; 0)$; vuông tại $M$ $\iff$ $\overrightarrow{MA}\cdot\overrightarrow{MB}=0$.

**Gợi ý các bước:**
1. Viết $\overrightarrow{MA}$, $\overrightarrow{MB}$ theo $t$.
2. Lập phương trình tích vô hướng bằng $0$ và giải.

::solution
$\overrightarrow{MA}=(2-t; 1; 1)$, $\overrightarrow{MB}=(4-t; -1; 1)$.
$$(2-t)(4-t)-1+1=0\iff(2-t)(4-t)=0\iff t=2\ \text{hoặc}\ t=4.$$
**Kiểm tra.** Với $M(2; 0; 0)$: $(0; 1; 1)\cdot(2; -1; 1)=0$. Với $M(4; 0; 0)$: $(-2; 1; 1)\cdot(0; -1; 1)=0$.

**Đáp số.** $M(2; 0; 0)$ hoặc $M(4; 0; 0)$.
:::

## Kiểm tra mini

:::quiz
::mc
Trong không gian $Oxyz$, cho $\vec{a}=(2; -1; 3)$ và $\vec{b}=(1; 0; -2)$. Toạ độ của vectơ $\vec{a}-2\vec{b}$ là
A. $(0; -1; -1)$.
B. $(0; -1; 7)$.
C. $(4; -1; -1)$.
D. $(1; -1; 5)$.
::key B
$2\vec{b}=(2; 0; -4)$ nên $\vec{a}-2\vec{b}=(0; -1; 3+4)=(0; -1; 7)$. Phương án A sai dấu khi trừ $-4$, phương án C là $\vec{a}+2\vec{b}$, phương án D quên nhân $\vec{b}$ với $2$.

::mc
Cho $\vec{u}=(3; -2; 1)$ và $\vec{v}=(1; 4; -2)$. Tích vô hướng $\vec{u}\cdot\vec{v}$ bằng
A. $7$.
B. $(3; -8; -2)$.
C. $-7$.
D. $-3$.
::key C
$\vec{u}\cdot\vec{v}=3\cdot1+(-2)\cdot4+1\cdot(-2)=3-8-2=-7$. Phương án B viết tích vô hướng thành một vectơ, phương án D sai dấu ở tích $1\cdot(-2)$.

::mc
Vectơ nào sau đây vuông góc với vectơ $\vec{a}=(1; 2; -2)$?
A. $(1; 2; 2)$.
B. $(2; -1; 2)$.
C. $(-2; -4; 4)$.
D. $(2; 1; 2)$.
::key D
$(1; 2; -2)\cdot(2; 1; 2)=2+2-4=0$. Phương án C bằng $-2\vec{a}$, cùng phương với $\vec{a}$ chứ không vuông góc; A và B cho tích vô hướng $1$ và $-4$.

::mc
Góc giữa hai vectơ $\vec{a}=(1; 0; 1)$ và $\vec{b}=(-1; 1; 0)$ bằng
A. $120^\circ$.
B. $60^\circ$.
C. $45^\circ$.
D. $150^\circ$.
::key A
$\cos(\vec{a}, \vec{b})=\dfrac{-1+0+0}{\sqrt2\cdot\sqrt2}=-\dfrac12$, nên góc bằng $120^\circ$. Phương án B bỏ qua dấu trừ của tích vô hướng.

::tf
Trong không gian $Oxyz$, cho $A(1; 0; 2)$, $B(3; 1; 0)$, $C(0; 2; 2)$.
a) $\overrightarrow{AB}=(2; 1; -2)$.
b) Tam giác $ABC$ vuông tại $A$.
c) Diện tích tam giác $ABC$ bằng $3\sqrt5$.
d) Góc $\widehat{ABC}$ lớn hơn $30^\circ$.
::key Đ Đ S Đ
a) Đúng. b) Đúng: $\overrightarrow{AC}=(-1; 2; 0)$ và $\overrightarrow{AB}\cdot\overrightarrow{AC}=-2+2+0=0$. c) Sai: $AB=3$, $AC=\sqrt5$, diện tích là $\dfrac12\cdot3\sqrt5=\dfrac{3\sqrt5}{2}$. d) Đúng: $\overrightarrow{BA}=(-2; -1; 2)$, $\overrightarrow{BC}=(-3; 1; 2)$, $\cos\widehat{ABC}=\dfrac{9}{3\sqrt{14}}\approx0{,}80$, góc khoảng $36{,}7^\circ$.

::sa
Cho ba điểm $A(1; 2; -1)$, $B(3; 0; 1)$ và $C(x; y; 5)$. Biết $A$, $B$, $C$ thẳng hàng, tính $x+y$.
::key 3
$\overrightarrow{AB}=(2; -2; 2)$, $\overrightarrow{AC}=(x-1; y-2; 6)=k\overrightarrow{AB}$. Cao độ cho $6=2k$, $k=3$, nên $x=7$, $y=-4$ và $x+y=3$.

::sa
Một lực $\vec{F}=(4; -2; 3)$ (đơn vị: N) kéo một vật dịch chuyển từ $M(1; 0; 0)$ đến $N(5; 3; 2)$ (đơn vị: m). Tính góc giữa lực $\vec{F}$ và hướng dịch chuyển $\overrightarrow{MN}$, theo độ (làm tròn kết quả đến hàng phần mười).
::key 56,5
$\overrightarrow{MN}=(4; 3; 2)$, $\vec{F}\cdot\overrightarrow{MN}=16-6+6=16$ và $|\vec{F}|=|\overrightarrow{MN}|=\sqrt{29}$. Vậy $\cos=\dfrac{16}{29}$, góc khoảng $56{,}51^\circ$, làm tròn được $56{,}5$.
:::
