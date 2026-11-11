---
title: Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác
description: Xác định tâm và tính bán kính đường tròn ngoại tiếp, nội tiếp tam giác; trường hợp tam giác vuông, tam giác đều và các bài toán thực tế.
minutes: 20
---

:::goals
- Nhận biết đường tròn ngoại tiếp, đường tròn nội tiếp của một tam giác và giải thích vì sao tâm của chúng là giao điểm các đường trung trực, các đường phân giác.
- Tính bán kính đường tròn ngoại tiếp tam giác vuông, bán kính hai đường tròn của tam giác đều.
- Vận dụng vào các bài toán thực tế.
:::

Giả sử ba bản làng $A$, $B$, $C$ ở vùng núi muốn đặt chung một trạm phát sóng sao cho khoảng cách từ trạm đến ba bản **bằng nhau**, để không bản nào bị "thiệt". Đặt trạm ở đâu?

Một bài toán khác: từ một tấm gỗ hình tam giác, người thợ muốn cắt ra một mặt bàn tròn **lớn nhất**. Mép bàn phải chạm cả ba cạnh tấm gỗ, vì nếu còn hở một cạnh thì vẫn nới rộng được. Hai bài toán, hai đường tròn đặc biệt của tam giác.

## Đường tròn ngoại tiếp tam giác

### Khám phá: điểm cách đều ba đỉnh

Điểm cách đều $A$ và $B$ nằm trên đường trung trực của $AB$; điểm cách đều $B$ và $C$ nằm trên đường trung trực của $BC$. Giao điểm $O$ của hai đường này có $OA=OB=OC$, nên $O$ cũng thuộc đường trung trực của $AC$. Đường tròn tâm $O$ bán kính $OA$ đi qua cả ba đỉnh.

:::definition Đường tròn ngoại tiếp tam giác
Đường tròn đi qua ba đỉnh của một tam giác gọi là **đường tròn ngoại tiếp** tam giác đó; tam giác gọi là **tam giác nội tiếp** đường tròn. Tâm của nó là giao điểm ba đường trung trực của tam giác.
:::

Mỗi tam giác có đúng một đường tròn ngoại tiếp. Tâm $O$ nằm trong tam giác nếu tam giác nhọn, nằm ngoài nếu tam giác tù, và nằm trên cạnh huyền nếu tam giác vuông.

:::diagram Đường tròn ngoại tiếp tam giác $ABC$
alt: Tam giác ABC nội tiếp đường tròn tâm O; từ O kẻ các đoạn vuông góc tới trung điểm ba cạnh
point O 0,0 right
point A -2.598,-1.5 below-left
point B 2.598,-1.5 below-right
point C -0.521,2.954 above
point M 0,-1.5 below
point N 1.039,0.727 right
point P -1.56,0.727 left
polygon A B C
circle O 3
segment O M dashed
segment O N dashed
segment O P dashed
right O M B
right O N C
right O P A
:::

### Tam giác vuông

Nếu tam giác $ABC$ vuông tại $A$ thì $\widehat{BAC}=90^\circ$ là góc nội tiếp, nên nó chắn nửa đường tròn (bài [Góc nội tiếp](lesson:inscribed-angles)). Do đó:

:::theorem Đường tròn ngoại tiếp tam giác vuông
Tâm đường tròn ngoại tiếp tam giác vuông là trung điểm của cạnh huyền; bán kính bằng nửa cạnh huyền.
:::

:::example Vận dụng: đặt trạm phát sóng
Giả sử ba bản $A$, $B$, $C$ có $AB=6$ km, $AC=8$ km và $\widehat{BAC}=90^\circ$. Tìm vị trí đặt trạm cách đều ba bản và tính khoảng cách đó.

**Lời giải.**

*Hiểu đề.* Cần điểm cách đều ba đỉnh, tức tâm đường tròn ngoại tiếp tam giác $ABC$.

*Tìm cách giải.* Tam giác vuông tại $A$ nên tâm là trung điểm của cạnh huyền $BC$.

*Giải.* Xét tam giác $ABC$ vuông tại $A$, theo định lí Pythagore ta có

$$BC=\sqrt{6^2+8^2}=10\ \text{(km)}.$$

Gọi $O$ là trung điểm của $BC$, ta có $OA=OB=OC=\dfrac{BC}{2}=5$ km.

Vậy trạm đặt tại trung điểm của đoạn $BC$, cách mỗi bản $5$ km.

