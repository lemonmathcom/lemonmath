---
title: Tính đơn điệu và cực trị của hàm số
description: Dùng dấu của đạo hàm để tìm khoảng đồng biến, nghịch biến và các điểm cực đại, cực tiểu của hàm đa thức, phân thức và lượng giác.
minutes: 24
---

:::goals
- Tìm các khoảng đồng biến, nghịch biến của hàm số bằng dấu của đạo hàm.
- Lập bảng biến thiên và tìm cực đại, cực tiểu bằng dấu hiệu đổi dấu của $f'$.
- Dùng đạo hàm cấp hai để nhận biết cực trị khi cần.
- Áp dụng vào hàm bậc ba, bậc bốn, phân thức và bài toán thực tế.
:::

Một chiếc flycam bay trong $7$ phút. Độ cao của nó sau $t$ phút là $h(t)=t^3-12t^2+36t+10$ (mét). Lúc cất cánh từ nóc nhà nó ở độ cao $10$ m, sau $2$ phút ở $42$ m, sau $6$ phút lại xuống còn $10$ m, rồi lên $17$ m khi hết giờ. Vậy trong khoảng thời gian nào flycam đang lên cao, trong khoảng nào đang hạ xuống, và nó "đổi chiều" ở những thời điểm nào?

Để trả lời chính xác, ta không cần tính độ cao ở thật nhiều thời điểm. Chỉ cần biết dấu của đạo hàm $h'(t)$.

## Tính đơn điệu

### Khám phá: khi nào đồ thị đi lên?

Ta tính độ cao tại các phút tròn và đạo hàm $h'(t)=3t^2-24t+36=3(t-2)(t-6)$:

| $t$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
|---|---|---|---|---|---|---|---|---|
| $h(t)$ | $10$ | $35$ | $42$ | $37$ | $26$ | $15$ | $10$ | $17$ |
| $h'(t)$ | $36$ | $15$ | $0$ | $-9$ | $-12$ | $-9$ | $0$ | $15$ |

Từ $t=0$ đến $t=2$ độ cao tăng và $h'>0$. Từ $t=2$ đến $t=6$ độ cao giảm và $h'<0$. Sau $t=6$ độ cao lại tăng và $h'>0$. Điều này hợp lí: $h'(t)$ là hệ số góc của tiếp tuyến, hệ số góc dương thì đồ thị đi lên.

:::graph Độ cao của flycam $h(t)=t^3-12t^2+36t+10$
alt: Đồ thị bậc ba trên đoạn từ 0 đến 7, đi lên đến điểm cao nhất tại t bằng 2 với độ cao 42, đi xuống đến điểm thấp tại t bằng 6 với độ cao 10, rồi đi lên lại
x: 0..7
y: 0..45
plot: x^3 - 12x^2 + 36x + 10 ; 0..7
point: (2, 42) "(2; 42)" above
point: (6, 10) "(6; 10)" below
:::

:::definition Hàm số đồng biến, nghịch biến
Cho hàm số $y=f(x)$ xác định trên khoảng $K$.
- $f$ **đồng biến** (tăng) trên $K$ nếu với mọi $x_1<x_2$ thuộc $K$ ta có $f(x_1)<f(x_2)$.
- $f$ **nghịch biến** (giảm) trên $K$ nếu với mọi $x_1<x_2$ thuộc $K$ ta có $f(x_1)>f(x_2)$.

Hàm số đồng biến hoặc nghịch biến trên $K$ được gọi chung là **đơn điệu** trên $K$.
:::

:::theorem Dấu của đạo hàm và tính đơn điệu
Cho $f$ có đạo hàm trên khoảng $K$.
- Nếu $f'(x)>0$ với mọi $x\in K$ thì $f$ đồng biến trên $K$.
- Nếu $f'(x)<0$ với mọi $x\in K$ thì $f$ nghịch biến trên $K$.
- Nếu $f'(x)\ge 0$ (hoặc $f'(x)\le 0$) với mọi $x\in K$ và $f'(x)=0$ chỉ tại hữu hạn điểm, thì $f$ vẫn đồng biến (nghịch biến) trên $K$.
:::

