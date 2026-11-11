---
title: Biểu thức tương đương và lũy thừa
description: SAT Advanced Math: quy tắc lũy thừa, số mũ hữu tỉ, phân tích thành nhân tử, đồng nhất hệ số, phân thức và biến đổi công thức.
minutes: 35
---

:::goals
- Rút gọn biểu thức bằng các quy tắc lũy thừa, kể cả số mũ hữu tỉ và căn thức.
- Phân tích tam thức bậc hai và hiệu hai bình phương thành nhân tử, tìm nhân tử trong các phương án.
- Tìm hằng số chưa biết bằng cách đồng nhất hệ số của hai biểu thức tương đương.
- Rút gọn phân thức và biến đổi công thức để biểu diễn một đại lượng theo các đại lượng khác.
:::

"Biểu thức nào tương đương với…?" (Which expression is equivalent to…?) là một trong những câu hỏi gặp nhiều nhất ở mảng Advanced Math, mảng có khoảng 13 đến 15 câu trong đề. Các câu này kiểm tra phần đại số học sinh Việt Nam học ở lớp 8 và lớp 9, và các bạn nhanh nhất giải trong chưa đầy một phút. Hai công cụ từ các bài trước sẽ giúp ích: [thay số](lesson:sat-desmos-strategies) và vẽ đồ thị cả hai biểu thức trong Desmos.

## Các quy tắc lũy thừa

:::theorem Quy tắc lũy thừa
Với $a, b>0$ và các số mũ $m, n$ bất kì:
- $a^m\cdot a^n=a^{m+n}$, $\dfrac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{mn}$, $(ab)^n=a^nb^n$;
- $a^0=1$, $a^{-n}=\dfrac{1}{a^n}$;
- $a^{\frac{m}{n}}=\sqrt[n]{a^m}=\left(\sqrt[n]{a}\right)^m$; đặc biệt $a^{\frac12}=\sqrt a$.
:::

:::example Lũy thừa của một tích
Biểu thức nào tương đương với $(2x^3y)^2\cdot3xy^4$?
A. $6x^6y^6$
B. $12x^7y^6$
C. $12x^6y^8$
D. $36x^7y^6$

**Lời giải.** Tính lũy thừa trước, rồi đến phép nhân:

$$(2x^3y)^2=4x^6y^2,\qquad 4x^6y^2\cdot3xy^4=12x^{7}y^{6}.$$

Đáp án là **B**. Phương án A quên bình phương số $2$; phương án D bình phương luôn cả số $3$.
:::

:::example Số mũ hữu tỉ
Với $x>0$, biểu thức nào tương đương với $\sqrt{x^3}\cdot x^{-\frac12}$?
A. $x$
B. $x^2$
C. $x^{\frac34}$
D. $\dfrac1x$

**Lời giải.** Viết căn thành lũy thừa: $\sqrt{x^3}=x^{\frac32}$. Khi đó $x^{\frac32}\cdot x^{-\frac12}=x^{\frac32-\frac12}=x^1$. Đáp án là **A**.
:::

## Phân tích thành nhân tử

:::note Các dạng cần nhận ra
- $a^2-b^2=(a-b)(a+b)$
- $a^2\pm2ab+b^2=(a\pm b)^2$
- $px^2+qx+r$: tìm hai số có tích bằng $pr$ và tổng bằng $q$, tách hạng tử giữa rồi nhóm.
- $x-c$ là một nhân tử của đa thức $p(x)$ khi và chỉ khi $p(c)=0$.
:::

:::example Tìm một nhân tử
Biểu thức nào sau đây là một nhân tử của $2x^2+5x-12$?
A. $x-4$
B. $2x+3$
C. $x+4$
D. $2x-4$

**Lời giải.** Cần hai số có tích $2\cdot(-12)=-24$ và tổng $5$: đó là $8$ và $-3$.

$$2x^2+8x-3x-12=2x(x+4)-3(x+4)=(2x-3)(x+4).$$

Đáp án là **C**. Kiểm tra nhanh: tại $x=-4$, $2\cdot16-20-12=0$.
:::

## Đồng nhất hệ số

Hai đa thức tương đương (bằng nhau với mọi $x$) khi và chỉ khi hệ số của $x^2$, hệ số của $x$ và hệ số tự do của chúng bằng nhau. Nhờ vậy một phương trình trở thành vài phương trình đơn giản.

