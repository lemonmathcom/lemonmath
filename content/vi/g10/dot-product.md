---
title: Tích vô hướng của hai vectơ
description: Định nghĩa tích vô hướng qua góc giữa hai vectơ, tính theo toạ độ, rồi dùng để xét vuông góc, tìm góc và độ dài.
minutes: 25
---

:::goals
- Tìm góc giữa hai vectơ và nêu định nghĩa tích vô hướng $\vec{a}\cdot\vec{b}$.
- Dùng các tính chất của tích vô hướng để khai triển biểu thức và tính độ dài.
- Tính $\vec{a}\cdot\vec{b}$ theo toạ độ và dùng $\vec{a}\cdot\vec{b}=0$ để xét hai vectơ vuông góc.
- Tìm góc giữa hai vectơ và các góc của tam giác từ toạ độ.
:::

Bạn kéo một chiếc xe hàng trên mặt sân bằng một sợi dây, với lực $10$ N. Sợi dây hợp với mặt đất góc $60^\circ$, và xe đi được $5$ m. Lực kéo đã sinh công bao nhiêu? Nếu dây nằm ngang, câu trả lời là $10\cdot5=50$ J. Nhưng dây đang chếch lên, vậy có còn là $50$ J không?

## Góc giữa hai vectơ

Ta thử tách lực kéo thành hai phần vuông góc: một phần dọc mặt đất, một phần thẳng đứng. Lực, phần dọc mặt đất và phần thẳng đứng tạo thành một tam giác vuông có góc $60^\circ$, nên:

$$\text{phần dọc mặt đất}=10\cos60^\circ=10\cdot\frac12=5\ \text{(N)}.$$

Chỉ phần này kéo xe đi; phần thẳng đứng chỉ nhấc nhẹ xe lên. Vậy công là $5\cdot5=25$ J, tức $10\cdot5\cdot\cos60^\circ$. Con số này phụ thuộc vào **độ dài hai vectơ** (lực, độ dời) và **góc giữa chúng**. Ta đặt tên cho nó là tích vô hướng.

Trước hết cần nói rõ góc giữa hai vectơ. Đặt hai vectơ khác $\vec{0}$ là $\vec{a}$ và $\vec{b}$ sao cho chúng cùng xuất phát từ một điểm $O$: $\overrightarrow{OA}=\vec{a}$, $\overrightarrow{OB}=\vec{b}$. **Góc giữa** hai vectơ, kí hiệu $(\vec{a}, \vec{b})$, là góc $\widehat{AOB}$, với $0^\circ\le(\vec{a}, \vec{b})\le 180^\circ$.

:::diagram Góc $\theta$ giữa $\vec{a}$ và $\vec{b}$
alt: Hai mũi tên a và b xuất phát từ gốc O, có cung tròn đánh dấu góc theta giữa chúng
point O 0,0 below-left
point A 4,0 below ""
point B 2,3 above ""
arrow O A "a"
arrow O B "b"
angle A O B "θ"
:::

Nếu góc bằng $0^\circ$ thì hai vectơ cùng hướng; bằng $180^\circ$ thì ngược hướng; bằng $90^\circ$ thì chúng vuông góc, viết là $\vec{a}\perp\vec{b}$.

## Định nghĩa tích vô hướng

:::definition Tích vô hướng
Với hai vectơ khác $\vec{0}$ là $\vec{a}$ và $\vec{b}$,
$$\vec{a}\cdot\vec{b}=|\vec{a}|\,|\vec{b}|\cos(\vec{a}, \vec{b}).$$
Nếu $\vec{a}=\vec{0}$ hoặc $\vec{b}=\vec{0}$ thì $\vec{a}\cdot\vec{b}=0$.
:::

Kết quả là một **số**, không phải vectơ. Dấu của nó là dấu của côsin: dương khi góc nhọn, âm khi góc tù, bằng $0$ khi góc vuông. Đặc biệt $\vec{a}\cdot\vec{a}=|\vec{a}|^2$, vì góc bằng $0^\circ$ và $\cos 0^\circ=1$. Ở bài toán mở đầu, công chính là tích vô hướng của vectơ lực và vectơ độ dời: $25$ J.

Ví dụ đầu tiên cho thấy góc làm thay đổi tích vô hướng thế nào.

