---
title: Căn bậc ba và căn thức bậc ba
description: Hiểu căn bậc ba của một số thực, tính căn bậc ba bằng định nghĩa và máy tính, dùng ∛(A³) = A để rút gọn căn thức bậc ba.
minutes: 20
---

:::goals
- Hiểu căn bậc ba của một số thực và tìm căn bậc ba của những số đơn giản.
- Dùng máy tính cầm tay để tính gần đúng căn bậc ba.
- Nhận biết căn thức bậc ba, dùng $\sqrt[3]{A^3}=A$ để tính và rút gọn.
:::

Một khối Rubik lớn được ghép từ $27$ khối lập phương nhỏ giống nhau. Mỗi cạnh của khối lớn có mấy khối nhỏ? Một hộp quà hình lập phương có thể tích $2$ lít, tức $2000$ cm³. Cạnh hộp dài bao nhiêu xăng-ti-mét?

Câu hỏi thứ nhất: $3\cdot3\cdot3=27$, nên mỗi cạnh có $3$ khối. Câu hỏi thứ hai cần một số mà **lập phương** lên bằng $2000$. Đó là căn bậc ba.

:::diagram Hình lập phương cạnh $a$, thể tích $a^3$
alt: Hình lập phương vẽ theo phép chiếu song song, các cạnh khuất vẽ nét đứt, một cạnh đáy ghi là a
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,3 left
point B' 3,3 above
point C' 4.2,4.4 above-right
point D' 1.2,4.4 above
segment A B "a"
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
:::

## Căn bậc ba của một số thực

### Khám phá: lập phương của vài số

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $x^3$ | $-27$ | $-8$ | $-1$ | $0$ | $1$ | $8$ | $27$ |

Khác với bình phương, lập phương của một số âm là số âm. Mỗi giá trị trong hàng dưới xuất hiện đúng một lần. Chẳng hạn, chỉ có một số lập phương bằng $-8$, đó là $-2$.

:::definition Căn bậc ba
**Căn bậc ba** của số thực $a$ là số $x$ sao cho $x^3=a$.

Mỗi số thực $a$ có **đúng một** căn bậc ba, kí hiệu là $\sqrt[3]{a}$. Số $3$ gọi là **chỉ số** của căn.

Từ định nghĩa: $\left(\sqrt[3]{a}\right)^3=a$ và $\sqrt[3]{a^3}=a$ với mọi số thực $a$.
:::

Ghi nhớ: căn bậc ba của số dương là số dương, của số âm là số âm, của $0$ là $0$. Hơn nữa $\sqrt[3]{-a}=-\sqrt[3]{a}$.

:::example Tìm căn bậc ba
Tìm: a) $\sqrt[3]{64}$; b) $\sqrt[3]{-125}$; c) $\sqrt[3]{0{,}008}$; d) $\sqrt[3]{-\dfrac{8}{27}}$.

**Lời giải.** Ta có

$$4^3=64,\qquad (-5)^3=-125,\qquad 0{,}2^3=0{,}008,\qquad \left(-\frac23\right)^3=-\frac{8}{27}.$$

Vậy a) $4$; b) $-5$; c) $0{,}2$; d) $-\dfrac23$.
:::

Với số như $2000$, không có số nguyên nào lập phương bằng $2000$ (vì $12^3=1728$, $13^3=2197$). Ta dùng máy tính.

:::example Cạnh của hộp quà
Tính cạnh hộp quà có thể tích $2000$ cm³ (làm tròn đến hàng phần mười).

**Lời giải.** Gọi $a$ (cm) là độ dài cạnh hộp quà ($a>0$). Ta có $a^3=2000$, suy ra $a=\sqrt[3]{2000}$. Dùng máy tính cầm tay, ta được

$$a=\sqrt[3]{2000}\approx12{,}599\approx12{,}6.$$

Vậy cạnh hộp quà dài khoảng $12{,}6$ cm.
:::

Hai đẳng thức $\left(\sqrt[3]{a}\right)^3=a$ và $\sqrt[3]{a^3}=a$ giúp tính nhanh nhiều biểu thức.

