---
title: Tam giác cân. Đường trung trực của đoạn thẳng
description: Chứng minh tính chất và dấu hiệu nhận biết tam giác cân, tam giác đều; hiểu đường trung trực của đoạn thẳng cùng định lí thuận và định lí đảo.
minutes: 35
---

:::goals
- Nêu được định nghĩa tam giác cân, tam giác đều; phát biểu và chứng minh được tính chất (hai góc ở đáy bằng nhau) và dấu hiệu nhận biết (hai góc bằng nhau thì tam giác cân).
- Nêu được định nghĩa đường trung trực của đoạn thẳng; phát biểu và chứng minh được định lí thuận và định lí đảo về tính chất của nó.
- Phân biệt rõ định lí thuận với định lí đảo, và biết khi nào được dùng từng định lí.
- Vận dụng vào các tình huống thực tế như khung chữ A, vị trí trạm bơm cách đều hai làng.
:::

Trên một thửa ruộng, hai cây cọc $A$ và $B$ cách nhau $8$ m. Bạn muốn cắm thêm một cọc $M$ cách đều hai cọc kia, tức là $MA=MB$. Bạn buộc hai đầu một sợi dây dài $10$ m vào $A$ và $B$, kéo căng ở chính giữa dây rồi cắm cọc $M$ ở đó. Cọc $M$ vừa cắm được thì tam giác $MAB$ có hai cạnh bằng nhau. Nếu bạn kéo sang một vị trí khác nhưng vẫn căng dây, vị trí ấy có cách đều $A$, $B$ không? Và tất cả các vị trí cách đều $A$, $B$ nằm trên một đường như thế nào?

Hai câu hỏi này là hai nửa của cùng một câu chuyện: một nửa về tam giác có hai cạnh bằng nhau (tam giác cân), nửa kia về những điểm cách đều hai đầu mút của một đoạn thẳng (đường trung trực). Ta sẽ thấy chúng nối với nhau chặt chẽ.

## Tam giác cân

Bạn gấp đôi một tờ giấy, cắt một hình tam giác sao cho nếp gấp là một đường cắt qua đỉnh. Khi mở ra, bạn được một tam giác có hai cạnh bằng nhau, và hai góc ở hai đầu cạnh còn lại trông cũng bằng nhau. Ta sẽ chứng minh điều đó.

:::definition Tam giác cân
**Tam giác cân** là tam giác có hai cạnh bằng nhau. Hai cạnh bằng nhau gọi là **cạnh bên**, cạnh còn lại gọi là **đáy**. Đỉnh chung của hai cạnh bên là **đỉnh** của tam giác cân; hai góc kề đáy là **góc ở đáy**, góc tại đỉnh là **góc ở đỉnh**.

Tam giác $ABC$ có $AB=AC$ là tam giác cân tại $A$.
:::

:::diagram Tam giác cân
alt: Tam giác ABC cân tại A với AB bằng AC, đáy BC
point A 3,4 above
point B 0,0 below-left
point C 6,0 below-right
polygon A B C
mark A B 1
mark A C 1
:::

:::theorem Tính chất của tam giác cân (định lí thuận)
Nếu tam giác $ABC$ cân tại $A$ thì hai góc ở đáy bằng nhau: $\widehat B=\widehat C$.
:::

:::diagram Chứng minh hai góc ở đáy bằng nhau
alt: Tam giác ABC cân tại A, M là trung điểm của BC, đoạn AM nét đứt, hai góc B và C được đánh dấu bằng nhau
point A 3,4 above
point B 0,0 below-left
point C 6,0 below-right
point M 3,0 below
polygon A B C
segment A M dashed
mark A B 1
mark A C 1
mark B M 2
mark M C 2
angle A B C "α"
angle B C A "α"
:::

**Chứng minh.** Gọi $M$ là trung điểm của $BC$. Xét tam giác $ABM$ và tam giác $ACM$ có:

- $AB=AC$ (gt);
- $BM=CM$ (vì $M$ là trung điểm của $BC$);
- $AM$ là cạnh chung.

Do đó $\triangle ABM=\triangle ACM$ (c.c.c). Suy ra $\widehat B=\widehat C$ (hai góc tương ứng). Ta còn có $\widehat{AMB}=\widehat{AMC}$, mà hai góc này kề bù nên mỗi góc bằng $90^\circ$; vậy $AM\perp BC$.

