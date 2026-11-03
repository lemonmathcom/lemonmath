---
title: Các số đặc trưng đo xu thế trung tâm
description: Tìm số trung bình cộng, trung vị, tứ phân vị và mốt của mẫu số liệu, kể cả từ bảng tần số, và chọn số đặc trưng phù hợp nhất.
minutes: 25
---

:::goals
- Tính số trung bình cộng, trung vị và mốt của mẫu số liệu, kể cả từ bảng tần số.
- Tìm các tứ phân vị $Q_1$, $Q_2$, $Q_3$ của mẫu số liệu.
- Giải thích một giá trị bất thường làm thay đổi từng số đặc trưng như thế nào.
- Chọn số đặc trưng mô tả tốt nhất cho một tình huống.
:::

Một tổ có $10$ bạn vừa làm bài kiểm tra, điểm như sau: $3, 5, 6, 6, 7, 8, 8, 8, 9, 10$. Tổ trưởng nói: "Điểm trung bình của tổ là $7$." Một bạn nói: "Một nửa tổ được từ $7{,}5$ trở lên." Bạn khác nói: "Điểm hay gặp nhất là $8$." Ai nói đúng?

Cả ba đều đúng. Mỗi người mô tả "trung tâm" của cùng một mẫu số liệu theo một cách khác nhau. Bài này giới thiệu các cách đó và khi nào nên dùng cách nào.

## Số trung bình cộng

### Khám phá: điểm cân bằng

Lấy điểm $7$ của tổ trưởng và tính độ chênh của từng bạn so với $7$:

$$-4,\ -2,\ -1,\ -1,\ 0,\ 1,\ 1,\ 1,\ 2,\ 3.$$

Tổng các độ chênh âm là $-8$, tổng các độ chênh dương là $8$: chúng triệt tiêu nhau. Số $7$ là "điểm cân bằng" của mẫu số liệu. Đó chính là tổng các điểm ($70$) chia cho số bạn ($10$).

:::definition Số trung bình cộng
Với mẫu số liệu $x_1, x_2, \dots, x_n$, **số trung bình cộng** là
$$\bar{x}=\frac{x_1+x_2+\cdots+x_n}{n}.$$
Nếu giá trị $x_i$ xuất hiện $n_i$ lần (tần số $n_i$) thì $\bar{x}=\dfrac{n_1x_1+n_2x_2+\cdots+n_kx_k}{n}$, trong đó $n=n_1+\cdots+n_k$.
:::

Số trung bình cộng dùng mọi giá trị, nên nó nhạy với các giá trị quá lớn hoặc quá nhỏ. Ví dụ đầu tiên dùng định nghĩa theo chiều ngược lại: biết trung bình, tìm một giá trị.

:::example Cần bao nhiêu điểm?
Lan có bốn bài kiểm tra được $7$, $8$, $7$, $8$. Bài thứ năm Lan cần được bao nhiêu điểm để điểm trung bình của năm bài bằng $8$?

**Lời giải.** Trung bình bằng $8$ nghĩa là tổng năm bài bằng $5\cdot8$. Gọi $x$ là điểm bài thứ năm:

$$\frac{7+8+7+8+x}{5}=8\iff 30+x=40\iff x=10.$$

Vậy Lan cần được $10$ điểm ở bài thứ năm.

**Kiểm tra.** Trung bình bốn bài đầu là $\dfrac{30}{4}=7{,}5$; muốn kéo lên $8$ thì bài mới phải cao hơn $8$ khá nhiều, và $10$ là hợp lí.
:::

## Trung vị và tứ phân vị

Trước hết sắp xếp mẫu số liệu theo thứ tự không giảm.

:::definition Trung vị và tứ phân vị
- **Trung vị** $M_e$ là giá trị đứng giữa nếu $n$ lẻ, và là trung bình cộng của hai giá trị đứng giữa nếu $n$ chẵn.
- **Tứ phân vị thứ hai** $Q_2$ chính là trung vị. **Tứ phân vị thứ nhất** $Q_1$ là trung vị của nửa số liệu bên dưới $Q_2$; **tứ phân vị thứ ba** $Q_3$ là trung vị của nửa số liệu bên trên $Q_2$.
- Nếu $n$ lẻ, giá trị trung vị **không** được tính vào hai nửa.
:::

Trung vị chia mẫu số liệu thành hai nửa bằng nhau về số lượng; ba tứ phân vị chia nó thành bốn phần. Ta bắt đầu với $n$ lẻ.

