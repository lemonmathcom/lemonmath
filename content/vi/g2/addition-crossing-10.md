---
title: Phép cộng (qua 10) trong phạm vi 20
description: Em học cách cộng qua 10, ví dụ 8 + 5, bằng mẹo "gộp cho đủ 10": tách số thứ hai để làm tròn 10 rồi cộng tiếp phần còn lại.
minutes: 15
---

:::goals
- Biết cộng hai số có tổng lớn hơn 10, ví dụ $8+5$.
- Dùng mẹo "gộp cho đủ 10" để tính nhanh, không cần đếm từng cái.
- Giải bài toán có lời văn bằng một phép cộng.
:::

Lan có $8$ cái kẹo. Mẹ cho Lan thêm $5$ cái nữa. Hỏi Lan có tất cả bao nhiêu cái kẹo?

Em có thể đếm thêm từng cái: $9, 10, 11, 12, 13$. Cách đó đúng, nhưng chậm và dễ đếm lệch một số. Có một cách nhanh hơn: làm cho đủ một chục trước, rồi cộng nốt phần còn lại.

## Cùng khám phá

Em hình dung một hộp đựng kẹo có đúng $10$ ô. Lan bỏ $8$ cái kẹo vào hộp, và hộp còn trống $2$ ô.

- Lan lấy $2$ cái trong $5$ cái mẹ cho để lấp đầy hộp. Hộp đủ $10$ cái.
- Số kẹo mẹ cho còn lại $3$ cái ở ngoài hộp.
- $10$ cái trong hộp và $3$ cái ở ngoài là $13$ cái.
Hộp đầy rồi, em chỉ còn đếm thêm phần ở ngoài.

Vậy $8+5=13$. Cách em vừa làm có tên là **gộp cho đủ 10**: lấp đầy hộp trước, rồi cộng phần còn lại ở ngoài hộp.

:::graph Trên tia số: từ 8, nhảy 2 bước đến 10, rồi nhảy 3 bước đến 13
alt: Tia số từ 0 đến 20, đánh dấu các điểm 8, 10 và 13; đoạn từ 8 đến 10 và từ 10 đến 13
x: 0..20
y: -1..1
segment: (8, 0) (13, 0)
point: (8, 0) "8" below
point: (10, 0) "10" above
point: (13, 0) "13" below
:::

:::theorem Mẹo "gộp cho đủ 10"
Muốn tính $8+5$:
1. Hỏi: $8$ cần thêm mấy để được $10$? Cần thêm $2$.
2. Tách $5$ thành $2$ và $3$.
3. Cộng: $8+2=10$, rồi $10+3=13$.
:::

Vì sao mẹo này đúng? Vì không có cái kẹo nào bị mất: em chỉ chuyển $2$ cái vào hộp cho đủ $10$, còn phần còn lại vẫn được đếm.

## Ví dụ

Ta thử với số $9$ trước, vì $9$ chỉ cần thêm $1$ là đủ $10$. Cách tách số khi đó khá đơn giản.

:::example Tính $9+4$
**Lời giải.** $9$ cần thêm $1$ để được $10$, nên em tách $4$ thành $1$ và $3$:
$$9+4=9+1+3=10+3=13.$$
Vậy $9+4=13$.
:::

Với số $7$ thì khác: em cần thêm nhiều hơn mới đủ $10$. Em tự hỏi xem cần thêm mấy.

:::example Tính $7+6$
**Lời giải.** $7$ cần thêm $3$ để được $10$, nên em tách $6$ thành $3$ và $3$:
$$7+6=7+3+3=10+3=13.$$
Vậy $7+6=13$.
:::

Có khi số đứng trước lại là số nhỏ hơn. Em cứ đổi chỗ hai số, vì tổng không thay đổi, rồi tính cho dễ.

:::example Tính $6+8$
**Lời giải.** Đổi chỗ hai số hạng thì tổng không đổi, nên $6+8=8+6$. Số $8$ chỉ cần thêm $2$ để được $10$, nên em tách $6$ thành $2$ và $4$:
$$8+6=8+2+4=10+4=14.$$
Vậy $6+8=14$.
:::

Giờ em dùng phép cộng cho một việc quen thuộc: các tổ cùng trồng cây.

:::example Trồng cây
Tổ Một trồng được $9$ cây, tổ Hai trồng được $7$ cây. Hỏi cả hai tổ trồng được bao nhiêu cây?

**Lời giải.** "Cả hai tổ" nghĩa là gộp số cây của hai tổ lại, nên em làm phép cộng. $9$ cần thêm $1$ để được $10$, em tách $7$ thành $1$ và $6$:
$$9+7=10+6=16.$$
Vậy cả hai tổ trồng được $16$ cây.
:::

