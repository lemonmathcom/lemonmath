---
title: Tổng và hiệu của hai vectơ
description: Cộng, trừ vectơ bằng quy tắc ba điểm và quy tắc hình bình hành; dùng hệ thức trung điểm, trọng tâm để giải bài toán hình học và bài toán về lực.
minutes: 25
---

:::goals
- Cộng hai vectơ bằng quy tắc ba điểm và quy tắc hình bình hành.
- Dùng các tính chất của phép cộng vectơ và vectơ đối để rút gọn biểu thức.
- Trừ hai vectơ và vận dụng hệ thức $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.
- Dùng hệ thức trung điểm, trọng tâm và cộng các lực, vận tốc.
:::

Từ nhà, bạn đi $300$ m về phía đông đến cổng trường, rồi đi tiếp $400$ m về phía bắc đến thư viện. Bạn đã đi tổng cộng $700$ m. Vậy thư viện cách nhà bạn bao xa, và theo hướng nào?

## Cộng hai vectơ

### Quy tắc ba điểm

Ta vẽ thử. Gọi nhà là $A$, cổng trường là $B$, thư viện là $C$. Chặng thứ nhất là vectơ $\overrightarrow{AB}$ dài $300$ m, chặng thứ hai là $\overrightarrow{BC}$ dài $400$ m, và hai chặng vuông góc với nhau. Kết quả cuối cùng của chuyến đi chỉ phụ thuộc vào điểm đầu $A$ và điểm cuối $C$:

$$AC=\sqrt{300^2+400^2}=\sqrt{250\,000}=500\ \text{(m)}.$$

Vậy thư viện cách nhà $500$ m, theo hướng nằm giữa đông và bắc, chứ không phải $700$ m. Hai độ dời $\overrightarrow{AB}$ và $\overrightarrow{BC}$ được gộp thành **một** độ dời $\overrightarrow{AC}$. Đó là ý nghĩa của phép cộng vectơ.

:::definition Tổng của hai vectơ (quy tắc ba điểm)
Cho hai vectơ $\vec{a}$ và $\vec{b}$. Lấy điểm $A$ tuỳ ý, vẽ $\overrightarrow{AB} = \vec{a}$ rồi vẽ $\overrightarrow{BC} = \vec{b}$. Vectơ $\overrightarrow{AC}$ là **tổng** của $\vec{a}$ và $\vec{b}$, kí hiệu $\vec{a}+\vec{b}$. Như vậy, với ba điểm $A$, $B$, $C$ bất kì:
$$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}.$$
:::

:::diagram Quy tắc ba điểm: $\vec{a} + \vec{b}$
alt: Tam giác ABC. Mũi tên a đi từ A đến B, mũi tên b đi từ B đến C và mũi tên a+b đi từ A đến C.
point A 0,0 below-left
point B 3,2 above
point C 5,0 below-right
arrow A B "a"
arrow B C "b"
arrow A C "a+b"
:::

Quy tắc đúng với **mọi** bộ ba điểm, kể cả khi ba điểm thẳng hàng. Điểm $B$ ở giữa "triệt tiêu": điểm cuối của vectơ thứ nhất phải trùng điểm đầu của vectơ thứ hai.

### Quy tắc hình bình hành

Nếu hai vectơ cùng xuất phát từ điểm $O$, chẳng hạn $\overrightarrow{OA} = \vec{a}$ và $\overrightarrow{OD} = \vec{b}$, ta dựng hình bình hành $OACD$. Đường chéo xuất phát từ $O$ là tổng của hai vectơ.

:::theorem Quy tắc hình bình hành
Nếu $OACD$ là hình bình hành thì
$$\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OC}.$$
:::

**Vì sao?** Trong hình bình hành $OACD$ có $\overrightarrow{AC} = \overrightarrow{OD}$. Thay vào rồi dùng quy tắc ba điểm: $\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OA} + \overrightarrow{AC} = \overrightarrow{OC}$.

:::diagram Quy tắc hình bình hành
alt: Hình bình hành có các đỉnh O, A, C, D. Các mũi tên a từ O đến A và b từ O đến D cùng xuất phát từ O, còn đường chéo a+b đi từ O đến C.
point O 0,0 below-left
point A 4,0 below-right
point D 1.5,2 above-left
point C 5.5,2 above-right
segment A C dashed
segment D C dashed
arrow O A "a"
arrow O D "b"
arrow O C "a+b"
:::

