---
title: Thống kê nâng cao và phương trình vi phân
description: IB Math AI HL: tổ hợp tuyến tính của biến ngẫu nhiên, phân phối Poisson, khoảng tin cậy cho trung bình, phương trình vi phân và phương pháp Euler.
minutes: 55
---

:::goals
- Tìm kì vọng và phương sai của tổ hợp tuyến tính các biến ngẫu nhiên độc lập.
- Dùng phân phối Poisson cho số lần xảy ra của các sự kiện ngẫu nhiên, kể cả tổng các biến Poisson.
- Lập và diễn giải khoảng tin cậy cho trung bình bằng GDC.
- Lập và giải các phương trình vi phân đơn giản, kể cả bằng cách tách biến, và tính gần đúng nghiệm bằng phương pháp Euler.
:::

Một tiệm bánh bán túi sáu chiếc bánh mì. Khối lượng mỗi chiếc xê dịch đôi chút, nên khối lượng cả túi cũng vậy. Khả năng một túi bị thiếu cân là bao nhiêu? Một tổng đài nhận trung bình ba cuộc gọi mỗi giờ, một cách ngẫu nhiên. Khả năng có một giờ yên ắng không cuộc gọi nào là bao nhiêu? Một cốc cà phê càng nóng thì nguội càng nhanh. Mười phút nữa nó còn nóng đến đâu? Đó là những câu hỏi học sinh HL của Math AI trả lời bằng các ý tưởng trong bài này.

Chúng có chung một chủ đề: mô tả sự thay đổi và sự biến động bằng một mô hình, rồi dùng mô hình để đưa ra dự đoán đáng tin. Phần thống kê ở đây xây trên phân phối chuẩn và nhị thức bạn đã biết, còn phương trình vi phân xây trên đạo hàm. Không có bước nhảy lớn nào; mỗi bước đều nhỏ và hợp lí.

## Tổ hợp tuyến tính của biến ngẫu nhiên

Với các biến ngẫu nhiên $X$, $Y$ và các hằng số $a$, $b$:
$$E(aX+bY)=aE(X)+bE(Y).$$
Nếu $X$ và $Y$ **độc lập** thì
$$\operatorname{Var}(aX\pm bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y).$$
Để ý dấu cộng cho cả tổng lẫn hiệu: trừ đi một đại lượng ngẫu nhiên làm tăng độ bất định, chứ không làm giảm. Cũng để ý rằng $X_1+X_2$ (hai vật riêng) khác với $2X$ (một vật nhân đôi): $\operatorname{Var}(X_1+X_2)=2\operatorname{Var}(X)$, còn $\operatorname{Var}(2X)=4\operatorname{Var}(X)$. Nếu $X$ và $Y$ có phân phối chuẩn thì mọi tổ hợp tuyến tính của chúng cũng vậy.

:::example Hai kiện hàng
Kiện hàng A có khối lượng $X$ với trung bình $50$ kg và độ lệch chuẩn $4$ kg; kiện hàng B có khối lượng $Y$ với trung bình $30$ kg và độ lệch chuẩn $3$ kg, độc lập với nhau. Trung bình và độ lệch chuẩn của tổng khối lượng là
A. Trung bình $80$ kg, độ lệch chuẩn $7$ kg
B. Trung bình $80$ kg, độ lệch chuẩn $5$ kg
C. Trung bình $80$ kg, độ lệch chuẩn $25$ kg
D. Trung bình $20$ kg, độ lệch chuẩn $5$ kg

**Lời giải.** Trung bình là $E(X+Y)=50+30=80$ kg.

Vì hai khối lượng độc lập nên các phương sai cộng lại: $\operatorname{Var}(X+Y)=4^2+3^2=25$, do đó độ lệch chuẩn là $\sqrt{25}=5$ kg.

Vậy tổng có trung bình $80$ kg và độ lệch chuẩn $5$ kg, chọn đáp án **B**. Phương án A cộng các độ lệch chuẩn, điều không bao giờ đúng; phương án C cho phương sai.
:::

## Phân phối Poisson

