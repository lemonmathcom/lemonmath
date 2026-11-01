---
title: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách
description: Xét hai đường thẳng cắt nhau, song song hay trùng nhau, tìm góc giữa chúng và tính khoảng cách từ một điểm đến đường thẳng.
minutes: 18
---

:::goals
- Xác định vị trí tương đối của hai đường thẳng từ phương trình của chúng.
- Tìm góc giữa hai đường thẳng và xét tính vuông góc.
- Tính khoảng cách từ một điểm đến đường thẳng và giữa hai đường thẳng song song.
- Dùng các công cụ này để tính đường cao và diện tích tam giác.
:::

Hai con đường trên bản đồ hoặc cắt nhau, hoặc chạy song song, hoặc là một con đường được vẽ hai lần. Người đo đạc còn muốn biết chúng cắt nhau dưới góc nào và ngôi nhà cách đường bao xa. Tất cả đều suy ra từ **vectơ pháp tuyến** của các đường thẳng.

## Vị trí tương đối của hai đường thẳng

Cho $d_1: a_1x+b_1y+c_1=0$ và $d_2: a_2x+b_2y+c_2=0$ với các vectơ pháp tuyến $\vec{n}_1=(a_1; b_1)$ và $\vec{n}_2=(a_2; b_2)$.

:::theorem Vị trí của hai đường thẳng
- $\vec{n}_1,\vec{n}_2$ **không cùng phương** ($a_1b_2-a_2b_1\neq 0$): hai đường thẳng **cắt nhau** tại một điểm. Giải hệ phương trình để tìm điểm đó.
- $\vec{n}_1,\vec{n}_2$ cùng phương và các phương trình tỉ lệ ($\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}$): hai đường thẳng **trùng nhau**.
- $\vec{n}_1,\vec{n}_2$ cùng phương nhưng $c_1/c_2$ khác tỉ số đó: hai đường thẳng **song song** và phân biệt.
:::

:::example Ba trường hợp
Xác định vị trí của mỗi cặp.
a) $x+y-3=0$ và $2x-y=0$. b) $2x-4y+6=0$ và $x-2y-5=0$. c) $2x-4y+6=0$ và $x-2y+3=0$.

**Lời giải.**
- a) $1\cdot(-1)-2\cdot 1=-3\neq 0$: hai đường thẳng cắt nhau. Từ $y=2x$: $x+2x-3=0$, suy ra $x=1$, $y=2$. Giao điểm là $(1; 2)$.
- b) $2\cdot(-2)-1\cdot(-4)=0$, nên hai vectơ pháp tuyến cùng phương. Vì $\frac{2}{1}=\frac{-4}{-2}=2\neq\frac{6}{-5}$ nên hai đường thẳng song song.
- c) $\frac{2}{1}=\frac{-4}{-2}=\frac{6}{3}=2$: các phương trình tỉ lệ nên hai đường thẳng trùng nhau.
:::

## Góc giữa hai đường thẳng

Góc $\varphi$ giữa hai đường thẳng nằm trong khoảng từ $0^\circ$ đến $90^\circ$ và
$$\cos\varphi=\frac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1|\,|\vec{n}_2|}=\frac{|a_1a_2+b_1b_2|}{\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}.$$
Hai đường thẳng **vuông góc** khi và chỉ khi $a_1a_2+b_1b_2=0$.

:::graph Hai đường thẳng cắt nhau dưới góc $45^\circ$
alt: Đường thẳng x cộng y bằng 3 và đường thẳng đứng x bằng 1 cắt nhau tại điểm (1; 2)
x: -1..5
y: -1..7
plot: -x + 3
vline: 1 ; dashed
point: (1, 2) "(1; 2)" above-right
:::

:::example Góc giữa hai đường thẳng
Tìm góc giữa $x+y-3=0$ và $x=1$, và giữa $x+y=0$ và $x+3y-2=0$.

