---
title: Kết quả có thể và kết quả thuận lợi. Cách tính xác suất của biến cố bằng tỉ số
description: Liệt kê kết quả có thể của phép thử, xác định kết quả thuận lợi cho biến cố và tính xác suất bằng tỉ số của các kết quả đồng khả năng.
minutes: 25
---

:::goals
- Nhận biết phép thử ngẫu nhiên và liệt kê các kết quả có thể.
- Xác định kết quả thuận lợi cho một biến cố.
- Tính xác suất của biến cố bằng tỉ số $\dfrac{k}{n}$ khi các kết quả đồng khả năng.
- Hiểu xác suất nằm giữa $0$ và $1$ và biết xác suất của biến cố chắc chắn, biến cố không thể.
:::

Giả sử lớp bạn tổ chức bốc thăm nhận quà: trong một hộp kín có $20$ phiếu giống hệt nhau, trong đó $4$ phiếu ghi "Trúng quà". Bạn nhắm mắt bốc một phiếu. Bạn có thể trúng mà cũng có thể trượt, và không ai đoán trước được kết quả.

Dù vậy, ta vẫn cảm nhận được rằng khả năng trúng "không nhiều lắm". Khả năng đó là bao nhiêu? Trong toán học, người ta đo khả năng xảy ra của một sự kiện bằng một số gọi là xác suất. Bài này dạy bạn tính con số đó.

## Cùng khám phá

Hãy xét ba phép thử quen thuộc:

- Tung một đồng xu: có hai kết quả, mặt sấp (S) hoặc mặt ngửa (N).
- Gieo một con xúc xắc cân đối: có sáu kết quả, mặt $1$, $2$, $3$, $4$, $5$ hoặc $6$ chấm.
- Quay một vòng quay chia thành $8$ phần bằng nhau, đánh số từ $1$ đến $8$.

Câu hỏi: khi gieo xúc xắc, khả năng xuất hiện mặt có số chấm chẵn là bao nhiêu? Trong sáu kết quả, ba kết quả ($2$, $4$, $6$) cho số chẵn. Mỗi kết quả có cùng khả năng xảy ra, nên ta đoán khả năng đó là $3$ trên $6$, tức $\dfrac12$. Các mục sau gọi tên và hệ thống hoá cách làm này.

## Kết quả có thể của phép thử

:::definition Phép thử và kết quả có thể
**Phép thử ngẫu nhiên** (gọi tắt là phép thử) là một hoạt động mà ta không đoán trước được kết quả, nhưng biết được tất cả các kết quả có thể xảy ra. Mỗi kết quả như vậy gọi là một **kết quả có thể**. Tập hợp tất cả các kết quả có thể gọi là **không gian mẫu** của phép thử.
:::

Nếu các kết quả có thể có cùng khả năng xảy ra thì ta gọi chúng là **đồng khả năng**. Đồng xu và xúc xắc cân đối, hộp phiếu giống hệt nhau và bốc không nhìn, vòng quay chia phần bằng nhau đều cho các kết quả đồng khả năng.

**Hiểu sâu hơn.** Đồng khả năng là điều kiện then chốt. Một vòng quay có ô đỏ rộng gấp đôi ô xanh thì kết quả "đỏ" và "xanh" không đồng khả năng; khi đó cách tính bằng tỉ số ở mục sau không dùng được.

:::example Liệt kê kết quả có thể
Tung một đồng xu hai lần liên tiếp. Liệt kê các kết quả có thể.

**Lời giải.** Mỗi lần tung có hai khả năng S hoặc N. Ta ghi kết quả theo thứ tự lần thứ nhất, lần thứ hai:
$$SS,\quad SN,\quad NS,\quad NN.$$
Có $4$ kết quả có thể, và vì đồng xu cân đối nên chúng đồng khả năng.

Vậy các kết quả có thể là $SS$, $SN$, $NS$, $NN$.
:::

