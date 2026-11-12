---
title: "Chuyên đề: thống kê và xác suất"
description: Ôn bảng tần số, tần số tương đối, bảng tần số ghép nhóm, biểu đồ tròn và xác suất của biến cố trong trò chơi, thí nghiệm theo kiểu đề thi vào lớp 10.
minutes: 25
---

:::goals
- Lập và đọc bảng tần số, tần số tương đối; bảng tần số ghép nhóm; biết đổi tỉ lệ phần trăm sang góc ở tâm của biểu đồ tròn.
- Xác định không gian mẫu, kết quả thuận lợi và tính xác suất của biến cố bằng $P(A)=\dfrac kn$.
- Biết dùng biến cố đối: $P(\overline A)=1-P(A)$, và lập bảng để liệt kê kết quả của hai lần thực hiện.
- Phân biệt xác suất lí thuyết với xác suất thực nghiệm và trình bày một bài thống kê, xác suất như trong đề thi vào lớp 10.
:::

Giả sử một lớp có $20$ bạn làm bài kiểm tra Toán và điểm của các bạn là các số nguyên từ $5$ đến $10$. Cô giáo chỉ ghi lại điểm của từng bạn trên một tờ giấy. Muốn biết điểm nào xuất hiện nhiều nhất và có bao nhiêu phần trăm số bạn đạt từ $8$ điểm trở lên, ta phải sắp xếp dữ liệu thành một bảng. Nếu cô chọn ngẫu nhiên một bạn để lên bảng chữa bài, khả năng bạn đó đạt từ $8$ điểm trở lên là bao nhiêu?

Câu hỏi đầu thuộc về **thống kê** (sắp xếp và mô tả dữ liệu đã có), câu hỏi sau thuộc về **xác suất** (đo khả năng xảy ra của một sự kiện). Trong đề thi vào lớp 10, hai nội dung này thường chỉ chiếm một ý nhỏ, nhưng là những ý rất dễ lấy điểm nếu nắm chắc khái niệm và trình bày gọn.

## Thống kê: bảng tần số và tần số tương đối

### Khám phá: từ danh sách điểm đến bảng tần số

Giả sử $20$ bạn có điểm như sau: có $2$ bạn được $5$ điểm, $3$ bạn được $6$ điểm, $5$ bạn được $7$ điểm, $6$ bạn được $8$ điểm, $3$ bạn được $9$ điểm và $1$ bạn được $10$ điểm. Ta ghi lại thành bảng:

| Điểm | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | Tổng |
|---|---|---|---|---|---|---|---|
| Tần số | $2$ | $3$ | $5$ | $6$ | $3$ | $1$ | $20$ |
| Tần số tương đối | $10\%$ | $15\%$ | $25\%$ | $30\%$ | $15\%$ | $5\%$ | $100\%$ |

:::definition Tần số và tần số tương đối
**Tần số** của một giá trị là số lần giá trị đó xuất hiện trong mẫu số liệu. **Tần số tương đối** của một giá trị là tỉ số giữa tần số của nó và số phần tử $N$ của mẫu, thường viết dưới dạng phần trăm:
$$f_i=\frac{n_i}N\cdot100\%.$$
Tổng các tần số bằng $N$ và tổng các tần số tương đối bằng $100\%$.
:::

**Vì sao cần tần số tương đối?** Tần số cho biết một giá trị xuất hiện bao nhiêu lần, nhưng chỉ có tần số tương đối mới cho ta so sánh được hai mẫu có kích thước khác nhau. Ví dụ, $6$ bạn trên $20$ bạn và $12$ bạn trên $40$ bạn đều ứng với $30\%$ số bạn, dù tần số khác nhau.

:::example Đọc bảng tần số
Dùng bảng tần số điểm ở trên. a) Điểm nào có tần số lớn nhất? b) Có bao nhiêu bạn đạt từ $8$ điểm trở lên, chiếm bao nhiêu phần trăm số bạn? c) Tần số tương đối của điểm $9$ là bao nhiêu?

