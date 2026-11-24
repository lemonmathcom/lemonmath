---
title: Các trường hợp bằng nhau của tam giác vuông
description: Dùng bốn trường hợp bằng nhau của tam giác vuông: hai cạnh góc vuông, cạnh góc vuông – góc nhọn, cạnh huyền – góc nhọn, cạnh huyền – cạnh góc vuông.
minutes: 30
---

:::goals
- Nhận biết cạnh huyền, cạnh góc vuông, góc nhọn của tam giác vuông và các cặp yếu tố tương ứng.
- Phát biểu được bốn trường hợp bằng nhau của tam giác vuông, trong đó có trường hợp cạnh huyền – cạnh góc vuông.
- Trình bày được lời giải chứng minh hai tam giác vuông bằng nhau, nhớ ghi rõ "tam giác vuông tại …".
- Vận dụng vào các tình huống thực tế như dây chằng cột, thang dựa tường.
:::

Một cột ăng-ten $OT$ cao $4$ m được dựng thẳng đứng trên mặt đất phẳng. Hai dây chằng $TA$ và $TB$ cùng dài $5$ m, buộc từ đỉnh cột xuống hai điểm $A$, $B$ trên mặt đất. Người ta đo được $OA=3$ m. Không cần cầm thước ra đo, bạn có đoán được $OB$ bằng bao nhiêu không? Và vì sao đoán như vậy là chắc chắn?

Ở các bài trước, ta cần ba yếu tố để kết luận hai tam giác bằng nhau. Với tam giác vuông, ta đã có sẵn một góc $90^\circ$ nên chỉ cần thêm hai yếu tố. Bài này gom lại những trường hợp ngắn gọn như thế.

## Từ các trường hợp đã biết

Trong tam giác vuông, cạnh đối diện với góc vuông là **cạnh huyền**; hai cạnh còn lại là **cạnh góc vuông**. Hai góc nhọn của tam giác vuông có tổng bằng $90^\circ$, vì tổng ba góc của tam giác là $180^\circ$.

Giả sử hai tam giác vuông $ABC$ (vuông tại $A$) và $DEF$ (vuông tại $D$). Ta có ba trường hợp suy trực tiếp từ c.g.c và g.c.g:

- **Hai cạnh góc vuông.** Nếu $AB=DE$ và $AC=DF$, thì góc vuông $\widehat A=\widehat D$ là góc xen giữa hai cạnh bằng nhau, nên hai tam giác bằng nhau (c.g.c).
- **Cạnh góc vuông và góc nhọn kề.** Nếu $AB=DE$ và $\widehat B=\widehat E$, thì cạnh $AB$ nằm giữa góc vuông và góc nhọn $B$; hai cặp góc kề và một cặp cạnh bằng nhau nên hai tam giác bằng nhau (g.c.g).
- **Cạnh huyền và góc nhọn.** Nếu $BC=EF$ và $\widehat B=\widehat E$, thì hai góc nhọn còn lại cũng bằng nhau: $\widehat C=90^\circ-\widehat B=90^\circ-\widehat E=\widehat F$. Cạnh huyền $BC$ nằm giữa $\widehat B$, $\widehat C$ và $EF$ nằm giữa $\widehat E$, $\widehat F$, nên hai tam giác bằng nhau (g.c.g).

## Trường hợp cạnh huyền – cạnh góc vuông

Còn một tình huống nữa: biết cạnh huyền và một cạnh góc vuông. Bạn thử dựng tam giác vuông $ABC$ có $AB=3$ cm và $BC=5$ cm, với góc vuông tại $A$: vẽ $AB=3$ cm; vẽ tia $Ax$ vuông góc với $AB$ tại $A$; vẽ cung tròn tâm $B$ bán kính $5$ cm cắt $Ax$ tại $C$. Cung chỉ cắt đường thẳng $Ax$ tại hai điểm đối xứng nhau qua $AB$, nên ai vẽ cũng ra cùng một hình (có thể phải lật giấy). Đây là lí do cho trường hợp sau.

:::theorem Các trường hợp bằng nhau của tam giác vuông
Hai tam giác vuông bằng nhau nếu chúng có:

