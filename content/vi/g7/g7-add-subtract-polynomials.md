---
title: Phép cộng và phép trừ đa thức một biến. Phép nhân đa thức một biến
description: Cộng, trừ đa thức một biến bằng cách gộp hạng tử đồng dạng; nhân đơn thức, nhân đa thức bằng tính chất phân phối; vận dụng vào bài toán diện tích.
minutes: 30
---

:::goals
- Cộng và trừ hai đa thức một biến bằng cách bỏ ngoặc, gộp các hạng tử đồng dạng và sắp xếp kết quả.
- Nhân đơn thức với đơn thức, đơn thức với đa thức bằng quy tắc về luỹ thừa và tính chất phân phối.
- Nhân hai đa thức một biến và rút gọn kết quả.
- Vận dụng các phép tính đa thức vào bài toán diện tích, thể tích và chi phí.
:::

Vườn nhà bác Hùng hình chữ nhật, rộng $10$ m và dài $15$ m, nên diện tích là $150$ m². Bác muốn mở rộng vườn: thêm $2$ m vào chiều rộng và thêm $2$ m vào chiều dài. Diện tích tăng thêm bao nhiêu mét vuông? Vườn nhà bạn có kích thước khác thì sao, có cách tính chung cho mọi vườn không?

Câu trả lời cho kích thước cụ thể thì dễ: $12\cdot17-150=54$ (m²). Nhưng nếu muốn một công thức dùng được cho mọi chiều rộng, ta cần viết diện tích bằng một chữ, rồi cộng, trừ, nhân những biểu thức có chữ. Đó là nội dung của bài này, và nó cũng là bước đầu tiên của việc "làm toán với chữ" như làm với số.

## Phép cộng và phép trừ đa thức

### Khám phá: gộp những thứ cùng loại

Cho hai đa thức $A=2x+3$ và $B=x+4$. Cộng chúng lại, ta gộp các số hạng cùng loại: $2x+x=3x$ và $3+4=7$, nên $A+B=3x+7$. Trừ chúng: $A-B=(2x+3)-(x+4)=2x+3-x-4=x-1$. Ta kiểm tra bằng số: thay $x=10$, thì $A=23$ và $B=14$. Ta có $A+B=37=3\cdot10+7$ và $A-B=9=10-1$. Kết quả khớp, đó là cách kiểm tra nhanh mà bạn có thể dùng mỗi khi tính với đa thức.

:::theorem Quy tắc cộng, trừ đa thức
- Muốn **cộng** hai đa thức, ta bỏ dấu ngoặc, rồi gộp các hạng tử đồng dạng (cùng luỹ thừa của biến) bằng cách cộng các hệ số.
- Muốn **trừ** đa thức $A$ cho đa thức $B$, ta viết $A-(B)$, bỏ ngoặc bằng cách **đổi dấu mọi hạng tử của $B$**, rồi gộp các hạng tử đồng dạng.
:::

**Vì sao?** Phép trừ là cộng với số đối: $A-B=A+(-B)$, và số đối của đa thức $B$ là đa thức có mọi hạng tử đổi dấu. Chẳng hạn $-(x^2-3x)=-x^2+3x$. Còn việc gộp $2x+x=3x$ chính là tính chất phân phối: $2x+x=(2+1)x$.

:::example Cộng và trừ hai đa thức
Cho $A=3x^3-2x^2+x-5$ và $B=x^3+4x^2-3x+2$. Tính $A+B$ và $A-B$.

**Lời giải.** Ta có
$$A+B=(3x^3-2x^2+x-5)+(x^3+4x^2-3x+2).$$
Bỏ ngoặc và nhóm các hạng tử đồng dạng, ta được
$$A+B=(3x^3+x^3)+(-2x^2+4x^2)+(x-3x)+(-5+2)=4x^3+2x^2-2x-3.$$
Với phép trừ, ta đổi dấu mọi hạng tử của $B$:
$$A-B=3x^3-2x^2+x-5-x^3-4x^2+3x-2=(3x^3-x^3)+(-2x^2-4x^2)+(x+3x)+(-5-2).$$
Suy ra $A-B=2x^3-6x^2+4x-7$.

Vậy $A+B=4x^3+2x^2-2x-3$ và $A-B=2x^3-6x^2+4x-7$.
:::

Khi các đa thức có nhiều hạng tử, ta có thể đặt các hạng tử đồng dạng thẳng cột, và chỗ nào thiếu hạng tử thì điền $0$.

