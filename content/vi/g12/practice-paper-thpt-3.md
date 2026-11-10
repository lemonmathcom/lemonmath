---
title: Đề luyện thi tốt nghiệp số 3
description: Đề luyện 22 câu theo cấu trúc thi tốt nghiệp THPT từ năm 2025, mức khó hơn đề 1 và 2, có lời giải chi tiết và bài ôn lại cho từng câu.
minutes: 90
type: exam
---

Đề gồm $22$ câu, làm trong $90$ phút, chia thành ba phần: Phần I có $12$ câu nhiều phương án lựa chọn ($0{,}25$ điểm mỗi câu), Phần II có $4$ câu đúng sai (tối đa $1$ điểm mỗi câu), Phần III có $6$ câu trả lời ngắn ($0{,}5$ điểm mỗi câu). Đề này khó hơn đề số 1 và số 2, nhiều câu cần hai đến ba bước lập luận. Bạn hãy làm trên phiếu in trước, bấm giờ nghiêm túc, rồi nhập đáp án vào bên dưới để được chấm theo thang điểm $10$.

:::quiz exam
::mc
Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=x^2(x-1)(x+2)^3$ với mọi $x\in\mathbb{R}$. Số điểm cực trị của hàm số đã cho là
A. $1$.
B. $2$.
C. $3$.
D. $6$.
::key B
Hàm số đạt cực trị tại những điểm mà $f'(x)$ đổi dấu, tức là các nghiệm có bội lẻ:

$$x=1\ (\text{bội } 1),\qquad x=-2\ (\text{bội } 3),\qquad x=0\ (\text{bội } 2 \text{, không đổi dấu}).$$

Vậy hàm số có $2$ điểm cực trị. Phương án C đếm cả nghiệm kép $x=0$; phương án D cộng các số mũ $2+1+3$.

