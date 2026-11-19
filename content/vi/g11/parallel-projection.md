---
title: Phép chiếu song song
description: Hiểu phép chiếu song song, các tính chất bảo toàn tính song song và tỉ số, hình biểu diễn của hình không gian, và vận dụng vào bóng nắng, đo chiều cao.
minutes: 25
---

:::goals
- Nêu định nghĩa phép chiếu song song và xác định hình chiếu của một điểm, một đoạn thẳng.
- Phát biểu và vận dụng các tính chất của phép chiếu song song: bảo toàn tính thẳng hàng, tính song song và tỉ số.
- Hiểu hình biểu diễn của một hình không gian trên mặt phẳng và các quy tắc vẽ.
- Dùng phép chiếu song song để tính chiều cao từ bóng nắng và giải thích các hình vẽ trong hình học không gian.
:::

Vào một buổi chiều, các tia nắng chiếu xuống gần như song song với nhau. Cột cờ cắm thẳng đứng trên sân bằng phẳng có bóng dài $8$ m. Cùng lúc, một cọc tre cao $1{,}5$ m cắm thẳng đứng gần đó có bóng dài $1{,}2$ m.

Cột cờ cao bao nhiêu mét? Ta không thể leo lên đo, nhưng bóng nắng cho ta cách tính. Bài này giải thích vì sao tỉ số giữa chiều cao và bóng không đổi, và nó cũng giải thích vì sao các hình không gian vẽ trên giấy như hình hộp, hình chóp lại "đúng".

## Phép chiếu song song

:::definition Phép chiếu song song
Cho mặt phẳng $(P)$ và đường thẳng $l$ cắt $(P)$. Với mỗi điểm $M$ trong không gian, đường thẳng qua $M$ song song hoặc trùng với $l$ cắt $(P)$ tại đúng một điểm $M'$. Điểm $M'$ gọi là **hình chiếu song song** của $M$ lên $(P)$ theo phương $l$. Mặt phẳng $(P)$ gọi là **mặt phẳng chiếu**, đường thẳng $l$ gọi là **phương chiếu**. Hình chiếu của một hình $\mathcal{H}$ là tập hợp các hình chiếu của mọi điểm của $\mathcal{H}$.
:::

Ánh sáng mặt trời gần như song song, nên bóng của một vật trên mặt đất là hình chiếu song song của vật lên mặt đất theo phương của tia nắng.

:::diagram Hình chiếu song song của tam giác $ABC$ lên mặt phẳng $(P)$ theo phương $l$
alt: Một tam giác ABC phía trên mặt phẳng P và hình chiếu A'B'C' của nó trên mặt phẳng, các đoạn nối AA', BB', CC' vẽ nét đứt và song song với nhau
point P1 0,0 ""
point P2 8,0 ""
point P3 10,2 ""
point P4 2,2 ""
polygon P1 P2 P3 P4
point A 2.5,4 above-left
point B 6,4.4 above-right
point C 4.4,4.6 above
point A2 2,1 below "A′"
point B2 5.5,1.4 below "B′"
point C2 3.9,1.6 below "C′"
segment A B
segment B C
segment C A
segment A2 B2
segment B2 C2
segment C2 A2
segment A A2 dashed
segment B B2 dashed
segment C C2 dashed
label 9.2,0.5 "(P)"
label 1.6,2.6 "l"
:::

## Tính chất của phép chiếu song song

:::theorem Tính chất của phép chiếu song song
Xét phép chiếu song song lên mặt phẳng $(P)$ theo phương $l$.
1. Hình chiếu của một đường thẳng không song song với $l$ là một đường thẳng; của đường thẳng song song với $l$ là một điểm. Hình chiếu của một đoạn thẳng là một đoạn thẳng (hoặc một điểm).
2. Hình chiếu của hai đường thẳng song song (không song song với $l$) là hai đường thẳng song song hoặc trùng nhau.
3. Nếu $A$, $B$, $C$ là ba điểm thẳng hàng thì hình chiếu $A'$, $B'$, $C'$ cũng thẳng hàng và $\dfrac{A'B'}{B'C'}=\dfrac{AB}{BC}$. Cũng vậy, tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng, hoặc trên hai đường thẳng song song, được bảo toàn.
:::

