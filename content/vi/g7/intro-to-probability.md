---
title: Làm quen với xác suất của biến cố
description: Bạn tính xác suất của một biến cố khi các kết quả có khả năng như nhau, bằng tỉ số giữa số kết quả thuận lợi và số kết quả có thể.
minutes: 20
---

:::goals
- Xác định các kết quả có thể và các kết quả thuận lợi của một biến cố trong một phép thử.
- Tính xác suất của biến cố bằng công thức $P=\dfrac{k}{n}$ khi các kết quả có khả năng như nhau.
- Biết xác suất luôn nằm trong đoạn từ $0$ đến $1$: biến cố không thể có xác suất $0$, biến cố chắc chắn có xác suất $1$.
- Giải các bài toán thực tế đơn giản về xác suất.
:::

Một hộp có $12$ viên bi cùng kích thước: $5$ viên đỏ, $4$ viên xanh và $3$ viên vàng. Minh nhắm mắt lấy ra một viên bi. Khả năng lấy được viên bi đỏ nhiều hay ít?

Ta có thể nói "nhiều" hay "ít", nhưng như vậy chưa rõ ràng. Bài này giúp bạn đo khả năng đó bằng một con số. Con số ấy gọi là xác suất.

## Cùng khám phá

Ta bắt đầu với phép thử đơn giản nhất: tung một đồng xu cân đối. Có hai kết quả có thể: mặt sấp (S) hoặc mặt ngửa (N). Đồng xu cân đối nên hai kết quả này có khả năng như nhau.

Xét biến cố $A$: "Mặt sấp xuất hiện". Chỉ có $1$ kết quả làm cho $A$ xảy ra, trong tổng số $2$ kết quả. Ta nói khả năng của $A$ là $1$ trên $2$, tức là $\dfrac12$.

Bây giờ ta gieo một con xúc xắc cân đối. Có $6$ kết quả có thể: $1, 2, 3, 4, 5, 6$ chấm, và chúng có khả năng như nhau. Xét biến cố $B$: "Số chấm là số chẵn". Các kết quả làm cho $B$ xảy ra là $2, 4, 6$: có $3$ kết quả.

Ta ghi lại cả hai trường hợp trong một bảng:

| Phép thử | Số kết quả có thể | Biến cố | Số kết quả thuận lợi | Khả năng |
|---|---|---|---|---|
| Tung đồng xu | $2$ | Mặt sấp | $1$ | $\dfrac12$ |
| Gieo xúc xắc | $6$ | Số chấm chẵn | $3$ | $\dfrac36=\dfrac12$ |
| Gieo xúc xắc | $6$ | Mặt $6$ chấm | $1$ | $\dfrac16$ |

Ở cả ba dòng, khả năng bằng số kết quả thuận lợi chia cho số kết quả có thể. Các kết quả có khả năng như nhau, nên mỗi kết quả chiếm đúng một phần như nhau trong tổng. Có $k$ kết quả thuận lợi thì chiếm $k$ phần trong $n$ phần.

:::definition Xác suất của biến cố
Giả sử một phép thử có $n$ kết quả có thể, các kết quả này có khả năng như nhau. Nếu có $k$ kết quả thuận lợi cho biến cố $A$ thì **xác suất của biến cố $A$** là
$$P(A)=\dfrac{k}{n}.$$
:::

Trong đó "kết quả thuận lợi cho $A$" là kết quả làm cho $A$ xảy ra. Quay lại bài toán đầu: hộp có $12$ viên bi, trong đó $5$ viên đỏ. Mỗi viên bi có khả năng được lấy như nhau, nên xác suất lấy được bi đỏ là $\dfrac{5}{12}$.

## Xác suất luôn từ 0 đến 1

Số kết quả thuận lợi $k$ không thể âm và không thể lớn hơn tổng số kết quả $n$. Do đó $0\le k\le n$. Chia cả ba vế cho $n$ (số dương), ta được $0\le\dfrac{k}{n}\le1$.

Hai trường hợp đặc biệt cần nhớ:

- Nếu $k=0$ thì $P(A)=0$: không kết quả nào làm $A$ xảy ra, đó là biến cố không thể.
- Nếu $k=n$ thì $P(A)=1$: mọi kết quả đều làm $A$ xảy ra, đó là biến cố chắc chắn.