### Tính chất của phép cộng

Với mọi vectơ $\vec{a}$, $\vec{b}$, $\vec{c}$:

| Tính chất | Công thức |
|---|---|
| Giao hoán | $\vec{a} + \vec{b} = \vec{b} + \vec{a}$ |
| Kết hợp | $(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})$ |
| Vectơ-không | $\vec{a} + \vec{0} = \vec{0} + \vec{a} = \vec{a}$ |
| Vectơ đối | $\vec{a} + (-\vec{a}) = \vec{0}$ |

Tính giao hoán thực chất là quy tắc hình bình hành: $\overrightarrow{OA} + \overrightarrow{OD}$ và $\overrightarrow{OD} + \overrightarrow{OA}$ đều là đường chéo $\overrightarrow{OC}$. Nhờ tính kết hợp, ta cộng nhiều vectơ mà không cần dấu ngoặc. Tính chất cuối suy ra từ quy tắc ba điểm: $\overrightarrow{AB} + \overrightarrow{BA} = \overrightarrow{AA} = \vec{0}$.

Ví dụ đầu tiên chỉ dùng quy tắc ba điểm nhiều lần liên tiếp.

:::example Đường đi khép kín
Với bốn điểm $A$, $B$, $C$, $D$ bất kì, rút gọn $\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} + \overrightarrow{DA}$.

**Lời giải.** Các số hạng chưa "nối đuôi" nhau, nên ta dùng tính giao hoán để sắp lại cho điểm cuối của vectơ trước trùng điểm đầu của vectơ sau:

$$\begin{aligned}
\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} + \overrightarrow{DA} &= \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA}\\
&= \overrightarrow{AC} + \overrightarrow{CD} + \overrightarrow{DA}\\
&= \overrightarrow{AD} + \overrightarrow{DA} = \overrightarrow{AA}=\vec{0}.
\end{aligned}$$

Vậy tổng bằng $\vec{0}$: đi theo một đường khép kín quay về chỗ xuất phát thì tổng độ dời bằng $\vec{0}$.
:::

Khi cần **độ dài** của một tổng, ta đưa tổng về một vectơ duy nhất rồi tính độ dài đoạn thẳng đó.

:::example Độ dài của tổng trong hình thoi
Hình thoi $ABCD$ có cạnh $4$ và $\widehat{BAD}=60^\circ$. Tính $|\overrightarrow{AB}+\overrightarrow{AD}|$.

**Lời giải.** Hai vectơ chung điểm đầu $A$ và $ABCD$ là hình bình hành, nên theo quy tắc hình bình hành $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.

Tam giác $ABD$ có $AB=AD=4$ và góc xen giữa $60^\circ$, nên nó đều. Đường chéo $AC$ gấp đôi đường cao $AO$ của tam giác đều $ABD$ ($O$ là tâm hình thoi):

$$AC=2\cdot AO=2\cdot\frac{4\sqrt3}{2}=4\sqrt3.$$

Vậy $|\overrightarrow{AB}+\overrightarrow{AD}|=4\sqrt3$.

**Kiểm tra.** $4\sqrt3\approx6{,}93$, nhỏ hơn $|\overrightarrow{AB}|+|\overrightarrow{AD}|=8$: độ dài không cộng thẳng được.
:::

## Hiệu của hai vectơ

Nếu cộng là "đi tiếp", thì trừ là "đi tiếp theo chiều ngược lại". Ta định nghĩa phép trừ qua vectơ đối.

:::definition Hiệu của hai vectơ
**Hiệu** của hai vectơ $\vec{a}$ và $\vec{b}$ là tổng của $\vec{a}$ và vectơ đối của $\vec{b}$:
$$\vec{a} - \vec{b} = \vec{a} + (-\vec{b}).$$
:::

Dạng hữu ích nhất của phép trừ là: với ba điểm $O$, $A$, $B$ bất kì,
$$\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}.$$
**Vì sao?** $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{OA} + \overrightarrow{BO} = \overrightarrow{BO} + \overrightarrow{OA} = \overrightarrow{BA}$. Nói bằng lời: *hiệu của hai vectơ cùng điểm đầu là vectơ nối hai điểm cuối, hướng về điểm cuối của vectơ thứ nhất.*

