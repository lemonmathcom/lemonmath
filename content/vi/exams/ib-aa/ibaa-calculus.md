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

Một chiếc xe đang tăng tốc, một chiếc hộp cần chứa được nhiều nhất, một mảnh vườn cần biết diện tích: cả ba đều hỏi cùng một điều, đó là cái gì đang thay đổi và thay đổi nhanh đến đâu. Giải tích là công cụ để trả lời. Giải tích chiếm nhiều điểm nhất trong IB Math AA, và thường là nội dung của các câu dài ở Section B. Một câu điển hình bắt đầu bằng một hàm số, hỏi đạo hàm và điểm dừng, rồi đến một diện tích hay thể tích, và thường kết thúc bằng một bối cảnh như chuyển động hay tối ưu. Các quy tắc có trong sổ công thức, nên điều cần luyện là cách dùng chúng: điểm số đến từ biến đổi đại số chính xác ở Paper 1 và thiết lập rõ ràng ở Paper 2.

## Các quy tắc tính đạo hàm

$$\frac{d}{dx}\big(f(g(x))\big)=f'(g(x))g'(x),\qquad(uv)'=u'v+uv',\qquad\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}.$$
Ba quy tắc trên cho ta cách ghép các hàm lại với nhau. Còn đây là đạo hàm của từng hàm cơ bản: $\left(x^n\right)'=nx^{n-1}$, $\left(e^x\right)'=e^x$, $(\ln x)'=\dfrac1x$, $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $(\tan x)'=\dfrac{1}{\cos^2x}$. Thử xem quy tắc thương làm việc thế nào với một hàm quen thuộc.

:::example Quy tắc thương
Cho $g(x)=\dfrac{\ln x}{x}$, $x>0$.
(a) Chứng minh $g'(x)=\dfrac{1-\ln x}{x^2}$. [3 marks]
(b) Từ đó tìm toạ độ điểm cực đại của $g$. [3 marks]

**Lời giải.** (a) $g'(x)=\dfrac{\frac1x\cdot x-\ln x\cdot1}{x^2}=\dfrac{1-\ln x}{x^2}$.

(b) $g'(x)=0$ khi $\ln x=1$, tức $x=e$, và $g(e)=\dfrac1e$. Điểm cực đại là $\left(e,\dfrac1e\right)$; $g'$ đổi dấu từ dương sang âm tại $x=e$.
:::

## Tiếp tuyến và pháp tuyến

Đạo hàm cho ta độ dốc của đường cong tại từng điểm, và độ dốc ấy vẽ được thành một đường thẳng. Tại $x=a$, tiếp tuyến có hệ số góc $f'(a)$, còn **pháp tuyến (normal)** vuông góc với nó, có hệ số góc $-\dfrac{1}{f'(a)}$. Cả hai đi qua điểm $\big(a,f(a)\big)$, nên chỉ cần có hệ số góc là ta viết được phương trình. Ví dụ dưới đây làm cả hai việc.

:::example Tiếp tuyến và pháp tuyến
Viết phương trình tiếp tuyến và pháp tuyến của $y=x^3-2x$ tại $x=1$. [5 marks]

**Lời giải.** Tại $x=1$: $y=-1$ và $\dfrac{dy}{dx}=3x^2-2=1$.

Tiếp tuyến: $y+1=1(x-1)$, tức $y=x-2$. Pháp tuyến: hệ số góc $-1$, nên $y+1=-(x-1)$, tức $y=-x$.
:::

## Điểm dừng và bài toán tối ưu

