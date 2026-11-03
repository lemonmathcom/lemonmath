---
title: Khảo sát và vẽ đồ thị hàm số
description: Áp dụng sơ đồ khảo sát cho hàm bậc ba và hai loại hàm phân thức, đọc đồ thị, đếm số nghiệm của phương trình và viết tiếp tuyến.
minutes: 25
---

:::goals
- Thực hiện sơ đồ khảo sát: tập xác định, giới hạn và tiệm cận, bảng biến thiên, cực trị, giao điểm với các trục, đồ thị.
- Khảo sát và vẽ đồ thị hàm bậc ba, $y=\dfrac{ax+b}{cx+d}$ và $y=\dfrac{ax^2+bx+c}{mx+n}$.
- Đọc các đặc điểm của hàm số từ đồ thị và dùng đồ thị để đếm số nghiệm của phương trình.
- Viết tiếp tuyến của đồ thị tại một điểm.
:::

Bạn Lan muốn vẽ đồ thị $y=x^3-3x+1$ bằng tay. Lan chấm năm điểm:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $y$ | $-1$ | $3$ | $1$ | $-1$ | $3$ |

rồi nối lại. Nhưng biết đâu giữa hai điểm chấm, đồ thị còn có một chỗ "nhô" lên mà Lan không thấy? Và phương trình $x^3-3x+1=0$ có bao nhiêu nghiệm?

## Sơ đồ khảo sát hàm số

### Khám phá: đạo hàm cho biết hình dạng

Đạo hàm $y'=3x^2-3=3(x-1)(x+1)$ chỉ bằng $0$ tại $x=-1$ và $x=1$. Vậy đồ thị chỉ có thể "quay đầu" tại hai điểm đó: đi lên trên $(-\infty; -1)$, đi xuống trên $(-1; 1)$, đi lên trên $(1; +\infty)$. Giữa các điểm Lan chấm không còn chỗ nhô nào khác.

Như vậy chỉ cần vài điểm và bảng biến thiên là ta vẽ được đồ thị đúng hình dạng. Đó là ý tưởng của sơ đồ khảo sát.

:::note Sơ đồ khảo sát và vẽ đồ thị hàm số
1. **Tập xác định** của hàm số.
2. **Sự biến thiên:**
   - tính $y'$, tìm các điểm $y'=0$ hoặc $y'$ không xác định;
   - tìm giới hạn tại vô cực, giới hạn vô cực và các tiệm cận (nếu có);
   - lập bảng biến thiên; kết luận khoảng đơn điệu và cực trị.
3. **Đồ thị:** tìm giao điểm với các trục toạ độ, vài điểm đặc biệt, nhận xét tính đối xứng, rồi vẽ.
:::

## Hàm số bậc ba

:::example Khảo sát $y=x^3-3x+1$
Khảo sát và vẽ đồ thị hàm số $y=x^3-3x+1$. Phương trình $x^3-3x+1=0$ có bao nhiêu nghiệm?

**Lời giải.** Tập xác định $\mathbb{R}$. Ta tính đạo hàm và các giới hạn tại vô cực:

$$y'=3(x-1)(x+1)=0\iff x=\pm1;\qquad \lim_{x\to+\infty}y=+\infty,\quad \lim_{x\to-\infty}y=-\infty.$$

Thay $x=\pm1$: $y(-1)=3$, $y(1)=-1$. Bảng biến thiên:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $y'$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $3$ | $\searrow$ | $-1$ | $\nearrow$ | $+\infty$ |

Hàm số đồng biến trên $(-\infty; -1)$ và $(1; +\infty)$, nghịch biến trên $(-1; 1)$; cực đại $(-1; 3)$, cực tiểu $(1; -1)$. Đồ thị cắt trục tung tại $(0; 1)$.

Để đếm nghiệm, ta xem đồ thị cắt trục hoành mấy lần. Trên mỗi khoảng $(-\infty; -1)$, $(-1; 1)$, $(1; +\infty)$ hàm số đơn điệu và $y$ đổi dấu đúng một lần (từ $-\infty$ lên $3$, từ $3$ xuống $-1$, từ $-1$ lên $+\infty$).

