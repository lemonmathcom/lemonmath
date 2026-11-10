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

Một hộp quà có đáy là hình vuông cạnh $x$ cm và chiều cao gấp đôi cạnh đáy, tức là $2x$ cm. Thể tích của hộp là $x\cdot x\cdot2x$ (cm³). Biểu thức này có thể viết gọn thế nào, và nó thuộc loại biểu thức nào?

Ở lớp 7, bạn đã biết dùng chữ để thay cho số và biết quy tắc nhân hai lũy thừa cùng cơ số. Hôm nay ta dùng hai điều đó để làm quen với một loại biểu thức đơn giản nhất: đơn thức.

## Đơn thức và đơn thức thu gọn

### Khám phá: viết gọn thể tích hộp quà

Ta thử với $x=3$. Đáy là hình vuông cạnh $3$ cm, chiều cao là $2\cdot3=6$ cm. Thể tích là $3\cdot3\cdot6=54$ cm³.

Bây giờ ta gộp các thừa số giống nhau. Số $2$ đứng riêng, còn $x\cdot x\cdot x=x^3$, nên thể tích là $2x^3$. Thử lại với $x=3$: $2\cdot3^3=2\cdot27=54$. Hai kết quả bằng nhau, vậy $x\cdot x\cdot2x=2x^3$.

Bảng dưới đây cho vài biểu thức và cho biết biểu thức nào "giống" $2x^3$.

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

Một đơn thức có thể có nhiều biến, ví dụ $-2xy$ có hai biến $x$ và $y$. Biểu thức $x\cdot x\cdot2x$ cũng là đơn thức, nhưng chưa gọn, vì biến $x$ xuất hiện nhiều lần.

:::definition Đơn thức thu gọn, hệ số, phần biến, bậc
Đơn thức **thu gọn** là đơn thức chỉ gồm một số nhân với các lũy thừa của các biến, và mỗi biến chỉ xuất hiện một lần.

Trong đơn thức thu gọn $-5x^2y$:
- số $-5$ là **hệ số**;
- $x^2y$ là **phần biến**;
- **bậc** của đơn thức là tổng các số mũ của các biến: $2+1=3$.
:::

Số mũ của $y$ là $1$ vì $y=y^1$. Số khác $0$ là đơn thức bậc $0$. Số $0$ cũng là đơn thức, gọi là đơn thức không, và nó không có bậc.

## Các phép tính với đơn thức

### Đơn thức đồng dạng, cộng và trừ

Ta xét $3x^2+5x^2$. Mỗi $x^2$ giống như một "gói" giống nhau: có $3$ gói cộng $5$ gói là $8$ gói. Vậy $3x^2+5x^2=8x^2$. Thử với $x=2$: $3\cdot4+5\cdot4=32$ và $8\cdot4=32$.

Cách làm này đúng nhờ tính chất phân phối: $3x^2+5x^2=(3+5)x^2$. Nó chỉ dùng được khi hai đơn thức có cùng phần biến.

:::definition Đơn thức đồng dạng
Hai đơn thức có hệ số khác $0$ và có **cùng phần biến** gọi là **đơn thức đồng dạng**.

Muốn cộng (trừ) các đơn thức đồng dạng, ta cộng (trừ) các hệ số và giữ nguyên phần biến.
:::

### Nhân hai đơn thức

Ta nhân $(2x^2)\cdot(3x^3)$. Ta đổi chỗ các thừa số rồi nhóm số với số, biến với biến: $2\cdot3\cdot x^2\cdot x^3$. Số đứng riêng cho $6$. Với biến, ta dùng quy tắc nhân lũy thừa cùng cơ số: $x^2\cdot x^3=x^{2+3}=x^5$. Vậy $(2x^2)(3x^3)=6x^5$.

:::theorem Nhân hai đơn thức
Muốn nhân hai đơn thức, ta nhân các hệ số với nhau và nhân các phần biến với nhau (với cùng một biến thì cộng các số mũ):
$$(a\,x^m y^n)\cdot(b\,x^p y^q)=ab\,x^{m+p}y^{n+q}.$$
:::

## Ví dụ

Ta bắt đầu bằng việc nhận biết đơn thức.

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

Tiếp theo, ta thu gọn một đơn thức và đọc hệ số, phần biến, bậc của nó.

:::example Thu gọn đơn thức
Thu gọn $A=4x\cdot\dfrac12y\cdot x^2y$ rồi chỉ ra hệ số, phần biến và bậc của $A$.

**Lời giải.** Ta nhóm các số, rồi nhóm từng biến, và dùng $x\cdot x^2=x^{1+2}$, $y\cdot y=y^{1+1}$:

$$A=\left(4\cdot\frac12\right)\cdot(x\cdot x^2)\cdot(y\cdot y)=2x^3y^2.$$

Vậy $A=2x^3y^2$ có hệ số là $2$, phần biến là $x^3y^2$ và bậc là $3+2=5$.
:::

Bây giờ ta đọc hệ số và bậc của vài đơn thức đã thu gọn.

