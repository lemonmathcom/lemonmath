---
title: Làm quen với biến cố
description: Phân biệt biến cố chắc chắn, không thể và ngẫu nhiên; so sánh khả năng xảy ra và tính xác suất đơn giản bằng tỉ số các kết quả thuận lợi.
minutes: 20
---

:::goals
- Nhận biết phép thử ngẫu nhiên và liệt kê các kết quả có thể xảy ra.
- Phân loại biến cố thành chắc chắn, không thể hoặc ngẫu nhiên.
- So sánh khả năng xảy ra của các biến cố đơn giản.
- Tính xác suất của biến cố trong các trò chơi rút thẻ, gieo xúc xắc, quay số.
:::

Giả sử lớp bạn có một trò chơi rút thẻ. Hộp có $10$ tấm thẻ giống hệt nhau, đánh số từ $1$ đến $10$. Bạn rút một thẻ mà không nhìn. Có hai luật để chọn: thắng $1$ điểm nếu rút được thẻ số chẵn, hoặc thắng $1$ điểm nếu rút được thẻ số chia hết cho $5$. Bạn chỉ được chọn một luật.

Bạn sẽ chọn luật nào, và vì sao? Trong trò chơi này, có điều gì chắc chắn xảy ra và có điều gì không bao giờ xảy ra không?

## Phép thử và các kết quả có thể

Rút một thẻ là một hoạt động mà ta không đoán trước được kết quả, nhưng biết chắc mọi thẻ có thể rút được là thẻ nào. Những hoạt động như vậy rất quen thuộc: tung đồng xu, gieo xúc xắc, quay vòng số ở hội chợ.

:::definition Phép thử ngẫu nhiên
Phép thử ngẫu nhiên là một hoạt động mà ta không thể đoán trước kết quả, nhưng biết được tất cả các kết quả có thể xảy ra. Mỗi khả năng riêng lẻ gọi là một **kết quả**.

Ví dụ: rút một thẻ từ hộp $10$ thẻ có $10$ kết quả; gieo một con xúc xắc có $6$ kết quả; tung một đồng xu có $2$ kết quả là mặt sấp (S) và mặt ngửa (N).
:::

## Các loại biến cố

Xét phép thử "rút một thẻ từ hộp $10$ thẻ" và ba câu sau: (1) thẻ rút được ghi số nhỏ hơn $11$; (2) thẻ rút được ghi số $11$; (3) thẻ rút được ghi số chẵn. Câu (1) lúc nào cũng đúng, câu (2) không bao giờ đúng, còn câu (3) khi đúng khi sai. Ba câu này thuộc ba loại biến cố khác nhau.

:::definition Biến cố
Biến cố là một sự kiện liên quan đến kết quả của phép thử. Có ba loại:
- **Biến cố chắc chắn**: luôn xảy ra.
- **Biến cố không thể**: không bao giờ xảy ra.
- **Biến cố ngẫu nhiên**: có thể xảy ra, cũng có thể không xảy ra.
:::

Kết quả làm cho biến cố xảy ra gọi là **kết quả thuận lợi** cho biến cố đó. Chẳng hạn, với biến cố "rút được thẻ số chẵn", các kết quả thuận lợi là thẻ $2$, $4$, $6$, $8$, $10$.

:::example Phân loại biến cố
Gieo một con xúc xắc cân đối có $6$ mặt. Mỗi biến cố sau là chắc chắn, không thể hay ngẫu nhiên?

a) Số chấm xuất hiện nhỏ hơn $7$.

b) Số chấm xuất hiện là $7$.

c) Số chấm xuất hiện là số chẵn.

d) Số chấm xuất hiện lớn hơn $4$.

**Lời giải.** Các kết quả có thể là $1$, $2$, $3$, $4$, $5$, $6$. Với mỗi biến cố, ta xem nó xảy ra với mọi kết quả, với không kết quả nào, hay chỉ với một số kết quả.

a) Cả sáu kết quả đều nhỏ hơn $7$, nên biến cố luôn xảy ra: chắc chắn.

b) Không kết quả nào bằng $7$, nên biến cố không bao giờ xảy ra: không thể.