Vậy phương trình $x^3-3x+1=0$ có đúng $3$ nghiệm (gần đúng $-1{,}88$; $0{,}35$; $1{,}53$).
:::

:::graph Đồ thị $y=x^3-3x+1$
alt: Đồ thị bậc ba đi lên đến điểm cực đại (-1; 3), đi xuống qua (0; 1) đến điểm cực tiểu (1; -1), rồi đi lên, cắt trục hoành tại ba điểm
x: -3..3
y: -3..5
plot: x^3 - 3x + 1
point: (-1, 3) "(-1; 3)" above
point: (1, -1) "(1; -1)" below
point: (0, 1) "(0; 1)" right
:::

Điểm $(0; 1)$ là trung điểm của hai điểm cực trị, và đồ thị đối xứng qua điểm này. Mọi đồ thị bậc ba đều có một **tâm đối xứng**: đó là điểm có hoành độ là nghiệm của $y''=0$ (ở đây $y''=6x=0\iff x=0$).

Không phải hàm bậc ba nào cũng có cực trị. Khi $y'$ không đổi dấu, đồ thị đi một chiều.

:::example Hàm bậc ba không có cực trị
Khảo sát và vẽ đồ thị hàm số $y=-x^3+3x^2-3x+2$.

**Lời giải.** Tập xác định $\mathbb{R}$. Đạo hàm là một số âm nhân với một bình phương:

$$y'=-3x^2+6x-3=-3(x-1)^2\le0,\qquad y'=0\iff x=1.$$

Giới hạn: $\lim\limits_{x\to+\infty}y=-\infty$, $\lim\limits_{x\to-\infty}y=+\infty$. Đạo hàm chỉ bằng $0$ tại một điểm nên hàm số nghịch biến trên $\mathbb{R}$, không có cực trị. Ta có $y''=-6x+6=0\iff x=1$, $y(1)=1$: tâm đối xứng $I(1; 1)$, tại đó tiếp tuyến nằm ngang.

Giao với các trục: $y(0)=2$; và $-x^3+3x^2-3x+2=-(x-2)(x^2-x+1)=0\iff x=2$ (vì $x^2-x+1$ có $\Delta=-3<0$).

Vậy hàm số nghịch biến trên $\mathbb{R}$; đồ thị đi qua $(0; 2)$, $I(1; 1)$ và $(2; 0)$.
:::

:::graph Đồ thị $y=-x^3+3x^2-3x+2$
alt: Đồ thị bậc ba luôn đi xuống, đi qua (0; 2), tâm đối xứng I(1; 1) với tiếp tuyến nằm ngang, và cắt trục hoành tại (2; 0)
x: -1..3
y: -2..4
plot: -x^3 + 3x^2 - 3x + 2
point: (0, 2) "(0; 2)" right
point: (1, 1) "I" above-right
point: (2, 0) "(2; 0)" left
:::

## Hàm số phân thức

Với phân thức, bước "giới hạn và tiệm cận" quan trọng hơn: các tiệm cận được vẽ trước bằng nét đứt, rồi ta vẽ các nhánh sát chúng.

:::example Khảo sát $y=\dfrac{x+1}{x-1}$
Khảo sát và vẽ đồ thị hàm số $y=\dfrac{x+1}{x-1}$.

**Lời giải.** Tập xác định $D=\mathbb{R}\setminus\{1\}$. Dùng công thức $\left(\dfrac{ax+b}{cx+d}\right)'=\dfrac{ad-bc}{(cx+d)^2}$:

$$y'=\frac{1\cdot(-1)-1\cdot1}{(x-1)^2}=\frac{-2}{(x-1)^2}<0\quad\text{với mọi } x\in D.$$

Tiệm cận: $\lim\limits_{x\to\pm\infty}y=1$ nên $y=1$ là tiệm cận ngang; $\lim\limits_{x\to1^+}y=+\infty$, $\lim\limits_{x\to1^-}y=-\infty$ nên $x=1$ là tiệm cận đứng.

| $x$ | $-\infty$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y'$ | | $-$ | $\Vert$ | $-$ | |
| $y$ | $1$ | $\searrow$ | $-\infty\ \Vert\ +\infty$ | $\searrow$ | $1$ |

