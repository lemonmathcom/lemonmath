---
title: Trường hợp bằng nhau thứ hai và thứ ba của tam giác
description: Học trường hợp cạnh – góc – cạnh (c.g.c) và góc – cạnh – góc (g.c.g), dùng chúng để chứng minh tam giác bằng nhau và đo khoảng cách không đo trực tiếp được.
minutes: 30
---

:::goals
- Phát biểu được trường hợp bằng nhau cạnh – góc – cạnh (c.g.c) và nhận ra đúng "góc xen giữa".
- Phát biểu được trường hợp bằng nhau góc – cạnh – góc (g.c.g) và nhận ra đúng "cạnh kề hai góc".
- Trình bày được lời giải chứng minh hai tam giác bằng nhau (gt, đối đỉnh, so le trong, …) rồi suy ra cạnh, góc tương ứng bằng nhau.
- Vận dụng để tính khoảng cách mà không đo trực tiếp được, như bề rộng của ao hay của khúc sông.
:::

Hai điểm $A$ và $B$ nằm ở hai đầu một cái ao, giữa là nước nên bạn không thể căng thước dây từ $A$ sang $B$. Bạn đứng trên bờ ở điểm $O$ nhìn thấy cả hai điểm, đo được $OA=12$ m và $OB=15$ m. Làm sao biết được $AB$ mà không phải bơi qua ao?

Ý tưởng là dựng, ngay trên đất liền, một tam giác bằng tam giác $OAB$, rồi đo cạnh tương ứng với $AB$. Muốn làm vậy ta cần những cách nhận ra hai tam giác bằng nhau mà không phải kiểm tra cả sáu yếu tố. Bài trước cho ta trường hợp ba cạnh; hôm nay ta học hai trường hợp nữa, trong đó có góc.

## Trường hợp thứ hai: cạnh – góc – cạnh

Bạn thử vẽ tam giác $ABC$ có $BA=3$ cm, $BC=4$ cm và $\widehat B=60^\circ$: vẽ góc $60^\circ$, trên hai cạnh của góc đặt $BA=3$ cm và $BC=4$ cm, rồi nối $A$ với $C$. Ai làm cũng ra cùng một tam giác. Hai cạnh và góc *xen giữa* chúng đã đủ để cố định hình dạng.

:::theorem Trường hợp bằng nhau cạnh – góc – cạnh (c.g.c)
Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác đó bằng nhau.

