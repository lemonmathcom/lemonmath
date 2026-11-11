---
title: Đề luyện IB Math AA HL
description: Đề luyện IB Math AA HL theo kiểu Paper 2: 120 phút, dùng máy tính vẽ đồ thị, 110 điểm, gồm Section A và Section B, có gợi ý và lời giải chi tiết từng câu.
minutes: 120
type: exam
---

Đề luyện này theo cấu trúc **Paper 2** của IB Mathematics: Analysis and Approaches HL: 120 phút, **bắt buộc dùng máy tính vẽ đồ thị (GDC)**, 110 điểm, gồm các câu ngắn ở Section A và các câu dài ở Section B. Mọi câu hỏi đều do Lemonmath soạn; đây không phải câu hỏi IB thật, nhưng bám theo chương trình HL và phong cách đề thi. Cùng với [đề luyện SL](lesson:ibaa-practice-paper-sl) không dùng máy tính, bạn có đủ cả hai kiểu đề.

| | Section A | Section B |
|---|---|---|
| Số câu | 8 câu ngắn | 3 câu dài |
| Số điểm | 50 | 60 |
| Thời gian gợi ý | khoảng 55 phút | khoảng 65 phút |

**Hướng dẫn.** Trả lời tất cả các câu. Ghi đáp số lấy ba chữ số có nghĩa trừ khi đề yêu cầu khác, và để GDC ở chế độ radian. Khi dùng GDC, hãy viết phương trình bạn giải hoặc tích phân bạn tính trước khi ghi kết quả. Dưới mỗi câu có một gợi ý ngắn: hãy che lại trừ khi bị tắc, và chỉ mở lời giải sau khi đã làm xong.

## Section A

:::exercise [6 marks]
Một chiếc ô tô được mua với giá $24.000$ đô la. Giá trị của nó giảm $15\%$ mỗi năm.

a) Tính giá trị của chiếc xe sau $5$ năm, làm tròn đến đô la. [3 marks]
b) Tìm số năm tròn mà sau đó giá trị của xe lần đầu xuống dưới $5000$ đô la. [3 marks]

::hint
**Cần nhớ:** sau $n$ năm, giá trị là $24.000\times0{,}85^n$; câu b) giải $24.000\times0{,}85^n<5000$ bằng logarit hoặc bảng giá trị của GDC.

::solution
Giá trị của xe sau $n$ năm tạo thành một cấp số nhân với giá trị đầu $24.000$ và công bội $1-0{,}15=0{,}85$, nên bằng $24.000\times0{,}85^n$ đô la.

a) Sau $5$ năm, giá trị của xe là
$$24.000\times0{,}85^5\approx10.648{,}93.$$
Vậy sau $5$ năm, chiếc xe có giá trị $10.649$ đô la.

b) Ta cần $24.000\times0{,}85^n<5000$, tức là $0{,}85^n<\dfrac{5}{24}$.

Lấy logarit hai vế, chú ý $\ln0{,}85<0$ nên bất đẳng thức đổi chiều, ta được
$$n>\frac{\ln(5/24)}{\ln0{,}85}\approx9{,}65.$$

Kiểm tra bằng GDC: sau $9$ năm, giá trị xe khoảng $5559$ đô la; sau $10$ năm, khoảng $4725$ đô la.

Vậy giá trị của xe lần đầu xuống dưới $5000$ đô la sau $10$ năm.

**Đáp số.** a) $10.649$ đô la; b) $10$ năm.
:::

:::exercise [6 marks]
Cho $z=1+i$.

a) Viết $z$ dưới dạng $re^{i\theta}$ rồi từ đó tính $z^8$. [3 marks]
b) Tìm ba nghiệm của phương trình $w^3=z$, viết dưới dạng $re^{i\theta}$ với $-\pi<\theta\le\pi$. [3 marks]

::hint
**Cần nhớ:** $|z|=\sqrt2$, $\arg z=\dfrac\pi4$; định lí De Moivre; các căn bậc ba có môđun $\left(\sqrt2\right)^{1/3}=2^{1/6}$ và acgumen $\dfrac{\pi}{12}+\dfrac{2k\pi}{3}$.

::solution
a) Điểm $(1,1)$ nằm ở góc phần tư thứ nhất, với $|z|=\sqrt{1^2+1^2}=\sqrt2$ và $\arg z=\arctan1=\dfrac\pi4$. Do đó $z=\sqrt2e^{i\pi/4}$.

