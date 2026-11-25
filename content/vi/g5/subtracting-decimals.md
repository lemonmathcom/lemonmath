---
title: Phép trừ số thập phân
description: Em học cách trừ hai số thập phân bằng cách đặt tính thẳng dấu phẩy, thêm chữ số 0 khi cần, rồi giải bài toán có lời văn.
minutes: 15
---

:::goals
- Đặt tính và tính được hiệu của hai số thập phân, ví dụ $7{,}85-3{,}24$.
- Biết thêm chữ số $0$ vào bên phải phần thập phân để hai số có cùng số chữ số thập phân.
- Giải bài toán có lời văn bằng một phép trừ số thập phân và thử lại bằng phép cộng.
:::

Nam có một sợi dây dài $5{,}6$ m. Nam cắt đi $2{,}3$ m để buộc hộp quà. Hỏi sợi dây còn lại dài bao nhiêu mét?

Cả hai số đo đều là số thập phân, nên em chưa thể trừ ngay như với số tự nhiên. Vậy làm sao để trừ cho gọn mà không nhầm? Ta sẽ tìm cách đặt tính cho số thập phân.

## Cùng khám phá

Trước hết, em đổi mét sang đề-xi-mét cho dễ trừ. Ta có $5{,}6$ m $=56$ dm và $2{,}3$ m $=23$ dm.

- Số dây còn lại là $56-23=33$ (dm).
- Đổi lại sang mét: $33$ dm $=3{,}3$ m.

Vậy $5{,}6-2{,}3=3{,}3$. Ta trừ như số tự nhiên $56-23$, rồi đặt dấu phẩy lại đúng chỗ. Cách này dùng được, nhưng đổi đơn vị mãi thì mất công, nên ta muốn có cách gọn hơn.

:::graph Trên tia số: từ 5,6 lùi lại 2,3 để đến 3,3
alt: Tia số từ 0 đến 7, đánh dấu các điểm 3,3 và 5,6; đoạn giữa hai điểm có độ dài 2,3
x: 0..7
y: -1..1
segment: (3.3, 0) (5.6, 0)
point: (3.3, 0) "3,3" below
point: (5.6, 0) "5,6" below
label: (4.45, 0.5) "2,3"
:::

Cách gọn hơn là viết phép trừ theo cột, như sau.

$$\begin{array}{r} 5{,}6 \\ -\ 2{,}3 \\ \hline 3{,}3 \end{array}$$

:::theorem Cách trừ hai số thập phân
Muốn trừ hai số thập phân:
1. Viết số trừ dưới số bị trừ sao cho các chữ số cùng hàng thẳng cột, dấu phẩy thẳng dấu phẩy.
2. Trừ như trừ hai số tự nhiên.
3. Viết dấu phẩy ở hiệu thẳng cột với các dấu phẩy ở số bị trừ và số trừ.
:::

Vì sao các dấu phẩy phải thẳng nhau? Vì khi các chữ số cùng hàng thẳng cột, em luôn trừ phần mười cho phần mười, phần trăm cho phần trăm. Nếu hai số có số chữ số thập phân khác nhau, em thêm chữ số $0$ vào bên phải phần thập phân của số ngắn hơn. Làm vậy không đổi giá trị: $5{,}4=5{,}40$.

## Ví dụ

Ta bắt đầu với hai số có cùng số chữ số thập phân, nên chưa cần mượn.

:::example Tính $7{,}85-3{,}24$
**Lời giải.** Hai số đều có hai chữ số thập phân, nên em đặt tính thẳng dấu phẩy rồi trừ từng hàng:
$$\begin{array}{r} 7{,}85 \\ -\ 3{,}24 \\ \hline 4{,}61 \end{array}$$
Vậy $7{,}85-3{,}24=4{,}61$.
:::

Lần này hai số có số chữ số thập phân khác nhau, và có mượn.

