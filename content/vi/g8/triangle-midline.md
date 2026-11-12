---
title: Đường trung bình của tam giác
description: Tìm hiểu đường trung bình của tam giác, tính chất song song và bằng nửa cạnh thứ ba, rồi tính độ dài, chứng minh và giải bài toán thực tế.
minutes: 35
---

:::goals
- Nhận biết đường trung bình của tam giác theo định nghĩa.
- Phát biểu và chứng minh tính chất đường trung bình: song song với cạnh thứ ba và bằng nửa cạnh đó.
- Biết dấu hiệu: đường thẳng đi qua trung điểm một cạnh và song song với cạnh thứ hai thì đi qua trung điểm cạnh thứ ba.
- Dùng đường trung bình để tính độ dài, chứng minh và giải bài toán thực tế.
:::

Giả sử hai điểm $A$ và $B$ nằm ở hai đầu của một cái ao, nên ta không thể căng thước đo thẳng từ $A$ đến $B$. Một người chọn điểm $C$ ở ngoài ao, lấy trung điểm $M$ của $CA$ và trung điểm $N$ của $CB$, rồi đo được $MN=18{,}5$ m.

Từ độ dài $MN$, ta có tính được khoảng cách $AB$ không? Câu trả lời nằm ở **đường trung bình của tam giác**, kết quả nối tiếp trực tiếp định lí Thalès.

## Đường trung bình của tam giác

:::definition Đường trung bình của tam giác
**Đường trung bình** của tam giác là đoạn thẳng nối trung điểm của hai cạnh của tam giác.
:::

Mỗi tam giác có ba đường trung bình. Trong tam giác $ABC$, nếu $D$ là trung điểm của $AB$ và $E$ là trung điểm của $AC$ thì $DE$ là đường trung bình ứng với cạnh $BC$.

### Khám phá: đường trung bình có tính chất gì?

Vì $D$ và $E$ là trung điểm của $AB$ và $AC$ nên $\dfrac{AD}{AB}=\dfrac12$ và $\dfrac{AE}{AC}=\dfrac12$. Hai tỉ số bằng nhau, và định lí Thalès đảo cho ta $DE\parallel BC$. Còn độ dài của $DE$ so với $BC$ thì sao? Ta thấy trên hình vẽ rằng $DE$ ngắn bằng một nửa $BC$.

:::diagram Đường trung bình $DE$ của tam giác $ABC$
alt: Tam giác ABC có D là trung điểm của AB và E là trung điểm của AC; đoạn DE song song với cạnh đáy BC, các đoạn AD, DB có một vạch và AE, EC có hai vạch
point A 0,6 above
point B -4,0 below-left
point C 5,0 below-right
point D -2,3 left
point E 2.5,3 right
polygon A B C
segment D E
mark A D 1
mark D B 1
mark A E 2
mark E C 2
:::

:::theorem Tính chất đường trung bình của tam giác
Đường trung bình của tam giác thì song song với cạnh thứ ba và bằng nửa cạnh đó.

Với tam giác $ABC$ có $D$ là trung điểm của $AB$ và $E$ là trung điểm của $AC$, ta có
$$DE\parallel BC\qquad\text{và}\qquad DE=\frac12BC.$$
:::

Vì sao? Vì $D$, $E$ là trung điểm của $AB$, $AC$ nên $\dfrac{AD}{AB}=\dfrac{AE}{AC}=\dfrac12$. Theo định lí Thalès đảo, $DE\parallel BC$.

Để tính $DE$, qua $E$ kẻ đường thẳng song song với $AB$, cắt $BC$ tại $F$. Trong tam giác $ABC$, $EF\parallel AB$ nên theo định lí Thalès, $\dfrac{CF}{CB}=\dfrac{CE}{CA}=\dfrac12$, suy ra $F$ là trung điểm của $BC$ và $BF=\dfrac12BC$. Tứ giác $DEFB$ có $DE\parallel BF$ và $EF\parallel DB$ nên là hình bình hành, do đó $DE=BF=\dfrac12BC$.

:::theorem Dấu hiệu về trung điểm
Đường thẳng đi qua trung điểm của một cạnh của tam giác và song song với cạnh thứ hai thì đi qua trung điểm của cạnh thứ ba.
:::

