---
title: Lập phương của một tổng. Lập phương của một hiệu. Tổng và hiệu hai lập phương
description: Học bốn hằng đẳng thức về lập phương của một tổng, một hiệu, tổng và hiệu hai lập phương để khai triển, tính nhẩm và giải bài toán thực tế.
minutes: 35
---

:::goals
- Nhớ và chứng minh các hằng đẳng thức $(a+b)^3$, $(a-b)^3$, $a^3+b^3$ và $a^3-b^3$.
- Khai triển lập phương của một tổng, một hiệu và các tích $(a\pm b)(a^2\mp ab+b^2)$.
- Nhận ra dạng hằng đẳng thức để viết biểu thức thành lập phương hoặc thành tích.
- Dùng hằng đẳng thức để tính nhẩm, rút gọn biểu thức và tính thể tích trong bài toán thực tế.
:::

Một hộp quà hình lập phương có cạnh $x$ cm. Giả sử ta làm một hộp lớn hơn bằng cách tăng mỗi cạnh thêm $1$ cm. Thể tích hộp mới lớn hơn hộp cũ bao nhiêu? Thể tích hộp mới là $(x+1)^3$, nên ta cần biết khai triển một **lập phương của một tổng**.

Ta cũng có thể hỏi: $99^3$ bằng bao nhiêu? Vì $99=100-1$, ta sẽ tính nhẩm được kết quả. Bài này tiếp nối bài trước, với bốn hằng đẳng thức về lập phương.

## Lập phương của một tổng và một hiệu

### Khám phá: từ bình phương lên lập phương

Ta đã biết $(a+b)^2=a^2+2ab+b^2$. Muốn tính $(a+b)^3$, ta nhân thêm một thừa số $(a+b)$:
$$(a+b)^3=(a+b)^2(a+b)=(a^2+2ab+b^2)(a+b).$$
Nhân từng hạng tử:
$$\begin{aligned} (a^2+2ab+b^2)(a+b)&=a^3+a^2b+2a^2b+2ab^2+ab^2+b^3\\ &=a^3+3a^2b+3ab^2+b^3. \end{aligned}$$

:::theorem Lập phương của một tổng
Với hai số (hoặc hai biểu thức) $a$ và $b$ bất kì,
$$(a+b)^3=a^3+3a^2b+3ab^2+b^3.$$
:::

Ta có thể nhìn bằng thể tích: một khối lập phương cạnh $a+b$ gồm một khối lập phương cạnh $a$ (thể tích $a^3$), một khối lập phương cạnh $b$ (thể tích $b^3$), ba khối hộp $a\times a\times b$ (mỗi khối có thể tích $a^2b$) và ba khối hộp $a\times b\times b$ (mỗi khối có thể tích $ab^2$). Cộng tám khối lại ta được $a^3+3a^2b+3ab^2+b^3$.

Thay $b$ bằng $-b$ trong hằng đẳng thức trên, ta được lập phương của một hiệu.

:::theorem Lập phương của một hiệu
Với hai số (hoặc hai biểu thức) $a$ và $b$ bất kì,
$$(a-b)^3=a^3-3a^2b+3ab^2-b^3.$$
:::

**Hiểu sâu hơn.** Trong $(a-b)^3$, các dấu xen kẽ nhau: $+,-,+,-$. Các hệ số $1,3,3,1$ giống nhau ở cả hai hằng đẳng thức.

## Tổng và hiệu hai lập phương

Ta nhân $(a+b)$ với $(a^2-ab+b^2)$:
$$(a+b)(a^2-ab+b^2)=a^3-a^2b+ab^2+a^2b-ab^2+b^3=a^3+b^3,$$
vì các hạng tử $-a^2b$ và $+a^2b$, $+ab^2$ và $-ab^2$ triệt tiêu nhau. Tương tự, $(a-b)(a^2+ab+b^2)=a^3-b^3$.

:::theorem Tổng và hiệu hai lập phương
Với hai số (hoặc hai biểu thức) $a$ và $b$ bất kì,
$$a^3+b^3=(a+b)(a^2-ab+b^2),$$
$$a^3-b^3=(a-b)(a^2+ab+b^2).$$
:::

