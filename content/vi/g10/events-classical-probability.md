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

Không ai biết trước tờ thăm nào sẽ được bốc. Vậy mà ta vẫn có thể nói khá chắc rằng chuyện này "dễ xảy ra" hơn chuyện kia. Toán học làm cho cảm giác ấy trở nên chính xác: nó đo **khả năng** xảy ra bằng một con số từ $0$ đến $1$. Muốn có con số đó, việc đầu tiên bao giờ cũng là liệt kê (hoặc đếm) cho cẩn thận **những điều có thể xảy ra**.

## Phép thử và không gian mẫu

Ta bắt đầu từ một trò rất quen: tung một đồng xu hai lần. Trước khi tung, ta không biết kết quả, nhưng biết chắc nó là một trong bốn khả năng. Kí hiệu $S$ là mặt sấp, $N$ là mặt ngửa và ghi lần lượt kết quả hai lần tung:

$$SS,\quad SN,\quad NS,\quad NN.$$

Câu "có đúng một lần sấp" đúng với $SN$ và $NS$, sai với hai kết quả còn lại. Bạn để ý: mỗi câu nói về kết quả tương ứng với **một tập con** của tập bốn kết quả, gồm những kết quả làm câu đó đúng. Đó là ý quan trọng nhất của mục này. Bây giờ ta đặt tên cho các khái niệm.

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

Đồng xu cân đối thì không có lí do gì để mặt này được ưu ái hơn mặt kia, nên bốn kết quả trên có khả năng như nhau. Biến cố $A$ chiếm $2$ trong $4$ kết quả, nên thật tự nhiên khi nói khả năng $A$ xảy ra là $\dfrac24=\dfrac12$. Định nghĩa dưới đây chỉ viết ý ấy thành công thức.

:::definition Định nghĩa cổ điển của xác suất
Cho phép thử có không gian mẫu $\Omega$ gồm hữu hạn kết quả **đồng khả năng**. Xác suất của biến cố $A$ là
$$P(A)=\frac{n(A)}{n(\Omega)}.$$
:::

:::theorem Tính chất
- $0\le P(A)\le 1$, $P(\Omega)=1$, $P(\varnothing)=0$.
- $P(\overline{A})=1-P(A)$.
:::

**Vì sao các tính chất này đúng?** Vì $\varnothing\subset A\subset\Omega$ nên $0\le n(A)\le n(\Omega)$; chia cho $n(\Omega)$ được tính chất thứ nhất. Các kết quả của $\Omega$ chia thành hai phần không giao nhau là $A$ và $\overline{A}$, nên $n(A)+n(\overline{A})=n(\Omega)$; chia cho $n(\Omega)$ được $P(A)+P(\overline{A})=1$.

:::example Gieo một con xúc xắc
Gieo một con xúc xắc cân đối. Tính xác suất của các biến cố $A$: "số chấm là số nguyên tố", $B$: "số chấm không nhỏ hơn $5$", $C$: "số chấm chia hết cho $7$".

**Lời giải.** $\Omega=\{1; 2; 3; 4; 5; 6\}$ có $6$ kết quả đồng khả năng. Ta liệt kê các kết quả thuận lợi:

$$A=\{2; 3; 5\},\quad B=\{5; 6\},\quad C=\varnothing.$$

Do đó $P(A)=\dfrac36=\dfrac12$, $P(B)=\dfrac26=\dfrac13$, $P(C)=0$.

Vậy $P(A)=\dfrac12$, $P(B)=\dfrac13$ và $C$ là biến cố không thể.
:::

Với hai con xúc xắc, số kết quả đã lên tới $36$, liệt kê từng cái thì rất dễ sót. Một cái bảng sẽ giúp ta nhìn thấy hết mà không bỏ quên trường hợp nào.

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

Khi lấy nhiều đối tượng cùng lúc, số kết quả tăng rất nhanh, bảng cũng không đủ chỗ. Lúc này các công cụ đếm đã học phát huy tác dụng: ta đếm $n(\Omega)$ và $n(A)$ bằng các công thức của bài [Hoán vị, chỉnh hợp và tổ hợp](lesson:permutations-combinations).

