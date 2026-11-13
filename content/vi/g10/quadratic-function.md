---
title: Hàm số bậc hai
description: Tìm hiểu hàm số y=ax²+bx+c, parabol, đỉnh và trục đối xứng, bảng biến thiên, giá trị lớn nhất và nhỏ nhất, phép tịnh tiến và các ứng dụng thực tế.
minutes: 30
---

:::goals
- Nhận biết hàm số bậc hai, tìm đỉnh, trục đối xứng và chiều bề lõm của parabol.
- Vẽ phác đồ thị và lập bảng biến thiên.
- Tìm giá trị lớn nhất hoặc nhỏ nhất, và tìm công thức của hàm số từ dữ kiện cho trước.
- Dùng dạng $y=a(x-p)^2+q$ và giải các bài toán về vật ném, diện tích và lợi nhuận.
:::

Một bác nông dân có $40$ m lưới và muốn quây một chuồng gà hình chữ nhật, một cạnh dựa vào bức tường thẳng (cạnh này không cần lưới). Chuồng có kích thước bao nhiêu thì diện tích lớn nhất?

Thoạt nghe, nhiều người nghĩ cứ làm chuồng hình vuông là rộng nhất. Nhưng ở đây có một bức tường giúp ta một cạnh, nên câu trả lời không đơn giản thế. Bài này cho bạn một công cụ để trả lời chắc chắn, không phải đoán: hàm số bậc hai và đồ thị của nó.

## Hàm số $y=ax^2+bx+c$

Trước khi dùng công thức, ta cứ thử vài con số đã. Gọi hai cạnh vuông góc với tường dài $x$ m; cạnh song song với tường dài $40-2x$ m, và diện tích là $S=x(40-2x)$:

| $x$ (m) | $5$ | $8$ | $10$ | $12$ | $15$ |
|---|---|---|---|---|---|
| $S$ (m²) | $150$ | $192$ | $200$ | $192$ | $150$ |

Diện tích tăng rồi giảm, và các giá trị **đối xứng** quanh $x=10$: $S(8)=S(12)$, $S(5)=S(15)$. Có vẻ $x=10$ cho diện tích lớn nhất. Nhưng "có vẻ" thì chưa đủ: biết đâu ở $x=9{,}5$ hay $x=10{,}3$ diện tích còn lớn hơn? Khai triển, $S=-2x^2+40x$: một biểu thức bậc hai theo $x$. Muốn chắc chắn, ta cần hiểu đồ thị của những hàm số như vậy trông ra sao.

:::definition Hàm số bậc hai
**Hàm số bậc hai** là hàm số có dạng
$$y=ax^2+bx+c,\qquad a\ne0.$$
Tập xác định là $\mathbb{R}$ và đồ thị là một **parabol**. Đặt $\Delta=b^2-4ac$.
- **Đỉnh** là $I\left(-\dfrac{b}{2a};\ -\dfrac{\Delta}{4a}\right)$.
- **Trục đối xứng** là đường thẳng đứng $x=-\dfrac{b}{2a}$.
- Nếu $a>0$, parabol có bề lõm **hướng lên** và đỉnh là điểm thấp nhất. Nếu $a<0$, bề lõm **hướng xuống** và đỉnh là điểm cao nhất.
:::

**Vì sao đỉnh nằm ở đó?** Công thức trông hơi rắc rối, nhưng nó đến từ một việc rất quen: hoàn thành bình phương.
$$ax^2+bx+c=a\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a}.$$
Bình phương $\left(x+\frac{b}{2a}\right)^2$ không âm và bằng $0$ chỉ khi $x=-\frac{b}{2a}$. Nếu $a>0$ thì $y\ge-\frac{\Delta}{4a}$, dấu bằng tại $x=-\frac{b}{2a}$; nếu $a<0$ thì $y\le-\frac{\Delta}{4a}$. Hai giá trị $x$ cách đều $-\frac{b}{2a}$ cho cùng một $y$, nên đồ thị đối xứng qua đường thẳng $x=-\frac{b}{2a}$. Đó cũng là lí do bảng số chuồng gà ở trên đối xứng quanh $x=10$.

