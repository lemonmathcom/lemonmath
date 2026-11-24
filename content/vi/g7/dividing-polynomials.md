---
title: Phép chia đa thức một biến
description: Chia đơn thức cho đơn thức, đa thức cho đơn thức và đa thức cho đa thức theo từng bước, phép chia hết và phép chia có dư, kiểm tra bằng phép nhân.
minutes: 30
---

:::goals
- Chia đơn thức cho đơn thức và chia đa thức cho đơn thức bằng quy tắc về luỹ thừa.
- Thực hiện phép chia đa thức một biến cho đa thức một biến theo từng bước, đã sắp xếp theo luỹ thừa giảm dần.
- Phân biệt phép chia hết và phép chia có dư; viết được $A=B\cdot Q+R$ và kiểm tra bằng phép nhân.
- Vận dụng phép chia đa thức vào bài toán diện tích và thể tích.
:::

Một sân chơi hình chữ nhật có diện tích $(x^2+7x+10)$ m² và chiều rộng $(x+2)$ m. Chiều dài của sân là bao nhiêu? Với một giá trị cụ thể, việc này dễ: khi $x=8$ thì diện tích là $130$ m², chiều rộng là $10$ m, nên chiều dài là $130:10=13$ m. Nhưng nếu $x$ là một số bất kì thì sao? Ta muốn một biểu thức chiều dài dùng được cho mọi $x$.

Muốn thế, ta phải chia đa thức này cho đa thức kia, giống như ta chia $130$ cho $10$ để tìm chiều dài. Ở bài trước bạn đã học nhân đa thức, và phép chia chính là phép tính ngược lại của phép nhân. Điều thú vị là cách đặt tính chia đa thức rất giống cách chia số tự nhiên mà bạn đã học từ tiểu học.

## Chia đơn thức cho đơn thức

**Vì sao $x^5:x^2=x^3$?** Vì $x^5=x\cdot x\cdot x\cdot x\cdot x$ và $x^2=x\cdot x$, nên khi rút gọn đi $2$ thừa số $x$, còn lại $5-2=3$ thừa số $x$. Tổng quát, $x^m:x^n=x^{m-n}$ khi $m\geq n$. Hệ số thì chia cho nhau như số bình thường.

:::definition Chia đơn thức cho đơn thức
Muốn chia đơn thức $ax^m$ cho đơn thức $bx^n$ ($b\neq0$, $m\geq n$), ta chia hệ số cho hệ số và chia luỹ thừa của biến cho luỹ thừa của biến:
$$ax^m:bx^n=\dfrac ab\,x^{m-n}.$$
:::

:::example Chia đơn thức cho đơn thức
Thực hiện các phép chia sau:

a) $12x^5:(3x^2)$.

b) $(-8x^4):(2x)$.

c) $15x^3:(-5x^3)$.

**Lời giải.** a) Ta chia hệ số $12:3=4$ và chia luỹ thừa $x^5:x^2=x^3$. Do đó $12x^5:(3x^2)=4x^3$.

b) Ta có $(-8):2=-4$ và $x^4:x=x^3$. Do đó $(-8x^4):(2x)=-4x^3$.

c) Ta có $15:(-5)=-3$ và $x^3:x^3=x^0=1$. Do đó $15x^3:(-5x^3)=-3$.

Vậy a) $4x^3$; b) $-4x^3$; c) $-3$.
:::

## Chia đa thức cho đơn thức

Khi số chia là một đơn thức, ta chia từng hạng tử của đa thức cho đơn thức đó, vì $(A+B):C=A:C+B:C$ (giống như $(10+6):2=5+3$).

:::definition Chia đa thức cho đơn thức
Muốn chia đa thức $A$ cho đơn thức $B$ ($B\neq0$), ta chia mỗi hạng tử của $A$ cho $B$ rồi cộng các thương lại với nhau.
:::

:::example Chia đa thức cho đơn thức
Thực hiện các phép chia sau:

a) $(6x^3-9x^2+3x):(3x)$.

b) $(8x^4-12x^3+4x^2):(4x^2)$.

**Lời giải.** a) Ta chia từng hạng tử cho $3x$:
$$(6x^3-9x^2+3x):(3x)=6x^3:3x-9x^2:3x+3x:3x=2x^2-3x+1.$$