:::theorem Giá trị của xác suất
Với mọi biến cố $A$ ta có $0\le P(A)\le1$. Biến cố không thể có xác suất bằng $0$. Biến cố chắc chắn có xác suất bằng $1$.
:::

:::graph Mọi xác suất đều nằm trên đoạn từ 0 đến 1
alt: Trục số có đoạn từ 0 đến 1, đánh dấu ba điểm 0, 1/2 và 1
x: -0.2..1.2
y: -1..1
segment: (0, 0) (1, 0)
point: (0, 0) "0" below
point: (0.5, 0) "1/2" below
point: (1, 0) "1" below
:::

Xác suất càng gần $1$ thì biến cố càng dễ xảy ra. Xác suất càng gần $0$ thì biến cố càng khó xảy ra.

## Ví dụ

Ta bắt đầu với bài toán lấy bi ở đầu bài.

:::example Lấy bi trong hộp
Một hộp có $12$ viên bi cùng kích thước: $5$ bi đỏ, $4$ bi xanh, $3$ bi vàng. Lấy ngẫu nhiên một viên bi. Tính xác suất của biến cố $A$: "Lấy được bi đỏ" và biến cố $B$: "Lấy được bi xanh".

**Lời giải.** Các viên bi cùng kích thước nên $12$ kết quả có thể có khả năng như nhau. Ta đếm kết quả thuận lợi của từng biến cố rồi lập tỉ số $\dfrac{k}{n}$ với $n=12$:

$$P(A)=\dfrac{5}{12},\qquad P(B)=\dfrac{4}{12}=\dfrac13.$$

Ở biến cố $B$ ta rút gọn bằng cách chia cả tử và mẫu cho $4$. Vậy xác suất lấy được bi đỏ là $\dfrac{5}{12}$, xác suất lấy được bi xanh là $\dfrac13$.

**Kiểm tra.** Ba màu có $5+4+3=12$ viên, đúng bằng tổng số bi.
:::

Với xúc xắc, trước hết ta phải liệt kê đúng các kết quả thuận lợi.

:::example Gieo xúc xắc
Gieo một con xúc xắc cân đối. Tính xác suất của biến cố $C$: "Số chấm xuất hiện là số nguyên tố".

**Lời giải.** Phép thử có $n=6$ kết quả có khả năng như nhau. Trong các số $1, 2, 3, 4, 5, 6$, các số nguyên tố là $2, 3, 5$ (số $1$ không phải số nguyên tố). Vậy $k=3$:

$$P(C)=\dfrac{3}{6}=\dfrac12.$$

Vậy xác suất để số chấm là số nguyên tố bằng $\dfrac12$.
:::

Khi có nhiều kết quả hơn, ta cần đếm cẩn thận.

:::example Rút thẻ
Một túi có $20$ tấm thẻ ghi các số từ $1$ đến $20$. Rút ngẫu nhiên một thẻ. Tính xác suất của biến cố $D$: "Thẻ rút được ghi số chia hết cho $4$".

**Lời giải.** Có $n=20$ kết quả có khả năng như nhau. Các số chia hết cho $4$ trong khoảng từ $1$ đến $20$ là $4, 8, 12, 16, 20$, tức là $k=5$:

$$P(D)=\dfrac{5}{20}=\dfrac14.$$

Vậy xác suất rút được thẻ ghi số chia hết cho $4$ là $\dfrac14$.

**Kiểm tra.** Cứ $4$ số liên tiếp thì có một số chia hết cho $4$, nên tỉ lệ $\dfrac14$ là hợp lí.
:::

Có khi biến cố được mô tả bằng cách "không phải", và ta vẫn đếm từng kết quả.

:::example Vòng quay may mắn
Một vòng quay được chia thành $8$ phần bằng nhau: $3$ phần đỏ, $2$ phần xanh, $2$ phần vàng, $1$ phần trắng. Quay vòng quay một lần, mũi tên dừng ở một phần. Tính xác suất của biến cố $E$: "Mũi tên dừng ở phần đỏ" và biến cố $G$: "Mũi tên không dừng ở phần đỏ".

**Lời giải.** Các phần bằng nhau nên $n=8$ kết quả có khả năng như nhau. Với $E$ có $k=3$ phần đỏ. Với $G$, số phần không đỏ là $2+2+1=5$:

$$P(E)=\dfrac{3}{8},\qquad P(G)=\dfrac{5}{8}.$$

Vậy xác suất dừng ở phần đỏ là $\dfrac38$, xác suất không dừng ở phần đỏ là $\dfrac58$.

