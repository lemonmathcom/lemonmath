---
title: Kĩ thuật tính tích phân
description: AP Calculus Unit 6, phần 2: đổi biến, chia đa thức, đưa về bình phương đủ; riêng BC: tích phân từng phần, phân thức đơn giản, tích phân suy rộng.
minutes: 45
---

:::goals
- Tìm nguyên hàm bằng phép đổi biến và đổi cận của tích phân xác định cho đúng.
- Biến đổi hàm dưới dấu tích phân bằng phép chia đa thức hoặc đưa về bình phương đủ trước khi tính.
- (BC) Tính tích phân từng phần và tích phân bằng cách tách phân thức đơn giản.
- (BC) Xét một tích phân suy rộng hội tụ hay phân kì, và tính giá trị khi nó hội tụ.
:::

Định lí cơ bản biến mọi tích phân xác định thành bài toán tìm nguyên hàm, vì vậy tốc độ và độ chính xác khi tìm nguyên hàm quyết định khá nhiều điểm trong đề. Ở phần trắc nghiệm không dùng máy tính, gần một phần ba số câu về tích phân cần đổi biến. Ở phần tự luận, thiết lập đúng đã được điểm, nhưng điểm đáp số cuối cùng cần nguyên hàm đúng. Học sinh AB cần hai mục đầu; học sinh BC cần cả bốn mục.

## Phép đổi biến

Đổi biến là quy tắc chuỗi đọc theo chiều ngược lại. Hãy tìm một hàm $u=g(x)$ mà đạo hàm $g'(x)$ của nó cũng xuất hiện (sai khác một hằng số) trong biểu thức dưới dấu tích phân. Khi đó $du=g'(x)\,dx$ và
$$\int f\big(g(x)\big)g'(x)\,dx=\int f(u)\,du.$$

:::example Hàm bên trong và đạo hàm của nó
Tìm $\displaystyle\int 2x\cos\left(x^2\right)dx$.

**Lời giải.** Đặt $u=x^2$, khi đó $du=2x\,dx$. Tích phân trở thành $\displaystyle\int\cos u\,du=\sin u+C=\sin\left(x^2\right)+C$. Kiểm tra bằng cách lấy đạo hàm: $\cos\left(x^2\right)\cdot2x$.
:::

:::example Đổi cận
Tích phân $\displaystyle\int_0^1 x\left(x^2+1\right)^3dx$ bằng
A. $\dfrac{15}{4}$
B. $\dfrac{15}{8}$
C. $2$
D. $4$

**Lời giải.** Đặt $u=x^2+1$, khi đó $du=2x\,dx$ và $x\,dx=\dfrac12du$. Khi $x=0$ thì $u=1$; khi $x=1$ thì $u=2$.
$$\frac12\int_1^2u^3\,du=\frac12\left[\frac{u^4}{4}\right]_1^2=\frac12\cdot\frac{16-1}{4}=\frac{15}{8}.$$
Đáp án **B**. Phương án A quên hệ số $\dfrac12$.
:::

:::warning Giữ cận cho nhất quán
Sau khi đổi biến, hoặc đổi cận sang giá trị của $u$, hoặc quay về biến $x$ rồi mới dùng cận cũ. Viết $\displaystyle\int_0^1u^3\,du$ với cận cũ là một trong những lỗi người chấm gặp nhiều nhất.
:::

## Chia đa thức và đưa về bình phương đủ

Khi hàm dưới dấu tích phân là phân thức có bậc tử không nhỏ hơn bậc mẫu, hãy chia đa thức trước. Khi mẫu là tam thức bậc hai vô nghiệm, hãy đưa về bình phương đủ và nhắm tới $\displaystyle\int\frac{du}{u^2+a^2}=\frac1a\arctan\frac ua+C$.

:::example Hai cách biến đổi
Tìm a) $\displaystyle\int\frac{x^2+1}{x+1}\,dx$ và b) $\displaystyle\int\frac{dx}{x^2+2x+5}$.

