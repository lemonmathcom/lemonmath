---
title: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách
description: Xét hai đường thẳng cắt nhau, song song hay trùng nhau, tìm góc giữa chúng và tính khoảng cách từ một điểm đến đường thẳng.
minutes: 28
---

:::goals
- Xác định vị trí tương đối của hai đường thẳng từ phương trình của chúng.
- Tìm góc giữa hai đường thẳng và xét tính vuông góc.
- Tính khoảng cách từ một điểm đến đường thẳng và giữa hai đường thẳng song song.
- Dùng các công cụ này để tính đường cao và diện tích tam giác.
:::

Trên một bản đồ (đơn vị: km), một con đường chạy theo đường thẳng $d_1: x+y-3=0$ và một đường sắt chạy theo $d_2: 2x-y=0$. Một ngôi nhà ở điểm $M(4; 3)$. Đường bộ và đường sắt gặp nhau ở đâu, dưới góc bao nhiêu độ? Ngôi nhà cách con đường bao xa?

Cả ba câu hỏi đều trả lời được chỉ từ phương trình của hai đường thẳng, nhờ **vectơ pháp tuyến** của chúng.

:::graph Đường bộ $d_1$, đường sắt $d_2$ và ngôi nhà $M$
alt: Hai đường thẳng x cộng y bằng 3 và y bằng 2x cắt nhau tại điểm (1; 2), ngôi nhà ở điểm M(4; 3)
x: -1..6
y: -1..7
plot: -x + 3
plot: 2x
point: (1, 2) "(1; 2)" right
point: (4, 3) "M" above-right
:::

## Vị trí tương đối của hai đường thẳng

### Khám phá: giải hệ để biết vị trí

Xét $d: 2x-y+1=0$ và ba đường thẳng khác. Ta giải hệ gồm $d$ và từng đường:

| đường thẳng | vectơ pháp tuyến | hệ với $d$ | vị trí |
|---|---|---|---|
| $4x-2y+3=0$ | $(4; -2)$ | vô nghiệm | song song |
| $4x-2y+2=0$ | $(4; -2)$ | vô số nghiệm | trùng nhau |
| $x+y-2=0$ | $(1; 1)$ | nghiệm duy nhất $\left(\frac13; \frac53\right)$ | cắt nhau |

Vectơ pháp tuyến của $d$ là $(2; -1)$. Ở hai dòng đầu, vectơ pháp tuyến là $(4; -2)=2(2; -1)$, cùng phương với $(2; -1)$, và hai đường không cắt nhau tại đúng một điểm. Ở dòng cuối, hai vectơ pháp tuyến không cùng phương và hai đường cắt nhau.

Cho $d_1: a_1x+b_1y+c_1=0$ và $d_2: a_2x+b_2y+c_2=0$ với các vectơ pháp tuyến $\vec{n}_1=(a_1; b_1)$ và $\vec{n}_2=(a_2; b_2)$.

:::theorem Vị trí của hai đường thẳng
- $\vec{n}_1,\vec{n}_2$ **không cùng phương** ($a_1b_2-a_2b_1\neq 0$): hai đường thẳng **cắt nhau** tại một điểm. Giải hệ phương trình để tìm điểm đó.
- $\vec{n}_1,\vec{n}_2$ cùng phương và các phương trình tỉ lệ ($\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}$): hai đường thẳng **trùng nhau**.
- $\vec{n}_1,\vec{n}_2$ cùng phương nhưng $\frac{c_1}{c_2}$ khác tỉ số đó: hai đường thẳng **song song**.
:::

:::example Ba trường hợp
Xác định vị trí tương đối của mỗi cặp đường thẳng.
a) $x+y-3=0$ và $2x-y=0$. b) $2x-4y+6=0$ và $x-2y-5=0$. c) $2x-4y+6=0$ và $x-2y+3=0$.

**Lời giải.** Ta so sánh hai vectơ pháp tuyến trước, rồi mới xét hệ số tự do.

