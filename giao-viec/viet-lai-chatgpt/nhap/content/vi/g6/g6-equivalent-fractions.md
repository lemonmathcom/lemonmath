---
title: Mở rộng phân số. Phân số bằng nhau
description: Hiểu phân số bằng nhau và tính chất cơ bản của phân số, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả phân số bằng nhau và tính chất cơ bản của phân số.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một bình nước được rót đầy $3$ trong $4$ phần bằng nhau; một bình cùng cỡ được chia thành $8$ phần và đầy $6$ phần. Hai cách mô tả $\dfrac34$ và $\dfrac68$ có chỉ cùng một lượng nước không? Ta cần một tiêu chuẩn chính xác để nhận biết những phân số khác cách viết nhưng bằng nhau.

## phân số bằng nhau và tính chất cơ bản của phân số

**Khám phá nhỏ.**
Chia mỗi phần tư thành $2$ phần bằng nhau. Ba phần tư biến thành sáu phần tám mà lượng được tô không đổi: $\dfrac34=\dfrac{3\cdot2}{4\cdot2}=\dfrac68$. Ta đã thay đổi đơn vị phần nhỏ nhưng không thay đổi phần của toàn thể.

:::definition Phân số và phân số bằng nhau
Với $a,b\in\mathbb Z$, $b\ne0$, biểu thức $\dfrac ab$ là một phân số. Hai phân số $\dfrac ab$ và $\dfrac cd$ bằng nhau khi $ad=bc$.
:::

:::definition Tính chất cơ bản của phân số
Nhân cả tử và mẫu với cùng một số nguyên khác $0$ không làm đổi giá trị: $\dfrac ab=\dfrac{am}{bm}$ ($m\ne0$). Chia cả tử và mẫu cho cùng một ước chung khác $0$ cũng không làm đổi giá trị.
:::

**Vì sao?**
Từ $\dfrac ab=\dfrac{am}{bm}$, ta có thể hiểu phép nhân cả tử và mẫu với $m$ là nhân phân số với $\dfrac mm=1$. Giá trị không đổi vì nhân với $1$. Quy tắc tích chéo cũng theo đó: nếu $\dfrac ab=\dfrac cd$ thì nhân hai vế với $bd\ne0$ được $ad=bc$; chiều ngược lại thực hiện được các bước đảo.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** phân số bằng nhau và tính chất cơ bản của phân số không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Mở rộng phân số
Viết $\dfrac{-5}{7}$ thành phân số có mẫu $35$.

**Lời giải.**
Vì $35=7\cdot5$, ta nhân cả tử và mẫu với $5$: $\dfrac{-5}{7}=\dfrac{-25}{35}$.

Vậy, $\dfrac{-25}{35}$.
:::

:::example Kiểm tra hai phân số
Hai phân số $\dfrac{14}{21}$ và $\dfrac{10}{15}$ có bằng nhau không?

**Lời giải.**
Ta có $14\cdot15=210$ và $21\cdot10=210$. Hai tích chéo bằng nhau nên hai phân số bằng nhau.

Vậy, $\dfrac{14}{21}=\dfrac{10}{15}$.
:::

:::example Rút gọn về tối giản
Rút gọn $\dfrac{-84}{126}$.

**Lời giải.**
$\operatorname{ƯCLN}(84,126)=42$, nên $\dfrac{-84}{126}=\dfrac{-84:42}{126:42}=\dfrac{-2}{3}$.

Vậy, $-\dfrac23$.
:::

:::example Hai cách chia bánh
Một chiếc bánh được dùng hết $9$ trong $12$ miếng bằng nhau. Hỏi lượng bánh đó có bằng $\dfrac34$ chiếc bánh không?

**Lời giải.**

*Hiểu đề.* Cùng một chiếc bánh được chia thành số phần khác nhau; ta cần so sánh hai phân số.

*Tìm cách giải.* Dùng tích chéo hoặc rút gọn $\dfrac9{12}$.

*Giải.* Ta so sánh $\dfrac9{12}$ với $\dfrac34$: $9\cdot4=36$ và $12\cdot3=36$, nên hai phân số bằng nhau.

*Nhìn lại.* $\dfrac9{12}=\dfrac{9:3}{12:3}=\dfrac34$ là cách kiểm tra thứ hai. Nếu dùng $8$ trong $12$ miếng thì kết luận thay đổi thế nào?

Vậy, lượng bánh bằng $\dfrac34$ chiếc bánh.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Chỉ nhân tử số.** Sai: $\dfrac35=\dfrac65$. Nhân riêng tử làm lượng tăng gấp đôi. Đúng: nhân cùng số ở cả tử và mẫu, chẳng hạn $\dfrac35=\dfrac6{10}$.
- **Cho phép mẫu bằng $0$.** $\dfrac50$ được coi là một phân số. Phép chia cho $0$ không xác định. Mẫu số luôn phải khác $0$.
:::

