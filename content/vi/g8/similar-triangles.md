---
title: Hai tam giác đồng dạng
description: Hiểu định nghĩa hai tam giác đồng dạng, tỉ số đồng dạng, định lí về đường thẳng song song với một cạnh và vận dụng để tính độ dài trong thực tế.
minutes: 25
---

:::goals
- Phát biểu được định nghĩa hai tam giác đồng dạng và tỉ số đồng dạng.
- Viết đúng kí hiệu đồng dạng và nhận biết các cặp góc, cặp cạnh tương ứng.
- Vận dụng định lí: đường thẳng song song với một cạnh của tam giác cắt hai cạnh còn lại tạo ra tam giác đồng dạng với tam giác đã cho.
- Tính độ dài trong các bài toán thực tế như đo chiều cao bằng bóng và đọc bản đồ.
:::

Giả sử một bạn muốn biết chiều cao của một cây cao mà không thể trèo lên đo. Bạn đứng thẳng, cao $1{,}6$ m, thì bóng của bạn trên mặt đất dài $2$ m. Cùng lúc đó, bóng của cây dài $7{,}5$ m. Chiều cao của cây là bao nhiêu?

Hai hình tam giác (cây với bóng của nó, và bạn với bóng của bạn) có cùng "hình dạng" nhưng khác kích thước, như một bức ảnh và bản phóng to của nó. Toán học gọi hai tam giác như vậy là đồng dạng. Bài này dạy bạn định nghĩa, và cách dùng nó để giải bài toán trên.

## Cùng khám phá

Khi phóng to một bức ảnh lên $2$ lần, mọi chiều dài tăng gấp đôi, còn các góc giữ nguyên, nên hình ảnh trông "giống hệt" nhưng to hơn. Ta thử với tam giác. Tam giác $ABC$ có $AB=4$, $BC=5$, $CA=6$. Tam giác $A'B'C'$ có $A'B'=8$, $B'C'=10$, $C'A'=12$ và $\widehat{A'}=\widehat A$, $\widehat{B'}=\widehat B$, $\widehat{C'}=\widehat C$. Ta tính các tỉ số:
$$\frac{A'B'}{AB}=\frac84=2,\qquad\frac{B'C'}{BC}=\frac{10}{5}=2,\qquad\frac{C'A'}{CA}=\frac{12}{6}=2.$$
Ba tỉ số bằng nhau và các góc tương ứng bằng nhau. Hai tam giác có tính chất như vậy gọi là đồng dạng.

## Hai tam giác đồng dạng