:::example Cộng, trừ theo cột
Cho $P(x)=x^3-2x+1$ và $Q(x)=2x^3+x^2-x-4$. Tính $P(x)+Q(x)$ và $P(x)-Q(x)$.

**Lời giải.** Đa thức $P(x)$ thiếu hạng tử $x^2$ nên ta viết $P(x)=x^3+0x^2-2x+1$ rồi đặt thẳng cột:
$$\begin{array}{rrrrr} & x^3 & +0x^2 & -2x & +1\\ +\ & 2x^3 & +x^2 & -x & -4\\ \hline & 3x^3 & +x^2 & -3x & -3\end{array}$$
Suy ra $P(x)+Q(x)=3x^3+x^2-3x-3$.

Với phép trừ, ta đổi dấu mọi hạng tử của $Q(x)$ rồi gộp:
$$P(x)-Q(x)=x^3-2x+1-2x^3-x^2+x+4=-x^3-x^2-x+5.$$

Vậy $P(x)+Q(x)=3x^3+x^2-3x-3$ và $P(x)-Q(x)=-x^3-x^2-x+5$.
:::

## Phép nhân đa thức

Khi nhân, hai việc cần nhớ: cách nhân các luỹ thừa của cùng một biến, và tính chất phân phối của phép nhân đối với phép cộng.

**Vì sao $x^2\cdot x^3=x^5$?** Vì $x^2=x\cdot x$ và $x^3=x\cdot x\cdot x$, nên $x^2\cdot x^3$ có đúng $2+3=5$ thừa số $x$. Tổng quát, $x^m\cdot x^n=x^{m+n}$: ta **cộng** số mũ, còn hệ số thì **nhân** với nhau.

### Khám phá: nhân hai nhị thức bằng số

Ta thử với $(x+2)(x+3)$ khi $x=10$. Tích là $12\cdot13=156$. Mặt khác, nếu khai triển $x^2+5x+6$ rồi thay $x=10$ thì được $100+50+6=156$, cũng bằng nhau. Bạn có thể thấy $5x$ đến từ $2x+3x$ và $6$ đến từ $2\cdot3$: mỗi hạng tử của thừa số thứ nhất đều được nhân với mỗi hạng tử của thừa số thứ hai.

:::theorem Quy tắc nhân đa thức
- **Đơn thức với đơn thức:** nhân các hệ số và nhân các luỹ thừa của biến, $ax^m\cdot bx^n=ab\,x^{m+n}$.
- **Đơn thức với đa thức:** nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích, $A(B+C)=AB+AC$.
- **Đa thức với đa thức:** nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các tích, sau đó gộp các hạng tử đồng dạng.
:::

:::example Nhân đơn thức
Thực hiện các phép nhân sau:

a) $(-3x^2)\cdot(2x^3)$.

b) $4x\cdot(x^2-3x+5)$.

**Lời giải.** a) Ta nhân các hệ số và cộng các số mũ: $(-3)\cdot2=-6$ và $x^2\cdot x^3=x^5$. Do đó $(-3x^2)\cdot(2x^3)=-6x^5$.

b) Theo tính chất phân phối, ta nhân $4x$ với từng hạng tử trong ngoặc:
$$4x\cdot(x^2-3x+5)=4x\cdot x^2+4x\cdot(-3x)+4x\cdot5=4x^3-12x^2+20x.$$

Vậy a) $-6x^5$; b) $4x^3-12x^2+20x$.
:::

:::example Nhân hai đa thức
Tính $(x+3)(x^2-2x+4)$.

**Lời giải.** Ta nhân từng hạng tử của $x+3$ với từng hạng tử của $x^2-2x+4$:
$$(x+3)(x^2-2x+4)=x\cdot x^2+x\cdot(-2x)+x\cdot4+3\cdot x^2+3\cdot(-2x)+3\cdot4.$$
Suy ra $(x+3)(x^2-2x+4)=x^3-2x^2+4x+3x^2-6x+12$. Gộp các hạng tử đồng dạng, ta được $x^3+(-2x^2+3x^2)+(4x-6x)+12=x^3+x^2-2x+12$.

Kiểm tra bằng $x=1$: vế trái bằng $4\cdot3=12$ và vế phải bằng $1+1-2+12=12$.

Vậy $(x+3)(x^2-2x+4)=x^3+x^2-2x+12$.
:::

