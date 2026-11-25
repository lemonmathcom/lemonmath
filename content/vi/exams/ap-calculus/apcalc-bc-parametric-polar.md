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

Hãy nghĩ đến một con kiến bò trên mặt bàn. Mỗi giây nó ở một chỗ khác, nên vị trí của nó phụ thuộc vào thời gian chứ không chỉ vào một toạ độ. Muốn biết nó đang đi hướng nào và nhanh đến đâu, ta cần những công cụ riêng, và Unit 9 trao đúng những công cụ ấy. Unit 9 chỉ có ở BC và chiếm khoảng một phần mười điểm BC. Câu tự luận của unit này thường là một hạt chuyển động trong mặt phẳng, hoặc một miền giới hạn bởi đường cong trong toạ độ cực, và cả hai đều dựng từ một vài công thức. Cái khó không nằm ở giải tích mà ở việc nhớ mình đang lấy đạo hàm theo biến nào.

## Đường cong tham số

Khi cả hai toạ độ cùng chạy theo thời gian, hệ số góc của đường đi là tốc độ đi lên chia cho tốc độ đi ngang. Cụ thể, đường cong cho bởi $x=x(t)$, $y=y(t)$ có hệ số góc
$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}\quad\text{khi }\frac{dx}{dt}\ne0.$$
Hệ số góc còn cho ta biết chỗ nào đường cong nằm ngang, chỗ nào dựng đứng. Tiếp tuyến nằm ngang khi $\dfrac{dy}{dt}=0$ và $\dfrac{dx}{dt}\ne0$: lúc đó điểm không đi lên hay xuống nữa, chỉ còn đi ngang. Tiếp tuyến thẳng đứng khi $\dfrac{dx}{dt}=0$ và $\dfrac{dy}{dt}\ne0$: lúc đó điểm không đi ngang nữa, chỉ còn đi lên hoặc xuống. Hai điều kiện đi kèm này đừng bỏ sót.

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

Bây giờ ta cho hạt chạy theo thời gian. Mỗi thời điểm hạt ở một chỗ, nên vị trí là một cặp số thay đổi: hạt ở $\langle x(t),y(t)\rangle$. Vị trí đổi nhanh thế nào thì ta lấy đạo hàm từng thành phần, và được vận tốc $\langle x'(t),y'(t)\rangle$. Vận tốc đổi nhanh thế nào thì ta lấy đạo hàm tiếp, và được gia tốc $\langle x''(t),y''(t)\rangle$.

- **Tốc độ** là độ dài véc-tơ vận tốc. Nó cho biết hạt nhanh hay chậm, không cho biết hướng: $\sqrt{x'(t)^2+y'(t)^2}$.
- **Quãng đường** từ $t=a$ đến $t=b$ là $\displaystyle\int_a^b\sqrt{x'(t)^2+y'(t)^2}\,dt$. Cộng tốc độ qua từng khoảnh khắc thì ra quãng đường, nên cũng tích phân đó cho độ dài cung của quỹ đạo.
- **Vị trí về sau:** $x(b)=x(a)+\displaystyle\int_a^bx'(t)\,dt$, tương tự với $y$. Vị trí mới bằng vị trí cũ cộng phần đã dịch chuyển.

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

