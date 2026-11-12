---
title: Định lí và chứng minh định lí
description: Hiểu giả thiết, kết luận, định lí và lập luận chứng minh, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả giả thiết, kết luận, định lí và lập luận chứng minh.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Đo một hình có thể gợi ý rằng hai góc bằng nhau, nhưng hình vẽ có thể không chính xác. Một chứng minh dùng các dữ kiện và quy tắc đã biết để bảo đảm kết luận đúng cho mọi hình thoả điều kiện, không chỉ hình đang nhìn.

## giả thiết, kết luận, định lí và lập luận chứng minh

**Khám phá nhỏ.**
Mệnh đề “Nếu một số nguyên chia hết cho $4$ thì số đó chẵn” có giả thiết là “chia hết cho $4$” và kết luận là “chẵn”. Viết $n=4k=2(2k)$ chứng minh kết luận bằng định nghĩa, không cần thử từng số.

:::definition Định lí và cấu trúc
Định lí là một khẳng định toán học được chứng minh đúng. Dạng thường gặp là “Nếu $P$ thì $Q$”, trong đó $P$ là giả thiết và $Q$ là kết luận. Mệnh đề đảo đổi vai trò thành “Nếu $Q$ thì $P$” và cần được xét riêng.
:::

:::definition Chứng minh và phản ví dụ
Chứng minh là chuỗi lập luận từ giả thiết qua định nghĩa, tiên đề hoặc định lí đã biết đến kết luận. Một phản ví dụ duy nhất đủ bác bỏ một khẳng định phổ quát nhưng không thể tự chứng minh một khẳng định đúng.
:::

**Vì sao?**
Mỗi bước chứng minh phải trả lời “dựa vào đâu?”. Giả thiết cung cấp điểm xuất phát; kết luận là mục tiêu, không được dùng nó như một dữ kiện. Sơ đồ “đã biết → suy ra → cần chứng minh” giúp tránh lập luận vòng tròn.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** giả thiết, kết luận, định lí và lập luận chứng minh không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Tách giả thiết và kết luận
Trong mệnh đề “Nếu hai góc đối đỉnh thì chúng bằng nhau”, nêu giả thiết và kết luận.

**Lời giải.**
Giả thiết: hai góc đối đỉnh. Kết luận: hai góc có số đo bằng nhau.

Vậy, GT: đối đỉnh; KL: bằng nhau.
:::

:::example Viết mệnh đề đảo
Viết mệnh đề đảo của “Nếu một số chia hết cho $6$ thì nó chia hết cho $3$”.

**Lời giải.**
Đảo là: “Nếu một số chia hết cho $3$ thì nó chia hết cho $6$”.

Vậy, Nếu chia hết $3$ thì chia hết $6$.
:::

:::example Bác bỏ mệnh đề đảo
Mệnh đề đảo vừa viết đúng không?

**Lời giải.**
Không. Số $9$ chia hết cho $3$ nhưng không chia hết cho $6$; $9$ là phản ví dụ.

Vậy, sai; $9$.
:::

:::example Chứng minh bằng định nghĩa
Chứng minh tổng của hai số chẵn là số chẵn.

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* Gọi hai số là $2m,2n$ với $m,n$ nguyên. Tổng $2m+2n=2(m+n)$, là $2$ nhân một số nguyên nên chẵn.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, chẵn.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Dùng hình vẽ làm bằng chứng.** Kết luận hai đoạn bằng nhau vì nhìn có vẻ bằng. Hình chỉ minh hoạ và có thể không đúng tỉ lệ. Dùng kí hiệu, giả thiết hoặc định lí để xác nhận.
- **Chứng minh mệnh đề đảo thay cho mệnh đề gốc.** Đổi giả thiết với kết luận mà không nhận ra. Mệnh đề và đảo của nó có thể có giá trị đúng sai khác nhau. Gạch chân giả thiết và đóng khung kết luận trước khi chứng minh.
:::

**Kết nối.** Chứng minh biến các quy tắc rời rạc thành một mạng lưới có lí do. Kĩ năng này không chỉ dành cho hình học: nó giúp kiểm tra lập luận, phát hiện giả định ẩn và giao tiếp kết luận đáng tin cậy. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- định lí | theorem
- giả thiết | hypothesis
- kết luận | conclusion
- chứng minh | proof
- mệnh đề đảo | converse
- phản ví dụ | counterexample
- tiên đề | axiom
- tính chất bắc cầu | transitive property
- lập luận vòng tròn | circular reasoning
:::

## Tóm tắt