b) Ta chia từng hạng tử cho $4x^2$:
$$(8x^4-12x^3+4x^2):(4x^2)=2x^2-3x+1.$$
Ở đây $8x^4:4x^2=2x^2$, $-12x^3:4x^2=-3x$ và $4x^2:4x^2=1$.

Vậy a) $2x^2-3x+1$; b) $2x^2-3x+1$.
:::

## Chia đa thức cho đa thức

### Khám phá: chia đa thức giống chia số

Ta thử với $x=10$: đa thức $x^2+5x+6$ có giá trị $156$ và đa thức $x+2$ có giá trị $12$. Ta biết $156:12=13$. Ta xem có thể chia đa thức theo cùng cách không.

Lấy hạng tử đầu của số bị chia chia cho hạng tử đầu của số chia: $x^2:x=x$. Nhân $x$ với số chia: $x(x+2)=x^2+2x$. Trừ đi: $(x^2+5x+6)-(x^2+2x)=3x+6$. Lặp lại: $3x:x=3$, nhân $3(x+2)=3x+6$, trừ đi được $0$. Thương là $x+3$, và khi $x=10$ thì $x+3=13$, đúng bằng $156:12$. Cách làm này chính là cách chia số, chỉ có điều ta chia theo từng "hàng" là luỹ thừa của $x$.

:::definition Phép chia đa thức
Cho hai đa thức $A$ (số bị chia) và $B$ (số chia) với $B\neq0$. Khi chia $A$ cho $B$, ta tìm được đa thức $Q$ (**thương**) và đa thức $R$ (**số dư**) sao cho
$$A=B\cdot Q+R,$$
trong đó $R=0$ hoặc bậc của $R$ nhỏ hơn bậc của $B$. Nếu $R=0$, ta nói $A$ **chia hết** cho $B$ và phép chia là phép chia hết; nếu $R\neq0$, đó là phép chia có dư.
:::

:::theorem Các bước chia đa thức cho đa thức
1. Sắp xếp cả số bị chia và số chia theo luỹ thừa giảm dần của biến. Hạng tử nào thiếu thì viết thêm với hệ số $0$ (chẳng hạn $x^3-8=x^3+0x^2+0x-8$).
2. Chia hạng tử bậc cao nhất của số bị chia cho hạng tử bậc cao nhất của số chia, được hạng tử đầu của thương.
3. Nhân hạng tử vừa tìm với cả số chia, rồi lấy số bị chia trừ đi tích đó (đổi dấu mọi hạng tử của tích khi trừ).
4. Lặp lại bước 2 và 3 với đa thức vừa nhận được, cho đến khi nhận được $0$ hoặc đa thức có bậc nhỏ hơn bậc của số chia. Đa thức cuối cùng đó là số dư.
:::

Bây giờ ta trả lời câu hỏi ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Chiều dài của sân chơi
Một sân chơi hình chữ nhật có diện tích $(x^2+7x+10)$ m² và chiều rộng $(x+2)$ m. Tìm biểu thức chiều dài của sân, rồi tính chiều dài khi $x=8$.

**Lời giải.**

*Hiểu đề.* Diện tích bằng chiều dài nhân chiều rộng, nên chiều dài bằng diện tích chia cho chiều rộng. Cần tính $(x^2+7x+10):(x+2)$.

*Tìm cách giải.* Cả hai đa thức đã sắp xếp theo luỹ thừa giảm dần và không thiếu hạng tử, nên ta chia theo các bước ở trên.

*Giải.* Bước 1: $x^2:x=x$. Nhân $x$ với $x+2$ được $x^2+2x$. Lấy $(x^2+7x+10)-(x^2+2x)=5x+10$.

Bước 2: $5x:x=5$. Nhân $5$ với $x+2$ được $5x+10$. Lấy $(5x+10)-(5x+10)=0$.

Số dư bằng $0$ nên phép chia hết và $(x^2+7x+10):(x+2)=x+5$. Khi $x=8$, chiều dài là $8+5=13$ (m).

Vậy chiều dài của sân là $x+5$ (m), và bằng $13$ m khi $x=8$.

