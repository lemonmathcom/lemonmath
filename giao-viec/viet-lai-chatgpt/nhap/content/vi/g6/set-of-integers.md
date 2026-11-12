---
title: Tập hợp các số nguyên
description: Hiểu tập hợp các số nguyên, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả tập hợp các số nguyên.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một buổi sáng giả định, nhiệt độ ở Sa Pa là $3^\circ$C. Đến đêm, nhiệt độ giảm $7^\circ$C, tức thấp hơn mốc $0^\circ$C. Số tự nhiên không diễn tả được nhiệt độ mới; ta cần những số nằm phía bên kia của $0$. Nhiệt độ lúc đêm là bao nhiêu?

## tập hợp các số nguyên

**Khám phá nhỏ.**
Trên trục số, đi từ $0$ ba đơn vị sang phải đến $3$; đi ba đơn vị sang trái đến $-3$. Hai điểm cách đều $0$ nhưng ở hai phía. Ta gọi $3$ và $-3$ là hai số đối nhau.

:::definition Số nguyên và tập hợp số nguyên
Các số tự nhiên khác $0$ gọi là số nguyên dương; các số $-1,-2,-3,\ldots$ gọi là số nguyên âm. Cùng với $0$, chúng tạo thành $\mathbb Z=\{\ldots,-3,-2,-1,0,1,2,3,\ldots\}$. Số $0$ không dương cũng không âm.
:::

:::definition Số đối và giá trị tuyệt đối
Số đối của $a$ là $-a$. Giá trị tuyệt đối $|a|$ là khoảng cách từ điểm $a$ đến $0$ trên trục số, nên luôn không âm: $|a|\ge0$.
:::

**Vì sao?**
Trên trục số, số nằm bên phải luôn lớn hơn số nằm bên trái. Vì mọi số dương ở bên phải $0$ và mọi số âm ở bên trái $0$, số dương lớn hơn $0$ và số âm. Trong hai số âm, số gần $0$ hơn nằm bên phải nên lớn hơn; chẳng hạn $-2>-5$.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** tập hợp các số nguyên không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Nhận biết số nguyên
Trong các số $-7,0,4,\dfrac32,-2{,}5$, số nào là số nguyên?

**Lời giải.**
$-7,0,4$ thuộc $\mathbb Z$. Hai số $\dfrac32$ và $-2{,}5$ không là số nguyên vì không biểu diễn được bằng một số nguyên trên trục số.

Vậy, các số nguyên là $-7,0,4$.
:::

:::example Số đối và giá trị tuyệt đối
Tìm số đối và giá trị tuyệt đối của $-8$ và $5$.

**Lời giải.**
Số đối của $-8$ là $8$, $|-8|=8$. Số đối của $5$ là $-5$, $|5|=5$.

Vậy, $8,-5$; các giá trị tuyệt đối đều bằng $8,5$ tương ứng.
:::

:::example Sắp xếp số nguyên
Sắp xếp $-6,3,0,-1,5$ theo thứ tự tăng dần.

**Lời giải.**
Trên trục số, thứ tự từ trái sang phải là $-6,-1,0,3,5$.

Vậy, $-6<-1<0<3<5$.
:::

:::example Nhiệt độ thay đổi
Nhiệt độ lúc sáng là $3^\circ$C rồi giảm $7^\circ$C. Biểu diễn nhiệt độ mới bằng số nguyên.

**Lời giải.**

*Hiểu đề.* Nhiệt độ giảm nghĩa là di chuyển về phía các số nhỏ hơn.

*Tìm cách giải.* Ta dùng trục số, bắt đầu ở $3$ và đi sang trái $7$ đơn vị.

*Giải.* Ta bắt đầu tại $3$ và đi $7$ đơn vị sang trái trên trục số: $3\to2\to1\to0\to-1\to-2\to-3\to-4$.

*Nhìn lại.* Khoảng cách từ $3$ đến $-4$ là $7$ đơn vị, nên kết quả phù hợp. Nếu chỉ giảm $3^\circ$C thì ta dừng tại $0^\circ$C.

Vậy, nhiệt độ mới là $-4^\circ$C.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Cho rằng $0$ là số nguyên dương.** Sai vì số nguyên dương bắt đầu từ $1$. $0$ là mốc phân chia số dương và số âm. Đúng: $0\in\mathbb Z$ nhưng không dương, không âm.
- **So sánh số âm bằng phần số tự nhiên.** Sai: $-9>-4$ vì $9>4$. $-9$ nằm bên trái $-4$ trên trục số. Đúng: $-9<-4$.
:::

