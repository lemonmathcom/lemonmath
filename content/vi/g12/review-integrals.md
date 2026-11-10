---
title: "Ôn tập: nguyên hàm và tích phân"
description: Ôn bảng nguyên hàm, cách tính tích phân, diện tích hình phẳng, thể tích khối tròn xoay và bài toán thực tế theo dạng câu hỏi của đề thi tốt nghiệp THPT.
minutes: 40
---

:::goals
- Tìm nguyên hàm bằng bảng nguyên hàm và tính chất, kể cả nguyên hàm thoả mãn một điều kiện cho trước.
- Tính tích phân bằng công thức Newton – Leibniz và dùng các tính chất của tích phân.
- Tính diện tích hình phẳng và thể tích khối tròn xoay quanh trục $Ox$.
- Dùng tích phân cho bài toán thực tế: quãng đường từ vận tốc, tổng lượng từ tốc độ thay đổi.
:::

Nguyên hàm và tích phân thường chiếm hai đến ba câu ở Phần I (bảng nguyên hàm, tính chất), có thể một câu đúng/sai ở Phần II và một câu diện tích hoặc bài toán thực tế ở Phần III, tổng cộng thường khoảng $1$ đến $2$ điểm. Máy tính cầm tay tính được tích phân xác định, nên đây là phần dễ kiểm tra lại nhất.

Chi tiết nằm ở các bài [nguyên hàm](lesson:antiderivatives), [tích phân](lesson:definite-integrals) và [ứng dụng của tích phân](lesson:integral-applications).

## Nguyên hàm

:::note Bảng nguyên hàm cần nhớ ($C$ là hằng số)
| $f(x)$ | $\displaystyle\int f(x)\,dx$ |
|---|---|
| $x^\alpha$ ($\alpha\ne-1$) | $\dfrac{x^{\alpha+1}}{\alpha+1}+C$ |
| $\dfrac1x$ | $\ln\lvert x\rvert+C$ |
| $e^x$ | $e^x+C$ |
| $a^x$ ($0<a\ne1$) | $\dfrac{a^x}{\ln a}+C$ |
| $\cos x$ | $\sin x+C$ |
| $\sin x$ | $-\cos x+C$ |
| $\dfrac{1}{\cos^2x}$ | $\tan x+C$ |
| $\dfrac{1}{\sin^2x}$ | $-\cot x+C$ |

Tính chất: $\displaystyle\int\left[f(x)\pm g(x)\right]dx=\int f(x)\,dx\pm\int g(x)\,dx$ và $\displaystyle\int kf(x)\,dx=k\int f(x)\,dx$ ($k\ne0$).
:::

Cách kiểm tra nhanh nhất: lấy đạo hàm kết quả, phải được lại $f(x)$.

:::example Trắc nghiệm: nguyên hàm có điều kiện
Biết $F(x)$ là một nguyên hàm của $f(x)=3x^2+2\sin x$ và $F(0)=1$. Khi đó $F(x)$ bằng
A. $x^3-2\cos x+3$.
B. $x^3+2\cos x-1$.
C. $x^3-2\cos x+1$.
D. $6x+2\cos x+3$.

**Lời giải.** Dùng bảng nguyên hàm, chú ý $\displaystyle\int\sin x\,dx=-\cos x+C$:

$$F(x)=x^3-2\cos x+C,\qquad F(0)=0-2\cos0+C=-2+C=1\iff C=3.$$

Vậy $F(x)=x^3-2\cos x+3$, chọn **A**. Phương án B nhầm dấu nguyên hàm của $\sin x$; C quên $\cos0=1$; D lấy đạo hàm thay vì nguyên hàm.
:::

## Tích phân

:::theorem Công thức Newton – Leibniz và tính chất
Nếu $F$ là một nguyên hàm của $f$ liên tục trên $[a; b]$ thì $\displaystyle\int_a^b f(x)\,dx=\Big[F(x)\Big]_a^b=F(b)-F(a)$. Với $f$, $g$ liên tục và $c\in[a; b]$:
- $\displaystyle\int_a^b\left[f(x)\pm g(x)\right]dx=\int_a^b f(x)\,dx\pm\int_a^b g(x)\,dx$, $\displaystyle\int_a^b kf(x)\,dx=k\int_a^b f(x)\,dx$;
- $\displaystyle\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx$;
- $\displaystyle\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx$.
:::

