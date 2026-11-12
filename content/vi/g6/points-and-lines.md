---
title: Điểm và đường thẳng. Điểm nằm giữa hai điểm. Tia
description: Điểm thuộc và không thuộc đường thẳng, ba điểm thẳng hàng, hai đường thẳng cắt nhau, song song; điểm nằm giữa hai điểm, tia và hai tia đối nhau.
minutes: 35
---

:::goals
- Dùng kí hiệu $\in$, $\notin$ để diễn tả điểm thuộc, không thuộc đường thẳng.
- Nhận biết ba điểm thẳng hàng, ba điểm không thẳng hàng và điểm nằm giữa hai điểm.
- Nhận biết hai đường thẳng cắt nhau, song song, trùng nhau.
- Nhận biết tia, hai tia đối nhau, hai tia trùng nhau; đếm được số đường thẳng, số tia trong những tình huống đơn giản.
:::

Muốn trồng một hàng cây thật thẳng trong sân trường, bác bảo vệ chỉ cắm hai cọc tre ở hai đầu, căng một sợi dây giữa hai cọc, rồi trồng cây dọc theo sợi dây. Vì sao chỉ cần hai cọc là đủ, không cần ba hay bốn?

Câu trả lời nằm ở một tính chất rất đơn giản của điểm và đường thẳng, hai "viên gạch" đầu tiên của hình học. Bài này giới thiệu chúng, cùng với tia, thứ mà bạn vẫn thấy mỗi ngày trong luồng sáng của chiếc đèn pin.

## Điểm và đường thẳng

Một dấu chấm nhỏ trên trang giấy, một vì sao nhìn từ xa, là hình ảnh của **điểm**. Ta dùng chữ cái in hoa để đặt tên điểm: điểm $A$, điểm $B$, …

Một sợi chỉ căng thẳng, một mép thước kẻ là hình ảnh của **đường thẳng**. Đường thẳng không bị giới hạn về hai phía. Ta dùng chữ cái in thường để đặt tên đường thẳng: đường thẳng $d$, đường thẳng $a$, …

:::diagram Điểm $A$, $B$ thuộc đường thẳng $d$; điểm $C$ không thuộc $d$
alt: Một đường thẳng nằm ngang tên d, hai điểm A và B nằm trên đường thẳng, điểm C nằm phía trên, ngoài đường thẳng
point L1 -0.5,0 ""
point L2 6.5,0 ""
point A 1,0 below
point B 4,0 below
point C 2.5,1.6 above
segment L1 L2
label 6.3,0.35 "d"
:::

Trong hình trên, điểm $A$ **thuộc** đường thẳng $d$ (hay đường thẳng $d$ đi qua điểm $A$), kí hiệu $A\in d$. Điểm $C$ **không thuộc** đường thẳng $d$, kí hiệu $C\notin d$.

:::theorem Tính chất
Có một và chỉ một đường thẳng đi qua hai điểm phân biệt $A$ và $B$. Đường thẳng đó được gọi là đường thẳng $AB$ (hay $BA$).
:::

Đây chính là câu trả lời cho bác bảo vệ: hai cọc đã xác định một đường thẳng duy nhất, nên cọc thứ ba là không cần thiết.

## Ba điểm thẳng hàng

:::definition Ba điểm thẳng hàng
Ba điểm cùng thuộc một đường thẳng được gọi là **ba điểm thẳng hàng**. Ba điểm không cùng thuộc bất kì đường thẳng nào được gọi là **ba điểm không thẳng hàng**.
:::

:::diagram Ba điểm $A$, $B$, $C$ thẳng hàng; ba điểm $M$, $N$, $P$ không thẳng hàng
alt: Bên trái, ba điểm A, B, C nằm trên cùng một đường thẳng xiên lên; bên phải, ba điểm M, N, P không nằm trên một đường thẳng nào
point E1 -0.5,-0.2 ""
point E2 5.5,2.2 ""
point A 0,0 below
point B 2,0.8 below
point C 4.5,1.8 below
point M 7,0 below
point N 8.5,1.8 above
point P 10,0.3 below
segment E1 E2
:::

