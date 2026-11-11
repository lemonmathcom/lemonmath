---
title: Giải tích: đạo hàm, tích phân, động học
description: IB Math AA chủ đề 5: đạo hàm, tiếp tuyến và pháp tuyến, điểm dừng, tối ưu, tích phân, diện tích và động học, theo kiểu câu hỏi Paper 1 và Paper 2.
minutes: 50
---

:::goals
- Lấy đạo hàm bằng quy tắc hàm hợp, quy tắc tích và quy tắc thương.
- Viết phương trình tiếp tuyến và pháp tuyến.
- Tìm và phân loại điểm dừng, giải bài toán tối ưu.
- Tìm nguyên hàm các hàm cơ bản, tính tích phân xác định và diện tích.
- Giải bài toán động học: độ dời, vận tốc, gia tốc và quãng đường.
:::

Giải tích chiếm nhiều điểm nhất trong IB Math AA, và thường là nội dung của các câu dài ở Section B. Một câu điển hình bắt đầu bằng một hàm số, hỏi đạo hàm và điểm dừng, rồi đến một diện tích hay thể tích, và thường kết thúc bằng một bối cảnh như chuyển động hay tối ưu. Các quy tắc có trong sổ công thức; điểm số đến từ biến đổi đại số chính xác ở Paper 1 và thiết lập rõ ràng ở Paper 2.

## Các quy tắc tính đạo hàm

$$\frac{d}{dx}\big(f(g(x))\big)=f'(g(x))g'(x),\qquad(uv)'=u'v+uv',\qquad\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}.$$
Đạo hàm cơ bản: $\left(x^n\right)'=nx^{n-1}$, $\left(e^x\right)'=e^x$, $(\ln x)'=\dfrac1x$, $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $(\tan x)'=\dfrac{1}{\cos^2x}$.

:::example Quy tắc thương
Cho $g(x)=\dfrac{\ln x}{x}$, $x>0$.
(a) Chứng minh $g'(x)=\dfrac{1-\ln x}{x^2}$. [3 marks]
(b) Từ đó tìm toạ độ điểm cực đại của $g$. [3 marks]

**Lời giải.** (a) $g'(x)=\dfrac{\frac1x\cdot x-\ln x\cdot1}{x^2}=\dfrac{1-\ln x}{x^2}$.

(b) $g'(x)=0$ khi $\ln x=1$, tức $x=e$, và $g(e)=\dfrac1e$. Điểm cực đại là $\left(e,\dfrac1e\right)$; $g'$ đổi dấu từ dương sang âm tại $x=e$.
:::

## Tiếp tuyến và pháp tuyến

Tại $x=a$, tiếp tuyến có hệ số góc $f'(a)$, còn **pháp tuyến (normal)** vuông góc với nó, có hệ số góc $-\dfrac{1}{f'(a)}$. Cả hai đi qua $\big(a,f(a)\big)$.

:::example Tiếp tuyến và pháp tuyến
Viết phương trình tiếp tuyến và pháp tuyến của $y=x^3-2x$ tại $x=1$. [5 marks]

**Lời giải.** Tại $x=1$: $y=-1$ và $\dfrac{dy}{dx}=3x^2-2=1$.

Tiếp tuyến: $y+1=1(x-1)$, tức $y=x-2$. Pháp tuyến: hệ số góc $-1$, nên $y+1=-(x-1)$, tức $y=-x$.
:::

## Điểm dừng và bài toán tối ưu

Điểm dừng (stationary point) thoả mãn $f'(x)=0$. Phân loại bằng dấu của $f'$ ở hai bên, hoặc bằng đạo hàm cấp hai: $f''(a)>0$ cho cực tiểu, $f''(a)<0$ cho cực đại. **Điểm uốn (point of inflection)** là nơi tính lồi lõm thay đổi, tức nơi $f''$ đổi dấu.

:::example Điểm dừng của hàm bậc ba
Cho $f(x)=x^3-3x^2-9x+2$. Tìm toạ độ các điểm dừng và xác định tính chất của chúng. [6 marks]

