---
title: Đường thẳng và mặt phẳng trong không gian
description: Làm quen mặt phẳng trong không gian, các tính chất thừa nhận, cách xác định mặt phẳng, hình chóp và tứ diện, và cách tìm giao tuyến, giao điểm.
minutes: 25
---

:::goals
- Mô tả mặt phẳng và dùng các kí hiệu điểm thuộc, không thuộc mặt phẳng.
- Phát biểu và vận dụng các tính chất thừa nhận về đường thẳng và mặt phẳng trong không gian.
- Xác định một mặt phẳng bằng ba điểm không thẳng hàng, bằng một đường thẳng và một điểm, hoặc bằng hai đường thẳng cắt nhau.
- Nhận biết hình chóp, hình tứ diện và tìm giao tuyến của hai mặt phẳng, giao điểm của đường thẳng và mặt phẳng.
:::

Chiếc ghế đẩu ba chân đặt trên nền nhà phẳng luôn đứng vững, dù nền có hơi gồ ghề. Còn chiếc bàn bốn chân thì đôi khi bị "kênh", phải kê thêm miếng giấy dưới một chân.

Vì sao ba chân thì luôn vững còn bốn chân thì không? Để trả lời, ta cần biết bao nhiêu điểm thì xác định được một mặt phẳng, và khi nào bốn điểm cùng nằm trên một mặt phẳng.

## Mặt phẳng và các tính chất thừa nhận

### Khám phá: ba điểm và mặt phẳng

Mặt phẳng là một hình không có bề dày và kéo dài vô hạn, như mặt sàn lý tưởng, mặt giấy phẳng hay mặt nước yên lặng. Ta thường kí hiệu mặt phẳng bằng chữ in hoa trong ngoặc, ví dụ $(P)$, $(Q)$, hoặc bằng chữ Hy Lạp $(\alpha)$, $(\beta)$, và vẽ nó như một hình bình hành. Ta viết $A\in(P)$ khi điểm $A$ thuộc mặt phẳng $(P)$ và $A\notin(P)$ khi không thuộc.

:::diagram Mặt phẳng $(P)$, đường thẳng $d$ nằm trong $(P)$ và điểm $M$ không thuộc $(P)$
alt: Một hình bình hành biểu diễn mặt phẳng P, đường thẳng d đi qua hai điểm A và B nằm trong hình bình hành, và điểm M nằm phía trên mặt phẳng, nối với mặt phẳng bằng nét đứt
point P1 0,0 ""
point P2 6,0 ""
point P3 8,2.2 ""
point P4 2,2.2 ""
point A 2.2,0.8 below
point B 5.2,1.4 below-right
point X 1,0.56 ""
point Y 7,1.76 ""
point M 4.2,3.4 above
point H 4.2,1.3 ""
polygon P1 P2 P3 P4
segment X Y
segment M H dashed
label 0.9,1.9 "(P)"
label 7.0,2.6 "d"
:::

Ba chân ghế tiếp đất tại ba điểm $A$, $B$, $C$ không thẳng hàng. Ta thừa nhận rằng qua ba điểm như vậy có đúng một mặt phẳng, nên mặt sàn lý tưởng chứa ba chân chính là mặt phẳng $(ABC)$ đó. Còn bốn đầu chân bàn $A$, $B$, $C$, $D$ có thể không cùng nằm trên một mặt phẳng, và khi đó chúng không thể cùng chạm một nền phẳng.

Các tính chất sau không chứng minh mà được thừa nhận từ kinh nghiệm hình học không gian.

:::theorem Các tính chất thừa nhận
1. Có một và chỉ một đường thẳng đi qua hai điểm phân biệt.
2. Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng.
3. Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó.
4. Tồn tại bốn điểm không cùng thuộc một mặt phẳng (bốn điểm **không đồng phẳng**).
5. Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm chung đó. Đường thẳng này gọi là **giao tuyến** của hai mặt phẳng.
6. Trong mỗi mặt phẳng, các kết quả đã biết của hình học phẳng đều đúng.
:::

