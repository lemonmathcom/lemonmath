---
title: Bảng tần số và biểu đồ tần số
description: Lập bảng tần số từ một mẫu dữ liệu, vẽ và đọc biểu đồ tần số dạng cột, dạng đoạn thẳng, rồi dùng chúng để nhận xét và ra quyết định.
minutes: 20
---

:::goals
- Lập được bảng tần số của một mẫu dữ liệu.
- Vẽ và đọc được biểu đồ tần số dạng cột, dạng đoạn thẳng.
- Dùng bảng, biểu đồ tần số để nhận xét và ra quyết định trong thực tế.
:::

Theo khuyến nghị của Viện Hàn lâm Y học Giấc ngủ Hoa Kỳ (dẫn theo trang của CDC Hoa Kỳ), thiếu niên từ 13 đến 18 tuổi cần ngủ từ 8 đến 10 giờ trong mỗi 24 giờ. Giả sử cô chủ nhiệm lớp 9A hỏi 30 bạn: "Đêm qua em ngủ mấy giờ?" và ghi lại (làm tròn đến giờ):

$$7,\ 8,\ 8,\ 8,\ 8,\ 7,\ 8,\ 6,\ 7,\ 9,\ 6,\ 7,\ 6,\ 9,\ 7,\ 7,\ 5,\ 8,\ 5,\ 9,\ 7,\ 7,\ 5,\ 8,\ 6,\ 6,\ 6,\ 7,\ 8,\ 7.$$

Lớp có bao nhiêu bạn ngủ đủ giấc? Ba mươi con số lộn xộn che mất câu trả lời; bài này giúp ta sắp xếp chúng để câu trả lời hiện ra.

## Bảng tần số

### Khám phá: đếm từng giá trị

Trong dãy trên chỉ có năm giá trị khác nhau: $5$, $6$, $7$, $8$, $9$. Ta đếm xem mỗi giá trị xuất hiện bao nhiêu lần:

| Số giờ ngủ | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|
| Số bạn | $3$ | $6$ | $10$ | $8$ | $3$ |

Kiểm tra: $3+6+10+8+3=30$. Bây giờ câu trả lời hiện ra: chỉ $8+3=11$ bạn ngủ từ 8 giờ trở lên, chưa đến một nửa lớp.

:::definition Tần số và bảng tần số
- Số lần xuất hiện của một giá trị trong mẫu dữ liệu gọi là **tần số** của giá trị đó.
- **Bảng tần số** gồm một hàng ghi các giá trị khác nhau $x_1, x_2, \ldots, x_k$ của mẫu dữ liệu và một hàng ghi tần số tương ứng $m_1, m_2, \ldots, m_k$.
- Tổng các tần số bằng số dữ liệu của mẫu, gọi là **cỡ mẫu**: $n=m_1+m_2+\ldots+m_k$.
:::

**Hiểu sâu hơn.** Bảng tần số "nén" ba mươi con số thành năm cặp (giá trị; tần số), chỉ mất thứ tự và danh tính ("ai ngủ 5 giờ"). Giá trị $8$ có tần số $8$ chỉ là trùng hợp.

:::example Số bàn thắng trong giải bóng đá
Giả sử số bàn thắng trong 20 trận của một giải bóng đá học sinh như sau:

$$0,\ 2,\ 1,\ 3,\ 3,\ 0,\ 4,\ 1,\ 2,\ 3,\ 5,\ 1,\ 2,\ 0,\ 3,\ 2,\ 1,\ 1,\ 2,\ 1.$$

a) Lập bảng tần số của mẫu dữ liệu.

b) Cả giải có tất cả bao nhiêu bàn thắng?

**Lời giải.** a) Đếm số lần xuất hiện của mỗi giá trị $0, 1, 2, 3, 4, 5$, ta được bảng tần số:

| Số bàn thắng ($x$) | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| Số trận ($m$) | $3$ | $6$ | $5$ | $4$ | $1$ | $1$ |

Kiểm tra: $3+6+5+4+1+1=20=n$.

