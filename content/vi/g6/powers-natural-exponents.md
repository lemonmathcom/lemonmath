---
title: Luỹ thừa với số mũ tự nhiên
description: Luỹ thừa a^n, cơ số và số mũ; bình phương, lập phương; nhân và chia hai luỹ thừa cùng cơ số; luỹ thừa của 10 và cách viết số.
minutes: 40
---

:::goals
- Hiểu luỹ thừa $a^n$ là tích của $n$ thừa số bằng nhau, biết gọi tên cơ số và số mũ.
- Viết gọn một tích các thừa số bằng nhau và tính giá trị luỹ thừa.
- Nhân và chia hai luỹ thừa cùng cơ số bằng cách cộng, trừ số mũ.
- Viết số tự nhiên dưới dạng tổng các luỹ thừa của $10$.
:::

Giả sử bạn nhắn một tin cho $3$ người. Mỗi người nhận được lại nhắn tiếp cho $3$ người khác, và cứ thế lặp lại, không ai nhận trùng. Vòng $1$ có $3$ người nhận, vòng $2$ có $3\times3=9$ người nhận, vòng $3$ có $3\times3\times3=27$ người nhận. Viết như vậy ngày càng dài. Có cách nào viết gọn không, và đến vòng $5$ có bao nhiêu người nhận tin?

## Luỹ thừa và cách tính

**Khám phá.** Hãy nhìn các tích toàn thừa số bằng nhau: $3\times3$, $3\times3\times3$, $3\times3\times3\times3$. Ta chỉ cần cho biết thừa số là gì và có bao nhiêu thừa số. Ta viết $3\times3\times3\times3=3^4$.

:::theorem Luỹ thừa
Luỹ thừa bậc $n$ của $a$ ($n$ là số tự nhiên khác $0$) là tích của $n$ thừa số bằng $a$:
$$a^n=\underbrace{a\times a\times\cdots\times a}_{n\text{ thừa số}}.$$
Ta gọi $a$ là **cơ số**, $n$ là **số mũ**. Quy ước $a^1=a$.

Đọc là "$a$ mũ $n$" hoặc "$a$ luỹ thừa $n$". Riêng $a^2$ còn gọi là "$a$ bình phương" và $a^3$ gọi là "$a$ lập phương".
:::

Ví dụ $2^5=2\times2\times2\times2\times2=32$ có cơ số $2$ và số mũ $5$. Chú ý: $2^5$ không phải $2\times5$.

## Nhân và chia hai luỹ thừa cùng cơ số

**Khám phá.** Tính $3^4\times3^3$ bằng cách viết ra: $(3\times3\times3\times3)\times(3\times3\times3)$ có $4+3=7$ thừa số $3$, tức là $3^7$. Còn $3^7:3^3$ thì bỏ bớt $3$ thừa số $3$ khỏi $7$ thừa số, còn $7-3=4$ thừa số, tức là $3^4$.

:::theorem Nhân, chia hai luỹ thừa cùng cơ số
Với mọi số tự nhiên $m$, $n$ khác $0$:
$$a^m\times a^n=a^{m+n}.$$
Với $a\ne0$ và $m\ge n$:
$$a^m:a^n=a^{m-n}.$$
Quy ước: $a^0=1$ với $a\ne0$.
:::

**Vì sao đúng?** Tích $a^m\times a^n$ có $m$ thừa số $a$ rồi thêm $n$ thừa số $a$, tổng cộng $m+n$ thừa số, nên bằng $a^{m+n}$. Phép chia $a^m:a^n$ là bỏ bớt $n$ thừa số $a$ ở $a^m$, còn $m-n$ thừa số. Nếu $m=n$ thì $a^m:a^m=1$ (số khác $0$ chia cho chính nó), mà theo công thức nó bằng $a^0$. Đó là lí do ta quy ước $a^0=1$.

**Luỹ thừa của $10$.** Ta có $10^1=10$, $10^2=100$, $10^3=1000$, ... Luỹ thừa $10^n$ là số $1$ theo sau $n$ chữ số $0$. Nhờ vậy, mọi số tự nhiên đều viết được thành tổng các luỹ thừa của $10$.

## Ví dụ

:::example Viết gọn và tính giá trị
Viết gọn $5\times5\times5\times5$ dưới dạng luỹ thừa và tính giá trị. Tính $2^5$.

