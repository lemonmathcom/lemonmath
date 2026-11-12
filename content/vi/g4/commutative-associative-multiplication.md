---
title: Tính chất giao hoán và kết hợp của phép nhân. Tính chất phân phối của phép nhân đối với phép cộng
description: Em học tính chất giao hoán, kết hợp, phân phối của phép nhân và dùng chúng để tính nhẩm, tính nhanh, tính bằng cách thuận tiện.
minutes: 25
---

:::goals
- Nhận biết và dùng tính chất giao hoán, tính chất kết hợp của phép nhân.
- Nhận biết và dùng tính chất phân phối của phép nhân đối với phép cộng.
- Tính bằng cách thuận tiện những biểu thức có các cặp thừa số cho tích tròn.
- Giải bài toán có lời văn bằng cách chọn cách tính thuận tiện.
:::

Một cửa hàng văn phòng phẩm xếp bút vào hộp: mỗi hộp có $25$ chiếc bút, mỗi thùng có $4$ hộp. Kho của cửa hàng có $7$ thùng như vậy.

Kho có tất cả bao nhiêu chiếc bút? Phép tính $25\times4\times7$ có ba thừa số. Em làm thế nào để tính trong đầu mà không cần đặt tính? Bài này cho em ba "bí quyết" của phép nhân để tính nhanh và không nhầm.

## Tính chất giao hoán và tính chất kết hợp của phép nhân

### Cùng khám phá

Em xếp các ô vuông thành $3$ hàng, mỗi hàng $4$ ô. Số ô là $3\times4=12$. Xoay hình đi: bây giờ có $4$ hàng, mỗi hàng $3$ ô, và số ô là $4\times3=12$. Số ô không đổi, nên $3\times4=4\times3$.

Với ba thừa số, em thử $2\times3\times4$ theo hai cách:

- $(2\times3)\times4=6\times4=24$.
- $2\times(3\times4)=2\times12=24$.

Hai kết quả bằng nhau. Em thử với số khác, ví dụ $25\times4=4\times25=100$, rồi $(25\times4)\times7=100\times7=700$.

:::theorem Tính chất giao hoán và kết hợp của phép nhân
**Tính chất giao hoán.** Khi đổi chỗ hai thừa số trong một tích thì tích không đổi: $a\times b=b\times a$.

**Tính chất kết hợp.** Khi nhân một tích hai số với số thứ ba, ta có thể nhân số thứ nhất với tích của số thứ hai và số thứ ba: $(a\times b)\times c=a\times(b\times c)$.
:::

Vì sao đúng? Giao hoán: xoay mảng ô như trên thì số ô không đổi. Kết hợp: với $25\times4\times7$, ta có thể đếm số bút của một thùng trước ($25\times4=100$ chiếc) rồi nhân $7$ thùng, hoặc đếm số hộp trước ($4\times7=28$ hộp) rồi nhân $25$ chiếc. Cách đếm nào cũng cho cùng một số bút.

Nhờ hai tính chất này, em có thể đổi chỗ và nhóm các thừa số cho các tích tròn chục, tròn trăm. Em nhớ những cặp thường gặp:

- $2\times5=10$,
- $4\times25=100$,
- $8\times125=1\,000$.

Ta bắt đầu với phép nhân có cặp $4\times25$.

:::example Tính bằng cách thuận tiện (1)
Tính bằng cách thuận tiện: $4\times37\times25$.

**Lời giải.** Ta có $4\times25=100$ là số tròn trăm, nên đổi chỗ và nhóm hai thừa số này lại:
$$\begin{aligned} 4\times37\times25 &= (4\times25)\times37 \\ &= 100\times37 \\ &= 3\,700. \end{aligned}$$
Vậy $4\times37\times25=3\,700$.
:::

Tiếp theo là cặp $8\times125$.

:::example Tính bằng cách thuận tiện (2)
Tính bằng cách thuận tiện: $125\times7\times8$.

**Lời giải.** Ta có $125\times8=1\,000$, nên:
$$\begin{aligned} 125\times7\times8 &= (125\times8)\times7 \\ &= 1\,000\times7 \\ &= 7\,000. \end{aligned}$$
Vậy $125\times7\times8=7\,000$.
:::

Bây giờ em quay lại cửa hàng văn phòng phẩm.

:::example Kho bút
Một thùng có $4$ hộp, mỗi hộp có $25$ chiếc bút. Kho có $7$ thùng như vậy. Hỏi kho có tất cả bao nhiêu chiếc bút?

**Lời giải.** Số chiếc bút có trong kho là $25\times4\times7$.

Cách 1: nhân $25\times4$ trước, được số bút của một thùng:
$$(25\times4)\times7=100\times7=700\ \text{(chiếc)}.$$
Cách 2: nhân $4\times7$ trước, được số hộp trong kho:
$$25\times(4\times7)=25\times28=700\ \text{(chiếc)}.$$
Hai cách cho cùng kết quả, nhưng cách 1 dễ nhẩm hơn.