b) Có $m$ trận cùng có $x$ bàn thắng, chúng góp $x\cdot m$ bàn. Do đó tổng số bàn thắng là

$$0\cdot3+1\cdot6+2\cdot5+3\cdot4+4\cdot1+5\cdot1=0+6+10+12+4+5=37.$$

Vậy cả giải có $37$ bàn thắng.
:::

## Biểu đồ tần số dạng cột

Bảng tần số cho con số chính xác, còn biểu đồ cho thấy *hình dạng* của dữ liệu. Giả sử nhà trường hỏi 200 học sinh khối 9 về giấc ngủ và được bảng tần số:

| Số giờ ngủ | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|
| Số học sinh | $24$ | $46$ | $68$ | $44$ | $18$ |

Để vẽ **biểu đồ tần số dạng cột**: trục ngang ghi các giá trị $x$, trục đứng ghi tần số $m$; tại mỗi giá trị $x_i$ vẽ một cột cao $m_i$, các cột rộng bằng nhau và cách đều nhau; ghi tên biểu đồ.

:::graph Số giờ ngủ của 200 học sinh khối 9
alt: Biểu đồ cột: trục ngang là số giờ ngủ 5, 6, 7, 8, 9; các cột cao lần lượt 24, 46, 68, 44, 18
x: 4..10
y: 0..80
fill: 24 ; 0 ; 4.7..5.3
fill: 46 ; 0 ; 5.7..6.3
fill: 68 ; 0 ; 6.7..7.3
fill: 44 ; 0 ; 7.7..8.3
fill: 18 ; 0 ; 8.7..9.3
:::

Trục ngang ($x$) là số giờ ngủ, trục đứng ($y$) là số học sinh. Chỉ cần nhìn, ta thấy cột $7$ cao nhất, các cột thấp dần về hai phía.

:::example Đọc biểu đồ cột
Dựa vào biểu đồ trên, hãy so sánh số học sinh ngủ từ 8 giờ trở lên với số học sinh ngủ dưới 7 giờ.

**Lời giải.** Số học sinh ngủ từ 8 giờ trở lên là $44+18=62$. Số học sinh ngủ dưới 7 giờ là $24+46=70$.

Vậy số học sinh ngủ dưới 7 giờ nhiều hơn số học sinh ngủ đủ giấc $8$ bạn.
:::

## Biểu đồ tần số dạng đoạn thẳng

Khi các giá trị là số có thứ tự, ta còn vẽ được **biểu đồ tần số dạng đoạn thẳng**: đánh dấu các điểm $(x_i; m_i)$ rồi nối các điểm liên tiếp bằng đoạn thẳng.

:::graph Biểu đồ đoạn thẳng của cùng mẫu dữ liệu
alt: Đường gấp khúc nối các điểm (5; 24), (6; 46), (7; 68), (8; 44), (9; 18)
x: 4..10
y: 0..80
segment: (5, 24) (6, 46)
segment: (6, 46) (7, 68)
segment: (7, 68) (8, 44)
segment: (8, 44) (9, 18)
:::

Đường gấp khúc cho thấy rõ xu hướng: tần số tăng đến 7 giờ rồi giảm. Nhưng với dữ liệu không phải số, như môn thể thao yêu thích, đoạn thẳng nối "bóng đá" với "cầu lông" không có nghĩa gì: khi đó ta dùng biểu đồ cột.

:::example Cửa hàng giày nên nhập hàng thế nào?
Giả sử một cửa hàng giày thể thao ghi lại cỡ giày của 100 đôi bán được trong tháng trước:

| Cỡ giày | $37$ | $38$ | $39$ | $40$ | $41$ | $42$ |
|---|---|---|---|---|---|---|
| Số đôi | $12$ | $20$ | $31$ | $25$ | $9$ | $3$ |

Chủ cửa hàng định nhập 120 đôi cho tháng sau, mỗi cỡ 20 đôi. Nếu nhu cầu không đổi, hãy nhận xét kế hoạch này.

**Lời giải.**

*Hiểu đề.* Bảng tần số cho biết nhu cầu từng cỡ; mỗi cỡ được nhập $20$ đôi.