## Kết quả thuận lợi cho biến cố

**Biến cố** là một sự kiện mà việc xảy ra hay không phụ thuộc vào kết quả của phép thử. Ví dụ, khi gieo xúc xắc, "xuất hiện mặt có số chấm chẵn" là một biến cố.

:::definition Kết quả thuận lợi
Mỗi kết quả có thể làm cho biến cố $E$ xảy ra gọi là **kết quả thuận lợi** cho biến cố $E$.
:::

Khi gieo xúc xắc, biến cố "mặt chẵn" có $3$ kết quả thuận lợi là $2$, $4$, $6$. Biến cố "mặt lớn hơn $6$" không có kết quả thuận lợi nào, còn biến cố "mặt nhỏ hơn $7$" có cả $6$ kết quả là thuận lợi.

:::example Xác định kết quả thuận lợi
Rút ngẫu nhiên một thẻ từ $20$ thẻ đánh số từ $1$ đến $20$. Có bao nhiêu kết quả có thể? Biến cố $A$: "số trên thẻ chia hết cho $5$" có những kết quả thuận lợi nào?

**Lời giải.** Mỗi thẻ là một kết quả có thể, nên có $20$ kết quả có thể. Các số từ $1$ đến $20$ chia hết cho $5$ là $5$, $10$, $15$, $20$.

Vậy có $20$ kết quả có thể, và biến cố $A$ có $4$ kết quả thuận lợi là $5$, $10$, $15$, $20$.
:::

## Xác suất của biến cố

:::theorem Cách tính xác suất bằng tỉ số
Giả sử phép thử có $n$ kết quả có thể và chúng đồng khả năng. Nếu biến cố $E$ có $k$ kết quả thuận lợi thì **xác suất** của $E$, kí hiệu $P(E)$, là
$$P(E)=\frac{k}{n}.$$
:::

**Vì sao?** Mỗi kết quả có thể chiếm cùng một phần $\dfrac1n$ của khả năng. Biến cố $E$ gồm $k$ kết quả như vậy nên chiếm $k\cdot\dfrac1n=\dfrac kn$. Nói cách khác, nếu lặp lại phép thử rất nhiều lần thì tỉ lệ số lần $E$ xảy ra sẽ gần $\dfrac kn$.

Vì $0\leq k\leq n$ nên ta có các tính chất sau:
- $0\leq P(E)\leq1$.
- Biến cố **chắc chắn** (luôn xảy ra, $k=n$) có $P(E)=1$.
- Biến cố **không thể** (không bao giờ xảy ra, $k=0$) có $P(E)=0$.
- Biến cố $\overline{E}$ "$E$ không xảy ra" (biến cố đối của $E$) có $P(\overline{E})=1-P(E)$, vì kết quả thuận lợi cho $E$ và cho $\overline{E}$ cộng lại là tất cả $n$ kết quả.

:::example Tính xác suất khi gieo xúc xắc
Gieo một con xúc xắc cân đối. Tính xác suất của các biến cố:

a) $A$: "mặt xuất hiện có số chấm chẵn".

b) $B$: "mặt xuất hiện có số chấm là số nguyên tố".

c) $C$: "mặt xuất hiện có số chấm lớn hơn $6$".

d) $D$: "mặt xuất hiện có số chấm nhỏ hơn $7$".

**Lời giải.** Có $n=6$ kết quả có thể, đồng khả năng.

a) Kết quả thuận lợi là $2$, $4$, $6$, nên $k=3$ và $P(A)=\dfrac36=\dfrac12$.

b) Các số nguyên tố trong $1;\dots;6$ là $2$, $3$, $5$, nên $k=3$ và $P(B)=\dfrac36=\dfrac12$.

c) Không có kết quả nào lớn hơn $6$, nên $k=0$ và $P(C)=0$.

d) Cả $6$ kết quả đều nhỏ hơn $7$, nên $k=6$ và $P(D)=1$.

