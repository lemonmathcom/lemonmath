---
title: Điểm ở giữa, trung điểm của đoạn thẳng
description: Em học nhận biết điểm nằm giữa hai điểm, trung điểm của đoạn thẳng, và tính độ dài đoạn thẳng khi biết trung điểm.
minutes: 15
---

:::goals
- Nhận biết ba điểm thẳng hàng và điểm nằm giữa hai điểm.
- Nhận biết trung điểm của đoạn thẳng: nằm giữa và cách đều hai đầu.
- Tính độ dài một nửa đoạn thẳng hoặc cả đoạn thẳng khi biết trung điểm.
:::

Nhà An, trường học và nhà Bình nằm trên cùng một con đường thẳng. Từ nhà An đến trường là $3$ km, từ trường đến nhà Bình cũng là $3$ km. Vị trí của trường so với hai nhà có gì đặc biệt?

Bài này giúp em gọi tên vị trí ấy và dùng nó để tính độ dài.

## Cùng khám phá

Ba điểm cùng nằm trên một đường thẳng gọi là **ba điểm thẳng hàng**. Trong ba điểm $A$, $M$, $B$ thẳng hàng, nếu đi từ $A$ đến $B$ ta phải qua $M$ thì $M$ **nằm giữa** $A$ và $B$.

Ta vẽ nhà An là điểm $A$, trường là điểm $M$, nhà Bình là điểm $B$:

:::diagram Điểm M nằm giữa A và B, hai đoạn MA và MB bằng nhau
alt: Đoạn thẳng AB nằm ngang với điểm M ở giữa; hai đoạn AM và MB có cùng một dấu gạch ngắn nên bằng nhau
point A 0,0 below
point M 3,0 below
point B 6,0 below
segment A B
mark A M 1
mark M B 1
:::

Điểm $M$ nằm giữa $A$ và $B$, và $MA=MB=3$ km. Điểm $M$ chia đoạn thẳng $AB$ thành hai đoạn bằng nhau. Ta gọi $M$ là **trung điểm** của đoạn thẳng $AB$.

:::theorem Trung điểm của đoạn thẳng
Điểm $M$ là trung điểm của đoạn thẳng $AB$ khi $M$ nằm giữa $A$ và $B$ và $MA=MB$.

Khi đó $AB=MA+MB=2\times MA$, nên $MA=AB:2$.
:::

Điều này đúng vì $MA$ và $MB$ bằng nhau, nên mỗi đoạn là $\dfrac{1}{2}$ đoạn $AB$. Ở bài trước em đã biết: một nửa của một số bằng số đó chia cho $2$.

## Ví dụ

Ta bắt đầu bằng việc tìm điểm nằm giữa.

:::example Điểm ở giữa
Trên một đường thẳng có bốn điểm $D$, $E$, $G$, $H$ theo thứ tự từ trái sang phải. Điểm nào nằm giữa $D$ và $H$? Điểm nào nằm giữa $E$ và $H$?

**Lời giải.** Đi từ $D$ đến $H$ ta lần lượt qua $E$ rồi $G$, nên $E$ và $G$ nằm giữa $D$ và $H$. Đi từ $E$ đến $H$ ta chỉ qua $G$, nên chỉ có $G$ nằm giữa $E$ và $H$.

Vậy $E$, $G$ nằm giữa $D$ và $H$; $G$ nằm giữa $E$ và $H$.
:::

Bây giờ em kiểm tra một điểm có là trung điểm không.

:::example Kiểm tra trung điểm
Cho $M$ nằm giữa $A$ và $B$.

a) $AM=5$ cm, $MB=5$ cm. $M$ có là trung điểm của $AB$ không?

b) $AM=4$ cm, $MB=6$ cm. $M$ có là trung điểm của $AB$ không?

**Lời giải.** $M$ nằm giữa rồi, ta chỉ cần so sánh $AM$ và $MB$.

a) $AM=MB=5$ cm, nên $M$ là trung điểm của $AB$.

b) $AM=4$ cm khác $MB=6$ cm, nên $M$ không là trung điểm của $AB$.

Vậy a) có; b) không.
:::

Tiếp theo, em tính độ dài một nửa đoạn thẳng.

:::example Tính $AM$
$M$ là trung điểm của đoạn thẳng $AB$ dài $12$ cm. Tính $AM$.

