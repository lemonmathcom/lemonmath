---
title: Biến cố và định nghĩa cổ điển của xác suất
description: Mô tả phép thử ngẫu nhiên bằng không gian mẫu và biến cố, rồi tính xác suất khi các kết quả đồng khả năng, dùng quy tắc đếm và biến cố đối.
minutes: 22
---

:::goals
- Mô tả một phép thử ngẫu nhiên bằng không gian mẫu $\Omega$.
- Viết biến cố dưới dạng tập con của $\Omega$, kể cả biến cố chắc chắn, biến cố không thể và biến cố đối.
- Tính $P(A)=\dfrac{n(A)}{n(\Omega)}$ khi các kết quả đồng khả năng, dùng quy tắc đếm và tổ hợp khi cần.
- Dùng các tính chất $0\le P(A)\le 1$ và $P(\overline{A})=1-P(A)$.
:::

Lớp 10A có $40$ học sinh, gồm $22$ bạn nữ và $18$ bạn nam. Cô giáo bốc thăm ngẫu nhiên $2$ bạn đi dự lễ kỉ niệm của trường. Khả năng cả hai bạn được chọn đều là nữ là bao nhiêu? Và khả năng có ít nhất một bạn nam là bao nhiêu?

Ta không thể biết trước ai sẽ được chọn, nhưng ta có thể đo **khả năng** xảy ra bằng một con số từ $0$ đến $1$. Bước đầu tiên luôn là liệt kê (hoặc đếm) cẩn thận **những điều có thể xảy ra**.

## Phép thử và không gian mẫu

Tung một đồng xu hai lần. Trước khi tung, ta không biết kết quả, nhưng biết chắc nó là một trong bốn khả năng. Kí hiệu $S$ là mặt sấp, $N$ là mặt ngửa và ghi lần lượt kết quả hai lần tung:

$$SS,\quad SN,\quad NS,\quad NN.$$

Câu "có đúng một lần sấp" đúng với $SN$ và $NS$, sai với hai kết quả còn lại. Như vậy mỗi câu hỏi về kết quả tương ứng với **một tập con** của tập bốn kết quả. Ta đặt tên cho các khái niệm này.

:::definition Phép thử, không gian mẫu, biến cố
- **Phép thử ngẫu nhiên** là một hoạt động mà ta không đoán trước được kết quả, dù biết mọi kết quả có thể xảy ra.
- Tập hợp mọi kết quả có thể xảy ra là **không gian mẫu**, kí hiệu $\Omega$.
- **Biến cố** $A$ là một tập con của $\Omega$. Mỗi kết quả thuộc $A$ gọi là một kết quả **thuận lợi** cho $A$.
- $\Omega$ là **biến cố chắc chắn**, $\varnothing$ là **biến cố không thể**.
- **Biến cố đối** của $A$ là $\overline{A}=\Omega\setminus A$: $\overline{A}$ xảy ra khi và chỉ khi $A$ không xảy ra.
:::

:::example Tung đồng xu hai lần
Tung một đồng xu hai lần. Viết $\Omega$, biến cố $A$: "có đúng một lần sấp", biến cố $B$: "lần đầu ngửa", và biến cố đối $\overline{A}$.

**Lời giải.** Ta liệt kê các kết quả theo thứ tự lần $1$, lần $2$:

$$\Omega=\{SS; SN; NS; NN\},\quad A=\{SN; NS\},\quad B=\{NS; NN\},\quad \overline{A}=\{SS; NN\}.$$

Vậy $n(\Omega)=4$, $n(A)=2$, $n(B)=2$; biến cố $\overline{A}$ là "hai lần tung cho cùng một mặt".
:::

## Định nghĩa cổ điển của xác suất

Với đồng xu cân đối, bốn kết quả trên có khả năng như nhau. Biến cố $A$ chứa $2$ trong $4$ kết quả, nên ta nói khả năng $A$ xảy ra là $\dfrac24=\dfrac12$.

:::definition Định nghĩa cổ điển của xác suất
Cho phép thử có không gian mẫu $\Omega$ gồm hữu hạn kết quả **đồng khả năng**. Xác suất của biến cố $A$ là
$$P(A)=\frac{n(A)}{n(\Omega)}.$$
:::