**Kiểm tra.** Hai xác suất cộng lại bằng $\dfrac38+\dfrac58=1$, vì mũi tên hoặc dừng ở phần đỏ, hoặc không.
:::

Bây giờ ta xem hai trường hợp đặc biệt: xác suất bằng $0$ và bằng $1$.

:::example Biến cố không thể và biến cố chắc chắn
Một hộp có $4$ bi xanh và $3$ bi đỏ. Lấy ngẫu nhiên một viên bi. Tính xác suất của biến cố $H$: "Lấy được bi vàng" và biến cố $K$: "Lấy được bi xanh hoặc bi đỏ".

**Lời giải.** Hộp có $n=4+3=7$ viên bi, mỗi viên có khả năng được lấy như nhau. Trong hộp không có bi vàng, nên $H$ có $k=0$. Mọi viên bi trong hộp đều xanh hoặc đỏ, nên $K$ có $k=7$:

$$P(H)=\dfrac{0}{7}=0,\qquad P(K)=\dfrac{7}{7}=1.$$

Vậy $H$ là biến cố không thể ($P=0$) và $K$ là biến cố chắc chắn ($P=1$).
:::

Ở ví dụ cuối, ta phải tự đếm số kết quả có thể.

:::example Số có hai chữ số
Chọn ngẫu nhiên một số tự nhiên có hai chữ số. Tính xác suất của biến cố $L$: "Số được chọn chia hết cho $10$".

**Lời giải.** Các số có hai chữ số là $10, 11, \dots, 99$. Số các số này là $99-10+1=90$, nên $n=90$. Các số chia hết cho $10$ là $10, 20, 30, 40, 50, 60, 70, 80, 90$, tức là $k=9$:

$$P(L)=\dfrac{9}{90}=\dfrac{1}{10}.$$

Vậy xác suất chọn được số chia hết cho $10$ là $\dfrac{1}{10}$.
:::

:::warning Những sai lầm thường gặp
- **Viết ngược tỉ số.** Sai: $P(\text{bi đỏ})=\dfrac{12}{5}$. Lí do sai: xác suất không thể lớn hơn $1$. Đúng: $\dfrac{5}{12}$, tức là số kết quả thuận lợi chia cho số kết quả có thể.
- **Đếm nhầm kết quả thuận lợi.** Sai: số nguyên tố khi gieo xúc xắc là $1, 2, 3, 5$, nên $P=\dfrac46$. Lí do sai: $1$ không phải số nguyên tố. Đúng: $2, 3, 5$, nên $P=\dfrac36=\dfrac12$.
- **Coi mọi màu có khả năng như nhau.** Sai: hộp có $3$ màu nên xác suất mỗi màu là $\dfrac13$. Lí do sai: các màu có số bi khác nhau. Đúng: coi mỗi viên bi là một kết quả, rồi đếm số bi của màu đó.
:::

## Thuật ngữ

:::terms
- phép thử | experiment
- kết quả có thể | possible outcome
- kết quả thuận lợi | favourable outcome
- biến cố | event
- biến cố chắc chắn | certain event
- biến cố không thể | impossible event
- xác suất | probability
- khả năng như nhau | equally likely
- xúc xắc cân đối | fair die
- đồng xu cân đối | fair coin
:::

## Tóm tắt

- Nếu phép thử có $n$ kết quả có khả năng như nhau, trong đó $k$ kết quả thuận lợi cho biến cố $A$, thì $P(A)=\dfrac{k}{n}$.
- Cách làm: đếm $n$, đếm $k$, rồi lập tỉ số và rút gọn.
- Luôn có $0\le P(A)\le1$. Biến cố không thể có $P=0$, biến cố chắc chắn có $P=1$.
- Muốn dùng công thức, các kết quả phải có khả năng như nhau. Trong bài toán chọn bi, ta coi mỗi viên bi là một kết quả.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Gieo một con xúc xắc cân đối.

a) Liệt kê các kết quả có thể.

b) Biến cố $A$: "Số chấm là số lẻ". Liệt kê các kết quả thuận lợi cho $A$ và tính $P(A)$.

::hint
**Kiến thức:** $P(A)=\dfrac{k}{n}$, với $n$ là số kết quả có thể và $k$ là số kết quả thuận lợi.

**Gợi ý các bước:**
1. Viết các số chấm từ $1$ đến $6$.
2. Chọn ra các số lẻ rồi lập tỉ số.