Vì sao tính chất 3 đúng (cho ba điểm thẳng hàng)? Các đường thẳng $AA'$, $BB'$, $CC'$ đều song song với $l$, nên song song với nhau và cùng nằm trong mặt phẳng chứa đường thẳng $d$ qua $A$, $B$, $C$ và phương $l$. Mặt phẳng đó cắt $(P)$ theo một đường thẳng, chứa $A'$, $B'$, $C'$, nên ba điểm này thẳng hàng. Trong mặt phẳng đó, ba đường thẳng song song bị hai cát tuyến $d$ và $A'B'C'$ cắt nên theo định lí Thalès, $\dfrac{A'B'}{B'C'}=\dfrac{AB}{BC}$.

Hệ quả: hình chiếu của trung điểm của một đoạn thẳng là trung điểm của hình chiếu đoạn thẳng đó.

:::example Đo chiều cao cột cờ bằng bóng nắng
Cùng một thời điểm, cột cờ thẳng đứng có bóng dài $8$ m và cọc tre cao $1{,}5$ m thẳng đứng có bóng dài $1{,}2$ m. Tính chiều cao cột cờ.

**Hiểu đề.** Tia nắng song song nên bóng là hình chiếu song song lên mặt đất theo phương tia nắng. Cột cờ $AB$ có chân $B$ trên mặt đất và bóng $BB'$ ($B'$ là hình chiếu của đỉnh); cọc tre $CD$ có bóng $DD'$.

**Tìm cách giải.** Hai đoạn thẳng đứng $AB$ và $CD$ song song với nhau; bóng của chúng nằm trên mặt đất. Phép chiếu song song bảo toàn tỉ số hai đoạn thẳng cùng nằm trên hai đường thẳng song song nên $\dfrac{\text{chiều cao}}{\text{bóng}}$ bằng nhau ở hai vật.

**Giải.** Gọi $h$ là chiều cao cột cờ. Ta có $\dfrac{h}{8}=\dfrac{1{,}5}{1{,}2}$, suy ra $h=\dfrac{8\cdot1{,}5}{1{,}2}=10$.

Vậy cột cờ cao $10$ m.

**Nhìn lại.** Cọc cao $1{,}5$ m có bóng $1{,}2$ m nên tỉ số chiều cao trên bóng là $\dfrac{1{,}5}{1{,}2}=1{,}25$. Cột cờ có tỉ số $\dfrac{10}{8}=1{,}25$, đúng bằng. Phương pháp chỉ đúng khi hai vật cùng thẳng đứng, bóng đo trên cùng một mặt phẳng nằm ngang và đo cùng một lúc.
:::

:::example Trọng tâm và phép chiếu song song
Cho tam giác $ABC$ có trọng tâm $G$. Phép chiếu song song lên mặt phẳng $(P)$ (phương chiếu không song song với mặt phẳng $(ABC)$) biến $A$, $B$, $C$ thành $A'$, $B'$, $C'$. Chứng minh hình chiếu $G'$ của $G$ là trọng tâm của tam giác $A'B'C'$.

**Lời giải.** Gọi $M$ là trung điểm của $BC$. Hình chiếu $M'$ của $M$ là trung điểm của $B'C'$ (hệ quả). Vì $A$, $G$, $M$ thẳng hàng với $AG=2GM$ nên theo tính chất 3, $A'$, $G'$, $M'$ thẳng hàng và $A'G'=2G'M'$. Do đó $G'$ nằm trên trung tuyến $A'M'$ của tam giác $A'B'C'$ và cách $A'$ một khoảng bằng $\dfrac23A'M'$, nên $G'$ là trọng tâm của tam giác $A'B'C'$.

Vậy hình chiếu của trọng tâm là trọng tâm của hình chiếu.
:::

## Hình biểu diễn của một hình không gian

Để vẽ một hình không gian trên giấy, ta vẽ hình chiếu song song của nó lên mặt phẳng của tờ giấy. Hình chiếu đó gọi là **hình biểu diễn**. Theo các tính chất trên, hình biểu diễn giữ nguyên:
- tính thẳng hàng và thứ tự của các điểm;
- tính song song của các đường thẳng;
- tỉ số của các đoạn thẳng cùng nằm trên một đường thẳng hoặc trên các đường thẳng song song.

