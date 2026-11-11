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

Các nội dung giải tích HL này rất hay được chọn cho câu cuối Section B của Paper 1 hoặc Paper 2: lập một chuỗi Maclaurin, dùng nó để tính giới hạn hay giá trị gần đúng, hoặc giải từng bước một phương trình vi phân rồi giải thích nghiệm trong ngữ cảnh. Như mọi phần đại số ở HL, mỗi dòng phải suy ra từ dòng trước, nên hãy trình bày đầy đủ phương pháp.

## Chuỗi Maclaurin

$$f(x)=f(0)+xf'(0)+\frac{x^2}{2!}f''(0)+\frac{x^3}{3!}f'''(0)+\dots$$
Sổ công thức cho sẵn chuỗi của $e^x$, $\ln(1+x)$, $\sin x$, $\cos x$, $\arctan x$ và $(1+x)^p$. Chuỗi mới được tạo bằng cách thế biến, nhân, lấy đạo hàm hoặc lấy tích phân.

:::example Nhân hai chuỗi
Tìm chuỗi Maclaurin của $e^x\sin x$ đến số hạng chứa $x^3$. [4 marks]

**Lời giải.** $\left(1+x+\dfrac{x^2}{2}+\dfrac{x^3}{6}+\dots\right)\left(x-\dfrac{x^3}{6}+\dots\right)=x+x^2+\dfrac{x^3}{2}-\dfrac{x^3}{6}+\dots=x+x^2+\dfrac{x^3}{3}+\dots$
:::

:::example Thế biến
Dùng chuỗi của $\ln(1+x)$ để tìm ba số hạng khác không đầu tiên của chuỗi $\ln(1+2x)$, và nêu các giá trị của $x$ để chuỗi đúng. [4 marks]

**Lời giải.** $\ln(1+x)=x-\dfrac{x^2}{2}+\dfrac{x^3}{3}-\dots$ với $-1<x\le1$. Thay $x$ bởi $2x$: $2x-2x^2+\dfrac{8x^3}{3}-\dots$, đúng khi $-1<2x\le1$, tức $-\dfrac12<x\le\dfrac12$.
:::

## Giới hạn bằng chuỗi và quy tắc L'Hôpital

Với giới hạn dạng $\dfrac00$ hoặc $\dfrac\infty\infty$, có thể thay các hàm bằng chuỗi của chúng, hoặc dùng **quy tắc L'Hôpital**: $\displaystyle\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}$, lặp lại nếu cần.

:::example Một giới hạn, hai cách
Tính $\displaystyle\lim_{x\to0}\frac{e^x-1-x}{x^2}$. [4 marks]

**Lời giải.** Bằng chuỗi: $\dfrac{\frac{x^2}{2}+\frac{x^3}{6}+\dots}{x^2}=\dfrac12+\dfrac x6+\dots\to\dfrac12$.

Bằng L'Hôpital (hai lần, vì cả hai bước đều có dạng $\dfrac00$): $\displaystyle\lim_{x\to0}\frac{e^x-1}{2x}=\lim_{x\to0}\frac{e^x}{2}=\frac12$.
:::

## Phương trình vi phân

:::note Ba dạng và cách giải
- **Tách biến (separable):** $\dfrac{dy}{dx}=f(x)g(y)$. Tách biến rồi lấy tích phân: $\displaystyle\int\frac{dy}{g(y)}=\int f(x)\,dx$.
- **Đẳng cấp (homogeneous):** $\dfrac{dy}{dx}=f\left(\dfrac yx\right)$. Đặt $y=vx$, khi đó $\dfrac{dy}{dx}=v+x\dfrac{dv}{dx}$, rồi tách biến.
- **Tuyến tính (linear):** $\dfrac{dy}{dx}+P(x)y=Q(x)$. Nhân hai vế với **thừa số tích phân (integrating factor)** $e^{\int P(x)\,dx}$; vế trái trở thành đạo hàm của (thừa số tích phân $\times\ y$).
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

