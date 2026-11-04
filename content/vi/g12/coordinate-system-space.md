---
title: Hệ trục toạ độ trong không gian
description: Làm quen hệ trục Oxyz, toạ độ của điểm và vectơ, hình chiếu lên trục và mặt phẳng toạ độ, khoảng cách hai điểm, trung điểm và trọng tâm.
minutes: 22
---

:::goals
- Mô tả hệ trục toạ độ $Oxyz$, các trục, các mặt phẳng toạ độ và các vectơ đơn vị $\vec{i}$, $\vec{j}$, $\vec{k}$.
- Đọc và viết toạ độ của một điểm, một vectơ; tìm toạ độ của $\overrightarrow{AB}$.
- Tìm hình chiếu của một điểm lên các trục, các mặt phẳng toạ độ.
- Tính khoảng cách giữa hai điểm, toạ độ trung điểm và trọng tâm.
:::

Một phòng học dài $8$ m, rộng $6$ m, cao $3$ m. Một chiếc đèn treo cách bức tường phía trước $2$ m, cách bức tường bên trái $3$ m và cách sàn $2{,}5$ m. Một cảm biến độ ẩm đặt ở góc sàn đối diện, cách hai bức tường đó lần lượt $8$ m và $6$ m. Đèn cách cảm biến bao xa?

Trong mặt phẳng, hai số đủ để chỉ vị trí một điểm. Trong không gian ta cần ba số, và ba số đó cho phép tính khoảng cách mà không cần vẽ hình.

Ý tưởng dùng các con số để chỉ vị trí, nhờ đó biến bài toán hình học thành bài toán đại số, được René Descartes trình bày trong cuốn *La Géométrie* (năm 1637) cho các điểm trong mặt phẳng (theo MacTutor History of Mathematics). Mở rộng lên ba chiều, ý tưởng ấy là nền tảng của bản vẽ kĩ thuật, của phần mềm thiết kế 3D và của việc điều khiển một chiếc flycam: mọi vị trí đều được mô tả bằng ba con số.

## Hệ trục toạ độ $Oxyz$

### Khám phá: ba con số cho một vị trí

Chọn góc sàn nằm giữa bức tường phía trước và bức tường bên trái làm gốc $O$. Từ $O$, ba đường giao của sàn và hai bức tường cho ba hướng đôi một vuông góc: dọc tường bên trái, dọc tường phía trước, và thẳng lên trên. Để đến đèn, ta đi $2$ m theo hướng thứ nhất, $3$ m theo hướng thứ hai, rồi $2{,}5$ m lên trên. Bộ ba số $(2; 3; 2{,}5)$ xác định đúng một vị trí trong phòng, và cảm biến ứng với $(8; 6; 0)$.

Nếu gọi $\vec{i}$, $\vec{j}$, $\vec{k}$ là các vectơ dài $1$ m theo ba hướng đó, thì theo quy tắc hình hộp (bài trước), vectơ từ $O$ đến đèn là $2\vec{i}+3\vec{j}+2{,}5\vec{k}$.

:::definition Hệ trục toạ độ $Oxyz$
Hệ trục toạ độ $Oxyz$ gồm ba trục $Ox$, $Oy$, $Oz$ đôi một vuông góc tại gốc $O$, với các vectơ đơn vị $\vec{i}$, $\vec{j}$, $\vec{k}$:
- $Ox$ là **trục hoành**, $Oy$ là **trục tung**, $Oz$ là **trục cao**;
- các mặt phẳng $(Oxy)$, $(Oyz)$, $(Ozx)$ là **các mặt phẳng toạ độ**;
- $|\vec{i}|=|\vec{j}|=|\vec{k}|=1$ và $\vec{i}\cdot\vec{j}=\vec{j}\cdot\vec{k}=\vec{k}\cdot\vec{i}=0$.
:::

## Toạ độ của điểm và của vectơ

:::definition Toạ độ của điểm, của vectơ
- Điểm $M$ có toạ độ $(x; y; z)$, viết $M(x; y; z)$, nếu $\overrightarrow{OM}=x\vec{i}+y\vec{j}+z\vec{k}$. Ba số đó là hoành độ, tung độ và cao độ của $M$.
- Vectơ $\vec{a}$ có toạ độ $(x; y; z)$, viết $\vec{a}=(x; y; z)$, nếu $\vec{a}=x\vec{i}+y\vec{j}+z\vec{k}$.
:::

