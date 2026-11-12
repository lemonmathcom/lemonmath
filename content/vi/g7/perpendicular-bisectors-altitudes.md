---
title: Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác
description: Biết ba đường trung trực và ba đường cao của tam giác cùng đi qua một điểm, tìm điểm cách đều ba đỉnh và vận dụng vào bài toán thực tế.
minutes: 20
---

:::goals
- Nhắc lại tính chất của đường trung trực và nhận biết đường cao của tam giác.
- Giải thích vì sao ba đường trung trực của tam giác cắt nhau tại một điểm cách đều ba đỉnh.
- Nhận biết trực tâm và xác định vị trí của nó trong tam giác nhọn, tam giác vuông, tam giác tù.
- Vận dụng vào bài toán tam giác cân và bài toán thực tế về điểm cách đều ba vị trí.
:::

Giả sử ba làng $A$, $B$, $C$ không nằm trên một đường thẳng và muốn đào chung một giếng nước. Để công bằng, giếng phải cách đều cả ba làng. Liệu có điểm nào như vậy không, và nếu có thì tìm nó bằng cách nào?

Bài này trả lời câu hỏi đó. Nó cũng cho thấy một điều đẹp: khi vẽ ba đường đặc biệt trong tam giác, chúng không đi lung tung mà luôn gặp nhau ở đúng một điểm.

## Đường trung trực và điểm cách đều ba đỉnh

### Khám phá: điểm trên đường trung trực

Cho đoạn thẳng $AB=10$ cm, trung điểm $I$. Đường trung trực của $AB$ là đường thẳng đi qua $I$ và vuông góc với $AB$. Lấy điểm $M$ trên đường đó với $MI=h$.

| $h$ (cm) | $MA$ (cm) | $MB$ (cm) |
|---|---|---|
| $0$ | $5$ | $5$ |
| $12$ | $13$ | $13$ |

Với $h=12$, tam giác $MIA$ vuông tại $I$ có $MA=\sqrt{12^2+5^2}=13$, và tương tự $MB=13$. Với mọi vị trí của $M$, hai tam giác vuông $MIA$ và $MIB$ bằng nhau (cạnh góc vuông $MI$ chung, $IA=IB$), nên $MA=MB$.

:::theorem Tính chất của đường trung trực
- Mọi điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai mút của đoạn thẳng đó.
- Ngược lại, điểm cách đều hai mút của một đoạn thẳng thì nằm trên đường trung trực của đoạn thẳng đó.
:::

Bây giờ ta dùng tính chất này cho ba cạnh của tam giác.

:::theorem Sự đồng quy của ba đường trung trực
Ba đường trung trực của ba cạnh của một tam giác cùng đi qua một điểm. Điểm này cách đều ba đỉnh của tam giác.
:::

**Vì sao?** Cho tam giác $ABC$. Hai đường trung trực của $AB$ và $BC$ không song song (vì $AB$ và $BC$ không song song), nên chúng cắt nhau tại một điểm $O$.

Vì $O$ thuộc đường trung trực của $AB$ nên $OA=OB$. Vì $O$ thuộc đường trung trực của $BC$ nên $OB=OC$. Suy ra $OA=OC$, nên $O$ thuộc đường trung trực của $AC$.

Vậy ba đường trung trực cùng đi qua $O$ và $OA=OB=OC$.

:::diagram Ba đường trung trực cắt nhau tại $O$
alt: Tam giác ABC với ba đường trung trực của các cạnh cắt nhau tại O, đường tròn tâm O đi qua ba đỉnh A, B, C
point B 0,0 below-left
point C 6,0 below-right
point A 2,4 above
point O 3,1 below-right
point M 3,0 below ""
point N 1,2 left
point P 4,2 right
circle O 3.162
polygon A B C
segment M O
segment N O
segment P O
right C M O
mark B M 1
mark M C 1
:::

Điểm $O$ là tâm của đường tròn đi qua ba đỉnh $A$, $B$, $C$ (đường tròn ngoại tiếp tam giác $ABC$), vì thế ta gọi $O$ là tâm đường tròn ngoại tiếp tam giác.

**Hiểu sâu hơn.** Điều kiện "ba điểm không thẳng hàng" là cần thiết: nếu $A$, $B$, $C$ thẳng hàng thì ba đường trung trực song song với nhau và không có điểm nào cách đều cả ba. Đây cũng là lí do ba làng ở đầu bài không được nằm trên một đường thẳng.

## Đường cao và trực tâm

