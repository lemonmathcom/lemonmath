---
title: Tích phân
description: Hiểu tích phân qua diện tích dưới đồ thị, tính tích phân bằng công thức Newton – Leibniz, dùng các tính chất, xử lí dấu giá trị tuyệt đối.
minutes: 22
---

:::goals
- Hiểu ý nghĩa của tích phân qua diện tích dưới đồ thị và quãng đường đi được.
- Tính tích phân bằng công thức $\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)$.
- Dùng các tính chất: hằng số nhân, tổng, đổi cận và cộng hai đoạn liền nhau.
- Tính tích phân chứa dấu giá trị tuyệt đối và tích phân của hàm dạng $f(ax+b)$.
:::

Một chiếc xe máy tăng tốc trong $3$ giây. Vận tốc sau $t$ giây là $v(t)=t^2+2$ (m/s): lúc đầu $2$ m/s, sau $1$ giây $3$ m/s, sau $2$ giây $6$ m/s, sau $3$ giây $11$ m/s. Trong $3$ giây đó xe đi được bao nhiêu mét?

Một cách đoán nhanh là lấy trung bình vận tốc đầu và cuối: $\dfrac{2+11}{2}\cdot3=19{,}5$ m. Cách này chỉ đúng khi vận tốc tăng đều, mà ở đây vận tốc tăng ngày càng nhanh. Ta sẽ tìm câu trả lời đúng.

## Diện tích dưới đồ thị

### Khám phá: chia nhỏ thời gian

Nếu vận tốc không đổi, quãng đường bằng vận tốc nhân thời gian, chính là diện tích một hình chữ nhật. Khi vận tốc thay đổi, ta chia $[0; 3]$ thành các đoạn nhỏ và coi vận tốc gần như không đổi trên mỗi đoạn.

Với các đoạn dài $1$ giây, lấy vận tốc ở đầu mỗi đoạn ta được một ước lượng thiếu, lấy ở cuối mỗi đoạn được một ước lượng thừa:

$$1\cdot(2+3+6)=11,\qquad 1\cdot(3+6+11)=20.$$

| Độ dài mỗi đoạn | $1$ | $0{,}5$ | $0{,}1$ |
|---|---|---|---|
| Ước lượng thiếu | $11$ | $12{,}875$ | $14{,}555$ |
| Ước lượng thừa | $20$ | $17{,}375$ | $15{,}455$ |

Hai ước lượng kẹp lại gần một số, đó là $15$. Số này chính là **diện tích hình phẳng** dưới đồ thị $v(t)$ từ $t=0$ đến $t=3$.

:::graph Quãng đường là diện tích dưới đồ thị $v(t)=t^2+2$
alt: Đồ thị parabol v bằng t bình phương cộng 2 trên đoạn từ 0 đến 3, phần dưới đồ thị và trên trục hoành được tô màu
x: -0.5..4
y: -1..12
plot: x^2 + 2 ; -0.5..3.3
fill: x^2 + 2 ; 0 ; 0..3
vline: 3 ; dashed
point: (3, 11) "(3; 11)" left
:::

Điều bất ngờ là: nếu $S(t)=\dfrac{t^3}{3}+2t$ là một nguyên hàm của $v(t)$ thì $S(3)-S(0)=9+6-0=15$, đúng bằng con số trên. Đây không phải trùng hợp.

## Định nghĩa tích phân

:::definition Tích phân
Cho hàm số $f(x)$ liên tục trên đoạn $[a; b]$ và $F(x)$ là một nguyên hàm của $f(x)$ trên đoạn đó. Hiệu $F(b)-F(a)$ gọi là **tích phân** từ $a$ đến $b$ của $f(x)$, kí hiệu
$$\int_a^b f(x)\,dx=\Big[F(x)\Big]_a^b=F(b)-F(a).$$
Số $a$ là **cận dưới**, $b$ là **cận trên**. Ta quy ước $\displaystyle\int_a^a f(x)\,dx=0$ và $\displaystyle\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx$.
:::

Kết quả không phụ thuộc nguyên hàm được chọn: thay $F$ bằng $F+C$ thì $(F(b)+C)-(F(a)+C)=F(b)-F(a)$. Tích phân cũng không phụ thuộc tên biến: $\displaystyle\int_a^b f(x)\,dx=\int_a^b f(t)\,dt$.