Giao với các trục: $(-1; 0)$ và $(0; -1)$.

Vậy hàm số nghịch biến trên từng khoảng $(-\infty; 1)$ và $(1; +\infty)$, không có cực trị; đồ thị nhận giao điểm $I(1; 1)$ của hai tiệm cận làm tâm đối xứng.
:::

:::graph Đồ thị $y=\dfrac{x+1}{x-1}$
alt: Đồ thị hai nhánh nằm ở góc dưới trái và góc trên phải so với hai tiệm cận nét đứt x bằng 1 và y bằng 1, đi qua (-1; 0) và (0; -1)
x: -6..8
y: -6..8
plot: (x + 1)/(x - 1)
vline: 1 ; dashed
hline: 1 ; dashed
point: (-1, 0) "(-1; 0)" above-left
point: (0, -1) "(0; -1)" below-left
:::

Với $y=\dfrac{ax^2+bx+c}{mx+n}$, ta chia đa thức trước: vừa thấy tiệm cận xiên, vừa tính đạo hàm dễ hơn.

:::example Khảo sát $y=\dfrac{x^2-2x+2}{x-1}$
Khảo sát và vẽ đồ thị hàm số $y=\dfrac{x^2-2x+2}{x-1}$.

**Lời giải.** Tập xác định $D=\mathbb{R}\setminus\{1\}$. Chia đa thức: $x^2-2x+2=(x-1)(x-1)+1$, nên

$$y=x-1+\frac{1}{x-1},\qquad y'=1-\frac{1}{(x-1)^2}=\frac{x(x-2)}{(x-1)^2}.$$

$y'=0\iff x=0$ hoặc $x=2$; $y(0)=-2$, $y(2)=2$. Tiệm cận: đứng $x=1$ (vì $\lim\limits_{x\to1^+}y=+\infty$), xiên $y=x-1$ (vì $\dfrac{1}{x-1}\to0$).

| $x$ | $-\infty$ | | $0$ | | $1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $y'$ | | $+$ | $0$ | $-$ | $\Vert$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $-2$ | $\searrow$ | $-\infty\ \Vert\ +\infty$ | $\searrow$ | $2$ | $\nearrow$ | $+\infty$ |

Đồ thị cắt trục tung tại $(0; -2)$, không cắt trục hoành vì $x^2-2x+2$ có $\Delta'=1-2<0$.

Vậy hàm số có cực đại $(0; -2)$, cực tiểu $(2; 2)$, tiệm cận đứng $x=1$ và tiệm cận xiên $y=x-1$.
:::

:::graph Đồ thị $y=\dfrac{x^2-2x+2}{x-1}$
alt: Đồ thị hai nhánh, nhánh trái có điểm cực đại (0; -2), nhánh phải có điểm cực tiểu (2; 2), cả hai sát tiệm cận đứng nét đứt x bằng 1 và tiệm cận xiên nét đứt y bằng x trừ 1
x: -5..7
y: -8..10
plot: (x^2 - 2x + 2)/(x - 1)
plot: x - 1 ; dashed
vline: 1 ; dashed
point: (0, -2) "(0; -2)" below-left
point: (2, 2) "(2; 2)" above-right
:::

## Đọc đồ thị và ứng dụng

Khi đã có đồ thị, ta đọc được nhiều thông tin mà không cần tính lại, chẳng hạn số nghiệm của phương trình $f(x)=k$ (với $k$ là một số cho trước): đó là số giao điểm của đồ thị với đường thẳng nằm ngang $y=k$.

:::graph Đồ thị của một hàm bậc ba $y=f(x)$ và đường thẳng $y=1$
alt: Đồ thị bậc ba đi qua (-1; 0), có cực đại (0; 4) và cực tiểu (2; 0); đường ngang nét đứt y bằng 1 cắt đồ thị tại ba điểm
x: -2..4
y: -1..6
plot: x^3 - 3x^2 + 4
hline: 1 ; dashed
point: (0, 4) "(0; 4)" above
point: (2, 0) "(2; 0)" below
point: (-1, 0) "(-1; 0)" below-left
:::