Vì sao định lí đúng? Đạo hàm $f'(x)$ là giới hạn của tỉ số $\dfrac{f(x_2)-f(x_1)}{x_2-x_1}$. Nếu đồ thị có tiếp tuyến dốc lên ở **mọi** điểm của $K$ thì nó không thể đi xuống ở đâu trong $K$. Một vài điểm có tiếp tuyến nằm ngang (như $y=x^3$ tại $x=0$) không làm đồ thị quay đầu.

Để xét tính đơn điệu, ta làm theo thứ tự:

1. Tìm tập xác định.
2. Tính $f'(x)$, tìm các điểm làm $f'(x)=0$ hoặc $f'(x)$ không xác định.
3. Lập bảng biến thiên: xét dấu $f'$ trên từng khoảng.
4. Kết luận các khoảng đồng biến, nghịch biến.

:::example Hàm bậc ba
Tìm các khoảng đơn điệu của hàm số $y=x^3-6x^2+9x+1$.

**Lời giải.** Hàm số xác định trên $\mathbb{R}$. Ta tính đạo hàm và phân tích thành nhân tử để thấy dấu:

$$y'=3x^2-12x+9=3(x-1)(x-3),\qquad y'=0\iff x=1\ \text{hoặc}\ x=3.$$

Tam thức $y'$ có $a=3>0$ nên dương ở ngoài hai nghiệm, âm ở giữa. Ta có $y(1)=5$, $y(3)=1$ và bảng biến thiên:

| $x$ | $-\infty$ | | $1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $y'$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $5$ | $\searrow$ | $1$ | $\nearrow$ | $+\infty$ |

Vậy hàm số đồng biến trên các khoảng $(-\infty; 1)$ và $(3; +\infty)$, nghịch biến trên khoảng $(1; 3)$.
:::

Ví dụ tiếp theo cho thấy $f'(x_0)=0$ chưa chắc làm hàm số đổi chiều.

:::example Đạo hàm bằng $0$ tại một điểm
Chứng minh hàm số $y=x^3-3x^2+3x+5$ đồng biến trên $\mathbb{R}$.

**Lời giải.** Đạo hàm là ba lần một bình phương, nên không âm:

$$y'=3x^2-6x+3=3(x-1)^2\ge 0\quad\text{với mọi } x,\ \text{và } y'=0 \iff x=1.$$

Đạo hàm chỉ bằng $0$ tại một điểm, nên theo phần thứ ba của định lí, hàm số đồng biến trên $\mathbb{R}$.

Vậy hàm số đồng biến trên $\mathbb{R}$, dù tại $x=1$ tiếp tuyến nằm ngang.
:::

## Cực trị của hàm số

Trong bài toán flycam, thời điểm $t=2$ cho độ cao lớn hơn mọi thời điểm **lân cận**, dù chưa chắc là cao nhất trong cả chuyến bay. Ta gọi đó là một điểm cực đại.

:::definition Cực đại, cực tiểu
Cho $f$ xác định trên tập $D$ và $x_0\in D$.
- $x_0$ là **điểm cực đại** của $f$ nếu có khoảng $(a; b)\subset D$ chứa $x_0$ sao cho $f(x)<f(x_0)$ với mọi $x\in(a; b)$, $x\neq x_0$. Khi đó $f(x_0)$ là **giá trị cực đại** (cực đại), kí hiệu $y_{\text{CĐ}}$.
- $x_0$ là **điểm cực tiểu** nếu thay "$<$" bằng "$>$". Khi đó $f(x_0)$ là **giá trị cực tiểu**, kí hiệu $y_{\text{CT}}$.
- Điểm $M(x_0; f(x_0))$ là **điểm cực đại (cực tiểu) của đồ thị**. Cực đại và cực tiểu gọi chung là **cực trị**.
:::

:::theorem Dấu hiệu nhận biết cực trị
Cho $f$ liên tục trên khoảng $(a; b)$ chứa $x_0$ và có đạo hàm trên $(a; b)$, có thể trừ tại $x_0$.
- Nếu $f'$ **đổi dấu từ $+$ sang $-$** khi $x$ đi qua $x_0$ thì $x_0$ là điểm cực đại.
- Nếu $f'$ **đổi dấu từ $-$ sang $+$** khi $x$ đi qua $x_0$ thì $x_0$ là điểm cực tiểu.
:::

