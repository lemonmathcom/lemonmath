---
title: Công thức tính góc trong không gian
description: Tính góc giữa hai đường thẳng, giữa đường thẳng và mặt phẳng, giữa hai mặt phẳng bằng toạ độ; áp dụng cho hình lập phương, hình chóp và bài toán thực tế.
minutes: 22
---

:::goals
- Tính góc giữa hai đường thẳng: $\cos\varphi=\dfrac{|\vec{u}_1\cdot\vec{u}_2|}{|\vec{u}_1||\vec{u}_2|}$.
- Tính góc giữa đường thẳng và mặt phẳng: $\sin\varphi=\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$.
- Tính góc giữa hai mặt phẳng: $\cos\varphi=\dfrac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1||\vec{n}_2|}$.
- Đặt hình lập phương, hình chóp vào hệ $Oxyz$ để tính góc.
:::

Một cột ăng-ten cao $10$ m được giữ bằng dây cáp nối từ đỉnh cột xuống một móc neo trên mặt đất. Đặt chân cột ở gốc toạ độ, đơn vị mét: đỉnh cột là $T(0; 0; 10)$, móc neo là $A(6; 8; 0)$. Dây cáp hợp với mặt đất một góc bao nhiêu độ?

Ở bài [Biểu thức toạ độ của các phép toán vectơ](lesson:vector-coordinate-operations) ta đã tính góc giữa hai vectơ. Bài này dùng công thức đó, thêm dấu giá trị tuyệt đối, để tính góc giữa đường thẳng và mặt phẳng.

:::diagram Cột ăng-ten và dây cáp
alt: Hệ trục Oxyz; cột OT trên trục Oz, dây cáp TA nối đỉnh cột với điểm A trên mặt đất, đoạn OA nét đứt là hình chiếu của dây cáp, cung góc tại A
point O 0,0 above-left
point X -2.4,-2.4 left "x"
point Y 4.4,0 right "y"
point Z 0,4 left "z"
point T 0,3 right
point A 2.2,-1.8 below-right
arrow O X
arrow O Y
arrow O Z
segment T A
segment O A dashed
right T O A
angle O A T "φ"
:::

## Góc giữa đường thẳng và mặt phẳng

### Khám phá: hai cách tính góc của dây cáp

**Cách 1: tam giác vuông.** Hình chiếu của dây $TA$ trên mặt đất là $OA$, với $OA=\sqrt{36+64}=10$. Tam giác $TOA$ vuông tại $O$ có $OT=OA=10$, nên $\widehat{OAT}=45^\circ$.

**Cách 2: vectơ.** Lấy $\vec{u}=\overrightarrow{TA}=(6; 8; -10)$ và vectơ pháp tuyến của mặt đất $\vec{k}=(0; 0; 1)$. Ta có
$$\cos(\vec{u}, \vec{k})=\frac{-10}{\sqrt{200}\cdot1}=-\frac{\sqrt2}{2},\qquad (\vec{u}, \vec{k})=135^\circ.$$
Góc giữa giá của $\vec{u}$ và đường vuông góc với mặt đất là $180^\circ-135^\circ=45^\circ$. Góc cần tìm bù với góc đó tới $90^\circ$: $90^\circ-45^\circ=45^\circ$. Vì $\sin\varphi=\cos(90^\circ-\varphi)$, ta có thể tính thẳng $\sin\varphi=\dfrac{|\vec{u}\cdot\vec{k}|}{|\vec{u}||\vec{k}|}=\dfrac{\sqrt2}{2}$.

:::theorem Góc giữa đường thẳng và mặt phẳng
Cho đường thẳng $\Delta$ có vectơ chỉ phương $\vec{u}$ và mặt phẳng $(P)$ có vectơ pháp tuyến $\vec{n}$. Góc $\varphi$ giữa $\Delta$ và $(P)$ ($0^\circ\le\varphi\le90^\circ$) thoả mãn
$$\sin\varphi=\frac{|\vec{u}\cdot\vec{n}|}{|\vec{u}|\cdot|\vec{n}|}.$$
:::

**Vì sao đúng?** Góc giữa $\Delta$ và $(P)$ là góc giữa $\Delta$ và hình chiếu của nó trên $(P)$. Góc này cộng với góc giữa $\Delta$ và đường vuông góc với $(P)$ bằng $90^\circ$. Góc giữa hai đường thẳng $\Delta$ và giá của $\vec{n}$ có cosin bằng $\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$, và cosin của $90^\circ-\varphi$ chính là $\sin\varphi$.