Bây giờ ta trả lời câu hỏi về mảnh vườn, đi đủ bốn bước. Hình dưới đây vẽ vườn ban đầu (hình chữ nhật nhỏ) và phần được mở rộng.

:::diagram Mảnh vườn $x(x+5)$ được mở rộng thêm $2$ m mỗi chiều
alt: Hình chữ nhật nhỏ rộng x và dài x cộng 5; hình chữ nhật lớn hơn có thêm một dải ở phía trên, rộng 2, và một dải bên phải, rộng 2
point A 0,0 below-left
point E 11,0 below-right
point F 11,6 above-right
point G 0,6 above-left
point B 9,0 ""
point C 9,4 ""
point D 0,4 ""
polygon A B C D
polygon A E F G
label 4.5,2 "x(x + 5)"
label 4.5,5 "2(x + 5)"
label 10,3 "2(x + 2)"
label 4.5,-0.7 "x + 5"
label 10,-0.7 "2"
label -0.8,2 "x"
label -0.8,5 "2"
:::

:::example Mở rộng mảnh vườn
Mảnh vườn hình chữ nhật có chiều rộng $x$ (m), chiều dài hơn chiều rộng $5$ m. Người ta mở rộng vườn bằng cách tăng cả chiều dài và chiều rộng thêm $2$ m. Hỏi diện tích vườn tăng thêm bao nhiêu mét vuông? Tính khi $x=10$.

**Lời giải.**

*Hiểu đề.* Vườn cũ có hai cạnh $x$ và $x+5$. Vườn mới có hai cạnh $x+2$ và $x+7$. Cần tìm hiệu hai diện tích.

*Tìm cách giải.* Viết diện tích vườn cũ và vườn mới thành hai đa thức, nhân các thừa số, rồi lấy đa thức lớn trừ đa thức nhỏ.

*Giải.* Diện tích vườn cũ là $x(x+5)=x^2+5x$ (m²). Diện tích vườn mới là
$$(x+2)(x+7)=x^2+7x+2x+14=x^2+9x+14\ \text{(m}^2).$$
Diện tích tăng thêm là
$$(x^2+9x+14)-(x^2+5x)=x^2+9x+14-x^2-5x=4x+14\ \text{(m}^2).$$
Khi $x=10$, diện tích tăng thêm là $4\cdot10+14=54$ (m²).

Vậy diện tích tăng thêm là $4x+14$ (m²); với vườn rộng $10$ m thì tăng thêm $54$ m².

*Nhìn lại.* Kết quả $54$ m² khớp với phép tính trực tiếp $12\cdot17-10\cdot15=204-150=54$. Có cách khác không? Có: nhìn hình, phần thêm gồm dải phía trên (dài $x+5$, rộng $2$) và dải bên phải (rộng $2$, cao $x+2$), nên diện tích là $2(x+5)+2(x+2)=4x+14$. Hai cách cho cùng kết quả. Kết quả này còn cho thấy diện tích tăng thêm tăng đều $4$ m² mỗi khi chiều rộng vườn tăng $1$ m.
:::

:::example Rút gọn biểu thức
Rút gọn biểu thức $(x+2)(x-3)-x(x-4)$ rồi tính giá trị tại $x=5$.

**Lời giải.** Ta khai triển từng tích. Ta có $(x+2)(x-3)=x^2-3x+2x-6=x^2-x-6$ và $x(x-4)=x^2-4x$. Do đó
$$(x+2)(x-3)-x(x-4)=x^2-x-6-x^2+4x=3x-6.$$
Thay $x=5$ vào biểu thức đã rút gọn, ta được $3\cdot5-6=9$.

Vậy biểu thức bằng $3x-6$, và bằng $9$ khi $x=5$.
:::

:::warning Những sai lầm thường gặp
- **Quên đổi dấu khi trừ đa thức.** Sai: $(2x^2+3x)-(x^2-3x)=2x^2+3x-x^2-3x=x^2$. Lí do sai: dấu trừ trước ngoặc đổi dấu cả hai hạng tử bên trong, nên $-(-3x)=+3x$. Đúng: $2x^2+3x-x^2+3x=x^2+6x$.
- **Gộp các hạng tử không đồng dạng.** Sai: $3x^2+2x=5x^3$. Lí do sai: $x^2$ và $x$ khác loại, và khi cộng thì không cộng số mũ. Đúng: giữ nguyên $3x^2+2x$.
- **Cộng số mũ khi cộng, nhân số mũ khi nhân.** Sai: $2x^2\cdot3x^3=6x^6$. Lí do sai: khi nhân ta cộng số mũ, $2+3=5$. Đúng: $6x^5$.
- **Nhân thiếu hạng tử.** Sai: $4x(x^2-3x+5)=4x^3-12x^2+5$. Lí do sai: hạng tử $5$ cũng phải nhân với $4x$. Đúng: $4x^3-12x^2+20x$.
:::

