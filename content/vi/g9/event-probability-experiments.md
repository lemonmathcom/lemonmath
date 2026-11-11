---
title: Xác suất của biến cố liên quan tới phép thử
description: Nhận biết biến cố và kết quả thuận lợi, tính xác suất bằng cách đếm khi các kết quả đồng khả năng, dùng xác suất để đánh giá trò chơi.
minutes: 20
---

:::goals
- Nhận biết biến cố liên quan tới phép thử và các kết quả thuận lợi cho biến cố.
- Tính được xác suất của biến cố bằng công thức $P(A)=\dfrac kn$ khi các kết quả đồng khả năng.
- Dùng xác suất để đánh giá tính công bằng của trò chơi và giải bài toán thực tế.
:::

Giả sử trong một trò chơi, bạn được "xuất quân" khi gieo hai con xúc xắc mà có ít nhất một mặt 6 chấm. Nam lập luận: "Mỗi con có khả năng ra mặt 6 là $\dfrac16$, hai con thì $\dfrac16+\dfrac16=\dfrac13$." Nghe hợp lí. Nhưng theo cách đó, sáu con xúc xắc sẽ cho $1$, tức là *chắc chắn* có mặt 6, trong khi sáu con vẫn có thể không con nào ra 6. Vậy Nam sai ở đâu, và xác suất đúng là bao nhiêu? Bài này cho ta một công cụ chắc chắn: liệt kê không gian mẫu rồi đếm.

## Biến cố và kết quả thuận lợi

Ở bài [không gian mẫu](lesson:random-experiments-sample-space), ta đã liệt kê mọi kết quả có thể. Bây giờ ta xét các *sự kiện* gắn với phép thử, như "tổng số chấm bằng 7".

:::definition Biến cố và kết quả thuận lợi
- Một **biến cố** liên quan tới phép thử là một sự kiện mà việc nó xảy ra hay không xảy ra tuỳ thuộc vào kết quả của phép thử.
- Một kết quả của phép thử làm cho biến cố $A$ xảy ra gọi là một **kết quả thuận lợi** cho $A$.
:::

:::example Liệt kê kết quả thuận lợi
Tung hai đồng xu. Xét các biến cố $A$: "Hai đồng xu xuất hiện cùng mặt" và $B$: "Có ít nhất một đồng xu xuất hiện mặt ngửa". Liệt kê các kết quả thuận lợi cho $A$ và cho $B$.

**Lời giải.** Không gian mẫu là $\Omega=\{(S; S);\ (S; N);\ (N; S);\ (N; N)\}$.

Các kết quả thuận lợi cho $A$ là $(S; S)$, $(N; N)$.

Các kết quả thuận lợi cho $B$ là $(S; N)$, $(N; S)$, $(N; N)$.

Vậy $A$ có $2$, $B$ có $3$ kết quả thuận lợi.
:::

## Tính xác suất của biến cố

Khi tung hai đồng xu cân đối, không có lí do gì để kết quả này dễ xảy ra hơn kết quả kia: bốn kết quả **đồng khả năng**, mỗi kết quả "chiếm" $\dfrac14$ cơ hội. Biến cố $A$ ở trên chiếm $2$ trong $4$ phần ấy, nên xác suất của $A$ là $\dfrac24=\dfrac12$.

:::theorem Công thức tính xác suất
Giả sử các kết quả có thể của một phép thử là đồng khả năng. Khi đó, xác suất của biến cố $A$ là
$$P(A)=\frac{k}{n},$$
trong đó $n$ là số phần tử của không gian mẫu, $k$ là số kết quả thuận lợi cho $A$.
:::

**Hiểu sâu hơn.** Vì $0\leq k\leq n$ nên $0\leq P(A)\leq1$: **biến cố không thể** (không có kết quả thuận lợi) có xác suất $0$, **biến cố chắc chắn** (mọi kết quả đều thuận lợi) có xác suất $1$. Công thức chỉ đúng khi các kết quả *đồng khả năng*. Nếu ghi "số mặt ngửa" khi tung hai đồng xu, ta có ba kết quả $0$, $1$, $2$, nhưng chúng không đồng khả năng ($1$ mặt ngửa ứng với hai kết quả $(S; N)$, $(N; S)$), nên xác suất của "1 mặt ngửa" không phải $\dfrac13$ mà là $\dfrac24=\dfrac12$. Đó là lí do ta luôn mô tả kết quả "đủ chi tiết", như cặp có thứ tự.

