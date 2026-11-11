---
title: Đề luyện AP Calculus BC: phần trắc nghiệm
description: Trọn phần trắc nghiệm AP Calculus BC theo cấu trúc 2027: 42 câu, 29 câu không và 13 câu có máy tính, chấm điểm ngay, có lời giải từng câu.
minutes: 100
type: test
---

Đây là trọn phần trắc nghiệm theo cấu trúc đề AP Calculus BC từ tháng 5/2027. Trong đề thật, khoảng 60% điểm đến từ nội dung AB; đề luyện này tập trung vào các unit chỉ có ở BC (27 trên 42 câu: phương pháp Euler và mô hình logistic, kĩ thuật tích phân nâng cao, hàm tham số, hàm véc-tơ, toạ độ cực, chuỗi), vì nội dung AB đã có trong [đề luyện AB](lesson:apcalc-practice-exam-ab). Mọi câu hỏi đều do Lemonmath soạn; đây không phải câu hỏi AP thật, nhưng bám theo các unit và kiểu câu chính thức. Phần trắc nghiệm chiếm một nửa điểm AP; với nửa còn lại, hãy luyện các câu tự luận đã công bố cùng bài [Các dạng câu tự luận AP Calculus và cách trình bày](lesson:apcalc-frq-strategies).

## Cách làm đề

| | Part A | Part B |
|---|---|---|
| Số câu | 29 | 13 |
| Thời gian | 62 phút | 38 phút |
| Máy tính | không được dùng | máy tính vẽ đồ thị (Desmos hoặc máy của bạn) |

1. Bấm giờ 62 phút và làm Part A không dùng máy tính. Nộp bài để xem điểm.
2. Sau đó làm Part B trong 38 phút với máy tính vẽ đồ thị, để ở chế độ radian.
3. Đáp số ở Part B cho đến ba chữ số thập phân, như trong đề thật.
4. Làm xong, đọc lời giải của mọi câu sai và chép vào sổ lỗi sai.

## Part A: không dùng máy tính

:::quiz test
::mc
Giới hạn $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$ bằng
A. $0$
B. $\dfrac12$
C. $1$
D. không tồn tại
::key B
Dùng L'Hôpital hai lần: $\dfrac{\sin x}{2x}\to\dfrac12$. Hoặc dùng $\cos x=1-\dfrac{x^2}{2}+\dots$

::mc
Giới hạn $\displaystyle\lim_{x\to\infty}xe^{-x}$ bằng
A. $0$
B. $1$
C. $e$
D. $\infty$
::key A
$\dfrac{x}{e^x}$ có dạng $\dfrac\infty\infty$; L'Hôpital cho $\dfrac{1}{e^x}\to0$.

::mc
$\dfrac{d}{dx}\sin^2(3x)$ bằng
A. $2\sin(3x)$
B. $3\sin(6x)$
C. $6\cos(3x)$
D. $2\sin(3x)\cos(3x)$
::key B
$2\sin(3x)\cdot\cos(3x)\cdot3=3\sin(6x)$. Phương án D quên hệ số $3$ của hàm bên trong.

::mc
Nếu $e^y+xy=e$ thì $\dfrac{dy}{dx}$ tại điểm $(0,1)$ bằng
A. $-e$
B. $\dfrac1e$
C. $0$
D. $-\dfrac1e$
::key D
$e^yy'+y+xy'=0$. Tại $(0,1)$: $ey'+1=0$.

::mc
Nếu $f(x)=x^x$ với $x>0$ thì $f'(1)$ bằng
A. $0$
B. $e$
C. $1$
D. $\ln2$
::key C
$\ln f=x\ln x$, nên $f'=x^x(\ln x+1)$ và $f'(1)=1$.

::mc
Với $\dfrac{dy}{dx}=x-y$ và $y(0)=1$, phương pháp Euler với hai bước độ dài $0{,}5$ cho giá trị gần đúng nào của $y(1)$?
A. $0{,}5$
B. $0$
C. $0{,}75$
D. $1$
::key A
$y(0{,}5)\approx1+0{,}5(0-1)=0{,}5$; $y(1)\approx0{,}5+0{,}5(0{,}5-0{,}5)=0{,}5$.

