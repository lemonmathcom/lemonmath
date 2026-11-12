---
title: Đường tròn. Chu vi và diện tích hình tròn
description: Em học tâm, bán kính, đường kính của đường tròn, số π ≈ 3,14, rồi tính chu vi và diện tích hình tròn để giải bài toán thực tế.
minutes: 20
---

:::goals
- Nhận biết tâm, bán kính, đường kính của đường tròn và hình tròn.
- Tính được chu vi hình tròn.
- Tính được diện tích hình tròn.
- Giải bài toán có lời văn về chu vi và diện tích hình tròn.
:::

Giả sử bánh xe đạp của bạn Nam có đường kính $0{,}6$ m. Bánh xe lăn một vòng trên đường thì xe đi được một quãng đường đúng bằng chiều dài của đường viền bánh xe.

Bánh xe lăn một vòng thì xe đi được bao nhiêu mét? Và lăn $100$ vòng thì đi được bao nhiêu mét?

## Cùng khám phá

Em lấy một sợi chỉ quấn đúng một vòng quanh ba vật tròn rồi đo chiều dài sợi chỉ. Giả sử kết quả như sau (làm tròn):

| Đường kính | Chu vi (chiều dài sợi chỉ) | Chu vi : đường kính |
|---|---|---|
| $5$ cm | $15{,}7$ cm | $3{,}14$ |
| $10$ cm | $31{,}4$ cm | $3{,}14$ |
| $20$ cm | $62{,}8$ cm | $3{,}14$ |

Dù vật to hay nhỏ, chu vi chia cho đường kính luôn ra gần cùng một số. Số đó được gọi là **số $\pi$** (đọc là "pi"), và trong bài này ta lấy $\pi\approx3{,}14$.

:::diagram Đường tròn tâm O, bán kính OA, đường kính BC
alt: Đường tròn tâm O với bán kính OA và đường kính BC đi qua tâm O
point O 0,0 below
point A 1.414,1.414 above-right
point B -2,0 left
point C 2,0 right
circle O 2
segment O A
segment B C dashed
label 0.5,0.9 "r"
label -1,-0.4 "d"
:::

:::definition Đường tròn và hình tròn
**Đường tròn** tâm $O$ bán kính $r$ gồm tất cả các điểm cách $O$ một khoảng bằng $r$. **Hình tròn** là phần mặt phẳng nằm bên trong đường tròn.

Đoạn thẳng nối tâm với một điểm trên đường tròn là **bán kính** $r$. Đoạn thẳng đi qua tâm và nối hai điểm trên đường tròn là **đường kính** $d$, và $d=r\times2$.
:::

:::theorem Chu vi và diện tích hình tròn
Với hình tròn có đường kính $d$ và bán kính $r$:
- **Chu vi:** $C=d\times3{,}14$ hay $C=r\times2\times3{,}14$.
- **Diện tích:** $S=r\times r\times3{,}14$.
:::

Vì sao đúng? Công thức chu vi chính là cách ta định nghĩa số $\pi$: chu vi chia đường kính luôn bằng $\pi\approx3{,}14$. Với diện tích, em cắt hình tròn thành nhiều hình quạt nhỏ rồi xếp xen kẽ, ta được hình gần giống hình chữ nhật có chiều dài bằng nửa chu vi, tức là $r\times3{,}14$, và chiều rộng bằng $r$. Diện tích là $r\times3{,}14\times r$.

**Kết nối.** Số $\pi\approx3{,}14$ là số thập phân, nên em dùng phép nhân, phép chia số thập phân và làm tròn đã học để tính.

## Ví dụ

Ta bắt đầu với bán kính và đường kính.

:::example Bán kính và đường kính
a) Hình tròn có bán kính $4$ cm. Tính đường kính. b) Hình tròn có đường kính $9$ dm. Tính bán kính.

**Lời giải.** a) Đường kính là $4\times2=8$ cm.

b) Bán kính là $9:2=4{,}5$ dm.

