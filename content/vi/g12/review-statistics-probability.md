---
title: "Ôn tập: thống kê và xác suất"
description: Ôn các số đặc trưng của mẫu số liệu ghép nhóm, xác suất có điều kiện, công thức xác suất toàn phần và công thức Bayes theo dạng câu hỏi thi tốt nghiệp.
minutes: 40
---

:::goals
- Tính số trung bình, trung vị, tứ phân vị, mốt của mẫu số liệu ghép nhóm.
- Tính khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn và dùng chúng để so sánh.
- Dùng quy tắc cộng, quy tắc nhân, xác suất có điều kiện và biến cố độc lập.
- Dùng sơ đồ cây, công thức xác suất toàn phần và công thức Bayes trong bài toán thực tế.
:::

Thống kê và xác suất chắc chắn có trong đề thi. Phần I thường có hai đến ba câu tính nhanh một số đặc trưng hoặc một xác suất. Ở Phần II hoặc Phần III, đề thường có một câu xác suất có điều kiện hoặc công thức Bayes gắn với thực tế. Chủ đề này thường chiếm khoảng $1$ đến $1{,}5$ điểm.

Phần thống kê dùng chung bảng sau: thời gian dùng điện thoại mỗi ngày (phút) của $40$ học sinh.

| Thời gian (phút) | $[0; 30)$ | $[30; 60)$ | $[60; 90)$ | $[90; 120)$ | $[120; 150)$ |
|---|---|---|---|---|---|
| Số học sinh | $4$ | $10$ | $14$ | $8$ | $4$ |
| Giá trị đại diện | $15$ | $45$ | $75$ | $105$ | $135$ |
| Tần số tích luỹ | $4$ | $14$ | $28$ | $36$ | $40$ |

## Số đặc trưng đo xu thế trung tâm

:::theorem Công thức cho mẫu ghép nhóm
Mẫu có các nhóm $[u_1; u_2)$, …, $[u_k; u_{k+1})$, tần số $n_1$, …, $n_k$, giá trị đại diện $x_1$, …, $x_k$ và cỡ mẫu $n$.
- Số trung bình: $\bar x=\dfrac{n_1x_1+n_2x_2+\cdots+n_kx_k}{n}$.
- Trung vị: nếu $[u_m; u_{m+1})$ là nhóm đầu tiên có tần số tích luỹ $\ge\dfrac n2$ và $C$ là tần số tích luỹ của các nhóm trước nó thì $M_e=u_m+\dfrac{\frac n2-C}{n_m}(u_{m+1}-u_m)$. Tứ phân vị $Q_1$, $Q_3$: thay $\dfrac n2$ bằng $\dfrac n4$, $\dfrac{3n}{4}$.
- Mốt: nếu $[u_m; u_{m+1})$ là nhóm có tần số lớn nhất thì $M_o=u_m+\dfrac{n_m-n_{m-1}}{(n_m-n_{m-1})+(n_m-n_{m+1})}(u_{m+1}-u_m)$.
:::

Với bảng trên, $\dfrac n2=20$ nằm trong nhóm $[60; 90)$ (vì $14<20\le28$), nên $M_e=60+\dfrac{20-14}{14}\cdot30\approx72{,}86$. Nhóm có tần số lớn nhất cũng là $[60; 90)$, nên $M_o=60+\dfrac{4}{4+6}\cdot30=72$.

:::example Trắc nghiệm: số trung bình của mẫu ghép nhóm
Số trung bình của mẫu số liệu ở trên là

**A.** $75$.

**B.** $72$.

**C.** $73{,}5$.

**D.** $72{,}86$.

**Lời giải.** Nhân mỗi giá trị đại diện với tần số rồi chia cho cỡ mẫu:

$$\bar x=\frac{4\cdot15+10\cdot45+14\cdot75+8\cdot105+4\cdot135}{40}=\frac{60+450+1050+840+540}{40}=\frac{2940}{40}=73{,}5.$$

Chọn **C**. Phương án A là giá trị đại diện của nhóm đông nhất, phương án B là mốt, phương án D là trung vị.
:::

## Số đặc trưng đo độ phân tán

