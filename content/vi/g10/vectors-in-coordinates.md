---
title: Vectơ trong mặt phẳng toạ độ
description: Mô tả vectơ bằng toạ độ, cộng và nhân vectơ với một số, rồi tìm độ dài, trung điểm, trọng tâm và các điểm thẳng hàng bằng toạ độ.
minutes: 25
---

:::goals
- Viết vectơ dưới dạng $\vec{a}=(x; y)$ và tìm toạ độ của $\overrightarrow{AB}$ từ hai điểm $A$, $B$.
- Cộng, trừ và nhân vectơ với một số bằng toạ độ.
- Tìm độ dài của vectơ và khoảng cách giữa hai điểm.
- Dùng toạ độ cho trung điểm, trọng tâm, tính thẳng hàng và đỉnh còn thiếu của hình bình hành.
:::

Trên bản đồ một khu phố kẻ ô vuông, nhà Lan ở điểm $(0; 0)$. Ứng dụng chỉ đường bảo Lan "đi $3$ dãy nhà về phía đông, rồi $2$ dãy nhà về phía bắc" để tới trường. Nhà Minh ở điểm $(1; 4)$, và Minh làm đúng hai thao tác ấy. Minh sẽ đến điểm nào?

## Toạ độ của vectơ

Ta thử tính. Thao tác "đi $3$ sang phải, $2$ lên trên" cộng $3$ vào hoành độ và $2$ vào tung độ, dù xuất phát ở đâu:

$$\text{Lan: } (0+3;\ 0+2)=(3; 2),\qquad \text{Minh: } (1+3;\ 4+2)=(4; 6).$$

Hai bạn đi hai mũi tên khác chỗ nhưng **bằng nhau**, và cặp số $(3; 2)$ mô tả trọn vẹn mũi tên đó. Vậy Minh đến điểm $(4; 6)$. Cặp số như $(3; 2)$ gọi là toạ độ của vectơ.

Trong mặt phẳng có hệ trục $Ox$, $Oy$, gọi $\vec{i}$ là vectơ có độ dài $1$ trên trục $Ox$, cùng hướng với trục, và $\vec{j}$ là vectơ như vậy trên trục $Oy$. Đây là các **vectơ đơn vị** của hai trục.

:::definition Toạ độ của vectơ
Mỗi vectơ $\vec{a}$ viết được duy nhất dưới dạng
$$\vec{a}=x\vec{i}+y\vec{j}.$$
Cặp số $(x; y)$ là **toạ độ** của $\vec{a}$, và ta viết $\vec{a}=(x; y)$.
:::

:::diagram Vectơ $\vec{a}=3\vec{i}+2\vec{j}$
alt: Trên một lưới, mũi tên đi từ gốc toạ độ O đến điểm P(3; 2), với các đoạn nét đứt cho thấy 3 đơn vị theo trục hoành và 2 đơn vị lên trên
point O 0,0 below-left
point X 3,0 below ""
point Y 0,2 left ""
point P 3,2 above-right "(3; 2)"
axes
grid
arrow O P "a"
segment X P dashed
segment Y P dashed
:::

Hai vectơ **bằng nhau** khi và chỉ khi toạ độ của chúng bằng nhau: $(x; y)=(x'; y')$ nghĩa là $x=x'$ và $y=y'$. Vectơ-không là $(0; 0)$.

### Từ hai điểm đến một vectơ

Nếu $A(x_A; y_A)$ và $B(x_B; y_B)$ thì để đi từ $A$ đến $B$ ta dịch $x_B-x_A$ theo chiều ngang và $y_B-y_A$ theo chiều dọc:
$$\overrightarrow{AB}=(x_B-x_A;\ y_B-y_A).$$
Nói gọn: toạ độ **điểm cuối trừ điểm đầu**.

Ví dụ đầu tiên áp dụng công thức này và cho thấy một vectơ có thể "nằm" ở nhiều chỗ.

:::example Vectơ từ hai điểm
Cho $A(1; 2)$, $B(4; 6)$, $C(-2; 0)$, $D(1; 4)$. Tìm toạ độ của $\overrightarrow{AB}$ và $\overrightarrow{CD}$. Hai vectơ này có bằng nhau không?