:::example Tìm hằng số
Trong đẳng thức $(ax+3)(2x-5)=6x^2+bx-15$, $a$ và $b$ là các hằng số và đẳng thức đúng với mọi giá trị của $x$. Giá trị của $b$ bằng bao nhiêu?

**Lời giải.** Khai triển vế trái: $2ax^2+(6-5a)x-15$.

$$x^2:\ 2a=6\iff a=3,\qquad x:\ b=6-5a=6-15=-9.$$

Bạn gõ **-9**. Hệ số tự do khớp nhau ($-15=-15$), đúng như phải thế.
:::

## Phân thức và công thức

Để rút gọn một phân thức, hãy phân tích tử và mẫu thành nhân tử rồi giản ước nhân tử chung, nhớ các giá trị làm mẫu bằng $0$. Để cộng các phân thức, hãy quy đồng mẫu.

:::example Cộng phân thức
Với $x\ne2$ và $x\ne-2$, biểu thức nào tương đương với $\dfrac{1}{x-2}+\dfrac{3}{x+2}$?
A. $\dfrac{4}{2x}$
B. $\dfrac{4}{x^2-4}$
C. $\dfrac{4x-4}{x^2-4}$
D. $\dfrac{4x+8}{x^2-4}$

**Lời giải.** Mẫu chung là $(x-2)(x+2)=x^2-4$:

$$\frac{(x+2)+3(x-2)}{x^2-4}=\frac{4x-4}{x^2-4}.$$

Đáp án là **C**. Phương án A cộng tử với tử, mẫu với mẫu, điều không bao giờ được phép.
:::

Biến đổi một công thức làm giống như giải phương trình, các chữ khác giữ nguyên.

:::example Biến đổi công thức
Công thức $F=\dfrac95C+32$ đổi nhiệt độ $C$ tính bằng độ C sang $F$ tính bằng độ F. Đẳng thức nào biểu diễn $C$ theo $F$?
A. $C=\dfrac95F-32$
B. $C=\dfrac59F-32$
C. $C=\dfrac59(F+32)$
D. $C=\dfrac59(F-32)$

**Lời giải.** Trừ $32$, rồi nhân với $\dfrac59$: $F-32=\dfrac95C\iff C=\dfrac59(F-32)$. Đáp án là **D**. Kiểm tra với nước sôi ở $F=212$: $\dfrac59\cdot180=100$.
:::

:::warning Những cái bẫy thường gặp
- **Cộng số mũ khi hai cơ số khác nhau.** $2^3\cdot3^2$ bằng $8\cdot9=72$, không phải $6^5$.
- **Bình phương một tổng theo từng số hạng.** $(x+3)^2=x^2+6x+9$, không phải $x^2+9$.
- **Giản ước số hạng thay vì nhân tử.** Trong $\dfrac{x+6}{x+2}$ không có gì giản ước được; trong $\dfrac{x^2-9}{x+3}=\dfrac{(x-3)(x+3)}{x+3}$ thì nhân tử $x+3$ được giản ước.
- **Số mũ âm.** $x^{-2}=\dfrac{1}{x^2}$, không phải $-x^2$.
:::

:::tip Kiểm tra tương đương bằng Desmos
Gõ biểu thức ban đầu thành một dòng `y=` và mỗi phương án thành một dòng `y=` khác. Phương án tương đương là phương án có đồ thị nằm trùng khít lên đồ thị ban đầu. Với biểu thức có hai chữ, hãy thay số cho cả hai.
:::

:::terms
- biểu thức tương đương | equivalent expression
- số mũ | exponent
- số mũ hữu tỉ | rational exponent
- căn thức, căn bậc hai | radical, square root
- nhân tử, thừa số | factor
- hệ số | coefficient
- hiệu hai bình phương | difference of squares
- phân thức | rational expression
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
Biểu thức nào tương đương với $\dfrac{(3a^2b)^3}{9ab^2}$, với $a$ và $b$ khác $0$?
A. $a^5b$
B. $3a^4b$
C. $3a^5b$
D. $9a^5b$

::hint
**Kiến thức:** $(xy)^n=x^ny^n$ và $\dfrac{a^m}{a^n}=a^{m-n}$.

**Gợi ý các bước:**
1. Khai triển tử: $27a^6b^3$.
2. Chia hệ số cho hệ số, lũy thừa cho lũy thừa.

