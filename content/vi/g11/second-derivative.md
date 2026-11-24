---
title: Đạo hàm cấp hai
description: Hiểu đạo hàm cấp hai là đạo hàm của đạo hàm, tính được nó, nắm ý nghĩa gia tốc và dấu của đạo hàm cấp hai, rồi vận dụng vào chuyển động và kinh doanh.
minutes: 25
---

:::goals
- Hiểu đạo hàm cấp hai là đạo hàm của đạo hàm cấp một và tính được nó.
- Hiểu gia tốc là đạo hàm cấp hai của quãng đường theo thời gian.
- Nhận biết dấu của đạo hàm cấp hai cho biết đạo hàm cấp một tăng hay giảm.
- Vận dụng vào bài toán chuyển động nhanh dần, chậm dần và tốc độ thay đổi của một đại lượng.
:::

Giả sử một vật chuyển động thẳng, sau $t$ giây ở cách gốc $s(t)=2t^3-9t^2+12t$ mét (số liệu giả định). Vận tốc là $v(t)=s'(t)=6t^2-18t+12$. Ta có bảng:

| $t$ (giây) | $0$ | $1$ | $1{,}5$ | $2$ | $3$ |
|---|---|---|---|---|---|
| $v(t)$ (m/s) | $12$ | $0$ | $-1{,}5$ | $0$ | $12$ |

Vận tốc giảm từ $12$ xuống $-1{,}5$ rồi lại tăng lên $12$. Vậy bản thân vận tốc cũng thay đổi, và ta muốn một đại lượng đo **tốc độ thay đổi của vận tốc**, để biết vận tốc nhỏ nhất ở thời điểm nào. Đại lượng đó là đạo hàm của đạo hàm.

## Khám phá: đạo hàm của đạo hàm

Với $f(x)=x^3-3x$, ta có $f'(x)=3x^2-3$ và lại lấy đạo hàm: $(f')'(x)=6x$.

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $f'(x)$ | $9$ | $0$ | $-3$ | $0$ | $9$ |
| $6x$ | $-12$ | $-6$ | $0$ | $6$ | $12$ |

Khi $x<0$, $f'$ giảm ($9\to0\to-3$) và $6x<0$. Khi $x>0$, $f'$ tăng ($-3\to0\to9$) và $6x>0$. Dấu của $6x$ cho biết $f'$ đang tăng hay giảm.

## Định nghĩa đạo hàm cấp hai

:::definition Đạo hàm cấp hai
Cho hàm số $y=f(x)$ có đạo hàm $f'(x)$ trên một khoảng. Nếu $f'$ lại có đạo hàm thì đạo hàm của $f'$ gọi là **đạo hàm cấp hai** của $f$, kí hiệu $f''(x)$ hoặc $y''$:
$$f''(x)=\left(f'(x)\right)'.$$
:::

**Hiểu sâu hơn.** Đạo hàm cấp một $f'$ đo tốc độ thay đổi của $f$; đạo hàm cấp hai $f''$ đo tốc độ thay đổi của $f'$. Khi $f''(x_0)>0$, độ dốc của đồ thị đang tăng quanh $x_0$; khi $f''(x_0)<0$, độ dốc đang giảm. Các quy tắc tổng, hiệu, tích, thương, hàm hợp vẫn dùng được hai lần liên tiếp.

:::theorem Ý nghĩa cơ học: gia tốc
Nếu chuyển động có quãng đường $s=s(t)$ thì vận tốc là $v(t)=s'(t)$ và **gia tốc** là
$$a(t)=v'(t)=s''(t).$$
Đơn vị của gia tốc là m/s$^2$.
:::

Gia tốc cho biết vận tốc đang tăng hay giảm. Chuyển động **nhanh dần** khi tốc độ tăng, **chậm dần** khi tốc độ giảm. Tốc độ là $|v|$, nên nó tăng khi $v$ và $a$ cùng dấu, và giảm khi $v$ và $a$ trái dấu.

:::graph Vận tốc $v(t)=6t^2-18t+12$ đạt nhỏ nhất tại $t=1{,}5$, đúng lúc gia tốc bằng $0$
alt: Parabol mở lên cắt trục hoành tại t bằng 1 và t bằng 2, và có đỉnh là điểm (1,5; -1,5) nằm dưới trục hoành
x: 0..3.2
y: -3..16
plot: 6*x^2-18*x+12
point: (1, 0) "" above-left
point: (2, 0) "" above-right
point: (1.5, -1.5) "" below
label: (0.2, 14) "v(t)"
:::

**Vì sao?** Quãng đường $s$ có đạo hàm là vận tốc $v$ (vì vận tốc là tốc độ thay đổi của vị trí). Gia tốc là tốc độ thay đổi của vận tốc nên là đạo hàm của $v$, tức đạo hàm cấp hai của $s$. Với $v>0$ (đi theo chiều dương), $a>0$ làm $v$ tăng nên tốc độ tăng; với $v<0$, $a>0$ làm $v$ tiến về $0$ nên tốc độ giảm. Đó là lí do dấu của $v$ và $a$ quyết định.

## Ví dụ

Ta bắt đầu với phép tính.

:::example Tính đạo hàm cấp hai
Tính $y''$:

a) $y=x^4-3x^2+2x$.

