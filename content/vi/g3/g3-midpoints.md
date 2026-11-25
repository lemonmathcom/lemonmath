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

Nhà An, trường học và nhà Bình nằm trên cùng một con đường thẳng. Từ nhà An đến trường là $3$ km, từ trường đến nhà Bình cũng là $3$ km. Em thử nhìn xem: trường đứng ở đâu so với hai nhà? Vị trí ấy có gì đặc biệt?

Vị trí ấy có một cái tên riêng. Biết tên rồi, em tính được độ dài mà không cần đo cả con đường. Ta sẽ gọi tên nó, rồi dùng nó để tính.

## Cùng khám phá

Hãy nghĩ đến một con đường thẳng. Ba điểm cùng nằm trên một đường thẳng gọi là **ba điểm thẳng hàng**. Lấy ba điểm $A$, $M$, $B$ thẳng hàng. Nếu đi từ $A$ đến $B$ ta phải đi qua $M$ thì ta nói $M$ **nằm giữa** $A$ và $B$.

Ta vẽ lại con đường ấy: nhà An là điểm $A$, trường là điểm $M$, nhà Bình là điểm $B$:

:::diagram Điểm M nằm giữa A và B, hai đoạn MA và MB bằng nhau
alt: Đoạn thẳng AB nằm ngang với điểm M ở giữa; hai đoạn AM và MB có cùng một dấu gạch ngắn nên bằng nhau
point A 0,0 below
point M 3,0 below
point B 6,0 below
segment A B
mark A M 1
mark M B 1
:::

Điểm $M$ nằm giữa $A$ và $B$, lại có $MA=MB=3$ km. Nghĩa là $M$ chia đoạn thẳng $AB$ thành hai đoạn bằng nhau. Điểm như thế có tên riêng: ta gọi $M$ là **trung điểm** của đoạn thẳng $AB$.

:::theorem Trung điểm của đoạn thẳng
Điểm $M$ là trung điểm của đoạn thẳng $AB$ khi $M$ nằm giữa $A$ và $B$ và $MA=MB$.

Khi đó $AB=MA+MB=2\times MA$, nên $MA=AB:2$.
:::

Vì sao ta chia đôi? Vì $MA$ và $MB$ bằng nhau, nên mỗi đoạn là $\dfrac{1}{2}$ đoạn $AB$. Ở bài trước em đã biết: một nửa của một số bằng số đó chia cho $2$. Vậy tìm một nửa đoạn thẳng cũng chỉ là một phép chia.

## Ví dụ

Trước hết, ta luyện cách nhận ra điểm nằm giữa: đi từ điểm này sang điểm kia và xem mình đi qua những điểm nào.

:::example Điểm ở giữa
Trên một đường thẳng có bốn điểm $D$, $E$, $G$, $H$ theo thứ tự từ trái sang phải. Điểm nào nằm giữa $D$ và $H$? Điểm nào nằm giữa $E$ và $H$?

**Lời giải.** Đi từ $D$ đến $H$ ta lần lượt qua $E$ rồi $G$, nên $E$ và $G$ nằm giữa $D$ và $H$. Đi từ $E$ đến $H$ ta chỉ qua $G$, nên chỉ có $G$ nằm giữa $E$ và $H$.

Vậy $E$, $G$ nằm giữa $D$ và $H$; $G$ nằm giữa $E$ và $H$.
:::

Nằm giữa thôi thì chưa đủ để là trung điểm. Ta thử kiểm tra xem một điểm có là trung điểm hay không.

:::example Kiểm tra trung điểm
Cho $M$ nằm giữa $A$ và $B$.

a) $AM=5$ cm, $MB=5$ cm. $M$ có là trung điểm của $AB$ không?

b) $AM=4$ cm, $MB=6$ cm. $M$ có là trung điểm của $AB$ không?

**Lời giải.** $M$ nằm giữa rồi, ta chỉ cần so sánh $AM$ và $MB$.

a) $AM=MB=5$ cm, nên $M$ là trung điểm của $AB$.