:::theorem Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn
- $R=u_{k+1}-u_1$; $\Delta_Q=Q_3-Q_1$.
- Phương sai: $s^2=\dfrac{n_1(x_1-\bar x)^2+\cdots+n_k(x_k-\bar x)^2}{n}=\dfrac{n_1x_1^2+\cdots+n_kx_k^2}{n}-\bar x^2$.
- Độ lệch chuẩn: $s=\sqrt{s^2}$, cùng đơn vị với số liệu.
:::

:::example Đúng/Sai: các số đo độ phân tán
Với mẫu số liệu ở trên:

a) Khoảng biến thiên của mẫu số liệu là $150$ phút.

b) Tứ phân vị thứ nhất là $Q_1=48$.

c) Tứ phân vị thứ ba thuộc nhóm $[60; 90)$.

d) Độ lệch chuẩn của mẫu số liệu xấp xỉ $33{,}51$ phút.

**Lời giải.** Ta dùng dòng tần số tích luỹ $4$, $14$, $28$, $36$, $40$.

a) **Đúng.** $R=150-0=150$.

b) **Đúng.** $\dfrac n4=10$ và $4<10\le14$, nên $Q_1$ thuộc $[30; 60)$:

$$Q_1=30+\frac{10-4}{10}\cdot30=48.$$

c) **Sai.** $\dfrac{3n}{4}=30$ và $28<30\le36$, nên $Q_3$ thuộc nhóm $[90; 120)$; cụ thể $Q_3=90+\dfrac{30-28}{8}\cdot30=97{,}5$.

d) **Đúng.** Ta tính trung bình các bình phương rồi trừ $\bar x^2=73{,}5^2$:

$$s^2=\frac{4\cdot15^2+10\cdot45^2+14\cdot75^2+8\cdot105^2+4\cdot135^2}{40}-73{,}5^2=6525-5402{,}25=1122{,}75.$$

Do đó $s=\sqrt{1122{,}75}\approx33{,}51$ phút.

Vậy đáp án là a) Đúng, b) Đúng, c) Sai, d) Đúng.
:::

:::warning Bẫy thường gặp về thống kê
- **Chọn nhóm theo tần số lớn nhất** thay vì theo tần số tích luỹ khi tìm nhóm chứa $Q_1$, $M_e$, $Q_3$.
- **Lấy $C$ gồm cả nhóm đang xét.** $C$ chỉ là tần số tích luỹ của các nhóm **đứng trước**.
- **Quên trừ $\bar x^2$** trong công thức phương sai, hoặc trả lời phương sai khi đề hỏi độ lệch chuẩn.
:::

## Xác suất có điều kiện và quy tắc nhân

:::theorem Các quy tắc tính xác suất
- $P(\overline A)=1-P(A)$; $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.
- Xác suất của $A$ khi biết $B$ đã xảy ra: $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ ($P(B)>0$).
- Quy tắc nhân: $P(A\cap B)=P(B)\cdot P(A\mid B)$.
- $A$ và $B$ độc lập $\iff P(A\cap B)=P(A)\cdot P(B)$.
:::

:::example Trắc nghiệm: xác suất có điều kiện từ bảng
Lớp 12A có $40$ học sinh, trong đó có $24$ nữ. Có $15$ bạn nữ và $6$ bạn nam tham gia câu lạc bộ Toán. Chọn ngẫu nhiên một học sinh của lớp. Biết học sinh được chọn tham gia câu lạc bộ Toán, xác suất học sinh đó là nữ bằng

**A.** $\dfrac58$.

**B.** $\dfrac57$.

**C.** $\dfrac38$.

**D.** $\dfrac{21}{40}$.

**Lời giải.** Gọi $B$ là biến cố "tham gia câu lạc bộ", $A$ là biến cố "là nữ". Biến cố $B$ có $15+6=21$ học sinh, trong đó $15$ bạn nữ:

$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{15/40}{21/40}=\frac{15}{21}=\frac57.$$

Chọn **B**. Phương án A là $P(B\mid A)=\dfrac{15}{24}$ (đổi chỗ hai biến cố), phương án C là $P(A\cap B)$, phương án D là $P(B)$.
:::