:::example Đọc đồ thị
Hình trên là đồ thị của hàm số $f(x)=ax^3+bx^2+cx+d$, có điểm cực đại $(0; 4)$ và điểm cực tiểu $(2; 0)$.
a) Tìm $a$, $b$, $c$, $d$.
b) Phương trình $f(x)=1$ có bao nhiêu nghiệm? Phương trình $f(x)=4$ thì sao?

**Lời giải.** a) Ta dùng bốn dữ kiện: $f(0)=4$, $f'(0)=0$, $f'(2)=0$, $f(2)=0$, với $f'(x)=3ax^2+2bx+c$:

$$\begin{aligned} f(0)=4 &\Rightarrow d=4; & f'(0)=0 &\Rightarrow c=0;\\ f'(2)=0 &\Rightarrow 12a+4b=0\Rightarrow b=-3a; & f(2)=0 &\Rightarrow 8a-12a+4=0\Rightarrow a=1. \end{aligned}$$

Vậy $f(x)=x^3-3x^2+4$ (khi đó $b=-3$).

b) Đường thẳng $y=1$ nằm giữa giá trị cực tiểu $0$ và giá trị cực đại $4$, nên cắt đồ thị tại $3$ điểm. Đường thẳng $y=4$ đi qua điểm cực đại (tiếp xúc tại đó) và cắt nhánh bên phải thêm một điểm: thật vậy $x^3-3x^2+4=4\iff x^2(x-3)=0$.

Vậy $f(x)=x^3-3x^2+4$; phương trình $f(x)=1$ có $3$ nghiệm, phương trình $f(x)=4$ có $2$ nghiệm ($x=0$ và $x=3$).
:::

Cuối cùng, ta nhắc lại cách viết tiếp tuyến đã học ở lớp 11: tiếp tuyến tại $M(x_0; y_0)$ có phương trình $y=f'(x_0)(x-x_0)+y_0$.

:::example Tiếp tuyến của đồ thị phân thức
Viết phương trình tiếp tuyến của đồ thị $y=\dfrac{x+1}{x-1}$ tại điểm có hoành độ $x_0=2$.

**Lời giải.** Ta tính tung độ tiếp điểm và hệ số góc $y'(2)$, với $y'=\dfrac{-2}{(x-1)^2}$ từ Ví dụ 3:

$$y_0=\frac{2+1}{2-1}=3,\qquad y'(2)=\frac{-2}{1^2}=-2.$$

Thay vào $y=f'(x_0)(x-x_0)+y_0$: $y=-2(x-2)+3$.

Vậy tiếp tuyến là $y=-2x+7$.
:::

:::warning Những sai lầm thường gặp
- **Vẽ đồ thị phân thức liền một nét.** Sai: nối hai nhánh của $y=\dfrac{x+1}{x-1}$ qua $x=1$. Lí do sai: hàm số không xác định tại $x=1$, đồ thị bị tiệm cận đứng tách làm hai nhánh. Đúng: vẽ tiệm cận nét đứt trước, mỗi nhánh nằm về một phía.
- **Đếm nghiệm sai khi đường thẳng đi qua điểm cực trị.** Sai: "$f(x)=4$ có $3$ nghiệm vì $4$ nằm trong khoảng giá trị của hàm số". Lí do sai: $y=4$ chỉ tiếp xúc tại điểm cực đại, không cắt hai lần ở đó. Đúng: $2$ nghiệm.
- **Quên chia đa thức nên không thấy tiệm cận xiên.** Sai: "$y=\dfrac{x^2-2x+2}{x-1}$ chỉ có tiệm cận đứng". Lí do sai: $y=x-1+\dfrac{1}{x-1}$. Đúng: còn tiệm cận xiên $y=x-1$.
- **Dùng nhầm $y'(x)$ thay cho $y'(x_0)$ khi viết tiếp tuyến.** Sai: $y=\dfrac{-2}{(x-1)^2}(x-2)+3$. Lí do sai: hệ số góc là một số. Đúng: $y=-2(x-2)+3$.
:::

## Thuật ngữ