Tính chất 3 cho ta cách nói "đường thẳng $d$ nằm trong mặt phẳng $(P)$", viết $d\subset(P)$: chỉ cần hai điểm của $d$ thuộc $(P)$. Tính chất 5 cho ta cách tìm giao tuyến: chỉ cần tìm hai điểm chung của hai mặt phẳng.

## Cách xác định mặt phẳng

Từ tính chất 2 ta có ba cách xác định một mặt phẳng.

:::theorem Ba cách xác định mặt phẳng
Một mặt phẳng được xác định duy nhất khi biết
- ba điểm $A$, $B$, $C$ không thẳng hàng; kí hiệu $(ABC)$;
- một đường thẳng $d$ và một điểm $A$ không thuộc $d$; kí hiệu $(A, d)$;
- hai đường thẳng $a$, $b$ cắt nhau; kí hiệu $(a, b)$.
:::

Vì sao đúng? Với $d$ và $A\notin d$, lấy hai điểm phân biệt $B$, $C$ trên $d$: ba điểm $A$, $B$, $C$ không thẳng hàng và, theo tính chất 3, $(ABC)$ chứa cả $d$. Với hai đường thẳng $a$, $b$ cắt nhau tại $O$, lấy $A\in a$ và $B\in b$ khác $O$: $(OAB)$ chứa cả $a$ lẫn $b$. Tính duy nhất suy ra từ tính chất 2.

## Hình chóp và hình tứ diện

Cho đa giác $A_1A_2\dots A_n$ nằm trong mặt phẳng $(P)$ và một điểm $S$ không thuộc $(P)$. Nối $S$ với các đỉnh $A_1, \dots, A_n$. Hình gồm đa giác $A_1A_2\dots A_n$ và các tam giác $SA_1A_2$, $SA_2A_3$, ..., $SA_nA_1$ gọi là **hình chóp** $S.A_1A_2\dots A_n$. Điểm $S$ là **đỉnh**, đa giác $A_1A_2\dots A_n$ là **mặt đáy**, các tam giác là **mặt bên**, các đoạn $SA_i$ là **cạnh bên** và các cạnh của đáy là **cạnh đáy**. Hình chóp có đáy là tam giác, tứ giác, ... gọi là hình chóp tam giác, hình chóp tứ giác, ... Hình chóp có đáy $n$ cạnh có $n+1$ mặt ($n$ mặt bên và $1$ mặt đáy), $2n$ cạnh và $n+1$ đỉnh.

:::diagram Hình chóp $S.ABCD$ (các nét đứt là các cạnh bị che)
alt: Hình chóp tứ giác S.ABCD với đỉnh S phía trên, đáy ABCD, các cạnh SD, AD và CD vẽ bằng nét đứt vì bị che
point A 0,0 below-left
point B 3,0.5 below-right
point C 3.5,1.75 right
point D 1,2.5 left
point S 1.8,4.5 above
segment S A
segment S B
segment S C
segment A B
segment B C
segment S D dashed
segment A D dashed
segment C D dashed
:::

Cho bốn điểm $A$, $B$, $C$, $D$ không đồng phẳng. Hình gồm bốn tam giác $ABC$, $ACD$, $ABD$, $BCD$ gọi là **hình tứ diện** (gọi tắt là **tứ diện**) $ABCD$. Nó có $4$ đỉnh, $6$ cạnh và $4$ mặt. Tứ diện có bốn mặt đều là tam giác đều gọi là tứ diện đều.

:::note Hai kĩ thuật cơ bản
**Tìm giao tuyến của $(P)$ và $(Q)$:** tìm hai điểm chung phân biệt; đường thẳng qua hai điểm đó là giao tuyến. Một điểm chung thường là điểm đã cho (như đỉnh $S$); điểm kia thường là giao điểm của một đường thẳng trong $(P)$ và một đường thẳng trong $(Q)$.

