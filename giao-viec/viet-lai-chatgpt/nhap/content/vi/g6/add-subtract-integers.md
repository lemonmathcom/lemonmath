---
title: Phép cộng và phép trừ số nguyên. Quy tắc dấu ngoặc
description: Cộng, trừ số nguyên, dùng tính chất phép cộng và bỏ dấu ngoặc đúng dấu trong tính toán, bài toán thực tế.
minutes: 35
---

:::goals
- Nhận biết và mô tả phép cộng, phép trừ số nguyên và quy tắc dấu ngoặc.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một trò chơi cho $8$ điểm khi trả lời đúng và trừ $11$ điểm khi trả lời sai. Bạn đang có $6$ điểm, rồi trả lời đúng một câu và sai một câu. Điểm cuối là $6+8-11$. Ta tính thế nào để vừa nhanh vừa không nhầm dấu?

## phép cộng, phép trừ số nguyên và quy tắc dấu ngoặc

**Khám phá nhỏ.**
Trên trục số, cộng $4$ nghĩa là đi $4$ đơn vị sang phải, còn cộng $-4$ nghĩa là đi $4$ đơn vị sang trái. Vì vậy $3+(-4)=-1$. Phép trừ $3-4$ cho cùng chuyển động, gợi ý rằng trừ $4$ chính là cộng số đối $-4$.

:::definition Cộng và trừ số nguyên
Cộng hai số nguyên cùng dấu: cộng hai giá trị tuyệt đối rồi giữ dấu chung. Cộng hai số khác dấu: lấy giá trị tuyệt đối lớn trừ giá trị tuyệt đối nhỏ và đặt dấu của số có giá trị tuyệt đối lớn hơn. Với mọi $a,b\in\mathbb Z$, $a-b=a+(-b)$.
:::

:::definition Quy tắc dấu ngoặc
Bỏ dấu ngoặc có dấu $+$ trước nó: giữ nguyên dấu các số hạng. Bỏ dấu ngoặc có dấu $-$ trước nó: đổi dấu mọi số hạng trong ngoặc. Phép cộng số nguyên có tính giao hoán và kết hợp.
:::

**Vì sao?**
Số đối của $b$ tạo với $b$ tổng bằng $0$. Vì $(a-b)+b=a$, phép tính cần thực hiện để “bù lại” $b$ là cộng $-b$, nên $a-b=a+(-b)$. Với dấu ngoặc, dấu trừ trước ngoặc nghĩa là lấy số đối của cả tổng: $-(b+c)=(-b)+(-c)$, do đó mọi dấu bên trong phải đổi.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** phép cộng, phép trừ số nguyên và quy tắc dấu ngoặc không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Cộng hai số cùng dấu
Tính $(-17)+(-9)$.

**Lời giải.**
Hai số cùng âm nên ta cộng giá trị tuyệt đối và giữ dấu âm: $(-17)+(-9)=-(17+9)=-26$.

Vậy, $-26$.
:::

:::example Cộng hai số khác dấu
Tính $(-23)+15$.

**Lời giải.**
$|-23|>|15|$, nên kết quả mang dấu âm: $(-23)+15=-(23-15)=-8$.

Vậy, $-8$.
:::

:::example Đổi phép trừ thành phép cộng
Tính $12-(-7)$ và $-5-9$.

**Lời giải.**
$12-(-7)=12+7=19$. Ta cũng có $-5-9=-5+(-9)=-14$.

Vậy, $19$ và $-14$.
:::

:::example Bỏ dấu ngoặc
Tính $18-[7-(-5)]+(-4)$.

**Lời giải.**
Bỏ ngoặc sau dấu trừ và đổi dấu mọi số hạng: $18-[7-(-5)]+(-4)=18-7-5-4=2$.

Vậy, $2$.
:::

:::example Điểm trong trò chơi
Bạn có $6$ điểm, được thêm $8$ điểm rồi bị trừ $11$ điểm. Tính điểm cuối.

**Lời giải.**

*Hiểu đề.* Điểm được thêm mang dấu dương, điểm bị trừ mang dấu âm.

*Tìm cách giải.* Ta lập tổng có dấu rồi chọn cách nhóm thuận tiện.

*Giải.* Điểm cuối là $6+8-11=14-11=3$. Có thể nhóm $8-11=-3$ rồi tính $6+(-3)=3$.

*Nhìn lại.* $3$ nhỏ hơn $6$ đúng $3$ điểm vì thay đổi ròng là $8-11=-3$. Nếu câu sai chỉ trừ $7$ điểm thì điểm cuối sẽ tăng hay giảm?