**Kết nối.** Số nguyên mở rộng số tự nhiên để mô tả độ cao dưới mực quy ước, nhiệt độ dưới $0$, khoản nợ và hướng ngược nhau. Trục số biến việc so sánh thành vị trí; giá trị tuyệt đối chỉ đo khoảng cách nên không mang dấu.

## Thuật ngữ

:::terms
- số nguyên | integer
- số nguyên dương | positive integer
- số nguyên âm | negative integer
- tập hợp số nguyên | set of integers
- số đối | opposite
- giá trị tuyệt đối | absolute value
- trục số | number line
- thứ tự tăng dần | ascending order
:::

## Tóm tắt

- $\mathbb Z$ gồm các số nguyên âm, $0$ và các số nguyên dương.
- $0$ không dương cũng không âm.
- Số đối của $a$ là $-a$; số đối của $0$ là $0$.
- $|a|$ là khoảng cách từ $a$ đến $0$.
- Trên trục số, điểm bên phải biểu diễn số lớn hơn.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Chọn các số nguyên trong $-12,4{,}5,0,\dfrac73,19$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$-12,0,19$ là các điểm nguyên; $4{,}5$ và $\dfrac73$ không là số nguyên.

**Đáp số.** $-12,0,19$.
:::

:::exercise
Tìm số đối của $-15$, $6$ và $0$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Đổi dấu mỗi số; riêng $0$ vẫn là $0$.

**Đáp số.** $15,-6,0$.
:::

:::exercise
Tính $|-11|$, $|7|$, $|0|$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Khoảng cách đến $0$ lần lượt là $11,7,0$.

**Đáp số.** $11,7,0$.
:::

:::exercise
Điền dấu $<,>,=$: $-3\,\square\,-8$; $-5\,\square\,0$; $|-4|\,\square\,4$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$-3$ ở bên phải $-8$; số âm nhỏ hơn $0$; $|-4|=4$.

**Đáp số.** $>,<,=$.
:::

:::exercise
Sắp xếp $4,-2,-7,1,0$ theo thứ tự giảm dần.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Đọc trục số từ phải sang trái: $4,1,0,-2,-7$.

**Đáp số.** $4>1>0>-2>-7$.
:::

:::exercise
Một thang máy đang ở tầng $2$, đi xuống $5$ tầng. Quy ước tầng trệt là $0$. Thang máy đến tầng nào?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Từ $2$ đi sang trái $5$ đơn vị trên trục số đến $-3$.

**Đáp số.** tầng $-3$.
:::

:::exercise
Tìm số nguyên $x$ biết $|x|=9$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Hai điểm cách $0$ đúng $9$ đơn vị là $9$ và $-9$.

**Đáp số.** $x=9$ hoặc $x=-9$.
:::

:::exercise Thử thách
Tìm tất cả số nguyên $x$ thỏa mãn $|x|<3$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$|x|<3$ nghĩa là điểm $x$ cách $0$ dưới $3$ đơn vị, nên $-3<x<3$. Các số nguyên là $-2,-1,0,1,2$.

**Đáp số.** $\{-2,-1,0,1,2\}$.
:::

## Kiểm tra mini

:::quiz
::mc
Số nào thuộc $\mathbb Z$?
A. $-6$
B. $2{,}5$
C. $\dfrac13$
D. $\sqrt2$
::key A
$-6$ là số nguyên; ba số còn lại không là số nguyên.

::mc
Số đối của $-12$ là
A. $-12$
B. $12$
C. $0$
D. $-\dfrac1{12}$
::key B
Hai số $-12$ và $12$ cách đều $0$ ở hai phía.

::mc
Số lớn nhất trong $-5,-1,0,-3$ là
A. $-5$
B. $-1$
C. $0$
D. $-3$
::key C
$0$ nằm bên phải mọi số âm.

::mc
$|-14|$ bằng
A. $-14$
B. $0$
C. $\dfrac1{14}$
D. $14$
::key D
Giá trị tuyệt đối là khoảng cách nên bằng $14$.

::tf
Xét các nhận định về số nguyên.
a) $|-5|=-5$.
b) Số đối của số đối của $a$ là $a$.
c) $-7<2$.
d) $0$ là số nguyên âm.
::key S Đ Đ S
d) Sai vì $0$ không âm. c) Đúng. a) Sai vì $|-5|=5$. b) Đúng vì $-(-d)=a$.

::sa
Có bao nhiêu số nguyên $x$ thỏa mãn $|x|\le2$?
::key 5
Các số là $-2,-1,0,1,2$.

::sa
Số nguyên liền trước $-8$ là số nào?
::key -9
Trên trục số, số ngay bên trái $-8$ là $-9$.

:::