**Tìm giao điểm của $d$ và $(P)$:** chọn mặt phẳng phụ $(Q)\supset d$, tìm giao tuyến $\Delta=(P)\cap(Q)$; giao điểm của $d$ và $\Delta$ chính là giao điểm cần tìm.
:::

:::example Bốn điểm không đồng phẳng
Cho bốn điểm $A$, $B$, $C$, $D$ không đồng phẳng. Chứng minh ba điểm bất kì trong bốn điểm đó không thẳng hàng. Có bao nhiêu mặt phẳng đi qua ba trong bốn điểm đó?

**Lời giải.** Giả sử ba điểm, chẳng hạn $A$, $B$, $C$, thẳng hàng. Khi đó đường thẳng chứa chúng và điểm $D$ cùng nằm trên một mặt phẳng (cách xác định thứ hai), nên bốn điểm đồng phẳng, mâu thuẫn. Vậy ba điểm bất kì không thẳng hàng.

Mỗi bộ ba điểm xác định đúng một mặt phẳng. Có $4$ bộ ba: $ABC$, $ABD$, $ACD$, $BCD$. Bốn mặt phẳng này khác nhau, vì nếu hai mặt phẳng trùng nhau thì cả bốn điểm đồng phẳng.

Vậy có đúng $4$ mặt phẳng, và chúng chính là bốn mặt của tứ diện $ABCD$.
:::

:::diagram Hình chóp $S.ABCD$ có $AB$ cắt $CD$ tại $E$
alt: Hình chóp S.ABCD, đường thẳng AB và CD kéo dài cắt nhau tại điểm E bên phải, và đoạn SE vẽ nét đứt
point A 0,0 below-left
point B 3,0.5 below-right
point C 3.5,1.75 right
point D 1,2.5 left
point S 1.8,4.5 above
segment S A
segment S B
segment S C
segment A B
segment B C
segment S D dashed
segment A D dashed
segment C D dashed
point E 6,1 right
segment B E dashed
segment C E dashed
segment S E dashed
:::

:::example Tìm giao tuyến của hai mặt phẳng
Cho hình chóp $S.ABCD$ có đáy là tứ giác $ABCD$ sao cho $AB$ cắt $CD$ tại $E$. Tìm giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$.

**Hiểu đề.** Ta cần một đường thẳng chung của $(SAB)$ và $(SCD)$. Theo tính chất 5, chỉ cần tìm hai điểm chung phân biệt.

**Tìm cách giải.** Điểm $S$ chắc chắn thuộc cả hai mặt phẳng. Ta tìm thêm một điểm chung nữa trên mặt phẳng đáy, từ giao điểm của hai đường thẳng $AB$ và $CD$ mà đề cho.

**Giải.** Điểm $S$ thuộc cả $(SAB)$ lẫn $(SCD)$. Vì $E\in AB$ và $AB\subset(SAB)$ nên $E\in(SAB)$. Vì $E\in CD$ và $CD\subset(SCD)$ nên $E\in(SCD)$. Vậy $E$ cũng là điểm chung, và $E\ne S$ vì $E$ nằm trong mặt đáy còn $S$ thì không.

Vậy giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng $SE$.

**Nhìn lại.** Nếu $ABCD$ là hình bình hành thì $AB$ song song với $CD$ và không có điểm $E$. Khi đó phương pháp này không dùng được, và giao tuyến là đường thẳng qua $S$ song song với $AB$; ta sẽ chứng minh điều này ở bài hai đường thẳng song song.
:::