Nếu $AB=A'B'$, $\widehat B=\widehat{B'}$, $BC=B'C'$ thì $\triangle ABC=\triangle A'B'C'$ (c.g.c).
:::

:::diagram Trường hợp c.g.c
alt: Hai tam giác ABC và A'B'C' có AB bằng A'B' (một gạch), BC bằng B'C' (hai gạch) và góc B bằng góc B' (cùng kí hiệu α)
point A 0,0 below-left
point B 5,0 below-right
point C 3,3 above
point A' 8,0 below-left
point B' 13,0 below-right
point C' 11,3 above
polygon A B C
polygon A' B' C'
mark A B 1
mark B C 2
mark A' B' 1
mark B' C' 2
angle A B C "α"
angle A' B' C' "α"
:::

**Vì sao?** Đặt tam giác $A'B'C'$ lên tam giác $ABC$ sao cho $B'$ trùng $B$, tia $B'A'$ trùng tia $BA$. Vì $\widehat{B'}=\widehat B$ nên tia $B'C'$ trùng tia $BC$. Vì $B'A'=BA$ và $B'C'=BC$ nên $A'$ trùng $A$ và $C'$ trùng $C$. Hai tam giác chồng khít lên nhau.

Chữ "xen giữa" rất quan trọng: góc phải nằm giữa hai cạnh đã cho, tức là đỉnh của góc chính là điểm chung của hai cạnh đó.

:::diagram Hai tam giác của ví dụ 1
alt: Hai tam giác ABC và MNP với AB bằng MN, BC bằng NP và góc B bằng góc N bằng 50 độ
point A 0,0 below-left
point B 4,0 below-right
point C 0.14,4.6 above
point M 8,0 below-left
point N 12,0 below-right
point P 8.14,4.6 above
polygon A B C
polygon M N P
mark A B 1
mark B C 2
mark M N 1
mark N P 2
angle A B C "50°"
angle M N P "50°"
:::

:::example Áp dụng trường hợp c.g.c
Cho hai tam giác $ABC$ và $MNP$ có $AB=MN=4$ cm, $\widehat B=\widehat N=50^\circ$, $BC=NP=6$ cm. Chứng minh $\triangle ABC=\triangle MNP$, rồi suy ra $AC=MP$ và $\widehat A=\widehat M$.

**Lời giải.** Xét tam giác $ABC$ và tam giác $MNP$ có:

- $AB=MN$ ($=4$ cm) (gt);
- $\widehat B=\widehat N$ ($=50^\circ$) (gt), là góc xen giữa $AB$, $BC$ và xen giữa $MN$, $NP$;
- $BC=NP$ ($=6$ cm) (gt).

Do đó $\triangle ABC=\triangle MNP$ (c.g.c).

Suy ra $AC=MP$ và $\widehat A=\widehat M$ (các cạnh, các góc tương ứng).
:::

:::diagram Điểm trên tia phân giác
alt: Góc xOy với hai điểm A, B trên hai cạnh sao cho OA bằng OB, điểm M trên tia phân giác Oz, hai góc AOM và MOB bằng nhau
point O 0,0 below-left
point A 4,0 below-right
point B 2,3.46 above-left
point M 4.33,2.5 right
segment O A
segment O B
segment O M
segment M A
segment M B
mark O A 1
mark O B 1
angle A O M "α"
angle M O B "α"
:::

:::example Hai khoảng cách bằng nhau
Cho góc $xOy$ có tia phân giác $Oz$. Trên $Ox$ lấy điểm $A$, trên $Oy$ lấy điểm $B$ sao cho $OA=OB$. Lấy điểm $M$ bất kì trên $Oz$. Chứng minh $MA=MB$.

**Lời giải.** Xét tam giác $OAM$ và tam giác $OBM$ có:

- $OA=OB$ (gt);
- $\widehat{AOM}=\widehat{BOM}$ (vì $Oz$ là tia phân giác của góc $xOy$);
- $OM$ là cạnh chung.

Do đó $\triangle OAM=\triangle OBM$ (c.g.c). Suy ra $MA=MB$ (hai cạnh tương ứng).

Vậy $MA=MB$.
:::

Bây giờ ta trở lại với cái ao. Lần này ta đi đủ bốn bước.

:::diagram Đo khoảng cách qua ao
alt: Hai điểm A và B ở hai đầu ao, điểm O trên bờ; A' và B' lần lượt nằm trên tia đối của OA và OB sao cho OA' bằng OA, OB' bằng OB; tam giác OA'B' nằm hoàn toàn trên đất liền
point O 0,0 left
point A -3.46,2 left
point B 1.93,4.61 above
point A' 3.46,-2 right
point B' -1.93,-4.61 below
segment A B dashed
segment A A'
segment B B'
segment A' B'
mark O A 1
mark O A' 1
mark O B 2
mark O B' 2
angle A O B "α"
angle A' O B' "α"
label -0.8,3.9 "ao"
:::

:::example Đo khoảng cách $AB$ qua ao
Từ điểm $O$ trên bờ, người ta đo được $OA=12$ m, $OB=15$ m. Kéo dài $AO$ về phía $O$ rồi lấy $A'$ sao cho $OA'=OA$; kéo dài $BO$ rồi lấy $B'$ sao cho $OB'=OB$. Đo được $A'B'=18$ m. Tính khoảng cách $AB$.

**Lời giải.**

*Hiểu đề.* Ta không đo được $AB$ vì có ao, nhưng đo được $A'B'$ trên đất liền. Cần chỉ ra $AB$ và $A'B'$ là hai cạnh tương ứng của hai tam giác bằng nhau.

*Tìm cách giải.* Hai tam giác $OAB$ và $OA'B'$ có $OA=OA'$ và $OB=OB'$. Góc xen giữa mỗi cặp cạnh là $\widehat{AOB}$ và $\widehat{A'OB'}$, hai góc này đối đỉnh nên bằng nhau. Vậy dùng c.g.c.

*Giải.* Xét tam giác $OAB$ và tam giác $OA'B'$ có:

- $OA=OA'$ ($=12$ m) (cách dựng);
- $\widehat{AOB}=\widehat{A'OB'}$ (hai góc đối đỉnh);
- $OB=OB'$ ($=15$ m) (cách dựng).

Do đó $\triangle OAB=\triangle OA'B'$ (c.g.c). Suy ra $AB=A'B'=18$ m.

Vậy khoảng cách $AB$ là $18$ m.

*Nhìn lại.* Số đo $15$ m và $12$ m không ảnh hưởng đến kết quả; chỉ cần $OA'=OA$ và $OB'=OB$. Vậy ta có thể chọn $O$ ở chỗ nào cũng được, miễn là kéo dài được hai tia $AO$, $BO$ trên đất liền. Nếu $O$ nằm trên đường thẳng $AB$ thì còn tam giác $OAB$ để so sánh không? Bạn hãy thử vẽ hình.
:::

## Trường hợp thứ ba: góc – cạnh – góc

Bây giờ ta đổi vai: cho một cạnh và hai góc. Bạn vẽ đoạn $BC=5$ cm, rồi vẽ góc $50^\circ$ tại $B$ và góc $70^\circ$ tại $C$ cùng về một phía của $BC$. Hai tia chỉ cắt nhau tại đúng một điểm $A$, nên mọi người đều ra cùng một tam giác. Ở đây cạnh $BC$ là cạnh *kề* của cả hai góc đã cho.

:::theorem Trường hợp bằng nhau góc – cạnh – góc (g.c.g)
Nếu một cạnh và hai góc kề cạnh ấy của tam giác này bằng một cạnh và hai góc kề cạnh ấy của tam giác kia thì hai tam giác đó bằng nhau.

Nếu $\widehat B=\widehat{B'}$, $BC=B'C'$, $\widehat C=\widehat{C'}$ thì $\triangle ABC=\triangle A'B'C'$ (g.c.g).
:::

:::diagram Trường hợp g.c.g
alt: Hai tam giác ABC và A'B'C' có BC bằng B'C' (một gạch), góc B bằng góc B' (kí hiệu α) và góc C bằng góc C' (kí hiệu β)
point B 0,0 below-left
point C 6,0 below-right
point A 2,3 above
point B' 9,0 below-left
point C' 15,0 below-right
point A' 11,3 above
polygon A B C
polygon A' B' C'
mark B C 1
mark B' C' 1
angle A B C "α"
angle B C A "β"
angle A' B' C' "α"
angle B' C' A' "β"
:::

:::note Khi cạnh bằng nhau không kề hai góc đã cho
Vì tổng ba góc của tam giác bằng $180^\circ$, nếu biết hai góc thì ta tính được góc thứ ba. Vì vậy, khi một cạnh và hai góc bằng nhau nhưng cạnh đó không nằm giữa hai góc ấy, ta tính góc thứ ba để đưa về g.c.g.
:::

:::diagram Hai tia song song
alt: Đoạn AB có trung điểm O, hai tia Ax và By song song ở hai phía của AB, đường thẳng qua O cắt hai tia tại C và D
point A 0,0 left
point B 6,0 right
point C 1.5,3 above-left
point D 4.5,-3 below-right
point O 3,0 above-right
segment A B
segment A C
segment B D
segment C D
mark A O 1
mark O B 1
angle C A O "α"
angle D B O "α"
angle A O C "β"
angle B O D "β"
:::

:::example Dùng góc so le trong và góc đối đỉnh
Cho đoạn thẳng $AB$ có trung điểm $O$. Vẽ hai tia $Ax$, $By$ song song với nhau và nằm ở hai phía của $AB$. Đường thẳng qua $O$ cắt $Ax$ tại $C$ và cắt $By$ tại $D$. Chứng minh $OC=OD$.

**Lời giải.** Xét tam giác $AOC$ và tam giác $BOD$ có:

- $\widehat{CAO}=\widehat{DBO}$ (hai góc so le trong, vì $Ax\parallel By$);
- $AO=BO$ (vì $O$ là trung điểm của $AB$);
- $\widehat{AOC}=\widehat{BOD}$ (hai góc đối đỉnh).

Do đó $\triangle AOC=\triangle BOD$ (g.c.g). Suy ra $OC=OD$ (hai cạnh tương ứng).

Vậy $OC=OD$.
:::

Ví dụ cuối là một bài toán đo thật ngoài đồng: tính bề rộng của một khúc sông.

:::diagram Đo bề rộng khúc sông
alt: Điểm A trên bờ gần, cây T ở bờ xa sao cho AT vuông góc với bờ; B và C nằm trên bờ gần với AB bằng BC; D nằm sau C sao cho CD vuông góc với bờ và D, B, T thẳng hàng
point P1 -1,7 ""
point P2 9,7 ""
point P3 -1,0 ""
point P4 9,0 ""
point T 0,7 above-left
point A 0,0 below-left
point B 4,0 above-right
point C 8,0 above-right
point D 8,-7 below-right
segment P1 P2
segment P3 P4
segment T A
segment C D
segment T D
right T A B
right D C B
mark A B 1
mark B C 1
angle T B A "α"
angle D B C "α"
label 4,3.5 "sông"
:::

:::example Đo bề rộng của sông
Một khúc sông có hai bờ song song. Bạn đứng ở điểm $A$ trên bờ gần, nhìn thấy cây $T$ ở bờ đối diện sao cho $AT$ vuông góc với bờ. Bạn đi dọc bờ $20$ m đến $B$, rồi đi thêm $20$ m đến $C$. Từ $C$, bạn đi vuông góc với bờ, theo hướng xa sông, đến điểm $D$ sao cho $D$, $B$, $T$ thẳng hàng. Đo được $CD=35$ m. Tính bề rộng $AT$ của sông.

**Lời giải.**

*Hiểu đề.* Ta cần $AT$ nhưng không qua sông được. Ta đo được $CD$ và biết $AB=BC=20$ m.

*Tìm cách giải.* Nếu $\triangle ABT=\triangle CBD$ thì $AT=CD$. Hai tam giác có $AB=CB$ và hai góc kề cạnh đó: góc vuông ở $A$ và $C$, góc đối đỉnh ở $B$. Vậy dùng g.c.g.

*Giải.* Xét tam giác $ABT$ và tam giác $CBD$ có:

- $\widehat{BAT}=\widehat{BCD}$ ($=90^\circ$) (gt);
- $AB=CB$ ($=20$ m) (gt);
- $\widehat{ABT}=\widehat{CBD}$ (hai góc đối đỉnh).

Do đó $\triangle ABT=\triangle CBD$ (g.c.g). Suy ra $AT=CD=35$ m.

Vậy bề rộng của sông là $35$ m.

*Nhìn lại.* Mấu chốt là hai góc vuông ở $A$ và $C$; nếu bạn đi lệch khỏi phương vuông góc thì hai tam giác không còn bằng nhau. Nếu thay $AB=BC=20$ m bằng $AB=BC=10$ m thì số đo $CD$ có thay đổi không? Vì sao?
:::

:::warning Những lỗi hay gặp
- **Góc không xen giữa.** Sai: "$AB=DE$, $AC=DF$ và $\widehat B=\widehat E$ nên hai tam giác bằng nhau (c.g.c)". Vì sao sai: góc $B$ không nằm giữa $AB$ và $AC$. Chẳng hạn, vẽ góc $\widehat{xBy}=30^\circ$, lấy $A$ trên $Bx$ với $BA=5$ cm; đường tròn tâm $A$ bán kính $3$ cm cắt tia $By$ tại hai điểm $C$ khác nhau, cho hai tam giác không bằng nhau nhưng cùng có $AB=5$ cm, $AC=3$ cm, $\widehat B=30^\circ$. Đúng: phải có góc xen giữa hai cạnh.
- **Viết góc bằng nhau mà không nêu lí do.** Sai: "$\widehat{AOB}=\widehat{A'OB'}$" rồi kết luận ngay. Vì sao sai: người đọc cần biết vì sao hai góc bằng nhau. Đúng: viết thêm "(hai góc đối đỉnh)", "(hai góc so le trong)" hoặc "(gt)".
- **Dùng g.c.g khi cạnh không kề hai góc.** Sai: $\widehat A=\widehat D$, $\widehat C=\widehat F$ và $AB=DE$ nên g.c.g. Vì sao sai: cạnh nằm giữa $\widehat A$ và $\widehat C$ là $AC$, không phải $AB$. Đúng: tính $\widehat B=\widehat E$ trước, khi đó $AB$ nằm giữa $\widehat A$ và $\widehat B$, rồi mới dùng g.c.g.
:::

**Kết nối.** Bài trước cho ta c.c.c; bài này thêm c.g.c và g.c.g. Cả ba đều nói "cần đúng ba yếu tố, và chúng phải sắp xếp đúng cách". Bài kế tiếp xét riêng tam giác vuông, nơi có thêm một góc $90^\circ$ nên chỉ cần ít dữ kiện hơn.

## Thuật ngữ

:::terms
- trường hợp cạnh – góc – cạnh (c.g.c) | SAS condition
- trường hợp góc – cạnh – góc (g.c.g) | ASA condition
- góc xen giữa | included angle
- cạnh kề | adjacent side
- hai góc đối đỉnh | vertically opposite angles
- hai góc so le trong | alternate angles
- tia phân giác | angle bisector
- trung điểm | midpoint
- cách dựng | construction
- cạnh, góc tương ứng | corresponding sides, angles
:::

## Tóm tắt

- c.g.c: hai cạnh và góc **xen giữa** bằng nhau thì hai tam giác bằng nhau.
- g.c.g: một cạnh và hai góc **kề** cạnh đó bằng nhau thì hai tam giác bằng nhau.
- Mỗi lần ghi một cặp bằng nhau, hãy ghi lí do: (gt), (đối đỉnh), (so le trong), (cạnh chung), (trung điểm), (tia phân giác).
- Hai cạnh và một góc không xen giữa chưa đủ để kết luận hai tam giác bằng nhau.
- Hai tam giác bằng nhau cho ta khoảng cách, góc và tính song song mà ta không đo trực tiếp được.

Người đứng bên bờ ao ở đầu bài có thể kết luận: $AB=A'B'$, chỉ cần đo đoạn nằm trên đất liền.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho hai tam giác $ABC$ và $MNP$ có $AB=MN$ và $BC=NP$. Với mỗi điều kiện bổ sung sau, cho biết có kết luận được $\triangle ABC=\triangle MNP$ hay không; nếu được thì theo trường hợp nào.

a) $\widehat B=\widehat N$.

b) $\widehat A=\widehat M$.

