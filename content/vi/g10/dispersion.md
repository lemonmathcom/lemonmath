---
title: Các số đặc trưng đo độ phân tán
description: Đo mức độ phân tán của số liệu bằng khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn; so sánh mẫu số liệu và tìm giá trị ngoại lệ.
minutes: 25
---

:::goals
- Tìm khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu.
- Tính phương sai và độ lệch chuẩn, bằng một trong hai công thức.
- So sánh độ phân tán của hai mẫu số liệu.
- Phát hiện giá trị ngoại lệ bằng quy tắc $1{,}5$ lần khoảng tứ phân vị.
:::

Hai cầu thủ bóng rổ cùng ghi trung bình $8$ điểm mỗi trận. Trong ba trận gần nhất, cầu thủ An ghi $7, 8, 9$ điểm, còn cầu thủ Bảo ghi $0, 8, 16$ điểm. Huấn luyện viên cần một người ghi điểm đều đặn. Số trung bình như nhau, vậy dựa vào đâu để chọn?

Số trung bình chỉ cho biết "trung tâm" của số liệu. Bài này cho ta những con số đo xem số liệu **trải rộng** quanh trung tâm đến mức nào.

## Khoảng biến thiên và khoảng tứ phân vị

### Khám phá: độ rộng của số liệu

Cách đơn giản nhất là xem điểm cao nhất và thấp nhất cách nhau bao nhiêu:

$$\text{An: } 9-7=2,\qquad \text{Bảo: } 16-0=16.$$

Điểm của Bảo trải trên một khoảng rộng gấp $8$ lần. Con số này gọi là khoảng biến thiên.

:::definition Khoảng biến thiên và khoảng tứ phân vị
- **Khoảng biến thiên** là $R=x_{\max}-x_{\min}$.
- **Khoảng tứ phân vị** là $\Delta_Q=Q_3-Q_1$, độ rộng của nửa số liệu ở giữa.
:::

Khoảng biến thiên dễ tính nhưng chỉ phụ thuộc hai giá trị ở hai đầu, nên một giá trị bất thường làm nó lớn vọt. Khoảng tứ phân vị bỏ qua một phần tư số liệu ở mỗi đầu nên ổn định hơn.

:::example Khoảng biến thiên và khoảng tứ phân vị
Điểm của $8$ học sinh nhóm A: $4, 6, 7, 7, 8, 9, 10, 11$. Tìm $R$ và $\Delta_Q$.

**Lời giải.** Số liệu đã được sắp xếp, nên $R=11-4=7$. Với $n=8$ chẵn, mỗi nửa có $4$ giá trị:

$$\text{nửa dưới } 4, 6, 7, 7\Rightarrow Q_1=\frac{6+7}{2}=6{,}5;\qquad \text{nửa trên } 8, 9, 10, 11\Rightarrow Q_3=\frac{9+10}{2}=9{,}5.$$

Vậy $R=7$ và $\Delta_Q=9{,}5-6{,}5=3$.
:::

## Phương sai và độ lệch chuẩn

Khoảng biến thiên và khoảng tứ phân vị chỉ dùng vài giá trị. Muốn dùng **mọi** giá trị, ta xét độ lệch $x_i-\bar{x}$ của từng giá trị so với số trung bình. Nhưng tổng các độ lệch luôn bằng $0$ (bài trước), nên ta bình phương chúng trước khi lấy trung bình. Với cầu thủ An, các độ lệch là $-1, 0, 1$, bình phương là $1, 0, 1$, trung bình là $\dfrac23$. Với Bảo: $64, 0, 64$, trung bình là $\dfrac{128}{3}$, lớn gấp $64$ lần. Huấn luyện viên nên chọn An.

:::definition Phương sai và độ lệch chuẩn
Với mẫu số liệu $x_1, \dots, x_n$ có số trung bình cộng $\bar{x}$,
$$s^2=\frac{(x_1-\bar{x})^2+\cdots+(x_n-\bar{x})^2}{n},\qquad s=\sqrt{s^2}.$$
Một công thức tương đương, thường nhanh hơn, là
$$s^2=\frac{x_1^2+\cdots+x_n^2}{n}-\bar{x}^2.$$
:::

