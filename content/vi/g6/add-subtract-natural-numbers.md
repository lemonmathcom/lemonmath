---
title: Phép cộng, trừ, nhân, chia số tự nhiên
description: Tính chất giao hoán, kết hợp, phân phối; cách tính nhanh; phép trừ trong ℕ, phép chia hết và phép chia có dư a = b × q + r với 0 ≤ r < b.
minutes: 50
---

:::goals
- Nhận biết và dùng các tính chất giao hoán, kết hợp của phép cộng và phép nhân.
- Tính nhanh bằng cách nhóm số hạng, nhóm thừa số và dùng tính chất phân phối.
- Hiểu khi nào phép trừ thực hiện được trong tập hợp $\mathbb{N}$ và dùng đúng các tên gọi của phép tính.
- Phân biệt phép chia hết và phép chia có dư, viết được $a=b\times q+r$ với $0\le r<b$.
:::

Giả sử một cửa hàng văn phòng phẩm bán được $237$ quyển vở trong tuần đầu, $163$ quyển trong tuần hai và $250$ quyển trong tuần ba. Chị chủ cửa hàng không cộng lần lượt từ trái sang phải. Chị cộng $237+163=400$ trước, rồi mới cộng thêm $250$ được $650$. Vì sao chị được phép cộng theo thứ tự đó, và còn những cách nào để tính nhanh hơn?

## Phép cộng và phép trừ số tự nhiên

**Khám phá.** Hãy thử đổi thứ tự: $250+163+237$. Ta được $250+163=413$, rồi $413+237=650$, vẫn là $650$. Cách cộng $237+163$ trước chỉ nhanh hơn vì nó cho ngay số tròn trăm $400$.

:::theorem Tính chất của phép cộng
Với mọi số tự nhiên $a$, $b$, $c$:
- Giao hoán: $a+b=b+a$.
- Kết hợp: $(a+b)+c=a+(b+c)$.
- Cộng với $0$: $a+0=0+a=a$.

Phép trừ là phép ngược của phép cộng: $a-b=c$ khi $a=b+c$. Trong $\mathbb{N}$, phép trừ $a-b$ chỉ thực hiện được khi $a\ge b$. Ngoài ra $a-0=a$ và $a-a=0$.
:::

**Vì sao đúng?** Cộng nghĩa là gộp hai nhóm đồ vật lại. Gộp nhóm $b$ vào nhóm $a$ hay gộp nhóm $a$ vào nhóm $b$ thì tổng số đồ vật vẫn như nhau, nên $a+b=b+a$. Khi gộp ba nhóm, ta gộp hai nhóm nào trước cũng được, nên $(a+b)+c=a+(b+c)$. Còn phép trừ: $a-b=c$ nghĩa là $c$ là số phải cộng thêm vào $b$ để được $a$. Số đó chỉ là số tự nhiên khi $a$ không nhỏ hơn $b$.

**Hai mẹo tính nhanh.**
- Nhóm các số hạng cho tổng tròn chục, tròn trăm.
- Với phép trừ, nếu cộng cùng một số vào số bị trừ và số trừ thì hiệu không đổi. Đây là vì khoảng cách giữa hai số trên tia số không đổi khi ta dịch cả hai số sang phải cùng một đoạn.

:::example Nhóm các số hạng
Tính nhanh $125+38+75+62$.

**Lời giải.** Dùng tính chất giao hoán và kết hợp:
$$125+38+75+62=(125+75)+(38+62)=200+100=300.$$
:::

:::example Cộng cùng một số vào hai số
Tính nhanh $1976-999$.

**Lời giải.** Cộng thêm $1$ vào cả số bị trừ và số trừ thì hiệu không đổi:
$$1976-999=(1976+1)-(999+1)=1977-1000=977.$$
:::

Bài sau là bài toán thực tế có nhiều bước, nên ta đi từng bước *Hiểu đề, Tìm cách giải, Giải, Nhìn lại*.

:::example Hành khách trên xe buýt
Một xe buýt xuất phát với $45$ hành khách. Ở bến thứ nhất có $12$ người xuống và $20$ người lên. Ở bến thứ hai có $18$ người xuống và $9$ người lên. Sau bến thứ hai, trên xe có bao nhiêu hành khách?

**Lời giải.**

*Hiểu đề.* Lúc đầu có $45$ người. Mỗi bến, số người xuống làm giảm, số người lên làm tăng. Đề hỏi số người sau bến thứ hai.

*Tìm cách giải.* Tính từng bến một: lấy số người đang có, trừ số người xuống, cộng số người lên.

*Giải.* Sau bến thứ nhất: $45-12+20=53$ (người). Sau bến thứ hai: $53-18+9=44$ (người). Vậy trên xe còn $44$ hành khách.

