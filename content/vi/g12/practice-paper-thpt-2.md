---
title: Đề luyện thi tốt nghiệp số 2
description: Đề luyện thi tốt nghiệp THPT môn Toán thứ hai, khó hơn đề số 1 một chút: 22 câu trong 90 phút, có đáp án, lời giải và bài ôn tập cho từng câu.
minutes: 90
type: exam
---

Đề gồm ba phần như đề thi tốt nghiệp THPT: 12 câu trắc nghiệm nhiều phương án, 4 câu đúng sai và 6 câu trả lời ngắn, làm trong 90 phút. Phần I mỗi câu 0,25 điểm; Phần II mỗi câu tối đa 1 điểm, tính theo số ý đúng; Phần III mỗi câu 0,5 điểm. Bạn hãy in phiếu và làm trên giấy trước, rồi nhập đáp án vào các ô dưới đây để được chấm trên thang điểm 10. Đề này có nhiều câu vận dụng hơn đề số 1, nên hãy dành khoảng 40 phút cho Phần III.

:::quiz exam
::mc
Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=(x+1)(x-2)^2(x-4)$ với mọi $x\in\mathbb{R}$. Hàm số đạt cực tiểu tại
A. $x=2$.
B. $x=-1$.
C. $x=0$.
D. $x=4$.
::key D
Ta xét dấu $f'(x)$; thừa số $(x-2)^2$ không âm nên không làm $f'$ đổi dấu:

| $x$ | $-\infty$ | | $-1$ | | $2$ | | $4$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $-$ | $0$ | $+$ | |

$f'$ đổi dấu từ $-$ sang $+$ chỉ tại $x=4$, nên hàm số đạt cực tiểu tại $x=4$. Phương án A coi mọi nghiệm của $f'$ là điểm cực trị, phương án B là điểm cực đại.

