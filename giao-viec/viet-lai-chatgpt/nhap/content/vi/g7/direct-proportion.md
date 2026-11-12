---
title: Đại lượng tỉ lệ thuận
description: Hiểu đại lượng tỉ lệ thuận, hệ số tỉ lệ và đồ thị, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả đại lượng tỉ lệ thuận, hệ số tỉ lệ và đồ thị.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một máy in đều tạo $18$ trang mỗi phút. Sau $x$ phút, số trang là $y=18x$. Tỉ số $\dfrac yx$ luôn bằng $18$, và khi thời gian gấp đôi thì số trang cũng gấp đôi. Đây là dấu hiệu của quan hệ nào?

## đại lượng tỉ lệ thuận, hệ số tỉ lệ và đồ thị

**Khám phá nhỏ.**
Lập bảng $(x,y)$: $(1,18),(2,36),(3,54)$. Mỗi thương $y:x$ bằng $18$. Các điểm cùng nằm trên đường thẳng đi qua gốc tọa độ, vì khi $x=0$ thì $y=0$.

:::definition Tỉ lệ thuận
Hai đại lượng $x,y$ tỉ lệ thuận nếu tồn tại hằng số $k\ne0$ sao cho $y=kx$. Số $k$ là hệ số tỉ lệ và $k=\dfrac yx$ khi $x\ne0$.
:::

:::definition Tính chất và đồ thị
Nếu $y$ tỉ lệ thuận với $x$, thì $\dfrac{y_1}{y_2}=\dfrac{x_1}{x_2}$ khi các mẫu hợp lệ. Đồ thị $y=kx$ là đường thẳng đi qua gốc tọa độ.
:::

**Vì sao?**
Công thức $y=kx$ cho thấy mọi giá trị $y$ được tạo bằng cùng một phép nhân từ $x$. Vì thế thay $x$ bằng $cx$ cũng thay $y$ bằng $cy$. Ngược lại, tỉ số $y/x$ không đổi xác định một hệ số chung và dẫn đến công thức.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** đại lượng tỉ lệ thuận, hệ số tỉ lệ và đồ thị không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Tìm hệ số tỉ lệ
Biết $y$ tỉ lệ thuận với $x$ và $y=28$ khi $x=4$. Tìm $k$.

**Lời giải.**
$k=\dfrac yx=\dfrac{28}{4}=7$.

Vậy, $7$.
:::

:::example Lập công thức
Với dữ kiện $k=7$, viết $y$ theo $x$ và tìm $y$ khi $x=9$.

**Lời giải.**
$y=7x$; khi $x=9$, $y=7\cdot9=63$.

Vậy, $y=63$.
:::

:::example Kiểm tra một bảng
Các cặp $(2,6),(5,15),(8,24)$ có tỉ lệ thuận không?

**Lời giải.**
Các tỉ số $6:2=15:5=24:8=3$, nên có, với $k=3$.

Vậy, có; $k=3$.
:::

:::example Chi phí theo khối lượng
Một loại hạt giả định giá $48$ nghìn đồng mỗi kg. Tính giá $2{,}5$ kg nếu không có phí cố định.

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* $y=48x$, nên $y=48\cdot2{,}5=120$ nghìn đồng.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, $120$ nghìn đồng.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Chỉ thấy đường thẳng là kết luận tỉ lệ thuận.** Coi $y=3x+4$ là tỉ lệ thuận vì đồ thị thẳng. Đồ thị tỉ lệ thuận còn phải đi qua gốc. Kiểm tra $x=0$ có cho $y=0$ không.
- **Dùng hiệu thay cho tỉ số.** Kiểm tra $y-x$ không đổi để nhận biết tỉ lệ thuận. Tỉ lệ thuận yêu cầu thương $y/x$ không đổi. Tính $k=\dfrac yx$ cho nhiều cặp.
:::

**Kết nối.** Tỉ lệ thuận mô hình hoá chi phí không phí cố định, chuyển động đều, đổi đơn vị và phóng to. Công thức $y=kx$ là một trong những mô hình hàm số đơn giản và quan trọng nhất. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- đại lượng tỉ lệ thuận | directly proportional quantities
- hệ số tỉ lệ | constant of proportionality
- công thức $y=kx$ | formula $y=kx$
- gốc tọa độ | origin
- tỉ số không đổi | constant ratio
- bảng giá trị | value table
- đồ thị đường thẳng | straight-line graph
- tốc độ không đổi | constant speed
:::

