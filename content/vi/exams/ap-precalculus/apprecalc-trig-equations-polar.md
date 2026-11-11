---
title: Phương trình lượng giác và toạ độ cực
description: AP Precalculus Unit 3, phần 2: hàm lượng giác ngược, giải phương trình và bất phương trình lượng giác, đồng nhất thức, toạ độ cực và đồ thị cực.
minutes: 50
---

:::goals
- Tính giá trị hàm lượng giác ngược và nắm tập giá trị bị hạn chế của chúng.
- Giải phương trình và bất phương trình lượng giác trên một khoảng cho trước, tìm đủ mọi nghiệm.
- Dùng đồng nhất thức Pythagore, công thức cộng và công thức nhân đôi để biến đổi biểu thức và giải phương trình.
- Chuyển đổi giữa toạ độ cực và toạ độ vuông góc.
- Đọc đồ thị cực $r=f(\theta)$: khi nào $r$ tăng hay giảm, và điều đó cho biết gì về khoảng cách đến gốc toạ độ.
:::

Nửa sau của Unit 3 biến các hàm tuần hoàn của bài trước thành công cụ: hàm ngược để "gỡ" chúng, đồng nhất thức để biến đổi, và phương trình để giải. Bài kết thúc với toạ độ cực, nơi một hàm số mô tả khoảng cách đến gốc toạ độ khi góc quay. Câu tự luận FRQ 4 (Symbolic Manipulations) thường dùng các đồng nhất thức và phương trình trong bài này.

## Hàm lượng giác ngược

Một hàm tuần hoàn không phải là hàm một-một, nên để định nghĩa hàm ngược ta hạn chế tập xác định:

| Hàm số | Đầu vào | Đầu ra (tập giá trị) |
|---|---|---|
| $\arcsin x=\sin^{-1}x$ | $-1\le x\le1$ | $-\dfrac\pi2\le y\le\dfrac\pi2$ |
| $\arccos x=\cos^{-1}x$ | $-1\le x\le1$ | $0\le y\le\pi$ |
| $\arctan x=\tan^{-1}x$ | mọi số thực $x$ | $-\dfrac\pi2<y<\dfrac\pi2$ |

Máy tính chỉ trả về đúng một giá trị này; các nghiệm khác của phương trình suy ra từ tính đối xứng và tính tuần hoàn. Các hàm nghịch đảo là $\sec x=\dfrac{1}{\cos x}$, $\csc x=\dfrac{1}{\sin x}$ và $\cot x=\dfrac{1}{\tan x}$.

:::example Giá trị hàm ngược
Giá trị của $\arccos\left(-\dfrac12\right)$ là
A. $-\dfrac\pi3$
B. $\dfrac{4\pi}{3}$
C. $\dfrac{\pi}{3}$
D. $\dfrac{2\pi}{3}$

**Lời giải.** Ta cần góc thuộc $[0;\pi]$ có cos bằng $-\dfrac12$.

Vì $\cos\dfrac\pi3=\dfrac12$ và cos âm ở góc phần tư II, góc cần tìm là $\pi-\dfrac\pi3=\dfrac{2\pi}{3}$.

Vậy $\arccos\left(-\dfrac12\right)=\dfrac{2\pi}{3}$, chọn đáp án **D**. Phương án B cũng có cos bằng $-\dfrac12$ nhưng nằm ngoài tập giá trị $[0;\pi]$.
:::

## Giải phương trình lượng giác

1. Cô lập hàm lượng giác, hoặc phân tích thành nhân tử; một phương trình bậc hai theo $\sin x$ hay $\cos x$ phân tích như mọi phương trình bậc hai.
2. Tìm góc tham chiếu, rồi mọi góc trong khoảng đang xét có dấu phù hợp.
3. Nếu biểu thức trong hàm là $bx$, giải theo $bx$ trên khoảng đã giãn trước.

Với **bất phương trình**, giải phương trình tương ứng rồi xét dấu trên các khoảng giữa các nghiệm, hoặc đọc từ đồ thị hay đường tròn lượng giác.

:::example Phương trình bậc hai theo cos
Phương trình $2\cos^2x-\cos x-1=0$ có bao nhiêu nghiệm trên $[0;2\pi)$?
A. $2$
B. $3$
C. $4$
D. $1$

