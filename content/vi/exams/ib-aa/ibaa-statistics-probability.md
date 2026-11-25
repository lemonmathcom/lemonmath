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

Khi máy tính làm hết phần tính, điều còn lại là bạn đã bảo nó làm đúng việc chưa. Chủ đề 4 chủ yếu nằm ở Paper 2: GDC lo phần tính toán, còn điểm thuộc về việc chọn đúng mô hình, nhập đúng số liệu và trả lời trong ngữ cảnh. Vì thế có hai thói quen rất đáng giá. Thứ nhất, định nghĩa biến ngẫu nhiên bằng lời và viết phân phối của nó, ví dụ "$X\sim B(10;0{,}3)$, với $X$ là số sản phẩm lỗi". Thứ hai, viết biểu thức xác suất cần tính, như $P(X\ge2)$, trước khi ghi con số. Hai việc này tốn rất ít thời gian, nhưng giúp bạn khỏi nhầm ở các bước sau.

## Dữ liệu và hồi quy

GDC cho bạn số trung bình, độ lệch chuẩn, các tứ phân vị và đường hồi quy. **Hệ số tương quan Pearson** $r$ đo độ mạnh của quan hệ tuyến tính: gần $1$ hoặc $-1$ là mạnh, gần $0$ là yếu. Đường hồi quy của $y$ theo $x$ dùng để dự đoán $y$ từ $x$, nhưng chỉ nên tin trong phạm vi dữ liệu. Vì sao? Vì ngoài phạm vi ấy ta không biết xu hướng còn giữ nguyên hay không. Dự đoán trong phạm vi dữ liệu gọi là **nội suy (interpolation)**, và hợp lí. Dự đoán ngoài phạm vi gọi là **ngoại suy (extrapolation)**, và không nên.

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
Hai quan hệ này rất hay bị lẫn. $A$ và $B$ **xung khắc (mutually exclusive)** nếu $P(A\cap B)=0$: chúng không thể cùng xảy ra. $A$ và $B$ **độc lập (independent)** nếu $P(A\cap B)=P(A)P(B)$, tương đương $P(A\mid B)=P(A)$: biết $B$ đã xảy ra không làm đổi xác suất của $A$.

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

Một biến ngẫu nhiên rời rạc được mô tả bằng bảng phân phối xác suất: bảng liệt kê mỗi giá trị $x$ cùng xác suất của nó, và tổng các xác suất bằng $1$ vì chắc chắn một giá trị nào đó sẽ xảy ra. **Kì vọng (expected value)** là giá trị trung bình ta chờ đợi sau nhiều lần lặp lại, tính bằng $E(X)=\sum xP(X=x)$. Một trò chơi là **công bằng (fair)** khi số tiền lãi kì vọng bằng $0$.

:::example Tìm k và kì vọng
$P(X=x)=kx$ với $x=1,2,3,4$.
(a) Tìm $k$. [2 marks]
(b) Tính $E(X)$. [2 marks]

**Lời giải.** (a) $k(1+2+3+4)=1$, nên $k=\dfrac{1}{10}$.

(b) $E(X)=\dfrac{1\cdot1+2\cdot2+3\cdot3+4\cdot4}{10}=\dfrac{30}{10}=3$.
:::

## Phân phối nhị thức và phân phối chuẩn

Mỗi hạt giống nảy mầm hoặc không, mỗi sản phẩm đạt hoặc lỗi: những tình huống chỉ có hai kết quả, lặp lại nhiều lần như vậy, dùng mô hình nhị thức. **Nhị thức:** $X\sim B(n,p)$ đếm số lần thành công trong $n$ phép thử độc lập có cùng xác suất $p$. $E(X)=np$ và $\mathrm{Var}(X)=np(1-p)$. Trên GDC, xác suất đúng $k$ lần thành công dùng binomial pdf, còn xác suất nhiều nhất $k$ lần dùng binomial cdf. Với "ít nhất", hãy dùng biến cố đối, vì tính phần bù thường gọn hơn cộng từng khả năng.