Dấu của $a$ cho biết parabol úp hay ngửa, còn độ lớn $|a|$ cho biết nó "hẹp" hay "rộng": $|a|$ càng lớn, hai nhánh càng dựng đứng. Bạn nhìn ba đồ thị dưới đây là thấy.

:::graph Các parabol $y=x^2$, $y=-x^2$ và $y=\frac12x^2$
alt: Ba parabol cùng đi qua gốc toạ độ: y=x^2 bề lõm hướng lên, y=-x^2 bề lõm hướng xuống và y=0,5x^2 rộng hơn, bề lõm hướng lên
x: -4..4
y: -5..5
plot: x^2
plot: -x^2
plot: 0.5*x^2
:::

## Vẽ phác parabol

Vẽ parabol không cần thật nhiều điểm. Chỉ vài điểm "đắt giá" là đủ, phần còn lại nhờ tính đối xứng. Để vẽ phác $y=ax^2+bx+c$: (1) tìm đỉnh; (2) vẽ trục đối xứng; (3) tìm giao điểm của đồ thị với các trục ($x=0$ cho $y=c$; $y=0$ cho các nghiệm, nếu có); (4) dùng tính đối xứng qua trục.

Ta cùng đi đủ bốn bước với một parabol có bề lõm hướng lên.

:::example Parabol có bề lõm hướng lên
Tìm đỉnh, trục đối xứng, giao điểm với các trục và vẽ phác $y=x^2-4x+3$.

**Lời giải.** Ta có $a=1>0$ nên bề lõm hướng lên. Tính $\Delta$ rồi toạ độ đỉnh:

$$\Delta=16-12=4,\qquad x_I=-\frac{-4}{2\cdot1}=2,\qquad y_I=-\frac{4}{4\cdot1}=-1.$$

Giao với trục tung: $x=0$ cho $y=3$. Giao với trục hoành: $x^2-4x+3=(x-1)(x-3)=0$ cho $x=1$ hoặc $x=3$.

Vậy đỉnh $I(2; -1)$, trục đối xứng $x=2$, đồ thị cắt trục tung tại $(0; 3)$ và trục hoành tại $(1; 0)$, $(3; 0)$. Hàm số có giá trị nhỏ nhất $-1$ tại $x=2$.

**Kiểm tra.** Hai giao điểm $1$ và $3$ cách đều trục $x=2$, đúng với tính đối xứng.
:::

:::graph $y=x^2-4x+3$
alt: Parabol bề lõm hướng lên có đỉnh (2; -1), cắt trục hoành tại 1 và 3, cắt trục tung tại 3, trục đối xứng x=2 vẽ nét đứt
x: -1..5
y: -2..6
plot: x^2 - 4x + 3
vline: 2 ; dashed
point: (2, -1) "I(2; -1)" below
point: (1, 0) "1" above-left
point: (3, 0) "3" above-right
point: (0, 3) "3" left
:::

### Bảng biến thiên

Đồ thị cho ta một bức tranh; bảng biến thiên tóm bức tranh ấy lại trong một dòng: hàm số đi xuống ở đâu, đi lên ở đâu, và "đáy" nằm ở mức nào. Với $y=x^2-4x+3$ ($a>0$):

| $x$ | $-\infty$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y$ | $+\infty$ | nghịch biến | $-1$ | đồng biến | $+\infty$ |

Với $a>0$: nghịch biến trên $\left(-\infty; -\frac{b}{2a}\right)$, đồng biến trên $\left(-\frac{b}{2a}; +\infty\right)$, giá trị nhỏ nhất là $-\frac{\Delta}{4a}$. Với $a<0$ thì ngược lại và $-\frac{\Delta}{4a}$ là giá trị lớn nhất.

