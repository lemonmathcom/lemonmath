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

Một nhà máy có hai máy đóng gạo vào túi loại $1$ kg. Người ta cân $50$ túi của mỗi máy và ghép nhóm khối lượng (gam):

| Khối lượng (g) | $[990; 994)$ | $[994; 998)$ | $[998; 1002)$ | $[1002; 1006)$ | $[1006; 1010)$ |
|---|---|---|---|---|---|
| Máy A | $2$ | $8$ | $30$ | $8$ | $2$ |
| Máy B | $6$ | $10$ | $18$ | $10$ | $6$ |

Hai bảng đều đối xứng quanh $1000$ g, nên hai máy có cùng khối lượng trung bình. Máy nào đóng gói đều hơn, và đều hơn bao nhiêu?

Bài trước dùng khoảng tứ phân vị, chỉ nhìn vào nửa giữa của số liệu. Bài này dùng **mọi** giá trị, qua phương sai và độ lệch chuẩn.

## Phương sai của mẫu số liệu ghép nhóm

### Khám phá: mỗi túi lệch bao nhiêu?

Ta không biết khối lượng thật của từng túi, nên thay mỗi túi bằng **giá trị đại diện** của nhóm chứa nó, tức trung điểm của nhóm: $992$, $996$, $1000$, $1004$, $1008$. So với trung bình $1000$, các độ lệch là $-8$, $-4$, $0$, $4$, $8$.

Với máy A, có $2$ túi lệch $-8$, $8$ túi lệch $-4$, … Bình phương các độ lệch (để dấu không triệt tiêu nhau), nhân với tần số rồi lấy trung bình:
$$\frac{2\cdot64+8\cdot16+30\cdot0+8\cdot16+2\cdot64}{50}=\frac{512}{50}=10{,}24.$$
Con số này đo mức độ các túi lệch khỏi $1000$ g. Nó chính là phương sai của mẫu ghép nhóm.

Trong bài, mẫu ghép nhóm có $k$ nhóm với giá trị đại diện $x_1$, …, $x_k$, tần số $n_1$, …, $n_k$, cỡ mẫu $n$ và số trung bình $\bar{x}=\dfrac{n_1x_1+\cdots+n_kx_k}{n}$ (lớp 11).

:::definition Phương sai và độ lệch chuẩn
Phương sai của mẫu số liệu ghép nhóm là
$$s^2=\frac{1}{n}\left[n_1(x_1-\bar{x})^2+n_2(x_2-\bar{x})^2+\cdots+n_k(x_k-\bar{x})^2\right].$$
Độ lệch chuẩn là $s=\sqrt{s^2}$. Phương sai cũng tính được bằng công thức
$$s^2=\frac{1}{n}\left(n_1x_1^2+n_2x_2^2+\cdots+n_kx_k^2\right)-\bar{x}^2.$$
:::

**Vì sao hai công thức bằng nhau?** Khai triển $(x_i-\bar{x})^2=x_i^2-2\bar{x}x_i+\bar{x}^2$, nhân với $n_i$, cộng lại rồi chia cho $n$. Vì $\dfrac{\sum n_ix_i}{n}=\bar{x}$ và $\dfrac{\sum n_i}{n}=1$, ta được $\dfrac{\sum n_ix_i^2}{n}-2\bar{x}^2+\bar{x}^2$, tức công thức thứ hai.

Độ lệch chuẩn có cùng đơn vị với số liệu (ở đây là gam), nên dễ diễn giải hơn phương sai. Công thức thứ nhất thuận tiện khi $\bar{x}$ là số tròn; công thức thứ hai thuận tiện khi $\bar{x}$ lẻ.

## Tính từng bước bằng bảng

Khi $\bar{x}$ không tròn, ta lập bảng với các cột $x_i$, $n_i$, $n_ix_i$, $n_ix_i^2$ rồi dùng công thức thứ hai.

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

Khi $\bar{x}$ tròn, công thức định nghĩa cho các số nhỏ và dễ tính nhẩm hơn. Ví dụ sau hoàn thành phần Khám phá.

:::example Máy A theo công thức định nghĩa
Tính độ lệch chuẩn khối lượng túi gạo của máy A.

