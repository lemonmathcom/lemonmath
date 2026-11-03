---
title: Phương trình mặt cầu
description: Viết phương trình mặt cầu, tìm tâm và bán kính từ dạng khai triển, xét vị trí của điểm và mặt phẳng với mặt cầu, viết phương trình mặt phẳng tiếp diện.
minutes: 22
---

:::goals
- Viết phương trình mặt cầu $(x-a)^2+(y-b)^2+(z-c)^2=R^2$ khi biết tâm và bán kính.
- Nhận biết phương trình $x^2+y^2+z^2-2ax-2by-2cz+d=0$ là mặt cầu và tìm tâm, bán kính.
- Viết phương trình mặt cầu có đường kính cho trước, đi qua các điểm cho trước, tiếp xúc với một mặt phẳng.
- Xét vị trí của một điểm, một mặt phẳng với mặt cầu; viết phương trình mặt phẳng tiếp diện.
:::

Một bộ phát Wi-Fi đặt ở $I(2; 3; 1)$ trong một hội trường (đơn vị: mét). Sóng đủ mạnh trong phạm vi $10$ m quanh bộ phát. Một chiếc điện thoại ở $M(8; 10; 3)$ có bắt được sóng không? Một chiếc loa treo trên trần tại $N(2; 3; 12)$ thì sao?

Tập hợp các điểm cách $I$ đúng $10$ m là một **mặt cầu**. Bài này viết mặt cầu thành một phương trình, để mọi câu hỏi "ở trong hay ở ngoài" chỉ còn là một phép tính.

## Phương trình mặt cầu

### Khám phá: khoảng cách tới bộ phát

Ta tính khoảng cách từ bộ phát tới hai điểm:
$$IM=\sqrt{6^2+7^2+2^2}=\sqrt{89}\approx9{,}43<10,\qquad IN=\sqrt{0^2+0^2+11^2}=11>10.$$
Vậy điện thoại bắt được sóng, còn chiếc loa nằm ngoài vùng phủ sóng. Một điểm $P(x; y; z)$ nằm **đúng** trên biên của vùng phủ sóng khi $IP=10$, tức
$$(x-2)^2+(y-3)^2+(z-1)^2=100.$$

:::diagram Mặt cầu tâm $I$ bán kính $R$
alt: Một hình tròn tâm I, đoạn IM là bán kính R nối tâm với một điểm M trên mặt cầu
point I 0,0 below
point M 1.8,1.2 above-right
circle I 2.16
segment I M
label 0.7,0.9 "R"
:::

:::definition Mặt cầu
Mặt cầu tâm $I$ bán kính $R>0$ là tập hợp các điểm $M$ trong không gian sao cho $IM=R$. Điểm $M$ nằm **trong** mặt cầu nếu $IM<R$, nằm **ngoài** mặt cầu nếu $IM>R$.
:::

:::theorem Phương trình mặt cầu
- Mặt cầu tâm $I(a; b; c)$ bán kính $R$ có phương trình
$$(x-a)^2+(y-b)^2+(z-c)^2=R^2.$$
- Phương trình $x^2+y^2+z^2-2ax-2by-2cz+d=0$ là phương trình của một mặt cầu khi và chỉ khi $a^2+b^2+c^2-d>0$. Khi đó mặt cầu có tâm $I(a; b; c)$ và bán kính $R=\sqrt{a^2+b^2+c^2-d}$.
:::

**Vì sao đúng?** $M(x; y; z)$ thuộc mặt cầu khi và chỉ khi $IM^2=R^2$, và $IM^2=(x-a)^2+(y-b)^2+(z-c)^2$. Với dạng thứ hai, thêm bớt để có bình phương: phương trình tương đương $(x-a)^2+(y-b)^2+(z-c)^2=a^2+b^2+c^2-d$. Vế phải phải dương thì mới là $R^2$.

:::example Biết tâm và bán kính; biết đường kính
a) Viết phương trình mặt cầu tâm $I(1; -2; 3)$, bán kính $4$, và kiểm tra rằng $A(1; 2; 3)$ thuộc mặt cầu.

b) Viết phương trình mặt cầu đường kính $AB$ với $A(1; 3; -1)$, $B(3; -1; 5)$.