Ôn lại: [đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Tiệm cận xiên của đồ thị hàm số $y=\dfrac{2x^2+3x-1}{x+2}$ là đường thẳng
A. $y=2x-1$.
B. $y=2x+3$.
C. $y=x-1$.
D. $x=-2$.
::key A
Chia tử cho mẫu:

$$\frac{2x^2+3x-1}{x+2}=2x-1+\frac{1}{x+2}.$$

Vì $\dfrac1{x+2}\to0$ khi $x\to\pm\infty$, tiệm cận xiên là $y=2x-1$. Phương án B chỉ lấy hai hệ số đầu của tử, phương án C quên hệ số $2$ của $x^2$, phương án D là tiệm cận đứng.

Ôn lại: [đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Hàm số nào sau đây đồng biến trên $\mathbb{R}$?
A. $y=x^4+2x^2$.
B. $y=\dfrac{x+1}{x-3}$.
C. $y=x^3+x-5$.
D. $y=x^3-3x$.
::key C
$y=x^3+x-5$ có $y'=3x^2+1>0$ với mọi $x$, nên đồng biến trên $\mathbb{R}$. Hàm số A có $y'=4x(x^2+1)<0$ khi $x<0$; hàm số B không xác định tại $x=3$; hàm số D có $y'=3x^2-3<0$ trên $(-1; 1)$.

Ôn lại: [đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Trên khoảng $(0; +\infty)$, họ nguyên hàm của hàm số $f(x)=3^x+\dfrac1x$ là
A. $3^x\ln3+\ln x+C$.
B. $\dfrac{3^x}{\ln3}+\ln x+C$.
C. $x\cdot3^{x-1}+\ln x+C$.
D. $\dfrac{3^x}{\ln3}-\dfrac1{x^2}+C$.
::key B
Ta dùng $\int a^x\,dx=\dfrac{a^x}{\ln a}+C$ và $\int\dfrac1x\,dx=\ln|x|+C$ (với $x>0$ thì $|x|=x$). Phương án A là đạo hàm của $3^x$, phương án C dùng nhầm công thức của hàm luỹ thừa, phương án D lấy đạo hàm của $\dfrac1x$.

Ôn lại: [nguyên hàm và tích phân](lesson:review-integrals).

::mc
Giá trị của $\displaystyle\int_0^3|x-2|\,dx$ bằng
A. $-\dfrac32$.
B. $\dfrac32$.
C. $2$.
D. $\dfrac52$.
::key D
Ta tách tại $x=2$, nơi $x-2$ đổi dấu:

$$\int_0^3|x-2|\,dx=\int_0^2(2-x)\,dx+\int_2^3(x-2)\,dx=2+\frac12=\frac52.$$

Phương án A bỏ dấu giá trị tuyệt đối, phương án B lấy hiệu hai phần thay vì tổng, phương án C chỉ tính phần trên $[0; 2]$.

Ôn lại: [nguyên hàm và tích phân](lesson:review-integrals).

::mc
Cho cấp số nhân $(u_n)$ có $u_1=2$ và $u_4=-54$. Công bội của cấp số nhân là
A. $-3$.
B. $3$.
C. $-27$.
D. $-\dfrac{56}{3}$.
::key A
Ta có $u_4=u_1q^3$, nên $q^3=\dfrac{-54}{2}=-27$ và $q=-3$. Phương án B làm mất dấu âm, phương án C quên lấy căn bậc ba, phương án D dùng nhầm công thức cấp số cộng $u_4=u_1+3d$.

Ôn lại: [lượng giác, mũ – lôgarit, cấp số](lesson:review-trig-exp-log-sequences).

::mc
Trong không gian $Oxyz$, mặt phẳng đi qua điểm $A(1; -1; 2)$ và vuông góc với đường thẳng $d\colon\dfrac{x-1}{2}=\dfrac{y}{-1}=\dfrac{z+3}{3}$ có phương trình là
A. $2x-y+3z+9=0$.
B. $2x+y+3z-7=0$.
C. $2x-y+3z-9=0$.
D. $2x-y+3z+7=0$.
::key C
Mặt phẳng vuông góc với $d$ nhận vectơ chỉ phương $\vec u=(2; -1; 3)$ của $d$ làm vectơ pháp tuyến:

$$2(x-1)-(y+1)+3(z-2)=0\iff 2x-y+3z-9=0.$$

Phương án A sai dấu hằng số, phương án B sai dấu hệ số của $y$, phương án D là mặt phẳng đi qua điểm $(1; 0; -3)$ của $d$ thay vì đi qua $A$.

Ôn lại: [phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::mc
Trong không gian $Oxyz$, mặt cầu có tâm $I(2; -1; 1)$ và đi qua điểm $A(0; 1; 2)$ có phương trình là
A. $(x-2)^2+(y+1)^2+(z-1)^2=3$.
B. $(x-2)^2+(y+1)^2+(z-1)^2=9$.
C. $(x+2)^2+(y-1)^2+(z+1)^2=9$.
D. $(x+2)^2+(y-1)^2+(z+1)^2=3$.
::key B
Bán kính bằng $IA$:

$$R^2=IA^2=(0-2)^2+(1+1)^2+(2-1)^2=9.$$

Vậy phương trình mặt cầu là $(x-2)^2+(y+1)^2+(z-1)^2=9$. Phương án A viết $R$ thay cho $R^2$, phương án C và D đổi dấu toạ độ tâm.

Ôn lại: [phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::mc
Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB'$ và $BC'$ bằng
A. $45^\circ$.
B. $90^\circ$.
C. $60^\circ$.
D. $30^\circ$.
::key C
Tứ giác $ABC'D'$ là hình chữ nhật nên $BC'\parallel AD'$, do đó góc cần tìm bằng góc giữa $AB'$ và $AD'$. Tam giác $AB'D'$ có ba cạnh là ba đường chéo của ba mặt hình lập phương nên là tam giác đều, vậy góc bằng $60^\circ$. Phương án A nhầm với góc giữa đường chéo mặt và cạnh, phương án B nhầm vì hai mặt $(ABB'A')$ và $(BCC'B')$ vuông góc với nhau.

Ôn lại: [hình học không gian](lesson:review-space-geometry).

::mc
Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật, $AB=3$, $AD=4$, $SA\perp(ABCD)$ và góc giữa đường thẳng $SC$ với mặt phẳng đáy bằng $45^\circ$. Thể tích khối chóp $S.ABCD$ bằng
A. $20$.
B. $60$.
C. $16$.
D. $10$.
::key A
Góc giữa $SC$ và đáy là $\widehat{SCA}=45^\circ$, nên tam giác $SAC$ vuông cân tại $A$ và $SA=AC=\sqrt{3^2+4^2}=5$. Do đó

$$V=\frac13\cdot AB\cdot AD\cdot SA=\frac13\cdot12\cdot5=20.$$

Phương án B quên hệ số $\dfrac13$, phương án C lấy nhầm $SA=AD=4$, phương án D dùng diện tích tam giác $ABC$ làm diện tích đáy.

Ôn lại: [hình học không gian](lesson:review-space-geometry).

::mc
Cân nặng (kg) của $40$ học sinh nam lớp 12 được cho trong bảng sau:

| Cân nặng (kg) | $[40; 50)$ | $[50; 60)$ | $[60; 70)$ | $[70; 80)$ | $[80; 90)$ |
|---|---|---|---|---|---|
| Số học sinh | $4$ | $9$ | $15$ | $10$ | $2$ |

Mốt của mẫu số liệu ghép nhóm này (làm tròn đến hàng phần trăm) là
A. $65$.
B. $64{,}55$.
C. $15$.
D. $65{,}45$.
::key D
Nhóm có tần số lớn nhất là $[60; 70)$ với $n_m=15$, nhóm trước có $n_{m-1}=9$, nhóm sau có $n_{m+1}=10$:

$$M_o=60+\frac{15-9}{(15-9)+(15-10)}\cdot10=60+\frac{60}{11}\approx65{,}45.$$

Phương án A là trung điểm nhóm mốt, phương án B đổi chỗ hai hiệu ở tử ($15-10$ thay cho $15-9$), phương án C là tần số lớn nhất.

Ôn lại: [thống kê và xác suất](lesson:review-statistics-probability).

::mc
Hai bạn An và Bình độc lập với nhau, mỗi người ném một quả bóng vào rổ. Xác suất ném trúng của An là $0{,}7$, của Bình là $0{,}6$. Xác suất để có đúng một bạn ném trúng là
A. $0{,}42$.
B. $0{,}46$.
C. $0{,}88$.
D. $0{,}54$.
::key B
"Đúng một bạn trúng" gồm hai trường hợp xung khắc: An trúng và Bình trượt, hoặc An trượt và Bình trúng. Do hai bạn ném độc lập:

$$P=0{,}7\cdot0{,}4+0{,}3\cdot0{,}6=0{,}28+0{,}18=0{,}46.$$

Phương án A là xác suất cả hai trúng, phương án C là xác suất có ít nhất một bạn trúng, phương án D là xác suất của biến cố đối.

Ôn lại: [thống kê và xác suất](lesson:review-statistics-probability).

::tf
Cho hàm số $y=\dfrac{x+3}{x-1}$ có đồ thị $(C)$.
a) Đường thẳng $x=1$ là tiệm cận đứng của $(C)$.
b) Hàm số đồng biến trên khoảng $(1; +\infty)$.
c) Giá trị lớn nhất của hàm số trên đoạn $[2; 5]$ bằng $5$.
d) Trên $(C)$ có đúng $6$ điểm mà cả hoành độ và tung độ đều là số nguyên.
::key Đ S Đ Đ
a) Đúng: $\lim\limits_{x\to1^+}\dfrac{x+3}{x-1}=+\infty$.