Bây giờ thử lật ngược parabol lại. Khi $a<0$, đỉnh không còn là đáy nữa mà thành điểm cao nhất, và mọi chiều đi lên, đi xuống cũng đổi chỗ cho nhau.

:::example Parabol có bề lõm hướng xuống
Tìm đỉnh, các khoảng đồng biến, nghịch biến và giá trị lớn nhất của $y=-x^2+2x+3$.

**Lời giải.** Ta có $a=-1<0$ nên bề lõm hướng xuống và đỉnh là điểm cao nhất:

$$\Delta=4+12=16,\qquad x_I=-\frac{2}{2\cdot(-1)}=1,\qquad y_I=-\frac{16}{4\cdot(-1)}=4.$$

Đồ thị cắt trục tung tại $(0; 3)$; giải $-x^2+2x+3=0$ được $x=-1$ hoặc $x=3$.

Vậy đỉnh $I(1; 4)$; hàm số đồng biến trên $(-\infty; 1)$, nghịch biến trên $(1; +\infty)$, và có giá trị lớn nhất $4$ tại $x=1$.
:::

:::graph $y=-x^2+2x+3$
alt: Parabol bề lõm hướng xuống có đỉnh (1; 4), cắt trục hoành tại -1 và 3, cắt trục tung tại 3
x: -2..4
y: -2..6
plot: -x^2 + 2x + 3
vline: 1 ; dashed
point: (1, 4) "I(1; 4)" above
point: (-1, 0) "-1" below-left
point: (3, 0) "3" below-right
point: (0, 3) "3" left
:::

## Tìm công thức của hàm số

Đến giờ ta đi từ công thức ra đồ thị. Bài toán cũng có thể đi theo chiều ngược lại: biết parabol đi qua ba điểm, ta tìm lại công thức. Có ba ẩn $a$, $b$, $c$ nên cần ba điểm, mỗi điểm cho một phương trình.

:::example Parabol đi qua ba điểm
Tìm hàm số bậc hai có đồ thị đi qua $A(0; 5)$, $B(1; 2)$ và $C(3; 2)$.

**Lời giải.** Gọi $y=ax^2+bx+c$ và thay toạ độ từng điểm. Điểm $A$ cho ngay $c=5$; hai điểm còn lại cho:

$$\begin{cases}a+b+5=2\\9a+3b+5=2\end{cases}\iff\begin{cases}a+b=-3\\3a+b=-1.\end{cases}$$

Trừ vế theo vế: $2a=2$, nên $a=1$ và $b=-4$. Vậy hàm số là $y=x^2-4x+5$.

**Kiểm tra.** $B$ và $C$ có cùng tung độ $2$, nên trục đối xứng là $x=\frac{1+3}{2}=2$; đúng là $-\frac{b}{2a}=\frac{4}{2}=2$.
:::

## Phép tịnh tiến: $y=a(x-p)^2+q$

Nhớ lại phép hoàn thành bình phương ở phần đầu. Nó cho $ax^2+bx+c=a(x-p)^2+q$ với $p=-\frac{b}{2a}$ và $q=-\frac{\Delta}{4a}$. Vậy **đỉnh là $(p; q)$**. Đồ thị là parabol $y=ax^2$ được tịnh tiến sang phải $p$ đơn vị và lên trên $q$ đơn vị (sang trái hoặc xuống dưới nếu số đó âm). Nói cách khác, mọi parabol cùng hệ số $a$ đều giống hệt nhau về hình dáng; chúng chỉ khác nhau ở chỗ đặt đỉnh.

:::graph $y=2x^2$ tịnh tiến thành $y=2(x-1)^2+3$
alt: Parabol y=2x^2 vẽ nét đứt và chính parabol đó được tịnh tiến sang phải một đơn vị, lên trên ba đơn vị, có đỉnh (1; 3)
x: -3..4
y: -1..9
plot: 2x^2 ; dashed
plot: 2(x - 1)^2 + 3
point: (1, 3) "(1; 3)" below-right
:::

