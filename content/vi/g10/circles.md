---
title: Đường tròn trong mặt phẳng toạ độ
description: Viết phương trình đường tròn từ tâm và bán kính, nhận biết đường tròn từ phương trình khai triển và viết tiếp tuyến tại một điểm.
minutes: 28
---

:::goals
- Viết phương trình đường tròn từ tâm và bán kính, và ngược lại.
- Xác định $x^2+y^2-2ax-2by+c=0$ có phải là đường tròn hay không.
- Tìm đường tròn khi biết đường kính hoặc ba điểm.
- Viết tiếp tuyến tại một điểm, xét vị trí của một điểm và một đường thẳng đối với đường tròn.
:::

Một trạm phát sóng điện thoại đặt tại điểm $I(1; 2)$ trên bản đồ (đơn vị: km) và phủ sóng mọi nơi cách nó không quá $5$ km. Một ngôi nhà ở $P(5; 1)$. Ngôi nhà có sóng không? Một con đường chạy theo đường thẳng $3x+4y-31=0$: đoạn đường có sóng dài bao nhiêu?

Nếu vẽ ra giấy, bạn sẽ thấy ngay biên của vùng phủ sóng là một đường tròn. Nhưng vẽ thì khó chính xác, nhất là khi phải đo một đoạn đường dài bao nhiêu ki-lô-mét. Ta sẽ làm như đã làm với đường thẳng: viết đường tròn thành một phương trình, để mọi câu hỏi về nó trở thành phép tính.

## Phương trình đường tròn

### Khám phá: những điểm cách $I$ đúng $5$ km

Một điểm có sóng hay không chỉ phụ thuộc vào khoảng cách từ nó đến trạm. Để khỏi phải khai căn, ta tính bình phương khoảng cách $IM^2=(x-1)^2+(y-2)^2$ cho vài điểm $M(x; y)$:

| $M$ | $(4; 6)$ | $(6; 2)$ | $(1; -3)$ | $(-3; 5)$ | $(5; 1)$ |
|---|---|---|---|---|---|
| $IM^2$ | $9+16=25$ | $25+0=25$ | $0+25=25$ | $16+9=25$ | $16+1=17$ |

Bạn để ý: bốn điểm đầu đều cho $IM^2=25$, tức $IM=5$, nên chúng nằm đúng trên biên vùng phủ sóng. Điểm $(5; 1)$ có $IM^2=17<25$, nên nằm bên trong. Vậy điểm $M(x; y)$ nằm trên biên khi và chỉ khi $(x-1)^2+(y-2)^2=25$.

:::definition Phương trình đường tròn
Đường tròn tâm $I(a; b)$ bán kính $R>0$ là tập hợp các điểm $M(x; y)$ thoả mãn $IM=R$, tức là
$$(x-a)^2+(y-b)^2=R^2.$$
:::

Phương trình này thật ra chỉ là câu "$M$ cách $I$ đúng $R$" viết bằng toạ độ. Vì $IM=\sqrt{(x-a)^2+(y-b)^2}$, và với hai số không âm thì $IM=R\iff IM^2=R^2$, ta bình phương lên cho gọn, khỏi phải mang theo dấu căn.

### Dạng khai triển

Trong đề bài, đường tròn không phải lúc nào cũng được viết sẵn ở dạng đẹp như trên. Nhiều khi người ta đã khai triển hết các bình phương. Khai triển $(x-a)^2+(y-b)^2=R^2$ ta được $x^2+y^2-2ax-2by+c=0$ với $c=a^2+b^2-R^2$.

:::theorem Nhận biết đường tròn
Phương trình $x^2+y^2-2ax-2by+c=0$ là phương trình đường tròn khi và chỉ khi $a^2+b^2-c>0$. Khi đó đường tròn có tâm $I(a; b)$ và bán kính $R=\sqrt{a^2+b^2-c}$.
:::

Vì sao lại cần điều kiện ấy? Thêm bớt để đưa về bình phương, phương trình trở thành $(x-a)^2+(y-b)^2=a^2+b^2-c$. Vế trái là tổng hai bình phương nên không âm. Vì vậy nếu $a^2+b^2-c<0$ thì không có điểm nào thoả mãn, còn nếu bằng $0$ thì chỉ có một điểm $(a; b)$. Chỉ khi vế phải dương, ta mới có một đường tròn thật sự.

