---
title: Véc-tơ, đường thẳng và mặt phẳng
description: IB Math AA HL: tích vô hướng và tích có hướng, góc, phương trình véc-tơ của đường thẳng, đường thẳng cắt nhau và chéo nhau, mặt phẳng, khoảng cách và góc.
minutes: 45
---

:::goals
- Dùng tích vô hướng để tìm góc và kiểm tra hai véc-tơ vuông góc.
- Dùng tích có hướng để tìm véc-tơ pháp tuyến và diện tích.
- Viết phương trình véc-tơ của đường thẳng và xét hai đường thẳng song song, cắt nhau hay chéo nhau.
- Viết phương trình mặt phẳng, tìm giao điểm, góc và khoảng cách giữa đường thẳng và mặt phẳng.
:::

Véc-tơ thường chiếm trọn một câu dài ở Section B trong Paper 1 hoặc Paper 2 của HL: vài điểm trong không gian, một đường thẳng qua hai điểm, một mặt phẳng qua ba điểm, rồi một giao điểm, một góc và một khoảng cách. Bước nào cũng dùng vài công cụ quen thuộc, nên điểm thuộc về học sinh trình bày ngăn nắp: đặt tên từng véc-tơ, viết đầy đủ từng phương trình, và kiểm tra một điểm bằng cách thay ngược lại.

## Tích vô hướng và tích có hướng

Với $\boldsymbol a=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ và $\boldsymbol b=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$:

- **Tích vô hướng (scalar product):** $\boldsymbol a\cdot\boldsymbol b=a_1b_1+a_2b_2+a_3b_3=|\boldsymbol a||\boldsymbol b|\cos\theta$. Nó bằng $0$ khi và chỉ khi hai véc-tơ vuông góc.
- **Tích có hướng (vector product):** $\boldsymbol a\times\boldsymbol b=\begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}$ vuông góc với cả hai véc-tơ, và $|\boldsymbol a\times\boldsymbol b|=|\boldsymbol a||\boldsymbol b|\sin\theta$ là diện tích hình bình hành tạo bởi chúng.

:::example Góc giữa hai véc-tơ
Tìm góc giữa $\boldsymbol a=\begin{pmatrix}2\\1\\-2\end{pmatrix}$ và $\boldsymbol b=\begin{pmatrix}1\\3\\2\end{pmatrix}$. [4 marks]

**Lời giải.** $\boldsymbol a\cdot\boldsymbol b=2+3-4=1$, $|\boldsymbol a|=3$, $|\boldsymbol b|=\sqrt{14}$. Vậy $\cos\theta=\dfrac{1}{3\sqrt{14}}$ và $\theta\approx84{,}9^\circ$.
:::

:::example Diện tích tam giác
Tính diện tích tam giác có các đỉnh $A(1,0,0)$, $B(0,2,0)$ và $C(0,0,3)$. [5 marks]

**Lời giải.** $\overrightarrow{AB}=\begin{pmatrix}-1\\2\\0\end{pmatrix}$, $\overrightarrow{AC}=\begin{pmatrix}-1\\0\\3\end{pmatrix}$ và $\overrightarrow{AB}\times\overrightarrow{AC}=\begin{pmatrix}6\\3\\2\end{pmatrix}$, có độ dài $\sqrt{36+9+4}=7$. Diện tích bằng $\dfrac72=3{,}5$.
:::

## Đường thẳng trong không gian

Đường thẳng đi qua điểm có véc-tơ vị trí $\boldsymbol a$, với véc-tơ chỉ phương $\boldsymbol b$, có phương trình véc-tơ $\boldsymbol r=\boldsymbol a+\lambda\boldsymbol b$. Hai đường thẳng trong không gian có thể **song song** (véc-tơ chỉ phương cùng phương), **cắt nhau** (có đúng một điểm chung), hoặc **chéo nhau (skew)** (không thuộc hai trường hợp trên).

:::example Cắt nhau hay chéo nhau?
$L_1:\boldsymbol r=\begin{pmatrix}1\\0\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\1\\0\end{pmatrix}$ và $L_2:\boldsymbol r=\begin{pmatrix}2\\3\\1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}$. Chứng minh hai đường thẳng chéo nhau. [5 marks]