Vậy $P(A)=\dfrac12$, $P(B)=\dfrac12$, $P(C)=0$, $P(D)=1$.
:::

:::example Hộp bi
Trong một hộp có $3$ bi đỏ, $5$ bi xanh và $2$ bi vàng, cùng kích thước. Lấy ngẫu nhiên một bi. Tính xác suất của biến cố $E$: "bi lấy được màu đỏ" và biến cố $F$: "bi lấy được không phải màu xanh".

**Lời giải.** Tổng số bi là $3+5+2=10$, nên có $10$ kết quả có thể, đồng khả năng. Có $3$ bi đỏ nên $P(E)=\dfrac{3}{10}$. Bi không phải màu xanh là bi đỏ hoặc vàng: $3+2=5$ bi, nên $P(F)=\dfrac{5}{10}=\dfrac12$.

Kiểm tra bằng biến cố đối: bi xanh có xác suất $\dfrac{5}{10}$ và $1-\dfrac{5}{10}=\dfrac12$, đúng.

Vậy $P(E)=\dfrac{3}{10}$ và $P(F)=\dfrac12$.
:::

Khi có nhiều lần thử, ta phải liệt kê cẩn thận để không bỏ sót hay đếm trùng kết quả.

:::example Tung hai đồng xu
Tung một đồng xu cân đối hai lần. Tính xác suất của biến cố $A$: "hai mặt giống nhau" và biến cố $B$: "có ít nhất một mặt ngửa".

**Lời giải.** Các kết quả có thể là $SS$, $SN$, $NS$, $NN$, nên $n=4$.

Biến cố $A$ có các kết quả thuận lợi $SS$ và $NN$, nên $k=2$ và $P(A)=\dfrac24=\dfrac12$.

Biến cố $B$ có các kết quả thuận lợi $SN$, $NS$, $NN$ (có ít nhất một chữ N), nên $k=3$ và $P(B)=\dfrac34$.

Vậy $P(A)=\dfrac12$ và $P(B)=\dfrac34$.
:::

Ta quay lại hộp phiếu bốc thăm ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Bốc thăm trúng quà
Trong hộp có $20$ phiếu giống hệt nhau, trong đó $4$ phiếu ghi "Trúng quà" (giả sử). Bạn bốc ngẫu nhiên một phiếu. Tính xác suất bạn trúng quà.

**Lời giải.**

*Hiểu đề.* Phép thử là bốc một phiếu; có $20$ kết quả có thể, trong đó $4$ kết quả thuận lợi cho biến cố "trúng quà".

*Tìm cách giải.* Các phiếu giống hệt nhau và bốc không nhìn nên các kết quả đồng khả năng; dùng $P(E)=\dfrac kn$.

*Giải.* Gọi $E$ là biến cố "trúng quà". Ta có $n=20$ và $k=4$ nên $P(E)=\dfrac{4}{20}=\dfrac15=20\%$.

*Nhìn lại.* Kiểm tra: xác suất nằm giữa $0$ và $1$, và trúng quà ít hơn trượt vì $4<16$. Xác suất trượt là $1-\dfrac15=\dfrac45$. Nếu hộp có $8$ phiếu trúng thì xác suất tăng gấp đôi, thành $\dfrac{8}{20}=40\%$.

Vậy xác suất bạn trúng quà là $\dfrac15$, tức $20\%$.
:::