:::example Từ tâm và bán kính đến phương trình
Viết phương trình đường tròn tâm $I(1; -2)$ bán kính $3$, ở cả hai dạng.

**Lời giải.** Thay $a=1$, $b=-2$, $R=3$ vào $(x-a)^2+(y-b)^2=R^2$. Chú ý $y-(-2)=y+2$:

$$(x-1)^2+(y+2)^2=9\iff x^2-2x+1+y^2+4y+4-9=0\iff x^2+y^2-2x+4y-4=0.$$

Vậy đường tròn là $(x-1)^2+(y+2)^2=9$, hay $x^2+y^2-2x+4y-4=0$.
:::

Chiều ngược lại cần cẩn thận hơn một chút. Một phương trình trông giống hệt phương trình đường tròn vẫn có thể không phải đường tròn, nên bao giờ ta cũng kiểm tra dấu của $a^2+b^2-c$ trước khi kết luận.

:::example Từ phương trình đến tâm và bán kính
Mỗi phương trình sau có phải là phương trình đường tròn không? Nếu có, tìm tâm và bán kính.
a) $x^2+y^2-6x+4y-12=0$. b) $x^2+y^2+2x+2y+5=0$.

**Lời giải.** So sánh với $x^2+y^2-2ax-2by+c=0$ để đọc $a$, $b$, $c$ (chú ý hệ số của $x$ là $-2a$), rồi xét dấu $a^2+b^2-c$:

$$\begin{aligned} \text{a) }& a=3,\ b=-2,\ c=-12:\quad a^2+b^2-c=9+4+12=25>0;\\ \text{b) }& a=-1,\ b=-1,\ c=5:\quad a^2+b^2-c=1+1-5=-3<0. \end{aligned}$$

Vậy a) là đường tròn tâm $(3; -2)$, bán kính $R=\sqrt{25}=5$; còn b) không phải phương trình đường tròn.
:::

## Tìm đường tròn

Dù đề cho gì đi nữa, muốn viết phương trình đường tròn thì việc chính chỉ có hai: tìm tâm và tìm bán kính. Khi biết hai đầu một đường kính, tâm nằm ngay giữa, tức là trung điểm.

:::example Đường tròn có đường kính cho trước
Viết phương trình đường tròn đường kính $AB$ với $A(1; 2)$ và $B(5; 6)$.

**Lời giải.** Tâm $I$ là trung điểm của $AB$, bán kính bằng nửa $AB$:

$$I\left(\frac{1+5}{2}; \frac{2+6}{2}\right)=(3; 4),\qquad AB=\sqrt{4^2+4^2}=4\sqrt2,\qquad R=2\sqrt2,\ R^2=8.$$

Vậy đường tròn là $(x-3)^2+(y-4)^2=8$.

**Kiểm tra.** Điểm $A$: $(1-3)^2+(2-4)^2=4+4=8$.
:::

Khi chỉ biết ba điểm trên đường tròn, tâm không hiện ra ngay. Lúc này dạng khai triển giúp ta: mỗi điểm cho một phương trình với ẩn $a$, $b$, $c$, và ba điểm cho đúng ba phương trình.

:::example Đường tròn đi qua ba điểm
Viết phương trình đường tròn đi qua $O(0; 0)$, $A(4; 0)$ và $B(0; 2)$.

**Lời giải.** Thay lần lượt toạ độ ba điểm vào $x^2+y^2-2ax-2by+c=0$:

$$\begin{aligned} O(0; 0):&\quad c=0;\\ A(4; 0):&\quad 16-8a+c=0\Rightarrow a=2;\\ B(0; 2):&\quad 4-4b+c=0\Rightarrow b=1. \end{aligned}$$

Khi đó $R^2=a^2+b^2-c=4+1-0=5>0$.

Vậy đường tròn là $(x-2)^2+(y-1)^2=5$.
:::

## Tiếp tuyến tại một điểm