*Nhìn lại.* Kiểm tra bằng phép nhân: $(x+2)(x+5)=x^2+5x+2x+10=x^2+7x+10$, đúng bằng diện tích. Với $x=8$: $10\cdot13=130$, khớp với con số $130$ m² ban đầu. Nếu thay đổi dữ kiện thì sao? Chẳng hạn nếu chiều rộng là $x+5$ thì chiều dài cũng là $x+2$, vì phép nhân có tính giao hoán.
:::

:::example Chia hết, bậc ba cho bậc nhất
Thực hiện phép chia $(x^3-6x^2+11x-6):(x-1)$.

**Lời giải.** Cả hai đa thức đã được sắp xếp theo luỹ thừa giảm dần và không thiếu hạng tử.

Bước 1: $x^3:x=x^2$. Nhân $x^2(x-1)=x^3-x^2$. Lấy $(x^3-6x^2)-(x^3-x^2)=-5x^2$, hạ hạng tử $11x$ xuống được $-5x^2+11x$.

Bước 2: $-5x^2:x=-5x$. Nhân $-5x(x-1)=-5x^2+5x$. Lấy $(-5x^2+11x)-(-5x^2+5x)=6x$, hạ hạng tử $-6$ xuống được $6x-6$.

Bước 3: $6x:x=6$. Nhân $6(x-1)=6x-6$. Lấy $(6x-6)-(6x-6)=0$.

Số dư bằng $0$, nên phép chia hết.

Vậy $(x^3-6x^2+11x-6):(x-1)=x^2-5x+6$.

Nhận xét: vì $x^2-5x+6=(x-2)(x-3)$ nên đa thức ban đầu bằng $(x-1)(x-2)(x-3)$, và các số $1$, $2$, $3$ đều là nghiệm của nó.
:::

:::example Phép chia có dư
Thực hiện phép chia $(2x^3-5x^2+6x-3):(2x-1)$.

**Lời giải.** Hai đa thức đã sắp xếp theo luỹ thừa giảm dần và không thiếu hạng tử.

Bước 1: $2x^3:2x=x^2$. Nhân $x^2(2x-1)=2x^3-x^2$. Lấy $(2x^3-5x^2)-(2x^3-x^2)=-4x^2$, hạ $6x$ xuống được $-4x^2+6x$.

Bước 2: $-4x^2:2x=-2x$. Nhân $-2x(2x-1)=-4x^2+2x$. Lấy $(-4x^2+6x)-(-4x^2+2x)=4x$, hạ $-3$ xuống được $4x-3$.

Bước 3: $4x:2x=2$. Nhân $2(2x-1)=4x-2$. Lấy $(4x-3)-(4x-2)=-1$.

Đa thức $-1$ có bậc $0$, nhỏ hơn bậc của số chia ($1$), nên ta dừng lại. Thương là $x^2-2x+2$ và số dư là $-1$.

Vậy $2x^3-5x^2+6x-3=(2x-1)(x^2-2x+2)+(-1)$.

Kiểm tra: $(2x-1)(x^2-2x+2)=2x^3-4x^2+4x-x^2+2x-2=2x^3-5x^2+6x-2$, và $2x^3-5x^2+6x-2+(-1)=2x^3-5x^2+6x-3$, đúng.
:::

:::example Số chia thiếu hạng tử
Thực hiện phép chia $(x^3-8):(x-2)$.

**Lời giải.** Số bị chia thiếu các hạng tử $x^2$ và $x$, nên ta viết $x^3-8=x^3+0x^2+0x-8$.

Bước 1: $x^3:x=x^2$. Nhân $x^2(x-2)=x^3-2x^2$. Lấy $(x^3+0x^2)-(x^3-2x^2)=2x^2$, hạ $0x$ xuống được $2x^2+0x$.

Bước 2: $2x^2:x=2x$. Nhân $2x(x-2)=2x^2-4x$. Lấy $(2x^2+0x)-(2x^2-4x)=4x$, hạ $-8$ xuống được $4x-8$.

Bước 3: $4x:x=4$. Nhân $4(x-2)=4x-8$. Lấy $(4x-8)-(4x-8)=0$.

