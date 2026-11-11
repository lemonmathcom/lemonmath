# Generates the AP Calculus AB practice exam (multiple-choice section, EN + VI) from one bilingual question bank.
# Format from May 2027: Part A 29 questions / 62 minutes, no calculator; Part B 13 questions / 38 minutes, graphing calculator.
import os, re, copy, pathlib
from collections import Counter
R = str(pathlib.Path(__file__).resolve().parents[2] / 'content') + '/'

def vi_num(s):
    # decimal point -> {,} inside numbers (only used for options)
    return re.sub(r'(\d)\.(\d)', r'\1{,}\2', s)

def MC(en, vi, oe, key, xe, xv, topic, ov=None):
    return dict(en=en, vi=vi, oe=oe, ov=ov or [vi_num(o) for o in oe], key=key, xe=xe, xv=xv, topic=topic)

L = {'lim': 'apcalc-limits-continuity', 'der': 'apcalc-differentiation-rules', 'chain': 'apcalc-implicit-inverse',
     'ctx': 'apcalc-contextual-applications', 'ana': 'apcalc-analytical-applications', 'acc': 'apcalc-accumulation-ftc',
     'tech': 'apcalc-integration-techniques', 'de': 'apcalc-differential-equations', 'av': 'apcalc-area-volume',
     'pp': 'apcalc-bc-parametric-polar', 'ser': 'apcalc-bc-series'}