*Nhìn lại.* Nếu góc tại $A$ tù thì tâm nằm **ngoài** tam giác: trạm ở xa cả ba bản hơn cần thiết. Khi đó có thể chọn tiêu chí khác (chẳng hạn trạm ở trung điểm cạnh dài nhất và phủ sóng cả ba bản). Toán học trả lời đúng câu hỏi ta đặt ra, nên phải đặt câu hỏi cho đúng.
:::

## Đường tròn nội tiếp tam giác

Điểm nằm trên tia phân giác của một góc thì cách đều hai cạnh của góc (lớp 7). Giao điểm $I$ của hai đường phân giác trong (tại $B$ và $C$) cách đều cả ba cạnh, nên $I$ cũng nằm trên phân giác của góc $A$.

:::definition Đường tròn nội tiếp tam giác
Đường tròn tiếp xúc với ba cạnh của một tam giác gọi là **đường tròn nội tiếp** tam giác; tam giác gọi là **tam giác ngoại tiếp** đường tròn. Tâm của nó là giao điểm ba đường phân giác trong của tam giác, luôn nằm bên trong tam giác.
:::

Bán kính $r$ bằng khoảng cách từ $I$ đến mỗi cạnh. Các cạnh là tiếp tuyến, nên từ mỗi đỉnh hai đoạn tiếp tuyến bằng nhau (bài [Vị trí tương đối của đường thẳng và đường tròn](lesson:line-circle-positions)).

:::diagram Đường tròn nội tiếp tam giác vuông $ABC$ có cạnh $3$, $4$, $5$
alt: Tam giác ABC vuông tại A với AB bằng 4, AC bằng 3; đường tròn tâm I bán kính 1 tiếp xúc ba cạnh tại D, E, F
point A 0,0 below-left
point B 4,0 below-right
point C 0,3 above-left
point I 1,1 right
point D 1,0 below
point E 1.6,1.8 above-right
point F 0,1 left
polygon A B C
circle I 1
segment I D dashed
segment I F dashed
segment I E dashed
right A D I
right A F I
right B A C
:::

:::example Bán kính đường tròn nội tiếp tam giác vuông
Cho tam giác $ABC$ vuông tại $A$ có $AB=4$ cm, $AC=3$ cm. Tính bán kính $r$ của đường tròn nội tiếp.

**Lời giải.** Ta có $BC=\sqrt{4^2+3^2}=5$ (cm). Gọi $D$, $E$, $F$ là tiếp điểm trên $AB$, $BC$, $CA$. Tứ giác $ADIF$ có ba góc vuông và $ID=IF=r$ nên là hình vuông, suy ra $AD=AF=r$. Theo tính chất hai tiếp tuyến cắt nhau, ta có $BD=BE$, $CE=CF$. Do đó

$$AB+AC-BC=(r+BD)+(r+CF)-(BE+CE)=2r.$$

Suy ra $r=\dfrac{4+3-5}{2}=1$ (cm).

Vậy bán kính đường tròn nội tiếp bằng $1$ cm.

**Nhận xét.** Công thức $r=\dfrac{b+c-a}{2}$ đúng cho mọi tam giác vuông với hai cạnh góc vuông $b$, $c$ và cạnh huyền $a$.
:::

:::example Vận dụng: mặt bàn tròn lớn nhất
Từ một tấm gỗ hình tam giác vuông có các cạnh $30$ cm, $40$ cm, $50$ cm, người thợ cắt một mặt bàn tròn lớn nhất. Tính bán kính mặt bàn và diện tích phần gỗ bỏ đi (làm tròn kết quả đến hàng đơn vị của cm²).

**Lời giải.** Mặt bàn lớn nhất là hình tròn nội tiếp tam giác. Ta có $30^2+40^2=50^2$ nên tam giác vuông, với cạnh huyền $50$ cm. Do đó

$$r=\frac{30+40-50}{2}=10\ \text{(cm)}.$$

Diện tích phần gỗ bỏ đi bằng diện tích tam giác trừ diện tích hình tròn:

$$\frac12\cdot30\cdot40-\pi\cdot10^2=600-100\pi\approx286\ \text{(cm}^2).$$

Vậy mặt bàn có bán kính $10$ cm và phần gỗ bỏ đi khoảng $286$ cm².
:::

## Tam giác đều

Trong tam giác đều, mỗi đường trung trực cũng là đường phân giác, đường trung tuyến và đường cao. Vì vậy tâm đường tròn ngoại tiếp và tâm đường tròn nội tiếp **trùng nhau** tại trọng tâm $G$. Trọng tâm nằm trên trung tuyến, cách đỉnh $\dfrac23$ trung tuyến (lớp 7).

