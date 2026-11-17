---
title: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác
description: Hiểu hai tam giác bằng nhau, đỉnh, cạnh, góc tương ứng; dùng trường hợp cạnh – cạnh – cạnh (c.c.c) để chứng minh và suy ra các góc bằng nhau.
minutes: 25
---

:::goals
- Phát biểu được định nghĩa hai tam giác bằng nhau và viết đúng kí hiệu theo thứ tự các đỉnh tương ứng.
- Phát biểu được trường hợp bằng nhau cạnh – cạnh – cạnh (c.c.c).
- Trình bày được lời giải chứng minh hai tam giác bằng nhau, rồi suy ra các cạnh, các góc tương ứng bằng nhau.
- Vận dụng vào các tình huống thực tế như dựng thanh chống, chép góc bằng compa.
:::

Một người thợ mộc cần làm hai vì kèo mái hiên giống hệt nhau. Mỗi vì kèo là một khung tam giác ghép từ ba thanh gỗ dài $3$ m, $3$ m và $4{,}8$ m. Ông có thước dây nhưng không có thước đo góc. Ông cắt đủ sáu thanh, đóng thành hai khung rồi tự hỏi: hai khung này có chồng khít lên nhau không, kể cả độ nghiêng của mái?

Câu trả lời là có. Chỉ cần so ba cạnh là biết hai tam giác giống hệt nhau, không cần đo góc nào; nhờ vậy ta chứng minh được hai góc bằng nhau mà không cần dụng cụ đo. Đó cũng là lí do khung tam giác không bị xô lệch, còn khung bốn cạnh thì có thể méo đi.

## Hai tam giác bằng nhau

Bạn thử gấp đôi một tờ giấy, vẽ một tam giác lên lớp trên rồi cắt theo cả hai lớp. Ta được hai miếng chồng khít lên nhau: đỉnh trùng với đỉnh, cạnh trùng với cạnh, góc trùng với góc. Những đỉnh, cạnh, góc trùng nhau khi chồng khít được gọi là **tương ứng**.

:::definition Hai tam giác bằng nhau
Hai tam giác gọi là **bằng nhau** nếu chúng có các cạnh tương ứng bằng nhau và các góc tương ứng bằng nhau.

Nếu các đỉnh $A$, $B$, $C$ lần lượt tương ứng với các đỉnh $M$, $N$, $P$ thì ta viết $\triangle ABC=\triangle MNP$. Khi đó
$$AB=MN,\quad BC=NP,\quad CA=PM,\qquad \widehat A=\widehat M,\quad \widehat B=\widehat N,\quad \widehat C=\widehat P.$$
:::

:::diagram Hai tam giác bằng nhau
alt: Hai tam giác ABC và MNP giống hệt nhau, các cạnh tương ứng có cùng số gạch, các góc tương ứng có cùng kí hiệu α, β, γ
point A 0,0 below-left
point B 5,0 below-right
point C 1.5,3 above
point M 8,0 below-left
point N 13,0 below-right
point P 9.5,3 above
polygon A B C
polygon M N P
mark A B 1
mark B C 2
mark C A 3
mark M N 1
mark N P 2
mark P M 3
angle B A C "α"
angle A B C "β"
angle B C A "γ"
angle N M P "α"
angle M N P "β"
angle N P M "γ"
:::

**Hiểu sâu hơn.** Khi viết $\triangle ABC=\triangle MNP$, thứ tự các chữ cái mang thông tin: hai chữ cái cùng vị trí là hai đỉnh tương ứng. Viết $\triangle ABC=\triangle NMP$ là nói $A$ ứng với $N$, một điều hoàn toàn khác. Hai tam giác bằng nhau cũng có thể là hình lật mặt của nhau, như khi bạn lật miếng giấy sang mặt sau.

:::diagram Hai tam giác của ví dụ 1
alt: Tam giác ABC có AB bằng 5 cm, BC bằng 7 cm, CA bằng 8 cm, góc A bằng 60 độ, và tam giác MNP bằng nó với các số đo cần tìm đánh dấu hỏi
point A 0,0 below-left
point B 5,0 below-right
point C 4,6.93 above
point M 8,0 below-left
point N 13,0 below-right
point P 12,6.93 above
polygon A B C
polygon M N P
mark A B 1
mark B C 2
mark C A 3
mark M N 1
mark N P 2
mark P M 3
angle B A C "60°"
angle N M P "?"
label 2.5,-0.7 "5 cm"
label 5.6,3.5 "7 cm"
label 0.9,3.6 "8 cm"
label 10.5,-0.7 "?"
label 13.6,3.5 "?"
label 8.9,3.6 "?"
:::

