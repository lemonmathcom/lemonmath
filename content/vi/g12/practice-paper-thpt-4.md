---
title: Đề luyện thi tốt nghiệp số 4
description: Đề luyện 22 câu khó nhất của bộ đề, theo cấu trúc thi tốt nghiệp THPT từ năm 2025, có lời giải chi tiết và bài ôn lại cho từng câu.
minutes: 90
type: exam
---

Đề gồm $22$ câu, làm trong $90$ phút, chia thành ba phần: Phần I có $12$ câu nhiều phương án lựa chọn ($0{,}25$ điểm mỗi câu), Phần II có $4$ câu đúng sai (tối đa $1$ điểm mỗi câu), Phần III có $6$ câu trả lời ngắn ($0{,}5$ điểm mỗi câu). Đây là đề khó nhất của bộ đề luyện: nhiều ý ở Phần II và Phần III cần kiểm tra cẩn thận điều kiện và làm tròn. Bạn hãy làm trên phiếu in trước, bấm giờ nghiêm túc, rồi nhập đáp án vào bên dưới để được chấm theo thang điểm $10$.

:::quiz exam
::mc
Cho hàm số $y=\ln(x^2+1)-x$. Khẳng định nào sau đây đúng?
A. Hàm số đạt cực đại tại $x=1$.
B. Hàm số có hai điểm cực trị.
C. Hàm số nghịch biến trên $\mathbb{R}$.
D. Hàm số đồng biến trên khoảng $(1; +\infty)$.
::key C
Tính đạo hàm và quy đồng:

$$y'=\dfrac{2x}{x^2+1}-1=\dfrac{2x-x^2-1}{x^2+1}=-\dfrac{(x-1)^2}{x^2+1}\le0\quad\text{với mọi } x.$$

$y'=0$ chỉ tại $x=1$ và $y'$ không đổi dấu qua điểm này, nên hàm số nghịch biến trên $\mathbb{R}$ và không có cực trị. Phương án A cho rằng mọi nghiệm của $y'=0$ đều là điểm cực trị.