:::example Ba góc khác nhau
Cho $|\vec{a}|=3$ và $|\vec{b}|=4$. Tìm $\vec{a}\cdot\vec{b}$ khi góc giữa hai vectơ là $60^\circ$, $120^\circ$ và $90^\circ$.

**Lời giải.** Ta thay vào định nghĩa, chỉ có $\cos$ thay đổi:

$$\begin{aligned}
60^\circ&: & 3\cdot 4\cdot\cos 60^\circ&=12\cdot\tfrac12=6,\\
120^\circ&: & 3\cdot 4\cdot\cos 120^\circ&=12\cdot\left(-\tfrac12\right)=-6,\\
90^\circ&: & 3\cdot 4\cdot\cos 90^\circ&=0.
\end{aligned}$$

Vậy tích vô hướng lần lượt là $6$, $-6$ và $0$: góc tù cho số âm, góc vuông cho số $0$.
:::

Khi hai vectơ không chung điểm đầu, ta phải dời một vectơ trước khi đọc góc.

:::example Trong tam giác đều
Tam giác đều $ABC$ có cạnh $4$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$ và $\overrightarrow{AB}\cdot\overrightarrow{BC}$.

**Lời giải.** Hai vectơ $\overrightarrow{AB}$, $\overrightarrow{AC}$ chung điểm đầu $A$, nên góc giữa chúng là $\widehat{BAC}=60^\circ$:

$$\overrightarrow{AB}\cdot\overrightarrow{AC}=4\cdot4\cdot\cos60^\circ=8.$$

Hai vectơ $\overrightarrow{AB}$, $\overrightarrow{BC}$ nối đuôi nhau. Dời $\overrightarrow{AB}$ về điểm đầu $B$: ta được vectơ $\overrightarrow{BD}$ nằm trên tia đối của tia $BA$. Góc giữa $\overrightarrow{BD}$ và $\overrightarrow{BC}$ là góc ngoài tại $B$, bằng $180^\circ-60^\circ=120^\circ$:

$$\overrightarrow{AB}\cdot\overrightarrow{BC}=4\cdot4\cdot\cos120^\circ=-8.$$

Vậy $\overrightarrow{AB}\cdot\overrightarrow{AC}=8$ và $\overrightarrow{AB}\cdot\overrightarrow{BC}=-8$.
:::

## Tính chất

:::theorem Tính chất của tích vô hướng
Với mọi vectơ $\vec{a}, \vec{b}, \vec{c}$ và số $k$:
- $\vec{a}\cdot\vec{b}=\vec{b}\cdot\vec{a}$ (giao hoán),
- $\vec{a}\cdot(\vec{b}+\vec{c})=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c}$ (phân phối),
- $(k\vec{a})\cdot\vec{b}=k(\vec{a}\cdot\vec{b})=\vec{a}\cdot(k\vec{b})$,
- $\vec{a}\cdot\vec{a}=|\vec{a}|^2\ge 0$.
:::

Nhờ các tính chất này, ta khai triển như với hằng đẳng thức đáng nhớ:
$$|\vec{a}+\vec{b}|^2=(\vec{a}+\vec{b})\cdot(\vec{a}+\vec{b})=|\vec{a}|^2+2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2,$$
$$|\vec{a}-\vec{b}|^2=|\vec{a}|^2-2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2.$$

Các hằng đẳng thức này cho phép tính độ dài của một tổng mà không cần vẽ hình.

:::example Độ dài của vectơ tổng và hiệu
Cho $|\vec{a}|=2$, $|\vec{b}|=3$ và $(\vec{a}, \vec{b})=60^\circ$. Tính $|\vec{a}+\vec{b}|$ và $|\vec{a}-\vec{b}|$.

**Lời giải.** Ta tính $\vec{a}\cdot\vec{b}$ trước, rồi thay vào hai hằng đẳng thức:

$$\vec{a}\cdot\vec{b}=2\cdot3\cdot\cos60^\circ=3.$$

$$|\vec{a}+\vec{b}|^2=4+2\cdot3+9=19,\qquad |\vec{a}-\vec{b}|^2=4-2\cdot3+9=7.$$

Vậy $|\vec{a}+\vec{b}|=\sqrt{19}$ và $|\vec{a}-\vec{b}|=\sqrt{7}$.

**Kiểm tra.** $\sqrt{19}\approx4{,}36<2+3=5$: độ dài của tổng không vượt quá tổng độ dài.
:::