c) $AC=MP$.

::hint
**Kiến thức:** c.c.c, c.g.c; góc xen giữa hai cạnh $AB$, $BC$ là góc $B$.

**Gợi ý các bước:**
1. Xác định góc nằm giữa $AB$ và $BC$.
2. Với mỗi điều kiện, đếm xem đã đủ ba yếu tố của trường hợp nào chưa.

::solution
a) Góc $B$ nằm giữa hai cạnh $AB$, $BC$ và góc $N$ nằm giữa hai cạnh $MN$, $NP$. Với $AB=MN$, $\widehat B=\widehat N$, $BC=NP$, ta có $\triangle ABC=\triangle MNP$ (c.g.c).

b) Góc $A$ nằm giữa $AB$ và $AC$, không nằm giữa $AB$ và $BC$. Do đó chưa đủ điều kiện để kết luận.

c) Với $AB=MN$, $BC=NP$, $AC=MP$, ta có $\triangle ABC=\triangle MNP$ (c.c.c).

Vậy a) được (c.g.c); b) chưa đủ; c) được (c.c.c).

**Đáp số.** a) c.g.c. b) Chưa đủ. c) c.c.c.
:::

:::exercise
Cho hai tam giác $ABC$ và $DEF$ có $\widehat B=\widehat E=60^\circ$, $BC=EF=5$ cm, $\widehat C=\widehat F=80^\circ$.

