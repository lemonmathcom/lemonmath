---
title: Ôn tập các phép tính với số tự nhiên
description: Em ôn cộng, trừ, nhân, chia số tự nhiên, thứ tự thực hiện phép tính, cách tính nhanh bằng tính chất và bài toán có lời văn nhiều bước.
minutes: 15
---

:::goals
- Cộng, trừ, nhân, chia số tự nhiên nhiều chữ số và thử lại kết quả.
- Làm đúng thứ tự các phép tính, kể cả khi có dấu ngoặc.
- Dùng tính chất giao hoán, kết hợp, phân phối để tính nhanh.
- Giải bài toán nhiều bước và viết gọn thành một biểu thức.
:::

Lớp 5A quyên góp sách cũ cho thư viện. Tuần đầu lớp được $235$ quyển, tuần sau được $179$ quyển. Bạn thủ thư xếp đều tất cả số sách vào $9$ thùng. Hỏi mỗi thùng có bao nhiêu quyển sách?

Bài này cần cả phép cộng lẫn phép chia. Em sẽ ôn bốn phép tính và học cách gộp các bước thành một biểu thức.

## Cùng khám phá

Em giải từng bước:

- Số sách của cả hai tuần: $235+179=414$ (quyển).
- Số sách mỗi thùng: $414:9=46$ (quyển).

Khi gộp hai bước, em phải đặt **dấu ngoặc** để phép cộng được làm trước:
$$(235+179):9=414:9=46.$$

Nếu bỏ ngoặc, biểu thức $235+179:9$ sẽ tính $179:9$ trước, và kết quả sai. Em thấy không, thứ tự các phép tính quyết định kết quả.

:::theorem Thứ tự thực hiện phép tính
1. Chỉ có cộng và trừ (hoặc chỉ có nhân và chia): làm từ trái sang phải.
2. Có cả bốn phép tính, không có ngoặc: **nhân, chia trước; cộng, trừ sau**.
3. Có ngoặc: làm **trong ngoặc trước**.
:::

Hình dưới cho thấy tính chất phân phối với $6\times(40+3)$.

:::diagram Tính chất phân phối: 6 × (40 + 3)
alt: Hình chữ nhật cao 6 chia thành hai phần: phần rộng 40 có diện tích 6 × 40 và phần rộng 3 có diện tích 6 × 3
point P 0,0 ""
point Q 4,0 ""
point R 5.6,0 ""
point S 0,2 ""
point T 4,2 ""
point U 5.6,2 ""
polygon P Q T S
polygon Q R U T
label 2,1 "6 × 40"
label 4.8,1 "6 × 3"
label 2,-0.5 "40"
label 4.8,-0.5 "3"
label -0.5,1 "6"
:::

Cả hình có diện tích $6\times(40+3)=6\times43=258$, cũng bằng $6\times40+6\times3=240+18=258$.

:::theorem Ba tính chất của phép tính
- Giao hoán: $a+b=b+a$ và $a\times b=b\times a$.
- Kết hợp: $(a+b)+c=a+(b+c)$ và $(a\times b)\times c=a\times(b\times c)$.
- Phân phối: $a\times(b+c)=a\times b+a\times c$.
:::

## Ví dụ

Ta bắt đầu với phép cộng và phép trừ.

:::example Cộng và trừ nhiều chữ số
Tính a) $4\,586+3\,729$; b) $7\,002-3\,458$.

**Lời giải.** Em đặt tính thẳng hàng, làm từ hàng đơn vị; cộng thì nhớ, trừ thì mượn:
$$\begin{array}{r}4\,586\\+\ 3\,729\\\hline 8\,315\end{array}\qquad\qquad\begin{array}{r}7\,002\\-\ 3\,458\\\hline 3\,544\end{array}$$
Ở câu b, hàng chục và hàng trăm đều là $0$ nên em mượn từ hàng nghìn.

Vậy $4\,586+3\,729=8\,315$ và $7\,002-3\,458=3\,544$.

**Thử lại.** $3\,544+3\,458=7\,002$. Đúng.
:::

Tiếp theo là phép nhân và phép chia.

:::example Nhân và chia
Tính a) $537\times48$; b) $2\,184:7$.

**Lời giải.** Câu a: em nhân $537$ với $8$ rồi với $40$, sau đó cộng hai tích riêng:
$$537\times48=537\times8+537\times40=4\,296+21\,480=25\,776.$$
Câu b: em chia từ trái sang phải: $21:7=3$; hạ $8$, $8:7=1$ dư $1$; hạ $4$ được $14$, $14:7=2$. Vậy $2\,184:7=312$.

**Thử lại.** $312\times7=2\,184$. Đúng.
:::

Với biểu thức nhiều phép tính, em phải chú ý thứ tự.

:::example Tính giá trị biểu thức
Tính a) $84-12\times5+36:4$; b) $120:(18-6)\times4$.