:::example Đọc kí hiệu hai tam giác bằng nhau
Cho $\triangle ABC=\triangle MNP$, trong đó $AB=5$ cm, $BC=7$ cm, $CA=8$ cm và $\widehat A=60^\circ$. Tính các cạnh $MN$, $NP$, $PM$, số đo góc $M$ và chu vi tam giác $MNP$.

**Lời giải.** Vì $\triangle ABC=\triangle MNP$ nên các đỉnh $A$, $B$, $C$ lần lượt ứng với $M$, $N$, $P$.

Các cạnh tương ứng bằng nhau, nên $MN=AB=5$ cm, $NP=BC=7$ cm, $PM=CA=8$ cm.

Các góc tương ứng bằng nhau, nên $\widehat M=\widehat A=60^\circ$.

Chu vi tam giác $MNP$ là $5+7+8=20$ (cm).

Vậy $MN=5$ cm, $NP=7$ cm, $PM=8$ cm, $\widehat M=60^\circ$ và chu vi bằng $20$ cm.
:::

## Trường hợp bằng nhau thứ nhất: cạnh – cạnh – cạnh

Theo định nghĩa, muốn biết hai tam giác bằng nhau ta phải kiểm tra sáu điều: ba cạnh và ba góc. Có cách ngắn hơn không? Bạn thử vẽ tam giác $ABC$ có $BC=5$ cm, $AB=3$ cm, $AC=4$ cm bằng thước và compa: vẽ đoạn $BC$; vẽ cung tròn tâm $B$ bán kính $3$ cm; vẽ cung tròn tâm $C$ bán kính $4$ cm; hai cung cắt nhau tại $A$.

Hai cung chỉ cắt nhau tại hai điểm, đối xứng với nhau qua $BC$. Vì vậy hai bạn cùng làm theo cách này sẽ ra hai tam giác chồng khít nhau, nhiều lắm là phải lật tờ giấy. Ba cạnh đã "khoá" hình dạng của tam giác.

:::theorem Trường hợp bằng nhau cạnh – cạnh – cạnh (c.c.c)
Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.

Nếu $AB=A'B'$, $BC=B'C'$, $CA=C'A'$ thì $\triangle ABC=\triangle A'B'C'$ (c.c.c).
:::

:::diagram Trường hợp c.c.c
alt: Hai tam giác ABC và A'B'C' có từng cặp cạnh tương ứng được đánh dấu bằng một, hai, ba gạch
point A 0,0 below-left
point B 6,0 below-right
point C 4,3 above
point A' 9,0 below-left
point B' 15,0 below-right
point C' 13,3 above
polygon A B C
polygon A' B' C'
mark A B 1
mark B C 2
mark C A 3
mark A' B' 1
mark B' C' 2
mark C' A' 3
:::

**Vì sao?** Chính là cách vẽ bằng compa ở trên: biết ba độ dài thì điểm $A$ chỉ có hai vị trí đối xứng nhau qua $BC$, nên tam giác chỉ có một hình dạng. Khi đã có hai tam giác bằng nhau, ta được thêm ba cặp góc bằng nhau mà không phải đo.

:::tip Cách trình bày một bài chứng minh
Bước 1: viết "Xét tam giác … và tam giác … có:". Bước 2: liệt kê từng cặp cạnh bằng nhau kèm lí do (gt, cạnh chung, …). Bước 3: kết luận "Do đó … (c.c.c)". Bước 4: suy ra cặp góc hay cặp cạnh mà đề bài hỏi.
:::

:::diagram Hai tam giác của ví dụ 2
alt: Hai tam giác ABC và DEF, tam giác DEF là hình lật của tam giác ABC, các cạnh tương ứng có cùng số gạch
point A 0,0 below-left
point B 6,0 below-right
point C 2.25,3.31 above
point D 14,0 below-right
point E 8,0 below-left
point F 11.75,3.31 above
polygon A B C
polygon D E F
mark A B 1
mark A C 2
mark B C 3
mark D E 1
mark D F 2
mark E F 3
:::

