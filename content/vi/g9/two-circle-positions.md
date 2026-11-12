---
title: Vị trí tương đối của hai đường tròn
description: Xác định vị trí tương đối của hai đường tròn bằng cách so sánh khoảng cách giữa hai tâm với tổng và hiệu hai bán kính.
minutes: 20
---

:::goals
- Xác định được vị trí tương đối của hai đường tròn bằng cách so sánh $OO'$ với $R+r$ và $R-r$.
- Biết đường nối tâm là trục đối xứng, là trung trực của dây chung và đi qua tiếp điểm.
- Tính được độ dài dây chung, bán kính hoặc khoảng cách giữa hai tâm.
:::

Hai trạm phát sóng $O$ và $O'$ cách nhau $7$ km, phủ sóng trong bán kính lần lượt $5$ km và $3$ km. Hai vùng phủ sóng có chồng lên nhau không? Nếu dời trạm $O'$ ra xa để hai trạm cách nhau $8$ km thì sao?

## Số điểm chung của hai đường tròn

### Khám phá: kéo hai đường tròn ra xa nhau

Cho $(O; R)$ và $(O'; r)$ với $R\geq r$, $d=OO'$. Đặt đường tròn nhỏ trong đường tròn lớn rồi kéo dần ra: chúng chạm nhau từ bên trong khi $d=R-r$, rồi cắt nhau, chạm nhau từ bên ngoài khi $d=R+r$, cuối cùng rời xa nhau.

:::theorem Vị trí tương đối của $(O; R)$ và $(O'; r)$, $R\geq r$, $d=OO'$
- **Cắt nhau** ($2$ điểm chung): $R-r<d<R+r$.
- **Tiếp xúc ngoài** ($1$ điểm chung): $d=R+r$.
- **Tiếp xúc trong** ($1$ điểm chung): $d=R-r>0$.
- **Ở ngoài nhau** ($0$ điểm chung): $d>R+r$.
- **Đựng nhau** ($0$ điểm chung): $d<R-r$; khi $d=0$ hai đường tròn **đồng tâm**.
:::

Đường thẳng $OO'$ gọi là **đường nối tâm**. Vì mỗi đường thẳng qua tâm là trục đối xứng của đường tròn, đường nối tâm là trục đối xứng chung của cả hai đường tròn.

:::example Trả lời câu hỏi ở đầu bài
Giải bài toán ở đầu bài.

**Lời giải.** Ta có $R+r=5+3=8$ và $R-r=5-3=2$.

Với $d=7$: $2<7<8$, nên hai đường tròn cắt nhau. Với $d=8=R+r$, hai đường tròn tiếp xúc ngoài.

Vậy lúc đầu hai vùng phủ sóng chồng lên nhau; khi hai trạm cách nhau $8$ km, hai vùng chỉ chạm nhau tại một điểm.
:::

## Hai đường tròn cắt nhau

:::theorem Dây chung và tiếp điểm
- Nếu hai đường tròn cắt nhau tại $A$ và $B$ thì đường nối tâm $OO'$ là đường trung trực của dây chung $AB$.
- Nếu hai đường tròn tiếp xúc nhau tại $T$ thì $T$ nằm trên đường nối tâm.
:::

**Vì sao?** Ta có $OA=OB$ và $O'A=O'B$, nên $O$ và $O'$ cùng nằm trên đường trung trực của $AB$.

Nếu hai đường tròn tiếp xúc tại $T$ mà $T$ không nằm trên $OO'$ thì điểm đối xứng với $T$ qua $OO'$ cũng là một điểm chung (vì $OO'$ là trục đối xứng chung). Khi đó hai đường tròn có hai điểm chung, vô lí.

:::diagram Hai đường tròn cắt nhau tại $A$ và $B$
alt: Hai đường tròn tâm O, O' cắt nhau tại A, B; OO' vuông góc với AB tại trung điểm H
point O 0,0 left
point P 4,0 right "O'"
point A 2.34,1.87 above
point B 2.34,-1.87 below
point H 2.34,0 below-right
circle O 3
circle P 2.5
segment O P
segment A B
segment O A
segment P A
right A H P
:::

:::example Độ dài dây chung
Hai đường tròn $(O; 15\text{ cm})$ và $(O'; 13\text{ cm})$ cắt nhau tại $A$, $B$, với $OO'=14$ cm. Tính $AB$.

**Lời giải.** Gọi $H$ là giao điểm của $OO'$ và $AB$, ta có $AH\perp OO'$ và $H$ là trung điểm của $AB$. Đặt $OH=x$ thì $O'H=14-x$ (vì $H$ nằm giữa $O$ và $O'$). Theo định lí Pythagore trong hai tam giác vuông $AHO$, $AHO'$, ta có $AH^2=15^2-x^2=13^2-(14-x)^2$, suy ra

$$225-x^2=169-196+28x-x^2\Rightarrow 28x=252\Rightarrow x=9.$$

Do đó $AH=\sqrt{15^2-9^2}=12$ (cm) và $AB=2AH=24$ cm.

Vậy $AB=24$ cm.
:::

## Hai đường tròn tiếp xúc nhau

Khi hai đường tròn tiếp xúc ngoài tại $T$, điểm $T$ nằm giữa $O$ và $O'$, nên $OO'=OT+TO'=R+r$. Đường thẳng qua $T$ vuông góc với $OO'$ là tiếp tuyến chung của hai đường tròn tại $T$.

:::diagram Hai đường tròn tiếp xúc ngoài tại $T$
alt: Hai đường tròn tâm O, O' tiếp xúc ngoài tại T trên OO', có tiếp tuyến chung tại T
point O 0,0 below
point P 3.5,0 below "O'"
point T 2,0 below-right
point U 2,2.2 ""
point V 2,-2.2 ""
circle O 2
circle P 1.5
segment O P
segment U V
right O T U
:::

:::example Hai bánh răng
Hai bánh răng tiếp xúc ngoài, khoảng cách giữa hai trục là $15$ cm và bán kính bánh lớn gấp đôi bán kính bánh nhỏ. Tính bán kính mỗi bánh.

**Lời giải.** Gọi $r$ (cm) là bán kính bánh nhỏ ($r>0$), thì bánh lớn có bán kính $2r$. Hai đường tròn tiếp xúc ngoài nên ta có phương trình

$$r+2r=15\Rightarrow r=5\ \text{(thoả mãn điều kiện)}.$$

Vậy bánh nhỏ có bán kính $5$ cm, bánh lớn có bán kính $10$ cm.
:::

:::warning Những sai lầm thường gặp
- **Chỉ xét tiếp xúc ngoài.** Sai: "Hai đường tròn bán kính $7$ và $3$ tiếp xúc nhau nên $OO'=10$". Lí do sai: còn trường hợp tiếp xúc trong. Đúng: $OO'=10$ hoặc $OO'=4$.
- **Nhầm "không giao nhau" với "ở ngoài nhau".** Sai: $d=1$, $R=5$, $r=3$ thì hai đường tròn ở ngoài nhau. Lí do sai: $d<R-r=2$. Đúng: hai đường tròn đựng nhau.
:::

## Thuật ngữ

:::terms
- đường nối tâm | line of centres
- dây chung | common chord
- tiếp xúc ngoài | touch externally
- tiếp xúc trong | touch internally
- ở ngoài nhau | lie outside each other
- đựng nhau | one inside the other
- tiếp tuyến chung | common tangent
:::

## Tóm tắt

- Cắt nhau: $R-r<d<R+r$; tiếp xúc ngoài: $d=R+r$; tiếp xúc trong: $d=R-r$; ở ngoài nhau: $d>R+r$; đựng nhau: $d<R-r$.
- Đường nối tâm là trục đối xứng, là trung trực của dây chung và đi qua tiếp điểm.
- Tính dây chung: đặt $OH=x$, viết $AH^2$ theo hai cách.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho hai đường tròn $(O; 6\text{ cm})$ và $(O'; 4\text{ cm})$. Xác định vị trí tương đối của hai đường tròn trong mỗi trường hợp sau:

a) $OO'=11$ cm;
b) $OO'=10$ cm;
c) $OO'=5$ cm;
d) $OO'=2$ cm;
e) $OO'=1$ cm.