:::definition Hai tam giác đồng dạng
Tam giác $A'B'C'$ **đồng dạng** với tam giác $ABC$ nếu
$$\widehat{A'}=\widehat A,\quad\widehat{B'}=\widehat B,\quad\widehat{C'}=\widehat C\quad\text{và}\quad\frac{A'B'}{AB}=\frac{B'C'}{BC}=\frac{C'A'}{CA}=k.$$
Ta viết $\triangle A'B'C'\sim\triangle ABC$. Số $k$ gọi là **tỉ số đồng dạng** của $\triangle A'B'C'$ so với $\triangle ABC$.
:::

**Lưu ý về thứ tự.** Kí hiệu $\triangle A'B'C'\sim\triangle ABC$ cho biết $A'$ ứng với $A$, $B'$ ứng với $B$, $C'$ ứng với $C$. Hai cạnh tương ứng là hai cạnh nằm đối diện với hai góc bằng nhau. Vì vậy thứ tự các đỉnh quan trọng.

Các tính chất của sự đồng dạng:
- Mỗi tam giác đồng dạng với chính nó, với tỉ số $1$.
- Nếu $\triangle A'B'C'\sim\triangle ABC$ theo tỉ số $k$ thì $\triangle ABC\sim\triangle A'B'C'$ theo tỉ số $\dfrac1k$.
- Nếu $\triangle A''B''C''\sim\triangle A'B'C'$ theo tỉ số $k_1$ và $\triangle A'B'C'\sim\triangle ABC$ theo tỉ số $k_2$ thì $\triangle A''B''C''\sim\triangle ABC$ theo tỉ số $k_1k_2$.
- Hai tam giác bằng nhau là hai tam giác đồng dạng với tỉ số $1$.

Chu vi của hai tam giác đồng dạng cũng theo tỉ số $k$, vì khi cộng ba cạnh $A'B'=k\cdot AB$, $B'C'=k\cdot BC$, $C'A'=k\cdot CA$ ta được chu vi $\triangle A'B'C'=k\cdot$ chu vi $\triangle ABC$.

:::example Nhận biết tam giác đồng dạng
Cho $\triangle ABC$ có $AB=4$, $BC=5$, $CA=6$ và $\triangle A'B'C'$ có $A'B'=8$, $B'C'=10$, $C'A'=12$ với các góc tương ứng bằng nhau. Chứng tỏ hai tam giác đồng dạng và tìm tỉ số đồng dạng theo cả hai chiều.

**Lời giải.** Các góc tương ứng bằng nhau. Các tỉ số cạnh là $\dfrac{8}{4}=\dfrac{10}{5}=\dfrac{12}{6}=2$. Theo định nghĩa, $\triangle A'B'C'\sim\triangle ABC$ với tỉ số $k=2$.

Theo chiều ngược lại, $\triangle ABC\sim\triangle A'B'C'$ với tỉ số $\dfrac12$.

Vậy hai tam giác đồng dạng; tỉ số là $2$ (từ $\triangle ABC$ sang $\triangle A'B'C'$) và $\dfrac12$ (chiều ngược lại).
:::

:::example Tìm độ dài các cạnh
Cho $\triangle ABC\sim\triangle MNP$ với $AB=6$, $BC=9$, $CA=12$ và $MN=4$. Tính $NP$ và $PM$.

**Lời giải.** Vì $A$, $B$, $C$ ứng với $M$, $N$, $P$ nên tỉ số đồng dạng của $\triangle MNP$ so với $\triangle ABC$ là $k=\dfrac{MN}{AB}=\dfrac46=\dfrac23$. Ta có
$$NP=k\cdot BC=\dfrac23\cdot9=6,\qquad PM=k\cdot CA=\dfrac23\cdot12=8.$$

Kiểm tra: $\dfrac{4}{6}=\dfrac{6}{9}=\dfrac{8}{12}=\dfrac23$.

Vậy $NP=6$ và $PM=8$.
:::

:::example Chu vi hai tam giác đồng dạng
Với hai tam giác ở ví dụ trên, tính chu vi $\triangle MNP$ biết chu vi $\triangle ABC$ bằng $27$.

**Lời giải.** Tỉ số chu vi bằng tỉ số đồng dạng $k=\dfrac23$. Do đó chu vi $\triangle MNP$ là $27\cdot\dfrac23=18$.

Kiểm tra: $MN+NP+PM=4+6+8=18$.

Vậy chu vi $\triangle MNP$ bằng $18$.
:::

## Định lí về đường thẳng song song với một cạnh

Trong thực tế, ta thường gặp một tam giác nhỏ nằm gọn trong tam giác lớn. Định lí sau cho biết khi nào chúng đồng dạng.

:::theorem Đường thẳng song song và tam giác đồng dạng
Nếu một đường thẳng cắt hai cạnh của một tam giác và song song với cạnh còn lại thì nó tạo thành một tam giác mới đồng dạng với tam giác đã cho.

Cụ thể, trong $\triangle ABC$ với $M\in AB$, $N\in AC$ và $MN\parallel BC$ thì $\triangle AMN\sim\triangle ABC$, tức là
$$\frac{AM}{AB}=\frac{AN}{AC}=\frac{MN}{BC}.$$
:::

:::diagram Đường thẳng $MN$ song song với $BC$
alt: Tam giác ABC với đoạn MN song song với cạnh BC, M nằm trên AB và N nằm trên AC, tạo thành tam giác nhỏ AMN nằm trong tam giác ABC
point B 0,0 below-left
point C 8,0 below-right
point A 3,5 above
point M 1.2,2 left
point N 6,2 right
polygon A B C
segment M N
:::

**Vì sao?** Vì $MN\parallel BC$ nên $\widehat{AMN}=\widehat{ABC}$ và $\widehat{ANM}=\widehat{ACB}$ (các cặp góc đồng vị), và hai tam giác có chung góc $A$. Theo định lí Thalès (đường thẳng song song cắt hai cạnh của tam giác), $\dfrac{AM}{AB}=\dfrac{AN}{AC}$. Qua $N$ kẻ đường thẳng song song với $AB$, cắt $BC$ tại $P$; khi đó $BMNP$ là hình bình hành nên $MN=BP$, và theo định lí Thalès ta có $\dfrac{BP}{BC}=\dfrac{AN}{AC}$. Do đó $\dfrac{MN}{BC}=\dfrac{AN}{AC}$, và ba tỉ số bằng nhau.

:::example Dùng định lí
Cho $\triangle ABC$ có $AB=10$, $AC=15$, $BC=20$. Điểm $M$ thuộc $AB$ sao cho $AM=4$; đường thẳng qua $M$ song song với $BC$ cắt $AC$ tại $N$. Tính $AN$ và $MN$.

**Lời giải.** Vì $MN\parallel BC$ nên $\triangle AMN\sim\triangle ABC$ với tỉ số $k=\dfrac{AM}{AB}=\dfrac{4}{10}=\dfrac25$. Do đó
$$AN=\dfrac25\cdot AC=\dfrac25\cdot15=6,\qquad MN=\dfrac25\cdot BC=\dfrac25\cdot20=8.$$

Kiểm tra: $\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{4}{10}=\dfrac{6}{15}=\dfrac25$.

Vậy $AN=6$ và $MN=8$.
:::

Ta quay lại bài toán đo chiều cao cây, đi đủ bốn bước của việc giải một bài toán.

:::example Đo chiều cao cây bằng bóng
Bạn cao $1{,}6$ m có bóng dài $2$ m; cùng lúc đó cây có bóng dài $7{,}5$ m (giả sử, tia nắng song song nhau, cây và người đứng thẳng). Tính chiều cao của cây.

**Lời giải.**

*Hiểu đề.* Gọi $BT$ là cây, $B$ là gốc cây, $S$ là đầu mút bóng cây ($BS=7{,}5$ m). Đặt người đứng ở điểm $P$ trên $BS$ sao cho đầu $H$ của người nằm trên tia nắng $TS$; khi đó $PH=1{,}6$ m và bóng $PS=2$ m.

*Tìm cách giải.* Người và cây cùng vuông góc với mặt đất nên $PH\parallel BT$; áp dụng định lí về đường thẳng song song trong $\triangle STB$.

*Giải.* Vì $PH\parallel BT$ nên $\triangle SPH\sim\triangle SBT$ với tỉ số $\dfrac{SP}{SB}=\dfrac{2}{7{,}5}$. Suy ra $\dfrac{PH}{BT}=\dfrac{SP}{SB}$, hay
$$\frac{1{,}6}{BT}=\frac{2}{7{,}5}\ \Rightarrow\ BT=\frac{1{,}6\cdot7{,}5}{2}=6\ \text{(m)}.$$

*Nhìn lại.* Cây cao hơn người $\dfrac{6}{1{,}6}=3{,}75$ lần và bóng cây dài hơn bóng người $\dfrac{7{,}5}{2}=3{,}75$ lần, đúng với tỉ số đồng dạng. Kết quả hợp lí vì cây cao hơn người.

Vậy cây cao $6$ m.
:::

:::diagram Người và cây có bóng trên mặt đất
alt: Tam giác lớn gồm cây thẳng đứng, bóng của cây trên mặt đất và tia nắng; bên trong là tam giác nhỏ gồm người đứng thẳng, bóng của người và cùng tia nắng
point B 0,0 below-left
point T 0,6 above
point S 7.5,0 below-right
point P 5.5,0 below
point H 5.5,1.6 right
polygon T B S
segment P H
label 0.4,3 "cây"
label 6.2,0.8 "người"
:::

:::example Đọc bản đồ
Trên bản đồ tỉ lệ $1:50\,000$, ba thị trấn tạo thành một tam giác có các cạnh $4$ cm, $6$ cm, $8$ cm (giả sử). Tính khoảng cách thực tế giữa các thị trấn và chu vi tam giác thực tế.

**Lời giải.** Tam giác thực tế đồng dạng với tam giác trên bản đồ với tỉ số $50\,000$. Do đó $4$ cm trên bản đồ ứng với $4\cdot50\,000=200\,000$ cm $=2$ km. Tương tự $6$ cm ứng với $3$ km và $8$ cm ứng với $4$ km. Chu vi thực tế là $2+3+4=9$ km.

Kiểm tra: chu vi trên bản đồ là $18$ cm và $18\cdot50\,000$ cm $=900\,000$ cm $=9$ km.

Vậy khoảng cách thực là $2$ km, $3$ km, $4$ km và chu vi là $9$ km.
:::

:::warning Những sai lầm thường gặp
- **Viết sai thứ tự các đỉnh.** Sai: từ $\triangle ABC\sim\triangle MNP$ suy ra $\dfrac{AB}{NM}=\dfrac{BC}{MP}$. Lí do sai: thứ tự đỉnh cho biết $A\leftrightarrow M$, $B\leftrightarrow N$, $C\leftrightarrow P$, nên $AB$ ứng với $MN$ và $BC$ ứng với $NP$. Đúng: $\dfrac{AB}{MN}=\dfrac{BC}{NP}=\dfrac{CA}{PM}$.
- **Lấy ngược tỉ số đồng dạng.** Sai: $\triangle A'B'C'\sim\triangle ABC$ với $A'B'=8$, $AB=4$ có $k=\dfrac{AB}{A'B'}=\dfrac12$. Lí do sai: tỉ số đồng dạng của $\triangle A'B'C'$ so với $\triangle ABC$ là $\dfrac{A'B'}{AB}$. Đúng: $k=\dfrac84=2$.
- **Ghép nhầm cạnh tương ứng.** Sai: khi $MN\parallel BC$, viết $\dfrac{MN}{AB}=\dfrac{AM}{AC}$. Lí do sai: $MN$ nằm đối diện góc $A$ nên ứng với $BC$, không phải $AB$. Đúng: $\dfrac{MN}{BC}=\dfrac{AM}{AB}$.
:::

**Kết nối.** Bài này dựa vào định lí Thalès (đường thẳng song song cắt hai cạnh của tam giác) và các tính chất của góc đồng vị. Bài tiếp theo, [ba trường hợp đồng dạng của hai tam giác](lesson:triangle-similarity-conditions), cho các cách nhanh hơn để chứng tỏ hai tam giác đồng dạng mà không cần kiểm tra cả sáu điều kiện trong định nghĩa.

## Thuật ngữ

:::terms
- tam giác đồng dạng | similar triangles
- tỉ số đồng dạng | scale factor (ratio of similarity)
- góc tương ứng | corresponding angles
- cạnh tương ứng | corresponding sides
- định lí Thalès | intercept theorem
- đường thẳng song song | parallel line
- chu vi | perimeter
- tỉ lệ bản đồ | map scale
:::

## Tóm tắt

- $\triangle A'B'C'\sim\triangle ABC$ nếu các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ: $\dfrac{A'B'}{AB}=\dfrac{B'C'}{BC}=\dfrac{C'A'}{CA}=k$.
- Thứ tự đỉnh cho biết các góc và cạnh tương ứng; tỉ số đổi thành $\dfrac1k$ khi đổi chiều.
- Chu vi của hai tam giác đồng dạng có cùng tỉ số $k$.
- Nếu $MN\parallel BC$ ($M\in AB$, $N\in AC$) thì $\triangle AMN\sim\triangle ABC$ và $\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}$.
- Ứng dụng: đo chiều cao bằng bóng, đọc bản đồ, phóng to thu nhỏ hình.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho $\triangle DEF\sim\triangle ABC$ theo tỉ số $k=3$ với $AB=2$, $BC=4$, $CA=5$. Tính $DE$, $EF$, $FD$.

::hint
**Kiến thức:** $\dfrac{DE}{AB}=\dfrac{EF}{BC}=\dfrac{FD}{CA}=k$.

**Gợi ý các bước:**
1. Xác định các cạnh tương ứng.
2. Nhân từng cạnh với $k$.

::solution
Vì $D$, $E$, $F$ ứng với $A$, $B$, $C$ nên $DE=3\cdot2=6$, $EF=3\cdot4=12$, $FD=3\cdot5=15$.

Vậy $DE=6$, $EF=12$, $FD=15$.

**Đáp số.** $6$; $12$; $15$.
:::

:::exercise
Cho $\triangle ABC\sim\triangle A'B'C'$ với $AB=5$, $BC=8$, $CA=10$ và $A'B'=15$. Tìm tỉ số đồng dạng của $\triangle A'B'C'$ so với $\triangle ABC$, các cạnh còn lại của $\triangle A'B'C'$ và tỉ số chu vi.

::hint
**Kiến thức:** $k=\dfrac{A'B'}{AB}$.

**Gợi ý các bước:**
1. Tính $k$.
2. Nhân $BC$ và $CA$ với $k$.

::solution
Ta có $k=\dfrac{15}{5}=3$. Do đó $B'C'=3\cdot8=24$ và $C'A'=3\cdot10=30$. Tỉ số chu vi bằng $k=3$: chu vi $\triangle ABC$ là $23$, chu vi $\triangle A'B'C'$ là $15+24+30=69=3\cdot23$.

**Đáp số.** $k=3$; $24$; $30$; tỉ số chu vi $3$.
:::

:::exercise
Cho $\triangle ABC$ có $AB=4$, $BC=6$, $CA=8$ và $\triangle A'B'C'$ có $A'B'=6$, $B'C'=9$, $C'A'=12$, với các góc tương ứng bằng nhau. Hai tam giác có đồng dạng không? Nếu có, nêu tỉ số và so sánh chu vi.

::hint
**Kiến thức:** các cạnh tương ứng phải có cùng tỉ số.

**Gợi ý các bước:**
1. Tính $\dfrac{A'B'}{AB}$, $\dfrac{B'C'}{BC}$, $\dfrac{C'A'}{CA}$.
2. Tính hai chu vi.

::solution
Ta có $\dfrac{6}{4}=\dfrac{9}{6}=\dfrac{12}{8}=\dfrac32$ và các góc tương ứng bằng nhau, nên $\triangle A'B'C'\sim\triangle ABC$ với tỉ số $\dfrac32$. Chu vi $\triangle ABC$ là $18$, chu vi $\triangle A'B'C'$ là $27=\dfrac32\cdot18$.

**Đáp số.** Đồng dạng, tỉ số $\dfrac32$; chu vi $18$ và $27$.
:::

:::exercise
Cho $\triangle ABC$, điểm $M\in AB$, $N\in AC$ sao cho $MN\parallel BC$. Biết $AM=6$, $MB=4$, $AN=9$ và $BC=20$. Tính $NC$, $AC$ và $MN$.

::hint
**Kiến thức:** $\triangle AMN\sim\triangle ABC$ với tỉ số $\dfrac{AM}{AB}$.

**Gợi ý các bước:**
1. Tính $AB$ và tỉ số $k$.
2. Dùng $k$ để tìm $AC$, rồi $NC$ và $MN$.

::solution
Ta có $AB=6+4=10$ nên $k=\dfrac{6}{10}=\dfrac35$. Vì $\dfrac{AN}{AC}=\dfrac35$ nên $AC=\dfrac{9}{3/5}=15$, suy ra $NC=15-9=6$. Ta có $MN=\dfrac35\cdot20=12$.

Kiểm tra: $\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}=\dfrac35$.