Ôn lại: [Ôn tập: đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y=\dfrac{x+1}{\sqrt{x^2-4}}$ là
A. $1$.
B. $2$.
C. $3$.
D. $4$.
::key D
Tập xác định là $(-\infty; -2)\cup(2; +\infty)$. Khi tính giới hạn ở vô cực, chú ý $\sqrt{x^2}=|x|$:

$$\lim_{x\to+\infty}y=\lim_{x\to+\infty}\dfrac{1+\frac1x}{\sqrt{1-\frac{4}{x^2}}}=1,\qquad \lim_{x\to-\infty}y=\lim_{x\to-\infty}\dfrac{1+\frac1x}{-\sqrt{1-\frac{4}{x^2}}}=-1.$$

Ngoài ra $\displaystyle\lim_{x\to2^+}y=+\infty$ và $\displaystyle\lim_{x\to-2^-}y=-\infty$ (tử số lần lượt dần tới $3$ và $-1$, khác $0$). Vậy có $2$ tiệm cận ngang $y=\pm1$ và $2$ tiệm cận đứng $x=\pm2$, tổng cộng $4$. Phương án C bỏ sót $y=-1$ do viết $\sqrt{x^2}=x$.

Ôn lại: [Ôn tập: đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Cho hàm số $y=f(x)$ liên tục trên $\mathbb{R}$ và có bảng xét dấu đạo hàm như sau.

| $x$ | $-\infty$ | | $-2$ | | $1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $-$ | $0$ | $+$ | |

Khẳng định nào sau đây đúng?
A. Hàm số đạt cực tiểu tại $x=1$.
B. Hàm số có ba điểm cực trị.
C. Hàm số nghịch biến trên khoảng $(-2; 3)$.
D. $f(1)<f(3)$.
::key C
Trên $(-2; 3)$ ta có $f'(x)<0$, chỉ bằng $0$ tại một điểm $x=1$, nên $f$ nghịch biến trên $(-2; 3)$. Tại $x=1$ đạo hàm không đổi dấu nên đó không phải điểm cực trị: hàm số chỉ có hai điểm cực trị $x=-2$ và $x=3$. Vì $f$ nghịch biến trên $[-2; 3]$ nên $f(1)>f(3)$. Phương án A và B coi $x=1$ là điểm cực trị chỉ vì $f'(1)=0$.

Ôn lại: [Ôn tập: đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::mc
Biết $F(x)$ là một nguyên hàm của hàm số $f(x)=2x+\sin x$ và $F(0)=3$. Khi đó $F(x)$ là
A. $x^2-\cos x+3$.
B. $x^2+\cos x+2$.
C. $x^2-\cos x+4$.
D. $x^2-\cos x+2$.
::key C
Họ nguyên hàm là $F(x)=x^2-\cos x+C$. Dùng điều kiện $F(0)=3$, nhớ rằng $\cos0=1$:

$$0-1+C=3\iff C=4.$$

Vậy $F(x)=x^2-\cos x+4$. Phương án A quên $\cos0=1$; phương án B nhầm nguyên hàm của $\sin x$ là $\cos x$; phương án D chuyển vế sai dấu, được $C=3-1=2$.

Ôn lại: [Ôn tập: nguyên hàm và tích phân](lesson:review-integrals).

::mc
Giá trị của tích phân $\displaystyle\int_0^{\ln2}\big(e^x+1\big)^2\,dx$ bằng
A. $5+\ln2$.
B. $\dfrac{19}{3}$.
C. $\dfrac32+\ln2$.
D. $\dfrac72+\ln2$.
::key D
Khai triển bình phương rồi dùng bảng nguyên hàm:

$$\int_0^{\ln2}\big(e^{2x}+2e^x+1\big)dx=\Big[\dfrac12e^{2x}+2e^x+x\Big]_0^{\ln2}=\big(2+4+\ln2\big)-\Big(\dfrac12+2\Big)=\dfrac72+\ln2.$$

Phương án A quên hệ số $\dfrac12$ trong nguyên hàm của $e^{2x}$; phương án B coi $\dfrac{(e^x+1)^3}{3}$ là nguyên hàm; phương án C bỏ sót số hạng $2e^x$.

Ôn lại: [Ôn tập: nguyên hàm và tích phân](lesson:review-integrals).

::mc
Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $M(3; 3; -1)$ lên mặt phẳng $(P)\colon x+2y-2z-2=0$ là điểm
A. $H(2; 1; 1)$.
B. $H(1; -1; 3)$.
C. $H(4; 5; -3)$.
D. $H(2; 1; -1)$.
::key A
Đường thẳng qua $M$ vuông góc với $(P)$ có vectơ chỉ phương $\vec n=(1; 2; -2)$, gồm các điểm $H(3+t; 3+2t; -1-2t)$. Thay vào phương trình $(P)$:

$$(3+t)+2(3+2t)-2(-1-2t)-2=0\iff 9+9t=0\iff t=-1.$$

Vậy $H(2; 1; 1)$. Phương án C lấy nhầm $t=1$; phương án B là điểm đối xứng của $M$ qua $(P)$ (ứng với $t=-2$).

Ôn lại: [Ôn tập: phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::mc
Trong không gian $Oxyz$, góc giữa đường thẳng $d\colon\begin{cases}x=1+t\\ y=2\\ z=-t\end{cases}$ và mặt phẳng $(P)\colon x+y-3=0$ bằng
A. $60^\circ$.
B. $30^\circ$.
C. $45^\circ$.
D. $90^\circ$.
::key B
Với $\vec u=(1; 0; -1)$ và $\vec n=(1; 1; 0)$, góc $\varphi$ giữa đường thẳng và mặt phẳng tính bằng sin:

$$\sin\varphi=\dfrac{|\vec u\cdot\vec n|}{|\vec u|\cdot|\vec n|}=\dfrac{1}{\sqrt2\cdot\sqrt2}=\dfrac12\ \Rightarrow\ \varphi=30^\circ.$$

Phương án A dùng công thức côsin như góc giữa hai đường thẳng.

Ôn lại: [Ôn tập: phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::mc
Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA$ vuông góc với mặt phẳng đáy và $SA=\dfrac{a\sqrt6}{2}$. Số đo của góc nhị diện $[S, BD, A]$ bằng
A. $30^\circ$.
B. $60^\circ$.
C. khoảng $50{,}8^\circ$.
D. khoảng $40{,}9^\circ$.
::key B
Gọi $O$ là tâm hình vuông. Vì $BD\perp AO$ và $BD\perp SA$ nên $BD\perp SO$; góc phẳng nhị diện là $\widehat{SOA}$:

$$AO=\dfrac{a\sqrt2}{2},\qquad \tan\widehat{SOA}=\dfrac{SA}{AO}=\dfrac{a\sqrt6/2}{a\sqrt2/2}=\sqrt3\ \Rightarrow\ \widehat{SOA}=60^\circ.$$

Phương án A lấy nhầm $\dfrac{AO}{SA}$; phương án C dùng $\widehat{SBA}$ (góc nhị diện cạnh $BC$); phương án D dùng $AC$ thay cho $AO$.

Ôn lại: [Ôn tập: hình học không gian](lesson:review-space-geometry).

::mc
Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác vuông cân tại $A$, $BC=2a$, góc giữa đường thẳng $A'B$ và mặt phẳng đáy bằng $60^\circ$. Thể tích của khối lăng trụ bằng
A. $a^3\sqrt6$.
B. $\dfrac{a^3\sqrt6}{3}$.
C. $2a^3\sqrt6$.
D. $\dfrac{a^3\sqrt3}{2}$.
::key A
Tam giác vuông cân có cạnh huyền $2a$ nên $AB=AC=a\sqrt2$. Hình chiếu của $A'B$ lên đáy là $AB$, nên góc $\widehat{A'BA}=60^\circ$:

$$AA'=AB\tan60^\circ=a\sqrt6,\qquad V=\dfrac12\big(a\sqrt2\big)^2\cdot a\sqrt6=a^3\sqrt6.$$

Phương án B dùng công thức thể tích khối chóp; phương án C quên hệ số $\dfrac12$ của diện tích tam giác; phương án D lấy nhầm $AB=a$.

Ôn lại: [Ôn tập: hình học không gian](lesson:review-space-geometry).

::mc
Tuổi của $40$ người tham gia một câu lạc bộ dưỡng sinh được cho trong bảng sau.

| Tuổi | $[40; 50)$ | $[50; 60)$ | $[60; 70)$ | $[70; 80)$ | $[80; 90)$ |
|---|---|---|---|---|---|
| Số người | $6$ | $10$ | $14$ | $7$ | $3$ |

Trung vị của mẫu số liệu ghép nhóm trên (làm tròn đến hàng phần trăm) là
A. $62{,}86$.
B. $64$.
C. $65$.
D. $60$.
::key A
Tần số tích luỹ là $6$, $16$, $30$, $37$, $40$; $\dfrac n2=20$ nằm trong nhóm $[60; 70)$, với tần số tích luỹ của nhóm trước là $16$:

$$M_e=60+\dfrac{20-16}{14}\cdot10=60+\dfrac{20}{7}\approx62{,}86.$$

Phương án C là giá trị đại diện của nhóm; phương án B chia nhầm cho tần số $10$ của nhóm trước; phương án D là đầu mút trái của nhóm.

Ôn lại: [Ôn tập: thống kê và xác suất](lesson:review-statistics-probability).

::mc
Hộp I có $3$ bi trắng và $2$ bi đen; hộp II có $2$ bi trắng và $4$ bi đen. Tung một đồng xu cân đối: nếu được mặt sấp thì lấy ngẫu nhiên một viên bi từ hộp I, nếu được mặt ngửa thì lấy từ hộp II. Xác suất lấy được bi trắng là
A. $\dfrac{5}{11}$.
B. $\dfrac{7}{15}$.
C. $\dfrac{1}{5}$.
D. $\dfrac{14}{15}$.
::key B
Theo công thức xác suất toàn phần, chia theo hộp được chọn:

$$P(T)=\dfrac12\cdot\dfrac35+\dfrac12\cdot\dfrac26=\dfrac{3}{10}+\dfrac16=\dfrac{7}{15}.$$

Phương án A gộp hai hộp thành một ($5$ bi trắng trên $11$ bi); phương án C nhân hai xác suất $\dfrac35\cdot\dfrac13$; phương án D quên nhân với $\dfrac12$.

Ôn lại: [Ôn tập: thống kê và xác suất](lesson:review-statistics-probability).

::mc
Độ cao mực nước (mét) tại một cảng biển sau $t$ giờ kể từ lúc $0$ giờ được mô tả bởi $h(t)=3+2\sin\dfrac{\pi t}{6}$, $0\le t\le24$. Trong một ngày, tổng thời gian mực nước không thấp hơn $4$ m là
A. $4$ giờ.
B. $12$ giờ.
C. $16$ giờ.
D. $8$ giờ.
::key D
Đưa về bất phương trình lượng giác cơ bản:

$$h(t)\ge4\iff\sin\dfrac{\pi t}{6}\ge\dfrac12\iff\dfrac{\pi}{6}+k2\pi\le\dfrac{\pi t}{6}\le\dfrac{5\pi}{6}+k2\pi\iff1+12k\le t\le5+12k.$$

Với $0\le t\le24$ ta được $t\in[1; 5]\cup[13; 17]$, tổng cộng $8$ giờ. Phương án A chỉ xét một chu kì $12$ giờ; phương án C giải nhầm $\sin\dfrac{\pi t}{6}\ge-\dfrac12$ (tức là $h\ge2$).

Ôn lại: [Ôn tập: lượng giác, mũ – lôgarit, cấp số](lesson:review-trig-exp-log-sequences).

::tf
Cho hàm số $f(x)=(x^2-3)e^x$.
a) $f'(x)=(x^2+2x-3)e^x$ với mọi $x\in\mathbb{R}$.
b) Hàm số đạt cực đại tại $x=1$.
c) Giá trị nhỏ nhất của $f(x)$ trên đoạn $[0; 2]$ bằng $-2e$.
d) Phương trình $f(x)=0{,}3$ có ba nghiệm phân biệt.
::key Đ S Đ S
a) Đúng: $f'(x)=2xe^x+(x^2-3)e^x=(x^2+2x-3)e^x=(x-1)(x+3)e^x$.