**Lời giải.** Lấy toạ độ điểm cuối trừ toạ độ điểm đầu:

$$\overrightarrow{AB}=(4-1;\ 6-2)=(3; 4),\qquad \overrightarrow{CD}=(1-(-2);\ 4-0)=(3; 4).$$

Hai vectơ có cùng toạ độ, nên $\overrightarrow{AB}=\overrightarrow{CD}$, dù bốn điểm khác nhau.
:::

## Các phép toán theo toạ độ

Vì $\vec{a}=x_1\vec{i}+y_1\vec{j}$ và $\vec{b}=x_2\vec{i}+y_2\vec{j}$, các quy tắc tính toán của bài trước cho $\vec{a}+\vec{b}=(x_1+x_2)\vec{i}+(y_1+y_2)\vec{j}$. Làm tương tự cho hiệu và tích với một số:

:::theorem Các phép toán theo toạ độ
Cho $\vec{a}=(x_1; y_1)$, $\vec{b}=(x_2; y_2)$ và số $k$. Khi đó
- $\vec{a}+\vec{b}=(x_1+x_2;\ y_1+y_2)$,
- $\vec{a}-\vec{b}=(x_1-x_2;\ y_1-y_2)$,
- $k\vec{a}=(kx_1;\ ky_1)$.
:::

Như vậy ta cộng, trừ và nhân vectơ với một số **từng toạ độ một**.

:::example Kết hợp các vectơ
Cho $\vec{a}=(2; -1)$ và $\vec{b}=(-3; 4)$. Tìm $\vec{a}+\vec{b}$, $\vec{a}-\vec{b}$ và $3\vec{a}-2\vec{b}$.

**Lời giải.** Ta tính riêng hoành độ và tung độ:

$$\vec{a}+\vec{b}=(2-3;\ -1+4)=(-1; 3),\qquad \vec{a}-\vec{b}=(2+3;\ -1-4)=(5; -5).$$

Với biểu thức thứ ba, nhân trước rồi trừ sau:

$$3\vec{a}=(6; -3),\quad 2\vec{b}=(-6; 8),\quad 3\vec{a}-2\vec{b}=(6+6;\ -3-8)=(12; -11).$$

Vậy $\vec{a}+\vec{b}=(-1; 3)$, $\vec{a}-\vec{b}=(5; -5)$ và $3\vec{a}-2\vec{b}=(12; -11)$.
:::

## Độ dài vectơ và khoảng cách

Trong hình trên, $\vec{a}=(3; 2)$ là cạnh huyền của tam giác vuông có hai cạnh góc vuông $3$ và $2$. Tổng quát, theo định lí Pythagore, vectơ $\vec{a}=(x; y)$ có độ dài
$$|\vec{a}|=\sqrt{x^2+y^2}.$$
Vì $AB$ là độ dài của $\overrightarrow{AB}$, nên **khoảng cách giữa hai điểm** là
$$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}.$$

Có độ dài ba cạnh, ta nhận dạng được tam giác mà không cần vẽ.

:::example Tam giác vuông
Cho $A(1; 2)$, $B(4; 6)$, $C(9; -4)$. Chứng minh tam giác $ABC$ vuông.

**Lời giải.** Ta tính bình phương ba cạnh rồi dùng định lí Pythagore đảo:

$$\begin{aligned}
\overrightarrow{AB}&=(3; 4), & AB^2&=9+16=25,\\
\overrightarrow{AC}&=(8; -6), & AC^2&=64+36=100,\\
\overrightarrow{BC}&=(5; -10), & BC^2&=25+100=125.
\end{aligned}$$

Vì $AB^2+AC^2=25+100=125=BC^2$, tam giác $ABC$ vuông tại $A$.

**Kiểm tra.** Cạnh dài nhất $BC$ là cạnh huyền, nên góc vuông nằm ở đỉnh đối diện, tức $A$.
:::

## Trung điểm và trọng tâm

Dùng $\overrightarrow{OM}=\frac12(\overrightarrow{OA}+\overrightarrow{OB})$ và $\overrightarrow{OG}=\frac13(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC})$ với $O$ là gốc toạ độ. Toạ độ của $\overrightarrow{OA}$ chính là toạ độ của điểm $A$, nên ta được toạ độ bằng cách lấy trung bình cộng.

