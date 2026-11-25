---
title: Tính chất cơ bản của phân số
description: Em học: nhân hoặc chia cả tử số và mẫu số với cùng một số khác 0 thì được phân số mới bằng phân số đã cho.
minutes: 15
---

:::goals
- Hiểu hai phân số bằng nhau có thể có tử số và mẫu số khác nhau.
- Nhân hoặc chia cả tử số và mẫu số với cùng một số khác $0$ để được phân số bằng phân số đã cho.
- Tìm số còn thiếu trong hai phân số bằng nhau.
:::

Lan ăn $\dfrac{1}{2}$ chiếc bánh. Nam ăn $\dfrac{2}{4}$ chiếc bánh cùng loại. Em đoán xem, hai bạn ai ăn nhiều hơn?

Nhìn qua thì hai phân số khác nhau hẳn: tử số khác, mẫu số cũng khác. Vậy mà phần bánh hai bạn ăn có thể bằng nhau. Biết khi nào hai phân số khác mặt nhưng vẫn bằng nhau, em sẽ nhận ra ngay hai phân số nào thực ra là một.

## Cùng khám phá

Ta cùng cắt chiếc bánh, từng bước một, và xem phần bánh của Lan có thay đổi không.

- Chiếc bánh cắt đôi: Lan ăn $1$ phần trong $2$ phần, tức $\dfrac{1}{2}$.
- Cắt mỗi nửa thành $2$ phần nhỏ bằng nhau. Chiếc bánh có $4$ phần, và phần Lan ăn gồm $2$ phần nhỏ, tức $\dfrac{2}{4}$.
- Cắt tiếp mỗi phần nhỏ thành $2$: chiếc bánh có $8$ phần, phần Lan ăn gồm $4$ phần, tức $\dfrac{4}{8}$.
Em để ý: mỗi lần cắt, số phần của cả chiếc bánh và số phần Lan ăn đều tăng lên.

Chiếc bánh vẫn là chiếc bánh ấy, phần Lan ăn vẫn là phần ấy; chỉ có cách cắt là khác. Vậy $\dfrac{1}{2}=\dfrac{2}{4}=\dfrac{4}{8}$. Hai bạn ăn bằng nhau.

Em nhìn kĩ các con số: tử số và mẫu số cùng được nhân với $2$, vì $1\times2=2$ và $2\times2=4$.

:::graph Trên trục số: 1/2, 2/4 và 4/8 là cùng một điểm
alt: Trục số từ 0 đến 1, điểm chính giữa được đánh dấu là một phần hai, hai phần bốn và bốn phần tám
x: -0.1..1.1
y: -0.15..0.15
segment: (0, 0) (1, 0)
point: (0, 0) "0" below
point: (0.5, 0) "1/2 = 2/4 = 4/8" above
point: (1, 0) "1" below
:::

:::theorem Tính chất cơ bản của phân số
Nếu nhân cả tử số và mẫu số của một phân số với cùng một số tự nhiên khác $0$ thì được một phân số bằng phân số đã cho.

Nếu chia cả tử số và mẫu số của một phân số cho cùng một số tự nhiên khác $0$ (chia hết cả hai) thì cũng được một phân số bằng phân số đã cho.
:::

Vì sao nhân cả hai số với cùng một số mà phân số không đổi? Vì nhân cả hai số với $2$ nghĩa là cắt mỗi phần thành $2$ phần nhỏ bằng nhau: số phần của cả chiếc bánh gấp $2$, số phần đã lấy cũng gấp $2$, còn phần bánh đã lấy không đổi.

## Ví dụ

Ta bắt đầu với phép nhân: đã biết mẫu số mới, em đi tìm tử số mới.

:::example Nhân tử số và mẫu số
Tìm số thích hợp: $\dfrac{2}{3}=\dfrac{?}{6}$.

**Lời giải.** Mẫu số $3$ thành $6$ nên đã nhân với $2$, vì $3\times2=6$. Ta nhân cả tử số với $2$:
$$\frac{2}{3}=\frac{2\times2}{3\times2}=\frac{4}{6}.$$
Vậy số cần tìm là $4$.
:::