b) $y=e^{2x}$.

c) $y=\ln x$.

d) $y=xe^x$.

e) $y=\dfrac1x$.

**Lời giải.** a) $y'=4x^3-6x+2$ nên $y''=12x^2-6$.

b) $y'=2e^{2x}$ nên $y''=4e^{2x}$.

c) $y'=\dfrac1x$ nên $y''=-\dfrac1{x^2}$.

d) $y'=(x+1)e^x$ nên $y''=e^x+(x+1)e^x=(x+2)e^x$.

e) $y'=-\dfrac1{x^2}$. Theo quy tắc thương, $y''=\dfrac{0\cdot x^2-(-1)\cdot2x}{x^4}=\dfrac{2x}{x^4}=\dfrac2{x^3}$.

Vậy a) $12x^2-6$; b) $4e^{2x}$; c) $-\dfrac1{x^2}$; d) $(x+2)e^x$; e) $\dfrac2{x^3}$.
:::

Đạo hàm cấp hai cũng dùng để chứng minh hệ thức.

:::example Chứng minh một hệ thức
Cho $y=e^{2x}+e^{-x}$. Chứng minh $y''-y'-2y=0$.

**Lời giải.** Ta có $y'=2e^{2x}-e^{-x}$ và $y''=4e^{2x}+e^{-x}$. Do đó
$$y''-y'-2y=\left(4e^{2x}+e^{-x}\right)-\left(2e^{2x}-e^{-x}\right)-2\left(e^{2x}+e^{-x}\right)=0.$$

Vậy hệ thức được chứng minh.
:::

Dấu của $v$ và $a$ cho biết chuyển động nhanh dần hay chậm dần.

:::example Nhanh dần hay chậm dần?
Giả sử $s(t)=t^3-6t^2+9t$ mét (số liệu giả định). Xét chuyển động là nhanh dần hay chậm dần tại $t=0{,}5$; $1{,}5$; $2{,}5$ và $4$.

**Lời giải.** $v(t)=3t^2-12t+9$ và $a(t)=6t-12$. Ta lập bảng:

| $t$ | $v(t)$ | $a(t)$ | Dấu | Chuyển động |
|---|---|---|---|---|
| $0{,}5$ | $3{,}75$ | $-9$ | trái dấu | chậm dần |
| $1{,}5$ | $-2{,}25$ | $-3$ | cùng dấu | nhanh dần |
| $2{,}5$ | $-2{,}25$ | $3$ | trái dấu | chậm dần |
| $4$ | $9$ | $12$ | cùng dấu | nhanh dần |

Vậy chuyển động chậm dần tại $t=0{,}5$ và $t=2{,}5$, nhanh dần tại $t=1{,}5$ và $t=4$.
:::

Giờ ta quay lại bài toán ở đầu bài, đi đủ bốn bước.

:::example Vận dụng: vận tốc nhỏ nhất khi nào?
Giả sử $s(t)=2t^3-9t^2+12t$ mét (số liệu giả định), $t\ge0$. Tìm gia tốc và thời điểm vận tốc nhỏ nhất.

**Lời giải.**

*Hiểu đề.* Cần $a(t)=s''(t)$, rồi tìm $t$ để vận tốc $v$ nhỏ nhất.

*Tìm cách giải.* $v$ là hàm bậc hai theo $t$ có hệ số $t^2$ dương nên có giá trị nhỏ nhất tại đỉnh, nơi tiếp tuyến của đồ thị $v$ nằm ngang, tức $v'(t)=a(t)=0$.