**Chuẩn:** $X\sim N\left(\mu,\sigma^2\right)$ là đường cong hình chuông đối xứng; chiều cao, điểm thi hay sai số đo thường có dạng gần như thế. GDC cho trực tiếp $P(a<X<b)$. Chức năng **tra ngược (inverse normal)** làm việc theo chiều ngược lại: cho trước xác suất ở phía dưới, nó tìm giá trị tương ứng.

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
- **"Ít nhất" và "nhiều hơn".** Với nhị thức, $P(X>2)=1-P(X\le2)$, nhưng $P(X\ge2)=1-P(X\le1)$. Chỗ này nhiều bạn hay nhầm, nên nhìn kĩ dấu bất đẳng thức trong đề.
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
Trung bình cộng bằng tổng các số chia cho số lượng số. Với năm số có trung bình $12$, tổng của chúng là
$$5\cdot12=60.$$

Sau khi thêm số thứ sáu, có sáu số với trung bình $13$, nên tổng của sáu số là
$$6\cdot13=78.$$

Số thứ sáu bằng hiệu của hai tổng: $78-60=18$.

Vậy số thứ sáu là $18$.

**Đáp số.** $18$.
:::

:::exercise Biến cố độc lập
$A$ và $B$ độc lập, với $P(A)=0{,}3$ và $P(B)=0{,}6$. Tính $P(A\cup B)$. [3 marks]

::hint
**Cần nhớ:** $P(A\cap B)=P(A)P(B)$.

::solution
Vì $A$ và $B$ độc lập nên
$$P(A\cap B)=P(A)\cdot P(B)=0{,}3\cdot0{,}6=0{,}18.$$

Áp dụng công thức cộng xác suất:
$$P(A\cup B)=P(A)+P(B)-P(A\cap B)=0{,}3+0{,}6-0{,}18=0{,}72.$$

Vậy $P(A\cup B)=0{,}72$.

**Đáp số.** $0{,}72$.
:::

:::exercise Kì vọng từ bảng
| $x$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $P(X=x)$ | $0{,}2$ | $0{,}5$ | $0{,}3$ |

Tính $E(X)$. [2 marks]

::hint
**Cần nhớ:** $\sum xP(X=x)$.

::solution
Kiểm tra bảng phân phối: $0{,}2+0{,}5+0{,}3=1$, nên bảng hợp lệ.

Kì vọng của biến ngẫu nhiên rời rạc là $E(X)=\sum x\cdot P(X=x)$. Do đó
$$E(X)=0\cdot0{,}2+1\cdot0{,}5+2\cdot0{,}3=0+0{,}5+0{,}6=1{,}1.$$

Vậy $E(X)=1{,}1$.

**Đáp số.** $1{,}1$.
:::

:::exercise Xác suất nhị thức
Tung một đồng xu cân đối $8$ lần. Tính xác suất được đúng $4$ lần mặt ngửa. [2 marks]

::hint
**Cần nhớ:** $X\sim B(8;0{,}5)$.

::solution
Gọi $X$ là số lần xuất hiện mặt ngửa trong $8$ lần tung. Mỗi lần tung độc lập và mặt ngửa xuất hiện với xác suất $0{,}5$, nên $X\sim B(8; 0{,}5)$.

Áp dụng công thức xác suất nhị thức $P(X=k)=C_n^k\,p^k(1-p)^{n-k}$ với $n=8$, $k=4$, $p=0{,}5$:
$$P(X=4)=C_8^4\cdot(0{,}5)^4(0{,}5)^4=70\cdot(0{,}5)^8=\frac{70}{256}.$$

Ở đây $C_8^4=\dfrac{8!}{4!\,4!}=70$. Do đó $P(X=4)=\dfrac{70}{256}\approx0{,}273$.

Vậy xác suất được đúng $4$ lần mặt ngửa là khoảng $0{,}273$.

**Đáp số.** $\dfrac{70}{256}\approx0{,}273$.
:::

:::exercise Xác suất phân phối chuẩn
$X\sim N\left(50;4^2\right)$. Tính $P(46<X<58)$. [2 marks]

::hint
**Cần nhớ:** normal cdf với cận dưới $46$, cận trên $58$, $\mu=50$, $\sigma=4$.