:::example Điểm của 11 học sinh
Điểm của $11$ học sinh: $4, 5, 6, 6, 7, 7, 7, 8, 9, 9, 10$. Tìm $\bar{x}$, $M_e$, $Q_1$, $Q_3$ và mốt.

**Lời giải.** Số liệu đã được sắp xếp. Tổng bằng $78$:

$$\bar{x}=\frac{78}{11}\approx7{,}09.$$

$n=11$ lẻ nên trung vị là giá trị thứ $6$: $M_e=7$. Bỏ giá trị này ra, mỗi nửa còn $5$ giá trị:

$$\text{nửa dưới } 4, 5, \underline{6}, 6, 7\Rightarrow Q_1=6;\qquad \text{nửa trên } 7, 8, \underline{9}, 9, 10\Rightarrow Q_3=9.$$

Giá trị $7$ xuất hiện nhiều nhất (ba lần) nên mốt $M_o=7$.

Vậy $\bar{x}\approx7{,}09$, $M_e=7$, $Q_1=6$, $Q_3=9$, $M_o=7$.
:::

Với $n$ chẵn, không có giá trị nào đứng chính giữa, nên ta lấy trung bình của hai giá trị giữa. Đây là dữ liệu của tổ ở đầu bài.

:::example Điểm của 10 học sinh
Điểm: $3, 5, 6, 6, 7, 8, 8, 8, 9, 10$. Tìm $\bar{x}$, $M_e$, $Q_1$, $Q_3$ và mốt.

**Lời giải.** Tổng bằng $70$ nên $\bar{x}=7$. $n=10$ chẵn, hai giá trị giữa là giá trị thứ $5$ và thứ $6$:

$$M_e=\frac{7+8}{2}=7{,}5.$$

Hai nửa, mỗi nửa $5$ giá trị:

$$\text{nửa dưới } 3, 5, \underline{6}, 6, 7\Rightarrow Q_1=6;\qquad \text{nửa trên } 8, 8, \underline{8}, 9, 10\Rightarrow Q_3=8.$$

Giá trị $8$ xuất hiện ba lần, nhiều nhất, nên $M_o=8$.

Vậy $\bar{x}=7$, $M_e=7{,}5$, $Q_1=6$, $Q_3=8$, $M_o=8$: đúng ba con số mà ba bạn ở đầu bài đã nói.
:::

## Mốt

**Mốt** $M_o$ là giá trị có tần số lớn nhất. Một mẫu số liệu có thể có nhiều mốt (khi nhiều giá trị cùng có tần số lớn nhất). Mốt là số đặc trưng duy nhất dùng được cho dữ liệu không phải là số, chẳng hạn màu áo được chọn nhiều nhất hay cỡ giày bán chạy nhất.

## Số liệu trong bảng tần số

Khi số liệu nhiều, ta ghi vào bảng tần số. Để tìm giá trị thứ $k$, ta cộng dồn tần số (**tần số tích luỹ**).

:::example Bảng tần số
Điểm của $20$ học sinh được cho trong bảng. Tìm $\bar{x}$, $M_e$, $Q_1$, $Q_3$ và mốt.

| Điểm | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|
| Tần số | 2 | 3 | 5 | 6 | 3 | 1 |

**Lời giải.** $n=2+3+5+6+3+1=20$. Nhân mỗi điểm với tần số của nó rồi cộng lại:

$$\bar{x}=\frac{10+18+35+48+27+10}{20}=\frac{148}{20}=7{,}4.$$

Tần số tích luỹ là $2, 5, 10, 16, 19, 20$. Nghĩa là các giá trị thứ $6$ đến thứ $10$ bằng $7$, các giá trị thứ $11$ đến thứ $16$ bằng $8$. Do đó:

$$M_e=\frac{x_{10}+x_{11}}{2}=\frac{7+8}{2}=7{,}5,\qquad Q_1=\frac{x_5+x_6}{2}=\frac{6+7}{2}=6{,}5,\qquad Q_3=\frac{x_{15}+x_{16}}{2}=\frac{8+8}{2}=8.$$

Tần số lớn nhất là $6$, ứng với điểm $8$, nên $M_o=8$.

Vậy $\bar{x}=7{,}4$, $M_e=7{,}5$, $Q_1=6{,}5$, $Q_3=8$, $M_o=8$.
:::

## Ảnh hưởng của giá trị bất thường