Để chắc là hai cách nhìn khớp nhau, ta khai triển: $2(x-1)^2+3=2x^2-4x+5$, và công thức đỉnh cho $x_I=\frac{4}{4}=1$, $y_I=2-4+5=3$: đúng là $(1; 3)$.

## Ứng dụng

Mỗi khi đề hỏi "cao nhất", "lớn nhất", "nhỏ nhất" mà đại lượng là một hàm bậc hai, bạn hãy nghĩ ngay đến đỉnh parabol. Ta bắt đầu với một quả bóng được ném lên: nó bay lên chậm dần, dừng một thoáng, rồi rơi xuống.

:::example Quả bóng được ném lên
Một quả bóng được ném lên cao. Độ cao của nó (mét) sau $t$ giây là $h(t)=-5t^2+20t+1{,}5$. Tìm độ cao lớn nhất và thời điểm quả bóng chạm đất (làm tròn đến $0{,}01$ giây).

**Lời giải.** Hệ số $a=-5<0$ nên $h$ lớn nhất tại đỉnh:

$$t_I=-\frac{20}{2\cdot(-5)}=2,\qquad h(2)=-20+40+1{,}5=21{,}5.$$

Quả bóng chạm đất khi $h=0$, tức $5t^2-20t-1{,}5=0$:

$$t=\frac{20\pm\sqrt{400+30}}{10}=\frac{20\pm\sqrt{430}}{10}.$$

Thời gian phải dương, nên ta giữ nghiệm $t=\frac{20+\sqrt{430}}{10}\approx4{,}07$. Vậy quả bóng cao nhất $21{,}5$ m sau $2$ giây và chạm đất sau khoảng $4{,}07$ giây.
:::

:::graph Độ cao của quả bóng
alt: Một parabol bề lõm hướng xuống bắt đầu ở độ cao 1,5 khi t=0, đạt 21,5 tại t=2 và trở về 0 vào khoảng t=4,07
x: 0..5
y: -2..24
plot: -5x^2 + 20x + 1.5 ; 0..4.07
point: (2, 21.5) "(2; 21,5)" above
:::

Giờ ta đã đủ đồ nghề để trả lời câu hỏi về chuồng gà ở đầu bài, và lần này thì chắc chắn, không còn "có vẻ" nữa.

:::example Diện tích lớn nhất
Bác nông dân có $40$ m lưới để quây chuồng hình chữ nhật, một cạnh dựa vào tường. Tìm kích thước cho diện tích lớn nhất.

**Lời giải.** Gọi hai cạnh vuông góc với tường dài $x$ m; cạnh còn lại dài $40-2x>0$, nên $0<x<20$. Diện tích là một hàm số bậc hai với $a=-2<0$:

$$S(x)=x(40-2x)=-2x^2+40x,\qquad x_I=-\frac{40}{2\cdot(-2)}=10,\qquad S(10)=200.$$

Giá trị $x=10$ thuộc khoảng $(0; 20)$, nên nó dùng được. Vậy chuồng nên rộng $10$ m (hai cạnh vuông góc với tường) và dài $20$ m (cạnh song song với tường); diện tích lớn nhất là $200$ m².

**Kiểm tra.** Kết quả khớp với bảng ở đầu bài: $S(10)=200$ lớn hơn $S(8)=S(12)=192$.
:::

