# Generates AP Precalculus practice exam 1 (EN + VI) from one bilingual bank.
# Format from May 2027: Section I 42 MC (Part A 29 no calculator, Part B 13 graphing calculator),
# Section II 4 FRQ of 6 points. Each MC item: (en, vi, correct, [3 distractors], expl_en, expl_vi, topic[, vi_options]);
# the correct option is placed at the letter given by KEYS.
import re, pathlib
from collections import Counter
R = pathlib.Path(__file__).resolve().parents[2] / 'content'

def vi_num(s):
    return re.sub(r'(\d)\.(\d)', r'\1{,}\2', s)

L = {'rp': 'apprecalc-rates-polynomials', 'rt': 'apprecalc-rational-transformations',
     'se': 'apprecalc-sequences-exponentials', 'lg': 'apprecalc-logarithms-semilog',
     'tf': 'apprecalc-trig-functions-modelling', 'tp': 'apprecalc-trig-equations-polar'}
TL = {'en': {'rp': 'Rates of change and polynomial functions', 'rt': 'Rational functions, transformations and modelling',
             'se': 'Sequences and exponential functions', 'lg': 'Logarithms, inverses and semi-log models',
             'tf': 'Trigonometric functions and periodic models', 'tp': 'Trigonometric equations and polar functions'},
      'vi': {'rp': 'Tốc độ biến thiên và hàm đa thức', 'rt': 'Hàm hữu tỉ, phép biến hình và mô hình hoá',
             'se': 'Dãy số và hàm mũ', 'lg': 'Logarit, hàm ngược và mô hình bán logarit',
             'tf': 'Hàm lượng giác và mô hình tuần hoàn', 'tp': 'Phương trình lượng giác và toạ độ cực'}}

