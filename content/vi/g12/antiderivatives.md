---
title: Nguyên hàm
description: Hiểu nguyên hàm là phép ngược của đạo hàm, dùng bảng nguyên hàm cơ bản, tìm nguyên hàm thoả mãn một điều kiện và tính quãng đường từ vận tốc.
minutes: 20
---

:::goals
- Hiểu nguyên hàm của một hàm số và họ nguyên hàm $F(x)+C$.
- Dùng bảng nguyên hàm cơ bản và hai tính chất tuyến tính để tìm $\displaystyle\int f(x)\,dx$.
- Tìm nguyên hàm thoả mãn một điều kiện cho trước, và kiểm tra kết quả bằng cách lấy đạo hàm.
- Tìm quãng đường khi biết vận tốc trong bài toán chuyển động.
:::

Một ô tô đang chạy với vận tốc $20$ m/s thì người lái đạp phanh. Từ lúc đó, vận tốc của xe sau $t$ giây là $v(t)=20-5t$ (m/s), và xe dừng hẳn sau $4$ giây. Trong $4$ giây ấy xe đi thêm được bao nhiêu mét?

Bạn có thể nghĩ: $20\cdot 4=80$ m. Nhưng xe chạy chậm dần, nên quãng đường phải ít hơn. Để trả lời, ta cần làm ngược lại phép tính đạo hàm.

## Nguyên hàm là gì?

### Khám phá: hàm số nào có đạo hàm là $2x$?

Ở lớp 11 ta đã biết lấy đạo hàm. Bây giờ ta hỏi ngược lại: biết đạo hàm là $2x$, hàm số ban đầu là gì?

| Hàm số $F(x)$ | $x^2$ | $x^2+1$ | $x^2-5$ | $x^2+\sqrt3$ |
|---|---|---|---|---|
| Đạo hàm $F'(x)$ | $2x$ | $2x$ | $2x$ | $2x$ |

Có rất nhiều đáp án, nhưng chúng chỉ khác nhau một hằng số, vì đạo hàm của hằng số bằng $0$. Trong bài toán ô tô, vận tốc là đạo hàm của quãng đường, nên ta cần một hàm $s(t)$ có $s'(t)=20-5t$.

:::definition Nguyên hàm
Cho hàm số $f(x)$ xác định trên khoảng $K$ (hoặc đoạn, nửa khoảng). Hàm số $F(x)$ là một **nguyên hàm** của $f(x)$ trên $K$ nếu
$$F'(x)=f(x)\quad\text{với mọi } x\in K.$$
:::

:::theorem Họ nguyên hàm
Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì mọi nguyên hàm của $f(x)$ trên $K$ đều có dạng $F(x)+C$, với $C$ là hằng số. Ta viết
$$\int f(x)\,dx=F(x)+C.$$
:::

**Vì sao đúng?** Nếu $G(x)$ cũng là một nguyên hàm thì $\big(G(x)-F(x)\big)'=f(x)-f(x)=0$ trên $K$. Một hàm có đạo hàm bằng $0$ trên cả khoảng thì không tăng cũng không giảm, nên là hằng số: $G(x)-F(x)=C$.

Kí hiệu $\displaystyle\int f(x)\,dx$ đọc là "tích phân bất định của $f$" hay "họ nguyên hàm của $f$". Mọi hàm số liên tục trên $K$ đều có nguyên hàm trên $K$. Từ định nghĩa ta còn có $\displaystyle\int f'(x)\,dx=f(x)+C$.

## Bảng nguyên hàm và tính chất

Mỗi dòng của bảng sau là một công thức đạo hàm đọc ngược. Bạn có thể tự kiểm tra từng dòng bằng cách lấy đạo hàm vế phải.

| Hàm số $f(x)$ | Họ nguyên hàm $\displaystyle\int f(x)\,dx$ |
|---|---|
| $0$ | $C$ |
| $1$ | $x+C$ |
| $x^{\alpha}$ $(\alpha\neq-1)$ | $\dfrac{x^{\alpha+1}}{\alpha+1}+C$ |
| $\dfrac{1}{x}$ | $\ln\lvert x\rvert+C$ |
| $e^x$ | $e^x+C$ |
| $a^x$ $(0<a\neq1)$ | $\dfrac{a^x}{\ln a}+C$ |
| $\cos x$ | $\sin x+C$ |
| $\sin x$ | $-\cos x+C$ |
| $\dfrac{1}{\cos^2x}$ | $\tan x+C$ |
| $\dfrac{1}{\sin^2x}$ | $-\cot x+C$ |