Như vậy toạ độ của điểm $M$ chính là toạ độ của vectơ $\overrightarrow{OM}$. Đặc biệt $\vec{i}=(1; 0; 0)$, $\vec{j}=(0; 1; 0)$, $\vec{k}=(0; 0; 1)$ và $\vec{0}=(0; 0; 0)$.

**Hiểu sâu hơn.** Mỗi toạ độ trả lời một câu hỏi riêng: đi bao xa theo hướng $\vec{i}$, theo hướng $\vec{j}$, theo hướng $\vec{k}$. Vì ba hướng đôi một vuông góc nên thay đổi một toạ độ không ảnh hưởng đến hai toạ độ kia; đó là lí do các phép toán vectơ trở thành phép toán trên từng toạ độ. Toạ độ phụ thuộc vào cách chọn hệ trục: cùng một chiếc đèn, đặt gốc ở góc khác của phòng thì ba con số sẽ khác, nhưng khoảng cách giữa hai điểm thì không đổi.

**Kết nối.** Bài này nối vectơ trong không gian (bài trước) với toạ độ trong mặt phẳng (lớp 10). Từ đây, phương trình mặt phẳng, đường thẳng và mặt cầu trong không gian đều được viết bằng ba toạ độ $x$, $y$, $z$.

:::diagram Hình hộp chữ nhật $OABC.O'A'B'C'$ trong hệ $Oxyz$
alt: Hệ trục Oxyz với trục Ox hướng xuống bên trái, Oy sang phải, Oz lên trên; hình hộp chữ nhật có đỉnh O ở gốc, A trên Ox, C trên Oy, O' trên Oz; ba cạnh xuất phát từ O nằm trên ba trục
point O 0,0 above-left
point X -2.7,-2.7 left "x"
point Y 5.6,0 right "y"
point Z 0,3.4 above "z"
point A -1.8,-1.8 left
point B 2.2,-1.8 below-right
point C 4,0 below-right
point O' 0,2 left
point A' -1.8,0.2 left
point B' 2.2,0.2 right
point C' 4,2 above-right
arrow O X
arrow O Y
arrow O Z
segment A B
segment B C
segment A A'
segment B B'
segment C C'
segment O' A'
segment A' B'
segment B' C'
segment C' O'
:::

Ví dụ đầu tiên đọc toạ độ từ hình hộp trên, với các cạnh dọc theo ba trục.

