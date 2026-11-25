---
title: Điểm, đoạn thẳng, đường thẳng, đường cong, ba điểm thẳng hàng
description: Em nhận biết điểm, đoạn thẳng, đường thẳng và đường cong, biết vẽ đoạn thẳng bằng thước và nhận ra ba điểm thẳng hàng.
minutes: 15
---

:::goals
- Nhận biết điểm, đoạn thẳng, đường thẳng và đường cong.
- Dùng thước vẽ đoạn thẳng và đọc tên đoạn thẳng, ví dụ đoạn thẳng $AB$.
- Nhận ra ba điểm thẳng hàng.
:::

Mai đứng ở cổng trường, nhìn thấy cột cờ ở xa. Mai muốn đi thẳng từ cổng đến cột cờ. Mai nên đi theo đường như thế nào, và làm sao vẽ đường đi đó lên giấy?

Con đường Mai đi, nét em vẽ trên giấy, mép bàn học: đó là những hình em nhìn thấy mỗi ngày. Biết gọi tên chúng là điểm, đoạn thẳng, đường thẳng và đường cong, em sẽ vẽ và nói về chúng chính xác hơn.

## Cùng khám phá

Ta bắt đầu từ hình đơn giản nhất. Em chấm hai chấm nhỏ lên giấy. Mỗi chấm nhỏ là một **điểm**. Ta đặt tên cho điểm bằng chữ cái in hoa, ví dụ điểm $A$ và điểm $B$.

Bây giờ em đặt thước thẳng sao cho mép thước đi qua cả hai điểm $A$ và $B$. Em dùng bút kẻ một nét từ $A$ đến $B$ theo mép thước. Nét vừa vẽ là **đoạn thẳng** $AB$. Hai điểm $A$ và $B$ là hai đầu của đoạn thẳng.

:::diagram Đoạn thẳng AB
alt: Đoạn thẳng AB nằm ngang với hai đầu là hai điểm A và B
point A 0,0 below
point B 4,0 below
segment A B
:::

Thử kéo nét thẳng đó dài mãi về hai phía, không dừng ở đâu cả. Ta được một **đường thẳng**. Đường thẳng không có hai đầu.

Còn nếu nét vẽ không thẳng mà uốn lượn thì sao? Ta gọi đó là **đường cong**.

:::graph Một đường cong
alt: Một đường cong uốn lượn lên xuống, không thẳng
x: 0..7
y: -2..2
plot: sin(x) ; 0..6
:::

:::theorem Nhận biết các hình
- **Điểm**: một chấm nhỏ, đặt tên bằng chữ cái in hoa.
- **Đoạn thẳng** $AB$: nét thẳng nối điểm $A$ với điểm $B$, có hai đầu, vẽ bằng thước.
- **Đường thẳng**: nét thẳng kéo dài mãi về hai phía, không có hai đầu.
- **Đường cong**: nét không thẳng, uốn lượn.
:::

Vì sao ta phải dùng thước? Vì mép thước thẳng, nên nét kẻ theo mép thước cũng thẳng. Vẽ bằng tay không thì nét rất dễ bị cong.

## Ví dụ

Ta thử vẽ một đoạn thẳng trước.

:::example Vẽ đoạn thẳng $MN$
**Lời giải.** Em làm theo từng bước:
1. Chấm hai điểm trên giấy, viết $M$ và $N$ bên cạnh.
2. Đặt thước sao cho mép thước đi qua $M$ và $N$.
3. Dùng bút kẻ nét thẳng từ $M$ đến $N$ theo mép thước.

Vậy nét thẳng đó là đoạn thẳng $MN$.
:::

Giờ em tìm những hình này ở quanh mình, trên chiếc bàn học và chiếc cốc.

:::example Đoạn thẳng hay đường cong?
Mép bàn học và vành miệng chiếc cốc tròn: hình nào gợi ra đoạn thẳng, hình nào gợi ra đường cong?

![Mép bàn thẳng và vành miệng cốc tròn được tô đậm](/assets/img/g2/g2-points-lines-curves-01.svg)