## Tích vô hướng theo toạ độ

:::theorem Công thức toạ độ
Nếu $\vec{a}=(x_1; y_1)$ và $\vec{b}=(x_2; y_2)$ thì
$$\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2.$$
:::

**Vì sao?** Viết $\vec{a}=x_1\vec{i}+y_1\vec{j}$, $\vec{b}=x_2\vec{i}+y_2\vec{j}$ và khai triển. Vì $\vec{i}\cdot\vec{i}=\vec{j}\cdot\vec{j}=1$ (độ dài $1$) và $\vec{i}\cdot\vec{j}=0$ (vuông góc), chỉ còn lại $x_1x_2+y_1y_2$.

Từ công thức này có hai hệ quả:
- $\vec{a}\perp\vec{b}\iff x_1x_2+y_1y_2=0$ (với hai vectơ khác $\vec{0}$).
- $\cos(\vec{a}, \vec{b})=\dfrac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\,\sqrt{x_2^2+y_2^2}}$.

Ví dụ sau dùng hệ quả thứ hai để tìm một góc không đặc biệt.

:::example Tích vô hướng và góc
Với $\vec{a}=(2; 3)$ và $\vec{b}=(4; -1)$, tìm $\vec{a}\cdot\vec{b}$ và góc giữa hai vectơ (làm tròn đến $0{,}1$ độ).

**Lời giải.** Tính tích vô hướng và hai độ dài, rồi chia:

$$\vec{a}\cdot\vec{b}=2\cdot 4+3\cdot(-1)=5,\qquad |\vec{a}|=\sqrt{13},\quad |\vec{b}|=\sqrt{17}.$$

$$\cos(\vec{a}, \vec{b})=\frac{5}{\sqrt{13}\cdot\sqrt{17}}=\frac{5}{\sqrt{221}}\approx 0{,}336.$$

Vậy $\vec{a}\cdot\vec{b}=5$ và góc giữa hai vectơ xấp xỉ $70{,}3^\circ$.
:::

## Các góc trong tam giác

Để tìm góc tại một đỉnh, ta dùng hai vectơ **xuất phát từ đỉnh đó**.

:::diagram Tam giác $ABC$
alt: Tam giác có các đỉnh A(1; 2), B(3; 1), C(2; 4) và dấu góc vuông tại A
point A 1,2 left
point B 3,1 below-right
point C 2,4 above
polygon A B C
right B A C
grid
:::

:::example Các góc của tam giác
Tìm các góc của tam giác có $A(1; 2)$, $B(3; 1)$ và $C(2; 4)$.

**Lời giải.** Tại $A$ ta dùng $\overrightarrow{AB}=(2; -1)$ và $\overrightarrow{AC}=(1; 2)$:

$$\overrightarrow{AB}\cdot\overrightarrow{AC}=2\cdot1+(-1)\cdot2=0,\quad\text{nên}\quad\widehat{A}=90^\circ.$$

Tại $B$ ta dùng $\overrightarrow{BA}=(-2; 1)$ và $\overrightarrow{BC}=(-1; 3)$:

$$\cos B=\frac{(-2)(-1)+1\cdot3}{\sqrt5\cdot\sqrt{10}}=\frac{5}{\sqrt{50}}=\frac{1}{\sqrt2},\quad\text{nên}\quad\widehat{B}=45^\circ.$$

Tổng ba góc bằng $180^\circ$, nên $\widehat{C}=45^\circ$. Vậy tam giác $ABC$ vuông cân tại $A$.
:::

Điều kiện vuông góc còn giúp tìm một điểm chưa biết.

:::example Tìm điểm để có góc vuông
Cho $A(1; 2)$ và $B(3; 1)$. Tìm điểm $C$ trên trục hoành sao cho tam giác $ABC$ vuông tại $A$.

**Lời giải.** Gọi $C(t; 0)$. Tam giác vuông tại $A$ khi $\overrightarrow{AB}\perp\overrightarrow{AC}$, với $\overrightarrow{AB}=(2; -1)$ và $\overrightarrow{AC}=(t-1; -2)$:

$$2(t-1)+(-1)(-2)=0\iff 2t=0\iff t=0.$$

Vậy $C(0; 0)$.