b) $AM=4$ cm khác $MB=6$ cm, nên $M$ không là trung điểm của $AB$.

Vậy a) có; b) không.
:::

Biết trung điểm rồi thì tính được độ dài một nửa đoạn thẳng. Em cùng làm nhé.

:::example Tính $AM$
$M$ là trung điểm của đoạn thẳng $AB$ dài $12$ cm. Tính $AM$.

**Lời giải.** Vì $M$ là trung điểm nên $AM$ bằng một nửa $AB$, ta chia $AB$ cho $2$:
$$AM=12:2=6\ \text{(cm)}.$$
**Thử lại.** $MB=6$ cm, $AM+MB=6+6=12$ cm. Đúng.

Vậy $AM=6$ cm.
:::

Bây giờ làm ngược lại: biết một nửa, em tìm cả đoạn thẳng.

:::example Tính $AB$
$M$ là trung điểm của đoạn thẳng $AB$ và $MA=7$ cm. Tính $AB$.

**Lời giải.** $AB$ gồm hai đoạn bằng nhau $MA$ và $MB$, nên ta nhân $MA$ với $2$:
$$AB=7\times2=14\ \text{(cm)}.$$
**Thử lại.** $14:2=7$. Đúng.

Vậy $AB=14$ cm.
:::

Ta quay lại con đường của An và Bình, lần này với con số khác.

:::example Đường đến trường
Nhà An, trường học và nhà Bình nằm trên một đường thẳng. Trường học là trung điểm của đoạn đường từ nhà An đến nhà Bình, dài $8$ km. Hỏi từ nhà An đến trường dài bao nhiêu ki-lô-mét?

**Lời giải.** Trường là trung điểm nên khoảng cách từ nhà An đến trường bằng một nửa $8$ km:
$$8:2=4\ \text{(km)}.$$
**Thử lại.** $4+4=8$. Đúng.

Vậy từ nhà An đến trường dài $4$ km.
:::

:::warning Những lỗi em hay gặp
- **Nằm giữa chưa chắc là trung điểm.** Sai: $M$ nằm giữa $A$ và $B$ nên $M$ là trung điểm. Vì sao sai: giả sử $AM=3$ cm, $MB=7$ cm. Khi đó $M$ vẫn nằm giữa, nhưng hai đoạn không bằng nhau. Đúng: còn phải có $MA=MB$.
- **Quên chia đôi.** Sai: $M$ là trung điểm của $AB=12$ cm nên $AM=12$ cm. Vì sao sai: $AM$ chỉ là một nửa của $AB$. Đúng: $AM=12:2=6$ cm.
- **Quên nhân đôi.** Sai: $MA=7$ cm nên $AB=7$ cm. Vì sao sai: $AB$ gồm hai đoạn $MA$ và $MB$. Đúng: $AB=7\times2=14$ cm.
- **Quên đơn vị.** Sai: "Đáp số: $6$". Đúng: "Đáp số: $6$ cm".
Chỗ này nhiều bạn hay nhầm, em đừng lo. Làm xong, em thử lại bằng phép tính ngược là sẽ thấy ngay.
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
Còn câu hỏi ở đầu bài? Trường nằm giữa hai nhà và cách đều hai nhà, nên trường là trung điểm của con đường. Em nhớ: muốn tìm một nửa thì chia đôi, muốn tìm cả đoạn thì nhân đôi. Em làm thêm vài bài luyện tập để quen tay nhé.

## Luyện tập

Mỗi bài có phần kiến thức cần nhớ và một gợi ý để em bắt đầu. Em thử tự làm trước đã. Nếu bí, em đọc gợi ý, rồi mới mở lời giải để so với bài của mình.

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
Bài giải

Bốn điểm $P$, $Q$, $R$, $S$ nằm trên một đường thẳng theo thứ tự từ trái sang phải.

a) Đi từ $P$ đến $S$ ta đi qua $Q$ rồi qua $R$. Do đó $Q$ và $R$ nằm giữa $P$ và $S$.