:::example Tính $12{,}4-5{,}78$
**Lời giải.** Số $5{,}78$ có hai chữ số thập phân, còn $12{,}4$ chỉ có một. Em viết $12{,}4=12{,}40$ rồi đặt tính; ở hàng phần trăm, $0$ không trừ được $8$ nên em mượn:
$$\begin{array}{r} 12{,}40 \\ -\ \ 5{,}78 \\ \hline 6{,}62 \end{array}$$
Vậy $12{,}4-5{,}78=6{,}62$.

**Kiểm tra.** $6{,}62+5{,}78=12{,}40$. Đúng.
:::

Còn khi số bị trừ là số tự nhiên thì sao? Em cũng viết thêm dấu phẩy và các chữ số $0$.

:::example Tính $9-3{,}45$
**Lời giải.** Số $9$ viết thành $9{,}00$ để có hai chữ số thập phân như $3{,}45$:
$$\begin{array}{r} 9{,}00 \\ -\ 3{,}45 \\ \hline 5{,}55 \end{array}$$
Vậy $9-3{,}45=5{,}55$.
:::

Phép trừ số thập phân có mặt trong nhiều việc hằng ngày: đo vải, cắt dây, tính tiền thừa. Em thử với một bài về cắt vải.

:::example Cắt vải
Một mảnh vải dài $15{,}2$ m. Cô Hoa dùng $6{,}75$ m để may áo. Hỏi mảnh vải còn lại dài bao nhiêu mét?

**Lời giải.** "Còn lại" nghĩa là bớt đi một phần, nên em làm phép trừ. Em viết $15{,}2=15{,}20$ rồi đặt tính:
$$15{,}20-6{,}75=8{,}45\ \text{(m)}.$$
Vậy mảnh vải còn lại dài $8{,}45$ m.
:::

:::warning Những lỗi em hay gặp
- **Đặt tính không thẳng dấu phẩy.** Sai: viết $12{,}4-5{,}78$ với chữ số $4$ thẳng chữ số $8$. Vì sao sai: $4$ ở hàng phần mười, còn $8$ ở hàng phần trăm. Đúng: dấu phẩy thẳng dấu phẩy, $12{,}40-5{,}78=6{,}62$.
- **Quên thêm chữ số 0.** Sai: $9-3{,}45=6{,}45$. Vì sao sai: em mới lấy $9-3=6$ rồi chép lại $45$. Đúng: $9{,}00-3{,}45=5{,}55$.
- **Quên dấu phẩy ở hiệu.** Sai: $7{,}85-3{,}24=461$. Vì sao sai: hiệu phải nhỏ hơn $7{,}85$. Đúng: $7{,}85-3{,}24=4{,}61$.
- **Trừ ngược ở hàng cần mượn.** Sai: $5{,}2-1{,}7=4{,}5$ (lấy $7-2$). Vì sao sai: $2$ không trừ được $7$ nên phải mượn. Đúng: $5{,}2-1{,}7=3{,}5$.
:::

## Thuật ngữ

:::terms
- phép trừ | subtraction
- số bị trừ | minuend
- số trừ | subtrahend
- hiệu | difference
- số thập phân | decimal
- phần thập phân | decimal part
- hàng phần mười, hàng phần trăm | tenths, hundredths
- phép trừ có nhớ | subtraction with regrouping
- thử lại bằng phép cộng | check by addition
:::

## Tóm tắt

- Đặt tính sao cho các chữ số cùng hàng thẳng cột, **dấu phẩy thẳng dấu phẩy**.
- Hai số có số chữ số thập phân khác nhau: thêm chữ số $0$ vào bên phải phần thập phân của số ngắn hơn, ví dụ $12{,}4=12{,}40$.
- Trừ như số tự nhiên, rồi viết dấu phẩy ở hiệu thẳng cột với các dấu phẩy ở trên.
- Thử lại: hiệu $+$ số trừ $=$ số bị trừ.
- Bài toán hỏi "còn lại", "bớt đi" thường là phép trừ; nhớ ghi đơn vị trong đáp số.
Câu hỏi đầu bài là sợi dây còn lại dài bao nhiêu mét: đó là một phép trừ, và chỉ cần đặt tính thẳng dấu phẩy là làm được. Em nhớ giữ dấu phẩy thẳng cột, rồi làm thêm vài bài cho quen tay.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý để em bắt đầu. Em cứ tự làm trước, chưa vội xem lời giải. Sai một chút cũng không sao, vì sửa được chỗ sai thì em nhớ lâu hơn.