**Lời giải.** a) Chia đa thức: $\dfrac{x^2+1}{x+1}=x-1+\dfrac{2}{x+1}$, nên tích phân bằng $\dfrac{x^2}{2}-x+2\ln|x+1|+C$.

b) $x^2+2x+5=(x+1)^2+4$. Với $u=x+1$ và $a=2$: $\dfrac12\arctan\dfrac{x+1}{2}+C$.
:::

## Tích phân từng phần và phân thức đơn giản (BC)

:::theorem Tích phân từng phần
$$\int u\,dv=uv-\int v\,du.$$
Chọn $u$ là thừa số trở nên đơn giản hơn khi lấy đạo hàm (đa thức hoặc $\ln x$), còn $dv$ là thừa số tìm được nguyên hàm.
:::

:::example Hai tích kinh điển
Tìm a) $\displaystyle\int xe^x\,dx$ và b) $\displaystyle\int x\ln x\,dx$.

**Lời giải.** a) $u=x$, $dv=e^x\,dx$: $xe^x-\displaystyle\int e^x\,dx=xe^x-e^x+C$.

b) Ở đây chọn $u=\ln x$ (khó lấy nguyên hàm của $\ln x$ nếu để nó làm $dv$) và $dv=x\,dx$: $\dfrac{x^2}{2}\ln x-\displaystyle\int\frac{x^2}{2}\cdot\frac1x\,dx=\dfrac{x^2}{2}\ln x-\dfrac{x^2}{4}+C$.
:::

:::example Tách phân thức đơn giản
Tính $\displaystyle\int_1^2\frac{dx}{x(x+1)}$.

**Lời giải.** $\dfrac{1}{x(x+1)}=\dfrac1x-\dfrac{1}{x+1}$. Vậy tích phân bằng $\Big[\ln x-\ln(x+1)\Big]_1^2=(\ln2-\ln3)-(0-\ln2)=\ln\dfrac43$.

Đề AP BC chỉ dùng mẫu là tích các nhân tử bậc nhất không lặp lại, như ví dụ này.
:::

## Tích phân suy rộng (BC)

Tích phân có cận vô cực, hoặc có hàm dưới dấu tích phân tiến ra vô cực bên trong khoảng, được định nghĩa bằng giới hạn:
$$\int_1^{\infty}f(x)\,dx=\lim_{b\to\infty}\int_1^b f(x)\,dx.$$
Nếu giới hạn là một số hữu hạn thì tích phân **hội tụ**; ngược lại thì **phân kì**. Hãy viết rõ giới hạn ra: người chấm tìm dòng đó.

:::example Một cái hội tụ, một cái phân kì
Tính $\displaystyle\int_1^{\infty}\frac{dx}{x^2}$ và $\displaystyle\int_1^{\infty}\frac{dx}{x}$.

**Lời giải.** $\displaystyle\lim_{b\to\infty}\left[-\frac1x\right]_1^b=\lim_{b\to\infty}\left(1-\frac1b\right)=1$: hội tụ về $1$.

$\displaystyle\lim_{b\to\infty}\Big[\ln x\Big]_1^b=\lim_{b\to\infty}\ln b=\infty$: phân kì. Tổng quát, $\displaystyle\int_1^\infty\frac{dx}{x^p}$ hội tụ khi và chỉ khi $p>1$.
:::

:::tip Kiểm tra bằng đạo hàm
Ở phần không dùng máy tính, hãy dành mười giây lấy đạo hàm của nguyên hàm bạn vừa tìm. Cách này bắt được hệ số $\dfrac12$ bị thiếu hay dấu bị sai, cũng chính là chỗ các phương án nhiễu trong câu trắc nghiệm được tạo ra.
:::

:::terms
- substitution (u-substitution) | phép đổi biến
- antiderivative | nguyên hàm
- long division | phép chia đa thức
- completing the square | đưa về bình phương đủ
- integration by parts | tích phân từng phần
- partial fractions | phân tích thành phân thức đơn giản
- improper integral | tích phân suy rộng
- converge / diverge | hội tụ / phân kì
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
Nguyên hàm $\displaystyle\int e^{3x}\,dx$ bằng
A. $3e^{3x}+C$
B. $e^{3x}+C$
C. $\dfrac{e^{3x}}{3}+C$
D. $\dfrac{e^{3x+1}}{3x+1}+C$