b) Đi từ $Q$ đến $S$ ta chỉ đi qua $R$. Do đó $R$ nằm giữa $Q$ và $S$.

c) Đi từ $P$ đến $Q$ ta không đi qua điểm nào khác. Do đó không có điểm nào nằm giữa $P$ và $Q$.

Vậy a) $Q$ và $R$ nằm giữa $P$ và $S$; b) $R$ nằm giữa $Q$ và $S$; c) không có điểm nào nằm giữa $P$ và $Q$.

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
Bài giải

Vì $M$ là trung điểm của đoạn thẳng $AB$ nên $M$ chia đoạn thẳng $AB$ thành hai đoạn bằng nhau, tức là $AM$ bằng một nửa của $AB$. Ta tính $AM=AB:2$.

a) $AM=8:2=4$ (cm).

b) $AM=20:2=10$ (cm).

c) $AM=30:2=15$ (cm).

Vậy $AM$ lần lượt bằng $4$ cm, $10$ cm, $15$ cm.

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
Bài giải

Một phần hai của $18$ là:
$$18:2=9$$

Vì $M$ là trung điểm của đoạn thẳng $AB$ nên $AM$ bằng một nửa của $AB$. Độ dài đoạn $AM$ là:
$$AM=18:2=9\ \text{(cm)}$$

So sánh: $\dfrac{1}{2}$ của $18$ là $9$ và $AM=9$ cm, nên $AM$ bằng $\dfrac{1}{2}$ của $AB$.

Vậy $\dfrac{1}{2}$ của $18$ là $9$, và $AM=9$ cm, bằng $\dfrac{1}{2}$ của $AB$.

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
Bài giải

Vì $M$ là trung điểm của đoạn thẳng $AB$ nên $MA=MB$ và $AB$ gấp đôi $MA$. Ta tính $AB=MA\times2$.

a) $AB=5\times2=10$ (cm).

b) $AB=9\times2=18$ (cm).

c) Vì $M$ là trung điểm nên $MA=MB=12$ cm. Do đó $AB=12\times2=24$ (cm).

Vậy $AB$ lần lượt bằng $10$ cm, $18$ cm, $24$ cm.

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
Bài giải

Điểm $M$ là trung điểm của đoạn thẳng $AB$ khi $M$ nằm giữa $A$ và $B$ và $MA=MB$. Ta kiểm tra hai điều kiện này.

a) $M$ nằm giữa $A$ và $B$, và $AM=MB=3$ cm. Cả hai điều kiện đều thoả mãn nên $M$ là trung điểm của $AB$.

b) $M$ nằm giữa $A$ và $B$ nhưng $AM=2$ cm khác $MB=5$ cm. Điều kiện $MA=MB$ không thoả mãn nên $M$ không là trung điểm của $AB$.

c) $M$ không nằm trên đường thẳng $AB$ nên $M$ không nằm giữa $A$ và $B$. Dù $MA=MB=4$ cm, điều kiện nằm giữa không thoả mãn nên $M$ không là trung điểm của $AB$.

Vậy $M$ là trung điểm của $AB$ ở câu a); không là trung điểm ở các câu b) và c).

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
Bài giải

Hà cho rằng $M$ nằm giữa $A$ và $B$ thì $AM=5$ cm, tức là $AM$ bằng một nửa của $AB=10$ cm. Nhưng muốn $AM$ bằng một nửa $AB$ thì $M$ phải là trung điểm, nghĩa là ngoài việc nằm giữa còn phải có $MA=MB$. Hà đã nhầm điểm nằm giữa với trung điểm.

Ví dụ: lấy $AM=3$ cm. Vì $M$ nằm giữa $A$ và $B$ nên
$$MB=AB-AM=10-3=7\ \text{(cm)}.$$

Khi đó $M$ nằm giữa $A$ và $B$ nhưng $AM=3$ cm khác $MB=7$ cm, nên $M$ không là trung điểm và $AM$ không bằng $5$ cm.

Vậy Hà sai vì thiếu điều kiện $MA=MB$.

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
Bài giải