:::example Áp dụng trường hợp c.c.c
Cho hai tam giác $ABC$ và $DEF$ có $AB=DE=6$ cm, $AC=DF=4$ cm, $BC=EF=5$ cm.

a) Chứng minh $\triangle ABC=\triangle DEF$.

b) Chỉ ra các cặp góc tương ứng bằng nhau.

**Lời giải.** a) Xét tam giác $ABC$ và tam giác $DEF$ có:

- $AB=DE$ ($=6$ cm) (gt);
- $AC=DF$ ($=4$ cm) (gt);
- $BC=EF$ ($=5$ cm) (gt).

Do đó $\triangle ABC=\triangle DEF$ (c.c.c).

b) Từ $\triangle ABC=\triangle DEF$, ta có các góc tương ứng bằng nhau: $\widehat A=\widehat D$, $\widehat B=\widehat E$, $\widehat C=\widehat F$. Mỗi cặp là hai góc đối diện với hai cạnh bằng nhau: $\widehat A$ và $\widehat D$ cùng đối diện với $BC=EF$.

Vậy $\triangle ABC=\triangle DEF$ và $\widehat A=\widehat D$, $\widehat B=\widehat E$, $\widehat C=\widehat F$.
:::

Bây giờ ta trở lại với người thợ mộc. Ông muốn dựng một thanh chống $AM$ từ đỉnh mái xuống chính giữa thanh ngang, và cần biết thanh đó có đứng thẳng hay không.

:::diagram Vì kèo mái hiên
alt: Tam giác ABC có AB bằng AC, M là trung điểm của BC, thanh chống AM chia tam giác thành hai tam giác ABM và ACM
point B 0,0 below-left
point C 4.8,0 below-right
point M 2.4,0 below
point A 2.4,1.8 above
polygon A B C
segment A M
mark A B 1
mark A C 1
mark B M 2
mark M C 2
angle B M A "x"
angle A M C "y"
:::

:::example Vì kèo của người thợ mộc
Một vì kèo là tam giác $ABC$ có $AB=AC=3$ m và $BC=4{,}8$ m. Người thợ lấy điểm $M$ trên $BC$ sao cho $BM=MC=2{,}4$ m rồi dựng thanh chống $AM$. Chứng minh rằng $AM\perp BC$, tức là thanh chống đứng thẳng khi $BC$ nằm ngang.

**Lời giải.**

*Hiểu đề.* Ta biết $AB=AC$ và $M$ chia $BC$ thành hai đoạn bằng nhau. Cần chứng minh góc tại $M$ là góc vuông.

*Tìm cách giải.* Hai góc $\widehat{AMB}$ và $\widehat{AMC}$ là hai góc kề bù, tổng bằng $180^\circ$. Nếu chúng bằng nhau thì mỗi góc bằng $90^\circ$. Hai góc này nằm trong hai tam giác $ABM$ và $ACM$, nên ta thử chứng minh hai tam giác đó bằng nhau.

*Giải.* Xét tam giác $ABM$ và tam giác $ACM$ có:

- $AB=AC$ ($=3$ m) (gt);
- $BM=CM$ ($=2{,}4$ m) (gt);
- $AM$ là cạnh chung.

Do đó $\triangle ABM=\triangle ACM$ (c.c.c). Suy ra $\widehat{AMB}=\widehat{AMC}$ (hai góc tương ứng).

Mà $\widehat{AMB}+\widehat{AMC}=180^\circ$ (hai góc kề bù), nên $\widehat{AMB}=\widehat{AMC}=90^\circ$.

Vậy $AM\perp BC$.

*Nhìn lại.* Hai tam giác bằng nhau còn cho $\widehat{BAM}=\widehat{CAM}$: thanh chống chia đôi góc ở đỉnh mái. Nếu $AB=3$ m nhưng $AC=3{,}2$ m thì hai tam giác không còn bằng nhau và $AM$ không còn vuông góc với $BC$. Vậy điều kiện $AB=AC$ quan trọng đến mức nào? Bài về tam giác cân sẽ nói rõ hơn.
:::

:::diagram Hai cạnh đối bằng nhau
alt: Tứ giác ABCD có đường chéo AC vẽ nét đứt, AB bằng CD, BC bằng DA, hai góc BAC và DCA được đánh dấu bằng nhau
point A 0,0 below-left
point B 2,3 above-left
point C 7,3 above-right
point D 5,0 below-right
polygon A B C D
segment A C dashed
mark A B 1
mark C D 1
mark B C 2
mark D A 2
angle B A C "α"
angle D C A "α"
:::