**Kết nối.** Phân số bằng nhau là nền tảng của quy đồng, so sánh và tính toán với phân số. Dạng tối giản còn giúp nhìn thấy cấu trúc chia hết của tử và mẫu; về sau, cùng ý tưởng nhân với $1$ sẽ xuất hiện khi biến đổi biểu thức đại số.

## Thuật ngữ

:::terms
- tử số | numerator
- mẫu số | denominator
- phân số bằng nhau | equivalent fractions
- mở rộng phân số | extending a fraction
- rút gọn phân số | simplifying a fraction
- phân số tối giản | fraction in its simplest form
- tích chéo | cross-product
- ước chung | common factor
:::

## Tóm tắt

- Mẫu số của phân số phải khác $0$.
- $\dfrac ab=\dfrac cd$ khi và chỉ khi $ad=bc$.
- Nhân hoặc chia cả tử và mẫu cho cùng một số khác $0$ giữ nguyên giá trị.
- Rút gọn đến khi tử và mẫu không còn ước chung lớn hơn $1$.
- Có thể đưa dấu trừ lên tử: $\dfrac{-a}{b}=-\dfrac ab$.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Mở rộng $\dfrac27$ thành phân số có mẫu $35$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nhân cả tử và mẫu với $5$: $\dfrac27=\dfrac{10}{35}$.

**Đáp số.** $\dfrac{10}{35}$.
:::

:::exercise
Điền số: $\dfrac{-3}{8}=\dfrac{\square}{40}$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$40=8\cdot5$, nên tử mới là $-3\cdot5=-15$.

**Đáp số.** $-15$.
:::

:::exercise
Rút gọn $\dfrac{45}{60}$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Chia cả tử và mẫu cho $15$: $\dfrac{45}{60}=\dfrac34$.

**Đáp số.** $\dfrac34$.
:::

:::exercise
Kiểm tra $\dfrac{-6}{14}$ và $\dfrac{-9}{21}$ có bằng nhau không.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$(-6)\cdot21=-126$ và $14\cdot(-9)=-126$, nên hai phân số bằng nhau.

**Đáp số.** bằng nhau.
:::

:::exercise
Tìm $x$ biết $\dfrac{x}{18}=\dfrac56$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$6x=18\cdot5=90$, nên $x=15$.

**Đáp số.** $x=15$.
:::

:::exercise
Một bình có $15$ trong $20$ vạch nước. Rút gọn phần bình đã có nước.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$\dfrac{15}{20}=\dfrac{15:5}{20:5}=\dfrac34$.

**Đáp số.** $\dfrac34$.
:::

:::exercise
Viết ba phân số bằng $-\dfrac25$ có mẫu dương.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nhân cả tử và mẫu lần lượt với $2,3,4$.

**Đáp số.** $-\dfrac4{10},-\dfrac6{15},-\dfrac8{20}$.
:::

:::exercise Thử thách
Tìm số nguyên dương nhỏ nhất $n$ để $\dfrac{18}{n}$ bằng $\dfrac35$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$18\cdot5=3n$, nên $3n=90$ và $n=30$.

**Đáp số.** $n=30$.
:::

## Kiểm tra mini

:::quiz
::mc
Phân số bằng $\dfrac23$ là
A. $\dfrac{10}{15}$
B. $\dfrac46$
C. $\dfrac35$
D. $\dfrac49$
::key A
$10\cdot3=15\cdot2=30$.

::mc
Dạng tối giản của $\dfrac{24}{36}$ là
A. $\dfrac{12}{18}$
B. $\dfrac23$
C. $\dfrac34$
D. $\dfrac46$
::key B
Chia tử và mẫu cho $12$ được $\dfrac23$.

::mc
Điều kiện đúng là
A. $b=0$
B. $m=0$
C. $b\ne0$
D. $a=0$
::key C
Trong $\dfrac ab$, mẫu $b$ phải khác $0$.

::mc
$\dfrac a7=\dfrac6{21}$ thì $a$ bằng
A. $6$
B. $3$
C. $1$
D. $2$
::key D
$21a=7\cdot6$, nên $a=2$.

::tf
Xét các nhận định về phân số.
a) $\dfrac70$ là một phân số.
b) $\dfrac{-4}{6}=-\dfrac23$.
c) $\dfrac35=\dfrac6{5}$.
d) $\dfrac48=\dfrac12$.
::key S Đ S Đ
d), b) đúng sau khi rút gọn. c) sai vì chỉ nhân tử. a) sai vì mẫu bằng $0$.

::sa
Tìm $x$ biết $\dfrac{x}{12}=\dfrac34$.
::key 9
$4x=36$, nên $x=9$.

::sa
Ước chung lớn nhất của tử và mẫu trong $\dfrac{42}{63}$ là bao nhiêu?
::key 21
$\operatorname{ƯCLN}(42,63)=21$.

:::