**Lời giải.** Trước hết kiểm tra trung bình, dùng tính đối xứng của tần số:

$$\bar{x}=\frac{2\cdot992+8\cdot996+30\cdot1000+8\cdot1004+2\cdot1008}{50}=\frac{50000}{50}=1000.$$

Các độ lệch $x_i-\bar{x}$ là $-8$, $-4$, $0$, $4$, $8$. Nhân bình phương của chúng với tần số:

$$s^2=\frac{2\cdot64+8\cdot16+30\cdot0+8\cdot16+2\cdot64}{50}=\frac{512}{50}=10{,}24,\qquad s=\sqrt{10{,}24}=3{,}2.$$

Vậy độ lệch chuẩn của máy A là $3{,}2$ g.
:::

## So sánh hai mẫu số liệu

Hai mẫu có trung bình gần nhau thì mẫu nào có độ lệch chuẩn nhỏ hơn sẽ đồng đều hơn. Bây giờ ta trả lời câu hỏi ở đầu bài.

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

Độ lệch chuẩn của mẫu ghép nhóm dùng trung điểm thay cho giá trị thật, nên chỉ là **giá trị xấp xỉ** của độ lệch chuẩn của mẫu gốc. Nhóm càng hẹp thì trung điểm càng gần giá trị thật.

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

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

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
$\bar{x}=\dfrac{6+42+70+42}{20}=8$; các độ lệch $-6$, $-2$, $2$, $6$.
$$s^2=\frac{3\cdot36+7\cdot4+7\cdot4+3\cdot36}{20}=\frac{272}{20}=13{,}6,\qquad s\approx3{,}69.$$

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
$\sum n_ix_i=9+27{,}5+58{,}5+105+59{,}5+28{,}5=288$ và $\sum n_ix_i^2=2136$.
$$\bar{x}=\frac{288}{40}=7{,}2,\qquad s^2=\frac{2136}{40}-7{,}2^2=53{,}4-51{,}84=1{,}56,\qquad s\approx1{,}25.$$

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
Cả hai có $\bar{x}=32{,}5$ phút.
$$\text{P: } s^2=\frac{2\cdot100+10\cdot25+0+10\cdot25+2\cdot100}{40}=\frac{900}{40}=22{,}5,\ s\approx4{,}74;$$
$$\text{Q: } s^2=\frac{8\cdot(100+25+0+25+100)}{40}=\frac{2000}{40}=50,\ s\approx7{,}07.$$

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
a) **Đúng.** $\bar{x}=\dfrac{5+60+100+35}{10}=20$.

b) **Đúng.** $s^2=\dfrac{1\cdot225+4\cdot25+4\cdot25+1\cdot225}{10}=\dfrac{650}{10}=65$.

c) **Sai.** $s=\sqrt{65}\approx8{,}06<9$.

d) **Sai.** Trung điểm và $\bar{x}$ cùng tăng $5$, các độ lệch giữ nguyên, nên phương sai vẫn bằng $65$.

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
$\sum n_ix_i=8115$, nên $\bar{x}=162{,}3$; $\sum n_ix_i^2=1318612{,}5$.
$$s^2=\frac{1318612{,}5}{50}-162{,}3^2=26372{,}25-26341{,}29=30{,}96,\qquad s\approx5{,}564.$$

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
$$\bar{x}=\frac{45+225+210+90}{20}=\frac{570}{20}=28{,}5,\qquad \frac{675+5625+7350+4050}{20}=\frac{17700}{20}=885.$$
$$s^2=885-28{,}5^2=885-812{,}25=72{,}75,\qquad s\approx8{,}53.$$

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
P: $Q_1=25+\dfrac{10-2}{10}\cdot5=29$, $Q_3=35+\dfrac{30-28}{10}\cdot5=36$, $\Delta_Q=7$.

