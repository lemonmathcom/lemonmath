---
title: Số nguyên tố
description: Hiểu số nguyên tố, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả số nguyên tố.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một câu lạc bộ có $29$ huy hiệu và muốn xếp thành các hàng bằng nhau, mỗi hàng có cùng số huy hiệu. Ngoài cách xếp một hàng $29$ chiếc hoặc $29$ hàng, mỗi hàng một chiếc, còn cách xếp nào khác không? Câu hỏi về cách chia đều này dẫn ta đến số nguyên tố.

## số nguyên tố

**Khám phá nhỏ.**
Liệt kê các ước lớn hơn $0$: số $12$ có các ước $1,2,3,4,6,12$, còn số $13$ chỉ có $1$ và $13$. Hai danh sách khác nhau ở chỗ $13$ không thể chia thành những nhóm bằng nhau có từ $2$ đến $12$ phần tử.

:::definition Số nguyên tố và hợp số
Số nguyên tố là số tự nhiên lớn hơn $1$ chỉ có hai ước là $1$ và chính nó. Hợp số là số tự nhiên lớn hơn $1$ có nhiều hơn hai ước. Số $0$ và số $1$ không là số nguyên tố, cũng không là hợp số.
:::

:::definition Phân tích ra thừa số nguyên tố
Phân tích một hợp số ra thừa số nguyên tố là viết số đó dưới dạng tích các số nguyên tố. Ta thường chia lần lượt cho các số nguyên tố $2,3,5,7,\ldots$ cho đến khi thương bằng $1$.
:::

**Vì sao?**
Nếu một số $n>1$ không phải số nguyên tố thì $n=ab$ với $1<a<n$ và $1<b<n$; vì thế $n$ có thêm các ước $a,b$. Ngược lại, có thêm một ước khác $1$ và $n$ thì số đó là hợp số. Khi phân tích ra thừa số nguyên tố, mỗi bước chia làm số còn lại nhỏ đi, nên quá trình phải dừng.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** số nguyên tố không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Nhận biết số nguyên tố
Trong các số $1,2,19,25,37$, số nào là số nguyên tố?

**Lời giải.**
$1$ không là số nguyên tố; $2$ chỉ có hai ước $1,2$; $19$ và $37$ không chia hết cho số nào từ $2$ đến trước chính nó; $25=5^2$ nên là hợp số.

Vậy, các số nguyên tố là $2,19,37$.
:::

:::example Phân tích một số
Phân tích $180$ ra thừa số nguyên tố.

**Lời giải.**
Ta chia lần lượt: $180=2\cdot90=2^2\cdot45=2^2\cdot3^2\cdot5$. Các thừa số $2,3,5$ đều là số nguyên tố.

Vậy, $180=2^2\cdot3^2\cdot5$.
:::

:::example Kiểm tra số $91$
$91$ là số nguyên tố hay hợp số?

**Lời giải.**
Ta thử các ước nhỏ và thấy $91:7=13$, nên $91=7\cdot13$. Vì $91$ có các ước $7$ và $13$ khác $1,91$, nó là hợp số.

Vậy, $91$ là hợp số.
:::

:::example Xếp huy hiệu
Một lớp có $31$ huy hiệu. Có thể chia đều thành $k$ túi, mỗi túi nhiều hơn một huy hiệu và $k>1$, được không?

**Lời giải.**

*Hiểu đề.* Cần tìm một ước $k$ của $31$ thỏa mãn $1<k<31$.

*Tìm cách giải.* Ta xét xem $31$ là số nguyên tố hay hợp số.

*Giải.* $31$ không chia hết cho $2,3,5$. Vì mọi cách phân tích $31=ab$ với $a,b>1$ sẽ có một thừa số không vượt quá $\sqrt{31}<6$, nên không còn thừa số nào cần thử. Do đó $31$ là số nguyên tố.

*Nhìn lại.* Chỉ có hai cách tầm thường: một túi $31$ chiếc hoặc $31$ túi một chiếc. Nếu có $33$ huy hiệu thì cách chia $3$ túi, mỗi túi $11$ chiếc sẽ xuất hiện.

Vậy, không thể chia như yêu cầu.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Coi $1$ là số nguyên tố.** Sai vì số nguyên tố phải có đúng hai ước. $1$ chỉ có một ước là $1$. Đúng: $1$ không là số nguyên tố cũng không là hợp số.
- **Dừng phép phân tích quá sớm.** Viết $60=6\cdot10$ chưa phải phân tích ra thừa số nguyên tố. $6$ và $10$ còn là hợp số. Đúng: $60=2^2\cdot3\cdot5$.
:::

**Kết nối.** Số nguyên tố là những “viên gạch” tạo nên số tự nhiên. Phân tích ra thừa số nguyên tố sẽ giúp ta tìm ước chung lớn nhất, bội chung nhỏ nhất và rút gọn phân số.

## Thuật ngữ