Toạ độ cực nghe lạ, nhưng ta đã có sẵn công cụ. Đường cong cực $r=f(\theta)$ chính là đường cong tham số $x=r\cos\theta$, $y=r\sin\theta$ với tham số $\theta$. Vì vậy hệ số góc của nó cũng tính theo cách của đường cong tham số:
$$\frac{dy}{dx}=\frac{dy/d\theta}{dx/d\theta}=\frac{r'\sin\theta+r\cos\theta}{r'\cos\theta-r\sin\theta}.$$
Còn $\dfrac{dr}{d\theta}$ nói lên điều gì? Nó cho ta biết điểm đang ra xa hay lại gần gốc toạ độ khi góc quay thêm. Khi $r>0$ và $\dfrac{dr}{d\theta}>0$, điểm đang ra xa gốc; khi $\dfrac{dr}{d\theta}<0$, điểm đang lại gần gốc.

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
- **Chia hai đạo hàm cấp hai cho nhau.** Nghe hợp lí nhưng sai: $\dfrac{d^2y}{dx^2}\ne\dfrac{y''(t)}{x''(t)}$.
- **Nhầm tốc độ với vận tốc.** Tốc độ chỉ là một số; vận tốc còn mang hướng nên là một véc-tơ.
- **Diện tích cực thiếu $\dfrac12$, hoặc dùng $r$ thay cho $r^2$.** Mỗi lát mỏng là một hình quạt, và diện tích hình quạt có hệ số một nửa cùng bình phương của bán kính.
- **Lỗi kiểu vành khuyên trong toạ độ cực.** Giữa hai đường cong, ta trừ hai diện tích: dùng $r_{\text{ngoài}}^2-r_{\text{trong}}^2$, không phải $\left(r_{\text{ngoài}}-r_{\text{trong}}\right)^2$.
- **Sai cận.** Tìm giao điểm bằng cách giải $f(\theta)=g(\theta)$, rồi nhìn lại miền trên hình vẽ hoặc máy tính vẽ đồ thị để chắc chắn cận đúng.
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
Với đường cong cho bởi hai hàm tham số, khi $\dfrac{dx}{dt}\neq0$ ta có
$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}.$$

Từ $x=2t+1$ và $y=t^2$, ta có $\dfrac{dx}{dt}=2\neq0$ và $\dfrac{dy}{dt}=2t$. Do đó
$$\frac{dy}{dx}=\frac{2t}{2}=t.$$

Tại $t=3$, ta được $\dfrac{dy}{dx}=3$.

Vậy chọn **D**.

**Đáp số.** D.
:::

:::exercise Tự luận
Viết phương trình tiếp tuyến của $x=e^t$, $y=t^2+1$ tại $t=1$.

::hint
**Cần nhớ:** tiếp điểm $(e,2)$ và hệ số góc $\dfrac{2t}{e^t}$.

::solution
Tại $t=1$, ta có $x=e^1=e$ và $y=1^2+1=2$, nên tiếp điểm là $(e; 2)$.

Ta có $\dfrac{dx}{dt}=e^t$ và $\dfrac{dy}{dt}=2t$. Tại $t=1$: $\dfrac{dx}{dt}=e\neq0$ và $\dfrac{dy}{dt}=2$. Do đó hệ số góc của tiếp tuyến là
$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac2e.$$

Phương trình tiếp tuyến đi qua $(e; 2)$ với hệ số góc $\dfrac2e$ là
$$y=2+\frac2e(x-e)=2+\frac2ex-2=\frac2ex.$$

Vậy tiếp tuyến của đường cong tại $t=1$ là $y=\dfrac2ex$.

**Đáp số.** $y=\dfrac2ex$.
:::

:::exercise Tự luận
Tính độ dài quỹ đạo $x=t^2$, $y=\dfrac23t^3$ với $0\le t\le1$.

::hint
**Cần nhớ:** tốc độ $\sqrt{4t^2+4t^4}=2t\sqrt{1+t^2}$.

**Các bước:**
1. Đổi biến $u=1+t^2$.

::solution
Độ dài của quỹ đạo $x=x(t)$, $y=y(t)$ với $a\le t\le b$ là $L=\displaystyle\int_a^b\sqrt{\left(\dfrac{dx}{dt}\right)^2+\left(\dfrac{dy}{dt}\right)^2}\,dt$.

Từ $x=t^2$ và $y=\dfrac23t^3$, ta có $\dfrac{dx}{dt}=2t$ và $\dfrac{dy}{dt}=2t^2$. Do đó
$$\sqrt{(2t)^2+\left(2t^2\right)^2}=\sqrt{4t^2\left(1+t^2\right)}=2t\sqrt{1+t^2}\quad(\text{vì }t\ge0).$$