Q: $Q_1=25+\dfrac{10-8}{8}\cdot5=26{,}25$, $Q_3=35+\dfrac{30-24}{8}\cdot5=38{,}75$, $\Delta_Q=12{,}5$.

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
$$\frac{2+3x+25+21}{10+x}=4{,}2\iff 48+3x=42+4{,}2x\iff 1{,}2x=6\iff x=5.$$
Khi đó $n=15$ và $\sum n_ix_i^2=2+45+125+147=319$:
$$s^2=\frac{319}{15}-4{,}2^2=\frac{319}{15}-17{,}64=\frac{272}{75}\approx3{,}63.$$

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
$$s^2_{\text{mới}}=3600\cdot1{,}1275=4059,\qquad s_{\text{mới}}=60\cdot\sqrt{1{,}1275}\approx63{,}71.$$
(Kiểm tra: $\sqrt{4059}\approx63{,}71$.)

**Đáp số.** $s^2=4059$ (phút²); $s\approx63{,}71$ phút.
:::

## Kiểm tra mini

:::quiz
::mc
Trong mẫu số liệu ghép nhóm, giá trị đại diện của nhóm $[20; 30)$ là
A. $20$.
B. $25$.
C. $30$.
D. $10$.
::key B
Giá trị đại diện là trung điểm của nhóm: $\dfrac{20+30}{2}=25$. Phương án A và C là hai đầu mút, phương án D là độ rộng nhóm.

::mc
Một mẫu số liệu ghép nhóm có phương sai $s^2=2{,}25$. Độ lệch chuẩn của mẫu số liệu là
A. $1{,}125$.
B. $5{,}0625$.
C. $2{,}25$.
D. $1{,}5$.
::key D
$s=\sqrt{s^2}=\sqrt{2{,}25}=1{,}5$. Phương án B bình phương thay vì khai căn, phương án A chia đôi thay vì khai căn.

::mc
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

::mc
Hai mẫu số liệu ghép nhóm $A$ và $B$ có cùng số trung bình, với độ lệch chuẩn $s_A=2{,}1$ và $s_B=3{,}4$. Khẳng định nào sau đây đúng?
A. Mẫu $A$ chắc chắn có khoảng biến thiên nhỏ hơn mẫu $B$.
B. Số liệu của mẫu $B$ đồng đều hơn số liệu của mẫu $A$.
C. Số liệu của mẫu $A$ đồng đều hơn số liệu của mẫu $B$.
D. Hai mẫu có độ phân tán như nhau.
::key C
Cùng số trung bình, độ lệch chuẩn nhỏ hơn nghĩa là số liệu ít phân tán hơn. Độ lệch chuẩn không cho biết chắc chắn về khoảng biến thiên, nên A sai.

::tf
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

::sa
Thời gian tự học mỗi tuần (giờ) của $30$ học sinh được cho trong bảng sau. Tính độ lệch chuẩn của mẫu số liệu (làm tròn kết quả đến hàng phần trăm).

| Thời gian (giờ) | $[0; 3)$ | $[3; 6)$ | $[6; 9)$ | $[9; 12)$ |
|---|---|---|---|---|
| Số học sinh | $4$ | $10$ | $12$ | $4$ |

::key 2,65
Giá trị đại diện $1{,}5$; $4{,}5$; $7{,}5$; $10{,}5$. $\bar{x}=\dfrac{183}{30}=6{,}1$, $\dfrac{\sum n_ix_i^2}{n}=\dfrac{1327{,}5}{30}=44{,}25$, nên $s^2=44{,}25-6{,}1^2=7{,}04$ và $s\approx2{,}653$, làm tròn được $2{,}65$.

::sa
Chiều dài (mm) của $40$ chi tiết máy được cho trong bảng sau. Tính phương sai của mẫu số liệu (làm tròn kết quả đến hàng phần trăm).

| Chiều dài (mm) | $[48; 49)$ | $[49; 50)$ | $[50; 51)$ | $[51; 52)$ |
|---|---|---|---|---|
| Số chi tiết | $4$ | $16$ | $16$ | $4$ |

::key 0,65
Bảng đối xứng nên $\bar{x}=50$; độ lệch $-1{,}5$; $-0{,}5$; $0{,}5$; $1{,}5$. $s^2=\dfrac{2\left(4\cdot2{,}25+16\cdot0{,}25\right)}{40}=\dfrac{26}{40}=0{,}65$.
:::