:::note Cách nhớ
- Nhân tử thứ nhất cùng dấu với vế trái: $a^3+b^3$ có nhân tử $(a+b)$, $a^3-b^3$ có nhân tử $(a-b)$.
- Trong nhân tử thứ hai, hạng tử $a^2$ và $b^2$ luôn có dấu $+$; hạng tử $ab$ có dấu **ngược** với nhân tử thứ nhất.
:::

Các hằng đẳng thức này đúng cho cả đơn thức và đa thức, miễn là ta xem $a$, $b$ là các biểu thức. Chẳng hạn $(2x)^3=8x^3$, không phải $2x^3$.

## Ví dụ

Ta bắt đầu với lập phương của một tổng và một hiệu.

:::example Khai triển lập phương
Khai triển:

a) $(x+2)^3$.

b) $(2x-y)^3$.

**Lời giải.** a) Với $a=x$, $b=2$:
$$(x+2)^3=x^3+3\cdot x^2\cdot2+3\cdot x\cdot2^2+2^3=x^3+6x^2+12x+8.$$

b) Với $a=2x$, $b=y$:
$$\begin{aligned} (2x-y)^3&=(2x)^3-3\cdot(2x)^2\cdot y+3\cdot2x\cdot y^2-y^3\\ &=8x^3-12x^2y+6xy^2-y^3. \end{aligned}$$

Vậy a) $x^3+6x^2+12x+8$; b) $8x^3-12x^2y+6xy^2-y^3$.
:::

Tiếp theo ta dùng hằng đẳng thức để tính nhẩm.

:::example Tính nhẩm
Tính nhẩm:

a) $11^3$.

b) $99^3$.

c) $101^3$.

**Lời giải.** a) $11^3=(10+1)^3=1000+3\cdot100\cdot1+3\cdot10\cdot1+1=1000+300+30+1=1331$.

b) $99^3=(100-1)^3=1\,000\,000-3\cdot10\,000+3\cdot100-1=1\,000\,000-30\,000+300-1=970\,299$.

c) $101^3=(100+1)^3=1\,000\,000+30\,000+300+1=1\,030\,301$.

Vậy a) $1331$; b) $970\,299$; c) $1\,030\,301$.
:::

Bây giờ ta dùng tổng và hiệu hai lập phương.

:::example Khai triển tích đặc biệt
Khai triển:

a) $(x+3)(x^2-3x+9)$.

b) $(2x-1)(4x^2+2x+1)$.

**Lời giải.** a) Với $a=x$, $b=3$: $(x+3)(x^2-3x+9)=x^3+3^3=x^3+27$.

b) Với $a=2x$, $b=1$: $(2x-1)(4x^2+2x+1)=(2x)^3-1^3=8x^3-1$.

Vậy a) $x^3+27$; b) $8x^3-1$.
:::

Ta cũng đọc các hằng đẳng thức theo chiều ngược lại.

:::example Viết thành lập phương hoặc thành tích
Viết các biểu thức sau thành lập phương của một tổng (hiệu) hoặc thành tích:

a) $x^3-9x^2+27x-27$.

b) $27x^3-8$.

c) $8x^3+1$.

**Lời giải.** a) Ta có $x^3-9x^2+27x-27=x^3-3\cdot x^2\cdot3+3\cdot x\cdot3^2-3^3=(x-3)^3$.

b) Ta có $27x^3-8=(3x)^3-2^3=(3x-2)(9x^2+6x+4)$.

c) Ta có $8x^3+1=(2x)^3+1^3=(2x+1)(4x^2-2x+1)$.

Vậy a) $(x-3)^3$; b) $(3x-2)(9x^2+6x+4)$; c) $(2x+1)(4x^2-2x+1)$.
:::

Tiếp đến là rút gọn rồi tính giá trị.

:::example Rút gọn biểu thức
Rút gọn $(x-2)(x^2+2x+4)-x(x^2-3)$ rồi tính giá trị tại $x=4$.

**Lời giải.** Ta dùng hằng đẳng thức hiệu hai lập phương:
$$\begin{aligned} (x-2)(x^2+2x+4)-x(x^2-3)&=(x^3-8)-(x^3-3x)\\ &=x^3-8-x^3+3x\\ &=3x-8. \end{aligned}$$
Tại $x=4$, giá trị là $3\cdot4-8=4$.

Vậy biểu thức bằng $3x-8$, và bằng $4$ khi $x=4$.

**Nhận xét.** Kiểm tra trực tiếp: $2\cdot28-4\cdot13=56-52=4$, khớp.
:::