b) Sai: $y'=\dfrac{1\cdot(-1)-3\cdot1}{(x-1)^2}=\dfrac{-4}{(x-1)^2}<0$, nên hàm số nghịch biến trên từng khoảng xác định.

c) Đúng: hàm số nghịch biến trên $[2; 5]$, nên giá trị lớn nhất là $y(2)=\dfrac51=5$.

d) Đúng: viết $y=1+\dfrac{4}{x-1}$. Với $x$ nguyên, $y$ nguyên khi và chỉ khi $x-1$ là ước của $4$, tức là $x-1\in\{\pm1; \pm2; \pm4\}$: có $6$ giá trị của $x$, nên có $6$ điểm.

Ôn lại: [đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::tf
Một đoàn tàu bắt đầu rời ga (vận tốc ban đầu bằng $0$). Trong $20$ giây đầu, gia tốc của tàu là $a(t)=2-0{,}1t$ (m/s²), với $t$ là số giây kể từ lúc tàu chuyển bánh. Gọi $v(t)$ là vận tốc (m/s) của tàu.
a) $v(t)=2t-0{,}05t^2$ với $0\le t\le20$.
b) Vận tốc của tàu tại thời điểm $t=20$ giây là $40$ m/s.
c) Quãng đường tàu đi được trong $10$ giây đầu là $100$ m.
d) Từ giây thứ $20$ trở đi, tàu giữ nguyên vận tốc đã đạt được. Quãng đường tàu đi được trong $1$ phút đầu lớn hơn $1$ km.
::key Đ S S Đ
a) Đúng: $v(t)$ là nguyên hàm của $a(t)$, $v(t)=2t-0{,}05t^2+C$, và $v(0)=0$ cho $C=0$.