:::diagram Điểm $M$ thuộc $SC$ và giao điểm $N$ của $SD$ với mặt phẳng $(MAB)$
alt: Hình chóp S.ABCD với điểm E, điểm M trên cạnh SC, và đường thẳng EM kéo dài cắt cạnh SD tại điểm N; đoạn BM nét liền và đoạn NA nét đứt
point A 0,0 below-left
point B 3,0.5 below-right
point C 3.5,1.75 right
point D 1,2.5 left
point S 1.8,4.5 above
segment S A
segment S B
segment S C
segment A B
segment B C
segment S D dashed
segment A D dashed
segment C D dashed
point E 6,1 right
point M 2.65,3.125 right
point N 1.53,3.83 left
segment B E dashed
segment C E dashed
segment E N dashed
segment B M
segment N A dashed
:::

:::example Tìm giao điểm của đường thẳng và mặt phẳng
Trong hình chóp trên, $M$ là trung điểm của $SC$. Tìm giao điểm $N$ của đường thẳng $SD$ và mặt phẳng $(MAB)$.

**Lời giải.** Đường thẳng $SD$ nằm trong mặt phẳng $(SCD)$. Ta tìm giao tuyến của $(SCD)$ và $(MAB)$. Điểm $M\in SC\subset(SCD)$ và $M\in(MAB)$ nên $M$ là điểm chung. Điểm $E=AB\cap CD$ thuộc $AB\subset(MAB)$ và thuộc $CD\subset(SCD)$ nên $E$ cũng là điểm chung. Vậy giao tuyến là đường thẳng $ME$.

Trong mặt phẳng $(SCD)$, đường thẳng $ME$ cắt $SD$ tại điểm $N$. Vì $N\in ME\subset(MAB)$ nên $N$ thuộc $(MAB)$, và $N\in SD$.

Vậy giao điểm của $SD$ và $(MAB)$ là điểm $N=SD\cap ME$.
:::

Cuối cùng ta quay lại câu hỏi ở đầu bài.

:::example Ghế ba chân và bàn bốn chân
Giải thích vì sao ghế ba chân luôn đứng vững trên nền phẳng còn bàn bốn chân có thể bị kênh.

**Hiểu đề.** Coi nền nhà là một mặt phẳng và mỗi chân là một đoạn thẳng có đầu dưới là một điểm. Chân ghế "chạm nền" khi đầu dưới của nó thuộc mặt phẳng nền.

**Tìm cách giải.** Dùng tính chất 2 (ba điểm không thẳng hàng xác định một mặt phẳng) và tính chất 4 (có bốn điểm không đồng phẳng).

**Giải.** Ghế có ba đầu chân $A$, $B$, $C$ không thẳng hàng nên xác định đúng một mặt phẳng $(ABC)$. Chỉ cần đặt ghế sao cho nền trùng $(ABC)$ thì cả ba chân cùng chạm nền; điều này luôn thực hiện được. Bàn có bốn đầu chân $A$, $B$, $C$, $D$ mà theo tính chất 4 có thể không đồng phẳng, chẳng hạn khi một chân ngắn hơn một chút. Một mặt phẳng nền chỉ chứa được cả bốn điểm khi chúng đồng phẳng, nên khi không thì có một chân hở và bàn kênh.

**Nhìn lại.** Vì thế giá đỡ máy ảnh và nhiều dụng cụ đo đạc dùng ba chân. Miếng giấy kê dưới chân hở làm bốn đầu chân đồng phẳng trở lại, nên bàn hết kênh.
:::

**Kết nối.** Ba cách xác định mặt phẳng và kĩ thuật tìm giao tuyến, giao điểm sẽ được dùng ở các bài sau. Bài kế tiếp xét hai đường thẳng trong không gian có thể cắt nhau, song song hoặc chéo nhau. Trong mỗi mặt phẳng, mọi kết quả của hình học phẳng vẫn dùng được (tính chất 6).

