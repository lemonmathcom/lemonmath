---
title: Phép chia đa thức
description: Hiểu chia đơn thức, chia đa thức cho đơn thức và phép chia đa thức, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả chia đơn thức, chia đa thức cho đơn thức và phép chia đa thức.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Diện tích một hình chữ nhật là $12x^3+18x^2$ và một cạnh là $6x$. Cạnh kia được tìm bằng phép chia, cho $2x^2+3x$. Phép chia đại số dựa trên những quy tắc hệ số và số mũ nào?

## chia đơn thức, chia đa thức cho đơn thức và phép chia đa thức

**Khám phá nhỏ.**
Chia từng hạng tử: $\dfrac{12x^3}{6x}=2x^2$ và $\dfrac{18x^2}{6x}=3x$. Nhân ngược $(2x^2+3x)6x=12x^3+18x^2$ kiểm tra thương đúng.

:::definition Chia đơn thức
Khi chia các đơn thức khác $0$, chia hệ số và trừ số mũ của cùng biến: $\dfrac{ax^m}{bx^n}=\dfrac abx^{m-n}$ khi biểu thức có nghĩa.
:::

:::definition Chia đa thức
Muốn chia đa thức cho một đơn thức, chia từng hạng tử cho đơn thức rồi cộng kết quả. Với phép chia đa thức tổng quát, tìm thương và dư sao cho $A=BQ+R$, trong đó bậc của $R$ nhỏ hơn bậc của $B$.
:::

**Vì sao?**
Quy tắc số mũ xuất phát từ triệt tiêu các thừa số chung: $x^m:x^n=x^{m-n}$. Tính chất phân phối cho phép $\dfrac{A+B}{M}=\dfrac AM+\dfrac BM$ khi $M\ne0$. Phép nhân ngược khôi phục số bị chia và là cách kiểm tra đáng tin cậy.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** chia đơn thức, chia đa thức cho đơn thức và phép chia đa thức không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Chia đơn thức
Tính $18x^5:6x^2$.

**Lời giải.**
Chia hệ số và trừ số mũ: $18:6=3$, $x^{5-2}=x^3$, nên thương $3x^3$.

Vậy, $3x^3$.
:::

:::example Chia đa thức cho đơn thức
Tính $(15x^3-10x^2+5x):5x$.

**Lời giải.**
Chia từng hạng tử được $3x^2-2x+1$.

Vậy, $3x^2-2x+1$.
:::

:::example Kiểm tra bằng nhân
Kiểm tra $(8x^2+12x):4x=2x+3$.

**Lời giải.**
Nhân thương với số chia: $(2x+3)4x=8x^2+12x$, bằng số bị chia.

Vậy, đúng.
:::

:::example Kích thước hình chữ nhật
Diện tích giả định là $20x^2+30x$ m² và chiều rộng $10x$ m. Tìm chiều dài.

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* Chiều dài là $(20x^2+30x):10x=2x+3$ m, với $x\ne0$.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, $2x+3$ m.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Chia chỉ hạng tử đầu.** Trong $(6x^2+9x):3x$, chỉ chia $6x^2$. Số chia tác động đến mọi hạng tử trong tử. Viết $2x+3$.
- **Trừ số mũ khác biến.** Gộp số mũ của $x$ với số mũ của $y$. Chỉ các lũy thừa cùng cơ số mới triệt tiêu. Xử lí từng biến riêng và nêu điều kiện mẫu.
:::

**Kết nối.** Phép chia đa thức đảo ngược phép nhân và dùng trong rút gọn phân thức, phân tích nhân tử, tìm kích thước từ diện tích và nghiên cứu nghiệm đa thức. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- số bị chia | dividend
- số chia | divisor
- thương | quotient
- số dư | remainder
- chia đơn thức | monomial division
- chia hết | exact division
- trừ số mũ | subtract exponents
- phép nhân ngược | multiplication check
- điều kiện xác định | domain restriction
:::

## Tóm tắt