Trong ba điểm thẳng hàng $A$, $B$, $C$ ở hình trên, điểm $B$ **nằm giữa** hai điểm $A$ và $C$. Hai điểm $A$ và $C$ nằm **khác phía** đối với $B$; hai điểm $B$ và $C$ nằm **cùng phía** đối với $A$.

:::theorem Tính chất
Trong ba điểm thẳng hàng, có một và chỉ một điểm nằm giữa hai điểm còn lại.
:::

Để kiểm tra ba điểm có thẳng hàng không, ta đặt mép thước đi qua hai điểm rồi xem điểm thứ ba có nằm trên mép thước không.

## Hai đường thẳng cắt nhau, song song

Hai đường thẳng phân biệt có thể có một điểm chung, hoặc không có điểm chung nào.

:::diagram Hai đường thẳng $a$, $b$ cắt nhau tại $O$; hai đường thẳng $m$, $n$ song song
alt: Bên trái, hai đường thẳng a và b cắt nhau tại điểm O; bên phải, hai đường thẳng nằm ngang m và n song song, không có điểm chung
point A1 -1,-1 ""
point A2 3,2 ""
point B1 -1,2 ""
point B2 3,-1 ""
point O 1,0.5 below
point M1 5,0 ""
point M2 10,0 ""
point N1 5,1.5 ""
point N2 10,1.5 ""
segment A1 A2
segment B1 B2
segment M1 M2
segment N1 N2
label 3.2,2.1 "a"
label 3.2,-0.9 "b"
label 10.3,0.1 "m"
label 10.3,1.6 "n"
:::

:::definition Vị trí của hai đường thẳng
- Hai đường thẳng chỉ có một điểm chung là hai đường thẳng **cắt nhau**; điểm chung đó gọi là **giao điểm**.
- Hai đường thẳng (cùng nằm trên một mặt phẳng) không có điểm chung nào là hai đường thẳng **song song**.
- Hai đường thẳng có hai điểm chung trở lên thì **trùng nhau**: thật ra đó chỉ là một đường thẳng.
:::

Hai thanh ray đường sắt, hai mép đối diện của trang vở là hình ảnh của hai đường thẳng song song.

## Tia

Bật một chiếc đèn pin trong đêm: luồng sáng bắt đầu từ bóng đèn và đi mãi về một phía. Đó là hình ảnh của một **tia**.

:::definition Tia
Hình gồm điểm $O$ và một phần đường thẳng bị chia ra bởi điểm $O$ được gọi là một **tia gốc $O$**.
:::

Trên đường thẳng $xy$, điểm $O$ chia đường thẳng thành hai tia: tia $Ox$ và tia $Oy$. Khi đọc hay viết tên tia, ta luôn đọc, viết **tên gốc trước**.

:::diagram Hai tia đối nhau $Ox$ và $Oy$
alt: Một đường thẳng nằm ngang xy, điểm O ở giữa chia đường thẳng thành hai tia Ox đi sang trái và Oy đi sang phải
point X -4,0 ""
point Y 4,0 ""
point O 0,0 below
segment X Y
label -4.2,0.35 "x"
label 4.2,0.35 "y"
:::

:::definition Hai tia đối nhau, hai tia trùng nhau
- Hai tia chung gốc và tạo thành một đường thẳng được gọi là hai tia **đối nhau**. Ví dụ: $Ox$ và $Oy$ ở hình trên.
- Nếu $B$ nằm giữa $A$ và $C$ thì hai tia $BA$ và $BC$ đối nhau; còn hai tia $AB$ và $AC$ **trùng nhau** (chúng chung gốc $A$ và cùng đi về một phía).
:::