:::example Toạ độ các đỉnh của hình hộp
Hình hộp chữ nhật $OABC.O'A'B'C'$ có $A$ trên tia $Ox$, $C$ trên tia $Oy$, $O'$ trên tia $Oz$, với $OA=3$, $OC=4$, $OO'=2$. Tìm toạ độ các đỉnh và toạ độ của $\overrightarrow{OB'}$.

**Lời giải.** Ta có $\overrightarrow{OB}=\overrightarrow{OA}+\overrightarrow{OC}=3\vec{i}+4\vec{j}$; các đỉnh có dấu phẩy nằm ở đáy trên nên có cao độ bằng $OO'=2$. Do đó

$$\begin{aligned}
&O(0; 0; 0),\quad A(3; 0; 0),\quad B(3; 4; 0),\quad C(0; 4; 0),\\
&O'(0; 0; 2),\quad A'(3; 0; 2),\quad B'(3; 4; 2),\quad C'(0; 4; 2).
\end{aligned}$$

Vì toạ độ của $\overrightarrow{OB'}$ bằng toạ độ của điểm $B'$ nên $\overrightarrow{OB'}=3\vec{i}+4\vec{j}+2\vec{k}=(3; 4; 2)$.

Vậy các đỉnh có toạ độ như trên và $\overrightarrow{OB'}=(3; 4; 2)$.
:::

### Điểm trên các trục và các mặt phẳng toạ độ

Từ định nghĩa, ta đọc được vị trí của một điểm qua các toạ độ bằng $0$:

| Vị trí của $M$ | Điều kiện |
|---|---|
| trên trục $Ox$ / $Oy$ / $Oz$ | $y=z=0$ / $z=x=0$ / $x=y=0$ |
| trong mặt phẳng $(Oxy)$ / $(Oyz)$ / $(Ozx)$ | $z=0$ / $x=0$ / $y=0$ |

Hình chiếu vuông góc của $M(x; y; z)$ lên một mặt phẳng toạ độ có được bằng cách **đổi toạ độ còn lại thành $0$**; lên một trục thì giữ lại đúng toạ độ của trục đó. Khoảng cách từ $M$ đến mặt phẳng $(Oxy)$ là $|z|$, vì $M$ cách hình chiếu $(x; y; 0)$ của nó đúng $|z|$.

:::example Hình chiếu và khoảng cách đến các mặt phẳng toạ độ
Cho $M(2; -3; 5)$. Tìm hình chiếu của $M$ lên $(Oxy)$, $(Oyz)$, $(Ozx)$ và lên trục $Oz$. Tính khoảng cách từ $M$ đến mặt phẳng $(Oxy)$ và đến trục $Oz$.

**Lời giải.** Hình chiếu lên mỗi mặt phẳng toạ độ có toạ độ "thiếu" bằng $0$; hình chiếu lên trục $Oz$ chỉ giữ cao độ. Do đó các hình chiếu là

$$(Oxy):\ (2; -3; 0),\qquad (Oyz):\ (0; -3; 5),\qquad (Ozx):\ (2; 0; 5),\qquad Oz:\ (0; 0; 5).$$

Khoảng cách từ $M$ đến $(Oxy)$ là $|5|=5$. Gọi $H(0; 0; 5)$ là hình chiếu của $M$ trên $Oz$, ta có $\overrightarrow{HM}=(2; -3; 0)$. Do đó

$$MH=\sqrt{2^2+(-3)^2}=\sqrt{13}.$$

Vậy $M$ cách $(Oxy)$ là $5$ và cách trục $Oz$ là $\sqrt{13}\approx3{,}61$.
:::

## Toạ độ của vectơ $\overrightarrow{AB}$

Vì $\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}$, ta trừ từng thành phần theo $\vec{i}$, $\vec{j}$, $\vec{k}$. Với $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:

$$\overrightarrow{AB}=(x_B-x_A;\ y_B-y_A;\ z_B-z_A).$$

Vẫn là quy tắc quen thuộc: **điểm cuối trừ điểm đầu**. Hai vectơ bằng nhau khi và chỉ khi ba toạ độ tương ứng bằng nhau.

:::example Hai vectơ bằng nhau
Cho $A(1; 2; -1)$, $B(3; -1; 2)$, $C(-2; 0; 4)$, $D(0; -3; 7)$. Chứng minh rằng $\overrightarrow{AB}=\overrightarrow{CD}$. Bốn điểm $A$, $B$, $C$, $D$ là các đỉnh của hình bình hành nào?

**Lời giải.** Ta có

$$\overrightarrow{AB}=(3-1;\ -1-2;\ 2+1)=(2; -3; 3),\qquad \overrightarrow{CD}=(0+2;\ -3-0;\ 7-4)=(2; -3; 3).$$

Vì ba toạ độ tương ứng bằng nhau nên $\overrightarrow{AB}=\overrightarrow{CD}$. Ta có $\overrightarrow{AC}=(-3; -2; 5)$ không cùng phương với $\overrightarrow{AB}$ (vì $\frac{-3}{2}\neq\frac{-2}{-3}$) nên $C$ không nằm trên đường thẳng $AB$.

Vậy tứ giác $ABDC$ là hình bình hành (chú ý thứ tự đỉnh: $\overrightarrow{AB}=\overrightarrow{CD}$ cho $AB$ và $CD$ là hai cạnh đối, cùng chiều).
:::

## Khoảng cách, trung điểm và trọng tâm

Viết $\overrightarrow{AB}=a\vec{i}+b\vec{j}+c\vec{k}$ với $a=x_B-x_A$, $b=y_B-y_A$, $c=z_B-z_A$. Bình phương vô hướng, các tích chéo $\vec{i}\cdot\vec{j}$, $\vec{j}\cdot\vec{k}$, $\vec{k}\cdot\vec{i}$ bằng $0$, nên $AB^2=a^2+b^2+c^2$. Đây cũng là đường chéo của hình hộp có ba cạnh $|a|$, $|b|$, $|c|$.

:::theorem Khoảng cách, trung điểm, trọng tâm
Cho $A(x_A; y_A; z_A)$, $B(x_B; y_B; z_B)$, $C(x_C; y_C; z_C)$.
- Khoảng cách: $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.
- Trung điểm $M$ của $AB$: $M\left(\dfrac{x_A+x_B}{2};\ \dfrac{y_A+y_B}{2};\ \dfrac{z_A+z_B}{2}\right)$.
- Trọng tâm $G$ của tam giác $ABC$: $G\left(\dfrac{x_A+x_B+x_C}{3};\ \dfrac{y_A+y_B+y_C}{3};\ \dfrac{z_A+z_B+z_C}{3}\right)$.
:::

Hai công thức sau có được từ $\overrightarrow{OM}=\frac12(\overrightarrow{OA}+\overrightarrow{OB})$ và $\overrightarrow{OG}=\frac13(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC})$: ta lấy trung bình cộng từng toạ độ, giống trong mặt phẳng.

:::example Trung điểm, độ dài, trọng tâm
Cho $A(1; 0; 2)$, $B(3; 4; -2)$, $C(-1; 2; 3)$. Tìm trung điểm $M$ của $AB$, độ dài $AB$ và trọng tâm $G$ của tam giác $ABC$.

**Lời giải.** Theo công thức toạ độ trung điểm và trọng tâm, ta có

$$M\left(\frac{1+3}{2};\ \frac{0+4}{2};\ \frac{2-2}{2}\right)=M(2; 2; 0),\qquad G\left(\frac{1+3-1}{3};\ \frac{0+4+2}{3};\ \frac{2-2+3}{3}\right)=G(1; 2; 1).$$

Ta có $\overrightarrow{AB}=(2; 4; -4)$. Do đó

$$AB=\sqrt{4+16+16}=\sqrt{36}=6.$$

Vậy $M(2; 2; 0)$, $AB=6$ và $G(1; 2; 1)$.
:::

Bây giờ ta trả lời câu hỏi ở đầu bài.

:::example Đèn cách cảm biến bao xa?
Trong hệ toạ độ chọn như phần Khám phá (đơn vị: mét), đèn ở $L(2; 3; 2{,}5)$ và cảm biến ở $S(8; 6; 0)$. Tính khoảng cách $LS$ (làm tròn kết quả đến hàng phần trăm).

**Lời giải.** Ta có

$$\overrightarrow{LS}=(6; 3; -2{,}5),\qquad LS=\sqrt{36+9+6{,}25}=\sqrt{51{,}25}\approx7{,}16.$$

Ta thấy toạ độ thứ ba $-2{,}5$ của $\overrightarrow{LS}$ cho biết cảm biến thấp hơn đèn $2{,}5$ m; khi bình phương, dấu trừ không ảnh hưởng.

Vậy đèn cách cảm biến khoảng $7{,}16$ m.

**Nhìn lại.** Nếu đặt gốc toạ độ ở chính góc sàn có cảm biến, với các trục hướng vào trong phòng, thì kết quả có thay đổi không? Khi đó $S(0; 0; 0)$ và $L(6; 3; 2{,}5)$: các toạ độ đều khác, nhưng $LS=\sqrt{36+9+6{,}25}$ vẫn như cũ. Toạ độ phụ thuộc cách chọn hệ trục, còn khoảng cách là một đại lượng hình học, không phụ thuộc cách chọn đó. Vì vậy ta được phép chọn hệ trục sao cho tính toán gọn nhất.
:::

:::warning Những sai lầm thường gặp
- **Hình chiếu sai toạ độ.** Sai: hình chiếu của $M(2; -3; 5)$ lên $(Oxy)$ là $(0; 0; 5)$. Vì sao sai: đó là hình chiếu lên trục $Oz$. Đúng: lên $(Oxy)$ thì giữ $x$, $y$ và cho $z=0$: $(2; -3; 0)$.
- **Khoảng cách đến trục nhầm với khoảng cách đến mặt phẳng.** Sai: khoảng cách từ $M(2; -3; 5)$ đến trục $Oz$ bằng $5$. Đúng: $5$ là khoảng cách đến $(Oxy)$; đến trục $Oz$ là $\sqrt{2^2+3^2}=\sqrt{13}$.
- **Trừ ngược.** Sai: $\overrightarrow{AB}=(x_A-x_B;\ \dots)$. Đúng: điểm cuối trừ điểm đầu.
- **Quên một toạ độ khi tính khoảng cách.** Sai: $AB=\sqrt{2^2+4^2}$ với $\overrightarrow{AB}=(2; 4; -4)$. Đúng: cộng đủ ba bình phương, $AB=6$.
:::

## Thuật ngữ

:::terms
- hệ trục toạ độ Oxyz | Oxyz coordinate system
- gốc toạ độ | origin
- trục hoành, trục tung, trục cao | x-axis, y-axis, z-axis
- mặt phẳng toạ độ | coordinate plane
- vectơ đơn vị | unit vector
- toạ độ của điểm | coordinates of a point
- hoành độ, tung độ, cao độ | x-, y- and z-coordinate
- hình chiếu vuông góc | orthogonal projection
- trung điểm | midpoint
- trọng tâm | centroid
:::

## Tóm tắt

- $Oxyz$: ba trục đôi một vuông góc, vectơ đơn vị $\vec{i}$, $\vec{j}$, $\vec{k}$ dài $1$, đôi một vuông góc.
- $M(x; y; z)\iff\overrightarrow{OM}=x\vec{i}+y\vec{j}+z\vec{k}$; $\vec{a}=(x; y; z)\iff\vec{a}=x\vec{i}+y\vec{j}+z\vec{k}$.
- Trên $(Oxy)$: $z=0$; trên $Ox$: $y=z=0$. Hình chiếu lên $(Oxy)$ của $(x; y; z)$ là $(x; y; 0)$.
- $\overrightarrow{AB}=(x_B-x_A;\ y_B-y_A;\ z_B-z_A)$; $AB$ là căn của tổng ba bình phương.
- Trung điểm, trọng tâm: trung bình cộng từng toạ độ.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
a) Tìm toạ độ điểm $M$ biết $\overrightarrow{OM}=2\vec{i}-3\vec{j}+\vec{k}$.

b) Tìm toạ độ của vectơ $\vec{a}=-\vec{i}+4\vec{k}$.