a) Ta có $1\cdot(-1)-2\cdot1=-3\neq 0$, nên hai đường thẳng cắt nhau. Thế $y=2x$ vào phương trình đầu:
$$x+2x-3=0\iff x=1,\ y=2.$$

b) Ta có $\dfrac{2}{1}=\dfrac{-4}{-2}=2$, nhưng $\dfrac{6}{-5}\neq 2$, nên hai đường thẳng song song.

c) Ta có $\dfrac{2}{1}=\dfrac{-4}{-2}=\dfrac{6}{3}=2$, nên hai phương trình tỉ lệ.

Vậy cặp a) cắt nhau tại $(1; 2)$, cặp b) song song, cặp c) trùng nhau.
:::

Cặp a) chính là đường bộ và đường sắt ở đầu bài: chúng gặp nhau tại $(1; 2)$. Câu hỏi tiếp theo là góc giữa chúng.

## Góc giữa hai đường thẳng

Góc giữa hai đường thẳng cắt nhau là góc nhỏ nhất trong bốn góc tạo thành, nên $0^\circ\le\varphi\le 90^\circ$. Hai đường thẳng song song hoặc trùng nhau có góc $0^\circ$.

:::theorem Công thức góc
$$\cos\varphi=\frac{|\vec{n}_1\cdot\vec{n}_2|}{|\vec{n}_1|\,|\vec{n}_2|}=\frac{|a_1a_2+b_1b_2|}{\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}.$$
Hai đường thẳng **vuông góc** khi và chỉ khi $a_1a_2+b_1b_2=0$.
:::

Hai vectơ pháp tuyến tạo với nhau một góc bằng $\varphi$ hoặc $180^\circ-\varphi$. Hai góc này có côsin đối nhau, nên dấu giá trị tuyệt đối giúp ta luôn nhận được góc không tù.

:::example Góc giữa đường bộ và đường sắt
a) Tính góc giữa $d_1: x+y-3=0$ và $d_2: 2x-y=0$.
b) Hai đường thẳng $2x-3y+5=0$ và $3x+2y-1=0$ có vuông góc không?

**Lời giải.** Ta dùng công thức góc với hai vectơ pháp tuyến.

a) $\vec{n}_1=(1; 1)$, $\vec{n}_2=(2; -1)$:
$$\cos\varphi=\frac{|1\cdot2+1\cdot(-1)|}{\sqrt2\cdot\sqrt5}=\frac{1}{\sqrt{10}}\ \Rightarrow\ \varphi\approx 71{,}57^\circ.$$

b) $\vec{n}_1=(2; -3)$, $\vec{n}_2=(3; 2)$: $2\cdot3+(-3)\cdot2=0$.

Vậy đường bộ và đường sắt cắt nhau dưới góc khoảng $71{,}57^\circ$, còn hai đường thẳng ở câu b) vuông góc với nhau.
:::

## Khoảng cách từ một điểm đến đường thẳng

:::theorem Khoảng cách từ một điểm đến đường thẳng
Khoảng cách từ $M_0(x_0; y_0)$ đến đường thẳng $\Delta: ax+by+c=0$ là
$$d(M_0, \Delta)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.$$
:::

**Vì sao?** Gọi $H$ là hình chiếu của $M_0$ trên $\Delta$. Vectơ $\overrightarrow{HM_0}$ cùng phương với $\vec{n}=(a; b)$, nên $|\vec{n}\cdot\overrightarrow{HM_0}|=|\vec{n}|\cdot HM_0$. Mặt khác $H(x_H; y_H)$ thuộc $\Delta$ nên $ax_H+by_H=-c$, do đó $\vec{n}\cdot\overrightarrow{HM_0}=ax_0+by_0+c$. Chia cho $|\vec{n}|=\sqrt{a^2+b^2}$ ta được công thức.

Bây giờ ta trả lời câu hỏi cuối của đầu bài.

:::example Ngôi nhà cách con đường bao xa?
Tính khoảng cách từ ngôi nhà $M(4; 3)$ đến con đường $d_1: x+y-3=0$ (đơn vị: km).

