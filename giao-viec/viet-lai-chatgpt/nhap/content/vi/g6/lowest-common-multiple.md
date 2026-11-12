---
title: Bội chung. Bội chung nhỏ nhất
description: Hiểu bội chung và bội chung nhỏ nhất, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả bội chung và bội chung nhỏ nhất.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một đèn xanh nháy mỗi $18$ giây, một đèn đỏ nháy mỗi $24$ giây. Hai đèn vừa nháy cùng lúc. Sau ít nhất bao lâu chúng lại cùng nháy? Ta cần tìm bội chung nhỏ nhất.

## bội chung và bội chung nhỏ nhất

**Khám phá nhỏ.**
Các bội dương đầu tiên của $6$ là $6,12,18,24,30,36,\ldots$; của $8$ là $8,16,24,32,40,48,\ldots$. Bội chung dương nhỏ nhất là $24$.

:::definition Bội chung và bội chung nhỏ nhất
Bội chung của hai hay nhiều số là số chia hết cho mỗi số đó. Bội chung nhỏ nhất khác $0$ là bội chung nhỏ nhất, kí hiệu $\operatorname{BCNN}(a,b)$.
:::

:::definition Cách dùng thừa số nguyên tố
Phân tích các số ra thừa số nguyên tố, chọn mọi thừa số xuất hiện với số mũ lớn nhất rồi nhân lại.
:::

**Vì sao?**
Một bội chung phải chứa đủ các thừa số nguyên tố của từng số. Vì thế số mũ của mỗi thừa số phải ít nhất bằng số mũ lớn nhất tương ứng; chọn đúng mức đó cho bội chung nhỏ nhất.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** bội chung và bội chung nhỏ nhất không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Tìm BCNN bằng cách liệt kê
Tìm BCNN của $4$ và $10$.

**Lời giải.**
Bội dương của $4$ là $4,8,12,16,20,\ldots$; bội dương của $10$ là $10,20,30,\ldots$; số chung đầu tiên là $20$.

Vậy, $20$.
:::

:::example Dùng thừa số nguyên tố
Tìm BCNN của $18$ và $24$.

**Lời giải.**
Ta có $18=2\cdot3^2$ và $24=2^3\cdot3$. Chọn mọi thừa số với số mũ lớn nhất, được $BCNN=72$.

Vậy, $72$.
:::

:::example Ba số
Tìm BCNN của $6,15,20$.

**Lời giải.**
$6=2\cdot3$, $15=3\cdot5$, $20=2^2\cdot5$. Lấy $2^2\cdot3\cdot5=60$.

Vậy, $60$.
:::

:::example Hai đèn nháy
Một đèn nháy mỗi $18$ giây, đèn kia mỗi $24$ giây. Nếu cùng nháy lúc $8$ giờ, khi nào chúng lại cùng nháy lần đầu?

**Lời giải.**

*Hiểu đề.* Khoảng chờ phải là bội chung dương nhỏ nhất của $18$ và $24$.

*Tìm cách giải.* Ta tính BCNN bằng phân tích thừa số nguyên tố.

*Giải.* $18=2\cdot3^2$, $24=2^3\cdot3$, nên $\operatorname{BCNN}(18,24)=2^3\cdot3^2=72$ giây. $72$ giây bằng $1$ phút $12$ giây.

*Nhìn lại.* $72$ chia hết cho cả $18$ và $24$; các bội chung dương đều là bội của $72$. Nếu một chu kì thay đổi, thời điểm gặp lại thay đổi thế nào?

Vậy, hai đèn lại cùng nháy lúc $8$ giờ $1$ phút $12$ giây.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Chỉ chọn thừa số chung.** Cách đó cho ước chung, không bảo đảm là bội của từng số. BCNN dùng mọi thừa số với số mũ lớn nhất. Hãy kiểm tra kết quả bằng phép chia cho từng số.
:::

**Kết nối.** Kiến thức về bội chung và bội chung nhỏ nhất dựa trên những điều bạn đã học và sẽ được dùng trong các chủ đề tiếp theo. Hãy chú ý mối liên hệ giữa dữ kiện, quy tắc và kết luận.

## Thuật ngữ

:::terms
- bội | multiple
- bội chung | common multiple
- bội chung nhỏ nhất | lowest common multiple
- phân tích ra thừa số nguyên tố | prime factorisation
- số mũ lớn nhất | greatest exponent
- chu kì | period
:::

## Tóm tắt