::hint
**Kiến thức:** $\overrightarrow{OM}=x\vec{i}+y\vec{j}+z\vec{k}\iff M(x; y; z)$; thành phần vắng mặt có hệ số $0$.

**Gợi ý các bước:**
1. Đọc lần lượt hệ số của $\vec{i}$, $\vec{j}$, $\vec{k}$.
2. b) Hệ số của $\vec{j}$ bằng $0$.

::solution
a) Vì $\overrightarrow{OM}=2\vec{i}+(-3)\vec{j}+1\cdot\vec{k}$ nên $M(2; -3; 1)$.

b) Vì $\vec{a}=-1\cdot\vec{i}+0\cdot\vec{j}+4\vec{k}$ nên $\vec{a}=(-1; 0; 4)$.

Vậy $M(2; -3; 1)$ và $\vec{a}=(-1; 0; 4)$.

**Đáp số.** a) $M(2; -3; 1)$; b) $\vec{a}=(-1; 0; 4)$.
:::

:::exercise
Cho $N(4; -1; 3)$. Tìm hình chiếu của $N$ lên các mặt phẳng $(Oxy)$, $(Oyz)$, $(Ozx)$ và lên trục $Oy$. Tính khoảng cách từ $N$ đến mặt phẳng $(Ozx)$.