:::diagram Hiệu $\vec{a} - \vec{b}$
alt: Hai mũi tên a và b xuất phát từ điểm chung O đến các điểm A và B, và mũi tên a-b đi từ B đến A.
point O 0,0 below-left
point A 4,1 right
point B 1,2.5 above
arrow O A "a"
arrow O B "b"
arrow B A "a−b"
:::

Ví dụ sau đặt tổng và hiệu cạnh nhau trong cùng một hình.

:::example Tổng và hiệu trong hình chữ nhật
$ABCD$ là hình chữ nhật có $AB = 6$ và $AD = 8$. Tính $|\overrightarrow{AB} + \overrightarrow{AD}|$ và $|\overrightarrow{AB} - \overrightarrow{AD}|$.

**Lời giải.** Tổng dùng quy tắc hình bình hành, hiệu dùng quy tắc trừ (hai vectơ cùng điểm đầu $A$):

$$\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC},\qquad \overrightarrow{AB} - \overrightarrow{AD} = \overrightarrow{DB}.$$

Hai đường chéo của hình chữ nhật bằng nhau, và theo định lí Pythagore:

$$AC = DB = \sqrt{6^2 + 8^2} = 10.$$

Vậy $|\overrightarrow{AB} + \overrightarrow{AD}| = |\overrightarrow{AB} - \overrightarrow{AD}| = 10$. Hai vectơ $\overrightarrow{AC}$ và $\overrightarrow{DB}$ khác nhau (khác hướng) nhưng cùng độ dài.
:::

Phép trừ còn giúp chứng minh các đẳng thức vectơ: ta biến đổi một vế, chèn thêm điểm bằng quy tắc ba điểm.

:::example Chứng minh một đẳng thức
Chứng minh rằng với bốn điểm $A$, $B$, $C$, $D$ bất kì: $\overrightarrow{AB} - \overrightarrow{CD} = \overrightarrow{AC} + \overrightarrow{DB}$.

**Lời giải.** Ta biến đổi vế phải. Chèn điểm $B$ vào $\overrightarrow{AC}$ và điểm $C$ vào $\overrightarrow{DB}$:

$$\begin{aligned}
\overrightarrow{AC} + \overrightarrow{DB} &= (\overrightarrow{AB} + \overrightarrow{BC}) + (\overrightarrow{DC} + \overrightarrow{CB})\\
&= \overrightarrow{AB} + \overrightarrow{DC} + (\overrightarrow{BC} + \overrightarrow{CB})\\
&= \overrightarrow{AB} + \overrightarrow{DC}.
\end{aligned}$$

Mà $\overrightarrow{DC}=-\overrightarrow{CD}$, nên $\overrightarrow{AB} + \overrightarrow{DC}=\overrightarrow{AB} - \overrightarrow{CD}$. Vậy đẳng thức được chứng minh.
:::

## Trung điểm và trọng tâm

:::theorem Hệ thức trung điểm và trọng tâm
- $M$ là trung điểm của đoạn thẳng $AB$ khi và chỉ khi $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$.
- $G$ là trọng tâm của tam giác $ABC$ khi và chỉ khi $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.
:::

**Vì sao hệ thức thứ nhất đúng?** Nếu $M$ là trung điểm thì $\overrightarrow{MA}$ và $\overrightarrow{MB}$ cùng độ dài và ngược hướng, nên chúng là hai vectơ đối nhau và tổng bằng $\vec{0}$. Ngược lại, tổng bằng $\vec{0}$ nghĩa là $\overrightarrow{MB}=-\overrightarrow{MA}$, nên $M$ nằm giữa $A$, $B$ và $MA=MB$.

Hệ thức trọng tâm khó hơn; ta chứng minh nó bằng quy tắc hình bình hành.

:::example Chứng minh hệ thức trọng tâm
Gọi $G$ là trọng tâm tam giác $ABC$ và $M$ là trung điểm của $BC$. Chứng minh rằng $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.

**Lời giải.** Ta gộp $\overrightarrow{GB} + \overrightarrow{GC}$ thành một vectơ bằng quy tắc hình bình hành, rồi so sánh với $\overrightarrow{GA}$.

Lấy điểm $D$ sao cho $M$ là trung điểm của $GD$. Tứ giác $GBDC$ có hai đường chéo $GD$, $BC$ cắt nhau tại trung điểm $M$ của mỗi đường, nên nó là hình bình hành. Do đó:

