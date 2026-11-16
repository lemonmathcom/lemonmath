---
title: Đạo hàm
description: Hiểu đạo hàm tại một điểm như giới hạn của tỉ số số gia, ý nghĩa vận tốc tức thời và hệ số góc tiếp tuyến, mối liên hệ với tính liên tục.
minutes: 25
---

:::goals
- Hiểu định nghĩa đạo hàm của hàm số tại một điểm như giới hạn của tỉ số số gia.
- Tính được đạo hàm bằng định nghĩa và viết được phương trình tiếp tuyến của đồ thị.
- Hiểu ý nghĩa vận tốc tức thời và hệ số góc, và biết mối liên hệ giữa có đạo hàm và liên tục.
- Vận dụng đạo hàm vào bài toán chuyển động và tốc độ thay đổi.
:::

Giả sử một vật rơi tự do, sau $t$ giây đi được $s(t)=5t^2$ mét (số liệu giả định). Từ giây thứ $1$ đến giây thứ $2$, vật đi được $s(2)-s(1)=15$ mét, nên vận tốc trung bình là $15$ m/s. Nhưng đồng hồ tốc độ không đo trung bình, nó cho biết tốc độ **ngay tại một thời điểm**. Vận tốc tại đúng giây thứ $1$ là bao nhiêu?

Ta không thể chia cho khoảng thời gian bằng $0$. Điều ta làm được là thu hẹp dần khoảng thời gian và xem vận tốc trung bình tiến về đâu. Ý tưởng đó chính là đạo hàm.

## Khám phá: thu hẹp khoảng thời gian

Xét khoảng từ $t=1$ đến $t=1+h$. Vận tốc trung bình là $\dfrac{s(1+h)-s(1)}{h}=\dfrac{5(1+h)^2-5}{h}=10+5h$.

| $h$ | $1$ | $0{,}1$ | $0{,}01$ | $0{,}001$ |
|---|---|---|---|---|
| Vận tốc trung bình (m/s) | $15$ | $10{,}5$ | $10{,}05$ | $10{,}005$ |

Khi $h$ càng gần $0$, vận tốc trung bình càng gần $10$ m/s. Ta nói vận tốc tức thời tại $t=1$ là $10$ m/s, và viết $\displaystyle\lim_{h\to0}(10+5h)=10$.

## Định nghĩa đạo hàm

:::definition Đạo hàm tại một điểm
Cho hàm số $y=f(x)$ xác định trên khoảng $(a; b)$ và $x_0\in(a; b)$. Nếu giới hạn
$$\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}$$
tồn tại và hữu hạn thì giới hạn đó gọi là **đạo hàm** của $f$ tại $x_0$, kí hiệu $f'(x_0)$, và $f$ gọi là **có đạo hàm** tại $x_0$. Đặt $x=x_0+h$, ta cũng có
$$f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}.$$
:::

**Hiểu sâu hơn.** Tử số $f(x)-f(x_0)$ là độ biến thiên của hàm, mẫu số $x-x_0$ là độ biến thiên của biến. Tỉ số của chúng là tốc độ thay đổi trung bình trên khoảng từ $x_0$ đến $x$. Đạo hàm là tốc độ thay đổi tại đúng điểm $x_0$. Nếu $f$ có đạo hàm tại mọi điểm của khoảng $(a; b)$ thì $f'(x)$ là một hàm số, gọi là hàm đạo hàm của $f$.

**Hai ý nghĩa.** Nếu $s(t)$ là quãng đường thì $s'(t_0)$ là vận tốc tức thời tại $t_0$. Về hình học, tỉ số $\dfrac{f(x)-f(x_0)}{x-x_0}$ là hệ số góc của cát tuyến nối hai điểm $(x_0; f(x_0))$ và $(x; f(x))$. Khi $x\to x_0$, cát tuyến tiến về **tiếp tuyến**, nên $f'(x_0)$ là hệ số góc của tiếp tuyến tại điểm đó.

:::theorem Phương trình tiếp tuyến
Nếu $f$ có đạo hàm tại $x_0$ thì tiếp tuyến của đồ thị tại điểm $M(x_0; f(x_0))$ có phương trình
$$y=f'(x_0)(x-x_0)+f(x_0).$$
:::