**Phân phối Poisson** $X\sim\text{Po}(m)$ mô hình hoá số sự kiện trong một khoảng thời gian hay không gian cố định, khi các sự kiện xảy ra **từng cái một**, **độc lập** và với **tốc độ trung bình không đổi**:
$$P(X=k)=\frac{m^ke^{-m}}{k!},\qquad E(X)=\operatorname{Var}(X)=m.$$
Nếu $X\sim\text{Po}(m)$ và $Y\sim\text{Po}(n)$ độc lập thì $X+Y\sim\text{Po}(m+n)$. Một cách kiểm tra nhanh xem mô hình Poisson có hợp lí không: trung bình và phương sai của dữ liệu nên xấp xỉ bằng nhau.

:::example Một tổng đài
Cuộc gọi đến ngẫu nhiên với tốc độ trung bình $3$ cuộc mỗi giờ.
a) Tính xác suất có đúng $2$ cuộc gọi trong một giờ.
b) Tính xác suất có ít nhất một cuộc gọi trong một giờ.
c) Tính xác suất có nhiều nhất $2$ cuộc gọi trong hai giờ.

**Lời giải.** a) Với $X\sim\text{Po}(3)$, $P(X=2)=\dfrac{3^2e^{-3}}{2!}\approx0{,}224$.

b) $P(X\ge1)=1-P(X=0)=1-e^{-3}\approx0{,}950$.

c) Trong hai giờ, trung bình là $6$, nên $Y\sim\text{Po}(6)$ và GDC cho $P(Y\le2)\approx0{,}0620$.

Vậy các xác suất lần lượt xấp xỉ $0{,}224$, $0{,}950$ và $0{,}0620$.
:::

## Khoảng tin cậy cho trung bình

Khi chưa biết độ lệch chuẩn của tổng thể, **khoảng tin cậy** cho trung bình $\mu$ dùng phân phối $t$ với $n-1$ bậc tự do:
$$\bar x\pm t^*\frac{s_{n-1}}{\sqrt n}.$$
GDC tính khoảng này từ dữ liệu hoặc từ các số đặc trưng. Khoảng tin cậy $95\%$ nghĩa là phương pháp chứa được trung bình thật ở khoảng $95\%$ số mẫu; không có nghĩa là $\mu$ thay đổi.

:::example Khoảng tin cậy cho trung bình
Một mẫu ngẫu nhiên $10$ viên pin có thời gian sử dụng trung bình $12{,}3$ giờ và độ lệch chuẩn mẫu $1{,}5$ giờ. Tìm khoảng tin cậy $95\%$ cho thời gian sử dụng trung bình của mọi viên pin, giả sử thời gian sử dụng có phân phối chuẩn.

**Lời giải.** Với $9$ bậc tự do, $t^*\approx2{,}262$, và sai số biên là $2{,}262\times\dfrac{1{,}5}{\sqrt{10}}\approx1{,}073$.

Do đó khoảng là $12{,}3\pm1{,}073$, tức $(11{,}2;\ 13{,}4)$ giờ, làm tròn đến ba chữ số có nghĩa.

Vậy ta tin cậy $95\%$ rằng thời gian sử dụng trung bình của mọi viên pin nằm trong khoảng từ $11{,}2$ đến $13{,}4$ giờ.
:::

## Phương trình vi phân

**Phương trình vi phân** liên hệ một hàm số với đạo hàm của nó. Hai mô hình gặp đi gặp lại:

- **Tăng hoặc giảm tỉ lệ với kích thước:** $\dfrac{dy}{dt}=ky$ có nghiệm $y=y_0e^{kt}$.
- **Nguội dần về nhiệt độ môi trường $T_s$:** $\dfrac{dT}{dt}=-k(T-T_s)$ có nghiệm $T=T_s+(T_0-T_s)e^{-kt}$.

Nhiều phương trình dạng $\dfrac{dy}{dx}=f(x)g(y)$ giải được bằng **tách biến**: viết lại thành $\dfrac{1}{g(y)}\,dy=f(x)\,dx$, lấy nguyên hàm hai vế, rồi dùng điều kiện ban đầu để tìm hằng số.

Khi một phương trình không giải chính xác được, **phương pháp Euler** dựng nghiệm gần đúng từng bước với bước nhảy $h$:
$$x_{n+1}=x_n+h,\qquad y_{n+1}=y_n+h\times\frac{dy}{dx}\Big|_{(x_n,y_n)}.$$
Mỗi bước đi theo tiếp tuyến một đoạn ngắn; bước càng nhỏ thường cho kết quả càng sát.