::mc
Một quần thể thoả mãn $\dfrac{dP}{dt}=0{,}4P\left(1-\dfrac{P}{800}\right)$. Quần thể tăng nhanh nhất khi $P$ bằng
A. $800$
B. $320$
C. $200$
D. $400$
::key D
Tăng trưởng logistic nhanh nhất tại một nửa sức chứa.

::mc
$\displaystyle\int xe^{2x}\,dx$ bằng
A. $\dfrac{x^2}{2}e^{2x}+C$
B. $\left(\dfrac x2-\dfrac14\right)e^{2x}+C$
C. $\left(\dfrac x2+\dfrac14\right)e^{2x}+C$
D. $(2x-1)e^{2x}+C$
::key B
Từng phần với $u=x$, $dv=e^{2x}dx$: $\dfrac x2e^{2x}-\displaystyle\int\frac12e^{2x}\,dx$.

::mc
Tích phân $\displaystyle\int_2^3\frac{dx}{x^2-1}$ bằng
A. $\dfrac12\ln\dfrac32$
B. $\ln\dfrac32$
C. $\dfrac12\ln\dfrac43$
D. $\ln2$
::key A
$\dfrac{1}{x^2-1}=\dfrac12\left(\dfrac{1}{x-1}-\dfrac{1}{x+1}\right)$, nên tích phân bằng $\dfrac12\left[\ln\dfrac{x-1}{x+1}\right]_2^3=\dfrac12\left(\ln\dfrac12-\ln\dfrac13\right)$.

::mc
Tích phân $\displaystyle\int_0^\infty e^{-2x}\,dx$ bằng
A. $\dfrac12$
B. $2$
C. $1$
D. phân kì
::key A
$\displaystyle\lim_{b\to\infty}\left[-\frac12e^{-2x}\right]_0^b=\frac12$.

::mc
Tích phân suy rộng nào hội tụ?
A. $\displaystyle\int_1^\infty\frac{dx}{\sqrt x}$
B. $\displaystyle\int_1^\infty\frac{dx}{x}$
C. $\displaystyle\int_0^1\frac{dx}{x^2}$
D. $\displaystyle\int_0^1\frac{dx}{\sqrt x}$
::key D
$\displaystyle\int_0^1x^{-1/2}\,dx=\lim_{a\to0^+}\left[2\sqrt x\right]_a^1=2$. Các tích phân còn lại phân kì.

::mc
Với $x=t^2+1$, $y=2t^3$, giá trị $\dfrac{dy}{dx}$ tại $t=1$ bằng
A. $6$
B. $2$
C. $3$
D. $\dfrac13$
::key C
$\dfrac{6t^2}{2t}=3t=3$.

::mc
Với $x=e^t$, $y=t^2$, giá trị $\dfrac{d^2y}{dx^2}$ tại $t=0$ bằng
A. $0$
B. $1$
C. $-2$
D. $2$
::key D
$\dfrac{dy}{dx}=2te^{-t}$; $\dfrac{d}{dt}\left(2te^{-t}\right)=(2-2t)e^{-t}$; chia cho $e^t$: $(2-2t)e^{-2t}=2$ tại $t=0$.

::mc
Diện tích miền giới hạn bởi một cánh của $r=\sin(2\theta)$, $0\le\theta\le\dfrac\pi2$, bằng
A. $\dfrac\pi4$
B. $\dfrac\pi8$
C. $\dfrac12$
D. $\dfrac\pi2$
::key B
$\dfrac12\displaystyle\int_0^{\pi/2}\sin^2(2\theta)\,d\theta=\dfrac12\cdot\dfrac\pi4$. Phương án A quên hệ số $\dfrac12$.

::mc
Một hạt có vị trí $\left\langle t^3,t^2\right\rangle$. Tốc độ của hạt tại $t=1$ bằng
A. $5$
B. $\sqrt{13}$
C. $\sqrt2$
D. $\sqrt5$
::key B
$v(1)=\langle3,2\rangle$, tốc độ $\sqrt{9+4}$. Phương án C dùng vị trí.