:::example Tính giá trị biểu thức
Tính $A=\sqrt[3]{27}-\sqrt[3]{-64}+\left(\sqrt[3]{3}\right)^3$.

**Lời giải.** Ta có $\sqrt[3]{27}=3$, $\sqrt[3]{-64}=-4$ và $\left(\sqrt[3]{3}\right)^3=3$. Do đó

$$A=3-(-4)+3=10.$$

Vậy $A=10$.
:::

## So sánh căn bậc ba

Lập phương giữ nguyên thứ tự: số lớn hơn có lập phương lớn hơn. Vì thế, với mọi số thực $a$, $b$:
$$a<b\iff\sqrt[3]{a}<\sqrt[3]{b}.$$

:::example So sánh
So sánh: a) $3$ và $\sqrt[3]{26}$; b) $2\sqrt[3]{3}$ và $\sqrt[3]{25}$.

**Lời giải.** a) Ta có $3=\sqrt[3]{27}$ và $27>26$. b) Ta có $\left(2\sqrt[3]3\right)^3=2^3\cdot3=24$ nên $2\sqrt[3]3=\sqrt[3]{24}$, và $24<25$. Do đó

$$3=\sqrt[3]{27}>\sqrt[3]{26};\qquad 2\sqrt[3]{3}=\sqrt[3]{24}<\sqrt[3]{25}.$$

Vậy $3>\sqrt[3]{26}$ và $2\sqrt[3]{3}<\sqrt[3]{25}$.
:::

## Căn thức bậc ba

:::definition Căn thức bậc ba
Với $A$ là một biểu thức đại số, $\sqrt[3]{A}$ gọi là **căn thức bậc ba**, $A$ là biểu thức lấy căn.

$\sqrt[3]{A}$ **xác định với mọi giá trị** của biến làm cho $A$ xác định, và $\sqrt[3]{A^3}=A$.
:::

So với căn bậc hai: $\sqrt{A^2}=|A|$, còn $\sqrt[3]{A^3}=A$, không cần giá trị tuyệt đối, và không cần điều kiện $A\ge0$.

:::example Rút gọn căn thức bậc ba
Rút gọn: a) $\sqrt[3]{8x^3}$; b) $\sqrt[3]{x^3-3x^2+3x-1}$.

**Lời giải.** Áp dụng $\sqrt[3]{A^3}=A$, ta có (ở câu b, dùng hằng đẳng thức $(a-b)^3=a^3-3a^2b+3ab^2-b^3$):

$$\sqrt[3]{8x^3}=\sqrt[3]{(2x)^3}=2x;\qquad \sqrt[3]{x^3-3x^2+3x-1}=\sqrt[3]{(x-1)^3}=x-1.$$

Vậy a) $2x$; b) $x-1$, đúng với mọi $x$.
:::

:::example Bể nước hình lập phương
Một bể nước hình lập phương chứa được $1728$ lít khi đầy. Tính cạnh của bể theo mét.

**Lời giải.** Ta có $1728$ lít $=1728$ dm³. Gọi $a$ (dm) là độ dài cạnh bể ($a>0$), ta có $a^3=1728$. Do đó

$$a=\sqrt[3]{1728}=12\ \text{(dm)}=1{,}2\ \text{(m)}.$$

Vậy cạnh bể dài $1{,}2$ m.
:::

:::warning Những sai lầm thường gặp
- **Nghĩ rằng số âm không có căn bậc ba.** Sai: "$\sqrt[3]{-8}$ không xác định". Lí do sai: $(-2)^3=-8$. Đúng: $\sqrt[3]{-8}=-2$.
- **Viết $\sqrt[3]{a^3}=|a|$.** Sai: $\sqrt[3]{(-5)^3}=5$. Lí do sai: chỉ căn bậc hai mới cần giá trị tuyệt đối. Đúng: $\sqrt[3]{(-5)^3}=-5$.
- **Nhầm căn bậc ba với chia ba.** Sai: $\sqrt[3]{27}=9$. Lí do sai: $9^3=729$. Đúng: $\sqrt[3]{27}=3$ vì $3^3=27$.
- **Đặt điều kiện thừa.** Sai: "$\sqrt[3]{x-2}$ xác định khi $x\ge2$". Lí do sai: căn bậc ba xác định với mọi số. Đúng: xác định với mọi $x$.
:::

