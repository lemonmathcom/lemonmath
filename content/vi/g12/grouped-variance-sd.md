---
title: Phương sai và độ lệch chuẩn
description: Tính phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm bằng giá trị đại diện, lập bảng tính từng bước và so sánh độ phân tán của hai mẫu.
minutes: 22
---

:::goals
- Tính phương sai $s^2$ và độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm bằng hai công thức.
- Lập bảng tính với các cột $x_i$, $n_i$, $n_ix_i$, $n_ix_i^2$.
- So sánh độ phân tán của hai mẫu số liệu ghép nhóm bằng độ lệch chuẩn.
- Hiểu ảnh hưởng của độ rộng nhóm và của việc đổi đơn vị.
:::

Bạn cầm một túi gạo có ghi cân nặng trên bao bì. Túi nào cũng nặng đúng như ghi sao? Thường thì lệch một chút. Một nhà máy có hai máy đóng gạo vào túi loại $1$ kg. Người ta cân $50$ túi của mỗi máy và ghép nhóm khối lượng (gam):

| Khối lượng (g) | $[990; 994)$ | $[994; 998)$ | $[998; 1002)$ | $[1002; 1006)$ | $[1006; 1010)$ |
|---|---|---|---|---|---|
| Máy A | $2$ | $8$ | $30$ | $8$ | $2$ |
| Máy B | $6$ | $10$ | $18$ | $10$ | $6$ |

Hai bảng đều đối xứng quanh $1000$ g, nên hai máy có cùng khối lượng trung bình. Chỉ nhìn trung bình thì ta không phân biệt được hai máy. Nhưng máy nào đóng gói đều hơn, và đều hơn bao nhiêu? Đó là câu hỏi ta sẽ trả lời.

Bài trước ta dùng khoảng tứ phân vị, mà nó chỉ nhìn vào nửa giữa của số liệu. Lần này ta muốn một con số tính đến **mọi** giá trị, kể cả những túi lệch xa. Phương sai và độ lệch chuẩn làm được việc đó.

## Phương sai của mẫu số liệu ghép nhóm

### Khám phá: mỗi túi lệch bao nhiêu?

Ta không biết khối lượng thật của từng túi, vì bảng chỉ cho biết túi rơi vào nhóm nào. Vậy ta thay mỗi túi bằng **giá trị đại diện** của nhóm chứa nó, tức trung điểm của nhóm: $992$, $996$, $1000$, $1004$, $1008$. So với trung bình $1000$, các độ lệch là $-8$, $-4$, $0$, $4$, $8$.

Với máy A, có $2$ túi lệch $-8$, $8$ túi lệch $-4$, … Bình phương các độ lệch (để dấu không triệt tiêu nhau), nhân với tần số rồi lấy trung bình:
$$\frac{2\cdot64+8\cdot16+30\cdot0+8\cdot16+2\cdot64}{50}=\frac{512}{50}=10{,}24.$$
Con số này đo mức độ các túi lệch khỏi $1000$ g: càng lớn thì các túi càng nằm xa mức chuẩn. Nó chính là phương sai của mẫu ghép nhóm.

Giờ ta viết điều vừa làm thành công thức chung. Trong bài, mẫu ghép nhóm có $k$ nhóm với giá trị đại diện $x_1$, …, $x_k$, tần số $n_1$, …, $n_k$, cỡ mẫu $n$ và số trung bình $\bar{x}=\dfrac{n_1x_1+\cdots+n_kx_k}{n}$ (lớp 11).

:::definition Phương sai và độ lệch chuẩn
Phương sai của mẫu số liệu ghép nhóm là
$$s^2=\frac{1}{n}\left[n_1(x_1-\bar{x})^2+n_2(x_2-\bar{x})^2+\cdots+n_k(x_k-\bar{x})^2\right].$$
Độ lệch chuẩn là $s=\sqrt{s^2}$. Phương sai cũng tính được bằng công thức
$$s^2=\frac{1}{n}\left(n_1x_1^2+n_2x_2^2+\cdots+n_kx_k^2\right)-\bar{x}^2.$$
:::

**Vì sao hai công thức bằng nhau?** Khai triển $(x_i-\bar{x})^2=x_i^2-2\bar{x}x_i+\bar{x}^2$, nhân với $n_i$, cộng lại rồi chia cho $n$. Có hai tổng quen thuộc: $\dfrac{\sum n_ix_i}{n}=\bar{x}$ và $\dfrac{\sum n_i}{n}=1$. Thay vào, ta được $\dfrac{\sum n_ix_i^2}{n}-2\bar{x}^2+\bar{x}^2$, tức công thức thứ hai.

Độ lệch chuẩn có cùng đơn vị với số liệu (ở đây là gam), nên dễ hình dung hơn phương sai. Về cách chọn công thức: khi $\bar{x}$ là số tròn, dùng công thức thứ nhất cho tiện; khi $\bar{x}$ lẻ, công thức thứ hai đỡ vất vả hơn.

## Tính từng bước bằng bảng