**Đáp số.** $NC=6$; $AC=15$; $MN=12$.
:::

:::exercise
Một cột cờ có bóng dài $12$ m trên mặt đất. Cùng lúc đó, một cây thước dài $1$ m dựng thẳng có bóng dài $0{,}8$ m. Tính chiều cao cột cờ.

::hint
**Kiến thức:** tam giác tạo bởi vật, bóng và tia nắng đồng dạng.

**Gợi ý các bước:**
1. Viết tỉ lệ $\dfrac{\text{chiều cao cột}}{\text{chiều cao thước}}=\dfrac{\text{bóng cột}}{\text{bóng thước}}$.
2. Giải để tìm chiều cao.

::solution
Gọi $h$ là chiều cao cột cờ (m). Ta có $\dfrac{h}{1}=\dfrac{12}{0{,}8}$, suy ra $h=15$.

Kiểm tra: $\dfrac{15}{12}=\dfrac{1}{0{,}8}=1{,}25$.

Vậy cột cờ cao $15$ m.

**Đáp số.** $15$ m.
:::

:::exercise
Trên bản đồ tỉ lệ $1:100\,000$, ba địa điểm tạo thành một tam giác có các cạnh $3$ cm, $4$ cm, $5$ cm (giả sử). Tính khoảng cách thực tế và chu vi tam giác thực tế.