*Tìm cách giải.* Với mỗi cỡ, so sánh $20$ với tần số $m$: $m>20$ là thiếu hàng, $m<20$ là thừa hàng.

*Giải.* Cỡ 39 thiếu $31-20=11$ đôi, cỡ 40 thiếu $25-20=5$ đôi, tức là mất $16$ lượt bán. Cỡ 37, 41, 42 thừa $(20-12)+(20-9)+(20-3)=36$ đôi.

Vậy kế hoạch chia đều không hợp lí: nên nhập nhiều cỡ 39, 40 và ít cỡ 41, 42, theo hình dạng của bảng tần số.

*Nhìn lại.* Chỉ biết "cỡ trung bình khoảng 39" thì có đủ không? Không: con số đó không cho biết cần bao nhiêu đôi cỡ 37 hay 42.
:::

:::warning Những sai lầm thường gặp
- **Tổng tần số khác cỡ mẫu** (đếm sót, đếm trùng). Luôn cộng hàng tần số và so với $n$.
- **Nhầm giá trị với tần số.** Sai: "giá trị lớn nhất là $68$". Đúng: $68$ là tần số lớn nhất, ứng với giá trị $7$.
- **Vẽ cột rộng hẹp khác nhau.** Mắt người so sánh diện tích, nên cột rộng trông như "nhiều hơn".
:::

**Kết nối.** Bảng tần số tiếp nối các biểu đồ đã học ở lớp 6, 7 và là nền móng của cả chương: bài sau ta chia tần số cho cỡ mẫu để được [tần số tương đối](lesson:relative-frequency-tables), rồi [ghép nhóm](lesson:grouped-frequency-tables) khi dữ liệu có quá nhiều giá trị; lên lớp 10, từ bảng tần số ta tính số trung bình, trung vị.

## Thuật ngữ

:::terms
- mẫu dữ liệu | data set
- giá trị | value
- tần số | frequency
- bảng tần số | frequency table
- cỡ mẫu | sample size
- biểu đồ tần số dạng cột | frequency bar chart
- biểu đồ tần số dạng đoạn thẳng | frequency line graph
:::

## Tóm tắt

- Tần số: số lần một giá trị xuất hiện; $m_1+m_2+\ldots+m_k=n$ (cỡ mẫu).
- Biểu đồ cột: cột cao bằng tần số, các cột rộng bằng nhau.
- Biểu đồ đoạn thẳng: nối các điểm $(x_i; m_i)$; chỉ dùng khi giá trị là số.
- Tổng các dữ liệu: $x_1m_1+x_2m_2+\ldots+x_km_k$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Giả sử số con trong gia đình của 20 học sinh là:

$$2,\ 2,\ 4,\ 3,\ 3,\ 2,\ 1,\ 1,\ 2,\ 1,\ 2,\ 3,\ 2,\ 1,\ 2,\ 3,\ 2,\ 1,\ 2,\ 2.$$

a) Lập bảng tần số của mẫu dữ liệu.

b) Có bao nhiêu gia đình có từ 3 con trở lên?

::hint
**Kiến thức:** tần số là số lần xuất hiện; tổng các tần số bằng cỡ mẫu.

**Gợi ý các bước:**
1. Đếm số lần xuất hiện của $1, 2, 3, 4$.
2. Cộng tần số của $3$ và $4$.

::solution
a) Các giá trị $1, 2, 3, 4$ có tần số lần lượt là $5, 10, 4, 1$ (tổng $20$).

b) Vậy có $4+1=5$ gia đình có từ 3 con trở lên.

**Đáp số.** a) $5, 10, 4, 1$; b) $5$.
:::

:::exercise
Giả sử 36 học sinh lớp 9B chọn môn thể thao yêu thích: bóng đá $13$ bạn, cầu lông $9$ bạn, bơi $8$ bạn, còn lại chọn bóng rổ.

a) Tìm số bạn chọn bóng rổ.

b) Nên dùng biểu đồ cột hay biểu đồ đoạn thẳng cho dữ liệu này? Giải thích.

