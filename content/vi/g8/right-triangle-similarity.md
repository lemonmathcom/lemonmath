---
title: Các trường hợp đồng dạng của hai tam giác vuông
description: Nhận biết hai tam giác vuông đồng dạng qua góc nhọn, hai cạnh góc vuông, cạnh huyền và cạnh góc vuông; vận dụng để tính độ dài và đo chiều cao.
minutes: 20
---

:::goals
- Phát biểu và vận dụng ba trường hợp đồng dạng của hai tam giác vuông.
- Chứng minh hai tam giác vuông đồng dạng và viết đúng các cặp đỉnh tương ứng.
- Dùng tam giác vuông đồng dạng để tính độ dài, chiều cao và khoảng cách trong thực tế.
- Nhận ra các tam giác vuông đồng dạng khi kẻ đường cao ứng với cạnh huyền.
:::

Giả sử Nam cao $1{,}6$ m đứng cạnh một cây xanh trong sân trường. Cùng lúc đó, bóng của Nam trên mặt đất dài $2$ m còn bóng của cây dài $7{,}5$ m.

Không cần trèo lên cây, bạn có tính được chiều cao của cây không? Mỗi người và mỗi cây cùng với bóng của chúng tạo thành một tam giác vuông, và hai tam giác này có "cùng hình dạng". Muốn dùng được điều đó, ta cần cách nhận biết nhanh hai tam giác vuông đồng dạng.

Tam giác bất kì cần ít nhất hai góc bằng nhau hoặc ba cạnh tỉ lệ mới đồng dạng. Tam giác vuông đã có sẵn một góc vuông, nên điều kiện cần kiểm tra ít hơn nhiều.

## Khám phá: tam giác vuông cần ít điều kiện hơn

Xét tam giác $ABC$ vuông tại $A$ có $AB=3$, $AC=4$, $BC=5$ và tam giác $DEF$ vuông tại $D$ có $DE=6$, $DF=8$, $EF=10$.

:::diagram Hai tam giác vuông $ABC$ và $DEF$
alt: Hai tam giác vuông: tam giác ABC có hai cạnh góc vuông 3 và 4, cạnh huyền 5; tam giác DEF lớn gấp đôi có hai cạnh góc vuông 6 và 8, cạnh huyền 10
point A 0,0 below-left
point B 3,0 below-right
point C 0,4 above
point D 5,0 below-left
point E 11,0 below-right
point F 5,8 above
polygon A B C
polygon D E F
right B A C
right E D F
label 1.5,-0.5 "3"
label -0.5,2 "4"
label 2,2.3 "5"
label 8,-0.5 "6"
label 4.5,4 "8"
label 8.7,4.3 "10"
:::

Ta có $\dfrac{DE}{AB}=\dfrac{6}{3}=2$, $\dfrac{DF}{AC}=\dfrac{8}{4}=2$ và $\dfrac{EF}{BC}=\dfrac{10}{5}=2$, nên $\triangle ABC\backsim\triangle DEF$ (c.c.c).

Nhưng ta không cần cả ba tỉ số. Hai cạnh góc vuông tỉ lệ ($\frac{6}{3}=\frac{8}{4}$) và hai góc vuông bằng nhau đã đủ để kết luận (c.g.c). Hơn nữa, nếu chỉ biết $DE=6$ và $EF=10$ với $\frac{10}{5}=\frac{6}{3}$, thì cạnh còn lại tự suy ra được: $DF=\sqrt{10^2-6^2}=8$. Cuối cùng, nếu hai tam giác vuông có một góc nhọn bằng nhau thì góc nhọn còn lại cũng bằng nhau, vì cả hai cặp đều có tổng bằng $90^\circ$.

:::theorem Các trường hợp đồng dạng của hai tam giác vuông
Cho hai tam giác vuông $ABC$ (vuông tại $A$) và $A'B'C'$ (vuông tại $A'$). Hai tam giác đồng dạng nếu thoả mãn một trong ba điều kiện sau:
1. Một góc nhọn của tam giác này bằng một góc nhọn của tam giác kia, chẳng hạn $\widehat{B}=\widehat{B'}$.
2. Hai cạnh góc vuông của tam giác này tỉ lệ với hai cạnh góc vuông của tam giác kia: $\dfrac{A'B'}{AB}=\dfrac{A'C'}{AC}$.
3. Cạnh huyền và một cạnh góc vuông của tam giác này tỉ lệ với cạnh huyền và một cạnh góc vuông của tam giác kia: $\dfrac{B'C'}{BC}=\dfrac{A'B'}{AB}$.
:::

**Vì sao?** Với điều kiện 1, hai tam giác có $\widehat{A}=\widehat{A'}=90^\circ$ và $\widehat{B}=\widehat{B'}$, nên đồng dạng theo trường hợp g.g. Với điều kiện 2, hai cạnh tỉ lệ và góc xen giữa bằng nhau ($90^\circ$), nên đồng dạng theo trường hợp c.g.c.

Với điều kiện 3, đặt $k=\dfrac{B'C'}{BC}=\dfrac{A'B'}{AB}$. Theo định lí Pythagore, ta có
$$A'C'^2=B'C'^2-A'B'^2=k^2BC^2-k^2AB^2=k^2(BC^2-AB^2)=k^2AC^2.$$
Suy ra $A'C'=k\cdot AC$, tức là ba cạnh tỉ lệ. Vậy điều kiện 3 thực chất là trường hợp c.c.c, nhưng chỉ cần biết hai cặp cạnh vì cặp thứ ba đã được định lí Pythagore "tự động" cho ta.

Lưu ý rằng chỉ một cặp cạnh tỉ lệ thì chưa đủ: hai tam giác vuông có một cạnh góc vuông gấp đôi nhau vẫn có thể có hình dạng rất khác nhau.

## Ví dụ

Ta bắt đầu với việc nhận biết các cặp tam giác vuông đồng dạng.

:::example Nhận biết hai tam giác vuông đồng dạng
Trong các cặp tam giác vuông sau, cặp nào đồng dạng? Giải thích.

a) $\triangle ABC$ vuông tại $A$ có $\widehat{B}=35^\circ$ và $\triangle DEF$ vuông tại $D$ có $\widehat{F}=55^\circ$.