Ví dụ cuối cho thấy vì sao không phải lúc nào cũng nên dùng số trung bình cộng.

:::example Một giá trị quá lớn
Tiền tiêu vặt hằng tháng của bảy học sinh (nghìn đồng): $50, 60, 60, 70, 80, 90, 500$. So sánh $\bar{x}$ và $M_e$ khi có và khi không có giá trị $500$.

**Lời giải.** Với cả bảy giá trị:

$$\bar{x}=\frac{910}{7}=130,\qquad M_e=70.$$

Bỏ giá trị $500$, còn sáu giá trị:

$$\bar{x}=\frac{410}{6}\approx68{,}33,\qquad M_e=\frac{60+70}{2}=65.$$

Vậy một giá trị bất thường làm số trung bình cộng tăng khoảng $62$ nghìn đồng, còn trung vị chỉ tăng $5$ nghìn đồng. Với cả bảy bạn, $130$ nghìn đồng lớn hơn tiền của sáu bạn, nên trung vị $70$ mô tả "bạn điển hình" tốt hơn.
:::

:::tip Nên dùng số đặc trưng nào
- Số trung bình cộng: dữ liệu không có giá trị bất thường, khi mọi giá trị đều quan trọng (tổng, ngân sách).
- Trung vị: dữ liệu có giá trị bất thường hoặc lệch hẳn về một phía (lương, giá nhà).
- Mốt: dữ liệu không phải số, hoặc khi cần giá trị gặp nhiều nhất (cỡ áo cần nhập nhiều nhất).
- Tứ phân vị: cho biết số liệu trải ra quanh trung vị thế nào (bài sau).
:::

:::warning Những sai lầm thường gặp
- **Sai:** trung vị của $3, 9, 4, 7, 1, 6$ là $\dfrac{4+7}{2}=5{,}5$. **Vì sao sai:** chưa sắp xếp số liệu. **Đúng:** sắp xếp $1, 3, 4, 6, 7, 9$ rồi lấy $\dfrac{4+6}{2}=5$.
- **Sai:** với $4, 5, 6, 6, 7, 7, 7, 8, 9, 9, 10$, lấy nửa trên là $7, 7, 8, 9, 9, 10$ và $Q_3=8{,}5$. **Vì sao sai:** $n$ lẻ thì trung vị (giá trị thứ $6$) không thuộc nửa nào. **Đúng:** nửa trên là $7, 8, 9, 9, 10$, nên $Q_3=9$.
- **Sai:** nói "mốt bằng $6$" vì điểm $8$ có tần số $6$. **Vì sao sai:** mốt là giá trị, không phải tần số. **Đúng:** $M_o=8$.
:::

## Thuật ngữ

:::terms
- số trung bình cộng | mean
- trung vị | median
- tứ phân vị | quartile
- mốt | mode
- tần số | frequency
- tần số tích luỹ | cumulative frequency
- bảng tần số | frequency table
- giá trị bất thường | outlier
- mẫu số liệu | data set
:::

## Tóm tắt

- $\bar{x}=\dfrac{x_1+\cdots+x_n}{n}$; với bảng tần số $\bar{x}=\dfrac{n_1x_1+\cdots+n_kx_k}{n}$. Đó là điểm cân bằng: tổng các độ chênh bằng $0$.
- Sắp xếp trước. $M_e=Q_2$ là giá trị giữa ($n$ lẻ) hoặc trung bình hai giá trị giữa ($n$ chẵn).
- $Q_1$, $Q_3$ là trung vị của nửa dưới, nửa trên; $n$ lẻ thì bỏ trung vị ra trước khi chia đôi.
- Mốt là giá trị có tần số lớn nhất.
- Giá trị bất thường kéo $\bar{x}$ đi xa, còn $M_e$ gần như không đổi.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
a) Tìm số trung bình cộng của $6, 8, 9, 10, 12$.

b) Tìm trung vị của $3, 9, 4, 7, 1, 6$.

::hint
**Kiến thức:** $\bar{x}$ là tổng chia số giá trị; trung vị cần số liệu đã sắp xếp.

**Gợi ý các bước:**
1. a) Cộng năm số rồi chia cho $5$.
2. b) Sắp xếp sáu số, lấy trung bình hai số giữa.

::solution
a) $\bar{x}=\dfrac{45}{5}=9$.

b) Sắp xếp: $1, 3, 4, 6, 7, 9$; $M_e=\dfrac{4+6}{2}=5$.