Vậy $(x^3-8):(x-2)=x^2+2x+4$.

Kiểm tra: ở bài trước, ta đã có $(x-2)(x^2+2x+4)=x^3-8$.
:::

:::warning Những sai lầm thường gặp
- **Chia từng hạng tử cho hạng tử đầu của số chia.** Sai: $(x^2+7x+10):(x+2)=x^2:x+7x:x+10:2=x+7+5$. Lí do sai: quy tắc chia từng hạng tử chỉ dùng khi số chia là đơn thức, còn $x+2$ có hai hạng tử. Đúng: đặt phép chia từng bước, được $x+5$.
- **Quên đổi dấu khi trừ.** Sai: $(x^3-6x^2)-(x^3-x^2)=-6x^2-x^2=-7x^2$. Lí do sai: dấu trừ trước ngoặc đổi dấu cả hai hạng tử, nên $-(-x^2)=+x^2$. Đúng: $-6x^2+x^2=-5x^2$.
- **Bỏ qua hạng tử thiếu.** Sai: chia $x^3-8$ cho $x-2$ mà viết nguyên $x^3-8$, rồi hạ $-8$ xuống ngay sau $x^3$. Lí do sai: cột của $x^2$ và $x$ bị mất, các số không thẳng hàng. Đúng: viết $x^3+0x^2+0x-8$.
- **Dừng quá sớm hoặc quá muộn.** Sai: khi chia cho $2x-1$ (bậc $1$), dừng ở $4x-3$ vì "không còn hạng tử để hạ". Lí do sai: $4x-3$ có bậc $1$, không nhỏ hơn bậc của số chia, nên còn chia tiếp được. Đúng: chia tiếp tới số dư $-1$ (bậc $0$).
:::

:::tip Kiểm tra bằng phép nhân
Sau mỗi phép chia, hãy nhân thương với số chia rồi cộng số dư. Kết quả phải đúng bằng số bị chia. Đây là cách kiểm tra chắc chắn nhất, và cũng là lúc bạn dùng lại phép nhân đa thức ở bài trước.
:::

**Kết nối.** Phép chia đa thức dựa trên hai điều bạn đã học: nhân đa thức (để kiểm tra) và trừ đa thức (ở mỗi bước). Nó cũng nối với việc tìm nghiệm: khi $A$ chia hết cho $x-a$ thì $a$ là nghiệm của $A$, và thương cho biết các nghiệm còn lại. Còn sân chơi ở đầu bài: chiều dài là $x+5$, và bạn có thể kiểm tra bằng phép nhân.

## Thuật ngữ

:::terms
- phép chia hết | exact division
- phép chia có dư | division with remainder
- số bị chia | dividend
- số chia | divisor
- thương | quotient
- số dư | remainder
- chia đơn thức cho đơn thức | dividing a monomial by a monomial
- chia đa thức cho đơn thức | dividing a polynomial by a monomial
- sắp xếp theo luỹ thừa giảm dần | arranging in descending powers
- hạng tử thiếu | missing term
:::

## Tóm tắt

- $ax^m:bx^n=\dfrac ab\,x^{m-n}$ ($m\geq n$, $b\neq0$): chia hệ số, trừ số mũ.
- Chia đa thức cho đơn thức: chia từng hạng tử cho đơn thức rồi cộng các thương.
- Chia đa thức cho đa thức: sắp xếp theo luỹ thừa giảm dần (thêm hạng tử $0$ nếu thiếu), rồi lặp lại: chia hạng tử đầu, nhân với số chia, trừ đi.
- $A=B\cdot Q+R$ với $R=0$ hoặc bậc $R<$ bậc $B$; $R=0$ là phép chia hết.
- Luôn kiểm tra bằng phép nhân: $B\cdot Q+R=A$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Thực hiện các phép chia sau:

a) $20x^6:(5x^2)$.

b) $(-18x^4):(6x)$.

c) $15x^3:(-5x^3)$.

::hint
**Kiến thức:** $ax^m:bx^n=\dfrac ab\,x^{m-n}$.

**Gợi ý các bước:**
1. Chia hệ số cho hệ số.
2. Lấy số mũ của số bị chia trừ số mũ của số chia.