Khi $\bar{x}$ không tròn, trừ từng giá trị cho $\bar{x}$ sẽ ra nhiều số lẻ và rất dễ nhầm. Lúc đó ta lập bảng với các cột $x_i$, $n_i$, $n_ix_i$, $n_ix_i^2$ rồi dùng công thức thứ hai. Ví dụ sau cho thấy cách làm.

:::example Thời gian ngủ của học sinh
Thời gian ngủ mỗi đêm (giờ) của $40$ học sinh được ghép nhóm như sau. Tính $\bar{x}$, $s^2$ và $s$.

| Thời gian (giờ) | $[4; 5)$ | $[5; 6)$ | $[6; 7)$ | $[7; 8)$ | $[8; 9)$ |
|---|---|---|---|---|---|
| Số học sinh | $2$ | $6$ | $14$ | $12$ | $6$ |

**Lời giải.** Giá trị đại diện là trung điểm mỗi nhóm. Ta lập bảng tính:

| Nhóm | $x_i$ | $n_i$ | $n_ix_i$ | $n_ix_i^2$ |
|---|---|---|---|---|
| $[4; 5)$ | $4{,}5$ | $2$ | $9$ | $40{,}5$ |
| $[5; 6)$ | $5{,}5$ | $6$ | $33$ | $181{,}5$ |
| $[6; 7)$ | $6{,}5$ | $14$ | $91$ | $591{,}5$ |
| $[7; 8)$ | $7{,}5$ | $12$ | $90$ | $675$ |
| $[8; 9)$ | $8{,}5$ | $6$ | $51$ | $433{,}5$ |
| Tổng | | $40$ | $274$ | $1922$ |

Chia hai tổng cuối cho $n=40$:

$$\bar{x}=\frac{274}{40}=6{,}85,\qquad s^2=\frac{1922}{40}-6{,}85^2=48{,}05-46{,}9225=1{,}1275,\qquad s\approx1{,}06.$$

Vậy trung bình mỗi bạn ngủ $6{,}85$ giờ, với độ lệch chuẩn khoảng $1{,}06$ giờ.
:::

Khi $\bar{x}$ tròn, công thức định nghĩa cho các số nhỏ và dễ tính nhẩm hơn. Ta quay lại hai máy đóng gạo: ví dụ sau hoàn thành phần Khám phá.

:::example Máy A theo công thức định nghĩa
Tính độ lệch chuẩn khối lượng túi gạo của máy A.

**Lời giải.** Trước hết kiểm tra trung bình, dùng tính đối xứng của tần số:

$$\bar{x}=\frac{2\cdot992+8\cdot996+30\cdot1000+8\cdot1004+2\cdot1008}{50}=\frac{50000}{50}=1000.$$

Các độ lệch $x_i-\bar{x}$ là $-8$, $-4$, $0$, $4$, $8$. Nhân bình phương của chúng với tần số:

$$s^2=\frac{2\cdot64+8\cdot16+30\cdot0+8\cdot16+2\cdot64}{50}=\frac{512}{50}=10{,}24,\qquad s=\sqrt{10{,}24}=3{,}2.$$

Vậy độ lệch chuẩn của máy A là $3{,}2$ g.
:::

## So sánh hai mẫu số liệu

Hai mẫu có trung bình gần nhau thì mẫu nào có độ lệch chuẩn nhỏ hơn sẽ đồng đều hơn. Giờ ta trở lại câu hỏi ở đầu bài.

:::example Máy nào đóng gói đều hơn?
Tính độ lệch chuẩn của máy B và so sánh với máy A.

**Lời giải.** Máy B cũng có $\bar{x}=1000$ (tần số đối xứng), và cùng các độ lệch $-8$, $-4$, $0$, $4$, $8$. Chỉ có tần số thay đổi:

$$s^2=\frac{6\cdot64+10\cdot16+18\cdot0+10\cdot16+6\cdot64}{50}=\frac{1088}{50}=21{,}76,\qquad s\approx4{,}66.$$

| | $\bar{x}$ (g) | $s^2$ | $s$ (g) |
|---|---|---|---|
| Máy A | $1000$ | $10{,}24$ | $3{,}2$ |
| Máy B | $1000$ | $21{,}76$ | $4{,}66$ |

Vậy hai máy có cùng khối lượng trung bình, nhưng độ lệch chuẩn của máy A nhỏ hơn ($3{,}2$ g so với khoảng $4{,}66$ g): máy A đóng gói đều hơn.
:::

## Ảnh hưởng của độ rộng nhóm

Độ lệch chuẩn của mẫu ghép nhóm dùng trung điểm thay cho giá trị thật, nên chỉ là **giá trị xấp xỉ** của độ lệch chuẩn của mẫu gốc. Nhóm càng hẹp thì trung điểm càng gần giá trị thật, và xấp xỉ càng tốt. Ví dụ sau cho thấy điều đó bằng số.

:::example Cùng số liệu, hai cách ghép nhóm
Thời gian đi học (phút) của $20$ học sinh (đã dùng ở bài trước):
$$5,\ 8,\ 12,\ 14,\ 15,\ 17,\ 18,\ 19,\ 21,\ 22,\ 23,\ 24,\ 25,\ 26,\ 28,\ 31,\ 33,\ 36,\ 41,\ 47.$$
Từ số liệu gốc, ta tính được $s\approx10{,}41$ phút. So sánh với $s$ của hai cách ghép nhóm: độ rộng $10$ (các nhóm $[0; 10)$, …, $[40; 50)$) và độ rộng $5$ (các nhóm $[5; 10)$, …, $[45; 50)$).

