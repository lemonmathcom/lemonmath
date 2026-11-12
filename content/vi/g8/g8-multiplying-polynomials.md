---
title: Phép nhân đa thức. Phép chia đa thức cho đơn thức
description: Nhân đơn thức với đa thức, nhân hai đa thức, chia đơn thức cho đơn thức và chia đa thức cho đơn thức, rồi áp dụng vào bài toán thực tế.
minutes: 35
---

:::goals
- Nhân đơn thức với đa thức và nhân hai đa thức bằng tính chất phân phối.
- Chia đơn thức cho đơn thức và chia đa thức cho đơn thức.
- Rút gọn và tính giá trị các biểu thức có phép nhân đa thức.
- Dùng phép nhân đa thức để tính diện tích, thể tích và các đại lượng trong bài toán thực tế.
:::

Giả sử một mảnh đất hình chữ nhật có chiều rộng $x$ m và chiều dài $(x+6)$ m. Chủ đất mở rộng mảnh đất: chiều dài tăng thêm $4$ m và chiều rộng tăng thêm $3$ m. Diện tích mới là $(x+10)(x+3)$ (m²).

Diện tích tăng thêm là bao nhiêu mét vuông? Muốn biết, ta phải **nhân hai đa thức** $(x+10)$ và $(x+3)$ rồi trừ đi diện tích cũ. Bài này dạy ta cách nhân, và cả cách chia, các đa thức.

## Nhân đơn thức với đa thức

### Khám phá: diện tích một hình chữ nhật ghép

Một hình chữ nhật có chiều rộng $3$ và chiều dài $(x+4)$. Ta cắt nó thành hai hình chữ nhật nhỏ: một hình có chiều dài $x$, một hình có chiều dài $4$, cùng chiều rộng $3$. Diện tích cả hình bằng tổng diện tích hai hình nhỏ:
$$3(x+4)=3\cdot x+3\cdot4=3x+12.$$
Đây chính là tính chất phân phối của phép nhân đối với phép cộng. Ta dùng nó cho cả đơn thức và đa thức.

:::theorem Nhân đơn thức với đa thức
Muốn nhân một đơn thức với một đa thức, ta nhân đơn thức đó với từng hạng tử của đa thức rồi cộng các tích với nhau:
$$A(B+C-D)=AB+AC-AD.$$
:::

Khi nhân các đơn thức, ta nhân hệ số với hệ số và nhân các lũy thừa cùng cơ số: $x^m\cdot x^n=x^{m+n}$.

## Nhân đa thức với đa thức

Vì sao có quy tắc nhân hai đa thức? Ta coi $(A+B)$ là một khối rồi dùng quy tắc vừa học:
$$(A+B)(C+D)=A(C+D)+B(C+D)=AC+AD+BC+BD.$$

:::theorem Nhân đa thức với đa thức
Muốn nhân một đa thức với một đa thức, ta nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các tích với nhau:
$$(A+B)(C+D)=AC+AD+BC+BD.$$
Sau đó ta thu gọn bằng cách cộng các hạng tử đồng dạng.
:::

Việc nhân và thu gọn như vậy còn gọi là **khai triển** tích. Nếu một đa thức có $m$ hạng tử và đa thức kia có $n$ hạng tử thì trước khi thu gọn ta có $m\cdot n$ tích.

## Chia đơn thức cho đơn thức, chia đa thức cho đơn thức

:::definition Chia hết
Cho hai đơn thức $A$ và $B$ ($B\neq0$). Ta nói $A$ **chia hết** cho $B$ nếu mỗi biến của $B$ đều là biến của $A$ với số mũ không lớn hơn số mũ trong $A$. Khi đó thương $A:B$ là một đơn thức.
:::

Muốn chia đơn thức $A$ cho đơn thức $B$, ta chia hệ số của $A$ cho hệ số của $B$, chia lũy thừa của từng biến trong $A$ cho lũy thừa của cùng biến đó trong $B$ ($x^m:x^n=x^{m-n}$ với $m\ge n$), rồi nhân các kết quả với nhau. Ví dụ
$$12x^3y^2:(4xy)=(12:4)\cdot x^{3-1}\cdot y^{2-1}=3x^2y.$$