**Vì sao hai công thức bằng nhau?** Khai triển $(x_i-\bar{x})^2=x_i^2-2\bar{x}x_i+\bar{x}^2$, cộng lại rồi chia cho $n$. Vì $\dfrac{x_1+\cdots+x_n}{n}=\bar{x}$ nên được $\dfrac{\sum x_i^2}{n}-2\bar{x}^2+\bar{x}^2=\dfrac{\sum x_i^2}{n}-\bar{x}^2$.

Độ lệch chuẩn $s$ có cùng đơn vị với số liệu nên dễ diễn giải hơn. $s$ nhỏ nghĩa là các giá trị tập trung gần số trung bình; $s$ lớn nghĩa là chúng phân tán. Ví dụ sau tính phương sai bằng cả hai công thức.

:::example Hai cách tính phương sai
Tìm $s^2$ và $s$ của nhóm A: $4, 6, 7, 7, 8, 9, 10, 11$.

**Lời giải.** Trước hết $\bar{x}=\dfrac{62}{8}=7{,}75$.

*Cách 1 (định nghĩa).* Bình phương các độ lệch:
$$14{,}0625;\ 3{,}0625;\ 0{,}5625;\ 0{,}5625;\ 0{,}0625;\ 1{,}5625;\ 5{,}0625;\ 10{,}5625,$$
tổng bằng $35{,}5$, nên $s^2=\dfrac{35{,}5}{8}=4{,}4375$.

*Cách 2.* Tổng các bình phương là $16+36+49+49+64+81+100+121=516$:
$$s^2=\frac{516}{8}-7{,}75^2=64{,}5-60{,}0625=4{,}4375.$$

Vậy $s^2=4{,}4375$ và $s=\sqrt{4{,}4375}\approx2{,}11$.
:::

Khi số liệu cho bằng bảng tần số, mỗi bình phương được nhân với tần số của nó.

:::example Phương sai từ bảng tần số
Số giờ tự học mỗi ngày của $20$ học sinh được cho trong bảng. Tìm $s^2$ và $s$.

| Số giờ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Số học sinh | 3 | 6 | 7 | 4 |

**Lời giải.** Ta dùng công thức thứ hai, với mỗi tổng có nhân tần số. Số trung bình:
$$\bar{x}=\frac{3\cdot1+6\cdot2+7\cdot3+4\cdot4}{20}=\frac{52}{20}=2{,}6.$$
Trung bình của các bình phương:
$$\frac{3\cdot1+6\cdot4+7\cdot9+4\cdot16}{20}=\frac{154}{20}=7{,}7.$$
Do đó
$$s^2=7{,}7-2{,}6^2=7{,}7-6{,}76=0{,}94,\qquad s\approx0{,}97.$$

Vậy $s^2=0{,}94$ và $s\approx0{,}97$ giờ.
:::

Phương sai mạnh nhất khi dùng để **so sánh** hai mẫu số liệu có trung bình gần nhau.

:::example So sánh hai nhóm
Nhóm B có điểm $7, 7, 7, 8, 8, 8, 9, 9$. So sánh độ phân tán của nhóm B với nhóm A ở Ví dụ 2.

**Lời giải.** Ta tính cùng các số đo cho B. Tổng bằng $63$, tổng các bình phương bằng $501$:
$$\bar{x}=\frac{63}{8}=7{,}875,\qquad s^2=\frac{501}{8}-7{,}875^2\approx0{,}61,\qquad s\approx0{,}78.$$
Ngoài ra $R=9-7=2$; nửa dưới $7, 7, 7, 8$ và nửa trên $8, 8, 9, 9$ cho $\Delta_Q=8{,}5-7=1{,}5$.