**Lời giải.** Thay toạ độ của $M$ vào công thức khoảng cách với $a=b=1$, $c=-3$:

$$d(M, d_1)=\frac{|4+3-3|}{\sqrt{1^2+1^2}}=\frac{4}{\sqrt2}=2\sqrt2\approx 2{,}83.$$

Vậy ngôi nhà cách con đường khoảng $2{,}83$ km.
:::

Với hai đường thẳng **song song**, khoảng cách giữa chúng là khoảng cách từ một điểm bất kì của đường này đến đường kia. Nếu hai phương trình có **cùng** $a$, $b$: $ax+by+c_1=0$ và $ax+by+c_2=0$, thì khoảng cách là $\dfrac{|c_1-c_2|}{\sqrt{a^2+b^2}}$.

:::example Khoảng cách giữa hai đường thẳng song song
Tìm khoảng cách giữa $3x+4y-2=0$ và $6x+8y+16=0$.

**Lời giải.** Hai phương trình chưa cùng hệ số $a$, $b$. Chia phương trình thứ hai cho $2$ trước:

$$6x+8y+16=0\iff 3x+4y+8=0.$$

$$d=\frac{|-2-8|}{\sqrt{3^2+4^2}}=\frac{10}{5}=2.$$

Vậy khoảng cách giữa hai đường thẳng là $2$.

**Kiểm tra.** Điểm $(2; -1)$ thuộc đường thứ nhất, và khoảng cách từ nó đến $3x+4y+8=0$ là $\dfrac{|6-4+8|}{5}=2$.
:::

Công thức khoảng cách cũng dùng được theo chiều ngược lại: biết khoảng cách, tìm điểm.

:::example Tìm điểm khi biết khoảng cách
Tìm các điểm trên trục hoành cách đường thẳng $4x-3y+2=0$ một khoảng bằng $2$.

**Lời giải.** Điểm trên trục hoành có dạng $M(t; 0)$. Đặt khoảng cách bằng $2$, rồi bỏ dấu giá trị tuyệt đối thành hai trường hợp:

$$\frac{|4t+2|}{5}=2\iff |4t+2|=10\iff 4t+2=10\ \text{ hoặc }\ 4t+2=-10.$$

Ta được $t=2$ hoặc $t=-3$.

Vậy có hai điểm thoả mãn: $(2; 0)$ và $(-3; 0)$.
:::

## Đường cao và diện tích tam giác

Đường cao của tam giác chính là khoảng cách từ một đỉnh đến đường thẳng chứa cạnh đối diện.

:::diagram Tam giác $ABC$ và đường cao $AH$
alt: Tam giác có các đỉnh A(1; 1), B(5; 1) và C(3; 5), đường cao nét đứt từ A vuông góc với BC tại H
point A 1,1 below-left
point B 5,1 below-right
point C 3,5 above
point H 4.2,2.6 right
polygon A B C
segment A H dashed
right A H C
:::

:::example Đường cao và diện tích
Tam giác $ABC$ có $A(1; 1)$, $B(5; 1)$ và $C(3; 5)$. Tính độ dài đường cao kẻ từ $A$ và diện tích tam giác.

**Lời giải.** Viết phương trình $BC$, rồi tính khoảng cách từ $A$ đến $BC$. Ta có $\overrightarrow{BC}=(-2; 4)$, nên $BC$ có vectơ pháp tuyến $(2; 1)$:

$$BC: 2(x-5)+(y-1)=0\iff 2x+y-11=0.$$

$$h_A=\frac{|2\cdot1+1-11|}{\sqrt{2^2+1^2}}=\frac{8}{\sqrt5},\qquad BC=\sqrt{(-2)^2+4^2}=2\sqrt5.$$

$$S=\frac12\cdot BC\cdot h_A=\frac12\cdot 2\sqrt5\cdot\frac{8}{\sqrt5}=8.$$

Vậy đường cao kẻ từ $A$ dài $\dfrac{8}{\sqrt5}$ và diện tích tam giác bằng $8$.

