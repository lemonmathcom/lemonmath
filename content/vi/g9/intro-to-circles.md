---
title: Mở đầu về đường tròn
description: Hiểu đường tròn là gì, xác định vị trí của một điểm đối với đường tròn và dùng tính đối xứng của đường tròn để giải toán.
minutes: 20
---

:::goals
- Nêu được định nghĩa đường tròn, bán kính và đường kính.
- Xác định được một điểm nằm trong, nằm trên hay nằm ngoài một đường tròn.
- Biết đường tròn có tâm đối xứng là tâm và có vô số trục đối xứng.
:::

Thầy thể dục buộc sợi dây dài $5$ m vào gốc cây giữa sân, đầu kia buộc viên phấn, kéo căng dây và đi một vòng để vẽ vạch. Từ gốc cây, An đi $3$ m về phía đông rồi $4$ m về phía bắc; Bình đi $4$ m đông, $4$ m bắc; Chi đi $2$ m tây, $4$ m nam.

Bạn nào đứng đúng trên vạch, bạn nào trong vòng, bạn nào ngoài vòng?

## Đường tròn

### Khám phá: những điểm cách gốc cây đúng $5$ m

Viên phấn luôn cách gốc cây $O$ đúng $5$ m. Hai hướng đông và bắc vuông góc, nên ta tính khoảng cách theo định lí Pythagore:

| Bạn | An | Bình | Chi |
|---|---|---|---|
| Khoảng cách đến $O$ | $\sqrt{3^2+4^2}=5$ m | $\sqrt{4^2+4^2}=\sqrt{32}$ m | $\sqrt{2^2+4^2}=\sqrt{20}$ m |

An cách $O$ đúng $5$ m nên đứng trên vạch. Vạch gồm mọi điểm cách $O$ đúng $5$ m: đó là một đường tròn.

:::definition Đường tròn
Đường tròn tâm $O$ bán kính $R$ ($R>0$) là hình gồm tất cả các điểm cách điểm $O$ một khoảng bằng $R$. Kí hiệu: $(O; R)$, hoặc $(O)$ khi không cần nói rõ bán kính.
:::

Đoạn thẳng nối tâm với một điểm của đường tròn cũng gọi là **bán kính**; đoạn thẳng qua tâm có hai đầu mút trên đường tròn là **đường kính** (dài $2R$). Đường tròn cùng phần bên trong nó là **hình tròn**.

## Vị trí của một điểm đối với đường tròn

Ta so sánh khoảng cách từ điểm đến tâm với bán kính.

:::theorem Vị trí của điểm $M$ đối với đường tròn $(O; R)$
- $M$ nằm trên đường tròn khi và chỉ khi $OM=R$.
- $M$ nằm trong đường tròn khi và chỉ khi $OM<R$.
- $M$ nằm ngoài đường tròn khi và chỉ khi $OM>R$.
:::

:::diagram Ba vị trí của một điểm đối với đường tròn $(O; R)$
alt: Đường tròn tâm O, điểm M nằm trên đường tròn, điểm N nằm bên trong và điểm P nằm bên ngoài đường tròn
point O 0,0 below-left
point M 2.3,1.93 above-right
point N 1,-1 below
point P 4.2,-1.5 right
circle O 3
segment O M "R"
segment O N dashed
segment O P dashed
:::

Trở lại câu hỏi đầu bài: $OB=\sqrt{32}\approx5{,}66>5$ và $OC=\sqrt{20}\approx4{,}47<5$, nên Bình đứng ngoài vòng, Chi đứng trong vòng.

Để chứng minh nhiều điểm cùng nằm trên một đường tròn, ta chỉ ra một điểm cách đều tất cả các điểm đó.

:::example Bốn đỉnh của hình chữ nhật
Cho hình chữ nhật $ABCD$ có $AB=8$ cm, $BC=6$ cm, $O$ là giao điểm của hai đường chéo. Chứng minh rằng $A$, $B$, $C$, $D$ cùng nằm trên một đường tròn. Tính bán kính của đường tròn đó.