:::example Tổng 7 hay tổng 8?
Gieo hai con xúc xắc cân đối. Tính xác suất của các biến cố $A$: "Tổng số chấm bằng $7$" và $B$: "Tổng số chấm bằng $8$". Biến cố nào có xác suất lớn hơn?

**Lời giải.** Không gian mẫu gồm $36$ kết quả đồng khả năng $(i; j)$.

Các kết quả thuận lợi cho $A$ là $(1; 6)$, $(2; 5)$, $(3; 4)$, $(4; 3)$, $(5; 2)$, $(6; 1)$, nên $P(A)=\dfrac{6}{36}=\dfrac16$.

Các kết quả thuận lợi cho $B$ là $(2; 6)$, $(3; 5)$, $(4; 4)$, $(5; 3)$, $(6; 2)$, nên $P(B)=\dfrac{5}{36}$.

Vậy $P(A)=\dfrac16>P(B)=\dfrac{5}{36}$: tổng $7$ dễ xảy ra hơn tổng $8$.

**Nhận xét.** Tổng $7$ gồm ba cặp số khác nhau, mỗi cặp cho hai kết quả; tổng $8$ chỉ có hai cặp như vậy, còn $(4; 4)$ cho một kết quả.
:::

:::example Ít nhất một mặt 6
Trở lại bài toán mở đầu: gieo hai con xúc xắc cân đối. Tính xác suất của biến cố $C$: "Có ít nhất một con xúc xắc ra mặt 6 chấm".

**Lời giải.**

*Hiểu đề.* $C$ xảy ra khi xúc xắc thứ nhất ra 6, hoặc xúc xắc thứ hai ra 6, hoặc cả hai.

*Tìm cách giải.* Đếm các ô thuận lợi trong bảng $6\times6$: hàng thứ sáu và cột thứ sáu.

*Giải.* Hàng $i=6$ có $6$ kết quả, cột $j=6$ có $6$ kết quả, nhưng ô $(6; 6)$ nằm ở cả hai nên số kết quả thuận lợi là $k=6+6-1=11$. Do đó

$$P(C)=\frac{11}{36}.$$

Vậy xác suất để xuất quân là $\dfrac{11}{36}$, nhỏ hơn $\dfrac13=\dfrac{12}{36}$ mà Nam tính.

*Nhìn lại.* Nam sai vì đã cộng hai lần kết quả $(6; 6)$. Có cách khác không? Đếm các kết quả *không* có mặt 6: mỗi con có $5$ mặt khác 6, nên có $5\cdot5=25$ kết quả, suy ra $k=36-25=11$. Cách đếm "phần bù" này rất hữu ích khi biến cố có chữ "ít nhất".
:::

:::graph Các kết quả có ít nhất một mặt 6
alt: Lưới điểm 6 x 6: mỗi điểm (i; j) là một kết quả; hàng j = 6 và cột i = 6 được tô màu, chồng lên nhau tại điểm (6; 6), tổng cộng 11 điểm
x: 0..7
y: 0..7
fill: 6.4 ; 5.6 ; 0.6..6.4
fill: 6.4 ; 0.6 ; 5.6..6.4
point: (1, 6)
point: (2, 6)
point: (3, 6)
point: (4, 6)
point: (5, 6)
point: (6, 1)
point: (6, 2)
point: (6, 3)
point: (6, 4)
point: (6, 5)
point: (6, 6) "(6; 6)" above-right
:::

Trên hình, trục $x$ là số chấm của xúc xắc thứ nhất, trục $y$ là của xúc xắc thứ hai. Hàng và cột được tô chồng lên nhau đúng ở ô $(6; 6)$: đó là chỗ Nam đã đếm hai lần.

## Vận dụng trong thực tế

Công thức $P(A)=\dfrac kn$ dùng được cho mọi tình huống chọn ngẫu nhiên: bốc thăm, rút phiếu, chọn người.