:::example Lấy bi trong hộp
Một hộp có $5$ viên bi đỏ và $3$ viên bi xanh, cùng kích thước. Lấy ngẫu nhiên đồng thời $2$ viên. Tính xác suất của mỗi biến cố sau:

a) $A$: "Hai viên bi lấy ra đều màu đỏ";
b) $B$: "Hai viên bi lấy ra khác màu".

**Lời giải.** Lấy đồng thời $2$ viên nên không có thứ tự: mỗi kết quả là một tổ hợp chập $2$ của $8$ viên bi. Do đó $n(\Omega)=C_8^2=28$.

a) Mỗi kết quả thuận lợi cho $A$ là một cách chọn $2$ viên từ $5$ viên bi đỏ, nên $n(A)=C_5^2=10$. Do đó
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{10}{28}=\frac{5}{14}.$$

b) Để hai viên khác màu, ta chọn $1$ viên đỏ ($5$ cách) **rồi** chọn $1$ viên xanh ($3$ cách). Theo quy tắc nhân, $n(B)=5\cdot3=15$. Do đó
$$P(B)=\frac{n(B)}{n(\Omega)}=\frac{15}{28}.$$

Vậy xác suất hai viên đều đỏ là $\dfrac{5}{14}$, xác suất hai viên khác màu là $\dfrac{15}{28}$.
:::

## Dùng biến cố đối

Gặp câu hỏi "**có ít nhất một**", đếm thẳng thường phải chia nhiều trường hợp: một, hai, ba… Trong khi đó, biến cố đối ("không có cái nào") thường chỉ có một trường hợp. Vì vậy, ta tính xác suất của biến cố đối rồi lấy $1$ trừ đi.

:::example Ít nhất một lần sấp
Tung một đồng xu cân đối $3$ lần. Tính xác suất để có ít nhất một lần sấp.

**Lời giải.** Mỗi lần tung có $2$ kết quả, nên $n(\Omega)=2^3=8$. Gọi $A$ là "có ít nhất một lần sấp". Biến cố đối $\overline{A}$ là "không lần nào sấp", chỉ gồm một kết quả $NNN$:

$$P(A)=1-P(\overline{A})=1-\frac18=\frac78.$$

Vậy xác suất có ít nhất một lần sấp là $\dfrac78$.
:::

Đến đây ta đã có đủ cách để trả lời câu hỏi bốc thăm ở đầu bài.

:::example Bốc thăm hai bạn đi dự lễ
Lớp có $22$ nữ và $18$ nam. Chọn ngẫu nhiên $2$ bạn. Tính xác suất để:

a) Cả hai bạn được chọn đều là nữ;
b) Có ít nhất một bạn nam được chọn.

**Lời giải.**

*Hiểu đề.* Hai bạn được chọn cùng lúc, không có thứ tự; mọi nhóm $2$ bạn có cùng khả năng được chọn.

*Tìm cách giải.* Đếm $n(\Omega)$ và $n(A)$ bằng tổ hợp; biến cố ở câu b) là biến cố đối của biến cố ở câu a).

*Giải.* Ta có $n(\Omega)=C_{40}^2=780$ và $n(A)=C_{22}^2=231$. Do đó

$$P(A)=\frac{231}{780}=\frac{77}{260}\approx0{,}30,\qquad P(\overline{A})=1-\frac{77}{260}=\frac{183}{260}\approx0{,}70.$$

*Nhìn lại.* Dù nữ nhiều hơn nam, khả năng cả hai đều là nữ chỉ khoảng $30\%$, vì cả hai lần "trúng nữ" đều phải xảy ra.

Vậy xác suất cả hai bạn là nữ là $\dfrac{77}{260}$, và xác suất có ít nhất một bạn nam là $\dfrac{183}{260}$.
:::