:::theorem Tam giác đều cạnh $a$
Đường cao (cũng là trung tuyến) dài $h=\dfrac{a\sqrt3}{2}$, nên
$$R=\frac23h=\frac{a\sqrt3}{3},\qquad r=\frac13h=\frac{a\sqrt3}{6},\qquad R=2r.$$
:::

:::example Tam giác đều cạnh $6$ cm
Tính bán kính đường tròn ngoại tiếp và đường tròn nội tiếp của tam giác đều cạnh $6$ cm.

**Lời giải.** Đường cao của tam giác là $h=\dfrac{6\sqrt3}{2}=3\sqrt3$ (cm). Tâm của hai đường tròn là trọng tâm $G$, do đó

$$R=\frac23\cdot3\sqrt3=2\sqrt3\approx3{,}46\ \text{(cm)},\qquad r=\frac13\cdot3\sqrt3=\sqrt3\approx1{,}73\ \text{(cm)}.$$

Vậy $R=2\sqrt3$ cm và $r=\sqrt3$ cm.
:::

:::warning Những sai lầm thường gặp
- **Nhầm hai loại tâm.** Tâm ngoại tiếp là giao các đường **trung trực** (cách đều ba đỉnh); tâm nội tiếp là giao các đường **phân giác** (cách đều ba cạnh).
- **Lấy $R$ bằng cạnh huyền.** Sai: tam giác vuông có cạnh huyền $10$ cm nên $R=10$ cm. Đúng: $R=5$ cm (nửa cạnh huyền).
- **Đảo $\dfrac23$ và $\dfrac13$ ở tam giác đều.** $R$ là đoạn từ tâm đến đỉnh (dài hơn), $r$ là đoạn từ tâm đến cạnh: $R=2r$.
:::

**Kết nối.** Bài này gom nhiều kiến thức cũ: đường trung trực và phân giác (lớp 7), góc nội tiếp chắn nửa đường tròn, tính chất hai tiếp tuyến cắt nhau. Câu hỏi "đi qua ba điểm" sẽ mở rộng thành câu hỏi "bốn điểm có cùng nằm trên một đường tròn không?" ở bài [Tứ giác nội tiếp](lesson:cyclic-quadrilaterals), và tam giác đều là trường hợp đầu tiên của [đa giác đều](lesson:regular-polygons).

## Thuật ngữ

:::terms
- đường tròn ngoại tiếp | circumcircle (circumscribed circle)
- đường tròn nội tiếp | incircle (inscribed circle)
- tâm đường tròn ngoại tiếp | circumcentre
- tâm đường tròn nội tiếp | incentre
- đường trung trực | perpendicular bisector
- đường phân giác | angle bisector
- trọng tâm | centroid
:::

## Tóm tắt

- Tâm ngoại tiếp $O$: giao ba đường trung trực, $OA=OB=OC=R$.
- Tâm nội tiếp $I$: giao ba đường phân giác, cách đều ba cạnh một khoảng $r$.
- Tam giác vuông: $O$ là trung điểm cạnh huyền, $R=\dfrac a2$; $r=\dfrac{b+c-a}{2}$.
- Tam giác đều cạnh $a$: $R=\dfrac{a\sqrt3}{3}$, $r=\dfrac{a\sqrt3}{6}$, hai tâm trùng nhau.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $AB=5$ cm, $AC=12$ cm. Xác định tâm và tính bán kính đường tròn ngoại tiếp tam giác.

::hint
**Kiến thức:** tâm là trung điểm cạnh huyền, $R$ bằng nửa cạnh huyền.

**Gợi ý các bước:**
1. Tính $BC$ bằng định lí Pythagore, rồi chia đôi.

::solution
Xét tam giác $ABC$ vuông tại $A$. Theo định lí Pythagore, ta có
$$BC=\sqrt{AB^2+AC^2}=\sqrt{5^2+12^2}=\sqrt{169}=13\ \text{(cm)}.$$

Tâm đường tròn ngoại tiếp tam giác vuông là trung điểm $O$ của cạnh huyền $BC$, và bán kính bằng nửa cạnh huyền:
$$R=\frac{BC}{2}=\frac{13}{2}=6{,}5\ \text{(cm)}.$$

Vậy tâm đường tròn ngoại tiếp là trung điểm của $BC$ và bán kính bằng $6{,}5$ cm.

**Đáp số.** Trung điểm của $BC$; $R=6{,}5$ cm.
:::

