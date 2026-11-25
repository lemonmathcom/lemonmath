---
title: Giải tích nâng cao: chuỗi Maclaurin, phương trình vi phân
description: IB Math AA HL: chuỗi Maclaurin, giới hạn bằng chuỗi và quy tắc L'Hôpital, phương trình vi phân tách biến, đẳng cấp, thừa số tích phân, phương pháp Euler.
minutes: 50
---

:::goals
- Tìm chuỗi Maclaurin bằng đạo hàm và bằng cách kết hợp các chuỗi đã biết.
- Dùng chuỗi và quy tắc L'Hôpital để tính giới hạn.
- Giải phương trình vi phân tách biến, đẳng cấp, và phương trình tuyến tính bằng thừa số tích phân.
- Xấp xỉ nghiệm của phương trình vi phân bằng phương pháp Euler.
:::

Câu cuối của Section B, ở Paper 1 hoặc Paper 2, hay rơi vào phần giải tích HL này. Đề có thể cho bạn lập một chuỗi Maclaurin, rồi dùng nó để tìm một giới hạn hoặc một giá trị gần đúng. Cũng có thể đề cho một phương trình vi phân, bạn giải từng bước rồi nói nghiệm có nghĩa gì trong tình huống đã cho. Câu hỏi của bài này là: làm sao đi từ đề đến đáp số mà mỗi dòng đều có lí do? Ở HL, mỗi dòng phải suy ra từ dòng trước, nên bạn hãy viết đủ phương pháp, đừng nhảy bước.

## Chuỗi Maclaurin

$$f(x)=f(0)+xf'(0)+\frac{x^2}{2!}f''(0)+\frac{x^3}{3!}f'''(0)+\dots$$
Bạn không cần học thuộc những chuỗi quen: sổ công thức đã cho sẵn chuỗi của $e^x$, $\ln(1+x)$, $\sin x$, $\cos x$, $\arctan x$ và $(1+x)^p$. Việc của bạn là biến chúng thành chuỗi mới. Có bốn cách: thế biến, nhân hai chuỗi, lấy đạo hàm hoặc lấy tích phân từng số hạng. Hai ví dụ dưới đây làm thử cách nhân và cách thế biến.

:::example Nhân hai chuỗi
Tìm chuỗi Maclaurin của $e^x\sin x$ đến số hạng chứa $x^3$. [4 marks]

**Lời giải.** $\left(1+x+\dfrac{x^2}{2}+\dfrac{x^3}{6}+\dots\right)\left(x-\dfrac{x^3}{6}+\dots\right)=x+x^2+\dfrac{x^3}{2}-\dfrac{x^3}{6}+\dots=x+x^2+\dfrac{x^3}{3}+\dots$
:::

:::example Thế biến
Dùng chuỗi của $\ln(1+x)$ để tìm ba số hạng khác không đầu tiên của chuỗi $\ln(1+2x)$, và nêu các giá trị của $x$ để chuỗi đúng. [4 marks]

**Lời giải.** $\ln(1+x)=x-\dfrac{x^2}{2}+\dfrac{x^3}{3}-\dots$ với $-1<x\le1$. Thay $x$ bởi $2x$: $2x-2x^2+\dfrac{8x^3}{3}-\dots$, đúng khi $-1<2x\le1$, tức $-\dfrac12<x\le\dfrac12$.
:::

## Giới hạn bằng chuỗi và quy tắc L'Hôpital

Gặp giới hạn dạng $\dfrac00$ hoặc $\dfrac\infty\infty$, ta không thể thay thẳng giá trị vào, vì phép chia lúc đó không có nghĩa. Có hai lối ra. Lối thứ nhất là thay các hàm bằng chuỗi của chúng, rồi rút gọn. Lối thứ hai là dùng **quy tắc L'Hôpital**: $\displaystyle\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}$, lặp lại nếu cần. Ví dụ sau làm cả hai cách cho cùng một giới hạn, để bạn thấy chúng cho cùng đáp số.

:::example Một giới hạn, hai cách
Tính $\displaystyle\lim_{x\to0}\frac{e^x-1-x}{x^2}$. [4 marks]

**Lời giải.** Bằng chuỗi: $\dfrac{\frac{x^2}{2}+\frac{x^3}{6}+\dots}{x^2}=\dfrac12+\dfrac x6+\dots\to\dfrac12$.

