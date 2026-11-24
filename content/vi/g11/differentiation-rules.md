---
title: Các quy tắc tính đạo hàm
description: Nắm đạo hàm của các hàm số thường gặp và các quy tắc tổng, hiệu, tích, thương, hàm hợp để tính đạo hàm nhanh và viết phương trình tiếp tuyến.
minutes: 25
---

:::goals
- Nhớ đạo hàm của hàm hằng, luỹ thừa, căn thức, hàm mũ và hàm lôgarit.
- Dùng quy tắc tổng, hiệu, tích, thương và quy tắc hàm hợp để tính đạo hàm.
- Viết được phương trình tiếp tuyến và tìm điểm có tiếp tuyến nằm ngang bằng quy tắc.
- Vận dụng đạo hàm vào các bài toán chuyển động, tăng trưởng và lợi nhuận.
:::

Giả sử một vật chuyển động trên đường thẳng, sau $t$ giây ở cách gốc $s(t)=t^3-6t^2+9t$ mét (số liệu giả định). Ta có $s(1)=4$, $s(2)=2$, $s(3)=0$, $s(4)=4$. Vật đi tới rồi lùi lại rồi lại đi tới. Nếu tính vận tốc từng lúc bằng định nghĩa thì mỗi lần phải lập một giới hạn dài. Có cách nào tính nhanh vận tốc ở mọi thời điểm, và biết khi nào vật đứng yên tức thời?

## Khám phá: tìm quy luật

Dùng định nghĩa, ta tính $(x^n)'$ cho vài giá trị $n$: rút gọn thương $\dfrac{x^n-x_0^n}{x-x_0}$ rồi cho $x\to x_0$.

| Hàm số | $x^2$ | $x^3$ | $x^4$ |
|---|---|---|---|
| Thương $\dfrac{x^n-x_0^n}{x-x_0}$ | $x+x_0$ | $x^2+xx_0+x_0^2$ | $x^3+x^2x_0+xx_0^2+x_0^3$ |
| Đạo hàm tại $x_0$ | $2x_0$ | $3x_0^2$ | $4x_0^3$ |

Quy luật rõ ràng: đạo hàm của $x^n$ là $nx^{n-1}$. Ta sẽ gom quy luật này và các quy tắc khác thành một bộ công thức.

## Đạo hàm của các hàm số thường gặp

:::theorem Bảng đạo hàm
Với $c$, $a$ là hằng số ($a>0$, $a\neq1$):
- $(c)'=0$, $(x)'=1$.
- $(x^n)'=nx^{n-1}$ ($n\in\mathbb{N}^*$).
- $(\sqrt x)'=\dfrac1{2\sqrt x}$ ($x>0$), $\left(\dfrac1x\right)'=-\dfrac1{x^2}$ ($x\neq0$).
- $(e^x)'=e^x$, $(a^x)'=a^x\ln a$.
- $(\ln x)'=\dfrac1x$, $(\log_ax)'=\dfrac1{x\ln a}$ ($x>0$).
:::

## Các quy tắc tính đạo hàm

:::theorem Quy tắc tổng, hiệu, tích, thương
Giả sử $u=u(x)$ và $v=v(x)$ có đạo hàm. Khi đó
- $(u\pm v)'=u'\pm v'$ và $(ku)'=ku'$ ($k$ là hằng số).
- $(uv)'=u'v+uv'$.
- $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$ (với $v\neq0$).
:::

:::theorem Quy tắc hàm hợp
Nếu $y=f(u)$ và $u=g(x)$ đều có đạo hàm thì $y'_x=f'(u)\cdot g'(x)$. Đặc biệt:
$$\left(u^n\right)'=nu^{n-1}u',\qquad\left(e^u\right)'=u'e^u,\qquad(\ln u)'=\frac{u'}{u}.$$
:::

