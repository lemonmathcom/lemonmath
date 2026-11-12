---
title: Phép nhân và phép chia phân thức đại số
description: Nhân, chia các phân thức, tìm phân thức nghịch đảo, rút gọn kết quả và vận dụng vào bài toán thực tế như tỉ số vận tốc, diện tích.
minutes: 22
---

:::goals
- Nhân hai phân thức và rút gọn kết quả.
- Tìm phân thức nghịch đảo của một phân thức khác $0$.
- Chia một phân thức cho một phân thức khác $0$.
- Thực hiện các biểu thức có nhiều phép tính và giải bài toán thực tế.
:::

Giả sử hai xe cùng đi quãng đường $120$ km. Xe A đi hết $x$ giờ, xe B đi hết $x+2$ giờ. Vận tốc của xe A là $\dfrac{120}{x}$ km/h, vận tốc của xe B là $\dfrac{120}{x+2}$ km/h.

Xe A nhanh gấp mấy lần xe B? Muốn biết, ta phải chia $\dfrac{120}{x}$ cho $\dfrac{120}{x+2}$, tức là chia một phân thức cho một phân thức. Khi $x=4$ thì xe A nhanh gấp bao nhiêu lần? Bài này dạy bạn nhân và chia phân thức.

## Cùng khám phá

Với phân số, ta nhân $\dfrac23\cdot\dfrac9{10}=\dfrac{2\cdot9}{3\cdot10}=\dfrac{18}{30}=\dfrac35$: nhân tử với tử, mẫu với mẫu. Ta chia $\dfrac23:\dfrac49=\dfrac23\cdot\dfrac94=\dfrac{18}{12}=\dfrac32$: nhân với phân số **nghịch đảo** của số chia, tức là lật ngược số chia. Hai quy tắc này không phụ thuộc vào việc tử và mẫu là số hay biểu thức chứa chữ, nên chúng dùng được cho phân thức.

## Phép nhân phân thức

:::theorem Nhân hai phân thức
Muốn nhân hai phân thức, ta nhân các tử thức với nhau và nhân các mẫu thức với nhau:
$$\frac{A}{B}\cdot\frac{C}{D}=\frac{A\cdot C}{B\cdot D}.$$
:::

**Vì sao?** Quy tắc này suy ra từ quy tắc nhân phân số, vì mỗi phân thức nhận giá trị là một phân số với mỗi giá trị của biến làm cho mẫu khác $0$. Phép nhân phân thức có tính chất giao hoán, kết hợp và phân phối đối với phép cộng, giống như phép nhân số.

**Mẹo.** Phân tích tử và mẫu thành nhân tử **trước** khi nhân, để rút gọn ngay các nhân tử chung, tránh phải khai triển những biểu thức dài.

:::example Nhân với đơn thức
Thực hiện phép tính $\dfrac{4x^2}{9y}\cdot\dfrac{3y^2}{8x}$.

**Lời giải.** Ta nhân tử với tử, mẫu với mẫu rồi rút gọn:
$$\frac{4x^2}{9y}\cdot\frac{3y^2}{8x}=\frac{12x^2y^2}{72xy}=\frac{xy}{6}.$$

Vậy kết quả là $\dfrac{xy}{6}$.
:::

:::example Nhân và rút gọn nhân tử chung
Thực hiện phép tính $\dfrac{x^2-4}{2x}\cdot\dfrac{x^2}{x+2}$.

**Lời giải.** Ta có $x^2-4=(x-2)(x+2)$. Do đó
$$\frac{x^2-4}{2x}\cdot\frac{x^2}{x+2}=\frac{(x-2)(x+2)\cdot x^2}{2x\cdot(x+2)}=\frac{x(x-2)}{2}.$$

Vậy kết quả là $\dfrac{x(x-2)}{2}$.
:::

## Phân thức nghịch đảo và phép chia

Hai phân thức có tích bằng $1$ gọi là hai phân thức **nghịch đảo** của nhau. Nếu $\dfrac{A}{B}$ khác $0$ (tức $A\neq0$) thì phân thức nghịch đảo của nó là $\dfrac{B}{A}$, vì $\dfrac AB\cdot\dfrac BA=1$. Phân thức $0$ không có nghịch đảo.