:::theorem Trung điểm và trọng tâm
- Trung điểm $M$ của $AB$ là $M\left(\dfrac{x_A+x_B}{2};\ \dfrac{y_A+y_B}{2}\right)$.
- Trọng tâm $G$ của tam giác $ABC$ là $G\left(\dfrac{x_A+x_B+x_C}{3};\ \dfrac{y_A+y_B+y_C}{3}\right)$.
:::

:::example Trung điểm và trọng tâm
a) Tìm trung điểm của đoạn thẳng nối $A(2; -1)$ và $B(6; 5)$.
b) Tìm trọng tâm của tam giác có các đỉnh $A(1; 1)$, $B(5; 2)$, $C(0; 6)$.

**Lời giải.** Lấy trung bình cộng từng toạ độ:

$$M\left(\frac{2+6}{2};\ \frac{-1+5}{2}\right)=M(4; 2),\qquad G\left(\frac{1+5+0}{3};\ \frac{1+2+6}{3}\right)=G(2; 3).$$

Vậy trung điểm là $M(4; 2)$ và trọng tâm là $G(2; 3)$.
:::

## Vectơ cùng phương và ba điểm thẳng hàng

Hai vectơ $\vec{a}=(x_1; y_1)$ và $\vec{b}=(x_2; y_2)$ khác $\vec{0}$ **cùng phương** khi vectơ này là bội của vectơ kia, chẳng hạn $(2; 4)$ và $(4; 8)=2(2; 4)$. Theo toạ độ, điều đó tương đương với
$$x_1y_2-x_2y_1=0.$$
Ta dùng phép thử bằng tích này thay cho tỉ số $\frac{x_1}{x_2}=\frac{y_1}{y_2}$, vì tỉ số không dùng được khi có một toạ độ bằng $0$. Ba điểm $A$, $B$, $C$ thẳng hàng khi $\overrightarrow{AB}$ và $\overrightarrow{AC}$ cùng phương.

Ví dụ sau dùng phép thử này hai lần: một lần để kiểm tra, một lần để tìm một điểm chưa biết.

:::example Ba điểm thẳng hàng
Cho $A(-1; 1)$, $B(3; 3)$, $C(7; 5)$.

a) Chứng minh $A$, $B$, $C$ thẳng hàng.
b) Đường thẳng $AB$ cắt trục hoành tại $M$. Tìm toạ độ của $M$.

**Lời giải.** a) Ta xét $\overrightarrow{AB}$ và $\overrightarrow{AC}$:

$$\overrightarrow{AB}=(4; 2),\quad \overrightarrow{AC}=(8; 4),\quad 4\cdot4-8\cdot2=0.$$

Hai vectơ cùng phương (thật vậy $\overrightarrow{AC}=2\overrightarrow{AB}$), nên $A$, $B$, $C$ thẳng hàng.

b) Điểm $M$ nằm trên trục hoành nên $M(t; 0)$. Cần $\overrightarrow{AM}=(t+1; -1)$ cùng phương với $\overrightarrow{AB}=(4; 2)$:

$$(t+1)\cdot2-4\cdot(-1)=0\iff 2t+6=0\iff t=-3.$$

Vậy $M(-3; 0)$.
:::

## Đỉnh còn thiếu của hình bình hành

$ABCD$ là hình bình hành khi và chỉ khi $\overrightarrow{AB}=\overrightarrow{DC}$. Viết đẳng thức này theo toạ độ, ta tìm được đỉnh thứ tư.

:::diagram Hình bình hành $ABCD$
alt: Hình bình hành có các đỉnh A(1; 1), B(4; 2), C(5; 5) và D(2; 4) vẽ trên lưới
point A 1,1 below-left "A(1; 1)"
point B 4,2 below-right "B(4; 2)"
point C 5,5 above-right "C(5; 5)"
point D 2,4 above-left "D(2; 4)"
polygon A B C D
grid
:::

:::example Đỉnh thứ tư
Ba đỉnh của hình bình hành $ABCD$ là $A(1; 1)$, $B(4; 2)$ và $C(5; 5)$. Tìm $D$.