**Lời giải.** *Độ rộng $10$.* Tần số $2$, $6$, $7$, $3$, $2$ với trung điểm $5$, $15$, $25$, $35$, $45$:

$$\sum n_ix_i=470,\quad \sum n_ix_i^2=13500,\quad \bar{x}=23{,}5,\quad s^2=675-552{,}25=122{,}75,\quad s\approx11{,}08.$$

*Độ rộng $5$.* Đếm lại, các tần số là $2$, $2$, $4$, $4$, $3$, $2$, $1$, $1$, $1$ với trung điểm $7{,}5$; $12{,}5$; …; $47{,}5$:

$$\sum n_ix_i=475,\quad \sum n_ix_i^2=13525,\quad \bar{x}=23{,}75,\quad s^2=676{,}25-564{,}0625=112{,}1875,\quad s\approx10{,}59.$$

Vậy ghép nhóm độ rộng $10$ cho $s\approx11{,}08$, độ rộng $5$ cho $s\approx10{,}59$, gần giá trị thật $10{,}41$ hơn. Nhóm hẹp hơn cho xấp xỉ tốt hơn, nhưng bảng dài hơn.
:::

:::warning Những sai lầm thường gặp
- **Quên nhân với tần số.** Sai: với máy A, $s^2=\dfrac{64+16+0+16+64}{5}=32$. Vì sao sai: mỗi giá trị đại diện thay cho $n_i$ túi chứ không phải một túi. Đúng: $s^2=\dfrac{512}{50}=10{,}24$.
- **Dùng đầu mút nhóm thay cho trung điểm.** Sai: lấy $x_1=4$ cho nhóm $[4; 5)$. Đúng: $x_1=\dfrac{4+5}{2}=4{,}5$.
- **Trừ $\bar{x}$ thay cho $\bar{x}^2$.** Sai: $s^2=48{,}05-6{,}85=41{,}2$. Đúng: $s^2=48{,}05-6{,}85^2=1{,}1275$.
- **Làm tròn $\bar{x}$ quá sớm.** Sai: lấy $\bar{x}\approx6{,}9$ rồi tính $48{,}05-6{,}9^2=0{,}44$, sai gần một nửa. Đúng: giữ $\bar{x}=6{,}85$ chính xác, chỉ làm tròn ở kết quả cuối.
Làm xong, bạn nên liếc lại kết quả: phương sai không bao giờ âm.
:::

## Thuật ngữ

:::terms
- giá trị đại diện | class midpoint (representative value)
- phương sai | variance
- độ lệch chuẩn | standard deviation
- độ lệch | deviation
- số trung bình | mean
- độ rộng nhóm | class width
- độ phân tán | spread
- giá trị xấp xỉ | approximate value
:::

## Tóm tắt

- Thay mỗi nhóm bằng giá trị đại diện $x_i$ (trung điểm) với tần số $n_i$.
- $s^2=\dfrac1n\sum n_i(x_i-\bar{x})^2=\dfrac1n\sum n_ix_i^2-\bar{x}^2$; $s=\sqrt{s^2}$, cùng đơn vị với số liệu.
- Lập bảng $x_i$, $n_i$, $n_ix_i$, $n_ix_i^2$; chỉ làm tròn ở kết quả cuối.
- Hai mẫu có trung bình gần nhau: $s$ nhỏ hơn thì đồng đều hơn.
- $s$ của mẫu ghép nhóm là giá trị xấp xỉ; nhóm hẹp hơn thường cho xấp xỉ tốt hơn.
Quay lại câu hỏi đầu bài: máy nào có độ lệch chuẩn nhỏ hơn thì đóng gói đều hơn. Chỉ cần nhớ rằng độ lệch chuẩn đo mức các giá trị tản ra quanh trung bình. Giờ bạn thử sức ở phần luyện tập nhé.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải. Làm sai một lần cũng không sao, vì chính chỗ sai cho ta biết cần xem lại điều gì.

:::exercise
Thời gian dùng điện thoại mỗi ngày (giờ) của $20$ học sinh được cho trong bảng. Tính $s^2$ và $s$ bằng công thức định nghĩa.

| Thời gian (giờ) | $[0; 4)$ | $[4; 8)$ | $[8; 12)$ | $[12; 16)$ |
|---|---|---|---|---|
| Số học sinh | $3$ | $7$ | $7$ | $3$ |

::hint
**Kiến thức:** $s^2=\dfrac1n\sum n_i(x_i-\bar{x})^2$ với $x_i$ là trung điểm.

**Gợi ý các bước:**
1. Trung điểm $2$, $6$, $10$, $14$; tính $\bar{x}$.
2. Tính các độ lệch, bình phương, nhân với tần số.

::solution
Giá trị đại diện của các nhóm lần lượt là $2$, $6$, $10$, $14$ (giờ) với tần số $3$, $7$, $7$, $3$. Cỡ mẫu là $n=3+7+7+3=20$.