::solution
Gieo một con xúc xắc cân đối, các mặt có số chấm từ $1$ đến $6$ và khả năng xuất hiện của mỗi mặt là như nhau.

a) Các kết quả có thể là $1$, $2$, $3$, $4$, $5$, $6$. Có tất cả $n=6$ kết quả.

b) Biến cố $A$: "Số chấm là số lẻ". Các kết quả thuận lợi cho $A$ là $1$, $3$, $5$, nên $k=3$.

Áp dụng công thức $P(A)=\dfrac kn$, ta có
$$P(A)=\frac36=\frac12.$$

Vậy có $6$ kết quả có thể và $P(A)=\dfrac12$.

**Đáp số.** a) $6$ kết quả; b) $P(A)=\dfrac12$.
:::

:::exercise
Một hộp có $15$ viên kẹo cùng cỡ: $6$ viên cam, $5$ viên dâu, $4$ viên nho. Lấy ngẫu nhiên một viên. Tính xác suất lấy được kẹo cam, kẹo dâu, kẹo nho.

::hint
**Kiến thức:** mỗi viên kẹo là một kết quả; $n=15$.

**Gợi ý các bước:**
1. Với mỗi loại kẹo, $k$ là số viên kẹo loại đó.
2. Lập tỉ số $\dfrac{k}{15}$ và rút gọn nếu được.

::solution
Các viên kẹo cùng cỡ nên lấy ngẫu nhiên một viên có $n=15$ kết quả đồng khả năng. Xác suất của mỗi loại kẹo bằng số kẹo loại đó chia cho $15$.

Có $6$ viên kẹo cam, nên
$$P(\text{cam})=\frac{6}{15}=\frac25.$$

Có $5$ viên kẹo dâu, nên
$$P(\text{dâu})=\frac{5}{15}=\frac13.$$

Có $4$ viên kẹo nho, nên
$$P(\text{nho})=\frac{4}{15}.$$

Vậy xác suất lấy được kẹo cam, kẹo dâu, kẹo nho lần lượt là $\dfrac25$, $\dfrac13$, $\dfrac{4}{15}$.

**Đáp số.** $\dfrac25$; $\dfrac13$; $\dfrac{4}{15}$.
:::

:::exercise
Hãy nhớ lại bài trước (biến cố). Gieo một con xúc xắc cân đối. Mỗi biến cố sau là chắc chắn, không thể hay ngẫu nhiên? Tính xác suất của mỗi biến cố.

a) "Số chấm nhỏ hơn $7$".

b) "Số chấm bằng $0$".

c) "Số chấm lớn hơn $4$".

::hint
**Kiến thức:** biến cố chắc chắn luôn xảy ra ($P=1$), biến cố không thể không bao giờ xảy ra ($P=0$), còn lại là biến cố ngẫu nhiên.

**Gợi ý các bước:**
1. Với mỗi câu, tìm các số chấm làm biến cố xảy ra.
2. Đếm $k$ rồi chia cho $n=6$.

::solution
Gieo một con xúc xắc cân đối có $n=6$ kết quả đồng khả năng: $1$, $2$, $3$, $4$, $5$, $6$.

a) Cả $6$ kết quả đều nhỏ hơn $7$, nên biến cố xảy ra với mọi kết quả. Đây là biến cố chắc chắn, và $k=6$ nên
$$P=\frac66=1.$$

b) Không có kết quả nào bằng $0$, nên biến cố không bao giờ xảy ra. Đây là biến cố không thể, và $k=0$ nên
$$P=\frac06=0.$$

c) Các kết quả thuận lợi là $5$, $6$ nên $k=2$. Biến cố xảy ra với một số kết quả, không phải tất cả, nên đây là biến cố ngẫu nhiên, và
$$P=\frac26=\frac13.$$

Vậy a) chắc chắn, xác suất $1$; b) không thể, xác suất $0$; c) ngẫu nhiên, xác suất $\dfrac13$.

**Đáp số.** a) Chắc chắn, $1$; b) không thể, $0$; c) ngẫu nhiên, $\dfrac13$.
:::

:::exercise
Một túi có $20$ tấm thẻ ghi các số từ $1$ đến $20$. Rút ngẫu nhiên một thẻ. Tính xác suất để thẻ rút được:

a) ghi số nhỏ hơn $6$;

b) ghi số chẵn;

c) ghi số có một chữ số.