Điều ngược lại có đúng không? Nếu một tam giác có hai góc bằng nhau thì nó có cân không? Đây là **định lí đảo**.

:::theorem Dấu hiệu nhận biết tam giác cân (định lí đảo)
Nếu tam giác $ABC$ có $\widehat B=\widehat C$ thì tam giác $ABC$ cân tại $A$, tức là $AB=AC$.
:::

:::diagram Chứng minh định lí đảo
alt: Tam giác ABC có góc B bằng góc C, tia phân giác AD của góc A cắt BC tại D, hai góc BAD và DAC được đánh dấu bằng nhau
point A 3,4 above
point B 0,0 below-left
point C 6,0 below-right
point D 3,0 below
polygon A B C
segment A D dashed
angle A B C "α"
angle B C A "α"
angle B A D "β"
angle D A C "β"
:::

**Chứng minh.** Kẻ tia phân giác của góc $A$ cắt $BC$ tại $D$. Xét tam giác $ABD$ và tam giác $ACD$ có:

- $\widehat{BAD}=\widehat{CAD}$ (vì $AD$ là tia phân giác của góc $A$);
- $AD$ là cạnh chung;
- $\widehat{ADB}=\widehat{ADC}$, vì $\widehat{ADB}=180^\circ-\widehat B-\widehat{BAD}$ và $\widehat{ADC}=180^\circ-\widehat C-\widehat{CAD}$ mà $\widehat B=\widehat C$ (gt), $\widehat{BAD}=\widehat{CAD}$.

Do đó $\triangle ABD=\triangle ACD$ (g.c.g). Suy ra $AB=AC$ (hai cạnh tương ứng).

:::note Định lí thuận và định lí đảo
Định lí đảo của một định lí là định lí có giả thiết và kết luận đổi chỗ cho nhau. Một định lí đúng thì định lí đảo của nó **chưa chắc đúng**. Chẳng hạn, "hai góc đối đỉnh thì bằng nhau" đúng, nhưng "hai góc bằng nhau thì đối đỉnh" sai. Vì thế mỗi định lí đảo phải được chứng minh riêng. Ở đây, cả hai chiều về tam giác cân đều đúng: **thuận** cho ta "cân thì hai góc đáy bằng nhau"; **đảo** cho ta "hai góc bằng nhau thì cân".
:::

**Tam giác đều.** Tam giác có ba cạnh bằng nhau gọi là **tam giác đều**. Nếu $AB=AC=BC$ thì tam giác $ABC$ cân tại $A$ nên $\widehat B=\widehat C$, và cân tại $B$ nên $\widehat A=\widehat C$. Vậy ba góc bằng nhau, mà tổng ba góc là $180^\circ$ nên mỗi góc bằng $60^\circ$. Ngược lại, tam giác có ba góc bằng nhau thì có ba cạnh bằng nhau (theo định lí đảo).

:::diagram Hai tam giác của ví dụ 1
alt: Tam giác ABC cân tại A với góc ở đỉnh A bằng 100 độ, hai góc ở đáy chưa biết
point A 3,2.52 above
point B 0,0 below-left
point C 6,0 below-right
polygon A B C
mark A B 1
mark A C 1
angle B A C "100°"
angle A B C "?"
angle B C A "?"
:::

:::example Tính góc của tam giác cân
Tam giác $ABC$ cân tại $A$ có $\widehat A=100^\circ$. Tính $\widehat B$ và $\widehat C$. Nếu tam giác $DEF$ cân tại $D$ có $\widehat E=50^\circ$, tính $\widehat D$.

**Lời giải.** Vì tam giác $ABC$ cân tại $A$ nên $\widehat B=\widehat C$ (hai góc ở đáy). Trong tam giác $ABC$, $\widehat B+\widehat C=180^\circ-\widehat A=180^\circ-100^\circ=80^\circ$. Do đó $\widehat B=\widehat C=80^\circ:2=40^\circ$.

Vì tam giác $DEF$ cân tại $D$ nên $\widehat F=\widehat E=50^\circ$. Suy ra $\widehat D=180^\circ-50^\circ-50^\circ=80^\circ$.

Vậy $\widehat B=\widehat C=40^\circ$ và $\widehat D=80^\circ$.
:::

:::diagram Khung chữ A
alt: Khung chữ A hình tam giác ABC với hai góc ở chân B và C cùng bằng 65 độ, cạnh AB dài 2,1 m, cạnh AC chưa biết
point A 3,6.43 above
point B 0,0 below-left
point C 6,0 below-right
polygon A B C
angle A B C "65°"
angle B C A "65°"
label 0.7,3.6 "2,1 m"
label 5.4,3.6 "?"
:::

