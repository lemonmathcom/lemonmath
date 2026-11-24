---
title: Hàm số mũ và hàm số lôgarit
description: Nắm định nghĩa, tập xác định, chiều biến thiên, đồ thị và tiệm cận của hàm số mũ, hàm số lôgarit; so sánh số, tìm hàm ngược và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết hàm số mũ $y=a^x$ và hàm số lôgarit $y=\log_ax$, nêu được tập xác định và tập giá trị.
- Mô tả được chiều biến thiên, đồ thị và đường tiệm cận của hai hàm số này theo cơ số $a$.
- Dùng tính đơn điệu để so sánh các số và dùng mối quan hệ hàm ngược để chuyển giữa hai hàm số.
- Vận dụng hai hàm số vào bài toán thực tế về suy giảm và tăng trưởng.
:::

Giả sử một loại thuốc, sau mỗi giờ, lượng thuốc còn lại trong máu bằng $85\%$ lượng của giờ trước (số liệu giả định). Nếu lúc đầu có $40$ mg thì sau $t$ giờ còn $C(t)=40\cdot0{,}85^t$ mg. Bác sĩ chỉ cho uống liều tiếp theo khi lượng thuốc xuống dưới $10$ mg. Sau bao nhiêu giờ thì được uống?

Để trả lời, ta cần hiểu $C(t)$ giảm thế nào khi $t$ tăng, và cần "đọc ngược" từ lượng thuốc ra thời gian. Hai việc đó chính là nghiên cứu hàm số mũ và hàm số lôgarit.

## Khám phá: hai họ đồ thị

Ta lập bảng giá trị của $y=2^x$ và $y=\left(\dfrac12\right)^x$:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $2^x$ | $\dfrac14$ | $\dfrac12$ | $1$ | $2$ | $4$ |
| $\left(\dfrac12\right)^x$ | $4$ | $2$ | $1$ | $\dfrac12$ | $\dfrac14$ |

Cả hai hàm đều nhận giá trị dương và đều đi qua điểm $(0; 1)$. Hàm thứ nhất tăng, hàm thứ hai giảm. Điều gì quyết định việc tăng hay giảm? Đó là cơ số lớn hơn hay nhỏ hơn $1$.

## Hàm số mũ

:::definition Hàm số mũ
Cho $a>0$, $a\neq1$. Hàm số $y=a^x$ gọi là **hàm số mũ cơ số $a$**.
:::

:::theorem Tính chất của hàm số mũ $y=a^x$
- Tập xác định $\mathbb{R}$, tập giá trị $(0; +\infty)$.
- Nếu $a>1$ thì hàm số đồng biến trên $\mathbb{R}$; nếu $0<a<1$ thì hàm số nghịch biến trên $\mathbb{R}$.
- Đồ thị luôn đi qua $(0; 1)$ và $(1; a)$, nằm hoàn toàn phía trên trục hoành, và nhận trục hoành ($y=0$) làm tiệm cận ngang.
:::

:::graph Đồ thị $y=2^x$ (cơ số lớn hơn $1$) và $y=\left(\frac12\right)^x$ (cơ số nhỏ hơn $1$)
alt: Hai đường cong cắt nhau tại điểm (0, 1); đường y bằng 2 mũ x đi lên từ trái sang phải, đường y bằng một phần hai mũ x đi xuống, cả hai đều nằm phía trên trục hoành
x: -3..3
y: -1..8
plot: 2^x
plot: 0.5^x
point: (0, 1) "" above-right
point: (1, 2) "" below-right
point: (-1, 2) "" above-left
label: (2.1, 6) "y = 2^x"
label: (-2.9, 6) "y = (1/2)^x"
:::

**Vì sao?** Với $a>1$, mỗi lần $x$ tăng thêm $1$ thì $a^x$ được nhân thêm với $a>1$, nên giá trị tăng. Với $0<a<1$ thì mỗi lần nhân với $a<1$ làm giá trị giảm. Giá trị $a^x$ không bao giờ bằng $0$ hay âm, nhưng tiến sát $0$ khi $x$ tiến ra phía "làm nhỏ", nên trục hoành là tiệm cận ngang. Hàm số mũ cơ số $e$ là $y=e^x$, với $e\approx2{,}718>1$ nên $y=e^x$ đồng biến.

## Hàm số lôgarit

:::definition Hàm số lôgarit
Cho $a>0$, $a\neq1$. Hàm số $y=\log_ax$ gọi là **hàm số lôgarit cơ số $a$**.
:::