Suy ra $L=\displaystyle\int_0^12t\sqrt{1+t^2}\,dt$.

Đặt $u=1+t^2$, suy ra $du=2t\,dt$. Khi $t=0$ thì $u=1$; khi $t=1$ thì $u=2$. Ta có
$$L=\int_1^2\sqrt u\,du=\left.\frac23u^{3/2}\right|_1^2=\frac23\left(2\sqrt2-1\right)\approx1{,}219.$$

Vậy độ dài quỹ đạo bằng $\dfrac23\left(2\sqrt2-1\right)\approx1{,}219$.

**Đáp số.** $\dfrac23\left(2\sqrt2-1\right)\approx1{,}219$.
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
Diện tích miền giới hạn bởi đường cong cực $r=r(\theta)$ với $\alpha\le\theta\le\beta$ là $A=\dfrac12\displaystyle\int_\alpha^\beta r^2\,d\theta$. Với $r=4\sin\theta$ ta có $r\ge0$ trên $[0; \pi]$, nên
$$A=\frac12\int_0^\pi16\sin^2\theta\,d\theta=8\int_0^\pi\sin^2\theta\,d\theta.$$

Vì $\sin^2\theta=\dfrac{1-\cos2\theta}{2}$ nên
$$\int_0^\pi\sin^2\theta\,d\theta=\left.\left(\frac\theta2-\frac{\sin2\theta}{4}\right)\right|_0^\pi=\frac\pi2.$$

Do đó $A=8\cdot\dfrac\pi2=4\pi$.

Vậy chọn **A**.

*Nhận xét.* Đường cong là đường tròn bán kính $2$, tâm $(0; 2)$ (vì $r=4\sin\theta\iff x^2+y^2=4y\iff x^2+(y-2)^2=4$), nên diện tích là $\pi\cdot2^2=4\pi$, khớp với kết quả trên.

**Đáp số.** A.
:::

:::exercise Tự luận
Với đường xoắn ốc $r=\theta$, $0\le\theta\le\pi$: khi $\theta$ tăng, điểm đi lại gần hay ra xa gốc toạ độ? Tính diện tích miền mà đoạn thẳng nối gốc với điểm đó quét qua.

::hint
**Cần nhớ:** dấu của $\dfrac{dr}{d\theta}$; $\dfrac12\displaystyle\int_0^\pi\theta^2\,d\theta$.

::solution
Với $r=\theta$ ta có $\dfrac{dr}{d\theta}=1>0$ và $r=\theta>0$ khi $\theta>0$. Vì $r$ là khoảng cách từ điểm đến gốc toạ độ và $r$ tăng khi $\theta$ tăng, nên điểm ra xa gốc toạ độ.

Diện tích miền mà đoạn thẳng nối gốc với điểm đó quét qua khi $\theta$ chạy từ $0$ đến $\pi$ là
$$A=\frac12\int_0^\pi r^2\,d\theta=\frac12\int_0^\pi\theta^2\,d\theta=\frac12\left.\frac{\theta^3}{3}\right|_0^\pi=\frac12\cdot\frac{\pi^3}{3}=\frac{\pi^3}{6}\approx5{,}168.$$

Vậy khi $\theta$ tăng, điểm ra xa gốc toạ độ; diện tích miền bị quét qua bằng $\dfrac{\pi^3}{6}\approx5{,}168$.

**Đáp số.** Ra xa gốc toạ độ; diện tích $\dfrac{\pi^3}{6}\approx5{,}168$.
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
Ta có $\dfrac{dx}{dt}=3t^2-6t=3t(t-2)$ và $\dfrac{dy}{dt}=4t$.

