---
title: Cộng và trừ đa thức
description: Hiểu đa thức, bậc, cộng và trừ đa thức, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả đa thức, bậc, cộng và trừ đa thức.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Chu vi hai hình được biểu diễn bởi $P_1=3x^2+2x+5$ và $P_2=x^2-4x+7$. Muốn tìm tổng hoặc chênh lệch, ta phải ghép đúng các hạng tử có cùng phần biến và đặc biệt xử lí dấu trừ trước ngoặc.

## đa thức, bậc, cộng và trừ đa thức

**Khám phá nhỏ.**
Cộng theo cột bậc: $(3x^2+x^2)+(2x-4x)+(5+7)=4x^2-2x+12$. Khi trừ $P_2$, đổi dấu từng hạng tử của nó rồi cộng.

:::definition Đa thức và bậc
Đa thức một biến là tổng hữu hạn các hạng tử $ax^n$ với số mũ $n$ nguyên không âm. Bậc của đa thức khác $0$ là số mũ lớn nhất có hệ số khác $0$ sau khi thu gọn.
:::

:::definition Cộng và trừ
Muốn cộng đa thức, nhóm hạng tử đồng dạng và cộng hệ số. Muốn trừ một đa thức, cộng đa thức đối của nó: đổi dấu mọi hạng tử trong đa thức bị trừ.
:::

**Vì sao?**
Mỗi lũy thừa $1,x,x^2,\ldots$ đóng vai trò một loại đơn vị độc lập. Cộng đa thức là cộng tọa độ hệ số của cùng loại. Phép trừ phân phối dấu âm cho toàn bộ ngoặc vì $A-B=A+(-1)B$.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** đa thức, bậc, cộng và trừ đa thức không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Cộng hai đa thức
Tính $(3x^2+2x-1)+(x^2-5x+4)$.

**Lời giải.**
Gộp theo bậc: $4x^2-3x+3$.

Vậy, $4x^2-3x+3$.
:::

:::example Trừ hai đa thức
Tính $(5x^2-x+6)-(2x^2+3x-4)$.

**Lời giải.**
Đổi dấu đa thức sau: $5x^2-x+6-2x^2-3x+4=3x^2-4x+10$.

Vậy, $3x^2-4x+10$.
:::

:::example Tìm bậc sau thu gọn
Tìm bậc của $4x^3-2x+x^3+7$.

**Lời giải.**
Thu gọn được $5x^3-2x+7$; số mũ lớn nhất là $3$, nên bậc $3$.

Vậy, $3$.
:::

:::example Tổng diện tích đại số
Hai phần có diện tích $2x^2+3x$ và $x^2-x+5$. Viết tổng diện tích.

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* Cộng hạng tử đồng dạng: $3x^2+2x+5$.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, $3x^2+2x+5$.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Quên đổi mọi dấu khi trừ.** Trong $P-(x^2-3x+4)$ chỉ đổi dấu hạng tử đầu. Dấu trừ là nhân cả đa thức với $-1$. Viết $P-x^2+3x-4$.
- **Gộp các bậc khác nhau.** Cộng $2x^2+3x$ thành $5x^3$. Hai phần biến khác nhau nên không đồng dạng. Sắp theo bậc và chỉ cộng cùng cột.
:::

**Kết nối.** Cộng và trừ đa thức tổng hợp hoặc so sánh nhiều mô hình đại số. Việc căn theo bậc giống cộng số theo hàng đơn vị và chuẩn bị cho nhân, chia đa thức và giải phương trình. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- đa thức | polynomial
- đơn thức | monomial
- bậc của đa thức | degree of a polynomial
- hệ số dẫn đầu | leading coefficient
- hạng tử đồng dạng | like terms
- đa thức đối | opposite polynomial
- thu gọn | simplify
- sắp theo bậc | order by degree
:::

## Tóm tắt