**Kết nối.** Cộng, trừ đa thức là việc gộp hạng tử đồng dạng mà bạn đã làm với số hữu tỉ, còn nhân đa thức là tính chất phân phối mở rộng. Hai phép tính này sẽ được dùng ngay trong bài sau, khi ta làm phép chia đa thức và dùng phép nhân để kiểm tra. Về mảnh vườn của bác Hùng: diện tích tăng thêm $4x+14$, và $54$ m² ứng với $x=10$.

## Thuật ngữ

:::terms
- cộng đa thức | adding polynomials
- trừ đa thức | subtracting polynomials
- hạng tử đồng dạng | like terms
- thu gọn đa thức | simplifying a polynomial
- đa thức đối | opposite (negative) of a polynomial
- nhân đơn thức | multiplying monomials
- tính chất phân phối | distributive property
- nhân đa thức | multiplying polynomials
- luỹ thừa | power
- số mũ | exponent
:::

## Tóm tắt

- Cộng đa thức: bỏ ngoặc, gộp các hạng tử đồng dạng, cộng các hệ số.
- Trừ đa thức: đổi dấu mọi hạng tử của đa thức bị trừ rồi gộp.
- $x^m\cdot x^n=x^{m+n}$: khi nhân thì nhân hệ số và cộng số mũ.
- $A(B+C)=AB+AC$; nhân hai đa thức thì nhân từng hạng tử với từng hạng tử rồi gộp.
- Có thể kiểm tra kết quả bằng cách thay một giá trị cụ thể của biến, chẳng hạn $x=1$ hoặc $x=10$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho $A=4x^2-3x+7$ và $B=x^2+5x-2$. Tính $A+B$ và $A-B$.

::hint
**Kiến thức:** cộng thì gộp hạng tử đồng dạng; trừ thì đổi dấu mọi hạng tử của $B$.

**Gợi ý các bước:**
1. Gộp $4x^2+x^2$, $-3x+5x$ và $7-2$.
2. Với $A-B$, viết $-x^2-5x+2$ sau khi bỏ ngoặc.

::solution
Để cộng hay trừ hai đa thức, ta bỏ dấu ngoặc rồi nhóm các hạng tử đồng dạng (cùng bậc) với nhau.

Ta có
$$A+B=(4x^2+x^2)+(-3x+5x)+(7-2)=5x^2+2x+5.$$

Ta có
$$\begin{aligned}A-B&=4x^2-3x+7-x^2-5x+2\\&=(4x^2-x^2)+(-3x-5x)+(7+2)\\&=3x^2-8x+9.\end{aligned}$$

Vậy $A+B=5x^2+2x+5$ và $A-B=3x^2-8x+9$.

**Đáp số.** $A+B=5x^2+2x+5$; $A-B=3x^2-8x+9$.
:::

:::exercise
Cho $A=2x^3-x+5$ và $B=-3x^3+x^2+4x-1$. Tính $A+B$ và $A-B$.

::hint
**Kiến thức:** đa thức $A$ thiếu hạng tử $x^2$; có thể viết $A=2x^3+0x^2-x+5$ để đặt thẳng cột.

**Gợi ý các bước:**
1. Gộp theo từng luỹ thừa: $x^3$, $x^2$, $x$ và số hạng tự do.
2. Khi trừ, đổi dấu cả bốn hạng tử của $B$.

::solution
Ta bỏ dấu ngoặc rồi nhóm các hạng tử đồng dạng.

Ta có
$$A+B=(2x^3-3x^3)+x^2+(-x+4x)+(5-1)=-x^3+x^2+3x+4.$$

Khi trừ $B$, ta đổi dấu mọi hạng tử của $B$ (vì có dấu trừ đứng trước dấu ngoặc), nên
$$\begin{aligned}A-B&=2x^3-x+5+3x^3-x^2-4x+1\\&=(2x^3+3x^3)-x^2+(-x-4x)+(5+1)\\&=5x^3-x^2-5x+6.\end{aligned}$$