:::example Một quần thể tăng trưởng
Một quần thể tăng với tốc độ tỉ lệ với kích thước: $\dfrac{dP}{dt}=0{,}05P$, với $P=200$ khi $t=0$ (năm). Tìm $P$ sau $10$ năm và thời gian để quần thể tăng gấp đôi.

**Lời giải.** Tách biến, $\dfrac{1}{P}\,dP=0{,}05\,dt$, nên $\ln P=0{,}05t+c$, cho $P=Ae^{0{,}05t}$. Điều kiện ban đầu cho $A=200$, nên $P=200e^{0{,}05t}$.

Sau $10$ năm, $P=200e^{0{,}5}\approx330$. Quần thể tăng gấp đôi khi $e^{0{,}05t}=2$, tức $t=\dfrac{\ln2}{0{,}05}\approx13{,}9$ năm.

Vậy sau $10$ năm quần thể khoảng $330$ cá thể và tăng gấp đôi sau khoảng $13{,}9$ năm.
:::

:::example Phương pháp Euler
Với $\dfrac{dy}{dx}=x+y$ và $y=1$ khi $x=0$, dùng phương pháp Euler với $h=0{,}1$ để ước lượng $y$ khi $x=0{,}3$.
A. $1{,}300$
B. $1{,}400$
C. $1{,}362$
D. $1{,}220$

**Lời giải.** Mỗi bước cộng thêm $h\times(x_n+y_n)$:

$y_1=1+0{,}1(0+1)=1{,}1$; $y_2=1{,}1+0{,}1(0{,}1+1{,}1)=1{,}22$; $y_3=1{,}22+0{,}1(0{,}2+1{,}22)=1{,}362$.

Vậy ước lượng là $y\approx1{,}362$, chọn đáp án **C**. Phương án D dừng sau hai bước. Giá trị chính xác khoảng $1{,}400$: ở đây phương pháp Euler cho giá trị nhỏ hơn vì đường cong cong lên, tách dần khỏi mỗi tiếp tuyến.
:::

:::warning Những cái bẫy thường gặp
- **Phương sai cộng được, độ lệch chuẩn thì không:** tính phương sai trước, rồi mới khai căn.
- **$X_1+X_2$ và $2X$:** hai vật riêng khác với một vật nhân đôi.
- **Tốc độ Poisson:** điều chỉnh trung bình theo đúng khoảng thời gian đề hỏi.
- **Phương pháp Euler:** dùng hệ số góc ở **đầu** mỗi bước, và đếm số bước cẩn thận.
- **Điều kiện ban đầu:** đừng quên hằng số tích phân.
:::

:::terms
- linear combination | tổ hợp tuyến tính
- independent random variables | các biến ngẫu nhiên độc lập
- Poisson distribution | phân phối Poisson
- mean rate | tốc độ trung bình
- confidence interval | khoảng tin cậy
- differential equation | phương trình vi phân
- separation of variables | tách biến
- initial condition | điều kiện ban đầu
- Euler's method | phương pháp Euler
- step size | bước nhảy
:::

## Bài tập tương tự

:::exercise
Hai biến ngẫu nhiên độc lập $X$ và $Y$ có $E(X)=50$, $\operatorname{Var}(X)=16$, $E(Y)=30$ và $\operatorname{Var}(Y)=9$. Tính $E(2X-Y)$ và $\operatorname{Var}(2X-Y)$.

::hint
**Kiến thức:** $\operatorname{Var}(aX-bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)$.

::solution
Kì vọng là $E(2X-Y)=2(50)-30=70$.

Vì $X$ và $Y$ độc lập nên $\operatorname{Var}(2X-Y)=2^2(16)+(-1)^2(9)=64+9=73$; các phương sai vẫn cộng lại dù ta lấy hiệu.

Vậy $E(2X-Y)=70$ và $\operatorname{Var}(2X-Y)=73$.

**Đáp số.** $70$ và $73$.
:::

:::exercise
Với $X\sim\text{Po}(2{,}5)$, tính $P(X=0)$ và $P(X=4)$.

::hint
**Kiến thức:** $P(X=k)=\dfrac{m^ke^{-m}}{k!}$.