Số trung bình của mẫu số liệu là
$$\bar{x}=\frac{3\cdot2+7\cdot6+7\cdot10+3\cdot14}{20}=\frac{6+42+70+42}{20}=\frac{160}{20}=8.$$

Áp dụng công thức định nghĩa $s^2=\dfrac1n\sum n_i(x_i-\bar{x})^2$. Các độ lệch $x_i-\bar{x}$ lần lượt là $-6$, $-2$, $2$, $6$, nên
$$s^2=\frac{3\cdot(-6)^2+7\cdot(-2)^2+7\cdot2^2+3\cdot6^2}{20}=\frac{3\cdot36+7\cdot4+7\cdot4+3\cdot36}{20}=\frac{272}{20}=13{,}6.$$

Độ lệch chuẩn là $s=\sqrt{s^2}=\sqrt{13{,}6}\approx3{,}69$.

Vậy phương sai là $s^2=13{,}6$ và độ lệch chuẩn là $s\approx3{,}69$ giờ.

**Đáp số.** $s^2=13{,}6$; $s\approx3{,}69$ giờ.
:::

:::exercise
Điểm kiểm tra của $40$ học sinh được ghép nhóm như sau. Lập bảng tính và tìm $\bar{x}$, $s^2$, $s$.

| Điểm | $[4; 5)$ | $[5; 6)$ | $[6; 7)$ | $[7; 8)$ | $[8; 9)$ | $[9; 10)$ |
|---|---|---|---|---|---|---|
| Số học sinh | $2$ | $5$ | $9$ | $14$ | $7$ | $3$ |

::hint
**Kiến thức:** $s^2=\dfrac1n\sum n_ix_i^2-\bar{x}^2$.

**Gợi ý các bước:**
1. Trung điểm $4{,}5$; $5{,}5$; …; $9{,}5$.
2. Tính $\sum n_ix_i$ và $\sum n_ix_i^2$.

::solution
Lập bảng tính với giá trị đại diện $x_i$ là trung điểm của mỗi nhóm:

| Nhóm | $x_i$ | $n_i$ | $n_ix_i$ | $n_ix_i^2$ |
|---|---|---|---|---|
| $[4; 5)$ | $4{,}5$ | $2$ | $9$ | $40{,}5$ |
| $[5; 6)$ | $5{,}5$ | $5$ | $27{,}5$ | $151{,}25$ |
| $[6; 7)$ | $6{,}5$ | $9$ | $58{,}5$ | $380{,}25$ |
| $[7; 8)$ | $7{,}5$ | $14$ | $105$ | $787{,}5$ |
| $[8; 9)$ | $8{,}5$ | $7$ | $59{,}5$ | $505{,}75$ |
| $[9; 10)$ | $9{,}5$ | $3$ | $28{,}5$ | $270{,}75$ |
| Tổng | | $40$ | $288$ | $2136$ |

Từ bảng, $n=40$, $\sum n_ix_i=288$ và $\sum n_ix_i^2=2136$.

Số trung bình là
$$\bar{x}=\frac{288}{40}=7{,}2.$$

Áp dụng công thức $s^2=\dfrac1n\sum n_ix_i^2-\bar{x}^2$, ta được
$$s^2=\frac{2136}{40}-7{,}2^2=53{,}4-51{,}84=1{,}56.$$

Độ lệch chuẩn là $s=\sqrt{1{,}56}\approx1{,}25$.

Vậy $\bar{x}=7{,}2$; $s^2=1{,}56$; $s\approx1{,}25$.

**Đáp số.** $\bar{x}=7{,}2$; $s^2=1{,}56$; $s\approx1{,}25$.
:::

:::exercise
Hai đơn vị giao hàng P và Q ghi lại thời gian giao (phút) của $40$ đơn hàng mỗi bên.

| Thời gian (phút) | $[20; 25)$ | $[25; 30)$ | $[30; 35)$ | $[35; 40)$ | $[40; 45)$ |
|---|---|---|---|---|---|
| Đơn vị P | $2$ | $10$ | $16$ | $10$ | $2$ |
| Đơn vị Q | $8$ | $8$ | $8$ | $8$ | $8$ |

Tính thời gian trung bình và độ lệch chuẩn của mỗi đơn vị. Đơn vị nào giao hàng đúng hẹn ổn định hơn?

::hint
**Kiến thức:** cùng trung bình thì $s$ nhỏ hơn nghĩa là ổn định hơn.

**Gợi ý các bước:**
1. Trung điểm $22{,}5$; $27{,}5$; …; $42{,}5$. Cả hai bảng đối xứng quanh $32{,}5$.
2. Các độ lệch là $-10$, $-5$, $0$, $5$, $10$.

::solution
Giá trị đại diện của các nhóm là $22{,}5$; $27{,}5$; $32{,}5$; $37{,}5$; $42{,}5$ (phút). Mỗi đơn vị có $n=40$ đơn hàng.

Đơn vị P: số trung bình là
$$\bar{x}_P=\frac{2\cdot22{,}5+10\cdot27{,}5+16\cdot32{,}5+10\cdot37{,}5+2\cdot42{,}5}{40}=\frac{1300}{40}=32{,}5.$$