**Vì sao?** Với quy tắc tích, ta viết
$$\frac{u(x+h)v(x+h)-u(x)v(x)}{h}=u(x+h)\cdot\frac{v(x+h)-v(x)}{h}+v(x)\cdot\frac{u(x+h)-u(x)}{h}.$$
Khi $h\to0$, $u(x+h)\to u(x)$ (vì $u$ liên tục, do có đạo hàm), còn hai tỉ số tiến về $v'(x)$ và $u'(x)$. Vậy vế phải tiến về $uv'+vu'$. Với $(x^n)'$, ta dùng $\dfrac{x^n-x_0^n}{x-x_0}=x^{n-1}+x^{n-2}x_0+\dots+x_0^{n-1}$, có $n$ số hạng, mỗi số hạng tiến về $x_0^{n-1}$, nên tổng tiến về $nx_0^{n-1}$. Quy tắc hàm hợp là "tốc độ thay đổi của $y$ theo $x$ bằng tốc độ của $y$ theo $u$ nhân tốc độ của $u$ theo $x$".

## Ví dụ

Ta bắt đầu với bảng đạo hàm và quy tắc tổng.

:::example Tính đạo hàm cơ bản
Tính đạo hàm:

a) $f(x)=3x^4-2x^2+5x-7$, rồi tính $f'(1)$.

b) $g(x)=\sqrt x+\dfrac1x$.

**Lời giải.** a) $f'(x)=3\cdot4x^3-2\cdot2x+5=12x^3-4x+5$. Do đó $f'(1)=12-4+5=13$.

b) $g'(x)=\dfrac1{2\sqrt x}-\dfrac1{x^2}$.

Vậy a) $f'(x)=12x^3-4x+5$, $f'(1)=13$; b) $g'(x)=\dfrac1{2\sqrt x}-\dfrac1{x^2}$.
:::

Tiếp theo ta dùng quy tắc tích và thương.

:::example Quy tắc tích và thương
Tính đạo hàm:

a) $y=(x^2+1)(x^3-x)$.

b) $y=\dfrac{2x+1}{x+3}$.

**Lời giải.** a) Đặt $u=x^2+1$, $v=x^3-x$. Khi đó $y'=2x(x^3-x)+(x^2+1)(3x^2-1)=2x^4-2x^2+3x^4+2x^2-1=5x^4-1$.

**Kiểm tra.** Khai triển $y=x^5-x$ nên $y'=5x^4-1$ ✓.

b) Đặt $u=2x+1$, $v=x+3$. Khi đó $y'=\dfrac{2(x+3)-(2x+1)\cdot1}{(x+3)^2}=\dfrac{5}{(x+3)^2}$.

Vậy a) $y'=5x^4-1$; b) $y'=\dfrac{5}{(x+3)^2}$.
:::

Hàm hợp, hàm mũ và hàm lôgarit cần quy tắc dây chuyền.

:::example Hàm hợp
Tính đạo hàm:

a) $y=(3x-1)^5$.

b) $y=e^{2x-1}$.

c) $y=\ln(x^2+1)$.

d) $y=x\,e^x$.

**Lời giải.** a) $y'=5(3x-1)^4\cdot3=15(3x-1)^4$.

b) $y'=(2x-1)'e^{2x-1}=2e^{2x-1}$.

c) $y'=\dfrac{(x^2+1)'}{x^2+1}=\dfrac{2x}{x^2+1}$.

d) Quy tắc tích: $y'=1\cdot e^x+x\cdot e^x=(x+1)e^x$.

Vậy a) $15(3x-1)^4$; b) $2e^{2x-1}$; c) $\dfrac{2x}{x^2+1}$; d) $(x+1)e^x$.
:::

Đạo hàm cho ta hệ số góc, từ đó viết được tiếp tuyến.

:::example Tiếp tuyến bằng quy tắc
Cho $f(x)=x^3-3x+1$.

a) Viết phương trình tiếp tuyến tại điểm có hoành độ $2$.

b) Tìm các điểm trên đồ thị có tiếp tuyến nằm ngang.

**Lời giải.** a) $f'(x)=3x^2-3$, nên $f'(2)=9$ và $f(2)=8-6+1=3$. Tiếp tuyến: $y=9(x-2)+3=9x-15$.

b) Tiếp tuyến nằm ngang khi $f'(x)=0$, tức $3x^2-3=0$, suy ra $x=\pm1$. Có $f(1)=-1$ và $f(-1)=3$.

Vậy a) $y=9x-15$; b) các điểm $(1; -1)$ và $(-1; 3)$.
:::

Giờ ta quay lại bài toán chuyển động ở đầu bài, đi đủ bốn bước.