**Lời giải.**

a) Tần số lớn nhất là $6$, ứng với điểm $8$. Vậy điểm $8$ xuất hiện nhiều nhất.

b) Số bạn đạt từ $8$ điểm trở lên là $6+3+1=10$ (bạn), chiếm $\dfrac{10}{20}=50\%$ số bạn.

c) Tần số tương đối của điểm $9$ là $\dfrac3{20}=15\%$.

**Đáp số.** a) Điểm $8$; b) $10$ bạn, $50\%$; c) $15\%$.
:::

### Bảng tần số ghép nhóm

Khi dữ liệu có nhiều giá trị khác nhau (chiều cao, cân nặng, thời gian), ta chia chúng thành các **nhóm** có độ rộng bằng nhau. Mỗi nhóm có dạng nửa khoảng $[a;b)$, gồm các giá trị $x$ với $a\leq x<b$. Tần số của một nhóm là số giá trị nằm trong nhóm đó.

:::example Bảng tần số ghép nhóm
Giả sử chiều cao (cm) của $40$ học sinh được ghi vào bảng sau:

| Nhóm | $[145;150)$ | $[150;155)$ | $[155;160)$ | $[160;165)$ | $[165;170)$ |
|---|---|---|---|---|---|
| Tần số | $4$ | $10$ | $14$ | $9$ | $3$ |

a) Tính tần số tương đối của mỗi nhóm. b) Nhóm nào có nhiều học sinh nhất? c) Có bao nhiêu phần trăm học sinh cao dưới $160$ cm?

**Lời giải.**

a) Tổng tần số là $4+10+14+9+3=40$. Các tần số tương đối lần lượt là $\dfrac4{40}=10\%$; $\dfrac{10}{40}=25\%$; $\dfrac{14}{40}=35\%$; $\dfrac9{40}=22{,}5\%$; $\dfrac3{40}=7{,}5\%$. Tổng là $100\%$.

b) Nhóm $[155;160)$ có tần số lớn nhất ($14$ học sinh).

c) Số học sinh cao dưới $160$ cm là $4+10+14=28$, chiếm $\dfrac{28}{40}=70\%$.

**Đáp số.** a) $10\%$; $25\%$; $35\%$; $22{,}5\%$; $7{,}5\%$. b) Nhóm $[155;160)$. c) $70\%$.
:::

### Biểu đồ tròn

Trong biểu đồ tròn, mỗi hình quạt ứng với một giá trị hoặc một nhóm, và góc ở tâm của hình quạt bằng tần số tương đối nhân $360^\circ$. Cả hình tròn ứng với $100\%$.

:::example Từ bảng tần số đến biểu đồ tròn
Giả sử một khảo sát $80$ học sinh về phương tiện đến trường cho kết quả: đi bộ $20$ em, đi xe đạp $32$ em, đi xe buýt $16$ em, đi xe máy điện $12$ em. Hãy tính tần số tương đối và góc ở tâm của hình quạt tương ứng trong biểu đồ tròn.

**Lời giải.** Ta có $N=20+32+16+12=80$. Tần số tương đối và góc ở tâm là:
- đi bộ: $\dfrac{20}{80}=25\%$, góc $0{,}25\cdot360^\circ=90^\circ$;
- xe đạp: $\dfrac{32}{80}=40\%$, góc $0{,}4\cdot360^\circ=144^\circ$;
- xe buýt: $\dfrac{16}{80}=20\%$, góc $0{,}2\cdot360^\circ=72^\circ$;
- xe máy điện: $\dfrac{12}{80}=15\%$, góc $0{,}15\cdot360^\circ=54^\circ$.

Kiểm tra: $25+40+20+15=100\%$ và $90^\circ+144^\circ+72^\circ+54^\circ=360^\circ$.
:::

## Xác suất của biến cố

### Khám phá: gieo một con xúc xắc

