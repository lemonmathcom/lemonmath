---
title: Diện tích, thể tích và giá trị trung bình
description: AP Calculus Unit 8: giá trị trung bình, diện tích giữa hai đường cong theo x và theo y, thể tích theo thiết diện, đĩa và vành khuyên; riêng BC: độ dài cung.
minutes: 45
---

:::goals
- Tìm giá trị trung bình của hàm số trên một khoảng và giải thích ý nghĩa.
- Tính diện tích giữa hai đường cong, lấy tích phân theo $x$ hoặc theo $y$, tuỳ cách nào đơn giản hơn.
- Tính thể tích khối có thiết diện đã biết.
- Tính thể tích khối tròn xoay bằng đĩa và vành khuyên, kể cả khi trục quay không phải là trục toạ độ.
- (BC) Tính độ dài một đường cong.
:::

Hãy nghĩ đến một mảnh đất có hai bờ cong: bên này là con mương, bên kia là lối đi uốn lượn. Muốn biết mảnh đất rộng bao nhiêu thì đo thế nào? Đề thi Unit 8 hay hỏi đúng kiểu đó. Họ cho một miền $R$ giới hạn bởi hai đường cong, rồi hỏi diện tích của nó, thể tích khối có đáy là $R$, và thể tích khi quay $R$ quanh một đường thẳng. Đây là một trong những câu tự luận dễ đoán nhất của đề, và thường nằm ở phần được dùng máy tính. Máy tính lo phần tính toán, nên điểm của bạn đến từ một tích phân đúng với cận đúng. Việc của ta trong bài này là tập thiết lập thật chắc tay.

## Giá trị trung bình

:::theorem Giá trị trung bình của hàm số
Giá trị trung bình của hàm liên tục $f$ trên $[a,b]$ là
$$f_{\text{tb}}=\frac{1}{b-a}\int_a^bf(x)\,dx.$$
Theo định lí giá trị trung bình cho tích phân, $f$ nhận giá trị này tại một điểm $c$ nào đó trong $[a,b]$.
:::

:::example Trung bình của một bình phương
Tìm giá trị trung bình của $f(x)=x^2$ trên $[0,3]$ và một điểm mà tại đó $f$ nhận giá trị ấy.

**Lời giải.** $f_{\text{tb}}=\dfrac13\displaystyle\int_0^3x^2\,dx=\dfrac13\cdot9=3$. Vì $c^2=3$ nên $c=\sqrt3$, nằm trong $[0,3]$.

Đừng nhầm với tốc độ thay đổi trung bình $\dfrac{f(3)-f(0)}{3-0}=3$. Ở đây hai số tình cờ bằng nhau; thông thường thì không.
:::

## Diện tích giữa hai đường cong

Muốn đo diện tích giữa hai đường cong, ta cắt miền thành những dải mỏng rồi cộng lại. Mỗi dải cao bằng khoảng cách giữa đường trên và đường dưới. Vì vậy diện tích giữa $y=f(x)$ ở trên và $y=g(x)$ ở dưới, với $a\le x\le b$, là $\displaystyle\int_a^b\big(f(x)-g(x)\big)\,dx$: trên trừ dưới. Có những miền chỉ mô tả gọn khi nhìn theo chiều ngang, với đường bên phải $x=p(y)$ và đường bên trái $x=q(y)$. Lúc đó ta cắt thành những dải nằm ngang và dùng $\displaystyle\int_c^d\big(p(y)-q(y)\big)\,dy$: phải trừ trái.

:::graph Miền giữa $y=x$ và $y=x^2$
alt: Đường thẳng y = x và parabol y = x bình phương cắt nhau tại (0, 0) và (1, 1); miền giữa chúng được tô màu, đường thẳng nằm phía trên
x: -0.3..1.4
y: -0.3..1.4
plot: x
plot: x^2
fill: x ; x^2 ; 0..1
point: (1, 1) "(1, 1)" right
:::

:::example Trên trừ dưới
Diện tích miền giữa $y=x$ và $y=x^2$ bằng
A. $\dfrac12$
B. $\dfrac13$
C. $\dfrac16$
D. $\dfrac56$

**Lời giải.** Hai đường cắt nhau khi $x=x^2$, tức $x=0$ và $x=1$. Trên $(0,1)$ đường thẳng nằm trên: $\displaystyle\int_0^1\left(x-x^2\right)dx=\frac12-\frac13=\frac16$. Đáp án **C**.
:::

