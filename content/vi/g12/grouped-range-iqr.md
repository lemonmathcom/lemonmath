---
title: Khoảng biến thiên và khoảng tứ phân vị
description: Tính khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm, dùng chúng để so sánh độ phân tán của hai mẫu và hiểu ý nghĩa thực tế.
minutes: 20
---

:::goals
- Tính khoảng biến thiên $R$ của mẫu số liệu ghép nhóm.
- Tính tứ phân vị $Q_1$, $Q_3$ và khoảng tứ phân vị $\Delta_Q$ của mẫu số liệu ghép nhóm.
- So sánh độ phân tán của hai mẫu số liệu ghép nhóm và giải thích ý nghĩa.
- Hiểu vì sao các số đo này chỉ là giá trị xấp xỉ của số đo của mẫu số liệu gốc.
:::

Nhà trường khảo sát thời gian đi từ nhà đến trường của học sinh hai lớp 12A và 12B, mỗi lớp $40$ bạn. Kết quả được ghép nhóm như sau.

| Thời gian (phút) | $[0; 10)$ | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ | $[40; 50)$ |
|---|---|---|---|---|---|
| Lớp 12A | $4$ | $12$ | $12$ | $8$ | $4$ |
| Lớp 12B | $2$ | $6$ | $24$ | $6$ | $2$ |

Ở cả hai lớp, thời gian trải từ $0$ đến $50$ phút. Vậy lớp nào có thời gian đi học đồng đều hơn, và ta đo điều đó bằng con số nào?

Ở lớp 10, ta đã đo độ phân tán của số liệu gốc. Bài này làm điều tương tự khi chỉ có bảng ghép nhóm.

## Khoảng biến thiên của mẫu số liệu ghép nhóm

### Khám phá: ta biết gì về giá trị lớn nhất và nhỏ nhất?

Từ bảng của lớp 12A, ta không biết chính xác thời gian của từng bạn. Ta chỉ biết bạn đi nhanh nhất nằm trong nhóm $[0; 10)$ và bạn đi lâu nhất nằm trong nhóm $[40; 50)$. Do đó hiệu giữa hai giá trị đó không vượt quá $50-0=50$ phút. Ta lấy con số $50$ làm khoảng biến thiên của mẫu ghép nhóm.

Trong bài, mẫu số liệu ghép nhóm có $k$ nhóm $[u_1; u_2)$, $[u_2; u_3)$, …, $[u_k; u_{k+1})$ với tần số $n_1$, $n_2$, …, $n_k$ và cỡ mẫu $n=n_1+n_2+\cdots+n_k$. Ta giả sử nhóm đầu và nhóm cuối có tần số khác $0$.

:::definition Khoảng biến thiên
Khoảng biến thiên của mẫu số liệu ghép nhóm là
$$R=u_{k+1}-u_1,$$
tức là đầu mút phải của nhóm cuối trừ đầu mút trái của nhóm đầu.
:::

Với cả hai lớp, $R=50-0=50$ phút. Khoảng biến thiên **không** phân biệt được hai lớp, vì nó chỉ phụ thuộc vào hai nhóm ở hai đầu. Ta cần một số đo nhìn vào phần giữa của số liệu.

## Khoảng tứ phân vị

Ở lớp 11, ta đã tính tứ phân vị của mẫu ghép nhóm bằng cách "chia đều" các giá trị trong nhóm chứa nó. Nhắc lại: tứ phân vị thứ nhất $Q_1$ nằm ở vị trí thứ $\frac n4$, tứ phân vị thứ ba $Q_3$ ở vị trí thứ $\frac{3n}{4}$.

:::theorem Tứ phân vị của mẫu số liệu ghép nhóm
Gọi $[u_m; u_{m+1})$ là **nhóm đầu tiên có tần số tích luỹ lớn hơn hoặc bằng $\frac n4$**, $n_m$ là tần số của nó và $C=n_1+\cdots+n_{m-1}$ là tần số tích luỹ của các nhóm đứng trước. Khi đó
$$Q_1=u_m+\frac{\frac n4-C}{n_m}\cdot(u_{m+1}-u_m).$$
$Q_3$ tính giống hệt, chỉ thay $\frac n4$ bằng $\frac{3n}{4}$ (và chọn nhóm theo $\frac{3n}{4}$).
:::