Lần này số nhân không còn dễ thấy ngay. Em tự hỏi: mẫu số cũ nhân với mấy thì ra mẫu số mới?

:::example Tìm số nhân
Tìm số thích hợp: $\dfrac{3}{5}=\dfrac{?}{20}$.

**Lời giải.** Ta tìm số nhân bằng cách hỏi: $5$ nhân mấy được $20$? Đó là $20:5=4$. Nhân cả tử số với $4$:
$$\frac{3}{5}=\frac{3\times4}{5\times4}=\frac{12}{20}.$$
Vậy số cần tìm là $12$.

**Kiểm tra.** $12:4=3$ và $20:4=5$, đúng là $\dfrac{3}{5}$.
:::

Phép chia cũng dùng được, với một điều kiện: cả tử số và mẫu số đều phải chia hết cho số đó.

:::example Chia tử số và mẫu số
Tìm số thích hợp: $\dfrac{6}{8}=\dfrac{?}{4}$.

**Lời giải.** Mẫu số $8$ thành $4$ nên đã chia cho $2$, vì $8:2=4$. Chia cả tử số cho $2$:
$$\frac{6}{8}=\frac{6:2}{8:2}=\frac{3}{4}.$$
Vậy số cần tìm là $3$.
:::

Giờ ta dùng tính chất này để trả lời một câu hỏi giống câu hỏi đầu bài: ai ăn nhiều hơn?

:::example Ai ăn nhiều hơn?
Lan ăn $\dfrac{1}{2}$ chiếc bánh, Hà ăn $\dfrac{3}{6}$ chiếc bánh cùng loại. Hai bạn có ăn bằng nhau không?

**Lời giải.** Ta đưa $\dfrac{3}{6}$ về mẫu số nhỏ hơn bằng cách chia cả tử số và mẫu số cho $3$:
$$\frac{3}{6}=\frac{3:3}{6:3}=\frac{1}{2}.$$
Vậy $\dfrac{3}{6}=\dfrac{1}{2}$, hai bạn ăn bằng nhau.
:::

:::warning Những lỗi em hay gặp
- **Chỉ nhân tử số.** Viết $\dfrac{2}{3}=\dfrac{4}{3}$ là sai, vì phải nhân cả tử số và mẫu số với cùng một số. Đúng là $\dfrac{2}{3}=\dfrac{4}{6}$.
- **Cộng thay vì nhân.** Chỗ này nhiều bạn hay nhầm: viết $\dfrac{1}{2}=\dfrac{2}{3}$ (cùng cộng $1$) là sai, vì tính chất cơ bản chỉ nói về phép nhân và phép chia. Đúng là $\dfrac{1}{2}=\dfrac{2}{4}$.
- **Chia không hết.** Chia cả $5$ và $8$ cho $2$ là sai, vì $5$ không chia hết cho $2$. Em chỉ chia khi cả hai số cùng chia hết cho số đó.
:::

## Thuật ngữ

:::terms
- tính chất cơ bản của phân số | basic property of fractions
- phân số bằng nhau | equivalent fractions
- tử số | numerator
- mẫu số | denominator
- nhân | multiply
- chia hết | divide exactly
- cùng một số | the same number
:::

## Tóm tắt

- Nhân cả tử số và mẫu số với cùng một số khác $0$ thì được phân số bằng phân số đã cho.
- Chia cả tử số và mẫu số cho cùng một số khác $0$ (chia hết cả hai) cũng vậy.
- Ví dụ: $\dfrac{1}{2}=\dfrac{2}{4}=\dfrac{4}{8}$.
- Tìm số còn thiếu: tìm số nhân hoặc số chia từ hai mẫu số.
- Hai phân số bằng nhau cùng biểu diễn một điểm trên trục số.
Quay lại câu hỏi đầu bài: một phần hai và hai phần tư chỉ là hai cách gọi của cùng một phần bánh, nên Lan và Nam ăn bằng nhau. Em nhớ làm cùng một phép tính với cả tử số lẫn mẫu số, rồi luyện thêm vài bài cho quen tay.

