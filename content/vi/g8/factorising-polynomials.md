---
title: Phân tích đa thức thành nhân tử
description: Phân tích đa thức thành nhân tử bằng cách đặt nhân tử chung, dùng hằng đẳng thức và nhóm hạng tử, rồi áp dụng vào tính nhanh và bài toán thực tế.
minutes: 35
---

:::goals
- Hiểu thế nào là phân tích đa thức thành nhân tử.
- Phân tích đa thức thành nhân tử bằng phương pháp đặt nhân tử chung, dùng hằng đẳng thức và nhóm hạng tử.
- Kết hợp các phương pháp để phân tích hoàn toàn một đa thức.
- Dùng phân tích đa thức thành nhân tử để tính nhanh và giải bài toán thực tế.
:::

Bạn có tính nhanh được $37\cdot68+37\cdot32$ mà không cần bấm máy không? Nếu để ý thấy thừa số $37$ xuất hiện ở cả hai tích, ta viết được $37\cdot(68+32)=37\cdot100=3700$. Ta vừa "gom" một thừa số chung ra ngoài.

Bây giờ nếu mảnh đất hình chữ nhật có diện tích $x^2+6x$ (m²) và chiều rộng $x$ m, chiều dài của nó là bao nhiêu? Ta cần viết $x^2+6x$ thành một **tích** có thừa số $x$. Đó là việc **phân tích đa thức thành nhân tử**, công cụ ngược với phép nhân đa thức.

## Phân tích đa thức thành nhân tử

:::definition Phân tích đa thức thành nhân tử
**Phân tích một đa thức thành nhân tử** là biến đổi đa thức đó thành **tích** của những đa thức. Mỗi đa thức trong tích gọi là một **nhân tử**.
:::

Ví dụ, $x^2-9=(x-3)(x+3)$ là một cách phân tích thành nhân tử, với hai nhân tử là $(x-3)$ và $(x+3)$. Muốn kiểm tra, ta nhân các nhân tử rồi so với đa thức ban đầu.

### Phương pháp đặt nhân tử chung

Khi mọi hạng tử đều có một thừa số giống nhau, ta dùng tính chất phân phối theo chiều ngược lại:
$$AB+AC=A(B+C).$$
Thừa số $A$ gọi là **nhân tử chung**.

:::note Tìm nhân tử chung
- Hệ số của nhân tử chung là **ước chung lớn nhất** của các hệ số.
- Phần biến gồm các biến có mặt trong mọi hạng tử, mỗi biến lấy với số mũ **nhỏ nhất**.
:::

Chẳng hạn $6x^2y-9xy^2$: ước chung lớn nhất của $6$ và $9$ là $3$, biến chung là $x$ và $y$ với số mũ nhỏ nhất là $1$. Vậy nhân tử chung là $3xy$ và $6x^2y-9xy^2=3xy(2x-3y)$.

### Phương pháp dùng hằng đẳng thức

Ta đọc các hằng đẳng thức đã học theo chiều ngược lại:
$$A^2\pm2AB+B^2=(A\pm B)^2,\qquad A^2-B^2=(A-B)(A+B),$$
$$A^3\pm3A^2B+3AB^2\pm B^3=(A\pm B)^3,\qquad A^3\pm B^3=(A\pm B)(A^2\mp AB+B^2).$$
Ta nhận ra dạng của đa thức rồi xác định $A$ và $B$.

### Phương pháp nhóm hạng tử

Khi các hạng tử không có nhân tử chung cho tất cả, ta ghép chúng thành từng nhóm sao cho mỗi nhóm có nhân tử chung, rồi lại có một nhân tử chung mới giữa các nhóm:
$$ax+ay+bx+by=a(x+y)+b(x+y)=(a+b)(x+y).$$

:::note Thứ tự nên thử
1. Có nhân tử chung cho tất cả các hạng tử thì đặt nhân tử chung trước.
2. Rồi xem phần còn lại có hợp với một hằng đẳng thức không.
3. Nếu còn bốn hạng tử trở lên, thử nhóm hạng tử.
:::

Một đa thức được **phân tích hoàn toàn** khi không thể phân tích tiếp các nhân tử của nó nữa.

## Ví dụ

Ta bắt đầu với đặt nhân tử chung.