:::example Trả lời ngắn: hai biến cố độc lập
Hai xạ thủ bắn độc lập vào cùng một bia, mỗi người một viên. Xác suất bắn trúng của người thứ nhất là $0{,}8$, của người thứ hai là $0{,}7$. Tính xác suất có đúng một người bắn trúng.

**Lời giải.** "Đúng một người trúng" gồm hai trường hợp xung khắc: người thứ nhất trúng, người thứ hai trượt hoặc ngược lại. Mỗi trường hợp dùng quy tắc nhân:

$$P=0{,}8\cdot0{,}3+0{,}2\cdot0{,}7=0{,}24+0{,}14=0{,}38.$$

Vậy $P=0{,}38$.
:::

## Công thức xác suất toàn phần và công thức Bayes

:::theorem Hai công thức
Với $0<P(B)<1$:
$$P(A)=P(B)\cdot P(A\mid B)+P(\overline B)\cdot P(A\mid\overline B),\qquad P(B\mid A)=\frac{P(B)\cdot P(A\mid B)}{P(A)}.$$
Trên sơ đồ cây: nhân theo từng nhánh, cộng các nhánh dẫn tới $A$ để được $P(A)$; công thức Bayes là "nhánh cần tìm chia cho tổng các nhánh".
:::

:::diagram Sơ đồ cây cho xét nghiệm
alt: Sơ đồ cây hai tầng; tầng một tách thành mắc bệnh với xác suất 0,02 và không mắc bệnh với xác suất 0,98; nhánh mắc bệnh tách thành dương tính 0,95 và âm tính 0,05, nhánh không mắc tách thành dương tính 0,1 và âm tính 0,9; các đầu mút ghi 0,019, 0,001, 0,098 và 0,882
point S 0,0 left "Người được xét nghiệm"
point M1 3,2 above "Mắc bệnh"
point M2 3,-2 below "Không mắc"
point L1 6,3 right "Dương tính: 0,019"
point T1 6,1 right "Âm tính: 0,001"
point L2 6,-1 right "Dương tính: 0,098"
point T2 6,-3 right "Âm tính: 0,882"
segment S M1
segment S M2
segment M1 L1
segment M1 T1
segment M2 L2
segment M2 T2
label 1.2,1.5 "0,02"
label 1.2,-1.5 "0,98"
label 4.4,3 "0,95"
label 4.4,1.1 "0,05"
label 4.4,-1.1 "0,1"
label 4.4,-3 "0,9"
:::

:::example Đúng/Sai: xét nghiệm sàng lọc
Một bệnh có tỉ lệ người mắc trong cộng đồng là $2\%$. Một xét nghiệm cho kết quả dương tính với $95\%$ người mắc bệnh và với $10\%$ người không mắc bệnh. Chọn ngẫu nhiên một người để xét nghiệm. Gọi $B$ là biến cố "người đó mắc bệnh", $A$ là biến cố "kết quả dương tính".

a) $P(\overline B)=0{,}98$.

b) $P(A)=0{,}117$.

c) Nếu kết quả dương tính thì khả năng người đó mắc bệnh lớn hơn $50\%$.

d) $P(B\mid A)\approx0{,}16$ (làm tròn đến hàng phần trăm).

**Lời giải.** Đề cho $P(B)=0{,}02$, $P(A\mid B)=0{,}95$, $P(A\mid\overline B)=0{,}1$; ta đọc các nhánh trên sơ đồ cây.

a) **Đúng.** $P(\overline B)=1-0{,}02=0{,}98$.

b) **Đúng.** Theo công thức xác suất toàn phần:

$$P(A)=0{,}02\cdot0{,}95+0{,}98\cdot0{,}1=0{,}019+0{,}098=0{,}117.$$

c) **Sai.** Theo công thức Bayes, $P(B\mid A)=\dfrac{0{,}019}{0{,}117}\approx0{,}162<0{,}5$.

d) **Đúng.** Làm tròn $0{,}162$ đến hàng phần trăm được $0{,}16$.

