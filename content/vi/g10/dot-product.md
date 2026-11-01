---
title: Tích vô hướng của hai vectơ
description: Định nghĩa tích vô hướng qua góc giữa hai vectơ, tính theo toạ độ, rồi dùng để xét vuông góc, tìm góc và độ dài.
minutes: 18
---

:::goals
- Tìm góc giữa hai vectơ và nêu định nghĩa tích vô hướng $\vec{a}\cdot\vec{b}$.
- Dùng các tính chất của tích vô hướng để khai triển biểu thức.
- Tính $\vec{a}\cdot\vec{b}$ theo toạ độ và dùng $\vec{a}\cdot\vec{b}=0$ để xét hai vectơ vuông góc.
- Tìm góc giữa hai vectơ và các góc của tam giác từ toạ độ.
:::

Bạn kéo một chiếc xe trượt tuyết trên nền tuyết bằng sợi dây. Chỉ phần lực kéo **dọc theo mặt đất** làm xe chuyển động; phần nâng xe lên là phần lãng phí. Các nhà vật lí gói gọn điều này trong một con số: lực nhân quãng đường nhân côsin của góc giữa chúng. Các nhà toán học biến ý tưởng ấy thành phép nhân hai vectơ cho kết quả là một **số**: tích vô hướng.

## Góc giữa hai vectơ

Đặt hai vectơ khác $\vec{0}$ là $\vec{a}$ và $\vec{b}$ sao cho chúng cùng xuất phát từ điểm $O$. **Góc giữa** hai vectơ, kí hiệu $(\vec{a}, \vec{b})$, là góc $\theta$ trên hình, với $0^\circ\le\theta\le 180^\circ$.

:::diagram Góc $\theta$ giữa $\vec{a}$ và $\vec{b}$
alt: Hai mũi tên a và b xuất phát từ gốc O, có cung tròn đánh dấu góc theta giữa chúng
point O 0,0 below-left
point A 4,0 below ""
point B 2,3 above ""
arrow O A "a"
arrow O B "b"
angle A O B "θ"
:::

Nếu $\theta=0^\circ$ thì hai vectơ cùng hướng; nếu $\theta=180^\circ$ thì ngược hướng; nếu $\theta=90^\circ$ thì chúng vuông góc, viết là $\vec{a}\perp\vec{b}$.

## Định nghĩa tích vô hướng

:::definition Tích vô hướng
Với hai vectơ khác $\vec{0}$ là $\vec{a}$ và $\vec{b}$,
$$\vec{a}\cdot\vec{b}=|\vec{a}|\,|\vec{b}|\cos(\vec{a}, \vec{b}).$$
Nếu $\vec{a}=\vec{0}$ hoặc $\vec{b}=\vec{0}$ thì $\vec{a}\cdot\vec{b}=0$.
:::

Kết quả là một số, không phải vectơ. Nó dương khi góc nhọn, âm khi góc tù và bằng $0$ khi góc vuông. Đặc biệt $\vec{a}\cdot\vec{a}=|\vec{a}|^2$ (góc bằng $0^\circ$ và $\cos 0^\circ=1$).

:::example Ba góc khác nhau
Cho $|\vec{a}|=3$ và $|\vec{b}|=4$. Tìm $\vec{a}\cdot\vec{b}$ khi góc giữa hai vectơ là $60^\circ$, $120^\circ$ và $90^\circ$.

**Lời giải.**
- $60^\circ$: $3\cdot 4\cdot\cos 60^\circ=12\cdot\frac12=6$.
- $120^\circ$: $3\cdot 4\cdot\cos 120^\circ=12\cdot\left(-\frac12\right)=-6$.
- $90^\circ$: $3\cdot 4\cdot\cos 90^\circ=0$.
:::

:::example Công của một lực
Bạn kéo xe bằng lực $10$ N theo sợi dây hợp với mặt đất góc $60^\circ$. Xe dịch chuyển $5$ m dọc mặt đất. Tìm công đã thực hiện.

**Lời giải.** Công là tích vô hướng của vectơ lực và vectơ độ dời: $A=10\cdot 5\cdot\cos 60^\circ=50\cdot\frac12=25$ jun.
:::

## Tính chất

:::theorem Tính chất của tích vô hướng
Với mọi vectơ $\vec{a}, \vec{b}, \vec{c}$ và số $k$:
- $\vec{a}\cdot\vec{b}=\vec{b}\cdot\vec{a}$ (giao hoán),
- $\vec{a}\cdot(\vec{b}+\vec{c})=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c}$ (phân phối),
- $(k\vec{a})\cdot\vec{b}=k(\vec{a}\cdot\vec{b})=\vec{a}\cdot(k\vec{b})$,
- $\vec{a}\cdot\vec{a}=|\vec{a}|^2\ge 0$.
:::