Đơn vị Q: số trung bình là
$$\bar{x}_Q=\frac{8\cdot(22{,}5+27{,}5+32{,}5+37{,}5+42{,}5)}{40}=\frac{8\cdot162{,}5}{40}=32{,}5.$$

Vậy cả hai đơn vị có thời gian giao trung bình bằng nhau, $\bar{x}=32{,}5$ phút. Các độ lệch $x_i-\bar{x}$ là $-10$, $-5$, $0$, $5$, $10$.

Phương sai và độ lệch chuẩn của đơn vị P:
$$s_P^2=\frac{2\cdot100+10\cdot25+16\cdot0+10\cdot25+2\cdot100}{40}=\frac{900}{40}=22{,}5,\qquad s_P=\sqrt{22{,}5}\approx4{,}74.$$

Phương sai và độ lệch chuẩn của đơn vị Q:
$$s_Q^2=\frac{8\cdot(100+25+0+25+100)}{40}=\frac{2000}{40}=50,\qquad s_Q=\sqrt{50}\approx7{,}07.$$

Vì $s_P<s_Q$ nên thời gian giao hàng của đơn vị P ít phân tán quanh giá trị trung bình hơn.

Vậy thời gian giao trung bình của mỗi đơn vị là $32{,}5$ phút; độ lệch chuẩn của P là khoảng $4{,}74$ phút và của Q là khoảng $7{,}07$ phút. Đơn vị P giao hàng đúng hẹn ổn định hơn.

**Đáp số.** Trung bình $32{,}5$ phút; $s\approx4{,}74$ (P) và $s\approx7{,}07$ (Q). Đơn vị P ổn định hơn.
:::

:::exercise
Cho mẫu số liệu ghép nhóm sau.

| Nhóm | $[0; 10)$ | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ |
|---|---|---|---|---|
| Tần số | $1$ | $4$ | $4$ | $1$ |

Mỗi khẳng định sau đúng hay sai?

a) Số trung bình bằng $20$.

b) Phương sai bằng $65$.

c) Độ lệch chuẩn lớn hơn $9$.

d) Nếu mọi giá trị tăng thêm $5$ (các nhóm thành $[5; 15)$, …, $[35; 45)$) thì phương sai bằng $70$.

::hint
**Kiến thức:** công thức phương sai; cộng cùng một số vào mọi giá trị thì các độ lệch không đổi.

**Gợi ý các bước:**
1. Trung điểm $5$, $15$, $25$, $35$; tính $\bar{x}$.
2. Các độ lệch $-15$, $-5$, $5$, $15$.

::solution
Giá trị đại diện của các nhóm là $5$, $15$, $25$, $35$ với tần số $1$, $4$, $4$, $1$. Cỡ mẫu là $n=1+4+4+1=10$.

a) **Đúng.** Số trung bình là
$$\bar{x}=\frac{1\cdot5+4\cdot15+4\cdot25+1\cdot35}{10}=\frac{5+60+100+35}{10}=\frac{200}{10}=20.$$

b) **Đúng.** Các độ lệch $x_i-\bar{x}$ là $-15$, $-5$, $5$, $15$, nên
$$s^2=\frac{1\cdot15^2+4\cdot5^2+4\cdot5^2+1\cdot15^2}{10}=\frac{225+100+100+225}{10}=\frac{650}{10}=65.$$

c) **Sai.** Ta có $s=\sqrt{65}\approx8{,}06$. Vì $9^2=81>65$ nên $s<9$.

d) **Sai.** Khi mọi giá trị tăng thêm $5$, các giá trị đại diện thành $10$, $20$, $30$, $40$ và số trung bình thành $25$. Các độ lệch vẫn là $-15$, $-5$, $5$, $15$ nên phương sai vẫn bằng $65$, không phải $70$.

Vậy các mệnh đề a), b) đúng; các mệnh đề c), d) sai.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Sai.
:::

:::exercise
Chiều cao (cm) của $50$ học sinh được cho trong bảng. Tính độ lệch chuẩn (đơn vị: cm, làm tròn đến hàng phần trăm).

| Chiều cao (cm) | $[150; 155)$ | $[155; 160)$ | $[160; 165)$ | $[165; 170)$ | $[170; 175)$ |
|---|---|---|---|---|---|
| Số học sinh | $5$ | $12$ | $18$ | $10$ | $5$ |

::hint
**Kiến thức:** $s^2=\dfrac1n\sum n_ix_i^2-\bar{x}^2$; không làm tròn $\bar{x}$ giữa chừng.

**Gợi ý các bước:**
1. Trung điểm $152{,}5$; $157{,}5$; …; $172{,}5$.
2. Tính $\bar{x}$ rồi $s^2$, cuối cùng mới khai căn và làm tròn.

::solution
Giá trị đại diện của các nhóm là $152{,}5$; $157{,}5$; $162{,}5$; $167{,}5$; $172{,}5$ (cm) với tần số $5$, $12$, $18$, $10$, $5$. Cỡ mẫu là $n=5+12+18+10+5=50$.

