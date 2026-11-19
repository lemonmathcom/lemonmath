---
title: Mẫu số liệu ghép nhóm
description: Biết ghép nhóm số liệu, lập bảng tần số, tính tần số tương đối và tích luỹ, tìm giá trị đại diện và đọc biểu đồ cột của mẫu số liệu ghép nhóm.
minutes: 25
---

:::goals
- Giải thích vì sao và khi nào ta ghép nhóm số liệu, và chia nhóm đúng cách (các nhóm liên tiếp, không chồng lấn, bao phủ mọi số liệu).
- Lập bảng tần số ghép nhóm và vẽ, đọc biểu đồ cột của mẫu số liệu ghép nhóm.
- Tính và dùng tần số tương đối, tần số tích luỹ của từng nhóm.
- Xác định giá trị đại diện của nhóm và nhận ra thông tin bị mất khi ghép nhóm.
:::

Giả sử cô giáo hỏi $40$ bạn lớp 11 mất bao nhiêu phút để đi từ nhà đến trường. Kết quả là $40$ số, mỗi số là một số nguyên phút. Ta muốn nói được những câu như "đa số các bạn đi khoảng $10$ đến $20$ phút" hoặc "có bao nhiêu bạn đi chưa đến $20$ phút".

Nhìn $40$ số rời rạc rất khó rút ra những kết luận như vậy. Làm cách nào để tóm tắt chúng thành một bảng gọn mà vẫn còn giữ được thông tin chính?

## Ghép nhóm số liệu

### Khám phá: đếm theo từng khoảng

Đây là thời gian đi học (phút) của $40$ bạn (số liệu giả định):
$$\begin{array}{cccccccccc} 8 & 12 & 15 & 25 & 7 & 18 & 22 & 30 & 14 & 9\\ 35 & 20 & 17 & 11 & 28 & 6 & 24 & 16 & 41 & 13\\ 19 & 27 & 10 & 33 & 21 & 5 & 23 & 38 & 15 & 26\\ 12 & 44 & 18 & 29 & 9 & 31 & 22 & 14 & 36 & 20 \end{array}$$
Số nhỏ nhất là $5$, số lớn nhất là $44$. Ta chia khoảng từ $0$ đến $50$ phút thành $5$ khoảng bằng nhau, mỗi khoảng dài $10$ phút, rồi đếm xem có bao nhiêu số liệu rơi vào mỗi khoảng. Quy ước: khoảng $[0; 10)$ gồm các số $x$ với $0\le x<10$, tức là gồm $0$ nhưng không gồm $10$. Như vậy mỗi số liệu thuộc đúng một khoảng; chẳng hạn $10$ thuộc $[10; 20)$, không thuộc $[0; 10)$.

| Thời gian (phút) | $[0; 10)$ | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ | $[40; 50)$ |
|---|---|---|---|---|---|
| Số bạn | $6$ | $14$ | $12$ | $6$ | $2$ |

Tổng các số trong bảng là $6+14+12+6+2=40$, bằng số bạn được hỏi, nên ta không bỏ sót ai. Bây giờ ta thấy ngay nhóm $[10; 20)$ có nhiều bạn nhất.

:::definition Mẫu số liệu ghép nhóm
Khi số liệu nhận nhiều giá trị khác nhau, ta chia chúng vào các **nhóm** dạng $[a_i; a_{i+1})$. Số liệu đã được chia như vậy gọi là **mẫu số liệu ghép nhóm**. Số $a_{i+1}-a_i$ là **độ rộng** của nhóm. **Tần số** $m_i$ của một nhóm là số số liệu thuộc nhóm đó, và bảng liệt kê các nhóm cùng tần số của chúng gọi là **bảng tần số ghép nhóm**. Tổng các tần số bằng **cỡ mẫu** $n$.
:::

Để bảng ghép nhóm đúng và có ích, ta thường tuân theo các quy tắc sau:
1. Các nhóm là những khoảng liên tiếp, **không chồng lấn** (mỗi số liệu thuộc đúng một nhóm) và **không bỏ trống** (mọi số liệu đều thuộc một nhóm nào đó).
2. Các nhóm thường có cùng độ rộng, để dễ so sánh và vẽ biểu đồ.
3. Số nhóm vừa phải: quá ít thì mất nhiều thông tin, quá nhiều thì bảng dài và các tần số nhỏ, lộn xộn.