A = [
# ---- Unit 1 (10)
(r"What is the average rate of change of $f(x)=x^3-2x$ on the interval $[-1,2]$?", r"Tốc độ biến thiên trung bình của $f(x)=x^3-2x$ trên đoạn $[-1,2]$ là",
 "$1$", ["$3$", "$-1$", "$2$"],
 r"$f(2)=4$ and $f(-1)=1$, so the average rate of change is $\dfrac{4-1}{2-(-1)}=1$. Option A forgets to divide by the length $3$.",
 r"$f(2)=4$ và $f(-1)=1$, nên tốc độ biến thiên trung bình là $\dfrac{4-1}{2-(-1)}=1$. Phương án A quên chia cho độ dài $3$.", 'rp'),
(r"Which statement describes the end behavior of $p(x)=-2x^4+x^3+5$?", r"Khẳng định nào mô tả đúng dáng điệu ở vô cực của $p(x)=-2x^4+x^3+5$?",
 r"$\lim\limits_{x\to\infty}p(x)=-\infty$ and $\lim\limits_{x\to-\infty}p(x)=-\infty$",
 [r"$\lim\limits_{x\to\infty}p(x)=\infty$ and $\lim\limits_{x\to-\infty}p(x)=\infty$",
  r"$\lim\limits_{x\to\infty}p(x)=-\infty$ and $\lim\limits_{x\to-\infty}p(x)=\infty$",
  r"$\lim\limits_{x\to\infty}p(x)=\infty$ and $\lim\limits_{x\to-\infty}p(x)=-\infty$"],
 r"The leading term $-2x^4$ has even degree and a negative coefficient, so $p(x)\to-\infty$ at both ends.",
 r"Số hạng bậc cao nhất $-2x^4$ có bậc chẵn và hệ số âm, nên $p(x)\to-\infty$ ở cả hai phía.", 'rp',
 [r"$\lim\limits_{x\to\infty}p(x)=-\infty$ và $\lim\limits_{x\to-\infty}p(x)=-\infty$",
  r"$\lim\limits_{x\to\infty}p(x)=\infty$ và $\lim\limits_{x\to-\infty}p(x)=\infty$",
  r"$\lim\limits_{x\to\infty}p(x)=-\infty$ và $\lim\limits_{x\to-\infty}p(x)=\infty$",
  r"$\lim\limits_{x\to\infty}p(x)=\infty$ và $\lim\limits_{x\to-\infty}p(x)=-\infty$"]),
(r"The polynomial $p(x)=(x-2)^2(x+1)(x+3)$ is graphed in the $xy$-plane. What happens at $x=2$?", r"Đồ thị của đa thức $p(x)=(x-2)^2(x+1)(x+3)$ có đặc điểm gì tại $x=2$?",
 "The graph touches the $x$-axis but does not cross it.", ["The graph crosses the $x$-axis.", "The graph has a vertical asymptote.", "The graph has a hole."],
 r"The zero $x=2$ has even multiplicity $2$, so $p(x)$ does not change sign there: the graph touches the axis and turns back.",
 r"Nghiệm $x=2$ có bội chẵn ($2$), nên $p(x)$ không đổi dấu tại đó: đồ thị tiếp xúc với trục hoành rồi quay lại.", 'rp',
 ["Đồ thị tiếp xúc với trục hoành nhưng không cắt qua.", "Đồ thị cắt qua trục hoành.", "Đồ thị có tiệm cận đứng.", "Đồ thị có một điểm bị khuyết."]),
(r"The table gives values of a polynomial $p$: $p(0)=1$, $p(1)=2$, $p(2)=9$, $p(3)=28$, $p(4)=65$. What is the least possible degree of $p$?", r"Đa thức $p$ có $p(0)=1$, $p(1)=2$, $p(2)=9$, $p(3)=28$, $p(4)=65$. Bậc nhỏ nhất có thể của $p$ là",
 "$3$", ["$2$", "$4$", "$1$"],
 r"First differences $1,7,19,37$; second differences $6,12,18$; third differences $6,6$ are constant, so the degree is $3$.",
 r"Hiệu bậc một $1,7,19,37$; hiệu bậc hai $6,12,18$; hiệu bậc ba $6,6$ không đổi, nên bậc là $3$.", 'rp'),
(r"A function $f$ has $f(0)=2$, $f(1)=7$, $f(2)=10$ and $f(3)=11$. Based on these values, on $[0,3]$ the function $f$ is", r"Hàm số $f$ có $f(0)=2$, $f(1)=7$, $f(2)=10$ và $f(3)=11$. Dựa vào các giá trị này, trên $[0,3]$ hàm số $f$",
 "increasing and concave down", ["increasing and concave up", "decreasing and concave down", "decreasing and concave up"],
 r"The values rise, and the rates over successive intervals $5,3,1$ decrease: $f$ increases at a decreasing rate, so it is concave down.",
 r"Các giá trị tăng, và tốc độ trên các đoạn liên tiếp $5,3,1$ giảm dần: $f$ tăng với tốc độ giảm dần, nên đồ thị lõm xuống.", 'rp',
 ["đồng biến và lõm xuống", "đồng biến và lõm lên", "nghịch biến và lõm xuống", "nghịch biến và lõm lên"]),
(r"A polynomial with real coefficients has zeros $3$ and $2+i$. What is the least possible degree of the polynomial?", r"Một đa thức hệ số thực có các nghiệm $3$ và $2+i$. Bậc nhỏ nhất có thể của đa thức là",
 "$3$", ["$2$", "$4$", "$1$"],
 r"Non-real zeros of a real polynomial come in conjugate pairs, so $2-i$ is also a zero: at least $3$ zeros.",
 r"Nghiệm không thực của đa thức hệ số thực đi theo cặp liên hợp, nên $2-i$ cũng là nghiệm: có ít nhất $3$ nghiệm.", 'rp'),
(r"What is the equation of the vertical asymptote of $r(x)=\dfrac{x^2-9}{x^2+x-6}$?", r"Tiệm cận đứng của $r(x)=\dfrac{x^2-9}{x^2+x-6}$ có phương trình là",
 "$x=2$", ["$x=-3$", "$x=3$", "$x=-2$"],
 r"$r(x)=\dfrac{(x-3)(x+3)}{(x+3)(x-2)}$. The factor $x+3$ cancels, giving a hole at $x=-3$; the asymptote is $x=2$.",
 r"$r(x)=\dfrac{(x-3)(x+3)}{(x+3)(x-2)}$. Nhân tử $x+3$ rút gọn được, cho điểm khuyết tại $x=-3$; tiệm cận là $x=2$.", 'rt'),
(r"What is the horizontal asymptote of $r(x)=\dfrac{6x^2+1}{3x^2-x}$?", r"Tiệm cận ngang của $r(x)=\dfrac{6x^2+1}{3x^2-x}$ là",
 "$y=2$", ["$y=6$", "$y=0$", "There is no horizontal asymptote."],
 r"The degrees are equal, so the asymptote is the ratio of leading coefficients, $\dfrac63=2$.",
 r"Bậc tử bằng bậc mẫu, nên tiệm cận là tỉ số các hệ số bậc cao nhất, $\dfrac63=2$.", 'rt',
 ["$y=2$", "$y=6$", "$y=0$", "Không có tiệm cận ngang."]),
(r"How is the graph of $g(x)=-f(x)+3$ obtained from the graph of $f$?", r"Đồ thị của $g(x)=-f(x)+3$ nhận được từ đồ thị của $f$ như thế nào?",
 "Reflect over the $x$-axis, then shift up $3$ units", ["Reflect over the $y$-axis, then shift up $3$ units", "Shift up $3$ units, then reflect over the $x$-axis", "Reflect over the $x$-axis, then shift right $3$ units"],
 r"$-f(x)$ reflects the graph over the $x$-axis, and adding $3$ afterwards moves it up. Option C would give $-f(x)-3$.",
 r"$-f(x)$ lấy đối xứng đồ thị qua trục hoành, rồi cộng $3$ thì tịnh tiến lên trên. Phương án C cho $-f(x)-3$.", 'rt',
 ["Lấy đối xứng qua trục hoành, rồi tịnh tiến lên $3$ đơn vị", "Lấy đối xứng qua trục tung, rồi tịnh tiến lên $3$ đơn vị", "Tịnh tiến lên $3$ đơn vị, rồi lấy đối xứng qua trục hoành", "Lấy đối xứng qua trục hoành, rồi tịnh tiến sang phải $3$ đơn vị"]),
(r"What is the solution set of $\dfrac{x-1}{x+3}\le0$?", r"Tập nghiệm của $\dfrac{x-1}{x+3}\le0$ là",
 "$-3<x\\le1$", ["$-3\\le x\\le1$", "$x<-3$ or $x\\ge1$", "$x\\le1$"],
 r"The sign changes at $x=-3$ and $x=1$; the quotient is negative between them, zero at $x=1$, and undefined at $x=-3$.",
 r"Dấu đổi tại $x=-3$ và $x=1$; thương âm ở giữa hai giá trị này, bằng $0$ tại $x=1$ và không xác định tại $x=-3$.", 'rt',
 ["$-3<x\\le1$", "$-3\\le x\\le1$", "$x<-3$ hoặc $x\\ge1$", "$x\\le1$"]),
# ---- Unit 2 (9)
(r"An arithmetic sequence has $a_1=7$ and common difference $-3$. What is $a_{10}$?", r"Một cấp số cộng có $a_1=7$ và công sai $-3$. Số hạng $a_{10}$ bằng",
 "$-20$", ["$-23$", "$-17$", "$37$"],
 r"$a_{10}=7+9(-3)=-20$. Option A uses $10$ steps instead of $9$.", r"$a_{10}=7+9(-3)=-20$. Phương án A dùng $10$ bước thay vì $9$.", 'se'),
(r"A geometric sequence has $g_2=6$ and $g_5=162$. What is $g_1$?", r"Một cấp số nhân có $g_2=6$ và $g_5=162$. Số hạng $g_1$ bằng",
 "$2$", ["$3$", "$18$", "$1$"],
 r"$r^3=\dfrac{162}{6}=27$, so $r=3$ and $g_1=\dfrac{6}{3}=2$.", r"$r^3=\dfrac{162}{6}=27$, nên $r=3$ và $g_1=\dfrac{6}{3}=2$.", 'se'),
(r"An exponential function $f(x)=ab^x$ passes through $(0,4)$ and $(2,36)$. What is $f(3)$?", r"Hàm mũ $f(x)=ab^x$ đi qua $(0,4)$ và $(2,36)$. Giá trị $f(3)$ là",
 "$108$", ["$72$", "$81$", "$144$"],
 r"$a=4$ and $4b^2=36$, so $b=3$ and $f(3)=4\cdot27=108$.", r"$a=4$ và $4b^2=36$, nên $b=3$ và $f(3)=4\cdot27=108$.", 'se'),
(r"Which expression is equivalent to $5\cdot4^{x/2}$?", r"Biểu thức nào tương đương với $5\cdot4^{x/2}$?",
 "$5\\cdot2^x$", ["$5\\cdot8^x$", "$10\\cdot4^x$", "$5\\cdot16^x$"],
 r"$4^{x/2}=\left(4^{1/2}\right)^x=2^x$.", r"$4^{x/2}=\left(4^{1/2}\right)^x=2^x$.", 'se'),
(r"A quantity is modelled by $Q(t)=300(0.92)^t$. Which statement is true?", r"Một đại lượng được mô hình hoá bởi $Q(t)=300(0{,}92)^t$. Khẳng định nào đúng?",
 "$Q$ decreases by $8\\%$ per unit of $t$.", ["$Q$ decreases by $92\\%$ per unit of $t$.", "$Q$ decreases by $0.92$ per unit of $t$.", "$Q$ increases by $8\\%$ per unit of $t$."],
 r"The factor $0.92=1-0.08$ keeps $92\%$ each period, a decrease of $8\%$.", r"Hệ số $0{,}92=1-0{,}08$ giữ lại $92\%$ mỗi chu kì, tức giảm $8\%$.", 'se',
 ["$Q$ giảm $8\\%$ sau mỗi đơn vị của $t$.", "$Q$ giảm $92\\%$ sau mỗi đơn vị của $t$.", "$Q$ giảm $0{,}92$ sau mỗi đơn vị của $t$.", "$Q$ tăng $8\\%$ sau mỗi đơn vị của $t$."]),
(r"What is the value of $\log_2 48-\log_2 3$?", r"Giá trị của $\log_2 48-\log_2 3$ là",
 "$4$", ["$16$", "$\\log_2 45$", "$8$"],
 r"$\log_2\dfrac{48}{3}=\log_2 16=4$. Option A is the argument, not the logarithm.", r"$\log_2\dfrac{48}{3}=\log_2 16=4$. Phương án A là biểu thức dưới dấu logarit, không phải logarit.", 'lg'),
(r"What is the solution of $3^{2x}=81$?", r"Nghiệm của phương trình $3^{2x}=81$ là",
 "$x=2$", ["$x=4$", "$x=3$", "$x=1$"],
 r"$81=3^4$, so $2x=4$ and $x=2$.", r"$81=3^4$, nên $2x=4$ và $x=2$.", 'lg'),
(r"If $f(x)=e^x+2$, what is $f^{-1}(x)$?", r"Nếu $f(x)=e^x+2$ thì $f^{-1}(x)$ là",
 "$\\ln(x-2)$", ["$\\ln x-2$", "$\\ln(x+2)$", "$e^{x-2}$"],
 r"Swap: $x=e^y+2$, so $e^y=x-2$ and $y=\ln(x-2)$.", r"Đổi chỗ: $x=e^y+2$, nên $e^y=x-2$ và $y=\ln(x-2)$.", 'lg'),
(r"On a semi-log plot, data lie on the line $\log y=2-0.5x$. The exponential model $y=ab^x$ for the data has $a$ equal to", r"Trên một đồ thị bán logarit, dữ liệu nằm trên đường thẳng $\log y=2-0{,}5x$. Mô hình hàm mũ $y=ab^x$ của dữ liệu có $a$ bằng",
 "$100$", ["$2$", "$10$", "$-0.5$"],
 r"$y=10^{2-0.5x}=10^2\cdot\left(10^{-0.5}\right)^x$, so $a=100$.", r"$y=10^{2-0{,}5x}=10^2\cdot\left(10^{-0{,}5}\right)^x$, nên $a=100$.", 'lg'),
# ---- Unit 3 (10)
(r"What is the period of $y=4\sin\dfrac{\pi x}{5}+1$?", r"Chu kì của $y=4\sin\dfrac{\pi x}{5}+1$ là",
 "$10$", ["$5$", "$\\dfrac{2\\pi}{5}$", "$\\dfrac{\\pi}{5}$"],
 r"The period is $\dfrac{2\pi}{\pi/5}=10$.", r"Chu kì là $\dfrac{2\pi}{\pi/5}=10$.", 'tf'),
(r"What is the value of $\cos\dfrac{4\pi}{3}$?", r"Giá trị của $\cos\dfrac{4\pi}{3}$ là",
 "$-\\dfrac12$", ["$\\dfrac12$", "$-\\dfrac{\\sqrt3}{2}$", "$\\dfrac{\\sqrt3}{2}$"],
 r"$\dfrac{4\pi}{3}$ is in quadrant III with reference angle $\dfrac\pi3$, where cosine is negative: $-\dfrac12$.",
 r"$\dfrac{4\pi}{3}$ ở góc phần tư III với góc tham chiếu $\dfrac\pi3$, nơi cos âm: $-\dfrac12$.", 'tf'),
(r"A sinusoidal function has maximum value $9$, minimum value $3$ and period $4$. Which could be the function?", r"Một hàm dạng sin có giá trị lớn nhất $9$, nhỏ nhất $3$ và chu kì $4$. Hàm số đó có thể là",
 "$y=3\\sin\\dfrac{\\pi x}{2}+6$", ["$y=6\\sin\\dfrac{\\pi x}{2}+3$", "$y=3\\sin4x+6$", "$y=3\\sin\\dfrac{\\pi x}{4}+6$"],
 r"Midline $\dfrac{9+3}{2}=6$, amplitude $\dfrac{9-3}{2}=3$, and $b=\dfrac{2\pi}{4}=\dfrac\pi2$.", r"Đường trung bình $\dfrac{9+3}{2}=6$, biên độ $\dfrac{9-3}{2}=3$, và $b=\dfrac{2\pi}{4}=\dfrac\pi2$.", 'tf'),
(r"Which of the following is a vertical asymptote of $y=\tan\dfrac{x}{2}$?", r"Đường nào sau đây là tiệm cận đứng của $y=\tan\dfrac{x}{2}$?",
 "$x=\\pi$", ["$x=\\dfrac\\pi2$", "$x=2\\pi$", "$x=\\dfrac\\pi4$"],
 r"Asymptotes occur where $\dfrac x2=\dfrac\pi2+k\pi$, that is $x=\pi+2k\pi$. At $x=2\pi$ the function is $0$.",
 r"Tiệm cận xảy ra khi $\dfrac x2=\dfrac\pi2+k\pi$, tức $x=\pi+2k\pi$. Tại $x=2\pi$ hàm số bằng $0$.", 'tf'),
(r"An angle $\theta$ is in quadrant II and $\sin\theta=\dfrac35$. What is $\cos\theta$?", r"Góc $\theta$ ở góc phần tư II và $\sin\theta=\dfrac35$. Giá trị $\cos\theta$ là",
 "$-\\dfrac45$", ["$\\dfrac45$", "$-\\dfrac35$", "$\\dfrac34$"],
 r"$\cos^2\theta=1-\dfrac{9}{25}=\dfrac{16}{25}$, and cosine is negative in quadrant II.", r"$\cos^2\theta=1-\dfrac{9}{25}=\dfrac{16}{25}$, và cos âm ở góc phần tư II.", 'tf'),
(r"If $\sin\theta=\dfrac35$ and $\cos\theta=-\dfrac45$, what is $\sin2\theta$?", r"Nếu $\sin\theta=\dfrac35$ và $\cos\theta=-\dfrac45$ thì $\sin2\theta$ bằng",
 "$-\\dfrac{24}{25}$", ["$\\dfrac{24}{25}$", "$\\dfrac{7}{25}$", "$-\\dfrac65$"],
 r"$\sin2\theta=2\sin\theta\cos\theta=2\cdot\dfrac35\cdot\left(-\dfrac45\right)=-\dfrac{24}{25}$. Option C is $\cos2\theta$.",
 r"$\sin2\theta=2\sin\theta\cos\theta=2\cdot\dfrac35\cdot\left(-\dfrac45\right)=-\dfrac{24}{25}$. Phương án C là $\cos2\theta$.", 'tp'),
(r"What is the value of $\arctan(-1)$?", r"Giá trị của $\arctan(-1)$ là",
 "$-\\dfrac\\pi4$", ["$\\dfrac{3\\pi}{4}$", "$\\dfrac{7\\pi}{4}$", "$\\dfrac\\pi4$"],
 r"The range of $\arctan$ is $\left(-\dfrac\pi2,\dfrac\pi2\right)$, and $\tan\left(-\dfrac\pi4\right)=-1$.", r"Tập giá trị của $\arctan$ là $\left(-\dfrac\pi2,\dfrac\pi2\right)$, và $\tan\left(-\dfrac\pi4\right)=-1$.", 'tp'),
(r"What are all solutions of $\sin x=-\dfrac{\sqrt3}{2}$ on $[0,2\pi)$?", r"Tất cả các nghiệm của $\sin x=-\dfrac{\sqrt3}{2}$ trên $[0,2\pi)$ là",
 "$\\dfrac{4\\pi}{3}$ and $\\dfrac{5\\pi}{3}$", ["$\\dfrac{\\pi}{3}$ and $\\dfrac{2\\pi}{3}$", "$\\dfrac{7\\pi}{6}$ and $\\dfrac{11\\pi}{6}$", "$\\dfrac{2\\pi}{3}$ and $\\dfrac{4\\pi}{3}$"],
 r"The reference angle is $\dfrac\pi3$ and sine is negative in quadrants III and IV: $\pi+\dfrac\pi3$ and $2\pi-\dfrac\pi3$.",
 r"Góc tham chiếu là $\dfrac\pi3$ và sin âm ở góc phần tư III, IV: $\pi+\dfrac\pi3$ và $2\pi-\dfrac\pi3$.", 'tp',
 ["$\\dfrac{4\\pi}{3}$ và $\\dfrac{5\\pi}{3}$", "$\\dfrac{\\pi}{3}$ và $\\dfrac{2\\pi}{3}$", "$\\dfrac{7\\pi}{6}$ và $\\dfrac{11\\pi}{6}$", "$\\dfrac{2\\pi}{3}$ và $\\dfrac{4\\pi}{3}$"]),
(r"For $\sin x\ne0$, the expression $\dfrac{1-\cos^2x}{\sin x}$ is equal to", r"Với $\sin x\ne0$, biểu thức $\dfrac{1-\cos^2x}{\sin x}$ bằng",
 "$\\sin x$", ["$\\cos x$", "$1$", "$\\tan x$"],
 r"$1-\cos^2x=\sin^2x$, and $\dfrac{\sin^2x}{\sin x}=\sin x$.", r"$1-\cos^2x=\sin^2x$, và $\dfrac{\sin^2x}{\sin x}=\sin x$.", 'tp'),
(r"Which polar coordinates describe the rectangular point $(-3,-3)$?", r"Toạ độ cực nào biểu diễn điểm có toạ độ vuông góc $(-3,-3)$?",
 "$\\left(3\\sqrt2,\\dfrac{5\\pi}{4}\\right)$", ["$\\left(3\\sqrt2,\\dfrac{\\pi}{4}\\right)$", "$\\left(3\\sqrt2,\\dfrac{3\\pi}{4}\\right)$", "$\\left(18,\\dfrac{5\\pi}{4}\\right)$"],
 r"$r=\sqrt{9+9}=3\sqrt2$, and the point is in quadrant III, so $\theta=\dfrac{5\pi}{4}$. Option A has the same tangent but the wrong quadrant.",
 r"$r=\sqrt{9+9}=3\sqrt2$, và điểm ở góc phần tư III, nên $\theta=\dfrac{5\pi}{4}$. Phương án A có cùng giá trị tang nhưng sai góc phần tư.", 'tp'),
]