**Kiểm tra.** $\overrightarrow{AC}=(-1; -2)$ và $2\cdot(-1)+(-1)(-2)=0$.
:::

:::warning Những sai lầm thường gặp
- **Coi tích vô hướng là vectơ.** Sai: "$\vec{a}\cdot\vec{b}=(8; -3)$" với $\vec{a}=(2; 3)$, $\vec{b}=(4; -1)$. Đúng: $\vec{a}\cdot\vec{b}=8-3=5$, một số.
- **Đọc góc khi hai vectơ không chung điểm đầu.** Sai: "$(\overrightarrow{AB}, \overrightarrow{BC})=\widehat{ABC}$". Phải dời vectơ cho chung điểm đầu; trong tam giác đều, góc đó là $120^\circ$, không phải $60^\circ$.
- **Quên số hạng giữa.** Sai: $|\vec{a}+\vec{b}|^2=|\vec{a}|^2+|\vec{b}|^2$. Đúng: $|\vec{a}+\vec{b}|^2=|\vec{a}|^2+2\vec{a}\cdot\vec{b}+|\vec{b}|^2$; hai vế chỉ bằng nhau khi $\vec{a}\perp\vec{b}$.
- **Từ $\vec{a}\cdot\vec{b}=0$ suy ra $\vec{a}=\vec{0}$ hoặc $\vec{b}=\vec{0}$.** Hai vectơ khác $\vec{0}$ nhưng vuông góc cũng cho tích bằng $0$.
:::

## Thuật ngữ

:::terms
- góc giữa hai vectơ | angle between two vectors
- tích vô hướng | scalar product (dot product)
- vuông góc | perpendicular
- góc nhọn | acute angle
- góc tù | obtuse angle
- công (vật lí) | work (physics)
- giao hoán | commutative
- phân phối | distributive
:::

## Tóm tắt

- Góc $(\vec{a}, \vec{b})$: đặt hai vectơ chung điểm đầu; $0^\circ\le(\vec{a}, \vec{b})\le180^\circ$.
- $\vec{a}\cdot\vec{b}=|\vec{a}|\,|\vec{b}|\cos(\vec{a}, \vec{b})$ là một số; $\vec{a}\cdot\vec{a}=|\vec{a}|^2$.
- Giao hoán, phân phối; $|\vec{a}\pm\vec{b}|^2=|\vec{a}|^2\pm2\vec{a}\cdot\vec{b}+|\vec{b}|^2$.
- Toạ độ: $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2$; $\vec{a}\perp\vec{b}\iff x_1x_2+y_1y_2=0$.
- $\cos(\vec{a}, \vec{b})=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}|\,|\vec{b}|}$; góc tại một đỉnh tam giác dùng hai vectơ xuất phát từ đỉnh đó.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm $\vec{a}\cdot\vec{b}$ trong hai trường hợp: (a) $|\vec{a}|=5$, $|\vec{b}|=2$, $(\vec{a}, \vec{b})=60^\circ$; (b) $|\vec{a}|=4$, $|\vec{b}|=3$, $(\vec{a}, \vec{b})=150^\circ$.

::hint
**Kiến thức:** $\vec{a}\cdot\vec{b}=|\vec{a}|\,|\vec{b}|\cos(\vec{a}, \vec{b})$; $\cos150^\circ=-\dfrac{\sqrt3}{2}$.

**Gợi ý các bước:**
1. Nhân hai độ dài.
2. Nhân với côsin của góc, chú ý dấu khi góc tù.

::solution
(a) $5\cdot 2\cdot\cos 60^\circ=10\cdot\dfrac12=5$.
(b) $4\cdot 3\cdot\cos 150^\circ=12\cdot\left(-\dfrac{\sqrt3}{2}\right)=-6\sqrt3$.

**Đáp số.** (a) $5$; (b) $-6\sqrt3$.
:::

:::exercise
Tính $\vec{a}\cdot\vec{b}$ với $\vec{a}=(1; -3)$, $\vec{b}=(2; 5)$. Hai vectơ $\vec{u}=(2; 1)$ và $\vec{v}=(-1; 2)$ có vuông góc không?

::hint
**Kiến thức:** $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2$; $\vec{u}\perp\vec{v}\iff\vec{u}\cdot\vec{v}=0$.