::hint
**Kiến thức:** tam giác thực tế đồng dạng với tam giác trên bản đồ với tỉ số $100\,000$.

**Gợi ý các bước:**
1. Đổi $1$ cm trên bản đồ ra km.
2. Nhân với từng cạnh.

::solution
$1$ cm trên bản đồ ứng với $100\,000$ cm $=1$ km. Vậy các cạnh thực là $3$ km, $4$ km, $5$ km, và chu vi là $12$ km.

**Đáp số.** $3$ km; $4$ km; $5$ km; chu vi $12$ km.
:::

:::exercise
Cho $\triangle ABC$ vuông tại $A$ có $AB=6$, $AC=8$. Điểm $M\in AB$ với $AM=3$; đường thẳng qua $M$ song song với $BC$ cắt $AC$ tại $N$. Tính $AN$ và $MN$. (Ôn lại [định lí Pythagore](lesson:pythagoras-theorem).)

::hint
**Kiến thức:** tính $BC$ bằng định lí Pythagore, rồi dùng tỉ số đồng dạng.

**Gợi ý các bước:**
1. Tính $BC$.
2. Tìm $k=\dfrac{AM}{AB}$ rồi suy ra $AN$ và $MN$.

::solution
Theo định lí Pythagore, $BC=\sqrt{6^2+8^2}=10$. Vì $MN\parallel BC$ nên $\triangle AMN\sim\triangle ABC$ với $k=\dfrac{3}{6}=\dfrac12$. Do đó $AN=\dfrac12\cdot8=4$ và $MN=\dfrac12\cdot10=5$.