| | $\bar{x}$ | $R$ | $\Delta_Q$ | $s$ |
|---|---|---|---|---|
| Nhóm A | $7{,}75$ | $7$ | $3$ | $2{,}11$ |
| Nhóm B | $7{,}875$ | $2$ | $1{,}5$ | $0{,}78$ |

Vậy hai nhóm có trung bình gần bằng nhau, nhưng mọi số đo độ phân tán của B đều nhỏ hơn: nhóm B học đồng đều hơn hẳn.
:::

## Biểu đồ hộp

**Biểu đồ hộp** vẽ năm số: giá trị nhỏ nhất, $Q_1$, trung vị, $Q_3$ và giá trị lớn nhất. Hộp chứa nửa số liệu ở giữa (độ dài hộp là $\Delta_Q$), còn hai "râu" kéo ra đến hai đầu (từ đầu râu này đến đầu râu kia là $R$).

:::diagram Biểu đồ hộp của $4, 6, 7, 7, 8, 9, 10, 11$
alt: Biểu đồ hộp trên trục số: râu từ 4 đến 11, hộp từ 6,5 đến 9,5 và một đoạn trong hộp tại trung vị 7,5
point L1 4,0.3 ""
point L2 4,0.9 ""
point R1 11,0.3 ""
point R2 11,0.9 ""
point Q1a 6.5,0 ""
point Q1b 6.5,1.2 ""
point Q3a 9.5,1.2 ""
point Q3b 9.5,0 ""
point Ma 7.5,0 ""
point Mb 7.5,1.2 ""
point WL1 4,0.6 ""
point WL2 6.5,0.6 ""
point WR1 9.5,0.6 ""
point WR2 11,0.6 ""
point P1 4,-0.5 ""
point P2 11,-0.5 ""
polygon Q1a Q1b Q3a Q3b
segment Ma Mb
segment WL1 WL2
segment WR1 WR2
segment L1 L2
segment R1 R2
segment P1 P2
label 4,-0.9 "4"
label 6.5,-0.9 "Q₁"
label 7.5,-0.9 "Mₑ"
label 9.5,-0.9 "Q₃"
label 11,-0.9 "11"
:::

## Giá trị ngoại lệ

Một giá trị là **giá trị ngoại lệ** nếu nó nằm quá xa phần lớn số liệu. Quy tắc thường dùng: $x$ là giá trị ngoại lệ nếu
$$x<Q_1-1{,}5\,\Delta_Q\qquad\text{hoặc}\qquad x>Q_3+1{,}5\,\Delta_Q.$$

Ví dụ cuối áp dụng quy tắc này cho một mẫu có một giá trị lạ.

:::example 45 có phải giá trị ngoại lệ không?
Thời gian (phút) đi từ nhà đến trường của $9$ học sinh: $12, 13, 13, 14, 15, 15, 16, 17, 45$. Mẫu có giá trị ngoại lệ không?

**Lời giải.** Tìm các tứ phân vị. $n=9$ lẻ nên $M_e=15$ (giá trị thứ $5$) và bỏ nó ra khi chia đôi:

$$\text{nửa dưới } 12, 13, 13, 14\Rightarrow Q_1=13;\qquad \text{nửa trên } 15, 16, 17, 45\Rightarrow Q_3=16{,}5.$$

Do đó $\Delta_Q=3{,}5$ và $1{,}5\,\Delta_Q=5{,}25$. Hai ngưỡng là

$$Q_1-5{,}25=7{,}75,\qquad Q_3+5{,}25=21{,}75.$$

Chỉ có $45>21{,}75$. Vậy $45$ là giá trị ngoại lệ duy nhất (có thể bạn đó ở rất xa trường, hoặc số liệu bị ghi nhầm).

**Kiểm tra.** Giá trị $45$ nằm trong nửa trên nhưng $Q_3$ chỉ dùng hai giá trị giữa $16$ và $17$, nên ngưỡng không bị $45$ kéo lên. Đó là lí do quy tắc dùng tứ phân vị chứ không dùng $\bar{x}$ và $R$.
:::

