---
title: Định nghĩa đạo hàm và các quy tắc tính
description: AP Calculus Unit 2: đạo hàm như một giới hạn, quy tắc luỹ thừa, tích, thương, đạo hàm hàm lượng giác, hàm mũ, hàm logarit và tiếp tuyến.
minutes: 40
---

:::goals
- Nhận ra định nghĩa đạo hàm bằng giới hạn và dùng nó để xác định $f'(a)$.
- Tính đạo hàm bằng quy tắc luỹ thừa, tổng, tích và thương.
- Dùng đạo hàm của $\sin x$, $\cos x$, $\tan x$, $e^x$ và $\ln x$.
- Viết phương trình tiếp tuyến, dùng nó để tính gần đúng, và giải thích vì sao có đạo hàm thì liên tục.
:::

Unit 2 biến ý tưởng giới hạn thành đạo hàm, tức tốc độ thay đổi tức thời. Phần lớn câu hỏi của unit này là câu trắc nghiệm làm nhanh ở phần không dùng máy tính, nhưng các kĩ năng này cần cho mọi câu tự luận, nên tính chính xác ở đây rất đáng giá. Học sinh Việt Nam biết các quy tắc từ lớp 11; kiểu đề AP bổ sung những câu **nguỵ trang** một đạo hàm thành một giới hạn.

## Đạo hàm như một giới hạn

:::theorem Định nghĩa đạo hàm
$$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.$$
$f'(a)$ là hệ số góc của tiếp tuyến với đồ thị $f$ tại $x=a$, và là tốc độ thay đổi tức thời của $f$ tại $a$.
:::

:::example Giới hạn nguỵ trang
$\displaystyle\lim_{h\to0}\frac{(2+h)^3-8}{h}$ bằng
A. $0$
B. $8$
C. $12$
D. Giới hạn không tồn tại.

**Lời giải.** Đây là định nghĩa của $f'(2)$ với $f(x)=x^3$, vì $f(2)=8$. Do $f'(x)=3x^2$ nên giới hạn bằng $3\cdot4=12$. Đáp án là **C**. Nhận ra khuôn mẫu nhanh hơn nhiều so với khai triển $(2+h)^3$.
:::

## Các quy tắc cơ bản

:::note Quy tắc cần thuộc
| Hàm số | Đạo hàm |
|---|---|
| $x^n$ ($n$ thực bất kì) | $nx^{n-1}$ |
| $\sin x$, $\cos x$, $\tan x$ | $\cos x$, $-\sin x$, $\sec^2x$ |
| $e^x$, $\ln x$ | $e^x$, $\dfrac1x$ |
| $f\cdot g$ (quy tắc tích) | $f'g+fg'$ |
| $\dfrac fg$ (quy tắc thương) | $\dfrac{f'g-fg'}{g^2}$ |
:::

:::example Quy tắc luỹ thừa với số mũ âm và số mũ phân số
Với $f(x)=4x^3-\dfrac2x+\sqrt x$, tính $f'(1)$.

**Lời giải.** Viết $f(x)=4x^3-2x^{-1}+x^{\frac12}$. Khi đó $f'(x)=12x^2+2x^{-2}+\dfrac12x^{-\frac12}$, và $f'(1)=12+2+\dfrac12=14{,}5$.
:::

:::example Quy tắc tích
$\dfrac{d}{dx}\left(x^2\sin x\right)$ bằng
A. $2x\cos x$
B. $2x\sin x+x^2\cos x$
C. $2x\sin x-x^2\cos x$
D. $x^2\cos x$

**Lời giải.** $(x^2)'\sin x+x^2(\sin x)'=2x\sin x+x^2\cos x$: đáp án **B**. Phương án A nhân hai đạo hàm với nhau, không bao giờ là quy tắc đúng.
:::

:::example Quy tắc thương
Với $f(x)=\dfrac{2x+1}{x-3}$, tính $f'(4)$.

**Lời giải.** $f'(x)=\dfrac{2(x-3)-(2x+1)\cdot1}{(x-3)^2}=\dfrac{-7}{(x-3)^2}$, nên $f'(4)=-7$.
:::

## Tiếp tuyến và xấp xỉ tuyến tính địa phương