:::example Rút phiếu bốc thăm trúng thưởng
Giả sử một cửa hàng có hộp đựng $5$ phiếu giống nhau, trong đó $2$ phiếu trúng thưởng. Mỗi khách rút ngẫu nhiên đồng thời $2$ phiếu. Tính xác suất để khách trúng ít nhất một phần thưởng.

**Lời giải.** Kí hiệu hai phiếu trúng là $T_1$, $T_2$ và ba phiếu không trúng là $K_1$, $K_2$, $K_3$. Rút đồng thời nên mỗi kết quả là một cặp không thứ tự; không gian mẫu gồm $10$ kết quả đồng khả năng:

$$T_1T_2,\ T_1K_1,\ T_1K_2,\ T_1K_3,\ T_2K_1,\ T_2K_2,\ T_2K_3,\ K_1K_2,\ K_1K_3,\ K_2K_3.$$

Các kết quả không trúng là $K_1K_2$, $K_1K_3$, $K_2K_3$, nên số kết quả thuận lợi là $k=10-3=7$.

Vậy xác suất khách trúng ít nhất một phần thưởng là $\dfrac{7}{10}$.

**Nhận xét.** Phiếu "giống nhau" vẫn là các vật riêng biệt; đặt tên $T_1$, $T_2$, … giúp các kết quả đồng khả năng.
:::

:::warning Những sai lầm thường gặp
- **Dùng không gian mẫu không đồng khả năng.** Sai: khi tung hai đồng xu, $P(\text{1 mặt ngửa})=\dfrac13$. Đúng: $\dfrac24=\dfrac12$.
- **Đếm trùng** (như Nam ở đầu bài). Sai: $P(\text{có ít nhất một mặt 6})=\dfrac{12}{36}$. Đúng: $(6; 6)$ chỉ đếm một lần, được $\dfrac{11}{36}$.
:::

**Kết nối.** Ở lớp 8, bạn đã thấy khi lặp lại phép thử nhiều lần, tần số tương đối của một biến cố gần với xác suất của nó. Bài này cho cách tính xác suất *trước* khi thí nghiệm. Ở lớp 10, hoán vị, chỉnh hợp, tổ hợp giúp tính xác suất khi không gian mẫu quá lớn để liệt kê.

## Thuật ngữ

:::terms
- biến cố | event
- kết quả thuận lợi | favourable outcome
- đồng khả năng | equally likely
- xác suất của biến cố | probability of an event
- xúc xắc cân đối | fair dice
- biến cố chắc chắn | certain event
- biến cố không thể | impossible event
:::

## Tóm tắt

- Kết quả thuận lợi cho $A$: kết quả làm $A$ xảy ra.
- Các kết quả đồng khả năng: $P(A)=\dfrac kn$ ($k$ kết quả thuận lợi, $n$ phần tử của $\Omega$); $0\leq P(A)\leq1$.
- Mô tả kết quả đủ chi tiết (cặp có thứ tự, đặt tên các vật giống nhau) để chúng đồng khả năng.
- Với "ít nhất một", có thể đếm các kết quả không thuận lợi rồi lấy $n$ trừ đi.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Gieo một con xúc xắc cân đối. Tính xác suất của các biến cố:

a) $A$: "Số chấm xuất hiện chia hết cho $3$".

b) $B$: "Số chấm xuất hiện là số nguyên tố".

::hint
**Kiến thức:** $P(A)=\dfrac kn$ với $n=6$.

**Gợi ý các bước:**
1. Liệt kê các kết quả thuận lợi.
2. Chia cho $6$.

::solution
Không gian mẫu là $\Omega=\{1; 2; 3; 4; 5; 6\}$, gồm $6$ kết quả đồng khả năng (vì con xúc xắc cân đối).

a) Các kết quả thuận lợi cho biến cố $A$ là các số chia hết cho $3$: $3$ và $6$. Có $2$ kết quả thuận lợi, nên
$$P(A)=\frac26=\frac13.$$

b) Các kết quả thuận lợi cho biến cố $B$ là các số nguyên tố: $2$, $3$ và $5$. Có $3$ kết quả thuận lợi, nên
$$P(B)=\frac36=\frac12.$$

Vậy $P(A)=\dfrac13$ và $P(B)=\dfrac12$.