Vậy đáp án là a) Đúng, b) Đúng, c) Sai, d) Đúng.

:::

:::warning Bẫy thường gặp về xác suất
- **Nhầm $P(A\mid B)$ với $P(B\mid A)$.** Câu "biết … " cho biết biến cố nào đứng sau dấu $\mid$.
- **Nhầm xung khắc với độc lập.** Xung khắc thì cộng xác suất; độc lập thì nhân xác suất.
:::

## Thuật ngữ

:::terms
- mẫu số liệu ghép nhóm | grouped data
- giá trị đại diện | class midpoint
- trung vị | median
- tứ phân vị | quartile
- mốt | mode
- phương sai | variance
- độ lệch chuẩn | standard deviation
- xác suất có điều kiện | conditional probability
- biến cố độc lập | independent events
- công thức xác suất toàn phần | law of total probability
- công thức Bayes | Bayes' theorem
- sơ đồ cây | tree diagram
:::

## Bài tập

Các bài xếp từ dễ đến khó, có ghi dạng câu hỏi trong đề thi.

:::exercise Trắc nghiệm
Thời gian chờ (phút) của $10$ khách hàng được ghép nhóm: nhóm $[0; 4)$ có $3$ người, nhóm $[4; 8)$ có $5$ người, nhóm $[8; 12)$ có $2$ người. Số trung bình của mẫu số liệu là

**A.** $5{,}6$. **B.** $6$. **C.** $18{,}67$. **D.** $3{,}6$.

::hint
**Kiến thức:** $\bar x=\dfrac{\sum n_ix_i}{n}$ với $x_i$ là giá trị đại diện (trung điểm nhóm).

**Gợi ý các bước:**
1. Các giá trị đại diện là $2$, $6$, $10$.
2. Tính tổng $n_ix_i$ rồi chia cho $10$.

::solution
$\bar x=\dfrac{3\cdot2+5\cdot6+2\cdot10}{10}=\dfrac{56}{10}=5{,}6$. Phương án B là trung bình của ba giá trị đại diện, phương án C chia cho $3$ thay vì $10$, phương án D dùng đầu mút trái.

**Đáp số.** A.
:::

:::exercise Trắc nghiệm
Điểm kiểm tra của $50$ học sinh được cho trong bảng. Trung vị của mẫu số liệu (làm tròn đến hàng phần trăm) là

| Điểm | $[5; 6)$ | $[6; 7)$ | $[7; 8)$ | $[8; 9)$ | $[9; 10)$ |
|---|---|---|---|---|---|
| Số học sinh | $4$ | $8$ | $16$ | $14$ | $8$ |

**A.** $7{,}81$. **B.** $7{,}5$. **C.** $6{,}81$. **D.** $7{,}93$.

::hint
**Kiến thức:** nhóm chứa trung vị là nhóm đầu tiên có tần số tích luỹ $\ge\dfrac n2$.

**Gợi ý các bước:**
1. Tần số tích luỹ: $4$, $12$, $28$, $42$, $50$; $\dfrac n2=25$.
2. Thay vào công thức với $C=12$, $n_m=16$.

::solution
$M_e=7+\dfrac{25-12}{16}\cdot1=7{,}8125\approx7{,}81$. Phương án C lấy $C=28$ (gồm cả nhóm chứa trung vị), phương án D dùng nhầm tần số $14$ của nhóm sau, phương án B chỉ là trung điểm nhóm.

**Đáp số.** A.
:::

:::exercise Đúng/Sai
Cân nặng (kg) của $20$ học sinh: nhóm $[45; 50)$ có $5$ bạn, nhóm $[50; 55)$ có $10$ bạn, nhóm $[55; 60)$ có $5$ bạn.

a) Mốt của mẫu số liệu thuộc nhóm $[55; 60)$.

b) Tứ phân vị thứ nhất $Q_1=50$.

c) Phương sai của mẫu số liệu bằng $12{,}5$.

d) Độ lệch chuẩn của mẫu số liệu bằng $12{,}5$ kg.

::hint
**Kiến thức:** mốt thuộc nhóm có tần số lớn nhất; $s^2=\dfrac{\sum n_i(x_i-\bar x)^2}{n}$, $s=\sqrt{s^2}$.