Gieo một con xúc xắc cân đối, mặt nào xuất hiện cũng có khả năng như nhau. **Không gian mẫu** là tập hợp mọi kết quả có thể xảy ra: $\Omega=\{1;2;3;4;5;6\}$, có $6$ kết quả. Biến cố "số chấm là số chẵn" xảy ra khi kết quả là $2$, $4$ hoặc $6$. Đó là $3$ **kết quả thuận lợi** trong $6$ kết quả có thể, nên khả năng xảy ra là $\dfrac36=\dfrac12$.

:::definition Xác suất của biến cố
Nếu một phép thử có $n$ kết quả có thể xảy ra, đồng khả năng, và biến cố $A$ có $k$ kết quả thuận lợi thì **xác suất** của $A$ là
$$P(A)=\frac kn.$$
Ta luôn có $0\leq P(A)\leq1$. Biến cố không thể xảy ra có xác suất $0$, biến cố chắc chắn xảy ra có xác suất $1$. Nếu $\overline A$ là biến cố đối của $A$ (xảy ra khi $A$ không xảy ra) thì $P(\overline A)=1-P(A)$.
:::

**Vì sao $P(\overline A)=1-P(A)$?** Mỗi kết quả hoặc thuận lợi cho $A$ hoặc thuận lợi cho $\overline A$, không có kết quả nào thuộc cả hai. Do đó số kết quả thuận lợi cho $\overline A$ là $n-k$ và $P(\overline A)=\dfrac{n-k}n=1-\dfrac kn$.

:::example Gieo một con xúc xắc
Gieo một con xúc xắc cân đối. Tính xác suất của các biến cố:

a) $A$: "số chấm là số chẵn";

b) $B$: "số chấm chia hết cho $3$";

c) $C$: "số chấm lớn hơn $4$";

d) $D$: "số chấm không phải là $6$".

**Lời giải.** Không gian mẫu có $6$ kết quả đồng khả năng.

a) Các kết quả thuận lợi là $2$, $4$, $6$ nên $P(A)=\dfrac36=\dfrac12$.

b) Các kết quả thuận lợi là $3$ và $6$ nên $P(B)=\dfrac26=\dfrac13$.

c) Các kết quả thuận lợi là $5$ và $6$ nên $P(C)=\dfrac26=\dfrac13$.

d) Biến cố $D$ là biến cố đối của "số chấm là $6$", nên $P(D)=1-\dfrac16=\dfrac56$.

**Đáp số.** a) $\dfrac12$; b) $\dfrac13$; c) $\dfrac13$; d) $\dfrac56$.
:::

:::example Một câu hỏi kiểu đề thi
**Bài 5.** ($1{,}5$ điểm) Một hộp có $4$ tấm thẻ giống nhau, đánh số $1$, $2$, $3$, $4$. Bạn Lan rút ngẫu nhiên một thẻ, ghi số, bỏ lại thẻ vào hộp rồi rút ngẫu nhiên thẻ thứ hai. a) Mô tả không gian mẫu của phép thử. b) Tính xác suất của biến cố $A$: "tổng hai số bằng $5$". c) Tính xác suất của biến cố $B$: "tích hai số là số chẵn".

**Lời giải.**

*Hiểu đề.* Mỗi lần rút có $4$ kết quả, và vì có hoàn lại nên hai lần rút độc lập. Ta cần liệt kê các cặp số (lần 1; lần 2).

*Tìm cách giải.* Lập bảng $4\times4$ gồm mọi cặp có thể, rồi đếm các cặp thuận lợi. Với biến cố $B$, dùng biến cố đối: tích là số lẻ khi cả hai số đều lẻ.

*Giải.*

a) ($0{,}5$ điểm) Không gian mẫu gồm các cặp $(a;b)$ với $a$, $b\in\{1;2;3;4\}$. Có $4\cdot4=16$ kết quả đồng khả năng.

