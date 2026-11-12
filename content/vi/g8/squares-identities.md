---
title: Hiệu hai bình phương. Bình phương của một tổng hay một hiệu
description: Học ba hằng đẳng thức (a+b)², (a−b)², a²−b² để khai triển nhanh, tính nhẩm và rút gọn biểu thức, rồi áp dụng vào bài toán thực tế.
minutes: 35
---

:::goals
- Nhớ và chứng minh các hằng đẳng thức $(a+b)^2$, $(a-b)^2$ và $a^2-b^2$.
- Khai triển bình phương của một tổng, một hiệu và tích $(a-b)(a+b)$ nhanh, không cần nhân từng hạng tử.
- Nhận ra dạng hằng đẳng thức để viết biểu thức thành bình phương hoặc thành tích.
- Dùng hằng đẳng thức để tính nhẩm, rút gọn biểu thức và giải bài toán thực tế.
:::

Bạn có tính nhẩm được $51^2$, $99^2$ hay $52\cdot48$ mà không cần bấm máy không? Nếu nhân tay, $51\cdot51$ khá lâu. Nhưng $51=50+1$, và ta sẽ thấy $51^2$ chỉ cần ba phép tính rất đơn giản. Thủ thuật này đến từ các **hằng đẳng thức đáng nhớ**: những đẳng thức đúng với mọi giá trị của chữ, cho kết quả khai triển rất gọn.

Bài này có ba hằng đẳng thức đầu tiên. Chúng dùng nhiều đến mức ta nên thuộc lòng.

## Bình phương của một tổng và một hiệu

### Khám phá: bình phương của $51$

Ta viết $51=50+1$ và nhân hai đa thức như bài trước:
$$(50+1)^2=(50+1)(50+1)=50\cdot50+50\cdot1+1\cdot50+1\cdot1=2500+100+1=2601.$$
Hai tích chéo $50\cdot1$ và $1\cdot50$ bằng nhau, nên cộng lại là $2\cdot50\cdot1=100$. Với hai số bất kì $a$, $b$ cũng vậy.

:::theorem Bình phương của một tổng
Với hai số (hoặc hai biểu thức) $a$ và $b$ bất kì,
$$(a+b)^2=a^2+2ab+b^2.$$
Bình phương của một tổng bằng bình phương số thứ nhất, cộng hai lần tích hai số, cộng bình phương số thứ hai.
:::

Vì sao? Ta có $(a+b)^2=(a+b)(a+b)=a^2+ab+ba+b^2=a^2+2ab+b^2$.

Ta cũng có thể nhìn bằng diện tích: một hình vuông cạnh $a+b$ gồm một hình vuông cạnh $a$ (diện tích $a^2$), một hình vuông cạnh $b$ (diện tích $b^2$) và hai hình chữ nhật $a\times b$ (mỗi hình có diện tích $ab$). Cộng bốn diện tích lại ta được $a^2+2ab+b^2$.

:::theorem Bình phương của một hiệu
Với hai số (hoặc hai biểu thức) $a$ và $b$ bất kì,
$$(a-b)^2=a^2-2ab+b^2.$$
Bình phương của một hiệu bằng bình phương số thứ nhất, trừ hai lần tích hai số, cộng bình phương số thứ hai.
:::

Vì sao? Ta có $(a-b)^2=(a-b)(a-b)=a^2-ab-ba+b^2=a^2-2ab+b^2$. Ta cũng có thể thay $b$ bằng $-b$ trong hằng đẳng thức trước.

**Hiểu sâu hơn.** Hạng tử $b^2$ luôn có dấu $+$ trong cả hai hằng đẳng thức, vì $(-b)^2=b^2$. Chỉ hạng tử giữa $2ab$ đổi dấu theo dấu của phép tính trong ngoặc. Cũng vì thế $(a-b)^2=(b-a)^2$.

## Hiệu hai bình phương

Ta nhân $(a-b)$ với $(a+b)$:
$$(a-b)(a+b)=a^2+ab-ba-b^2=a^2-b^2,$$
vì hai hạng tử $ab$ và $-ba$ triệt tiêu nhau.

