---
title: Đường thẳng vuông góc với mặt phẳng
description: Hiểu đường thẳng vuông góc với mặt phẳng, điều kiện dùng hai đường thẳng cắt nhau, các tính chất liên hệ với song song và vận dụng chứng minh, tính độ dài.
minutes: 25
---

:::goals
- Hiểu định nghĩa đường thẳng vuông góc với mặt phẳng.
- Nắm và dùng điều kiện: vuông góc với hai đường thẳng cắt nhau trong mặt phẳng.
- Dùng tính chất liên hệ giữa song song và vuông góc để chứng minh quan hệ vuông góc.
- Vận dụng vào các hình chóp, hình lập phương, tứ diện và bài toán thực tế.
:::

Giả sử người thợ dựng một cột cao $6$ m trên sân phẳng (số liệu giả định). Trên sân có vô số đường thẳng đi qua chân cột, nhưng để kiểm tra cột có thẳng đứng, người thợ chỉ dùng thước vuông áp vào chân cột theo hai hướng khác nhau trên sân. Nếu cả hai đều cho góc vuông thì kết luận cột thẳng đứng. Vì sao chỉ cần kiểm tra hai hướng mà không phải vô số hướng?

## Khám phá: một đường vuông góc với nhiều đường

Xét hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=4$, $AD=3$, $AA'=5$. Cạnh $AA'$ vuông góc với $AB$ và $AD$. Ta kiểm tra thêm bằng định lí Pythagore đảo xem $AA'$ có vuông góc với các đường khác của mặt đáy đi qua $A$ không.

| Đường $AX$ trong đáy | $AX^2$ | $A'X^2$ | $AA'^2+AX^2$ | Kết luận |
|---|---|---|---|---|
| $AB$ | $16$ | $41$ | $25+16=41$ | $AA'\perp AB$ |
| $AD$ | $9$ | $34$ | $25+9=34$ | $AA'\perp AD$ |
| $AC$ | $25$ | $50$ | $25+25=50$ | $AA'\perp AC$ |

Chỉ cần $AA'\perp AB$ và $AA'\perp AD$, ta đã thấy $AA'\perp AC$. Đó là gợi ý cho điều kiện ở phần sau.

## Định nghĩa và điều kiện

:::definition Đường thẳng vuông góc với mặt phẳng
Đường thẳng $d$ gọi là **vuông góc với mặt phẳng** $(P)$ nếu $d$ vuông góc với mọi đường thẳng nằm trong $(P)$. Kí hiệu $d\perp(P)$.
:::

:::theorem Điều kiện để đường thẳng vuông góc với mặt phẳng
Nếu đường thẳng $d$ vuông góc với hai đường thẳng $a$, $b$ **cắt nhau** và cùng nằm trong $(P)$ thì $d\perp(P)$.
:::

**Vì sao?** Ta có thể giả sử $d$ đi qua giao điểm $O$ của $a$ và $b$ (nếu không, dời $d$ song song cho đi qua $O$). Lấy $A$, $B$ trên $d$ sao cho $O$ là trung điểm $AB$. Vì $a\perp AB$ tại $O$ nên mọi điểm của $a$ cách đều $A$ và $B$; tương tự với $b$. Lấy một đường thẳng $c$ bất kì của $(P)$ qua $O$, và một đường thẳng của $(P)$ không đi qua $O$ cắt $a$, $b$, $c$ lần lượt tại $M$, $N$, $P$ (với $P$ nằm trên đoạn $MN$ hoặc trên đường thẳng $MN$). Hai tam giác $AMN$ và $BMN$ bằng nhau (c.c.c) nên $\widehat{AMN}=\widehat{BMN}$; do đó hai tam giác $AMP$ và $BMP$ bằng nhau (c.g.c), suy ra $PA=PB$. Tam giác $PAB$ cân tại $P$ có $PO$ là trung tuyến nên $PO\perp AB$, tức $c\perp d$. Vậy $d$ vuông góc với mọi đường thẳng của $(P)$ đi qua $O$, và do đó với mọi đường thẳng của $(P)$.

