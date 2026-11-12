---
title: Kết quả có thể xảy ra và sự kiện trong trò chơi, thí nghiệm
description: Hiểu kết quả có thể xảy ra, không gian mẫu và sự kiện, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả kết quả có thể xảy ra, không gian mẫu và sự kiện.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một đồng xu được tung và một xúc xắc được gieo. Trước khi làm, ta không biết kết quả cụ thể nhưng có thể liệt kê mọi khả năng. Liệt kê có hệ thống giúp biết một sự kiện có thể, chắc chắn hay không thể xảy ra.

## kết quả có thể xảy ra, không gian mẫu và sự kiện

**Khám phá nhỏ.**
Với một đồng xu, không gian mẫu là $\{N,S\}$, trong đó $N$ là ngửa và $S$ là sấp. Với xúc xắc sáu mặt, không gian mẫu là $\{1,2,3,4,5,6\}$. Sự kiện “ra số chẵn” gồm $\{2,4,6\}$.

:::definition Phép thử và kết quả
Phép thử ngẫu nhiên là hoạt động có các kết quả đã biết trước về loại nhưng chưa biết kết quả nào sẽ xuất hiện. Một kết quả là một khả năng riêng lẻ; tập mọi kết quả gọi là không gian mẫu.
:::

:::definition Sự kiện
Sự kiện là một tập con của không gian mẫu, gồm những kết quả làm mô tả của sự kiện đúng. Sự kiện chắc chắn chứa mọi kết quả; sự kiện không thể không chứa kết quả nào.
:::

**Vì sao?**
Liệt kê bằng bảng hoặc sơ đồ cây ngăn việc bỏ sót khi có nhiều giai đoạn. Một kết quả thuộc sự kiện khi và chỉ khi nó thoả điều kiện mô tả. Ở giai đoạn này, việc đếm kết quả chưa tự động cho xác suất nếu các kết quả không đồng khả năng.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** kết quả có thể xảy ra, không gian mẫu và sự kiện không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Không gian mẫu của xúc xắc
Liệt kê không gian mẫu khi gieo một xúc xắc sáu mặt.

**Lời giải.**
Các mặt có nhãn từ $1$ đến $6$, nên $S=\{1,2,3,4,5,6\}$.

Vậy, $\{1,2,3,4,5,6\}$.
:::

:::example Mô tả sự kiện
Gieo xúc xắc. Viết sự kiện $A$: “kết quả lớn hơn $4$”.

**Lời giải.**
Trong $S$, các số lớn hơn $4$ là $5,6$, nên $A=\{5,6\}$.

Vậy, $\{5,6\}$.
:::

:::example Hai đồng xu
Tung hai đồng xu theo thứ tự. Liệt kê các kết quả.

**Lời giải.**
Ghi kết quả xu thứ nhất rồi xu thứ hai: $\{NN,NS,SN,SS\}$.

Vậy, $\{NN,NS,SN,SS\}$.
:::

:::example Vòng quay và xu
Vòng quay có $Đ,X$ và đồng xu có $N,S$. Có bao nhiêu kết quả có thứ tự?

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* Mỗi trong $2$ màu ghép với $2$ mặt xu: $2\cdot2=4$ kết quả.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, $4$.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Bỏ thứ tự khi thứ tự có ý nghĩa.** Coi $NS$ và $SN$ là một kết quả khi tung hai xu theo thứ tự. Chúng khác nhau ở lần tung nào xuất hiện mặt ngửa. Ghi vị trí thứ nhất và thứ hai nhất quán.
- **Cho rằng mọi kết quả đồng khả năng.** Chỉ đếm tên kết quả rồi kết luận về khả năng. Một vòng quay có vùng không bằng nhau tạo các khả năng khác nhau. Chỉ dùng tỉ lệ đếm khi đã biết các kết quả đồng khả năng.
:::

**Kết nối.** Không gian mẫu là bản đồ của mọi điều có thể xảy ra, còn sự kiện chọn phần bản đồ liên quan đến câu hỏi. Cách tổ chức này chuẩn bị cho xác suất lí thuyết và mô phỏng. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- phép thử ngẫu nhiên | random experiment
- kết quả | outcome
- không gian mẫu | sample space
- sự kiện | event
- sự kiện chắc chắn | certain event
- sự kiện không thể | impossible event
- sơ đồ cây | tree diagram
- kết quả có thứ tự | ordered outcome
- đồng khả năng | equally likely
:::