:::example Hệ số và bậc
Tìm hệ số và bậc của các đơn thức $-7x^2y$, $\dfrac34x^4$ và $xy^2z$.

**Lời giải.** Với mỗi đơn thức, ta lấy số đứng đầu làm hệ số rồi cộng các số mũ để được bậc. Chú ý $xy^2z$ không viết số đứng đầu, tức là hệ số của nó là $1$:

| Đơn thức | Hệ số | Bậc |
|---|---|---|
| $-7x^2y$ | $-7$ | $2+1=3$ |
| $\dfrac34x^4$ | $\dfrac34$ | $4$ |
| $xy^2z$ | $1$ | $1+2+1=4$ |
:::

Ta chuyển sang đơn thức đồng dạng.

:::example Đơn thức đồng dạng và cộng trừ
Trong các đơn thức $2xy^2$, $-xy^2$, $3x^2y$, $5y^2x$, đơn thức nào đồng dạng với $xy^2$? Tính tổng các đơn thức đó.

**Lời giải.** Ta so sánh phần biến. Ta có $5y^2x=5xy^2$ vì nhân có tính giao hoán. Phần biến của $3x^2y$ là $x^2y$, khác $xy^2$.

Vậy ba đơn thức $2xy^2$, $-xy^2$, $5y^2x$ đồng dạng với $xy^2$. Ta cộng các hệ số và giữ nguyên phần biến:

$$2xy^2+(-xy^2)+5xy^2=(2-1+5)xy^2=6xy^2.$$

Vậy tổng là $6xy^2$.
:::

Còn phép nhân thì không cần đồng dạng.

:::example Nhân hai đơn thức
Tính $(-3x^2y)\cdot(2xy^3)$ và cho biết bậc của kết quả.

**Lời giải.** Ta nhân hệ số, rồi nhân từng biến bằng cách cộng số mũ ($x$ có $2+1$, $y$ có $1+3$):

$$(-3x^2y)\cdot(2xy^3)=(-3\cdot2)\cdot x^{2+1}\cdot y^{1+3}=-6x^3y^4.$$

Vậy kết quả là $-6x^3y^4$, có bậc $3+4=7$.
:::

Cuối cùng, ta dùng đơn thức trong bài toán thực tế mở đầu.

:::example Thể tích hai loại hộp
Hộp A có đáy hình vuông cạnh $x$ cm và cao $2x$ cm. Hộp B là hình lập phương cạnh $x$ cm. Viết thể tích một hộp A cộng thể tích một hộp B dưới dạng đơn thức, rồi tính giá trị khi $x=4$.

**Lời giải.** Thể tích hộp A là $x\cdot x\cdot2x=2x^3$. Thể tích hộp B là $x\cdot x\cdot x=x^3$. Hai đơn thức này đồng dạng, nên ta cộng các hệ số:

$$2x^3+x^3=(2+1)x^3=3x^3.$$

Với $x=4$: $3\cdot4^3=3\cdot64=192$.

Vậy tổng thể tích là $3x^3$ cm³, và bằng $192$ cm³ khi $x=4$.
:::

:::warning Những sai lầm thường gặp
- **Cho rằng $x+y$ là đơn thức.** Sai: $x+y$ là đơn thức. Lí do sai: đơn thức chỉ có phép nhân giữa số và biến, không có phép cộng. Đúng: $x+y$ không phải đơn thức.
- **Tính bậc bằng cách nhân số mũ.** Sai: bậc của $x^2y^3$ là $2\cdot3=6$. Lí do sai: bậc là tổng các số mũ. Đúng: $2+3=5$.
- **Cộng cả số mũ khi cộng đơn thức.** Sai: $3x^2+5x^2=8x^4$. Lí do sai: cộng hệ số thì phần biến giữ nguyên, giống như $3$ gói cộng $5$ gói là $8$ gói. Đúng: $8x^2$. (Thử $x=2$: $3\cdot4+5\cdot4=32$, còn $8\cdot2^4=128$.)
- **Nhân lũy thừa mà nhân số mũ.** Sai: $x^2\cdot x^3=x^6$. Lí do sai: $x^2\cdot x^3=(x\cdot x)(x\cdot x\cdot x)$ có $5$ thừa số $x$. Đúng: $x^5$.
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

- Đơn thức là một số, một biến, hoặc tích của các số và các biến. Biểu thức có phép cộng, trừ hoặc biến ở mẫu không phải đơn thức.
- Đơn thức thu gọn $ax^my^n$ có hệ số $a$, phần biến $x^my^n$, bậc là tổng các số mũ $m+n$.
- Hai đơn thức đồng dạng nếu hệ số khác $0$ và cùng phần biến. Cộng, trừ chúng: cộng, trừ hệ số, giữ nguyên phần biến.
- Nhân hai đơn thức: nhân hệ số với nhau, nhân phần biến với nhau (cộng số mũ của cùng một biến).
- Có thể thử lại bằng cách thay biến bằng một số nhỏ, ví dụ $x=2$, rồi so sánh hai vế.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Trong các biểu thức $-3$, $x^2y$, $x-2y$, $\dfrac{5}{x}$, $\dfrac{2}{3}ab$, $y^3$, biểu thức nào là đơn thức?