:::theorem Tính chất
- Qua một điểm có duy nhất một mặt phẳng vuông góc với đường thẳng cho trước, và duy nhất một đường thẳng vuông góc với mặt phẳng cho trước.
- Nếu $a\parallel b$ và $a\perp(P)$ thì $b\perp(P)$.
- Hai đường thẳng cùng vuông góc với một mặt phẳng thì song song.
- Nếu $d\perp(P)$ thì $d$ vuông góc với mọi đường thẳng nằm trong $(P)$.
:::

Mặt phẳng đi qua trung điểm của đoạn $AB$ và vuông góc với $AB$ gọi là **mặt phẳng trung trực** của $AB$. Mọi điểm $M$ thuộc mặt phẳng này đều có $MA=MB$.

:::diagram Hình chóp $S.ABCD$ có $SA\perp(ABCD)$
alt: Hình chóp S.ABCD vẽ theo phép chiếu xiên với cạnh SA thẳng đứng, các góc vuông ở A giữa SA với AB và AD, hai đường chéo AC và BD của đáy vẽ nét đứt
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.5 right
point D 1.2,1.5 above
point S 0,4.2 above-left
segment S A
segment S B
segment S C
segment S D dashed
segment A B
segment B C
segment A D dashed
segment D C dashed
segment A C dashed
segment B D dashed
right S A B
right S A D
:::

## Ví dụ

Ta bắt đầu với chứng minh vuông góc bằng điều kiện.

:::example Chứng minh đường thẳng vuông góc với mặt phẳng
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, $SA\perp AB$ và $SA\perp AD$. Chứng minh $SA\perp(ABCD)$, $BD\perp(SAC)$, rồi suy ra $BD\perp SC$.

**Lời giải.** Vì $SA\perp AB$, $SA\perp AD$ và $AB$, $AD$ cắt nhau tại $A$ trong $(ABCD)$ nên $SA\perp(ABCD)$.

Vì $SA\perp(ABCD)$ và $BD\subset(ABCD)$ nên $SA\perp BD$. Vì $ABCD$ là hình vuông nên $AC\perp BD$. Hai đường thẳng $SA$, $AC$ cắt nhau tại $A$ trong $(SAC)$ nên $BD\perp(SAC)$.

Vì $SC\subset(SAC)$ nên $BD\perp SC$.

Vậy $SA\perp(ABCD)$, $BD\perp(SAC)$ và $BD\perp SC$.
:::

Tiếp theo ta dùng quan hệ song song.

:::example Dùng tính chất song song
Cho hình lập phương $ABCD.A'B'C'D'$. Chứng minh $BD\perp(ACC'A')$ và $BD\perp AC'$.

**Lời giải.** Vì $ABCD$ là hình vuông nên $BD\perp AC$. Vì $AA'\perp(ABCD)$ (do $AA'\perp AB$, $AA'\perp AD$) nên $AA'\perp BD$. Hai đường thẳng $AC$, $AA'$ cắt nhau tại $A$ trong $(ACC'A')$ nên $BD\perp(ACC'A')$.

Vì $AC'\subset(ACC'A')$ nên $BD\perp AC'$.

Vậy $BD\perp(ACC'A')$ và $BD\perp AC'$.
:::

Bây giờ ta tính độ dài nhờ góc vuông.

:::example Tứ diện có ba cạnh đôi một vuông góc
Cho tứ diện $OABC$ có $OA$, $OB$, $OC$ đôi một vuông góc và $OA=OB=OC=a$. Chứng minh $OA\perp BC$ và tính $AM$, với $M$ là trung điểm $BC$.

**Lời giải.** Vì $OA\perp OB$, $OA\perp OC$ và $OB$, $OC$ cắt nhau tại $O$ nên $OA\perp(OBC)$. Suy ra $OA\perp BC$ và $OA\perp OM$.

Tam giác $OBC$ vuông cân tại $O$ nên $BC=a\sqrt2$ và $OM=\dfrac{BC}2=\dfrac{a\sqrt2}{2}$. Xét tam giác $OAM$ vuông tại $O$ (do $OA\perp OM$), ta có
$$AM^2=OA^2+OM^2=a^2+\frac{a^2}{2}=\frac{3a^2}{2}\Rightarrow AM=\frac{a\sqrt6}{2}.$$

