---
title: "Ôn tập: phương pháp toạ độ trong không gian"
description: Ôn vectơ trong hệ Oxyz, phương trình mặt phẳng, đường thẳng, mặt cầu, công thức góc và khoảng cách, mô hình toạ độ thực tế theo dạng đề thi.
minutes: 40
---

:::goals
- Tính nhanh toạ độ vectơ, độ dài, tích vô hướng và góc giữa hai vectơ.
- Viết phương trình mặt phẳng, đường thẳng, mặt cầu và đọc được các yếu tố từ phương trình.
- Dùng công thức góc và khoảng cách để giải câu trắc nghiệm, Đúng/Sai và trả lời ngắn.
- Đặt hệ trục toạ độ cho một tình huống thực tế (căn phòng, máy bay, trạm phát sóng).
:::

Phương pháp toạ độ trong không gian là chủ đề "dễ lấy điểm" của lớp 12. Phần I thường có hai đến bốn câu hỏi đọc nhanh từ phương trình: vectơ pháp tuyến, tâm và bán kính mặt cầu, khoảng cách. Phần II hoặc Phần III thường có một câu tổng hợp, nhiều khi gắn với tình huống thực tế. Tổng cộng chủ đề này thường chiếm khoảng $1$ đến $1{,}5$ điểm.

Bí quyết là thuộc chắc các công thức và tính cẩn thận dấu. Bài ôn đi qua bốn mảng: vectơ, mặt phẳng, đường thẳng, mặt cầu và mô hình thực tế.

:::diagram Hệ trục toạ độ $Oxyz$ và điểm $M(2; 3; 2)$
alt: Ba trục Ox, Oy, Oz vuông góc từng đôi vẽ theo phép chiếu song song; điểm M ở phía trên mặt phẳng Oxy, hình chiếu M' của M trên mặt Oxy nối với các điểm trên trục Ox và Oy bằng nét đứt
point O 0,0 below-left
point X -2.4,-2.4 below "x"
point Y 5,0 right "y"
point Z 0,4 left "z"
point P -1.2,-1.2 left "2"
point Q 3,0 above "3"
point M' 1.8,-1.2 below "M'"
point M 1.8,0.8 above
arrow O X
arrow O Y
arrow O Z
segment P M' dashed
segment Q M' dashed
segment M' M dashed
segment O M
:::

## Vectơ và toạ độ

:::theorem Công thức với $\vec a=(a_1; a_2; a_3)$, $\vec b=(b_1; b_2; b_3)$
- $\overrightarrow{AB}=(x_B-x_A; y_B-y_A; z_B-z_A)$, $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.
- Trung điểm $I$ của $AB$: trung bình cộng toạ độ của $A$ và $B$; trọng tâm $G$ của tam giác: trung bình cộng toạ độ ba đỉnh.
- Tích vô hướng $\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3$; $\vec a\perp\vec b\iff\vec a\cdot\vec b=0$.
- $\cos(\vec a, \vec b)=\dfrac{\vec a\cdot\vec b}{|\vec a|\cdot|\vec b|}$, với $|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}$.
- Tích có hướng $[\vec a, \vec b]=(a_2b_3-a_3b_2; a_3b_1-a_1b_3; a_1b_2-a_2b_1)$ vuông góc với cả $\vec a$ và $\vec b$.
:::

:::example Trắc nghiệm: côsin của góc giữa hai vectơ
Trong không gian $Oxyz$, cho $\vec a=(1; -2; 2)$ và $\vec b=(2; 1; -2)$. Giá trị của $\cos(\vec a, \vec b)$ là

**A.** $\dfrac49$.

**B.** $-\dfrac49$.

**C.** $-\dfrac43$.

**D.** $0$.

**Lời giải.** Ta tính tích vô hướng và hai độ dài rồi thay vào công thức:

$$\vec a\cdot\vec b=2-2-4=-4,\qquad |\vec a|=\sqrt{1+4+4}=3,\qquad |\vec b|=\sqrt{4+1+4}=3.$$

Do đó $\cos(\vec a, \vec b)=\dfrac{-4}{3\cdot3}=-\dfrac49$. Chọn **B**.

