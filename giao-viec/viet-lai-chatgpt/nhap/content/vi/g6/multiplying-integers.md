---
title: Phép nhân số nguyên. Phép chia hết. Ước và bội của một số nguyên
description: Nhân số nguyên, nhận biết phép chia hết, tìm ước và bội nguyên, vận dụng quy tắc dấu vào bài toán.
minutes: 35
---

:::goals
- Nhận biết và mô tả phép nhân, chia hết, ước và bội của số nguyên.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một kho lạnh giả định giảm nhiệt độ đều $3^\circ$C mỗi giờ. Sau $4$ giờ, mức thay đổi là $4\cdot(-3)=-12^\circ$C. Nếu nhìn ngược lại $4$ giờ trước, dấu của phép nhân phải đổi thế nào? Quy tắc nhân số nguyên giúp mô tả cả độ lớn lẫn hướng thay đổi.

## phép nhân, chia hết, ước và bội của số nguyên

**Khám phá nhỏ.**
Cộng lặp lại cho $3\cdot(-2)=(-2)+(-2)+(-2)=-6$. Từ dãy $3\cdot2=6$, $2\cdot2=4$, $1\cdot2=2$, $0\cdot2=0$, tiếp tục giảm thừa số thứ nhất mỗi lần $1$ thì tích giảm $2$: $(-1)\cdot2=-2$. Quy luật dấu xuất hiện tự nhiên.

:::definition Quy tắc nhân và chia số nguyên
Nhân hai số nguyên: nhân hai giá trị tuyệt đối; cùng dấu cho tích dương, khác dấu cho tích âm. Với phép chia hết, thương của hai số khác $0$ cùng dấu là dương, khác dấu là âm. Mọi số nhân $0$ đều bằng $0$.
:::

:::definition Ước và bội trong $\mathbb Z$
Với $a,b\in\mathbb Z$, $b\ne0$, nếu có $q\in\mathbb Z$ sao cho $a=bq$ thì ta nói $a$ chia hết cho $b$; $b$ là ước của $a$, còn $a$ là bội của $b$. Nếu $d$ là ước của $a$ thì $-d$ cũng là ước của $a$.
:::

**Vì sao?**
Ta cần giữ các tính chất quen thuộc, đặc biệt tính phân phối. Vì $0=(-3)\cdot0=(-3)[2+(-2)]=(-3)\cdot2+(-3)\cdot(-2)=-6+(-3)\cdot(-2)$, tích $(-3)\cdot(-2)$ buộc phải bằng $6$. Do đó hai dấu âm cho tích dương. Quy tắc chia là quy tắc nhân đọc ngược: nếu $a=bq$ thì $a:b=q$.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** phép nhân, chia hết, ước và bội của số nguyên không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Nhân hai số nguyên
Tính $(-14)\cdot6$ và $(-9)\cdot(-8)$.

**Lời giải.**
Khác dấu nên $(-14)\cdot6=-(14\cdot6)=-84$. Cùng dấu nên $(-9)\cdot(-8)=9\cdot8=72$.

Vậy, $-84$ và $72$.
:::

:::example Tích nhiều thừa số
Tính $(-2)\cdot3\cdot(-5)\cdot(-4)$.

**Lời giải.**
Có ba thừa số âm nên tích âm. Giá trị tuyệt đối là $2\cdot3\cdot5\cdot4=120$, do đó tích bằng $-120$.

Vậy, $-120$.
:::

:::example Chia hết số nguyên
Tính $(-96):12$ và $(-96):(-12)$.

**Lời giải.**
Khác dấu: $(-96):12=-8$. Cùng dấu: $(-96):(-12)=8$.

Vậy, $-8$ và $8$.
:::

:::example Tìm ước nguyên
Liệt kê các ước nguyên của $18$.

**Lời giải.**
Các ước dương là $1,2,3,6,9,18$. Ghép thêm các số đối, ta được $\pm1,\pm2,\pm3,\pm6,\pm9,\pm18$.

Vậy, $\{\pm1,\pm2,\pm3,\pm6,\pm9,\pm18\}$.
:::

:::example Mức thay đổi nhiệt độ
Một kho lạnh giảm đều $3^\circ$C mỗi giờ trong $4$ giờ. Nếu ban đầu là $5^\circ$C, nhiệt độ cuối là bao nhiêu?

**Lời giải.**

*Hiểu đề.* Ta biết nhiệt độ đầu, mức giảm mỗi giờ và số giờ.

*Tìm cách giải.* Tính tổng thay đổi bằng phép nhân rồi cộng vào nhiệt độ đầu.

*Giải.* Mỗi giờ thay đổi $-3^\circ$C, nên tổng thay đổi là $4\cdot(-3)=-12^\circ$C. Nhiệt độ cuối là $5+(-12)=-7^\circ$C.

*Nhìn lại.* Giảm $12^\circ$C từ $5^\circ$C phải đi qua $0$ và dừng ở $-7^\circ$C. Nếu thời gian tăng gấp đôi thì độ giảm thay đổi thế nào?

