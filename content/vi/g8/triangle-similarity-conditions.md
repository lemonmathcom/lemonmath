---
title: Ba trường hợp đồng dạng của hai tam giác
description: Nắm ba trường hợp đồng dạng c.c.c, c.g.c, g.g của hai tam giác, cùng trường hợp tam giác vuông, và vận dụng để chứng minh, tính độ dài, đo khoảng cách.
minutes: 25
---

:::goals
- Phát biểu ba trường hợp đồng dạng của hai tam giác: c.c.c, c.g.c, g.g.
- Chọn đúng trường hợp đồng dạng và viết đúng thứ tự đỉnh tương ứng.
- Dùng tam giác đồng dạng để tính độ dài và chứng minh hệ thức.
- Vận dụng vào các bài toán thực tế như đo khoảng cách không thể đo trực tiếp.
:::

Giả sử hai bạn muốn biết chiều rộng $AB$ của một cái ao mà không thể bơi hay đi qua. Họ chọn một điểm $O$ trên bờ, đo được $OA=60$ m và $OB=80$ m. Trên $OA$ họ lấy điểm $A'$ với $OA'=15$ m, trên $OB$ lấy điểm $B'$ với $OB'=20$ m rồi đo được $A'B'=12$ m (đoạn này không bị ao chắn).

Từ ba số đo trên, họ có tính được $AB$ không? Hai tam giác $OA'B'$ và $OAB$ có chung góc $O$ và hai cặp cạnh có vẻ tỉ lệ. Liệu như thế đã đủ để kết luận chúng đồng dạng mà không cần đo cả sáu yếu tố? Bài này cho bạn ba "đường tắt" như vậy.

## Cùng khám phá

Theo định nghĩa, hai tam giác đồng dạng khi có ba cặp góc bằng nhau và ba cặp cạnh tỉ lệ, tổng cộng sáu điều kiện. Ta thử rút gọn. Tam giác $ABC$ có các cạnh $3$, $4$, $5$ và tam giác $A'B'C'$ có các cạnh $6$, $8$, $10$. Ba tỉ số cạnh đều bằng $2$. Nếu vẽ chính xác và đo, bạn sẽ thấy các góc tương ứng bằng nhau.

Đó không phải ngẫu nhiên: với tam giác, chỉ cần ba tỉ số cạnh bằng nhau là các góc tự động bằng nhau. Tương tự, chỉ cần hai cặp góc bằng nhau là cặp góc thứ ba cũng bằng nhau, vì tổng ba góc là $180^\circ$. Ta phát biểu những điều này thành ba trường hợp đồng dạng.

## Trường hợp thứ nhất: cạnh – cạnh – cạnh (c.c.c)

:::theorem Trường hợp đồng dạng c.c.c
Nếu ba cạnh của tam giác này tỉ lệ với ba cạnh của tam giác kia thì hai tam giác đồng dạng:
$$\frac{A'B'}{AB}=\frac{B'C'}{BC}=\frac{C'A'}{CA}\ \Rightarrow\ \triangle A'B'C'\sim\triangle ABC.$$
:::

**Vì sao?** Giả sử tỉ số chung $k<1$ (nếu $k>1$ ta đổi vai hai tam giác). Trên cạnh $AB$ lấy điểm $M$ sao cho $AM=A'B'$, rồi kẻ $MN\parallel BC$ ($N\in AC$). Theo định lí về đường thẳng song song, $\triangle AMN\sim\triangle ABC$ với tỉ số $\dfrac{AM}{AB}=k$, nên $MN=k\cdot BC=B'C'$ và $AN=k\cdot AC=A'C'$. Hai tam giác $AMN$ và $A'B'C'$ có ba cạnh bằng nhau từng đôi một nên bằng nhau (c.c.c). Do đó $\triangle A'B'C'\sim\triangle ABC$.

**Chú ý.** Khi so sánh các cạnh, hãy ghép cạnh nhỏ nhất với cạnh nhỏ nhất, cạnh lớn nhất với cạnh lớn nhất.

:::example Dùng trường hợp c.c.c
Xét hai tam giác $ABC$ với $AB=4$, $BC=6$, $CA=8$ và $DEF$ với $DE=6$, $EF=9$, $FD=12$.

a) Chứng tỏ hai tam giác đồng dạng và nêu các cặp góc bằng nhau.