Đường cao của tam giác khác đường trung trực: nó đi qua một đỉnh và vuông góc với cạnh đối diện, chứ không nhất thiết đi qua trung điểm.

:::definition Đường cao của tam giác
Đoạn thẳng kẻ từ một đỉnh của tam giác vuông góc với đường thẳng chứa cạnh đối diện gọi là **đường cao** của tam giác. Chân đường cao là giao điểm của nó với đường thẳng chứa cạnh đối diện.
:::

Mỗi tam giác có ba đường cao. Điều thú vị là chúng cũng đồng quy.

:::theorem Sự đồng quy của ba đường cao
Ba đường cao của một tam giác cùng đi qua một điểm. Điểm đó gọi là **trực tâm** của tam giác.
:::

Ta thừa nhận định lí này. (Ý tưởng chứng minh: qua mỗi đỉnh kẻ đường thẳng song song với cạnh đối diện, ba đường thẳng này tạo thành một tam giác lớn hơn, và ba đường cao của tam giác ban đầu hoá ra là ba đường trung trực của tam giác lớn đó. Do đó chúng đồng quy theo định lí ở trên.)

:::diagram Ba đường cao $AD$, $BE$, $CF$ cắt nhau tại trực tâm $H$
alt: Tam giác nhọn ABC với ba đường cao AD, BE, CF cắt nhau tại điểm H nằm bên trong tam giác
point B 0,0 below-left
point C 6,0 below-right
point A 2,4 above
point D 2,0 below
point E 3,3 right
point F 1.2,2.4 left
point H 2,2 below-right
polygon A B C
segment A D
segment B E
segment C F
right A D C
:::

Vị trí của trực tâm phụ thuộc loại tam giác: trong tam giác nhọn, trực tâm nằm bên trong tam giác; trong tam giác tù, trực tâm nằm bên ngoài tam giác; trong tam giác vuông, trực tâm là đỉnh góc vuông.

## Ví dụ

Ta bắt đầu với một bài tính độ dài dùng tính chất cách đều.

:::example Điểm cách đều ba đỉnh
Cho tam giác $ABC$. Hai đường trung trực của $AB$ và $BC$ cắt nhau tại $O$. Biết $OA=5$ cm. Gọi $M$ là trung điểm của $AB$, biết $OM=3$ cm.

a) Tính $OB$ và $OC$.

b) Tính $AB$.

**Lời giải.** a) Vì $O$ là giao điểm của các đường trung trực nên $OA=OB=OC$. Vậy $OB=OC=5$ cm.

b) Vì $O$ thuộc đường trung trực của $AB$ nên $OM\perp AB$. Xét tam giác $OMA$ vuông tại $M$, theo định lí Pythagore, ta có
$$AM=\sqrt{OA^2-OM^2}=\sqrt{5^2-3^2}=\sqrt{16}=4\text{ (cm)}.$$
Vì $M$ là trung điểm của $AB$ nên $AB=2AM=8$ cm.

Vậy $OB=OC=5$ cm và $AB=8$ cm.
:::

Với tam giác cân, các đường đặc biệt trùng nhau.

:::example Tam giác cân
Cho tam giác $ABC$ cân tại $A$. Gọi $M$ là trung điểm của $BC$. Chứng minh rằng $AM$ là đường trung trực của $BC$ và là đường cao kẻ từ $A$. Từ đó suy ra tâm $O$ của đường tròn ngoại tiếp nằm trên $AM$.

**Lời giải.** Vì $AB=AC$ nên $A$ cách đều $B$ và $C$, do đó $A$ thuộc đường trung trực của $BC$. Điểm $M$ là trung điểm của $BC$ nên $M$ cũng thuộc đường trung trực của $BC$.

Hai điểm phân biệt $A$ và $M$ cùng thuộc đường trung trực của $BC$ nên đường thẳng $AM$ chính là đường trung trực của $BC$. Do đó $AM\perp BC$, tức $AM$ là đường cao kẻ từ $A$.

Điểm $O$ là giao của ba đường trung trực nên $O$ thuộc đường trung trực của $BC$, tức $O$ thuộc $AM$.

Vậy $AM$ vừa là đường trung trực, vừa là đường cao, và $O\in AM$.
:::

Tiếp theo là một trường hợp đặc biệt của trực tâm.

:::example Trực tâm của tam giác vuông
Cho tam giác $ABC$ vuông tại $A$. Tìm trực tâm của tam giác $ABC$.