::mc
Tổng $\displaystyle\sum_{n=1}^\infty\left(\frac23\right)^n$ bằng
A. $3$
B. $\dfrac23$
C. $2$
D. $\dfrac32$
::key C
Số hạng đầu $\dfrac23$, công bội $\dfrac23$: $\dfrac{2/3}{1/3}=2$. Phương án A bắt đầu từ $n=0$.

::mc
Chuỗi nào hội tụ có điều kiện?
A. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{\sqrt n}$
B. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^nn}{n+1}$
C. $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$
D. $\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n^3}$
::key A
A hội tụ theo tiêu chuẩn chuỗi đan dấu, nhưng $\displaystyle\sum\frac{1}{\sqrt n}$ phân kì. B phân kì (số hạng không tiến về $0$); C và D hội tụ tuyệt đối.

::mc
Bán kính hội tụ của $\displaystyle\sum_{n=1}^\infty\frac{nx^n}{3^n}$ bằng
A. $1$
B. $\dfrac13$
C. $\infty$
D. $3$
::key D
Tiêu chuẩn tỉ số: $\dfrac{n+1}{n}\cdot\dfrac{|x|}{3}\to\dfrac{|x|}{3}<1$.

::mc
Khoảng hội tụ của $\displaystyle\sum_{n=1}^\infty\frac{(x-1)^n}{n}$ là
A. $(0,2)$
B. $[0,2]$
C. $[0,2)$
D. $(0,2]$
::key C
Bán kính $1$. Tại $x=0$: chuỗi điều hoà đan dấu, hội tụ. Tại $x=2$: chuỗi điều hoà, phân kì.

::mc
Hệ số của $x^3$ trong chuỗi Maclaurin của $e^{2x}$ bằng
A. $\dfrac43$
B. $\dfrac16$
C. $8$
D. $\dfrac23$
::key A
$\dfrac{(2x)^3}{3!}=\dfrac86x^3$. Phương án C quên giai thừa.

::mc
Hàm $f$ có $f(2)=1$, $f'(2)=-3$ và $f''(2)=4$. Đa thức Taylor bậc hai của $f$ tại $x=2$ là
A. $1-3x+2x^2$
B. $1-3(x-2)+4(x-2)^2$
C. $1-3(x-2)+2(x-2)^2$
D. $1+3(x-2)+2(x-2)^2$
::key C
Hệ số của $(x-2)^2$ là $\dfrac{f''(2)}{2!}=2$. Phương án B quên giai thừa; phương án A lấy tâm tại $0$.

::mc
Hệ số của $x^6$ trong chuỗi Maclaurin của $x^2\cos x$ bằng
A. $-\dfrac12$
B. $\dfrac{1}{24}$
C. $-\dfrac{1}{720}$
D. $\dfrac{1}{720}$
::key B
$x^2\left(1-\dfrac{x^2}{2}+\dfrac{x^4}{24}-\dots\right)$: số hạng chứa $x^6$ đến từ $\dfrac{x^4}{24}$.

::mc
Tổng của $\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n^2}$ được xấp xỉ bằng ba số hạng đầu. Cận sai số tốt nhất theo cận sai số của chuỗi đan dấu là
A. $\dfrac19$
B. $\dfrac14$
C. $\dfrac{1}{25}$
D. $\dfrac{1}{16}$
::key D
Số hạng đầu tiên bị bỏ là số hạng thứ tư: $\dfrac{1}{4^2}$. Phương án A là số hạng cuối cùng được dùng.

::mc
Giới hạn $\displaystyle\lim_{x\to0}\frac{\sin x-x}{x^3}$ bằng
A. $0$
B. $-\dfrac16$
C. $\dfrac16$
D. $-\infty$
::key B
$\sin x-x=-\dfrac{x^3}{6}+\dfrac{x^5}{120}-\dots$, nên thương tiến tới $-\dfrac16$.

::mc
Tích phân $\displaystyle\int_0^{\pi/4}\sec^2x\,dx$ bằng
A. $2$
B. $\dfrac\pi4$
C. $\sqrt2$
D. $1$
::key D
$\left[\tan x\right]_0^{\pi/4}=1$.