:::warning Những lỗi em hay gặp
- **Quên phần còn lại.** Sai: $8+5=10$. Vì sao sai: em mới cộng $2$ trong số $5$, còn quên $3$. Đúng: $8+5=10+3=13$.
- **Tách sai.** Sai: tách $5$ thành $2$ và $2$. Vì sao sai: $2+2=4$, không bằng $5$. Đúng: $5=2+3$.
- **Bài toán có lời văn quên đơn vị.** Sai: "Đáp số: $16$". Vì sao sai: con số đứng một mình chưa cho biết đó là cái gì. Đúng: "Đáp số: $16$ cây".
Chỗ này nhiều bạn hay nhầm, nên sau khi tách số, em hãy cộng lại hai phần để xem có đủ số cũ không.
:::

## Thuật ngữ

:::terms
- phép cộng | addition
- số hạng | addend
- tổng | sum (total)
- cộng qua 10 | bridging through 10
- gộp cho đủ 10 | make 10
- tách số | partition a number
- tia số | number line
:::

## Tóm tắt

- Muốn cộng qua $10$, em **gộp cho đủ 10**: tách số thứ hai thành phần cần để đủ $10$ và phần còn lại.
- Ví dụ: $8+5=8+2+3=10+3=13$.
- Đổi chỗ các số hạng thì tổng không đổi; em có thể cộng vào số lớn hơn cho dễ.
- Bài toán hỏi "tất cả", "cả hai" thường là phép cộng; nhớ ghi đơn vị trong đáp số.
Câu hỏi của Lan lúc đầu cũng giải theo cách ấy: lấp đầy hộp cho đủ một chục rồi cộng phần còn lại. Em luyện thêm vài phép tính để quen tay nhé.

## Luyện tập

Mỗi bài có phần nhắc kiến thức và một gợi ý để em bắt đầu. Em cứ tự làm trước. Làm xong, hoặc khi bí, hãy bấm xem lời giải.

:::exercise
Tính $9+3$.

::hint
**Kiến thức:** gộp cho đủ $10$: $9$ cần thêm $1$.

**Gợi ý các bước:**
1. Tách $3$ thành $1$ và $2$.
2. Tính $9+1$, rồi cộng thêm $2$.

::solution
Để cộng qua $10$, em tách $3$ thành $1+2$ để $9$ cộng $1$ được $10$.

Ta có
$$9+3=9+1+2=10+2=12.$$

Thử lại bằng cách đổi chỗ hai số hạng: $3+9=12$.

Vậy $9+3=12$.

**Đáp số.** $12$.
:::

:::exercise
Tính $8+4$.

::hint
**Kiến thức:** $8$ cần thêm $2$ để được $10$.

**Gợi ý các bước:**
1. Tách $4$ thành $2$ và $2$.
2. Tính $8+2$, rồi cộng thêm phần còn lại.

::solution
Để cộng qua $10$, em tách $4$ thành $2+2$ để $8$ cộng $2$ được $10$.

Ta có
$$8+4=8+2+2=10+2=12.$$

Thử lại bằng cách đổi chỗ hai số hạng: $4+8=12$.

Vậy $8+4=12$.

**Đáp số.** $12$.
:::

:::exercise
Tính $7+5$.

::hint
**Kiến thức:** $7$ cần thêm $3$ để được $10$.

**Gợi ý các bước:**
1. Tách $5$ thành $3$ và $2$.
2. Tính $7+3$, rồi cộng thêm $2$.

::solution
Để cộng qua $10$, em tách $5$ thành $3+2$ để $7$ cộng $3$ được $10$.

Ta có
$$7+5=7+3+2=10+2=12.$$

Thử lại bằng cách đổi chỗ hai số hạng: $5+7=12$.

Vậy $7+5=12$.

**Đáp số.** $12$.
:::

:::exercise
Tính $5+9$.

::hint
**Kiến thức:** đổi chỗ hai số hạng thì tổng không đổi.

**Gợi ý các bước:**
1. Viết $5+9$ thành $9+5$.
2. $9$ cần thêm $1$: tách $5$ thành $1$ và $4$.

::solution
Khi đổi chỗ hai số hạng, tổng không thay đổi, nên $5+9=9+5$. Ta lấy $9$ làm số thứ nhất vì $9$ chỉ cần thêm $1$ là được $10$.

Ta tách $5$ thành $1+4$:
$$5+9=9+5=9+1+4=10+4=14.$$

Thử lại: $5+9=5+5+4=10+4=14$.

Vậy $5+9=14$.

**Đáp số.** $14$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống: $8+6 \;\square\; 15$.

::hint
**Kiến thức:** tính tổng trước, rồi so sánh hai số.

**Gợi ý các bước:**
1. Tính $8+6$ bằng mẹo gộp cho đủ $10$.
2. So sánh kết quả với $15$.

::solution
Trước hết ta tính $8+6$. Tách $6$ thành $2+4$ để $8$ cộng $2$ được $10$:
$$8+6=8+2+4=10+4=14.$$

So sánh $14$ với $15$: vì $14$ đứng trước $15$ khi đếm nên $14<15$.

