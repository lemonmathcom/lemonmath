---
title: Số thập phân hữu hạn và số thập phân vô hạn tuần hoàn
description: Hiểu số thập phân hữu hạn, vô hạn tuần hoàn và đổi phân số, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả số thập phân hữu hạn, vô hạn tuần hoàn và đổi phân số.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Phép chia $1:4$ dừng ở $0{,}25$, còn $1:3$ cho $0{,}333\ldots$ không dừng nhưng lặp lại. Cả hai đều là số hữu tỉ. Điều gì ở mẫu số quyết định kiểu thập phân, và làm sao đổi phần lặp trở lại phân số?

## số thập phân hữu hạn, vô hạn tuần hoàn và đổi phân số

**Khám phá nhỏ.**
Chia dài $\dfrac17$ cho dãy $0{,}142857142857\ldots$: sau sáu chữ số, số dư trở lại như cũ nên chu kì lặp. Với phân số tối giản có mẫu chỉ gồm thừa số $2$ và $5$, phép chia tạo số thập phân hữu hạn.

:::definition Hai kiểu biểu diễn
Số thập phân hữu hạn có số chữ số sau dấu phẩy hữu hạn. Số thập phân vô hạn tuần hoàn có một chữ số hoặc một nhóm chữ số lặp mãi; chẳng hạn $0{,}\overline{27}$.
:::

:::definition Tiêu chuẩn mẫu số
Rút gọn $\dfrac ab$ với mẫu dương. Biểu diễn thập phân hữu hạn khi và chỉ khi $b=2^m5^n$ với $m,n$ là số tự nhiên; nếu mẫu còn thừa số nguyên tố khác, biểu diễn là vô hạn tuần hoàn.
:::

**Vì sao?**
Trong chia dài, số dư chỉ có hữu hạn khả năng $0,1,\ldots,b-1$. Số dư $0$ làm phép chia dừng; nếu không, một số dư phải lặp và từ đó các chữ số thương lặp. Nhân một số tuần hoàn với luỹ thừa của $10$ giúp căn thẳng chu kì để phép trừ loại phần vô hạn.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** số thập phân hữu hạn, vô hạn tuần hoàn và đổi phân số không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Nhận biết số hữu hạn
$\dfrac7{40}$ có thập phân hữu hạn hay tuần hoàn?

**Lời giải.**
$40=2^3\cdot5$, chỉ có thừa số $2,5$, nên hữu hạn; thực tế $\dfrac7{40}=0{,}175$.

Vậy, hữu hạn.
:::

:::example Nhận biết số tuần hoàn
$\dfrac5{12}$ có kiểu thập phân nào?

**Lời giải.**
$12=2^2\cdot3$ còn thừa số $3$, nên số thập phân vô hạn tuần hoàn.

Vậy, tuần hoàn.
:::

:::example Đổi số hữu hạn
Viết $0{,}625$ dưới dạng phân số tối giản.

**Lời giải.**
$0{,}625=\dfrac{625}{1000}=\dfrac58$.

Vậy, $\dfrac58$.
:::

:::example Đổi một chữ số lặp
Đổi $x=0{,}\overline{6}$ thành phân số.

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* $10x=6{,}\overline{6}$. Trừ $x=0{,}\overline{6}$ được $9x=6$, nên $x=\dfrac23$.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, $\dfrac23$.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Xét mẫu trước khi rút gọn.** Cho rằng $\dfrac6{15}$ tuần hoàn vì mẫu có thừa số $3$. Thừa số $3$ bị triệt tiêu khi rút gọn. Rút gọn $\dfrac6{15}=\dfrac25$ trước khi áp dụng tiêu chuẩn.
- **Hiểu dấu gạch sai phạm vi.** Coi $0{,}1\overline{6}$ là $0{,}\overline{16}$. Dấu gạch chỉ phủ những chữ số thuộc chu kì. Viết vài chữ số: $0{,}1666\ldots$ khác $0{,}1616\ldots$.
:::

**Kết nối.** Biểu diễn thập phân làm phép đo và so sánh thuận tiện, còn phân số giữ cấu trúc chính xác. Số tuần hoàn cho thấy một dãy chữ số vô hạn vẫn có thể biểu diễn một số hữu tỉ chính xác. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- số thập phân hữu hạn | terminating decimal
- số thập phân vô hạn | infinite decimal
- số thập phân tuần hoàn | recurring decimal
- chu kì | repetend
- phần không lặp | non-repeating part
- phân số tối giản | fraction in simplest form
- chia dài | long division
- số dư | remainder
- dấu gạch tuần hoàn | recurring bar
:::