:::example Chứng minh hai đường thẳng song song
Cho tứ giác $ABCD$ có $AB=CD$ và $BC=DA$, trong đó $B$ và $D$ nằm khác phía đối với đường thẳng $AC$. Chứng minh $AB\parallel CD$.

**Lời giải.** Ta kẻ đường chéo $AC$. Xét tam giác $ABC$ và tam giác $CDA$ có:

- $AB=CD$ (gt);
- $BC=DA$ (gt);
- $AC$ là cạnh chung.

Do đó $\triangle ABC=\triangle CDA$ (c.c.c). Suy ra $\widehat{BAC}=\widehat{DCA}$ (hai góc tương ứng).

Hai góc $\widehat{BAC}$ và $\widehat{DCA}$ ở vị trí so le trong, tạo bởi đường thẳng $AC$ cắt hai đường thẳng $AB$, $CD$ (vì $B$, $D$ khác phía đối với $AC$).

Vậy $AB\parallel CD$.
:::

:::diagram Cách vẽ tia phân giác bằng compa
alt: Góc xOy có hai điểm A, B trên hai cạnh với OA bằng OB, điểm C trong góc với CA bằng CB, tia OC chia góc thành hai góc bằng nhau
point O 0,0 below-left
point A 4,0 below-right
point B 1.37,3.76 above-left
point C 4.92,3.44 above-right
segment O A
segment O B
segment O C
segment A C
segment B C
mark O A 1
mark O B 1
mark A C 2
mark B C 2
angle A O C "α"
angle C O B "α"
:::

:::example Vì sao cách vẽ tia phân giác bằng compa đúng?
Cho góc $xOy$. Vẽ cung tròn tâm $O$ cắt $Ox$, $Oy$ lần lượt tại $A$, $B$. Vẽ hai cung tròn có cùng bán kính, tâm $A$ và tâm $B$, cắt nhau tại điểm $C$ nằm trong góc $xOy$. Chứng minh $OC$ là tia phân giác của góc $xOy$.

**Lời giải.** Xét tam giác $OAC$ và tam giác $OBC$ có:

- $OA=OB$ (cùng là bán kính của cung tròn tâm $O$);
- $AC=BC$ (cùng là bán kính của hai cung tròn tâm $A$ và tâm $B$);
- $OC$ là cạnh chung.

Do đó $\triangle OAC=\triangle OBC$ (c.c.c). Suy ra $\widehat{AOC}=\widehat{BOC}$ (hai góc tương ứng).

Vì $C$ nằm trong góc $xOy$ nên tia $OC$ nằm giữa hai tia $Ox$, $Oy$. Vậy $OC$ là tia phân giác của góc $xOy$.
:::

:::warning Những lỗi hay gặp
- **Viết sai thứ tự đỉnh.** Sai: có $AB=MN$, $BC=NP$ nhưng lại viết $\triangle ABC=\triangle NMP$. Vì sao sai: viết như vậy là nói $A$ ứng với $N$, trong khi $A$ ứng với $M$. Đúng: $\triangle ABC=\triangle MNP$.
- **Cho rằng ba góc bằng nhau là đủ.** Sai: "Hai tam giác đều cùng có ba góc $60^\circ$ nên bằng nhau." Vì sao sai: tam giác đều cạnh $3$ cm và tam giác đều cạnh $5$ cm có cùng ba góc nhưng không chồng khít. Đúng: phải có ba cặp *cạnh* bằng nhau (c.c.c).
- **Quên cạnh chung.** Sai: chỉ ghi $OA=OB$ và $AC=BC$ rồi kết luận c.c.c. Vì sao sai: c.c.c cần đủ ba cặp cạnh, và cạnh chung $OC$ cũng là một cặp. Đúng: ghi thêm "$OC$ là cạnh chung".
:::

**Kết nối.** Bài này dùng lại tổng ba góc, hai góc kề bù và hai đường thẳng song song làm công cụ chứng minh; hai bài tiếp theo thêm các trường hợp bằng nhau có dữ kiện về góc.

## Thuật ngữ

