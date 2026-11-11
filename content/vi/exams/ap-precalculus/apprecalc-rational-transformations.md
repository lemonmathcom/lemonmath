---
title: Hàm phân thức, phép biến đổi và mô hình hoá
description: AP Precalculus Unit 1, phần 2: điểm khuyết và tiệm cận đứng, dáng điệu ở vô cực của hàm phân thức, phép biến đổi đồ thị, chọn và dùng mô hình hàm số.
minutes: 45
---

:::goals
- Tìm nghiệm, điểm khuyết, tiệm cận đứng và dáng điệu ở vô cực của hàm phân thức.
- Mô tả dáng điệu gần tiệm cận đứng bằng kí hiệu giới hạn.
- Áp dụng phép biến đổi cho đồ thị, cho điểm và cho công thức.
- Lập và dùng các mô hình đơn giản, kể cả tỉ lệ nghịch, và chọn loại hàm phù hợp với tình huống.
:::

Hàm phân thức là thương của hai đa thức, và chúng mô tả các tình huống mà một đại lượng giảm dần khi đại lượng kia tăng: chi phí trung bình, nồng độ, cường độ ánh sáng. Đề AP Precalculus yêu cầu bạn đọc các đặc điểm chính từ công thức, mô tả điều gì xảy ra gần các "chỗ đứt" của đồ thị, và giải thích ý nghĩa của tiệm cận trong ngữ cảnh. Bài này cũng đề cập phép biến đổi đồ thị và việc chọn mô hình, hai ý xuất hiện xuyên suốt Unit 1 đến 3.

## Nghiệm, điểm khuyết và tiệm cận đứng

Với $r(x)=\dfrac{p(x)}{q(x)}$, trước hết hãy **phân tích** tử và mẫu thành nhân tử.

- Một nhân tử rút gọn được cho một **điểm khuyết (hole)** trên đồ thị.
- Một nghiệm của mẫu không rút gọn được cho một **tiệm cận đứng (vertical asymptote)**.
- Một nghiệm của tử không rút gọn được cho một **nghiệm** của $r$.

:::graph Đồ thị của $r(x)=\dfrac{x^2-4}{x^2-x-2}$
alt: Một đường cong dạng hyperbol có tiệm cận đứng x = -1, tiệm cận ngang y = 1, một nghiệm tại x = -2 và một điểm khuyết tại (2, 4/3)
x: -5..5
y: -4..6
plot: (x+2)/(x+1) ; -5..-1.2
plot: (x+2)/(x+1) ; -0.8..5
vline: -1 ; dashed
hline: 1 ; dashed
open: (2, 1.333) "(2, 4/3)" above-right
point: (-2, 0) "-2" below-left
:::

:::example Đọc các đặc điểm
Cho $r(x)=\dfrac{x^2-4}{x^2-x-2}$. Khẳng định nào đúng?
A. Đồ thị có tiệm cận đứng $x=2$ và $x=-1$.
B. Đồ thị có điểm khuyết tại $x=2$ và tiệm cận đứng $x=-1$.
C. Đồ thị có nghiệm tại $x=2$.
D. Đồ thị không có tiệm cận ngang.

**Lời giải.** Phân tích tử và mẫu thành nhân tử:
$$r(x)=\frac{(x-2)(x+2)}{(x-2)(x+1)}.$$

Nhân tử $x-2$ rút gọn được, nên có điểm khuyết tại $x=2$; tung độ của nó là $\dfrac{2+2}{2+1}=\dfrac43$. Nhân tử $x+1$ vẫn còn ở mẫu, nên $x=-1$ là tiệm cận đứng. Tử và mẫu cùng bậc với hệ số cao nhất đều bằng $1$, nên $y=1$ là tiệm cận ngang.

Vậy khẳng định B đúng, chọn đáp án **B**.
:::

## Dáng điệu ở vô cực của hàm phân thức

So sánh bậc của tử và mẫu:

| Bậc | Dáng điệu ở vô cực |
|---|---|
| tử $<$ mẫu | tiệm cận ngang $y=0$ |
| tử $=$ mẫu | tiệm cận ngang $y=\dfrac{\text{hệ số cao nhất của }p}{\text{hệ số cao nhất của }q}$ |
| tử $=$ mẫu $+1$ | tiệm cận xiên: một đường thẳng tìm bằng phép chia |
| tử $>$ mẫu $+1$ | có dáng điệu như đa thức có bậc bằng hiệu hai bậc |

Gần tiệm cận đứng $x=a$, hàm số tăng (hoặc giảm) không bị chặn; ta viết, chẳng hạn, $\displaystyle\lim_{x\to a^+}r(x)=\infty$.

:::example Dáng điệu ở vô cực
Hàm phân thức nào có tiệm cận ngang $y=\dfrac32$?
A. $\dfrac{3x+1}{2x^2-5}$
B. $\dfrac{3x^2+1}{2x-5}$
C. $\dfrac{3x^2-x}{2x^2+7}$
D. $\dfrac{2x^2}{3x^2+1}$

**Lời giải.** Tiệm cận ngang khác $y=0$ đòi hỏi tử và mẫu cùng bậc, còn lại phương án C và D. Với C, tỉ số các hệ số cao nhất là $\dfrac32$; với D là $\dfrac23$. Phương án A có $y=0$, còn phương án B có tiệm cận xiên.

Vậy hàm số cần tìm là $\dfrac{3x^2-x}{2x^2+7}$, chọn đáp án **C**.
:::

:::example Gần tiệm cận đứng
Với $r(x)=\dfrac{1}{x-3}$, khẳng định nào đúng?
A. $\displaystyle\lim_{x\to3^+}r(x)=-\infty$
B. $\displaystyle\lim_{x\to3}r(x)=0$
C. $\displaystyle\lim_{x\to3^-}r(x)=\infty$
D. $\displaystyle\lim_{x\to3^+}r(x)=\infty$

**Lời giải.** Khi $x$ lớn hơn $3$ một chút, $x-3$ là số dương rất nhỏ, nên $\dfrac{1}{x-3}$ dương rất lớn. Khi $x$ nhỏ hơn $3$ một chút, $x-3$ âm và rất nhỏ, nên $\dfrac{1}{x-3}$ âm và có trị tuyệt đối rất lớn.

Vậy $\displaystyle\lim_{x\to3^+}r(x)=\infty$, chọn đáp án **D**.
:::

## Phép biến đổi đồ thị

$g(x)=a\,f\big(b(x-h)\big)+k$ biến đổi đồ thị của $f$: co giãn theo phương ngang với hệ số $\dfrac1{|b|}$, tịnh tiến ngang $h$, co giãn theo phương đứng với hệ số $|a|$, tịnh tiến đứng $k$, và đối xứng khi $a$ hoặc $b$ âm. Khi $b=1$, điểm $(x_0,y_0)$ trên đồ thị $f$ chuyển thành $(x_0+h,\ ay_0+k)$.

:::example Theo dấu một điểm
Điểm $(2,5)$ nằm trên đồ thị của $f$. Điểm nào chắc chắn nằm trên đồ thị của $g(x)=-2f(x-1)+3$?
A. $(1,-7)$
B. $(3,13)$
C. $(3,-7)$
D. $(1,13)$

**Lời giải.** Đầu vào của $f$ phải bằng $2$, nên $x-1=2$ và $x=3$.

Khi đó $g(3)=-2f(2)+3=-2(5)+3=-7$.

Vậy điểm $(3,-7)$ nằm trên đồ thị của $g$, chọn đáp án **C**. Phương án A và D tịnh tiến sang trái thay vì sang phải.
:::

## Lập và chọn mô hình

Chọn loại hàm theo cách đại lượng thay đổi: tốc độ thay đổi không đổi, chọn tuyến tính; sai phân cấp hai không đổi hoặc có một điểm đổi chiều, chọn bậc hai; một đại lượng tỉ lệ nghịch với đại lượng khác, chọn hàm phân thức. Sau đó dùng dữ liệu đã cho để tìm các tham số.

