---
title: Tứ giác
description: Nhận biết tứ giác, tứ giác lồi, đường chéo; chứng minh tổng bốn góc của tứ giác bằng 360° và dùng nó để tính góc, giải bài toán thực tế.
minutes: 30
---

:::goals
- Nhận biết tứ giác, đỉnh, cạnh, góc, đường chéo, cạnh kề, cạnh đối và tứ giác lồi.
- Phát biểu và chứng minh định lí về tổng các góc của một tứ giác.
- Tính số đo góc của tứ giác khi biết các góc còn lại hoặc biết quan hệ giữa các góc.
- Dùng tổng các góc của tứ giác để giải bài toán thực tế.
:::

Giả sử chủ một mảnh vườn hình tứ giác đo được ba góc ở ba góc vườn là $80^\circ$, $95^\circ$ và $110^\circ$. Góc thứ tư nằm sau một lùm cây nên không đo được. Liệu ta có tính được góc đó không?

Với tam giác, ta biết tổng ba góc luôn bằng $180^\circ$. Bài này cho thấy tứ giác cũng có một tổng góc cố định, và nhờ đó ta tìm được góc thứ tư mà không cần đo.

## Tứ giác

### Khám phá: ghép từ hai tam giác

Ta vẽ một tứ giác $ABCD$ rồi kẻ đường thẳng nối hai đỉnh $A$ và $C$. Đoạn $AC$ chia tứ giác thành hai tam giác $ABC$ và $ACD$. Mỗi tam giác có tổng ba góc bằng $180^\circ$. Hai tam giác ghép lại cho ta tổng $2\cdot180^\circ=360^\circ$. Ta sẽ xem tổng này có phải là tổng bốn góc của tứ giác không.

:::definition Tứ giác
**Tứ giác** $ABCD$ là hình gồm bốn đoạn thẳng $AB$, $BC$, $CD$, $DA$, trong đó không có hai đoạn thẳng nào nằm trên cùng một đường thẳng và các đoạn thẳng chỉ chung nhau các đầu mút.

Bốn điểm $A$, $B$, $C$, $D$ là các **đỉnh**; bốn đoạn thẳng là các **cạnh**. Hai đỉnh thuộc cùng một cạnh là hai đỉnh **kề** nhau; hai đỉnh không kề nhau là hai đỉnh **đối** nhau. Đoạn thẳng nối hai đỉnh đối nhau là **đường chéo**.
:::

Hai cạnh có chung một đỉnh là hai cạnh **kề**; hai cạnh không có đỉnh chung là hai cạnh **đối**. Tứ giác $ABCD$ có bốn góc $\widehat{A}$, $\widehat{B}$, $\widehat{C}$, $\widehat{D}$.

:::diagram Tứ giác lồi $ABCD$ và hai đường chéo $AC$, $BD$
alt: Tứ giác ABCD với hai đường chéo AC và BD cắt nhau bên trong tứ giác
point A 0,0 below-left
point B 6,0 below-right
point C 5,4 above-right
point D 1,3 above-left
polygon A B C D
segment A C
segment B D
:::

Trong hình, các cạnh kề nhau là $AB$ và $BC$; các cạnh đối nhau là $AB$ và $CD$. Các đỉnh đối nhau là $A$ và $C$, hoặc $B$ và $D$. Hai đường chéo là $AC$ và $BD$.

:::definition Tứ giác lồi
**Tứ giác lồi** là tứ giác luôn nằm về một phía của đường thẳng chứa bất kì cạnh nào của nó.
:::

:::diagram Tứ giác $MNPQ$ không lồi
alt: Tứ giác MNPQ có đỉnh P lõm vào bên trong, nên không phải là tứ giác lồi
point M 0,0 below-left
point N 6,0 below-right
point P 3,1.5 below
point Q 1,4 above
polygon M N P Q
:::

Tứ giác $MNPQ$ ở hình thứ hai không lồi, vì đỉnh $P$ lõm vào bên trong. Từ đây, khi nói tứ giác ta hiểu là tứ giác lồi.