$$\overrightarrow{GB} + \overrightarrow{GC} = \overrightarrow{GD}.$$

Trọng tâm nằm trên trung tuyến $AM$ với $GA = 2GM = GD$, và $A$, $D$ nằm về hai phía của $G$. Vậy $\overrightarrow{GD}=-\overrightarrow{GA}$, và:

$$\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \overrightarrow{GA} + \overrightarrow{GD} = \vec{0}.$$
:::

## Lực và vận tốc

Khi hai lực cùng tác dụng lên một vật, lực duy nhất có tác dụng tương đương gọi là **hợp lực**: đó là tổng của hai vectơ lực. Vận tốc cũng cộng như vậy, chẳng hạn vận tốc của chiếc thuyền và của dòng nước.

:::diagram Thuyền qua sông
alt: Hình chữ nhật có đỉnh O. Mũi tên b đi lên từ O (thuyền) và mũi tên c đi sang phải từ O (dòng nước). Mũi tên đường chéo v đi từ O đến đỉnh đối diện. Có kí hiệu góc vuông tại O.
point O 0,0 below-left
point A 3,0 below-right
point B 0,4 above-left
point C 3,4 above-right
segment A C dashed
segment B C dashed
arrow O B "b"
arrow O A "c"
arrow O C "v"
right A O B
:::

Ví dụ cuối là một bài toán thực tế: vận tốc thật của thuyền là tổng của hai vận tốc.

:::example Thuyền và dòng nước
Một chiếc thuyền hướng mũi thẳng sang bờ bên kia và chạy với vận tốc $4$ km/h so với nước. Dòng nước chảy với vận tốc $3$ km/h, vuông góc với hướng của thuyền. Tìm tốc độ của thuyền so với bờ.

**Lời giải.** Gọi $\vec{b}$ là vận tốc của thuyền so với nước ($|\vec{b}| = 4$) và $\vec{c}$ là vận tốc dòng nước ($|\vec{c}| = 3$). Vận tốc so với bờ là $\vec{v} = \vec{b} + \vec{c}$, đường chéo của hình bình hành dựng trên $\vec{b}$, $\vec{c}$.

Hai vectơ vuông góc nên hình bình hành đó là hình chữ nhật, và theo định lí Pythagore:

$$|\vec{v}| = \sqrt{4^2 + 3^2} = \sqrt{25} = 5.$$

Vậy tốc độ của thuyền so với bờ là $5$ km/h. Đây cũng là tam giác $3$-$4$-$5$ của chuyến đi ở đầu bài.
:::

:::warning Những sai lầm thường gặp
- **Cộng thẳng độ dài.** Sai: "$|\vec{b}+\vec{c}|=4+3=7$". Đúng: $|\vec{a} + \vec{b}| \leq |\vec{a}| + |\vec{b}|$, dấu bằng chỉ khi hai vectơ cùng hướng; ở ví dụ chiếc thuyền, tốc độ là $5$.
- **Đảo thứ tự khi trừ.** Sai: "$\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{AB}$". Đúng: $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$, vectơ hiệu hướng về điểm cuối của vectơ **thứ nhất**.
- **Dùng quy tắc ba điểm khi hai vectơ không nối đuôi.** Sai: "$\overrightarrow{AB} + \overrightarrow{CB}=\overrightarrow{AC}$". Đúng: $\overrightarrow{AB} + \overrightarrow{CB}=\overrightarrow{AB} - \overrightarrow{BC}$, phải biến đổi tiếp; quy tắc ba điểm cần điểm cuối của vectơ thứ nhất là điểm đầu của vectơ thứ hai.
:::

## Thuật ngữ

:::terms
- tổng của hai vectơ | sum of vectors
- quy tắc ba điểm | triangle rule
- quy tắc hình bình hành | parallelogram rule
- tính chất giao hoán | commutative property
- tính chất kết hợp | associative property
- vectơ đối | opposite vector
- hiệu của hai vectơ | difference of vectors
- trung điểm | midpoint
- trọng tâm | centroid
- hợp lực | resultant force
:::

## Tóm tắt

