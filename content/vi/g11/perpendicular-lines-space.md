---
title: Hai đường thẳng vuông góc
description: Hiểu góc giữa hai đường thẳng trong không gian, hai đường thẳng vuông góc, cách dời đường thẳng về một điểm để tính góc và chứng minh vuông góc.
minutes: 25
---

:::goals
- Hiểu định nghĩa góc giữa hai đường thẳng trong không gian, kể cả hai đường thẳng chéo nhau.
- Nhận biết hai đường thẳng vuông góc và dùng tính chất song song để chứng minh vuông góc.
- Tính được góc giữa hai đường thẳng bằng cách đưa về một góc của tam giác (định lí côsin, tam giác vuông).
- Vận dụng vào các hình lập phương, hình hộp chữ nhật, hình chóp, tứ diện và các bài toán thực tế.
:::

Giả sử một giá đỡ bằng thép là khung của hình lập phương $ABCD.A'B'C'D'$ cạnh $60$ cm (số liệu giả định). Người thợ hàn thêm hai thanh chéo: thanh $AB'$ ở mặt trước và thanh $BC'$ ở mặt bên phải. Hai thanh này không cắt nhau và cũng không song song. Cần biết chúng hợp với nhau một góc bao nhiêu để cắt đúng mối hàn. Góc giữa hai thanh chéo nhau là gì, và đo nó bằng cách nào?

## Khám phá: dời đường thẳng về một điểm

Hai đường thẳng chéo nhau không có điểm chung nên ta chưa thể nói "góc tạo bởi" chúng. Ý tưởng là dời một đường thẳng, giữ nguyên phương, cho đến khi cắt đường thẳng kia. Trong hình lập phương ta thử ba cặp:

| Cặp đường thẳng | Đường song song dời tới | Góc tạo thành |
|---|---|---|
| $AB$ và $B'C'$ | $B'C'\parallel BC$, cắt $AB$ tại $B$ | $\widehat{ABC}=90^\circ$ |
| $AC$ và $A'C'$ | $A'C'\parallel AC$ | $0^\circ$ (song song) |
| $AC$ và $A'B$ | $A'B\parallel D'C$, cắt $AC$ tại $C$ | $\widehat{ACD'}=60^\circ$ |

Dòng cuối: tam giác $ACD'$ có ba cạnh đều là đường chéo của các mặt hình vuông, nên là tam giác đều. Dù dời đường nào, ta luôn nhận được cùng một số đo. Đó là cơ sở của định nghĩa dưới đây.

## Góc giữa hai đường thẳng

:::definition Góc giữa hai đường thẳng trong không gian
Cho hai đường thẳng $a$, $b$ trong không gian. Lấy một điểm $O$ bất kì, qua $O$ kẻ $a'\parallel a$ và $b'\parallel b$. **Góc giữa** $a$ và $b$, kí hiệu $\widehat{(a, b)}$, là góc giữa $a'$ và $b'$ (số đo từ $0^\circ$ đến $90^\circ$). Nếu $a\parallel b$ hoặc $a\equiv b$ thì $\widehat{(a, b)}=0^\circ$.

Hai đường thẳng $a$, $b$ gọi là **vuông góc** nếu $\widehat{(a, b)}=90^\circ$; ta viết $a\perp b$.
:::

**Vì sao số đo không phụ thuộc vào điểm $O$?** Nếu chọn điểm $O_1$ khác thì các đường qua $O_1$ song song với $a$, $b$ cũng song song với $a'$, $b'$. Hai góc có các cạnh đôi một song song thì bằng nhau hoặc bù nhau, mà ta chỉ lấy góc không vượt quá $90^\circ$, nên số đo không đổi.

Hai đường thẳng vuông góc **không nhất thiết cắt nhau**. Chẳng hạn trong hình lập phương, $AB\perp B'C'$ nhưng hai đường này chéo nhau. Từ định nghĩa ta suy ra tính chất sau:

:::theorem Vuông góc và song song
Nếu $a\parallel b$ và $c\perp a$ thì $c\perp b$.
:::