:::example Vận dụng: khi nào vật đứng yên tức thời?
Giả sử một vật có $s(t)=t^3-6t^2+9t$ mét sau $t$ giây (số liệu giả định), $t\ge0$. Tìm các thời điểm vận tốc bằng $0$ và vị trí lúc đó.

**Lời giải.**

*Hiểu đề.* Vận tốc là $v(t)=s'(t)$. Cần giải $v(t)=0$ rồi tính $s$ tại các nghiệm.

*Tìm cách giải.* Dùng bảng đạo hàm và quy tắc tổng để có $v(t)$, rồi giải phương trình bậc hai.

*Giải.* $v(t)=3t^2-12t+9=3(t-1)(t-3)$. Vậy $v(t)=0$ khi $t=1$ hoặc $t=3$. Có $s(1)=4$ và $s(3)=0$.

*Nhìn lại.* Kết quả có hợp lí không? Từ giây $1$ đến giây $3$, $v<0$ (vì $(t-1)(t-3)<0$), nên vật lùi từ $4$ về $0$: khớp với $s(1)=4$, $s(2)=2$, $s(3)=0$. Nếu vật đứng yên tức thời thì nó có đổi chiều chuyển động không? Tại $t=1$ và $t=3$, dấu của $v$ đổi, nên vật đổi chiều. Nếu dấu không đổi (ví dụ $v=3t^2$ tại $t=0$) thì vật chỉ dừng một thoáng rồi tiếp tục cùng chiều.
:::

:::graph Đồ thị vị trí $s(t)=t^3-6t^2+9t$ có tiếp tuyến nằm ngang tại $t=1$ và $t=3$
alt: Đường cong bậc ba đi lên đến điểm (1, 4), đi xuống đến điểm (3, 0) rồi lại đi lên; tại hai điểm này tiếp tuyến nằm ngang
x: 0..4.2
y: -1..6.2
plot: x^3-6*x^2+9*x
point: (1, 4) "" above
point: (3, 0) "" below
label: (0.2, 5.5) "s(t)"
:::

:::warning Những sai lầm thường gặp
- **Đạo hàm của tích bằng tích các đạo hàm.** Sai: $(x\cdot x^2)'=1\cdot2x=2x$. Lí do sai: quy tắc tích có hai số hạng $u'v+uv'$. Đúng: $(x^3)'=3x^2$, và $1\cdot x^2+x\cdot2x=3x^2$.
- **Quên dấu trừ và thứ tự của quy tắc thương.** Sai: $\left(\dfrac uv\right)'=\dfrac{uv'-u'v}{v^2}$. Lí do sai: đảo dấu cho ra kết quả ngược. Đúng: $\dfrac{u'v-uv'}{v^2}$; ví dụ $\left(\dfrac1x\right)'=\dfrac{0\cdot x-1\cdot1}{x^2}=-\dfrac1{x^2}$.
- **Quên nhân với đạo hàm của hàm trong.** Sai: $\left(e^{2x}\right)'=e^{2x}$. Lí do sai: phải nhân thêm $(2x)'=2$ theo quy tắc hàm hợp. Đúng: $\left(e^{2x}\right)'=2e^{2x}$.
- **Nhầm đạo hàm của hàm mũ với luỹ thừa.** Sai: $\left(2^x\right)'=x\cdot2^{x-1}$. Lí do sai: $2^x$ có cơ số cố định, số mũ thay đổi, không phải luỹ thừa của $x$. Đúng: $\left(2^x\right)'=2^x\ln2$.
:::

**Kết nối.** Các quy tắc này dựa trên [định nghĩa đạo hàm](lesson:derivative-definition) và dùng được ngay cho [hàm số mũ và lôgarit](lesson:exp-log-functions). Bài [đạo hàm cấp hai](lesson:second-derivative) sẽ lấy đạo hàm của chính đạo hàm, như gia tốc là đạo hàm của vận tốc. Trong thực tế, các quy tắc này cho ta tốc độ thay đổi của quãng đường, số lượng vi khuẩn hay lợi nhuận mà không phải lập giới hạn mỗi lần.

## Thuật ngữ

:::terms
- quy tắc tổng | sum rule
- quy tắc tích | product rule
- quy tắc thương | quotient rule
- hàm hợp | composite function
- quy tắc hàm hợp | chain rule
- hàm hằng | constant function
- tiếp tuyến nằm ngang | horizontal tangent
- tốc độ tăng trưởng | growth rate
- vận tốc | velocity
- bảng đạo hàm | table of derivatives
:::

