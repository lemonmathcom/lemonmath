---
title: Thống kê và xác suất
description: IB Math AA chủ đề 4: hồi quy và tương quan, các quy tắc xác suất, xác suất có điều kiện, phân phối rời rạc, phân phối nhị thức và phân phối chuẩn.
minutes: 45
---

:::goals
- Dùng GDC tính các số đặc trưng và đường hồi quy của $y$ theo $x$, rồi giải thích $r$, hệ số góc và giá trị dự đoán.
- Áp dụng quy tắc cộng, xác suất có điều kiện và tính độc lập, với biểu đồ Venn, sơ đồ cây và bảng.
- Làm việc với biến ngẫu nhiên rời rạc và kì vọng của nó.
- Tính xác suất của phân phối nhị thức và phân phối chuẩn, kể cả bài toán tra ngược phân phối chuẩn.
:::

Chủ đề 4 chủ yếu nằm ở Paper 2: GDC lo phần tính toán, còn điểm thuộc về việc chọn đúng mô hình, nhập đúng số liệu và trả lời trong ngữ cảnh. Hai thói quen rất đáng giá. Thứ nhất, định nghĩa biến ngẫu nhiên bằng lời và viết phân phối của nó, ví dụ "$X\sim B(10;0{,}3)$, với $X$ là số sản phẩm lỗi". Thứ hai, viết biểu thức xác suất cần tính, như $P(X\ge2)$, trước khi ghi con số.

## Dữ liệu và hồi quy

GDC cho bạn số trung bình, độ lệch chuẩn, các tứ phân vị và đường hồi quy. **Hệ số tương quan Pearson** $r$ đo độ mạnh của quan hệ tuyến tính: gần $1$ hoặc $-1$ là mạnh, gần $0$ là yếu. Dùng đường hồi quy của $y$ theo $x$ để dự đoán $y$ từ $x$, và chỉ trong phạm vi dữ liệu: **nội suy (interpolation)** thì hợp lí, **ngoại suy (extrapolation)** thì không.

:::example Một đường hồi quy
| $x$ | $2$ | $4$ | $6$ | $8$ | $10$ |
|---|---|---|---|---|---|
| $y$ | $5$ | $8$ | $11$ | $13$ | $17$ |

(a) Viết phương trình đường hồi quy của $y$ theo $x$ và giá trị của $r$. [3 marks]
(b) Dùng đường hồi quy để ước lượng $y$ khi $x=7$. [2 marks]
(c) Giải thích vì sao không nên dùng đường này để ước lượng $y$ khi $x=20$. [1 mark]

**Lời giải.** (a) $y=1{,}45x+2{,}1$ và $r\approx0{,}996$: tương quan tuyến tính dương rất mạnh.

(b) $1{,}45(7)+2{,}1\approx12{,}3$.

(c) $x=20$ nằm xa ngoài phạm vi dữ liệu ($2\le x\le10$): đó là ngoại suy, và xu hướng có thể không còn đúng.
:::

## Các quy tắc xác suất

$$P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad P(A\mid B)=\frac{P(A\cap B)}{P(B)}.$$
$A$ và $B$ **xung khắc (mutually exclusive)** nếu $P(A\cap B)=0$, và **độc lập (independent)** nếu $P(A\cap B)=P(A)P(B)$, tương đương $P(A\mid B)=P(A)$.

:::example Kiểm tra tính độc lập
$P(A)=0{,}5$, $P(B)=0{,}4$ và $P(A\cup B)=0{,}7$.
(a) Tính $P(A\cap B)$. [2 marks]
(b) Tính $P(A\mid B)$. [2 marks]
(c) $A$ và $B$ có độc lập không? Giải thích. [2 marks]

**Lời giải.** (a) $0{,}7=0{,}5+0{,}4-P(A\cap B)$, nên $P(A\cap B)=0{,}2$.

(b) $\dfrac{0{,}2}{0{,}4}=0{,}5$.

(c) Có: $P(A)P(B)=0{,}5\times0{,}4=0{,}2=P(A\cap B)$. (Tương đương, $P(A\mid B)=P(A)$.)
:::

:::example Lấy không hoàn lại
Một túi có $5$ thẻ đỏ và $3$ thẻ xanh. Lấy lần lượt hai thẻ không hoàn lại. Tính xác suất hai thẻ khác màu. [4 marks]

**Lời giải.** Đỏ rồi xanh, hoặc xanh rồi đỏ:
$$\frac58\cdot\frac37+\frac38\cdot\frac57=\frac{30}{56}=\frac{15}{28}.$$
Sơ đồ cây giúp tính đúng xác suất ở lần lấy thứ hai, với mẫu số $7$.
:::

## Biến ngẫu nhiên rời rạc

Bảng phân phối xác suất liệt kê mỗi giá trị $x$ cùng xác suất của nó; tổng các xác suất bằng $1$. **Kì vọng (expected value)** là $E(X)=\sum xP(X=x)$. Một trò chơi là **công bằng (fair)** khi số tiền lãi kì vọng bằng $0$.