:::diagram Biểu đồ cột của bảng tần số ghép nhóm (thời gian đi học, phút)
alt: Năm cột liền nhau có chiều cao tỉ lệ với tần số 6, 14, 12, 6, 2 ở các nhóm từ 0 đến 10, 10 đến 20, 20 đến 30, 30 đến 40 và 40 đến 50 phút
point A0 0,0 ""
point B0 1,0 ""
point C0 1,2.4 ""
point D0 0,2.4 ""
point A1 1,0 ""
point B1 2,0 ""
point C1 2,5.6 ""
point D1 1,5.6 ""
point A2 2,0 ""
point B2 3,0 ""
point C2 3,4.8 ""
point D2 2,4.8 ""
point A3 3,0 ""
point B3 4,0 ""
point C3 4,2.4 ""
point D3 3,2.4 ""
point A4 4,0 ""
point B4 5,0 ""
point C4 5,0.8 ""
point D4 4,0.8 ""
polygon A0 B0 C0 D0
polygon A1 B1 C1 D1
polygon A2 B2 C2 D2
polygon A3 B3 C3 D3
polygon A4 B4 C4 D4
label 0.5,2.7 "6"
label 1.5,5.9 "14"
label 2.5,5.1 "12"
label 3.5,2.7 "6"
label 4.5,1.1 "2"
label 0,-0.35 "0"
label 1,-0.35 "10"
label 2,-0.35 "20"
label 3,-0.35 "30"
label 4,-0.35 "40"
label 5,-0.35 "50"
:::

Trong **biểu đồ cột** (histogram), mỗi nhóm được vẽ bằng một cột có chiều rộng là độ rộng nhóm và chiều cao tỉ lệ với tần số; các cột sát nhau vì các nhóm liên tiếp. Chiều cao mỗi cột trên hình đã được ghi tần số.

## Tần số tương đối và tần số tích luỹ

Tần số cho biết "có bao nhiêu bạn", nhưng khi so sánh hai mẫu có cỡ khác nhau, ta cần biết "chiếm bao nhiêu phần".

:::theorem Tần số tương đối và tần số tích luỹ
Cho mẫu số liệu ghép nhóm cỡ $n$, nhóm thứ $i$ có tần số $m_i$.
- **Tần số tương đối** của nhóm thứ $i$ là $f_i=\dfrac{m_i}{n}\cdot100\%$. Tổng các tần số tương đối bằng $100\%$.
- **Tần số tích luỹ** của nhóm thứ $i$ là tổng tần số của nhóm đó và tất cả các nhóm đứng trước nó: $m_1+m_2+\dots+m_i$. Nó cho biết có bao nhiêu số liệu **nhỏ hơn** đầu mút phải của nhóm đó.
:::

Với số liệu thời gian đi học, ta có bảng đầy đủ:

| Nhóm (phút) | Tần số | Tần số tương đối | Tần số tích luỹ |
|---|---|---|---|
| $[0; 10)$ | $6$ | $15\%$ | $6$ |
| $[10; 20)$ | $14$ | $35\%$ | $20$ |
| $[20; 30)$ | $12$ | $30\%$ | $32$ |
| $[30; 40)$ | $6$ | $15\%$ | $38$ |
| $[40; 50)$ | $2$ | $5\%$ | $40$ |

Chẳng hạn $\dfrac{14}{40}\cdot100\%=35\%$ và $6+14=20$. Số $20$ cho biết có đúng $20$ bạn đi chưa đến $20$ phút, tức là một nửa lớp. Số cuối cùng của cột tích luỹ luôn bằng cỡ mẫu $n$.

## Giá trị đại diện

Sau khi ghép nhóm, ta không còn biết giá trị chính xác của từng số liệu, chỉ biết nó nằm trong nhóm nào. Khi cần một con số để "đại diện" cho cả nhóm, ta lấy trung điểm.

:::definition Giá trị đại diện
**Giá trị đại diện** của nhóm $[a_i; a_{i+1})$ là trung điểm của nhóm: $c_i=\dfrac{a_i+a_{i+1}}{2}$.
:::

Chẳng hạn giá trị đại diện của nhóm $[10; 20)$ là $15$ và của nhóm $[20; 30)$ là $25$. Ở bài sau, ta dùng giá trị đại diện để ước lượng số trung bình, trung vị, tứ phân vị và mốt của mẫu số liệu ghép nhóm.