:::warning Những sai lầm thường gặp
- **Dùng định nghĩa cổ điển khi kết quả không đồng khả năng.** Nói "khi gieo hai con xúc xắc, tổng có $11$ giá trị từ $2$ đến $12$, nên $P(\text{tổng}=7)=\dfrac1{11}$". Sai vì các tổng không đồng khả năng (tổng $2$ chỉ có $1$ cặp, tổng $7$ có $6$ cặp). Đúng: đếm trên $36$ cặp có thứ tự, được $\dfrac16$.
- **Lẫn lộn có thứ tự và không có thứ tự.** Lấy đồng thời $2$ viên bi nhưng đếm $n(\Omega)=A_8^2=56$ trong khi lại đếm $n(A)=C_5^2=10$. Sai vì hai phép đếm phải cùng một kiểu. Đúng: dùng tổ hợp cho cả hai (hoặc chỉnh hợp cho cả hai).
- **Phủ định sai "ít nhất một".** Viết biến cố đối của "có ít nhất một bạn nam" là "có ít nhất một bạn nữ". Sai vì hai biến cố này có thể cùng xảy ra. Đúng: biến cố đối là "không có bạn nam nào", tức cả hai là nữ.
- **Xác suất lớn hơn $1$.** Nếu tính ra $P(A)>1$ hay $P(A)<0$ thì chắc chắn đã đếm sai. Đây là phép thử nhanh rất có ích, bạn nên liếc qua mỗi khi tính xong.
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

Nhìn lại buổi bốc thăm ở đầu bài: dù lớp có nhiều bạn nữ hơn, khả năng cả hai bạn được chọn đều là nữ chỉ khoảng $30\%$, còn khả năng có ít nhất một bạn nam khoảng $70\%$. Cảm giác ban đầu có khi đánh lừa ta; đếm cẩn thận rồi chia mới cho câu trả lời đáng tin.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và gợi ý vài bước đầu. Bạn cứ tự làm trước, sai cũng không sao; đối chiếu với lời giải sau mới thấy mình hiểu đến đâu.

:::exercise
Gieo một con xúc xắc cân đối. Tính xác suất để số chấm xuất hiện chia hết cho $3$.

::hint
**Kiến thức:** $P(A)=\dfrac{n(A)}{n(\Omega)}$.

**Gợi ý các bước:**
1. Viết $\Omega$.
2. Liệt kê các kết quả chia hết cho $3$.

::solution
Không gian mẫu là $\Omega=\{1; 2; 3; 4; 5; 6\}$, nên $n(\Omega)=6$. Vì con xúc xắc cân đối nên các kết quả này đồng khả năng.

Gọi $A$ là biến cố "Số chấm xuất hiện chia hết cho $3$". Ta có $A=\{3; 6\}$, nên $n(A)=2$.

Do đó
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac26=\frac13.$$

Vậy xác suất để số chấm xuất hiện chia hết cho $3$ là $\dfrac13$.

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
Kí hiệu $S$ là mặt sấp, $N$ là mặt ngửa. Mỗi kết quả là một dãy gồm ba chữ, ghi lần lượt kết quả của ba lần tung. Không gian mẫu là
$$\Omega=\{SSS; SSN; SNS; SNN; NSS; NSN; NNS; NNN\}.$$

Ta có $n(\Omega)=8$. Vì đồng xu cân đối nên các kết quả này đồng khả năng.

Gọi $A$ là biến cố "Có đúng hai lần sấp". Ta có $A=\{SSN; SNS; NSS\}$, nên $n(A)=3$.

Do đó $P(A)=\dfrac{n(A)}{n(\Omega)}=\dfrac38$.

Vậy xác suất để có đúng hai lần sấp là $\dfrac38$.

**Đáp số.** $\dfrac38$.
:::

:::exercise
Gieo hai con xúc xắc cân đối. Tính xác suất của mỗi biến cố sau:

a) $A$: "Tổng số chấm xuất hiện trên hai con xúc xắc bằng $8$";
b) $B$: "Hai con xúc xắc xuất hiện số chấm bằng nhau".

::hint
**Kiến thức:** $n(\Omega)=36$; dùng bảng tổng số chấm.

**Gợi ý các bước:**
1. Liệt kê các cặp có tổng $8$.
2. Liệt kê các cặp $(1; 1), \dots, (6; 6)$.

::solution
Mỗi kết quả là một cặp số $(i; j)$, trong đó $i$ và $j$ lần lượt là số chấm xuất hiện trên con xúc xắc thứ nhất và thứ hai. Theo quy tắc nhân, $n(\Omega)=6\cdot6=36$. Vì hai con xúc xắc cân đối nên các kết quả này đồng khả năng.

