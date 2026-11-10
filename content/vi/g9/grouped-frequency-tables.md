---
title: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ
description: Ghép nhóm số liệu, lập bảng tần số và tần số tương đối ghép nhóm, vẽ và đọc biểu đồ dạng cột liền nhau và dạng đoạn thẳng.
minutes: 20
---

:::goals
- Hiểu vì sao và khi nào cần ghép nhóm số liệu; biết nhóm $[a; b)$, độ dài nhóm, giá trị đại diện của nhóm.
- Lập được bảng tần số ghép nhóm và bảng tần số tương đối ghép nhóm.
- Vẽ và đọc được biểu đồ tần số (tương đối) ghép nhóm dạng cột và dạng đoạn thẳng.
:::

Giả sử thầy giáo thể dục đo chiều cao (cm) của 20 bạn trong đội tuyển điền kinh:

$$154,\ 161,\ 164,\ 151,\ 161,\ 155,\ 153,\ 163,\ 159,\ 159,\ 154,\ 149,\ 155,\ 146,\ 158,\ 168,\ 169,\ 159,\ 152,\ 157.$$

Nếu lập bảng tần số như bài trước, ta được tới 15 giá trị khác nhau, phần lớn chỉ xuất hiện một lần: bảng dài mà chẳng cho thấy gì. Trong khi thầy chỉ cần biết "bao nhiêu bạn cao từ 155 cm đến dưới 160 cm" để chọn cỡ áo. Làm sao để bảng vừa gọn vừa nói được điều cần nói?

## Ghép nhóm số liệu

### Khám phá: gom theo từng khoảng 5 cm

Ta chia các chiều cao vào các khoảng dài 5 cm rồi đếm:

| Chiều cao (cm) | $[145; 150)$ | $[150; 155)$ | $[155; 160)$ | $[160; 165)$ | $[165; 170)$ |
|---|---|---|---|---|---|
| Số bạn | $2$ | $5$ | $7$ | $4$ | $2$ |

Kí hiệu $[155; 160)$ gồm các số $x$ với $155\leq x<160$: bạn cao $155$ cm thuộc nhóm này, còn bạn cao $160$ cm thuộc nhóm sau. Bây giờ ta thấy ngay: nhóm $[155; 160)$ đông nhất, với $7$ bạn.

:::definition Mẫu số liệu ghép nhóm
- Ghép nhóm là chia các số liệu vào các **nhóm** $[a_1; a_2), [a_2; a_3), \ldots, [a_k; a_{k+1})$, mỗi số liệu thuộc đúng một nhóm. Với nhóm $[a; b)$: $a$ là **đầu mút trái**, $b$ là **đầu mút phải**, $b-a$ là **độ dài nhóm**, $\dfrac{a+b}{2}$ là **giá trị đại diện** của nhóm (số chính giữa nhóm trên trục số).
- **Tần số** của một nhóm là số số liệu thuộc nhóm đó. **Tần số tương đối** của nhóm thứ $i$ là $f_i=\dfrac{m_i}{n}\cdot100\%$.
- **Bảng tần số ghép nhóm** (**bảng tần số tương đối ghép nhóm**) ghi các nhóm và tần số (tần số tương đối) tương ứng.
:::

**Hiểu sâu hơn.** Ghép nhóm là "nhìn từ xa": bỏ bớt chi tiết (không còn biết ai cao $151$ hay $153$ cm) để thấy bức tranh chung. Các nhóm thường dài bằng nhau, nối tiếp nhau; dạng nửa khoảng $[a; b)$ bảo đảm số ở đầu mút chỉ được đếm một lần. Quá ít nhóm thì mất thông tin, quá nhiều nhóm thì lại rối; thường chọn 5 đến 8 nhóm.

:::example Bảng tần số tương đối ghép nhóm
Giả sử chiều cao của 40 học sinh lớp 9A có bảng tần số ghép nhóm:

| Chiều cao (cm) | $[145; 150)$ | $[150; 155)$ | $[155; 160)$ | $[160; 165)$ | $[165; 170)$ | $[170; 175)$ |
|---|---|---|---|---|---|---|
| Tần số | $3$ | $7$ | $12$ | $10$ | $6$ | $2$ |