## Tóm tắt

- Phân số tối giản có mẫu chỉ gồm $2,5$ thì thập phân hữu hạn.
- Mẫu còn thừa số khác tạo số thập phân tuần hoàn.
- Số dư lặp dẫn đến chữ số thương lặp.
- Nhân với luỹ thừa của $10$ để căn thẳng chu kì.
- Số hữu hạn và tuần hoàn đều là số hữu tỉ.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Đổi $0{,}\overline{45}$ thành phân số.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Đặt $x=0{,}\overline{45}$. Khi đó $100x-x=45$, nên $99x=45$ và $x=\dfrac5{11}$.

**Đáp số.** $\dfrac5{11}$.
:::

:::exercise
$\dfrac6{15}$ có hữu hạn không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Phải rút gọn trước: $\dfrac6{15}=\dfrac25=0{,}4$, nên hữu hạn.

**Đáp số.** có.
:::

:::exercise
Trong $0{,}1232323\ldots$, phần không lặp và chu kì là gì?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Chữ số $1$ xuất hiện trước khi lặp; nhóm $23$ lặp mãi.

**Đáp số.** $1$; $23$.
:::

:::exercise
So sánh $0{,}\overline{3}$ và $\dfrac13$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Đặt $x=0{,}\overline{3}$ thì $9x=3$, nên $x=\dfrac13$; hai số bằng nhau.

**Đáp số.** bằng nhau.
:::

:::exercise
Không thực hiện chia, giải thích vì sao $\dfrac{13}{125}$ có không quá $3$ chữ số thập phân.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$125=5^3$. Nhân mẫu với $2^3$ được $1000$, nên $\dfrac{13}{125}=\dfrac{104}{1000}=0{,}104$.

**Đáp số.** $0{,}104$.
:::

:::exercise
Đổi $x=0{,}1\overline{6}$ thành phân số.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$10x=1{,}\overline{6}$ và $100x=16{,}\overline{6}$. Trừ được $90x=15$, nên $x=\dfrac16$.

**Đáp số.** $\dfrac16$.
:::

:::exercise
Tính $0{,}\overline{2}+\dfrac19$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$0{,}\overline{2}=\dfrac29$, nên tổng là $\dfrac29+\dfrac19=\dfrac13$.

**Đáp số.** $\dfrac13$.
:::

:::exercise Thử thách
Chứng minh $0{,}\overline{9}=1$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Đặt $x=0{,}\overline{9}$. Khi đó $10x-x=9$, nên $9x=9$ và $x=1$.

**Đáp số.** $1$.
:::

## Kiểm tra mini

:::quiz
::mc
$\dfrac7{20}$ có biểu diễn
A. hữu hạn.
B. không tuần hoàn vô hạn.
C. không xác định.
D. không phải số hữu tỉ.
::key A
$20=2^2\cdot5$ chỉ có thừa số $2,5$.

::mc
$0{,}\overline{4}$ bằng
A. $\dfrac14$
B. $\dfrac49$
C. $\dfrac45$
D. $4$
::key B
Nếu $x=0{,}\overline4$ thì $9x=4$.

::mc
Phân số nào chắc chắn tuần hoàn sau rút gọn?
A. $\dfrac38$
B. $\dfrac7{25}$
C. $\dfrac5{12}$
D. $\dfrac9{40}$
::key C
Mẫu $12$ còn thừa số $3$.

::mc
$0{,}125$ bằng
A. $\dfrac14$
B. $\dfrac15$
C. $\dfrac18$
D. $\dfrac12$
::key C
$0{,}125=\dfrac{125}{1000}=\dfrac18$.

::tf
Xét biểu diễn thập phân của số hữu tỉ.
a) $\dfrac18$ có thập phân hữu hạn.
b) $0{,}\overline9<1$.
c) Số dư lặp làm chữ số thương lặp.
d) Mọi số thập phân vô hạn đều không hữu tỉ.
::key Đ S Đ S
a), c) đúng. Số tuần hoàn là hữu tỉ và $0{,}\overline9=1$, nên d), b) sai.

::sa
Đổi $0{,}75$ thành phân số tối giản.
::key 3/4
$0{,}75=\dfrac{75}{100}=\dfrac34$.

::sa
Đổi $0{,}\overline7$ thành phân số.
::key 7/9
Đặt $x=0{,}\overline7$ thì $9x=7$.

:::