Phân số $\dfrac{\frac n4-C}{n_m}$ cho biết vị trí thứ $\frac n4$ đi được bao nhiêu phần của nhóm đó. Chẳng hạn nhóm có $12$ giá trị, cần đi thêm $6$ giá trị nữa, thì $Q_1$ nằm ở giữa nhóm.

:::definition Khoảng tứ phân vị
Khoảng tứ phân vị của mẫu số liệu ghép nhóm là $\Delta_Q=Q_3-Q_1$. Khoảng từ $Q_1$ đến $Q_3$ chứa khoảng một nửa số liệu nằm ở giữa; $\Delta_Q$ càng nhỏ thì phần giữa của số liệu càng tập trung.
:::

Ví dụ đầu tiên tính đủ các số đo cho lớp 12A.

:::example Lớp 12A
Tính $R$, $Q_1$, $Q_3$ và $\Delta_Q$ cho thời gian đi học của lớp 12A.

**Lời giải.** Cỡ mẫu $n=40$ và các tần số tích luỹ là $4$, $16$, $28$, $36$, $40$. Trước hết $R=50-0=50$.

Ta có $\frac n4=10$. Vì $4<10\le16$, nhóm chứa $Q_1$ là $[10; 20)$, với $C=4$, $n_m=12$:

$$Q_1=10+\frac{10-4}{12}\cdot10=10+5=15.$$

Ta có $\frac{3n}{4}=30$. Vì $28<30\le36$, nhóm chứa $Q_3$ là $[30; 40)$, với $C=28$, $n_m=8$:

$$Q_3=30+\frac{30-28}{8}\cdot10=30+2{,}5=32{,}5.$$

Vậy $R=50$ phút, $Q_1=15$, $Q_3=32{,}5$ và $\Delta_Q=32{,}5-15=17{,}5$ phút. Khoảng một nửa số học sinh lớp 12A mất từ $15$ đến $32{,}5$ phút để đến trường.
:::

Làm tương tự cho lớp 12B, ta trả lời được câu hỏi ở đầu bài.

:::example So sánh hai lớp
Tính $\Delta_Q$ cho lớp 12B và so sánh với lớp 12A.

**Lời giải.** Các tần số tích luỹ của lớp 12B là $2$, $8$, $32$, $38$, $40$. Cả hai vị trí $10$ và $30$ đều thoả mãn $8<\text{vị trí}\le32$, nên $Q_1$ và $Q_3$ cùng nằm trong nhóm $[20; 30)$, với $C=8$, $n_m=24$:

$$\begin{aligned}
Q_1&=20+\frac{10-8}{24}\cdot10=20+\frac56\approx20{,}83,\\
Q_3&=20+\frac{30-8}{24}\cdot10=20+\frac{55}{6}\approx29{,}17.
\end{aligned}$$

Do đó $\Delta_Q=\dfrac{55}{6}-\dfrac56=\dfrac{50}{6}\approx8{,}33$ phút.

| | $R$ | $Q_1$ | $Q_3$ | $\Delta_Q$ |
|---|---|---|---|---|
| Lớp 12A | $50$ | $15$ | $32{,}5$ | $17{,}5$ |
| Lớp 12B | $50$ | $20{,}83$ | $29{,}17$ | $8{,}33$ |

Hai lớp có cùng khoảng biến thiên, nhưng khoảng tứ phân vị của 12B chỉ bằng khoảng một nửa của 12A. Vậy thời gian đi học của lớp 12B đồng đều hơn.
:::

Khi $\frac n4$ không phải số nguyên, công thức vẫn dùng như cũ. Độ rộng nhóm cũng không nhất thiết bằng $10$.

:::example Chiều cao cây giống
Chiều cao (cm) của $50$ cây giống trong một vườn ươm được cho trong bảng. Tính $R$ và $\Delta_Q$.