Theo định lí De Moivre,
$$z^8=\left(\sqrt2\right)^8e^{i\cdot8\pi/4}=16e^{2\pi i}=16.$$

Vậy $z=\sqrt2e^{i\pi/4}$ và $z^8=16$.

b) Đặt $w=re^{i\theta}$. Khi đó $w^3=r^3e^{3i\theta}=\sqrt2e^{i\pi/4}$.

So sánh môđun, ta có $r^3=\sqrt2$, nên $r=2^{1/6}$.

So sánh acgumen, ta có $3\theta=\dfrac\pi4+2k\pi$, nên $\theta=\dfrac{\pi}{12}+\dfrac{2k\pi}{3}$ với $k=0,1,2$, cho các giá trị $\dfrac{\pi}{12}$, $\dfrac{3\pi}{4}$ và $\dfrac{17\pi}{12}$.

Acgumen cuối cùng không thuộc $-\pi<\theta\le\pi$, nên ta thay nó bởi $\dfrac{17\pi}{12}-2\pi=-\dfrac{7\pi}{12}$.

Vậy ba nghiệm là $w=2^{1/6}e^{i\pi/12}$, $w=2^{1/6}e^{3i\pi/4}$ và $w=2^{1/6}e^{-7i\pi/12}$.

**Đáp số.** a) $z=\sqrt2e^{i\pi/4}$, $z^8=16$; b) $2^{1/6}e^{i\pi/12}$, $2^{1/6}e^{3i\pi/4}$, $2^{1/6}e^{-7i\pi/12}$.
:::

:::exercise [6 marks]
Cho các điểm $A(1,2,0)$, $B(3,-1,4)$ và $C(0,1,2)$.

a) Tính số đo góc $B\hat AC$. [3 marks]
b) Tính diện tích tam giác $ABC$. [3 marks]

::hint
**Cần nhớ:** $\overrightarrow{AB}$, $\overrightarrow{AC}$; tích vô hướng để tính góc và tích có hướng để tính diện tích.

::solution
Trước hết ta tìm hai véc-tơ xuất phát từ $A$:
$$\overrightarrow{AB}=\begin{pmatrix}2\\-3\\4\end{pmatrix},\qquad\overrightarrow{AC}=\begin{pmatrix}-1\\-1\\2\end{pmatrix}.$$

a) Ta có $\overrightarrow{AB}\cdot\overrightarrow{AC}=-2+3+8=9$, và các độ dài $\left|\overrightarrow{AB}\right|=\sqrt{29}$, $\left|\overrightarrow{AC}\right|=\sqrt6$.

Suy ra
$$\cos B\hat AC=\frac{9}{\sqrt{29}\sqrt6},$$
do đó $B\hat AC\approx47{,}0^\circ$.

Vậy góc $B\hat AC$ có số đo khoảng $47{,}0^\circ$.

b) Tích có hướng của hai véc-tơ là
$$\overrightarrow{AB}\times\overrightarrow{AC}=\begin{pmatrix}(-3)(2)-(4)(-1)\\(4)(-1)-(2)(2)\\(2)(-1)-(-3)(-1)\end{pmatrix}=\begin{pmatrix}-2\\-8\\-5\end{pmatrix}.$$

Độ dài của nó là $\sqrt{4+64+25}=\sqrt{93}$, và diện tích tam giác bằng một nửa độ dài này.

Vậy diện tích tam giác $ABC$ là $\dfrac{\sqrt{93}}{2}\approx4{,}82$.

**Đáp số.** a) $47{,}0^\circ$; b) $4{,}82$.
:::

:::exercise [7 marks]
Khối lượng các túi gạo do một máy đóng gói có phân phối chuẩn với trung bình $500$ g và độ lệch chuẩn $4$ g.

a) Tính xác suất một túi có khối lượng nhỏ hơn $495$ g. [2 marks]
b) Có $2\%$ số túi có khối lượng nhỏ hơn $k$ g. Tìm $k$. [2 marks]
c) Một thùng chứa $12$ túi được chọn ngẫu nhiên. Tính xác suất có ít nhất một túi trong thùng nặng dưới $495$ g. [3 marks]

