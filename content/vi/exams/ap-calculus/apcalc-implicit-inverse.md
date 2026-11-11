---
title: Đạo hàm hàm hợp, hàm ẩn và hàm ngược
description: AP Calculus Unit 3: quy tắc đạo hàm hàm hợp, đạo hàm hàm ẩn, đạo hàm của hàm ngược và hàm lượng giác ngược, đạo hàm cấp cao.
minutes: 40
---

:::goals
- Tính đạo hàm hàm hợp bằng quy tắc chuỗi, kể cả từ bảng giá trị.
- Tìm $\dfrac{dy}{dx}$ bằng đạo hàm hàm ẩn và dùng nó để viết tiếp tuyến.
- Tính đạo hàm của hàm ngược tại một điểm.
- Tính đạo hàm của hàm lượng giác ngược và đạo hàm cấp hai.
:::

Unit 3 hoàn thiện bộ công cụ tính đạo hàm. Từ đây trở đi, quy tắc chuỗi có mặt trong gần như mọi câu AP Calculus, thường ẩn trong một bối cảnh hay một bảng giá trị, còn đạo hàm hàm ẩn là chìa khoá cho các bài tốc độ liên quan ở Unit 4. Đạo hàm của hàm ngược tại một điểm là câu trắc nghiệm được ưa chuộng mà nhiều bạn thấy lạ, nên đáng luyện đến mức thành phản xạ.

## Quy tắc chuỗi

:::theorem Quy tắc chuỗi
Nếu $h(x)=f\big(g(x)\big)$ thì $h'(x)=f'\big(g(x)\big)\cdot g'(x)$: đạo hàm của hàm ngoài, tính tại hàm trong, nhân với đạo hàm của hàm trong.
:::

:::example Luỹ thừa của một đa thức
$\dfrac{d}{dx}\left(3x^2+1\right)^4$ bằng
A. $4\left(3x^2+1\right)^3$
B. $24x\left(3x^2+1\right)^3$
C. $4(6x)^3$
D. $6x\left(3x^2+1\right)^4$

**Lời giải.** Hàm ngoài: $u^4\to4u^3$; hàm trong: $3x^2+1\to6x$. Vậy đạo hàm là $4\left(3x^2+1\right)^3\cdot6x=24x\left(3x^2+1\right)^3$: đáp án **B**. Phương án A quên đạo hàm hàm trong.
:::

:::example Quy tắc chuỗi từ bảng giá trị
Bảng cho giá trị của các hàm số có đạo hàm $f$ và $g$.

| $x$ | $g(x)$ | $g'(x)$ | $f'(x)$ |
|---|---|---|---|
| $1$ | $2$ | $3$ | $5$ |
| $2$ | $4$ | $-1$ | $-4$ |

Đặt $h(x)=f\big(g(x)\big)$. Tính $h'(1)$.

**Lời giải.** $h'(1)=f'\big(g(1)\big)\cdot g'(1)=f'(2)\cdot3=(-4)(3)=-12$. Cái bẫy là dùng $f'(1)=5$: đạo hàm hàm ngoài được tính tại $g(1)$, không phải tại $1$.
:::

## Đạo hàm hàm ẩn

Khi $y$ được xác định bởi một phương trình chứa $x$ và $y$, hãy lấy đạo hàm hai vế theo $x$, coi $y$ là hàm của $x$: mỗi lần lấy đạo hàm một biểu thức chứa $y$, nhân thêm $\dfrac{dy}{dx}$. Sau đó giải tìm $\dfrac{dy}{dx}$.

:::example Hệ số góc trên đường tròn
Tìm hệ số góc của tiếp tuyến với đường tròn $x^2+y^2=25$ tại điểm $(3, 4)$.

**Lời giải.** $2x+2y\dfrac{dy}{dx}=0$, nên $\dfrac{dy}{dx}=-\dfrac{x}{y}$. Tại $(3, 4)$ hệ số góc là $-\dfrac34$. Kết quả khớp với hình học: tiếp tuyến vuông góc với bán kính, mà bán kính có hệ số góc $\dfrac43$.
:::

:::example Phương trình có chứa tích
Đường cong $x^2+xy+y^2=7$ đi qua $(1, 2)$. Tính $\dfrac{dy}{dx}$ tại điểm này.