| Chiều cao (cm) | $[10; 14)$ | $[14; 18)$ | $[18; 22)$ | $[22; 26)$ | $[26; 30)$ |
|---|---|---|---|---|---|
| Số cây | $6$ | $10$ | $16$ | $12$ | $6$ |

**Lời giải.** Ta có $R=30-10=20$ cm. Các tần số tích luỹ là $6$, $16$, $32$, $44$, $50$; độ rộng mỗi nhóm là $4$.

Với $\frac n4=12{,}5$: vì $6<12{,}5\le16$, nhóm chứa $Q_1$ là $[14; 18)$:

$$Q_1=14+\frac{12{,}5-6}{10}\cdot4=14+2{,}6=16{,}6.$$

Với $\frac{3n}{4}=37{,}5$: vì $32<37{,}5\le44$, nhóm chứa $Q_3$ là $[22; 26)$:

$$Q_3=22+\frac{37{,}5-32}{12}\cdot4=22+\frac{11}{6}\approx23{,}83.$$

Vậy $R=20$ cm và $\Delta_Q\approx23{,}83-16{,}6=7{,}23$ cm.
:::

:::note Giá trị bất thường
Giống như ở lớp 10, có thể coi một giá trị là **bất thường** nếu nó nhỏ hơn $Q_1-1{,}5\,\Delta_Q$ hoặc lớn hơn $Q_3+1{,}5\,\Delta_Q$. Với vườn ươm trên, hai ngưỡng là khoảng $5{,}75$ cm và $34{,}68$ cm: một cây cao $36$ cm sẽ đáng được kiểm tra lại.
:::

## Số đo của mẫu ghép nhóm chỉ là xấp xỉ

Khi ghép nhóm, ta mất thông tin về từng giá trị. Ví dụ sau so sánh số đo tính từ số liệu gốc với số đo tính từ bảng ghép nhóm.

:::example Số liệu gốc và số liệu ghép nhóm
Thời gian đi học (phút) của $20$ học sinh, đã sắp xếp:
$$5,\ 8,\ 12,\ 14,\ 15,\ 17,\ 18,\ 19,\ 21,\ 22,\ 23,\ 24,\ 25,\ 26,\ 28,\ 31,\ 33,\ 36,\ 41,\ 47.$$
a) Tính $R$ và $\Delta_Q$ từ số liệu gốc. b) Ghép thành các nhóm $[0; 10)$, …, $[40; 50)$ rồi tính lại.

**Lời giải.** a) Với số liệu gốc (cách của lớp 10): $R=47-5=42$. Nửa dưới gồm $10$ giá trị đầu, nửa trên gồm $10$ giá trị cuối:

$$Q_1=\frac{15+17}{2}=16,\qquad Q_3=\frac{28+31}{2}=29{,}5,\qquad \Delta_Q=13{,}5.$$

b) Đếm số giá trị trong mỗi nhóm, ta được các tần số $2$, $6$, $7$, $3$, $2$ (tần số tích luỹ $2$, $8$, $15$, $18$, $20$). Khi đó $R=50-0=50$. Với $\frac n4=5$ và $\frac{3n}{4}=15$:

$$Q_1=10+\frac{5-2}{6}\cdot10=15,\qquad Q_3=20+\frac{15-8}{7}\cdot10=30,\qquad \Delta_Q=15.$$

Vậy từ bảng ghép nhóm ta được $R=50$ (thật là $42$) và $\Delta_Q=15$ (thật là $13{,}5$). Các số đo của mẫu ghép nhóm là **giá trị xấp xỉ** cho số đo của mẫu gốc; $\Delta_Q$ gần hơn nhiều so với $R$.
:::