*Giải.* $v(t)=6t^2-18t+12$ và $a(t)=v'(t)=12t-18$. Ta có $a(t)=0$ khi $t=1{,}5$, và $v(1{,}5)=13{,}5-27+12=-1{,}5$ m/s.

Vậy vận tốc nhỏ nhất bằng $-1{,}5$ m/s tại $t=1{,}5$ giây, lúc gia tốc bằng $0$.

*Nhìn lại.* Kết quả có hợp lí không? Bảng ở đầu bài cho $v(1)=0$, $v(1{,}5)=-1{,}5$, $v(2)=0$: giá trị nhỏ nhất nằm đúng giữa hai nghiệm $t=1$ và $t=2$ của $v$, ở trung điểm $1{,}5$. Nếu đổi $s(t)$ thì sao? Chỉ cần $v$ là bậc hai thì vận tốc cực trị luôn xảy ra khi $a=0$; nếu $a$ không đổi dấu thì vận tốc không có cực trị.
:::

:::warning Những sai lầm thường gặp
- **Nhầm đạo hàm cấp hai với bình phương đạo hàm.** Sai: $(e^{2x})''=\left((e^{2x})'\right)^2=4e^{4x}$. Lí do sai: $y''$ là đạo hàm của $y'$, không phải bình phương của $y'$. Đúng: $(e^{2x})''=\left(2e^{2x}\right)'=4e^{2x}$.
- **Quên quy tắc ở lần đạo hàm thứ hai.** Sai: $(xe^x)'=(x+1)e^x$ nên $(xe^x)''=1\cdot e^x=e^x$. Lí do sai: $(x+1)e^x$ vẫn là tích, phải dùng quy tắc tích lần nữa. Đúng: $(xe^x)''=(x+2)e^x$.
- **Nhầm gia tốc dương với nhanh dần.** Sai: $a>0$ thì chuyển động nhanh dần. Lí do sai: phải xét dấu của $v$; với $v<0$ và $a>0$ thì tốc độ $|v|$ giảm. Đúng: nhanh dần khi $v$ và $a$ cùng dấu; chậm dần khi trái dấu.
- **Nhầm $f''(x_0)=0$ với $f'(x_0)=0$.** Sai: $f''(x_0)=0$ thì tiếp tuyến nằm ngang. Lí do sai: tiếp tuyến nằm ngang khi $f'(x_0)=0$. Đúng: $f''(x_0)=0$ chỉ cho biết tốc độ thay đổi của $f'$ bằng $0$ tại điểm đó.
:::

**Kết nối.** Đạo hàm cấp hai dựa trên [định nghĩa đạo hàm](lesson:derivative-definition) và các [quy tắc tính đạo hàm](lesson:differentiation-rules): ta chỉ lấy đạo hàm hai lần liên tiếp. Chúng cho phép ta tính gia tốc từ quãng đường. Trong thực tế, đạo hàm cấp hai đo xem tốc độ thay đổi đang tăng lên hay chậm lại, như doanh thu vẫn tăng nhưng tăng chậm dần.

## Thuật ngữ

:::terms
- đạo hàm cấp hai | second derivative
- đạo hàm cấp một | first derivative
- gia tốc | acceleration
- vận tốc | velocity
- nhanh dần | speeding up
- chậm dần | slowing down
- tốc độ thay đổi | rate of change
- hệ thức | identity
- điều kiện ban đầu | initial condition
- độ cao | height
:::

## Tóm tắt

- $f''(x)=\left(f'(x)\right)'$; $y''$ là đạo hàm của $y'$.
- Gia tốc: $a(t)=v'(t)=s''(t)$, đơn vị m/s$^2$.
- Nhanh dần khi $v$ và $a$ cùng dấu; chậm dần khi trái dấu.
- $f''>0$ trên một khoảng thì $f'$ tăng trên khoảng đó; $f''<0$ thì $f'$ giảm.
- Các quy tắc đạo hàm dùng được lần thứ hai; tránh nhầm $y''$ với $(y')^2$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính đạo hàm cấp hai:

a) $y=x^5-2x^3+x$.

b) $y=e^{3x}$.

c) $y=\ln(2x+1)$.

d) $y=x^2e^x$.

