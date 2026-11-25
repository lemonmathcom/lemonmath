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

Đồng hồ tốc độ trên xe cho biết vận tốc ở từng thời điểm, còn đồng hồ quãng đường (đồng hồ ODO) cho biết xe đã đi bao xa. Đạo hàm đi từ quãng đường đến vận tốc. Giờ ta học cách đi theo chiều ngược lại: từ vận tốc tìm lại quãng đường. Cũng phép ngược ấy giúp tìm lượng nước trong bể khi biết tốc độ chảy, hay dân số khi biết tốc độ tăng dân số.

## Nguyên hàm là gì?

### Khám phá: hàm số nào có đạo hàm là $2x$?

Ở lớp 11, bạn đã quen lấy đạo hàm. Bây giờ ta hỏi ngược lại: biết đạo hàm là $2x$, hàm số ban đầu là gì? Bạn thử đoán trước khi đọc tiếp.

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

**Hiểu sâu hơn.** Hằng số $C$ không phải là chi tiết thừa. Biết vận tốc của xe ở mọi thời điểm, ta biết xe đi *thêm* được bao xa, nhưng chưa biết xe đang ở *đâu*: còn phụ thuộc vào vị trí xuất phát. Hằng số $C$ chính là thông tin còn thiếu đó, và một điều kiện như $s(0)=0$ sẽ xác định nó.

**Kết nối.** Bài này đọc ngược các công thức đạo hàm (lớp 11). Nguyên hàm là công cụ để tính tích phân ở bài sau, rồi tính diện tích và thể tích ở bài ứng dụng tích phân.

Kí hiệu $\displaystyle\int f(x)\,dx$ đọc là "tích phân bất định của $f$" hay "họ nguyên hàm của $f$". Mọi hàm số liên tục trên $K$ đều có nguyên hàm trên $K$. Từ định nghĩa ta còn có $\displaystyle\int f'(x)\,dx=f(x)+C$.

## Bảng nguyên hàm và tính chất

Mỗi dòng của bảng sau là một công thức đạo hàm đọc ngược, nên bạn không phải học thuộc như học một bảng hoàn toàn mới. Muốn chắc chắn, bạn tự kiểm tra từng dòng bằng cách lấy đạo hàm vế phải.

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

Hai tính chất này đúng vì đạo hàm cũng có tính chất như vậy. Nhờ chúng, gặp một tổng, ta tìm nguyên hàm của từng số hạng rồi cộng lại.

:::example Nguyên hàm của một đa thức
Tìm $\displaystyle\int(3x^2-4x+5)\,dx$.

**Lời giải.** Áp dụng công thức nguyên hàm của $x^{\alpha}$ cho từng số hạng, ta có

$$\int(3x^2-4x+5)\,dx=3\cdot\frac{x^3}{3}-4\cdot\frac{x^2}{2}+5x+C=x^3-2x^2+5x+C.$$

**Kiểm tra.** $(x^3-2x^2+5x)'=3x^2-4x+5$, đúng hàm ban đầu.

Vậy $\displaystyle\int(3x^2-4x+5)\,dx=x^3-2x^2+5x+C$.
:::

Gặp căn thức hay phân thức, bạn đừng vội. Hãy viết lại chúng thành luỹ thừa trước, rồi mới dùng bảng.

:::example Căn thức và phân thức
Tìm $\displaystyle\int\left(2\sqrt x-\frac3x+\frac1{x^2}\right)dx$ trên khoảng $(0; +\infty)$.

**Lời giải.** Ta có $\sqrt x=x^{\frac12}$ và $\dfrac{1}{x^2}=x^{-2}$. Vì $\dfrac3x$ có số mũ $-1$ nên ta dùng công thức $\ln\lvert x\rvert$. Do đó