B = [
(r"What is the greatest real zero of $f(x)=x^3-4x+1$?", r"Nghiệm thực lớn nhất của $f(x)=x^3-4x+1$ là",
 "$1.861$", ["$0.254$", "$2.115$", "$1.732$"],
 r"Graphing gives three zeros, about $-2.115$, $0.254$ and $1.861$.", r"Vẽ đồ thị cho ba nghiệm, khoảng $-2{,}115$, $0{,}254$ và $1{,}861$.", 'rp'),
(r"What is the average rate of change of $f(x)=2^x+x$ on $[1,4]$?", r"Tốc độ biến thiên trung bình của $f(x)=2^x+x$ trên $[1,4]$ là",
 "$5.667$", ["$17$", "$6.667$", "$4.250$"],
 r"$f(4)=20$ and $f(1)=3$, so $\dfrac{20-3}{3}\approx5.667$.", r"$f(4)=20$ và $f(1)=3$, nên $\dfrac{20-3}{3}\approx5{,}667$.", 'rp'),
(r"What is the positive solution of $\dfrac{2x+1}{x-3}=x$?", r"Nghiệm dương của phương trình $\dfrac{2x+1}{x-3}=x$ là",
 "$5.193$", ["$-0.193$", "$2.596$", "$6.193$"],
 r"Multiplying gives $x^2-5x-1=0$, so $x=\dfrac{5\pm\sqrt{29}}{2}$; the positive value is about $5.193$.",
 r"Nhân chéo được $x^2-5x-1=0$, nên $x=\dfrac{5\pm\sqrt{29}}{2}$; giá trị dương xấp xỉ $5{,}193$.", 'rt'),
(r"What is the minimum value of $r(x)=\dfrac{x^2+4}{x}$ for $x>0$?", r"Giá trị nhỏ nhất của $r(x)=\dfrac{x^2+4}{x}$ với $x>0$ là",
 "$4$", ["$2$", "$5$", "$8$"],
 r"The graph has a minimum at $x=2$, where $r(2)=\dfrac{8}{2}=4$. Option A is the $x$-value, not the minimum value.",
 r"Đồ thị đạt cực tiểu tại $x=2$, với $r(2)=\dfrac{8}{2}=4$. Phương án A là hoành độ, không phải giá trị nhỏ nhất.", 'rt'),
(r"A town's population is $1200$ at $t=0$ and $2000$ at $t=6$ years. For the model $P(t)=ab^t$, what is $b$?", r"Dân số một thị trấn là $1200$ tại $t=0$ và $2000$ tại $t=6$ năm. Với mô hình $P(t)=ab^t$, giá trị $b$ là",
 "$1.089$", ["$1.667$", "$1.111$", "$0.918$"],
 r"$b^6=\dfrac{2000}{1200}=\dfrac53$, so $b=\left(\dfrac53\right)^{1/6}\approx1.089$.", r"$b^6=\dfrac{2000}{1200}=\dfrac53$, nên $b=\left(\dfrac53\right)^{1/6}\approx1{,}089$.", 'se'),
(r"An account starts at $5000$ dollars and grows by $3.5\%$ per year. What value of $t$ satisfies $5000(1.035)^t=8000$?", r"Một tài khoản bắt đầu với $5000$ đô la và tăng $3{,}5\%$ mỗi năm. Giá trị $t$ thoả mãn $5000(1{,}035)^t=8000$ là",
 "$13.662$", ["$17.143$", "$8.548$", "$1.600$"],
 r"$t=\dfrac{\ln1.6}{\ln1.035}\approx13.662$. Option A adds $3.5\%$ of $5000$ each year, a linear model.", r"$t=\dfrac{\ln1{,}6}{\ln1{,}035}\approx13{,}662$. Phương án A cộng $3{,}5\%$ của $5000$ mỗi năm, tức mô hình tuyến tính.", 'se'),
(r"What is the solution of $\ln(x+1)=2.5$?", r"Nghiệm của phương trình $\ln(x+1)=2{,}5$ là",
 "$11.182$", ["$12.182$", "$1.500$", "$0.916$"],
 r"$x+1=e^{2.5}\approx12.182$, so $x\approx11.182$.", r"$x+1=e^{2{,}5}\approx12{,}182$, nên $x\approx11{,}182$.", 'lg'),
(r"What is the solution of $\log_3x=1.7$?", r"Nghiệm của phương trình $\log_3x=1{,}7$ là",
 "$6.473$", ["$5.100$", "$4.913$", "$0.483$"],
 r"$x=3^{1.7}\approx6.473$. Option A multiplies instead of raising to a power.", r"$x=3^{1{,}7}\approx6{,}473$. Phương án A nhân thay vì nâng lên luỹ thừa.", 'lg'),
(r"On a semi-log plot (base $10$), data lie on a line with slope $0.12$. By what factor does $y$ change when $x$ increases by $1$?", r"Trên đồ thị bán logarit (cơ số $10$), dữ liệu nằm trên một đường thẳng có hệ số góc $0{,}12$. Khi $x$ tăng $1$ thì $y$ được nhân với",
 "$1.318$", ["$0.120$", "$1.127$", "$1.120$"],
 r"The slope is $\log b$, so $b=10^{0.12}\approx1.318$. Option C uses base $e$.", r"Hệ số góc là $\log b$, nên $b=10^{0{,}12}\approx1{,}318$. Phương án C dùng cơ số $e$.", 'lg'),
(r"The height of a point on a wheel is $h(t)=10+8\sin\dfrac{\pi t}{6}$. What is the first time $t>0$ when $h(t)=15$?", r"Độ cao của một điểm trên bánh xe là $h(t)=10+8\sin\dfrac{\pi t}{6}$. Thời điểm $t>0$ đầu tiên mà $h(t)=15$ là",
 "$1.289$", ["$0.675$", "$4.711$", "$1.194$"],
 r"$\sin\dfrac{\pi t}{6}=0.625$, so $\dfrac{\pi t}{6}=\arcsin0.625\approx0.6751$ and $t\approx1.289$. Option A is the angle, not the time.",
 r"$\sin\dfrac{\pi t}{6}=0{,}625$, nên $\dfrac{\pi t}{6}=\arcsin0{,}625\approx0{,}6751$ và $t\approx1{,}289$. Phương án A là góc, không phải thời gian.", 'tf'),
(r"A temperature model is $T(t)=18+7\cos\dfrac{\pi(t-15)}{12}$, with $t$ in hours after midnight. What is $T(10)$?", r"Mô hình nhiệt độ là $T(t)=18+7\cos\dfrac{\pi(t-15)}{12}$, với $t$ là số giờ sau nửa đêm. Giá trị $T(10)$ là",
 "$19.812$", ["$24.761$", "$16.188$", "$25.000$"],
 r"$T(10)=18+7\cos\left(-\dfrac{5\pi}{12}\right)\approx18+7(0.2588)\approx19.812$, in radian mode.", r"$T(10)=18+7\cos\left(-\dfrac{5\pi}{12}\right)\approx18+7(0{,}2588)\approx19{,}812$, ở chế độ radian.", 'tf'),
(r"What is the solution of $3\cos x=1$ on $[0,\pi]$?", r"Nghiệm của $3\cos x=1$ trên $[0,\pi]$ là",
 "$1.231$", ["$0.340$", "$1.911$", "$0.333$"],
 r"$x=\arccos\dfrac13\approx1.231$, which lies in $[0,\pi]$.", r"$x=\arccos\dfrac13\approx1{,}231$, thuộc $[0,\pi]$.", 'tp'),
(r"For the polar function $r=2+3\cos\theta$, what is the average rate of change of $r$ on $\left[0,\dfrac\pi3\right]$?", r"Với hàm cực $r=2+3\cos\theta$, tốc độ biến thiên trung bình của $r$ trên $\left[0,\dfrac\pi3\right]$ là",
 "$-1.432$", ["$-1.500$", "$1.432$", "$-0.716$"],
 r"$r(0)=5$ and $r\left(\dfrac\pi3\right)=3.5$, so $\dfrac{3.5-5}{\pi/3}\approx-1.432$. Option A forgets to divide by $\dfrac\pi3$.",
 r"$r(0)=5$ và $r\left(\dfrac\pi3\right)=3{,}5$, nên $\dfrac{3{,}5-5}{\pi/3}\approx-1{,}432$. Phương án A quên chia cho $\dfrac\pi3$.", 'tp'),
]