**Đáp số.** a) $\dfrac13$; b) $\dfrac12$.
:::

:::exercise
Tung hai đồng xu cân đối. Tính xác suất của biến cố "Có ít nhất một đồng xu xuất hiện mặt ngửa".

::hint
**Kiến thức:** $\Omega$ có $4$ kết quả đồng khả năng.

**Gợi ý các bước:**
1. Liệt kê các kết quả có mặt ngửa.
2. Tính $\dfrac k4$.

::solution
Kí hiệu $S$ là mặt sấp, $N$ là mặt ngửa. Không gian mẫu là
$$\Omega=\{(S; S);\ (S; N);\ (N; S);\ (N; N)\},$$
gồm $4$ kết quả đồng khả năng (vì hai đồng xu cân đối).

Gọi $A$ là biến cố "Có ít nhất một đồng xu xuất hiện mặt ngửa". Các kết quả thuận lợi cho $A$ là $(S; N)$, $(N; S)$, $(N; N)$: có $3$ kết quả.

Do đó $P(A)=\dfrac34$.

Vậy xác suất để có ít nhất một đồng xu xuất hiện mặt ngửa là $\dfrac34$.

**Đáp số.** $\dfrac34$.
:::

:::exercise
Gieo hai con xúc xắc cân đối. Tính xác suất của biến cố "Tổng số chấm không nhỏ hơn $10$".

::hint
**Kiến thức:** $n=36$; tổng có thể là $10$, $11$, $12$.

**Gợi ý các bước:**
1. Liệt kê các cặp có tổng $10$, $11$, $12$.
2. Tính $\dfrac{k}{36}$.

::solution
Mỗi kết quả là một cặp $(i; j)$, trong đó $i$, $j$ lần lượt là số chấm trên con xúc xắc thứ nhất và thứ hai. Không gian mẫu có $6\cdot6=36$ kết quả đồng khả năng.

Gọi $A$ là biến cố "Tổng số chấm không nhỏ hơn $10$", tức là tổng bằng $10$, $11$ hoặc $12$.

- Tổng bằng $10$: $(4; 6)$, $(5; 5)$, $(6; 4)$;
- Tổng bằng $11$: $(5; 6)$, $(6; 5)$;
- Tổng bằng $12$: $(6; 6)$.

Có $6$ kết quả thuận lợi cho $A$. Do đó
$$P(A)=\frac{6}{36}=\frac16.$$

Vậy xác suất để tổng số chấm không nhỏ hơn $10$ là $\dfrac16$.

**Đáp số.** $\dfrac16$.
:::

:::exercise
Giả sử mật mã của một chiếc khoá gồm hai chữ số khác nhau, mỗi chữ số lấy từ $1$, $2$, $3$, $4$. Một người không biết mật mã, thử ngẫu nhiên một lần. Tính xác suất mở được khoá. Nếu mật mã cho phép hai chữ số giống nhau thì xác suất thay đổi thế nào?

::hint
**Kiến thức:** số mật mã có thể là số phần tử của $\Omega$; chỉ một mật mã đúng.

**Gợi ý các bước:**
1. Đếm cặp có thứ tự của hai chữ số khác nhau: $4\cdot3$.
2. Nếu cho phép trùng: $4\cdot4$.

::solution
Có $4\cdot3=12$ mật mã đồng khả năng, chỉ $1$ mật mã đúng, nên xác suất là $\dfrac{1}{12}$. Nếu cho phép hai chữ số giống nhau thì có $4\cdot4=16$ mật mã.

Vậy xác suất là $\dfrac1{12}$; khi cho phép trùng, xác suất còn $\dfrac1{16}$.

**Đáp số.** $\dfrac{1}{12}$; $\dfrac{1}{16}$.
:::

:::exercise
**(1,5 điểm)** Một nhóm có $5$ học sinh gồm $3$ nữ và $2$ nam. Chọn ngẫu nhiên đồng thời $2$ học sinh.

a) Không gian mẫu có bao nhiêu phần tử?

b) Tính xác suất để chọn được $2$ học sinh nữ.

c) Tính xác suất để trong hai học sinh được chọn có ít nhất $1$ nam.