Vậy a) $8$ cm; b) $4{,}5$ dm.
:::

Tiếp theo là chu vi.

:::example Tính chu vi
a) Hình tròn có đường kính $12$ cm. b) Hình tròn có bán kính $5$ m.

**Lời giải.** a) Chu vi hình tròn là:
$$12\times3{,}14=37{,}68\ \text{(cm)}.$$

b) Chu vi hình tròn là:
$$5\times2\times3{,}14=31{,}4\ \text{(m)}.$$

Vậy a) $37{,}68$ cm; b) $31{,}4$ m.
:::

Bây giờ đến diện tích; chú ý đổi đường kính ra bán kính.

:::example Tính diện tích
a) Hình tròn có bán kính $5$ cm. b) Hình tròn có đường kính $8$ dm.

**Lời giải.** a) Diện tích hình tròn là:
$$5\times5\times3{,}14=78{,}5\ \text{(cm}^2\text{)}.$$

b) Bán kính là $8:2=4$ dm. Diện tích hình tròn là:
$$4\times4\times3{,}14=50{,}24\ \text{(dm}^2\text{)}.$$

Vậy a) $78{,}5\ \text{cm}^2$; b) $50{,}24\ \text{dm}^2$.
:::

Biết chu vi, em tìm được đường kính.

:::example Tìm đường kính
Một hình tròn có chu vi $62{,}8$ cm. Tính đường kính và bán kính của hình tròn đó.

**Lời giải.** Từ $C=d\times3{,}14$ suy ra $d=C:3{,}14$. Đường kính là:
$$62{,}8:3{,}14=20\ \text{(cm)}.$$
Bán kính là $20:2=10$ cm.

Vậy đường kính $20$ cm và bán kính $10$ cm.
:::

Bây giờ trở lại bánh xe của bạn Nam, em làm theo bốn bước.

:::example Bánh xe đạp
Bánh xe đạp của bạn Nam có đường kính $0{,}6$ m. Hỏi bánh xe lăn $100$ vòng thì xe đi được bao nhiêu mét?

**Hiểu đề.** Biết đường kính bánh xe. Mỗi vòng lăn, xe đi được một quãng bằng chu vi bánh xe. Cần tìm quãng đường đi được sau $100$ vòng.

**Tìm cách giải.** Tính chu vi bánh xe, rồi nhân với $100$.

**Bài giải.** Chu vi bánh xe là:
$$0{,}6\times3{,}14=1{,}884\ \text{(m)}.$$
Quãng đường xe đi được sau $100$ vòng là:
$$1{,}884\times100=188{,}4\ \text{(m)}.$$
Đáp số: $188{,}4$ m.

**Nhìn lại.** Kết quả có hợp lí không? Có: chu vi gần bằng $3$ lần đường kính, $3\times0{,}6=1{,}8$ m, gần $1{,}884$ m. Nếu làm tròn chu vi đến hàng phần trăm được $1{,}88$ m thì mỗi vòng sai lệch rất nhỏ.
:::

Cuối cùng là một bài toán diện tích.

:::example Tấm khăn trải bàn
Giả sử một tấm khăn trải bàn hình tròn có đường kính $1{,}2$ m. Tính diện tích tấm khăn, làm tròn đến hàng phần trăm.

**Bài giải.** Bán kính tấm khăn là $1{,}2:2=0{,}6$ m. Diện tích tấm khăn là:
$$0{,}6\times0{,}6\times3{,}14=1{,}1304\ \text{(m}^2\text{)}.$$
Chữ số hàng phần nghìn là $0<5$, nên làm tròn đến hàng phần trăm được $1{,}13\ \text{m}^2$.

Đáp số: khoảng $1{,}13\ \text{m}^2$.
:::