$$\begin{aligned}
\int\left(2x^{\frac12}-\frac3x+x^{-2}\right)dx&=2\cdot\frac{x^{\frac32}}{\frac32}-3\ln\lvert x\rvert+\frac{x^{-1}}{-1}+C\\
&=\frac43x\sqrt x-3\ln x-\frac1x+C.
\end{aligned}$$

Vì trên $(0; +\infty)$ ta có $\lvert x\rvert=x$ nên ta viết được $\ln x$.

Vậy họ nguyên hàm cần tìm là $\dfrac43x\sqrt x-3\ln x-\dfrac1x+C$.
:::

Ví dụ sau có các hàm mũ và lượng giác. Chỗ này rất dễ sai dấu, nên bạn để ý từng dấu một.

:::example Hàm mũ và hàm lượng giác
Tìm $\displaystyle\int\left(4\cos x-2\sin x+3^x\right)dx$.

**Lời giải.** Áp dụng các công thức nguyên hàm của $\cos x$, $\sin x$ và $a^x$, ta có

$$\int\left(4\cos x-2\sin x+3^x\right)dx=4\sin x-2(-\cos x)+\frac{3^x}{\ln 3}+C=4\sin x+2\cos x+\frac{3^x}{\ln3}+C.$$
:::

Nhiều hàm số không có sẵn trong bảng. Nhưng chỉ cần biến đổi một chút, chúng sẽ trở về dạng quen thuộc.

:::example Biến đổi trước khi tìm nguyên hàm
Tìm a) $\displaystyle\int\frac{(x+1)^2}{x}\,dx$ trên $(0; +\infty)$; b) $\displaystyle\int\tan^2x\,dx$ trên $\left(-\dfrac{\pi}{2}; \dfrac{\pi}{2}\right)$.

**Lời giải.** a) Khai triển tử số rồi chia từng số hạng cho $x$, ta có

$$\int\frac{x^2+2x+1}{x}\,dx=\int\left(x+2+\frac1x\right)dx=\frac{x^2}{2}+2x+\ln x+C.$$

b) Vì $1+\tan^2x=\dfrac{1}{\cos^2x}$ nên $\tan^2x=\dfrac{1}{\cos^2x}-1$. Do đó

$$\int\tan^2x\,dx=\int\left(\frac{1}{\cos^2x}-1\right)dx=\tan x-x+C.$$
:::

## Nguyên hàm thoả mãn một điều kiện

Họ nguyên hàm có vô số hàm. Khi đề cho thêm một giá trị, chẳng hạn $F(0)=5$, ta thay vào để tìm đúng một hằng số $C$. Đó cũng là cách ta biết chiếc xe đang ở đâu, chứ không chỉ biết nó đi thêm bao xa.

:::example Nguyên hàm đi qua một điểm
Tìm nguyên hàm $F(x)$ của hàm số $f(x)=e^x+4x$ thoả mãn $F(0)=5$.

**Lời giải.** Ta có

$$F(x)=\int(e^x+4x)\,dx=e^x+2x^2+C.$$

Thay $x=0$ vào, ta được (chú ý $e^0=1$, không phải $0$)

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

**Lời giải.** Xe dừng khi $v(t)=0$, tức là $20-5t=0\iff t=4$. Gọi $s(t)$ (m) là quãng đường xe đi được sau $t$ giây kể từ lúc phanh. Ta có $s(0)=0$ và

$$s(t)=\int(20-5t)\,dt=20t-\frac{5t^2}{2}+C,\qquad s(0)=C=0.$$

Do đó quãng đường đến lúc dừng là

$$s(4)=20\cdot4-\frac{5\cdot16}{2}=80-40=40.$$

Vậy xe đi thêm $40$ m, chỉ bằng một nửa con số $80$ m đoán lúc đầu.

**Nhìn lại.** Nếu xe chỉ chạy $10$ m/s và phanh với cùng mức giảm tốc, tức là $v(t)=10-5t$, thì sao? Xe dừng sau $2$ giây và đi thêm $s(2)=20-10=10$ m. Vận tốc giảm một nửa nhưng quãng đường phanh chỉ còn một phần tư: với cùng mức giảm tốc, quãng đường phanh tỉ lệ với bình phương vận tốc. Đây là lí do mỗi km/h vượt tốc độ đều làm quãng đường phanh dài thêm đáng kể.
:::