:::terms
- hai tam giác bằng nhau | congruent triangles
- đỉnh tương ứng | corresponding vertices
- cạnh tương ứng | corresponding sides
- góc tương ứng | corresponding angles
- trường hợp cạnh – cạnh – cạnh (c.c.c) | SSS condition
- cạnh chung | common side
- giả thiết (gt) | given (hypothesis)
- hai góc kề bù | adjacent angles on a straight line
- hai góc so le trong | alternate angles
- tia phân giác | angle bisector
:::

## Tóm tắt

- Hai tam giác bằng nhau có các cạnh tương ứng bằng nhau và các góc tương ứng bằng nhau; viết $\triangle ABC=\triangle MNP$ theo đúng thứ tự đỉnh tương ứng.
- Trường hợp c.c.c: ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác bằng nhau.
- Ba góc bằng nhau chưa đủ để kết luận hai tam giác bằng nhau.
- Lời giải gồm: xét hai tam giác, liệt kê ba cặp cạnh kèm lí do, kết luận (c.c.c), rồi suy ra cặp góc hoặc cạnh cần tìm.
- Hai tam giác bằng nhau giúp ta chứng minh hai góc bằng nhau, hai đường thẳng song song, tia phân giác.

Người thợ mộc ở đầu bài có thể yên tâm: ba thanh gỗ cùng độ dài thì hai vì kèo giống hệt nhau.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho $\triangle ABC=\triangle DEF$ có $AB=4$ cm, $\widehat A=50^\circ$ và $\widehat B=70^\circ$. Tính $DE$ và $\widehat F$.

::hint
**Kiến thức:** các đỉnh $A$, $B$, $C$ ứng với $D$, $E$, $F$; tổng ba góc của tam giác bằng $180^\circ$.

**Gợi ý các bước:**
1. Cạnh $DE$ tương ứng với cạnh $AB$.
2. Góc $F$ tương ứng với góc $C$; tính $\widehat C$ trong tam giác $ABC$.

::solution
Vì $\triangle ABC=\triangle DEF$ nên các đỉnh $A$, $B$, $C$ lần lượt ứng với $D$, $E$, $F$.

Ta có $DE=AB=4$ cm (hai cạnh tương ứng).

Xét tam giác $ABC$, ta có $\widehat C=180^\circ-\widehat A-\widehat B=180^\circ-50^\circ-70^\circ=60^\circ$ (tổng ba góc của tam giác).

Vì $\widehat F=\widehat C$ (hai góc tương ứng) nên $\widehat F=60^\circ$.

Vậy $DE=4$ cm và $\widehat F=60^\circ$.

**Đáp số.** $DE=4$ cm; $\widehat F=60^\circ$.
:::

:::exercise
Tam giác $ABC$ có $AB=3$ cm, $BC=4$ cm, $CA=5$ cm. Tam giác $MNP$ có $MN=5$ cm, $NP=3$ cm, $PM=4$ cm. Chứng minh hai tam giác bằng nhau và viết kí hiệu bằng nhau theo đúng thứ tự các đỉnh.

::hint
**Kiến thức:** trường hợp c.c.c; các đỉnh tương ứng là các đỉnh chung của những cặp cạnh bằng nhau.

**Gợi ý các bước:**
1. Ghép cạnh $3$ cm của tam giác này với cạnh $3$ cm của tam giác kia, và làm tương tự với $4$ cm, $5$ cm.
2. Đỉnh $B$ là đỉnh chung của $AB$ và $BC$; tìm đỉnh chung của hai cạnh tương ứng trong tam giác $MNP$.

::solution
Ta có $AB=NP$ ($=3$ cm), $BC=PM$ ($=4$ cm), $CA=MN$ ($=5$ cm).

Xét tam giác $ABC$ và tam giác $NPM$ có $AB=NP$, $BC=PM$, $CA=MN$ (gt). Do đó $\triangle ABC=\triangle NPM$ (c.c.c).

Đỉnh $B$ là đỉnh chung của $AB$ và $BC$, còn trong tam giác kia đỉnh chung của $NP$ và $PM$ là $P$, nên $B$ ứng với $P$. Tương tự, $A$ ứng với $N$ và $C$ ứng với $M$.

Vậy $\triangle ABC=\triangle NPM$.

**Đáp số.** $\triangle ABC=\triangle NPM$ (c.c.c).
:::

:::exercise
Cho hai tam giác $ACB$ và $ADB$ có $AC=AD$ và $BC=BD$. Chứng minh $\widehat{CAB}=\widehat{DAB}$.

::hint
**Kiến thức:** trường hợp c.c.c, hai góc tương ứng của hai tam giác bằng nhau.