**Lời giải.** a) Thay tâm và bán kính vào công thức. Chú ý $y-(-2)=y+2$:

$$(x-1)^2+(y+2)^2+(z-3)^2=16.$$

Thay $A$: $0^2+4^2+0^2=16$, nên $A$ thuộc mặt cầu.

b) Tâm là trung điểm $I$ của $AB$, bán kính bằng nửa $AB$:

$$I(2; 1; 2),\qquad AB=\sqrt{2^2+(-4)^2+6^2}=\sqrt{56},\qquad R=\frac{\sqrt{56}}{2}=\sqrt{14}.$$

Vậy a) $(x-1)^2+(y+2)^2+(z-3)^2=16$; b) $(x-2)^2+(y-1)^2+(z-2)^2=14$.
:::

Khi phương trình đã khai triển, ta đọc $a$, $b$, $c$ bằng cách chia hệ số của $x$, $y$, $z$ cho $-2$.

:::example Từ dạng khai triển
Mỗi phương trình sau có phải phương trình mặt cầu không? Nếu có, tìm tâm và bán kính.

a) $x^2+y^2+z^2-4x+2y-6z-2=0$. b) $x^2+y^2+z^2-2x+4y+6=0$.

**Lời giải.** a) Chia các hệ số $-4$, $2$, $-6$ cho $-2$: $a=2$, $b=-1$, $c=3$; còn $d=-2$. Kiểm tra điều kiện:

$$a^2+b^2+c^2-d=4+1+9+2=16>0,\qquad R=4.$$

b) $a=1$, $b=-2$, $c=0$, $d=6$:

$$a^2+b^2+c^2-d=1+4+0-6=-1<0.$$

Vậy a) là mặt cầu tâm $I(2; -1; 3)$, bán kính $4$; b) không phải phương trình mặt cầu (không có điểm nào thoả mãn).
:::

Khi biết bốn điểm trên mặt cầu, dạng khai triển cho bốn phương trình bậc nhất với bốn ẩn $a$, $b$, $c$, $d$.

:::example Mặt cầu đi qua bốn điểm
Viết phương trình mặt cầu đi qua $O(0; 0; 0)$, $A(2; 0; 0)$, $B(0; 4; 0)$, $C(0; 0; 6)$.

**Lời giải.** Gọi mặt cầu là $x^2+y^2+z^2-2ax-2by-2cz+d=0$. Thay lần lượt bốn điểm:

$$\begin{aligned} O&: d=0;\\ A&: 4-4a+d=0\Rightarrow a=1;\\ B&: 16-8b+d=0\Rightarrow b=2;\\ C&: 36-12c+d=0\Rightarrow c=3. \end{aligned}$$

Khi đó $R^2=1+4+9-0=14$. Vậy mặt cầu là $x^2+y^2+z^2-2x-4y-6z=0$, tâm $I(1; 2; 3)$, bán kính $\sqrt{14}$.
:::

## Mặt phẳng và mặt cầu

So sánh khoảng cách $h$ từ tâm $I$ đến mặt phẳng với bán kính $R$, giống như so sánh khoảng cách từ tâm đến đường thẳng trong hình học phẳng.

:::theorem Vị trí của mặt phẳng và mặt cầu
Cho mặt cầu $(S)$ tâm $I$, bán kính $R$ và mặt phẳng $(P)$, $h=d(I, (P))$.
- $h>R$: $(P)$ và $(S)$ không có điểm chung.
- $h=R$: $(P)$ **tiếp xúc** với $(S)$ tại một điểm $H$ (hình chiếu của $I$ trên $(P)$); $(P)$ là **mặt phẳng tiếp diện**.
- $h<R$: $(P)$ cắt $(S)$ theo một đường tròn tâm $H$, bán kính $r=\sqrt{R^2-h^2}$.

Mặt phẳng tiếp diện của $(S)$ tại điểm $M\in(S)$ là mặt phẳng đi qua $M$ và vuông góc với $IM$, tức nhận $\overrightarrow{IM}$ làm vectơ pháp tuyến.
:::