:::theorem Tính chất
- $0\le P(A)\le 1$, $P(\Omega)=1$, $P(\varnothing)=0$.
- $P(\overline{A})=1-P(A)$.
:::

**Vì sao?** Vì $\varnothing\subset A\subset\Omega$ nên $0\le n(A)\le n(\Omega)$; chia cho $n(\Omega)$ được tính chất thứ nhất. Các kết quả của $\Omega$ chia thành hai phần không giao nhau là $A$ và $\overline{A}$, nên $n(A)+n(\overline{A})=n(\Omega)$; chia cho $n(\Omega)$ được $P(A)+P(\overline{A})=1$.

:::example Gieo một con xúc xắc
Gieo một con xúc xắc cân đối. Tính xác suất của các biến cố $A$: "số chấm là số nguyên tố", $B$: "số chấm không nhỏ hơn $5$", $C$: "số chấm chia hết cho $7$".

**Lời giải.** $\Omega=\{1; 2; 3; 4; 5; 6\}$ có $6$ kết quả đồng khả năng. Ta liệt kê các kết quả thuận lợi:

$$A=\{2; 3; 5\},\quad B=\{5; 6\},\quad C=\varnothing.$$

Do đó $P(A)=\dfrac36=\dfrac12$, $P(B)=\dfrac26=\dfrac13$, $P(C)=0$.

Vậy $P(A)=\dfrac12$, $P(B)=\dfrac13$ và $C$ là biến cố không thể.
:::

Khi gieo hai con xúc xắc, liệt kê từng kết quả sẽ dài, nên ta dùng một bảng.

:::example Tổng số chấm của hai con xúc xắc
Gieo hai con xúc xắc cân đối. Tính xác suất để tổng số chấm bằng $7$, và để tổng số chấm không nhỏ hơn $10$.

**Lời giải.** Mỗi kết quả là một cặp có thứ tự (số chấm con thứ nhất, con thứ hai), nên theo quy tắc nhân $n(\Omega)=6\cdot6=36$. Bảng ghi tổng số chấm của từng cặp:

| Con 1 \ Con 2 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 6 | 7 | 8 | 9 | 10 | 11 | 12 |

Tổng bằng $7$ xuất hiện $6$ lần (đường chéo phụ). Tổng $10$, $11$, $12$ xuất hiện $3+2+1=6$ lần. Do đó

$$P(\text{tổng}=7)=\frac{6}{36}=\frac16,\qquad P(\text{tổng}\ge10)=\frac{6}{36}=\frac16.$$

Vậy cả hai biến cố đều có xác suất $\dfrac16$.
:::

## Dùng tổ hợp để đếm

Khi lấy nhiều đối tượng cùng lúc, ta không liệt kê mà đếm $n(\Omega)$ và $n(A)$ bằng các công thức của bài [Hoán vị, chỉnh hợp và tổ hợp](lesson:permutations-combinations).

:::example Lấy bi trong hộp
Một hộp có $5$ viên bi đỏ và $3$ viên bi xanh, cùng kích thước. Lấy ngẫu nhiên đồng thời $2$ viên. Tính xác suất để (a) hai viên đều đỏ; (b) hai viên khác màu.

**Lời giải.** Lấy đồng thời nên không có thứ tự: mỗi kết quả là một tổ hợp chập $2$ của $8$ viên, $n(\Omega)=C_8^2=28$.

- (a) Chọn $2$ trong $5$ viên đỏ: $n(A)=C_5^2=10$.
- (b) Chọn $1$ đỏ **rồi** $1$ xanh: $n(B)=5\cdot3=15$.

$$P(A)=\frac{10}{28}=\frac{5}{14},\qquad P(B)=\frac{15}{28}.$$

Vậy xác suất hai viên đều đỏ là $\dfrac{5}{14}$, xác suất hai viên khác màu là $\dfrac{15}{28}$.
:::

## Dùng biến cố đối

Với các câu hỏi "**có ít nhất một**", biến cố đối ("không có cái nào") thường chỉ có một trường hợp, nên dễ đếm hơn nhiều.

:::example Ít nhất một lần sấp
Tung một đồng xu cân đối $3$ lần. Tính xác suất để có ít nhất một lần sấp.