::solution
Với $m=2{,}5$, $P(X=0)=e^{-2{,}5}\approx0{,}0821$.

Tương tự, $P(X=4)=\dfrac{2{,}5^4e^{-2{,}5}}{4!}=\dfrac{39{,}0625\times0{,}08209}{24}\approx0{,}134$.

Vậy $P(X=0)\approx0{,}0821$ và $P(X=4)\approx0{,}134$.

**Đáp số.** $0{,}0821$; $0{,}134$.
:::

:::exercise
Nêu ba điều kiện để phân phối Poisson là mô hình phù hợp cho số ô tô đi qua một điểm trong một phút.

::hint
**Kiến thức:** các sự kiện xảy ra từng cái một, độc lập, với tốc độ trung bình không đổi.

::solution
Các xe phải đi qua lần lượt từng chiếc một, việc một xe đi qua không ảnh hưởng đến thời điểm xe tiếp theo đi qua (độc lập), và số xe trung bình mỗi phút phải giữ nguyên trong khoảng thời gian xét (tốc độ không đổi).

Vậy mô hình phù hợp vào một thời điểm giao thông ổn định trong ngày, nhưng không phù hợp chẳng hạn khi xe đến thành từng tốp sau đèn giao thông.

**Đáp số.** Từng cái một, độc lập, tốc độ trung bình không đổi.
:::

:::exercise
Giải phương trình $\dfrac{dy}{dx}=3y$ với $y=4$ khi $x=0$.

::hint
**Kiến thức:** $\dfrac{dy}{dx}=ky$ cho $y=y_0e^{kx}$.

::solution
Tách biến, $\dfrac1y\,dy=3\,dx$, nên $\ln y=3x+c$ và $y=Ae^{3x}$.

Điều kiện $y=4$ khi $x=0$ cho $A=4$.

Vậy $y=4e^{3x}$.

**Đáp số.** $y=4e^{3x}$.
:::

:::exercise
Giải phương trình $\dfrac{dy}{dx}=\dfrac{2x}{y}$ với $y=3$ khi $x=0$, trong đó $y>0$.

::hint
**Kiến thức:** tách thành $y\,dy=2x\,dx$.

::solution
Tách biến được $y\,dy=2x\,dx$, và lấy nguyên hàm hai vế được $\dfrac{y^2}{2}=x^2+c$.

Điều kiện $y=3$ khi $x=0$ cho $c=\dfrac92$, nên $y^2=2x^2+9$.

Vậy, vì $y>0$, $y=\sqrt{2x^2+9}$.

**Đáp số.** $y=\sqrt{2x^2+9}$.
:::

## Bài tập vận dụng

:::exercise
Khách đến một cửa hàng nhỏ ngẫu nhiên với tốc độ trung bình $4$ người mỗi $10$ phút. Tính xác suất có hơn $3$ khách đến trong một khoảng $10$ phút.

::hint
**Kiến thức:** $P(X>3)=1-P(X\le3)$ với $X\sim\text{Po}(4)$.

::solution
Số khách trong $10$ phút là $X\sim\text{Po}(4)$, vì khách đến từng người một, độc lập, với tốc độ trung bình không đổi.

Khi đó $P(X>3)=1-P(X\le3)\approx1-0{,}4335=0{,}567$, dùng GDC tính xác suất tích luỹ.

Vậy xác suất có hơn $3$ khách xấp xỉ $0{,}567$.

**Đáp số.** Khoảng $0{,}567$.
:::

:::exercise
Một cốc cà phê $90^\circ$C nguội trong phòng có nhiệt độ $20^\circ$C theo $\dfrac{dT}{dt}=-0{,}1(T-20)$, với $t$ tính bằng phút. Tính nhiệt độ sau $10$ phút.

::hint
**Kiến thức:** $T=T_s+(T_0-T_s)e^{-kt}$.

::solution
Đây là mô hình nguội dần với $T_s=20$, $T_0=90$ và $k=0{,}1$, nên $T=20+70e^{-0{,}1t}$.

Sau $10$ phút, $T=20+70e^{-1}\approx45{,}8^\circ$C.

Vậy sau $10$ phút cà phê còn khoảng $45{,}8^\circ$C.

**Đáp số.** Khoảng $45{,}8^\circ$C.
:::