Bằng L'Hôpital (hai lần, vì cả hai bước đều có dạng $\dfrac00$): $\displaystyle\lim_{x\to0}\frac{e^x-1}{2x}=\lim_{x\to0}\frac{e^x}{2}=\frac12$.
:::

## Phương trình vi phân

:::note Ba dạng và cách giải
- **Tách biến (separable):** $\dfrac{dy}{dx}=f(x)g(y)$. Đưa mọi thứ của một biến về một vế, mọi thứ của biến kia về vế còn lại, rồi lấy tích phân: $\displaystyle\int\frac{dy}{g(y)}=\int f(x)\,dx$.
- **Đẳng cấp (homogeneous):** $\dfrac{dy}{dx}=f\left(\dfrac yx\right)$. Đặt $y=vx$, khi đó $\dfrac{dy}{dx}=v+x\dfrac{dv}{dx}$. Phương trình mới lúc này tách biến được.
- **Tuyến tính (linear):** $\dfrac{dy}{dx}+P(x)y=Q(x)$. Nhân hai vế với **thừa số tích phân (integrating factor)** $e^{\int P(x)\,dx}$. Mẹo nằm ở chỗ này: vế trái trở thành đạo hàm của (thừa số tích phân $\times\ y$), nên chỉ còn việc lấy tích phân hai vế.

Gặp một phương trình mới, bạn hãy tự hỏi nó thuộc dạng nào trước, rồi mới bắt tay vào giải.
:::

:::example Tách biến
Giải $\dfrac{dy}{dx}=xy^2$, biết $y=1$ khi $x=0$. [5 marks]

**Lời giải.** $\displaystyle\int y^{-2}\,dy=\int x\,dx$ cho $-\dfrac1y=\dfrac{x^2}{2}+C$. Tại $(0,1)$: $C=-1$. Vậy $\dfrac1y=1-\dfrac{x^2}{2}$ và $y=\dfrac{2}{2-x^2}$.
:::

:::example Thừa số tích phân
Giải $\dfrac{dy}{dx}+\dfrac{2y}{x}=x^2$ với $x>0$, biết $y=1$ khi $x=1$. [6 marks]

**Lời giải.** Thừa số tích phân là $e^{\int2/x\,dx}=e^{2\ln x}=x^2$. Khi đó $\dfrac{d}{dx}\left(x^2y\right)=x^4$, nên $x^2y=\dfrac{x^5}{5}+C$. Tại $(1,1)$: $C=\dfrac45$. Vậy $y=\dfrac{x^3}{5}+\dfrac{4}{5x^2}$.
:::

:::example Đẳng cấp
Tìm nghiệm tổng quát của $\dfrac{dy}{dx}=\dfrac{x+y}{x}$, $x>0$. [5 marks]

**Lời giải.** $\dfrac{dy}{dx}=1+\dfrac yx$. Với $y=vx$: $v+x\dfrac{dv}{dx}=1+v$, nên $\dfrac{dv}{dx}=\dfrac1x$ và $v=\ln x+C$. Vậy $y=x\ln x+Cx$.
:::

## Phương pháp Euler

Có những phương trình vi phân không tìm được nghiệm dưới dạng công thức. Khi đó ta vẫn ước lượng được nghiệm, bằng cách đi từng bước nhỏ, mỗi bước theo hướng của hệ số góc tại điểm đang đứng. Xuất phát từ $(x_0,y_0)$ với bước nhảy $h$: $x_{n+1}=x_n+h$ và $y_{n+1}=y_n+h\,f(x_n,y_n)$, trong đó $\dfrac{dy}{dx}=f(x,y)$. Nói bằng lời, giá trị mới bằng giá trị cũ cộng bước nhảy nhân với hệ số góc. Ở Paper 2, bảng giá trị của GDC hoặc bảng tính giúp tính nhanh.

:::example Hai bước Euler
Với $\dfrac{dy}{dx}=x+y$ và $y(0)=1$, dùng phương pháp Euler với $h=0{,}1$ để ước lượng $y(0{,}2)$. [3 marks]

