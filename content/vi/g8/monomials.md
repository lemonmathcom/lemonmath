---
title: Đơn thức
description: Nhận biết đơn thức, thu gọn đơn thức, tìm hệ số, phần biến và bậc, nhận biết đơn thức đồng dạng, cộng, trừ và nhân các đơn thức.
minutes: 20
---

:::goals
- Nhận biết đơn thức, đơn thức thu gọn; tìm hệ số, phần biến và bậc của đơn thức.
- Nhận biết các đơn thức đồng dạng, cộng và trừ các đơn thức đồng dạng.
- Nhân hai đơn thức bằng cách nhân hệ số với hệ số và nhân phần biến với phần biến.
- Dùng đơn thức để viết gọn diện tích, thể tích trong bài toán thực tế.
:::

Bạn thử nhìn một hộp quà có đáy là hình vuông cạnh $x$ cm. Chiều cao hộp gấp đôi cạnh đáy, tức là $2x$ cm. Thể tích hộp là $x\cdot x\cdot2x$ (cm³). Viết như vậy vừa dài vừa khó nhìn. Có cách nào viết gọn hơn không, và biểu thức này thuộc loại biểu thức nào?

Ở lớp 7, bạn đã biết dùng chữ thay cho số, và biết nhân hai lũy thừa cùng cơ số. Hai điều đó là đủ để ta làm quen với loại biểu thức đơn giản nhất, gọi là đơn thức. Biết đơn thức rồi, ta có thể gọi tên, so sánh và tính toán với những biểu thức như thể tích hộp quà một cách gọn gàng.

## Đơn thức và đơn thức thu gọn

### Khám phá: viết gọn thể tích hộp quà

Muốn hiểu biểu thức này, ta thử với một số cụ thể. Chọn $x=3$. Đáy là hình vuông cạnh $3$ cm, còn chiều cao là $2\cdot3=6$ cm. Thể tích là $3\cdot3\cdot6=54$ cm³.

Nhìn lại biểu thức thể tích, ta thấy có nhiều thừa số giống nhau, nên ta gộp chúng lại. Số $2$ đứng riêng, còn $x\cdot x\cdot x=x^3$. Vậy thể tích là $2x^3$. Thử lại với $x=3$: $2\cdot3^3=2\cdot27=54$, đúng bằng kết quả vừa tính. Vậy $x\cdot x\cdot2x=2x^3$.

Vì $2x^3$ gọn và dễ đọc, ta muốn biết những biểu thức nào cùng "họ" với nó. Bảng dưới đây liệt kê vài biểu thức và cho biết biểu thức nào là đơn thức, vì sao.

| Biểu thức | Có phải đơn thức? | Vì sao |
|---|---|---|
| $7$ | Có | chỉ là một số |
| $y$ | Có | chỉ là một biến |
| $-2xy$ | Có | tích của số $-2$ với các biến $x$, $y$ |
| $\dfrac{2}{3}x^2y$ | Có | tích của số $\dfrac{2}{3}$ với các biến |
| $x+y$ | Không | có phép cộng giữa hai biến |
| $\dfrac{3}{x}$ | Không | biến $x$ nằm ở mẫu |

:::definition Đơn thức
**Đơn thức** là biểu thức chỉ gồm một số, hoặc một biến, hoặc một tích của các số và các biến (các biến có số mũ là số tự nhiên).
:::

Đơn thức không nhất thiết chỉ có một biến. Chẳng hạn $-2xy$ có hai biến $x$ và $y$. Thể tích hộp quà $x\cdot x\cdot2x$ cũng là một đơn thức, nhưng chưa gọn, vì biến $x$ xuất hiện nhiều lần. Ta cần một cách viết chuẩn cho gọn.

:::definition Đơn thức thu gọn, hệ số, phần biến, bậc
Đơn thức **thu gọn** là đơn thức chỉ gồm một số nhân với các lũy thừa của các biến, và mỗi biến chỉ xuất hiện một lần.

Trong đơn thức thu gọn $-5x^2y$:
- số $-5$ là **hệ số**;
- $x^2y$ là **phần biến**;
- **bậc** của đơn thức là tổng các số mũ của các biến: $2+1=3$.
:::

