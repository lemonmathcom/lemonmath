---
title: Thể tích của hình lập phương
description: Em học tính thể tích hình lập phương bằng cách lấy cạnh nhân cạnh nhân cạnh, đổi đơn vị đo thể tích và giải bài toán có lời văn.
minutes: 15
---

:::goals
- Biết công thức tính thể tích hình lập phương: $V=a\times a\times a$.
- Tính được thể tích hình lập phương có cạnh là số tự nhiên hoặc số thập phân.
- Đổi cạnh về cùng một đơn vị rồi mới tính thể tích, ghi đúng đơn vị $\text{cm}^3$, $\text{dm}^3$, $\text{m}^3$.
- Giải bài toán có lời văn liên quan đến thể tích hình lập phương.
:::

Một bể cá hình lập phương có cạnh $4\ \text{dm}$. Bể chứa được nhiều nhất bao nhiêu lít nước?

Em đã biết tính thể tích hình hộp chữ nhật. Bài này cho em một cách tính ngắn gọn dành riêng cho hình lập phương.

## Cùng khám phá

Em xếp các khối nhỏ, mỗi khối có cạnh $1\ \text{cm}$ và thể tích $1\ \text{cm}^3$, thành một hình lập phương lớn có cạnh $3\ \text{cm}$.

- Lớp dưới cùng có $3$ hàng, mỗi hàng $3$ khối: $3\times3=9$ (khối).
- Có $3$ lớp như vậy: $9\times3=27$ (khối).
- Vậy thể tích hình lập phương lớn là $27\ \text{cm}^3$.

Em làm tương tự với các cạnh khác:

| Cạnh | $1\ \text{cm}$ | $2\ \text{cm}$ | $3\ \text{cm}$ | $4\ \text{cm}$ |
|---|---|---|---|---|
| Số khối nhỏ | $1\times1\times1=1$ | $2\times2\times2=8$ | $3\times3\times3=27$ | $4\times4\times4=64$ |

Em thấy không: số khối nhỏ chính là **cạnh nhân cạnh nhân cạnh**.

:::diagram Hình lập phương có cạnh $a$
alt: Hình lập phương ABCD.A'B'C'D' với các cạnh khuất vẽ nét đứt, cạnh AB được ghi là a
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,3 left
point B' 3,3 above
point C' 4.2,4.4 above-right
point D' 1.2,4.4 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
label 1.5,-0.5 "a"
:::

:::theorem Thể tích hình lập phương
Muốn tính thể tích hình lập phương, ta lấy cạnh nhân với cạnh rồi nhân với cạnh:
$$V=a\times a\times a,$$
trong đó $a$ là độ dài cạnh. Cạnh đo bằng đơn vị nào thì thể tích có đơn vị khối tương ứng: cm thì $\text{cm}^3$, dm thì $\text{dm}^3$, m thì $\text{m}^3$.
:::

**Vì sao đúng?** Hình lập phương là hình hộp chữ nhật có chiều dài, chiều rộng, chiều cao đều bằng $a$. Thể tích hình hộp chữ nhật bằng diện tích đáy nhân chiều cao. Diện tích đáy là $a\times a$ và chiều cao là $a$, nên $V=a\times a\times a$.

Em nhớ thêm: $1\ \text{dm}^3=1$ lít và $1\ \text{m}^3=1000\ \text{dm}^3$.

## Ví dụ

Ta bắt đầu với một hình lập phương có cạnh là số tự nhiên.

:::example Tính thể tích hình lập phương có cạnh $5\ \text{cm}$
**Lời giải.** Áp dụng công thức $V=a\times a\times a$ với $a=5$, ta có:
$$V=5\times5\times5=125\ (\text{cm}^3).$$
Vậy thể tích hình lập phương là $125\ \text{cm}^3$.
:::

Bây giờ em trả lời câu hỏi ở đầu bài.

:::example Bể cá
Một bể cá hình lập phương có cạnh $4\ \text{dm}$. Hỏi bể chứa được nhiều nhất bao nhiêu lít nước?

**Bài giải.** Thể tích của bể cá là:
$$4\times4\times4=64\ (\text{dm}^3).$$
Vì $1\ \text{dm}^3=1$ lít nên bể chứa được nhiều nhất $64$ lít nước.

**Đáp số.** $64$ lít.
:::

Cạnh cũng có thể là số thập phân.

:::example Thùng nước
Một thùng nước hình lập phương có cạnh $0{,}5\ \text{m}$. Tính thể tích thùng theo $\text{m}^3$, rồi đổi ra lít.

**Bài giải.** Thể tích của thùng là:
$$0{,}5\times0{,}5\times0{,}5=0{,}25\times0{,}5=0{,}125\ (\text{m}^3).$$
Vì $1\ \text{m}^3=1000\ \text{dm}^3$ nên $0{,}125\ \text{m}^3=125\ \text{dm}^3=125$ lít.