:::warning Những sai lầm thường gặp
- **Sai:** tính phương sai của $7, 8, 9$ bằng $\dfrac{1+0+1}{2}=1$. **Vì sao sai:** trong chương trình này phương sai chia cho $n$, không chia cho $n-1$. **Đúng:** $s^2=\dfrac{2}{3}$.
- **Sai:** $s^2=\dfrac{\sum x_i^2}{n}-\bar{x}$. **Vì sao sai:** quên bình phương $\bar{x}$; với nhóm A sẽ ra $64{,}5-7{,}75=56{,}75$, vô lí. **Đúng:** trừ $\bar{x}^2$.
- **Sai:** đề hỏi độ lệch chuẩn mà trả lời $s^2$. **Đúng:** lấy căn bậc hai: $s=\sqrt{s^2}$.
- **Sai:** dùng khoảng biến thiên để so sánh khi có giá trị bất thường. **Vì sao sai:** ở Ví dụ 5, $R=45-12=33$ chỉ phản ánh một bạn. **Đúng:** dùng $\Delta_Q$.
:::

## Thuật ngữ

:::terms
- khoảng biến thiên | range
- khoảng tứ phân vị | interquartile range
- phương sai | variance
- độ lệch chuẩn | standard deviation
- độ lệch | deviation
- biểu đồ hộp | box plot
- giá trị ngoại lệ | outlier
- độ phân tán | spread
:::

## Tóm tắt

- $R=x_{\max}-x_{\min}$; $\Delta_Q=Q_3-Q_1$ (ít bị giá trị bất thường ảnh hưởng hơn).
- $s^2=\dfrac1n\sum(x_i-\bar{x})^2=\dfrac{\sum x_i^2}{n}-\bar{x}^2$, chia cho $n$; $s=\sqrt{s^2}$, cùng đơn vị với số liệu.
- Bảng tần số: nhân mỗi $x_i$ và mỗi $x_i^2$ với tần số trước khi cộng.
- $s$ (hoặc $\Delta_Q$) càng nhỏ thì số liệu càng đồng đều.
- Ngoại lệ: $x<Q_1-1{,}5\Delta_Q$ hoặc $x>Q_3+1{,}5\Delta_Q$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm $R$ và $\Delta_Q$ của mẫu số liệu $3, 5, 7, 9, 11$.

::hint
**Kiến thức:** $R=x_{\max}-x_{\min}$, $\Delta_Q=Q_3-Q_1$; $n$ lẻ thì bỏ trung vị khi chia đôi.

**Gợi ý các bước:**
1. Tính $R$.
2. Trung vị là $7$; nửa dưới $3, 5$, nửa trên $9, 11$.

::solution
$R=11-3=8$. $Q_1=\dfrac{3+5}{2}=4$, $Q_3=\dfrac{9+11}{2}=10$.

**Đáp số.** $R=8$, $\Delta_Q=6$.
:::

:::exercise
Tìm $s^2$ và $s$ của mẫu số liệu $2, 4, 4, 4, 5, 5, 7, 9$ bằng công thức định nghĩa.

::hint
**Kiến thức:** $s^2=\dfrac{1}{n}\sum(x_i-\bar{x})^2$.

**Gợi ý các bước:**
1. Tính $\bar{x}$.
2. Tính bình phương độ lệch của từng giá trị và cộng lại.
3. Chia cho $8$, rồi khai căn.

::solution
$\bar{x}=\dfrac{40}{8}=5$. Bình phương các độ lệch: $9, 1, 1, 1, 0, 0, 4, 16$, tổng $32$.
$$s^2=\frac{32}{8}=4,\qquad s=2.$$

**Đáp số.** $s^2=4$, $s=2$.
:::

:::exercise
a) Dùng công thức $s^2=\dfrac{\sum x_i^2}{n}-\bar{x}^2$ để tìm $s^2$ và $s$ của $3, 5, 7, 9, 11$.

b) Tìm phương sai của $6, 6, 6, 6$. Kết quả cho biết điều gì?