Vì sao? Cho tam giác $ABC$, $D$ là trung điểm của $AB$, đường thẳng qua $D$ song song với $BC$ cắt $AC$ tại $E$. Theo định lí Thalès, $\dfrac{AE}{AC}=\dfrac{AD}{AB}=\dfrac12$, nên $E$ là trung điểm của $AC$.

## Ví dụ

Ta bắt đầu với bài tính độ dài đơn giản nhất.

:::example Tính độ dài đường trung bình
Tam giác $ABC$ có $BC=14$ cm. Gọi $D$, $E$ lần lượt là trung điểm của $AB$, $AC$. Tính $DE$.

**Lời giải.** Vì $DE$ là đường trung bình của tam giác $ABC$ nên $DE=\dfrac12BC=\dfrac12\cdot14=7$ (cm). Ngoài ra $DE\parallel BC$.

Vậy $DE=7$ cm.
:::

Tiếp theo ta tính ngược từ đường trung bình.

:::example Tính cạnh thứ ba
Tam giác $ABC$ có $D$, $E$ là trung điểm của $AB$, $AC$ và $DE=5$ cm. Tính $BC$.

**Lời giải.** Vì $DE$ là đường trung bình nên $DE=\dfrac12BC$. Suy ra $BC=2DE=2\cdot5=10$ (cm).

Vậy $BC=10$ cm.
:::

Bây giờ ta xét cả ba đường trung bình.

:::example Chu vi tam giác tạo bởi ba trung điểm
Tam giác $ABC$ có $AB=10$ cm, $BC=12$ cm và $CA=8$ cm. Gọi $D$, $E$, $F$ lần lượt là trung điểm của $AB$, $BC$, $CA$. Tính chu vi tam giác $DEF$.

**Lời giải.** Các đoạn $DE$, $EF$, $FD$ là các đường trung bình của tam giác $ABC$ nên
$$DE=\frac12CA=4,\qquad EF=\frac12AB=5,\qquad FD=\frac12BC=6\ (\text{cm}).$$
Chu vi tam giác $DEF$ là $4+5+6=15$ (cm). Chu vi tam giác $ABC$ là $10+12+8=30$ cm, và $15$ đúng bằng một nửa của $30$.

Vậy chu vi tam giác $DEF$ là $15$ cm.
:::

Ta cũng dùng đường trung bình để tìm ẩn.

:::example Tìm $x$
Tam giác $ABC$ có $D$, $E$ là trung điểm của $AB$, $AC$. Biết $DE=(x+1)$ cm và $BC=(3x-1)$ cm. Tìm $x$ và tính $BC$.

**Lời giải.** Vì $DE$ là đường trung bình nên $BC=2DE$, tức là $3x-1=2(x+1)$. Suy ra $3x-1=2x+2$, nên $x=3$. Khi đó $BC=3\cdot3-1=8$ (cm) và $DE=3+1=4$ (cm), đúng bằng một nửa của $BC$.

Vậy $x=3$ và $BC=8$ cm.
:::

Bây giờ ta dùng đường trung bình để chứng minh.

:::example Trung điểm bốn cạnh của một tứ giác
Cho tứ giác $ABCD$. Gọi $E$, $F$, $G$, $H$ lần lượt là trung điểm của $AB$, $BC$, $CD$, $DA$. Chứng minh rằng $EFGH$ là hình bình hành.

**Lời giải.** Trong tam giác $ABC$, $EF$ là đường trung bình nên $EF\parallel AC$ và $EF=\dfrac12AC$. Trong tam giác $ADC$, $HG$ là đường trung bình nên $HG\parallel AC$ và $HG=\dfrac12AC$. Do đó $EF\parallel HG$ và $EF=HG$.

Tứ giác $EFGH$ có một cặp cạnh đối song song và bằng nhau nên là hình bình hành.

Vậy $EFGH$ là hình bình hành.
:::

Cuối cùng là bài toán về cái ao ở đầu bài.

:::example Đo khoảng cách qua cái ao (Vận dụng)
Giả sử hai điểm $A$, $B$ ở hai đầu một cái ao. Chọn điểm $C$ ngoài ao, gọi $M$, $N$ là trung điểm của $CA$, $CB$. Đo được $MN=18{,}5$ m. Tính khoảng cách $AB$.