Tiếp tuyến của $y=f(x)$ tại $x=a$ là $y=f(a)+f'(a)(x-a)$. Gần $a$, tiếp tuyến xấp xỉ tốt cho $f$.

:::example Tính gần đúng bằng tiếp tuyến
Viết phương trình tiếp tuyến của $y=e^x$ tại $x=0$, và dùng nó để tính gần đúng $e^{0{,}1}$.

**Lời giải.** $f(0)=1$ và $f'(0)=e^0=1$, nên tiếp tuyến là $y=1+x$. Khi đó $e^{0{,}1}\approx1+0{,}1=1{,}1$. (Giá trị thật khoảng $1{,}105$; vì $e^x$ lõm lên nên tiếp tuyến nằm dưới đường cong và phép xấp xỉ cho giá trị nhỏ hơn giá trị thật.)
:::

:::graph $y=e^x$ và tiếp tuyến $y=1+x$ tại $x=0$
alt: Đường cong hàm mũ đi lên từ trái sang phải và một đường thẳng tiếp xúc với nó tại điểm (0, 1)
x: -2..2
y: -1..5
plot: exp(x)
plot: 1 + x
point: (0, 1) "(0, 1)" above-left
:::

## Có đạo hàm và liên tục

:::theorem Có đạo hàm thì liên tục
Nếu $f$ có đạo hàm tại $x=a$ thì $f$ liên tục tại $x=a$. Điều ngược lại sai: một hàm số có thể liên tục tại một điểm nhưng không có đạo hàm tại đó, tại một **điểm góc** (corner), **điểm lùi** (cusp) hoặc nơi có **tiếp tuyến thẳng đứng**.
:::

:::example Một điểm góc
Khẳng định nào về $f(x)=|x-2|$ tại $x=2$ là đúng?
A. $f$ không liên tục và không có đạo hàm.
B. $f$ có đạo hàm nhưng không liên tục.
C. $f$ liên tục nhưng không có đạo hàm.
D. $f$ liên tục và có đạo hàm.

**Lời giải.** Đồ thị là hình chữ V có góc tại $(2, 0)$: không bị đứt nên $f$ liên tục, nhưng hệ số góc nhảy từ $-1$ sang $1$, nên $f'(2)$ không tồn tại. Đáp án là **C**. Phương án B không thể xảy ra theo định lí.
:::

:::warning Những cái bẫy thường gặp
- **Nhân các đạo hàm.** $(fg)'\ne f'g'$ và $\left(\dfrac fg\right)'\ne\dfrac{f'}{g'}$.
- **Thứ tự trong quy tắc thương.** Tử số là $f'g-fg'$; đảo ngược sẽ đổi dấu.
- **$\dfrac{d}{dx}\cos x=-\sin x$.** Dấu trừ là chỗ mất điểm nhiều nhất.
- **Hằng số.** $\dfrac{d}{dx}e^2=0$, vì $e^2$ là một số.
:::

:::tip Đạo hàm số trên máy tính
Ở các phần được dùng máy, máy tính đồ thị tính được $f'(a)$ bằng phương pháp số. Hãy dùng để kiểm tra phần tính tay, hoặc khi đạo hàm rối mà chỉ cần giá trị của nó.
:::

:::terms
- đạo hàm | derivative
- tỉ số gia số | difference quotient
- tốc độ thay đổi tức thời | instantaneous rate of change
- tiếp tuyến | tangent line
- quy tắc luỹ thừa / tích / thương | power / product / quotient rule
- xấp xỉ tuyến tính địa phương | local linear approximation
- có đạo hàm (khả vi) | differentiable
- điểm góc / điểm lùi | corner / cusp
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
$\displaystyle\lim_{h\to0}\frac{\sin\left(\frac{\pi}{2}+h\right)-1}{h}$ bằng
A. $-1$
B. $0$
C. $1$
D. Giới hạn không tồn tại.

::hint
**Kiến thức:** nhận ra $f'(a)$ với $f(x)=\sin x$ và $a=\dfrac{\pi}{2}$.

**Gợi ý các bước:**
1. $\sin\dfrac{\pi}{2}=1$.
2. $f'(x)=\cos x$.