Vậy $OA\perp BC$ và $AM=\dfrac{a\sqrt6}{2}$.
:::

Một chứng minh cần dựng thêm trung điểm.

:::example Đường cao của hình chóp có các cạnh bên bằng nhau
Cho hình chóp $S.ABC$ có $SA=SB=SC$. Gọi $I$ là tâm đường tròn ngoại tiếp tam giác $ABC$. Chứng minh $SI\perp(ABC)$.

**Lời giải.** Gọi $M$ là trung điểm $AB$. Vì $IA=IB$ nên $IM\perp AB$. Vì $SA=SB$ nên tam giác $SAB$ cân tại $S$, do đó $SM\perp AB$. Hai đường thẳng $IM$, $SM$ cắt nhau tại $M$ trong $(SIM)$ nên $AB\perp(SIM)$, suy ra $AB\perp SI$.

Tương tự, với $N$ là trung điểm $BC$, ta có $BC\perp SI$. Hai đường thẳng $AB$, $BC$ cắt nhau tại $B$ trong $(ABC)$ nên $SI\perp(ABC)$.

Vậy $SI\perp(ABC)$.
:::

Giờ ta quay lại bài toán cột dựng ở đầu bài, đi đủ bốn bước.

:::example Vận dụng: kiểm tra cột có vuông góc với sân
Giả sử một cột $SO$ có chân $O$ trên sân phẳng. Hai điểm $B$, $C$ trên sân sao cho $O$, $B$, $C$ không thẳng hàng. Đo được $SO=6$ m, $OB=OC=8$ m và $SB=SC=10$ m (số liệu giả định). Cột có vuông góc với sân không?

**Lời giải.**

*Hiểu đề.* Cần biết $SO\perp(\text{sân})$ hay không, dựa vào các độ dài đo được.

*Tìm cách giải.* Dùng điều kiện: nếu $SO$ vuông góc với hai đường thẳng cắt nhau $OB$, $OC$ của sân thì $SO$ vuông góc với sân. Kiểm tra từng góc vuông bằng định lí Pythagore đảo.

*Giải.* Trong tam giác $SOB$ có $SO^2+OB^2=36+64=100=SB^2$ nên $SO\perp OB$. Tương tự $SO^2+OC^2=100=SC^2$ nên $SO\perp OC$. Vì $OB$, $OC$ cắt nhau tại $O$ (do $O$, $B$, $C$ không thẳng hàng) nên $SO\perp(\text{sân})$.

Vậy cột vuông góc với mặt sân.

*Nhìn lại.* Kết quả có hợp lí không? Số đo $6$, $8$, $10$ là bộ ba Pythagore, nên các góc vuông là đúng. Điều kiện nào là cần thiết? Hai đường thẳng $OB$, $OC$ phải cắt nhau. Nếu $O$, $B$, $C$ thẳng hàng thì chỉ biết $SO\perp BC$, và cột vẫn có thể nghiêng sang bên vuông góc với đường $BC$. Vì vậy người thợ phải kiểm tra hai hướng khác nhau, không phải hai điểm trên cùng một hướng.
:::