**Lời giải.** Vì $AB\perp AC$ nên $AB$ là đường cao kẻ từ $B$ (đường thẳng $BA$ đi qua $B$ và vuông góc với $AC$). Tương tự $AC$ là đường cao kẻ từ $C$.

Hai đường cao $BA$ và $CA$ cắt nhau tại $A$. Đường cao thứ ba kẻ từ $A$ cũng đi qua $A$ vì nó xuất phát từ $A$, nên ba đường cao đồng quy tại $A$.

Vậy trực tâm của tam giác vuông $ABC$ là đỉnh $A$.
:::

Định lí đồng quy cho ta một cách lập luận gọn.

:::example Đường cao thứ ba
Tam giác $ABC$ có hai đường cao $BD$ và $CE$ cắt nhau tại $H$. Chứng minh rằng $AH\perp BC$.

**Lời giải.** $H$ là giao điểm của hai đường cao $BD$ và $CE$. Vì ba đường cao của tam giác đồng quy nên đường cao thứ ba kẻ từ $A$ cũng đi qua $H$.

Do đó đường thẳng $AH$ là đường cao kẻ từ $A$, suy ra $AH\perp BC$.

Vậy $AH\perp BC$.
:::

Ví dụ cuối là bài toán thực tế nhiều dữ kiện, ta đi đủ bốn bước.

:::example Chọn vị trí giếng nước (Vận dụng)
Giả sử ba làng $A$, $B$, $C$ tạo thành tam giác cân tại $A$ với $AB=AC=13$ km và $BC=10$ km. Người ta muốn đặt giếng tại điểm $O$ cách đều ba làng. Tính khoảng cách từ giếng đến mỗi làng (làm tròn đến hàng phần mười của ki-lô-mét).

**Lời giải.**

*Hiểu đề.* Cần tìm điểm $O$ với $OA=OB=OC$ và độ dài $R=OA$.

*Tìm cách giải.* $O$ là giao các đường trung trực, nên $O$ thuộc $AM$ (với $M$ là trung điểm $BC$, theo ví dụ trên). Ta dùng định lí Pythagore trong hai tam giác vuông.

*Giải.* Ta có $BM=5$ km, $AM\perp BC$ nên $AM=\sqrt{13^2-5^2}=12$ km. Đặt $OA=OB=R$, khi đó $OM=12-R$. Xét tam giác $OMB$ vuông tại $M$:
$$\begin{aligned} R^2&=(12-R)^2+5^2\\ R^2&=144-24R+R^2+25\\ 24R&=169\\ R&=\dfrac{169}{24}\approx 7{,}0. \end{aligned}$$
Vậy giếng cách mỗi làng khoảng $7{,}0$ km.

*Nhìn lại.* Kiểm tra: $OM=12-\dfrac{169}{24}=\dfrac{119}{24}>0$, và $OM^2+5^2=\dfrac{14161}{576}+\dfrac{14400}{576}=\dfrac{28561}{576}=\left(\dfrac{169}{24}\right)^2$, đúng. Vì $OM>0$ nên giếng nằm bên trong tam giác. Nếu thay đổi dữ kiện, chẳng hạn $BC$ rất dài so với $AM$, thì $12-R$ có thể âm, nghĩa là $O$ nằm ngoài tam giác (tam giác tù tại $A$).
:::

:::warning Những sai lầm thường gặp
- **Nhầm đường trung trực với đường cao.** Sai: "đường cao kẻ từ $A$ luôn đi qua trung điểm của $BC$". Lí do sai: đường cao chỉ cần vuông góc với $BC$, nó đi qua trung điểm của $BC$ khi tam giác cân tại $A$. Đúng: đường trung trực đi qua trung điểm và vuông góc, đường cao đi qua đỉnh và vuông góc.
- **Cho rằng trực tâm luôn nằm trong tam giác.** Sai: "trực tâm của mọi tam giác đều nằm bên trong". Lí do sai: trong tam giác vuông trực tâm là đỉnh góc vuông, trong tam giác tù trực tâm nằm bên ngoài. Đúng: chỉ tam giác nhọn mới có trực tâm nằm bên trong.
- **Nhầm trực tâm với tâm đường tròn ngoại tiếp.** Sai: "trực tâm $H$ cách đều ba đỉnh". Lí do sai: tính chất $OA=OB=OC$ thuộc về giao của ba đường trung trực, không phải ba đường cao. Đúng: hai điểm này chỉ trùng nhau trong tam giác đều.
:::