**Đáp số.** $0{,}125\ \text{m}^3$; $125$ lít.
:::

Khi đề cho cạnh và đòi thể tích ở đơn vị khác, em đổi cạnh trước.

:::example Tính thể tích theo $\text{dm}^3$
Tính thể tích hình lập phương có cạnh $20\ \text{cm}$, viết kết quả theo $\text{dm}^3$.

**Lời giải.** Ta đổi cạnh về dm: $20\ \text{cm}=2\ \text{dm}$. Thể tích là:
$$2\times2\times2=8\ (\text{dm}^3).$$
**Kiểm tra.** $20\times20\times20=8000\ (\text{cm}^3)$, mà $1\ \text{dm}^3=1000\ \text{cm}^3$ nên $8000\ \text{cm}^3=8\ \text{dm}^3$. Đúng.

Vậy thể tích hình lập phương là $8\ \text{dm}^3$.
:::

Bài sau cần nhiều bước hơn, nên em đi từng bước *Hiểu đề, Tìm cách giải, Giải, Nhìn lại*.

:::example Xếp khối gỗ vào hộp
Một hộp nhựa hình lập phương có cạnh $6\ \text{cm}$. Cô giáo xếp đầy hộp bằng các khối gỗ hình lập phương cạnh $2\ \text{cm}$. Hỏi cô xếp được bao nhiêu khối gỗ?

**Bài giải.**

*Hiểu đề.* Đề cho cạnh hộp $6\ \text{cm}$ và cạnh khối gỗ $2\ \text{cm}$. Đề hỏi số khối gỗ xếp đầy hộp.

*Tìm cách giải.* Ta lấy thể tích hộp chia cho thể tích một khối gỗ.

*Giải.* Thể tích hộp là $6\times6\times6=216\ (\text{cm}^3)$. Thể tích một khối gỗ là $2\times2\times2=8\ (\text{cm}^3)$. Số khối gỗ là:
$$216:8=27\ (\text{khối}).$$
*Nhìn lại.* Cách khác: mỗi cạnh xếp được $6:2=3$ khối, nên có $3\times3\times3=27$ khối, giống kết quả trên. Nếu khối gỗ có cạnh $4\ \text{cm}$ thì sao? Mỗi cạnh chỉ xếp được $1$ khối vì $6$ không chia hết cho $4$, nên chỉ xếp được $1$ khối, dù $216:64=3{,}375$. Chia thể tích chỉ đúng khi các khối xếp vừa khít.

**Đáp số.** $27$ khối gỗ.
:::

:::warning Những lỗi em hay gặp
- **Nhân cạnh với $3$.** Sai: $5\times3=15\ \text{cm}^3$. Vì sao sai: hình lập phương có $3$ kích thước, mỗi kích thước bằng $a$, nên phải nhân $3$ lần cạnh với nhau. Đúng: $5\times5\times5=125\ \text{cm}^3$.
- **Ghi sai đơn vị.** Sai: "Đáp số: $125\ \text{cm}^2$". Vì sao sai: $\text{cm}^2$ là đơn vị diện tích. Đúng: $125\ \text{cm}^3$.
- **Quên đổi đơn vị.** Sai: cạnh $20\ \text{cm}$ thì thể tích là $20\times20\times20=8000\ \text{dm}^3$. Vì sao sai: $8000$ là số $\text{cm}^3$, không phải $\text{dm}^3$. Đúng: $20\ \text{cm}=2\ \text{dm}$, thể tích $8\ \text{dm}^3$.
:::

## Thuật ngữ

:::terms
- thể tích | volume
- hình lập phương | cube
- cạnh | edge
- xăng-ti-mét khối | cubic centimetre
- đề-xi-mét khối | cubic decimetre
- mét khối | cubic metre
- lít | litre
- hình hộp chữ nhật | cuboid
:::

## Tóm tắt

- Thể tích hình lập phương cạnh $a$ là $V=a\times a\times a$.
- Cạnh đo bằng đơn vị nào thì thể tích có đơn vị khối tương ứng ($\text{cm}^3$, $\text{dm}^3$, $\text{m}^3$).
- Cần đổi cạnh về cùng đơn vị mong muốn trước khi tính. Em nhớ $1\ \text{dm}^3=1$ lít và $1\ \text{m}^3=1000\ \text{dm}^3$.
- Muốn biết xếp được bao nhiêu khối nhỏ, em chia thể tích hoặc đếm số khối theo mỗi cạnh.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính thể tích hình lập phương có cạnh $7\ \text{cm}$.