**Lời giải.** Câu a không có ngoặc, nên nhân và chia làm trước:
$$\begin{aligned}84-12\times5+36:4&=84-60+9\\&=24+9\\&=33.\end{aligned}$$
Câu b làm trong ngoặc trước, rồi chia và nhân từ trái sang phải:
$$\begin{aligned}120:(18-6)\times4&=120:12\times4\\&=10\times4\\&=40.\end{aligned}$$
Vậy hai biểu thức có giá trị $33$ và $40$.
:::

Khi các số "đẹp", em dùng tính chất để tính nhanh.

:::example Tính nhanh
Tính a) $25\times37\times4$; b) $6\times43+6\times57$.

**Lời giải.** Câu a: đổi chỗ $37$ và $4$, rồi nhóm $25\times4=100$:
$$25\times37\times4=(25\times4)\times37=100\times37=3\,700.$$
Câu b: hai tích có chung thừa số $6$, nên em đặt $6$ ra ngoài:
$$6\times43+6\times57=6\times(43+57)=6\times100=600.$$
Vậy kết quả là $3\,700$ và $600$.
:::

:::warning Những lỗi em hay gặp
- **Làm từ trái sang phải khi có nhân.** Sai: $18+6\times4=24\times4=96$. Vì sao sai: phải nhân trước khi cộng. Đúng: $18+6\times4=18+24=42$.
- **Quên mượn khi có chữ số $0$.** Sai: $7\,002-3\,458=4\,456$. Vì sao sai: em lấy số lớn trừ số bé ở từng hàng. Đúng: $7\,002-3\,458=3\,544$.
- **Quên chữ số $0$ ở thương.** Sai: $1\,260:6=21$. Vì sao sai: $6\times21=126$, không bằng $1\,260$. Đúng: $1\,260:6=210$.
:::

## Thuật ngữ

:::terms
- thừa số | factor
- số bị chia | dividend
- số chia | divisor
- thương | quotient
- số dư | remainder
- biểu thức | expression
- thứ tự thực hiện phép tính | order of operations
- tính chất giao hoán | commutative law
- tính chất kết hợp | associative law
- tính chất phân phối | distributive law
:::

## Tóm tắt

- Đặt tính thẳng hàng, làm từ hàng đơn vị, rồi thử lại bằng phép tính ngược.
- Không có ngoặc: nhân, chia trước; cộng, trừ sau. Có ngoặc: làm trong ngoặc trước.
- Tính chất giao hoán, kết hợp, phân phối giúp tính nhanh, ví dụ $25\times37\times4=(25\times4)\times37$.
- Bài toán nhiều bước: làm từng bước, ghi đơn vị. Phép chia còn dư mà ai cũng cần một chỗ thì phải thêm một nhóm.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Đặt tính rồi tính: a) $5\,274+3\,968$; b) $6\,005-2\,847$.

::hint
**Kiến thức:** đặt tính thẳng hàng; cộng thì nhớ, trừ thì mượn.

**Gợi ý các bước:**
1. Đặt tính, làm từ hàng đơn vị.
2. Thử lại bằng phép tính ngược.

::solution
a) $5\,274+3\,968=9\,242$.

b) $6\,005-2\,847=3\,158$ (thử lại: $3\,158+2\,847=6\,005$).

**Đáp số.** a) $9\,242$; b) $3\,158$.
:::

:::exercise
Tính: a) $406\times25$; b) $3\,150:15$.

::hint
**Kiến thức:** $25=20+5$; hàng nào không chia được thì viết $0$ ở thương.

**Gợi ý các bước:**
1. Câu a: tính $406\times20$ và $406\times5$, rồi cộng.
2. Câu b: chia lần lượt từng hàng, chú ý chữ số $0$.

::solution
a) $406\times25=8\,120+2\,030=10\,150$.

b) $3\,150:15=210$, vì $15\times210=3\,150$.

**Đáp số.** a) $10\,150$; b) $210$.
:::

:::exercise
Tính giá trị biểu thức: a) $56+24:6\times5$; b) $90-(18+12)\times2$.

::hint
**Kiến thức:** nhân, chia làm trước cộng, trừ; trong ngoặc làm trước.

**Gợi ý các bước:**
1. Câu a: làm $24:6\times5$ từ trái sang phải trước.
2. Câu b: tính trong ngoặc trước.

::solution
a) $56+24:6\times5=56+4\times5=56+20=76$.

b) $90-(18+12)\times2=90-30\times2=90-60=30$.

**Đáp số.** a) $76$; b) $30$.
:::

:::exercise
Tính nhanh: a) $4\times18\times25$; b) $75\times34+75\times66$.

::hint
**Kiến thức:** nhóm $4\times25=100$; đặt thừa số chung ra ngoài.

**Gợi ý các bước:**
1. Câu a: đổi chỗ để $4$ và $25$ đứng cạnh nhau.
2. Câu b: viết $75\times(34+66)$.

::solution
a) $4\times18\times25=(4\times25)\times18=100\times18=1\,800$.

b) $75\times34+75\times66=75\times(34+66)=75\times100=7\,500$.

**Đáp số.** a) $1\,800$; b) $7\,500$.
:::