::solution
a) Ta có $20:5=4$ và $x^6:x^2=x^4$, nên $20x^6:(5x^2)=4x^4$.

b) Ta có $(-18):6=-3$ và $x^4:x=x^3$, nên $(-18x^4):(6x)=-3x^3$.

c) Ta có $15:(-5)=-3$ và $x^3:x^3=1$, nên $15x^3:(-5x^3)=-3$.

Vậy a) $4x^4$; b) $-3x^3$; c) $-3$.

**Đáp số.** a) $4x^4$; b) $-3x^3$; c) $-3$.
:::

:::exercise
Thực hiện các phép chia sau:

a) $(15x^3-5x^2+10x):(-5x)$.

b) $(4x^4-8x^2):(-2x^2)$.

::hint
**Kiến thức:** chia từng hạng tử cho đơn thức, chú ý dấu của hệ số.

**Gợi ý các bước:**
1. a) Chia $15x^3$, $-5x^2$ và $10x$ lần lượt cho $-5x$.
2. b) Chia $4x^4$ và $-8x^2$ cho $-2x^2$.

::solution
Để chia một đa thức cho một đơn thức, ta chia từng hạng tử của đa thức cho đơn thức đó rồi cộng các kết quả với nhau.

a) Ta có
$$15x^3:(-5x)=-3x^2,\qquad (-5x^2):(-5x)=x,\qquad 10x:(-5x)=-2.$$

Do đó
$$(15x^3-5x^2+10x):(-5x)=-3x^2+x-2.$$

b) Ta có
$$4x^4:(-2x^2)=-2x^2,\qquad (-8x^2):(-2x^2)=4.$$

Do đó
$$(4x^4-8x^2):(-2x^2)=-2x^2+4.$$

Vậy a) kết quả là $-3x^2+x-2$; b) kết quả là $-2x^2+4$.

**Đáp số.** a) $-3x^2+x-2$; b) $-2x^2+4$.
:::

:::exercise
Thực hiện các phép chia sau:

a) $(x^2+6x+8):(x+2)$.

b) $(x^2-x-2):(x-2)$.

c) $(x^2-5x+6):(x-2)$.

::hint
**Kiến thức:** chia hạng tử đầu cho hạng tử đầu, nhân với số chia, rồi trừ.

**Gợi ý các bước:**
1. Bước đầu của cả ba câu đều là $x^2:x=x$.
2. Sau khi trừ, chia hạng tử bậc nhất của kết quả cho $x$.

::solution
a) Bước 1: $x^2:x=x$; $x(x+2)=x^2+2x$; $(x^2+6x+8)-(x^2+2x)=4x+8$. Bước 2: $4x:x=4$; $4(x+2)=4x+8$; hiệu bằng $0$. Vậy $(x^2+6x+8):(x+2)=x+4$.

b) Bước 1: $x^2:x=x$; $x(x-2)=x^2-2x$; $(x^2-x-2)-(x^2-2x)=x-2$. Bước 2: $x:x=1$; $1\cdot(x-2)=x-2$; hiệu bằng $0$. Vậy $(x^2-x-2):(x-2)=x+1$.

c) Bước 1: $x^2:x=x$; $x(x-2)=x^2-2x$; $(x^2-5x+6)-(x^2-2x)=-3x+6$. Bước 2: $-3x:x=-3$; $-3(x-2)=-3x+6$; hiệu bằng $0$. Vậy $(x^2-5x+6):(x-2)=x-3$.

**Đáp số.** a) $x+4$; b) $x+1$; c) $x-3$.
:::

:::exercise
Thực hiện phép chia $(2x^2-7x+3):(2x-1)$.

::hint
**Kiến thức:** hạng tử đầu của số chia là $2x$, không phải $x$.

**Gợi ý các bước:**
1. Chia $2x^2$ cho $2x$.
2. Nhân kết quả với $2x-1$ rồi trừ, được $-6x+3$.

::solution
Cả hai đa thức đã được sắp xếp theo luỹ thừa giảm dần của biến. Ta thực hiện phép chia đa thức một biến theo từng bước.