## Tổng các góc của một tứ giác

:::theorem Tổng các góc của tứ giác
Tổng các góc của một tứ giác bằng $360^\circ$:
$$\widehat{A}+\widehat{B}+\widehat{C}+\widehat{D}=360^\circ.$$
:::

Vì sao? Ta kẻ đường chéo $AC$ để chia tứ giác thành hai tam giác $ABC$ và $ACD$. Vì tứ giác lồi nên tia $AC$ nằm trong góc $\widehat{A}$ và tia $CA$ nằm trong góc $\widehat{C}$, nên $\widehat{A}=\widehat{A}_1+\widehat{A}_2$ và $\widehat{C}=\widehat{C}_1+\widehat{C}_2$.

:::diagram Đường chéo $AC$ chia tứ giác thành hai tam giác
alt: Tứ giác ABCD với đường chéo AC; góc A được chia thành hai góc 1 và 2, góc C được chia thành hai góc 3 và 4
point A 0,0 below-left
point B 6,0 below-right
point C 5,4 above-right
point D 1,3 above-left
polygon A B C D
segment A C
angle B A C "1"
angle C A D "2"
angle A C B "3"
angle D C A "4"
:::

Tổng các góc của tam giác $ABC$ là $\widehat{A}_1+\widehat{B}+\widehat{C}_1=180^\circ$ và của tam giác $ACD$ là $\widehat{A}_2+\widehat{D}+\widehat{C}_2=180^\circ$. Cộng hai đẳng thức, ta có
$$(\widehat{A}_1+\widehat{A}_2)+\widehat{B}+(\widehat{C}_1+\widehat{C}_2)+\widehat{D}=360^\circ,$$
tức là $\widehat{A}+\widehat{B}+\widehat{C}+\widehat{D}=360^\circ$.

## Ví dụ

Ta bắt đầu với việc gọi tên các yếu tố của tứ giác.

:::example Gọi tên các yếu tố
Cho tứ giác $ABCD$. Hãy chỉ ra:

a) các cạnh kề với cạnh $AB$.

b) cạnh đối với cạnh $AB$.

c) đỉnh đối với đỉnh $B$.

d) các đường chéo.

**Lời giải.** a) Các cạnh có chung một đỉnh với $AB$ là $BC$ (chung đỉnh $B$) và $DA$ (chung đỉnh $A$).

b) Cạnh không có đỉnh chung với $AB$ là $CD$.

c) Đỉnh không kề với $B$ là $D$.

d) Các đường chéo nối hai đỉnh đối nhau là $AC$ và $BD$.

Vậy a) $BC$ và $DA$; b) $CD$; c) $D$; d) $AC$ và $BD$.
:::

Tiếp theo ta dùng tổng các góc để tìm một góc.

:::example Tìm góc còn lại
Tứ giác $ABCD$ có $\widehat{A}=100^\circ$, $\widehat{B}=80^\circ$, $\widehat{C}=90^\circ$. Tính $\widehat{D}$.

**Lời giải.** Ta có $\widehat{A}+\widehat{B}+\widehat{C}+\widehat{D}=360^\circ$. Do đó
$$\widehat{D}=360^\circ-(100^\circ+80^\circ+90^\circ)=360^\circ-270^\circ=90^\circ.$$
Vậy $\widehat{D}=90^\circ$.
:::

Bây giờ các góc cho theo tỉ lệ.

:::example Các góc theo tỉ lệ
Bốn góc của một tứ giác tỉ lệ với $1$, $2$, $3$, $4$. Tính số đo mỗi góc.

**Lời giải.** Gọi các góc là $k$, $2k$, $3k$, $4k$ (độ). Tổng bốn góc bằng $360^\circ$ nên
$$k+2k+3k+4k=360^\circ,\quad\text{tức là}\quad 10k=360^\circ.$$
Suy ra $k=36^\circ$. Do đó các góc là $36^\circ$, $72^\circ$, $108^\circ$, $144^\circ$.

Vậy bốn góc là $36^\circ$, $72^\circ$, $108^\circ$ và $144^\circ$.