:::example Chọn cách chia nhóm khác
Với $40$ số liệu thời gian đi học ở trên, hãy lập bảng tần số ghép nhóm với các nhóm có độ rộng $5$ phút, bắt đầu từ $5$.

**Hiểu đề.** Số nhỏ nhất là $5$ và số lớn nhất là $44$, nên các nhóm $[5; 10)$, $[10; 15)$, ..., $[40; 45)$ bao phủ mọi số liệu. Ta cần đếm số số liệu trong mỗi nhóm.

**Tìm cách giải.** Đếm lần lượt từng nhóm trong $40$ số, đánh dấu mỗi số đã đếm để không bỏ sót hay đếm hai lần, rồi kiểm tra tổng bằng $40$.

**Giải.** Ta được bảng:

| Nhóm (phút) | $[5; 10)$ | $[10; 15)$ | $[15; 20)$ | $[20; 25)$ | $[25; 30)$ | $[30; 35)$ | $[35; 40)$ | $[40; 45)$ |
|---|---|---|---|---|---|---|---|---|
| Số bạn | $6$ | $7$ | $7$ | $7$ | $5$ | $3$ | $3$ | $2$ |

Kiểm tra: $6+7+7+7+5+3+3+2=40$. Đúng.

**Nhìn lại.** Với độ rộng $10$, ta có $5$ nhóm và biết nhóm $[10; 20)$ đông nhất ($14$ bạn). Với độ rộng $5$, ta thấy rõ hơn: $[10; 15)$, $[15; 20)$ và $[20; 25)$ đều có $7$ bạn, nên "đỉnh" nằm trải rộng từ $10$ đến $25$ phút. Nếu dùng độ rộng $20$ thì chỉ còn các nhóm $[0; 20)$, $[20; 40)$, $[40; 60)$ với tần số $20$, $18$, $2$: bảng gọn nhưng gần như mất hết hình dạng của số liệu. Độ rộng nhỏ giữ nhiều chi tiết hơn nhưng bảng dài hơn.
:::

Khi số liệu gốc có sẵn, ta tự lập bảng.

:::example Lập bảng tần số ghép nhóm từ số liệu gốc
Điểm bài kiểm tra của $20$ học sinh (thang điểm $10$, chưa ai đạt điểm $10$):
$$5{,}5;\ 6;\ 7{,}5;\ 8;\ 6{,}5;\ 7;\ 9;\ 5;\ 6;\ 7{,}5;\ 8{,}5;\ 6{,}5;\ 7;\ 8;\ 9{,}5;\ 7{,}5;\ 6;\ 8;\ 5{,}5;\ 7.$$
Lập bảng tần số ghép nhóm với các nhóm $[5; 6)$, $[6; 7)$, $[7; 8)$, $[8; 9)$, $[9; 10)$ và tính tần số tương đối của từng nhóm.

**Lời giải.** Đếm các điểm trong từng nhóm: $[5; 6)$ gồm $5; 5{,}5; 5{,}5$, có $3$ số; $[6; 7)$ gồm $6; 6; 6; 6{,}5; 6{,}5$, có $5$ số; $[7; 8)$ gồm $7; 7; 7; 7{,}5; 7{,}5; 7{,}5$, có $6$ số; $[8; 9)$ gồm $8; 8; 8; 8{,}5$, có $4$ số; $[9; 10)$ gồm $9; 9{,}5$, có $2$ số. Tổng $3+5+6+4+2=20$.

| Nhóm (điểm) | $[5; 6)$ | $[6; 7)$ | $[7; 8)$ | $[8; 9)$ | $[9; 10)$ |
|---|---|---|---|---|---|
| Tần số | $3$ | $5$ | $6$ | $4$ | $2$ |
| Tần số tương đối | $15\%$ | $25\%$ | $30\%$ | $20\%$ | $10\%$ |

Vậy các tần số là $3, 5, 6, 4, 2$ và các tần số tương đối là $15\%, 25\%, 30\%, 20\%, 10\%$.
:::

Bây giờ ta tính tần số tương đối và tần số tích luỹ cho một bảng cho trước.