- hai cạnh góc vuông bằng nhau (c.g.c);
- một cạnh góc vuông và một góc nhọn kề cạnh ấy bằng nhau (g.c.g);
- cạnh huyền và một góc nhọn bằng nhau;
- cạnh huyền và một cạnh góc vuông bằng nhau.
:::

:::diagram Trường hợp cạnh huyền – cạnh góc vuông
alt: Hai tam giác vuông ABC vuông tại A và DEF vuông tại D, cạnh huyền BC bằng EF (một gạch) và cạnh góc vuông AC bằng DF (hai gạch)
point A 0,0 below-left
point B 3,0 below-right
point C 0,4 above
point D 14,0 below-right
point E 11,0 below-left
point F 14,4 above
polygon A B C
polygon D E F
right B A C
right E D F
mark B C 1
mark A C 2
mark E F 1
mark D F 2
:::

Trường hợp thứ tư được thừa nhận, và bạn sẽ dùng nó rất thường xuyên. Điều đáng nhớ là hai cạnh huyền phải ghép với nhau, và cạnh góc vuông ghép với cạnh góc vuông.

:::diagram Hai tam giác vuông của ví dụ 1
alt: Hai tam giác vuông ABC vuông tại A và DEF vuông tại D với AB bằng DE và AC bằng DF
point A 0,0 below-left
point B 3,0 below-right
point C 0,4 above
point D 6,0 below-left
point E 9,0 below-right
point F 6,4 above
polygon A B C
polygon D E F
right B A C
right E D F
mark A B 1
mark A C 2
mark D E 1
mark D F 2
:::

:::example Hai cạnh góc vuông bằng nhau
Cho tam giác $ABC$ vuông tại $A$ và tam giác $DEF$ vuông tại $D$ có $AB=DE=3$ cm và $AC=DF=4$ cm. Chứng minh $\triangle ABC=\triangle DEF$, rồi suy ra $BC=EF$.

**Lời giải.** Xét tam giác $ABC$ và tam giác $DEF$ có:

- $AB=DE$ ($=3$ cm) (gt);
- $\widehat{BAC}=\widehat{EDF}$ ($=90^\circ$) (gt);
- $AC=DF$ ($=4$ cm) (gt).

Do đó $\triangle ABC=\triangle DEF$ (hai cạnh góc vuông, c.g.c).

Suy ra $BC=EF$ (hai cạnh huyền tương ứng).
:::

:::diagram Hai tam giác vuông của ví dụ 2
alt: Hai tam giác vuông ABC vuông tại A và DEF vuông tại D với AB bằng DE và góc B bằng góc E
point A 0,0 below-left
point B 4,0 below-right
point C 0,3 above
point D 7,0 below-left
point E 11,0 below-right
point F 7,3 above
polygon A B C
polygon D E F
right B A C
right E D F
mark A B 1
mark D E 1
angle A B C "β"
angle D E F "β"
:::

:::example Cạnh góc vuông và góc nhọn kề
Cho tam giác $ABC$ vuông tại $A$ và tam giác $DEF$ vuông tại $D$ có $AB=DE$ và $\widehat B=\widehat E$. Chứng minh $\triangle ABC=\triangle DEF$, rồi suy ra $AC=DF$ và $BC=EF$.

**Lời giải.** Xét tam giác $ABC$ và tam giác $DEF$ có:

- $\widehat{BAC}=\widehat{EDF}$ ($=90^\circ$) (gt);
- $AB=DE$ (gt);
- $\widehat B=\widehat E$ (gt).

Cạnh $AB$ nằm giữa $\widehat A$ và $\widehat B$, cạnh $DE$ nằm giữa $\widehat D$ và $\widehat E$. Do đó $\triangle ABC=\triangle DEF$ (g.c.g).

Suy ra $AC=DF$ và $BC=EF$ (các cạnh tương ứng).
:::

:::diagram Điểm trên tia phân giác
alt: Góc xOy với tia phân giác OM, MA vuông góc với Ox tại A, MB vuông góc với Oy tại B, hai góc AOM và MOB bằng nhau
point O 0,0 below-left
point A 4.33,0 below-right
point B 2.165,3.75 above-left
point M 4.33,2.5 right
segment O A
segment O B
segment O M
segment M A
segment M B
right O A M
right O B M
angle A O M "α"
angle M O B "α"
:::

