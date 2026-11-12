---
title: Xác suất và biến ngẫu nhiên
description: AP Statistics Unit 2: quy tắc xác suất, bảng hai chiều, xác suất có điều kiện và tính độc lập, biến ngẫu nhiên rời rạc, phân phối nhị thức.
minutes: 50
---

:::goals
- Dùng quy tắc biến cố đối, quy tắc cộng, quy tắc nhân và bảng hai chiều.
- Tính xác suất có điều kiện và kiểm tra hai biến cố có độc lập không.
- Tìm và diễn giải kì vọng và độ lệch chuẩn của một biến ngẫu nhiên rời rạc.
- Nhận ra tình huống nhị thức, tính xác suất nhị thức, tìm kì vọng và độ lệch chuẩn của phân phối nhị thức.
:::

Xác suất là cầu nối từ mô tả dữ liệu đến rút ra kết luận từ dữ liệu: suy luận thống kê đặt câu hỏi một kết quả có khả năng xảy ra đến đâu nếu chỉ có yếu tố ngẫu nhiên tác động. Trong đề mới, một cụm ba câu trắc nghiệm nói về xác suất, biến ngẫu nhiên và phân phối. Tổ hợp các biến ngẫu nhiên và phân phối hình học đã bị bỏ khỏi chương trình.

## Xác suất là tần suất tương đối trong dài hạn

**Xác suất** của một kết quả là tỉ lệ số lần nó xảy ra trong một chuỗi rất dài các lần lặp lại phép thử ngẫu nhiên. Trong một chuỗi ngắn, tỉ lệ này có thể khác xa xác suất, nhưng khi số lần lặp tăng lên, nó ổn định gần xác suất; đó là **luật số lớn**. **Mô phỏng** (simulation) bắt chước một phép thử ngẫu nhiên bằng các số ngẫu nhiên, nhờ đó các xác suất khó tính có thể được ước lượng bằng tần suất tương đối của kết quả qua nhiều lần thử mô phỏng. Khi mô tả một mô phỏng trong bài thi, hãy nói các số ngẫu nhiên biểu diễn kết quả thế nào, ghi lại điều gì ở mỗi lần thử, và dùng kết quả ra sao.

## Các quy tắc xác suất

Với hai biến cố $A$ và $B$:

| Quy tắc | Công thức |
|---|---|
| Biến cố đối | $P(A^C)=1-P(A)$ |
| Cộng tổng quát | $P(A\text{ hoặc }B)=P(A)+P(B)-P(A\text{ và }B)$ |
| Xác suất có điều kiện | $P(A\mid B)=\dfrac{P(A\text{ và }B)}{P(B)}$ |
| Nhân tổng quát | $P(A\text{ và }B)=P(A)\cdot P(B\mid A)$ |

$A$ và $B$ **xung khắc** nếu không thể cùng xảy ra, $P(A\text{ và }B)=0$. Chúng **độc lập** nếu biết biến cố này xảy ra không làm thay đổi xác suất của biến cố kia: $P(A\mid B)=P(A)$, hay tương đương $P(A\text{ và }B)=P(A)\cdot P(B)$.

:::example Bảng hai chiều
Một khảo sát $200$ học sinh ghi lại khối lớp và việc có chơi thể thao hay không.

| | Chơi thể thao | Không chơi | Tổng |
|---|---|---|---|
| Khối 10 | $45$ | $55$ | $100$ |
| Khối 11 | $60$ | $40$ | $100$ |
| Tổng | $105$ | $95$ | $200$ |

Xác suất để một học sinh khối 11 chọn ngẫu nhiên có chơi thể thao là
A. $0{,}30$
B. $0{,}525$
C. $0{,}571$
D. $0{,}60$

**Lời giải.** Điều kiện "khối 11" giới hạn ta trong $100$ học sinh khối 11, trong đó $60$ em chơi thể thao.

Vậy $P(\text{thể thao}\mid\text{khối 11})=\dfrac{60}{100}=0{,}60$, chọn đáp án **D**. Phương án A là $P(\text{khối 11 và thể thao})=\dfrac{60}{200}$, còn phương án C là $P(\text{khối 11}\mid\text{thể thao})=\dfrac{60}{105}$.

