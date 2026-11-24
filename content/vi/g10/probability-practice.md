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

Có tất cả $120$ cách chọn $3$ bạn. Ngồi viết hết ra thì mỏi tay mà dễ sót. May là ta không cần liệt kê: chỉ cần **đếm** cho đúng, bằng tổ hợp, rồi chia theo định nghĩa cổ điển của xác suất. Bài này là để luyện cho cách đếm ấy thật vững tay.

## Một chiến lược hiệu quả

### Khám phá: liệt kê một trường hợp nhỏ

Trước khi đếm những con số lớn, ta thử với một hộp thật nhỏ, nhỏ đến mức viết ra được hết. Một hộp có $3$ bóng đỏ $\text{Đ}_1, \text{Đ}_2, \text{Đ}_3$ và $2$ bóng xanh $X_1, X_2$. Lấy cùng lúc $2$ bóng. Mọi cách lấy là:

$$\text{Đ}_1\text{Đ}_2,\ \text{Đ}_1\text{Đ}_3,\ \text{Đ}_2\text{Đ}_3,\ \text{Đ}_1X_1,\ \text{Đ}_1X_2,\ \text{Đ}_2X_1,\ \text{Đ}_2X_2,\ \text{Đ}_3X_1,\ \text{Đ}_3X_2,\ X_1X_2.$$

Đếm lại, bạn thấy có $10$ kết quả, trong đó $3$ kết quả có hai bóng đỏ. Vậy xác suất lấy được hai bóng đỏ là $\dfrac{3}{10}$.

Bây giờ ta đếm mà không nhìn danh sách. Lấy $2$ bóng **không kể thứ tự** trong $5$ bóng có $C_5^2=10$ cách, lấy $2$ bóng trong $3$ bóng đỏ có $C_3^2=3$ cách. Hai con số khớp đúng với danh sách. Đó là điều làm ta yên tâm: với hộp lớn hơn, không liệt kê được nữa, tổ hợp vẫn đếm đúng.

:::definition Xác suất theo định nghĩa cổ điển
Nếu các kết quả của phép thử đồng khả năng thì xác suất của biến cố $A$ là
$$P(A)=\frac{n(A)}{n(\Omega)},$$
trong đó $n(\Omega)$ là số kết quả có thể và $n(A)$ là số kết quả thuận lợi cho $A$ (xem [biến cố và định nghĩa cổ điển của xác suất](lesson:events-classical-probability)). Với biến cố đối $\overline{A}$: $P(A)=1-P(\overline{A})$.
:::

Vì sao công thức biến cố đối đúng? Vì mỗi kết quả thuộc đúng một trong hai biến cố $A$ và $\overline{A}$, không thiếu cũng không trùng, nên $n(A)+n(\overline{A})=n(\Omega)$. Chia hai vế cho $n(\Omega)$ là ra công thức.

### Bốn bước

Các bài xác suất cổ điển trông rất khác nhau, nhưng hầu hết đều đi qua bốn bước giống nhau. Nắm được bốn bước này, bạn sẽ ít bị rối khi gặp đề lạ.

1. **Xác định phép thử** và xem thứ tự có quan trọng không. Lấy "cùng lúc" nghĩa là không kể thứ tự, nên dùng tổ hợp.
2. **Đếm $n(\Omega)$** bằng quy tắc đếm, hoán vị, chỉnh hợp hoặc tổ hợp.
3. **Đếm $n(A)$**: dùng quy tắc nhân hoặc chia trường hợp. Gặp chữ "ít nhất một", hãy cân nhắc biến cố đối.
4. **Chia và rút gọn**, rồi kiểm tra $0\le P(A)\le 1$.

## Bóng trong hộp

Ta quay lại với hộp bóng, lần này hộp lớn hơn một chút, đủ để thấy tổ hợp làm việc thay cho danh sách.

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

Đến đây ta đã đủ đồ nghề để trả lời câu hỏi về câu lạc bộ toán ở đầu bài. Cách đếm y như với hộp bóng: các bạn nam đóng vai bóng đỏ, các bạn nữ đóng vai bóng xanh.

