---
title: Tổng và hiệu của hai vectơ
description: Cộng, trừ vectơ bằng quy tắc ba điểm và quy tắc hình bình hành; dùng hệ thức trung điểm, trọng tâm để giải bài toán hình học và bài toán về lực.
minutes: 16
---

:::goals
- Cộng hai vectơ bằng quy tắc ba điểm và quy tắc hình bình hành.
- Dùng các tính chất của phép cộng vectơ và vectơ đối để rút gọn biểu thức.
- Trừ hai vectơ và vận dụng hệ thức $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.
- Dùng hệ thức trung điểm, trọng tâm và cộng các lực, vận tốc.
:::

Bạn đi 300 m về phía đông đến cổng trường, rồi đi tiếp 400 m về phía bắc đến thư viện. So với chỗ xuất phát, bạn đang ở đâu? Không phải cách 700 m, mà chỉ cách điểm xuất phát 500 m, theo hướng nằm giữa đông và bắc. Hai độ dời được gộp thành **một** độ dời duy nhất. Đó chính là ý nghĩa của phép cộng vectơ, và cũng là cách các nhà vật lí cộng lực, cách phi công tính đến gió.

## Cộng hai vectơ

### Quy tắc ba điểm

Cho hai vectơ $\vec{a}$ và $\vec{b}$. Chọn điểm $A$, vẽ $\overrightarrow{AB} = \vec{a}$, rồi từ $B$ vẽ $\overrightarrow{BC} = \vec{b}$. Vectơ từ điểm đầu đến điểm cuối, $\overrightarrow{AC}$, chính là tổng.

:::definition Tổng của hai vectơ (quy tắc ba điểm)
Với ba điểm $A$, $B$, $C$ bất kì:
$$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}.$$
Tổng $\vec{a} + \vec{b}$ nhận được bằng cách đặt điểm đầu của $\vec{b}$ trùng với điểm cuối của $\vec{a}$.
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

Hãy để ý rằng quy tắc đúng với **mọi** bộ ba điểm, kể cả khi ba điểm thẳng hàng, và điểm $B$ ở giữa "triệt tiêu": $B$ nối tiếp $B$ thì biến mất.

### Quy tắc hình bình hành

Nếu hai vectơ cùng xuất phát từ điểm $O$, chẳng hạn $\overrightarrow{OA} = \vec{a}$ và $\overrightarrow{OD} = \vec{b}$, ta dựng hình bình hành $OACD$. Đường chéo xuất phát từ $O$ là tổng của hai vectơ.

:::theorem Quy tắc hình bình hành
Nếu $OACD$ là hình bình hành thì
$$\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OC}.$$
:::

Điều này suy ra từ quy tắc ba điểm: trong hình bình hành $\overrightarrow{AC} = \overrightarrow{OD}$, nên $\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OA} + \overrightarrow{AC} = \overrightarrow{OC}$.

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

Tính giao hoán thực chất là quy tắc hình bình hành, vì $\overrightarrow{OA} + \overrightarrow{OD}$ và $\overrightarrow{OD} + \overrightarrow{OA}$ đều là đường chéo $\overrightarrow{OC}$. Nhờ tính kết hợp, ta cộng nhiều vectơ mà không cần dấu ngoặc, chẳng hạn
$$\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} = \overrightarrow{AD}.$$
Tính chất cuối suy ra từ quy tắc ba điểm: $\overrightarrow{AB} + \overrightarrow{BA} = \overrightarrow{AA} = \vec{0}$.

:::example Đường đi khép kín
Với bốn điểm $A$, $B$, $C$, $D$, chứng minh rằng $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA} = \vec{0}$, rồi rút gọn $\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} + \overrightarrow{DA}$.

**Lời giải.**
1. Dùng quy tắc ba điểm hai lần: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$, rồi $\overrightarrow{AC} + \overrightarrow{CD} = \overrightarrow{AD}$.
2. Vậy $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA} = \overrightarrow{AD} + \overrightarrow{DA} = \overrightarrow{AA} = \vec{0}$.
3. Ở tổng thứ hai, thứ tự các số hạng khác đi. Phép cộng có tính giao hoán nên ta sắp xếp lại: $\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} + \overrightarrow{DA} = \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA} = \vec{0}$.

Đi theo một đường khép kín quay về chỗ xuất phát thì tổng độ dời bằng $\vec{0}$.
:::

## Hiệu của hai vectơ

:::definition Hiệu của hai vectơ
**Hiệu** của hai vectơ $\vec{a}$ và $\vec{b}$ là tổng của $\vec{a}$ và vectơ đối của $\vec{b}$:
$$\vec{a} - \vec{b} = \vec{a} + (-\vec{b}).$$
:::