b) Hai tam giác $MNP$ với $MN=3$, $NP=4$, $PM=6$ và $QRS$ với $QR=6$, $RS=8$, $SQ=11$ có đồng dạng không?

**Lời giải.** a) Ta có $\dfrac{DE}{AB}=\dfrac64=\dfrac32$, $\dfrac{EF}{BC}=\dfrac96=\dfrac32$, $\dfrac{FD}{CA}=\dfrac{12}{8}=\dfrac32$. Ba tỉ số bằng nhau nên $\triangle DEF\sim\triangle ABC$ (c.c.c) với tỉ số $\dfrac32$. Suy ra $\widehat D=\widehat A$, $\widehat E=\widehat B$, $\widehat F=\widehat C$.

b) Ta có $\dfrac{QR}{MN}=\dfrac63=2$, $\dfrac{RS}{NP}=\dfrac84=2$ nhưng $\dfrac{SQ}{PM}=\dfrac{11}{6}\neq2$. Ba tỉ số không bằng nhau nên hai tam giác không đồng dạng.

Vậy a) hai tam giác đồng dạng; b) không đồng dạng.
:::

## Trường hợp thứ hai: cạnh – góc – cạnh (c.g.c)

:::theorem Trường hợp đồng dạng c.g.c
Nếu hai cạnh của tam giác này tỉ lệ với hai cạnh của tam giác kia và hai góc **xen giữa** các cặp cạnh đó bằng nhau thì hai tam giác đồng dạng:
$$\frac{A'B'}{AB}=\frac{A'C'}{AC}\ \text{và}\ \widehat{A'}=\widehat A\ \Rightarrow\ \triangle A'B'C'\sim\triangle ABC.$$
:::

**Vì sao?** Giả sử $k=\dfrac{A'B'}{AB}<1$. Trên $AB$ lấy $M$ với $AM=A'B'$, kẻ $MN\parallel BC$ ($N\in AC$). Khi đó $\triangle AMN\sim\triangle ABC$ với tỉ số $k$ nên $AN=k\cdot AC=A'C'$. Hai tam giác $AMN$ và $A'B'C'$ có $AM=A'B'$, $\widehat A=\widehat{A'}$, $AN=A'C'$ nên bằng nhau (c.g.c). Do đó $\triangle A'B'C'\sim\triangle ABC$.

:::example Dùng trường hợp c.g.c
Cho $\triangle ABC$ có $AB=6$, $AC=9$, $\widehat A=50^\circ$ và $\triangle MNP$ có $MN=4$, $MP=6$, $\widehat M=50^\circ$. Chứng minh hai tam giác đồng dạng. Nếu $BC=12$, tính $NP$.

**Lời giải.** Ta có $\dfrac{MN}{AB}=\dfrac46=\dfrac23$ và $\dfrac{MP}{AC}=\dfrac69=\dfrac23$. Hai tỉ số bằng nhau, và $\widehat M=\widehat A$ là góc xen giữa hai cặp cạnh đó. Theo trường hợp c.g.c, $\triangle MNP\sim\triangle ABC$ với tỉ số $\dfrac23$.

Do đó $\dfrac{NP}{BC}=\dfrac23$, suy ra $NP=\dfrac23\cdot12=8$.

Vậy hai tam giác đồng dạng và $NP=8$.
:::

## Trường hợp thứ ba: góc – góc (g.g)

:::theorem Trường hợp đồng dạng g.g
Nếu hai góc của tam giác này lần lượt bằng hai góc của tam giác kia thì hai tam giác đồng dạng:
$$\widehat{A'}=\widehat A\ \text{và}\ \widehat{B'}=\widehat B\ \Rightarrow\ \triangle A'B'C'\sim\triangle ABC.$$
:::