- Định lí là khẳng định đã được chứng minh.
- Giả thiết là điều đã cho; kết luận là điều cần suy ra.
- Mỗi bước cần một định nghĩa, tính chất hoặc định lí làm lí do.
- Một phản ví dụ bác bỏ mệnh đề phổ quát.
- Mệnh đề đảo phải được kiểm tra riêng.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Trong chứng minh, từ $AB=AC$ và $AC=AD$ suy ra $AB=AD$ dựa vào tính chất nào?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Dựa vào tính chất bắc cầu của đẳng thức.

**Đáp số.** bắc cầu.
:::

:::exercise
Để chứng minh hai góc cùng bù với một góc thì bằng nhau, nên bắt đầu bằng đẳng thức nào?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Gọi các góc là $x,z$ và góc chung là $y$: viết $x+y=180^\circ$ và $z+y=180^\circ$.

**Đáp số.** $x+y=z+y=180^\circ$.
:::

:::exercise
Kiểm tra $2+4=6$, $8+10=18$ có chứng minh tổng hai số chẵn luôn chẵn không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Không. Chúng chỉ là ví dụ; cần biểu diễn hai số chẵn tổng quát là $2m,2n$.

**Đáp số.** không.
:::

:::exercise
Bác bỏ mệnh đề “mọi tứ giác có bốn cạnh bằng nhau đều có bốn góc vuông”.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Một hình thoi không phải hình vuông có bốn cạnh bằng nhau nhưng các góc không đều vuông; đó là phản ví dụ.

**Đáp số.** hình thoi không vuông.
:::

:::exercise
Biết hai góc so le trong bằng nhau. Điền kết luận và lí do.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Hai đường thẳng song song theo dấu hiệu góc so le trong bằng nhau.

**Đáp số.** hai đường song song.
:::

:::exercise
Muốn chứng minh $A$, một lời giải viết “$A$ đúng vì ta biết $A$”. Lỗi gì xảy ra?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Kết luận đã bị dùng làm lí do cho chính nó; đây là lập luận vòng tròn.

**Đáp số.** lập luận vòng tròn.
:::

:::exercise
Chứng minh tích của một số chẵn và một số nguyên là chẵn.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Gọi số chẵn là $2k$ và số kia là $m$. Tích $(2k)m=2(km)$, mà $km$ nguyên, nên tích chẵn.

**Đáp số.** chẵn.
:::

:::exercise Thử thách
Để chứng minh “có một số nguyên có bình phương bằng $49$”, cần gì?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Chỉ cần đưa ra một ví dụ: $7^2=49$ hoặc $(-7)^2=49$.

**Đáp số.** $7$.
:::

## Kiểm tra mini

:::quiz
::mc
Trong “Nếu $P$ thì $Q$”, $P$ là
A. kết luận.
B. phản ví dụ.
C. giả thiết.
D. mệnh đề đảo.
::key C
$P$ nêu điều kiện đã cho.

::mc
Muốn bác bỏ mệnh đề “mọi số đều có tính chất X”, cần
A. một phản ví dụ.
B. mười ví dụ đúng.
C. một hình đẹp.
D. đo gần đúng.
::key A
Một trường hợp không thoả là đủ bác bỏ mệnh đề phổ quát.

::mc
Mệnh đề đảo của “Nếu $P$ thì $Q$” là
A. Nếu không $P$ thì không $Q$.
B. Nếu $Q$ thì $P$.
C. $P$ và $Q$ đều sai.
D. Nếu $P$ thì không $Q$.
::key B
Mệnh đề đảo hoán đổi giả thiết và kết luận.

::mc
Một chứng minh hợp lệ phải
A. chỉ dựa vào hình vẽ.
B. thử đúng một ví dụ.
C. dùng kết luận làm giả thiết.
D. nêu lí do cho các bước.
::key D
Chuỗi suy luận chỉ đáng tin khi mỗi bước có căn cứ.

::tf
Xét các nhận định về chứng minh.
a) Giả thiết là điểm xuất phát.
b) Một phản ví dụ có thể bác bỏ mệnh đề phổ quát.
c) Nhiều ví dụ luôn chứng minh được mệnh đề phổ quát.
d) Mệnh đề đảo luôn đúng nếu mệnh đề gốc đúng.
::key Đ Đ S S
a), b) đúng. Ví dụ không thay thế chứng minh và mệnh đề đảo cần xét riêng nên c), d) sai.

::sa
Nếu $n=20$ và $n=4k$, tìm $k$.
::key 5
$20=4\cdot5$, nên $k=5$.

::sa
Số lẻ dương nhỏ nhất phản bác mệnh đề “mọi số lẻ đều lớn hơn $7$” là số nào?
::key 1
$1$ là số lẻ dương và $1\not>7$.

:::