::hint
**Kiến thức:** tổng các tần số bằng cỡ mẫu; biểu đồ đoạn thẳng chỉ dùng cho giá trị là số.

**Gợi ý các bước:**
1. Lấy $36$ trừ ba tần số đã biết.
2. Tên môn có phải là số không?

::solution
a) Số bạn chọn bóng rổ là $36-(13+9+8)=6$.

b) Các giá trị là tên môn, không phải số, nên đoạn thẳng nối hai môn không có nghĩa. Vậy ta dùng biểu đồ cột.

**Đáp số.** a) $6$; b) biểu đồ cột.
:::

:::exercise
Biểu đồ tần số dạng đoạn thẳng về số lỗi chính tả của một nhóm học sinh đi qua các điểm $(0; 4)$, $(1; 9)$, $(2; 7)$, $(3; 3)$, $(4; 1)$. Tính số học sinh và tổng số lỗi của cả nhóm.

::hint
**Kiến thức:** điểm $(x_i; m_i)$ cho giá trị $x_i$ và tần số $m_i$.

**Gợi ý các bước:**
1. Cộng các tung độ để được cỡ mẫu.
2. Cộng các tích $x\cdot m$.

::solution
Ta có $n=4+9+7+3+1=24$. Tổng số lỗi là

$$0\cdot4+1\cdot9+2\cdot7+3\cdot3+4\cdot1=36.$$

Vậy nhóm có $24$ học sinh, mắc $36$ lỗi.

**Đáp số.** $24$ học sinh; $36$ lỗi.
:::

:::exercise
Giả sử trong 60 xe máy qua cổng trường lúc 6 giờ 45 có $21$ xe chở 1 người, $34$ xe chở 2 người, $5$ xe chở 3 người.

a) Tính tổng số người trên 60 xe máy đó.

b) Nếu tất cả số người này đi xe buýt 40 chỗ thì cần ít nhất bao nhiêu chuyến? Nhận xét.

::hint
**Kiến thức:** tổng dữ liệu $x_1m_1+\ldots+x_km_k$.

**Gợi ý các bước:**
1. Tính $1\cdot21+2\cdot34+3\cdot5$.
2. Chia cho $40$ rồi làm tròn lên.

::solution
a) Ta có bảng tần số:

| Số người trên xe | $1$ | $2$ | $3$ |
|---|---|---|---|
| Số xe (tần số) | $21$ | $34$ | $5$ |

Tổng số người bằng tổng các tích của mỗi giá trị với tần số của nó:
$$1\cdot21+2\cdot34+3\cdot5=21+68+15=104.$$

Vậy có tất cả $104$ người trên $60$ xe máy.

b) Mỗi chuyến xe buýt chở được $40$ người. Ta có $104:40=2{,}6$.

Vì số chuyến là số tự nhiên và $2<2{,}6\le3$ nên cần ít nhất $3$ chuyến.

Vậy cần ít nhất $3$ chuyến xe buýt. *Nhận xét:* chỉ $3$ chuyến xe buýt có thể thay cho $60$ lượt xe máy, giúp giảm ùn tắc ở cổng trường.

**Đáp số.** a) $104$; b) $3$.
:::

:::exercise
**(1,5 điểm)** Giả sử thời gian (phút) đi từ nhà đến trường của 20 học sinh là:

$$10,\ 15,\ 20,\ 10,\ 15,\ 30,\ 25,\ 5,\ 15,\ 10,\ 5,\ 10,\ 15,\ 20,\ 10,\ 15,\ 10,\ 20,\ 5,\ 15.$$

a) Lập bảng tần số của mẫu dữ liệu.

b) Có bao nhiêu học sinh mất hơn 15 phút?

c) Tính tổng thời gian đi đến trường của 20 học sinh.

::hint
**Kiến thức:** bảng tần số; tổng dữ liệu $x_1m_1+\ldots+x_km_k$.

**Gợi ý các bước:**
1. Đếm số lần xuất hiện của $5, 10, 15, 20, 25, 30$.
2. "Hơn 15 phút" không gồm $15$.