:::example Khung chữ A của người thợ
Một khung chữ A có hai chân $AB$, $AC$ và thanh ngang $BC$ đặt trên sàn. Người thợ không có thước dài nên chỉ dùng thước đo góc: đo được $\widehat B=\widehat C=65^\circ$; đo $AB=2{,}1$ m. Chứng minh hai chân khung dài bằng nhau, tính $AC$ và góc $\widehat A$ ở đỉnh.

**Lời giải.**

*Hiểu đề.* Ta biết hai góc $B$, $C$ bằng nhau và $AB=2{,}1$ m. Cần suy ra $AC$ và $\widehat A$.

*Tìm cách giải.* Hai góc bằng nhau cho ta tam giác cân, nhưng cân ở đỉnh nào? Cạnh đối diện hai góc bằng nhau là hai cạnh bằng nhau: $AC$ đối diện $\widehat B$ và $AB$ đối diện $\widehat C$. Vậy dùng định lí đảo.

*Giải.* Tam giác $ABC$ có $\widehat B=\widehat C$ ($=65^\circ$) nên tam giác $ABC$ cân tại $A$ (dấu hiệu nhận biết tam giác cân). Suy ra $AC=AB=2{,}1$ m.

Trong tam giác $ABC$, $\widehat A=180^\circ-\widehat B-\widehat C=180^\circ-65^\circ-65^\circ=50^\circ$.

Vậy $AC=2{,}1$ m và $\widehat A=50^\circ$.

*Nhìn lại.* Người thợ chỉ cần thước đo góc mà vẫn kiểm tra được hai chân khung bằng nhau. Nếu đo được $\widehat B=65^\circ$ nhưng $\widehat C=64^\circ$ thì hai chân có bằng nhau không? Vì sao?
:::

:::diagram Tam giác ADE cân
alt: Tam giác ABC cân tại A, các điểm D và E trên cạnh BC với BD bằng CE, nối AD và AE
point A 3,4 above
point B 0,0 below-left
point D 2,0 below
point E 4,0 below
point C 6,0 below-right
polygon A B C
segment A D
segment A E
mark A B 1
mark A C 1
mark B D 2
mark C E 2
:::

:::example Hai điểm đối xứng trên đáy
Cho tam giác $ABC$ cân tại $A$. Trên cạnh $BC$ lấy hai điểm $D$, $E$ sao cho $BD=CE$ ($D$ nằm giữa $B$ và $E$). Chứng minh tam giác $ADE$ cân.

**Lời giải.** Vì tam giác $ABC$ cân tại $A$ nên $AB=AC$ và $\widehat{ABD}=\widehat{ACE}$ (hai góc ở đáy $\widehat B$, $\widehat C$).

Xét tam giác $ABD$ và tam giác $ACE$ có:

- $AB=AC$ (gt);
- $\widehat{ABD}=\widehat{ACE}$ (chứng minh trên);
- $BD=CE$ (gt).

Do đó $\triangle ABD=\triangle ACE$ (c.g.c). Suy ra $AD=AE$ (hai cạnh tương ứng).

Vậy tam giác $ADE$ cân tại $A$.
:::

## Đường trung trực của đoạn thẳng

Bạn thử gấp một tờ giấy sao cho hai điểm $A$ và $B$ đã chấm trên giấy trùng nhau. Nếp gấp là một đường thẳng. Nó đi qua trung điểm của $AB$ và vuông góc với $AB$. Đó là đường trung trực.

:::definition Đường trung trực
**Đường trung trực** của đoạn thẳng là đường thẳng vuông góc với đoạn thẳng tại trung điểm của nó.
:::

:::diagram Đường trung trực của đoạn AB
alt: Đoạn thẳng AB có trung điểm I; đường thẳng d vuông góc với AB tại I là đường trung trực
point A 0,0 left
point B 6,0 right
point I 3,0 below
point U 3,3 ""
point V 3,-3 ""
segment A B
segment U V
right A I U
mark A I 1
mark I B 1
label 3.3,2.8 "d"
:::

:::theorem Tính chất của đường trung trực (định lí thuận)
Điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó.
:::

