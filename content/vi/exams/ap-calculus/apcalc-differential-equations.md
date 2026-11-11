---
title: Phương trình vi phân và trường hướng
description: AP Calculus Unit 7: kiểm tra nghiệm, trường hướng, tách biến, mô hình hàm mũ; riêng BC: phương pháp Euler và tăng trưởng logistic.
minutes: 45
---

:::goals
- Kiểm tra một hàm số có phải là nghiệm của phương trình vi phân hay không.
- Vẽ và đọc trường hướng, nhận ra phương trình tương ứng.
- Giải phương trình vi phân tách biến có điều kiện ban đầu, đủ từng bước như người chấm yêu cầu.
- Mô hình hoá tăng trưởng và suy giảm bằng $\dfrac{dy}{dt}=ky$.
- (BC) Xấp xỉ nghiệm bằng phương pháp Euler và phân tích tăng trưởng logistic.
:::

Unit 7 gần như năm nào cũng có trong phần tự luận, thường là trọn một câu: vẽ trường hướng tại vài điểm, tìm xấp xỉ bằng tiếp tuyến, rồi giải phương trình bằng cách tách biến. Phần tách biến đáng nhiều điểm và được chấm rất chặt từng bước. Tin vui là các bước lúc nào cũng giống nhau.

## Nghiệm và trường hướng

**Phương trình vi phân** liên hệ một hàm chưa biết với các đạo hàm của nó. Một hàm số là **nghiệm** nếu thay vào thì phương trình đúng. **Trường hướng** vẽ tại mỗi điểm $(x,y)$ một đoạn thẳng ngắn có hệ số góc $\dfrac{dy}{dx}$ cho bởi phương trình; các đường cong nghiệm đi theo hướng của những đoạn này.

:::example Kiểm tra nghiệm
Hàm số nào thoả mãn $\dfrac{dy}{dx}=2y$?
A. $y=x^2$
B. $y=e^{x^2}$
C. $y=2e^{x}$
D. $y=3e^{2x}$

**Lời giải.** Với $y=3e^{2x}$: $y'=6e^{2x}=2\left(3e^{2x}\right)=2y$. Đáp án **D**. Với C, $y'=2e^x=y$, không phải $2y$.
:::

:::graph Trường hướng của $\dfrac{dy}{dx}=x-y$, cùng nghiệm $y=x-1$
alt: Các đoạn ngắn tại các điểm nguyên từ -2 đến 2 theo cả hai chiều; các đoạn nằm ngang dọc theo đường y = x và dốc dần khi đi xuống phía dưới đường này; đường thẳng y = x - 1 vẽ xuyên qua trường hướng
x: -2.5..2.5
y: -2.5..2.5
plot: x - 1
segment: (-2.32, -2.00) (-1.68, -2.00)
segment: (-2.23, -0.77) (-1.77, -1.23)
segment: (-2.14, 0.29) (-1.86, -0.29)
segment: (-2.10, 1.30) (-1.90, 0.70)
segment: (-2.08, 2.31) (-1.92, 1.69)
segment: (-1.23, -2.23) (-0.77, -1.77)
segment: (-1.32, -1.00) (-0.68, -1.00)
segment: (-1.23, 0.23) (-0.77, -0.23)
segment: (-1.14, 1.29) (-0.86, 0.71)
segment: (-1.10, 2.30) (-0.90, 1.70)
segment: (-0.14, -2.29) (0.14, -1.71)
segment: (-0.23, -1.23) (0.23, -0.77)
segment: (-0.32, 0.00) (0.32, 0.00)
segment: (-0.23, 1.23) (0.23, 0.77)
segment: (-0.14, 2.29) (0.14, 1.71)
segment: (0.90, -2.30) (1.10, -1.70)
segment: (0.86, -1.29) (1.14, -0.71)
segment: (0.77, -0.23) (1.23, 0.23)
segment: (0.68, 1.00) (1.32, 1.00)
segment: (0.77, 2.23) (1.23, 1.77)
segment: (1.92, -2.31) (2.08, -1.69)
segment: (1.90, -1.30) (2.10, -0.70)
segment: (1.86, -0.29) (2.14, 0.29)
segment: (1.77, 0.77) (2.23, 1.23)
segment: (1.68, 2.00) (2.32, 2.00)
:::