**Lời giải.**
- $\vec{n}_1=(1; 1)$ và $\vec{n}_2=(1; 0)$: $\cos\varphi=\frac{1}{\sqrt2\cdot 1}=\frac{1}{\sqrt2}$, nên $\varphi=45^\circ$.
- $\vec{n}_1=(1; 1)$ và $\vec{n}_2=(1; 3)$: $\cos\varphi=\frac{4}{\sqrt2\sqrt{10}}=\frac{4}{\sqrt{20}}=\frac{2}{\sqrt5}$, nên $\varphi\approx 26{,}57^\circ$.
:::

:::example Điều kiện vuông góc
Tìm $m$ để $mx+y+1=0$ vuông góc với $2x-3y+5=0$.

**Lời giải.** $2m+1\cdot(-3)=0$, nên $m=\frac32$.
:::

## Khoảng cách từ một điểm đến đường thẳng

:::theorem Khoảng cách từ một điểm đến đường thẳng
Khoảng cách từ $M_0(x_0; y_0)$ đến đường thẳng $d: ax+by+c=0$ là
$$d(M_0, d)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.$$
:::

:::example Khoảng cách đến một đường thẳng
Tìm khoảng cách từ $M(1; 2)$ đến $3x+4y-2=0$.

**Lời giải.** $\dfrac{|3\cdot 1+4\cdot 2-2|}{\sqrt{9+16}}=\dfrac{9}{5}=1{,}8$.
:::

Với hai đường thẳng **song song**, lấy một điểm bất kì trên đường này rồi đo đến đường kia. Với $ax+by+c_1=0$ và $ax+by+c_2=0$, khoảng cách là $\frac{|c_1-c_2|}{\sqrt{a^2+b^2}}$.

:::example Khoảng cách giữa hai đường thẳng song song
Tìm khoảng cách giữa $3x+4y-2=0$ và $3x+4y+8=0$.

**Lời giải.** $\dfrac{|-2-8|}{\sqrt{9+16}}=\dfrac{10}{5}=2$.
:::

## Đường cao và diện tích tam giác

:::diagram Tam giác $ABC$
alt: Tam giác có các đỉnh A(1; 1), B(5; 1) và C(3; 5)
point A 1,1 below-left
point B 5,1 below-right
point C 3,5 above
polygon A B C
segment A B
label 4.3,3.4 "BC"

:::

:::example Đường cao và diện tích
Tam giác $ABC$ có $A(1; 1)$, $B(5; 1)$ và $C(3; 5)$. Tìm đường cao kẻ từ $A$ và diện tích tam giác.

**Lời giải.** $\overrightarrow{BC}=(-2; 4)$, nên một vectơ pháp tuyến của $BC$ là $(2; 1)$ (hoặc $(4; 2)$). Đường thẳng $BC$: $2(x-5)+(y-1)=0$, tức $2x+y-11=0$. Đường cao kẻ từ $A$ là
$$h_A=\frac{|2+1-11|}{\sqrt5}=\frac{8}{\sqrt5}.$$
Lại có $BC=\sqrt{4+16}=2\sqrt5$, nên diện tích là $\frac12\cdot 2\sqrt5\cdot\frac{8}{\sqrt5}=8$. Kiểm tra với đáy $AB=4$ và chiều cao $4$ (tung độ của $C$ trừ $1$): $\frac12\cdot 4\cdot 4=8$ ✓.
:::

:::warning Những sai lầm thường gặp
- Quên dấu giá trị tuyệt đối trong công thức góc và khoảng cách.
- Chỉ so sánh $a_1/a_2$ và $b_1/b_2$ mà quên $c_1/c_2$ (điều này phân biệt song song và trùng nhau).
- Dùng công thức khoảng cách giữa hai đường thẳng song song khi các hệ số $a, b$ chưa giống hệt nhau: hãy đưa chúng về cùng hệ số trước.
- Đưa ra góc giữa hai đường thẳng lớn hơn $90^\circ$.
:::

## Thuật ngữ