## Tóm tắt

- Kết quả là một khả năng riêng lẻ của phép thử.
- Không gian mẫu chứa mọi kết quả có thể.
- Sự kiện là tập các kết quả thoả một mô tả.
- Bảng và sơ đồ cây giúp liệt kê không bỏ sót.
- Không được mặc nhiên coi các kết quả đồng khả năng.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Gieo xúc xắc. Liệt kê sự kiện ra số chẵn.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Các kết quả chẵn là $\{2,4,6\}$.

**Đáp số.** $\{2,4,6\}$.
:::

:::exercise
Gieo xúc xắc chuẩn. Sự kiện “kết quả nhỏ hơn $7$” thuộc loại nào?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Mọi kết quả $1$ đến $6$ đều nhỏ hơn $7$, nên sự kiện chắc chắn.

**Đáp số.** chắc chắn.
:::

:::exercise
Tung một đồng xu. Sự kiện “xu đồng thời ngửa và sấp” thuộc loại nào?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Không có kết quả đơn lẻ nào thoả cả hai trạng thái, nên sự kiện không thể.

**Đáp số.** không thể.
:::

:::exercise
Chọn ngẫu nhiên một chữ trong từ TOAN. Liệt kê sự kiện chọn nguyên âm.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Các nguyên âm trong danh sách là $O,A$, nên sự kiện là $\{O,A\}$.

**Đáp số.** $\{O,A\}$.
:::

:::exercise
Chọn một số từ $\{1,2\}$ rồi một số từ $\{3,4\}$. Liệt kê các tổng có thể.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Các cặp cho tổng $1+3=4$, $1+4=5$, $2+3=5$, $2+4=6$; các tổng là $\{4,5,6\}$.

**Đáp số.** $\{4,5,6\}$.
:::

:::exercise
Một thực đơn có $3$ món chính và $2$ đồ uống. Có bao nhiêu lựa chọn gồm một món và một đồ uống?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Mỗi món ghép với $2$ đồ uống, nên có $3\cdot2=6$ kết quả.

**Đáp số.** $6$.
:::

:::exercise
Gieo xúc xắc. Liệt kê kết quả vừa chẵn vừa lớn hơn $3$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Số chẵn là $\{2,4,6\}$; giữ các số lớn hơn $3$ được $\{4,6\}$.

**Đáp số.** $\{4,6\}$.
:::

:::exercise Thử thách
Tung hai đồng xu. Sự kiện “đúng một mặt ngửa” có bao nhiêu kết quả có thứ tự?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Các kết quả là $NS,SN$, nên có $2$ kết quả.

**Đáp số.** $2$.
:::

## Kiểm tra mini

:::quiz
::mc
Không gian mẫu của một đồng xu có bao nhiêu kết quả?
A. $1$
B. $2$
C. $3$
D. $4$
::key B
Một đồng xu có hai mặt có thể xuất hiện.

::mc
Gieo xúc xắc, sự kiện ra số lớn hơn $5$ là
A. $\{6\}$
B. $\{5,6\}$
C. $\{1,2,3,4,5\}$
D. $\varnothing$
::key A
Chỉ kết quả $6$ lớn hơn $5$.

::mc
Gieo xúc xắc, “kết quả bằng $8$” là sự kiện
A. chắc chắn.
B. có thể.
C. không thể.
D. đồng khả năng.
::key C
Xúc xắc chuẩn không có mặt $8$.

::mc
Hai lựa chọn đầu và ba lựa chọn sau tạo bao nhiêu cặp?
A. $2$
B. $3$
C. $5$
D. $6$
::key D
$2\cdot3=6$.

::tf
Xét các nhận định về kết quả và sự kiện.
a) Sự kiện là một tập kết quả.
b) Sơ đồ cây hữu ích cho phép thử nhiều giai đoạn.
c) Mọi danh sách kết quả đều đồng khả năng.
d) Không gian mẫu bỏ bớt kết quả ít gặp.
::key Đ Đ S S
a), b) đúng. Không gian mẫu phải đầy đủ và khả năng còn phụ thuộc cơ chế nên d), c) sai.

::sa
Gieo xúc xắc. Có bao nhiêu kết quả chẵn?
::key 3
$\{2,4,6\}$ có $3$ kết quả.

::sa
Tung hai đồng xu theo thứ tự. Có bao nhiêu kết quả?
::key 4
$2\cdot2=4$.

:::
