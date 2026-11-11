---
title: Hàm tham số, hàm véc-tơ và toạ độ cực
description: AP Calculus BC Unit 9: đạo hàm của đường cong tham số, chuyển động bằng véc-tơ, tốc độ và quãng đường, hệ số góc và diện tích trong toạ độ cực.
minutes: 45
---

:::goals
- Tìm $\dfrac{dy}{dx}$ và $\dfrac{d^2y}{dx^2}$ của đường cong tham số, xác định tiếp tuyến nằm ngang và thẳng đứng.
- Mô tả chuyển động trong mặt phẳng bằng véc-tơ vị trí, vận tốc, gia tốc; tính tốc độ và quãng đường.
- Tìm hệ số góc của đường cong trong toạ độ cực và hiểu ý nghĩa của $\dfrac{dr}{d\theta}$.
- Tính diện tích miền giới hạn bởi một hoặc hai đường cong trong toạ độ cực.
:::

Unit 9 chỉ có ở BC và chiếm khoảng một phần mười điểm BC. Câu tự luận của unit này thường là một hạt chuyển động trong mặt phẳng, hoặc một miền giới hạn bởi đường cong trong toạ độ cực, và cả hai đều dựng từ một vài công thức. Cái khó không nằm ở giải tích mà ở việc nhớ mình đang lấy đạo hàm theo biến nào.

## Đường cong tham số

Đường cong cho bởi $x=x(t)$, $y=y(t)$ có hệ số góc
$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}\quad\text{khi }\frac{dx}{dt}\ne0.$$
Tiếp tuyến nằm ngang khi $\dfrac{dy}{dt}=0$ và $\dfrac{dx}{dt}\ne0$, thẳng đứng khi $\dfrac{dx}{dt}=0$ và $\dfrac{dy}{dt}\ne0$.

:::example Hệ số góc và tiếp tuyến
Với $x=t^2$, $y=t^3-3t$:

a) Tìm $\dfrac{dy}{dx}$ tại $t=2$.
b) Tiếp tuyến nằm ngang và thẳng đứng ở đâu?

**Lời giải.** a) $\dfrac{dy}{dx}=\dfrac{3t^2-3}{2t}$, nên tại $t=2$ hệ số góc bằng $\dfrac{9}{4}$.

b) Nằm ngang khi $3t^2-3=0$, tức $t=\pm1$ (khi đó $2t\ne0$): các điểm $(1,-2)$ và $(1,2)$. Thẳng đứng khi $2t=0$, tức $t=0$ (khi đó $3t^2-3=-3\ne0$): điểm $(0,0)$.
:::

:::note Đạo hàm cấp hai
$\dfrac{d^2y}{dx^2}$ **không** bằng $\dfrac{d^2y/dt^2}{d^2x/dt^2}$. Hãy lấy đạo hàm của $\dfrac{dy}{dx}$ theo $t$, rồi chia cho $\dfrac{dx}{dt}$:
$$\frac{d^2y}{dx^2}=\frac{\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)}{dx/dt}.$$
:::

:::example Tính lồi lõm của đường cong tham số
Với cùng đường cong $x=t^2$, $y=t^3-3t$, giá trị của $\dfrac{d^2y}{dx^2}$ tại $t=1$ bằng
A. $3$
B. $\dfrac32$
C. $\dfrac34$
D. $6$

**Lời giải.** $\dfrac{dy}{dx}=\dfrac32\left(t-\dfrac1t\right)$, nên $\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)=\dfrac32\left(1+\dfrac{1}{t^2}\right)$. Chia cho $2t$: $\dfrac{d^2y}{dx^2}=\dfrac{3\left(t^2+1\right)}{4t^3}$, bằng $\dfrac32$ tại $t=1$. Đáp án **B**. Phương án C quên thừa số $1+\dfrac{1}{t^2}$, chỉ lấy $\dfrac32$ chia cho $2t$.
:::

## Chuyển động bằng véc-tơ

Một hạt có vị trí $\langle x(t),y(t)\rangle$ thì có vận tốc $\langle x'(t),y'(t)\rangle$ và gia tốc $\langle x''(t),y''(t)\rangle$.

- **Tốc độ** là độ dài véc-tơ vận tốc: $\sqrt{x'(t)^2+y'(t)^2}$.
- **Quãng đường** từ $t=a$ đến $t=b$ là $\displaystyle\int_a^b\sqrt{x'(t)^2+y'(t)^2}\,dt$; cũng tích phân đó cho độ dài cung của quỹ đạo.
- **Vị trí về sau:** $x(b)=x(a)+\displaystyle\int_a^bx'(t)\,dt$, tương tự với $y$.

:::example Một hạt trong mặt phẳng
Một hạt có vận tốc $v(t)=\left\langle2t,\ t^2-1\right\rangle$ và ở điểm $(1,2)$ lúc $t=0$.