**Đáp số.** a) $9$; b) $5$.
:::

:::exercise
a) Tìm mốt của $2, 3, 3, 5, 5, 5, 7$.

b) Một cửa hàng ghi cỡ áo bán được trong ngày: M, L, S, M, XL, M, L, M, S, L. Tìm mốt. Có thể tính số trung bình cộng của dữ liệu này không?

::hint
**Kiến thức:** mốt là giá trị có tần số lớn nhất; số trung bình cộng chỉ tính được cho dữ liệu là số.

**Gợi ý các bước:**
1. Đếm số lần xuất hiện của từng giá trị.
2. Chọn giá trị xuất hiện nhiều nhất.

::solution
a) $5$ xuất hiện ba lần, nhiều nhất.

b) Tần số: S: $2$, M: $4$, L: $3$, XL: $1$. Cỡ áo không phải là số nên không cộng và chia được.

**Đáp số.** a) $M_o=5$; b) $M_o=\text{M}$; không tính được số trung bình cộng.
:::

:::exercise
Tìm $M_e$, $Q_1$, $Q_3$ của mỗi mẫu số liệu:

a) $2, 4, 5, 7, 8, 10, 11, 13, 15$;

b) $3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20$.

::hint
**Kiến thức:** $Q_1$, $Q_3$ là trung vị của nửa dưới và nửa trên; $n$ lẻ thì bỏ trung vị ra.

**Gợi ý các bước:**
1. Đếm $n$ và tìm trung vị.
2. Chia hai nửa, tìm trung vị mỗi nửa.

::solution
a) $n=9$, $M_e=8$. Nửa dưới $2, 4, 5, 7$: $Q_1=\dfrac{4+5}{2}=4{,}5$. Nửa trên $10, 11, 13, 15$: $Q_3=\dfrac{11+13}{2}=12$.

b) $n=12$, $M_e=\dfrac{10+12}{2}=11$. Nửa dưới $3, 4, 6, 7, 9, 10$: $Q_1=6{,}5$. Nửa trên $12, 13, 15, 16, 18, 20$: $Q_3=15{,}5$.

**Đáp số.** a) $M_e=8$, $Q_1=4{,}5$, $Q_3=12$; b) $M_e=11$, $Q_1=6{,}5$, $Q_3=15{,}5$.
:::

:::exercise
Bảng cho số quyển sách đã đọc trong tháng của $22$ học sinh. Tìm $\bar{x}$ (làm tròn đến hàng phần trăm), $M_e$ và mốt.

| Số sách | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Số học sinh | 3 | 5 | 8 | 4 | 2 |

::hint
**Kiến thức:** $\bar{x}=\dfrac{\sum n_ix_i}{n}$; dùng tần số tích luỹ để tìm giá trị đứng giữa.

**Gợi ý các bước:**
1. Tính tổng $n_ix_i$.
2. Lập tần số tích luỹ, tìm giá trị thứ $11$ và thứ $12$.

::solution
$$\bar{x}=\frac{3+10+24+16+10}{22}=\frac{63}{22}\approx2{,}86.$$
Tần số tích luỹ $3, 8, 16, 20, 22$: giá trị thứ $11$ và $12$ đều bằng $3$, nên $M_e=3$. Tần số lớn nhất là $8$, ứng với $3$ quyển.

**Đáp số.** $\bar{x}\approx2{,}86$; $M_e=3$; $M_o=3$.
:::

:::exercise
Cho mẫu số liệu $5, 7, 7, 8, 9, 10, 10, 10, 12$. Mỗi khẳng định sau đúng hay sai?

a) Số trung bình cộng bằng $8$.

b) Trung vị bằng $9$.

c) Tứ phân vị thứ nhất $Q_1=7$.

d) Nếu thêm giá trị $30$ vào mẫu thì trung vị thay đổi nhiều hơn số trung bình cộng.

::hint
**Kiến thức:** định nghĩa $\bar{x}$, $M_e$, $Q_1$; ảnh hưởng của giá trị bất thường.

**Gợi ý các bước:**
1. Tính tổng và $\bar{x}$.
2. $n=9$: tìm $M_e$, rồi nửa dưới $4$ giá trị.
3. Với $n=10$ sau khi thêm $30$, tính lại $\bar{x}$ và $M_e$.

::solution
a) **Sai:** $\bar{x}=\dfrac{78}{9}\approx8{,}67$.