:::example Phân thức nghịch đảo
Tìm phân thức nghịch đảo của:

a) $\dfrac{x-1}{x+2}$.

b) $x+3$.

c) $\dfrac{3x}{x^2+1}$.

**Lời giải.** Ta đổi chỗ tử và mẫu.

a) Phân thức nghịch đảo là $\dfrac{x+2}{x-1}$ (với $x\neq1$).

b) Ta viết $x+3=\dfrac{x+3}{1}$ nên nghịch đảo là $\dfrac{1}{x+3}$ (với $x\neq-3$).

c) Phân thức nghịch đảo là $\dfrac{x^2+1}{3x}$ (với $x\neq0$).

Vậy các phân thức nghịch đảo là $\dfrac{x+2}{x-1}$; $\dfrac{1}{x+3}$; $\dfrac{x^2+1}{3x}$.
:::

:::theorem Chia hai phân thức
Muốn chia phân thức $\dfrac AB$ cho phân thức $\dfrac CD$ khác $0$, ta nhân $\dfrac AB$ với phân thức nghịch đảo của $\dfrac CD$:
$$\frac AB:\frac CD=\frac AB\cdot\frac DC\qquad(C\neq0).$$
:::

:::example Chia hai phân thức
Thực hiện phép tính $\dfrac{6x^2}{x+1}:\dfrac{3x}{x^2-1}$.

**Lời giải.** Ta nhân với phân thức nghịch đảo rồi phân tích $x^2-1=(x-1)(x+1)$:
$$\frac{6x^2}{x+1}:\frac{3x}{x^2-1}=\frac{6x^2}{x+1}\cdot\frac{x^2-1}{3x}=\frac{6x^2(x-1)(x+1)}{3x(x+1)}=2x(x-1).$$

Vậy kết quả là $2x(x-1)$.
:::

Khi các nhân tử chỉ khác nhau về dấu, ta đổi dấu để rút gọn.

:::example Chia có đổi dấu
Thực hiện phép tính $\dfrac{x^2-4}{x-3}:\dfrac{2-x}{x^2-9}$.

**Lời giải.** Ta có $x^2-4=(x-2)(x+2)$, $x^2-9=(x-3)(x+3)$ và $2-x=-(x-2)$. Do đó
$$\frac{x^2-4}{x-3}:\frac{2-x}{x^2-9}=\frac{(x-2)(x+2)}{x-3}\cdot\frac{(x-3)(x+3)}{-(x-2)}=-(x+2)(x+3).$$

Vậy kết quả là $-(x+2)(x+3)$.
:::

Ta có thể kết hợp phép cộng ở bài trước với phép nhân.

:::example Biểu thức có nhiều phép tính
Rút gọn $\left(\dfrac1x+\dfrac1y\right)\cdot\dfrac{xy}{x+y}$.

**Lời giải.** Ta thực hiện phép cộng trong ngoặc trước:
$$\frac1x+\frac1y=\frac{y+x}{xy}.$$
Do đó
$$\left(\frac1x+\frac1y\right)\cdot\frac{xy}{x+y}=\frac{x+y}{xy}\cdot\frac{xy}{x+y}=1.$$

Vậy biểu thức luôn bằng $1$ (với $x,y\neq0$ và $x+y\neq0$).
:::

Ta quay lại hai xe ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example So sánh vận tốc hai xe
Xe A đi $120$ km hết $x$ giờ, xe B đi $120$ km hết $x+2$ giờ (giả sử). Tìm tỉ số vận tốc của xe A so với xe B và tính tỉ số đó khi $x=4$.

**Lời giải.**

*Hiểu đề.* Vận tốc xe A là $\dfrac{120}{x}$, vận tốc xe B là $\dfrac{120}{x+2}$; tỉ số là thương của hai vận tốc.

*Tìm cách giải.* Chia hai phân thức, tức nhân với phân thức nghịch đảo rồi rút gọn.