:::example Đặt nhân tử chung
Phân tích thành nhân tử:

a) $6x^2y-9xy^2$.

b) $5x(x-2)+3(x-2)$.

**Lời giải.** a) Nhân tử chung là $3xy$:
$$6x^2y-9xy^2=3xy\cdot2x-3xy\cdot3y=3xy(2x-3y).$$

b) Nhân tử chung là $(x-2)$:
$$5x(x-2)+3(x-2)=(x-2)(5x+3).$$

Vậy a) $3xy(2x-3y)$; b) $(x-2)(5x+3)$.
:::

Tiếp theo ta dùng hằng đẳng thức.

:::example Dùng hằng đẳng thức
Phân tích thành nhân tử:

a) $4x^2-25$.

b) $x^2+8x+16$.

c) $8x^3-27$.

**Lời giải.** a) Ta có $4x^2-25=(2x)^2-5^2=(2x-5)(2x+5)$.

b) Ta có $x^2+8x+16=x^2+2\cdot x\cdot4+4^2=(x+4)^2$.

c) Ta có $8x^3-27=(2x)^3-3^3=(2x-3)(4x^2+6x+9)$.

Vậy a) $(2x-5)(2x+5)$; b) $(x+4)^2$; c) $(2x-3)(4x^2+6x+9)$.
:::

Bây giờ ta nhóm hạng tử.

:::example Nhóm hạng tử
Phân tích thành nhân tử:

a) $x^2-xy+3x-3y$.

b) $x^2-y^2+2x+2y$.

**Lời giải.** a) Ta nhóm hai hạng tử đầu và hai hạng tử cuối:
$$\begin{aligned} x^2-xy+3x-3y&=(x^2-xy)+(3x-3y)\\ &=x(x-y)+3(x-y)\\ &=(x-y)(x+3). \end{aligned}$$

b) Nhóm $x^2-y^2$ và $2x+2y$, rồi dùng hằng đẳng thức ở nhóm thứ nhất:
$$\begin{aligned} x^2-y^2+2x+2y&=(x-y)(x+y)+2(x+y)\\ &=(x+y)(x-y+2). \end{aligned}$$

Vậy a) $(x-y)(x+3)$; b) $(x+y)(x-y+2)$.
:::

Thường ta phải kết hợp nhiều phương pháp.

:::example Kết hợp các phương pháp
Phân tích hoàn toàn thành nhân tử:

a) $2x^3-8x$.

b) $3x^2-12x+12$.

**Lời giải.** a) Đặt nhân tử chung $2x$ rồi dùng hiệu hai bình phương:
$$2x^3-8x=2x(x^2-4)=2x(x-2)(x+2).$$

b) Đặt nhân tử chung $3$ rồi dùng bình phương của một hiệu:
$$3x^2-12x+12=3(x^2-4x+4)=3(x-2)^2.$$

Vậy a) $2x(x-2)(x+2)$; b) $3(x-2)^2$.
:::

Ta cũng dùng phân tích thành nhân tử để tính nhanh.

:::example Tính nhanh
Tính nhanh:

a) $37\cdot68+37\cdot32$.

b) $85^2-15^2$.

c) $105^2-2\cdot105\cdot5+5^2$.

**Lời giải.** a) $37\cdot68+37\cdot32=37(68+32)=37\cdot100=3700$.

b) $85^2-15^2=(85-15)(85+15)=70\cdot100=7000$.

c) $105^2-2\cdot105\cdot5+5^2=(105-5)^2=100^2=10\,000$.

Vậy a) $3700$; b) $7000$; c) $10\,000$.
:::

Cuối cùng là một bài toán thực tế về diện tích sân.

:::example Sân có ao (Vận dụng)
Giả sử một sân hình vuông có cạnh $x$ m. Giữa sân có một cái ao hình vuông cạnh $y$ m ($x>y$). Viết diện tích phần sân còn lại thành tích các nhân tử, rồi tính khi $x=20$ và $y=6$.

**Lời giải.**

*Hiểu đề.* Diện tích phần sân còn lại bằng diện tích cả sân trừ diện tích ao.

*Tìm cách giải.* Viết hiệu $x^2-y^2$ rồi phân tích thành nhân tử bằng hằng đẳng thức, sau đó thay số.