::hint
**Kiến thức:** $y''=(y')'$; các quy tắc tích, thương, hàm hợp.

**Gợi ý các bước:**
1. Tính $y'$ trước.
2. Lấy đạo hàm của $y'$, dùng lại quy tắc nếu cần.

::solution
Đạo hàm cấp hai của hàm số $y=f(x)$ là $y''=(y')'$. Ta dùng các công thức $(x^n)'=nx^{n-1}$, $\left(e^{kx}\right)'=ke^{kx}$, $(\ln u)'=\dfrac{u'}{u}$, $(uv)'=u'v+uv'$ và $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$.

a) Hàm số xác định trên $\mathbb R$. Ta có $y'=5x^4-6x^2+1$. Suy ra
$$y''=(5x^4-6x^2+1)'=20x^3-12x.$$

b) Ta có $y'=3e^{3x}$. Suy ra
$$y''=3\cdot3e^{3x}=9e^{3x}.$$

c) Điều kiện xác định: $2x+1>0$, tức là $x>-\dfrac12$. Ta có $y'=\dfrac{2}{2x+1}$. Suy ra
$$y''=\frac{0\cdot(2x+1)-2\cdot2}{(2x+1)^2}=-\frac{4}{(2x+1)^2}.$$

d) Theo quy tắc đạo hàm của một tích, ta có
$$y'=2xe^x+x^2e^x=(x^2+2x)e^x.$$
Áp dụng tiếp quy tắc đó cho $y'$, ta được
$$\begin{aligned}y''&=(2x+2)e^x+(x^2+2x)e^x\\&=(x^2+4x+2)e^x.\end{aligned}$$

Vậy a) $y''=20x^3-12x$; b) $y''=9e^{3x}$; c) $y''=-\dfrac{4}{(2x+1)^2}$; d) $y''=(x^2+4x+2)e^x$.

**Đáp số.** a) $20x^3-12x$; b) $9e^{3x}$; c) $-\dfrac4{(2x+1)^2}$; d) $(x^2+4x+2)e^x$.
:::

:::exercise
Tính giá trị:

a) $f''(2)$ với $f(x)=x^3-3x^2+4$.

b) $f''(2)$ với $f(x)=\dfrac1x$.

c) $f''(e)$ với $f(x)=\ln x$.

d) $f''(0)$ với $f(x)=e^{-x}$.

::hint
**Kiến thức:** tính $f'$, rồi $f''$, rồi thay giá trị.

**Gợi ý các bước:**
1. Tìm biểu thức $f''(x)$.
2. Thay $x$ đã cho.

::solution
Với mỗi hàm số, ta tính $f'(x)$, rồi $f''(x)$, rồi thay giá trị $x$ đã cho.

a) Ta có $f'(x)=3x^2-6x$ và $f''(x)=6x-6$. Thay $x=2$, ta được $f''(2)=6\cdot2-6=6$.

b) Điều kiện: $x\neq0$. Viết $f(x)=\dfrac1x=x^{-1}$, ta có $f'(x)=-\dfrac1{x^2}$ và $f''(x)=\dfrac{2}{x^3}$. Thay $x=2$, ta được $f''(2)=\dfrac28=\dfrac14$.

c) Điều kiện: $x>0$. Ta có $f'(x)=\dfrac1x$ và $f''(x)=-\dfrac1{x^2}$. Thay $x=e$ (thoả mãn điều kiện), ta được $f''(e)=-\dfrac1{e^2}$.

d) Ta có $f'(x)=-e^{-x}$ và $f''(x)=e^{-x}$. Thay $x=0$, ta được $f''(0)=e^0=1$.

Vậy a) $f''(2)=6$; b) $f''(2)=\dfrac14$; c) $f''(e)=-\dfrac1{e^2}$; d) $f''(0)=1$.

**Đáp số.** a) $6$; b) $\dfrac14$; c) $-\dfrac1{e^2}$; d) $1$.
:::

:::exercise
Tìm các giá trị $x$ để $f''(x)>0$ và để $f''(x)<0$:

a) $f(x)=x^3-6x^2+9x+1$.

b) $f(x)=x^4-2x^2$.

::hint
**Kiến thức:** xét dấu của $f''(x)$; $f''>0$ nghĩa là $f'$ đang tăng.

**Gợi ý các bước:**
1. Tính $f''(x)$.
2. Giải các bất phương trình $f''(x)>0$ và $f''(x)<0$.

