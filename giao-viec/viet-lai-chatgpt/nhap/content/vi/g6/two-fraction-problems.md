---
title: Hai bài toán về phân số
description: Hiểu hai bài toán cơ bản về phân số, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả hai bài toán cơ bản về phân số.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một thư viện giả định có $240$ cuốn truyện, trong đó $\dfrac38$ là truyện khoa học. Ta tìm số truyện khoa học bằng cách lấy một phần của $240$. Ngược lại, nếu biết $90$ cuốn chiếm $\dfrac38$ tổng số, ta phải tìm toàn bộ. Hai câu hỏi gần nhau nhưng dùng hai phép tính ngược nhau.

## hai bài toán cơ bản về phân số

**Khám phá nhỏ.**
$\dfrac38$ của $240$ là $240\cdot\dfrac38=90$. Đọc ngược, nếu $\dfrac38$ của một số bằng $90$, số đó là $90:\dfrac38=240$. Phép nhân đi từ toàn thể đến một phần; phép chia đi từ phần đã biết về toàn thể.

:::definition Tìm giá trị phân số của một số
Muốn tìm $\dfrac mn$ của số $a$, ta tính $a\cdot\dfrac mn$ ($n\ne0$).
:::

:::definition Tìm một số khi biết giá trị phân số
Nếu $\dfrac mn$ của số $x$ bằng $b$ và $m,n\ne0$, thì $x=b:\dfrac mn=b\cdot\dfrac nm$.
:::

**Vì sao?**
Gọi toàn thể là $x$. Cụm từ “$\dfrac mn$ của $x$” được viết $x\cdot\dfrac mn$. Biết toàn thể thì thay $x$ bằng số đã cho và nhân. Biết phần $b$ thì giải $x\cdot\dfrac mn=b$ bằng phép chia. Xác định đang tìm phần hay tìm toàn thể quan trọng hơn việc học thuộc tên dạng.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** hai bài toán cơ bản về phân số không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Tìm một phần
Tính $\dfrac7{12}$ của $96$.

**Lời giải.**
$96\cdot\dfrac7{12}=8\cdot7=56$.

Vậy, $56$.
:::

:::example Tìm toàn thể
$\dfrac58$ của một số bằng $45$. Tìm số đó.

**Lời giải.**
Số cần tìm là $45:\dfrac58=45\cdot\dfrac85=72$.

Vậy, $72$.
:::

:::example Tìm phần còn lại
Một thùng có $150$ kg gạo, đã bán $\dfrac25$. Tính khối lượng còn lại.

**Lời giải.**
Phần còn lại là $1-\dfrac25=\dfrac35$. Khối lượng còn lại là $150\cdot\dfrac35=90$ kg.

Vậy, $90$ kg.
:::

:::example Số truyện trong thư viện
$90$ cuốn truyện khoa học chiếm $\dfrac38$ số truyện của thư viện. Hỏi thư viện có bao nhiêu cuốn truyện?

**Lời giải.**

*Hiểu đề.* Biết phần $90$ và phân số $\dfrac38$; cần tìm toàn thể.

*Tìm cách giải.* Chia giá trị phần cho phân số tương ứng.

*Giải.* Gọi tổng số truyện là $x$. Ta có $\dfrac38x=90$, nên $x=90:\dfrac38=240$.

*Nhìn lại.* $\dfrac38$ của $240$ là $90$, nên kết quả đúng. Nếu phần tăng mà tỉ lệ giữ nguyên, toàn thể cũng phải tăng.

Vậy, thư viện có $240$ cuốn truyện.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Dùng phép chia khi tìm một phần.** Sai: tìm $\dfrac34$ của $20$ bằng $20:\dfrac34$. Một phân số nhỏ hơn $1$ của toàn thể phải nhỏ hơn toàn thể. $20\cdot\dfrac34=15$.
- **Nhân khi đang tìm toàn thể.** Sai: $18$ là $\dfrac23$ của một số nên lấy $18\cdot\dfrac23$. Toàn thể phải lớn hơn phần $18$. $18:\dfrac23=27$.
:::

**Kết nối.** Hai bài toán là hai chiều của cùng quan hệ $\text{phần}=\text{toàn thể}\times\text{phân số}$. Trước khi tính, hãy vẽ sơ đồ một thanh biểu diễn toàn thể, tô phần đã biết và ghi rõ câu hỏi đặt ở phần hay toàn thể. Khi phân số nhỏ hơn $1$, phần phải nhỏ hơn toàn thể; đây là phép ước lượng quan trọng. Sau khi tìm được đáp số, luôn thực hiện phép tính ngược: lấy toàn thể nhân với phân số phải thu lại phần đã biết. Với bài nhiều giai đoạn, mỗi phân số có thể tính theo toàn thể ban đầu hoặc theo phần còn lại; cần đọc chính xác cụm từ “của số ban đầu” hay “của phần còn lại”. Sơ đồ phần–toàn thể còn được dùng trong tỉ số phần trăm, giảm giá, thống kê và năng suất.