**Gợi ý các bước:**
1. Hai tam giác $ACB$ và $ADB$ đã có hai cặp cạnh bằng nhau; tìm cặp cạnh thứ ba.
2. Góc $CAB$ và góc $DAB$ có tương ứng với nhau không? Chúng cùng ở đỉnh $A$.

::solution
Xét tam giác $ACB$ và tam giác $ADB$ có:

- $AC=AD$ (gt);
- $BC=BD$ (gt);
- $AB$ là cạnh chung.

Do đó $\triangle ACB=\triangle ADB$ (c.c.c). Suy ra $\widehat{CAB}=\widehat{DAB}$ (hai góc tương ứng).

Vậy $\widehat{CAB}=\widehat{DAB}$.

**Đáp số.** Hai góc bằng nhau, theo c.c.c.
:::

:::exercise
Một chiếc diều hình cánh diều $ABCD$ có $AB=AD=40$ cm và $CB=CD=65$ cm. Chứng minh rằng $\widehat{ABC}=\widehat{ADC}$ và thanh nan $AC$ là tia phân giác của góc $BAD$.

::hint
**Kiến thức:** c.c.c; tia phân giác chia góc thành hai góc bằng nhau.

**Gợi ý các bước:**
1. Chọn hai tam giác có chung cạnh $AC$.
2. Từ hai tam giác bằng nhau, đọc ra cặp góc ở đỉnh $B$, $D$ và cặp góc ở đỉnh $A$.

::solution
Xét tam giác $ABC$ và tam giác $ADC$ có:

- $AB=AD$ ($=40$ cm) (gt);
- $CB=CD$ ($=65$ cm) (gt);
- $AC$ là cạnh chung.

Do đó $\triangle ABC=\triangle ADC$ (c.c.c). Suy ra $\widehat{ABC}=\widehat{ADC}$ và $\widehat{BAC}=\widehat{DAC}$ (các góc tương ứng).

Vì tia $AC$ nằm trong góc $BAD$ và $\widehat{BAC}=\widehat{DAC}$ nên $AC$ là tia phân giác của góc $BAD$.

Vậy $\widehat{ABC}=\widehat{ADC}$ và $AC$ là tia phân giác của góc $BAD$.

**Đáp số.** Chứng minh xong.
:::

:::exercise
Bạn Hà dùng compa vẽ góc $x'O'y'$ bằng góc $xOy$ như sau:

- Vẽ cung tròn tâm $O$ bán kính $r$, cắt $Ox$ tại $A$ và cắt $Oy$ tại $B$.
- Vẽ tia $O'x'$, rồi vẽ cung tròn tâm $O'$ bán kính $r$, cắt $O'x'$ tại $A'$.
- Vẽ cung tròn tâm $A'$ bán kính $AB$, cắt cung tròn tâm $O'$ tại $B'$; kẻ tia $O'B'$ và gọi là $O'y'$.

Chứng minh $\widehat{A'O'B'}=\widehat{AOB}$.

::hint
**Kiến thức:** c.c.c; các đoạn là bán kính của cùng một cung tròn thì bằng nhau.

**Gợi ý các bước:**
1. Xét hai tam giác $OAB$ và $O'A'B'$.
2. Tìm ba cặp cạnh bằng nhau, mỗi cặp là bán kính của một cung tròn.

::solution
Xét tam giác $OAB$ và tam giác $O'A'B'$ có:

- $OA=O'A'$ ($=r$);
- $OB=O'B'$ ($=r$);
- $AB=A'B'$ (cùng là bán kính của cung tròn tâm $A'$).

Do đó $\triangle OAB=\triangle O'A'B'$ (c.c.c). Suy ra $\widehat{AOB}=\widehat{A'O'B'}$ (hai góc tương ứng).

Vậy $\widehat{A'O'B'}=\widehat{AOB}$.

**Đáp số.** Chứng minh xong.
:::

:::exercise
Cho $\triangle MNP=\triangle HIK$. Chu vi tam giác $MNP$ bằng $24$ cm; biết $HI=7$ cm và $IK=8$ cm. Tính độ dài các cạnh của tam giác $MNP$.

::hint
**Kiến thức:** hai tam giác bằng nhau thì có chu vi bằng nhau và các cạnh tương ứng bằng nhau.

**Gợi ý các bước:**
1. Chu vi tam giác $HIK$ bằng bao nhiêu?
2. Tính $KH$, rồi đọc ra $MN$, $NP$, $PM$.

::solution
Vì $\triangle MNP=\triangle HIK$ nên chu vi tam giác $HIK$ cũng bằng $24$ cm.

Ta có $KH=24-7-8=9$ (cm).

Các cạnh tương ứng bằng nhau, nên $MN=HI=7$ cm, $NP=IK=8$ cm, $PM=KH=9$ cm.

Vậy tam giác $MNP$ có $MN=7$ cm, $NP=8$ cm, $PM=9$ cm.

**Đáp số.** $MN=7$ cm; $NP=8$ cm; $PM=9$ cm.
:::

:::exercise
Cho tứ giác $ABCD$ có $AB=CD$, $BC=DA$, trong đó $B$ và $D$ nằm khác phía đối với đường thẳng $AC$.

a) Chứng minh $AD\parallel BC$.

b) Biết $\widehat{ABC}=110^\circ$, tính $\widehat{BAD}$.