a) Hạt chuyển động theo phương thẳng đứng khi $\dfrac{dx}{dt}=0$ và $\dfrac{dy}{dt}\neq0$. Giải $3t(t-2)=0$ ta được $t=0$ hoặc $t=2$. Tại $t=0$ cả hai thành phần đều bằng $0$: hạt đang đứng yên, nên loại. Tại $t=2$ ta có $\dfrac{dy}{dt}=8\neq0$. Vậy với $t>0$, hạt chuyển động theo phương thẳng đứng tại $t=2$.

b) Vì hạt ở $(1; 0)$ lúc $t=0$ nên
$$x(t)=1+\int_0^t\left(3s^2-6s\right)ds=1+t^3-3t^2,\qquad y(t)=0+\int_0^t4s\,ds=2t^2.$$
Tại $t=2$: $x(2)=1+8-12=-3$ và $y(2)=2\cdot4=8$. Vậy vị trí của hạt là $(-3; 8)$.

c) Tại $t=1$ ta có $\dfrac{dx}{dt}=3-6=-3\neq0$ và $\dfrac{dy}{dt}=4$. Do đó hệ số góc của quỹ đạo là
$$\frac{dy}{dx}=\frac{4}{3-6}=-\frac43.$$

Vậy hạt chuyển động thẳng đứng tại $t=2$, khi đó ở vị trí $(-3; 8)$, và hệ số góc của quỹ đạo tại $t=1$ bằng $-\dfrac43$.

**Đáp số.** a) $t=2$; b) $(-3; 8)$; c) $-\dfrac43$.
:::

:::exercise Bên trong đường hình tim
Cho $r=2+2\sin\theta$.
a) Tính diện tích miền giới hạn bởi đường cong.
b) Tính $\dfrac{dr}{d\theta}$ tại $\theta=\pi$ và giải thích ý nghĩa đối với đường cong.

::hint
**Cần nhớ:** $\displaystyle\int_0^{2\pi}\sin\theta\,d\theta=0$ và $\displaystyle\int_0^{2\pi}\sin^2\theta\,d\theta=\pi$.

::solution
Với $r=2+2\sin\theta$ ta có $r\ge0$ với mọi $\theta$, và đường cong được vẽ đúng một lần khi $\theta$ chạy từ $0$ đến $2\pi$.

a) Diện tích miền giới hạn bởi đường cong là
$$A=\frac12\int_0^{2\pi}(2+2\sin\theta)^2\,d\theta=\frac12\int_0^{2\pi}\left(4+8\sin\theta+4\sin^2\theta\right)d\theta.$$
Ta tính từng số hạng: $\displaystyle\int_0^{2\pi}4\,d\theta=8\pi$; $\displaystyle\int_0^{2\pi}8\sin\theta\,d\theta=0$; và vì $\sin^2\theta=\dfrac{1-\cos2\theta}{2}$ nên $\displaystyle\int_0^{2\pi}4\sin^2\theta\,d\theta=4\pi$. Do đó
$$A=\frac12(8\pi+0+4\pi)=6\pi.$$

b) Ta có $\dfrac{dr}{d\theta}=2\cos\theta$. Tại $\theta=\pi$: $\dfrac{dr}{d\theta}=2\cos\pi=-2$, và $r=2+2\sin\pi=2>0$. Vì $r>0$ và $\dfrac{dr}{d\theta}<0$ nên $r$ giảm khi $\theta$ tăng; nghĩa là tại đó đường cong đang tiến lại gần gốc toạ độ.

Vậy diện tích miền giới hạn bởi đường cong bằng $6\pi$; tại $\theta=\pi$ có $\dfrac{dr}{d\theta}=-2$ và đường cong đang tiến lại gần gốc toạ độ.

**Đáp số.** a) $6\pi$; b) $\dfrac{dr}{d\theta}=-2$, đường cong đang tiến lại gần gốc toạ độ.
:::

:::exercise Giữa hai đường cong cực
Tính diện tích miền nằm trong $r=3\cos\theta$ và nằm ngoài $r=1+\cos\theta$.