Ôn lại: [Ôn tập: đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y=\dfrac{2x^2-3x+1}{x^2-1}$ là
A. $1$.
B. $2$.
C. $3$.
D. $4$.
::key B
Phân tích tử và mẫu thành nhân tử rồi rút gọn (với $x\neq1$):

$$y=\dfrac{(2x-1)(x-1)}{(x-1)(x+1)}=\dfrac{2x-1}{x+1}.$$

Khi $x\to1$ thì $y\to\dfrac12$ (hữu hạn) nên $x=1$ không phải tiệm cận đứng. Đồ thị có tiệm cận đứng $x=-1$ và tiệm cận ngang $y=2$, tổng cộng $2$ đường. Phương án C quên kiểm tra giới hạn tại $x=1$, chỉ nhìn nghiệm của mẫu.

Ôn lại: [Ôn tập: đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Cho hàm số $y=f(x)$ có bảng biến thiên như sau.

| $x$ | $-\infty$ | | $-1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $2$ | $\searrow$ | $-4$ | $\nearrow$ | $+\infty$ |

Số nghiệm thực của phương trình $2f(x)+5=0$ là
A. $1$.
B. $2$.
C. $3$.
D. $0$.
::key C
Đưa phương trình về dạng $f(x)=k$ rồi đếm giao điểm với đường thẳng $y=k$:

$$2f(x)+5=0\iff f(x)=-\dfrac52.$$

Vì $-4<-\dfrac52<2$, đường thẳng $y=-\dfrac52$ cắt đồ thị trên mỗi khoảng $(-\infty; -1)$, $(-1; 3)$, $(3; +\infty)$ tại đúng một điểm, nên phương trình có $3$ nghiệm. Phương án A chuyển vế sai dấu thành $f(x)=\dfrac52>2$.

Ôn lại: [Ôn tập: đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Họ nguyên hàm của hàm số $f(x)=e^{2x}-\dfrac1x$ trên khoảng $(0; +\infty)$ là
A. $2e^{2x}-\ln x+C$.
B. $\dfrac12e^{2x}+\dfrac{1}{x^2}+C$.
C. $\dfrac12e^{2x}-\ln x+C$.
D. $\dfrac12e^{2x}+\ln x+C$.
::key C
Dùng bảng nguyên hàm $\displaystyle\int e^{ax}\,dx=\dfrac1a e^{ax}+C$ và $\displaystyle\int\dfrac1x\,dx=\ln|x|+C$, với $x>0$ thì $|x|=x$:

$$\int\Big(e^{2x}-\dfrac1x\Big)dx=\dfrac12e^{2x}-\ln x+C.$$

Phương án A lấy đạo hàm của $e^{2x}$ thay vì nguyên hàm; phương án B đạo hàm $\dfrac1x$; phương án D sai dấu.

Ôn lại: [Ôn tập: nguyên hàm và tích phân](lesson:review-integrals).

::mc
Cho $\displaystyle\int_0^2 f(x)\,dx=3$ và $\displaystyle\int_0^5 f(x)\,dx=7$. Giá trị của $\displaystyle\int_2^5\big[2f(x)-1\big]\,dx$ bằng
A. $8$.
B. $5$.
C. $7$.
D. $11$.
::key B
Tách khoảng lấy tích phân, rồi dùng tính chất tuyến tính:

$$\int_2^5 f(x)\,dx=7-3=4,\qquad \int_2^5\big[2f(x)-1\big]dx=2\cdot4-(5-2)=5.$$

Phương án A quên số hạng $-1$; phương án C coi $\displaystyle\int_2^5 1\,dx=1$; phương án D dùng nhầm $\displaystyle\int_0^5$ thay cho $\displaystyle\int_2^5$: $2\cdot7-3$.

Ôn lại: [Ôn tập: nguyên hàm và tích phân](lesson:review-integrals).

::mc
Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 3)$. Mặt phẳng trung trực của đoạn thẳng $AB$ có phương trình là
A. $x-y+2z+3=0$.
B. $x-y+2z-9=0$.
C. $2x+y+z-6=0$.
D. $x-y+2z-3=0$.
::key D
Mặt phẳng trung trực đi qua trung điểm $I$ của $AB$ và nhận $\overrightarrow{AB}$ làm vectơ pháp tuyến:

$$I(2; 1; 1),\qquad \overrightarrow{AB}=(2; -2; 4)=2(1; -1; 2).$$

$$1(x-2)-1(y-1)+2(z-1)=0\iff x-y+2z-3=0.$$

Phương án A đi qua $A$, phương án B đi qua $B$ thay vì trung điểm; phương án C lấy nhầm toạ độ của $I$ làm vectơ pháp tuyến.

Ôn lại: [Ôn tập: phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::mc
Trong không gian $Oxyz$, cho mặt cầu $(S)\colon x^2+y^2+z^2-4x+2y-6z-2=0$ và mặt phẳng $(P)\colon 2x-y+2z+1=0$. Khẳng định nào sau đây đúng?
A. $(P)$ tiếp xúc với $(S)$.
B. $(P)$ cắt $(S)$ theo một đường tròn.
C. $(P)$ và $(S)$ không có điểm chung.
D. $(P)$ đi qua tâm của $(S)$.
::key A
Tìm tâm và bán kính của mặt cầu, rồi so sánh khoảng cách từ tâm đến mặt phẳng với bán kính:

$$I(2; -1; 3),\qquad R=\sqrt{2^2+1^2+3^2+2}=4.$$

$$d\big(I,(P)\big)=\dfrac{|2\cdot2-(-1)+2\cdot3+1|}{\sqrt{4+1+4}}=\dfrac{12}{3}=4=R.$$

Vậy $(P)$ tiếp xúc với $(S)$. Phương án C xuất hiện khi quên số hạng $+2$ trong $R$ (được $R=\sqrt{14}<4$) hoặc quên chia cho $3$; phương án B xuất hiện khi lấy sai dấu tâm $I(-2; 1; -3)$.

Ôn lại: [Ôn tập: phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::mc
Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA$ vuông góc với mặt phẳng đáy và $SA=a\sqrt2$. Góc giữa đường thẳng $SC$ và mặt phẳng $(SAB)$ bằng
A. $45^\circ$.
B. $60^\circ$.
C. $90^\circ$.
D. $30^\circ$.
::key D
Ta tìm hình chiếu của $C$ lên $(SAB)$. Vì $BC\perp AB$ và $BC\perp SA$ nên $BC\perp(SAB)$, do đó hình chiếu của $SC$ lên $(SAB)$ là $SB$ và góc cần tìm là $\widehat{CSB}$:

$$SB=\sqrt{SA^2+AB^2}=a\sqrt3,\qquad \tan\widehat{CSB}=\dfrac{BC}{SB}=\dfrac{a}{a\sqrt3}=\dfrac{1}{\sqrt3}.$$

Vậy góc bằng $30^\circ$. Phương án A là góc giữa $SC$ và mặt đáy ($\tan=\dfrac{SA}{AC}=1$); phương án B là góc $\widehat{SCB}$, phần bù trong tam giác vuông $SBC$.

Ôn lại: [Ôn tập: hình học không gian](lesson:review-space-geometry).

::mc
Thời gian tự học mỗi ngày của $40$ học sinh được cho trong bảng sau.

| Thời gian (phút) | $[0; 10)$ | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ | $[40; 50)$ |
|---|---|---|---|---|---|
| Số học sinh | $5$ | $12$ | $15$ | $6$ | $2$ |

Mốt của mẫu số liệu ghép nhóm trên là
A. $22{,}5$.
B. $25$.
C. $27{,}5$.
D. $22$.
::key A
Nhóm có tần số lớn nhất là $[20; 30)$, với $n_{m-1}=12$, $n_m=15$, $n_{m+1}=6$, độ dài nhóm $h=10$:

$$M_o=20+\dfrac{15-12}{(15-12)+(15-6)}\cdot10=20+\dfrac{3}{12}\cdot10=22{,}5.$$

Phương án B là giá trị đại diện của nhóm; phương án C đặt nhầm $15-6$ lên tử số; phương án D là số trung bình.

Ôn lại: [Ôn tập: thống kê và xác suất](lesson:review-statistics-probability).

::mc
Chiều dài (cm) của $10$ chiếc lá được cho trong bảng sau.

| Chiều dài (cm) | $[4; 6)$ | $[6; 8)$ | $[8; 10)$ |
|---|---|---|---|
| Số lá | $3$ | $5$ | $2$ |

Độ lệch chuẩn của mẫu số liệu ghép nhóm trên là
A. $1{,}96$.
B. $6$.
C. $1{,}4$.
D. $2$.
::key C
Dùng các giá trị đại diện $5$, $7$, $9$:

$$\bar x=\dfrac{3\cdot5+5\cdot7+2\cdot9}{10}=6{,}8,\qquad s^2=\dfrac{3\cdot25+5\cdot49+2\cdot81}{10}-6{,}8^2=48{,}2-46{,}24=1{,}96.$$

Vậy $s=\sqrt{1{,}96}=1{,}4$. Phương án A là phương sai (quên lấy căn); phương án B là khoảng biến thiên $10-4$; phương án D là độ dài một nhóm.

Ôn lại: [Ôn tập: thống kê và xác suất](lesson:review-statistics-probability).

::mc
Cho hai biến cố $A$, $B$ với $P(A)=0{,}5$, $P(B)=0{,}4$ và $P(A\cap B)=0{,}12$. Giá trị của $P(A\mid B)$ bằng
A. $0{,}24$.
B. $0{,}2$.
C. $0{,}12$.
D. $0{,}3$.
::key D
Theo định nghĩa xác suất có điều kiện, chia cho xác suất của biến cố đã biết là $B$:

$$P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}=\dfrac{0{,}12}{0{,}4}=0{,}3.$$

Phương án A chia cho $P(A)$, tức là tính $P(B\mid A)$; phương án B là tích $P(A)\cdot P(B)$, chỉ đúng khi hai biến cố độc lập; phương án C là $P(A\cap B)$.

Ôn lại: [Ôn tập: thống kê và xác suất](lesson:review-statistics-probability).

::mc
Tập nghiệm của bất phương trình $\log_{\frac12}(x-1)\ge-2$ là
A. $(1; 5]$.
B. $[5; +\infty)$.
C. $(-\infty; 5]$.
D. $\Big(1; \dfrac54\Big]$.
::key A
Điều kiện $x>1$. Cơ số $\dfrac12<1$ nên khi bỏ lôgarit ta đổi chiều bất phương trình:

$$\log_{\frac12}(x-1)\ge-2\iff x-1\le\Big(\dfrac12\Big)^{-2}=4\iff x\le5.$$

Kết hợp điều kiện được $S=(1; 5]$. Phương án B quên đổi chiều; phương án C quên điều kiện; phương án D tính nhầm $\Big(\dfrac12\Big)^{-2}=\dfrac14$.

Ôn lại: [Ôn tập: lượng giác, mũ – lôgarit, cấp số](lesson:review-trig-exp-log-sequences).

::tf
Cho hàm số $f(x)=\dfrac{x^2-3x+6}{x-1}$.
a) Đạo hàm của hàm số là $f'(x)=\dfrac{x^2-2x-3}{(x-1)^2}$ với mọi $x\neq1$.
b) Hàm số nghịch biến trên khoảng $(-1; 3)$.
c) Đồ thị hàm số có tiệm cận xiên là đường thẳng $y=x-2$.
d) Khoảng cách giữa hai điểm cực trị của đồ thị hàm số bằng $4\sqrt5$.
::key Đ S Đ Đ
a) Đúng: $f'(x)=\dfrac{(2x-3)(x-1)-(x^2-3x+6)}{(x-1)^2}=\dfrac{x^2-2x-3}{(x-1)^2}$.