**Lời giải.** Mép bàn học là một nét thẳng có hai đầu, nên gợi ra đoạn thẳng. Vành miệng chiếc cốc tròn uốn quanh, không thẳng, nên gợi ra đường cong.
:::

Còn ba điểm cho trước thì sao? Ta xét xem chúng có nằm trên cùng một nét thẳng hay không.

:::diagram Ba điểm A, B, C và điểm D
alt: Ba điểm A, B, C nằm trên cùng một nét thẳng đi lên, điểm D nằm lệch phía trên bên trái
point A 0,0 below
point B 2,1 below-right
point C 4,2 above
point D 1,2 above
segment A C
:::

:::example Ba điểm thẳng hàng
Nhìn hình trên: ba điểm nào nằm trên cùng một đường thẳng?

**Lời giải.** Đặt thước theo nét thẳng từ $A$ đến $C$. Điểm $B$ nằm đúng trên mép thước, còn điểm $D$ nằm lệch ra ngoài. Vậy ba điểm $A$, $B$, $C$ cùng nằm trên một đường thẳng. Ta nói ba điểm $A$, $B$, $C$ **thẳng hàng**.
:::

Cuối cùng, em đếm các đoạn thẳng nối từng cặp điểm.

:::example Đếm đoạn thẳng
Cho ba điểm $A$, $B$, $C$ thẳng hàng. Nối từng cặp điểm, ta có mấy đoạn thẳng?

**Lời giải.** Các cặp điểm là $A$ với $B$, $B$ với $C$, và $A$ với $C$. Mỗi cặp cho một đoạn thẳng: $AB$, $BC$, $AC$.

Vậy có $3$ đoạn thẳng.
:::

:::warning Những lỗi em hay gặp
- **Vẽ bằng tay không.** Sai: vẽ đoạn thẳng $AB$ mà không dùng thước, nét bị cong. Vì sao sai: nét đã cong thì không còn là đoạn thẳng. Đúng: đặt thước rồi kẻ theo mép thước.
- **Nhầm đoạn thẳng với đường thẳng.** Sai: nói đoạn thẳng $AB$ kéo dài mãi. Vì sao sai: đoạn thẳng chỉ có hai đầu $A$ và $B$, nên không kéo dài mãi được. Đúng: đường thẳng mới kéo dài mãi về hai phía.
- **Gọi ba điểm là thẳng hàng khi một điểm lệch.** Sai: "$A$, $B$, $D$ thẳng hàng" ở hình trên. Vì sao sai: $D$ không nằm trên nét thẳng $AC$, nó lệch ra ngoài. Đúng: chỉ $A$, $B$, $C$ thẳng hàng.
:::

## Thuật ngữ

:::terms
- điểm | point
- đoạn thẳng | line segment
- đường thẳng | straight line
- đường cong | curve
- ba điểm thẳng hàng | three points in a line
- hai đầu của đoạn thẳng | endpoints
- thước kẻ | ruler
:::

## Tóm tắt

- Điểm là một chấm nhỏ; đặt tên bằng chữ cái in hoa.
- Đoạn thẳng $AB$ nối hai điểm $A$ và $B$, có hai đầu, vẽ bằng thước.
- Đường thẳng kéo dài mãi về hai phía; đường cong thì không thẳng.
- Ba điểm cùng nằm trên một đường thẳng là ba điểm thẳng hàng.

Quay lại câu hỏi đầu bài: muốn đi thẳng từ cổng đến cột cờ, Mai đi theo một đoạn thẳng, và em vẽ đường đó bằng thước. Em nhớ rằng đoạn thẳng có hai đầu, còn đường thẳng thì kéo dài mãi. Em làm các bài luyện tập để quen tay nhé.

## Luyện tập

Mỗi bài đều có phần kiến thức cần nhớ và một gợi ý để em bắt đầu. Em cứ thử tự làm trước, chưa chắc thì mới mở lời giải ra xem.