::hint
**Cần nhớ:** $M\sim N\left(500; 4^2\right)$; tra ngược phân phối chuẩn ở câu b); ở câu c), số túi nhẹ có phân phối $B(12;p)$ với $p$ tìm ở câu a).

::solution
Gọi $M$ là khối lượng một túi, tính bằng gam. Khi đó $M\sim N\left(500; 4^2\right)$.

a) Dùng normal cdf trên GDC, ta có
$$P(M<495)\approx0{,}105649.$$
Vậy xác suất cần tìm là $0{,}106$.

b) Ta cần $P(M<k)=0{,}02$. Dùng inverse normal trên GDC, ta được $k\approx491{,}785$.

Vậy $k\approx492$ g.

c) Gọi $X$ là số túi trong thùng nặng dưới $495$ g. Các túi được chọn ngẫu nhiên nên $X\sim B(12; 0{,}105649)$.

Khi đó
$$P(X\ge1)=1-P(X=0)=1-(1-0{,}105649)^{12}\approx0{,}738.$$

Vậy xác suất có ít nhất một túi nặng dưới $495$ g là $0{,}738$.

**Đáp số.** a) $0{,}106$; b) $492$ g; c) $0{,}738$.
:::

:::exercise [6 marks]
Hai đường cong $y=e^{x/2}$ và $y=4-x^2$ cắt nhau tại hai điểm.

a) Tìm hoành độ hai giao điểm. [2 marks]
b) Tính diện tích miền giới hạn bởi hai đường cong. [4 marks]

::hint
**Cần nhớ:** giải $e^{x/2}=4-x^2$ trên GDC; giữa hai giao điểm, parabol nằm trên đường cong hàm mũ.

::solution
a) Giải $e^{x/2}=4-x^2$ bằng cách vẽ đồ thị hai vế trên GDC, ta được hai giao điểm tại
$$x\approx-1{,}9009\quad\text{và}\quad x\approx1{,}4069.$$

Vậy hoành độ hai giao điểm là $x\approx-1{,}90$ và $x\approx1{,}41$.

b) Thử với $x=0$: $4-0^2=4$ và $e^0=1$, nên giữa hai giao điểm, đường cong $y=4-x^2$ nằm trên đường cong $y=e^{x/2}$.

Do đó diện tích là
$$\int_{-1{,}9009}^{1{,}4069}\left(4-x^2-e^{x/2}\right)dx\approx6{,}75.$$

Vậy diện tích miền giới hạn bởi hai đường cong là $6{,}75$.

**Đáp số.** a) $x\approx-1{,}90$ và $x\approx1{,}41$; b) $6{,}75$.
:::

:::exercise [7 marks]
Một hạt chuyển động thẳng với vận tốc $v(t)=3e^{-0{,}2t}\sin t$ m s⁻¹, $0\le t\le10$.

a) Tìm thời điểm $t>0$ đầu tiên hạt dừng lại. [2 marks]
b) Tính tổng quãng đường hạt đi được. [2 marks]
c) Tìm tốc độ lớn nhất của hạt trong $\pi$ giây đầu tiên, và thời điểm đạt tốc độ đó. [3 marks]

::hint
**Cần nhớ:** $v(t)=0$ khi $\sin t=0$; quãng đường là $\displaystyle\int_0^{10}|v(t)|\,dt$; câu c) giải $v'(t)=0$, được $\tan t=5$.

::solution
a) Vì $3e^{-0{,}2t}>0$ nên hạt dừng lại khi $\sin t=0$. Nghiệm dương nhỏ nhất là $t=\pi$.

Vậy hạt dừng lại lần đầu tại $t=\pi\approx3{,}14$ s.

b) Quãng đường đi được là tích phân của tốc độ. Dùng GDC, ta có
$$\int_0^{10}\left|3e^{-0{,}2t}\sin t\right|dt\approx8{,}11.$$
Vậy hạt đi được $8{,}11$ m.

c) Với $0<t<\pi$, vận tốc dương. Lấy đạo hàm theo quy tắc tích, ta được
$$v'(t)=3e^{-0{,}2t}\left(\cos t-0{,}2\sin t\right).$$

Cho $v'(t)=0$ ta có $\cos t=0{,}2\sin t$, tức là $\tan t=5$, nên $t=\arctan5\approx1{,}3734$.