Nhớ rằng mỗi điểm trên một đường thẳng là gốc chung của đúng hai tia đối nhau.

## Ví dụ

Ta bắt đầu bằng việc đọc hình và viết kí hiệu.

:::example Đọc hình bằng kí hiệu
Quan sát hình "Điểm $A$, $B$ thuộc đường thẳng $d$; điểm $C$ không thuộc $d$" ở trên.

a) Dùng kí hiệu $\in$, $\notin$ để diễn tả quan hệ giữa các điểm $A$, $B$, $C$ và đường thẳng $d$.

b) Ba điểm $A$, $B$, $C$ có thẳng hàng không? Vì sao?

**Lời giải.**

a) Điểm $A$ và điểm $B$ nằm trên đường thẳng $d$, nên $A\in d$ và $B\in d$. Điểm $C$ nằm ngoài đường thẳng $d$, nên $C\notin d$.

b) Theo tính chất, chỉ có một đường thẳng đi qua hai điểm $A$ và $B$, đó là đường thẳng $d$. Vì $C\notin d$ nên không có đường thẳng nào đi qua cả ba điểm $A$, $B$, $C$.

Vậy ba điểm $A$, $B$, $C$ không thẳng hàng.
:::

Tiếp theo, ta đếm đường thẳng.

:::example Đếm số đường thẳng qua bốn điểm
Cho bốn điểm $A$, $B$, $C$, $D$, trong đó không có ba điểm nào thẳng hàng. Kẻ các đường thẳng đi qua hai trong bốn điểm đó. Có tất cả bao nhiêu đường thẳng? Kể tên các đường thẳng đó.

**Lời giải.**

Vì không có ba điểm nào thẳng hàng nên mỗi cặp điểm cho một đường thẳng khác nhau. Ta liệt kê theo từng điểm, không lặp lại:

Qua $A$: các đường thẳng $AB$, $AC$, $AD$.

Qua $B$ (trừ $AB$ đã kể): $BC$, $BD$.

Qua $C$ (trừ những đường đã kể): $CD$.

Vậy có tất cả $3+2+1=6$ đường thẳng: $AB$, $AC$, $AD$, $BC$, $BD$, $CD$.
:::

Với ba điểm thẳng hàng, ta luyện nhận biết tia.

:::example Tia đối nhau, tia trùng nhau
Cho ba điểm $A$, $B$, $C$ thẳng hàng, trong đó $B$ nằm giữa $A$ và $C$.

a) Kể tên hai tia gốc $B$. Hai tia đó có quan hệ gì?

b) Tia nào trùng với tia $AB$? Tia nào trùng với tia $CB$?

**Lời giải.**

a) Hai tia gốc $B$ là $BA$ và $BC$. Vì $B$ nằm giữa $A$ và $C$, hai tia này chung gốc $B$ và tạo thành đường thẳng $AC$, nên chúng là hai tia đối nhau.

b) Hai điểm $B$ và $C$ nằm cùng phía đối với $A$, nên tia $AB$ trùng với tia $AC$.

Hai điểm $A$ và $B$ nằm cùng phía đối với $C$, nên tia $CB$ trùng với tia $CA$.

Vậy a) $BA$ và $BC$ là hai tia đối nhau; b) tia $AB$ trùng tia $AC$, tia $CB$ trùng tia $CA$.
:::

Hai đường thẳng có thể có bao nhiêu điểm chung?

:::example Số điểm chung của hai đường thẳng
Quan sát hình "Hai đường thẳng $a$, $b$ cắt nhau tại $O$; hai đường thẳng $m$, $n$ song song" ở trên.

a) Hai đường thẳng $a$ và $b$ có bao nhiêu điểm chung? Chỉ ra điểm đó.

b) Hai đường thẳng $m$ và $n$ có điểm chung không?

**Lời giải.**