:::theorem Tính chất của hàm số lôgarit $y=\log_ax$
- Tập xác định $(0; +\infty)$, tập giá trị $\mathbb{R}$.
- Nếu $a>1$ thì hàm số đồng biến trên $(0; +\infty)$; nếu $0<a<1$ thì hàm số nghịch biến trên $(0; +\infty)$.
- Đồ thị luôn đi qua $(1; 0)$ và $(a; 1)$, nằm hoàn toàn bên phải trục tung, và nhận trục tung ($x=0$) làm tiệm cận đứng.
- Hai hàm $y=a^x$ và $y=\log_ax$ là hai hàm ngược của nhau; đồ thị của chúng đối xứng qua đường thẳng $y=x$.
:::

:::graph Đồ thị $y=\log_2x$ (cơ số lớn hơn $1$) và $y=\log_{1/2}x$ (cơ số nhỏ hơn $1$)
alt: Hai đường cong nằm bên phải trục tung và cắt trục hoành tại điểm (1, 0); đường lôgarit cơ số 2 đi lên, đường lôgarit cơ số một phần hai đi xuống, cả hai tiến sát trục tung khi x tiến về 0
x: -1..8
y: -4..4
plot: ln(x)/ln(2) ; 0.07..8
plot: -ln(x)/ln(2) ; 0.07..8
point: (1, 0) "" above-right
point: (2, 1) "" above-left
point: (2, -1) "" below-right
label: (6, 3) "y = log_2 x"
label: (6, -3) "y = log_(1/2) x"
:::

**Vì sao?** Vì $y=\log_ax$ là hàm ngược của $y=a^x$, ta đổi vai trò của $x$ và $y$: điểm $(x_0; y_0)$ thuộc đồ thị $y=a^x$ khi và chỉ khi điểm $(y_0; x_0)$ thuộc đồ thị $y=\log_ax$. Do đó tập xác định của hàm này là tập giá trị của hàm kia, và tính đồng biến hay nghịch biến được giữ nguyên. Điểm $(0; 1)$ của hàm mũ trở thành $(1; 0)$, và tiệm cận ngang $y=0$ trở thành tiệm cận đứng $x=0$.

Khi cần so sánh hai số có cùng cơ số, ta dùng tính đơn điệu: với $a>1$, $a^{m}<a^{n}\Leftrightarrow m<n$ và $\log_ap<\log_aq\Leftrightarrow p<q$ ($p$, $q>0$); với $0<a<1$, chiều bất đẳng thức bị đảo ngược.

## Ví dụ

Ta bắt đầu với tập xác định.

:::example Tìm tập xác định
Tìm tập xác định của các hàm số:

a) $y=\log_3(x-1)$.

b) $y=\log_{1/2}(4-x^2)$.

c) $y=2^{\sqrt{x}}$.

d) $y=\ln\dfrac{x+1}{x-3}$.

**Lời giải.** a) Cần $x-1>0$, tức $x>1$. Tập xác định là $(1; +\infty)$.

b) Cần $4-x^2>0$, tức $-2<x<2$. Tập xác định là $(-2; 2)$.

c) Hàm mũ xác định với mọi số mũ thực, nên chỉ cần $\sqrt x$ có nghĩa: $x\ge0$. Tập xác định là $[0; +\infty)$.

d) Cần $\dfrac{x+1}{x-3}>0$, tức $x<-1$ hoặc $x>3$. Tập xác định là $(-\infty; -1)\cup(3; +\infty)$.
:::

Tiếp theo ta so sánh các số bằng tính đơn điệu.

:::example So sánh các số
So sánh:

a) $2^{\sqrt2}$ và $2^{1{,}5}$.

b) $\left(\dfrac12\right)^{-0{,}3}$ và $\left(\dfrac12\right)^{0{,}2}$.

c) $\log_35$ và $\log_32$.

d) $\log_23$ và $\log_35$.

**Lời giải.** a) Cơ số $2>1$ nên hàm đồng biến. Vì $\sqrt2\approx1{,}414<1{,}5$ nên $2^{\sqrt2}<2^{1{,}5}$.

b) Cơ số $\dfrac12<1$ nên hàm nghịch biến. Vì $-0{,}3<0{,}2$ nên $\left(\dfrac12\right)^{-0{,}3}>\left(\dfrac12\right)^{0{,}2}$.

c) Cơ số $3>1$ và $5>2$ nên $\log_35>\log_32$.

d) Hai lôgarit khác cơ số, ta so với số trung gian $\dfrac32$. Vì $2^{1{,}5}=2\sqrt2\approx2{,}83<3$ nên $\log_23>1{,}5$. Vì $3^{1{,}5}=3\sqrt3\approx5{,}20>5$ nên $\log_35<1{,}5$. Vậy $\log_23>\log_35$.
:::