:::diagram Chứng minh định lí thuận
alt: Điểm M trên đường trung trực d của AB; I là trung điểm AB; hai đoạn MA và MB cần chứng minh bằng nhau
point A 0,0 left
point B 6,0 right
point I 3,0 below
point U 3,3.5 ""
point V 3,-3 ""
point M 3,2.5 above-right
segment A B
segment U V
segment M A dashed
segment M B dashed
right A I M
mark A I 1
mark I B 1
mark M A 2
mark M B 2
label 3.3,3.2 "d"
:::

**Chứng minh.** Cho đường trung trực $d$ của $AB$, cắt $AB$ tại trung điểm $I$, và $M$ là một điểm bất kì trên $d$. Nếu $M$ trùng $I$ thì $MA=MB$ vì $I$ là trung điểm. Nếu $M$ khác $I$, xét tam giác $MIA$ và tam giác $MIB$ có:

- $IA=IB$ (vì $I$ là trung điểm của $AB$);
- $\widehat{MIA}=\widehat{MIB}$ ($=90^\circ$) (vì $d\perp AB$);
- $MI$ là cạnh chung.

Do đó $\triangle MIA=\triangle MIB$ (c.g.c). Suy ra $MA=MB$.

:::theorem Điều ngược lại (định lí đảo)
Điểm cách đều hai đầu mút của một đoạn thẳng thì nằm trên đường trung trực của đoạn thẳng đó.
:::

:::diagram Chứng minh định lí đảo
alt: Điểm M có MA bằng MB, I là trung điểm của AB, đoạn MI nét đứt, hai góc MIA và MIB được kí hiệu x và y
point A 0,0 left
point B 6,0 right
point I 3,0 below
point M 3,2.5 above
segment A B
segment M A
segment M B
segment M I dashed
mark M A 2
mark M B 2
mark A I 1
mark I B 1
angle M I A "x"
angle M I B "y"
:::

**Chứng minh.** Cho $MA=MB$. Gọi $I$ là trung điểm của $AB$. Nếu $M$ trùng $I$ thì $M$ nằm trên đường trung trực. Nếu $M$ khác $I$, xét tam giác $MIA$ và tam giác $MIB$ có:

- $MA=MB$ (gt);
- $IA=IB$ (vì $I$ là trung điểm của $AB$);
- $MI$ là cạnh chung.

Do đó $\triangle MIA=\triangle MIB$ (c.c.c). Suy ra $\widehat{MIA}=\widehat{MIB}$. Hai góc này kề bù nên mỗi góc bằng $90^\circ$. Vậy $MI\perp AB$ tại trung điểm $I$, tức $M$ nằm trên đường trung trực của $AB$.

Hai định lí cho ta: **đường trung trực của đoạn thẳng $AB$ chính là tập hợp tất cả các điểm cách đều $A$ và $B$.** Điều này trả lời câu hỏi ở đầu bài: các vị trí cọc $M$ nằm trên một đường thẳng, đó là đường trung trực của $AB$.

:::diagram Vị trí trạm bơm
alt: Hai làng A và B cách nhau 6 km, đường thẳng d là con đường, đường trung trực của AB nét đứt cắt d tại M
point A 0,0 left
point B 6,0 right
point I 3,0 below
point M 3,1.29 above-right
point P 0,3 ""
point Q 7,-1 ""
point U 3,3 ""
point V 3,-2 ""
segment P Q
segment U V dashed
segment A B
segment M A
segment M B
right A I U
mark M A 1
mark M B 1
label 6.2,-0.2 "d"
:::

:::example Đặt trạm bơm cách đều hai làng
Hai làng $A$ và $B$ cách nhau $6$ km. Con đường thẳng $d$ chạy qua gần hai làng và không vuông góc với $AB$. Người ta muốn đặt trạm bơm $M$ trên đường $d$ sao cho $M$ cách đều hai làng. Hãy chỉ ra vị trí của $M$ và chứng minh $MA=MB$. Biết đo được $MA=3{,}3$ km, tính $MB$.

**Lời giải.**

*Hiểu đề.* Cần một điểm $M$ nằm trên $d$ với $MA=MB$.

*Tìm cách giải.* Các điểm cách đều $A$, $B$ nằm trên đường trung trực của $AB$. Vậy $M$ phải là giao điểm của $d$ với đường trung trực của $AB$.

*Giải.* Vẽ đường trung trực của $AB$. Vì $d$ không vuông góc với $AB$ nên $d$ không song song với đường trung trực, do đó hai đường cắt nhau tại một điểm $M$.