b) ($0{,}5$ điểm) Các cặp có tổng bằng $5$ là $(1;4)$, $(2;3)$, $(3;2)$, $(4;1)$, tức là $4$ kết quả thuận lợi. Do đó $P(A)=\dfrac4{16}=\dfrac14$.

c) ($0{,}5$ điểm) Biến cố đối $\overline B$: "tích hai số là số lẻ", xảy ra khi cả hai số đều lẻ, tức là mỗi số thuộc $\{1;3\}$. Có $2\cdot2=4$ kết quả thuận lợi nên $P(\overline B)=\dfrac4{16}=\dfrac14$. Vậy $P(B)=1-\dfrac14=\dfrac34$.

Vậy $P(A)=\dfrac14$ và $P(B)=\dfrac34$.

*Nhìn lại.* Đếm trực tiếp các cặp có tích chẵn: có $16-4=12$ cặp, và $\dfrac{12}{16}=\dfrac34$, trùng với kết quả trên. Kết quả hợp lí vì chỉ có số lẻ $\times$ số lẻ mới cho tích lẻ.
:::

### Xác suất thực nghiệm

Khi không biết các kết quả có đồng khả năng hay không, ta ước lượng khả năng bằng cách lặp lại phép thử nhiều lần. **Xác suất thực nghiệm** của biến cố $A$ là tỉ số giữa số lần $A$ xảy ra và tổng số lần thực hiện phép thử. Khi số lần thử đủ lớn, xác suất thực nghiệm thường gần với xác suất lí thuyết.

:::example Gieo đồng xu
Giả sử bạn Minh gieo một đồng xu $200$ lần và thấy mặt sấp xuất hiện $96$ lần. Tính xác suất thực nghiệm của biến cố "xuất hiện mặt sấp" và so sánh với xác suất lí thuyết của một đồng xu cân đối.

**Lời giải.** Xác suất thực nghiệm là $\dfrac{96}{200}=0{,}48$. Với đồng xu cân đối, xác suất lí thuyết của mặt sấp là $\dfrac12=0{,}5$. Hai giá trị gần nhau, chênh lệch $0{,}02$.

Vậy xác suất thực nghiệm là $0{,}48$, gần với xác suất lí thuyết $0{,}5$.
:::

:::warning Lỗi hay gặp
- **Nhầm tần số với tần số tương đối.** Sai: nói "điểm $8$ chiếm $6\%$ số bạn" vì tần số là $6$. Vì sao sai: $6$ là số bạn, còn phần trăm phải chia cho tổng số $20$. Đúng: $\dfrac6{20}=30\%$.
- **Bỏ sót nhóm hoặc nhầm đầu mút nhóm.** Sai: coi chiều cao $160$ cm thuộc nhóm $[155;160)$. Vì sao sai: nửa khoảng $[155;160)$ không chứa $160$. Đúng: $160$ thuộc nhóm $[160;165)$.
- **Xác suất lớn hơn $1$ hoặc là số âm.** Sai: tính $P=\dfrac{6}{4}$. Vì sao sai: số kết quả thuận lợi không thể lớn hơn số kết quả có thể. Đúng: $0\leq P\leq1$, hãy kiểm tra lại cách đếm.
- **Đếm thiếu không gian mẫu.** Sai: với hai lần rút có hoàn lại từ $4$ thẻ, cho rằng có $4$ hoặc $8$ kết quả. Vì sao sai: mỗi lần có $4$ cách nên có $4\cdot4=16$ cặp. Đúng: liệt kê bảng các cặp trước khi đếm.
- **Quên rằng xác suất lí thuyết cần các kết quả đồng khả năng.** Sai: "ngày mai hoặc mưa hoặc không mưa nên xác suất mưa là $\dfrac12$". Vì sao sai: hai kết quả này không đồng khả năng. Đúng: chỉ dùng $\dfrac kn$ khi các kết quả đồng khả năng; nếu không thì dùng xác suất thực nghiệm.
:::