Ta xác định cơ số từ một điểm trên đồ thị.

:::example Tìm cơ số từ đồ thị
a) Đồ thị hàm số $y=a^x$ đi qua điểm $(-2; 25)$. Tìm $a$ và nêu chiều biến thiên.

b) Đồ thị hàm số $y=\log_ax$ đi qua điểm $(8; -3)$. Tìm $a$.

**Lời giải.** a) Từ $a^{-2}=25$ ta có $\dfrac{1}{a^2}=25$, suy ra $a^2=\dfrac1{25}$ và $a=\dfrac15$ (vì $a>0$). Cơ số $\dfrac15<1$ nên hàm số nghịch biến.

b) Từ $\log_a8=-3$ ta có $a^{-3}=8$, suy ra $a^3=\dfrac18$ và $a=\dfrac12$.

Vậy a) $a=\dfrac15$, hàm nghịch biến; b) $a=\dfrac12$.
:::

Bây giờ ta tìm hàm ngược và đường tiệm cận.

:::example Hàm ngược và tiệm cận
Cho $f(x)=2^x+1$.

a) Tìm tiệm cận ngang và tập giá trị của đồ thị hàm số $f$.

b) Tìm hàm ngược $f^{-1}$ và tập xác định của nó.

**Lời giải.** a) Vì $2^x>0$ và $2^x$ tiến sát $0$ khi $x$ rất âm nên $f(x)>1$ và $f(x)$ tiến sát $1$. Tiệm cận ngang là $y=1$, tập giá trị là $(1; +\infty)$.

b) Đặt $y=2^x+1$. Khi đó $2^x=y-1$ nên $x=\log_2(y-1)$. Đổi tên biến, $f^{-1}(x)=\log_2(x-1)$, với tập xác định $(1; +\infty)$, trùng với tập giá trị của $f$.

**Kiểm tra.** $f(3)=9$ và $f^{-1}(9)=\log_28=3$.
:::

Giờ ta quay lại bài toán thuốc ở đầu bài, đi đủ bốn bước.

:::example Vận dụng: khi nào được uống liều tiếp theo?
Giả sử lượng thuốc trong máu sau $t$ giờ là $C(t)=40\cdot0{,}85^t$ mg (số liệu giả định). Sau ít nhất bao nhiêu giờ nguyên thì lượng thuốc xuống dưới $10$ mg?

**Lời giải.**

*Hiểu đề.* Cần tìm số giờ nguyên nhỏ nhất $t$ để $40\cdot0{,}85^t<10$.

*Tìm cách giải.* Cơ số $0{,}85<1$ nên $C(t)$ nghịch biến: $t$ càng lớn thì thuốc càng ít. Do đó chỉ cần tìm nghiệm $t_0$ của $40\cdot0{,}85^t=10$, rồi lấy số nguyên ngay sau $t_0$. Nghiệm đó tìm bằng lôgarit.

*Giải.* Từ $40\cdot0{,}85^{t_0}=10$ ta có $0{,}85^{t_0}=\dfrac14$, suy ra
$$t_0=\log_{0{,}85}\frac14=\frac{\ln0{,}25}{\ln0{,}85}\approx8{,}53.$$
Vì hàm nghịch biến nên $C(t)<10$ khi $t>8{,}53$. Số giờ nguyên nhỏ nhất là $9$.

*Nhìn lại.* Kết quả có hợp lí không? Thử lại: $C(8)\approx10{,}9>10$ và $C(9)\approx9{,}26<10$, nên $9$ giờ là đúng. Nếu liều ban đầu là $80$ mg thì sao? Khi đó $80\cdot0{,}85^t<10$ cho $t>\log_{0{,}85}\dfrac18\approx12{,}8$, tức $13$ giờ; liều gấp đôi làm thời gian chờ tăng thêm khoảng $4{,}3$ giờ, bất kể liều ban đầu là bao nhiêu.
:::