**Lời giải.** Gọi $D(x; y)$. Hình bình hành cho $\overrightarrow{AB}=\overrightarrow{DC}$; ta cho hai toạ độ bằng nhau:

$$(3; 1)=(5-x;\ 5-y)\iff\begin{cases}5-x=3\\5-y=1\end{cases}\iff\begin{cases}x=2\\y=4.\end{cases}$$

Vậy $D(2; 4)$.

**Kiểm tra.** Hai đường chéo phải cắt nhau tại trung điểm mỗi đường: trung điểm của $AC$ là $(3; 3)$ và trung điểm của $BD$ cũng là $(3; 3)$.
:::

:::warning Những sai lầm thường gặp
- **Trừ sai thứ tự.** Sai: với $A(1; 2)$, $B(4; 6)$, viết $\overrightarrow{AB}=(1-4;\ 2-6)=(-3; -4)$. Đó là $\overrightarrow{BA}$. Đúng: điểm cuối trừ điểm đầu, $\overrightarrow{AB}=(3; 4)$.
- **Cộng toạ độ thay cho tính độ dài.** Sai: $|(3; 4)|=3+4=7$. Đúng: $|(3; 4)|=\sqrt{9+16}=5$.
- **Dùng tỉ số khi có toạ độ bằng $0$.** Với $(0; 2)$ và $(0; 5)$, tỉ số $\frac{0}{0}$ không có nghĩa, nhưng $0\cdot5-0\cdot2=0$ cho biết hai vectơ cùng phương.
- **Sai thứ tự đỉnh hình bình hành.** $ABCD$ là hình bình hành cần $\overrightarrow{AB}=\overrightarrow{DC}$, không phải $\overrightarrow{AB}=\overrightarrow{CD}$.
:::

## Thuật ngữ

:::terms
- các vectơ đơn vị | unit vectors
- toạ độ của vectơ | coordinates of a vector
- hai vectơ bằng nhau | equal vectors
- độ dài vectơ | length of a vector
- khoảng cách giữa hai điểm | distance between two points
- trung điểm | midpoint
- trọng tâm | centroid
- cùng phương | collinear
- hình bình hành | parallelogram
:::

## Tóm tắt

- $\vec{a}=x\vec{i}+y\vec{j}$ được viết là $\vec{a}=(x; y)$; $\overrightarrow{AB}=(x_B-x_A;\ y_B-y_A)$ (cuối trừ đầu).
- Cộng, trừ và nhân với một số từng toạ độ một.
- $|\vec{a}|=\sqrt{x^2+y^2}$; $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$.
- Trung điểm: trung bình cộng hai toạ độ; trọng tâm: trung bình cộng ba toạ độ.
- $\vec{a}$, $\vec{b}$ cùng phương $\iff x_1y_2-x_2y_1=0$; ba điểm thẳng hàng khi $\overrightarrow{AB}$, $\overrightarrow{AC}$ cùng phương.
- Đỉnh thứ tư của hình bình hành $ABCD$: giải $\overrightarrow{AB}=\overrightarrow{DC}$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho $\vec{a}=(3; -2)$ và $\vec{b}=(-1; 5)$. Tìm toạ độ của $2\vec{a}+\vec{b}$ và $\vec{a}-3\vec{b}$.

::hint
**Kiến thức:** $k\vec{a}=(kx_1;\ ky_1)$; cộng, trừ từng toạ độ.

**Gợi ý các bước:**
1. Tính $2\vec{a}$ và $3\vec{b}$.
2. Cộng hoặc trừ từng toạ độ.

::solution
$2\vec{a}=(6; -4)$ nên $2\vec{a}+\vec{b}=(6-1;\ -4+5)=(5; 1)$. $3\vec{b}=(-3; 15)$ nên $\vec{a}-3\vec{b}=(3+3;\ -2-15)=(6; -17)$.

**Đáp số.** $2\vec{a}+\vec{b}=(5; 1)$; $\vec{a}-3\vec{b}=(6; -17)$.
:::

:::exercise
Tìm toạ độ của $\overrightarrow{AB}$ và khoảng cách $AB$ với $A(-2; 3)$ và $B(4; -1)$.