b) Sai: $v(20)=40-0{,}05\cdot400=20$ (m/s). Số $40$ chỉ lấy $2t$ và quên số hạng $-0{,}05t^2$.

c) Sai: $\displaystyle\int_0^{10}\left(2t-0{,}05t^2\right)dt=\left[t^2-\frac{0{,}05t^3}{3}\right]_0^{10}=100-\frac{50}{3}\approx83{,}3$ (m).

d) Đúng: trong $20$ giây đầu tàu đi $\displaystyle\int_0^{20}\left(2t-0{,}05t^2\right)dt=400-\frac{400}{3}=\frac{800}{3}\approx266{,}7$ (m); trong $40$ giây sau tàu đi $20\cdot40=800$ (m). Tổng cộng khoảng $1066{,}7$ m $>1000$ m.

Ôn lại: [nguyên hàm và tích phân](lesson:review-integrals).

::tf
Chọn hệ trục $Oxyz$ (đơn vị: mét) với mặt phẳng $(Oxy)$ là mặt đất. Một cột ăng-ten thẳng đứng có chân ở gốc $O$ và đỉnh ở $A(0; 0; 12)$. Một sợi dây cáp được căng thẳng từ đỉnh $A$ đến điểm neo $B(4; 6; 0)$ trên mặt đất.
a) $\overrightarrow{AB}=(4; 6; -12)$.
b) Sợi dây cáp dài $14$ m.
c) Góc giữa sợi dây cáp và mặt đất lớn hơn $60^\circ$.
d) Mặt phẳng chứa cột ăng-ten và sợi dây cáp có phương trình $3x-2y=0$.
::key Đ Đ S Đ
a) Đúng: $\overrightarrow{AB}=(4-0; 6-0; 0-12)=(4; 6; -12)$.

b) Đúng: $AB=\sqrt{16+36+144}=\sqrt{196}=14$ (m).

c) Sai: mặt đất có vectơ pháp tuyến $\vec k=(0; 0; 1)$, nên $\sin\varphi=\dfrac{12}{14}\approx0{,}857$ và $\varphi\approx59{,}0^\circ<60^\circ$.

d) Đúng: mặt phẳng $(OAB)$ chứa hai vectơ $\overrightarrow{OA}=(0; 0; 12)$ và $\overrightarrow{OB}=(4; 6; 0)$. Vectơ pháp tuyến $\vec n=(a; b; c)$ vuông góc với cả hai vectơ đó:

$$12c=0,\qquad 4a+6b=0\ \Rightarrow\ \text{chọn } c=0,\ a=3,\ b=-2.$$

Mặt phẳng đi qua $O$, có vectơ pháp tuyến $\vec n=(3; -2; 0)$, nên có phương trình $3x-2y=0$.