Đứng trên đỉnh đồi thì đường không lên cũng không xuống. Đồ thị cũng vậy: ở chỗ tiếp tuyến nằm ngang, đạo hàm bằng không. Những điểm như thế gọi là điểm dừng (stationary point), thoả mãn $f'(x)=0$. Điểm dừng có thể là đỉnh hay đáy; để biết, ta phân loại bằng dấu của $f'$ ở hai bên, hoặc bằng đạo hàm cấp hai: $f''(a)>0$ cho cực tiểu, $f''(a)<0$ cho cực đại. **Điểm uốn (point of inflection)** thì khác: đó là nơi tính lồi lõm thay đổi, tức nơi $f''$ đổi dấu.

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
Tích phân làm ngược lại với đạo hàm, và nó cho ta một thứ rất hữu ích là diện tích. Diện tích giữa đường cong và trục $x$ là $\displaystyle\int_a^b|y|\,dx$. Dấu giá trị tuyệt đối ở đây có lí do: phần đường cong nằm dưới trục cho tích phân âm, mà diện tích thì không âm. Còn giữa hai đường cong, ta lấy tích phân của (trên $-$ dưới).

:::example Diện tích dưới parabol
Tính diện tích miền giới hạn bởi $y=4x-x^2$ và trục $x$. [4 marks]

**Lời giải.** Đường cong cắt trục tại $x=0$ và $x=4$.
$$\int_0^4\left(4x-x^2\right)dx=\left[2x^2-\frac{x^3}{3}\right]_0^4=32-\frac{64}{3}=\frac{32}{3}.$$
:::

## Động học

Một hạt đi ra rồi quay về chỗ cũ: nó đã đi xa bao nhiêu, và cuối cùng cách chỗ xuất phát bao nhiêu? Hai câu hỏi ấy có thể cho hai đáp số khác nhau. Với một hạt chuyển động thẳng: $v=\dfrac{ds}{dt}$ và $a=\dfrac{dv}{dt}$. Độ dời từ $t_1$ đến $t_2$ là $\displaystyle\int_{t_1}^{t_2}v\,dt$, còn **quãng đường (distance traveled)** là $\displaystyle\int_{t_1}^{t_2}|v|\,dt$. Chỗ này nhiều bạn hay nhầm hai đại lượng với nhau. Ở Paper 2, GDC tính trực tiếp tích phân của $|v|$.

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
- **Quên miền xác định** trong bài toán tối ưu: hãy loại các nghiệm như $x=6$ cho hộp có thể tích $0$.
- **Diện tích âm.** Tích phân âm ở chỗ đường cong nằm dưới trục; hãy tách tích phân khi tính diện tích hay quãng đường.
- **Không giải thích tính chất** của điểm dừng khi đề yêu cầu "determine" hay "justify".
- **Chế độ radian** trên GDC khi làm giải tích với hàm lượng giác.
Đừng lo nếu lần đầu bạn vướng vài chỗ trong danh sách này. Hãy giữ câu hỏi ta bắt đầu bài: cái gì đang thay đổi, và thay đổi nhanh đến đâu? Các bài tập bên dưới là chỗ để bạn luyện điều đó.
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
Điều kiện xác định: $x\ne-1$.

Áp dụng quy tắc đạo hàm của một thương $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$ với $u=e^x$ và $v=x+1$. Ta có $u'=e^x$ và $v'=1$.

Do đó
$$f'(x)=\frac{e^x(x+1)-e^x\cdot1}{(x+1)^2}.$$

Rút gọn tử số: $e^x(x+1)-e^x=xe^x+e^x-e^x=xe^x$. Suy ra
$$f'(x)=\frac{xe^x}{(x+1)^2}.$$

Vậy $f'(x)=\dfrac{xe^x}{(x+1)^2}$ với $x\ne-1$.

**Đáp số.** $f'(x)=\dfrac{xe^x}{(x+1)^2}$.
:::

:::exercise Tiếp tuyến của hàm logarit
Viết phương trình tiếp tuyến của $y=\ln(2x)$ tại $x=\dfrac12$. [4 marks]

::hint
**Cần nhớ:** $\dfrac{d}{dx}\ln(2x)=\dfrac{2}{2x}=\dfrac1x$, và tiếp điểm $\left(\dfrac12,0\right)$.

::solution
Điều kiện xác định: $2x>0$, tức là $x>0$. Giá trị $x=\dfrac12$ thoả mãn điều kiện.

