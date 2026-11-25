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

Có những đại lượng mà ta không biết công thức của chúng, chỉ biết chúng đang thay đổi nhanh hay chậm. Từ đó, ta có tìm lại được chính đại lượng ấy không? Phương trình vi phân trả lời đúng câu hỏi này. Unit 7 gần như năm nào cũng có trong phần tự luận, thường là trọn một câu: vẽ trường hướng tại vài điểm, tìm xấp xỉ bằng tiếp tuyến, rồi giải phương trình bằng cách tách biến. Phần tách biến được nhiều điểm và chấm rất chặt từng bước. Tin vui là các bước lúc nào cũng giống nhau, nên học kĩ một lần là dùng được nhiều lần.

## Nghiệm và trường hướng

Ta bắt đầu với vài cái tên. **Phương trình vi phân** là một phương trình nói về một hàm số chưa biết, thông qua các đạo hàm của nó. Thử thay một hàm số vào phương trình: nếu hai vế bằng nhau thì hàm số đó là một **nghiệm**. Vậy làm sao nhìn được các nghiệm mà chưa cần giải? **Trường hướng** làm được việc đó. Tại mỗi điểm $(x,y)$, phương trình cho biết hệ số góc $\dfrac{dy}{dx}$, và ta vẽ một đoạn thẳng ngắn có đúng hệ số góc đó. Một đường cong nghiệm cứ thế đi theo hướng của những đoạn nó đi qua.

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
1. **Tách biến:** gom mọi $y$ về một vế cùng với $dy$, mọi $x$ về vế kia cùng với $dx$.
2. **Lấy tích phân hai vế**, và nhớ viết hằng số $C$.
3. **Dùng điều kiện ban đầu** để tìm $C$ ngay lúc này, đừng để đến cuối.
4. **Rút $y$ ra.** Làm bước này khi đã biết $C$.
Người chấm đọc bài của bạn theo đúng thứ tự này, nên bạn cũng cứ viết theo thứ tự ấy.

Chỗ này nhiều bạn hay quên: hằng số tích phân. Thiếu nó, cả câu thường bị chặn điểm, dù các bước sau có đúng đến đâu. Vì vậy hãy viết $+C$ ngay khi lấy tích phân, đừng định bụng thêm sau.
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

Có những đại lượng càng nhiều thì càng tăng nhanh, như vi khuẩn sinh sôi. Có những đại lượng càng nhiều thì càng giảm nhanh, như chất phóng xạ phân rã. Khi tốc độ thay đổi tỉ lệ với chính đại lượng đó, ta viết $\dfrac{dy}{dt}=ky$, và nghiệm là $y=y_0e^{kt}$. Tăng trưởng khi $k>0$, suy giảm khi $k<0$, nên dấu của hằng số tỉ lệ cho biết chiều thay đổi.

:::example Thời gian nhân đôi
Một quần thể vi khuẩn tăng với tốc độ tỉ lệ với số lượng của nó. Lúc $t=0$ có $500$ vi khuẩn và lúc $t=3$ giờ có $1000$. Tìm số vi khuẩn lúc $t=6$ và hằng số $k$.

**Lời giải.** Quần thể nhân đôi sau mỗi $3$ giờ, nên $P(6)=2000$. Từ $1000=500e^{3k}$: $k=\dfrac{\ln2}{3}\approx0{,}231$ mỗi giờ.
:::

## Phương pháp Euler và tăng trưởng logistic (BC)

Không phải phương trình nào cũng giải được bằng một công thức gọn. Khi đó ta vẫn có thể đi theo trường hướng từng đoạn nhỏ, như người đi bộ nhìn biển chỉ đường ở chỗ mình đứng rồi mới bước tiếp. **Phương pháp Euler** làm đúng như vậy: đi các bước thẳng có độ dài $h$, mỗi bước theo hệ số góc tại điểm đang đứng. Công thức là $y_{\text{mới}}=y_{\text{cũ}}+h\cdot\dfrac{dy}{dx}\Big|_{(x_{\text{cũ}},\,y_{\text{cũ}})}$.

:::example Hai bước Euler
Với $\dfrac{dy}{dx}=x+y$ và $y(0)=1$, dùng phương pháp Euler với hai bước độ dài $0{,}5$ để xấp xỉ $y(1)$.

**Lời giải.** Tại $(0,1)$ hệ số góc bằng $1$: $y(0{,}5)\approx1+0{,}5\cdot1=1{,}5$. Tại $(0{,}5;1{,}5)$ hệ số góc bằng $2$: $y(1)\approx1{,}5+0{,}5\cdot2=2{,}5$. Nghiệm chính xác $y=2e^x-x-1$ cho $y(1)\approx3{,}437$; các đường cong nghiệm ở đây lõm lên nên phương pháp Euler cho giá trị nhỏ hơn giá trị thật.
:::