a) Chứng minh $\triangle ABC=\triangle DEF$.

b) Tính $\widehat D$.

::hint
**Kiến thức:** g.c.g; tổng ba góc của tam giác bằng $180^\circ$.

**Gợi ý các bước:**
1. Cạnh $BC$ có nằm giữa hai góc $B$, $C$ không?
2. Góc $D$ tương ứng với góc $A$; tính $\widehat A$.

::solution
a) Xét tam giác $ABC$ và tam giác $DEF$ có:

- $\widehat B=\widehat E$ ($=60^\circ$) (gt);
- $BC=EF$ ($=5$ cm) (gt);
- $\widehat C=\widehat F$ ($=80^\circ$) (gt).

Do đó $\triangle ABC=\triangle DEF$ (g.c.g).

b) Xét tam giác $ABC$, ta có $\widehat A=180^\circ-60^\circ-80^\circ=40^\circ$ (tổng ba góc). Vì $\widehat D=\widehat A$ (hai góc tương ứng) nên $\widehat D=40^\circ$.

Vậy $\widehat D=40^\circ$.

**Đáp số.** $\widehat D=40^\circ$.
:::

:::exercise
Cho tam giác $ABC$ có $M$ là trung điểm của $BC$. Trên tia đối của tia $MA$ lấy điểm $D$ sao cho $MD=MA$.