**Lời giải.** Vì $M$ là trung điểm nên $AM$ bằng một nửa $AB$, ta chia $AB$ cho $2$:
$$AM=12:2=6\ \text{(cm)}.$$
**Thử lại.** $MB=6$ cm, $AM+MB=6+6=12$ cm. Đúng.

Vậy $AM=6$ cm.
:::

Làm ngược lại, em tính cả đoạn thẳng.

:::example Tính $AB$
$M$ là trung điểm của đoạn thẳng $AB$ và $MA=7$ cm. Tính $AB$.

**Lời giải.** $AB$ gồm hai đoạn bằng nhau $MA$ và $MB$, nên ta nhân $MA$ với $2$:
$$AB=7\times2=14\ \text{(cm)}.$$
**Thử lại.** $14:2=7$. Đúng.

Vậy $AB=14$ cm.
:::

Cuối cùng, em giải bài toán ở đầu bài trong một tình huống khác.

:::example Đường đến trường
Nhà An, trường học và nhà Bình nằm trên một đường thẳng. Trường học là trung điểm của đoạn đường từ nhà An đến nhà Bình, dài $8$ km. Hỏi từ nhà An đến trường dài bao nhiêu ki-lô-mét?

**Lời giải.** Trường là trung điểm nên khoảng cách từ nhà An đến trường bằng một nửa $8$ km:
$$8:2=4\ \text{(km)}.$$
**Thử lại.** $4+4=8$. Đúng.

Vậy từ nhà An đến trường dài $4$ km.
:::

:::warning Những lỗi em hay gặp
- **Nằm giữa chưa chắc là trung điểm.** Sai: $M$ nằm giữa $A$ và $B$ nên $M$ là trung điểm. Vì sao sai: nếu $AM=3$ cm, $MB=7$ cm thì $M$ vẫn nằm giữa nhưng hai đoạn không bằng nhau. Đúng: còn phải có $MA=MB$.
- **Quên chia đôi.** Sai: $M$ là trung điểm của $AB=12$ cm nên $AM=12$ cm. Vì sao sai: $AM$ chỉ là một nửa $AB$. Đúng: $AM=12:2=6$ cm.
- **Quên nhân đôi.** Sai: $MA=7$ cm nên $AB=7$ cm. Vì sao sai: $AB$ gồm hai đoạn $MA$ và $MB$. Đúng: $AB=7\times2=14$ cm.
- **Quên đơn vị.** Sai: "Đáp số: $6$". Đúng: "Đáp số: $6$ cm".
:::

## Thuật ngữ

:::terms
- đoạn thẳng | line segment
- đường thẳng | straight line
- ba điểm thẳng hàng | three points in a straight line
- điểm nằm giữa | point between two points
- trung điểm | midpoint
- độ dài | length
- bằng nhau | equal
- chia đôi | halve
:::

## Tóm tắt

- Ba điểm cùng nằm trên một đường thẳng là ba điểm thẳng hàng.
- Điểm $M$ nằm giữa $A$ và $B$ khi đi từ $A$ đến $B$ phải qua $M$.
- $M$ là trung điểm của $AB$ khi $M$ nằm giữa $A$, $B$ và $MA=MB$.
- Khi $M$ là trung điểm: $MA=AB:2$ và $AB=MA\times2$.
- Ghi đơn vị đo độ dài trong đáp số.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Trên một đường thẳng có bốn điểm $P$, $Q$, $R$, $S$ theo thứ tự từ trái sang phải.

a) Điểm nào nằm giữa $P$ và $S$?

b) Điểm nào nằm giữa $Q$ và $S$?

c) Điểm nào nằm giữa $P$ và $Q$?

::hint
**Kiến thức:** $M$ nằm giữa $A$ và $B$ khi đi từ $A$ đến $B$ phải qua $M$.

**Gợi ý các bước:**
1. Đi từ điểm đầu đến điểm cuối, ghi các điểm đi qua.
2. Không tính hai điểm đầu và cuối.

::solution
a) Đi từ $P$ đến $S$ qua $Q$ và $R$, nên $Q$ và $R$ nằm giữa.

b) Đi từ $Q$ đến $S$ chỉ qua $R$, nên $R$ nằm giữa.