Chú ý rằng độ dài, góc và dạng của hình có thể thay đổi. Ví dụ: tam giác bất kì có thể là hình biểu diễn của tam giác đều; hình bình hành có thể là hình biểu diễn của hình vuông, hình chữ nhật hay hình thoi. Các cạnh bị che được vẽ nét đứt, đó là những hình vẽ ta đã dùng ở các bài trước.

:::example Hình biểu diễn của tam giác đều
Tam giác đều $ABC$ có đường cao $AH$. Hình biểu diễn là tam giác $A'B'C'$ (không còn đều). Đường cao $AH$ được biểu diễn thế nào?

**Lời giải.** Vì $ABC$ đều nên $H$ là trung điểm của $BC$. Phép chiếu song song giữ trung điểm nên $H'$ là trung điểm của $B'C'$. Vậy $A'H'$ là trung tuyến của tam giác $A'B'C'$.

Trong hình biểu diễn, đường cao $AH$ trở thành trung tuyến $A'H'$ (không còn vuông góc với $B'C'$ nữa).
:::

:::example Tỉ số trên một đường thẳng
Bốn điểm $A$, $B$, $C$, $D$ thẳng hàng theo thứ tự đó với $AB:BC:CD=1:2:3$. Hình chiếu song song của chúng là $A'$, $B'$, $C'$, $D'$ với $A'D'=18$. Tính $A'B'$, $B'C'$, $C'D'$.

**Lời giải.** Phép chiếu song song giữ tỉ số của các đoạn thẳng cùng nằm trên một đường thẳng, nên $A'B':B'C':C'D'=1:2:3$. Tổng số phần là $1+2+3=6$ và $A'D'=18$, nên mỗi phần dài $\dfrac{18}{6}=3$.

Vậy $A'B'=3$, $B'C'=6$, $C'D'=9$.
:::

:::example Hình biểu diễn của hình thang
Hình thang $ABCD$ có $AB\parallel CD$ và $AB=2CD$. Hình biểu diễn của nó có tính chất gì?

**Lời giải.** Phép chiếu song song giữ tính song song nên $A'B'\parallel C'D'$. Nó giữ tỉ số của các đoạn thẳng nằm trên hai đường thẳng song song nên $\dfrac{A'B'}{C'D'}=\dfrac{AB}{CD}=2$.

Vậy hình biểu diễn là hình thang $A'B'C'D'$ có $A'B'\parallel C'D'$ và $A'B'=2C'D'$.
:::

**Kết nối.** Phép chiếu song song cho ta lời giải thích hình học cho các hình vẽ ở cả chương này: các mặt phẳng, hình chóp, hình hộp ta vẽ đều là hình biểu diễn. Bài trước, định lí Thalès trong không gian dùng các mặt phẳng song song; ở đây ta dùng đúng ba đường thẳng song song để chiếu. Hai bài sau chuyển sang chủ đề mới, giới hạn, nhưng ý tưởng "tỉ số không đổi" vẫn là một công cụ thường gặp.

:::warning Những sai lầm thường gặp
- **Cho rằng hình chiếu bảo toàn độ dài và góc.** Sai: hình chiếu của tam giác đều là tam giác đều. Vì sao sai: phép chiếu song song chỉ giữ tỉ số trên cùng một đường thẳng, không giữ độ dài hay góc. Đúng: hình chiếu của tam giác đều là một tam giác bất kì.
- **Cho rằng hình chiếu của hai đường thẳng song song luôn song song.** Sai: hình chiếu của hai đường thẳng song song luôn là hai đường thẳng song song. Vì sao sai: nếu hai đường thẳng nằm trong mặt phẳng song song với phương chiếu, hình chiếu của chúng trùng nhau. Đúng: song song hoặc trùng nhau.
- **So sánh tỉ số của hai đoạn không cùng phương.** Sai: $AB$ và $CD$ không song song nên $\dfrac{A'B'}{C'D'}=\dfrac{AB}{CD}$. Vì sao sai: tỉ số chỉ được bảo toàn cho các đoạn cùng nằm trên một đường thẳng hoặc trên hai đường thẳng song song. Đúng: chỉ so sánh các đoạn cùng phương.
- **Dùng bóng nắng khi vật không thẳng đứng hoặc mặt đất dốc.** Sai: cột nghiêng và cọc thẳng đứng có cùng tỉ số chiều cao trên bóng. Vì sao sai: hai vật phải song song với nhau để tỉ số được bảo toàn. Đúng: hai vật cùng thẳng đứng, bóng trên cùng một mặt phẳng, đo cùng lúc.
:::