::hint
**Kiến thức:** so sánh $d$ với $R+r=10$ và $R-r=2$.

**Gợi ý các bước:**
1. Tính $R+r$ và $R-r$, rồi so sánh với từng giá trị.

::solution
Ta có $R=6$ cm, $r=4$ cm, nên $R+r=10$ cm và $R-r=2$ cm. Ta so sánh đoạn nối tâm $d=OO'$ với $R+r$ và $R-r$.

a) $d=11>R+r=10$: hai đường tròn ở ngoài nhau.

b) $d=10=R+r$: hai đường tròn tiếp xúc ngoài.

c) $R-r=2<d=5<R+r=10$: hai đường tròn cắt nhau.

d) $d=2=R-r$: hai đường tròn tiếp xúc trong.

e) $d=1<R-r=2$: đường tròn $(O)$ đựng đường tròn $(O')$.

Vậy a) ở ngoài nhau; b) tiếp xúc ngoài; c) cắt nhau; d) tiếp xúc trong; e) đựng nhau.

**Đáp số.** a) ở ngoài nhau; b) tiếp xúc ngoài; c) cắt nhau; d) tiếp xúc trong; e) đựng nhau.
:::

:::exercise
Hai đường tròn $(O; 5\text{ cm})$ và $(O'; 5\text{ cm})$ cắt nhau tại $A$, $B$, với $OO'=8$ cm. Tính $AB$.

::hint
**Kiến thức:** $OO'$ là trung trực của $AB$; $H$ là trung điểm của $OO'$.

**Gợi ý các bước:**
1. Tính $OH=4$ cm, rồi $AH$ theo định lí Pythagore.

::solution
Gọi $H$ là giao điểm của $OO'$ và $AB$. Vì hai đường tròn có bán kính bằng nhau nên $H$ là trung điểm của $OO'$, suy ra $OH=4$ cm. Xét tam giác $AHO$ vuông tại $H$, ta có $AH=\sqrt{5^2-4^2}=3$ (cm), nên $AB=6$ cm.

Vậy $AB=6$ cm.

**Đáp số.** $AB=6$ cm.
:::

:::exercise
Đường tròn $(O; 9\text{ cm})$ tiếp xúc trong với đường tròn $(O'; r)$, $r<9$ cm, và $OO'=4$ cm. Tính $r$.

::hint
**Kiến thức:** tiếp xúc trong thì $d=R-r$.

**Gợi ý các bước:**
1. Giải phương trình $9-r=4$.

::solution
Hai đường tròn $(O; 9\text{ cm})$ và $(O'; r)$ với $r<9$ cm tiếp xúc trong, nên đoạn nối tâm bằng hiệu hai bán kính:
$$OO'=9-r.$$

Theo đề bài $OO'=4$ cm, nên $9-r=4$, suy ra $r=5$ cm.

Giá trị $r=5$ thoả mãn điều kiện $r<9$.

Vậy $r=5$ cm.

**Đáp số.** $r=5$ cm.
:::

:::exercise
Hai đường tròn $(O; 7\text{ cm})$ và $(O'; 3\text{ cm})$ tiếp xúc nhau. Tính $OO'$.

::hint
**Kiến thức:** tiếp xúc ngoài: $d=R+r$; tiếp xúc trong: $d=R-r$.

**Gợi ý các bước:**
1. Xét hai trường hợp.

::solution
Hai đường tròn tiếp xúc nhau có thể tiếp xúc ngoài hoặc tiếp xúc trong, nên ta xét hai trường hợp.

- Nếu hai đường tròn tiếp xúc ngoài thì đoạn nối tâm bằng tổng hai bán kính: $OO'=7+3=10$ (cm).
- Nếu hai đường tròn tiếp xúc trong thì đoạn nối tâm bằng hiệu hai bán kính: $OO'=7-3=4$ (cm).

Vậy $OO'=10$ cm (tiếp xúc ngoài) hoặc $OO'=4$ cm (tiếp xúc trong).

**Đáp số.** $OO'=10$ cm hoặc $OO'=4$ cm.
:::

:::exercise
Một logo gồm hai đường tròn bán kính $3$ cm và $4$ cm, tâm cách nhau $5$ cm. Bạn Minh cần kẻ dây chung của hai đường tròn. Tính độ dài dây chung. (Ôn lại [phương trình quy về phương trình bậc nhất một ẩn](lesson:equations-reducible-to-linear).)

::hint
**Kiến thức:** đặt $OH=x$ và viết $AH^2$ theo hai cách.

**Gợi ý các bước:**
1. Lập phương trình $3^2-x^2=4^2-(5-x)^2$.
2. Tính $AH$, rồi $AB=2AH$.

::solution
Gọi $O$, $O'$ là tâm các đường tròn bán kính $3$ cm, $4$ cm; $H$ là giao điểm của $OO'$ và dây chung $AB$, $OH=x$. Ta có

$$9-x^2=16-(5-x)^2\Rightarrow 9=-9+10x\Rightarrow x=1{,}8.$$

Do đó $AH=\sqrt{9-1{,}8^2}=\sqrt{5{,}76}=2{,}4$ (cm), suy ra $AB=4{,}8$ cm.

Vậy dây chung dài $4{,}8$ cm.

**Đáp số.** $4{,}8$ cm.
:::

:::exercise
Ba đường tròn tâm $A$, $B$, $C$ đôi một tiếp xúc ngoài nhau, với $AB=7$ cm, $BC=8$ cm, $CA=9$ cm. Tính bán kính mỗi đường tròn. (Ôn lại [giải hệ phương trình](lesson:solving-simultaneous-equations).)

::hint
**Kiến thức:** tiếp xúc ngoài thì khoảng cách hai tâm bằng tổng hai bán kính.

**Gợi ý các bước:**
1. Lập ba phương trình với ẩn $a$, $b$, $c$, rồi cộng lại.

::solution
Gọi $a$, $b$, $c$ (cm) là bán kính các đường tròn tâm $A$, $B$, $C$ ($a$, $b$, $c>0$). Theo đề bài ta có $a+b=7$, $b+c=8$, $c+a=9$. Cộng ba phương trình được $2(a+b+c)=24$, nên $a+b+c=12$. Suy ra

$$c=12-7=5,\qquad a=12-8=4,\qquad b=12-9=3\ \text{(thoả mãn điều kiện)}.$$

Vậy bán kính các đường tròn tâm $A$, $B$, $C$ lần lượt là $4$ cm, $3$ cm, $5$ cm.

**Đáp số.** $4$ cm, $3$ cm, $5$ cm (tâm $A$, $B$, $C$).
:::

:::exercise
**(1,5 điểm)** Cho hai đường tròn $(O; 4\text{ cm})$ và $(O'; 2\text{ cm})$ tiếp xúc ngoài tại $A$. Đường thẳng $a$ đi qua $A$ và vuông góc với $OO'$.

a) Tính $OO'$.

b) Chứng minh rằng $a$ là tiếp tuyến chung của hai đường tròn.

c) Lấy điểm $M$ trên $a$ với $MA=3$ cm. Tính $MO$ và $MO'$ (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** tiếp điểm nằm trên đường nối tâm; dấu hiệu nhận biết tiếp tuyến.

**Gợi ý các bước:**
1. Dùng $OO'=R+r$.
2. Chỉ ra $a\perp OA$ và $a\perp O'A$ tại $A$.
3. Dùng định lí Pythagore trong các tam giác vuông tại $A$.

::solution
a) Hai đường tròn tiếp xúc ngoài nên $OO'=4+2=6$ (cm).

b) Điểm $A$ nằm trên $OO'$ nên $a\perp OA$ và $a\perp O'A$ tại $A$. Theo dấu hiệu nhận biết tiếp tuyến, $a$ là tiếp tuyến của cả $(O)$ và $(O')$ tại $A$.

c) Xét các tam giác $MAO$, $MAO'$ vuông tại $A$, ta có