**Lời giải.** Hai véc-tơ chỉ phương không cùng phương, nên hai đường không song song. Cho các thành phần bằng nhau:
$x$: $1+\lambda=2$, nên $\lambda=1$. $y$: $\lambda=3+\mu$, nên $\mu=-2$. $z$: $2=1+\mu$, nên $\mu=1$.
Hai giá trị của $\mu$ mâu thuẫn, nên không có điểm chung. Không song song và không cắt nhau: hai đường thẳng chéo nhau.
:::

## Mặt phẳng

Mặt phẳng có véc-tơ pháp tuyến $\boldsymbol n$ đi qua điểm $\boldsymbol a$ có phương trình $\boldsymbol r\cdot\boldsymbol n=\boldsymbol a\cdot\boldsymbol n$, hay dạng toạ độ $n_1x+n_2y+n_3z=d$. Véc-tơ pháp tuyến thường tìm bằng tích có hướng của hai véc-tơ nằm trong mặt phẳng.

:::example Mặt phẳng qua ba điểm
Viết phương trình toạ độ của mặt phẳng qua $A(1,0,0)$, $B(0,2,0)$ và $C(0,0,3)$. [3 marks]

**Lời giải.** Từ ví dụ trước, $\boldsymbol n=\begin{pmatrix}6\\3\\2\end{pmatrix}$. Khi đó $6x+3y+2z=6(1)+0+0=6$. Kiểm tra $B$: $3(2)=6$, và $C$: $2(3)=6$.
:::

:::example Đường thẳng cắt mặt phẳng
Đường thẳng $\boldsymbol r=t\begin{pmatrix}1\\1\\1\end{pmatrix}$ cắt mặt phẳng $6x+3y+2z=6$ tại $P$.
(a) Tìm toạ độ của $P$. [3 marks]
(b) Tìm góc nhọn giữa đường thẳng và mặt phẳng. [4 marks]

**Lời giải.** (a) Thay $x=y=z=t$: $11t=6$, nên $t=\dfrac{6}{11}$ và $P=\left(\dfrac{6}{11},\dfrac{6}{11},\dfrac{6}{11}\right)$.

(b) Với $\boldsymbol d=\begin{pmatrix}1\\1\\1\end{pmatrix}$: $\sin\varphi=\dfrac{|\boldsymbol n\cdot\boldsymbol d|}{|\boldsymbol n||\boldsymbol d|}=\dfrac{11}{7\sqrt3}$, nên $\varphi\approx65{,}1^\circ$. Góc với mặt phẳng dùng sin, vì $\boldsymbol n$ vuông góc với mặt phẳng.
:::

:::warning Những cái bẫy thường gặp
- **Dùng cùng một tham số cho hai đường thẳng.** Hãy dùng $\lambda$ cho đường này và $\mu$ cho đường kia.
- **Chỉ kiểm tra hai thành phần** khi xét giao điểm; thành phần thứ ba mới quyết định.
- **Góc giữa đường thẳng và mặt phẳng** tính bằng cosin thay vì sin.
- **Góc tù.** Lấy giá trị tuyệt đối của tích vô hướng khi đề hỏi góc nhọn.
- **Thứ tự trong tích có hướng.** $\boldsymbol b\times\boldsymbol a=-\boldsymbol a\times\boldsymbol b$; làm véc-tơ pháp tuyến thì dấu nào cũng được, nhưng hãy tính cẩn thận.
:::

:::terms
- position vector, direction vector | véc-tơ vị trí, véc-tơ chỉ phương
- scalar (dot) product | tích vô hướng
- vector (cross) product | tích có hướng
- normal vector | véc-tơ pháp tuyến
- parallel, intersecting, skew lines | đường thẳng song song, cắt nhau, chéo nhau
- vector equation, Cartesian equation | phương trình véc-tơ, phương trình toạ độ
- plane | mặt phẳng
- perpendicular distance | khoảng cách (theo đường vuông góc)
:::

## Bài tập tương tự