**Lời giải.** Có $4$ thừa số $5$ nên $5\times5\times5\times5=5^4=25\times25=625$. Ta có $2^5=2\times2\times2\times2\times2=32$.
:::

:::example Nhân, chia luỹ thừa
Viết kết quả dưới dạng một luỹ thừa rồi tính giá trị: a) $3^4\times3^3$; b) $5^8:5^5$.

**Lời giải.** a) Cơ số giữ nguyên, cộng số mũ: $3^4\times3^3=3^{4+3}=3^7=2187$. b) Cơ số giữ nguyên, trừ số mũ: $5^8:5^5=5^{8-5}=5^3=125$.
:::

:::example Viết số theo luỹ thừa của $10$
Viết số $4507$ dưới dạng tổng các luỹ thừa của $10$.

**Lời giải.** Số $4507$ gồm $4$ nghìn, $5$ trăm, $0$ chục và $7$ đơn vị:
$$4507=4\times10^3+5\times10^2+0\times10+7.$$
:::

Bài sau là câu hỏi mở đầu, nên ta đi từng bước *Hiểu đề, Tìm cách giải, Giải, Nhìn lại*.

:::example Tin nhắn lan truyền
Một tin nhắn được gửi cho $3$ người. Mỗi người nhận lại gửi cho $3$ người khác, không ai nhận trùng. Hỏi vòng $5$ có bao nhiêu người nhận tin? Tổng cộng sau $5$ vòng có bao nhiêu người nhận?

**Lời giải.**

*Hiểu đề.* Mỗi vòng, số người nhận tin gấp $3$ lần vòng trước. Vòng $1$ có $3$ người. Đề hỏi số người ở vòng $5$ và tổng số người sau $5$ vòng.

*Tìm cách giải.* Ở vòng $k$ có $3\times3\times\cdots\times3$ ($k$ thừa số), tức là $3^k$ người.

*Giải.* Vòng $1$: $3^1=3$. Vòng $2$: $3^2=9$. Vòng $3$: $3^3=27$. Vòng $4$: $3^4=81$. Vòng $5$: $3^5=243$ người. Tổng cộng: $3+9+27+81+243=363$ người.

*Nhìn lại.* Vòng $6$ có bao nhiêu người? Ta có $3^5\times3=3^5\times3^1=3^6=729$, đúng bằng $243\times3$. Số người tăng rất nhanh, vì mỗi vòng ta nhân thêm một thừa số $3$.
:::

:::example Một số viết được nhiều cách
Viết $64$ dưới dạng luỹ thừa của $2$, của $4$ và của $8$.

**Lời giải.** $2\times2\times2\times2\times2\times2=64$ nên $64=2^6$. $4\times4\times4=64$ nên $64=4^3$. $8\times8=64$ nên $64=8^2$. Một số có thể viết thành luỹ thừa với nhiều cơ số khác nhau.
:::

:::warning Những lỗi bạn hay gặp
- **Nhầm luỹ thừa với phép nhân.** Sai: $2^3=2\times3=6$. Vì sao sai: $2^3$ có $3$ thừa số bằng $2$. Đúng: $2^3=2\times2\times2=8$.
- **Nhân cả cơ số.** Sai: $2^3\times2^4=4^7$. Vì sao sai: khi nhân luỹ thừa cùng cơ số, cơ số không đổi. Đúng: $2^3\times2^4=2^7=128$.
- **Chia số mũ.** Sai: $5^8:5^4=5^2$. Vì sao sai: phải trừ số mũ, không chia. Đúng: $5^8:5^4=5^4=625$.
- **Cho rằng $a^0=0$.** Sai: $7^0=0$. Vì sao sai: $7^0=7^3:7^3=1$. Đúng: $7^0=1$.
:::

## Thuật ngữ

:::terms
- luỹ thừa | power
- cơ số | base
- số mũ | exponent
- bình phương | square
- lập phương | cube
- thừa số | factor
- cùng cơ số | same base
- luỹ thừa của $10$ | power of $10$
- viết dưới dạng luỹ thừa | write as a power
:::

## Tóm tắt