Lí do: đổi dấu từ $+$ sang $-$ nghĩa là đồ thị đi lên ngay trước $x_0$ và đi xuống ngay sau $x_0$, nên $f(x_0)$ lớn hơn các giá trị lân cận. Trong Ví dụ 1, $y'$ đổi dấu từ $+$ sang $-$ tại $x=1$, nên $x=1$ là điểm cực đại, $y_{\text{CĐ}}=5$; tương tự $x=3$ là điểm cực tiểu, $y_{\text{CT}}=1$.

:::example Hàm bậc bốn có ba cực trị
Tìm cực trị của hàm số $y=x^4-2x^2+3$.

**Lời giải.** Ta tìm nghiệm của $y'$ rồi xét dấu từng thừa số:

$$y'=4x^3-4x=4x(x-1)(x+1),\qquad y'=0\iff x\in\{-1; 0; 1\}.$$

Thay vào hàm số: $y(-1)=2$, $y(0)=3$, $y(1)=2$. Bảng biến thiên:

| $x$ | $-\infty$ | | $-1$ | | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $y'$ | | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $y$ | $+\infty$ | $\searrow$ | $2$ | $\nearrow$ | $3$ | $\searrow$ | $2$ | $\nearrow$ | $+\infty$ |

Vậy hàm số đạt cực tiểu tại $x=\pm1$ với $y_{\text{CT}}=2$, và đạt cực đại tại $x=0$ với $y_{\text{CĐ}}=3$.
:::

:::graph Đồ thị $y=x^4-2x^2+3$
alt: Đồ thị hình chữ W có hai điểm cực tiểu tại x bằng trừ 1 và 1 với tung độ 2, một điểm cực đại tại x bằng 0 với tung độ 3
x: -2.5..2.5
y: 0..6
plot: x^4 - 2x^2 + 3
point: (-1, 2) "(-1; 2)" below
point: (0, 3) "(0; 3)" above
point: (1, 2) "(1; 2)" below
:::

Với phân thức, điểm làm mẫu bằng $0$ không thuộc tập xác định, nhưng vẫn phải ghi vào bảng biến thiên để chia khoảng.

:::example Hàm phân thức
Tìm các khoảng đơn điệu và cực trị của hàm số $y=\dfrac{x^2+3}{x-1}$.

**Lời giải.** Tập xác định $D=\mathbb{R}\setminus\{1\}$. Dùng công thức đạo hàm của thương:

$$y'=\frac{2x(x-1)-(x^2+3)}{(x-1)^2}=\frac{x^2-2x-3}{(x-1)^2}=\frac{(x+1)(x-3)}{(x-1)^2}.$$

Mẫu luôn dương trên $D$, nên dấu của $y'$ là dấu của $(x+1)(x-3)$. Ta có $y(-1)=-2$, $y(3)=6$:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $y'$ | | $+$ | $0$ | $-$ | $\Vert$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $-2$ | $\searrow$ | $\Vert$ | $\searrow$ | $6$ | $\nearrow$ | $+\infty$ |

Vậy hàm số đồng biến trên $(-\infty; -1)$ và $(3; +\infty)$, nghịch biến trên $(-1; 1)$ và $(1; 3)$; cực đại $y_{\text{CĐ}}=y(-1)=-2$, cực tiểu $y_{\text{CT}}=y(3)=6$.

**Nhìn lại.** Ở đây $y_{\text{CĐ}}<y_{\text{CT}}$. Không có gì sai: cực đại chỉ lớn hơn các giá trị **gần** nó.
:::

:::graph Đồ thị $y=\dfrac{x^2+3}{x-1}$
alt: Đồ thị gồm hai nhánh tách nhau bởi đường thẳng đứng nét đứt x bằng 1; nhánh trái có điểm cực đại tại (-1; -2), nhánh phải có điểm cực tiểu tại (3; 6)
x: -7..9
y: -12..16
plot: (x^2 + 3)/(x - 1)
vline: 1 ; dashed
point: (-1, -2) "(-1; -2)" above-left
point: (3, 6) "(3; 6)" below-right
:::