:::theorem Ý nghĩa hình học
Nếu $f$ liên tục và không âm trên $[a; b]$ thì $\displaystyle\int_a^b f(x)\,dx$ là diện tích hình phẳng giới hạn bởi đồ thị $y=f(x)$, trục hoành và hai đường thẳng $x=a$, $x=b$.
:::

**Vì sao đúng?** Gọi $S(x)$ là diện tích phần dưới đồ thị từ $a$ đến $x$. Khi $x$ tăng thêm một lượng nhỏ $h$, diện tích tăng thêm một dải hẹp gần như hình chữ nhật, nên $S(x+h)-S(x)\approx f(x)\cdot h$. Chia cho $h$ rồi cho $h\to0$, ta được $S'(x)=f(x)$, tức $S$ là một nguyên hàm của $f$ với $S(a)=0$. Vậy diện tích cần tìm là $S(b)=S(b)-S(a)=F(b)-F(a)$.

:::example Tích phân của một đa thức
Tính $\displaystyle\int_1^2(3x^2-2x+1)\,dx$.

**Lời giải.** Một nguyên hàm là $x^3-x^2+x$. Ta thay cận trên rồi trừ đi giá trị tại cận dưới:

$$\int_1^2(3x^2-2x+1)\,dx=\Big[x^3-x^2+x\Big]_1^2=(8-4+2)-(1-1+1)=6-1=5.$$

Vậy tích phân bằng $5$.
:::

Giá trị tại cận dưới không phải lúc nào cũng bằng $0$, đặc biệt với hàm lượng giác.

:::example Hàm lượng giác
Tính $\displaystyle\int_0^{\frac{\pi}{2}}(2\cos x-\sin x)\,dx$.

**Lời giải.** Một nguyên hàm của $2\cos x-\sin x$ là $2\sin x+\cos x$. Tại $x=0$ ta có $\cos0=1$, nên giá trị tại cận dưới khác $0$:

$$\Big[2\sin x+\cos x\Big]_0^{\frac{\pi}{2}}=(2\cdot1+0)-(0+1)=1.$$

Vậy tích phân bằng $1$.
:::

## Tính chất của tích phân

:::theorem Tính chất
Cho $f$, $g$ liên tục trên một khoảng chứa $a$, $b$, $c$ và $k$ là hằng số. Khi đó
- $\displaystyle\int_a^b kf(x)\,dx=k\int_a^b f(x)\,dx$;
- $\displaystyle\int_a^b\big(f(x)\pm g(x)\big)\,dx=\int_a^b f(x)\,dx\pm\int_a^b g(x)\,dx$;
- $\displaystyle\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx$.
:::

Hai tính chất đầu đến từ tính chất của nguyên hàm. Tính chất thứ ba đúng vì $\big(F(c)-F(a)\big)+\big(F(b)-F(c)\big)=F(b)-F(a)$; về hình học, ta cắt một miền thành hai mảnh.

:::example Dùng tính chất khi không biết hàm số
Biết $\displaystyle\int_0^2 f(x)\,dx=3$, $\displaystyle\int_2^5 f(x)\,dx=-1$ và $\displaystyle\int_0^5 g(x)\,dx=4$. Tính $\displaystyle\int_0^5\big(2f(x)-3g(x)\big)\,dx$ và $\displaystyle\int_5^0 f(x)\,dx$.

**Lời giải.** Cộng hai đoạn liền nhau $[0; 2]$ và $[2; 5]$:

$$\int_0^5 f(x)\,dx=3+(-1)=2.$$

Tách tổng và đưa hằng số ra ngoài:

$$\int_0^5\big(2f(x)-3g(x)\big)\,dx=2\cdot2-3\cdot4=-8.$$

Đổi chỗ hai cận thì đổi dấu: $\displaystyle\int_5^0 f(x)\,dx=-2$.
:::

Với dấu giá trị tuyệt đối, ta tìm chỗ biểu thức đổi dấu rồi tách đoạn bằng tính chất thứ ba.

:::example Tích phân chứa dấu giá trị tuyệt đối
Tính $\displaystyle\int_0^2\lvert x^2-1\rvert\,dx$.

**Lời giải.** Trên $[0; 2]$, $x^2-1$ đổi dấu tại $x=1$: âm trên $[0; 1)$, dương trên $(1; 2]$. Ta bỏ dấu giá trị tuyệt đối trên từng đoạn:

$$\begin{aligned}
\int_0^2\lvert x^2-1\rvert\,dx&=\int_0^1(1-x^2)\,dx+\int_1^2(x^2-1)\,dx\\
&=\Big[x-\frac{x^3}{3}\Big]_0^1+\Big[\frac{x^3}{3}-x\Big]_1^2=\frac23+\left(\frac23+\frac23\right)=2.
\end{aligned}$$

Vậy tích phân bằng $2$, và đó là tổng diện tích hai phần tô màu ở hình dưới.
:::

:::graph Đồ thị $y=\lvert x^2-1\rvert$ trên $[0; 2]$
alt: Đồ thị y bằng trị tuyệt đối của x bình phương trừ 1, chạm trục hoành tại x bằng 1; hai phần dưới đồ thị từ 0 đến 1 và từ 1 đến 2 được tô màu
x: -0.5..2.5
y: -0.5..3.5
plot: abs(x^2 - 1) ; -0.5..2.2
fill: abs(x^2 - 1) ; 0 ; 0..2
vline: 2 ; dashed
point: (1, 0) "1" below
:::

## Hàm dạng $f(ax+b)$

Nếu $F$ là một nguyên hàm của $f$ thì theo quy tắc đạo hàm hàm hợp (lớp 11), $\big(F(ax+b)\big)'=a\,f(ax+b)$. Chia cho $a$ ta được quy tắc:

$$\int f(ax+b)\,dx=\frac1a F(ax+b)+C\qquad(a\neq0).$$

Chẳng hạn $\displaystyle\int\cos 2x\,dx=\frac12\sin2x+C$ và $\displaystyle\int e^{3x}dx=\frac13e^{3x}+C$. Đây là trường hợp đơn giản nhất của phương pháp đổi biến $u=ax+b$.

:::example Đổi biến $u=ax+b$
Tính $\displaystyle\int_0^1(2x+1)^3\,dx$.

**Lời giải.** Với $u=2x+1$, nguyên hàm của $u^3$ là $\dfrac{u^4}{4}$; quy tắc trên thêm thừa số $\dfrac12$:

$$\int_0^1(2x+1)^3\,dx=\Big[\frac{(2x+1)^4}{8}\Big]_0^1=\frac{81}{8}-\frac18=10.$$

**Kiểm tra.** Khai triển $(2x+1)^3=8x^3+12x^2+6x+1$, nguyên hàm $2x^4+4x^3+3x^2+x$, thay cận được $2+4+3+1=10$.
:::

## Trở lại chiếc xe máy

:::example Quãng đường của xe máy
Xe máy có vận tốc $v(t)=t^2+2$ (m/s). Tính quãng đường xe đi được trong $3$ giây đầu.

**Lời giải.** Vận tốc luôn dương nên quãng đường bằng tích phân của vận tốc trên $[0; 3]$:

$$\int_0^3(t^2+2)\,dt=\Big[\frac{t^3}{3}+2t\Big]_0^3=9+6=15.$$

Vậy xe đi được $15$ m, không phải $19{,}5$ m như cách đoán bằng trung bình.
:::

:::warning Những sai lầm thường gặp
- **Trừ ngược.** Sai: $\displaystyle\int_1^2(3x^2-2x+1)\,dx=F(1)-F(2)=-5$. Lí do sai: định nghĩa là $F(\text{cận trên})-F(\text{cận dưới})$. Đúng: $F(2)-F(1)=5$.
- **Coi giá trị tại cận dưới bằng $0$.** Sai: $\displaystyle\int_0^{\frac{\pi}{2}}\sin x\,dx=-\cos\frac{\pi}{2}=0$. Lí do sai: $-\cos0=-1\neq0$. Đúng: $\Big[-\cos x\Big]_0^{\frac{\pi}{2}}=0-(-1)=1$.
- **Đưa dấu giá trị tuyệt đối ra ngoài.** Sai: $\displaystyle\int_0^2\lvert x^2-1\rvert\,dx=\left\lvert\int_0^2(x^2-1)\,dx\right\rvert=\frac23$. Lí do sai: phần âm và phần dương bù trừ nhau trong tích phân bên trong. Đúng: tách tại $x=1$, được $2$.
- **Quên thừa số $\dfrac1a$.** Sai: $\displaystyle\int_0^1(2x+1)^3dx=\Big[\frac{(2x+1)^4}{4}\Big]_0^1=20$. Lí do sai: đạo hàm của $\dfrac{(2x+1)^4}{4}$ là $2(2x+1)^3$. Đúng: chia thêm cho $2$, được $10$.
:::