:::exercise
Đặt tính rồi tính $8{,}95-4{,}32$.

::hint
**Kiến thức:** đặt tính dấu phẩy thẳng dấu phẩy rồi trừ như số tự nhiên.

**Gợi ý các bước:**
1. Hai số đều có hai chữ số thập phân.
2. Trừ từng hàng từ phải sang trái, rồi viết dấu phẩy.

::solution
Đặt tính sao cho các chữ số ở cùng một hàng thẳng cột, dấu phẩy thẳng dấu phẩy, rồi trừ như trừ các số tự nhiên (từ phải sang trái):
$$\begin{array}{r} 8{,}95 \\ -\ 4{,}32 \\ \hline 4{,}63 \end{array}$$

Hàng phần trăm: $5-2=3$, viết $3$. Hàng phần mười: $9-3=6$, viết $6$. Hàng đơn vị: $8-4=4$, viết $4$. Viết dấu phẩy ở hiệu thẳng cột với dấu phẩy ở số bị trừ và số trừ.

Thử lại: $4{,}63+4{,}32=8{,}95$. Đúng.

Vậy $8{,}95-4{,}32=4{,}63$.

**Đáp số.** $4{,}63$.
:::

:::exercise
Tính $15{,}7-6{,}9$.

::hint
**Kiến thức:** hàng phần mười: $7$ không trừ được $9$ nên phải mượn.

**Gợi ý các bước:**
1. Đặt tính thẳng dấu phẩy.
2. Mượn $1$ ở hàng đơn vị, rồi trừ từng hàng.

::solution
Hai số đều có một chữ số ở phần thập phân, nên ta đặt tính rồi trừ:
$$\begin{array}{r} 15{,}7 \\ -\ \ 6{,}9 \\ \hline 8{,}8 \end{array}$$

Hàng phần mười: $7$ không trừ được $9$, lấy $17-9=8$, viết $8$ nhớ $1$. Hàng đơn vị: $6+1=7$; $5$ không trừ được $7$, lấy $15-7=8$, viết $8$ nhớ $1$. Hàng chục: $0+1=1$; $1-1=0$, không viết. Viết dấu phẩy thẳng cột.

Thử lại: $8{,}8+6{,}9=15{,}7$. Đúng.

Vậy $15{,}7-6{,}9=8{,}8$.

**Đáp số.** $8{,}8$.
:::

:::exercise
Tính $20{,}5-8{,}76$.

::hint
**Kiến thức:** thêm chữ số $0$ để hai số có cùng số chữ số thập phân.

**Gợi ý các bước:**
1. Viết $20{,}5=20{,}50$.
2. Đặt tính và trừ từng hàng, nhớ mượn.

::solution
Số bị trừ $20{,}5$ có một chữ số ở phần thập phân còn số trừ $8{,}76$ có hai chữ số. Ta viết thêm một chữ số $0$ vào tận cùng bên phải phần thập phân của $20{,}5$ để được $20{,}50$ rồi đặt tính:
$$\begin{array}{r} 20{,}50 \\ -\ \ 8{,}76 \\ \hline 11{,}74 \end{array}$$

Hàng phần trăm: $0$ không trừ được $6$, lấy $10-6=4$, viết $4$ nhớ $1$. Hàng phần mười: $7+1=8$; $5$ không trừ được $8$, lấy $15-8=7$, viết $7$ nhớ $1$. Hàng đơn vị: $8+1=9$; $0$ không trừ được $9$, lấy $10-9=1$, viết $1$ nhớ $1$. Hàng chục: $0+1=1$; $2-1=1$, viết $1$.