Tại thời điểm này, $v(1{,}3734)\approx2{,}24$, và $v$ chuyển từ tăng sang giảm tại đó.

Vậy trong $\pi$ giây đầu, tốc độ lớn nhất của hạt là $2{,}24$ m s⁻¹, đạt tại $t\approx1{,}37$ s.

**Đáp số.** a) $t=\pi$ s; b) $8{,}11$ m; c) $2{,}24$ m s⁻¹ tại $t\approx1{,}37$ s.
:::

:::exercise [6 marks]
Trong khai triển $(1+ax)^8$, với $a>0$, hệ số của $x^2$ bằng $112$.

a) Tìm giá trị của $a$. [3 marks]
b) Tìm hệ số của $x^3$. [3 marks]

::hint
**Cần nhớ:** số hạng chứa $x^r$ là $\dbinom8r(ax)^r$.

::solution
a) Số hạng chứa $x^2$ là $\dbinom82(ax)^2=28a^2x^2$.

Theo đề bài, $28a^2=112$, suy ra $a^2=4$. Vì $a>0$ nên $a=2$.

Vậy $a=2$.

b) Số hạng chứa $x^3$ là
$$\binom83(2x)^3=56\cdot8x^3=448x^3.$$

Vậy hệ số của $x^3$ là $448$.

**Đáp số.** a) $a=2$; b) $448$.
:::

:::exercise [6 marks]
Độ sâu của nước trong một bến cảng, tính bằng mét, sau $t$ giờ kể từ nửa đêm được mô hình hoá bởi $d(t)=5+3\cos\left(\dfrac{\pi t}{6}\right)$, $0\le t\le24$.

a) Viết độ sâu lớn nhất và nhỏ nhất. [2 marks]
b) Một con tàu chỉ vào được cảng khi độ sâu lớn hơn $6{,}5$ m. Tính tổng thời gian từ $t=0$ đến $t=12$ mà con tàu có thể vào cảng. [4 marks]

::hint
**Cần nhớ:** hàm cosin nhận giá trị từ $-1$ đến $1$; câu b) giải $\cos\left(\dfrac{\pi t}{6}\right)>\dfrac12$ trên $[0;12]$.

::solution
a) Vì $-1\le\cos\left(\dfrac{\pi t}{6}\right)\le1$ nên độ sâu nằm giữa $5-3=2$ m và $5+3=8$ m.

Vậy độ sâu lớn nhất là $8$ m và độ sâu nhỏ nhất là $2$ m.

b) Ta cần $5+3\cos\left(\dfrac{\pi t}{6}\right)>6{,}5$, tức là $\cos\left(\dfrac{\pi t}{6}\right)>\dfrac12$.

Khi $0\le t\le12$, góc $\dfrac{\pi t}{6}$ chạy từ $0$ đến $2\pi$, và $\cos\theta>\dfrac12$ khi $0\le\theta<\dfrac\pi3$ hoặc $\dfrac{5\pi}{3}<\theta\le2\pi$.

Suy ra $0\le t<2$ hoặc $10<t\le12$, tổng cộng $2+2=4$ giờ.

Vậy từ nửa đêm đến trưa, con tàu có thể vào cảng trong tổng cộng $4$ giờ.

**Đáp số.** a) $8$ m và $2$ m; b) $4$ giờ.
:::

## Section B

:::exercise [20 marks]
Cho $f(x)=xe^{-x}$, với $x\ge0$.

a) Tìm $f'(x)$. [2 marks]
b) Tìm toạ độ chính xác của điểm cực đại của đồ thị $f$. [3 marks]
c) Chứng minh $f''(x)=(x-2)e^{-x}$, và tìm toạ độ chính xác của điểm uốn. [3 marks]
d) Tính diện tích chính xác của miền giới hạn bởi đồ thị $f$, trục $x$ và đường thẳng $x=3$. [4 marks]
e) Quay miền ở câu d) một vòng $2\pi$ quanh trục $x$. Tính thể tích khối tạo thành. [3 marks]
f) Tìm chuỗi Maclaurin của $f(x)$ đến số hạng chứa $x^3$. [3 marks]
g) Dùng kết quả câu f) để tính gần đúng $f(0{,}1)$, và so sánh với giá trị đúng. [2 marks]