:::example Định luật nghịch đảo bình phương
Cường độ $I$ của ánh sáng từ một ngọn đèn tỉ lệ nghịch với bình phương khoảng cách $d$: $I=\dfrac{k}{d^2}$. Ở khoảng cách $2$ m, cường độ là $200$ đơn vị. Cường độ ở khoảng cách $4$ m là bao nhiêu?
A. $100$ đơn vị
B. $25$ đơn vị
C. $50$ đơn vị
D. $400$ đơn vị

**Lời giải.** Từ $200=\dfrac{k}{2^2}$, ta được $k=800$, nên $I=\dfrac{800}{d^2}$.

Tại $d=4$: $I=\dfrac{800}{16}=50$.

Vậy cường độ ở khoảng cách $4$ m là $50$ đơn vị, chọn đáp án **C**. Khoảng cách tăng gấp đôi thì cường độ giảm $4$ lần, không phải giảm $2$ lần như phương án A.
:::

:::warning Những cái bẫy thường gặp
- **Không phân tích nhân tử trước:** nhân tử chung cho điểm khuyết, không phải tiệm cận.
- **Tìm tiệm cận ngang bằng số hạng khác:** chỉ so sánh các số hạng bậc cao nhất.
- **Chiều tịnh tiến:** $f(x-1)$ dời đồ thị sang phải.
- **Thứ tự trong phép biến đổi:** với $f\big(b(x-h)\big)$, hệ số co giãn $\dfrac1b$ đi kèm với phép tịnh tiến $h$; hãy viết $f(2x-6)$ thành $f\big(2(x-3)\big)$.
- **Dùng mô hình ngoài miền xác định:** mô hình chi phí trung bình chỉ có nghĩa với số lượng dương.
:::

:::terms
- rational function | hàm phân thức
- hole (removable discontinuity) | điểm khuyết (gián đoạn bỏ được)
- vertical / horizontal asymptote | tiệm cận đứng / ngang
- slant asymptote | tiệm cận xiên
- dilation, translation, reflection | phép co giãn, phép tịnh tiến, phép đối xứng
- inversely proportional | tỉ lệ nghịch
- average cost | chi phí trung bình
- model | mô hình
:::

## Bài tập tương tự

:::exercise
Tìm điểm khuyết và các tiệm cận đứng (nếu có) của $f(x)=\dfrac{x^2-9}{x-3}$.

::hint
**Kiến thức:** phân tích tử thành hiệu hai bình phương.

::solution
Phân tích, $f(x)=\dfrac{(x-3)(x+3)}{x-3}$. Nhân tử $x-3$ rút gọn được, nên $f(x)=x+3$ với $x\ne3$.

Vì nghiệm duy nhất của mẫu đã rút gọn được nên đồ thị không có tiệm cận đứng. Có một điểm khuyết tại $x=3$, ở độ cao $3+3=6$.

Vậy đồ thị là đường thẳng $y=x+3$ bị khuyết tại điểm $(3,6)$.

**Đáp số.** Điểm khuyết $(3,6)$; không có tiệm cận đứng.
:::

:::exercise
Tìm tiệm cận ngang của $g(x)=\dfrac{5x-1}{2x+3}$.

::hint
**Kiến thức:** cùng bậc: chia hai hệ số cao nhất.

::solution
Tử và mẫu đều có bậc $1$, với các hệ số cao nhất là $5$ và $2$.

Vậy tiệm cận ngang là $y=\dfrac52$.

**Đáp số.** $y=\dfrac52$.
:::

:::exercise
Tìm tiệm cận xiên của $h(x)=\dfrac{x^2+1}{x}$.

::hint
**Kiến thức:** chia từng số hạng của tử cho $x$.

::solution
Chia ra, $h(x)=x+\dfrac1x$.

Khi $x\to\pm\infty$, số hạng $\dfrac1x$ tiến tới $0$, nên $h(x)$ ngày càng gần $x$.