:::graph Cát tuyến tiến về tiếp tuyến của $y=x^2$ tại điểm $(1; 1)$
alt: Parabol y bằng x bình phương, đường thẳng cát tuyến nét đứt đi qua hai điểm (1, 1) và (2, 4), và tiếp tuyến tại (1, 1) có hệ số góc 2
x: -1..3
y: -1..6
plot: x^2
plot: 3*x-2 ; dashed
plot: 2*x-1
point: (1, 1) "" below-right
point: (2, 4) "" below-right
label: (-0.8, 4.5) "y = x^2"
label: (2.2, 5.2) "cát tuyến, hệ số góc 3"
label: (-0.6, -0.8) "tiếp tuyến, hệ số góc 2"
:::

:::theorem Có đạo hàm thì liên tục
Nếu hàm số $f$ có đạo hàm tại $x_0$ thì $f$ liên tục tại $x_0$.
:::

**Vì sao?** Với $x\neq x_0$, ta viết $f(x)-f(x_0)=\dfrac{f(x)-f(x_0)}{x-x_0}\cdot(x-x_0)$. Khi $x\to x_0$, thừa số thứ nhất tiến về $f'(x_0)$ (hữu hạn) còn thừa số thứ hai tiến về $0$, nên tích tiến về $0$. Vậy $\lim_{x\to x_0}f(x)=f(x_0)$, tức $f$ liên tục tại $x_0$. Chiều ngược lại **không đúng**: hàm liên tục có thể không có đạo hàm, như ví dụ $y=|x|$ bên dưới.

## Ví dụ

Ta bắt đầu với định nghĩa.

:::example Tính đạo hàm bằng định nghĩa
Tính đạo hàm bằng định nghĩa:

a) $f(x)=x^2$ tại $x_0=3$.

b) $f(x)=\dfrac1x$ tại $x_0=2$.

**Lời giải.** a) Với $x\neq3$: $\dfrac{x^2-9}{x-3}=\dfrac{(x-3)(x+3)}{x-3}=x+3$. Khi $x\to3$ giá trị này tiến về $6$. Vậy $f'(3)=6$.

b) Với $x\neq2$:
$$\frac{\frac1x-\frac12}{x-2}=\frac{\frac{2-x}{2x}}{x-2}=-\frac{1}{2x}.$$
Khi $x\to2$ giá trị này tiến về $-\dfrac14$. Vậy $f'(2)=-\dfrac14$.
:::

Tiếp theo ta viết phương trình tiếp tuyến.

:::example Phương trình tiếp tuyến
Cho $f(x)=x^2-2x$.

a) Viết phương trình tiếp tuyến của đồ thị tại điểm có hoành độ $x_0=2$.

b) Tìm tiếp tuyến tại $x_0=1$ và cho biết nó có đặc điểm gì.

**Lời giải.** a) Ta có $f(2)=0$ và $\dfrac{f(x)-f(2)}{x-2}=\dfrac{x(x-2)}{x-2}=x\to2$, nên $f'(2)=2$. Tiếp tuyến: $y=2(x-2)+0=2x-4$.

b) Ta có $f(1)=-1$ và $\dfrac{f(x)+1}{x-1}=\dfrac{(x-1)^2}{x-1}=x-1\to0$, nên $f'(1)=0$. Tiếp tuyến: $y=0\cdot(x-1)-1=-1$, là đường thẳng nằm ngang.

Vậy a) $y=2x-4$; b) $y=-1$ (tiếp tuyến nằm ngang, ứng với điểm thấp nhất của parabol).
:::

Không phải hàm liên tục nào cũng có đạo hàm.

:::example Khi nào có đạo hàm?
Xét tính có đạo hàm tại $x_0$ của:

a) $f(x)=|x|$ tại $x_0=0$.

b) $g(x)=\begin{cases}x^2&\text{nếu }x\le1\\2x-1&\text{nếu }x>1\end{cases}$ tại $x_0=1$.

**Lời giải.** a) Ta có $\dfrac{f(x)-f(0)}{x-0}=\dfrac{|x|}{x}$. Khi $x\to0^+$ tỉ số bằng $1$; khi $x\to0^-$ tỉ số bằng $-1$. Hai giới hạn một bên khác nhau nên $f$ không có đạo hàm tại $0$, dù $f$ liên tục tại $0$.