::hint
**Kiến thức:** công thức thứ hai của phương sai; phương sai bằng $0$ khi mọi độ lệch bằng $0$.

**Gợi ý các bước:**
1. a) Tính $\bar{x}$ và tổng các bình phương.
2. b) Xét độ lệch của từng giá trị.

::solution
a) $\bar{x}=7$, $\sum x_i^2=9+25+49+81+121=285$:
$$s^2=\frac{285}{5}-49=57-49=8,\qquad s=\sqrt8\approx2{,}83.$$

b) $\bar{x}=6$, mọi độ lệch bằng $0$, nên $s^2=0$: số liệu hoàn toàn không phân tán.

**Đáp số.** a) $s^2=8$, $s\approx2{,}83$; b) $s^2=0$.
:::

:::exercise
Cho mẫu số liệu $2, 3, 5, 6, 7, 8, 11$. Mỗi khẳng định sau đúng hay sai?

a) Khoảng biến thiên bằng $9$.

b) Khoảng tứ phân vị bằng $4$.

c) Phương sai bằng $8$.

d) Nếu cộng thêm $3$ vào mọi giá trị thì phương sai của mẫu mới bằng $11$.

::hint
**Kiến thức:** các định nghĩa $R$, $\Delta_Q$, $s^2$; cộng cùng một số vào mọi giá trị thì mọi độ lệch giữ nguyên.

**Gợi ý các bước:**
1. Tìm $R$; tìm $Q_1$, $Q_3$ (bỏ trung vị $6$).
2. Tính $\bar{x}$ và các bình phương độ lệch.
3. Xem độ lệch thay đổi thế nào khi cộng $3$.

::solution
a) **Đúng:** $R=11-2=9$.

b) **Sai:** $Q_1=3$ (nửa dưới $2, 3, 5$), $Q_3=8$ (nửa trên $7, 8, 11$), nên $\Delta_Q=5$.

c) **Đúng:** $\bar{x}=\dfrac{42}{7}=6$; bình phương độ lệch $16, 9, 1, 0, 1, 4, 25$, tổng $56$; $s^2=\dfrac{56}{7}=8$.

d) **Sai:** mọi giá trị và $\bar{x}$ cùng tăng $3$, nên độ lệch không đổi và phương sai vẫn bằng $8$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Hai xạ thủ mỗi người bắn $5$ phát. Điểm của Minh: $8, 9, 10, 9, 9$. Điểm của Quân: $10, 7, 10, 8, 10$. Tính điểm trung bình và độ lệch chuẩn của mỗi người. Nên chọn ai đi thi nếu đội cần người bắn ổn định?

::hint
**Kiến thức:** cùng trung bình thì người có $s$ nhỏ hơn ổn định hơn.

**Gợi ý các bước:**
1. Tính $\bar{x}$ của mỗi người.
2. Tính bình phương độ lệch, chia cho $5$, khai căn.
3. So sánh.

::solution
Cả hai đều có $\bar{x}=\dfrac{45}{5}=9$.
$$\text{Minh: } s^2=\frac{1+0+1+0+0}{5}=0{,}4,\ s\approx0{,}63;\qquad \text{Quân: } s^2=\frac{1+4+1+1+1}{5}=1{,}6,\ s\approx1{,}26.$$

**Đáp số.** Cả hai trung bình $9$ điểm; $s\approx0{,}63$ (Minh) và $s\approx1{,}26$ (Quân). Nên chọn Minh.
:::

:::exercise
Giá trị $40$ có phải là giá trị ngoại lệ của mẫu $1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40$ không?

::hint
**Kiến thức:** $x$ là ngoại lệ nếu $x>Q_3+1{,}5\Delta_Q$ (hoặc $x<Q_1-1{,}5\Delta_Q$).

**Gợi ý các bước:**
1. $n=11$: trung vị là $6$, bỏ ra rồi tìm $Q_1$, $Q_3$.
2. Tính ngưỡng trên.