Đừng lo nếu mấy quy ước này lúc đầu thấy lạ. Số mũ của $y$ là $1$ dù ta không viết ra, vì $y=y^1$. Một số khác $0$ là đơn thức bậc $0$. Còn số $0$ cũng là đơn thức, gọi là đơn thức không, và riêng nó thì không có bậc.

## Các phép tính với đơn thức

### Đơn thức đồng dạng, cộng và trừ

Hình dung $3$ gói kẹo cộng với $5$ gói kẹo giống hệt, ta có $8$ gói. Biểu thức $3x^2+5x^2$ cũng vậy: mỗi $x^2$ là một "gói" giống nhau. Vậy $3x^2+5x^2=8x^2$. Thử với $x=2$: $3\cdot4+5\cdot4=32$ và $8\cdot4=32$.

Vì sao cách "đếm gói" này đúng? Nhờ tính chất phân phối: $3x^2+5x^2=(3+5)x^2$. Chỗ này nhiều bạn hay nhầm: cách làm chỉ dùng được khi hai đơn thức có cùng phần biến, vì chỉ khi đó các "gói" mới giống nhau. Những đơn thức như vậy có tên riêng, ta gọi tên ngay dưới đây.

:::definition Đơn thức đồng dạng
Hai đơn thức có hệ số khác $0$ và có **cùng phần biến** gọi là **đơn thức đồng dạng**.

Muốn cộng (trừ) các đơn thức đồng dạng, ta cộng (trừ) các hệ số và giữ nguyên phần biến.
:::

### Nhân hai đơn thức

Giờ ta thử nhân hai đơn thức: $(2x^2)\cdot(3x^3)$. Trong một tích, ta có thể đổi chỗ các thừa số, nên ta nhóm số với số, biến với biến: $2\cdot3\cdot x^2\cdot x^3$. Các số cho ra $6$. Với biến, ta dùng quy tắc nhân lũy thừa cùng cơ số: $x^2\cdot x^3=x^{2+3}=x^5$. Vậy $(2x^2)(3x^3)=6x^5$.

:::theorem Nhân hai đơn thức
Muốn nhân hai đơn thức, ta nhân các hệ số với nhau và nhân các phần biến với nhau (với cùng một biến thì cộng các số mũ):
$$(a\,x^m y^n)\cdot(b\,x^p y^q)=ab\,x^{m+p}y^{n+q}.$$
:::

## Ví dụ

Ta bắt đầu với câu hỏi cơ bản nhất: một biểu thức cho trước có phải là đơn thức không? Ví dụ dưới đây cho bạn cách kiểm tra từng biểu thức.

:::example Nhận biết đơn thức
Trong các biểu thức $5$, $-x^2y$, $2x+3$, $\dfrac{4}{y}$, $\dfrac{1}{3}xy^2$, biểu thức nào là đơn thức?

**Lời giải.** Ta kiểm tra từng biểu thức xem nó có phải là số, biến hoặc tích của số và biến không:

- $5$ là một số, nên là đơn thức.
- $-x^2y$ là tích của $-1$ và các biến, nên là đơn thức.
- $2x+3$ có phép cộng, nên không là đơn thức.
- $\dfrac{4}{y}$ có biến ở mẫu, nên không là đơn thức.
- $\dfrac{1}{3}xy^2$ là tích của số $\dfrac13$ và các biến, nên là đơn thức.

Vậy có ba đơn thức: $5$, $-x^2y$ và $\dfrac{1}{3}xy^2$.
:::

Một đơn thức viết dài thì ta thu gọn trước, rồi mới đọc được hệ số, phần biến và bậc. Ví dụ này làm đủ các bước đó.

:::example Thu gọn đơn thức
Thu gọn $A=4x\cdot\dfrac12y\cdot x^2y$ rồi chỉ ra hệ số, phần biến và bậc của $A$.

**Lời giải.** Ta nhóm các số, rồi nhóm từng biến, và dùng $x\cdot x^2=x^{1+2}$, $y\cdot y=y^{1+1}$:

$$A=\left(4\cdot\frac12\right)\cdot(x\cdot x^2)\cdot(y\cdot y)=2x^3y^2.$$

Vậy $A=2x^3y^2$ có hệ số là $2$, phần biến là $x^3y^2$ và bậc là $3+2=5$.
:::