:::exercise
Hình gồm hai điểm $P$, $Q$ và nét thẳng nối $P$ với $Q$ vẽ bằng thước. Hình đó là gì? Viết tên hình.

::hint
**Kiến thức:** nét thẳng nối hai điểm, có hai đầu, là đoạn thẳng.

**Gợi ý các bước:**
1. Nét vẽ có thẳng không? Có hai đầu không?
2. Đọc tên theo hai điểm đầu.

::solution
Hình gồm hai điểm $P$, $Q$ và nét thẳng nối $P$ với $Q$ vẽ bằng thước.

Nét thẳng này có hai đầu là $P$ và $Q$ (không kéo dài mãi về hai phía). Hình có hai đầu như vậy gọi là đoạn thẳng.

Vậy hình đó là đoạn thẳng $PQ$.

**Đáp số.** Đoạn thẳng $PQ$.
:::

:::exercise
Em hãy nêu các bước vẽ đoạn thẳng $AB$ dài $5$ cm.

::hint
**Kiến thức:** dùng thước kẻ có vạch xăng-ti-mét.

**Gợi ý các bước:**
1. Chấm điểm $A$, đặt vạch $0$ của thước ở $A$.
2. Chấm điểm $B$ ở vạch $5$, rồi kẻ nét thẳng.

::solution
Để vẽ đoạn thẳng $AB$ dài $5$ cm, ta làm lần lượt như sau.

Bước 1: Dùng bút chấm một điểm và đặt tên là $A$.

Bước 2: Đặt thước sao cho vạch $0$ của thước trùng với điểm $A$.

Bước 3: Chấm điểm $B$ ở đúng vạch $5$ cm của thước.

Bước 4: Dùng bút kẻ một nét thẳng từ $A$ đến $B$ theo mép thước.

Vậy ta được đoạn thẳng $AB$ dài $5$ cm.

**Đáp số.** Đoạn thẳng $AB$ dài $5$ cm.
:::

:::exercise
Mỗi vật sau gợi ra đoạn thẳng hay đường cong?

a) Mép tấm bảng.

b) Sợi dây thừng uốn lượn trên sàn.

c) Vành chiếc bánh xe đạp.

::hint
**Kiến thức:** nét thẳng có hai đầu là đoạn thẳng; nét uốn lượn hoặc tròn là đường cong.

**Gợi ý các bước:**
1. Nhìn vật: thẳng hay cong?
2. Gọi tên hình.

::solution
a) Mép tấm bảng thẳng và có hai đầu, nên gợi ra đoạn thẳng.

b) Sợi dây thừng uốn lượn trên sàn không thẳng mà cong, nên gợi ra đường cong.

c) Vành chiếc bánh xe đạp tròn, không thẳng, nên gợi ra đường cong.

Vậy a) đoạn thẳng; b) đường cong; c) đường cong.

**Đáp số.** a) Đoạn thẳng; b) Đường cong; c) Đường cong.
:::

:::exercise
Em hãy nhớ lại bài trừ có nhớ. Đoạn thẳng $AB$ dài $52$ cm, đoạn thẳng $CD$ dài $27$ cm. Đoạn thẳng $AB$ dài hơn đoạn thẳng $CD$ bao nhiêu xăng-ti-mét?

::hint
**Kiến thức:** "dài hơn bao nhiêu" nghĩa là tìm hiệu: dùng phép trừ.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Tính $52-27$, nhớ mượn $1$ chục, rồi ghi đơn vị cm.

::solution
Bài giải

Muốn biết đoạn thẳng $AB$ dài hơn đoạn thẳng $CD$ bao nhiêu xăng-ti-mét, ta lấy độ dài $AB$ trừ độ dài $CD$.

Đặt tính rồi trừ từ hàng đơn vị: $2$ không trừ được $7$, lấy $12-7=5$, viết $5$ nhớ $1$. Hàng chục: $5-1-2=2$, viết $2$.

Đoạn thẳng $AB$ dài hơn đoạn thẳng $CD$ là:
$$52-27=25\ \text{(cm)}$$

Thử lại: $25+27=52$. Đúng.