**Lời giải.** $y_1=1+0{,}1(0+1)=1{,}1$. $y_2=1{,}1+0{,}1(0{,}1+1{,}1)=1{,}22$. Vậy $y(0{,}2)\approx1{,}22$.
:::

:::warning Những cái bẫy thường gặp
- **Hằng số tích phân** thêm quá muộn, hoặc chỉ thêm ở một vế. Hãy thêm hằng số ngay ở bước lấy tích phân.
- **Sai thừa số tích phân:** đó là $e^{\int P\,dx}$ với phương trình đã viết dưới dạng $y'+Py=Q$, nên hãy sắp xếp lại phương trình trước khi tính.
- **Khoảng hội tụ** của chuỗi sau khi thế biến. Chỗ này nhiều bạn hay quên tính lại.
- **Dùng L'Hôpital cho giới hạn không có dạng $\dfrac00$ hay $\dfrac\infty\infty$.** Kiểm tra dạng của giới hạn ở mỗi bước.
- **Phương pháp Euler:** dùng $x$ mới cùng $y$ cũ khi tính hệ số góc. Hệ số góc phải tính tại cùng một điểm, chính là điểm đang đứng.

Đừng lo nếu lần đầu bạn mắc vài lỗi trong số này. Ghi lại lỗi và cách sửa, lần sau bạn sẽ nhận ra chúng từ xa.
:::

:::terms
- Maclaurin series | chuỗi Maclaurin
- L'Hôpital's rule | quy tắc L'Hôpital
- differential equation | phương trình vi phân
- separable, homogeneous | tách biến, đẳng cấp
- linear, integrating factor | tuyến tính, thừa số tích phân
- general solution, particular solution | nghiệm tổng quát, nghiệm riêng
- Euler's method, step length | phương pháp Euler, bước nhảy
:::

## Bài tập tương tự

:::exercise Chuỗi của cosin
Tìm chuỗi Maclaurin của $\cos2x$ đến số hạng chứa $x^4$. [3 marks]

::hint
**Cần nhớ:** thế $2x$ vào $\cos x=1-\dfrac{x^2}{2}+\dfrac{x^4}{24}-\dots$

::solution
Chuỗi Maclaurin của $\cos x$ là
$$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots$$

Thay $x$ bằng $2x$ vào khai triển trên, ta được
$$\cos2x=1-\frac{(2x)^2}{2}+\frac{(2x)^4}{24}-\cdots$$

Ta có $(2x)^2=4x^2$ và $(2x)^4=16x^4$. Do đó
$$\cos2x=1-\frac{4x^2}{2}+\frac{16x^4}{24}-\cdots=1-2x^2+\frac{2x^4}{3}-\cdots$$

Vậy chuỗi Maclaurin của $\cos2x$ đến số hạng chứa $x^4$ là $1-2x^2+\dfrac{2x^4}{3}$.

**Đáp số.** $1-2x^2+\dfrac{2x^4}{3}$.
:::

:::exercise Chuỗi của hàm mũ
Tìm bốn số hạng đầu của chuỗi Maclaurin của $e^{x^2}$. [3 marks]

::hint
**Cần nhớ:** thế $x^2$ vào chuỗi của $e^x$.

::solution
Chuỗi Maclaurin của $e^u$ là
$$e^u=1+u+\frac{u^2}{2!}+\frac{u^3}{3!}+\cdots$$

Thay $u=x^2$ vào khai triển trên, ta được
$$e^{x^2}=1+x^2+\frac{\left(x^2\right)^2}{2!}+\frac{\left(x^2\right)^3}{3!}+\cdots$$

Ta có $\left(x^2\right)^2=x^4$ và $\left(x^2\right)^3=x^6$, $2!=2$, $3!=6$. Do đó
$$e^{x^2}=1+x^2+\frac{x^4}{2}+\frac{x^6}{6}+\cdots$$

Vậy bốn số hạng đầu của chuỗi Maclaurin của $e^{x^2}$ là $1$, $x^2$, $\dfrac{x^4}{2}$, $\dfrac{x^6}{6}$.

**Đáp số.** $1+x^2+\dfrac{x^4}{2}+\dfrac{x^6}{6}$.
:::

:::exercise Một giới hạn
Tính $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$. [4 marks]

::hint
**Cần nhớ:** $\sin x=x-\dfrac{x^3}{6}+\dots$