### Dùng đạo hàm cấp hai

Khi xét dấu $f'$ khó (thường gặp với hàm lượng giác), ta có thể dùng đạo hàm cấp hai (lớp 11).

:::note Dấu hiệu dùng đạo hàm cấp hai
Giả sử $f'(x_0)=0$ và $f$ có đạo hàm cấp hai tại $x_0$.
- Nếu $f''(x_0)<0$ thì $x_0$ là điểm cực đại.
- Nếu $f''(x_0)>0$ thì $x_0$ là điểm cực tiểu.
- Nếu $f''(x_0)=0$ thì dấu hiệu này không kết luận được; hãy quay lại xét dấu $f'$.
:::

:::example Hàm lượng giác
Tìm cực trị của hàm số $f(x)=x-2\sin x$ trên khoảng $(0; 2\pi)$.

**Lời giải.** Ta giải $f'(x)=0$ trên $(0; 2\pi)$, rồi xét dấu $f''$ tại từng nghiệm:

$$f'(x)=1-2\cos x=0\iff \cos x=\frac12\iff x=\frac{\pi}{3}\ \text{hoặc}\ x=\frac{5\pi}{3}.$$

Đạo hàm cấp hai là $f''(x)=2\sin x$:

$$f''\left(\frac{\pi}{3}\right)=\sqrt3>0,\qquad f''\left(\frac{5\pi}{3}\right)=-\sqrt3<0.$$

Vậy $f$ đạt cực tiểu tại $x=\dfrac{\pi}{3}$ với $f_{\text{CT}}=\dfrac{\pi}{3}-\sqrt3$, và đạt cực đại tại $x=\dfrac{5\pi}{3}$ với $f_{\text{CĐ}}=\dfrac{5\pi}{3}+\sqrt3$.
:::

Cuối cùng, ta trả lời câu hỏi về flycam ở đầu bài.

:::example Flycam lên và xuống
Độ cao của flycam là $h(t)=t^3-12t^2+36t+10$ (mét), $0\le t\le 7$ (phút). Khi nào flycam lên cao, khi nào hạ xuống? Tìm các cực trị.

**Lời giải.** Ta xét dấu $h'(t)=3(t-2)(t-6)$ trên $(0; 7)$: tam thức có $a=3>0$ nên âm giữa hai nghiệm $2$ và $6$, dương ở ngoài.

$$h'(t)>0 \text{ khi } t\in(0; 2)\cup(6; 7),\qquad h'(t)<0 \text{ khi } t\in(2; 6).$$

$h'$ đổi dấu từ $+$ sang $-$ tại $t=2$ và từ $-$ sang $+$ tại $t=6$.

Vậy flycam lên cao trong $2$ phút đầu và trong phút cuối (từ phút thứ $6$ đến phút thứ $7$), hạ xuống từ phút thứ $2$ đến phút thứ $6$. Nó đạt cực đại $42$ m lúc $t=2$ và cực tiểu $10$ m lúc $t=6$.
:::

:::warning Những sai lầm thường gặp
- **Gộp hai khoảng bằng dấu hợp.** Sai: "$y=\dfrac{x+2}{x-1}$ nghịch biến trên $(-\infty; 1)\cup(1; +\infty)$". Lí do sai: $y(0)=-2<y(2)=4$ dù $0<2$. Đúng: hàm số nghịch biến trên **từng** khoảng $(-\infty; 1)$ và $(1; +\infty)$.
- **Cho rằng $f'(x_0)=0$ là có cực trị.** Sai: "$y=x^3-3x^2+3x+5$ có $y'(1)=0$ nên đạt cực trị tại $x=1$". Lí do sai: $y'=3(x-1)^2$ không đổi dấu qua $x=1$. Đúng: hàm số không có cực trị.
- **Nhầm điểm cực trị với giá trị cực trị.** Sai: "điểm cực đại của $y=x^4-2x^2+3$ là $3$". Lí do sai: điểm cực đại là giá trị của $x$. Đúng: điểm cực đại $x=0$, giá trị cực đại $y_{\text{CĐ}}=3$, điểm cực đại của đồ thị $(0; 3)$.
- **Quên tập xác định.** Sai: lập bảng biến thiên của $y=\dfrac{x^2+3}{x-1}$ mà không ghi $x=1$. Lí do sai: dấu của $y'$ có thể đổi qua $x=1$ và hàm số không xác định tại đó. Đúng: luôn ghi các điểm không xác định vào bảng.
:::