**Đáp số:** $700$ chiếc bút.
:::

## Tính chất phân phối của phép nhân đối với phép cộng

### Cùng khám phá

Một tấm bìa hình chữ nhật cao $3$ cm, rộng $6$ cm. Em vạch một đường chia nó thành hai phần, một phần rộng $4$ cm và một phần rộng $2$ cm.

:::diagram Tách hình chữ nhật thành hai phần
alt: Hình chữ nhật ABCD cao 3 và rộng 6, đoạn MN chia thành hai hình chữ nhật có chiều rộng 4 và 2
point A 0,0 below-left
point B 6,0 below-right
point C 6,3 above-right
point D 0,3 above-left
point M 4,0 below
point N 4,3 above
polygon A B C D
segment M N
label 2,1.5 "3 × 4"
label 5,1.5 "3 × 2"
:::

Diện tích cả hình là $3\times6=3\times(4+2)=18$. Diện tích hai phần cộng lại là $3\times4+3\times2=12+6=18$. Hai cách tính cho cùng một diện tích, nên $3\times(4+2)=3\times4+3\times2$.

:::theorem Tính chất phân phối của phép nhân đối với phép cộng
Khi nhân một số với một tổng, ta có thể nhân số đó với từng số hạng của tổng rồi cộng các kết quả lại:
$$a\times(b+c)=a\times b+a\times c.$$
:::

Vì sao đúng? Như trong hình, $a\times(b+c)$ là diện tích hình chữ nhật cao $a$ và rộng $b+c$. Hình này được chia thành hai phần có diện tích $a\times b$ và $a\times c$.

Tính chất này dùng được theo cả hai chiều. Chiều từ trái sang phải giúp em nhẩm phép nhân; chiều ngược lại giúp em đặt thừa số chung ra ngoài.

**Kết nối.** Tính chất phân phối chính là lí do em nhân một số lớn với số có một chữ số theo từng hàng ở bài trước: $1\,245\times3=(1\,000+200+40+5)\times3$. Sau này em sẽ dùng nó để nhân với số có hai chữ số.

:::example Nhẩm bằng cách tách số
Tính nhẩm $23\times4$.

**Lời giải.** Ta tách $23=20+3$ rồi áp dụng tính chất phân phối:
$$\begin{aligned} 23\times4 &= (20+3)\times4 \\ &= 20\times4+3\times4 \\ &= 80+12 \\ &= 92. \end{aligned}$$
Vậy $23\times4=92$.
:::

Bây giờ em dùng tính chất theo chiều ngược lại.

:::example Đặt thừa số chung
Tính bằng cách thuận tiện: $36\times4+36\times6$.

**Lời giải.** Hai tích có thừa số chung là $36$. Ta đặt $36$ ra ngoài rồi tính tổng trong ngoặc:
$$\begin{aligned} 36\times4+36\times6 &= 36\times(4+6) \\ &= 36\times10 \\ &= 360. \end{aligned}$$
Vậy $36\times4+36\times6=360$.
:::

Cuối cùng, một bài toán trong cuộc sống.

:::example Đồng phục
Một bộ đồng phục gồm $1$ áo giá $120\,000$ đồng và $1$ quần giá $80\,000$ đồng. Giả sử một trường mua $5$ bộ. Hỏi nhà trường phải trả bao nhiêu tiền?

**Hiểu đề.** Một bộ gồm áo $120\,000$ đồng và quần $80\,000$ đồng; mua $5$ bộ. Cần tính tổng số tiền.

**Tìm cách giải.** Số tiền là $5\times(120\,000+80\,000)$. Ta có thể tính tổng trong ngoặc trước, hoặc dùng tính chất phân phối.

**Giải.** Giá một bộ là $120\,000+80\,000=200\,000$ (đồng).

Số tiền phải trả là $5\times200\,000=1\,000\,000$ (đồng).

**Đáp số:** $1\,000\,000$ đồng.

**Nhìn lại.** Ta kiểm tra bằng cách khác: $5\times120\,000+5\times80\,000=600\,000+400\,000=1\,000\,000$. Hai cách cho cùng kết quả. Cách nào dễ nhẩm hơn trong bài này, và vì sao?
:::