**Nhận xét.** Kiểm tra: $36+72+108+144=360$.
:::

Tiếp đến là một bài toán có ẩn.

:::example Các góc chứa ẩn
Tứ giác $ABCD$ có $\widehat{A}=x$, $\widehat{B}=x+30^\circ$, $\widehat{C}=x+60^\circ$, $\widehat{D}=x+90^\circ$. Tìm $x$ và số đo bốn góc.

**Lời giải.** Tổng bốn góc bằng $360^\circ$ nên
$$x+(x+30^\circ)+(x+60^\circ)+(x+90^\circ)=360^\circ,\quad\text{tức là}\quad 4x+180^\circ=360^\circ.$$
Suy ra $4x=180^\circ$, nên $x=45^\circ$. Do đó $\widehat{A}=45^\circ$, $\widehat{B}=75^\circ$, $\widehat{C}=105^\circ$, $\widehat{D}=135^\circ$.

Vậy $x=45^\circ$ và bốn góc là $45^\circ$, $75^\circ$, $105^\circ$, $135^\circ$.
:::

Cuối cùng là một chứng minh ngắn.

:::example Hai góc đối bù nhau
Tứ giác $ABCD$ có $\widehat{A}=\widehat{C}=90^\circ$. Chứng minh rằng $\widehat{B}+\widehat{D}=180^\circ$.

**Lời giải.** Ta có $\widehat{A}+\widehat{B}+\widehat{C}+\widehat{D}=360^\circ$. Thay $\widehat{A}=\widehat{C}=90^\circ$:
$$90^\circ+\widehat{B}+90^\circ+\widehat{D}=360^\circ,$$
suy ra $\widehat{B}+\widehat{D}=360^\circ-180^\circ=180^\circ$.

Vậy $\widehat{B}+\widehat{D}=180^\circ$.
:::

Bây giờ ta trở lại mảnh vườn ở đầu bài.

:::example Mảnh vườn bị che góc (Vận dụng)
Giả sử một mảnh vườn hình tứ giác $ABCD$ có $\widehat{A}=80^\circ$, $\widehat{B}=95^\circ$, $\widehat{C}=110^\circ$. Tính $\widehat{D}$ rồi kiểm tra kết quả bằng cách đo thêm các góc ở đường chéo $AC$.

**Lời giải.**

*Hiểu đề.* Biết ba góc của tứ giác, cần tìm góc thứ tư.

*Tìm cách giải.* Dùng tổng bốn góc bằng $360^\circ$. Để kiểm tra, ta tách tứ giác thành hai tam giác bằng đường chéo $AC$.

*Giải.* Ta có
$$\widehat{D}=360^\circ-(80^\circ+95^\circ+110^\circ)=360^\circ-285^\circ=75^\circ.$$
Vậy $\widehat{D}=75^\circ$.

*Nhìn lại.* Giả sử đo thêm được $\widehat{BAC}=45^\circ$ và $\widehat{BCA}=40^\circ$. Trong tam giác $ABC$: $45^\circ+95^\circ+40^\circ=180^\circ$, hợp lí. Khi đó $\widehat{CAD}=80^\circ-45^\circ=35^\circ$ và $\widehat{ACD}=110^\circ-40^\circ=70^\circ$. Trong tam giác $ACD$ ta có $\widehat{D}=180^\circ-35^\circ-70^\circ=75^\circ$, trùng với kết quả trên.
:::