::hint
**Kiến thức:** đặt tên $N_1, N_2, N_3$ (nữ) và $M_1, M_2$ (nam); chọn đồng thời nên cặp không thứ tự.

**Gợi ý các bước:**
1. Liệt kê các cặp.
2. Đếm các cặp chỉ có nữ.
3. "Ít nhất 1 nam" là các cặp còn lại.

::solution
Kí hiệu ba bạn nữ là $N_1$, $N_2$, $N_3$ và hai bạn nam là $M_1$, $M_2$. Chọn đồng thời $2$ bạn nên mỗi kết quả là một nhóm $2$ bạn, không kể thứ tự.

a) Liệt kê các kết quả:

- hai bạn nữ: $N_1N_2$, $N_1N_3$, $N_2N_3$;
- một nữ, một nam: $N_1M_1$, $N_1M_2$, $N_2M_1$, $N_2M_2$, $N_3M_1$, $N_3M_2$;
- hai bạn nam: $M_1M_2$.

Vậy không gian mẫu có $3+6+1=10$ phần tử.

b) Gọi $A$ là biến cố "Chọn được $2$ học sinh nữ". Các kết quả thuận lợi cho $A$ là $N_1N_2$, $N_1N_3$, $N_2N_3$: có $3$ kết quả. Do đó
$$P(A)=\frac{3}{10}.$$

Vậy xác suất để chọn được $2$ học sinh nữ là $\dfrac{3}{10}$.

c) Gọi $B$ là biến cố "Có ít nhất $1$ nam". Các kết quả thuận lợi cho $B$ là tất cả các kết quả không thuận lợi cho $A$, nên có $10-3=7$ kết quả. Do đó
$$P(B)=\frac{7}{10}.$$

Vậy xác suất để có ít nhất $1$ nam là $\dfrac{7}{10}$.

**Đáp số.** a) $10$; b) $\dfrac{3}{10}$; c) $\dfrac{7}{10}$.
:::

:::exercise
Lớp 9A tung hai đồng xu $200$ lần và thấy biến cố "Hai đồng xu khác mặt" xảy ra $104$ lần. Tính tần số tương đối của biến cố này và so sánh với xác suất của nó. (Ôn lại [tần số tương đối](lesson:relative-frequency-tables).)

::hint
**Kiến thức:** tần số tương đối $\dfrac mn$; xác suất tính bằng cách đếm.

**Gợi ý các bước:**
1. Tính $\dfrac{104}{200}$.
2. Tính $P$ từ không gian mẫu $4$ kết quả.

::solution
Tần số tương đối là $\dfrac{104}{200}=0{,}52=52\%$. Biến cố có $2$ kết quả thuận lợi $(S; N)$, $(N; S)$ nên xác suất là $\dfrac24=0{,}5$.

Vậy tần số tương đối $52\%$ rất gần xác suất $50\%$, phù hợp với nhận xét: khi số lần thử lớn, tần số tương đối gần với xác suất.

**Đáp số.** $52\%$, gần với $P=0{,}5$.
:::

:::exercise
An và Bình gieo hai con xúc xắc cân đối và nhân hai số chấm. Nếu tích là số chẵn thì An thắng, nếu tích là số lẻ thì Bình thắng. Trò chơi có công bằng không?

::hint
**Kiến thức:** tích lẻ khi và chỉ khi cả hai số đều lẻ.

**Gợi ý các bước:**
1. Đếm các cặp có cả hai số lẻ: $3\cdot3$.
2. So sánh xác suất của hai bạn.

::solution
Tích lẻ khi cả hai số chấm đều lẻ ($1$, $3$ hoặc $5$), có $3\cdot3=9$ kết quả. Do đó xác suất Bình thắng là $\dfrac{9}{36}=\dfrac14$, xác suất An thắng là $\dfrac{36-9}{36}=\dfrac34$.

Vậy trò chơi không công bằng: An có khả năng thắng gấp ba Bình.

**Đáp số.** Không công bằng ($\dfrac34$ so với $\dfrac14$).
:::

:::exercise Thử thách
Gieo hai con xúc xắc cân đối. Tính xác suất để tích hai số chấm là một số chính phương.

::hint
**Kiến thức:** các số chính phương có thể là $1, 4, 9, 16, 25, 36$.

