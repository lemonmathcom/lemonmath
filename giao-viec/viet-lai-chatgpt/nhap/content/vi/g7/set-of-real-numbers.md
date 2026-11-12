---
title: Tập hợp các số thực
description: Hiểu số vô tỉ, số thực và biểu diễn trên trục số, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả số vô tỉ, số thực và biểu diễn trên trục số.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Đường chéo hình vuông cạnh $1$ có độ dài $\sqrt2$. Không có phân số $\dfrac ab$ nào bình phương đúng bằng $2$, nhưng độ dài ấy vẫn có vị trí chính xác trên trục số. Ta cần mở rộng hệ số như thế nào?

## số vô tỉ, số thực và biểu diễn trên trục số

**Khám phá nhỏ.**
Từ $1^2<2<2^2$ suy ra $1<\sqrt2<2$. Tính gần đúng cho $\sqrt2\approx1{,}414$. Các chữ số thập phân tiếp tục không dừng và không lặp theo chu kì; đó là dấu hiệu của một số vô tỉ.

:::definition Số vô tỉ
Số vô tỉ không thể viết dưới dạng $\dfrac ab$ với $a,b\in\mathbb Z$, $b\ne0$. Biểu diễn thập phân của nó vô hạn và không tuần hoàn; ví dụ $\sqrt2,\pi$.
:::

:::definition Số thực
Tập hợp số thực $\mathbb R$ gồm tất cả số hữu tỉ và số vô tỉ. Mỗi số thực ứng với đúng một điểm trên trục số, và mỗi điểm trên trục biểu diễn một số thực.
:::

**Vì sao?**
Các tập số lồng nhau: $\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R$. Căn bậc hai số không âm là độ dài nên lấy giá trị không âm. Muốn so sánh căn, có thể kẹp giữa các bình phương hoặc dùng gần đúng với số chữ số đủ cho quyết định.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** số vô tỉ, số thực và biểu diễn trên trục số không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Phân loại một căn
Phân loại $\sqrt{49}$.

**Lời giải.**
$\sqrt{49}=7$, nên số này là số tự nhiên, số nguyên, số hữu tỉ và số thực.

Vậy, $7\in\mathbb N$.
:::

:::example Nhận biết vô tỉ
$\sqrt{12}$ là hữu tỉ hay vô tỉ?

**Lời giải.**
$\sqrt{12}=2\sqrt3$ và $3$ không là số chính phương, nên $\sqrt{12}$ vô tỉ.

Vậy, vô tỉ.
:::

:::example Kẹp căn bậc hai
Tìm hai số nguyên liên tiếp chứa $\sqrt{30}$.

**Lời giải.**
$5^2=25<30<36=6^2$, nên $5<\sqrt{30}<6$.

Vậy, $5,6$.
:::

:::example Đường chéo hình vuông
Một sân hình vuông giả định cạnh $8$ m. Tính chính xác và gần đúng đường chéo đến $0{,}1$ m.

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* Theo định lí Pythagoras, $d=\sqrt{8^2+8^2}=8\sqrt2\approx11{,}3$ m.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, $8\sqrt2\approx11{,}3$ m.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Coi mọi căn là vô tỉ.** Kết luận $\sqrt{64}$ vô tỉ chỉ vì có dấu căn. Số dưới căn có thể là số chính phương. Tính $\sqrt{64}=8$ trước khi phân loại.
- **Lẫn gần đúng với bằng chính xác.** Viết $\sqrt2=1{,}41$. $1{,}41$ chỉ là giá trị cắt bớt hoặc làm tròn. Dùng kí hiệu $\sqrt2\approx1{,}41$.
:::

**Kết nối.** Số thực lấp đầy trục số và cho phép mô tả chính xác các độ dài không hữu tỉ. Phân biệt giá trị chính xác với gần đúng rất quan trọng trong hình học, đo lường và tính toán khoa học. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- số vô tỉ | irrational number
- số thực | real number
- căn bậc hai | square root
- số chính phương | perfect square
- biểu diễn chính xác | exact representation
- giá trị gần đúng | approximation
- thập phân không tuần hoàn | non-recurring decimal
- trục số thực | real number line
- tập con | subset
:::

## Tóm tắt