:::terms
- khảo sát hàm số | curve sketching (analysing a function)
- sơ đồ khảo sát | curve-sketching procedure
- bảng biến thiên | table of variations
- tâm đối xứng | centre of symmetry
- giao điểm | intersection point
- tiếp tuyến | tangent line
- hệ số góc | gradient
- số nghiệm của phương trình | number of solutions of an equation
:::

## Tóm tắt

- Sơ đồ: tập xác định → $y'$, giới hạn, tiệm cận, bảng biến thiên → giao điểm với các trục, điểm đặc biệt → vẽ.
- Hàm bậc ba: có hai cực trị hoặc không có cực trị; tâm đối xứng là điểm có $y''=0$.
- $y=\dfrac{ax+b}{cx+d}$: luôn đồng biến hoặc luôn nghịch biến trên từng khoảng; hai tiệm cận cắt nhau tại tâm đối xứng.
- $y=\dfrac{ax^2+bx+c}{mx+n}$: chia đa thức để có tiệm cận xiên và đạo hàm gọn.
- Số nghiệm của $f(x)=k$ bằng số giao điểm của đồ thị với đường thẳng $y=k$. Tiếp tuyến tại $x_0$: $y=f'(x_0)(x-x_0)+f(x_0)$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Khảo sát và vẽ đồ thị hàm số $y=x^3-3x$.

::hint
**Kiến thức:** sơ đồ khảo sát; hàm số lẻ có đồ thị đối xứng qua gốc toạ độ.

**Gợi ý các bước:**
1. Tính $y'$, tìm cực trị và lập bảng biến thiên.
2. Tìm giao điểm với trục hoành: $x(x^2-3)=0$.

::solution
$y'=3(x-1)(x+1)$; đồng biến trên $(-\infty; -1)$ và $(1; +\infty)$, nghịch biến trên $(-1; 1)$. Cực đại $(-1; 2)$, cực tiểu $(1; -2)$. Đồ thị cắt trục hoành tại $x=0$, $x=\pm\sqrt3$, và đối xứng qua $O$ (cũng là điểm có $y''=6x=0$).

**Đáp số.** Cực đại $(-1; 2)$, cực tiểu $(1; -2)$; đồ thị qua $(-\sqrt3; 0)$, $O(0; 0)$, $(\sqrt3; 0)$, tâm đối xứng $O$.
:::

:::exercise
Khảo sát và vẽ đồ thị hàm số $y=\dfrac{x-2}{x+1}$.

::hint
**Kiến thức:** $y=\dfrac{ax+b}{cx+d}$ có $y'=\dfrac{ad-bc}{(cx+d)^2}$, tiệm cận đứng $x=-\dfrac dc$, tiệm cận ngang $y=\dfrac ac$.

**Gợi ý các bước:**
1. Tính $y'$ và xét dấu.
2. Tìm hai tiệm cận và giao điểm với các trục.

::solution
$D=\mathbb{R}\setminus\{-1\}$, $y'=\dfrac{1\cdot1-(-2)\cdot1}{(x+1)^2}=\dfrac{3}{(x+1)^2}>0$: đồng biến trên từng khoảng $(-\infty; -1)$ và $(-1; +\infty)$. Tiệm cận đứng $x=-1$, tiệm cận ngang $y=1$. Giao với các trục: $(2; 0)$ và $(0; -2)$.

**Đáp số.** Đồng biến trên từng khoảng xác định; tiệm cận $x=-1$, $y=1$; tâm đối xứng $I(-1; 1)$; đồ thị qua $(2; 0)$ và $(0; -2)$.
:::

:::exercise
Khảo sát hàm số $y=\dfrac{x^2+x+1}{x+1}$: tìm cực trị và các tiệm cận.

::hint
**Kiến thức:** chia đa thức để viết $y=x+\dfrac{1}{x+1}$.

**Gợi ý các bước:**
1. Tính $y'=1-\dfrac{1}{(x+1)^2}$ và quy đồng.
2. Lập bảng biến thiên với các mốc $-2$, $-1$, $0$.

::solution
$y'=\dfrac{x(x+2)}{(x+1)^2}=0\iff x=0$ hoặc $x=-2$. $y'$ dương trên $(-\infty; -2)$ và $(0; +\infty)$, âm trên $(-2; -1)$ và $(-1; 0)$. $y(-2)=-3$, $y(0)=1$. Tiệm cận đứng $x=-1$, tiệm cận xiên $y=x$.