Hãy hình dung một chiếc thước đặt sát mép một cái đĩa: nó chạm đĩa đúng một điểm. Đường thẳng **tiếp xúc** với đường tròn khi nó có đúng một điểm chung với đường tròn. Tiếp tuyến tại $M_0$ vuông góc với bán kính $IM_0$, nên nhận $\overrightarrow{IM_0}$ làm vectơ pháp tuyến.

:::graph Tiếp tuyến của đường tròn tại $M$
alt: Đường tròn tâm I(1; 1) bán kính 5 và một đường thẳng tiếp xúc với nó tại điểm M(4; 5)
x: -5..8
y: -5..8
plot: 1 + sqrt(25 - (x-1)^2) ; -4..6
plot: 1 - sqrt(25 - (x-1)^2) ; -4..6
plot: (32 - 3x)/4 ; 0..8
segment: (1, 1) (4, 5)
point: (1, 1) "I" below-left
point: (4, 5) "M" above-right
:::

:::example Tiếp tuyến tại một điểm
Viết phương trình tiếp tuyến của đường tròn $(x-1)^2+(y-1)^2=25$ tại $M(4; 5)$.

**Lời giải.** Trước hết kiểm tra $M$ thuộc đường tròn: $(4-1)^2+(5-1)^2=9+16=25$. Tiếp tuyến đi qua $M$ và nhận $\overrightarrow{IM}=(3; 4)$ làm vectơ pháp tuyến:

$$3(x-4)+4(y-5)=0\iff 3x+4y-32=0.$$

Vậy tiếp tuyến là $3x+4y-32=0$.

**Kiểm tra.** Khoảng cách từ $I(1; 1)$ đến tiếp tuyến: $\dfrac{|3+4-32|}{5}=5=R$, đúng như mong đợi.
:::

## Vị trí của điểm và đường thẳng đối với đường tròn

Mọi câu hỏi về vị trí đều quy về một việc quen thuộc: so một khoảng cách với bán kính. Cho đường tròn tâm $I$, bán kính $R$.

- Điểm $P$ nằm **trong**, **trên** hay **ngoài** đường tròn tuỳ theo $IP<R$, $IP=R$ hay $IP>R$.
- Đường thẳng $\Delta$ **cắt** đường tròn tại hai điểm, **tiếp xúc** hay **không có điểm chung** với đường tròn tuỳ theo $d(I, \Delta)<R$, $=R$ hay $>R$.
- Khi $d=d(I, \Delta)<R$, dây cung chắn trên $\Delta$ có độ dài $2\sqrt{R^2-d^2}$ (theo định lí Pythagore trong tam giác vuông tạo bởi bán kính, khoảng cách và nửa dây cung).

Đến đây ta đã đủ công cụ để trả lời câu hỏi về trạm phát sóng ở đầu bài, mà không cần vẽ hình chính xác.

:::graph Vùng phủ sóng và con đường
alt: Đường tròn tâm I(1; 2) bán kính 5, điểm P(5; 1) nằm trong đường tròn và đường thẳng 3x cộng 4y bằng 31 cắt đường tròn tại hai điểm
x: -5..7
y: -4..8
plot: 2 + sqrt(25 - (x-1)^2) ; -4..6
plot: 2 - sqrt(25 - (x-1)^2) ; -4..6
plot: (31 - 3x)/4
point: (1, 2) "I" below-left
point: (5, 1) "P" below
point: (1, 7)
point: (5.8, 3.4)
:::

:::example Trạm phát sóng
Trạm phát sóng ở $I(1; 2)$ phủ sóng trong bán kính $5$ km.
a) Ngôi nhà ở $P(5; 1)$ có sóng không?
b) Con đường $\Delta: 3x+4y-31=0$ có đi qua vùng phủ sóng không? Nếu có, đoạn đường có sóng dài bao nhiêu?

**Lời giải.** Ta so sánh $IP$ và $d(I, \Delta)$ với $R=5$.

a) $IP^2=(5-1)^2+(1-2)^2=17<25$, nên $IP<5$.

b) Khoảng cách từ tâm đến con đường và độ dài dây cung:

$$d=\frac{|3\cdot1+4\cdot2-31|}{\sqrt{3^2+4^2}}=\frac{20}{5}=4<5,\qquad 2\sqrt{R^2-d^2}=2\sqrt{25-16}=6.$$

Vậy ngôi nhà nằm trong vùng phủ sóng, và con đường có một đoạn dài $6$ km được phủ sóng.

**Kiểm tra.** Giải hệ gồm phương trình đường tròn và con đường, ta được hai giao điểm $(1; 7)$ và $\left(\frac{29}{5}; \frac{17}{5}\right)$; khoảng cách giữa chúng là $\sqrt{4{,}8^2+3{,}6^2}=6$.
:::

:::warning Những sai lầm thường gặp
Phần lớn lỗi ở bài này là lỗi dấu và lỗi quên bình phương. Bạn đọc kĩ để biết mình cần dừng lại kiểm tra ở đâu.

- **Sai dấu toạ độ tâm.** Sai: $(x+2)^2+(y-3)^2=16$ có tâm $(2; -3)$. Lí do sai: $x+2=x-(-2)$. Đúng: tâm $(-2; 3)$, bán kính $4$.
- **Viết $R$ thay cho $R^2$.** Sai: đường tròn tâm $(3; 4)$ bán kính $2\sqrt2$ là $(x-3)^2+(y-4)^2=2\sqrt2$. Lí do sai: vế phải là bình phương bán kính. Đúng: $(x-3)^2+(y-4)^2=8$.
- **Không kiểm tra $a^2+b^2-c>0$.** Sai: "$x^2+y^2+2x+2y+5=0$ là đường tròn tâm $(-1; -1)$". Lí do sai: $a^2+b^2-c=-3<0$, không có điểm nào thoả mãn. Đúng: đây không phải đường tròn.
- **Chọn sai vectơ pháp tuyến của tiếp tuyến.** Sai: tiếp tuyến tại $M$ nhận vectơ vuông góc với $\overrightarrow{IM}$ làm vectơ pháp tuyến. Lí do sai: tiếp tuyến vuông góc với bán kính. Đúng: $\vec{n}=\overrightarrow{IM}$.
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

- Đường tròn tâm $I(a; b)$, bán kính $R$: $(x-a)^2+(y-b)^2=R^2$.
- $x^2+y^2-2ax-2by+c=0$ là đường tròn $\iff a^2+b^2-c>0$; tâm $(a; b)$, $R=\sqrt{a^2+b^2-c}$.
- Đường kính $AB$: tâm là trung điểm, $R=\dfrac{AB}{2}$. Ba điểm: thay vào dạng khai triển, giải tìm $a$, $b$, $c$.
- Tiếp tuyến tại $M_0$: đi qua $M_0$, vectơ pháp tuyến $\overrightarrow{IM_0}$.
- So sánh $IP$ và $d(I, \Delta)$ với $R$ để biết vị trí; dây cung dài $2\sqrt{R^2-d^2}$.

Câu hỏi về ngôi nhà và con đường ở đầu bài hoá ra chỉ là hai phép so sánh khoảng cách với bán kính. Đó là điều đáng nhớ nhất: đường tròn là tập hợp những điểm cách tâm đúng $R$, và gần như mọi bài toán về nó đều bắt đầu từ chữ "khoảng cách".

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn cứ tự làm trước, sai cũng không sao, rồi hãy bấm xem lời giải để so cách nghĩ của mình.

:::exercise
Viết phương trình đường tròn tâm $(-2; 3)$, bán kính $4$.

::hint
**Kiến thức:** đường tròn tâm $(a; b)$, bán kính $R$ là $(x-a)^2+(y-b)^2=R^2$.

**Gợi ý các bước:**
1. Thay $a=-2$, $b=3$; chú ý $x-(-2)=x+2$.
2. Vế phải là $R^2=16$.

::solution
$(x+2)^2+(y-3)^2=4^2=16$.

**Đáp số.** $(x+2)^2+(y-3)^2=16$.
:::

:::exercise
Tìm tâm và bán kính của đường tròn $x^2+y^2-4x+6y-3=0$.