:::example Tăng trưởng logistic
Một quần thể thoả mãn $\dfrac{dP}{dt}=0{,}2P\left(1-\dfrac{P}{1000}\right)$ với $P(0)=100$. Tìm $\displaystyle\lim_{t\to\infty}P(t)$ và số lượng quần thể khi nó tăng nhanh nhất.

**Lời giải.** Sức chứa là $1000$, nên giới hạn bằng $1000$. Tốc độ $0{,}2P\left(1-\dfrac{P}{1000}\right)$ là một parabol quay xuống theo biến $P$, có nghiệm $0$ và $1000$; nó lớn nhất tại $P=500$, bằng một nửa sức chứa.
:::

:::warning Những cái bẫy thường gặp
- **Không có hằng số, hoặc thêm hằng số quá muộn.** Hãy viết $+C$ ngay khi lấy tích phân, và tìm nó trước khi rút $y$.
- **Chọn sai nhánh.** Khi đã có $y^2=\dots$, đừng vội lấy căn dương: điều kiện ban đầu mới quyết định dấu của căn.
- **Chia cho không.** Để tách biến $\dfrac{dy}{dx}=xy$, ta phải chia cho $y$, nên nghiệm hằng $y=0$ bị bỏ sót. Điều này không sao khi $y(0)\ne0$.
- **Tập xác định.** Nghiệm $y=\dfrac{1}{1-x}$ đi qua $(0,1)$ chỉ tồn tại khi $x<1$, nên nhớ rằng nghiệm chỉ sống trên một khoảng.
Mục tiêu từ đầu đến cuối vẫn là một: từ tốc độ thay đổi, tìm lại chính đại lượng. Giữ đúng các bước ở trên và làm thêm bài tập bên dưới cho quen tay.
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
Đây là phương trình tách biến. Từ $\dfrac{dy}{dx}=2xe^{-y}$, ta nhân hai vế với $e^y\,dx$:
$$e^y\,dy=2x\,dx.$$

Lấy tích phân hai vế:
$$e^y=x^2+C.$$

Điều kiện $y(0)=0$ cho $e^0=0^2+C$, tức là $C=1$. Do đó
$$e^y=x^2+1\ \Rightarrow\ y=\ln\left(x^2+1\right)$$
(hợp lệ vì $x^2+1>0$ với mọi $x$).

Vậy chọn **B**.

*Nhận xét.* Phương án A sai vì $y=x^2$ có $y'=2x\ne2xe^{-x^2}$. Phương án C thoả mãn $y(0)=0$ nhưng không thoả mãn phương trình vi phân (vì $y'=2xe^{x^2}$ còn $2xe^{-y}=2xe^{1-e^{x^2}}$). Phương án D không xác định tại $x=0$ vì $\ln\left(0^2\right)$ không tồn tại.

**Đáp số.** B.
:::

:::exercise Tự luận
Chứng tỏ $y=Ce^{-x}+x-1$ là nghiệm của $\dfrac{dy}{dx}=x-y$ với mọi hằng số $C$.

::hint
**Cần nhớ:** tính riêng từng vế.

::solution
Cho $y=Ce^{-x}+x-1$ với $C$ là hằng số bất kì. Ta chứng tỏ hai vế của phương trình $\dfrac{dy}{dx}=x-y$ bằng nhau.

Vế trái: lấy đạo hàm theo $x$,
$$y'=-Ce^{-x}+1.$$

Vế phải: thay $y$ vào,
$$x-y=x-\left(Ce^{-x}+x-1\right)=x-Ce^{-x}-x+1=1-Ce^{-x}.$$

Hai vế đều bằng $1-Ce^{-x}$ với mọi $x$ và mọi $C$.

Vậy $y=Ce^{-x}+x-1$ là nghiệm của $\dfrac{dy}{dx}=x-y$ với mọi hằng số $C$. (Chẳng hạn khi $C=0$ ta được nghiệm là đường thẳng $y=x-1$.)

**Đáp số.** Hai vế đều bằng $1-Ce^{-x}$, nên $y=Ce^{-x}+x-1$ là nghiệm với mọi hằng số $C$.
:::

:::exercise Tự luận
Giải $\dfrac{dy}{dx}=y^2$ với $y(0)=1$, và cho biết nghiệm tồn tại ở đâu.

::hint
**Cần nhớ:** $\dfrac{dy}{y^2}=dx$ cho $-\dfrac1y=x+C$.