:::warning Những sai lầm thường gặp
- **Cho rằng ba điểm bất kì xác định một mặt phẳng.** Sai: ba điểm thẳng hàng $A$, $B$, $C$ xác định duy nhất một mặt phẳng. Vì sao sai: qua một đường thẳng có vô số mặt phẳng, như các trang sách mở quanh gáy sách. Đúng: ba điểm phải không thẳng hàng.
- **Cho rằng bốn điểm bất kì cùng thuộc một mặt phẳng.** Sai: bốn đầu chân bàn luôn cùng nằm trên mặt sàn. Vì sao sai: bốn đỉnh của một tứ diện không đồng phẳng. Đúng: chỉ ba điểm không thẳng hàng mới chắc chắn xác định mặt phẳng.
- **Tìm giao tuyến chỉ bằng một điểm chung.** Sai: giao tuyến của $(SAB)$ và $(SCD)$ là một đường thẳng nào đó đi qua $S$. Vì sao sai: nhiều đường thẳng đi qua $S$; cần hai điểm chung phân biệt. Đúng: tìm thêm $E=AB\cap CD$, giao tuyến là $SE$.
- **Cho rằng hai mặt phẳng phân biệt có thể chỉ chung một điểm.** Sai: $(P)$ và $(Q)$ chỉ chung đúng điểm $I$. Vì sao sai: theo tính chất 5, có một điểm chung thì có cả một đường thẳng chung. Đúng: hai mặt phẳng phân biệt hoặc không có điểm chung hoặc cắt nhau theo một đường thẳng.
:::

## Thuật ngữ

:::terms
- mặt phẳng | plane
- đường thẳng | line
- tính chất thừa nhận | postulate (axiom)
- giao tuyến | line of intersection
- đồng phẳng | coplanar
- thẳng hàng | collinear
- hình chóp | pyramid
- mặt đáy | base
- mặt bên | lateral face
- cạnh bên | lateral edge
- hình tứ diện | tetrahedron
:::

## Tóm tắt

- Qua hai điểm phân biệt có đúng một đường thẳng; qua ba điểm không thẳng hàng có đúng một mặt phẳng.
- Đường thẳng có hai điểm thuộc một mặt phẳng thì nằm trọn trong mặt phẳng đó.
- Hai mặt phẳng phân biệt có điểm chung thì cắt nhau theo một đường thẳng gọi là giao tuyến; để tìm giao tuyến, tìm hai điểm chung.
- Mặt phẳng xác định bởi: ba điểm không thẳng hàng; một đường thẳng và một điểm ngoài nó; hai đường thẳng cắt nhau.
- Hình chóp có đáy $n$-giác có $n+1$ mặt, $2n$ cạnh, $n+1$ đỉnh; tứ diện có $4$ mặt, $6$ cạnh, $4$ đỉnh.
- Để tìm giao điểm của đường thẳng $d$ và mặt phẳng $(P)$: chọn mặt phẳng phụ chứa $d$, tìm giao tuyến với $(P)$, rồi tìm giao điểm của $d$ với giao tuyến đó.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Hình chóp có đáy là đa giác $7$ cạnh có bao nhiêu mặt, cạnh và đỉnh?

::hint
**Kiến thức:** hình chóp đáy $n$-giác có $n+1$ mặt, $2n$ cạnh, $n+1$ đỉnh.

**Gợi ý các bước:**
1. Thay $n=7$.

::solution
Với $n=7$: $n+1=8$ mặt, $2n=14$ cạnh, $n+1=8$ đỉnh.

**Đáp số.** $8$ mặt, $14$ cạnh, $8$ đỉnh.
:::

:::exercise
Cho năm điểm trong không gian, trong đó không có ba điểm nào thẳng hàng và không có bốn điểm nào đồng phẳng. Có bao nhiêu mặt phẳng đi qua ba trong năm điểm đó?

::hint
**Kiến thức:** mỗi bộ ba điểm không thẳng hàng xác định đúng một mặt phẳng; các mặt phẳng khác nhau vì không có bốn điểm đồng phẳng.