:::example Câu lạc bộ toán
Câu lạc bộ có $6$ nam và $4$ nữ. Chọn ngẫu nhiên $3$ bạn. Tính xác suất để a) cả ba đều là nữ, b) có đúng $2$ nam, c) có ít nhất một nữ.

**Lời giải.** Chọn $3$ trong $10$ bạn: $n(\Omega)=C_{10}^3=120$.

$$\begin{aligned} \text{a) }& P=\frac{C_4^3}{120}=\frac{4}{120}=\frac{1}{30};\\ \text{b) }& P=\frac{C_6^2\cdot C_4^1}{120}=\frac{15\cdot4}{120}=\frac12. \end{aligned}$$

c) Biến cố đối là "cả ba đều nam", có $C_6^3=20$ kết quả, nên $P=1-\dfrac{20}{120}=\dfrac56$.

Vậy xác suất cả ba là nữ bằng $\dfrac{1}{30}$, có đúng $2$ nam bằng $\dfrac12$, có ít nhất một nữ bằng $\dfrac56$.

**Kiểm tra.** Đếm trực tiếp câu c): $1$ nữ $2$ nam có $4\cdot15=60$, $2$ nữ $1$ nam có $6\cdot6=36$, $3$ nữ có $4$; tổng $100=120-20$.
:::

## Gieo xúc xắc

Với xúc xắc thì khác một chút. Dù gieo cùng lúc, hai con vẫn là hai con riêng (con thứ nhất, con thứ hai), nên mỗi kết quả là một **cặp có thứ tự**. Chỗ này nhiều bạn hay nhầm, nên ta xem kĩ qua ví dụ.

:::example Tổng số chấm của hai con xúc xắc
Gieo hai con xúc xắc cân đối. Tính xác suất để tổng số chấm bằng $7$, và xác suất để tổng số chấm bằng $11$.

**Lời giải.** Mỗi con có $6$ mặt, theo quy tắc nhân $n(\Omega)=6\cdot6=36$. Ta liệt kê các cặp thuận lợi:

$$\begin{aligned} \text{tổng }7:&\quad (1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1)\ \Rightarrow\ 6\ \text{kết quả};\\ \text{tổng }11:&\quad (5; 6), (6; 5)\ \Rightarrow\ 2\ \text{kết quả}. \end{aligned}$$

Vậy $P(\text{tổng }7)=\dfrac{6}{36}=\dfrac16$ và $P(\text{tổng }11)=\dfrac{2}{36}=\dfrac{1}{18}$.

**Kiểm tra.** $(5; 6)$ và $(6; 5)$ là hai kết quả khác nhau. Nếu gộp làm một, ta sẽ đếm sai cả $n(\Omega)$.
:::

## Kiểm tra chất lượng

Ở nhà máy, không ai kiểm tra hết từng sản phẩm. Người ta chỉ lấy ra vài cái để thử. Câu hỏi tự nhiên là: lấy vài cái như thế thì có bao nhiêu khả năng bắt được hàng lỗi? Ở đây, đếm phần "không có lỗi nào" dễ hơn nhiều, nên ta dùng biến cố đối.

:::example Sản phẩm lỗi
Một hộp có $20$ sản phẩm, trong đó $3$ sản phẩm lỗi. Người kiểm tra lấy ngẫu nhiên $4$ sản phẩm. Tính xác suất để không có sản phẩm lỗi nào, và xác suất để có ít nhất một sản phẩm lỗi.

**Lời giải.** $n(\Omega)=C_{20}^4=4845$. "Không có sản phẩm lỗi" nghĩa là cả $4$ sản phẩm lấy từ $17$ sản phẩm tốt:

$$P(\text{không lỗi})=\frac{C_{17}^4}{C_{20}^4}=\frac{2380}{4845}=\frac{28}{57},\qquad P(\text{ít nhất một lỗi})=1-\frac{28}{57}=\frac{29}{57}\approx 0{,}51.$$

Vậy người kiểm tra phát hiện được ít nhất một sản phẩm lỗi với xác suất khoảng $0{,}51$, chỉ hơn một nửa.
:::

## Xổ số và bộ bài