*Nhìn lại.* Ta thử cách khác: tổng số người lên là $20+9=29$, tổng số người xuống là $12+18=30$. Ta có $45+29-30=44$, trùng với kết quả trên. Hơn nữa, số người xuống ở mỗi bến không bao giờ nhiều hơn số người đang có trên xe, nên các phép trừ đều thực hiện được trong $\mathbb{N}$.
:::

## Phép nhân và phép chia số tự nhiên

**Khám phá.** Một vé xem phim giá $45$ nghìn đồng. Mua $6$ vé thì tốn $6\times45=270$ nghìn đồng. Ta cũng có thể tách $45=40+5$: $6$ vé giá $40$ nghìn đồng là $240$ nghìn đồng, $6$ vé giá $5$ nghìn đồng là $30$ nghìn đồng, cộng lại $240+30=270$. Hai cách cho cùng kết quả.

:::theorem Tính chất của phép nhân
Với mọi số tự nhiên $a$, $b$, $c$:
- Giao hoán: $a\times b=b\times a$.
- Kết hợp: $(a\times b)\times c=a\times(b\times c)$.
- Nhân với $1$ và với $0$: $a\times1=a$ và $a\times0=0$.
- Phân phối đối với phép cộng: $a\times(b+c)=a\times b+a\times c$.
- Phân phối đối với phép trừ: $a\times(b-c)=a\times b-a\times c$ (với $b\ge c$).
:::

**Vì sao tính chất phân phối đúng?** $a\times(b+c)$ là tổng số đồ vật khi có $a$ nhóm, mỗi nhóm gồm $b+c$ đồ vật. Ta có thể đếm riêng $a$ nhóm $b$ đồ vật rồi đếm $a$ nhóm $c$ đồ vật và cộng lại, nên bằng $a\times b+a\times c$.

:::theorem Phép chia hết và phép chia có dư
Cho hai số tự nhiên $a$ và $b$ với $b\ne0$.
- Nếu có số tự nhiên $q$ để $a=b\times q$ thì ta nói $a$ chia hết cho $b$ và viết $a:b=q$.
- Nếu không, ta có phép chia có dư: tồn tại duy nhất $q$ và $r$ sao cho
$$a=b\times q+r,\qquad 0<r<b.$$
Khi đó $q$ là thương, $r$ là số dư. Nếu $r=0$ thì đó là phép chia hết. Không có phép chia cho $0$.
:::

**Vì sao số dư nhỏ hơn số chia?** Chia $a$ cho $b$ nghĩa là chia $a$ thành các nhóm, mỗi nhóm $b$ phần, càng nhiều nhóm càng tốt. Nếu phần còn lại $r$ mà vẫn còn từ $b$ trở lên thì ta lập thêm được một nhóm nữa, nên nhóm chưa đủ phải có $r<b$.

:::example Dùng tính chất kết hợp
Tính nhanh $25\times37\times4$.

**Lời giải.** Dùng tính chất giao hoán và kết hợp: $25\times37\times4=(25\times4)\times37=100\times37=3700$.
:::

:::example Dùng tính chất phân phối
Tính nhanh $47\times99$.

**Lời giải.** Viết $99=100-1$ rồi dùng tính chất phân phối đối với phép trừ:
$$47\times99=47\times(100-1)=47\times100-47\times1=4700-47=4653.$$
:::

:::example Chia có dư
Có $100$ cái kẹo chia đều cho $7$ bạn. Mỗi bạn được nhiều nhất bao nhiêu cái và còn dư mấy cái?

**Lời giải.** Ta có $7\times14=98$ và $7\times15=105>100$. Vậy mỗi bạn được nhiều nhất $14$ cái, còn dư $100-98=2$ cái. Viết $100=7\times14+2$, với $0<2<7$.
:::

:::example Tính tổng tiền
Giả sử một cửa hàng xếp $38$ hộp bút, mỗi hộp $25$ chiếc. Hỏi có tất cả bao nhiêu chiếc bút?

**Lời giải.** Số bút là $38\times25$. Viết $38=40-2$ rồi dùng tính chất phân phối: $38\times25=(40-2)\times25=40\times25-2\times25=1000-50=950$. Vậy có $950$ chiếc bút.
:::