*Giải.* Ta có
$$\frac{120}{x}:\frac{120}{x+2}=\frac{120}{x}\cdot\frac{x+2}{120}=\frac{x+2}{x}.$$
Với $x=4$: $\dfrac{4+2}{4}=\dfrac32=1{,}5$.

*Nhìn lại.* Kiểm tra: khi $x=4$, xe A đi $120:4=30$ km/h, xe B đi $120:6=20$ km/h và $30:20=1{,}5$. Kết quả hợp lí vì xe A đi hết ít thời gian hơn nên nhanh hơn ($\dfrac{x+2}{x}>1$); nếu $x$ rất lớn thì tỉ số tiến gần $1$, tức hai xe có vận tốc gần bằng nhau.

Vậy xe A nhanh gấp $\dfrac{x+2}{x}$ lần xe B, bằng $1{,}5$ lần khi $x=4$.
:::

:::warning Những sai lầm thường gặp
- **Chia mà không lật ngược số chia.** Sai: $\dfrac12:\dfrac14=\dfrac12\cdot\dfrac14=\dfrac18$. Lí do sai: $\dfrac12$ chứa $\dfrac14$ được $2$ lần, không phải $\dfrac18$. Đúng: $\dfrac12\cdot\dfrac41=2$.
- **Không nhân mẫu với mẫu.** Sai: $\dfrac2x\cdot\dfrac3x=\dfrac6x$. Lí do sai: với $x=2$, vế trái bằng $1\cdot1{,}5=1{,}5$, vế phải bằng $3$. Đúng: $\dfrac2x\cdot\dfrac3x=\dfrac{6}{x^2}$.
- **Quên điều kiện khi chia.** Sai: chỉ yêu cầu các mẫu $B$, $D$ khác $0$ khi tính $\dfrac AB:\dfrac CD$. Lí do sai: ta còn phải có $C\neq0$ vì không chia cho phân thức bằng $0$. Đúng: $\dfrac{x-1}{x+2}:\dfrac{x-3}{x+5}$ cần $x\neq-2$, $x\neq-5$ và $x\neq3$.
:::

**Kết nối.** Bài này dùng lại quy tắc nhân, chia phân số, phân tích đa thức thành nhân tử và rút gọn phân thức ở bài [phân thức đại số](lesson:intro-algebraic-fractions); phép cộng trong biểu thức hỗn hợp dựa vào bài [phép cộng và phép trừ phân thức đại số](lesson:add-subtract-algebraic-fractions). Kĩ năng này giúp bạn giải phương trình chứa ẩn ở mẫu ở các lớp sau.

## Thuật ngữ

:::terms
- phép nhân phân thức | multiplication of algebraic fractions
- phép chia phân thức | division of algebraic fractions
- phân thức nghịch đảo | reciprocal of a fraction
- tử thức | numerator
- mẫu thức | denominator
- nhân tử chung | common factor
- rút gọn | simplify
- tỉ số | ratio
:::

## Tóm tắt

- Nhân: $\dfrac AB\cdot\dfrac CD=\dfrac{AC}{BD}$; phân tích thành nhân tử trước để rút gọn.
- Phân thức nghịch đảo của $\dfrac AB$ ($A\neq0$) là $\dfrac BA$.
- Chia: $\dfrac AB:\dfrac CD=\dfrac AB\cdot\dfrac DC$ với $C\neq0$.
- Trong biểu thức nhiều phép tính: làm phép trong ngoặc trước, rồi nhân, chia từ trái sang phải, cuối cùng cộng, trừ.
- Luôn nhớ điều kiện để mọi mẫu và số chia khác $0$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Thực hiện các phép tính:

a) $\dfrac{3x^2}{5y}\cdot\dfrac{10y^2}{9x}$.

b) $\dfrac{x^2-1}{x}\cdot\dfrac{x^2}{x+1}$.

::hint
**Kiến thức:** nhân tử với tử, mẫu với mẫu, rồi rút gọn.

**Gợi ý các bước:**
1. a) Nhân rồi rút gọn các lũy thừa.
2. b) Phân tích $x^2-1=(x-1)(x+1)$.