Chú ý dấu trừ ở dòng $\sin x$: vì $(\cos x)'=-\sin x$, nên muốn được $\sin x$ ta phải lấy $-\cos x$.

:::theorem Tính chất của nguyên hàm
Nếu $f$, $g$ có nguyên hàm trên $K$ và $k$ là hằng số khác $0$ thì
$$\int k f(x)\,dx=k\int f(x)\,dx,\qquad \int\big(f(x)\pm g(x)\big)\,dx=\int f(x)\,dx\pm\int g(x)\,dx.$$
:::

Hai tính chất này đúng vì đạo hàm cũng có tính chất như vậy. Nhờ chúng, ta tìm nguyên hàm của một tổng bằng cách xử lí từng số hạng.

:::example Nguyên hàm của một đa thức
Tìm $\displaystyle\int(3x^2-4x+5)\,dx$.

**Lời giải.** Áp dụng công thức $x^{\alpha}$ cho từng số hạng, rồi cộng một hằng số chung:

$$\int(3x^2-4x+5)\,dx=3\cdot\frac{x^3}{3}-4\cdot\frac{x^2}{2}+5x+C=x^3-2x^2+5x+C.$$

**Kiểm tra.** $(x^3-2x^2+5x)'=3x^2-4x+5$, đúng hàm ban đầu.
:::

Với căn thức và phân thức, ta viết lại thành luỹ thừa trước khi dùng bảng.

:::example Căn thức và phân thức
Tìm $\displaystyle\int\left(2\sqrt x-\frac3x+\frac1{x^2}\right)dx$ trên khoảng $(0; +\infty)$.

**Lời giải.** Viết $\sqrt x=x^{\frac12}$ và $\dfrac{1}{x^2}=x^{-2}$. Riêng $\dfrac3x$ có số mũ $-1$, nên dùng công thức $\ln\lvert x\rvert$:

$$\begin{aligned}
\int\left(2x^{\frac12}-\frac3x+x^{-2}\right)dx&=2\cdot\frac{x^{\frac32}}{\frac32}-3\ln\lvert x\rvert+\frac{x^{-1}}{-1}+C\\
&=\frac43x\sqrt x-3\ln x-\frac1x+C.
\end{aligned}$$

Trên $(0; +\infty)$ ta có $\lvert x\rvert=x$, nên viết được $\ln x$.
:::

Tiếp theo là các hàm mũ và lượng giác. Chú ý từng dấu.

:::example Hàm mũ và hàm lượng giác
Tìm $\displaystyle\int\left(4\cos x-2\sin x+3^x\right)dx$.

**Lời giải.** Dùng ba dòng $\cos x$, $\sin x$ và $a^x$ của bảng:

$$\int\left(4\cos x-2\sin x+3^x\right)dx=4\sin x-2(-\cos x)+\frac{3^x}{\ln 3}+C=4\sin x+2\cos x+\frac{3^x}{\ln3}+C.$$
:::

Nhiều hàm số không có sẵn trong bảng, nhưng biến đổi một chút thì có.

:::example Biến đổi trước khi tìm nguyên hàm
Tìm a) $\displaystyle\int\frac{(x+1)^2}{x}\,dx$ trên $(0; +\infty)$; b) $\displaystyle\int\tan^2x\,dx$ trên $\left(-\dfrac{\pi}{2}; \dfrac{\pi}{2}\right)$.

**Lời giải.** a) Khai triển tử số rồi chia từng số hạng cho $x$:

$$\int\frac{x^2+2x+1}{x}\,dx=\int\left(x+2+\frac1x\right)dx=\frac{x^2}{2}+2x+\ln x+C.$$

b) Từ $1+\tan^2x=\dfrac{1}{\cos^2x}$ ta được $\tan^2x=\dfrac{1}{\cos^2x}-1$:

$$\int\tan^2x\,dx=\int\left(\frac{1}{\cos^2x}-1\right)dx=\tan x-x+C.$$
:::

## Nguyên hàm thoả mãn một điều kiện

Họ nguyên hàm có vô số hàm. Khi đề cho thêm một giá trị, chẳng hạn $F(0)=5$, ta thay vào để tìm đúng một hằng số $C$.

:::example Nguyên hàm đi qua một điểm
Tìm nguyên hàm $F(x)$ của $f(x)=e^x+4x$ thoả mãn $F(0)=5$.