b) Sai: $f'(x)$ đổi dấu từ $-$ sang $+$ tại $x=1$, nên $x=1$ là điểm cực tiểu; điểm cực đại là $x=-3$.

c) Đúng: so sánh $f(0)=-3$, $f(1)=-2e\approx-5{,}44$, $f(2)=e^2$; nhỏ nhất là $-2e$.

d) Sai: khi $x\to-\infty$ thì $f(x)\to0$ và $f(x)>0$ với $x<-\sqrt3$; $f$ đồng biến trên $(-\infty; -3)$ đến giá trị cực đại $f(-3)=6e^{-3}\approx0{,}2987<0{,}3$, rồi nghịch biến trên $(-3; 1)$ và đồng biến trên $(1; +\infty)$ từ $-2e$ đến $+\infty$. Vậy đường thẳng $y=0{,}3$ chỉ cắt đồ thị tại một điểm (trên $(1; +\infty)$).

Ôn lại: [Ôn tập: đạo hàm và khảo sát hàm số](lesson:review-functions-derivatives).

::tf
Trên một đường thẳng, xe A chạy đều với vận tốc $16$ m/s. Tại thời điểm $t=0$, xe A đi ngang qua xe B đang đứng yên và xe B bắt đầu chạy cùng chiều với vận tốc $v_B(t)=2t$ (m/s) trong $12$ giây đầu, sau đó giữ nguyên vận tốc $24$ m/s.
a) Trong $8$ giây đầu, xe B đi được $64$ m.
b) Trước khi xe B đuổi kịp xe A, khoảng cách lớn nhất giữa hai xe là $64$ m.
c) Xe B đuổi kịp xe A tại thời điểm $t=16$ giây.
d) Khi xe B đuổi kịp xe A, mỗi xe đã đi được $288$ m kể từ thời điểm $t=0$.
::key Đ Đ S Đ
a) Đúng: $\displaystyle\int_0^8 2t\,dt=\Big[t^2\Big]_0^8=64$.