**Lời giải.** Mỗi lần tung có $2$ kết quả, nên $n(\Omega)=2^3=8$. Gọi $A$ là "có ít nhất một lần sấp". Biến cố đối $\overline{A}$ là "không lần nào sấp", chỉ gồm một kết quả $NNN$:

$$P(A)=1-P(\overline{A})=1-\frac18=\frac78.$$

Vậy xác suất có ít nhất một lần sấp là $\dfrac78$.
:::

Bây giờ ta trả lời câu hỏi bốc thăm ở đầu bài.

:::example Bốc thăm hai bạn đi dự lễ
Lớp có $22$ nữ và $18$ nam. Chọn ngẫu nhiên $2$ bạn. Tính xác suất để (a) cả hai bạn là nữ; (b) có ít nhất một bạn nam.

**Lời giải.**

*Hiểu đề.* Hai bạn được chọn cùng lúc, không có thứ tự; mọi nhóm $2$ bạn có cùng khả năng được chọn.

*Tìm cách giải.* Đếm $n(\Omega)$ và $n(A)$ bằng tổ hợp; câu (b) là biến cố đối của câu (a).

*Giải.* Ta có $n(\Omega)=C_{40}^2=780$ và $n(A)=C_{22}^2=231$. Do đó

$$P(A)=\frac{231}{780}=\frac{77}{260}\approx0{,}30,\qquad P(\overline{A})=1-\frac{77}{260}=\frac{183}{260}\approx0{,}70.$$

*Nhìn lại.* Dù nữ nhiều hơn nam, khả năng cả hai đều là nữ chỉ khoảng $30\%$, vì cả hai lần "trúng nữ" đều phải xảy ra.

Vậy xác suất cả hai bạn là nữ là $\dfrac{77}{260}$, và xác suất có ít nhất một bạn nam là $\dfrac{183}{260}$.
:::

:::warning Những sai lầm thường gặp
- **Dùng định nghĩa cổ điển khi kết quả không đồng khả năng.** Nói "khi gieo hai con xúc xắc, tổng có $11$ giá trị từ $2$ đến $12$, nên $P(\text{tổng}=7)=\dfrac1{11}$". Sai vì các tổng không đồng khả năng (tổng $2$ chỉ có $1$ cặp, tổng $7$ có $6$ cặp). Đúng: đếm trên $36$ cặp có thứ tự, được $\dfrac16$.
- **Lẫn lộn có thứ tự và không có thứ tự.** Lấy đồng thời $2$ viên bi nhưng đếm $n(\Omega)=A_8^2=56$ trong khi lại đếm $n(A)=C_5^2=10$. Sai vì hai phép đếm phải cùng một kiểu. Đúng: dùng tổ hợp cho cả hai (hoặc chỉnh hợp cho cả hai).
- **Phủ định sai "ít nhất một".** Viết biến cố đối của "có ít nhất một bạn nam" là "có ít nhất một bạn nữ". Sai vì hai biến cố này có thể cùng xảy ra. Đúng: biến cố đối là "không có bạn nam nào", tức cả hai là nữ.
- **Xác suất lớn hơn $1$.** Nếu tính ra $P(A)>1$ hay $P(A)<0$ thì chắc chắn đã đếm sai.
:::

## Thuật ngữ

:::terms
- phép thử ngẫu nhiên | random experiment
- kết quả | outcome
- không gian mẫu | sample space
- biến cố | event
- kết quả thuận lợi | favourable outcome
- biến cố chắc chắn | certain event
- biến cố không thể | impossible event
- biến cố đối | complementary event
- đồng khả năng | equally likely
- xác suất | probability
:::

## Tóm tắt

- **Không gian mẫu** $\Omega$: tập mọi kết quả của phép thử. **Biến cố**: tập con của $\Omega$.
- $\Omega$ là biến cố chắc chắn, $\varnothing$ là biến cố không thể, $\overline{A}=\Omega\setminus A$ là biến cố đối.
- Kết quả đồng khả năng: $P(A)=\dfrac{n(A)}{n(\Omega)}$.
- $0\le P(A)\le1$, $P(\Omega)=1$, $P(\varnothing)=0$, $P(\overline{A})=1-P(A)$.
- Đếm $n(\Omega)$, $n(A)$ bằng quy tắc đếm, bảng, hoặc tổ hợp; hai phép đếm phải cùng kiểu (cùng có thứ tự hoặc cùng không).
- "Có ít nhất một": tính qua biến cố đối "không có cái nào".

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Gieo một con xúc xắc cân đối. Tính xác suất để số chấm xuất hiện chia hết cho $3$.