Ta tính tổng
$$\sum n_ix_i=5\cdot152{,}5+12\cdot157{,}5+18\cdot162{,}5+10\cdot167{,}5+5\cdot172{,}5=8115,$$
nên số trung bình là $\bar{x}=\dfrac{8115}{50}=162{,}3$.

Ta tính tiếp
$$\sum n_ix_i^2=116281{,}25+297675+475312{,}5+280562{,}5+148781{,}25=1318612{,}5.$$

Áp dụng công thức $s^2=\dfrac1n\sum n_ix_i^2-\bar{x}^2$, ta được
$$s^2=\frac{1318612{,}5}{50}-162{,}3^2=26372{,}25-26341{,}29=30{,}96.$$

Do đó $s=\sqrt{30{,}96}\approx5{,}564$, làm tròn đến hàng phần trăm được $5{,}56$.

Vậy độ lệch chuẩn của chiều cao là khoảng $5{,}56$ cm.

**Đáp số.** $5{,}56$.
:::

:::exercise
(Ôn lại số trung bình của mẫu số liệu ghép nhóm, lớp 11.) Thời gian (phút) hoàn thành một bài tập của $20$ học sinh được cho trong bảng. Tính $\bar{x}$, rồi tính $s$.

| Thời gian (phút) | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ | $[40; 50)$ |
|---|---|---|---|---|
| Số học sinh | $3$ | $9$ | $6$ | $2$ |

::hint
**Kiến thức:** $\bar{x}=\dfrac{\sum n_ix_i}{n}$ với $x_i$ là trung điểm; $s^2=\dfrac{\sum n_ix_i^2}{n}-\bar{x}^2$.

**Gợi ý các bước:**
1. Trung điểm $15$, $25$, $35$, $45$.
2. Tính $\sum n_ix_i$ và $\sum n_ix_i^2$.

::solution
Giá trị đại diện của các nhóm là $15$, $25$, $35$, $45$ (phút) với tần số $3$, $9$, $6$, $2$. Cỡ mẫu là $n=3+9+6+2=20$.

Số trung bình của mẫu số liệu ghép nhóm là
$$\bar{x}=\frac{3\cdot15+9\cdot25+6\cdot35+2\cdot45}{20}=\frac{45+225+210+90}{20}=\frac{570}{20}=28{,}5.$$

Để tính phương sai, ta tính trung bình của bình phương các giá trị đại diện:
$$\frac{3\cdot15^2+9\cdot25^2+6\cdot35^2+2\cdot45^2}{20}=\frac{675+5625+7350+4050}{20}=\frac{17700}{20}=885.$$

Áp dụng công thức $s^2=\dfrac1n\sum n_ix_i^2-\bar{x}^2$, ta được
$$s^2=885-28{,}5^2=885-812{,}25=72{,}75.$$

Độ lệch chuẩn là $s=\sqrt{72{,}75}\approx8{,}53$.

Vậy $\bar{x}=28{,}5$ phút và $s\approx8{,}53$ phút.

**Đáp số.** $\bar{x}=28{,}5$ phút; $s\approx8{,}53$ phút.
:::

:::exercise
(Ôn lại [Khoảng biến thiên và khoảng tứ phân vị](lesson:grouped-range-iqr).) Với hai đơn vị giao hàng ở Bài 3, tính khoảng tứ phân vị của mỗi đơn vị. Kết luận có giống khi dùng độ lệch chuẩn không?

::hint
**Kiến thức:** $Q_1=u_m+\dfrac{\frac n4-C}{n_m}(u_{m+1}-u_m)$, tương tự cho $Q_3$; vị trí $10$ và $30$.

**Gợi ý các bước:**
1. Tần số tích luỹ của P: $2$, $12$, $28$, $38$, $40$; của Q: $8$, $16$, $24$, $32$, $40$.
2. Tính $Q_1$, $Q_3$ cho từng đơn vị.

::solution
Áp dụng công thức tứ phân vị của mẫu số liệu ghép nhóm: nếu nhóm $[u_m; u_{m+1})$ là nhóm đầu tiên có tần số tích luỹ không nhỏ hơn $\dfrac{kn}{4}$ thì
$$Q_k=u_m+\frac{\frac{kn}{4}-C}{n_m}\cdot(u_{m+1}-u_m),$$
trong đó $C$ là tần số tích luỹ của các nhóm đứng trước, $n_m$ là tần số của nhóm đó. Ở đây $n=40$ nên $\dfrac n4=10$ và $\dfrac{3n}{4}=30$.

Đơn vị P: tần số tích luỹ là $2$, $12$, $28$, $38$, $40$.

Nhóm chứa $Q_1$ là $[25; 30)$ (có $C=2$, $n_m=10$), nên
$$Q_1=25+\frac{10-2}{10}\cdot5=29.$$

Nhóm chứa $Q_3$ là $[35; 40)$ (có $C=28$, $n_m=10$), nên
$$Q_3=35+\frac{30-28}{10}\cdot5=36.$$

Do đó khoảng tứ phân vị của P là $\Delta_Q=36-29=7$.

Đơn vị Q: tần số tích luỹ là $8$, $16$, $24$, $32$, $40$.