::hint
**Cần nhớ:** $u=3x$, $du=3\,dx$.

::solution
$\dfrac13\displaystyle\int e^u\,du=\dfrac{e^{3x}}{3}+C$: đáp án **C**. Phương án D coi $e^{3x}$ như một luỹ thừa của $x$.
:::

:::exercise Tự luận
Tìm $\displaystyle\int\frac{\ln x}{x}\,dx$.

::hint
**Cần nhớ:** đạo hàm của $\ln x$ là $\dfrac1x$.

**Các bước:**
1. Đặt $u=\ln x$, $du=\dfrac1x\,dx$.

::solution
$\displaystyle\int u\,du=\dfrac{u^2}{2}+C=\dfrac{(\ln x)^2}{2}+C$.
:::

:::exercise Tự luận
Tính $\displaystyle\int_0^{\pi/2}\cos x\,e^{\sin x}\,dx$.

::hint
**Cần nhớ:** $u=\sin x$; cận mới là $0$ và $1$.

::solution
$\displaystyle\int_0^1e^u\,du=e-1$.
:::

:::exercise Trắc nghiệm
Tích phân $\displaystyle\int_0^2\frac{x}{x^2+1}\,dx$ bằng
A. $\dfrac{\ln5}{2}$
B. $\ln5$
C. $2\ln5$
D. $\dfrac{\ln3}{2}$

::hint
**Cần nhớ:** $u=x^2+1$, $x\,dx=\dfrac12du$, cận $1$ và $5$.

::solution
$\dfrac12\Big[\ln u\Big]_1^5=\dfrac{\ln5}{2}$: đáp án **A**.
:::

:::exercise BC: tự luận
Tìm $\displaystyle\int x\cos x\,dx$.

::hint
**Cần nhớ:** từng phần với $u=x$, $dv=\cos x\,dx$.

**Các bước:**
1. $v=\sin x$.
2. $x\sin x-\displaystyle\int\sin x\,dx$.

::solution
$x\sin x+\cos x+C$. Kiểm tra: đạo hàm bằng $\sin x+x\cos x-\sin x=x\cos x$.
:::

## Bài tập vận dụng

:::exercise Đổ nước vào bể
Nước chảy vào bể với tốc độ $r(t)=\dfrac{20t}{t^2+1}$ lít mỗi phút. Từ $t=0$ đến $t=3$ phút có bao nhiêu nước chảy vào bể? Cho giá trị đúng và giá trị thập phân.

::hint
**Cần nhớ:** lượng nước $=\displaystyle\int_0^3r(t)\,dt$; đặt $u=t^2+1$.

**Các bước:**
1. $20t\,dt=10\,du$; cận $1$ và $10$.

::solution
$10\displaystyle\int_1^{10}\frac{du}{u}=10\ln10\approx23{,}026$ lít.
:::

:::exercise Đưa về bình phương đủ
Tìm $\displaystyle\int\frac{dx}{x^2-4x+13}$.

::hint
**Cần nhớ:** $x^2-4x+13=(x-2)^2+9$.

::solution
Với $u=x-2$ và $a=3$: $\dfrac13\arctan\dfrac{x-2}{3}+C$.
:::

:::exercise BC: từng phần và tích phân suy rộng
Tính $\displaystyle\int_0^{\infty}xe^{-x}\,dx$.

::hint
**Cần nhớ:** tìm nguyên hàm bằng từng phần, rồi lấy giới hạn khi $b\to\infty$; $\displaystyle\lim_{b\to\infty}\frac{b}{e^b}=0$.

**Các bước:**
1. $\displaystyle\int xe^{-x}\,dx=-xe^{-x}-e^{-x}+C$.
2. Tính từ $0$ đến $b$ rồi cho $b\to\infty$.