::hint
**Kiến thức:** $\overrightarrow{AB}=(x_B-x_A;\ y_B-y_A)$ và $|\vec{a}|=\sqrt{x^2+y^2}$.

**Gợi ý các bước:**
1. Lấy toạ độ $B$ trừ toạ độ $A$.
2. Tính độ dài và rút gọn căn.

::solution
$\overrightarrow{AB}=(4+2;\ -1-3)=(6; -4)$ và $AB=\sqrt{36+16}=\sqrt{52}=2\sqrt{13}$.

**Đáp số.** $\overrightarrow{AB}=(6; -4)$; $AB=2\sqrt{13}$.
:::

:::exercise
a) Tìm trung điểm của đoạn thẳng nối $A(-3; 5)$ và $B(7; 1)$.
b) Tìm trọng tâm của tam giác có các đỉnh $A(1; 2)$, $B(4; -1)$, $C(-2; 8)$.

::hint
**Kiến thức:** trung điểm và trọng tâm có toạ độ là trung bình cộng toạ độ các đầu mút, các đỉnh.

**Gợi ý các bước:**
1. Cộng các hoành độ rồi chia cho $2$ (hoặc $3$).
2. Làm tương tự với các tung độ.

::solution
a) $M\left(\dfrac{-3+7}{2};\ \dfrac{5+1}{2}\right)=M(2; 3)$.
b) $G\left(\dfrac{1+4-2}{3};\ \dfrac{2-1+8}{3}\right)=G(1; 3)$.

**Đáp số.** a) $M(2; 3)$; b) $G(1; 3)$.
:::

:::exercise
Chứng minh rằng ba điểm $A(1; 1)$, $B(2; 3)$, $C(4; 7)$ thẳng hàng.

::hint
**Kiến thức:** ba điểm thẳng hàng khi $\overrightarrow{AB}$, $\overrightarrow{AC}$ cùng phương, tức $x_1y_2-x_2y_1=0$.

**Gợi ý các bước:**
1. Tìm toạ độ $\overrightarrow{AB}$ và $\overrightarrow{AC}$.
2. Tính $x_1y_2-x_2y_1$.

::solution
$\overrightarrow{AB}=(1; 2)$, $\overrightarrow{AC}=(3; 6)$ và $1\cdot6-3\cdot2=0$. Hai vectơ cùng phương (thật vậy $\overrightarrow{AC}=3\overrightarrow{AB}$), nên ba điểm thẳng hàng.

**Đáp số.** $A$, $B$, $C$ thẳng hàng, $\overrightarrow{AC}=3\overrightarrow{AB}$.
:::

:::exercise
$ABCD$ là hình bình hành với $A(-1; 0)$, $B(2; 1)$, $C(3; 4)$. Tìm toạ độ đỉnh $D$.

::hint
**Kiến thức:** $ABCD$ là hình bình hành $\iff$ $\overrightarrow{AB}=\overrightarrow{DC}$.

**Gợi ý các bước:**
1. Gọi $D(x; y)$, viết toạ độ $\overrightarrow{AB}$ và $\overrightarrow{DC}$.
2. Cho các toạ độ tương ứng bằng nhau.

::solution
$\overrightarrow{AB}=(3; 1)$ và $\overrightarrow{DC}=(3-x;\ 4-y)$. Từ $3-x=3$ và $4-y=1$ ta được $x=0$, $y=3$. Kiểm tra: trung điểm của $AC$ và của $BD$ đều là $(1; 2)$.

**Đáp số.** $D(0; 3)$.
:::

:::exercise
Trên một bản đồ biển (đơn vị: km), cảng ở gốc toạ độ $O$. Lúc $8$ giờ, một tàu ở điểm $A(2; 3)$ và chạy thẳng với vận tốc không đổi $\vec{v}=(3; 4)$ (km/h). Lúc $10$ giờ, tàu cách cảng bao nhiêu kilômét? (Làm tròn đến hàng phần mười.)

::hint
**Kiến thức:** sau $t$ giờ, độ dời của tàu là $t\vec{v}$; khoảng cách từ gốc đến điểm $P(x; y)$ là $\sqrt{x^2+y^2}$.