**Nhìn lại.** Góc giữa hai **vectơ** có thể tù nên côsin được phép âm. Phương án A là côsin của góc giữa hai **đường thẳng** (có dấu giá trị tuyệt đối); phương án D sai dấu ở số hạng thứ hai.
:::

## Phương trình mặt phẳng

:::theorem Mặt phẳng
- Mặt phẳng qua $M(x_0; y_0; z_0)$ có vectơ pháp tuyến $\vec n=(A; B; C)$: $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.
- Mặt phẳng $Ax+By+Cz+D=0$ có vectơ pháp tuyến $\vec n=(A; B; C)$.
- Mặt phẳng qua ba điểm $A$, $B$, $C$: dùng $\vec n=[\overrightarrow{AB}, \overrightarrow{AC}]$. Mặt phẳng theo đoạn chắn qua $(a; 0; 0)$, $(0; b; 0)$, $(0; 0; c)$: $\dfrac xa+\dfrac yb+\dfrac zc=1$.
- Khoảng cách: $d(M, (P))=\dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.
- $(P)\perp(Q)\iff\vec n_P\cdot\vec n_Q=0$; $(P)\parallel(Q)$ khi hai vectơ pháp tuyến cùng phương và hai mặt phẳng không trùng nhau.
:::

:::example Đúng/Sai: mặt phẳng theo đoạn chắn
Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 0)$, $B(0; 2; 0)$, $C(0; 0; 3)$.

a) Mặt phẳng $(ABC)$ có một vectơ pháp tuyến là $\vec n=(6; 3; 2)$.

b) Gốc toạ độ $O$ thuộc mặt phẳng $(ABC)$.

c) Khoảng cách từ $O$ đến mặt phẳng $(ABC)$ bằng $\dfrac67$.

d) Mặt phẳng $(ABC)$ vuông góc với mặt phẳng $(Oxy)$.

**Lời giải.** Ba điểm nằm trên ba trục nên ta dùng phương trình đoạn chắn rồi quy đồng với mẫu chung $6$:

$$\frac x1+\frac y2+\frac z3=1\iff 6x+3y+2z-6=0.$$

a) **Đúng.** Các hệ số của $x$, $y$, $z$ là $6$, $3$, $2$.

b) **Sai.** Thay $O$: $0+0+0-6=-6\neq0$.

c) **Đúng.** $d(O, (ABC))=\dfrac{|-6|}{\sqrt{36+9+4}}=\dfrac67$.

d) **Sai.** Mặt phẳng $(Oxy)$ có vectơ pháp tuyến $\vec k=(0; 0; 1)$ và $\vec n\cdot\vec k=2\neq0$.

Vậy đáp án là a) Đúng, b) Sai, c) Đúng, d) Sai.
:::

## Phương trình đường thẳng và công thức góc

:::theorem Đường thẳng và góc
- Đường thẳng qua $M(x_0; y_0; z_0)$ có vectơ chỉ phương $\vec u=(a; b; c)$: phương trình tham số $x=x_0+at$, $y=y_0+bt$, $z=z_0+ct$; nếu $abc\neq0$, phương trình chính tắc $\dfrac{x-x_0}{a}=\dfrac{y-y_0}{b}=\dfrac{z-z_0}{c}$.
- Góc giữa hai đường thẳng: $\cos\varphi=\dfrac{|\vec u\cdot\vec u'|}{|\vec u|\cdot|\vec u'|}$.
- Góc giữa đường thẳng và mặt phẳng: $\sin\varphi=\dfrac{|\vec u\cdot\vec n|}{|\vec u|\cdot|\vec n|}$.
- Góc giữa hai mặt phẳng: $\cos\varphi=\dfrac{|\vec n\cdot\vec n'|}{|\vec n|\cdot|\vec n'|}$.
:::

Đường thẳng vuông góc với một mặt phẳng nhận vectơ pháp tuyến của mặt phẳng làm vectơ chỉ phương. Đây là ý của rất nhiều câu trắc nghiệm.

:::example Trắc nghiệm: đường thẳng vuông góc với mặt phẳng
Đường thẳng đi qua $A(1; 2; -1)$ và vuông góc với mặt phẳng $(P)\colon 2x-y+3z-5=0$ có phương trình tham số là

**A.** $x=1+2t$, $y=2-t$, $z=-1+3t$.