b) Đúng: khi $0\le t\le12$, khoảng cách là $16t-t^2$, lớn nhất khi hai vận tốc bằng nhau ($2t=16$, $t=8$) và bằng $128-64=64$ m; khi $t>12$ xe B nhanh hơn nên khoảng cách giảm.

c) Sai: giải $t^2=16t$ được $t=16$, nhưng công thức $v_B=2t$ chỉ đúng khi $t\le12$. Với $t>12$, quãng đường của B là $144+24(t-12)$, nên $144+24(t-12)=16t\iff t=18$.

d) Đúng: $16\cdot18=288$ m và $144+24\cdot6=288$ m.

Ôn lại: [Ôn tập: nguyên hàm và tích phân](lesson:review-integrals).

::tf
Trong không gian $Oxyz$ (đơn vị: mét), mặt sàn của một nhà kho là mặt phẳng $(Oxy)$. Một thiết bị phát sóng đặt tại $I(1; -2; 3)$ có vùng phủ sóng là khối cầu tâm $I$, bán kính $5$ m.
a) Mặt cầu giới hạn vùng phủ sóng có phương trình $(x-1)^2+(y+2)^2+(z-3)^2=25$.
b) Điểm $A(4; 2; 3)$ nằm ngoài vùng phủ sóng.
c) Phần mặt sàn được phủ sóng là một hình tròn có bán kính $4$ m.
d) Một robot chạy trên sàn dọc theo trục $Ox$. Quãng đường robot đi trong vùng phủ sóng dài $4\sqrt3$ m.
::key Đ S Đ Đ
a) Đúng: mặt cầu tâm $I(1; -2; 3)$, bán kính $5$.