:::warning Những lỗi bạn hay gặp
- **Trừ số nhỏ cho số lớn.** Sai: $5-8=3$ vì "lấy số lớn trừ số nhỏ". Vì sao sai: $5-8$ có $5<8$ nên không thực hiện được trong $\mathbb{N}$. Đúng: chỉ viết $8-5=3$.
- **Quên nhân đủ khi phân phối.** Sai: $6\times(40+5)=6\times40+5$. Vì sao sai: $6$ phải nhân với cả hai số trong ngoặc. Đúng: $6\times40+6\times5=270$.
- **Số dư lớn hơn hoặc bằng số chia.** Sai: $100=7\times13+9$. Vì sao sai: số dư $9\ge7$, còn lập thêm được một nhóm $7$. Đúng: $100=7\times14+2$.
- **Chia cho $0$.** Sai: $5:0=0$. Vì sao sai: không có số nào nhân với $0$ cho ra $5$. Đúng: phép chia cho $0$ không có nghĩa; còn $0:5=0$.
:::

## Thuật ngữ

:::terms
- tổng | sum
- hiệu | difference
- số bị trừ | minuend
- tích | product
- thừa số | factor
- thương | quotient
- số bị chia | dividend
- số chia | divisor
- số dư | remainder
- tính chất giao hoán | commutative property
- tính chất kết hợp | associative property
- tính chất phân phối | distributive property
:::

## Tóm tắt

- Phép cộng và phép nhân có tính chất giao hoán và kết hợp; có thể đổi chỗ, nhóm các số để tính nhanh.
- $a-b$ chỉ thực hiện được trong $\mathbb{N}$ khi $a\ge b$; cộng cùng một số vào số bị trừ và số trừ thì hiệu không đổi.
- Tính chất phân phối: $a\times(b+c)=a\times b+a\times c$ và $a\times(b-c)=a\times b-a\times c$.
- Phép chia: $a:b$ với $b\ne0$; chia hết khi $a=b\times q$; chia có dư khi $a=b\times q+r$ với $0<r<b$.

## Luyện tập

Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
**Bài 1.** Tính nhanh $68+27+32+73$.

::hint
**Kiến thức:** nhóm các số hạng cho tổng tròn chục hoặc tròn trăm.

**Gợi ý các bước:**
1. Tìm hai số có tổng tròn trăm.
2. Cộng các nhóm lại.

::solution
$68+27+32+73=(68+32)+(27+73)=100+100=200$.

**Đáp số.** $200$.
:::

:::exercise
**Bài 2.** Tính nhanh $2025-998$.

::hint
**Kiến thức:** cộng cùng một số vào số bị trừ và số trừ thì hiệu không đổi.

**Gợi ý các bước:**
1. Cần cộng thêm mấy vào $998$ để được số tròn?
2. Cộng số đó vào cả hai số.

::solution
$2025-998=(2025+2)-(998+2)=2027-1000=1027$.

**Đáp số.** $1027$.
:::

:::exercise
**Bài 3.** Giả sử thư viện có $1250$ quyển sách trong kho. Tuần này thư viện cho mượn $380$ quyển và nhận lại $215$ quyển. Hỏi cuối tuần, trong kho có bao nhiêu quyển?

::hint
**Kiến thức:** cho mượn làm giảm, nhận lại làm tăng.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Trừ số sách cho mượn.
3. Cộng số sách nhận lại.

::solution
Sau khi cho mượn còn $1250-380=870$ (quyển). Sau khi nhận lại có $870+215=1085$ (quyển).

**Đáp số.** $1085$ quyển.
:::

:::exercise
**Bài 4.** Tính nhanh $4\times18\times25$.

::hint
**Kiến thức:** nhóm các thừa số để được số tròn.

**Gợi ý các bước:**
1. Hai số nào có tích bằng $100$?

::solution
$4\times18\times25=(4\times25)\times18=100\times18=1800$.

**Đáp số.** $1800$.
:::

:::exercise
**Bài 5.** Tính nhanh $53\times101$.

::hint
**Kiến thức:** $a\times(b+c)=a\times b+a\times c$.

**Gợi ý các bước:**
1. Viết $101=100+1$.

::solution
$53\times101=53\times(100+1)=5300+53=5353$.

**Đáp số.** $5353$.
:::

:::exercise
**Bài 6.** Giả sử một chiếc áo giá $125$ nghìn đồng. Mua $8$ chiếc áo như vậy thì phải trả bao nhiêu tiền?

::hint
**Kiến thức:** $8\times125=1000$.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Nhân số áo với giá tiền một chiếc.

::solution
Số tiền là $8\times125=1000$ (nghìn đồng), tức là $1$ triệu đồng.

**Đáp số.** $1000$ nghìn đồng, tức $1$ triệu đồng.
:::

:::exercise
**Bài 7.** Thực hiện phép chia $250:12$ và viết kết quả dưới dạng $a=b\times q+r$.

::hint
**Kiến thức:** số dư phải nhỏ hơn số chia.

**Gợi ý các bước:**
1. Tìm $q$ lớn nhất sao cho $12\times q\le250$.
2. Tính số dư.