Lập bảng tần số tương đối ghép nhóm và cho biết có bao nhiêu phần trăm học sinh cao từ $160$ cm trở lên.

**Lời giải.** Cỡ mẫu $n=40$. Chia mỗi tần số cho $40$, ta được

$$\frac{3}{40}=7{,}5\%,\ \ \frac{7}{40}=17{,}5\%,\ \ \frac{12}{40}=30\%,\ \ \frac{10}{40}=25\%,\ \ \frac{6}{40}=15\%,\ \ \frac{2}{40}=5\%.$$

Học sinh cao từ $160$ cm trở lên thuộc ba nhóm cuối, chiếm $25\%+15\%+5\%=45\%$.

Vậy có $45\%$ học sinh cao từ $160$ cm trở lên.
:::

## Biểu đồ của mẫu số liệu ghép nhóm

### Dạng cột

Trong **biểu đồ tần số ghép nhóm dạng cột**, mỗi cột có đáy là cả nhóm $[a; b)$ trên trục ngang, nên **các cột nằm liền nhau**: số liệu chạy liên tục, không có "khoảng trống" giữa $149{,}9$ cm và $150$ cm.

:::graph Chiều cao của 40 học sinh lớp 9A
alt: Biểu đồ cột liền nhau: các nhóm từ 145 đến 175 cm, mỗi nhóm rộng 5 cm, cột cao lần lượt 3, 7, 12, 10, 6, 2
x: 142..177
y: 0..14
fill: 3 ; 0 ; 145..150
fill: 7 ; 0 ; 150..155
fill: 12 ; 0 ; 155..160
fill: 10 ; 0 ; 160..165
fill: 6 ; 0 ; 165..170
fill: 2 ; 0 ; 170..175
segment: (150, 0) (150, 7) ; dashed
segment: (155, 0) (155, 12) ; dashed
segment: (160, 0) (160, 12) ; dashed
segment: (165, 0) (165, 10) ; dashed
segment: (170, 0) (170, 6) ; dashed
:::

Biểu đồ tần số tương đối ghép nhóm dạng cột vẽ giống hệt, chỉ thay chiều cao cột bằng tần số tương đối.

### Dạng đoạn thẳng

Để vẽ **biểu đồ tần số tương đối ghép nhóm dạng đoạn thẳng**, với mỗi nhóm ta đánh dấu điểm có hoành độ là giá trị đại diện của nhóm, tung độ là tần số tương đối, rồi nối các điểm liên tiếp. Với lớp 9A, các giá trị đại diện là $147{,}5$; $152{,}5$; …; $172{,}5$.

:::graph Tần số tương đối (%) theo giá trị đại diện của các nhóm
alt: Đường gấp khúc nối các điểm (147,5; 7,5), (152,5; 17,5), (157,5; 30), (162,5; 25), (167,5; 15), (172,5; 5)
x: 142..177
y: 0..35
segment: (147.5, 7.5) (152.5, 17.5)
segment: (152.5, 17.5) (157.5, 30)
segment: (157.5, 30) (162.5, 25)
segment: (162.5, 25) (167.5, 15)
segment: (167.5, 15) (172.5, 5)
:::

Đường gấp khúc cho thấy chiều cao tập trung quanh nhóm $[155; 160)$, thưa dần về hai phía.

:::example Đọc bảng ghép nhóm
Với bảng tần số ghép nhóm của lớp 9A ở trên, hãy cho biết:

a) Độ dài mỗi nhóm và giá trị đại diện của nhóm có tần số lớn nhất.

b) Có bao nhiêu học sinh cao dưới $155$ cm?

**Lời giải.** a) Mỗi nhóm có độ dài $150-145=5$ (cm). Nhóm có tần số lớn nhất là $[155; 160)$, có giá trị đại diện $\dfrac{155+160}{2}=157{,}5$.

b) Học sinh cao dưới $155$ cm thuộc hai nhóm đầu. Vậy có $3+7=10$ học sinh cao dưới $155$ cm.
:::

