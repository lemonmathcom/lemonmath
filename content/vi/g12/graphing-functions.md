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

Dù chấm bao nhiêu điểm, ta cũng không chắc chắn được giữa hai điểm liền nhau đồ thị làm gì. Khảo sát hàm số cho ta sự chắc chắn đó: nó tổng hợp mọi điều đã học về đạo hàm, cực trị và tiệm cận thành một bức tranh đầy đủ về hình dạng của đồ thị.

## Sơ đồ khảo sát hàm số

### Khám phá: đạo hàm cho biết hình dạng

Đạo hàm $y'=3x^2-3=3(x-1)(x+1)$ chỉ bằng $0$ tại $x=-1$ và $x=1$. Vậy đồ thị chỉ có thể "quay đầu" tại hai điểm đó: đi lên trên $(-\infty; -1)$, đi xuống trên $(-1; 1)$, đi lên trên $(1; +\infty)$. Giữa các điểm Lan chấm không còn chỗ nhô nào khác.

Như vậy chỉ cần vài điểm và bảng biến thiên là ta vẽ được đồ thị đúng hình dạng. Đó là ý tưởng của sơ đồ khảo sát.

**Hiểu sâu hơn.** Mỗi bước của sơ đồ trả lời một câu hỏi về hình dạng: tập xác định cho biết đồ thị có bị "đứt" không; dấu của $y'$ cho biết đồ thị đi lên hay đi xuống; giới hạn và tiệm cận cho biết đồ thị đi về đâu khi ở rất xa; giao điểm với các trục giúp đặt đồ thị đúng vị trí.

**Kết nối.** Sơ đồ này gom lại ba bài trước (tính đơn điệu và cực trị, giá trị lớn nhất và nhỏ nhất, tiệm cận). Đồ thị vẽ được lại dùng ngay để tìm số nghiệm của phương trình và để mô tả các đại lượng thực tế.

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

**Lời giải.** Tập xác định: $\mathbb{R}$. Ta có

$$y'=3(x-1)(x+1)=0\iff x=\pm1;\qquad \lim_{x\to+\infty}y=+\infty,\quad \lim_{x\to-\infty}y=-\infty.$$

Thay $x=\pm1$ vào hàm số, ta được $y(-1)=3$, $y(1)=-1$. Bảng biến thiên:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $y'$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $3$ | $\searrow$ | $-1$ | $\nearrow$ | $+\infty$ |

Hàm số đồng biến trên $(-\infty; -1)$ và $(1; +\infty)$, nghịch biến trên $(-1; 1)$; cực đại $(-1; 3)$, cực tiểu $(1; -1)$. Đồ thị cắt trục tung tại $(0; 1)$.

Số nghiệm của phương trình bằng số giao điểm của đồ thị với trục hoành. Trên mỗi khoảng $(-\infty; -1)$, $(-1; 1)$, $(1; +\infty)$ hàm số đơn điệu và $y$ đổi dấu đúng một lần (từ $-\infty$ lên $3$, từ $3$ xuống $-1$, từ $-1$ lên $+\infty$).

Vậy phương trình $x^3-3x+1=0$ có đúng $3$ nghiệm (gần đúng $-1{,}88$; $0{,}35$; $1{,}53$).

**Nhìn lại.** Có cách nào biết phương trình bậc ba có ba nghiệm mà không cần vẽ? Ta thấy $y_{\text{CĐ}}\cdot y_{\text{CT}}=3\cdot(-1)<0$: hai điểm cực trị nằm về hai phía của trục hoành nên đồ thị phải cắt trục hoành ba lần. Nếu tích này dương thì phương trình chỉ có một nghiệm.
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

**Lời giải.** Tập xác định: $\mathbb{R}$. Ta có

$$y'=-3x^2+6x-3=-3(x-1)^2\le0,\qquad y'=0\iff x=1.$$

Ta có $\lim\limits_{x\to+\infty}y=-\infty$, $\lim\limits_{x\to-\infty}y=+\infty$. Vì $y'\le0$ và $y'$ chỉ bằng $0$ tại một điểm nên hàm số nghịch biến trên $\mathbb{R}$, không có cực trị. Ta có $y''=-6x+6=0\iff x=1$, $y(1)=1$, suy ra tâm đối xứng là $I(1; 1)$, tại đó tiếp tuyến nằm ngang.

Giao điểm với các trục: $y(0)=2$; và $-x^3+3x^2-3x+2=-(x-2)(x^2-x+1)=0\iff x=2$ (vì $x^2-x+1$ có $\Delta=-3<0$).

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