- $\mathbb R$ gồm số hữu tỉ và số vô tỉ.
- Số vô tỉ có thập phân vô hạn không tuần hoàn.
- $\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R$.
- Căn của số chính phương là số hữu tỉ.
- Dùng $\approx$ cho giá trị gần đúng.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Số $0{,}121212\ldots$ có phải vô tỉ không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Không. Nhóm $12$ lặp tuần hoàn nên số đó hữu tỉ.

**Đáp số.** hữu tỉ.
:::

:::exercise
So sánh $\sqrt5$ với $2{,}3$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Vì $2{,}3^2=5{,}29>5$ và hai số dương, nên $2{,}3>\sqrt5$.

**Đáp số.** $\sqrt5<2{,}3$.
:::

:::exercise
Tính $|1-\sqrt3|$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Vì $\sqrt3>1$, biểu thức trong dấu giá trị tuyệt đối âm, nên $|1-\sqrt3|=\sqrt3-1$.

**Đáp số.** $\sqrt3-1$.
:::

:::exercise
Sắp xếp $-\sqrt2,-1{,}3,0,\dfrac32$ tăng dần.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\sqrt2\approx1{,}414$, nên $-\sqrt2<-1{,}3<0<\dfrac32$.

**Đáp số.** $-\sqrt2,-1{,}3,0,\dfrac32$.
:::

:::exercise
Ước lượng $\sqrt{70}$ đến một chữ số thập phân.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$8{,}3^2=68{,}89$ và $8{,}4^2=70{,}56$; $70$ gần $70{,}56$ hơn, nên $\sqrt{70}\approx8{,}4$.

**Đáp số.** $8{,}4$.
:::

:::exercise
Số $3+\sqrt2$ là hữu tỉ hay vô tỉ?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nếu tổng là hữu tỉ, trừ số hữu tỉ $3$ sẽ làm $\sqrt2$ hữu tỉ, mâu thuẫn. Vậy tổng vô tỉ.

**Đáp số.** vô tỉ.
:::

:::exercise
Tìm một số thực nằm giữa $\sqrt2$ và $\sqrt3$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Ta có $\sqrt2\approx1{,}414$ và $\sqrt3\approx1{,}732$, nên $1{,}5$ nằm giữa.

**Đáp số.** $1{,}5$.
:::

:::exercise Thử thách
Nhận định “tích hai số vô tỉ luôn vô tỉ” đúng không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Sai. Chọn $\sqrt2\cdot\sqrt2=2$, mà $2$ là hữu tỉ.

**Đáp số.** sai.
:::

## Kiểm tra mini

:::quiz
::mc
Số nào vô tỉ?
A. $\sqrt9$
B. $0{,}25$
C. $\sqrt7$
D. $\dfrac58$
::key C
$7$ không là số chính phương nên $\sqrt7$ vô tỉ.

::mc
$\sqrt{20}$ nằm giữa
A. $4$ và $5$
B. $3$ và $4$
C. $5$ và $6$
D. $9$ và $10$
::key A
$4^2<20<5^2$.

::mc
Kí hiệu tập số thực là
A. $\mathbb N$
B. $\mathbb R$
C. $\mathbb Z$
D. $\mathbb Q$
::key B
$\mathbb R$ kí hiệu tập số thực.

::mc
$\sqrt{81}$ bằng
A. $8$
B. $40{,}5$
C. $81$
D. $9$
::key D
$9^2=81$.

::tf
Xét các nhận định về số thực.
a) Mọi số thập phân vô hạn đều vô tỉ.
b) $\sqrt2$ không phải số thực.
c) Không có số hữu tỉ nào là số thực.
d) $\sqrt{16}$ vô tỉ.
::key S S S S
Cả bốn nhận định đều sai: số hữu tỉ thuộc số thực, số tuần hoàn vô hạn vẫn hữu tỉ, $\sqrt2$ là số thực và $\sqrt{16}=4$ là hữu tỉ.

::sa
Tính $\sqrt{121}$.
::key 11
$11^2=121$.

::sa
Số nguyên lớn nhất không vượt quá $\sqrt{15}$ là bao nhiêu?
::key 3
$3^2<15<4^2$, nên số cần tìm là $3$.

:::
