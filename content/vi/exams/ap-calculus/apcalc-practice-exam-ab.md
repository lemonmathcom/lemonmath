---
title: Đề luyện AP Calculus AB: phần trắc nghiệm
description: Trọn phần trắc nghiệm AP Calculus AB theo cấu trúc 2027: 42 câu, 29 câu không và 13 câu có máy tính, chấm điểm ngay, có lời giải từng câu.
minutes: 100
type: test
---

Đây là trọn phần trắc nghiệm theo cấu trúc đề AP Calculus AB từ tháng 5/2027. Mọi câu hỏi đều do Lemonmath soạn; đây không phải câu hỏi AP thật, nhưng bám theo các unit và kiểu câu chính thức. Phần trắc nghiệm chiếm một nửa điểm AP; với nửa còn lại, hãy luyện các câu tự luận đã công bố cùng bài [Các dạng câu tự luận AP Calculus và cách trình bày](lesson:apcalc-frq-strategies).

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
Giới hạn $\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}$ bằng
A. $0$
B. $3$
C. $6$
D. không tồn tại
::key C
$\dfrac{(x-3)(x+3)}{x-3}=x+3\to6$. Phương án D coi $\dfrac00$ là không tồn tại thay vì rút gọn.

::mc
Giới hạn $\displaystyle\lim_{x\to\infty}\frac{3x^2-x}{5-2x^2}$ bằng
A. $\dfrac35$
B. $-\dfrac32$
C. $0$
D. $\dfrac32$
::key B
Bậc tử và mẫu bằng nhau: tỉ số các hệ số cao nhất là $\dfrac{3}{-2}$.

::mc
Cho $f(x)=x^2+1$ khi $x<2$ và $f(x)=kx-1$ khi $x\ge2$. Với giá trị nào của $k$ thì $f$ liên tục tại $x=2$?
A. $2$
B. $\dfrac52$
C. $4$
D. $3$
::key D
Giới hạn trái bằng $5$, nên $2k-1=5$ và $k=3$. Phương án B giải $2k=5$.

::mc
Giới hạn $\displaystyle\lim_{h\to0}\frac{\sin\left(\frac\pi3+h\right)-\sin\frac\pi3}{h}$ bằng
A. $\dfrac12$
B. $\dfrac{\sqrt3}{2}$
C. $0$
D. $-\dfrac12$
::key A
Đây là đạo hàm của $\sin x$ tại $\dfrac\pi3$: $\cos\dfrac\pi3=\dfrac12$.

::mc
Nếu $f(x)=x^3e^{2x}$ thì $f'(x)$ bằng
A. $6x^2e^{2x}$
B. $3x^2e^{2x}$
C. $x^2e^{2x}(3+2x)$
D. $x^2e^{2x}(3+x)$
::key C
Quy tắc tích: $3x^2e^{2x}+x^3\cdot2e^{2x}=x^2e^{2x}(3+2x)$. Phương án A nhân hai đạo hàm với nhau.

::mc
Nếu $f(x)=\ln\left(x^2+1\right)$ thì $f'(1)$ bằng
A. $\dfrac12$
B. $1$
C. $2$
D. $\ln2$
::key B
$f'(x)=\dfrac{2x}{x^2+1}$, nên $f'(1)=1$.

::mc
Nếu $y=\tan(3x)$ thì $\dfrac{dy}{dx}$ tại $x=0$ bằng
A. $0$
B. $1$
C. $9$
D. $3$
::key D
$\dfrac{dy}{dx}=3\sec^2(3x)$, bằng $3$ tại $x=0$.

::mc
Các hàm $f$ và $g$ thoả mãn $g(2)=5$, $g'(2)=4$, $f'(2)=-1$ và $f'(5)=2$. Nếu $h(x)=f(g(x))$ thì $h'(2)$ bằng
A. $8$
B. $-4$
C. $6$
D. $2$
::key A
$h'(2)=f'(g(2))\cdot g'(2)=f'(5)\cdot4=8$. Phương án B dùng $f'(2)$ thay cho $f'(5)$.