**Gợi ý các bước:**
1. Sau $2$ giờ tàu dời được $2\vec{v}$; cộng vào toạ độ của $A$.
2. Tính $OP$ rồi làm tròn.

::solution
$2\vec{v}=(6; 8)$, nên lúc $10$ giờ tàu ở $P(2+6;\ 3+8)=P(8; 11)$. Khi đó
$$OP=\sqrt{8^2+11^2}=\sqrt{185}\approx13{,}6.$$

**Đáp số.** $13{,}6$.
:::

:::exercise
Cho tam giác $ABC$ với $A(1; 1)$, $B(4; 5)$, $C(7; 1)$. Mỗi khẳng định sau đúng hay sai?

a) $\overrightarrow{AB}=(3; 4)$.
b) Tam giác $ABC$ cân tại $B$.
c) Trọng tâm của tam giác là $G\left(4; \dfrac73\right)$.
d) Chu vi tam giác $ABC$ bằng $15$.

::hint
**Kiến thức:** toạ độ vectơ, công thức khoảng cách, công thức trọng tâm.

**Gợi ý các bước:**
1. Tính toạ độ $\overrightarrow{AB}$, $\overrightarrow{BC}$, $\overrightarrow{AC}$ và ba độ dài.
2. Lấy trung bình cộng các toạ độ để tìm $G$.

::solution
a) **Đúng.** $\overrightarrow{AB}=(4-1;\ 5-1)=(3; 4)$.

b) **Đúng.** $AB=\sqrt{9+16}=5$, $BC=\sqrt{3^2+(-4)^2}=5$, nên $BA=BC$.

c) **Đúng.** $G\left(\dfrac{1+4+7}{3};\ \dfrac{1+5+1}{3}\right)=G\left(4; \dfrac73\right)$.

d) **Sai.** $AC=6$, nên chu vi là $5+5+6=16$.

**Đáp số.** a) Đúng; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
(Ôn lại phân tích vectơ.) Viết $\vec{c}=(5; 1)$ dưới dạng $x\vec{a}+y\vec{b}$ với $\vec{a}=(1; 1)$ và $\vec{b}=(1; -1)$.

::hint
**Kiến thức:** hai vectơ bằng nhau khi các toạ độ tương ứng bằng nhau; $\vec{a}$, $\vec{b}$ không cùng phương nên cách viết là duy nhất.

**Gợi ý các bước:**
1. Viết $x\vec{a}+y\vec{b}=(x+y;\ x-y)$.
2. Cho bằng $(5; 1)$ và giải hệ.

::solution
$$\begin{cases}x+y=5\\x-y=1\end{cases}\iff\begin{cases}x=3\\y=2.\end{cases}$$
**Kiểm tra.** $3(1; 1)+2(1; -1)=(5; 1)$.

**Đáp số.** $\vec{c}=3\vec{a}+2\vec{b}$.
:::

:::exercise Thử thách
Tìm điểm $M$ trên trục hoành cách đều hai điểm $A(1; 3)$ và $B(5; 1)$.

::hint
**Kiến thức:** điểm trên trục hoành có dạng $M(t; 0)$; $MA=MB\iff MA^2=MB^2$.

**Gợi ý các bước:**
1. Viết $MA^2$ và $MB^2$ theo $t$.
2. Cho bằng nhau; các số hạng $t^2$ triệt tiêu.

::solution
$$MA^2=(t-1)^2+9,\qquad MB^2=(t-5)^2+1.$$
$$t^2-2t+10=t^2-10t+26\iff 8t=16\iff t=2.$$
**Kiểm tra.** $MA=\sqrt{1+9}=\sqrt{10}$ và $MB=\sqrt{9+1}=\sqrt{10}$.

**Đáp số.** $M(2; 0)$.
:::

:::exercise Thử thách
Cho $A(1; 3)$ và $B(5; 1)$. Tìm điểm $M$ trên trục hoành sao cho $|\overrightarrow{MA}+\overrightarrow{MB}|$ nhỏ nhất, và tính giá trị nhỏ nhất đó.

::hint
**Kiến thức:** công thức trung điểm $\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}$ với $I$ là trung điểm $AB$.