Q = A + B
KEYS = "CADBDACBADBCADCABDACBDBACDCBDACBDABCADCBDA"
assert len(A) == 29 and len(B) == 13 and len(KEYS) == 42, (len(A), len(B), len(KEYS))

def place(correct, wrong, key):
    k = 'ABCD'.index(key); opts = list(wrong); opts.insert(k, correct); return opts

def quiz(items, off, lang):
    out = [':::quiz test']
    for i, q in enumerate(items):
        en, vi, cor, wrong, xe, xv, topic = q[:7]; key = KEYS[off + i]
        if lang == 'en':
            opts = place(cor, wrong, key)
        elif len(q) > 7:
            vo = q[7]; opts = place(vo[0], vo[1:], key)
        else:
            opts = [vi_num(o) for o in place(cor, wrong, key)]
        out += ['::mc', en if lang == 'en' else vi] + [f"{'ABCD'[j]}. {o}" for j, o in enumerate(opts)] + ['::key ' + key, xe if lang == 'en' else xv, '']
    return '\n'.join(out).rstrip() + '\n:::'

FRQ = {'en': (R.parent / 'tools' / 'gen' / 'apprecalc_frq_en.md'), 'vi': (R.parent / 'tools' / 'gen' / 'apprecalc_frq_vi.md')}