:::example Ba mặt phẳng và một mặt cầu
Cho $(S): (x-1)^2+(y+1)^2+(z-2)^2=9$. Xét vị trí của $(S)$ với $(P): 2x-y+2z+2=0$, $(Q): x+2y+2z-6=0$, $(R): 2x+2y-z+15=0$. Nếu tiếp xúc, tìm tiếp điểm; nếu cắt, tìm bán kính đường tròn giao tuyến.

**Lời giải.** Tâm $I(1; -1; 2)$, $R=3$. Ba vectơ pháp tuyến đều có độ dài $3$, nên:

$$d(I, (P))=\frac{|2+1+4+2|}{3}=3,\qquad d(I, (Q))=\frac{|1-2+4-6|}{3}=1,\qquad d(I, (R))=\frac{|2-2-2+15|}{3}=\frac{13}{3}.$$

$(P)$ tiếp xúc với $(S)$. Tiếp điểm $H$ là hình chiếu của $I$: đường thẳng $x=1+2t$, $y=-1-t$, $z=2+2t$ cắt $(P)$ khi $9+9t=0$, tức $t=-1$, nên $H(-1; 0; 0)$.

$(Q)$ cắt $(S)$ theo đường tròn bán kính $r=\sqrt{9-1}=2\sqrt2$. Còn $\dfrac{13}{3}>3$ nên $(R)$ không cắt $(S)$.

Vậy $(P)$ tiếp xúc $(S)$ tại $H(-1; 0; 0)$, $(Q)$ cắt $(S)$ theo đường tròn bán kính $2\sqrt2$, $(R)$ không có điểm chung với $(S)$.
:::

:::example Mặt phẳng tiếp diện tại một điểm
Cho $(S): (x-1)^2+(y-2)^2+(z+1)^2=9$ và $M(3; 3; 1)$. Chứng minh $M\in(S)$ và viết phương trình mặt phẳng tiếp diện của $(S)$ tại $M$.

**Lời giải.** Thay $M$: $2^2+1^2+2^2=9$, nên $M\in(S)$. Mặt phẳng tiếp diện nhận $\overrightarrow{IM}=(2; 1; 2)$ làm vectơ pháp tuyến:

$$2(x-3)+(y-3)+2(z-1)=0\iff 2x+y+2z-11=0.$$

Vậy mặt phẳng tiếp diện là $2x+y+2z-11=0$.

**Kiểm tra.** $d(I, (P))=\dfrac{|2+2-2-11|}{3}=3=R$.
:::

Ví dụ cuối là một bài toán thực tế nhiều bước, nên ta làm theo bốn bước.

:::graph Mặt cắt thẳng đứng của vùng radar (đơn vị: $10$ km)
alt: Một đường tròn bán kính 5 tâm ở gốc, một đường nằm ngang ở độ cao 3 cắt đường tròn, đoạn từ tâm lên độ cao 3 và đoạn nằm ngang dài 4
x: -6..6
y: -6..6
plot: sqrt(25 - x^2)
plot: -sqrt(25 - x^2)
hline: 3 ; dashed
segment: (0, 0) (0, 3)
segment: (0, 3) (4, 3)
point: (0, 0) "O" below
point: (4, 3) "M" above-right
label: (2, 3.5) "r"
:::

:::example Vùng quét của radar
Một trạm radar đặt ở $O(0; 0; 0)$ phát hiện được máy bay trong phạm vi $50$ km. Một máy bay bay thẳng ở độ cao $30$ km theo đường $x=-60+t$, $y=20$, $z=30$ (đơn vị: km). Máy bay bay bao nhiêu kilômét trong vùng radar phát hiện được (làm tròn đến hàng phần mười)?

**Lời giải.**

*Hiểu đề.* Vùng phát hiện là khối cầu $x^2+y^2+z^2\le2500$. Cần độ dài phần đường bay nằm trong khối cầu.

*Tìm cách giải.* Đường bay nằm trong mặt phẳng $z=30$. Mặt phẳng này cách $O$ một khoảng $h=30<50$, nên cắt mặt cầu theo đường tròn bán kính $r=\sqrt{50^2-30^2}=40$, tâm $(0; 0; 30)$.