:::note Chia đa thức cho đơn thức
Nếu mọi hạng tử của đa thức $A$ đều chia hết cho đơn thức $B$, ta chia từng hạng tử của $A$ cho $B$ rồi cộng các thương với nhau:
$$(A_1+A_2+A_3):B=A_1:B+A_2:B+A_3:B.$$
:::

Quy tắc này đúng vì chia cho $B$ là nhân với $\dfrac1B$, rồi dùng tính chất phân phối. Khi chia, ta luôn hiểu các biến khác $0$.

## Ví dụ

Ta bắt đầu với nhân đơn thức với đa thức.

:::example Nhân đơn thức với đa thức
Thực hiện phép nhân $-3x^2y(x-2y+1)$.

**Lời giải.** Ta nhân $-3x^2y$ với từng hạng tử trong ngoặc:
$$\begin{aligned} -3x^2y(x-2y+1)&=(-3x^2y)\cdot x+(-3x^2y)\cdot(-2y)+(-3x^2y)\cdot1\\ &=-3x^3y+6x^2y^2-3x^2y. \end{aligned}$$
Vậy $-3x^2y(x-2y+1)=-3x^3y+6x^2y^2-3x^2y$.
:::

Tiếp theo ta nhân hai đa thức.

:::example Nhân hai đa thức
Thực hiện các phép nhân:

a) $(x+2)(x^2-3x+5)$.

b) $(2x-y)(x+3y)$.

**Lời giải.** a) Ta có
$$\begin{aligned} (x+2)(x^2-3x+5)&=x\cdot x^2+x\cdot(-3x)+x\cdot5+2\cdot x^2+2\cdot(-3x)+2\cdot5\\ &=x^3-3x^2+5x+2x^2-6x+10\\ &=x^3-x^2-x+10. \end{aligned}$$

b) Ta có
$$\begin{aligned} (2x-y)(x+3y)&=2x\cdot x+2x\cdot3y-y\cdot x-y\cdot3y\\ &=2x^2+6xy-xy-3y^2\\ &=2x^2+5xy-3y^2. \end{aligned}$$

Vậy a) $x^3-x^2-x+10$; b) $2x^2+5xy-3y^2$.
:::

Bây giờ ta chia một đa thức cho một đơn thức.

:::example Chia đa thức cho đơn thức
Thực hiện phép chia $(6x^3y^2-9x^2y^3+3xy^2):(3xy)$.

**Lời giải.** Mỗi hạng tử của đa thức bị chia đều chia hết cho $3xy$. Ta chia từng hạng tử:
$$\begin{aligned} &(6x^3y^2-9x^2y^3+3xy^2):(3xy)\\ &=6x^3y^2:(3xy)-9x^2y^3:(3xy)+3xy^2:(3xy)\\ &=2x^2y-3xy^2+y. \end{aligned}$$
Vậy thương là $2x^2y-3xy^2+y$.

**Nhận xét.** Kiểm tra bằng phép nhân: $3xy(2x^2y-3xy^2+y)=6x^3y^2-9x^2y^3+3xy^2$, đúng với đa thức bị chia.
:::

Kế đến là rút gọn rồi tính giá trị của một biểu thức.

:::example Rút gọn và tính giá trị
Rút gọn biểu thức $(x-2)(x+3)-x(x-1)$ rồi tính giá trị của nó tại $x=5$.

**Lời giải.** Ta khai triển từng tích:
$$\begin{aligned} (x-2)(x+3)-x(x-1)&=(x^2+3x-2x-6)-(x^2-x)\\ &=x^2+x-6-x^2+x\\ &=2x-6. \end{aligned}$$
Tại $x=5$ ta có $2\cdot5-6=4$.

Vậy biểu thức bằng $2x-6$, và giá trị tại $x=5$ là $4$.

**Nhận xét.** Kiểm tra trực tiếp: tại $x=5$, $(5-2)(5+3)-5\cdot4=3\cdot8-20=4$, khớp.
:::

Bây giờ ta trở lại mảnh đất ở đầu bài.

:::example Mở rộng mảnh đất (Vận dụng)
Giả sử một mảnh đất hình chữ nhật có chiều rộng $x$ m và chiều dài $(x+6)$ m. Người ta tăng chiều dài thêm $4$ m và chiều rộng thêm $3$ m. Viết đa thức biểu thị diện tích tăng thêm, rồi tính diện tích tăng thêm khi $x=10$.