::hint
**Kiến thức:** c.c.c; hai góc so le trong bằng nhau thì hai đường thẳng song song; hai đường thẳng song song thì hai góc trong cùng phía bù nhau.

**Gợi ý các bước:**
1. a) Xét $\triangle ABC$ và $\triangle CDA$, tìm cặp góc so le trong đối với $AD$, $BC$ cắt bởi $AC$.
2. b) Hai góc $\widehat{BAD}$ và $\widehat{ABC}$ là hai góc trong cùng phía của $AD$, $BC$ cắt bởi $AB$.

::solution
a) Xét tam giác $ABC$ và tam giác $CDA$ có $AB=CD$ (gt), $BC=DA$ (gt) và $AC$ là cạnh chung. Do đó $\triangle ABC=\triangle CDA$ (c.c.c).

Suy ra $\widehat{ACB}=\widehat{CAD}$ (hai góc tương ứng). Hai góc này ở vị trí so le trong của hai đường thẳng $BC$, $AD$ cắt bởi $AC$ (vì $B$, $D$ khác phía đối với $AC$). Do đó $AD\parallel BC$.

b) Vì $AD\parallel BC$ nên $\widehat{BAD}+\widehat{ABC}=180^\circ$ (hai góc trong cùng phía). Suy ra $\widehat{BAD}=180^\circ-110^\circ=70^\circ$.

Vậy a) $AD\parallel BC$; b) $\widehat{BAD}=70^\circ$.

**Đáp số.** a) $AD\parallel BC$. b) $70^\circ$.
:::

:::exercise Thử thách
Một khung cửa sổ hình thoi $ABCD$ có $AB=BC=CD=DA=50$ cm và $\widehat{BAD}=70^\circ$.

a) Chứng minh $\triangle ABC=\triangle ADC$ và suy ra $AC$ là tia phân giác của góc $BAD$.

b) Chứng minh $\triangle ABC=\triangle CDA$ và suy ra $AB\parallel CD$.

c) Chứng minh $\widehat{BCD}=70^\circ$.

::hint
**Kiến thức:** c.c.c; cùng hai tam giác nhưng ghép các đỉnh theo hai cách khác nhau cho hai kết luận khác nhau.

**Gợi ý các bước:**
1. a) Ghép $A\to A$, $B\to D$, $C\to C$ (chung cạnh $AC$).
2. b) Ghép $A\to C$, $B\to D$, $C\to A$; tìm cặp góc so le trong.
3. c) Xét hai tam giác chung cạnh $BD$.

::solution
a) Xét tam giác $ABC$ và tam giác $ADC$ có $AB=AD$ (gt), $CB=CD$ (gt) và $AC$ là cạnh chung. Do đó $\triangle ABC=\triangle ADC$ (c.c.c). Suy ra $\widehat{BAC}=\widehat{DAC}$ (hai góc tương ứng). Vì tia $AC$ nằm trong góc $BAD$ nên $AC$ là tia phân giác của góc $BAD$.

b) Xét tam giác $ABC$ và tam giác $CDA$ có $AB=CD$ (gt), $BC=DA$ (gt) và $CA=AC$ (cạnh chung). Do đó $\triangle ABC=\triangle CDA$ (c.c.c). Suy ra $\widehat{BAC}=\widehat{DCA}$ (hai góc tương ứng). Hai góc này ở vị trí so le trong của $AB$, $CD$ cắt bởi $AC$ (vì $B$, $D$ khác phía đối với $AC$), nên $AB\parallel CD$.