- Quy tắc ba điểm: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ (nối đuôi).
- Quy tắc hình bình hành: $OACD$ là hình bình hành thì $\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OC}$ (chung gốc, lấy đường chéo).
- Phép cộng giao hoán, kết hợp; $\vec{a} + \vec{0} = \vec{a}$, $\vec{a} + (-\vec{a}) = \vec{0}$.
- Hiệu: $\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$; $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.
- Trung điểm: $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$. Trọng tâm: $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.
- Hợp lực, vận tốc thật là tổng vectơ; độ dài tính bằng Pythagore hoặc định lí côsin.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Rút gọn: (a) $\overrightarrow{MN} + \overrightarrow{NP} + \overrightarrow{PQ}$; (b) $\overrightarrow{AB} - \overrightarrow{AC}$; (c) $\overrightarrow{AB} + \overrightarrow{BC} - \overrightarrow{AD}$.

::hint
**Kiến thức:** $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ và $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.

**Gợi ý các bước:**
1. Với tổng, nối đuôi các vectơ từ trái sang phải.
2. Với hiệu, nhìn hai vectơ chung điểm đầu và nối hai điểm cuối.

::solution
(a) $\overrightarrow{MN} + \overrightarrow{NP} + \overrightarrow{PQ} = \overrightarrow{MP} + \overrightarrow{PQ} = \overrightarrow{MQ}$.
(b) Hai vectơ chung điểm đầu $A$: $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}$.
(c) $\overrightarrow{AB} + \overrightarrow{BC} - \overrightarrow{AD} = \overrightarrow{AC} - \overrightarrow{AD} = \overrightarrow{DC}$.

**Đáp số.** (a) $\overrightarrow{MQ}$; (b) $\overrightarrow{CB}$; (c) $\overrightarrow{DC}$.
:::

:::exercise
$ABCD$ là hình vuông cạnh $4$. Tính $|\overrightarrow{AB} + \overrightarrow{AD}|$, $|\overrightarrow{AB} - \overrightarrow{AD}|$ và $|\overrightarrow{AB} + \overrightarrow{CD}|$.

::hint
**Kiến thức:** quy tắc hình bình hành, quy tắc trừ, và $\overrightarrow{CD}=\overrightarrow{BA}$ trong hình vuông.

**Gợi ý các bước:**
1. Đưa mỗi biểu thức về một vectơ.
2. Tính độ dài bằng định lí Pythagore.

::solution
$\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$ và $\overrightarrow{AB} - \overrightarrow{AD} = \overrightarrow{DB}$, cả hai là đường chéo dài $\sqrt{4^2+4^2}=4\sqrt2$. Vì $\overrightarrow{CD}=\overrightarrow{BA}$ nên $\overrightarrow{AB} + \overrightarrow{CD} = \overrightarrow{AB} + \overrightarrow{BA}=\vec{0}$.

**Đáp số.** $4\sqrt2$; $4\sqrt2$; $0$.
:::

:::exercise
$ABCD$ là hình bình hành tâm $O$. Chứng minh rằng $\overrightarrow{OA} + \overrightarrow{OC} = \vec{0}$ và $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} + \overrightarrow{OD} = \vec{0}$.

::hint
**Kiến thức:** hai đường chéo của hình bình hành cắt nhau tại trung điểm mỗi đường; hệ thức trung điểm.

**Gợi ý các bước:**
1. $O$ là trung điểm của $AC$ và của $BD$.
2. Viết hai hệ thức trung điểm rồi cộng lại.

::solution
$O$ là trung điểm của $AC$ nên $\overrightarrow{OA} + \overrightarrow{OC} = \vec{0}$; $O$ là trung điểm của $BD$ nên $\overrightarrow{OB} + \overrightarrow{OD} = \vec{0}$. Cộng hai đẳng thức được $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} + \overrightarrow{OD} = \vec{0}$.

**Đáp số.** Cả hai đẳng thức đúng (đã chứng minh).
:::

:::exercise
Chứng minh rằng với bốn điểm $A$, $B$, $C$, $D$ bất kì: $\overrightarrow{AB} + \overrightarrow{CD} = \overrightarrow{AD} + \overrightarrow{CB}$.

::hint
**Kiến thức:** chèn điểm bằng quy tắc ba điểm: $\overrightarrow{AB}=\overrightarrow{AD}+\overrightarrow{DB}$.

**Gợi ý các bước:**
1. Chèn điểm $D$ vào $\overrightarrow{AB}$ và điểm $B$ vào $\overrightarrow{CD}$.
2. Nhóm hai vectơ đối nhau.