Dạng hữu ích nhất của phép trừ là: với ba điểm $O$, $A$, $B$ bất kì,
$$\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}.$$
Thật vậy, $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{OA} + \overrightarrow{BO} = \overrightarrow{BO} + \overrightarrow{OA} = \overrightarrow{BA}$. Nói bằng lời: *hiệu của hai vectơ cùng điểm đầu là vectơ nối hai điểm cuối, hướng về điểm cuối của vectơ thứ nhất.*

:::diagram Hiệu $\vec{a} - \vec{b}$
alt: Hai mũi tên a và b xuất phát từ điểm chung O đến các điểm A và B, và mũi tên a-b đi từ B đến A.
point O 0,0 below-left
point A 4,1 right
point B 1,2.5 above
arrow O A "a"
arrow O B "b"
arrow B A "a−b"
:::

:::example Phép trừ trong hình bình hành
$ABCD$ là hình chữ nhật có $AB = 6$ và $AD = 8$. Tính $|\overrightarrow{AB} + \overrightarrow{AD}|$ và $|\overrightarrow{AB} - \overrightarrow{AD}|$.

**Lời giải.**
1. Vì $ABCD$ là hình bình hành nên theo quy tắc hình bình hành, $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$.
2. Theo quy tắc hiệu, $\overrightarrow{AB} - \overrightarrow{AD} = \overrightarrow{DB}$.
3. Trong hình chữ nhật hai đường chéo bằng nhau, và theo định lí Pythagore $AC = DB = \sqrt{6^2 + 8^2} = 10$.
4. Do đó $|\overrightarrow{AB} + \overrightarrow{AD}| = 10$ và $|\overrightarrow{AB} - \overrightarrow{AD}| = 10$.

Hai vectơ này khác nhau (hướng khác nhau) nhưng có cùng độ dài.
:::

## Trung điểm và trọng tâm

:::theorem Hệ thức trung điểm và trọng tâm
- $M$ là trung điểm của đoạn thẳng $AB$ khi và chỉ khi $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$.
- $G$ là trọng tâm của tam giác $ABC$ khi và chỉ khi $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.
:::

Vì sao hệ thức thứ nhất đúng? Nếu $M$ là trung điểm thì $\overrightarrow{MA}$ và $\overrightarrow{MB}$ có cùng độ dài và ngược hướng, nên chúng là hai vectơ đối nhau và tổng bằng $\vec{0}$. Chiều ngược lại là lập luận đó đọc theo chiều khác.

:::example Chứng minh hệ thức trọng tâm
Gọi $G$ là trọng tâm tam giác $ABC$ và $M$ là trung điểm của $BC$. Chứng minh rằng $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.

**Lời giải.**
1. Vì $M$ là trung điểm của $BC$ nên $\overrightarrow{GB} + \overrightarrow{GC} = 2\overrightarrow{GM}$. (Thật vậy, $\overrightarrow{GB} = \overrightarrow{GM} + \overrightarrow{MB}$ và $\overrightarrow{GC} = \overrightarrow{GM} + \overrightarrow{MC}$, mà $\overrightarrow{MB} + \overrightarrow{MC} = \vec{0}$.)
2. Trọng tâm nằm trên trung tuyến $AM$ với $GA = 2\,GM$, và $G$ nằm giữa $A$ và $M$. Vậy $\overrightarrow{GA}$ và $\overrightarrow{GM}$ ngược hướng và $|\overrightarrow{GA}| = 2|\overrightarrow{GM}|$. Suy ra $\overrightarrow{GA} = -2\overrightarrow{GM}$.
3. Do đó $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = -2\overrightarrow{GM} + 2\overrightarrow{GM} = \vec{0}$.
:::

## Lực và vận tốc

Khi hai lực cùng tác dụng lên một vật, lực duy nhất có tác dụng tương đương gọi là **hợp lực**: đó là tổng của hai vectơ lực. Vận tốc cũng cộng như vậy, chẳng hạn vận tốc của chiếc thuyền và dòng nước chảy.

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

:::example Thuyền và dòng nước
Một chiếc thuyền hướng mũi thẳng sang bờ bên kia và chạy với vận tốc $4$ km/h so với nước. Dòng nước chảy với vận tốc $3$ km/h, vuông góc với hướng của thuyền. Tìm tốc độ của thuyền so với bờ.