**Lời giải.** Lấy đạo hàm, dùng quy tắc tích cho $xy$:

$$2x+\left(y+x\frac{dy}{dx}\right)+2y\frac{dy}{dx}=0.$$

Tại $(1, 2)$: $2+2+(1+4)\dfrac{dy}{dx}=0$, nên $\dfrac{dy}{dx}=-\dfrac45$.
:::

## Hàm ngược

:::theorem Đạo hàm của hàm ngược
Nếu $f$ có đạo hàm và là đơn ánh, $f(a)=b$ và $f'(a)\ne0$, thì
$$\left(f^{-1}\right)'(b)=\frac{1}{f'(a)}.$$
Hệ số góc tại các điểm tương ứng của $f$ và $f^{-1}$ là nghịch đảo của nhau.
:::

:::example Không cần tìm hàm ngược
Cho $f(x)=x^3+x+1$. Giá trị của $\left(f^{-1}\right)'(3)$ là
A. $\dfrac14$
B. $\dfrac{1}{28}$
C. $4$
D. $28$

**Lời giải.** Trước hết tìm $a$ với $f(a)=3$: $a^3+a+1=3$ cho $a=1$. Khi đó $f'(x)=3x^2+1$, nên $f'(1)=4$ và $\left(f^{-1}\right)'(3)=\dfrac14$. Đáp án là **A**. Phương án B dùng $f'(3)=28$, lỗi kinh điển.
:::

:::note Hàm lượng giác ngược
$$\frac{d}{dx}\arcsin x=\frac{1}{\sqrt{1-x^2}},\qquad\frac{d}{dx}\arccos x=-\frac{1}{\sqrt{1-x^2}},\qquad\frac{d}{dx}\arctan x=\frac{1}{1+x^2}.$$
Kết hợp quy tắc chuỗi: $\dfrac{d}{dx}\arctan(2x)=\dfrac{2}{1+4x^2}$.
:::

:::example Đạo hàm cấp cao
Với $y=x^4-2x^2$, tính $\dfrac{d^2y}{dx^2}$ tại $x=1$.

**Lời giải.** $y'=4x^3-4x$ và $y''=12x^2-4$, nên $y''(1)=8$. Đạo hàm cấp hai sẽ được dùng ở Unit 5 để xét tính lồi lõm.
:::

:::warning Những cái bẫy thường gặp
- **Quên đạo hàm hàm trong.** $\dfrac{d}{dx}\sin(5x)=5\cos(5x)$, không phải $\cos(5x)$.
- **Tính đạo hàm hàm ngoài sai điểm.** $h'(1)=f'\big(g(1)\big)g'(1)$, không phải $f'(1)g'(1)$.
- **Quên $\dfrac{dy}{dx}$ ở các số hạng chứa $y$** khi đạo hàm hàm ẩn: $\dfrac{d}{dx}y^2=2y\dfrac{dy}{dx}$.
- **Đạo hàm hàm ngược sai đầu vào.** Với $\left(f^{-1}\right)'(b)$, trước hết giải $f(a)=b$, rồi dùng $f'(a)$.
:::

:::tip Sắp xếp hàm hợp
Trước khi lấy đạo hàm, hãy gọi tên các lớp: "ngoài là $\ln u$, trong là $u=x^2+1$". Viết hàm trong ra bên lề tốn ít thời gian hơn nhiều so với thời gian nó tiết kiệm được, và tránh được lỗi quy tắc chuỗi thường gặp nhất.
:::

:::terms
- hàm hợp | composite function
- quy tắc đạo hàm hàm hợp (quy tắc chuỗi) | chain rule
- đạo hàm hàm ẩn | implicit differentiation
- hàm ngược | inverse function
- đơn ánh (một đối một) | one-to-one
- hàm lượng giác ngược | inverse trigonometric function
- đạo hàm cấp hai | second derivative
:::

## Bài tập tương tự

:::exercise Tự luận
Với $f(x)=\sqrt{x^2+9}$, tính $f'(4)$.

::hint
**Kiến thức:** quy tắc chuỗi với hàm ngoài $\sqrt u$ và hàm trong $u=x^2+9$.