Vậy đoạn thẳng $AB$ dài hơn đoạn thẳng $CD$ là $25$ cm.

**Đáp số.** $25$ cm.
:::

:::exercise
Cho ba điểm $A$, $B$, $C$ thẳng hàng, điểm $B$ ở giữa. Em hãy kể tên các đoạn thẳng có hai đầu là hai trong ba điểm đó.

::hint
**Kiến thức:** mỗi cặp điểm cho một đoạn thẳng.

**Gợi ý các bước:**
1. Liệt kê các cặp điểm.
2. Viết tên từng đoạn thẳng.

::solution
Mỗi đoạn thẳng có hai đầu là hai trong ba điểm $A$, $B$, $C$. Ta ghép từng cặp điểm khác nhau:

- cặp $A$ và $B$ cho đoạn thẳng $AB$;
- cặp $B$ và $C$ cho đoạn thẳng $BC$;
- cặp $A$ và $C$ cho đoạn thẳng $AC$.

Đoạn thẳng $AC$ đi qua điểm $B$ nhưng vẫn là một đoạn thẳng có hai đầu là $A$ và $C$. Không còn cặp điểm nào khác.

Vậy có $3$ đoạn thẳng là $AB$, $BC$, $AC$.

**Đáp số.** $AB$, $BC$, $AC$ (có $3$ đoạn thẳng).
:::

:::exercise
Bạn Nam vẽ nét hơi cong nối hai điểm $A$, $B$ rồi nói: "Đây là đoạn thẳng $AB$." Bạn Nam nói đúng hay sai? Vì sao? Em sửa lại thế nào?

::hint
**Kiến thức:** đoạn thẳng phải thẳng và vẽ bằng thước.

**Gợi ý các bước:**
1. Nét vẽ của Nam có thẳng không?
2. Cần dụng cụ gì để vẽ thẳng?

::solution
Đoạn thẳng là nét thẳng có hai đầu. Nét mà bạn Nam vẽ nối hai điểm $A$, $B$ hơi cong, không thẳng, nên đó không phải là đoạn thẳng.

Cách sửa: đặt thước sao cho mép thước đi qua cả hai điểm $A$ và $B$, rồi dùng bút kẻ một nét thẳng từ $A$ đến $B$ theo mép thước. Khi đó ta được đoạn thẳng $AB$.

Vậy bạn Nam nói sai; cần vẽ lại nét nối $A$ với $B$ bằng thước.

**Đáp số.** Sai; cần vẽ lại bằng thước.
:::

:::exercise
Ba cọc tiêu $A$, $B$, $C$ cắm thẳng hàng trên sân. Các bạn căng sợi dây từ cọc $A$ đến cọc $C$. Cọc $B$ có nằm trên sợi dây căng không? Còn một cọc $D$ cắm lệch ra ngoài thì sao?

::hint
**Kiến thức:** ba điểm thẳng hàng cùng nằm trên một nét thẳng.

**Gợi ý các bước:**
1. $A$, $B$, $C$ thẳng hàng có nghĩa là gì?
2. Cọc $D$ có nằm trên nét thẳng $AC$ không?

::solution
Sợi dây căng từ cọc $A$ đến cọc $C$ là một nét thẳng, nên nó gợi ra đoạn thẳng $AC$.

Vì ba cọc $A$, $B$, $C$ cắm thẳng hàng nên cọc $B$ nằm trên sợi dây căng từ $A$ đến $C$.

Cọc $D$ cắm lệch ra ngoài, không thẳng hàng với $A$ và $C$, nên cọc $D$ không nằm trên sợi dây.

Vậy cọc $B$ nằm trên sợi dây căng, còn cọc $D$ không nằm trên sợi dây.

**Đáp số.** Cọc $B$ nằm trên dây; cọc $D$ không nằm trên dây.
:::

:::exercise Thử thách
Cho bốn điểm $A$, $B$, $C$, $D$. Ba điểm $A$, $B$, $C$ thẳng hàng, điểm $D$ nằm ngoài. Nối từng cặp điểm với nhau. Có tất cả bao nhiêu đoạn thẳng?