**Kết nối.** Bài này dùng tỉ lệ phần trăm, phân số và cách đếm. Tỉ lệ phần trăm và góc ở tâm của biểu đồ tròn nối với hình học đường tròn ở chuyên đề trước. Thống kê và xác suất sẽ còn được mở rộng ở lớp 10 và lớp 11 với số trung bình, độ lệch chuẩn và các quy tắc tính xác suất.

## Thuật ngữ

:::terms
- tần số | frequency
- tần số tương đối | relative frequency
- bảng tần số ghép nhóm | grouped frequency table
- biểu đồ tròn | pie chart
- không gian mẫu | sample space
- kết quả thuận lợi | favourable outcome
- biến cố | event
- biến cố đối | complementary event
- xác suất | probability
- xác suất thực nghiệm | experimental probability
- đồng khả năng | equally likely
:::

## Tóm tắt

- Tần số $n_i$ là số lần xuất hiện của một giá trị; tần số tương đối $f_i=\dfrac{n_i}N\cdot100\%$; tổng tần số tương đối bằng $100\%$.
- Bảng ghép nhóm dùng các nhóm $[a;b)$; biểu đồ tròn: góc ở tâm $=f_i\cdot360^\circ$.
- $P(A)=\dfrac kn$ với $n$ kết quả đồng khả năng và $k$ kết quả thuận lợi; $0\leq P(A)\leq1$.
- $P(\overline A)=1-P(A)$; với hai lần thực hiện, hãy lập bảng các cặp để đếm.
- Xác suất thực nghiệm $=\dfrac{\text{số lần }A\text{ xảy ra}}{\text{tổng số lần thử}}$, gần với xác suất lí thuyết khi số lần thử lớn.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và gợi ý bước đầu. Hãy tự làm trước rồi mới mở lời giải.

:::exercise
Điểm kiểm tra của $20$ học sinh được cho bởi bảng tần số sau:

| Điểm | $6$ | $7$ | $8$ | $9$ | $10$ |
|---|---|---|---|---|---|
| Tần số | $2$ | $4$ | $8$ | $5$ | $1$ |

Tính tần số tương đối của mỗi điểm, cho biết điểm nào xuất hiện nhiều nhất và có bao nhiêu phần trăm học sinh đạt từ $9$ điểm trở lên.

::hint
**Kiến thức:** $f_i=\dfrac{n_i}N\cdot100\%$.

**Gợi ý các bước:**
1. Chia từng tần số cho $20$.
2. Cộng tần số của các điểm $9$ và $10$.

::solution
Các tần số tương đối là $\dfrac2{20}=10\%$; $\dfrac4{20}=20\%$; $\dfrac8{20}=40\%$; $\dfrac5{20}=25\%$; $\dfrac1{20}=5\%$. Điểm $8$ có tần số lớn nhất ($8$). Số học sinh đạt từ $9$ điểm trở lên là $5+1=6$, chiếm $\dfrac6{20}=30\%$.

**Đáp số.** $10\%$; $20\%$; $40\%$; $25\%$; $5\%$; điểm $8$; $30\%$.
:::

:::exercise
Cân nặng (kg) của $50$ học sinh được ghi vào bảng sau:

| Nhóm | $[40;45)$ | $[45;50)$ | $[50;55)$ | $[55;60)$ | $[60;65)$ |
|---|---|---|---|---|---|
| Tần số | $5$ | $15$ | $20$ | $8$ | $2$ |

Tính tần số tương đối của mỗi nhóm. Nhóm nào có tần số tương đối lớn nhất? Có bao nhiêu phần trăm học sinh nặng dưới $55$ kg?

::hint
**Kiến thức:** tần số tương đối và nửa khoảng $[a;b)$.

**Gợi ý các bước:**
1. Tính $N$ rồi chia từng tần số cho $N$.
2. Cộng các nhóm có cân nặng dưới $55$ kg.

