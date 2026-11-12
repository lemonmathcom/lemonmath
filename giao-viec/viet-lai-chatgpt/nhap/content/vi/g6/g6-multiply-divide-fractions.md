---
title: Phép nhân và phép chia phân số
description: Hiểu phép nhân và phép chia phân số, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả phép nhân và phép chia phân số.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một khu vườn giả định dùng $\dfrac35$ diện tích để trồng rau; trong phần đó, $\dfrac23$ dành cho rau ăn lá. Phần cả khu vườn trồng rau ăn lá là “$\dfrac23$ của $\dfrac35$”, dẫn đến phép nhân phân số. Nếu $\dfrac34$ quãng đường dài $18$ km, phép tính ngược nào tìm được cả quãng đường?

## phép nhân và phép chia phân số

**Khám phá nhỏ.**
Trong một hình chữ nhật đơn vị, lấy $\dfrac35$ theo chiều ngang rồi lấy $\dfrac23$ phần đó theo chiều dọc. Phần giao là $\dfrac35\cdot\dfrac23=\dfrac6{15}=\dfrac25$ hình ban đầu. Hình vẽ cho thấy “của” tương ứng với phép nhân.

:::definition Nhân phân số
Với $b,d\ne0$, ta có $\dfrac ab\cdot\dfrac cd=\dfrac{ac}{bd}$. Có thể rút gọn chéo các thừa số chung trước khi nhân.
:::

:::definition Chia phân số
Muốn chia cho một phân số khác $0$, ta nhân với phân số nghịch đảo: $\dfrac ab:\dfrac cd=\dfrac ab\cdot\dfrac dc$ với $c,d\ne0$.
:::

**Vì sao?**
Phép nhân tìm một phần của một phần nên số phần được nhân ở tử, còn số phần chia của toàn thể được nhân ở mẫu. Phép chia hỏi số chia nằm trong số bị chia bao nhiêu lần. Nhân với nghịch đảo là thao tác ngược vì $\dfrac cd\cdot\dfrac dc=1$; thừa số $\dfrac cd$ được loại bỏ mà giá trị quan hệ vẫn giữ nguyên.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** phép nhân và phép chia phân số không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Nhân và rút gọn chéo
Tính $\dfrac{-7}{12}\cdot\dfrac{18}{35}$.

**Lời giải.**
Rút gọn $7$ với $35$, $18$ với $12$: $\dfrac{-7}{12}\cdot\dfrac{18}{35}=-\dfrac{1\cdot3}{2\cdot5}=-\dfrac3{10}$.

Vậy, $-\dfrac3{10}$.
:::

:::example Chia hai phân số
Tính $\dfrac56:\dfrac{-10}{9}$.

**Lời giải.**
$\dfrac56:\dfrac{-10}{9}=\dfrac56\cdot\dfrac9{-10}=-\dfrac{45}{60}=-\dfrac34$.

Vậy, $-\dfrac34$.
:::

:::example Thứ tự thực hiện
Tính $\dfrac23-\dfrac34\cdot\dfrac89$.

**Lời giải.**
Nhân trước: $\dfrac34\cdot\dfrac89=\dfrac23$. Do đó $\dfrac23-\dfrac23=0$.

Vậy, $0$.
:::

:::example Diện tích trồng rau
$\dfrac35$ khu vườn trồng rau; $\dfrac23$ phần đó trồng rau ăn lá. Rau ăn lá chiếm phần nào cả vườn?

**Lời giải.**

*Hiểu đề.* Ta tìm một phần của một phần, không cộng hai phân số.

*Tìm cách giải.* Dùng phép nhân $\dfrac23\cdot\dfrac35$.

*Giải.* Phần cần tìm là $\dfrac23\cdot\dfrac35=\dfrac25$.

*Nhìn lại.* $\dfrac25<\dfrac35$, phù hợp vì rau ăn lá chỉ là một phần diện tích trồng rau. Nếu toàn bộ phần rau là rau ăn lá thì kết quả sẽ là $\dfrac35$.

Vậy, rau ăn lá chiếm $\dfrac25$ khu vườn.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Nhân chéo khi nhân phân số.** Sai: $\dfrac23\cdot\dfrac45=\dfrac{2\cdot5}{3\cdot4}$. Phép nhân dùng tử nhân tử, mẫu nhân mẫu. $\dfrac23\cdot\dfrac45=\dfrac8{15}$.
- **Đảo nhầm số bị chia.** Sai: $\dfrac23:\dfrac45=\dfrac32\cdot\dfrac45$. Chỉ đảo phân số đứng sau dấu chia. $\dfrac23:\dfrac45=\dfrac23\cdot\dfrac54=\dfrac56$.
:::