b) **Đúng:** giá trị thứ $5$ là $9$.

c) **Đúng:** nửa dưới $5, 7, 7, 8$ cho $Q_1=\dfrac{7+7}{2}=7$.

d) **Sai:** sau khi thêm $30$, $M_e=\dfrac{9+10}{2}=9{,}5$ (tăng $0{,}5$), còn $\bar{x}=\dfrac{108}{10}=10{,}8$ (tăng khoảng $2{,}13$).

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Một lớp có $20$ bạn nữ với điểm trung bình $7{,}0$ và $10$ bạn nam với điểm trung bình $8{,}5$. Tính điểm trung bình của cả lớp.

::hint
**Kiến thức:** tổng điểm của một nhóm bằng số người nhân điểm trung bình.

**Gợi ý các bước:**
1. Tính tổng điểm của nữ và của nam.
2. Chia tổng cho $30$.

::solution
$$\bar{x}=\frac{20\cdot7+10\cdot8{,}5}{30}=\frac{140+85}{30}=\frac{225}{30}=7{,}5.$$
Không được lấy $\dfrac{7+8{,}5}{2}=7{,}75$, vì hai nhóm có số người khác nhau.

**Đáp số.** $7{,}5$.
:::

:::exercise
Lương tháng (triệu đồng) của bảy nhân viên một cửa hàng nhỏ là $12, 13, 14, 15, 16, 17, 90$ (số $90$ là lương của chủ cửa hàng). Tính số trung bình cộng và trung vị. Một bạn muốn biết "một nhân viên ở đây thường được trả bao nhiêu"; nên dùng số nào?

::hint
**Kiến thức:** giá trị bất thường kéo số trung bình cộng nhưng ít ảnh hưởng tới trung vị.

**Gợi ý các bước:**
1. Tính $\bar{x}$ và $M_e$.
2. So sánh mỗi số với phần lớn các giá trị.

::solution
$$\bar{x}=\frac{177}{7}\approx25{,}29,\qquad M_e=15.$$
Sáu trong bảy người nhận dưới $18$ triệu đồng, nên $25{,}29$ không đại diện cho ai.

**Đáp số.** $\bar{x}\approx25{,}29$ triệu đồng, $M_e=15$ triệu đồng; nên dùng trung vị.
:::

:::exercise Thử thách
Bảy số có trung bình cộng bằng $10$. Bỏ đi một số thì trung bình cộng của sáu số còn lại bằng $9$. Số bị bỏ đi là số nào?

::hint
**Kiến thức:** tổng $=$ số giá trị $\times$ trung bình.

**Gợi ý các bước:**
1. Tính tổng bảy số và tổng sáu số.
2. Lấy hiệu.

::solution
Tổng bảy số là $7\cdot10=70$, tổng sáu số là $6\cdot9=54$, nên số bị bỏ là $70-54=16$.

**Đáp số.** $16$.
:::

:::exercise Thử thách
Một mẫu gồm $5$ số nguyên dương có số trung bình cộng bằng $6$, trung vị bằng $5$, mốt duy nhất bằng $3$ và giá trị lớn nhất bằng $11$. Tìm mẫu số liệu đó.

::hint
**Kiến thức:** với $5$ giá trị đã sắp xếp $a\le b\le c\le d\le e$, trung vị là $c$.

**Gợi ý các bước:**
1. Viết $c=5$, $e=11$ và tổng bằng $30$.
2. Mốt duy nhất là $3$: số $3$ phải xuất hiện ít nhất hai lần, mà chỉ có $a$, $b$ nhỏ hơn $5$.
3. Tìm $d$ từ tổng.

::solution
Tổng bằng $5\cdot6=30$. Vì $3<5=c$, số $3$ chỉ có thể là $a$, $b$, nên $a=b=3$. Khi đó
$$d=30-3-3-5-11=8.$$
Mẫu $3, 3, 5, 8, 11$ có mỗi giá trị khác $3$ xuất hiện một lần, nên mốt duy nhất là $3$.

**Đáp số.** $3, 3, 5, 8, 11$.
:::

:::exercise
(Ôn lại [Bất phương trình bậc nhất hai ẩn](lesson:linear-inequality-two-variables).) Bình đã có bốn bài kiểm tra được $6, 7, 8, 7$. Còn hai bài nữa, được $x$ và $y$ điểm. Viết điều kiện để điểm trung bình của sáu bài ít nhất là $7{,}5$. Cặp điểm $(8; 9)$ và $(10; 6)$ có thoả mãn không?