## Thuật ngữ

:::terms
- tích phân | definite integral
- cận dưới, cận trên | lower limit, upper limit
- công thức Newton – Leibniz | fundamental theorem of calculus
- hàm dưới dấu tích phân | integrand
- diện tích dưới đồ thị | area under the graph
- tổng xấp xỉ diện tích | approximating sum (Riemann sum)
- đổi biến | substitution
- giá trị tuyệt đối | absolute value
:::

## Tóm tắt

- $\displaystyle\int_a^b f(x)\,dx=\Big[F(x)\Big]_a^b=F(b)-F(a)$, với $F$ là một nguyên hàm bất kì của $f$.
- $f\ge0$ thì tích phân là diện tích dưới đồ thị; vận tốc dương thì tích phân là quãng đường.
- $\displaystyle\int_a^a=0$, $\displaystyle\int_b^a=-\int_a^b$, $\displaystyle\int_a^b=\int_a^c+\int_c^b$; hằng số nhân và tổng tách được.
- Có dấu giá trị tuyệt đối: tìm chỗ đổi dấu, tách đoạn, bỏ dấu trên từng đoạn.
- $\displaystyle\int f(ax+b)\,dx=\frac1aF(ax+b)+C$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính $\displaystyle\int_0^2(x^3-2x+3)\,dx$.

::hint
**Kiến thức:** $\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)$.

**Gợi ý các bước:**
1. Tìm một nguyên hàm $F(x)=\dfrac{x^4}{4}-x^2+3x$.
2. Tính $F(2)-F(0)$.

::solution
$\Big[\dfrac{x^4}{4}-x^2+3x\Big]_0^2=(4-4+6)-0=6$.

**Đáp số.** $6$.
:::

:::exercise
Tính $\displaystyle\int_1^4\left(\sqrt x-\frac{1}{x^2}\right)dx$.

::hint
**Kiến thức:** $\sqrt x=x^{\frac12}$ có nguyên hàm $\dfrac23x\sqrt x$; $x^{-2}$ có nguyên hàm $-\dfrac1x$.

**Gợi ý các bước:**
1. Viết một nguyên hàm $F(x)=\dfrac23x\sqrt x+\dfrac1x$.
2. Tính $F(4)-F(1)$, cẩn thận với phân số.

::solution
$F(4)=\dfrac{16}{3}+\dfrac14$, $F(1)=\dfrac23+1$. Hiệu là $\dfrac{14}{3}-\dfrac34=\dfrac{56-9}{12}=\dfrac{47}{12}$.

**Đáp số.** $\dfrac{47}{12}$.
:::

:::exercise
Tính $\displaystyle\int_0^{\pi}(\sin x+2)\,dx$.

::hint
**Kiến thức:** nguyên hàm của $\sin x$ là $-\cos x$; $\cos\pi=-1$, $\cos0=1$.

**Gợi ý các bước:**
1. Viết $F(x)=-\cos x+2x$.
2. Tính $F(\pi)-F(0)$.

::solution
$F(\pi)=1+2\pi$, $F(0)=-1$. Vậy tích phân bằng $1+2\pi-(-1)=2+2\pi$.

**Đáp số.** $2+2\pi$.
:::

:::exercise
Biết $\displaystyle\int_1^3 f(x)\,dx=5$ và $\displaystyle\int_1^3 g(x)\,dx=-2$. Tính $\displaystyle\int_1^3\big(3f(x)-2g(x)+x\big)\,dx$.

::hint
**Kiến thức:** tách tổng, đưa hằng số ra ngoài dấu tích phân.

**Gợi ý các bước:**
1. Viết thành $3\cdot5-2\cdot(-2)+\displaystyle\int_1^3x\,dx$.
2. Tính $\displaystyle\int_1^3x\,dx$.

::solution
$\displaystyle\int_1^3x\,dx=\Big[\frac{x^2}{2}\Big]_1^3=\frac92-\frac12=4$. Tổng là $15+4+4=23$.

**Đáp số.** $23$.
:::

:::exercise
Xét tích phân $I=\displaystyle\int_0^3\lvert x-2\rvert\,dx$. Mỗi khẳng định sau đúng hay sai?

a) Trên đoạn $[0; 2]$, $\lvert x-2\rvert=2-x$.