Khi đơn thức đã thu gọn, việc đọc hệ số và bậc rất nhanh. Ta luyện với vài đơn thức, trong đó có một đơn thức không viết số đứng đầu.

:::example Hệ số và bậc
Tìm hệ số và bậc của các đơn thức $-7x^2y$, $\dfrac34x^4$ và $xy^2z$.

**Lời giải.** Với mỗi đơn thức, ta lấy số đứng đầu làm hệ số rồi cộng các số mũ để được bậc. Chú ý $xy^2z$ không viết số đứng đầu, tức là hệ số của nó là $1$:

| Đơn thức | Hệ số | Bậc |
|---|---|---|
| $-7x^2y$ | $-7$ | $2+1=3$ |
| $\dfrac34x^4$ | $\dfrac34$ | $4$ |
| $xy^2z$ | $1$ | $1+2+1=4$ |
:::

Giờ ta quay lại chuyện những "gói" giống nhau: trong một nhóm đơn thức, đơn thức nào đồng dạng với nhau, và cộng chúng lại thì được gì?

:::example Đơn thức đồng dạng và cộng trừ
Trong các đơn thức $2xy^2$, $-xy^2$, $3x^2y$, $5y^2x$, đơn thức nào đồng dạng với $xy^2$? Tính tổng các đơn thức đó.

**Lời giải.** Ta so sánh phần biến. Ta có $5y^2x=5xy^2$ vì nhân có tính giao hoán. Phần biến của $3x^2y$ là $x^2y$, khác $xy^2$.

Vậy ba đơn thức $2xy^2$, $-xy^2$, $5y^2x$ đồng dạng với $xy^2$. Ta cộng các hệ số và giữ nguyên phần biến:

$$2xy^2+(-xy^2)+5xy^2=(2-1+5)xy^2=6xy^2.$$

Vậy tổng là $6xy^2$.
:::

Phép cộng cần đồng dạng, còn phép nhân thì không. Hai đơn thức bất kì đều nhân được với nhau.

:::example Nhân hai đơn thức
Tính $(-3x^2y)\cdot(2xy^3)$ và cho biết bậc của kết quả.

**Lời giải.** Ta nhân hệ số, rồi nhân từng biến bằng cách cộng số mũ ($x$ có $2+1$, $y$ có $1+3$):

$$(-3x^2y)\cdot(2xy^3)=(-3\cdot2)\cdot x^{2+1}\cdot y^{1+3}=-6x^3y^4.$$

Vậy kết quả là $-6x^3y^4$, có bậc $3+4=7$.
:::

Cuối cùng, ta trở lại hộp quà ở đầu bài, lần này với hai loại hộp. Đơn thức giúp ta viết tổng thể tích thật gọn.

:::example Thể tích hai loại hộp
Hộp A có đáy hình vuông cạnh $x$ cm và cao $2x$ cm. Hộp B là hình lập phương cạnh $x$ cm. Viết thể tích một hộp A cộng thể tích một hộp B dưới dạng đơn thức, rồi tính giá trị khi $x=4$.

**Lời giải.** Thể tích hộp A là $x\cdot x\cdot2x=2x^3$. Thể tích hộp B là $x\cdot x\cdot x=x^3$. Hai đơn thức này đồng dạng, nên ta cộng các hệ số:

$$2x^3+x^3=(2+1)x^3=3x^3.$$

Với $x=4$: $3\cdot4^3=3\cdot64=192$.

Vậy tổng thể tích là $3x^3$ cm³, và bằng $192$ cm³ khi $x=4$.
:::

:::warning Những sai lầm thường gặp
- **Cho rằng $x+y$ là đơn thức.** Nhiều bạn viết: $x+y$ là đơn thức. Chỗ này sai vì đơn thức chỉ có phép nhân giữa số và biến, không có phép cộng. Đúng là $x+y$ không phải đơn thức.
- **Tính bậc bằng cách nhân số mũ.** Bạn dễ viết bậc của $x^2y^3$ là $2\cdot3=6$. Nhưng bậc là tổng các số mũ, nên đúng là $2+3=5$.
- **Cộng cả số mũ khi cộng đơn thức.** Có bạn viết $3x^2+5x^2=8x^4$. Hãy nhớ chuyện các gói: cộng hệ số thì phần biến giữ nguyên, giống như $3$ gói cộng $5$ gói là $8$ gói. Đúng là $8x^2$. Thử $x=2$: $3\cdot4+5\cdot4=32$, còn $8\cdot2^4=128$.
- **Nhân lũy thừa mà nhân số mũ.** Có bạn viết $x^2\cdot x^3=x^6$. Hãy viết ra: $x^2\cdot x^3=(x\cdot x)(x\cdot x\cdot x)$ có $5$ thừa số $x$. Đúng là $x^5$.
:::