::solution
$\dfrac{27a^6b^3}{9ab^2}=3a^5b$. Đáp án là **C**. Phương án A bỏ mất hệ số, còn phương án D chia $27$ cho $3$ thay vì cho $9$.
:::

:::exercise Trắc nghiệm
Biểu thức nào sau đây là một nhân tử của $3x^2-10x-8$?
A. $x+4$
B. $3x-2$
C. $3x+2$
D. $x-2$

::hint
**Kiến thức:** hai số có tích $3\cdot(-8)$ và tổng $-10$.

**Gợi ý các bước:**
1. Hai số đó là $-12$ và $2$.
2. Tách hạng tử giữa rồi nhóm.

::solution
$3x^2-12x+2x-8=3x(x-4)+2(x-4)=(3x+2)(x-4)$. Đáp án là **C**. Kiểm tra: tại $x=-\dfrac23$, $3\cdot\dfrac49+\dfrac{20}{3}-8=\dfrac43+\dfrac{20}3-8=0$.
:::

:::exercise Câu tự điền đáp số
Trong đẳng thức $(2x+k)(x-4)=2x^2-5x-12$, $k$ là hằng số và đẳng thức đúng với mọi $x$. Giá trị của $k$ bằng bao nhiêu?

::hint
**Kiến thức:** đồng nhất hệ số của $x$.

**Gợi ý các bước:**
1. Khai triển: $2x^2+(k-8)x-4k$.
2. Cho $k-8=-5$ rồi kiểm tra hệ số tự do.

::solution
$k-8=-5\iff k=3$, và hệ số tự do là $-4\cdot3=-12$, khớp với đề. Đáp số là $3$.
:::

:::exercise Trắc nghiệm
Với $x>0$, biểu thức nào tương đương với $x^{\frac23}\cdot x^{\frac13}\cdot\sqrt x$?
A. $x^{\frac13}$
B. $x\sqrt x$
C. $x^2$
D. $\sqrt[3]{x}$

::hint
**Kiến thức:** cộng các số mũ; $\sqrt x=x^{\frac12}$.

**Gợi ý các bước:**
1. Tính $\dfrac23+\dfrac13+\dfrac12$.
2. Viết kết quả trở lại dạng căn.

::solution
$\dfrac23+\dfrac13+\dfrac12=\dfrac32$, và $x^{\frac32}=x\cdot x^{\frac12}=x\sqrt x$. Đáp án là **B**.
:::

:::exercise Trắc nghiệm
Diện tích hình thang là $A=\dfrac12h(b_1+b_2)$. Đẳng thức nào biểu diễn $h$ theo $A$, $b_1$ và $b_2$?
A. $h=\dfrac{2A}{b_1+b_2}$
B. $h=\dfrac{A}{2(b_1+b_2)}$
C. $h=2A-(b_1+b_2)$
D. $h=\dfrac{A(b_1+b_2)}{2}$

::hint
**Kiến thức:** làm ngược từng phép toán theo thứ tự ngược lại.

**Gợi ý các bước:**
1. Nhân hai vế với $2$.
2. Chia cho $b_1+b_2$.

::solution
$2A=h(b_1+b_2)\iff h=\dfrac{2A}{b_1+b_2}$. Đáp án là **A**.
:::

## Bài tập vận dụng

:::exercise Lối đi quanh vườn
Một khu vườn hình vuông có cạnh $x$ mét. Một lối đi rộng $2$ mét chạy vòng quanh bên ngoài khu vườn. Viết biểu thức rút gọn cho diện tích lối đi, tính bằng mét vuông. Diện tích đó bằng bao nhiêu khi $x=10$?

::hint
**Kiến thức:** diện tích lối đi = diện tích hình vuông lớn − diện tích khu vườn.

**Gợi ý các bước:**
1. Hình vuông lớn có cạnh $x+4$.
2. Khai triển $(x+4)^2-x^2$.

::solution
$(x+4)^2-x^2=x^2+8x+16-x^2=8x+16$. Khi $x=10$, lối đi có diện tích $96$ mét vuông. Kiểm tra: $14^2-10^2=196-100=96$.
:::

:::exercise Câu tự điền đáp số
Nếu $x^2-y^2=48$ và $x+y=8$ thì giá trị của $x-y$ bằng bao nhiêu?