- Đa thức dùng số mũ nguyên không âm.
- Bậc là số mũ lớn nhất còn lại sau thu gọn.
- Cộng đa thức bằng cách cộng hệ số cùng bậc.
- Trừ đa thức bằng cách đổi dấu mọi hạng tử rồi cộng.
- Thay số là một cách kiểm tra kết quả.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Tính $(2x^3+5)+(x^2-3x+1)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Không có hạng tử nào đồng dạng ngoài hằng số; kết quả $2x^3+x^2-3x+6$.

**Đáp số.** $2x^3+x^2-3x+6$.
:::

:::exercise
Tính $(x^2+2x-3)-(x^2-4x-8)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$x^2+2x-3-x^2+4x+8=6x+5$.

**Đáp số.** $6x+5$.
:::

:::exercise
Biết $A+(2x^2-x+3)=5x^2+4x-1$. Tìm $A$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$A=(5x^2+4x-1)-(2x^2-x+3)=3x^2+5x-4$.

**Đáp số.** $3x^2+5x-4$.
:::

:::exercise
Kiểm tra kết quả $(x+2)+(2x-5)=3x-3$ tại $x=4$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Vế trái $6+3=9$; vế phải $12-3=9$, nên khớp tại $x=4$.

**Đáp số.** $9=9$.
:::

:::exercise
Tính $(x^2+x)+(2x^2-3)+(4x-x^2+1)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Hệ số $x^2$ là $1+2-1=2$, hệ số $x$ là $1+4=5$, hằng số $-2$; kết quả $2x^2+5x-2$.

**Đáp số.** $2x^2+5x-2$.
:::

:::exercise
Tìm bậc của $(3x^4+x)-(3x^4-2x^2)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Kết quả $3x^4+x-3x^4+2x^2=2x^2+x$, nên bậc là $2$.

**Đáp số.** $2$.
:::

:::exercise
So sánh $P+Q$ và $Q+P$ với hai đa thức bất kì.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Cộng hệ số thực có tính giao hoán ở từng bậc, nên $P+Q=Q+P$.

**Đáp số.** bằng nhau.
:::

:::exercise Thử thách
Cho $P=ax^3+2x$ và $Q=-5x^3+x^2$. Tìm $a$ để $P+Q$ có bậc nhỏ hơn $3$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Hệ số $x^3$ của tổng là $a-5$. Cần $a-5=0$, nên $a=5$.

**Đáp số.** $5$.
:::

## Kiểm tra mini

:::quiz
::mc
$(2x+3)+(x-5)$ bằng
A. $3x-2$
B. $3x+8$
C. $2x^2-2$
D. $x-2$
::key A
Gộp $2x+x=3x$ và $3-5=-2$.

::mc
$(x^2+2)-(x^2-3)$ bằng
A. $2x^2-1$
B. $5$
C. $-1$
D. $2x^2+5$
::key B
$x^2+2-x^2+3=5$.

::mc
Bậc của $4x^5-x+2$ là
A. $4$
B. $2$
C. $5$
D. $1$
::key C
Số mũ lớn nhất là $5$.

::mc
Khi trừ $(x-4)$ ta được
A. $x-4$
B. $-x-4$
C. $x+4$
D. $-x+4$
::key D
Đổi dấu cả hai hạng tử.

::tf
Xét phép tính đa thức.
a) Các hạng tử bậc cao có thể triệt tiêu.
b) Chỉ hạng tử cùng bậc mới gộp trực tiếp.
c) $x^2+x$ thu gọn thành $2x^3$.
d) Trừ đa thức chỉ đổi dấu hạng tử đầu.
::key Đ Đ S S
b), a) đúng. Phải đổi mọi dấu và các bậc khác nhau không gộp được nên d), c) sai.

::sa
Tính giá trị $(3x+2)+(x-5)$ tại $x=2$.
::key 5
Thu gọn thành $4x-3$, rồi thay $x=2$ được $5$.

::sa
Bậc của $2x^4+7x$ là bao nhiêu?
::key 4
Số mũ lớn nhất là $4$.

:::