::solution
Ta dùng chuỗi Maclaurin của $\sin x$:
$$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots=x-\frac{x^3}{6}+\frac{x^5}{120}-\cdots$$

Suy ra
$$x-\sin x=\frac{x^3}{6}-\frac{x^5}{120}+\cdots$$

Với $x\neq0$, chia cả tử và mẫu cho $x^3$, ta được
$$\frac{x-\sin x}{x^3}=\frac16-\frac{x^2}{120}+\cdots$$

Khi $x\to0$, mọi số hạng chứa luỹ thừa dương của $x$ đều tiến tới $0$, nên biểu thức trên tiến tới $\dfrac16$.

Vậy $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}=\frac16$.

**Đáp số.** $\dfrac16$.
:::

:::exercise Tách biến với arctan
Giải $\dfrac{dy}{dx}=2x\left(1+y^2\right)$, biết $y=0$ khi $x=0$. [5 marks]

::hint
**Cần nhớ:** $\displaystyle\int\frac{dy}{1+y^2}=\arctan y$.

::solution
Đây là phương trình vi phân có biến số phân li. Vì $1+y^2>0$ nên ta chia hai vế cho $1+y^2$:
$$\frac{1}{1+y^2}\cdot\frac{dy}{dx}=2x.$$

Lấy tích phân hai vế theo $x$:
$$\int\frac{1}{1+y^2}\,dy=\int2x\,dx.$$

Suy ra
$$\arctan y=x^2+C.$$

Thay điều kiện $y=0$ khi $x=0$: $\arctan0=0^2+C$, nên $C=0$.

Do đó $\arctan y=x^2$, tức là $y=\tan\left(x^2\right)$.

Vậy nghiệm của bài toán là $y=\tan\left(x^2\right)$.

**Đáp số.** $y=\tan\left(x^2\right)$.
:::

:::exercise Thừa số tích phân
Giải $\dfrac{dy}{dx}-y=e^{2x}$, biết $y=0$ khi $x=0$. [5 marks]

::hint
**Cần nhớ:** thừa số tích phân là $e^{-x}$.

::solution
Đây là phương trình vi phân tuyến tính cấp một. Ta dùng thừa số tích phân $e^{-x}$: nhân hai vế của $\dfrac{dy}{dx}-y=e^{2x}$ với $e^{-x}$, ta được
$$e^{-x}\frac{dy}{dx}-e^{-x}y=e^{-x}\cdot e^{2x}=e^x.$$

Vế trái chính là đạo hàm của tích $ye^{-x}$, nên
$$\frac{d}{dx}\left(ye^{-x}\right)=e^x.$$

Lấy tích phân hai vế theo $x$:
$$ye^{-x}=e^x+C.$$

Thay điều kiện $y=0$ khi $x=0$: $0\cdot e^0=e^0+C$, tức là $0=1+C$, nên $C=-1$.

Do đó $ye^{-x}=e^x-1$. Nhân hai vế với $e^x$, ta được
$$y=e^{2x}-e^x.$$

Kiểm tra: $\dfrac{dy}{dx}-y=\left(2e^{2x}-e^x\right)-\left(e^{2x}-e^x\right)=e^{2x}$ và $y(0)=1-1=0$.

Vậy nghiệm của bài toán là $y=e^{2x}-e^x$.

**Đáp số.** $y=e^{2x}-e^x$.
:::

## Bài tập vận dụng

:::exercise Bể pha trộn
Tại thời điểm $t$ phút, một bể chứa $Q$ kg muối. Nước muối chảy vào và hỗn hợp chảy ra sao cho $\dfrac{dQ}{dt}=2-\dfrac{Q}{50}$, và $Q=0$ khi $t=0$.
(a) Giải phương trình vi phân. [5 marks]
(b) Mô tả lượng muối về lâu dài. [1 mark]

::hint
**Cần nhớ:** viết $\dfrac{dQ}{dt}+\dfrac{Q}{50}=2$; thừa số tích phân là $e^{t/50}$.

::solution
a) Viết phương trình dưới dạng $\dfrac{dQ}{dt}+\dfrac{Q}{50}=2$. Đây là phương trình tuyến tính cấp một với thừa số tích phân $e^{t/50}$. Nhân hai vế với $e^{t/50}$:
$$e^{t/50}\frac{dQ}{dt}+\frac{1}{50}e^{t/50}Q=2e^{t/50}.$$