Do đó $8+6<15$.

Vậy dấu cần điền vào chỗ trống là dấu $<$.

**Đáp số.** Dấu $<$.
:::

:::exercise
Trong vườn có $9$ con gà mái và $6$ con gà trống. Hỏi trong vườn có tất cả bao nhiêu con gà?

::hint
**Kiến thức:** "tất cả" nghĩa là gộp lại: dùng phép cộng.

**Gợi ý các bước:**
1. Đề cho biết gì? Có $9$ gà mái và $6$ gà trống. Đề hỏi gì? Tất cả bao nhiêu con gà.
2. Tính $9+6$ rồi ghi đáp số có đơn vị.

::solution
Bài giải

Muốn biết trong vườn có tất cả bao nhiêu con gà, ta lấy số gà mái cộng với số gà trống.

Số con gà có tất cả là:
$$9+6=9+1+5=10+5=15\ \text{(con)}.$$

Vậy trong vườn có tất cả $15$ con gà.

**Đáp số.** $15$ con gà.
:::

:::exercise
Em hãy nhớ lại bài trước: số liền sau của $12$ là số nào? Rồi tính: (số liền sau của $12$) $+\,7$.

::hint
**Kiến thức:** số liền sau của một số là số lớn hơn số đó $1$ đơn vị.

**Gợi ý các bước:**
1. Tìm số liền sau của $12$.
2. Cộng số đó với $7$ (đếm thêm hoặc cộng hàng đơn vị).

::solution
Số liền sau của một số hơn số đó $1$ đơn vị. Vì $12+1=13$ nên số liền sau của $12$ là $13$.

Tiếp theo, ta tính $13+7$. Ta tách $13=10+3$, rồi cộng $3$ với $7$ để được $10$:
$$13+7=10+3+7=10+10=20.$$

Vậy số liền sau của $12$ là $13$ và $13+7=20$.

**Đáp số.** $20$.
:::

:::exercise Thử thách
Tìm số thích hợp điền vào ô trống: $\square+8=15$.

::hint
**Kiến thức:** $8$ cần thêm $2$ để được $10$, rồi thêm bao nhiêu nữa để được $15$?

**Gợi ý các bước:**
1. Từ $8$ đến $10$ cần thêm $2$.
2. Từ $10$ đến $15$ cần thêm $5$.
3. Cộng hai phần: $2+5$.

::solution
Số cần điền cộng với $8$ được $15$. Ta đếm thêm từ $8$ lên $15$, đi qua $10$.

Từ $8$ lên $10$ cần thêm $2$. Từ $10$ lên $15$ cần thêm $5$. Số cần điền là
$$2+5=7.$$

Kiểm tra: $7+8=7+3+5=10+5=15$. Đúng.

Vậy số cần điền vào ô trống là $7$.

**Đáp số.** $7$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Kết quả của $9+5$ là
A. $13$.
B. $14$.
C. $15$.
D. $10$.
::key B
$9+5=9+1+4=10+4=14$. Phương án D là lỗi quên phần còn lại $4$.

::mc TH
Để tính $8+7$ bằng mẹo gộp cho đủ $10$, em tách $7$ thành
A. $1$ và $6$.
B. $3$ và $4$.
C. $2$ và $5$.
D. $2$ và $4$.
::key C
$8$ cần thêm $2$ để được $10$, nên tách $7=2+5$. Phương án D sai vì $2+4=6$, không bằng $7$.

::mc TH
Phép tính nào có kết quả bằng $13$?
A. $6+7$.
B. $6+8$.
C. $5+7$.
D. $9+5$.
::key A
$6+7=7+6=7+3+3=13$. Các phép tính khác lần lượt bằng $14$, $12$, $14$.

::mc TH
Mai có $8$ bông hoa, Hà có $6$ bông hoa. Cả hai bạn có bao nhiêu bông hoa?
A. $2$ bông.
B. $13$ bông.
C. $14$ bông.
D. $15$ bông.
::key C
"Cả hai bạn" là gộp lại: $8+6=14$. Phương án A là lấy $8-6$, nhầm sang phép trừ.

::tf NB TH TH TH
Em xét phép cộng $7+8$.
a) Có thể đổi thành $8+7$ mà kết quả không đổi.
b) $7+8=7+3+5$.
c) $7+8=14$.
d) $7+8$ lớn hơn $14$.
::key Đ Đ S Đ
a) Đúng: đổi chỗ các số hạng thì tổng không đổi. b) Đúng: $8=3+5$. c) Sai: $7+3+5=10+5=15$. d) Đúng: $15>14$.

::sa TH
Tính $9+9$.
::key 18
$9+9=9+1+8=10+8=18$.

::sa TH
Trên cành có $7$ con chim, thêm $4$ con nữa bay đến. Trên cành có tất cả bao nhiêu con chim?
::key 11
$7+4=7+3+1=10+1=11$ (con chim).
:::