a) Hai đường thẳng $a$ và $b$ có đúng một điểm chung là $O$. Do đó $a$ và $b$ cắt nhau, giao điểm là $O$.

b) Hai đường thẳng $m$ và $n$ không có điểm chung nào. Do đó $m$ và $n$ song song.

Vậy a) một điểm chung là $O$; b) không có điểm chung.
:::

Cuối cùng là một bài đếm có cách nghĩ đáng nhớ.

:::example Năm điểm, bao nhiêu đường thẳng?
Cho năm điểm, trong đó không có ba điểm nào thẳng hàng. Kẻ các đường thẳng đi qua hai trong năm điểm đó. Có tất cả bao nhiêu đường thẳng?

**Lời giải.**

*Hiểu đề.* Không có ba điểm nào thẳng hàng, nên mỗi cặp điểm cho đúng một đường thẳng, và hai cặp khác nhau cho hai đường thẳng khác nhau. Như vậy, đếm đường thẳng chính là đếm số cặp điểm.

*Tìm cách giải.* Thay vì liệt kê, ta đếm: từ mỗi điểm kẻ được bao nhiêu đường thẳng, rồi chú ý mỗi đường thẳng bị đếm mấy lần.

*Giải.* Từ mỗi điểm, nối với $4$ điểm còn lại, ta được $4$ đường thẳng. Có $5$ điểm, nên ta đếm được $5\cdot4=20$ đường thẳng.

Nhưng mỗi đường thẳng, chẳng hạn đường thẳng qua hai điểm $A$ và $B$, đã được đếm hai lần: một lần từ $A$, một lần từ $B$. Do đó số đường thẳng là
$$\dfrac{5\cdot4}{2}=10.$$

Vậy có tất cả $10$ đường thẳng.

*Nhìn lại.* Thử cách đếm này với bốn điểm: $\dfrac{4\cdot3}{2}=6$, khớp với Ví dụ 2. Tổng quát, với $n$ điểm không có ba điểm nào thẳng hàng, số đường thẳng là $\dfrac{n(n-1)}{2}$.
:::

:::warning Những chỗ hay nhầm
- **Viết tên tia không bắt đầu bằng gốc.** Sai: gọi tia gốc $O$ đi về phía $x$ là "tia $xO$". Vì sao sai: tên tia luôn đọc, viết gốc trước. Đúng: tia $Ox$.
- **Cho rằng hai tia chung gốc là hai tia đối nhau.** Sai: $B$ nằm giữa $A$ và $C$, nên $AB$ và $AC$ là hai tia đối nhau. Vì sao sai: $AB$ và $AC$ chung gốc nhưng cùng đi về một phía, chúng trùng nhau. Đúng: hai tia đối nhau là $BA$ và $BC$.
- **Đếm trùng đường thẳng.** Sai: năm điểm không có ba điểm nào thẳng hàng cho $5\cdot4=20$ đường thẳng. Vì sao sai: mỗi đường thẳng được đếm hai lần, từ mỗi đầu một lần. Đúng: $20:2=10$ đường thẳng.
- **Nghĩ rằng hai đường thẳng không cắt nhau trên hình là song song.** Sai: hai đoạn vẽ trên giấy chưa chạm nhau nên hai đường thẳng song song. Vì sao sai: đường thẳng kéo dài mãi; hai đường có thể cắt nhau ở ngoài trang giấy. Đúng: chỉ song song khi chúng không có điểm chung nào, dù kéo dài bao xa.
:::

## Thuật ngữ

:::terms
- điểm | point
- đường thẳng | line
- thuộc, không thuộc | lies on, does not lie on
- ba điểm thẳng hàng | three collinear points
- điểm nằm giữa | point between
- hai đường thẳng cắt nhau | intersecting lines
- giao điểm | point of intersection
- hai đường thẳng song song | parallel lines
- tia | ray
- gốc của tia | endpoint (origin) of a ray
- hai tia đối nhau | opposite rays
:::