:::warning Những sai lầm thường gặp
- **Nhầm tổng góc của tứ giác với của tam giác.** Sai: $\widehat{A}+\widehat{B}+\widehat{C}+\widehat{D}=180^\circ$. Lí do sai: tứ giác ghép từ hai tam giác nên tổng gấp đôi. Đúng: $\widehat{A}+\widehat{B}+\widehat{C}+\widehat{D}=360^\circ$.
- **Gọi tên tứ giác không theo thứ tự đỉnh.** Sai: gọi tứ giác có các cạnh $AB$, $BC$, $CD$, $DA$ là $ACBD$. Lí do sai: tên phải liệt kê các đỉnh liên tiếp dọc theo cạnh. Đúng: tứ giác $ABCD$ (hoặc $BCDA$, $DCBA$, ...).
- **Coi cạnh là đường chéo.** Sai: $AB$ là đường chéo của tứ giác $ABCD$. Lí do sai: $A$ và $B$ là hai đỉnh kề nhau. Đúng: đường chéo nối hai đỉnh đối nhau, là $AC$ và $BD$.
- **Chia $360^\circ$ cho số góc khi các góc tỉ lệ.** Sai: các góc tỉ lệ $1:2:3:4$ nên mỗi phần là $360^\circ:4=90^\circ$. Lí do sai: phải chia cho tổng các phần $1+2+3+4=10$. Đúng: mỗi phần là $360^\circ:10=36^\circ$.
:::

**Kết nối.** Tứ giác tiếp nối tam giác mà bạn đã học: tổng góc của nó đến từ tổng góc của hai tam giác. Trong các bài sau, ta xét những tứ giác đặc biệt như hình thang cân, hình bình hành, hình chữ nhật, hình thoi và hình vuông, và tổng $360^\circ$ luôn là điểm xuất phát để tìm góc.

## Thuật ngữ

:::terms
- tứ giác | quadrilateral
- đỉnh | vertex
- cạnh | side
- cạnh kề | adjacent sides
- cạnh đối | opposite sides
- đỉnh đối | opposite vertices
- đường chéo | diagonal
- tứ giác lồi | convex quadrilateral
- tổng các góc | angle sum
:::

## Tóm tắt

- Tứ giác $ABCD$ có bốn đỉnh, bốn cạnh, bốn góc và hai đường chéo $AC$, $BD$.
- Hai cạnh có chung đỉnh là cạnh kề; không có đỉnh chung là cạnh đối. Đường chéo nối hai đỉnh đối nhau.
- Tứ giác lồi luôn nằm về một phía của đường thẳng chứa bất kì cạnh nào.
- Tổng các góc của tứ giác bằng $360^\circ$ (chia thành hai tam giác bằng một đường chéo).
- Khi các góc tỉ lệ với $a:b:c:d$, chia $360^\circ$ cho tổng $a+b+c+d$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho tứ giác $MNPQ$. Hãy chỉ ra:

a) các đỉnh kề với đỉnh $M$.

b) đỉnh đối với đỉnh $M$.

c) các cạnh kề và cạnh đối với cạnh $MN$.

d) các đường chéo.

::hint
**Kiến thức:** đỉnh kề cùng thuộc một cạnh; đường chéo nối hai đỉnh đối nhau.

**Gợi ý các bước:**
1. Liệt kê các cạnh $MN$, $NP$, $PQ$, $QM$.
2. Xác định đỉnh kề, đỉnh đối rồi các cạnh.

::solution
a) Các đỉnh kề với $M$ là $N$ và $Q$.

b) Đỉnh đối với $M$ là $P$.

c) Các cạnh kề với $MN$ là $NP$ và $QM$; cạnh đối với $MN$ là $PQ$.

d) Các đường chéo là $MP$ và $NQ$.

Vậy a) $N$, $Q$; b) $P$; c) kề: $NP$, $QM$, đối: $PQ$; d) $MP$, $NQ$.

**Đáp số.** a) $N$, $Q$. b) $P$. c) $NP$, $QM$; $PQ$. d) $MP$, $NQ$.
:::

:::exercise
Tính góc còn lại của mỗi tứ giác:

a) Tứ giác $ABCD$ có $\widehat{A}=70^\circ$, $\widehat{B}=110^\circ$, $\widehat{C}=95^\circ$. Tính $\widehat{D}$.

b) Tứ giác $MNPQ$ có $\widehat{M}=\widehat{N}=120^\circ$, $\widehat{P}=50^\circ$. Tính $\widehat{Q}$.

::hint
**Kiến thức:** tổng bốn góc của tứ giác bằng $360^\circ$.