**Đáp số.** $AN=4$; $MN=5$.
:::

:::exercise
$\triangle A'B'C'\sim\triangle ABC$ theo tỉ số $2$ và $\triangle A''B''C''\sim\triangle A'B'C'$ theo tỉ số $3$. Tìm tỉ số đồng dạng của $\triangle A''B''C''$ so với $\triangle ABC$. Nếu $AB=5$ thì $A''B''$ bằng bao nhiêu?

::hint
**Kiến thức:** tính chất bắc cầu: các tỉ số nhân với nhau.

**Gợi ý các bước:**
1. Nhân hai tỉ số.
2. Dùng tỉ số để tìm $A''B''$.

::solution
Tỉ số đồng dạng của $\triangle A''B''C''$ so với $\triangle ABC$ là $2\cdot3=6$. Khi $AB=5$ thì $A''B''=6\cdot5=30$.

Kiểm tra từng bước: $A'B'=2\cdot5=10$ và $A''B''=3\cdot10=30$.

**Đáp số.** $6$; $A''B''=30$.
:::

:::exercise
Một bức ảnh tam giác có các cạnh $6$ cm, $8$ cm, $10$ cm được phóng to thành tấm áp phích sao cho cạnh ngắn nhất dài $15$ cm. Tính các cạnh của áp phích và tỉ số chu vi.