$$MO=\sqrt{3^2+4^2}=5\ \text{(cm)},\qquad MO'=\sqrt{3^2+2^2}=\sqrt{13}\approx3{,}61\ \text{(cm)}.$$

Vậy $OO'=6$ cm, $MO=5$ cm, $MO'\approx3{,}61$ cm.

**Đáp số.** a) $OO'=6$ cm; b) xem chứng minh; c) $MO=5$ cm, $MO'=\sqrt{13}\approx3{,}61$ cm.
:::

:::exercise Thử thách
Hai đường tròn $(O; 9\text{ cm})$ và $(O'; 4\text{ cm})$ tiếp xúc ngoài. Một tiếp tuyến chung tiếp xúc với $(O)$ tại $B$ và với $(O')$ tại $C$, không đi qua tiếp điểm của hai đường tròn. Tính $BC$.

::hint
**Kiến thức:** $OB\perp BC$, $O'C\perp BC$ (tính chất tiếp tuyến).

**Gợi ý các bước:**
1. Kẻ $O'K\perp OB$ tại $K$; chỉ ra $BCO'K$ là hình chữ nhật.
2. Tính $OK$, $OO'$, rồi $O'K$ theo định lí Pythagore.

::solution
Ta có $OB\perp BC$ và $O'C\perp BC$, nên $OB\parallel O'C$. Kẻ $O'K\perp OB$ tại $K$, tứ giác $BCO'K$ có ba góc vuông nên là hình chữ nhật. Suy ra $BC=O'K$ và $BK=O'C=4$ cm, nên $OK=9-4=5$ cm. Hai đường tròn tiếp xúc ngoài nên $OO'=9+4=13$ cm. Xét tam giác $OKO'$ vuông tại $K$, ta có