:::example Lời hứa của công ty xe buýt
Giả sử một công ty xe buýt khảo sát thời gian chờ xe (phút) của 60 hành khách:

| Thời gian chờ (phút) | $[0; 5)$ | $[5; 10)$ | $[10; 15)$ | $[15; 20)$ | $[20; 25)$ |
|---|---|---|---|---|---|
| Số hành khách | $21$ | $18$ | $12$ | $6$ | $3$ |

Công ty nói: "Đa số hành khách chờ dưới 10 phút". Lời nói này có đúng không? Ta có biết bao nhiêu hành khách chờ dưới 7 phút không?

**Lời giải.**

*Hiểu đề.* "Đa số" nghĩa là hơn một nửa, tức hơn $50\%$ của $60$ hành khách. "Dưới 10 phút" ứng với hai nhóm $[0; 5)$ và $[5; 10)$.

*Tìm cách giải.* Tính tần số tương đối của hai nhóm đầu.

*Giải.* Số hành khách chờ dưới 10 phút là $21+18=39$, chiếm $\dfrac{39}{60}\cdot100\%=65\%>50\%$. Mốc $7$ phút nằm bên trong nhóm $[5; 10)$; bảng chỉ cho biết cả nhóm có $18$ người.

Vậy lời nói của công ty là đúng ($65\%$); còn số hành khách chờ dưới 7 phút thì không xác định được từ bảng.

*Nhìn lại.* Đây là cái giá của ghép nhóm: gọn nhưng mất chi tiết trong nhóm. Muốn trả lời về mốc 7 phút, ta phải dùng số liệu gốc hoặc chia nhóm khác (chẳng hạn dài 1 phút).
:::

:::warning Những sai lầm thường gặp
- **Nhóm chồng lấn.** Sai: $[150; 155]$, $[155; 160]$ (số $155$ bị đếm hai lần). Đúng: $[150; 155)$, $[155; 160)$.
- **Vẽ các cột cách nhau.** Với số liệu ghép nhóm, các cột phải liền nhau.
:::

**Kết nối.** Ghép nhóm tiếp nối [bảng tần số](lesson:frequency-tables-charts) và [tần số tương đối](lesson:relative-frequency-tables): cùng ý tưởng đếm, chỉ đổi "giá trị" thành "nhóm". Ở lớp 11, 12, từ bảng ghép nhóm và các giá trị đại diện, ta sẽ tính số trung bình, trung vị và độ lệch chuẩn.

## Thuật ngữ

:::terms
- ghép nhóm | grouping data
- nhóm số liệu | class (group)
- độ dài nhóm | class width
- giá trị đại diện của nhóm | midpoint of a class
- bảng tần số ghép nhóm | grouped frequency table
- tần số tương đối ghép nhóm | grouped relative frequency
- biểu đồ tần số ghép nhóm dạng cột | histogram
- biểu đồ dạng đoạn thẳng | frequency polygon
:::

## Tóm tắt

- Nhóm $[a; b)$: $a\leq x<b$; độ dài $b-a$; giá trị đại diện $\dfrac{a+b}{2}$.
- Tần số tương đối của nhóm: $f_i=\dfrac{m_i}{n}\cdot100\%$.
- Dạng cột: các cột liền nhau. Dạng đoạn thẳng: nối các điểm (giá trị đại diện; $f_i$).
- Ghép nhóm làm mất thông tin bên trong mỗi nhóm.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Giả sử thời gian tự học (phút) trong một ngày của 20 học sinh là:

$$54,\ 76,\ 73,\ 68,\ 98,\ 43,\ 73,\ 32,\ 44,\ 51,\ 38,\ 72,\ 55,\ 44,\ 97,\ 33,\ 46,\ 41,\ 69,\ 91.$$

Lập bảng tần số và tần số tương đối ghép nhóm với các nhóm $[20; 40)$, $[40; 60)$, $[60; 80)$, $[80; 100)$.

::hint
**Kiến thức:** số $x$ thuộc nhóm $[a; b)$ khi $a\leq x<b$; $f_i=\dfrac{m_i}{n}\cdot100\%$.