b) Sai: $f'(x)=\dfrac{(x+1)(x-3)}{(x-1)^2}<0$ trên $(-1; 1)$ và $(1; 3)$, nhưng hàm số không xác định tại $x=1$, nên không nói nghịch biến trên cả khoảng $(-1; 3)$ (chẳng hạn $f(0)=-6<f(2)=4$).

c) Đúng: chia đa thức được $f(x)=x-2+\dfrac{4}{x-1}$ và $\dfrac{4}{x-1}\to0$ khi $x\to\pm\infty$.

d) Đúng: hai điểm cực trị là $(-1; -5)$ và $(3; 3)$, khoảng cách bằng $\sqrt{4^2+8^2}=\sqrt{80}=4\sqrt5$.

Ôn lại: [Ôn tập: đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::tf
Một bể chứa đang có $200$ lít nước. Từ thời điểm $t=0$, người ta mở vòi cho nước chảy vào bể với tốc độ $v(t)=16+6t-t^2$ (lít/phút), $0\le t\le8$, $t$ tính bằng phút.
a) Tại thời điểm $t=2$, tốc độ nước chảy vào bể là $24$ lít/phút.
b) Tốc độ nước chảy vào bể tăng trên cả đoạn $[0; 8]$.
c) Sau $8$ phút, lượng nước trong bể xấp xỉ $349{,}3$ lít.
d) Lượng nước trong bể đạt $300$ lít trước thời điểm $t=4$.
::key Đ S Đ S
a) Đúng: $v(2)=16+12-4=24$.