AB_A = [
MC(r"What is $\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}$?", r"Giới hạn $\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}$ bằng",
   ["$0$", "$3$", "$6$", "nonexistent"], "C",
   r"$\dfrac{(x-3)(x+3)}{x-3}=x+3\to6$. Option D treats $\dfrac00$ as undefined instead of simplifying.",
   r"$\dfrac{(x-3)(x+3)}{x-3}=x+3\to6$. Phương án D coi $\dfrac00$ là không tồn tại thay vì rút gọn.", 'lim',
   ov=["$0$", "$3$", "$6$", "không tồn tại"]),
MC(r"What is $\displaystyle\lim_{x\to\infty}\frac{3x^2-x}{5-2x^2}$?", r"Giới hạn $\displaystyle\lim_{x\to\infty}\frac{3x^2-x}{5-2x^2}$ bằng",
   [r"$\dfrac35$", r"$-\dfrac32$", "$0$", r"$\dfrac32$"], "B",
   r"Equal degrees: the ratio of the leading coefficients is $\dfrac{3}{-2}$.",
   r"Bậc tử và mẫu bằng nhau: tỉ số các hệ số cao nhất là $\dfrac{3}{-2}$.", 'lim'),
MC(r"Let $f(x)=x^2+1$ for $x<2$ and $f(x)=kx-1$ for $x\ge2$. For what value of $k$ is $f$ continuous at $x=2$?",
   r"Cho $f(x)=x^2+1$ khi $x<2$ và $f(x)=kx-1$ khi $x\ge2$. Với giá trị nào của $k$ thì $f$ liên tục tại $x=2$?",
   ["$2$", r"$\dfrac52$", "$4$", "$3$"], "D",
   r"The left limit is $5$, so $2k-1=5$ and $k=3$. Option B solves $2k=5$.",
   r"Giới hạn trái bằng $5$, nên $2k-1=5$ và $k=3$. Phương án B giải $2k=5$.", 'lim'),
MC(r"What is $\displaystyle\lim_{h\to0}\frac{\sin\left(\frac\pi3+h\right)-\sin\frac\pi3}{h}$?",
   r"Giới hạn $\displaystyle\lim_{h\to0}\frac{\sin\left(\frac\pi3+h\right)-\sin\frac\pi3}{h}$ bằng",
   [r"$\dfrac12$", r"$\dfrac{\sqrt3}{2}$", "$0$", r"$-\dfrac12$"], "A",
   r"It is the derivative of $\sin x$ at $\dfrac\pi3$: $\cos\dfrac\pi3=\dfrac12$.",
   r"Đây là đạo hàm của $\sin x$ tại $\dfrac\pi3$: $\cos\dfrac\pi3=\dfrac12$.", 'der'),
MC(r"If $f(x)=x^3e^{2x}$, then $f'(x)=$", r"Nếu $f(x)=x^3e^{2x}$ thì $f'(x)$ bằng",
   [r"$6x^2e^{2x}$", r"$3x^2e^{2x}$", r"$x^2e^{2x}(3+2x)$", r"$x^2e^{2x}(3+x)$"], "C",
   r"Product rule: $3x^2e^{2x}+x^3\cdot2e^{2x}=x^2e^{2x}(3+2x)$. Option A multiplies the two derivatives.",
   r"Quy tắc tích: $3x^2e^{2x}+x^3\cdot2e^{2x}=x^2e^{2x}(3+2x)$. Phương án A nhân hai đạo hàm với nhau.", 'der'),
MC(r"If $f(x)=\ln\left(x^2+1\right)$, what is $f'(1)$?", r"Nếu $f(x)=\ln\left(x^2+1\right)$ thì $f'(1)$ bằng",
   [r"$\dfrac12$", "$1$", "$2$", r"$\ln2$"], "B",
   r"$f'(x)=\dfrac{2x}{x^2+1}$, so $f'(1)=1$.", r"$f'(x)=\dfrac{2x}{x^2+1}$, nên $f'(1)=1$.", 'chain'),
MC(r"If $y=\tan(3x)$, what is $\dfrac{dy}{dx}$ at $x=0$?", r"Nếu $y=\tan(3x)$ thì $\dfrac{dy}{dx}$ tại $x=0$ bằng",
   ["$0$", "$1$", "$9$", "$3$"], "D",
   r"$\dfrac{dy}{dx}=3\sec^2(3x)$, which is $3$ at $x=0$.", r"$\dfrac{dy}{dx}=3\sec^2(3x)$, bằng $3$ tại $x=0$.", 'chain'),
MC(r"Functions $f$ and $g$ satisfy $g(2)=5$, $g'(2)=4$, $f'(2)=-1$ and $f'(5)=2$. If $h(x)=f(g(x))$, what is $h'(2)$?",
   r"Các hàm $f$ và $g$ thoả mãn $g(2)=5$, $g'(2)=4$, $f'(2)=-1$ và $f'(5)=2$. Nếu $h(x)=f(g(x))$ thì $h'(2)$ bằng",
   ["$8$", "$-4$", "$6$", "$2$"], "A",
   r"$h'(2)=f'(g(2))\cdot g'(2)=f'(5)\cdot4=8$. Option B uses $f'(2)$ instead of $f'(5)$.",
   r"$h'(2)=f'(g(2))\cdot g'(2)=f'(5)\cdot4=8$. Phương án B dùng $f'(2)$ thay cho $f'(5)$.", 'chain'),
MC(r"What is the slope of the curve $x^2+xy+y^2=7$ at the point $(1,2)$?", r"Hệ số góc của đường cong $x^2+xy+y^2=7$ tại điểm $(1,2)$ bằng",
   [r"$-\dfrac54$", r"$-\dfrac45$", r"$\dfrac45$", "$-4$"], "B",
   r"$2x+y+xy'+2yy'=0$. At $(1,2)$: $4+5y'=0$, so $y'=-\dfrac45$.",
   r"$2x+y+xy'+2yy'=0$. Tại $(1,2)$: $4+5y'=0$, nên $y'=-\dfrac45$.", 'chain'),
MC(r"Let $f(x)=x^3+x$ and let $g$ be the inverse function of $f$. What is $g'(2)$?",
   r"Cho $f(x)=x^3+x$ và gọi $g$ là hàm ngược của $f$. Giá trị $g'(2)$ bằng",
   [r"$\dfrac{1}{13}$", "$4$", r"$\dfrac14$", r"$\dfrac12$"], "C",
   r"$f(1)=2$ and $f'(1)=4$, so $g'(2)=\dfrac{1}{f'(1)}=\dfrac14$. Option A uses $f'(2)=13$.",
   r"$f(1)=2$ và $f'(1)=4$, nên $g'(2)=\dfrac{1}{f'(1)}=\dfrac14$. Phương án A dùng $f'(2)=13$.", 'chain'),
MC(r"$\dfrac{d}{dx}\arctan(2x)=$", r"$\dfrac{d}{dx}\arctan(2x)$ bằng",
   [r"$\dfrac{1}{1+4x^2}$", r"$\dfrac{2}{1+2x^2}$", r"$\dfrac{2}{\sqrt{1-4x^2}}$", r"$\dfrac{2}{1+4x^2}$"], "D",
   r"$\dfrac{1}{1+(2x)^2}\cdot2$. Option A forgets the chain rule; option C is the derivative of $\arcsin(2x)$.",
   r"$\dfrac{1}{1+(2x)^2}\cdot2$. Phương án A quên quy tắc chuỗi; phương án C là đạo hàm của $\arcsin(2x)$.", 'chain'),
MC(r"A particle moves along the $x$-axis with position $x(t)=t^3-6t^2+9t$. At which times is the particle at rest?",
   r"Một hạt chuyển động trên trục $x$ với vị trí $x(t)=t^3-6t^2+9t$. Hạt đứng yên tại những thời điểm nào?",
   ["$t=1$ only", "$t=2$ only", "$t=1$ and $t=3$", "$t=0$ and $t=3$"], "C",
   r"$v(t)=3t^2-12t+9=3(t-1)(t-3)=0$. Option B is where the acceleration is $0$; option D is where the position is $0$.",
   r"$v(t)=3t^2-12t+9=3(t-1)(t-3)=0$. Phương án B là lúc gia tốc bằng $0$; phương án D là lúc vị trí bằng $0$.", 'ctx',
   ov=["chỉ $t=1$", "chỉ $t=2$", "$t=1$ và $t=3$", "$t=0$ và $t=3$"]),
MC(r"The radius of a circle increases at $2$ centimeters per second. How fast is the area increasing when the radius is $5$ centimeters, in square centimeters per second?",
   r"Bán kính một hình tròn tăng với tốc độ $2$ xăng-ti-mét mỗi giây. Khi bán kính bằng $5$ xăng-ti-mét, diện tích tăng với tốc độ bao nhiêu xăng-ti-mét vuông mỗi giây?",
   [r"$20\pi$", r"$10\pi$", r"$25\pi$", r"$4\pi$"], "A",
   r"$\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}=2\pi(5)(2)=20\pi$.", r"$\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}=2\pi(5)(2)=20\pi$.", 'ctx'),
MC(r"Using the line tangent to $y=\sqrt x$ at $x=9$, the approximation of $\sqrt{9.3}$ is", r"Dùng tiếp tuyến của $y=\sqrt x$ tại $x=9$, giá trị gần đúng của $\sqrt{9{,}3}$ là",
   ["$3.1$", "$3.03$", "$3.5$", "$3.05$"], "D",
   r"$3+\dfrac{1}{6}(0.3)=3.05$.", r"$3+\dfrac{1}{6}(0{,}3)=3{,}05$.", 'ctx'),
MC(r"What is $\displaystyle\lim_{x\to0}\frac{e^{3x}-1}{x}$?", r"Giới hạn $\displaystyle\lim_{x\to0}\frac{e^{3x}-1}{x}$ bằng",
   ["$1$", "$3$", "$0$", r"$e^3$"], "B",
   r"Form $\dfrac00$; L'Hôpital's rule gives $\displaystyle\lim_{x\to0}3e^{3x}=3$.",
   r"Dạng $\dfrac00$; quy tắc L'Hôpital cho $\displaystyle\lim_{x\to0}3e^{3x}=3$.", 'ctx'),
MC(r"For $f(x)=x^2$ on $[1,3]$, what value $c$ satisfies the conclusion of the mean value theorem?",
   r"Với $f(x)=x^2$ trên $[1,3]$, giá trị $c$ nào thoả mãn kết luận của định lí giá trị trung bình?",
   ["$2$", r"$\sqrt5$", "$4$", r"$\sqrt3$"], "A",
   r"$\dfrac{9-1}{3-1}=4=2c$, so $c=2$. Option C is the slope, not $c$.",
   r"$\dfrac{9-1}{3-1}=4=2c$, nên $c=2$. Phương án C là hệ số góc, không phải $c$.", 'ana'),
MC(r"The derivative of $f$ is $f'(x)=(x-2)^2(x+1)$. At which values of $x$ does $f$ have a relative minimum?",
   r"Đạo hàm của $f$ là $f'(x)=(x-2)^2(x+1)$. Hàm $f$ đạt cực tiểu tại những giá trị nào của $x$?",
   ["$x=2$ only", "$x=-1$ and $x=2$", "none", "$x=-1$ only"], "D",
   r"$f'$ changes from negative to positive at $x=-1$; at $x=2$ it does not change sign.",
   r"$f'$ đổi dấu từ âm sang dương tại $x=-1$; tại $x=2$ nó không đổi dấu.", 'ana',
   ov=["chỉ $x=2$", "$x=-1$ và $x=2$", "không có", "chỉ $x=-1$"]),
MC(r"At what value of $x$ does the graph of $f(x)=x^3-6x^2+5$ have a point of inflection?",
   r"Đồ thị $f(x)=x^3-6x^2+5$ có điểm uốn tại $x$ bằng",
   ["$0$", "$4$", "$2$", "$-2$"], "C",
   r"$f''(x)=6x-12$ changes sign at $x=2$. Option B is a critical point.",
   r"$f''(x)=6x-12$ đổi dấu tại $x=2$. Phương án B là một điểm tới hạn.", 'ana'),
MC(r"What is the absolute maximum value of $f(x)=x^3-3x$ on $[0,2]$?", r"Giá trị lớn nhất của $f(x)=x^3-3x$ trên $[0,2]$ là",
   ["$0$", "$2$", "$-2$", "$1$"], "B",
   r"Candidates: $f(0)=0$, $f(1)=-2$, $f(2)=2$.", r"Các ứng viên: $f(0)=0$, $f(1)=-2$, $f(2)=2$.", 'ana'),
MC(r"A twice-differentiable function $f$ has $f'(3)=0$ and $f''(3)=-2$. Which statement must be true?",
   r"Hàm $f$ có đạo hàm cấp hai, $f'(3)=0$ và $f''(3)=-2$. Khẳng định nào chắc chắn đúng?",
   ["$f$ has a relative maximum at $x=3$.", "$f$ has a relative minimum at $x=3$.", "$f$ has a point of inflection at $x=3$.", "$f$ is decreasing at $x=3$."], "A",
   r"Second derivative test: $f'(3)=0$ and $f''(3)<0$.", r"Dấu hiệu đạo hàm cấp hai: $f'(3)=0$ và $f''(3)<0$.", 'ana',
   ov=["$f$ đạt cực đại tại $x=3$.", "$f$ đạt cực tiểu tại $x=3$.", "Đồ thị $f$ có điểm uốn tại $x=3$.", "$f$ nghịch biến tại $x=3$."]),
MC(r"What is $\displaystyle\int_0^2\left(3x^2-4x\right)dx$?", r"Tích phân $\displaystyle\int_0^2\left(3x^2-4x\right)dx$ bằng",
   ["$4$", "$-4$", "$8$", "$0$"], "D",
   r"$\left[x^3-2x^2\right]_0^2=8-8=0$.", r"$\left[x^3-2x^2\right]_0^2=8-8=0$.", 'acc'),
MC(r"What is $\displaystyle\int_0^{\sqrt5}x\sqrt{x^2+4}\,dx$?", r"Tích phân $\displaystyle\int_0^{\sqrt5}x\sqrt{x^2+4}\,dx$ bằng",
   [r"$\dfrac{38}{3}$", r"$\dfrac{19}{3}$", r"$\dfrac{19}{6}$", r"$\dfrac{26}{3}$"], "B",
   r"$u=x^2+4$ from $4$ to $9$: $\dfrac12\cdot\dfrac23\left(27-8\right)=\dfrac{19}{3}$. Option A forgets the $\dfrac12$.",
   r"$u=x^2+4$ từ $4$ đến $9$: $\dfrac12\cdot\dfrac23\left(27-8\right)=\dfrac{19}{3}$. Phương án A quên $\dfrac12$.", 'tech'),
MC(r"$\dfrac{d}{dx}\displaystyle\int_1^{x^3}\cos t\,dt=$", r"$\dfrac{d}{dx}\displaystyle\int_1^{x^3}\cos t\,dt$ bằng",
   [r"$\cos\left(x^3\right)$", r"$3x^2\cos\left(x^3\right)-\cos1$", r"$3x^2\cos\left(x^3\right)$", r"$\sin\left(x^3\right)-\sin1$"], "C",
   r"FTC with the chain rule: $\cos\left(x^3\right)\cdot3x^2$. The constant lower limit contributes nothing.",
   r"Định lí cơ bản kết hợp quy tắc chuỗi: $\cos\left(x^3\right)\cdot3x^2$. Cận dưới là hằng số nên không đóng góp gì.", 'acc'),
MC(r"A function $f$ has $f(0)=4$, $f(2)=1$, $f(5)=3$ and $f(6)=2$. What is the left Riemann sum for $\displaystyle\int_0^6f(x)\,dx$ using the three subintervals $[0,2]$, $[2,5]$, $[5,6]$?",
   r"Hàm $f$ có $f(0)=4$, $f(2)=1$, $f(5)=3$ và $f(6)=2$. Tổng Riemann trái của $\displaystyle\int_0^6f(x)\,dx$ với ba khoảng $[0,2]$, $[2,5]$, $[5,6]$ bằng",
   ["$13$", "$13.5$", "$11$", "$14$"], "D",
   r"$2\cdot4+3\cdot1+1\cdot3=14$. Option A is the right sum, option B the trapezoidal sum, option C assumes equal widths.",
   r"$2\cdot4+3\cdot1+1\cdot3=14$. Phương án A là tổng phải, phương án B là tổng hình thang, phương án C coi các khoảng bằng nhau.", 'acc'),
MC(r"What is $\displaystyle\int_1^e\frac{\ln x}{x}\,dx$?", r"Tích phân $\displaystyle\int_1^e\frac{\ln x}{x}\,dx$ bằng",
   [r"$\dfrac12$", "$1$", "$e$", r"$\dfrac{e^2}{2}$"], "A",
   r"$u=\ln x$ from $0$ to $1$: $\left[\dfrac{u^2}{2}\right]_0^1=\dfrac12$.", r"$u=\ln x$ từ $0$ đến $1$: $\left[\dfrac{u^2}{2}\right]_0^1=\dfrac12$.", 'tech'),
MC(r"If $\dfrac{dy}{dx}=3y$ and $y(0)=2$, what is $y(1)$?", r"Nếu $\dfrac{dy}{dx}=3y$ và $y(0)=2$ thì $y(1)$ bằng",
   [r"$2e^3$", r"$e^6$", r"$6e$", r"$2+e^3$"], "A",
   r"$y=2e^{3x}$, so $y(1)=2e^3$.", r"$y=2e^{3x}$, nên $y(1)=2e^3$.", 'de'),
MC(r"Which function is the solution of $\dfrac{dy}{dx}=\dfrac xy$ with $y(0)=3$?", r"Hàm nào là nghiệm của $\dfrac{dy}{dx}=\dfrac xy$ thoả mãn $y(0)=3$?",
   [r"$y=\sqrt{x^2+3}$", r"$y=x+3$", r"$y=\sqrt{x^2+9}$", r"$y=3e^{x^2/2}$"], "C",
   r"$y\,dy=x\,dx$ gives $y^2=x^2+C$; $C=9$ and $y>0$. Option A forgets to square $3$.",
   r"$y\,dy=x\,dx$ cho $y^2=x^2+C$; $C=9$ và $y>0$. Phương án A quên bình phương số $3$.", 'de'),
MC(r"What is the area of the region bounded by $y=x^2$ and $y=4$?", r"Diện tích miền giới hạn bởi $y=x^2$ và $y=4$ bằng",
   [r"$\dfrac{16}{3}$", r"$\dfrac{32}{3}$", "$16$", r"$\dfrac83$"], "B",
   r"$\displaystyle\int_{-2}^2\left(4-x^2\right)dx=16-\frac{16}{3}=\frac{32}{3}$. Option A uses only $0\le x\le2$.",
   r"$\displaystyle\int_{-2}^2\left(4-x^2\right)dx=16-\frac{16}{3}=\frac{32}{3}$. Phương án A chỉ lấy $0\le x\le2$.", 'av'),
MC(r"What is the average value of $\cos x$ on $\left[0,\dfrac\pi2\right]$?", r"Giá trị trung bình của $\cos x$ trên $\left[0,\dfrac\pi2\right]$ bằng",
   ["$1$", r"$\dfrac1\pi$", r"$\dfrac\pi2$", r"$\dfrac2\pi$"], "D",
   r"$\dfrac{1}{\pi/2}\displaystyle\int_0^{\pi/2}\cos x\,dx=\dfrac2\pi\cdot1$. Option A forgets to divide by the length.",
   r"$\dfrac{1}{\pi/2}\displaystyle\int_0^{\pi/2}\cos x\,dx=\dfrac2\pi\cdot1$. Phương án A quên chia cho độ dài khoảng.", 'av'),
]