::solution
Với $X\sim N\left(50; 4^2\right)$, trung bình là $\mu=50$ và độ lệch chuẩn là $\sigma=4$.

Chuẩn hoá $Z=\dfrac{X-\mu}{\sigma}$, trong đó $Z\sim N(0; 1)$:
$$z_1=\frac{46-50}{4}=-1,\qquad z_2=\frac{58-50}{4}=2.$$

Do đó
$$P(46<X<58)=P(-1<Z<2)=P(Z<2)-P(Z<-1)\approx0{,}97725-0{,}15866\approx0{,}819.$$

Dùng GDC (hàm phân phối chuẩn) với cận $46$ và $58$, $\mu=50$, $\sigma=4$ cũng cho kết quả $0{,}819$.

Vậy $P(46<X<58)\approx0{,}819$.

**Đáp số.** $\approx0{,}819$.
:::

## Bài tập vận dụng

:::exercise Kiểm tra chất lượng
$2\%$ bóng đèn của một nhà máy bị lỗi. Kiểm tra ngẫu nhiên $20$ bóng. Tính xác suất có nhiều nhất một bóng lỗi. [3 marks]

::hint
**Cần nhớ:** $X\sim B(20;0{,}02)$ và $P(X\le1)$.

::solution
Gọi $X$ là số bóng đèn lỗi trong $20$ bóng được kiểm tra. Mỗi bóng lỗi với xác suất $0{,}02$ và các bóng được xem là độc lập, nên $X\sim B(20; 0{,}02)$.

Biến cố "nhiều nhất một bóng lỗi" là $X\le1$, nên
$$P(X\le1)=P(X=0)+P(X=1).$$

Áp dụng công thức nhị thức:
$$P(X=0)=(0{,}98)^{20}\approx0{,}6676,$$
$$P(X=1)=C_{20}^1\cdot0{,}02\cdot(0{,}98)^{19}=20\cdot0{,}02\cdot(0{,}98)^{19}\approx0{,}2725.$$

Cộng lại: $P(X\le1)\approx0{,}6676+0{,}2725\approx0{,}940$. (GDC với hàm phân phối nhị thức tích luỹ cũng cho $0{,}940$.)

Vậy xác suất có nhiều nhất một bóng lỗi là khoảng $0{,}940$.

**Đáp số.** $\approx0{,}940$.
:::

:::exercise Ngưỡng điểm
Điểm một bài kiểm tra có phân phối chuẩn với trung bình $65$ và độ lệch chuẩn $12$. $10\%$ học sinh cao điểm nhất được xếp loại cao nhất. Tìm điểm thấp nhất được xếp loại này. [3 marks]

::hint
**Cần nhớ:** $P(S>k)=0{,}1$ nghĩa là $P(S<k)=0{,}9$.

::solution
Gọi $X$ là điểm của một học sinh, $X\sim N\left(65; 12^2\right)$. Gọi $k$ là điểm thấp nhất được xếp loại cao nhất. Vì $10\%$ học sinh cao điểm nhất được xếp loại này nên
$$P(X\ge k)=0{,}1,\ \text{tức là}\ P(X<k)=0{,}9.$$

Dùng phân phối chuẩn tắc $Z=\dfrac{X-65}{12}$. Tra ngược (hàm chuẩn nghịch đảo trên GDC) với xác suất $0{,}9$, ta được $z\approx1{,}2816$, tức là
$$\frac{k-65}{12}\approx1{,}2816.$$

Suy ra
$$k\approx65+12\cdot1{,}2816\approx80{,}4.$$

Vậy điểm thấp nhất được xếp loại cao nhất là khoảng $80{,}4$ điểm.

**Đáp số.** $k\approx80{,}4$.
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
Gọi $A$ là biến cố "học sinh đạt" và $B$ là biến cố "học sinh học hơn $5$ giờ". Từ bảng: có $90+30=120$ học sinh học hơn $5$ giờ và $90+50=140$ học sinh đạt; có $90$ học sinh vừa học hơn $5$ giờ vừa đạt.