Vì $M$ nằm trên đường trung trực của $AB$ nên $MA=MB$ (định lí thuận). Vậy $MB=MA=3{,}3$ km.

Vị trí này là duy nhất: nếu một điểm $M'$ trên $d$ cũng cách đều $A$, $B$ thì theo định lí đảo $M'$ nằm trên đường trung trực của $AB$, nên $M'$ là giao điểm của $d$ và đường trung trực, tức $M'=M$.

Vậy trạm bơm đặt tại giao điểm $M$ của $d$ với đường trung trực của $AB$, và $MB=3{,}3$ km.

*Nhìn lại.* Ở đây ta dùng cả hai định lí: thuận để chứng tỏ $M$ thoả mãn yêu cầu, đảo để chứng tỏ không còn vị trí nào khác. Nếu $d$ vuông góc với $AB$ thì chuyện gì xảy ra: có điểm nào thoả mãn không, và có bao nhiêu điểm?
:::

:::warning Những lỗi hay gặp
- **Đọc nhầm cạnh đối diện của hai góc bằng nhau.** Sai: "Tam giác $ABC$ có $\widehat B=\widehat C$ nên $AB=BC$." Vì sao sai: cạnh nằm đối diện góc $B$ là $AC$ và đối diện góc $C$ là $AB$; hai cạnh bằng nhau là $AB$ và $AC$. Đúng: $AB=AC$, tam giác cân tại $A$.
- **Tưởng đường vuông góc là đường trung trực.** Sai: "$d\perp AB$ nên mọi điểm trên $d$ cách đều $A$, $B$." Vì sao sai: đường trung trực phải vuông góc với $AB$ *và* đi qua trung điểm của $AB$. Đúng: kiểm tra cả hai điều kiện.
- **Quên xét trường hợp $M$ trùng $I$.** Sai: xét tam giác $MIA$ và $MIB$ mà không nói gì khi $M$ trùng trung điểm $I$. Vì sao sai: khi $M\equiv I$ thì không có tam giác. Đúng: xét riêng trường hợp này, khi đó $MA=MB$ vì $I$ là trung điểm.
:::

**Kết nối.** Hai định lí về tam giác cân và hai định lí về đường trung trực đều được chứng minh bằng c.c.c, c.g.c, g.c.g. Chúng sẽ trở lại khi bạn học về đường trung trực và các đường đồng quy trong tam giác.

## Thuật ngữ

:::terms
- tam giác cân | isosceles triangle
- cạnh bên, đáy | equal sides (legs), base
- góc ở đáy, góc ở đỉnh | base angle, apex angle
- tam giác đều | equilateral triangle
- đường trung trực | perpendicular bisector
- định lí thuận | theorem (the original statement)
- định lí đảo | converse
- cách đều | equidistant
- trung điểm | midpoint
- kề bù | adjacent angles on a straight line
:::

## Tóm tắt

- Tam giác cân có hai cạnh bằng nhau; **thuận:** tam giác cân thì hai góc ở đáy bằng nhau; **đảo:** tam giác có hai góc bằng nhau thì cân (cạnh đối diện hai góc ấy bằng nhau).
- Tam giác đều có ba cạnh bằng nhau, ba góc bằng nhau và mỗi góc bằng $60^\circ$.
- Đường trung trực của đoạn thẳng vuông góc với đoạn thẳng tại trung điểm của nó.
- **Thuận:** điểm trên đường trung trực thì cách đều hai đầu mút. **Đảo:** điểm cách đều hai đầu mút thì nằm trên đường trung trực.
- Đảo của một định lí đúng chưa chắc đúng, nên phải chứng minh riêng.

Với cái cọc ở đầu bài: mọi vị trí $M$ cách đều $A$, $B$ nằm trên đường trung trực của $AB$, và ngược lại.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
a) Tam giác $ABC$ cân tại $A$ có $\widehat A=70^\circ$. Tính $\widehat B$.

b) Tam giác $DEF$ cân tại $D$ có $\widehat E=50^\circ$. Tính $\widehat D$.

::hint
**Kiến thức:** hai góc ở đáy của tam giác cân bằng nhau; tổng ba góc bằng $180^\circ$.

**Gợi ý các bước:**
1. a) Hai góc ở đáy là $\widehat B$ và $\widehat C$; tính tổng của chúng.
2. b) Góc ở đáy $\widehat E$ bằng góc nào?