**Các bước:**
1. Tại $(0,1)$: $C=-1$.
2. Rút $y$ ra.

::solution
Đây là phương trình tách biến. Vì $y(0)=1\ne0$ nên ta chia hai vế cho $y^2$ (với $y\ne0$):
$$\frac{dy}{y^2}=dx.$$

Lấy tích phân hai vế:
$$-\frac1y=x+C.$$

Điều kiện $y(0)=1$ cho $-1=0+C$, tức là $C=-1$. Do đó
$$-\frac1y=x-1\ \Rightarrow\ y=\frac{1}{1-x}.$$

Nghiệm này không xác định tại $x=1$, và khi $x\to1^-$ thì $y\to+\infty$. Nghiệm cần tìm phải xác định và liên tục trên một khoảng chứa $x=0$ (điểm cho điều kiện ban đầu), nên khoảng đó là $x<1$.

Vậy nghiệm là $y=\dfrac{1}{1-x}$, và nó tồn tại khi $x<1$.

**Đáp số.** $y=\dfrac{1}{1-x}$, tồn tại khi $x<1$.
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
Chu kì bán rã là thời gian để lượng chất còn lại giảm đi một nửa. Cứ sau mỗi $10$ năm, lượng chất phóng xạ còn lại bằng $\dfrac12$ lượng trước đó.

Khoảng thời gian $30$ năm gồm $\dfrac{30}{10}=3$ chu kì bán rã, nên phần còn lại là
$$\left(\frac12\right)^3=\frac18.$$

Vậy sau $30$ năm còn lại $\dfrac18$ lượng chất ban đầu, nên chọn **C**.

**Đáp số.** C.
:::

:::exercise Tự luận
Với $\dfrac{dy}{dx}=x^2-y$, tìm hệ số góc của đường cong nghiệm đi qua $(2,1)$ và phương trình tiếp tuyến tại đó. Dùng nó để xấp xỉ $y(2{,}1)$.

::hint
**Cần nhớ:** hệ số góc $=2^2-1$; tiếp tuyến $y=1+m(x-2)$.

::solution
Hệ số góc của đường cong nghiệm tại một điểm $(x; y)$ bằng $\dfrac{dy}{dx}$ tại điểm đó.

Tại điểm $(2; 1)$:
$$\frac{dy}{dx}=x^2-y=2^2-1=3.$$

Tiếp tuyến đi qua $(2; 1)$ với hệ số góc $3$ nên có phương trình
$$y-1=3(x-2)\ \Rightarrow\ y=1+3(x-2).$$

Dùng tiếp tuyến để xấp xỉ $y(2{,}1)$, với $2{,}1-2=0{,}1$:
$$y(2{,}1)\approx1+3(0{,}1)=1{,}3.$$

Vậy hệ số góc bằng $3$, tiếp tuyến là $y=1+3(x-2)$ và $y(2{,}1)\approx1{,}3$.

**Đáp số.** Hệ số góc $3$; tiếp tuyến $y=1+3(x-2)$; $y(2{,}1)\approx1{,}3$.
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
Đặt $D=T-20$ là chênh lệch nhiệt độ giữa cốc trà và phòng. Từ $\dfrac{dT}{dt}=-k(T-20)$ ta có $\dfrac{dD}{dt}=-kD$, nên
$$D(t)=D(0)e^{-kt}.$$

Tại $t=0$: $D(0)=90-20=70$. Tại $t=10$: $D(10)=T(10)-20=55-20=35$. Do đó
$$35=70e^{-10k}\ \Rightarrow\ e^{-10k}=\frac12.$$

Như vậy chênh lệch nhiệt độ giảm một nửa sau mỗi $10$ phút. Tại $t=20$:
$$D(20)=70e^{-20k}=70\left(e^{-10k}\right)^2=70\cdot\frac14=17{,}5.$$

Suy ra $T(20)=20+D(20)=20+17{,}5=37{,}5$.

Vậy sau $20$ phút nhiệt độ của cốc trà là $37{,}5$ độ C.

**Đáp số.** $37{,}5$ độ C.
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
a) Từ $\dfrac{dy}{dx}=x(y-1)$, lấy đạo hàm theo $x$ (quy tắc đạo hàm của tích, với $y$ là hàm của $x$):
$$\frac{d^2y}{dx^2}=(y-1)+x\,\frac{dy}{dx}.$$

Thay $\dfrac{dy}{dx}=x(y-1)$, ta được
$$\frac{d^2y}{dx^2}=(y-1)+x\cdot x(y-1)=(y-1)\left(1+x^2\right).$$