:::warning Những sai lầm thường gặp
- **Nhầm chiều biến thiên.** Sai: $y=\left(\dfrac12\right)^x$ đồng biến vì $\dfrac12>0$. Lí do sai: chiều biến thiên phụ thuộc cơ số lớn hay nhỏ hơn $1$, không phải dấu của cơ số. Đúng: cơ số $\dfrac12<1$ nên hàm số nghịch biến.
- **Quên đảo chiều bất đẳng thức.** Sai: $\log_{1/2}3<\log_{1/2}5$ vì $3<5$. Lí do sai: hàm $\log_{1/2}x$ nghịch biến. Đúng: $\log_{1/2}3>\log_{1/2}5$.
- **Nhầm tiệm cận.** Sai: đồ thị $y=\log_2x$ có tiệm cận ngang $y=0$. Lí do sai: tiệm cận $y=0$ là của hàm mũ; hàm lôgarit tiến ra vô cực chứ không tiến sát $0$ ở vô cực. Đúng: đồ thị $y=\log_2x$ có tiệm cận đứng $x=0$.
- **Tập xác định của lôgarit.** Sai: $y=\log_2(x-3)$ xác định với $x\ge3$. Lí do sai: đối số phải dương, mà $\log_20$ không có nghĩa. Đúng: tập xác định là $(3; +\infty)$.
:::

**Kết nối.** Hai hàm số này dựa trên [luỹ thừa với số mũ thực](lesson:real-exponents) và [lôgarit](lesson:logarithms): hàm số lôgarit là hàm ngược của hàm số mũ. Tính liên tục từ bài [hàm số liên tục](lesson:continuity) cho phép dùng đồ thị liền nét của chúng để xác định nghiệm. Bài [phương trình, bất phương trình mũ và lôgarit](lesson:exp-log-equations) sẽ giải những phương trình mà ta mới chỉ gặp ở dạng $0{,}85^t=\dfrac14$. Trong thực tế, hàm mũ mô tả sự tăng trưởng và suy giảm đều theo tỉ lệ, còn hàm lôgarit cho biết cần bao lâu để đạt một mức nào đó.

## Thuật ngữ

:::terms
- hàm số mũ | exponential function
- hàm số lôgarit | logarithmic function
- cơ số | base
- tập xác định | domain
- tập giá trị | range
- đồng biến | increasing
- nghịch biến | decreasing
- tiệm cận ngang | horizontal asymptote
- tiệm cận đứng | vertical asymptote
- hàm ngược | inverse function
:::

## Tóm tắt

- $y=a^x$ ($a>0$, $a\neq1$): tập xác định $\mathbb{R}$, tập giá trị $(0; +\infty)$, qua $(0; 1)$, tiệm cận ngang $y=0$.
- $y=\log_ax$: tập xác định $(0; +\infty)$, tập giá trị $\mathbb{R}$, qua $(1; 0)$, tiệm cận đứng $x=0$.
- Cơ số $a>1$: đồng biến; cơ số $0<a<1$: nghịch biến.
- Hai hàm ngược nhau, đồ thị đối xứng qua đường thẳng $y=x$.
- So sánh số cùng cơ số bằng tính đơn điệu, nhớ đảo chiều khi cơ số nhỏ hơn $1$; khác cơ số thì so với số trung gian.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm tập xác định của các hàm số:

a) $y=\log_2(3x+6)$.

b) $y=\lg(x^2-5x+6)$.

c) $y=3^{\frac{1}{x-1}}$.

d) $y=\ln(2-|x|)$.

::hint
**Kiến thức:** $\log_au$ cần $u>0$; hàm mũ xác định khi số mũ có nghĩa.

**Gợi ý các bước:**
1. Viết điều kiện cho đối số hoặc số mũ.
2. Giải bất phương trình hoặc điều kiện mẫu khác $0$.

::solution
a) Cần $3x+6>0$, tức $x>-2$.

b) Cần $x^2-5x+6>0\Leftrightarrow(x-2)(x-3)>0$, tức $x<2$ hoặc $x>3$.

c) Cần $x-1\neq0$, tức $x\neq1$.

d) Cần $2-|x|>0$, tức $|x|<2$ hay $-2<x<2$.

Vậy a) $(-2; +\infty)$; b) $(-\infty; 2)\cup(3; +\infty)$; c) $\mathbb{R}\setminus\{1\}$; d) $(-2; 2)$.

**Đáp số.** a) $(-2; +\infty)$; b) $(-\infty; 2)\cup(3; +\infty)$; c) $\mathbb{R}\setminus\{1\}$; d) $(-2; 2)$.
:::

:::exercise
So sánh:

a) $\left(\dfrac23\right)^{1{,}2}$ và $\left(\dfrac23\right)^{1{,}5}$.

b) $\log_{0{,}2}2$ và $\log_{0{,}2}3$.

c) $3^{-0{,}5}$ và $1$.

d) $\log_52$ và $\dfrac12$.

::hint
**Kiến thức:** hàm đồng biến khi cơ số lớn hơn $1$, nghịch biến khi cơ số nhỏ hơn $1$.

**Gợi ý các bước:**
1. Xác định cơ số lớn hay nhỏ hơn $1$.
2. Ở câu c, d, so với số trung gian ($1=3^0$ và $\dfrac12=\log_55^{1/2}$).