c) Xét tam giác $ABD$ và tam giác $CBD$ có $AB=CB$ (gt), $AD=CD$ (gt) và $BD$ là cạnh chung. Do đó $\triangle ABD=\triangle CBD$ (c.c.c). Suy ra $\widehat{BAD}=\widehat{BCD}$, tức là $\widehat{BCD}=70^\circ$.

Vậy a), b), c) đã được chứng minh và $\widehat{BCD}=70^\circ$.

**Đáp số.** a) $AC$ là phân giác của $\widehat{BAD}$. b) $AB\parallel CD$. c) $\widehat{BCD}=70^\circ$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $\triangle ABC=\triangle MNP$. Khẳng định nào sau đây đúng?
A. $BC=NP$.
B. $AB=MP$.
C. $AC=MN$.
D. $\widehat A=\widehat N$.
::key A
$A$, $B$, $C$ lần lượt ứng với $M$, $N$, $P$, nên $BC$ ứng với $NP$. A, C ghép sai cạnh; D ghép sai góc ($\widehat A=\widehat M$).

::mc
Cho $\triangle ABC=\triangle DEF$ có $AB=3$ cm, $BC=5$ cm, $CA=6$ cm. Chu vi tam giác $DEF$ là
A. $8$ cm.
B. $14$ cm.
C. $30$ cm.
D. $11$ cm.
::key B
Chu vi $DEF$ bằng chu vi $ABC$: $3+5+6=14$ (cm). A và D thiếu một cạnh, C là tích ba số.

::mc
Hai tam giác $ABC$ và $DEF$ bằng nhau theo trường hợp c.c.c khi
A. $\widehat A=\widehat D$, $\widehat B=\widehat E$, $\widehat C=\widehat F$.
B. $AB=DE$, $BC=EF$ và $\widehat A=\widehat D$.
C. $AB=DE$, $BC=EF$, $CA=FD$.
D. $AB=DE$ và hai tam giác có cùng chu vi.
::key C
c.c.c cần ba cặp cạnh bằng nhau. B chỉ có hai cạnh và một góc không xen giữa, A chỉ có góc, D thiếu hai cặp cạnh.

::mc
Cho tam giác $OAC$ và $OBC$ có $OA=OB$, $AC=BC$. Để chứng minh $\triangle OAC=\triangle OBC$ theo c.c.c, ta cần thêm
A. $\widehat{OAC}=\widehat{OBC}$.
B. $OC=AB$.
C. $\widehat{AOB}=90^\circ$.
D. $OC$ là cạnh chung.
::key D
Cặp cạnh thứ ba là $OC=OC$. A và C là góc, không dùng được cho c.c.c; B so sánh hai đoạn không tương ứng.

::tf
Cho $\triangle ABC=\triangle MNP$, trong đó $AB=4$ cm, $\widehat A=50^\circ$ và $\widehat B=70^\circ$. Xét tính đúng sai của các mệnh đề sau:
a) $\widehat N=50^\circ$.
b) $MN=4$ cm.
c) $\widehat P=60^\circ$.
d) Có thể viết $\triangle ABC=\triangle NMP$.
::key S Đ Đ S
a) Sai: $N$ ứng với $B$ nên $\widehat N=70^\circ$. b) Đúng: $MN=AB$. c) Đúng: $\widehat P=\widehat C=180^\circ-50^\circ-70^\circ=60^\circ$. d) Sai: $A$ ứng với $M$ chứ không phải $N$.

::sa
Cho $\triangle ABC=\triangle DEF$ có $\widehat A=48^\circ$ và $\widehat B=67^\circ$. Tính số đo góc $F$ (đơn vị: độ).
::key 65
$\widehat F=\widehat C=180^\circ-48^\circ-67^\circ=65^\circ$.

::sa
Cho tứ giác $ABCD$ có $AB=AD$, $CB=CD$ và $\widehat{BAC}=32^\circ$, tia $AC$ nằm trong góc $BAD$. Tính số đo góc $BAD$ (đơn vị: độ).
::key 64
$\triangle ABC=\triangle ADC$ (c.c.c) nên $\widehat{DAC}=\widehat{BAC}=32^\circ$, do đó $\widehat{BAD}=32^\circ+32^\circ=64^\circ$.
:::