:::theorem Hiệu hai bình phương
Với hai số (hoặc hai biểu thức) $a$ và $b$ bất kì,
$$a^2-b^2=(a-b)(a+b).$$
Hiệu hai bình phương bằng tích của hiệu và tổng của hai số đó.
:::

:::note Cách nhớ
- $(a+b)^2$ và $(a-b)^2$ đều có ba hạng tử: $a^2$, $\pm2ab$, $b^2$.
- $a^2-b^2$ chỉ có hai hạng tử, và là tích của hai nhân tử $(a-b)$, $(a+b)$.
:::

Các hằng đẳng thức đúng cho cả đơn thức và đa thức, miễn là ta xem $a$, $b$ là các biểu thức. Chẳng hạn $(2x)^2=4x^2$, không phải $2x^2$.

## Ví dụ

Ta bắt đầu với bình phương của một tổng và một hiệu.

:::example Khai triển bình phương
Khai triển:

a) $(x+4)^2$.

b) $(3x-2y)^2$.

**Lời giải.** a) Với $a=x$, $b=4$:
$$(x+4)^2=x^2+2\cdot x\cdot4+4^2=x^2+8x+16.$$

b) Với $a=3x$, $b=2y$:
$$(3x-2y)^2=(3x)^2-2\cdot3x\cdot2y+(2y)^2=9x^2-12xy+4y^2.$$

Vậy a) $x^2+8x+16$; b) $9x^2-12xy+4y^2$.
:::

Tiếp theo ta dùng hiệu hai bình phương.

:::example Tích của hiệu và tổng
Khai triển:

a) $(x-3)(x+3)$.

b) $(2x+5y)(2x-5y)$.

**Lời giải.** a) Với $a=x$, $b=3$: $(x-3)(x+3)=x^2-3^2=x^2-9$.

b) Với $a=2x$, $b=5y$: $(2x+5y)(2x-5y)=(2x)^2-(5y)^2=4x^2-25y^2$.

Vậy a) $x^2-9$; b) $4x^2-25y^2$.
:::

Bây giờ ta dùng hằng đẳng thức để tính nhẩm.

:::example Tính nhẩm
Tính nhẩm:

a) $51^2$.

b) $99^2$.

c) $52\cdot48$.

**Lời giải.** a) $51^2=(50+1)^2=50^2+2\cdot50\cdot1+1^2=2500+100+1=2601$.

b) $99^2=(100-1)^2=100^2-2\cdot100\cdot1+1^2=10\,000-200+1=9801$.

c) $52\cdot48=(50+2)(50-2)=50^2-2^2=2500-4=2496$.

Vậy a) $2601$; b) $9801$; c) $2496$.
:::

Cũng có thể đọc các hằng đẳng thức theo chiều ngược lại.

:::example Viết thành bình phương hoặc thành tích
Viết các biểu thức sau thành bình phương của một tổng (hiệu) hoặc thành tích:

a) $x^2+10x+25$.

b) $4x^2-12x+9$.

c) $9x^2-16$.

**Lời giải.** a) Ta có $x^2+10x+25=x^2+2\cdot x\cdot5+5^2=(x+5)^2$.

b) Ta có $4x^2-12x+9=(2x)^2-2\cdot2x\cdot3+3^2=(2x-3)^2$.

c) Ta có $9x^2-16=(3x)^2-4^2=(3x-4)(3x+4)$.

Vậy a) $(x+5)^2$; b) $(2x-3)^2$; c) $(3x-4)(3x+4)$.
:::

Tiếp đến là rút gọn rồi tính giá trị.

:::example Rút gọn biểu thức
Rút gọn $(x+3)^2-(x-2)(x+2)$ rồi tính giá trị tại $x=1$.

**Lời giải.** Ta dùng hai hằng đẳng thức:
$$\begin{aligned} (x+3)^2-(x-2)(x+2)&=(x^2+6x+9)-(x^2-4)\\ &=x^2+6x+9-x^2+4\\ &=6x+13. \end{aligned}$$
Tại $x=1$, giá trị là $6\cdot1+13=19$.