**Kiểm tra.** Lấy đáy $AB=4$ (nằm ngang) và chiều cao từ $C$ là $5-1=4$: $S=\dfrac12\cdot4\cdot4=8$.
:::

:::warning Những sai lầm thường gặp
- **Quên giá trị tuyệt đối.** Sai: $\cos\varphi=\dfrac{\vec{n}_1\cdot\vec{n}_2}{|\vec{n}_1||\vec{n}_2|}$ có thể âm, rồi kết luận góc tù. Lí do sai: góc giữa hai đường thẳng không vượt quá $90^\circ$. Đúng: lấy $|\vec{n}_1\cdot\vec{n}_2|$ ở tử.
- **Không xét hệ số tự do.** Sai: "$2x-4y+6=0$ và $x-2y+3=0$ có vectơ pháp tuyến cùng phương nên song song". Lí do sai: còn trường hợp trùng nhau. Đúng: $\frac{6}{3}=2$ cũng bằng tỉ số kia, nên hai đường trùng nhau.
- **Dùng $\dfrac{|c_1-c_2|}{\sqrt{a^2+b^2}}$ khi hệ số chưa giống nhau.** Sai: khoảng cách giữa $3x+4y-2=0$ và $6x+8y+16=0$ là $\dfrac{|-2-16|}{5}=3{,}6$. Lí do sai: hai phương trình phải có cùng $a$, $b$. Đúng: chia phương trình thứ hai cho $2$, được khoảng cách $2$.
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

- So sánh $\vec{n}_1$, $\vec{n}_2$: không cùng phương thì cắt nhau; cùng phương thì song song hoặc trùng nhau (xét thêm $c$).
- Góc: $\cos\varphi=\dfrac{|a_1a_2+b_1b_2|}{\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}$, $0^\circ\le\varphi\le 90^\circ$.
- Vuông góc $\iff a_1a_2+b_1b_2=0$.
- Khoảng cách: $d(M_0, \Delta)=\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$.
- Hai đường song song: đưa về cùng $a$, $b$ rồi dùng $\dfrac{|c_1-c_2|}{\sqrt{a^2+b^2}}$.
- Diện tích tam giác $=\dfrac12\cdot$ cạnh $\cdot$ khoảng cách từ đỉnh đối diện.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Xác định vị trí tương đối của hai đường thẳng $x-3y+2=0$ và $-2x+6y-4=0$.

::hint
**Kiến thức:** nếu $\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}$ thì hai đường thẳng trùng nhau; nếu chỉ hai tỉ số đầu bằng nhau thì song song.

**Gợi ý các bước:**
1. Tính ba tỉ số $\frac{a_1}{a_2}$, $\frac{b_1}{b_2}$, $\frac{c_1}{c_2}$.
2. So sánh và kết luận.

::solution
$\dfrac{1}{-2}=\dfrac{-3}{6}=\dfrac{2}{-4}=-\dfrac12$. Ba tỉ số bằng nhau, nên hai phương trình tỉ lệ.

**Đáp số.** Hai đường thẳng trùng nhau.
:::

:::exercise
Tìm giao điểm của hai đường thẳng $3x+2y-6=0$ và $x-y+2=0$.

::hint
**Kiến thức:** giao điểm là nghiệm của hệ gồm hai phương trình.

**Gợi ý các bước:**
1. Từ phương trình thứ hai, rút $x=y-2$.
2. Thế vào phương trình thứ nhất.

::solution
Thế $x=y-2$: $3(y-2)+2y-6=0\iff 5y=12\iff y=\dfrac{12}{5}$, suy ra $x=\dfrac{12}{5}-2=\dfrac25$.

**Đáp số.** $\left(\dfrac25; \dfrac{12}{5}\right)$.
:::