**Vì sao?** Vì tổng ba góc trong tam giác là $180^\circ$ nên $\widehat{C'}=180^\circ-\widehat{A'}-\widehat{B'}=\widehat C$. Giả sử $A'B'<AB$. Trên $AB$ lấy $M$ với $AM=A'B'$, kẻ $MN\parallel BC$ ($N\in AC$). Khi đó $\triangle AMN\sim\triangle ABC$, nên $\widehat{AMN}=\widehat B=\widehat{B'}$. Hai tam giác $AMN$ và $A'B'C'$ có $\widehat A=\widehat{A'}$, $AM=A'B'$, $\widehat{AMN}=\widehat{B'}$ nên bằng nhau (g.c.g). Do đó $\triangle A'B'C'\sim\triangle ABC$.

:::example Dùng trường hợp g.g
Cho $\triangle ABC$ có $\widehat A=40^\circ$, $\widehat B=60^\circ$ và $\triangle DEF$ có $\widehat E=60^\circ$, $\widehat F=80^\circ$. Hai tam giác có đồng dạng không? Viết đúng thứ tự đỉnh.

**Lời giải.** Trong $\triangle ABC$: $\widehat C=180^\circ-40^\circ-60^\circ=80^\circ$. Trong $\triangle DEF$: $\widehat D=180^\circ-60^\circ-80^\circ=40^\circ$. Ta có $\widehat D=\widehat A=40^\circ$, $\widehat E=\widehat B=60^\circ$, $\widehat F=\widehat C=80^\circ$.

Theo trường hợp g.g, $\triangle DEF\sim\triangle ABC$ (với $D\leftrightarrow A$, $E\leftrightarrow B$, $F\leftrightarrow C$).

Vậy hai tam giác đồng dạng.
:::

## Đồng dạng của tam giác vuông

Tam giác vuông có sẵn một góc $90^\circ$, nên các trường hợp trên được rút gọn:
- Hai tam giác vuông có một cặp góc nhọn bằng nhau thì đồng dạng (g.g).
- Hai tam giác vuông có hai cặp cạnh góc vuông tỉ lệ thì đồng dạng (c.g.c, vì góc xen giữa là góc vuông).

:::example Hai tam giác vuông
Cho $\triangle ABC$ vuông tại $A$ có $AB=6$, $AC=8$ và $\triangle A'B'C'$ vuông tại $A'$ có $A'B'=9$, $A'C'=12$. Chứng minh hai tam giác đồng dạng và kiểm tra tỉ số hai cạnh huyền.

**Lời giải.** Ta có $\dfrac{A'B'}{AB}=\dfrac96=\dfrac32$ và $\dfrac{A'C'}{AC}=\dfrac{12}{8}=\dfrac32$, và $\widehat{A'}=\widehat A=90^\circ$ là góc xen giữa. Theo trường hợp c.g.c, $\triangle A'B'C'\sim\triangle ABC$ với tỉ số $\dfrac32$.

Theo định lí Pythagore, $BC=10$ và $B'C'=15$, và $\dfrac{B'C'}{BC}=\dfrac{15}{10}=\dfrac32$, đúng với tỉ số đồng dạng.

Vậy hai tam giác đồng dạng theo tỉ số $\dfrac32$.
:::

:::example Chứng minh hệ thức
Cho $\triangle ABC$ và điểm $D$ trên cạnh $AC$ sao cho $\widehat{ABD}=\widehat{ACB}$. Chứng minh $AB^2=AD\cdot AC$ và tính $AC$ khi $AB=6$, $AD=4$.

**Lời giải.** Hai tam giác $ABD$ và $ACB$ có góc $A$ chung và $\widehat{ABD}=\widehat{ACB}$. Theo trường hợp g.g, $\triangle ABD\sim\triangle ACB$, với $A\leftrightarrow A$, $B\leftrightarrow C$, $D\leftrightarrow B$. Do đó
$$\frac{AB}{AC}=\frac{AD}{AB}\ \Rightarrow\ AB^2=AD\cdot AC.$$
Khi $AB=6$, $AD=4$: $36=4\cdot AC$, suy ra $AC=9$.

Vậy $AB^2=AD\cdot AC$ và $AC=9$.
:::

Ta quay lại cái ao ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Đo chiều rộng ao
Điểm $O$ ở bờ, $OA=60$ m, $OB=80$ m. Lấy $A'\in OA$ với $OA'=15$ m, $B'\in OB$ với $OB'=20$ m, và đo được $A'B'=12$ m (giả sử). Tính chiều rộng $AB$ của ao.

**Lời giải.**

*Hiểu đề.* Cần tìm $AB$ khi chỉ đo được $A'B'$, $OA$, $OB$, $OA'$, $OB'$.

*Tìm cách giải.* Hai tam giác $OA'B'$ và $OAB$ có chung góc $O$; thử kiểm tra hai cặp cạnh kề góc đó có tỉ lệ không để dùng c.g.c.

*Giải.* Ta có $\dfrac{OA'}{OA}=\dfrac{15}{60}=\dfrac14$ và $\dfrac{OB'}{OB}=\dfrac{20}{80}=\dfrac14$, và $\widehat O$ chung. Theo trường hợp c.g.c, $\triangle OA'B'\sim\triangle OAB$ với tỉ số $\dfrac14$. Do đó $\dfrac{A'B'}{AB}=\dfrac14$, suy ra $AB=4\cdot12=48$ (m).

*Nhìn lại.* Kiểm tra: $A'B'=\dfrac14\cdot48=12$ m. Kết quả hợp lí vì $AB$ phải lớn hơn $A'B'$ khi $A'$, $B'$ nằm gần $O$ hơn $A$, $B$.

Vậy ao rộng $48$ m.
:::

:::warning Những sai lầm thường gặp
- **Dùng c.g.c với góc không xen giữa.** Sai: hai cạnh tỉ lệ và một góc bằng nhau (không nằm giữa hai cạnh đó) thì đồng dạng. Lí do sai: góc không xen giữa không xác định duy nhất hình dạng tam giác, có thể có hai tam giác khác nhau. Đúng: góc phải nằm giữa hai cặp cạnh tỉ lệ.
- **Ghép sai các cặp cạnh khi dùng c.c.c.** Sai: với các cạnh $4$, $6$, $8$ và $6$, $9$, $12$, so sánh $\dfrac{12}{4}$ và $\dfrac{9}{6}$. Lí do sai: phải ghép cạnh nhỏ nhất với nhỏ nhất, lớn nhất với lớn nhất. Đúng: $\dfrac64=\dfrac96=\dfrac{12}{8}=\dfrac32$.
- **Chỉ có một cặp góc bằng nhau mà kết luận đồng dạng.** Sai: hai tam giác cùng có một góc $40^\circ$ nên đồng dạng. Lí do sai: g.g cần hai cặp góc. Đúng: kiểm tra thêm một cặp góc nữa (hoặc tính nhờ tổng ba góc bằng $180^\circ$).
:::

**Kết nối.** Bài này dựa vào định nghĩa tam giác đồng dạng và định lí về đường thẳng song song ở bài [hai tam giác đồng dạng](lesson:similar-triangles), cùng các trường hợp bằng nhau của tam giác. Bài tiếp theo, [định lí Pythagore và ứng dụng](lesson:pythagoras-theorem), có thể được chứng minh rất gọn bằng tam giác đồng dạng, như bạn sẽ thấy ở bài thử thách.

## Thuật ngữ

:::terms
- trường hợp đồng dạng | similarity condition
- cạnh – cạnh – cạnh (c.c.c) | side–side–side (SSS)
- cạnh – góc – cạnh (c.g.c) | side–angle–side (SAS)
- góc – góc (g.g) | angle–angle (AA)
- góc xen giữa | included angle
- cạnh góc vuông, cạnh huyền | leg, hypotenuse
- tỉ số đồng dạng | scale factor
- tam giác vuông | right-angled triangle
:::

## Tóm tắt

- c.c.c: ba cặp cạnh tương ứng tỉ lệ $\Rightarrow$ đồng dạng.
- c.g.c: hai cặp cạnh tương ứng tỉ lệ và góc xen giữa bằng nhau $\Rightarrow$ đồng dạng.
- g.g: hai cặp góc bằng nhau $\Rightarrow$ đồng dạng.
- Tam giác vuông: một cặp góc nhọn bằng nhau, hoặc hai cặp cạnh góc vuông tỉ lệ $\Rightarrow$ đồng dạng.
- Luôn viết đúng thứ tự đỉnh tương ứng; từ đồng dạng suy ra các cặp góc bằng nhau và các tỉ số cạnh.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho $\triangle ABC$ có các cạnh $5$, $12$, $13$ và $\triangle DEF$ có các cạnh $10$, $24$, $26$. Hai tam giác có đồng dạng không? Nêu tỉ số.

::hint
**Kiến thức:** trường hợp c.c.c.

**Gợi ý các bước:**
1. Ghép cạnh nhỏ nhất với nhỏ nhất, v.v.
2. Tính ba tỉ số.

::solution
Ta có $\dfrac{10}{5}=\dfrac{24}{12}=\dfrac{26}{13}=2$. Ba tỉ số bằng nhau nên hai tam giác đồng dạng (c.c.c) với tỉ số $2$.

**Đáp số.** Đồng dạng, tỉ số $2$.
:::

:::exercise
Hai tam giác có các cạnh $3$, $5$, $7$ và $6$, $10$, $15$ có đồng dạng không?

::hint
**Kiến thức:** c.c.c cần cả ba tỉ số bằng nhau.

**Gợi ý các bước:**
1. Ghép các cạnh theo thứ tự tăng dần.
2. Tính ba tỉ số.

::solution
Ta có $\dfrac63=2$, $\dfrac{10}{5}=2$ nhưng $\dfrac{15}{7}\neq2$. Ba tỉ số không bằng nhau nên hai tam giác không đồng dạng.

**Đáp số.** Không đồng dạng.
:::

:::exercise
Cho $\triangle ABC$ có $AB=4$, $AC=6$, $\widehat A=60^\circ$ và $\triangle A'B'C'$ có $A'B'=6$, $A'C'=9$, $\widehat{A'}=60^\circ$. Chứng minh hai tam giác đồng dạng. Nếu $BC=5$, tính $B'C'$.

::hint
**Kiến thức:** trường hợp c.g.c.

**Gợi ý các bước:**
1. Tính $\dfrac{A'B'}{AB}$ và $\dfrac{A'C'}{AC}$.
2. Dùng tỉ số đồng dạng cho cạnh còn lại.

::solution
Ta có $\dfrac{6}{4}=\dfrac{9}{6}=\dfrac32$ và góc xen giữa $\widehat{A'}=\widehat A=60^\circ$. Theo c.g.c, $\triangle A'B'C'\sim\triangle ABC$ với tỉ số $\dfrac32$. Do đó $B'C'=\dfrac32\cdot5=7{,}5$.

**Đáp số.** Đồng dạng; $B'C'=7{,}5$.
:::

:::exercise
Cho $\triangle ABC$ có $\widehat A=50^\circ$, $\widehat B=70^\circ$ và $\triangle MNP$ có $\widehat M=50^\circ$, $\widehat P=60^\circ$. Chứng minh hai tam giác đồng dạng và viết đúng thứ tự đỉnh.

::hint
**Kiến thức:** trường hợp g.g; tổng ba góc bằng $180^\circ$.

**Gợi ý các bước:**
1. Tính góc còn lại của mỗi tam giác.
2. Ghép các góc bằng nhau.

::solution
Trong $\triangle ABC$: $\widehat C=180^\circ-50^\circ-70^\circ=60^\circ$. Trong $\triangle MNP$: $\widehat N=180^\circ-50^\circ-60^\circ=70^\circ$. Ta có $\widehat A=\widehat M$, $\widehat B=\widehat N$, $\widehat C=\widehat P$. Theo g.g, $\triangle ABC\sim\triangle MNP$.

**Đáp số.** $\triangle ABC\sim\triangle MNP$ (g.g).
:::

:::exercise
Tam giác $ABC$ vuông tại $A$ có $AB=3$, $AC=4$; tam giác $DEF$ vuông tại $D$ có $DE=6$, $DF=8$. Chứng minh hai tam giác đồng dạng và tính $EF$.

::hint
**Kiến thức:** hai cặp cạnh góc vuông tỉ lệ.

**Gợi ý các bước:**
1. Tính $\dfrac{DE}{AB}$ và $\dfrac{DF}{AC}$.
2. Tính $BC$ rồi $EF$.

::solution
Ta có $\dfrac63=\dfrac84=2$ và hai góc vuông xen giữa bằng nhau, nên $\triangle DEF\sim\triangle ABC$ (c.g.c) với tỉ số $2$. Theo định lí Pythagore, $BC=5$. Do đó $EF=2\cdot5=10$.

**Đáp số.** Đồng dạng, $EF=10$.
:::

:::exercise
Cho $\triangle ABC$, điểm $D$ trên cạnh $AC$ sao cho $\widehat{ABD}=\widehat{ACB}$. Biết $AB=10$, $AD=5$. Tính $AC$ và $DC$.

::hint
**Kiến thức:** $\triangle ABD\sim\triangle ACB$ nên $AB^2=AD\cdot AC$.

**Gợi ý các bước:**
1. Chứng minh hai tam giác đồng dạng bằng g.g.
2. Dùng hệ thức để tính $AC$, rồi $DC=AC-AD$.

::solution
Hai tam giác $ABD$ và $ACB$ có góc $A$ chung và $\widehat{ABD}=\widehat{ACB}$ nên đồng dạng (g.g). Suy ra $AB^2=AD\cdot AC$, tức $100=5\cdot AC$ và $AC=20$. Do đó $DC=20-5=15$.

**Đáp số.** $AC=20$; $DC=15$.
:::

:::exercise
Giả sử để đo khoảng cách $AB$ giữa hai điểm hai bên một cái hồ, người ta chọn điểm $O$ rồi đo $OA=90$ m, $OB=120$ m. Lấy $A'\in OA$ với $OA'=30$ m, $B'\in OB$ với $OB'=40$ m và đo $A'B'=25$ m. Tính $AB$.

::hint
**Kiến thức:** hai tam giác $OA'B'$ và $OAB$ có chung góc $O$.

**Gợi ý các bước:**
1. Kiểm tra $\dfrac{OA'}{OA}$ và $\dfrac{OB'}{OB}$.
2. Dùng c.g.c để suy ra tỉ số của $A'B'$ và $AB$.

::solution
Ta có $\dfrac{OA'}{OA}=\dfrac{30}{90}=\dfrac13$ và $\dfrac{OB'}{OB}=\dfrac{40}{120}=\dfrac13$, và $\widehat O$ chung. Theo c.g.c, $\triangle OA'B'\sim\triangle OAB$ với tỉ số $\dfrac13$, nên $AB=3\cdot A'B'=75$ (m).

**Đáp số.** $75$ m.
:::

:::exercise
Giả sử để đo chiều cao một toà nhà, người ta đặt một chiếc gương nhỏ trên mặt đất cách chân toà nhà $30$ m. Một người cao $1{,}6$ m đứng cách gương $2$ m, nhìn thấy đỉnh toà nhà qua gương. Tính chiều cao toà nhà. (Tia sáng tới và tia phản xạ tạo với mặt đất hai góc bằng nhau.)

::hint
**Kiến thức:** hai tam giác vuông có một cặp góc nhọn bằng nhau thì đồng dạng.

**Gợi ý các bước:**
1. Nhận ra hai tam giác vuông đồng dạng (người với gương, toà nhà với gương).
2. Viết tỉ lệ $\dfrac{\text{chiều cao người}}{\text{khoảng cách đến gương}}=\dfrac{\text{chiều cao nhà}}{30}$.

::solution
Hai tam giác vuông (người và khoảng cách đến gương; toà nhà và khoảng cách đến gương) có một cặp góc nhọn bằng nhau (góc tới bằng góc phản xạ), nên đồng dạng (g.g). Gọi $h$ là chiều cao toà nhà. Ta có $\dfrac{h}{30}=\dfrac{1{,}6}{2}$, suy ra $h=24$ (m).

**Đáp số.** $24$ m.
:::

:::exercise
Hình thang $ABCD$ có $AB\parallel CD$; hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Chứng minh $\triangle OAB\sim\triangle OCD$ và tính $CD$ khi $OA=4$, $OC=6$, $AB=8$. (Ôn lại [tam giác đồng dạng](lesson:similar-triangles).)

::hint
**Kiến thức:** góc so le trong bằng nhau khi hai đường thẳng song song.

**Gợi ý các bước:**
1. Tìm hai cặp góc bằng nhau để dùng g.g.
2. Viết tỉ lệ $\dfrac{CD}{AB}=\dfrac{OC}{OA}$.

::solution
Vì $AB\parallel CD$ nên $\widehat{OAB}=\widehat{OCD}$ và $\widehat{OBA}=\widehat{ODC}$ (so le trong). Theo g.g, $\triangle OAB\sim\triangle OCD$. Do đó $\dfrac{CD}{AB}=\dfrac{OC}{OA}=\dfrac64$, suy ra $CD=8\cdot\dfrac32=12$.

**Đáp số.** Đã chứng minh; $CD=12$.
:::

:::exercise Thử thách
Cho $\triangle ABC$ vuông tại $A$ với đường cao $AH$ ($H\in BC$).

a) Chứng minh $\triangle HBA\sim\triangle ABC$ và $AB^2=BH\cdot BC$. Tương tự $AC^2=CH\cdot BC$.

b) Từ đó chứng minh $AB^2+AC^2=BC^2$. Tính $BH$ khi $AB=6$, $BC=10$.