:::example Cạnh huyền và góc nhọn
Cho điểm $M$ nằm trên tia phân giác $Oz$ của góc $xOy$. Kẻ $MA\perp Ox$ tại $A$ và $MB\perp Oy$ tại $B$. Chứng minh $MA=MB$.

**Lời giải.** Xét tam giác $OAM$ vuông tại $A$ và tam giác $OBM$ vuông tại $B$ có:

- $OM$ là cạnh huyền chung;
- $\widehat{AOM}=\widehat{BOM}$ (vì $Oz$ là tia phân giác của góc $xOy$).

Hai tam giác vuông có cạnh huyền và một góc nhọn bằng nhau nên $\triangle OAM=\triangle OBM$ (cạnh huyền – góc nhọn).

Suy ra $MA=MB$ (hai cạnh tương ứng).

**Nhận xét.** Kết quả này nói rằng mọi điểm trên tia phân giác của một góc đều cách đều hai cạnh của góc.
:::

:::diagram Điểm cách đều hai cạnh của góc
alt: Góc xOy, điểm M trong góc với MA vuông góc với Ox, MB vuông góc với Oy và MA bằng MB
point O 0,0 below-left
point A 4.33,0 below-right
point B 2.165,3.75 above-left
point M 4.33,2.5 right
segment O A
segment O B
segment O M
segment M A
segment M B
right O A M
right O B M
mark M A 1
mark M B 1
:::

:::example Cạnh huyền và cạnh góc vuông
Cho điểm $M$ nằm trong góc $xOy$. Kẻ $MA\perp Ox$ tại $A$ và $MB\perp Oy$ tại $B$ sao cho $MA=MB$. Chứng minh $OM$ là tia phân giác của góc $xOy$.

**Lời giải.** Xét tam giác $OAM$ vuông tại $A$ và tam giác $OBM$ vuông tại $B$ có:

- $OM$ là cạnh huyền chung;
- $MA=MB$ (gt), là hai cạnh góc vuông.

Do đó $\triangle OAM=\triangle OBM$ (cạnh huyền – cạnh góc vuông). Suy ra $\widehat{AOM}=\widehat{BOM}$ (hai góc tương ứng).

Vì $M$ nằm trong góc $xOy$ nên tia $OM$ nằm giữa hai tia $Ox$, $Oy$. Vậy $OM$ là tia phân giác của góc $xOy$.
:::

Bây giờ ta trả lời câu hỏi ở đầu bài, đi đủ bốn bước.

:::diagram Cột ăng-ten và hai dây chằng
alt: Cột OT thẳng đứng vuông góc với mặt đất AB, hai dây chằng TA và TB có độ dài bằng nhau
point O 0,0 below
point T 0,4 above
point A -3,0 below-left
point B 3,0 below-right
segment O T
segment T A
segment T B
segment A B
right A O T
mark T A 1
mark T B 1
label -1.5,-0.5 "3 m"
label -0.5,2 "4 m"
:::

:::example Hai dây chằng cột ăng-ten
Cột ăng-ten $OT$ cao $4$ m thẳng đứng trên mặt đất phẳng. Hai dây chằng $TA$, $TB$ cùng dài $5$ m, với $A$, $B$ nằm trên mặt đất, $OA=3$ m. Chứng minh $OB=3$ m.

**Lời giải.**

*Hiểu đề.* Ta biết $TA=TB=5$ m và $OT$ vuông góc với mặt đất. Cần chứng minh $OB=OA$.

*Tìm cách giải.* $OA$ và $OB$ là hai cạnh góc vuông của hai tam giác vuông $OAT$ và $OBT$ (vuông tại $O$). Hai tam giác này có cạnh huyền bằng nhau ($TA=TB$) và chung cạnh góc vuông $OT$, nên dùng trường hợp cạnh huyền – cạnh góc vuông.

*Giải.* Xét tam giác $OAT$ vuông tại $O$ và tam giác $OBT$ vuông tại $O$ có:

- $TA=TB$ ($=5$ m), là hai cạnh huyền (gt);
- $OT$ là cạnh góc vuông chung.

Do đó $\triangle OAT=\triangle OBT$ (cạnh huyền – cạnh góc vuông). Suy ra $OB=OA=3$ m, và hai dây nghiêng cùng một góc so với mặt đất: $\widehat{TAO}=\widehat{TBO}$.