**Lời giải.** Xét tam giác $ABC$ vuông tại $B$, ta có $AC=\sqrt{8^2+6^2}=10$ (cm) (định lí Pythagore).

Hai đường chéo hình chữ nhật bằng nhau, cắt nhau tại trung điểm mỗi đường, do đó

$$OA=OB=OC=OD=\frac{AC}{2}=5\ \text{(cm)}.$$

Vậy $A$, $B$, $C$, $D$ cùng nằm trên đường tròn $(O; 5\text{ cm})$.
:::

Một điểm thuộc đường tròn thì cách tâm đúng $R$.

:::example Đường thẳng vuông góc với $OM$
Cho đường tròn $(O; 13\text{ cm})$ và điểm $M$ với $OM=5$ cm. Đường thẳng qua $M$ vuông góc với $OM$ cắt đường tròn tại $A$ và $B$. Tính $MA$.

**Lời giải.** Ta có $OA=13$ cm (vì $A$ thuộc đường tròn). Xét tam giác $OMA$ vuông tại $M$, theo định lí Pythagore ta có

$$MA=\sqrt{OA^2-OM^2}=\sqrt{13^2-5^2}=12\ \text{(cm)}.$$

Vậy $MA=12$ cm.
:::

## Tính đối xứng của đường tròn

Gấp đôi một tấm bìa tròn theo nếp đi qua tâm, hai nửa trùng khít nhau.

:::theorem Tâm đối xứng và trục đối xứng
- Đường tròn có tâm đối xứng là tâm của nó.
- Đường tròn có vô số trục đối xứng: mỗi đường thẳng đi qua tâm là một trục đối xứng.
:::

**Vì sao?** Nếu $A'$ đối xứng với $A$ qua $O$ thì $OA'=OA=R$. Nếu $A''$ đối xứng với $A$ qua đường thẳng $d$ đi qua $O$ thì $d$ là trung trực của $AA''$, nên $OA''=OA=R$. Vậy $A'$, $A''$ cùng thuộc đường tròn.

:::example Tìm tâm của một chiếc đĩa giấy
Lan gấp đôi một chiếc đĩa giấy hình tròn sao cho hai nửa trùng khít, mở ra, rồi gấp đôi theo cách khác. Giải thích vì sao giao điểm của hai nếp gấp là tâm của đĩa.

**Lời giải.** Mỗi nếp gấp là một trục đối xứng nên đi qua tâm. Hai nếp gấp khác nhau chỉ có một điểm chung.

Vậy giao điểm của hai nếp gấp là tâm của đĩa.
:::

:::warning Những sai lầm thường gặp
- **Nhầm bán kính với đường kính.** Sai: "Đường tròn đường kính $10$ cm có $R=10$ cm". Lí do sai: đường kính bằng $2R$. Đúng: $R=5$ cm.
- **Kết luận theo hình vẽ.** Sai: "Trên hình $M$ sát đường tròn nên $M$ thuộc đường tròn". Lí do sai: hình vẽ không chính xác. Đúng: tính $OM$, so sánh với $R$.
:::

## Thuật ngữ

:::terms
- đường tròn | circle
- tâm | centre
- bán kính | radius
- đường kính | diameter
- hình tròn | disc
- trục đối xứng | line of symmetry
:::

## Tóm tắt

- Đường tròn $(O; R)$ gồm các điểm cách $O$ đúng $R$; đường kính dài $2R$.
- $M$ nằm trên, trong, ngoài $(O; R)$ khi $OM=R$, $OM<R$, $OM>R$.
- Tâm là tâm đối xứng; mỗi đường thẳng qua tâm là một trục đối xứng.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho đường tròn $(O; 4\text{ cm})$ và ba điểm $A$, $B$, $C$ với $OA=3$ cm, $OB=4$ cm, $OC=4{,}5$ cm. Mỗi điểm nằm trong, nằm trên hay nằm ngoài đường tròn?