*Giải.* Ở độ cao $30$, máy bay trong vùng radar khi $x^2+y^2\le1600$. Với $y=20$:

$$x^2\le1600-400=1200\iff -20\sqrt3\le x\le20\sqrt3.$$

Đoạn này dài $40\sqrt3\approx69{,}3$ km (mỗi đơn vị $t$ ứng với $1$ km theo trục $Ox$).

Vậy máy bay bay khoảng $69{,}3$ km trong vùng radar.

*Nhìn lại.* Ta đã đưa bài toán không gian về một đường tròn trong mặt phẳng $z=30$, nhờ công thức $r=\sqrt{R^2-h^2}$.
:::

:::warning Những sai lầm thường gặp
- **Sai dấu toạ độ tâm.** Sai: $(x+1)^2+(y-2)^2+z^2=9$ có tâm $(1; -2; 0)$. Vì sao sai: $x+1=x-(-1)$. Đúng: tâm $I(-1; 2; 0)$.
- **Nhầm $R$ với $R^2$.** Sai: mặt cầu tâm $I(1; -2; 3)$, bán kính $4$ là $(x-1)^2+(y+2)^2+(z-3)^2=4$. Đúng: vế phải là $R^2=16$.
- **Đọc tâm khi hệ số của $x^2$ khác $1$.** Với $2x^2+2y^2+2z^2-4x+8y-2=0$, sai: $a=2$, $b=-4$. Vì sao sai: công thức cần hệ số của $x^2$, $y^2$, $z^2$ bằng $1$. Đúng: chia cho $2$ được $x^2+y^2+z^2-2x+4y-1=0$, nên $a=1$, $b=-2$, $c=0$, $R=\sqrt{1+4+0+1}=\sqrt6$.
- **Quên kiểm tra $a^2+b^2+c^2-d>0$.** Sai: $x^2+y^2+z^2-2x+4y+6=0$ có $R=\sqrt{-1}$ "không xác định nhưng vẫn là mặt cầu". Đúng: điều kiện không thoả mãn, phương trình không biểu diễn mặt cầu nào.
:::

## Thuật ngữ

:::terms
- mặt cầu | sphere
- tâm | centre
- bán kính | radius
- đường kính | diameter
- khối cầu | solid sphere (ball)
- mặt phẳng tiếp diện | tangent plane
- tiếp điểm | point of contact
- đường tròn giao tuyến | circle of intersection
:::

## Tóm tắt

- Tâm $I(a; b; c)$, bán kính $R$: $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.
- $x^2+y^2+z^2-2ax-2by-2cz+d=0$ là mặt cầu $\iff a^2+b^2+c^2-d>0$; khi đó $R=\sqrt{a^2+b^2+c^2-d}$.
- Đường kính $AB$: tâm là trung điểm $AB$, $R=\dfrac{AB}{2}$.
- Điểm $M$: $IM<R$ ở trong, $IM=R$ ở trên, $IM>R$ ở ngoài mặt cầu.
- Mặt phẳng: $h=d(I, (P))$; $h>R$ không cắt, $h=R$ tiếp xúc, $h<R$ cắt theo đường tròn bán kính $\sqrt{R^2-h^2}$.
- Tiếp diện tại $M$: qua $M$, vectơ pháp tuyến $\overrightarrow{IM}$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Viết phương trình mặt cầu tâm $I(-1; 2; 0)$, bán kính $3$. Điểm $A(1; 3; 2)$ nằm trong, trên hay ngoài mặt cầu?

::hint
**Kiến thức:** $(x-a)^2+(y-b)^2+(z-c)^2=R^2$; so sánh $IA$ với $R$.

**Gợi ý các bước:**
1. Thay $a=-1$, $b=2$, $c=0$, $R=3$.
2. Tính $IA^2$.

::solution
$(x+1)^2+(y-2)^2+z^2=9$. $IA^2=2^2+1^2+2^2=9=R^2$.

**Đáp số.** $(x+1)^2+(y-2)^2+z^2=9$; $A$ nằm trên mặt cầu.
:::

:::exercise
Tìm tâm và bán kính của mặt cầu $x^2+y^2+z^2+4x-6y+2z-11=0$.