::solution
$\displaystyle\lim_{b\to\infty}\left[-xe^{-x}-e^{-x}\right]_0^b=\lim_{b\to\infty}\left(-\frac{b}{e^b}-\frac{1}{e^b}+1\right)=1$. Tích phân hội tụ về $1$.
:::

:::exercise Thử thách
Cho $\displaystyle\int_0^4f(x)\,dx=10$. Tính $\displaystyle\int_0^2f(2x)\,dx$ và $\displaystyle\int_1^3f(2x-2)\,dx$.

::hint
**Cần nhớ:** đổi biến với một hàm chưa biết vẫn làm như thường.

**Các bước:**
1. $u=2x$: cận $0$ đến $4$, $dx=\dfrac12du$.
2. $u=2x-2$: cận lại là $0$ đến $4$.

::solution
Cả hai tích phân đều bằng $\dfrac12\displaystyle\int_0^4f(u)\,du=\dfrac12\cdot10=5$.
:::

:::quiz
::mc
Nguyên hàm $\displaystyle\int\cos(5x)\,dx$ bằng
A. $5\sin(5x)+C$
B. $-\dfrac{\sin(5x)}{5}+C$
C. $\dfrac{\sin(5x)}{5}+C$
D. $\sin(5x)+C$
::key C
Với $u=5x$: $\dfrac15\sin u+C$.

::mc
Tích phân $\displaystyle\int_0^1 2xe^{x^2}\,dx$ bằng
A. $e$
B. $e-1$
C. $2e-2$
D. $\dfrac{e-1}{2}$
::key B
$u=x^2$, cận $0$ và $1$: $\Big[e^u\Big]_0^1=e-1$.

::mc
Phép đổi biến nào đưa $\displaystyle\int x^2\sqrt{x^3+1}\,dx$ về một tích phân cơ bản?
A. $u=x^2$
B. $u=\sqrt x$
C. $u=x^3$
D. $u=x^3+1$
::key D
Khi đó $du=3x^2\,dx$, tích phân trở thành $\dfrac13\displaystyle\int\sqrt u\,du$.

::mc
Nguyên hàm $\displaystyle\int\frac{dx}{x^2+9}$ bằng
A. $\dfrac13\arctan\dfrac x3+C$
B. $\arctan\dfrac x3+C$
C. $3\arctan\dfrac x3+C$
D. $\dfrac19\arctan x+C$
::key A
Dùng $\displaystyle\int\frac{du}{u^2+a^2}=\frac1a\arctan\frac ua+C$ với $a=3$.

::tf
Mỗi khẳng định sau đúng hay sai?
a) $\displaystyle\int\frac{2x}{x^2+1}\,dx=\ln\left(x^2+1\right)+C$.
b) Với $u=x^2+1$, $\displaystyle\int_0^2x\left(x^2+1\right)^2dx=\dfrac12\displaystyle\int_0^2u^2\,du$.
c) (BC) $\displaystyle\int_1^\infty\frac{dx}{x^3}=\frac12$.
d) (BC) $\displaystyle\int_1^\infty\frac{dx}{\sqrt x}$ hội tụ.
::key T F T F
a) Đúng: $u=x^2+1$. b) Sai: cận phải đổi thành $1$ và $5$. c) Đúng: $\displaystyle\lim_{b\to\infty}\left[-\frac{1}{2x^2}\right]_1^b=\frac12$. d) Sai: $p=\dfrac12\le1$.

::sa
Tính $\displaystyle\int_0^2 2x\left(x^2+1\right)dx$.
::key 12
$u=x^2+1$, cận $1$ và $5$: $\Big[\dfrac{u^2}{2}\Big]_1^5=\dfrac{25-1}{2}=12$.

::sa
Tính $\displaystyle\int_0^1 6x\left(x^2+1\right)^2dx$.
::key 7
$u=x^2+1$, $6x\,dx=3\,du$: $3\Big[\dfrac{u^3}{3}\Big]_1^2=8-1=7$.
:::