**Gợi ý các bước:**
1. Đếm số số liệu trong mỗi nhóm, kiểm tra tổng bằng $20$.
2. Chia mỗi tần số cho $20$.

::solution
Đếm số liệu theo nhóm, ta được các tần số $3$, $8$, $6$, $3$ (tổng $20$).

Vậy các tần số tương đối tương ứng là $\dfrac{3}{20}=15\%$, $\dfrac{8}{20}=40\%$, $\dfrac{6}{20}=30\%$, $\dfrac{3}{20}=15\%$.

**Đáp số.** Tần số $3, 8, 6, 3$; tần số tương đối $15\%, 40\%, 30\%, 15\%$.
:::

:::exercise
Cho các nhóm $[0; 5)$, $[5; 10)$, $[10; 15)$, $[15; 20)$.

a) Số $10$ thuộc nhóm nào? Tìm giá trị đại diện của mỗi nhóm.

b) Bạn Lan chia nhóm $[0; 5]$, $[5; 10]$, $[10; 15]$, $[15; 20]$. Cách chia này sai ở đâu?

::hint
**Kiến thức:** $[a; b)$ gồm $a\leq x<b$; giá trị đại diện $\dfrac{a+b}{2}$.

**Gợi ý các bước:**
1. Kiểm tra $10$ thoả mãn bất đẳng thức của nhóm nào.
2. Xét số $5$ trong cách chia của Lan.

::solution
a) Vì $10\leq10<15$ nên số $10$ thuộc nhóm $[10; 15)$. Các giá trị đại diện là $2{,}5$; $7{,}5$; $12{,}5$; $17{,}5$.

b) Số $5$ thuộc cả $[0; 5]$ và $[5; 10]$ nên bị đếm hai lần (tương tự với $10$ và $15$).

**Đáp số.** a) $[10; 15)$; $2{,}5$; $7{,}5$; $12{,}5$; $17{,}5$. b) Nhóm chồng lấn.
:::

:::exercise
Giả sử khối lượng rác sinh hoạt (kg) mỗi ngày của 50 hộ gia đình có bảng tần số ghép nhóm: $[0; 2)$: $8$ hộ, $[2; 4)$: $19$ hộ, $[4; 6)$: $15$ hộ, $[6; 8)$: $8$ hộ.

a) Lập bảng tần số tương đối ghép nhóm.

b) Bao nhiêu phần trăm số hộ thải từ 4 kg rác trở lên mỗi ngày?

::hint
**Kiến thức:** $f_i=\dfrac{m_i}{n}\cdot100\%$.

**Gợi ý các bước:**
1. Chia mỗi tần số cho $50$.
2. Cộng tần số tương đối của hai nhóm cuối.

::solution
a) Ta có $\dfrac{8}{50}=16\%$, $\dfrac{19}{50}=38\%$, $\dfrac{15}{50}=30\%$, $\dfrac{8}{50}=16\%$.

b) Số hộ thải từ 4 kg trở lên chiếm $30\%+16\%=46\%$.

**Đáp số.** a) $16\%, 38\%, 30\%, 16\%$; b) $46\%$.
:::

:::exercise
Giả sử trên một đoạn đường giới hạn 50 km/h, camera ghi tốc độ (km/h) của 80 xe máy: $[30; 40)$: $10$ xe, $[40; 50)$: $38$ xe, $[50; 60)$: $24$ xe, $[60; 70)$: $8$ xe.

a) Bao nhiêu phần trăm số xe chạy với tốc độ từ 50 km/h trở lên?

b) Có xác định được số xe chạy nhanh hơn 55 km/h không? Vì sao?

::hint
**Kiến thức:** bảng ghép nhóm không cho biết số liệu bên trong nhóm.

**Gợi ý các bước:**
1. Cộng tần số hai nhóm cuối rồi chia cho $80$.
2. $55$ có phải đầu mút nhóm không?

::solution
a) Có $24+8=32$ xe, chiếm $\dfrac{32}{80}\cdot100\%=40\%$.

b) Số $55$ nằm bên trong nhóm $[50; 60)$, bảng không cho biết $24$ xe trong nhóm phân bố thế nào, nên không xác định được số xe chạy nhanh hơn 55 km/h.