- $a^n$ là tích của $n$ thừa số $a$; $a$ là cơ số, $n$ là số mũ; $a^1=a$.
- $a^m\times a^n=a^{m+n}$; $a^m:a^n=a^{m-n}$ ($a\ne0$, $m\ge n$); $a^0=1$ ($a\ne0$).
- $10^n$ là số $1$ theo sau $n$ chữ số $0$; mọi số tự nhiên là tổng các luỹ thừa của $10$ nhân với chữ số.

## Luyện tập

Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
**Bài 1.** Viết gọn dưới dạng luỹ thừa: a) $7\times7\times7\times7\times7$; b) $10\times10\times10$; c) $4\times4$.

::hint
**Kiến thức:** đếm số thừa số bằng nhau; đó là số mũ.

**Gợi ý các bước:**
1. Cơ số là thừa số lặp lại.
2. Số mũ là số lần lặp.

::solution
a) $7^5$. b) $10^3$. c) $4^2$.

**Đáp số.** $7^5$; $10^3$; $4^2$.
:::

:::exercise
**Bài 2.** Tính: a) $2^5$; b) $3^4$; c) $10^4$.

::hint
**Kiến thức:** $a^n$ là tích của $n$ thừa số $a$.

**Gợi ý các bước:**
1. Viết tích ra rồi nhân lần lượt.

::solution
a) $2\times2\times2\times2\times2=32$. b) $3\times3\times3\times3=81$. c) $10^4=10\,000$.

**Đáp số.** $32$; $81$; $10\,000$.
:::

:::exercise
**Bài 3.** Tính: a) $11^2$; b) $5^3$; c) $1^9$; d) $0^4$.

::hint
**Kiến thức:** $1$ nhân với chính nó bao nhiêu lần vẫn bằng $1$; $0$ nhân với chính nó vẫn bằng $0$.

**Gợi ý các bước:**
1. Viết mỗi luỹ thừa thành tích.

::solution
a) $11\times11=121$. b) $5\times5\times5=125$. c) $1^9=1$. d) $0^4=0$.

**Đáp số.** $121$; $125$; $1$; $0$.
:::

:::exercise
**Bài 4.** Viết kết quả dưới dạng một luỹ thừa: a) $6^5\times6^3$; b) $9^7:9^4$; c) $7^4\times7$.

::hint
**Kiến thức:** nhân thì cộng số mũ, chia thì trừ số mũ; $7=7^1$.

**Gợi ý các bước:**
1. Giữ nguyên cơ số.
2. Cộng hoặc trừ số mũ.

::solution
a) $6^{5+3}=6^8$. b) $9^{7-4}=9^3$. c) $7^4\times7^1=7^5$.

**Đáp số.** $6^8$; $9^3$; $7^5$.
:::

:::exercise
**Bài 5.** Viết số $30\,502$ dưới dạng tổng các luỹ thừa của $10$.

::hint
**Kiến thức:** $30\,502$ có $3$ chục nghìn, $0$ nghìn, $5$ trăm, $0$ chục, $2$ đơn vị.

**Gợi ý các bước:**
1. Xác định chữ số mỗi hàng.
2. Nhân với $10^4$, $10^3$, $10^2$, $10$, $1$.

::solution
$30\,502=3\times10^4+0\times10^3+5\times10^2+0\times10+2$.

**Đáp số.** $3\times10^4+0\times10^3+5\times10^2+0\times10+2$.
:::

:::exercise
**Bài 6.** Giả sử một tờ giấy mỏng được gấp đôi liên tiếp $6$ lần, mỗi lần gấp làm số lớp giấy tăng gấp đôi. Mỗi lớp giấy dày $0{,}1$ mm. Hỏi chồng giấy sau $6$ lần gấp có bao nhiêu lớp và dày bao nhiêu milimét?

::hint
**Kiến thức:** sau $n$ lần gấp có $2^n$ lớp.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Tính $2^6$.
3. Nhân với độ dày một lớp.

::solution
Số lớp là $2^6=64$. Độ dày là $64\times0{,}1=6{,}4$ (mm).

**Đáp số.** $64$ lớp, dày $6{,}4$ mm.
:::

:::exercise
**Bài 7.** Giả sử một loại vi khuẩn cứ mỗi giờ lại tăng số lượng gấp $3$ lần. Lúc đầu có $5$ con. Sau $4$ giờ có bao nhiêu con?