b) Ta có $g(1)=1$. Bên trái: $\dfrac{x^2-1}{x-1}=x+1\to2$. Bên phải: $\dfrac{(2x-1)-1}{x-1}=2\to2$. Hai giới hạn một bên bằng nhau nên $g$ có đạo hàm tại $1$ và $g'(1)=2$.

Vậy a) không có đạo hàm; b) có đạo hàm, $g'(1)=2$.
:::

Giờ ta quay lại bài toán vật rơi, với một thời điểm khác, đi đủ bốn bước.

:::example Vận dụng: vận tốc tức thời
Giả sử một vật rơi tự do, sau $t$ giây đi được $s(t)=5t^2$ mét (số liệu giả định). Tính vận tốc tức thời tại $t=2$.

**Lời giải.**

*Hiểu đề.* Vận tốc tức thời tại $t=2$ là $s'(2)$.

*Tìm cách giải.* Dùng định nghĩa: lập tỉ số $\dfrac{s(t)-s(2)}{t-2}$ rồi rút gọn thừa số $t-2$ trước khi lấy giới hạn.

*Giải.* Với $t\neq2$:
$$\frac{5t^2-20}{t-2}=\frac{5(t-2)(t+2)}{t-2}=5(t+2).$$
Khi $t\to2$, giá trị này tiến về $20$. Vậy vận tốc tức thời tại $t=2$ là $20$ m/s.

*Nhìn lại.* Kết quả có hợp lí không? Vận tốc trung bình từ giây $1$ đến giây $2$ là $15$ m/s, và vật càng rơi càng nhanh, nên vận tốc cuối giây thứ $2$ phải lớn hơn $15$: $20$ hợp lí. Cùng cách làm ở $t=1$ cho $10$ m/s, và ta thấy vận tốc tại $t=2$ gấp đôi vận tốc tại $t=1$. Nếu lặp lại ở $t_0$ bất kì thì sao? Ta được $s'(t_0)=10t_0$, tức vận tốc tỉ lệ thuận với thời gian rơi.
:::

:::warning Những sai lầm thường gặp
- **Thay thẳng $x=x_0$ vào tỉ số.** Sai: $\dfrac{x^2-9}{x-3}$ tại $x=3$ cho $\dfrac00=0$, nên $f'(3)=0$. Lí do sai: $\dfrac00$ chưa xác định, phải rút gọn thừa số $x-3$ trước. Đúng: tỉ số bằng $x+3$ nên giới hạn là $6$.
- **Cho rằng liên tục thì có đạo hàm.** Sai: $y=|x|$ liên tục tại $0$ nên có đạo hàm tại $0$. Lí do sai: chiều ngược lại của định lí không đúng; hai giới hạn một bên là $1$ và $-1$. Đúng: $|x|$ liên tục nhưng không có đạo hàm tại $0$.
- **Nhầm tiếp tuyến với đường cắt đồ thị một điểm.** Sai: tiếp tuyến của đồ thị tại $x_0$ là đường thẳng đồ thị cắt đúng một lần. Lí do sai: tiếp tuyến được định nghĩa bằng hệ số góc $f'(x_0)$ và có thể cắt đồ thị ở điểm khác. Đúng: tiếp tuyến là đường thẳng đi qua $(x_0; f(x_0))$ có hệ số góc $f'(x_0)$.
- **Quên $f(x_0)$ trong phương trình tiếp tuyến.** Sai: $y=f'(x_0)(x-x_0)$. Lí do sai: tại $x=x_0$ đường này cho $y=0$, nên không đi qua điểm tiếp xúc $(x_0; f(x_0))$ khi $f(x_0)\neq0$. Đúng: $y=f'(x_0)(x-x_0)+f(x_0)$.
:::

**Kết nối.** Đạo hàm dùng giới hạn và tính liên tục từ bài [hàm số liên tục](lesson:continuity): chính tính liên tục là điều kiện cần của việc có đạo hàm. Bài [các quy tắc tính đạo hàm](lesson:differentiation-rules) sẽ cho ta các công thức tính nhanh, tránh phải lập giới hạn mỗi lần, và bài [đạo hàm cấp hai](lesson:second-derivative) xét tốc độ thay đổi của chính đạo hàm, như gia tốc. Trong thực tế, đạo hàm đo mức độ nhanh chậm của mọi đại lượng thay đổi theo thời gian hay theo một đại lượng khác.