Cuối cùng là bài toán về chiếc hộp ở đầu bài.

:::example Hộp lập phương lớn hơn (Vận dụng)
Giả sử một hộp quà hình lập phương có cạnh $x$ cm. Ta làm hộp mới bằng cách tăng mỗi cạnh thêm $1$ cm. Viết đa thức biểu thị phần thể tích tăng thêm, rồi tính khi $x=10$.

**Lời giải.**

*Hiểu đề.* Hộp cũ có cạnh $x$, hộp mới có cạnh $x+1$. Cần so sánh hai thể tích.

*Tìm cách giải.* Tính thể tích hộp mới bằng hằng đẳng thức lập phương của một tổng rồi trừ đi thể tích hộp cũ $x^3$.

*Giải.* Thể tích hộp cũ là $x^3$ (cm³). Thể tích hộp mới là
$$(x+1)^3=x^3+3x^2+3x+1\ (\text{cm}^3).$$
Phần thể tích tăng thêm là
$$(x^3+3x^2+3x+1)-x^3=3x^2+3x+1\ (\text{cm}^3).$$
Khi $x=10$, thể tích tăng thêm là $3\cdot100+3\cdot10+1=331$ (cm³).

Vậy thể tích tăng thêm là $3x^2+3x+1$ (cm³), và bằng $331$ cm³ khi $x=10$.

*Nhìn lại.* Kiểm tra bằng số: khi $x=10$, hộp cũ có $10^3=1000$ cm³, hộp mới có $11^3=1331$ cm³, hiệu là $331$ cm³, khớp. Ba số hạng $3x^2$, $3x$, $1$ cũng là ba lớp mà ta thêm vào ba mặt, ba cạnh và một góc của khối lập phương.
:::

:::warning Những sai lầm thường gặp
- **Bỏ hai hạng tử giữa.** Sai: $(x+2)^3=x^3+8$. Lí do sai: thiếu $3\cdot x^2\cdot2$ và $3\cdot x\cdot2^2$. Đúng: $(x+2)^3=x^3+6x^2+12x+8$.
- **Không xen kẽ dấu trong lập phương của một hiệu.** Sai: $(x-2)^3=x^3-6x^2-12x-8$. Lí do sai: các dấu phải là $+,-,+,-$. Đúng: $(x-2)^3=x^3-6x^2+12x-8$.
- **Sai dấu ở nhân tử thứ hai.** Sai: $x^3+8=(x+2)(x^2+2x+4)$. Lí do sai: với tổng hai lập phương, hạng tử giữa mang dấu $-$. Đúng: $x^3+8=(x+2)(x^2-2x+4)$.
- **Nhầm hiệu hai lập phương với lập phương của một hiệu.** Sai: $x^3-8=(x-2)^3$. Lí do sai: $(x-2)^3$ có bốn hạng tử. Đúng: $x^3-8=(x-2)(x^2+2x+4)$.
:::

**Kết nối.** Các hằng đẳng thức này tiếp nối bài về bình phương và đều xuất phát từ phép nhân đa thức. Chúng giúp khai triển rất nhanh, và khi đọc theo chiều ngược lại, chúng giúp phân tích đa thức thành nhân tử ở bài sau.

## Thuật ngữ

:::terms
- lập phương | cube
- lập phương của một tổng | cube of a sum
- lập phương của một hiệu | cube of a difference
- tổng hai lập phương | sum of two cubes
- hiệu hai lập phương | difference of two cubes
- hằng đẳng thức | identity
- khai triển | expand
- thể tích | volume
:::

## Tóm tắt

- $(a+b)^3=a^3+3a^2b+3ab^2+b^3$.
- $(a-b)^3=a^3-3a^2b+3ab^2-b^3$ (dấu xen kẽ).
- $a^3+b^3=(a+b)(a^2-ab+b^2)$.
- $a^3-b^3=(a-b)(a^2+ab+b^2)$.
- Chú ý $(2x)^3=8x^3$ và dấu của hạng tử giữa trong nhân tử thứ hai.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Khai triển:

a) $(x+1)^3$.

b) $(x-3)^3$.

c) $(2x+1)^3$.

::hint
**Kiến thức:** $(a+b)^3=a^3+3a^2b+3ab^2+b^3$ và $(a-b)^3=a^3-3a^2b+3ab^2-b^3$.