## Tóm tắt

- $(c)'=0$; $(x^n)'=nx^{n-1}$; $(\sqrt x)'=\dfrac1{2\sqrt x}$; $\left(\dfrac1x\right)'=-\dfrac1{x^2}$.
- $(e^x)'=e^x$; $(a^x)'=a^x\ln a$; $(\ln x)'=\dfrac1x$; $(\log_ax)'=\dfrac1{x\ln a}$.
- $(u\pm v)'=u'\pm v'$; $(uv)'=u'v+uv'$; $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$.
- Hàm hợp: $y'_x=f'(u)\,g'(x)$; $\left(u^n\right)'=nu^{n-1}u'$, $\left(e^u\right)'=u'e^u$, $(\ln u)'=\dfrac{u'}{u}$.
- Tiếp tuyến: $y=f'(x_0)(x-x_0)+f(x_0)$; tiếp tuyến nằm ngang khi $f'(x_0)=0$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính đạo hàm:

a) $y=x^5-4x^3+2x-9$.

b) $y=3\sqrt x-\dfrac2x$.

c) $y=\sqrt x-\dfrac{x^2}2+7$.

d) $y=\pi$.

::hint
**Kiến thức:** bảng đạo hàm, $(u\pm v)'=u'\pm v'$, $(ku)'=ku'$.

**Gợi ý các bước:**
1. Lấy đạo hàm từng số hạng.
2. Cộng lại, chú ý hằng số có đạo hàm bằng $0$.

::solution
Áp dụng các công thức $\left(x^n\right)'=nx^{n-1}$, $\left(\sqrt x\right)'=\dfrac{1}{2\sqrt x}$ $(x>0)$, $\left(\dfrac1x\right)'=-\dfrac{1}{x^2}$ $(x\neq0)$, $(c)'=0$ và quy tắc đạo hàm của tổng, hiệu, tích của hằng số với hàm số.

a) $y'=5x^4-4\cdot3x^2+2-0=5x^4-12x^2+2$.

b) Điều kiện: $x>0$. Ta có
$$y'=3\cdot\frac{1}{2\sqrt x}-2\cdot\left(-\frac{1}{x^2}\right)=\frac{3}{2\sqrt x}+\frac{2}{x^2}.$$

c) Điều kiện: $x\ge0$ (đạo hàm xét với $x>0$). Ta có
$$y'=\frac{1}{2\sqrt x}-\frac{2x}{2}+0=\frac{1}{2\sqrt x}-x.$$

d) Vì $\pi$ là hằng số nên $y'=0$.

Vậy đạo hàm của các hàm số lần lượt là $5x^4-12x^2+2$; $\dfrac{3}{2\sqrt x}+\dfrac{2}{x^2}$; $\dfrac{1}{2\sqrt x}-x$; $0$.

**Đáp số.** a) $5x^4-12x^2+2$; b) $\dfrac3{2\sqrt x}+\dfrac2{x^2}$; c) $\dfrac1{2\sqrt x}-x$; d) $0$.
:::

:::exercise
Tính đạo hàm:

a) $y=(2x-1)(x^2+3)$.

b) $y=x^2e^x$.

c) $y=\dfrac{2x+3}{x-1}$.

d) $y=\dfrac{\ln x}{x}$.

::hint
**Kiến thức:** $(uv)'=u'v+uv'$ và $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$.

**Gợi ý các bước:**
1. Xác định $u$ và $v$, tính $u'$ và $v'$.
2. Thay vào công thức rồi rút gọn.

::solution
a) Áp dụng quy tắc đạo hàm của tích $(uv)'=u'v+uv'$ với $u=2x-1$, $v=x^2+3$:
$$\begin{aligned}y'&=2\left(x^2+3\right)+(2x-1)\cdot2x\\&=2x^2+6+4x^2-2x\\&=6x^2-2x+6.\end{aligned}$$

b) Áp dụng quy tắc đạo hàm của tích với $u=x^2$, $v=e^x$:
$$y'=2xe^x+x^2e^x=x(x+2)e^x.$$