## Góc giữa hai đường thẳng và giữa hai mặt phẳng

Góc giữa hai đường thẳng luôn từ $0^\circ$ đến $90^\circ$, còn góc giữa hai vectơ chỉ phương có thể tù. Vì vậy ta lấy giá trị tuyệt đối của tích vô hướng. Góc giữa hai mặt phẳng bằng góc giữa hai đường thẳng lần lượt vuông góc với chúng, nên ta dùng hai vectơ pháp tuyến.

:::theorem Hai công thức góc
- Hai đường thẳng $\Delta_1$, $\Delta_2$ có vectơ chỉ phương $\vec{u}_1$, $\vec{u}_2$ tạo với nhau góc $\varphi$ ($0^\circ\le\varphi\le90^\circ$) với
$$\cos\varphi=\frac{|\vec{u}_1\cdot\vec{u}_2|}{|\vec{u}_1|\cdot|\vec{u}_2|}.$$
- Hai mặt phẳng $(P_1)$, $(P_2)$ có vectơ pháp tuyến $\vec{n}_1$, $\vec{n}_2$ tạo với nhau góc $\varphi$ ($0^\circ\le\varphi\le90^\circ$) với
$$\cos\varphi=\frac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1|\cdot|\vec{n}_2|}.$$
:::

:::example Góc giữa hai đường thẳng
Tính góc giữa $d_1: \begin{cases}x=1+t\\ y=2-t\\ z=3\end{cases}$ và $d_2: \begin{cases}x=2\\ y=s\\ z=1-s.\end{cases}$

**Lời giải.** Đọc vectơ chỉ phương từ các hệ số của tham số: $\vec{u}_1=(1; -1; 0)$, $\vec{u}_2=(0; 1; -1)$. Khi đó:

$$\vec{u}_1\cdot\vec{u}_2=0-1+0=-1,\qquad \cos\varphi=\frac{|-1|}{\sqrt2\cdot\sqrt2}=\frac12.$$

Vậy góc giữa $d_1$ và $d_2$ bằng $60^\circ$.

**Kiểm tra.** Góc giữa hai *vectơ* $\vec{u}_1$, $\vec{u}_2$ là $120^\circ$ (cosin bằng $-\dfrac12$); góc giữa hai *đường thẳng* là $180^\circ-120^\circ=60^\circ$.
:::

Trong hình học không gian, ta đặt hình vào hệ trục sao cho nhiều toạ độ bằng $0$, rồi dùng các công thức trên.

:::example Hai đường chéo mặt của hình lập phương
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Tính góc giữa hai đường thẳng $AB'$ và $BC'$.

**Lời giải.** Đặt $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A'(0; 0; 1)$. Khi đó $B'(1; 0; 1)$, $C'(1; 1; 1)$ và

$$\overrightarrow{AB'}=(1; 0; 1),\qquad \overrightarrow{BC'}=(0; 1; 1),\qquad \cos\varphi=\frac{|0+0+1|}{\sqrt2\cdot\sqrt2}=\frac12.$$

Vậy góc giữa $AB'$ và $BC'$ bằng $60^\circ$.
:::

Hình chóp có một cạnh bên vuông góc với đáy cũng đặt được vào hệ trục rất gọn.

:::diagram Hình chóp $S.ABCD$ có $SA$ vuông góc với đáy
alt: Hình chóp S.ABCD đáy hình vuông, đỉnh S thẳng phía trên A, các cạnh khuất AD, DC, SD và đường chéo AC vẽ nét đứt
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point S 0,3.2 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A C dashed
segment S A
segment S B
segment S C
segment S D dashed
right S A B
:::

:::example Góc giữa cạnh bên và mặt phẳng trong hình chóp
Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $2$, $SA$ vuông góc với đáy và $SA=2$. Tính góc giữa $SC$ và mặt đáy, và góc giữa $SB$ và mặt phẳng $(SAC)$ (làm tròn đến hàng phần mười của độ).

**Lời giải.** Đặt $A(0; 0; 0)$, $B(2; 0; 0)$, $D(0; 2; 0)$, $S(0; 0; 2)$, nên $C(2; 2; 0)$. Mặt đáy là $(Oxy)$ với vectơ pháp tuyến $(0; 0; 1)$:

$$\overrightarrow{SC}=(2; 2; -2),\qquad \sin\varphi_1=\frac{|-2|}{\sqrt{12}\cdot1}=\frac{1}{\sqrt3},\qquad \varphi_1\approx35{,}3^\circ.$$

Mặt phẳng $(SAC)$ chứa $Oz$ và điểm $C(2; 2; 0)$, nên có phương trình $x-y=0$, với $\vec{n}=(1; -1; 0)$. Với $\overrightarrow{SB}=(2; 0; -2)$:

$$\sin\varphi_2=\frac{|2-0+0|}{\sqrt8\cdot\sqrt2}=\frac{2}{4}=\frac12,\qquad \varphi_2=30^\circ.$$

Vậy $SC$ tạo với đáy góc khoảng $35{,}3^\circ$, và $SB$ tạo với $(SAC)$ góc $30^\circ$.
:::

Với hai mặt phẳng, ta chỉ cần hai vectơ pháp tuyến.

:::example Góc giữa hai mặt phẳng
a) Tính góc giữa $(P): x+2y-2z+1=0$ và $(Q): 2x-y+2z-3=0$ (làm tròn đến hàng phần mười của độ).

b) Trong hình chóp ở ví dụ trước, tính góc giữa mặt bên $(SBC)$ và mặt đáy.

**Lời giải.** a) $\vec{n}_P=(1; 2; -2)$, $\vec{n}_Q=(2; -1; 2)$, đều có độ dài $3$:

$$\cos\varphi=\frac{|2-2-4|}{3\cdot3}=\frac49,\qquad \varphi\approx63{,}6^\circ.$$

b) Mặt phẳng $(SBC)$ đi qua $B(2; 0; 0)$, $C(2; 2; 0)$, $S(0; 0; 2)$. Nó chứa đường $BC$ song song với $Oy$, nên có dạng $Ax+Cz+D=0$; thay $B$ và $S$ ta được $(SBC): x+z-2=0$, với $\vec{n}=(1; 0; 1)$:

$$\cos\varphi=\frac{|0+0+1|}{\sqrt2\cdot1}=\frac{\sqrt2}{2},\qquad \varphi=45^\circ.$$

Vậy a) góc khoảng $63{,}6^\circ$; b) góc $45^\circ$.
:::

Ví dụ cuối là một bài toán thực tế nhiều bước, nên ta làm theo bốn bước.

:::example Mái lều hình chóp
Một chiếc lều có dạng hình chóp tứ giác đều: đáy là hình vuông cạnh $4$ m, đỉnh lều cao $3$ m so với tâm đáy. Tính góc giữa một mặt mái và mặt đất, và góc giữa một cạnh mái với mặt đất (làm tròn đến hàng phần mười của độ).

**Lời giải.**

*Hiểu đề.* Cần một góc giữa hai mặt phẳng và một góc giữa đường thẳng và mặt phẳng.

*Tìm cách giải.* Đặt tâm đáy ở gốc: $B(2; -2; 0)$, $C(2; 2; 0)$, đỉnh $S(0; 0; 3)$; mặt đất là $(Oxy)$, vectơ pháp tuyến $\vec{k}=(0; 0; 1)$.

*Giải.* Mặt mái $(SBC)$ chứa $BC$ song song với $Oy$, nên có dạng $Ax+Cz+D=0$. Thay $B$ và $S$: $(SBC): 3x+2z-6=0$. Khi đó:

$$\cos\varphi_1=\frac{|2|}{\sqrt{9+4}\cdot1}=\frac{2}{\sqrt{13}},\qquad \varphi_1\approx56{,}3^\circ.$$

Với cạnh $SC$, $\overrightarrow{SC}=(2; 2; -3)$:

$$\sin\varphi_2=\frac{|-3|}{\sqrt{17}\cdot1}=\frac{3}{\sqrt{17}},\qquad \varphi_2\approx46{,}7^\circ.$$

Vậy mặt mái nghiêng khoảng $56{,}3^\circ$ và cạnh mái nghiêng khoảng $46{,}7^\circ$ so với mặt đất.

*Nhìn lại.* Cạnh mái thoải hơn mặt mái ($46{,}7^\circ<56{,}3^\circ$), hợp lí vì cạnh mái đi xa hơn theo phương ngang ($2\sqrt2$ m so với $2$ m) để lên cùng độ cao $3$ m.
:::