**Lời giải.** $f'(x)=3x^2-6x-9=3(x-3)(x+1)=0$ tại $x=-1$ và $x=3$. $f''(x)=6x-6$.

$f''(-1)=-12<0$: cực đại tại $(-1,7)$. $f''(3)=12>0$: cực tiểu tại $(3,-25)$.
:::

:::example Chiếc hộp không nắp
Cắt bốn hình vuông cạnh $x$ cm ở bốn góc một tấm bìa $12$ cm × $12$ cm, rồi gấp lên thành một chiếc hộp không nắp.
(a) Chứng minh thể tích hộp là $V=x(12-2x)^2$. [2 marks]
(b) Tìm $x$ để $V$ lớn nhất, và tính thể tích lớn nhất. [5 marks]

**Lời giải.** (a) Đáy là hình vuông cạnh $(12-2x)$ và chiều cao là $x$.

(b) $V'=(12-2x)^2+x\cdot2(12-2x)(-2)=(12-2x)(12-6x)$. Trên miền $0<x<6$, $V'=0$ tại $x=2$. $V'$ đổi dấu từ dương sang âm tại đó, nên thể tích lớn nhất là $V(2)=2\cdot8^2=128$ cm³.
:::

## Tích phân và diện tích

$$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\ (n\ne-1),\quad\int\frac1x\,dx=\ln|x|+C,\quad\int e^x\,dx=e^x+C,$$
$$\int\cos x\,dx=\sin x+C,\quad\int\sin x\,dx=-\cos x+C.$$
Diện tích giữa đường cong và trục $x$ là $\displaystyle\int_a^b|y|\,dx$; giữa hai đường cong, lấy tích phân của (trên $-$ dưới).

:::example Diện tích dưới parabol
Tính diện tích miền giới hạn bởi $y=4x-x^2$ và trục $x$. [4 marks]

**Lời giải.** Đường cong cắt trục tại $x=0$ và $x=4$.
$$\int_0^4\left(4x-x^2\right)dx=\left[2x^2-\frac{x^3}{3}\right]_0^4=32-\frac{64}{3}=\frac{32}{3}.$$
:::

## Động học

Với một hạt chuyển động thẳng: $v=\dfrac{ds}{dt}$ và $a=\dfrac{dv}{dt}$. Độ dời từ $t_1$ đến $t_2$ là $\displaystyle\int_{t_1}^{t_2}v\,dt$, còn **quãng đường (distance traveled)** là $\displaystyle\int_{t_1}^{t_2}|v|\,dt$; ở Paper 2, GDC tính trực tiếp tích phân của $|v|$.

:::example Độ dời và quãng đường
Một hạt chuyển động với vận tốc $v(t)=6t-3t^2$ m s⁻¹, $0\le t\le3$.
(a) Tính gia tốc tại $t=1$. [2 marks]
(b) Tính độ dời từ $t=0$ đến $t=3$. [2 marks]
(c) Tính quãng đường đi được từ $t=0$ đến $t=3$. [3 marks]

**Lời giải.** (a) $a(t)=6-6t$, nên $a(1)=0$ m s⁻².

(b) $\displaystyle\int_0^3\left(6t-3t^2\right)dt=\left[3t^2-t^3\right]_0^3=27-27=0$ m: hạt trở về đúng chỗ xuất phát.

(c) $v$ đổi dấu tại $t=2$. $\displaystyle\int_0^2v\,dt=12-8=4$ và $\displaystyle\int_2^3v\,dt=0-4=-4$, nên quãng đường là $4+4=8$ m.
:::