TXT = {
'en': dict(title='AP Precalculus practice exam 1',
  desc='A full AP Precalculus practice exam in the 2027 format: 42 multiple-choice questions marked instantly and 4 free-response questions with scoring notes.',
  intro="""This practice exam follows the AP Precalculus format from May 2027. All questions are written by Lemonmath; they are not real AP questions, but they cover Units 1–3 in the official proportions and question styles.

## How to take this exam

| | Section I, Part A | Section I, Part B | Section II, Part A | Section II, Part B |
|---|---|---|---|---|
| Questions | 29 multiple choice | 13 multiple choice | FRQ 1 and 2 | FRQ 3 and 4 |
| Time | 65 minutes | 40 minutes | 35 minutes | 35 minutes |
| Calculator | not allowed | graphing calculator | graphing calculator | not allowed |

1. Do each part with a timer and without looking at the solutions. Submit each multiple-choice part to see your score.
2. In calculator parts, use radian mode and give decimals accurate to three places after the decimal point.
3. Write the free-response answers on paper, then compare with the solutions point by point, using the guide [The four free-response types and how to score](lesson:apprecalc-frq-strategies).""",
  sA='## Section I, Part A: no calculator', sB='## Section I, Part B: graphing calculator',
  s2='## Section II: free response',
  after="""## After the exam

Section I is marked out of 42 and Section II out of 24. On the real exam the multiple-choice section is $62.5\\%$ of the score and the free-response section $37.5\\%$; College Board converts the composite to the 1–5 scale, so this practice exam does not give an AP score. Use the table to find which lesson to revise for each multiple-choice question you missed.""",
  th='| Question | Lesson |\n|---|---|'),
'vi': dict(title='Đề luyện AP Precalculus số 1',
  desc='Đề luyện AP Precalculus trọn vẹn theo cấu trúc 2027: 42 câu trắc nghiệm chấm ngay và 4 câu tự luận có hướng dẫn chấm từng điểm.',
  intro="""Đề luyện này theo cấu trúc AP Precalculus từ kì thi tháng 5/2027. Mọi câu hỏi đều do Lemonmath soạn; đây không phải câu hỏi AP thật, nhưng bao quát Unit 1–3 theo đúng tỉ lệ và kiểu câu hỏi chính thức.

## Cách làm đề

| | Section I, Part A | Section I, Part B | Section II, Part A | Section II, Part B |
|---|---|---|---|---|
| Số câu | 29 trắc nghiệm | 13 trắc nghiệm | FRQ 1 và 2 | FRQ 3 và 4 |
| Thời gian | 65 phút | 40 phút | 35 phút | 35 phút |
| Máy tính | không được dùng | máy tính đồ thị | máy tính đồ thị | không được dùng |

1. Làm từng phần với đồng hồ bấm giờ và không xem lời giải. Nộp từng phần trắc nghiệm để xem điểm.
2. Ở các phần dùng máy tính, để chế độ radian và ghi số thập phân chính xác đến ba chữ số sau dấu phẩy.
3. Viết bài tự luận ra giấy, rồi so với lời giải từng điểm, dùng bài [Bốn dạng câu tự luận và cách đạt điểm](lesson:apprecalc-frq-strategies).""",
  sA='## Section I, Part A: không dùng máy tính', sB='## Section I, Part B: dùng máy tính đồ thị',
  s2='## Section II: tự luận',
  after="""## Sau khi làm đề

Section I chấm trên 42 câu và Section II trên 24 điểm. Trong kì thi thật, phần trắc nghiệm chiếm $62{,}5\\%$ và phần tự luận $37{,}5\\%$ tổng điểm; College Board quy đổi điểm tổng sang thang 1–5, nên đề luyện này không đưa ra điểm AP. Dùng bảng dưới để biết mỗi câu trắc nghiệm sai cần ôn lại bài nào.""",
  th='| Câu | Bài cần ôn |\n|---|---|'),
}

def build(lang):
    t = TXT[lang]
    rows = '\n'.join(f"| {i+1} | [{TL[lang][q[6]]}](lesson:{L[q[6]]}) |" for i, q in enumerate(Q))
    md = f"""---
title: {t['title']}
description: {t['desc']}
minutes: 175
type: test
---

{t['intro']}

{t['sA']}

{quiz(A, 0, lang)}

{t['sB']}

{quiz(B, 29, lang)}

{t['s2']}

{FRQ[lang].read_text().strip()}

{t['after']}

{t['th']}
{rows}
"""
    (R / lang / 'exams' / 'ap-precalculus' / 'apprecalc-practice-exam-1.md').write_text(md)

for lang in ('en', 'vi'):
    build(lang)
print(sorted(Counter(KEYS).items()), Counter(q[6] for q in Q))