## Luyện tập

Mỗi bài đều có phần kiến thức và gợi ý để em bắt đầu. Em cứ tự làm trước, chưa chắc thì xem gợi ý, rồi mới mở lời giải để đối chiếu.

:::exercise
Tìm số thích hợp: $\dfrac{1}{3}=\dfrac{?}{6}$.

::hint
**Kiến thức:** nhân cả tử số và mẫu số với cùng một số.

**Gợi ý các bước:**
1. $3$ nhân mấy được $6$?
2. Nhân tử số với số đó.

::solution
Khi nhân cả tử số và mẫu số của một phân số với cùng một số tự nhiên khác $0$ thì được một phân số bằng phân số đã cho.

Mẫu số đã tăng từ $3$ lên $6$. Vì $3\times2=6$ nên ta nhân cả tử số và mẫu số với $2$:
$$\frac{1}{3}=\frac{1\times2}{3\times2}=\frac{2}{6}$$

Vậy số thích hợp là $2$.

**Đáp số.** $2$.
:::

:::exercise
Tìm số thích hợp: $\dfrac{4}{5}=\dfrac{12}{?}$.

::hint
**Kiến thức:** tử số $4$ thành $12$ nên đã nhân với mấy?

**Gợi ý các bước:**
1. Tìm số nhân: $12:4$.
2. Nhân mẫu số với số đó.

::solution
Khi nhân cả tử số và mẫu số của một phân số với cùng một số tự nhiên khác $0$ thì được một phân số bằng phân số đã cho.

Tử số đã tăng từ $4$ lên $12$. Vì $12:4=3$ nên ta nhân cả tử số và mẫu số với $3$:
$$\frac{4}{5}=\frac{4\times3}{5\times3}=\frac{12}{15}$$

Vậy số thích hợp là $15$.

**Đáp số.** $15$.
:::

:::exercise
Em hãy nhớ lại bài trước: $3:4$ viết thành phân số là gì? Rồi viết phân số đó với mẫu số $8$.

::hint
**Kiến thức:** $a:b=\dfrac{a}{b}$; nhân cả tử số và mẫu số với cùng một số.

**Gợi ý các bước:**
1. Viết $3:4$ thành phân số.
2. Nhân cả tử số và mẫu số với $2$.

::solution
Thương của phép chia số tự nhiên cho số tự nhiên khác $0$ có thể viết thành một phân số, tử số là số bị chia, mẫu số là số chia:
$$3:4=\frac{3}{4}$$

Muốn viết $\dfrac{3}{4}$ với mẫu số $8$: vì $4\times2=8$ nên ta nhân cả tử số và mẫu số với $2$:
$$\frac{3}{4}=\frac{3\times2}{4\times2}=\frac{6}{8}$$

Vậy $3:4$ viết thành phân số là $\dfrac{3}{4}$, và phân số đó viết với mẫu số $8$ là $\dfrac{6}{8}$.

**Đáp số.** $\dfrac{3}{4}$; $\dfrac{6}{8}$.
:::

:::exercise
Tìm số thích hợp: $\dfrac{8}{12}=\dfrac{?}{3}$.

::hint
**Kiến thức:** chia cả tử số và mẫu số cho cùng một số.

**Gợi ý các bước:**
1. $12$ chia mấy được $3$?
2. Chia tử số cho số đó.

::solution
Khi chia cả tử số và mẫu số của một phân số cho cùng một số tự nhiên khác $0$ (là ước chung của cả hai) thì được một phân số bằng phân số đã cho.

Mẫu số đã giảm từ $12$ xuống $3$. Vì $12:4=3$ nên ta chia cả tử số và mẫu số cho $4$:
$$\frac{8}{12}=\frac{8:4}{12:4}=\frac{2}{3}$$

Vậy số thích hợp là $2$.

**Đáp số.** $2$.
:::

:::exercise
Có thể viết $\dfrac{1}{2}=\dfrac{2}{3}$ bằng cách cùng cộng thêm $1$ vào tử số và mẫu số không? Vì sao?

::hint
**Kiến thức:** tính chất cơ bản chỉ dùng phép nhân và phép chia.