::solution
a) Vì tam giác $ABC$ cân tại $A$ nên $\widehat B=\widehat C$. Ta có $\widehat B+\widehat C=180^\circ-70^\circ=110^\circ$, nên $\widehat B=110^\circ:2=55^\circ$.

b) Vì tam giác $DEF$ cân tại $D$ nên $\widehat F=\widehat E=50^\circ$. Suy ra $\widehat D=180^\circ-50^\circ-50^\circ=80^\circ$.

Vậy $\widehat B=55^\circ$ và $\widehat D=80^\circ$.

**Đáp số.** a) $55^\circ$. b) $80^\circ$.
:::

:::exercise
Tam giác $ABC$ có $AB=AC$ và $\widehat B=60^\circ$. Chứng minh tam giác $ABC$ là tam giác đều.

::hint
**Kiến thức:** tính chất và dấu hiệu nhận biết tam giác cân; tổng ba góc bằng $180^\circ$.

**Gợi ý các bước:**
1. Từ $AB=AC$, suy ra góc nào bằng góc $B$?
2. Tính góc $A$, rồi chỉ ra các cạnh còn lại bằng nhau.

::solution
Vì $AB=AC$ nên tam giác $ABC$ cân tại $A$, do đó $\widehat C=\widehat B=60^\circ$. Suy ra $\widehat A=180^\circ-60^\circ-60^\circ=60^\circ$.

Vậy $\widehat A=\widehat B=\widehat C$. Từ $\widehat A=\widehat B$ suy ra $CA=CB$ (hai cạnh đối diện hai góc bằng nhau). Kết hợp với $AB=AC$ ta được $AB=BC=CA$.

Vậy tam giác $ABC$ đều.

**Đáp số.** Chứng minh xong.
:::

:::exercise
Cho đoạn thẳng $AB=10$ cm.

a) Điểm $M$ nằm trên đường trung trực của $AB$ và $MA=13$ cm. Tính $MB$.

b) Điểm $N$ có $NA=NB=7$ cm. Điểm $N$ nằm trên đường nào?

::hint
**Kiến thức:** định lí thuận và định lí đảo về đường trung trực.

**Gợi ý các bước:**
1. a) Dùng định lí nào: từ "nằm trên đường trung trực" suy ra gì?
2. b) Từ "cách đều hai đầu mút" suy ra gì?

::solution
a) Vì $M$ nằm trên đường trung trực của $AB$ nên $MA=MB$ (định lí thuận). Do đó $MB=13$ cm.

b) Vì $NA=NB$ nên $N$ cách đều hai đầu mút của $AB$, do đó $N$ nằm trên đường trung trực của $AB$ (định lí đảo).

Vậy $MB=13$ cm và $N$ nằm trên đường trung trực của $AB$.

**Đáp số.** a) $13$ cm. b) Đường trung trực của $AB$.
:::

:::exercise
Mặt cắt của một mái nhà là tam giác $ABC$ cân tại $A$ với góc ở đỉnh $\widehat A=110^\circ$. Tính góc nghiêng $\widehat B$ của mái. Biết thanh xà $AB=3$ m, tính $AC$.

::hint
**Kiến thức:** tam giác cân có hai góc ở đáy bằng nhau và hai cạnh bên bằng nhau.

**Gợi ý các bước:**
1. Tính tổng hai góc ở đáy.
2. Hai cạnh bên của tam giác cân tại $A$ là những cạnh nào?

::solution
Vì tam giác $ABC$ cân tại $A$ nên $\widehat B=\widehat C$. Ta có $\widehat B+\widehat C=180^\circ-110^\circ=70^\circ$, nên $\widehat B=70^\circ:2=35^\circ$.

Cũng vì tam giác cân tại $A$ nên $AC=AB=3$ m.

Vậy góc nghiêng $\widehat B=35^\circ$ và $AC=3$ m.

**Đáp số.** $\widehat B=35^\circ$; $AC=3$ m.
:::

:::exercise
Cho tam giác $ABC$ cân tại $A$, $M$ là trung điểm của $BC$ và $D$ là một điểm thuộc đoạn $AM$ ($D$ khác $A$). Chứng minh $DB=DC$.

::hint
**Kiến thức:** c.c.c, c.g.c; tam giác cân.

**Gợi ý các bước:**
1. Chứng minh $\widehat{BAM}=\widehat{CAM}$ bằng hai tam giác $ABM$ và $ACM$.
2. Xét hai tam giác $ABD$ và $ACD$.