Ôn lại: [phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::tf
Hộp I có $4$ viên bi đỏ và $2$ viên bi xanh; hộp II có $3$ viên bi đỏ và $5$ viên bi xanh. Lấy ngẫu nhiên một viên bi từ hộp I bỏ vào hộp II, rồi lấy ngẫu nhiên một viên bi từ hộp II.
a) Xác suất viên bi chuyển từ hộp I sang là bi đỏ bằng $\dfrac23$.
b) Biết viên bi chuyển sang là bi đỏ, xác suất lấy được bi đỏ từ hộp II bằng $\dfrac12$.
c) Xác suất lấy được bi đỏ từ hộp II bằng $\dfrac{11}{27}$.
d) Biết viên bi lấy từ hộp II là bi đỏ, xác suất viên bi đã chuyển sang là bi đỏ lớn hơn $0{,}75$.
::key Đ S Đ S
Gọi $D$ là biến cố "bi chuyển sang là bi đỏ", $E$ là biến cố "bi lấy từ hộp II là bi đỏ".

a) Đúng: $P(D)=\dfrac46=\dfrac23$.

b) Sai: sau khi chuyển, hộp II có $9$ viên, trong đó $4$ viên đỏ, nên $P(E\mid D)=\dfrac49$. Số $\dfrac12=\dfrac48$ quên rằng hộp II đã có thêm một viên.

c) Đúng: theo công thức xác suất toàn phần, $P(E)=\dfrac23\cdot\dfrac49+\dfrac13\cdot\dfrac39=\dfrac{8}{27}+\dfrac{3}{27}=\dfrac{11}{27}$.

d) Sai: theo công thức Bayes, $P(D\mid E)=\dfrac{8/27}{11/27}=\dfrac{8}{11}\approx0{,}727<0{,}75$.

Ôn lại: [thống kê và xác suất](lesson:review-statistics-probability).

::sa
Một khách sạn có $50$ phòng. Nếu giá thuê là $400$ nghìn đồng một phòng mỗi ngày thì tất cả các phòng đều có khách; cứ tăng giá thêm $20$ nghìn đồng thì có thêm một phòng bị bỏ trống. Mỗi phòng có khách tốn $40$ nghìn đồng chi phí phục vụ mỗi ngày. Để lợi nhuận mỗi ngày lớn nhất, khách sạn nên cho thuê với giá bao nhiêu nghìn đồng một phòng?
::key 720
Gọi $x$ là số lần tăng giá ($0\le x\le50$). Khi đó giá thuê là $400+20x$, có $50-x$ phòng có khách, và lợi nhuận mỗi ngày (nghìn đồng) là

$$L(x)=(400+20x-40)(50-x)=(360+20x)(50-x).$$

$L'(x)=20(50-x)-(360+20x)=640-40x=0\iff x=16$. So sánh $L(0)=18\,000$, $L(16)=680\cdot34=23\,120$, $L(50)=0$: lợi nhuận lớn nhất khi $x=16$, tức là giá thuê $400+320=720$ nghìn đồng.

Ôn lại: [bài toán tối ưu và thực tế](lesson:review-optimisation-real-life).

::sa
Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $6$ và chiều cao bằng $4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SCD)$.
::key 4,8
Gọi $O$ là tâm đáy, $M$ là trung điểm của $CD$. Vì $AC$ cắt $(SCD)$ tại $C$ và $AC=2OC$, nên $d(A, (SCD))=2\,d(O, (SCD))$. Kẻ $OH\perp SM$ tại $H$. Vì $CD\perp OM$ và $CD\perp SO$ nên $CD\perp(SOM)$, suy ra $CD\perp OH$; do đó $OH\perp(SCD)$. Trong tam giác $SOM$ vuông tại $O$ với $OM=3$, $SO=4$:

$$OH=\frac{SO\cdot OM}{\sqrt{SO^2+OM^2}}=\frac{4\cdot3}{5}=2{,}4.$$

Vậy $d(A, (SCD))=2\cdot2{,}4=4{,}8$.

Ôn lại: [hình học không gian](lesson:review-space-geometry).