:::exercise
Tính góc giữa hai đường thẳng $x+y=0$ và $x+3y-2=0$ (đơn vị: độ, làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** $\cos\varphi=\dfrac{|a_1a_2+b_1b_2|}{\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}$.

**Gợi ý các bước:**
1. Đọc $\vec{n}_1=(1; 1)$, $\vec{n}_2=(1; 3)$.
2. Tính $\cos\varphi$, rồi dùng máy tính để tìm $\varphi$.

::solution
$\cos\varphi=\dfrac{|1+3|}{\sqrt2\cdot\sqrt{10}}=\dfrac{4}{\sqrt{20}}=\dfrac{2}{\sqrt5}$, nên $\varphi\approx 26{,}57^\circ$.

**Đáp số.** $26{,}57$.
:::

:::exercise
Tìm khoảng cách từ gốc toạ độ đến đường thẳng $5x+12y-26=0$.

::hint
**Kiến thức:** $d(M_0, \Delta)=\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$.

**Gợi ý các bước:**
1. Thay $x_0=y_0=0$.
2. Tính $\sqrt{5^2+12^2}$.

::solution
$d=\dfrac{|0+0-26|}{\sqrt{25+144}}=\dfrac{26}{13}=2$.

**Đáp số.** $2$.
:::

:::exercise
Tìm khoảng cách giữa hai đường thẳng song song $2x-y+1=0$ và $2x-y-4=0$.

::hint
**Kiến thức:** với $ax+by+c_1=0$ và $ax+by+c_2=0$, khoảng cách là $\dfrac{|c_1-c_2|}{\sqrt{a^2+b^2}}$.

**Gợi ý các bước:**
1. Kiểm tra hai phương trình có cùng $a$, $b$.
2. Thay vào công thức.

::solution
Hai phương trình có cùng $a=2$, $b=-1$. $d=\dfrac{|1-(-4)|}{\sqrt{4+1}}=\dfrac{5}{\sqrt5}=\sqrt5$.

**Đáp số.** $\sqrt5$.
:::

:::exercise
Cho hai đường thẳng $d_1: 3x-4y+5=0$, $d_2: 4x+3y-10=0$ và điểm $A(2; -1)$. Mỗi khẳng định sau đúng hay sai?

a) $d_1$ vuông góc với $d_2$.

b) $d_1$ và $d_2$ cắt nhau tại điểm $(1; 2)$.

c) Khoảng cách từ $A$ đến $d_1$ bằng $2$.

d) Khoảng cách từ $A$ đến $d_2$ bằng $1$.

::hint
**Kiến thức:** vuông góc khi $a_1a_2+b_1b_2=0$; công thức khoảng cách từ một điểm đến đường thẳng.

**Gợi ý các bước:**
1. Tính tích vô hướng của hai vectơ pháp tuyến.
2. Thay $(1; 2)$ vào cả hai phương trình.
3. Tính hai khoảng cách từ $A$.

::solution
a) **Đúng**: $3\cdot4+(-4)\cdot3=0$.

b) **Đúng**: $3-8+5=0$ và $4+6-10=0$.

c) **Sai**: $d(A, d_1)=\dfrac{|6+4+5|}{5}=3$.

d) **Đúng**: $d(A, d_2)=\dfrac{|8-3-10|}{5}=1$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Trên bản vẽ (đơn vị: chục mét), một mảnh đất hình tam giác có các đỉnh $A(1; 1)$, $B(5; 4)$, $C(2; 5)$. Viết phương trình đường thẳng $AB$, tính khoảng cách từ $C$ đến $AB$ và diện tích thực của mảnh đất (m²).

::hint
**Kiến thức:** $S=\dfrac12\cdot AB\cdot d(C, AB)$; $1$ đơn vị dài trên bản vẽ là $10$ m, nên $1$ đơn vị diện tích là $100$ m².

**Gợi ý các bước:**
1. $\overrightarrow{AB}=(4; 3)$, suy ra vectơ pháp tuyến và phương trình $AB$.
2. Tính $d(C, AB)$ và $AB$.
3. Tính diện tích trên bản vẽ, rồi nhân với $100$.

::solution
$\vec{n}=(3; -4)$: $AB: 3(x-1)-4(y-1)=0\iff 3x-4y+1=0$. $d(C, AB)=\dfrac{|6-20+1|}{5}=2{,}6$, $AB=\sqrt{16+9}=5$. Diện tích trên bản vẽ $\dfrac12\cdot5\cdot2{,}6=6{,}5$, diện tích thực $6{,}5\cdot100=650$ m².