**Lời giải.**

*Hiểu đề.* Ta không đo trực tiếp được $AB$, nhưng đo được $MN$ nằm trên đất liền. Cần tìm quan hệ giữa $MN$ và $AB$.

*Tìm cách giải.* $M$, $N$ là trung điểm của hai cạnh $CA$, $CB$ của tam giác $CAB$, nên $MN$ là đường trung bình ứng với cạnh $AB$.

*Giải.* Vì $MN$ là đường trung bình của tam giác $CAB$ nên $MN=\dfrac12AB$. Suy ra $AB=2MN=2\cdot18{,}5=37$ (m).

Vậy khoảng cách $AB$ là $37$ m.

*Nhìn lại.* Kiểm tra: một nửa của $37$ m là $18{,}5$ m, đúng bằng $MN$. Ngoài ra $MN\parallel AB$ nên $M$, $N$ nằm trên đường song song với $AB$, và phép đo này không cần đi qua mặt nước.
:::

:::warning Những sai lầm thường gặp
- **Nối hai điểm bất kì trên hai cạnh.** Sai: $D\in AB$, $E\in AC$ bất kì thì $DE\parallel BC$ và $DE=\dfrac12BC$. Lí do sai: tính chất chỉ đúng khi $D$ và $E$ là trung điểm. Đúng: phải kiểm tra $D$, $E$ là trung điểm của hai cạnh.
- **Quên một nửa.** Sai: $DE=BC$ hoặc $DE=2BC$. Lí do sai: đường trung bình bằng nửa cạnh thứ ba, ngắn hơn cạnh đó. Đúng: $DE=\dfrac12BC$, hay $BC=2DE$.
- **Nhầm đường trung bình với đường trung tuyến.** Sai: đoạn nối đỉnh $A$ với trung điểm $M$ của $BC$ là đường trung bình. Lí do sai: đoạn $AM$ nối một đỉnh với trung điểm cạnh đối, đó là đường trung tuyến, và nó không song song với cạnh nào. Đúng: đường trung bình nối hai trung điểm của hai cạnh.
- **Nhầm cạnh song song.** Sai: $DE$ là đường trung bình ứng với $BC$ nên $DE\parallel AB$. Lí do sai: $DE$ chỉ song song với cạnh mà nó không cắt, tức là $BC$. Đúng: $DE\parallel BC$ và $DE=\dfrac12BC$.
:::

**Kết nối.** Đường trung bình là hệ quả trực tiếp của định lí Thalès và định lí Thalès đảo ở bài trước, và khi chứng minh ta còn dùng hình bình hành. Với hình bình hành, hình chữ nhật và hình thoi, đường trung bình giúp ta chứng minh nhiều tính chất của tứ giác nối trung điểm các cạnh.

## Thuật ngữ