Bước 1. Chia hạng tử bậc cao nhất của số bị chia cho hạng tử bậc cao nhất của số chia: $2x^2:2x=x$. Nhân $x$ với số chia: $x(2x-1)=2x^2-x$. Lấy số bị chia trừ đi tích vừa tìm:
$$(2x^2-7x+3)-(2x^2-x)=-6x+3.$$

Bước 2. Chia hạng tử bậc cao nhất của dư $-6x+3$ cho $2x$: $-6x:2x=-3$. Nhân $-3$ với số chia: $-3(2x-1)=-6x+3$. Lấy dư trừ đi tích vừa tìm:
$$(-6x+3)-(-6x+3)=0.$$

Số dư bằng $0$ nên phép chia là phép chia hết, thương là $x-3$.

Vậy $(2x^2-7x+3):(2x-1)=x-3$.

**Đáp số.** $x-3$.
:::

:::exercise
Thực hiện phép chia $(x^3+2x^2-x-2):(x+2)$.

::hint
**Kiến thức:** sau bước đầu, kết quả của phép trừ có thể bị mất một hạng tử.

**Gợi ý các bước:**
1. Chia $x^3$ cho $x$, nhân với $x+2$ rồi trừ; hạng tử $2x^2$ triệt tiêu.
2. Hạ hạng tử tiếp theo xuống và tiếp tục.

::solution
Bước 1: $x^3:x=x^2$; $x^2(x+2)=x^3+2x^2$; $(x^3+2x^2)-(x^3+2x^2)=0$, hạ $-x$ xuống được $-x$, rồi hạ $-2$ xuống được $-x-2$.

Bước 2: $-x:x=-1$; $-1\cdot(x+2)=-x-2$; $(-x-2)-(-x-2)=0$.

Số dư bằng $0$. Vậy $(x^3+2x^2-x-2):(x+2)=x^2-1$.

Kiểm tra: $(x+2)(x^2-1)=x^3-x+2x^2-2=x^3+2x^2-x-2$, đúng.

**Đáp số.** $x^2-1$.
:::

:::exercise
Thực hiện các phép chia sau và viết kết quả dưới dạng $A=B\cdot Q+R$:

a) $(x^2+3x+5):(x+1)$.

b) $(x^3+x^2-4x+5):(x-1)$.

::hint
**Kiến thức:** phép chia có dư dừng khi bậc của số dư nhỏ hơn bậc của số chia.

**Gợi ý các bước:**
1. a) Hai bước chia, số dư là một số.
2. b) Ba bước chia; chú ý dấu khi trừ.

::solution
a) Bước 1: $x^2:x=x$; $x(x+1)=x^2+x$; $(x^2+3x)-(x^2+x)=2x$, hạ $5$ xuống được $2x+5$. Bước 2: $2x:x=2$; $2(x+1)=2x+2$; $(2x+5)-(2x+2)=3$. Số dư là $3$, có bậc $0$ nhỏ hơn bậc $1$ của số chia. Vậy $x^2+3x+5=(x+1)(x+2)+3$.

b) Bước 1: $x^3:x=x^2$; $x^2(x-1)=x^3-x^2$; $(x^3+x^2)-(x^3-x^2)=2x^2$, hạ $-4x$ xuống được $2x^2-4x$. Bước 2: $2x^2:x=2x$; $2x(x-1)=2x^2-2x$; $(2x^2-4x)-(2x^2-2x)=-2x$, hạ $5$ xuống được $-2x+5$. Bước 3: $-2x:x=-2$; $-2(x-1)=-2x+2$; $(-2x+5)-(-2x+2)=3$. Vậy $x^3+x^2-4x+5=(x-1)(x^2+2x-2)+3$.

**Đáp số.** a) thương $x+2$, dư $3$; b) thương $x^2+2x-2$, dư $3$.
:::

:::exercise
Thực hiện phép chia $(x^4-16):(x-2)$.

::hint
**Kiến thức:** viết thêm các hạng tử thiếu: $x^4-16=x^4+0x^3+0x^2+0x-16$.

**Gợi ý các bước:**
1. Mỗi bước, hạng tử của thương tăng thêm một bậc theo thứ tự giảm dần.
2. Có $4$ bước chia.

::solution
Viết $x^4-16=x^4+0x^3+0x^2+0x-16$.