a) Thanh gỗ được cưa tại trung điểm nên hai đoạn bằng nhau, mỗi đoạn dài bằng một nửa thanh gỗ. Mỗi đoạn dài là:
$$16:2=8\ \text{(dm)}$$

b) Trường học là trung điểm của đoạn đường từ nhà Mai đến nhà Lan nên quãng đường từ nhà Mai đến trường bằng một nửa quãng đường từ nhà Mai đến nhà Lan. Từ nhà Mai đến nhà Lan dài là:
$$6\times2=12\ \text{(km)}$$

Vậy mỗi đoạn gỗ dài $8$ dm và từ nhà Mai đến nhà Lan dài $12$ km.

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
Bài giải

Vì $M$ là trung điểm của $AB$ nên $AM$ bằng một nửa của $AB$:
$$AM=16:2=8\ \text{(cm)}$$

Vì $N$ là trung điểm của $AM$ nên $AN=NM$ và mỗi đoạn bằng một nửa của $AM$:
$$AN=NM=8:2=4\ \text{(cm)}$$

Vì $M$ là trung điểm của $AB$ nên $MB=AM=8$ cm. Điểm $M$ nằm giữa $N$ và $B$ nên
$$NB=NM+MB=4+8=12\ \text{(cm)}.$$

Kiểm tra: $NB=AB-AN=16-4=12$ (cm). Khớp với kết quả trên.

Vậy $AM=8$ cm, $AN=4$ cm và $NB=12$ cm.

**Đáp số.** $AM=8$ cm; $AN=4$ cm; $NB=12$ cm.
:::

## Kiểm tra mini

:::quiz
::mc TH
$M$ là trung điểm của đoạn thẳng $AB=14$ cm. Độ dài $AM$ là
A. $28$ cm.
B. $7$ cm.
C. $14$ cm.
D. $12$ cm.
::key B
$AM=14:2=7$ cm. Phương án A là lỗi nhân $14\times2$, phương án C là lỗi quên chia đôi.

::mc TH
$M$ là trung điểm của đoạn thẳng $CD$ và $MC=6$ cm. Độ dài $CD$ là
A. $3$ cm.
B. $6$ cm.
C. $12$ cm.
D. $36$ cm.
::key C
$CD=6\times2=12$ cm. Phương án A là lỗi chia đôi thay vì nhân đôi.

::mc NB
Trên một đường thẳng có bốn điểm $E$, $F$, $G$, $H$ theo thứ tự từ trái sang phải. Những điểm nào nằm giữa $E$ và $H$?
A. Chỉ $F$.
B. $F$ và $G$.
C. Chỉ $G$.
D. Không có điểm nào.
::key B
Đi từ $E$ đến $H$ ta qua $F$ rồi $G$. Phương án A bỏ sót $G$.

::mc NB
Điểm $M$ là trung điểm của đoạn thẳng $AB$ khi
A. $M$ nằm giữa $A$ và $B$.
B. $MA=MB$.
C. $M$ nằm giữa $A$, $B$ và $MA=MB$.
D. $AB=2$ cm.
::key C
Cần cả hai điều kiện: nằm giữa và cách đều hai đầu. Phương án A và B mỗi cái chỉ có một điều kiện.

::tf NB TH TH TH
$M$ là trung điểm của đoạn thẳng $AB=18$ cm.
a) $AM=MB$.
b) $AM=9$ cm.
c) $AB=2\times AM$.
d) $MB=18$ cm.
::key Đ Đ Đ S
a) Đúng: $M$ là trung điểm. b) Đúng: $18:2=9$. c) Đúng: $2\times9=18$. d) Sai: $MB=9$ cm.

::sa TH
$M$ là trung điểm của đoạn thẳng $AB=26$ cm. Tính $AM$ (đơn vị: cm).
::key 13
$AM=26:2=13$ (cm).

::sa TH
Trường học là trung điểm của đoạn đường từ nhà An đến nhà Bình, dài $18$ km. Hỏi từ nhà An đến trường dài bao nhiêu ki-lô-mét?
::key 9
$18:2=9$ (km).
:::