- Chia hệ số và trừ số mũ của cùng biến.
- Chia đa thức cho đơn thức bằng cách chia từng hạng tử.
- Số chia phải khác $0$.
- $A=BQ+R$ và $\deg R<\deg B$.
- Nhân thương với số chia rồi cộng dư để kiểm tra.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Tính $-24a^4b^2:6a^2b$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$-24:6=-4$, $a^{4-2}=a^2$, $b^{2-1}=b$, nên kết quả $-4a^2b$.

**Đáp số.** $-4a^2b$.
:::

:::exercise
Tính $(5x^2+2x):2x$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\dfrac{5x^2}{2x}+\dfrac{2x}{2x}=\dfrac52x+1$.

**Đáp số.** $\dfrac52x+1$.
:::

:::exercise
Số chia là $3x$, thương là $2x^2-x+4$ và dư $0$. Tìm số bị chia.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$3x(2x^2-x+4)=6x^3-3x^2+12x$.

**Đáp số.** $6x^3-3x^2+12x$.
:::

:::exercise
Trong phép chia $\dfrac{6x^2}{3x}$, cần điều kiện nào cho $x$?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Mẫu $3x$ phải khác $0$, nên $x\ne0$. Khi đó thương bằng $2x$.

**Đáp số.** $x\ne0$.
:::

:::exercise
Tính $(9x^2-6x+12):3$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Chia từng hệ số cho $3$: $3x^2-2x+4$.

**Đáp số.** $3x^2-2x+4$.
:::

:::exercise
Kiểm tra $x^2+1=(x+1)(x-1)+2$. Xác định thương và dư khi chia cho $x+1$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Khai triển vế phải được $x^2-1+2=x^2+1$. Vậy thương $x-1$, dư $2$, và bậc dư $0<1$.

**Đáp số.** $Q=x-1,R=2$.
:::

:::exercise
Tính $(x^2-9):(x-3)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Phân tích $x^2-9=(x-3)(x+3)$, nên thương $x+3$ với $x\ne3$.

**Đáp số.** $x+3$.
:::

:::exercise Thử thách
$A$ bậc $7$, $B$ bậc $3$ và phép chia hết. Bậc của thương là bao nhiêu?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Bậc tích bằng tổng bậc, nên $7=3+\deg Q$ và $\deg Q=4$.

**Đáp số.** $4$.
:::

## Kiểm tra mini

:::quiz
::mc
$12x^4:3x^2$ bằng
A. $4x^2$
B. $4x^6$
C. $9x^2$
D. $4x$
::key A
$12:3=4$ và $x^{4-2}=x^2$.

::mc
$(8x^2+4x):4x$ bằng
A. $2x$
B. $2x+1$
C. $4x+1$
D. $2x^2+1$
::key B
Chia từng hạng tử được $2x+1$.

::mc
Trong $A=BQ+R$, $R$ là
A. số chia.
B. thương.
C. số dư.
D. số bị chia.
::key C
Kí hiệu $R$ đại diện số dư.

::mc
Điều kiện cho $\dfrac{x+1}{x-2}$ là
A. $x=2$
B. $x\ne-1$
C. $x>2$
D. $x\ne2$
::key D
Mẫu $x-2$ phải khác $0$.

::tf
Xét phép chia đa thức.
a) Chia cho đơn thức cần chia mọi hạng tử.
b) Số chia có thể bằng $0$.
c) Khi chia cùng cơ số, ta cộng số mũ.
d) Nhân ngược có thể kiểm tra thương.
::key Đ S S Đ
a), d) đúng. Phép chia trừ số mũ và không cho số chia bằng $0$, nên c), b) sai.

::sa
Tính giá trị $20x^3:5x$ tại $x=2$.
::key 16
Thương là $4x^2$; thay $x=2$ được $4\cdot2^2=16$.

::sa
Tính giá trị $(6x+12):6$ tại $x=5$.
::key 7
Thương là $x+2$; thay $x=5$ được $7$.

:::