:::warning Những sai lầm thường gặp
Mấy chỗ dưới đây không khó, nhưng rất nhiều bạn trượt điểm vì chúng. Bạn đọc kĩ một lần là tránh được.
- **Quên dấu trừ ở hoành độ đỉnh.** Sai: với $y=x^2-4x+3$, $x_I=\frac{b}{2a}=-2$. Đúng: $x_I=-\frac{b}{2a}=2$.
- **Nói "giá trị nhỏ nhất" khi $a<0$.** Với $y=-x^2+2x+3$, đỉnh cho giá trị **lớn nhất** $4$; hàm số không có giá trị nhỏ nhất. Hãy xem dấu của $a$ trước.
- **Quên điều kiện của biến trong bài toán thực tế.** Ở bài chuồng gà cần $0<x<20$; nếu hoành độ đỉnh nằm ngoài khoảng đó thì không dùng được đỉnh.
- **Sai dấu khi đọc dạng tịnh tiến.** Sai: $y=2(x-1)^2+3$ có đỉnh $(-1; 3)$. Đúng: đỉnh $(1; 3)$, vì $(x-1)^2=0$ khi $x=1$.
:::

## Thuật ngữ

:::terms
- hàm số bậc hai | quadratic function
- parabol | parabola
- đỉnh | vertex
- trục đối xứng | axis of symmetry
- biệt thức $\Delta$ (delta) | discriminant
- bảng biến thiên | table of variation
- giá trị nhỏ nhất | minimum value
- giá trị lớn nhất | maximum value
- phép tịnh tiến | translation
:::

## Tóm tắt

- $y=ax^2+bx+c$ ($a\ne0$): đồ thị là parabol, đỉnh $\left(-\frac{b}{2a}; -\frac{\Delta}{4a}\right)$, trục đối xứng $x=-\frac{b}{2a}$.
- $a>0$: bề lõm hướng lên, giá trị nhỏ nhất tại đỉnh. $a<0$: bề lõm hướng xuống, giá trị lớn nhất tại đỉnh.
- Vẽ phác: đỉnh, trục, giao điểm với hai trục, đối xứng; tóm tắt bằng bảng biến thiên.
- Biết ba điểm: thay toạ độ, giải hệ tìm $a$, $b$, $c$.
- $y=a(x-p)^2+q$ có đỉnh $(p; q)$: tịnh tiến $y=ax^2$.
- Bài toán thực tế: lập hàm số, tìm đỉnh, kiểm tra điều kiện của biến.

Quay lại chuồng gà của bác nông dân: hình vuông không phải đáp án, mà là chuồng $10$ m nhân $20$ m, và ta biết chắc điều đó nhờ đỉnh của parabol $S=-2x^2+40x$. Lần sau gặp câu hỏi "lớn nhất, nhỏ nhất", bạn hãy thử viết đại lượng cần tìm thành một hàm bậc hai rồi đi tìm đỉnh.

## Luyện tập

Mỗi bài có nhắc lại kiến thức cần dùng và gợi ý các bước. Bạn cứ tự làm trước, nhất là tự vẽ phác parabol ra giấy; tay quen rồi thì mắt sẽ nhìn ra đỉnh rất nhanh. Sau đó hãy bấm xem lời giải để so.

:::exercise
Tìm đỉnh, trục đối xứng và các giao điểm với trục hoành của parabol $y=x^2-6x+5$.

::hint
**Kiến thức:** đỉnh có hoành độ $-\dfrac{b}{2a}$; giao với trục hoành là nghiệm của $y=0$.

**Gợi ý các bước:**
1. Tính $x_I$, rồi thay vào để được $y_I$.
2. Giải $x^2-6x+5=0$.

::solution
$x_I=\dfrac{6}{2}=3$, $y_I=9-18+5=-4$. Phương trình $x^2-6x+5=(x-1)(x-5)=0$ cho $x=1$ hoặc $x=5$.

**Đáp số.** Đỉnh $(3; -4)$; trục $x=3$; giao với trục hoành tại $(1; 0)$ và $(5; 0)$.
:::

:::exercise
Tìm giá trị nhỏ nhất của $y=3x^2-12x+7$ và giá trị của $x$ tại đó.

::hint
**Kiến thức:** khi $a>0$, giá trị nhỏ nhất đạt tại đỉnh.

**Gợi ý các bước:**
1. Kiểm tra dấu của $a$.
2. Tính hoành độ đỉnh rồi giá trị tại đó.