::hint
**Kiến thức:** mỗi cặp điểm cho một đoạn thẳng.

**Gợi ý các bước:**
1. Liệt kê cặp có $A$: $AB$, $AC$, $AD$.
2. Rồi cặp có $B$ (chưa kể), rồi cặp có $C$.

::solution
Nối từng cặp điểm trong bốn điểm $A$, $B$, $C$, $D$ thì mỗi cặp cho một đoạn thẳng. Ta liệt kê có thứ tự để không bỏ sót và không đếm lặp.

- Các đoạn thẳng có đầu là $A$: $AB$, $AC$, $AD$ ($3$ đoạn).
- Các đoạn thẳng có đầu là $B$ (không tính lại $AB$): $BC$, $BD$ ($2$ đoạn).
- Các đoạn thẳng có đầu là $C$ (không tính lại $AC$, $BC$): $CD$ ($1$ đoạn).

Số đoạn thẳng là:
$$3+2+1=6\ \text{(đoạn thẳng)}$$

Vậy có tất cả $6$ đoạn thẳng.

**Đáp số.** $6$ đoạn thẳng.
:::

## Kiểm tra mini

:::quiz
::mc NB
Hình nào là nét thẳng có hai đầu và đo được độ dài?
A. Đoạn thẳng.
B. Đường thẳng.
C. Đường cong.
D. Điểm.
::key A
Đoạn thẳng có hai đầu nên đo được độ dài. Đường thẳng kéo dài mãi nên không có hai đầu, đường cong không thẳng, điểm chỉ là một chấm.

::mc NB
Ba điểm thẳng hàng là ba điểm
A. cùng nằm trên một đường thẳng.
B. nối với nhau bằng đường cong.
C. luôn cách đều nhau.
D. không nằm trên đường thẳng nào.
::key A
Ba điểm cùng nằm trên một đường thẳng là ba điểm thẳng hàng, không cần cách đều nhau.

::mc TH
Trên một đường thẳng có ba điểm $A$, $B$, $C$. Nối từng cặp điểm, có bao nhiêu đoạn thẳng?
A. $2$.
B. $3$.
C. $4$.
D. $6$.
::key B
Có $AB$, $BC$, $AC$ nên có $3$ đoạn thẳng. Phương án A quên $AC$, D đếm mỗi đoạn hai lần ($AB$ và $BA$).

::mc TH
Vật nào gợi ra đường cong?
A. Mép thước kẻ.
B. Vành miệng cốc tròn.
C. Cạnh bảng.
D. Sợi dây căng thẳng.
::key B
Vành miệng cốc tròn uốn quanh nên là đường cong. Ba vật còn lại thẳng.

::tf TH NB NB TH
Cho ba điểm $A$, $B$, $C$ thẳng hàng.
a) Có thể vẽ một đường thẳng đi qua cả ba điểm.
b) Đoạn thẳng $AB$ có hai đầu là $A$ và $B$.
c) Đoạn thẳng $AB$ là một đường cong.
d) Nối từng cặp điểm được ba đoạn thẳng $AB$, $BC$, $AC$.
::key Đ Đ S Đ
a) Đúng: ba điểm thẳng hàng cùng nằm trên một đường thẳng. b) Đúng. c) Sai: đoạn thẳng thì thẳng. d) Đúng: có $3$ cặp điểm.

::sa VD
Đoạn thẳng $AB$ dài $36$ cm, đoạn thẳng $CD$ dài $7$ cm. Đoạn $AB$ dài hơn đoạn $CD$ bao nhiêu xăng-ti-mét?
::key 29
$16-7=9$ và $3-1=2$, nên $36-7=29$ (cm).

::sa VD
Sợi dây thẳng dài $63$ cm, em cắt đi $8$ cm. Sợi dây còn lại dài bao nhiêu xăng-ti-mét?
::key 55
$13-8=5$ và $6-1=5$, nên $63-8=55$ (cm).
:::