::hint
**Kiến thức:** hình chiếu lên một mặt phẳng toạ độ: đổi toạ độ còn lại thành $0$; mặt phẳng $(Ozx)$ là $y=0$.

**Gợi ý các bước:**
1. Viết ba hình chiếu lên ba mặt phẳng.
2. Lên trục $Oy$: chỉ giữ tung độ.
3. Khoảng cách đến $(Ozx)$ là $|y|$.

::solution
Hình chiếu của $N$ lên $(Oxy)$, $(Oyz)$, $(Ozx)$ và trục $Oy$ lần lượt là $(4; -1; 0)$, $(0; -1; 3)$, $(4; 0; 3)$ và $(0; -1; 0)$.

Vậy khoảng cách từ $N$ đến $(Ozx)$ là $|-1|=1$.

**Đáp số.** $(4; -1; 0)$, $(0; -1; 3)$, $(4; 0; 3)$, $(0; -1; 0)$; khoảng cách bằng $1$.
:::

:::exercise
Cho $A(2; -1; 3)$ và $B(-1; 3; 3)$. Tìm toạ độ của $\overrightarrow{AB}$ và độ dài $AB$.

::hint
**Kiến thức:** $\overrightarrow{AB}=(x_B-x_A;\ y_B-y_A;\ z_B-z_A)$; $AB=\sqrt{a^2+b^2+c^2}$.

**Gợi ý các bước:**
1. Trừ từng toạ độ.
2. Cộng ba bình phương rồi khai căn.