**Đáp số.** Cực đại $(-2; -3)$, cực tiểu $(0; 1)$; tiệm cận đứng $x=-1$, tiệm cận xiên $y=x$.
:::

:::exercise
Dựa vào đồ thị $y=x^3-3x$ (bài 1), cho biết mỗi phương trình sau có bao nhiêu nghiệm: a) $x^3-3x=1$; b) $x^3-3x=-3$.

::hint
**Kiến thức:** số nghiệm của $f(x)=k$ bằng số giao điểm của đồ thị với đường thẳng $y=k$.

**Gợi ý các bước:**
1. So sánh $k$ với giá trị cực đại $2$ và cực tiểu $-2$.
2. Đếm giao điểm.

::solution
a) $-2<1<2$, nên đường thẳng $y=1$ cắt cả ba "đoạn" của đồ thị: $3$ nghiệm. b) $-3<-2$, nên đường thẳng $y=-3$ chỉ cắt nhánh bên trái (nơi $y$ đi từ $-\infty$ lên $2$): $1$ nghiệm.

**Đáp số.** a) $3$ nghiệm; b) $1$ nghiệm.
:::

:::exercise
Cho hàm số $y=x^3-6x^2+9x-2$. Mỗi khẳng định sau đúng hay sai?

a) Đồ thị cắt trục tung tại điểm $(0; -2)$.

b) Điểm cực đại của đồ thị là $(1; 2)$.

c) Phương trình $x^3-6x^2+9x-2=0$ có đúng hai nghiệm.

d) Tâm đối xứng của đồ thị là điểm $(2; 0)$.

::hint
**Kiến thức:** bảng biến thiên của hàm bậc ba; tâm đối xứng có hoành độ là nghiệm của $y''=0$.

**Gợi ý các bước:**
1. Tính $y'$, tìm cực trị.
2. So sánh $0$ với giá trị cực đại và cực tiểu để đếm nghiệm.
3. Giải $y''=0$.

::solution
$y'=3(x-1)(x-3)$; $y(1)=2$ (cực đại), $y(3)=-2$ (cực tiểu).

a) **Đúng**: $y(0)=-2$.

b) **Đúng**: $y'$ đổi dấu $+\to-$ tại $x=1$ và $y(1)=2$.

c) **Sai**: $-2<0<2$ nên đường thẳng $y=0$ cắt đồ thị tại $3$ điểm (các nghiệm là $2$ và $2\pm\sqrt3$).

d) **Đúng**: $y''=6x-12=0\iff x=2$, $y(2)=8-24+18-2=0$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Tiếp tuyến của đồ thị $y=x^3-3x^2+4$ tại điểm có hoành độ $x_0=3$ cắt trục tung tại điểm có tung độ bằng bao nhiêu?

::hint
**Kiến thức:** tiếp tuyến tại $x_0$: $y=f'(x_0)(x-x_0)+f(x_0)$ (đạo hàm, lớp 11).

**Gợi ý các bước:**
1. Tính $f(3)$ và $f'(3)$.
2. Viết tiếp tuyến rồi cho $x=0$.

::solution
$f(3)=27-27+4=4$, $f'(x)=3x^2-6x$ nên $f'(3)=9$. Tiếp tuyến: $y=9(x-3)+4=9x-23$. Với $x=0$: $y=-23$.

**Đáp số.** $-23$.
:::

:::exercise
Số lượng vi khuẩn trong một mẫu nuôi cấy sau $t$ giờ là $N(t)=\dfrac{500t+100}{t+1}$ (nghìn con), $t\ge0$. Khảo sát hàm số trên $[0; +\infty)$ và cho biết: lúc đầu có bao nhiêu vi khuẩn, số vi khuẩn tăng hay giảm, và về lâu dài nó tiến tới đâu?

::hint
**Kiến thức:** dấu của $N'(t)$ cho biết tăng hay giảm; tiệm cận ngang cho biết giá trị về lâu dài.