## Thuật ngữ

:::terms
- giá trị phân số của một số | fraction of a quantity
- toàn thể | whole
- phần đã biết | known part
- phần còn lại | remainder
- sơ đồ phần–toàn thể | part–whole model
- phân số tương ứng | corresponding fraction
- đại lượng chưa biết | unknown quantity
- kiểm tra ngược | inverse check
:::

## Tóm tắt

- Tìm $\dfrac mn$ của $a$: tính $a\cdot\dfrac mn$.
- Biết $\dfrac mn$ của một số bằng $b$: tính $b:\dfrac mn$.
- Tìm phần còn lại: xác định phân số còn lại trước.
- Phân biệt phân số của toàn thể và phân số của phần còn lại.
- Kiểm tra bằng phép tính ngược và ghi đơn vị.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Tính $\dfrac35$ của $80$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$80\cdot\dfrac35=48$.

**Đáp số.** $48$.
:::

:::exercise
Tính $\dfrac79$ của $63$ kg.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$63\cdot\dfrac79=49$ kg.

**Đáp số.** $49$ kg.
:::

:::exercise
$\dfrac45$ của một số bằng $56$. Tìm số đó.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$56:\dfrac45=70$.

**Đáp số.** $70$.
:::

:::exercise
$18$ km là $\dfrac37$ một quãng đường. Tính quãng đường.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$18:\dfrac37=42$ km.

**Đáp số.** $42$ km.
:::

:::exercise
Lớp có $40$ bạn, $\dfrac38$ tham gia câu lạc bộ. Có bao nhiêu bạn tham gia?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$40\cdot\dfrac38=15$.

**Đáp số.** $15$ bạn.
:::

:::exercise
Bồn có $72$ lít, bằng $\dfrac35$ dung tích. Tính dung tích bồn.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$72:\dfrac35=120$ lít.

**Đáp số.** $120$ lít.
:::

:::exercise
Cửa hàng bán $\dfrac27$ số táo buổi sáng và $\dfrac37$ buổi chiều, còn $24$ kg. Ban đầu có bao nhiêu?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Còn $1-\dfrac27-\dfrac37=\dfrac27$. Ban đầu có $24:\dfrac27=84$ kg.

**Đáp số.** $84$ kg.
:::

:::exercise Thử thách
Ngày đầu đọc $\dfrac14$ cuốn sách, ngày hai đọc $\dfrac25$ phần còn lại; còn $90$ trang. Tính số trang ban đầu.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Sau hai ngày còn $\dfrac34\cdot\dfrac35=\dfrac9{20}$ cuốn. Số trang là $90:\dfrac9{20}=200$.

**Đáp số.** $200$ trang.
:::

## Kiểm tra mini

:::quiz
::mc
$\dfrac35$ của $50$ là
A. $30$
B. $20$
C. $\dfrac3{250}$
D. $\dfrac{50}{3}$
::key A
$50\cdot\dfrac35=30$.

::mc
$24$ là $\dfrac38$ của số nào?
A. $9$
B. $64$
C. $29$
D. $72$
::key B
$24:\dfrac38=64$.

::mc
Phần còn lại sau khi dùng $\dfrac7{10}$ là
A. $\dfrac7{10}$
B. $\dfrac37$
C. $\dfrac3{10}$
D. $\dfrac{17}{10}$
::key C
$1-\dfrac7{10}=\dfrac3{10}$.

::mc
$15$ là $\dfrac56$ của một số. Số đó là
A. $12$
B. $15$
C. $16$
D. $18$
::key D
$15:\dfrac56=18$.

::tf
Xét hai bài toán phân số.
a) Nếu $12$ là $\dfrac25$ của một số thì số đó bằng $30$.
b) $\dfrac25$ của $30$ bằng $12$.
c) Tìm toàn thể từ một phần dùng phép chia cho phân số.
d) Tìm một phần của toàn thể luôn dùng phép chia.
::key Đ Đ Đ S
b), a), c) đúng. d) sai vì tìm một phần dùng phép nhân.

::sa
Tính $\dfrac38$ của $64$.
::key 24
$64\cdot\dfrac38=24$.

::sa
$21$ là $\dfrac7{10}$ của một số. Tìm số đó.
::key 30
$21:\dfrac7{10}=30$.

:::