::solution
$a=3>0$, $x_I=\dfrac{12}{6}=2$ và $y(2)=12-24+7=-5$.

**Đáp số.** Giá trị nhỏ nhất là $-5$, tại $x=2$.
:::

:::exercise
Lập bảng biến thiên của $y=-x^2+4x$ và cho biết giá trị lớn nhất.

::hint
**Kiến thức:** khi $a<0$, hàm số đồng biến bên trái đỉnh, nghịch biến bên phải đỉnh.

**Gợi ý các bước:**
1. Tìm đỉnh.
2. Điền bảng: $-\infty$ ở hai đầu, giá trị đỉnh ở giữa.

::solution
$a=-1<0$, $x_I=2$, $y_I=-4+8=4$.

| $x$ | $-\infty$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y$ | $-\infty$ | đồng biến | $4$ | nghịch biến | $-\infty$ |

**Đáp số.** Đồng biến trên $(-\infty; 2)$, nghịch biến trên $(2; +\infty)$; giá trị lớn nhất là $4$ tại $x=2$.
:::

:::exercise
Tìm hàm số bậc hai có đồ thị đi qua $A(0; 1)$, $B(1; 0)$ và $C(2; 3)$.

::hint
**Kiến thức:** điểm $(x_0; y_0)$ thuộc đồ thị khi $y_0=ax_0^2+bx_0+c$.

**Gợi ý các bước:**
1. Từ $A$ tìm $c$.
2. Thay $B$, $C$ để được hệ hai phương trình ẩn $a$, $b$.

::solution
$A$ cho $c=1$. $B$ cho $a+b+1=0$, $C$ cho $4a+2b+1=3$, tức $2a+b=1$. Trừ vế theo vế: $a=2$, nên $b=-3$. Kiểm tra $C$: $8-6+1=3$.

**Đáp số.** $y=2x^2-3x+1$.
:::

:::exercise
Cho hàm số $y=-2x^2+4x+1$. Mỗi khẳng định sau đúng hay sai?

a) Parabol có bề lõm hướng xuống.
b) Đỉnh của parabol là $(1; 3)$.
c) Hàm số đồng biến trên $(1; +\infty)$.
d) Đồ thị cắt trục tung tại $(0; 1)$.

::hint
**Kiến thức:** dấu của $a$ cho chiều bề lõm; khi $a<0$, hàm số nghịch biến bên phải đỉnh.

**Gợi ý các bước:**
1. Xem dấu của $a$ và tính đỉnh.
2. Thay $x=0$ để tìm giao điểm với trục tung.

::solution
a) **Đúng.** $a=-2<0$.

b) **Đúng.** $x_I=-\dfrac{4}{2\cdot(-2)}=1$ và $y_I=-2+4+1=3$.

c) **Sai.** Vì $a<0$, hàm số **nghịch biến** trên $(1; +\infty)$.

d) **Đúng.** $x=0$ cho $y=1$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Một quả bóng được đá lên từ mặt đất, độ cao của nó là $h(t)=-5t^2+10t$ (mét) sau $t$ giây. Tìm độ cao lớn nhất và thời điểm quả bóng trở lại mặt đất.

::hint
**Kiến thức:** $a<0$ nên giá trị lớn nhất đạt tại đỉnh; quả bóng chạm đất khi $h(t)=0$ với $t>0$.

**Gợi ý các bước:**
1. Tính $t_I$ và $h(t_I)$.
2. Phân tích $h(t)$ thành nhân tử để giải $h(t)=0$.

::solution
$t_I=-\dfrac{10}{2\cdot(-5)}=1$ và $h(1)=-5+10=5$. Phương trình $-5t(t-2)=0$ cho $t=0$ (lúc đá) hoặc $t=2$.

**Đáp số.** Cao nhất $5$ m (lúc $t=1$ giây); chạm đất lúc $t=2$ giây.
:::