:::warning Những sai lầm thường gặp
- **Quên dấu giá trị tuyệt đối.** Sai: góc giữa $d_1$, $d_2$ ở Ví dụ 1 là $120^\circ$. Vì sao sai: góc giữa hai đường thẳng không vượt quá $90^\circ$. Đúng: $\cos\varphi=\dfrac{|-1|}{2}$, $\varphi=60^\circ$.
- **Dùng côsin cho góc giữa đường thẳng và mặt phẳng.** Sai: $\cos\varphi=\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$ cho $SB$ và $(SAC)$, ra $60^\circ$. Vì sao sai: biểu thức đó là côsin của góc giữa $SB$ và đường vuông góc với mặt phẳng. Đúng: dùng $\sin\varphi$, được $30^\circ$.
- **Dùng vectơ chỉ phương thay cho vectơ pháp tuyến của mặt phẳng.** Sai: lấy $\overrightarrow{BC}$ làm "vectơ của mặt phẳng $(SBC)$". Vì sao sai: $\overrightarrow{BC}$ nằm trong mặt phẳng, không vuông góc với nó. Đúng: tìm phương trình mặt phẳng, rồi đọc vectơ pháp tuyến.
- **Nhầm chế độ độ và radian trên máy tính.** Sai: $\arccos\dfrac49\approx1{,}11$ rồi ghi $1{,}11^\circ$. Đúng: chuyển máy tính sang chế độ độ, được $63{,}6^\circ$.
:::

## Thuật ngữ

:::terms
- góc giữa hai đường thẳng | angle between two lines
- góc giữa đường thẳng và mặt phẳng | angle between a line and a plane
- góc giữa hai mặt phẳng | angle between two planes
- vectơ chỉ phương | direction vector
- vectơ pháp tuyến | normal vector
- hình chiếu vuông góc | orthogonal projection
- hình chóp tứ giác đều | regular square pyramid
- góc nhị diện | dihedral angle
:::

## Tóm tắt

- Hai đường thẳng: $\cos\varphi=\dfrac{|\vec{u}_1\cdot\vec{u}_2|}{|\vec{u}_1||\vec{u}_2|}$.
- Đường thẳng và mặt phẳng: $\sin\varphi=\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$ (sin, vì góc với pháp tuyến bằng $90^\circ-\varphi$).
- Hai mặt phẳng: $\cos\varphi=\dfrac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1||\vec{n}_2|}$.
- Mọi góc trên đều thuộc đoạn $[0^\circ; 90^\circ]$, nhờ dấu giá trị tuyệt đối.
- Mặt đất, mặt đáy: $(Oxy)$ với $\vec{k}=(0; 0; 1)$.
- Hình lập phương, hình chóp: chọn gốc ở một đỉnh hoặc tâm đáy để nhiều toạ độ bằng $0$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính góc giữa $d_1: x=1+t$, $y=2t$, $z=-t$ và $d_2: \dfrac{x-1}{2}=\dfrac{y}{-1}=\dfrac{z+3}{1}$ (làm tròn đến hàng phần mười của độ).

::hint
**Kiến thức:** $\cos\varphi=\dfrac{|\vec{u}_1\cdot\vec{u}_2|}{|\vec{u}_1||\vec{u}_2|}$.

**Gợi ý các bước:**
1. Đọc $\vec{u}_1=(1; 2; -1)$, $\vec{u}_2=(2; -1; 1)$.
2. Tính tích vô hướng và hai độ dài.

::solution
$$\vec{u}_1\cdot\vec{u}_2=2-2-1=-1,\qquad \cos\varphi=\frac{1}{\sqrt6\cdot\sqrt6}=\frac16,\qquad \varphi\approx80{,}4^\circ.$$

**Đáp số.** Khoảng $80{,}4^\circ$.
:::

:::exercise
Tính góc giữa đường thẳng $d: x=1+t$, $y=t$, $z=2$ và mặt phẳng $(P): x+z-5=0$.

::hint
**Kiến thức:** $\sin\varphi=\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$.

**Gợi ý các bước:**
1. $\vec{u}=(1; 1; 0)$, $\vec{n}=(1; 0; 1)$.
2. Tính $\sin\varphi$.

::solution
$$\sin\varphi=\frac{|1+0+0|}{\sqrt2\cdot\sqrt2}=\frac12,\qquad\varphi=30^\circ.$$

**Đáp số.** $30^\circ$.
:::