*Giải.* Diện tích phần sân còn lại là
$$x^2-y^2=(x-y)(x+y)\ (\text{m}^2).$$
Khi $x=20$ và $y=6$ ta có $(20-6)(20+6)=14\cdot26=364$ (m²).

Vậy diện tích phần sân còn lại là $(x-y)(x+y)$ (m²), và bằng $364$ m² khi $x=20$, $y=6$.

*Nhìn lại.* Kiểm tra: $20^2-6^2=400-36=364$, khớp. Dạng tích cho ta thêm một ý nghĩa: phần sân còn lại có thể cắt ra và ghép thành một hình chữ nhật có hai cạnh $(x-y)$ và $(x+y)$.
:::

:::warning Những sai lầm thường gặp
- **Đặt nhân tử chung chưa đầy đủ.** Sai: $6x^2y-9xy^2=3x(2xy-3y^2)$. Lí do sai: các hạng tử trong ngoặc vẫn còn nhân tử chung $y$. Đúng: $6x^2y-9xy^2=3xy(2x-3y)$.
- **Sai dấu khi đổi chiều một nhân tử.** Sai: $x(x-2)+(2-x)=(x-2)(x+1)$. Lí do sai: $2-x=-(x-2)$. Đúng: $x(x-2)-(x-2)=(x-2)(x-1)$.
- **Bỏ mất hạng tử khi đặt nhân tử chung.** Sai: $2x^2+2x=2x\cdot x$. Lí do sai: hạng tử $2x$ chia cho $2x$ còn lại $1$. Đúng: $2x^2+2x=2x(x+1)$.
- **Dừng lại khi chưa phân tích hoàn toàn.** Sai: $x^4-16=(x^2-4)(x^2+4)$ rồi dừng. Lí do sai: nhân tử $x^2-4$ vẫn phân tích được. Đúng: $x^4-16=(x-2)(x+2)(x^2+4)$.
:::

**Kết nối.** Phân tích đa thức thành nhân tử là phép toán ngược của nhân đa thức, và dùng lại các hằng đẳng thức ở hai bài trước. Về sau, khi rút gọn phân thức đại số và giải phương trình tích, ta sẽ dùng nó thường xuyên.

## Thuật ngữ

:::terms
- phân tích đa thức thành nhân tử | factorise a polynomial
- nhân tử | factor
- nhân tử chung | common factor
- đặt nhân tử chung | taking out a common factor
- nhóm hạng tử | grouping terms
- hằng đẳng thức | identity
- ước chung lớn nhất | greatest common divisor
- tích | product
:::

## Tóm tắt

- Phân tích đa thức thành nhân tử là biến đổi nó thành tích của những đa thức.
- Đặt nhân tử chung: $AB+AC=A(B+C)$; lấy hệ số là ước chung lớn nhất và các biến chung với số mũ nhỏ nhất.
- Dùng hằng đẳng thức theo chiều ngược lại để viết thành bình phương, lập phương hoặc tích.
- Nhóm hạng tử: ghép các hạng tử để xuất hiện nhân tử chung mới.
- Thứ tự nên thử: nhân tử chung, rồi hằng đẳng thức, rồi nhóm hạng tử; phân tích đến khi hoàn toàn.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Phân tích thành nhân tử:

a) $4x^2-6x$.

b) $12x^3y-18x^2y^2$.

c) $5x(y-2)-3(y-2)$.

::hint
**Kiến thức:** $AB+AC=A(B+C)$; nhân tử chung gồm ước chung lớn nhất của các hệ số và các biến chung có số mũ nhỏ nhất.

**Gợi ý các bước:**
1. Tìm nhân tử chung.
2. Chia từng hạng tử cho nhân tử chung rồi viết vào ngoặc.

::solution
a) $4x^2-6x=2x(2x-3)$.

b) $12x^3y-18x^2y^2=6x^2y(2x-3y)$.

c) $5x(y-2)-3(y-2)=(y-2)(5x-3)$.

Vậy a) $2x(2x-3)$; b) $6x^2y(2x-3y)$; c) $(y-2)(5x-3)$.

**Đáp số.** a) $2x(2x-3)$. b) $6x^2y(2x-3y)$. c) $(y-2)(5x-3)$.
:::