Tại $(0; 3)$:
$$\frac{d^2y}{dx^2}=(3-1)\left(1+0^2\right)=2>0,$$
nên đồ thị của $f$ lõm lên tại điểm đó.

b) Phương trình tách biến được. Vì $f(0)=3\ne1$ nên $y\ne1$ gần $x=0$, và ta viết
$$\frac{dy}{y-1}=x\,dx.$$

Lấy tích phân hai vế:
$$\ln|y-1|=\frac{x^2}{2}+C_1\ \Rightarrow\ y-1=Ae^{x^2/2}\quad(A\ne0).$$

Điều kiện $f(0)=3$ cho $3-1=Ae^0$, tức là $A=2$. Do đó
$$y-1=2e^{x^2/2}\ \Rightarrow\ f(x)=1+2e^{x^2/2}.$$

Vậy $\dfrac{d^2y}{dx^2}=(y-1)\left(1+x^2\right)$, bằng $2$ tại $(0; 3)$ và $f(x)=1+2e^{x^2/2}$.

**Đáp số.** a) $\dfrac{d^2y}{dx^2}=(y-1)\left(1+x^2\right)$, bằng $2$ tại $(0; 3)$ (lõm lên); b) $f(x)=1+2e^{x^2/2}$.
:::

:::exercise BC: phương pháp Euler
Với $\dfrac{dy}{dx}=2y$ và $y(0)=1$, dùng hai bước Euler độ dài $0{,}25$ để xấp xỉ $y(0{,}5)$. So sánh với giá trị chính xác.

::hint
**Cần nhớ:** hệ số góc tại mỗi điểm là $2y$.

**Các bước:**
1. $y(0{,}25)\approx1+0{,}25\cdot2$.
2. $y(0{,}5)\approx1{,}5+0{,}25\cdot3$.

::solution
Phương pháp Euler với độ dài bước $h=0{,}25$ cho $y_{n+1}=y_n+h\,f(x_n,y_n)$, ở đây $f(x,y)=2y$. Điều kiện ban đầu: $x_0=0$, $y_0=1$.

Bước 1: $y_1=y_0+0{,}25\cdot2y_0=1+0{,}25\cdot2\cdot1=1{,}5$, tức là $y(0{,}25)\approx1{,}5$.

Bước 2: $y_2=y_1+0{,}25\cdot2y_1=1{,}5+0{,}25\cdot2\cdot1{,}5=1{,}5+0{,}75=2{,}25$, tức là $y(0{,}5)\approx2{,}25$.

Giá trị chính xác: phương trình $\dfrac{dy}{dx}=2y$ có nghiệm tổng quát $y=Ce^{2x}$; điều kiện $y(0)=1$ cho $C=1$, nên $y=e^{2x}$ và
$$y(0{,}5)=e^{1}=e\approx2{,}718.$$

So sánh: $2{,}25<2{,}718$, nên phương pháp Euler cho giá trị nhỏ hơn giá trị chính xác. Lí do là nghiệm lõm lên ($y''=4y>0$), nên đồ thị nằm phía trên các tiếp tuyến mà phương pháp Euler dùng ở mỗi bước.

Vậy $y(0{,}5)\approx2{,}25$ theo phương pháp Euler, còn giá trị chính xác là $e\approx2{,}718$.

**Đáp số.** $y(0{,}5)\approx2{,}25$ (Euler); giá trị chính xác $e\approx2{,}718$; Euler cho giá trị nhỏ hơn.
:::

:::exercise BC: mô hình logistic
Một tin đồn lan trong trường có $600$ học sinh theo $\dfrac{dP}{dt}=0{,}3P\left(1-\dfrac{P}{600}\right)$, trong đó $P$ là số học sinh đã nghe tin sau $t$ ngày, và $P(0)=100$.
a) Tìm $\displaystyle\lim_{t\to\infty}P(t)$.
b) Tin đồn lan nhanh nhất khi $P$ bằng bao nhiêu?
c) Tại $t=0$, đồ thị của $P$ lõm lên hay lõm xuống?

::hint
**Cần nhớ:** sức chứa; giá trị lớn nhất của tam thức bậc hai theo $P$; dấu của $\dfrac{d^2P}{dt^2}$ đổi tại một nửa sức chứa.

::solution
Ta có $\dfrac{dP}{dt}=0{,}3P\left(1-\dfrac{P}{600}\right)$ (mô hình logistic), $P(0)=100$.