:::terms
- số nguyên tố | prime number
- hợp số | composite number
- ước | factor
- thừa số | factor
- thừa số nguyên tố | prime factor
- phân tích ra thừa số nguyên tố | prime factorisation
- số tự nhiên | natural number
:::

## Tóm tắt

- Số nguyên tố lớn hơn $1$ và có đúng hai ước: $1$ và chính nó.
- Hợp số lớn hơn $1$ và có nhiều hơn hai ước.
- $0$ và $1$ không thuộc hai loại trên.
- Phân tích ra thừa số nguyên tố phải kết thúc bằng toàn thừa số nguyên tố.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Chọn các số nguyên tố trong $2,9,17,21,23,27$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$9=3^2$, $21=3\cdot7$, $27=3^3$ là hợp số; $2,17,23$ chỉ có hai ước.

**Đáp số.** $2,17,23$.
:::

:::exercise
Phân tích $84$ ra thừa số nguyên tố.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$84=2\cdot42=2^2\cdot21=2^2\cdot3\cdot7$.

**Đáp số.** $2^2\cdot3\cdot7$.
:::

:::exercise
Phân tích $315$ ra thừa số nguyên tố.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$315=3\cdot105=3^2\cdot35=3^2\cdot5\cdot7$.

**Đáp số.** $3^2\cdot5\cdot7$.
:::

:::exercise
Giải thích vì sao $143$ là hợp số.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Ta có $143=11\cdot13$, nên $143$ có các ước khác $1$ và $143$.

**Đáp số.** $143$ là hợp số.
:::

:::exercise
Tìm số nguyên tố $p$ biết $p$ là ước của $42$ và $p>5$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$42=2\cdot3\cdot7$. Trong các thừa số nguyên tố, chỉ có $7>5$.

**Đáp số.** $p=7$.
:::

:::exercise
Một cửa hàng có $47$ chai nước và muốn xếp vào các khay bằng nhau, mỗi khay từ $2$ chai trở lên. Có thể dùng nhiều hơn một khay mà không thừa chai không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$47$ là số nguyên tố vì không chia hết cho $2,3,5$. Do đó không có số khay $k$ với $1<k<47$ chia hết $47$.

**Đáp số.** không thể.
:::

:::exercise
Tìm số tự nhiên nhỏ nhất có dạng $2^a\cdot3^b$ với $a,b$ là số tự nhiên dương và có đúng $12$ ước.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Số ước là $(a+1)(b+1)=12$. Với $a,b\ge1$, các cặp là $(a,b)=(5,1),(3,2),(2,3),(1,5)$. Các số tương ứng nhỏ nhất tại $(a,b)=(3,2)$: $2^3\cdot3^2=72$.

**Đáp số.** $72$.
:::

:::exercise Thử thách
Chứng minh rằng tổng của hai số nguyên tố lớn hơn $2$ luôn là hợp số.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Mỗi số nguyên tố lớn hơn $2$ đều lẻ. Tổng hai số lẻ là số chẵn lớn hơn $2$, nên chia hết cho $2$ và có nhiều hơn hai ước.

**Đáp số.** tổng đó luôn là hợp số.
:::

## Kiểm tra mini

:::quiz
::mc
Số nào sau đây là số nguyên tố?
A. $29$
B. $33$
C. $39$
D. $51$
::key A
$29$ không chia hết cho $2,3,5$; ba số còn lại đều chia hết cho $3$.

::mc
Phân tích đúng của $90$ là
A. $9\cdot10$
B. $2\cdot3^2\cdot5$
C. $2\cdot45$
D. $3\cdot30$
::key B
$90=2\cdot45=2\cdot3^2\cdot5$ và mọi thừa số đều nguyên tố.

::mc
Số nào không là số nguyên tố cũng không là hợp số?
A. $2$
B. $4$
C. $1$
D. $7$
::key C
$1$ chỉ có một ước nên không thuộc hai loại.

::mc
$77$ là hợp số vì
A. $77$ là số lẻ.
B. $77>10$.
C. $77$ tận cùng bằng $7$.
D. $77=7\cdot11$.
::key D
Phép phân tích $77=7\cdot11$ cho hai ước khác $1$ và $77$.

::tf
Xét các nhận định về số nguyên tố.
a) $1$ là số nguyên tố nhỏ nhất.
b) $2$ là số nguyên tố chẵn duy nhất.
c) $49$ là hợp số.
d) Mọi số lẻ đều là số nguyên tố.
::key S Đ Đ S
b) Đúng. a) Sai vì $1$ không là số nguyên tố. c) Đúng vì $49=7^2$. d) Sai, chẳng hạn $9=3^2$.

::sa
Có bao nhiêu số nguyên tố nhỏ hơn $10$?
::key 4
Các số đó là $2,3,5,7$.

::sa
Thừa số nguyên tố lớn nhất của $210$ là bao nhiêu?
::key 7
$210=2\cdot3\cdot5\cdot7$.

:::