:::exercise
Phân tích thành nhân tử:

a) $2x(x-3)+5(x-3)$.

b) $x(x-y)+y(y-x)$.

c) $3a(b-1)-6(1-b)$.

::hint
**Kiến thức:** $B-A=-(A-B)$; đổi dấu để các nhân tử giống nhau.

**Gợi ý các bước:**
1. Với b) và c), đổi $y-x$ và $1-b$ về dạng có nhân tử chung.
2. Đặt nhân tử chung.

::solution
a) $2x(x-3)+5(x-3)=(x-3)(2x+5)$.

b) Ta có $y(y-x)=-y(x-y)$, nên $x(x-y)+y(y-x)=x(x-y)-y(x-y)=(x-y)(x-y)=(x-y)^2$.

c) Ta có $-6(1-b)=6(b-1)$, nên $3a(b-1)-6(1-b)=3a(b-1)+6(b-1)=(b-1)(3a+6)=3(b-1)(a+2)$.

Vậy a) $(x-3)(2x+5)$; b) $(x-y)^2$; c) $3(b-1)(a+2)$.

**Đáp số.** a) $(x-3)(2x+5)$. b) $(x-y)^2$. c) $3(b-1)(a+2)$.
:::

:::exercise
Phân tích thành nhân tử bằng hằng đẳng thức:

a) $9x^2-16y^2$.

b) $x^2-10x+25$.

c) $4x^2+12x+9$.

::hint
**Kiến thức:** $A^2-B^2=(A-B)(A+B)$ và $A^2\pm2AB+B^2=(A\pm B)^2$.

**Gợi ý các bước:**
1. Nhận ra dạng của đa thức.
2. Xác định $A$ và $B$ rồi viết kết quả.

::solution
a) $9x^2-16y^2=(3x)^2-(4y)^2=(3x-4y)(3x+4y)$.

b) $x^2-10x+25=x^2-2\cdot x\cdot5+5^2=(x-5)^2$.

c) $4x^2+12x+9=(2x)^2+2\cdot2x\cdot3+3^2=(2x+3)^2$.

Vậy a) $(3x-4y)(3x+4y)$; b) $(x-5)^2$; c) $(2x+3)^2$.

**Đáp số.** a) $(3x-4y)(3x+4y)$. b) $(x-5)^2$. c) $(2x+3)^2$.
:::

:::exercise
Phân tích thành nhân tử bằng hằng đẳng thức lập phương:

a) $x^3+8$.

b) $27x^3-1$.

c) $x^3+6x^2+12x+8$.

::hint
**Kiến thức:** $A^3\pm B^3=(A\pm B)(A^2\mp AB+B^2)$ và $(A+B)^3=A^3+3A^2B+3AB^2+B^3$.

**Gợi ý các bước:**
1. Nhận ra các lập phương trong đa thức.
2. Chú ý dấu ở nhân tử thứ hai.

::solution
a) $x^3+8=x^3+2^3=(x+2)(x^2-2x+4)$.

b) $27x^3-1=(3x)^3-1^3=(3x-1)(9x^2+3x+1)$.

c) $x^3+6x^2+12x+8=x^3+3\cdot x^2\cdot2+3\cdot x\cdot2^2+2^3=(x+2)^3$.

Vậy a) $(x+2)(x^2-2x+4)$; b) $(3x-1)(9x^2+3x+1)$; c) $(x+2)^3$.

**Đáp số.** a) $(x+2)(x^2-2x+4)$. b) $(3x-1)(9x^2+3x+1)$. c) $(x+2)^3$.
:::

:::exercise
Phân tích thành nhân tử bằng cách nhóm hạng tử:

a) $xy+2x+3y+6$.

b) $x^2-2xy+x-2y$.

c) $a^2-ab-4a+4b$.

::hint
**Kiến thức:** ghép các hạng tử để mỗi nhóm có nhân tử chung và các nhóm có nhân tử chung mới.

**Gợi ý các bước:**
1. Nhóm hai hạng tử đầu và hai hạng tử cuối.
2. Đặt nhân tử chung trong mỗi nhóm rồi đặt nhân tử chung mới.