::mc
Cho $F(x)=\displaystyle\int_0^x\left(t^2-4\right)dt$. Hàm $F$ đạt cực đại tại $x$ bằng
A. $2$
B. $0$
C. $-2$
D. $4$
::key C
$F'(x)=x^2-4$ đổi dấu từ dương sang âm tại $x=-2$. Tại $x=2$ nó đổi dấu từ âm sang dương: cực tiểu.

::mc
Diện tích miền trong góc phần tư thứ nhất giới hạn bởi $y=x$ và $y=x^3$ bằng
A. $\dfrac14$
B. $\dfrac12$
C. $\dfrac34$
D. $\dfrac{1}{12}$
::key A
$\displaystyle\int_0^1\left(x-x^3\right)dx=\frac12-\frac14$.

::mc
Hàm $f$ có $f(0)=2$, $f(1)=4$ và $f(3)=8$. Tổng hình thang của $\displaystyle\int_0^3f(x)\,dx$ với hai khoảng $[0,1]$ và $[1,3]$ bằng
A. $14$
B. $18$
C. $15$
D. $9$
::key C
$1\cdot\dfrac{2+4}{2}+2\cdot\dfrac{4+8}{2}=3+12=15$. Phương án D coi cả hai khoảng có độ rộng $1$.

::mc
Giá trị trung bình của $e^x$ trên $[0,\ln3]$ bằng
A. $2$
B. $\dfrac{3}{\ln3}$
C. $\dfrac{2}{\ln3}$
D. $\dfrac{1}{\ln3}$
::key C
$\dfrac{1}{\ln3}\displaystyle\int_0^{\ln3}e^x\,dx=\dfrac{3-1}{\ln3}$. Phương án A quên chia cho $\ln3$.
:::

## Part B: dùng máy tính vẽ đồ thị

:::quiz test
::mc
Diện tích miền giới hạn bởi đường cong cực $r=2+\sin(3\theta)$ là
A. $12{,}566$
B. $28{,}274$
C. $14{,}137$
D. $7{,}069$
::key C
$\dfrac12\displaystyle\int_0^{2\pi}\left(2+\sin3\theta\right)^2d\theta\approx14{,}137$. Phương án B quên hệ số $\dfrac12$.

::mc
Độ dài quỹ đạo $x=t+\cos t$, $y=\sin t$ với $0\le t\le\pi$ là
A. $2{,}343$
B. $5{,}657$
C. $3{,}142$
D. $4{,}000$
::key A
Tốc độ $\sqrt{(1-\sin t)^2+\cos^2t}=\sqrt{2-2\sin t}$; $\displaystyle\int_0^\pi\sqrt{2-2\sin t}\,dt\approx2{,}343$. Phương án B dùng $1+\sin t$.

::mc
Một hạt có vận tốc $v(t)=\left\langle e^{0{,}2t},\cos t\right\rangle$ và ở điểm $(1,0)$ lúc $t=0$. Hoành độ của hạt lúc $t=3$ là
A. $4{,}111$
B. $5{,}111$
C. $1{,}822$
D. $2{,}822$
::key B
$x(3)=1+\displaystyle\int_0^3e^{0{,}2t}\,dt\approx1+4{,}111$. Phương án A quên vị trí ban đầu; phương án C là $e^{0{,}6}$.

::mc
Với $\dfrac{dy}{dx}=\sin(xy)$ và $y(0)=1$, phương pháp Euler với hai bước độ dài $0{,}5$ cho giá trị gần đúng nào của $y(1)$?
A. $1{,}000$
B. $1{,}479$
C. $1{,}421$
D. $1{,}240$
::key D
Bước một: hệ số góc $\sin0=0$, nên $y(0{,}5)\approx1$. Bước hai: hệ số góc $\sin0{,}5\approx0{,}479$, nên $y(1)\approx1+0{,}5(0{,}479)\approx1{,}240$.

::mc
Miền dưới $y=\sqrt x\,e^{-x}$ với $0\le x\le2$ quay quanh trục $x$. Thể tích khối tạo thành là
A. $0{,}713$
B. $0{,}227$
C. $2{,}056$
D. $1{,}427$
::key A
$\pi\displaystyle\int_0^2xe^{-2x}\,dx\approx0{,}713$. Phương án B quên $\pi$; phương án C không bình phương bán kính.