b) Sai: $IA=\sqrt{3^2+4^2+0^2}=5$, nên $A$ nằm trên mặt cầu, vẫn thuộc vùng phủ sóng.

c) Đúng: khoảng cách từ $I$ đến mặt sàn là $3$, bán kính hình tròn là $\sqrt{5^2-3^2}=4$; tâm hình tròn là $(1; -2; 0)$.

d) Đúng: trên trục $Ox$ có $y=0$, $z=0$: $(x-1)^2+4+9\le25\iff(x-1)^2\le12$, nên $x$ chạy trên đoạn dài $2\sqrt{12}=4\sqrt3\approx6{,}93$ m.

Ôn lại: [Ôn tập: phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::tf
Trong hộp thư của một công ty, $30\%$ số thư là thư rác. Bộ lọc tự động đánh dấu $92\%$ số thư rác và đánh dấu nhầm $4\%$ số thư thường. Chọn ngẫu nhiên một thư.
a) Xác suất thư được chọn bị đánh dấu là $0{,}276$.
b) Biết thư bị đánh dấu, xác suất đó là thư rác lớn hơn $0{,}9$.
c) Biết thư không bị đánh dấu, xác suất đó là thư rác lớn hơn $0{,}05$.
d) Mỗi thư bị đánh dấu được đưa qua bộ lọc thứ hai có cùng tỉ lệ như trên và hoạt động độc lập với bộ lọc thứ nhất (với từng loại thư). Biết thư bị đánh dấu ở cả hai bộ lọc, xác suất đó là thư rác lớn hơn $0{,}99$.
::key S Đ S Đ
Gọi $R$ là "thư rác", $D$ là "thư bị đánh dấu".