:::warning Những sai lầm thường gặp
- **Sai đầu mút khi tính $R$.** Sai: với lớp 12A, $R=40-0=40$ (lấy đầu mút trái của nhóm cuối). Vì sao sai: giá trị lớn nhất có thể gần $50$. Đúng: $R=u_{k+1}-u_1=50$.
- **Lấy $C$ gồm cả nhóm chứa tứ phân vị.** Sai: $Q_1=10+\frac{10-16}{12}\cdot10=5$, nhỏ hơn cả đầu mút $10$ của nhóm. Đúng: $C$ chỉ gồm các nhóm **đứng trước**, $C=4$, nên $Q_1=15$.
- **Chọn nhóm có tần số lớn nhất.** Sai: với lớp 12A, cho $Q_1$ nằm trong $[10; 20)$ hay $[20; 30)$ vì "chúng có tần số $12$". Đúng: chọn nhóm đầu tiên có tần số tích luỹ $\ge\frac n4$.
- **Quên nhân với độ rộng nhóm.** Sai: ở vườn ươm, $Q_1=14+\frac{6{,}5}{10}=14{,}65$. Đúng: nhân với độ rộng $4$, $Q_1=16{,}6$.
:::

## Thuật ngữ

:::terms
- mẫu số liệu ghép nhóm | grouped data
- nhóm số liệu | class
- tần số | frequency
- tần số tích luỹ | cumulative frequency
- độ rộng nhóm | class width
- khoảng biến thiên | range
- tứ phân vị | quartile
- khoảng tứ phân vị | interquartile range
- giá trị bất thường | outlier
- giá trị xấp xỉ | approximate value
:::

## Tóm tắt

- Mẫu ghép nhóm $[u_1; u_2)$, …, $[u_k; u_{k+1})$, tần số $n_1$, …, $n_k$, cỡ mẫu $n$.
- $R=u_{k+1}-u_1$ (đầu mút phải nhóm cuối trừ đầu mút trái nhóm đầu).
- $Q_1=u_m+\dfrac{\frac n4-C}{n_m}(u_{m+1}-u_m)$, với nhóm $m$ là nhóm đầu tiên có tần số tích luỹ $\ge\frac n4$, $C$ là tần số tích luỹ của các nhóm trước nó; $Q_3$: thay $\frac n4$ bằng $\frac{3n}{4}$.
- $\Delta_Q=Q_3-Q_1$: độ rộng của nửa số liệu ở giữa; nhỏ hơn thì đồng đều hơn.
- Đây là các giá trị xấp xỉ; $\Delta_Q$ ít bị ảnh hưởng bởi hai nhóm ở hai đầu hơn $R$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Khối lượng (g) của $40$ quả táo được cho trong bảng. Tính $R$, $Q_1$, $Q_3$ và $\Delta_Q$.

| Khối lượng (g) | $[150; 160)$ | $[160; 170)$ | $[170; 180)$ | $[180; 190)$ | $[190; 200)$ |
|---|---|---|---|---|---|
| Số quả | $4$ | $10$ | $14$ | $8$ | $4$ |

::hint
**Kiến thức:** $R=u_{k+1}-u_1$; công thức $Q_1$, $Q_3$ của mẫu ghép nhóm.

**Gợi ý các bước:**
1. Lập dãy tần số tích luỹ.
2. Tìm nhóm chứa vị trí $10$ và vị trí $30$.
3. Thay vào công thức.

::solution
Tần số tích luỹ: $4$, $14$, $28$, $36$, $40$; $R=200-150=50$.
$$Q_1=160+\frac{10-4}{10}\cdot10=166,\qquad Q_3=180+\frac{30-28}{8}\cdot10=182{,}5.$$

**Đáp số.** $R=50$ g, $Q_1=166$, $Q_3=182{,}5$, $\Delta_Q=16{,}5$ g.
:::

:::exercise
Thời gian đọc sách mỗi ngày (phút) của $50$ học sinh được cho trong bảng. Tính $Q_1$, $Q_3$ và $\Delta_Q$ (làm tròn đến hàng phần trăm).

| Thời gian (phút) | $[0; 20)$ | $[20; 40)$ | $[40; 60)$ | $[60; 80)$ | $[80; 100)$ |
|---|---|---|---|---|---|
| Số học sinh | $5$ | $9$ | $16$ | $12$ | $8$ |