::solution
Xét tam giác $ABM$ và tam giác $ACM$ có $AB=AC$ (gt), $BM=CM$ (gt) và $AM$ là cạnh chung. Do đó $\triangle ABM=\triangle ACM$ (c.c.c), suy ra $\widehat{BAM}=\widehat{CAM}$, tức $\widehat{BAD}=\widehat{CAD}$.

Xét tam giác $ABD$ và tam giác $ACD$ có:

- $AB=AC$ (gt);
- $\widehat{BAD}=\widehat{CAD}$ (chứng minh trên);
- $AD$ là cạnh chung.

Do đó $\triangle ABD=\triangle ACD$ (c.g.c). Suy ra $DB=DC$.

Vậy $DB=DC$.

**Đáp số.** Chứng minh xong.
:::

:::exercise
Cho tam giác $ABC$ cân tại $A$. Trên tia đối của tia $BC$ lấy điểm $D$, trên tia đối của tia $CB$ lấy điểm $E$ sao cho $BD=CE$. Chứng minh tam giác $ADE$ cân. (Ôn lại c.g.c.)

::hint
**Kiến thức:** tam giác cân; hai góc kề bù; c.g.c.

**Gợi ý các bước:**
1. Tính $\widehat{ABD}$ và $\widehat{ACE}$ bằng cách lấy $180^\circ$ trừ hai góc ở đáy.
2. Xét hai tam giác $ABD$ và $ACE$.

::solution
Vì tam giác $ABC$ cân tại $A$ nên
$$AB=AC\quad\text{và}\quad\widehat{ABC}=\widehat{ACB}.$$

Vì $D$ nằm trên tia đối của tia $BC$ nên $\widehat{ABD}$ và $\widehat{ABC}$ là hai góc kề bù. Do đó
$$\widehat{ABD}=180^\circ-\widehat{ABC}.$$

Vì $E$ nằm trên tia đối của tia $CB$ nên $\widehat{ACE}$ và $\widehat{ACB}$ là hai góc kề bù. Do đó
$$\widehat{ACE}=180^\circ-\widehat{ACB}.$$

Mà $\widehat{ABC}=\widehat{ACB}$ nên $\widehat{ABD}=\widehat{ACE}$.

Xét tam giác $ABD$ và tam giác $ACE$ có:

- $AB=AC$ (chứng minh trên);
- $\widehat{ABD}=\widehat{ACE}$ (chứng minh trên);
- $BD=CE$ (giả thiết).

Do đó $\triangle ABD=\triangle ACE$ (c.g.c).

Suy ra $AD=AE$ (hai cạnh tương ứng), nên tam giác $ADE$ cân tại $A$.

Vậy tam giác $ADE$ cân tại $A$.

**Đáp số.** Chứng minh xong.
:::

:::exercise
Cho tam giác $ABC$ nhọn, cân tại $A$. Kẻ $BE\perp AC$ ($E$ thuộc $AC$) và $CD\perp AB$ ($D$ thuộc $AB$). Chứng minh $BE=CD$. (Ôn lại tam giác vuông.)

::hint
**Kiến thức:** tính chất của tam giác cân; cạnh huyền – góc nhọn.

**Gợi ý các bước:**
1. Hai góc ở đáy $\widehat{ABC}$ và $\widehat{ACB}$ có quan hệ gì?
2. Xét hai tam giác vuông $BDC$ và $CEB$ có chung cạnh huyền $BC$.

::solution
Vì tam giác $ABC$ cân tại $A$ nên $\widehat{ABC}=\widehat{ACB}$, tức $\widehat{DBC}=\widehat{ECB}$.

Xét tam giác $BDC$ vuông tại $D$ và tam giác $CEB$ vuông tại $E$ có:

- $BC$ là cạnh huyền chung;
- $\widehat{DBC}=\widehat{ECB}$ (chứng minh trên).

Do đó $\triangle BDC=\triangle CEB$ (cạnh huyền – góc nhọn). Suy ra $CD=BE$ (hai cạnh góc vuông tương ứng).

Vậy $BE=CD$.

**Đáp số.** Chứng minh xong.
:::

:::exercise Thử thách
Ba làng $A$, $B$, $C$ không thẳng hàng. Người ta muốn đào một cái giếng $O$ cách đều ba làng. Đường trung trực của $AB$ và đường trung trực của $AC$ cắt nhau tại $O$.

a) Chứng minh $OA=OB=OC$.