::hint
**Kiến thức:** $n=20$; đếm các số thoả mãn từng điều kiện để tìm $k$.

**Gợi ý các bước:**
1. Liệt kê các số thoả mãn mỗi điều kiện.
2. Lập tỉ số $\dfrac{k}{20}$ và rút gọn.

::solution
Trong túi có $20$ tấm thẻ ghi các số từ $1$ đến $20$, rút ngẫu nhiên một thẻ nên có $n=20$ kết quả đồng khả năng.

a) Các số nhỏ hơn $6$ là $1$, $2$, $3$, $4$, $5$, nên $k=5$.

Do đó
$$P=\frac{5}{20}=\frac14.$$

b) Các số chẵn từ $1$ đến $20$ là $2$, $4$, $\dots$, $20$. Có $20:2=10$ số, nên $k=10$.

Do đó
$$P=\frac{10}{20}=\frac12.$$

c) Các số có một chữ số là $1$, $2$, $\dots$, $9$, nên $k=9$.

Do đó
$$P=\frac{9}{20}.$$

Vậy xác suất để thẻ rút được ghi số nhỏ hơn $6$, ghi số chẵn, ghi số có một chữ số lần lượt là $\dfrac14$, $\dfrac12$, $\dfrac{9}{20}$.

**Đáp số.** a) $\dfrac14$; b) $\dfrac12$; c) $\dfrac{9}{20}$.
:::

:::exercise
Hộp $A$ có $3$ bi đỏ và $7$ bi xanh. Hộp $B$ có $2$ bi đỏ và $3$ bi xanh. Lấy ngẫu nhiên một viên bi từ mỗi hộp. Lấy từ hộp nào thì khả năng được bi đỏ lớn hơn? Vì sao?

::hint
**Kiến thức:** tính xác suất lấy bi đỏ ở mỗi hộp rồi so sánh hai phân số.

**Gợi ý các bước:**
1. Tìm tổng số bi của mỗi hộp.
2. Tính hai xác suất, rồi quy đồng mẫu số để so sánh.

::solution
Lấy ngẫu nhiên một viên bi từ một hộp thì mọi viên bi trong hộp có khả năng được lấy như nhau. Xác suất lấy được bi đỏ bằng số bi đỏ chia cho tổng số bi trong hộp.

Hộp $A$ có $3+7=10$ viên bi, trong đó có $3$ bi đỏ. Gọi $P_A$ là xác suất lấy được bi đỏ từ hộp $A$, ta có
$$P_A=\frac{3}{10}.$$

Hộp $B$ có $2+3=5$ viên bi, trong đó có $2$ bi đỏ. Gọi $P_B$ là xác suất lấy được bi đỏ từ hộp $B$, ta có
$$P_B=\frac25=\frac{4}{10}.$$

Hai phân số đã có cùng mẫu số $10$ và $3<4$ nên $\dfrac{3}{10}<\dfrac{4}{10}$, tức là $P_A<P_B$.

Vậy lấy từ hộp $B$ thì khả năng được bi đỏ lớn hơn, vì $\dfrac25>\dfrac{3}{10}$.

**Đáp số.** Hộp $B$, vì $\dfrac25>\dfrac{3}{10}$.
:::

:::exercise
Tìm lỗi sai trong lời giải của hai bạn rồi sửa lại.

a) Mai: "Hộp có $5$ bi đỏ và $1$ bi xanh. Hộp chỉ có hai màu nên xác suất lấy được bi xanh là $\dfrac12$."

b) Bình: "Gieo xúc xắc, biến cố $M$: số chấm chia hết cho $2$. Các kết quả thuận lợi là $2, 4, 6$ nên $P(M)=\dfrac33=1$."

::hint
**Kiến thức:** $P=\dfrac{k}{n}$; $n$ là tổng số kết quả có thể và các kết quả phải có khả năng như nhau.

**Gợi ý các bước:**
1. Với mỗi câu, tìm xem $n$ đã được đếm đúng chưa.
2. Tính lại.

::solution
Xác suất của biến cố bằng $\dfrac kn$, trong đó $n$ là số kết quả có thể (đồng khả năng) và $k$ là số kết quả thuận lợi.

a) Lỗi sai của Mai: bạn coi hai màu có khả năng như nhau, nhưng bi đỏ nhiều hơn bi xanh nên hai màu không đồng khả năng. Mỗi viên bi mới là một kết quả đồng khả năng.