Vậy $A+B=-x^3+x^2+3x+4$ và $A-B=5x^3-x^2-5x+6$.

**Đáp số.** $A+B=-x^3+x^2+3x+4$; $A-B=5x^3-x^2-5x+6$.
:::

:::exercise
(Ôn lại bài về giá trị của đa thức.) Cho $A=x^2-2x+3$ và $B=2x^2+x-5$.

a) Tính $A-B$.

b) Tính giá trị của $A-B$ tại $x=1$.

::hint
**Kiến thức:** trừ đa thức bằng cách đổi dấu mọi hạng tử của $B$; giá trị tại $x=1$ là tổng các hệ số.

**Gợi ý các bước:**
1. a) Viết $A-B=x^2-2x+3-2x^2-x+5$.
2. b) Thay $x=1$ vào đa thức vừa tìm.

::solution
a) Ta có $A-B=x^2-2x+3-2x^2-x+5=(x^2-2x^2)+(-2x-x)+(3+5)=-x^2-3x+8$.

b) Thay $x=1$, ta được $-1-3+8=4$. Kiểm tra: $A(1)=1-2+3=2$, $B(1)=2+1-5=-2$ và $2-(-2)=4$.

Vậy a) $A-B=-x^2-3x+8$; b) giá trị tại $x=1$ bằng $4$.

**Đáp số.** a) $-x^2-3x+8$; b) $4$.
:::

:::exercise
Tìm đa thức $M$, biết $M+(x^2-3x)=2x^2+x-4$.

::hint
**Kiến thức:** từ $M+C=D$ suy ra $M=D-C$.

**Gợi ý các bước:**
1. Viết $M=(2x^2+x-4)-(x^2-3x)$.
2. Bỏ ngoặc, đổi dấu hai hạng tử trong ngoặc thứ hai rồi gộp.

::solution
Muốn tìm số hạng chưa biết trong một tổng, ta lấy tổng trừ đi số hạng đã biết. Từ $M+(x^2-3x)=2x^2+x-4$ suy ra
$$M=(2x^2+x-4)-(x^2-3x).$$

Bỏ dấu ngoặc (đổi dấu các hạng tử trong ngoặc có dấu trừ đứng trước), ta được
$$\begin{aligned}M&=2x^2+x-4-x^2+3x\\&=(2x^2-x^2)+(x+3x)-4\\&=x^2+4x-4.\end{aligned}$$

Kiểm tra: $(x^2+4x-4)+(x^2-3x)=2x^2+x-4$, đúng với đề bài.

Vậy $M=x^2+4x-4$.

**Đáp số.** $M=x^2+4x-4$.
:::

:::exercise
Thực hiện các phép nhân sau:

a) $(-2x^2)\cdot(3x^4)$.

b) $3x\cdot(2x^2-x+4)$.

::hint
**Kiến thức:** $ax^m\cdot bx^n=ab\,x^{m+n}$ và $A(B+C)=AB+AC$.

**Gợi ý các bước:**
1. a) Nhân hệ số $-2$ với $3$, cộng số mũ $2+4$.
2. b) Nhân $3x$ với từng hạng tử trong ngoặc, đừng bỏ sót hạng tử cuối.

::solution
a) Nhân các hệ số với nhau và nhân các luỹ thừa của $x$ với nhau. Ta có $(-2)\cdot3=-6$ và $x^2\cdot x^4=x^{2+4}=x^6$. Do đó
$$(-2x^2)\cdot(3x^4)=-6x^6.$$

b) Theo tính chất phân phối của phép nhân đối với phép cộng, ta có
$$\begin{aligned}3x\cdot(2x^2-x+4)&=3x\cdot2x^2+3x\cdot(-x)+3x\cdot4\\&=6x^3-3x^2+12x.\end{aligned}$$

Vậy a) tích là $-6x^6$; b) tích là $6x^3-3x^2+12x$.

**Đáp số.** a) $-6x^6$; b) $6x^3-3x^2+12x$.
:::

:::exercise
Tính:

a) $(x-2)(x^2+2x+4)$.

b) $(2x+3)(x-1)$.

::hint
**Kiến thức:** nhân từng hạng tử của đa thức này với từng hạng tử của đa thức kia, rồi gộp các hạng tử đồng dạng.