Tung độ của tiếp điểm là $y\left(\dfrac12\right)=\ln\left(2\cdot\dfrac12\right)=\ln1=0$, nên tiếp điểm là $\left(\dfrac12; 0\right)$.

Ta có
$$y'=\frac{(2x)'}{2x}=\frac{2}{2x}=\frac1x.$$

Suy ra hệ số góc của tiếp tuyến là $y'\left(\dfrac12\right)=2$.

Áp dụng phương trình tiếp tuyến $y=y'(x_0)(x-x_0)+y_0$ với $x_0=\dfrac12$, $y_0=0$, ta được
$$y=2\left(x-\frac12\right)+0=2x-1.$$

Vậy tiếp tuyến của đồ thị tại $x=\dfrac12$ có phương trình $y=2x-1$.

**Đáp số.** $y=2x-1$.
:::

:::exercise Điểm dừng không phải cực trị
Cho $f(x)=x^4-4x^3$. Tìm các điểm dừng và xác định tính chất của chúng. [6 marks]

::hint
**Cần nhớ:** $f'(x)=4x^2(x-3)$; xét dấu $f'$ ở hai bên mỗi điểm.

::solution
Ta có $f'(x)=4x^3-12x^2=4x^2(x-3)$.

Điểm dừng là điểm có $f'(x)=0$, tức là $4x^2(x-3)=0$, suy ra $x=0$ hoặc $x=3$.

Tính tung độ: $f(0)=0$ và $f(3)=3^4-4\cdot3^3=81-108=-27$.

Vì $4x^2\ge0$ nên dấu của $f'(x)$ là dấu của $x-3$ (khi $x\ne0$). Ta có bảng xét dấu:

| $x$ | $(-\infty; 0)$ | $0$ | $(0; 3)$ | $3$ | $(3; +\infty)$ |
|---|---|---|---|---|---|
| $f'(x)$ | $-$ | $0$ | $-$ | $0$ | $+$ |

Quanh $x=0$, $f'(x)$ âm ở cả hai phía, tức là không đổi dấu: $(0; 0)$ là điểm uốn có tiếp tuyến nằm ngang (không phải cực trị).

Quanh $x=3$, $f'(x)$ đổi dấu từ âm sang dương: $(3; -27)$ là điểm cực tiểu.

Vậy đồ thị có hai điểm dừng: $(0; 0)$ là điểm uốn có tiếp tuyến nằm ngang và $(3; -27)$ là điểm cực tiểu.

**Đáp số.** $(0; 0)$ là điểm uốn có tiếp tuyến nằm ngang; $(3; -27)$ là điểm cực tiểu.
:::

:::exercise Một tích phân xác định
Tính $\displaystyle\int_1^4\left(3\sqrt x-1\right)dx$. [4 marks]

::hint
**Cần nhớ:** $\displaystyle\int3x^{1/2}\,dx=2x^{3/2}$.

::solution
Tìm nguyên hàm của hàm số dưới dấu tích phân. Viết $3\sqrt x=3x^{1/2}$, ta có
$$\int\left(3x^{1/2}-1\right)dx=3\cdot\frac{x^{3/2}}{3/2}-x=2x^{3/2}-x.$$

Áp dụng công thức Newton – Leibniz:
$$\int_1^4\left(3\sqrt x-1\right)dx=\Big[2x^{3/2}-x\Big]_1^4.$$

Thay cận: $4^{3/2}=8$ nên giá trị tại $x=4$ là $2\cdot8-4=12$; giá trị tại $x=1$ là $2\cdot1-1=1$.

Do đó
$$\int_1^4\left(3\sqrt x-1\right)dx=12-1=11.$$

Vậy tích phân đã cho bằng $11$.

**Đáp số.** $11$.
:::

:::exercise Từ gia tốc đến vận tốc
Một hạt có gia tốc $a(t)=6t$ m s⁻² và vận tốc ban đầu $-3$ m s⁻¹. Tìm thời điểm hạt dừng lại. [4 marks]