:::example Đọc trường hướng
Với $\dfrac{dy}{dx}=x-y$ như hình trên:

a) Các đoạn nằm ngang ở đâu?
b) Chứng tỏ $y=x-1$ là một nghiệm.
c) Đường cong nghiệm lõm lên ở đâu?

**Lời giải.** a) Ở những điểm có $x-y=0$, tức trên đường thẳng $y=x$.

b) $y'=1$ và $x-y=x-(x-1)=1$. Hai vế bằng nhau.

c) $\dfrac{d^2y}{dx^2}=1-\dfrac{dy}{dx}=1-(x-y)=1-x+y$. Đường cong lõm lên khi $y>x-1$, tức phía trên đường thẳng đó.
:::

## Tách biến

:::note Các bước người chấm kiểm tra
1. **Tách biến:** mọi $y$ một vế cùng $dy$, mọi $x$ vế kia cùng $dx$.
2. **Lấy tích phân hai vế**, có hằng số $C$.
3. **Dùng điều kiện ban đầu** để tìm $C$ ngay.
4. **Rút $y$ ra.**

Thiếu hằng số tích phân thường làm cả câu bị chặn điểm, nên hãy viết $+C$ ngay khi lấy tích phân.
:::

:::example Một phương trình tách biến kinh điển
Tìm nghiệm của $\dfrac{dy}{dx}=xy$ thoả mãn $y(0)=3$.

**Lời giải.** $\dfrac{dy}{y}=x\,dx$, nên $\ln|y|=\dfrac{x^2}{2}+C$. Với $x=0$, $y=3$: $C=\ln3$. Vì $y>0$ gần điểm ban đầu nên $y=e^{x^2/2+\ln3}=3e^{x^2/2}$.
:::

:::example Chọn đúng dấu
Giải $\dfrac{dy}{dx}=\dfrac{2x}{y}$ với $y(0)=-2$.

**Lời giải.** $y\,dy=2x\,dx$, nên $\dfrac{y^2}{2}=x^2+C$. Với điểm $(0,-2)$: $C=2$, nên $y^2=2x^2+4$. Giá trị ban đầu âm nên $y=-\sqrt{2x^2+4}$. Lấy căn dương sẽ mất điểm.
:::

## Tăng trưởng và suy giảm theo hàm mũ

Nếu một đại lượng thay đổi với tốc độ tỉ lệ với chính nó, $\dfrac{dy}{dt}=ky$, thì $y=y_0e^{kt}$. Tăng trưởng khi $k>0$, suy giảm khi $k<0$.

:::example Thời gian nhân đôi
Một quần thể vi khuẩn tăng với tốc độ tỉ lệ với số lượng của nó. Lúc $t=0$ có $500$ vi khuẩn và lúc $t=3$ giờ có $1000$. Tìm số vi khuẩn lúc $t=6$ và hằng số $k$.

**Lời giải.** Quần thể nhân đôi sau mỗi $3$ giờ, nên $P(6)=2000$. Từ $1000=500e^{3k}$: $k=\dfrac{\ln2}{3}\approx0{,}231$ mỗi giờ.
:::

## Phương pháp Euler và tăng trưởng logistic (BC)

**Phương pháp Euler** đi theo trường hướng bằng các bước thẳng có độ dài $h$: $y_{\text{mới}}=y_{\text{cũ}}+h\cdot\dfrac{dy}{dx}\Big|_{(x_{\text{cũ}},\,y_{\text{cũ}})}$.

:::example Hai bước Euler
Với $\dfrac{dy}{dx}=x+y$ và $y(0)=1$, dùng phương pháp Euler với hai bước độ dài $0{,}5$ để xấp xỉ $y(1)$.