Vậy tiệm cận xiên là đường thẳng $y=x$.

**Đáp số.** $y=x$.
:::

:::exercise
Đồ thị của $f(x)=x^2$ được biến đổi thành $g(x)=(x+2)^2-1$. Mô tả phép biến đổi và cho biết đỉnh của $g$.

::hint
**Kiến thức:** $f(x+2)$ dời sang trái; $-1$ dời xuống dưới.

::solution
Thay $x$ bởi $x+2$ tịnh tiến đồ thị $2$ đơn vị sang trái, và trừ $1$ tịnh tiến đồ thị $1$ đơn vị xuống dưới.

Đỉnh $(0,0)$ của $f$ chuyển thành $(-2,-1)$.

Vậy $g$ là đồ thị của $f$ tịnh tiến sang trái $2$ và xuống dưới $1$, có đỉnh $(-2,-1)$.

**Đáp số.** Sang trái $2$, xuống $1$; đỉnh $(-2,-1)$.
:::

:::exercise
Điểm $(6,4)$ nằm trên đồ thị của $f$. Điểm nào nằm trên đồ thị của $g(x)=f(2x)$?

::hint
**Kiến thức:** giải $2x=6$.

::solution
Để $g(x)=f(2x)$ dùng giá trị $f(6)$, ta cần $2x=6$, nên $x=3$.

Khi đó $g(3)=f(6)=4$.

Vậy điểm $(3,4)$ nằm trên đồ thị của $g$: một phép co theo phương ngang với hệ số $\dfrac12$.

**Đáp số.** $(3,4)$.
:::

## Bài tập vận dụng

:::exercise
Chi phí để một công ti sản xuất $x$ sản phẩm là $500+4x$ đô la, nên chi phí trung bình mỗi sản phẩm là $A(x)=\dfrac{500+4x}{x}$.
a) Tìm tiệm cận ngang của $A$.
b) Giải thích ý nghĩa của nó trong ngữ cảnh.

::hint
**Kiến thức:** cùng bậc, hoặc chia từng số hạng cho $x$.

::solution
a) Chia ra, $A(x)=\dfrac{500}{x}+4$. Khi $x\to\infty$, $\dfrac{500}{x}\to0$, nên tiệm cận ngang là $y=4$.

b) Chi phí cố định $500$ đô la được chia cho ngày càng nhiều sản phẩm, nên chi phí trung bình tiến tới chi phí $4$ đô la cho mỗi sản phẩm làm thêm.

Vậy khi sản xuất càng nhiều, chi phí trung bình mỗi sản phẩm tiến tới $4$ đô la.

**Đáp số.** $y=4$: chi phí trung bình tiến tới $4$ đô la mỗi sản phẩm.
:::

:::exercise
Nồng độ một loại thuốc trong máu, tính bằng mg/L, sau $t$ giờ kể từ khi tiêm là $C(t)=\dfrac{5t}{t^2+1}$.
a) Tính nồng độ sau $2$ giờ.
b) Về lâu dài nồng độ thay đổi thế nào? Giải thích bằng bậc của tử và mẫu.

::hint
**Kiến thức:** thay $t=2$; so sánh bậc của tử và mẫu.

::solution
a) $C(2)=\dfrac{10}{4+1}=2$ mg/L.

b) Tử có bậc $1$ và mẫu có bậc $2$, nên $C(t)\to0$ khi $t\to\infty$.

Vậy sau $2$ giờ nồng độ là $2$ mg/L, và về lâu dài nồng độ tiến tới $0$ khi cơ thể đào thải thuốc.

**Đáp số.** a) $2$ mg/L; b) tiến tới $0$.
:::

:::exercise
Một hình chữ nhật có diện tích $36$ m². Biểu diễn chiều dài $L$ theo chiều rộng $w$, và mô tả điều gì xảy ra với $L$ khi $w$ rất nhỏ.

::hint
**Kiến thức:** $Lw=36$.

