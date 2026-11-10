---
title: Tìm thành phần trong phép cộng, phép trừ
description: Em học cách tìm số hạng, số bị trừ, số trừ chưa biết bằng phép tính ngược, rồi thử lại để chắc chắn kết quả đúng.
minutes: 15
---

:::goals
- Gọi đúng tên các thành phần của phép cộng và phép trừ.
- Tìm số hạng, số bị trừ, số trừ chưa biết bằng phép tính ngược.
- Thử lại kết quả và giải bài toán có lời văn dạng "tìm số ban đầu".
:::

Lan có một số hình dán trong hộp. Mẹ cho Lan thêm $7$ hình nữa, bây giờ Lan có $15$ hình. Hỏi lúc đầu trong hộp có bao nhiêu hình dán?

Em chưa biết số hình lúc đầu, nên ta viết $\square+7=15$. Bài này dạy em cách tìm số trong ô trống một cách chắc chắn, không cần đoán.

## Cùng khám phá

Em nhớ lại bài trước: trong phép cộng $8+7=15$, các số $8$ và $7$ gọi là **số hạng**, số $15$ gọi là **tổng**.

Ta nhìn lại câu chuyện của Lan:

- Cả hộp có $15$ hình sau khi thêm.
- Phần mẹ cho thêm là $7$ hình.
- Phần có lúc đầu là phần còn lại, nên ta lấy $15$ bớt đi $7$.

Vậy $15-7=8$. Lúc đầu Lan có $8$ hình dán.

:::graph Trên tia số: đi từ 7 đến 15 là đi thêm 8 bước
alt: Tia số từ 0 đến 15 đánh dấu các điểm 0, 7 và 15; đoạn từ 7 đến 15 có dấu hỏi chấm
x: -1..16
y: -1..1
segment: (0, 0) (15, 0)
point: (0, 0) "0" below
point: (7, 0) "7" below
point: (15, 0) "15" below
label: (11, 0.5) "?"
:::

Em thấy không: biết tổng và một số hạng, muốn tìm số hạng còn lại ta làm phép trừ.

:::theorem Tìm số hạng chưa biết
Số hạng chưa biết bằng tổng trừ đi số hạng đã biết.

Nếu $\square+7=15$ thì $\square=15-7=8$.
:::

Bây giờ ta xem phép trừ. Trong $15-7=8$, số $15$ là **số bị trừ**, số $7$ là **số trừ**, số $8$ là **hiệu**.

Em hãy nhớ câu chuyện: có $15$ hình, lấy đi $7$ hình, còn $8$ hình. Nếu biết còn $8$ và đã lấy đi $7$ thì lúc đầu có $8+7=15$ hình. Nếu biết lúc đầu có $15$ và còn $8$ thì đã lấy đi $15-8=7$ hình.

:::theorem Tìm số bị trừ, số trừ chưa biết
Số bị trừ bằng hiệu cộng số trừ.

Số trừ bằng số bị trừ trừ đi hiệu.

Nếu $\square-7=8$ thì $\square=8+7=15$. Nếu $15-\square=8$ thì $\square=15-8=7$.
:::

Cách làm này đúng vì phép cộng và phép trừ "ngược nhau": cộng rồi trừ cùng một số thì về lại số ban đầu.

## Ví dụ

Ta bắt đầu với số hạng chưa biết ở vị trí đầu.

:::example Tìm $\square$, biết $\square+6=14$
**Lời giải.** $\square$ là số hạng chưa biết, nên ta lấy tổng trừ đi số hạng đã biết:
$$\square=14-6=8.$$
**Thử lại.** $8+6=14$. Đúng.

Vậy $\square=8$.
:::

Số hạng chưa biết cũng có thể đứng ở vị trí thứ hai, cách làm vẫn như vậy.

:::example Tìm $\square$, biết $9+\square=17$
**Lời giải.** Lấy tổng trừ đi số hạng đã biết là $9$:
$$\square=17-9=8.$$
**Thử lại.** $9+8=17$. Đúng.

Vậy $\square=8$.
:::

Bây giờ ta tìm số bị trừ.

:::example Tìm $\square$, biết $\square-5=12$
**Lời giải.** $\square$ là số bị trừ, nên ta lấy hiệu cộng với số trừ:
$$\square=12+5=17.$$
**Thử lại.** $17-5=12$. Đúng.

Vậy $\square=17$.
:::

Tiếp theo là số trừ chưa biết.

:::example Tìm $\square$, biết $20-\square=13$
**Lời giải.** $\square$ là số trừ, nên ta lấy số bị trừ trừ đi hiệu:
$$\square=20-13=7.$$
**Thử lại.** $20-7=13$. Đúng.

Vậy $\square=7$.
:::

Cuối cùng, em dùng cách này để giải một bài toán trong cuộc sống.