**Gợi ý các bước:**
1. Đếm số cách chọn ba điểm trong năm điểm.
2. Giải thích vì sao các mặt phẳng đôi một khác nhau.

::solution
Số cách chọn ba điểm trong năm điểm là $\dbinom{5}{3}=10$. Mỗi bộ ba không thẳng hàng xác định đúng một mặt phẳng. Hai bộ ba khác nhau cho hai mặt phẳng khác nhau, vì nếu trùng nhau thì ít nhất bốn điểm đồng phẳng.

**Đáp số.** $10$ mặt phẳng.
:::

:::exercise
Cho tứ diện $ABCD$. Lấy $M$ thuộc cạnh $AB$ và $N$ thuộc cạnh $AC$ sao cho đường thẳng $MN$ cắt đường thẳng $BC$ tại $E$. Tìm giao tuyến của hai mặt phẳng $(DMN)$ và $(BCD)$.

::hint
**Kiến thức:** hai điểm chung phân biệt xác định giao tuyến.

**Gợi ý các bước:**
1. $D$ thuộc cả hai mặt phẳng.
2. Chứng tỏ $E$ thuộc cả hai mặt phẳng.

::solution
Điểm $D$ thuộc cả hai mặt phẳng. Vì $E\in MN\subset(DMN)$ và $E\in BC\subset(BCD)$ nên $E$ cũng là điểm chung. Hai điểm chung $D$, $E$ phân biệt (vì $E$ thuộc mặt phẳng $(ABC)$ còn $D$ thì không) cho giao tuyến $DE$.

**Đáp số.** Giao tuyến là đường thẳng $DE$.
:::

:::exercise
Cho hình chóp $S.ABCD$ có đáy là tứ giác $ABCD$ sao cho $AB$ cắt $CD$ tại $E$. Lấy điểm $M$ thuộc cạnh $SD$. Tìm giao điểm của đường thẳng $SC$ và mặt phẳng $(MAB)$.

::hint
**Kiến thức:** chọn mặt phẳng phụ chứa $SC$, đó là $(SCD)$; tìm giao tuyến của $(SCD)$ và $(MAB)$.

**Gợi ý các bước:**
1. Chỉ ra hai điểm chung $M$ và $E$.
2. Tìm giao điểm của đường thẳng $ME$ với $SC$ trong $(SCD)$.

::solution
Mặt phẳng phụ chứa $SC$ là $(SCD)$. Điểm $M\in SD\subset(SCD)$ và $M\in(MAB)$; điểm $E\in CD\subset(SCD)$ và $E\in AB\subset(MAB)$. Do đó giao tuyến của $(SCD)$ và $(MAB)$ là $ME$. Trong mặt phẳng $(SCD)$, $ME$ cắt $SC$ tại $N$, và $N\in(MAB)$.

**Đáp số.** Giao điểm là $N=SC\cap ME$.
:::

:::exercise
Một cánh cửa gắn vào khung bằng hai bản lề (coi như hai điểm cố định) vẫn quay được quanh trục nối hai bản lề. Nếu thêm một chốt khoá là điểm cố định thứ ba, không nằm trên trục đó, thì cánh cửa không quay được nữa. Giải thích bằng các tính chất của mặt phẳng.

::hint
**Kiến thức:** qua hai điểm có một đường thẳng; qua ba điểm không thẳng hàng có đúng một mặt phẳng.

**Gợi ý các bước:**
1. Cánh cửa là một phần của mặt phẳng.
2. Mặt phẳng chứa hai điểm cố định có xác định duy nhất không?

::solution
Hai bản lề cố định chỉ cho ta một đường thẳng cố định. Có vô số mặt phẳng chứa đường thẳng này, nên cánh cửa có thể quay quanh nó và chiếm các vị trí khác nhau. Khi thêm chốt thứ ba không nằm trên trục, ba điểm cố định không thẳng hàng xác định đúng một mặt phẳng. Cánh cửa phải nằm trong mặt phẳng duy nhất đó nên không quay được.