:::example Tìm k và kì vọng
$P(X=x)=kx$ với $x=1,2,3,4$.
(a) Tìm $k$. [2 marks]
(b) Tính $E(X)$. [2 marks]

**Lời giải.** (a) $k(1+2+3+4)=1$, nên $k=\dfrac{1}{10}$.

(b) $E(X)=\dfrac{1\cdot1+2\cdot2+3\cdot3+4\cdot4}{10}=\dfrac{30}{10}=3$.
:::

## Phân phối nhị thức và phân phối chuẩn

**Nhị thức:** $X\sim B(n,p)$ đếm số lần thành công trong $n$ phép thử độc lập có cùng xác suất $p$. $E(X)=np$ và $\mathrm{Var}(X)=np(1-p)$. Trên GDC, xác suất đúng $k$ lần thành công dùng binomial pdf, còn xác suất nhiều nhất $k$ lần dùng binomial cdf. Với "ít nhất", hãy dùng biến cố đối.

**Chuẩn:** $X\sim N\left(\mu,\sigma^2\right)$ là đường cong hình chuông đối xứng. GDC cho trực tiếp $P(a<X<b)$; chức năng **tra ngược (inverse normal)** tìm giá trị có xác suất cho trước ở phía dưới nó.

:::example Một mô hình nhị thức
Mỗi hạt giống trong một gói nảy mầm với xác suất $0{,}3$, độc lập với nhau. Gieo mười hạt. Tính xác suất:
(a) đúng $3$ hạt nảy mầm; [2 marks]
(b) ít nhất $2$ hạt nảy mầm. [3 marks]

**Lời giải.** Gọi $X$ là số hạt nảy mầm: $X\sim B(10;0{,}3)$.

(a) $P(X=3)\approx0{,}267$.

(b) $P(X\ge2)=1-P(X\le1)\approx1-0{,}149=0{,}851$.
:::

:::example Mô hình chuẩn và tra ngược
Chiều cao học sinh trong một trường có phân phối chuẩn với trung bình $170$ cm và độ lệch chuẩn $8$ cm.
(a) Tính xác suất một học sinh cao hơn $180$ cm. [2 marks]
(b) $90\%$ học sinh thấp hơn $h$ cm. Tìm $h$. [2 marks]

**Lời giải.** Gọi $H\sim N\left(170;8^2\right)$.

(a) $P(H>180)\approx0{,}106$.

(b) $P(H<h)=0{,}9$, nên tra ngược được $h\approx180$ cm (chính xác hơn là $180{,}25$).
:::

:::warning Những cái bẫy thường gặp
- **Phương sai hay độ lệch chuẩn.** $N\left(170;8^2\right)$ có $\sigma=8$; nhập $8$ vào GDC, không phải $64$.
- **"Ít nhất" và "nhiều hơn".** Với nhị thức, $P(X>2)=1-P(X\le2)$, nhưng $P(X\ge2)=1-P(X\le1)$.
- **Xung khắc không phải độc lập.** Hai biến cố có xác suất dương mà xung khắc thì không bao giờ độc lập.
- **Đảo ngược xác suất có điều kiện.** $P(A\mid B)$ chia cho $P(B)$, tức điều kiện.
- **Ngoại suy** bằng đường hồi quy, hoặc dùng đường $y$ theo $x$ để dự đoán $x$.
- **Không có ngữ cảnh.** Viết phân phối và biểu thức xác suất trước khi ghi con số.
:::

:::terms
- regression line, correlation coefficient | đường hồi quy, hệ số tương quan
- interpolation, extrapolation | nội suy, ngoại suy
- mutually exclusive, independent | xung khắc, độc lập
- conditional probability | xác suất có điều kiện
- tree diagram, Venn diagram | sơ đồ cây, biểu đồ Venn
- random variable, expected value | biến ngẫu nhiên, kì vọng
- binomial distribution | phân phối nhị thức
- normal distribution, inverse normal | phân phối chuẩn, tra ngược phân phối chuẩn
:::

## Bài tập tương tự

:::exercise Một giá trị còn thiếu
Năm số có trung bình $12$. Thêm số thứ sáu thì trung bình thành $13$. Tìm số thứ sáu. [3 marks]

::hint
**Cần nhớ:** tổng $=$ trung bình $\times$ số lượng.

::solution
Các tổng là $5(12)=60$ và $6(13)=78$, nên số thứ sáu là $18$.
:::

:::exercise Biến cố độc lập
$A$ và $B$ độc lập, với $P(A)=0{,}3$ và $P(B)=0{,}6$. Tính $P(A\cup B)$. [3 marks]

::hint
**Cần nhớ:** $P(A\cap B)=P(A)P(B)$.

::solution
$0{,}3+0{,}6-0{,}18=0{,}72$.
:::

:::exercise Kì vọng từ bảng
| $x$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $P(X=x)$ | $0{,}2$ | $0{,}5$ | $0{,}3$ |

Tính $E(X)$. [2 marks]

::hint
**Cần nhớ:** $\sum xP(X=x)$.

::solution
$0(0{,}2)+1(0{,}5)+2(0{,}3)=1{,}1$.
:::