:::warning Những cái bẫy thường gặp
- **Quên quy tắc hàm hợp**, ví dụ $\dfrac{d}{dx}e^{3x}=3e^{3x}$.
- **Hệ số góc pháp tuyến.** Là $-\dfrac{1}{m}$, không phải $-m$ hay $\dfrac1m$.
- **Quên miền xác định** trong bài toán tối ưu: loại các nghiệm như $x=6$ cho hộp có thể tích $0$.
- **Diện tích âm.** Tích phân âm ở chỗ đường cong nằm dưới trục; hãy tách tích phân khi tính diện tích hay quãng đường.
- **Không giải thích tính chất** của điểm dừng khi đề yêu cầu "determine" hay "justify".
- **Chế độ radian** trên GDC khi làm giải tích với hàm lượng giác.
:::

:::terms
- chain rule, product rule, quotient rule | quy tắc hàm hợp, quy tắc tích, quy tắc thương
- gradient, tangent, normal | hệ số góc, tiếp tuyến, pháp tuyến
- stationary point, point of inflection | điểm dừng, điểm uốn
- second derivative test | dấu hiệu đạo hàm cấp hai
- optimization | bài toán tối ưu
- definite integral, area | tích phân xác định, diện tích
- displacement, velocity, acceleration | độ dời, vận tốc, gia tốc
- distance traveled | quãng đường đi được
:::

## Bài tập tương tự

:::exercise Quy tắc thương
Cho $f(x)=\dfrac{e^x}{x+1}$, $x\ne-1$. Chứng minh $f'(x)=\dfrac{xe^x}{(x+1)^2}$. [3 marks]

::hint
**Cần nhớ:** $u=e^x$, $v=x+1$.

::solution
$f'(x)=\dfrac{e^x(x+1)-e^x\cdot1}{(x+1)^2}=\dfrac{xe^x}{(x+1)^2}$.
:::

:::exercise Tiếp tuyến của hàm logarit
Viết phương trình tiếp tuyến của $y=\ln(2x)$ tại $x=\dfrac12$. [4 marks]

::hint
**Cần nhớ:** $\dfrac{d}{dx}\ln(2x)=\dfrac{2}{2x}=\dfrac1x$, và tiếp điểm $\left(\dfrac12,0\right)$.

::solution
Hệ số góc bằng $2$, nên $y=2\left(x-\dfrac12\right)=2x-1$.
:::

:::exercise Điểm dừng không phải cực trị
Cho $f(x)=x^4-4x^3$. Tìm các điểm dừng và xác định tính chất của chúng. [6 marks]

::hint
**Cần nhớ:** $f'(x)=4x^2(x-3)$; xét dấu $f'$ ở hai bên mỗi điểm.

::solution
$f'(x)=0$ tại $x=0$ và $x=3$. Quanh $x=0$, $f'$ âm ở cả hai bên: điểm uốn có tiếp tuyến nằm ngang tại $(0,0)$. Quanh $x=3$, $f'$ đổi dấu từ âm sang dương: cực tiểu tại $(3,-27)$.
:::

:::exercise Một tích phân xác định
Tính $\displaystyle\int_1^4\left(3\sqrt x-1\right)dx$. [4 marks]

::hint
**Cần nhớ:** $\displaystyle\int3x^{1/2}\,dx=2x^{3/2}$.

::solution
$\left[2x^{3/2}-x\right]_1^4=(16-4)-(2-1)=11$.
:::

:::exercise Từ gia tốc đến vận tốc
Một hạt có gia tốc $a(t)=6t$ m s⁻² và vận tốc ban đầu $-3$ m s⁻¹. Tìm thời điểm hạt dừng lại. [4 marks]

::hint
**Cần nhớ:** $v(t)=\displaystyle\int6t\,dt=3t^2+C$ với $v(0)=-3$.

::solution
$v(t)=3t^2-3=0$ tại $t=1$ s ($t\ge0$).
:::

## Bài tập vận dụng

:::exercise Rào vườn sát tường
Một người nông dân có $40$ m hàng rào để rào một khu đất hình chữ nhật sát một bức tường dài, bức tường làm một cạnh. Tìm diện tích lớn nhất. [5 marks]

::hint
**Cần nhớ:** nếu hai cạnh vuông góc với tường dài $x$ thì $A=x(40-2x)$.