**Gợi ý các bước:**
1. Giá trị đại diện $47{,}5$; $52{,}5$; $57{,}5$, trung bình $\bar x=52{,}5$.
2. Tần số tích luỹ $5$, $15$, $20$; $\dfrac n4=5$.

::solution
a) **Sai.** Nhóm có tần số lớn nhất là $[50; 55)$.

b) **Đúng.** Nhóm đầu tiên có tần số tích luỹ $\ge5$ là $[45; 50)$: $Q_1=45+\dfrac{5-0}{5}\cdot5=50$.

c) **Đúng.** $s^2=\dfrac{5\cdot(-5)^2+10\cdot0^2+5\cdot5^2}{20}=\dfrac{250}{20}=12{,}5$.

d) **Sai.** $s=\sqrt{12{,}5}\approx3{,}54$ kg.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise Trả lời ngắn
Tính khoảng tứ phân vị của mẫu số liệu ghép nhóm sau (làm tròn kết quả đến hàng phần mười).

| Nhóm | $[0; 10)$ | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ |
|---|---|---|---|---|
| Tần số | $5$ | $12$ | $15$ | $8$ |

::hint
**Kiến thức:** $\Delta_Q=Q_3-Q_1$; vị trí của $Q_1$, $Q_3$ là $\dfrac n4$, $\dfrac{3n}{4}$.

**Gợi ý các bước:**
1. $n=40$, tần số tích luỹ $5$, $17$, $32$, $40$.
2. Vị trí $10$ thuộc $[10; 20)$, vị trí $30$ thuộc $[20; 30)$.

::solution
$$Q_1=10+\frac{10-5}{12}\cdot10=\frac{85}{6}\approx14{,}17,\qquad Q_3=20+\frac{30-17}{15}\cdot10=\frac{86}{3}\approx28{,}67.$$

Để tránh sai số làm tròn, ta trừ hai phân số: $\Delta_Q=\dfrac{86}{3}-\dfrac{85}{6}=\dfrac{87}{6}=14{,}5$.

**Đáp số.** $14{,}5$.
:::

:::exercise Trắc nghiệm
Cho hai biến cố độc lập $A$, $B$ với $P(A)=0{,}4$ và $P(B)=0{,}5$. Xác suất $P(A\cup B)$ bằng

**A.** $0{,}9$. **B.** $0{,}2$. **C.** $0{,}7$. **D.** $0{,}3$.

::hint
**Kiến thức:** $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ và $P(A\cap B)=P(A)P(B)$.

**Gợi ý các bước:**
1. Tính $P(A\cap B)$.
2. Thay vào công thức cộng.

::solution
$P(A\cap B)=0{,}2$, nên $P(A\cup B)=0{,}4+0{,}5-0{,}2=0{,}7$. Phương án A coi $A$, $B$ xung khắc; phương án B là $P(A\cap B)$; phương án D là $1-0{,}7$.

**Đáp số.** C.
:::