Vì $P(\text{thể thao})=\dfrac{105}{200}=0{,}525\ne0{,}60$ nên hai biến cố "chơi thể thao" và "khối 11" không độc lập.
:::

:::example Quy tắc nhân
Ở một thị trấn, $30\%$ số ngày có mưa, và vào ngày mưa xe buýt đến muộn với xác suất $0{,}5$. Xác suất để một ngày chọn ngẫu nhiên vừa mưa vừa có xe buýt đến muộn là
A. $0{,}80$
B. $0{,}15$
C. $0{,}20$
D. $0{,}35$

**Lời giải.** Theo quy tắc nhân tổng quát,
$$P(\text{mưa và muộn})=P(\text{mưa})\cdot P(\text{muộn}\mid\text{mưa})=0{,}3\times0{,}5=0{,}15.$$

Vậy xác suất cần tìm là $0{,}15$, chọn đáp án **B**.
:::

## Biến ngẫu nhiên rời rạc

**Biến ngẫu nhiên** nhận các giá trị số được xác định bởi một phép thử ngẫu nhiên. Với biến ngẫu nhiên rời rạc $X$ có các giá trị $x_i$ và xác suất $p_i$ (tổng bằng $1$):
$$\mu_X=\sum x_ip_i,\qquad \sigma_X=\sqrt{\sum(x_i-\mu_X)^2p_i}.$$
Kì vọng $\mu_X$ là giá trị trung bình của $X$ trong dài hạn qua nhiều lần lặp; $\sigma_X$ là khoảng cách điển hình từ các giá trị đến kì vọng.

:::example Số bàn thắng trong một trận
Số bàn thắng $X$ một đội ghi được trong một trận có phân phối như sau.

| $x$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $P(X=x)$ | $0{,}2$ | $0{,}4$ | $0{,}3$ | $0{,}1$ |

Tính và diễn giải kì vọng và độ lệch chuẩn của $X$.

**Lời giải.** Kì vọng là $\mu_X=0(0{,}2)+1(0{,}4)+2(0{,}3)+3(0{,}1)=0+0{,}4+0{,}6+0{,}3=1{,}3$.

Với độ lệch chuẩn, tổng các bình phương độ lệch nhân với xác suất là $(0-1{,}3)^2(0{,}2)+(1-1{,}3)^2(0{,}4)+(2-1{,}3)^2(0{,}3)+(3-1{,}3)^2(0{,}1)=0{,}338+0{,}036+0{,}147+0{,}289=0{,}81$, nên $\sigma_X=\sqrt{0{,}81}=0{,}9$.

Vậy qua nhiều trận, trung bình đội ghi $1{,}3$ bàn mỗi trận, và số bàn thắng thường lệch khỏi $1{,}3$ khoảng $0{,}9$ bàn.
:::

## Phân phối nhị thức

**Tình huống nhị thức** có bốn điều kiện (BINS): kết quả **nhị phân** (thành công hoặc thất bại), các lần thử **độc lập**, **số** lần thử $n$ cố định, và **cùng** xác suất thành công $p$ ở mọi lần thử. Khi đó số lần thành công $X$ có phân phối nhị thức:
$$P(X=k)=\binom nk p^k(1-p)^{n-k},\qquad \mu_X=np,\qquad \sigma_X=\sqrt{np(1-p)}.$$
Khi chọn không hoàn lại, các lần thử được coi là độc lập nếu mẫu nhỏ hơn $10\%$ tổng thể.

:::example Ném phạt
Một cầu thủ bóng rổ ném phạt thành công $70\%$, các lần ném độc lập. Cô ném $10$ quả. Xác suất để cô ném trúng đúng $8$ quả là
A. $0{,}8000$
B. $0{,}0576$
C. $0{,}2335$
D. $0{,}3828$

**Lời giải.** Đây là tình huống nhị thức với $n=10$ và $p=0{,}7$: mỗi lần ném thành công hoặc thất bại, các lần ném độc lập, số lần ném cố định và $p$ không đổi.