Hai ví dụ cuối có số kết quả lên tới hàng nghìn, hàng triệu. Không ai liệt kê nổi, nhưng tổ hợp vẫn đếm gọn trong một dòng. Kết quả cũng giúp bạn hiểu vì sao trúng xổ số lại hiếm đến thế.

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

Quay lại câu lạc bộ toán: khả năng cả ba bạn đều là nữ chỉ là $\dfrac{1}{30}$, còn khả năng có ít nhất một bạn nữ lên tới $\dfrac56$. Ta có được hai con số ấy mà không phải liệt kê $120$ cách chọn, chỉ nhờ đếm cho khéo. Điều đáng nhớ nhất: tử số và mẫu số phải đếm theo cùng một cách.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn cứ tự làm trước, đi lần lượt qua bốn bước, đếm $n(\Omega)$ rồi mới đến $n(A)$. Bí quá hãy mở gợi ý, sau cùng mới xem lời giải để so.

:::exercise
Một hộp có $6$ bóng trắng và $4$ bóng đen. Lấy ngẫu nhiên cùng lúc hai bóng. Tính xác suất để cả hai bóng đều trắng.

::hint
**Kiến thức:** lấy cùng lúc $k$ trong $n$ vật có $C_n^k$ cách.

**Gợi ý các bước:**
1. Tính $n(\Omega)=C_{10}^2$.
2. Tính số cách lấy $2$ trong $6$ bóng trắng.

::solution
Gọi $A$ là biến cố "cả hai bóng lấy ra đều trắng". Lấy ngẫu nhiên cùng lúc hai bóng từ $10$ bóng ($6$ trắng và $4$ đen), nên mỗi kết quả là một tổ hợp chập $2$ của $10$ bóng.

Số kết quả có thể là $n(\Omega)=C_{10}^2=\dfrac{10\cdot9}{2}=45$.

Số kết quả thuận lợi cho $A$ là số cách chọn $2$ bóng trong $6$ bóng trắng: $n(A)=C_6^2=\dfrac{6\cdot5}{2}=15$.

Áp dụng định nghĩa cổ điển của xác suất, ta có
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{C_6^2}{C_{10}^2}=\frac{15}{45}=\frac13.$$

Vậy xác suất để cả hai bóng đều trắng là $\dfrac13$.

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
Xét hộp ở Bài 1 ($6$ bóng trắng, $4$ bóng đen) và lấy ngẫu nhiên cùng lúc hai bóng. Gọi $A$ là biến cố "hai bóng lấy ra khác màu". Số kết quả có thể vẫn là $n(\Omega)=C_{10}^2=45$.

Hai bóng khác màu nghĩa là có một bóng trắng và một bóng đen. Chọn $1$ bóng trắng có $6$ cách, chọn $1$ bóng đen có $4$ cách; theo quy tắc nhân, $n(A)=6\cdot4=24$.

Do đó
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{24}{45}=\frac{8}{15}.$$

Kiểm tra bằng biến cố đối: hai bóng cùng màu có $C_6^2+C_4^2=15+6=21$ cách, nên $P(A)=1-\dfrac{21}{45}=\dfrac{24}{45}=\dfrac{8}{15}$.

Vậy xác suất để hai bóng lấy ra khác màu là $\dfrac{8}{15}$.

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
Chọn ngẫu nhiên $3$ học sinh trong $20$ học sinh ($12$ nam và $8$ nữ), nên $n(\Omega)=C_{20}^3=\dfrac{20\cdot19\cdot18}{3\cdot2\cdot1}=1140$.

a) Gọi $A$ là biến cố "cả ba học sinh đều là nam". Số kết quả thuận lợi là $n(A)=C_{12}^3=\dfrac{12\cdot11\cdot10}{3\cdot2\cdot1}=220$. Do đó
$$P(A)=\frac{C_{12}^3}{C_{20}^3}=\frac{220}{1140}=\frac{11}{57}.$$

b) Gọi $B$ là biến cố "có ít nhất một nữ". Biến cố đối của $B$ chính là biến cố $A$ (cả ba đều là nam). Áp dụng công thức xác suất của biến cố đối, ta có
$$P(B)=1-P(A)=1-\frac{11}{57}=\frac{46}{57}.$$