Thử lại: $11{,}74+8{,}76=20{,}50$. Đúng.

Vậy $20{,}5-8{,}76=11{,}74$.

**Đáp số.** $11{,}74$.
:::

:::exercise
Tính $6-2{,}8$.

::hint
**Kiến thức:** số tự nhiên viết được thành số thập phân: $6=6{,}0$.

**Gợi ý các bước:**
1. Viết $6$ thành $6{,}0$.
2. Đặt tính rồi trừ.

::solution
Số bị trừ $6$ là số tự nhiên. Ta viết $6=6{,}0$ để hai số cùng có một chữ số ở phần thập phân rồi đặt tính:
$$\begin{array}{r} 6{,}0 \\ -\ 2{,}8 \\ \hline 3{,}2 \end{array}$$

Hàng phần mười: $0$ không trừ được $8$, lấy $10-8=2$, viết $2$ nhớ $1$. Hàng đơn vị: $2+1=3$; $6-3=3$, viết $3$. Viết dấu phẩy thẳng cột.

Thử lại: $3{,}2+2{,}8=6{,}0$. Đúng.

Vậy $6-2{,}8=3{,}2$.

**Đáp số.** $3{,}2$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống: $14{,}5-6{,}25 \;\square\; 8{,}5$.

::hint
**Kiến thức:** tính hiệu trước, rồi so sánh hai số thập phân.

**Gợi ý các bước:**
1. Viết $14{,}5=14{,}50$ rồi tính $14{,}50-6{,}25$.
2. So sánh kết quả với $8{,}5=8{,}50$.

::solution
Ta tính vế trái rồi so sánh với $8{,}5$.

Viết $14{,}5=14{,}50$ rồi trừ:
$$14{,}50-6{,}25=8{,}25.$$

Viết $8{,}5=8{,}50$. Hai số $8{,}25$ và $8{,}50$ có phần nguyên bằng nhau; ở hàng phần mười có $2<5$ nên $8{,}25<8{,}50$.

Do đó $14{,}5-6{,}25<8{,}5$.

Vậy dấu cần điền vào ô trống là $<$.

**Đáp số.** Dấu $<$.
:::

:::exercise
Bao đường nặng $25{,}5$ kg. Cửa hàng bán đi $18{,}75$ kg. Hỏi trong bao còn bao nhiêu ki-lô-gam đường?

::hint
**Kiến thức:** "còn lại" nghĩa là bớt đi: dùng phép trừ.

**Gợi ý các bước:**
1. Đề cho biết gì? Bao nặng $25{,}5$ kg, đã bán $18{,}75$ kg. Đề hỏi gì? Số đường còn lại.
2. Tính $25{,}50-18{,}75$, ghi đáp số có đơn vị, rồi thử lại bằng phép cộng.

::solution
Bài giải

Số ki-lô-gam đường còn lại trong bao là:
$$25{,}50-18{,}75=6{,}75\ \text{(kg)}$$

Hàng phần trăm: $0-5$ không được, lấy $10-5=5$ nhớ $1$. Hàng phần mười: $7+1=8$; $5-8$ không được, lấy $15-8=7$ nhớ $1$. Hàng đơn vị: $8+1=9$; $5-9$ không được, lấy $15-9=6$ nhớ $1$. Hàng chục: $1+1=2$; $2-2=0$.

Thử lại: $6{,}75+18{,}75=25{,}50$. Đúng.

Vậy trong bao còn lại $6{,}75$ kg đường.

**Đáp số.** $6{,}75$ kg.
:::

:::exercise
Em hãy nhớ lại bài trước: tính $4{,}75+3{,}6$. Rồi lấy kết quả đó trừ đi $5{,}9$.

::hint
**Kiến thức:** cộng và trừ số thập phân đều đặt tính thẳng dấu phẩy.

**Gợi ý các bước:**
1. Viết $3{,}6=3{,}60$ rồi tính tổng.
2. Viết $5{,}9=5{,}90$ rồi lấy tổng trừ $5{,}90$.