::hint
**Kiến thức:** $V=a\times a\times a$.

**Gợi ý các bước:**
1. Viết phép nhân ba thừa số bằng nhau.
2. Nhân từng bước rồi ghi đơn vị.

::solution
$$V=7\times7\times7=49\times7=343\ (\text{cm}^3).$$

**Đáp số.** $343\ \text{cm}^3$.
:::

:::exercise
Một hình lập phương có cạnh $10\ \text{dm}$. Tính thể tích hình đó theo $\text{dm}^3$, rồi đổi ra $\text{m}^3$.

::hint
**Kiến thức:** $1\ \text{m}^3=1000\ \text{dm}^3$.

**Gợi ý các bước:**
1. Tính $10\times10\times10$.
2. Đổi kết quả sang $\text{m}^3$.

::solution
$$10\times10\times10=1000\ (\text{dm}^3)=1\ (\text{m}^3).$$
Đây cũng là hình lập phương cạnh $1\ \text{m}$, vì $10\ \text{dm}=1\ \text{m}$.

**Đáp số.** $1000\ \text{dm}^3$; $1\ \text{m}^3$.
:::

:::exercise
Tính thể tích hình lập phương có cạnh $1{,}2\ \text{dm}$.

::hint
**Kiến thức:** nhân số thập phân như nhân số tự nhiên, rồi đếm số chữ số ở phần thập phân.

**Gợi ý các bước:**
1. Tính $1{,}2\times1{,}2$.
2. Nhân kết quả với $1{,}2$.

::solution
$$1{,}2\times1{,}2\times1{,}2=1{,}44\times1{,}2=1{,}728\ (\text{dm}^3).$$

**Đáp số.** $1{,}728\ \text{dm}^3$.
:::

:::exercise
Tính thể tích hình lập phương có cạnh $30\ \text{cm}$, viết kết quả theo $\text{dm}^3$.

::hint
**Kiến thức:** $10\ \text{cm}=1\ \text{dm}$. Đổi cạnh trước khi tính.

**Gợi ý các bước:**
1. Đổi $30\ \text{cm}$ ra dm.
2. Tính thể tích.

::solution
Ta có $30\ \text{cm}=3\ \text{dm}$. Thể tích là:
$$3\times3\times3=27\ (\text{dm}^3).$$

**Đáp số.** $27\ \text{dm}^3$.
:::

:::exercise
Một bể nước hình lập phương có cạnh $6\ \text{dm}$. Hỏi bể chứa đầy nước được bao nhiêu lít?

::hint
**Kiến thức:** $1\ \text{dm}^3=1$ lít.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Tính thể tích bể theo $\text{dm}^3$ rồi đổi ra lít.
3. Thử lại: $6\times6=36$ có phải là diện tích đáy không?

::solution
Thể tích của bể là:
$$6\times6\times6=216\ (\text{dm}^3)=216\ \text{lít}.$$

**Đáp số.** $216$ lít.
:::

:::exercise
Một thùng các-tông hình lập phương có cạnh $4\ \text{dm}$. Người ta xếp vào thùng các hộp hình lập phương cạnh $2\ \text{dm}$. Hỏi xếp đầy thùng được nhiều nhất bao nhiêu hộp?

::hint
**Kiến thức:** mỗi cạnh của thùng xếp được (cạnh thùng) : (cạnh hộp) hộp.

**Gợi ý các bước:**
1. Mỗi cạnh xếp được mấy hộp?
2. Có bao nhiêu hộp theo cả ba hướng?
3. Thử lại bằng cách chia thể tích.

::solution
Mỗi cạnh xếp được $4:2=2$ (hộp). Số hộp là $2\times2\times2=8$ (hộp).

**Kiểm tra.** $4\times4\times4=64\ (\text{dm}^3)$, $2\times2\times2=8\ (\text{dm}^3)$ và $64:8=8$. Đúng.

**Đáp số.** $8$ hộp.
:::

:::exercise
Em hãy nhớ lại bài thể tích hình hộp chữ nhật. Một khối gỗ hình hộp chữ nhật có chiều dài $8\ \text{cm}$, chiều rộng $4\ \text{cm}$, chiều cao $2\ \text{cm}$. Một khối gỗ hình lập phương có cạnh $4\ \text{cm}$. Khối nào có thể tích lớn hơn?

::hint
**Kiến thức:** thể tích hình hộp chữ nhật bằng dài nhân rộng nhân cao.

**Gợi ý các bước:**
1. Tính thể tích từng khối.
2. So sánh hai số.

::solution
Thể tích khối hình hộp chữ nhật: $8\times4\times2=64\ (\text{cm}^3)$.

Thể tích khối hình lập phương: $4\times4\times4=64\ (\text{cm}^3)$.