**Lời giải.** Tập xác định: $D=\mathbb{R}\setminus\{1\}$. Áp dụng công thức $\left(\dfrac{ax+b}{cx+d}\right)'=\dfrac{ad-bc}{(cx+d)^2}$, ta có

$$y'=\frac{1\cdot(-1)-1\cdot1}{(x-1)^2}=\frac{-2}{(x-1)^2}<0\quad\text{với mọi } x\in D.$$

Vì $\lim\limits_{x\to\pm\infty}y=1$ nên $y=1$ là tiệm cận ngang; vì $\lim\limits_{x\to1^+}y=+\infty$, $\lim\limits_{x\to1^-}y=-\infty$ nên $x=1$ là tiệm cận đứng. Bảng biến thiên:

| $x$ | $-\infty$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y'$ | | $-$ | $\Vert$ | $-$ | |
| $y$ | $1$ | $\searrow$ | $-\infty\ \Vert\ +\infty$ | $\searrow$ | $1$ |

Đồ thị cắt các trục toạ độ tại $(-1; 0)$ và $(0; -1)$.

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

**Lời giải.** Tập xác định: $D=\mathbb{R}\setminus\{1\}$. Ta có $x^2-2x+2=(x-1)(x-1)+1$ nên

$$y=x-1+\frac{1}{x-1},\qquad y'=1-\frac{1}{(x-1)^2}=\frac{x(x-2)}{(x-1)^2}.$$

Ta có $y'=0\iff x=0$ hoặc $x=2$; $y(0)=-2$, $y(2)=2$. Đồ thị có tiệm cận đứng $x=1$ (vì $\lim\limits_{x\to1^+}y=+\infty$) và tiệm cận xiên $y=x-1$ (vì $\dfrac{1}{x-1}\to0$). Bảng biến thiên:

| $x$ | $-\infty$ | | $0$ | | $1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $y'$ | | $+$ | $0$ | $-$ | $\Vert$ | $-$ | $0$ | $+$ | |
| $y$ | $-\infty$ | $\nearrow$ | $-2$ | $\searrow$ | $-\infty\ \Vert\ +\infty$ | $\searrow$ | $2$ | $\nearrow$ | $+\infty$ |

Đồ thị cắt trục tung tại $(0; -2)$ và không cắt trục hoành (vì $x^2-2x+2$ có $\Delta'=1-2<0$).

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
Một con đường đi qua vùng đồi (tình huống giả định). Trên mặt cắt dọc, độ cao của đường so với chân đồi tại vị trí cách cột mốc $x$ km là $f(x)=ax^3+bx^2+cx+d$ (chục mét), $-1\le x\le 3$. Đồ thị ở hình trên có điểm cực đại $(0; 4)$ và điểm cực tiểu $(2; 0)$.
a) Tìm $a$, $b$, $c$, $d$.
b) Trên đoạn đường này có bao nhiêu vị trí có độ cao $10$ m, tức là $f(x)=1$? Có bao nhiêu vị trí có độ cao $40$ m?

**Lời giải.** a) Ta có $f'(x)=3ax^2+2bx+c$. Theo đề bài, $f(0)=4$, $f'(0)=0$, $f'(2)=0$, $f(2)=0$. Do đó

$$\begin{aligned} f(0)=4 &\Rightarrow d=4; & f'(0)=0 &\Rightarrow c=0;\\ f'(2)=0 &\Rightarrow 12a+4b=0\Rightarrow b=-3a; & f(2)=0 &\Rightarrow 8a-12a+4=0\Rightarrow a=1. \end{aligned}$$

Suy ra $b=-3$, do đó $f(x)=x^3-3x^2+4$.

b) Vì đường thẳng $y=1$ nằm giữa giá trị cực tiểu $0$ và giá trị cực đại $4$ nên nó cắt đồ thị tại $3$ điểm, cả ba đều thuộc đoạn $[-1; 3]$ (vì $f(-1)=0<1$ và $f(3)=4>1$). Đường thẳng $y=4$ đi qua điểm cực đại (tiếp xúc tại đó) và cắt nhánh bên phải thêm một điểm. Thật vậy, $x^3-3x^2+4=4\iff x^2(x-3)=0$.

Vậy $f(x)=x^3-3x^2+4$; trên đoạn đường có $3$ vị trí cao $10$ m và $2$ vị trí cao $40$ m ($x=0$ và $x=3$).
:::

Cuối cùng, ta nhắc lại cách viết tiếp tuyến đã học ở lớp 11: tiếp tuyến tại $M(x_0; y_0)$ có phương trình $y=f'(x_0)(x-x_0)+y_0$.