**Gợi ý các bước:**
1. Cộng ba góc đã biết.
2. Lấy $360^\circ$ trừ đi tổng đó.

::solution
a) $\widehat{D}=360^\circ-(70^\circ+110^\circ+95^\circ)=360^\circ-275^\circ=85^\circ$.

b) $\widehat{Q}=360^\circ-(120^\circ+120^\circ+50^\circ)=360^\circ-290^\circ=70^\circ$.

Vậy a) $\widehat{D}=85^\circ$; b) $\widehat{Q}=70^\circ$.

**Đáp số.** a) $85^\circ$. b) $70^\circ$.
:::

:::exercise
Bốn góc của một tứ giác tỉ lệ với $2$, $3$, $3$, $4$. Tính số đo mỗi góc.

::hint
**Kiến thức:** gọi các góc là $2k$, $3k$, $3k$, $4k$; tổng bằng $360^\circ$.

**Gợi ý các bước:**
1. Lập phương trình $2k+3k+3k+4k=360^\circ$.
2. Tìm $k$ rồi tính từng góc.

::solution
Ta có $2k+3k+3k+4k=12k=360^\circ$, nên $k=30^\circ$. Các góc là $60^\circ$, $90^\circ$, $90^\circ$, $120^\circ$.

Vậy bốn góc là $60^\circ$, $90^\circ$, $90^\circ$, $120^\circ$.

**Đáp số.** $60^\circ$; $90^\circ$; $90^\circ$; $120^\circ$.
:::

:::exercise
Tứ giác $ABCD$ có $\widehat{A}=2x$, $\widehat{B}=3x-10^\circ$, $\widehat{C}=x+40^\circ$, $\widehat{D}=x-20^\circ$. Tìm $x$ và số đo bốn góc.

::hint
**Kiến thức:** tổng bốn góc bằng $360^\circ$.

**Gợi ý các bước:**
1. Cộng bốn biểu thức và cho bằng $360^\circ$.
2. Giải phương trình để tìm $x$.

::solution
Ta có $2x+(3x-10^\circ)+(x+40^\circ)+(x-20^\circ)=360^\circ$, tức là $7x+10^\circ=360^\circ$. Suy ra $7x=350^\circ$ và $x=50^\circ$.

Do đó $\widehat{A}=100^\circ$, $\widehat{B}=140^\circ$, $\widehat{C}=90^\circ$, $\widehat{D}=30^\circ$. (Kiểm tra: $100+140+90+30=360$.)

Vậy $x=50^\circ$ và bốn góc là $100^\circ$, $140^\circ$, $90^\circ$, $30^\circ$.

**Đáp số.** $x=50^\circ$; $100^\circ$, $140^\circ$, $90^\circ$, $30^\circ$.
:::

:::exercise
Tứ giác $ABCD$ có $\widehat{C}=60^\circ$, $\widehat{D}=90^\circ$ và $\widehat{A}=\widehat{B}$. Tính $\widehat{A}$ và $\widehat{B}$.

::hint
**Kiến thức:** $\widehat{A}+\widehat{B}=360^\circ-\widehat{C}-\widehat{D}$.

**Gợi ý các bước:**
1. Tính $\widehat{A}+\widehat{B}$.
2. Chia đôi vì $\widehat{A}=\widehat{B}$.

::solution
Ta có $\widehat{A}+\widehat{B}=360^\circ-60^\circ-90^\circ=210^\circ$. Vì $\widehat{A}=\widehat{B}$ nên mỗi góc bằng $210^\circ:2=105^\circ$.

Vậy $\widehat{A}=\widehat{B}=105^\circ$.

**Đáp số.** $\widehat{A}=\widehat{B}=105^\circ$.
:::

:::exercise
Ở mỗi đỉnh của tứ giác $ABCD$, ta lấy một góc ngoài (góc kề bù với góc của tứ giác). Chứng minh rằng tổng bốn góc ngoài bằng $360^\circ$.

::hint
**Kiến thức:** góc ngoài tại một đỉnh bằng $180^\circ$ trừ đi góc trong tại đỉnh đó.