Thật vậy, $\widehat{(c, b)}=\widehat{(c, a)}=90^\circ$ vì $b$ và $a$ có cùng phương. Từ đó, để tính góc giữa hai đường thẳng chéo nhau, ta làm theo ba bước: dời một đường (hoặc cả hai) về cắt nhau, xác định góc tạo thành trong một tam giác, rồi tính bằng tam giác vuông hoặc định lí côsin. Nếu số đo tìm được lớn hơn $90^\circ$ thì ta lấy góc bù.

:::diagram Hình lập phương $ABCD.A'B'C'D'$ và tam giác đều $BDC'$
alt: Hình lập phương vẽ theo phép chiếu xiên, các cạnh khuất nét đứt, có thêm thanh AB', BC' và tam giác BDC' với góc 60 độ tại C'
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,3 left
point B' 3,3 above
point C' 4.2,4.4 above-right
point D' 1.2,4.4 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
segment A B'
segment B C'
segment D C' dashed
segment B D dashed
angle D C' B "60°"
:::

## Ví dụ

Ta bắt đầu với bài toán ở đầu bài, đi đủ bốn bước.

:::example Vận dụng: góc giữa hai thanh chéo của giá đỡ
Giả sử khung thép có dạng hình lập phương $ABCD.A'B'C'D'$ cạnh $60$ cm (số liệu giả định). Tính góc giữa hai thanh $AB'$ và $BC'$.

**Lời giải.**

*Hiểu đề.* Hai thanh $AB'$ và $BC'$ chéo nhau. Cần tìm $\widehat{(AB', BC')}$.

*Tìm cách giải.* Dời $AB'$ về cắt $BC'$. Vì $AD\parallel B'C'$ và $AD=B'C'$ nên $AB'C'D$ là hình bình hành, suy ra $AB'\parallel DC'$. Đường $DC'$ cắt $BC'$ tại $C'$.

*Giải.* Ta có $AB'\parallel DC'$ nên $\widehat{(AB', BC')}=\widehat{(DC', BC')}=\widehat{DC'B}$. Trong tam giác $BDC'$, các cạnh $BD$, $BC'$, $DC'$ đều là đường chéo của một mặt hình vuông cạnh $60$ cm nên cùng bằng $60\sqrt2$ cm. Tam giác $BDC'$ đều, do đó $\widehat{DC'B}=60^\circ$.

Vậy góc giữa hai thanh bằng $60^\circ$.

*Nhìn lại.* Có cách khác không? Ta dời $BC'$ về $AD'$ (vì $BC'\parallel AD'$) rồi xét tam giác $AB'D'$, cũng là tam giác đều, và được cùng kết quả $60^\circ$. Kết quả có hợp lí không? Góc giữa hai đường thẳng không vượt quá $90^\circ$, và hai thanh nằm trên hai mặt vuông góc nên nghiêng khoảng như vậy. Nếu cạnh khung là $80$ cm thì sao? Ba cạnh của tam giác vẫn bằng nhau nên góc vẫn là $60^\circ$: góc không phụ thuộc vào kích thước.
:::

Tiếp theo ta chứng minh vuông góc bằng quan hệ song song.

:::example Chứng minh vuông góc từ song song
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $2$, $SA\perp AB$, $SA\perp AD$ và $SA=2\sqrt3$. Chứng minh $SA\perp BC$ và $SA\perp CD$, rồi tính góc giữa $SB$ và $CD$.

**Lời giải.** Ta dùng $BC\parallel AD$ và $CD\parallel AB$ để chuyển hai quan hệ vuông góc đã cho.

Vì $BC\parallel AD$ và $SA\perp AD$ nên $SA\perp BC$.

Vì $CD\parallel AB$ và $SA\perp AB$ nên $SA\perp CD$.

Vì $CD\parallel AB$ nên $\widehat{(SB, CD)}=\widehat{(SB, AB)}=\widehat{SBA}$. Trong tam giác $SAB$ vuông tại $A$ (do $SA\perp AB$), ta có
$$\tan\widehat{SBA}=\frac{SA}{AB}=\frac{2\sqrt3}{2}=\sqrt3\Rightarrow\widehat{SBA}=60^\circ.$$