b) $I=\left\lvert\displaystyle\int_0^3(x-2)\,dx\right\rvert=\dfrac32$.

c) $I=\dfrac52$.

d) $\displaystyle\int_3^0\lvert x-2\rvert\,dx=\dfrac52$.

::hint
**Kiến thức:** tách đoạn tại chỗ $x-2$ đổi dấu; đổi cận thì đổi dấu.

**Gợi ý các bước:**
1. Xét dấu $x-2$ trên $[0; 2]$ và $[2; 3]$.
2. Tính hai tích phân con rồi cộng.

::solution
a) **Đúng**: với $x\le2$ thì $x-2\le0$.

b) **Sai**: không đưa dấu giá trị tuyệt đối ra ngoài được; $I$ không bằng $\dfrac32$ (xem c).

c) **Đúng**: $\displaystyle\int_0^2(2-x)\,dx=2$ và $\displaystyle\int_2^3(x-2)\,dx=\frac12$, nên $I=\dfrac52$.

d) **Sai**: đổi cận thì đổi dấu, nên tích phân đó bằng $-\dfrac52$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Tính $\displaystyle\int_0^1(3x+1)^2\,dx$.

::hint
**Kiến thức:** $\displaystyle\int f(ax+b)\,dx=\frac1aF(ax+b)+C$, ở đây $a=3$.

**Gợi ý các bước:**
1. Một nguyên hàm là $\dfrac{(3x+1)^3}{9}$.
2. Thay cận $1$ và $0$.

::solution
$\Big[\dfrac{(3x+1)^3}{9}\Big]_0^1=\dfrac{64}{9}-\dfrac19=7$.

**Đáp số.** $7$.
:::

:::exercise
Nước chảy vào một bể với tốc độ $r(t)=40-2t$ (lít/phút), $0\le t\le10$. Tính lượng nước chảy vào bể trong $10$ phút đầu.

::hint
**Kiến thức:** lượng nước chảy vào từ $t=a$ đến $t=b$ là $\displaystyle\int_a^b r(t)\,dt$ (tốc độ không âm).

**Gợi ý các bước:**
1. Viết $\displaystyle\int_0^{10}(40-2t)\,dt$.
2. Tính bằng nguyên hàm $40t-t^2$.

::solution
$\Big[40t-t^2\Big]_0^{10}=400-100=300$.

**Đáp số.** $300$ lít.
:::

:::exercise Ôn tập
Cho $F(x)$ là một nguyên hàm của $f(x)$ trên $\mathbb{R}$ với $F(1)=2$ và $F(4)=7$. Tính $\displaystyle\int_1^4 f(x)\,dx$ và $\displaystyle\int_1^4\big(2f(x)+1\big)\,dx$.

::hint
**Kiến thức:** định nghĩa tích phân qua nguyên hàm (xem [nguyên hàm](lesson:antiderivatives)).

**Gợi ý các bước:**
1. $\displaystyle\int_1^4f(x)\,dx=F(4)-F(1)$.
2. Tách tổng; $\displaystyle\int_1^41\,dx=3$.

::solution
$\displaystyle\int_1^4f(x)\,dx=7-2=5$. Khi đó $\displaystyle\int_1^4\big(2f(x)+1\big)\,dx=2\cdot5+3=13$.

**Đáp số.** $5$ và $13$.
:::