## Thuật ngữ

:::terms
- đồng biến | increasing
- nghịch biến | decreasing
- tính đơn điệu | monotonicity
- bảng biến thiên | table of variations
- điểm cực đại | local maximum point
- điểm cực tiểu | local minimum point
- giá trị cực đại | local maximum value
- giá trị cực tiểu | local minimum value
- cực trị | extremum (turning point)
- đạo hàm cấp hai | second derivative
:::

## Tóm tắt

- $f'>0$ trên $K$ thì $f$ đồng biến trên $K$; $f'<0$ thì nghịch biến. $f'\ge0$ và chỉ bằng $0$ tại hữu hạn điểm thì vẫn đồng biến.
- Các bước: tập xác định → $f'$ và nghiệm của $f'$ → bảng biến thiên → kết luận theo **từng khoảng**.
- $f'$ đổi dấu $+\to-$ tại $x_0$: cực đại; $-\to+$: cực tiểu. Không đổi dấu: không có cực trị.
- Dấu hiệu cấp hai: $f'(x_0)=0$ và $f''(x_0)<0$ thì cực đại, $f''(x_0)>0$ thì cực tiểu.
- Phân biệt điểm cực trị $x_0$, giá trị cực trị $f(x_0)$ và điểm cực trị của đồ thị $(x_0; f(x_0))$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm các khoảng đơn điệu của hàm số $y=-x^3+3x^2+1$.

::hint
**Kiến thức:** $y'>0$ trên một khoảng thì hàm số đồng biến trên khoảng đó, $y'<0$ thì nghịch biến.

**Gợi ý các bước:**
1. Tính $y'$ và phân tích thành nhân tử.
2. Xét dấu $y'$ (chú ý hệ số âm).

::solution
$y'=-3x^2+6x=-3x(x-2)$, có nghiệm $0$ và $2$. Tam thức có $a=-3<0$ nên dương giữa hai nghiệm, âm ở ngoài.

**Đáp số.** Đồng biến trên $(0; 2)$; nghịch biến trên $(-\infty; 0)$ và $(2; +\infty)$.
:::

:::exercise
Tìm cực trị của hàm số $y=x^4-8x^2+1$.

::hint
**Kiến thức:** $y'$ đổi dấu từ $-$ sang $+$ tại điểm cực tiểu, từ $+$ sang $-$ tại điểm cực đại.

**Gợi ý các bước:**
1. Tính $y'=4x^3-16x$ và tìm ba nghiệm.
2. Lập bảng biến thiên.
3. Tính giá trị của $y$ tại các điểm cực trị.

::solution
$y'=4x(x-2)(x+2)$, nghiệm $-2$, $0$, $2$. Dấu của $y'$ lần lượt là $-, +, -, +$ trên bốn khoảng. Vậy cực tiểu tại $x=\pm2$ với $y=16-32+1=-15$, cực đại tại $x=0$ với $y=1$.

**Đáp số.** $y_{\text{CT}}=-15$ tại $x=\pm2$; $y_{\text{CĐ}}=1$ tại $x=0$.
:::

:::exercise
Xét tính đơn điệu của hàm số $y=\dfrac{x+2}{x-1}$.

::hint
**Kiến thức:** $\left(\dfrac{ax+b}{cx+d}\right)'=\dfrac{ad-bc}{(cx+d)^2}$.

**Gợi ý các bước:**
1. Tìm tập xác định.
2. Tính $y'$ và xem dấu của tử.