b) Sai: $v'(t)=6-2t$ đổi dấu tại $t=3$, nên tốc độ tăng trên $[0; 3]$ và giảm trên $[3; 8]$ (tốc độ lớn nhất $v(3)=25$).

c) Đúng: lượng nước sau $t$ phút là $W(t)=200+\displaystyle\int_0^t v(s)\,ds=200+16t+3t^2-\dfrac{t^3}{3}$, nên $W(8)=200+128+192-\dfrac{512}{3}=\dfrac{1048}{3}\approx349{,}3$ lít.

d) Sai: $W(4)=200+64+48-\dfrac{64}{3}\approx290{,}7<300$; vì $v(t)>0$ nên $W$ tăng, do đó bể chỉ đạt $300$ lít sau thời điểm $t=4$.

Ôn lại: [Ôn tập: nguyên hàm và tích phân](lesson:review-integrals).

::tf
Trong không gian $Oxyz$ (đơn vị trên mỗi trục là mét), một drone bay thẳng đều từ điểm $M(1; 2; 3)$ theo hướng của vectơ $\vec u=(2; -1; 2)$ với tốc độ $3$ m/s. Mặt phẳng $(Oxy)$ là mặt đất. Trạm điều khiển đặt tại điểm $K(7; 2; 6)$.
a) Vị trí của drone sau $t$ giây là điểm $(1+2t; 2-t; 3+2t)$.
b) Sau $2$ giây, drone ở điểm $(5; 0; 7)$.
c) Góc giữa đường bay của drone và mặt đất lớn hơn $45^\circ$.
d) Khoảng cách nhỏ nhất giữa drone và trạm điều khiển bằng $3$ m.
::key Đ Đ S Đ
a) Đúng: $|\vec u|=\sqrt{4+1+4}=3$ đúng bằng tốc độ, nên mỗi giây drone dịch chuyển đúng một vectơ $\vec u$.

b) Đúng: thay $t=2$ được $(5; 0; 7)$.

c) Sai: mặt đất có vectơ pháp tuyến $\vec k=(0; 0; 1)$, nên $\sin\varphi=\dfrac{|\vec u\cdot\vec k|}{|\vec u|\cdot|\vec k|}=\dfrac23$, $\varphi\approx41{,}8^\circ<45^\circ$.

d) Đúng: với $P(t)=(1+2t; 2-t; 3+2t)$, $\overrightarrow{KP}=(2t-6; -t; 2t-3)$ và $KP^2=9t^2-36t+45=9(t-2)^2+9\ge9$, nhỏ nhất khi $t=2$, nên khoảng cách nhỏ nhất là $3$ m.