**Gợi ý các bước:**
1. Cộng $1$ vào tử số và mẫu số của $\dfrac{1}{2}$.
2. So sánh với cách nhân hoặc chia.

::solution
Cộng thêm $1$ vào cả tử số và mẫu số của $\dfrac{1}{2}$ thì được $\dfrac{1+1}{2+1}=\dfrac{2}{3}$.

Theo tính chất cơ bản của phân số, muốn được phân số bằng $\dfrac{1}{2}$ ta phải nhân (hoặc chia) cả tử số và mẫu số với cùng một số, chứ không phải cộng cùng một số. Tử số $1$ nhân với $2$ được $2$, nhưng mẫu số $2$ không nhân với $2$ để được $3$.

Phân số bằng $\dfrac{1}{2}$ khi nhân cả hai số với $2$ là:
$$\frac{1}{2}=\frac{1\times2}{2\times2}=\frac{2}{4}$$

Kiểm tra: đưa về cùng mẫu số $6$ thì $\dfrac{1}{2}=\dfrac{3}{6}$ và $\dfrac{2}{3}=\dfrac{4}{6}$; vì $3\neq4$ nên $\dfrac{1}{2}\neq\dfrac{2}{3}$.

Vậy không thể viết $\dfrac{1}{2}=\dfrac{2}{3}$ bằng cách cộng thêm $1$ vào cả tử số và mẫu số; phân số bằng $\dfrac{1}{2}$ là $\dfrac{2}{4}$.

**Đáp số.** Không, vì phải nhân cả hai số với cùng một số.
:::

:::exercise
Mai viết: "$\dfrac{2}{5}=\dfrac{6}{10}$ vì nhân tử số với $3$ và nhân mẫu số với $2$." Mai sai ở đâu? Hãy viết lại cho đúng.

::hint
**Kiến thức:** nhân tử số và mẫu số với cùng một số.

**Gợi ý các bước:**
1. Mai đã nhân hai số với số giống nhau chưa?
2. Nhân cả hai số với $3$.

::solution
Mai nhân tử số $2$ với $3$ nhưng lại nhân mẫu số $5$ với $2$. Hai số được nhân là khác nhau nên $\dfrac{2}{5}$ không bằng $\dfrac{6}{10}$.

Theo tính chất cơ bản của phân số, ta phải nhân cả tử số và mẫu số với cùng một số. Nhân cả hai với $3$:
$$\frac{2}{5}=\frac{2\times3}{5\times3}=\frac{6}{15}$$

Vậy Mai sai ở chỗ nhân tử số và mẫu số với hai số khác nhau; viết đúng là $\dfrac{2}{5}=\dfrac{6}{15}$.

**Đáp số.** $\dfrac{6}{15}$.
:::

:::exercise
Nam ăn $\dfrac{2}{4}$ chiếc bánh, Hà ăn $\dfrac{4}{8}$, Lan ăn $\dfrac{3}{6}$ (các chiếc bánh giống nhau). Hãy chia cả tử số và mẫu số để viết mỗi phân số thành phân số có tử số $1$, rồi cho biết ba bạn có ăn bằng nhau không.

::hint
**Kiến thức:** chia cả tử số và mẫu số cho cùng một số.

**Gợi ý các bước:**
1. Chia $\dfrac{2}{4}$ cho $2$, $\dfrac{4}{8}$ cho $4$, $\dfrac{3}{6}$ cho $3$.
2. So sánh kết quả.

::solution
Chia cả tử số và mẫu số cho cùng một số tự nhiên khác $0$ thì được phân số bằng phân số đã cho.

Phần bánh của Nam:
$$\frac{2}{4}=\frac{2:2}{4:2}=\frac{1}{2}$$

Phần bánh của Hà:
$$\frac{4}{8}=\frac{4:4}{8:4}=\frac{1}{2}$$

Phần bánh của Lan:
$$\frac{3}{6}=\frac{3:3}{6:3}=\frac{1}{2}$$

Cả ba phân số đều bằng $\dfrac{1}{2}$, và các chiếc bánh giống nhau nên ba bạn ăn số bánh như nhau.