Từ đó ta có các hằng đẳng thức
$$|\vec{a}+\vec{b}|^2=|\vec{a}|^2+2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2,\qquad |\vec{a}-\vec{b}|^2=|\vec{a}|^2-2\,\vec{a}\cdot\vec{b}+|\vec{b}|^2.$$

:::example Độ dài của vectơ tổng
Cho $|\vec{a}|=2$, $|\vec{b}|=3$ và $\vec{a}\cdot\vec{b}=1$. Tìm $|\vec{a}+\vec{b}|$ và $|\vec{a}-\vec{b}|$.

**Lời giải.**
- $|\vec{a}+\vec{b}|^2=4+2\cdot 1+9=15$, nên $|\vec{a}+\vec{b}|=\sqrt{15}$.
- $|\vec{a}-\vec{b}|^2=4-2\cdot 1+9=11$, nên $|\vec{a}-\vec{b}|=\sqrt{11}$.
:::

## Tích vô hướng theo toạ độ

:::theorem Công thức toạ độ
Nếu $\vec{a}=(x_1; y_1)$ và $\vec{b}=(x_2; y_2)$ thì
$$\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2.$$
:::

Hai hệ quả suy ra ngay:
- $\vec{a}\perp\vec{b}\iff x_1x_2+y_1y_2=0$ (với hai vectơ khác $\vec{0}$).
- $\cos(\vec{a}, \vec{b})=\dfrac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\,\sqrt{x_2^2+y_2^2}}$.

:::example Tích vô hướng và góc
Với $\vec{a}=(2; 3)$ và $\vec{b}=(4; -1)$, tìm $\vec{a}\cdot\vec{b}$ và góc giữa hai vectơ.

**Lời giải.** $\vec{a}\cdot\vec{b}=2\cdot 4+3\cdot(-1)=5$. Lại có $|\vec{a}|=\sqrt{13}$ và $|\vec{b}|=\sqrt{17}$, nên
$$\cos(\vec{a}, \vec{b})=\frac{5}{\sqrt{13}\sqrt{17}}=\frac{5}{\sqrt{221}}\approx 0{,}336.$$
Góc giữa hai vectơ xấp xỉ $70{,}3^\circ$.
:::

:::example Điều kiện vuông góc
Tìm $m$ để $\vec{a}=(2; m)$ và $\vec{b}=(3; -1)$ vuông góc.

**Lời giải.** $\vec{a}\cdot\vec{b}=6-m=0$, nên $m=6$.
:::

## Các góc trong tam giác

Để tìm góc tại một đỉnh, hãy dùng hai vectơ xuất phát từ đỉnh đó.

:::diagram Tam giác $ABC$
alt: Tam giác có các đỉnh A(1; 2), B(3; 1), C(2; 4) và dấu góc vuông tại A
point A 1,2 left
point B 3,1 below-right
point C 2,4 above
polygon A B C
right B A C
grid
:::

:::example Các góc của tam giác
Tìm các góc của tam giác có $A(1; 2)$, $B(3; 1)$ và $C(2; 4)$.

**Lời giải.** $\overrightarrow{AB}=(2; -1)$ và $\overrightarrow{AC}=(1; 2)$.
- Tại $A$: $\overrightarrow{AB}\cdot\overrightarrow{AC}=2-2=0$, nên $\widehat{A}=90^\circ$.
- Tại $B$: $\overrightarrow{BA}=(-2; 1)$ và $\overrightarrow{BC}=(-1; 3)$. Tích vô hướng là $2+3=5$, còn $|\overrightarrow{BA}|=\sqrt5$, $|\overrightarrow{BC}|=\sqrt{10}$. Do đó $\cos B=\frac{5}{\sqrt{50}}=\frac{1}{\sqrt2}$ và $\widehat{B}=45^\circ$.
- Tổng ba góc bằng $180^\circ$, nên $\widehat{C}=45^\circ$.
:::

:::warning Những sai lầm thường gặp
- Viết $\vec{a}\cdot\vec{b}$ như một vectơ: nó là một **số**.
- Lấy góc của hình khi hai vectơ không cùng điểm đầu. Hãy dời một vectơ trước.
- Kết luận $\vec{a}=\vec{0}$ hoặc $\vec{b}=\vec{0}$ từ $\vec{a}\cdot\vec{b}=0$. Hai vectơ vuông góc cũng cho kết quả $0$.
- Quên số hạng ở giữa: $|\vec{a}+\vec{b}|^2\neq|\vec{a}|^2+|\vec{b}|^2$ trừ khi $\vec{a}\cdot\vec{b}=0$.
:::

## Thuật ngữ

:::terms
- góc giữa hai vectơ | angle between two vectors
- tích vô hướng | dot product
- vuông góc | perpendicular
- góc nhọn | acute angle
- góc tù | obtuse angle
- công (vật lí) | work (physics)
- giao hoán | commutative
- phân phối | distributive
:::