::solution
a) Cơ số $\dfrac23<1$ nên hàm nghịch biến; $1{,}2<1{,}5$ nên $\left(\dfrac23\right)^{1{,}2}>\left(\dfrac23\right)^{1{,}5}$.

b) Cơ số $0{,}2<1$ nên hàm nghịch biến; $2<3$ nên $\log_{0{,}2}2>\log_{0{,}2}3$.

c) Có $1=3^0$ và cơ số $3>1$; vì $-0{,}5<0$ nên $3^{-0{,}5}<1$.

d) Có $\dfrac12=\log_5\sqrt5$ và $\sqrt5\approx2{,}24>2$; cơ số $5>1$ nên $\log_52<\log_5\sqrt5=\dfrac12$.

Vậy a) $>$; b) $>$; c) $<$; d) $<$.

**Đáp số.** a) $>$; b) $>$; c) $<$; d) $<$.
:::

:::exercise
Tìm tập giá trị và đường tiệm cận của đồ thị mỗi hàm số:

a) $y=3^x+2$.

b) $y=1-\left(\dfrac12\right)^x$.

c) $y=\log_2(x+3)$ (tìm tập xác định và tiệm cận đứng).

::hint
**Kiến thức:** $a^x>0$ và tiến sát $0$ ở một phía; $\log_au$ có tiệm cận đứng khi $u=0$.

**Gợi ý các bước:**
1. Tìm khoảng giá trị của phần $a^x$.
2. Cộng, trừ hằng số tương ứng.

::solution
a) Hàm số $y=3^x+2$ xác định trên $\mathbb{R}$. Với mọi $x$ ta có $3^x>0$, suy ra $3^x+2>2$, tức là $y>2$. Vì $3^x$ nhận mọi giá trị dương nên $y$ nhận mọi giá trị trong khoảng $(2; +\infty)$. Khi $x\to-\infty$ thì $3^x\to0$, do đó $y\to2$. Vậy tập giá trị là $(2; +\infty)$ và đồ thị có tiệm cận ngang $y=2$.

b) Hàm số $y=1-\left(\dfrac12\right)^x$ xác định trên $\mathbb{R}$. Với mọi $x$ ta có $\left(\dfrac12\right)^x>0$, suy ra $1-\left(\dfrac12\right)^x<1$, tức là $y<1$. Vì $\left(\dfrac12\right)^x$ nhận mọi giá trị dương nên $y$ nhận mọi giá trị trong khoảng $(-\infty; 1)$. Khi $x\to+\infty$ thì $\left(\dfrac12\right)^x\to0$, do đó $y\to1$. Vậy tập giá trị là $(-\infty; 1)$ và đồ thị có tiệm cận ngang $y=1$.

c) Hàm số $y=\log_2(x+3)$ xác định khi biểu thức dưới dấu lôgarit dương: $x+3>0$, tức là $x>-3$. Khi $x\to(-3)^+$ thì $x+3\to0^+$ nên $y\to-\infty$. Vậy tập xác định là $(-3; +\infty)$ và đồ thị có tiệm cận đứng $x=-3$.

**Đáp số.** a) $(2; +\infty)$, $y=2$; b) $(-\infty; 1)$, $y=1$; c) $(-3; +\infty)$, $x=-3$.
:::

:::exercise
Xét hàm số $y=\log_{1/3}x$. Xét tính đúng sai của các mệnh đề sau:

a) Hàm số đồng biến trên $(0; +\infty)$.

b) Đồ thị hàm số đi qua điểm $(1; 0)$.

c) $\log_{1/3}9=-2$.

d) Đồ thị hàm số có tiệm cận ngang $y=0$.

::hint
**Kiến thức:** tính chất của hàm lôgarit với cơ số nhỏ hơn $1$.

**Gợi ý các bước:**
1. Xác định cơ số lớn hay nhỏ hơn $1$.
2. Kiểm tra từng mệnh đề với tính chất và định nghĩa.

::solution
Hàm số $y=\log_{1/3}x$ có tập xác định $(0; +\infty)$ và cơ số $\dfrac13$ thoả mãn $0<\dfrac13<1$.

a) **Sai.** Vì cơ số $\dfrac13<1$ nên hàm số $y=\log_{1/3}x$ nghịch biến trên $(0; +\infty)$, không đồng biến.

b) **Đúng.** Ta có $\log_{1/3}1=0$ (vì $\left(\dfrac13\right)^0=1$), nên đồ thị đi qua điểm $(1; 0)$.

