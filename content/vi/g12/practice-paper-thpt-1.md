---
title: Đề luyện thi tốt nghiệp số 1
description: Đề luyện thi tốt nghiệp THPT môn Toán theo cấu trúc mới, 22 câu trong 90 phút, có đáp án, lời giải và bài ôn tập cần xem lại cho từng câu.
minutes: 90
type: exam
---

Đề gồm ba phần như đề thi tốt nghiệp THPT: 12 câu trắc nghiệm nhiều phương án, 4 câu đúng sai và 6 câu trả lời ngắn, làm trong 90 phút. Phần I mỗi câu 0,25 điểm; Phần II mỗi câu tối đa 1 điểm, tính theo số ý đúng; Phần III mỗi câu 0,5 điểm. Bạn hãy in phiếu và làm trên giấy trước, rồi nhập đáp án vào các ô dưới đây để được chấm trên thang điểm 10. Mỗi lời giải đều chỉ ra bài ôn tập cần xem lại nếu bạn làm sai.

:::quiz exam
::mc
Cho hàm số $y=f(x)$ có bảng biến thiên như sau:

| $x$ | $-\infty$ | | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | $+\infty$ | $\searrow$ | $-3$ | $\nearrow$ | $1$ | $\searrow$ | $-\infty$ |

Giá trị cực đại của hàm số đã cho bằng
A. $2$.
B. $1$.
C. $-3$.
D. $0$.
::key B
$f'(x)$ đổi dấu từ $+$ sang $-$ khi đi qua $x=2$, nên hàm số đạt cực đại tại $x=2$ và giá trị cực đại là $f(2)=1$. Phương án A là điểm cực đại (giá trị của $x$), phương án C là giá trị cực tiểu, phương án D là điểm cực tiểu.