::hint
**Kiến thức:** $x^2+y^2-2ax-2by+c=0$ có tâm $(a; b)$ và $R=\sqrt{a^2+b^2-c}$.

**Gợi ý các bước:**
1. Từ $-2a=-4$, $-2b=6$ tìm $a$, $b$; đọc $c$.
2. Tính $a^2+b^2-c$.

::solution
$a=2$, $b=-3$, $c=-3$. $a^2+b^2-c=4+9+3=16$, nên $R=4$.

**Đáp số.** Tâm $(2; -3)$, $R=4$.
:::

:::exercise
Phương trình $x^2+y^2-2x+4y+6=0$ có phải là phương trình đường tròn không?

::hint
**Kiến thức:** dạng khai triển là đường tròn khi và chỉ khi $a^2+b^2-c>0$.

**Gợi ý các bước:**
1. Đọc $a$, $b$, $c$.
2. Xét dấu $a^2+b^2-c$.

::solution
$a=1$, $b=-2$, $c=6$: $a^2+b^2-c=1+4-6=-1<0$.

**Đáp số.** Không phải phương trình đường tròn.
:::

:::exercise
Viết phương trình đường tròn đi qua ba điểm $O(0; 0)$, $A(6; 0)$ và $B(0; 8)$.

::hint
**Kiến thức:** thay toạ độ mỗi điểm vào $x^2+y^2-2ax-2by+c=0$.

**Gợi ý các bước:**
1. $O$ cho $c$.
2. $A$ cho $a$, $B$ cho $b$.
3. Tính $R^2=a^2+b^2-c$.

::solution
$O$: $c=0$. $A$: $36-12a=0$, nên $a=3$. $B$: $64-16b=0$, nên $b=4$. $R^2=9+16-0=25$.

**Đáp số.** $(x-3)^2+(y-4)^2=25$.
:::

:::exercise
Viết phương trình tiếp tuyến của đường tròn $x^2+y^2=25$ tại điểm $M(3; 4)$.

::hint
**Kiến thức:** tiếp tuyến tại $M$ nhận $\overrightarrow{IM}$ làm vectơ pháp tuyến; ở đây $I=O(0; 0)$.

**Gợi ý các bước:**
1. Kiểm tra $M$ thuộc đường tròn.
2. Viết đường thẳng qua $M$ với $\vec{n}=\overrightarrow{OM}$.

::solution
$3^2+4^2=25$, nên $M$ thuộc đường tròn. $\overrightarrow{OM}=(3; 4)$: $3(x-3)+4(y-4)=0\iff 3x+4y-25=0$.

**Đáp số.** $3x+4y-25=0$.
:::

:::exercise
Cho đường tròn $(C): x^2+y^2-6x+2y-15=0$ và điểm $A(6; 3)$. Mỗi khẳng định sau đúng hay sai?

a) $(C)$ có tâm $I(3; -1)$.

b) $(C)$ có bán kính bằng $25$.

c) Điểm $A$ thuộc $(C)$.

d) Tiếp tuyến của $(C)$ tại $A$ có phương trình $3x+4y-30=0$.

::hint
**Kiến thức:** tâm $(a; b)$, $R=\sqrt{a^2+b^2-c}$; tiếp tuyến tại $A$ nhận $\overrightarrow{IA}$ làm vectơ pháp tuyến.

**Gợi ý các bước:**
1. Đọc $a$, $b$, $c$ và tính $R$.
2. Thay $A$ vào phương trình.
3. Tính $\overrightarrow{IA}$ và viết tiếp tuyến.

::solution
$a=3$, $b=-1$, $c=-15$, $a^2+b^2-c=9+1+15=25$.

a) **Đúng**: tâm $(a; b)=(3; -1)$.

b) **Sai**: $R^2=25$, nên $R=5$.

c) **Đúng**: $36+9-36+6-15=0$.

d) **Đúng**: $\overrightarrow{IA}=(3; 4)$, tiếp tuyến $3(x-6)+4(y-3)=0\iff 3x+4y-30=0$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Đúng.
:::