:::exercise
Một cửa hàng nhập áo với giá $50$ nghìn đồng một chiếc. Nếu bán với giá $x$ nghìn đồng một chiếc ($50\le x\le150$) thì mỗi tháng bán được $300-2x$ chiếc. Cửa hàng nên bán với giá bao nhiêu nghìn đồng một chiếc để lợi nhuận mỗi tháng lớn nhất?

::hint
**Kiến thức:** lợi nhuận = (giá bán − giá nhập) × số lượng; hàm số bậc hai với $a<0$ lớn nhất tại đỉnh.

**Gợi ý các bước:**
1. Viết $P(x)=(x-50)(300-2x)$ và khai triển.
2. Tìm hoành độ đỉnh và kiểm tra nó thuộc $[50; 150]$.

::solution
$$P(x)=(x-50)(300-2x)=-2x^2+400x-15\,000,\qquad x_I=-\frac{400}{2\cdot(-2)}=100.$$
Giá trị $100$ thuộc $[50; 150]$. Khi đó cửa hàng bán $100$ chiếc, lãi $50$ nghìn mỗi chiếc, tức $P(100)=5000$ nghìn đồng.

**Đáp số.** $100$.
:::

:::exercise
(Ôn lại tích vô hướng.) Parabol $y=x^2-4x+3$ cắt trục hoành tại $A(1; 0)$, $B(3; 0)$ và có đỉnh $I$. Chứng minh tam giác $IAB$ vuông cân tại $I$.

::hint
**Kiến thức:** hai vectơ vuông góc khi tích vô hướng bằng $0$; độ dài vectơ $(x; y)$ là $\sqrt{x^2+y^2}$.

**Gợi ý các bước:**
1. Tìm đỉnh $I$.
2. Tính $\overrightarrow{IA}\cdot\overrightarrow{IB}$, $IA$ và $IB$.

::solution
$I(2; -1)$, $\overrightarrow{IA}=(-1; 1)$, $\overrightarrow{IB}=(1; 1)$. Ta có $\overrightarrow{IA}\cdot\overrightarrow{IB}=-1+1=0$ và $IA=IB=\sqrt2$.

**Đáp số.** Tam giác $IAB$ vuông tại $I$ và $IA=IB=\sqrt2$, nên vuông cân tại $I$.
:::

:::exercise Thử thách
Một cổng có dạng parabol, chân cổng rộng $8$ m và đỉnh cổng cao $6$ m so với mặt đất. Một xe tải rộng $3$ m đi chính giữa cổng. Thùng xe cao tối đa bao nhiêu mét để đi qua được? (Làm tròn đến $0{,}01$ m.)

::hint
**Kiến thức:** chọn hệ trục với trục tung là trục đối xứng của cổng, trục hoành là mặt đất; parabol có dạng $y=ax^2+6$.

**Gợi ý các bước:**
1. Chân cổng là $(\pm4; 0)$; thay vào để tìm $a$.
2. Xe đi giữa nên hai mép thùng ở $x=\pm1{,}5$; tính $y$ tại đó.

::solution
Từ $0=16a+6$ được $a=-\dfrac38$. Tại $x=1{,}5$:
$$y=-\frac38\cdot2{,}25+6=6-0{,}84375=5{,}15625.$$
Thùng xe phải thấp hơn độ cao cổng tại hai mép, tức là thấp hơn $5{,}15625$ m. Vì đây là giới hạn trên, ta làm tròn **xuống**: tối đa khoảng $5{,}15$ m.

**Đáp số.** Thấp hơn $5{,}15625$ m, tức tối đa khoảng $5{,}15$ m.
:::

:::exercise Thử thách
Tìm $a$, $b$ biết parabol $y=ax^2+bx+2$ có đỉnh $I(2; -2)$.

::hint
**Kiến thức:** hoành độ đỉnh $-\dfrac{b}{2a}$; đỉnh thuộc đồ thị.