**Đáp số.** Hai điểm chỉ cố định được một đường thẳng; ba điểm không thẳng hàng cố định được mặt phẳng.
:::

:::exercise
Cho bốn điểm $A$, $B$, $C$, $D$ không đồng phẳng. Xét tính đúng sai của các mệnh đề sau:

a) Ba điểm $A$, $B$, $C$ không thẳng hàng.

b) Hai đường thẳng $AB$ và $CD$ có thể cắt nhau.

c) Hai mặt phẳng $(ABC)$ và $(ABD)$ có giao tuyến là đường thẳng $AB$.

d) Có đúng $3$ mặt phẳng đi qua ba trong bốn điểm đã cho.

::hint
**Kiến thức:** nếu hai đường thẳng cắt nhau thì chúng cùng nằm trên một mặt phẳng.

**Gợi ý các bước:**
1. b) Nếu $AB$ cắt $CD$ thì bốn điểm có đồng phẳng không?
2. c) $A$, $B$ là hai điểm chung.
3. d) Đếm các bộ ba.

::solution
a) **Đúng**: nếu thẳng hàng thì cùng với $D$ chúng đồng phẳng.

b) **Sai**: nếu $AB$ và $CD$ cắt nhau thì chúng nằm trên một mặt phẳng, và bốn điểm đồng phẳng.

c) **Đúng**: $A$ và $B$ thuộc cả hai mặt phẳng nên giao tuyến là $AB$.

d) **Sai**: có $4$ mặt phẳng $(ABC)$, $(ABD)$, $(ACD)$, $(BCD)$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise Ôn tập
Số cạnh của hình chóp có đáy là tam giác, tứ giác, ngũ giác, ... (đáy $n$-giác với $n=3, 4, 5, \dots$) lập thành một dãy số $(u_k)$. Chứng minh dãy này là cấp số cộng, tìm công sai và số hạng tổng quát, rồi tính số cạnh của hình chóp có đáy $20$ cạnh.

::hint
**Kiến thức:** hình chóp đáy $n$-giác có $2n$ cạnh; ở bài cấp số cộng, $u_k=u_1+(k-1)d$.

**Gợi ý các bước:**
1. Viết vài số hạng đầu: $6, 8, 10, \dots$.
2. Tính $u_{k+1}-u_k$ và tìm $u_k$.

::solution
Hình chóp đáy tam giác có $6$ cạnh nên $u_1=6$; đáy $k+2$ cạnh có $2(k+2)=2k+4$ cạnh, tức $u_k=2k+4$. Vì $u_{k+1}-u_k=2$ không đổi nên đây là cấp số cộng với $u_1=6$, $d=2$. Hình chóp đáy $20$ cạnh ứng với $k=18$, và $u_{18}=2\cdot18+4=40$.

**Đáp số.** Cấp số cộng $u_k=2k+4$ (công sai $2$); hình chóp đáy $20$ cạnh có $40$ cạnh.
:::

:::exercise Thử thách
Cho ba mặt phẳng phân biệt $(P)$, $(Q)$, $(R)$ đôi một cắt nhau theo ba giao tuyến $a=(P)\cap(Q)$, $b=(Q)\cap(R)$, $c=(R)\cap(P)$. Chứng minh nếu $a$ và $b$ cắt nhau tại $I$ thì $I$ cũng thuộc $c$, tức là ba giao tuyến đồng quy.

::hint
**Kiến thức:** nếu điểm thuộc cả $(R)$ và $(P)$ thì nó thuộc giao tuyến $c$ của hai mặt phẳng đó.

**Gợi ý các bước:**
1. Xét xem $I$ thuộc những mặt phẳng nào.
2. Kết luận $I\in c$.