::mc
Hệ số góc của đường cong $x^2+xy+y^2=7$ tại điểm $(1,2)$ bằng
A. $-\dfrac54$
B. $-\dfrac45$
C. $\dfrac45$
D. $-4$
::key B
$2x+y+xy'+2yy'=0$. Tại $(1,2)$: $4+5y'=0$, nên $y'=-\dfrac45$.

::mc
Cho $f(x)=x^3+x$ và gọi $g$ là hàm ngược của $f$. Giá trị $g'(2)$ bằng
A. $\dfrac{1}{13}$
B. $4$
C. $\dfrac14$
D. $\dfrac12$
::key C
$f(1)=2$ và $f'(1)=4$, nên $g'(2)=\dfrac{1}{f'(1)}=\dfrac14$. Phương án A dùng $f'(2)=13$.

::mc
$\dfrac{d}{dx}\arctan(2x)$ bằng
A. $\dfrac{1}{1+4x^2}$
B. $\dfrac{2}{1+2x^2}$
C. $\dfrac{2}{\sqrt{1-4x^2}}$
D. $\dfrac{2}{1+4x^2}$
::key D
$\dfrac{1}{1+(2x)^2}\cdot2$. Phương án A quên quy tắc chuỗi; phương án C là đạo hàm của $\arcsin(2x)$.

::mc
Một hạt chuyển động trên trục $x$ với vị trí $x(t)=t^3-6t^2+9t$. Hạt đứng yên tại những thời điểm nào?
A. chỉ $t=1$
B. chỉ $t=2$
C. $t=1$ và $t=3$
D. $t=0$ và $t=3$
::key C
$v(t)=3t^2-12t+9=3(t-1)(t-3)=0$. Phương án B là lúc gia tốc bằng $0$; phương án D là lúc vị trí bằng $0$.

::mc
Bán kính một hình tròn tăng với tốc độ $2$ xăng-ti-mét mỗi giây. Khi bán kính bằng $5$ xăng-ti-mét, diện tích tăng với tốc độ bao nhiêu xăng-ti-mét vuông mỗi giây?
A. $20\pi$
B. $10\pi$
C. $25\pi$
D. $4\pi$
::key A
$\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}=2\pi(5)(2)=20\pi$.

::mc
Dùng tiếp tuyến của $y=\sqrt x$ tại $x=9$, giá trị gần đúng của $\sqrt{9{,}3}$ là
A. $3{,}1$
B. $3{,}03$
C. $3{,}5$
D. $3{,}05$
::key D
$3+\dfrac{1}{6}(0{,}3)=3{,}05$.

::mc
Giới hạn $\displaystyle\lim_{x\to0}\frac{e^{3x}-1}{x}$ bằng
A. $1$
B. $3$
C. $0$
D. $e^3$
::key B
Dạng $\dfrac00$; quy tắc L'Hôpital cho $\displaystyle\lim_{x\to0}3e^{3x}=3$.

::mc
Với $f(x)=x^2$ trên $[1,3]$, giá trị $c$ nào thoả mãn kết luận của định lí giá trị trung bình?
A. $2$
B. $\sqrt5$
C. $4$
D. $\sqrt3$
::key A
$\dfrac{9-1}{3-1}=4=2c$, nên $c=2$. Phương án C là hệ số góc, không phải $c$.

::mc
Đạo hàm của $f$ là $f'(x)=(x-2)^2(x+1)$. Hàm $f$ đạt cực tiểu tại những giá trị nào của $x$?
A. chỉ $x=2$
B. $x=-1$ và $x=2$
C. không có
D. chỉ $x=-1$
::key D
$f'$ đổi dấu từ âm sang dương tại $x=-1$; tại $x=2$ nó không đổi dấu.

::mc
Đồ thị $f(x)=x^3-6x^2+5$ có điểm uốn tại $x$ bằng
A. $0$
B. $4$
C. $2$
D. $-2$
::key C
$f''(x)=6x-12$ đổi dấu tại $x=2$. Phương án B là một điểm tới hạn.