Vậy biểu thức bằng $6x+13$, và bằng $19$ khi $x=1$.

**Nhận xét.** Kiểm tra trực tiếp: $(1+3)^2-(1-2)(1+2)=16-(-3)=19$, khớp.
:::

Cuối cùng là một bài toán thực tế, đổi hình dạng một sân vuông.

:::example Đổi hình dạng sân (Vận dụng)
Giả sử một sân hình vuông có cạnh $x$ m. Người ta đổi thành sân hình chữ nhật bằng cách tăng một cạnh thêm $5$ m và giảm cạnh kia đi $5$ m. Diện tích sân thay đổi thế nào? Tính khi $x=40$.

**Lời giải.**

*Hiểu đề.* Sân cũ là hình vuông cạnh $x$. Sân mới là hình chữ nhật có hai cạnh $(x+5)$ và $(x-5)$ (với $x>5$).

*Tìm cách giải.* Tính diện tích sân mới bằng hằng đẳng thức rồi so sánh với diện tích sân cũ $x^2$.

*Giải.* Diện tích sân cũ là $x^2$ (m²). Diện tích sân mới là
$$(x+5)(x-5)=x^2-25\ (\text{m}^2).$$
Hiệu hai diện tích là $x^2-(x^2-25)=25$ (m²).

Vậy diện tích sân giảm đi $25$ m², với mọi giá trị $x>5$. Khi $x=40$, sân cũ rộng $1600$ m² và sân mới rộng $45\cdot35=1575$ m².

*Nhìn lại.* Diện tích giảm đúng $25=5^2$ m², không phụ thuộc $x$. Đó là vì $(x+5)(x-5)=x^2-5^2$. Kiểm tra: $1600-1575=25$.
:::

:::warning Những sai lầm thường gặp
- **Quên hạng tử $2ab$.** Sai: $(x+3)^2=x^2+9$. Lí do sai: bỏ mất hai tích chéo $3x+3x$. Đúng: $(x+3)^2=x^2+6x+9$.
- **Sai dấu của hạng tử cuối.** Sai: $(x-4)^2=x^2-8x-16$. Lí do sai: $(-4)^2=+16$. Đúng: $(x-4)^2=x^2-8x+16$.
- **Quên bình phương hệ số.** Sai: $(2x)^2=2x^2$. Lí do sai: $(2x)^2=2^2\cdot x^2$. Đúng: $(2x)^2=4x^2$.
- **Nhầm hiệu hai bình phương với bình phương của một hiệu.** Sai: $x^2-9=(x-3)^2$. Lí do sai: $(x-3)^2=x^2-6x+9$. Đúng: $x^2-9=(x-3)(x+3)$.
:::

**Kết nối.** Các hằng đẳng thức là kết quả đặc biệt của phép nhân đa thức ở bài trước. Chúng giúp ta khai triển rất nhanh, và khi đọc theo chiều ngược lại, chúng là công cụ chính của phân tích đa thức thành nhân tử ở các bài sau.

## Thuật ngữ

:::terms
- bình phương | square
- hằng đẳng thức | identity
- bình phương của một tổng | square of a sum
- bình phương của một hiệu | square of a difference
- hiệu hai bình phương | difference of two squares
- khai triển | expand
- tích | product
- tính nhẩm | mental calculation
:::

## Tóm tắt

- $(a+b)^2=a^2+2ab+b^2$.
- $(a-b)^2=a^2-2ab+b^2$.
- $a^2-b^2=(a-b)(a+b)$.
- Các hằng đẳng thức đúng cho cả số, đơn thức và đa thức; chú ý $(2x)^2=4x^2$.
- Có thể dùng chúng để tính nhẩm, rút gọn biểu thức, và đọc theo chiều ngược lại để viết thành bình phương hoặc thành tích.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Khai triển:

a) $(x+7)^2$.

b) $(x-6)^2$.

c) $(2x+1)^2$.

::hint
**Kiến thức:** $(a+b)^2=a^2+2ab+b^2$ và $(a-b)^2=a^2-2ab+b^2$.