:::warning Những sai lầm thường gặp
- **Dùng công thức luỹ thừa cho $\dfrac1x$.** Sai: $\displaystyle\int x^{-1}dx=\frac{x^0}{0}+C$. Lí do sai: công thức $\dfrac{x^{\alpha+1}}{\alpha+1}$ chỉ dùng khi $\alpha\neq-1$. Đúng: $\displaystyle\int\frac1x\,dx=\ln\lvert x\rvert+C$.
- **Sai dấu với $\sin x$.** Sai: $\displaystyle\int\sin x\,dx=\cos x+C$. Lí do sai: $(\cos x)'=-\sin x$. Đúng: $\displaystyle\int\sin x\,dx=-\cos x+C$.
- **Tách nguyên hàm của một tích.** Sai: $\displaystyle\int x\cdot x\,dx=\frac{x^2}{2}\cdot\frac{x^2}{2}+C$. Lí do sai: không có quy tắc "nguyên hàm của tích bằng tích các nguyên hàm"; lấy đạo hàm vế phải được $x^3\neq x^2$. Đúng: $\displaystyle\int x^2\,dx=\frac{x^3}{3}+C$.
- **Coi $e^0=0$ khi tìm $C$.** Sai: $F(x)=e^x+2x^2+C$, $F(0)=5$ nên $C=5$. Lí do sai: $e^0=1$. Đúng: $1+C=5$, $C=4$.

Lỗi thứ hai và lỗi thứ ba rất hay gặp khi làm vội. Cách chống nhầm đơn giản nhất: làm xong, bạn lấy đạo hàm kết quả xem có ra hàm ban đầu không.
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

Quay lại chiếc ô tô: quãng đường xe đi thêm là một nguyên hàm của vận tốc, nên ta tìm được nó chỉ từ công thức vận tốc. Nếu chỉ nhớ một điều, bạn hãy nhớ: tìm nguyên hàm là đọc ngược đạo hàm, và đừng quên hằng số cộng thêm.

## Luyện tập

Mỗi bài đều có phần kiến thức cần dùng và vài bước gợi ý. Bạn hãy tự làm trước. Nếu bị kẹt, xem gợi ý một chút rồi làm tiếp, sau đó mới mở lời giải để đối chiếu.

:::exercise
Tìm $\displaystyle\int(4x^3-6x+7)\,dx$.

::hint
**Kiến thức:** $\displaystyle\int x^\alpha dx=\frac{x^{\alpha+1}}{\alpha+1}+C$ và tính chất tách tổng.

**Gợi ý các bước:**
1. Tìm nguyên hàm của từng số hạng.
2. Cộng một hằng số $C$ và kiểm tra bằng đạo hàm.

::solution
Áp dụng các công thức $\displaystyle\int x^{\alpha}\,dx=\dfrac{x^{\alpha+1}}{\alpha+1}+C$ $(\alpha\neq-1)$ và $\displaystyle\int k\,dx=kx+C$, cùng tính chất nguyên hàm của một tổng và của tích một hằng số với một hàm số.

Ta có
$$\int(4x^3-6x+7)\,dx=4\cdot\frac{x^4}{4}-6\cdot\frac{x^2}{2}+7x+C=x^4-3x^2+7x+C.$$

Vậy họ nguyên hàm cần tìm là $x^4-3x^2+7x+C$.

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
Trên khoảng $(0; +\infty)$, ta viết $\sqrt x=x^{\frac12}$ và $\dfrac1{x^2}=x^{-2}$.

