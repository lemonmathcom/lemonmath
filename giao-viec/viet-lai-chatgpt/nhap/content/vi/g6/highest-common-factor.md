---
title: Ước chung. Ước chung lớn nhất
description: Hiểu ước chung và ước chung lớn nhất, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả ước chung và ước chung lớn nhất.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Hai cuộn dây dài $84$ m và $126$ m cần được cắt thành các đoạn bằng nhau dài nhất, không để thừa. Mỗi đoạn dài bao nhiêu mét? Bài toán tìm kích thước chung lớn nhất dẫn đến ước chung lớn nhất.

## ước chung và ước chung lớn nhất

**Khám phá nhỏ.**
Các ước của $18$ là $1,2,3,6,9,18$; các ước của $24$ là $1,2,3,4,6,8,12,24$. Phần chung là $1,2,3,6$ và số lớn nhất là $6$.

:::definition Ước chung và ước chung lớn nhất
Ước chung của hai hay nhiều số là số chia hết mỗi số đó. Ước chung lớn nhất là số lớn nhất trong tập các ước chung, kí hiệu $\operatorname{ƯCLN}(a,b)$.
:::

:::definition Cách dùng thừa số nguyên tố
Phân tích các số ra thừa số nguyên tố, chọn các thừa số chung với số mũ nhỏ nhất rồi nhân lại.
:::

**Vì sao?**
Một ước chung chỉ được chứa những thừa số nguyên tố có mặt trong mọi số. Số mũ của nó không thể vượt quá số mũ nhỏ nhất tương ứng; chọn đúng các số mũ nhỏ nhất tạo ra ước chung lớn nhất.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** ước chung và ước chung lớn nhất không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Tìm ƯCLN bằng cách liệt kê
Tìm ƯCLN của $18$ và $30$.

**Lời giải.**
Ước chung của $18$ và $30$ là $1,2,3,6$; số lớn nhất là $6$.

Vậy, $6$.
:::

:::example Dùng thừa số nguyên tố
Tìm ƯCLN của $84$ và $126$.

**Lời giải.**
Ta có $84=2^2\cdot3\cdot7$ và $126=2\cdot3^2\cdot7$. Chọn thừa số chung với số mũ nhỏ nhất, được $ƯCLN=42$.

Vậy, $42$.
:::

:::example Ba số
Tìm ƯCLN của $48,72,120$.

**Lời giải.**
$48=2^4\cdot3$, $72=2^3\cdot3^2$, $120=2^3\cdot3\cdot5$. Thừa số chung là $2^3\cdot3=24$.

Vậy, $24$.
:::

:::example Cắt dây thành đoạn
Hai cuộn dây dài $84$ m và $126$ m được cắt thành các đoạn bằng nhau dài nhất. Tính độ dài mỗi đoạn và tổng số đoạn.

**Lời giải.**

*Hiểu đề.* Độ dài mỗi đoạn phải là ước chung của $84$ và $126$, đồng thời lớn nhất.

*Tìm cách giải.* Ta tính ƯCLN bằng phân tích thừa số nguyên tố.

*Giải.* $84=2^2\cdot3\cdot7$, $126=2\cdot3^2\cdot7$, nên $\operatorname{ƯCLN}(84,126)=2\cdot3\cdot7=42$. Số đoạn là $84:42+126:42=2+3=5$.

*Nhìn lại.* $42\cdot2=84$, $42\cdot3=126$, nên không thừa dây. Nếu yêu cầu nhiều đoạn hơn, độ dài có còn là $42$ m không?

Vậy, mỗi đoạn dài $42$ m và có $5$ đoạn.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Chọn mọi thừa số xuất hiện.** Cách đó có thể tạo ra một số không còn chia hết cả hai số. ƯCLN chỉ dùng thừa số chung và số mũ nhỏ nhất. Hãy kiểm tra kết quả bằng phép chia cho từng số.
:::

**Kết nối.** Kiến thức về ước chung và ước chung lớn nhất dựa trên những điều bạn đã học và sẽ được dùng trong các chủ đề tiếp theo. Hãy chú ý mối liên hệ giữa dữ kiện, quy tắc và kết luận.

## Thuật ngữ

:::terms
- ước | factor
- ước chung | common factor
- ước chung lớn nhất | highest common factor
- phân tích ra thừa số nguyên tố | prime factorisation
- số mũ nhỏ nhất | least exponent
- chia hết | divisible
:::

## Tóm tắt

- Ước chung chia hết từng số đã cho.
- ƯCLN là ước chung lớn nhất.
- Dùng số mũ nhỏ nhất của các thừa số nguyên tố chung.
- Bài toán chia thành phần bằng nhau lớn nhất thường dùng ƯCLN.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Tính $\operatorname{ƯCLN}(24,36)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Ta có $24=2^3\cdot3$, $36=2^2\cdot3^2$, nên ƯCLN là $2^2\cdot3=12$.

