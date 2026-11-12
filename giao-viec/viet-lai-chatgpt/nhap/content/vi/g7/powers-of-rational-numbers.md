---
title: Luỹ thừa của một số hữu tỉ
description: Hiểu luỹ thừa số hữu tỉ và các quy tắc số mũ, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả luỹ thừa số hữu tỉ và các quy tắc số mũ.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một hình vuông có cạnh $\dfrac32$ m thì diện tích là $\left(\dfrac32\right)^2$ m². Kí hiệu luỹ thừa rút gọn phép nhân lặp, nhưng dấu âm và dấu ngoặc có thể làm kết quả thay đổi thế nào?

## luỹ thừa số hữu tỉ và các quy tắc số mũ

**Khám phá nhỏ.**
$\left(-\dfrac23\right)^3=\left(-\dfrac23\right)\left(-\dfrac23\right)\left(-\dfrac23\right)=-\dfrac8{27}$. Ba thừa số âm cho kết quả âm; nếu số mũ chẵn thì các dấu âm ghép thành cặp và kết quả dương.

:::definition Luỹ thừa
Với $n$ là số tự nhiên dương, $a^n$ là tích của $n$ thừa số bằng $a$. Số $a$ là cơ số, $n$ là số mũ. Với $a\ne0$, quy ước $a^0=1$.
:::

:::definition Quy tắc số mũ
Với cùng cơ số: $a^m\cdot a^n=a^{m+n}$ và $a^m:a^n=a^{m-n}$ khi $a\ne0,m\ge n$. Ngoài ra $(a^m)^n=a^{mn}$ và $(ab)^n=a^nb^n$.
:::

**Vì sao?**
Các quy tắc số mũ xuất phát từ việc đếm thừa số. Khi nhân hai tích cùng cơ số, tổng số thừa số là $m+n$; khi chia, các thừa số chung bị triệt tiêu. Dấu ngoặc xác định dấu âm có thuộc cơ số hay không.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** luỹ thừa số hữu tỉ và các quy tắc số mũ không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Tính luỹ thừa phân số
Tính $\left(\dfrac34\right)^3$.

**Lời giải.**
$\left(\dfrac34\right)^3=\dfrac{3^3}{4^3}=\dfrac{27}{64}$.

Vậy, $\dfrac{27}{64}$.
:::

:::example Cơ số âm, số mũ chẵn
Tính $\left(-\dfrac25\right)^4$.

**Lời giải.**
Số mũ chẵn cho kết quả dương: $\left(-\dfrac25\right)^4=\dfrac{16}{625}$.

Vậy, $\dfrac{16}{625}$.
:::

:::example Nhân cùng cơ số
Rút gọn $\left(\dfrac57\right)^3\cdot\left(\dfrac57\right)^4$.

**Lời giải.**
Cộng số mũ: $\left(\dfrac57\right)^{3+4}=\left(\dfrac57\right)^7$.

Vậy, $\left(\dfrac57\right)^7$.
:::

:::example Diện tích sau thu nhỏ
Một hình vuông cạnh $6$ m được thu theo tỉ lệ $\dfrac12$. Diện tích mới bằng bao nhiêu phần diện tích cũ?

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* Diện tích thay đổi theo bình phương tỉ lệ: $\left(\dfrac12\right)^2=\dfrac14$.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, $\dfrac14$.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Nhân số mũ khi nhân luỹ thừa.** Viết $a^2\cdot a^3=a^6$. Hai tích ghép lại có $2+3$ thừa số, không phải $2\cdot3$. Đúng là $a^2\cdot a^3=a^5$.
- **Bỏ dấu ngoặc cơ số âm.** Coi $(-3)^2$ bằng $-3^2$. Ở biểu thức thứ hai, số mũ chỉ tác động lên $3$. $(-3)^2=9$ nhưng $-3^2=-9$.
:::

**Kết nối.** Luỹ thừa mô tả tăng trưởng lặp, tỉ lệ diện tích và thể tích, đồng thời rút gọn các tích dài. Quy tắc số mũ sau này hỗ trợ kí hiệu khoa học, đa thức và hàm mũ. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- luỹ thừa | power
- cơ số | base
- số mũ | exponent
- bình phương | square
- lập phương | cube
- số mũ chẵn | even exponent
- số mũ lẻ | odd exponent
- luỹ thừa của luỹ thừa | power of a power
- quy tắc số mũ | exponent law
:::

