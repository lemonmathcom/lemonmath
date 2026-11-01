---
title: Vectơ trong mặt phẳng toạ độ
description: Mô tả vectơ bằng toạ độ, cộng và nhân vectơ với một số, rồi tìm độ dài, trung điểm, trọng tâm và các điểm thẳng hàng bằng toạ độ.
minutes: 18
---

:::goals
- Viết vectơ dưới dạng $\vec{a}=(x; y)$ và tìm toạ độ của $\overrightarrow{AB}$ từ hai điểm $A$, $B$.
- Cộng, trừ và nhân vectơ với một số bằng toạ độ.
- Tìm độ dài của vectơ và khoảng cách giữa hai điểm.
- Dùng toạ độ cho trung điểm, trọng tâm, tính thẳng hàng và đỉnh còn thiếu của hình bình hành.
:::

Ứng dụng bản đồ bảo bạn "đi 3 dãy nhà về phía đông và 2 dãy nhà về phía bắc". Hai con số đó là mọi thứ bạn cần biết về chuyến đi: đi bao xa theo đường ngang và bao xa theo đường dọc. Đặt vectơ lên lưới toạ độ biến ý tưởng này thành một công cụ. Thay vì vẽ mũi tên, ta có thể tính toán với các cặp số, nhanh hơn và dùng được cả cho những bài quá phức tạp để vẽ.

## Toạ độ của vectơ

Trong mặt phẳng có hệ trục $Ox$, $Oy$, gọi $\vec{i}$ là vectơ có độ dài $1$ trên trục $Ox$ và $\vec{j}$ là vectơ có độ dài $1$ trên trục $Oy$. Đây là các **vectơ đơn vị**.

:::definition Toạ độ của vectơ
Mỗi vectơ $\vec{a}$ viết được duy nhất dưới dạng
$$\vec{a}=x\vec{i}+y\vec{j}.$$
Cặp số $(x; y)$ là **toạ độ** của $\vec{a}$, và ta viết $\vec{a}=(x; y)$.
:::

:::diagram Vectơ $\vec{a}=3\vec{i}+2\vec{j}$
alt: Trên một lưới, mũi tên đi từ gốc toạ độ O đến điểm P(3; 2), với các đoạn nét đứt cho thấy 3 đơn vị theo trục hoành và 2 đơn vị lên trên
point O 0,0 below-left
point X 3,0 below ""
point Y 0,2 left ""
point P 3,2 above-right "(3; 2)"
axes
grid
arrow O P "a"
segment X P dashed
segment Y P dashed
:::

Hai vectơ **bằng nhau** khi và chỉ khi toạ độ của chúng bằng nhau: $(x; y)=(x'; y')$ nghĩa là $x=x'$ và $y=y'$. Vectơ không là $(0; 0)$.

### Từ hai điểm đến một vectơ

Nếu $A(x_A; y_A)$ và $B(x_B; y_B)$ thì để đi từ $A$ đến $B$ bạn dịch $x_B-x_A$ theo chiều ngang và $y_B-y_A$ theo chiều dọc:
$$\overrightarrow{AB}=(x_B-x_A;\ y_B-y_A).$$

:::example Vectơ từ hai điểm
Tìm $\overrightarrow{AB}$ với $A(1; 2)$ và $B(4; 6)$.

**Lời giải.** $\overrightarrow{AB}=(4-1;\ 6-2)=(3; 4)$.
:::

## Các phép toán theo toạ độ

:::theorem Các phép toán theo toạ độ
Cho $\vec{a}=(x_1; y_1)$, $\vec{b}=(x_2; y_2)$ và số $k$. Khi đó
- $\vec{a}+\vec{b}=(x_1+x_2;\ y_1+y_2)$,
- $\vec{a}-\vec{b}=(x_1-x_2;\ y_1-y_2)$,
- $k\vec{a}=(kx_1;\ ky_1)$.
:::

Như vậy bạn cộng, trừ và nhân vectơ với một số từng toạ độ một.

:::example Kết hợp các vectơ
Cho $\vec{a}=(2; -1)$ và $\vec{b}=(-3; 4)$. Tìm $\vec{a}+\vec{b}$, $\vec{a}-\vec{b}$ và $3\vec{a}-2\vec{b}$.

**Lời giải.**
- $\vec{a}+\vec{b}=(2-3;\ -1+4)=(-1; 3)$.
- $\vec{a}-\vec{b}=(2+3;\ -1-4)=(5; -5)$.
- $3\vec{a}=(6; -3)$ và $2\vec{b}=(-6; 8)$, nên $3\vec{a}-2\vec{b}=(6+6;\ -3-8)=(12; -11)$.
:::

## Độ dài vectơ và khoảng cách