:::example Tiếp tuyến của đồ thị phân thức
Viết phương trình tiếp tuyến của đồ thị $y=\dfrac{x+1}{x-1}$ tại điểm có hoành độ $x_0=2$.

**Lời giải.** Theo Ví dụ 3, ta có $y'=\dfrac{-2}{(x-1)^2}$. Do đó

$$y_0=\frac{2+1}{2-1}=3,\qquad y'(2)=\frac{-2}{1^2}=-2.$$

Thay vào phương trình $y=f'(x_0)(x-x_0)+y_0$, ta được $y=-2(x-2)+3$.

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
Tập xác định: $\mathbb{R}$. Ta có $y'=3(x-1)(x+1)$. Hàm số đồng biến trên $(-\infty; -1)$ và $(1; +\infty)$, nghịch biến trên $(-1; 1)$. Điểm cực đại của đồ thị là $(-1; 2)$, điểm cực tiểu là $(1; -2)$. Đồ thị cắt trục hoành tại $x=0$, $x=\pm\sqrt3$ và đối xứng qua $O$ (do $y''=6x=0$ tại $x=0$).

Vậy đồ thị nhận gốc toạ độ $O$ làm tâm đối xứng.

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
Tập xác định: $D=\mathbb{R}\setminus\{-1\}$. Ta có $y'=\dfrac{1\cdot1-(-2)\cdot1}{(x+1)^2}=\dfrac{3}{(x+1)^2}>0$ nên hàm số đồng biến trên từng khoảng $(-\infty; -1)$ và $(-1; +\infty)$. Đồ thị có tiệm cận đứng $x=-1$, tiệm cận ngang $y=1$ và cắt các trục toạ độ tại $(2; 0)$, $(0; -2)$.

Vậy đồ thị nhận giao điểm của hai tiệm cận làm tâm đối xứng.

**Đáp số.** Đồng biến trên từng khoảng xác định; tiệm cận $x=-1$, $y=1$; tâm đối xứng $I(-1; 1)$; đồ thị qua $(2; 0)$ và $(0; -2)$.
:::

:::exercise
Cho hàm số $y=\dfrac{x^2+x+1}{x+1}$. Tìm các cực trị và các tiệm cận của đồ thị hàm số.

::hint
**Kiến thức:** chia đa thức để viết $y=x+\dfrac{1}{x+1}$.

**Gợi ý các bước:**
1. Tính $y'=1-\dfrac{1}{(x+1)^2}$ và quy đồng.
2. Lập bảng biến thiên với các mốc $-2$, $-1$, $0$.

::solution
Ta có $y'=\dfrac{x(x+2)}{(x+1)^2}=0\iff x=0$ hoặc $x=-2$. Ta thấy $y'$ dương trên $(-\infty; -2)$ và $(0; +\infty)$, âm trên $(-2; -1)$ và $(-1; 0)$; $y(-2)=-3$, $y(0)=1$. Đồ thị có tiệm cận đứng $x=-1$ và tiệm cận xiên $y=x$.

Vậy hàm số đạt cực đại tại $x=-2$ và đạt cực tiểu tại $x=0$.

**Đáp số.** Cực đại $(-2; -3)$, cực tiểu $(0; 1)$; tiệm cận đứng $x=-1$, tiệm cận xiên $y=x$.
:::

:::exercise
Dựa vào đồ thị hàm số $y=x^3-3x$ (bài 1), tìm số nghiệm của mỗi phương trình sau: a) $x^3-3x=1$; b) $x^3-3x=-3$.

::hint
**Kiến thức:** số nghiệm của $f(x)=k$ bằng số giao điểm của đồ thị với đường thẳng $y=k$.

**Gợi ý các bước:**
1. So sánh $k$ với giá trị cực đại $2$ và cực tiểu $-2$.
2. Đếm giao điểm.

::solution
a) Vì $-2<1<2$ nên đường thẳng $y=1$ cắt cả ba "đoạn" của đồ thị. Do đó phương trình có $3$ nghiệm. b) Vì $-3<-2$ nên đường thẳng $y=-3$ chỉ cắt nhánh bên trái (nơi $y$ đi từ $-\infty$ lên $2$). Do đó phương trình có $1$ nghiệm.

Vậy phương trình a) có ba nghiệm, phương trình b) có một nghiệm.

**Đáp số.** a) $3$ nghiệm; b) $1$ nghiệm.
:::

:::exercise
Cho hàm số $y=x^3-6x^2+9x-2$. Xét tính đúng sai của các mệnh đề sau:

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
Ta có $y'=3(x-1)(x-3)$; $y(1)=2$ (cực đại), $y(3)=-2$ (cực tiểu).