## Tóm tắt

- Điểm đặt tên bằng chữ in hoa, đường thẳng bằng chữ in thường; $A\in d$: $A$ thuộc $d$; $C\notin d$: $C$ không thuộc $d$.
- Có một và chỉ một đường thẳng đi qua hai điểm phân biệt.
- Ba điểm cùng thuộc một đường thẳng là ba điểm thẳng hàng; trong ba điểm thẳng hàng có đúng một điểm nằm giữa hai điểm còn lại.
- Hai đường thẳng phân biệt: có một điểm chung thì cắt nhau, không có điểm chung thì song song.
- Điểm $O$ trên đường thẳng $xy$ chia nó thành hai tia đối nhau $Ox$, $Oy$; tên tia viết gốc trước.

Bác bảo vệ ở đầu bài chỉ cần hai cọc, vì hai điểm đã xác định một và chỉ một đường thẳng. Những điều tưởng như hiển nhiên này là nền móng cho mọi hình phức tạp sau này, nên bạn hãy tập dùng kí hiệu và gọi tên cho chính xác ngay từ bây giờ. Bài sau, ta học về [đoạn thẳng và độ dài đoạn thẳng](lesson:line-segments).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Vẽ đường thẳng $a$. Lấy hai điểm $M$, $N$ thuộc đường thẳng $a$ và hai điểm $P$, $Q$ không thuộc đường thẳng $a$. Viết các quan hệ đó bằng kí hiệu.

::hint
**Kiến thức:** $\in$ nghĩa là "thuộc", $\notin$ nghĩa là "không thuộc".

**Gợi ý các bước:**
1. Vẽ đường thẳng và đánh dấu các điểm.
2. Viết bốn kí hiệu.

::solution
Hai điểm $M$, $N$ nằm trên đường thẳng $a$, nên $M\in a$ và $N\in a$.

Hai điểm $P$, $Q$ nằm ngoài đường thẳng $a$, nên $P\notin a$ và $Q\notin a$.

Vậy $M\in a$; $N\in a$; $P\notin a$; $Q\notin a$.

**Đáp số.** $M\in a$; $N\in a$; $P\notin a$; $Q\notin a$.
:::

:::exercise
Cho bốn điểm $A$, $B$, $C$, $D$, trong đó ba điểm $A$, $B$, $C$ thẳng hàng và điểm $D$ không thuộc đường thẳng $AB$.

a) Kể tên các bộ ba điểm thẳng hàng.

b) Kể tên các bộ ba điểm không thẳng hàng.

::hint
**Kiến thức:** ba điểm thẳng hàng là ba điểm cùng thuộc một đường thẳng.

**Gợi ý các bước:**
1. Liệt kê tất cả các bộ ba điểm (có $4$ bộ).
2. Xét từng bộ: bộ nào có điểm $D$ thì không thẳng hàng.

::solution
Từ bốn điểm, ta lập được bốn bộ ba điểm: $(A, B, C)$, $(A, B, D)$, $(A, C, D)$, $(B, C, D)$.

a) Ba điểm $A$, $B$, $C$ thẳng hàng theo đề bài.

b) Mỗi bộ còn lại đều có điểm $D$ và hai điểm thuộc đường thẳng $AB$. Vì $D$ không thuộc đường thẳng $AB$, nên ba điểm trong mỗi bộ đó không thẳng hàng.

Vậy a) $A$, $B$, $C$; b) $A$, $B$, $D$; $A$, $C$, $D$; $B$, $C$, $D$.

**Đáp số.** a) $A$, $B$, $C$. b) $A$, $B$, $D$; $A$, $C$, $D$; $B$, $C$, $D$.
:::

:::exercise
Cho ba điểm $M$, $N$, $P$ thẳng hàng, trong đó $N$ nằm giữa $M$ và $P$.

a) Kể tên hai tia đối nhau gốc $N$.