::solution
Đặt $f(x)=\sin x$. Vì $f\left(\dfrac{\pi}{2}\right)=\sin\dfrac{\pi}{2}=1$ nên theo định nghĩa đạo hàm tại $x=\dfrac{\pi}{2}$, ta có
$$f'\left(\frac{\pi}{2}\right)=\lim_{h\to0}\frac{f\left(\frac{\pi}{2}+h\right)-f\left(\frac{\pi}{2}\right)}{h}=\lim_{h\to0}\frac{\sin\left(\frac{\pi}{2}+h\right)-1}{h}.$$

Do đó giới hạn đã cho chính là $f'\left(\dfrac{\pi}{2}\right)$. Vì $f'(x)=\cos x$ nên
$$f'\left(\frac{\pi}{2}\right)=\cos\frac{\pi}{2}=0.$$

Vậy chọn **B**.

**Đáp số.** B.
:::

:::exercise Tự luận
Với $g(x)=5x^4-3x^2+\dfrac{4}{x^2}$, tính $g'(1)$.

::hint
**Kiến thức:** viết $\dfrac{4}{x^2}=4x^{-2}$.

**Gợi ý các bước:**
1. Lấy đạo hàm từng số hạng.
2. Thay $x=1$.

::solution
Viết lại $g(x)=5x^4-3x^2+4x^{-2}$ để áp dụng quy tắc đạo hàm của luỹ thừa $\left(x^n\right)'=nx^{n-1}$.

Ta có
$$g'(x)=5\cdot4x^3-3\cdot2x+4\cdot(-2)x^{-3}=20x^3-6x-8x^{-3}.$$

Thay $x=1$ vào, ta được
$$g'(1)=20-6-8=6.$$

Vậy $g'(1)=6$.

**Đáp số.** $6$.
:::

:::exercise Trắc nghiệm
Với $f(x)=xe^x$, $f'(0)$ bằng
A. $0$
B. $e$
C. $2$
D. $1$

::hint
**Kiến thức:** quy tắc tích.

**Gợi ý các bước:**
1. $f'(x)=e^x+xe^x$.

::solution
Áp dụng quy tắc đạo hàm của một tích $(uv)'=u'v+uv'$ với $u=x$ và $v=e^x$, ta có
$$f'(x)=(x)'e^x+x\left(e^x\right)'=e^x+xe^x.$$

Thay $x=0$ vào, ta được
$$f'(0)=e^0+0\cdot e^0=1+0=1.$$

Vậy chọn **D**.

**Đáp số.** D.
:::

:::exercise Tự luận
Với $f(x)=\dfrac{x}{x^2+1}$, tính $f'(1)$ và giải thích ý nghĩa.

::hint
**Kiến thức:** quy tắc thương.

**Gợi ý các bước:**
1. $f'(x)=\dfrac{(x^2+1)-x\cdot2x}{(x^2+1)^2}$.
2. Thay $x=1$.

::solution
Vì $x^2+1>0$ với mọi $x$ nên hàm số xác định trên $\mathbb{R}$.

Áp dụng quy tắc đạo hàm của một thương $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$ với $u=x$ và $v=x^2+1$, ta có
$$f'(x)=\frac{1\cdot\left(x^2+1\right)-x\cdot2x}{\left(x^2+1\right)^2}=\frac{1-x^2}{\left(x^2+1\right)^2}.$$

Thay $x=1$ vào, ta được
$$f'(1)=\frac{1-1^2}{\left(1^2+1\right)^2}=0.$$

Ý nghĩa: $f'(1)$ là hệ số góc của tiếp tuyến của đồ thị tại điểm có hoành độ $x=1$. Vì $f'(1)=0$ nên tiếp tuyến tại đó nằm ngang.

Thật ra, $f(1)=\dfrac12$ và với mọi $x$ ta có
$$\frac12-f(x)=\frac{x^2+1-2x}{2\left(x^2+1\right)}=\frac{(x-1)^2}{2\left(x^2+1\right)}\ge0,$$
nên $f(x)\le\dfrac12$. Do đó $f$ đạt giá trị lớn nhất $\dfrac12$ tại $x=1$.

Vậy $f'(1)=0$: tiếp tuyến của đồ thị tại $x=1$ nằm ngang, và $f$ đạt giá trị lớn nhất $\dfrac12$ tại điểm đó.