:::warning Những sai lầm thường gặp
- **Coi các kết quả không đồng khả năng là đồng khả năng.** Sai: tung hai đồng xu có $3$ kết quả "hai ngửa", "hai sấp", "một ngửa một sấp", nên xác suất "một ngửa một sấp" là $\dfrac13$. Lí do sai: "một ngửa một sấp" gồm hai kết quả $SN$ và $NS$ nên khả năng gấp đôi các kết quả còn lại. Đúng: có $4$ kết quả đồng khả năng và xác suất là $\dfrac24=\dfrac12$.
- **Lấy tỉ số thuận lợi trên không thuận lợi.** Sai: $P(\text{đỏ})=\dfrac37$ khi hộp có $3$ bi đỏ và $7$ bi khác. Lí do sai: mẫu số phải là tổng số kết quả có thể $3+7=10$. Đúng: $P(\text{đỏ})=\dfrac{3}{10}$.
- **Bỏ sót kết quả thuận lợi.** Sai: $P(\text{có ít nhất một mặt ngửa})=\dfrac24$ khi tung hai đồng xu (chỉ đếm $SN$, $NS$). Lí do sai: kết quả $NN$ cũng có mặt ngửa. Đúng: $\dfrac34$.
:::

**Kết nối.** Bài này dùng phân số và tỉ số phần trăm ở các lớp dưới, và kĩ năng đếm có hệ thống. Nó chuẩn bị cho bài [mối liên hệ giữa xác suất thực nghiệm với xác suất](lesson:experimental-theoretical-probability), nơi ta so sánh con số $\dfrac kn$ này với kết quả thu được khi thực sự làm thí nghiệm nhiều lần.

## Thuật ngữ

:::terms
- phép thử ngẫu nhiên | random experiment
- kết quả có thể | possible outcome
- không gian mẫu | sample space
- đồng khả năng | equally likely
- biến cố | event
- kết quả thuận lợi | favourable outcome
- xác suất | probability
- biến cố chắc chắn | certain event
- biến cố không thể | impossible event
- biến cố đối | complementary event
:::

## Tóm tắt

- Phép thử ngẫu nhiên có các kết quả có thể mà ta không đoán trước được; các kết quả đồng khả năng nếu có cùng khả năng xảy ra.
- Kết quả thuận lợi cho biến cố $E$ là kết quả làm $E$ xảy ra.
- Với $n$ kết quả có thể đồng khả năng và $k$ kết quả thuận lợi, $P(E)=\dfrac kn$.
- $0\leq P(E)\leq1$; biến cố chắc chắn có xác suất $1$, biến cố không thể có xác suất $0$.
- Xác suất biến cố đối: $P(\overline E)=1-P(E)$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Gieo một con xúc xắc cân đối. Nêu các kết quả có thể, các kết quả thuận lợi cho biến cố "mặt xuất hiện có số chấm chia hết cho $3$" và tính xác suất của biến cố đó.

::hint
**Kiến thức:** $P(E)=\dfrac kn$.

**Gợi ý các bước:**
1. Liệt kê $6$ kết quả có thể.
2. Chọn các số chia hết cho $3$.

::solution
Các kết quả có thể là $1$, $2$, $3$, $4$, $5$, $6$, nên $n=6$. Các kết quả thuận lợi là $3$ và $6$, nên $k=2$. Do đó xác suất là $\dfrac26=\dfrac13$.

Vậy xác suất là $\dfrac13$.

**Đáp số.** $\dfrac13$.
:::

:::exercise
Rút ngẫu nhiên một thẻ từ $12$ thẻ đánh số từ $1$ đến $12$. Tính xác suất để số trên thẻ:

a) chia hết cho $4$;

b) có hai chữ số;

c) là số nguyên tố.

::hint
**Kiến thức:** đếm số kết quả thuận lợi $k$ rồi chia cho $n=12$.

**Gợi ý các bước:**
1. Liệt kê các thẻ thoả mãn từng điều kiện.
2. Tính $\dfrac{k}{12}$ và rút gọn.

::solution
Rút ngẫu nhiên một thẻ từ $12$ thẻ nên có $n=12$ kết quả có thể, đồng khả năng. Nếu có $k$ kết quả thuận lợi cho một biến cố thì xác suất của biến cố đó là $\dfrac kn$.