b) Tia nào trùng với tia $MN$?

c) Tia nào trùng với tia $PN$?

::hint
**Kiến thức:** nếu $N$ nằm giữa $M$ và $P$ thì $NM$, $NP$ đối nhau; $MN$ trùng $MP$.

**Gợi ý các bước:**
1. Vẽ ba điểm trên một đường thẳng, $N$ ở giữa.
2. Với mỗi câu, xét gốc của tia và hướng của nó.

::solution
a) Vì $N$ nằm giữa $M$ và $P$, hai tia $NM$ và $NP$ chung gốc $N$ và tạo thành đường thẳng $MP$. Do đó $NM$ và $NP$ là hai tia đối nhau.

b) Hai điểm $N$ và $P$ nằm cùng phía đối với $M$, nên tia $MN$ trùng với tia $MP$.

c) Hai điểm $N$ và $M$ nằm cùng phía đối với $P$, nên tia $PN$ trùng với tia $PM$.

Vậy a) $NM$ và $NP$; b) tia $MP$; c) tia $PM$.

**Đáp số.** a) $NM$, $NP$; b) $MP$; c) $PM$.
:::

:::exercise
Hai đường thẳng phân biệt có thể có bao nhiêu điểm chung? Với mỗi trường hợp, hai đường thẳng đó được gọi là gì? Còn hai đường thẳng có hai điểm chung thì sao?

::hint
**Kiến thức:** cắt nhau, song song, trùng nhau.

**Gợi ý các bước:**
1. Nhớ lại định nghĩa vị trí của hai đường thẳng.
2. Dùng tính chất "có đúng một đường thẳng đi qua hai điểm phân biệt".

::solution
Hai đường thẳng phân biệt có thể có đúng một điểm chung; khi đó chúng cắt nhau.

Hai đường thẳng phân biệt cũng có thể không có điểm chung nào; khi đó chúng song song.

Nếu hai đường thẳng có hai điểm chung phân biệt thì cả hai cùng đi qua hai điểm đó. Vì chỉ có một đường thẳng đi qua hai điểm phân biệt, nên hai đường thẳng đó trùng nhau, không còn là hai đường thẳng phân biệt.

Vậy hai đường thẳng phân biệt có $1$ điểm chung (cắt nhau) hoặc $0$ điểm chung (song song); có hai điểm chung thì chúng trùng nhau.

**Đáp số.** $1$ điểm chung: cắt nhau; $0$ điểm chung: song song; hai điểm chung: trùng nhau.
:::

:::exercise
Cho sáu điểm, trong đó không có ba điểm nào thẳng hàng. Kẻ các đường thẳng đi qua hai trong sáu điểm đó. Có tất cả bao nhiêu đường thẳng?

::hint
**Kiến thức:** với $n$ điểm, không có ba điểm nào thẳng hàng, số đường thẳng là $\dfrac{n(n-1)}{2}$.

**Gợi ý các bước:**
1. Mỗi điểm nối với $5$ điểm còn lại.
2. Mỗi đường thẳng được đếm hai lần.

::solution
Từ mỗi điểm, nối với $5$ điểm còn lại, ta được $5$ đường thẳng. Có $6$ điểm, nên ta đếm được $6\cdot5=30$ đường thẳng.

Mỗi đường thẳng được đếm hai lần, nên số đường thẳng là
$$\dfrac{6\cdot5}{2}=15.$$

Vậy có tất cả $15$ đường thẳng.

**Đáp số.** $15$ đường thẳng.
:::

:::exercise
Trên đường thẳng $xy$ lấy ba điểm $A$, $B$, $C$ theo thứ tự đó. Có bao nhiêu tia có gốc là một trong ba điểm $A$, $B$, $C$? Kể tên các tia đó.

::hint
**Kiến thức:** mỗi điểm trên một đường thẳng là gốc của đúng hai tia đối nhau.