**Gợi ý các bước:**
1. a) Có $6$ tích; hai cặp hạng tử sẽ triệt tiêu nhau.
2. b) Có $4$ tích; gộp $-2x$ và $3x$.

::solution
Để nhân hai đa thức, ta nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các tích lại.

a) Ta có
$$(x-2)(x^2+2x+4)=x^3+2x^2+4x-2x^2-4x-8.$$

Gộp các hạng tử đồng dạng:
$$x^3+(2x^2-2x^2)+(4x-4x)-8=x^3-8.$$

b) Ta có
$$(2x+3)(x-1)=2x^2-2x+3x-3=2x^2+x-3.$$

Vậy a) kết quả là $x^3-8$; b) kết quả là $2x^2+x-3$.

**Đáp số.** a) $x^3-8$; b) $2x^2+x-3$.
:::

:::exercise
Chứng tỏ rằng giá trị của biểu thức $(x+4)(x-1)-(x^2+3x)$ không phụ thuộc vào giá trị của $x$.

::hint
**Kiến thức:** nếu sau khi rút gọn, biểu thức chỉ còn một số thì giá trị của nó không đổi.

**Gợi ý các bước:**
1. Khai triển $(x+4)(x-1)$.
2. Trừ $x^2+3x$ bằng cách đổi dấu cả hai hạng tử.

::solution
Ta rút gọn biểu thức; nếu kết quả là một hằng số thì giá trị của biểu thức không phụ thuộc vào $x$.

Trước hết, ta có
$$(x+4)(x-1)=x^2-x+4x-4=x^2+3x-4.$$

Do đó
$$\begin{aligned}(x+4)(x-1)-(x^2+3x)&=x^2+3x-4-x^2-3x\\&=(x^2-x^2)+(3x-3x)-4\\&=-4.\end{aligned}$$

Biểu thức luôn bằng $-4$ với mọi giá trị của $x$.

Vậy giá trị của biểu thức $(x+4)(x-1)-(x^2+3x)$ không phụ thuộc vào giá trị của $x$.

**Đáp số.** Biểu thức luôn bằng $-4$.
:::

:::exercise
Giả sử một xưởng làm bánh bán được $x$ trăm chiếc bánh thì thu về $9x$ (triệu đồng), còn chi phí sản xuất là $x^2+x+4$ (triệu đồng). Lợi nhuận bằng doanh thu trừ chi phí.

a) Viết đa thức $L(x)$ biểu thị lợi nhuận.

b) Tính lợi nhuận khi $x=5$.

::hint
**Kiến thức:** $L(x)=9x-(x^2+x+4)$; bỏ ngoặc phải đổi dấu cả ba hạng tử.

**Gợi ý các bước:**
1. a) Bỏ ngoặc rồi gộp $9x-x$.
2. b) Thay $x=5$ vào $L(x)$ và đối chiếu với $9\cdot5-(25+5+4)$.

::solution
a) Ta có $L(x)=9x-(x^2+x+4)=9x-x^2-x-4=-x^2+8x-4$.

b) Thay $x=5$, ta được $L(5)=-25+40-4=11$. Kiểm tra: doanh thu là $9\cdot5=45$, chi phí là $25+5+4=34$ và $45-34=11$.

Vậy a) $L(x)=-x^2+8x-4$ (triệu đồng); b) bán $5$ trăm chiếc bánh thì lãi $11$ triệu đồng.

**Đáp số.** a) $-x^2+8x-4$; b) $11$ triệu đồng.
:::

:::exercise
Một hộp quà hình hộp chữ nhật có đáy rộng $x$ (cm), chiều dài đáy hơn chiều rộng $4$ cm và chiều cao là $3$ cm.

a) Viết đa thức biểu thị thể tích hộp.

b) Tính thể tích khi $x=5$.

::hint
**Kiến thức:** thể tích bằng chiều rộng nhân chiều dài nhân chiều cao.

**Gợi ý các bước:**
1. a) Chiều dài đáy là $x+4$; viết $V=x(x+4)\cdot3$ rồi nhân ra.
2. b) Thay $x=5$.

::solution
a) Chiều dài đáy là $x+4$ (cm). Thể tích hộp là $V=x(x+4)\cdot3=3x(x+4)=3x^2+12x$ (cm³).

b) Thay $x=5$, ta được $V=3\cdot25+12\cdot5=75+60=135$ (cm³). Kiểm tra: $5\cdot9\cdot3=135$.