**Gợi ý các bước:**
1. Nhân hoành độ với hoành độ, tung độ với tung độ, rồi cộng.
2. Kiểm tra tích của $\vec{u}$, $\vec{v}$ có bằng $0$ không.

::solution
$\vec{a}\cdot\vec{b}=1\cdot 2+(-3)\cdot 5=2-15=-13$. $\vec{u}\cdot\vec{v}=2\cdot(-1)+1\cdot2=0$, nên $\vec{u}\perp\vec{v}$.

**Đáp số.** $\vec{a}\cdot\vec{b}=-13$; $\vec{u}\perp\vec{v}$.
:::

:::exercise
Tìm góc giữa hai vectơ $\vec{a}=(1; 2)$ và $\vec{b}=(3; 1)$.

::hint
**Kiến thức:** $\cos(\vec{a}, \vec{b})=\dfrac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\,\sqrt{x_2^2+y_2^2}}$.

**Gợi ý các bước:**
1. Tính tích vô hướng và hai độ dài.
2. Tính côsin rồi nhận ra góc đặc biệt.

::solution
$\vec{a}\cdot\vec{b}=3+2=5$, $|\vec{a}|=\sqrt5$, $|\vec{b}|=\sqrt{10}$, nên $\cos(\vec{a}, \vec{b})=\dfrac{5}{\sqrt{50}}=\dfrac{1}{\sqrt2}$.

**Đáp số.** $(\vec{a}, \vec{b})=45^\circ$.
:::

:::exercise
Tìm $\widehat{A}$ của tam giác có $A(-1; 0)$, $B(2; 0)$, $C(2; 3)$.

::hint
**Kiến thức:** góc tại $A$ là góc giữa $\overrightarrow{AB}$ và $\overrightarrow{AC}$.

**Gợi ý các bước:**
1. Tìm toạ độ $\overrightarrow{AB}$, $\overrightarrow{AC}$.
2. Tính $\cos A$ bằng công thức toạ độ.

::solution
$\overrightarrow{AB}=(3; 0)$, $\overrightarrow{AC}=(3; 3)$, tích vô hướng bằng $9$, độ dài là $3$ và $3\sqrt2$. Do đó $\cos A=\dfrac{9}{9\sqrt2}=\dfrac{1}{\sqrt2}$.

**Đáp số.** $\widehat{A}=45^\circ$.
:::

:::exercise
Cho $|\vec{a}|=2$, $|\vec{b}|=3$ và $\vec{a}\cdot\vec{b}=-3$. Tìm $|\vec{a}+\vec{b}|$ và $|\vec{a}-\vec{b}|$.

::hint
**Kiến thức:** $|\vec{a}\pm\vec{b}|^2=|\vec{a}|^2\pm2\vec{a}\cdot\vec{b}+|\vec{b}|^2$.

**Gợi ý các bước:**
1. Thay số vào hai hằng đẳng thức, chú ý $\vec{a}\cdot\vec{b}$ âm.
2. Lấy căn bậc hai.

::solution
$|\vec{a}+\vec{b}|^2=4+2\cdot(-3)+9=7$ và $|\vec{a}-\vec{b}|^2=4-2\cdot(-3)+9=19$.

**Đáp số.** $|\vec{a}+\vec{b}|=\sqrt7$; $|\vec{a}-\vec{b}|=\sqrt{19}$.
:::

:::exercise
Một người đẩy xe nôi bằng lực $20$ N theo tay đẩy hợp với phương chuyển động góc $30^\circ$. Xe đi thẳng được $3$ m. Tính công của lực đẩy theo đơn vị jun, làm tròn đến hàng đơn vị.

::hint
**Kiến thức:** công $A=\vec{F}\cdot\vec{d}=|\vec{F}|\,|\vec{d}|\cos(\vec{F}, \vec{d})$; $\cos30^\circ=\dfrac{\sqrt3}{2}$.

**Gợi ý các bước:**
1. Thay độ lớn lực, quãng đường và góc vào công thức.
2. Tính giá trị gần đúng rồi làm tròn.

::solution
$$A=20\cdot 3\cdot\cos 30^\circ=60\cdot\frac{\sqrt3}{2}=30\sqrt3\approx 51{,}96\ \text{(J)}.$$

**Đáp số.** $52$.
:::

:::exercise
Cho $\vec{a}=(3; 4)$, $\vec{b}=(4; -3)$ và $\vec{c}=(6; 8)$. Mỗi khẳng định sau đúng hay sai?