a) Sai: $0{,}276=0{,}3\cdot0{,}92$ mới chỉ là phần thư rác bị đánh dấu. Theo công thức xác suất toàn phần, $P(D)=0{,}3\cdot0{,}92+0{,}7\cdot0{,}04=0{,}276+0{,}028=0{,}304$.

b) Đúng: $P(R\mid D)=\dfrac{0{,}276}{0{,}304}\approx0{,}908>0{,}9$.

c) Sai: $P(R\mid\overline D)=\dfrac{0{,}3\cdot0{,}08}{1-0{,}304}=\dfrac{0{,}024}{0{,}696}\approx0{,}034<0{,}05$.

d) Đúng: xác suất bị đánh dấu cả hai lần là $0{,}3\cdot0{,}92^2=0{,}25392$ với thư rác và $0{,}7\cdot0{,}04^2=0{,}00112$ với thư thường, nên xác suất cần tìm là $\dfrac{0{,}25392}{0{,}25392+0{,}00112}\approx0{,}9956>0{,}99$.

Ôn lại: [Ôn tập: thống kê và xác suất](lesson:review-statistics-probability).

::sa
Một khung cửa sổ gồm một hình chữ nhật và một nửa hình tròn ghép phía trên, đường kính nửa hình tròn bằng chiều rộng hình chữ nhật. Chu vi của cả khung (gồm đáy, hai cạnh bên và cung tròn) bằng $6$ m. Diện tích lớn nhất của cửa sổ là bao nhiêu mét vuông (làm tròn kết quả đến hàng phần trăm)?
::key 2,52
Gọi bán kính nửa hình tròn là $r$, chiều cao phần chữ nhật là $h$. Từ chu vi:

$$2r+2h+\pi r=6\iff h=\dfrac{6-(2+\pi)r}{2}.$$

$$S(r)=2rh+\dfrac{\pi r^2}{2}=6r-\Big(2+\dfrac{\pi}{2}\Big)r^2,\qquad S'(r)=6-(4+\pi)r=0\iff r=\dfrac{6}{4+\pi}.$$

$S$ là hàm bậc hai có hệ số $r^2$ âm, nên đạt lớn nhất tại đó (khi đó $h=r>0$): $S_{\max}=3r=\dfrac{18}{4+\pi}\approx2{,}52$ m$^2$.

Ôn lại: [Ôn tập: bài toán tối ưu và thực tế](lesson:review-optimisation-real-life).

::sa
Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $4$ và chiều cao bằng $3$. Tính khoảng cách từ $A$ đến mặt phẳng $(SCD)$ (làm tròn kết quả đến hàng phần trăm).
::key 3,33
Gọi $O$ là tâm đáy, $M$ là trung điểm $CD$. Đường thẳng $AO$ cắt $(SCD)$ tại $C$ và $AC=2OC$, nên $d\big(A,(SCD)\big)=2\,d\big(O,(SCD)\big)$. Trong tam giác $SOM$ vuông tại $O$, khoảng cách từ $O$ là đường cao:

$$OM=2,\qquad d\big(O,(SCD)\big)=\dfrac{SO\cdot OM}{\sqrt{SO^2+OM^2}}=\dfrac{3\cdot2}{\sqrt{13}}=\dfrac{6}{\sqrt{13}}.$$

Vậy $d\big(A,(SCD)\big)=\dfrac{12}{\sqrt{13}}\approx3{,}33$.

Ôn lại: [Ôn tập: hình học không gian](lesson:review-space-geometry).