**Lời giải.**

*Hiểu đề.* Cần so sánh diện tích mới và diện tích cũ. Cả hai đều là tích của hai đa thức một biến $x$.

*Tìm cách giải.* Viết diện tích cũ $S_1$ và diện tích mới $S_2$, khai triển rồi tính $S_2-S_1$.

*Giải.* Diện tích cũ là $S_1=x(x+6)=x^2+6x$ (m²). Chiều dài mới là $x+6+4=x+10$ và chiều rộng mới là $x+3$, nên diện tích mới là
$$S_2=(x+10)(x+3)=x^2+3x+10x+30=x^2+13x+30\ (\text{m}^2).$$
Diện tích tăng thêm là
$$S_2-S_1=(x^2+13x+30)-(x^2+6x)=7x+30\ (\text{m}^2).$$
Khi $x=10$, diện tích tăng thêm là $7\cdot10+30=100$ (m²).

Vậy diện tích tăng thêm là $7x+30$ (m²), và bằng $100$ m² khi $x=10$.

*Nhìn lại.* Kiểm tra bằng số: khi $x=10$, mảnh đất cũ có $10\cdot16=160$ m², mảnh đất mới có $20\cdot13=260$ m², hiệu là $100$ m², khớp với $7\cdot10+30$.
:::

:::warning Những sai lầm thường gặp
- **Sai dấu khi nhân với số âm.** Sai: $-2x(x-3)=-2x^2-6x$. Lí do sai: $(-2x)\cdot(-3)=+6x$. Đúng: $-2x(x-3)=-2x^2+6x$.
- **Chỉ nhân với một hạng tử.** Sai: $3x(x+2)=3x^2+2$. Lí do sai: phải nhân $3x$ với cả hai hạng tử. Đúng: $3x(x+2)=3x^2+6x$.
- **Bỏ sót các tích chéo.** Sai: $(x+2)(x+3)=x^2+6$. Lí do sai: mới nhân hai hạng tử đầu và hai hạng tử cuối, còn thiếu $x\cdot3$ và $2\cdot x$. Đúng: $(x+2)(x+3)=x^2+3x+2x+6=x^2+5x+6$.
- **Bỏ mất hạng tử khi chia.** Sai: $(4x^3+2x):2x=2x^2$. Lí do sai: $2x:2x=1$, không phải là $0$. Đúng: $(4x^3+2x):2x=2x^2+1$.
:::

**Kết nối.** Phép nhân đa thức dựa trên tính chất phân phối mà bạn đã biết từ lớp 6 và trên phép cộng, trừ đa thức ở bài trước. Khi nhân một số đa thức đặc biệt, ta sẽ được những kết quả rất gọn gọi là hằng đẳng thức, ở các bài sau; còn chia đa thức cho đơn thức là bước đầu để phân tích đa thức thành nhân tử.

## Thuật ngữ

:::terms
- nhân đơn thức với đa thức | multiplying a monomial by a polynomial
- nhân đa thức với đa thức | multiplying two polynomials
- tính chất phân phối | distributive property
- khai triển | expand
- chia hết | divisible
- chia đơn thức cho đơn thức | dividing a monomial by a monomial
- chia đa thức cho đơn thức | dividing a polynomial by a monomial
- thương | quotient
:::

## Tóm tắt

- Nhân đơn thức với đa thức: $A(B+C)=AB+AC$ (nhân với từng hạng tử).
- Nhân đa thức với đa thức: $(A+B)(C+D)=AC+AD+BC+BD$, rồi thu gọn các hạng tử đồng dạng.
- Chia đơn thức cho đơn thức: chia hệ số, chia lũy thừa cùng biến, rồi nhân các kết quả.
- Chia đa thức cho đơn thức: chia từng hạng tử cho đơn thức đó rồi cộng các thương.
- Cẩn thận với dấu âm và đừng bỏ sót hạng tử khi nhân hoặc chia.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Thực hiện phép nhân:

a) $3x^2(2x-5)$.

b) $-2xy(x^2-3y+1)$.

c) $\dfrac12x(4x^2-6x+2)$.

::hint
**Kiến thức:** nhân đơn thức với từng hạng tử của đa thức; $x^m\cdot x^n=x^{m+n}$.