c) Biến cố xảy ra khi ra $2$, $4$, $6$ và không xảy ra khi ra $1$, $3$, $5$: ngẫu nhiên.

d) Biến cố xảy ra khi ra $5$ hoặc $6$ và không xảy ra khi ra $1$, $2$, $3$, $4$: ngẫu nhiên.

Vậy a) chắc chắn; b) không thể; c) và d) ngẫu nhiên.
:::

## Khả năng xảy ra và xác suất

Với biến cố ngẫu nhiên, ta muốn biết nó dễ xảy ra hay khó xảy ra. Khi các kết quả của phép thử có cùng khả năng xuất hiện (thẻ giống hệt nhau, xúc xắc cân đối, vòng quay chia các ô bằng nhau), ta gọi chúng là **đồng khả năng**. Lúc đó, biến cố nào có càng nhiều kết quả thuận lợi thì càng dễ xảy ra, và ta đo mức dễ xảy ra bằng một con số.

:::theorem Xác suất của biến cố
Nếu phép thử có $n$ kết quả đồng khả năng và biến cố $A$ có $k$ kết quả thuận lợi thì xác suất của $A$ là
$$P(A)=\frac{k}{n}.$$
Luôn có $0\le P(A)\le1$. Biến cố chắc chắn có xác suất $1$, biến cố không thể có xác suất $0$.
:::

**Vì sao?** Có $n$ kết quả đồng khả năng, nên mỗi kết quả chiếm một phần $\dfrac1n$ của "toàn bộ khả năng". Biến cố $A$ có $k$ kết quả thuận lợi nên chiếm $k$ phần như vậy, tức là $\dfrac{k}{n}$. Vì $k$ chạy từ $0$ (không kết quả nào) đến $n$ (mọi kết quả) nên $P(A)$ nằm từ $0$ đến $1$.

:::example Trả lời câu hỏi mở đầu
Rút một thẻ từ hộp $10$ thẻ đánh số $1$ đến $10$. Xét các biến cố: $A$: "thẻ số chẵn"; $B$: "thẻ số chia hết cho $5$"; $C$: "thẻ số nguyên tố". Hãy liệt kê kết quả thuận lợi, tính xác suất của mỗi biến cố và cho biết biến cố nào dễ xảy ra nhất.

**Lời giải.** Phép thử có $10$ kết quả đồng khả năng (các thẻ giống hệt nhau).

Kết quả thuận lợi cho $A$ là các thẻ $2$, $4$, $6$, $8$, $10$ (có $5$ kết quả), nên $P(A)=\dfrac{5}{10}=\dfrac12$.

Kết quả thuận lợi cho $B$ là các thẻ $5$, $10$ (có $2$ kết quả), nên $P(B)=\dfrac{2}{10}=\dfrac15$.

Kết quả thuận lợi cho $C$ là các thẻ $2$, $3$, $5$, $7$ (có $4$ kết quả), nên $P(C)=\dfrac{4}{10}=\dfrac25$.

So sánh $\dfrac12=\dfrac{5}{10}$, $\dfrac25=\dfrac{4}{10}$, $\dfrac15=\dfrac{2}{10}$, ta thấy $P(A)>P(C)>P(B)$.

Vậy $P(A)=\dfrac12$, $P(B)=\dfrac15$, $P(C)=\dfrac25$, và biến cố $A$ dễ xảy ra nhất. Do đó nên chọn luật "thẻ số chẵn".
:::

:::graph Vòng quay chia thành 8 ô bằng nhau
alt: Vòng quay hình tròn chia thành 8 ô bằng nhau, đánh số từ 1 đến 8 theo chiều kim đồng hồ
x: -4..4
y: -4..4
plot: sqrt(9 - x^2)
plot: -sqrt(9 - x^2)
segment: (0, 0) (0.0, 3.0)
segment: (0, 0) (2.12, 2.12)
segment: (0, 0) (3.0, 0.0)
segment: (0, 0) (2.12, -2.12)
segment: (0, 0) (0.0, -3.0)
segment: (0, 0) (-2.12, -2.12)
segment: (0, 0) (-3.0, -0.0)
segment: (0, 0) (-2.12, 2.12)
label: (0.77, 1.85) "1"
label: (1.85, 0.77) "2"
label: (1.85, -0.77) "3"
label: (0.77, -1.85) "4"
label: (-0.77, -1.85) "5"
label: (-1.85, -0.77) "6"
label: (-1.85, 0.77) "7"
label: (-0.77, 1.85) "8"
:::