a) Các số trên thẻ chia hết cho $4$ là $4$, $8$, $12$. Có $k=3$ kết quả thuận lợi, nên xác suất là $\dfrac3{12}=\dfrac14$.

b) Các số trên thẻ có hai chữ số là $10$, $11$, $12$. Có $k=3$ kết quả thuận lợi, nên xác suất là $\dfrac3{12}=\dfrac14$.

c) Các số nguyên tố trong các số từ $1$ đến $12$ là $2$, $3$, $5$, $7$, $11$ (số $1$ không phải số nguyên tố). Có $k=5$ kết quả thuận lợi, nên xác suất là $\dfrac5{12}$.

Vậy xác suất để số trên thẻ chia hết cho $4$ là $\dfrac14$, có hai chữ số là $\dfrac14$, là số nguyên tố là $\dfrac5{12}$.

**Đáp số.** a) $\dfrac14$. b) $\dfrac14$. c) $\dfrac5{12}$.
:::

:::exercise
Một hộp có $4$ bi trắng và $6$ bi đen, cùng kích thước. Lấy ngẫu nhiên một bi. Tính xác suất lấy được bi trắng, bi đen và tổng hai xác suất đó.

::hint
**Kiến thức:** $n$ là tổng số bi.

**Gợi ý các bước:**
1. Tính $n=4+6$.
2. Tính hai xác suất và cộng lại.

::solution
Hộp có $4+6=10$ bi, các bi cùng kích thước nên có $n=10$ kết quả có thể, đồng khả năng.

Gọi $T$ là biến cố "lấy được bi trắng" và $D$ là biến cố "lấy được bi đen". Có $4$ kết quả thuận lợi cho $T$ và $6$ kết quả thuận lợi cho $D$. Do đó
$$P(T)=\frac{4}{10}=\frac25,\qquad P(D)=\frac{6}{10}=\frac35.$$

Tổng hai xác suất là
$$P(T)+P(D)=\frac25+\frac35=1.$$

Kết quả này bằng $1$ vì $T$ và $D$ là hai biến cố đối nhau: mỗi lần lấy chắc chắn được một bi trắng hoặc một bi đen, không thể được cả hai.

Vậy xác suất lấy được bi trắng là $\dfrac25$, bi đen là $\dfrac35$ và tổng hai xác suất bằng $1$.

**Đáp số.** $\dfrac25$; $\dfrac35$; tổng bằng $1$.
:::

:::exercise
Một vòng quay chia thành $8$ phần bằng nhau, đánh số từ $1$ đến $8$. Tính xác suất của các biến cố:

a) $A$: "số chẵn lớn hơn $4$".

b) $B$: "số nhỏ hơn $9$".

c) $C$: "số $10$".

::hint
**Kiến thức:** biến cố chắc chắn có xác suất $1$, biến cố không thể có xác suất $0$.

**Gợi ý các bước:**
1. Liệt kê các kết quả thuận lợi.
2. Chú ý các trường hợp đặc biệt.

::solution
Vòng quay chia thành $8$ phần bằng nhau, đánh số từ $1$ đến $8$, nên có $n=8$ kết quả có thể, đồng khả năng.

a) Các số chẵn lớn hơn $4$ là $6$ và $8$. Có $k=2$ kết quả thuận lợi, nên $P(A)=\dfrac28=\dfrac14$.

b) Mọi số từ $1$ đến $8$ đều nhỏ hơn $9$. Có $k=8$ kết quả thuận lợi, nên $P(B)=\dfrac88=1$. Đây là biến cố chắc chắn.

c) Trên vòng quay không có số $10$. Có $k=0$ kết quả thuận lợi, nên $P(C)=\dfrac08=0$. Đây là biến cố không thể.

Vậy $P(A)=\dfrac14$, $P(B)=1$, $P(C)=0$.

**Đáp số.** a) $\dfrac14$. b) $1$. c) $0$.
:::