a) Ta có $\dfrac{dP}{dt}=0$ khi $P=0$ hoặc $P=600$; đây là hai nghiệm hằng. Vì $0<P(0)=100<600$ nên $P$ luôn nằm giữa $0$ và $600$, khi đó $\dfrac{dP}{dt}>0$, tức là $P$ tăng và bị chặn trên bởi $600$. Do đó $P(t)$ có giới hạn, và giới hạn đó phải là một nghiệm hằng lớn hơn $100$, tức là $600$. Vậy $\displaystyle\lim_{t\to\infty}P(t)=600$.

b) Tốc độ lan là $\dfrac{dP}{dt}=0{,}3P-\dfrac{P^2}{2000}$, là hàm bậc hai của $P$ có hệ số của $P^2$ âm, nên đạt giá trị lớn nhất tại đỉnh. Đạo hàm theo $P$ bằng $0{,}3-\dfrac{P}{1000}=0$ khi $P=300$. Vậy tin đồn lan nhanh nhất khi $P=300$ (bằng một nửa $600$).

c) Lấy đạo hàm theo $t$ của $\dfrac{dP}{dt}=0{,}3P-\dfrac{P^2}{2000}$ (quy tắc đạo hàm hàm hợp):
$$\frac{d^2P}{dt^2}=\left(0{,}3-\frac{P}{1000}\right)\frac{dP}{dt}.$$
Tại $t=0$: $P=100$ và $\dfrac{dP}{dt}=0{,}3\cdot100\left(1-\dfrac{100}{600}\right)=25>0$. Do đó
$$\frac{d^2P}{dt^2}=(0{,}3-0{,}1)\cdot25=5>0.$$
Vậy đồ thị của $P$ lõm lên tại $t=0$. (Lí do: $P(0)=100<300$ nên $\dfrac{dP}{dt}$ vẫn đang tăng.)

Vậy a) giới hạn bằng $600$; b) tin đồn lan nhanh nhất khi $P=300$; c) đồ thị của $P$ lõm lên tại $t=0$.

**Đáp số.** a) $600$; b) $P=300$; c) lõm lên.
:::

:::quiz
::mc TH
Hàm số nào là nghiệm của $\dfrac{dy}{dx}=-2y$?
A. $y=e^{-2x}+1$
B. $y=-2e^{x}$
C. $y=5e^{-2x}$
D. $y=e^{2x}$
::key C
$y'=-10e^{-2x}=-2\left(5e^{-2x}\right)$.

::mc NB
Hệ số góc của đường cong nghiệm của $\dfrac{dy}{dx}=x^2-y$ tại điểm $(2,1)$ bằng
A. $1$
B. $3$
C. $5$
D. $4$
::key B
$2^2-1=3$.

::mc VD
Nếu $\dfrac{dy}{dt}=ky$, $y(0)=40$ và $y(2)=10$ thì $k$ bằng
A. $\ln2$
B. $-\dfrac12$
C. $\dfrac{\ln4}{4}$
D. $-\ln2$
::key D
$10=40e^{2k}$, nên $e^{2k}=\dfrac14$ và $k=\dfrac{\ln(1/4)}{2}=-\ln2$.

::mc VD
Nghiệm của $\dfrac{dy}{dx}=y\cos x$ thoả mãn $y(0)=2$ là
A. $y=2e^{\sin x}$
B. $y=2+\sin x$
C. $y=e^{\sin x}+1$
D. $y=2e^{\cos x}$
::key A
$\ln|y|=\sin x+C$; tại $(0,2)$, $C=\ln2$.

::tf TH TH TH VD
(BC) Một quần thể thoả mãn $\dfrac{dP}{dt}=0{,}5P\left(1-\dfrac{P}{200}\right)$ với $P(0)=50$.
a) $\displaystyle\lim_{t\to\infty}P(t)=200$.
b) $P$ đồng biến với mọi $t\ge0$.
c) $P$ tăng nhanh nhất khi $P=100$.
d) Đồ thị của $P$ lõm xuống khi $P=50$.
::key T T T F
a) Đúng: sức chứa. b) Đúng: $0<P<200$ cho $\dfrac{dP}{dt}>0$. c) Đúng: một nửa sức chứa. d) Sai: dưới $100$ thì $\dfrac{dP}{dt}$ vẫn đang tăng, nên đồ thị lõm lên.

::sa VD
Nếu $\dfrac{dy}{dx}=6x^2$ và $y(1)=5$ thì $y(2)$ bằng bao nhiêu?
::key 19
$y=2x^3+C$, $C=3$, nên $y(2)=16+3=19$.

::sa TH
Một quần thể có $200$ cá thể, nhân đôi sau mỗi $5$ giờ. Sau $15$ giờ quần thể có bao nhiêu cá thể?
::key 1600
Nhân đôi ba lần: $200\cdot2^3=1600$.
:::
