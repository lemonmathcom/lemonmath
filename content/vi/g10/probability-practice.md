---
title: Thực hành tính xác suất theo định nghĩa cổ điển
description: Chiến lược giải bài toán xác suất cổ điển, dùng quy tắc đếm, tổ hợp, tổng số chấm của xúc xắc và biến cố đối cho bài toán "ít nhất một".
minutes: 28
---

:::goals
- Làm theo chiến lược bốn bước cho bài toán xác suất cổ điển.
- Dùng tổ hợp để đếm kết quả khi chọn các đối tượng không có thứ tự.
- Dùng biến cố đối cho các biến cố "ít nhất một".
- Làm việc với các tình huống thực tế: hộp bóng, ban đại diện, xúc xắc, kiểm tra chất lượng, xổ số và bộ bài.
:::

Câu lạc bộ toán của trường có $6$ bạn nam và $4$ bạn nữ. Thầy giáo chọn ngẫu nhiên $3$ bạn đi thi. Khả năng cả ba bạn được chọn đều là nữ là bao nhiêu? Khả năng có ít nhất một bạn nữ là bao nhiêu?

Có tất cả $120$ cách chọn $3$ bạn, quá nhiều để liệt kê. Bài này luyện cách **đếm** bằng tổ hợp thay cho liệt kê, rồi dùng định nghĩa cổ điển của xác suất.

## Một chiến lược hiệu quả

### Khám phá: liệt kê một trường hợp nhỏ

Một hộp có $3$ bóng đỏ $\text{Đ}_1, \text{Đ}_2, \text{Đ}_3$ và $2$ bóng xanh $X_1, X_2$. Lấy cùng lúc $2$ bóng. Mọi cách lấy là:

$$\text{Đ}_1\text{Đ}_2,\ \text{Đ}_1\text{Đ}_3,\ \text{Đ}_2\text{Đ}_3,\ \text{Đ}_1X_1,\ \text{Đ}_1X_2,\ \text{Đ}_2X_1,\ \text{Đ}_2X_2,\ \text{Đ}_3X_1,\ \text{Đ}_3X_2,\ X_1X_2.$$

Có $10$ kết quả, trong đó $3$ kết quả có hai bóng đỏ. Vậy xác suất lấy được hai bóng đỏ là $\dfrac{3}{10}$.

Ta không cần liệt kê: lấy $2$ bóng **không kể thứ tự** trong $5$ bóng có $C_5^2=10$ cách, lấy $2$ bóng trong $3$ bóng đỏ có $C_3^2=3$ cách. Số đếm khớp với danh sách.

:::definition Xác suất theo định nghĩa cổ điển
Nếu các kết quả của phép thử đồng khả năng thì xác suất của biến cố $A$ là
$$P(A)=\frac{n(A)}{n(\Omega)},$$
trong đó $n(\Omega)$ là số kết quả có thể và $n(A)$ là số kết quả thuận lợi cho $A$ (xem [biến cố và định nghĩa cổ điển của xác suất](lesson:events-classical-probability)). Với biến cố đối $\overline{A}$: $P(A)=1-P(\overline{A})$.
:::

Công thức biến cố đối đúng vì mỗi kết quả thuộc đúng một trong hai biến cố $A$ và $\overline{A}$, nên $n(A)+n(\overline{A})=n(\Omega)$.

### Bốn bước

1. **Xác định phép thử** và xem thứ tự có quan trọng không. Lấy "cùng lúc" nghĩa là không kể thứ tự, nên dùng tổ hợp.
2. **Đếm $n(\Omega)$** bằng quy tắc đếm, hoán vị, chỉnh hợp hoặc tổ hợp.
3. **Đếm $n(A)$**: dùng quy tắc nhân hoặc chia trường hợp. Gặp chữ "ít nhất một", hãy cân nhắc biến cố đối.
4. **Chia và rút gọn**, rồi kiểm tra $0\le P(A)\le 1$.

## Bóng trong hộp

Ta bắt đầu với hộp bóng, mở rộng phần khám phá cho hộp lớn hơn.

:::example Hai bóng lấy cùng lúc
Một hộp có $5$ bóng đỏ và $3$ bóng xanh. Lấy ngẫu nhiên cùng lúc hai bóng. Tính xác suất để a) cả hai bóng đều đỏ, b) hai bóng khác màu, c) có ít nhất một bóng đỏ.