**Lời giải.** Coi phương trình là phương trình bậc hai theo $\cos x$ và phân tích: $(2\cos x+1)(\cos x-1)=0$.

Do đó $\cos x=-\dfrac12$, cho $x=\dfrac{2\pi}{3}$ hoặc $x=\dfrac{4\pi}{3}$; hoặc $\cos x=1$, cho $x=0$.

Vậy phương trình có $3$ nghiệm $0$, $\dfrac{2\pi}{3}$ và $\dfrac{4\pi}{3}$, chọn đáp án **B**.
:::

## Đồng nhất thức

| Đồng nhất thức | Công thức |
|---|---|
| Pythagore | $\sin^2x+\cos^2x=1$, $\ 1+\tan^2x=\sec^2x$ |
| Công thức cộng | $\sin(a+b)=\sin a\cos b+\cos a\sin b$ |
| | $\cos(a+b)=\cos a\cos b-\sin a\sin b$ |
| Nhân đôi | $\sin2x=2\sin x\cos x$, $\ \cos2x=\cos^2x-\sin^2x=2\cos^2x-1$ |

:::example Dùng công thức nhân đôi
Giải phương trình $\sin2x=\sin x$ trên $[0;2\pi)$.

**Lời giải.** Dùng $\sin2x=2\sin x\cos x$, phương trình trở thành $2\sin x\cos x-\sin x=0$, tức $\sin x\,(2\cos x-1)=0$.

Nếu $\sin x=0$ thì $x=0$ hoặc $x=\pi$. Nếu $\cos x=\dfrac12$ thì $x=\dfrac\pi3$ hoặc $x=\dfrac{5\pi}{3}$.

Không được chia hai vế cho $\sin x$: làm vậy sẽ mất hai nghiệm $0$ và $\pi$.

Vậy phương trình có các nghiệm $x=0$, $\dfrac\pi3$, $\pi$ và $\dfrac{5\pi}{3}$.
:::

## Toạ độ cực và đồ thị cực

Điểm có toạ độ cực $(r,\theta)$ có toạ độ vuông góc
$$x=r\cos\theta,\qquad y=r\sin\theta,$$
và ngược lại $r^2=x^2+y^2$, $\tan\theta=\dfrac yx$, với $\theta$ chọn ở đúng góc phần tư.

Đồ thị $r=f(\theta)$ cho biết khoảng cách đến gốc toạ độ thay đổi thế nào khi góc quay. Khi $r>0$ và $r$ tăng, các điểm đi **ra xa** gốc toạ độ; khi $r>0$ và $r$ giảm, chúng đi **lại gần** gốc. Tốc độ biến thiên trung bình của $r$ trên $[\alpha;\beta]$ là $\dfrac{f(\beta)-f(\alpha)}{\beta-\alpha}$.