## Tóm tắt

- Tỉ lệ thuận có dạng $y=kx$ với $k\ne0$.
- $k=\dfrac yx$ khi $x\ne0$.
- Nhân $x$ với một hệ số cũng nhân $y$ với hệ số đó.
- Đồ thị là đường thẳng qua gốc tọa độ.
- Tỉ số không cố định nghĩa là không tỉ lệ thuận.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
$y=12x$ và $y=90$. Tìm $x$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$x=90:12=7{,}5$.

**Đáp số.** $7{,}5$.
:::

:::exercise
$x$ tăng từ $3$ lên $12$ trong quan hệ tỉ lệ thuận. $y$ thay đổi theo hệ số nào?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$12:3=4$, nên $x$ gấp $4$ và $y$ cũng gấp $4$.

**Đáp số.** gấp $4$.
:::

:::exercise
Bảng có $(1,4),(2,8),(3,13)$. Có tỉ lệ thuận không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Hai tỉ số đầu bằng $4$, nhưng $13:3\ne4$, nên không có hệ số không đổi.

**Đáp số.** không.
:::

:::exercise
Một đường thẳng có công thức $y=5x+2$. Nó có biểu diễn tỉ lệ thuận không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Không. Khi $x=0$, $y=2\ne0$, nên đồ thị không đi qua gốc.

**Đáp số.** không.
:::

:::exercise
Xe đi đều $72$ km/h. Viết công thức quãng đường $s$ theo thời gian $t$ giờ và tính khi $t=1{,}75$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$s=72t$; $s=72\cdot1{,}75=126$ km.

**Đáp số.** $126$ km.
:::

:::exercise
Trong quan hệ tỉ lệ thuận, $(x_1,y_1)=(6,15)$ và $x_2=14$. Tìm $y_2$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$k=15:6=2{,}5$, nên $y_2=2{,}5\cdot14=35$.

**Đáp số.** $35$.
:::

:::exercise
Quan hệ $y=-3x$ có phải tỉ lệ thuận không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Có, vì có dạng $y=kx$ với hệ số không đổi $k=-3$. Đồ thị qua gốc và đi xuống khi $x$ tăng.

**Đáp số.** có.
:::

:::exercise Thử thách
Đường tỉ lệ thuận đi qua $(4,10)$. Điểm $(10,25)$ có nằm trên cùng đường không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$10:4=2{,}5$ và $25:10=2{,}5$ theo tỉ số $y/x$; hai điểm có cùng $k$, nên có.

**Đáp số.** có.
:::

## Kiểm tra mini

:::quiz
::mc
$y=6x$, khi $x=5$ thì $y$ bằng
A. $11$
B. $30$
C. $1{,}2$
D. $35$
::key B
$6\cdot5=30$.

::mc
Đồ thị tỉ lệ thuận phải đi qua
A. gốc tọa độ.
B. điểm $(1,1)$.
C. trục tung tại $2$.
D. mọi điểm.
::key A
Vì $x=0$ cho $y=0$.

::mc
Với $(x,y)=(4,20)$, hệ số $k$ là
A. $4$
B. $16$
C. $5$
D. $80$
::key C
$k=20:4=5$.

::mc
Công thức nào không tỉ lệ thuận?
A. $y=2x$
B. $y=-x$
C. $y=0{,}5x$
D. $y=2x+1$
::key D
Số hạng $+1$ làm đồ thị không qua gốc.

::tf
Xét quan hệ tỉ lệ thuận.
a) Đồ thị $y=kx$ đi qua gốc.
b) Mọi đường thẳng đều biểu diễn tỉ lệ thuận.
c) Tỉ số $y/x$ không đổi khi $x\ne0$.
d) Nếu $x$ gấp đôi thì $y$ luôn giảm một nửa.
::key Đ S Đ S
c), a) đúng. Đường phải qua gốc và $y$ cũng gấp đôi trong tỉ lệ thuận nên b), d) sai.

::sa
$y=4x$, tìm $y$ khi $x=7$.
::key 28
$4\cdot7=28$.

::sa
Biết $y=18$ khi $x=6$. Tìm $k$.
::key 3
$k=18:6=3$.

:::