c) Điều kiện: $x\neq1$. Áp dụng quy tắc đạo hàm của thương $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$ với $u=2x+3$, $v=x-1$:
$$y'=\frac{2(x-1)-(2x+3)\cdot1}{(x-1)^2}=\frac{2x-2-2x-3}{(x-1)^2}=\frac{-5}{(x-1)^2}.$$

d) Điều kiện: $x>0$. Áp dụng quy tắc đạo hàm của thương với $u=\ln x$, $v=x$:
$$y'=\frac{\frac1x\cdot x-\ln x\cdot1}{x^2}=\frac{1-\ln x}{x^2}.$$

Vậy đạo hàm của các hàm số lần lượt là $6x^2-2x+6$; $x(x+2)e^x$; $-\dfrac{5}{(x-1)^2}$; $\dfrac{1-\ln x}{x^2}$.

**Đáp số.** a) $6x^2-2x+6$; b) $x(x+2)e^x$; c) $-\dfrac5{(x-1)^2}$; d) $\dfrac{1-\ln x}{x^2}$.
:::

:::exercise
Tính đạo hàm:

a) $y=(2x+1)^6$.

b) $y=\sqrt{x^2+1}$.

c) $y=e^{x^2}$.

d) $y=\ln(3x-2)$.

::hint
**Kiến thức:** quy tắc hàm hợp; $\left(\sqrt u\right)'=\dfrac{u'}{2\sqrt u}$.

**Gợi ý các bước:**
1. Xác định hàm trong $u$ và tính $u'$.
2. Nhân đạo hàm hàm ngoài (theo $u$) với $u'$.

::solution
Áp dụng quy tắc đạo hàm của hàm hợp: nếu $y=f(u(x))$ thì $y'=f'(u)\cdot u'(x)$.

a) Với $u=2x+1$ và $y=u^6$:
$$y'=6(2x+1)^5\cdot(2x+1)'=6(2x+1)^5\cdot2=12(2x+1)^5.$$

b) Vì $x^2+1>0$ với mọi $x$ nên hàm số xác định trên $\mathbb{R}$. Với $u=x^2+1$ và $y=\sqrt u$:
$$y'=\frac{u'}{2\sqrt u}=\frac{2x}{2\sqrt{x^2+1}}=\frac{x}{\sqrt{x^2+1}}.$$

c) Với $u=x^2$ và $y=e^u$:
$$y'=e^{x^2}\cdot\left(x^2\right)'=2xe^{x^2}.$$

d) Điều kiện: $3x-2>0$, tức là $x>\dfrac23$. Với $u=3x-2$ và $y=\ln u$:
$$y'=\frac{(3x-2)'}{3x-2}=\frac{3}{3x-2}.$$

Vậy đạo hàm của các hàm số lần lượt là $12(2x+1)^5$; $\dfrac{x}{\sqrt{x^2+1}}$; $2xe^{x^2}$; $\dfrac{3}{3x-2}$.

**Đáp số.** a) $12(2x+1)^5$; b) $\dfrac{x}{\sqrt{x^2+1}}$; c) $2xe^{x^2}$; d) $\dfrac3{3x-2}$.
:::

:::exercise
Viết phương trình tiếp tuyến của đồ thị:

a) $y=x^3-3x+1$ tại điểm có hoành độ $0$.

b) $y=\ln x$ tại điểm có hoành độ $1$.

c) $y=e^{2x}$ tại điểm có hoành độ $0$.

::hint
**Kiến thức:** $y=f'(x_0)(x-x_0)+f(x_0)$.

**Gợi ý các bước:**
1. Tính $f(x_0)$ và $f'(x_0)$ bằng quy tắc.
2. Thay vào công thức.

::solution
Phương trình tiếp tuyến tại điểm có hoành độ $x_0$ là $y=f'(x_0)(x-x_0)+f(x_0)$.

a) Với $f(x)=x^3-3x+1$ ta có $f'(x)=3x^2-3$. Tại $x_0=0$: $f'(0)=-3$ và $f(0)=1$. Tiếp tuyến là
$$y=-3(x-0)+1=-3x+1.$$

b) Với $f(x)=\ln x$ (điều kiện $x>0$) ta có $f'(x)=\dfrac1x$. Tại $x_0=1$: $f'(1)=1$ và $f(1)=\ln1=0$. Tiếp tuyến là
$$y=1\cdot(x-1)+0=x-1.$$