:::exercise Ôn tập
Tính $\displaystyle\int_0^{\ln3}e^x\,dx$ và $\displaystyle\int_1^2 2^x\,dx$ (giá trị gần đúng của tích phân thứ hai làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** $e^{\ln a}=a$ (lôgarit, lớp 11); nguyên hàm của $2^x$ là $\dfrac{2^x}{\ln2}$.

**Gợi ý các bước:**
1. $\Big[e^x\Big]_0^{\ln3}=e^{\ln3}-e^0$.
2. $\Big[\dfrac{2^x}{\ln2}\Big]_1^2=\dfrac{4-2}{\ln2}$.

::solution
$\displaystyle\int_0^{\ln3}e^x\,dx=3-1=2$. $\displaystyle\int_1^22^x\,dx=\frac{2}{\ln2}\approx2{,}885$.

**Đáp số.** $2$ và $\dfrac{2}{\ln2}\approx2{,}89$.
:::

:::exercise Thử thách
Tính $\displaystyle\int_{-1}^2\lvert x^2-x\rvert\,dx$.

::hint
**Kiến thức:** $x^2-x=x(x-1)$ đổi dấu tại $0$ và $1$; dương ngoài hai nghiệm, âm ở giữa.

**Gợi ý các bước:**
1. Tách thành ba đoạn $[-1; 0]$, $[0; 1]$, $[1; 2]$.
2. Dùng nguyên hàm $G(x)=\dfrac{x^3}{3}-\dfrac{x^2}{2}$ cho từng đoạn, đổi dấu ở đoạn giữa.

::solution
$G(-1)=-\dfrac56$, $G(0)=0$, $G(1)=-\dfrac16$, $G(2)=\dfrac23$. Ba phần: $G(0)-G(-1)=\dfrac56$; $-(G(1)-G(0))=\dfrac16$; $G(2)-G(1)=\dfrac56$. Tổng $\dfrac56+\dfrac16+\dfrac56=\dfrac{11}{6}$.

**Đáp số.** $\dfrac{11}{6}$.
:::

## Kiểm tra mini

:::quiz
::mc
Tích phân $\displaystyle\int_1^2(2x+1)\,dx$ bằng
A. $6$.
B. $-4$.
C. $4$.
D. $2$.
::key C
$\Big[x^2+x\Big]_1^2=6-2=4$. A quên trừ giá trị tại cận dưới, B trừ ngược, D tính $f(2)-f(1)$ thay vì dùng nguyên hàm.

::mc
Biết $\displaystyle\int_0^5 f(x)\,dx=7$ và $\displaystyle\int_0^2 f(x)\,dx=3$. Giá trị $\displaystyle\int_2^5 f(x)\,dx$ bằng
A. $10$.
B. $4$.
C. $-4$.
D. $-10$.
::key B
$\displaystyle\int_0^5=\int_0^2+\int_2^5$ nên $\displaystyle\int_2^5 f(x)\,dx=7-3=4$. A cộng thay vì trừ, C và D sai dấu.

::mc
Tích phân $\displaystyle\int_0^{\pi}\sin x\,dx$ bằng
A. $-2$.
B. $1$.
C. $2$.
D. $0$.
::key C
$\Big[-\cos x\Big]_0^{\pi}=-(-1)-(-1)=2$. A dùng nhầm nguyên hàm $\cos x$, B coi giá trị tại cận dưới bằng $0$, D là kết quả của $\cos x$ trên $[0; \pi]$.

::mc
Tích phân $\displaystyle\int_0^1 e^{2x}\,dx$ bằng
A. $e^2-1$.
B. $\dfrac{e^2-1}{2}$.
C. $2(e^2-1)$.
D. $\dfrac{e^2}{2}$.
::key B
Nguyên hàm là $\dfrac{e^{2x}}{2}$, nên tích phân bằng $\dfrac{e^2-e^0}{2}=\dfrac{e^2-1}{2}$. A quên thừa số $\dfrac12$, C nhân thay vì chia, D coi $e^0=0$.

::tf
Cho hàm số $f(x)=x^2-4x+3$.
a) $\displaystyle\int_0^3 f(x)\,dx=0$.
b) $f(x)\le0$ với mọi $x\in[1; 3]$.
c) $\displaystyle\int_0^3\lvert f(x)\rvert\,dx=0$.
d) $\displaystyle\int_0^3\lvert f(x)\rvert\,dx=\dfrac83$.
::key Đ Đ S Đ
a) Đúng: $\Big[\dfrac{x^3}{3}-2x^2+3x\Big]_0^3=9-18+9=0$. b) Đúng: $f$ có hai nghiệm $1$, $3$ và hệ số $a>0$. c) Sai: tích phân của hàm không âm, không đồng nhất bằng $0$, thì dương. d) Đúng: $\displaystyle\int_0^1 f=\frac43$ và $\displaystyle\int_1^3(-f)=\frac43$, tổng $\dfrac83$.

::sa
Tính $\displaystyle\int_0^2(x^3+3x^2)\,dx$.
::key 12
$\Big[\dfrac{x^4}{4}+x^3\Big]_0^2=4+8=12$.

::sa
Tính $\displaystyle\int_1^e\left(2x+\frac1x\right)dx$ (làm tròn kết quả đến hàng phần mười).
::key 7,4
$\Big[x^2+\ln x\Big]_1^e=(e^2+1)-(1+0)=e^2\approx7{,}389$, làm tròn được $7{,}4$.
:::