::solution
a) $xy+2x+3y+6=x(y+2)+3(y+2)=(y+2)(x+3)$.

b) $x^2-2xy+x-2y=x(x-2y)+(x-2y)=(x-2y)(x+1)$.

c) $a^2-ab-4a+4b=a(a-b)-4(a-b)=(a-b)(a-4)$.

Vậy a) $(y+2)(x+3)$; b) $(x-2y)(x+1)$; c) $(a-b)(a-4)$.

**Đáp số.** a) $(y+2)(x+3)$. b) $(x-2y)(x+1)$. c) $(a-b)(a-4)$.
:::

:::exercise
Phân tích hoàn toàn thành nhân tử:

a) $3x^3-12x$.

b) $2x^2-12x+18$.

c) $x^4-16$.

::hint
**Kiến thức:** đặt nhân tử chung trước, rồi dùng hằng đẳng thức; tiếp tục cho đến khi không phân tích được nữa.

**Gợi ý các bước:**
1. Tìm nhân tử chung của tất cả hạng tử (nếu có).
2. Phân tích phần còn lại bằng hằng đẳng thức.

::solution
a) $3x^3-12x=3x(x^2-4)=3x(x-2)(x+2)$.

b) $2x^2-12x+18=2(x^2-6x+9)=2(x-3)^2$.

c) $x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)$.

Vậy a) $3x(x-2)(x+2)$; b) $2(x-3)^2$; c) $(x-2)(x+2)(x^2+4)$.

**Đáp số.** a) $3x(x-2)(x+2)$. b) $2(x-3)^2$. c) $(x-2)(x+2)(x^2+4)$.
:::

:::exercise
Tính nhanh:

a) $45\cdot37+45\cdot63$.

b) $65^2-35^2$.

c) $76^2+2\cdot76\cdot24+24^2$.

::hint
**Kiến thức:** đặt nhân tử chung hoặc dùng hằng đẳng thức rồi tính.

**Gợi ý các bước:**
1. Nhận ra thừa số chung hoặc dạng hằng đẳng thức.
2. Phân tích thành nhân tử rồi tính.

::solution
a) $45\cdot37+45\cdot63=45(37+63)=45\cdot100=4500$.

b) $65^2-35^2=(65-35)(65+35)=30\cdot100=3000$.

c) $76^2+2\cdot76\cdot24+24^2=(76+24)^2=100^2=10\,000$.

Vậy a) $4500$; b) $3000$; c) $10\,000$.

**Đáp số.** a) $4500$. b) $3000$. c) $10\,000$.
:::

:::exercise
Giả sử một mảnh vườn hình chữ nhật có diện tích $(x^2+6x)$ m² và chiều rộng $x$ m. Hãy viết chiều dài mảnh vườn theo $x$, rồi tính chiều dài và diện tích khi $x=14$.

::hint
**Kiến thức:** diện tích hình chữ nhật $=$ chiều dài $\times$ chiều rộng; phân tích diện tích thành tích có thừa số $x$.

**Gợi ý các bước:**
1. Đặt nhân tử chung $x$ trong $x^2+6x$.
2. Nhân tử còn lại là chiều dài; thay $x=14$.

::solution
Ta có $x^2+6x=x(x+6)$, nên chiều dài là $(x+6)$ m.

Khi $x=14$, chiều dài là $20$ m và diện tích là $14\cdot20=280$ (m²). (Kiểm tra: $14^2+6\cdot14=196+84=280$.)

Vậy chiều dài là $(x+6)$ m; khi $x=14$ thì chiều dài là $20$ m và diện tích là $280$ m².

**Đáp số.** $(x+6)$ m; $20$ m; $280$ m².
:::

:::exercise
Nhớ lại bài về hiệu hai bình phương. Giả sử một tấm bìa hình vuông cạnh $12$ cm bị cắt bỏ một hình vuông cạnh $8$ cm ở một góc. Tính diện tích phần còn lại bằng cách phân tích thành nhân tử.

::hint
**Kiến thức:** diện tích phần còn lại $=12^2-8^2=(12-8)(12+8)$.

**Gợi ý các bước:**
1. Viết hiệu hai bình phương.
2. Phân tích thành tích rồi tính.