## Thuật ngữ

:::terms
- đạo hàm | derivative
- có đạo hàm | differentiable
- hàm đạo hàm | derivative function
- cát tuyến | secant line
- tiếp tuyến | tangent line
- hệ số góc | gradient
- vận tốc trung bình | average velocity
- vận tốc tức thời | instantaneous velocity
- giới hạn một bên | one-sided limit
- tốc độ thay đổi | rate of change
:::

## Tóm tắt

- $f'(x_0)=\displaystyle\lim_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}=\lim_{h\to0}\dfrac{f(x_0+h)-f(x_0)}{h}$.
- $f'(x_0)$ là hệ số góc của tiếp tuyến tại $(x_0; f(x_0))$; tiếp tuyến: $y=f'(x_0)(x-x_0)+f(x_0)$.
- Nếu $s(t)$ là quãng đường thì $s'(t_0)$ là vận tốc tức thời tại $t_0$.
- Có đạo hàm tại $x_0$ thì liên tục tại $x_0$; ngược lại không đúng.
- Hàm có đạo hàm tại $x_0$ khi hai giới hạn một bên của tỉ số số gia tồn tại và bằng nhau.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính đạo hàm bằng định nghĩa:

a) $f(x)=2x^2-x$ tại $x_0=1$.

b) $f(x)=x^3$ tại $x_0=2$.

c) $f(x)=\dfrac1x$ tại $x_0=-1$.

d) $f(x)=\sqrt x$ tại $x_0=4$.

::hint
**Kiến thức:** $f'(x_0)=\displaystyle\lim_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}$.

**Gợi ý các bước:**
1. Lập tỉ số rồi phân tích tử thành nhân tử chứa $x-x_0$ (câu d: nhân với biểu thức liên hợp).
2. Rút gọn rồi cho $x\to x_0$.

::solution
a) $\dfrac{2x^2-x-1}{x-1}=\dfrac{(2x+1)(x-1)}{x-1}=2x+1\to3$. Vậy $f'(1)=3$.

b) $\dfrac{x^3-8}{x-2}=x^2+2x+4\to12$. Vậy $f'(2)=12$.

c) $\dfrac{\frac1x+1}{x+1}=\dfrac{\frac{1+x}{x}}{x+1}=\dfrac1x\to-1$. Vậy $f'(-1)=-1$.

d) $\dfrac{\sqrt x-2}{x-4}=\dfrac{\sqrt x-2}{(\sqrt x-2)(\sqrt x+2)}=\dfrac{1}{\sqrt x+2}\to\dfrac14$. Vậy $f'(4)=\dfrac14$.

**Đáp số.** a) $3$; b) $12$; c) $-1$; d) $\dfrac14$.
:::

:::exercise
Tìm hàm đạo hàm $f'(x)$ bằng định nghĩa:

a) $f(x)=x^2-3x$.

b) $f(x)=\dfrac1x$ ($x\neq0$).

c) $f(x)=c$ (hàm hằng).

::hint
**Kiến thức:** $f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$.

**Gợi ý các bước:**
1. Viết $f(x+h)-f(x)$ và rút gọn.
2. Chia cho $h$ rồi cho $h\to0$.

::solution
a) $f(x+h)-f(x)=(x+h)^2-3(x+h)-x^2+3x=2xh+h^2-3h$. Chia cho $h$: $2x+h-3\to2x-3$. Vậy $f'(x)=2x-3$.

b) $\dfrac{1}{x+h}-\dfrac1x=\dfrac{-h}{x(x+h)}$. Chia cho $h$: $-\dfrac{1}{x(x+h)}\to-\dfrac{1}{x^2}$. Vậy $f'(x)=-\dfrac{1}{x^2}$.

c) $f(x+h)-f(x)=c-c=0$ nên $f'(x)=0$.

**Đáp số.** a) $2x-3$; b) $-\dfrac1{x^2}$; c) $0$.
:::

:::exercise
Viết phương trình tiếp tuyến của đồ thị:

a) $y=x^2$ tại điểm có hoành độ $-1$.

b) $y=x^3$ tại điểm có hoành độ $2$.