:::example Lấy tích phân theo y
Tính diện tích miền giữa $x=y^2$ và $x=y+2$.

**Lời giải.** Nếu tính theo $x$, miền này cần hai tích phân. Tính theo $y$: hai đường cắt nhau khi $y^2=y+2$, tức $y=-1$ và $y=2$, và đường thẳng $x=y+2$ nằm bên phải.
$$\int_{-1}^2\left(y+2-y^2\right)dy=\left[\frac{y^2}{2}+2y-\frac{y^3}{3}\right]_{-1}^2=\frac{10}{3}+\frac76=\frac92.$$
:::

## Thể tích khối có thiết diện đã biết

Hãy nghĩ đến một ổ bánh mì cắt thành những lát mỏng. Thể tích ổ bánh chính là tổng thể tích các lát. Với khối ta đang xét, nếu thiết diện vuông góc với trục $x$ tại $x$ có diện tích $A(x)$, thì cộng mọi lát lại cho ta thể tích $\displaystyle\int_a^bA(x)\,dx$. Việc còn lại là tìm $A(x)$. Bạn chỉ cần biết cạnh của thiết diện theo $x$, rồi dùng công thức diện tích của hình đó: hình vuông là $s^2$, nửa hình tròn đường kính $s$ là $\dfrac{\pi}{8}s^2$, tam giác đều là $\dfrac{\sqrt3}{4}s^2$.

:::example Thiết diện là hình vuông
Đáy của một khối là miền dưới $y=\sqrt x$ với $0\le x\le4$. Các thiết diện vuông góc với trục $x$ là hình vuông. Tính thể tích.

**Lời giải.** Cạnh là $s=\sqrt x$, nên $A(x)=x$ và $V=\displaystyle\int_0^4x\,dx=8$.
:::

## Đĩa và vành khuyên

Quay một miền quanh một đường thẳng rồi cắt khối vuông góc với trục quay: mỗi lát cắt là một hình tròn. Vậy ta chỉ cần biết bán kính của từng lát, rồi cộng lại. Nếu miền chạm sát trục quay thì lát cắt đặc, gọi là **đĩa**, và $V=\pi\displaystyle\int_a^bR(x)^2\,dx$. Nếu giữa miền và trục còn một khoảng hở thì lát cắt bị khoét một lỗ ở giữa, gọi là **vành khuyên**, và $V=\pi\displaystyle\int_a^b\left(R(x)^2-r(x)^2\right)dx$. Ở đây $R$ và $r$ là bán kính ngoài và bán kính trong, cả hai đều đo từ trục quay.

:::example Vành khuyên quanh một đường nằm dưới miền
Miền giữa $y=x$ và $y=x^2$ quay quanh đường thẳng $y=-1$. Tính thể tích.

**Lời giải.** Khoảng cách tới $y=-1$ là $R=x+1$ (đường thẳng, xa hơn) và $r=x^2+1$.
$$V=\pi\int_0^1\left[(x+1)^2-\left(x^2+1\right)^2\right]dx=\pi\int_0^1\left(2x-x^2-x^4\right)dx=\pi\left(1-\frac13-\frac15\right)=\frac{7\pi}{15}.$$
Nếu quay quanh trục $x$ thì $R=x$, $r=x^2$ và $V=\dfrac{2\pi}{15}$.
:::

:::warning Những cái bẫy thường gặp
- **Viết $(R-r)^2$ thay cho $R^2-r^2$.** Chỗ này nhiều bạn hay nhầm. Vành khuyên là một đĩa lớn bị khoét mất đĩa nhỏ, nên ta trừ hai diện tích, chứ không bình phương hiệu của hai bán kính.
- **Đo bán kính từ sai đường thẳng.** Bán kính luôn đo từ trục quay. Quanh $y=-1$, bán kính ứng với đường cong $y=f(x)$ là $f(x)+1$; quanh $y=3$ là $3-f(x)$.
- **Nhầm đường nằm trên.** Trước khi lấy tích phân, hãy thử một giá trị để biết đường nào nằm trên.
- **Giá trị trung bình thiếu $\dfrac{1}{b-a}$.** Thiếu hệ số này thì bạn mới có tích phân, chưa phải giá trị trung bình.
:::

## Độ dài cung (BC)