::hint
**Kiến thức:** vị trí của $Q_1$ là $\frac n4=12{,}5$, của $Q_3$ là $\frac{3n}{4}=37{,}5$; độ rộng nhóm là $20$.

**Gợi ý các bước:**
1. Tần số tích luỹ: $5$, $14$, $30$, $42$, $50$.
2. Chọn nhóm cho mỗi vị trí và thay vào công thức.

::solution
$$Q_1=20+\frac{12{,}5-5}{9}\cdot20=20+\frac{50}{3}\approx36{,}67,\qquad Q_3=60+\frac{37{,}5-30}{12}\cdot20=72{,}5.$$

**Đáp số.** $Q_1\approx36{,}67$; $Q_3=72{,}5$; $\Delta_Q\approx35{,}83$ phút.
:::

:::exercise
Một cửa hàng thử thời lượng pin (giờ) của $50$ chiếc điện thoại mỗi loại X và Y.

| Thời lượng (giờ) | $[8; 10)$ | $[10; 12)$ | $[12; 14)$ | $[14; 16)$ | $[16; 18)$ |
|---|---|---|---|---|---|
| Loại X | $3$ | $10$ | $24$ | $10$ | $3$ |
| Loại Y | $8$ | $12$ | $10$ | $12$ | $8$ |

Tính khoảng tứ phân vị của mỗi loại. Nếu khách hàng cần thời lượng pin ổn định, nên chọn loại nào?

::hint
**Kiến thức:** $\Delta_Q$ nhỏ hơn thì số liệu ở giữa tập trung hơn.

**Gợi ý các bước:**
1. Vị trí $12{,}5$ và $37{,}5$; lập tần số tích luỹ cho từng loại.
2. Tính $Q_1$, $Q_3$ rồi $\Delta_Q$ cho mỗi loại và so sánh.

::solution
Loại X (tích luỹ $3$, $13$, $37$, $47$, $50$):
$$Q_1=10+\frac{12{,}5-3}{10}\cdot2=11{,}9,\qquad Q_3=14+\frac{37{,}5-37}{10}\cdot2=14{,}1,\qquad \Delta_Q=2{,}2.$$
Loại Y (tích luỹ $8$, $20$, $30$, $42$, $50$):
$$Q_1=10+\frac{12{,}5-8}{12}\cdot2=10{,}75,\qquad Q_3=14+\frac{37{,}5-30}{12}\cdot2=15{,}25,\qquad \Delta_Q=4{,}5.$$
Hai loại có cùng $R=10$ giờ, nhưng $\Delta_Q$ của X nhỏ hơn nhiều.

**Đáp số.** $\Delta_Q=2{,}2$ giờ (X) và $4{,}5$ giờ (Y); nên chọn loại X.
:::

:::exercise
Số giờ tập thể dục mỗi tuần của $30$ học sinh được cho trong bảng.

| Số giờ | $[0; 2)$ | $[2; 4)$ | $[4; 6)$ | $[6; 8)$ | $[8; 10)$ |
|---|---|---|---|---|---|
| Số học sinh | $3$ | $7$ | $10$ | $6$ | $4$ |

Mỗi khẳng định sau đúng hay sai?

a) Khoảng biến thiên của mẫu số liệu bằng $10$.

b) Tứ phân vị thứ nhất thuộc nhóm $[2; 4)$.

c) $Q_3\approx6{,}83$.

d) Khoảng tứ phân vị lớn hơn $4$.

::hint
**Kiến thức:** $R=u_{k+1}-u_1$; nhóm chứa $Q_1$ là nhóm đầu tiên có tần số tích luỹ $\ge\frac n4$.

**Gợi ý các bước:**
1. Tần số tích luỹ: $3$, $10$, $20$, $26$, $30$; $\frac n4=7{,}5$, $\frac{3n}{4}=22{,}5$.
2. Tính $Q_1$, $Q_3$ rồi $\Delta_Q$.

::solution
a) **Đúng.** $R=10-0=10$.

b) **Đúng.** $3<7{,}5\le10$, và $Q_1=2+\dfrac{7{,}5-3}{7}\cdot2=\dfrac{23}{7}\approx3{,}29$.