Vậy $SA\perp BC$, $SA\perp CD$ và góc giữa $SB$ và $CD$ bằng $60^\circ$.
:::

Khi hai đường chéo nhau nằm trên các cạnh của hình hộp, ta cần định lí côsin.

:::example Góc giữa hai đường chéo của hình hộp chữ nhật
Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=2$, $AD=3$, $AA'=4$. Tính góc giữa $AC$ và $B'D'$ (làm tròn đến hàng phần mười của độ).

**Lời giải.** Hai đường thẳng $AC$ và $B'D'$ chéo nhau. Ta dời $B'D'$ về mặt đáy.

Vì $B'D'\parallel BD$ nên $\widehat{(AC, B'D')}=\widehat{(AC, BD)}$. Gọi $O$ là giao điểm của $AC$ và $BD$. Hình chữ nhật $ABCD$ có $AC=BD=\sqrt{2^2+3^2}=\sqrt{13}$ nên $OA=OB=\dfrac{\sqrt{13}}2$.

Áp dụng định lí côsin cho tam giác $OAB$, ta được
$$\cos\widehat{AOB}=\frac{OA^2+OB^2-AB^2}{2\cdot OA\cdot OB}=\frac{\frac{13}{4}+\frac{13}{4}-4}{2\cdot\frac{13}{4}}=\frac{5}{13}.$$

Vì $\cos\widehat{AOB}>0$ nên $\widehat{AOB}$ là góc nhọn, và $\widehat{AOB}\approx67{,}4^\circ$.

Vậy góc giữa $AC$ và $B'D'$ xấp xỉ $67{,}4^\circ$.
:::

Cuối cùng là một bài chứng minh cần dựng thêm điểm phụ.

:::example Chứng minh các cạnh đối của tứ diện đều vuông góc
Cho tứ diện đều $ABCD$ có cạnh $a$. Chứng minh $AD\perp BC$.

**Lời giải.** Ta tìm hai đường thẳng cắt nhau, lần lượt song song với $AD$ và $BC$, bằng cách lấy trung điểm các cạnh.

Gọi $N$, $K$, $L$ lần lượt là trung điểm của $AB$, $BD$, $CD$. Trong tam giác $ABD$, $NK$ là đường trung bình nên $NK\parallel AD$ và $NK=\dfrac a2$. Trong tam giác $BCD$, $KL$ là đường trung bình nên $KL\parallel BC$ và $KL=\dfrac a2$. Do đó $\widehat{(AD, BC)}=\widehat{NKL}$.

Các tam giác $ABC$ và $ABD$ đều nên $CN=DN=\dfrac{a\sqrt3}2$. Tam giác $CND$ cân tại $N$ và $L$ là trung điểm $CD$, nên $NL\perp CD$. Áp dụng định lí Pythagore cho tam giác $NLC$ vuông tại $L$:
$$NL^2=NC^2-CL^2=\frac{3a^2}{4}-\frac{a^2}{4}=\frac{a^2}{2}.$$

Ta có $NK^2+KL^2=\dfrac{a^2}{4}+\dfrac{a^2}{4}=\dfrac{a^2}{2}=NL^2$. Theo định lí Pythagore đảo, tam giác $NKL$ vuông tại $K$, tức $\widehat{NKL}=90^\circ$.

Vậy $AD\perp BC$.
:::

:::warning Những sai lầm thường gặp
- **Hai đường thẳng cùng vuông góc với đường thứ ba thì song song.** Sai: $AB\perp AA'$ và $AD\perp AA'$ nên $AB\parallel AD$. Lí do sai: điều này chỉ đúng trong một mặt phẳng; trong không gian hai đường đó có thể cắt nhau hoặc chéo nhau. Đúng: $AB$ và $AD$ cắt nhau và vuông góc với nhau.
- **Hai đường thẳng vuông góc thì phải cắt nhau.** Sai: $AB$ và $B'C'$ vuông góc nên chúng cắt nhau. Lí do sai: vuông góc chỉ nói về góc giữa hai phương; hai đường vẫn có thể chéo nhau. Đúng: $AB\perp B'C'$ và hai đường này chéo nhau.
- **Lấy góc tù làm góc giữa hai đường thẳng.** Sai: tam giác cho $\widehat{O}=120^\circ$ nên góc giữa hai đường thẳng là $120^\circ$. Lí do sai: góc giữa hai đường thẳng luôn từ $0^\circ$ đến $90^\circ$. Đúng: lấy góc bù, $180^\circ-120^\circ=60^\circ$.
- **Cho rằng hai đường chéo nhau không có góc.** Sai: $AB'$ và $BC'$ chéo nhau nên không có góc giữa. Lí do sai: góc giữa được định nghĩa qua đường song song nên đường chéo nhau vẫn có góc. Đúng: $\widehat{(AB', BC')}=60^\circ$.
:::