:::example Doanh thu của một cửa hàng
Giả sử doanh thu mỗi ngày (triệu đồng) của một cửa hàng trong $30$ ngày được ghép nhóm như sau: $[10; 15)$ có $4$ ngày, $[15; 20)$ có $9$ ngày, $[20; 25)$ có $10$ ngày, $[25; 30)$ có $5$ ngày, $[30; 35)$ có $2$ ngày. Tính tần số tương đối và tần số tích luỹ của từng nhóm (làm tròn tần số tương đối đến $0{,}1\%$). Có bao nhiêu ngày doanh thu dưới $25$ triệu đồng? Tỉ lệ ngày có doanh thu từ $25$ triệu đồng trở lên là bao nhiêu?

**Lời giải.** Cỡ mẫu $n=30$. Ta có bảng:

| Nhóm | $[10; 15)$ | $[15; 20)$ | $[20; 25)$ | $[25; 30)$ | $[30; 35)$ |
|---|---|---|---|---|---|
| Tần số | $4$ | $9$ | $10$ | $5$ | $2$ |
| Tần số tương đối | $13{,}3\%$ | $30\%$ | $33{,}3\%$ | $16{,}7\%$ | $6{,}7\%$ |
| Tần số tích luỹ | $4$ | $13$ | $23$ | $28$ | $30$ |

Số ngày doanh thu dưới $25$ triệu đồng là tần số tích luỹ của nhóm $[20; 25)$, tức $23$ ngày. Số ngày doanh thu từ $25$ triệu đồng trở lên là $5+2=7$ ngày, chiếm $\dfrac{7}{30}\cdot100\%\approx23{,}3\%$.

Vậy có $23$ ngày doanh thu dưới $25$ triệu đồng, và khoảng $23{,}3\%$ số ngày có doanh thu từ $25$ triệu đồng trở lên.
:::

Tiếp theo, ta xem ghép nhóm làm mất thông tin gì.

:::example Thông tin bị mất khi ghép nhóm
Với bảng thời gian đi học có độ rộng $10$ phút, hãy cho biết có thể tính chính xác số bạn đi chưa đến $25$ phút không? Nếu không, hãy chỉ ra khoảng giá trị có thể có và đưa ra một ước lượng bằng giả thiết các bạn trong mỗi nhóm phân bố đều.

**Lời giải.** Có $20$ bạn đi chưa đến $20$ phút và $32$ bạn đi chưa đến $30$ phút. Bảng không cho biết trong $12$ bạn của nhóm $[20; 30)$ có bao nhiêu bạn đi dưới $25$ phút, nên ta không tính được chính xác; số bạn đó nằm từ $20$ đến $32$.

Nếu giả sử $12$ bạn của nhóm $[20; 30)$ phân bố đều, thì khoảng $[20; 25)$ chiếm một nửa nhóm, tức $6$ bạn, và ước lượng là $20+6=26$ bạn.

Vậy không tính được chính xác; ước lượng là khoảng $26$ bạn.

**Kiểm tra bằng bảng độ rộng $5$.** Bảng ở ví dụ đầu cho nhóm $[20; 25)$ có $7$ bạn, nên số bạn đi chưa đến $25$ phút là $20+7=27$. Ước lượng $26$ khá gần $27$, và bảng chia nhỏ hơn cho đáp án chính xác.
:::

Sau cùng, tần số tương đối giúp so sánh hai mẫu có cỡ khác nhau.

:::example So sánh hai lớp
Thời gian tự học mỗi ngày (giờ) của lớp 11A ($40$ học sinh) và lớp 11B ($50$ học sinh) được ghép nhóm: lớp 11A có $6$, $22$, $12$ học sinh ở các nhóm $[0; 1)$, $[1; 2)$, $[2; 3)$; lớp 11B có $10$, $25$, $15$ học sinh ở các nhóm đó. Hãy so sánh hai lớp.

**Lời giải.** Lớp 11B có nhiều học sinh hơn nên các tần số lớn hơn, chưa so sánh được. Ta tính tần số tương đối:

| Nhóm (giờ) | $[0; 1)$ | $[1; 2)$ | $[2; 3)$ |
|---|---|---|---|
| Lớp 11A | $\dfrac{6}{40}=15\%$ | $\dfrac{22}{40}=55\%$ | $\dfrac{12}{40}=30\%$ |
| Lớp 11B | $\dfrac{10}{50}=20\%$ | $\dfrac{25}{50}=50\%$ | $\dfrac{15}{50}=30\%$ |

Vậy tỉ lệ học sinh tự học từ $2$ giờ trở lên ở hai lớp bằng nhau ($30\%$), dù lớp 11B có $15$ bạn so với $12$ bạn của lớp 11A. Lớp 11B có tỉ lệ học sinh tự học dưới $1$ giờ cao hơn ($20\%$ so với $15\%$).
:::