::solution
Nửa dưới $1, \dots, 5$ cho $Q_1=3$; nửa trên $7, 8, 9, 10, 40$ cho $Q_3=9$. Khi đó $\Delta_Q=6$ và
$$Q_3+1{,}5\,\Delta_Q=9+9=18<40.$$

**Đáp số.** Có, $40$ là giá trị ngoại lệ.
:::

:::exercise
Cho mẫu số liệu $3, 5, 7, 9, 11$ (có $\bar{x}=7$, $s^2=8$).

a) Cộng $5$ vào mọi giá trị. Số trung bình và độ lệch chuẩn thay đổi thế nào?

b) Nhân mọi giá trị với $2$. Tìm phương sai và độ lệch chuẩn mới.

::hint
**Kiến thức:** phương sai chỉ phụ thuộc vào các độ lệch $x_i-\bar{x}$.

**Gợi ý các bước:**
1. Viết mẫu mới và số trung bình mới.
2. Viết các độ lệch mới và so sánh với độ lệch cũ $-4, -2, 0, 2, 4$.

::solution
a) Mẫu $8, 10, 12, 14, 16$ có $\bar{x}=12$; các độ lệch vẫn là $-4, -2, 0, 2, 4$, nên $s=\sqrt8$ không đổi.

b) Mẫu $6, 10, 14, 18, 22$ có $\bar{x}=14$; các độ lệch $-8, -4, 0, 4, 8$ gấp đôi:
$$s^2=\frac{64+16+0+16+64}{5}=32,\qquad s=\sqrt{32}\approx5{,}66.$$

**Đáp số.** a) $\bar{x}$ tăng $5$ (thành $12$), $s\approx2{,}83$ không đổi; b) $s^2=32$ (gấp $4$), $s\approx5{,}66$ (gấp $2$).
:::

:::exercise
(Ôn lại [Các số đặc trưng đo xu thế trung tâm](lesson:central-tendency).) Số lần đến thư viện trong một tháng của $25$ học sinh được cho trong bảng. Tính độ lệch chuẩn (làm tròn đến hàng phần trăm).

| Số lần | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Số học sinh | 4 | 6 | 8 | 5 | 2 |

::hint
**Kiến thức:** $\bar{x}=\dfrac{\sum n_ix_i}{n}$ (bài trước); $s^2=\dfrac{\sum n_ix_i^2}{n}-\bar{x}^2$.

**Gợi ý các bước:**
1. Tính $\bar{x}$.
2. Tính $\sum n_ix_i^2$ và chia cho $25$.
3. Trừ $\bar{x}^2$ rồi khai căn.

::solution
$$\bar{x}=\frac{0+6+16+15+8}{25}=\frac{45}{25}=1{,}8,\qquad \frac{0+6+32+45+32}{25}=\frac{115}{25}=4{,}6,$$
$$s^2=4{,}6-1{,}8^2=4{,}6-3{,}24=1{,}36,\qquad s\approx1{,}166.$$

**Đáp số.** $1{,}17$.
:::

:::exercise Thử thách
Mẫu số liệu $4, 6, 8, 10, x$ có số trung bình cộng bằng $8$. Tìm $x$ và phương sai của mẫu.

::hint
**Kiến thức:** tổng $=n\cdot\bar{x}$; định nghĩa phương sai.

**Gợi ý các bước:**
1. Lập phương trình từ tổng để tìm $x$.
2. Tính các độ lệch so với $8$.

::solution
$4+6+8+10+x=40$, nên $x=12$. Các độ lệch là $-4, -2, 0, 2, 4$:
$$s^2=\frac{16+4+0+4+16}{5}=8.$$

**Đáp số.** $x=12$, $s^2=8$.
:::

:::exercise Thử thách
Một mẫu gồm bốn số có tổng bằng $20$ và tổng các bình phương bằng $120$. Tính phương sai của mẫu.

::hint
**Kiến thức:** $s^2=\dfrac{\sum x_i^2}{n}-\bar{x}^2$ không cần biết từng giá trị.

**Gợi ý các bước:**
1. Tính $\bar{x}$ từ tổng.
2. Thay vào công thức thứ hai.