Ôn lại: [đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Tiệm cận ngang của đồ thị hàm số $y=\dfrac{4x+1}{2x-6}$ là đường thẳng
A. $y=4$.
B. $x=3$.
C. $y=2$.
D. $y=-\dfrac16$.
::key C
Ta tính giới hạn khi $x\to\pm\infty$ bằng cách chia tử và mẫu cho $x$:

$$\lim_{x\to\pm\infty}\frac{4x+1}{2x-6}=\lim_{x\to\pm\infty}\frac{4+\frac1x}{2-\frac6x}=\frac42=2.$$

Vậy tiệm cận ngang là $y=2$. Phương án A chỉ lấy hệ số của tử, phương án B là tiệm cận đứng, phương án D lấy tỉ số hai hằng số $\dfrac{1}{-6}$.

Ôn lại: [đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Hàm số $y=x^3-3x^2+2$ nghịch biến trên khoảng nào dưới đây?
A. $(0; 2)$.
B. $(-\infty; 0)$.
C. $(2; +\infty)$.
D. $(-2; 0)$.
::key A
Ta xét dấu đạo hàm:

$$y'=3x^2-6x=3x(x-2),\qquad y'<0\iff 0<x<2.$$

Vậy hàm số nghịch biến trên $(0; 2)$. Phương án B và C là các khoảng đồng biến ($y'>0$), phương án D đến từ việc giải nhầm $y'=0$ thành $x=0$, $x=-2$.

Ôn lại: [đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Họ nguyên hàm của hàm số $f(x)=2\cos x-3x^2$ là
A. $-2\sin x-x^3+C$.
B. $2\sin x-6x+C$.
C. $2\sin x-x^3+C$.
D. $2\sin x-3x^3+C$.
::key C
Ta dùng $\int\cos x\,dx=\sin x+C$ và $\int x^2\,dx=\dfrac{x^3}{3}+C$:

$$\int\left(2\cos x-3x^2\right)dx=2\sin x-3\cdot\frac{x^3}{3}+C=2\sin x-x^3+C.$$

Phương án A nhầm dấu nguyên hàm của $\cos x$, phương án B lấy đạo hàm của $3x^2$ thay vì nguyên hàm, phương án D quên chia cho $3$.

Ôn lại: [nguyên hàm và tích phân](lesson:review-integrals).

::mc
Cho $\displaystyle\int_1^3 f(x)\,dx=4$ và $\displaystyle\int_1^3 g(x)\,dx=-1$. Giá trị của $\displaystyle\int_1^3\left[2f(x)-3g(x)\right]dx$ bằng
A. $5$.
B. $11$.
C. $7$.
D. $9$.
::key B
Tích phân có tính chất tuyến tính, nên

$$\int_1^3\left[2f(x)-3g(x)\right]dx=2\cdot4-3\cdot(-1)=8+3=11.$$

Phương án A bỏ dấu âm của $-1$ ($8-3$), phương án C quên hệ số $2$, phương án D quên hệ số $3$.

Ôn lại: [nguyên hàm và tích phân](lesson:review-integrals).

::mc
Trong không gian $Oxyz$, cho hai điểm $A(2; -1; 3)$ và $B(4; 3; -1)$. Trung điểm của đoạn thẳng $AB$ có toạ độ là
A. $(1; 2; -2)$.
B. $(6; 2; 2)$.
C. $(2; 4; -4)$.
D. $(3; 1; 1)$.
::key D
Toạ độ trung điểm là trung bình cộng toạ độ hai đầu mút:

$$I\left(\frac{2+4}{2}; \frac{-1+3}{2}; \frac{3+(-1)}{2}\right)=I(3; 1; 1).$$

Phương án A là nửa hiệu toạ độ, phương án B là tổng toạ độ (quên chia $2$), phương án C là toạ độ của $\overrightarrow{AB}$.

Ôn lại: [phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::mc
Trong không gian $Oxyz$, mặt phẳng đi qua ba điểm $M(2; 0; 0)$, $N(0; -3; 0)$, $P(0; 0; 6)$ có phương trình là
A. $3x-2y+z-6=0$.
B. $3x+2y+z-6=0$.
C. $2x-3y+6z-6=0$.
D. $3x-2y+z+6=0$.
::key A
Ba điểm nằm trên ba trục nên ta dùng phương trình mặt phẳng theo đoạn chắn, rồi nhân hai vế với $6$:

$$\frac x2+\frac{y}{-3}+\frac z6=1\iff 3x-2y+z-6=0.$$

Phương án B bỏ dấu âm của $-3$, phương án C lấy nhầm các giao điểm làm hệ số, phương án D sai dấu hằng số (thay $M$ vào được $6+6\neq0$).

Ôn lại: [phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::mc
Trong không gian $Oxyz$, mặt cầu $(S)\colon(x-1)^2+(y+2)^2+(z-3)^2=16$ có tâm $I$ và bán kính $R$ là
A. $I(-1; 2; -3)$, $R=4$.
B. $I(1; -2; 3)$, $R=16$.
C. $I(1; -2; 3)$, $R=4$.
D. $I(-1; 2; -3)$, $R=16$.
::key C
Mặt cầu $(x-a)^2+(y-b)^2+(z-c)^2=R^2$ có tâm $I(a; b; c)$ và bán kính $R$. Ở đây $a=1$, $b=-2$, $c=3$ và $R^2=16$ nên $R=4$. Phương án A đổi dấu toạ độ tâm, phương án B quên lấy căn bậc hai.

Ôn lại: [phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::mc
Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA\perp(ABCD)$ và $SA=a\sqrt6$. Góc giữa đường thẳng $SC$ và mặt phẳng $(ABCD)$ bằng
A. $30^\circ$.
B. $45^\circ$.
C. $60^\circ$.
D. $90^\circ$.
::key C
$AC$ là hình chiếu vuông góc của $SC$ trên $(ABCD)$, nên góc cần tìm là $\widehat{SCA}$. Đường chéo hình vuông $AC=a\sqrt2$, do đó

$$\tan\widehat{SCA}=\frac{SA}{AC}=\frac{a\sqrt6}{a\sqrt2}=\sqrt3\ \Rightarrow\ \widehat{SCA}=60^\circ.$$

Phương án A đến từ tỉ số đảo ngược $\dfrac{AC}{SA}$; phương án D nhầm $SC$ vuông góc với đáy.

Ôn lại: [hình học không gian](lesson:review-space-geometry).

::mc
Thời gian tự học ở nhà mỗi ngày (phút) của $40$ học sinh được cho trong bảng sau:

| Thời gian (phút) | $[0; 20)$ | $[20; 40)$ | $[40; 60)$ | $[60; 80)$ | $[80; 100)$ |
|---|---|---|---|---|---|
| Số học sinh | $5$ | $12$ | $15$ | $6$ | $2$ |

Số trung bình của mẫu số liệu ghép nhóm này là
A. $34$ phút.
B. $50$ phút.
C. $44$ phút.
D. $8$ phút.
::key C
Ta dùng giá trị đại diện của mỗi nhóm (trung điểm) là $10$, $30$, $50$, $70$, $90$:

$$\bar x=\frac{5\cdot10+12\cdot30+15\cdot50+6\cdot70+2\cdot90}{40}=\frac{1760}{40}=44.$$

Phương án A dùng đầu mút trái của các nhóm, phương án B là giá trị đại diện của nhóm giữa, phương án D là trung bình của các tần số.

Ôn lại: [thống kê và xác suất](lesson:review-statistics-probability).

::mc
Cho hai biến cố $A$, $B$ với $P(A)=0{,}6$, $P(B)=0{,}5$ và $P(A\cap B)=0{,}3$. Xác suất $P(A\mid B)$ bằng
A. $0{,}5$.
B. $0{,}15$.
C. $0{,}3$.
D. $0{,}6$.
::key D
Theo định nghĩa xác suất có điều kiện:

$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{0{,}3}{0{,}5}=0{,}6.$$

Phương án A là $P(B\mid A)=\dfrac{0{,}3}{0{,}6}$ (chia nhầm cho $P(A)$), phương án B nhân $P(A\cap B)$ với $P(B)$ thay vì chia, phương án C là $P(A\cap B)$.

Ôn lại: [thống kê và xác suất](lesson:review-statistics-probability).

::mc
Tập nghiệm của bất phương trình $3^{2x-1}\le27$ là
A. $(-\infty; 2)$.
B. $(-\infty; 2]$.
C. $[2; +\infty)$.
D. $(-\infty; 14]$.
::key B
Viết $27=3^3$; cơ số $3>1$ nên giữ nguyên chiều bất đẳng thức:

$$3^{2x-1}\le3^3\iff 2x-1\le3\iff x\le2.$$

Phương án A bỏ mất dấu bằng, phương án C đổi chiều bất đẳng thức (chỉ đổi khi cơ số nhỏ hơn $1$), phương án D so sánh $2x-1$ với $27$ thay vì với số mũ $3$.

Ôn lại: [lượng giác, mũ – lôgarit, cấp số](lesson:review-trig-exp-log-sequences).

::tf
Cho hàm số $f(x)=x^3-6x^2+9x+1$.
a) $f'(x)=3x^2-12x+9$.
b) Hàm số đồng biến trên khoảng $(1; 3)$.
c) Giá trị cực đại của hàm số bằng $5$.
d) Trên đoạn $[0; 4]$, giá trị lớn nhất của hàm số bằng $5$ và chỉ đạt được tại đúng một điểm.
::key Đ S Đ S
a) Đúng: đạo hàm từng số hạng, $(x^3)'=3x^2$, $(-6x^2)'=-12x$, $(9x)'=9$.

b) Sai: $f'(x)=3(x-1)(x-3)<0$ khi $1<x<3$, nên hàm số nghịch biến trên $(1; 3)$.

c) Đúng: $f'$ đổi dấu từ $+$ sang $-$ tại $x=1$, nên giá trị cực đại là $f(1)=1-6+9+1=5$.