Vậy ba bạn ăn bằng nhau, mỗi bạn ăn $\dfrac{1}{2}$ chiếc bánh.

**Đáp số.** Ba bạn ăn bằng nhau, mỗi bạn $\dfrac{1}{2}$ chiếc bánh.
:::

:::exercise Thử thách
Tìm các số tự nhiên $a$ và $b$ sao cho $\dfrac{3}{4}=\dfrac{a}{20}=\dfrac{27}{b}$.

::hint
**Kiến thức:** tìm số nhân của từng phân số từ mẫu số hoặc tử số đã biết.

**Gợi ý các bước:**
1. $4\times5=20$: tìm $a$.
2. $3\times9=27$: tìm $b$.

::solution
Ta có $\dfrac{3}{4}=\dfrac{a}{20}=\dfrac{27}{b}$, nên $a$ và $b$ được tìm bằng tính chất cơ bản của phân số.

Tìm $a$: mẫu số tăng từ $4$ lên $20$. Vì $20:4=5$ nên ta nhân cả tử số và mẫu số với $5$:
$$\frac{3}{4}=\frac{3\times5}{4\times5}=\frac{15}{20}$$

Suy ra $a=15$.

Tìm $b$: tử số tăng từ $3$ lên $27$. Vì $27:3=9$ nên ta nhân cả tử số và mẫu số với $9$:
$$\frac{3}{4}=\frac{3\times9}{4\times9}=\frac{27}{36}$$

Suy ra $b=36$.

Kiểm tra: $15:5=3$, $20:5=4$; $27:9=3$, $36:9=4$. Cả hai đều cho $\dfrac{3}{4}$. Đúng.

Vậy $a=15$ và $b=36$.

**Đáp số.** $a=15$, $b=36$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Tìm số thích hợp: $\dfrac{2}{3}=\dfrac{?}{12}$.
A. $4$.
B. $8$.
C. $5$.
D. $14$.
::key B
$3\times4=12$ nên $2\times4=8$. Phương án C là lỗi cộng thêm $3$ vào $2$.

::mc TH
Tìm số thích hợp: $\dfrac{6}{9}=\dfrac{?}{3}$.
A. $2$.
B. $3$.
C. $6$.
D. $1$.
::key A
$9:3=3$ nên $6:3=2$. Phương án C là lỗi giữ nguyên tử số.

::mc TH
Phân số nào bằng $\dfrac{1}{2}$?
A. $\dfrac{2}{3}$.
B. $\dfrac{3}{6}$.
C. $\dfrac{2}{5}$.
D. $\dfrac{1}{4}$.
::key B
$\dfrac{3}{6}=\dfrac{3:3}{6:3}=\dfrac{1}{2}$. Phương án A có tử số gấp đôi nhưng mẫu số không gấp đôi.

::mc TH
Tìm số thích hợp: $\dfrac{3}{5}=\dfrac{9}{?}$.
A. $8$.
B. $12$.
C. $15$.
D. $14$.
::key C
$3\times3=9$ nên $5\times3=15$. Phương án A là lỗi cộng thêm $3$ vào $5$.

::tf TH TH TH TH
Em xét các phân số.
a) $\dfrac{1}{2}=\dfrac{2}{4}$.
b) $\dfrac{1}{3}=\dfrac{2}{6}$.
c) $\dfrac{2}{5}=\dfrac{3}{6}$.
d) $\dfrac{4}{8}=\dfrac{1}{2}$.
::key Đ Đ S Đ
a) Đúng: nhân với $2$. b) Đúng: nhân với $2$. c) Sai: tử số nhân $1{,}5$ mà mẫu số không nhân với số tự nhiên đó. d) Đúng: chia cho $4$.

::sa TH
Tìm số thích hợp: $\dfrac{4}{5}=\dfrac{?}{20}$.
::key 16
$5\times4=20$ nên $4\times4=16$.

::sa TH
Tìm số thích hợp: $\dfrac{15}{20}=\dfrac{?}{4}$.
::key 3
$20:5=4$ nên $15:5=3$.
:::