::sa
Trong không gian $Oxyz$ (đơn vị: mét), hai drone bay thẳng đều cùng lúc. Sau $t$ giây, drone thứ nhất ở điểm $P(2t; t; 10)$ và drone thứ hai ở điểm $Q(20-t; 2t; 4+t)$. Khoảng cách nhỏ nhất giữa hai drone là bao nhiêu mét (làm tròn kết quả đến hàng phần trăm)?
::key 6,32
Bình phương khoảng cách là một tam thức bậc hai theo $t$:

$$\overrightarrow{QP}=(3t-20; -t; 6-t),\qquad PQ^2=(3t-20)^2+t^2+(6-t)^2=11t^2-132t+436=11(t-6)^2+40.$$

$PQ^2$ nhỏ nhất bằng $40$ khi $t=6$, nên khoảng cách nhỏ nhất là $\sqrt{40}=2\sqrt{10}\approx6{,}32$ m.

Ôn lại: [Ôn tập: phương pháp toạ độ trong không gian](lesson:review-coordinates-space).

::sa
Gieo hai con xúc xắc cân đối. Biết tổng số chấm xuất hiện không nhỏ hơn $9$, tính xác suất có ít nhất một con xúc xắc xuất hiện mặt $6$ chấm.
::key 0,7
Biến cố "tổng không nhỏ hơn $9$" gồm $10$ kết quả:

$$(3; 6), (6; 3), (4; 5), (5; 4), (4; 6), (6; 4), (5; 5), (5; 6), (6; 5), (6; 6).$$

Trong đó có $7$ kết quả có mặt $6$ chấm (chỉ trừ $(4; 5)$, $(5; 4)$, $(5; 5)$). Vậy xác suất cần tìm là $\dfrac{7}{10}=0{,}7$.

Ôn lại: [Ôn tập: thống kê và xác suất](lesson:review-statistics-probability).

::sa
Một chi tiết máy có dạng khối tròn xoay, tạo thành khi quay hình phẳng giới hạn bởi các đường $y=1+\sqrt x$, $y=0$, $x=0$, $x=4$ quanh trục $Ox$ (đơn vị trên mỗi trục là decimét). Tính thể tích của chi tiết máy (đơn vị: $\text{dm}^3$, làm tròn kết quả đến hàng phần mười).
::key 71,2
Khai triển bình phương để dùng bảng nguyên hàm:

$$V=\pi\int_0^4\big(1+\sqrt x\big)^2dx=\pi\int_0^4\big(1+2\sqrt x+x\big)dx=\pi\Big[x+\dfrac43x^{\frac32}+\dfrac{x^2}{2}\Big]_0^4=\pi\Big(4+\dfrac{32}{3}+8\Big)=\dfrac{68\pi}{3}.$$

Vậy $V\approx71{,}2\ \text{dm}^3$.

Ôn lại: [Ôn tập: nguyên hàm và tích phân](lesson:review-integrals).

::sa
Đầu mỗi tháng, chị Lan gửi vào tài khoản tiết kiệm $5$ triệu đồng. Lãi suất $0{,}5\%$ mỗi tháng, tiền lãi cuối mỗi tháng được nhập vào gốc. Hỏi sau ít nhất bao nhiêu tháng (tính cả lãi của tháng cuối) thì số tiền trong tài khoản đạt từ $100$ triệu đồng trở lên?
::key 20
Sau $n$ tháng, số tiền là tổng của một cấp số nhân với công bội $q=1{,}005$:

$$S_n=5\cdot1{,}005\cdot\dfrac{1{,}005^n-1}{0{,}005}=1005\big(1{,}005^n-1\big).$$

$$S_n\ge100\iff1{,}005^n\ge1+\dfrac{100}{1005}\iff n\ge\dfrac{\ln\big(1+\frac{100}{1005}\big)}{\ln1{,}005}\approx19{,}02.$$

Vậy cần ít nhất $20$ tháng (kiểm tra: $S_{19}\approx99{,}9$ triệu, $S_{20}\approx105{,}4$ triệu).

Ôn lại: [Ôn tập: lượng giác, mũ – lôgarit, cấp số](lesson:review-trig-exp-log-sequences).
:::