:::exercise
Tính góc giữa hai mặt phẳng $(P): 2x-y+z-1=0$ và $(Q): x+y+2z+3=0$.

::hint
**Kiến thức:** $\cos\varphi=\dfrac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1||\vec{n}_2|}$.

**Gợi ý các bước:**
1. $\vec{n}_1=(2; -1; 1)$, $\vec{n}_2=(1; 1; 2)$.
2. Tính côsin.

::solution
$$\cos\varphi=\frac{|2-1+2|}{\sqrt6\cdot\sqrt6}=\frac36=\frac12,\qquad\varphi=60^\circ.$$

**Đáp số.** $60^\circ$.
:::

:::exercise
Tính góc giữa đường thẳng $\Delta: \dfrac{x-1}{2}=\dfrac{y+1}{-2}=\dfrac{z}{1}$ và mặt phẳng $(Oxy)$ (làm tròn đến hàng phần mười của độ).

::hint
**Kiến thức:** $(Oxy)$ có vectơ pháp tuyến $\vec{k}=(0; 0; 1)$.

**Gợi ý các bước:**
1. $\vec{u}=(2; -2; 1)$, $|\vec{u}|=3$.
2. Tính $\sin\varphi$.

::solution
$$\sin\varphi=\frac{|1|}{3\cdot1}=\frac13,\qquad\varphi\approx19{,}5^\circ.$$

**Đáp số.** Khoảng $19{,}5^\circ$.
:::

:::exercise
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$, đặt $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A'(0; 0; 1)$. Mỗi khẳng định sau đúng hay sai?

a) Góc giữa hai đường thẳng $AC$ và $B'D'$ bằng $90^\circ$.

b) Góc giữa đường thẳng $A'C$ và mặt phẳng $(ABCD)$ bằng $45^\circ$.

c) Góc $\varphi$ giữa mặt phẳng $(A'BD)$ và mặt phẳng $(ABCD)$ thoả mãn $\cos\varphi=\dfrac{1}{\sqrt3}$.

d) Góc giữa hai đường thẳng $AC'$ và $BD$ bằng $60^\circ$.

::hint
**Kiến thức:** ba công thức góc; $(A'BD): x+y+z-1=0$ (phương trình theo đoạn chắn).

**Gợi ý các bước:**
1. Viết toạ độ các vectơ $\overrightarrow{AC}$, $\overrightarrow{B'D'}$, $\overrightarrow{A'C}$, $\overrightarrow{AC'}$, $\overrightarrow{BD}$.
2. Áp dụng đúng công thức cho từng loại góc.

::solution
a) **Đúng.** $\overrightarrow{AC}=(1; 1; 0)$, $\overrightarrow{B'D'}=(-1; 1; 0)$, tích vô hướng bằng $0$.

b) **Sai.** $\overrightarrow{A'C}=(1; 1; -1)$, $\sin\varphi=\dfrac{1}{\sqrt3}$, nên $\varphi\approx35{,}3^\circ$.

c) **Đúng.** $\vec{n}=(1; 1; 1)$ và $\vec{k}=(0; 0; 1)$: $\cos\varphi=\dfrac{1}{\sqrt3}$.