::hint
**Kiến thức:** đơn thức là số, biến, hoặc tích của số và các biến.

**Gợi ý các bước:**
1. Xem biểu thức có phép cộng, trừ không.
2. Xem có biến nào ở mẫu không.

::solution
$x-2y$ có phép trừ nên không là đơn thức. $\dfrac{5}{x}$ có biến ở mẫu nên không là đơn thức. Các biểu thức còn lại đều là số, biến hoặc tích của số và biến.

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
a) $5x\cdot(-2)\cdot xy^2=(5\cdot(-2))\cdot x^2y^2=-10x^2y^2$. Hệ số $-10$, bậc $2+2=4$.

b) $\dfrac12x^2\cdot6y\cdot x=\left(\dfrac12\cdot6\right)\cdot x^3y=3x^3y$. Hệ số $3$, bậc $3+1=4$.

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
a) $(6-2+1)xy^2=5xy^2$.

b) $(9-4-1)x^3y=4x^3y$.

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
a) $2^3\cdot2^4=2^{3+4}=2^7=128$. (Thử lại: $8\cdot16=128$.)

b) $x^3\cdot x^4=x^{3+4}=x^7$.

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
a) Hệ số là $-4$.

b) Phần biến là $x^3yz^2$.

c) Bậc là $3+1+2=6$.

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
a) Có: cùng phần biến $x^2y$, hệ số $3$ và $-5$ khác $0$.

b) Không: phần biến là $xy$ và $xy^2$, khác nhau.

c) Có: $ba=ab$ có hệ số $1$, cùng phần biến $ab$ với $4ab$.

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
a) Sai ở phần biến: khi cộng chỉ cộng hệ số. Đúng: $4x^2+3x^2=7x^2$ (thử $x=2$: $16+12=28=7\cdot4$).

b) Sai ở số mũ: $x\cdot x^2=x^3$. Đúng: $(-2x)(3x^2)=-6x^3$.

c) Sai vì quên số mũ của $y$: $3+1=4$.

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
a) Diện tích là $3x\cdot2x=(3\cdot2)\cdot x^{1+1}=6x^2$ (m²). Bậc là $2$.

b) Với $x=5$: $6\cdot5^2=6\cdot25=150$ (m²).

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
::mc
Biểu thức nào sau đây là đơn thức?
A. $x+3$.
B. $\dfrac{2}{x}$.
C. $-4xy^2$.
D. $x^2-y$.
::key C
$-4xy^2$ là tích của số $-4$ và các biến. A và D có phép cộng, trừ; B có biến ở mẫu.

::mc
Bậc của đơn thức $-3x^2y^4$ là
A. $8$.
B. $6$.
C. $4$.
D. $-3$.
::key B
Bậc là tổng các số mũ: $2+4=6$. Phương án A là nhân các số mũ, C chỉ lấy số mũ lớn nhất, D lấy hệ số.

::mc
Kết quả của $5x^2y+3x^2y-x^2y$ là
A. $8x^2y$.
B. $9x^2y$.
C. $7x^2y$.
D. $7x^4y^2$.
::key C
Cộng các hệ số: $5+3-1=7$, giữ nguyên phần biến. Phương án A bỏ sót dấu trừ, B coi $-x^2y$ là $+x^2y$, D cộng cả số mũ.

::mc
Kết quả của $(-2x^2y)\cdot(4xy^3)$ là
A. $-8x^3y^4$.
B. $-8x^2y^3$.
C. $2x^3y^4$.
D. $-8x^3y^3$.
::key A
Hệ số: $-2\cdot4=-8$. Số mũ: $x$ có $2+1=3$, $y$ có $1+3=4$. Phương án C cộng các hệ số, B và D cộng sai số mũ.

::tf
Cho đơn thức $A=-\dfrac32x^2y^3$.
a) Hệ số của $A$ là $-\dfrac32$.
b) Phần biến của $A$ là $x^2y^3$.
c) Bậc của $A$ là $6$.
d) $A$ đồng dạng với đơn thức $4y^3x^2$.
::key Đ Đ S Đ
a) Đúng: số đứng đầu là $-\dfrac32$. b) Đúng. c) Sai: bậc là $2+3=5$. d) Đúng: $4y^3x^2=4x^2y^3$ cùng phần biến với $A$.

::sa
Thu gọn $2x^3y\cdot(-5xy^2)$. Bậc của đơn thức nhận được là bao nhiêu?
::key 7
$2x^3y\cdot(-5xy^2)=-10x^4y^3$, bậc là $4+3=7$.

::sa
Tính giá trị của đơn thức $-2x^2y$ tại $x=3$, $y=-1$.
::key 18
$-2\cdot3^2\cdot(-1)=-2\cdot9\cdot(-1)=18$.
:::