**Lời giải.** Hai bóng lấy cùng lúc nên không kể thứ tự: $n(\Omega)=C_8^2=28$.

a) Chọn $2$ trong $5$ bóng đỏ:
$$P=\frac{C_5^2}{28}=\frac{10}{28}=\frac{5}{14}.$$

b) Chọn $1$ bóng đỏ rồi $1$ bóng xanh (quy tắc nhân):
$$P=\frac{5\cdot3}{28}=\frac{15}{28}.$$

c) Biến cố đối là "cả hai bóng đều xanh", có $C_3^2=3$ kết quả:
$$P=1-\frac{3}{28}=\frac{25}{28}.$$

Vậy các xác suất lần lượt là $\dfrac{5}{14}$, $\dfrac{15}{28}$ và $\dfrac{25}{28}$.
:::

## Chọn ban đại diện

Cách đếm tương tự cho phép trả lời câu hỏi ở đầu bài.

:::example Câu lạc bộ toán
Câu lạc bộ có $6$ nam và $4$ nữ. Chọn ngẫu nhiên $3$ bạn. Tính xác suất để a) cả ba đều là nữ, b) có đúng $2$ nam, c) có ít nhất một nữ.

**Lời giải.** Chọn $3$ trong $10$ bạn: $n(\Omega)=C_{10}^3=120$.

$$\begin{aligned} \text{a) }& P=\frac{C_4^3}{120}=\frac{4}{120}=\frac{1}{30};\\ \text{b) }& P=\frac{C_6^2\cdot C_4^1}{120}=\frac{15\cdot4}{120}=\frac12. \end{aligned}$$

c) Biến cố đối là "cả ba đều nam", có $C_6^3=20$ kết quả, nên $P=1-\dfrac{20}{120}=\dfrac56$.

Vậy xác suất cả ba là nữ bằng $\dfrac{1}{30}$, có đúng $2$ nam bằng $\dfrac12$, có ít nhất một nữ bằng $\dfrac56$.

**Kiểm tra.** Đếm trực tiếp câu c): $1$ nữ $2$ nam có $4\cdot15=60$, $2$ nữ $1$ nam có $6\cdot6=36$, $3$ nữ có $4$; tổng $100=120-20$.
:::

## Gieo xúc xắc

Với xúc xắc, hai con được phân biệt (con thứ nhất, con thứ hai), nên mỗi kết quả là một **cặp có thứ tự**.

:::example Tổng số chấm của hai con xúc xắc
Gieo hai con xúc xắc cân đối. Tính xác suất để tổng số chấm bằng $7$, và xác suất để tổng số chấm bằng $11$.

**Lời giải.** Mỗi con có $6$ mặt, theo quy tắc nhân $n(\Omega)=6\cdot6=36$. Ta liệt kê các cặp thuận lợi:

$$\begin{aligned} \text{tổng }7:&\quad (1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1)\ \Rightarrow\ 6\ \text{kết quả};\\ \text{tổng }11:&\quad (5; 6), (6; 5)\ \Rightarrow\ 2\ \text{kết quả}. \end{aligned}$$

Vậy $P(\text{tổng }7)=\dfrac{6}{36}=\dfrac16$ và $P(\text{tổng }11)=\dfrac{2}{36}=\dfrac{1}{18}$.

**Kiểm tra.** $(5; 6)$ và $(6; 5)$ là hai kết quả khác nhau. Nếu gộp làm một, ta sẽ đếm sai cả $n(\Omega)$.
:::

## Kiểm tra chất lượng

Trong sản xuất, người ta lấy mẫu vài sản phẩm để kiểm tra. Biến cố đối giúp tính nhanh khả năng phát hiện lỗi.

:::example Sản phẩm lỗi
Một hộp có $20$ sản phẩm, trong đó $3$ sản phẩm lỗi. Người kiểm tra lấy ngẫu nhiên $4$ sản phẩm. Tính xác suất để không có sản phẩm lỗi nào, và xác suất để có ít nhất một sản phẩm lỗi.

**Lời giải.** $n(\Omega)=C_{20}^4=4845$. "Không có sản phẩm lỗi" nghĩa là cả $4$ sản phẩm lấy từ $17$ sản phẩm tốt:

$$P(\text{không lỗi})=\frac{C_{17}^4}{C_{20}^4}=\frac{2380}{4845}=\frac{28}{57},\qquad P(\text{ít nhất một lỗi})=1-\frac{28}{57}=\frac{29}{57}\approx 0{,}51.$$

Vậy người kiểm tra phát hiện được ít nhất một sản phẩm lỗi với xác suất khoảng $0{,}51$, chỉ hơn một nửa.
:::

## Xổ số và bộ bài

Hai ví dụ cuối có số kết quả rất lớn, nên chỉ đếm được bằng tổ hợp.

:::example Một trò xổ số
Trong một trò xổ số, người chơi chọn $6$ số trong $45$ số, và máy quay ra $6$ số. Tính xác suất để a) vé trùng cả sáu số, b) vé trùng đúng năm số.

**Lời giải.** $n(\Omega)=C_{45}^6=8\,145\,060$.

a) Chỉ có một bộ $6$ số thuận lợi, nên $P=\dfrac{1}{8\,145\,060}$.

b) Chọn $5$ trong $6$ số trúng và $1$ trong $39$ số không trúng:
$$n(A)=C_6^5\cdot39=234,\qquad P=\frac{234}{8\,145\,060}=\frac{39}{1\,357\,510}.$$

Vậy xác suất trúng cả sáu số là $\dfrac{1}{8\,145\,060}$, xác suất trúng đúng năm số là $\dfrac{39}{1\,357\,510}$, cả hai đều rất nhỏ.
:::

:::example Hai lá át
Rút ngẫu nhiên hai lá bài từ bộ bài $52$ lá. Tính xác suất để cả hai đều là lá át.

**Lời giải.** Bộ bài có $4$ lá át. Chọn $2$ trong $4$ lá át, chia cho số cách chọn $2$ trong $52$ lá:

$$P=\frac{C_4^2}{C_{52}^2}=\frac{6}{1326}=\frac{1}{221}.$$

Vậy xác suất rút được hai lá át là $\dfrac{1}{221}$.
:::

:::warning Những sai lầm thường gặp
- **Đếm $n(\Omega)$ và $n(A)$ theo hai cách khác nhau.** Sai: hai bóng đỏ trong ví dụ đầu có $P=\dfrac{C_5^2}{A_8^2}=\dfrac{10}{56}$. Lí do sai: mẫu số kể thứ tự, tử số không kể. Đúng: $\dfrac{C_5^2}{C_8^2}=\dfrac{5}{14}$ (hoặc $\dfrac{A_5^2}{A_8^2}=\dfrac{20}{56}$, cùng kết quả).
- **Coi các kết quả của hai xúc xắc là không có thứ tự.** Sai: có $21$ cách ra hai mặt, nên $P(\text{tổng }11)=\dfrac{1}{21}$. Lí do sai: $21$ kết quả này không đồng khả năng. Đúng: dùng $36$ cặp có thứ tự, $P=\dfrac{1}{18}$.
- **Đếm "ít nhất một" bằng một phép nhân.** Sai: số cách chọn $3$ bạn có ít nhất một nữ là $4\cdot C_9^2=144$. Lí do sai: mỗi nhóm có hai, ba nữ bị đếm nhiều lần, và $144>120$. Đúng: $120-C_6^3=100$.
:::

## Thuật ngữ

:::terms
- kết quả thuận lợi | favourable outcomes
- ít nhất một | at least one
- biến cố đối | complement
- chọn ngẫu nhiên | random selection
- kiểm tra chất lượng | quality control
- xổ số | lottery
- lỗi (phế phẩm) | faulty (defective)
- hộp (túi) đựng bóng | urn
:::

## Tóm tắt

- $P(A)=\dfrac{n(A)}{n(\Omega)}$ khi các kết quả đồng khả năng.
- Bốn bước: phép thử → $n(\Omega)$ → $n(A)$ → chia, rút gọn, kiểm tra $0\le P\le 1$.
- Lấy "cùng lúc": tổ hợp $C_n^k$. Hai xúc xắc: $36$ cặp có thứ tự.
- Nhiều nhóm: quy tắc nhân, ví dụ $C_6^2\cdot C_4^1$.
- "Ít nhất một": $P(A)=1-P(\overline{A})$, với $\overline{A}$ là "không có cái nào".

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Một hộp có $6$ bóng trắng và $4$ bóng đen. Lấy ngẫu nhiên cùng lúc hai bóng. Tính xác suất để cả hai bóng đều trắng.