d) Sai: so sánh $f(0)=1$, $f(1)=5$, $f(3)=1$, $f(4)=64-96+36+1=5$. Giá trị lớn nhất bằng $5$ nhưng đạt tại hai điểm $x=1$ và $x=4$.

Ôn lại: [đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::tf
Một tên lửa mô hình được phóng thẳng đứng từ mặt đất. Trong $4$ giây đầu, vận tốc của nó là $v(t)=12t-3t^2$ (m/s), với $t$ là số giây kể từ lúc phóng. Gọi $h(t)$ là độ cao (m) của tên lửa tại thời điểm $t$, $0\le t\le4$.
a) Vận tốc của tên lửa tại thời điểm $t=1$ giây là $9$ m/s.
b) Vận tốc của tên lửa tăng liên tục trong suốt $4$ giây đầu.
c) $h(t)=6t^2-t^3$.
d) Độ cao lớn nhất mà tên lửa đạt được trong $4$ giây đầu là $32$ m.
::key Đ S Đ Đ
a) Đúng: $v(1)=12-3=9$ (m/s).

b) Sai: $v'(t)=12-6t<0$ khi $t>2$, nên vận tốc chỉ tăng trong $2$ giây đầu rồi giảm.

c) Đúng: $h(t)$ là nguyên hàm của $v(t)$ với $h(0)=0$: $h(t)=6t^2-t^3+C$ và $h(0)=0$ cho $C=0$.