:::exercise
Tính bán kính đường tròn ngoại tiếp và đường tròn nội tiếp của tam giác đều cạnh $9$ cm.

::hint
**Kiến thức:** $R=\dfrac{a\sqrt3}{3}$, $r=\dfrac{a\sqrt3}{6}$.

**Gợi ý các bước:**
1. Thay $a=9$ vào hai công thức.

::solution
Với tam giác đều cạnh $a$, bán kính đường tròn ngoại tiếp là $R=\dfrac{a\sqrt3}{3}$ và bán kính đường tròn nội tiếp là $r=\dfrac{a\sqrt3}{6}$.

Với $a=9$ cm, ta có
$$R=\frac{9\sqrt3}{3}=3\sqrt3\approx5{,}2\ \text{(cm)};\qquad r=\frac{9\sqrt3}{6}=\frac{3\sqrt3}{2}\approx2{,}6\ \text{(cm)}.$$

Vậy $R=3\sqrt3$ cm và $r=\dfrac{3\sqrt3}{2}$ cm.

**Đáp số.** $R=3\sqrt3$ cm; $r=\dfrac{3\sqrt3}{2}$ cm.
:::

:::exercise
Một tam giác đều nội tiếp đường tròn bán kính $4$ cm. Tính cạnh của tam giác.

::hint
**Kiến thức:** $R=\dfrac{a\sqrt3}{3}$.

**Gợi ý các bước:**
1. Giải $\dfrac{a\sqrt3}{3}=4$ để tìm $a$.

::solution
Gọi $a$ (cm) là cạnh của tam giác đều ($a>0$).

Bán kính đường tròn ngoại tiếp tam giác đều cạnh $a$ là $R=\dfrac{a\sqrt3}{3}$. Theo đề bài, $R=4$ cm nên
$$\frac{a\sqrt3}{3}=4.$$

Suy ra
$$a=\frac{12}{\sqrt3}=\frac{12\sqrt3}{3}=4\sqrt3\approx6{,}93\ \text{(cm)}.$$

Vậy cạnh của tam giác đều bằng $4\sqrt3$ cm.

**Đáp số.** $4\sqrt3$ cm.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $AB=6$ cm, $AC=8$ cm. Tính bán kính $R$ của đường tròn ngoại tiếp và bán kính $r$ của đường tròn nội tiếp.

::hint
**Kiến thức:** $R=\dfrac a2$, $r=\dfrac{b+c-a}{2}$.

**Gợi ý các bước:**
1. Tính cạnh huyền $BC$.
2. Thay vào hai công thức.

::solution
Xét tam giác $ABC$ vuông tại $A$. Theo định lí Pythagore, ta có
$$BC=\sqrt{AB^2+AC^2}=\sqrt{6^2+8^2}=\sqrt{100}=10\ \text{(cm)}.$$

Đường tròn ngoại tiếp tam giác vuông có tâm là trung điểm cạnh huyền, nên
$$R=\frac{BC}{2}=5\ \text{(cm)}.$$

Bán kính đường tròn nội tiếp tam giác vuông có hai cạnh góc vuông $b$, $c$ và cạnh huyền $a$ là $r=\dfrac{b+c-a}{2}$. Do đó
$$r=\frac{AB+AC-BC}{2}=\frac{6+8-10}{2}=2\ \text{(cm)}.$$

Vậy $R=5$ cm và $r=2$ cm.

**Đáp số.** $R=5$ cm; $r=2$ cm.
:::

:::exercise
Giả sử một bồn hoa hình tam giác đều cạnh $30$ m. Người ta đặt một vòi phun nước xoay tròn tại điểm cách đều ba đỉnh.

a) Bán kính phun nhỏ nhất bằng bao nhiêu để nước tới được cả ba góc bồn hoa?

b) Bán kính phun lớn nhất bằng bao nhiêu để nước không ra khỏi bồn hoa?

(Làm tròn kết quả đến hàng phần mười của mét.)

::hint
**Kiến thức:** vòi ở tâm chung của hai đường tròn; tới ba góc cần $R$, không ra ngoài cần $\leq r$.

**Gợi ý các bước:**
1. Tính $R=\dfrac{a\sqrt3}{3}$ và $r=\dfrac{a\sqrt3}{6}$ với $a=30$.

::solution
Điểm cách đều ba đỉnh của tam giác đều là tâm $O$ của tam giác; $O$ vừa là tâm đường tròn ngoại tiếp, vừa là tâm đường tròn nội tiếp.