::solution
Ta có
$$\overrightarrow{AB}=(-3; 4; 0),\qquad AB=\sqrt{9+16+0}=5.$$
Vậy $\overrightarrow{AB}=(-3; 4; 0)$ và $AB=5$.

**Đáp số.** $\overrightarrow{AB}=(-3; 4; 0)$; $AB=5$.
:::

:::exercise
Cho $A(2; 1; -3)$, $B(0; 5; 1)$, $C(4; -3; 5)$. Tìm trung điểm $M$ của $AB$ và trọng tâm $G$ của tam giác $ABC$.

::hint
**Kiến thức:** trung điểm, trọng tâm: trung bình cộng từng toạ độ.

**Gợi ý các bước:**
1. Cộng từng toạ độ của $A$, $B$ rồi chia cho $2$.
2. Cộng từng toạ độ của $A$, $B$, $C$ rồi chia cho $3$.

::solution
Theo công thức toạ độ trung điểm và trọng tâm, ta có
$$M\left(\frac{2+0}{2};\ \frac{1+5}{2};\ \frac{-3+1}{2}\right)=M(1; 3; -1),\qquad G\left(\frac{6}{3};\ \frac{3}{3};\ \frac{3}{3}\right)=G(2; 1; 1).$$

**Đáp số.** $M(1; 3; -1)$; $G(2; 1; 1)$.
:::

:::exercise
Cho $A(1; -2; 3)$ và $M(2; 0; 1)$. Tìm điểm $N$ sao cho $M$ là trung điểm của $AN$.

::hint
**Kiến thức:** $M$ là trung điểm $AN$ $\iff$ $x_M=\dfrac{x_A+x_N}{2}$ (và tương tự), tức $x_N=2x_M-x_A$.

**Gợi ý các bước:**
1. Nhân đôi toạ độ của $M$.
2. Trừ đi toạ độ của $A$.

::solution
Vì $M$ là trung điểm của $AN$ nên $x_N=2x_M-x_A$, và tương tự với $y_N$, $z_N$. Do đó
$$N(2\cdot2-1;\ 2\cdot0+2;\ 2\cdot1-3)=N(3; 2; -1).$$
**Kiểm tra.** Trung điểm của $A(1; -2; 3)$ và $N(3; 2; -1)$ là $(2; 0; 1)=M$.

Vậy $N(3; 2; -1)$.

**Đáp số.** $N(3; 2; -1)$.
:::

:::exercise
Một trạm điều khiển đặt tại gốc $O$ của hệ toạ độ $Oxyz$ (đơn vị: mét; $Ox$ hướng đông, $Oy$ hướng bắc, $Oz$ hướng lên). Một flycam đang bay tại điểm $P(120; -50; 60)$. Hỏi flycam cách trạm bao nhiêu mét (làm tròn kết quả đến hàng đơn vị)?

::hint
**Kiến thức:** $OP=\sqrt{x^2+y^2+z^2}$.

**Gợi ý các bước:**
1. Bình phương ba toạ độ và cộng lại.
2. Khai căn rồi làm tròn.

::solution
$$OP=\sqrt{120^2+(-50)^2+60^2}=\sqrt{14400+2500+3600}=\sqrt{20500}\approx143{,}18.$$
Vậy flycam cách trạm khoảng $143$ m.

**Đáp số.** $143$.
:::

:::exercise
Trong không gian $Oxyz$, cho điểm $M(3; -4; 12)$. Xét tính đúng sai của các mệnh đề sau:

a) Hình chiếu của $M$ lên mặt phẳng $(Oxy)$ là $(3; -4; 0)$.

b) Khoảng cách từ $M$ đến mặt phẳng $(Oyz)$ bằng $4$.

c) $OM=13$.

d) Khoảng cách từ $M$ đến trục $Ox$ bằng $4$.

::hint
**Kiến thức:** khoảng cách đến $(Oyz)$ là $|x|$; khoảng cách đến trục $Ox$ là $\sqrt{y^2+z^2}$.

**Gợi ý các bước:**
1. Viết hình chiếu lên $(Oxy)$.
2. Tính $OM$ từ ba toạ độ.
3. Xác định đúng toạ độ nào dùng cho mỗi khoảng cách.

::solution
a) **Đúng.** Hình chiếu lên $(Oxy)$ giữ nguyên $x$, $y$ và có $z=0$.

b) **Sai.** Khoảng cách đến $(Oyz)$ là $|x|=3$.