Muốn đo độ dài một đường cong, ta chia nó thành những đoạn thật ngắn, coi mỗi đoạn gần như thẳng rồi cộng lại. Kết quả là: đường cong $y=f(x)$ với $a\le x\le b$ có độ dài $L=\displaystyle\int_a^b\sqrt{1+\left(f'(x)\right)^2}\,dx$. Trong đề, tích phân này thường được tính bằng máy tính, và việc viết đúng tích phân là điều được chấm điểm.

:::example Một độ dài tính được chính xác
Tính độ dài của $y=\dfrac23x^{3/2}$ với $0\le x\le3$.

**Lời giải.** $f'(x)=\sqrt x$, nên $L=\displaystyle\int_0^3\sqrt{1+x}\,dx=\left[\frac23(1+x)^{3/2}\right]_0^3=\frac23(8-1)=\frac{14}{3}$.
:::

:::terms
- average value | giá trị trung bình
- area between curves | diện tích giữa hai đường cong
- cross section | thiết diện
- solid of revolution | khối tròn xoay
- disk method / washer method | phương pháp đĩa / vành khuyên
- axis of rotation | trục quay
- outer / inner radius | bán kính ngoài / trong
- arc length | độ dài cung
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
Giá trị trung bình của $\sin x$ trên $[0,\pi]$ bằng
A. $\dfrac{1}{\pi}$
B. $\dfrac{2}{\pi}$
C. $\dfrac12$
D. $2$

::hint
**Cần nhớ:** $\displaystyle\int_0^\pi\sin x\,dx=2$.

::solution
Giá trị trung bình của hàm số $f$ trên $[a; b]$ là $\dfrac{1}{b-a}\displaystyle\int_a^bf(x)\,dx$. Với $f(x)=\sin x$ trên $[0; \pi]$, ta có
$$\frac{1}{\pi-0}\int_0^{\pi}\sin x\,dx=\frac1\pi\Big[-\cos x\Big]_0^{\pi}=\frac1\pi\left(1+1\right)=\frac2\pi.$$

Vậy chọn **B**.

*Nhận xét.* Phương án D quên chia cho độ dài khoảng: giá trị $2$ chỉ là $\displaystyle\int_0^\pi\sin x\,dx$.

**Đáp số.** B.
:::

:::exercise Tự luận
Tính diện tích miền giới hạn bởi $y=4-x^2$ và trục hoành.

::hint
**Cần nhớ:** parabol cắt trục hoành tại $x=\pm2$.

::solution
Giao điểm của $y=4-x^2$ với trục hoành thoả mãn $4-x^2=0$, suy ra $x=-2$ hoặc $x=2$. Trên $[-2; 2]$ ta có $4-x^2\ge0$, nên đồ thị nằm phía trên trục hoành.

Diện tích miền cần tìm là
$$S=\int_{-2}^{2}\left(4-x^2\right)dx=\left.\left(4x-\frac{x^3}{3}\right)\right|_{-2}^{2}=\left(8-\frac83\right)-\left(-8+\frac83\right)=16-\frac{16}{3}=\frac{32}{3}.$$

Vậy diện tích miền giới hạn bởi $y=4-x^2$ và trục hoành bằng $\dfrac{32}{3}$.

**Đáp số.** $\dfrac{32}{3}$.
:::

:::exercise Tự luận
Tính diện tích miền giữa $y=x^2$ và $y=2x$.

::hint
**Cần nhớ:** giao điểm tại $x=0$ và $x=2$; đường thẳng nằm trên.

::solution
Giao điểm của $y=x^2$ và $y=2x$ thoả mãn $x^2=2x$, tức là $x(x-2)=0$, suy ra $x=0$ hoặc $x=2$.

Trên $[0; 2]$ ta có $2x\ge x^2$ (chẳng hạn tại $x=1$: $2>1$), nên đường thẳng $y=2x$ nằm phía trên parabol $y=x^2$.

Diện tích miền giữa hai đồ thị là
$$S=\int_0^2\left(2x-x^2\right)dx=\left.\left(x^2-\frac{x^3}{3}\right)\right|_0^2=4-\frac83=\frac43.$$

Vậy diện tích miền giữa $y=x^2$ và $y=2x$ bằng $\dfrac43$.

**Đáp số.** $\dfrac43$.
:::

:::exercise Trắc nghiệm
Miền dưới $y=x$ với $0\le x\le3$ quay quanh trục $x$. Thể tích khối tạo thành bằng
A. $3\pi$
B. $\dfrac{9\pi}{2}$
C. $27\pi$
D. $9\pi$

::hint
**Cần nhớ:** các đĩa có bán kính $x$.

::solution
Khi quay miền dưới $y=x$ với $0\le x\le3$ quanh trục $x$, mỗi thiết diện vuông góc với trục $x$ là một hình tròn bán kính $x$. Áp dụng công thức thể tích tròn xoay (phương pháp đĩa), ta có
$$V=\pi\int_0^3x^2\,dx=\pi\left.\frac{x^3}{3}\right|_0^3=\pi\cdot\frac{27}{3}=9\pi.$$

Vậy chọn **D**.

*Nhận xét.* Khối tạo thành là hình nón có bán kính đáy $3$ và chiều cao $3$, nên thể tích là $\dfrac13\pi\cdot3^2\cdot3=9\pi$, khớp với kết quả trên.

**Đáp số.** D.
:::

:::exercise Tự luận
Đáy của một khối là miền dưới $y=e^x$ với $0\le x\le1$. Các thiết diện vuông góc với trục $x$ là hình vuông. Tính thể tích, cho giá trị đúng và giá trị làm tròn đến ba chữ số thập phân.

::hint
**Cần nhớ:** $A(x)=\left(e^x\right)^2=e^{2x}$.

::solution
Tại điểm có hoành độ $x$ ($0\le x\le1$), thiết diện vuông góc với trục $x$ là hình vuông có cạnh bằng chiều cao của miền, tức là $y=e^x$. Diện tích thiết diện là
$$A(x)=\left(e^x\right)^2=e^{2x}.$$

Thể tích khối là
$$V=\int_0^1A(x)\,dx=\int_0^1e^{2x}\,dx=\left.\frac{e^{2x}}{2}\right|_0^1=\frac{e^2-1}{2}.$$

Dùng $e^2\approx7{,}3891$, ta được $V\approx\dfrac{6{,}3891}{2}\approx3{,}195$.

Vậy thể tích khối bằng $\dfrac{e^2-1}{2}\approx3{,}195$.

**Đáp số.** $\dfrac{e^2-1}{2}\approx3{,}195$.
:::

## Bài tập vận dụng

:::exercise Một câu về miền đầy đủ kiểu đề AP
Gọi $R$ là miền giới hạn bởi $y=\sqrt x$, trục hoành và đường thẳng $x=4$.
a) Tính diện tích của $R$.
b) Tính thể tích khối tạo thành khi quay $R$ quanh đường thẳng $y=-1$.
c) Đường thẳng đứng $x=k$ chia $R$ thành hai miền có diện tích bằng nhau. Tìm $k$.