::solution
a) $\dfrac{3x^2}{5y}\cdot\dfrac{10y^2}{9x}=\dfrac{30x^2y^2}{45xy}=\dfrac{2xy}{3}$.

b) $\dfrac{x^2-1}{x}\cdot\dfrac{x^2}{x+1}=\dfrac{(x-1)(x+1)x^2}{x(x+1)}=x(x-1)$.

Vậy a) $\dfrac{2xy}{3}$; b) $x(x-1)$.

**Đáp số.** a) $\dfrac{2xy}{3}$. b) $x(x-1)$.
:::

:::exercise
Thực hiện phép tính $\dfrac{x^2-9}{2x+6}\cdot\dfrac{4x}{x-3}$.

::hint
**Kiến thức:** phân tích thành nhân tử trước khi nhân.

**Gợi ý các bước:**
1. Viết $x^2-9=(x-3)(x+3)$ và $2x+6=2(x+3)$.
2. Nhân rồi rút gọn nhân tử chung.

::solution
Ta có
$$\frac{(x-3)(x+3)}{2(x+3)}\cdot\frac{4x}{x-3}=\frac{4x(x-3)(x+3)}{2(x+3)(x-3)}=2x.$$

Vậy kết quả là $2x$.

**Đáp số.** $2x$.
:::

:::exercise
Tìm phân thức nghịch đảo của mỗi phân thức sau và nêu điều kiện:

a) $\dfrac{5}{x-1}$.

b) $x^2+1$.

c) $\dfrac{x-2}{x+3}$.

::hint
**Kiến thức:** nghịch đảo của $\dfrac AB$ ($A\neq0$) là $\dfrac BA$.

**Gợi ý các bước:**
1. Đổi chỗ tử và mẫu.
2. Nêu điều kiện để phân thức ban đầu khác $0$.

::solution
a) $\dfrac{x-1}{5}$ (điều kiện $x\neq1$ để phân thức ban đầu xác định).

b) $\dfrac{1}{x^2+1}$; $x^2+1>0$ với mọi $x$ nên không cần điều kiện.

c) $\dfrac{x+3}{x-2}$ (điều kiện $x\neq2$ để phân thức ban đầu khác $0$ và $x\neq-3$ để xác định).

**Đáp số.** a) $\dfrac{x-1}{5}$. b) $\dfrac{1}{x^2+1}$. c) $\dfrac{x+3}{x-2}$.
:::

:::exercise
Thực hiện phép tính $\dfrac{x^2-4}{3x}:\dfrac{x+2}{6x^2}$.

::hint
**Kiến thức:** chia là nhân với phân thức nghịch đảo.

**Gợi ý các bước:**
1. Viết lại thành phép nhân.
2. Phân tích $x^2-4$ rồi rút gọn.

::solution
Ta có
$$\frac{x^2-4}{3x}:\frac{x+2}{6x^2}=\frac{(x-2)(x+2)}{3x}\cdot\frac{6x^2}{x+2}=\frac{6x^2(x-2)(x+2)}{3x(x+2)}=2x(x-2).$$

Vậy kết quả là $2x(x-2)$.

**Đáp số.** $2x(x-2)$.
:::

:::exercise
Thực hiện phép tính $\dfrac{x^2-1}{x-2}:\dfrac{1-x}{x^2-4}$.

::hint
**Kiến thức:** $1-x=-(x-1)$.

**Gợi ý các bước:**
1. Nhân với phân thức nghịch đảo.
2. Đổi dấu rồi rút gọn.

::solution
Ta có
$$\frac{(x-1)(x+1)}{x-2}\cdot\frac{(x-2)(x+2)}{-(x-1)}=-(x+1)(x+2).$$

Vậy kết quả là $-(x+1)(x+2)$.

**Đáp số.** $-(x+1)(x+2)$.
:::

:::exercise
Giả sử một mảnh vải hình chữ nhật có chiều dài $\dfrac{x^2-4}{x}$ mét và chiều rộng $\dfrac{x}{x+2}$ mét ($x>2$). Viết biểu thức diện tích rồi rút gọn. Tính diện tích khi $x=5$.