:::warning Những sai lầm thường gặp
- **Chỉ cần vuông góc với một đường thẳng.** Sai: $d\perp a$ và $a\subset(P)$ nên $d\perp(P)$. Lí do sai: một đường vuông góc có vô số vị trí nghiêng quanh nó. Đúng: cần $d$ vuông góc với hai đường thẳng cắt nhau trong $(P)$.
- **Hai đường thẳng trong $(P)$ song song cũng được.** Sai: $d\perp a$, $d\perp b$ với $a\parallel b$ trong $(P)$ nên $d\perp(P)$. Lí do sai: $a$ và $b$ cùng phương nên chỉ cho một phương duy nhất. Đúng: $a$, $b$ phải cắt nhau.
- **Nhầm với trong mặt phẳng.** Sai: qua điểm $O$ chỉ có một đường thẳng vuông góc với đường thẳng $d$ cho trước. Lí do sai: điều đó chỉ đúng trong một mặt phẳng; trong không gian có vô số đường như vậy, đều nằm trong mặt phẳng qua $O$ vuông góc với $d$. Đúng: qua $O$ có đúng một mặt phẳng vuông góc với $d$.
- **Vuông góc nghĩa là cắt nhau.** Sai: $d\perp(P)$ nên $d$ cắt mọi đường thẳng của $(P)$. Lí do sai: $d$ chỉ cắt các đường qua điểm chung; các đường khác vẫn vuông góc nhưng chéo nhau. Đúng: $d$ vuông góc với mọi đường thẳng trong $(P)$, kể cả những đường chéo nhau với $d$.
:::

**Kết nối.** Bài này dùng [hai đường thẳng vuông góc](lesson:perpendicular-lines-space) và quan hệ song song: để chứng minh $d\perp(P)$ ta chứng minh $d$ vuông góc với hai đường cắt nhau, rồi suy ra $d$ vuông góc với mọi đường trong $(P)$. Bài [phép chiếu vuông góc và góc giữa đường thẳng và mặt phẳng](lesson:orthogonal-projection-angle) dùng mặt phẳng vuông góc để chiếu một điểm xuống mặt phẳng, còn bài [khoảng cách trong không gian](lesson:distances-space) dùng đường vuông góc để đo khoảng cách. Trong thực tế, thợ xây dùng thước vuông và dây dọi để dựng cột thẳng đứng.

## Thuật ngữ

:::terms
- đường thẳng vuông góc với mặt phẳng | line perpendicular to a plane
- mặt phẳng trung trực | perpendicular bisector plane
- hai đường thẳng cắt nhau | intersecting lines
- hai đường thẳng chéo nhau | skew lines
- hình chóp | pyramid
- tứ diện | tetrahedron
- tâm đường tròn ngoại tiếp | circumcentre
- định lí Pythagore đảo | converse of Pythagoras' theorem
- đường cao | height
- tam giác cân | isosceles triangle
:::

## Tóm tắt

- $d\perp(P)$ nếu $d$ vuông góc với mọi đường thẳng của $(P)$.
- Điều kiện: $d$ vuông góc với hai đường thẳng cắt nhau nằm trong $(P)$ thì $d\perp(P)$.
- $a\parallel b$ và $a\perp(P)$ thì $b\perp(P)$; hai đường cùng vuông góc với $(P)$ thì song song.
- Qua một điểm có duy nhất một mặt phẳng vuông góc với đường thẳng cho trước và duy nhất một đường thẳng vuông góc với mặt phẳng cho trước.
- Nếu $d\perp(P)$ thì $d$ vuông góc với mọi đường thẳng trong $(P)$; dùng để tạo tam giác vuông và tính độ dài.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho hình lập phương $ABCD.A'B'C'D'$. Chứng minh:

a) $AA'\perp(ABCD)$.

b) $BD\perp(ACC'A')$.

c) $A'C'\perp(BDD'B')$.

::hint
**Kiến thức:** điều kiện vuông góc với hai đường cắt nhau; nếu $a\parallel b$ và $a\perp(P)$ thì $b\perp(P)$.

**Gợi ý các bước:**
1. Tìm hai đường thẳng cắt nhau trong mặt phẳng và vuông góc với đường đã cho.
2. Ở câu c, dời $A'C'$ về $AC$.

::solution
a) $AA'\perp AB$ và $AA'\perp AD$ (các mặt bên là hình vuông), $AB$, $AD$ cắt nhau tại $A$ trong $(ABCD)$ nên $AA'\perp(ABCD)$.

b) $BD\perp AC$ (hai đường chéo hình vuông) và $BD\perp AA'$ (do $AA'\perp(ABCD)$). $AC$, $AA'$ cắt nhau trong $(ACC'A')$ nên $BD\perp(ACC'A')$.