c) **Đúng.** Ta có $OM=\sqrt{9+16+144}=\sqrt{169}=13$.

d) **Sai.** Hình chiếu của $M$ lên $Ox$ là $H(3; 0; 0)$ nên $MH=\sqrt{16+144}=\sqrt{160}=4\sqrt{10}$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Hình lập phương $ABCD.A'B'C'D'$ cạnh $4$ được đặt vào hệ $Oxyz$ sao cho $A$ trùng $O$, $B(4; 0; 0)$, $D(0; 4; 0)$, $A'(0; 0; 4)$. Tìm toạ độ $C'$, tâm $I$ của mặt $A'B'C'D'$ và độ dài $IB$.

::hint
**Kiến thức:** quy tắc hình hộp $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}$; tâm hình vuông là trung điểm đường chéo.

**Gợi ý các bước:**
1. Cộng ba vectơ cạnh để có $C'$.
2. $I$ là trung điểm của $A'C'$.
3. Tính $IB$ bằng công thức khoảng cách.

::solution
Theo quy tắc hình hộp, $\overrightarrow{AC'}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=(4; 0; 0)+(0; 4; 0)+(0; 0; 4)=(4; 4; 4)$ nên $C'(4; 4; 4)$. Tâm $I$ là trung điểm của $A'(0; 0; 4)$ và $C'$ nên $I(2; 2; 4)$. Do đó
$$IB=\sqrt{(4-2)^2+(0-2)^2+(0-4)^2}=\sqrt{24}=2\sqrt6.$$

**Đáp số.** $C'(4; 4; 4)$, $I(2; 2; 4)$, $IB=2\sqrt6\approx4{,}90$.
:::

:::exercise
(Ôn lại [Vectơ trong mặt phẳng toạ độ](lesson:vectors-in-coordinates).) Trong mặt phẳng $Oxy$, cho $A(1; 2)$ và $B(4; 6)$.

a) Tính $AB$ theo công thức của lớp 10.

b) Coi $A$, $B$ là các điểm $A(1; 2; 0)$, $B(4; 6; 0)$ của mặt phẳng $(Oxy)$ trong không gian. Nâng $B$ lên thẳng đứng thành $B'(4; 6; 12)$. Tính $AB'$.

::hint
**Kiến thức:** $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$ trong mặt phẳng; trong không gian có thêm $(z_B-z_A)^2$.

**Gợi ý các bước:**
1. a) Tính hai hiệu toạ độ.
2. b) Thêm hiệu cao độ $12$ và để ý rằng $ABB'$ vuông tại $B$.

::solution
a) Ta có $\overrightarrow{AB}=(3; 4)$ nên $AB=\sqrt{3^2+4^2}=5$.

b) Ta có $\overrightarrow{AB'}=(3; 4; 12)$ nên $AB'=\sqrt{9+16+144}=13$. Đây đúng là định lí Pythagore trong tam giác $ABB'$ vuông tại $B$: $5^2+12^2=13^2$.

**Đáp số.** a) $AB=5$; b) $AB'=13$.
:::

:::exercise Thử thách
Tìm điểm $M$ trên trục $Oz$ cách đều hai điểm $A(1; 2; 3)$ và $B(-1; 0; 5)$.

::hint
**Kiến thức:** điểm trên $Oz$ có dạng $M(0; 0; t)$; $MA=MB\iff MA^2=MB^2$.

**Gợi ý các bước:**
1. Viết $MA^2$ và $MB^2$ theo $t$.
2. Cho bằng nhau; các số hạng $t^2$ triệt tiêu.

::solution
Vì $M$ thuộc trục $Oz$ nên $M(0; 0; t)$. Ta có
$$MA^2=1+4+(t-3)^2=t^2-6t+14,\qquad MB^2=1+0+(t-5)^2=t^2-10t+26.$$
Vì $MA=MB$ nên
$$t^2-6t+14=t^2-10t+26\iff 4t=12\iff t=3.$$
**Kiểm tra.** $MA=\sqrt{1+4+0}=\sqrt5$ và $MB=\sqrt{1+0+4}=\sqrt5$.

Vậy $M(0; 0; 3)$.

**Đáp số.** $M(0; 0; 3)$.
:::

## Kiểm tra mini