::hint
**Cần nhớ:** $v(t)=\displaystyle\int6t\,dt=3t^2+C$ với $v(0)=-3$.

::solution
Gọi $v(t)$ (m s⁻¹) là vận tốc của hạt tại thời điểm $t$ (s), $t\ge0$. Ta có $v'(t)=a(t)=6t$.

Lấy nguyên hàm:
$$v(t)=\int6t\,dt=3t^2+C.$$

Vận tốc ban đầu là $v(0)=-3$, nên $3\cdot0^2+C=-3$, suy ra $C=-3$. Do đó $v(t)=3t^2-3$.

Hạt dừng lại khi $v(t)=0$:
$$3t^2-3=0\iff t^2=1\iff t=1\ \text{hoặc}\ t=-1.$$

Vì $t\ge0$ nên chỉ nhận $t=1$.

Vậy hạt dừng lại tại thời điểm $t=1$ giây.

**Đáp số.** $t=1$ s.
:::

## Bài tập vận dụng

:::exercise Rào vườn sát tường
Một người nông dân có $40$ m hàng rào để rào một khu đất hình chữ nhật sát một bức tường dài, bức tường làm một cạnh. Tìm diện tích lớn nhất. [5 marks]

::hint
**Cần nhớ:** nếu hai cạnh vuông góc với tường dài $x$ thì $A=x(40-2x)$.

::solution
Gọi $x$ (m) là độ dài mỗi cạnh của khu đất vuông góc với bức tường. Vì bức tường làm một cạnh nên hàng rào chỉ dùng cho hai cạnh có độ dài $x$ và một cạnh song song với tường.

Cạnh song song với tường dài $40-2x$ (m). Điều kiện: $x>0$ và $40-2x>0$, tức là $0<x<20$.

Diện tích khu đất là
$$A(x)=x(40-2x)=40x-2x^2\ \ (\text{m}^2).$$

Ta có $A'(x)=40-4x$. Giải $A'(x)=0$ được $x=10$ (thoả mãn điều kiện $0<x<20$).

Ta có $A''(x)=-4<0$ nên $A$ đạt cực đại tại $x=10$. Vì $A$ là hàm số bậc hai có hệ số $-2<0$ nên đây cũng là giá trị lớn nhất trên khoảng $(0; 20)$.

Khi $x=10$, cạnh song song với tường dài $40-2\cdot10=20$ m, nên diện tích lớn nhất là $10\cdot20=200$ m².

Vậy diện tích lớn nhất của khu đất là $200$ m².

**Đáp số.** $200$ m².
:::

:::exercise Lon ít tốn vật liệu nhất
Một lon hình trụ có nắp, thể tích $500$ cm³. Tìm bán kính để diện tích toàn phần nhỏ nhất, và tính diện tích nhỏ nhất đó. [6 marks]

::hint
**Cần nhớ:** $\pi r^2h=500$ cho $h=\dfrac{500}{\pi r^2}$, nên $S=2\pi r^2+\dfrac{1000}{r}$.

**Các bước:**
1. $S'=4\pi r-\dfrac{1000}{r^2}=0$.
2. Ở Paper 2, kiểm tra cực tiểu trên đồ thị của $S$.

::solution
Gọi $r$ (cm) là bán kính đáy và $h$ (cm) là chiều cao của lon, $r>0$, $h>0$.

Thể tích lon là $V=\pi r^2h=500$, suy ra
$$h=\frac{500}{\pi r^2}.$$

Diện tích toàn phần (có hai nắp) là $S=2\pi r^2+2\pi rh$. Thay $h$ vào, ta được
$$S(r)=2\pi r^2+2\pi r\cdot\frac{500}{\pi r^2}=2\pi r^2+\frac{1000}{r}.$$

Ta có
$$S'(r)=4\pi r-\frac{1000}{r^2}.$$