:::example Đúng/sai: dùng tính chất tích phân
Hàm số $f$ liên tục trên $\mathbb{R}$, $\displaystyle\int_0^3 f(x)\,dx=5$ và $\displaystyle\int_0^1 f(x)\,dx=2$.
a) $\displaystyle\int_1^3 f(x)\,dx=3$.
b) $\displaystyle\int_0^3\left[2f(x)-1\right]dx=7$.
c) $\displaystyle\int_3^1 f(x)\,dx=3$.
d) $\displaystyle\int_0^1\left[f(x)+x\right]dx=2{,}5$.

**Lời giải.** a) **Đúng**: tách đoạn $[0; 3]$ tại $1$: $\displaystyle\int_1^3 f=5-2=3$.

b) **Đúng**: $2\cdot5-\displaystyle\int_0^3 1\,dx=10-3=7$.

c) **Sai**: đổi cận thì đổi dấu, $\displaystyle\int_3^1 f=-3$.

d) **Đúng**: $2+\displaystyle\int_0^1 x\,dx=2+\dfrac12=2{,}5$.

Đáp án: Đ Đ S Đ.
:::

:::example Trả lời ngắn: tính tích phân
Tính $\displaystyle\int_1^e\left(2x+\frac1x\right)dx$ (làm tròn kết quả đến hàng phần trăm).

**Lời giải.** Một nguyên hàm của $2x+\dfrac1x$ trên $(0; +\infty)$ là $x^2+\ln x$:

$$\int_1^e\left(2x+\frac1x\right)dx=\Big[x^2+\ln x\Big]_1^e=(e^2+1)-(1+0)=e^2\approx7{,}389.$$

Làm tròn đến hàng phần trăm, đáp số là $7{,}39$.
:::

## Diện tích và thể tích

:::theorem Công thức
- Diện tích hình phẳng giới hạn bởi $y=f(x)$, $y=g(x)$, $x=a$, $x=b$: $S=\displaystyle\int_a^b\lvert f(x)-g(x)\rvert\,dx$. Với $g(x)=0$ ta được diện tích giữa đồ thị và trục hoành.
- Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y=f(x)$, trục $Ox$, $x=a$, $x=b$ quanh trục $Ox$: $V=\pi\displaystyle\int_a^b f^2(x)\,dx$.
:::

Để bỏ dấu giá trị tuyệt đối, ta tìm các nghiệm của $f(x)-g(x)=0$ trong $[a; b]$, chia đoạn tại các nghiệm đó, và trên mỗi đoạn con lấy "hàm trên trừ hàm dưới".

:::graph Hình phẳng giữa $y=2x$ và $y=x^2$
alt: Parabol y bằng x bình phương và đường thẳng y bằng 2x cắt nhau tại gốc toạ độ và tại điểm (2; 4); phần giữa hai đường từ x bằng 0 đến x bằng 2 được tô màu, đường thẳng nằm trên
x: -1..3
y: -1..5
plot: x^2 ; -1..2.3
plot: 2x ; -0.5..2.5
fill: 2x ; x^2 ; 0..2
point: (0, 0) "O" below-right
point: (2, 4) "(2; 4)" right
:::

:::example Trắc nghiệm: diện tích giữa hai đường
Diện tích hình phẳng giới hạn bởi parabol $y=x^2$ và đường thẳng $y=2x$ bằng
A. $\dfrac43$.
B. $-\dfrac43$.
C. $\dfrac83$.
D. $4$.

**Lời giải.** Hoành độ giao điểm là nghiệm của $x^2=2x$, tức $x=0$ hoặc $x=2$. Trên $[0; 2]$ đường thẳng nằm trên ($2x\ge x^2$):

$$S=\int_0^2(2x-x^2)\,dx=\Big[x^2-\frac{x^3}{3}\Big]_0^2=4-\frac83=\frac43.$$

Chọn **A**. Phương án B lấy "dưới trừ trên" và quên rằng diện tích không âm; C là $\displaystyle\int_0^2x^2\,dx$; D là $\displaystyle\int_0^2 2x\,dx$.
:::