AB_B = [
MC(r"Water flows into a tank at a rate of $R(t)=10+5\sin\left(\dfrac t2\right)$ liters per minute. How many liters flow in from $t=0$ to $t=10$?",
   r"Nước chảy vào một bể với tốc độ $R(t)=10+5\sin\left(\dfrac t2\right)$ lít mỗi phút. Từ $t=0$ đến $t=10$ có bao nhiêu lít nước chảy vào?",
   ["$97.603$", "$107.163$", "$110.000$", "$5.205$"], "B",
   r"$\displaystyle\int_0^{10}R(t)\,dt\approx107.163$. Option D is $R(10)$, a rate, not an amount.",
   r"$\displaystyle\int_0^{10}R(t)\,dt\approx107{,}163$. Phương án D là $R(10)$, một tốc độ chứ không phải lượng nước.", 'acc'),
MC(r"At what value of $x$ does the graph of $f(x)=x^3-2x-5$ cross the $x$-axis?", r"Đồ thị $f(x)=x^3-2x-5$ cắt trục hoành tại $x$ bằng",
   ["$2.095$", "$1.710$", "$-5.000$", "$2.000$"], "A",
   r"Solve $f(x)=0$ on the calculator: $x\approx2.095$, the only real root.",
   r"Giải $f(x)=0$ bằng máy tính: $x\approx2{,}095$, nghiệm thực duy nhất.", 'ana'),
MC(r"A particle moves along a line with velocity $v(t)=\cos\left(t^2\right)$ for $0\le t\le2$. What is the total distance traveled?",
   r"Một hạt chuyển động thẳng với vận tốc $v(t)=\cos\left(t^2\right)$, $0\le t\le2$. Tổng quãng đường hạt đi được là",
   ["$0.461$", "$1.253$", "$1.493$", "$0.977$"], "C",
   r"$\displaystyle\int_0^2\left|\cos\left(t^2\right)\right|dt\approx1.493$. Option A is the displacement $\displaystyle\int_0^2v(t)\,dt$.",
   r"$\displaystyle\int_0^2\left|\cos\left(t^2\right)\right|dt\approx1{,}493$. Phương án A là độ dời $\displaystyle\int_0^2v(t)\,dt$.", 'acc'),
MC(r"A function $f$ has $f(0)=1$ and $f'(x)=\sqrt{1+x^3}$. What is $f(2)$?", r"Hàm $f$ có $f(0)=1$ và $f'(x)=\sqrt{1+x^3}$. Giá trị $f(2)$ là",
   ["$3.000$", "$3.241$", "$5.241$", "$4.241$"], "D",
   r"$f(2)=1+\displaystyle\int_0^2\sqrt{1+x^3}\,dx\approx1+3.241$. Option B forgets $f(0)$.",
   r"$f(2)=1+\displaystyle\int_0^2\sqrt{1+x^3}\,dx\approx1+3{,}241$. Phương án B quên $f(0)$.", 'acc'),
MC(r"Let $g(x)=\ln\left(1+x^2\right)\cos x$. What is $g'(2)$?", r"Cho $g(x)=\ln\left(1+x^2\right)\cos x$. Giá trị $g'(2)$ là",
   ["$-1.796$", "$-0.670$", "$1.461$", "$-0.333$"], "A",
   r"Numerical derivative at $x=2$: $g'(2)\approx-1.796$. Option B is $g(2)$.",
   r"Đạo hàm số tại $x=2$: $g'(2)\approx-1{,}796$. Phương án B là $g(2)$.", 'der'),
MC(r"The region under $y=e^{-x}$ for $0\le x\le2$ is revolved around the $x$-axis. What is the volume?",
   r"Miền dưới $y=e^{-x}$ với $0\le x\le2$ quay quanh trục $x$. Thể tích khối tạo thành là",
   ["$0.865$", "$2.716$", "$1.542$", "$0.491$"], "C",
   r"$\pi\displaystyle\int_0^2e^{-2x}\,dx\approx1.542$. Option B uses $\pi\displaystyle\int_0^2e^{-x}\,dx$ (radius not squared).",
   r"$\pi\displaystyle\int_0^2e^{-2x}\,dx\approx1{,}542$. Phương án B dùng $\pi\displaystyle\int_0^2e^{-x}\,dx$ (không bình phương bán kính).", 'av'),
MC(r"What is the area of the region enclosed by $y=\cos x$ and $y=x^2$?", r"Diện tích miền giới hạn bởi $y=\cos x$ và $y=x^2$ là",
   ["$0.824$", "$1.095$", "$0.547$", "$1.648$"], "B",
   r"The curves meet at $x=\pm0.824$; $\displaystyle\int_{-0.824}^{0.824}\left(\cos x-x^2\right)dx\approx1.095$. Option C is half of the region.",
   r"Hai đường cắt nhau tại $x=\pm0{,}824$; $\displaystyle\int_{-0{,}824}^{0{,}824}\left(\cos x-x^2\right)dx\approx1{,}095$. Phương án C là một nửa miền.", 'av'),
MC(r"What is the average value of $f(x)=\ln(x+1)$ on $[0,3]$?", r"Giá trị trung bình của $f(x)=\ln(x+1)$ trên $[0,3]$ là",
   ["$2.545$", "$1.386$", "$0.462$", "$0.848$"], "D",
   r"$\dfrac13\displaystyle\int_0^3\ln(x+1)\,dx\approx0.848$. Option A is the integral; option C is the average rate of change.",
   r"$\dfrac13\displaystyle\int_0^3\ln(x+1)\,dx\approx0{,}848$. Phương án A là tích phân; phương án C là tốc độ thay đổi trung bình.", 'av'),
MC(r"Let $f(x)=\arctan x+x^2$. Using the line tangent to the graph of $f$ at $x=1$, what is the approximation of $f(1.1)$?",
   r"Cho $f(x)=\arctan x+x^2$. Dùng tiếp tuyến của đồ thị $f$ tại $x=1$, giá trị gần đúng của $f(1{,}1)$ là",
   ["$2.035$", "$2.043$", "$1.785$", "$2.500$"], "A",
   r"$f(1)\approx1.785$ and $f'(1)=\dfrac12+2=2.5$, so $f(1.1)\approx1.785+0.25=2.035$. Option B is the exact value.",
   r"$f(1)\approx1{,}785$ và $f'(1)=\dfrac12+2=2{,}5$, nên $f(1{,}1)\approx1{,}785+0{,}25=2{,}035$. Phương án B là giá trị đúng.", 'ctx'),
MC(r"For $f(x)=\sqrt x$ on $[1,4]$, what value $c$ satisfies the conclusion of the mean value theorem?",
   r"Với $f(x)=\sqrt x$ trên $[1,4]$, giá trị $c$ nào thoả mãn kết luận của định lí giá trị trung bình?",
   ["$2.5$", "$2.25$", "$2$", "$1.5$"], "B",
   r"$\dfrac{2-1}{4-1}=\dfrac13=\dfrac{1}{2\sqrt c}$, so $\sqrt c=1.5$ and $c=2.25$. Option D is $\sqrt c$.",
   r"$\dfrac{2-1}{4-1}=\dfrac13=\dfrac{1}{2\sqrt c}$, nên $\sqrt c=1{,}5$ và $c=2{,}25$. Phương án D là $\sqrt c$.", 'ana'),
MC(r"The population of a town changes at a rate of $P'(t)=50-4te^{0.1t}$ people per year for $0\le t\le10$. At what time is the population greatest?",
   r"Dân số một thị trấn thay đổi với tốc độ $P'(t)=50-4te^{0{,}1t}$ người mỗi năm, $0\le t\le10$. Dân số lớn nhất vào thời điểm nào?",
   ["$t=0$", "$t=10$", "$t=3.162$", "$t=6.515$"], "D",
   r"$P'$ changes from positive to negative only at $t\approx6.515$, so this is where the population is greatest.",
   r"$P'$ chỉ đổi dấu từ dương sang âm tại $t\approx6{,}515$, nên dân số lớn nhất tại đó.", 'ana'),
MC(r"A particle moves along a line with velocity $v(t)=2\sin t+\cos(2t)$. What is the total distance traveled from $t=0$ to $t=4$?",
   r"Một hạt chuyển động thẳng với vận tốc $v(t)=2\sin t+\cos(2t)$. Tổng quãng đường hạt đi được từ $t=0$ đến $t=4$ là",
   ["$3.802$", "$1.659$", "$4.602$", "$3.516$"], "C",
   r"$v$ changes sign at $t\approx3.516$; $\displaystyle\int_0^4|v(t)|\,dt\approx4.602$. Option A is the displacement.",
   r"$v$ đổi dấu tại $t\approx3{,}516$; $\displaystyle\int_0^4|v(t)|\,dt\approx4{,}602$. Phương án A là độ dời.", 'ctx'),
MC(r"A particle has velocity $v(t)=\ln\left(t^2+1\right)-1$. At $t=1.5$, which statement is true?",
   r"Một hạt có vận tốc $v(t)=\ln\left(t^2+1\right)-1$. Tại $t=1{,}5$, khẳng định nào đúng?",
   ["The particle is moving left and slowing down.", "The particle is moving right and slowing down.", "The particle is moving left and speeding up.", "The particle is moving right and speeding up."], "D",
   r"$v(1.5)\approx0.179>0$ and $a(1.5)=\dfrac{3}{3.25}\approx0.923>0$: same signs, so it moves right and speeds up.",
   r"$v(1{,}5)\approx0{,}179>0$ và $a(1{,}5)=\dfrac{3}{3{,}25}\approx0{,}923>0$: cùng dấu, nên hạt đi sang phải và nhanh dần.", 'ctx',
   ov=["Hạt đi sang trái và chậm dần.", "Hạt đi sang phải và chậm dần.", "Hạt đi sang trái và nhanh dần.", "Hạt đi sang phải và nhanh dần."]),
]