::hint
**Cần nhớ:** quy tắc tích; tích phân từng phần với $u=x$, $dv=e^{-x}dx$; $V=\pi\displaystyle\int y^2\,dx$; nhân $x$ với chuỗi của $e^{-x}$.

::solution
a) Theo quy tắc đạo hàm của tích, ta có
$$f'(x)=e^{-x}+x\left(-e^{-x}\right)=(1-x)e^{-x}.$$

Vậy $f'(x)=(1-x)e^{-x}$.

b) Vì $e^{-x}>0$ nên $f'(x)=0$ chỉ khi $x=1$. Mặt khác $f'(x)>0$ khi $0\le x<1$ và $f'(x)<0$ khi $x>1$, nên $f$ đạt cực đại tại $x=1$.

Giá trị cực đại là $f(1)=e^{-1}$.

Vậy điểm cực đại là $\left(1,\dfrac1e\right)$.

c) Lấy đạo hàm $f'(x)=(1-x)e^{-x}$ theo quy tắc tích, ta được
$$f''(x)=-e^{-x}-(1-x)e^{-x}=(x-2)e^{-x}.$$

$f''(x)=0$ khi $x=2$, và $f''$ đổi dấu từ âm sang dương tại đó, nên đồ thị có điểm uốn tại $x=2$, với $f(2)=2e^{-2}$.

Vậy điểm uốn là $\left(2,\dfrac{2}{e^2}\right)$.

d) Vì $f(x)\ge0$ trên $[0;3]$ nên diện tích là $\displaystyle\int_0^3xe^{-x}\,dx$.

Tích phân từng phần với $u=x$ và $dv=e^{-x}dx$, khi đó $du=dx$ và $v=-e^{-x}$:
$$\int_0^3xe^{-x}\,dx=\Big[-xe^{-x}\Big]_0^3+\int_0^3e^{-x}\,dx=-3e^{-3}+\Big[-e^{-x}\Big]_0^3=-3e^{-3}-e^{-3}+1.$$

Vậy diện tích là $1-4e^{-3}\approx0{,}801$.

e) Thể tích khối tròn xoay là
$$V=\pi\int_0^3\left(xe^{-x}\right)^2dx=\pi\int_0^3x^2e^{-2x}\,dx\approx0{,}737.$$

Vậy thể tích khối tạo thành là $0{,}737$ đơn vị thể tích.

f) Vì $e^{-x}=1-x+\dfrac{x^2}{2}-\dots$ nên
$$f(x)=x\left(1-x+\frac{x^2}{2}-\dots\right)=x-x^2+\frac{x^3}{2}-\dots$$

Vậy chuỗi Maclaurin đến số hạng chứa $x^3$ là $x-x^2+\dfrac{x^3}{2}$.

g) Thay $x=0{,}1$: $0{,}1-0{,}01+0{,}0005=0{,}0905$.

Giá trị đúng là $f(0{,}1)=0{,}1e^{-0{,}1}\approx0{,}0904837$, nên giá trị gần đúng chỉ sai khác khoảng $0{,}00002$.

Vậy $f(0{,}1)\approx0{,}0905$, một xấp xỉ rất tốt vì $x=0{,}1$ gần $0$.

**Đáp số.** a) $(1-x)e^{-x}$; b) $\left(1,\dfrac1e\right)$; c) $\left(2,\dfrac{2}{e^2}\right)$; d) $1-4e^{-3}$; e) $0{,}737$; f) $x-x^2+\dfrac{x^3}{2}$; g) $0{,}0905$.
:::

:::exercise [20 marks]
Mặt phẳng $\Pi$ có phương trình $2x-y+2z=6$. Đường thẳng $L$ có phương trình $\boldsymbol r=\begin{pmatrix}1\\0\\3\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\-1\end{pmatrix}$, và $P(1,0,3)$ là một điểm trên $L$.

a) Tìm toạ độ giao điểm của $L$ và $\Pi$. [4 marks]
b) Tìm góc nhọn giữa $L$ và $\Pi$. [4 marks]
c) Tính khoảng cách từ $P$ đến $\Pi$. [3 marks]
d) Tìm toạ độ chân đường vuông góc hạ từ $P$ xuống $\Pi$. [5 marks]
e) Tìm toạ độ điểm đối xứng với $P$ qua $\Pi$. [4 marks]