::hint
**Kiến thức:** phóng to giữ nguyên hình dạng, tức là đồng dạng.

**Gợi ý các bước:**
1. Tìm tỉ số phóng to từ cạnh ngắn nhất.
2. Nhân các cạnh còn lại.

::solution
Tỉ số phóng to là $k=\dfrac{15}{6}=2{,}5$. Các cạnh áp phích là $15$ cm, $2{,}5\cdot8=20$ cm, $2{,}5\cdot10=25$ cm. Chu vi bức ảnh là $24$ cm, chu vi áp phích là $60$ cm và $60:24=2{,}5$.

**Đáp số.** $15$ cm, $20$ cm, $25$ cm; tỉ số chu vi $2{,}5$.
:::

:::exercise Thử thách
Cho $\triangle ABC$, $M$ là trung điểm của $AB$, $N$ là trung điểm của $AC$. Chứng minh $MN\parallel BC$ và $MN=\dfrac12BC$.

::hint
**Kiến thức:** định lí Thalès đảo và định lí về đường thẳng song song với một cạnh.

**Gợi ý các bước:**
1. Tính $\dfrac{AM}{AB}$ và $\dfrac{AN}{AC}$.
2. Dùng tỉ số đồng dạng để suy ra $MN$.

::solution
Vì $M$, $N$ là trung điểm nên $\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac12$. Theo định lí Thalès đảo, $MN\parallel BC$. Khi đó $\triangle AMN\sim\triangle ABC$ với tỉ số $\dfrac12$, nên $\dfrac{MN}{BC}=\dfrac12$, tức $MN=\dfrac12BC$.