**B.** $x=2+t$, $y=-1+2t$, $z=3-t$.

**C.** $x=1+2t$, $y=2+t$, $z=-1+3t$.

**D.** $x=1+2t$, $y=2-t$, $z=1+3t$.

**Lời giải.** Đường thẳng vuông góc với $(P)$ nên có vectơ chỉ phương $\vec u=\vec n_P=(2; -1; 3)$; điểm đi qua là $A(1; 2; -1)$:

$$x=1+2t,\qquad y=2-t,\qquad z=-1+3t.$$

Chọn **A**. Phương án B đổi vai trò điểm và vectơ, phương án C sai dấu hệ số của $y$, phương án D sai dấu toạ độ $z$ của $A$.
:::

:::example Trả lời ngắn: góc giữa đường thẳng và mặt phẳng
Tính góc giữa đường thẳng $d\colon\dfrac{x-1}{1}=\dfrac{y}{2}=\dfrac{z+1}{2}$ và mặt phẳng $(P)\colon 2x-y+2z+3=0$ (đơn vị: độ, làm tròn kết quả đến hàng đơn vị).

**Lời giải.** Góc giữa đường thẳng và mặt phẳng dùng **sin**, với $\vec u=(1; 2; 2)$ và $\vec n=(2; -1; 2)$:

$$\sin\varphi=\frac{|2-2+4|}{\sqrt{1+4+4}\cdot\sqrt{4+1+4}}=\frac49\ \Rightarrow\ \varphi\approx26{,}39^\circ.$$

Vậy góc cần tìm khoảng $26^\circ$ (ghi $26$).
:::

:::warning Bẫy thường gặp
- **Dùng $\cos$ thay cho $\sin$** với góc giữa đường thẳng và mặt phẳng. Ở ví dụ trên, dùng $\cos$ sẽ cho khoảng $64^\circ$, là góc phụ với đáp án đúng.
- **Quên dấu giá trị tuyệt đối** khi tính góc giữa hai đường thẳng hoặc hai mặt phẳng: góc này không vượt quá $90^\circ$.
- **Đọc sai toạ độ từ phương trình chính tắc.** Từ $\dfrac{z+1}{2}$ ta có $z_0=-1$, không phải $1$.
:::

## Mặt cầu và mô hình toạ độ thực tế

:::theorem Mặt cầu
- Mặt cầu tâm $I(a; b; c)$, bán kính $R$: $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.
- Phương trình $x^2+y^2+z^2-2ax-2by-2cz+d=0$ là mặt cầu khi $a^2+b^2+c^2-d>0$; khi đó tâm $I(a; b; c)$ và $R=\sqrt{a^2+b^2+c^2-d}$.
- Với $h=d(I, (P))$: nếu $h>R$ thì $(P)$ không cắt mặt cầu; $h=R$ thì $(P)$ tiếp xúc; $h<R$ thì $(P)$ cắt theo đường tròn bán kính $r=\sqrt{R^2-h^2}$.
:::

Trong bài toán thực tế, ta đặt gốc toạ độ ở một vị trí thuận tiện (góc phòng, chân tháp, trạm radar), chọn đơn vị (m hoặc km), rồi dịch câu hỏi thành câu hỏi về điểm, đường thẳng, mặt phẳng hay mặt cầu.

:::example Trả lời ngắn: máy bay đi qua vùng phủ sóng radar
Chọn hệ trục $Oxyz$ (đơn vị: km) với trạm radar đặt tại gốc $O$. Radar phát hiện được mọi vật cách nó không quá $5$ km. Một máy bay bay thẳng với vị trí $M(1+2t; 2-t; 2)$. Tính độ dài quãng đường máy bay bay trong vùng radar phát hiện được (đơn vị: km).

**Lời giải.** *Hiểu đề.* Vùng phát hiện là khối cầu tâm $O$, bán kính $5$; quãng đường cần tìm là dây cung của đường bay nằm trong mặt cầu.

*Tìm cách giải.* Giải điều kiện $OM\le5$ theo $t$, hoặc dùng khoảng cách từ $O$ đến đường bay.

*Giải.* Bình phương điều kiện $OM\le5$:

$$(1+2t)^2+(2-t)^2+4\le25\iff 5t^2+9\le25\iff t^2\le\frac{16}{5}.$$