## Thuật ngữ

:::terms
- căn bậc ba | cube root
- căn thức bậc ba | cube-root expression
- lập phương của một số | cube of a number
- hình lập phương | cube
- chỉ số của căn | index of the root
- thể tích | volume
- biểu thức lấy căn | expression under the root sign
:::

## Tóm tắt

- $x=\sqrt[3]{a}\iff x^3=a$. Mọi số thực đều có đúng một căn bậc ba.
- $\left(\sqrt[3]{a}\right)^3=a$, $\sqrt[3]{a^3}=a$, $\sqrt[3]{-a}=-\sqrt[3]{a}$.
- $a<b\iff\sqrt[3]{a}<\sqrt[3]{b}$; để so sánh, đưa về cùng dạng căn bậc ba hoặc so sánh lập phương.
- $\sqrt[3]{A}$ xác định khi $A$ xác định; $\sqrt[3]{A^3}=A$ (không có giá trị tuyệt đối).
- Hình lập phương thể tích $V$ có cạnh $\sqrt[3]{V}$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính:

a) $\sqrt[3]{343}$;
b) $\sqrt[3]{-0{,}027}$;
c) $\sqrt[3]{\dfrac{64}{125}}$.

::hint
**Kiến thức:** $\sqrt[3]{a}=x\iff x^3=a$.

**Gợi ý các bước:**
1. Nhớ bảng lập phương $1^3$ đến $10^3$.
2. Với số âm, căn bậc ba là số âm.

::solution
Căn bậc ba của số $a$ là số $x$ sao cho $x^3=a$.

a) Vì $7^3=343$ nên $\sqrt[3]{343}=7$.

b) Vì $(-0{,}3)^3=-0{,}027$ nên $\sqrt[3]{-0{,}027}=-0{,}3$.

c) Vì $\left(\dfrac45\right)^3=\dfrac{4^3}{5^3}=\dfrac{64}{125}$ nên $\sqrt[3]{\dfrac{64}{125}}=\dfrac45$.

Vậy kết quả lần lượt là $7$; $-0{,}3$; $\dfrac45$.

**Đáp số.** a) $7$; b) $-0{,}3$; c) $\dfrac45$.
:::

:::exercise
Tính $\sqrt[3]{-216}+\sqrt[3]{1000}-\left(\sqrt[3]{7}\right)^3$.

::hint
**Kiến thức:** $\left(\sqrt[3]{a}\right)^3=a$.

**Gợi ý các bước:**
1. Tính từng căn.
2. Cộng, trừ.

::solution
Ta có:

- $\sqrt[3]{-216}=-6$ vì $(-6)^3=-216$;
- $\sqrt[3]{1000}=10$ vì $10^3=1000$;
- $\left(\sqrt[3]{7}\right)^3=7$ (theo định nghĩa căn bậc ba).

Do đó
$$\sqrt[3]{-216}+\sqrt[3]{1000}-\left(\sqrt[3]{7}\right)^3=-6+10-7=-3.$$

Vậy giá trị của biểu thức là $-3$.

**Đáp số.** $-3$.
:::

:::exercise
Dùng máy tính cầm tay, tính (làm tròn kết quả đến hàng phần trăm):

a) $\sqrt[3]{50}$;
b) $\sqrt[3]{-12}$.

::hint
**Kiến thức:** máy tính có phím căn bậc ba; căn bậc ba của số âm là số âm.

**Gợi ý các bước:**
1. Bấm máy.
2. Làm tròn đến chữ số thập phân thứ hai.

::solution
a) Bấm máy tính cầm tay, ta được $\sqrt[3]{50}=3{,}684\ldots$ Chữ số hàng phần nghìn là $4<5$ nên làm tròn xuống: $\sqrt[3]{50}\approx3{,}68$.