## Thuật ngữ

:::terms
- đơn thức | monomial
- biến | variable
- hệ số | coefficient
- phần biến | variable part
- đơn thức thu gọn | monomial in its simplest form
- bậc của đơn thức | degree of a monomial
- đơn thức đồng dạng | like terms
- lũy thừa | power
- số mũ | exponent (index)
- hằng số | constant
:::

## Tóm tắt

- Đơn thức là một số, một biến, hoặc tích của các số và các biến. Biểu thức có phép cộng, trừ hoặc biến ở mẫu thì không phải đơn thức.
- Đơn thức thu gọn $ax^my^n$ có hệ số $a$, phần biến $x^my^n$, và bậc bằng tổng các số mũ $m+n$.
- Hai đơn thức đồng dạng nếu hệ số khác $0$ và cùng phần biến. Muốn cộng hay trừ chúng, ta cộng hay trừ các hệ số và giữ nguyên phần biến.
- Muốn nhân hai đơn thức, ta nhân các hệ số với nhau và nhân các phần biến với nhau (cộng số mũ của cùng một biến).
- Muốn kiểm tra kết quả, ta thay biến bằng một số nhỏ, ví dụ $x=2$, rồi so sánh hai vế.
Câu hỏi đầu bài đã có lời đáp: thể tích hộp quà viết gọn được thành một đơn thức, và đơn thức cho ta cách gọi tên, so sánh, tính toán rất gọn. Điều cần nhớ nhất là cộng thì giữ nguyên phần biến, còn nhân thì cộng số mũ.

## Luyện tập

Mỗi bài tập có phần kiến thức cần nhớ và gợi ý các bước. Bạn nên tự làm trước, vướng thì mới mở lời giải. Làm chậm mà chắc, đơn thức nào rồi cũng quen dần.

:::exercise
Trong các biểu thức $-3$, $x^2y$, $x-2y$, $\dfrac{5}{x}$, $\dfrac{2}{3}ab$, $y^3$, biểu thức nào là đơn thức?

::hint
**Kiến thức:** đơn thức là số, biến, hoặc tích của số và các biến.

**Gợi ý các bước:**
1. Xem biểu thức có phép cộng, trừ không.
2. Xem có biến nào ở mẫu không.

::solution
Đơn thức là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc tích của các số và các biến (kể cả luỹ thừa với số mũ tự nhiên của biến).

Biểu thức $-3$ là một số nên là đơn thức.

Biểu thức $x^2y$ là tích của các biến nên là đơn thức.

Biểu thức $x-2y$ có phép trừ nên không là đơn thức.

Biểu thức $\dfrac{5}{x}$ có biến ở mẫu nên không là đơn thức.

Biểu thức $\dfrac23ab$ là tích của một số và các biến nên là đơn thức.

Biểu thức $y^3$ là luỹ thừa của một biến nên là đơn thức.

Vậy các đơn thức là $-3$, $x^2y$, $\dfrac23ab$, $y^3$.

**Đáp số.** $-3$, $x^2y$, $\dfrac23ab$, $y^3$.
:::

:::exercise
Thu gọn rồi chỉ ra hệ số và bậc:

a) $5x\cdot(-2)\cdot xy^2$.

b) $\dfrac12x^2\cdot6y\cdot x$.

::hint
**Kiến thức:** nhóm các số với nhau, nhóm từng biến, rồi cộng các số mũ của cùng một biến.

**Gợi ý các bước:**
1. Tính tích các số.
2. Với mỗi biến, viết một lũy thừa.
3. Cộng các số mũ để tìm bậc.

::solution
Để thu gọn đơn thức, ta nhân các hệ số với nhau và nhân các luỹ thừa cùng biến bằng công thức $x^m\cdot x^n=x^{m+n}$. Bậc của đơn thức là tổng các số mũ của các biến.