:::example Quay vòng số
Một vòng quay được chia thành $8$ ô bằng nhau, đánh số từ $1$ đến $8$ như hình. Quay vòng và xem mũi tên dừng ở ô nào. Tính xác suất của các biến cố:

$A$: "ô số chẵn"; $B$: "ô số lớn hơn $5$"; $C$: "ô số chia hết cho $4$"; $D$: "ô số lớn hơn $8$".

**Lời giải.** Vì các ô bằng nhau nên $8$ kết quả là đồng khả năng.

Biến cố $A$ có các kết quả thuận lợi $2$, $4$, $6$, $8$ ($4$ kết quả), nên $P(A)=\dfrac48=\dfrac12$.

Biến cố $B$ có các kết quả thuận lợi $6$, $7$, $8$ ($3$ kết quả), nên $P(B)=\dfrac38$.

Biến cố $C$ có các kết quả thuận lợi $4$, $8$ ($2$ kết quả), nên $P(C)=\dfrac28=\dfrac14$.

Biến cố $D$ không có kết quả thuận lợi (không ô nào lớn hơn $8$), nên là biến cố không thể và $P(D)=\dfrac08=0$.

Vậy $P(A)=\dfrac12$, $P(B)=\dfrac38$, $P(C)=\dfrac14$, $P(D)=0$; trong các biến cố đó, $A$ dễ xảy ra nhất.
:::

:::example Vòng quay ở hội chợ trường
Ở hội chợ, một vòng quay được chia thành $12$ ô bằng nhau: $1$ ô "Giải nhất", $2$ ô "Giải nhì", $4$ ô "Giải ba" và $5$ ô "Chúc may mắn". Mỗi bạn quay một lần. Tính xác suất để bạn trúng Giải nhất, trúng một giải nào đó, và không trúng giải.

**Lời giải.**

*Hiểu đề.* Ta quay một lần và có $12$ kết quả đồng khả năng (mỗi ô một kết quả). Cần tính xác suất của ba biến cố.

*Tìm cách giải.* Với mỗi biến cố, đếm số ô thuận lợi rồi chia cho $12$.

*Giải.* Biến cố "trúng Giải nhất" có $1$ ô thuận lợi, nên xác suất là $\dfrac{1}{12}$. Biến cố "trúng một giải nào đó" có $1+2+4=7$ ô thuận lợi, nên xác suất là $\dfrac{7}{12}$. Biến cố "không trúng giải" có $5$ ô thuận lợi, nên xác suất là $\dfrac{5}{12}$.

*Nhìn lại.* Kiểm tra: $\dfrac{7}{12}+\dfrac{5}{12}=1$, vì mỗi lần quay chắc chắn thuộc một trong hai trường hợp "có giải" hoặc "không giải". Hai trường hợp ấy không có xác suất bằng nhau, vì chúng chiếm $7$ ô và $5$ ô.
:::

:::example Trò chơi có công bằng không?
An và Bình chơi gieo một con xúc xắc cân đối. An thắng nếu số chấm là số chẵn; Bình thắng nếu số chấm chia hết cho $3$. Trò chơi có công bằng không? Nếu không, hãy sửa luật của Bình để trò chơi công bằng.

**Lời giải.** Có $6$ kết quả đồng khả năng: $1$, $2$, $3$, $4$, $5$, $6$.

Biến cố An thắng có các kết quả thuận lợi $2$, $4$, $6$, nên xác suất là $\dfrac36=\dfrac12$.

Biến cố Bình thắng có các kết quả thuận lợi $3$, $6$, nên xác suất là $\dfrac26=\dfrac13$.

Vì $\dfrac12>\dfrac13$ nên An dễ thắng hơn, trò chơi không công bằng.