::solution
Ta tính $f''(x)$ rồi xét dấu của nó. Cả hai hàm số đều xác định trên $\mathbb R$.

a) Ta có $f'(x)=3x^2-12x+9$ và $f''(x)=6x-12$. Khi đó
$$f''(x)>0\iff6x-12>0\iff x>2,$$
$$f''(x)<0\iff6x-12<0\iff x<2.$$

b) Ta có $f'(x)=4x^3-4x$ và $f''(x)=12x^2-4$. Khi đó
$$f''(x)>0\iff x^2>\frac13\iff|x|>\frac1{\sqrt3},$$
$$f''(x)<0\iff x^2<\frac13\iff|x|<\frac1{\sqrt3}.$$

Vậy ở câu a), $f''>0$ khi $x>2$ và $f''<0$ khi $x<2$; ở câu b), $f''>0$ khi $|x|>\dfrac1{\sqrt3}$ và $f''<0$ khi $|x|<\dfrac1{\sqrt3}$.

**Đáp số.** a) $f''>0$ khi $x>2$, $f''<0$ khi $x<2$; b) $f''>0$ khi $|x|>\dfrac1{\sqrt3}$, $f''<0$ khi $|x|<\dfrac1{\sqrt3}$.
:::

:::exercise
Giả sử một vật chuyển động với $s(t)=t^3-3t^2+5t$ mét sau $t$ giây (số liệu giả định).

a) Tính vận tốc và gia tốc tại $t=2$. Chuyển động nhanh dần hay chậm dần?

b) Tìm thời điểm gia tốc bằng $0$ và vận tốc lúc đó.

::hint
**Kiến thức:** $v=s'$, $a=s''$; nhanh dần khi $v$ và $a$ cùng dấu.

**Gợi ý các bước:**
1. Tính $v(t)$ và $a(t)$.
2. Thay giá trị rồi xét dấu.

::solution
Vận tốc tức thời là đạo hàm cấp một của quãng đường, gia tốc tức thời là đạo hàm cấp hai: $v(t)=s'(t)$, $a(t)=s''(t)$, với $t\ge0$. Từ $s(t)=t^3-3t^2+5t$, ta có
$$v(t)=3t^2-6t+5,\qquad a(t)=6t-6.$$

a) Thay $t=2$, ta được $v(2)=3\cdot4-6\cdot2+5=5$ (m/s) và $a(2)=6\cdot2-6=6$ (m/s$^2$). Vì $v(2)>0$ và $a(2)>0$ cùng dấu nên tại thời điểm $t=2$ chuyển động nhanh dần.

b) Giải $a(t)=0$, tức $6t-6=0$, ta được $t=1$ (thoả mãn $t\ge0$). Khi đó $v(1)=3-6+5=2$ (m/s).

Vậy a) tại $t=2$ giây, vận tốc là $5$ m/s, gia tốc là $6$ m/s$^2$ và chuyển động nhanh dần; b) gia tốc bằng $0$ tại $t=1$ giây, lúc đó vận tốc là $2$ m/s.

**Đáp số.** a) $v=5$ m/s, $a=6$ m/s$^2$, nhanh dần; b) $t=1$ giây, $v=2$ m/s.
:::

:::exercise
Giả sử một quả bóng được ném thẳng đứng, sau $t$ giây ở độ cao $s(t)=20t-5t^2$ mét (số liệu giả định).

a) Tính vận tốc tại $t=1$ và gia tốc.

b) Sau bao lâu bóng lên đến độ cao lớn nhất, và độ cao đó là bao nhiêu?

::hint
**Kiến thức:** $v=s'$, $a=s''$; tại điểm cao nhất vận tốc bằng $0$.

**Gợi ý các bước:**
1. Tính $v(t)$ và $a(t)$.
2. Giải $v(t)=0$ rồi tính $s$.

::solution
Vận tốc là $v(t)=s'(t)$ và gia tốc là $a(t)=s''(t)$, với $t\ge0$. Từ $s(t)=20t-5t^2$, ta có
$$v(t)=20-10t,\qquad a(t)=-10.$$

a) Thay $t=1$, ta được $v(1)=20-10=10$ (m/s). Gia tốc là hằng số $a=-10$ (m/s$^2$) tại mọi thời điểm.