c) Tương tự, $AC\perp BD$ và $AC\perp BB'$ nên $AC\perp(BDD'B')$. Vì $A'C'\parallel AC$ nên $A'C'\perp(BDD'B')$.

**Đáp số.** Cả ba mệnh đề đều đúng.
:::

:::exercise
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật và $SA\perp(ABCD)$. Chứng minh $BC\perp(SAB)$ và $CD\perp(SAD)$.

::hint
**Kiến thức:** $SA\perp(ABCD)$ nên $SA$ vuông góc với mọi đường thẳng trong đáy.

**Gợi ý các bước:**
1. Chỉ ra $BC$ vuông góc với hai đường cắt nhau trong $(SAB)$.
2. Làm tương tự cho $CD$ và $(SAD)$.

::solution
$BC\perp AB$ (hình chữ nhật) và $BC\perp SA$ (do $SA\perp(ABCD)$). $AB$, $SA$ cắt nhau tại $A$ trong $(SAB)$ nên $BC\perp(SAB)$.

$CD\perp AD$ (hình chữ nhật) và $CD\perp SA$. $AD$, $SA$ cắt nhau tại $A$ trong $(SAD)$ nên $CD\perp(SAD)$.

**Đáp số.** Hai mệnh đề đều được chứng minh.
:::

:::exercise
Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, tam giác $ABC$ vuông tại $B$, $SA=3$, $AB=4$, $BC=5$. Chứng minh $BC\perp(SAB)$, rồi tính $SB$ và $SC$.

::hint
**Kiến thức:** $BC\perp(SAB)$ cho $BC\perp SB$; định lí Pythagore.

**Gợi ý các bước:**
1. Dùng $BC\perp AB$ và $BC\perp SA$.
2. Tính $SB$ từ tam giác $SAB$ rồi $SC$ từ tam giác $SBC$.

::solution
$BC\perp AB$ và $BC\perp SA$ nên $BC\perp(SAB)$, suy ra $BC\perp SB$.

Tam giác $SAB$ vuông tại $A$ nên $SB^2=9+16=25$, $SB=5$. Tam giác $SBC$ vuông tại $B$ nên $SC^2=SB^2+BC^2=25+25=50$, $SC=5\sqrt2$.

**Đáp số.** $SB=5$; $SC=5\sqrt2$.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau. Cho hình chóp $S.ABCD$, đáy $ABCD$ là hình vuông, $SA\perp(ABCD)$.

a) $AC\perp(SBD)$.

b) $BD\perp(SAC)$.

c) $AD\perp(SCD)$.

d) $BC\perp(SAB)$.

::hint
**Kiến thức:** điều kiện vuông góc với hai đường cắt nhau; hai đường chéo hình vuông vuông góc.

**Gợi ý các bước:**
1. Với mỗi câu, tìm hai đường thẳng cắt nhau trong mặt phẳng cần xét.
2. Kiểm tra từng đường có vuông góc với đường thẳng đã cho không.

::solution
a) **Sai**: $AC\perp BD$ nhưng $AC$ không vuông góc với $SD$ (hoặc $SB$).

b) **Đúng**: $BD\perp AC$ và $BD\perp SA$.

c) **Sai**: $AD\perp CD$ nhưng $AD$ không vuông góc với $SD$ (vì $SA\perp AD$ và $SA\neq0$ nên góc $SDA$ không vuông).

d) **Đúng**: $BC\perp AB$ và $BC\perp SA$.

**Đáp số.** a) Sai; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Giả sử một cột $SO$ có chân $O$ trên sân phẳng, hai điểm $B$, $C$ trên sân sao cho $O$, $B$, $C$ không thẳng hàng. Đo được $SO=9$ m, $OB=12$ m, $SB=15$ m, $OC=40$ m, $SC=41$ m (số liệu giả định). Cột có vuông góc với mặt sân không? Giải thích.

::hint
**Kiến thức:** định lí Pythagore đảo; điều kiện vuông góc với hai đường cắt nhau.

**Gợi ý các bước:**
1. Kiểm tra $SO^2+OB^2=SB^2$ và $SO^2+OC^2=SC^2$.
2. Chú ý $OB$, $OC$ có cắt nhau không.