d) **Sai.** $\overrightarrow{AC'}=(1; 1; 1)$, $\overrightarrow{BD}=(-1; 1; 0)$, tích vô hướng bằng $0$, nên góc bằng $90^\circ$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Một đường dốc cho xe lăn là mặt phẳng nghiêng: cứ đi $12$ m theo phương ngang thì lên cao $1$ m. Đặt mặt dốc là $(P): x-12z=0$ (đơn vị: mét). Tính góc giữa mặt dốc và mặt đất (đơn vị: độ, làm tròn đến hàng phần mười).

::hint
**Kiến thức:** góc giữa hai mặt phẳng; mặt đất là $(Oxy)$.

**Gợi ý các bước:**
1. $\vec{n}_P=(1; 0; -12)$, $\vec{k}=(0; 0; 1)$.
2. Tính côsin rồi góc.

::solution
$$\cos\varphi=\frac{|-12|}{\sqrt{1+144}\cdot1}=\frac{12}{\sqrt{145}}\approx0{,}9965,\qquad\varphi\approx4{,}8^\circ.$$
(Kiểm tra bằng tam giác vuông: $\tan\varphi=\dfrac{1}{12}$.)

**Đáp số.** $4{,}8$.
:::

:::exercise
Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật, $AB=3$, $AD=4$, $SA$ vuông góc với đáy và $SA=5$. Tính góc giữa $SC$ và mặt đáy, góc giữa $SC$ và mặt phẳng $(SAB)$ (làm tròn đến hàng phần mười của độ).

::hint
**Kiến thức:** đặt $A$ ở gốc; $(ABCD)$ là $(Oxy)$, $(SAB)$ là $(Ozx): y=0$.

**Gợi ý các bước:**
1. $B(3; 0; 0)$, $D(0; 4; 0)$, $S(0; 0; 5)$, $C(3; 4; 0)$.
2. $\overrightarrow{SC}=(3; 4; -5)$; dùng $\sin\varphi$ với $(0; 0; 1)$ và $(0; 1; 0)$.

::solution
$|\overrightarrow{SC}|=\sqrt{50}=5\sqrt2$.
$$\sin\varphi_1=\frac{5}{5\sqrt2}=\frac{\sqrt2}{2},\ \varphi_1=45^\circ;\qquad \sin\varphi_2=\frac{4}{5\sqrt2}\approx0{,}566,\ \varphi_2\approx34{,}4^\circ.$$

**Đáp số.** $45^\circ$ và khoảng $34{,}4^\circ$.
:::

:::exercise
(Ôn lại [Phương trình mặt phẳng](lesson:plane-equation).) Mặt phẳng đi qua $A(2; 0; 0)$, $B(0; 1; 0)$, $C(0; 0; 2)$ tạo với mặt phẳng $(Oxy)$ một góc bao nhiêu độ (làm tròn đến hàng phần mười)?

::hint
**Kiến thức:** phương trình theo đoạn chắn; góc giữa hai mặt phẳng.

**Gợi ý các bước:**
1. $(ABC): \dfrac{x}{2}+y+\dfrac{z}{2}=1\iff x+2y+z-2=0$.
2. Dùng $\vec{n}=(1; 2; 1)$ và $\vec{k}=(0; 0; 1)$.

::solution
$$\cos\varphi=\frac{1}{\sqrt6}\approx0{,}408,\qquad\varphi\approx65{,}9^\circ.$$

**Đáp số.** Khoảng $65{,}9^\circ$.
:::

:::exercise
(Ôn lại [Phương trình đường thẳng trong không gian](lesson:line-equation-space).) Cho $A(1; 2; -1)$, $B(3; -1; 1)$ và $(P): x-2y+2z+3=0$. Tính góc giữa đường thẳng $AB$ và $(P)$ (làm tròn đến hàng phần mười của độ).

::hint
**Kiến thức:** đường thẳng $AB$ có vectơ chỉ phương $\overrightarrow{AB}$; $\sin\varphi=\dfrac{|\vec{u}\cdot\vec{n}|}{|\vec{u}||\vec{n}|}$.

**Gợi ý các bước:**
1. $\overrightarrow{AB}=(2; -3; 2)$.
2. Tính $\sin\varphi$ với $\vec{n}=(1; -2; 2)$.

::solution
$$\sin\varphi=\frac{|2+6+4|}{\sqrt{17}\cdot3}=\frac{4}{\sqrt{17}}\approx0{,}970,\qquad\varphi\approx76{,}0^\circ.$$

**Đáp số.** Khoảng $76{,}0^\circ$.
:::

:::exercise Thử thách
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $1$. Tính góc giữa đường chéo $BD'$ và mặt phẳng $(A'BD)$ (làm tròn đến hàng phần mười của độ).

::hint
**Kiến thức:** đặt hệ trục như bài 5; $(A'BD): x+y+z-1=0$.

**Gợi ý các bước:**
1. $B(1; 0; 0)$, $D'(0; 1; 1)$, nên $\overrightarrow{BD'}=(-1; 1; 1)$.
2. Tính $\sin\varphi$ với $\vec{n}=(1; 1; 1)$.

::solution
$$\sin\varphi=\frac{|-1+1+1|}{\sqrt3\cdot\sqrt3}=\frac13,\qquad\varphi\approx19{,}5^\circ.$$
**Kiểm tra.** $\sin\varphi$ nhỏ nên $BD'$ gần như nằm sát mặt phẳng, đúng vì $B$ thuộc $(A'BD)$ và $D'$ chỉ cách mặt phẳng $\dfrac{1}{\sqrt3}$.

**Đáp số.** Khoảng $19{,}5^\circ$.
:::

## Kiểm tra mini