:::warning Những lỗi em hay gặp
- **Quên nhân $2$ khi tính chu vi từ bán kính.** Sai: bán kính $5$ m có chu vi $5\times3{,}14=15{,}7$ m. Vì sao sai: $5$ m là bán kính, đường kính là $5\times2=10$ m. Đúng: $5\times2\times3{,}14=31{,}4$ m.
- **Dùng đường kính để tính diện tích.** Sai: đường kính $8$ dm có $S=8\times8\times3{,}14=200{,}96\ \text{dm}^2$. Vì sao sai: công thức diện tích dùng bán kính. Đúng: $4\times4\times3{,}14=50{,}24\ \text{dm}^2$.
- **Ghi đơn vị diện tích không có mũ hai.** Sai: $S=78{,}5$ cm. Vì sao sai: diện tích đo bằng đơn vị vuông. Đúng: $78{,}5\ \text{cm}^2$.
:::

## Thuật ngữ

:::terms
- đường tròn | circle
- hình tròn | disc
- tâm | centre
- bán kính | radius
- đường kính | diameter
- chu vi | circumference
- diện tích | area
- số pi | pi
- làm tròn | round
:::

## Tóm tắt

- Đường kính $d=r\times2$; đường kính gấp hai lần bán kính.
- Chu vi hình tròn: $C=d\times3{,}14=r\times2\times3{,}14$.
- Diện tích hình tròn: $S=r\times r\times3{,}14$ (dùng **bán kính**).
- Biết chu vi, đường kính bằng chu vi chia cho $3{,}14$.
- Số $\pi\approx3{,}14$ là giá trị gần đúng; có thể làm tròn kết quả nếu đề yêu cầu.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Số?
a) Bán kính $7$ cm thì đường kính là $?$ cm; b) đường kính $1{,}6$ m thì bán kính là $?$ m; c) bán kính $2{,}5$ dm thì đường kính là $?$ dm.

::hint
**Kiến thức:** đường kính gấp hai lần bán kính.

**Gợi ý các bước:**
1. Nhân bán kính với $2$ để được đường kính.
2. Chia đường kính cho $2$ để được bán kính.

::solution
a) $7\times2=14$ cm.

b) $1{,}6:2=0{,}8$ m.

c) $2{,}5\times2=5$ dm.

**Đáp số.** a) $14$; b) $0{,}8$; c) $5$.
:::

:::exercise
Tính chu vi hình tròn: a) đường kính $5$ cm; b) bán kính $3$ cm; c) đường kính $0{,}4$ m.

::hint
**Kiến thức:** $C=d\times3{,}14$ hay $C=r\times2\times3{,}14$.

**Gợi ý các bước:**
1. Xác định đề cho đường kính hay bán kính.
2. Nhân với $3{,}14$ (nhớ nhân $2$ nếu là bán kính).

::solution
a) $5\times3{,}14=15{,}7$ cm.

b) $3\times2\times3{,}14=18{,}84$ cm.

c) $0{,}4\times3{,}14=1{,}256$ m.

**Đáp số.** a) $15{,}7$ cm; b) $18{,}84$ cm; c) $1{,}256$ m.
:::

:::exercise
Tính diện tích hình tròn: a) bán kính $3$ cm; b) đường kính $10$ dm; c) bán kính $1{,}5$ m.

::hint
**Kiến thức:** $S=r\times r\times3{,}14$.

**Gợi ý các bước:**
1. Tìm bán kính (câu b: chia đường kính cho $2$).
2. Nhân bán kính với chính nó, rồi nhân với $3{,}14$.

::solution
a) $3\times3\times3{,}14=28{,}26\ \text{cm}^2$.

b) Bán kính là $10:2=5$ dm, nên $S=5\times5\times3{,}14=78{,}5\ \text{dm}^2$.

c) $1{,}5\times1{,}5\times3{,}14=2{,}25\times3{,}14=7{,}065\ \text{m}^2$.

**Đáp số.** a) $28{,}26\ \text{cm}^2$; b) $78{,}5\ \text{dm}^2$; c) $7{,}065\ \text{m}^2$.
:::

:::exercise
Tìm đường kính và bán kính của hình tròn có chu vi: a) $31{,}4$ cm; b) $25{,}12$ m.