a) Cần tính $P(A\mid B)$. Trong $120$ học sinh học hơn $5$ giờ có $90$ học sinh đạt, nên
$$P(A\mid B)=\frac{90}{120}=0{,}75.$$

Vậy xác suất một học sinh đạt, biết học sinh đó học hơn $5$ giờ, là $0{,}75$.

b) Cần tính $P(B\mid A)$. Trong $140$ học sinh đạt có $90$ học sinh học hơn $5$ giờ, nên
$$P(B\mid A)=\frac{90}{140}=\frac{9}{14}\approx0{,}643.$$

Vậy xác suất một học sinh học hơn $5$ giờ, biết học sinh đó đạt, là khoảng $0{,}643$.

Hai đáp số khác nhau vì điều kiện (tập hợp cơ sở) khác nhau: nói chung $P(A\mid B)\neq P(B\mid A)$.

**Đáp số.** a) $0{,}75$; b) $\dfrac{90}{140}\approx0{,}643$.
:::

:::exercise Thử thách: trò chơi công bằng
Người chơi trả $k$ đô la để gieo một con xúc xắc cân đối sáu mặt và nhận số đô la bằng số chấm xuất hiện. Tìm $k$ để trò chơi công bằng. [3 marks]

::hint
**Cần nhớ:** tiền thưởng kì vọng bằng tiền phải trả.

::solution
Gọi $W$ là số đô la người chơi nhận được. Con xúc xắc cân đối nên mỗi mặt $1,2,3,4,5,6$ xuất hiện với xác suất $\dfrac16$. Kì vọng tiền thưởng là
$$E(W)=\frac{1+2+3+4+5+6}{6}=\frac{21}{6}=3{,}5\ \text{(đô la)}.$$

Trò chơi công bằng khi kì vọng lợi nhuận của người chơi bằng $0$, tức là tiền thưởng trung bình bằng số tiền phải trả:
$$E(W)-k=0\iff k=E(W)=3{,}5.$$

Vậy để trò chơi công bằng thì $k=3{,}5$ đô la.

**Đáp số.** $k=3{,}5$ đô la.
:::

:::quiz
::mc TH
$A$ và $B$ xung khắc, với $P(A)=0{,}4$ và $P(B)=0{,}5$. $P(A\cup B)$ bằng
A. $0{,}2$
B. $0{,}7$
C. $0{,}9$
D. $1$
::key C
Với biến cố xung khắc, $P(A\cup B)=P(A)+P(B)$.

::mc NB
$X\sim B(5;0{,}2)$. $E(X)$ bằng
A. $1$
B. $0{,}2$
C. $0{,}8$
D. $5$
::key A
$np=5(0{,}2)=1$.

::mc TH
$X\sim N\left(\mu,\sigma^2\right)$. $P(X<\mu)$ bằng
A. $0{,}68$
B. $0{,}95$
C. $1$
D. $0{,}5$
::key D
Phân phối chuẩn đối xứng qua trung bình.

::mc TH
Một biến ngẫu nhiên nhận các giá trị $1$, $2$, $3$ với xác suất $0{,}2$, $k$, $0{,}5$. $k$ bằng
A. $0{,}5$
B. $0{,}3$
C. $0{,}7$
D. $0{,}2$
::key B
$0{,}2+k+0{,}5=1$.

::tf TH TH VD TH
$X\sim N\left(100;15^2\right)$.
a) $P(X<100)=0{,}5$.
b) $P(X>115)=P(X<85)$.
c) $P(X>130)>0{,}05$.
d) Phương sai của $X$ bằng $15$.
::key T T F F
a) Đúng: tính đối xứng. b) Đúng: tính đối xứng. c) Sai: $P(X>130)\approx0{,}0228$. d) Sai: phương sai bằng $225$.

::sa VD
Gieo một con xúc xắc cân đối sáu mặt. Tính số chấm kì vọng.
::key 3,5
$\dfrac{21}{6}=3{,}5$.

::sa TH
Tung một đồng xu cân đối hai lần. Tính xác suất được hai lần mặt ngửa.
::key 0,25
$0{,}5^2=0{,}25$.
:::