d) Đúng: $v(t)=3t(4-t)\ge0$ trên $[0; 4]$ nên độ cao tăng, lớn nhất tại $t=4$: $h(4)=\displaystyle\int_0^4\left(12t-3t^2\right)dt=96-64=32$ (m).

Ôn lại: [nguyên hàm và tích phân](lesson:review-integrals).

::tf
Trong không gian $Oxyz$, cho hai điểm $A(1; 0; 2)$, $B(3; 2; 0)$ và mặt phẳng $(P)\colon 2x+y-z-4=0$.
a) $\overrightarrow{AB}=(2; 2; -2)$.
b) Trung điểm $I$ của đoạn thẳng $AB$ thuộc mặt phẳng $(P)$.
c) Mặt phẳng trung trực của đoạn thẳng $AB$ có phương trình $x+y-z=0$.
d) Góc giữa đường thẳng $AB$ và mặt phẳng $(P)$ lớn hơn $60^\circ$.
::key Đ Đ S Đ
a) Đúng: $\overrightarrow{AB}=(3-1; 2-0; 0-2)=(2; 2; -2)$.

b) Đúng: $I(2; 1; 1)$ và $2\cdot2+1-1-4=0$.

c) Sai: mặt phẳng trung trực đi qua $I(2; 1; 1)$, có vectơ pháp tuyến $\vec n=(1; 1; -1)$, nên có phương trình $(x-2)+(y-1)-(z-1)=0$, tức là $x+y-z-2=0$. Mặt phẳng $x+y-z=0$ không đi qua $I$.

d) Đúng: với $\vec u=(1; 1; -1)$ và $\vec n_P=(2; 1; -1)$,

$$\sin\varphi=\frac{|2+1+1|}{\sqrt3\cdot\sqrt6}=\frac{4}{3\sqrt2}\approx0{,}943\ \Rightarrow\ \varphi\approx70{,}5^\circ>60^\circ.$$