**Gợi ý các bước:**
1. Tính $N(0)$ và $N'(t)$.
2. Tính $\lim\limits_{t\to+\infty}N(t)$.

::solution
$N(0)=100$. $N'(t)=\dfrac{500(t+1)-(500t+100)}{(t+1)^2}=\dfrac{400}{(t+1)^2}>0$, nên $N$ đồng biến. $\lim\limits_{t\to+\infty}N(t)=500$: tiệm cận ngang $N=500$.

**Đáp số.** Lúc đầu $100$ nghìn con; số vi khuẩn luôn tăng và tiến gần $500$ nghìn con nhưng không vượt quá.
:::

:::exercise
Đồ thị hàm số $y=\dfrac{ax+b}{x+c}$ có tiệm cận đứng $x=1$, tiệm cận ngang $y=2$ và đi qua điểm $(0; -1)$. Tìm $a$, $b$, $c$.

::hint
**Kiến thức:** $y=\dfrac{ax+b}{x+c}$ có tiệm cận đứng $x=-c$ và tiệm cận ngang $y=a$.

**Gợi ý các bước:**
1. Từ hai tiệm cận suy ra $c$ và $a$.
2. Thay điểm $(0; -1)$ để tìm $b$.

::solution
Tiệm cận đứng $x=-c=1$ nên $c=-1$; tiệm cận ngang $y=a=2$. Thay $(0; -1)$: $\dfrac{b}{-1}=-1$, nên $b=1$. Hàm số là $y=\dfrac{2x+1}{x-1}$ (có $ad-bc=2\cdot(-1)-1\cdot1=-3\neq0$).

**Đáp số.** $a=2$, $b=1$, $c=-1$.
:::

:::exercise Ôn tập
Tìm toạ độ giao điểm của đồ thị $y=\dfrac{x+1}{x-1}$ và đường thẳng $y=x-1$.

::hint
**Kiến thức:** hoành độ giao điểm là nghiệm của phương trình $\dfrac{x+1}{x-1}=x-1$ với $x\neq1$; giải phương trình bậc hai (lớp 10).

**Gợi ý các bước:**
1. Nhân hai vế với $x-1$ và đưa về phương trình bậc hai.
2. Kiểm tra điều kiện $x\neq1$, rồi tính tung độ.

::solution
$x+1=(x-1)^2\iff x^2-3x=0\iff x=0$ hoặc $x=3$ (đều khác $1$). Tung độ: $y=0-1=-1$ và $y=3-1=2$.

**Đáp số.** $(0; -1)$ và $(3; 2)$.
:::

:::exercise Thử thách
Viết phương trình các tiếp tuyến của đồ thị $y=\dfrac{x+1}{x-1}$ song song với đường thẳng $y=-2x$.

::hint
**Kiến thức:** hai đường thẳng song song có cùng hệ số góc; hệ số góc của tiếp tuyến tại $x_0$ là $y'(x_0)$.

**Gợi ý các bước:**
1. Giải $y'(x_0)=\dfrac{-2}{(x_0-1)^2}=-2$.
2. Với mỗi nghiệm, tính $y_0$ và viết tiếp tuyến; kiểm tra tiếp tuyến không trùng $y=-2x$.

::solution
$(x_0-1)^2=1\iff x_0=0$ hoặc $x_0=2$. Tại $x_0=0$: $y_0=-1$, tiếp tuyến $y=-2x-1$. Tại $x_0=2$: $y_0=3$, tiếp tuyến $y=-2(x-2)+3=-2x+7$. Cả hai đều khác $y=-2x$.

**Đáp số.** $y=-2x-1$ và $y=-2x+7$.
:::

## Kiểm tra mini

:::quiz
::mc
Tâm đối xứng của đồ thị hàm số $y=x^3-3x^2+2$ là điểm
A. $I(2; -2)$.
B. $I(0; 2)$.
C. $I(1; 0)$.
D. $I(-1; -2)$.
::key C
$y''=6x-6=0\iff x=1$ và $y(1)=0$. Phương án B là giao điểm với trục tung, phương án A là điểm cực tiểu của đồ thị.