:::example Trả lời ngắn: thể tích khối tròn xoay
Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y=\sqrt x$, trục $Ox$ và đường thẳng $x=4$ quanh trục $Ox$ (làm tròn kết quả đến hàng phần mười).

**Lời giải.** Đồ thị $y=\sqrt x$ cắt $Ox$ tại $x=0$, nên ta lấy tích phân từ $0$ đến $4$ với $f^2(x)=x$:

$$V=\pi\int_0^4 x\,dx=\pi\Big[\frac{x^2}{2}\Big]_0^4=8\pi\approx25{,}13.$$

Làm tròn đến hàng phần mười, đáp số là $25{,}1$.
:::

## Bài toán thực tế

:::note Ghi nhớ
- Vận tốc $v(t)\ge0$ trên $[a; b]$ thì quãng đường đi được là $s=\displaystyle\int_a^b v(t)\,dt$.
- Nếu $Q'(t)$ là tốc độ thay đổi của $Q$ thì lượng thay đổi từ $t=a$ đến $t=b$ là $Q(b)-Q(a)=\displaystyle\int_a^b Q'(t)\,dt$.
:::

:::example Trả lời ngắn: quãng đường phanh
Một ô tô đang chạy thì người lái đạp phanh; từ đó ô tô chuyển động chậm dần đều với vận tốc $v(t)=20-5t$ (m/s), $t$ là số giây tính từ lúc đạp phanh. Từ lúc đạp phanh đến khi dừng hẳn, ô tô đi được bao nhiêu mét?

**Lời giải.** Ô tô dừng khi $v(t)=0$, tức $t=4$. Trên $[0; 4]$ thì $v(t)\ge0$, nên:

$$s=\int_0^4(20-5t)\,dt=\Big[20t-\frac{5t^2}{2}\Big]_0^4=80-40=40.$$

Vậy ô tô đi thêm $40$ m.
:::

:::warning Những sai lầm thường gặp
- **Sai dấu với $\sin$, $\cos$.** $\displaystyle\int\sin x\,dx=-\cos x+C$, còn $\displaystyle\int\cos x\,dx=\sin x+C$.
- **Dùng công thức luỹ thừa cho $\dfrac1x$ hoặc $e^x$.** $\dfrac1x=x^{-1}$ là trường hợp $\alpha=-1$, nguyên hàm là $\ln\lvert x\rvert$.
- **Bỏ dấu giá trị tuyệt đối khi tính diện tích.** Sai: diện tích giữa $y=x^3-x$ và $Ox$ trên $[0; 2]$ là $\displaystyle\int_0^2(x^3-x)\,dx=2$. Đúng: chia tại $x=1$, được $\dfrac14+\dfrac94=\dfrac52$.
- **Quên bình phương hoặc quên $\pi$ trong công thức thể tích.** $V=\pi\displaystyle\int_a^b f^2(x)\,dx$.
- **Quên rằng tích phân của tích không bằng tích các tích phân.**
:::

## Thuật ngữ

:::terms
- nguyên hàm | antiderivative (indefinite integral)
- họ nguyên hàm | family of antiderivatives
- tích phân | definite integral
- cận trên / cận dưới | upper / lower limit
- công thức Newton – Leibniz | fundamental theorem of calculus (Newton–Leibniz formula)
- hình phẳng | plane region
- khối tròn xoay | solid of revolution
- quãng đường / vận tốc | distance / velocity
:::

## Bài tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise Trắc nghiệm
$\displaystyle\int\left(4x^3-\frac{1}{x^2}\right)dx$ bằng
A. $x^4+\dfrac1x+C$.
B. $x^4-\dfrac1x+C$.
C. $12x^2+\dfrac{2}{x^3}+C$.
D. $x^4+\dfrac{1}{3x^3}+C$.

::hint
**Kiến thức:** $\dfrac{1}{x^2}=x^{-2}$ và $\displaystyle\int x^{\alpha}\,dx=\dfrac{x^{\alpha+1}}{\alpha+1}+C$.

**Gợi ý các bước:**
1. $\displaystyle\int x^{-2}\,dx=\dfrac{x^{-1}}{-1}=-\dfrac1x$.
2. Chú ý dấu trừ đứng trước.