Vậy $OB=3$ m.

*Nhìn lại.* Điều kiện cột thẳng đứng cho ta góc vuông tại $O$; nếu cột nghiêng thì không còn tam giác vuông và kết quả không còn đúng. Nếu hai dây dài không bằng nhau, chẳng hạn $TA=5$ m và $TB=6$ m, thì $OB$ có còn bằng $OA$ không?
:::

:::warning Những lỗi hay gặp
- **Quên nêu tam giác vuông.** Sai: "$\triangle OAM$, $\triangle OBM$ có $OM$ chung và $MA=MB$ nên bằng nhau." Vì sao sai: hai cạnh bằng nhau chưa đủ, ta cần góc vuông để dùng được trường hợp cạnh huyền – cạnh góc vuông. Đúng: viết "tam giác $OAM$ vuông tại $A$ và tam giác $OBM$ vuông tại $B$", rồi mới nêu hai cạnh.
- **Ghép sai cạnh huyền với cạnh góc vuông.** Sai: "$BC=MN$ nên hai tam giác bằng nhau", trong đó $BC$ là cạnh huyền còn $MN$ là cạnh góc vuông. Vì sao sai: cạnh huyền của tam giác này phải bằng cạnh huyền của tam giác kia. Đúng: ghép cạnh huyền với cạnh huyền, cạnh góc vuông với cạnh góc vuông.
- **Chỉ có hai góc nhọn bằng nhau.** Sai: "Hai tam giác vuông có góc nhọn $30^\circ$ và $60^\circ$ nên bằng nhau." Vì sao sai: hai tam giác vuông có cạnh huyền $4$ cm và $6$ cm đều có thể có góc nhọn $30^\circ$ và $60^\circ$ nhưng không chồng khít. Đúng: phải có thêm một cặp cạnh bằng nhau.
:::

**Kết nối.** Bài này không có điều gì hoàn toàn mới: ba trường hợp đầu đều quy về c.g.c và g.c.g, chỉ riêng cạnh huyền – cạnh góc vuông được thừa nhận. Bài sau ta dùng các trường hợp bằng nhau để tìm hiểu tam giác cân và đường trung trực.

## Thuật ngữ

:::terms
- tam giác vuông | right-angled triangle
- cạnh huyền | hypotenuse
- cạnh góc vuông | leg
- góc nhọn | acute angle
- cạnh huyền – góc nhọn | hypotenuse – acute angle (AAS)
- cạnh huyền – cạnh góc vuông | RHS (right angle – hypotenuse – side)
- thừa nhận | accepted without proof
- cách đều | equidistant
- tia phân giác | angle bisector
- vuông góc | perpendicular
:::

## Tóm tắt

- Tam giác vuông có cạnh huyền (đối diện góc vuông) và hai cạnh góc vuông; hai góc nhọn có tổng bằng $90^\circ$.
- Hai tam giác vuông bằng nhau nếu có hai cạnh góc vuông bằng nhau, hoặc một cạnh góc vuông và một góc nhọn kề bằng nhau, hoặc cạnh huyền và một góc nhọn bằng nhau, hoặc cạnh huyền và một cạnh góc vuông bằng nhau.
- Khi trình bày, luôn viết rõ "tam giác … vuông tại …" trước khi áp dụng.
- Hai góc nhọn bằng nhau chưa đủ để kết luận hai tam giác vuông bằng nhau.
- Điểm nằm trên tia phân giác của một góc thì cách đều hai cạnh của góc; điều ngược lại cũng đúng.

Vậy người đo cột ăng-ten có thể yên tâm: $OB=3$ m, dù không cần đo.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho tam giác $ABC$ vuông tại $A$ và tam giác $MNP$ vuông tại $M$ có $AB=MN=6$ cm, $AC=MP=8$ cm.

a) Chứng minh $\triangle ABC=\triangle MNP$.

b) Biết $BC=10$ cm, tính $NP$.

::hint
**Kiến thức:** hai cạnh góc vuông bằng nhau thì hai tam giác vuông bằng nhau; hai cạnh huyền tương ứng bằng nhau.