Vậy a) $V=3x^2+12x$ (cm³); b) với $x=5$ thì thể tích là $135$ cm³.

**Đáp số.** a) $3x^2+12x$; b) $135$ cm³.
:::

:::exercise Thử thách
Chứng minh rằng $(x+1)(x^2-x+1)=x^3+1$. Từ đó, bằng cách thay $x=10$, hãy tính nhanh tích $11\cdot91$.

::hint
**Kiến thức:** nhân hai đa thức rồi gộp hạng tử đồng dạng; chú ý $x^2-x+1$ tại $x=10$ bằng $91$.

**Gợi ý các bước:**
1. Khai triển vế trái: sáu tích.
2. Thay $x=10$ vào cả hai vế: $x+1=11$ và $x^2-x+1=91$.

::solution
Trước hết, ta biến đổi vế trái. Ta có
$$(x+1)(x^2-x+1)=x^3-x^2+x+x^2-x+1.$$

Gộp các hạng tử đồng dạng:
$$x^3+(-x^2+x^2)+(x-x)+1=x^3+1.$$

Vậy $(x+1)(x^2-x+1)=x^3+1$.

Bây giờ thay $x=10$ vào đẳng thức vừa chứng minh. Khi đó $x+1=11$ và $x^2-x+1=100-10+1=91$, còn vế phải bằng $10^3+1=1001$. Do đó
$$11\cdot91=10^3+1=1001.$$

Vậy $11\cdot91=1001$.

**Đáp số.** $11\cdot91=1001$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Kết quả của phép trừ $(2x^2+3x)-(x^2-5x)$ là
A. $x^2-2x$.
B. $3x^2-2x$.
C. $x^2+8x$.
D. $3x^2+8x$.
::key C
$2x^2+3x-x^2+5x=x^2+8x$. A quên đổi dấu của $-5x$, B và D là kết quả của phép cộng (và sai dấu).

::mc TH
Tích $(-2x^3)\cdot(4x^2)$ bằng
A. $8x^5$.
B. $-8x^6$.
C. $2x^5$.
D. $-8x^5$.
::key D
Nhân hệ số $-2\cdot4=-8$ và cộng số mũ $3+2=5$. A sai dấu, B nhân số mũ ($3\cdot2$) rồi cộng thành $6$, C cộng hai hệ số.

::mc TH
Khai triển $(x+2)(x-3)$ ta được
A. $x^2-x-6$.
B. $x^2-6$.
C. $x^2+x-6$.
D. $x^2-5x-6$.
::key A
$x^2-3x+2x-6=x^2-x-6$. A bỏ qua các tích chéo, C nhầm dấu của hạng tử $x$, D cộng nhầm $-3x-2x$.

::mc VD
Đa thức $M$ thoả mãn $M+(x^2-3x)=2x^2+x-4$ là
A. $x^2-2x-4$.
B. $x^2+4x-4$.
C. $3x^2-2x-4$.
D. $x^2+4x+4$.
::key B
$M=(2x^2+x-4)-(x^2-3x)=x^2+4x-4$. B quên đổi dấu của $-3x$, C cộng thay vì trừ, D sai dấu hạng tử tự do.

::tf TH TH TH VD
Cho $A=x^2+2x-3$ và $B=x^2-x-2$. Xét tính đúng sai của các mệnh đề sau:
a) $A-B=3x+1$.
b) $A+B=2x^2+x-5$.
c) Đa thức $A-B$ có bậc là $1$.
d) $x=\dfrac13$ là nghiệm của đa thức $A-B$.
::key S Đ Đ Đ
a) Sai: $A-B=x^2+2x-3-x^2+x+2=3x-1$. b) Đúng: $2x^2+x-5$. c) Đúng: $3x-1$ có bậc $1$. d) Đúng: $3\cdot\dfrac13-1=0$.

::sa VD
Tính giá trị của biểu thức $(x+3)(x-2)-x^2$ tại $x=4$.
::key -2
Biểu thức bằng $x^2+x-6-x^2=x-6$; tại $x=4$ bằng $-2$.

::sa VD
Tìm hệ số của $x^2$ trong tích $(x+2)(3x^2-x+1)$.
::key 5
$(x+2)(3x^2-x+1)=3x^3+5x^2-x+2$, trong đó $5x^2$ đến từ $-x^2+6x^2$.
:::