**Gợi ý các bước:**
1. Xác định $a$ và $b$.
2. Viết bốn hạng tử, chú ý dấu.

::solution
a) $(x+1)^3=x^3+3x^2+3x+1$.

b) $(x-3)^3=x^3-9x^2+27x-27$.

c) $(2x+1)^3=8x^3+12x^2+6x+1$.

Vậy a) $x^3+3x^2+3x+1$; b) $x^3-9x^2+27x-27$; c) $8x^3+12x^2+6x+1$.

**Đáp số.** a) $x^3+3x^2+3x+1$. b) $x^3-9x^2+27x-27$. c) $8x^3+12x^2+6x+1$.
:::

:::exercise
Khai triển:

a) $(3x-2y)^3$.

b) $(x^2+2)^3$.

c) $\left(\dfrac12x+2\right)^3$.

::hint
**Kiến thức:** các hằng đẳng thức đúng khi $a$, $b$ là các đơn thức; nhớ lập phương cả hệ số và biến.

**Gợi ý các bước:**
1. Xác định $a$ và $b$.
2. Tính $a^3$, $3a^2b$, $3ab^2$, $b^3$.

::solution
a) $(3x-2y)^3=27x^3-54x^2y+36xy^2-8y^3$.

b) $(x^2+2)^3=x^6+6x^4+12x^2+8$.

c) $\left(\dfrac12x+2\right)^3=\dfrac18x^3+\dfrac32x^2+6x+8$.

Vậy a) $27x^3-54x^2y+36xy^2-8y^3$; b) $x^6+6x^4+12x^2+8$; c) $\dfrac18x^3+\dfrac32x^2+6x+8$.

**Đáp số.** a) $27x^3-54x^2y+36xy^2-8y^3$. b) $x^6+6x^4+12x^2+8$. c) $\dfrac18x^3+\dfrac32x^2+6x+8$.
:::

:::exercise
Khai triển:

a) $(x+4)(x^2-4x+16)$.

b) $(3x-1)(9x^2+3x+1)$.

c) $(2x+3y)(4x^2-6xy+9y^2)$.

::hint
**Kiến thức:** $(a+b)(a^2-ab+b^2)=a^3+b^3$ và $(a-b)(a^2+ab+b^2)=a^3-b^3$.

**Gợi ý các bước:**
1. Nhận ra $a$, $b$ và dạng của nhân tử thứ hai.
2. Viết kết quả là tổng hoặc hiệu hai lập phương.

::solution
a) $(x+4)(x^2-4x+16)=x^3+64$.

b) $(3x-1)(9x^2+3x+1)=27x^3-1$.

c) $(2x+3y)(4x^2-6xy+9y^2)=8x^3+27y^3$.

Vậy a) $x^3+64$; b) $27x^3-1$; c) $8x^3+27y^3$.

**Đáp số.** a) $x^3+64$. b) $27x^3-1$. c) $8x^3+27y^3$.
:::

:::exercise
Tính nhẩm bằng hằng đẳng thức:

a) $21^3$.

b) $19^3$.

c) $31^3$.

::hint
**Kiến thức:** viết số đã cho thành tổng hoặc hiệu của một số tròn chục với một số nhỏ.

**Gợi ý các bước:**
1. Viết $21=20+1$, $19=20-1$, $31=30+1$.
2. Áp dụng hằng đẳng thức tương ứng.

::solution
a) $21^3=(20+1)^3=8000+1200+60+1=9261$.

b) $19^3=(20-1)^3=8000-1200+60-1=6859$.

c) $31^3=(30+1)^3=27\,000+2700+90+1=29\,791$.

Vậy a) $9261$; b) $6859$; c) $29\,791$.

**Đáp số.** a) $9261$. b) $6859$. c) $29\,791$.
:::

:::exercise
Viết các biểu thức sau thành lập phương của một tổng (hiệu) hoặc thành tích:

a) $x^3+12x^2+48x+64$.

b) $8x^3-125$.

c) $27+x^3$.

::hint
**Kiến thức:** đọc các hằng đẳng thức theo chiều ngược lại.

**Gợi ý các bước:**
1. Nhận ra $a$ và $b$ (hạng tử đầu và cuối là các lập phương).
2. Chọn hằng đẳng thức phù hợp.