::solution
Bước 1: tính $4{,}75+3{,}6$. Viết $3{,}6=3{,}60$ rồi cộng:
$$4{,}75+3{,}60=8{,}35.$$

Bước 2: lấy kết quả đó trừ đi $5{,}9$. Viết $5{,}9=5{,}90$ rồi trừ:
$$8{,}35-5{,}90=2{,}45.$$

Thử lại: $2{,}45+5{,}90=8{,}35$. Đúng.

Vậy kết quả cuối cùng là $2{,}45$.

**Đáp số.** $2{,}45$.
:::

:::exercise Thử thách
Tìm $x$, biết $x+3{,}75=10{,}2$.

::hint
**Kiến thức:** số hạng chưa biết bằng tổng trừ đi số hạng đã biết.

**Gợi ý các bước:**
1. Viết $x=10{,}2-3{,}75$.
2. Viết $10{,}2=10{,}20$ rồi trừ.

::solution
Trong phép cộng, số hạng chưa biết bằng tổng trừ đi số hạng đã biết. Do đó
$$x=10{,}2-3{,}75.$$

Viết $10{,}2=10{,}20$ rồi trừ:
$$x=10{,}20-3{,}75=6{,}45.$$

Thử lại: $6{,}45+3{,}75=10{,}20$. Đúng.

Vậy $x=6{,}45$.

**Đáp số.** $x=6{,}45$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Kết quả của $10-4{,}6$ là
A. $6{,}6$.
B. $14{,}6$.
C. $5{,}4$.
D. $54$.
::key C
$10{,}0-4{,}6=5{,}4$. Phương án A là lỗi lấy $10-4=6$ rồi chép lại $6$; phương án D là lỗi quên dấu phẩy.

::mc NB
Để tính $12{,}4-5{,}78$, em viết $12{,}4$ thành số có hai chữ số thập phân là
A. $12{,}04$.
B. $12{,}44$.
C. $124{,}0$.
D. $12{,}40$.
::key D
Thêm chữ số $0$ vào bên phải thì giá trị không đổi: $12{,}4=12{,}40$. Phương án A và C làm đổi giá trị của số.

::mc TH
Phép tính nào có kết quả bằng $2{,}5$?
A. $7{,}9-5{,}4$.
B. $6{,}2-3{,}8$.
C. $9{,}3-6{,}7$.
D. $5{,}5-2{,}5$.
::key A
$7{,}9-5{,}4=2{,}5$. Các phép tính khác lần lượt bằng $2{,}4$; $2{,}6$; $3$.

::mc VD
Trong can có $5$ lít dầu, đã dùng $1{,}75$ lít. Trong can còn lại bao nhiêu lít dầu?
A. $4{,}75$ lít.
B. $3{,}25$ lít.
C. $325$ lít.
D. $6{,}75$ lít.
::key B
"Đã dùng" là bớt đi: $5{,}00-1{,}75=3{,}25$. Phương án D là cộng nhầm; phương án C là quên dấu phẩy.

::tf NB TH TH TH
Em xét phép trừ $8{,}3-2{,}45$.
a) Viết $8{,}3$ thành $8{,}30$ thì giá trị không đổi.
b) $8{,}3-2{,}45=6{,}15$.
c) Hiệu nhỏ hơn $6$.
d) $5{,}85+2{,}45=7{,}3$.
::key Đ S Đ S
a) Đúng: thêm chữ số $0$ ở cuối phần thập phân không đổi giá trị. b) Sai: $8{,}30-2{,}45=5{,}85$. c) Đúng: $5{,}85<6$. d) Sai: $5{,}85+2{,}45=8{,}30$.

::sa TH
Tính $12{,}5-4{,}75$.
::key 7,75
$12{,}50-4{,}75=7{,}75$.

::sa VD
Sợi dây dài $20$ m, cắt đi $3{,}6$ m. Sợi dây còn lại dài bao nhiêu mét?
::key 16,4
$20{,}0-3{,}6=16{,}4$ (m).
:::