**Gợi ý các bước:**
1. Xác định hai cạnh góc vuông của mỗi tam giác.
2. Cạnh $NP$ tương ứng với cạnh nào của tam giác $ABC$?

::solution
a) Xét tam giác $ABC$ và tam giác $MNP$ có:

- $AB=MN$ ($=6$ cm) (gt);
- $\widehat{BAC}=\widehat{NMP}$ ($=90^\circ$) (gt);
- $AC=MP$ ($=8$ cm) (gt).

Do đó $\triangle ABC=\triangle MNP$ (hai cạnh góc vuông).

b) Suy ra $NP=BC=10$ cm (hai cạnh huyền tương ứng).

Vậy $\triangle ABC=\triangle MNP$ và $NP=10$ cm.

**Đáp số.** $NP=10$ cm.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ và tam giác $DEF$ vuông tại $D$ có $AC=DF=5$ cm và $\widehat C=\widehat F=35^\circ$. Chứng minh $\triangle ABC=\triangle DEF$ và tính $\widehat E$.

::hint
**Kiến thức:** cạnh góc vuông và góc nhọn kề bằng nhau thì hai tam giác vuông bằng nhau; hai góc nhọn của tam giác vuông phụ nhau.

**Gợi ý các bước:**
1. Cạnh $AC$ kề với góc nào của tam giác $ABC$?
2. Góc $E$ tương ứng với góc $B$; tính $\widehat B$.

::solution
Xét tam giác $ABC$ và tam giác $DEF$ có:

- $\widehat{BAC}=\widehat{EDF}$ ($=90^\circ$) (gt);
- $AC=DF$ ($=5$ cm) (gt);
- $\widehat C=\widehat F$ ($=35^\circ$) (gt).

Do đó $\triangle ABC=\triangle DEF$ (g.c.g).

Suy ra $\widehat E=\widehat B$ (hai góc tương ứng). Trong tam giác $ABC$ vuông tại $A$, $\widehat B=90^\circ-\widehat C=90^\circ-35^\circ=55^\circ$. Vậy $\widehat E=55^\circ$.

**Đáp số.** $\widehat E=55^\circ$.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ và tam giác $MNP$ vuông tại $M$. Với mỗi điều kiện sau, cho biết hai tam giác có bằng nhau không, theo trường hợp nào, và viết kí hiệu bằng nhau đúng thứ tự đỉnh.

a) $AB=MN$ và $\widehat B=\widehat N$.

b) $BC=NP$ và $\widehat C=\widehat P$.

c) $\widehat B=\widehat N$ và $\widehat C=\widehat P$.

d) $BC=NP$ và $AC=MN$.

::hint
**Kiến thức:** bốn trường hợp bằng nhau của tam giác vuông; đỉnh tương ứng xác định từ các cặp cạnh hoặc góc bằng nhau.

**Gợi ý các bước:**
1. Với mỗi điều kiện, xác định cạnh là cạnh huyền hay cạnh góc vuông.
2. Ở câu d), $AC=MN$ cho biết $C$ ứng với $N$.

::solution
Hai tam giác $ABC$ (vuông tại $A$) và $MNP$ (vuông tại $M$) đã có một cặp góc vuông bằng nhau: $\widehat A=\widehat M=90^\circ$. Ta xét từng điều kiện.

a) $AB$ và $MN$ là hai cạnh góc vuông, lần lượt kề với các góc nhọn $\widehat B$ và $\widehat N$. Ta có $AB=MN$ và $\widehat B=\widehat N$. Theo trường hợp cạnh góc vuông – góc nhọn kề (g.c.g), hai tam giác bằng nhau. Các đỉnh ứng nhau là $A\leftrightarrow M$, $B\leftrightarrow N$, $C\leftrightarrow P$, nên $\triangle ABC=\triangle MNP$.

b) $BC$ và $NP$ là hai cạnh huyền, còn $\widehat C=\widehat P$ là hai góc nhọn tương ứng. Theo trường hợp cạnh huyền – góc nhọn, hai tam giác bằng nhau. Các đỉnh ứng nhau là $A\leftrightarrow M$, $B\leftrightarrow N$, $C\leftrightarrow P$, nên $\triangle ABC=\triangle MNP$.