a) **Đúng**. Ta có $y(0)=-2$.

b) **Đúng**. Vì $y'$ đổi dấu $+\to-$ tại $x=1$ và $y(1)=2$ nên $(1; 2)$ là điểm cực đại của đồ thị.

c) **Sai**. Vì $-2<0<2$ nên đường thẳng $y=0$ cắt đồ thị tại $3$ điểm (các nghiệm là $2$ và $2\pm\sqrt3$).

d) **Đúng**. Ta có $y''=6x-12=0\iff x=2$ và $y(2)=8-24+18-2=0$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Tiếp tuyến của đồ thị hàm số $y=x^3-3x^2+4$ tại điểm có hoành độ $x_0=3$ cắt trục tung tại điểm có tung độ bằng bao nhiêu?

::hint
**Kiến thức:** tiếp tuyến tại $x_0$: $y=f'(x_0)(x-x_0)+f(x_0)$ (đạo hàm, lớp 11).

**Gợi ý các bước:**
1. Tính $f(3)$ và $f'(3)$.
2. Viết tiếp tuyến rồi cho $x=0$.

::solution
Ta có $f(3)=27-27+4=4$ và $f'(x)=3x^2-6x$ nên $f'(3)=9$. Phương trình tiếp tuyến là $y=9(x-3)+4=9x-23$. Thay $x=0$, ta được $y=-23$.

Vậy tiếp tuyến cắt trục tung tại điểm có tung độ $-23$.

**Đáp số.** $-23$.
:::

:::exercise
Số lượng vi khuẩn trong một mẫu nuôi cấy sau $t$ giờ là $N(t)=\dfrac{500t+100}{t+1}$ (nghìn con), $t\ge0$. Khảo sát hàm số trên $[0; +\infty)$. Tính số vi khuẩn lúc đầu, cho biết số vi khuẩn tăng hay giảm và về lâu dài tiến tới giá trị nào.

::hint
**Kiến thức:** dấu của $N'(t)$ cho biết tăng hay giảm; tiệm cận ngang cho biết giá trị về lâu dài.

**Gợi ý các bước:**
1. Tính $N(0)$ và $N'(t)$.
2. Tính $\lim\limits_{t\to+\infty}N(t)$.

::solution
Ta có $N(0)=100$ và $N'(t)=\dfrac{500(t+1)-(500t+100)}{(t+1)^2}=\dfrac{400}{(t+1)^2}>0$ nên $N$ đồng biến trên $[0; +\infty)$. Ta có $\lim\limits_{t\to+\infty}N(t)=500$ nên đồ thị có tiệm cận ngang $N=500$.

Vậy số vi khuẩn luôn tăng và tiến gần $500$ nghìn con.

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
Đồ thị có tiệm cận đứng $x=-c=1$ nên $c=-1$; tiệm cận ngang $y=a=2$. Thay toạ độ điểm $(0; -1)$ vào, ta được $\dfrac{b}{-1}=-1$, suy ra $b=1$.

Vậy hàm số là $y=\dfrac{2x+1}{x-1}$ (thoả mãn $ad-bc=2\cdot(-1)-1\cdot1=-3\neq0$).

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
Phương trình hoành độ giao điểm (với $x\neq1$): $x+1=(x-1)^2\iff x^2-3x=0\iff x=0$ hoặc $x=3$ (thoả mãn điều kiện). Thay vào $y=x-1$, ta được $y=0-1=-1$ và $y=3-1=2$.

Vậy có hai giao điểm.

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
Vì tiếp tuyến song song với $y=-2x$ nên $y'(x_0)=-2$, tức là $(x_0-1)^2=1\iff x_0=0$ hoặc $x_0=2$. Với $x_0=0$, ta có $y_0=-1$, tiếp tuyến là $y=-2x-1$. Với $x_0=2$, ta có $y_0=3$, tiếp tuyến là $y=-2(x-2)+3=-2x+7$. Cả hai đường thẳng đều khác $y=-2x$.

Vậy có hai tiếp tuyến thoả mãn đề bài.

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
Ta có $y''=6x-6=0\iff x=1$ và $y(1)=0$. Phương án B là giao điểm với trục tung, phương án A là điểm cực tiểu của đồ thị.