**Kết nối.** Ở lớp 10 ta tính số trung bình, trung vị, tứ phân vị và mốt từ số liệu gốc. Khi chỉ có bảng ghép nhóm, ta không có số liệu gốc, nên ở bài sau ta dùng giá trị đại diện và tần số tích luỹ để ước lượng các số đó. Chẳng hạn, với các giá trị đại diện $5, 15, 25, 35, 45$ ta ước lượng thời gian đi học trung bình là $\dfrac{5\cdot6+15\cdot14+25\cdot12+35\cdot6+45\cdot2}{40}=21$ phút, gần với $20{,}575$ phút tính từ $40$ số liệu gốc.

:::warning Những sai lầm thường gặp
- **Chia nhóm chồng lấn hoặc bỏ trống.** Sai: các nhóm $[10; 20]$ và $[20; 30]$. Vì sao sai: số liệu bằng $20$ thuộc cả hai nhóm nên bị đếm hai lần. Đúng: dùng các nửa khoảng $[10; 20)$, $[20; 30)$.
- **Nhầm tần số với tần số tương đối.** Sai: nhóm có $14$ bạn trong $40$ bạn chiếm $14\%$. Vì sao sai: $14$ là số bạn, không phải phần trăm. Đúng: $\dfrac{14}{40}\cdot100\%=35\%$.
- **Nhầm tần số tích luỹ với tần số của nhóm.** Sai: tần số tích luỹ của nhóm $[20; 30)$ là $12$. Vì sao sai: $12$ chỉ là tần số của chính nhóm này, chưa cộng các nhóm đứng trước. Đúng: $6+14+12=32$.
- **Coi mọi số liệu trong nhóm bằng giá trị đại diện.** Sai: $12$ bạn của nhóm $[20; 30)$ đều đi đúng $25$ phút. Vì sao sai: trong nhóm có bạn đi $20$ phút, có bạn đi $29$ phút. Đúng: giá trị đại diện chỉ là một con số tiêu biểu để ước lượng.
:::

## Thuật ngữ

:::terms
- mẫu số liệu | data set
- mẫu số liệu ghép nhóm | grouped data
- nhóm số liệu | class
- độ rộng của nhóm | class width
- cỡ mẫu | sample size
- tần số | frequency
- tần số tương đối | relative frequency
- tần số tích luỹ | cumulative frequency
- giá trị đại diện | representative value (class midpoint)
- biểu đồ cột | histogram
- bảng tần số ghép nhóm | grouped frequency table
:::

## Tóm tắt

- Ghép nhóm số liệu là chia số liệu vào các nhóm $[a_i; a_{i+1})$ liên tiếp, không chồng lấn, bao phủ mọi số liệu, thường có cùng độ rộng.
- Tần số $m_i$ là số số liệu của nhóm; tổng các tần số bằng cỡ mẫu $n$.
- Tần số tương đối: $f_i=\dfrac{m_i}{n}\cdot100\%$; tổng bằng $100\%$.
- Tần số tích luỹ của nhóm là tổng tần số từ nhóm đầu đến nhóm đó; cho biết số số liệu nhỏ hơn đầu mút phải của nhóm.
- Giá trị đại diện của nhóm $[a_i; a_{i+1})$ là $\dfrac{a_i+a_{i+1}}{2}$.
- Ghép nhóm làm mất thông tin: ta chỉ biết số liệu thuộc nhóm nào, nên nhiều đại lượng chỉ ước lượng được.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Chiều cao (cm) của $20$ bạn: $152, 158, 161, 165, 149, 170, 155, 162, 168, 157, 160, 173, 154, 163, 166, 159, 151, 164, 169, 156$. Lập bảng tần số ghép nhóm với các nhóm $[145; 150)$, $[150; 155)$, $[155; 160)$, $[160; 165)$, $[165; 170)$, $[170; 175)$.

::hint
**Kiến thức:** mỗi số liệu thuộc đúng một nhóm dạng $[a; b)$; kiểm tra tổng các tần số bằng $20$.

**Gợi ý các bước:**
1. Với mỗi số, xác định nhóm chứa nó (chú ý $150$ thuộc $[150; 155)$).
2. Đếm tần số rồi cộng lại để kiểm tra.