Theo định lí Pythagore, vectơ $\vec{a}=(x; y)$ có độ dài
$$|\vec{a}|=\sqrt{x^2+y^2}.$$
Vì $AB$ là độ dài của $\overrightarrow{AB}$, nên **khoảng cách giữa hai điểm** là
$$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}.$$

:::example Độ dài và khoảng cách
Với $A(1; 2)$ và $B(4; 6)$ ta đã có $\overrightarrow{AB}=(3; 4)$. Khi đó $AB=\sqrt{3^2+4^2}=\sqrt{25}=5$.
:::

## Trung điểm và trọng tâm

Dùng $\overrightarrow{OM}=\frac12(\overrightarrow{OA}+\overrightarrow{OB})$ và $\overrightarrow{OG}=\frac13(\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC})$ với $O$ là gốc toạ độ, ta được toạ độ bằng cách lấy trung bình.

:::theorem Trung điểm và trọng tâm
- Trung điểm $M$ của $AB$ là $M\left(\dfrac{x_A+x_B}{2};\ \dfrac{y_A+y_B}{2}\right)$.
- Trọng tâm $G$ của tam giác $ABC$ là $G\left(\dfrac{x_A+x_B+x_C}{3};\ \dfrac{y_A+y_B+y_C}{3}\right)$.
:::

:::example Trung điểm và trọng tâm
a) Tìm trung điểm của $A(2; -1)$ và $B(6; 5)$.
b) Tìm trọng tâm của tam giác có các đỉnh $A(1; 1)$, $B(5; 2)$, $C(0; 6)$.

**Lời giải.**
a) $M\left(\dfrac{2+6}{2};\ \dfrac{-1+5}{2}\right)=(4; 2)$.
b) $G\left(\dfrac{1+5+0}{3};\ \dfrac{1+2+6}{3}\right)=(2; 3)$.
:::

## Vectơ cùng phương và ba điểm thẳng hàng

Hai vectơ $\vec{a}=(x_1; y_1)$ và $\vec{b}=(x_2; y_2)$ **cùng phương** khi vectơ này là bội của vectơ kia. Theo toạ độ, điều đó có nghĩa là
$$x_1y_2-x_2y_1=0.$$
(Hãy dùng phép thử bằng tích này thay cho tỉ số $\frac{x_1}{x_2}=\frac{y_1}{y_2}$, vì tỉ số không dùng được khi có một toạ độ bằng $0$.) Ba điểm $A$, $B$, $C$ thẳng hàng khi $\overrightarrow{AB}$ và $\overrightarrow{AC}$ cùng phương.

:::example Các điểm thẳng hàng
Chứng minh $A(1; 2)$, $B(3; 6)$ và $C(5; 10)$ thẳng hàng. Sau đó tìm $m$ để $\vec{a}=(1; -2)$ và $\vec{b}=(m; 6)$ cùng phương.

**Lời giải.**
- $\overrightarrow{AB}=(2; 4)$ và $\overrightarrow{AC}=(4; 8)$. Kiểm tra: $2\cdot 8-4\cdot 4=16-16=0$, nên ba điểm thẳng hàng (thật vậy $\overrightarrow{AC}=2\overrightarrow{AB}$).
- Với $\vec{a}$ và $\vec{b}$: $1\cdot 6-m\cdot(-2)=6+2m=0$, nên $m=-3$.
:::

## Đỉnh còn thiếu của hình bình hành

$ABCD$ là hình bình hành khi và chỉ khi $\overrightarrow{AB}=\overrightarrow{DC}$, suy ra $D=A+C-B$ theo toạ độ.

:::diagram Hình bình hành $ABCD$
alt: Hình bình hành có các đỉnh A(1; 1), B(4; 2), C(5; 5) và D(2; 4) vẽ trên lưới
point A 1,1 below-left "A(1; 1)"
point B 4,2 below-right "B(4; 2)"
point C 5,5 above-right "C(5; 5)"
point D 2,4 above-left "D(2; 4)"
polygon A B C D
grid
:::

:::example Đỉnh thứ tư
Ba đỉnh của hình bình hành $ABCD$ là $A(1; 1)$, $B(4; 2)$ và $C(5; 5)$. Tìm $D$.

**Lời giải.** $\overrightarrow{AB}=\overrightarrow{DC}$, nên $(3; 1)=(5-x_D;\ 5-y_D)$. Suy ra $x_D=5-3=2$ và $y_D=5-1=4$. Vậy $D(2; 4)$. Kiểm tra bằng hai đường chéo: trung điểm của $AC$ là $(3; 3)$ và trung điểm của $BD$ là $(3; 3)$. ✓
:::