::solution
$$\overrightarrow{AB} + \overrightarrow{CD} = (\overrightarrow{AD} + \overrightarrow{DB}) + (\overrightarrow{CB} + \overrightarrow{BD}) = \overrightarrow{AD} + \overrightarrow{CB} + (\overrightarrow{DB} + \overrightarrow{BD}) = \overrightarrow{AD} + \overrightarrow{CB}.$$

**Đáp số.** Đẳng thức đúng (đã chứng minh).
:::

:::exercise
Một chiếc thuyền chạy với vận tốc $6$ km/h so với nước, hướng mũi thẳng sang bờ bên kia của một con sông có dòng nước chảy $8$ km/h, vuông góc với hướng của thuyền.

a) Tốc độ của thuyền so với bờ là bao nhiêu?
b) Đường đi thật của thuyền lệch bao nhiêu độ so với hướng mũi thuyền (làm tròn đến độ)?

::hint
**Kiến thức:** vận tốc thật bằng tổng hai vectơ vận tốc; trong tam giác vuông, $\tan$ của góc nhọn bằng cạnh đối chia cạnh kề.

**Gợi ý các bước:**
1. Vẽ hình chữ nhật dựng trên hai vectơ vận tốc; vận tốc thật là đường chéo.
2. Góc lệch $\alpha$ nằm giữa hướng mũi thuyền và đường chéo, có $\tan\alpha=\dfrac{8}{6}$.

::solution
a) $|\vec{v}|=\sqrt{6^2+8^2}=\sqrt{100}=10$ (km/h).

b) Cạnh kề với góc lệch là $6$ (hướng mũi thuyền), cạnh đối là $8$ (dòng nước): $\tan\alpha=\dfrac86\approx1{,}333$, nên $\alpha\approx53^\circ$.

**Đáp số.** a) $10$ km/h; b) khoảng $53^\circ$.
:::

:::exercise
Hai lực, mỗi lực có độ lớn $20$ N, cùng tác dụng vào một điểm và hợp với nhau góc $120^\circ$. Tìm độ lớn của hợp lực.

::hint
**Kiến thức:** hợp lực là đường chéo của hình bình hành dựng trên hai lực; hình bình hành có hai cạnh kề bằng nhau là hình thoi.

**Gợi ý các bước:**
1. Vẽ $\overrightarrow{OA}$, $\overrightarrow{OB}$ dài $20$, góc $\widehat{AOB}=120^\circ$, dựng hình thoi $OACB$.
2. Xét tam giác $OAC$: tính góc tại $A$ rồi nhận dạng tam giác.

::solution
Vẽ $\overrightarrow{OA}$, $\overrightarrow{OB}$ biểu diễn hai lực và dựng hình thoi $OACB$. Hợp lực là $\overrightarrow{OC}$. Trong hình thoi, $\widehat{OAC}=180^\circ-120^\circ=60^\circ$ và $AO=AC=20$, nên tam giác $OAC$ đều, $OC=20$.

**Đáp số.** $20$ N.
:::

:::exercise
Cho tam giác đều $ABC$ cạnh $6$ và $M$ là trung điểm của $BC$. Mỗi khẳng định sau đúng hay sai?

a) $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{BC}$.
b) $|\overrightarrow{AB} - \overrightarrow{AC}| = 6$.
c) $\overrightarrow{MB} + \overrightarrow{MC} = \vec{0}$.
d) $|\overrightarrow{AB} + \overrightarrow{AC}| = 6\sqrt3$.

::hint
**Kiến thức:** $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$; quy tắc hình bình hành; hệ thức trung điểm; đường cao tam giác đều cạnh $a$ là $\dfrac{a\sqrt3}{2}$.

**Gợi ý các bước:**
1. Đưa mỗi biểu thức về một vectơ.
2. Với câu d, dựng hình thoi $ABDC$; đường chéo $AD$ gấp đôi $AM$.

::solution
a) **Sai.** $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}$, ngược hướng với $\overrightarrow{BC}$.

b) **Đúng.** $|\overrightarrow{CB}|=BC=6$.

c) **Đúng.** $M$ là trung điểm của $BC$.