**Lời giải.** Trước hết tìm họ nguyên hàm:

$$F(x)=\int(e^x+4x)\,dx=e^x+2x^2+C.$$

Thay $x=0$ và nhớ rằng $e^0=1$ (không phải $0$):

$$F(0)=1+0+C=5\iff C=4.$$

Vậy $F(x)=e^x+2x^2+4$.
:::

Về hình học, mỗi hằng số $C$ cho một đồ thị, và các đồ thị này là những bản tịnh tiến theo chiều dọc của nhau. Điều kiện $F(x_0)=y_0$ chọn ra đúng đồ thị đi qua điểm $(x_0; y_0)$.

:::graph Ba nguyên hàm của $f(x)=2x$
alt: Ba parabol giống hệt nhau y bằng x bình phương trừ 2, x bình phương và x bình phương cộng 2, nằm chồng lên nhau theo chiều dọc
x: -3..3
y: -3..7
plot: x^2 - 2
plot: x^2
plot: x^2 + 2
point: (0, 2) "C = 2" right
point: (0, 0) "C = 0" right
point: (0, -2) "C = -2" right
:::

## Từ vận tốc đến quãng đường

Nếu $s(t)$ là quãng đường vật đi được sau $t$ giây thì vận tốc là $v(t)=s'(t)$. Vậy $s(t)$ là một nguyên hàm của $v(t)$. Tương tự, vận tốc là một nguyên hàm của gia tốc. Bây giờ ta trả lời câu hỏi về chiếc ô tô.

:::example Quãng đường phanh
Sau khi đạp phanh, ô tô có vận tốc $v(t)=20-5t$ (m/s). Tính quãng đường xe đi được từ lúc phanh đến lúc dừng.

**Lời giải.** Xe dừng khi $v(t)=0$, tức $20-5t=0$, hay $t=4$. Gọi $s(t)$ là quãng đường đi được sau $t$ giây kể từ lúc phanh, thì $s(0)=0$ và

$$s(t)=\int(20-5t)\,dt=20t-\frac{5t^2}{2}+C,\qquad s(0)=C=0.$$

Quãng đường đến lúc dừng là

$$s(4)=20\cdot4-\frac{5\cdot16}{2}=80-40=40.$$

Vậy xe đi thêm $40$ m, chỉ bằng một nửa con số $80$ m đoán lúc đầu.
:::

:::warning Những sai lầm thường gặp
- **Dùng công thức luỹ thừa cho $\dfrac1x$.** Sai: $\displaystyle\int x^{-1}dx=\frac{x^0}{0}+C$. Lí do sai: công thức $\dfrac{x^{\alpha+1}}{\alpha+1}$ chỉ dùng khi $\alpha\neq-1$. Đúng: $\displaystyle\int\frac1x\,dx=\ln\lvert x\rvert+C$.
- **Sai dấu với $\sin x$.** Sai: $\displaystyle\int\sin x\,dx=\cos x+C$. Lí do sai: $(\cos x)'=-\sin x$. Đúng: $\displaystyle\int\sin x\,dx=-\cos x+C$.
- **Tách nguyên hàm của một tích.** Sai: $\displaystyle\int x\cdot x\,dx=\frac{x^2}{2}\cdot\frac{x^2}{2}+C$. Lí do sai: không có quy tắc "nguyên hàm của tích bằng tích các nguyên hàm"; lấy đạo hàm vế phải được $x^3\neq x^2$. Đúng: $\displaystyle\int x^2\,dx=\frac{x^3}{3}+C$.
- **Coi $e^0=0$ khi tìm $C$.** Sai: $F(x)=e^x+2x^2+C$, $F(0)=5$ nên $C=5$. Lí do sai: $e^0=1$. Đúng: $1+C=5$, $C=4$.
:::

## Thuật ngữ

:::terms
- nguyên hàm | antiderivative
- họ nguyên hàm | family of antiderivatives
- tích phân bất định | indefinite integral
- hằng số tuỳ ý $C$ | arbitrary constant $C$
- bảng nguyên hàm cơ bản | table of standard antiderivatives
- vận tốc | velocity
- gia tốc | acceleration
- quãng đường | distance travelled
:::

## Tóm tắt