a) Chứng minh $\triangle MAB=\triangle MDC$.

b) Chứng minh $AB\parallel CD$.

::hint
**Kiến thức:** c.g.c; hai góc đối đỉnh; hai góc so le trong bằng nhau thì hai đường thẳng song song.

**Gợi ý các bước:**
1. a) Tìm hai cặp cạnh bằng nhau và góc xen giữa chúng.
2. b) Từ a), chọn cặp góc so le trong đối với $AB$, $CD$ cắt bởi $AD$.

::solution
a) Xét tam giác $MAB$ và tam giác $MDC$ có:

- $MA=MD$ (cách vẽ);
- $\widehat{AMB}=\widehat{DMC}$ (hai góc đối đỉnh);
- $MB=MC$ (vì $M$ là trung điểm của $BC$).

Do đó $\triangle MAB=\triangle MDC$ (c.g.c).

b) Từ a) suy ra $\widehat{MAB}=\widehat{MDC}$ (hai góc tương ứng). Hai góc này ở vị trí so le trong của hai đường thẳng $AB$, $CD$ cắt bởi $AD$. Do đó $AB\parallel CD$.

Vậy $\triangle MAB=\triangle MDC$ và $AB\parallel CD$.

**Đáp số.** a) c.g.c. b) $AB\parallel CD$.
:::