::hint
**Kiến thức:** diện tích bằng chiều dài nhân chiều rộng.

**Gợi ý các bước:**
1. Viết tích $\dfrac{x^2-4}{x}\cdot\dfrac{x}{x+2}$.
2. Rút gọn rồi thay $x=5$.

::solution
Diện tích là
$$\frac{x^2-4}{x}\cdot\frac{x}{x+2}=\frac{(x-2)(x+2)x}{x(x+2)}=x-2\ \text{(m}^2\text{)}.$$
Với $x=5$: diện tích là $5-2=3$ (m²).

Kiểm tra: chiều dài $\dfrac{21}{5}=4{,}2$ m, chiều rộng $\dfrac57$ m và $4{,}2\cdot\dfrac57=3$.

Vậy diện tích là $(x-2)$ m² và bằng $3$ m² khi $x=5$.

**Đáp số.** $x-2$ (m²); $3$ m².
:::

:::exercise
Giả sử một người đi bộ với vận tốc $\dfrac{6x}{x+1}$ km/h trong $\dfrac{x+1}{3x}$ giờ. Tính quãng đường người đó đi. Quãng đường có phụ thuộc vào $x$ không?

::hint
**Kiến thức:** quãng đường bằng vận tốc nhân thời gian.

**Gợi ý các bước:**
1. Viết tích $\dfrac{6x}{x+1}\cdot\dfrac{x+1}{3x}$.
2. Rút gọn và nhận xét.

::solution
Quãng đường là
$$\frac{6x}{x+1}\cdot\frac{x+1}{3x}=\frac{6x(x+1)}{3x(x+1)}=2\ \text{(km)}.$$
Kết quả không chứa $x$ nên quãng đường không phụ thuộc vào $x$.

Vậy người đó đi $2$ km, dù $x$ bằng bao nhiêu.

**Đáp số.** $2$ km; không phụ thuộc $x$.
:::

:::exercise
Rút gọn $\left(\dfrac{1}{x-1}-\dfrac{1}{x+1}\right)\cdot\dfrac{x^2-1}{2}$. (Ôn lại [phép trừ phân thức](lesson:add-subtract-algebraic-fractions).)

::hint
**Kiến thức:** làm phép trừ trong ngoặc trước.

**Gợi ý các bước:**
1. Quy đồng và trừ trong ngoặc.
2. Nhân với $\dfrac{x^2-1}{2}$ rồi rút gọn.

::solution
Điều kiện: $x\neq\pm1$. Ta có $\dfrac{1}{x-1}-\dfrac{1}{x+1}=\dfrac{2}{x^2-1}$. Do đó
$$\left(\frac{1}{x-1}-\frac{1}{x+1}\right)\cdot\frac{x^2-1}{2}=\frac{2}{x^2-1}\cdot\frac{x^2-1}{2}=1.$$

Vậy biểu thức luôn bằng $1$.

**Đáp số.** $1$.
:::

:::exercise
Tìm phân thức $P$ biết $P\cdot\dfrac{x+1}{x-2}=\dfrac{x^2-1}{x^2-4}$.

::hint
**Kiến thức:** nếu $P\cdot Q=R$ thì $P=R:Q$.

**Gợi ý các bước:**
1. Viết $P=\dfrac{x^2-1}{x^2-4}:\dfrac{x+1}{x-2}$.
2. Nhân với nghịch đảo rồi rút gọn.

::solution
Ta có
$$P=\frac{(x-1)(x+1)}{(x-2)(x+2)}\cdot\frac{x-2}{x+1}=\frac{x-1}{x+2}.$$

Vậy $P=\dfrac{x-1}{x+2}$.

**Đáp số.** $\dfrac{x-1}{x+2}$.
:::

:::exercise Thử thách
Rút gọn $\left(\dfrac{x+1}{x-1}-\dfrac{x-1}{x+1}\right):\dfrac{4}{x^2-1}$ rồi tính giá trị khi $x=7$.

::hint
**Kiến thức:** làm phép trừ trong ngoặc, rồi chia.