Để công bằng, Bình cần một luật có $3$ kết quả thuận lợi, chẳng hạn "số chấm lớn hơn $3$" (các kết quả $4$, $5$, $6$), khi đó xác suất cũng là $\dfrac36=\dfrac12$.

Vậy trò chơi không công bằng; sửa luật của Bình thành "số chấm lớn hơn $3$" thì công bằng.
:::

:::warning Những sai lầm thường gặp
- **Thấy hai khả năng thì cho xác suất là $\dfrac12$.** Sai: vòng quay có "có giải" hoặc "không giải", nên xác suất trúng giải là $\dfrac12$. Lí do sai: hai trường hợp này không đồng khả năng, một bên chiếm $7$ ô và một bên chiếm $5$ ô. Đúng: đếm các kết quả đồng khả năng ($12$ ô) rồi lấy $\dfrac{7}{12}$.
- **Nghĩ rằng phép thử "nhớ" lần trước.** Sai: đồng xu vừa ra mặt sấp $5$ lần liên tiếp nên lần sau chắc chắn ra mặt ngửa. Lí do sai: mỗi lần tung là độc lập, đồng xu không nhớ. Đúng: lần nào cũng có $2$ kết quả đồng khả năng, xác suất ra mặt ngửa vẫn là $\dfrac12$.
- **Đếm thiếu kết quả thuận lợi.** Sai: thẻ chia hết cho $5$ chỉ có thẻ $5$, nên xác suất là $\dfrac{1}{10}$. Lí do sai: bỏ sót thẻ $10$. Đúng: liệt kê hết $5$ và $10$, được $\dfrac{2}{10}=\dfrac15$.
:::

**Kết nối.** Xác suất cũng viết được dưới dạng phần trăm: $\dfrac12$ là $50\%$, $\dfrac15$ là $20\%$. Bạn có thể ôn lại cách đổi qua lại ở bài [tỉ số phần trăm](lesson:ratio-percentage-problems).

## Thuật ngữ

:::terms
- phép thử ngẫu nhiên | random experiment
- kết quả | outcome
- biến cố | event
- biến cố chắc chắn | certain event
- biến cố không thể | impossible event
- biến cố ngẫu nhiên | random event
- kết quả thuận lợi | favourable outcome
- đồng khả năng | equally likely
- xác suất | probability
:::

## Tóm tắt

- Phép thử ngẫu nhiên: không đoán trước được kết quả nhưng biết mọi kết quả có thể.
- Biến cố chắc chắn luôn xảy ra, biến cố không thể không bao giờ xảy ra, biến cố ngẫu nhiên có thể xảy ra hoặc không.
- Khi các kết quả đồng khả năng: $P(A)=\dfrac{\text{số kết quả thuận lợi}}{\text{số kết quả có thể}}$.
- $0\le P(A)\le1$; chắc chắn thì $P=1$, không thể thì $P=0$.
- Biến cố có nhiều kết quả thuận lợi hơn thì dễ xảy ra hơn.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Mỗi biến cố sau là chắc chắn, không thể hay ngẫu nhiên?

a) Rút một thẻ từ hộp chỉ có thẻ xanh: thẻ rút được màu xanh.

b) Tung một đồng xu: xuất hiện mặt sấp.

c) Gieo một con xúc xắc: số chấm bằng $0$.

d) Một túi có $5$ bi đỏ và $3$ bi xanh, lấy một bi: được bi vàng.

e) Cũng túi đó, lấy một bi: được bi đỏ hoặc bi xanh.

::hint
**Kiến thức:** chắc chắn là luôn xảy ra; không thể là không bao giờ xảy ra; còn lại là ngẫu nhiên.

**Gợi ý các bước:**
1. Ở a), trong hộp có thẻ màu nào khác không?
2. Ở c), xúc xắc có mặt $0$ chấm không?
3. Ở d) và e), túi có những màu bi nào?

::solution
Ta xét từng biến cố xem nó xảy ra với mọi kết quả, không kết quả nào hay một số kết quả.

a) Hộp chỉ có thẻ xanh nên thẻ rút ra luôn xanh: chắc chắn.

b) Đồng xu có thể ra sấp hoặc ngửa: ngẫu nhiên.