:::exercise Hai véc-tơ vuông góc
Tìm $k$ để $\begin{pmatrix}k\\2\\-1\end{pmatrix}$ và $\begin{pmatrix}3\\k\\4\end{pmatrix}$ vuông góc. [3 marks]

::hint
**Cần nhớ:** tích vô hướng bằng $0$.

::solution
$3k+2k-4=0$, nên $k=\dfrac45$.
:::

:::exercise Đường thẳng qua hai điểm
Viết một phương trình véc-tơ của đường thẳng qua $A(2,-1,3)$ và $B(4,1,0)$. [2 marks]

::hint
**Cần nhớ:** véc-tơ chỉ phương $\overrightarrow{AB}$.

::solution
$\boldsymbol r=\begin{pmatrix}2\\-1\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\2\\-3\end{pmatrix}$.
:::

:::exercise Hai đường thẳng cắt nhau
Tìm giao điểm của $L_1:\boldsymbol r=\begin{pmatrix}0\\1\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\0\\1\end{pmatrix}$ và $L_2:\boldsymbol r=\begin{pmatrix}1\\2\\3\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}$. [5 marks]

::hint
**Cần nhớ:** giải hai thành phần, rồi kiểm tra thành phần thứ ba.

::solution
$x$: $\lambda=1$. $y$: $1=2+\mu$, nên $\mu=-1$. Kiểm tra $z$: $1+\lambda=2$ và $3+\mu=2$, khớp nhau. Hai đường thẳng cắt nhau tại $(1,1,2)$.
:::

:::exercise Một tích có hướng
Tính $\begin{pmatrix}1\\2\\3\end{pmatrix}\times\begin{pmatrix}0\\1\\4\end{pmatrix}$. [2 marks]

::hint
**Cần nhớ:** công thức theo thành phần.

::solution
$\begin{pmatrix}2\cdot4-3\cdot1\\3\cdot0-1\cdot4\\1\cdot1-2\cdot0\end{pmatrix}=\begin{pmatrix}5\\-4\\1\end{pmatrix}$.
:::

:::exercise Mặt phẳng từ một điểm và véc-tơ pháp tuyến
Viết phương trình toạ độ của mặt phẳng qua $(1,2,3)$ có véc-tơ pháp tuyến $\begin{pmatrix}2\\-1\\1\end{pmatrix}$. [2 marks]

::hint
**Cần nhớ:** $2x-y+z=d$, rồi thay toạ độ điểm vào.

::solution
$d=2-2+3=3$, nên $2x-y+z=3$.
:::

## Bài tập vận dụng

:::exercise Một chiếc drone
Một chiếc drone chuyển động sao cho vị trí của nó, tính bằng km, sau $t$ giờ kể từ khi cất cánh là $\boldsymbol r=\begin{pmatrix}2\\1\\0\end{pmatrix}+t\begin{pmatrix}3\\4\\12\end{pmatrix}$, với thành phần thứ ba là độ cao.
(a) Tính tốc độ của drone. [2 marks]
(b) Tìm vị trí của drone khi nó đạt độ cao $6$ km. [2 marks]

::hint
**Cần nhớ:** tốc độ là độ dài véc-tơ chỉ phương trong mỗi giờ.

::solution
(a) $\sqrt{9+16+144}=13$ km mỗi giờ.

(b) $12t=6$, nên $t=0{,}5$ và vị trí là $(3{,}5;3;6)$.
:::

:::exercise Khoảng cách từ điểm đến mặt phẳng
Tính khoảng cách từ $P(3,1,2)$ đến mặt phẳng $2x-y+2z=1$. [4 marks]

::hint
**Cần nhớ:** khoảng cách bằng $\dfrac{|2x_0-y_0+2z_0-1|}{|\boldsymbol n|}$, hoặc tìm giao điểm của đường thẳng qua $P$ vuông góc với mặt phẳng.

::solution
$\dfrac{|6-1+4-1|}{\sqrt{4+1+4}}=\dfrac83$.
:::

:::exercise Góc giữa hai mặt phẳng
Tìm góc giữa hai mặt phẳng $x+y+z=1$ và $x-y=0$. [3 marks]