::solution
$D=\mathbb{R}\setminus\{1\}$ và $y'=\dfrac{1\cdot(-1)-2\cdot1}{(x-1)^2}=\dfrac{-3}{(x-1)^2}<0$ với mọi $x\in D$.

**Đáp số.** Hàm số nghịch biến trên từng khoảng $(-\infty; 1)$ và $(1; +\infty)$, không có cực trị.
:::

:::exercise
Tìm cực trị của hàm số $y=x+\dfrac{4}{x}$.

::hint
**Kiến thức:** quy đồng $y'$ để xét dấu; nhớ $x=0$ không thuộc tập xác định.

**Gợi ý các bước:**
1. Tính $y'=1-\dfrac{4}{x^2}=\dfrac{x^2-4}{x^2}$.
2. Lập bảng biến thiên với các mốc $-2$, $0$, $2$.

::solution
$y'=\dfrac{(x-2)(x+2)}{x^2}$, dấu là dấu của $(x-2)(x+2)$: dương khi $|x|>2$, âm khi $0<|x|<2$. Vậy $y'$ đổi dấu $+\to-$ tại $x=-2$ và $-\to+$ tại $x=2$.

**Đáp số.** $y_{\text{CĐ}}=y(-2)=-4$; $y_{\text{CT}}=y(2)=4$.
:::

:::exercise
Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=x(x-1)^2(x+2)$ với mọi $x\in\mathbb{R}$. Mỗi khẳng định sau đúng hay sai?

a) $f$ đồng biến trên khoảng $(0; +\infty)$.

b) $f$ có ba điểm cực trị.

c) $f$ đạt cực đại tại $x=-2$.

d) $f$ nghịch biến trên khoảng $(-2; 1)$.

::hint
**Kiến thức:** thừa số $(x-1)^2$ không âm nên không làm $f'$ đổi dấu; cực trị chỉ có tại nơi $f'$ đổi dấu.

**Gợi ý các bước:**
1. Lập bảng xét dấu của $f'$ với các mốc $-2$, $0$, $1$.
2. Đọc khoảng đơn điệu và các điểm đổi dấu.

::solution
Dấu của $f'$ là dấu của $x(x+2)$ (trừ tại $x=1$ thì $f'=0$): dương trên $(-\infty; -2)$, âm trên $(-2; 0)$, dương trên $(0; 1)$ và $(1; +\infty)$.

a) **Đúng**: $f'\ge 0$ trên $(0; +\infty)$ và chỉ bằng $0$ tại $x=1$.

b) **Sai**: $f'$ chỉ đổi dấu tại $x=-2$ và $x=0$, nên có hai điểm cực trị.

c) **Đúng**: $f'$ đổi dấu từ $+$ sang $-$ tại $x=-2$.

d) **Sai**: trên $(0; 1)$ ta có $f'>0$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Hàm số $y=x^3-3x^2-9x+4$ có giá trị cực đại $y_{\text{CĐ}}$ và giá trị cực tiểu $y_{\text{CT}}$. Tính $y_{\text{CĐ}}-y_{\text{CT}}$.

::hint
**Kiến thức:** với hàm bậc ba có hai cực trị và $a>0$, điểm cực đại là nghiệm nhỏ hơn của $y'$.

**Gợi ý các bước:**
1. Giải $y'=3x^2-6x-9=0$.
2. Tính $y$ tại hai nghiệm.

::solution
$y'=3(x+1)(x-3)$. Vì $a=3>0$ nên $y'$ đổi dấu $+\to-$ tại $x=-1$ và $-\to+$ tại $x=3$. $y(-1)=-1-3+9+4=9$, $y(3)=27-27-27+4=-23$. Hiệu là $9-(-23)=32$.

**Đáp số.** $32$.
:::

:::exercise
Nồng độ một loại thuốc trong máu sau khi tiêm $t$ giờ là $C(t)=\dfrac{30t}{t^2+9}$ (mg/l), $t>0$. Trong khoảng thời gian nào nồng độ tăng, khi nào giảm? Nồng độ đạt cực đại lúc nào và bằng bao nhiêu?

::hint
**Kiến thức:** đạo hàm của thương $\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}$.