Vậy $t$ chạy từ $-\dfrac{4}{\sqrt5}$ đến $\dfrac{4}{\sqrt5}$. Vectơ chỉ phương $\vec u=(2; -1; 0)$ có độ dài $\sqrt5$, nên quãng đường là

$$\sqrt5\cdot\frac{8}{\sqrt5}=8\ \text{(km)}.$$

*Nhìn lại.* Điểm gần $O$ nhất ứng với $t=0$, là $H(1; 2; 2)$ với $OH=3$; theo định lí Pythagore, dây cung dài $2\sqrt{25-9}=8$, khớp với kết quả.
:::

## Thuật ngữ

:::terms
- hệ trục toạ độ Oxyz | Oxyz coordinate system
- tích vô hướng | scalar product
- tích có hướng | vector product (cross product)
- vectơ pháp tuyến | normal vector
- vectơ chỉ phương | direction vector
- phương trình tham số | parametric equations
- phương trình chính tắc | Cartesian equations (of a line)
- mặt cầu | sphere
- tiếp xúc | tangent
- khoảng cách từ điểm đến mặt phẳng | distance from a point to a plane
:::

## Bài tập

Các bài được xếp từ dễ đến khó, mỗi bài ghi rõ dạng câu hỏi trong đề thi.

:::exercise Trắc nghiệm
Mặt phẳng đi qua $M(1; -2; 3)$ và có vectơ pháp tuyến $\vec n=(2; -1; 1)$ có phương trình là

**A.** $2x-y+z-7=0$. **B.** $2x-y+z+7=0$. **C.** $x-2y+3z-7=0$. **D.** $2x-y+z-3=0$.

::hint
**Kiến thức:** $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.

**Gợi ý các bước:**
1. Thay $\vec n$ và toạ độ $M$ vào công thức.
2. Khai triển và thu gọn.

::solution
Mặt phẳng đi qua $M(x_0; y_0; z_0)$ và có vectơ pháp tuyến $\vec n=(A; B; C)$ có phương trình $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.

Với $M(1; -2; 3)$ và $\vec n=(2; -1; 1)$, ta có
$$2(x-1)-(y+2)+(z-3)=0\iff2x-y+z-7=0.$$

Vậy chọn **A**.

*Nhận xét.* Phương án C đổi vai trò của toạ độ điểm và toạ độ vectơ pháp tuyến.

**Đáp số.** A.
:::

:::exercise Trắc nghiệm
Khoảng cách từ điểm $M(1; 2; 3)$ đến mặt phẳng $(P)\colon 2x-2y+z+3=0$ bằng

**A.** $4$. **B.** $\dfrac49$. **C.** $\dfrac43$. **D.** $\dfrac23$.

::hint
**Kiến thức:** $d(M, (P))=\dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.

**Gợi ý các bước:**
1. Tính tử số $|2-4+3+3|$.
2. Tính mẫu số $\sqrt{4+4+1}$.

::solution
Áp dụng công thức khoảng cách từ điểm $M(x_0; y_0; z_0)$ đến mặt phẳng $Ax+By+Cz+D=0$:
$$d\left(M, (P)\right)=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}=\frac{|2\cdot1-2\cdot2+3+3|}{\sqrt{2^2+(-2)^2+1^2}}=\frac{4}{3}.$$

Vậy chọn **C**.

*Nhận xét.* Phương án B quên lấy căn bậc hai ở mẫu.

**Đáp số.** C.
:::

:::exercise Trắc nghiệm
Mặt cầu $(S)\colon x^2+y^2+z^2-2x+4y-6z-2=0$ có tâm $I$ và bán kính $R$ là

**A.** $I(1; -2; 3)$, $R=4$. **B.** $I(-1; 2; -3)$, $R=4$. **C.** $I(1; -2; 3)$, $R=2\sqrt3$. **D.** $I(2; -4; 6)$, $R=4$.

::hint
**Kiến thức:** $-2a=-2$, $-2b=4$, $-2c=-6$; $R=\sqrt{a^2+b^2+c^2-d}$.

**Gợi ý các bước:**
1. Tìm $a$, $b$, $c$.
2. Tính $R$ với $d=-2$.