::solution
a) Với $a=x$, $b=4$: $x^3+12x^2+48x+64=(x+4)^3$.

b) $8x^3-125=(2x)^3-5^3=(2x-5)(4x^2+10x+25)$.

c) $27+x^3=3^3+x^3=(3+x)(9-3x+x^2)$.

Vậy a) $(x+4)^3$; b) $(2x-5)(4x^2+10x+25)$; c) $(3+x)(9-3x+x^2)$.

**Đáp số.** a) $(x+4)^3$. b) $(2x-5)(4x^2+10x+25)$. c) $(3+x)(9-3x+x^2)$.
:::

:::exercise
Rút gọn $C=(x+3)^3-(x-3)^3$ rồi tính giá trị của $C$ tại $x=1$.

::hint
**Kiến thức:** khai triển hai lập phương rồi trừ; bỏ ngoặc có dấu $-$ thì đổi dấu mọi hạng tử.

**Gợi ý các bước:**
1. Khai triển $(x+3)^3$ và $(x-3)^3$.
2. Trừ hai kết quả rồi thay $x=1$.

::solution
Ta có $(x+3)^3=x^3+9x^2+27x+27$ và $(x-3)^3=x^3-9x^2+27x-27$. Do đó
$$C=(x^3+9x^2+27x+27)-(x^3-9x^2+27x-27)=18x^2+54.$$
Tại $x=1$, $C=18+54=72$. (Kiểm tra: $4^3-(-2)^3=64+8=72$.)

Vậy $C=18x^2+54$ và $C=72$ khi $x=1$.

**Đáp số.** $C=18x^2+54$; $72$.
:::

:::exercise
Giả sử một bể nước hình lập phương có cạnh $x$ m. Người ta làm bể mới cũng hình lập phương, có cạnh dài hơn bể cũ $2$ m. Viết đa thức biểu thị phần thể tích tăng thêm, rồi tính khi $x=3$.

::hint
**Kiến thức:** thể tích hình lập phương cạnh $a$ là $a^3$; $(x+2)^3=x^3+6x^2+12x+8$.

**Gợi ý các bước:**
1. Viết thể tích bể mới và bể cũ.
2. Trừ hai thể tích rồi thay $x=3$.

::solution
Thể tích bể mới là $(x+2)^3=x^3+6x^2+12x+8$ (m³). Phần tăng thêm là
$$(x^3+6x^2+12x+8)-x^3=6x^2+12x+8\ (\text{m}^3).$$
Khi $x=3$, phần tăng thêm là $6\cdot9+12\cdot3+8=98$ (m³). (Kiểm tra: $5^3-3^3=125-27=98$.)

Vậy thể tích tăng thêm là $6x^2+12x+8$ (m³), và bằng $98$ m³ khi $x=3$.

**Đáp số.** $6x^2+12x+8$ (m³); $98$ m³.
:::

:::exercise
Giả sử có hai hộp hình lập phương, độ dài cạnh (đơn vị đề-xi-mét) là $a$ và $b$, với $a+b=5$ và $ab=6$. Tính tổng thể tích $a^3+b^3$ của hai hộp.

::hint
**Kiến thức:** $a^3+b^3=(a+b)^3-3ab(a+b)$.

**Gợi ý các bước:**
1. Khai triển $(a+b)^3$ rồi rút $a^3+b^3$.
2. Thay $a+b=5$ và $ab=6$.

::solution
Từ $(a+b)^3=a^3+b^3+3ab(a+b)$ ta có $a^3+b^3=(a+b)^3-3ab(a+b)$. Do đó
$$a^3+b^3=5^3-3\cdot6\cdot5=125-90=35.$$
(Kiểm tra: hai cạnh là $2$ dm và $3$ dm, và $2^3+3^3=8+27=35$.)

Vậy tổng thể tích của hai hộp là $35$ dm³.

**Đáp số.** $35\ \text{dm}^3$.
:::

:::exercise
Nhớ lại bài về hình hộp chữ nhật và hình lập phương. Một hình lập phương có cạnh $(2x-1)$ cm. Viết thể tích dưới dạng đa thức, rồi tính khi $x=2$.

::hint
**Kiến thức:** $V=a^3$ và $(a-b)^3=a^3-3a^2b+3ab^2-b^3$.

**Gợi ý các bước:**
1. Khai triển $(2x-1)^3$.
2. Thay $x=2$.