::hint
**Cần nhớ:** góc giữa hai mặt phẳng bằng góc giữa hai véc-tơ pháp tuyến.

::solution
$\begin{pmatrix}1\\1\\1\end{pmatrix}\cdot\begin{pmatrix}1\\-1\\0\end{pmatrix}=0$, nên hai mặt phẳng vuông góc: $90^\circ$.
:::

:::exercise Thử thách: chân đường vuông góc
Tìm điểm trên đường thẳng $\boldsymbol r=t\begin{pmatrix}1\\1\\1\end{pmatrix}$ gần $P(1,2,3)$ nhất, và khoảng cách ngắn nhất từ $P$ đến đường thẳng. [6 marks]

::hint
**Cần nhớ:** véc-tơ từ điểm $(t,t,t)$ đến $P$ vuông góc với véc-tơ chỉ phương.

::solution
$\begin{pmatrix}1-t\\2-t\\3-t\end{pmatrix}\cdot\begin{pmatrix}1\\1\\1\end{pmatrix}=6-3t=0$, nên $t=2$ và điểm gần nhất là $(2,2,2)$. Khoảng cách là $\sqrt{1+0+1}=\sqrt2$.
:::

:::quiz
::mc
Độ dài của $\begin{pmatrix}2\\-1\\2\end{pmatrix}$ bằng
A. $\sqrt5$
B. $9$
C. $3$
D. $5$
::key C
$\sqrt{4+1+4}=3$.

::mc
$\begin{pmatrix}1\\2\\3\end{pmatrix}\cdot\begin{pmatrix}4\\-1\\0\end{pmatrix}$ bằng
A. $2$
B. $6$
C. $-2$
D. $4$
::key A
$4-2+0=2$.

::mc
Véc-tơ nào là véc-tơ chỉ phương của đường thẳng qua $(1,1,1)$ và $(3,0,5)$?
A. $\begin{pmatrix}4\\1\\6\end{pmatrix}$
B. $\begin{pmatrix}3\\0\\5\end{pmatrix}$
C. $\begin{pmatrix}1\\1\\1\end{pmatrix}$
D. $\begin{pmatrix}2\\-1\\4\end{pmatrix}$
::key D
Lấy hiệu hai véc-tơ vị trí.

::mc
Véc-tơ pháp tuyến của mặt phẳng $3x-2y+z=7$ là
A. $\begin{pmatrix}3\\-2\\7\end{pmatrix}$
B. $\begin{pmatrix}3\\-2\\1\end{pmatrix}$
C. $\begin{pmatrix}1\\1\\1\end{pmatrix}$
D. $\begin{pmatrix}7\\0\\0\end{pmatrix}$
::key B
Các hệ số của $x$, $y$, $z$.

::tf
Cho $\boldsymbol a=\begin{pmatrix}1\\0\\0\end{pmatrix}$ và $\boldsymbol b=\begin{pmatrix}0\\1\\0\end{pmatrix}$.
a) $\boldsymbol a\cdot\boldsymbol b=0$.
b) $\boldsymbol a\times\boldsymbol b=\begin{pmatrix}0\\0\\1\end{pmatrix}$.
c) $|\boldsymbol a\times\boldsymbol b|=1$.
d) $\boldsymbol b\times\boldsymbol a=\begin{pmatrix}0\\0\\1\end{pmatrix}$.
::key T T T F
a) Đúng. b) Đúng. c) Đúng. d) Sai: $\boldsymbol b\times\boldsymbol a=-\boldsymbol a\times\boldsymbol b$.

::sa
Tính diện tích hình bình hành tạo bởi $\begin{pmatrix}3\\0\\0\end{pmatrix}$ và $\begin{pmatrix}0\\4\\0\end{pmatrix}$.
::key 12
Hai véc-tơ vuông góc, nên diện tích bằng $3\cdot4$.

::sa
Tìm $k$ để $\begin{pmatrix}2\\k\\1\end{pmatrix}$ vuông góc với $\begin{pmatrix}1\\1\\-4\end{pmatrix}$.
::key 2
$2+k-4=0$.
:::
