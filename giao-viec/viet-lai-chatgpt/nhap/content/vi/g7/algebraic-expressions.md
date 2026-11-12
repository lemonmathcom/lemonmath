---
title: Biểu thức đại số
description: Hiểu biến, hạng tử, hệ số và giá trị biểu thức đại số, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả biến, hạng tử, hệ số và giá trị biểu thức đại số.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một chuyến đi giả định có phí mở cửa $25$ nghìn đồng và $8$ nghìn đồng cho mỗi kilômét. Với quãng đường $x$ km, chi phí là $25+8x$. Biểu thức này lưu cả quy tắc cho mọi chuyến thay vì chỉ một phép tính.

## biến, hạng tử, hệ số và giá trị biểu thức đại số

**Khám phá nhỏ.**
Thay $x=6$ vào $25+8x$ cho $25+8\cdot6=73$. Số $x$ là biến; $25$ và $8x$ là các hạng tử; $8$ là hệ số của $x$. Khi thay giá trị khác, cấu trúc biểu thức giữ nguyên.

:::definition Biểu thức và hạng tử
Biểu thức đại số gồm số, biến và phép tính. Các phần được ngăn bởi dấu cộng hoặc trừ ở cấp ngoài cùng là hạng tử. Trong hạng tử $-5x^2$, hệ số là $-5$ và phần biến là $x^2$.
:::

:::definition Giá trị và hạng tử đồng dạng
Giá trị biểu thức được tìm bằng cách thay biến rồi theo thứ tự phép tính. Hạng tử đồng dạng có cùng phần biến với cùng số mũ; chúng được cộng bằng cách cộng hệ số.
:::

**Vì sao?**
Biến cho phép một kí hiệu đại diện nhiều giá trị. Hạng tử đồng dạng đo cùng loại “đơn vị đại số”, giống như $3$ mét cộng $5$ mét thành $8$ mét; còn $3x$ và $5x^2$ có phần biến khác nên không thể gộp.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** biến, hạng tử, hệ số và giá trị biểu thức đại số không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Nhận biết hạng tử
Nêu các hạng tử của $4x^2-3x+7$.

**Lời giải.**
Giữ dấu đi kèm: các hạng tử là $4x^2,-3x,7$.

Vậy, $4x^2,-3x,7$.
:::

:::example Tìm hệ số
Hệ số của $x^3$ trong $-9x^3+2x$ là gì?

**Lời giải.**
Hạng tử chứa $x^3$ là $-9x^3$, nên hệ số bằng $-9$.

Vậy, $-9$.
:::

:::example Tính giá trị
Tính $2x^2-3x+1$ tại $x=-2$.

**Lời giải.**
$2(-2)^2-3(-2)+1=8+6+1=15$.

Vậy, $15$.
:::

:::example Lập biểu thức chi phí
Một dịch vụ giả định thu $40$ nghìn đồng cố định và $6$ nghìn đồng cho mỗi giờ $h$. Viết chi phí và tính cho $5$ giờ.

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* $C=40+6h$; khi $h=5$, $C=40+30=70$ nghìn đồng.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, $70$ nghìn đồng.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Bỏ ngoặc khi thay số âm.** Thay $x=-2$ vào $x^2$ thành $-2^2=-4$. Giá trị của biến là cả số âm và phải được đặt trong ngoặc. Viết $(-2)^2=4$.
- **Gộp hạng tử không đồng dạng.** Viết $3x+2x^2=5x^3$. Phần biến và số mũ không giống nhau. Giữ $2x^2+3x$ hoặc chỉ gộp từng nhóm đồng dạng.
:::

**Kết nối.** Biểu thức đại số chuyển quy luật bằng lời thành mô hình có thể tính, so sánh và biến đổi. Đây là ngôn ngữ nền cho phương trình, hàm số, công thức hình học và đa thức. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- biểu thức đại số | algebraic expression
- biến | variable
- hằng số | constant
- hạng tử | term
- hệ số | coefficient
- phần biến | variable part
- hạng tử đồng dạng | like terms
- thay giá trị | substitution
- tính chất phân phối | distributive property
:::

## Tóm tắt

- Hạng tử được tách bởi cộng hoặc trừ ở cấp ngoài cùng.
- Hệ số gồm cả dấu của hạng tử.
- Thay số âm cần dùng ngoặc.
- Chỉ hạng tử đồng dạng mới gộp được.
- Phân phối nhân một thừa số với mọi hạng tử trong ngoặc.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Thu gọn $5x+3x-4$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$5x+3x=8x$, nên biểu thức là $8x-4$.

**Đáp số.** $8x-4$.
:::

:::exercise
Có thể gộp $4x$ và $4x^2$ thành $8x^3$ không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Không. Phần biến $x$ và $x^2$ khác nhau; tổng giữ là $4x+4x^2$.

**Đáp số.** không.
:::

:::exercise
Khai triển $3(2x-5)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nhân $3$ với từng hạng tử: $3\cdot2x-3\cdot5=6x-15$.

**Đáp số.** $6x-15$.
:::

:::exercise
Viết $12x+18$ dưới dạng tích có nhân tử chung lớn nhất.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nhân tử chung là $6$, nên $12x+18=6(2x+3)$.

**Đáp số.** $6(2x+3)$.
:::

:::exercise
Hình chữ nhật có chiều dài $x+3$, chiều rộng $x-1$. Viết chu vi thu gọn.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$P=2[(x+3)+(x-1)]=2(2x+2)=4x+4$.

**Đáp số.** $4x+4$.
:::

:::exercise
Tính $3a-2b$ khi $a=4,b=-1$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$3\cdot4-2(-1)=12+2=14$.

**Đáp số.** $14$.
:::

:::exercise
Hai biểu thức $2(x+3)$ và $2x+6$ có luôn bằng nhau không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Có. Tính chất phân phối cho $2(x+3)=2x+6$ với mọi $x$.

**Đáp số.** có.
:::

:::exercise Thử thách
Dãy hình có số que lần lượt $4,7,10,13$ cho hình $n=1,2,3,4$. Viết biểu thức số que theo $n$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Mỗi bước tăng $3$, và $3n+1$ cho $n=1$ giá trị $4$. Vậy quy tắc là $3n+1$.

**Đáp số.** $3n+1$.
:::

## Kiểm tra mini

:::quiz
::mc
Hệ số của $-7x^2$ là
A. $-7$
B. $7$
C. $2$
D. $x$
::key A
Hệ số gồm dấu âm.

::mc
$3x+5x$ thu gọn thành
A. $8x^2$
B. $15x$
C. $8x$
D. $8$
::key C
Hai hạng tử đồng dạng có hệ số tổng $8$.

::mc
$2(x+4)$ bằng
A. $2x+4$
B. $2x+8$
C. $x+8$
D. $6x$
::key B
Phân phối $2$ vào cả hai hạng tử.

::mc
$x^2$ tại $x=-3$ bằng
A. $-9$
B. $-6$
C. $6$
D. $9$
::key D
$(-3)^2=9$.

::tf
Xét biểu thức đại số.
a) $x$ và $x^2$ là đồng dạng.
b) $3(a+b)=3a+b$.
c) $4x$ và $-2x$ là đồng dạng.
d) Hệ số của $-x$ là $-1$.
::key S S Đ Đ
c), d) đúng. Số mũ khác nhau làm hạng tử không đồng dạng và phân phối phải nhân cả $b$.

::sa
Tính $2x+1$ tại $x=4$.
::key 9
$2\cdot4+1=9$.

::sa
Tính $7y-3y$ tại $y=2$.
::key 8
Thu gọn thành $4y$, rồi $4\cdot2=8$.

:::