:::quiz
::mc
Trong không gian $Oxyz$, cho điểm $M$ thoả mãn $\overrightarrow{OM}=3\vec{i}-\vec{k}$. Toạ độ của điểm $M$ là
A. $(0; 3; -1)$.
B. $(3; -1; 0)$.
C. $(3; 0; -1)$.
D. $(3; 0; 1)$.
::key C
Vì hệ số của $\vec{i}$, $\vec{j}$, $\vec{k}$ lần lượt là $3$, $0$, $-1$ nên $M(3; 0; -1)$. Phương án B quên rằng $\vec{j}$ vắng mặt nghĩa là tung độ bằng $0$.

::mc
Hình chiếu vuông góc của điểm $A(2; -5; 4)$ lên mặt phẳng $(Oyz)$ là điểm
A. $(2; 0; 0)$.
B. $(0; -5; 4)$.
C. $(2; -5; 0)$.
D. $(2; 0; 4)$.
::key B
Vì mặt phẳng $(Oyz)$ có phương trình $x=0$ nên hình chiếu giữ nguyên $y$, $z$ và có $x=0$. Phương án A là hình chiếu lên trục $Ox$, phương án C là hình chiếu lên $(Oxy)$.

::mc
Cho hai điểm $A(1; -2; 3)$ và $B(3; 0; -1)$. Trung điểm $I$ của đoạn thẳng $AB$ là
A. $I(2; 2; -4)$.
B. $I(1; 1; -2)$.
C. $I(4; -2; 2)$.
D. $I(2; -1; 1)$.
::key D
Theo công thức toạ độ trung điểm, ta có $I\left(\dfrac{1+3}{2}; \dfrac{-2+0}{2}; \dfrac{3-1}{2}\right)$. Phương án B là $\dfrac12\overrightarrow{AB}$, phương án C quên chia cho $2$, phương án A là $\overrightarrow{AB}$.

::mc
Khoảng cách từ điểm $M(3; -4; 6)$ đến trục $Oz$ bằng
A. $5$.
B. $6$.
C. $\sqrt{61}$.
D. $\sqrt{52}$.
::key A
Hình chiếu của $M$ lên $Oz$ là $H(0; 0; 6)$ nên $MH=\sqrt{3^2+4^2}=5$. Phương án B là khoảng cách đến $(Oxy)$, phương án C là $OM$, phương án D là khoảng cách đến trục $Ox$.

::tf
Trong không gian $Oxyz$, cho $A(1; 2; -1)$, $B(3; -2; 3)$, $C(-1; 3; 1)$. Xét tính đúng sai của các mệnh đề sau:
a) $\overrightarrow{AB}=(2; -4; 4)$.
b) $AB=6$.
c) Trọng tâm của tam giác $ABC$ là $G(3; 3; 3)$.
d) Điểm $D$ để $ABCD$ là hình bình hành là $D(-3; 7; -3)$.
::key Đ Đ S Đ
a) Đúng: lấy toạ độ điểm cuối trừ toạ độ điểm đầu, ta được kết quả trên. b) Đúng: ta có $AB=\sqrt{4+16+16}=6$. c) Sai: trọng tâm là $G(1; 1; 1)$; $(3; 3; 3)$ là tổng các toạ độ, chưa chia cho $3$. d) Đúng: vì $ABCD$ là hình bình hành khi và chỉ khi $\overrightarrow{AB}=\overrightarrow{DC}$ nên $D=(-1-2; 3+4; 1-4)=(-3; 7; -3)$.

::sa
Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 0)$, $B(0; 2; 0)$, $C(0; 0; 2)$. Tính chu vi tam giác $ABC$ (làm tròn kết quả đến hàng phần mười).
::key 7,3
Ta có $AB=\sqrt{1+4}=\sqrt5$, $AC=\sqrt{1+4}=\sqrt5$, $BC=\sqrt{4+4}=2\sqrt2$. Vậy chu vi là $2\sqrt5+2\sqrt2\approx7{,}30$, làm tròn được $7{,}3$.

::sa
Trong hệ trục $Oxyz$ gắn với một sân tập (đơn vị: mét), hai flycam đang ở các điểm $P(10; 20; 15)$ và $Q(40; -20; 45)$. Hỏi hai flycam cách nhau bao nhiêu mét (làm tròn kết quả đến hàng phần mười)?
::key 58,3
Ta có $\overrightarrow{PQ}=(30; -40; 30)$ nên $PQ=\sqrt{900+1600+900}=\sqrt{3400}\approx58{,}31$, làm tròn được $58{,}3$ m.
:::