::solution
$12\times20=240$ và $12\times21=252>250$. Vậy thương là $20$, số dư $250-240=10$ (nhỏ hơn $12$). Viết $250=12\times20+10$.

**Đáp số.** $250=12\times20+10$.
:::

:::exercise
**Bài 8.** Giả sử có $200$ học sinh đi tham quan, mỗi xe chở tối đa $45$ người. Cần ít nhất bao nhiêu xe?

::hint
**Kiến thức:** phép chia có dư; học sinh còn dư vẫn cần một xe.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Chia $200$ cho $45$.
3. Xử lí số dư.

::solution
$200=45\times4+20$. Bốn xe chở được $180$ học sinh, còn dư $20$ học sinh nên cần thêm $1$ xe nữa. Vậy cần $4+1=5$ xe.

**Đáp số.** $5$ xe.
:::

:::exercise
**Bài 9.** Cho số có hai chữ số $\overline{ab}$ và số $\overline{ba}$ (hai chữ số $a$, $b$ đều khác $0$) với $a+b=7$. Tính $\overline{ab}+\overline{ba}$.

::hint
**Kiến thức:** $\overline{ab}=a\times10+b$ và tính chất phân phối.

**Gợi ý các bước:**
1. Viết $\overline{ab}$ và $\overline{ba}$ theo $a$, $b$.
2. Cộng lại và nhóm.

::solution
$\overline{ab}+\overline{ba}=(a\times10+b)+(b\times10+a)=a\times11+b\times11=11\times(a+b)=11\times7=77$.

**Kiểm tra.** Với $a=2$, $b=5$: $25+52=77$.

**Đáp số.** $77$.
:::

:::exercise Thử thách
**Bài 10.** Một số tự nhiên chia cho $8$ được thương bằng $11$ và có số dư $r$. a) Số dư $r$ lớn nhất có thể là bao nhiêu và khi đó số đã cho là bao nhiêu? b) Số đã cho nhỏ nhất là bao nhiêu?

::hint
**Kiến thức:** $a=8\times11+r$ với $0\le r<8$.

**Gợi ý các bước:**
1. Tìm các giá trị có thể của $r$.
2. Tính $a$ cho giá trị lớn nhất và nhỏ nhất của $r$.

::solution
Vì số dư nhỏ hơn $8$ nên $r$ chỉ có thể là $0$, $1$, ..., $7$. a) $r$ lớn nhất là $7$, khi đó số đó là $8\times11+7=95$. b) Số nhỏ nhất ứng với $r=0$: $8\times11+0=88$.

**Đáp số.** a) $r=7$, số đó là $95$; b) $88$.
:::

## Kiểm tra mini

:::quiz
::mc
Giá trị của $125+38+75+62$ là
A. $300$.
B. $238$.
C. $200$.
D. $400$.
::key A
$(125+75)+(38+62)=200+100=300$. Phương án C quên cặp $38+62$, B chỉ cộng $125+38+75$, D cộng nhầm hai nhóm thành $200+200$.

::mc
Giá trị của $1976-999$ là
A. $1977$.
B. $977$.
C. $987$.
D. $877$.
::key B
$1976-999=1977-1000=977$. Phương án A quên trừ $1000$, C và D tính sai khi trừ.

::mc
Giá trị của $47\times99$ là
A. $4700$.
B. $4606$.
C. $4653$.
D. $4747$.
::key C
$47\times99=47\times(100-1)=4700-47=4653$. Phương án A bỏ qua phép trừ, B là $47\times98$, D là $47\times101$.

::mc
Cách viết nào đúng cho phép chia $100$ cho $7$?
A. $100=7\times13+9$.
B. $100=7\times12+16$.
C. $100=7\times15-5$.
D. $100=7\times14+2$.
::key D
Số dư phải nhỏ hơn số chia và không âm: $2<7$. Phương án A và B có số dư lớn hơn $7$, C có số dư âm.

::tf
Về phép chia các số tự nhiên.
a) $0:5=0$.
b) $5:0=0$.
c) Khi chia cho $6$, số dư có thể bằng $6$.
d) $6\times(10+4)=6\times10+6\times4$.
::key Đ S S Đ
a) Đúng: $5\times0=0$. b) Sai: không có phép chia cho $0$. c) Sai: số dư nhỏ hơn $6$. d) Đúng: tính chất phân phối.

::sa
Tìm số dư của phép chia $250$ cho $12$.
::key 10
$250=12\times20+10$.

::sa
$200$ học sinh lên các xe $45$ chỗ. Cần ít nhất bao nhiêu xe?
::key 5
$200=45\times4+20$, còn $20$ học sinh nên cần thêm $1$ xe: $4+1=5$.
:::