Vậy xác suất để cả ba học sinh đều là nam là $\dfrac{11}{57}$, và xác suất để có ít nhất một nữ là $\dfrac{46}{57}$.

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
Gọi $A$ là biến cố "cả $3$ chiếc bóng đèn lấy ra đều tốt". Thùng có $15$ chiếc, trong đó có $15-2=13$ chiếc tốt.

Lấy ngẫu nhiên $3$ chiếc từ $15$ chiếc nên $n(\Omega)=C_{15}^3=\dfrac{15\cdot14\cdot13}{3\cdot2\cdot1}=455$.

Số kết quả thuận lợi cho $A$ là số cách chọn $3$ chiếc trong $13$ chiếc tốt: $n(A)=C_{13}^3=\dfrac{13\cdot12\cdot11}{3\cdot2\cdot1}=286$.

Do đó
$$P(A)=\frac{C_{13}^3}{C_{15}^3}=\frac{286}{455}=\frac{22}{35}.$$

Vậy xác suất để cả $3$ chiếc đều tốt là $\dfrac{22}{35}$.

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
Gieo hai con xúc xắc cân đối, mỗi con có $6$ mặt nên không gian mẫu có $n(\Omega)=6\cdot6=36$ kết quả đồng khả năng (các cặp số chấm).

Gọi $A$ là biến cố "tích hai số chấm là số chẵn". Biến cố đối $\overline{A}$ là "tích hai số chấm là số lẻ". Tích hai số là số lẻ khi và chỉ khi cả hai số đều lẻ.

Mỗi con xúc xắc có $3$ mặt lẻ ($1, 3, 5$), nên số cặp gồm hai số lẻ là $n(\overline{A})=3\cdot3=9$ trong $36$ cặp.

Do đó
$$P(\overline{A})=\frac{9}{36}=\frac14,\qquad P(A)=1-P(\overline{A})=1-\frac{9}{36}=\frac34.$$

Vậy xác suất để tích hai số chấm là số chẵn là $\dfrac34$.

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
Hộp có $4+3+2=9$ bóng. Lấy ngẫu nhiên cùng lúc $3$ bóng nên $n(\Omega)=C_9^3=84$.

a) **Đúng.** Số kết quả có thể là $C_9^3=\dfrac{9\cdot8\cdot7}{3\cdot2\cdot1}=84$.

b) **Đúng.** Số cách lấy $3$ bóng đỏ trong $4$ bóng đỏ là $C_4^3=4$. Do đó xác suất là
$$\frac{C_4^3}{84}=\frac{4}{84}=\frac{1}{21}.$$

c) **Sai.** Lấy được đủ ba màu nghĩa là có đúng một bóng đỏ, một bóng vàng và một bóng xanh. Số cách lấy là $4\cdot3\cdot2=24$ (quy tắc nhân). Xác suất là
$$\frac{4\cdot3\cdot2}{84}=\frac{24}{84}=\frac27.$$
Vì $\dfrac27\ne\dfrac13$ nên mệnh đề sai.

d) **Đúng.** Biến cố đối của "có ít nhất một bóng xanh" là "không có bóng xanh", tức là $3$ bóng được lấy từ $7$ bóng đỏ và vàng, có $C_7^3=35$ cách. Do đó
$$P=1-\frac{35}{84}=\frac{49}{84}=\frac{7}{12}.$$

Vậy các mệnh đề a), b), d) đúng; mệnh đề c) sai.

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
Gọi $A$ là biến cố "cả ba lá bài rút được đều là lá cơ". Bộ bài có $52$ lá, trong đó có $13$ lá cơ.

Rút ngẫu nhiên ba lá bài từ $52$ lá nên $n(\Omega)=C_{52}^3=\dfrac{52\cdot51\cdot50}{3\cdot2\cdot1}=22\,100$.

Số kết quả thuận lợi cho $A$ là số cách chọn $3$ lá trong $13$ lá cơ: $n(A)=C_{13}^3=\dfrac{13\cdot12\cdot11}{3\cdot2\cdot1}=286$.