c) Xúc xắc không có mặt $0$ chấm: không thể.

d) Túi không có bi vàng: không thể.

e) Túi chỉ có bi đỏ và bi xanh nên bi lấy ra luôn thuộc hai màu đó: chắc chắn.

**Đáp số.** a) chắc chắn; b) ngẫu nhiên; c) không thể; d) không thể; e) chắc chắn.
:::

:::exercise
Gieo một con xúc xắc cân đối. Liệt kê các kết quả thuận lợi và tính xác suất của các biến cố:

a) $A$: "số chấm là số nguyên tố".

b) $B$: "số chấm lớn hơn $2$ và nhỏ hơn $6$".

c) $C$: "số chấm chia hết cho $7$".

::hint
**Kiến thức:** $P=\dfrac{k}{6}$ với $k$ là số kết quả thuận lợi trong sáu kết quả $1$ đến $6$.

**Gợi ý các bước:**
1. Ở a), nhớ rằng $1$ không phải số nguyên tố.
2. Ở b), các số lớn hơn $2$ và nhỏ hơn $6$ là $3$, $4$, $5$.
3. Ở c), có số nào trong $1$ đến $6$ chia hết cho $7$ không?

::solution
Có $6$ kết quả đồng khả năng: $1$, $2$, $3$, $4$, $5$, $6$.

a) Các số nguyên tố là $2$, $3$, $5$ ($3$ kết quả), nên $P(A)=\dfrac36=\dfrac12$.

b) Các số thoả mãn là $3$, $4$, $5$ ($3$ kết quả), nên $P(B)=\dfrac36=\dfrac12$.

c) Không số nào trong $1$ đến $6$ chia hết cho $7$, nên $C$ là biến cố không thể và $P(C)=0$.

**Đáp số.** a) $\dfrac12$; b) $\dfrac12$; c) $0$.
:::

:::exercise
Một hộp có $12$ thẻ giống hệt nhau, đánh số từ $1$ đến $12$. Rút ngẫu nhiên một thẻ. Tính xác suất của các biến cố: "thẻ số chia hết cho $3$", "thẻ số nguyên tố", "thẻ số lớn hơn $12$". Biến cố nào trong ba biến cố ấy dễ xảy ra hơn: chia hết cho $3$ hay nguyên tố?

::hint
**Kiến thức:** có $12$ kết quả đồng khả năng; so sánh hai phân số cùng mẫu $12$.

**Gợi ý các bước:**
1. Liệt kê các thẻ chia hết cho $3$: bắt đầu từ $3$, cứ cách $3$ đơn vị.
2. Liệt kê các số nguyên tố từ $1$ đến $12$ (không có số $1$).
3. So sánh hai số kết quả thuận lợi.

::solution
Có $12$ kết quả đồng khả năng.

Thẻ chia hết cho $3$ là $3$, $6$, $9$, $12$ ($4$ kết quả), nên xác suất là $\dfrac{4}{12}=\dfrac13$.

Thẻ nguyên tố là $2$, $3$, $5$, $7$, $11$ ($5$ kết quả), nên xác suất là $\dfrac{5}{12}$.

Không có thẻ nào lớn hơn $12$, nên xác suất của biến cố thứ ba là $0$.

Vì $\dfrac{5}{12}>\dfrac{4}{12}$ nên biến cố "thẻ số nguyên tố" dễ xảy ra hơn.

**Đáp số.** $\dfrac13$; $\dfrac{5}{12}$; $0$; biến cố "nguyên tố" dễ xảy ra hơn.
:::

:::exercise
Một túi có $4$ bi đỏ, $3$ bi xanh, $2$ bi vàng và $1$ bi trắng, các viên bi giống hệt nhau về kích thước. Lấy ngẫu nhiên một viên bi.

a) Tính xác suất lấy được bi đỏ.

b) Tính xác suất lấy được bi không phải màu xanh.

c) Màu bi nào có khả năng được lấy ra cao nhất?

::hint
**Kiến thức:** số kết quả có thể là tổng số bi; "không phải màu xanh" gồm các bi đỏ, vàng, trắng.