::hint
**Cần nhớ:** điểm tổng quát của $L$ là $(1+\lambda,2\lambda,3-\lambda)$; véc-tơ pháp tuyến của $\Pi$ là $\boldsymbol n=\begin{pmatrix}2\\-1\\2\end{pmatrix}$; góc với mặt phẳng dùng sin; đường vuông góc từ $P$ có hướng $\boldsymbol n$.

::solution
Mặt phẳng $\Pi$ có véc-tơ pháp tuyến $\boldsymbol n=\begin{pmatrix}2\\-1\\2\end{pmatrix}$, với $|\boldsymbol n|=3$; đường thẳng $L$ có véc-tơ chỉ phương $\boldsymbol d=\begin{pmatrix}1\\2\\-1\end{pmatrix}$, với $|\boldsymbol d|=\sqrt6$.

a) Điểm tổng quát của $L$ là $(1+\lambda,2\lambda,3-\lambda)$. Thay vào phương trình của $\Pi$, ta được
$$2(1+\lambda)-2\lambda+2(3-\lambda)=6,$$
tức là $8-2\lambda=6$, nên $\lambda=1$.

Vậy $L$ cắt $\Pi$ tại điểm $(2,2,2)$. Kiểm tra: $4-2+4=6$.

b) Ta có $\boldsymbol n\cdot\boldsymbol d=2-2-2=-2$. Góc $\varphi$ giữa đường thẳng và mặt phẳng thoả mãn
$$\sin\varphi=\frac{|\boldsymbol n\cdot\boldsymbol d|}{|\boldsymbol n||\boldsymbol d|}=\frac{2}{3\sqrt6}.$$

Vậy góc nhọn giữa $L$ và $\Pi$ là $\varphi\approx15{,}8^\circ$.

c) Khoảng cách từ $P(1,0,3)$ đến mặt phẳng $2x-y+2z-6=0$ là
$$\frac{|2(1)-0+2(3)-6|}{|\boldsymbol n|}=\frac{2}{3}.$$

Vậy khoảng cách từ $P$ đến $\Pi$ là $\dfrac23$.

d) Đường thẳng qua $P$ vuông góc với $\Pi$ có véc-tơ chỉ phương $\boldsymbol n$, nên các điểm của nó có dạng $(1+2t,-t,3+2t)$. Thay vào phương trình của $\Pi$, ta được
$$2(1+2t)+t+2(3+2t)=6,$$
tức là $9t+8=6$, nên $t=-\dfrac29$.

Vậy chân đường vuông góc là $\left(\dfrac59,\dfrac29,\dfrac{23}{9}\right)$. Kiểm tra: khoảng cách từ điểm này đến $P$ là $\dfrac29|\boldsymbol n|=\dfrac23$, khớp với câu c).

e) Điểm đối xứng $P'$ nằm trên cùng đường vuông góc nhưng xa gấp đôi, ứng với $t=-\dfrac49$:
$$P'=\left(1-\frac89,\ \frac49,\ 3-\frac89\right).$$

Vậy điểm đối xứng với $P$ qua $\Pi$ là $\left(\dfrac19,\dfrac49,\dfrac{19}{9}\right)$.

**Đáp số.** a) $(2,2,2)$; b) $15{,}8^\circ$; c) $\dfrac23$; d) $\left(\dfrac59,\dfrac29,\dfrac{23}{9}\right)$; e) $\left(\dfrac19,\dfrac49,\dfrac{19}{9}\right)$.
:::

:::exercise [20 marks]
Số cá trong một hồ được mô hình hoá bởi phương trình vi phân
$$\frac{dP}{dt}=0{,}1P\left(1-\frac{P}{1000}\right),$$
trong đó $t$ là thời gian tính bằng năm và $P(0)=100$.

a) Chứng minh $P=\dfrac{1000}{1+9e^{-0{,}1t}}$. [7 marks]
b) Tính số cá sau $10$ năm. [2 marks]
c) Tìm thời điểm số cá đạt $500$. [3 marks]
d) Dùng phương pháp Euler với bước $h=5$ để ước lượng $P(10)$. [4 marks]
e) Giải thích vì sao giá trị ước lượng ở câu d) nhỏ hơn giá trị ở câu b). [2 marks]
f) Viết $\displaystyle\lim_{t\to\infty}P$ và giải thích ý nghĩa. [2 marks]