d) **Đúng.** Dựng hình thoi $ABDC$, ta có $\overrightarrow{AB} + \overrightarrow{AC}=\overrightarrow{AD}$ và $AD=2AM=2\cdot\dfrac{6\sqrt3}{2}=6\sqrt3$.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Đúng.
:::

:::exercise
(Ôn lại định lí côsin.) Hai lực $\vec{F_1}$, $\vec{F_2}$ có độ lớn $50$ N và $80$ N cùng tác dụng vào một điểm và hợp với nhau góc $60^\circ$. Tính độ lớn của hợp lực, làm tròn đến hàng đơn vị (đơn vị N).

::hint
**Kiến thức:** định lí côsin; trong hình bình hành, hai góc kề một cạnh có tổng $180^\circ$.

**Gợi ý các bước:**
1. Vẽ $\overrightarrow{OA}=\vec{F_1}$, $\overrightarrow{OB}=\vec{F_2}$, dựng hình bình hành $OACB$; hợp lực là $\overrightarrow{OC}$.
2. Trong tam giác $OAC$: $OA=50$, $AC=80$, $\widehat{OAC}=120^\circ$. Dùng định lí côsin.

::solution
Vẽ $\overrightarrow{OA}=\vec{F_1}$, $\overrightarrow{OB}=\vec{F_2}$ và dựng hình bình hành $OACB$; hợp lực là $\overrightarrow{OC}$. Trong tam giác $OAC$: $OA=50$, $AC=80$, $\widehat{OAC}=120^\circ$, nên
$$OC^2=50^2+80^2-2\cdot50\cdot80\cos120^\circ=2500+6400+4000=12\,900.$$
Vậy $OC=\sqrt{12\,900}\approx113{,}6$.

**Đáp số.** $114$.
:::

:::exercise Thử thách
Cho hai hình bình hành $ABCD$ và $ABEF$, trong đó $C$, $D$, $E$, $F$ không cùng nằm trên một đường thẳng. Chứng minh rằng $DCEF$ là hình bình hành.

::hint
**Kiến thức:** tứ giác $PQRS$ là hình bình hành khi và chỉ khi $\overrightarrow{PQ}=\overrightarrow{SR}$.

**Gợi ý các bước:**
1. Viết $\overrightarrow{AB}$ bằng một vectơ trong mỗi hình bình hành.
2. So sánh hai vectơ đó rồi áp dụng định lí cho tứ giác $DCEF$.

::solution
Từ hình bình hành $ABCD$: $\overrightarrow{AB}=\overrightarrow{DC}$. Từ hình bình hành $ABEF$: $\overrightarrow{AB}=\overrightarrow{FE}$. Vậy $\overrightarrow{DC}=\overrightarrow{FE}$. Với $P=D$, $Q=C$, $R=E$, $S=F$, đây chính là điều kiện $\overrightarrow{PQ}=\overrightarrow{SR}$, nên $DCEF$ là hình bình hành.

**Đáp số.** $DCEF$ là hình bình hành (đã chứng minh).
:::

:::exercise Thử thách
Chứng minh rằng với sáu điểm $A, B, C, D, E, F$ bất kì:
$$\overrightarrow{AD} + \overrightarrow{BE} + \overrightarrow{CF} = \overrightarrow{AE} + \overrightarrow{BF} + \overrightarrow{CD}.$$

::hint
**Kiến thức:** $\vec{x}=\vec{y}\iff\vec{x}-\vec{y}=\vec{0}$; $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.

**Gợi ý các bước:**
1. Lấy vế trái trừ vế phải, ghép từng cặp vectơ chung điểm đầu.
2. Rút gọn ba hiệu thu được bằng quy tắc ba điểm.

::solution
$$\begin{aligned}
&(\overrightarrow{AD}-\overrightarrow{AE}) + (\overrightarrow{BE}-\overrightarrow{BF}) + (\overrightarrow{CF}-\overrightarrow{CD})\\
&= \overrightarrow{ED} + \overrightarrow{FE} + \overrightarrow{DF} = \overrightarrow{FE} + \overrightarrow{ED} + \overrightarrow{DF} = \overrightarrow{FF}=\vec{0}.
\end{aligned}$$
Hiệu hai vế bằng $\vec{0}$ nên hai vế bằng nhau.

**Đáp số.** Đẳng thức đúng (đã chứng minh).
:::

## Kiểm tra mini