**Kết nối.** Bài này dùng quan hệ song song trong không gian và định lí côsin ở lớp trước để biến một bài toán không gian thành bài toán trong một tam giác. Bài [đường thẳng vuông góc với mặt phẳng](lesson:line-perpendicular-plane) sẽ cho cách chứng minh vuông góc nhanh hơn, và bài [phép chiếu vuông góc, góc giữa đường thẳng và mặt phẳng](lesson:orthogonal-projection-angle) mở rộng ý tưởng đo góc. Trong thực tế, kĩ sư dùng góc giữa các thanh chéo để cắt và hàn khung, giàn giáo.

## Thuật ngữ

:::terms
- góc giữa hai đường thẳng | angle between two lines
- hai đường thẳng vuông góc | perpendicular lines
- hai đường thẳng chéo nhau | skew lines
- hai đường thẳng song song | parallel lines
- hình lập phương | cube
- hình hộp chữ nhật | cuboid
- tứ diện đều | regular tetrahedron
- hình chóp | pyramid
- đường trung bình | midsegment
- định lí côsin | the cosine rule
:::

## Tóm tắt

- Góc giữa $a$ và $b$: qua một điểm kẻ $a'\parallel a$, $b'\parallel b$; góc giữa $a'$ và $b'$, từ $0^\circ$ đến $90^\circ$.
- $a\perp b$ khi góc giữa chúng bằng $90^\circ$; hai đường vuông góc có thể chéo nhau.
- Nếu $a\parallel b$ và $c\perp a$ thì $c\perp b$.
- Tính góc: dời đường thẳng về cắt nhau, xét tam giác, dùng tam giác vuông hoặc định lí côsin; nếu góc tù thì lấy góc bù.
- Trong hình lập phương, ba đường chéo của ba mặt chung một đỉnh tạo thành tam giác đều, nên nhiều góc giữa hai đường thẳng bằng $60^\circ$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa:

a) $AB$ và $A'D'$.

b) $AC$ và $B'D'$.

c) $AB'$ và $A'D$.

::hint
**Kiến thức:** dời một đường thẳng về cắt đường kia; các đường chéo của mặt hình vuông bằng nhau.

**Gợi ý các bước:**
1. Tìm đường thẳng song song với đường đã cho, đi qua một điểm của đường còn lại.
2. Xét tam giác tạo thành.

::solution
a) $A'D'\parallel AD$ nên $\widehat{(AB, A'D')}=\widehat{(AB, AD)}=\widehat{BAD}=90^\circ$.

b) $B'D'\parallel BD$ và $AC\perp BD$ (hai đường chéo hình vuông) nên $AC\perp B'D'$, tức góc bằng $90^\circ$.

c) $A'D\parallel B'C$ nên $\widehat{(AB', A'D)}=\widehat{(AB', B'C)}=\widehat{AB'C}$. Tam giác $AB'C$ có ba cạnh là đường chéo các mặt nên là tam giác đều, do đó $\widehat{AB'C}=60^\circ$.

**Đáp số.** a) $90^\circ$; b) $90^\circ$; c) $60^\circ$.
:::

:::exercise
Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Chứng minh $AA'\perp B'C'$ và $BB'\perp CD$.

::hint
**Kiến thức:** nếu $a\parallel b$ và $c\perp a$ thì $c\perp b$; các mặt bên của hình hộp chữ nhật là hình chữ nhật.

**Gợi ý các bước:**
1. Tìm một đường song song với đường đã cho nằm trong cùng một mặt với đường kia.
2. Dùng góc vuông của hình chữ nhật.