:::graph Đồ thị cực $r=2+2\cos\theta$
alt: Một đường cong hình trái tim (đường cardioid) chạm gốc toạ độ ở bên trái và xa nhất về bên phải tại điểm (4, 0); đường cong đi qua (0, 2) và (0, -2)
x: -1..5
y: -3..3
shape: equal
segment: (4.0, 0.0) (3.967, 0.417)
segment: (3.967, 0.417) (3.87, 0.823)
segment: (3.87, 0.823) (3.711, 1.206)
segment: (3.711, 1.206) (3.496, 1.557)
segment: (3.496, 1.557) (3.232, 1.866)
segment: (3.232, 1.866) (2.927, 2.127)
segment: (2.927, 2.127) (2.591, 2.333)
segment: (2.591, 2.333) (2.234, 2.481)
segment: (2.234, 2.481) (1.867, 2.569)
segment: (1.867, 2.569) (1.5, 2.598)
segment: (1.5, 2.598) (1.144, 2.57)
segment: (1.144, 2.57) (0.809, 2.49)
segment: (0.809, 2.49) (0.502, 2.363)
segment: (0.502, 2.363) (0.231, 2.197)
segment: (0.231, 2.197) (0.0, 2.0)
segment: (0.0, 2.0) (-0.187, 1.781)
segment: (-0.187, 1.781) (-0.329, 1.55)
segment: (-0.329, 1.55) (-0.427, 1.314)
segment: (-0.427, 1.314) (-0.483, 1.084)
segment: (-0.483, 1.084) (-0.5, 0.866)
segment: (-0.5, 0.866) (-0.485, 0.667)
segment: (-0.485, 0.667) (-0.443, 0.492)
segment: (-0.443, 0.492) (-0.382, 0.344)
segment: (-0.382, 0.344) (-0.309, 0.225)
segment: (-0.309, 0.225) (-0.232, 0.134)
segment: (-0.232, 0.134) (-0.158, 0.07)
segment: (-0.158, 0.07) (-0.093, 0.03)
segment: (-0.093, 0.03) (-0.043, 0.009)
segment: (-0.043, 0.009) (-0.011, 0.001)
segment: (-0.011, 0.001) (-0.0, 0.0)
segment: (-0.0, 0.0) (-0.011, -0.001)
segment: (-0.011, -0.001) (-0.043, -0.009)
segment: (-0.043, -0.009) (-0.093, -0.03)
segment: (-0.093, -0.03) (-0.158, -0.07)
segment: (-0.158, -0.07) (-0.232, -0.134)
segment: (-0.232, -0.134) (-0.309, -0.225)
segment: (-0.309, -0.225) (-0.382, -0.344)
segment: (-0.382, -0.344) (-0.443, -0.492)
segment: (-0.443, -0.492) (-0.485, -0.667)
segment: (-0.485, -0.667) (-0.5, -0.866)
segment: (-0.5, -0.866) (-0.483, -1.084)
segment: (-0.483, -1.084) (-0.427, -1.314)
segment: (-0.427, -1.314) (-0.329, -1.55)
segment: (-0.329, -1.55) (-0.187, -1.781)
segment: (-0.187, -1.781) (-0.0, -2.0)
segment: (-0.0, -2.0) (0.231, -2.197)
segment: (0.231, -2.197) (0.502, -2.363)
segment: (0.502, -2.363) (0.809, -2.49)
segment: (0.809, -2.49) (1.144, -2.57)
segment: (1.144, -2.57) (1.5, -2.598)
segment: (1.5, -2.598) (1.867, -2.569)
segment: (1.867, -2.569) (2.234, -2.481)
segment: (2.234, -2.481) (2.591, -2.333)
segment: (2.591, -2.333) (2.927, -2.127)
segment: (2.927, -2.127) (3.232, -1.866)
segment: (3.232, -1.866) (3.496, -1.557)
segment: (3.496, -1.557) (3.711, -1.206)
segment: (3.711, -1.206) (3.87, -0.823)
segment: (3.87, -0.823) (3.967, -0.417)
segment: (3.967, -0.417) (4.0, -0.0)
point: (4, 0) "(4; 0)" below-right
point: (0, 2) "(0; 2)" above-right
point: (0, -2) "(0; -2)" below-right
:::

:::example Chuyển đổi toạ độ
Điểm có toạ độ cực $\left(4,\dfrac{5\pi}{6}\right)$ có toạ độ vuông góc là
A. $\left(-2\sqrt3,2\right)$
B. $\left(2,-2\sqrt3\right)$
C. $\left(2\sqrt3,-2\right)$
D. $\left(-2,2\sqrt3\right)$

**Lời giải.** Theo công thức chuyển đổi, $x=4\cos\dfrac{5\pi}{6}=4\cdot\left(-\dfrac{\sqrt3}{2}\right)=-2\sqrt3$ và $y=4\sin\dfrac{5\pi}{6}=4\cdot\dfrac12=2$.

Vậy điểm đó là $\left(-2\sqrt3,2\right)$, chọn đáp án **A**. Phương án D ứng với góc $\dfrac{2\pi}3$.
:::

:::example Đọc đồ thị cực
Với $r=2+2\cos\theta$, khẳng định nào mô tả đúng các điểm trên đồ thị khi $0<\theta<\dfrac\pi2$?
A. $r$ tăng, nên các điểm đi ra xa gốc toạ độ.
B. $r$ âm, nên các điểm nằm ở góc phần tư III.
C. $r$ dương và giảm, nên các điểm đi lại gần gốc toạ độ.
D. $r$ không đổi, nên các điểm nằm trên một đường tròn.

**Lời giải.** Trên $\left(0;\dfrac\pi2\right)$, $\cos\theta$ giảm từ $1$ xuống $0$, nên $r$ giảm từ $4$ xuống $2$ và luôn dương.