Xuất phát từ $(x_0,y_0)$ với bước nhảy $h$: $x_{n+1}=x_n+h$ và $y_{n+1}=y_n+h\,f(x_n,y_n)$, trong đó $\dfrac{dy}{dx}=f(x,y)$. Ở Paper 2, bảng giá trị của GDC hoặc bảng tính giúp tính nhanh.

:::example Hai bước Euler
Với $\dfrac{dy}{dx}=x+y$ và $y(0)=1$, dùng phương pháp Euler với $h=0{,}1$ để ước lượng $y(0{,}2)$. [3 marks]

**Lời giải.** $y_1=1+0{,}1(0+1)=1{,}1$. $y_2=1{,}1+0{,}1(0{,}1+1{,}1)=1{,}22$. Vậy $y(0{,}2)\approx1{,}22$.
:::

:::warning Những cái bẫy thường gặp
- **Hằng số tích phân** thêm quá muộn, hoặc chỉ thêm ở một vế.
- **Sai thừa số tích phân:** đó là $e^{\int P\,dx}$ với phương trình đã viết dưới dạng $y'+Py=Q$; hãy sắp xếp lại trước.
- **Khoảng hội tụ** của chuỗi sau khi thế biến.
- **Dùng L'Hôpital cho giới hạn không có dạng $\dfrac00$ hay $\dfrac\infty\infty$.** Kiểm tra dạng ở mỗi bước.
- **Phương pháp Euler:** dùng $x$ mới cùng $y$ cũ khi tính hệ số góc.
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
$1-\dfrac{(2x)^2}{2}+\dfrac{(2x)^4}{24}=1-2x^2+\dfrac{2x^4}{3}$.
:::

:::exercise Chuỗi của hàm mũ
Tìm bốn số hạng đầu của chuỗi Maclaurin của $e^{x^2}$. [3 marks]

::hint
**Cần nhớ:** thế $x^2$ vào chuỗi của $e^x$.

::solution
$1+x^2+\dfrac{x^4}{2}+\dfrac{x^6}{6}$.
:::

:::exercise Một giới hạn
Tính $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$. [4 marks]

::hint
**Cần nhớ:** $\sin x=x-\dfrac{x^3}{6}+\dots$

::solution
$\dfrac{\frac{x^3}{6}-\dots}{x^3}\to\dfrac16$.
:::

:::exercise Tách biến với arctan
Giải $\dfrac{dy}{dx}=2x\left(1+y^2\right)$, biết $y=0$ khi $x=0$. [5 marks]

::hint
**Cần nhớ:** $\displaystyle\int\frac{dy}{1+y^2}=\arctan y$.

::solution
$\arctan y=x^2+C$, và $C=0$, nên $y=\tan\left(x^2\right)$.
:::

:::exercise Thừa số tích phân
Giải $\dfrac{dy}{dx}-y=e^{2x}$, biết $y=0$ khi $x=0$. [5 marks]

::hint
**Cần nhớ:** thừa số tích phân là $e^{-x}$.

::solution
$\dfrac{d}{dx}\left(ye^{-x}\right)=e^x$, nên $ye^{-x}=e^x+C$; $C=-1$. Vậy $y=e^{2x}-e^x$.
:::

## Bài tập vận dụng

:::exercise Bể pha trộn
Tại thời điểm $t$ phút, một bể chứa $Q$ kg muối. Nước muối chảy vào và hỗn hợp chảy ra sao cho $\dfrac{dQ}{dt}=2-\dfrac{Q}{50}$, và $Q=0$ khi $t=0$.
(a) Giải phương trình vi phân. [5 marks]
(b) Mô tả lượng muối về lâu dài. [1 mark]

::hint
**Cần nhớ:** viết $\dfrac{dQ}{dt}+\dfrac{Q}{50}=2$; thừa số tích phân là $e^{t/50}$.

::solution
(a) $\dfrac{d}{dt}\left(Qe^{t/50}\right)=2e^{t/50}$, nên $Qe^{t/50}=100e^{t/50}+C$ và $C=-100$. Vậy $Q=100\left(1-e^{-t/50}\right)$.

(b) $Q\to100$ kg.
:::