b) Bóng lên đến độ cao lớn nhất khi vận tốc đổi dấu từ dương sang âm, tức là khi $v(t)=0$. Giải $20-10t=0$ ta được $t=2$. Với $0\le t<2$ thì $v(t)>0$ (bóng đang lên), với $t>2$ thì $v(t)<0$ (bóng đang xuống). Độ cao lớn nhất là
$$s(2)=20\cdot2-5\cdot2^2=40-20=20\ \text{(m)}.$$

Vậy a) $v(1)=10$ m/s và gia tốc là $-10$ m/s$^2$; b) sau $2$ giây bóng lên đến độ cao lớn nhất, bằng $20$ m.

**Đáp số.** a) $v(1)=10$ m/s, $a=-10$ m/s$^2$; b) $t=2$ giây, độ cao $20$ m.
:::

:::exercise
Giả sử doanh thu của một cửa hàng sau $t$ tháng ($0\le t\le6$) là $R(t)=-t^3+9t^2+10t$ (triệu đồng) (số liệu giả định).

a) Tìm tốc độ tăng doanh thu $R'(t)$ và $R''(t)$.

b) Tại tháng nào tốc độ tăng doanh thu lớn nhất, và bằng bao nhiêu?

c) Từ tháng đó trở đi, doanh thu có giảm không?

::hint
**Kiến thức:** $R'$ là tốc độ thay đổi của $R$; $R'$ lớn nhất khi $R''=0$ và $R''$ đổi dấu từ dương sang âm.

**Gợi ý các bước:**
1. Tính $R'$ và $R''$.
2. Giải $R''(t)=0$, tính $R'$ tại đó và xét dấu $R'$.

::solution
Tốc độ tăng doanh thu là đạo hàm $R'(t)$; để biết $R'$ tăng hay giảm ta xét $R''(t)$. Xét $0\le t\le6$.

a) Từ $R(t)=-t^3+9t^2+10t$, ta có
$$R'(t)=-3t^2+18t+10,\qquad R''(t)=-6t+18.$$

b) Giải $R''(t)=0$, tức $-6t+18=0$, ta được $t=3$ (thuộc $[0; 6]$). Với $t<3$ thì $R''(t)>0$ nên $R'$ tăng; với $t>3$ thì $R''(t)<0$ nên $R'$ giảm. Do đó $R'$ đạt giá trị lớn nhất tại $t=3$, và
$$R'(3)=-3\cdot9+18\cdot3+10=-27+54+10=37.$$

c) Ta viết $R'(t)=-3(t-3)^2+37$. Với $t\in[0; 6]$ thì $(t-3)^2\le9$, nên $R'(t)\ge-27+37=10>0$. Cụ thể $R'(0)=10$, $R'(3)=37$, $R'(6)=10$. Vì $R'(t)>0$ nên doanh thu không giảm. Từ tháng $3$ trở đi, $R'$ giảm từ $37$ xuống $10$ nhưng vẫn dương, nên doanh thu vẫn tăng, chỉ tăng chậm dần.

Vậy a) $R'(t)=-3t^2+18t+10$, $R''(t)=-6t+18$; b) tốc độ tăng doanh thu lớn nhất vào tháng $3$, bằng $37$ triệu đồng/tháng; c) từ tháng $3$ trở đi doanh thu không giảm, chỉ tăng chậm dần.

**Đáp số.** a) $R'=-3t^2+18t+10$, $R''=-6t+18$; b) tháng $3$, $37$ triệu đồng/tháng; c) không giảm, chỉ tăng chậm dần.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau:

a) $\left(x^4\right)''=4x^3$.

b) $\left(e^{2x}\right)''=4e^{2x}$.

c) Nếu vận tốc và gia tốc cùng dấu thì chuyển động nhanh dần.

d) $(\ln x)''=\dfrac1{x^2}$.

::hint
**Kiến thức:** $y''=(y')'$; ý nghĩa dấu của $v$ và $a$.

**Gợi ý các bước:**
1. Tính từng đạo hàm cấp hai.
2. Đối chiếu với mệnh đề.

::solution
Ta xét từng mệnh đề bằng cách tính đạo hàm hoặc dùng ý nghĩa của vận tốc và gia tốc.

a) **Sai.** Ta có $\left(x^4\right)'=4x^3$, suy ra $\left(x^4\right)''=\left(4x^3\right)'=12x^2$. Vậy $4x^3$ là đạo hàm cấp một, không phải cấp hai.