TXT = {
'en': dict(
  title='AP Calculus AB practice exam: multiple choice',
  desc='A full AP Calculus AB multiple-choice section in the 2027 format: 42 questions, 29 without and 13 with a calculator, marked instantly with solutions.',
  intro="""This is a full multiple-choice section in the format of the AP Calculus AB exam from May 2027. All questions are written by Lemonmath; they are not real AP questions, but they follow the official units and question styles. The multiple-choice section is half of the AP score; for the other half, practise with released free-response questions and the guide [AP Calculus free-response types and how to write them](lesson:apcalc-frq-strategies).

## How to take this exam

| | Part A | Part B |
|---|---|---|
| Questions | 29 | 13 |
| Time | 62 minutes | 38 minutes |
| Calculator | not allowed | graphing calculator (Desmos or your own) |

1. Set a timer for 62 minutes and do Part A without a calculator. Submit it to see your score.
2. Then do Part B in 38 minutes with a graphing calculator, in radian mode.
3. Answers in Part B are given to three decimal places, as on the real exam.
4. Afterwards, read the solution of every question you missed and add it to your error log.""",
  pa='## Part A: no calculator', pb='## Part B: graphing calculator',
  after="""## After the exam

Part A is marked out of 29 and Part B out of 13. The table shows which lesson to revise for each question you missed. As a rough guide, 30 or more correct out of 42 means your multiple-choice section is in good shape; below 20, go back to the lessons before taking another full exam.""",
  th='| Question | Lesson |\n|---|---|',
  tl={'lim': 'Limits and continuity', 'der': 'The derivative and differentiation rules', 'chain': 'Chain rule, implicit and inverse functions',
      'ctx': 'Related rates, motion and linear approximation', 'ana': 'Mean value theorem, extrema and curve analysis',
      'acc': 'Riemann sums, accumulation and the fundamental theorem', 'tech': 'Integration techniques',
      'de': 'Differential equations and slope fields', 'av': 'Area, volume and average value'},
  tail="Review with the methods in [Revision that works](lesson:evidence-based-revision) before your next full exam."),
'vi': dict(
  title='Đề luyện AP Calculus AB: phần trắc nghiệm',
  desc='Trọn phần trắc nghiệm AP Calculus AB theo cấu trúc 2027: 42 câu, 29 câu không và 13 câu có máy tính, chấm điểm ngay, có lời giải từng câu.',
  intro="""Đây là trọn phần trắc nghiệm theo cấu trúc đề AP Calculus AB từ tháng 5/2027. Mọi câu hỏi đều do Lemonmath soạn; đây không phải câu hỏi AP thật, nhưng bám theo các unit và kiểu câu chính thức. Phần trắc nghiệm chiếm một nửa điểm AP; với nửa còn lại, hãy luyện các câu tự luận đã công bố cùng bài [Các dạng câu tự luận AP Calculus và cách trình bày](lesson:apcalc-frq-strategies).

## Cách làm đề

| | Part A | Part B |
|---|---|---|
| Số câu | 29 | 13 |
| Thời gian | 62 phút | 38 phút |
| Máy tính | không được dùng | máy tính vẽ đồ thị (Desmos hoặc máy của bạn) |

1. Bấm giờ 62 phút và làm Part A không dùng máy tính. Nộp bài để xem điểm.
2. Sau đó làm Part B trong 38 phút với máy tính vẽ đồ thị, để ở chế độ radian.
3. Đáp số ở Part B cho đến ba chữ số thập phân, như trong đề thật.
4. Làm xong, đọc lời giải của mọi câu sai và chép vào sổ lỗi sai.""",
  pa='## Part A: không dùng máy tính', pb='## Part B: dùng máy tính vẽ đồ thị',
  after="""## Sau khi làm đề

Part A tính trên 29 câu và Part B trên 13 câu. Bảng dưới cho biết mỗi câu sai cần ôn lại bài nào. Tạm tính, đúng từ 30 câu trở lên trên 42 câu cho thấy phần trắc nghiệm của bạn đã vững; dưới 20 câu, hãy quay lại các bài học trước khi làm đề mới.""",
  th='| Câu | Bài cần ôn |\n|---|---|',
  tl={'lim': 'Giới hạn và tính liên tục', 'der': 'Định nghĩa đạo hàm và các quy tắc tính', 'chain': 'Đạo hàm hàm hợp, hàm ẩn và hàm ngược',
      'ctx': 'Đạo hàm trong ngữ cảnh, chuyển động và tốc độ liên quan', 'ana': 'Định lí giá trị trung bình, cực trị và khảo sát',
      'acc': 'Tổng Riemann, tích luỹ và định lí cơ bản', 'tech': 'Kĩ thuật tính tích phân',
      'de': 'Phương trình vi phân và trường hướng', 'av': 'Diện tích, thể tích và giá trị trung bình'},
  tail="Ôn lại bằng các cách trong bài [Ôn thi theo khoa học](lesson:evidence-based-revision) trước khi làm đề đầy đủ tiếp theo."),
}