::hint
**Cần nhớ:** vành khuyên với $R=\sqrt x+1$ và $r=1$; câu c) cho diện tích từ $0$ đến $k$ bằng một nửa tổng diện tích.

**Các bước:**
1. Diện tích $=\displaystyle\int_0^4\sqrt x\,dx$.
2. $(\sqrt x+1)^2-1=x+2\sqrt x$.
3. $\dfrac23k^{3/2}=\dfrac83$.

::solution
Miền $R$ nằm giữa trục hoành và đường cong $y=\sqrt x$ với $0\le x\le4$.

a) Diện tích của $R$ là
$$S=\int_0^4\sqrt x\,dx=\left.\frac23x^{3/2}\right|_0^4=\frac23\cdot8=\frac{16}{3}.$$

b) Khi quay $R$ quanh đường thẳng $y=-1$, mỗi thiết diện vuông góc với trục $x$ là một hình vành khuyên có bán kính ngoài $\sqrt x-(-1)=\sqrt x+1$ và bán kính trong $0-(-1)=1$. Thể tích là
$$V=\pi\int_0^4\left[\left(\sqrt x+1\right)^2-1^2\right]dx=\pi\int_0^4\left(x+2\sqrt x\right)dx=\pi\left.\left(\frac{x^2}{2}+\frac43x^{3/2}\right)\right|_0^4=\pi\left(8+\frac{32}{3}\right)=\frac{56\pi}{3}.$$

c) Diện tích phần của $R$ nằm bên trái đường thẳng $x=k$ ($0<k<4$) là $\displaystyle\int_0^k\sqrt x\,dx=\dfrac23k^{3/2}$. Hai miền có diện tích bằng nhau khi diện tích này bằng một nửa diện tích của $R$:
$$\frac23k^{3/2}=\frac12\cdot\frac{16}{3}=\frac83\iff k^{3/2}=4\iff k=4^{2/3}\approx2{,}520.$$
Giá trị này thoả mãn $0<k<4$.