Ôn lại: [phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::tf
Một nhà máy có hai dây chuyền. Dây chuyền I làm ra $60\%$ số sản phẩm, dây chuyền II làm ra $40\%$. Tỉ lệ sản phẩm lỗi của dây chuyền I là $3\%$, của dây chuyền II là $5\%$. Chọn ngẫu nhiên một sản phẩm của nhà máy.
a) Xác suất sản phẩm bị lỗi, biết nó do dây chuyền I làm ra, bằng $0{,}03$.
b) Xác suất sản phẩm bị lỗi bằng $0{,}04$.
c) Xác suất sản phẩm do dây chuyền I làm ra và bị lỗi bằng $0{,}03$.
d) Biết sản phẩm được chọn bị lỗi, xác suất nó do dây chuyền II làm ra lớn hơn $0{,}5$.
::key Đ S S Đ
Gọi $A$ là biến cố "sản phẩm do dây chuyền I làm ra", $L$ là biến cố "sản phẩm bị lỗi".

a) Đúng: đề cho $P(L\mid A)=0{,}03$.

b) Sai: theo công thức xác suất toàn phần, $P(L)=0{,}6\cdot0{,}03+0{,}4\cdot0{,}05=0{,}018+0{,}02=0{,}038$. Số $0{,}04$ là trung bình cộng của hai tỉ lệ, không tính đến tỉ trọng của mỗi dây chuyền.

c) Sai: $P(A\cap L)=P(A)\cdot P(L\mid A)=0{,}6\cdot0{,}03=0{,}018$; số $0{,}03$ là xác suất có điều kiện.

d) Đúng: theo công thức Bayes, $P(\overline A\mid L)=\dfrac{0{,}02}{0{,}038}=\dfrac{10}{19}\approx0{,}526>0{,}5$.

Ôn lại: [thống kê và xác suất](lesson:review-statistics-probability).

::sa
Một tấm áp phích hình chữ nhật có phần in chữ là một hình chữ nhật diện tích $384$ cm². Lề trên và lề dưới mỗi lề rộng $3$ cm, lề trái và lề phải mỗi lề rộng $2$ cm. Diện tích nhỏ nhất của tấm áp phích là bao nhiêu cm²?
::key 600
Gọi chiều rộng phần in là $x$ cm ($x>0$), chiều cao phần in là $\dfrac{384}{x}$ cm. Diện tích tấm áp phích là

$$S(x)=(x+4)\left(\frac{384}{x}+6\right)=408+6x+\frac{1536}{x}.$$

$S'(x)=6-\dfrac{1536}{x^2}=0\iff x^2=256\iff x=16$, và $S'$ đổi dấu từ $-$ sang $+$ tại $x=16$. Khi đó phần in là $16\times24$ cm, tấm áp phích là $20\times30$ cm, nên diện tích nhỏ nhất bằng $600$ cm².

Ôn lại: [bài toán tối ưu và thực tế](lesson:review-optimisation-real-life).

::sa
Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=3$, $AD=4$, $AA'=12$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(A'BD)$ (làm tròn kết quả đến hàng phần trăm).
::key 2,35
Ta chọn hệ trục toạ độ có gốc tại $A$ và các trục theo $AB$, $AD$, $AA'$: $B(3; 0; 0)$, $D(0; 4; 0)$, $A'(0; 0; 12)$. Vectơ pháp tuyến $\vec n=(a; b; c)$ của $(A'BD)$ vuông góc với $\overrightarrow{BD}=(-3; 4; 0)$ và $\overrightarrow{BA'}=(-3; 0; 12)$:

$$-3a+4b=0,\qquad -3a+12c=0\ \Rightarrow\ \text{chọn } a=4,\ b=3,\ c=1.$$