c) **Đúng.** Ta có $\left(\dfrac13\right)^{-2}=3^2=9$, suy ra $\log_{1/3}9=-2$.

d) **Sai.** Khi $x\to0^+$ thì $y=\log_{1/3}x\to+\infty$, nên đồ thị có tiệm cận đứng $x=0$. Khi $x\to+\infty$ thì $y\to-\infty$, nên đồ thị không có tiệm cận ngang $y=0$.

Vậy các mệnh đề b), c) đúng; các mệnh đề a), d) sai.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Giả sử một khoản tiền gửi tăng $5\%$ mỗi năm, lãi kép (số liệu giả định). Sau ít nhất bao nhiêu năm nguyên thì số tiền ít nhất gấp đôi số ban đầu?

::hint
**Kiến thức:** số tiền sau $n$ năm là $A\cdot1{,}05^n$; hàm $1{,}05^n$ đồng biến.

**Gợi ý các bước:**
1. Lập điều kiện $1{,}05^n\ge2$.
2. Tính $n_0=\log_{1{,}05}2$ rồi lấy số nguyên đủ lớn nhất cần thiết.

::solution
Gọi $A$ là số tiền ban đầu và $n$ là số năm nguyên ($n\in\mathbb{N}^*$). Vì tiền tăng $5\%$ mỗi năm theo lãi kép nên sau $n$ năm số tiền là $A\cdot1{,}05^n$.

Số tiền ít nhất gấp đôi số ban đầu khi
$$A\cdot1{,}05^n\ge2A\iff1{,}05^n\ge2.$$

Vì cơ số $1{,}05>1$ nên hàm số $y=\log_{1{,}05}t$ đồng biến; do đó
$$n\ge\log_{1{,}05}2=\frac{\ln2}{\ln1{,}05}\approx14{,}2.$$

Vì $n$ nguyên nên $n\ge15$, giá trị nhỏ nhất là $n=15$.

Kiểm tra: $1{,}05^{14}\approx1{,}98<2$ và $1{,}05^{15}\approx2{,}08\ge2$.

Vậy sau ít nhất $15$ năm thì số tiền ít nhất gấp đôi số ban đầu.

**Đáp số.** $15$ năm.
:::

:::exercise
Giả sử một chất phóng xạ có chu kì bán rã $5$ ngày (số liệu giả định), khối lượng ban đầu $100$ g. Sau $t$ ngày, khối lượng còn lại là $m(t)=100\cdot\left(\dfrac12\right)^{t/5}$ gam.

a) Còn lại bao nhiêu gam sau $12$ ngày (làm tròn đến hàng đơn vị)?

b) Sau bao nhiêu ngày thì còn $10$ g (làm tròn đến hàng phần mười)?

::hint
**Kiến thức:** $m(t)$ là hàm mũ cơ số $\dfrac12$; $\left(\dfrac12\right)^{u}=c\Leftrightarrow u=\log_{1/2}c$.

**Gợi ý các bước:**
1. a) Thay $t=12$ rồi bấm máy.
2. b) Giải $\left(\dfrac12\right)^{t/5}=0{,}1$, tìm $\dfrac t5$ bằng lôgarit.

::solution
Khối lượng còn lại sau $t$ ngày là $m(t)=100\cdot\left(\dfrac12\right)^{t/5}$ (gam).

a) Thay $t=12$ vào công thức, ta được
$$m(12)=100\cdot\left(\frac12\right)^{12/5}=100\cdot2^{-2{,}4}\approx18{,}9.$$
Làm tròn đến hàng đơn vị, $m(12)\approx19$ g. Vậy sau $12$ ngày còn lại khoảng $19$ g.

b) Cần tìm $t$ để $m(t)=10$, tức là
$$100\cdot\left(\frac12\right)^{t/5}=10\iff\left(\frac12\right)^{t/5}=0{,}1.$$
Lấy lôgarit cơ số $\dfrac12$ hai vế, ta được
$$\frac t5=\log_{1/2}0{,}1=\log_210,$$
suy ra
$$t=5\log_210\approx5\cdot3{,}3219\approx16{,}6.$$
Vậy sau khoảng $16{,}6$ ngày thì còn lại $10$ g.

**Đáp số.** a) $19$ g; b) $16{,}6$ ngày.
:::

:::exercise
Giả sử dân số một thành phố là $500\,000$ người và tăng $2\%$ mỗi năm (số liệu giả định). Sau ít nhất bao nhiêu năm nguyên thì dân số vượt $600\,000$ người?

::hint
**Kiến thức:** dân số sau $n$ năm là $500\,000\cdot1{,}02^n$.