Ôn lại: [Ôn tập: phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::tf
Một nhà máy có hai dây chuyền. Dây chuyền I làm ra $60\%$ số sản phẩm với tỉ lệ lỗi $3\%$; dây chuyền II làm ra $40\%$ số sản phẩm với tỉ lệ lỗi $5\%$. Chọn ngẫu nhiên một sản phẩm của nhà máy.
a) Xác suất sản phẩm được chọn bị lỗi là $0{,}038$.
b) Biết sản phẩm được chọn bị lỗi, xác suất nó do dây chuyền I làm ra lớn hơn $0{,}5$.
c) Biết sản phẩm được chọn không bị lỗi, xác suất nó do dây chuyền II làm ra lớn hơn $0{,}4$.
d) Chọn ngẫu nhiên và độc lập hai sản phẩm, xác suất có ít nhất một sản phẩm bị lỗi nhỏ hơn $0{,}08$.
::key Đ S S Đ
Gọi $L$ là biến cố "sản phẩm bị lỗi", $D_1$, $D_2$ là "do dây chuyền I, II làm ra".

a) Đúng: theo công thức xác suất toàn phần, $P(L)=0{,}6\cdot0{,}03+0{,}4\cdot0{,}05=0{,}018+0{,}02=0{,}038$.

b) Sai: theo công thức Bayes, $P(D_1\mid L)=\dfrac{0{,}018}{0{,}038}=\dfrac{9}{19}\approx0{,}474<0{,}5$. Dây chuyền I làm nhiều sản phẩm hơn nhưng tỉ lệ lỗi thấp hơn.

c) Sai: $P(D_2\mid\overline L)=\dfrac{0{,}4\cdot0{,}95}{1-0{,}038}=\dfrac{0{,}38}{0{,}962}\approx0{,}395<0{,}4$.

d) Đúng: dùng biến cố đối, $1-0{,}962^2\approx0{,}0746<0{,}08$.

Ôn lại: [Ôn tập: thống kê và xác suất](lesson:review-statistics-probability).

::sa
Một xưởng làm vỏ lon hình trụ có nắp, thể tích $1000\ \text{cm}^3$. Giá vật liệu làm hai đáy gấp đôi giá vật liệu làm mặt xung quanh (tính theo mỗi $\text{cm}^2$). Để chi phí vật liệu nhỏ nhất thì bán kính đáy của lon bằng bao nhiêu centimét (làm tròn kết quả đến hàng phần mười)?
::key 4,3
Gọi bán kính đáy là $r$, chiều cao $h=\dfrac{1000}{\pi r^2}$. Lấy giá mặt xung quanh là $1$ đơn vị mỗi $\text{cm}^2$, chi phí tỉ lệ với

$$C(r)=2\cdot2\pi r^2+2\pi rh=4\pi r^2+\dfrac{2000}{r},\qquad r>0.$$

$$C'(r)=8\pi r-\dfrac{2000}{r^2}=0\iff r^3=\dfrac{250}{\pi}\iff r=\sqrt[3]{\dfrac{250}{\pi}}\approx4{,}30.$$

$C'(r)$ đổi dấu từ âm sang dương tại đó nên chi phí nhỏ nhất khi $r\approx4{,}3$ cm.

Ôn lại: [Ôn tập: bài toán tối ưu và thực tế](lesson:review-optimisation-real-life).

::sa
Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $2$, $SA$ vuông góc với mặt phẳng đáy và $SA=2$. Tính khoảng cách giữa hai đường thẳng chéo nhau $BD$ và $SC$ (làm tròn kết quả đến hàng phần trăm).
::key 0,82
Dựng đoạn vuông góc chung. Gọi $O$ là tâm hình vuông. Vì $BD\perp AC$ và $BD\perp SA$ nên $BD\perp(SAC)$. Trong $(SAC)$ kẻ $OH\perp SC$ tại $H$; khi đó $OH\perp BD$, nên $OH$ là đoạn vuông góc chung và $d(BD, SC)=OH$.

$$AC=2\sqrt2,\qquad SC=\sqrt{SA^2+AC^2}=2\sqrt3,\qquad OC=\sqrt2.$$

Hai tam giác vuông $CHO$ và $CAS$ có chung góc $C$ nên đồng dạng:

$$OH=\dfrac{OC\cdot SA}{SC}=\dfrac{\sqrt2\cdot2}{2\sqrt3}=\dfrac{\sqrt6}{3}\approx0{,}816.$$

Vậy khoảng cách xấp xỉ $0{,}82$.