b) Bấm máy tính cầm tay, ta được $\sqrt[3]{-12}=-2{,}289\ldots$ Chữ số hàng phần nghìn là $9\ge5$ nên làm tròn lên: $\sqrt[3]{-12}\approx-2{,}29$.

Vậy $\sqrt[3]{50}\approx3{,}68$ và $\sqrt[3]{-12}\approx-2{,}29$.

**Đáp số.** a) $3{,}68$; b) $-2{,}29$.
:::

:::exercise
So sánh:

a) $5$ và $\sqrt[3]{124}$;
b) $-2$ và $\sqrt[3]{-9}$.

::hint
**Kiến thức:** $a<b\iff\sqrt[3]a<\sqrt[3]b$.

**Gợi ý các bước:**
1. Viết $5=\sqrt[3]{125}$, $-2=\sqrt[3]{-8}$.
2. So sánh các số dưới dấu căn.

::solution
Ta dùng tính chất: với mọi số $a$, $b$, nếu $a<b$ thì $\sqrt[3]a<\sqrt[3]b$.

a) Ta có $5=\sqrt[3]{125}$. Vì $125>124$ nên $\sqrt[3]{125}>\sqrt[3]{124}$.

Vậy $5>\sqrt[3]{124}$.

b) Ta có $-2=\sqrt[3]{-8}$. Vì $-8>-9$ nên $\sqrt[3]{-8}>\sqrt[3]{-9}$.

Vậy $-2>\sqrt[3]{-9}$.

**Đáp số.** a) $5>\sqrt[3]{124}$; b) $-2>\sqrt[3]{-9}$.
:::

:::exercise
Tìm $x$, biết:

a) $x^3=-64$;
b) $\sqrt[3]{3x+1}=-2$.

::hint
**Kiến thức:** $x^3=a\iff x=\sqrt[3]a$; $\sqrt[3]A=b\iff A=b^3$.

**Gợi ý các bước:**
1. Câu a: lấy căn bậc ba.
2. Câu b: lập phương hai vế, giải phương trình bậc nhất.

::solution
a) Ta có $x^3=-64$, suy ra $x=\sqrt[3]{-64}=-4$ (vì $(-4)^3=-64$).

Vậy $x=-4$.

b) Ta có $\sqrt[3]{3x+1}=-2$. Lập phương hai vế, ta được
$$3x+1=(-2)^3=-8.$$

Suy ra $3x=-9$, tức là $x=-3$.

Thử lại: $\sqrt[3]{3\cdot(-3)+1}=\sqrt[3]{-8}=-2$ (đúng).

Vậy $x=-3$.

**Đáp số.** a) $x=-4$; b) $x=-3$.
:::

:::exercise
Rút gọn các biểu thức sau:

a) $\sqrt[3]{27x^3}-2x$;
b) $\sqrt[3]{x^3+6x^2+12x+8}$.

::hint
**Kiến thức:** $\sqrt[3]{A^3}=A$; hằng đẳng thức $(a+b)^3=a^3+3a^2b+3ab^2+b^3$.

**Gợi ý các bước:**
1. Viết $27x^3=(3x)^3$.
2. Nhận ra $x^3+6x^2+12x+8=(x+2)^3$.

::solution
Áp dụng tính chất $\sqrt[3]{A^3}=A$ với mọi biểu thức $A$.

a) Ta có $27x^3=(3x)^3$. Do đó
$$\sqrt[3]{27x^3}-2x=\sqrt[3]{(3x)^3}-2x=3x-2x=x.$$

b) Theo hằng đẳng thức lập phương của một tổng, ta có
$$x^3+6x^2+12x+8=x^3+3\cdot x^2\cdot2+3\cdot x\cdot2^2+2^3=(x+2)^3.$$

Do đó $\sqrt[3]{x^3+6x^2+12x+8}=\sqrt[3]{(x+2)^3}=x+2$.

Vậy hai biểu thức rút gọn lần lượt là $x$ và $x+2$.