Do đó
$$P(A)=\frac{C_{13}^3}{C_{52}^3}=\frac{286}{22\,100}=\frac{11}{850}\approx 0{,}013.$$

Vậy xác suất để cả ba lá đều là lá cơ xấp xỉ $0{,}013$ (làm tròn đến hàng phần nghìn).

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
Gọi $A$ là biến cố "chọn được đúng $2$ nam và $2$ nữ". Nhóm có $5+4=9$ người, chọn ngẫu nhiên $4$ người nên $n(\Omega)=C_9^4=\dfrac{9\cdot8\cdot7\cdot6}{4\cdot3\cdot2\cdot1}=126$.

Để có đúng $2$ nam và $2$ nữ, ta chọn $2$ nam trong $5$ nam ($C_5^2=10$ cách) và chọn $2$ nữ trong $4$ nữ ($C_4^2=6$ cách). Theo quy tắc nhân, $n(A)=C_5^2\cdot C_4^2=10\cdot6=60$.

Do đó
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{60}{126}=\frac{10}{21}.$$

Vậy xác suất để chọn được đúng $2$ nam và $2$ nữ là $\dfrac{10}{21}$.

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
Gieo ba con xúc xắc cân đối, mỗi con có $6$ mặt nên $n(\Omega)=6^3=216$ kết quả đồng khả năng (các bộ ba số có thứ tự).

a) Gọi $A$ là biến cố "tổng số chấm bằng $9$". Các bộ ba số (không kể thứ tự) từ $1$ đến $6$ có tổng $9$ là $\{1; 2; 6\}$, $\{1; 3; 5\}$, $\{2; 3; 4\}$, $\{1; 4; 4\}$, $\{2; 2; 5\}$ và $\{3; 3; 3\}$. Ta đếm số cách sắp thứ tự cho từng bộ:

- Ba bộ gồm ba số khác nhau $\{1; 2; 6\}$, $\{1; 3; 5\}$, $\{2; 3; 4\}$: mỗi bộ có $3!=6$ cách sắp, tổng cộng $3\cdot6=18$.
- Hai bộ có hai số bằng nhau $\{1; 4; 4\}$, $\{2; 2; 5\}$: mỗi bộ có $3$ cách sắp, tổng cộng $2\cdot3=6$.
- Bộ ba số bằng nhau $\{3; 3; 3\}$: có $1$ cách.

Số kết quả thuận lợi là $n(A)=18+6+1=25$. Do đó $P(A)=\dfrac{25}{216}$.

b) Gọi $B$ là biến cố "có ít nhất một con xuất hiện mặt sáu chấm". Biến cố đối $\overline{B}$ là "không con nào xuất hiện mặt sáu chấm", tức mỗi con xuất hiện một trong $5$ mặt $1, 2, 3, 4, 5$, nên $n(\overline{B})=5^3=125$. Do đó
$$P(B)=1-P(\overline{B})=1-\frac{125}{216}=\frac{91}{216}.$$

Vậy xác suất để tổng số chấm bằng $9$ là $\dfrac{25}{216}$, và xác suất để có ít nhất một con xuất hiện mặt sáu chấm là $\dfrac{91}{216}$.

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
Gọi $A$ là biến cố "An và Bình ngồi cạnh nhau". Xếp $5$ bạn vào hàng ghế $5$ chỗ là một hoán vị của $5$ phần tử, nên $n(\Omega)=5!=120$.

Để đếm $n(A)$, ta coi An và Bình là một "khối" ngồi liền nhau. Khi đó có $4$ đối tượng cần xếp (khối này và $3$ bạn còn lại), có $4!=24$ cách. Trong mỗi khối, An và Bình có thể đổi chỗ cho nhau, có $2!=2$ cách.

Theo quy tắc nhân, $n(A)=2\cdot4!=2\cdot24=48$.

Do đó
$$P(A)=\frac{n(A)}{n(\Omega)}=\frac{48}{120}=\frac25.$$

Vậy xác suất để An và Bình ngồi cạnh nhau là $\dfrac25$.