:::warning Những lỗi em hay gặp
- **Dùng tính chất phân phối cho phép nhân.** Sai: $6\times(4\times5)=6\times4+6\times5$. Vì sao sai: tính chất phân phối chỉ dùng khi trong ngoặc là phép cộng; $6\times(4\times5)=120$, còn $6\times4+6\times5=54$. Đúng: $6\times(4\times5)=(6\times4)\times5=120$.
- **Chỉ nhân số hạng đầu.** Sai: $5\times(2+3)=5\times2+3=13$. Vì sao sai: số $5$ phải nhân với cả hai số hạng. Đúng: $5\times(2+3)=5\times2+5\times3=25$.
- **Cho rằng phép tính nào cũng đổi chỗ được.** Sai: "$8:2=2:8$" vì phép nhân đổi chỗ được. Vì sao sai: tính chất giao hoán chỉ dành cho phép nhân (và phép cộng); $8:2=4$ nhưng $2:8$ không bằng $4$. Đúng: $8\times2=2\times8=16$.
:::

## Thuật ngữ

:::terms
- tính chất giao hoán | commutative property
- tính chất kết hợp | associative property
- tính chất phân phối | distributive property
- thừa số | factor
- tích | product
- tổng | sum
- biểu thức | expression
- tính bằng cách thuận tiện | calculating in the easy way
- thừa số chung | common factor
:::

## Tóm tắt

- Giao hoán: $a\times b=b\times a$. Kết hợp: $(a\times b)\times c=a\times(b\times c)$.
- Dùng hai tính chất này để ghép các thừa số cho tích tròn: $2\times5=10$, $4\times25=100$, $8\times125=1\,000$.
- Phân phối: $a\times(b+c)=a\times b+a\times c$; dùng được cả hai chiều.
- Tính chất phân phối không dùng cho phép nhân trong ngoặc; giao hoán không dùng cho phép chia.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Số?
a) $8\times9=9\times\square$
b) $(3\times5)\times2=3\times(\square\times2)$

::hint
**Kiến thức:** tính chất giao hoán và tính chất kết hợp của phép nhân.

**Gợi ý các bước:**
1. Câu a: đổi chỗ hai thừa số.
2. Câu b: số nào đứng giữa ở vế phải?

::solution
a) Theo tính chất giao hoán, $8\times9=9\times8$.

b) Theo tính chất kết hợp, $(3\times5)\times2=3\times(5\times2)$.

**Đáp số.** a) $8$. b) $5$.
:::

:::exercise
Tính bằng cách thuận tiện: $2\times59\times5$.

::hint
**Kiến thức:** $2\times5=10$.

**Gợi ý các bước:**
1. Tìm hai thừa số có tích tròn chục.
2. Đổi chỗ, nhóm hai thừa số đó lại.

::solution
$$2\times59\times5=(2\times5)\times59=10\times59=590.$$

**Đáp số.** $590$.
:::

:::exercise
Tính bằng cách thuận tiện: $125\times9\times8$.

::hint
**Kiến thức:** $125\times8=1\,000$.

**Gợi ý các bước:**
1. Nhóm $125$ với $8$.
2. Nhân kết quả với $9$.

::solution
$$125\times9\times8=(125\times8)\times9=1\,000\times9=9\,000.$$

**Đáp số.** $9\,000$.
:::

:::exercise
Tính giá trị của $7\times(5+3)$ bằng hai cách.

::hint
**Kiến thức:** $a\times(b+c)=a\times b+a\times c$.

**Gợi ý các bước:**
1. Cách 1: tính tổng trong ngoặc trước.
2. Cách 2: nhân $7$ với từng số hạng rồi cộng.

::solution
Cách 1: $7\times(5+3)=7\times8=56$.

Cách 2: $7\times(5+3)=7\times5+7\times3=35+21=56$.

**Đáp số.** $56$.
:::

:::exercise
Tính bằng cách thuận tiện: $48\times7+48\times3$.

::hint
**Kiến thức:** đặt thừa số chung ra ngoài: $a\times b+a\times c=a\times(b+c)$.

**Gợi ý các bước:**
1. Thừa số chung của hai tích là số nào?
2. Cộng hai thừa số còn lại, rồi nhân.

::solution
$$48\times7+48\times3=48\times(7+3)=48\times10=480.$$

**Đáp số.** $480$.
:::

:::exercise
Một thùng có $5$ hộp bánh, mỗi hộp có $20$ cái bánh. Kho có $6$ thùng như vậy. Hỏi kho có tất cả bao nhiêu cái bánh?

::hint
**Kiến thức:** nhân ba số và chọn cách nhóm cho tích tròn.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Phép tính là $20\times5\times6$; nhóm hai số nào lại?

::solution
Số cái bánh có trong kho là:
$$20\times5\times6=(20\times5)\times6=100\times6=600\ \text{(cái)}.$$

**Đáp số.** $600$ cái bánh.
:::

:::exercise
Lan mua $6$ quyển vở, mỗi quyển giá $9\,000$ đồng, và $6$ chiếc bút, mỗi chiếc giá $6\,000$ đồng. Hỏi Lan phải trả tất cả bao nhiêu tiền?