**Gợi ý các bước:**
1. Nhân đơn thức với hạng tử thứ nhất, thứ hai, thứ ba.
2. Chú ý dấu của từng tích.

::solution
a) $3x^2(2x-5)=6x^3-15x^2$.

b) $-2xy(x^2-3y+1)=-2x^3y+6xy^2-2xy$.

c) $\dfrac12x(4x^2-6x+2)=2x^3-3x^2+x$.

Vậy a) $6x^3-15x^2$; b) $-2x^3y+6xy^2-2xy$; c) $2x^3-3x^2+x$.

**Đáp số.** a) $6x^3-15x^2$. b) $-2x^3y+6xy^2-2xy$. c) $2x^3-3x^2+x$.
:::

:::exercise
Thực hiện phép nhân:

a) $(x+4)(x-3)$.

b) $(2x-1)(x^2+x-2)$.

::hint
**Kiến thức:** $(A+B)(C+D)=AC+AD+BC+BD$; thu gọn các hạng tử đồng dạng.

**Gợi ý các bước:**
1. Nhân từng hạng tử của đa thức thứ nhất với từng hạng tử của đa thức thứ hai.
2. Cộng các hạng tử đồng dạng.

::solution
a) $(x+4)(x-3)=x^2-3x+4x-12=x^2+x-12$.

b) $(2x-1)(x^2+x-2)=2x^3+2x^2-4x-x^2-x+2=2x^3+x^2-5x+2$.

Vậy a) $x^2+x-12$; b) $2x^3+x^2-5x+2$.

**Đáp số.** a) $x^2+x-12$. b) $2x^3+x^2-5x+2$.
:::

:::exercise
Chứng minh rằng $(x-2y)(x^2+2xy+4y^2)=x^3-8y^3$.

::hint
**Kiến thức:** khai triển tích rồi thu gọn.

**Gợi ý các bước:**
1. Nhân $x$ rồi nhân $-2y$ với đa thức thứ hai.
2. Cộng các hạng tử đồng dạng, các hạng tử còn lại là kết quả.

::solution
Ta có
$$\begin{aligned} (x-2y)(x^2+2xy+4y^2)&=x^3+2x^2y+4xy^2-2x^2y-4xy^2-8y^3\\ &=x^3-8y^3. \end{aligned}$$
Vậy $(x-2y)(x^2+2xy+4y^2)=x^3-8y^3$.

**Đáp số.** Đẳng thức được chứng minh.
:::

:::exercise
Rút gọn biểu thức $A=(x-1)(x+2)-(x+1)(x-3)$ rồi tính giá trị của $A$ tại $x=2$.

::hint
**Kiến thức:** khai triển từng tích; bỏ ngoặc có dấu $-$ thì đổi dấu mọi hạng tử.

**Gợi ý các bước:**
1. Khai triển $(x-1)(x+2)$ và $(x+1)(x-3)$.
2. Trừ hai kết quả rồi thay $x=2$.

::solution
Ta có $(x-1)(x+2)=x^2+x-2$ và $(x+1)(x-3)=x^2-2x-3$. Do đó
$$A=(x^2+x-2)-(x^2-2x-3)=x^2+x-2-x^2+2x+3=3x+1.$$
Tại $x=2$, $A=3\cdot2+1=7$. (Kiểm tra: $1\cdot4-3\cdot(-1)=7$.)

Vậy $A=3x+1$ và $A=7$ khi $x=2$.

**Đáp số.** $A=3x+1$; $7$.
:::

:::exercise
Thực hiện phép chia:

a) $12x^3y^2:(-4xy)$.

b) $(15x^4y^3-10x^2y^2+5xy):(5xy)$.

c) $(8x^3-4x^2+6x):(2x)$.

::hint
**Kiến thức:** chia hệ số, chia lũy thừa cùng biến ($x^m:x^n=x^{m-n}$); chia đa thức cho đơn thức thì chia từng hạng tử.

**Gợi ý các bước:**
1. Chia hệ số cho hệ số.
2. Chia các lũy thừa cùng biến rồi cộng các thương.

::solution
a) $12x^3y^2:(-4xy)=-3x^2y$.

b) $(15x^4y^3-10x^2y^2+5xy):(5xy)=3x^3y^2-2xy+1$.