::hint
**Kiến thức:** lấy cùng lúc $k$ trong $n$ vật có $C_n^k$ cách.

**Gợi ý các bước:**
1. Tính $n(\Omega)=C_{10}^2$.
2. Tính số cách lấy $2$ trong $6$ bóng trắng.

::solution
$P=\dfrac{C_6^2}{C_{10}^2}=\dfrac{15}{45}=\dfrac13$.

**Đáp số.** $\dfrac13$.
:::

:::exercise
Với hộp bóng ở bài trên, tính xác suất để hai bóng lấy ra khác màu.

::hint
**Kiến thức:** quy tắc nhân: chọn $1$ trắng và $1$ đen.

**Gợi ý các bước:**
1. Đếm số cách chọn $1$ trong $6$ bóng trắng và $1$ trong $4$ bóng đen.
2. Chia cho $C_{10}^2=45$.

::solution
$n(A)=6\cdot4=24$, nên $P=\dfrac{24}{45}=\dfrac{8}{15}$.

**Đáp số.** $\dfrac{8}{15}$.
:::

:::exercise
Một lớp có $12$ nam và $8$ nữ. Chọn ngẫu nhiên ba học sinh. Tính xác suất để a) cả ba đều là nam, b) có ít nhất một nữ.

::hint
**Kiến thức:** "có ít nhất một nữ" là biến cố đối của "cả ba đều là nam".

**Gợi ý các bước:**
1. Tính $C_{20}^3$ và $C_{12}^3$.
2. Dùng $P(A)=1-P(\overline{A})$ cho câu b).

::solution
a) $P=\dfrac{C_{12}^3}{C_{20}^3}=\dfrac{220}{1140}=\dfrac{11}{57}$. b) $P=1-\dfrac{11}{57}=\dfrac{46}{57}$.

**Đáp số.** a) $\dfrac{11}{57}$; b) $\dfrac{46}{57}$.
:::

:::exercise
Một cửa hàng nhận một thùng $15$ chiếc bóng đèn, trong đó có $2$ chiếc hỏng. Nhân viên lấy ngẫu nhiên $3$ chiếc để thử. Tính xác suất để cả $3$ chiếc đều tốt.

::hint
**Kiến thức:** cả $3$ chiếc tốt nghĩa là chọn $3$ trong $13$ chiếc tốt.

**Gợi ý các bước:**
1. Tính $C_{15}^3$ và $C_{13}^3$.
2. Chia và rút gọn.

::solution
$P=\dfrac{C_{13}^3}{C_{15}^3}=\dfrac{286}{455}=\dfrac{22}{35}$.

**Đáp số.** $\dfrac{22}{35}$.
:::

:::exercise
Gieo hai con xúc xắc cân đối. Tính xác suất để tích hai số chấm là số chẵn.

::hint
**Kiến thức:** tích hai số là số lẻ khi và chỉ khi cả hai số đều lẻ.

**Gợi ý các bước:**
1. Đếm số cặp có cả hai số lẻ.
2. Dùng biến cố đối.

::solution
Có $3\cdot3=9$ cặp gồm hai số lẻ trong $36$ cặp. $P(\text{chẵn})=1-\dfrac{9}{36}=\dfrac34$.

**Đáp số.** $\dfrac34$.
:::

:::exercise
Một hộp có $4$ bóng đỏ, $3$ bóng vàng và $2$ bóng xanh. Lấy ngẫu nhiên cùng lúc $3$ bóng. Mỗi khẳng định sau đúng hay sai?

a) Số kết quả có thể là $84$.

b) Xác suất lấy được $3$ bóng đỏ là $\dfrac{1}{21}$.

c) Xác suất lấy được $3$ bóng có đủ ba màu là $\dfrac13$.

d) Xác suất có ít nhất một bóng xanh là $\dfrac{7}{12}$.