**Kết nối.** Bài này dùng đường trung trực, tam giác bằng nhau và định lí Pythagore, và nó chuẩn bị cho bài tiếp theo về sự đồng quy của ba đường trung tuyến và ba đường phân giác. Ba loại đường trong tam giác (trung trực, đường cao, trung tuyến) tạo ra bốn điểm đặc biệt, và tam giác cân là nơi chúng nằm trên cùng một đường thẳng.

## Thuật ngữ

:::terms
- đường trung trực | perpendicular bisector
- đường cao | altitude
- đồng quy | concurrent
- trực tâm | orthocentre
- tâm đường tròn ngoại tiếp | circumcentre
- cách đều | equidistant
- trung điểm | midpoint
- tam giác nhọn | acute triangle
- tam giác tù | obtuse triangle
- chân đường cao | foot of the altitude
:::

## Tóm tắt

- Điểm nằm trên đường trung trực của $AB$ thì cách đều $A$ và $B$, và ngược lại.
- Ba đường trung trực của tam giác đồng quy tại $O$ với $OA=OB=OC$; $O$ là tâm đường tròn ngoại tiếp.
- Ba đường cao của tam giác đồng quy tại trực tâm $H$.
- Tam giác nhọn: $H$ ở trong; tam giác vuông: $H$ là đỉnh góc vuông; tam giác tù: $H$ ở ngoài.
- Tam giác cân tại $A$: đường trung trực của $BC$ đi qua $A$ và là đường cao kẻ từ $A$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho đoạn thẳng $AB$.

a) Điểm $M$ thuộc đường trung trực của $AB$ và $MA=7$ cm. Tính $MB$.

b) Điểm $N$ có $NA=NB=9$ cm. Điểm $N$ nằm trên đường nào?

::hint
**Kiến thức:** điểm thuộc đường trung trực của đoạn thẳng thì cách đều hai mút, và ngược lại.

**Gợi ý các bước:**
1. a) Dùng tính chất thuận.
2. b) Dùng tính chất đảo.

::solution
a) Vì $M$ thuộc đường trung trực của $AB$ nên $MB=MA=7$ cm.

b) Vì $NA=NB$ nên $N$ thuộc đường trung trực của $AB$.

Vậy a) $MB=7$ cm; b) $N$ nằm trên đường trung trực của $AB$.

**Đáp số.** a) $7$ cm; b) đường trung trực của $AB$.
:::

:::exercise
Cho tam giác $ABC$. Hai đường trung trực của $AB$ và $AC$ cắt nhau tại $O$. Biết $OB=4$ cm. Tính $OA$, $OC$ và cho biết $O$ có thuộc đường trung trực của $BC$ không.

::hint
**Kiến thức:** ba đường trung trực của tam giác đồng quy tại điểm cách đều ba đỉnh.

**Gợi ý các bước:**
1. Dùng tính chất cách đều với từng đường trung trực.
2. So sánh $OB$ và $OC$.

::solution
Vì $O$ thuộc đường trung trực của $AB$ nên $OA=OB=4$ cm. Vì $O$ thuộc đường trung trực của $AC$ nên $OA=OC$, suy ra $OC=4$ cm.

Vì $OB=OC$ nên $O$ thuộc đường trung trực của $BC$.

Vậy $OA=OC=4$ cm và $O$ thuộc đường trung trực của $BC$.

**Đáp số.** $OA=OC=4$ cm; có.
:::

:::exercise
Tam giác $ABC$ vuông tại $C$. Trực tâm của tam giác $ABC$ là điểm nào? Giải thích.

::hint
**Kiến thức:** đường cao kẻ từ một đỉnh vuông góc với cạnh đối diện.

**Gợi ý các bước:**
1. Tìm đường cao kẻ từ $A$ và từ $B$.
2. Tìm giao điểm của chúng.

::solution
Vì $CA\perp CB$ nên $CA$ là đường cao kẻ từ $A$ (vuông góc với $BC$) và $CB$ là đường cao kẻ từ $B$ (vuông góc với $AC$). Hai đường này cắt nhau tại $C$.

Vậy trực tâm của tam giác là điểm $C$.

**Đáp số.** Điểm $C$.
:::

:::exercise
Cho tam giác $ABC$ cân tại $A$, $M$ là trung điểm của $BC$. Chứng minh rằng trực tâm $H$ của tam giác $ABC$ nằm trên đường thẳng $AM$.

::hint
**Kiến thức:** trong tam giác cân tại $A$, $AM$ là đường trung trực của $BC$ và là đường cao kẻ từ $A$.