Sửa lại: hộp có $5+1=6$ viên bi nên $n=6$; có $1$ bi xanh nên $k=1$. Do đó
$$P=\frac16.$$

b) Lỗi sai của Bình: bạn lấy $n=3$ (chỉ đếm các kết quả thuận lợi), trong khi con xúc xắc có $6$ kết quả có thể.

Sửa lại: $n=6$, $k=3$ (các kết quả $2$, $4$, $6$). Do đó
$$P(M)=\frac36=\frac12.$$

Vậy xác suất lấy được bi xanh là $\dfrac16$ và $P(M)=\dfrac12$.

**Đáp số.** a) $\dfrac16$; b) $\dfrac12$.
:::

:::exercise
Lớp $7$B có $40$ học sinh, trong đó có $22$ bạn nữ. Cô giáo gọi ngẫu nhiên một bạn lên bảng.

a) Tính xác suất bạn được gọi là nữ.

b) Tính xác suất bạn được gọi là nam.

c) Cộng hai xác suất ở câu a) và b). Vì sao kết quả như vậy?

::hint
**Kiến thức:** đề đã cho biết gì? Hỏi gì? Mỗi học sinh là một kết quả, $n=40$.

**Gợi ý các bước:**
1. Tìm số bạn nam.
2. Lập hai tỉ số rồi rút gọn, sau đó cộng lại.

::solution
Lớp $7$B có $40$ học sinh, gọi ngẫu nhiên một bạn nên có $n=40$ kết quả đồng khả năng.

a) Có $22$ bạn nữ nên $k=22$. Do đó
$$P(\text{nữ})=\frac{22}{40}=\frac{11}{20}.$$

b) Số bạn nam là $40-22=18$ nên $k=18$. Do đó
$$P(\text{nam})=\frac{18}{40}=\frac{9}{20}.$$

c) Cộng hai xác suất, ta được
$$\frac{11}{20}+\frac{9}{20}=\frac{20}{20}=1.$$

Kết quả bằng $1$ vì mỗi bạn hoặc là nữ hoặc là nam, nên biến cố "nữ hoặc nam" là biến cố chắc chắn và có xác suất bằng $1$.

Vậy $P(\text{nữ})=\dfrac{11}{20}$, $P(\text{nam})=\dfrac{9}{20}$ và tổng hai xác suất bằng $1$.

**Đáp số.** a) $\dfrac{11}{20}$; b) $\dfrac{9}{20}$; c) $1$.
:::

:::exercise
Một hộp có $30$ viên bi, được ghi lại trong bảng sau:

| Màu | Đỏ | Xanh | Vàng | Trắng |
|---|---|---|---|---|
| Số viên | $6$ | $9$ | $5$ | $10$ |

Lấy ngẫu nhiên một viên bi. Tính xác suất lấy được mỗi màu rồi cộng bốn xác suất lại.

::hint
**Kiến thức:** $n$ là tổng số viên bi trong bảng; $k$ là số viên của màu đang xét.

**Gợi ý các bước:**
1. Cộng các số trong bảng để kiểm tra $n=30$.
2. Tính bốn tỉ số $\dfrac{k}{30}$ và rút gọn.
3. Cộng bốn xác suất.

::solution
Tổng số viên bi trong hộp là
$$6+9+5+10=30,$$
nên lấy ngẫu nhiên một viên bi có $n=30$ kết quả đồng khả năng.

Xác suất lấy được mỗi màu bằng số bi màu đó chia cho $30$:
$$P(\text{đỏ})=\frac{6}{30}=\frac15,\qquad P(\text{xanh})=\frac{9}{30}=\frac{3}{10},$$
$$P(\text{vàng})=\frac{5}{30}=\frac16,\qquad P(\text{trắng})=\frac{10}{30}=\frac13.$$

Tổng bốn xác suất là
$$\frac{6+9+5+10}{30}=\frac{30}{30}=1.$$

Vậy xác suất lấy được bi đỏ, xanh, vàng, trắng lần lượt là $\dfrac15$, $\dfrac{3}{10}$, $\dfrac16$, $\dfrac13$ và tổng bốn xác suất bằng $1$.

**Đáp số.** $\dfrac15$; $\dfrac{3}{10}$; $\dfrac16$; $\dfrac13$; tổng bằng $1$.
:::

:::exercise Thử thách
Một hộp có $5$ bi đỏ và $3$ bi xanh. Cần bỏ thêm bao nhiêu bi vàng vào hộp để xác suất lấy được bi vàng bằng $\dfrac13$?