:::example Số viên bi
Bình có một số viên bi. Bạn Nam cho Bình thêm $12$ viên, bây giờ Bình có $30$ viên. Hỏi lúc đầu Bình có bao nhiêu viên bi?

**Lời giải.** Gọi số bi lúc đầu là $\square$. Đề cho biết $\square+12=30$. Số hạng chưa biết bằng tổng trừ đi số hạng đã biết:
$$\square=30-12=18\ \text{(viên)}.$$
**Thử lại.** $18+12=30$. Đúng.

Vậy lúc đầu Bình có $18$ viên bi.
:::

:::warning Những lỗi em hay gặp
- **Cộng thay vì trừ ở phép cộng.** Sai: $\square+6=14$ nên $\square=14+6=20$. Vì sao sai: $20+6=26$, không bằng $14$. Đúng: $\square=14-6=8$.
- **Trừ thay vì cộng khi tìm số bị trừ.** Sai: $\square-5=12$ nên $\square=12-5=7$. Vì sao sai: $7-5=2$, không bằng $12$. Đúng: $\square=12+5=17$.
- **Nhầm vị trí số trừ.** Sai: $20-\square=13$ nên $\square=20+13=33$. Vì sao sai: $20-33$ không làm được. Đúng: $\square=20-13=7$.
:::

## Thuật ngữ

:::terms
- số hạng | addend
- tổng | sum (total)
- số bị trừ | minuend
- số trừ | subtrahend
- hiệu | difference
- số chưa biết | missing number
- phép tính ngược | inverse operation
- thử lại | check the answer
:::

## Tóm tắt

- Phép cộng: số hạng + số hạng = tổng. Phép trừ: số bị trừ − số trừ = hiệu.
- Số hạng chưa biết = tổng − số hạng đã biết.
- Số bị trừ chưa biết = hiệu + số trừ.
- Số trừ chưa biết = số bị trừ − hiệu.
- Luôn thử lại bằng cách đặt kết quả vào ô trống; ghi đơn vị khi giải bài toán có lời văn.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm $\square$, biết $\square+8=15$.

::hint
**Kiến thức:** số hạng chưa biết bằng tổng trừ đi số hạng đã biết.

**Gợi ý các bước:**
1. Đề cho biết gì? Tổng là $15$, một số hạng là $8$.
2. Lấy $15$ trừ $8$.

::solution
$\square=15-8=7$.

**Thử lại.** $7+8=15$. Đúng.

**Đáp số.** $7$.
:::

:::exercise
Tìm $\square$, biết $24+\square=40$.

::hint
**Kiến thức:** số hạng chưa biết bằng tổng trừ đi số hạng đã biết.

**Gợi ý các bước:**
1. Tổng là $40$, số hạng đã biết là $24$.
2. Tính $40-24$ rồi thử lại.

::solution
$\square=40-24=16$.

**Thử lại.** $24+16=40$. Đúng.

**Đáp số.** $16$.
:::

:::exercise
Em hãy nhớ lại phép cộng có nhớ: tính $46+28$. Rồi tìm $\square$, biết $\square+28=74$.

::hint
**Kiến thức:** cộng hàng đơn vị trước, nhớ $1$ chục khi được $10$ hoặc hơn. Số hạng chưa biết bằng tổng trừ số hạng đã biết.

**Gợi ý các bước:**
1. Tính $46+28$.
2. So sánh kết quả với $74$ rồi tìm $\square$.

::solution
$46+28=74$ (vì $6+8=14$, viết $4$ nhớ $1$; $4+2+1=7$). Từ $\square+28=74$ ta có $\square=74-28=46$.

**Đáp số.** $46+28=74$ và $\square=46$.
:::

:::exercise
Tìm số bị trừ, biết số trừ là $9$ và hiệu là $30$, tức là $\square-9=30$.

::hint
**Kiến thức:** số bị trừ bằng hiệu cộng số trừ.

**Gợi ý các bước:**
1. Hiệu là $30$, số trừ là $9$.
2. Tính $30+9$ rồi thử lại.

::solution
$\square=30+9=39$.

**Thử lại.** $39-9=30$. Đúng.

**Đáp số.** $39$.
:::

:::exercise
Với mỗi phép tính, em chọn phép cộng hay phép trừ để tìm $\square$? Vì sao? Rồi tìm $\square$.

a) $\square+15=40$.

b) $\square-15=40$.

c) $40-\square=15$.

::hint
**Kiến thức:** xem $\square$ là số hạng, số bị trừ hay số trừ.

**Gợi ý các bước:**
1. Gọi tên $\square$ trong từng phép tính.
2. Áp dụng quy tắc tương ứng.

::solution
a) $\square$ là số hạng: lấy tổng trừ số hạng, $\square=40-15=25$.