:::exercise Tích phân từ chuỗi
Dùng hai số hạng khác không đầu tiên của chuỗi Maclaurin của $\sin\left(x^2\right)$ để ước lượng $\displaystyle\int_0^1\sin\left(x^2\right)dx$. [4 marks]

::hint
**Cần nhớ:** $\sin\left(x^2\right)=x^2-\dfrac{x^6}{6}+\dots$; lấy tích phân từng số hạng.

::solution
$\displaystyle\int_0^1\left(x^2-\frac{x^6}{6}\right)dx=\frac13-\frac{1}{42}=\frac{13}{42}\approx0{,}310$. (GDC cũng cho $0{,}310$.)
:::

:::exercise Euler với bảng của GDC
Với $\dfrac{dy}{dx}=\sin x+y$ và $y(0)=1$, dùng phương pháp Euler với $h=0{,}2$ để ước lượng $y(0{,}4)$. [4 marks]

::hint
**Cần nhớ:** hai bước; chế độ radian.

::solution
$y_1=1+0{,}2(\sin0+1)=1{,}2$. $y_2=1{,}2+0{,}2(\sin0{,}2+1{,}2)\approx1{,}48$.
:::

:::exercise Thử thách: chuỗi bằng đạo hàm
Tìm chuỗi Maclaurin của $\tan x$ đến số hạng chứa $x^3$ bằng cách lấy đạo hàm. [5 marks]

::hint
**Cần nhớ:** $f'=\sec^2x$, $f''=2\sec^2x\tan x$ và $f'''=2\sec^4x+4\sec^2x\tan^2x$.

::solution
$f(0)=0$, $f'(0)=1$, $f''(0)=0$, $f'''(0)=2$. Vậy $\tan x=x+\dfrac{2}{3!}x^3+\dots=x+\dfrac{x^3}{3}+\dots$
:::

:::quiz
::mc
Hệ số của $x^2$ trong chuỗi Maclaurin của $e^{3x}$ bằng
A. $3$
B. $\dfrac92$
C. $9$
D. $\dfrac32$
::key B
$\dfrac{(3x)^2}{2!}=\dfrac92x^2$.

::mc
Thừa số tích phân của $\dfrac{dy}{dx}+3y=x$ là
A. $e^{3x}$
B. $e^{x}$
C. $3x$
D. $e^{-3x}$
::key A
$e^{\int3\,dx}=e^{3x}$.

::mc
$\displaystyle\lim_{x\to0}\frac{e^{2x}-1}{x}$ bằng
A. $1$
B. $0$
C. $e^2$
D. $2$
::key D
L'Hôpital: $\displaystyle\lim_{x\to0}2e^{2x}=2$.

::mc
Với $\dfrac{dy}{dx}=2x$ và $y(0)=1$, một bước Euler với $h=0{,}5$ cho giá trị ước lượng nào của $y(0{,}5)$?
A. $1{,}25$
B. $2$
C. $1$
D. $1{,}5$
::key C
Hệ số góc tại $x=0$ bằng $0$, nên $y(0{,}5)\approx1+0{,}5\cdot0=1$. (Giá trị đúng là $1{,}25$.)

::tf
Xét $\dfrac{dy}{dx}=\dfrac yx$, $x>0$.
a) Phương trình là tách biến.
b) Nghiệm tổng quát là $y=Cx$.
c) Nghiệm thoả mãn $y(1)=2$ là $y=2x$.
d) Nghiệm thoả mãn $y(1)=3$ đi qua $(2,5)$.
::key T T T F
a) Đúng. b) Đúng: $\ln|y|=\ln x+c$. c) Đúng. d) Sai: $y=3x$ cho giá trị $6$ tại $x=2$.

::sa
Tìm hệ số của $x^2$ trong chuỗi Maclaurin của $\ln(1+x)$.
::key -0,5
$\ln(1+x)=x-\dfrac{x^2}{2}+\dots$

::sa
Với $\dfrac{dy}{dx}=x+y$ và $y(0)=1$, phương pháp Euler với $h=0{,}1$ cho $y(0{,}2)\approx$ ?
::key 1,22
$1\to1{,}1\to1{,}22$, như trong ví dụ ở trên.
:::