**Gợi ý các bước:**
1. Tính tổng số bi.
2. Ở b), cộng số bi đỏ, vàng, trắng, hoặc lấy tổng trừ số bi xanh.
3. Ở c), so sánh số bi của từng màu.

::solution
Tổng số bi là $4+3+2+1=10$, nên có $10$ kết quả đồng khả năng.

a) Có $4$ bi đỏ nên xác suất là $\dfrac{4}{10}=\dfrac25$.

b) Số bi không phải màu xanh là $10-3=7$, nên xác suất là $\dfrac{7}{10}$.

c) Màu đỏ có nhiều bi nhất ($4$ bi) nên có khả năng được lấy ra cao nhất.

**Đáp số.** a) $\dfrac25$; b) $\dfrac{7}{10}$; c) màu đỏ.
:::

:::exercise
Trong một buổi bốc thăm từ thiện, có $20$ phiếu giống hệt nhau đánh số từ $1$ đến $20$. Bốc ngẫu nhiên một phiếu. Tính xác suất của các biến cố: $A$: "số tận cùng là $5$"; $B$: "số lớn hơn $15$"; $C$: "số chia hết cho $10$". Biến cố nào có xác suất bằng nhau?

::hint
**Kiến thức:** có $20$ kết quả đồng khả năng; hai biến cố có số kết quả thuận lợi bằng nhau thì có xác suất bằng nhau.

**Gợi ý các bước:**
1. Liệt kê các phiếu thoả mãn từng biến cố.
2. Số tận cùng là $5$: chỉ có $5$ và một số nữa.
3. Đếm số phiếu rồi chia cho $20$.

::solution
Có $20$ kết quả đồng khả năng.

Biến cố $A$ có các phiếu $5$, $15$ ($2$ kết quả), nên $P(A)=\dfrac{2}{20}=\dfrac{1}{10}$.

Biến cố $B$ có các phiếu $16$, $17$, $18$, $19$, $20$ ($5$ kết quả), nên $P(B)=\dfrac{5}{20}=\dfrac14$.

Biến cố $C$ có các phiếu $10$, $20$ ($2$ kết quả), nên $P(C)=\dfrac{2}{20}=\dfrac{1}{10}$.

Vậy $A$ và $C$ có xác suất bằng nhau.

**Đáp số.** $P(A)=\dfrac{1}{10}$; $P(B)=\dfrac14$; $P(C)=\dfrac{1}{10}$; $A$ và $C$ có xác suất bằng nhau.
:::

:::exercise
Lan và Minh chơi rút một thẻ từ hộp $10$ thẻ giống hệt nhau, đánh số từ $1$ đến $10$. Lan thắng nếu rút được thẻ số lẻ; Minh thắng nếu rút được thẻ số lớn hơn $7$. Ai có lợi hơn? Hãy sửa luật của Minh để trò chơi công bằng.

::hint
**Kiến thức:** trò chơi công bằng khi hai biến cố thắng có xác suất bằng nhau.

**Gợi ý các bước:**
1. Liệt kê các thẻ số lẻ và các thẻ lớn hơn $7$.
2. Tính hai xác suất rồi so sánh.
3. Tìm luật mới của Minh có $5$ thẻ thuận lợi.

::solution
Có $10$ kết quả đồng khả năng.

Lan thắng với các thẻ $1$, $3$, $5$, $7$, $9$ ($5$ kết quả), nên xác suất là $\dfrac{5}{10}=\dfrac12$.

Minh thắng với các thẻ $8$, $9$, $10$ ($3$ kết quả), nên xác suất là $\dfrac{3}{10}$.

Vì $\dfrac12=\dfrac{5}{10}>\dfrac{3}{10}$ nên Lan có lợi hơn.

Nếu Minh thắng khi thẻ "lớn hơn $5$" (các thẻ $6$, $7$, $8$, $9$, $10$) thì xác suất là $\dfrac{5}{10}=\dfrac12$, trò chơi công bằng.

**Đáp số.** Lan có lợi hơn; đổi luật của Minh thành "thẻ lớn hơn $5$".
:::