::hint
**Kiến thức:** $n(\Omega)=C_9^3$; đủ ba màu: chọn mỗi màu một bóng; "ít nhất một xanh" là biến cố đối của "không có bóng xanh".

**Gợi ý các bước:**
1. Tính $C_9^3$ và $C_4^3$.
2. Đếm $4\cdot3\cdot2$ cho câu c).
3. Đếm $C_7^3$ cho câu d).

::solution
a) **Đúng**: $C_9^3=84$.

b) **Đúng**: $\dfrac{C_4^3}{84}=\dfrac{4}{84}=\dfrac{1}{21}$.

c) **Sai**: $\dfrac{4\cdot3\cdot2}{84}=\dfrac{24}{84}=\dfrac27$.

d) **Đúng**: không có bóng xanh có $C_7^3=35$ cách, nên $P=1-\dfrac{35}{84}=\dfrac{49}{84}=\dfrac{7}{12}$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Rút ngẫu nhiên ba lá bài từ bộ bài $52$ lá. Tính xác suất để cả ba lá đều là lá cơ (làm tròn đến hàng phần nghìn).

::hint
**Kiến thức:** bộ bài có $13$ lá cơ.

**Gợi ý các bước:**
1. Tính $C_{13}^3$ và $C_{52}^3$.
2. Chia rồi làm tròn.

::solution
$P=\dfrac{C_{13}^3}{C_{52}^3}=\dfrac{286}{22\,100}=\dfrac{11}{850}\approx 0{,}013$.

**Đáp số.** $0{,}013$.
:::

:::exercise Thử thách
Một nhóm có $5$ nam và $4$ nữ. Chọn ngẫu nhiên $4$ người. Tính xác suất để có đúng $2$ nam và $2$ nữ.

::hint
**Kiến thức:** quy tắc nhân cho hai nhóm: $C_5^2\cdot C_4^2$.

**Gợi ý các bước:**
1. Tính $n(\Omega)=C_9^4$.
2. Tính $n(A)$ rồi chia.

::solution
$n(\Omega)=C_9^4=126$, $n(A)=C_5^2\cdot C_4^2=10\cdot6=60$, nên $P=\dfrac{60}{126}=\dfrac{10}{21}$.

**Đáp số.** $\dfrac{10}{21}$.
:::

:::exercise Thử thách
Gieo ba con xúc xắc cân đối. Tính xác suất để a) tổng số chấm bằng $9$, b) có ít nhất một con xuất hiện mặt sáu chấm.

::hint
**Kiến thức:** $n(\Omega)=6^3=216$ bộ ba có thứ tự.

**Gợi ý các bước:**
1. Câu a): liệt kê các bộ ba không kể thứ tự có tổng $9$, rồi đếm số cách sắp xếp mỗi bộ.
2. Câu b): biến cố đối là "không con nào ra mặt sáu", có $5^3$ kết quả.

::solution
a) Các bộ có tổng $9$: $\{1; 2; 6\}$, $\{1; 3; 5\}$, $\{2; 3; 4\}$ (mỗi bộ $6$ cách sắp), $\{1; 4; 4\}$, $\{2; 2; 5\}$ (mỗi bộ $3$ cách), $\{3; 3; 3\}$ ($1$ cách): tổng $18+6+1=25$, nên $P=\dfrac{25}{216}$.

b) $P=1-\dfrac{125}{216}=\dfrac{91}{216}$.

**Đáp số.** a) $\dfrac{25}{216}$; b) $\dfrac{91}{216}$.
:::

:::exercise Ôn tập
Năm bạn, trong đó có An và Bình, ngồi ngẫu nhiên vào một hàng ghế $5$ chỗ. Dùng [hoán vị](lesson:permutations-combinations), tính xác suất để An và Bình ngồi cạnh nhau.

::hint
**Kiến thức:** $n$ người xếp vào $n$ chỗ có $P_n=n!$ cách; coi An và Bình là một "khối".

**Gợi ý các bước:**
1. Tính $n(\Omega)=5!$.
2. Xếp "khối" An–Bình cùng $3$ bạn còn lại: $4!$ cách, nhân $2$ vì An và Bình đổi chỗ được.

::solution
$n(\Omega)=5!=120$, $n(A)=2\cdot4!=48$, nên $P=\dfrac{48}{120}=\dfrac25$.