c) Ta chỉ có hai cặp góc nhọn bằng nhau, không có cặp cạnh nào bằng nhau. Hai tam giác vuông có các góc bằng nhau vẫn có thể có kích thước khác nhau, nên chưa đủ điều kiện để kết luận hai tam giác bằng nhau.

d) $BC$ và $NP$ là hai cạnh huyền, $AC$ và $MN$ là hai cạnh góc vuông. Theo trường hợp cạnh huyền – cạnh góc vuông, hai tam giác bằng nhau. Vì $AC=MN$ nên đỉnh $C$ ứng với $N$; vì $A$ ứng với $M$ nên $B$ ứng với $P$. Do đó $\triangle ABC=\triangle MPN$.

Vậy ở a) và b), hai tam giác bằng nhau và $\triangle ABC=\triangle MNP$; ở c) chưa đủ điều kiện; ở d) hai tam giác bằng nhau và $\triangle ABC=\triangle MPN$.

**Đáp số.** a) g.c.g, $\triangle ABC=\triangle MNP$. b) Cạnh huyền – góc nhọn, $\triangle ABC=\triangle MNP$. c) Chưa đủ. d) Cạnh huyền – cạnh góc vuông, $\triangle ABC=\triangle MPN$.
:::

:::exercise
Cho điểm $M$ nằm trong góc $xOy$. Kẻ $MA\perp Ox$ tại $A$ và $MB\perp Oy$ tại $B$ sao cho $MA=MB$. Chứng minh $OA=OB$.

::hint
**Kiến thức:** cạnh huyền – cạnh góc vuông.

**Gợi ý các bước:**
1. Xét hai tam giác vuông $OAM$ và $OBM$.
2. Cạnh huyền chung là cạnh nào?

::solution
Xét tam giác $OAM$ vuông tại $A$ và tam giác $OBM$ vuông tại $B$ có:

- $OM$ là cạnh huyền chung;
- $MA=MB$ (gt).

Do đó $\triangle OAM=\triangle OBM$ (cạnh huyền – cạnh góc vuông). Suy ra $OA=OB$ (hai cạnh tương ứng).

Vậy $OA=OB$.

**Đáp số.** Chứng minh xong.
:::

:::exercise
Hai chiếc thang cùng dài $4$ m dựa vào hai bức tường thẳng đứng trên nền đất phẳng. Chân mỗi thang cách chân tường $1{,}5$ m. Chứng minh hai thang chạm tường ở cùng độ cao và nghiêng cùng một góc so với mặt đất.

::hint
**Kiến thức:** cạnh huyền – cạnh góc vuông; tường thẳng đứng nên tạo góc vuông với mặt đất.

**Gợi ý các bước:**
1. Gọi $H$, $A$, $T$ là chân tường, chân thang, đầu thang chạm tường của thang thứ nhất; đặt tên tương tự cho thang thứ hai.
2. Thang là cạnh huyền; khoảng cách chân thang đến chân tường là cạnh góc vuông.

::solution
Gọi $H$, $A$, $T$ lần lượt là chân tường, chân thang và điểm thang chạm tường của thang thứ nhất; $H'$, $A'$, $T'$ là các điểm tương ứng của thang thứ hai. Tam giác $HAT$ vuông tại $H$ và tam giác $H'A'T'$ vuông tại $H'$.

Xét hai tam giác này có:

- $AT=A'T'$ ($=4$ m), là hai cạnh huyền (gt);
- $HA=H'A'$ ($=1{,}5$ m), là hai cạnh góc vuông (gt).

Do đó $\triangle HAT=\triangle H'A'T'$ (cạnh huyền – cạnh góc vuông). Suy ra $HT=H'T'$ và $\widehat{HAT}=\widehat{H'A'T'}$.

Vậy hai thang chạm tường ở cùng độ cao và nghiêng cùng một góc.