a) Ta có
$$5x\cdot(-2)\cdot xy^2=(5\cdot(-2))\cdot(x\cdot x)\cdot y^2=-10x^2y^2.$$
Hệ số là $-10$; bậc là $2+2=4$.

b) Ta có
$$\frac12x^2\cdot6y\cdot x=\left(\frac12\cdot6\right)\cdot(x^2\cdot x)\cdot y=3x^3y.$$
Hệ số là $3$; bậc là $3+1=4$.

Vậy a) đơn thức thu gọn là $-10x^2y^2$, hệ số $-10$, bậc $4$; b) đơn thức thu gọn là $3x^3y$, hệ số $3$, bậc $4$.

**Đáp số.** a) $-10x^2y^2$, hệ số $-10$, bậc $4$; b) $3x^3y$, hệ số $3$, bậc $4$.
:::

:::exercise
Tính:

a) $6xy^2+(-2xy^2)+xy^2$.

b) $9x^3y-4x^3y-x^3y$.

::hint
**Kiến thức:** các đơn thức đồng dạng: cộng, trừ các hệ số và giữ nguyên phần biến.

**Gợi ý các bước:**
1. Kiểm tra các đơn thức có cùng phần biến.
2. Tính tổng đại số các hệ số.

::solution
Các đơn thức trong mỗi câu đồng dạng (cùng phần biến), nên ta cộng, trừ các hệ số và giữ nguyên phần biến.

a) Ta có
$$6xy^2+(-2xy^2)+xy^2=(6-2+1)xy^2=5xy^2.$$

b) Ta có
$$9x^3y-4x^3y-x^3y=(9-4-1)x^3y=4x^3y.$$

Vậy a) kết quả là $5xy^2$; b) kết quả là $4x^3y$.

**Đáp số.** a) $5xy^2$; b) $4x^3y$.
:::

:::exercise
Hãy nhớ lại lũy thừa ở lớp 7: $x^m\cdot x^n=x^{m+n}$.

a) Viết $2^3\cdot2^4$ thành một lũy thừa của $2$ rồi tính giá trị.

b) Viết $x^3\cdot x^4$ thành một lũy thừa của $x$.

::hint
**Kiến thức:** nhân hai lũy thừa cùng cơ số thì giữ nguyên cơ số và cộng số mũ.

**Gợi ý các bước:**
1. Cộng hai số mũ.
2. Với câu a), tính $2^7$.

::solution
Áp dụng công thức nhân hai luỹ thừa cùng cơ số: $x^m\cdot x^n=x^{m+n}$.

a) Ta có
$$2^3\cdot2^4=2^{3+4}=2^7=128.$$
Kiểm tra: $2^3\cdot2^4=8\cdot16=128$.

b) Ta có
$$x^3\cdot x^4=x^{3+4}=x^7.$$

Vậy a) $2^3\cdot2^4=2^7=128$; b) $x^3\cdot x^4=x^7$.

**Đáp số.** a) $2^7=128$; b) $x^7$.
:::

:::exercise
Cho đơn thức $-4x^3yz^2$. Hãy cho biết:

a) hệ số của đơn thức;

b) phần biến của đơn thức;

c) bậc của đơn thức.

::hint
**Kiến thức:** hệ số là số đứng đầu; bậc là tổng các số mũ (nhớ $y=y^1$).

**Gợi ý các bước:**
1. Tìm số đứng đầu.
2. Viết phần biến còn lại.
3. Cộng các số mũ $3$, $1$, $2$.

::solution
Đơn thức $-4x^3yz^2$ đã được thu gọn, gồm một số (hệ số) nhân với các luỹ thừa của các biến khác nhau.

a) Hệ số của đơn thức là số đứng trước các biến, tức là $-4$.

b) Phần biến của đơn thức gồm các biến cùng số mũ của chúng, tức là $x^3yz^2$.

c) Bậc của đơn thức là tổng các số mũ của các biến: $3+1+2=6$ (biến $y$ có số mũ $1$).

Vậy hệ số là $-4$, phần biến là $x^3yz^2$ và bậc là $6$.

**Đáp số.** a) $-4$; b) $x^3yz^2$; c) $6$.
:::