::mc
Giá trị lớn nhất của $f(x)=x^3-3x$ trên $[0,2]$ là
A. $0$
B. $2$
C. $-2$
D. $1$
::key B
Các ứng viên: $f(0)=0$, $f(1)=-2$, $f(2)=2$.

::mc
Hàm $f$ có đạo hàm cấp hai, $f'(3)=0$ và $f''(3)=-2$. Khẳng định nào chắc chắn đúng?
A. $f$ đạt cực đại tại $x=3$.
B. $f$ đạt cực tiểu tại $x=3$.
C. Đồ thị $f$ có điểm uốn tại $x=3$.
D. $f$ nghịch biến tại $x=3$.
::key A
Dấu hiệu đạo hàm cấp hai: $f'(3)=0$ và $f''(3)<0$.

::mc
Tích phân $\displaystyle\int_0^2\left(3x^2-4x\right)dx$ bằng
A. $4$
B. $-4$
C. $8$
D. $0$
::key D
$\left[x^3-2x^2\right]_0^2=8-8=0$.

::mc
Tích phân $\displaystyle\int_0^{\sqrt5}x\sqrt{x^2+4}\,dx$ bằng
A. $\dfrac{38}{3}$
B. $\dfrac{19}{3}$
C. $\dfrac{19}{6}$
D. $\dfrac{26}{3}$
::key B
$u=x^2+4$ từ $4$ đến $9$: $\dfrac12\cdot\dfrac23\left(27-8\right)=\dfrac{19}{3}$. Phương án A quên $\dfrac12$.

::mc
$\dfrac{d}{dx}\displaystyle\int_1^{x^3}\cos t\,dt$ bằng
A. $\cos\left(x^3\right)$
B. $3x^2\cos\left(x^3\right)-\cos1$
C. $3x^2\cos\left(x^3\right)$
D. $\sin\left(x^3\right)-\sin1$
::key C
Định lí cơ bản kết hợp quy tắc chuỗi: $\cos\left(x^3\right)\cdot3x^2$. Cận dưới là hằng số nên không đóng góp gì.

::mc
Hàm $f$ có $f(0)=4$, $f(2)=1$, $f(5)=3$ và $f(6)=2$. Tổng Riemann trái của $\displaystyle\int_0^6f(x)\,dx$ với ba khoảng $[0,2]$, $[2,5]$, $[5,6]$ bằng
A. $13$
B. $13{,}5$
C. $11$
D. $14$
::key D
$2\cdot4+3\cdot1+1\cdot3=14$. Phương án A là tổng phải, phương án B là tổng hình thang, phương án C coi các khoảng bằng nhau.

::mc
Tích phân $\displaystyle\int_1^e\frac{\ln x}{x}\,dx$ bằng
A. $\dfrac12$
B. $1$
C. $e$
D. $\dfrac{e^2}{2}$
::key A
$u=\ln x$ từ $0$ đến $1$: $\left[\dfrac{u^2}{2}\right]_0^1=\dfrac12$.

::mc
Nếu $\dfrac{dy}{dx}=3y$ và $y(0)=2$ thì $y(1)$ bằng
A. $2e^3$
B. $e^6$
C. $6e$
D. $2+e^3$
::key A
$y=2e^{3x}$, nên $y(1)=2e^3$.

::mc
Hàm nào là nghiệm của $\dfrac{dy}{dx}=\dfrac xy$ thoả mãn $y(0)=3$?
A. $y=\sqrt{x^2+3}$
B. $y=x+3$
C. $y=\sqrt{x^2+9}$
D. $y=3e^{x^2/2}$
::key C
$y\,dy=x\,dx$ cho $y^2=x^2+C$; $C=9$ và $y>0$. Phương án A quên bình phương số $3$.