**Lời giải.**
1. Gọi $\vec{b}$ là vận tốc của thuyền khi nước đứng yên ($|\vec{b}| = 4$) và $\vec{c}$ là vận tốc dòng nước ($|\vec{c}| = 3$). Vận tốc so với bờ là $\vec{v} = \vec{b} + \vec{c}$.
2. Hình bình hành dựng trên $\vec{b}$ và $\vec{c}$ là hình chữ nhật vì hai vectơ vuông góc. Đường chéo của nó là $\vec{v}$.
3. Theo định lí Pythagore, $|\vec{v}| = \sqrt{4^2 + 3^2} = \sqrt{25} = 5$.

Tốc độ so với bờ là $5$ km/h. Đây cũng là tam giác $3$-$4$-$5$ quen thuộc, và nó giải thích vì sao quãng đường ở phần mở đầu là $500$ m.
:::

:::warning Những sai lầm thường gặp
- **Độ dài không đơn giản là cộng lại.** $|\vec{a} + \vec{b}| \leq |\vec{a}| + |\vec{b}|$, dấu bằng chỉ xảy ra khi hai vectơ cùng hướng. Ở ví dụ chiếc thuyền, $4 + 3 = 7$ nhưng tốc độ là $5$.
- **Phép trừ không giao hoán.** $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$ nhưng $\overrightarrow{OB} - \overrightarrow{OA} = \overrightarrow{AB}$. Vectơ hiệu hướng về điểm cuối của vectơ **thứ nhất**.
- Trước khi dùng quy tắc ba điểm, hãy kiểm tra điểm cuối của vectơ thứ nhất có là điểm đầu của vectơ thứ hai không: $\overrightarrow{AB} + \overrightarrow{CB}$ **không** bằng $\overrightarrow{AC}$.
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

- Quy tắc ba điểm: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$. Quy tắc hình bình hành: nếu $OACD$ là hình bình hành thì $\overrightarrow{OA} + \overrightarrow{OD} = \overrightarrow{OC}$.
- Phép cộng có tính giao hoán, kết hợp, $\vec{a} + \vec{0} = \vec{a}$ và $\vec{a} + (-\vec{a}) = \vec{0}$.
- Hiệu: $\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$ và $\overrightarrow{OA} - \overrightarrow{OB} = \overrightarrow{BA}$.
- $M$ là trung điểm của $AB$ khi và chỉ khi $\overrightarrow{MA} + \overrightarrow{MB} = \vec{0}$; $G$ là trọng tâm tam giác $ABC$ khi và chỉ khi $\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}$.
- Lực và vận tốc cộng theo quy tắc vectơ, nên hợp lực là đường chéo của hình bình hành.

## Luyện tập

:::practice
1. Rút gọn (a) $\overrightarrow{MN} + \overrightarrow{NP} + \overrightarrow{PQ}$; (b) $\overrightarrow{AB} - \overrightarrow{AC}$; (c) $\overrightarrow{AB} + \overrightarrow{BC} - \overrightarrow{AD}$.
2. $ABCD$ là hình vuông cạnh $4$. Tính $|\overrightarrow{AB} + \overrightarrow{AD}|$, $|\overrightarrow{AB} - \overrightarrow{AD}|$ và $|\overrightarrow{AB} + \overrightarrow{CD}|$.
3. Với bốn điểm $A$, $B$, $C$, $D$ bất kì, chứng minh rằng $\overrightarrow{AB} + \overrightarrow{CD} = \overrightarrow{AD} + \overrightarrow{CB}$.
4. $ABCD$ là hình bình hành tâm $O$. Chứng minh rằng $\overrightarrow{OA} + \overrightarrow{OC} = \vec{0}$ và $\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} + \overrightarrow{OD} = \vec{0}$.
5. $I$ là trung điểm cạnh $AB$ của tam giác $ABC$. Chứng minh rằng $\overrightarrow{CA} + \overrightarrow{CB} = 2\overrightarrow{CI}$.
6. Một chiếc thuyền chạy với vận tốc $6$ km/h so với nước, hướng mũi thẳng sang bờ bên kia của một con sông có dòng nước chảy $8$ km/h vuông góc với thuyền. Tốc độ của thuyền so với bờ là bao nhiêu?
7. Hai lực có độ lớn $20$ N cùng tác dụng lên một điểm và hợp với nhau góc $120^\circ$. Tìm độ lớn của hợp lực.
8. $ABC$ là tam giác đều cạnh $6$. Tính $|\overrightarrow{AB} + \overrightarrow{AC}|$ và $|\overrightarrow{AB} - \overrightarrow{AC}|$.
9. (Thử thách) $G$ là trọng tâm tam giác $ABC$ và $M$ là điểm bất kì. Chứng minh rằng $\overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} = 3\overrightarrow{MG}$.
10. (Thử thách) $ABCD$ là tứ giác bất kì, $M$ là trung điểm $AB$ và $N$ là trung điểm $CD$. Chứng minh rằng $\overrightarrow{MN} = \dfrac{1}{2}(\overrightarrow{AD} + \overrightarrow{BC})$.
:::