::solution
a) Đếm số lần xuất hiện của mỗi giá trị trong mẫu dữ liệu, ta được bảng tần số:

| Thời gian (phút) | $5$ | $10$ | $15$ | $20$ | $25$ | $30$ |
|---|---|---|---|---|---|---|
| Tần số | $3$ | $6$ | $6$ | $3$ | $1$ | $1$ |

Kiểm tra: $3+6+6+3+1+1=20$, đúng bằng số học sinh.

b) Các học sinh mất hơn $15$ phút ứng với các giá trị $20$, $25$, $30$. Số học sinh đó là
$$3+1+1=5.$$

Vậy có $5$ học sinh mất hơn $15$ phút.

c) Tổng thời gian bằng tổng các tích của mỗi giá trị với tần số của nó:
$$5\cdot3+10\cdot6+15\cdot6+20\cdot3+25\cdot1+30\cdot1=15+60+90+60+25+30=280.$$

Vậy tổng thời gian đi đến trường của $20$ học sinh là $280$ phút.

**Đáp số.** a) $3, 6, 6, 3, 1, 1$; b) $5$; c) $280$ phút.
:::

:::exercise
Giả sử lớp 9C (40 học sinh) có $14$ bạn ngủ từ 8 giờ trở lên, lớp 9D (35 học sinh) cũng có $14$ bạn như vậy. Bạn Hà nói: "Hai lớp ngủ đủ giấc như nhau." Bạn có đồng ý không? Giải thích.

::hint
**Kiến thức:** hai mẫu có cỡ khác nhau thì so sánh số lượng *so với* cỡ mẫu.

**Gợi ý các bước:**
1. Tính tỉ số giữa số bạn ngủ đủ và sĩ số mỗi lớp.
2. So sánh hai tỉ số.

::solution
Hai lớp có sĩ số khác nhau nên ta không so sánh số học sinh mà so sánh tần số tương đối (tỉ lệ) học sinh ngủ đủ giấc.

Ở lớp 9C, tần số tương đối là $\dfrac{14}{40}=0{,}35=35\%$.

Ở lớp 9D, tần số tương đối là $\dfrac{14}{35}=0{,}4=40\%$.

Vì $35\%<40\%$ nên tỉ lệ học sinh ngủ đủ giấc ở lớp 9D cao hơn ở lớp 9C.

Vậy không đồng ý với bạn Hà: tuy số học sinh bằng nhau nhưng lớp 9D ngủ đủ giấc hơn.

**Đáp số.** Không đồng ý ($0{,}35<0{,}4$).
:::

:::exercise
Giả sử điểm kiểm tra của 40 học sinh cho trong bảng sau, $x$, $y$ là các số tự nhiên. Biết tổng điểm của cả 40 học sinh là $312$. Tìm $x$, $y$. (Ôn lại [giải hệ phương trình](lesson:solving-simultaneous-equations).)

| Điểm | $6$ | $7$ | $8$ | $9$ | $10$ |
|---|---|---|---|---|---|
| Số học sinh | $5$ | $x$ | $12$ | $y$ | $3$ |

::hint
**Kiến thức:** tổng tần số bằng cỡ mẫu; tổng điểm là $x_1m_1+\ldots+x_km_k$.

**Gợi ý các bước:**
1. Lập hai phương trình từ cỡ mẫu và tổng điểm.
2. Giải hệ bằng phương pháp thế.

::solution
Theo đề bài, ta có $5+x+12+y+3=40$ và $30+7x+96+9y+30=312$, suy ra

$$\begin{cases} x+y=20\\ 7x+9y=156.\end{cases}$$

Thay $y=20-x$ vào phương trình thứ hai, ta được $7x+180-9x=156$, suy ra $x=12$, $y=8$ (thoả mãn).

Vậy $x=12$, $y=8$.

**Đáp số.** $x=12$, $y=8$.
:::

:::exercise Thử thách
Một mẫu dữ liệu gồm 15 số, mỗi số là $1$, $2$ hoặc $3$. Tổng của 15 số là $34$ và số $3$ xuất hiện nhiều gấp đôi số $1$. Lập bảng tần số của mẫu dữ liệu.