b) $\triangle MNP$ vuông tại $M$ có $MN=3$, $MP=4$ và $\triangle M'N'P'$ vuông tại $M'$ có $M'N'=9$, $M'P'=12$.

c) $\triangle ABC$ vuông tại $A$ có $BC=10$, $AB=6$ và $\triangle DEF$ vuông tại $D$ có $EF=15$, $DE=9$.

d) $\triangle ABC$ vuông tại $A$ có $AB=2$, $AC=3$ và $\triangle DEF$ vuông tại $D$ có $DE=4$, $DF=7$.

**Lời giải.** a) Vì tam giác $ABC$ vuông tại $A$ nên $\widehat{C}=90^\circ-35^\circ=55^\circ$. Ta có $\widehat{C}=\widehat{F}=55^\circ$ nên $\triangle ABC\backsim\triangle DEF$ (hai tam giác vuông có một góc nhọn bằng nhau).

b) Ta có $\dfrac{M'N'}{MN}=\dfrac{9}{3}=3$ và $\dfrac{M'P'}{MP}=\dfrac{12}{4}=3$ nên $\triangle MNP\backsim\triangle M'N'P'$ (hai cạnh góc vuông tỉ lệ).

c) Ta có $\dfrac{EF}{BC}=\dfrac{15}{10}=\dfrac32$ và $\dfrac{DE}{AB}=\dfrac{9}{6}=\dfrac32$ nên $\triangle ABC\backsim\triangle DEF$ (cạnh huyền và cạnh góc vuông tỉ lệ).

d) Ta có $\dfrac{DE}{AB}=\dfrac42=2$ nhưng $\dfrac{DF}{AC}=\dfrac73\neq2$. Thử cách ghép khác: $\dfrac{DE}{AC}=\dfrac43$ và $\dfrac{DF}{AB}=\dfrac72$, hai tỉ số này cũng khác nhau. Vậy hai tam giác không đồng dạng.

Vậy các cặp a), b), c) đồng dạng; cặp d) không đồng dạng.
:::

Khi đã đồng dạng, ta tính được mọi tỉ số, kể cả tỉ số chu vi.

:::example Tỉ số đồng dạng và chu vi
Cho tam giác $ABC$ vuông tại $A$ có $AB=9$, $AC=12$ và tam giác $A'B'C'$ vuông tại $A'$ có $A'B'=3$, $A'C'=4$. Chứng minh $\triangle A'B'C'\backsim\triangle ABC$, rồi so sánh tỉ số đồng dạng với tỉ số chu vi.

**Lời giải.** Ta có $\dfrac{A'B'}{AB}=\dfrac39=\dfrac13$ và $\dfrac{A'C'}{AC}=\dfrac4{12}=\dfrac13$ nên $\triangle A'B'C'\backsim\triangle ABC$ với tỉ số đồng dạng $\dfrac13$.

Theo định lí Pythagore, ta có
$$BC=\sqrt{9^2+12^2}=15,\qquad B'C'=\sqrt{3^2+4^2}=5.$$
Chu vi tam giác $ABC$ là $9+12+15=36$, chu vi tam giác $A'B'C'$ là $3+4+5=12$. Do đó $\dfrac{12}{36}=\dfrac13$.

Vậy tỉ số chu vi của hai tam giác bằng tỉ số đồng dạng $\dfrac13$.
:::

Bây giờ ta dùng trường hợp cạnh huyền – cạnh góc vuông trong một tình huống đời thường.

:::example Hai chiếc thang
Chiếc thang thứ nhất dài $5$ m tựa vào tường, đầu thang cao $4$ m so với mặt đất. Chiếc thang thứ hai dài $7{,}5$ m, tựa vào tường sao cho đầu thang cao $6$ m. Chân thang thứ hai cách tường bao nhiêu mét? Hai chiếc thang có nghiêng so với mặt đất cùng một góc không?