::hint
**Cần nhớ:** tách biến và dùng $\dfrac{1000}{P(1000-P)}=\dfrac1P+\dfrac{1}{1000-P}$; câu e): đường cong nghiệm lõm lên khi $P<500$.

::solution
a) Viết phương trình dưới dạng $\dfrac{dP}{dt}=\dfrac{P(1000-P)}{10.000}$ rồi tách biến:
$$\int\frac{1000}{P(1000-P)}\,dP=\int0{,}1\,dt.$$

Phân tích thành phân thức đơn giản, $\dfrac{1000}{P(1000-P)}=\dfrac1P+\dfrac{1}{1000-P}$, nên
$$\ln P-\ln(1000-P)=0{,}1t+C\qquad(0<P<1000).$$

Khi $t=0$ thì $P=100$, nên $C=\ln\dfrac{100}{900}=-\ln9$.

Do đó $\ln\dfrac{P}{1000-P}=0{,}1t-\ln9$, suy ra $\dfrac{P}{1000-P}=\dfrac{e^{0{,}1t}}{9}$.

Rút $P$: $9P=e^{0{,}1t}(1000-P)$, nên $P\left(9+e^{0{,}1t}\right)=1000e^{0{,}1t}$, rồi chia cả tử và mẫu cho $e^{0{,}1t}$, ta được
$$P=\frac{1000}{1+9e^{-0{,}1t}}.$$

Vậy nghiệm của phương trình là $P=\dfrac{1000}{1+9e^{-0{,}1t}}$.

b) Thay $t=10$, ta có
$$P(10)=\frac{1000}{1+9e^{-1}}\approx231{,}97.$$

Vậy sau $10$ năm, hồ có khoảng $232$ con cá.

c) Ta cần $\dfrac{1000}{1+9e^{-0{,}1t}}=500$, tức là $1+9e^{-0{,}1t}=2$, nên $e^{-0{,}1t}=\dfrac19$.

Lấy logarit, ta được $t=10\ln9\approx21{,}97$.

Vậy số cá đạt $500$ sau khoảng $22{,}0$ năm.

d) Với $h=5$ và $\dfrac{dP}{dt}=0{,}1P\left(1-\dfrac{P}{1000}\right)$:

Tại $t=0$: $P_1=100+5\times0{,}1\times100\times0{,}9=145$.

Tại $t=5$: $P_2=145+5\times0{,}1\times145\times0{,}855\approx206{,}99$.

Vậy phương pháp Euler ước lượng $P(10)\approx207$ con cá.

e) Khi $P<500$, tốc độ $\dfrac{dP}{dt}$ tăng khi $P$ tăng, nên đường cong nghiệm lõm lên. Mỗi bước Euler đi theo một tiếp tuyến, mà tiếp tuyến nằm dưới đường cong lõm lên.

Vậy ở đây phương pháp Euler cho giá trị nhỏ hơn thực tế: $207<232$.

f) Khi $t\to\infty$, $e^{-0{,}1t}\to0$, nên $P\to1000$.

Vậy về lâu dài số cá tiến tới $1000$ con, chính là sức chứa của hồ.

**Đáp số.** b) $232$ con; c) $22{,}0$ năm; d) $207$ con; f) $1000$.
:::

## Sau khi làm đề

Cộng điểm trên 110, từng ý một: theo cách chấm của IB, điểm phương pháp vẫn được tính khi đáp số sai, và có điểm kéo theo khi bạn dùng đúng một đáp số sai ở ý trước. Ngưỡng điểm thay đổi theo từng kì thi, vì vậy hãy dùng điểm số để tìm chủ đề còn yếu. Với các điểm bị mất, hãy ôn lại: [Số và đại số](lesson:ibaa-number-algebra) (bài 1, 7), [Số phức, quy nạp và chứng minh](lesson:ibaa-hl-complex-proof) (bài 2), [Véc-tơ, đường thẳng và mặt phẳng](lesson:ibaa-hl-vectors) (bài 3, 10), [Thống kê và xác suất](lesson:ibaa-statistics-probability) (bài 4), [Giải tích](lesson:ibaa-calculus) (bài 5, 6, 9), [Hình học và lượng giác](lesson:ibaa-geometry-trigonometry) (bài 8), [Giải tích nâng cao](lesson:ibaa-hl-further-calculus) (bài 9, 11).