Vế trái là đạo hàm của $Qe^{t/50}$, nên
$$\frac{d}{dt}\left(Qe^{t/50}\right)=2e^{t/50}.$$

Lấy tích phân hai vế theo $t$, với $\displaystyle\int2e^{t/50}dt=100e^{t/50}$, ta được
$$Qe^{t/50}=100e^{t/50}+C.$$

Thay điều kiện $Q=0$ khi $t=0$: $0=100+C$, nên $C=-100$.

Do đó $Qe^{t/50}=100e^{t/50}-100$. Nhân hai vế với $e^{-t/50}$, ta được
$$Q=100-100e^{-t/50}=100\left(1-e^{-t/50}\right).$$

Vậy $Q=100\left(1-e^{-t/50}\right)$ (kg).

b) Khi $t\to+\infty$ thì $e^{-t/50}\to0$, nên $Q\to100(1-0)=100$. Hơn nữa $\dfrac{dQ}{dt}=2e^{-t/50}>0$ nên $Q$ tăng dần theo thời gian.

Vậy về lâu dài, lượng muối trong bể tăng dần và tiến tới $100$ kg.

**Đáp số.** a) $Q=100\left(1-e^{-t/50}\right)$; b) $Q\to100$ kg.
:::

:::exercise Tích phân từ chuỗi
Dùng hai số hạng khác không đầu tiên của chuỗi Maclaurin của $\sin\left(x^2\right)$ để ước lượng $\displaystyle\int_0^1\sin\left(x^2\right)dx$. [4 marks]

::hint
**Cần nhớ:** $\sin\left(x^2\right)=x^2-\dfrac{x^6}{6}+\dots$; lấy tích phân từng số hạng.

::solution
Chuỗi Maclaurin của $\sin u$ là
$$\sin u=u-\frac{u^3}{3!}+\cdots$$

Thay $u=x^2$, ta được hai số hạng khác không đầu tiên của $\sin\left(x^2\right)$:
$$\sin\left(x^2\right)\approx x^2-\frac{\left(x^2\right)^3}{6}=x^2-\frac{x^6}{6}.$$

Do đó
$$\int_0^1\sin\left(x^2\right)dx\approx\int_0^1\left(x^2-\frac{x^6}{6}\right)dx=\left[\frac{x^3}{3}-\frac{x^7}{42}\right]_0^1=\frac13-\frac1{42}.$$

Quy đồng: $\dfrac13-\dfrac1{42}=\dfrac{14}{42}-\dfrac{1}{42}=\dfrac{13}{42}\approx0{,}310$.

Vậy $\displaystyle\int_0^1\sin\left(x^2\right)dx\approx\dfrac{13}{42}\approx0{,}310$.

*Mẹo thi.* Dùng GDC tính trực tiếp $\displaystyle\int_0^1\sin\left(x^2\right)dx$ cũng cho $0{,}310$; có thể dùng để kiểm tra kết quả.

**Đáp số.** $\dfrac{13}{42}\approx0{,}310$.
:::

:::exercise Euler với bảng của GDC
Với $\dfrac{dy}{dx}=\sin x+y$ và $y(0)=1$, dùng phương pháp Euler với $h=0{,}2$ để ước lượng $y(0{,}4)$. [4 marks]

::hint
**Cần nhớ:** hai bước; chế độ radian.

::solution
Phương pháp Euler với bước $h=0{,}2$ cho công thức
$$x_{n+1}=x_n+h,\qquad y_{n+1}=y_n+h\,f(x_n,y_n),$$
trong đó $f(x,y)=\sin x+y$ (tính $\sin$ theo radian). Điều kiện ban đầu là $x_0=0$, $y_0=1$.

Bước 1: $x_1=0{,}2$ và
$$y_1=y_0+0{,}2\left(\sin0+y_0\right)=1+0{,}2(0+1)=1{,}2.$$

Bước 2: $x_2=0{,}4$ và
$$y_2=y_1+0{,}2\left(\sin0{,}2+y_1\right)=1{,}2+0{,}2\left(\sin0{,}2+1{,}2\right).$$