:::solution Xem lời giải
1. (a) Theo quy tắc ba điểm, $\overrightarrow{MN} + \overrightarrow{NP} + \overrightarrow{PQ} = \overrightarrow{MP} + \overrightarrow{PQ} = \overrightarrow{MQ}$. (b) $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}$ (cùng điểm đầu $A$, hiệu nối hai điểm cuối và hướng về $B$). (c) $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$, và $\overrightarrow{AC} - \overrightarrow{AD} = \overrightarrow{DC}$.
2. $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$ nên độ dài là đường chéo $4\sqrt{2}$. $\overrightarrow{AB} - \overrightarrow{AD} = \overrightarrow{DB}$ cũng có độ dài $4\sqrt{2}$. Trong hình vuông $\overrightarrow{CD} = \overrightarrow{BA}$ nên $\overrightarrow{AB} + \overrightarrow{CD} = \overrightarrow{AB} + \overrightarrow{BA} = \vec{0}$ và độ dài bằng $0$.
3. Chèn thêm điểm $D$ và điểm $B$: $\overrightarrow{AB} + \overrightarrow{CD} = (\overrightarrow{AD} + \overrightarrow{DB}) + (\overrightarrow{CB} + \overrightarrow{BD}) = \overrightarrow{AD} + \overrightarrow{CB} + (\overrightarrow{DB} + \overrightarrow{BD}) = \overrightarrow{AD} + \overrightarrow{CB} + \vec{0}$.
4. Hai đường chéo của hình bình hành cắt nhau tại trung điểm của mỗi đường, nên $O$ là trung điểm của $AC$ và của $BD$. Do đó $\overrightarrow{OA} + \overrightarrow{OC} = \vec{0}$ và $\overrightarrow{OB} + \overrightarrow{OD} = \vec{0}$. Cộng hai đẳng thức này được điều phải chứng minh thứ hai.
5. $\overrightarrow{CA} = \overrightarrow{CI} + \overrightarrow{IA}$ và $\overrightarrow{CB} = \overrightarrow{CI} + \overrightarrow{IB}$. Cộng lại, $\overrightarrow{CA} + \overrightarrow{CB} = 2\overrightarrow{CI} + (\overrightarrow{IA} + \overrightarrow{IB}) = 2\overrightarrow{CI}$ vì $I$ là trung điểm của $AB$.
6. Vận tốc so với bờ là đường chéo của hình chữ nhật có hai cạnh $6$ và $8$: $\sqrt{6^2 + 8^2} = \sqrt{100} = 10$ km/h.
7. Vẽ $\overrightarrow{OA}$ và $\overrightarrow{OB}$ với $OA = OB = 20$ và $\widehat{AOB} = 120^\circ$. Hình bình hành $OACB$ là hình thoi và hợp lực là $\overrightarrow{OC}$. Góc $\widehat{OAC} = 180^\circ - 120^\circ = 60^\circ$ và $AO = AC$ nên tam giác $OAC$ đều và $OC = 20$. Hợp lực có độ lớn $20$ N.
8. $\overrightarrow{AB} + \overrightarrow{AC} = 2\overrightarrow{AM}$ với $M$ là trung điểm $BC$ (bài 5). Đường trung tuyến của tam giác đều cạnh $6$ là $AM = 3\sqrt{3}$ nên độ dài là $6\sqrt{3}$. Tiếp theo, $\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}$ có độ dài $BC = 6$.
9. Viết $\overrightarrow{MA} = \overrightarrow{MG} + \overrightarrow{GA}$, tương tự cho $B$ và $C$. Cộng lại: $\overrightarrow{MA} + \overrightarrow{MB} + \overrightarrow{MC} = 3\overrightarrow{MG} + (\overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC}) = 3\overrightarrow{MG}$.
10. Đi từ $M$ đến $N$ theo hai cách: $\overrightarrow{MN} = \overrightarrow{MA} + \overrightarrow{AD} + \overrightarrow{DN}$ và $\overrightarrow{MN} = \overrightarrow{MB} + \overrightarrow{BC} + \overrightarrow{CN}$. Cộng lại, $2\overrightarrow{MN} = (\overrightarrow{MA} + \overrightarrow{MB}) + (\overrightarrow{AD} + \overrightarrow{BC}) + (\overrightarrow{DN} + \overrightarrow{CN})$. Ngoặc thứ nhất và thứ ba bằng $\vec{0}$ vì $M$, $N$ là trung điểm, nên $\overrightarrow{MN} = \dfrac{1}{2}(\overrightarrow{AD} + \overrightarrow{BC})$.
:::