- Bội chung chia hết cho từng số đã cho.
- BCNN là bội chung dương nhỏ nhất.
- Dùng số mũ lớn nhất của mọi thừa số nguyên tố xuất hiện.
- Bài toán các chu kì gặp lại thường dùng BCNN.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Tính $\operatorname{BCNN}(8,12)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Ta có $8=2^3$, $12=2^2\cdot3$, nên BCNN là $2^3\cdot3=24$.

**Đáp số.** $24$.
:::

:::exercise
Tính $\operatorname{BCNN}(14,20)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Ta có $14=2\cdot7$, $20=2^2\cdot5$, nên BCNN là $2^2\cdot5\cdot7=140$.

**Đáp số.** $140$.
:::

:::exercise
Tính $\operatorname{BCNN}(18,30)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Ta có $18=2\cdot3^2$, $30=2\cdot3\cdot5$, nên BCNN là $2\cdot3^2\cdot5=90$.

**Đáp số.** $90$.
:::

:::exercise
Tính $\operatorname{BCNN}(6,8,15)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Ta có $6=2\cdot3$, $8=2^3$, $15=3\cdot5$, nên BCNN là $2^3\cdot3\cdot5=120$.

**Đáp số.** $120$.
:::

:::exercise
Hai tuyến xe buýt rời bến cùng lúc. Tuyến A cứ $12$ phút có một xe, tuyến B cứ $18$ phút có một xe. Sau bao lâu hai tuyến lại có xe rời bến cùng lúc?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\operatorname{BCNN}(12,18)=36$, nên hai tuyến gặp lại sau $36$ phút.

**Đáp số.** $36$ phút.
:::

:::exercise
Ba máy tưới hoạt động theo chu kì $20$, $30$, $45$ phút. Chúng cùng khởi động lúc $6$ giờ. Khi nào chúng lại cùng khởi động?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\operatorname{BCNN}(20,30,45)=180$ phút $=3$ giờ. Vậy thời điểm tiếp theo là $9$ giờ.

**Đáp số.** $9$ giờ.
:::

:::exercise
Tìm số tự nhiên nhỏ nhất khác $0$ chia hết cho $12$, $15$ và $18$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$12=2^2\cdot3$, $15=3\cdot5$, $18=2\cdot3^2$, nên BCNN là $2^2\cdot3^2\cdot5=180$.

**Đáp số.** $180$.
:::

:::exercise Thử thách
Tìm số tự nhiên nhỏ nhất khi chia cho $6$, $8$, $10$ đều dư $3$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nếu số đó là $n$ thì $n-3$ chia hết cho $6,8,10$. BCNN là $120$, nên giá trị dương nhỏ nhất lớn hơn các số chia là $n=120+3=123$.

**Đáp số.** $123$.
:::

## Kiểm tra mini

:::quiz
::mc
BCNN của $12$ và $18$ là
A. $36$
B. $72$
C. $6$
D. $18$
::key A
$12=2^2\cdot3$, $18=2\cdot3^2$, nên BCNN là $2^2\cdot3^2=36$.

::mc
Khi tìm BCNN bằng thừa số nguyên tố, ta chọn
A. chỉ thừa số chung với số mũ nhỏ nhất.
B. mọi thừa số với số mũ lớn nhất.
C. thừa số chung với số mũ lớn nhất.
D. chỉ thừa số $2$.
::key B
Bội chung phải chứa đủ mọi thừa số với số mũ lớn nhất.

::mc
Muốn tìm thời điểm các chu kì gặp lại sớm nhất, ta thường dùng
A. phép cộng.
B. ƯCLN.
C. BCNN.
D. phép trừ.
::key C
Các chu kì gặp lại tại bội chung dương nhỏ nhất.

::mc
BCNN của hai số nguyên tố khác nhau bằng
A. tổng của chúng.
B. số lớn hơn.
C. $0$.
D. tích của chúng.
::key D
Hai số nguyên tố khác nhau không có thừa số chung nên BCNN là tích.

::tf
Xét các nhận định về BCNN.
a) BCNN của hai số nguyên tố khác nhau bằng tích của chúng.
b) Nếu $a$ chia hết $b$ thì $\operatorname{BCNN}(a,b)=b$.
c) $\operatorname{BCNN}(8,12)=24$.
d) BCNN dương luôn không nhỏ hơn mỗi số đã cho.
::key Đ S Đ Đ
c), d), a) Đúng. b) Sai: nếu $a$ chia hết $b$ thì BCNN bằng $a$.

::sa
$\operatorname{BCNN}(9,12)$ bằng bao nhiêu?
::key 36
$9=3^2$, $12=2^2\cdot3$, nên BCNN là $36$.

::sa
Hai chu kì $15$ và $20$ phút gặp lại sau bao nhiêu phút?
::key 60
$\operatorname{BCNN}(15,20)=60$.

:::