::mc
Diện tích miền giới hạn bởi $y=x^2$ và $y=4$ bằng
A. $\dfrac{16}{3}$
B. $\dfrac{32}{3}$
C. $16$
D. $\dfrac83$
::key B
$\displaystyle\int_{-2}^2\left(4-x^2\right)dx=16-\frac{16}{3}=\frac{32}{3}$. Phương án A chỉ lấy $0\le x\le2$.

::mc
Giá trị trung bình của $\cos x$ trên $\left[0,\dfrac\pi2\right]$ bằng
A. $1$
B. $\dfrac1\pi$
C. $\dfrac\pi2$
D. $\dfrac2\pi$
::key D
$\dfrac{1}{\pi/2}\displaystyle\int_0^{\pi/2}\cos x\,dx=\dfrac2\pi\cdot1$. Phương án A quên chia cho độ dài khoảng.
:::

## Part B: dùng máy tính vẽ đồ thị

:::quiz test
::mc
Nước chảy vào một bể với tốc độ $R(t)=10+5\sin\left(\dfrac t2\right)$ lít mỗi phút. Từ $t=0$ đến $t=10$ có bao nhiêu lít nước chảy vào?
A. $97{,}603$
B. $107{,}163$
C. $110{,}000$
D. $5{,}205$
::key B
$\displaystyle\int_0^{10}R(t)\,dt\approx107{,}163$. Phương án D là $R(10)$, một tốc độ chứ không phải lượng nước.

::mc
Đồ thị $f(x)=x^3-2x-5$ cắt trục hoành tại $x$ bằng
A. $2{,}095$
B. $1{,}710$
C. $-5{,}000$
D. $2{,}000$
::key A
Giải $f(x)=0$ bằng máy tính: $x\approx2{,}095$, nghiệm thực duy nhất.

::mc
Một hạt chuyển động thẳng với vận tốc $v(t)=\cos\left(t^2\right)$, $0\le t\le2$. Tổng quãng đường hạt đi được là
A. $0{,}461$
B. $1{,}253$
C. $1{,}493$
D. $0{,}977$
::key C
$\displaystyle\int_0^2\left|\cos\left(t^2\right)\right|dt\approx1{,}493$. Phương án A là độ dời $\displaystyle\int_0^2v(t)\,dt$.

::mc
Hàm $f$ có $f(0)=1$ và $f'(x)=\sqrt{1+x^3}$. Giá trị $f(2)$ là
A. $3{,}000$
B. $3{,}241$
C. $5{,}241$
D. $4{,}241$
::key D
$f(2)=1+\displaystyle\int_0^2\sqrt{1+x^3}\,dx\approx1+3{,}241$. Phương án B quên $f(0)$.

::mc
Cho $g(x)=\ln\left(1+x^2\right)\cos x$. Giá trị $g'(2)$ là
A. $-1{,}796$
B. $-0{,}670$
C. $1{,}461$
D. $-0{,}333$
::key A
Đạo hàm số tại $x=2$: $g'(2)\approx-1{,}796$. Phương án B là $g(2)$.

::mc
Miền dưới $y=e^{-x}$ với $0\le x\le2$ quay quanh trục $x$. Thể tích khối tạo thành là
A. $0{,}865$
B. $2{,}716$
C. $1{,}542$
D. $0{,}491$
::key C
$\pi\displaystyle\int_0^2e^{-2x}\,dx\approx1{,}542$. Phương án B dùng $\pi\displaystyle\int_0^2e^{-x}\,dx$ (không bình phương bán kính).

::mc
Diện tích miền giới hạn bởi $y=\cos x$ và $y=x^2$ là
A. $0{,}824$
B. $1{,}095$
C. $0{,}547$
D. $1{,}648$
::key B
Hai đường cắt nhau tại $x=\pm0{,}824$; $\displaystyle\int_{-0{,}824}^{0{,}824}\left(\cos x-x^2\right)dx\approx1{,}095$. Phương án C là một nửa miền.