:::warning Những sai lầm thường gặp
- Trừ sai thứ tự: $\overrightarrow{AB}=B-A$ chứ không phải $A-B$.
- Quên rằng vectơ không có "vị trí": $\overrightarrow{AB}=(3; 4)$ đúng với nhiều cặp điểm khác nhau.
- Dùng phép thử tỉ số để xét tính cùng phương khi có toạ độ bằng $0$; hãy dùng $x_1y_2-x_2y_1=0$.
- Viết $|\vec{a}|=x+y$ thay vì $\sqrt{x^2+y^2}$.
:::

## Thuật ngữ

:::terms
- các vectơ đơn vị | unit vectors
- toạ độ của vectơ | coordinates of a vector
- hai vectơ bằng nhau | equal vectors
- độ dài vectơ | length of a vector
- khoảng cách giữa hai điểm | distance between two points
- trung điểm | midpoint
- trọng tâm | centroid
- cùng phương | collinear
- hình bình hành | parallelogram
:::

## Tóm tắt

- $\vec{a}=x\vec{i}+y\vec{j}$ được viết là $\vec{a}=(x; y)$; $\overrightarrow{AB}=(x_B-x_A;\ y_B-y_A)$.
- Cộng, trừ và nhân với một số từng toạ độ một.
- $|\vec{a}|=\sqrt{x^2+y^2}$ và $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$.
- Trung điểm: trung bình cộng các toạ độ; trọng tâm: trung bình cộng của ba toạ độ.
- $\vec{a}$, $\vec{b}$ cùng phương $\iff x_1y_2-x_2y_1=0$; hình bình hành $ABCD$: $D=A+C-B$.

## Luyện tập

:::practice
1. Cho $\vec{a}=(3; -2)$ và $\vec{b}=(-1; 5)$. Tìm $2\vec{a}+\vec{b}$ và $\vec{a}-3\vec{b}$.
2. Tìm $\overrightarrow{AB}$ và khoảng cách $AB$ với $A(-2; 3)$ và $B(4; -1)$.
3. Tìm trung điểm của $A(-3; 5)$ và $B(7; 1)$.
4. Tìm trọng tâm của tam giác có các đỉnh $A(1; 2)$, $B(4; -1)$, $C(-2; 8)$.
5. Chứng minh $A(1; 1)$, $B(2; 3)$, $C(4; 7)$ thẳng hàng.
6. Tìm $m$ để $\vec{a}=(m; 3)$ và $\vec{b}=(4; 6)$ cùng phương.
7. $ABCD$ là hình bình hành với $A(-1; 0)$, $B(2; 1)$, $C(3; 4)$. Tìm $D$.
8. Viết $\vec{c}=(5; 1)$ dưới dạng $x\vec{a}+y\vec{b}$ với $\vec{a}=(1; 1)$ và $\vec{b}=(1; -1)$.
9. Thử thách. Tìm điểm $M$ trên trục hoành thẳng hàng với $A(1; 2)$ và $B(3; -2)$.
10. Thử thách. Chứng minh tam giác có $A(1; 1)$, $B(4; 5)$, $C(7; 1)$ là tam giác cân và tìm chu vi của nó.
:::

:::solution Xem lời giải
1. $2\vec{a}+\vec{b}=(6-1;\ -4+5)=(5; 1)$. $\vec{a}-3\vec{b}=(3+3;\ -2-15)=(6; -17)$.
2. $\overrightarrow{AB}=(4+2;\ -1-3)=(6; -4)$ và $AB=\sqrt{36+16}=\sqrt{52}=2\sqrt{13}$.
3. $\left(\dfrac{-3+7}{2};\ \dfrac{5+1}{2}\right)=(2; 3)$.
4. $G\left(\dfrac{1+4-2}{3};\ \dfrac{2-1+8}{3}\right)=(1; 3)$.
5. $\overrightarrow{AB}=(1; 2)$ và $\overrightarrow{AC}=(3; 6)$. $1\cdot 6-3\cdot 2=0$, nên hai vectơ cùng phương (và $\overrightarrow{AC}=3\overrightarrow{AB}$).
6. $m\cdot 6-4\cdot 3=0$, nên $6m=12$ và $m=2$.
7. $D=A+C-B=(-1+3-2;\ 0+4-1)=(0; 3)$.
8. $x+y=5$ và $x-y=1$. Cộng hai phương trình được $2x=6$, $x=3$, rồi $y=2$. Vậy $\vec{c}=3\vec{a}+2\vec{b}$.
9. $M(t; 0)$. $\overrightarrow{AM}=(t-1; -2)$ và $\overrightarrow{AB}=(2; -4)$. Cùng phương: $(t-1)(-4)-2\cdot(-2)=0$, nên $-4t+4+4=0$ và $t=2$. $M(2; 0)$.
10. $AB=\sqrt{9+16}=5$, $BC=\sqrt{9+16}=5$, $AC=6$. Có hai cạnh bằng nhau nên tam giác cân. Chu vi $5+5+6=16$.
:::