:::exercise
Cho tam giác $ABC$. Tia phân giác của góc $A$ cắt $BC$ tại $D$ và $AD\perp BC$. Chứng minh $AB=AC$.

::hint
**Kiến thức:** g.c.g; $AD\perp BC$ nghĩa là $\widehat{ADB}=\widehat{ADC}=90^\circ$.

**Gợi ý các bước:**
1. Xét hai tam giác $ABD$ và $ACD$.
2. Cạnh $AD$ chung nằm giữa hai góc nào trong mỗi tam giác?

::solution
Xét tam giác $ABD$ và tam giác $ACD$ có:

- $\widehat{BAD}=\widehat{CAD}$ (vì $AD$ là tia phân giác của góc $A$);
- $AD$ là cạnh chung;
- $\widehat{ADB}=\widehat{ADC}$ ($=90^\circ$) (vì $AD\perp BC$).

Do đó $\triangle ABD=\triangle ACD$ (g.c.g). Suy ra $AB=AC$ (hai cạnh tương ứng).

Vậy $AB=AC$.

**Đáp số.** Chứng minh xong.
:::

:::exercise
Một cột cờ $OC$ dựng thẳng đứng trên mặt đất phẳng. Hai sợi dây $CA$ và $CB$ buộc từ đỉnh cột $C$ xuống hai điểm $A$, $B$ trên mặt đất sao cho $OA=OB=4$ m. Chứng minh hai sợi dây dài bằng nhau. Biết $CA=9{,}8$ m, tính $CB$.

::hint
**Kiến thức:** c.g.c; cột thẳng đứng nên $OC\perp$ mặt đất.

**Gợi ý các bước:**
1. Xét hai tam giác $COA$ và $COB$.
2. Góc xen giữa $OC$ và $OA$, xen giữa $OC$ và $OB$ là góc nào?

::solution
Xét tam giác $COA$ và tam giác $COB$ có:

- $OA=OB$ ($=4$ m) (gt);
- $\widehat{COA}=\widehat{COB}$ ($=90^\circ$) (vì cột thẳng đứng);
- $OC$ là cạnh chung.