::hint
**Kiến thức:** $d=C:3{,}14$ và $r=d:2$.

**Gợi ý các bước:**
1. Chia chu vi cho $3{,}14$ bằng cách chuyển dấu phẩy.
2. Chia đường kính cho $2$.

::solution
a) $d=31{,}4:3{,}14=10$ cm và $r=10:2=5$ cm.

b) $d=25{,}12:3{,}14=8$ m và $r=8:2=4$ m.

**Đáp số.** a) $d=10$ cm, $r=5$ cm; b) $d=8$ m, $r=4$ m.
:::

:::exercise
Giả sử bánh xe đạp của bạn Lan có đường kính $0{,}65$ m. Hỏi bánh xe lăn $10$ vòng thì xe đi được bao nhiêu mét?

::hint
**Kiến thức:** mỗi vòng lăn, xe đi được quãng đường bằng chu vi bánh xe.

**Gợi ý các bước:**
1. Tính chu vi bánh xe.
2. Nhân chu vi với $10$ bằng cách chuyển dấu phẩy.

::solution
Chu vi bánh xe là $0{,}65\times3{,}14=2{,}041$ m.

Quãng đường đi được sau $10$ vòng là $2{,}041\times10=20{,}41$ (m).

**Đáp số.** $20{,}41$ m.
:::

:::exercise
Giả sử một cái ao hình tròn có bán kính $20$ m. Tính chu vi và diện tích của ao.

::hint
**Kiến thức:** $C=r\times2\times3{,}14$ và $S=r\times r\times3{,}14$.

**Gợi ý các bước:**
1. Đề cho bán kính, nên tính chu vi bằng $r\times2\times3{,}14$.
2. Tính diện tích bằng $r\times r\times3{,}14$.

::solution
Chu vi của ao là $20\times2\times3{,}14=125{,}6$ m.

Diện tích của ao là $20\times20\times3{,}14=1256\ \text{m}^2$.

**Đáp số.** Chu vi $125{,}6$ m; diện tích $1256\ \text{m}^2$.
:::

:::exercise
Một sợi dây dài $94{,}2$ cm quấn đúng một vòng quanh một chiếc hộp hình tròn. Tính đường kính của hộp.

::hint
**Kiến thức:** sợi dây quấn đúng một vòng có chiều dài bằng chu vi của hộp.

**Gợi ý các bước:**
1. Chiều dài sợi dây là chu vi hình tròn.
2. Chia chu vi cho $3{,}14$. Thử lại bằng phép nhân.

::solution
Đường kính của hộp là:
$$94{,}2:3{,}14=30\ \text{(cm)}.$$

**Thử lại.** $30\times3{,}14=94{,}2$. Đúng.

**Đáp số.** $30$ cm.
:::

:::exercise
Em hãy nhớ lại bài ôn tập về diện tích hình vuông. Một hình vuông có cạnh $10$ cm, bên trong vẽ hình tròn có đường kính $10$ cm (hình tròn chạm bốn cạnh hình vuông). Tính diện tích phần hình vuông nằm ngoài hình tròn.

::hint
**Kiến thức:** diện tích hình vuông bằng cạnh nhân cạnh; hình tròn có đường kính $10$ cm thì bán kính $5$ cm.

**Gợi ý các bước:**
1. Tính diện tích hình vuông và diện tích hình tròn.
2. Lấy diện tích hình vuông trừ diện tích hình tròn.

::solution
Diện tích hình vuông là $10\times10=100\ \text{cm}^2$. Diện tích hình tròn là $5\times5\times3{,}14=78{,}5\ \text{cm}^2$.

Diện tích phần nằm ngoài hình tròn là $100-78{,}5=21{,}5\ \text{cm}^2$.

**Đáp số.** $21{,}5\ \text{cm}^2$.
:::

:::exercise Thử thách
Hình tròn $A$ có bán kính $3$ cm, hình tròn $B$ có bán kính $6$ cm (gấp đôi). Chu vi hình tròn $B$ gấp mấy lần chu vi hình tròn $A$? Diện tích hình tròn $B$ gấp mấy lần diện tích hình tròn $A$?