b) **Đúng.** Ta có $\left(e^{2x}\right)'=2e^{2x}$, suy ra $\left(e^{2x}\right)''=2\cdot2e^{2x}=4e^{2x}$.

c) **Đúng.** Tốc độ của vật là $|v|$. Nếu $v>0$ và $a>0$ thì $|v|=v$ có đạo hàm $v'=a>0$ nên tăng. Nếu $v<0$ và $a<0$ thì $|v|=-v$ có đạo hàm $-v'=-a>0$ nên cũng tăng. Vậy khi $v$ và $a$ cùng dấu thì tốc độ tăng, tức chuyển động nhanh dần.

d) **Sai.** Với $x>0$, ta có $(\ln x)'=\dfrac1x$, suy ra $(\ln x)''=-\dfrac1{x^2}$, khác $\dfrac1{x^2}$.

Vậy các mệnh đề b), c) đúng; các mệnh đề a), d) sai.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Ôn lại định nghĩa đạo hàm. Cho $f(x)=x^3$, với $f'(x)=3x^2$. Dùng định nghĩa đạo hàm cho hàm $f'$ để tính $f''(x_0)$.

::hint
**Kiến thức:** $f''(x_0)=\displaystyle\lim_{x\to x_0}\dfrac{f'(x)-f'(x_0)}{x-x_0}$.

**Gợi ý các bước:**
1. Lập tỉ số với $f'(x)=3x^2$.
2. Rút gọn thừa số $x-x_0$ rồi cho $x\to x_0$.

::solution
Theo định nghĩa đạo hàm áp dụng cho hàm số $f'$ tại điểm $x_0$, ta có
$$f''(x_0)=\lim_{x\to x_0}\frac{f'(x)-f'(x_0)}{x-x_0}.$$

Với $f'(x)=3x^2$ và $x\neq x_0$, ta biến đổi
$$\begin{aligned}\frac{f'(x)-f'(x_0)}{x-x_0}&=\frac{3x^2-3x_0^2}{x-x_0}\\&=\frac{3(x-x_0)(x+x_0)}{x-x_0}\\&=3(x+x_0).\end{aligned}$$

Khi $x\to x_0$ thì $3(x+x_0)\to3\cdot2x_0=6x_0$. Do đó $f''(x_0)=6x_0$ với mọi $x_0$.

Vậy $f''(x_0)=6x_0$, tức là $f''(x)=6x$.

**Đáp số.** $f''(x)=6x$.
:::

:::exercise
Ôn lại lôgarit và hàm mũ. Tính đạo hàm cấp hai của:

a) $y=\log_2x$.

b) $y=2^x$.

::hint
**Kiến thức:** $(\log_ax)'=\dfrac1{x\ln a}$ và $(a^x)'=a^x\ln a$; $\ln a$ là hằng số.

**Gợi ý các bước:**
1. Viết $y'$ rồi lấy đạo hàm một lần nữa.
2. Đưa hằng số $\ln a$ ra ngoài.

::solution
Ta dùng các công thức $(\log_ax)'=\dfrac{1}{x\ln a}$ (với $x>0$) và $\left(a^x\right)'=a^x\ln a$.

a) Điều kiện xác định: $x>0$. Ta có $y'=\dfrac{1}{x\ln2}=\dfrac1{\ln2}\cdot x^{-1}$. Suy ra
$$y''=\frac1{\ln2}\cdot\left(-\frac1{x^2}\right)=-\frac{1}{x^2\ln2}.$$

b) Hàm số xác định trên $\mathbb R$. Ta có $y'=2^x\ln2$. Vì $\ln2$ là hằng số nên
$$y''=\ln2\cdot\left(2^x\ln2\right)=2^x(\ln2)^2.$$

Vậy a) $y''=-\dfrac{1}{x^2\ln2}$; b) $y''=2^x(\ln2)^2$.

**Đáp số.** a) $-\dfrac1{x^2\ln2}$; b) $2^x(\ln2)^2$.
:::

:::exercise Thử thách
Chứng minh hàm số $y=Ae^x+Be^{-x}$ thoả mãn $y''=y$ với mọi hằng số $A$, $B$. Rồi tìm $A$, $B$ biết $y(0)=2$ và $y'(0)=0$ (các điều kiện ban đầu).

::hint
**Kiến thức:** $(e^{-x})'=-e^{-x}$.