:::exercise
Tung một đồng xu cân đối hai lần. Tính xác suất của biến cố "hai mặt khác nhau" và biến cố "cả hai mặt đều ngửa".

::hint
**Kiến thức:** liệt kê $4$ kết quả $SS$, $SN$, $NS$, $NN$.

**Gợi ý các bước:**
1. Chọn các kết quả thuận lợi cho từng biến cố.
2. Tính tỉ số với $n=4$.

::solution
Kí hiệu $S$ là mặt sấp và $N$ là mặt ngửa. Tung đồng xu cân đối hai lần, các kết quả có thể là $SS$, $SN$, $NS$, $NN$. Có $n=4$ kết quả có thể, đồng khả năng.

Biến cố "hai mặt khác nhau" có các kết quả thuận lợi là $SN$ và $NS$, tức là $k=2$. Xác suất là $\dfrac24=\dfrac12$.

Biến cố "cả hai mặt đều ngửa" có một kết quả thuận lợi là $NN$, tức là $k=1$. Xác suất là $\dfrac14$.

Vậy xác suất của biến cố "hai mặt khác nhau" là $\dfrac12$ và của biến cố "cả hai mặt đều ngửa" là $\dfrac14$.

**Đáp số.** $\dfrac12$; $\dfrac14$.
:::

:::exercise
Lớp 8A có $40$ học sinh, trong đó $18$ bạn nam. Chọn ngẫu nhiên một bạn để làm trực nhật. Tính xác suất bạn được chọn là nam và là nữ.

::hint
**Kiến thức:** số học sinh nữ bằng tổng trừ số nam.

**Gợi ý các bước:**
1. Tính số bạn nữ.
2. Tính hai xác suất.

::solution
Số bạn nữ là $40-18=22$ (bạn).

Chọn ngẫu nhiên một bạn trong $40$ bạn nên có $n=40$ kết quả có thể, đồng khả năng.

Có $18$ kết quả thuận lợi cho biến cố "bạn được chọn là nam", nên xác suất là $\dfrac{18}{40}=\dfrac{9}{20}$.

Có $22$ kết quả thuận lợi cho biến cố "bạn được chọn là nữ", nên xác suất là $\dfrac{22}{40}=\dfrac{11}{20}$.

Kiểm tra: $\dfrac{9}{20}+\dfrac{11}{20}=1$, đúng vì hai biến cố đối nhau.

Vậy xác suất bạn được chọn là nam là $\dfrac9{20}$ và là nữ là $\dfrac{11}{20}$.

**Đáp số.** $\dfrac{9}{20}$; $\dfrac{11}{20}$.
:::

:::exercise
Một hộp có $50$ phiếu bốc thăm giống hệt nhau, trong đó có $2$ phiếu giải nhất, $5$ phiếu giải nhì, $8$ phiếu giải ba và còn lại không trúng (giả sử). Bốc một phiếu. Tính xác suất trúng giải bất kì và xác suất không trúng.

::hint
**Kiến thức:** trúng giải bất kì gồm cả ba loại giải.

**Gợi ý các bước:**
1. Tính tổng số phiếu trúng.
2. Dùng biến cố đối cho "không trúng".

::solution
Hộp có $50$ phiếu giống hệt nhau nên có $n=50$ kết quả có thể, đồng khả năng.

Số phiếu trúng giải là $2+5+8=15$ (phiếu). Do đó xác suất trúng giải bất kì là
$$\frac{15}{50}=\frac{3}{10}.$$

Biến cố "không trúng" là biến cố đối của biến cố "trúng giải bất kì", nên xác suất là
$$1-\frac{3}{10}=\frac{7}{10}.$$

Kiểm tra: số phiếu không trúng là $50-15=35$ (phiếu), và $\dfrac{35}{50}=\dfrac{7}{10}$ (khớp).

Vậy xác suất trúng giải bất kì là $\dfrac3{10}$ và xác suất không trúng là $\dfrac7{10}$.