::solution
Đếm từng nhóm ta được các tần số $1, 3, 5, 5, 4, 2$; chẳng hạn nhóm $[150; 155)$ gồm $152, 154, 151$. Tổng $1+3+5+5+4+2=20$.

**Đáp số.** Các tần số là $1, 3, 5, 5, 4, 2$.
:::

:::exercise
Cho mẫu số liệu ghép nhóm cỡ $50$ về chiều cao (cm): $[140; 150)$ có $5$, $[150; 160)$ có $12$, $[160; 170)$ có $18$, $[170; 180)$ có $10$, $[180; 190)$ có $5$ người. Tính tần số tương đối và tần số tích luỹ của từng nhóm.

::hint
**Kiến thức:** $f_i=\dfrac{m_i}{n}\cdot100\%$; tần số tích luỹ là tổng cộng dồn.

**Gợi ý các bước:**
1. Chia từng tần số cho $50$ rồi nhân $100\%$.
2. Cộng dồn các tần số.

::solution
Tần số tương đối: $\dfrac{5}{50}=10\%$, $\dfrac{12}{50}=24\%$, $\dfrac{18}{50}=36\%$, $\dfrac{10}{50}=20\%$, $\dfrac{5}{50}=10\%$ (tổng $100\%$). Tần số tích luỹ: $5$, $5+12=17$, $17+18=35$, $35+10=45$, $45+5=50$.

**Đáp số.** Tần số tương đối: $10\%, 24\%, 36\%, 20\%, 10\%$; tần số tích luỹ: $5, 17, 35, 45, 50$.
:::

:::exercise
Hai bảng ghép nhóm cân nặng (kg) sau có lỗi. Hãy chỉ ra lỗi và sửa lại. a) $[40; 45)$, $[45; 50]$, $[50; 55)$, $[55; 60)$. b) $[40; 45)$, $[45; 50)$, $[55; 60)$, $[60; 65)$.

::hint
**Kiến thức:** các nhóm phải liên tiếp, không chồng lấn và không bỏ trống.

**Gợi ý các bước:**
1. Xét đầu mút phải của mỗi nhóm có trùng đầu mút trái của nhóm kế không.
2. Xem có khoảng nào chưa được phủ không.

::solution
a) Nhóm $[45; 50]$ chứa cả $50$, mà $50$ cũng thuộc $[50; 55)$ nên bị đếm hai lần: chồng lấn. Sửa thành $[45; 50)$. b) Thiếu nhóm $[50; 55)$: các số liệu từ $50$ đến dưới $55$ không thuộc nhóm nào. Sửa bằng cách thêm nhóm $[50; 55)$.

**Đáp số.** a) Chồng lấn tại $50$; sửa $[45; 50)$. b) Thiếu $[50; 55)$; thêm nhóm này.
:::

:::exercise
Giả sử lượng nước sinh hoạt tiêu thụ mỗi tháng ($\text{m}^3$) của $50$ hộ gia đình được ghép nhóm: $[0; 5)$ có $4$ hộ, $[5; 10)$ có $16$ hộ, $[10; 15)$ có $18$ hộ, $[15; 20)$ có $9$ hộ, $[20; 25)$ có $3$ hộ. Có bao nhiêu phần trăm số hộ dùng dưới $15\ \text{m}^3$ một tháng?

::hint
**Kiến thức:** tần số tích luỹ của nhóm $[10; 15)$ cho số hộ dùng dưới $15\ \text{m}^3$.

**Gợi ý các bước:**
1. Cộng các tần số của ba nhóm đầu.
2. Chia cho $50$ rồi nhân $100\%$.

::solution
Số hộ dùng dưới $15\ \text{m}^3$ là $4+16+18=38$, chiếm $\dfrac{38}{50}\cdot100\%=76\%$.

**Đáp số.** $76\%$.
:::

:::exercise
Chiều cao của $40$ bạn được ghép nhóm: $[150; 155)$ có $4$, $[155; 160)$ có $10$, $[160; 165)$ có $14$, $[165; 170)$ có $9$, $[170; 175)$ có $3$ bạn. a) Viết giá trị đại diện của từng nhóm. b) Giả sử các bạn trong mỗi nhóm có chiều cao phân bố đều, hãy ước lượng số bạn cao dưới $162{,}5$ cm.

::hint
**Kiến thức:** giá trị đại diện là trung điểm của nhóm; $162{,}5$ là trung điểm của nhóm $[160; 165)$.