::solution
Ta có $V=(2x-1)^3=(2x)^3-3(2x)^2\cdot1+3\cdot2x\cdot1^2-1^3=8x^3-12x^2+6x-1\ (\text{cm}^3)$.

Khi $x=2$, $V=64-48+12-1=27\ (\text{cm}^3)$. (Kiểm tra: cạnh là $3$ cm, $3^3=27$.)

Vậy $V=8x^3-12x^2+6x-1\ (\text{cm}^3)$, và bằng $27\ \text{cm}^3$ khi $x=2$.

**Đáp số.** $8x^3-12x^2+6x-1$; $27\ \text{cm}^3$.
:::

:::exercise Thử thách
Cho $a+b=1$. Chứng minh rằng $a^3+b^3+3ab=1$.

::hint
**Kiến thức:** $(a+b)^3=a^3+b^3+3ab(a+b)$.

**Gợi ý các bước:**
1. Viết $a^3+b^3$ theo $(a+b)^3$ và $3ab(a+b)$.
2. Thay $a+b=1$ rồi rút gọn.

::solution
Từ $(a+b)^3=a^3+b^3+3ab(a+b)$ ta có $a^3+b^3=(a+b)^3-3ab(a+b)$. Vì $a+b=1$ nên
$$a^3+b^3=1-3ab.$$
Do đó $a^3+b^3+3ab=1-3ab+3ab=1$.

**Đáp số.** Đẳng thức được chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Khai triển $(x+2)^3$ được
A. $x^3+8$.
B. $x^3+2x^2+4x+8$.
C. $x^3+6x^2+12x+8$.
D. $x^3-6x^2+12x-8$.
::key C
$(x+2)^3=x^3+3\cdot x^2\cdot2+3\cdot x\cdot4+8=x^3+6x^2+12x+8$. A bỏ hai hạng tử giữa, B quên các hệ số $3$, D sai dấu.

::mc
Khai triển $(2x-1)^3$ được
A. $8x^3-12x^2-6x-1$.
B. $8x^3-1$.
C. $8x^3-6x^2+6x-1$.
D. $8x^3-12x^2+6x-1$.
::key D
$(2x-1)^3=8x^3-3\cdot4x^2+3\cdot2x-1=8x^3-12x^2+6x-1$. B là hiệu hai lập phương, C quên bình phương hệ số $2$ ở hạng tử thứ hai, A không xen kẽ dấu.

::mc
Biểu thức $x^3+27$ bằng
A. $(x+3)(x^2-3x+9)$.
B. $(x+3)^3$.
C. $(x+3)(x^2-9x+9)$.
D. $(x+3)(x^2+3x+9)$.
::key A
$x^3+27=x^3+3^3=(x+3)(x^2-3x+9)$. A sai dấu hạng tử giữa, B có bốn hạng tử, C tính hạng tử giữa sai.

::mc
Biểu thức $8x^3-y^3$ bằng
A. $(2x-y)^3$.
B. $(2x-y)(4x^2+2xy+y^2)$.
C. $(2x+y)(4x^2-2xy+y^2)$.
D. $(2x-y)(2x^2+2xy+y^2)$.
::key B
$8x^3-y^3=(2x)^3-y^3=(2x-y)(4x^2+2xy+y^2)$. A là lập phương của một hiệu, C là tổng hai lập phương, D quên bình phương hệ số $2$.

::tf
Cho $(x+1)^3$ và $(x-1)^3$.
a) $(x+1)^3=x^3+1$.
b) $(x-1)^3=x^3-3x^2+3x-1$.
c) $(x+1)^3-(x-1)^3=6x^2$.
d) Tại $x=1$, $(x+1)^3-(x-1)^3$ bằng $8$.
::key S Đ S Đ
a) Sai: thiếu $3x^2+3x$. b) Đúng: dấu xen kẽ. c) Sai: hiệu bằng $6x^2+2$. d) Đúng: $2^3-0^3=8$ và $6+2=8$.

::sa
Tính nhẩm $11^3$.
::key 1331
$11^3=(10+1)^3=1000+300+30+1=1331$.

::sa
Cho $a-b=1$ và $ab=6$. Tính $a^3-b^3$.
::key 19
$a^3-b^3=(a-b)^3+3ab(a-b)=1+18=19$.
:::