c) **Đúng.** $20<22{,}5\le26$, nên $Q_3=6+\dfrac{22{,}5-20}{6}\cdot2=\dfrac{41}{6}\approx6{,}83$.

d) **Sai.** $\Delta_Q=\dfrac{41}{6}-\dfrac{23}{7}=\dfrac{149}{42}\approx3{,}55<4$.

**Đáp số.** a) Đúng; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Cân nặng (kg) của $40$ học sinh được cho trong bảng. Tính khoảng tứ phân vị (đơn vị: kg, làm tròn đến hàng phần trăm).

| Cân nặng (kg) | $[40; 45)$ | $[45; 50)$ | $[50; 55)$ | $[55; 60)$ | $[60; 65)$ |
|---|---|---|---|---|---|
| Số học sinh | $4$ | $9$ | $15$ | $8$ | $4$ |

::hint
**Kiến thức:** công thức $Q_1$, $Q_3$; độ rộng nhóm là $5$.

**Gợi ý các bước:**
1. Tần số tích luỹ: $4$, $13$, $28$, $36$, $40$.
2. Vị trí $10$ thuộc $[45; 50)$, vị trí $30$ thuộc $[55; 60)$.

::solution
$$Q_1=45+\frac{10-4}{9}\cdot5=\frac{145}{3}\approx48{,}33,\qquad Q_3=55+\frac{30-28}{8}\cdot5=56{,}25.$$
$$\Delta_Q=56{,}25-\frac{145}{3}\approx7{,}9167.$$

**Đáp số.** $7{,}92$.
:::

:::exercise
(Ôn lại trung vị của mẫu số liệu ghép nhóm, lớp 11.) Với bảng khối lượng táo ở Bài 1, tính trung vị $M_e$ và kiểm tra rằng $Q_1<M_e<Q_3$.

::hint
**Kiến thức:** $M_e$ tính như $Q_1$ nhưng với vị trí $\frac n2$.

**Gợi ý các bước:**
1. $\frac n2=20$; tần số tích luỹ $4$, $14$, $28$, …
2. Nhóm chứa $M_e$ là $[170; 180)$, với $C=14$, $n_m=14$.

::solution
$$M_e=170+\frac{20-14}{14}\cdot10=170+\frac{30}{7}\approx174{,}29.$$
Vì $166<174{,}29<182{,}5$, ta có $Q_1<M_e<Q_3$.

**Đáp số.** $M_e\approx174{,}29$ g.
:::

:::exercise
(Ôn lại [Các số đặc trưng đo độ phân tán](lesson:dispersion).) Cho mẫu số liệu gốc $3, 7, 8, 11, 12, 14, 15, 16, 18, 21, 24, 29$.

a) Tính $R$ và $\Delta_Q$ của mẫu số liệu gốc.

b) Ghép thành ba nhóm $[0; 10)$, $[10; 20)$, $[20; 30)$ rồi tính $R$ và $\Delta_Q$ của mẫu ghép nhóm.

::hint
**Kiến thức:** với $n=12$ chẵn, mỗi nửa có $6$ giá trị (lớp 10); công thức của mẫu ghép nhóm.

**Gợi ý các bước:**
1. a) $Q_1$ là trung vị của $6$ giá trị đầu, $Q_3$ là trung vị của $6$ giá trị cuối.
2. b) Đếm tần số mỗi nhóm; vị trí $3$ và $9$.

::solution
a) $R=29-3=26$; $Q_1=\dfrac{8+11}{2}=9{,}5$, $Q_3=\dfrac{18+21}{2}=19{,}5$, $\Delta_Q=10$.

b) Tần số $3$, $6$, $3$ (tích luỹ $3$, $9$, $12$), $R=30$.
$$Q_1=0+\frac{3-0}{3}\cdot10=10,\qquad Q_3=10+\frac{9-3}{6}\cdot10=20,\qquad \Delta_Q=10.$$

**Đáp số.** a) $R=26$, $\Delta_Q=10$; b) $R=30$, $\Delta_Q=10$. Ở đây $\Delta_Q$ xấp xỉ rất tốt, còn $R$ thì lớn hơn thực tế.
:::