**Đáp số.** a) $40\%$; b) không.
:::

:::exercise
**(1,5 điểm)** Giả sử thời gian chạy 100 m (giây) của 40 học sinh có bảng tần số ghép nhóm: $[13; 14)$: $4$, $[14; 15)$: $9$, $[15; 16)$: $x$, $[16; 17)$: $10$, $[17; 18)$: $5$.

a) Tìm $x$.

b) Lập bảng tần số tương đối ghép nhóm.

c) Bao nhiêu phần trăm học sinh chạy dưới 15 giây?

::hint
**Kiến thức:** tổng tần số bằng $n$; $f_i=\dfrac{m_i}{n}\cdot100\%$.

**Gợi ý các bước:**
1. $x=40-(4+9+10+5)$.
2. Chia mỗi tần số cho $40$.
3. Cộng tần số tương đối của hai nhóm đầu.

::solution
a) Ta có $x=40-(4+9+10+5)=12$.

b) Các tần số tương đối là $\dfrac{4}{40}=10\%$, $\dfrac{9}{40}=22{,}5\%$, $\dfrac{12}{40}=30\%$, $\dfrac{10}{40}=25\%$, $\dfrac{5}{40}=12{,}5\%$.

c) Học sinh chạy dưới 15 giây chiếm $10\%+22{,}5\%=32{,}5\%$.

**Đáp số.** a) $12$; b) $10\%$, $22{,}5\%$, $30\%$, $25\%$, $12{,}5\%$; c) $32{,}5\%$.
:::

:::exercise
Giả sử lớp 9B có 25 học sinh với chiều cao (cm): $[145; 150)$: $1$, $[150; 155)$: $5$, $[155; 160)$: $9$, $[160; 165)$: $6$, $[165; 170)$: $3$, $[170; 175)$: $1$. So sánh tỉ lệ học sinh cao từ $160$ cm trở lên của lớp 9B với lớp 9A trong ví dụ ($45\%$).

::hint
**Kiến thức:** hai lớp có sĩ số khác nhau thì so sánh tần số tương đối.

**Gợi ý các bước:**
1. Cộng tần số ba nhóm cuối của lớp 9B.
2. Chia cho $25$ rồi so sánh với $45\%$.

::solution
Lớp 9B có $6+3+1=10$ học sinh cao từ $160$ cm trở lên, chiếm $\dfrac{10}{25}\cdot100\%=40\%$.

Vậy tỉ lệ này ở lớp 9B ($40\%$) thấp hơn lớp 9A ($45\%$).

**Đáp số.** $40\%<45\%$.
:::

:::exercise
Giả sử bảng tần số ghép nhóm của một mẫu số liệu cỡ $50$ có năm nhóm với tần số lần lượt $6$, $x$, $15$, $y$, $4$. Biết tần số tương đối của nhóm thứ hai lớn hơn tần số tương đối của nhóm thứ tư là $10\%$. Tìm $x$, $y$. (Ôn lại [giải hệ phương trình](lesson:solving-simultaneous-equations).)

::hint
**Kiến thức:** tổng tần số bằng cỡ mẫu; $f_i=\dfrac{m_i}{n}\cdot100\%$.

**Gợi ý các bước:**
1. Lập phương trình $x+y=25$.
2. Từ $\dfrac{x-y}{50}=10\%$ suy ra $x-y=5$.

::solution
Theo đề bài, ta có $6+x+15+y+4=50$, suy ra $x+y=25$; và $\dfrac{x}{50}-\dfrac{y}{50}=0{,}1$, suy ra $x-y=5$.

Cộng hai phương trình, ta được $2x=30$, suy ra $x=15$, $y=10$ (thoả mãn).

Vậy $x=15$, $y=10$.

**Đáp số.** $x=15$, $y=10$.
:::

:::exercise Thử thách
Biểu đồ tần số tương đối ghép nhóm dạng đoạn thẳng của một mẫu số liệu cỡ $60$ đi qua các điểm $(15; 10)$, $(25; 40)$, $(35; 35)$, $(45; 15)$ (tung độ tính theo %). Các nhóm dài bằng nhau. Tìm các nhóm, tần số mỗi nhóm và số số liệu thuộc $[20; 40)$.