::sa
Chọn hệ trục $Oxyz$ (đơn vị: mét). Sau $t$ giây, máy bay không người lái thứ nhất ở vị trí $M(3t; 4t; 20)$, máy bay thứ hai ở vị trí $N(40-2t; 10+t; 30-t)$. Tính khoảng cách nhỏ nhất giữa hai máy bay (làm tròn kết quả đến hàng phần mười).
::key 12,4
Ta có $\overrightarrow{MN}=(40-5t; 10-3t; 10-t)$, nên

$$f(t)=MN^2=(40-5t)^2+(10-3t)^2+(10-t)^2=35t^2-480t+1800.$$

$f'(t)=70t-480=0\iff t=\dfrac{48}{7}$, và $f'$ đổi dấu từ $-$ sang $+$ tại đó. Giá trị nhỏ nhất là $f\left(\dfrac{48}{7}\right)=\dfrac{1080}{7}$, nên khoảng cách nhỏ nhất là $\sqrt{\dfrac{1080}{7}}\approx12{,}42$, làm tròn được $12{,}4$ m.

Ôn lại: [phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::sa
Một bài kiểm tra trắc nghiệm, mỗi câu có $4$ phương án và chỉ có một phương án đúng. Với mỗi câu, xác suất bạn Lan biết đáp án là $0{,}6$; nếu không biết, Lan chọn ngẫu nhiên một phương án. Biết Lan trả lời đúng một câu, tính xác suất Lan thật sự biết đáp án của câu đó (làm tròn kết quả đến hàng phần trăm).
::key 0,86
Gọi $B$ là biến cố "Lan biết đáp án", $D$ là biến cố "Lan trả lời đúng". Ta có $P(D\mid B)=1$ và $P(D\mid\overline B)=0{,}25$. Theo công thức xác suất toàn phần và công thức Bayes:

$$P(D)=0{,}6\cdot1+0{,}4\cdot0{,}25=0{,}7,\qquad P(B\mid D)=\frac{0{,}6}{0{,}7}=\frac67\approx0{,}857.$$

Làm tròn đến hàng phần trăm được $0{,}86$.

Ôn lại: [thống kê và xác suất](lesson:review-statistics-probability).

::sa
Một chiếc chặn giấy bằng thuỷ tinh có dạng khối tròn xoay, tạo thành khi quay hình phẳng giới hạn bởi đường cong $y=4-x^2$, trục $Ox$ và trục $Oy$ (với $0\le x\le2$) quanh trục $Ox$ (đơn vị trên các trục: cm). Tính thể tích chiếc chặn giấy theo cm³ (làm tròn kết quả đến hàng phần mười).
::key 53,6
Thể tích khối tròn xoay là

$$V=\pi\int_0^2\left(4-x^2\right)^2dx=\pi\int_0^2\left(16-8x^2+x^4\right)dx=\pi\left(32-\frac{64}{3}+\frac{32}{5}\right)=\frac{256\pi}{15}\approx53{,}62.$$

Làm tròn đến hàng phần mười được $53{,}6$ cm³.

Ôn lại: [nguyên hàm và tích phân](lesson:review-integrals).

::sa
Số vi khuẩn trong một mẻ nuôi cấy sau $t$ giờ là $N(t)=N_0\cdot a^t$, với $N_0$ và $a>0$ là hằng số. Sau $2$ giờ có $300$ vi khuẩn, sau $5$ giờ có $2400$ vi khuẩn. Sau bao nhiêu giờ kể từ lúc bắt đầu, mẻ nuôi cấy có $10\,000$ vi khuẩn (làm tròn kết quả đến hàng phần mười)?
::key 7,1
Chia hai đẳng thức $N_0a^5=2400$ và $N_0a^2=300$ cho nhau được $a^3=8$, nên $a=2$ và $N_0=\dfrac{300}{4}=75$. Giải $N(t)=10\,000$:

$$75\cdot2^t=10\,000\iff 2^t=\frac{400}{3}\iff t=\log_2\frac{400}{3}\approx7{,}06.$$

Vậy sau khoảng $7{,}1$ giờ mẻ nuôi cấy có $10\,000$ vi khuẩn.

Ôn lại: [lượng giác, mũ – lôgarit, cấp số](lesson:review-trig-exp-log-sequences).
:::