:::exercise
Ở lớp 12A (Ví dụ 1), ta có $Q_1=15$ và $Q_3=32{,}5$ phút. Một học sinh mới chuyển đến lớp mất $62$ phút để đến trường. Theo quy tắc $1{,}5\,\Delta_Q$, thời gian này có bất thường không?

::hint
**Kiến thức:** giá trị bất thường nếu lớn hơn $Q_3+1{,}5\,\Delta_Q$ hoặc nhỏ hơn $Q_1-1{,}5\,\Delta_Q$.

**Gợi ý các bước:**
1. Tính $\Delta_Q$ và $1{,}5\,\Delta_Q$.
2. Tính ngưỡng trên và so sánh với $62$.

::solution
$\Delta_Q=17{,}5$ và $1{,}5\,\Delta_Q=26{,}25$. Ngưỡng trên là
$$Q_3+1{,}5\,\Delta_Q=32{,}5+26{,}25=58{,}75<62.$$

**Đáp số.** Có, $62$ phút là giá trị bất thường so với lớp.
:::

:::exercise Thử thách
Một mẫu số liệu ghép nhóm có bảng tần số sau, với $x$ là số nguyên dương chưa biết.

| Nhóm | $[0; 10)$ | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ |
|---|---|---|---|---|
| Tần số | $4$ | $x$ | $10$ | $6$ |

Biết $Q_1=13{,}75$ và $Q_1$ thuộc nhóm $[10; 20)$. Tìm $x$.

::hint
**Kiến thức:** $n=20+x$; $Q_1=u_m+\dfrac{\frac n4-C}{n_m}\cdot h$.

**Gợi ý các bước:**
1. Viết $Q_1$ theo $x$ với $u_m=10$, $C=4$, $n_m=x$, $h=10$.
2. Giải phương trình rồi kiểm tra điều kiện chọn nhóm.

::solution
$$10+\frac{\frac{20+x}{4}-4}{x}\cdot10=13{,}75\iff\frac{x+4}{4x}\cdot10=3{,}75\iff 10x+40=15x\iff x=8.$$
**Kiểm tra.** $n=28$, $\frac n4=7$ và $4<7\le12$, nên $Q_1$ đúng là thuộc $[10; 20)$: $Q_1=10+\frac{7-4}{8}\cdot10=13{,}75$.

**Đáp số.** $x=8$.
:::

## Kiểm tra mini

:::quiz
::mc
Thời gian chờ xe buýt (phút) của $40$ hành khách được cho trong bảng sau. Khoảng biến thiên của mẫu số liệu ghép nhóm này là

| Thời gian (phút) | $[0; 5)$ | $[5; 10)$ | $[10; 15)$ | $[15; 20)$ | $[20; 25)$ |
|---|---|---|---|---|---|
| Số hành khách | $6$ | $14$ | $12$ | $4$ | $4$ |

A. $5$ phút.
B. $20$ phút.
C. $25$ phút.
D. $10$ phút.
::key C
$R=u_{k+1}-u_1=25-0=25$. Phương án B lấy đầu trái của nhóm cuối, phương án A là độ rộng một nhóm, phương án D là hiệu hai tần số $14-4$.

::mc
Với mẫu số liệu ở Câu 1, nhóm chứa tứ phân vị thứ ba $Q_3$ là
A. $[5; 10)$.
B. $[10; 15)$.
C. $[15; 20)$.
D. $[20; 25)$.
::key B
Các tần số tích luỹ là $6$, $20$, $32$, $36$, $40$ và $\frac{3n}{4}=30$ nằm giữa $20$ và $32$, nên $Q_3$ thuộc nhóm $[10; 15)$ (cụ thể $Q_3=10+\dfrac{30-20}{12}\cdot5\approx14{,}17$). Phương án A là nhóm có tần số lớn nhất; phương án C và D là các nhóm nằm sau giá trị thứ $30$.