::solution
Phương trình $x^2+y^2+z^2-2ax-2by-2cz+d=0$ (với $a^2+b^2+c^2-d>0$) là phương trình mặt cầu tâm $I(a; b; c)$, bán kính $R=\sqrt{a^2+b^2+c^2-d}$.

So sánh với phương trình đã cho, ta có $-2a=-2$, $-2b=4$, $-2c=-6$, $d=-2$, nên $a=1$, $b=-2$, $c=3$. Do đó tâm là $I(1; -2; 3)$ và
$$R=\sqrt{1^2+(-2)^2+3^2-(-2)}=\sqrt{16}=4.$$

Vậy chọn **A**.

*Nhận xét.* Phương án B sai dấu toạ độ tâm; phương án C lấy nhầm $R^2=14-2$.

**Đáp số.** A.
:::

:::exercise Đúng/Sai
Cho đường thẳng $d\colon x=1+t$, $y=2-t$, $z=2t$ và mặt phẳng $(P)\colon x+y+z-3=0$.

a) $d$ có một vectơ chỉ phương là $\vec u=(1; -1; 2)$.

b) Điểm $A(2; 1; 2)$ thuộc $d$.

c) $d$ song song với $(P)$.

d) $d$ cắt $(P)$ tại điểm $(1; 2; 0)$.

::hint
**Kiến thức:** $d\parallel(P)$ thì $\vec u\cdot\vec n=0$; giao điểm tìm bằng cách thay $x$, $y$, $z$ theo $t$ vào $(P)$.

**Gợi ý các bước:**
1. Đọc vectơ chỉ phương từ hệ số của $t$.
2. Tính $\vec u\cdot\vec n$ và giải phương trình theo $t$.

::solution
Mặt phẳng $(P)$ có vectơ pháp tuyến $\vec n=(1; 1; 1)$.

a) **Đúng.** Các hệ số của $t$ trong phương trình tham số của $d$ là $1$, $-1$, $2$, nên $\vec u=(1; -1; 2)$ là một vectơ chỉ phương của $d$.

b) **Đúng.** Với $t=1$, ta có $x=2$, $y=1$, $z=2$, nên điểm $A(2; 1; 2)$ thuộc $d$.

c) **Sai.** Ta có $\vec u\cdot\vec n=1\cdot1+(-1)\cdot1+2\cdot1=2\neq0$, nên $\vec u$ không vuông góc với $\vec n$. Do đó $d$ không song song với $(P)$.

d) **Đúng.** Thay $x$, $y$, $z$ theo $t$ vào phương trình của $(P)$, ta được
$$(1+t)+(2-t)+2t-3=0\iff2t=0\iff t=0.$$

Với $t=0$, ta được điểm $(1; 2; 0)$. Vậy $d$ cắt $(P)$ tại điểm $(1; 2; 0)$.

Vậy các mệnh đề a), b), d) đúng; mệnh đề c) sai.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise Trả lời ngắn
Tính góc giữa hai đường thẳng $d_1\colon x=t$, $y=1+t$, $z=2$ và $d_2\colon x=1$, $y=2+s$, $z=-s$ (đơn vị: độ).

::hint
**Kiến thức:** $\cos\varphi=\dfrac{|\vec u_1\cdot\vec u_2|}{|\vec u_1|\cdot|\vec u_2|}$.

**Gợi ý các bước:**
1. $\vec u_1=(1; 1; 0)$, $\vec u_2=(0; 1; -1)$.
2. Thay vào công thức.

::solution
Đường thẳng $d_1$ có vectơ chỉ phương $\vec u_1=(1; 1; 0)$; đường thẳng $d_2$ có vectơ chỉ phương $\vec u_2=(0; 1; -1)$.

Gọi $\varphi$ là góc giữa $d_1$ và $d_2$. Ta có
$$\cos\varphi=\frac{\left|\vec u_1\cdot\vec u_2\right|}{\left|\vec u_1\right|\cdot\left|\vec u_2\right|}=\frac{|1\cdot0+1\cdot1+0\cdot(-1)|}{\sqrt{1^2+1^2+0^2}\cdot\sqrt{0^2+1^2+(-1)^2}}=\frac{1}{\sqrt2\cdot\sqrt2}=\frac12.$$

Suy ra $\varphi=60^\circ$.