**Gợi ý các bước:**
1. Với mỗi điểm, kể hai tia gốc tại điểm đó.
2. Đếm tổng số tia.

::solution
Mỗi điểm trên đường thẳng $xy$ là gốc của đúng hai tia đối nhau.

Gốc $A$: tia $Ax$ và tia $Ay$.

Gốc $B$: tia $Bx$ và tia $By$.

Gốc $C$: tia $Cx$ và tia $Cy$.

Các tia này có gốc khác nhau hoặc hướng khác nhau, nên không có hai tia nào trùng nhau. Có tất cả $3\cdot2=6$ tia.

Vậy có $6$ tia: $Ax$, $Ay$, $Bx$, $By$, $Cx$, $Cy$.

**Đáp số.** $6$ tia.
:::

:::exercise
Khi trồng một hàng cây thẳng, người ta thường cắm hai cọc ở hai đầu, căng dây giữa hai cọc rồi trồng cây dọc theo sợi dây. Hãy giải thích vì sao làm như vậy thì các cây sẽ thẳng hàng.

::hint
**Kiến thức:** có một và chỉ một đường thẳng đi qua hai điểm phân biệt.

**Gợi ý các bước:**
1. Coi mỗi cọc là một điểm, sợi dây căng là một phần đường thẳng.
2. Các gốc cây nằm trên sợi dây thì nằm trên đường thẳng nào?

::solution
Coi hai cọc là hai điểm phân biệt $A$ và $B$. Theo tính chất, có một và chỉ một đường thẳng đi qua $A$ và $B$, đó là đường thẳng $AB$. Sợi dây căng giữa hai cọc nằm trên đường thẳng $AB$.

Các cây được trồng dọc theo sợi dây, nên gốc của mọi cây đều thuộc đường thẳng $AB$.

Vậy mọi cây đều thuộc cùng một đường thẳng, tức là chúng thẳng hàng.

**Đáp số.** Vì hai cọc xác định duy nhất một đường thẳng, và mọi cây đều thuộc đường thẳng đó.
:::

:::exercise
Trên một con đường thẳng có ba bến xe buýt $A$, $B$, $C$, trong đó bến $B$ nằm giữa hai bến $A$ và $C$. Một chiếc xe xuất phát từ bến $A$ và chạy theo hướng của tia $AB$. Xe có đi qua bến $C$ không? Một chiếc xe khác xuất phát từ bến $B$ và chạy theo hướng của tia $BA$. Xe này có đi qua bến $C$ không?

::hint
**Kiến thức:** nếu $B$ nằm giữa $A$ và $C$ thì tia $AB$ trùng tia $AC$; tia $BA$ và tia $BC$ đối nhau.

**Gợi ý các bước:**
1. Xét tia $AB$ có chứa điểm $C$ không.
2. Xét tia $BA$ có chứa điểm $C$ không.

::solution
Vì $B$ nằm giữa $A$ và $C$, hai điểm $B$ và $C$ nằm cùng phía đối với $A$. Do đó tia $AB$ trùng với tia $AC$, nên tia $AB$ chứa điểm $C$. Xe thứ nhất có đi qua bến $C$.

Hai tia $BA$ và $BC$ đối nhau, nên điểm $C$ không thuộc tia $BA$ (trừ gốc $B$, nhưng $C\ne B$). Xe thứ hai chạy ra xa bến $C$, không đi qua bến $C$.

Vậy xe thứ nhất đi qua bến $C$; xe thứ hai không đi qua bến $C$.

**Đáp số.** Xe thứ nhất có; xe thứ hai không.
:::

:::exercise Thử thách
Cho $10$ điểm, trong đó có đúng ba điểm thẳng hàng (ngoài ba điểm đó ra, không có ba điểm nào thẳng hàng). Kẻ các đường thẳng đi qua hai trong $10$ điểm đó. Có tất cả bao nhiêu đường thẳng?