c) Với $f(x)=e^{2x}$ ta có $f'(x)=2e^{2x}$. Tại $x_0=0$: $f'(0)=2$ và $f(0)=1$. Tiếp tuyến là
$$y=2(x-0)+1=2x+1.$$

Vậy các tiếp tuyến lần lượt là $y=-3x+1$, $y=x-1$ và $y=2x+1$.

**Đáp số.** a) $y=-3x+1$; b) $y=x-1$; c) $y=2x+1$.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau:

a) $\left(\sqrt x\right)'=\dfrac1{\sqrt x}$.

b) $(uv)'=u'v+uv'$.

c) $\left(e^{2x}\right)'=2e^{2x}$.

d) $\left(2^x\right)'=2^x$.

::hint
**Kiến thức:** bảng đạo hàm và quy tắc hàm hợp.

**Gợi ý các bước:**
1. Đối chiếu từng mệnh đề với công thức.
2. Chú ý các hệ số và thừa số $\ln a$.

::solution
a) **Sai.** Công thức đúng là $\left(\sqrt x\right)'=\dfrac1{2\sqrt x}$ $(x>0)$, không phải $\dfrac1{\sqrt x}$.

b) **Đúng.** Đây là quy tắc đạo hàm của một tích: $(uv)'=u'v+uv'$.

c) **Đúng.** Theo quy tắc hàm hợp với $u=2x$: $\left(e^{2x}\right)'=e^{2x}\cdot(2x)'=2e^{2x}$.

d) **Sai.** Công thức đúng là $\left(a^x\right)'=a^x\ln a$, nên $\left(2^x\right)'=2^x\ln2$, khác $2^x$ vì $\ln2\neq1$.

Vậy các mệnh đề b), c) đúng; các mệnh đề a), d) sai.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Giả sử số vi khuẩn trong một mẻ nuôi cấy sau $t$ giờ là $N(t)=1000e^{0{,}3t}$ (số liệu giả định).

a) Tìm $N'(t)$.

b) Tính tốc độ tăng tại $t=2$ (làm tròn đến hàng đơn vị, đơn vị con/giờ).

c) Tính $\dfrac{N'(t)}{N(t)}$ và nêu ý nghĩa.

::hint
**Kiến thức:** $\left(e^{kt}\right)'=ke^{kt}$.

**Gợi ý các bước:**
1. a) Dùng quy tắc hàm hợp.
2. c) Chia $N'$ cho $N$ rồi rút gọn.

::solution
Số vi khuẩn là $N(t)=1000e^{0{,}3t}$ với $t$ là số giờ ($t\ge0$). Tốc độ tăng của số vi khuẩn là đạo hàm $N'(t)$.

a) Áp dụng quy tắc hàm hợp $\left(e^{kt}\right)'=ke^{kt}$:
$$N'(t)=1000\cdot0{,}3e^{0{,}3t}=300e^{0{,}3t}.$$

b) Thay $t=2$ vào, ta được
$$N'(2)=300e^{0{,}6}\approx300\cdot1{,}8221\approx547\ \text{(con/giờ)}.$$

c) Với mọi $t$:
$$\frac{N'(t)}{N(t)}=\frac{300e^{0{,}3t}}{1000e^{0{,}3t}}=0{,}3.$$
Tỉ số này không đổi, bằng $0{,}3=30\%$. Ý nghĩa: tại mọi thời điểm, số vi khuẩn tăng $30\%$ mỗi giờ so với số lượng hiện có.

Vậy $N'(t)=300e^{0{,}3t}$; tại $t=2$ tốc độ tăng khoảng $547$ con/giờ; và $\dfrac{N'(t)}{N(t)}=0{,}3$.

**Đáp số.** a) $300e^{0{,}3t}$; b) $547$ con/giờ; c) $0{,}3$.
:::

:::exercise
Giả sử lợi nhuận khi bán $q$ sản phẩm là $P(q)=-0{,}5q^2+40q-100$ (triệu đồng) (số liệu giả định).

a) Tìm $P'(q)$.

b) Tìm $q$ để $P'(q)=0$ và tính lợi nhuận tại đó.

c) Giải thích vì sao đó là lợi nhuận lớn nhất.