**Gợi ý các bước:**
1. $f'(x)=\dfrac{2x}{2\sqrt{x^2+9}}$.
2. Thay $x=4$.

::solution
$f'(x)=\dfrac{x}{\sqrt{x^2+9}}$, nên $f'(4)=\dfrac45$.
:::

:::exercise Trắc nghiệm
Với $g(x)=\ln\left(x^2+1\right)$, $g'(1)$ bằng
A. $\dfrac12$
B. $1$
C. $2$
D. $\ln2$

::hint
**Kiến thức:** $\dfrac{d}{dx}\ln u=\dfrac{u'}{u}$.

**Gợi ý các bước:**
1. $g'(x)=\dfrac{2x}{x^2+1}$.

::solution
$g'(1)=\dfrac22=1$: đáp án **B**. Phương án D là $g(1)$.
:::

:::exercise Tự luận
Tìm hệ số góc của đường cong $xy=6$ tại điểm $(2, 3)$ bằng đạo hàm hàm ẩn.

::hint
**Kiến thức:** quy tắc tích cho $xy$.

**Gợi ý các bước:**
1. $y+x\dfrac{dy}{dx}=0$.
2. Thay toạ độ điểm.

::solution
$\dfrac{dy}{dx}=-\dfrac yx=-\dfrac32$ tại $(2, 3)$.
:::

:::exercise Trắc nghiệm
Cho $f(x)=2x+e^x$. $\left(f^{-1}\right)'(1)$ bằng
A. $\dfrac{1}{2+e}$
B. $3$
C. $\dfrac13$
D. $2+e$

::hint
**Kiến thức:** tìm $a$ với $f(a)=1$ trước.

**Gợi ý các bước:**
1. $f(0)=0+1=1$, nên $a=0$.
2. $f'(x)=2+e^x$.

::solution
$f'(0)=3$, nên $\left(f^{-1}\right)'(1)=\dfrac13$: đáp án **C**. Phương án A dùng $f'(1)$.
:::

:::exercise Tự luận
Với $y=\arcsin\left(\dfrac x2\right)$, tính $\dfrac{dy}{dx}$ tại $x=1$.

::hint
**Kiến thức:** $\dfrac{d}{dx}\arcsin u=\dfrac{u'}{\sqrt{1-u^2}}$.

**Gợi ý các bước:**
1. $u=\dfrac x2$, $u'=\dfrac12$.
2. Thay $x=1$.

::solution
$\dfrac{dy}{dx}=\dfrac{\frac12}{\sqrt{1-\frac{x^2}{4}}}$, nên tại $x=1$: $\dfrac{\frac12}{\sqrt{\frac34}}=\dfrac{1}{\sqrt3}=\dfrac{\sqrt3}{3}$.
:::

## Bài tập vận dụng

:::exercise Tiếp tuyến của đường tròn
Viết phương trình tiếp tuyến của $x^2+y^2=10$ tại $(1, 3)$.

::hint
**Kiến thức:** $\dfrac{dy}{dx}=-\dfrac xy$ từ đạo hàm hàm ẩn.

**Gợi ý các bước:**
1. Hệ số góc tại $(1, 3)$ là $-\dfrac13$.
2. Dùng dạng điểm – hệ số góc.

::solution
$y-3=-\dfrac13(x-1)$, tức là $y=-\dfrac13x+\dfrac{10}{3}$.
:::

:::exercise Hàm ngược từ dữ kiện
Hàm số $f$ có đạo hàm và là đơn ánh, với $f(3)=5$ và $f'(3)=2$. Đặt $g=f^{-1}$. Tính $g(5)$ và $g'(5)$, rồi viết tiếp tuyến của $g$ tại $x=5$.

::hint
**Kiến thức:** $g(5)=3$ vì $f(3)=5$; các hệ số góc là nghịch đảo của nhau.

**Gợi ý các bước:**
1. $g'(5)=\dfrac{1}{f'(3)}$.

::solution
$g(5)=3$ và $g'(5)=\dfrac12$. Tiếp tuyến là $y=3+\dfrac12(x-5)$.
:::

:::exercise Đạo hàm cấp hai của hàm ẩn
Với đường cong $x^2+y^2=25$, chứng minh $\dfrac{d^2y}{dx^2}=-\dfrac{25}{y^3}$.

::hint
**Kiến thức:** lấy đạo hàm $\dfrac{dy}{dx}=-\dfrac xy$ bằng quy tắc thương, rồi thay vào.

**Gợi ý các bước:**
1. $\dfrac{d^2y}{dx^2}=-\dfrac{y-x\frac{dy}{dx}}{y^2}$.
2. Thay $\dfrac{dy}{dx}$ bằng $-\dfrac xy$ và dùng $x^2+y^2=25$.

::solution
$\dfrac{d^2y}{dx^2}=-\dfrac{y+\frac{x^2}{y}}{y^2}=-\dfrac{y^2+x^2}{y^3}=-\dfrac{25}{y^3}$.
:::

:::exercise Thử thách
Cho $h(x)=f\big(g(x)\big)$, trong đó $g(x)=x^2+1$ và $f'(5)=3$. Tính $h'(2)$, rồi tính giá trị của $\dfrac{d}{dx}\Big[h(x)\Big]^2$ tại $x=2$, biết $f(5)=-1$.

::hint
**Kiến thức:** dùng quy tắc chuỗi hai lần.

**Gợi ý các bước:**
1. $h'(2)=f'\big(g(2)\big)g'(2)$ với $g(2)=5$, $g'(2)=4$.
2. $\dfrac{d}{dx}h^2=2h\cdot h'$ và $h(2)=f(5)$.

::solution
$h'(2)=3\cdot4=12$. Khi đó $\dfrac{d}{dx}h(x)^2=2h(x)h'(x)$, tại $x=2$ bằng $2\cdot(-1)\cdot12=-24$.
:::

:::quiz
::mc
$\dfrac{d}{dx}\sin(5x)$ bằng
A. $\cos(5x)$
B. $5\cos(5x)$
C. $-5\cos(5x)$
D. $5\sin(5x)$
::key B
Quy tắc chuỗi: đạo hàm hàm trong là $5$.

::mc
$\dfrac{d}{dx}e^{x^2}$ bằng
A. $2xe^{x^2}$
B. $e^{x^2}$
C. $x^2e^{x^2-1}$
D. $e^{2x}$
::key A
Hàm ngoài $e^u$, hàm trong $x^2$ có đạo hàm $2x$.

::mc
Hệ số góc của đường cong $x^2+y^2=13$ tại $(2, 3)$ là
A. $\dfrac23$
B. $-\dfrac32$
C. $\dfrac32$
D. $-\dfrac23$
::key D
$\dfrac{dy}{dx}=-\dfrac xy=-\dfrac23$.

::mc
$\dfrac{d}{dx}\arctan x$ bằng
A. $\dfrac{1}{\sqrt{1-x^2}}$
B. $\sec^2x$
C. $\dfrac{1}{1+x^2}$
D. $-\dfrac{1}{1+x^2}$
::key C
Phương án B là đạo hàm của $\tan x$; phương án A là đạo hàm của $\arcsin x$.

::tf
Các hàm số $f$ và $g$ có đạo hàm, với $g(2)=1$, $g'(2)=4$, $f(1)=3$ và $f'(1)=-2$. Đặt $h(x)=f\big(g(x)\big)$.
a) $h(2)=3$.
b) $h'(2)=-8$.
c) $h'(2)=f'\big(g'(2)\big)$.
d) Tiếp tuyến của $h$ tại $x=2$ là $y=3-8(x-2)$.
::key Đ Đ S Đ
a) Đúng: $f(g(2))=f(1)=3$. b) Đúng: $f'(1)\cdot g'(2)=-8$. c) Sai: đó không phải quy tắc chuỗi. d) Đúng.

::sa
Cho $f(x)=x^3+2x$. Tính $\left(f^{-1}\right)'(3)$. Viết đáp số dưới dạng số thập phân.
::key 0,2
$f(1)=3$ và $f'(1)=3+2=5$, nên đáp số là $\dfrac15=0{,}2$.

::sa
Tính đạo hàm của $(2x+1)^3$ tại $x=0$.
::key 6
$3(2x+1)^2\cdot2=6$ tại $x=0$.
:::