**Gợi ý các bước:**
1. Tính $C'(t)$ và rút gọn tử.
2. Xét dấu $C'(t)$ với $t>0$.

::solution
$C'(t)=\dfrac{30(t^2+9)-30t\cdot 2t}{(t^2+9)^2}=\dfrac{30(9-t^2)}{(t^2+9)^2}$. Với $t>0$: $C'>0$ khi $0<t<3$, $C'<0$ khi $t>3$. Vậy $C$ đạt cực đại tại $t=3$, $C(3)=\dfrac{90}{18}=5$.

**Đáp số.** Tăng trong $3$ giờ đầu, giảm sau đó; cực đại $5$ mg/l lúc $t=3$ giờ.
:::

:::exercise Ôn tập
Tìm cực trị của hàm số $y=x+2\cos x$ trên khoảng $(0; \pi)$.

::hint
**Kiến thức:** phương trình $\sin x=\dfrac12$ (phương trình lượng giác cơ bản, lớp 11) và dấu hiệu dùng đạo hàm cấp hai.

**Gợi ý các bước:**
1. Giải $y'=1-2\sin x=0$ trên $(0; \pi)$.
2. Tính $y''=-2\cos x$ tại từng nghiệm.

::solution
$\sin x=\dfrac12$ cho $x=\dfrac{\pi}{6}$ hoặc $x=\dfrac{5\pi}{6}$. $y''\left(\dfrac{\pi}{6}\right)=-\sqrt3<0$: cực đại; $y''\left(\dfrac{5\pi}{6}\right)=\sqrt3>0$: cực tiểu.

**Đáp số.** $y_{\text{CĐ}}=\dfrac{\pi}{6}+\sqrt3$ tại $x=\dfrac{\pi}{6}$; $y_{\text{CT}}=\dfrac{5\pi}{6}-\sqrt3$ tại $x=\dfrac{5\pi}{6}$.
:::

:::exercise Ôn tập
Chứng minh hàm số $y=x^3+x^2+x+1$ đồng biến trên $\mathbb{R}$.

::hint
**Kiến thức:** tam thức bậc hai có $\Delta<0$ thì luôn cùng dấu với $a$ (xem [dấu của tam thức bậc hai](lesson:sign-of-quadratic)).

**Gợi ý các bước:**
1. Tính $y'$.
2. Tính biệt thức của $y'$ và xem dấu của $a$.

::solution
$y'=3x^2+2x+1$ có $\Delta=4-12=-8<0$ và $a=3>0$, nên $y'>0$ với mọi $x$.

**Đáp số.** $y'>0$ với mọi $x\in\mathbb{R}$, nên hàm số đồng biến trên $\mathbb{R}$.
:::

:::exercise Thử thách
Tìm các khoảng đơn điệu và cực trị của hàm số $y=x\sqrt{4-x^2}$.

::hint
**Kiến thức:** $\left(\sqrt{u}\right)'=\dfrac{u'}{2\sqrt{u}}$; hàm căn chỉ xác định khi biểu thức dưới căn không âm.

**Gợi ý các bước:**
1. Tìm tập xác định.
2. Tính $y'$ và quy đồng thành một phân thức.
3. Xét dấu tử trên $(-2; 2)$.

::solution
$D=[-2; 2]$. Trên $(-2; 2)$:
$$y'=\sqrt{4-x^2}-\frac{x^2}{\sqrt{4-x^2}}=\frac{4-2x^2}{\sqrt{4-x^2}},$$
bằng $0$ khi $x=\pm\sqrt2$. Tử dương khi $|x|<\sqrt2$, âm khi $\sqrt2<|x|<2$. $y(\sqrt2)=\sqrt2\cdot\sqrt2=2$, $y(-\sqrt2)=-2$.

**Đáp số.** Đồng biến trên $(-\sqrt2; \sqrt2)$, nghịch biến trên $(-2; -\sqrt2)$ và $(\sqrt2; 2)$; $y_{\text{CT}}=-2$ tại $x=-\sqrt2$, $y_{\text{CĐ}}=2$ tại $x=\sqrt2$.
:::

## Kiểm tra mini