a) Ta có $A=\{(2; 6); (3; 5); (4; 4); (5; 3); (6; 2)\}$, nên $n(A)=5$. Do đó
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{5}{36}.$$

b) Ta có $B=\{(1; 1); (2; 2); (3; 3); (4; 4); (5; 5); (6; 6)\}$, nên $n(B)=6$. Do đó
$$P(B)=\frac{n(B)}{n(\Omega)}=\frac{6}{36}=\frac16.$$

Vậy $P(A)=\dfrac{5}{36}$ và $P(B)=\dfrac16$.

**Đáp số.** a) $\dfrac5{36}$; b) $\dfrac16$.
:::

:::exercise
Một hộp có $4$ quả bóng đỏ và $6$ quả bóng trắng. Lấy ngẫu nhiên đồng thời $2$ quả. Tính xác suất để cả hai quả đều trắng.

::hint
**Kiến thức:** lấy đồng thời nên dùng tổ hợp cho cả $n(\Omega)$ và $n(A)$.

**Gợi ý các bước:**
1. Tính $n(\Omega)=C_{10}^2$.
2. Tính $n(A)=C_6^2$.

::solution
Hộp có tất cả $4+6=10$ quả bóng. Lấy đồng thời $2$ quả nên mỗi kết quả là một tổ hợp chập $2$ của $10$ phần tử. Do đó
$$n(\Omega)=C_{10}^2=45.$$

Gọi $A$ là biến cố "Cả hai quả bóng lấy ra đều trắng". Mỗi kết quả thuận lợi cho $A$ là một cách chọn $2$ quả từ $6$ quả bóng trắng, nên
$$n(A)=C_6^2=15.$$

Do đó $P(A)=\dfrac{n(A)}{n(\Omega)}=\dfrac{15}{45}=\dfrac13$.

Vậy xác suất để cả hai quả lấy ra đều trắng là $\dfrac13$.

**Đáp số.** $\dfrac13$.
:::

:::exercise
Gieo hai con xúc xắc cân đối. Xét tính đúng sai của các mệnh đề sau:

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
a) **Đúng.** Mỗi con xúc xắc có $6$ kết quả, nên theo quy tắc nhân, $n(\Omega)=6\cdot6=36$.

b) **Sai.** Các kết quả có tổng số chấm bằng $7$ là $(1; 6)$, $(2; 5)$, $(3; 4)$, $(4; 3)$, $(5; 2)$, $(6; 1)$: có $6$ kết quả. Do đó xác suất cần tìm là $\dfrac6{36}=\dfrac16$, không phải $\dfrac7{36}$.

c) **Đúng.** Gọi $C$ là biến cố "Tích số chấm là số chẵn". Biến cố đối $\overline{C}$ là "Tích số chấm là số lẻ", xảy ra khi và chỉ khi cả hai số chấm đều lẻ. Mỗi con có $3$ mặt lẻ nên $n(\overline{C})=3\cdot3=9$. Do đó
$$P(C)=1-P(\overline{C})=1-\frac9{36}=\frac34.$$

d) **Sai.** Gọi $D$ là biến cố "Có ít nhất một con ra mặt $6$ chấm". Biến cố đối $\overline{D}$ là "Không con nào ra mặt $6$ chấm"; mỗi con còn $5$ kết quả nên $n(\overline{D})=5\cdot5=25$. Do đó
$$P(D)=1-\frac{25}{36}=\frac{11}{36}.$$