Nhóm chứa $Q_1$ là $[25; 30)$ (có $C=8$, $n_m=8$), nên
$$Q_1=25+\frac{10-8}{8}\cdot5=26{,}25.$$

Nhóm chứa $Q_3$ là $[35; 40)$ (có $C=24$, $n_m=8$), nên
$$Q_3=35+\frac{30-24}{8}\cdot5=38{,}75.$$

Do đó khoảng tứ phân vị của Q là $\Delta_Q=38{,}75-26{,}25=12{,}5$.

Vì $7<12{,}5$ nên thời gian giao hàng của P tập trung hơn, giống kết luận khi dùng độ lệch chuẩn ($s_P<s_Q$).

Vậy khoảng tứ phân vị của P là $7$ và của Q là $12{,}5$; kết luận giống khi dùng độ lệch chuẩn: đơn vị P ổn định hơn.

**Đáp số.** $\Delta_Q=7$ (P) và $12{,}5$ (Q); giống kết luận từ độ lệch chuẩn: P ổn định hơn.
:::

:::exercise Thử thách
Một mẫu số liệu ghép nhóm có bảng tần số sau, với $x$ là số nguyên dương. Biết số trung bình bằng $4{,}2$. Tìm $x$, rồi tính phương sai (làm tròn đến hàng phần trăm).

| Nhóm | $[0; 2)$ | $[2; 4)$ | $[4; 6)$ | $[6; 8)$ |
|---|---|---|---|---|
| Tần số | $2$ | $x$ | $5$ | $3$ |

::hint
**Kiến thức:** $\bar{x}=\dfrac{\sum n_ix_i}{n}$ với $n=10+x$.

**Gợi ý các bước:**
1. Trung điểm $1$, $3$, $5$, $7$; lập phương trình $\dfrac{48+3x}{10+x}=4{,}2$.
2. Với $x$ vừa tìm, tính $\sum n_ix_i^2$ và $s^2$.

::solution
Giá trị đại diện của các nhóm là $1$, $3$, $5$, $7$ với tần số $2$, $x$, $5$, $3$. Cỡ mẫu là $n=2+x+5+3=10+x$.

Tổng các giá trị là $\sum n_ix_i=2\cdot1+x\cdot3+5\cdot5+3\cdot7=48+3x$. Vì số trung bình bằng $4{,}2$ nên
$$\frac{2+3x+25+21}{10+x}=4{,}2\iff48+3x=42+4{,}2x\iff1{,}2x=6\iff x=5.$$

Giá trị $x=5$ là số nguyên dương nên thoả mãn. Kiểm tra: $\bar{x}=\dfrac{48+15}{15}=4{,}2$.

Khi đó $n=15$ và
$$\sum n_ix_i^2=2\cdot1^2+5\cdot3^2+5\cdot5^2+3\cdot7^2=2+45+125+147=319.$$

Áp dụng công thức $s^2=\dfrac1n\sum n_ix_i^2-\bar{x}^2$, ta được
$$s^2=\frac{319}{15}-4{,}2^2=\frac{319}{15}-17{,}64=\frac{272}{75}\approx3{,}63.$$

Vậy $x=5$ và phương sai của mẫu số liệu là $s^2\approx3{,}63$.

**Đáp số.** $x=5$; $s^2\approx3{,}63$.
:::

:::exercise Thử thách
Ở Ví dụ 1, thời gian ngủ có $s^2=1{,}1275$ (đơn vị: giờ²). Nếu đổi toàn bộ số liệu sang phút (nhân mọi giá trị và đầu mút nhóm với $60$), thì phương sai và độ lệch chuẩn mới bằng bao nhiêu?

::hint
**Kiến thức:** nhân mọi giá trị với $k$ thì $\bar{x}$ và mọi độ lệch đều nhân với $k$.

**Gợi ý các bước:**
1. Mỗi độ lệch $x_i-\bar{x}$ nhân với $60$, nên bình phương nhân với $3600$.
2. Suy ra $s^2$ mới, rồi $s$ mới.

::solution
Gọi $k=60$ là hệ số đổi từ giờ sang phút. Khi nhân mọi giá trị với $k$ thì số trung bình cũng nhân với $k$, nên mỗi độ lệch $x_i-\bar{x}$ nhân với $k$.

Do đó phương sai (là trung bình của bình phương các độ lệch) nhân với $k^2$, còn độ lệch chuẩn nhân với $k$.

Với $s^2=1{,}1275$ (giờ²) ta có
$$s^2_{\text{mới}}=60^2\cdot1{,}1275=3600\cdot1{,}1275=4059.$$

Độ lệch chuẩn mới là
$$s_{\text{mới}}=60\cdot\sqrt{1{,}1275}\approx63{,}71.$$

Kiểm tra: $\sqrt{4059}\approx63{,}71$.

Vậy phương sai mới bằng $4059$ (phút²) và độ lệch chuẩn mới bằng khoảng $63{,}71$ phút.

**Đáp số.** $s^2=4059$ (phút²); $s\approx63{,}71$ phút.
:::

## Kiểm tra mini