**Gợi ý các bước:**
1. Lập $1{,}02^n>1{,}2$.
2. Dùng lôgarit và tính đơn điệu để tìm $n$ nguyên nhỏ nhất.

::solution
Gọi $n$ là số năm nguyên ($n\in\mathbb{N}^*$). Vì dân số tăng $2\%$ mỗi năm nên sau $n$ năm dân số là $500\,000\cdot1{,}02^n$ (người).

Dân số vượt $600\,000$ người khi
$$500\,000\cdot1{,}02^n>600\,000\iff1{,}02^n>\frac{600\,000}{500\,000}=1{,}2.$$

Vì cơ số $1{,}02>1$ nên hàm số $y=\log_{1{,}02}t$ đồng biến; do đó
$$n>\log_{1{,}02}1{,}2=\frac{\ln1{,}2}{\ln1{,}02}\approx9{,}2.$$

Vì $n$ nguyên nên $n\ge10$, giá trị nhỏ nhất là $n=10$.

Kiểm tra: $500\,000\cdot1{,}02^9\approx597\,500<600\,000$ và $500\,000\cdot1{,}02^{10}\approx609\,500>600\,000$.

Vậy sau ít nhất $10$ năm thì dân số thành phố vượt $600\,000$ người.

**Đáp số.** $10$ năm.
:::

:::exercise
Cho $f(x)=\log_5x-1$. Tìm hàm ngược $f^{-1}$ và tính $f^{-1}(1)$.

::hint
**Kiến thức:** hàm ngược của $y=\log_ax$ là $y=a^x$.

**Gợi ý các bước:**
1. Đặt $y=\log_5x-1$ và tính $x$ theo $y$.
2. Đổi tên biến rồi thay $x=1$.

::solution
Hàm số $f(x)=\log_5x-1$ có tập xác định $(0; +\infty)$ và tập giá trị $\mathbb{R}$, đồng biến nên có hàm ngược.

Đặt $y=\log_5x-1$. Ta có
$$\log_5x=y+1\iff x=5^{y+1}.$$

Đổi vai trò của $x$ và $y$, ta được $f^{-1}(x)=5^{x+1}$ với mọi $x\in\mathbb{R}$.

Do đó
$$f^{-1}(1)=5^{1+1}=5^2=25.$$

Kiểm tra: $f(25)=\log_525-1=2-1=1$.

Vậy $f^{-1}(x)=5^{x+1}$ và $f^{-1}(1)=25$.

**Đáp số.** $f^{-1}(x)=5^{x+1}$; $f^{-1}(1)=25$.
:::

:::exercise
Ôn lại hàm số liên tục. Chứng minh phương trình $2^x+x=4$ có ít nhất một nghiệm trong khoảng $(1; 2)$.

::hint
**Kiến thức:** hàm $g(x)=2^x+x-4$ liên tục trên $\mathbb{R}$; nếu $g(1)\,g(2)<0$ thì có nghiệm trong $(1; 2)$.

**Gợi ý các bước:**
1. Tính $g(1)$ và $g(2)$.
2. Áp dụng định lí giá trị trung gian.

::solution
Xét hàm số $g(x)=2^x+x-4$. Hàm số mũ $2^x$ và hàm số $x$ đều liên tục trên $\mathbb{R}$, nên $g$ là tổng của hai hàm liên tục và liên tục trên $\mathbb{R}$; đặc biệt $g$ liên tục trên đoạn $[1; 2]$.

Ta có
$$g(1)=2+1-4=-1<0,\qquad g(2)=4+2-4=2>0.$$

Suy ra $g(1)\cdot g(2)<0$. Theo định lí giá trị trung gian, tồn tại $c\in(1; 2)$ sao cho $g(c)=0$, tức là $2^c+c=4$.

Vậy phương trình $2^x+x=4$ có ít nhất một nghiệm trong khoảng $(1; 2)$.

**Đáp số.** Phương trình có nghiệm trong $(1; 2)$.
:::

:::exercise Thử thách
Cho $f(x)=\log_2\left(x+\sqrt{x^2+1}\right)$. Chứng minh $f$ xác định trên $\mathbb{R}$ và $f(-x)=-f(x)$ với mọi $x$.

::hint
**Kiến thức:** $\sqrt{x^2+1}>|x|$ và $\left(\sqrt{x^2+1}-x\right)\left(\sqrt{x^2+1}+x\right)=1$.

**Gợi ý các bước:**
1. Chứng tỏ $x+\sqrt{x^2+1}>0$.
2. Tính $f(-x)$ và dùng tích bằng $1$.