$r$ dương và giảm nghĩa là khoảng cách đến gốc toạ độ đang nhỏ dần. Tốc độ biến thiên trung bình trên $\left[0;\dfrac\pi2\right]$ là $\dfrac{2-4}{\pi/2}=-\dfrac4\pi$.

Vậy các điểm đi lại gần gốc toạ độ, chọn đáp án **C**.
:::

:::warning Những cái bẫy thường gặp
- **Thiếu nghiệm:** máy tính chỉ cho một góc; tìm đủ mọi nghiệm trong khoảng nhờ tính đối xứng.
- **Chia cho một hàm lượng giác:** hãy phân tích thành nhân tử, nếu không sẽ mất nghiệm.
- **Biểu thức đã giãn:** với $\sin3x=\dfrac12$ trên $[0;2\pi)$, giải theo $3x$ trên $[0;6\pi)$ trước: có sáu nghiệm, không phải hai.
- **Tập giá trị hàm ngược:** $\arccos$ cho giá trị trong $[0;\pi]$, $\arcsin$ trong $\left[-\dfrac\pi2;\dfrac\pi2\right]$.
- **Góc phần tư trong toạ độ cực:** chỉ dùng $\tan\theta=\dfrac yx$ thì không phân biệt được $(1,1)$ với $(-1,-1)$.
:::

:::terms
- inverse trigonometric function | hàm lượng giác ngược
- restricted domain | tập xác định bị hạn chế
- identity | đồng nhất thức
- double-angle formula | công thức nhân đôi
- secant / cosecant / cotangent | sec / cosec / cot
- polar coordinates | toạ độ cực
- polar graph | đồ thị trong toạ độ cực
- distance from the origin | khoảng cách đến gốc toạ độ
:::

## Bài tập tương tự

:::exercise
Tính giá trị đúng của $\arcsin\left(-\dfrac{\sqrt2}{2}\right)$ và $\arctan\sqrt3$.

::hint
**Kiến thức:** tập giá trị $\left[-\dfrac\pi2;\dfrac\pi2\right]$ của $\arcsin$ và $\left(-\dfrac\pi2;\dfrac\pi2\right)$ của $\arctan$.

::solution
Ta cần góc thuộc $\left[-\dfrac\pi2;\dfrac\pi2\right]$ có sin bằng $-\dfrac{\sqrt2}{2}$. Vì $\sin\dfrac\pi4=\dfrac{\sqrt2}2$ và sin là hàm lẻ nên góc đó là $-\dfrac\pi4$.

Với $\arctan\sqrt3$, ta cần góc thuộc $\left(-\dfrac\pi2;\dfrac\pi2\right)$ có tang bằng $\sqrt3$, đó là $\dfrac\pi3$.

Vậy $\arcsin\left(-\dfrac{\sqrt2}{2}\right)=-\dfrac\pi4$ và $\arctan\sqrt3=\dfrac\pi3$.

**Đáp số.** $-\dfrac\pi4$ và $\dfrac\pi3$.
:::

:::exercise
Giải phương trình $2\cos x+\sqrt3=0$ trên $[0;2\pi)$.

::hint
**Kiến thức:** $\cos x=-\dfrac{\sqrt3}{2}$, cos âm ở góc phần tư II và III.

::solution
Cô lập cos, ta được $\cos x=-\dfrac{\sqrt3}{2}$. Góc tham chiếu là $\dfrac\pi6$, vì $\cos\dfrac\pi6=\dfrac{\sqrt3}{2}$.

Cos âm ở góc phần tư II và III, nên $x=\pi-\dfrac\pi6=\dfrac{5\pi}{6}$ hoặc $x=\pi+\dfrac\pi6=\dfrac{7\pi}{6}$.

Vậy phương trình có nghiệm $x=\dfrac{5\pi}6$ và $x=\dfrac{7\pi}6$.

**Đáp số.** $\dfrac{5\pi}6$, $\dfrac{7\pi}6$.
:::

:::exercise
Giải phương trình $2\sin^2x=\sin x$ trên $[0;2\pi)$.

::hint
**Kiến thức:** chuyển mọi số hạng sang một vế rồi đặt $\sin x$ làm nhân tử chung.

::solution
Chuyển vế và đặt nhân tử chung, ta được $\sin x\,(2\sin x-1)=0$.