**Gợi ý các bước:**
1. Tính $y'$ và $y''$.
2. Thay $x=0$ vào $y$ và $y'$ để lập hệ phương trình.

::solution
Phần 1: chứng minh $y''=y$. Với hằng số $A$, $B$, hàm số $y=Ae^x+Be^{-x}$ xác định trên $\mathbb R$. Vì $\left(e^{x}\right)'=e^x$ và $\left(e^{-x}\right)'=-e^{-x}$ nên
$$y'=Ae^x-Be^{-x}.$$
Đạo hàm tiếp, ta được
$$y''=Ae^x-B\left(-e^{-x}\right)=Ae^x+Be^{-x}=y.$$
Vậy $y''=y$ với mọi hằng số $A$, $B$.

Phần 2: tìm $A$, $B$. Thay $x=0$ (chú ý $e^0=1$) vào $y$ và $y'$:
$$y(0)=A+B=2,\qquad y'(0)=A-B=0.$$

Từ $A-B=0$ suy ra $A=B$. Thay vào $A+B=2$, ta được $2A=2$, tức $A=1$ và $B=1$.

Kiểm tra: với $y=e^x+e^{-x}$ ta có $y(0)=1+1=2$ và $y'(0)=1-1=0$ (thoả mãn).

Vậy $y''=y$ với mọi $A$, $B$; và $A=B=1$, tức $y=e^x+e^{-x}$.

**Đáp số.** $y''=y$; $A=B=1$, tức $y=e^x+e^{-x}$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Cho $y=x^4-2x^2$. Giá trị $y''(1)$ bằng
A. $10$.
B. $12$.
C. $4$.
D. $8$.
::key D
$y'=4x^3-4x$ và $y''=12x^2-4$ nên $y''(1)=8$. Phương án B bỏ số hạng $-4$, còn C và A tính sai hệ số.

::mc TH
Đạo hàm cấp hai của hàm số $y=e^{3x}$ là
A. $9e^{3x}$.
B. $3e^{3x}$.
C. $6e^{3x}$.
D. $e^{3x}$.
::key A
$y'=3e^{3x}$ và $y''=9e^{3x}$. Phương án B là $y'$, C cộng $3+3$ thay vì nhân, D quên hệ số.

::mc VD
Một chất điểm có $s(t)=t^3-6t^2+2t$ mét sau $t$ giây. Gia tốc tại $t=3$ bằng
A. $-7$ m/s$^2$.
B. $6$ m/s$^2$.
C. $12$ m/s$^2$.
D. $18$ m/s$^2$.
::key B
$v=3t^2-12t+2$ và $a=6t-12$ nên $a(3)=6$. Phương án A là $v(3)=-7$, D là $6t$ ở $t=3$ quên $-12$, C tính sai.

::mc TH
Cho $y=x^3-3x^2$. Tập các $x$ để $y''>0$ là
A. $x<1$.
B. $x>0$.
C. $x>1$.
D. $x>2$.
::key C
$y''=6x-6>0\Leftrightarrow x>1$. Phương án A đảo chiều, B và D dùng nghiệm của $y'$ hoặc $y$.

::tf NB TH VD VD
Một quả bóng ném thẳng đứng có độ cao $s(t)=20t-5t^2$ mét sau $t$ giây. Xét tính đúng sai của các mệnh đề sau:
a) Vận tốc là $v(t)=20-10t$.
b) Gia tốc của bóng bằng $-10$ m/s$^2$ tại mọi thời điểm.
c) Bóng lên cao nhất tại $t=1$.
d) Độ cao lớn nhất của bóng là $20$ mét.
::key Đ Đ S Đ
a) Đúng. b) Đúng: $a=v'=-10$. c) Sai: $v=0$ khi $t=2$. d) Đúng: $s(2)=40-20=20$.

::sa VD
Giả sử $s(t)=2t^3-9t^2+12t$ mét sau $t$ giây. Tính vận tốc (m/s) tại thời điểm gia tốc bằng $0$.
::key -1,5
$v=6t^2-18t+12$, $a=12t-18=0$ khi $t=1{,}5$. Khi đó $v=13{,}5-27+12=-1{,}5$.

::sa TH
Tính $y''(2)$ với $y=\dfrac1x$.
::key 0,25
$y'=-\dfrac1{x^2}$ và $y''=\dfrac{2}{x^3}$ nên $y''(2)=\dfrac28=0{,}25$.
:::