Do đó
$$P(X=8)=\binom{10}{8}(0{,}7)^8(0{,}3)^2=45\times0{,}05765\times0{,}09\approx0{,}2335,$$
chọn đáp án **C**. Phương án B thiếu thừa số $\dbinom{10}{8}=45$.

Số quả ném trúng trung bình là $np=7$, với độ lệch chuẩn $\sqrt{10(0{,}7)(0{,}3)}=\sqrt{2{,}1}\approx1{,}449$.
:::

:::warning Những cái bẫy thường gặp
- **Xung khắc không phải độc lập:** nếu $P(A),P(B)>0$ thì hai biến cố xung khắc luôn phụ thuộc nhau.
- **Chiều của điều kiện:** $P(A\mid B)$ và $P(B\mid A)$ có mẫu số khác nhau.
- **Kiểm tra nhị thức:** nêu đủ bốn điều kiện trước khi dùng công thức.
- **Câu hỏi "ít nhất":** dùng biến cố đối, $P(X\ge1)=1-P(X=0)$.
- **Diễn giải kì vọng:** "trung bình qua nhiều lần lặp", không phải "giá trị ta chờ đợi mỗi lần".
:::

:::terms
- event / complement | biến cố / biến cố đối
- mutually exclusive | xung khắc
- independent | độc lập
- conditional probability | xác suất có điều kiện
- two-way table | bảng hai chiều
- random variable | biến ngẫu nhiên
- probability distribution | phân phối xác suất
- expected value (mean) | kì vọng (giá trị trung bình)
- binomial distribution | phân phối nhị thức
:::

## Bài tập tương tự

:::exercise
Gieo một con xúc xắc cân đối $4$ lần. Tính xác suất để có ít nhất một lần ra mặt sáu.

::hint
**Kiến thức:** biến cố đối của "ít nhất một mặt sáu" là "không có mặt sáu nào".

::solution
Biến cố đối của "ít nhất một mặt sáu" là "không có mặt sáu nào trong $4$ lần gieo". Các lần gieo độc lập, nên $P(\text{không có mặt sáu})=\left(\dfrac56\right)^4\approx0{,}4823$.

Do đó $P(\text{ít nhất một mặt sáu})=1-\left(\dfrac56\right)^4\approx0{,}5177$.

Vậy xác suất có ít nhất một mặt sáu xấp xỉ $0{,}5177$.

**Đáp số.** Khoảng $0{,}5177$.
:::

:::exercise
Với hai biến cố $A$ và $B$, $P(A)=0{,}45$, $P(B)=0{,}35$ và $P(A\text{ và }B)=0{,}15$. Tính $P(A\text{ hoặc }B)$ và cho biết $A$ và $B$ có xung khắc không.

::hint
**Kiến thức:** quy tắc cộng tổng quát; xung khắc nghĩa là $P(A\text{ và }B)=0$.

::solution
Theo quy tắc cộng tổng quát, $P(A\text{ hoặc }B)=0{,}45+0{,}35-0{,}15=0{,}65$.

Vì $P(A\text{ và }B)=0{,}15\ne0$ nên hai biến cố có thể cùng xảy ra, tức chúng không xung khắc.

Vậy $P(A\text{ hoặc }B)=0{,}65$, và hai biến cố không xung khắc.

**Đáp số.** $0{,}65$; không.
:::

:::exercise
Với hai biến cố $A$ và $B$, $P(A)=0{,}4$, $P(B)=0{,}5$ và $P(A\text{ và }B)=0{,}2$. $A$ và $B$ có độc lập không?

::hint
**Kiến thức:** so sánh $P(A\text{ và }B)$ với $P(A)P(B)$.

::solution
Hai biến cố độc lập khi và chỉ khi xác suất của giao bằng tích các xác suất. Nếu hai biến cố độc lập thì $P(A\text{ và }B)=P(A)P(B)=0{,}4\times0{,}5=0{,}2$.

Giá trị đã cho $P(A\text{ và }B)=0{,}2$ trùng khớp, tương đương $P(A\mid B)=\dfrac{0{,}2}{0{,}5}=0{,}4=P(A)$.

Vậy $A$ và $B$ độc lập.

**Đáp số.** Có, độc lập.
:::