:::exercise
Trong mỗi cặp sau, hai đơn thức có đồng dạng không? Vì sao?

a) $3x^2y$ và $-5x^2y$.

b) $2xy$ và $2xy^2$.

c) $4ab$ và $ba$.

::hint
**Kiến thức:** hai đơn thức đồng dạng khi có hệ số khác $0$ và cùng phần biến.

**Gợi ý các bước:**
1. Viết phần biến của từng đơn thức.
2. Chú ý thứ tự các thừa số có thể đổi chỗ.

::solution
Hai đơn thức gọi là đồng dạng nếu chúng có hệ số khác $0$ và có cùng phần biến.

a) Hai đơn thức $3x^2y$ và $-5x^2y$ có hệ số $3$ và $-5$ đều khác $0$, và cùng phần biến $x^2y$. Do đó chúng đồng dạng.

b) Hai đơn thức $2xy$ và $2xy^2$ có phần biến lần lượt là $xy$ và $xy^2$, khác nhau. Do đó chúng không đồng dạng.

c) Ta có $ba=ab$, là đơn thức có hệ số $1\neq0$ và phần biến $ab$, giống phần biến của $4ab$ (hệ số $4\neq0$). Do đó chúng đồng dạng.

Vậy cặp a) và cặp c) đồng dạng; cặp b) không đồng dạng.

**Đáp số.** a) có; b) không; c) có.
:::

:::exercise
Tìm lỗi sai trong lời giải của bạn Hà rồi sửa lại.

a) $4x^2+3x^2=7x^4$.

b) $(-2x)\cdot(3x^2)=-6x^2$.

c) Bậc của đơn thức $5x^3y$ là $3$.

::hint
**Kiến thức:** cộng đơn thức đồng dạng giữ nguyên phần biến; nhân đơn thức thì cộng số mũ; bậc là tổng các số mũ.

**Gợi ý các bước:**
1. Xem mỗi câu dùng đúng quy tắc nào.
2. Thử lại bằng cách thay $x=2$.

::solution
Ta kiểm tra từng bước làm của bạn Hà bằng các quy tắc về đơn thức.

a) Quy tắc: khi cộng các đơn thức đồng dạng, ta cộng các hệ số và giữ nguyên phần biến. Bạn Hà đã sai ở phần biến (viết $x^4$). Lời giải đúng là
$$4x^2+3x^2=(4+3)x^2=7x^2.$$
Thử với $x=2$: $4\cdot4+3\cdot4=16+12=28$ và $7\cdot4=28$.

b) Quy tắc: khi nhân các luỹ thừa cùng cơ số, ta cộng các số mũ. Bạn Hà đã sai ở số mũ vì $x\cdot x^2=x^{1+2}=x^3$. Lời giải đúng là
$$(-2x)\cdot(3x^2)=(-2\cdot3)\cdot x^3=-6x^3.$$

c) Bậc của đơn thức là tổng các số mũ của các biến. Bạn Hà đã quên số mũ của $y$ (bằng $1$). Lời giải đúng là bậc của $5x^3y$ bằng $3+1=4$.

Vậy bạn Hà sai ở cả ba câu; kết quả đúng là a) $7x^2$; b) $-6x^3$; c) bậc $4$.

**Đáp số.** a) $7x^2$; b) $-6x^3$; c) bậc $4$.
:::

:::exercise
Một sân chơi hình chữ nhật có chiều dài $3x$ m và chiều rộng $2x$ m.

a) Viết diện tích sân dưới dạng đơn thức thu gọn và cho biết bậc của nó.

b) Tính diện tích khi $x=5$.

::hint
**Kiến thức:** diện tích hình chữ nhật bằng chiều dài nhân chiều rộng.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Nhân hai đơn thức $3x$ và $2x$.
3. Thay $x=5$ và ghi đơn vị.

::solution
Sân chơi hình chữ nhật có chiều dài $3x$ m và chiều rộng $2x$ m (với $x>0$).

a) Diện tích sân bằng chiều dài nhân chiều rộng, nên
$$S=3x\cdot2x=(3\cdot2)\cdot(x\cdot x)=6x^{1+1}=6x^2\ (\text{m}^2).$$
Đơn thức $6x^2$ có bậc là $2$.