::solution
Vì $B'C'\parallel A'D'$ và $AA'\perp A'D'$ (mặt $ADD'A'$ là hình chữ nhật) nên $AA'\perp B'C'$.

Vì $CD\parallel AB$ và $BB'\perp AB$ (mặt $ABB'A'$ là hình chữ nhật) nên $BB'\perp CD$.

**Đáp số.** Cả hai đều vuông góc.
:::

:::exercise
Giả sử một căn phòng hình hộp chữ nhật có sàn là hình chữ nhật $ABCD$ với $AB=6$ m, $BC=4$ m và cao $3$ m (số liệu giả định). Một ống nước chạy dọc theo cạnh sàn $AB$, một ống khác chạy chéo trên trần theo đường $A'C'$. Tính góc giữa hai ống (làm tròn đến hàng phần mười của độ).

::hint
**Kiến thức:** $A'C'\parallel AC$; góc giữa hai đường thẳng chéo nhau bằng góc giữa hai đường cắt nhau song song với chúng.

**Gợi ý các bước:**
1. Dời $A'C'$ về $AC$.
2. Tính góc $\widehat{BAC}$ trong tam giác vuông $ABC$.

::solution
$A'C'\parallel AC$ nên $\widehat{(AB, A'C')}=\widehat{(AB, AC)}=\widehat{BAC}$. Trong tam giác $ABC$ vuông tại $B$, ta có $\tan\widehat{BAC}=\dfrac{BC}{AB}=\dfrac46=\dfrac23$, suy ra $\widehat{BAC}\approx33{,}7^\circ$.

**Đáp số.** Khoảng $33{,}7^\circ$.
:::

:::exercise
Giả sử khung một giá sách có dạng hình hộp chữ nhật $ABCD.A'B'C'D'$ với $AB=40$ cm, $AD=90$ cm, $AA'=30$ cm (số liệu giả định). Hai thanh chéo $AC$ (ở đáy) và $B'D'$ (ở mặt trên) hợp với nhau góc bao nhiêu (làm tròn đến hàng phần mười của độ)?

::hint
**Kiến thức:** $B'D'\parallel BD$; định lí côsin cho tam giác $OAB$ với $O$ là tâm hình chữ nhật.

**Gợi ý các bước:**
1. Tính $AC$ và $OA$, $OB$.
2. Tính $\cos\widehat{AOB}$ rồi lấy góc nhọn.

::solution
$B'D'\parallel BD$ nên $\widehat{(AC, B'D')}=\widehat{(AC, BD)}$. Ta có $AC=BD=\sqrt{40^2+90^2}=\sqrt{9700}$ nên $OA=OB=\dfrac{\sqrt{9700}}{2}$ và $OA^2=2425$. Do đó
$$\cos\widehat{AOB}=\frac{2\cdot2425-40^2}{2\cdot2425}=\frac{3250}{4850}\approx0{,}6701,$$
suy ra $\widehat{AOB}\approx47{,}9^\circ$ (góc nhọn).

**Đáp số.** Khoảng $47{,}9^\circ$.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau:

a) Hai đường thẳng chéo nhau thì không có góc giữa chúng.

b) Nếu $a\parallel b$ và $a\perp c$ thì $b\perp c$.

c) Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì song song với nhau.

d) Góc giữa hai đường thẳng luôn có số đo từ $0^\circ$ đến $90^\circ$.

::hint
**Kiến thức:** định nghĩa góc giữa hai đường thẳng; tính chất vuông góc và song song.

**Gợi ý các bước:**
1. Nhớ góc giữa được định nghĩa qua đường song song cắt nhau.
2. Tìm phản ví dụ trong hình lập phương nếu cần.

::solution
a) **Sai**: góc giữa hai đường thẳng chéo nhau được xác định qua đường song song.

b) **Đúng**: tính chất đã học.

c) **Sai**: trong hình lập phương, $AB$ và $AD$ cùng vuông góc với $AA'$ nhưng không song song.

d) **Đúng**: theo định nghĩa.