a) Tìm tốc độ và gia tốc của hạt lúc $t=2$.
b) Tìm vị trí của hạt lúc $t=3$.
c) Tìm quãng đường hạt đi được từ $t=0$ đến $t=3$.

**Lời giải.** a) $v(2)=\langle4,3\rangle$, tốc độ $\sqrt{16+9}=5$. $a(t)=\langle2,2t\rangle$, nên $a(2)=\langle2,4\rangle$.

b) $x(3)=1+\displaystyle\int_0^32t\,dt=1+9=10$ và $y(3)=2+\displaystyle\int_0^3\left(t^2-1\right)dt=2+(9-3)=8$. Hạt ở điểm $(10,8)$.

c) $4t^2+\left(t^2-1\right)^2=t^4+2t^2+1=\left(t^2+1\right)^2$, nên quãng đường bằng $\displaystyle\int_0^3\left(t^2+1\right)dt=9+3=12$. Trong đề thi, tích phân này thường tính bằng máy tính; ở đây nó rút gọn được chính xác.
:::

## Đường cong cực: hệ số góc và ý nghĩa của dr/dθ

Đường cong cực $r=f(\theta)$ chính là đường cong tham số $x=r\cos\theta$, $y=r\sin\theta$ với tham số $\theta$. Vì vậy hệ số góc của nó là
$$\frac{dy}{dx}=\frac{dy/d\theta}{dx/d\theta}=\frac{r'\sin\theta+r\cos\theta}{r'\cos\theta-r\sin\theta}.$$
Dấu của $\dfrac{dr}{d\theta}$ cho biết khoảng cách tới gốc toạ độ: khi $r>0$ và $\dfrac{dr}{d\theta}>0$, điểm đang ra xa gốc; khi $\dfrac{dr}{d\theta}<0$, điểm đang lại gần gốc.

:::example Hệ số góc của đường hình tim
Tìm hệ số góc của $r=1+\cos\theta$ tại $\theta=\dfrac{\pi}{2}$.

**Lời giải.** Tại $\theta=\dfrac\pi2$: $r=1$ và $r'=-\sin\theta=-1$.
$\dfrac{dy}{d\theta}=(-1)(1)+(1)(0)=-1$ và $\dfrac{dx}{d\theta}=(-1)(0)-(1)(1)=-1$, nên $\dfrac{dy}{dx}=1$.
:::

## Diện tích trong toạ độ cực

:::theorem Diện tích trong toạ độ cực
Diện tích miền giới hạn bởi $r=f(\theta)$ và hai tia $\theta=\alpha$, $\theta=\beta$ là
$$A=\frac12\int_\alpha^\beta r^2\,d\theta.$$
Giữa hai đường cong, với $r_{\text{ngoài}}$ xa gốc hơn: $A=\dfrac12\displaystyle\int_\alpha^\beta\left(r_{\text{ngoài}}^2-r_{\text{trong}}^2\right)d\theta$.
:::

:::example Diện tích bên trong đường hình tim
Diện tích miền giới hạn bởi $r=1+\cos\theta$ bằng
A. $\pi$
B. $3\pi$
C. $\dfrac{3\pi}{2}$
D. $2\pi$

**Lời giải.** $\dfrac12\displaystyle\int_0^{2\pi}\left(1+2\cos\theta+\cos^2\theta\right)d\theta=\dfrac12\left(2\pi+0+\pi\right)=\dfrac{3\pi}{2}$. Đáp án **C**. Phương án B quên hệ số $\dfrac12$.
:::

:::warning Những cái bẫy thường gặp
- **Chia hai đạo hàm cấp hai cho nhau.** $\dfrac{d^2y}{dx^2}\ne\dfrac{y''(t)}{x''(t)}$.
- **Nhầm tốc độ với vận tốc.** Tốc độ là một số; vận tốc là một véc-tơ.
- **Diện tích cực thiếu $\dfrac12$, hoặc dùng $r$ thay cho $r^2$.**
- **Lỗi kiểu vành khuyên trong toạ độ cực.** Giữa hai đường cong, dùng $r_{\text{ngoài}}^2-r_{\text{trong}}^2$, không phải $\left(r_{\text{ngoài}}-r_{\text{trong}}\right)^2$.
- **Sai cận.** Tìm giao điểm bằng cách giải $f(\theta)=g(\theta)$, rồi kiểm tra miền trên hình vẽ hoặc máy tính vẽ đồ thị.
:::

:::terms
- parametric equations | phương trình tham số
- parameter | tham số
- vector-valued function | hàm véc-tơ
- velocity / acceleration vector | véc-tơ vận tốc / gia tốc
- speed | tốc độ (độ lớn vận tốc)
- arc length | độ dài cung
- polar coordinates | toạ độ cực
- cardioid | đường hình tim
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
Với $x=2t+1$, $y=t^2$, giá trị của $\dfrac{dy}{dx}$ tại $t=3$ bằng
A. $6$
B. $\dfrac32$
C. $9$
D. $3$