**Gợi ý các bước:**
1. Xác định $a$ và $b$.
2. Viết ba hạng tử $a^2$, $\pm2ab$, $b^2$.

::solution
a) $(x+7)^2=x^2+14x+49$.

b) $(x-6)^2=x^2-12x+36$.

c) $(2x+1)^2=4x^2+4x+1$.

Vậy a) $x^2+14x+49$; b) $x^2-12x+36$; c) $4x^2+4x+1$.

**Đáp số.** a) $x^2+14x+49$. b) $x^2-12x+36$. c) $4x^2+4x+1$.
:::

:::exercise
Khai triển:

a) $(3x-2y)^2$.

b) $\left(\dfrac12x+3\right)^2$.

c) $(5x^2-y)^2$.

::hint
**Kiến thức:** các hằng đẳng thức đúng khi $a$, $b$ là các đơn thức.

**Gợi ý các bước:**
1. Xác định $a$ và $b$ (chú ý bình phương cả hệ số và biến).
2. Tính $a^2$, $2ab$, $b^2$.

::solution
a) $(3x-2y)^2=9x^2-12xy+4y^2$.

b) $\left(\dfrac12x+3\right)^2=\dfrac14x^2+3x+9$.

c) $(5x^2-y)^2=25x^4-10x^2y+y^2$.

Vậy a) $9x^2-12xy+4y^2$; b) $\dfrac14x^2+3x+9$; c) $25x^4-10x^2y+y^2$.

**Đáp số.** a) $9x^2-12xy+4y^2$. b) $\dfrac14x^2+3x+9$. c) $25x^4-10x^2y+y^2$.
:::

:::exercise
Khai triển:

a) $(x-8)(x+8)$.

b) $(4x+3y)(4x-3y)$.

c) $(x^2+1)(x^2-1)$.

::hint
**Kiến thức:** $(a-b)(a+b)=a^2-b^2$.

**Gợi ý các bước:**
1. Nhận ra dạng tích của hiệu và tổng.
2. Bình phương số thứ nhất rồi trừ bình phương số thứ hai.

::solution
a) $(x-8)(x+8)=x^2-64$.

b) $(4x+3y)(4x-3y)=16x^2-9y^2$.

c) $(x^2+1)(x^2-1)=x^4-1$.

Vậy a) $x^2-64$; b) $16x^2-9y^2$; c) $x^4-1$.

**Đáp số.** a) $x^2-64$. b) $16x^2-9y^2$. c) $x^4-1$.
:::

:::exercise
Tính nhẩm bằng hằng đẳng thức:

a) $103^2$.

b) $98^2$.

c) $61\cdot59$.

::hint
**Kiến thức:** viết số đã cho thành tổng hoặc hiệu của một số tròn chục (tròn trăm) với một số nhỏ.

**Gợi ý các bước:**
1. Viết $103=100+3$, $98=100-2$, $61\cdot59=(60+1)(60-1)$.
2. Áp dụng hằng đẳng thức tương ứng.

::solution
a) $103^2=(100+3)^2=10\,000+600+9=10\,609$.

b) $98^2=(100-2)^2=10\,000-400+4=9604$.

c) $61\cdot59=(60+1)(60-1)=60^2-1=3600-1=3599$.

Vậy a) $10\,609$; b) $9604$; c) $3599$.

**Đáp số.** a) $10\,609$. b) $9604$. c) $3599$.
:::

:::exercise
Điền vào chỗ trống để được hằng đẳng thức đúng:

a) $x^2+10x+\ldots=(x+\ldots)^2$.

b) $9x^2-\ldots+4=(3x-2)^2$.

c) $\ldots-36=(x-6)(x+6)$.

::hint
**Kiến thức:** so sánh với $a^2\pm2ab+b^2$ và $a^2-b^2$.

**Gợi ý các bước:**
1. Tìm $a$ và $b$ từ các hạng tử đã cho.
2. Tính hạng tử còn thiếu.

::solution
a) Ta có $a=x$ và $2ab=10x$ nên $b=5$. Do đó $x^2+10x+25=(x+5)^2$.