:::exercise Trả lời ngắn
Một hộp có $10$ tấm thẻ, trong đó có $4$ thẻ đỏ. Lấy lần lượt hai thẻ, không hoàn lại. Tính xác suất cả hai thẻ đều đỏ (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** $P(A\cap B)=P(A)\cdot P(B\mid A)$.

**Gợi ý các bước:**
1. $P(\text{lần 1 đỏ})=\dfrac{4}{10}$.
2. Sau khi lấy một thẻ đỏ, còn $3$ thẻ đỏ trong $9$ thẻ.

::solution
$P=\dfrac{4}{10}\cdot\dfrac39=\dfrac{2}{15}\approx0{,}133$.

**Đáp số.** $0{,}13$.
:::

:::exercise Trả lời ngắn
Trong hộp thư của một công ty, $30\%$ số thư là thư rác. Bộ lọc đánh dấu "rác" cho $90\%$ thư rác và cho $5\%$ thư bình thường. Một thư bị đánh dấu "rác". Tính xác suất thư đó thật sự là thư rác (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** công thức xác suất toàn phần và công thức Bayes.

**Gợi ý các bước:**
1. Tính $P(\text{đánh dấu})=0{,}3\cdot0{,}9+0{,}7\cdot0{,}05$.
2. Chia nhánh "rác và bị đánh dấu" cho kết quả đó.

::solution
$P(\text{đánh dấu})=0{,}27+0{,}035=0{,}305$, nên $P(\text{rác}\mid\text{đánh dấu})=\dfrac{0{,}27}{0{,}305}\approx0{,}885$.

**Đáp số.** $0{,}89$.
:::

:::exercise Tự luận
Ở một thành phố, xác suất một ngày có mưa là $0{,}3$. Nếu trời mưa, xác suất bạn Minh đi học muộn là $0{,}4$; nếu không mưa, xác suất đó là $0{,}1$. Tính xác suất Minh đi học muộn vào một ngày bất kì. Biết hôm nay Minh đi học muộn, tính xác suất hôm nay trời mưa.

::hint
**Kiến thức:** vẽ sơ đồ cây với hai nhánh "mưa" và "không mưa".

**Gợi ý các bước:**
1. Dùng công thức xác suất toàn phần cho biến cố "đi muộn".
2. Dùng công thức Bayes cho "mưa khi biết đi muộn".

::solution
$P(\text{muộn})=0{,}3\cdot0{,}4+0{,}7\cdot0{,}1=0{,}12+0{,}07=0{,}19$. Khi đó $P(\text{mưa}\mid\text{muộn})=\dfrac{0{,}12}{0{,}19}=\dfrac{12}{19}\approx0{,}63$.

**Đáp số.** $0{,}19$ và khoảng $0{,}63$.
:::

:::exercise Trả lời ngắn
Tính độ lệch chuẩn của mẫu số liệu ghép nhóm sau.

| Nhóm | $[2; 4)$ | $[4; 6)$ | $[6; 8)$ | $[8; 10)$ |
|---|---|---|---|---|
| Tần số | $4$ | $8$ | $6$ | $2$ |

::hint
**Kiến thức:** $s^2=\dfrac{\sum n_ix_i^2}{n}-\bar x^2$.

**Gợi ý các bước:**
1. Giá trị đại diện $3$, $5$, $7$, $9$; tính $\bar x$.
2. Tính trung bình các bình phương, trừ $\bar x^2$, rồi lấy căn.

::solution
$\bar x=\dfrac{12+40+42+18}{20}=5{,}6$. $\dfrac{4\cdot9+8\cdot25+6\cdot49+2\cdot81}{20}=\dfrac{692}{20}=34{,}6$, nên $s^2=34{,}6-31{,}36=3{,}24$ và $s=1{,}8$.

**Đáp số.** $1{,}8$.
:::

:::exercise Trả lời ngắn (thử thách)
Một cửa hàng nhập linh kiện từ ba nhà cung cấp X, Y, Z với tỉ lệ $50\%$, $30\%$, $20\%$. Tỉ lệ linh kiện lỗi của X, Y, Z lần lượt là $1\%$, $2\%$, $3\%$. Chọn ngẫu nhiên một linh kiện thì thấy bị lỗi. Tính xác suất linh kiện đó do Z cung cấp (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** công thức xác suất toàn phần với ba trường hợp X, Y, Z; công thức Bayes.

**Gợi ý các bước:**
1. Tính $P(\text{lỗi})$ bằng tổng ba nhánh.
2. Chia nhánh của Z cho $P(\text{lỗi})$.

::solution
$P(\text{lỗi})=0{,}5\cdot0{,}01+0{,}3\cdot0{,}02+0{,}2\cdot0{,}03=0{,}005+0{,}006+0{,}006=0{,}017$. Khi đó $P(Z\mid\text{lỗi})=\dfrac{0{,}006}{0{,}017}\approx0{,}353$.

**Đáp số.** $0{,}35$.
:::

## Kiểm tra mini

:::quiz
::mc
Một mẫu số liệu ghép nhóm có nhóm $[10; 20)$ với tần số $2$, nhóm $[20; 30)$ với tần số $5$, nhóm $[30; 40)$ với tần số $3$. Số trung bình của mẫu là
A. $25$.
B. $26$.
C. $86{,}67$.
D. $21$.
::key B
$\bar x=\dfrac{2\cdot15+5\cdot25+3\cdot35}{10}=26$. Phương án A là giá trị đại diện của nhóm giữa, phương án C chia cho $3$, phương án D dùng đầu mút trái.

::mc
Với mẫu số liệu ở câu trên, nhóm chứa tứ phân vị thứ ba $Q_3$ là
A. $[10; 20)$.
B. $[20; 30)$.
C. $[30; 40)$.
D. Không xác định được.
::key C
Tần số tích luỹ là $2$, $7$, $10$ và $\dfrac{3n}{4}=7{,}5$; nhóm đầu tiên có tần số tích luỹ $\ge7{,}5$ là $[30; 40)$. Phương án B là nhóm có tần số lớn nhất.

::mc
Cho hai biến cố $A$, $B$ với $P(B)>0$. Xác suất của $A$ khi biết $B$ đã xảy ra là
A. $P(A\mid B)=\dfrac{P(A\cap B)}{P(A)}$.
B. $P(A\mid B)=P(A)\cdot P(B)$.
C. $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$.
D. $P(A\mid B)=\dfrac{P(A)}{P(B)}$.
::key C
Ta thu hẹp không gian mẫu về $B$, nên chia cho $P(B)$. Phương án A là $P(B\mid A)$; phương án B chỉ đúng với $P(A\cap B)$ khi $A$, $B$ độc lập.

::mc
Cho $P(A)=0{,}3$ và $P(B\mid A)=0{,}5$. Khi đó $P(A\cap B)$ bằng
A. $0{,}15$.
B. $0{,}8$.
C. $0{,}6$.
D. $0{,}2$.
::key A
$P(A\cap B)=P(A)\cdot P(B\mid A)=0{,}3\cdot0{,}5=0{,}15$. Phương án B cộng hai số, phương án C chia $0{,}3$ cho $0{,}5$.

::tf
Một túi có $5$ bi đỏ và $3$ bi trắng. Lấy lần lượt hai bi, không hoàn lại.
a) Xác suất bi thứ nhất màu đỏ là $\dfrac58$.
b) Xác suất bi thứ hai màu đỏ, biết bi thứ nhất màu đỏ, là $\dfrac47$.
c) Xác suất cả hai bi đều màu đỏ là $\dfrac{5}{14}$.
d) Xác suất bi thứ hai màu đỏ là $\dfrac47$.
::key Đ Đ Đ S
a) Đúng. b) Đúng: còn $4$ bi đỏ trong $7$ bi. c) Đúng: $\dfrac58\cdot\dfrac47=\dfrac{20}{56}=\dfrac5{14}$. d) Sai: theo công thức xác suất toàn phần, $\dfrac58\cdot\dfrac47+\dfrac38\cdot\dfrac57=\dfrac{35}{56}=\dfrac58$.

::sa
Mẫu số liệu ghép nhóm có nhóm $[0; 2)$ tần số $3$, nhóm $[2; 4)$ tần số $4$, nhóm $[4; 6)$ tần số $3$. Tính độ lệch chuẩn của mẫu (làm tròn kết quả đến hàng phần trăm).
::key 1,55
Giá trị đại diện $1$, $3$, $5$ và $\bar x=3$. $s^2=\dfrac{3\cdot4+4\cdot0+3\cdot4}{10}=2{,}4$, nên $s=\sqrt{2{,}4}\approx1{,}549$, làm tròn được $1{,}55$.

::sa
Cho $P(B)=0{,}4$, $P(A\mid B)=0{,}5$ và $P(A\mid\overline B)=0{,}25$. Tính $P(B\mid A)$ (làm tròn kết quả đến hàng phần trăm).
::key 0,57
$P(A)=0{,}4\cdot0{,}5+0{,}6\cdot0{,}25=0{,}35$, nên $P(B\mid A)=\dfrac{0{,}2}{0{,}35}\approx0{,}571$, làm tròn được $0{,}57$.
:::