::hint
**Cần nhớ:** $\dfrac{dy}{dx}=\dfrac{2t}{2}$.

::solution
$\dfrac{dy}{dx}=t=3$: đáp án **D**.
:::

:::exercise Tự luận
Viết phương trình tiếp tuyến của $x=e^t$, $y=t^2+1$ tại $t=1$.

::hint
**Cần nhớ:** tiếp điểm $(e,2)$ và hệ số góc $\dfrac{2t}{e^t}$.

::solution
Hệ số góc bằng $\dfrac2e$, nên tiếp tuyến là $y=2+\dfrac2e(x-e)$, tức $y=\dfrac2ex$.
:::

:::exercise Tự luận
Tính độ dài quỹ đạo $x=t^2$, $y=\dfrac23t^3$ với $0\le t\le1$.

::hint
**Cần nhớ:** tốc độ $\sqrt{4t^2+4t^4}=2t\sqrt{1+t^2}$.

**Các bước:**
1. Đổi biến $u=1+t^2$.

::solution
$\displaystyle\int_0^12t\sqrt{1+t^2}\,dt=\left[\frac23\left(1+t^2\right)^{3/2}\right]_0^1=\frac23\left(2\sqrt2-1\right)\approx1{,}219$.
:::

:::exercise Trắc nghiệm
Diện tích miền giới hạn bởi $r=4\sin\theta$ với $0\le\theta\le\pi$ bằng
A. $4\pi$
B. $8\pi$
C. $16\pi$
D. $2\pi$

::hint
**Cần nhớ:** $\dfrac12\displaystyle\int_0^\pi16\sin^2\theta\,d\theta$, hoặc nhận ra đường cong là đường tròn bán kính $2$.

::solution
$8\displaystyle\int_0^\pi\sin^2\theta\,d\theta=8\cdot\frac\pi2=4\pi$: đáp án **A**. Đường cong là đường tròn bán kính $2$, tâm $(0,2)$.
:::

:::exercise Tự luận
Với đường xoắn ốc $r=\theta$, $0\le\theta\le\pi$: khi $\theta$ tăng, điểm đi lại gần hay ra xa gốc toạ độ? Tính diện tích miền mà đoạn thẳng nối gốc với điểm đó quét qua.

::hint
**Cần nhớ:** dấu của $\dfrac{dr}{d\theta}$; $\dfrac12\displaystyle\int_0^\pi\theta^2\,d\theta$.

::solution
$\dfrac{dr}{d\theta}=1>0$ và $r>0$, nên điểm ra xa gốc. Diện tích $=\dfrac12\cdot\dfrac{\pi^3}{3}=\dfrac{\pi^3}{6}\approx5{,}168$.
:::

## Bài tập vận dụng

:::exercise Một câu về chuyển động kiểu đề AP
Một hạt chuyển động với $\dfrac{dx}{dt}=3t^2-6t$ và $\dfrac{dy}{dt}=4t$, và ở điểm $(1,0)$ lúc $t=0$.
a) Tại thời điểm $t>0$ nào hạt chuyển động theo phương thẳng đứng?
b) Tìm vị trí của hạt tại thời điểm đó.
c) Tìm hệ số góc của quỹ đạo tại $t=1$.

::hint
**Cần nhớ:** chuyển động thẳng đứng nghĩa là $\dfrac{dx}{dt}=0$ trong khi $\dfrac{dy}{dt}\ne0$.

**Các bước:**
1. $3t(t-2)=0$.
2. $x(2)=1+\displaystyle\int_0^2\left(3t^2-6t\right)dt$, $y(2)=\displaystyle\int_0^24t\,dt$.

::solution
a) $t=2$ (tại $t=0$ cả hai thành phần đều bằng $0$: hạt đang đứng yên).

b) $x(2)=1+(8-12)=-3$ và $y(2)=8$: điểm $(-3,8)$.

c) $\dfrac{dy}{dx}=\dfrac{4}{3-6}=-\dfrac43$.
:::

:::exercise Bên trong đường hình tim
Cho $r=2+2\sin\theta$.
a) Tính diện tích miền giới hạn bởi đường cong.
b) Tính $\dfrac{dr}{d\theta}$ tại $\theta=\pi$ và giải thích ý nghĩa đối với đường cong.

::hint
**Cần nhớ:** $\displaystyle\int_0^{2\pi}\sin\theta\,d\theta=0$ và $\displaystyle\int_0^{2\pi}\sin^2\theta\,d\theta=\pi$.

::solution
a) $\dfrac12\displaystyle\int_0^{2\pi}\left(4+8\sin\theta+4\sin^2\theta\right)d\theta=\dfrac12(8\pi+4\pi)=6\pi$.