Ôn lại: [Ôn tập: hình học không gian](lesson:review-space-geometry).

::sa
Trong không gian $Oxyz$ (đơn vị: mét), mặt đất là mặt phẳng $(Oxy)$. Một đường trượt zipline là đoạn dây cáp căng thẳng từ điểm $A(0; 0; 20)$ trên một tháp đến điểm $B(40; 30; 5)$ trên một cột thấp hơn. Tính góc giữa dây cáp và mặt đất (đơn vị: độ, làm tròn kết quả đến hàng phần mười).
::key 16,7
Góc $\varphi$ giữa đường thẳng $AB$ và mặt phẳng $(Oxy)$ có vectơ pháp tuyến $\vec k=(0; 0; 1)$:

$$\overrightarrow{AB}=(40; 30; -15),\qquad AB=\sqrt{1600+900+225}=5\sqrt{109}\approx52{,}2.$$

$$\sin\varphi=\dfrac{|-15|}{5\sqrt{109}}\approx0{,}2873\ \Rightarrow\ \varphi\approx16{,}7^\circ.$$

Ôn lại: [Ôn tập: phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::sa
Một hộp có $5$ viên bi đỏ và $4$ viên bi xanh. Lấy ngẫu nhiên đồng thời $2$ viên bi. Biết rằng trong hai viên lấy ra có ít nhất một viên màu đỏ, tính xác suất cả hai viên đều màu đỏ (làm tròn kết quả đến hàng phần trăm).
::key 0,33
Gọi $A$ là "hai viên đều đỏ", $B$ là "có ít nhất một viên đỏ"; vì $A\subset B$ nên $A\cap B=A$:

$$P(A)=\dfrac{C_5^2}{C_9^2}=\dfrac{10}{36},\qquad P(B)=1-\dfrac{C_4^2}{C_9^2}=1-\dfrac{6}{36}=\dfrac{30}{36}.$$

$$P(A\mid B)=\dfrac{10}{30}=\dfrac13\approx0{,}33.$$

Ôn lại: [Ôn tập: thống kê và xác suất](lesson:review-statistics-probability).

::sa
Trong một mặt phẳng toạ độ (đơn vị trên mỗi trục là mét), một bồn hoa có dạng hình phẳng giới hạn bởi parabol $y=\dfrac{x^2}{2}$ và đường thẳng $y=x+4$. Chi phí trồng hoa là $250\,000$ đồng cho mỗi mét vuông. Tính chi phí trồng hoa cho cả bồn (đơn vị: triệu đồng).
::key 4,5
Hoành độ giao điểm là nghiệm của $\dfrac{x^2}{2}=x+4\iff x^2-2x-8=0\iff x=-2$ hoặc $x=4$. Trên $[-2; 4]$ đường thẳng nằm trên parabol, nên diện tích là

$$S=\int_{-2}^{4}\Big(x+4-\dfrac{x^2}{2}\Big)dx=\Big[\dfrac{x^2}{2}+4x-\dfrac{x^3}{6}\Big]_{-2}^{4}=\dfrac{40}{3}-\Big(-\dfrac{14}{3}\Big)=18\ (\text{m}^2).$$

Chi phí là $18\cdot250\,000=4\,500\,000$ đồng, tức $4{,}5$ triệu đồng.

Ôn lại: [Ôn tập: nguyên hàm và tích phân](lesson:review-integrals).

::sa
Một cốc nước nóng được để trong phòng có nhiệt độ $25^\circ\text{C}$. Nhiệt độ của nước sau $t$ phút là $T(t)=25+70e^{-kt}$ ($^\circ$C), với $k>0$ là hằng số. Sau $10$ phút nhiệt độ của nước là $60^\circ\text{C}$. Sau bao nhiêu phút kể từ lúc bắt đầu thì nhiệt độ của nước còn $35^\circ\text{C}$ (làm tròn kết quả đến hàng phần mười)?
::key 28,1
Từ $T(10)=60$ ta tìm $k$:

$$25+70e^{-10k}=60\iff e^{-10k}=\dfrac12\iff k=\dfrac{\ln2}{10}.$$

Giải $T(t)=35$:

$$70e^{-kt}=10\iff e^{-kt}=\dfrac17\iff t=\dfrac{\ln7}{k}=\dfrac{10\ln7}{\ln2}\approx28{,}07.$$

Vậy sau khoảng $28{,}1$ phút.

Ôn lại: [Ôn tập: lượng giác, mũ – lôgarit, cấp số](lesson:review-trig-exp-log-sequences).
:::