- $F$ là nguyên hàm của $f$ trên $K$ khi $F'(x)=f(x)$ với mọi $x\in K$.
- Mọi nguyên hàm có dạng $F(x)+C$; viết $\displaystyle\int f(x)\,dx=F(x)+C$.
- Bảng cần nhớ: $x^\alpha\to\dfrac{x^{\alpha+1}}{\alpha+1}$ ($\alpha\neq-1$), $\dfrac1x\to\ln\lvert x\rvert$, $e^x\to e^x$, $a^x\to\dfrac{a^x}{\ln a}$, $\cos x\to\sin x$, $\sin x\to-\cos x$, $\dfrac1{\cos^2x}\to\tan x$, $\dfrac1{\sin^2x}\to-\cot x$.
- Hằng số nhân và tổng, hiệu được tách ra; tích thì **không**.
- Cho thêm $F(x_0)=y_0$ thì thay vào để tìm $C$.
- Quãng đường là nguyên hàm của vận tốc; luôn kiểm tra bằng cách lấy đạo hàm.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm $\displaystyle\int(4x^3-6x+7)\,dx$.

::hint
**Kiến thức:** $\displaystyle\int x^\alpha dx=\frac{x^{\alpha+1}}{\alpha+1}+C$ và tính chất tách tổng.

**Gợi ý các bước:**
1. Tìm nguyên hàm của từng số hạng.
2. Cộng một hằng số $C$ và kiểm tra bằng đạo hàm.

::solution
$\displaystyle\int(4x^3-6x+7)\,dx=4\cdot\frac{x^4}{4}-6\cdot\frac{x^2}{2}+7x+C=x^4-3x^2+7x+C$.

**Đáp số.** $x^4-3x^2+7x+C$.
:::

:::exercise
Tìm $\displaystyle\int\left(3\sqrt x+\frac1{x^2}\right)dx$ trên khoảng $(0; +\infty)$.

::hint
**Kiến thức:** viết $\sqrt x=x^{\frac12}$, $\dfrac{1}{x^2}=x^{-2}$ rồi dùng công thức luỹ thừa.

**Gợi ý các bước:**
1. Đổi sang luỹ thừa.
2. Áp dụng công thức cho từng số hạng.

::solution
$\displaystyle\int\left(3x^{\frac12}+x^{-2}\right)dx=3\cdot\frac{x^{\frac32}}{\frac32}+\frac{x^{-1}}{-1}+C=2x\sqrt x-\frac1x+C$.

**Đáp số.** $2x\sqrt x-\dfrac1x+C$.
:::

:::exercise
Tìm $\displaystyle\int\left(5e^x-2\sin x+\frac{1}{\sin^2x}\right)dx$.

::hint
**Kiến thức:** các dòng $e^x$, $\sin x$ và $\dfrac{1}{\sin^2x}$ của bảng nguyên hàm.

**Gợi ý các bước:**
1. Viết nguyên hàm của từng số hạng, chú ý hai dấu trừ.
2. Gộp lại và cộng $C$.

::solution
$\displaystyle\int\left(5e^x-2\sin x+\frac{1}{\sin^2x}\right)dx=5e^x-2(-\cos x)+(-\cot x)+C=5e^x+2\cos x-\cot x+C$.

**Đáp số.** $5e^x+2\cos x-\cot x+C$.
:::

:::exercise
Tìm $\displaystyle\int(2x-1)^2\,dx$.

::hint
**Kiến thức:** không tìm nguyên hàm của bình phương bằng cách "bình phương nguyên hàm"; hãy khai triển trước.

**Gợi ý các bước:**
1. Khai triển $(2x-1)^2=4x^2-4x+1$.
2. Tìm nguyên hàm của đa thức.

::solution
$\displaystyle\int(4x^2-4x+1)\,dx=\frac{4x^3}{3}-2x^2+x+C$.

**Đáp số.** $\dfrac43x^3-2x^2+x+C$.
:::

:::exercise
Cho hàm số $f(x)=3x^2+2\cos x$. Mỗi khẳng định sau đúng hay sai?

a) $F(x)=x^3+2\sin x$ là một nguyên hàm của $f(x)$.

b) $F(x)=x^3-2\sin x+5$ là một nguyên hàm của $f(x)$.

c) Nguyên hàm $G(x)$ của $f(x)$ thoả mãn $G(0)=1$ là $G(x)=x^3+2\sin x+1$.

d) Với $G(x)$ ở ý c), ta có $G\left(\dfrac{\pi}{2}\right)=\dfrac{\pi^3}{8}+2$.

::hint
**Kiến thức:** $F$ là nguyên hàm của $f$ khi $F'=f$; điều kiện $G(0)=1$ xác định hằng số $C$.