**Đáp số.** $\dfrac25$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Gieo một con xúc xắc cân đối. Xác suất để số chấm xuất hiện là số nguyên tố bằng
A. $\dfrac23$.
B. $\dfrac13$.
C. $\dfrac12$.
D. $\dfrac56$.
::key C
Các số nguyên tố trong $1, \dots, 6$ là $2, 3, 5$, nên $P=\dfrac36=\dfrac12$. Coi nhầm $1$ là số nguyên tố thì ra $\dfrac46=\dfrac23$.

::mc VD
Một hộp có $4$ quả bóng đỏ và $6$ quả bóng xanh. Lấy ngẫu nhiên đồng thời $2$ quả. Xác suất để cả hai quả đều xanh là
A. $\dfrac35$.
B. $\dfrac13$.
C. $\dfrac{9}{25}$.
D. $\dfrac23$.
::key B
$P=\dfrac{C_6^2}{C_{10}^2}=\dfrac{15}{45}=\dfrac13$. Phương án A chỉ tính cho một quả; phương án C coi như lấy có hoàn lại.

::mc TH
Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm bằng $4$ là
A. $\dfrac{1}{12}$.
B. $\dfrac{1}{18}$.
C. $\dfrac{2}{21}$.
D. $\dfrac19$.
::key A
$n(\Omega)=36$ cặp có thứ tự; tổng bằng $4$ có $(1; 3)$, $(2; 2)$, $(3; 1)$, nên $P=\dfrac{3}{36}=\dfrac{1}{12}$. Phương án B gộp $(1; 3)$ với $(3; 1)$; phương án C dùng $21$ kết quả không đồng khả năng.

::mc VD
Một nhóm có $5$ nam và $3$ nữ. Chọn ngẫu nhiên $3$ người. Xác suất để có ít nhất một nữ là
A. $\dfrac{5}{28}$.
B. $\dfrac38$.
C. $\dfrac{15}{28}$.
D. $\dfrac{23}{28}$.
::key D
Biến cố đối là "cả ba đều nam", có $C_5^3=10$ kết quả trong $C_8^3=56$. Vậy $P=1-\dfrac{10}{56}=\dfrac{23}{28}$. Phương án A là xác suất của biến cố đối.

::tf NB VD TH VD
Một hộp có $5$ tấm thẻ đánh số $1, 2, 3, 4, 5$. Rút ngẫu nhiên đồng thời $2$ thẻ.
a) Không gian mẫu có $10$ phần tử.
b) Xác suất để tổng hai số là số chẵn bằng $\dfrac25$.
c) Xác suất để tích hai số là số lẻ bằng $\dfrac35$.
d) Xác suất để có ít nhất một thẻ mang số lớn hơn $3$ bằng $\dfrac{3}{10}$.
::key Đ Đ S S
a) Đúng: $C_5^2=10$. b) Đúng: hai số cùng lẻ ($C_3^2=3$ cách) hoặc cùng chẵn ($1$ cách), $P=\dfrac{4}{10}$. c) Sai: cần cả hai số lẻ, $P=\dfrac{3}{10}$. d) Sai: biến cố đối "cả hai thẻ đều $\le 3$" có $3$ kết quả, nên $P=1-\dfrac{3}{10}=\dfrac{7}{10}$.

::sa VD
Gieo hai con xúc xắc cân đối. Tính xác suất để tổng số chấm không nhỏ hơn $10$ (làm tròn đến hàng phần trăm).
::key 0,17
Các cặp có tổng $10$, $11$, $12$: $(4; 6)$, $(5; 5)$, $(6; 4)$, $(5; 6)$, $(6; 5)$, $(6; 6)$, tức $6$ cặp trong $36$. $P=\dfrac16\approx0{,}17$.

::sa VD
Một lô hàng có $10$ sản phẩm, trong đó có $3$ phế phẩm. Lấy ngẫu nhiên $2$ sản phẩm. Tính xác suất để có ít nhất một phế phẩm (làm tròn đến hàng phần trăm).
::key 0,53
Biến cố đối là "cả hai sản phẩm đều tốt": $C_7^2=21$ trong $C_{10}^2=45$ kết quả. $P=1-\dfrac{21}{45}=\dfrac{8}{15}\approx0{,}53$.
:::