**Gợi ý các bước:**
1. Tìm $I$; bài toán trở thành tìm $M$ trên trục hoành gần $I$ nhất.
2. Điểm gần nhất là hình chiếu của $I$ lên trục hoành.

::solution
$I(3; 2)$ và $|\overrightarrow{MA}+\overrightarrow{MB}|=2MI$. Với $M(t; 0)$: $MI^2=(t-3)^2+4\ge4$, dấu bằng khi $t=3$. Vậy giá trị nhỏ nhất là $2\cdot2=4$.

**Đáp số.** $M(3; 0)$; giá trị nhỏ nhất bằng $4$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $A(2; -1)$ và $B(-1; 3)$. Toạ độ của $\overrightarrow{AB}$ là
A. $(-3; 4)$.
B. $(3; -4)$.
C. $(1; 2)$.
D. $(-3; 2)$.
::key A
Điểm cuối trừ điểm đầu: $\overrightarrow{AB}=(-1-2;\ 3-(-1))=(-3; 4)$. Phương án B là $\overrightarrow{BA}$ (trừ ngược thứ tự); phương án C cộng toạ độ.

::mc
Độ dài của vectơ $\vec{a}=(-5; 12)$ là
A. $7$.
B. $13$.
C. $17$.
D. $\sqrt{119}$.
::key B
$|\vec{a}|=\sqrt{(-5)^2+12^2}=\sqrt{169}=13$. Phương án A, C cộng thẳng hai toạ độ; phương án D lấy $144-25$.

::mc
Trọng tâm của tam giác có các đỉnh $A(1; 4)$, $B(3; -2)$, $C(5; 7)$ là
A. $G(4{,}5; 4{,}5)$.
B. $G(9; 9)$.
C. $G(3; 3)$.
D. $G(2; 1)$.
::key C
$G\left(\dfrac{1+3+5}{3};\ \dfrac{4-2+7}{3}\right)=G(3; 3)$. Phương án B quên chia, A chia cho $2$ thay vì $3$, D là trung điểm của $AB$.

::mc
Vectơ nào sau đây cùng phương với $\vec{u}=(2; -3)$?
A. $(3; -2)$.
B. $(4; 6)$.
C. $(-2; -3)$.
D. $(-4; 6)$.
::key D
$(-4; 6)=-2(2; -3)$; kiểm tra: $2\cdot6-(-4)\cdot(-3)=12-12=0$. Phương án A đổi chỗ hai toạ độ; B và C sai dấu một toạ độ.

::tf
Cho $A(0; 2)$, $B(4; 0)$, $C(6; 4)$.
a) $\overrightarrow{AB}=(4; -2)$.
b) $AC=2\sqrt5$.
c) Trung điểm của $AC$ là $(3; 3)$.
d) Nếu $ABCD$ là hình bình hành thì $D(10; 2)$.
::key Đ S Đ S
a) Đúng: $(4-0;\ 0-2)$. b) Sai: $\overrightarrow{AC}=(6; 2)$ nên $AC=\sqrt{40}=2\sqrt{10}$ ($2\sqrt5$ là $AB$). c) Đúng: $\left(\dfrac{0+6}{2};\ \dfrac{2+4}{2}\right)$. d) Sai: từ $\overrightarrow{AB}=\overrightarrow{DC}$ ta được $D(2; 6)$; điểm $(10; 2)$ cho hình bình hành $ABDC$.

::sa
Tính khoảng cách giữa hai điểm $A(-1; 2)$ và $B(5; -6)$.
::key 10
$\overrightarrow{AB}=(6; -8)$, nên $AB=\sqrt{36+64}=\sqrt{100}=10$.

::sa
Cho $A(2; 1)$ và $B(6; 4)$. Đường thẳng $AB$ cắt trục $Oy$ tại điểm $M$. Tìm tung độ của $M$.
::key -0,5
$M(0; t)$. Cần $\overrightarrow{AM}=(-2;\ t-1)$ cùng phương với $\overrightarrow{AB}=(4; 3)$: $(-2)\cdot3-4(t-1)=0\iff 4t=-2\iff t=-0{,}5$.
:::