::hint
**Kiến thức:** tính chu vi và diện tích từng hình, rồi chia.

**Gợi ý các bước:**
1. Tính $C$ và $S$ của $A$ và của $B$.
2. Chia kết quả của $B$ cho kết quả của $A$.

::solution
Hình tròn $A$: $C=3\times2\times3{,}14=18{,}84$ cm và $S=3\times3\times3{,}14=28{,}26\ \text{cm}^2$.

Hình tròn $B$: $C=6\times2\times3{,}14=37{,}68$ cm và $S=6\times6\times3{,}14=113{,}04\ \text{cm}^2$.

Vì $37{,}68:18{,}84=2$ và $113{,}04:28{,}26=4$ nên chu vi gấp $2$ lần, diện tích gấp $4$ lần.

**Đáp số.** Chu vi gấp $2$ lần; diện tích gấp $4$ lần.
:::

## Kiểm tra mini

:::quiz
::mc
Chu vi hình tròn có đường kính $12$ cm là
A. $75{,}36$ cm.
B. $18{,}84$ cm.
C. $452{,}16$ cm.
D. $37{,}68$ cm.
::key D
$C=12\times3{,}14=37{,}68$ cm. Phương án A lấy đường kính nhân $2$ rồi nhân $3{,}14$; B quên nhân $2$ khi dùng bán kính $6$; C là diện tích tính sai bằng đường kính.

::mc
Diện tích hình tròn có bán kính $5$ cm là
A. $78{,}5\ \text{cm}^2$.
B. $31{,}4\ \text{cm}^2$.
C. $15{,}7\ \text{cm}^2$.
D. $314\ \text{cm}^2$.
::key A
$S=5\times5\times3{,}14=78{,}5\ \text{cm}^2$. Phương án B là chu vi; C là $5\times3{,}14$; D dùng đường kính $10$ thay cho bán kính.

::mc
Hình tròn có chu vi $62{,}8$ cm thì đường kính là
A. $10$ cm.
B. $20$ cm.
C. $197{,}192$ cm.
D. $31{,}4$ cm.
::key B
$d=62{,}8:3{,}14=20$ cm. Phương án A là bán kính; B nhân thay vì chia; D chia chu vi cho $2$.

::mc
Giả sử bánh xe đạp có đường kính $0{,}65$ m. Bánh xe lăn $10$ vòng thì xe đi được
A. $2{,}041$ m.
B. $204{,}1$ m.
C. $20{,}41$ m.
D. $6{,}5$ m.
::key C
Chu vi bánh xe là $0{,}65\times3{,}14=2{,}041$ m, sau $10$ vòng xe đi được $20{,}41$ m. Phương án A chỉ là một vòng; C nhân với $100$; D nhân đường kính với $10$.

::tf
Em xét hình tròn có bán kính $4$ dm.
a) Đường kính hình tròn là $4$ dm.
b) Chu vi hình tròn là $4\times2\times3{,}14=25{,}12$ dm.
c) Diện tích hình tròn là $4\times4\times3{,}14=50{,}24\ \text{dm}^2$.
d) Nếu bán kính gấp đôi thì chu vi cũng gấp đôi.
::key S Đ Đ Đ
a) Sai: đường kính là $4\times2=8$ dm. b) Đúng. c) Đúng. d) Đúng: chu vi là $r\times2\times3{,}14$ nên tăng gấp đôi khi $r$ gấp đôi.

::sa
Hình tròn có đường kính $20$ cm. Chu vi hình tròn là bao nhiêu xăng-ti-mét?
::key 62,8
$C=20\times3{,}14=62{,}8$ cm.

::sa
Hình tròn có bán kính $10$ cm. Diện tích hình tròn là bao nhiêu xăng-ti-mét vuông?
::key 314
$S=10\times10\times3{,}14=314\ \text{cm}^2$.
:::