::solution
Diện tích phần còn lại là $12^2-8^2=(12-8)(12+8)=4\cdot20=80\ (\text{cm}^2)$. (Kiểm tra: $144-64=80$.)

Vậy diện tích phần còn lại là $80\ \text{cm}^2$.

**Đáp số.** $80\ \text{cm}^2$.
:::

:::exercise Thử thách
Chứng minh rằng với mọi số nguyên $n$, biểu thức $n^3-n$ chia hết cho $6$.

::hint
**Kiến thức:** $n^3-n=n(n^2-1)$; trong ba số nguyên liên tiếp có một số chia hết cho $3$ và có ít nhất một số chẵn.

**Gợi ý các bước:**
1. Phân tích $n^3-n$ thành tích ba số nguyên liên tiếp.
2. Lập luận chia hết cho $2$ và cho $3$.

::solution
Ta có $n^3-n=n(n^2-1)=n(n-1)(n+1)=(n-1)\,n\,(n+1)$, là tích của ba số nguyên liên tiếp.

Trong ba số nguyên liên tiếp có ít nhất một số chẵn, nên tích chia hết cho $2$. Cũng trong ba số đó có đúng một số chia hết cho $3$, nên tích chia hết cho $3$. Vì $2$ và $3$ nguyên tố cùng nhau nên tích chia hết cho $2\cdot3=6$.

Vậy $n^3-n$ chia hết cho $6$ với mọi số nguyên $n$.

**Đáp số.** $n^3-n=(n-1)n(n+1)$ chia hết cho $6$.
:::

## Kiểm tra mini

:::quiz
::mc
Phân tích $6x^2-9x$ thành nhân tử được
A. $3(2x^2-3x)$.
B. $3x(2x-3)$.
C. $3x(2x-9)$.
D. $3x(2x+3)$.
::key B
Nhân tử chung là $3x$: $6x^2-9x=3x(2x-3)$. A đặt nhân tử chung chưa đầy đủ, D sai dấu, C chia sai hạng tử thứ hai.

::mc
Phân tích $4x^2-9$ thành nhân tử được
A. $(2x-3)^2$.
B. $(4x-3)(x+3)$.
C. $(2x-3)(2x+3)$.
D. $(2x+3)^2$.
::key C
$4x^2-9=(2x)^2-3^2=(2x-3)(2x+3)$. A và D là bình phương của một hiệu hoặc một tổng (có hạng tử $\pm12x$), B không đúng khi nhân lại.

::mc
Phân tích $x^3-8$ thành nhân tử được
A. $(x-2)(x^2+4)$.
B. $(x-2)^3$.
C. $(x-2)(x^2-2x+4)$.
D. $(x-2)(x^2+2x+4)$.
::key D
$x^3-8=x^3-2^3=(x-2)(x^2+2x+4)$. B có bốn hạng tử khi khai triển, C sai dấu hạng tử giữa, A thiếu hạng tử $2x$.

::mc
Phân tích $xy+2x+3y+6$ thành nhân tử được
A. $(x+3)(y+2)$.
B. $(x+2)(y+6)$.
C. $(x+2)(y+3)$.
D. $x(y+2)+6$.
::key A
$xy+2x+3y+6=x(y+2)+3(y+2)=(x+3)(y+2)$. A và C cho hạng tử sai khi nhân lại, D chưa phải là tích.

::tf
Xét đa thức $2x^2-8$.
a) $2x^2-8=2(x^2-4)$.
b) $2x^2-8=2(x-2)^2$.
c) $2x^2-8=2(x-2)(x+2)$.
d) Giá trị của $2x^2-8$ tại $x=3$ bằng $10$.
::key Đ S Đ Đ
a) Đúng: đặt nhân tử chung $2$. b) Sai: $2(x-2)^2=2x^2-8x+8$. c) Đúng: $x^2-4=(x-2)(x+2)$. d) Đúng: $18-8=10$ và $2\cdot1\cdot5=10$.

::sa
Tính nhanh $65^2-35^2$.
::key 3000
$65^2-35^2=(65-35)(65+35)=30\cdot100=3000$.

::sa
Cho $x+y=5$ và $x-y=3$. Tính $x^2-y^2$.
::key 15
$x^2-y^2=(x-y)(x+y)=3\cdot5=15$.
:::