Vậy $MN\parallel BC$ và $MN=\dfrac12BC$ (đoạn $MN$ gọi là đường trung bình của tam giác).

**Đáp số.** Đã chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $\triangle ABC\sim\triangle MNP$ với $AB=6$ và $MN=4$. Tỉ số đồng dạng của $\triangle MNP$ so với $\triangle ABC$ là
A. $\dfrac32$.
B. $\dfrac23$.
C. $2$.
D. $\dfrac12$.
::key B
$k=\dfrac{MN}{AB}=\dfrac46=\dfrac23$. A lấy ngược tỉ số, C và D không xuất phát từ các cạnh tương ứng.

::mc
Hai tam giác đồng dạng theo tỉ số $3$ thì tỉ số hai chu vi bằng
A. $9$.
B. $\dfrac13$.
C. $3$.
D. $6$.
::key C
Chu vi cũng theo tỉ số đồng dạng $k=3$. A bình phương $k$ (đó là tỉ số diện tích), B lấy ngược, D cộng $3+3$.

::mc
Cho $\triangle ABC$ có $AB=10$, $BC=20$; $M\in AB$ với $AM=4$ và $MN\parallel BC$ ($N\in AC$). Độ dài $MN$ là
A. $2$.
B. $5$.
C. $10$.
D. $8$.
::key D
$k=\dfrac{4}{10}=\dfrac25$ nên $MN=\dfrac25\cdot20=8$. B, C và A không dùng tỉ số $\dfrac25$ của hai tam giác.

::mc
Cho $\triangle ABC\sim\triangle DEF$. Cặp góc bằng nhau là
A. $\widehat C=\widehat F$.
B. $\widehat B=\widehat D$.
C. $\widehat A=\widehat E$.
D. $\widehat A=\widehat F$.
::key A
Thứ tự đỉnh cho $A\leftrightarrow D$, $B\leftrightarrow E$, $C\leftrightarrow F$, nên $\widehat C=\widehat F$. Các phương án còn lại ghép nhầm đỉnh.

::tf
Cho $\triangle ABC$ có $AB=3$, $BC=4$, $CA=5$ và $\triangle A'B'C'\sim\triangle ABC$ với $A'B'=6$, $B'C'=8$. Xét tính đúng sai của các mệnh đề sau:
a) Tỉ số đồng dạng của $\triangle A'B'C'$ so với $\triangle ABC$ bằng $2$.
b) $C'A'=12$.
c) Chu vi $\triangle A'B'C'$ bằng $24$.
d) $\triangle ABC\sim\triangle A'B'C'$ theo tỉ số $2$.
::key Đ S Đ S
a) Đúng: $\dfrac63=2$. b) Sai: $C'A'=2\cdot5=10$. c) Đúng: $6+8+10=24$. d) Sai: theo chiều ngược lại tỉ số là $\dfrac12$.

::sa
Cho $\triangle ABC\sim\triangle MNP$ với $AB=6$, $BC=9$, $MN=4$. Tính $NP$.
::key 6
$k=\dfrac46=\dfrac23$ nên $NP=\dfrac23\cdot9=6$.

::sa
Bạn cao $1{,}6$ m có bóng dài $2$ m; cây có bóng dài $7{,}5$ m. Cây cao bao nhiêu mét?
::key 6
$\dfrac{1{,}6}{h}=\dfrac{2}{7{,}5}$ nên $h=6$.
:::