::hint
**Kiến thức:** $a$, $b$, $c$ bằng hệ số của $x$, $y$, $z$ chia cho $-2$; $R=\sqrt{a^2+b^2+c^2-d}$.

**Gợi ý các bước:**
1. Đọc $a$, $b$, $c$, $d$.
2. Tính $R$.

::solution
$a=-2$, $b=3$, $c=-1$, $d=-11$. $R^2=4+9+1+11=25$.

**Đáp số.** $I(-2; 3; -1)$, $R=5$.
:::

:::exercise
Phương trình nào sau đây là phương trình mặt cầu? Tìm tâm và bán kính của các mặt cầu đó.

a) $x^2+y^2+z^2-2x+4z+1=0$. b) $x^2+y^2+z^2+2y+5=0$. c) $2x^2+2y^2+2z^2-4x+8y-2=0$.

::hint
**Kiến thức:** điều kiện $a^2+b^2+c^2-d>0$, với hệ số của $x^2$, $y^2$, $z^2$ bằng $1$.

**Gợi ý các bước:**
1. Ở câu c), chia hai vế cho $2$ trước.
2. Kiểm tra điều kiện cho từng phương trình.

::solution
a) $a=1$, $b=0$, $c=-2$, $d=1$: $1+0+4-1=4>0$, tâm $(1; 0; -2)$, $R=2$.
b) $a=0$, $b=-1$, $c=0$, $d=5$: $1-5=-4<0$, không phải mặt cầu.
c) $x^2+y^2+z^2-2x+4y-1=0$: $1+4+0+1=6>0$, tâm $(1; -2; 0)$, $R=\sqrt6$.

**Đáp số.** a) và c) là mặt cầu; b) không phải.
:::

:::exercise
Viết phương trình mặt cầu đường kính $AB$ với $A(2; -1; 3)$, $B(0; 3; -1)$.

::hint
**Kiến thức:** tâm là trung điểm của $AB$, $R=\dfrac{AB}{2}$.

**Gợi ý các bước:**
1. Tìm trung điểm $I$.
2. Tính $AB$ rồi $R$.

::solution
$I(1; 1; 1)$, $AB=\sqrt{4+16+16}=6$, $R=3$.

**Đáp số.** $(x-1)^2+(y-1)^2+(z-1)^2=9$.
:::

:::exercise
(Ôn lại [Phương trình mặt phẳng](lesson:plane-equation).) Viết phương trình mặt cầu tâm $I(1; 2; -1)$ tiếp xúc với mặt phẳng $(P): 2x-2y+z+9=0$.

::hint
**Kiến thức:** mặt cầu tiếp xúc với $(P)$ khi $R=d(I, (P))$.

**Gợi ý các bước:**
1. Tính $d(I, (P))$ bằng công thức khoảng cách.
2. Viết phương trình với $R$ vừa tìm.

::solution
$$R=d(I, (P))=\frac{|2-4-1+9|}{\sqrt{4+4+1}}=\frac63=2.$$

**Đáp số.** $(x-1)^2+(y-2)^2+(z+1)^2=4$.
:::

:::exercise
Cho mặt cầu $(S): (x-2)^2+(y+1)^2+z^2=9$. Mỗi khẳng định sau đúng hay sai?

a) $(S)$ có tâm $I(2; -1; 0)$.

b) $(S)$ có bán kính bằng $9$.

c) Điểm $M(4; 1; 1)$ thuộc $(S)$.

d) Mặt phẳng $z=4$ cắt $(S)$ theo một đường tròn.

::hint
**Kiến thức:** đọc tâm, bán kính; so sánh khoảng cách từ tâm đến mặt phẳng với $R$.

**Gợi ý các bước:**
1. Đọc $I$ và $R$.
2. Thay $M$ vào vế trái.
3. Tính khoảng cách từ $I$ đến mặt phẳng $z=4$.

::solution
a) **Đúng.** $x-2$, $y+1=y-(-1)$, $z-0$.

b) **Sai.** $R^2=9$, nên $R=3$.

c) **Đúng.** $2^2+2^2+1^2=9$.