**Kết nối.** Nhân phân số mô tả “một phần của một phần”; chia phân số là phép ngược của nhân. Trước khi tính, hãy dự đoán độ lớn. Nhân một số dương với phân số dương nhỏ hơn $1$ phải làm kết quả nhỏ đi; chia cho phân số dương nhỏ hơn $1$ phải làm kết quả lớn lên. Dự đoán này phát hiện nhanh việc đảo sai phân số. Khi rút gọn chéo, chỉ được chia một thừa số ở tử và một thừa số ở mẫu cho cùng một số khác $0$; không được rút gọn qua dấu cộng hoặc dấu trừ. Hãy ghi bước đổi phép chia thành phép nhân với nghịch đảo trước, rồi mới rút gọn. Một sơ đồ diện tích kiểm tra tốt phép nhân, còn phép nhân ngược lại kiểm tra phép chia. Những thói quen này sẽ tiếp tục được dùng trong tỉ lệ, vận tốc, năng suất, diện tích và phương trình.

## Thuật ngữ

:::terms
- nhân phân số | multiplying fractions
- chia phân số | dividing fractions
- phân số nghịch đảo | reciprocal
- số bị chia | dividend
- số chia | divisor
- tích | product
- thương | quotient
- rút gọn chéo | cancel common factors
:::

## Tóm tắt

- Nhân: tử nhân tử, mẫu nhân mẫu.
- Chia: nhân với nghịch đảo của số chia.
- Không được chia cho $0$.
- Rút gọn trước khi nhân giúp phép tính gọn hơn.
- Nhân hoặc chia trước cộng, trừ nếu không có ngoặc.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Tính $\dfrac7{12}\cdot\dfrac6{35}$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\dfrac7{12}\cdot\dfrac6{35}=\dfrac1{10}$.

**Đáp số.** $\dfrac1{10}$.
:::

:::exercise
Tính $-\dfrac58\cdot\dfrac{16}{15}$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$-\dfrac58\cdot\dfrac{16}{15}=-\dfrac23$.

**Đáp số.** $-\dfrac23$.
:::

:::exercise
Tính $\dfrac9{14}:\dfrac37$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\dfrac9{14}\cdot\dfrac73=\dfrac32$.

**Đáp số.** $\dfrac32$.
:::

:::exercise
Tính $2\dfrac14\cdot\dfrac89$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\dfrac94\cdot\dfrac89=2$.

**Đáp số.** $2$.
:::

:::exercise
Tìm $x$ biết $\dfrac56x=\dfrac{25}{18}$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$x=\dfrac{25}{18}:\dfrac56=\dfrac{25}{18}\cdot\dfrac65=\dfrac53$.

**Đáp số.** $x=\dfrac53$.
:::

:::exercise
$\dfrac34$ của tấm vải dài $20$ m được dùng. Tính chiều dài đã dùng.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$20\cdot\dfrac34=15$ m.

**Đáp số.** $15$ m.
:::

:::exercise
Một xe đi $\dfrac25$ quãng đường trong $\dfrac34$ giờ. Với tốc độ đều, mỗi giờ đi phần nào quãng đường?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\dfrac25:\dfrac34=\dfrac25\cdot\dfrac43=\dfrac8{15}$.

**Đáp số.** $\dfrac8{15}$ quãng đường.
:::

:::exercise Thử thách
Tính $\left(\dfrac12+\dfrac13\right):\dfrac5{12}$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\dfrac12+\dfrac13=\dfrac56$, nên $\dfrac56:\dfrac5{12}=\dfrac56\cdot\dfrac{12}{5}=2$.

**Đáp số.** $2$.
:::

## Kiểm tra mini

:::quiz
::mc
$\dfrac23\cdot\dfrac9{10}$ bằng
A. $\dfrac35$
B. $\dfrac65$
C. $\dfrac{11}{13}$
D. $\dfrac{18}{30}$
::key A
Rút gọn được $\dfrac35$.

::mc
$\dfrac34:\dfrac38$ bằng
A. $\dfrac9{32}$
B. $2$
C. $\dfrac12$
D. $1$
::key B
$\dfrac34\cdot\dfrac83=2$.

::mc
Nghịch đảo của $-\dfrac57$ là
A. $\dfrac57$
B. $\dfrac75$
C. $-\dfrac75$
D. $-\dfrac57$
::key C
Đổi chỗ tử và mẫu, giữ dấu âm.

::mc
$\dfrac45$ của $25$ là
A. $5$
B. $10$
C. $15$
D. $20$
::key D
$25\cdot\dfrac45=20$.

::tf
Xét các phép tính phân số.
a) Nghịch đảo của $0$ là $0$.
b) $\dfrac12\cdot\dfrac23=\dfrac13$.
c) $\dfrac34:\dfrac32=\dfrac12$.
d) $-\dfrac25\cdot(-5)=2$.
::key S Đ Đ Đ
b), c), d) đúng. a) sai vì $0$ không có nghịch đảo.

::sa
Tính $\dfrac35\cdot20$.
::key 12
$20\cdot\dfrac35=12$.

::sa
Tính $\dfrac78:\dfrac7{16}$.
::key 2
$\dfrac78\cdot\dfrac{16}{7}=2$.

:::