**Đáp số.** a) Sai; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Ôn lại định lí côsin. Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=1$, $AD=2$, $AA'=2$. Tính góc giữa $AC$ và $A'D$ (làm tròn đến hàng phần mười của độ).

::hint
**Kiến thức:** $A'D\parallel B'C$; định lí côsin $\cos C=\dfrac{a^2+b^2-c^2}{2ab}$.

**Gợi ý các bước:**
1. Dời $A'D$ về $B'C$ và xét tam giác $ACB'$.
2. Tính ba cạnh rồi dùng định lí côsin.

::solution
$A'D\parallel B'C$ nên $\widehat{(AC, A'D)}=\widehat{ACB'}$. Ta có $AC=\sqrt{1+4}=\sqrt5$, $AB'=\sqrt{1+4}=\sqrt5$ và $B'C=\sqrt{4+4}=2\sqrt2$. Do đó
$$\cos\widehat{ACB'}=\frac{AC^2+B'C^2-AB'^2}{2\cdot AC\cdot B'C}=\frac{5+8-5}{2\sqrt5\cdot2\sqrt2}=\frac{2}{\sqrt{10}}\approx0{,}6325,$$
suy ra $\widehat{ACB'}\approx50{,}8^\circ$.

**Đáp số.** $50{,}8^\circ$.
:::

:::exercise
Giả sử một khung mái hình lăng trụ tam giác đều $ABC.A'B'C'$ có tất cả các cạnh bằng $3$ m (số liệu giả định). Tính góc giữa thanh $AB'$ và thanh $A'C'$ (làm tròn đến hàng phần mười của độ).

::hint
**Kiến thức:** $A'C'\parallel AC$; các mặt bên là hình vuông, nên $AB'=B'C=3\sqrt2$.

**Gợi ý các bước:**
1. Dời $A'C'$ về $AC$ và xét tam giác $AB'C$.
2. Dùng định lí côsin.

::solution
$A'C'\parallel AC$ nên $\widehat{(AB', A'C')}=\widehat{B'AC}$. Mặt $ABB'A'$ là hình vuông cạnh $3$ nên $AB'=3\sqrt2$; mặt $BCC'B'$ là hình vuông nên $B'C=3\sqrt2$; $AC=3$. Do đó
$$\cos\widehat{B'AC}=\frac{AB'^2+AC^2-B'C^2}{2\cdot AB'\cdot AC}=\frac{18+9-18}{2\cdot3\sqrt2\cdot3}=\frac{\sqrt2}{4}\approx0{,}3536,$$
suy ra $\widehat{B'AC}\approx69{,}3^\circ$.

**Đáp số.** $69{,}3^\circ$.
:::

:::exercise Thử thách
Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=a$, $AD=b$, $AA'=c$. Gọi $\varphi$ là góc giữa $AC$ và $B'D'$. Chứng minh $\cos\varphi=\dfrac{|b^2-a^2|}{a^2+b^2}$, không phụ thuộc vào $c$.

::hint
**Kiến thức:** $B'D'\parallel BD$; định lí côsin cho tam giác $OAB$ với $O$ là tâm hình chữ nhật $ABCD$.

**Gợi ý các bước:**
1. Đặt $d=AC$ và tính $OA=OB=\dfrac d2$.
2. Tính $\cos\widehat{AOB}$ rồi xét hai trường hợp góc nhọn và góc tù.

::solution
$B'D'\parallel BD$ nên $\varphi$ là góc nhọn giữa $AC$ và $BD$. Với $d^2=a^2+b^2$ và $OA=OB=\dfrac d2$:
$$\cos\widehat{AOB}=\frac{\frac{d^2}{4}+\frac{d^2}{4}-a^2}{2\cdot\frac{d^2}{4}}=\frac{d^2-2a^2}{d^2}=\frac{b^2-a^2}{a^2+b^2}.$$
Nếu $b\ge a$ thì $\widehat{AOB}$ nhọn và $\cos\varphi=\dfrac{b^2-a^2}{a^2+b^2}$. Nếu $b<a$ thì $\widehat{AOB}$ tù, góc giữa là góc bù và $\cos\varphi=-\cos\widehat{AOB}=\dfrac{a^2-b^2}{a^2+b^2}$. Cả hai trường hợp cho $\cos\varphi=\dfrac{|b^2-a^2|}{a^2+b^2}$, không chứa $c$.

**Đáp số.** $\cos\varphi=\dfrac{|b^2-a^2|}{a^2+b^2}$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AC$ và $A'D'$ bằng
A. $90^\circ$.
B. $45^\circ$.
C. $60^\circ$.
D. $30^\circ$.
::key B
$A'D'\parallel AD$ nên góc cần tìm là $\widehat{CAD}=45^\circ$ (đường chéo hình vuông). Phương án A lấy góc giữa $AB$ và $AD$, C nhầm với tam giác đều.

::mc
Mệnh đề nào sau đây đúng?
A. Hai đường thẳng vuông góc thì phải cắt nhau.
B. Hai đường thẳng cùng vuông góc với đường thẳng thứ ba thì song song.
C. Nếu $a\parallel b$ và $c\perp a$ thì $c\perp b$.
D. Góc giữa hai đường thẳng có thể bằng $120^\circ$.
::key C
Đây là tính chất vuông góc và song song. B và A sai trong không gian (ví dụ $AB$, $AD$ và $AB$, $B'C'$); D sai vì góc giữa hai đường thẳng không vượt quá $90^\circ$.

::mc
Cho tứ diện đều $ABCD$ cạnh $a$. Góc giữa hai đường thẳng $AB$ và $CD$ bằng
A. $30^\circ$.
B. $45^\circ$.
C. $60^\circ$.
D. $90^\circ$.
::key D
Hai cạnh đối của tứ diện đều vuông góc với nhau (như ví dụ trên). Phương án C nhầm với góc của tam giác đều.

::mc
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA\perp AB$, $SA\perp AD$ và $SA=a$. Góc giữa $SB$ và $CD$ bằng
A. $45^\circ$.
B. $60^\circ$.
C. $90^\circ$.
D. $30^\circ$.
::key A
$CD\parallel AB$ nên góc cần tìm là $\widehat{SBA}$ với $\tan\widehat{SBA}=\dfrac{SA}{AB}=1$, suy ra $45^\circ$. Phương án C là góc giữa $SA$ và $CD$.

::tf
Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=3$, $AD=4$, $AA'=5$. Xét tính đúng sai của các mệnh đề sau:
a) Góc giữa $AB$ và $A'D'$ bằng $0^\circ$.
b) $AA'\perp BC$.
c) $AC\perp B'D'$.
d) Góc giữa $AC$ và $A'C'$ bằng $90^\circ$.
::key S Đ S S
a) Sai: $A'D'\parallel AD$ nên góc giữa $AB$ và $A'D'$ là $90^\circ$. b) Đúng: $BC\parallel AD$ và $AA'\perp AD$. c) Sai: $\cos\widehat{(AC, BD)}=\dfrac{7}{25}$ nên hai đường không vuông góc (hình chữ nhật không phải hình vuông). d) Sai: $A'C'\parallel AC$ nên góc bằng $0^\circ$.

::sa
Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB=3$, $AD=4$, $AA'=5$. Tính góc giữa $AC$ và $B'D'$ (đơn vị độ, làm tròn đến hàng phần mười).
::key 73,7
$B'D'\parallel BD$ và $OA=OB=2{,}5$ nên $\cos\widehat{AOB}=\dfrac{2\cdot6{,}25-9}{2\cdot6{,}25}=0{,}28$, suy ra $\widehat{AOB}\approx73{,}7^\circ$ (góc nhọn).

::sa
Cho tứ diện đều $ABCD$ cạnh $a$, $M$ là trung điểm $BC$. Tính côsin của góc giữa $AB$ và $DM$ (làm tròn kết quả đến hàng phần trăm).
::key 0,29
Gọi $N$ là trung điểm $AC$ thì $MN\parallel AB$ và $MN=\dfrac a2$, còn $DM=DN=\dfrac{a\sqrt3}{2}$. Trong tam giác $DMN$ cân tại $D$: $\cos\widehat{DMN}=\dfrac{MN}{2DM}=\dfrac{\sqrt3}{6}\approx0{,}29$.
:::