**Đáp số.** $\dfrac25$.
:::

## Kiểm tra mini

:::quiz
::mc
Gieo một con xúc xắc cân đối. Xác suất để số chấm xuất hiện là số nguyên tố bằng
A. $\dfrac23$.
B. $\dfrac13$.
C. $\dfrac12$.
D. $\dfrac56$.
::key C
Các số nguyên tố trong $1, \dots, 6$ là $2, 3, 5$, nên $P=\dfrac36=\dfrac12$. Coi nhầm $1$ là số nguyên tố thì ra $\dfrac46=\dfrac23$.

::mc
Một hộp có $4$ quả bóng đỏ và $6$ quả bóng xanh. Lấy ngẫu nhiên đồng thời $2$ quả. Xác suất để cả hai quả đều xanh là
A. $\dfrac35$.
B. $\dfrac13$.
C. $\dfrac{9}{25}$.
D. $\dfrac23$.
::key B
$P=\dfrac{C_6^2}{C_{10}^2}=\dfrac{15}{45}=\dfrac13$. Phương án A chỉ tính cho một quả; phương án C coi như lấy có hoàn lại.

::mc
Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm bằng $4$ là
A. $\dfrac{1}{12}$.
B. $\dfrac{1}{18}$.
C. $\dfrac{2}{21}$.
D. $\dfrac19$.
::key A
$n(\Omega)=36$ cặp có thứ tự; tổng bằng $4$ có $(1; 3)$, $(2; 2)$, $(3; 1)$, nên $P=\dfrac{3}{36}=\dfrac{1}{12}$. Phương án B gộp $(1; 3)$ với $(3; 1)$; phương án C dùng $21$ kết quả không đồng khả năng.

::mc
Một nhóm có $5$ nam và $3$ nữ. Chọn ngẫu nhiên $3$ người. Xác suất để có ít nhất một nữ là
A. $\dfrac{5}{28}$.
B. $\dfrac38$.
C. $\dfrac{15}{28}$.
D. $\dfrac{23}{28}$.
::key D
Biến cố đối là "cả ba đều nam", có $C_5^3=10$ kết quả trong $C_8^3=56$. Vậy $P=1-\dfrac{10}{56}=\dfrac{23}{28}$. Phương án A là xác suất của biến cố đối.

::tf
Một hộp có $5$ tấm thẻ đánh số $1, 2, 3, 4, 5$. Rút ngẫu nhiên đồng thời $2$ thẻ.
a) Không gian mẫu có $10$ phần tử.
b) Xác suất để tổng hai số là số chẵn bằng $\dfrac25$.
c) Xác suất để tích hai số là số lẻ bằng $\dfrac35$.
d) Xác suất để có ít nhất một thẻ mang số lớn hơn $3$ bằng $\dfrac{3}{10}$.
::key Đ Đ S S
a) Đúng: $C_5^2=10$. b) Đúng: hai số cùng lẻ ($C_3^2=3$ cách) hoặc cùng chẵn ($1$ cách), $P=\dfrac{4}{10}$. c) Sai: cần cả hai số lẻ, $P=\dfrac{3}{10}$. d) Sai: biến cố đối "cả hai thẻ đều $\le 3$" có $3$ kết quả, nên $P=1-\dfrac{3}{10}=\dfrac{7}{10}$.

::sa
Gieo hai con xúc xắc cân đối. Tính xác suất để tổng số chấm không nhỏ hơn $10$ (làm tròn đến hàng phần trăm).
::key 0,17
Các cặp có tổng $10$, $11$, $12$: $(4; 6)$, $(5; 5)$, $(6; 4)$, $(5; 6)$, $(6; 5)$, $(6; 6)$, tức $6$ cặp trong $36$. $P=\dfrac16\approx0{,}17$.

::sa
Một lô hàng có $10$ sản phẩm, trong đó có $3$ phế phẩm. Lấy ngẫu nhiên $2$ sản phẩm. Tính xác suất để có ít nhất một phế phẩm (làm tròn đến hàng phần trăm).
::key 0,53
Biến cố đối là "cả hai sản phẩm đều tốt": $C_7^2=21$ trong $C_{10}^2=45$ kết quả. $P=1-\dfrac{21}{45}=\dfrac{8}{15}\approx0{,}53$.
:::