b) Ta có $a=3x$, $b=2$ nên hạng tử giữa là $2\cdot3x\cdot2=12x$. Do đó $9x^2-12x+4=(3x-2)^2$.

c) Ta có $(x-6)(x+6)=x^2-36$, nên chỗ trống là $x^2$.

Vậy a) $25$ và $5$; b) $12x$; c) $x^2$.

**Đáp số.** a) $25$; $5$. b) $12x$. c) $x^2$.
:::

:::exercise
Rút gọn $B=(x+4)^2-(x-4)^2$ rồi tính giá trị của $B$ tại $x=3$.

::hint
**Kiến thức:** khai triển hai bình phương rồi trừ; bỏ ngoặc có dấu $-$ thì đổi dấu mọi hạng tử.

**Gợi ý các bước:**
1. Khai triển $(x+4)^2$ và $(x-4)^2$.
2. Trừ hai kết quả rồi thay $x=3$.

::solution
Ta có $(x+4)^2=x^2+8x+16$ và $(x-4)^2=x^2-8x+16$. Do đó
$$B=(x^2+8x+16)-(x^2-8x+16)=16x.$$
Tại $x=3$, $B=16\cdot3=48$. (Kiểm tra: $7^2-(-1)^2=49-1=48$.)

Vậy $B=16x$ và $B=48$ khi $x=3$.

**Đáp số.** $B=16x$; $48$.
:::

:::exercise
Một mảnh vườn hình vuông có cạnh $x$ m. Người ta làm xung quanh vườn một lối đi rộng $1$ m (ngoài vườn). Viết đa thức biểu thị diện tích lối đi, rồi tính khi $x=10$.

::hint
**Kiến thức:** diện tích lối đi $=$ diện tích hình vuông lớn $-$ diện tích mảnh vườn.

**Gợi ý các bước:**
1. Tìm cạnh hình vuông lớn gồm vườn và lối đi.
2. Dùng hằng đẳng thức rồi thay $x=10$.

::solution
Hình vuông lớn có cạnh $x+1+1=x+2$ (m). Diện tích lối đi là
$$(x+2)^2-x^2=x^2+4x+4-x^2=4x+4\ (\text{m}^2).$$
Khi $x=10$, diện tích là $4\cdot10+4=44$ (m²). (Kiểm tra: $12^2-10^2=144-100=44$.)

Vậy diện tích lối đi là $4x+4$ (m²), và bằng $44$ m² khi $x=10$.

**Đáp số.** $4x+4$ (m²); $44$ m².
:::

:::exercise
Giả sử một mảnh đất hình chữ nhật có chu vi $20$ m và diện tích $21$ m². Gọi hai cạnh là $a$ và $b$ (m). Tính $a^2+b^2$, tức là tổng diện tích hai hình vuông dựng trên hai cạnh.

::hint
**Kiến thức:** $a^2+b^2=(a+b)^2-2ab$.

**Gợi ý các bước:**
1. Tìm $a+b$ từ chu vi và $ab$ từ diện tích.
2. Thay vào công thức.

::solution
Chu vi là $2(a+b)=20$ nên $a+b=10$. Diện tích là $ab=21$. Do đó
$$a^2+b^2=(a+b)^2-2ab=10^2-2\cdot21=100-42=58.$$
(Kiểm tra: hai cạnh là $3$ m và $7$ m, và $3^2+7^2=9+49=58$.)

Vậy $a^2+b^2=58\ (\text{m}^2)$.

**Đáp số.** $58\ \text{m}^2$.
:::

:::exercise
Nhớ lại bài về hình hộp chữ nhật. Một hình hộp chữ nhật có đáy là hình vuông cạnh $(2x+1)$ cm và chiều cao $5$ cm. Viết đa thức biểu thị thể tích, rồi tính khi $x=2$.

::hint
**Kiến thức:** thể tích bằng diện tích đáy nhân chiều cao; diện tích hình vuông là bình phương cạnh.

**Gợi ý các bước:**
1. Khai triển $(2x+1)^2$.
2. Nhân với $5$ rồi thay $x=2$.