b) Thay $x=5$ vào $S=6x^2$, ta được
$$S=6\cdot5^2=6\cdot25=150\ (\text{m}^2).$$

Vậy a) diện tích sân là $6x^2$ m$^2$, đơn thức có bậc $2$; b) khi $x=5$ thì diện tích sân bằng $150$ m$^2$.

**Đáp số.** a) $6x^2$ m², bậc $2$; b) $150$ m².
:::

:::exercise Thử thách
Tìm đơn thức $M$ sao cho $M\cdot(-3xy^2)=6x^3y^4$. Sau đó tính giá trị của $M$ khi $x=2$, $y=-1$.

::hint
**Kiến thức:** khi nhân hai đơn thức, hệ số nhân với hệ số và số mũ của từng biến cộng lại.

**Gợi ý các bước:**
1. Hệ số của $M$ nhân $-3$ phải bằng $6$.
2. Số mũ của $x$ trong $M$ cộng $1$ phải bằng $3$.
3. Số mũ của $y$ trong $M$ cộng $2$ phải bằng $4$.

::solution
Hệ số của $M$ là $-2$ vì $(-2)\cdot(-3)=6$. Số mũ của $x$ là $3-1=2$. Số mũ của $y$ là $4-2=2$. Vậy $M=-2x^2y^2$.

**Kiểm tra.** $(-2x^2y^2)\cdot(-3xy^2)=6x^3y^4$. Đúng.

Với $x=2$, $y=-1$: $M=-2\cdot4\cdot1=-8$.

**Đáp số.** $M=-2x^2y^2$; giá trị bằng $-8$.
:::

## Kiểm tra mini

:::quiz
::mc NB
Biểu thức nào sau đây là đơn thức?
A. $x+3$.
B. $\dfrac{2}{x}$.
C. $-4xy^2$.
D. $x^2-y$.
::key C
$-4xy^2$ là tích của số $-4$ và các biến. A và D có phép cộng, trừ; B có biến ở mẫu.

::mc NB
Bậc của đơn thức $-3x^2y^4$ là
A. $8$.
B. $6$.
C. $4$.
D. $-3$.
::key B
Bậc là tổng các số mũ: $2+4=6$. Phương án A là nhân các số mũ, C chỉ lấy số mũ lớn nhất, D lấy hệ số.

::mc TH
Kết quả của $5x^2y+3x^2y-x^2y$ là
A. $8x^2y$.
B. $9x^2y$.
C. $7x^2y$.
D. $7x^4y^2$.
::key C
Cộng các hệ số: $5+3-1=7$, giữ nguyên phần biến. Phương án A bỏ sót dấu trừ, B coi $-x^2y$ là $+x^2y$, D cộng cả số mũ.

::mc TH
Kết quả của $(-2x^2y)\cdot(4xy^3)$ là
A. $-8x^3y^4$.
B. $-8x^2y^3$.
C. $2x^3y^4$.
D. $-8x^3y^3$.
::key A
Hệ số: $-2\cdot4=-8$. Số mũ: $x$ có $2+1=3$, $y$ có $1+3=4$. Phương án C cộng các hệ số, B và D cộng sai số mũ.

::tf NB NB NB TH
Cho đơn thức $A=-\dfrac32x^2y^3$.
a) Hệ số của $A$ là $-\dfrac32$.
b) Phần biến của $A$ là $x^2y^3$.
c) Bậc của $A$ là $6$.
d) $A$ đồng dạng với đơn thức $4y^3x^2$.
::key Đ Đ S Đ
a) Đúng: số đứng đầu là $-\dfrac32$. b) Đúng. c) Sai: bậc là $2+3=5$. d) Đúng: $4y^3x^2=4x^2y^3$ cùng phần biến với $A$.

::sa TH
Thu gọn $2x^3y\cdot(-5xy^2)$. Bậc của đơn thức nhận được là bao nhiêu?
::key 7
$2x^3y\cdot(-5xy^2)=-10x^4y^3$, bậc là $4+3=7$.

::sa TH
Tính giá trị của đơn thức $-2x^2y$ tại $x=3$, $y=-1$.
::key 18
$-2\cdot3^2\cdot(-1)=-2\cdot9\cdot(-1)=18$.
:::