::solution
$\displaystyle\int4x^3\,dx=x^4$ và $-\displaystyle\int x^{-2}\,dx=-\left(-\dfrac1x\right)=\dfrac1x$. Phương án B sai dấu; C là đạo hàm; D giảm số mũ thay vì tăng.

**Đáp số.** A.
:::

:::exercise Trắc nghiệm
$\displaystyle\int_0^{\frac{\pi}{2}}\cos x\,dx$ bằng
A. $1$.
B. $0$.
C. $-1$.
D. $\dfrac{\pi}{2}$.

::hint
**Kiến thức:** một nguyên hàm của $\cos x$ là $\sin x$.

**Gợi ý các bước:**
1. Tính $\sin\dfrac{\pi}{2}-\sin0$.

::solution
$\Big[\sin x\Big]_0^{\frac{\pi}{2}}=1-0=1$. Phương án C dùng nhầm nguyên hàm $-\sin x$.

**Đáp số.** A.
:::

:::exercise Trả lời ngắn
Tính $\displaystyle\int_0^2\left(3x^2-2x+1\right)dx$.

::hint
**Kiến thức:** công thức Newton – Leibniz.

**Gợi ý các bước:**
1. Một nguyên hàm là $x^3-x^2+x$.
2. Thay cận $2$ và $0$.

::solution
$\Big[x^3-x^2+x\Big]_0^2=8-4+2=6$.

**Đáp số.** $6$.
:::

:::exercise Đúng/Sai
Cho hàm số $f(x)=e^x+2x$.

a) $F(x)=e^x+x^2$ là một nguyên hàm của $f(x)$.

b) $\displaystyle\int_0^1 f(x)\,dx=e+1$.

c) Nguyên hàm $F$ của $f$ thoả mãn $F(0)=3$ là $F(x)=e^x+x^2+3$.

d) $\displaystyle\int_{-1}^1 f(x)\,dx=e-\dfrac1e$.

::hint
**Kiến thức:** kiểm tra nguyên hàm bằng đạo hàm; $e^0=1$.

**Gợi ý các bước:**
1. Viết $F(x)=e^x+x^2+C$.
2. Tính từng tích phân bằng $\Big[e^x+x^2\Big]$.

::solution
a) **Đúng**: $(e^x+x^2)'=e^x+2x$.

b) **Sai**: $\Big[e^x+x^2\Big]_0^1=(e+1)-(1+0)=e$.

c) **Sai**: $F(0)=1+C=3$ nên $C=2$, $F(x)=e^x+x^2+2$.

d) **Đúng**: $(e+1)-\left(\dfrac1e+1\right)=e-\dfrac1e$.

**Đáp số.** a) Đúng; b) Sai; c) Sai; d) Đúng.
:::

:::exercise Trả lời ngắn
Tính diện tích hình phẳng giới hạn bởi parabol $y=x^2-4$ và trục hoành (làm tròn kết quả đến hàng phần mười).

::hint
**Kiến thức:** $S=\displaystyle\int_a^b\lvert f(x)\rvert\,dx$, với $a$, $b$ là giao điểm với trục hoành.

**Gợi ý các bước:**
1. Giải $x^2-4=0$.
2. Trên $[-2; 2]$, $x^2-4\le0$, nên $\lvert x^2-4\rvert=4-x^2$.

::solution
$$S=\int_{-2}^2(4-x^2)\,dx=\Big[4x-\frac{x^3}{3}\Big]_{-2}^2=\left(8-\frac83\right)-\left(-8+\frac83\right)=\frac{32}{3}\approx10{,}67.$$

**Đáp số.** $10{,}7$.
:::

:::exercise Tự luận
Tính diện tích hình phẳng giới hạn bởi đồ thị $y=x^3-x$, trục hoành và hai đường thẳng $x=0$, $x=2$.

::hint
**Kiến thức:** chia đoạn tích phân tại nghiệm của $f(x)$ để bỏ dấu giá trị tuyệt đối.

**Gợi ý các bước:**
1. $x^3-x=x(x-1)(x+1)$: âm trên $(0; 1)$, dương trên $(1; 2)$.
2. Tính hai tích phân rồi cộng.