::hint
**Kiến thức:** g.g với tam giác vuông; $BH+CH=BC$.

**Gợi ý các bước:**
1. Hai tam giác $HBA$ và $ABC$ có góc $B$ chung và đều có một góc vuông.
2. Cộng hai hệ thức và dùng $BH+CH=BC$.

::solution
a) Hai tam giác $HBA$ (vuông tại $H$) và $ABC$ (vuông tại $A$) có góc $B$ chung nên $\triangle HBA\sim\triangle ABC$ (g.g). Suy ra $\dfrac{BH}{AB}=\dfrac{AB}{BC}$, tức $AB^2=BH\cdot BC$. Hoàn toàn tương tự, $\triangle HCA\sim\triangle ACB$ cho $AC^2=CH\cdot BC$.

b) Cộng hai hệ thức: $AB^2+AC^2=BC\cdot(BH+CH)=BC\cdot BC=BC^2$. Với $AB=6$, $BC=10$: $BH=\dfrac{AB^2}{BC}=\dfrac{36}{10}=3{,}6$.

Vậy đã chứng minh định lí Pythagore và $BH=3{,}6$.

**Đáp số.** $BH=3{,}6$.
:::

## Kiểm tra mini

:::quiz
::mc
$\triangle ABC$ có các cạnh $4$, $6$, $8$ và $\triangle DEF$ có các cạnh $6$, $9$, $12$. Tỉ số đồng dạng của $\triangle DEF$ so với $\triangle ABC$ là
A. $\dfrac23$.
B. $\dfrac32$.
C. $2$.
D. $3$.
::key B
$\dfrac64=\dfrac96=\dfrac{12}{8}=\dfrac32$. A lấy ngược tỉ số, C và D không phải tỉ số của các cạnh tương ứng.