Với $\sin0{,}2\approx0{,}19867$, ta có $y_2\approx1{,}2+0{,}2\cdot1{,}39867\approx1{,}48$.

Vậy $y(0{,}4)\approx1{,}48$.

**Đáp số.** $y(0{,}4)\approx1{,}48$.
:::

:::exercise Thử thách: chuỗi bằng đạo hàm
Tìm chuỗi Maclaurin của $\tan x$ đến số hạng chứa $x^3$ bằng cách lấy đạo hàm. [5 marks]

::hint
**Cần nhớ:** $f'=\sec^2x$, $f''=2\sec^2x\tan x$ và $f'''=2\sec^4x+4\sec^2x\tan^2x$.

::solution
Đặt $f(x)=\tan x$. Chuỗi Maclaurin có dạng
$$f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\frac{f'''(0)}{3!}x^3+\cdots$$

Ta lần lượt lấy đạo hàm:
$$\begin{aligned}f'(x)&=\sec^2x,\\f''(x)&=2\sec x\cdot\sec x\tan x=2\sec^2x\tan x,\\f'''(x)&=4\sec^2x\tan^2x+2\sec^4x.\end{aligned}$$

Tại $x=0$, ta có $\tan0=0$ và $\sec0=1$, nên
$$f(0)=0,\quad f'(0)=1,\quad f''(0)=0,\quad f'''(0)=2.$$

Thay vào công thức Maclaurin:
$$\tan x=0+1\cdot x+\frac{0}{2!}x^2+\frac{2}{3!}x^3+\cdots=x+\frac{x^3}{3}+\cdots$$

Vậy chuỗi Maclaurin của $\tan x$ đến số hạng chứa $x^3$ là $x+\dfrac{x^3}{3}$.

**Đáp số.** $\tan x=x+\dfrac{x^3}{3}+\cdots$
:::

:::quiz
::mc TH
Hệ số của $x^2$ trong chuỗi Maclaurin của $e^{3x}$ bằng
A. $3$
B. $\dfrac92$
C. $9$
D. $\dfrac32$
::key B
$\dfrac{(3x)^2}{2!}=\dfrac92x^2$.

::mc TH
Thừa số tích phân của $\dfrac{dy}{dx}+3y=x$ là
A. $e^{3x}$
B. $e^{x}$
C. $3x$
D. $e^{-3x}$
::key A
$e^{\int3\,dx}=e^{3x}$.

::mc TH
$\displaystyle\lim_{x\to0}\frac{e^{2x}-1}{x}$ bằng
A. $1$
B. $0$
C. $e^2$
D. $2$
::key D
L'Hôpital: $\displaystyle\lim_{x\to0}2e^{2x}=2$.

::mc TH
Với $\dfrac{dy}{dx}=2x$ và $y(0)=1$, một bước Euler với $h=0{,}5$ cho giá trị ước lượng nào của $y(0{,}5)$?
A. $1{,}25$
B. $2$
C. $1$
D. $1{,}5$
::key C
Hệ số góc tại $x=0$ bằng $0$, nên $y(0{,}5)\approx1+0{,}5\cdot0=1$. (Giá trị đúng là $1{,}25$.)

::tf TH VD VD VD
Xét $\dfrac{dy}{dx}=\dfrac yx$, $x>0$.
a) Phương trình là tách biến.
b) Nghiệm tổng quát là $y=Cx$.
c) Nghiệm thoả mãn $y(1)=2$ là $y=2x$.
d) Nghiệm thoả mãn $y(1)=3$ đi qua $(2,5)$.
::key T T T F
a) Đúng. b) Đúng: $\ln|y|=\ln x+c$. c) Đúng. d) Sai: $y=3x$ cho giá trị $6$ tại $x=2$.

::sa VD
Tìm hệ số của $x^2$ trong chuỗi Maclaurin của $\ln(1+x)$.
::key -0,5
$\ln(1+x)=x-\dfrac{x^2}{2}+\dots$

::sa VD
Với $\dfrac{dy}{dx}=x+y$ và $y(0)=1$, phương pháp Euler với $h=0{,}1$ cho $y(0{,}2)\approx$ ?
::key 1,22
$1\to1{,}1\to1{,}22$, như trong ví dụ ở trên.
:::