Vậy góc giữa hai đường thẳng bằng $60^\circ$.

**Đáp số.** $60$.
:::

:::exercise Trả lời ngắn
Cho $A(1; 0; 1)$, $B(2; 1; 0)$, $C(0; 2; 3)$. Tính khoảng cách từ gốc toạ độ $O$ đến mặt phẳng $(ABC)$ (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** vectơ pháp tuyến $\vec n=[\overrightarrow{AB}, \overrightarrow{AC}]$.

**Gợi ý các bước:**
1. $\overrightarrow{AB}=(1; 1; -1)$, $\overrightarrow{AC}=(-1; 2; 2)$; tính tích có hướng.
2. Viết phương trình $(ABC)$ rồi tính khoảng cách.

::solution
Ta có $\overrightarrow{AB}=(1; 1; -1)$ và $\overrightarrow{AC}=(-1; 2; 2)$. Một vectơ pháp tuyến của mặt phẳng $(ABC)$ là
$$\vec n=\left[\overrightarrow{AB}, \overrightarrow{AC}\right]=\big(1\cdot2-(-1)\cdot2;\ (-1)\cdot(-1)-1\cdot2;\ 1\cdot2-1\cdot(-1)\big)=(4; -1; 3).$$

Mặt phẳng $(ABC)$ đi qua $A(1; 0; 1)$ và có vectơ pháp tuyến $\vec n=(4; -1; 3)$, nên có phương trình
$$4(x-1)-y+3(z-1)=0\iff4x-y+3z-7=0.$$

Khoảng cách từ $O(0; 0; 0)$ đến mặt phẳng $(ABC)$ là
$$d\left(O, (ABC)\right)=\frac{|-7|}{\sqrt{4^2+(-1)^2+3^2}}=\frac{7}{\sqrt{26}}\approx1{,}37.$$

Vậy khoảng cách cần tìm xấp xỉ $1{,}37$.

**Đáp số.** $1{,}37$.
:::

:::exercise Trả lời ngắn
Một căn phòng dạng hình hộp chữ nhật dài $6$ m, rộng $4$ m, cao $3$ m. Chọn hệ trục $Oxyz$ có gốc ở một góc sàn, các trục chạy theo ba cạnh, đơn vị là mét. Người ta căng một sợi dây thẳng từ điểm $A(0; 0; 3)$ ở góc trần đến điểm $B(6; 4; 0)$ ở góc sàn đối diện. Tính độ dài sợi dây (đơn vị: m, làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$.

**Gợi ý các bước:**
1. Tính $\overrightarrow{AB}$.
2. Tính độ dài.

::solution
Sợi dây là đoạn thẳng $AB$ với $A(0; 0; 3)$ và $B(6; 4; 0)$. Ta có
$$\overrightarrow{AB}=(6-0;\ 4-0;\ 0-3)=(6; 4; -3).$$

Độ dài sợi dây là
$$AB=\left|\overrightarrow{AB}\right|=\sqrt{6^2+4^2+(-3)^2}=\sqrt{61}\approx7{,}81\ \text{(m)}.$$

Vậy sợi dây dài khoảng $7{,}81$ m.

**Đáp số.** $7{,}81$.
:::

:::exercise Trả lời ngắn
Một thiết bị bay không người lái xuất phát từ gốc $O$ và bay thẳng, sau $t$ giây ở vị trí $M(2t; 2t; t)$ (đơn vị: m). Vùng cấm bay là phần không gian gồm các điểm thoả mãn $x+2y+2z\ge30$. Sau bao nhiêu giây thì thiết bị bắt đầu đi vào vùng cấm bay?

::hint
**Kiến thức:** thiết bị chạm biên của vùng cấm khi toạ độ của $M$ thoả mãn $x+2y+2z=30$.

**Gợi ý các bước:**
1. Thay toạ độ $M$ vào $x+2y+2z$.
2. Giải phương trình theo $t$.

::solution
Tại thời điểm $t$ giây ($t\ge0$), thiết bị ở vị trí $M(2t; 2t; t)$. Thay toạ độ của $M$ vào vế trái của bất phương trình mô tả vùng cấm bay, ta được
$$x+2y+2z=2t+2\cdot2t+2\cdot t=8t.$$

Thiết bị ở trong vùng cấm bay khi $8t\ge30$, tức là $t\ge3{,}75$.

Với $0\le t<3{,}75$ thì $8t<30$, nên thiết bị chưa vào vùng cấm; tại $t=3{,}75$ thì $8t=30$, thiết bị bắt đầu chạm vào vùng cấm.

Vậy sau $3{,}75$ giây thì thiết bị bắt đầu đi vào vùng cấm bay.

**Đáp số.** $3{,}75$.
:::

:::exercise Tự luận
Cho điểm $A(3; 1; -2)$ và mặt phẳng $(P)\colon x+2y-2z=0$. Viết phương trình đường thẳng $d$ qua $A$ và vuông góc với $(P)$, tìm toạ độ hình chiếu vuông góc $H$ của $A$ trên $(P)$ và tính $d(A, (P))$.

::hint
**Kiến thức:** $d$ nhận $\vec n_P$ làm vectơ chỉ phương; $H=d\cap(P)$.

**Gợi ý các bước:**
1. Viết $d\colon x=3+t$, $y=1+2t$, $z=-2-2t$.
2. Thay vào $(P)$ để tìm $t$, suy ra $H$; tính $AH$.

::solution
Mặt phẳng $(P)$ có vectơ pháp tuyến $\vec n=(1; 2; -2)$.

Đường thẳng $d$ vuông góc với $(P)$ nên nhận $\vec n=(1; 2; -2)$ làm vectơ chỉ phương. Đường thẳng $d$ đi qua $A(3; 1; -2)$, nên có phương trình tham số
$$d\colon\ x=3+t,\quad y=1+2t,\quad z=-2-2t.$$

Hình chiếu vuông góc $H$ của $A$ trên $(P)$ là giao điểm của $d$ và $(P)$. Thay $x$, $y$, $z$ theo $t$ vào phương trình của $(P)$, ta được
$$(3+t)+2(1+2t)-2(-2-2t)=0\iff9+9t=0\iff t=-1.$$

Với $t=-1$, ta được $H(2; -1; 0)$.

Khoảng cách từ $A$ đến $(P)$ là
$$d\left(A, (P)\right)=AH=\sqrt{(2-3)^2+(-1-1)^2+(0+2)^2}=\sqrt9=3.$$

Kiểm tra bằng công thức: $d\left(A, (P)\right)=\dfrac{|3+2\cdot1-2\cdot(-2)|}{\sqrt{1+4+4}}=\dfrac93=3$ (khớp).

Vậy $d\colon x=3+t$, $y=1+2t$, $z=-2-2t$; $H(2; -1; 0)$ và $d\left(A, (P)\right)=3$.

**Đáp số.** $d\colon x=3+t$, $y=1+2t$, $z=-2-2t$; $H(2; -1; 0)$; $d(A, (P))=3$.
:::

:::exercise Trả lời ngắn (thử thách)
Mặt cầu $(S)$ có tâm $I(1; 2; -1)$ và tiếp xúc với mặt phẳng $(P)\colon 2x-y+2z+11=0$ tại điểm $H(a; b; c)$. Tính $a+b+c$.

::hint
**Kiến thức:** bán kính $R=d(I, (P))$; tiếp điểm là hình chiếu vuông góc của $I$ trên $(P)$.

**Gợi ý các bước:**
1. Tính $R$.
2. Viết đường thẳng qua $I$ vuông góc với $(P)$ rồi tìm giao điểm với $(P)$.

::solution
Mặt cầu $(S)$ tiếp xúc với $(P)$ nên bán kính bằng khoảng cách từ tâm $I$ đến $(P)$:
$$R=d\left(I, (P)\right)=\frac{|2\cdot1-2+2\cdot(-1)+11|}{\sqrt{2^2+(-1)^2+2^2}}=\frac{9}{3}=3.$$

Tiếp điểm $H$ là hình chiếu vuông góc của $I$ trên $(P)$. Đường thẳng $\Delta$ đi qua $I$ và vuông góc với $(P)$ nhận vectơ pháp tuyến $\vec n=(2; -1; 2)$ của $(P)$ làm vectơ chỉ phương:
$$\Delta\colon\ x=1+2s,\quad y=2-s,\quad z=-1+2s.$$

Thay vào phương trình của $(P)$, ta được
$$2(1+2s)-(2-s)+2(-1+2s)+11=0\iff9s+9=0\iff s=-1.$$

Với $s=-1$, ta được $H(-1; 3; -3)$. Do đó $a=-1$, $b=3$, $c=-3$ và
$$a+b+c=-1+3-3=-1.$$

Vậy $a+b+c=-1$.

**Đáp số.** $-1$.
:::

## Kiểm tra mini

:::quiz
::mc
Trong không gian $Oxyz$, cho $A(1; 2; 3)$ và $B(3; 0; 4)$. Độ dài đoạn thẳng $AB$ bằng
A. $9$.
B. $3$.
C. $2\sqrt2$.
D. $5$.
::key B
$\overrightarrow{AB}=(2; -2; 1)$, $AB=\sqrt{4+4+1}=3$. Phương án A quên lấy căn, phương án C bỏ toạ độ $z$, phương án D cộng các trị tuyệt đối.

::mc
Mặt phẳng $(P)\colon 2x-3z+1=0$ có một vectơ pháp tuyến là
A. $(2; -3; 1)$.
B. $(2; 0; -3)$.
C. $(2; -3; 0)$.
D. $(0; 2; -3)$.
::key B
Hệ số của $x$, $y$, $z$ lần lượt là $2$, $0$, $-3$. Các phương án khác bỏ qua việc thiếu $y$ hoặc lấy nhầm hệ số tự do.

::mc
Đường thẳng đi qua $A(1; -1; 2)$ và có vectơ chỉ phương $\vec u=(2; 1; -1)$ có phương trình tham số là
A. $x=1+2t$, $y=-1+t$, $z=2-t$.
B. $x=2+t$, $y=1-t$, $z=-1+2t$.
C. $x=1+2t$, $y=1+t$, $z=2-t$.
D. $x=-1+2t$, $y=1+t$, $z=-2-t$.
::key A
Toạ độ điểm đứng riêng, toạ độ vectơ chỉ phương đi cùng $t$. Phương án B đổi vai trò điểm và vectơ; C và D sai dấu toạ độ của $A$.

::mc
Góc giữa hai mặt phẳng $(P)\colon x-z=0$ và $(Q)\colon y-z=0$ bằng
A. $30^\circ$.
B. $45^\circ$.
C. $60^\circ$.
D. $90^\circ$.
::key C
$\vec n_P=(1; 0; -1)$, $\vec n_Q=(0; 1; -1)$, $\cos\varphi=\dfrac{|1|}{\sqrt2\cdot\sqrt2}=\dfrac12$, nên $\varphi=60^\circ$.

::tf
Cho mặt cầu $(S)\colon(x-1)^2+(y+2)^2+z^2=9$ và mặt phẳng $(P)\colon 2x+y-2z+3=0$.
a) $(S)$ có tâm $I(1; -2; 0)$.
b) $(S)$ có bán kính bằng $9$.
c) Khoảng cách từ tâm $I$ đến $(P)$ bằng $1$.
d) $(P)$ cắt $(S)$ theo một đường tròn có bán kính $2\sqrt2$.
::key Đ S Đ Đ
a) Đúng. b) Sai: $R=\sqrt9=3$. c) Đúng: $\dfrac{|2-2-0+3|}{3}=1$. d) Đúng: $r=\sqrt{9-1}=2\sqrt2$.

::sa
Tính khoảng cách giữa hai mặt phẳng song song $(P)\colon 2x-y+2z+1=0$ và $(Q)\colon 2x-y+2z-8=0$.
::key 3
Lấy $M(0; 1; 0)\in(P)$; $d(M, (Q))=\dfrac{|0-1+0-8|}{3}=3$.

::sa
Trong một căn phòng, chọn hệ trục $Oxyz$ (đơn vị: m) có gốc $O$ ở một góc sàn. Một bóng đèn treo tại điểm $L(2; 3; 4)$. Tính khoảng cách từ bóng đèn đến góc phòng $O$ (đơn vị: m, làm tròn kết quả đến hàng phần trăm).
::key 5,39
$OL=\sqrt{4+9+16}=\sqrt{29}\approx5{,}385$, làm tròn được $5{,}39$.
:::