**Lời giải.** Tại $(0,1)$ hệ số góc bằng $1$: $y(0{,}5)\approx1+0{,}5\cdot1=1{,}5$. Tại $(0{,}5;1{,}5)$ hệ số góc bằng $2$: $y(1)\approx1{,}5+0{,}5\cdot2=2{,}5$. Nghiệm chính xác $y=2e^x-x-1$ cho $y(1)\approx3{,}437$; các đường cong nghiệm ở đây lõm lên nên phương pháp Euler cho giá trị nhỏ hơn giá trị thật.
:::

:::example Tăng trưởng logistic
Một quần thể thoả mãn $\dfrac{dP}{dt}=0{,}2P\left(1-\dfrac{P}{1000}\right)$ với $P(0)=100$. Tìm $\displaystyle\lim_{t\to\infty}P(t)$ và số lượng quần thể khi nó tăng nhanh nhất.

**Lời giải.** Sức chứa là $1000$, nên giới hạn bằng $1000$. Tốc độ $0{,}2P\left(1-\dfrac{P}{1000}\right)$ là một parabol quay xuống theo biến $P$, có nghiệm $0$ và $1000$; nó lớn nhất tại $P=500$, bằng một nửa sức chứa.
:::

:::warning Những cái bẫy thường gặp
- **Không có hằng số, hoặc thêm hằng số quá muộn.** Viết $+C$ khi lấy tích phân và tìm nó trước khi rút $y$.
- **Chọn sai nhánh.** Sau khi có $y^2=\dots$, điều kiện ban đầu quyết định dấu của căn.
- **Chia cho không.** Tách biến $\dfrac{dy}{dx}=xy$ phải chia cho $y$; nghiệm hằng $y=0$ bị mất, điều này không sao khi $y(0)\ne0$.
- **Tập xác định.** Nghiệm $y=\dfrac{1}{1-x}$ đi qua $(0,1)$ chỉ tồn tại khi $x<1$.
:::

:::terms
- differential equation | phương trình vi phân
- solution curve | đường cong nghiệm
- slope field | trường hướng (trường độ dốc)
- separation of variables | tách biến
- initial condition | điều kiện ban đầu
- exponential growth / decay | tăng trưởng / suy giảm theo hàm mũ
- Euler's method | phương pháp Euler
- logistic growth, carrying capacity | tăng trưởng logistic, sức chứa
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
Nghiệm của $\dfrac{dy}{dx}=2xe^{-y}$ thoả mãn $y(0)=0$ là
A. $y=x^2$
B. $y=\ln\left(x^2+1\right)$
C. $y=e^{x^2}-1$
D. $y=\ln\left(x^2\right)+1$

::hint
**Cần nhớ:** tách biến thành $e^y\,dy=2x\,dx$.

**Các bước:**
1. $e^y=x^2+C$; tại $(0,0)$, $C=1$.

::solution
$e^y=x^2+1$, nên $y=\ln\left(x^2+1\right)$: đáp án **B**.
:::

:::exercise Tự luận
Chứng tỏ $y=Ce^{-x}+x-1$ là nghiệm của $\dfrac{dy}{dx}=x-y$ với mọi hằng số $C$.

::hint
**Cần nhớ:** tính riêng từng vế.

::solution
Vế trái: $y'=-Ce^{-x}+1$. Vế phải: $x-\left(Ce^{-x}+x-1\right)=1-Ce^{-x}$. Hai vế bằng nhau với mọi $C$. Khi $C=0$ ta được đường thẳng trong trường hướng ở trên.
:::

:::exercise Tự luận
Giải $\dfrac{dy}{dx}=y^2$ với $y(0)=1$, và cho biết nghiệm tồn tại ở đâu.

::hint
**Cần nhớ:** $\dfrac{dy}{y^2}=dx$ cho $-\dfrac1y=x+C$.