:::exercise
Lớp 7A có $40$ học sinh, gồm $24$ bạn nữ và $16$ bạn nam. Cô giáo chọn ngẫu nhiên một bạn để trực nhật. Tính xác suất bạn được chọn là nữ, là nam; viết các xác suất đó dưới dạng phần trăm. (Ôn lại bài [tỉ số phần trăm](lesson:ratio-percentage-problems).)

::hint
**Kiến thức:** mỗi bạn có cùng khả năng được chọn, nên có $40$ kết quả đồng khả năng.

**Gợi ý các bước:**
1. Số kết quả thuận lợi cho biến cố "được chọn là nữ" bằng số bạn nữ.
2. Rút gọn phân số.
3. Đổi phân số sang phần trăm bằng cách đưa về mẫu $100$.

::solution
Có $40$ kết quả đồng khả năng.

Xác suất chọn được bạn nữ là $\dfrac{24}{40}=\dfrac35=\dfrac{60}{100}=60\%$.

Xác suất chọn được bạn nam là $\dfrac{16}{40}=\dfrac25=\dfrac{40}{100}=40\%$.

Kiểm tra: $60\%+40\%=100\%$, vì bạn được chọn chắc chắn là nữ hoặc nam.

**Đáp số.** Nữ: $\dfrac35=60\%$; nam: $\dfrac25=40\%$.
:::

:::exercise
Một vòng quay được chia thành $10$ ô bằng nhau gồm bốn loại: Giải nhất, Giải nhì, Giải ba và "Không giải". Cần thiết kế sao cho xác suất trúng Giải nhất là $\dfrac{1}{10}$, trúng Giải nhì là $\dfrac15$ và trúng Giải ba là $\dfrac{3}{10}$.

a) Mỗi loại cần bao nhiêu ô?

b) Xác suất không trúng giải là bao nhiêu?

::hint
**Kiến thức:** xác suất $=\dfrac{\text{số ô}}{10}$, nên số ô $=$ xác suất $\cdot10$.

**Gợi ý các bước:**
1. Đưa $\dfrac15$ về mẫu $10$.
2. Tính số ô Giải nhất, Giải nhì, Giải ba.
3. Số ô "Không giải" là phần còn lại của $10$ ô.

::solution
a) Xác suất $\dfrac{1}{10}$ ứng với $1$ ô. Xác suất $\dfrac15=\dfrac{2}{10}$ ứng với $2$ ô. Xác suất $\dfrac{3}{10}$ ứng với $3$ ô. Số ô "Không giải" là $10-1-2-3=4$.

b) Xác suất không trúng giải là $\dfrac{4}{10}=\dfrac25$.

Kiểm tra: $\dfrac{1}{10}+\dfrac{2}{10}+\dfrac{3}{10}+\dfrac{4}{10}=1$.

**Đáp số.** a) Giải nhất $1$ ô, Giải nhì $2$ ô, Giải ba $3$ ô, Không giải $4$ ô. b) $\dfrac25$.
:::

:::exercise Thử thách
Một hộp có $3$ thẻ đỏ và một số thẻ xanh, các thẻ giống hệt nhau. Rút ngẫu nhiên một thẻ thì xác suất rút được thẻ xanh là $\dfrac25$. Hộp có bao nhiêu thẻ xanh?

::hint
**Kiến thức:** rút được thẻ xanh hoặc thẻ đỏ là biến cố chắc chắn, nên hai xác suất cộng lại bằng $1$.

**Gợi ý các bước:**
1. Tính xác suất rút được thẻ đỏ: $1-\dfrac25$.
2. $3$ thẻ đỏ ứng với phân số đó của tổng số thẻ; từ đó tìm tổng số thẻ.
3. Lấy tổng số thẻ trừ số thẻ đỏ.

::solution
Mỗi thẻ rút ra chắc chắn là đỏ hoặc xanh, nên xác suất rút được thẻ đỏ là $1-\dfrac25=\dfrac35$.

Như vậy $3$ thẻ đỏ chiếm $\dfrac35$ tổng số thẻ. Cứ mỗi $\dfrac15$ tổng số thẻ ứng với $3:3=1$ thẻ, nên tổng số thẻ là $5\cdot1=5$.