::solution
Vì $I\in a=(P)\cap(Q)$ nên $I\in(P)$ và $I\in(Q)$. Vì $I\in b=(Q)\cap(R)$ nên $I\in(Q)$ và $I\in(R)$. Do đó $I$ thuộc cả $(P)$ và $(R)$, nên $I$ thuộc giao tuyến $c=(R)\cap(P)$.

**Đáp số.** $I\in c$; ba giao tuyến $a$, $b$, $c$ đồng quy tại $I$.
:::

## Kiểm tra mini

:::quiz
::mc
Có bao nhiêu mặt phẳng đi qua ba điểm không thẳng hàng cho trước?
A. Vô số.
B. Hai.
C. Một và chỉ một.
D. Không có mặt phẳng nào.
::key C
Đây là tính chất thừa nhận thứ hai. Phương án A đúng với ba điểm thẳng hàng.

::mc
Hình chóp có đáy là lục giác có bao nhiêu mặt?
A. $6$.
B. $12$.
C. $8$.
D. $7$.
::key D
Hình chóp đáy lục giác có $6$ mặt bên và $1$ mặt đáy, tức $7$ mặt. Phương án A bỏ sót mặt đáy, phương án B là số cạnh.

::mc
Hai mặt phẳng phân biệt có một điểm chung. Khẳng định nào sau đây đúng?
A. Hai mặt phẳng có một đường thẳng chung duy nhất đi qua điểm đó.
B. Hai mặt phẳng không còn điểm chung nào khác.
C. Hai mặt phẳng trùng nhau.
D. Hai mặt phẳng có đúng ba điểm chung.
::key A
Theo tính chất thừa nhận thứ năm, hai mặt phẳng phân biệt có điểm chung thì cắt nhau theo một đường thẳng (giao tuyến).

::mc
Cách nào sau đây không luôn xác định duy nhất một mặt phẳng?
A. Ba điểm không thẳng hàng.
B. Ba điểm bất kì.
C. Một đường thẳng và một điểm không thuộc nó.
D. Hai đường thẳng cắt nhau.
::key B
Ba điểm thẳng hàng nằm trên vô số mặt phẳng, nên ba điểm bất kì chưa chắc xác định một mặt phẳng duy nhất. Các phương án A, C, D là ba cách xác định mặt phẳng.

::tf
Cho hình chóp $S.ABCD$ có đáy là tứ giác lồi $ABCD$, hai đường chéo $AC$ và $BD$ cắt nhau tại $O$. Xét tính đúng sai của các mệnh đề sau:
a) Điểm $O$ thuộc mặt phẳng $(SAB)$.
b) Điểm $O$ thuộc mặt phẳng $(SBD)$.
c) Giao tuyến của $(SAC)$ và $(SBD)$ là đường thẳng $AC$.
d) Đường thẳng $BD$ cắt mặt phẳng $(SAC)$ tại $O$.
::key S Đ S Đ
a) Sai: $O$ nằm trong tứ giác, không thuộc đường thẳng $AB$ nên không thuộc $(SAB)$. b) Đúng: $O\in BD\subset(SBD)$. c) Sai: giao tuyến là $SO$. d) Đúng: $O\in AC\subset(SAC)$ và $O\in BD$.

::sa
Một tứ diện đều có cạnh $6$ cm. Tổng độ dài tất cả các cạnh của nó là bao nhiêu xentimét?
::key 36
Tứ diện có $6$ cạnh, mỗi cạnh dài $6$ cm nên tổng là $6\cdot6=36$ cm.

::sa
Cho bảy điểm trong không gian, không có ba điểm nào thẳng hàng và không có bốn điểm nào đồng phẳng. Có bao nhiêu mặt phẳng đi qua ba trong bảy điểm đó?
::key 35
Số cách chọn ba điểm trong bảy điểm là $\dbinom{7}{3}=35$, và các mặt phẳng này đôi một khác nhau.
:::