:::quiz
::mc
Hàm số $y=x^3-3x^2+2$ nghịch biến trên khoảng nào dưới đây?
A. $(-\infty; 0)$.
B. $(2; +\infty)$.
C. $(0; 2)$.
D. $(-2; 0)$.
::key C
$y'=3x^2-6x=3x(x-2)$ có hệ số $a=3>0$ nên $y'<0$ giữa hai nghiệm $0$ và $2$. Phương án D là của người giải sai $y'=0$ thành $x=0$, $x=-2$.

::mc
Điểm cực đại của hàm số $y=-x^3+3x+1$ là
A. $x=-1$.
B. $x=1$.
C. $x=3$.
D. $x=0$.
::key B
$y'=-3(x-1)(x+1)$ đổi dấu từ $+$ sang $-$ khi qua $x=1$. Phương án C là giá trị cực đại $y(1)=3$, không phải điểm cực đại; $x=0$ là nghiệm của $y''$.

::mc
Hàm số $y=f(x)$ có đạo hàm cấp hai trên $\mathbb{R}$, $f'(2)=0$ và $f''(2)=-3$. Khẳng định nào sau đây đúng?
A. Hàm số đạt cực tiểu tại $x=2$.
B. Hàm số đạt cực đại tại $x=-3$.
C. Hàm số không có cực trị tại $x=2$.
D. Hàm số đạt cực đại tại $x=2$.
::key D
Theo dấu hiệu dùng đạo hàm cấp hai: $f'(2)=0$ và $f''(2)<0$ nên $x=2$ là điểm cực đại. Số $-3$ là giá trị của $f''(2)$, không phải một điểm.

::mc
Hàm số nào sau đây đồng biến trên $\mathbb{R}$?
A. $y=x^3+3x-1$.
B. $y=x^3-3x$.
C. $y=\dfrac{2x+1}{x+3}$.
D. $y=x^4+2x^2$.
::key A
$y'=3x^2+3>0$ với mọi $x$. Hàm C chỉ đồng biến trên từng khoảng $(-\infty; -3)$ và $(-3; +\infty)$ vì không xác định tại $x=-3$; hàm D có $y'=4x(x^2+1)$ âm khi $x<0$.

::tf
Cho hàm số $f(x)=2x^3-3x^2-12x+1$.
a) $f'(x)=6x^2-6x-12$.
b) Hàm số đồng biến trên khoảng $(-1; 2)$.
c) Giá trị cực đại của hàm số bằng $8$.
d) Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số có hệ số góc bằng $9$.
::key Đ S Đ S
a) Đúng: đạo hàm từng hạng tử. b) Sai: $f'(x)=6(x+1)(x-2)<0$ trên $(-1; 2)$ nên hàm số nghịch biến. c) Đúng: $f'$ đổi dấu từ $+$ sang $-$ tại $x=-1$ và $f(-1)=8$. d) Sai: hai điểm cực trị là $(-1; 8)$ và $(2; -19)$, hệ số góc là $\dfrac{-19-8}{2-(-1)}=-9$.

::sa
Tính tổng giá trị cực đại và giá trị cực tiểu của hàm số $y=-x^4+8x^2-3$.
::key 10
$y'=-4x(x-2)(x+2)$; hàm số đạt cực đại tại $x=\pm2$ với $y_{\text{CĐ}}=13$ và đạt cực tiểu tại $x=0$ với $y_{\text{CT}}=-3$. Tổng là $13+(-3)=10$ (giá trị cực đại chỉ tính một lần).

::sa
Mực nước trong một hồ chứa sau $t$ giờ được mô hình bởi $h(t)=t^3-15t^2+60t+100$ (cm), $0\le t\le 12$. Mực nước giảm trong khoảng thời gian dài bao nhiêu giờ (làm tròn kết quả đến hàng phần mười)?
::key 4,5
$h'(t)=3(t^2-10t+20)<0$ khi $5-\sqrt5<t<5+\sqrt5$, cả khoảng này nằm trong $[0; 12]$. Độ dài là $2\sqrt5\approx 4{,}47$, làm tròn được $4{,}5$ giờ.
:::