**Đáp số.** $HT=H'T'$ và $\widehat{HAT}=\widehat{H'A'T'}$.
:::

:::exercise
Cho tam giác $ABC$ có $AB=AC$. Kẻ $AH\perp BC$ ($H$ thuộc $BC$). Chứng minh $HB=HC$ và $\widehat{BAH}=\widehat{CAH}$.

::hint
**Kiến thức:** cạnh huyền – cạnh góc vuông.

**Gợi ý các bước:**
1. Xét hai tam giác $AHB$ và $AHC$, chúng vuông tại đâu?
2. Cạnh huyền nào bằng nhau, cạnh góc vuông nào chung?

::solution
Xét tam giác $AHB$ vuông tại $H$ và tam giác $AHC$ vuông tại $H$ có:

- $AB=AC$ (gt), là hai cạnh huyền;
- $AH$ là cạnh góc vuông chung.

Do đó $\triangle AHB=\triangle AHC$ (cạnh huyền – cạnh góc vuông). Suy ra $HB=HC$ và $\widehat{BAH}=\widehat{CAH}$ (các cạnh, góc tương ứng).

Vậy $HB=HC$ và $\widehat{BAH}=\widehat{CAH}$.

**Đáp số.** $HB=HC$; $\widehat{BAH}=\widehat{CAH}$.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$. Trên tia đối của tia $AB$ lấy điểm $D$ sao cho $AD=AB$. Chứng minh $\triangle ABC=\triangle ADC$ và $CB=CD$.

::hint
**Kiến thức:** hai cạnh góc vuông bằng nhau; hai góc kề bù.

**Gợi ý các bước:**
1. Vì sao $\widehat{CAD}=90^\circ$?
2. Tìm hai cạnh góc vuông bằng nhau của hai tam giác $ABC$, $ADC$.

::solution
Vì $B$, $A$, $D$ thẳng hàng với $A$ nằm giữa, nên $\widehat{CAD}+\widehat{CAB}=180^\circ$ (hai góc kề bù). Mà $\widehat{CAB}=90^\circ$ nên $\widehat{CAD}=90^\circ$.

Xét tam giác $ABC$ vuông tại $A$ và tam giác $ADC$ vuông tại $A$ có:

- $AB=AD$ (gt);
- $AC$ là cạnh góc vuông chung.

Do đó $\triangle ABC=\triangle ADC$ (hai cạnh góc vuông). Suy ra $CB=CD$ (hai cạnh huyền tương ứng).

Vậy $\triangle ABC=\triangle ADC$ và $CB=CD$.

**Đáp số.** $\triangle ABC=\triangle ADC$; $CB=CD$.
:::

:::exercise Thử thách
Cho tam giác $ABC$ nhọn có $AB=AC$. Kẻ $BE\perp AC$ ($E$ thuộc cạnh $AC$) và $CD\perp AB$ ($D$ thuộc cạnh $AB$).

a) Chứng minh $BE=CD$ và $AD=AE$.

b) Chứng minh $\triangle BDC=\triangle CEB$.

c) Suy ra $\widehat{ABC}=\widehat{ACB}$.

::hint
**Kiến thức:** cạnh huyền – góc nhọn, cạnh huyền – cạnh góc vuông.

**Gợi ý các bước:**
1. a) Hai tam giác vuông $ABE$ và $ACD$ có chung góc nhọn nào?
2. b) Tính $BD$ và $CE$ bằng cách lấy $AB$ trừ $AD$, $AC$ trừ $AE$.
3. c) Đọc cặp góc tương ứng từ hai tam giác bằng nhau ở câu b).

::solution
a) Xét tam giác $ABE$ vuông tại $E$ và tam giác $ACD$ vuông tại $D$ có:

- $AB=AC$ (gt), là hai cạnh huyền;
- $\widehat A$ là góc nhọn chung.

Do đó $\triangle ABE=\triangle ACD$ (cạnh huyền – góc nhọn). Suy ra $BE=CD$ và $AE=AD$.

b) Vì tam giác $ABC$ nhọn nên $D$ nằm trên cạnh $AB$ và $E$ nằm trên cạnh $AC$. Do đó $BD=AB-AD=AC-AE=CE$.

Xét tam giác $BDC$ vuông tại $D$ và tam giác $CEB$ vuông tại $E$ có:

- $BC$ là cạnh huyền chung;
- $BD=CE$ (chứng minh trên).

Do đó $\triangle BDC=\triangle CEB$ (cạnh huyền – cạnh góc vuông).

c) Từ b) suy ra $\widehat{DBC}=\widehat{ECB}$ (hai góc tương ứng), tức là $\widehat{ABC}=\widehat{ACB}$.