::hint
**Kiến thức:** so sánh khoảng cách đến tâm với $R$.

**Gợi ý các bước:**
1. So sánh $OA$, $OB$, $OC$ với $4$.

::solution
Ta so sánh khoảng cách từ tâm $O$ đến mỗi điểm với bán kính $R=4$ cm:

- Điểm $M$ nằm trong đường tròn khi $OM<R$;
- Điểm $M$ nằm trên đường tròn khi $OM=R$;
- Điểm $M$ nằm ngoài đường tròn khi $OM>R$.

Vì $OA=3<4$ nên điểm $A$ nằm trong đường tròn.

Vì $OB=4=R$ nên điểm $B$ nằm trên đường tròn.

Vì $OC=4{,}5>4$ nên điểm $C$ nằm ngoài đường tròn.

Vậy $A$ nằm trong, $B$ nằm trên và $C$ nằm ngoài đường tròn $(O; 4\text{ cm})$.

**Đáp số.** $A$ nằm trong, $B$ nằm trên, $C$ nằm ngoài đường tròn.
:::

:::exercise
Cho hình vuông $ABCD$ cạnh $4$ cm. Chứng minh rằng bốn đỉnh của hình vuông cùng nằm trên một đường tròn. Tính bán kính của đường tròn đó (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** hai đường chéo hình vuông bằng nhau, cắt nhau tại trung điểm mỗi đường.

**Gợi ý các bước:**
1. Tính $AC$ theo định lí Pythagore.
2. Suy ra $OA=OB=OC=OD$.

::solution
Ta có $AC=\sqrt{4^2+4^2}=4\sqrt2$ (cm). Gọi $O$ là giao điểm hai đường chéo, khi đó $OA=OB=OC=OD=\dfrac{AC}{2}=2\sqrt2\approx2{,}83$ (cm).

Vậy bốn đỉnh thuộc đường tròn $(O; 2\sqrt2\text{ cm})$, $R\approx2{,}83$ cm.

**Đáp số.** $R=2\sqrt2\approx2{,}83$ cm.
:::

:::exercise
Cho đường tròn $(O; 5\text{ cm})$ và điểm $A$ thuộc đường tròn. Gọi $A'$ là điểm đối xứng với $A$ qua $O$. Chứng minh rằng $A'$ thuộc đường tròn và tính $AA'$.

::hint
**Kiến thức:** $O$ là trung điểm của $AA'$.

**Gợi ý các bước:**
1. Suy ra $OA'=OA$, rồi tính $AA'$.

::solution
Vì $O$ là trung điểm của $AA'$ nên $OA'=OA=5$ cm, suy ra $A'$ thuộc đường tròn. Ta có $AA'=OA+OA'=10$ cm.

Vậy $A'$ thuộc đường tròn và $AA'=10$ cm.

**Đáp số.** $AA'=10$ cm.
:::

:::exercise
Một chiếc loa đặt tại $O$ nghe rõ trong bán kính $30$ m. Từ $O$, nhà $H_1$ ở $18$ m về phía đông rồi $24$ m về phía bắc; nhà $H_2$: $20$ m đông, $25$ m bắc; nhà $H_3$: $10$ m đông, $27$ m bắc. Nhà nào nghe rõ, nhà nào ở đúng biên, nhà nào ở ngoài vùng nghe rõ?

::hint
**Kiến thức:** định lí Pythagore; so sánh với $R=30$.

**Gợi ý các bước:**
1. Tính $OH_1$, $OH_2$, $OH_3$ rồi so sánh với $30$.

::solution
Ta có

$$OH_1=\sqrt{18^2+24^2}=30,\quad OH_2=\sqrt{1025}\approx32{,}0>30,\quad OH_3=\sqrt{829}\approx28{,}8<30.$$

Vậy $H_3$ nghe rõ, $H_1$ ở đúng biên, $H_2$ ở ngoài vùng nghe rõ.

**Đáp số.** $H_3$ nghe rõ; $H_1$ ở đúng biên; $H_2$ ở ngoài vùng nghe rõ.
:::

:::exercise
Minh cắt một chiếc bánh pizza hình tròn bán kính $15$ cm theo một đường thẳng đi qua tâm. Hai phần bánh có bằng nhau không? Tính độ dài vết cắt.

::hint
**Kiến thức:** mỗi đường thẳng qua tâm là một trục đối xứng.

**Gợi ý các bước:**
1. Dùng tính đối xứng; vết cắt là một đường kính.

::solution
Vết cắt qua tâm nên là trục đối xứng, do đó hai phần trùng khít khi gấp lại. Vết cắt là đường kính, dài $30$ cm.

Vậy hai phần bằng nhau và vết cắt dài $30$ cm.

**Đáp số.** Hai phần bằng nhau; vết cắt dài $30$ cm.
:::

:::exercise
Cho đường tròn $(O; 6\text{ cm})$ và điểm $A$ thuộc đường tròn. Lấy điểm $M$ sao cho $\widehat{AOM}=90^\circ$ và $\widehat{OMA}=30^\circ$. Điểm $M$ nằm trong hay nằm ngoài đường tròn? (Ôn lại [tỉ số lượng giác của góc nhọn](lesson:acute-angle-trig-ratios).)

::hint
**Kiến thức:** $\tan$ của góc nhọn bằng cạnh đối chia cạnh kề.

**Gợi ý các bước:**
1. Xét tam giác $OMA$ vuông tại $O$, viết $\tan\widehat{OMA}$.
2. Tính $OM$ và so sánh với $6$.

::solution
Xét tam giác $OMA$ vuông tại $O$, ta có $\tan\widehat{OMA}=\dfrac{OA}{OM}$, suy ra

$$OM=\frac{6}{\tan30^\circ}=6\sqrt3\approx10{,}39\ \text{(cm)}>6\ \text{cm}.$$

Vậy $M$ nằm ngoài đường tròn.

**Đáp số.** $M$ nằm ngoài đường tròn ($OM=6\sqrt3\approx10{,}39$ cm).
:::

:::exercise
**(1,5 điểm)** Cho tam giác $ABC$ vuông tại $A$, có $AB=6$ cm, $AC=8$ cm. Gọi $M$ là trung điểm của $BC$.

a) Tính $BC$.