:::quiz
::mc
Với ba điểm bất kì $A$, $B$, $C$, vectơ $\overrightarrow{AB}+\overrightarrow{CA}$ bằng
A. $\overrightarrow{CB}$.
B. $\overrightarrow{BC}$.
C. $\overrightarrow{AC}$.
D. $\vec{0}$.
::key A
Đổi chỗ để điểm cuối vectơ trước là điểm đầu vectơ sau: $\overrightarrow{CA}+\overrightarrow{AB}=\overrightarrow{CB}$. Phương án B viết ngược hướng.

::mc
Với hai điểm $A$, $B$ và điểm $M$ bất kì, $\overrightarrow{MA}-\overrightarrow{MB}$ bằng
A. $\overrightarrow{AB}$.
B. $\overrightarrow{BA}$.
C. $\vec{0}$.
D. $2\overrightarrow{MA}$.
::key B
Hiệu của hai vectơ chung điểm đầu là vectơ nối hai điểm cuối, hướng về điểm cuối của vectơ thứ nhất: $\overrightarrow{MA}-\overrightarrow{MB}=\overrightarrow{BA}$. Phương án A là lỗi đổi thứ tự.

::mc
Hình vuông $ABCD$ có cạnh $3$. Độ dài của $\overrightarrow{AB}+\overrightarrow{AD}$ là
A. $6$.
B. $3\sqrt2$.
C. $3$.
D. $0$.
::key B
Theo quy tắc hình bình hành, $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$, và $AC=\sqrt{3^2+3^2}=3\sqrt2$. Phương án A cộng thẳng hai độ dài.

::mc
Cho $M$ là trung điểm của đoạn thẳng $AB$. Khẳng định nào sau đây đúng?
A. $\overrightarrow{MA}=\overrightarrow{MB}$.
B. $\overrightarrow{MA}+\overrightarrow{MB}=\vec{0}$.
C. $\overrightarrow{AM}+\overrightarrow{BM}=\overrightarrow{AB}$.
D. $\overrightarrow{MA}-\overrightarrow{MB}=\vec{0}$.
::key B
$\overrightarrow{MA}$ và $\overrightarrow{MB}$ cùng độ dài, ngược hướng nên là hai vectơ đối, tổng bằng $\vec{0}$. Phương án A và D coi hai vectơ đối là bằng nhau; ở C thực ra $\overrightarrow{AM}+\overrightarrow{BM}=\vec{0}$.

::tf
Cho hình chữ nhật $ABCD$ có $AB=3$, $AD=4$ và tâm $O$.
a) $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.
b) $|\overrightarrow{AB}-\overrightarrow{AD}|=1$.
c) $\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OD}=\vec{0}$.
d) $|\overrightarrow{AB}+\overrightarrow{CD}|=6$.
::key Đ S Đ S
a) Đúng: quy tắc hình bình hành. b) Sai: $\overrightarrow{AB}-\overrightarrow{AD}=\overrightarrow{DB}$ có độ dài $5$, không phải $4-3$. c) Đúng: $O$ là trung điểm của $AC$ và của $BD$. d) Sai: $\overrightarrow{CD}=-\overrightarrow{AB}$ nên tổng bằng $\vec{0}$, độ dài $0$.

::sa
Hình vuông $ABCD$ có cạnh $6$. Tính $|\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AC}|$ (làm tròn đến hàng đơn vị).
::key 17
$\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$, nên tổng bằng $\overrightarrow{AC}+\overrightarrow{AC}$, một vectơ cùng hướng với $\overrightarrow{AC}$ và dài gấp đôi: $2\cdot6\sqrt2=12\sqrt2\approx16{,}97$, làm tròn được $17$.

::sa
Hai lực có độ lớn $30$ N và $40$ N cùng tác động vào một điểm và tạo với nhau góc $60^\circ$. Tính độ lớn của hợp lực theo niutơn (làm tròn đến hàng đơn vị).
::key 61
Hợp lực là đường chéo của hình bình hành dựng trên hai lực; trong tam giác tạo bởi hai cạnh $30$, $40$ và đường chéo, góc xen giữa là $180^\circ-60^\circ=120^\circ$. Theo định lí côsin, $F^2=900+1600-2\cdot30\cdot40\cos120^\circ=3700$, nên $F\approx60{,}8$, làm tròn được $61$ N.
:::