**Gợi ý các bước:**
1. Lấy đạo hàm các hàm ở a), b).
2. Tìm $C$ ở c), rồi thay $x=\dfrac{\pi}{2}$ cho d).

::solution
a) **Đúng**: $(x^3+2\sin x)'=3x^2+2\cos x$.

b) **Sai**: $(x^3-2\sin x+5)'=3x^2-2\cos x\neq f(x)$.

c) **Đúng**: $G(x)=x^3+2\sin x+C$, $G(0)=C=1$.

d) **Sai**: $G\left(\dfrac{\pi}{2}\right)=\dfrac{\pi^3}{8}+2\cdot1+1=\dfrac{\pi^3}{8}+3$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Cho $F(x)$ là nguyên hàm của $f(x)=4x^3-2x$ thoả mãn $F(1)=3$. Tính $F(2)$.

::hint
**Kiến thức:** tìm họ nguyên hàm, rồi dùng $F(1)=3$ để tìm $C$.

**Gợi ý các bước:**
1. $F(x)=x^4-x^2+C$.
2. Thay $x=1$ tìm $C$, rồi tính $F(2)$.

::solution
$F(1)=1-1+C=3$ nên $C=3$. Khi đó $F(2)=16-4+3=15$.

**Đáp số.** $15$.
:::

:::exercise
Một bể chứa sẵn $200$ lít nước. Người ta mở vòi bơm thêm nước, sau $t$ phút thì tốc độ thay đổi của lượng nước trong bể là $V'(t)=6t+20$ (lít/phút). Sau $10$ phút bể có bao nhiêu lít nước?

::hint
**Kiến thức:** lượng nước $V(t)$ là một nguyên hàm của $V'(t)$; lúc đầu $V(0)=200$.

**Gợi ý các bước:**
1. Tìm $V(t)=3t^2+20t+C$.
2. Dùng $V(0)=200$ tìm $C$, rồi tính $V(10)$.

::solution
$V(0)=C=200$, nên $V(t)=3t^2+20t+200$ và $V(10)=300+200+200=700$.

**Đáp số.** $700$ lít.
:::

:::exercise Ôn tập
Một vật chuyển động thẳng với vận tốc $v(t)=12t-3t^2$ (m/s), $0\le t\le 4$. Tìm vận tốc lớn nhất của vật và quãng đường vật đi được trong $4$ giây đầu.

::hint
**Kiến thức:** cách tìm giá trị lớn nhất trên một đoạn (xem [giá trị lớn nhất và giá trị nhỏ nhất](lesson:max-min-values)); quãng đường là nguyên hàm của vận tốc.

**Gợi ý các bước:**
1. Giải $v'(t)=0$ và so sánh $v(0)$, $v(2)$, $v(4)$.
2. Tìm $s(t)$ với $s(0)=0$ rồi tính $s(4)$.

::solution
$v'(t)=12-6t=0\iff t=2$; $v(0)=0$, $v(2)=12$, $v(4)=0$. Vì $v(t)\ge0$ trên $[0; 4]$ nên vật không quay đầu, và $s(t)=6t^2-t^3$ (do $s(0)=0$), $s(4)=96-64=32$.

**Đáp số.** Vận tốc lớn nhất $12$ m/s (lúc $t=2$); quãng đường $32$ m.
:::

:::exercise Thử thách
Tìm hàm số $f(x)$ biết $f''(x)=6x+2$, $f'(0)=1$ và $f(0)=-1$.

::hint
**Kiến thức:** $f'$ là một nguyên hàm của $f''$, và $f$ là một nguyên hàm của $f'$ (đạo hàm cấp hai đã học ở lớp 11).

**Gợi ý các bước:**
1. Tìm $f'(x)$, dùng $f'(0)=1$ để tìm hằng số thứ nhất.
2. Tìm $f(x)$, dùng $f(0)=-1$ để tìm hằng số thứ hai.

::solution
$f'(x)=3x^2+2x+C_1$, $f'(0)=C_1=1$. Tiếp theo $f(x)=x^3+x^2+x+C_2$, $f(0)=C_2=-1$. Kiểm tra: $f''(x)=6x+2$.

**Đáp số.** $f(x)=x^3+x^2+x-1$.
:::

:::exercise Thử thách
Tìm $\displaystyle\int\sin^2\frac{x}{2}\,dx$.