Áp dụng công thức $\displaystyle\int x^{\alpha}\,dx=\dfrac{x^{\alpha+1}}{\alpha+1}+C$ $(\alpha\neq-1)$, ta có
$$\int\left(3x^{\frac12}+x^{-2}\right)dx=3\cdot\frac{x^{\frac32}}{\frac32}+\frac{x^{-1}}{-1}+C=2x^{\frac32}-\frac1x+C=2x\sqrt x-\frac1x+C.$$

Vậy họ nguyên hàm cần tìm là $2x\sqrt x-\dfrac1x+C$.

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
Hàm số dưới dấu tích phân xác định trên mỗi khoảng mà $\sin x\neq0$, tức là $x\neq k\pi$ $(k\in\mathbb{Z})$.

Áp dụng các công thức $\displaystyle\int e^x\,dx=e^x+C$, $\displaystyle\int\sin x\,dx=-\cos x+C$ và $\displaystyle\int\frac{1}{\sin^2x}\,dx=-\cot x+C$, ta có
$$\int\left(5e^x-2\sin x+\frac{1}{\sin^2x}\right)dx=5e^x-2(-\cos x)+(-\cot x)+C=5e^x+2\cos x-\cot x+C.$$

Vậy họ nguyên hàm cần tìm là $5e^x+2\cos x-\cot x+C$.

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
Khai triển hằng đẳng thức, ta có $(2x-1)^2=4x^2-4x+1$.

Do đó
$$\int(2x-1)^2\,dx=\int(4x^2-4x+1)\,dx=4\cdot\frac{x^3}{3}-4\cdot\frac{x^2}{2}+x+C=\frac{4x^3}{3}-2x^2+x+C.$$

Vậy họ nguyên hàm cần tìm là $\dfrac43x^3-2x^2+x+C$.

**Đáp số.** $\dfrac43x^3-2x^2+x+C$.
:::

:::exercise
Cho hàm số $f(x)=3x^2+2\cos x$. Xét tính đúng sai của các mệnh đề sau:

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
Hàm số $f(x)=3x^2+2\cos x$ xác định trên $\mathbb{R}$. Hàm số $F(x)$ là một nguyên hàm của $f(x)$ khi và chỉ khi $F'(x)=f(x)$.

a) **Đúng.** Ta có $(x^3+2\sin x)'=3x^2+2\cos x=f(x)$, nên $F(x)=x^3+2\sin x$ là một nguyên hàm của $f(x)$.

b) **Sai.** Ta có $(x^3-2\sin x+5)'=3x^2-2\cos x\neq3x^2+2\cos x=f(x)$, nên $F(x)=x^3-2\sin x+5$ không là nguyên hàm của $f(x)$.

c) **Đúng.** Họ nguyên hàm của $f(x)$ là $G(x)=x^3+2\sin x+C$. Từ $G(0)=0+2\cdot0+C=C=1$ ta được $G(x)=x^3+2\sin x+1$.

d) **Sai.** Với $G(x)=x^3+2\sin x+1$, ta có
$$G\left(\frac{\pi}{2}\right)=\frac{\pi^3}{8}+2\sin\frac{\pi}{2}+1=\frac{\pi^3}{8}+2\cdot1+1=\frac{\pi^3}{8}+3\neq\frac{\pi^3}{8}+2.$$

Vậy các mệnh đề a), c) đúng; các mệnh đề b), d) sai.

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
Ta có
$$F(x)=\int(4x^3-2x)\,dx=x^4-x^2+C.$$

Vì $F(1)=3$ nên $1^4-1^2+C=3$, suy ra $C=3$. Do đó $F(x)=x^4-x^2+3$.

Thay $x=2$ vào $F(x)$, ta được
$$F(2)=2^4-2^2+3=16-4+3=15.$$

Vậy $F(2)=15$.

**Đáp số.** $15$.
:::

:::exercise
Một bể chứa sẵn $200$ lít nước. Người ta mở vòi bơm thêm nước, sau $t$ phút thì tốc độ thay đổi của lượng nước trong bể là $V'(t)=6t+20$ (lít/phút). Hỏi sau $10$ phút trong bể có bao nhiêu lít nước?