Bước 1: $x^4:x=x^3$; $x^3(x-2)=x^4-2x^3$; hiệu là $2x^3$, hạ $0x^2$ được $2x^3+0x^2$. Bước 2: $2x^3:x=2x^2$; $2x^2(x-2)=2x^3-4x^2$; hiệu là $4x^2$, hạ $0x$ được $4x^2+0x$. Bước 3: $4x^2:x=4x$; $4x(x-2)=4x^2-8x$; hiệu là $8x$, hạ $-16$ được $8x-16$. Bước 4: $8x:x=8$; $8(x-2)=8x-16$; hiệu bằng $0$.

Vậy $(x^4-16):(x-2)=x^3+2x^2+4x+8$.

Kiểm tra: $(x-2)(x^3+2x^2+4x+8)=x^4+2x^3+4x^2+8x-2x^3-4x^2-8x-16=x^4-16$, đúng.

**Đáp số.** $x^3+2x^2+4x+8$.
:::

:::exercise
Một hộp hình hộp chữ nhật có thể tích $(x^3+6x^2+8x)$ cm³ và chiều cao $x$ cm. Đáy hộp là hình chữ nhật có chiều rộng $(x+2)$ cm.

a) Tìm biểu thức diện tích đáy.

b) Tìm biểu thức chiều dài đáy.

c) Tính chiều dài đáy khi $x=2$.

::hint
**Kiến thức:** thể tích bằng diện tích đáy nhân chiều cao; diện tích đáy bằng chiều dài nhân chiều rộng.

**Gợi ý các bước:**
1. a) Chia thể tích cho chiều cao $x$.
2. b) Chia diện tích đáy cho $x+2$.

::solution
a) Diện tích đáy bằng thể tích chia cho chiều cao: $(x^3+6x^2+8x):x=x^2+6x+8$ (cm²).

b) Chiều dài đáy bằng diện tích đáy chia cho chiều rộng $x+2$. Bước 1: $x^2:x=x$; $x(x+2)=x^2+2x$; $(x^2+6x+8)-(x^2+2x)=4x+8$. Bước 2: $4x:x=4$; $4(x+2)=4x+8$; hiệu bằng $0$. Vậy chiều dài đáy là $x+4$ (cm).

c) Khi $x=2$, chiều dài đáy là $2+4=6$ (cm). Kiểm tra: thể tích là $8+24+16=48$ (cm³) và $4\cdot6\cdot2=48$.

Vậy a) $x^2+6x+8$ (cm²); b) $x+4$ (cm); c) $6$ cm.

**Đáp số.** a) $x^2+6x+8$; b) $x+4$; c) $6$ cm.
:::

:::exercise
(Ôn lại phép nhân và cộng đa thức.) Thực hiện phép chia $(x^3-2x^2+x+4):(x-2)$, rồi kiểm tra kết quả bằng phép nhân.

::hint
**Kiến thức:** $A=B\cdot Q+R$.

**Gợi ý các bước:**
1. Chia xong bước đầu, kết quả của phép trừ chỉ còn $x+4$.
2. Nhân $(x-2)$ với thương rồi cộng số dư.

::solution
Bước 1: $x^3:x=x^2$; $x^2(x-2)=x^3-2x^2$; $(x^3-2x^2)-(x^3-2x^2)=0$, hạ $x$ và $4$ xuống được $x+4$ (hạng tử bậc nhất của thương bằng $0$). Bước 2: $x:x=1$; $1\cdot(x-2)=x-2$; $(x+4)-(x-2)=6$. Số dư là $6$, có bậc $0$ nhỏ hơn bậc của số chia.

Thương là $x^2+1$ và số dư là $6$. Kiểm tra: $(x-2)(x^2+1)=x^3+x-2x^2-2=x^3-2x^2+x-2$ và $x^3-2x^2+x-2+6=x^3-2x^2+x+4$, đúng.

Vậy $x^3-2x^2+x+4=(x-2)(x^2+1)+6$.

**Đáp số.** Thương $x^2+1$, dư $6$.
:::

:::exercise Thử thách
a) Thực hiện phép chia $(2x^4-3x^3-3x^2+6x-2):(x^2-2)$.