c) $y=\dfrac1x$ tại điểm có hoành độ $\dfrac12$.

::hint
**Kiến thức:** $y=f'(x_0)(x-x_0)+f(x_0)$; $(x^2)'=2x$, $(x^3)'=3x^2$, $\left(\dfrac1x\right)'=-\dfrac1{x^2}$.

**Gợi ý các bước:**
1. Tính $f(x_0)$ và $f'(x_0)$.
2. Thay vào công thức rồi rút gọn.

::solution
a) $f(-1)=1$, $f'(-1)=-2$. Tiếp tuyến: $y=-2(x+1)+1=-2x-1$.

b) $f(2)=8$, $f'(2)=12$. Tiếp tuyến: $y=12(x-2)+8=12x-16$.

c) $f\left(\dfrac12\right)=2$, $f'\left(\dfrac12\right)=-4$. Tiếp tuyến: $y=-4\left(x-\dfrac12\right)+2=-4x+4$.

**Đáp số.** a) $y=-2x-1$; b) $y=12x-16$; c) $y=-4x+4$.
:::

:::exercise
Xét tính có đạo hàm của hàm số tại điểm đã cho, và tính đạo hàm nếu có:

a) $f(x)=|x-1|$ tại $x_0=1$.

b) $f(x)=\begin{cases}x^2&\text{nếu }x\le2\\4x-4&\text{nếu }x>2\end{cases}$ tại $x_0=2$.

c) $g(x)=\begin{cases}x^2&\text{nếu }x\le1\\3x-2&\text{nếu }x>1\end{cases}$ tại $x_0=1$.

::hint
**Kiến thức:** có đạo hàm khi hai giới hạn một bên của $\dfrac{f(x)-f(x_0)}{x-x_0}$ bằng nhau.

**Gợi ý các bước:**
1. Tính giá trị hàm tại $x_0$.
2. Tính giới hạn khi $x\to x_0^-$ và $x\to x_0^+$ rồi so sánh.

::solution
a) Tỉ số là $\dfrac{|x-1|}{x-1}$: bên phải bằng $1$, bên trái bằng $-1$. Không có đạo hàm.

b) $f(2)=4$. Bên trái: $\dfrac{x^2-4}{x-2}=x+2\to4$. Bên phải: $\dfrac{4x-4-4}{x-2}=4\to4$. Có đạo hàm, $f'(2)=4$.

c) $g(1)=1$. Bên trái: $\dfrac{x^2-1}{x-1}=x+1\to2$. Bên phải: $\dfrac{3x-2-1}{x-1}=3\to3$. Hai giới hạn khác nhau, không có đạo hàm.

**Đáp số.** a) Không; b) Có, $4$; c) Không.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau:

a) Hàm số $y=|x|$ có đạo hàm tại $x=0$.

b) Nếu $f$ có đạo hàm tại $x_0$ thì $f$ liên tục tại $x_0$.

c) Đạo hàm $f'(x_0)$ là hệ số góc của tiếp tuyến của đồ thị tại điểm có hoành độ $x_0$.

d) Với $f(x)=x^3$ thì $f'(2)=6$.

::hint
**Kiến thức:** định nghĩa đạo hàm; mối liên hệ có đạo hàm và liên tục; ý nghĩa hình học.

**Gợi ý các bước:**
1. Nhớ hai giới hạn một bên của $|x|$ tại $0$.
2. Câu d: dùng kết quả $f'(2)=12$ đã tính.

::solution
a) **Sai**: hai giới hạn một bên là $1$ và $-1$.

b) **Đúng**: định lí có đạo hàm thì liên tục.

c) **Đúng**: ý nghĩa hình học của đạo hàm.

d) **Sai**: $f'(2)=12$, không phải $6$.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Giả sử một vật rơi tự do, sau $t$ giây đi được $s(t)=5t^2$ mét (số liệu giả định).

a) Tính vận tốc tức thời tại $t=3$ bằng định nghĩa.

b) Dùng $s'(t)=10t$ (đã rút ra ở ví dụ), sau bao nhiêu giây vật đạt vận tốc $40$ m/s?

::hint
**Kiến thức:** $v(t_0)=s'(t_0)$.

**Gợi ý các bước:**
1. a) Rút gọn $\dfrac{5t^2-45}{t-3}$.
2. b) Giải $10t=40$.