::hint
**Kiến thức:** gọi tần số của $1, 2, 3$ là $a, b, c$; dùng cỡ mẫu và tổng dữ liệu.

**Gợi ý các bước:**
1. Viết $a+b+c=15$, $a+2b+3c=34$, $c=2a$.
2. Thay $c=2a$ để còn hệ hai ẩn.

::solution
Gọi $a$, $b$, $c$ là tần số của $1$, $2$, $3$ ($a, b, c\in\mathbb{N}$). Ta có $a+b+c=15$, $a+2b+3c=34$, $c=2a$.

Thay $c=2a$, ta được $3a+b=15$ và $7a+2b=34$. Thay $b=15-3a$ vào phương trình sau: $7a+30-6a=34$, suy ra $a=4$, do đó $b=3$, $c=8$.

Vậy các giá trị $1, 2, 3$ có tần số lần lượt là $4, 3, 8$.

**Đáp số.** $4$, $3$, $8$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho mẫu dữ liệu $3, 5, 4, 5, 2, 5, 4, 3, 5, 1$. Tần số của giá trị $5$ là
A. $5$.
B. $10$.
C. $4$.
D. $2$.
::key C
Giá trị $5$ xuất hiện $4$ lần. A nhầm giá trị với tần số, B là cỡ mẫu, D là tần số của giá trị $3$ (hoặc $4$).

::mc
Một mẫu dữ liệu có bảng tần số: giá trị $1, 2, 3, 4$ với tần số lần lượt $6, 9, 4, 1$. Cỡ mẫu là
A. $20$.
B. $10$.
C. $4$.
D. $9$.
::key A
$n=6+9+4+1=20$. B cộng các giá trị, C là số giá trị khác nhau, D là tần số lớn nhất.

::mc
Trong biểu đồ tần số dạng cột, chiều cao mỗi cột biểu diễn
A. giá trị của dữ liệu.
B. cỡ mẫu.
C. số giá trị khác nhau.
D. tần số của giá trị ứng với cột.
::key D
Chiều cao cột bằng tần số của giá trị ứng với cột. Giá trị được ghi ở chân cột (A), cỡ mẫu là tổng chiều cao các cột (B), số giá trị khác nhau là số cột (C).

::mc
Số bàn thắng trong các trận đấu có bảng tần số: giá trị $0, 1, 2, 3$ với tần số lần lượt $4, 7, 6, 3$. Số trận có ít nhất 2 bàn thắng là
A. $6$.
B. $9$.
C. $16$.
D. $3$.
::key B
$6+3=9$. A chỉ đếm các trận đúng 2 bàn, D chỉ đếm các trận 3 bàn, C đếm các trận có ít nhất 1 bàn.

::tf
Số giờ tự học mỗi ngày của một nhóm học sinh có các giá trị $1, 2, 3, 4$ với tần số lần lượt $5, 8, 4, 3$. Xét tính đúng sai của các mệnh đề sau:
a) Cỡ mẫu là $20$.
b) Giá trị có tần số lớn nhất là $8$.
c) Có $7$ học sinh tự học từ 3 giờ trở lên.
d) Tổng số giờ tự học của cả nhóm là $45$ giờ.
::key Đ S Đ Đ
a) Đúng. b) Sai: $8$ là tần số, giá trị là $2$. c) Đúng: $4+3=7$. d) Đúng: $5+16+12+12=45$.

::sa
Một mẫu dữ liệu cỡ $20$ có bảng tần số: giá trị $5, 6, 7, 8$ với tần số lần lượt $3, x, 7, 4$. Tìm $x$.
::key 6
$x=20-(3+7+4)=6$.

::sa
Số bàn thắng trong các trận đấu có bảng tần số: giá trị $0, 1, 2, 3$ với tần số lần lượt $4, 7, 6, 3$. Tính tổng số bàn thắng của tất cả các trận.
::key 28
$0\cdot4+1\cdot7+2\cdot6+3\cdot3=0+7+12+9=28$.
:::