a) Để nước tới được cả ba góc bồn hoa, bán kính phun phải ít nhất bằng khoảng cách từ $O$ đến mỗi đỉnh, tức là bán kính đường tròn ngoại tiếp:
$$R=\frac{30\sqrt3}{3}=10\sqrt3\approx17{,}3\ \text{(m)}.$$

Vậy bán kính phun nhỏ nhất là khoảng $17{,}3$ m.

b) Để nước không ra khỏi bồn hoa, bán kính phun không được vượt quá khoảng cách từ $O$ đến mỗi cạnh, tức là bán kính đường tròn nội tiếp:
$$r=\frac{30\sqrt3}{6}=5\sqrt3\approx8{,}7\ \text{(m)}.$$

Vậy bán kính phun lớn nhất là khoảng $8{,}7$ m.

*Nhận xét.* Vì $8{,}7<17{,}3$ nên không có bán kính nào thoả mãn đồng thời cả hai yêu cầu.

**Đáp số.** a) $10\sqrt3\approx17{,}3$ m; b) $5\sqrt3\approx8{,}7$ m.
:::

:::exercise
Một tấm bìa hình tam giác vuông có hai cạnh góc vuông $9$ cm và $12$ cm. Bạn Lan muốn cắt một hình tròn lớn nhất từ tấm bìa. Tính bán kính hình tròn và tỉ lệ phần trăm diện tích tấm bìa được dùng (làm tròn kết quả đến hàng đơn vị).

::hint
**Kiến thức:** hình tròn lớn nhất là hình tròn nội tiếp; $r=\dfrac{b+c-a}{2}$.

**Gợi ý các bước:**
1. Tính cạnh huyền và $r$.
2. Lấy diện tích hình tròn chia diện tích tam giác.

::solution
Ta có cạnh huyền bằng $\sqrt{9^2+12^2}=15$ (cm), nên $r=\dfrac{9+12-15}{2}=3$ (cm). Diện tích tam giác là $\dfrac12\cdot9\cdot12=54$ (cm²), diện tích hình tròn là $9\pi$ cm². Do đó tỉ lệ là

$$\frac{9\pi}{54}=\frac{\pi}{6}\approx52\%.$$

Vậy hình tròn có bán kính $3$ cm và dùng khoảng $52\%$ tấm bìa.

**Đáp số.** $r=3$ cm; khoảng $52\%$.
:::

:::exercise
**(2,0 điểm)** Cho tam giác $ABC$ vuông tại $A$ có $AB=9$ cm, $AC=12$ cm.

a) Tính $BC$ và bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$.

b) Tính bán kính $r$ của đường tròn nội tiếp tam giác $ABC$.

c) Tính diện tích phần hình tròn ngoại tiếp nằm ngoài tam giác $ABC$ (làm tròn kết quả đến hàng phần trăm của cm²).

::hint
**Kiến thức:** $R=\dfrac{BC}{2}$; $r=\dfrac{AB+AC-BC}{2}$; diện tích hình tròn $\pi R^2$.

**Gợi ý các bước:**
1. Dùng định lí Pythagore.
2. Lấy diện tích hình tròn trừ diện tích tam giác.

::solution
a) Xét tam giác $ABC$ vuông tại $A$. Theo định lí Pythagore, ta có
$$BC=\sqrt{AB^2+AC^2}=\sqrt{9^2+12^2}=\sqrt{225}=15\ \text{(cm)}.$$

Đường tròn ngoại tiếp tam giác vuông có tâm là trung điểm cạnh huyền $BC$, nên $R=\dfrac{BC}{2}=7{,}5$ (cm).

Vậy $BC=15$ cm và $R=7{,}5$ cm.

b) Bán kính đường tròn nội tiếp tam giác vuông là
$$r=\frac{AB+AC-BC}{2}=\frac{9+12-15}{2}=3\ \text{(cm)}.$$

Vậy $r=3$ cm.

c) Diện tích hình tròn ngoại tiếp là $\pi R^2=\pi\cdot7{,}5^2=56{,}25\pi$ (cm²).

Diện tích tam giác $ABC$ là $\dfrac12\cdot AB\cdot AC=\dfrac12\cdot9\cdot12=54$ (cm²).

Diện tích phần hình tròn nằm ngoài tam giác là
$$56{,}25\pi-54\approx122{,}71\ \text{(cm}^2\text{)}.$$

Vậy diện tích cần tìm khoảng $122{,}71$ cm².

**Đáp số.** a) $15$ cm, $7{,}5$ cm; b) $3$ cm; c) $\approx122{,}71$ cm².
:::