::hint
**Kiến thức:** $6\times9\,000+6\times6\,000=6\times(9\,000+6\,000)$.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Nhóm theo cách thuận tiện: giá một "quyển vở và một chiếc bút" là bao nhiêu?

::solution
Số tiền Lan phải trả là:
$$6\times9\,000+6\times6\,000=6\times(9\,000+6\,000)=6\times15\,000=90\,000\ \text{(đồng)}.$$

**Đáp số.** $90\,000$ đồng.
:::

:::exercise
Em hãy nhớ lại bài nhân với số có một chữ số. Tách $2\,315=2\,000+300+15$ rồi tính $2\,315\times4$.

::hint
**Kiến thức:** $(a+b+c)\times d=a\times d+b\times d+c\times d$.

**Gợi ý các bước:**
1. Nhân từng số hạng với $4$.
2. Cộng ba tích lại.

::solution
$$\begin{aligned} 2\,315\times4 &= (2\,000+300+15)\times4 \\ &= 8\,000+1\,200+60 \\ &= 9\,260. \end{aligned}$$

**Đáp số.** $9\,260$.
:::

:::exercise
Một mảnh vườn hình chữ nhật có chiều rộng $7$ m. Phần trồng rau dài $12$ m và phần trồng hoa dài $8$ m, hai phần nằm cạnh nhau. Hỏi diện tích cả mảnh vườn là bao nhiêu mét vuông?

::hint
**Kiến thức:** diện tích hình chữ nhật $=$ chiều dài $\times$ chiều rộng; $a\times(b+c)=a\times b+a\times c$.

**Gợi ý các bước:**
1. Tính diện tích từng phần.
2. Cộng lại, hoặc tính chiều dài cả vườn rồi nhân với chiều rộng.

::solution
Diện tích cả mảnh vườn là:
$$7\times(12+8)=7\times12+7\times8=84+56=140\ (\text{m}^2).$$

**Kiểm tra.** $7\times20=140$. Đúng.

**Đáp số.** $140\ \text{m}^2$.
:::

:::exercise Thử thách
Tính bằng cách thuận tiện: $25\times36$.

::hint
**Kiến thức:** $4\times25=100$ và $36=4\times9$.

**Gợi ý các bước:**
1. Viết $36$ thành tích của hai số, trong đó có một số là $4$.
2. Dùng tính chất kết hợp để ghép $25$ với $4$.

::solution
Vì $36=4\times9$ nên:
$$\begin{aligned} 25\times36 &= 25\times(4\times9) \\ &= (25\times4)\times9 \\ &= 100\times9 \\ &= 900. \end{aligned}$$

**Đáp số.** $900$.
:::

## Kiểm tra mini

:::quiz
::mc
Biết $a\times7=7\times9$. Giá trị của $a$ là
A. $16$.
B. $7$.
C. $63$.
D. $9$.
::key D
Theo tính chất giao hoán, $7\times9=9\times7$ nên $a=9$. Phương án C là tích $7\times9$, phương án A là tổng $7+9$.

::mc
Giá trị của $4\times63\times25$ là
A. $6\,300$.
B. $1\,575$.
C. $630$.
D. $25\,200$.
::key A
$4\times63\times25=(4\times25)\times63=100\times63=6\,300$. Phương án C thiếu một chữ số $0$, phương án B là $63\times25$, phương án D là $252\times100$.

::mc
Giá trị của $7\times(20+3)$ là
A. $143$.
B. $161$.
C. $30$.
D. $140$.
::key B
$7\times(20+3)=7\times20+7\times3=140+21=161$. Phương án A chỉ nhân $7$ với số hạng đầu rồi cộng $3$, phương án D quên nhân số hạng thứ hai.

::mc
Biểu thức nào dưới đây bằng $9\times4+9\times6$?
A. $9\times(4\times6)$.
B. $9+(4+6)$.
C. $9\times(4+6)$.
D. $(9+4)\times6$.
::key C
Đặt thừa số chung $9$ ra ngoài: $9\times4+9\times6=9\times(4+6)$.

::tf
Em xét các đẳng thức sau.
a) $(3\times4)\times5=3\times(4\times5)$.
b) $5\times(2+3)=5\times2+3$.
c) $25\times4\times9=100\times9$.
d) $6\times(4\times5)=6\times4+6\times5$.
::key Đ S Đ S
a) Đúng: tính chất kết hợp, cả hai vế bằng $60$. b) Sai: $5\times(2+3)=25$, còn $5\times2+3=13$. c) Đúng: $25\times4=100$. d) Sai: $6\times(4\times5)=120$, còn $6\times4+6\times5=54$.

::sa
Tính $25\times8\times4$.
::key 800
$25\times8\times4=(25\times4)\times8=100\times8=800$.

::sa
Tính nhanh $54\times7+54\times3$.
::key 540
$54\times7+54\times3=54\times(7+3)=54\times10=540$.
:::