Vậy diện tích của $R$ bằng $\dfrac{16}{3}$; thể tích khối tròn xoay bằng $\dfrac{56\pi}{3}$; và $k=4^{2/3}\approx2{,}520$.

**Đáp số.** a) $\dfrac{16}{3}$; b) $\dfrac{56\pi}{3}$; c) $k=4^{2/3}\approx2{,}520$.
:::

:::exercise Nhiệt độ trung bình
Nhiệt độ ở một thành phố được mô hình hoá bởi $T(t)=20+6\sin\left(\dfrac{\pi t}{12}\right)$ độ C, với $t$ là số giờ tính từ 6 giờ sáng. Tìm nhiệt độ trung bình trong cả ngày ($0\le t\le24$) và trong $12$ giờ đầu.

::hint
**Cần nhớ:** $\displaystyle\int_0^{12}\sin\left(\frac{\pi t}{12}\right)dt=\frac{24}{\pi}$; trên trọn một chu kì, trung bình của hàm sin bằng $0$.

::solution
Nhiệt độ trung bình trên $[0; b]$ là $\dfrac1b\displaystyle\int_0^bT(t)\,dt$. Một nguyên hàm của $T(t)=20+6\sin\left(\dfrac{\pi t}{12}\right)$ là
$$\int T(t)\,dt=20t-\frac{72}{\pi}\cos\frac{\pi t}{12}.$$

Cả ngày ($b=24$):
$$\int_0^{24}T\,dt=\left[20t-\frac{72}{\pi}\cos\frac{\pi t}{12}\right]_0^{24}=\left(480-\frac{72}{\pi}\right)-\left(0-\frac{72}{\pi}\right)=480.$$
Nhiệt độ trung bình là $\dfrac{480}{24}=20$ độ C.

$12$ giờ đầu ($b=12$):
$$\int_0^{12}T\,dt=\left[20t-\frac{72}{\pi}\cos\frac{\pi t}{12}\right]_0^{12}=\left(240+\frac{72}{\pi}\right)-\left(0-\frac{72}{\pi}\right)=240+\frac{144}{\pi}.$$
Nhiệt độ trung bình là $\dfrac{1}{12}\left(240+\dfrac{144}{\pi}\right)=20+\dfrac{12}{\pi}\approx23{,}820$ độ C.

Vậy nhiệt độ trung bình trong cả ngày là $20$ độ C, và trong $12$ giờ đầu là $20+\dfrac{12}{\pi}\approx23{,}820$ độ C.

**Đáp số.** Cả ngày: $20$ độ C; $12$ giờ đầu: $20+\dfrac{12}{\pi}\approx23{,}820$ độ C.
:::

:::exercise Chọn biến lấy tích phân
Tính diện tích miền giới hạn bởi $x=y^2$ và đường thẳng $x=4$ bằng cách lấy tích phân theo $y$.

::hint
**Cần nhớ:** $y$ chạy từ $-2$ đến $2$; đường bên phải là $x=4$, bên trái là $x=y^2$.

::solution
Giao điểm của $x=y^2$ và $x=4$ thoả mãn $y^2=4$, suy ra $y=-2$ hoặc $y=2$. Trên $[-2; 2]$ ta có $y^2\le4$, nên đường thẳng $x=4$ nằm bên phải parabol $x=y^2$.

Lấy tích phân theo $y$, diện tích miền là
$$S=\int_{-2}^{2}\left(4-y^2\right)dy=\left.\left(4y-\frac{y^3}{3}\right)\right|_{-2}^{2}=\left(8-\frac83\right)-\left(-8+\frac83\right)=16-\frac{16}{3}=\frac{32}{3}.$$

Vậy diện tích miền giới hạn bởi $x=y^2$ và đường thẳng $x=4$ bằng $\dfrac{32}{3}$.

*Nhận xét.* Đáp số trùng với bài về parabol $y=4-x^2$ ở trên: đó chính là cùng một hình, chỉ xoay nằm ngang.

**Đáp số.** $\dfrac{32}{3}$.
:::

:::exercise BC: độ dài cung bằng máy tính
Thiết lập và tính độ dài của $y=\ln(\cos x)$ với $0\le x\le\dfrac{\pi}{4}$.

::hint
**Cần nhớ:** $f'(x)=-\tan x$, và $1+\tan^2x=\sec^2x$.