**Gợi ý các bước:**
1. Chứng minh $AM$ là đường cao kẻ từ $A$.
2. Dùng việc ba đường cao đồng quy tại $H$.

::solution
Vì $AB=AC$ và $MB=MC$ nên $A$ và $M$ cùng thuộc đường trung trực của $BC$, do đó $AM\perp BC$. Vậy $AM$ là đường cao kẻ từ $A$.

Trực tâm $H$ là điểm chung của ba đường cao nên $H$ thuộc đường cao kẻ từ $A$, tức $H\in AM$.

Vậy trực tâm $H$ nằm trên $AM$.

**Đáp số.** $H\in AM$.
:::

:::exercise
Một công viên có dạng tam giác cân $ABC$ với $AB=AC=10$ m và $BC=12$ m. Người ta đặt một cột đèn tại điểm $O$ cách đều ba góc công viên và kéo dây điện từ $O$ đến mỗi góc. Tính độ dài mỗi sợi dây.

::hint
**Kiến thức:** $O$ nằm trên $AM$ ($M$ là trung điểm $BC$) và $OA=OB=OC$.

**Gợi ý các bước:**
1. Tính $AM$ bằng định lí Pythagore.
2. Đặt $OA=R$, viết phương trình với tam giác $OMB$.

::solution
Ta có $BM=6$ m và $AM=\sqrt{10^2-6^2}=8$ m. Đặt $OA=OB=R$, khi đó $OM=8-R$. Xét tam giác $OMB$ vuông tại $M$:
$$R^2=(8-R)^2+6^2\Rightarrow 16R=100\Rightarrow R=6{,}25.$$
Vậy mỗi sợi dây dài $6{,}25$ m.

**Đáp số.** $6{,}25$ m.
:::

:::exercise
Một mảnh đĩa gốm cổ bị vỡ, trên mép còn lại ba điểm $A$, $B$, $C$ nằm trên đường tròn của chiếc đĩa gốc. Nêu cách tìm tâm của chiếc đĩa và giải thích vì sao cách đó đúng.

::hint
**Kiến thức:** tâm đường tròn cách đều mọi điểm trên đường tròn; ba đường trung trực của tam giác $ABC$ đồng quy.

**Gợi ý các bước:**
1. Vẽ đường trung trực của $AB$ và của $BC$.
2. Giải thích vì sao giao điểm cách đều $A$, $B$, $C$.

::solution
Vẽ đường trung trực của $AB$ và đường trung trực của $BC$. Hai đường này cắt nhau tại $O$.

Vì $O$ thuộc đường trung trực của $AB$ nên $OA=OB$, và vì $O$ thuộc đường trung trực của $BC$ nên $OB=OC$. Do đó $OA=OB=OC$, nên $O$ là tâm của đường tròn đi qua $A$, $B$, $C$, tức là tâm chiếc đĩa.

Vậy tâm chiếc đĩa là giao điểm của hai đường trung trực của $AB$ và $BC$.

**Đáp số.** Giao điểm của hai đường trung trực.
:::

:::exercise
Nhớ lại bài trước về bất đẳng thức tam giác. Ba làng $A$, $B$, $C$ cùng cách giếng $O$ một khoảng $5$ km, và $O$ không nằm trên đường thẳng $AB$. Trong các số $8$; $10$; $11$ (km), số nào có thể là độ dài $AB$?

::hint
**Kiến thức:** trong tam giác $OAB$, $AB<OA+OB$.

**Gợi ý các bước:**
1. Viết bất đẳng thức tam giác cho $O$, $A$, $B$.
2. Thử từng giá trị.

::solution
Vì $O$ không nằm trên $AB$ nên $O$, $A$, $B$ tạo thành tam giác. Theo bất đẳng thức tam giác, ta có $AB<OA+OB=10$ km.

Trong ba số đã cho, chỉ có $8$ nhỏ hơn $10$. Số $10$ làm $O$ nằm trên $AB$, số $11$ lớn hơn $10$.

Vậy $AB$ có thể bằng $8$ km.

**Đáp số.** $8$ km.
:::

:::exercise Thử thách
Cho tam giác $ABC$ nhọn, hai đường cao $BD$ và $CE$ cắt nhau tại $H$. Chứng minh rằng $\widehat{BHC}=180^\circ-\widehat{A}$.

::hint
**Kiến thức:** tổng ba góc của tam giác bằng $180^\circ$; hai góc kề bù có tổng bằng $180^\circ$.