::solution
$$\bar{x}=\frac{20}{4}=5,\qquad s^2=\frac{120}{4}-5^2=30-25=5.$$

**Đáp số.** $s^2=5$.
:::

## Kiểm tra mini

:::quiz
::mc
Khoảng biến thiên của mẫu số liệu $12, 7, 15, 9, 20, 11$ là
A. $13$.
B. $20$.
C. $9$.
D. $27$.
::key A
$R=x_{\max}-x_{\min}=20-7=13$. Phương án C lấy hiệu của giá trị lớn nhất với giá trị cuối cùng ($20-11$) thay vì giá trị nhỏ nhất.

::mc
Phương sai của mẫu số liệu $2, 4, 6$ là
A. $4$.
B. $\dfrac83$.
C. $\sqrt{\dfrac83}$.
D. $0$.
::key B
$\bar x=4$, các độ lệch là $-2, 0, 2$, nên $s^2=\dfrac{4+0+4}{3}=\dfrac83$. Phương án A chia cho $n-1=2$; C là độ lệch chuẩn; D là trung bình của các độ lệch (chưa bình phương).

::mc
Khoảng tứ phân vị của mẫu số liệu $1, 2, 4, 5, 7, 8, 10, 12$ là
A. $11$.
B. $6$.
C. $9$.
D. $3$.
::key B
Nửa dưới $1, 2, 4, 5$ cho $Q_1=3$; nửa trên $7, 8, 10, 12$ cho $Q_3=9$. Vậy $\Delta_Q=9-3=6$. Phương án A là khoảng biến thiên; C và D chỉ là $Q_3$ và $Q_1$.

::mc
Một mẫu số liệu có $Q_1=10$ và $Q_3=14$. Giá trị nào sau đây là giá trị ngoại lệ?
A. $5$.
B. $19$.
C. $21$.
D. $15$.
::key C
$\Delta_Q=4$, $1{,}5\,\Delta_Q=6$, nên hai ngưỡng là $10-6=4$ và $14+6=20$. Chỉ có $21>20$. Phương án A và B là ngoại lệ nếu dùng nhầm ngưỡng $Q_1-\Delta_Q$ và $Q_3+\Delta_Q$.

::tf
Cho mẫu số liệu $5, 7, 8, 9, 11$.
a) Số trung bình cộng bằng $8$.
b) Phương sai bằng $5$.
c) Độ lệch chuẩn bằng $2$.
d) Nếu nhân mỗi giá trị với $3$ thì phương sai của mẫu mới bằng $36$.
::key Đ S Đ Đ
a) Đúng: $\dfrac{40}{5}=8$. b) Sai: bình phương các độ lệch là $9, 1, 0, 1, 9$, tổng $20$, nên $s^2=\dfrac{20}{5}=4$ (giá trị $5$ là do chia cho $4$). c) Đúng: $s=\sqrt4=2$. d) Đúng: mọi độ lệch gấp $3$ lần nên phương sai gấp $9$ lần: $36$.

::sa
Trong $10$ ngày, có $2$ ngày cửa hàng bán được $1$ chiếc tủ lạnh, $5$ ngày bán được $2$ chiếc và $3$ ngày bán được $3$ chiếc. Tính phương sai của số tủ lạnh bán được mỗi ngày.
::key 0,49
$\bar x=\dfrac{2\cdot1+5\cdot2+3\cdot3}{10}=2{,}1$; trung bình các bình phương là $\dfrac{2\cdot1+5\cdot4+3\cdot9}{10}=4{,}9$. Vậy $s^2=4{,}9-2{,}1^2=0{,}49$.

::sa
Tính độ lệch chuẩn của mẫu số liệu $10, 12, 14, 16, 18$ (làm tròn đến hàng phần trăm).
::key 2,83
$\bar x=14$, các độ lệch là $-4, -2, 0, 2, 4$, nên $s^2=\dfrac{16+4+0+4+16}{5}=8$ và $s=\sqrt8\approx2{,}83$.
:::