**Lời giải.** Gọi $A$ là chân tường, $B$ là đầu thang, $C$ là chân thang thứ nhất; $A'$, $B'$, $C'$ là các điểm tương ứng của thang thứ hai. Các tam giác $ABC$ và $A'B'C'$ vuông tại $A$ và $A'$ (tường vuông góc với mặt đất), có $BC=5$, $AB=4$, $B'C'=7{,}5$, $A'B'=6$.

Ta có $\dfrac{B'C'}{BC}=\dfrac{7{,}5}{5}=\dfrac32$ và $\dfrac{A'B'}{AB}=\dfrac64=\dfrac32$ nên $\triangle A'B'C'\backsim\triangle ABC$ (cạnh huyền và cạnh góc vuông tỉ lệ).

Suy ra $\widehat{C'}=\widehat{C}$ và $\dfrac{A'C'}{AC}=\dfrac32$. Vì $AC=\sqrt{5^2-4^2}=3$ nên $A'C'=\dfrac32\cdot3=4{,}5$.

Vậy chân thang thứ hai cách tường $4{,}5$ m và hai chiếc thang nghiêng so với mặt đất cùng một góc.

**Kiểm tra.** $7{,}5^2-6^2=56{,}25-36=20{,}25=4{,}5^2$.
:::

Ba trường hợp trên còn cho ta một phát hiện đẹp khi kẻ đường cao từ đỉnh góc vuông.

:::diagram Đường cao $AH$ chia tam giác vuông $ABC$ thành hai tam giác vuông
alt: Tam giác ABC vuông tại A, đường cao AH hạ từ A xuống cạnh huyền BC, chân đường cao H nằm giữa B và C
point B 0,0 below-left
point C 10,0 below-right
point H 3.6,0 below
point A 3.6,4.8 above
polygon A B C
segment A H
right B A C
right A H B
:::

:::example Đường cao ứng với cạnh huyền
Cho tam giác $ABC$ vuông tại $A$ có $AB=6$, $AC=8$. Kẻ đường cao $AH$. Chứng minh $\triangle HBA\backsim\triangle ABC$, rồi tính $BH$ và $AH$.

**Lời giải.** Xét hai tam giác vuông $HBA$ (vuông tại $H$) và $ABC$ (vuông tại $A$), chúng có chung góc nhọn $\widehat{B}$. Do đó $\triangle HBA\backsim\triangle ABC$ (hai tam giác vuông có một góc nhọn bằng nhau), với các cặp đỉnh $H\leftrightarrow A$, $B\leftrightarrow B$, $A\leftrightarrow C$.

Theo định lí Pythagore, $BC=\sqrt{6^2+8^2}=10$. Từ sự đồng dạng, ta có
$$\frac{HB}{AB}=\frac{HA}{AC}=\frac{BA}{BC}=\frac{6}{10}.$$
Suy ra $BH=\dfrac{6\cdot6}{10}=3{,}6$ và $AH=\dfrac{8\cdot6}{10}=4{,}8$.

Vậy $BH=3{,}6$ và $AH=4{,}8$.

**Kiểm tra.** Tương tự, $CH=\dfrac{8\cdot8}{10}=6{,}4$ và $BH+CH=3{,}6+6{,}4=10=BC$.
:::

Cuối cùng, ta quay lại câu hỏi ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::diagram Người và cây cùng thời điểm có bóng trên mặt đất
alt: Hai tam giác vuông trên mặt đất phẳng: người cao 1,6 m có bóng dài 2 m, cây có bóng dài 7,5 m; các tia nắng song song nên hai góc ở đầu bóng bằng nhau
point A 0,0 below
point B 0,1.6 above
point C 2,0 below
point D 4,0 below
point E 4,6 above
point F 11.5,0 below
segment A B
segment A C
segment B C
segment C D
segment D E
segment D F
segment E F
right B A C
right E D F
angle B C A "α"
angle E F D "α"
label -0.6,0.8 "1,6"
label 1,-0.6 "2"
label 3.4,3 "h"
label 7.7,-0.6 "7,5"
:::

:::example Chiều cao của cây
Cùng một thời điểm, Nam cao $1{,}6$ m có bóng dài $2$ m trên mặt đất, còn cây có bóng dài $7{,}5$ m. Tính chiều cao của cây.

**Lời giải.**

*Hiểu đề.* Ta biết chiều cao của Nam và độ dài hai bóng; cần tìm chiều cao $h$ của cây. Ta coi mặt đất phẳng, Nam và cây thẳng đứng, các tia nắng song song.

*Tìm cách giải.* Người, cây và bóng của chúng tạo thành hai tam giác vuông. Các tia nắng song song nên hai góc ở đầu bóng bằng nhau (đồng vị), do đó hai tam giác đồng dạng theo trường hợp góc nhọn.

*Giải.* Gọi $A$, $B$, $C$ là chân, đỉnh đầu của Nam và đầu bóng của Nam; $D$, $E$, $F$ là chân cây, ngọn cây và đầu bóng của cây. Ta có $\widehat{A}=\widehat{D}=90^\circ$ và $\widehat{C}=\widehat{F}$ nên $\triangle ABC\backsim\triangle DEF$. Suy ra
$$\frac{AB}{DE}=\frac{AC}{DF}\Rightarrow\frac{1{,}6}{h}=\frac{2}{7{,}5}\Rightarrow h=\frac{1{,}6\cdot7{,}5}{2}=6.$$

Vậy cây cao $6$ m.

*Nhìn lại.* Có cách khác không? Ở thời điểm này, chiều cao luôn bằng $\dfrac{1{,}6}{2}=0{,}8$ lần độ dài bóng, nên cây cao $0{,}8\cdot7{,}5=6$ m, cùng kết quả. Kết quả có hợp lí không? Bóng cây dài gấp $7{,}5:2=3{,}75$ lần bóng người và cây cao gấp $6:1{,}6=3{,}75$ lần người, nên hợp lí. Nếu bóng cây dài $9$ m thì cây cao $\dfrac{1{,}6\cdot9}{2}=7{,}2$ m. Cách đo chỉ đúng khi hai bóng đo cùng một thời điểm và mặt đất phẳng.
:::

:::warning Những sai lầm thường gặp
- **Ghép sai cạnh.** Sai: với hai tam giác vuông có cạnh góc vuông $3$, $4$ và $8$, $6$, viết $\dfrac38$ và $\dfrac46$ rồi kết luận không đồng dạng. Lí do sai: đã ghép cạnh ngắn với cạnh dài. Đúng: ghép cạnh ngắn với cạnh ngắn, $\dfrac36=\dfrac48=\dfrac12$, nên hai tam giác đồng dạng.
- **Chỉ có một cặp cạnh tỉ lệ.** Sai: hai tam giác vuông có một cạnh góc vuông $3$ và $6$ nên đồng dạng. Lí do sai: cạnh góc vuông còn lại có thể là $4$ và $5$, khi đó $\dfrac63=2$ nhưng $\dfrac54\neq2$. Đúng: cần hai cặp cạnh tỉ lệ, hoặc một cặp góc nhọn bằng nhau.
- **Dùng trường hợp cạnh huyền – cạnh góc vuông khi chưa có góc vuông.** Sai: tam giác $ABC$ có $AB=3$, $BC=5$, $AC=6$ và tam giác $A'B'C'$ có $A'B'=6$, $B'C'=10$, $A'C'=7$; vì $\dfrac{6}{3}=\dfrac{10}{5}$ nên đồng dạng. Lí do sai: hai tam giác này không vuông, và $\dfrac{A'C'}{AC}=\dfrac76\neq2$. Đúng: phải kiểm tra có góc vuông trước khi áp dụng.
:::

**Kết nối.** Bài này dựa trên ba trường hợp đồng dạng g.g, c.g.c, c.c.c của tam giác bất kì và định lí Pythagore. Nó chuẩn bị cho bài hệ thức lượng trong tam giác vuông ở lớp 9: các tam giác $HBA$, $HAC$ và $ABC$ ở ví dụ về đường cao chính là nguồn gốc của những hệ thức đó.

## Thuật ngữ

:::terms
- tam giác đồng dạng | similar triangles
- tam giác vuông | right-angled triangle
- cạnh huyền | hypotenuse
- cạnh góc vuông | leg (side next to the right angle)
- góc nhọn | acute angle
- tỉ số đồng dạng | similarity ratio
- đường cao | altitude
- tỉ lệ | proportional
- chu vi | perimeter
:::

## Tóm tắt

- Hai tam giác vuông đồng dạng nếu có một góc nhọn bằng nhau.
- Hai tam giác vuông đồng dạng nếu hai cạnh góc vuông tỉ lệ: $\dfrac{A'B'}{AB}=\dfrac{A'C'}{AC}$.
- Hai tam giác vuông đồng dạng nếu cạnh huyền và một cạnh góc vuông tỉ lệ: $\dfrac{B'C'}{BC}=\dfrac{A'B'}{AB}$. Cạnh còn lại tỉ lệ nhờ định lí Pythagore.
- Đường cao ứng với cạnh huyền chia tam giác vuông thành hai tam giác vuông đồng dạng với nó.
- Tỉ số chu vi của hai tam giác đồng dạng bằng tỉ số đồng dạng. Luôn ghép đúng các đỉnh tương ứng và kiểm tra có góc vuông.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $\widehat{B}=50^\circ$ và tam giác $DEF$ vuông tại $D$ có $\widehat{F}=40^\circ$. Chứng minh $\triangle ABC\backsim\triangle DEF$.

::hint
**Kiến thức:** hai tam giác vuông có một góc nhọn bằng nhau thì đồng dạng.

**Gợi ý các bước:**
1. Tính $\widehat{C}$ trong tam giác $ABC$.
2. So sánh $\widehat{C}$ với $\widehat{F}$.

::solution
Xét tam giác $ABC$ vuông tại $A$. Tổng hai góc nhọn bằng $90^\circ$ nên $\widehat{B}+\widehat{C}=90^\circ$, suy ra
$$\widehat{C}=90^\circ-\widehat{B}=90^\circ-50^\circ=40^\circ.$$

Tam giác $DEF$ vuông tại $D$ có $\widehat{F}=40^\circ$. Do đó $\widehat{C}=\widehat{F}=40^\circ$.

Hai tam giác vuông $ABC$ và $DEF$ có một góc nhọn bằng nhau ($\widehat{C}=\widehat{F}$) nên $\triangle ABC\backsim\triangle DEF$ (trường hợp đồng dạng của hai tam giác vuông). Các đỉnh tương ứng là $A\leftrightarrow D$, $B\leftrightarrow E$, $C\leftrightarrow F$; ngoài ra $\widehat{E}=90^\circ-40^\circ=50^\circ=\widehat{B}$.

Vậy $\triangle ABC\backsim\triangle DEF$.

**Đáp số.** $\triangle ABC\backsim\triangle DEF$ với $A\leftrightarrow D$, $B\leftrightarrow E$, $C\leftrightarrow F$.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $AB=6$, $AC=8$ và tam giác $MNP$ vuông tại $M$ có $MN=9$, $MP=12$. Chứng minh $\triangle ABC\backsim\triangle MNP$ và tính $NP$.

::hint
**Kiến thức:** hai cạnh góc vuông tỉ lệ thì hai tam giác vuông đồng dạng.

**Gợi ý các bước:**
1. Lập các tỉ số $\dfrac{MN}{AB}$ và $\dfrac{MP}{AC}$.
2. Tính $BC$ rồi dùng tỉ số đồng dạng để tính $NP$.

::solution
Xét hai tam giác vuông $ABC$ (vuông tại $A$) và $MNP$ (vuông tại $M$). Ta có
$$\frac{MN}{AB}=\frac96=\frac32,\qquad \frac{MP}{AC}=\frac{12}{8}=\frac32.$$

Hai cạnh góc vuông của tam giác này tỉ lệ với hai cạnh góc vuông của tam giác kia nên $\triangle ABC\backsim\triangle MNP$ theo tỉ số $\dfrac32$ (với $A\leftrightarrow M$, $B\leftrightarrow N$, $C\leftrightarrow P$).

Tính $NP$. Theo định lí Pythagore trong tam giác $ABC$ vuông tại $A$,
$$BC=\sqrt{AB^2+AC^2}=\sqrt{6^2+8^2}=\sqrt{100}=10.$$

Vì hai tam giác đồng dạng theo tỉ số $\dfrac32$ nên $\dfrac{NP}{BC}=\dfrac32$, suy ra
$$NP=\frac32\cdot10=15.$$

Kiểm tra: trong tam giác $MNP$ vuông tại $M$, $NP=\sqrt{9^2+12^2}=\sqrt{225}=15$.

Vậy $\triangle ABC\backsim\triangle MNP$ và $NP=15$.

**Đáp số.** $NP=15$.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $BC=13$, $AB=5$ và tam giác $DEF$ vuông tại $D$ có $EF=39$, $DE=15$. Chứng minh hai tam giác đồng dạng và tính $DF$.

::hint
**Kiến thức:** cạnh huyền và một cạnh góc vuông tỉ lệ thì hai tam giác vuông đồng dạng.

**Gợi ý các bước:**
1. So sánh $\dfrac{EF}{BC}$ với $\dfrac{DE}{AB}$.
2. Tính $AC$ rồi suy ra $DF$.

::solution
Xét hai tam giác vuông $DEF$ (vuông tại $D$, cạnh huyền $EF$) và $ABC$ (vuông tại $A$, cạnh huyền $BC$). Ta có
$$\frac{EF}{BC}=\frac{39}{13}=3,\qquad \frac{DE}{AB}=\frac{15}{5}=3.$$

Cạnh huyền và một cạnh góc vuông của tam giác này tỉ lệ với cạnh huyền và một cạnh góc vuông của tam giác kia nên $\triangle DEF\backsim\triangle ABC$ theo tỉ số $3$ (với $D\leftrightarrow A$, $E\leftrightarrow B$, $F\leftrightarrow C$).

Tính $DF$. Theo định lí Pythagore trong tam giác $ABC$ vuông tại $A$,
$$AC=\sqrt{BC^2-AB^2}=\sqrt{13^2-5^2}=\sqrt{144}=12.$$

Vì $\dfrac{DF}{AC}=3$ nên
$$DF=3\cdot12=36.$$

Kiểm tra: $DF=\sqrt{EF^2-DE^2}=\sqrt{39^2-15^2}=\sqrt{1296}=36$.

Vậy hai tam giác đồng dạng và $DF=36$.

**Đáp số.** $DF=36$.
:::

:::exercise
Nhớ lại bài hai tam giác đồng dạng. Tam giác $ABC$ đồng dạng với tam giác $A'B'C'$ theo tỉ số $\dfrac25$ và chu vi tam giác $ABC$ bằng $24$ cm. Tính chu vi tam giác $A'B'C'$.

::hint
**Kiến thức:** tỉ số chu vi của hai tam giác đồng dạng bằng tỉ số đồng dạng.

**Gợi ý các bước:**
1. Viết $\dfrac{\text{chu vi }ABC}{\text{chu vi }A'B'C'}=\dfrac25$.
2. Tính chu vi $A'B'C'$.

::solution
Gọi $p$ (cm) là chu vi tam giác $A'B'C'$, $p>0$.

Hai tam giác đồng dạng thì tỉ số hai chu vi bằng tỉ số đồng dạng. Tam giác $ABC$ đồng dạng với tam giác $A'B'C'$ theo tỉ số $\dfrac25$ và chu vi tam giác $ABC$ bằng $24$ cm, nên
$$\frac{24}{p}=\frac25.$$

Suy ra
$$p=\frac{24\cdot5}{2}=60.$$

Giá trị $p=60>0$ thoả mãn điều kiện. Kiểm tra: $\dfrac{24}{60}=\dfrac25$.

Vậy chu vi tam giác $A'B'C'$ là $60$ cm.

**Đáp số.** $60$ cm.
:::

:::exercise
Cùng một thời điểm, một chiếc cọc thẳng đứng cao $1{,}5$ m có bóng dài $1{,}2$ m, còn cột cờ ở sân trường có bóng dài $9{,}6$ m. Tính chiều cao của cột cờ.

::hint
**Kiến thức:** người hay vật thẳng đứng cùng bóng của nó tạo thành tam giác vuông; các tia nắng song song nên hai góc ở đầu bóng bằng nhau.

**Gợi ý các bước:**
1. Gọi $h$ là chiều cao cột cờ và lập hai tam giác vuông đồng dạng.
2. Lập tỉ lệ thức rồi tính $h$.

::solution
Gọi $h$ (m) là chiều cao của cột cờ, $h>0$.

Cùng một thời điểm các tia nắng song song với nhau nên chúng tạo với mặt đất cùng một góc nhọn. Cọc và cột cờ đều vuông góc với mặt đất. Do đó hai tam giác vuông (cọc với bóng của cọc, cột cờ với bóng của cột cờ) có một góc nhọn bằng nhau nên đồng dạng.

Các cạnh góc vuông tương ứng tỉ lệ: chiều cao cọc so với chiều cao cột cờ bằng bóng cọc so với bóng cột cờ, tức là
$$\frac{1{,}5}{h}=\frac{1{,}2}{9{,}6}.$$

Suy ra
$$h=\frac{1{,}5\cdot9{,}6}{1{,}2}=\frac{14{,}4}{1{,}2}=12.$$

Kiểm tra: $\dfrac{1{,}5}{12}=0{,}125=\dfrac{1{,}2}{9{,}6}$.

Vậy cột cờ cao $12$ m.

**Đáp số.** $12$ m.
:::

:::exercise
Một đoạn dốc thứ nhất có phương nằm ngang dài $2{,}4$ m, độ cao $1$ m và mặt dốc dài $2{,}6$ m. Đoạn dốc thứ hai có mặt dốc dài $6{,}5$ m và độ cao $2{,}5$ m. Chứng minh hai đoạn dốc nghiêng cùng một góc so với mặt phẳng ngang và tính độ dài phần nằm ngang của đoạn dốc thứ hai.

::hint
**Kiến thức:** mỗi đoạn dốc cùng độ cao và phần nằm ngang tạo thành một tam giác vuông; dùng trường hợp cạnh huyền – cạnh góc vuông.

**Gợi ý các bước:**
1. So sánh tỉ số hai mặt dốc với tỉ số hai độ cao.
2. Dùng tỉ số đồng dạng để tính phần nằm ngang.

::solution
Xét tam giác $ABC$ vuông tại $A$ biểu diễn đoạn dốc thứ nhất, với $AC=2{,}4$ (phần nằm ngang), $AB=1$ (độ cao), $BC=2{,}6$ (mặt dốc). Xét tam giác $A'B'C'$ vuông tại $A'$ biểu diễn đoạn dốc thứ hai, với $A'B'=2{,}5$ (độ cao), $B'C'=6{,}5$ (mặt dốc). Góc nghiêng của mỗi đoạn dốc so với mặt phẳng ngang là góc ở đỉnh $C$ (và $C'$).

Hai tam giác vuông có
$$\frac{B'C'}{BC}=\frac{6{,}5}{2{,}6}=2{,}5,\qquad \frac{A'B'}{AB}=\frac{2{,}5}{1}=2{,}5.$$

Cạnh huyền và một cạnh góc vuông tỉ lệ nên $\triangle A'B'C'\backsim\triangle ABC$ theo tỉ số $2{,}5$. Suy ra $\widehat{C'}=\widehat{C}$, tức là hai đoạn dốc nghiêng cùng một góc so với mặt phẳng ngang.

Tính phần nằm ngang của đoạn dốc thứ hai. Từ $\dfrac{A'C'}{AC}=2{,}5$ ta có
$$A'C'=2{,}5\cdot2{,}4=6.$$

Kiểm tra: $A'C'=\sqrt{B'C'^2-A'B'^2}=\sqrt{6{,}5^2-2{,}5^2}=\sqrt{36}=6$.

Vậy hai đoạn dốc nghiêng cùng một góc và phần nằm ngang của đoạn dốc thứ hai dài $6$ m.

**Đáp số.** Cùng một góc nghiêng; phần nằm ngang dài $6$ m.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $AB=15$, $AC=20$. Kẻ đường cao $AH$. Chứng minh $\triangle HBA\backsim\triangle ABC$ và tính $BC$, $BH$, $AH$.

::hint
**Kiến thức:** hai tam giác vuông $HBA$ và $ABC$ có chung góc nhọn $\widehat{B}$.

**Gợi ý các bước:**
1. Tính $BC$ bằng định lí Pythagore.
2. Từ $\dfrac{HB}{AB}=\dfrac{HA}{AC}=\dfrac{BA}{BC}$ tính $BH$ và $AH$.

::solution
Chứng minh $\triangle HBA\backsim\triangle ABC$. Xét hai tam giác vuông $HBA$ (vuông tại $H$) và $ABC$ (vuông tại $A$). Hai tam giác có chung góc $\widehat{B}$ nên $\triangle HBA\backsim\triangle ABC$ (với $H\leftrightarrow A$, $B\leftrightarrow B$, $A\leftrightarrow C$).

Tính $BC$. Theo định lí Pythagore trong tam giác $ABC$ vuông tại $A$,
$$BC=\sqrt{AB^2+AC^2}=\sqrt{15^2+20^2}=\sqrt{625}=25.$$

Tính $BH$ và $AH$. Từ $\triangle HBA\backsim\triangle ABC$, các cạnh tương ứng tỉ lệ:
$$\frac{HB}{AB}=\frac{HA}{AC}=\frac{BA}{BC},\ \text{tức là}\ \frac{HB}{15}=\frac{HA}{20}=\frac{15}{25}.$$

Suy ra
$$BH=\frac{15\cdot15}{25}=9,\qquad AH=\frac{20\cdot15}{25}=12.$$

Kiểm tra: $AH\cdot BC=12\cdot25=300=15\cdot20=AB\cdot AC$.

Vậy $BC=25$, $BH=9$, $AH=12$.

**Đáp số.** $BC=25$, $BH=9$, $AH=12$.
:::

:::exercise
Nam đứng cách chân một cột đèn $10$ m. Mắt Nam cách mặt đất $1{,}6$ m và tia ngắm tới đỉnh cột tạo với phương nằm ngang góc $45^\circ$. Tính chiều cao của cột đèn.

::hint
**Kiến thức:** tam giác vuông có một góc nhọn bằng $45^\circ$ thì có góc nhọn còn lại cũng bằng $45^\circ$, nên là tam giác vuông cân.

**Gợi ý các bước:**
1. Gọi $E$ là mắt Nam, $H$ là điểm trên cột ngang tầm mắt, $M$ là đỉnh cột. Xét tam giác $EHM$.
2. Tính $HM$ rồi cộng với độ cao của mắt.

::solution
Gọi $E$ là vị trí mắt Nam, $M$ là đỉnh cột đèn và $H$ là điểm trên cột đèn ngang tầm mắt. Khi đó $EH=10$ m nằm ngang, $HM$ thẳng đứng nên tam giác $EHM$ vuông tại $H$, và tia ngắm $EM$ tạo với phương nằm ngang góc $\widehat{E}=45^\circ$. Gọi $h$ (m) là chiều cao của cột đèn; điểm $H$ cách mặt đất $1{,}6$ m (bằng độ cao của mắt).

Trong tam giác $EHM$ vuông tại $H$ có $\widehat{E}=45^\circ$ nên
$$\widehat{M}=90^\circ-45^\circ=45^\circ.$$

Tam giác $EHM$ có $\widehat{E}=\widehat{M}$ nên vuông cân tại $H$. Do đó
$$HM=EH=10\ \text{(m)}.$$

Chiều cao cột đèn bằng $HM$ cộng độ cao của $H$ so với mặt đất:
$$h=HM+1{,}6=10+1{,}6=11{,}6\ \text{(m)}.$$

Vậy cột đèn cao $11{,}6$ m.

**Đáp số.** $11{,}6$ m.
:::

:::exercise Thử thách
Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$. Chứng minh $AB\cdot AC=AH\cdot BC$. Áp dụng: tính $AH$ khi $AB=9$, $AC=12$.

::hint
**Kiến thức:** $\triangle HBA\backsim\triangle ABC$ cho các tỉ số bằng nhau.

**Gợi ý các bước:**
1. Viết $\dfrac{HA}{AC}=\dfrac{BA}{BC}$ từ sự đồng dạng.
2. Nhân chéo, rồi thay số.

::solution
Chứng minh $AB\cdot AC=AH\cdot BC$. Xét hai tam giác vuông $HBA$ (vuông tại $H$) và $ABC$ (vuông tại $A$). Hai tam giác có chung góc $\widehat{B}$ nên $\triangle HBA\backsim\triangle ABC$ (với $H\leftrightarrow A$, $B\leftrightarrow B$, $A\leftrightarrow C$).

Các cạnh tương ứng tỉ lệ nên
$$\frac{HA}{AC}=\frac{BA}{BC}.$$

Nhân chéo, ta được
$$AH\cdot BC=AB\cdot AC.$$

Áp dụng với $AB=9$, $AC=12$. Theo định lí Pythagore trong tam giác $ABC$ vuông tại $A$,
$$BC=\sqrt{9^2+12^2}=\sqrt{225}=15.$$

Từ hệ thức vừa chứng minh,
$$AH=\frac{AB\cdot AC}{BC}=\frac{9\cdot12}{15}=7{,}2.$$

Kiểm tra bằng diện tích: $\dfrac12\cdot9\cdot12=54=\dfrac12\cdot15\cdot7{,}2$.

Vậy $AB\cdot AC=AH\cdot BC$ và khi $AB=9$, $AC=12$ thì $AH=7{,}2$.

**Đáp số.** $AH=7{,}2$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Cho tam giác $ABC$ vuông tại $A$ có $\widehat{B}=40^\circ$ và tam giác $DEF$ vuông tại $D$ có $\widehat{E}=50^\circ$. Khẳng định nào sau đây đúng?
A. $\triangle ABC\backsim\triangle DEF$.
B. $\triangle ABC\backsim\triangle EDF$.
C. $\triangle ABC\backsim\triangle DFE$.
D. Hai tam giác không đồng dạng.
::key C
$\widehat{C}=50^\circ=\widehat{E}$ và $\widehat{B}=40^\circ=\widehat{F}$, nên $A\leftrightarrow D$, $B\leftrightarrow F$, $C\leftrightarrow E$. Phương án A ghép sai $B$ với $E$; phương án D cho rằng phải trùng tên góc.

::mc VD
Cho tam giác $ABC$ vuông tại $A$ có $AB=6$, $BC=10$ và tam giác $MNP$ vuông tại $M$ có $MN=9$, $NP=15$. Độ dài $MP$ bằng
A. $8$.
B. $13$.
C. $18$.
D. $12$.
::key D
$AC=8$ và tỉ số đồng dạng là $\dfrac{15}{10}=\dfrac32$, nên $MP=\dfrac32\cdot8=12$. Phương án A giữ nguyên $AC$, B cộng thêm hiệu $15-10=5$, C nhân đôi $9$.

::mc VD
Cho tam giác $ABC$ vuông tại $A$ có $AB=3$, $BC=5$ và tam giác $DEF$ vuông tại $D$ có $DE=12$, $EF=20$. Độ dài $DF$ bằng
A. $16$.
B. $4$.
C. $8$.
D. $\sqrt{544}$.
::key A
Tỉ số là $\dfrac{20}{5}=\dfrac{12}{3}=4$ và $AC=4$, nên $DF=4\cdot4=16$. Phương án B giữ nguyên $AC$, C lấy $EF-DE$, D cộng bình phương hai cạnh thay vì trừ.

::mc VD
Cho tam giác $ABC$ vuông tại $A$ có $AB=6$, $AC=8$ và đường cao $AH$. Độ dài $BH$ bằng
A. $4{,}8$.
B. $3{,}6$.
C. $6{,}4$.
D. $5$.
::key B
$BC=10$ và $\triangle HBA\backsim\triangle ABC$ cho $BH=\dfrac{AB^2}{BC}=\dfrac{36}{10}=3{,}6$. Phương án A là $AH$, C là $CH$.

::tf TH VD VD VD
Cho tam giác $ABC$ vuông tại $A$ có $AB=9$, $AC=12$ và đường cao $AH$. Xét tính đúng sai của các mệnh đề sau:
a) $\triangle HBA\backsim\triangle ACB$.
b) $BH=5{,}4$.
c) $AH=7{,}2$.
d) $CH=8{,}4$.
::key S Đ Đ S
a) Sai: đúng phải là $\triangle HBA\backsim\triangle ABC$ (ghép $H\leftrightarrow A$, $B\leftrightarrow B$, $A\leftrightarrow C$). b) Đúng: $BC=15$, $BH=\dfrac{81}{15}=5{,}4$. c) Đúng: $AH=\dfrac{9\cdot12}{15}=7{,}2$. d) Sai: $CH=15-5{,}4=9{,}6$.

::sa VD
Cho tam giác $ABC$ vuông tại $A$ có $AB=8$, $BC=17$ và tam giác $DEF$ vuông tại $D$ có $DE=24$, $EF=51$. Tính chu vi tam giác $DEF$.
::key 120
$AC=\sqrt{17^2-8^2}=15$, tỉ số đồng dạng là $\dfrac{51}{17}=3$ nên $DF=45$. Chu vi là $24+51+45=120$.

::sa VD
Nam đứng cách chân một cột cờ $12$ m, mắt cách mặt đất $1{,}5$ m và nhìn thấy đỉnh cột dưới góc $45^\circ$ so với phương nằm ngang. Tính chiều cao của cột cờ (đơn vị: mét).
::key 13,5
Tam giác vuông có góc nhọn $45^\circ$ là tam giác vuông cân nên phần cột phía trên tầm mắt cao $12$ m. Chiều cao cột là $12+1{,}5=13{,}5$.
:::