b) Chứng minh rằng $A$, $B$, $C$ cùng nằm trên đường tròn tâm $M$. Tính bán kính của đường tròn đó.

c) Gọi $D$ là điểm đối xứng với $A$ qua $M$. Chứng minh rằng $D$ thuộc đường tròn ở câu b) và $ABDC$ là hình chữ nhật.

::hint
**Kiến thức:** trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.

**Gợi ý các bước:**
1. Dùng định lí Pythagore, rồi chỉ ra $MA=MB=MC$.
2. Xét hai đường chéo của $ABDC$.

::solution
a) Theo định lí Pythagore, $BC=\sqrt{6^2+8^2}=10$ (cm).

b) Ta có $MB=MC=MA=\dfrac{BC}{2}=5$ cm (tính chất đường trung tuyến ứng với cạnh huyền). Do đó $A$, $B$, $C$ thuộc đường tròn $(M; 5\text{ cm})$.

c) Ta có $MD=MA=5$ cm ($D$ đối xứng với $A$ qua $M$), suy ra $D$ thuộc $(M; 5\text{ cm})$. Tứ giác $ABDC$ có hai đường chéo $AD=BC$ cắt nhau tại trung điểm mỗi đường, nên là hình chữ nhật.

Vậy $BC=10$ cm, $R=5$ cm và $ABDC$ là hình chữ nhật.

**Đáp số.** a) $BC=10$ cm; b) $R=5$ cm; c) $D$ thuộc $(M; 5\text{ cm})$, $ABDC$ là hình chữ nhật.
:::