Vì $64=64$ nên hai khối có thể tích bằng nhau.

**Đáp số.** Hai khối có thể tích bằng nhau ($64\ \text{cm}^3$).
:::

:::exercise
Một hình lập phương có thể tích $216\ \text{cm}^3$. Tìm độ dài cạnh của hình đó.

::hint
**Kiến thức:** tìm số $a$ sao cho $a\times a\times a=216$.

**Gợi ý các bước:**
1. Thử $a=5$ rồi $a=7$ để biết cạnh nằm trong khoảng nào.
2. Thử số còn lại.

::solution
Ta có $5\times5\times5=125$ (nhỏ hơn $216$) và $7\times7\times7=343$ (lớn hơn $216$). Thử $6$: $6\times6\times6=216$.

**Đáp số.** $6\ \text{cm}$.
:::

:::exercise Thử thách
Cạnh hình lập phương tăng gấp $2$ lần thì thể tích tăng gấp mấy lần? Em hãy thử với cạnh $3\ \text{cm}$.

::hint
**Kiến thức:** $V=a\times a\times a$.

**Gợi ý các bước:**
1. Tính thể tích khi cạnh $3\ \text{cm}$.
2. Tính thể tích khi cạnh $6\ \text{cm}$ rồi so sánh.

::solution
Cạnh $3\ \text{cm}$: $3\times3\times3=27\ (\text{cm}^3)$. Cạnh $6\ \text{cm}$: $6\times6\times6=216\ (\text{cm}^3)$. Ta có $216:27=8$.

Em thấy: cạnh nhân $2$ ở cả ba kích thước nên thể tích nhân $2\times2\times2=8$.

**Đáp số.** Thể tích tăng gấp $8$ lần.
:::

## Kiểm tra mini

:::quiz
::mc
Thể tích hình lập phương có cạnh $4\ \text{cm}$ là
A. $12\ \text{cm}^3$.
B. $16\ \text{cm}^3$.
C. $64\ \text{cm}^2$.
D. $64\ \text{cm}^3$.
::key D
$4\times4\times4=64$, đơn vị là $\text{cm}^3$. Phương án A là $4\times3$, B là $4\times4$ (chỉ nhân hai lần), C ghi sai đơn vị.

::mc
Thể tích hình lập phương có cạnh $2\ \text{dm}$ là
A. $8\ \text{dm}^3$.
B. $6\ \text{dm}^3$.
C. $4\ \text{dm}^3$.
D. $8\ \text{dm}^2$.
::key A
$2\times2\times2=8\ (\text{dm}^3)$. Phương án B là $2\times3$, C là $2\times2$, D ghi sai đơn vị.

::mc
Hình lập phương có cạnh $20\ \text{cm}$. Thể tích của nó theo $\text{dm}^3$ là
A. $8000\ \text{dm}^3$.
B. $8\ \text{dm}^3$.
C. $40\ \text{dm}^3$.
D. $80\ \text{dm}^3$.
::key B
$20\ \text{cm}=2\ \text{dm}$ nên $V=2\times2\times2=8\ (\text{dm}^3)$. Phương án A quên đổi đơn vị, D là $20\times4$, C là $20\times2$.

::mc
Một bể hình lập phương có cạnh $3\ \text{dm}$. Bể chứa đầy nước được
A. $9$ lít.
B. $81$ lít.
C. $27$ lít.
D. $18$ lít.
::key C
$3\times3\times3=27\ (\text{dm}^3)=27$ lít. Phương án A là diện tích đáy, D là $3\times6$.

::tf
Em xét hình lập phương có cạnh $5\ \text{cm}$.
a) Thể tích của hình đó bằng $5\times3=15\ \text{cm}^3$.
b) Thể tích của hình đó bằng $125\ \text{cm}^3$.
c) Nếu cạnh tăng gấp đôi thành $10\ \text{cm}$ thì thể tích là $1000\ \text{cm}^3$.
d) Nếu cạnh tăng gấp đôi thì thể tích cũng chỉ tăng gấp đôi.
::key S Đ Đ S
a) Sai: phải nhân ba lần cạnh, $5\times5\times5=125$. b) Đúng: $5\times5\times5=125$. c) Đúng: $10\times10\times10=1000$. d) Sai: thể tích tăng gấp $8$ lần ($1000:125=8$).

::sa
Tính thể tích hình lập phương có cạnh $9\ \text{cm}$ (đơn vị: $\text{cm}^3$).
::key 729
$9\times9\times9=81\times9=729$.

::sa
Một hình lập phương có thể tích $512\ \text{cm}^3$. Cạnh của nó dài bao nhiêu xăng-ti-mét?
::key 8
$8\times8\times8=512$ nên cạnh dài $8\ \text{cm}$.
:::