Giải $S'(r)=0$: $4\pi r^3=1000$, suy ra $r^3=\dfrac{250}{\pi}$, tức là $r=\sqrt[3]{\dfrac{250}{\pi}}\approx4{,}30$ (thoả mãn $r>0$).

Ta có $S''(r)=4\pi+\dfrac{2000}{r^3}>0$ với mọi $r>0$, nên $S$ đạt cực tiểu tại $r=\sqrt[3]{\dfrac{250}{\pi}}$; đây là điểm cực trị duy nhất trên $(0; +\infty)$ nên cũng là điểm cho diện tích nhỏ nhất.

Thay giá trị chưa làm tròn của $r$ vào $S(r)$:
$$S=2\pi r^2+\frac{1000}{r}\approx116{,}2+232{,}5\approx349\ \text{cm}^2.$$

Vậy bán kính để diện tích toàn phần nhỏ nhất là $r\approx4{,}30$ cm, và diện tích nhỏ nhất là $S\approx349$ cm².

**Đáp số.** $r\approx4{,}30$ cm; $S\approx349$ cm².
:::

:::exercise Giữa sin và cos
Tính diện tích miền giới hạn bởi $y=\sin x$ và $y=\cos x$ với $\dfrac\pi4\le x\le\dfrac{5\pi}{4}$. [5 marks]

::hint
**Cần nhớ:** trên khoảng này $\sin x\ge\cos x$; hai đường cắt nhau tại hai đầu mút.

::solution
Hoành độ giao điểm của hai đồ thị thoả mãn $\sin x=\cos x$. Trên đoạn $\left[\dfrac\pi4; \dfrac{5\pi}{4}\right]$, các giá trị này là $x=\dfrac\pi4$ và $x=\dfrac{5\pi}{4}$, đúng bằng hai cận của đề bài.

Xét dấu của hiệu: $\sin x-\cos x=\sqrt2\sin\left(x-\dfrac\pi4\right)$. Với $\dfrac\pi4\le x\le\dfrac{5\pi}{4}$ ta có $0\le x-\dfrac\pi4\le\pi$, nên $\sin\left(x-\dfrac\pi4\right)\ge0$. Do đó $\sin x\ge\cos x$ trên đoạn này.

Diện tích miền cần tìm là
$$A=\int_{\pi/4}^{5\pi/4}(\sin x-\cos x)\,dx=\Big[-\cos x-\sin x\Big]_{\pi/4}^{5\pi/4}.$$

Tính giá trị tại hai cận:
- tại $x=\dfrac{5\pi}{4}$: $-\cos\dfrac{5\pi}{4}-\sin\dfrac{5\pi}{4}=\dfrac{\sqrt2}{2}+\dfrac{\sqrt2}{2}=\sqrt2$;
- tại $x=\dfrac\pi4$: $-\cos\dfrac\pi4-\sin\dfrac\pi4=-\dfrac{\sqrt2}{2}-\dfrac{\sqrt2}{2}=-\sqrt2$.

Do đó
$$A=\sqrt2-\left(-\sqrt2\right)=2\sqrt2.$$

Vậy diện tích miền giới hạn bởi hai đường cong là $2\sqrt2$ (đơn vị diện tích).

**Đáp số.** $2\sqrt2$.
:::

:::exercise Động học ở Paper 2
Một hạt có vận tốc $v(t)=e^{0{,}5t}\cos t$ m s⁻¹, $0\le t\le4$. Tính độ dời và quãng đường đi được. [4 marks]

::hint
**Cần nhớ:** $\displaystyle\int_0^4v\,dt$ và $\displaystyle\int_0^4|v|\,dt$ trên GDC.

::solution
Gọi $s$ (m) là độ dời và $d$ (m) là quãng đường đi được trong khoảng $0\le t\le4$.