c) Đi từ $P$ đến $Q$ không qua điểm nào khác, nên không có điểm nào nằm giữa.

**Đáp số.** a) $Q$, $R$; b) $R$; c) không có điểm nào.
:::

:::exercise
$M$ là trung điểm của đoạn thẳng $AB$. Tính $AM$ khi:

a) $AB=8$ cm.

b) $AB=20$ cm.

c) $AB=30$ cm.

::hint
**Kiến thức:** $AM=AB:2$.

**Gợi ý các bước:**
1. Lấy độ dài $AB$.
2. Chia cho $2$ rồi thử lại.

::solution
a) $AM=8:2=4$ (cm).

b) $AM=20:2=10$ (cm).

c) $AM=30:2=15$ (cm).

**Đáp số.** a) $4$ cm; b) $10$ cm; c) $15$ cm.
:::

:::exercise
Em hãy nhớ lại bài trước về một phần mấy. Tìm $\dfrac{1}{2}$ của $18$. Rồi cho $M$ là trung điểm của đoạn thẳng $AB=18$ cm, tính $AM$ và so sánh.

::hint
**Kiến thức:** một phần hai của một số bằng số đó chia cho $2$; $AM=AB:2$.

**Gợi ý các bước:**
1. Tính $18:2$.
2. So sánh với $AM$.

::solution
$\dfrac{1}{2}$ của $18$ là $18:2=9$. Vì $M$ là trung điểm nên $AM=18:2=9$ cm, bằng $\dfrac{1}{2}$ của $AB$.

**Đáp số.** $9$ và $AM=9$ cm.
:::

:::exercise
$M$ là trung điểm của đoạn thẳng $AB$. Tính $AB$ khi:

a) $MA=5$ cm.

b) $MA=9$ cm.

c) $MB=12$ cm.

::hint
**Kiến thức:** $AB=MA\times2$ và $MA=MB$.

**Gợi ý các bước:**
1. Lấy độ dài một nửa đoạn thẳng.
2. Nhân với $2$ rồi thử lại.

::solution
a) $AB=5\times2=10$ (cm).

b) $AB=9\times2=18$ (cm).

c) $MA=MB=12$ cm nên $AB=12\times2=24$ (cm).

**Đáp số.** a) $10$ cm; b) $18$ cm; c) $24$ cm.
:::

:::exercise
Cho $M$ nằm giữa $A$ và $B$. $M$ có là trung điểm của $AB$ không? Vì sao?

a) $AM=3$ cm, $MB=3$ cm.

b) $AM=2$ cm, $MB=5$ cm.

c) Điểm $M$ không nằm trên đường thẳng $AB$ nhưng $MA=MB=4$ cm.

::hint
**Kiến thức:** $M$ là trung điểm của $AB$ khi $M$ nằm giữa $A$, $B$ và $MA=MB$.

**Gợi ý các bước:**
1. $M$ có nằm giữa $A$ và $B$ không?
2. $MA$ có bằng $MB$ không?

::solution
a) $M$ nằm giữa và $AM=MB=3$ cm, nên $M$ là trung điểm.

b) $AM=2$ cm khác $MB=5$ cm, nên $M$ không là trung điểm.

c) $MA=MB$ nhưng $M$ không nằm giữa $A$ và $B$ (không thẳng hàng), nên $M$ không là trung điểm.

**Đáp số.** a) Có; b) không; c) không.
:::

:::exercise
Hà nói: "$AB=10$ cm, $M$ nằm giữa $A$ và $B$ nên $AM=5$ cm". Hà sai ở đâu? Hãy cho một ví dụ cho thấy Hà sai.

::hint
**Kiến thức:** điểm nằm giữa chưa chắc là trung điểm.

**Gợi ý các bước:**
1. Có thể chọn $AM$ khác $5$ cm mà $M$ vẫn nằm giữa không?
2. Tính $MB$ rồi so sánh.

::solution
Hà nhầm điểm nằm giữa với trung điểm. Ví dụ $AM=3$ cm thì $MB=10-3=7$ cm. Khi đó $M$ nằm giữa $A$ và $B$ nhưng $AM\neq MB$, nên $AM$ không bằng $5$ cm.

**Đáp số.** Hà thiếu điều kiện $MA=MB$.
:::