**Đáp số.** $\dfrac3{10}$; $\dfrac7{10}$.
:::

:::exercise
Gieo cùng lúc hai con xúc xắc cân đối. Có bao nhiêu kết quả có thể? Tính xác suất để tổng số chấm bằng $7$.

::hint
**Kiến thức:** mỗi kết quả là một cặp (số chấm con thứ nhất, số chấm con thứ hai).

**Gợi ý các bước:**
1. Đếm số cặp: $6\cdot6$.
2. Liệt kê các cặp có tổng $7$.

::solution
Mỗi con xúc xắc có $6$ khả năng xuất hiện. Theo quy tắc nhân, số kết quả có thể khi gieo hai con xúc xắc là $6\cdot6=36$. Các kết quả này đồng khả năng vì hai con xúc xắc cân đối.

Gọi $A$ là biến cố "tổng số chấm bằng $7$". Các cặp (số chấm con thứ nhất; số chấm con thứ hai) có tổng bằng $7$ là
$$(1; 6),\ (2; 5),\ (3; 4),\ (4; 3),\ (5; 2),\ (6; 1).$$
Có $k=6$ kết quả thuận lợi. Do đó
$$P(A)=\frac{6}{36}=\frac16.$$

Vậy có $36$ kết quả có thể và xác suất để tổng số chấm bằng $7$ là $\dfrac16$.

**Đáp số.** $36$ kết quả; $\dfrac16$.
:::

:::exercise
Lập các số có hai chữ số khác nhau từ các chữ số $1$, $2$, $3$. Chọn ngẫu nhiên một số trong các số đó. Tính xác suất số được chọn là số chẵn. (Ôn lại cách viết xác suất bằng phân số tối giản.)

::hint
**Kiến thức:** số chẵn có chữ số tận cùng chẵn.

**Gợi ý các bước:**
1. Liệt kê các số có hai chữ số khác nhau.
2. Đếm các số chẵn.

::solution
Các số có hai chữ số khác nhau lập từ các chữ số $1$, $2$, $3$ là $12$, $13$, $21$, $23$, $31$, $32$. Có $n=6$ kết quả có thể, đồng khả năng.

Gọi $A$ là biến cố "số được chọn là số chẵn". Số chẵn là số có chữ số tận cùng chẵn, nên các số chẵn trong các số trên là $12$ và $32$. Có $k=2$ kết quả thuận lợi.

Xác suất của biến cố $A$ là $\dfrac26$. Chia cả tử và mẫu cho ước chung lớn nhất là $2$, ta được phân số tối giản
$$P(A)=\frac26=\frac13.$$

Vậy xác suất để số được chọn là số chẵn bằng $\dfrac13$.

**Đáp số.** $\dfrac13$.
:::

:::exercise Thử thách
Chọn ngẫu nhiên một số tự nhiên có hai chữ số (từ $10$ đến $99$). Tính xác suất để số đó:

a) chia hết cho $7$;

b) có tổng các chữ số bằng $9$.

::hint
**Kiến thức:** có $99-10+1=90$ số có hai chữ số.

**Gợi ý các bước:**
1. a) Liệt kê các bội của $7$ từ $14$ đến $98$.
2. b) Liệt kê các số có tổng chữ số bằng $9$.

::solution
Các số tự nhiên có hai chữ số từ $10$ đến $99$ có $99-10+1=90$ số. Do đó có $n=90$ kết quả có thể, đồng khả năng.

a) Bội của $7$ có hai chữ số có dạng $7m$ với $10\le7m\le99$, tức $2\le m\le14$ (vì $7\cdot1=7<10$ và $7\cdot14=98\le99$, còn $7\cdot15=105>99$). Các số đó là $14$, $21$, $28$, $\dots$, $98$, tức $7\cdot2$, $7\cdot3$, $\dots$, $7\cdot14$. Số các số là $14-2+1=13$, nên $k=13$.