b) $\dfrac{dr}{d\theta}=2\cos\theta=-2$ tại $\theta=\pi$. Vì ở đó $r=2>0$, đường cong đang tiến lại gần gốc khi $\theta$ tăng.
:::

:::exercise Giữa hai đường cong cực
Tính diện tích miền nằm trong $r=3\cos\theta$ và nằm ngoài $r=1+\cos\theta$.

::hint
**Cần nhớ:** hai đường cắt nhau khi $3\cos\theta=1+\cos\theta$, tức $\cos\theta=\dfrac12$, $\theta=\pm\dfrac\pi3$.

**Các bước:**
1. $A=\dfrac12\displaystyle\int_{-\pi/3}^{\pi/3}\left(9\cos^2\theta-(1+\cos\theta)^2\right)d\theta$.

::solution
Tích phân bằng $\pi$. Ở phần được dùng máy tính vẽ đồ thị, chỉ cần viết tích phân và giá trị $3{,}142$.
:::

:::exercise Thử thách
Tìm điểm trên $r=1+\cos\theta$, $0<\theta<\pi$, tại đó tiếp tuyến nằm ngang.

::hint
**Cần nhớ:** $\dfrac{dy}{d\theta}=0$ với $y=(1+\cos\theta)\sin\theta$.

**Các bước:**
1. $\dfrac{dy}{d\theta}=-\sin^2\theta+\cos\theta+\cos^2\theta=2\cos^2\theta+\cos\theta-1$.
2. Phân tích: $(2\cos\theta-1)(\cos\theta+1)=0$.

::solution
$\cos\theta=\dfrac12$, nên $\theta=\dfrac\pi3$ (nghiệm $\cos\theta=-1$ cho $\theta=\pi$, nằm ngoài khoảng). Khi đó $r=\dfrac32$, và điểm cần tìm là $\left(\dfrac34,\dfrac{3\sqrt3}{4}\right)$. Kiểm tra: tại đó $\dfrac{dx}{d\theta}\ne0$.
:::

:::quiz
::mc
Với $x=t^3$, $y=t^2+1$, giá trị của $\dfrac{dy}{dx}$ tại $t=1$ bằng
A. $\dfrac32$
B. $\dfrac23$
C. $2$
D. $3$
::key B
$\dfrac{2t}{3t^2}=\dfrac23$ tại $t=1$.

::mc
Một hạt có vị trí $\left\langle t^2,3t\right\rangle$. Tốc độ của hạt tại $t=2$ bằng
A. $7$
B. $\sqrt7$
C. $5$
D. $25$
::key C
$v(2)=\langle4,3\rangle$, tốc độ $5$.

::mc
Với $x=\cos t$, $y=\sin t$, giá trị của $\dfrac{dy}{dx}$ tại $t=\dfrac\pi4$ bằng
A. $-1$
B. $1$
C. $0$
D. $\sqrt2$
::key A
$\dfrac{\cos t}{-\sin t}=-1$ tại $t=\dfrac\pi4$.

::mc
Tích phân nào cho diện tích miền giới hạn bởi $r=f(\theta)$ với $\alpha\le\theta\le\beta$?
A. $\displaystyle\int_\alpha^\beta f(\theta)\,d\theta$
B. $\pi\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
C. $\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
D. $\dfrac12\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
::key D
Công thức diện tích cực có hệ số $\dfrac12$ và $r^2$.

::tf
Một hạt có vận tốc $v(t)=\left\langle2t,3t^2\right\rangle$ và ở gốc toạ độ lúc $t=0$.
a) Tốc độ của hạt tại $t=1$ bằng $\sqrt{13}$.
b) Gia tốc của hạt tại $t=1$ là $\langle2,6\rangle$.
c) Vị trí của hạt tại $t=2$ là $\langle4,6\rangle$.
d) Quãng đường hạt đi được từ $t=0$ đến $t=1$ là $\displaystyle\int_0^1\sqrt{4t^2+9t^4}\,dt$.
::key T T F T
a) Đúng: $\sqrt{4+9}$. b) Đúng: $a(t)=\langle2,6t\rangle$. c) Sai: vị trí là $\left\langle t^2,t^3\right\rangle$, nên bằng $\langle4,8\rangle$. d) Đúng: tích phân của tốc độ.

::sa
Tính độ dài quỹ đạo $x=3t$, $y=4t$ với $0\le t\le2$.
::key 10
Tốc độ $\sqrt{9+16}=5$, nên độ dài bằng $5\cdot2=10$.

::sa
Với $x=t^2$, $y=t^3$, tính $\dfrac{dy}{dx}$ tại $t=4$.
::key 6
$\dfrac{3t^2}{2t}=\dfrac{3t}{2}=6$.
:::