Độ dời. Dùng công thức nguyên hàm (tích phân từng phần hai lần)
$$\int e^{at}\cos t\,dt=\frac{e^{at}(a\cos t+\sin t)}{a^2+1}+C$$
với $a=0{,}5$, ta được nguyên hàm của $v$:
$$F(t)=\frac{e^{0{,}5t}(0{,}5\cos t+\sin t)}{1{,}25}=e^{0{,}5t}(0{,}4\cos t+0{,}8\sin t).$$

Ta có $F(0)=0{,}4$ và $F(4)=e^{2}(0{,}4\cos4+0{,}8\sin4)\approx-6{,}406$. Do đó
$$s=\int_0^4v(t)\,dt=F(4)-F(0)\approx-6{,}406-0{,}4=-6{,}81\ \text{m}.$$

Quãng đường. Hạt đổi chiều khi $v(t)=0$, tức là $\cos t=0$ (vì $e^{0{,}5t}>0$), nên $t=\dfrac\pi2+k\pi$. Trong đoạn $[0; 4]$ chỉ có $t=\dfrac\pi2\approx1{,}57$ (giá trị kế tiếp $\dfrac{3\pi}{2}\approx4{,}71>4$).

Vì $\cos t>0$ trên $\left[0; \dfrac\pi2\right)$ và $\cos t<0$ trên $\left(\dfrac\pi2; 4\right]$, nên $v>0$ rồi $v<0$. Do đó
$$d=\int_0^{\pi/2}v\,dt-\int_{\pi/2}^4v\,dt=2F\left(\frac\pi2\right)-F(0)-F(4).$$

Với $F\left(\dfrac\pi2\right)=0{,}8e^{\pi/4}\approx1{,}7546$, ta được
$$d\approx2\cdot1{,}7546-0{,}4+6{,}4056\approx9{,}51\ \text{m}.$$

Vậy độ dời của hạt là khoảng $-6{,}81$ m (hạt ở phía âm của vị trí ban đầu) và quãng đường đi được là khoảng $9{,}51$ m; hạt đổi chiều tại $t=\dfrac\pi2$.

**Đáp số.** Độ dời $\approx-6{,}81$ m; quãng đường $\approx9{,}51$ m.
:::

:::quiz
::mc TH
Hệ số góc của $y=e^{2x}$ tại $x=0$ bằng
A. $1$
B. $e^2$
C. $2$
D. $0$
::key C
$\dfrac{dy}{dx}=2e^{2x}$, bằng $2$ tại $x=0$.

::mc TH
Tích phân $\displaystyle\int_0^13x^2\,dx$ bằng
A. $1$
B. $3$
C. $6$
D. $\dfrac13$
::key A
$\left[x^3\right]_0^1=1$.

::mc VD
Hệ số góc của pháp tuyến với $y=x^2$ tại $x=1$ bằng
A. $2$
B. $-2$
C. $\dfrac12$
D. $-\dfrac12$
::key D
Tiếp tuyến có hệ số góc $2$, nên pháp tuyến có hệ số góc $-\dfrac12$.

::mc TH
Nếu $f'(x)=2x-4$ thì $f$ nghịch biến trên khoảng nào?
A. $x>2$
B. $x<2$
C. $x<-2$
D. $x>4$
::key B
$f'(x)<0$ khi $x<2$.

::tf TH VD TH TH
Cho $f(x)=x^3-3x$.
a) $f'(1)=0$.
b) $f$ đạt cực tiểu tại $x=1$.
c) $f''(x)=6x$.
d) $f$ đồng biến trên $-1<x<1$.
::key T T T F
a) Đúng: $f'(x)=3x^2-3$. b) Đúng: $f''(1)=6>0$. c) Đúng. d) Sai: ở đó $f'(x)<0$.

::sa TH
Tính $\displaystyle\int_1^32x\,dx$.
::key 8
$\left[x^2\right]_1^3=9-1$.

::sa VD
Tìm giá trị lớn nhất của $f(x)=6x-x^2$.
::key 9
$f'(x)=6-2x=0$ tại $x=3$, và $f(3)=9$.
:::