:::exercise Xác suất nhị thức
Tung một đồng xu cân đối $8$ lần. Tính xác suất được đúng $4$ lần mặt ngửa. [2 marks]

::hint
**Cần nhớ:** $X\sim B(8;0{,}5)$.

::solution
$\dbinom84(0{,}5)^8=\dfrac{70}{256}\approx0{,}273$.
:::

:::exercise Xác suất phân phối chuẩn
$X\sim N\left(50;4^2\right)$. Tính $P(46<X<58)$. [2 marks]

::hint
**Cần nhớ:** normal cdf với cận dưới $46$, cận trên $58$, $\mu=50$, $\sigma=4$.

::solution
$P(46<X<58)\approx0{,}819$.
:::

## Bài tập vận dụng

:::exercise Kiểm tra chất lượng
$2\%$ bóng đèn của một nhà máy bị lỗi. Kiểm tra ngẫu nhiên $20$ bóng. Tính xác suất có nhiều nhất một bóng lỗi. [3 marks]

::hint
**Cần nhớ:** $X\sim B(20;0{,}02)$ và $P(X\le1)$.

::solution
$P(X\le1)\approx0{,}940$.
:::

:::exercise Ngưỡng điểm
Điểm một bài kiểm tra có phân phối chuẩn với trung bình $65$ và độ lệch chuẩn $12$. $10\%$ học sinh cao điểm nhất được xếp loại cao nhất. Tìm điểm thấp nhất được xếp loại này. [3 marks]

::hint
**Cần nhớ:** $P(S>k)=0{,}1$ nghĩa là $P(S<k)=0{,}9$.

::solution
Tra ngược: $k\approx80{,}4$.
:::

:::exercise Bảng hai chiều
Khảo sát $200$ học sinh, ghi lại việc có học hơn $5$ giờ hay không và có đạt hay không.

| | Đạt | Không đạt |
|---|---|---|
| Hơn $5$ giờ | $90$ | $30$ |
| Từ $5$ giờ trở xuống | $50$ | $30$ |

(a) Tính xác suất một học sinh đạt, biết rằng học sinh đó học hơn $5$ giờ. [2 marks]
(b) Tính xác suất một học sinh học hơn $5$ giờ, biết rằng học sinh đó đạt. [2 marks]

::hint
**Cần nhớ:** điều kiện quyết định mẫu số: tổng hàng ở câu (a), tổng cột ở câu (b).

::solution
(a) $\dfrac{90}{120}=0{,}75$.

(b) $\dfrac{90}{140}\approx0{,}643$. Hai đáp số khác nhau: nói chung $P(A\mid B)\ne P(B\mid A)$.
:::

:::exercise Thử thách: trò chơi công bằng
Người chơi trả $k$ đô la để gieo một con xúc xắc cân đối sáu mặt và nhận số đô la bằng số chấm xuất hiện. Tìm $k$ để trò chơi công bằng. [3 marks]

::hint
**Cần nhớ:** tiền thưởng kì vọng bằng tiền phải trả.

::solution
$E(\text{tiền thưởng})=\dfrac{1+2+3+4+5+6}{6}=3{,}5$, nên $k=3{,}5$.
:::

:::quiz
::mc
$A$ và $B$ xung khắc, với $P(A)=0{,}4$ và $P(B)=0{,}5$. $P(A\cup B)$ bằng
A. $0{,}2$
B. $0{,}7$
C. $0{,}9$
D. $1$
::key C
Với biến cố xung khắc, $P(A\cup B)=P(A)+P(B)$.

::mc
$X\sim B(5;0{,}2)$. $E(X)$ bằng
A. $1$
B. $0{,}2$
C. $0{,}8$
D. $5$
::key A
$np=5(0{,}2)=1$.

::mc
$X\sim N\left(\mu,\sigma^2\right)$. $P(X<\mu)$ bằng
A. $0{,}68$
B. $0{,}95$
C. $1$
D. $0{,}5$
::key D
Phân phối chuẩn đối xứng qua trung bình.

::mc
Một biến ngẫu nhiên nhận các giá trị $1$, $2$, $3$ với xác suất $0{,}2$, $k$, $0{,}5$. $k$ bằng
A. $0{,}5$
B. $0{,}3$
C. $0{,}7$
D. $0{,}2$
::key B
$0{,}2+k+0{,}5=1$.

::tf
$X\sim N\left(100;15^2\right)$.
a) $P(X<100)=0{,}5$.
b) $P(X>115)=P(X<85)$.
c) $P(X>130)>0{,}05$.
d) Phương sai của $X$ bằng $15$.
::key T T F F
a) Đúng: tính đối xứng. b) Đúng: tính đối xứng. c) Sai: $P(X>130)\approx0{,}0228$. d) Sai: phương sai bằng $225$.

::sa
Gieo một con xúc xắc cân đối sáu mặt. Tính số chấm kì vọng.
::key 3,5
$\dfrac{21}{6}=3{,}5$.

::sa
Tung một đồng xu cân đối hai lần. Tính xác suất được hai lần mặt ngửa.
::key 0,25
$0{,}5^2=0{,}25$.
:::