Vậy các mệnh đề a) và c) đúng; các mệnh đề b) và d) sai.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Một đội có $20$ bạn nam và $15$ bạn nữ. Chọn ngẫu nhiên $3$ bạn. Tính xác suất để có ít nhất một bạn nữ (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** $P(A)=1-P(\overline{A})$; $\overline{A}$: "cả ba bạn đều là nam".

**Gợi ý các bước:**
1. Tính $n(\Omega)=C_{35}^3$.
2. Tính $n(\overline{A})=C_{20}^3$.
3. Lấy $1$ trừ tỉ số, rồi làm tròn.

::solution
Đội có tất cả $20+15=35$ bạn. Chọn $3$ bạn không kể thứ tự nên
$$n(\Omega)=C_{35}^3=6545.$$

Gọi $A$ là biến cố "Trong ba bạn được chọn có ít nhất một bạn nữ". Biến cố đối $\overline{A}$ là "Cả ba bạn được chọn đều là nam". Ta có
$$n(\overline{A})=C_{20}^3=1140.$$

Suy ra $P(\overline{A})=\dfrac{1140}{6545}=\dfrac{228}{1309}$. Do đó
$$P(A)=1-P(\overline{A})=1-\frac{228}{1309}=\frac{1081}{1309}\approx0{,}83.$$

Vậy xác suất để có ít nhất một bạn nữ xấp xỉ $0{,}83$.

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
Mỗi mã là một dãy có thứ tự gồm $3$ chữ số khác nhau lấy từ $10$ chữ số, tức là một chỉnh hợp chập $3$ của $10$ phần tử. Do đó
$$n(\Omega)=A_{10}^3=10\cdot9\cdot8=720.$$

Gọi $A$ là biến cố "Hà mở được khoá ngay lần thử đó". Chỉ có một mã đúng nên $n(A)=1$.

Do đó $P(A)=\dfrac{n(A)}{n(\Omega)}=\dfrac1{720}$.

Vậy xác suất Hà mở được khoá ngay lần thử đó là $\dfrac1{720}$.

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
Để lập một số có ba chữ số khác nhau, ta chọn lần lượt chữ số hàng trăm ($5$ cách), hàng chục ($4$ cách) và hàng đơn vị ($3$ cách). Theo quy tắc nhân,
$$n(\Omega)=5\cdot4\cdot3=60.$$

Gọi $A$ là biến cố "Số lập được là số chẵn". Số chẵn có chữ số hàng đơn vị là $2$ hoặc $4$, nên ta chọn hàng đơn vị trước:

- chữ số hàng đơn vị: $2$ cách;
- chữ số hàng trăm: $4$ cách (khác chữ số hàng đơn vị);
- chữ số hàng chục: $3$ cách (khác hai chữ số đã chọn).

Theo quy tắc nhân, $n(A)=2\cdot4\cdot3=24$. Do đó
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{24}{60}=\frac25.$$

Vậy xác suất để số lập được là số chẵn bằng $\dfrac25$.

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
Rút một tấm trong $30$ tấm thẻ nên $n(\Omega)=30$.

Gọi $A$ là biến cố "Số trên thẻ chia hết cho $2$" và $B$ là biến cố "Số trên thẻ chia hết cho $3$". Biến cố cần tính xác suất là $A\cup B$.

Trong các số từ $1$ đến $30$ có $30:2=15$ số chia hết cho $2$ và $30:3=10$ số chia hết cho $3$, nên $n(A)=15$, $n(B)=10$.

Một số chia hết cho cả $2$ và $3$ khi và chỉ khi nó chia hết cho $6$; có $30:6=5$ số như vậy, nên $n(A\cap B)=5$.

Ta có
$$n(A\cup B)=n(A)+n(B)-n(A\cap B)=15+10-5=20.$$

Do đó $P(A\cup B)=\dfrac{20}{30}=\dfrac23$.

Vậy xác suất để số trên thẻ chia hết cho $2$ hoặc cho $3$ là $\dfrac23$.

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
Mỗi cách xếp năm bạn thành một hàng ngang là một hoán vị của $5$ phần tử, nên
$$n(\Omega)=5!=120.$$

Gọi $A$ là biến cố "An và Bình đứng cạnh nhau". Ta coi An và Bình là một khối. Khi đó:

- xếp khối này cùng ba bạn còn lại (tất cả $4$ vị trí): có $4!=24$ cách;
- trong khối, An và Bình đổi chỗ cho nhau: có $2$ cách.

Theo quy tắc nhân, $n(A)=2\cdot24=48$. Do đó
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{48}{120}=\frac25.$$

Vậy xác suất để An và Bình đứng cạnh nhau là $\dfrac25$.

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