::hint
**Cần nhớ:** hai đường cắt nhau khi $3\cos\theta=1+\cos\theta$, tức $\cos\theta=\dfrac12$, $\theta=\pm\dfrac\pi3$.

**Các bước:**
1. $A=\dfrac12\displaystyle\int_{-\pi/3}^{\pi/3}\left(9\cos^2\theta-(1+\cos\theta)^2\right)d\theta$.

::solution
Tìm giao điểm của hai đường cong: $3\cos\theta=1+\cos\theta\iff\cos\theta=\dfrac12\iff\theta=\pm\dfrac\pi3$.

Đường tròn $r=3\cos\theta$ được vẽ một lần khi $-\dfrac\pi2\le\theta\le\dfrac\pi2$. Với $-\dfrac\pi3\le\theta\le\dfrac\pi3$ ta có $\cos\theta\ge\dfrac12$, nên $3\cos\theta\ge1+\cos\theta$: đường tròn nằm ngoài đường $r=1+\cos\theta$. Với $\dfrac\pi3<|\theta|\le\dfrac\pi2$ thì $3\cos\theta<1+\cos\theta$, nên đường tròn nằm trong đường kia. Vì vậy miền nằm trong $r=3\cos\theta$ và ngoài $r=1+\cos\theta$ ứng với $-\dfrac\pi3\le\theta\le\dfrac\pi3$.

Do tính đối xứng qua trục hoành, diện tích là
$$A=\frac12\int_{-\pi/3}^{\pi/3}\left[(3\cos\theta)^2-(1+\cos\theta)^2\right]d\theta=\int_0^{\pi/3}\left(8\cos^2\theta-2\cos\theta-1\right)d\theta.$$

Vì $8\cos^2\theta=4+4\cos2\theta$ nên
$$A=\int_0^{\pi/3}\left(3+4\cos2\theta-2\cos\theta\right)d\theta=\Big[3\theta+2\sin2\theta-2\sin\theta\Big]_0^{\pi/3}=\pi+\sqrt3-\sqrt3=\pi.$$

Vậy diện tích miền cần tìm bằng $\pi\approx3{,}142$.

*Mẹo thi.* Ở phần được dùng máy tính vẽ đồ thị, chỉ cần viết tích phân $\dfrac12\displaystyle\int_{-\pi/3}^{\pi/3}\left[(3\cos\theta)^2-(1+\cos\theta)^2\right]d\theta$ và giá trị $3{,}142$.

**Đáp số.** $\pi\approx3{,}142$.
:::

:::exercise Thử thách
Tìm điểm trên $r=1+\cos\theta$, $0<\theta<\pi$, tại đó tiếp tuyến nằm ngang.

::hint
**Cần nhớ:** $\dfrac{dy}{d\theta}=0$ với $y=(1+\cos\theta)\sin\theta$.

**Các bước:**
1. $\dfrac{dy}{d\theta}=-\sin^2\theta+\cos\theta+\cos^2\theta=2\cos^2\theta+\cos\theta-1$.
2. Phân tích: $(2\cos\theta-1)(\cos\theta+1)=0$.

::solution
Toạ độ Descartes của điểm trên đường cong là
$$x=r\cos\theta=(1+\cos\theta)\cos\theta,\qquad y=r\sin\theta=(1+\cos\theta)\sin\theta.$$

Lấy đạo hàm theo $\theta$:
$$\frac{dy}{d\theta}=-\sin^2\theta+(1+\cos\theta)\cos\theta=2\cos^2\theta+\cos\theta-1=(2\cos\theta-1)(\cos\theta+1),$$
$$\frac{dx}{d\theta}=-\sin\theta\cos\theta-(1+\cos\theta)\sin\theta=-\sin\theta(1+2\cos\theta).$$

Tiếp tuyến nằm ngang khi $\dfrac{dy}{d\theta}=0$ và $\dfrac{dx}{d\theta}\neq0$. Giải $\dfrac{dy}{d\theta}=0$: $\cos\theta=\dfrac12$ hoặc $\cos\theta=-1$.