::solution
$SO^2+OB^2=81+144=225=SB^2$ nên $SO\perp OB$. $SO^2+OC^2=81+1600=1681=SC^2$ nên $SO\perp OC$. $OB$, $OC$ cắt nhau tại $O$ nên $SO\perp(\text{sân})$.

**Đáp số.** Có, cột vuông góc với mặt sân.
:::

:::exercise
Giả sử một căn phòng hình hộp chữ nhật $ABCD.A'B'C'D'$ có sàn $ABCD$ với $AB=6$ m, $AD=4$ m và cao $AA'=3$ m (số liệu giả định). Người ta căng một sợi dây từ góc trần $A'$ xuống góc sàn $C$. Tính độ dài sợi dây (làm tròn đến hàng phần mười của mét).

::hint
**Kiến thức:** $AA'\perp(ABCD)$ nên $AA'\perp AC$.

**Gợi ý các bước:**
1. Tính $AC$ trong hình chữ nhật đáy.
2. Dùng định lí Pythagore trong tam giác $A'AC$ vuông tại $A$.

::solution
$AC^2=6^2+4^2=52$. Vì $AA'\perp(ABCD)$ nên $AA'\perp AC$, tam giác $A'AC$ vuông tại $A$ và
$$A'C^2=AA'^2+AC^2=9+52=61\Rightarrow A'C=\sqrt{61}\approx7{,}8.$$

**Đáp số.** Khoảng $7{,}8$ m.
:::

:::exercise
Giả sử một mái chóp có dạng hình chóp $S.ABCD$ với đáy $ABCD$ là hình vuông cạnh $6$ m, các cạnh bên $SA=SB=SC=SD=5$ m (số liệu giả định). Gọi $O$ là tâm của hình vuông. Chứng minh $SO\perp(ABCD)$ và tính chiều cao $SO$ (làm tròn đến hàng phần mười của mét).

::hint
**Kiến thức:** tam giác cân có đường trung tuyến cũng là đường cao.

**Gợi ý các bước:**
1. Chỉ ra $SO\perp AC$ và $SO\perp BD$.
2. Tính $OA$ rồi $SO$ trong tam giác $SOA$ vuông tại $O$.

::solution
Tam giác $SAC$ cân tại $S$ có $SO$ là trung tuyến ($O$ là trung điểm $AC$) nên $SO\perp AC$. Tương tự $SO\perp BD$. $AC$, $BD$ cắt nhau tại $O$ nên $SO\perp(ABCD)$.

$AC=6\sqrt2$ nên $OA=3\sqrt2$ và $OA^2=18$. Tam giác $SOA$ vuông tại $O$ nên $SO^2=SA^2-OA^2=25-18=7$, $SO=\sqrt7\approx2{,}6$.

**Đáp số.** $SO\perp(ABCD)$; $SO\approx2{,}6$ m.
:::

:::exercise
Ôn lại góc giữa hai đường thẳng. Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, $SA\perp(ABCD)$. Tính góc giữa hai đường thẳng $SC$ và $BD$.

::hint
**Kiến thức:** nếu $BD\perp(SAC)$ thì $BD$ vuông góc với mọi đường thẳng trong $(SAC)$.

**Gợi ý các bước:**
1. Chứng minh $BD\perp(SAC)$.
2. Kết luận về $SC$.

::solution
$BD\perp AC$ và $BD\perp SA$ nên $BD\perp(SAC)$. Vì $SC\subset(SAC)$ nên $BD\perp SC$, tức góc giữa $SC$ và $BD$ bằng $90^\circ$.

**Đáp số.** $90^\circ$.
:::

:::exercise Thử thách
Cho tứ diện $ABCD$ có $AB=AC$ và $DB=DC$. Chứng minh $AD\perp BC$.

::hint
**Kiến thức:** gọi $M$ là trung điểm $BC$; trong tam giác cân, trung tuyến là đường cao.

**Gợi ý các bước:**
1. Chứng minh $BC\perp AM$ và $BC\perp DM$.
2. Suy ra $BC\perp(ADM)$.