Số thẻ xanh là $5-3=2$. Kiểm tra: $\dfrac25$ đúng bằng xác suất rút thẻ xanh.

Vậy hộp có $2$ thẻ xanh.

**Đáp số.** $2$ thẻ xanh.
:::

## Kiểm tra mini

:::quiz
::mc
Gieo một con xúc xắc cân đối. Biến cố nào sau đây là biến cố không thể?
A. Số chấm là $1$.
B. Số chấm là số chẵn.
C. Số chấm nhỏ hơn $7$.
D. Số chấm là $7$.
::key D
Xúc xắc chỉ có $1$ đến $6$ chấm nên $7$ chấm không bao giờ xảy ra. A và B là biến cố ngẫu nhiên, C là biến cố chắc chắn.

::mc
Rút một thẻ từ hộp $10$ thẻ đánh số $1$ đến $10$. Xác suất rút được thẻ số chia hết cho $5$ là
A. $\dfrac15$.
B. $2$.
C. $\dfrac12$.
D. $\dfrac{1}{10}$.
::key A
Các thẻ thuận lợi là $5$ và $10$, nên xác suất là $\dfrac{2}{10}=\dfrac15$. B là số kết quả thuận lợi, C là xác suất thẻ chẵn, D chỉ tính thẻ $5$.

::mc
Vòng quay có $12$ ô bằng nhau: $5$ ô xanh, $4$ ô vàng, $3$ ô đỏ. Biến cố nào có khả năng xảy ra cao nhất?
A. Mũi tên dừng ở ô đỏ.
B. Mũi tên dừng ở ô vàng hoặc ô đỏ.
C. Mũi tên dừng ở ô xanh.
D. Mũi tên dừng ở ô vàng.
::key B
Biến cố D có $4+3=7$ ô thuận lợi, nhiều hơn $5$ ô xanh. Xác suất lần lượt là $\dfrac{3}{12}$, $\dfrac{4}{12}$, $\dfrac{5}{12}$ và $\dfrac{7}{12}$.

::mc
Phát biểu nào sau đây đúng về xác suất $P(A)$ của một biến cố $A$?
A. $P(A)$ có thể bằng $2$.
B. Biến cố chắc chắn có xác suất $0$.
C. $0\le P(A)\le1$.
D. Biến cố không thể có xác suất $1$.
::key C
Xác suất luôn nằm từ $0$ đến $1$. Biến cố chắc chắn có xác suất $1$ và biến cố không thể có xác suất $0$, nên C, D sai; A sai vì $P(A)$ không vượt quá $1$.

::tf
Một túi có $20$ viên bi giống hệt nhau gồm $8$ viên đỏ, $7$ viên xanh, $5$ viên vàng. Lấy ngẫu nhiên một viên. Xét tính đúng sai của các mệnh đề sau:
a) Có $20$ kết quả đồng khả năng.
b) Xác suất lấy được bi đỏ là $\dfrac13$ vì có $3$ màu.
c) Lấy được bi xanh dễ xảy ra hơn lấy được bi vàng.
d) "Lấy được bi đỏ, xanh hoặc vàng" là biến cố ngẫu nhiên.
::key Đ S Đ S
a) Đúng: mỗi viên bi là một kết quả. b) Sai: xác suất là $\dfrac{8}{20}=\dfrac25$; các màu không đồng khả năng. c) Đúng: $7>5$. d) Sai: túi chỉ có ba màu đó nên biến cố luôn xảy ra, là biến cố chắc chắn.

::sa
Một hộp có $25$ thẻ đánh số từ $1$ đến $25$. Có bao nhiêu kết quả thuận lợi cho biến cố "rút được thẻ số chia hết cho $5$"?
::key 5
Các thẻ thuận lợi là $5$, $10$, $15$, $20$, $25$, tức là $5$ kết quả.

::sa
Một túi có $20$ viên bi, trong đó $5$ viên đỏ, còn lại là bi xanh. Lấy ngẫu nhiên một viên. Xác suất lấy được bi đỏ viết dưới dạng số thập phân là bao nhiêu?
::key 0,25
$\dfrac{5}{20}=\dfrac14=0{,}25$.
:::