::mc
Giá trị trung bình của $f(x)=\ln(x+1)$ trên $[0,3]$ là
A. $2{,}545$
B. $1{,}386$
C. $0{,}462$
D. $0{,}848$
::key D
$\dfrac13\displaystyle\int_0^3\ln(x+1)\,dx\approx0{,}848$. Phương án A là tích phân; phương án C là tốc độ thay đổi trung bình.

::mc
Cho $f(x)=\arctan x+x^2$. Dùng tiếp tuyến của đồ thị $f$ tại $x=1$, giá trị gần đúng của $f(1{,}1)$ là
A. $2{,}035$
B. $2{,}043$
C. $1{,}785$
D. $2{,}500$
::key A
$f(1)\approx1{,}785$ và $f'(1)=\dfrac12+2=2{,}5$, nên $f(1{,}1)\approx1{,}785+0{,}25=2{,}035$. Phương án B là giá trị đúng.

::mc
Với $f(x)=\sqrt x$ trên $[1,4]$, giá trị $c$ nào thoả mãn kết luận của định lí giá trị trung bình?
A. $2{,}5$
B. $2{,}25$
C. $2$
D. $1{,}5$
::key B
$\dfrac{2-1}{4-1}=\dfrac13=\dfrac{1}{2\sqrt c}$, nên $\sqrt c=1{,}5$ và $c=2{,}25$. Phương án D là $\sqrt c$.

::mc
Dân số một thị trấn thay đổi với tốc độ $P'(t)=50-4te^{0{,}1t}$ người mỗi năm, $0\le t\le10$. Dân số lớn nhất vào thời điểm nào?
A. $t=0$
B. $t=10$
C. $t=3{,}162$
D. $t=6{,}515$
::key D
$P'$ chỉ đổi dấu từ dương sang âm tại $t\approx6{,}515$, nên dân số lớn nhất tại đó.

::mc
Một hạt chuyển động thẳng với vận tốc $v(t)=2\sin t+\cos(2t)$. Tổng quãng đường hạt đi được từ $t=0$ đến $t=4$ là
A. $3{,}802$
B. $1{,}659$
C. $4{,}602$
D. $3{,}516$
::key C
$v$ đổi dấu tại $t\approx3{,}516$; $\displaystyle\int_0^4|v(t)|\,dt\approx4{,}602$. Phương án A là độ dời.

::mc
Một hạt có vận tốc $v(t)=\ln\left(t^2+1\right)-1$. Tại $t=1{,}5$, khẳng định nào đúng?
A. Hạt đi sang trái và chậm dần.
B. Hạt đi sang phải và chậm dần.
C. Hạt đi sang trái và nhanh dần.
D. Hạt đi sang phải và nhanh dần.
::key D
$v(1{,}5)\approx0{,}179>0$ và $a(1{,}5)=\dfrac{3}{3{,}25}\approx0{,}923>0$: cùng dấu, nên hạt đi sang phải và nhanh dần.
:::

## Sau khi làm đề

Part A tính trên 29 câu và Part B trên 13 câu. Bảng dưới cho biết mỗi câu sai cần ôn lại bài nào. Tạm tính, đúng từ 30 câu trở lên trên 42 câu cho thấy phần trắc nghiệm của bạn đã vững; dưới 20 câu, hãy quay lại các bài học trước khi làm đề mới.