::mc
Đồ thị của hàm số nào sau đây có tiệm cận đứng $x=2$ và tiệm cận ngang $y=-1$?
A. $y=\dfrac{-x+1}{x-2}$.
B. $y=\dfrac{x+1}{x-2}$.
C. $y=\dfrac{-x+1}{x+2}$.
D. $y=\dfrac{2x+1}{-x+1}$.
::key A
$y=\dfrac{ax+b}{cx+d}$ có tiệm cận đứng $x=-\dfrac dc$ và tiệm cận ngang $y=\dfrac ac$; với A là $x=2$ và $y=-1$. Phương án C nhầm dấu của $-\dfrac dc$, phương án D đổi vai trò hai hệ số.

::mc
Hàm số $y=f(x)$ liên tục trên $\mathbb{R}$, đồng biến trên các khoảng $(-\infty; -1)$ và $(3; +\infty)$, nghịch biến trên khoảng $(-1; 3)$, có $f(-1)=4$, $f(3)=-2$, $\lim\limits_{x\to-\infty}f(x)=-\infty$ và $\lim\limits_{x\to+\infty}f(x)=+\infty$. Phương trình $f(x)+2=0$ có bao nhiêu nghiệm?
A. $1$.
B. $2$.
C. $3$.
D. $0$.
::key B
$f(x)=-2$: đường thẳng $y=-2$ cắt nhánh bên trái một lần và chỉ chạm đồ thị tại điểm cực tiểu $(3; -2)$, nên có $2$ nghiệm. Phương án C đếm như khi $-2$ nằm giữa hai giá trị cực trị.

::mc
Hệ số góc của tiếp tuyến của đồ thị hàm số $y=\dfrac{2x-1}{x+1}$ tại điểm có hoành độ $x_0=0$ bằng
A. $1$.
B. $-1$.
C. $-3$.
D. $3$.
::key D
$y'=\dfrac{2\cdot1-(-1)\cdot1}{(x+1)^2}=\dfrac{3}{(x+1)^2}$, nên $y'(0)=3$. Phương án B là tung độ $y(0)$, phương án C tính nhầm $bc-ad$.

::tf
Cho hàm số $f(x)=-x^3+6x^2-9x+3$.
a) Hàm số đạt cực tiểu tại $x=1$.
b) Đồ thị hàm số có tâm đối xứng là $I(2; 1)$.
c) Phương trình $f(x)=3$ có ba nghiệm phân biệt.
d) Tiếp tuyến của đồ thị tại điểm $I(2; 1)$ có phương trình $y=3x-5$.
::key Đ Đ S Đ
a) Đúng: $f'(x)=-3(x-1)(x-3)$ đổi dấu từ $-$ sang $+$ tại $x=1$. b) Đúng: $f''(x)=-6x+12=0\iff x=2$, $f(2)=1$. c) Sai: $f(3)=3$ là giá trị cực đại, $f(x)=3\iff -x(x-3)^2=0$ chỉ có $2$ nghiệm $x=0$, $x=3$. d) Đúng: $f'(2)=3$ nên $y=3(x-2)+1=3x-5$.

::sa
Gọi $A$, $B$ là hai điểm cực trị của đồ thị hàm số $y=x^3-3x^2-9x+1$ và $O$ là gốc toạ độ. Tính diện tích tam giác $OAB$.
::key 4
$y'=3(x+1)(x-3)$ nên $A(-1; 6)$, $B(3; -26)$. Diện tích là $\dfrac12\left|(-1)\cdot(-26)-3\cdot6\right|=\dfrac12\cdot8=4$.

::sa
Tiếp tuyến của đồ thị hàm số $y=\dfrac{x+2}{x-1}$ tại điểm có hoành độ $x_0=3$ cắt trục hoành tại điểm có hoành độ bằng bao nhiêu (làm tròn kết quả đến hàng phần mười)?
::key 6,3
$y(3)=\dfrac52$, $y'=\dfrac{-3}{(x-1)^2}$ nên $y'(3)=-\dfrac34$. Tiếp tuyến $y=-\dfrac34(x-3)+\dfrac52$ bằng $0$ khi $x=\dfrac{19}{3}\approx6{,}33$, làm tròn được $6{,}3$.
:::