:::terms
- đường trung bình | midsegment (midline)
- trung điểm | midpoint
- song song | parallel
- đường trung tuyến | median
- hình bình hành | parallelogram
- định lí Thalès | intercept theorem (Thales' theorem)
- định lí Thalès đảo | converse of the intercept theorem
- chu vi | perimeter
- cạnh thứ ba | third side
:::

## Tóm tắt

- Đường trung bình của tam giác là đoạn thẳng nối trung điểm hai cạnh; mỗi tam giác có ba đường trung bình.
- Đường trung bình song song với cạnh thứ ba và bằng nửa cạnh đó: $DE\parallel BC$ và $DE=\dfrac12BC$.
- Đường thẳng đi qua trung điểm một cạnh và song song với cạnh thứ hai thì đi qua trung điểm cạnh thứ ba.
- Chu vi tam giác tạo bởi ba trung điểm các cạnh bằng một nửa chu vi tam giác ban đầu.
- Đường trung bình khác đường trung tuyến: đường trung tuyến nối một đỉnh với trung điểm cạnh đối diện.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tam giác $ABC$ có $BC=18$ cm. Gọi $D$, $E$ là trung điểm của $AB$, $AC$. Tính $DE$.

::hint
**Kiến thức:** đường trung bình bằng nửa cạnh thứ ba.

**Gợi ý các bước:**
1. Nhận ra $DE$ là đường trung bình.
2. Lấy một nửa của $BC$.

::solution
$DE$ là đường trung bình của tam giác $ABC$ nên $DE=\dfrac12BC=\dfrac12\cdot18=9$ (cm).

Vậy $DE=9$ cm.

**Đáp số.** $9$ cm.
:::

:::exercise
Tam giác $ABC$ có $D$, $E$ là trung điểm của $AB$, $AC$ và $DE=7{,}5$ cm. Tính $BC$.

::hint
**Kiến thức:** $BC=2DE$.

**Gợi ý các bước:**
1. Nhận ra $DE$ là đường trung bình.
2. Nhân đôi $DE$.

::solution
Vì $DE$ là đường trung bình nên $BC=2DE=2\cdot7{,}5=15$ (cm).

Vậy $BC=15$ cm.

**Đáp số.** $15$ cm.
:::

:::exercise
Tam giác $ABC$ có $AB=10$ cm, $BC=14$ cm và $CA=12$ cm. Gọi $D$, $E$, $F$ lần lượt là trung điểm của $AB$, $BC$, $CA$. Tính chu vi tam giác $DEF$.

::hint
**Kiến thức:** ba đoạn $DE$, $EF$, $FD$ là ba đường trung bình của tam giác $ABC$.

**Gợi ý các bước:**
1. Tính $DE$, $EF$, $FD$ theo các cạnh của tam giác $ABC$.
2. Cộng ba độ dài.

::solution
Ta có $DE=\dfrac12CA=6$ cm, $EF=\dfrac12AB=5$ cm và $FD=\dfrac12BC=7$ cm. Chu vi tam giác $DEF$ là $6+5+7=18$ (cm).

Vậy chu vi tam giác $DEF$ là $18$ cm.

**Đáp số.** $18$ cm.
:::

:::exercise
Tam giác $ABC$ có $\widehat{B}=60^\circ$ và $\widehat{C}=75^\circ$. Gọi $D$, $E$ là trung điểm của $AB$, $AC$. Tính $\widehat{ADE}$ và $\widehat{AED}$.

::hint
**Kiến thức:** $DE\parallel BC$ nên các góc đồng vị bằng nhau.

**Gợi ý các bước:**
1. Chứng tỏ $DE\parallel BC$.
2. Dùng cặp góc đồng vị.

::solution
Vì $DE$ là đường trung bình nên $DE\parallel BC$. Do đó $\widehat{ADE}=\widehat{B}=60^\circ$ và $\widehat{AED}=\widehat{C}=75^\circ$ (các cặp góc đồng vị).

Vậy $\widehat{ADE}=60^\circ$ và $\widehat{AED}=75^\circ$.

**Đáp số.** $\widehat{ADE}=60^\circ$; $\widehat{AED}=75^\circ$.
:::

:::exercise
Cho tam giác $ABC$ và $D$ là trung điểm của $AB$. Đường thẳng qua $D$ song song với $BC$ cắt $AC$ tại $E$. Chứng minh rằng $E$ là trung điểm của $AC$.

::hint
**Kiến thức:** định lí Thalès trong tam giác $ABC$ với $DE\parallel BC$.

**Gợi ý các bước:**
1. Viết $\dfrac{AE}{AC}=\dfrac{AD}{AB}$.
2. Dùng $AD=\dfrac12AB$.

::solution
Vì $DE\parallel BC$ nên theo định lí Thalès, $\dfrac{AE}{AC}=\dfrac{AD}{AB}$. Vì $D$ là trung điểm của $AB$ nên $\dfrac{AD}{AB}=\dfrac12$. Do đó $\dfrac{AE}{AC}=\dfrac12$, tức là $AE=\dfrac12AC$.

Vậy $E$ là trung điểm của $AC$.

**Đáp số.** $E$ là trung điểm của $AC$.
:::

:::exercise
Tam giác $ABC$ có $D$, $E$ là trung điểm của $AB$, $AC$. Biết $DE=(2x+1)$ cm và $BC=(5x-4)$ cm. Tìm $x$ và tính $BC$.

::hint
**Kiến thức:** $BC=2DE$.

**Gợi ý các bước:**
1. Lập phương trình $5x-4=2(2x+1)$.
2. Giải rồi tính $BC$.

::solution
Vì $DE$ là đường trung bình nên $BC=2DE$, tức là $5x-4=2(2x+1)=4x+2$. Suy ra $x=6$. Khi đó $DE=2\cdot6+1=13$ (cm) và $BC=5\cdot6-4=26$ (cm).

Vậy $x=6$ và $BC=26$ cm.

**Đáp số.** $x=6$; $BC=26$ cm.
:::

:::exercise
Giả sử hai điểm $A$, $B$ nằm ở hai bờ của một đầm lầy. Chọn điểm $C$ trên đất liền, gọi $M$, $N$ là trung điểm của $CA$, $CB$ và đo được $MN=23$ m. Tính khoảng cách $AB$.

::hint
**Kiến thức:** $MN$ là đường trung bình của tam giác $CAB$.

**Gợi ý các bước:**
1. Nhận ra $MN$ là đường trung bình ứng với $AB$.
2. Nhân đôi $MN$.

::solution
$MN$ là đường trung bình của tam giác $CAB$ nên $AB=2MN=2\cdot23=46$ (m).

Vậy khoảng cách $AB$ là $46$ m.

**Đáp số.** $46$ m.
:::

:::exercise
Giả sử một khung mái nhà hình tam giác $ABC$ có đáy $BC=7{,}2$ m và cạnh bên $AB=5$ m. Người ta đóng thanh ngang $DE$ nối trung điểm $D$ của $AB$ với trung điểm $E$ của $AC$. Tính độ dài thanh $DE$ và đoạn $AD$. Thanh $DE$ có nằm ngang (song song với đáy) không?

::hint
**Kiến thức:** $DE$ là đường trung bình của tam giác $ABC$.

**Gợi ý các bước:**
1. Tính $DE=\dfrac12BC$.
2. Tính $AD=\dfrac12AB$ và kết luận về vị trí của $DE$.

::solution
$DE$ là đường trung bình nên $DE=\dfrac12BC=\dfrac12\cdot7{,}2=3{,}6$ (m) và $DE\parallel BC$, tức là thanh $DE$ nằm ngang khi đáy $BC$ nằm ngang. Vì $D$ là trung điểm của $AB$ nên $AD=\dfrac12\cdot5=2{,}5$ (m).

Vậy $DE=3{,}6$ m, $AD=2{,}5$ m và $DE$ song song với đáy.

**Đáp số.** $DE=3{,}6$ m; $AD=2{,}5$ m; $DE\parallel BC$.
:::

:::exercise
Nhớ lại bài về hình chữ nhật. Cho hình chữ nhật $ABCD$ có $AC=10$ cm. Gọi $E$, $F$, $G$, $H$ lần lượt là trung điểm của $AB$, $BC$, $CD$, $DA$. Chứng minh rằng $EFGH$ là hình thoi và tính chu vi của nó.

::hint
**Kiến thức:** đường trung bình của tam giác; hai đường chéo của hình chữ nhật bằng nhau; hình thoi là tứ giác có bốn cạnh bằng nhau.

**Gợi ý các bước:**
1. Tính các cạnh $EF$, $FG$, $GH$, $HE$ theo $AC$ và $BD$.
2. Dùng $AC=BD$.

::solution
Trong các tam giác $ABC$, $BCD$, $CDA$, $DAB$, các đoạn $EF$, $FG$, $GH$, $HE$ lần lượt là đường trung bình nên $EF=GH=\dfrac12AC$ và $FG=HE=\dfrac12BD$. Hình chữ nhật có hai đường chéo bằng nhau, $AC=BD=10$ cm, nên $EF=FG=GH=HE=5$ cm. Tứ giác có bốn cạnh bằng nhau là hình thoi.

Chu vi của $EFGH$ là $4\cdot5=20$ (cm).

Vậy $EFGH$ là hình thoi có chu vi $20$ cm.

**Đáp số.** $EFGH$ là hình thoi; chu vi $20$ cm.
:::

:::exercise Thử thách
Cho tứ giác $ABCD$. Gọi $E$, $F$ lần lượt là trung điểm của $AB$ và $CD$. Chứng minh rằng
$$EF\le\frac{AD+BC}{2}.$$

::hint
**Kiến thức:** đường trung bình của tam giác; bất đẳng thức tam giác (hoặc $EF\le EG+GF$ với ba điểm bất kì).

**Gợi ý các bước:**
1. Gọi $G$ là trung điểm của $AC$.
2. Tính $EG$ và $GF$ bằng đường trung bình, rồi dùng bất đẳng thức tam giác cho $E$, $G$, $F$.

::solution
Gọi $G$ là trung điểm của $AC$. Trong tam giác $ABC$, $EG$ là đường trung bình nên $EG=\dfrac12BC$. Trong tam giác $ACD$, $GF$ là đường trung bình nên $GF=\dfrac12AD$.

Với ba điểm $E$, $G$, $F$, theo bất đẳng thức tam giác ta có $EF\le EG+GF$ (dấu bằng xảy ra khi $E$, $G$, $F$ thẳng hàng). Do đó
$$EF\le\frac12BC+\frac12AD=\frac{AD+BC}{2}.$$

Vậy $EF\le\dfrac{AD+BC}{2}$.

**Đáp số.** Bất đẳng thức được chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Tam giác $ABC$ có $D$, $E$ là trung điểm của $AB$, $AC$ và $BC=20$ cm. Độ dài $DE$ bằng
A. $5$ cm.
B. $40$ cm.
C. $10$ cm.
D. $20$ cm.
::key C
$DE$ là đường trung bình nên $DE=\dfrac12BC=10$ cm. A là một phần tư của $BC$, B là $2BC$ và D là chính $BC$.

::mc
Tam giác $ABC$ có $D$, $E$ là trung điểm của $AB$, $AC$ và $DE=6$ cm. Độ dài $BC$ bằng
A. $3$ cm.
B. $18$ cm.
C. $6$ cm.
D. $12$ cm.
::key D
$BC=2DE=12$ cm. A là một nửa của $DE$, C là chính $DE$ và B là $3DE$.

::mc
Tam giác $ABC$ có $D$, $E$ là trung điểm của $AB$, $AC$. Khẳng định nào sau đây đúng?
A. $DE\parallel BC$ và $DE=\dfrac12BC$.
B. $DE\parallel BC$ và $DE=BC$.
C. $DE\parallel AC$ và $DE=\dfrac12AC$.
D. $DE\parallel AB$ và $DE=\dfrac12AB$.
::key A
Đường trung bình $DE$ song song với cạnh thứ ba $BC$ và bằng nửa $BC$. A, C nhầm cạnh song song và B thiếu một nửa.

::mc
Tam giác $ABC$ có chu vi $24$ cm. Tam giác tạo bởi ba trung điểm của ba cạnh có chu vi bằng
A. $6$ cm.
B. $12$ cm.
C. $24$ cm.
D. $48$ cm.
::key B
Mỗi cạnh của tam giác trung điểm bằng nửa cạnh tương ứng nên chu vi bằng $24:2=12$ cm. B là $24:4$, C là chu vi ban đầu và D là $2\cdot24$.

::tf
Tam giác $ABC$ có $BC=16$ cm; $M$, $N$ là trung điểm của $AB$, $AC$.
a) $MN\parallel BC$.
b) $MN=16$ cm.
c) $AM=\dfrac12AB$.
d) $MN\parallel AB$.
::key Đ S Đ S
a) Đúng: $MN$ là đường trung bình ứng với $BC$. b) Sai: $MN=\dfrac12BC=8$ cm. c) Đúng: $M$ là trung điểm của $AB$. d) Sai: $MN$ cắt $AB$ tại $M$ nên không song song với $AB$.

::sa
Tam giác $ABC$ có $AB=10$ cm, $AC=14$ cm và $BC=16$ cm. Gọi $D$, $E$, $F$ là trung điểm của $AB$, $AC$, $BC$. Tính chu vi tam giác $DEF$ (cm).
::key 20
Chu vi tam giác $ABC$ là $10+14+16=40$ cm, nên chu vi tam giác $DEF$ là $40:2=20$ cm.

::sa
Tam giác $ABC$ có $D$, $E$ là trung điểm của $AB$, $AC$ và $DE=4{,}5$ cm. Tính $BC$ (cm).
::key 9
$BC=2DE=2\cdot4{,}5=9$ cm.
:::