**Đáp số.** $f'(1)=0$; tiếp tuyến tại $x=1$ nằm ngang.
:::

:::exercise Tự luận
Viết phương trình tiếp tuyến của $y=\ln x$ tại $x=1$.

::hint
**Kiến thức:** $y=f(a)+f'(a)(x-a)$.

**Gợi ý các bước:**
1. $\ln1=0$ và $\left.\dfrac1x\right|_{x=1}=1$.

::solution
Hàm số $y=\ln x$ xác định với $x>0$ và có đạo hàm $y'=\dfrac1x$.

Tại $x=1$, ta có $y(1)=\ln1=0$ và $y'(1)=\dfrac11=1$.

Phương trình tiếp tuyến tại điểm có hoành độ $x_0$ là $y=y(x_0)+y'(x_0)(x-x_0)$. Với $x_0=1$, ta được
$$y=0+1\cdot(x-1),\ \text{tức là}\ y=x-1.$$

Vậy tiếp tuyến của đồ thị $y=\ln x$ tại $x=1$ có phương trình $y=x-1$.

**Đáp số.** $y=x-1$.
:::

## Bài tập vận dụng

:::exercise Chuyển động của chất điểm
Một chất điểm chuyển động trên một đường thẳng với vị trí $s(t)=t^3-6t^2+9t$ khi $t\ge0$. Vào những thời điểm nào chất điểm đứng yên?

::hint
**Kiến thức:** đứng yên nghĩa là vận tốc $v(t)=s'(t)=0$.

**Gợi ý các bước:**
1. $v(t)=3t^2-12t+9$.
2. Giải $v(t)=0$.

::solution
Vận tốc của chất điểm tại thời điểm $t$ là
$$v(t)=s'(t)=3t^2-12t+9.$$

Chất điểm đứng yên khi $v(t)=0$ (với $t\ge0$). Ta có
$$\begin{aligned}3t^2-12t+9=0&\iff3\left(t^2-4t+3\right)=0\\&\iff3(t-1)(t-3)=0\\&\iff t=1\ \text{hoặc}\ t=3.\end{aligned}$$

Cả hai giá trị đều thoả mãn điều kiện $t\ge0$.

Vậy chất điểm đứng yên tại các thời điểm $t=1$ và $t=3$.

**Đáp số.** $t=1$ và $t=3$.
:::

:::exercise Tiếp tuyến nằm ngang
Tìm các điểm trên đồ thị $y=x^3-3x$ mà tại đó tiếp tuyến nằm ngang.

::hint
**Kiến thức:** tiếp tuyến nằm ngang nghĩa là $y'=0$.

**Gợi ý các bước:**
1. $y'=3x^2-3$.
2. Giải, rồi tìm các giá trị $y$.

::solution
Ta có $y'=3x^2-3$. Tiếp tuyến tại điểm có hoành độ $x$ nằm ngang khi và chỉ khi hệ số góc $y'=0$.

Giải phương trình
$$3x^2-3=0\iff x^2=1\iff x=1\ \text{hoặc}\ x=-1.$$

Tính tung độ các điểm tương ứng:
$$y(1)=1^3-3\cdot1=-2,\qquad y(-1)=(-1)^3-3\cdot(-1)=-1+3=2.$$

Vậy các điểm trên đồ thị có tiếp tuyến nằm ngang là $(1; -2)$ và $(-1; 2)$.

**Đáp số.** $(1; -2)$ và $(-1; 2)$.
:::

:::exercise Dùng bảng giá trị
Bảng cho giá trị của các hàm số có đạo hàm $f$ và $g$ tại $x=2$.

| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |
|---|---|---|---|---|
| $2$ | $3$ | $-1$ | $4$ | $5$ |

Đặt $h(x)=f(x)g(x)$. Tính $h'(2)$.

::hint
**Kiến thức:** quy tắc tích với các giá trị trong bảng.

**Gợi ý các bước:**
1. $h'(2)=f'(2)g(2)+f(2)g'(2)$.

::solution
Theo quy tắc đạo hàm của một tích, với $h(x)=f(x)g(x)$ ta có
$$h'(x)=f'(x)g(x)+f(x)g'(x).$$