::hint
**Kiến thức:** $P(A)=\dfrac{n(A)}{n(\Omega)}$.

**Gợi ý các bước:**
1. Viết $\Omega$.
2. Liệt kê các kết quả chia hết cho $3$.

::solution
$\Omega=\{1; 2; 3; 4; 5; 6\}$, $A=\{3; 6\}$, nên $P(A)=\dfrac26=\dfrac13$.

**Đáp số.** $\dfrac13$.
:::

:::exercise
Tung một đồng xu cân đối $3$ lần. Viết không gian mẫu và tính xác suất để có đúng hai lần sấp.

::hint
**Kiến thức:** mỗi kết quả là một dãy ba chữ $S$, $N$; quy tắc nhân cho $n(\Omega)=2^3$.

**Gợi ý các bước:**
1. Liệt kê $8$ kết quả.
2. Chọn những kết quả có đúng hai chữ $S$.

::solution
$\Omega=\{SSS; SSN; SNS; SNN; NSS; NSN; NNS; NNN\}$. Các kết quả thuận lợi: $SSN$, $SNS$, $NSS$. Vậy $P=\dfrac38$.

**Đáp số.** $\dfrac38$.
:::

:::exercise
Gieo hai con xúc xắc cân đối. Tính xác suất để (a) tổng số chấm bằng $8$; (b) hai con có số chấm bằng nhau.

::hint
**Kiến thức:** $n(\Omega)=36$; dùng bảng tổng số chấm.

**Gợi ý các bước:**
1. Liệt kê các cặp có tổng $8$.
2. Liệt kê các cặp $(1; 1), \dots, (6; 6)$.

::solution
(a) Các cặp $(2; 6)$, $(3; 5)$, $(4; 4)$, $(5; 3)$, $(6; 2)$: $P=\dfrac5{36}$. (b) Có $6$ cặp bằng nhau: $P=\dfrac6{36}=\dfrac16$.

**Đáp số.** (a) $\dfrac5{36}$; (b) $\dfrac16$.
:::

:::exercise
Một hộp có $4$ quả bóng đỏ và $6$ quả bóng trắng. Lấy ngẫu nhiên đồng thời $2$ quả. Tính xác suất để cả hai quả đều trắng.

::hint
**Kiến thức:** lấy đồng thời nên dùng tổ hợp cho cả $n(\Omega)$ và $n(A)$.

**Gợi ý các bước:**
1. Tính $n(\Omega)=C_{10}^2$.
2. Tính $n(A)=C_6^2$.

::solution
$n(\Omega)=C_{10}^2=45$, $n(A)=C_6^2=15$, nên $P(A)=\dfrac{15}{45}=\dfrac13$.

**Đáp số.** $\dfrac13$.
:::

:::exercise
Gieo hai con xúc xắc cân đối. Mỗi khẳng định sau đúng hay sai?

a) Không gian mẫu có $36$ kết quả.
b) Xác suất để tổng số chấm bằng $7$ là $\dfrac7{36}$.
c) Xác suất để tích số chấm là số chẵn bằng $\dfrac34$.
d) Xác suất để có ít nhất một con ra mặt $6$ chấm bằng $\dfrac16$.

::hint
**Kiến thức:** $n(\Omega)=6\cdot6$; tích lẻ khi và chỉ khi cả hai số đều lẻ; dùng biến cố đối cho c) và d).

**Gợi ý các bước:**
1. Đếm các cặp có tổng $7$.
2. Đếm các cặp có tích lẻ, rồi lấy phần bù.
3. Đếm các cặp không có mặt $6$, rồi lấy phần bù.

::solution
a) **Đúng.** $6\cdot6=36$.

b) **Sai.** Có $6$ cặp tổng $7$, nên xác suất là $\dfrac6{36}=\dfrac16$.

c) **Đúng.** Tích lẻ khi cả hai số lẻ: $3\cdot3=9$ cặp. Vậy $P(\text{tích chẵn})=1-\dfrac9{36}=\dfrac34$.