a) $\vec{a}\perp\vec{b}$.
b) $|\vec{b}|=5$.
c) $(\vec{a}, \vec{c})=180^\circ$.
d) $\vec{a}\cdot(\vec{b}+\vec{c})=25$.

::hint
**Kiến thức:** công thức toạ độ của tích vô hướng và độ dài; tính chất phân phối.

**Gợi ý các bước:**
1. Tính $\vec{a}\cdot\vec{b}$, $|\vec{b}|$.
2. So sánh $\vec{c}$ với $\vec{a}$; tính $\vec{a}\cdot\vec{c}$.

::solution
a) **Đúng.** $\vec{a}\cdot\vec{b}=12-12=0$.

b) **Đúng.** $|\vec{b}|=\sqrt{16+9}=5$.

c) **Sai.** $\vec{c}=2\vec{a}$ cùng hướng với $\vec{a}$, nên $(\vec{a}, \vec{c})=0^\circ$.

d) **Sai.** $\vec{a}\cdot(\vec{b}+\vec{c})=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c}=0+(18+32)=50$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Sai.
:::

:::exercise
(Ôn lại định lí côsin.) Tam giác $ABC$ có $AB=5$, $AC=8$, $\widehat{BAC}=60^\circ$. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$, rồi dùng $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$ để tính $BC$.

::hint
**Kiến thức:** định nghĩa tích vô hướng; $|\vec{a}-\vec{b}|^2=|\vec{a}|^2-2\vec{a}\cdot\vec{b}+|\vec{b}|^2$.

**Gợi ý các bước:**
1. $\overrightarrow{AB}\cdot\overrightarrow{AC}=5\cdot8\cdot\cos60^\circ$.
2. Bình phương $\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}$.

::solution
$\overrightarrow{AB}\cdot\overrightarrow{AC}=5\cdot8\cdot\dfrac12=20$. Khi đó
$$BC^2=AC^2-2\,\overrightarrow{AB}\cdot\overrightarrow{AC}+AB^2=64-40+25=49.$$
Đây chính là định lí côsin $BC^2=AB^2+AC^2-2\,AB\cdot AC\cos A$.

**Đáp số.** $\overrightarrow{AB}\cdot\overrightarrow{AC}=20$; $BC=7$.
:::

:::exercise Thử thách
Tìm vectơ $\vec{b}$ vuông góc với $\vec{a}=(3; 4)$ và có $|\vec{b}|=10$.

::hint
**Kiến thức:** $\vec{b}=(x; y)\perp\vec{a}\iff 3x+4y=0$; mọi vectơ như vậy có dạng $t(4; -3)$.

**Gợi ý các bước:**
1. Viết $\vec{b}=t(4; -3)$ và tính $|\vec{b}|$ theo $t$.
2. Giải $|\vec{b}|=10$.

::solution
$\vec{b}=(4t; -3t)$ thoả mãn $3\cdot4t+4\cdot(-3t)=0$. $|\vec{b}|=5|t|=10$ cho $t=\pm2$.

**Đáp số.** $\vec{b}=(8; -6)$ hoặc $\vec{b}=(-8; 6)$.
:::

:::exercise Thử thách
Chứng minh rằng nếu $|\vec{a}|=|\vec{b}|$ thì $(\vec{a}+\vec{b})\perp(\vec{a}-\vec{b})$. Kiểm tra với $\vec{a}=(3; 4)$ và $\vec{b}=(5; 0)$, rồi giải thích kết quả bằng hình thoi.

::hint
**Kiến thức:** tính chất phân phối và $\vec{a}\cdot\vec{a}=|\vec{a}|^2$.

**Gợi ý các bước:**
1. Khai triển $(\vec{a}+\vec{b})\cdot(\vec{a}-\vec{b})$ như hằng đẳng thức hiệu hai bình phương.
2. Thay số để kiểm tra.

::solution
$$(\vec{a}+\vec{b})\cdot(\vec{a}-\vec{b})=|\vec{a}|^2-\vec{a}\cdot\vec{b}+\vec{b}\cdot\vec{a}-|\vec{b}|^2=|\vec{a}|^2-|\vec{b}|^2=0.$$
**Kiểm tra.** $|\vec{a}|=|\vec{b}|=5$, $\vec{a}+\vec{b}=(8; 4)$, $\vec{a}-\vec{b}=(-2; 4)$ và $-16+16=0$. Hình bình hành dựng trên $\vec{a}$, $\vec{b}$ có hai cạnh kề bằng nhau là hình thoi, và $\vec{a}+\vec{b}$, $\vec{a}-\vec{b}$ là hai đường chéo của nó.