## Thuật ngữ

:::terms
- phép chiếu song song | parallel projection
- hình chiếu | projection (image)
- mặt phẳng chiếu | plane of projection
- phương chiếu | direction of projection
- hình biểu diễn | representation (drawing) of a solid
- trung điểm | midpoint
- trọng tâm | centroid
- tỉ số | ratio
:::

## Tóm tắt

- Phép chiếu song song lên $(P)$ theo phương $l$ biến mỗi điểm $M$ thành giao điểm $M'$ của $(P)$ với đường thẳng qua $M$ song song $l$.
- Hình chiếu của đường thẳng (không song song $l$) là đường thẳng; của đoạn thẳng là đoạn thẳng.
- Hình chiếu của hai đường thẳng song song là hai đường thẳng song song hoặc trùng nhau.
- Ba điểm thẳng hàng có hình chiếu thẳng hàng và $\dfrac{A'B'}{B'C'}=\dfrac{AB}{BC}$; trung điểm, trọng tâm được bảo toàn.
- Hình biểu diễn của một hình không gian là hình chiếu song song của nó, giữ tính song song và tỉ số, nhưng không giữ độ dài và góc.
- Bóng nắng: cùng lúc, vật thẳng đứng có chiều cao tỉ lệ với độ dài bóng.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cùng một thời điểm, một cái cây thẳng đứng có bóng dài $12$ m và một cọc thẳng đứng cao $2$ m có bóng dài $1{,}6$ m. Tính chiều cao của cây.

::hint
**Kiến thức:** $\dfrac{\text{chiều cao}}{\text{bóng}}$ bằng nhau với mọi vật thẳng đứng.

**Gợi ý các bước:**
1. Lập tỉ lệ $\dfrac{h}{12}=\dfrac{2}{1{,}6}$.

::solution
$h=\dfrac{12\cdot2}{1{,}6}=15$ m.

**Đáp số.** Cây cao $15$ m.
:::

:::exercise
Cho tam giác $ABC$ và điểm $M$ thuộc $BC$ sao cho $BM=2MC$. Phép chiếu song song biến $A$, $B$, $C$, $M$ thành $A'$, $B'$, $C'$, $M'$. Cho $B'C'=9$. Tính $B'M'$ và $M'C'$.

::hint
**Kiến thức:** phép chiếu song song giữ tỉ số của các đoạn thẳng cùng nằm trên một đường thẳng.

**Gợi ý các bước:**
1. $B'M':M'C'=BM:MC=2:1$.
2. Chia $B'C'=9$ theo tỉ lệ $2:1$.

::solution
$\dfrac{B'M'}{M'C'}=\dfrac{BM}{MC}=2$ và $B'M'+M'C'=9$, nên $M'C'=3$ và $B'M'=6$.

**Đáp số.** $B'M'=6$, $M'C'=3$.
:::

:::exercise
Hình bình hành $ABCD$ có hình biểu diễn $A'B'C'D'$. Hình biểu diễn đó là hình gì?

::hint
**Kiến thức:** phép chiếu song song giữ tính song song.

**Gợi ý các bước:**
1. $AB\parallel CD$ và $AD\parallel BC$.
2. Suy ra các cặp cạnh đối của $A'B'C'D'$.

::solution
$AB\parallel CD$ nên $A'B'\parallel C'D'$; $AD\parallel BC$ nên $A'D'\parallel B'C'$. Hai cặp cạnh đối song song nên $A'B'C'D'$ là hình bình hành.

**Đáp số.** Hình bình hành.
:::

:::exercise
Bốn điểm $A$, $B$, $C$, $D$ thẳng hàng theo thứ tự với $AB:BC:CD=2:3:5$. Hình chiếu song song của chúng có $A'D'=30$. Tính $A'B'$, $B'C'$, $C'D'$.

::hint
**Kiến thức:** tỉ số các đoạn thẳng cùng nằm trên một đường thẳng được bảo toàn.