::hint
**Kiến thức:** công thức hạ bậc (lớp 11): $\cos x=1-2\sin^2\dfrac x2$, tức $\sin^2\dfrac x2=\dfrac{1-\cos x}{2}$.

**Gợi ý các bước:**
1. Thay $\sin^2\dfrac x2$ bằng $\dfrac12-\dfrac12\cos x$.
2. Tìm nguyên hàm từng số hạng.

::solution
$\displaystyle\int\left(\frac12-\frac12\cos x\right)dx=\frac x2-\frac12\sin x+C$. Kiểm tra: $\left(\dfrac x2-\dfrac12\sin x\right)'=\dfrac{1-\cos x}{2}=\sin^2\dfrac x2$.

**Đáp số.** $\dfrac x2-\dfrac{\sin x}{2}+C$.
:::

## Kiểm tra mini

:::quiz
::mc
Họ nguyên hàm của hàm số $f(x)=3x^2-\sin x$ là
A. $x^3+\cos x+C$.
B. $x^3-\cos x+C$.
C. $6x-\cos x+C$.
D. $3x^3+\cos x+C$.
::key A
$\displaystyle\int 3x^2dx=x^3$ và $\displaystyle\int(-\sin x)\,dx=\cos x$. B sai dấu, C lấy đạo hàm của $3x^2$ thay vì nguyên hàm, D quên chia cho $3$.

::mc
Họ nguyên hàm của hàm số $f(x)=2^x$ là
A. $2^x\ln 2+C$.
B. $\dfrac{2^x}{\ln 2}+C$.
C. $\dfrac{2^{x+1}}{x+1}+C$.
D. $x\cdot 2^{x-1}+C$.
::key B
$\left(\dfrac{2^x}{\ln2}\right)'=\dfrac{2^x\ln2}{\ln2}=2^x$. A là đạo hàm của $2^x$; C và D dùng nhầm công thức của $x^\alpha$ cho hàm mũ.

::mc
Cho $F(x)$ là nguyên hàm của $f(x)=2x+1$ thoả mãn $F(1)=5$. Giá trị $F(2)$ bằng
A. $6$.
B. $11$.
C. $9$.
D. $5$.
::key C
$F(x)=x^2+x+C$, $F(1)=2+C=5$ nên $C=3$ và $F(2)=4+2+3=9$. A quên tìm $C$, B lấy $C=5$, D là $f(2)$.

::mc
Một ô tô phanh với vận tốc $v(t)=15-3t$ (m/s) cho đến khi dừng. Quãng đường xe đi được từ lúc phanh đến lúc dừng là
A. $75$ m.
B. $37{,}5$ m.
C. $112{,}5$ m.
D. $0$ m.
::key B
Xe dừng khi $t=5$; $s(t)=15t-\dfrac{3t^2}{2}$ nên $s(5)=75-37{,}5=37{,}5$. A coi vận tốc không đổi, C sai dấu số hạng thứ hai, D quên chia $t^2$ cho $2$.

::tf
Cho hàm số $f(x)=e^x-2x$.
a) $F(x)=e^x-x^2$ là một nguyên hàm của $f(x)$.
b) $\displaystyle\int f(x)\,dx=e^x-2+C$.
c) Nguyên hàm $F(x)$ của $f(x)$ thoả mãn $F(0)=3$ là $F(x)=e^x-x^2+2$.
d) Với $F(x)$ ở ý c), $F(1)=e+1$.
::key Đ S Đ Đ
a) Đúng: $(e^x-x^2)'=e^x-2x$. b) Sai: $e^x-2$ là đạo hàm của $f$, không phải nguyên hàm. c) Đúng: $F(0)=1+C=3$, $C=2$. d) Đúng: $e-1+2=e+1$.

::sa
Cho $F(x)$ là nguyên hàm của $f(x)=6x^2-4x+3$ thoả mãn $F(0)=-2$. Tính $F(2)$.
::key 12
$F(x)=2x^3-2x^2+3x+C$ và $F(0)=C=-2$, nên $F(2)=16-8+6-2=12$.

::sa
Cho $F(x)$ là nguyên hàm của $f(x)=e^x+\dfrac1x$ trên $(0; +\infty)$ thoả mãn $F(1)=e$. Tính $F(2)$ (làm tròn đến hàng phần mười).
::key 8,1
$F(x)=e^x+\ln x+C$, $F(1)=e+C=e$ nên $C=0$. Vậy $F(2)=e^2+\ln2\approx7{,}389+0{,}693\approx8{,}1$.
:::