**Đáp số.** a) $x$; b) $x+2$.
:::

:::exercise
Một bể nước hình lập phương chứa được $3375$ lít nước khi đầy.

a) Tính cạnh của bể theo mét.

b) Tính diện tích đáy bể.

::hint
**Kiến thức:** $1$ lít $=1$ dm³; cạnh hình lập phương là $\sqrt[3]{V}$.

**Gợi ý các bước:**
1. Tính $\sqrt[3]{3375}$ (dm), đổi ra mét.
2. Diện tích đáy bằng bình phương cạnh.

::solution
a) Đổi: $3375$ lít $=3375$ dm³ (vì $1$ lít $=1$ dm³).

Gọi $a$ (dm) là cạnh của bể ($a>0$). Thể tích bể là $a^3=3375$, suy ra
$$a=\sqrt[3]{3375}=15\ \text{(dm)}=1{,}5\ \text{(m)}.$$

Vậy cạnh của bể dài $1{,}5$ m.

b) Đáy bể là hình vuông cạnh $1{,}5$ m, nên diện tích đáy bể là
$$1{,}5^2=2{,}25\ \text{(m}^2\text{)}.$$

Vậy diện tích đáy bể là $2{,}25$ m².

**Đáp số.** a) $1{,}5$ m; b) $2{,}25$ m².
:::

:::exercise
Một khối lập phương lớn được ghép từ $512$ khối lập phương nhỏ giống nhau, rồi sơn màu toàn bộ mặt ngoài.

a) Mỗi cạnh của khối lớn có bao nhiêu khối nhỏ?

b) Có bao nhiêu khối nhỏ không có mặt nào được sơn?

::hint
**Kiến thức:** số khối trên một cạnh là $\sqrt[3]{512}$.

**Gợi ý các bước:**
1. Tính $\sqrt[3]{512}$.
2. Các khối không được sơn tạo thành một khối lập phương bên trong, mỗi cạnh ít hơn $2$ khối.

::solution
a) Gọi $n$ là số khối nhỏ trên mỗi cạnh của khối lớn ($n$ là số nguyên dương). Khối lớn gồm $n^3$ khối nhỏ nên $n^3=512$, suy ra
$$n=\sqrt[3]{512}=8.$$

Vậy mỗi cạnh của khối lớn có $8$ khối nhỏ.

b) Một khối nhỏ không có mặt nào được sơn khi nó không nằm ở lớp ngoài cùng. Bỏ đi lớp ngoài cùng, mỗi cạnh bớt đi $2$ khối (một khối ở mỗi đầu), nên các khối không được sơn tạo thành một khối lập phương có mỗi cạnh $8-2=6$ khối.

Số khối nhỏ không được sơn là $6^3=216$.

Vậy có $216$ khối nhỏ không có mặt nào được sơn.

**Đáp số.** a) $8$; b) $216$.
:::

:::exercise
Tính $\sqrt{16}+\sqrt[3]{-27}+\sqrt{(-2)^2}$.

::hint
**Kiến thức:** $\sqrt{a^2}=|a|$ (xem [căn bậc hai và căn thức bậc hai](lesson:square-roots-radicals)) và $\sqrt[3]{a^3}=a$.

**Gợi ý các bước:**
1. Tính từng số hạng; chú ý dấu.
2. Cộng lại.

::solution
Ta có:

- $\sqrt{16}=4$;
- $\sqrt[3]{-27}=-3$ vì $(-3)^3=-27$;
- $\sqrt{(-2)^2}=|-2|=2$.

Do đó
$$\sqrt{16}+\sqrt[3]{-27}+\sqrt{(-2)^2}=4+(-3)+2=3.$$

Vậy giá trị của biểu thức là $3$.

**Đáp số.** $3$.
:::

:::exercise Thử thách
Có bao nhiêu số nguyên $x$ thoả mãn $-2<\sqrt[3]{x}<3$?

::hint
**Kiến thức:** $a<b\iff\sqrt[3]a<\sqrt[3]b$, nên có thể lập phương các vế mà giữ nguyên chiều.