Thay $x=2$ và các giá trị trong bảng $f(2)=3$, $f'(2)=-1$, $g(2)=4$, $g'(2)=5$, ta được
$$h'(2)=f'(2)g(2)+f(2)g'(2)=(-1)(4)+(3)(5)=-4+15=11.$$

Vậy $h'(2)=11$.

**Đáp số.** $11$.
:::

:::exercise Thử thách
$$f(x)=\begin{cases}ax^2, & x\le1\\ bx-2, & x>1\end{cases}$$
Tìm $a$ và $b$ để $f$ có đạo hàm tại $x=1$.

::hint
**Kiến thức:** có đạo hàm tại $1$ đòi hỏi cả liên tục lẫn hai đạo hàm một bên bằng nhau.

**Gợi ý các bước:**
1. Liên tục: $a=b-2$.
2. Hệ số góc bằng nhau: $2a=b$.

::solution
Hàm số $f$ có đạo hàm tại $x=1$ khi và chỉ khi $f$ liên tục tại $x=1$ và đạo hàm bên trái bằng đạo hàm bên phải tại $x=1$.

Điều kiện liên tục: ta có $f(1)=a\cdot1^2=a$ và
$$\lim_{x\to1^-}f(x)=a,\qquad\lim_{x\to1^+}f(x)=b\cdot1-2=b-2.$$
Hai giới hạn một bên phải bằng nhau, nên $a=b-2$. (1)

Điều kiện đạo hàm: với $x<1$ ta có $f'(x)=2ax$, nên đạo hàm bên trái tại $1$ bằng $2a$; với $x>1$ ta có $f'(x)=b$, nên đạo hàm bên phải tại $1$ bằng $b$. Do đó $b=2a$. (2)

Thay (2) vào (1), ta được
$$a=2a-2\iff a=2.$$
Suy ra $b=2a=4$.

Kiểm tra: với $a=2$, $b=4$, cả hai nhánh cho giá trị $2$ tại $x=1$ (vì $a=2$ và $b-2=2$) và cùng hệ số góc $4$ (vì $2a=4=b$).

Vậy $a=2$ và $b=4$.

**Đáp số.** $a=2$, $b=4$.
:::

:::quiz
::mc NB
$\dfrac{d}{dx}\left(x^5\right)$ bằng
A. $5x^4$
B. $x^4$
C. $5x^5$
D. $\dfrac{x^6}{6}$
::key A
Quy tắc luỹ thừa. Phương án D là một nguyên hàm.

::mc NB
$\dfrac{d}{dx}\left(\cos x\right)$ bằng
A. $\sin x$
B. $-\cos x$
C. $-\sin x$
D. $\sec^2x$
::key C
Đạo hàm của côsin là trừ sin.

::mc TH
Với $f(x)=x^2\ln x$, $f'(1)$ bằng
A. $0$
B. $1$
C. $2$
D. $e$
::key B
$f'(x)=2x\ln x+x$, nên $f'(1)=0+1=1$.

::mc TH
Hệ số góc của tiếp tuyến với $y=\sqrt x$ tại $x=4$ là
A. $2$
B. $\dfrac12$
C. $\dfrac18$
D. $\dfrac14$
::key D
$y'=\dfrac{1}{2\sqrt x}=\dfrac14$ tại $x=4$.

::tf NB TH TH TH
Cho $g(x)=x^3-3x$.
a) $g'(x)=3x^2-3$.
b) $g'(1)=0$.
c) Tiếp tuyến tại $x=2$ có hệ số góc $9$.
d) $g$ không có đạo hàm tại $x=0$.
::key Đ Đ Đ S
a) Đúng. b) Đúng. c) Đúng: $12-3=9$. d) Sai: đa thức có đạo hàm tại mọi điểm.

::sa TH
Tính $\displaystyle\lim_{h\to0}\frac{(3+h)^2-9}{h}$.
::key 6
Đây là $f'(3)$ với $f(x)=x^2$: $2\cdot3=6$.

::sa VD
Với $f(x)=\dfrac{x}{x+1}$, tính $f'(1)$. Viết đáp số dưới dạng số thập phân.
::key 0,25
$f'(x)=\dfrac{(x+1)-x}{(x+1)^2}=\dfrac{1}{(x+1)^2}$, nên $f'(1)=\dfrac14=0{,}25$.
:::