d) **Sai.** Không có mặt $6$: $5\cdot5=25$ cặp. Vậy $P=1-\dfrac{25}{36}=\dfrac{11}{36}$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Một đội có $20$ bạn nam và $15$ bạn nữ. Chọn ngẫu nhiên $3$ bạn. Tính xác suất để có ít nhất một bạn nữ (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** $P(A)=1-P(\overline{A})$; $\overline{A}$: "cả ba bạn đều là nam".

**Gợi ý các bước:**
1. Tính $n(\Omega)=C_{35}^3$.
2. Tính $n(\overline{A})=C_{20}^3$.
3. Lấy $1$ trừ tỉ số, rồi làm tròn.

::solution
$n(\Omega)=C_{35}^3=6545$, $n(\overline{A})=C_{20}^3=1140$. Do đó
$$P(A)=1-\frac{1140}{6545}=\frac{1081}{1309}\approx0{,}83.$$

**Đáp số.** $0{,}83$.
:::

:::exercise
Khoá số của một chiếc vali có ba vòng, mỗi vòng có các chữ số từ $0$ đến $9$. Bạn Hà quên mã, chỉ nhớ ba chữ số của mã khác nhau. Hà thử ngẫu nhiên một mã có ba chữ số khác nhau. Tính xác suất Hà mở được khoá ngay lần thử đó.

::hint
**Kiến thức:** thứ tự các chữ số trên khoá quan trọng, nên dùng chỉnh hợp.

**Gợi ý các bước:**
1. Đếm số mã có ba chữ số khác nhau: $A_{10}^3$.
2. Chỉ có một mã đúng.

::solution
Số mã có ba chữ số khác nhau là $A_{10}^3=10\cdot9\cdot8=720$, và chỉ một mã đúng. Vậy $P=\dfrac1{720}$.

**Đáp số.** $\dfrac1{720}$.
:::

:::exercise
(Ôn tập bài [Quy tắc đếm](lesson:counting-rules)) Từ các chữ số $1, 2, 3, 4, 5$ lập ngẫu nhiên một số có ba chữ số khác nhau. Tính xác suất để số đó là số chẵn.

::hint
**Kiến thức:** quy tắc nhân; điền vị trí bị ràng buộc (hàng đơn vị) trước.

**Gợi ý các bước:**
1. Đếm tất cả các số: $5\cdot4\cdot3$.
2. Đếm số chẵn: hàng đơn vị là $2$ hoặc $4$.

::solution
$n(\Omega)=5\cdot4\cdot3=60$. Số chẵn: hàng đơn vị $2$ cách, hàng trăm $4$ cách, hàng chục $3$ cách, được $24$ số. Vậy $P=\dfrac{24}{60}=\dfrac25$.

**Đáp số.** $\dfrac25$.
:::

:::exercise
(Ôn tập bài [Tập hợp và các phép toán trên tập hợp](lesson:sets-and-set-operations)) Một hộp có $30$ tấm thẻ đánh số từ $1$ đến $30$. Rút ngẫu nhiên một tấm. Tính xác suất để số trên thẻ chia hết cho $2$ hoặc cho $3$.

::hint
**Kiến thức:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$; số chia hết cho cả $2$ và $3$ là số chia hết cho $6$.

**Gợi ý các bước:**
1. Đếm các số chia hết cho $2$, cho $3$, cho $6$.
2. Tính $n(A\cup B)$ rồi chia cho $30$.

::solution
$n(A)=15$, $n(B)=10$, $n(A\cap B)=5$, nên $n(A\cup B)=15+10-5=20$ và $P=\dfrac{20}{30}=\dfrac23$.

**Đáp số.** $\dfrac23$.
:::

:::exercise Thử thách
Xếp ngẫu nhiên năm bạn An, Bình, Chi, Dũng, Hà thành một hàng ngang. Tính xác suất để An và Bình đứng cạnh nhau.

::hint
**Kiến thức:** số hoán vị $n!$; buộc hai bạn thành một khối.

**Gợi ý các bước:**
1. Tính $n(\Omega)=5!$.
2. Coi An và Bình là một khối: $4!$ cách xếp các khối, nhân $2$ cách xếp trong khối.

::solution
$n(\Omega)=5!=120$. Số cách An và Bình đứng cạnh nhau: $2\cdot4!=48$. Vậy $P=\dfrac{48}{120}=\dfrac25$.

**Đáp số.** $\dfrac25$.
:::

## Kiểm tra mini

:::quiz
::mc
Tung một đồng xu hai lần ($S$: sấp, $N$: ngửa). Biến cố đối của biến cố "có ít nhất một lần sấp" là
A. $\{NN\}$.
B. $\{SS\}$.
C. $\{SN; NS\}$.
D. $\{SN; NS; NN\}$.
::key A
Biến cố đối xảy ra khi và chỉ khi "không có lần sấp nào", chỉ gồm kết quả $NN$. Phương án D là biến cố "có ít nhất một lần ngửa", có thể xảy ra cùng lúc với biến cố đã cho.

::mc
Gieo một con xúc xắc cân đối. Xác suất để số chấm xuất hiện là một ước của $6$ là
A. $\dfrac12$.
B. $\dfrac23$.
C. $\dfrac13$.
D. $\dfrac16$.
::key B
Các ước của $6$ trong $\Omega$ là $1, 2, 3, 6$, nên $P=\dfrac46=\dfrac23$. Phương án A quên ước $1$; C là xác suất của biến cố đối.

::mc
Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm bằng $9$ là
A. $\dfrac{1}{11}$.
B. $\dfrac{1}{18}$.
C. $\dfrac19$.
D. $\dfrac{4}{21}$.
::key C
$n(\Omega)=36$ cặp có thứ tự; tổng $9$ có các cặp $(3; 6)$, $(4; 5)$, $(5; 4)$, $(6; 3)$, nên $P=\dfrac{4}{36}=\dfrac19$. Phương án A coi $11$ giá trị của tổng là đồng khả năng; B chỉ đếm $2$ cặp không thứ tự.

::mc
Một hộp có $6$ viên bi đỏ và $4$ viên bi xanh. Lấy ngẫu nhiên đồng thời $3$ viên bi. Xác suất để cả $3$ viên đều đỏ là
A. $\dfrac{27}{125}$.
B. $\dfrac{1}{36}$.
C. $\dfrac35$.
D. $\dfrac16$.
::key D
$n(\Omega)=C_{10}^3=120$, $n(A)=C_6^3=20$, nên $P=\dfrac{20}{120}=\dfrac16$. Phương án B dùng chỉnh hợp $A_{10}^3=720$ cho $\Omega$ nhưng tổ hợp cho $A$; A tính như lấy có hoàn lại.

::tf
Một hộp có $20$ tấm thẻ đánh số từ $1$ đến $20$. Rút ngẫu nhiên một thẻ.
a) Không gian mẫu có $20$ phần tử.
b) Xác suất rút được thẻ ghi số chia hết cho $5$ là $\dfrac15$.
c) Xác suất rút được thẻ ghi số nguyên tố là $\dfrac{9}{20}$.
d) Xác suất rút được thẻ ghi số không chia hết cho $3$ là $\dfrac23$.
::key Đ Đ S S
a) Đúng. b) Đúng: $5, 10, 15, 20$, nên $P=\dfrac{4}{20}=\dfrac15$. c) Sai: có $8$ số nguyên tố ($2, 3, 5, 7, 11, 13, 17, 19$; số $1$ không phải số nguyên tố), $P=\dfrac25$. d) Sai: có $6$ số chia hết cho $3$, nên $P=1-\dfrac{6}{20}=\dfrac{7}{10}$.

::sa
Tung một đồng xu cân đối $4$ lần. Tính xác suất để có ít nhất một lần ngửa (làm tròn đến hàng phần trăm).
::key 0,94
$n(\Omega)=2^4=16$. Biến cố đối "không có lần ngửa nào" chỉ gồm $SSSS$, nên $P=1-\dfrac{1}{16}=\dfrac{15}{16}\approx0{,}94$.

::sa
Một đoàn $12$ người có $5$ người đến từ Hà Nội. Chọn ngẫu nhiên $3$ người. Tính xác suất để có ít nhất một người đến từ Hà Nội (làm tròn đến hàng phần trăm).
::key 0,84
$n(\Omega)=C_{12}^3=220$. Biến cố đối "không ai đến từ Hà Nội": $C_7^3=35$ cách. Vậy $P=1-\dfrac{35}{220}=\dfrac{37}{44}\approx0{,}84$.
:::