| Câu | Bài cần ôn |
|---|---|
| 1 | [Giới hạn và tính liên tục](lesson:apcalc-limits-continuity) |
| 2 | [Giới hạn và tính liên tục](lesson:apcalc-limits-continuity) |
| 3 | [Giới hạn và tính liên tục](lesson:apcalc-limits-continuity) |
| 4 | [Định nghĩa đạo hàm và các quy tắc tính](lesson:apcalc-differentiation-rules) |
| 5 | [Định nghĩa đạo hàm và các quy tắc tính](lesson:apcalc-differentiation-rules) |
| 6 | [Đạo hàm hàm hợp, hàm ẩn và hàm ngược](lesson:apcalc-implicit-inverse) |
| 7 | [Đạo hàm hàm hợp, hàm ẩn và hàm ngược](lesson:apcalc-implicit-inverse) |
| 8 | [Đạo hàm hàm hợp, hàm ẩn và hàm ngược](lesson:apcalc-implicit-inverse) |
| 9 | [Đạo hàm hàm hợp, hàm ẩn và hàm ngược](lesson:apcalc-implicit-inverse) |
| 10 | [Đạo hàm hàm hợp, hàm ẩn và hàm ngược](lesson:apcalc-implicit-inverse) |
| 11 | [Đạo hàm hàm hợp, hàm ẩn và hàm ngược](lesson:apcalc-implicit-inverse) |
| 12 | [Đạo hàm trong ngữ cảnh, chuyển động và tốc độ liên quan](lesson:apcalc-contextual-applications) |
| 13 | [Đạo hàm trong ngữ cảnh, chuyển động và tốc độ liên quan](lesson:apcalc-contextual-applications) |
| 14 | [Đạo hàm trong ngữ cảnh, chuyển động và tốc độ liên quan](lesson:apcalc-contextual-applications) |
| 15 | [Đạo hàm trong ngữ cảnh, chuyển động và tốc độ liên quan](lesson:apcalc-contextual-applications) |
| 16 | [Định lí giá trị trung bình, cực trị và khảo sát](lesson:apcalc-analytical-applications) |
| 17 | [Định lí giá trị trung bình, cực trị và khảo sát](lesson:apcalc-analytical-applications) |
| 18 | [Định lí giá trị trung bình, cực trị và khảo sát](lesson:apcalc-analytical-applications) |
| 19 | [Định lí giá trị trung bình, cực trị và khảo sát](lesson:apcalc-analytical-applications) |
| 20 | [Định lí giá trị trung bình, cực trị và khảo sát](lesson:apcalc-analytical-applications) |
| 21 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 22 | [Kĩ thuật tính tích phân](lesson:apcalc-integration-techniques) |
| 23 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 24 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 25 | [Kĩ thuật tính tích phân](lesson:apcalc-integration-techniques) |
| 26 | [Phương trình vi phân và trường hướng](lesson:apcalc-differential-equations) |
| 27 | [Phương trình vi phân và trường hướng](lesson:apcalc-differential-equations) |
| 28 | [Diện tích, thể tích và giá trị trung bình](lesson:apcalc-area-volume) |
| 29 | [Diện tích, thể tích và giá trị trung bình](lesson:apcalc-area-volume) |
| 30 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 31 | [Định lí giá trị trung bình, cực trị và khảo sát](lesson:apcalc-analytical-applications) |
| 32 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 33 | [Tổng Riemann, tích luỹ và định lí cơ bản](lesson:apcalc-accumulation-ftc) |
| 34 | [Định nghĩa đạo hàm và các quy tắc tính](lesson:apcalc-differentiation-rules) |
| 35 | [Diện tích, thể tích và giá trị trung bình](lesson:apcalc-area-volume) |
| 36 | [Diện tích, thể tích và giá trị trung bình](lesson:apcalc-area-volume) |
| 37 | [Diện tích, thể tích và giá trị trung bình](lesson:apcalc-area-volume) |
| 38 | [Đạo hàm trong ngữ cảnh, chuyển động và tốc độ liên quan](lesson:apcalc-contextual-applications) |
| 39 | [Định lí giá trị trung bình, cực trị và khảo sát](lesson:apcalc-analytical-applications) |
| 40 | [Định lí giá trị trung bình, cực trị và khảo sát](lesson:apcalc-analytical-applications) |
| 41 | [Đạo hàm trong ngữ cảnh, chuyển động và tốc độ liên quan](lesson:apcalc-contextual-applications) |
| 42 | [Đạo hàm trong ngữ cảnh, chuyển động và tốc độ liên quan](lesson:apcalc-contextual-applications) |

Ôn lại bằng các cách trong bài [Ôn thi theo khoa học](lesson:evidence-based-revision) trước khi làm đề đầy đủ tiếp theo.