::solution
Vì $\sqrt{x^2+1}>\sqrt{x^2}=|x|\ge-x$ nên $x+\sqrt{x^2+1}>0$ với mọi $x$. Vậy $f$ xác định trên $\mathbb{R}$.

Ta có $f(-x)=\log_2\left(\sqrt{x^2+1}-x\right)$. Vì $\left(\sqrt{x^2+1}-x\right)\left(\sqrt{x^2+1}+x\right)=x^2+1-x^2=1$ nên $\sqrt{x^2+1}-x=\dfrac{1}{x+\sqrt{x^2+1}}$. Do đó
$$f(-x)=\log_2\frac{1}{x+\sqrt{x^2+1}}=-\log_2\left(x+\sqrt{x^2+1}\right)=-f(x).$$

**Đáp số.** $f$ xác định trên $\mathbb{R}$ và $f(-x)=-f(x)$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Tập xác định của hàm số $y=\log_{1/2}(2x-4)$ là
A. $[2; +\infty)$.
B. $(-\infty; 2)$.
C. $(0; +\infty)$.
D. $(2; +\infty)$.
::key D
Cần $2x-4>0$, tức $x>2$. Phương án A lấy cả đầu mút $2$, B đảo chiều, C quên dịch chuyển do $2x-4$.

::mc TH
Hàm số nào sau đây nghịch biến trên $\mathbb{R}$?
A. $y=\left(\dfrac{\sqrt2}{2}\right)^x$.
B. $y=\left(\dfrac{\pi}{3}\right)^x$.
C. $y=\log_{1/2}x$.
D. $y=e^x$.
::key A
Cơ số $\dfrac{\sqrt2}{2}\approx0{,}71<1$ nên hàm nghịch biến trên $\mathbb{R}$. Phương án B có cơ số $\dfrac\pi3>1$, D có cơ số $e>1$, còn C chỉ xác định trên $(0; +\infty)$.

::mc TH
Khẳng định nào sau đây đúng?
A. $2^{\sqrt3}<2^{1{,}7}$.
B. $\log_{1/2}3>\log_{1/2}5$.
C. $\log_32>1$.
D. $0{,}9^{0{,}5}>0{,}9^{0{,}4}$.
::key B
Cơ số $\dfrac12<1$ nên hàm nghịch biến, $3<5$ cho $\log_{1/2}3>\log_{1/2}5$. B sai vì $\sqrt3\approx1{,}73>1{,}7$; C sai vì $2<3$; D sai vì cơ số $0{,}9<1$ và $0{,}5>0{,}4$.

::mc TH
Đường tiệm cận ngang của đồ thị hàm số $y=3^x-5$ là
A. $y=5$.
B. $x=-5$.
C. $y=-5$.
D. $x=0$.
::key C
$3^x>0$ và tiến sát $0$ khi $x$ rất âm nên $y$ tiến sát $-5$ từ phía trên. Phương án A sai dấu, B và D là đường thẳng đứng.

::tf TH NB NB TH
Cho hàm số $f(x)=\log_2(x-1)$. Xét tính đúng sai của các mệnh đề sau:
a) Tập xác định của $f$ là $(0; +\infty)$.
b) $f(3)=1$.
c) Hàm số $f$ nghịch biến trên tập xác định.
d) Đồ thị của $f$ có tiệm cận đứng $x=1$.
::key S Đ S Đ
a) Sai: cần $x-1>0$, tức $x>1$. b) Đúng: $\log_22=1$. c) Sai: cơ số $2>1$ nên hàm đồng biến. d) Đúng: $x-1=0$ khi $x=1$, nên đồ thị tiến sát đường thẳng $x=1$.

::sa VD
Giả sử khối lượng một chất phóng xạ sau $t$ ngày là $m(t)=80\cdot\left(\dfrac12\right)^{t/6}$ gam. Sau bao nhiêu ngày thì còn lại $10$ g?
::key 18
Cần $\left(\dfrac12\right)^{t/6}=\dfrac18=\left(\dfrac12\right)^3$ nên $\dfrac t6=3$ và $t=18$ (ngày).

::sa VD
Giả sử giá trị một chiếc máy giảm $10\%$ mỗi năm. Sau ít nhất bao nhiêu năm nguyên thì giá trị còn dưới $10\%$ giá ban đầu?
::key 22
Cần $0{,}9^n<0{,}1$, tức $n>\dfrac{\ln0{,}1}{\ln0{,}9}\approx21{,}9$ nên $n=22$. Thử lại: $0{,}9^{21}\approx0{,}109>0{,}1$ và $0{,}9^{22}\approx0{,}098<0{,}1$.
:::