Với $0<\theta<\pi$: $\cos\theta=\dfrac12$ cho $\theta=\dfrac\pi3$; còn $\cos\theta=-1$ cho $\theta=\pi$, nằm ngoài khoảng nên loại.

Kiểm tra: tại $\theta=\dfrac\pi3$ ta có $\dfrac{dx}{d\theta}=-\dfrac{\sqrt3}{2}(1+1)=-\sqrt3\neq0$.

Khi đó $r=1+\dfrac12=\dfrac32$, nên
$$x=\frac32\cdot\frac12=\frac34,\qquad y=\frac32\cdot\frac{\sqrt3}{2}=\frac{3\sqrt3}{4}.$$

Vậy điểm trên đường cong có tiếp tuyến nằm ngang là $\left(\dfrac34; \dfrac{3\sqrt3}{4}\right)$.

**Đáp số.** $\left(\dfrac34; \dfrac{3\sqrt3}{4}\right)$.
:::

:::quiz
::mc TH
Với $x=t^3$, $y=t^2+1$, giá trị của $\dfrac{dy}{dx}$ tại $t=1$ bằng
A. $\dfrac32$
B. $\dfrac23$
C. $2$
D. $3$
::key B
$\dfrac{2t}{3t^2}=\dfrac23$ tại $t=1$.

::mc TH
Một hạt có vị trí $\left\langle t^2,3t\right\rangle$. Tốc độ của hạt tại $t=2$ bằng
A. $7$
B. $\sqrt7$
C. $5$
D. $25$
::key C
$v(2)=\langle4,3\rangle$, tốc độ $5$.

::mc TH
Với $x=\cos t$, $y=\sin t$, giá trị của $\dfrac{dy}{dx}$ tại $t=\dfrac\pi4$ bằng
A. $-1$
B. $1$
C. $0$
D. $\sqrt2$
::key A
$\dfrac{\cos t}{-\sin t}=-1$ tại $t=\dfrac\pi4$.

::mc NB
Tích phân nào cho diện tích miền giới hạn bởi $r=f(\theta)$ với $\alpha\le\theta\le\beta$?
A. $\displaystyle\int_\alpha^\beta f(\theta)\,d\theta$
B. $\pi\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
C. $\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
D. $\dfrac12\displaystyle\int_\alpha^\beta f(\theta)^2\,d\theta$
::key D
Công thức diện tích cực có hệ số $\dfrac12$ và $r^2$.

::tf TH TH VD TH
Một hạt có vận tốc $v(t)=\left\langle2t,3t^2\right\rangle$ và ở gốc toạ độ lúc $t=0$.
a) Tốc độ của hạt tại $t=1$ bằng $\sqrt{13}$.
b) Gia tốc của hạt tại $t=1$ là $\langle2,6\rangle$.
c) Vị trí của hạt tại $t=2$ là $\langle4,6\rangle$.
d) Quãng đường hạt đi được từ $t=0$ đến $t=1$ là $\displaystyle\int_0^1\sqrt{4t^2+9t^4}\,dt$.
::key T T F T
a) Đúng: $\sqrt{4+9}$. b) Đúng: $a(t)=\langle2,6t\rangle$. c) Sai: vị trí là $\left\langle t^2,t^3\right\rangle$, nên bằng $\langle4,8\rangle$. d) Đúng: tích phân của tốc độ.

::sa VD
Tính độ dài quỹ đạo $x=3t$, $y=4t$ với $0\le t\le2$.
::key 10
Tốc độ $\sqrt{9+16}=5$, nên độ dài bằng $5\cdot2=10$.

::sa TH
Với $x=t^2$, $y=t^3$, tính $\dfrac{dy}{dx}$ tại $t=4$.
::key 6
$\dfrac{3t^2}{2t}=\dfrac{3t}{2}=6$.
:::