::hint
**Kiến thức:** lượng nước $V(t)$ là một nguyên hàm của $V'(t)$; lúc đầu $V(0)=200$.

**Gợi ý các bước:**
1. Tìm $V(t)=3t^2+20t+C$.
2. Dùng $V(0)=200$ tìm $C$, rồi tính $V(10)$.

::solution
Gọi $V(t)$ (lít) là lượng nước trong bể sau $t$ phút. Ta có $V(t)=\displaystyle\int(6t+20)\,dt=3t^2+20t+C$. Vì $V(0)=C=200$ nên $V(t)=3t^2+20t+200$.

Vậy sau $10$ phút trong bể có $V(10)=300+200+200=700$ lít nước.

**Đáp số.** $700$ lít.
:::

:::exercise Ôn tập
Một vật chuyển động thẳng với vận tốc $v(t)=12t-3t^2$ (m/s), $0\le t\le 4$. Tìm vận tốc lớn nhất của vật và tính quãng đường vật đi được trong $4$ giây đầu.

::hint
**Kiến thức:** cách tìm giá trị lớn nhất trên một đoạn (xem [giá trị lớn nhất và giá trị nhỏ nhất](lesson:max-min-values)); quãng đường là nguyên hàm của vận tốc.

**Gợi ý các bước:**
1. Giải $v'(t)=0$ và so sánh $v(0)$, $v(2)$, $v(4)$.
2. Tìm $s(t)$ với $s(0)=0$ rồi tính $s(4)$.

::solution
Ta có $v'(t)=12-6t=0\iff t=2$ và $v(0)=0$, $v(2)=12$, $v(4)=0$. Vì $v(t)\ge0$ trên $[0; 4]$ nên vật không quay đầu. Ta có $s(t)=6t^2-t^3$ (do $s(0)=0$), suy ra $s(4)=96-64=32$.

Vậy vận tốc lớn nhất là $12$ m/s và quãng đường là $32$ m.

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
Vì $f'(x)$ là một nguyên hàm của $f''(x)$ nên
$$f'(x)=\int(6x+2)\,dx=3x^2+2x+C_1.$$

Vì $f'(0)=1$ nên $C_1=1$, suy ra $f'(x)=3x^2+2x+1$.

Vì $f(x)$ là một nguyên hàm của $f'(x)$ nên
$$f(x)=\int(3x^2+2x+1)\,dx=x^3+x^2+x+C_2.$$

Vì $f(0)=-1$ nên $C_2=-1$, suy ra $f(x)=x^3+x^2+x-1$.

Kiểm tra: $f'(x)=3x^2+2x+1$, $f''(x)=6x+2$, $f'(0)=1$ và $f(0)=-1$ (thoả mãn).

Vậy $f(x)=x^3+x^2+x-1$.

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
Áp dụng công thức hạ bậc $\sin^2\alpha=\dfrac{1-\cos2\alpha}{2}$ với $\alpha=\dfrac x2$, ta có
$$\sin^2\frac x2=\frac{1-\cos x}{2}=\frac12-\frac12\cos x.$$

Do đó
$$\int\sin^2\frac x2\,dx=\int\left(\frac12-\frac12\cos x\right)dx=\frac x2-\frac12\sin x+C.$$

Kiểm tra: $\left(\dfrac x2-\dfrac12\sin x\right)'=\dfrac12-\dfrac12\cos x=\dfrac{1-\cos x}{2}=\sin^2\dfrac x2$ (đúng).

Vậy $\displaystyle\int\sin^2\frac x2\,dx=\dfrac x2-\dfrac{\sin x}{2}+C$.