:::quiz
::mc NB
Trong mẫu số liệu ghép nhóm, giá trị đại diện của nhóm $[20; 30)$ là
A. $20$.
B. $25$.
C. $30$.
D. $10$.
::key B
Giá trị đại diện là trung điểm của nhóm: $\dfrac{20+30}{2}=25$. Phương án A và C là hai đầu mút, phương án D là độ rộng nhóm.

::mc NB
Một mẫu số liệu ghép nhóm có phương sai $s^2=2{,}25$. Độ lệch chuẩn của mẫu số liệu là
A. $1{,}125$.
B. $5{,}0625$.
C. $2{,}25$.
D. $1{,}5$.
::key D
$s=\sqrt{s^2}=\sqrt{2{,}25}=1{,}5$. Phương án B bình phương thay vì khai căn, phương án A chia đôi thay vì khai căn.

::mc VD
Cho mẫu số liệu ghép nhóm sau. Phương sai của mẫu số liệu là

| Nhóm | $[0; 2)$ | $[2; 4)$ | $[4; 6)$ | $[6; 8)$ |
|---|---|---|---|---|
| Tần số | $2$ | $3$ | $3$ | $2$ |

A. $4{,}2$.
B. $5$.
C. $2{,}05$.
D. $0$.
::key A
Giá trị đại diện $1$, $3$, $5$, $7$ và $\bar{x}=4$; độ lệch $-3$, $-1$, $1$, $3$. $s^2=\dfrac{2\cdot9+3\cdot1+3\cdot1+2\cdot9}{10}=4{,}2$. Phương án B quên nhân với tần số, phương án C là độ lệch chuẩn, phương án D cộng các độ lệch mà không bình phương.

::mc TH
Hai mẫu số liệu ghép nhóm $A$ và $B$ có cùng số trung bình, với độ lệch chuẩn $s_A=2{,}1$ và $s_B=3{,}4$. Khẳng định nào sau đây đúng?
A. Mẫu $A$ chắc chắn có khoảng biến thiên nhỏ hơn mẫu $B$.
B. Số liệu của mẫu $B$ đồng đều hơn số liệu của mẫu $A$.
C. Số liệu của mẫu $A$ đồng đều hơn số liệu của mẫu $B$.
D. Hai mẫu có độ phân tán như nhau.
::key C
Cùng số trung bình, độ lệch chuẩn nhỏ hơn nghĩa là số liệu ít phân tán hơn. Độ lệch chuẩn không cho biết chắc chắn về khoảng biến thiên, nên A sai.

::tf NB TH VD TH
Quãng đường chạy mỗi tuần (km) của $20$ người được cho trong bảng sau.

| Quãng đường (km) | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ | $[40; 50)$ |
|---|---|---|---|---|
| Số người | $4$ | $6$ | $8$ | $2$ |

a) Giá trị đại diện của nhóm $[30; 40)$ là $35$.
b) Số trung bình của mẫu số liệu là $29$ km.
c) Phương sai của mẫu số liệu là $84$.
d) Nếu đổi mọi số liệu sang đơn vị khác bằng cách nhân với $2$ thì phương sai mới bằng $168$.
::key Đ Đ Đ S
a) Đúng: $\dfrac{30+40}{2}=35$. b) Đúng: $\bar{x}=\dfrac{60+150+280+90}{20}=29$. c) Đúng: $\dfrac{\sum n_ix_i^2}{n}=\dfrac{18500}{20}=925$, $s^2=925-29^2=84$. d) Sai: mọi độ lệch nhân với $2$ nên phương sai nhân với $4$, bằng $336$.

::sa VD
Thời gian tự học mỗi tuần (giờ) của $30$ học sinh được cho trong bảng sau. Tính độ lệch chuẩn của mẫu số liệu (làm tròn kết quả đến hàng phần trăm).

| Thời gian (giờ) | $[0; 3)$ | $[3; 6)$ | $[6; 9)$ | $[9; 12)$ |
|---|---|---|---|---|
| Số học sinh | $4$ | $10$ | $12$ | $4$ |

::key 2,65
Giá trị đại diện $1{,}5$; $4{,}5$; $7{,}5$; $10{,}5$. $\bar{x}=\dfrac{183}{30}=6{,}1$, $\dfrac{\sum n_ix_i^2}{n}=\dfrac{1327{,}5}{30}=44{,}25$, nên $s^2=44{,}25-6{,}1^2=7{,}04$ và $s\approx2{,}653$, làm tròn được $2{,}65$.

::sa VD
Chiều dài (mm) của $40$ chi tiết máy được cho trong bảng sau. Tính phương sai của mẫu số liệu (làm tròn kết quả đến hàng phần trăm).

| Chiều dài (mm) | $[48; 49)$ | $[49; 50)$ | $[50; 51)$ | $[51; 52)$ |
|---|---|---|---|---|
| Số chi tiết | $4$ | $16$ | $16$ | $4$ |

::key 0,65
Bảng đối xứng nên $\bar{x}=50$; độ lệch $-1{,}5$; $-0{,}5$; $0{,}5$; $1{,}5$. $s^2=\dfrac{2\left(4\cdot2{,}25+16\cdot0{,}25\right)}{40}=\dfrac{26}{40}=0{,}65$.
:::