Xác suất là $\dfrac{13}{90}$.

b) Các số có hai chữ số và tổng các chữ số bằng $9$ là $18$, $27$, $36$, $45$, $54$, $63$, $72$, $81$, $90$. Có $k=9$ kết quả thuận lợi.

Xác suất là $\dfrac{9}{90}=\dfrac1{10}$.

Vậy xác suất để số được chọn chia hết cho $7$ là $\dfrac{13}{90}$ và để có tổng các chữ số bằng $9$ là $\dfrac1{10}$.

**Đáp số.** a) $\dfrac{13}{90}$. b) $\dfrac1{10}$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Gieo một con xúc xắc cân đối. Xác suất để mặt xuất hiện có số chấm lớn hơn $4$ là
A. $\dfrac16$.
B. $\dfrac23$.
C. $\dfrac12$.
D. $\dfrac13$.
::key D
Các kết quả thuận lợi là $5$ và $6$ nên $P=\dfrac26=\dfrac13$. A chỉ đếm một kết quả, C và B đếm sai số kết quả thuận lợi.

::mc TH
Một hộp có $3$ bi đỏ, $5$ bi xanh, $2$ bi vàng. Lấy một bi. Xác suất để bi lấy được không phải màu đỏ là
A. $\dfrac{7}{10}$.
B. $\dfrac37$.
C. $\dfrac12$.
D. $\dfrac{3}{10}$.
::key A
Có $5+2=7$ bi không đỏ trong $10$ bi nên $P=\dfrac7{10}$. A là xác suất lấy bi đỏ, B lấy $3$ trên $7$, C là xác suất lấy bi xanh.

::mc VD
Tung một đồng xu cân đối hai lần. Xác suất để hai mặt giống nhau là
A. $\dfrac13$.
B. $\dfrac12$.
C. $\dfrac14$.
D. $\dfrac34$.
::key B
Các kết quả thuận lợi là $SS$ và $NN$, trong $4$ kết quả nên $P=\dfrac24=\dfrac12$. B coi chỉ có $3$ kết quả, C chỉ đếm một kết quả, D là xác suất có ít nhất một mặt ngửa.

::mc TH
Rút một thẻ từ $20$ thẻ đánh số từ $1$ đến $20$. Xác suất để số trên thẻ chia hết cho $5$ là
A. $\dfrac14$.
B. $\dfrac45$.
C. $\dfrac15$.
D. $\dfrac1{20}$.
::key C
Có $4$ số ($5$, $10$, $15$, $20$) nên $P=\dfrac{4}{20}=\dfrac15$. A tính $\dfrac{5}{20}$, B lấy $\dfrac{4}{5}$, D chỉ đếm một kết quả.

::tf NB TH TH TH
Gieo một con xúc xắc cân đối. Xét tính đúng sai của các mệnh đề sau:
a) Phép thử có $5$ kết quả có thể.
b) Xác suất xuất hiện mặt có số chấm chẵn bằng $\dfrac12$.
c) Xác suất xuất hiện mặt có số chấm lớn hơn $6$ bằng $0$.
d) Xác suất xuất hiện mặt có số chấm là số nguyên tố bằng $\dfrac13$.
::key S Đ Đ S
a) Sai: có $6$ kết quả. b) Đúng: $\dfrac36=\dfrac12$. c) Đúng: đó là biến cố không thể. d) Sai: các số nguyên tố là $2$, $3$, $5$ nên xác suất là $\dfrac36=\dfrac12$.

::sa TH
Hộp có $20$ phiếu, trong đó $4$ phiếu trúng quà. Bốc một phiếu. Xác suất trúng quà bằng bao nhiêu phần trăm?
::key 20
$\dfrac4{20}=\dfrac15=20\%$.

::sa TH
Gieo cùng lúc hai con xúc xắc cân đối. Có bao nhiêu kết quả có thể?
::key 36
$6\cdot6=36$.
:::