Do đó $\triangle COA=\triangle COB$ (c.g.c). Suy ra $CA=CB$, mà $CA=9{,}8$ m nên $CB=9{,}8$ m.

Vậy hai dây dài bằng nhau và $CB=9{,}8$ m.

**Đáp số.** $CB=9{,}8$ m.
:::

:::exercise
Một chiếc thang chữ A có hai chân $AB=AC=2$ m. Người ta gắn hai thanh chéo $BE$ và $CD$, với $D$ nằm trên $AB$, $E$ nằm trên $AC$ và $AD=AE=1{,}5$ m. Chứng minh hai thanh chéo $BE$ và $CD$ dài bằng nhau.

::hint
**Kiến thức:** c.g.c; góc $A$ là góc chung.

**Gợi ý các bước:**
1. Xét hai tam giác $ABE$ và $ACD$.
2. Tìm hai cặp cạnh bằng nhau và góc xen giữa.

::solution
Xét tam giác $ABE$ và tam giác $ACD$ có:

- $AB=AC$ ($=2$ m) (gt);
- $\widehat{BAE}=\widehat{CAD}$ (cùng là góc $A$);
- $AE=AD$ ($=1{,}5$ m) (gt).

Do đó $\triangle ABE=\triangle ACD$ (c.g.c). Suy ra $BE=CD$ (hai cạnh tương ứng).

Vậy hai thanh chéo dài bằng nhau.

**Đáp số.** $BE=CD$.
:::

:::exercise
Cho tứ giác $ABCD$ có $AB\parallel CD$ và $AB=CD$, trong đó $B$ và $D$ nằm khác phía đối với đường thẳng $AC$. Chứng minh $AD=BC$ và $AD\parallel BC$. (Ôn lại bài trước về c.c.c.)

::hint
**Kiến thức:** c.g.c; hai đường thẳng song song thì hai góc so le trong bằng nhau, và ngược lại.

**Gợi ý các bước:**
1. Từ $AB\parallel CD$, tìm cặp góc so le trong bằng nhau tạo bởi $AC$.
2. Xét $\triangle ABC$ và $\triangle CDA$ rồi dùng c.g.c.

::solution
Vì $AB\parallel CD$ nên $\widehat{BAC}=\widehat{DCA}$ (hai góc so le trong).

Xét tam giác $ABC$ và tam giác $CDA$ có:

- $AB=CD$ (gt);
- $\widehat{BAC}=\widehat{DCA}$ (chứng minh trên);
- $AC$ là cạnh chung.

Do đó $\triangle ABC=\triangle CDA$ (c.g.c). Suy ra $BC=DA$ và $\widehat{BCA}=\widehat{DAC}$ (các cạnh, góc tương ứng).

Hai góc $\widehat{BCA}$ và $\widehat{DAC}$ ở vị trí so le trong của $BC$, $AD$ cắt bởi $AC$. Do đó $AD\parallel BC$.

Vậy $AD=BC$ và $AD\parallel BC$.

**Đáp số.** $AD=BC$; $AD\parallel BC$.
:::

:::exercise Thử thách
Cho tam giác $ABC$ có góc $A$ nhọn. Vẽ ra phía ngoài tam giác các tam giác $ABD$ và $ACE$ vuông cân tại $A$, tức là $AB=AD$, $\widehat{BAD}=90^\circ$ và $AC=AE$, $\widehat{CAE}=90^\circ$. Chứng minh $BE=CD$.

::hint
**Kiến thức:** c.g.c; cộng góc: $\widehat{DAC}=\widehat{DAB}+\widehat{BAC}$.

**Gợi ý các bước:**
1. Tính $\widehat{DAC}$ và $\widehat{BAE}$ theo $\widehat{BAC}$.
2. Xét hai tam giác $ADC$ và $ABE$.

::solution
Vì góc $A$ nhọn nên $\widehat{DAB}+\widehat{BAC}=90^\circ+\widehat{BAC}<180^\circ$, do đó $\widehat{DAC}=\widehat{DAB}+\widehat{BAC}=90^\circ+\widehat{BAC}$. Tương tự, $\widehat{BAE}=\widehat{BAC}+\widehat{CAE}=\widehat{BAC}+90^\circ$.

Suy ra $\widehat{DAC}=\widehat{BAE}$.