**Đáp số.** $3x-4y+1=0$; $2{,}6$; $650$ m².
:::

:::exercise
Một ngọn hải đăng ở điểm $M(3; 4)$ trên hải đồ (đơn vị: km), ánh sáng của nó nhìn thấy được trong bán kính $6$ km. Một tàu đi theo đường thẳng $4x+3y-49=0$. Tàu có đi vào vùng nhìn thấy ánh sáng không?

::hint
**Kiến thức:** điểm gần hải đăng nhất trên đường đi cách hải đăng một khoảng bằng $d(M, \Delta)$.

**Gợi ý các bước:**
1. Tính khoảng cách từ $M$ đến đường đi.
2. So sánh với $6$ km.

::solution
$d(M, \Delta)=\dfrac{|12+12-49|}{\sqrt{16+9}}=\dfrac{25}{5}=5$ km. Vì $5<6$ nên tàu đi vào vùng nhìn thấy ánh sáng.

**Đáp số.** Có; khoảng cách gần nhất là $5$ km.
:::

:::exercise Thử thách
Tính khoảng cách từ $A(1; 1)$ đến đường thẳng đi qua $B(2; -1)$ và có vectơ chỉ phương $\vec{u}=(3; 4)$.

::hint
**Kiến thức:** [phương trình đường thẳng](lesson:equation-of-a-line): $\vec{u}=(a; b)$ thì $\vec{n}=(b; -a)$.

**Gợi ý các bước:**
1. Viết phương trình tổng quát của đường thẳng.
2. Dùng công thức khoảng cách.

::solution
$\vec{n}=(4; -3)$: $4(x-2)-3(y+1)=0\iff 4x-3y-11=0$. Khoảng cách từ $A$: $\dfrac{|4-3-11|}{5}=\dfrac{10}{5}=2$.

**Đáp số.** $2$.
:::

:::exercise Ôn tập
Cho tam giác $ABC$ với $A(0; 0)$, $B(4; 0)$, $C(-2; 3)$.

a) Dùng [tích vô hướng](lesson:dot-product), tính góc $\widehat{BAC}$ (làm tròn đến hàng phần trăm của độ).

b) Tính góc giữa hai đường thẳng $AB$ và $AC$. Vì sao kết quả khác câu a)?

::hint
**Kiến thức:** $\cos\widehat{BAC}=\dfrac{\overrightarrow{AB}\cdot\overrightarrow{AC}}{AB\cdot AC}$ (không có giá trị tuyệt đối); góc giữa hai đường thẳng luôn không quá $90^\circ$.

**Gợi ý các bước:**
1. Tính $\overrightarrow{AB}$, $\overrightarrow{AC}$ và tích vô hướng.
2. Góc giữa hai đường thẳng bằng $\widehat{BAC}$ nếu góc đó không tù, bằng $180^\circ-\widehat{BAC}$ nếu góc đó tù.

::solution
a) $\overrightarrow{AB}=(4; 0)$, $\overrightarrow{AC}=(-2; 3)$, $\cos\widehat{BAC}=\dfrac{-8}{4\sqrt{13}}=-\dfrac{2}{\sqrt{13}}$, nên $\widehat{BAC}\approx 123{,}69^\circ$.

b) Góc $\widehat{BAC}$ tù, nên góc giữa hai đường thẳng là $180^\circ-123{,}69^\circ=56{,}31^\circ$ (cũng là góc có $\cos\varphi=\dfrac{2}{\sqrt{13}}$).

**Đáp số.** a) $\approx 123{,}69^\circ$; b) $\approx 56{,}31^\circ$.
:::

## Kiểm tra mini