b) Số $1$ có phải là nghiệm của thương tìm được không?

::hint
**Kiến thức:** số chia $x^2-2=x^2+0x-2$ có bậc $2$; ta dừng khi số dư có bậc nhỏ hơn $2$.

**Gợi ý các bước:**
1. a) Hạng tử đầu của thương là $2x^4:x^2=2x^2$.
2. b) Thay $x=1$ vào thương.

::solution
a) Viết số chia là $x^2+0x-2$.

Bước 1: $2x^4:x^2=2x^2$; $2x^2(x^2-2)=2x^4-4x^2$; $(2x^4-3x^3-3x^2)-(2x^4-4x^2)=-3x^3+x^2$, hạ $6x$ xuống được $-3x^3+x^2+6x$. Bước 2: $-3x^3:x^2=-3x$; $-3x(x^2-2)=-3x^3+6x$; $(-3x^3+x^2+6x)-(-3x^3+6x)=x^2$, hạ $-2$ xuống được $x^2-2$. Bước 3: $x^2:x^2=1$; $1\cdot(x^2-2)=x^2-2$; hiệu bằng $0$.

Vậy $(2x^4-3x^3-3x^2+6x-2):(x^2-2)=2x^2-3x+1$.

b) Gọi $T(x)=2x^2-3x+1$. Ta có $T(1)=2-3+1=0$, nên $x=1$ là nghiệm của thương.

Vậy a) thương là $2x^2-3x+1$; b) có, $1$ là nghiệm.

**Đáp số.** a) $2x^2-3x+1$; b) có.
:::

## Kiểm tra mini

:::quiz
::mc TH
Thương của phép chia $12x^6:(4x^2)$ là
A. $3x^3$.
B. $3x^4$.
C. $8x^4$.
D. $3x^8$.
::key B
Chia hệ số $12:4=3$ và trừ số mũ $6-2=4$. A lấy $6:2=3$ cho số mũ, C trừ hai hệ số, D cộng hai số mũ.

::mc TH
Kết quả của $(9x^3-6x^2):(3x)$ là
A. $3x^2-2$.
B. $6x^2-3x$.
C. $3x^2-2x$.
D. $3x^2+2x$.
::key C
$9x^3:3x=3x^2$ và $-6x^2:3x=-2x$. A bỏ sót $x$ ở hạng tử thứ hai, B trừ các hệ số thay vì chia, D sai dấu.

::mc VD
Thương của $(x^2+x-6):(x-2)$ là
A. $x+1$.
B. $x-3$.
C. $x+4$.
D. $x+3$.
::key D
$(x-2)(x+3)=x^2+x-6$. B nhầm dấu, C và A lấy sai hạng tử thứ hai khi trừ.

::mc VD
Số dư trong phép chia $(x^2+3x+5):(x+1)$ là
A. $3$.
B. $5$.
C. $1$.
D. $2$.
::key A
$x^2+3x+5=(x+1)(x+2)+3$. A là hệ số tự do của thương, B là hạng tử tự do của số bị chia, C là hạng tử tự do của số chia.

::tf VD VD TH TH
Cho $A=x^3+3x^2+3x+1$ và $B=x+1$. Xét tính đúng sai của các mệnh đề sau:
a) Thương của phép chia $A$ cho $B$ là $x^2+2x+1$.
b) Số dư của phép chia này là $1$.
c) $A=(x+1)(x^2+2x+1)$.
d) $x=-1$ là nghiệm của $A$.
::key Đ S Đ Đ
a) Đúng. b) Sai: số dư bằng $0$ vì $(x+1)(x^2+2x+1)=x^3+3x^2+3x+1$. c) Đúng. d) Đúng: $-1+3-3+1=0$.

::sa VD
Chia $x^3-8$ cho $x-2$ rồi tính giá trị của thương tại $x=1$.
::key 7
Thương là $x^2+2x+4$; tại $x=1$ bằng $1+2+4=7$.

::sa VD
Tìm số dư trong phép chia $(x^3-3x^2+3x+5):(x-1)$.
::key 6
$x^3-3x^2+3x+5=(x-1)(x^2-2x+1)+6$.
:::