**Các bước:**
1. Tại $(0,1)$: $C=-1$.
2. Rút $y$ ra.

::solution
$-\dfrac1y=x-1$, nên $y=\dfrac{1}{1-x}$. Đường cong qua $(0,1)$ tiến ra vô cực tại $x=1$, nên nghiệm tồn tại khi $x<1$.
:::

:::exercise Trắc nghiệm
Một chất phóng xạ có chu kì bán rã $10$ năm. Sau $30$ năm còn lại bao nhiêu phần?
A. $\dfrac13$
B. $\dfrac16$
C. $\dfrac18$
D. $\dfrac{1}{30}$

::hint
**Cần nhớ:** $30$ năm là ba chu kì bán rã.

::solution
$\left(\dfrac12\right)^3=\dfrac18$: đáp án **C**.
:::

:::exercise Tự luận
Với $\dfrac{dy}{dx}=x^2-y$, tìm hệ số góc của đường cong nghiệm đi qua $(2,1)$ và phương trình tiếp tuyến tại đó. Dùng nó để xấp xỉ $y(2{,}1)$.

::hint
**Cần nhớ:** hệ số góc $=2^2-1$; tiếp tuyến $y=1+m(x-2)$.

::solution
Hệ số góc bằng $3$, tiếp tuyến là $y=1+3(x-2)$, và $y(2{,}1)\approx1+3(0{,}1)=1{,}3$.
:::

## Bài tập vận dụng

:::exercise Cốc trà nguội dần
Một cốc trà ở $90$ độ C được đặt trong phòng $20$ độ C. Nhiệt độ của nó thoả mãn $\dfrac{dT}{dt}=-k(T-20)$, với $t$ tính bằng phút, và $T(10)=55$. Tính $T(20)$.

::hint
**Cần nhớ:** $T-20=70e^{-kt}$.

**Các bước:**
1. $35=70e^{-10k}$, nên $e^{-10k}=\dfrac12$.
2. $T(20)-20=70\left(e^{-10k}\right)^2$.

::solution
Chênh lệch nhiệt độ giảm một nửa sau mỗi $10$ phút: $T(20)=20+70\cdot\dfrac14=37{,}5$ độ C.
:::

:::exercise Một câu kiểu đề AP
Xét $\dfrac{dy}{dx}=x(y-1)$ và gọi $y=f(x)$ là nghiệm có $f(0)=3$.
a) Tìm $\dfrac{d^2y}{dx^2}$ theo $x$ và $y$, rồi tính giá trị tại $(0,3)$.
b) Tìm $f(x)$ bằng cách tách biến.

::hint
**Cần nhớ:** quy tắc đạo hàm của tích cho câu a), và $\dfrac{dy}{y-1}=x\,dx$ cho câu b).

**Các bước:**
1. $\dfrac{d^2y}{dx^2}=(y-1)+x\dfrac{dy}{dx}=(y-1)+x^2(y-1)$.
2. $\ln|y-1|=\dfrac{x^2}{2}+C$; tại $(0,3)$, $C=\ln2$.

::solution
a) $\dfrac{d^2y}{dx^2}=(y-1)\left(1+x^2\right)$, bằng $2$ tại $(0,3)$: đồ thị lõm lên ở đó.

b) $y-1=2e^{x^2/2}$, nên $f(x)=1+2e^{x^2/2}$.
:::

:::exercise BC: phương pháp Euler
Với $\dfrac{dy}{dx}=2y$ và $y(0)=1$, dùng hai bước Euler độ dài $0{,}25$ để xấp xỉ $y(0{,}5)$. So sánh với giá trị chính xác.

::hint
**Cần nhớ:** hệ số góc tại mỗi điểm là $2y$.

**Các bước:**
1. $y(0{,}25)\approx1+0{,}25\cdot2$.
2. $y(0{,}5)\approx1{,}5+0{,}25\cdot3$.