**Gợi ý các bước:**
1. Tổng số phần là $2+3+5=10$.
2. Mỗi phần dài $\dfrac{30}{10}=3$.

::solution
$A'B'=2\cdot3=6$, $B'C'=3\cdot3=9$, $C'D'=5\cdot3=15$.

**Đáp số.** $A'B'=6$, $B'C'=9$, $C'D'=15$.
:::

:::exercise
Vào một thời điểm, một người cao $1{,}7$ m đứng thẳng có bóng dài $1{,}2$ m trên mặt đất phẳng, còn bóng của một toà nhà trên cùng mặt đất dài $24$ m. Tính chiều cao toà nhà (coi toà nhà thẳng đứng).

::hint
**Kiến thức:** tỉ số chiều cao trên bóng bằng nhau với mọi vật thẳng đứng cùng lúc.

**Gợi ý các bước:**
1. Tính tỉ số $\dfrac{1{,}7}{1{,}2}$.
2. Nhân với $24$.

::solution
Chiều cao toà nhà là $h=\dfrac{24\cdot1{,}7}{1{,}2}=34$ m.

**Đáp số.** $34$ m.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau về phép chiếu song song lên mặt phẳng $(P)$ theo phương $l$:

a) Hình chiếu của hai đường thẳng song song luôn là hai đường thẳng song song.

b) Hình chiếu của trung điểm một đoạn thẳng là trung điểm của hình chiếu đoạn thẳng đó.

c) Hình chiếu của hai đường thẳng cắt nhau có thể là hai đường thẳng song song.

d) Hình chiếu của một tam giác có thể là một đoạn thẳng.

::hint
**Kiến thức:** các tính chất của phép chiếu song song; xét trường hợp mặt phẳng chứa hình song song với $l$.

**Gợi ý các bước:**
1. a), c) Xét trường hợp các đường thẳng nằm trong một mặt phẳng song song với $l$.
2. d) Mặt phẳng của tam giác song song với $l$.

::solution
a) **Sai**: hai đường thẳng song song có thể có hình chiếu trùng nhau.

b) **Đúng**: phép chiếu song song giữ tỉ số, nên giữ trung điểm.

c) **Sai**: hai đường thẳng cắt nhau có hình chiếu là hai đường thẳng cắt nhau hoặc trùng nhau, không thể song song.

d) **Đúng**: khi mặt phẳng chứa tam giác song song với $l$, hình chiếu của tam giác nằm trên một đường thẳng.

**Đáp số.** a) Sai; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise Ôn tập
Hai mặt phẳng $(P)$ và $(Q)$ song song. Phép chiếu song song lên $(Q)$ theo phương $l$ biến tam giác $ABC$ nằm trong $(P)$ thành tam giác $A'B'C'$. Chứng minh $A'B'C'$ bằng $ABC$.

::hint
**Kiến thức:** ở bài trước, mặt phẳng thứ ba cắt hai mặt phẳng song song theo hai giao tuyến song song.

**Gợi ý các bước:**
1. $AA'\parallel BB'$ (cùng song song $l$).
2. Chứng minh $ABB'A'$ là hình bình hành.

::solution
$AA'$ và $BB'$ cùng song song với $l$ nên song song, và mặt phẳng $(AA'B'B)$ cắt $(P)$ và $(Q)$ theo $AB$ và $A'B'$, nên $AB\parallel A'B'$. Do đó $ABB'A'$ là hình bình hành và $A'B'=AB$. Tương tự $B'C'=BC$ và $C'A'=CA$. Hai tam giác có ba cặp cạnh bằng nhau nên bằng nhau.

**Đáp số.** Tam giác $A'B'C'$ bằng tam giác $ABC$.
:::

:::exercise Thử thách
Cho hình vuông $ABCD$ và $M$ là trung điểm của $CD$. Gọi $N$ là giao điểm của $AM$ và $BD$. Chứng minh $BN=2ND$. Từ đó nêu cách xác định điểm $N'$ trên hình biểu diễn $A'B'C'D'$ của hình vuông.

::hint
**Kiến thức:** hai tam giác đồng dạng ($AB\parallel DM$); phép chiếu song song giữ tỉ số trên một đường thẳng và trung điểm.