::solution
$$S=\int_0^1(x-x^3)\,dx+\int_1^2(x^3-x)\,dx=\left(\frac12-\frac14\right)+\left[\left(4-2\right)-\left(\frac14-\frac12\right)\right]=\frac14+\frac94=\frac52.$$

**Đáp số.** $S=\dfrac52$.
:::

:::exercise Trắc nghiệm
Quay hình phẳng giới hạn bởi $y=2x$, trục $Ox$ và đường thẳng $x=3$ quanh trục $Ox$, ta được một khối nón có thể tích bằng
A. $36\pi$.
B. $9\pi$.
C. $108\pi$.
D. $18\pi$.

::hint
**Kiến thức:** $V=\pi\displaystyle\int_a^b f^2(x)\,dx$, ở đây $f^2(x)=4x^2$.

**Gợi ý các bước:**
1. Tính $\pi\displaystyle\int_0^3 4x^2\,dx$.
2. Kiểm tra bằng công thức thể tích khối nón $\dfrac13\pi r^2h$.

::solution
$V=\pi\Big[\dfrac{4x^3}{3}\Big]_0^3=36\pi$. Kiểm tra: khối nón có $r=6$, $h=3$, $V=\dfrac13\pi\cdot36\cdot3=36\pi$. Phương án B quên bình phương; C quên chia cho $3$; D chỉ bình phương $x$.

**Đáp số.** A.
:::

:::exercise Trả lời ngắn
Nước chảy vào một bể với tốc độ $r(t)=0{,}6t+2$ (lít/phút), $t$ tính bằng phút. Trong $10$ phút đầu, bao nhiêu lít nước chảy vào bể?

::hint
**Kiến thức:** lượng nước $=\displaystyle\int_0^{10} r(t)\,dt$.

**Gợi ý các bước:**
1. Một nguyên hàm là $0{,}3t^2+2t$.
2. Thay cận.

::solution
$\Big[0{,}3t^2+2t\Big]_0^{10}=30+20=50$.

**Đáp số.** $50$.
:::

:::exercise Đúng/Sai
Một ô tô đạp phanh và chuyển động chậm dần đều với vận tốc $v(t)=12-3t$ (m/s), $t$ là số giây kể từ lúc đạp phanh.

a) Ô tô dừng hẳn sau $4$ giây.

b) Quãng đường đi được sau $t$ giây kể từ lúc phanh là $s(t)=12t-1{,}5t^2$ (m), $0\le t\le4$.

c) Từ lúc đạp phanh đến khi dừng, ô tô đi được $24$ m.

d) Trong giây cuối cùng trước khi dừng, ô tô đi được $3$ m.

::hint
**Kiến thức:** $s(t)=\displaystyle\int_0^t v(u)\,du$; quãng đường từ $t=a$ đến $t=b$ là $s(b)-s(a)$.

**Gợi ý các bước:**
1. Giải $v(t)=0$.
2. Tính $s(4)$ và $s(4)-s(3)$.

::solution
a) **Đúng**: $12-3t=0\iff t=4$.

b) **Đúng**: $s(t)=\Big[12u-1{,}5u^2\Big]_0^t=12t-1{,}5t^2$.

c) **Đúng**: $s(4)=48-24=24$.

d) **Sai**: $s(4)-s(3)=24-22{,}5=1{,}5$ m.

**Đáp số.** a) Đúng; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise Thử thách
Một cổng có dạng parabol, chân cổng rộng $8$ m và đỉnh cao $4$ m so với mặt đất. Người ta lắp kính kín toàn bộ mặt cổng. Tính diện tích phần kính (đơn vị: m², làm tròn đến hàng phần mười).

::hint
**Kiến thức:** chọn hệ trục có gốc ở giữa chân cổng, trục $Oy$ đi qua đỉnh; diện tích $=\displaystyle\int_{-4}^4 f(x)\,dx$.

**Gợi ý các bước:**
1. Parabol đi qua $(-4; 0)$, $(4; 0)$, $(0; 4)$: $y=4-\dfrac{x^2}{4}$.
2. Tính tích phân.