::solution
$y(0{,}25)\approx1{,}5$ và $y(0{,}5)\approx2{,}25$. Nghiệm chính xác là $y=e^{2x}$, nên $y(0{,}5)=e\approx2{,}718$: phương pháp Euler cho giá trị nhỏ hơn vì nghiệm lõm lên.
:::

:::exercise BC: mô hình logistic
Một tin đồn lan trong trường có $600$ học sinh theo $\dfrac{dP}{dt}=0{,}3P\left(1-\dfrac{P}{600}\right)$, trong đó $P$ là số học sinh đã nghe tin sau $t$ ngày, và $P(0)=100$.
a) Tìm $\displaystyle\lim_{t\to\infty}P(t)$.
b) Tin đồn lan nhanh nhất khi $P$ bằng bao nhiêu?
c) Tại $t=0$, đồ thị của $P$ lõm lên hay lõm xuống?

::hint
**Cần nhớ:** sức chứa; giá trị lớn nhất của tam thức bậc hai theo $P$; dấu của $\dfrac{d^2P}{dt^2}$ đổi tại một nửa sức chứa.

::solution
a) $600$. b) $P=300$. c) Lõm lên: $P(0)=100<300$, nên $\dfrac{dP}{dt}$ vẫn đang tăng.
:::

:::quiz
::mc
Hàm số nào là nghiệm của $\dfrac{dy}{dx}=-2y$?
A. $y=e^{-2x}+1$
B. $y=-2e^{x}$
C. $y=5e^{-2x}$
D. $y=e^{2x}$
::key C
$y'=-10e^{-2x}=-2\left(5e^{-2x}\right)$.

::mc
Hệ số góc của đường cong nghiệm của $\dfrac{dy}{dx}=x^2-y$ tại điểm $(2,1)$ bằng
A. $1$
B. $3$
C. $5$
D. $4$
::key B
$2^2-1=3$.

::mc
Nếu $\dfrac{dy}{dt}=ky$, $y(0)=40$ và $y(2)=10$ thì $k$ bằng
A. $\ln2$
B. $-\dfrac12$
C. $\dfrac{\ln4}{4}$
D. $-\ln2$
::key D
$10=40e^{2k}$, nên $e^{2k}=\dfrac14$ và $k=\dfrac{\ln(1/4)}{2}=-\ln2$.

::mc
Nghiệm của $\dfrac{dy}{dx}=y\cos x$ thoả mãn $y(0)=2$ là
A. $y=2e^{\sin x}$
B. $y=2+\sin x$
C. $y=e^{\sin x}+1$
D. $y=2e^{\cos x}$
::key A
$\ln|y|=\sin x+C$; tại $(0,2)$, $C=\ln2$.

::tf
(BC) Một quần thể thoả mãn $\dfrac{dP}{dt}=0{,}5P\left(1-\dfrac{P}{200}\right)$ với $P(0)=50$.
a) $\displaystyle\lim_{t\to\infty}P(t)=200$.
b) $P$ đồng biến với mọi $t\ge0$.
c) $P$ tăng nhanh nhất khi $P=100$.
d) Đồ thị của $P$ lõm xuống khi $P=50$.
::key T T T F
a) Đúng: sức chứa. b) Đúng: $0<P<200$ cho $\dfrac{dP}{dt}>0$. c) Đúng: một nửa sức chứa. d) Sai: dưới $100$ thì $\dfrac{dP}{dt}$ vẫn đang tăng, nên đồ thị lõm lên.

::sa
Nếu $\dfrac{dy}{dx}=6x^2$ và $y(1)=5$ thì $y(2)$ bằng bao nhiêu?
::key 19
$y=2x^3+C$, $C=3$, nên $y(2)=16+3=19$.

::sa
Một quần thể có $200$ cá thể, nhân đôi sau mỗi $5$ giờ. Sau $15$ giờ quần thể có bao nhiêu cá thể?
::key 1600
Nhân đôi ba lần: $200\cdot2^3=1600$.
:::