$$O'K=\sqrt{13^2-5^2}=12\ \text{(cm)}.$$

Vậy $BC=12$ cm.

**Đáp số.** $BC=12$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Cho hai đường tròn $(O; 8\text{ cm})$ và $(O'; 3\text{ cm})$ với $OO'=5$ cm. Vị trí tương đối của hai đường tròn là
A. cắt nhau.
B. tiếp xúc ngoài.
C. tiếp xúc trong.
D. đựng nhau.
::key C
$OO'=8-3=R-r$ nên hai đường tròn tiếp xúc trong. B nhầm với $R+r=11$.

::mc
Cho hai đường tròn $(O; 6\text{ cm})$ và $(O'; 2\text{ cm})$ với $OO'=3$ cm. Vị trí tương đối của hai đường tròn là
A. cắt nhau.
B. tiếp xúc trong.
C. ở ngoài nhau.
D. đựng nhau.
::key D
$OO'=3<R-r=4$ nên $(O)$ đựng $(O')$. A chỉ so sánh với $R+r$.

::mc
Hai đường tròn $(O; 5\text{ cm})$ và $(O'; 5\text{ cm})$ cắt nhau tại $A$, $B$, với $OO'=6$ cm. Độ dài dây chung $AB$ là
A. $4$ cm.
B. $8$ cm.
C. $6$ cm.
D. $2\sqrt{34}$ cm.
::key B
$OH=3$ cm nên $AH=\sqrt{25-9}=4$ cm và $AB=8$ cm. A quên nhân đôi, D cộng dưới dấu căn.

::mc
Hai đường tròn $(O; 7\text{ cm})$ và $(O'; 2\text{ cm})$ tiếp xúc ngoài. Khoảng cách $OO'$ là
A. $5$ cm.
B. $9$ cm.
C. $14$ cm.
D. $4{,}5$ cm.
::key B
Tiếp xúc ngoài nên $OO'=R+r=9$ cm. A là trường hợp tiếp xúc trong.

::tf
Cho hai đường tròn $(O; 5\text{ cm})$ và $(O'; 3\text{ cm})$ với $OO'=4$ cm. Xét tính đúng sai của các mệnh đề sau:
a) Hai đường tròn cắt nhau.
b) Đường nối tâm $OO'$ vuông góc với dây chung.
c) Hai đường tròn tiếp xúc trong.
d) Dây chung dài $6$ cm.
::key Đ Đ S Đ
a) Đúng: $2<4<8$. b) Đúng: $OO'$ là trung trực của dây chung. c) Sai: $4\neq R-r$. d) Đúng: $25-x^2=9-(4-x)^2$ cho $x=4$, nên $H$ trùng $O'$, $AH=3$.

::sa
Đường tròn $(O; 10\text{ cm})$ tiếp xúc trong với đường tròn $(O'; r)$, $r<10$ cm, và $OO'=3{,}5$ cm. Tính $r$ (đơn vị: cm).
::key 6,5
Tiếp xúc trong nên $10-r=3{,}5$, suy ra $r=6{,}5$ cm.

::sa
Hai đường tròn $(O; 8\text{ cm})$ và $(O'; 2\text{ cm})$ tiếp xúc ngoài. Một tiếp tuyến chung tiếp xúc với hai đường tròn tại $B$ và $C$, không đi qua tiếp điểm của hai đường tròn. Tính $BC$ (đơn vị: cm).
::key 8
$OO'=10$ cm, $OK=8-2=6$ cm, nên $BC=\sqrt{10^2-6^2}=8$ cm.
:::