:::exercise
a) Một thanh gỗ dài $16$ dm được cưa tại trung điểm thành hai đoạn. Hỏi mỗi đoạn dài bao nhiêu đề-xi-mét?

b) Trường học là trung điểm của đoạn đường từ nhà Mai đến nhà Lan. Từ nhà Mai đến trường dài $6$ km. Hỏi từ nhà Mai đến nhà Lan dài bao nhiêu ki-lô-mét?

::hint
**Kiến thức:** khi $M$ là trung điểm của $AB$ thì $MA=AB:2$ và $AB=MA\times2$.

**Gợi ý các bước:**
1. Đề cho cả đoạn hay một nửa đoạn?
2. Chọn chia hoặc nhân với $2$, ghi đáp số có đơn vị.

::solution
a) Mỗi đoạn dài $16:2=8$ (dm).

b) Cả đoạn đường dài $6\times2=12$ (km).

**Đáp số.** a) $8$ dm; b) $12$ km.
:::

:::exercise Thử thách
Đoạn thẳng $AB$ dài $16$ cm. $M$ là trung điểm của $AB$, $N$ là trung điểm của $AM$. Tính $AM$, $AN$ và $NB$.

::hint
**Kiến thức:** trung điểm chia đoạn thẳng thành hai đoạn bằng nhau. $N$ nằm giữa $A$ và $M$, còn $M$ nằm giữa $N$ và $B$.

**Gợi ý các bước:**
1. Tính $AM$, rồi $AN$.
2. $NB=NM+MB$.

::solution
$AM=16:2=8$ (cm). $N$ là trung điểm của $AM$ nên $AN=NM=8:2=4$ (cm). $M$ nằm giữa $N$ và $B$ nên $NB=NM+MB=4+8=12$ (cm).

**Đáp số.** $AM=8$ cm; $AN=4$ cm; $NB=12$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
$M$ là trung điểm của đoạn thẳng $AB=14$ cm. Độ dài $AM$ là
A. $28$ cm.
B. $7$ cm.
C. $14$ cm.
D. $12$ cm.
::key B
$AM=14:2=7$ cm. Phương án A là lỗi nhân $14\times2$, phương án C là lỗi quên chia đôi.

::mc
$M$ là trung điểm của đoạn thẳng $CD$ và $MC=6$ cm. Độ dài $CD$ là
A. $3$ cm.
B. $6$ cm.
C. $12$ cm.
D. $36$ cm.
::key C
$CD=6\times2=12$ cm. Phương án A là lỗi chia đôi thay vì nhân đôi.

::mc
Trên một đường thẳng có bốn điểm $E$, $F$, $G$, $H$ theo thứ tự từ trái sang phải. Những điểm nào nằm giữa $E$ và $H$?
A. Chỉ $F$.
B. $F$ và $G$.
C. Chỉ $G$.
D. Không có điểm nào.
::key B
Đi từ $E$ đến $H$ ta qua $F$ rồi $G$. Phương án A bỏ sót $G$.

::mc
Điểm $M$ là trung điểm của đoạn thẳng $AB$ khi
A. $M$ nằm giữa $A$ và $B$.
B. $MA=MB$.
C. $M$ nằm giữa $A$, $B$ và $MA=MB$.
D. $AB=2$ cm.
::key C
Cần cả hai điều kiện: nằm giữa và cách đều hai đầu. Phương án A và B mỗi cái chỉ có một điều kiện.

::tf
$M$ là trung điểm của đoạn thẳng $AB=18$ cm.
a) $AM=MB$.
b) $AM=9$ cm.
c) $AB=2\times AM$.
d) $MB=18$ cm.
::key Đ Đ Đ S
a) Đúng: $M$ là trung điểm. b) Đúng: $18:2=9$. c) Đúng: $2\times9=18$. d) Sai: $MB=9$ cm.

::sa
$M$ là trung điểm của đoạn thẳng $AB=26$ cm. Tính $AM$ (đơn vị: cm).
::key 13
$AM=26:2=13$ (cm).

::sa
Trường học là trung điểm của đoạn đường từ nhà An đến nhà Bình, dài $18$ km. Hỏi từ nhà An đến trường dài bao nhiêu ki-lô-mét?
::key 9
$18:2=9$ (km).
:::