:::exercise
Đường thẳng $x+2y-5=0$ cắt đường tròn $x^2+y^2=25$ tại hai điểm $A$ và $B$. Tính độ dài $AB$ (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** dây cung dài $2\sqrt{R^2-d^2}$ với $d$ là khoảng cách từ tâm đến đường thẳng.

**Gợi ý các bước:**
1. Tính $d(O, \Delta)$.
2. Thay vào công thức độ dài dây cung.

::solution
$d=\dfrac{|0+0-5|}{\sqrt{1+4}}=\sqrt5$, nên $AB=2\sqrt{25-5}=2\sqrt{20}=4\sqrt5\approx 8{,}94$. (Giải hệ cũng cho $A(5; 0)$, $B(-3; 4)$ và $AB=\sqrt{64+16}=\sqrt{80}$.)

**Đáp số.** $8{,}94$.
:::

:::exercise
Một máy phát Wi-Fi đặt tại điểm $I(2; 3)$ trên sơ đồ một căn phòng (đơn vị: mét) và phát sóng trong bán kính $5$ m. Ba chiếc máy tính đặt tại $A(5; 6)$, $B(7; 1)$ và $C(-1; 7)$. Máy nào nằm trong vùng phủ sóng, máy nào nằm ngoài, máy nào ở đúng biên?

::hint
**Kiến thức:** so sánh $IP^2$ với $R^2=25$.

**Gợi ý các bước:**
1. Tính $IA^2$, $IB^2$, $IC^2$.
2. So sánh từng số với $25$.

::solution
$IA^2=9+9=18<25$; $IB^2=25+4=29>25$; $IC^2=9+16=25$.

**Đáp số.** $A$ trong vùng phủ sóng, $B$ ngoài, $C$ ở đúng biên.
:::

:::exercise Thử thách
Viết phương trình đường tròn tâm $I(1; 2)$ tiếp xúc với đường thẳng $\Delta: 3x-4y+15=0$, rồi tìm toạ độ tiếp điểm.

::hint
**Kiến thức:** đường tròn tiếp xúc với $\Delta$ khi $R=d(I, \Delta)$; tiếp điểm là hình chiếu của $I$ trên $\Delta$.

**Gợi ý các bước:**
1. Tính $R=d(I, \Delta)$.
2. Viết đường thẳng qua $I$ vuông góc với $\Delta$ (vectơ chỉ phương $(3; -4)$).
3. Giải hệ để tìm tiếp điểm.

::solution
$R=\dfrac{|3-8+15|}{5}=2$, nên đường tròn là $(x-1)^2+(y-2)^2=4$. Đường thẳng qua $I$ vuông góc với $\Delta$: $x=1+3t$, $y=2-4t$. Thay vào $\Delta$: $3+9t-8+16t+15=0\iff t=-\dfrac25$, cho $x=-\dfrac15$, $y=\dfrac{18}{5}$.

**Đáp số.** $(x-1)^2+(y-2)^2=4$; tiếp điểm $\left(-\dfrac15; \dfrac{18}{5}\right)$.
:::

:::exercise Ôn tập
Viết phương trình đường tròn đi qua $A(1; 1)$, $B(5; 3)$ và có tâm nằm trên trục hoành.

::hint
**Kiến thức:** tâm cách đều $A$ và $B$ nên nằm trên đường trung trực của $AB$ (xem [phương trình đường thẳng](lesson:equation-of-a-line)).

**Gợi ý các bước:**
1. Viết đường trung trực của $AB$.
2. Cho $y=0$ để tìm tâm.
3. Tính $R^2=IA^2$.

::solution
Trung điểm $(3; 2)$, $\overrightarrow{AB}=(4; 2)$: trung trực $4(x-3)+2(y-2)=0\iff 2x+y-8=0$. Với $y=0$: $x=4$, tâm $I(4; 0)$. $R^2=IA^2=9+1=10$ (và $IB^2=1+9=10$).

**Đáp số.** $(x-4)^2+y^2=10$.
:::

## Kiểm tra mini

:::quiz
::mc
Đường tròn $(x+3)^2+(y-1)^2=16$ có tâm $I$ và bán kính $R$ là
A. $I(3; -1)$, $R=4$.
B. $I(-3; 1)$, $R=16$.
C. $I(-3; 1)$, $R=4$.
D. $I(3; -1)$, $R=16$.
::key C
Viết $x+3=x-(-3)$ và $y-1$, nên tâm là $(-3; 1)$; vế phải là $R^2=16$ nên $R=4$. Phương án A sai dấu toạ độ tâm, B quên lấy căn.

::mc
Phương trình nào sau đây là phương trình của một đường tròn?
A. $x^2+y^2-2x+4y+6=0$.
B. $x^2+y^2+4x-2y+1=0$.
C. $x^2+2y^2-4x+1=0$.
D. $x^2+y^2-4x+2y+5=0$.
::key B
Với B: $a=-2$, $b=1$, $c=1$ nên $a^2+b^2-c=4>0$. Với A ta có $a^2+b^2-c=-1<0$; với D bằng $0$ (chỉ có một điểm); C có hệ số của $x^2$ và $y^2$ khác nhau.

::mc
Đường tròn đường kính $AB$ với $A(-1; 2)$, $B(3; -4)$ có phương trình là
A. $(x-1)^2+(y+1)^2=13$.
B. $(x-1)^2+(y+1)^2=52$.
C. $(x+1)^2+(y-1)^2=13$.
D. $(x-1)^2+(y+1)^2=\sqrt{13}$.
::key A
Tâm là trung điểm $(1; -1)$ của $AB$. $AB^2=16+36=52$ nên $R^2=\dfrac{AB^2}{4}=13$. Phương án B lấy $AB^2$ làm $R^2$, D viết $R$ thay cho $R^2$.

::mc
Tiếp tuyến của đường tròn $(x-2)^2+(y+1)^2=10$ tại điểm $M(3; 2)$ có phương trình là
A. $3x-y-7=0$.
B. $x+3y+1=0$.
C. $x-3y+3=0$.
D. $x+3y-9=0$.
::key D
$\overrightarrow{IM}=(1; 3)$ là vectơ pháp tuyến, tiếp tuyến đi qua $M$: $(x-3)+3(y-2)=0\iff x+3y-9=0$. Phương án A dùng $\overrightarrow{IM}$ làm vectơ chỉ phương, B cho đường thẳng đi qua tâm $I$.

::tf
Cho đường tròn $(C): x^2+y^2-4x+6y-12=0$.
a) $(C)$ có tâm $I(-2; 3)$.
b) $(C)$ có bán kính $R=5$.
c) Gốc toạ độ $O$ nằm ngoài $(C)$.
d) Đường thẳng $4x+3y+16=0$ cắt $(C)$ theo một dây cung dài $8$.
::key S Đ S Đ
a) Sai: $-2a=-4$, $-2b=6$ nên tâm là $(2; -3)$. b) Đúng: $R^2=4+9+12=25$. c) Sai: $IO^2=4+9=13<25$ nên $O$ nằm trong. d) Đúng: $d=\dfrac{|8-9+16|}{5}=3$, dây cung dài $2\sqrt{25-9}=8$.

::sa
Đường tròn tâm $I(2; -1)$ tiếp xúc với đường thẳng $4x-3y+9=0$. Tính bán kính của đường tròn.
::key 4
Đường tròn tiếp xúc với đường thẳng khi $R$ bằng khoảng cách từ tâm đến đường thẳng: $R=\dfrac{|8+3+9|}{\sqrt{16+9}}=\dfrac{20}{5}=4$.

::sa
Trên bản đồ (đơn vị: km), một trạm phát sóng đặt tại gốc toạ độ $O$ và phủ sóng trong bán kính $10$ km. Một con đường chạy dọc đường thẳng $x+y-10=0$. Đoạn đường có sóng dài bao nhiêu ki-lô-mét? (Làm tròn đến hàng phần mười.)
::key 14,1
$d=\dfrac{|-10|}{\sqrt2}=5\sqrt2<10$, nên đoạn có sóng là dây cung dài $2\sqrt{100-50}=10\sqrt2\approx14{,}1$ km.
:::