**Gợi ý các bước:**
1. Viết bốn góc ngoài theo bốn góc trong.
2. Cộng lại và dùng tổng bốn góc trong.

::solution
Các góc ngoài tại $A$, $B$, $C$, $D$ lần lượt là $180^\circ-\widehat{A}$, $180^\circ-\widehat{B}$, $180^\circ-\widehat{C}$, $180^\circ-\widehat{D}$. Tổng của chúng là
$$4\cdot180^\circ-(\widehat{A}+\widehat{B}+\widehat{C}+\widehat{D})=720^\circ-360^\circ=360^\circ.$$
Vậy tổng bốn góc ngoài của tứ giác bằng $360^\circ$.

**Đáp số.** Tổng bốn góc ngoài bằng $360^\circ$.
:::

:::exercise
Giả sử một sân hình tứ giác $ABCD$ có $\widehat{A}=90^\circ$, $\widehat{B}=90^\circ$ và $\widehat{C}=105^\circ$ (theo bản vẽ). Tính góc $\widehat{D}$ của sân.

::hint
**Kiến thức:** tổng bốn góc của tứ giác bằng $360^\circ$.

**Gợi ý các bước:**
1. Cộng ba góc đã cho.
2. Lấy $360^\circ$ trừ đi tổng đó.

::solution
Ta có $\widehat{D}=360^\circ-(90^\circ+90^\circ+105^\circ)=360^\circ-285^\circ=75^\circ$.

Vậy $\widehat{D}=75^\circ$.

**Đáp số.** $75^\circ$.
:::

:::exercise
Giả sử một chiếc diều có hình tứ giác với hai góc ở hai bên đều bằng $105^\circ$ và góc ở đỉnh phía trên bằng $60^\circ$. Tính góc ở đỉnh phía dưới.

::hint
**Kiến thức:** tổng bốn góc của tứ giác bằng $360^\circ$.

**Gợi ý các bước:**
1. Cộng ba góc đã biết ($105^\circ$, $105^\circ$, $60^\circ$).
2. Lấy $360^\circ$ trừ đi tổng đó.

::solution
Tổng ba góc đã biết là $105^\circ+105^\circ+60^\circ=270^\circ$. Góc ở đỉnh phía dưới là $360^\circ-270^\circ=90^\circ$.

Vậy góc ở đỉnh phía dưới là $90^\circ$.

**Đáp số.** $90^\circ$.
:::

:::exercise
Nhớ lại bất đẳng thức tam giác. Giả sử tứ giác $ABCD$ có $AB=5$ cm, $BC=6$ cm, $CD=7$ cm, $DA=4$ cm. Chứng minh rằng đường chéo $AC$ nhỏ hơn $11$ cm.

::hint
**Kiến thức:** trong tam giác, mỗi cạnh nhỏ hơn tổng hai cạnh còn lại.

**Gợi ý các bước:**
1. Áp dụng bất đẳng thức tam giác cho $\triangle ABC$ và $\triangle ACD$.
2. Cộng hai bất đẳng thức, chú ý chu vi.

::solution
Trong tam giác $ABC$: $AC<AB+BC=5+6=11$. Trong tam giác $ACD$: $AC<CD+DA=7+4=11$. Chu vi tứ giác là $5+6+7+4=22$ cm, và $11$ là nửa chu vi.

Vậy $AC<11$ cm. (Cộng hai bất đẳng thức: $2AC<22$, cũng cho $AC<11$.)

**Đáp số.** $AC<11$ cm.
:::

:::exercise Thử thách
Cho tứ giác lồi $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Chứng minh rằng tổng hai đường chéo lớn hơn nửa chu vi tứ giác:
$$AC+BD>\dfrac{AB+BC+CD+DA}{2}.$$

::hint
**Kiến thức:** bất đẳng thức tam giác cho bốn tam giác $OAB$, $OBC$, $OCD$, $ODA$; $AC=OA+OC$ và $BD=OB+OD$.