**Gợi ý các bước:**
1. Viết $-2=\sqrt[3]{-8}$, $3=\sqrt[3]{27}$.
2. Đếm các số nguyên trong khoảng tìm được.

::solution
Ta có $-2=\sqrt[3]{-8}$ và $3=\sqrt[3]{27}$. Bất đẳng thức đã cho trở thành
$$\sqrt[3]{-8}<\sqrt[3]{x}<\sqrt[3]{27}.$$

Vì với mọi số $a$, $b$ ta có $\sqrt[3]a<\sqrt[3]b$ khi và chỉ khi $a<b$, nên điều này tương đương với $-8<x<27$.

Các số nguyên $x$ thoả mãn là $-7, -6, \ldots, 25, 26$. Số các số nguyên đó là $26-(-7)+1=34$.

Vậy có $34$ số nguyên $x$ thoả mãn điều kiện đã cho.

**Đáp số.** $34$ số.
:::

## Kiểm tra mini

:::quiz
::mc
$\sqrt[3]{-27}$ bằng
A. $-3$.
B. $3$.
C. $-9$.
D. không xác định.
::key A
Vì $(-3)^3=-27$ nên $\sqrt[3]{-27}=-3$. Phương án D nhầm với căn bậc hai, C lấy $-27$ chia $3$.

::mc
Căn thức nào sau đây xác định với mọi số thực $x$?
A. $\sqrt{x-1}$.
B. $\sqrt[3]{x-1}$.
C. $\sqrt{1-x}$.
D. $\sqrt{x}$.
::key B
Căn bậc ba xác định với mọi biểu thức lấy căn. Các căn bậc hai ở A, C, D cần biểu thức lấy căn không âm.

::mc
$\sqrt[3]{(-5)^3}$ bằng
A. $5$.
B. $-5$.
C. $125$.
D. $\pm5$.
::key B
Ta có $\sqrt[3]{(-5)^3}=-5$ (vì $\sqrt[3]{a^3}=a$). Phương án A dùng nhầm giá trị tuyệt đối như với căn bậc hai.

::mc
Một thùng hình lập phương có thể tích $0{,}216$ m³. Cạnh thùng dài
A. $0{,}6$ m.
B. $0{,}072$ m.
C. $0{,}06$ m.
D. $6$ m.
::key A
Cạnh thùng dài $\sqrt[3]{0{,}216}=0{,}6$ (m) (vì $0{,}6^3=0{,}216$). Phương án B chia thể tích cho $3$; C và D đặt sai dấu phẩy.

::tf
Cho biểu thức $A=\sqrt[3]{x-7}$. Xét tính đúng sai của các mệnh đề sau:
a) $A$ xác định khi và chỉ khi $x\ge7$.
b) Khi $x=-1$ thì $A=-2$.
c) $A=3$ khi $x=34$.
d) $A<0$ khi $x<7$.
::key S Đ Đ Đ
a) Sai. Căn bậc ba xác định với mọi $x$. b) Đúng. Khi $x=-1$ ta có $A=\sqrt[3]{-8}=-2$. c) Đúng. Khi $x=34$ ta có $A=\sqrt[3]{27}=3$. d) Đúng. Khi $x<7$ thì $x-7<0$, do đó $A=\sqrt[3]{x-7}<0$.

::sa
Tính $\sqrt[3]{125}-\sqrt[3]{-8}+\sqrt[3]{0{,}001}$.
::key 7,1
Ta có $\sqrt[3]{125}-\sqrt[3]{-8}+\sqrt[3]{0{,}001}=5-(-2)+0{,}1=7{,}1$.

::sa
Một hộp quà hình lập phương có thể tích $3$ lít. Tính độ dài cạnh hộp theo xăng-ti-mét (làm tròn kết quả đến hàng phần mười).
::key 14,4
Ta có $3$ lít $=3000$ cm³. Do đó cạnh hộp dài $\sqrt[3]{3000}\approx14{,}4$ (cm).
:::