## Tóm tắt

- $a^n$ là tích của $n$ thừa số $a$.
- Cơ số âm cho kết quả dương khi số mũ chẵn.
- $a^m\cdot a^n=a^{m+n}$.
- $(a^m)^n=a^{mn}$.
- Dấu ngoặc quyết định dấu âm có thuộc cơ số hay không.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Rút gọn $\left(-\dfrac23\right)^8:\left(-\dfrac23\right)^5$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Trừ số mũ: $\left(-\dfrac23\right)^{8-5}=\left(-\dfrac23\right)^3=-\dfrac8{27}$.

**Đáp số.** $-\dfrac8{27}$.
:::

:::exercise
Rút gọn $\left[\left(\dfrac35\right)^2\right]^4$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nhân số mũ: $\left(\dfrac35\right)^{2\cdot4}=\left(\dfrac35\right)^8$.

**Đáp số.** $\left(\dfrac35\right)^8$.
:::

:::exercise
Tính $\left(-\dfrac{19}{4}\right)^0$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Cơ số khác $0$, nên theo quy ước kết quả bằng $1$.

**Đáp số.** $1$.
:::

:::exercise
So sánh $(-2)^4$ và $-2^4$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$(-2)^4=16$, còn $-2^4=-(2^4)=-16$.

**Đáp số.** $16>-16$.
:::

:::exercise
Rút gọn $\left(-\dfrac23\cdot\dfrac94\right)^2$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Trong ngoặc bằng $-\dfrac32$, nên bình phương được $\dfrac94$.

**Đáp số.** $\dfrac94$.
:::

:::exercise
Tìm $n$ biết $2^n\cdot2^3=2^9$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$n+3=9$, nên $n=6$.

**Đáp số.** $6$.
:::

:::exercise
Số nào lớn hơn: $\left(\dfrac23\right)^2$ hay $\left(\dfrac23\right)^3$?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Vì $0<\dfrac23<1$, nhân thêm $\dfrac23$ làm số nhỏ đi; do đó $\left(\dfrac23\right)^2>\left(\dfrac23\right)^3$.

**Đáp số.** $\left(\dfrac23\right)^2$.
:::

:::exercise Thử thách
Rút gọn $\dfrac{3^7\cdot5^2}{3^4\cdot5}$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Trừ số mũ từng cơ số: $3^{7-4}\cdot5^{2-1}=3^3\cdot5=135$.

**Đáp số.** $135$.
:::

## Kiểm tra mini

:::quiz
::mc
$\left(-\dfrac12\right)^3$ bằng
A. $\dfrac18$
B. $-\dfrac18$
C. $-\dfrac16$
D. $\dfrac16$
::key B
Số mũ lẻ giữ dấu âm và $2^3=8$.

::mc
$x^4\cdot x^3$ bằng
A. $x^7$
B. $x^{12}$
C. $2x^7$
D. $x$
::key A
Cùng cơ số thì cộng số mũ.

::mc
$(a^2)^5$ bằng
A. $a^7$
B. $a^{25}$
C. $a^{10}$
D. $2a^5$
::key C
Luỹ thừa của luỹ thừa dùng tích số mũ $2\cdot5=10$.

::mc
$7^0$ bằng
A. $0$
B. $7$
C. $70$
D. $1$
::key D
Mọi cơ số khác $0$ mũ $0$ bằng $1$.

::tf
Xét các quy tắc luỹ thừa.
a) $a^2\cdot a^3=a^5$.
b) $a^0=0$ với mọi $a$.
c) $(a^m)^n=a^{mn}$.
d) $(-2)^4<0$.
::key Đ S Đ S
a), c) đúng. Số mũ chẵn cho kết quả dương và cơ số khác $0$ mũ $0$ bằng $1$.

::sa
Tính $\left(\dfrac23\right)^2$.
::key 4/9
$\left(\dfrac23\right)^2=\dfrac49$.

::sa
Rút gọn $5^7:5^4$.
::key 125
$5^{7-4}=5^3=125$.

:::