::hint
**Kiến thức:** tổng $=$ số bài $\times$ trung bình; một điều kiện dạng $ax+by\ge c$ là bất phương trình bậc nhất hai ẩn.

**Gợi ý các bước:**
1. Viết $\dfrac{28+x+y}{6}\ge7{,}5$.
2. Rút gọn thành bất phương trình theo $x, y$.
3. Thay hai cặp số.

::solution
$$\frac{6+7+8+7+x+y}{6}\ge7{,}5\iff 28+x+y\ge45\iff x+y\ge17.$$
Với $(8; 9)$: $17\ge17$, đúng. Với $(10; 6)$: $16\ge17$, sai.

**Đáp số.** $x+y\ge17$ (với $0\le x, y\le10$); $(8; 9)$ thoả mãn, $(10; 6)$ không thoả mãn.
:::

## Kiểm tra mini

:::quiz
::mc
Số trung bình cộng của mẫu số liệu $2, 5, 6, 9, 13$ là
A. $6$.
B. $7$.
C. $8{,}75$.
D. $35$.
::key B
Tổng bằng $35$, có $5$ giá trị nên $\bar x=\dfrac{35}{5}=7$. Phương án A là trung vị, C là chia nhầm cho $4$, D là tổng chưa chia.

::mc
Trung vị của mẫu số liệu $9, 2, 13, 4, 6, 15$ là
A. $6$.
B. $7{,}5$.
C. $8{,}5$.
D. $9$.
::key B
Sắp xếp: $2, 4, 6, 9, 13, 15$. Có $6$ giá trị nên $M_e=\dfrac{6+9}{2}=7{,}5$. Phương án C lấy hai số ở giữa khi chưa sắp xếp ($13$ và $4$).

::mc
Trong một tháng, một cửa hàng bán được $5$ đôi giày cỡ $36$, $9$ đôi cỡ $37$, $14$ đôi cỡ $38$, $8$ đôi cỡ $39$ và $3$ đôi cỡ $40$. Mốt của mẫu số liệu cỡ giày là
A. $14$.
B. $38$.
C. $40$.
D. $37$.
::key B
Mốt là giá trị có tần số lớn nhất: cỡ $38$ (bán $14$ đôi). Phương án A nhầm mốt với tần số.

::mc
Tứ phân vị thứ nhất $Q_1$ của mẫu số liệu $1, 3, 4, 6, 7, 8, 9, 11, 12$ là
A. $3{,}5$.
B. $4$.
C. $3$.
D. $10$.
::key A
$n=9$ lẻ, $M_e=7$. Bỏ $7$ ra, nửa dưới là $1, 3, 4, 6$ nên $Q_1=\dfrac{3+4}{2}=3{,}5$. Phương án B tính cả $7$ vào nửa dưới; D là $Q_3$.

::tf
Cho mẫu số liệu $3, 5, 5, 6, 8, 9, 20$.
a) Số trung bình cộng bằng $8$.
b) Trung vị bằng $6$.
c) Tứ phân vị thứ ba là $Q_3=8{,}5$.
d) Nếu bỏ giá trị $20$ thì số trung bình cộng giảm ít hơn $1$.
::key Đ Đ S S
a) Đúng: $\bar x=\dfrac{56}{7}=8$. b) Đúng: giá trị thứ $4$ là $6$. c) Sai: nửa trên (không tính $6$) là $8, 9, 20$ nên $Q_3=9$. d) Sai: còn lại $\bar x=\dfrac{36}{6}=6$, giảm $2$.

::sa
Trong một nhóm $20$ học sinh, có $4$ bạn được $6$ điểm, $6$ bạn được $7$ điểm, $7$ bạn được $8$ điểm và $3$ bạn được $9$ điểm. Tính điểm trung bình của nhóm.
::key 7,45
$\bar x=\dfrac{4\cdot6+6\cdot7+7\cdot8+3\cdot9}{20}=\dfrac{149}{20}=7{,}45$.

::sa
Một nhóm $12$ bạn có tuổi trung bình là $15$. Khi cô giáo vào nhóm, tuổi trung bình của cả $13$ người là $17$. Cô giáo bao nhiêu tuổi?
::key 41
Tổng tuổi của $12$ bạn là $12\cdot15=180$, của $13$ người là $13\cdot17=221$. Vậy cô giáo $221-180=41$ tuổi.
:::