**Gợi ý các bước:**
1. Tính trung điểm của từng nhóm.
2. Cộng các nhóm hoàn toàn nằm dưới $162{,}5$ với một nửa nhóm $[160; 165)$.

::solution
a) Các giá trị đại diện là $152{,}5$, $157{,}5$, $162{,}5$, $167{,}5$, $172{,}5$. b) Các nhóm $[150; 155)$ và $[155; 160)$ nằm hoàn toàn dưới $162{,}5$ cm, có $4+10=14$ bạn. Nửa dưới của nhóm $[160; 165)$ có khoảng $\dfrac{14}{2}=7$ bạn. Vậy ước lượng là $14+7=21$ bạn.

**Đáp số.** a) $152{,}5; 157{,}5; 162{,}5; 167{,}5; 172{,}5$; b) khoảng $21$ bạn.
:::

:::exercise
Cho bảng thời gian đi học ở bài ($[0; 10)$: $6$; $[10; 20)$: $14$; $[20; 30)$: $12$; $[30; 40)$: $6$; $[40; 50)$: $2$). Xét tính đúng sai của các mệnh đề sau:

a) Nhóm $[10; 20)$ có tần số lớn nhất.

b) Tần số tương đối của nhóm $[20; 30)$ là $12\%$.

c) Có đúng $20$ bạn đi chưa đến $20$ phút.

d) Tần số tích luỹ của nhóm $[30; 40)$ là $38$.

::hint
**Kiến thức:** tần số tương đối là $\dfrac{m_i}{n}\cdot100\%$ với $n=40$; tần số tích luỹ là tổng cộng dồn.

**Gợi ý các bước:**
1. a) So sánh các tần số.
2. b) Tính $\dfrac{12}{40}$.
3. c), d) Cộng dồn các tần số.

::solution
a) **Đúng**: tần số lớn nhất là $14$.

b) **Sai**: $\dfrac{12}{40}\cdot100\%=30\%$; $12$ là tần số, không phải tần số tương đối.

c) **Đúng**: $6+14=20$.

d) **Đúng**: $6+14+12+6=38$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Đúng.
:::

:::exercise
Một mẫu số liệu ghép nhóm cỡ $50$ có các tần số tích luỹ của năm nhóm liên tiếp lần lượt là $5, 17, 38, 46, 50$. Tính tần số của nhóm thứ ba.

::hint
**Kiến thức:** tần số của một nhóm bằng hiệu hai tần số tích luỹ liên tiếp.

**Gợi ý các bước:**
1. Tần số nhóm thứ ba bằng tần số tích luỹ thứ ba trừ tần số tích luỹ thứ hai.

::solution
Tần số của nhóm thứ ba là $38-17=21$.

**Đáp số.** $21$.
:::

:::exercise Ôn tập
Chứng minh rằng nếu các nhóm của một mẫu số liệu ghép nhóm có cùng độ rộng $h$ thì các giá trị đại diện của chúng lập thành một cấp số cộng có công sai $h$.

::hint
**Kiến thức:** nhóm thứ $i$ là $[a_i; a_i+h)$ và nhóm kế tiếp bắt đầu từ $a_{i+1}=a_i+h$; ở bài cấp số cộng, dãy có hiệu liên tiếp không đổi là cấp số cộng.

**Gợi ý các bước:**
1. Viết giá trị đại diện $c_i$ và $c_{i+1}$.
2. Tính $c_{i+1}-c_i$.

::solution
Giá trị đại diện của nhóm thứ $i$ là $c_i=\dfrac{a_i+(a_i+h)}{2}=a_i+\dfrac h2$. Nhóm kế tiếp bắt đầu từ $a_i+h$ nên $c_{i+1}=a_i+h+\dfrac h2$. Do đó $c_{i+1}-c_i=h$ không đổi, nên $(c_i)$ là cấp số cộng có công sai $h$.

**Đáp số.** Các giá trị đại diện lập thành cấp số cộng công sai $h$.
:::

:::exercise Thử thách
Một bảng tần số ghép nhóm có năm nhóm $[0; 10)$, $[10; 20)$, $[20; 30)$, $[30; 40)$, $[40; 50)$ bị mờ một số ô. Biết nhóm $[0; 10)$ có tần số $4$, nhóm $[20; 30)$ có tần số $18$ và tần số tương đối $36\%$, nhóm $[40; 50)$ có tần số $3$, và tần số tích luỹ của nhóm $[10; 20)$ là $14$. Tìm cỡ mẫu và tần số của nhóm $[10; 20)$ và nhóm $[30; 40)$.