Nếu $\sin x=0$ thì $x=0$ hoặc $x=\pi$. Nếu $\sin x=\dfrac12$ thì $x=\dfrac\pi6$ hoặc $x=\dfrac{5\pi}{6}$.

Vậy phương trình có các nghiệm $x=0$, $\dfrac\pi6$, $\dfrac{5\pi}6$ và $\pi$.

**Đáp số.** $0,\ \dfrac\pi6,\ \dfrac{5\pi}6,\ \pi$.
:::

:::exercise
Dùng công thức cộng để tính giá trị đúng của $\sin\dfrac{5\pi}{12}$.

::hint
**Kiến thức:** $\dfrac{5\pi}{12}=\dfrac\pi4+\dfrac\pi6$.

::solution
Vì $\dfrac{5\pi}{12}=\dfrac\pi4+\dfrac\pi6$ nên theo công thức cộng,
$$\sin\frac{5\pi}{12}=\sin\frac\pi4\cos\frac\pi6+\cos\frac\pi4\sin\frac\pi6=\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}+\frac{\sqrt2}{2}\cdot\frac12.$$

Cộng hai phân số, ta được $\dfrac{\sqrt6+\sqrt2}{4}\approx0{,}966$.

Vậy $\sin\dfrac{5\pi}{12}=\dfrac{\sqrt6+\sqrt2}{4}$.

**Đáp số.** $\dfrac{\sqrt6+\sqrt2}{4}$.
:::

:::exercise
Chuyển điểm có toạ độ vuông góc $\left(-1,\sqrt3\right)$ sang toạ độ cực với $r>0$ và $0\le\theta<2\pi$.

::hint
**Kiến thức:** $r=\sqrt{x^2+y^2}$; điểm nằm ở góc phần tư II.

::solution
Khoảng cách đến gốc toạ độ là $r=\sqrt{(-1)^2+\left(\sqrt3\right)^2}=\sqrt4=2$.

Khi đó $\cos\theta=-\dfrac12$ và $\sin\theta=\dfrac{\sqrt3}{2}$, nên $\theta$ ở góc phần tư II và $\theta=\dfrac{2\pi}{3}$.

Vậy toạ độ cực của điểm là $\left(2,\dfrac{2\pi}{3}\right)$.

**Đáp số.** $\left(2,\dfrac{2\pi}3\right)$.
:::

## Bài tập vận dụng

:::exercise
Độ cao của một người chơi vòng đu quay là $h(t)=16-14\cos\dfrac{\pi t}{20}$ mét sau $t$ giây. Trong vòng quay đầu tiên, $0\le t\le40$, người đó ở cao hơn $23$ m trong bao lâu?

::hint
**Kiến thức:** giải bất phương trình $\cos\dfrac{\pi t}{20}<-\dfrac12$ trên một chu kì.

::solution
Điều kiện $h(t)>23$ nghĩa là $-14\cos\dfrac{\pi t}{20}>7$, tức $\cos\dfrac{\pi t}{20}<-\dfrac12$.

Trong một vòng, góc $\dfrac{\pi t}{20}$ chạy từ $0$ đến $2\pi$, và cos nhỏ hơn $-\dfrac12$ khi và chỉ khi $\dfrac{2\pi}{3}<\dfrac{\pi t}{20}<\dfrac{4\pi}{3}$, nên $\dfrac{40}{3}<t<\dfrac{80}{3}$.

Độ dài khoảng này là $\dfrac{80}{3}-\dfrac{40}{3}=\dfrac{40}{3}\approx13{,}3$.

Vậy trong mỗi vòng, người chơi ở cao hơn $23$ m khoảng $13{,}3$ giây.

**Đáp số.** $\dfrac{40}{3}\approx13{,}3$ giây.
:::

:::exercise
Dùng máy tính tìm mọi nghiệm của $\tan x=3$ trên $[0;2\pi)$, làm tròn đến ba chữ số thập phân.

::hint
**Kiến thức:** hàm tang có chu kì $\pi$.

::solution
Máy tính cho $\arctan3\approx1{,}249$, thuộc $[0;2\pi)$.

Hàm tang có chu kì $\pi$, nên nghiệm còn lại là $1{,}249+\pi\approx4{,}391$; cộng thêm $\pi$ nữa thì ra ngoài khoảng.

Vậy các nghiệm là $x\approx1{,}249$ và $x\approx4{,}391$.

**Đáp số.** $x\approx1{,}249$, $x\approx4{,}391$.
:::