::solution
Diện tích đáy là $(2x+1)^2=4x^2+4x+1\ (\text{cm}^2)$. Thể tích là
$$V=5(4x^2+4x+1)=20x^2+20x+5\ (\text{cm}^3).$$
Khi $x=2$, $V=80+40+5=125\ (\text{cm}^3)$. (Kiểm tra: $5\cdot5^2=125$.)

Vậy $V=20x^2+20x+5\ (\text{cm}^3)$, và bằng $125\ \text{cm}^3$ khi $x=2$.

**Đáp số.** $20x^2+20x+5$; $125\ \text{cm}^3$.
:::

:::exercise Thử thách
Chứng minh rằng hiệu các bình phương của hai số lẻ liên tiếp luôn chia hết cho $8$.

::hint
**Kiến thức:** hai số lẻ liên tiếp có dạng $2k-1$ và $2k+1$ với $k$ là số nguyên.

**Gợi ý các bước:**
1. Viết hiệu $(2k+1)^2-(2k-1)^2$.
2. Dùng hằng đẳng thức rồi đặt $8$ làm thừa số.

::solution
Gọi hai số lẻ liên tiếp là $2k-1$ và $2k+1$. Ta có
$$(2k+1)^2-(2k-1)^2=(4k^2+4k+1)-(4k^2-4k+1)=8k.$$
Vì $8k$ là bội của $8$ nên hiệu các bình phương của hai số lẻ liên tiếp chia hết cho $8$.

**Đáp số.** Hiệu bằng $8k$, chia hết cho $8$.
:::

## Kiểm tra mini

:::quiz
::mc
Khai triển $(x+5)^2$ được
A. $x^2+10x+25$.
B. $x^2+25$.
C. $x^2+5x+25$.
D. $x^2-10x+25$.
::key A
$(x+5)^2=x^2+2\cdot x\cdot5+5^2=x^2+10x+25$. A quên hạng tử giữa, C tính $2ab$ sai, D sai dấu hạng tử giữa.

::mc
Khai triển $(3x-2)^2$ được
A. $9x^2-4$.
B. $9x^2-12x+4$.
C. $9x^2+12x+4$.
D. $9x^2-6x+4$.
::key B
$(3x-2)^2=(3x)^2-2\cdot3x\cdot2+2^2=9x^2-12x+4$. A là hiệu hai bình phương, D tính $2ab$ sai, C sai dấu hạng tử giữa.

::mc
Khai triển $(7x-y)(7x+y)$ được
A. $49x^2-14xy+y^2$.
B. $7x^2-y^2$.
C. $49x^2-y^2$.
D. $49x^2+y^2$.
::key C
$(7x-y)(7x+y)=(7x)^2-y^2=49x^2-y^2$. B quên bình phương hệ số $7$, A là bình phương của một hiệu, D sai dấu.

::mc
Biểu thức $x^2-12x+36$ bằng
A. $(x+6)^2$.
B. $(x-6)(x+6)$.
C. $(x-12)^2$.
D. $(x-6)^2$.
::key D
$x^2-12x+36=x^2-2\cdot x\cdot6+6^2=(x-6)^2$. A sai dấu, B là $x^2-36$, C có hạng tử giữa là $-24x$.

::tf
Cho biểu thức $(x-3)^2$.
a) $(x-3)^2=x^2-9$.
b) $(x-3)^2=x^2-6x+9$.
c) $(x-3)^2=(3-x)^2$.
d) $(x-3)^2=(x-3)(x+3)$.
::key S Đ Đ S
a) Sai: thiếu hạng tử $-6x$. b) Đúng: $x^2-2\cdot x\cdot3+3^2$. c) Đúng: $(3-x)^2=9-6x+x^2$. d) Sai: $(x-3)(x+3)=x^2-9$.

::sa
Tính nhẩm $51\cdot49$.
::key 2499
$51\cdot49=(50+1)(50-1)=50^2-1=2499$.

::sa
Cho $a+b=7$ và $ab=12$. Tính $a^2+b^2$.
::key 25
$a^2+b^2=(a+b)^2-2ab=49-24=25$.
:::