::solution
Parabol có dạng $y=4-ax^2$ và đi qua $(4; 0)$ nên $a=\dfrac14$.
$$S=\int_{-4}^4\left(4-\frac{x^2}{4}\right)dx=\Big[4x-\frac{x^3}{12}\Big]_{-4}^4=2\left(16-\frac{16}{3}\right)=\frac{64}{3}\approx21{,}33.$$

**Đáp số.** $21{,}3$.
:::

## Kiểm tra mini

:::quiz
::mc
Họ nguyên hàm của hàm số $f(x)=2^x$ là
A. $x\cdot2^{x-1}+C$.
B. $2^x\ln2+C$.
C. $\dfrac{2^{x+1}}{x+1}+C$.
D. $\dfrac{2^x}{\ln2}+C$.
::key D
$\left(\dfrac{2^x}{\ln2}\right)'=\dfrac{2^x\ln2}{\ln2}=2^x$. Phương án B là đạo hàm của $2^x$; C và A dùng nhầm công thức cho luỹ thừa $x^\alpha$.

::mc
$\displaystyle\int_1^2\frac1x\,dx$ bằng
A. $\dfrac34$.
B. $\ln2$.
C. $\ln3$.
D. $\dfrac12$.
::key B
$\Big[\ln x\Big]_1^2=\ln2-0=\ln2$. Phương án A dùng nhầm "nguyên hàm" $-\dfrac{1}{x^2}$ (thực ra là đạo hàm); C cộng hai cận.

::mc
Hàm số $f$, $g$ liên tục trên $[a; b]$. Diện tích hình phẳng giới hạn bởi $y=f(x)$, $y=g(x)$, $x=a$, $x=b$ là
A. $\pi\displaystyle\int_a^b\left[f(x)-g(x)\right]^2dx$.
B. $\displaystyle\int_a^b\left[f(x)-g(x)\right]dx$.
C. $\displaystyle\int_a^b\lvert f(x)-g(x)\rvert\,dx$.
D. $\left\lvert\displaystyle\int_a^b\left[f(x)-g(x)\right]dx\right\rvert$.
::key C
Diện tích cần giá trị tuyệt đối bên trong tích phân. B có thể âm; D sai khi $f-g$ đổi dấu trên $[a; b]$; A là dạng công thức thể tích.

::mc
Biết $\displaystyle\int_0^2 f(x)\,dx=3$. Giá trị của $\displaystyle\int_0^2\left[2f(x)+x\right]dx$ là
A. $8$.
B. $7$.
C. $6$.
D. $10$.
::key A
$2\cdot3+\Big[\dfrac{x^2}{2}\Big]_0^2=6+2=8$. Phương án B lấy $\displaystyle\int_0^2x\,dx=1$; C quên số hạng $x$.

::tf
Cho hình phẳng $H$ giới hạn bởi $y=x^2$, trục $Ox$ và các đường thẳng $x=0$, $x=3$.
a) Diện tích của $H$ là $S=\displaystyle\int_0^3x^2\,dx$.
b) $S=9$.
c) Thể tích khối tròn xoay khi quay $H$ quanh $Ox$ là $V=\pi\displaystyle\int_0^3x^2\,dx$.
d) $V=\dfrac{243\pi}{5}$.
::key Đ Đ S Đ
a) Đúng: $x^2\ge0$. b) Đúng: $\dfrac{27}{3}=9$. c) Sai: phải bình phương hàm số, $V=\pi\displaystyle\int_0^3x^4\,dx$. d) Đúng: $\pi\Big[\dfrac{x^5}{5}\Big]_0^3=\dfrac{243\pi}{5}$.

::sa
Một vật chuyển động với vận tốc $v(t)=3t^2+2t$ (m/s). Tính quãng đường vật đi được từ $t=0$ đến $t=4$ giây (đơn vị: mét).
::key 80
$v(t)\ge0$ trên $[0; 4]$, $s=\Big[t^3+t^2\Big]_0^4=64+16=80$.

::sa
Tính $\displaystyle\int_0^1\left(e^x+1\right)dx$ (làm tròn kết quả đến hàng phần trăm).
::key 2,72
$\Big[e^x+x\Big]_0^1=(e+1)-1=e\approx2{,}718$, làm tròn được $2{,}72$.
:::