Vậy, điểm cuối là $3$.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Trừ số âm nhưng vẫn giữ dấu trừ.** Sai: $5-(-3)=5-3$. Trừ một số là cộng số đối của nó; số đối của $-3$ là $3$. Đúng: $5-(-3)=5+3=8$.
- **Chỉ đổi dấu số hạng đầu trong ngoặc.** Sai: $-(4-7)=-4-7$. Dấu trừ tác động lên toàn bộ tổng trong ngoặc. Đúng: $-(4-7)=-4+7=3$.
:::

**Kết nối.** Cộng và trừ số nguyên mô tả mọi thay đổi có hướng: tăng–giảm nhiệt độ, thu–chi, lên–xuống. Quy tắc dấu ngoặc chuẩn bị cho việc rút gọn biểu thức đại số; bản chất vẫn là thay phép trừ bằng phép cộng số đối.

## Thuật ngữ

:::terms
- tổng | sum
- số hạng | term
- số đối | opposite
- hiệu | difference
- cùng dấu | same sign
- khác dấu | different signs
- quy tắc dấu ngoặc | rules for removing brackets
- tính giao hoán | commutative property
- tính kết hợp | associative property
:::

## Tóm tắt

- Cùng dấu: cộng giá trị tuyệt đối, giữ dấu.
- Khác dấu: lấy lớn trừ nhỏ về giá trị tuyệt đối, giữ dấu của số có giá trị tuyệt đối lớn.
- $a-b=a+(-b)$.
- Dấu $+$ trước ngoặc: giữ dấu; dấu $-$ trước ngoặc: đổi mọi dấu.
- Có thể đổi chỗ, nhóm các số hạng trong một tổng để tính thuận tiện.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Tính $(-28)+(-16)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Hai số cùng âm: $(-28)+(-16)=-(28+16)=-44$.

**Đáp số.** $-44$.
:::

:::exercise
Tính $35+(-47)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$47>35$ nên $35+(-47)=-(47-35)=-12$.

**Đáp số.** $-12$.
:::

:::exercise
Tính $-18-(-25)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$-18-(-25)=-18+25=7$.

**Đáp số.** $7$.
:::

:::exercise
Tính nhanh $-36+19+36-9$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nhóm hai số đối: $(-36+36)+(19-9)=0+10=10$.

**Đáp số.** $10$.
:::

:::exercise
Bỏ dấu ngoặc rồi tính $24-(9-13)+(-8)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$24-(9-13)+(-8)=24-9+13-8=20$.

**Đáp số.** $20$.
:::

:::exercise
Một tài khoản giả định có $120$ nghìn đồng, chi $75$ nghìn đồng rồi nhận thêm $40$ nghìn đồng. Số dư cuối là bao nhiêu?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Số dư là $120-75+40=45+40=85$ (nghìn đồng).

**Đáp số.** $85$ nghìn đồng.
:::

:::exercise
Tìm $x\in\mathbb Z$ biết $x-(-14)=-3$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$x+14=-3$, nên $x=-3-14=-17$.

**Đáp số.** $x=-17$.
:::

:::exercise Thử thách
Tính $1-2+3-4+\cdots+19-20$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nhóm từng cặp: $(1-2)+(3-4)+\cdots+(19-20)$. Có $10$ cặp, mỗi cặp bằng $-1$, nên tổng bằng $-10$.

**Đáp số.** $-10$.
:::

## Kiểm tra mini

:::quiz
::mc
$(-9)+(-6)$ bằng
A. $-15$
B. $-3$
C. $3$
D. $15$
::key A
Cùng dấu âm nên cộng $9+6$ và giữ dấu âm.

::mc
$7-(-12)$ bằng
A. $-5$
B. $19$
C. $5$
D. $-19$
::key B
$7-(-12)=7+12=19$.

::mc
Bỏ ngoặc đúng của $-(a-b+3)$ là
A. $-a-b+3$
B. $a-b-3$
C. $-a+b-3$
D. $-a-b-3$
::key C
Dấu trừ đổi dấu cả ba số hạng.

::mc
Tổng nào bằng $0$?
A. $4+(-3)$
B. $-5+(-5)$
C. $7+0$
D. $-8+8$
::key D
Hai số đối $-8$ và $8$ có tổng bằng $0$.

::tf
Cho biểu thức $A=-6-[4-(-3)]$.
a) $4-(-3)=7$.
b) $A=-13$.
c) $|A|=13$.
d) $A=-6-4-3$.
::key Đ Đ Đ Đ
a), d) Đúng vì $4-(-3)=7$ và $-[4-(-3)]=-4-3$. Do đó $A=-13$, nên b), c) cũng đúng.

::sa
Tính $-17+29$.
::key 12
$29-17=12$ và kết quả dương.

::sa
Tính $8-[15-(-2)]$.
::key -9
$15-(-2)=17$, nên $8-17=-9$.

:::