:::exercise Thử thách
Cho đường tròn $(O; 5\text{ cm})$ và điểm $M$ với $OM=3$ cm. Điểm $A$ chạy trên đường tròn. Tìm giá trị lớn nhất và giá trị nhỏ nhất của $MA$.

::hint
**Kiến thức:** bất đẳng thức tam giác $OA-OM<MA<OA+OM$.

**Gợi ý các bước:**
1. Xét $A$ không nằm trên đường thẳng $OM$.
2. Xét hai giao điểm của $OM$ với đường tròn.

::solution
Nếu $A$ không nằm trên đường thẳng $OM$, xét tam giác $OMA$ ta có $2<MA<8$. Đường thẳng $OM$ cắt đường tròn tại $A_1$, $A_2$ với $M$ nằm giữa $O$ và $A_1$; khi đó $MA_1=2$ cm, $MA_2=8$ cm.

Vậy $MA$ lớn nhất bằng $8$ cm ($A$ trùng $A_2$), nhỏ nhất bằng $2$ cm ($A$ trùng $A_1$).

**Đáp số.** $MA$ lớn nhất bằng $8$ cm, nhỏ nhất bằng $2$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Cho đường tròn $(O; 6\text{ cm})$ và điểm $M$ với $OM=5$ cm. Khẳng định nào sau đây đúng?
A. $M$ nằm ngoài đường tròn.
B. $M$ nằm trên đường tròn.
C. $M$ nằm trong đường tròn.
D. $M$ là tâm của đường tròn.
::key C
$OM=5<6=R$. Phương án A so sánh ngược chiều.

::mc
Đường kính của đường tròn bán kính $3{,}5$ cm là
A. $3{,}5$ cm.
B. $7$ cm.
C. $1{,}75$ cm.
D. $12{,}25$ cm.
::key B
$d=2R=7$ cm. C chia đôi thay vì nhân đôi, D lấy bình phương.

::mc
Đường tròn có bao nhiêu trục đối xứng?
A. $1$.
B. $2$.
C. $4$.
D. Vô số.
::key D
Mỗi đường thẳng đi qua tâm là một trục đối xứng.

::mc
Bán kính của đường tròn đi qua bốn đỉnh của hình chữ nhật có hai cạnh $5$ cm và $12$ cm là
A. $13$ cm.
B. $6$ cm.
C. $8{,}5$ cm.
D. $6{,}5$ cm.
::key D
Bán kính bằng nửa đường chéo $\sqrt{5^2+12^2}=13$. A quên chia đôi, C lấy nửa tổng hai cạnh.

::tf
Cho đường tròn $(O; 5\text{ cm})$, điểm $A$ với $OA=5$ cm, điểm $B$ với $OB=4$ cm và điểm $C$ đối xứng với $A$ qua $O$. Xét tính đúng sai của các mệnh đề sau:
a) Điểm $A$ nằm trên đường tròn.
b) Điểm $B$ nằm ngoài đường tròn.
c) $AC=10$ cm.
d) Điểm $C$ nằm trên đường tròn.
::key Đ S Đ Đ
a) Đúng: $OA=R$. b) Sai: $OB<5$. c) Đúng: $AC=2R$. d) Đúng: $OC=OA$.

::sa
Tính bán kính (đơn vị: cm) của đường tròn đi qua bốn đỉnh của hình vuông cạnh $6$ cm (làm tròn kết quả đến hàng phần mười).
::key 4,2
Bán kính bằng nửa đường chéo: $\dfrac{6\sqrt2}{2}=3\sqrt2\approx4{,}2$ cm.

::sa
Cho đường tròn $(O; 10\text{ cm})$ và điểm $M$ với $OM=6$ cm. Đường thẳng qua $M$ vuông góc với $OM$ cắt đường tròn tại $A$ và $B$. Tính $AB$ (đơn vị: cm).
::key 16
$MA=\sqrt{10^2-6^2}=8$ cm và $MB=MA$ (đối xứng qua $OM$), nên $AB=16$ cm.
:::