c) $(8x^3-4x^2+6x):(2x)=4x^2-2x+3$.

Vậy a) $-3x^2y$; b) $3x^3y^2-2xy+1$; c) $4x^2-2x+3$.

**Đáp số.** a) $-3x^2y$. b) $3x^3y^2-2xy+1$. c) $4x^2-2x+3$.
:::

:::exercise
Một sân hình chữ nhật dài $(x+8)$ m và rộng $(x+5)$ m. Giữa sân có một cái ao hình vuông cạnh $x$ m. Viết đa thức biểu thị diện tích phần sân không có ao, rồi tính khi $x=4$.

::hint
**Kiến thức:** diện tích phần còn lại $=$ diện tích hình chữ nhật $-$ diện tích hình vuông.

**Gợi ý các bước:**
1. Khai triển $(x+8)(x+5)$.
2. Trừ đi $x^2$ rồi thay $x=4$.

::solution
Diện tích cả sân là $(x+8)(x+5)=x^2+13x+40$ (m²). Diện tích ao là $x^2$ (m²). Diện tích phần sân không có ao là
$$x^2+13x+40-x^2=13x+40\ (\text{m}^2).$$
Khi $x=4$, diện tích là $13\cdot4+40=92$ (m²). (Kiểm tra: $12\cdot9-4^2=108-16=92$.)

Vậy diện tích là $13x+40$ (m²), và bằng $92$ m² khi $x=4$.

**Đáp số.** $13x+40$ (m²); $92$ m².
:::

:::exercise
Giả sử một cửa hàng bán mỗi ngày $(2x+5)$ kg gạo với giá $(x+3)$ nghìn đồng một ki-lô-gam. Viết đa thức biểu thị doanh thu một ngày (nghìn đồng), rồi tính khi $x=10$.

::hint
**Kiến thức:** doanh thu $=$ số ki-lô-gam $\times$ giá một ki-lô-gam.

**Gợi ý các bước:**
1. Nhân hai đa thức.
2. Thay $x=10$.

::solution
Doanh thu là $(2x+5)(x+3)=2x^2+6x+5x+15=2x^2+11x+15$ (nghìn đồng).

Khi $x=10$, doanh thu là $2\cdot100+11\cdot10+15=325$ (nghìn đồng). (Kiểm tra: $25\cdot13=325$.)

Vậy doanh thu là $2x^2+11x+15$ nghìn đồng, và bằng $325$ nghìn đồng khi $x=10$.

**Đáp số.** $2x^2+11x+15$; $325$ nghìn đồng.
:::

:::exercise
Nhớ lại bài về hình hộp chữ nhật. Một hình hộp chữ nhật có đáy là hình chữ nhật rộng $x$ cm, dài $(x+2)$ cm và cao $(x+3)$ cm. Viết đa thức biểu thị thể tích, rồi tính khi $x=2$.

::hint
**Kiến thức:** $V=abc$ (chiều dài nhân chiều rộng nhân chiều cao).

**Gợi ý các bước:**
1. Nhân $x(x+2)$ rồi nhân với $(x+3)$.
2. Thay $x=2$.

::solution
Ta có $V=x(x+2)(x+3)=x(x^2+5x+6)=x^3+5x^2+6x\ (\text{cm}^3)$.

Khi $x=2$, $V=8+20+12=40\ (\text{cm}^3)$. (Kiểm tra: $2\cdot4\cdot5=40$.)

Vậy $V=x^3+5x^2+6x\ (\text{cm}^3)$, và bằng $40\ \text{cm}^3$ khi $x=2$.

**Đáp số.** $x^3+5x^2+6x$; $40\ \text{cm}^3$.
:::

:::exercise
Tìm $x$, biết $x(x-4)-(x-2)(x+3)=16$.

::hint
**Kiến thức:** khai triển rồi thu gọn vế trái, sau đó giải phương trình bậc nhất.

**Gợi ý các bước:**
1. Khai triển $x(x-4)$ và $(x-2)(x+3)$.
2. Thu gọn rồi tìm $x$.

::solution
Ta có $x(x-4)=x^2-4x$ và $(x-2)(x+3)=x^2+x-6$. Do đó
$$x^2-4x-x^2-x+6=16,\quad\text{tức là}\quad -5x+6=16.$$
Suy ra $-5x=10$, nên $x=-2$. (Kiểm tra: $(-2)(-6)-(-4)\cdot1=12+4=16$.)