def block(qs, lang):
    out = [':::quiz test']
    for q in qs:
        opts = q['oe'] if lang == 'en' else q['ov']
        out += ['::mc', q[lang]] + [f"{'ABCD'[i]}. {o}" for i, o in enumerate(opts)] + ['::key ' + q['key'], q['xe'] if lang == 'en' else q['xv'], '']
    return '\n'.join(out).rstrip() + '\n:::'

def write(slug, pa, pb, lang, t=None):
    t = t or TXT[lang]
    rows = '\n'.join(f"| {i+1} | [{t['tl'][q['topic']]}](lesson:{L[q['topic']]}) |" for i, q in enumerate(pa + pb))
    md = f"""---
title: {t['title']}
description: {t['desc']}
minutes: 100
type: test
---

{t['intro']}

{t['pa']}

{block(pa, lang)}

{t['pb']}

{block(pb, lang)}

{t['after']}

{t['th']}
{rows}

{t['tail']}
"""
    open(R + f'{lang}/exams/ap-calculus/{slug}.md', 'w').write(md)

exec(open(pathlib.Path(__file__).with_name('apcalc_bc_bank.py')).read())

for lang in ('en', 'vi'):
    write('apcalc-practice-exam-ab', copy.deepcopy(AB_A), copy.deepcopy(AB_B), lang)
    write('apcalc-practice-exam-bc', copy.deepcopy(BC_A), copy.deepcopy(BC_B), lang, TXT_BC[lang])
for nm, m in (('AB_A', AB_A), ('AB_B', AB_B), ('BC_A', BC_A), ('BC_B', BC_B)):
    print(nm, len(m), sorted(Counter(q['key'] for q in m).items()))