::solution
$N=5+15+20+8+2=50$. Các tần số tương đối là $10\%$; $30\%$; $40\%$; $16\%$; $4\%$. Nhóm $[50;55)$ có tần số tương đối lớn nhất. Số học sinh nặng dưới $55$ kg là $5+15+20=40$, chiếm $\dfrac{40}{50}=80\%$.

**Đáp số.** $10\%$; $30\%$; $40\%$; $16\%$; $4\%$; nhóm $[50;55)$; $80\%$.
:::

:::exercise
Một khảo sát $40$ học sinh về môn thể thao yêu thích cho kết quả: bóng đá $16$ em, cầu lông $12$ em, bơi lội $8$ em, môn khác $4$ em. Tính tần số tương đối và góc ở tâm của hình quạt tương ứng trong biểu đồ tròn.

::hint
**Kiến thức:** góc ở tâm $=f_i\cdot360^\circ$.

**Gợi ý các bước:**
1. Tính tần số tương đối của từng môn.
2. Nhân với $360^\circ$.

::solution
Bóng đá: $\dfrac{16}{40}=40\%$, góc $144^\circ$. Cầu lông: $\dfrac{12}{40}=30\%$, góc $108^\circ$. Bơi lội: $\dfrac8{40}=20\%$, góc $72^\circ$. Môn khác: $\dfrac4{40}=10\%$, góc $36^\circ$. Kiểm tra: $144+108+72+36=360$.

**Đáp số.** $40\%$, $144^\circ$; $30\%$, $108^\circ$; $20\%$, $72^\circ$; $10\%$, $36^\circ$.
:::

:::exercise
Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất của các biến cố:

a) $A$: "tổng số chấm bằng $8$";

b) $B$: "tổng số chấm nhỏ hơn $5$";

c) $C$: "hai con xúc xắc có số chấm bằng nhau";

d) $D$: "tổng số chấm là số chẵn".

::hint
**Kiến thức:** không gian mẫu có $6\cdot6=36$ kết quả đồng khả năng.

**Gợi ý các bước:**
1. Liệt kê các cặp $(a;b)$ thuận lợi cho từng biến cố.
2. Chia cho $36$.

::solution
Không gian mẫu có $36$ kết quả.

a) Tổng bằng $8$: $(2;6)$, $(3;5)$, $(4;4)$, $(5;3)$, $(6;2)$, có $5$ kết quả nên $P(A)=\dfrac5{36}$.

b) Tổng nhỏ hơn $5$ nghĩa là bằng $2$, $3$ hoặc $4$, có $1+2+3=6$ kết quả nên $P(B)=\dfrac6{36}=\dfrac16$.

c) Có $6$ kết quả $(1;1)$, $(2;2)$, …, $(6;6)$ nên $P(C)=\dfrac6{36}=\dfrac16$.

d) Tổng chẵn khi hai số cùng chẵn hoặc cùng lẻ: $3\cdot3+3\cdot3=18$ kết quả nên $P(D)=\dfrac{18}{36}=\dfrac12$.

**Đáp số.** a) $\dfrac5{36}$; b) $\dfrac16$; c) $\dfrac16$; d) $\dfrac12$.
:::

:::exercise
**Bài 5.** ($1{,}5$ điểm) Một hộp có $5$ viên bi đỏ, $3$ viên bi xanh và $2$ viên bi vàng, có cùng kích thước. Lấy ngẫu nhiên một viên bi từ hộp, ghi màu rồi bỏ lại vào hộp và lấy tiếp một viên. a) Có bao nhiêu kết quả có thể xảy ra? b) Tính xác suất của biến cố $A$: "cả hai viên đều màu đỏ". c) Tính xác suất của biến cố $B$: "hai viên cùng màu".

::hint
**Kiến thức:** mỗi lần lấy có $10$ kết quả, và việc lấy có hoàn lại nên các lần lấy độc lập.

**Gợi ý các bước:**
1. Đếm kết quả có thể: $10\cdot10$.
2. Đếm các kết quả thuận lợi theo từng màu.