:::exercise
Với $\dfrac{dy}{dx}=0{,}2y$ và $y=2$ khi $x=0$, dùng phương pháp Euler với $h=0{,}5$ để ước lượng $y$ khi $x=1$, và so sánh với giá trị chính xác.

::hint
**Kiến thức:** hai bước, mỗi bước nhân $y$ với $1+0{,}5(0{,}2)=1{,}1$.

::solution
Mỗi bước cho $y_{n+1}=y_n+0{,}5(0{,}2y_n)=1{,}1y_n$, nên $y_1=2{,}2$ và $y_2=2{,}42$.

Nghiệm chính xác là $y=2e^{0{,}2x}$, nên tại $x=1$ bằng $2e^{0{,}2}\approx2{,}443$.

Vậy phương pháp Euler cho $2{,}42$, nhỏ hơn một chút so với giá trị chính xác $2{,}443$.

**Đáp số.** $2{,}42$; chính xác $2{,}443$.
:::

:::exercise Thử thách
Một hộp chứa $6$ quả táo, khối lượng mỗi quả có phân phối chuẩn với trung bình $150$ g và độ lệch chuẩn $10$ g, độc lập với nhau. Vỏ hộp có khối lượng với trung bình $200$ g và độ lệch chuẩn $5$ g. Tính xác suất một hộp đầy nặng hơn $1150$ g.

::hint
**Kiến thức:** tổng là $X_1+\dots+X_6+B$, không phải $6X+B$.

::solution
Tổng khối lượng $W=X_1+X_2+\dots+X_6+B$ có trung bình $6(150)+200=1100$ g.

Vì sáu quả táo và vỏ hộp độc lập nên $\operatorname{Var}(W)=6(10^2)+5^2=625$, do đó độ lệch chuẩn là $25$ g, và $W$ có phân phối chuẩn.

Khi đó $P(W>1150)=P\left(Z>\dfrac{1150-1100}{25}\right)=P(Z>2)\approx0{,}0228$.

Vậy khoảng $2{,}28\%$ số hộp đầy nặng hơn $1150$ g.

**Đáp số.** Khoảng $0{,}0228$.
:::

:::quiz
::mc
Hai biến độc lập $X$ và $Y$ có độ lệch chuẩn $6$ và $8$. Độ lệch chuẩn của $X+Y$ là
A. $14$
B. $100$
C. $10$
D. $2$
::key C
$\sqrt{36+64}=10$.

::mc
Với $X\sim\text{Po}(4)$, $\operatorname{Var}(X)$ bằng
A. $4$
B. $2$
C. $16$
D. $0{,}25$
::key A
Với phân phối Poisson, phương sai bằng kì vọng.

::mc
Nghiệm của $\dfrac{dy}{dt}=0{,}3y$ với $y(0)=5$ là
A. $y=0{,}3e^{5t}$
B. $y=5+0{,}3t$
C. $y=5t^{0{,}3}$
D. $y=5e^{0{,}3t}$
::key D
Tăng tỉ lệ với kích thước là tăng theo hàm mũ.

::mc
Phương pháp Euler với bước $h$ dùng
A. hệ số góc ở cuối mỗi bước
B. hệ số góc ở đầu mỗi bước
C. nghiệm chính xác
D. diện tích dưới đường cong
::key B
$y_{n+1}=y_n+h\times\text{hệ số góc tại }(x_n,y_n)$.

::tf
Cuộc gọi đến theo $\text{Po}(2)$ mỗi phút. Xét tính đúng sai của các mệnh đề sau:
a) Số cuộc gọi trung bình mỗi phút là $2$.
b) Số cuộc gọi trong $3$ phút là $\text{Po}(6)$.
c) $P(X=0)=e^{-2}$ trong một phút.
d) Phương sai mỗi phút là $4$.
::key T T T F
Phương sai bằng kì vọng, là $2$.

::sa
Tính $\operatorname{Var}(3X)$ nếu $\operatorname{Var}(X)=2$.
::key 18
$3^2\times2=18$.

::sa
Dùng phương pháp Euler cho $\dfrac{dy}{dx}=2$ với $y(0)=1$ và $h=0{,}5$, tìm $y$ tại $x=1$.
::key 3
Hai bước, mỗi bước cộng $0{,}5\times2=1$.
:::