**Đáp số.** $12$.
:::

:::exercise
Tính $\operatorname{ƯCLN}(45,75)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Ta có $45=3^2\cdot5$, $75=3\cdot5^2$, nên ƯCLN là $3\cdot5=15$.

**Đáp số.** $15$.
:::

:::exercise
Tính $\operatorname{ƯCLN}(56,98)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Ta có $56=2^3\cdot7$, $98=2\cdot7^2$, nên ƯCLN là $2\cdot7=14$.

**Đáp số.** $14$.
:::

:::exercise
Tính $\operatorname{ƯCLN}(36,60,84)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Ta có $36=2^2\cdot3^2$, $60=2^2\cdot3\cdot5$, $84=2^2\cdot3\cdot7$, nên ƯCLN là $12$.

**Đáp số.** $12$.
:::

:::exercise
Có $48$ bút đỏ và $60$ bút xanh. Chia thành nhiều nhất các phần quà giống nhau. Mỗi phần có bao nhiêu bút mỗi màu?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Số phần là $\operatorname{ƯCLN}(48,60)=12$. Mỗi phần có $48:12=4$ bút đỏ và $60:12=5$ bút xanh.

**Đáp số.** $4$ bút đỏ, $5$ bút xanh.
:::

:::exercise
Một sàn hình chữ nhật $360$ cm × $240$ cm được lát bằng các viên gạch vuông lớn nhất không cắt gạch. Tính cạnh viên gạch và số viên.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\operatorname{ƯCLN}(360,240)=120$, nên cạnh gạch là $120$ cm. Số viên là $(360:120)(240:120)=3\cdot2=6$.

**Đáp số.** $120$ cm; $6$ viên.
:::

:::exercise
Tìm số tự nhiên $d$ lớn nhất sao cho $125$ và $200$ khi chia cho $d$ đều dư $5$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$d$ phải chia hết $125-5=120$ và $200-5=195$. Do đó $d=\operatorname{ƯCLN}(120,195)=15$.

**Đáp số.** $15$.
:::

:::exercise Thử thách
Biết $\operatorname{ƯCLN}(a,b)=12$, $a=60$ và $b<100$. Tìm các giá trị của $b$ là bội của $18$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Các bội của $18$ nhỏ hơn $100$ là $18,36,54,72,90$. Tính ƯCLN với $60$, chỉ có $\operatorname{ƯCLN}(60,36)=12$ và $\operatorname{ƯCLN}(60,72)=12$.

**Đáp số.** $b=36$ hoặc $b=72$.
:::

## Kiểm tra mini

:::quiz
::mc
ƯCLN của $12$ và $18$ là
A. $6$
B. $3$
C. $12$
D. $36$
::key A
Các ước chung là $1,2,3,6$.

::mc
Khi tìm ƯCLN bằng thừa số nguyên tố, ta chọn
A. mọi thừa số với số mũ lớn nhất.
B. thừa số chung với số mũ nhỏ nhất.
C. thừa số chung với số mũ lớn nhất.
D. chỉ thừa số $2$.
::key B
Đó là đúng quy tắc chọn phần chung lớn nhất.

::mc
Muốn chia đồ vật thành nhiều nhất các nhóm giống nhau, ta thường dùng
A. phép cộng.
B. BCNN.
C. ƯCLN.
D. phép trừ.
::key C
Số nhóm phải chia hết mọi số lượng và lớn nhất.

::mc
ƯCLN của hai số nguyên tố khác nhau bằng
A. tổng của chúng.
B. số lớn hơn.
C. $0$.
D. $1$.
::key D
Hai số nguyên tố khác nhau không có ước chung nào ngoài $1$.

::tf
Xét các nhận định về ƯCLN.
a) Nếu $a$ chia hết $b$ thì $\operatorname{ƯCLN}(a,b)=b$.
b) $\operatorname{ƯCLN}(8,12)=4$.
c) Hai số nguyên tố khác nhau có ƯCLN bằng $1$.
d) ƯCLN luôn lớn hơn mỗi số đã cho.
::key Đ Đ Đ S
b) Đúng. d) Sai vì ƯCLN không vượt quá số nhỏ hơn. a), c) Đúng theo định nghĩa.

::sa
$\operatorname{ƯCLN}(54,90)$ bằng bao nhiêu?
::key 18
$54=2\cdot3^3$, $90=2\cdot3^2\cdot5$, nên ƯCLN là $18$.

::sa
Có thể chia nhiều nhất bao nhiêu nhóm giống nhau từ $32$ bút và $48$ vở?
::key 16
$\operatorname{ƯCLN}(32,48)=16$.

:::