:::exercise
Biến ngẫu nhiên $X$ nhận các giá trị $1,2,3,4$ với xác suất $0{,}1$; $0{,}3$; $0{,}4$ và $0{,}2$. Tính $\mu_X$ và $P(X\ge3)$.

::hint
**Kiến thức:** $\mu_X=\sum x_ip_i$; cộng xác suất của $3$ và $4$.

::solution
Kì vọng là tổng các tích giữa mỗi giá trị và xác suất của nó: $\mu_X=1(0{,}1)+2(0{,}3)+3(0{,}4)+4(0{,}2)=0{,}1+0{,}6+1{,}2+0{,}8=2{,}7$.

Biến cố $X\ge3$ nghĩa là $X=3$ hoặc $X=4$, nên $P(X\ge3)=0{,}4+0{,}2=0{,}6$.

Vậy $\mu_X=2{,}7$ và $P(X\ge3)=0{,}6$.

**Đáp số.** $\mu_X=2{,}7$; $0{,}6$.
:::

:::exercise
Một biến ngẫu nhiên nhị thức có $n=50$ và $p=0{,}2$. Tìm kì vọng và độ lệch chuẩn.

::hint
**Kiến thức:** $\mu=np$ và $\sigma=\sqrt{np(1-p)}$.

::solution
Số lần thành công là biến ngẫu nhiên nhị thức, nên ta dùng các công thức của phân phối nhị thức. Kì vọng là $\mu=np=50\times0{,}2=10$.

Độ lệch chuẩn là $\sigma=\sqrt{50\times0{,}2\times0{,}8}=\sqrt8\approx2{,}828$.

Vậy kì vọng là $10$ lần thành công và độ lệch chuẩn xấp xỉ $2{,}828$.

**Đáp số.** $\mu=10$, $\sigma\approx2{,}828$.
:::

## Bài tập vận dụng

:::exercise
Một máy sản xuất linh kiện, $5\%$ trong số đó bị lỗi, độc lập với nhau. Người kiểm tra kiểm $20$ linh kiện.
a) Tính xác suất không có linh kiện nào lỗi.
b) Tính xác suất có nhiều nhất một linh kiện lỗi.

::hint
**Kiến thức:** nhị thức với $n=20$, $p=0{,}05$; "nhiều nhất một" là $0$ hoặc $1$.

::solution
Số linh kiện lỗi $X$ có phân phối nhị thức với $n=20$ và $p=0{,}05$, vì mỗi linh kiện lỗi hoặc không, độc lập, với số lần kiểm cố định.

a) $P(X=0)=(0{,}95)^{20}\approx0{,}3585$.

b) $P(X=1)=\dbinom{20}{1}(0{,}05)(0{,}95)^{19}\approx0{,}3774$, nên $P(X\le1)=P(X=0)+P(X=1)\approx0{,}7358$ (hàm xác suất tích luỹ nhị thức của máy tính cho cùng giá trị mà không bị sai số làm tròn).

Vậy hai xác suất lần lượt xấp xỉ $0{,}3585$ và $0{,}7358$.

**Đáp số.** a) $0{,}3585$; b) $0{,}7358$.
:::

:::exercise
Một bệnh có ở $2\%$ dân số. Một xét nghiệm cho kết quả dương tính ở $95\%$ người mắc bệnh và ở $10\%$ người không mắc bệnh. Một người chọn ngẫu nhiên có kết quả dương tính. Tính xác suất người đó mắc bệnh.

::hint
**Kiến thức:** $P(\text{bệnh}\mid\text{dương tính})=\dfrac{P(\text{bệnh và dương tính})}{P(\text{dương tính})}$.

::solution
Theo quy tắc nhân, $P(\text{bệnh và dương tính})=0{,}02\times0{,}95=0{,}019$ và $P(\text{không bệnh và dương tính})=0{,}98\times0{,}10=0{,}098$.

Do đó $P(\text{dương tính})=0{,}019+0{,}098=0{,}117$, và
$$P(\text{bệnh}\mid\text{dương tính})=\frac{0{,}019}{0{,}117}\approx0{,}1624.$$

Vậy chỉ khoảng $16\%$ người có kết quả dương tính thực sự mắc bệnh, vì bệnh hiếm còn dương tính giả lại phổ biến.