::solution
$A'=40-4x=0$ tại $x=10$, và $A''=-4<0$. Diện tích lớn nhất là $10\cdot20=200$ m².
:::

:::exercise Lon ít tốn vật liệu nhất
Một lon hình trụ có nắp, thể tích $500$ cm³. Tìm bán kính để diện tích toàn phần nhỏ nhất, và tính diện tích nhỏ nhất đó. [6 marks]

::hint
**Cần nhớ:** $\pi r^2h=500$ cho $h=\dfrac{500}{\pi r^2}$, nên $S=2\pi r^2+\dfrac{1000}{r}$.

**Các bước:**
1. $S'=4\pi r-\dfrac{1000}{r^2}=0$.
2. Ở Paper 2, kiểm tra cực tiểu trên đồ thị của $S$.

::solution
$r^3=\dfrac{250}{\pi}$, nên $r\approx4{,}30$ cm, và $S\approx349$ cm².
:::

:::exercise Giữa sin và cos
Tính diện tích miền giới hạn bởi $y=\sin x$ và $y=\cos x$ với $\dfrac\pi4\le x\le\dfrac{5\pi}{4}$. [5 marks]

::hint
**Cần nhớ:** trên khoảng này $\sin x\ge\cos x$; hai đường cắt nhau tại hai đầu mút.

::solution
$\displaystyle\int_{\pi/4}^{5\pi/4}(\sin x-\cos x)\,dx=\Big[-\cos x-\sin x\Big]_{\pi/4}^{5\pi/4}=\sqrt2-\left(-\sqrt2\right)=2\sqrt2$.
:::

:::exercise Động học ở Paper 2
Một hạt có vận tốc $v(t)=e^{0{,}5t}\cos t$ m s⁻¹, $0\le t\le4$. Tính độ dời và quãng đường đi được. [4 marks]

::hint
**Cần nhớ:** $\displaystyle\int_0^4v\,dt$ và $\displaystyle\int_0^4|v|\,dt$ trên GDC.

::solution
Độ dời $\approx-6{,}81$ m; quãng đường $\approx9{,}51$ m. Hạt đổi chiều tại $t=\dfrac\pi2$.
:::

:::quiz
::mc
Hệ số góc của $y=e^{2x}$ tại $x=0$ bằng
A. $1$
B. $e^2$
C. $2$
D. $0$
::key C
$\dfrac{dy}{dx}=2e^{2x}$, bằng $2$ tại $x=0$.

::mc
Tích phân $\displaystyle\int_0^13x^2\,dx$ bằng
A. $1$
B. $3$
C. $6$
D. $\dfrac13$
::key A
$\left[x^3\right]_0^1=1$.

::mc
Hệ số góc của pháp tuyến với $y=x^2$ tại $x=1$ bằng
A. $2$
B. $-2$
C. $\dfrac12$
D. $-\dfrac12$
::key D
Tiếp tuyến có hệ số góc $2$, nên pháp tuyến có hệ số góc $-\dfrac12$.

::mc
Nếu $f'(x)=2x-4$ thì $f$ nghịch biến trên khoảng nào?
A. $x>2$
B. $x<2$
C. $x<-2$
D. $x>4$
::key B
$f'(x)<0$ khi $x<2$.

::tf
Cho $f(x)=x^3-3x$.
a) $f'(1)=0$.
b) $f$ đạt cực tiểu tại $x=1$.
c) $f''(x)=6x$.
d) $f$ đồng biến trên $-1<x<1$.
::key T T T F
a) Đúng: $f'(x)=3x^2-3$. b) Đúng: $f''(1)=6>0$. c) Đúng. d) Sai: ở đó $f'(x)<0$.

::sa
Tính $\displaystyle\int_1^32x\,dx$.
::key 8
$\left[x^2\right]_1^3=9-1$.

::sa
Tìm giá trị lớn nhất của $f(x)=6x-x^2$.
::key 9
$f'(x)=6-2x=0$ tại $x=3$, và $f(3)=9$.
:::