::hint
**Kiến thức:** nếu không có ba điểm nào thẳng hàng thì có $\dfrac{n(n-1)}{2}$ đường thẳng; ba điểm thẳng hàng chỉ cho một đường thẳng.

**Gợi ý các bước:**
1. Đếm như thể không có ba điểm nào thẳng hàng.
2. Ba điểm thẳng hàng lẽ ra cho bao nhiêu đường thẳng, thực tế cho bao nhiêu? Điều chỉnh lại.

::solution
Nếu không có ba điểm nào thẳng hàng, số đường thẳng là
$$\dfrac{10\cdot9}{2}=45.$$

Trong cách đếm đó, ba điểm thẳng hàng (gọi là $A$, $B$, $C$) được tính thành ba đường thẳng $AB$, $BC$, $CA$. Nhưng vì $A$, $B$, $C$ thẳng hàng, ba đường thẳng này trùng nhau, thực tế chỉ là một đường thẳng. Ta đã đếm thừa $3-1=2$ đường thẳng.

Do đó số đường thẳng là
$$45-2=43.$$

Vậy có tất cả $43$ đường thẳng.

**Đáp số.** $43$ đường thẳng.
:::

## Kiểm tra mini

:::quiz
::mc
Qua hai điểm phân biệt có bao nhiêu đường thẳng?
A. $0$.
B. $1$.
C. $2$.
D. Vô số.
::key B
Có một và chỉ một đường thẳng đi qua hai điểm phân biệt. D là số đường thẳng đi qua một điểm.

::mc
Cho ba điểm $A$, $B$, $C$ thẳng hàng, $B$ nằm giữa $A$ và $C$. Hai tia đối nhau là
A. $BA$ và $BC$.
B. $AB$ và $AC$.
C. $CA$ và $CB$.
D. $AB$ và $BA$.
::key A
$BA$, $BC$ chung gốc $B$ và tạo thành một đường thẳng. B và C là hai tia trùng nhau; D không chung gốc.

::mc
Cho năm điểm, không có ba điểm nào thẳng hàng. Số đường thẳng đi qua hai trong năm điểm đó là
A. $5$.
B. $20$.
C. $25$.
D. $10$.
::key D
$\dfrac{5\cdot4}{2}=10$. B quên chia $2$; C lấy $5\cdot5$; A chỉ đếm số điểm.

::mc
Hai đường thẳng song song có bao nhiêu điểm chung?
A. $1$.
B. $2$.
C. $0$.
D. Vô số.
::key C
Hai đường thẳng song song không có điểm chung nào. A là trường hợp cắt nhau; D là trường hợp trùng nhau.

::tf
Cho đường thẳng $xy$ và điểm $O$ thuộc $xy$. Xét tính đúng sai của các mệnh đề sau:
a) $Ox$ và $Oy$ là hai tia đối nhau.
b) Tia $Ox$ có gốc là $x$.
c) Điểm $O$ thuộc cả hai tia $Ox$ và $Oy$.
d) Hai tia $Ox$ và $Oy$ tạo thành đường thẳng $xy$.
::key Đ S Đ Đ
a) Đúng: chung gốc $O$ và tạo thành đường thẳng $xy$. b) Sai: gốc của tia $Ox$ là $O$. c) Đúng: gốc thuộc tia. d) Đúng: theo định nghĩa hai tia đối nhau.

::sa
Cho bảy điểm, không có ba điểm nào thẳng hàng. Có bao nhiêu đường thẳng đi qua hai trong bảy điểm đó?
::key 21
$\dfrac{7\cdot6}{2}=21$.

::sa
Trên một đường thẳng lấy bốn điểm phân biệt. Có bao nhiêu tia có gốc là một trong bốn điểm đó?
::key 8
Mỗi điểm là gốc của hai tia đối nhau: $4\cdot2=8$ tia.
:::