:::exercise
Mẹ mua $3$ hộp sữa, mỗi hộp $38\,000$ đồng, và $2$ túi bánh, mỗi túi $25\,000$ đồng. Mẹ đưa cô bán hàng $200\,000$ đồng. Hỏi cô trả lại mẹ bao nhiêu tiền?

::hint
**Kiến thức:** tiền trả lại bằng tiền đưa trừ tiền phải trả.

**Gợi ý các bước:**
1. Tính tiền sữa và tiền bánh.
2. Lấy $200\,000$ trừ tổng hai số tiền.

::solution
Tiền sữa: $3\times38\,000=114\,000$ (đồng).

Tiền bánh: $2\times25\,000=50\,000$ (đồng).

Tiền trả lại: $200\,000-(114\,000+50\,000)=36\,000$ (đồng).

**Đáp số.** $36\,000$ đồng.
:::

:::exercise
Có $250$ học sinh đi tham quan. Mỗi xe chở nhiều nhất $45$ học sinh. Cần ít nhất bao nhiêu xe?

::hint
**Kiến thức:** nếu phép chia còn dư thì cần thêm một xe.

**Gợi ý các bước:**
1. Tính $250:45$, tìm thương và số dư.
2. Số dư khác $0$ nghĩa là còn học sinh chưa có xe.

::solution
$250:45=5$ (dư $25$). Năm xe chở $225$ học sinh, còn $25$ học sinh nên cần thêm $1$ xe: $5+1=6$.

**Đáp số.** $6$ xe.
:::

:::exercise
Em hãy nhớ lại bài trước. Dùng bốn chữ số $3,\ 0,\ 8,\ 5$, mỗi chữ số đúng một lần, lập số lớn nhất và số bé nhất có bốn chữ số. Tính hiệu hai số đó.

::hint
**Kiến thức:** số lớn nhất: xếp các chữ số từ lớn đến bé. Số bé nhất: chữ số đầu phải khác $0$.

**Gợi ý các bước:**
1. Lập số lớn nhất và số bé nhất.
2. Lấy số lớn trừ số bé.

::solution
Số lớn nhất là $8\,530$, số bé nhất là $3\,058$. Hiệu là $8\,530-3\,058=5\,472$.

**Đáp số.** $5\,472$.
:::

:::exercise Thử thách
Tìm số tự nhiên $x$ biết $5\times(x+12)-30=120$.

::hint
**Kiến thức:** tìm thành phần chưa biết bằng phép tính ngược.

**Gợi ý các bước:**
1. Tìm $5\times(x+12)$: đó là số bị trừ.
2. Tìm $x+12$, rồi tìm $x$.

::solution
$5\times(x+12)=120+30=150$, nên $x+12=150:5=30$ và $x=30-12=18$.

**Kiểm tra.** $5\times(18+12)-30=150-30=120$. Đúng.

**Đáp số.** $18$.
:::

## Kiểm tra mini

:::quiz
::mc
Giá trị của biểu thức $18+6\times4$ là
A. $96$.
B. $24$.
C. $28$.
D. $42$.
::key D
Nhân trước: $18+24=42$. Phương án A là lỗi cộng trước: $(18+6)\times4=96$.

::mc
Kết quả của $7\,000-2\,345$ là
A. $4\,655$.
B. $5\,765$.
C. $5\,345$.
D. $9\,345$.
::key A
$4\,655+2\,345=7\,000$. Phương án C là lấy số lớn trừ số bé ở từng hàng; phương án D là cộng thay vì trừ.

::mc
Giá trị của $12\times35+12\times65$ là
A. $485$.
B. $1\,200$.
C. $100$.
D. $112$.
::key B
$12\times(35+65)=12\times100=1\,200$. Phương án A chỉ nhân $12$ với $35$; phương án C quên nhân với $12$.

::mc
Mỗi hộp có $12$ cái bút. Cô mua $9$ hộp rồi tặng đi $25$ cái. Cô còn lại bao nhiêu cái bút?
A. $123$.
B. $133$.
C. $83$.
D. $183$.
::key C
$9\times12=108$, rồi $108-25=83$. Phương án B là lấy $108+25$, nhầm sang phép cộng.

::tf
Em xét biểu thức $A=60-12\times3+24:4$.
a) Phép nhân $12\times3$ và phép chia $24:4$ được làm trước phép trừ và phép cộng.
b) $A=48\times3+6$.
c) $A=30$.
d) $A$ lớn hơn $35$.
::key Đ S Đ S
a) Đúng: không có ngoặc thì nhân, chia làm trước. b) Sai: $48\times3+6=150$, vì đã trừ $60-12$ trước. c) Đúng: $60-36+6=30$. d) Sai: $30<35$.

::sa
Tính giá trị của biểu thức $(36+14)\times8-250$.
::key 150
$50\times8=400$, rồi $400-250=150$.

::sa
Kho có $12$ thùng gạo, mỗi thùng $45$ kg. Người ta bán $8$ thùng. Trong kho còn lại bao nhiêu ki-lô-gam gạo?
::key 180
Còn $12-8=4$ thùng, nên có $4\times45=180$ (kg).
:::