::solution
a) $\dfrac{5t^2-45}{t-3}=\dfrac{5(t-3)(t+3)}{t-3}=5(t+3)\to30$. Vậy $v(3)=30$ m/s.

b) $10t=40$ nên $t=4$ giây.

**Đáp số.** a) $30$ m/s; b) $4$ giây.
:::

:::exercise
Giả sử chi phí sản xuất $q$ sản phẩm là $C(q)=0{,}02q^2+3q+50$ (triệu đồng) (số liệu giả định).

a) Tính $C'(100)$ bằng định nghĩa.

b) Tính chi phí thực tế để sản xuất thêm sản phẩm thứ $101$, tức $C(101)-C(100)$. So sánh với $C'(100)$.

::hint
**Kiến thức:** $C'(q_0)$ xấp xỉ chi phí làm thêm một sản phẩm khi đã sản xuất $q_0$.

**Gợi ý các bước:**
1. a) Rút gọn $\dfrac{C(q)-C(100)}{q-100}$.
2. b) Tính hiệu hai giá trị.

::solution
a) $\dfrac{C(q)-C(100)}{q-100}=\dfrac{0{,}02(q^2-100^2)+3(q-100)}{q-100}=0{,}02(q+100)+3\to7$. Vậy $C'(100)=7$ triệu đồng mỗi sản phẩm.

b) $C(101)-C(100)=0{,}02\cdot201+3=7{,}02$ triệu đồng, rất gần $C'(100)=7$.

**Đáp số.** a) $7$ triệu đồng/sản phẩm; b) $7{,}02$ triệu đồng, xấp xỉ $C'(100)$.
:::

:::exercise
Giả sử một đoàn tàu chạy được quãng đường $s(t)=2t^2+3t$ mét sau $t$ giây (số liệu giả định).

a) Tính vận tốc trung bình trong khoảng từ $t=4$ đến $t=5$.

b) Tính vận tốc tức thời tại $t=4$ và so sánh với kết quả câu a.

::hint
**Kiến thức:** vận tốc trung bình $=\dfrac{s(t_2)-s(t_1)}{t_2-t_1}$; vận tốc tức thời $=s'(t_0)$.

**Gợi ý các bước:**
1. a) Tính $s(4)$ và $s(5)$.
2. b) Phân tích $2t^2+3t-44=(t-4)(2t+11)$.

::solution
a) $s(4)=44$, $s(5)=65$; vận tốc trung bình là $\dfrac{65-44}{1}=21$ m/s.

b) $\dfrac{s(t)-s(4)}{t-4}=\dfrac{2t^2+3t-44}{t-4}=2t+11\to19$. Vậy $v(4)=19$ m/s, nhỏ hơn $21$ m/s vì tàu đang tăng tốc nên vận tốc cuối khoảng lớn hơn vận tốc đầu khoảng.

**Đáp số.** a) $21$ m/s; b) $19$ m/s.
:::

:::exercise
Ôn lại luỹ thừa với số mũ hữu tỉ. Cho $f(x)=x^{3/2}$ ($x>0$). Tính $f'(4)$ bằng định nghĩa.

::hint
**Kiến thức:** $x^{3/2}=\left(\sqrt x\right)^3$; đặt $u=\sqrt x$.

**Gợi ý các bước:**
1. Viết tỉ số theo $u$ và phân tích $u^3-8$, $u^2-4$.
2. Rút gọn rồi cho $u\to2$.

::solution
Đặt $u=\sqrt x$ thì $x\to4$ tương đương $u\to2$. Tỉ số bằng $\dfrac{u^3-8}{u^2-4}=\dfrac{(u-2)(u^2+2u+4)}{(u-2)(u+2)}=\dfrac{u^2+2u+4}{u+2}\to\dfrac{12}{4}=3$.

Vậy $f'(4)=3$.

**Đáp số.** $3$.
:::

:::exercise Thử thách
Cho $f$ là hàm số chẵn, có đạo hàm tại $0$. Chứng minh $f'(0)=0$.

::hint
**Kiến thức:** hàm chẵn: $f(-h)=f(h)$.

**Gợi ý các bước:**
1. Viết $f'(0)$ bằng định nghĩa với $h\to0$ và với $-h\to0$.
2. So sánh hai biểu thức.