**Gợi ý các bước:**
1. Viết bất đẳng thức tam giác cho từng tam giác.
2. Cộng bốn bất đẳng thức rồi so sánh với $AC+BD$.

::solution
Vì tứ giác lồi nên $O$ nằm giữa $A$ và $C$, và giữa $B$ và $D$, nên $AC=OA+OC$ và $BD=OB+OD$. Áp dụng bất đẳng thức tam giác:
$$OA+OB>AB,\quad OB+OC>BC,\quad OC+OD>CD,\quad OD+OA>DA.$$
Cộng bốn bất đẳng thức, ta có $2(OA+OB+OC+OD)>AB+BC+CD+DA$. Mà $OA+OB+OC+OD=AC+BD$, nên
$$2(AC+BD)>AB+BC+CD+DA.$$
Vậy $AC+BD>\dfrac{AB+BC+CD+DA}{2}$.

**Đáp số.** Bất đẳng thức được chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Tổng bốn góc của một tứ giác bằng
A. $180^\circ$.
B. $360^\circ$.
C. $270^\circ$.
D. $540^\circ$.
::key B
Tứ giác chia thành hai tam giác bằng một đường chéo, nên tổng góc là $2\cdot180^\circ=360^\circ$. A là tổng góc của tam giác, D là tổng góc của ngũ giác.

::mc
Tứ giác $ABCD$ có $\widehat{A}=80^\circ$, $\widehat{B}=100^\circ$, $\widehat{C}=120^\circ$. Góc $\widehat{D}$ bằng
A. $40^\circ$.
B. $50^\circ$.
C. $60^\circ$.
D. $80^\circ$.
::key C
$\widehat{D}=360^\circ-(80^\circ+100^\circ+120^\circ)=360^\circ-300^\circ=60^\circ$. A, B, D đều không thỏa mãn tổng $360^\circ$.

::mc
Bốn góc của một tứ giác tỉ lệ với $1:2:4:5$. Góc lớn nhất bằng
A. $180^\circ$.
B. $120^\circ$.
C. $90^\circ$.
D. $150^\circ$.
::key D
Tổng các phần là $12$ nên mỗi phần là $360^\circ:12=30^\circ$ và góc lớn nhất là $5\cdot30^\circ=150^\circ$. B là góc thứ ba, C chia nhầm cho $4$.

::mc
Hai đường chéo của tứ giác $ABCD$ là
A. $AC$ và $BD$.
B. $BC$ và $DA$.
C. $AB$ và $CD$.
D. $AB$ và $BC$.
::key A
Đường chéo nối hai đỉnh đối nhau, là $AC$ và $BD$. A và B là các cặp cạnh đối, D là hai cạnh kề.

::tf
Tứ giác $ABCD$ có $\widehat{A}=90^\circ$, $\widehat{B}=100^\circ$, $\widehat{C}=70^\circ$.
a) $\widehat{D}=100^\circ$.
b) $\widehat{B}+\widehat{D}=200^\circ$.
c) $\widehat{A}+\widehat{C}=180^\circ$.
d) $AC$ là một cạnh của tứ giác.
::key Đ Đ S S
a) Đúng: $360-(90+100+70)=100$. b) Đúng: $100+100=200$. c) Sai: $90+70=160$. d) Sai: $AC$ là đường chéo, vì $A$ và $C$ là hai đỉnh đối nhau.

::sa
Tứ giác $ABCD$ có $\widehat{A}=85^\circ$, $\widehat{B}=95^\circ$, $\widehat{C}=100^\circ$. Tính $\widehat{D}$ (độ).
::key 80
$\widehat{D}=360^\circ-(85^\circ+95^\circ+100^\circ)=360^\circ-280^\circ=80^\circ$.

::sa
Bốn góc của một tứ giác tỉ lệ với $1:3:4:4$. Tính góc nhỏ nhất (độ).
::key 30
Tổng các phần là $12$ nên mỗi phần là $30^\circ$, và góc nhỏ nhất là $1\cdot30^\circ=30^\circ$.
:::