:::quiz
::mc
Góc giữa hai đường thẳng có vectơ chỉ phương $\vec{u}_1=(1; 0; 1)$ và $\vec{u}_2=(0; -1; -1)$ bằng
A. $60^\circ$.
B. $120^\circ$.
C. $30^\circ$.
D. $45^\circ$.
::key A
$\cos\varphi=\dfrac{|-1|}{\sqrt2\cdot\sqrt2}=\dfrac12$, nên $\varphi=60^\circ$. Phương án B quên dấu giá trị tuyệt đối, phương án C dùng nhầm sin.

::mc
Góc giữa đường thẳng có vectơ chỉ phương $\vec{u}=(1; 1; 0)$ và mặt phẳng có vectơ pháp tuyến $\vec{n}=(0; 1; 1)$ bằng
A. $60^\circ$.
B. $45^\circ$.
C. $30^\circ$.
D. $90^\circ$.
::key C
$\sin\varphi=\dfrac{1}{\sqrt2\cdot\sqrt2}=\dfrac12$, nên $\varphi=30^\circ$. Phương án A dùng côsin thay cho sin.

::mc
Gọi $\varphi$ là góc giữa mặt phẳng $(P): x-2y+2z=0$ và mặt phẳng $(Oxy)$. Khi đó
A. $\sin\varphi=\dfrac23$.
B. $\cos\varphi=\dfrac23$.
C. $\cos\varphi=\dfrac29$.
D. $\cos\varphi=-\dfrac23$.
::key B
$\cos\varphi=\dfrac{|2|}{3\cdot1}=\dfrac23$. Phương án A dùng công thức của đường thẳng với mặt phẳng, C quên căn ở mẫu, D quên giá trị tuyệt đối.

::mc
Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $A'C'$ và $B'C$ bằng
A. $45^\circ$.
B. $90^\circ$.
C. $60^\circ$.
D. $120^\circ$.
::key C
Với cạnh $1$ và hệ trục như trong bài: $\overrightarrow{A'C'}=(1; 1; 0)$, $\overrightarrow{B'C}=(0; 1; -1)$, $\cos\varphi=\dfrac{1}{2}$. (Hình học: $B'C\parallel A'D$, và tam giác $A'C'D$ đều vì ba cạnh đều là đường chéo của các mặt.) Phương án D là góc giữa hai vectơ ngược hướng.

::tf
Cho mặt phẳng $(P): 2x+y-2z+1=0$ và đường thẳng $d: x=1+t$, $y=-2t$, $z=3$.
a) Góc giữa $d$ và $(P)$ bằng $0^\circ$.
b) $(P)$ vuông góc với mặt phẳng $(Q): x+z-4=0$.
c) Góc giữa $(P)$ và $(Oxy)$ khoảng $41{,}8^\circ$.
d) $d$ vuông góc với mặt phẳng $(Oxy)$.
::key Đ Đ S S
a) Đúng: $\vec{u}\cdot\vec{n}=2-2+0=0$, nên $\sin\varphi=0$. b) Đúng: $2+0-2=0$. c) Sai: $\cos\varphi=\dfrac23$, góc khoảng $48{,}2^\circ$; $41{,}8^\circ$ là kết quả khi dùng nhầm sin. d) Sai: $\vec{u}=(1; -2; 0)$ không cùng phương với $(0; 0; 1)$; thực ra $d$ song song với $(Oxy)$.

::sa
Tính góc giữa hai mặt phẳng $(P): x+2y+2z-1=0$ và $(Q): 2x+y-z+5=0$, theo độ (làm tròn đến hàng phần mười).
::key 74,2
$\cos\varphi=\dfrac{|2+2-2|}{3\sqrt6}=\dfrac{2}{3\sqrt6}\approx0{,}272$, nên $\varphi\approx74{,}2^\circ$.

::sa
Một drone quay phim ở $D(0; 0; 40)$ hướng camera về mục tiêu $T(30; 40; 0)$ trên mặt đất (đơn vị: mét). Tính góc giữa đường ngắm $DT$ và mặt đất, theo độ (làm tròn đến hàng phần mười).
::key 38,7
$\overrightarrow{DT}=(30; 40; -40)$, $|\overrightarrow{DT}|=\sqrt{4100}$. $\sin\varphi=\dfrac{40}{\sqrt{4100}}\approx0{,}625$, nên $\varphi\approx38{,}7^\circ$.
:::