Xét tam giác $ADC$ và tam giác $ABE$ có:

- $AD=AB$ (gt);
- $\widehat{DAC}=\widehat{BAE}$ (chứng minh trên);
- $AC=AE$ (gt).

Do đó $\triangle ADC=\triangle ABE$ (c.g.c). Suy ra $DC=BE$ (hai cạnh tương ứng).

Vậy $BE=CD$.

**Đáp số.** $BE=CD$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho hai tam giác $ABC$ và $DEF$ có $AB=DE$ và $BC=EF$. Để hai tam giác bằng nhau theo trường hợp c.g.c, cần thêm điều kiện
A. $\widehat B=\widehat E$.
B. $\widehat A=\widehat D$.
C. $\widehat C=\widehat F$.
D. $AC=DF$.
::key A
Góc xen giữa $AB$, $BC$ là $\widehat B$, nên cần $\widehat B=\widehat E$. A và C là góc không xen giữa; D dẫn đến c.c.c.

::mc
Cho hai tam giác $ABC$ và $MNP$ có $\widehat A=\widehat M$ và $\widehat B=\widehat N$. Để hai tam giác bằng nhau theo trường hợp g.c.g, cần thêm điều kiện
A. $AC=MP$.
B. $AB=MN$.
C. $BC=NP$.
D. $\widehat C=\widehat P$.
::key B
Cạnh kề cả hai góc $\widehat A$, $\widehat B$ là $AB$, nên cần $AB=MN$. A và C là cạnh không nằm giữa hai góc; D chỉ thêm một góc nữa.

::mc
Hai đoạn thẳng $AB$ và $CD$ cắt nhau tại $O$ với $OA=OB$ và $OC=OD$. Tam giác nào dưới đây bằng tam giác $OAC$?
A. $\triangle OBC$.
B. $\triangle ODB$.
C. $\triangle OBD$.
D. $\triangle OAD$.
::key C
$OA=OB$, $\widehat{AOC}=\widehat{BOD}$ (đối đỉnh), $OC=OD$ nên $\triangle OAC=\triangle OBD$ (c.g.c). B ghép sai thứ tự đỉnh; C và D không có đủ điều kiện.

::mc
Tam giác $ABC$ và $DEF$ có $AB=DE$, $AC=DF$ và $\widehat B=\widehat E$. Khẳng định nào sau đây đúng?
A. Hai tam giác bằng nhau theo c.g.c.
B. Hai tam giác bằng nhau theo g.c.g.
C. Hai tam giác bằng nhau theo c.c.c.
D. Chưa đủ điều kiện để kết luận hai tam giác bằng nhau.
::key D
Góc $B$ không nằm giữa $AB$ và $AC$, nên không dùng được c.g.c. Hai trường hợp còn lại cũng không có đủ dữ kiện.

::tf
Cho tam giác $ABC$, $M$ là trung điểm của $BC$. Trên tia đối của tia $MA$ lấy điểm $D$ sao cho $MD=MA$. Xét tính đúng sai của các mệnh đề sau:
a) Hai tam giác $MAB$ và $MDC$ bằng nhau theo trường hợp c.c.c.
b) $\widehat{AMB}=\widehat{DMC}$.
c) $AB=CD$.
d) $AB\parallel CD$.
::key S Đ Đ Đ
a) Sai: lúc đầu chưa biết $AB=CD$; hai tam giác bằng nhau theo c.g.c. b) Đúng: hai góc đối đỉnh. c) Đúng: hai cạnh tương ứng. d) Đúng: $\widehat{MAB}=\widehat{MDC}$ ở vị trí so le trong.

::sa
Ở bài đo bề rộng sông, đổi số đo: $AB=BC=15$ m và $CD=28$ m. Tính bề rộng $AT$ của sông (đơn vị: mét).
::key 28
$\triangle ABT=\triangle CBD$ (g.c.g) nên $AT=CD=28$ m.

::sa
Cho tứ giác $ABCD$ có $AB\parallel CD$, $AB=CD=5$ cm và $BC=7$ cm, trong đó $B$, $D$ khác phía đối với $AC$. Tính $AD$ (đơn vị: cm).
::key 7
$\triangle ABC=\triangle CDA$ (c.g.c) nên $AD=BC=7$ cm.
:::