## Tóm tắt

- $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos(\vec{a}, \vec{b})$ là một số; $\vec{a}\cdot\vec{a}=|\vec{a}|^2$.
- Tích vô hướng có tính giao hoán, phân phối và $|\vec{a}\pm\vec{b}|^2=|\vec{a}|^2\pm2\vec{a}\cdot\vec{b}+|\vec{b}|^2$.
- Theo toạ độ, $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2$.
- $\vec{a}\perp\vec{b}\iff\vec{a}\cdot\vec{b}=0$, và công thức của $\cos$ cho ta tìm được góc.

## Luyện tập

:::practice
1. Tìm $\vec{a}\cdot\vec{b}$ nếu $|\vec{a}|=5$, $|\vec{b}|=2$ và góc giữa hai vectơ là $60^\circ$.
2. Tìm $\vec{a}\cdot\vec{b}$ nếu $|\vec{a}|=4$, $|\vec{b}|=3$ và góc giữa hai vectơ là $150^\circ$.
3. Tính $\vec{a}\cdot\vec{b}$ với $\vec{a}=(1; -3)$ và $\vec{b}=(2; 5)$.
4. Tìm $m$ để $\vec{a}=(m; 4)$ và $\vec{b}=(2; -1)$ vuông góc.
5. Tìm góc giữa $\vec{a}=(1; 2)$ và $\vec{b}=(3; 1)$.
6. Tìm $\widehat{A}$ trong tam giác có $A(-1; 0)$, $B(2; 0)$, $C(2; 3)$.
7. Cho $|\vec{a}|=2$, $|\vec{b}|=3$ và $\vec{a}\cdot\vec{b}=-3$. Tìm $|\vec{a}+\vec{b}|$ và $|\vec{a}-\vec{b}|$.
8. Một lực $20$ N làm vật dịch chuyển $3$ m theo một đường thẳng, lực hợp với phương chuyển động góc $30^\circ$. Tìm công (giá trị chính xác, rồi làm tròn đến $0{,}01$ J).
9. Thử thách. Tìm vectơ $\vec{b}$ vuông góc với $\vec{a}=(3; 4)$ và có $|\vec{b}|=10$.
10. Thử thách. Chứng minh rằng nếu $|\vec{a}|=|\vec{b}|$ thì $(\vec{a}+\vec{b})\perp(\vec{a}-\vec{b})$. Kiểm tra với $\vec{a}=(3; 4)$ và $\vec{b}=(5; 0)$.
:::

:::solution Xem lời giải
1. $5\cdot 2\cdot\cos 60^\circ=10\cdot\frac12=5$.
2. $4\cdot 3\cdot\cos 150^\circ=12\cdot\left(-\frac{\sqrt3}{2}\right)=-6\sqrt3$.
3. $1\cdot 2+(-3)\cdot 5=2-15=-13$.
4. $2m-4=0$, nên $m=2$.
5. $\vec{a}\cdot\vec{b}=3+2=5$, $|\vec{a}|=\sqrt5$, $|\vec{b}|=\sqrt{10}$. $\cos=\frac{5}{\sqrt{50}}=\frac1{\sqrt2}$, nên góc bằng $45^\circ$.
6. $\overrightarrow{AB}=(3; 0)$ và $\overrightarrow{AC}=(3; 3)$. Tích vô hướng bằng $9$; độ dài là $3$ và $3\sqrt2$. $\cos A=\frac{9}{9\sqrt2}=\frac1{\sqrt2}$, nên $\widehat{A}=45^\circ$.
7. $|\vec{a}+\vec{b}|^2=4-6+9=7$, nên bằng $\sqrt7$. $|\vec{a}-\vec{b}|^2=4+6+9=19$, nên bằng $\sqrt{19}$.
8. $A=20\cdot 3\cdot\cos 30^\circ=60\cdot\frac{\sqrt3}{2}=30\sqrt3\approx 51{,}96$ J.
9. Gọi $\vec{b}=(x; y)$. Khi đó $3x+4y=0$, nên $\vec{b}=t(4; -3)$. $|\vec{b}|=5|t|=10$ cho $t=\pm2$. Vậy $\vec{b}=(8; -6)$ hoặc $\vec{b}=(-8; 6)$.
10. $(\vec{a}+\vec{b})\cdot(\vec{a}-\vec{b})=|\vec{a}|^2-|\vec{b}|^2=0$. Kiểm tra: $\vec{a}+\vec{b}=(8; 4)$, $\vec{a}-\vec{b}=(-2; 4)$ và $-16+16=0$. ✓ (Điều này nói rằng hai đường chéo của hình thoi vuông góc với nhau.)
:::