d) **Sai.** Khoảng cách từ $I$ đến mặt phẳng $z=4$ là $|0-4|=4>3$, nên không có điểm chung.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Một chiếc loa Bluetooth treo ở $I(2; 3; 4)$ trong phòng (đơn vị: mét), sàn nhà là mặt phẳng $z=0$. Tiếng loa nghe rõ trong phạm vi $6$ m quanh loa. Tính diện tích phần sàn nhà nghe rõ tiếng loa (đơn vị: m², làm tròn đến hàng phần mười).

::hint
**Kiến thức:** mặt phẳng cách tâm $h<R$ cắt mặt cầu theo đường tròn bán kính $r=\sqrt{R^2-h^2}$.

**Gợi ý các bước:**
1. $h=4$, $R=6$; tính $r$.
2. Diện tích hình tròn $\pi r^2$.

::solution
$r^2=36-16=20$, nên diện tích là $20\pi\approx62{,}8$ m².

**Đáp số.** $62{,}8$.
:::

:::exercise
Viết phương trình mặt cầu có tâm nằm trên trục $Ox$ và đi qua hai điểm $A(1; 2; 3)$, $B(3; 0; 1)$.

::hint
**Kiến thức:** tâm trên $Ox$ có dạng $I(t; 0; 0)$; điều kiện $IA=IB$.

**Gợi ý các bước:**
1. Viết $IA^2=IB^2$ theo $t$.
2. Giải $t$, rồi tính $R^2=IA^2$.

::solution
$$(1-t)^2+4+9=(3-t)^2+0+1\iff 14-2t=10-6t\iff t=-1.$$
$I(-1; 0; 0)$, $R^2=4+4+9=17$.

**Đáp số.** $(x+1)^2+y^2+z^2=17$.
:::

:::exercise
(Ôn lại [Phương trình đường thẳng trong không gian](lesson:line-equation-space).) Tìm giao điểm của đường thẳng $d: x=1+t$, $y=2$, $z=2-3t$ với mặt cầu $(S): x^2+y^2+z^2=9$, và tính độ dài dây cung tạo thành.

::hint
**Kiến thức:** thay phương trình tham số vào phương trình mặt cầu được một phương trình bậc hai theo $t$.

**Gợi ý các bước:**
1. Thay $x$, $y$, $z$ vào $(S)$ và rút gọn.
2. Giải $t$, tìm hai giao điểm, rồi tính khoảng cách giữa chúng.

::solution
$$(1+t)^2+4+(2-3t)^2=9\iff 10t^2-10t=0\iff t=0\ \text{hoặc}\ t=1.$$
Hai giao điểm là $(1; 2; 2)$ và $(2; 2; -1)$. Dây cung dài $\sqrt{1^2+0^2+3^2}=\sqrt{10}$.

**Đáp số.** $(1; 2; 2)$, $(2; 2; -1)$; dây cung dài $\sqrt{10}\approx3{,}16$.
:::

:::exercise Thử thách
Coi Trái Đất là mặt cầu tâm $O$, bán kính $6400$ km. Chọn đơn vị là nghìn km: $(S): x^2+y^2+z^2=40{,}96$. Một vệ tinh ở $V(0; 0; 8)$. Những điểm $M$ trên mặt đất "nhìn thấy" vệ tinh ở đường chân trời là những điểm có $VM$ tiếp xúc với mặt cầu, tức $\overrightarrow{OM}\perp\overrightarrow{MV}$. Chứng minh các điểm đó nằm trên một mặt phẳng và tính bán kính đường tròn biên của vùng phủ sóng (đơn vị: km).

::hint
**Kiến thức:** $\overrightarrow{OM}\cdot\overrightarrow{MV}=0$; $OM^2=40{,}96$; $r=\sqrt{R^2-h^2}$.

**Gợi ý các bước:**
1. Viết $\overrightarrow{MV}=\overrightarrow{OV}-\overrightarrow{OM}$ và khai triển $\overrightarrow{OM}\cdot\overrightarrow{MV}=0$.
2. Suy ra $8z=40{,}96$, rồi tính $r$.