::solution
a) ($0{,}5$ điểm) Mỗi lần lấy có $10$ kết quả đồng khả năng nên có $10\cdot10=100$ kết quả.

b) ($0{,}5$ điểm) Hai viên đều đỏ: $5\cdot5=25$ kết quả, nên $P(A)=\dfrac{25}{100}=\dfrac14$.

c) ($0{,}5$ điểm) Hai viên cùng màu: đỏ-đỏ có $25$ kết quả, xanh-xanh có $3\cdot3=9$ kết quả, vàng-vàng có $2\cdot2=4$ kết quả, tổng cộng $25+9+4=38$ kết quả. Do đó $P(B)=\dfrac{38}{100}=\dfrac{19}{50}$.

**Đáp số.** a) $100$; b) $\dfrac14$; c) $\dfrac{19}{50}$.
:::

:::exercise
Giả sử một lớp có $40$ học sinh gồm $24$ nữ và $16$ nam. Cô giáo chọn ngẫu nhiên một bạn để làm lớp trưởng tạm thời. Tính xác suất để bạn được chọn là nữ và xác suất để bạn được chọn là nam.

::hint
**Kiến thức:** $P(A)=\dfrac kn$; hai biến cố đối nhau.

**Gợi ý các bước:**
1. Đếm kết quả có thể và kết quả thuận lợi.
2. Kiểm tra tổng hai xác suất.

::solution
Có $40$ kết quả đồng khả năng. $P(\text{nữ})=\dfrac{24}{40}=\dfrac35$ và $P(\text{nam})=\dfrac{16}{40}=\dfrac25$. Kiểm tra: $\dfrac35+\dfrac25=1$.

**Đáp số.** $\dfrac35$ và $\dfrac25$.
:::

:::exercise
Giả sử bạn Nam gieo một con xúc xắc $60$ lần và thấy mặt $6$ chấm xuất hiện $12$ lần. Tính xác suất thực nghiệm của biến cố "xuất hiện mặt $6$ chấm" và so sánh với xác suất lí thuyết (làm tròn đến ba chữ số thập phân).

::hint
**Kiến thức:** xác suất thực nghiệm $=\dfrac{\text{số lần xảy ra}}{\text{tổng số lần thử}}$.

**Gợi ý các bước:**
1. Tính $\dfrac{12}{60}$.
2. Tính $\dfrac16$ rồi so sánh.

::solution
Xác suất thực nghiệm là $\dfrac{12}{60}=0{,}2$. Xác suất lí thuyết là $\dfrac16\approx0{,}167$. Hai giá trị gần nhau, chênh lệch khoảng $0{,}033$.

**Đáp số.** $0{,}2$ và $\approx0{,}167$.
:::

:::exercise
Điểm kiểm tra của $40$ học sinh có bảng tần số như sau, trong đó tần số của điểm $7$ chưa biết:

| Điểm | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|
| Tần số | $4$ | $8$ | ? | $10$ | $6$ |

Tìm tần số của điểm $7$ và tần số tương đối của nó.

::hint
**Kiến thức:** tổng các tần số bằng $N$.

**Gợi ý các bước:**
1. Lấy $40$ trừ các tần số đã biết.
2. Chia tần số vừa tìm cho $40$.

::solution
Tần số của điểm $7$ là $40-(4+8+10+6)=40-28=12$. Tần số tương đối là $\dfrac{12}{40}=30\%$.

**Đáp số.** Tần số $12$; tần số tương đối $30\%$.
:::

:::exercise Thử thách
Một hộp có $x$ viên bi đỏ và $6$ viên bi xanh, có cùng kích thước. Lấy ngẫu nhiên một viên bi từ hộp, xác suất lấy được bi xanh bằng $\dfrac25$. Tìm $x$.

::hint
**Kiến thức:** $P(\text{xanh})=\dfrac{\text{số bi xanh}}{\text{tổng số bi}}$.