**Đáp số.** Đã chứng minh: hai đường chéo của hình thoi vuông góc với nhau.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $|\vec a|=4$, $|\vec b|=5$ và $(\vec a, \vec b)=120^\circ$. Tích vô hướng $\vec a\cdot\vec b$ bằng
A. $10$.
B. $-10$.
C. $20$.
D. $-10\sqrt3$.
::key B
$\vec a\cdot\vec b=4\cdot5\cdot\cos120^\circ=20\cdot\left(-\dfrac12\right)=-10$. Phương án A quên dấu âm của $\cos120^\circ$; C quên nhân với côsin.

::mc
Cho $\vec a=(2; -3)$ và $\vec b=(4; 1)$. Khi đó $\vec a\cdot\vec b$ bằng
A. $5$.
B. $(8; -3)$.
C. $11$.
D. $-5$.
::key A
$\vec a\cdot\vec b=2\cdot4+(-3)\cdot1=8-3=5$. Tích vô hướng là một số, không phải vectơ (phương án B).

::mc
Vectơ nào sau đây vuông góc với $\vec a=(3; -2)$?
A. $(2; 3)$.
B. $(3; 2)$.
C. $(-3; 2)$.
D. $(2; -3)$.
::key A
$3\cdot2+(-2)\cdot3=0$. Với B, C, D tích vô hướng lần lượt là $5$, $-13$, $12$, đều khác $0$; vectơ ở C ngược hướng với $\vec a$.

::mc
Tam giác $ABC$ đều có cạnh bằng $2$. Tích vô hướng $\overrightarrow{AB}\cdot\overrightarrow{BC}$ bằng
A. $2$.
B. $-2$.
C. $4$.
D. $2\sqrt3$.
::key B
Hai vectơ không chung gốc; dời $\overrightarrow{AB}$ về gốc $B$ thì góc giữa chúng là $180^\circ-60^\circ=120^\circ$. Vậy tích bằng $2\cdot2\cdot\cos120^\circ=-2$. Phương án A lấy nhầm góc $\widehat{ABC}=60^\circ$.

::tf
Trong mặt phẳng toạ độ, cho $A(1; 1)$, $B(4; 2)$, $C(2; 4)$.
a) $\overrightarrow{AB}\cdot\overrightarrow{AC}=6$.
b) Tam giác $ABC$ cân tại $A$.
c) $\widehat{BAC}=60^\circ$.
d) Góc $\widehat{ABC}$ là góc tù.
::key Đ Đ S S
$\overrightarrow{AB}=(3; 1)$, $\overrightarrow{AC}=(1; 3)$. a) Đúng: $3+3=6$. b) Đúng: $AB=AC=\sqrt{10}$. c) Sai: $\cos A=\dfrac{6}{10}=0{,}6\ne\dfrac12$ (góc $A\approx53{,}1^\circ$). d) Sai: $\overrightarrow{BA}\cdot\overrightarrow{BC}=(-3)(-2)+(-1)\cdot2=4>0$ nên góc $B$ nhọn.

::sa
Cho $|\vec a|=3$, $|\vec b|=4$ và $(\vec a, \vec b)=60^\circ$. Tính $|\vec a+\vec b|$ (làm tròn đến hàng phần trăm).
::key 6,08
$\vec a\cdot\vec b=3\cdot4\cdot\dfrac12=6$, nên $|\vec a+\vec b|^2=9+2\cdot6+16=37$ và $|\vec a+\vec b|=\sqrt{37}\approx6{,}08$.

::sa
Một người kéo một thùng hàng trượt trên sàn bằng một sợi dây với lực $50$ N; dây hợp với hướng chuyển động một góc $40^\circ$. Thùng hàng di chuyển được $10$ m. Tính công của lực kéo (đơn vị: J, làm tròn đến hàng đơn vị).
::key 383
$W=\vec F\cdot\vec d=50\cdot10\cdot\cos40^\circ\approx383$ (J).
:::