:::exercise
Với hàm cực $r=3+2\sin\theta$, tìm khoảng cách lớn nhất và nhỏ nhất đến gốc toạ độ, và cho biết khi $\dfrac\pi2<\theta<\pi$ các điểm đi lại gần hay ra xa gốc toạ độ.

::hint
**Kiến thức:** $r$ lớn nhất khi $\sin\theta=1$ và nhỏ nhất khi $\sin\theta=-1$.

::solution
Vì $-1\le\sin\theta\le1$ nên khoảng cách $r$ nằm giữa $3-2=1$ và $3+2=5$: khoảng cách lớn nhất $5$ đạt tại $\theta=\dfrac\pi2$, nhỏ nhất $1$ đạt tại $\theta=\dfrac{3\pi}{2}$.

Trên $\left(\dfrac\pi2;\pi\right)$, $\sin\theta$ giảm từ $1$ xuống $0$, nên $r$ giảm từ $5$ xuống $3$ và luôn dương.

Vậy khoảng cách lớn nhất là $5$, nhỏ nhất là $1$, và trên khoảng đó các điểm đi lại gần gốc toạ độ.

**Đáp số.** $5$ và $1$; lại gần gốc toạ độ.
:::

:::exercise Thử thách
Giải phương trình $\cos2x+\cos x=0$ trên $[0;2\pi)$.

::hint
**Kiến thức:** thay $\cos2x$ bằng $2\cos^2x-1$ để được phương trình bậc hai theo $\cos x$.

::solution
Dùng $\cos2x=2\cos^2x-1$, phương trình trở thành $2\cos^2x+\cos x-1=0$, phân tích thành $(2\cos x-1)(\cos x+1)=0$.

Nếu $\cos x=\dfrac12$ thì $x=\dfrac\pi3$ hoặc $x=\dfrac{5\pi}{3}$. Nếu $\cos x=-1$ thì $x=\pi$.

Vậy phương trình có các nghiệm $x=\dfrac\pi3$, $\pi$ và $\dfrac{5\pi}{3}$.

**Đáp số.** $\dfrac\pi3,\ \pi,\ \dfrac{5\pi}3$.
:::

:::quiz
::mc
Giá trị của $\arcsin\dfrac12$ là
A. $\dfrac\pi3$
B. $\dfrac{5\pi}{6}$
C. $\dfrac\pi6$
D. $\dfrac\pi4$
::key C
$\sin\dfrac\pi6=\dfrac12$ và $\dfrac\pi6$ thuộc tập giá trị của $\arcsin$.

::mc
Phương trình $\sin x=0{,}3$ có bao nhiêu nghiệm trên $[0;2\pi)$?
A. $2$
B. $1$
C. $0$
D. $4$
::key A
Một nghiệm ở góc phần tư I và một nghiệm ở góc phần tư II.

::mc
Giá trị của $\sec\dfrac\pi3$ là
A. $\dfrac12$
B. $\dfrac{2}{\sqrt3}$
C. $\sqrt3$
D. $2$
::key D
$\sec\dfrac\pi3=\dfrac{1}{\cos(\pi/3)}=2$.

::mc
Điểm có toạ độ cực $(2,\pi)$ có toạ độ vuông góc là
A. $(2,0)$
B. $(-2,0)$
C. $(0,2)$
D. $(0,-2)$
::key B
$x=2\cos\pi=-2$ và $y=2\sin\pi=0$.

::tf
Cho hàm cực $r=2\cos\theta$. Xét tính đúng sai của các mệnh đề sau:
a) $r=2$ khi $\theta=0$.
b) $r=0$ khi $\theta=\dfrac\pi2$.
c) $r$ đồng biến trên $0<\theta<\dfrac\pi2$.
d) Đồ thị đi qua gốc toạ độ.
::key T T F T
Trên $\left(0;\dfrac\pi2\right)$, $\cos\theta$ giảm, nên $r$ giảm.

::sa
Phương trình $2\cos x=1$ có bao nhiêu nghiệm trên $[0;2\pi)$?
::key 2
$x=\dfrac\pi3$ và $x=\dfrac{5\pi}3$.

::sa
Tìm $r>0$ cho điểm có toạ độ vuông góc $(3,4)$.
::key 5
$r=\sqrt{9+16}=5$.
:::