::mc
Tích phân $\displaystyle\int_0^1e^{-x^2}\,dx$ bằng
A. $0{,}632$
B. $0{,}368$
C. $0{,}747$
D. $0{,}843$
::key C
Tính tích phân bằng máy được $0{,}747$. Phương án A là $\displaystyle\int_0^1e^{-x}\,dx$.

::mc
Hệ số góc của đường cong cực $r=1+2\sin\theta$ tại $\theta=\dfrac\pi6$ là
A. $1{,}732$
B. $0{,}577$
C. $-5{,}196$
D. $5{,}196$
::key D
$r=2$, $r'=2\cos\dfrac\pi6\approx1{,}732$; $\dfrac{r'\sin\theta+r\cos\theta}{r'\cos\theta-r\sin\theta}\approx5{,}196$. Phương án A là $\dfrac{dr}{d\theta}$.

::mc
Một hạt chuyển động với $\dfrac{dx}{dt}=\cos\left(t^2\right)$ và $\dfrac{dy}{dt}=t$, $0<t<2$. Tại thời điểm nào hạt chuyển động theo phương thẳng đứng?
A. $1{,}571$
B. $1{,}253$
C. $0{,}785$
D. $1{,}000$
::key B
$\cos\left(t^2\right)=0$ khi $t^2=\dfrac\pi2$, nên $t\approx1{,}253$, tại đó $\dfrac{dy}{dt}\ne0$. Phương án A là $t^2$.

::mc
Một đại lượng thoả mãn $\dfrac{dy}{dt}=0{,}3y$ với $y(0)=50$. Đến thời điểm nào $y$ đạt $200$?
A. $4{,}621$
B. $2{,}310$
C. $10{,}000$
D. $13{,}333$
::key A
$50e^{0{,}3t}=200$, nên $t=\dfrac{\ln4}{0{,}3}\approx4{,}621$. Phương án B dùng $\ln2$.

::mc
Giá trị trung bình của $f(x)=x\sin x$ trên $[0,\pi]$ là
A. $3{,}142$
B. $0{,}500$
C. $1{,}820$
D. $1{,}000$
::key D
$\dfrac1\pi\displaystyle\int_0^\pi x\sin x\,dx=\dfrac\pi\pi=1$. Phương án A là tích phân.

::mc
Diện tích miền nằm trong $r=3\sin\theta$ và nằm ngoài $r=1+\sin\theta$ là
A. $6{,}283$
B. $3{,}142$
C. $1{,}571$
D. $4{,}712$
::key B
Hai đường cắt nhau khi $\sin\theta=\dfrac12$: $\dfrac12\displaystyle\int_{\pi/6}^{5\pi/6}\left(9\sin^2\theta-(1+\sin\theta)^2\right)d\theta\approx3{,}142$.

::mc
Hàm $f$ có $f(0)=2$ và $f'(x)=\dfrac{e^x}{1+x^2}$. Giá trị $f(1)$ là
A. $1{,}271$
B. $3{,}359$
C. $3{,}271$
D. $2{,}000$
::key C
$f(1)=2+\displaystyle\int_0^1\frac{e^x}{1+x^2}\,dx\approx2+1{,}271$. Phương án A quên $f(0)$.

::mc
Tổng riêng $S_{10}=\displaystyle\sum_{n=1}^{10}\frac{1}{n^2}$ được dùng để xấp xỉ $\displaystyle\sum_{n=1}^\infty\frac{1}{n^2}$. Giá trị $S_{10}$ là
A. $1{,}645$
B. $2{,}929$
C. $1{,}540$
D. $1{,}550$
::key D
Cộng mười số hạng được $1{,}550$. Phương án A là tổng của cả chuỗi $\dfrac{\pi^2}{6}$; phương án B là $\displaystyle\sum_{n=1}^{10}\frac1n$.
:::

## Sau khi làm đề

Part A tính trên 29 câu và Part B trên 13 câu. Bảng dưới cho biết mỗi câu sai cần ôn lại bài nào. Tạm tính, đúng từ 30 câu trở lên trên 42 câu cho thấy phần trắc nghiệm của bạn đã vững; dưới 20 câu, hãy quay lại các bài học trước khi làm đề mới.

| Câu | Bài cần ôn |
|---|---|
| 1 | [Đạo hàm trong ngữ cảnh, chuyển động và tốc độ liên quan](lesson:apcalc-contextual-applications) |
| 2 | [Đạo hàm trong ngữ cảnh, chuyển động và tốc độ liên quan](lesson:apcalc-contextual-applications) |
| 3 | [Đạo hàm hàm hợp, hàm ẩn và hàm ngược](lesson:apcalc-implicit-inverse) |
| 4 | [Đạo hàm hàm hợp, hàm ẩn và hàm ngược](lesson:apcalc-implicit-inverse) |
| 5 | [Đạo hàm hàm hợp, hàm ẩn và hàm ngược](lesson:apcalc-implicit-inverse) |
| 6 | [Phương trình vi phân và trường hướng](lesson:apcalc-differential-equations) |
| 7 | [Phương trình vi phân và trường hướng](lesson:apcalc-differential-equations) |
| 8 | [Kĩ thuật tính tích phân](lesson:apcalc-integration-techniques) |
| 9 | [Kĩ thuật tính tích phân](lesson:apcalc-integration-techniques) |
| 10 | [Kĩ thuật tính tích phân](lesson:apcalc-integration-techniques) |
| 11 | [Kĩ thuật tính tích phân](lesson:apcalc-integration-techniques) |
| 12 | [Hàm tham số, hàm véc-tơ và toạ độ cực](lesson:apcalc-bc-parametric-polar) |
| 13 | [Hàm tham số, hàm véc-tơ và toạ độ cực](lesson:apcalc-bc-parametric-polar) |
| 14 | [Hàm tham số, hàm véc-tơ và toạ độ cực](lesson:apcalc-bc-parametric-polar) |
| 15 | [Hàm tham số, hàm véc-tơ và toạ độ cực](lesson:apcalc-bc-parametric-polar) |
| 16 | [Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa](lesson:apcalc-bc-series) |
| 17 | [Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa](lesson:apcalc-bc-series) |
| 18 | [Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa](lesson:apcalc-bc-series) |
| 19 | [Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa](lesson:apcalc-bc-series) |
| 20 | [Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa](lesson:apcalc-bc-series) |
| 21 | [Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa](lesson:apcalc-bc-series) |
| 22 | [Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa](lesson:apcalc-bc-series) |
| 23 | [Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa](lesson:apcalc-bc-series) |
| 24 | [Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa](lesson:apcalc-bc-series) |
| 25 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 26 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 27 | [Diện tích, thể tích và giá trị trung bình](lesson:apcalc-area-volume) |
| 28 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 29 | [Diện tích, thể tích và giá trị trung bình](lesson:apcalc-area-volume) |
| 30 | [Hàm tham số, hàm véc-tơ và toạ độ cực](lesson:apcalc-bc-parametric-polar) |
| 31 | [Hàm tham số, hàm véc-tơ và toạ độ cực](lesson:apcalc-bc-parametric-polar) |
| 32 | [Hàm tham số, hàm véc-tơ và toạ độ cực](lesson:apcalc-bc-parametric-polar) |
| 33 | [Phương trình vi phân và trường hướng](lesson:apcalc-differential-equations) |
| 34 | [Diện tích, thể tích và giá trị trung bình](lesson:apcalc-area-volume) |
| 35 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 36 | [Hàm tham số, hàm véc-tơ và toạ độ cực](lesson:apcalc-bc-parametric-polar) |
| 37 | [Hàm tham số, hàm véc-tơ và toạ độ cực](lesson:apcalc-bc-parametric-polar) |
| 38 | [Phương trình vi phân và trường hướng](lesson:apcalc-differential-equations) |
| 39 | [Diện tích, thể tích và giá trị trung bình](lesson:apcalc-area-volume) |
| 40 | [Hàm tham số, hàm véc-tơ và toạ độ cực](lesson:apcalc-bc-parametric-polar) |
| 41 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 42 | [Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa](lesson:apcalc-bc-series) |

Ôn lại bằng các cách trong bài [Ôn thi theo khoa học](lesson:evidence-based-revision) trước khi làm đề đầy đủ tiếp theo.