::solution
Từ $Lw=36$, ta có $L=\dfrac{36}{w}$ với $w>0$.

Khi $w\to0^+$, $L=\dfrac{36}{w}\to\infty$: đồ thị có tiệm cận đứng $w=0$.

Vậy $L=\dfrac{36}{w}$, và một hình chữ nhật rất hẹp có diện tích $36$ m² thì phải rất dài.

**Đáp số.** $L=\dfrac{36}{w}$; $L\to\infty$ khi $w\to0^+$.
:::

:::exercise Thử thách
Viết một hàm phân thức có tiệm cận đứng $x=2$, tiệm cận ngang $y=3$ và một nghiệm tại $x=1$.

::hint
**Kiến thức:** đặt $x-2$ ở mẫu, $x-1$ ở tử, và chọn hệ số cao nhất để có tiệm cận ngang.

::solution
Nghiệm tại $x=1$ đòi hỏi tử có nhân tử $x-1$, còn tiệm cận đứng $x=2$ đòi hỏi mẫu có nhân tử $x-2$ không rút gọn được.

Khi tử và mẫu cùng bậc $1$, tiệm cận ngang là tỉ số các hệ số cao nhất, nên ta lấy hệ số $3$ ở tử:
$$r(x)=\frac{3(x-1)}{x-2}.$$

Kiểm tra: $r(1)=0$, mẫu bằng $0$ tại $x=2$, và tỉ số các hệ số cao nhất là $3$.

Vậy $r(x)=\dfrac{3(x-1)}{x-2}$ là một hàm số thoả mãn.

**Đáp số.** Chẳng hạn $r(x)=\dfrac{3(x-1)}{x-2}$.
:::

:::quiz
::mc
Đồ thị của $f(x)=\dfrac{x+1}{x^2-1}$ có tiệm cận đứng ở đâu?
A. $x=1$ và $x=-1$
B. Chỉ $x=1$
C. Chỉ $x=-1$
D. Không có
::key B
$\dfrac{x+1}{(x-1)(x+1)}$: nhân tử $x+1$ rút gọn được (điểm khuyết tại $x=-1$).

::mc
Tiệm cận ngang của $\dfrac{4x^2}{2x^2+1}$ là
A. $y=4$
B. $y=0$
C. $y=\dfrac12$
D. $y=2$
::key D
Cùng bậc: $\dfrac42=2$.

::mc
Đồ thị $y=f(x+3)$ có quan hệ thế nào với đồ thị $y=f(x)$?
A. Dời sang trái $3$ đơn vị
B. Dời sang phải $3$ đơn vị
C. Dời lên trên $3$ đơn vị
D. Dời xuống dưới $3$ đơn vị
::key A
Cộng thêm bên trong ngoặc thì đồ thị dời sang trái.

::mc
Đường thẳng nào là tiệm cận xiên của $\dfrac{x^3}{x^2+1}$?
A. $y=x^2$
B. $y=1$
C. $y=x$
D. $y=0$
::key C
$\dfrac{x^3}{x^2+1}=x-\dfrac{x}{x^2+1}$, và số hạng cuối tiến tới $0$.

::tf
Cho $r(x)=\dfrac{x-2}{x+1}$. Xét tính đúng sai của các mệnh đề sau:
a) $r$ có nghiệm tại $x=2$.
b) Đồ thị có tiệm cận đứng $x=-1$.
c) Đồ thị có tiệm cận ngang $y=1$.
d) $r(0)=2$.
::key T T T F
$r(0)=\dfrac{-2}{1}=-2$.

::sa
Đồ thị của $f(x)=\dfrac{x^2-1}{x-1}$ có điểm khuyết tại $x=1$. Tìm tung độ của điểm khuyết.
::key 2
Với $x\ne1$, $f(x)=x+1$, bằng $2$ tại $x=1$.

::sa
Tìm tiệm cận ngang $y=c$ của $\dfrac{6x+1}{3x-2}$. Cho biết $c$.
::key 2
$\dfrac63=2$.
:::