**Gợi ý các bước:**
1. Tính $\widehat{ABD}$ trong tam giác $ABD$ vuông tại $D$.
2. Tính $\widehat{BHE}$ trong tam giác $BEH$ vuông tại $E$, rồi dùng hai góc kề bù.

::solution
Xét tam giác $ABD$ vuông tại $D$, ta có $\widehat{ABD}=90^\circ-\widehat{A}$.

Xét tam giác $BEH$ vuông tại $E$, trong đó $\widehat{EBH}=\widehat{ABD}$ (vì $E$ thuộc $AB$ và $H$ thuộc $BD$). Do đó $\widehat{BHE}=90^\circ-\widehat{EBH}=\widehat{A}$.

Vì $H$ nằm giữa $E$ và $C$ nên $\widehat{BHE}$ và $\widehat{BHC}$ là hai góc kề bù. Suy ra $\widehat{BHC}=180^\circ-\widehat{BHE}=180^\circ-\widehat{A}$.

Vậy $\widehat{BHC}=180^\circ-\widehat{A}$.

**Đáp số.** Đã chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Cho tam giác $ABC$. Hai đường trung trực của $AB$ và $AC$ cắt nhau tại $O$ và $OA=5$ cm. Khoảng cách $OB$ bằng
A. $5$ cm.
B. $2{,}5$ cm.
C. $3$ cm.
D. $10$ cm.
::key A
$O$ cách đều ba đỉnh nên $OB=OA=5$ cm. A nhân đôi và B chia đôi $OA$ một cách vô căn cứ.

::mc
Trực tâm của tam giác $ABC$ vuông tại $A$ là
A. trung điểm của $BC$.
B. điểm $A$.
C. điểm $B$.
D. điểm cách đều $B$ và $C$ trên $AB$.
::key B
Hai đường cao kẻ từ $B$ và $C$ là $BA$ và $CA$, cắt nhau tại $A$. B nhầm với tâm đường tròn ngoại tiếp tam giác vuông.

::mc
Điểm cách đều ba đỉnh của một tam giác là giao điểm của
A. ba đường cao.
B. ba đường trung tuyến.
C. ba đường trung trực.
D. hai đường cao và một đường trung trực.
::key C
Giao của ba đường trung trực là điểm cách đều ba đỉnh. Giao của ba đường cao là trực tâm, không có tính chất này.

::mc
Tam giác $ABC$ cân tại $A$, $M$ là trung điểm của $BC$. Đường thẳng nào sau đây là đường trung trực của $BC$?
A. Đường thẳng $BC$.
B. Đường thẳng qua $A$ song song với $BC$.
C. Đường thẳng $AB$.
D. Đường thẳng $AM$.
::key D
$A$ và $M$ đều cách đều $B$, $C$ nên $AM$ là đường trung trực của $BC$. D vuông góc với $AM$, không với $BC$.

::tf
Cho tam giác $ABC$ nhọn, các đường cao $BD$ và $CE$ cắt nhau tại $H$.
a) Điểm $H$ cách đều ba đỉnh $A$, $B$, $C$.
b) $AH\perp BC$.
c) $\widehat{BHC}=180^\circ-\widehat{A}$.
d) Nếu $\widehat{A}=50^\circ$ thì $\widehat{BHC}=40^\circ$.
::key S Đ Đ S
a) Sai: $H$ là trực tâm, không phải tâm đường tròn ngoại tiếp. b) Đúng: $AH$ là đường cao thứ ba. c) Đúng: theo chứng minh ở bài tập thử thách. d) Sai: $180^\circ-50^\circ=130^\circ$.

::sa
Tam giác $ABC$ nhọn có $\widehat{A}=64^\circ$. Hai đường cao $BD$ và $CE$ cắt nhau tại $H$. Tính số đo $\widehat{BHC}$ (đơn vị: độ).
::key 116
$\widehat{BHC}=180^\circ-\widehat{A}=180^\circ-64^\circ=116^\circ$.

::sa
Tam giác $ABC$ cân tại $A$ có $AB=AC=5$ cm và $BC=6$ cm. Tâm $O$ của đường tròn ngoại tiếp cách mỗi đỉnh bao nhiêu xăng-ti-mét (làm tròn đến hàng phần mười)?
::key 3,1
$AM=\sqrt{25-9}=4$. Đặt $OA=R$, $OM=4-R$, $R^2=(4-R)^2+9$ nên $8R=25$ và $R=3{,}125\approx3{,}1$ (cm).
:::