::hint
**Kiến thức:** sau mỗi giờ nhân với $3$; sau $4$ giờ nhân với $3^4$.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Tính $3^4$ rồi nhân với $5$.

::solution
Sau $4$ giờ, số con là $5\times3^4=5\times81=405$.

**Đáp số.** $405$ con.
:::

:::exercise
**Bài 8.** Điền dấu $>$, $<$ hoặc $=$: a) $2^3\ ?\ 3^2$; b) $2^5\ ?\ 5^2$; c) $4^3\ ?\ 8^2$.

::hint
**Kiến thức:** tính giá trị mỗi luỹ thừa rồi so sánh.

**Gợi ý các bước:**
1. Tính hai vế.
2. So sánh hai số.

::solution
a) $8<9$ nên $2^3<3^2$. b) $32>25$ nên $2^5>5^2$. c) $64=64$ nên $4^3=8^2$.

**Đáp số.** a) $<$; b) $>$; c) $=$.
:::

:::exercise
**Bài 9.** Tính nhanh $2^2\times37\times5^2$.

::hint
**Kiến thức:** $2^2=4$, $5^2=25$ và tính chất giao hoán, kết hợp của phép nhân.

**Gợi ý các bước:**
1. Tính các luỹ thừa.
2. Nhóm hai thừa số có tích $100$.

::solution
$2^2\times37\times5^2=4\times37\times25=(4\times25)\times37=100\times37=3700$.

**Đáp số.** $3700$.
:::

:::exercise Thử thách
**Bài 10.** a) Tính $S=1+2+2^2+2^3+2^4+2^5$. b) So sánh $S+1$ với $2^6$ và nhận xét.

::hint
**Kiến thức:** tính từng luỹ thừa rồi cộng.

**Gợi ý các bước:**
1. Tính $2^2$, $2^3$, $2^4$, $2^5$.
2. Cộng lại, rồi cộng thêm $1$.

::solution
a) $S=1+2+4+8+16+32=63$. b) $S+1=64=2^6$. Nhận xét: $S=2^6-1$. Thật vậy, mỗi số hạng sau bằng tổng các số hạng đứng trước nó cộng $1$ (ví dụ $8=1+2+4+1$), nên tổng luôn kém luỹ thừa kế tiếp đúng $1$ đơn vị.

**Đáp số.** a) $63$; b) $S+1=2^6$.
:::

## Kiểm tra mini

:::quiz
::mc
Giá trị của $2^5$ là
A. $10$.
B. $7$.
C. $32$.
D. $25$.
::key C
$2^5=2\times2\times2\times2\times2=32$. Phương án A là $2\times5$, B là $2+5$, D là $5^2$.

::mc
Kết quả của $3^4\times3^3$ viết dưới dạng một luỹ thừa là
A. $3^1$.
B. $3^{12}$.
C. $9^7$.
D. $3^7$.
::key D
Cơ số giữ nguyên, cộng số mũ: $3^{4+3}=3^7$. Phương án B nhân số mũ, C nhân cả cơ số, A trừ số mũ.

::mc
Kết quả của $5^8:5^5$ là
A. $5^3$.
B. $5^{13}$.
C. $1^3$.
D. $5^{40}$.
::key A
Cơ số giữ nguyên, trừ số mũ: $5^{8-5}=5^3$. Phương án B cộng số mũ, C chia cả cơ số, D nhân số mũ.

::mc
Giá trị của $7^0$ là
A. $0$.
B. $1$.
C. $7$.
D. không có nghĩa.
::key B
Quy ước $a^0=1$ với $a\ne0$, vì $7^0=7^3:7^3=1$. Phương án A và C là các nhầm lẫn thường gặp.

::tf
Về số $64$.
a) $64=2^8$.
b) $64=2^6$.
c) $64=4^3$.
d) $64=8^2$.
::key S Đ Đ Đ
a) Sai: $2^8=256$. b) Đúng: $2^6=64$. c) Đúng: $4\times4\times4=64$. d) Đúng: $8\times8=64$.

::sa
Giá trị của $3^4$ là bao nhiêu?
::key 81
$3\times3\times3\times3=81$.

::sa
Giá trị của $5^8:5^6$ là bao nhiêu?
::key 25
$5^8:5^6=5^2=25$.
:::