::solution
Gọi $M$ là trung điểm $BC$. Tam giác $ABC$ cân tại $A$ nên $AM\perp BC$. Tam giác $DBC$ cân tại $D$ nên $DM\perp BC$. $AM$, $DM$ cắt nhau tại $M$ trong $(ADM)$ nên $BC\perp(ADM)$. Vì $AD\subset(ADM)$ nên $BC\perp AD$.

**Đáp số.** $AD\perp BC$.
:::

## Kiểm tra mini

:::quiz
::mc
Đường thẳng $d$ vuông góc với mặt phẳng $(P)$ khi
A. $d$ vuông góc với một đường thẳng nằm trong $(P)$.
B. $d$ vuông góc với hai đường thẳng cắt nhau nằm trong $(P)$.
C. $d$ vuông góc với hai đường thẳng song song nằm trong $(P)$.
D. $d$ cắt $(P)$ tại một điểm.
::key B
Đó là điều kiện vuông góc với mặt phẳng. Phương án A và C thiếu một phương, D chỉ nói về việc cắt.

::mc
Cho hình lập phương $ABCD.A'B'C'D'$. Đường thẳng $BD$ vuông góc với mặt phẳng nào sau đây?
A. $(A'B'C'D')$.
B. $(ABB'A')$.
C. $(ACC'A')$.
D. $(BCC'B')$.
::key C
$BD\perp AC$ và $BD\perp AA'$. Phương án B và D chứa $BD$ không vuông góc, A song song với $(ABCD)$ nên $BD$ không vuông góc.

::mc
Cho tứ diện $OABC$ có $OA$, $OB$, $OC$ đôi một vuông góc và $OA=OB=OC=a$. Gọi $M$ là trung điểm $BC$. Độ dài $AM$ bằng
A. $\dfrac{a\sqrt2}{2}$.
B. $\dfrac{a\sqrt3}{2}$.
C. $a$.
D. $\dfrac{a\sqrt6}{2}$.
::key D
$OA\perp(OBC)$ nên $AM^2=OA^2+OM^2=a^2+\dfrac{a^2}{2}=\dfrac{3a^2}{2}$. Phương án A là $OM$, B nhầm với tam giác đều, C bỏ $OM$.

::mc
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật và $SA\perp(ABCD)$. Đường thẳng nào sau đây vuông góc với $(SAB)$?
A. $BC$.
B. $CD$.
C. $BD$.
D. $AC$.
::key A
$BC\perp AB$ và $BC\perp SA$. Phương án B song song với $AB$, C và D không vuông góc với $AB$ hoặc $SA$.

::tf
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông và $SA\perp(ABCD)$. Xét tính đúng sai của các mệnh đề sau:
a) $AC\perp(SBD)$.
b) $BD\perp(SAC)$.
c) $AD\perp(SCD)$.
d) $BC\perp(SAB)$.
::key S Đ S Đ
a) Sai: $AC\perp BD$ nhưng $AC$ không vuông góc với $SD$. b) Đúng: $BD\perp AC$ và $BD\perp SA$. c) Sai: $AD$ không vuông góc với $SD$. d) Đúng: $BC\perp AB$ và $BC\perp SA$.

::sa
Giả sử một mái chóp là hình chóp $S.ABCD$ có đáy là hình vuông cạnh $8$ m và các cạnh bên đều bằng $7$ m. Tính chiều cao của mái (làm tròn đến hàng phần mười của mét).
::key 4,1
Chân đường cao là tâm $O$ của đáy nên $OA^2=32$, $SO^2=49-32=17$ và $SO\approx4{,}1$.

::sa
Giả sử một căn phòng hình hộp chữ nhật có sàn $5$ m $\times4$ m và cao $2{,}5$ m. Tính khoảng cách từ góc trần đến góc sàn đối diện qua đường chéo (làm tròn đến hàng phần mười của mét).
::key 6,9
Đường chéo là $\sqrt{25+16+6{,}25}=\sqrt{47{,}25}\approx6{,}9$.
:::