**Gợi ý các bước:**
1. Hai tam giác $NAB$ và $NMD$ đồng dạng với tỉ số $\dfrac{AB}{DM}=2$.
2. Trên $B'D'$ lấy điểm chia theo cùng tỉ số.

::solution
Vì $AB\parallel DM$ nên tam giác $NBA$ đồng dạng với tam giác $NDM$, suy ra $\dfrac{BN}{ND}=\dfrac{AB}{DM}=2$, tức $BN=2ND$. Phép chiếu song song giữ trung điểm và tỉ số, nên trên hình biểu diễn, $M'$ là trung điểm của $C'D'$ và $N'$ là giao điểm của $A'M'$ với $B'D'$, thoả mãn $B'N'=2N'D'$.

**Đáp số.** $BN=2ND$; $N'=A'M'\cap B'D'$ với $M'$ là trung điểm $C'D'$, và $B'N'=2N'D'$.
:::

## Kiểm tra mini

:::quiz
::mc NB
Phép chiếu song song biến ba điểm thẳng hàng thành
A. ba điểm trùng nhau.
B. ba điểm không thẳng hàng.
C. ba điểm thẳng hàng giữ nguyên thứ tự.
D. hai điểm.
::key C
Tính thẳng hàng và thứ tự của các điểm được bảo toàn (tính chất 3).

::mc TH
Cho tam giác $ABC$ có trọng tâm $G$. Hình chiếu song song của $G$ là
A. tâm đường tròn ngoại tiếp tam giác $A'B'C'$.
B. trực tâm của tam giác $A'B'C'$.
C. trung điểm của một cạnh.
D. trọng tâm của tam giác $A'B'C'$.
::key D
Phép chiếu song song giữ trung điểm và tỉ số, nên giữ trọng tâm. Tâm đường tròn ngoại tiếp và trực tâm không được bảo toàn vì cần góc vuông và độ dài.

::mc TH
Ba điểm $A$, $B$, $C$ thẳng hàng với $AB=2BC$. Hình chiếu song song có $A'B'=8$. Khi đó $B'C'$ bằng
A. $4$.
B. $16$.
C. $2$.
D. $6$.
::key A
$\dfrac{A'B'}{B'C'}=\dfrac{AB}{BC}=2$ nên $B'C'=4$. Phương án B viết ngược tỉ số.

::mc TH
Hình nào sau đây không thể là hình biểu diễn của một hình vuông?
A. Hình bình hành.
B. Hình thang không phải hình bình hành.
C. Hình vuông.
D. Hình chữ nhật.
::key B
Hình vuông có hai cặp cạnh đối song song, hình biểu diễn cũng phải có hai cặp cạnh đối song song, tức là hình bình hành (kể cả hình chữ nhật, hình thoi, hình vuông).

::tf VD VD TH TH
Cùng một thời điểm, một cột thẳng đứng cao $6$ m có bóng dài $4{,}5$ m. Xét tính đúng sai của các mệnh đề sau:
a) Một người đứng thẳng cao $1{,}6$ m có bóng dài $1{,}5$ m.
b) Một cây thẳng đứng có bóng dài $9$ m thì cao $12$ m.
c) Tỉ số chiều cao trên bóng phụ thuộc vào từng vật.
d) Vật thẳng đứng cao gấp đôi thì có bóng dài gấp đôi.
::key S Đ S Đ
Tỉ số chiều cao trên bóng là $\dfrac{6}{4{,}5}=\dfrac43$. a) Sai: người cao $1{,}6$ m có bóng $\dfrac{1{,}6\cdot4{,}5}{6}=1{,}2$ m. b) Đúng: $9\cdot\dfrac43=12$. c) Sai: tỉ số như nhau với mọi vật thẳng đứng. d) Đúng.

::sa VD
Cùng một thời điểm, cọc cao $2$ m có bóng dài $1{,}5$ m. Một cây thẳng đứng có bóng dài $9$ m. Cây cao bao nhiêu mét?
::key 12
$h=\dfrac{9\cdot2}{1{,}5}=12$ m.

::sa TH
Ba điểm $A$, $B$, $C$ thẳng hàng với $AB=3BC$. Hình chiếu song song có $A'B'=9$. Tính $B'C'$.
::key 3
$\dfrac{A'B'}{B'C'}=3$ nên $B'C'=\dfrac93=3$.
:::