**Đáp số.** $\dfrac x2-\dfrac{\sin x}{2}+C$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Họ nguyên hàm của hàm số $f(x)=3x^2-\sin x$ là
A. $x^3+\cos x+C$.
B. $x^3-\cos x+C$.
C. $6x-\cos x+C$.
D. $3x^3+\cos x+C$.
::key A
Ta có $\displaystyle\int 3x^2dx=x^3$ và $\displaystyle\int(-\sin x)\,dx=\cos x$ (cộng thêm hằng số). Phương án B sai dấu, C lấy đạo hàm của $3x^2$ thay vì nguyên hàm, D quên chia cho $3$.

::mc NB
Họ nguyên hàm của hàm số $f(x)=2^x$ là
A. $2^x\ln 2+C$.
B. $\dfrac{2^x}{\ln 2}+C$.
C. $\dfrac{2^{x+1}}{x+1}+C$.
D. $x\cdot 2^{x-1}+C$.
::key B
Vì $\left(\dfrac{2^x}{\ln2}\right)'=\dfrac{2^x\ln2}{\ln2}=2^x$ nên chọn B. Phương án A là đạo hàm của $2^x$; C và D dùng nhầm công thức của $x^\alpha$ cho hàm mũ.

::mc VD
Cho $F(x)$ là một nguyên hàm của hàm số $f(x)=2x+1$ thoả mãn $F(1)=5$. Giá trị của $F(2)$ bằng
A. $6$.
B. $11$.
C. $9$.
D. $5$.
::key C
Ta có $F(x)=x^2+x+C$. Vì $F(1)=2+C=5$ nên $C=3$, suy ra $F(2)=4+2+3=9$. Phương án A quên tìm $C$, B lấy $C=5$, D là $f(2)$.

::mc VD
Một ô tô phanh với vận tốc $v(t)=15-3t$ (m/s) cho đến khi dừng. Quãng đường xe đi được từ lúc phanh đến lúc dừng là
A. $75$ m.
B. $37{,}5$ m.
C. $112{,}5$ m.
D. $0$ m.
::key B
Xe dừng khi $v(t)=0\iff t=5$. Ta có $s(t)=15t-\dfrac{3t^2}{2}$ nên $s(5)=75-37{,}5=37{,}5$. Phương án A coi vận tốc không đổi, C sai dấu số hạng thứ hai, D quên chia $t^2$ cho $2$.

::tf TH TH VD VD
Cho hàm số $f(x)=e^x-2x$. Xét tính đúng sai của các mệnh đề sau:
a) $F(x)=e^x-x^2$ là một nguyên hàm của $f(x)$.
b) $\displaystyle\int f(x)\,dx=e^x-2+C$.
c) Nguyên hàm $F(x)$ của $f(x)$ thoả mãn $F(0)=3$ là $F(x)=e^x-x^2+2$.
d) Với $F(x)$ ở ý c), $F(1)=e+1$.
::key Đ S Đ Đ
a) Đúng: ta có $(e^x-x^2)'=e^x-2x$. b) Sai: $e^x-2$ là đạo hàm của $f$, không phải nguyên hàm. c) Đúng: vì $F(0)=1+C=3$ nên $C=2$. d) Đúng: thay $x=1$, ta được $F(1)=e-1+2=e+1$.

::sa VD
Cho $F(x)$ là một nguyên hàm của hàm số $f(x)=6x^2-4x+3$ thoả mãn $F(0)=-2$. Tính $F(2)$.
::key 12
Ta có $F(x)=2x^3-2x^2+3x+C$ và $F(0)=C=-2$. Vậy $F(2)=16-8+6-2=12$.

::sa VD
Cho $F(x)$ là một nguyên hàm của hàm số $f(x)=e^x+\dfrac1x$ trên $(0; +\infty)$ thoả mãn $F(1)=e$. Tính $F(2)$ (làm tròn kết quả đến hàng phần mười).
::key 8,1
Ta có $F(x)=e^x+\ln x+C$. Vì $F(1)=e+C=e$ nên $C=0$. Vậy $F(2)=e^2+\ln2\approx7{,}389+0{,}693\approx8{,}1$.
:::