::solution
Công thức độ dài đường cong $y=f(x)$ với $a\le x\le b$ là $L=\displaystyle\int_a^b\sqrt{1+\left(y'\right)^2}\,dx$.

Với $y=\ln(\cos x)$, ta có $\cos x>0$ trên $\left[0; \dfrac\pi4\right]$ nên hàm số xác định, và
$$y'=\frac{-\sin x}{\cos x}=-\tan x.$$

Do đó
$$L=\int_0^{\pi/4}\sqrt{1+\tan^2x}\,dx=\int_0^{\pi/4}\sqrt{\sec^2x}\,dx=\int_0^{\pi/4}\sec x\,dx,$$
vì $1+\tan^2x=\sec^2x$ và $\sec x>0$ trên $\left[0; \dfrac\pi4\right]$.

Một nguyên hàm của $\sec x$ là $\ln|\sec x+\tan x|$, nên
$$L=\Big[\ln|\sec x+\tan x|\Big]_0^{\pi/4}=\ln\left(\sqrt2+1\right)-\ln1=\ln\left(\sqrt2+1\right)\approx0{,}881.$$

Vậy độ dài của đường cong là $L=\ln\left(\sqrt2+1\right)\approx0{,}881$.

*Mẹo thi.* Ở phần được dùng máy tính, chỉ cần viết tích phân $\displaystyle\int_0^{\pi/4}\sqrt{1+\tan^2x}\,dx$ kèm cận và giá trị $0{,}881$.

**Đáp số.** $\ln\left(\sqrt2+1\right)\approx0{,}881$.
:::

:::quiz
::mc TH
Giá trị trung bình của $f(x)=2x+1$ trên $[0,4]$ bằng
A. $9$
B. $20$
C. $5$
D. $4$
::key C
$\dfrac14\displaystyle\int_0^4(2x+1)\,dx=\dfrac14\cdot20=5$.

::mc VD
Diện tích miền giữa $y=x$ và $y=x^3$ với $0\le x\le1$ bằng
A. $\dfrac14$
B. $\dfrac12$
C. $\dfrac34$
D. $\dfrac{1}{12}$
::key A
$\displaystyle\int_0^1\left(x-x^3\right)dx=\frac12-\frac14=\frac14$.

::mc VD
Miền dưới $y=x^2$ với $0\le x\le1$ quay quanh trục $x$. Thể tích khối tạo thành bằng
A. $\dfrac{\pi}{3}$
B. $\dfrac{\pi}{2}$
C. $\dfrac15$
D. $\dfrac{\pi}{5}$
::key D
$\pi\displaystyle\int_0^1x^4\,dx=\dfrac{\pi}{5}$. Phương án C quên $\pi$.

::mc VD
Đáy của một khối là miền dưới $y=2-x$ với $0\le x\le2$. Các thiết diện vuông góc với trục $x$ là hình vuông. Thể tích khối bằng
A. $2$
B. $\dfrac83$
C. $4$
D. $\dfrac43$
::key B
$\displaystyle\int_0^2(2-x)^2\,dx=\frac83$.

::tf VD VD TH VD
Gọi $R$ là miền giữa $y=\sqrt x$ và $y=x$ với $0\le x\le1$.
a) Diện tích của $R$ bằng $\dfrac16$.
b) Quay $R$ quanh trục $x$ được khối có thể tích $\dfrac{\pi}{6}$.
c) Thể tích đó bằng $\pi\displaystyle\int_0^1\left(\sqrt x-x\right)^2dx$.
d) Giá trị trung bình của $\sqrt x$ trên $[0,1]$ bằng $\dfrac12$.
::key T T F F
a) Đúng: $\dfrac23-\dfrac12$. b) Đúng: $\pi\displaystyle\int_0^1\left(x-x^2\right)dx=\dfrac{\pi}{6}$. c) Sai: vành khuyên dùng $R^2-r^2$, không phải $(R-r)^2$. d) Sai: giá trị đó bằng $\dfrac23$.

::sa VD
Tính diện tích miền giới hạn bởi $y=9-x^2$ và trục hoành.
::key 36
$\displaystyle\int_{-3}^3\left(9-x^2\right)dx=54-18=36$.

::sa TH
Tìm giá trị trung bình của $f(x)=3x^2$ trên $[0,2]$.
::key 4
$\dfrac12\displaystyle\int_0^23x^2\,dx=\dfrac12\cdot8=4$.
:::