**Đáp số.** Khoảng $0{,}1624$.
:::

:::exercise
Một trò chơi tốn $2$ đô la mỗi lượt. Với xác suất $0{,}15$ bạn thắng giải $10$ đô la; ngược lại không được gì. Gọi $X$ là số tiền lãi ròng. Tính $\mu_X$ và diễn giải.

::hint
**Kiến thức:** lãi ròng là $10-2=8$ khi thắng và $-2$ khi thua.

::solution
Lãi ròng là $8$ đô la với xác suất $0{,}15$ và $-2$ đô la với xác suất $0{,}85$.

Do đó $\mu_X=8(0{,}15)+(-2)(0{,}85)=1{,}2-1{,}7=-0{,}5$.

Vậy qua nhiều lượt chơi, trung bình người chơi lỗ $0{,}50$ đô la mỗi lượt.

**Đáp số.** $\mu_X=-0{,}5$ đô la.
:::

:::exercise Thử thách
Một học sinh đoán ngẫu nhiên $10$ câu trắc nghiệm, mỗi câu $4$ phương án. Tính xác suất để em đúng ít nhất $5$ câu.

::hint
**Kiến thức:** nhị thức với $n=10$, $p=0{,}25$; $P(X\ge5)=1-P(X\le4)$.

::solution
Số câu đúng $X$ có phân phối nhị thức với $n=10$ và $p=0{,}25$, vì mỗi lần đoán đúng hoặc sai, các lần đoán độc lập, và mỗi câu có $p=\dfrac14$.

Theo quy tắc biến cố đối và máy tính, $P(X\ge5)=1-P(X\le4)\approx1-0{,}9219=0{,}0781$.

Vậy xác suất đoán đúng ít nhất $5$ câu xấp xỉ $0{,}0781$.

**Đáp số.** Khoảng $0{,}0781$.
:::

:::quiz
::mc
Nếu $P(A)=0{,}35$ thì $P(A^C)$ bằng
A. $0{,}35$
B. $0{,}65$
C. $1{,}35$
D. $0{,}1225$
::key B
$1-0{,}35=0{,}65$.

::mc
$A$ và $B$ độc lập với $P(A)=0{,}3$ và $P(B)=0{,}4$. Khi đó $P(A\text{ và }B)$ bằng
A. $0{,}7$
B. $0{,}1$
C. $0{,}12$
D. $0{,}58$
::key C
$0{,}3\times0{,}4=0{,}12$.

::mc
Kì vọng của phân phối nhị thức với $n=20$ và $p=0{,}3$ là
A. $6$
B. $4{,}2$
C. $2{,}05$
D. $0{,}3$
::key A
$np=20\times0{,}3=6$.

::mc
Tình huống nào KHÔNG phải tình huống nhị thức?
A. Đếm số lần ra mặt ngửa trong $12$ lần tung đồng xu
B. Đếm số câu đoán đúng trong $8$ câu đúng sai
C. Đếm số sản phẩm lỗi trong mẫu ngẫu nhiên $15$ sản phẩm từ một lô lớn
D. Đếm số lần gieo xúc xắc cần thiết để ra mặt sáu lần đầu
::key D
Số lần thử không cố định.

::tf
Biến ngẫu nhiên $X$ nhận các giá trị $0$, $1$, $2$ với xác suất $0{,}5$; $0{,}3$ và $0{,}2$. Xét tính đúng sai của các mệnh đề sau:
a) Tổng các xác suất bằng $1$.
b) $P(X\ge1)=0{,}5$.
c) $\mu_X=0{,}7$.
d) $\mu_X$ phải là một giá trị của $X$.
::key T T T F
Kì vọng $0{,}7$ không phải giá trị có thể có.

::sa
Với biến ngẫu nhiên ở câu trên, tính $P(X=2\mid X\ge1)$.
::key 0,4
$\dfrac{0{,}2}{0{,}5}=0{,}4$.

::sa
Nếu $P(A\text{ và }B)=0{,}12$ và $P(B)=0{,}4$, tính $P(A\mid B)$.
::key 0,3
$\dfrac{0{,}12}{0{,}4}=0{,}3$.
:::