**Gợi ý các bước:**
1. Hai số bằng nhau thì tích luôn chính phương.
2. Tìm thêm các cặp khác nhau có tích là $4$, $9$, $16$, ….

::solution
Các cặp $(i; i)$ cho tích $i^2$: có $6$ kết quả. Các cặp hai số khác nhau có tích chính phương là $(1; 4)$, $(4; 1)$ (tích $4$); không có cặp nào khác vì $9=1\cdot9$, $16=2\cdot8$, $36=4\cdot9$ đều cần số lớn hơn $6$. Do đó $k=8$ và xác suất là $\dfrac{8}{36}=\dfrac29$.

Vậy xác suất cần tìm là $\dfrac29$.

**Đáp số.** $\dfrac{2}{9}$.
:::

## Kiểm tra mini

:::quiz
::mc
Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt có số chấm lẻ là
A. $\dfrac13$.
B. $\dfrac16$.
C. $3$.
D. $\dfrac12$.
::key D
Có $3$ kết quả thuận lợi $1, 3, 5$ trên $6$ kết quả. A quên số $1$ là số lẻ, B là xác suất của một mặt, C là số kết quả thuận lợi, không phải xác suất.

::mc
Tung hai đồng xu cân đối. Xác suất để cả hai đồng xu đều xuất hiện mặt ngửa là
A. $\dfrac13$.
B. $\dfrac14$.
C. $\dfrac12$.
D. $\dfrac34$.
::key B
Chỉ có $(N; N)$ trong $4$ kết quả. A dùng nhầm ba kết quả không đồng khả năng, C là xác suất một đồng xu ngửa, D là xác suất có ít nhất một mặt ngửa.

::mc
Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm bằng $4$ là
A. $\dfrac{1}{12}$.
B. $\dfrac{1}{18}$.
C. $\dfrac{1}{11}$.
D. $\dfrac{1}{9}$.
::key A
$(1; 3), (2; 2), (3; 1)$: $\dfrac{3}{36}=\dfrac{1}{12}$. B quên thứ tự, C coi $11$ tổng từ $2$ đến $12$ là đồng khả năng, D đếm $(2; 2)$ hai lần.

::mc
Một hộp có $3$ bi đỏ và $2$ bi xanh. Lấy ngẫu nhiên $1$ bi. Xác suất lấy được bi xanh là
A. $\dfrac23$.
B. $\dfrac35$.
C. $\dfrac25$.
D. $\dfrac12$.
::key C
$k=2$, $n=5$. A lấy số bi xanh chia số bi đỏ, B là xác suất lấy được bi đỏ, D coi hai màu là hai kết quả đồng khả năng.

::tf
Một hộp có bốn thẻ ghi số $1$, $2$, $3$, $4$. Rút ngẫu nhiên đồng thời hai thẻ. Xét tính đúng sai của các mệnh đề sau:
a) Không gian mẫu có $6$ phần tử.
b) Xác suất để tổng hai số là số chẵn bằng $\dfrac13$.
c) Xác suất để tích hai số là số chẵn bằng $\dfrac56$.
d) Xác suất để tổng hai số bằng $5$ bằng $\dfrac12$.
::key Đ Đ Đ S
a) Đúng: $12, 13, 14, 23, 24, 34$. b) Đúng: $\{1; 3\}$, $\{2; 4\}$. c) Đúng: chỉ $\{1; 3\}$ có tích lẻ. d) Sai: $\{1; 4\}$, $\{2; 3\}$ cho $\dfrac26=\dfrac13$.

::sa
Gieo hai con xúc xắc cân đối. Tính xác suất để hai con xúc xắc xuất hiện cùng số chấm (làm tròn kết quả đến hàng phần trăm).
::key 0,17
Có $6$ kết quả $(i; i)$ trên $36$: $\dfrac16\approx0{,}17$.

::sa
Chọn ngẫu nhiên đồng thời $2$ học sinh từ một nhóm gồm $2$ nam và $3$ nữ. Tính xác suất để chọn được $1$ nam và $1$ nữ (viết dưới dạng số thập phân).
::key 0,6
Có $2\cdot3=6$ cặp nam–nữ trên $10$ cặp: $\dfrac{6}{10}=0{,}6$.
:::