::mc
Hai tam giác có hai góc lần lượt bằng nhau thì
A. không đồng dạng.
B. bằng nhau.
C. đồng dạng với nhau.
D. đều là tam giác cân.
::key C
Đó là trường hợp g.g. Chúng chưa chắc bằng nhau (có thể to nhỏ khác nhau) và không nhất thiết cân.

::mc
Trong trường hợp c.g.c của hai tam giác đồng dạng, góc bằng nhau phải là góc
A. đối diện cạnh lớn nhất.
B. bất kì.
C. nhọn.
D. xen giữa hai cặp cạnh tỉ lệ.
::key D
Góc phải nằm giữa hai cặp cạnh tỉ lệ. Các phương án còn lại không đảm bảo hai tam giác đồng dạng.

::mc
Cho $\triangle ABC$, $D\in AC$ sao cho $\widehat{ABD}=\widehat{ACB}$, với $AB=10$ và $AD=5$. Độ dài $AC$ là
A. $20$.
B. $2{,}5$.
C. $15$.
D. $5$.
::key A
$AB^2=AD\cdot AC$ nên $AC=\dfrac{100}{5}=20$. C là $DC$, B và D không thoả hệ thức.

::tf
Cho $\triangle ABC$ có $AB=6$, $AC=9$, $\widehat A=50^\circ$ và $\triangle MNP$ có $MN=4$, $MP=6$, $\widehat M=50^\circ$. Xét tính đúng sai của các mệnh đề sau:
a) $\triangle MNP\sim\triangle ABC$ theo trường hợp c.g.c.
b) Tỉ số đồng dạng của $\triangle MNP$ so với $\triangle ABC$ bằng $\dfrac32$.
c) $\widehat N=\widehat C$.
d) Nếu $BC=12$ thì $NP=8$.
::key Đ S S Đ
a) Đúng: $\dfrac46=\dfrac69=\dfrac23$ và góc xen giữa bằng nhau. b) Sai: tỉ số là $\dfrac23$. c) Sai: $\widehat N=\widehat B$. d) Đúng: $NP=\dfrac23\cdot12=8$.

::sa
Cho $\triangle ABC$ có $AB=6$, $AC=9$, $BC=12$ và $\triangle MNP$ có $MN=4$, $MP=6$, $\widehat M=\widehat A$. Tính $NP$.
::key 8
$\triangle MNP\sim\triangle ABC$ (c.g.c) với tỉ số $\dfrac23$ nên $NP=\dfrac23\cdot12=8$.

::sa
Cho $\triangle ABC$, $D\in AC$ với $\widehat{ABD}=\widehat{ACB}$, $AB=10$, $AD=5$. Tính $AC$.
::key 20
$AB^2=AD\cdot AC$ nên $AC=\dfrac{100}{5}=20$.
:::