::mc
Đồ thị của hàm số nào dưới đây có tiệm cận đứng $x=2$ và tiệm cận ngang $y=-1$?
A. $y=\dfrac{-x+1}{x-2}$.
B. $y=\dfrac{x+1}{x-2}$.
C. $y=\dfrac{-x+1}{x+2}$.
D. $y=\dfrac{2x+1}{-x+1}$.
::key A
Đồ thị hàm số $y=\dfrac{ax+b}{cx+d}$ có tiệm cận đứng $x=-\dfrac dc$ và tiệm cận ngang $y=\dfrac ac$; với hàm số A, ta được $x=2$ và $y=-1$. Phương án C nhầm dấu của $-\dfrac dc$, phương án D đổi vai trò hai hệ số.

::mc
Cho hàm số $y=f(x)$ liên tục trên $\mathbb{R}$, đồng biến trên các khoảng $(-\infty; -1)$ và $(3; +\infty)$, nghịch biến trên khoảng $(-1; 3)$, có $f(-1)=4$, $f(3)=-2$, $\lim\limits_{x\to-\infty}f(x)=-\infty$ và $\lim\limits_{x\to+\infty}f(x)=+\infty$. Phương trình $f(x)+2=0$ có bao nhiêu nghiệm?
A. $1$.
B. $2$.
C. $3$.
D. $0$.
::key B
Ta có $f(x)+2=0\iff f(x)=-2$. Đường thẳng $y=-2$ cắt nhánh bên trái một lần và chỉ chạm đồ thị tại điểm cực tiểu $(3; -2)$ nên phương trình có $2$ nghiệm. Phương án C đếm như khi $-2$ nằm giữa hai giá trị cực trị.

::mc
Hệ số góc của tiếp tuyến của đồ thị hàm số $y=\dfrac{2x-1}{x+1}$ tại điểm có hoành độ $x_0=0$ bằng
A. $1$.
B. $-1$.
C. $-3$.
D. $3$.
::key D
Ta có $y'=\dfrac{2\cdot1-(-1)\cdot1}{(x+1)^2}=\dfrac{3}{(x+1)^2}$ nên $y'(0)=3$. Phương án B là tung độ $y(0)$, phương án C tính nhầm $bc-ad$.

::tf
Giả sử mực nước (so với vạch mốc) của một kênh tưới sau $x$ giờ kể từ lúc mở cống được mô hình hoá bởi $f(x)=-x^3+6x^2-9x+3$ (dm), $0\le x\le 4$. Xét tính đúng sai của các mệnh đề sau:
a) Mực nước đạt cực tiểu tại thời điểm $x=1$.
b) Trong khoảng thời gian từ $x=1$ đến $x=3$, mực nước dâng nhanh nhất tại thời điểm $x=2$.
c) Có ba thời điểm khác nhau mà mực nước bằng $3$ dm.
d) Tại thời điểm $x=2$, mực nước dâng với tốc độ $3$ dm/giờ.
::key Đ Đ S Đ
a) Đúng: ta có $f'(x)=-3(x-1)(x-3)$ đổi dấu từ $-$ sang $+$ tại $x=1$. b) Đúng: tốc độ dâng là $f'(x)$, với $f'(x)>0$ trên $(1; 3)$ và $f''(x)=-6x+12$ đổi dấu từ $+$ sang $-$ tại $x=2$ nên $f'$ lớn nhất tại $x=2$. c) Sai: $f(3)=3$ là giá trị cực đại và $f(x)=3\iff -x(x-3)^2=0$, phương trình chỉ có $2$ nghiệm $x=0$, $x=3$ trên đoạn $[0; 4]$. d) Đúng: ta có $f'(2)=-3\cdot1\cdot(-1)=3$.

::sa
Gọi $A$, $B$ là hai điểm cực trị của đồ thị hàm số $y=x^3-3x^2-9x+1$ và $O$ là gốc toạ độ. Tính diện tích tam giác $OAB$.
::key 4
Ta có $y'=3(x+1)(x-3)$ nên $A(-1; 6)$, $B(3; -26)$. Vậy diện tích tam giác $OAB$ là $\dfrac12\left|(-1)\cdot(-26)-3\cdot6\right|=\dfrac12\cdot8=4$.

::sa
Tiếp tuyến của đồ thị hàm số $y=\dfrac{x+2}{x-1}$ tại điểm có hoành độ $x_0=3$ cắt trục hoành tại điểm có hoành độ bằng bao nhiêu (làm tròn kết quả đến hàng phần mười)?
::key 6,3
Ta có $y(3)=\dfrac52$ và $y'=\dfrac{-3}{(x-1)^2}$ nên $y'(3)=-\dfrac34$. Tiếp tuyến là $y=-\dfrac34(x-3)+\dfrac52$. Cho $y=0$, ta được $x=\dfrac{19}{3}\approx6{,}33$. Vậy hoành độ cần tìm làm tròn là $6{,}3$.
:::