::hint
**Kiến thức:** hai giá trị đại diện liên tiếp cách nhau đúng một độ dài nhóm; $m_i=f_i\cdot n$.

**Gợi ý các bước:**
1. Độ dài nhóm là $25-15$; suy ra các đầu mút.
2. Nhân mỗi tần số tương đối với $60$.

::solution
Độ dài nhóm là $25-15=10$, nhóm có giá trị đại diện $15$ là $[10; 20)$. Do đó các nhóm là $[10; 20)$, $[20; 30)$, $[30; 40)$, $[40; 50)$, với tần số $60\cdot10\%=6$, $60\cdot40\%=24$, $60\cdot35\%=21$, $60\cdot15\%=9$.

Vậy có $24+21=45$ số liệu thuộc $[20; 40)$ (hai nhóm giữa).

**Đáp số.** Tần số $6, 24, 21, 9$; $45$ số liệu.
:::

## Kiểm tra mini

:::quiz
::mc
Với các nhóm $[145; 150)$, $[150; 155)$, $[155; 160)$, số liệu $155$ thuộc nhóm
A. $[150; 155)$.
B. cả hai nhóm $[150; 155)$ và $[155; 160)$.
C. không nhóm nào.
D. $[155; 160)$.
::key D
Ta có $155\leq155<160$. Nhóm $[150; 155)$ không chứa đầu mút phải $155$ (A sai), nên $155$ thuộc đúng một nhóm (B, C sai).

::mc
Giá trị đại diện của nhóm $[40; 50)$ là
A. $10$.
B. $40$.
C. $45$.
D. $50$.
::key C
$\dfrac{40+50}{2}=45$. A là độ dài nhóm, B là đầu mút trái, D là đầu mút phải.

::mc
Một mẫu số liệu cỡ $30$ có bốn nhóm với tần số $5$, $12$, $8$, $5$. Tần số tương đối của nhóm thứ hai là
A. $40\%$.
B. $12\%$.
C. $60\%$.
D. $2{,}5\%$.
::key A
$\dfrac{12}{30}\cdot100\%=40\%$. B lấy tần số làm phần trăm, C là phần còn lại, D tính $30:12$.

::mc
Trong biểu đồ tần số ghép nhóm dạng cột, các cột
A. cách đều nhau, đáy mỗi cột là giá trị đại diện của nhóm.
B. nằm liền nhau, đáy mỗi cột là một nhóm.
C. có chiều rộng bằng tần số.
D. có chiều cao bằng giá trị đại diện của nhóm.
::key B
Số liệu chạy liên tục qua các nhóm nên các cột liền nhau. A là cách vẽ với số liệu không ghép nhóm; chiều rộng cột là độ dài nhóm (C sai), chiều cao cột là tần số (D sai).

::tf
Giả sử thời gian chờ (phút) của 50 khách hàng có bảng: $[0; 5)$: $12$, $[5; 10)$: $20$, $[10; 15)$: $10$, $[15; 20)$: $8$. Xét tính đúng sai của các mệnh đề sau:
a) Độ dài mỗi nhóm là $5$ phút.
b) Tần số tương đối của nhóm $[5; 10)$ là $40\%$.
c) Có $18$ khách chờ từ 10 phút trở lên.
d) Từ bảng, ta biết có đúng $6$ khách chờ dưới 2 phút.
::key Đ Đ Đ S
a) Đúng. b) Đúng: $\dfrac{20}{50}=40\%$. c) Đúng: $10+8=18$. d) Sai: bảng không cho biết số liệu bên trong nhóm $[0; 5)$.

::sa
Với bảng ở câu trên, bao nhiêu phần trăm khách hàng chờ từ 10 phút trở lên?
::key 36
$\dfrac{18}{50}=36\%$.

::sa
Tìm giá trị đại diện của nhóm $[12{,}5; 17{,}5)$.
::key 15
$\dfrac{12{,}5+17{,}5}{2}=15$.
:::