**Gợi ý các bước:**
1. Quy đồng với mẫu thức chung $x^2-1$: tử là $(x+1)^2-(x-1)^2$.
2. Chia cho $\dfrac{4}{x^2-1}$, tức nhân với nghịch đảo.

::solution
Điều kiện: $x\neq\pm1$. Ta có
$$\frac{x+1}{x-1}-\frac{x-1}{x+1}=\frac{(x+1)^2-(x-1)^2}{x^2-1}=\frac{4x}{x^2-1}.$$
Do đó
$$\frac{4x}{x^2-1}:\frac{4}{x^2-1}=\frac{4x}{x^2-1}\cdot\frac{x^2-1}{4}=x.$$
Với $x=7$, giá trị là $7$.

Vậy biểu thức bằng $x$, và bằng $7$ khi $x=7$.

**Đáp số.** $x$; $7$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $\dfrac{4x^2}{9y}\cdot\dfrac{3y^2}{8x}$ là
A. $\dfrac{xy}{6}$.
B. $\dfrac{x}{6y}$.
C. $\dfrac{6}{xy}$.
D. $\dfrac{x^2y}{6}$.
::key A
$\dfrac{12x^2y^2}{72xy}=\dfrac{xy}{6}$. A không rút gọn hết $x$, B và C nhầm lũy thừa của $y$ và vị trí tử, mẫu.

::mc
Phân thức nghịch đảo của $\dfrac{x+1}{x-3}$ ($x\neq-1$) là
A. $-\dfrac{x+1}{x-3}$.
B. $\dfrac{x-3}{x+1}$.
C. $\dfrac{x+1}{3-x}$.
D. $\dfrac{x-3}{x-1}$.
::key B
Nghịch đảo là đổi chỗ tử và mẫu. B là phân thức đối, C đổi dấu mẫu mà không đảo, D sai tử.

::mc
Kết quả của $\dfrac{x}{x+1}:\dfrac{x^2}{x^2-1}$ là
A. $\dfrac{x^3}{(x+1)(x^2-1)}$.
B. $\dfrac{x}{x-1}$.
C. $\dfrac{x-1}{x}$.
D. $\dfrac{x+1}{x}$.
::key C
$\dfrac{x}{x+1}\cdot\dfrac{(x-1)(x+1)}{x^2}=\dfrac{x-1}{x}$. A nhân mà không lật ngược số chia, B và D nhầm nhân tử.

::mc
Với $x>2$, tích $\dfrac{x^2-4}{x}\cdot\dfrac{x}{x+2}$ bằng
A. $x+2$.
B. $x^2-4$.
C. $\dfrac{x-2}{x}$.
D. $x-2$.
::key D
$\dfrac{(x-2)(x+2)x}{x(x+2)}=x-2$. A và C rút gọn sai, B không rút gọn.

::tf
Cho $P=\dfrac{x^2-1}{x}\cdot\dfrac{x}{x+1}$ với $x\neq0$ và $x\neq-1$. Xét tính đúng sai của các mệnh đề sau:
a) $P=x-1$.
b) Giá trị của $P$ tại $x=3$ bằng $4$.
c) $P:(x-1)=1$ với $x\neq1$.
d) $P$ xác định với mọi $x$.
::key Đ S Đ S
a) Đúng: $\dfrac{(x-1)(x+1)x}{x(x+1)}=x-1$. b) Sai: $P=3-1=2$. c) Đúng: $(x-1):(x-1)=1$. d) Sai: $P$ không xác định tại $x=0$ và $x=-1$.

::sa
Tính giá trị của $\dfrac{x^2-4}{x}\cdot\dfrac{x}{x+2}$ tại $x=5$.
::key 3
Tích bằng $x-2=5-2=3$.

::sa
Xe A đi $120$ km hết $x$ giờ, xe B đi $120$ km hết $x+2$ giờ. Khi $x=4$, xe A nhanh gấp bao nhiêu lần xe B?
::key 1,5
$\dfrac{x+2}{x}=\dfrac64=1{,}5$.
:::