**Gợi ý các bước:**
1. Biểu thị tổng số bi theo $x$.
2. Lập phương trình $\dfrac6{x+6}=\dfrac25$.

::solution
Tổng số bi là $x+6$ nên $\dfrac6{x+6}=\dfrac25$. Suy ra $2(x+6)=30$, tức là $x+6=15$ và $x=9$. Kiểm tra: $\dfrac6{15}=\dfrac25$.

**Đáp số.** $x=9$.
:::

## Kiểm tra mini

:::quiz
::mc
Trong $20$ bạn làm bài kiểm tra, có $6$ bạn được $8$ điểm. Tần số tương đối của điểm $8$ là
A. $30\%$.
B. $3{,}3\%$.
C. $6\%$.
D. $70\%$.
::key A
$\dfrac6{20}=30\%$. Đáp án C lấy tần số làm phần trăm, B là $\dfrac{20}6$ (chia ngược), D là tần số tương đối của các điểm còn lại.

::mc
Gieo một con xúc xắc cân đối. Xác suất để số chấm lớn hơn $4$ là
A. $\dfrac16$.
B. $\dfrac13$.
C. $\dfrac12$.
D. $\dfrac23$.
::key B
Các kết quả thuận lợi là $5$ và $6$ nên $P=\dfrac26=\dfrac13$. Đáp án A chỉ đếm mặt $6$, C là xác suất của "lớn hơn hoặc bằng $4$", D là xác suất của "nhỏ hơn hoặc bằng $4$".

::mc
Một hộp có $5$ bi đỏ, $3$ bi xanh, $2$ bi vàng. Lấy ngẫu nhiên một bi. Xác suất để bi lấy ra không phải bi vàng là
A. $\dfrac15$.
B. $\dfrac12$.
C. $\dfrac45$.
D. $\dfrac3{10}$.
::key C
$P=1-\dfrac2{10}=\dfrac8{10}=\dfrac45$. Đáp án A là xác suất lấy được bi vàng, B là xác suất lấy bi đỏ, D là xác suất lấy bi xanh.

::mc
Một biểu đồ tròn có một nhóm chiếm $15\%$. Góc ở tâm của hình quạt tương ứng là
A. $150^\circ$.
B. $15^\circ$.
C. $27^\circ$.
D. $54^\circ$.
::key D
$0{,}15\cdot360^\circ=54^\circ$. Đáp án B lấy phần trăm làm số đo độ, C là $\dfrac{54}{2}$, A nhân nhầm với $10$.

::tf
Điểm kiểm tra của $40$ học sinh có bảng tần số: điểm $5$: $4$; điểm $6$: $8$; điểm $7$: $12$; điểm $8$: $10$; điểm $9$: $6$. Các nhận định sau đúng hay sai?
a) Tần số tương đối của điểm $7$ là $30\%$.
b) Điểm xuất hiện nhiều nhất là $8$.
c) Có $40\%$ số học sinh đạt từ $8$ điểm trở lên.
d) Tổng các tần số tương đối bằng $100\%$.
::key Đ S Đ Đ
a) Đúng: $\dfrac{12}{40}=30\%$. b) Sai: điểm $7$ có tần số lớn nhất ($12$). c) Đúng: $\dfrac{10+6}{40}=40\%$. d) Đúng: tổng các tần số tương đối luôn bằng $100\%$.

::sa
Một hộp có $5$ bi đỏ, $3$ bi xanh, $2$ bi vàng. Lấy ngẫu nhiên một bi. Xác suất lấy được bi xanh bằng bao nhiêu phần trăm?
::key 30
$P=\dfrac3{10}=30\%$.

::sa
Gieo hai con xúc xắc cân đối. Có bao nhiêu kết quả để tổng số chấm bằng $8$?
::key 5
Các cặp là $(2;6)$, $(3;5)$, $(4;4)$, $(5;3)$, $(6;2)$.
:::