::hint
**Kiến thức:** $P(q)$ là tam thức bậc hai có hệ số $q^2$ âm; $P'(q)=0$ là tiếp tuyến nằm ngang.

**Gợi ý các bước:**
1. Tính đạo hàm từng số hạng.
2. Giải $P'(q)=0$ rồi thay vào $P$.

::solution
a) $P'(q)=-q+40$.

b) $P'(q)=0$ khi $q=40$, và $P(40)=-0{,}5\cdot1600+1600-100=700$ (triệu đồng).

c) Parabol $P(q)$ có hệ số $-0{,}5<0$ nên mở xuống, và đỉnh (tiếp tuyến nằm ngang) là điểm cao nhất. Vậy lợi nhuận lớn nhất là $700$ triệu đồng khi $q=40$.

**Đáp số.** a) $-q+40$; b) $q=40$, $P=700$ triệu đồng; c) đỉnh của parabol mở xuống.
:::

:::exercise
Giả sử nhiệt độ của một cốc nước sau $t$ phút là $T(t)=20+60e^{-0{,}1t}$ ($^\circ$C) (số liệu giả định). Tính $T'(10)$ (làm tròn đến hàng phần mười) và nêu ý nghĩa.

::hint
**Kiến thức:** $\left(e^{kt}\right)'=ke^{kt}$, $e^{-1}=\dfrac1e\approx0{,}3679$.

**Gợi ý các bước:**
1. Tính $T'(t)$ bằng quy tắc hàm hợp.
2. Thay $t=10$.

::solution
Nhiệt độ là $T(t)=20+60e^{-0{,}1t}$ ($^\circ$C) với $t$ là số phút ($t\ge0$). Tốc độ thay đổi nhiệt độ là $T'(t)$.

Áp dụng quy tắc hàm hợp:
$$T'(t)=0+60\cdot(-0{,}1)e^{-0{,}1t}=-6e^{-0{,}1t}.$$

Thay $t=10$ vào, ta được
$$T'(10)=-6e^{-1}=-\frac6e\approx-2{,}2.$$

Dấu âm cho biết nhiệt độ đang giảm.

Vậy tại phút thứ $10$, nhiệt độ của cốc nước đang giảm khoảng $2{,}2\,^\circ$C mỗi phút.

**Đáp số.** $T'(10)\approx-2{,}2$ ($^\circ$C/phút), nghĩa là nhiệt độ đang giảm.
:::

:::exercise
Ôn lại lôgarit. Dùng $a^x=e^{x\ln a}$ và công thức đổi cơ số $\log_ax=\dfrac{\ln x}{\ln a}$, tính đạo hàm của:

a) $y=3^x$.

b) $y=\log_2x$.

::hint
**Kiến thức:** $(e^u)'=u'e^u$ và $(\ln x)'=\dfrac1x$.

**Gợi ý các bước:**
1. Viết lại hàm theo $e$ hoặc $\ln$.
2. Đạo hàm, nhớ $\ln a$ là hằng số.

::solution
a) Ta có $3^x=e^{x\ln3}$. Áp dụng quy tắc hàm hợp với $u=x\ln3$ (và $\ln3$ là hằng số):
$$y'=e^{x\ln3}\cdot(x\ln3)'=\ln3\cdot e^{x\ln3}=3^x\ln3.$$

b) Điều kiện: $x>0$. Theo công thức đổi cơ số, $y=\log_2x=\dfrac{\ln x}{\ln2}$, với $\dfrac1{\ln2}$ là hằng số. Do đó
$$y'=\frac{1}{\ln2}\cdot(\ln x)'=\frac{1}{x\ln2}.$$

Vậy $\left(3^x\right)'=3^x\ln3$ và $\left(\log_2x\right)'=\dfrac{1}{x\ln2}$.

**Đáp số.** a) $3^x\ln3$; b) $\dfrac1{x\ln2}$.
:::

:::exercise Thử thách
Cho $f(x)=(x-1)(x-2)(x-3)$. Tính $f'(1)+f'(2)+f'(3)$.

::hint
**Kiến thức:** quy tắc tích cho ba thừa số: $(uvw)'=u'vw+uv'w+uvw'$.

**Gợi ý các bước:**
1. Tính $f'(x)$ bằng quy tắc tích.
2. Thay $x=1,2,3$: hai trong ba số hạng triệt tiêu.