::mc
Với mẫu số liệu ở Câu 1, giá trị gần đúng nhất của tứ phân vị thứ nhất $Q_1$ là
A. $8{,}33$.
B. $5{,}29$.
C. $1{,}43$.
D. $6{,}43$.
::key D
$\frac n4=10$ nằm trong nhóm $[5; 10)$ với $C=6$, $n_m=14$: $Q_1=5+\dfrac{10-6}{14}\cdot5\approx6{,}43$. Phương án B quên nhân với độ rộng $5$, phương án C tính $C$ gồm cả nhóm chứa $Q_1$, phương án A dùng nhầm nhóm $[0; 5)$.

::mc
Theo quy tắc dùng khoảng tứ phân vị, một giá trị $x$ của mẫu số liệu được coi là giá trị bất thường nếu
A. $x<Q_1-1{,}5\,\Delta_Q$ hoặc $x>Q_3+1{,}5\,\Delta_Q$.
B. $x<Q_1$ hoặc $x>Q_3$.
C. $x<Q_1-1{,}5\,R$ hoặc $x>Q_3+1{,}5\,R$.
D. $Q_1-1{,}5\,\Delta_Q<x<Q_3+1{,}5\,\Delta_Q$.
::key A
Giá trị bất thường nằm xa phần giữa của mẫu số liệu hơn $1{,}5$ lần khoảng tứ phân vị. Phương án B coi cả một nửa số liệu là bất thường; phương án D mô tả các giá trị bình thường.

::tf
Thời gian chạy $100$ m (giây) của $32$ học sinh được cho trong bảng sau.

| Thời gian (giây) | $[12; 14)$ | $[14; 16)$ | $[16; 18)$ | $[18; 20)$ | $[20; 22)$ |
|---|---|---|---|---|---|
| Số học sinh | $4$ | $8$ | $10$ | $8$ | $2$ |

a) Khoảng biến thiên của mẫu số liệu là $10$ giây.
b) $Q_1=15$.
c) Tứ phân vị thứ ba $Q_3$ thuộc nhóm $[16; 18)$.
d) Theo quy tắc $1{,}5\,\Delta_Q$, thời gian $24$ giây là giá trị bất thường.
::key Đ Đ S Đ
a) Đúng: $22-12=10$. b) Đúng: tần số tích luỹ $4$, $12$, $22$, $30$, $32$; $Q_1=14+\dfrac{8-4}{8}\cdot2=15$. c) Sai: $\frac{3n}{4}=24$ nằm giữa $22$ và $30$, nên $Q_3$ thuộc nhóm $[18; 20)$: $Q_3=18+\dfrac{24-22}{8}\cdot2=18{,}5$. d) Đúng: $\Delta_Q=18{,}5-15=3{,}5$ và $Q_3+1{,}5\cdot3{,}5=23{,}75<24$.

::sa
Lượng điện tiêu thụ trong một tháng (kWh) của $80$ hộ gia đình được cho trong bảng sau. Tính khoảng tứ phân vị của mẫu số liệu (làm tròn kết quả đến hàng phần mười).

| Điện tiêu thụ (kWh) | $[50; 100)$ | $[100; 150)$ | $[150; 200)$ | $[200; 250)$ | $[250; 300)$ |
|---|---|---|---|---|---|
| Số hộ | $8$ | $20$ | $28$ | $16$ | $8$ |

::key 82,5
Tần số tích luỹ $8$, $28$, $56$, $72$, $80$. $Q_1=100+\dfrac{20-8}{20}\cdot50=130$, $Q_3=200+\dfrac{60-56}{16}\cdot50=212{,}5$, nên $\Delta_Q=82{,}5$ kWh.

::sa
Với mẫu số liệu ở câu trước, theo quy tắc $1{,}5\,\Delta_Q$, một hộ dùng nhiều hơn bao nhiêu kWh điện trong tháng thì được coi là bất thường (làm tròn kết quả đến hàng đơn vị)?
::key 336
Ngưỡng trên là $Q_3+1{,}5\,\Delta_Q=212{,}5+1{,}5\cdot82{,}5=336{,}25$, làm tròn được $336$ kWh.
:::