::hint
**Kiến thức:** hiệu hai bình phương.

**Gợi ý các bước:**
1. $x^2-y^2=(x+y)(x-y)$.
2. Thay $x+y=8$.

::solution
$48=8(x-y)$, nên $x-y=6$. (Ở đây $x=7$, $y=1$.)
:::

:::exercise Câu tự điền đáp số
Nếu $x+\dfrac1x=5$ thì giá trị của $x^2+\dfrac{1}{x^2}$ bằng bao nhiêu?

::hint
**Kiến thức:** bình phương hai vế; hạng tử chéo là $2\cdot x\cdot\dfrac1x=2$.

**Gợi ý các bước:**
1. $\left(x+\dfrac1x\right)^2=x^2+2+\dfrac1{x^2}$.
2. Trừ đi $2$.

::solution
$25=x^2+2+\dfrac1{x^2}$, nên $x^2+\dfrac1{x^2}=23$.
:::

:::exercise Thử thách
Với mọi $x\ne2$, $\dfrac{3x^2-5x-2}{x-2}=ax+b$, trong đó $a$ và $b$ là các hằng số. Giá trị của $a+b$ bằng bao nhiêu?

::hint
**Kiến thức:** phân tích tử thành nhân tử; một nhân tử phải là $x-2$.

**Gợi ý các bước:**
1. Tìm hai số có tích $3\cdot(-2)=-6$ và tổng $-5$.
2. Giản ước $x-2$.

::solution
Hai số đó là $-6$ và $1$: $3x^2-6x+x-2=3x(x-2)+(x-2)=(3x+1)(x-2)$. Vậy biểu thức bằng $3x+1$, nên $a=3$, $b=1$ và $a+b=4$.
:::

:::quiz
::mc
Biểu thức nào tương đương với $(x^2)^3\cdot x^4$?
A. $x^9$
B. $x^{10}$
C. $x^{24}$
D. $x^{14}$
::key B
$(x^2)^3=x^6$ và $x^6\cdot x^4=x^{10}$. Phương án C nhân cả ba số mũ.

::mc
Biểu thức nào tương đương với $4x^2-25$?
A. $(4x-5)(x+5)$
B. $(2x-5)^2$
C. $(4x-25)(x+1)$
D. $(2x-5)(2x+5)$
::key D
$4x^2-25=(2x)^2-5^2=(2x-5)(2x+5)$.

::mc
Biểu thức nào tương đương với $(x+3)^2$?
A. $x^2+9$
B. $x^2+3x+9$
C. $x^2+6x+9$
D. $x^2+6x+6$
::key C
$(x+3)^2=x^2+2\cdot3\cdot x+9$. Phương án A là lỗi quen thuộc: bình phương từng số hạng.

::mc
Với $x>0$, biểu thức nào tương đương với $x^{\frac12}\cdot x^{\frac13}$?
A. $\sqrt[6]{x^5}$
B. $\sqrt[6]{x}$
C. $\sqrt[5]{x^6}$
D. $x^{\frac16}$
::key A
$\dfrac12+\dfrac13=\dfrac56$ và $x^{\frac56}=\sqrt[6]{x^5}$. Phương án B và D nhân các số mũ.

::tf
Xét biểu thức $(x-1)(x+5)$.
a) Biểu thức tương đương với $x^2+4x-5$.
b) $x+1$ là một nhân tử của biểu thức.
c) Giá trị của biểu thức tại $x=1$ bằng $0$.
d) Biểu thức tương đương với $(x+2)^2-9$.
::key Đ S Đ Đ
a) Đúng: $x^2+5x-x-5$. b) Sai: các nhân tử là $x-1$ và $x+5$. c) Đúng: $0\cdot6=0$. d) Đúng: $x^2+4x+4-9=x^2+4x-5$.

::sa
Trong đẳng thức $(3x+2)(x+5)=3x^2+bx+10$, $b$ là hằng số và đẳng thức đúng với mọi $x$. Giá trị của $b$ bằng bao nhiêu?
::key 17
$(3x+2)(x+5)=3x^2+15x+2x+10=3x^2+17x+10$.

::sa
Nếu $a+b=7$ và $a-b=3$ thì giá trị của $a^2-b^2$ bằng bao nhiêu?
::key 21
$a^2-b^2=(a+b)(a-b)=7\cdot3=21$.
:::