b) Chứng minh $O$ nằm trên đường trung trực của $BC$.

c) Biết $OA=120$ m, tính $OB$ và $OC$.

::hint
**Kiến thức:** định lí thuận rồi định lí đảo về đường trung trực.

**Gợi ý các bước:**
1. a) $O$ nằm trên đường trung trực của $AB$ thì suy ra điều gì? Làm tương tự với $AC$.
2. b) Từ $OB=OC$ dùng định lí đảo.

::solution
a) Vì $O$ nằm trên đường trung trực của $AB$ nên $OA=OB$ (định lí thuận). Vì $O$ nằm trên đường trung trực của $AC$ nên $OA=OC$ (định lí thuận). Vậy $OA=OB=OC$.

b) Vì $OB=OC$ nên $O$ cách đều hai đầu mút của $BC$, do đó $O$ nằm trên đường trung trực của $BC$ (định lí đảo).

c) Vì $OA=OB=OC$ và $OA=120$ m nên $OB=OC=120$ m.

Vậy giếng $O$ cách đều ba làng, mỗi làng $120$ m.

**Đáp số.** a) $OA=OB=OC$. b) $O$ thuộc đường trung trực của $BC$. c) $OB=OC=120$ m.
:::

## Kiểm tra mini

:::quiz
::mc TH
Tam giác $ABC$ cân tại $A$ có $\widehat A=50^\circ$. Số đo góc $B$ là
A. $65^\circ$.
B. $50^\circ$.
C. $130^\circ$.
D. $80^\circ$.
::key A
$\widehat B=\widehat C=(180^\circ-50^\circ):2=65^\circ$. B là góc ở đỉnh, C là tổng hai góc đáy, D là kết quả của phép tính sai.

::mc NB
Điểm $M$ cách đều hai điểm $A$ và $B$. Khẳng định nào sau đây đúng?
A. $M$ là trung điểm của $AB$.
B. $M$ thuộc đường trung trực của $AB$.
C. $M$ thuộc đường thẳng $AB$.
D. $MA\perp MB$.
::key B
Đây là định lí đảo: điểm cách đều hai đầu mút thì nằm trên đường trung trực. A và C chỉ là những trường hợp đặc biệt hoặc sai; D không đúng nói chung.

::mc TH
Tam giác $ABC$ có $\widehat B=\widehat C$. Khi đó
A. $AB=BC$.
B. $AC=BC$.
C. $AB=AC$.
D. tam giác $ABC$ đều.
::key C
Hai cạnh đối diện hai góc bằng nhau là $AC$ (đối diện $\widehat B$) và $AB$ (đối diện $\widehat C$), nên $AB=AC$.

::mc NB
Đường trung trực của đoạn thẳng $AB$ là đường thẳng
A. đi qua $A$.
B. vuông góc với $AB$.
C. đi qua trung điểm của $AB$.
D. vuông góc với $AB$ tại trung điểm của $AB$.
::key D
Cần cả hai điều kiện: vuông góc với $AB$ và đi qua trung điểm của $AB$. B hoặc C chỉ có một điều kiện.

::tf NB TH TH TH
Cho tam giác $ABC$ cân tại $A$ và $M$ là trung điểm của $BC$. Xét tính đúng sai của các mệnh đề sau:
a) $\widehat B=\widehat C$.
b) $AM\perp BC$.
c) $A$ cách đều $B$ và $C$.
d) $M$ cách đều $A$ và $B$.
::key Đ Đ Đ S
a) Đúng: hai góc ở đáy. b) Đúng: $\triangle ABM=\triangle ACM$ nên $\widehat{AMB}=\widehat{AMC}=90^\circ$. c) Đúng: $AB=AC$. d) Sai: $MB=\dfrac{BC}{2}$ còn $MA$ là đường cao, nói chung hai độ dài này không bằng nhau.

::sa TH
Tam giác $ABC$ cân tại $A$ có $\widehat B=72^\circ$. Tính $\widehat A$ (đơn vị: độ).
::key 36
$\widehat C=\widehat B=72^\circ$ nên $\widehat A=180^\circ-72^\circ-72^\circ=36^\circ$.

::sa NB
Điểm $M$ nằm trên đường trung trực của đoạn $AB$ và $MA=6{,}5$ cm. Tính $MB$ (đơn vị: cm).
::key 6,5
Điểm trên đường trung trực cách đều hai đầu mút nên $MB=MA=6{,}5$ cm.
:::