**Gợi ý các bước:**
1. Từ $-\dfrac{b}{2a}=2$ suy ra $b=-4a$.
2. Thay $x=2$, $y=-2$ vào hàm số và giải.

::solution
$b=-4a$. Đỉnh thuộc đồ thị: $4a+2b+2=-2$, tức $4a-8a=-4$, nên $a=1$ và $b=-4$.

**Kiểm tra.** $y=x^2-4x+2=(x-2)^2-2$ có đỉnh $(2; -2)$.

**Đáp số.** $a=1$, $b=-4$.
:::

## Kiểm tra mini

:::quiz
::mc
Đỉnh của parabol $y=2x^2-8x+5$ là
A. $(2; -3)$.
B. $(-2; 29)$.
C. $(4; 5)$.
D. $(2; 3)$.
::key A
$x_I=-\dfrac{b}{2a}=\dfrac{8}{4}=2$ và $y_I=8-16+5=-3$. Quên dấu trừ trong $-\dfrac{b}{2a}$ thì ra $x=-2$ (phương án B).

::mc
Hàm số $y=-x^2+6x-1$ đồng biến trên khoảng nào?
A. $(3; +\infty)$.
B. $(-\infty; 3)$.
C. $(-\infty; -3)$.
D. $(-3; +\infty)$.
::key B
$a=-1<0$ và $x_I=3$, nên hàm số đồng biến bên trái đỉnh, tức trên $(-\infty; 3)$. Phương án A là khoảng nghịch biến, đúng cho trường hợp $a>0$.

::mc
Parabol nào sau đây có đỉnh $(-1; 4)$?
A. $y=2(x-1)^2+4$.
B. $y=2(x+1)^2+4$.
C. $y=2(x+1)^2-4$.
D. $y=2(x-4)^2-1$.
::key B
$y=a(x-p)^2+q$ có đỉnh $(p; q)$. Với $p=-1$, $q=4$ ta được $y=2(x+1)^2+4$; phương án A đọc nhầm dấu của $p$.

::mc
Giá trị lớn nhất của hàm số $y=-2x^2+4x+3$ là
A. $5$.
B. $3$.
C. $1$.
D. $-5$.
::key A
$a<0$ nên giá trị lớn nhất đạt tại đỉnh $x=1$: $y(1)=-2+4+3=5$. Phương án C là hoành độ đỉnh, phương án D sai dấu khi tính $-\dfrac{\Delta}{4a}$.

::tf
Cho hàm số $y=x^2-2x-3$.
a) Parabol có bề lõm hướng lên.
b) Trục đối xứng của parabol là đường thẳng $x=-1$.
c) Đồ thị cắt trục $Oy$ tại điểm $(0; 3)$.
d) Giá trị nhỏ nhất của hàm số là $-4$, đạt tại $x=1$.
::key Đ S S Đ
a) Đúng: $a=1>0$. b) Sai: $x=-\dfrac{b}{2a}=1$. c) Sai: $x=0$ cho $y=-3$, nên giao điểm là $(0; -3)$. d) Đúng: $y(1)=1-2-3=-4$.

::sa
Parabol $y=x^2+bx+c$ có đỉnh $I(3; -2)$. Tìm $c$.
::key 7
Từ $-\dfrac{b}{2}=3$ ta có $b=-6$. Đỉnh nằm trên đồ thị: $9-18+c=-2$, nên $c=7$.

::sa
Một quán bán nước với giá $p$ nghìn đồng một cốc ($10\le p\le 50$) thì mỗi ngày bán được $120-2p$ cốc. Doanh thu lớn nhất trong một ngày là bao nhiêu nghìn đồng?
::key 1800
Doanh thu $R(p)=p(120-2p)=-2p^2+120p$ có $a<0$, lớn nhất tại $p=\dfrac{120}{4}=30$ (thuộc $[10; 50]$). Khi đó $R(30)=30\cdot60=1800$ nghìn đồng.
:::
