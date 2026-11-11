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
Giới hạn bằng $\cos\dfrac{\pi}{2}=0$: đáp án **B**.
:::

:::exercise Tự luận
Với $g(x)=5x^4-3x^2+\dfrac{4}{x^2}$, tính $g'(1)$.

::hint
**Kiến thức:** viết $\dfrac{4}{x^2}=4x^{-2}$.

**Gợi ý các bước:**
1. Lấy đạo hàm từng số hạng.
2. Thay $x=1$.

::solution
$g'(x)=20x^3-6x-8x^{-3}$, nên $g'(1)=20-6-8=6$.
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
$f'(0)=1+0=1$: đáp án **D**.
:::

:::exercise Tự luận
Với $f(x)=\dfrac{x}{x^2+1}$, tính $f'(1)$ và giải thích ý nghĩa.

::hint
**Kiến thức:** quy tắc thương.

**Gợi ý các bước:**
1. $f'(x)=\dfrac{(x^2+1)-x\cdot2x}{(x^2+1)^2}$.
2. Thay $x=1$.

::solution
$f'(x)=\dfrac{1-x^2}{(x^2+1)^2}$, nên $f'(1)=0$: tiếp tuyến tại $x=1$ nằm ngang. Thật ra $f$ đạt giá trị lớn nhất $\dfrac12$ tại đó.
:::

:::exercise Tự luận
Viết phương trình tiếp tuyến của $y=\ln x$ tại $x=1$.

::hint
**Kiến thức:** $y=f(a)+f'(a)(x-a)$.

**Gợi ý các bước:**
1. $\ln1=0$ và $\left.\dfrac1x\right|_{x=1}=1$.

::solution
$y=0+1\cdot(x-1)$, tức là $y=x-1$.
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
$3(t^2-4t+3)=3(t-1)(t-3)=0$, nên chất điểm đứng yên tại $t=1$ và $t=3$.
:::

:::exercise Tiếp tuyến nằm ngang
Tìm các điểm trên đồ thị $y=x^3-3x$ mà tại đó tiếp tuyến nằm ngang.

::hint
**Kiến thức:** tiếp tuyến nằm ngang nghĩa là $y'=0$.

**Gợi ý các bước:**
1. $y'=3x^2-3$.
2. Giải, rồi tìm các giá trị $y$.

::solution
$3x^2-3=0$ cho $x=\pm1$. Các điểm là $(1, -2)$ và $(-1, 2)$.
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
$h'(2)=(-1)(4)+(3)(5)=-4+15=11$.
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
Thay $b=2a$ vào $a=b-2$ được $a=2a-2$, nên $a=2$ và $b=4$. Kiểm tra: cả hai nhánh cho giá trị $2$ và hệ số góc $4$ tại $x=1$.
:::

:::quiz
::mc
$\dfrac{d}{dx}\left(x^5\right)$ bằng
A. $5x^4$
B. $x^4$
C. $5x^5$
D. $\dfrac{x^6}{6}$
::key A
Quy tắc luỹ thừa. Phương án D là một nguyên hàm.

::mc
$\dfrac{d}{dx}\left(\cos x\right)$ bằng
A. $\sin x$
B. $-\cos x$
C. $-\sin x$
D. $\sec^2x$
::key C
Đạo hàm của côsin là trừ sin.

::mc
Với $f(x)=x^2\ln x$, $f'(1)$ bằng
A. $0$
B. $1$
C. $2$
D. $e$
::key B
$f'(x)=2x\ln x+x$, nên $f'(1)=0+1=1$.

::mc
Hệ số góc của tiếp tuyến với $y=\sqrt x$ tại $x=4$ là
A. $2$
B. $\dfrac12$
C. $\dfrac18$
D. $\dfrac14$
::key D
$y'=\dfrac{1}{2\sqrt x}=\dfrac14$ tại $x=4$.

::tf
Cho $g(x)=x^3-3x$.
a) $g'(x)=3x^2-3$.
b) $g'(1)=0$.
c) Tiếp tuyến tại $x=2$ có hệ số góc $9$.
d) $g$ không có đạo hàm tại $x=0$.
::key Đ Đ Đ S
a) Đúng. b) Đúng. c) Đúng: $12-3=9$. d) Sai: đa thức có đạo hàm tại mọi điểm.

::sa
Tính $\displaystyle\lim_{h\to0}\frac{(3+h)^2-9}{h}$.
::key 6
Đây là $f'(3)$ với $f(x)=x^2$: $2\cdot3=6$.

::sa
Với $f(x)=\dfrac{x}{x+1}$, tính $f'(1)$. Viết đáp số dưới dạng số thập phân.
::key 0,25
$f'(x)=\dfrac{(x+1)-x}{(x+1)^2}=\dfrac{1}{(x+1)^2}$, nên $f'(1)=\dfrac14=0{,}25$.
:::