Vậy $(A'BD)\colon 4(x-3)+3y+z=0$, tức là $4x+3y+z-12=0$, và

$$d(A, (A'BD))=\frac{|4\cdot0+3\cdot0+0-12|}{\sqrt{4^2+3^2+1^2}}=\frac{12}{\sqrt{26}}\approx2{,}353.$$

Làm tròn đến hàng phần trăm, khoảng cách bằng $2{,}35$. Chú ý: vì $AB$, $AD$, $AA'$ đôi một vuông góc nên có thể kiểm tra lại bằng hệ thức $\dfrac1{h^2}=\dfrac1{AB^2}+\dfrac1{AD^2}+\dfrac1{AA'^2}$, nhưng hệ thức này không có trong sách giáo khoa.

Ôn lại: [hình học không gian](lesson:review-space-geometry).

::sa
Chọn hệ trục $Oxyz$ (đơn vị: mét) với mặt phẳng $(Oxy)$ là mặt đất. Một đường dây trượt (zipline) được căng thẳng từ điểm $A(0; 0; 20)$ trên một đài cao đến điểm $B(30; 40; 5)$. Tính góc giữa đường dây và mặt đất (đơn vị: độ, làm tròn kết quả đến hàng đơn vị).
::key 17
Đường dây có vectơ chỉ phương $\overrightarrow{AB}=(30; 40; -15)$, mặt đất có vectơ pháp tuyến $\vec k=(0; 0; 1)$. Ta có

$$\sin\varphi=\frac{|-15|}{\sqrt{30^2+40^2+15^2}}=\frac{15}{\sqrt{2725}}\approx0{,}287\ \Rightarrow\ \varphi\approx16{,}7^\circ.$$

Làm tròn đến hàng đơn vị, góc giữa đường dây và mặt đất khoảng $17^\circ$.

Ôn lại: [phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::sa
Một hệ thống báo cháy có ba cảm biến hoạt động độc lập. Khi có cháy, xác suất phát hiện của từng cảm biến lần lượt là $0{,}9$; $0{,}8$ và $0{,}5$. Khi có cháy, tính xác suất có đúng hai cảm biến phát hiện được.
::key 0,49
"Đúng hai cảm biến phát hiện" là hợp của ba biến cố xung khắc (một cảm biến bỏ sót, hai cảm biến còn lại phát hiện). Các cảm biến độc lập nên ta nhân xác suất trong từng trường hợp rồi cộng lại:

$$P=0{,}9\cdot0{,}8\cdot0{,}5+0{,}9\cdot0{,}2\cdot0{,}5+0{,}1\cdot0{,}8\cdot0{,}5=0{,}36+0{,}09+0{,}04=0{,}49.$$

Ôn lại: [thống kê và xác suất](lesson:review-statistics-probability).

::sa
Tính diện tích hình phẳng giới hạn bởi parabol $y=x^2-2x$ và đường thẳng $y=x$.
::key 4,5
Hoành độ giao điểm: $x^2-2x=x\iff x^2-3x=0\iff x=0$ hoặc $x=3$. Trên $[0; 3]$ đường thẳng nằm trên parabol (thử $x=1$: $1>-1$), nên

$$S=\int_0^3\left(x-x^2+2x\right)dx=\int_0^3\left(3x-x^2\right)dx=\left[\frac{3x^2}{2}-\frac{x^3}{3}\right]_0^3=\frac{27}{2}-9=4{,}5.$$

Ôn lại: [nguyên hàm và tích phân](lesson:review-integrals).

::sa
Một cốc trà vừa pha có nhiệt độ $95^\circ$C, đặt trong phòng có nhiệt độ $25^\circ$C. Nhiệt độ của trà sau $t$ phút là $T(t)=25+70\cdot e^{-kt}$ ($^\circ$C), với $k$ là hằng số dương. Sau $5$ phút, trà còn $60^\circ$C. Sau bao nhiêu phút kể từ lúc pha, trà còn $30^\circ$C (làm tròn kết quả đến hàng đơn vị)?
::key 19
Từ $T(5)=60$ ta có $70e^{-5k}=35$, tức là $e^{-5k}=\dfrac12$, nên $k=\dfrac{\ln2}{5}$. Giải $T(t)=30$:

$$70e^{-kt}=5\iff e^{-kt}=\frac1{14}\iff t=\frac{\ln14}{k}=\frac{5\ln14}{\ln2}\approx19{,}04.$$

Vậy sau khoảng $19$ phút trà còn $30^\circ$C.

Ôn lại: [lượng giác, mũ – lôgarit, cấp số](lesson:review-trig-exp-log-sequences).
:::