Vậy a), b), c) đã được chứng minh.

**Đáp số.** a) $BE=CD$, $AD=AE$. b) $\triangle BDC=\triangle CEB$. c) $\widehat{ABC}=\widehat{ACB}$.
:::

## Kiểm tra mini

:::quiz
::mc NB
Hai tam giác vuông bằng nhau nếu chúng có
A. hai góc nhọn tương ứng bằng nhau.
B. hai cạnh huyền bằng nhau.
C. cùng chu vi.
D. cạnh huyền và một cạnh góc vuông tương ứng bằng nhau.
::key D
Đó là trường hợp cạnh huyền – cạnh góc vuông. A chỉ cho hai tam giác cùng hình dạng; B và C thiếu dữ kiện.

::mc TH
Tam giác $ABC$ vuông tại $A$ và tam giác $DEF$ vuông tại $D$ có $AB=DE$ và $AC=DF$. Hai tam giác bằng nhau theo trường hợp
A. hai cạnh góc vuông.
B. cạnh huyền – góc nhọn.
C. cạnh huyền – cạnh góc vuông.
D. chưa đủ để kết luận.
::key A
$AB$, $AC$ và $DE$, $DF$ đều là các cạnh góc vuông, và góc vuông xen giữa chúng bằng nhau (c.g.c).

::mc TH
Tam giác $ABC$ vuông tại $A$ và tam giác $MNP$ vuông tại $M$ có $BC=NP$ và $\widehat C=\widehat P$. Khẳng định nào sau đây đúng?
A. $\triangle ABC=\triangle MPN$.
B. $\triangle ABC=\triangle MNP$.
C. Chưa đủ điều kiện để kết luận.
D. $\triangle ABC=\triangle NMP$.
::key B
$\widehat C=\widehat P$ nên $C$ ứng với $P$, suy ra $B$ ứng với $N$ và $A$ ứng với $M$; hai tam giác bằng nhau theo cạnh huyền – góc nhọn.

::mc TH
Tam giác $ABC$ vuông tại $A$ và tam giác $DEF$ vuông tại $D$ có $\widehat B=\widehat E$ và $\widehat C=\widehat F$. Khẳng định nào sau đây đúng?
A. $\triangle ABC=\triangle DEF$ (g.c.g).
B. $\triangle ABC=\triangle DEF$ (cạnh huyền – góc nhọn).
C. Chưa đủ để kết luận hai tam giác bằng nhau.
D. $AB=DE$.
::key C
Hai tam giác vuông có hai góc nhọn tương ứng bằng nhau chỉ cho ta biết chúng cùng hình dạng; còn thiếu một cặp cạnh bằng nhau.

::tf TH VD TH TH
Cho tam giác $ABC$ vuông tại $A$ có $AB=6$ cm, $BC=10$ cm; tam giác $MNP$ vuông tại $M$ có $MN=6$ cm, $NP=10$ cm; biết $AC=8$ cm. Xét tính đúng sai của các mệnh đề sau:
a) Hai tam giác bằng nhau theo trường hợp cạnh huyền – cạnh góc vuông.
b) $MP=6$ cm.
c) $\widehat B=\widehat N$.
d) $\widehat C=90^\circ$.
::key Đ S Đ S
a) Đúng: $BC=NP$ (cạnh huyền) và $AB=MN$ (cạnh góc vuông). b) Sai: $MP=AC=8$ cm. c) Đúng: hai góc tương ứng. d) Sai: góc vuông ở $A$, nên $\widehat C$ nhọn.

::sa VD
Trong bài cột ăng-ten, thay số đo: $OA=2{,}4$ m. Tính $OB$ (đơn vị: mét).
::key 2,4
$\triangle OAT=\triangle OBT$ (cạnh huyền – cạnh góc vuông) nên $OB=OA=2{,}4$ m.

::sa VD
Tam giác $ABC$ vuông tại $A$ và tam giác $DEF$ vuông tại $D$ có $BC=EF=10$ cm và $\widehat B=\widehat E$. Biết $AC=6$ cm. Tính $DF$ (đơn vị: cm).
::key 6
$\triangle ABC=\triangle DEF$ (cạnh huyền – góc nhọn) nên $DF=AC=6$ cm.
:::