:::exercise Thử thách
Gọi $I$ và $r$ là tâm và bán kính đường tròn nội tiếp tam giác $ABC$. Chứng minh rằng $S_{ABC}=\dfrac12r\,(AB+BC+CA)$. Áp dụng: tam giác $ABC$ có $AB=13$ cm, $BC=14$ cm, $CA=15$ cm và đường cao $AH=12$ cm; tính $r$.

::hint
**Kiến thức:** khoảng cách từ $I$ đến mỗi cạnh bằng $r$.

**Gợi ý các bước:**
1. Chia tam giác $ABC$ thành ba tam giác $IAB$, $IBC$, $ICA$.
2. Tính $S_{ABC}=\dfrac12\cdot BC\cdot AH$ rồi suy ra $r$.

::solution
Ba tam giác $IAB$, $IBC$, $ICA$ có đường cao kẻ từ $I$ đều bằng $r$, do đó

$$S_{ABC}=\frac12r\cdot AB+\frac12r\cdot BC+\frac12r\cdot CA=\frac12r\,(AB+BC+CA).$$

Áp dụng: $S_{ABC}=\dfrac12\cdot14\cdot12=84$ (cm²), suy ra $r=\dfrac{2\cdot84}{13+14+15}=\dfrac{168}{42}=4$ (cm).

Vậy $r=4$ cm.

**Đáp số.** $r=4$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Tâm đường tròn ngoại tiếp một tam giác là giao điểm của ba đường
A. trung trực.
B. phân giác.
C. trung tuyến.
D. cao.
::key A
Tâm cách đều ba đỉnh nên nằm trên các đường trung trực. B cho tâm nội tiếp, C cho trọng tâm, D cho trực tâm; ba điểm này nói chung không cách đều ba đỉnh.

::mc
Tam giác vuông có cạnh huyền $10$ cm. Bán kính đường tròn ngoại tiếp là
A. $10$ cm.
B. $5$ cm.
C. $2{,}5$ cm.
D. $20$ cm.
::key B
Bán kính bằng nửa cạnh huyền. A lấy cả cạnh huyền, C chia đôi hai lần, D nhân đôi thay vì chia đôi.

::mc
Bán kính đường tròn nội tiếp tam giác đều cạnh $6$ cm là
A. $2\sqrt3$ cm.
B. $3\sqrt3$ cm.
C. $3$ cm.
D. $\sqrt3$ cm.
::key D
$r=\dfrac{6\sqrt3}{6}=\sqrt3$. A là $R$, B là đường cao, C là nửa cạnh.

::mc
Tam giác vuông có hai cạnh góc vuông $5$ cm và $12$ cm. Bán kính đường tròn nội tiếp là
A. $4$ cm.
B. $6{,}5$ cm.
C. $2$ cm.
D. $8{,}5$ cm.
::key C
Cạnh huyền $13$ cm, $r=\dfrac{5+12-13}{2}=2$. A quên chia $2$, B là $R$, D quên trừ cạnh huyền.

::tf
Cho tam giác đều $ABC$ cạnh $12$ cm. Xét tính đúng sai của các mệnh đề sau:
a) Bán kính đường tròn ngoại tiếp là $4\sqrt3$ cm.
b) Bán kính đường tròn nội tiếp là $2\sqrt3$ cm.
c) Bán kính đường tròn ngoại tiếp gấp đôi bán kính đường tròn nội tiếp.
d) Tâm đường tròn ngoại tiếp và tâm đường tròn nội tiếp là hai điểm khác nhau.
::key Đ Đ Đ S
a) Đúng: $\dfrac{12\sqrt3}{3}$. b) Đúng: $\dfrac{12\sqrt3}{6}$. c) Đúng: $R=2r$. d) Sai: hai tâm trùng nhau tại trọng tâm.

::sa
Tam giác vuông có hai cạnh góc vuông $8$ cm và $15$ cm. Tính bán kính (đơn vị: cm) đường tròn ngoại tiếp (viết dưới dạng số thập phân).
::key 8,5
Cạnh huyền $\sqrt{64+225}=17$ cm, nên $R=8{,}5$ cm.

::sa
Một tam giác có diện tích $24$ cm² và chu vi $24$ cm. Tính bán kính (đơn vị: cm) đường tròn nội tiếp.
::key 2
$S=\dfrac12r\cdot(\text{chu vi})$, nên $r=\dfrac{2\cdot24}{24}=2$ cm.
:::