Vậy, nhiệt độ cuối là $-7^\circ$C.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Nhầm “âm nhân âm vẫn âm”.** Sai: $(-4)(-7)=-28$. Hai thừa số cùng dấu cho tích dương. Đúng: $(-4)(-7)=28$.
- **Chỉ liệt kê ước dương.** Trong $\mathbb Z$, nói các ước của $12$ chỉ là $1,2,3,4,6,12$ là thiếu. Nếu $d\mid12$ thì $-d\mid12$. Phải có cả $\pm1,\pm2,\pm3,\pm4,\pm6,\pm12$.
:::

**Kết nối.** Phép nhân số nguyên kết hợp độ lớn với chiều của biến đổi. Tính phân phối giúp tính nhanh và sau này rút gọn biểu thức. Khái niệm chia hết, ước và bội được mở rộng từ số tự nhiên sang số nguyên bằng cách thêm các số đối.

## Thuật ngữ

:::terms
- thừa số | factor
- tích | product
- cùng dấu | same sign
- khác dấu | different signs
- phép chia hết | exact division
- ước của số nguyên | integer factor
- bội của số nguyên | integer multiple
- tính phân phối | distributive property
:::

## Tóm tắt

- Cùng dấu cho tích hoặc thương dương; khác dấu cho tích hoặc thương âm.
- Tích có số thừa số âm chẵn là dương, lẻ là âm.
- $a=bq$ nghĩa là $a$ chia hết cho $b$, với $b\ne0$.
- Ước nguyên xuất hiện thành từng cặp đối nhau.
- Mọi bội của $a$ có dạng $ak$, $k\in\mathbb Z$.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Tính $(-17)\cdot5$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Khác dấu nên tích âm: $(-17)\cdot5=-85$.

**Đáp số.** $-85$.
:::

:::exercise
Tính $(-12)\cdot(-11)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Cùng dấu nên tích dương: $12\cdot11=132$.

**Đáp số.** $132$.
:::

:::exercise
Tính $180:(-15)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Khác dấu và $180:15=12$, nên thương là $-12$.

**Đáp số.** $-12$.
:::

:::exercise
Tính nhanh $25\cdot(-37)\cdot4$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Nhóm $25\cdot4=100$, được $100\cdot(-37)=-3700$.

**Đáp số.** $-3700$.
:::

:::exercise
Liệt kê các ước nguyên của $20$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Các ước dương là $1,2,4,5,10,20$; thêm các số đối.

**Đáp số.** $\{\pm1,\pm2,\pm4,\pm5,\pm10,\pm20\}$.
:::

:::exercise
Một đội bị trừ $6$ điểm ở mỗi vòng trong $5$ vòng. Tổng thay đổi điểm là bao nhiêu?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Mỗi vòng thay đổi $-6$, nên $5\cdot(-6)=-30$.

**Đáp số.** $-30$ điểm.
:::

:::exercise
Tìm $x\in\mathbb Z$ biết $(-8)x=56$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$x=56:(-8)=-7$.

**Đáp số.** $x=-7$.
:::

:::exercise Thử thách
Tìm các số nguyên $x$ sao cho $x$ là ước của $24$ và $|x|>6$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Các ước nguyên của $24$ là $\pm1,\pm2,\pm3,\pm4,\pm6,\pm8,\pm12,\pm24$. Giữ các số có giá trị tuyệt đối lớn hơn $6$.

**Đáp số.** $x\in\{\pm8,\pm12,\pm24\}$.
:::

## Kiểm tra mini

:::quiz
::mc
$(-7)\cdot9$ bằng
A. $-63$
B. $63$
C. $-16$
D. $2$
::key A
Hai thừa số khác dấu nên tích âm, $7\cdot9=63$.

::mc
$(-72):(-9)$ bằng
A. $-8$
B. $8$
C. $-81$
D. $81$
::key B
Hai số cùng dấu nên thương dương: $72:9=8$.

::mc
Số nào là ước nguyên của $30$?
A. $8$
B. $12$
C. $-5$
D. $-7$
::key C
$30=(-5)(-6)$, nên $-5$ là ước của $30$.

::mc
Tích $(-1)\cdot(-2)\cdot(-3)\cdot(-4)$ bằng
A. $-24$
B. $-10$
C. $10$
D. $24$
::key D
Có bốn thừa số âm nên tích dương; giá trị tuyệt đối là $24$.

::tf
Xét các nhận định về phép nhân và chia hết.
a) Nếu $d$ là ước của $a$ thì $-d$ cũng là ước của $a$.
b) $0$ là bội của mọi số nguyên khác $0$.
c) Tích của hai số nguyên âm là số nguyên âm.
d) Có thể chia một số nguyên cho $0$.
::key Đ Đ S S
c) Sai vì âm nhân âm dương. b), a) Đúng theo định nghĩa bội và ước. d) Sai vì không có phép chia cho $0$.

::sa
Tính $(-15)\cdot(-4)$.
::key 60
Cùng dấu nên tích là $15\cdot4=60$.

::sa
Có bao nhiêu ước nguyên của $12$?
::key 12
$12$ có $6$ ước dương và $6$ ước âm.

:::