Vậy $x=-2$.

**Đáp số.** $x=-2$.
:::

:::exercise Thử thách
Chứng minh rằng giá trị của biểu thức
$$E=(x-5)(2x+3)-2x(x-4)-x$$
không phụ thuộc vào $x$.

::hint
**Kiến thức:** nếu sau khi thu gọn mọi hạng tử chứa $x$ triệt tiêu thì chỉ còn một số.

**Gợi ý các bước:**
1. Khai triển $(x-5)(2x+3)$ và $2x(x-4)$.
2. Bỏ ngoặc (đổi dấu), rồi nhóm các hạng tử đồng dạng.

::solution
Ta có
$$\begin{aligned} E&=(2x^2+3x-10x-15)-(2x^2-8x)-x\\ &=2x^2-7x-15-2x^2+8x-x\\ &=(2x^2-2x^2)+(-7x+8x-x)-15\\ &=-15. \end{aligned}$$
Vậy $E=-15$ với mọi $x$, nên giá trị của $E$ không phụ thuộc vào $x$.

**Đáp số.** $E=-15$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của phép nhân $(x+3)(x-2)$ là
A. $x^2+x-6$.
B. $x^2+5x-6$.
C. $x^2-6$.
D. $x^2-x-6$.
::key A
$(x+3)(x-2)=x^2-2x+3x-6=x^2+x-6$. A bỏ sót các tích chéo, B cộng sai $-2x+3x$, D sai dấu của hạng tử $x$.

::mc
Kết quả của phép nhân $-2x^2y(3x-y+4)$ là
A. $-6x^3y-2x^2y^2-8x^2y$.
B. $-6x^3y+2x^2y^2-8x^2y$.
C. $-6x^3y+2x^2y^2+4$.
D. $-6x^3y+2x^2y^2+8x^2y$.
::key B
Nhân $-2x^2y$ lần lượt với $3x$, $-y$, $4$ được $-6x^3y$, $+2x^2y^2$, $-8x^2y$. B sai dấu hạng tử thứ hai, C quên nhân hạng tử $4$, D sai dấu hạng tử thứ ba.

::mc
Thương của phép chia $(6x^3y^2-4x^2y):(2xy)$ là
A. $3x^2y-2xy$.
B. $3x^2y-2$.
C. $3x^2y-2x$.
D. $3x^2y+2x$.
::key C
$6x^3y^2:(2xy)=3x^2y$ và $4x^2y:(2xy)=2x$, nên thương là $3x^2y-2x$. A giữ lại $y$ ở hạng tử sau, B chia sai lũy thừa của $x$, D sai dấu.

::mc
Kết quả của phép nhân $(x-1)(x^2+x+1)$ là
A. $x^3+1$.
B. $x^3+x^2-1$.
C. $x^3-x^2-1$.
D. $x^3-1$.
::key D
$(x-1)(x^2+x+1)=x^3+x^2+x-x^2-x-1=x^3-1$. A sai dấu hạng tử tự do, C và B giữ lại hạng tử $\pm x^2$ không triệt tiêu.

::tf
Cho biểu thức $E=(x+2)(x-5)-x(x-3)$.
a) $(x+2)(x-5)=x^2-3x-10$.
b) $x(x-3)=x^2-3$.
c) Sau khi thu gọn, $E=-10$.
d) Giá trị của $E$ tại $x=0$ bằng $0$.
::key Đ S Đ S
a) Đúng: $x^2-5x+2x-10$. b) Sai: $x(x-3)=x^2-3x$. c) Đúng: $x^2-3x-10-x^2+3x=-10$. d) Sai: $E=-10$ với mọi $x$, kể cả $x=0$.

::sa
Tính giá trị của $(x-1)(x+4)$ tại $x=3$.
::key 14
$(3-1)(3+4)=2\cdot7=14$.

::sa
Thực hiện phép chia $(12x^3y^2-6x^2y):(3xy)$ rồi tính giá trị của thương tại $x=2$, $y=1$.
::key 12
Thương là $4x^2y-2x$. Tại $x=2$, $y=1$: $16-4=12$.
:::