:::terms
- vị trí tương đối | relative position
- cắt nhau | intersect
- trùng nhau | coincide
- song song | parallel
- góc giữa hai đường thẳng | angle between two lines
- khoảng cách từ một điểm đến đường thẳng | distance from a point to a line
- đường cao | height
- diện tích | area
:::

## Tóm tắt

- So sánh $\vec{n}_1,\vec{n}_2$: không cùng phương thì cắt nhau; cùng phương thì song song hoặc trùng (kiểm tra thêm $c$).
- $\cos\varphi=\frac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1||\vec{n}_2|}$, và vuông góc khi $a_1a_2+b_1b_2=0$.
- $d(M_0, d)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$.
- Đường cao và diện tích tam giác suy ra từ khoảng cách và độ dài.

## Luyện tập

:::practice
1. Xác định vị trí của $2x-y+1=0$ và $4x-2y+3=0$.
2. Tìm giao điểm của $3x+2y-6=0$ và $x-y+2=0$.
3. Tìm góc giữa $x+y=0$ và $x+3y-2=0$ (làm tròn đến $0{,}01^\circ$).
4. Tìm $m$ để $(m+1)x+2y-3=0$ vuông góc với $x-y+4=0$.
5. Tìm khoảng cách từ gốc toạ độ đến $5x+12y-26=0$.
6. Tìm khoảng cách từ $A(2; -1)$ đến $3x-4y+5=0$.
7. Tìm khoảng cách giữa $2x-y+1=0$ và $2x-y-4=0$.
8. Với $A(1; 1)$, $B(5; 4)$, $C(2; 5)$ hãy viết phương trình $AB$, tìm đường cao kẻ từ $C$ và diện tích tam giác $ABC$.
9. Thử thách. Tìm các điểm trên trục hoành có khoảng cách đến $3x+4y-5=0$ bằng $3$.
10. Thử thách. Tìm khoảng cách từ $A(1; 1)$ đến đường thẳng đi qua $B(2; -1)$ với vectơ chỉ phương $\vec{u}=(3; 4)$.
:::

:::solution Xem lời giải
1. $\frac{2}{4}=\frac{-1}{-2}=\frac12\neq\frac13$: hai đường thẳng song song (phân biệt).
2. Từ $x=y-2$: $3(y-2)+2y-6=0$, suy ra $5y=12$, $y=\frac{12}{5}$ và $x=\frac25$. Giao điểm là $\left(\frac25; \frac{12}{5}\right)$.
3. $\cos\varphi=\frac{|1+3|}{\sqrt2\sqrt{10}}=\frac{4}{\sqrt{20}}=\frac{2}{\sqrt5}$, nên $\varphi\approx 26{,}57^\circ$.
4. $(m+1)\cdot 1+2\cdot(-1)=0$, suy ra $m=1$.
5. $\frac{|{-26}|}{\sqrt{25+144}}=\frac{26}{13}=2$.
6. $\frac{|6+4+5|}{\sqrt{9+16}}=\frac{15}{5}=3$.
7. $\frac{|1-(-4)|}{\sqrt{4+1}}=\frac{5}{\sqrt5}=\sqrt5$.
8. $\overrightarrow{AB}=(4; 3)$, $\vec{n}=(3; -4)$: $3(x-1)-4(y-1)=0$, tức $3x-4y+1=0$. Đường cao kẻ từ $C$: $\frac{|6-20+1|}{5}=\frac{13}{5}=2{,}6$. $AB=5$, nên diện tích là $\frac12\cdot 5\cdot 2{,}6=6{,}5$.
9. $M(t; 0)$: $\frac{|3t-5|}{5}=3$, suy ra $3t-5=\pm15$, cho $t=\frac{20}{3}$ hoặc $t=-\frac{10}{3}$. Các điểm là $\left(\frac{20}{3}; 0\right)$ và $\left(-\frac{10}{3}; 0\right)$.
10. $\vec{n}=(4; -3)$: $4(x-2)-3(y+1)=0$, tức $4x-3y-11=0$. Khoảng cách từ $A$: $\frac{|4-3-11|}{5}=\frac{10}{5}=2$.
:::