::solution
Áp dụng quy tắc đạo hàm của tích ba thừa số $(uvw)'=u'vw+uv'w+uvw'$ với $u=x-1$, $v=x-2$, $w=x-3$:
$$f'(x)=(x-2)(x-3)+(x-1)(x-3)+(x-1)(x-2).$$

Tại $x=1$: hai số hạng sau đều chứa thừa số $x-1=0$ nên bằng $0$, chỉ còn số hạng đầu:
$$f'(1)=(1-2)(1-3)=(-1)(-2)=2.$$

Tại $x=2$: số hạng đầu và số hạng cuối chứa thừa số $x-2=0$, chỉ còn số hạng giữa:
$$f'(2)=(2-1)(2-3)=1\cdot(-1)=-1.$$

Tại $x=3$: hai số hạng đầu chứa thừa số $x-3=0$, chỉ còn số hạng cuối:
$$f'(3)=(3-1)(3-2)=2\cdot1=2.$$

Do đó $f'(1)+f'(2)+f'(3)=2-1+2=3$.

Vậy $f'(1)+f'(2)+f'(3)=3$.

**Đáp số.** $3$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Cho $f(x)=x^3-3x^2+2x$. Giá trị $f'(2)$ bằng
A. $0$.
B. $4$.
C. $2$.
D. $6$.
::key C
$f'(x)=3x^2-6x+2$ nên $f'(2)=12-12+2=2$. Phương án A bỏ số hạng $2$, B và D do tính sai.

::mc TH
Đạo hàm của hàm số $y=xe^x$ là
A. $(x+e)e^x$.
B. $e^x$.
C. $xe^x$.
D. $(x+1)e^x$.
::key D
$y'=1\cdot e^x+x\cdot e^x=(x+1)e^x$. Phương án B quên số hạng $xe^x$, C quên số hạng $e^x$, A nhầm $1$ thành $e$.

::mc TH
Đạo hàm của hàm số $y=\dfrac{2x+1}{x+3}$ là
A. $\dfrac{5}{(x+3)^2}$.
B. $2$.
C. $-\dfrac{5}{(x+3)^2}$.
D. $\dfrac{4x+7}{(x+3)^2}$.
::key A
$y'=\dfrac{2(x+3)-(2x+1)}{(x+3)^2}=\dfrac5{(x+3)^2}$. Phương án B chia các đạo hàm, C đảo dấu tử, D cộng thay vì trừ.

::mc VD
Đạo hàm của $y=\ln(x^2+1)$ tại $x=1$ bằng
A. $0$.
B. $1$.
C. $\dfrac12$.
D. $2$.
::key B
$y'=\dfrac{2x}{x^2+1}$ nên $y'(1)=\dfrac22=1$. Phương án D quên mẫu, C chia cho $4$, A nhầm với $\ln1$.

::tf NB TH TH TH
Cho hàm số $f(x)=x^3-3x+1$. Xét tính đúng sai của các mệnh đề sau:
a) $f'(x)=3x^2-3$.
b) Hệ số góc của tiếp tuyến tại $x=0$ bằng $3$.
c) Tiếp tuyến tại $x=1$ song song với trục hoành.
d) Phương trình $f'(x)=0$ có hai nghiệm là $x=\pm1$.
::key Đ S Đ Đ
a) Đúng. b) Sai: $f'(0)=-3$. c) Đúng: $f'(1)=0$. d) Đúng: $3x^2-3=0\Leftrightarrow x=\pm1$.

::sa VD
Giả sử số vi khuẩn sau $t$ giờ là $N(t)=1000e^{0{,}3t}$. Tính tốc độ tăng tại $t=2$ (làm tròn đến hàng đơn vị, đơn vị con/giờ).
::key 547
$N'(t)=300e^{0{,}3t}$ nên $N'(2)=300e^{0{,}6}\approx300\cdot1{,}8221\approx547$.

::sa VD
Tính hệ số góc của tiếp tuyến của đồ thị $y=\dfrac{x^2+1}{x}$ tại điểm có hoành độ $2$.
::key 0,75
$y'=\dfrac{2x\cdot x-(x^2+1)}{x^2}=\dfrac{x^2-1}{x^2}$ nên $y'(2)=\dfrac34=0{,}75$.
:::