:::quiz
::mc
Vị trí tương đối của hai đường thẳng $x-2y+1=0$ và $-2x+4y-2=0$ là
A. cắt nhau.
B. song song.
C. trùng nhau.
D. vuông góc.
::key C
$\dfrac{1}{-2}=\dfrac{-2}{4}=\dfrac{1}{-2}$: cả ba tỉ số bằng nhau nên hai phương trình tỉ lệ, hai đường thẳng trùng nhau. Chọn B là quên so sánh hệ số tự do.

::mc
Khoảng cách từ điểm $M(1; -2)$ đến đường thẳng $3x-4y+4=0$ là
A. $3$.
B. $15$.
C. $\dfrac15$.
D. $\dfrac{11}{5}$.
::key A
$d=\dfrac{|3\cdot1-4\cdot(-2)+4|}{\sqrt{3^2+4^2}}=\dfrac{15}{5}=3$. Phương án B quên chia cho $5$; C thay nhầm $y=2$; D quên hệ số tự do $4$.

::mc
Góc giữa hai đường thẳng $x-2=0$ và $-x+y+3=0$ là
A. $135^\circ$.
B. $45^\circ$.
C. $90^\circ$.
D. $30^\circ$.
::key B
$\vec{n}_1=(1; 0)$, $\vec{n}_2=(-1; 1)$: $\cos\varphi=\dfrac{|-1|}{1\cdot\sqrt2}=\dfrac{1}{\sqrt2}$, nên $\varphi=45^\circ$. Bỏ dấu giá trị tuyệt đối thì ra $135^\circ$, nhưng góc giữa hai đường thẳng không vượt quá $90^\circ$.

::mc
Đường thẳng nào sau đây vuông góc với đường thẳng $2x+3y-1=0$?
A. $2x+3y+5=0$.
B. $3x+2y=0$.
C. $2x-3y+1=0$.
D. $3x-2y+5=0$.
::key D
Hai đường thẳng vuông góc khi $a_1a_2+b_1b_2=0$: $2\cdot3+3\cdot(-2)=0$. Phương án A song song; B đổi chỗ hệ số mà quên đổi dấu ($6+6\ne0$).

::tf
Cho hai đường thẳng $d_1: x+2y-4=0$, $d_2: 2x-y-3=0$ và điểm $A(3; 4)$.
a) $d_1$ vuông góc với $d_2$.
b) $d_1$ và $d_2$ cắt nhau tại điểm $(1; 2)$.
c) Khoảng cách từ $A$ đến $d_1$ bằng $7$.
d) Khoảng cách từ $A$ đến $d_2$ bằng $\dfrac{\sqrt5}{5}$.
::key Đ S S Đ
a) Đúng: $1\cdot2+2\cdot(-1)=0$. b) Sai: $1+4-4=1\ne0$, nên $(1; 2)$ không thuộc $d_1$ (giao điểm là $(2; 1)$). c) Sai: $d=\dfrac{|3+8-4|}{\sqrt5}=\dfrac{7}{\sqrt5}$; $7$ là kết quả khi quên chia cho $\sqrt5$. d) Đúng: $d=\dfrac{|6-4-3|}{\sqrt5}=\dfrac{1}{\sqrt5}=\dfrac{\sqrt5}{5}$.

::sa
Tính khoảng cách giữa hai đường thẳng song song $3x+4y-5=0$ và $6x+8y+15=0$.
::key 2,5
Chia phương trình thứ hai cho $2$: $3x+4y+7{,}5=0$. Khi đó $d=\dfrac{|-5-7{,}5|}{\sqrt{3^2+4^2}}=\dfrac{12{,}5}{5}=2{,}5$.

::sa
Tam giác $ABC$ có $A(1; 2)$, $B(4; -2)$, $C(5; 3)$. Tính diện tích tam giác $ABC$.
::key 9,5
$\overrightarrow{AB}=(3; -4)$ nên $AB=5$ và đường thẳng $AB$ có vectơ pháp tuyến $(4; 3)$: $4x+3y-10=0$. Khoảng cách từ $C$ đến $AB$ là $\dfrac{|20+9-10|}{5}=\dfrac{19}{5}$, nên $S=\dfrac12\cdot5\cdot\dfrac{19}{5}=9{,}5$.
:::