::hint
**Kiến thức:** nếu xác suất lấy bi vàng là $\dfrac13$ thì bi không vàng chiếm $\dfrac23$ số bi trong hộp.

**Gợi ý các bước:**
1. Số bi đỏ và xanh hiện có là bao nhiêu?
2. Số bi đó ứng với mấy phần trong $3$ phần bằng nhau?
3. Tìm số bi của một phần.

::solution
Số bi đỏ và xanh là $5+3=8$. Chúng chiếm $2$ phần trong $3$ phần, nên một phần là $8:2=4$ viên. Vậy số bi vàng cần bỏ thêm là $4$.

**Kiểm tra.** Khi đó hộp có $12$ viên và $P(\text{vàng})=\dfrac{4}{12}=\dfrac13$.

**Đáp số.** $4$ viên bi vàng.
:::

## Kiểm tra mini

:::quiz
::mc TH
Gieo một con xúc xắc cân đối. Xác suất để số chấm chia hết cho $3$ là
A. $\dfrac13$.
B. $\dfrac16$.
C. $\dfrac12$.
D. $2$.
::key A
Các số $3, 6$ thuận lợi nên $P=\dfrac26=\dfrac13$. Phương án B quên số $6$, phương án D chỉ đếm số kết quả thuận lợi mà chưa chia cho $6$.

::mc TH
Một hộp có $8$ bi đỏ và $12$ bi xanh. Lấy ngẫu nhiên một viên. Xác suất lấy được bi đỏ là
A. $\dfrac23$.
B. $\dfrac25$.
C. $\dfrac35$.
D. $\dfrac12$.
::key B
$n=8+12=20$ nên $P=\dfrac{8}{20}=\dfrac25$. Phương án A lấy $\dfrac{8}{12}$ (chia cho số bi xanh), C là xác suất lấy bi xanh, D coi hai màu như nhau.

::mc NB
Giá trị nào sau đây không thể là xác suất của một biến cố?
A. $0$.
B. $\dfrac34$.
C. $\dfrac54$.
D. $1$.
::key C
Xác suất luôn nằm từ $0$ đến $1$, mà $\dfrac54>1$. Giá trị như vậy xuất hiện khi viết ngược tỉ số $\dfrac{n}{k}$.

::mc TH
Rút ngẫu nhiên một thẻ trong $30$ thẻ ghi các số từ $1$ đến $30$. Xác suất thẻ ghi số chia hết cho $5$ là
A. $\dfrac16$.
B. $\dfrac13$.
C. $\dfrac{1}{30}$.
D. $\dfrac15$.
::key D
Các số $5, 10, 15, 20, 25, 30$ thuận lợi: $k=6$, nên $P=\dfrac{6}{30}=\dfrac15$. Phương án C chỉ tính một kết quả; D là xác suất số chia hết cho $3$ ($k=10$).

::tf TH TH NB TH
Một hộp có $3$ bi trắng, $5$ bi đen và $2$ bi vàng. Lấy ngẫu nhiên một viên bi.
a) Xác suất lấy được bi đen bằng $\dfrac12$.
b) Xác suất lấy được bi trắng bằng $\dfrac37$.
c) "Lấy được bi xanh" là biến cố không thể.
d) Xác suất lấy được bi vàng lớn hơn xác suất lấy được bi trắng.
::key Đ S Đ S
a) Đúng: $\dfrac{5}{10}=\dfrac12$. b) Sai: tổng số bi là $10$ nên $P=\dfrac{3}{10}$. c) Đúng: hộp không có bi xanh. d) Sai: $\dfrac{2}{10}<\dfrac{3}{10}$.

::sa TH
Một hộp có $25$ viên bi, trong đó có $10$ viên bi đỏ. Lấy ngẫu nhiên một viên. Xác suất lấy được bi đỏ bằng bao nhiêu? (Viết dưới dạng số thập phân.)
::key 0,4
$P=\dfrac{10}{25}=\dfrac25=0{,}4$.

::sa VD
Lớp có $36$ học sinh. Xác suất chọn ngẫu nhiên một bạn nữ là $\dfrac59$. Lớp có bao nhiêu bạn nữ?
::key 20
Số bạn nữ là $k=36\times\dfrac59=20$. Kiểm tra: $\dfrac{20}{36}=\dfrac59$.
:::