::solution
$\overrightarrow{OM}\cdot(\overrightarrow{OV}-\overrightarrow{OM})=0\iff\overrightarrow{OM}\cdot\overrightarrow{OV}=OM^2\iff 8z=40{,}96\iff z=5{,}12.$
Vậy các điểm đó nằm trên mặt phẳng $z=5{,}12$, cách $O$ một khoảng $h=5{,}12$:
$$r=\sqrt{40{,}96-5{,}12^2}=\sqrt{14{,}7456}=3{,}84.$$

**Đáp số.** Mặt phẳng $z=5{,}12$; bán kính đường tròn biên là $3840$ km.
:::

## Kiểm tra mini

:::quiz
::mc
Trong không gian $Oxyz$, mặt cầu $(x+1)^2+(y-2)^2+z^2=4$ có tâm và bán kính là
A. $I(1; -2; 0)$, $R=2$.
B. $I(-1; 2; 0)$, $R=2$.
C. $I(-1; 2; 0)$, $R=4$.
D. $I(1; -2; 0)$, $R=4$.
::key B
$x+1=x-(-1)$ nên $a=-1$; $R^2=4$ nên $R=2$. Phương án A sai dấu toạ độ tâm, C và D lấy $R$ bằng $R^2$.

::mc
Bán kính của mặt cầu $x^2+y^2+z^2-2x+4y-6z+5=0$ bằng
A. $9$.
B. $\sqrt{19}$.
C. $3$.
D. $\sqrt{14}$.
::key C
$a=1$, $b=-2$, $c=3$, $d=5$: $R^2=1+4+9-5=9$, $R=3$. Phương án A quên lấy căn, B cộng $d$ thay vì trừ, D quên $d$.

::mc
Phương trình nào sau đây là phương trình của một mặt cầu?
A. $x^2+y^2+z^2-2x+4y+6=0$.
B. $x^2+y^2+z^2-4x+2z+1=0$.
C. $x^2+2y^2+z^2-2=0$.
D. $x^2+y^2-z^2+2x=0$.
::key B
B có $a^2+b^2+c^2-d=4+0+1-1=4>0$. A có $1+4-6<0$; C và D có hệ số của $x^2$, $y^2$, $z^2$ không bằng nhau.

::mc
Mặt cầu tâm $I(1; 0; -2)$ tiếp xúc với mặt phẳng $(P): 2x-y+2z+8=0$ có phương trình là
A. $(x-1)^2+y^2+(z+2)^2=4$.
B. $(x-1)^2+y^2+(z+2)^2=2$.
C. $(x+1)^2+y^2+(z-2)^2=4$.
D. $(x-1)^2+y^2+(z+2)^2=36$.
::key A
$R=d(I, (P))=\dfrac{|2-0-4+8|}{3}=2$, nên $R^2=4$. Phương án B quên bình phương, C sai dấu tâm, D quên chia cho $3$.

::tf
Cho mặt cầu $(S): x^2+y^2+z^2-2x-4y+4z=0$.
a) $(S)$ có tâm $I(1; 2; -2)$.
b) $(S)$ có bán kính bằng $9$.
c) Gốc toạ độ $O$ thuộc $(S)$.
d) Mặt phẳng $(P): x+2y-2z-18=0$ tiếp xúc với $(S)$.
::key Đ S Đ Đ
a) Đúng: $a=1$, $b=2$, $c=-2$. b) Sai: $R^2=1+4+4-0=9$, $R=3$. c) Đúng: $d=0$ nên $O$ thoả mãn phương trình. d) Đúng: $d(I, (P))=\dfrac{|1+4+4-18|}{3}=3=R$.

::sa
Mặt cầu có đường kính $AB$ với $A(1; 2; 3)$, $B(3; -2; -1)$ có bán kính bằng bao nhiêu?
::key 3
$AB=\sqrt{4+16+16}=6$, nên $R=3$. Nhầm lẫn thường gặp là lấy $R=AB=6$.

::sa
Mặt phẳng $z=1$ cắt mặt cầu $(x-1)^2+(y+2)^2+(z-4)^2=25$ theo một đường tròn. Tính diện tích hình tròn đó (làm tròn đến hàng phần mười).
::key 50,3
$h=|1-4|=3$, $r=\sqrt{25-9}=4$, diện tích $16\pi\approx50{,}27$, làm tròn được $50{,}3$.
:::