::hint
**Kiến thức:** $f_i=\dfrac{m_i}{n}\cdot100\%$ cho phép tìm $n$; tần số tích luỹ và tổng các tần số bằng $n$.

**Gợi ý các bước:**
1. Từ $\dfrac{18}{n}=36\%$ tìm $n$.
2. Tìm tần số nhóm $[10; 20)$ từ tần số tích luỹ $14$.
3. Tìm tần số nhóm $[30; 40)$ từ tổng bằng $n$.

::solution
Từ $\dfrac{18}{n}=0{,}36$ ta có $n=50$. Tần số tích luỹ của nhóm $[10; 20)$ là $4+m_2=14$ nên $m_2=10$. Tổng các tần số bằng $50$ nên $m_4=50-(4+10+18+3)=15$.

**Đáp số.** $n=50$; nhóm $[10; 20)$ có $10$; nhóm $[30; 40)$ có $15$.
:::

## Kiểm tra mini

:::quiz
::mc NB
Một mẫu số liệu ghép nhóm cỡ $50$ có một nhóm với tần số $12$. Tần số tương đối của nhóm đó là
A. $12\%$.
B. $62\%$.
C. $4{,}2\%$.
D. $24\%$.
::key D
$\dfrac{12}{50}\cdot100\%=24\%$. Phương án A coi tần số là phần trăm, phương án C là $\dfrac{50}{12}$.

::mc NB
Giá trị đại diện của nhóm $[160; 170)$ là
A. $165$.
B. $160$.
C. $10$.
D. $330$.
::key A
$\dfrac{160+170}{2}=165$. Phương án C là độ rộng của nhóm, phương án D là tổng hai đầu mút chưa chia $2$.

::mc TH
Một mẫu có bốn nhóm với các tần số lần lượt là $4, 9, 12, 5$. Tần số tích luỹ của nhóm thứ ba là
A. $12$.
B. $25$.
C. $13$.
D. $21$.
::key B
$4+9+12=25$. Phương án A là tần số của chính nhóm thứ ba, phương án C là $4+9$, phương án D là $9+12$.

::mc TH
Cách ghép nhóm nào sau đây hợp lệ cho các số liệu nhận giá trị từ $3$ đến $28$?
A. $[0; 10)$, $[15; 25)$, $[25; 35)$.
B. $[0; 10]$, $[10; 20]$, $[20; 30]$.
C. $[0; 10)$, $[10; 20)$, $[20; 30)$.
D. $[5; 15)$, $[15; 25)$.
::key C
Các nhóm $[0; 10)$, $[10; 20)$, $[20; 30)$ liên tiếp, không chồng lấn và bao phủ mọi giá trị từ $3$ đến $28$. Phương án B chồng lấn tại $10$ và $20$, phương án A bỏ trống $[10; 15)$, phương án D không chứa các số $3$ và $28$.

::tf NB TH TH TH
Thời gian chờ xe buýt của $25$ hành khách được ghép nhóm: $[0; 5)$ có $7$, $[5; 10)$ có $10$, $[10; 15)$ có $6$, $[15; 20)$ có $2$ hành khách. Xét tính đúng sai của các mệnh đề sau:
a) Tần số tương đối của nhóm $[0; 5)$ là $7\%$.
b) Có $15$ hành khách chờ dưới $10$ phút.
c) Tần số tích luỹ của nhóm $[10; 15)$ là $23$.
d) Có $5$ hành khách chờ ít nhất $15$ phút.
::key S S Đ S
a) Sai: $\dfrac{7}{25}\cdot100\%=28\%$. b) Sai: $7+10=17$ hành khách. c) Đúng: $7+10+6=23$. d) Sai: nhóm $[15; 20)$ chỉ có $2$ hành khách.

::sa NB
Một mẫu số liệu ghép nhóm cỡ $80$ có nhóm $[20; 30)$ với tần số $28$. Tần số tương đối của nhóm đó là bao nhiêu phần trăm?
::key 35
$\dfrac{28}{80}\cdot100\%=35\%$.

::sa NB
Giá trị đại diện của nhóm $[12{,}5; 17{,}5)$ bằng bao nhiêu?
::key 15
$\dfrac{12{,}5+17{,}5}{2}=15$.
:::