::solution
Vì $f$ có đạo hàm tại $0$ nên $f'(0)=\displaystyle\lim_{h\to0}\dfrac{f(h)-f(0)}{h}$. Thay $h$ bằng $-h$ (vẫn $\to0$):
$$f'(0)=\lim_{h\to0}\frac{f(-h)-f(0)}{-h}=\lim_{h\to0}\frac{f(h)-f(0)}{-h}=-f'(0).$$
Suy ra $2f'(0)=0$, tức $f'(0)=0$.

**Đáp số.** $f'(0)=0$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $f(x)=x^2+2x$. Giá trị $f'(1)$ bằng
A. $4$.
B. $2$.
C. $3$.
D. $5$.
::key A
$\dfrac{x^2+2x-3}{x-1}=\dfrac{(x-1)(x+3)}{x-1}=x+3\to4$. Phương án C là $f(1)$, B chỉ lấy hệ số của $2x$, D cộng nhầm.

::mc
Tiếp tuyến của đồ thị $y=x^3$ tại điểm có hoành độ $1$ có phương trình
A. $y=3x+2$.
B. $y=3x-2$.
C. $y=x$.
D. $y=-3x+4$.
::key B
$f(1)=1$ và $f'(1)=3$ nên $y=3(x-1)+1=3x-2$. Phương án A sai dấu hệ số tự do, C dùng hệ số góc $1$, D dùng hệ số góc $-3$.

::mc
Hàm số $f(x)=|x|$ có tính chất nào sau đây?
A. Có đạo hàm tại $0$ và $f'(0)=1$.
B. Có đạo hàm tại $0$ và $f'(0)=0$.
C. Liên tục tại $0$ nhưng không có đạo hàm tại $0$.
D. Không liên tục tại $0$.
::key C
$|x|$ liên tục tại $0$, nhưng hai giới hạn một bên của tỉ số số gia là $1$ và $-1$ nên không có đạo hàm. Phương án B, A nhầm về giá trị, D nhầm về tính liên tục.

::mc
Một chất điểm có quãng đường $s(t)=t^2+4t$ (mét) sau $t$ giây. Vận tốc tức thời tại $t=2$ bằng
A. $4$ m/s.
B. $6$ m/s.
C. $10$ m/s.
D. $8$ m/s.
::key D
$\dfrac{t^2+4t-12}{t-2}=\dfrac{(t-2)(t+6)}{t-2}=t+6\to8$. Phương án A chỉ lấy hệ số $4$ của $4t$, còn B và C do rút gọn tỉ số sai.

::tf
Cho hàm số $h(x)=\begin{cases}x^2&\text{nếu }x\le0\\x&\text{nếu }x>0.\end{cases}$ Xét tính đúng sai của các mệnh đề sau:
a) $h$ liên tục tại $x=0$.
b) Giới hạn của $\dfrac{h(x)-h(0)}{x}$ khi $x\to0^+$ bằng $1$.
c) Giới hạn của $\dfrac{h(x)-h(0)}{x}$ khi $x\to0^-$ bằng $1$.
d) $h$ có đạo hàm tại $x=0$.
::key Đ Đ S S
a) Đúng: $h(0)=0$, giới hạn hai bên đều bằng $0$. b) Đúng: $\dfrac{x-0}{x}=1$. c) Sai: $\dfrac{x^2}{x}=x\to0$. d) Sai: hai giới hạn một bên khác nhau ($1$ và $0$).

::sa
Một vật có quãng đường $s(t)=3t^2+t$ mét sau $t$ giây (số liệu giả định). Tính vận tốc tức thời tại $t=5$ (đơn vị m/s).
::key 31
$\dfrac{3t^2+t-80}{t-5}=\dfrac{(t-5)(3t+16)}{t-5}=3t+16\to31$.

::sa
Tính hệ số góc của tiếp tuyến của đồ thị $y=\dfrac1x$ tại điểm có hoành độ $\dfrac14$.
::key -16
$\dfrac{\frac1x-4}{x-\frac14}=\dfrac{\frac{1-4x}{x}}{x-\frac14}=\dfrac{-4\left(x-\frac14\right)}{x\left(x-\frac14\right)}=-\dfrac4x\to-16$.
:::