b) $\square$ là số bị trừ: lấy hiệu cộng số trừ, $\square=40+15=55$.

c) $\square$ là số trừ: lấy số bị trừ trừ hiệu, $\square=40-15=25$.

**Đáp số.** a) $25$; b) $55$; c) $25$.
:::

:::exercise
Mai giải bài $63-\square=45$ như sau: "$\square=63+45=108$". Bạn Mai làm sai ở đâu? Hãy sửa lại.

::hint
**Kiến thức:** trong $63-\square=45$, $\square$ là số trừ.

**Gợi ý các bước:**
1. Số trừ chưa biết được tìm bằng phép tính nào?
2. Thử lại kết quả của Mai: $63-108$ có làm được không?

::solution
Mai đã cộng, nhưng $\square$ là số trừ nên phải lấy số bị trừ trừ đi hiệu: $\square=63-45=18$.

**Thử lại.** $63-18=45$. Đúng.

**Đáp số.** Mai sai phép tính; $\square=18$.
:::

:::exercise
a) Cô giáo có một số quyển vở. Cô phát cho lớp $35$ quyển thì còn lại $18$ quyển. Hỏi lúc đầu cô có bao nhiêu quyển vở?

b) Buổi sáng cửa hàng bán $27$ kg gạo. Cả ngày cửa hàng bán được $60$ kg gạo. Hỏi buổi chiều cửa hàng bán bao nhiêu ki-lô-gam gạo?

::hint
**Kiến thức:** đọc đề, xem số cần tìm là số hạng, số bị trừ hay số trừ.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Viết phép tính có ô trống, tìm ô trống rồi ghi đáp số có đơn vị.

::solution
a) Gọi số vở lúc đầu là $\square$: $\square-35=18$, nên $\square=18+35=53$ (quyển).

b) Gọi số gạo bán buổi chiều là $\square$: $27+\square=60$, nên $\square=60-27=33$ (kg).

**Đáp số.** a) $53$ quyển vở; b) $33$ kg gạo.
:::

:::exercise Thử thách
Tìm $\square$.

a) $\square+28=100-35$.

b) $90-\square=47+16$.

::hint
**Kiến thức:** tính vế đã biết trước, rồi tìm số chưa biết.

**Gợi ý các bước:**
1. Tính $100-35$ và $47+16$.
2. Tìm $\square$ bằng quy tắc tương ứng và thử lại.

::solution
a) $100-35=65$, nên $\square+28=65$ và $\square=65-28=37$. Thử lại: $37+28=65$.

b) $47+16=63$, nên $90-\square=63$ và $\square=90-63=27$. Thử lại: $90-27=63$.

**Đáp số.** a) $37$; b) $27$.
:::

## Kiểm tra mini

:::quiz
::mc
Tìm $\square$, biết $\square+7=19$.
A. $26$.
B. $22$.
C. $12$.
D. $19$.
::key C
$\square=19-7=12$. Phương án A là lỗi cộng $19+7$ thay vì trừ.

::mc
Tìm $\square$, biết $15-\square=6$.
A. $21$.
B. $8$.
C. $11$.
D. $9$.
::key D
$\square$ là số trừ nên $\square=15-6=9$. Phương án A là lỗi cộng $15+6$.

::mc
Tìm $\square$, biết $\square-14=25$.
A. $39$.
B. $11$.
C. $40$.
D. $29$.
::key A
$\square$ là số bị trừ nên $\square=25+14=39$. Phương án B là lỗi trừ $25-14$.

::mc
Hà có một số nhãn vở. Hà mua thêm $16$ cái thì có $50$ cái. Lúc đầu Hà có bao nhiêu nhãn vở?
A. $66$ cái.
B. $34$ cái.
C. $44$ cái.
D. $36$ cái.
::key B
Ta có $\square+16=50$ nên $\square=50-16=34$. Phương án A là lỗi cộng $50+16$.

::tf
Em xét phép tính $\square+24=70$.
a) Số cần tìm bằng $70-24$.
b) Số cần tìm bằng $46$.
c) Số cần tìm bằng $94$.
d) Thử lại: $46+24=70$.
::key Đ Đ S Đ
a) Đúng: số hạng chưa biết bằng tổng trừ số hạng đã biết. b) Đúng: $70-24=46$. c) Sai: $94$ là $70+24$, và $94+24=118$. d) Đúng: $46+24=70$.

::sa
Tìm $\square$, biết $63-\square=29$.
::key 34
$\square$ là số trừ nên $\square=63-29=34$.

::sa
Trong sọt có một số quả cam. Mẹ lấy ra $18$ quả thì còn $27$ quả. Lúc đầu trong sọt có bao nhiêu quả cam?
::key 45
Ta có $\square-18=27$ nên $\square=27+18=45$ (quả).
:::
