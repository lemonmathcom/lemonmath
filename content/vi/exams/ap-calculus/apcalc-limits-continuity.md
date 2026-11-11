---
title: Giới hạn và tính liên tục
description: AP Calculus Unit 1: giới hạn một bên, các kĩ thuật tính giới hạn, sin x / x, giới hạn ở vô cực, các loại gián đoạn và định lí giá trị trung gian.
minutes: 40
---

:::goals
- Tìm giới hạn từ đồ thị, bảng giá trị và công thức, kể cả giới hạn một bên.
- Tính giới hạn bằng phân tích nhân tử, nhân liên hợp và dùng $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$.
- Tìm giới hạn ở vô cực, tiệm cận ngang và tiệm cận đứng của đồ thị.
- Xét tính liên tục, phân loại điểm gián đoạn và lập luận bằng định lí giá trị trung gian.
:::

Unit 1 là nền móng của AP Calculus: cả đạo hàm và tích phân đều được định nghĩa bằng giới hạn. Trong đề thi, giới hạn xuất hiện chủ yếu ở phần trắc nghiệm không dùng máy tính, còn tính liên tục xuất hiện trong câu tự luận yêu cầu **giải thích** (justify) một kết luận. Học sinh Việt Nam gặp các ý này ở lớp 11; kiểu đề AP bổ sung thuật ngữ chính xác và giới hạn một bên đọc từ đồ thị.

## Giới hạn và giới hạn một bên

$\displaystyle\lim_{x\to a}f(x)=L$ nghĩa là $f(x)$ gần $L$ bao nhiêu cũng được khi $x$ đủ gần $a$, **bất kể điều gì xảy ra tại chính $x=a$**. Giới hạn tồn tại khi và chỉ khi hai giới hạn một bên tồn tại và bằng nhau:

$$\lim_{x\to a}f(x)=L\iff\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L.$$

:::graph $y=\dfrac{x^2-9}{x-3}$ là đường thẳng $y=x+3$ bị khuyết tại $(3, 6)$
alt: Một đường thẳng đi lên có vòng tròn rỗng tại điểm (3, 6), cho thấy hàm số không xác định tại đó dù giới hạn bằng 6
x: -1..6
y: -1..10
plot: x + 3
open: (3, 6) "(3, 6)" left
:::

:::example Phân tích nhân tử
$\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}$ bằng
A. $0$
B. $3$
C. $6$
D. Giới hạn không tồn tại.

**Lời giải.** Thay trực tiếp được $\dfrac00$, dạng vô định, nên phải rút gọn trước: với $x\ne3$, $\dfrac{(x-3)(x+3)}{x-3}=x+3\to6$. Đáp án là **C**. Đồ thị bị khuyết tại $(3, 6)$: hàm số không xác định tại đó, nhưng giới hạn vẫn tồn tại.
:::

## Các kĩ thuật tính giới hạn

:::note Khi thay trực tiếp được $\dfrac00$
- **Phân tích nhân tử** rồi giản ước nhân tử chung.
- **Nhân liên hợp** với biểu thức chứa căn bậc hai.
- **Dùng giới hạn đặc biệt** $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$, và dạng mở rộng $\displaystyle\lim_{x\to0}\frac{\sin(kx)}{x}=k$.
:::

:::example Nhân liên hợp
Tính $\displaystyle\lim_{x\to4}\frac{\sqrt x-2}{x-4}$.

**Lời giải.** Nhân cả tử và mẫu với $\sqrt x+2$:

$$\frac{\sqrt x-2}{x-4}\cdot\frac{\sqrt x+2}{\sqrt x+2}=\frac{x-4}{(x-4)(\sqrt x+2)}=\frac{1}{\sqrt x+2}\to\frac14.$$

Giới hạn bằng $\dfrac14$. (Cách khác: $x-4=(\sqrt x-2)(\sqrt x+2)$.)
:::

:::example Giới hạn lượng giác đặc biệt
$\displaystyle\lim_{x\to0}\frac{\sin(3x)}{x}$ bằng
A. $0$
B. $\dfrac13$
C. $1$
D. $3$

**Lời giải.** $\dfrac{\sin(3x)}{x}=3\cdot\dfrac{\sin(3x)}{3x}\to3\cdot1=3$. Đáp án là **D**.
:::

## Giới hạn ở vô cực và tiệm cận

Với hàm phân thức, so sánh bậc của tử và mẫu khi $x\to\pm\infty$:

| Bậc | $\displaystyle\lim_{x\to\infty}$ | Tiệm cận ngang |
|---|---|---|
| tử < mẫu | $0$ | $y=0$ |
| tử = mẫu | tỉ số các hệ số cao nhất | $y=\dfrac{a}{b}$ |
| tử > mẫu | $\pm\infty$ | không có |

**Tiệm cận đứng** $x=a$ xuất hiện tại nơi mẫu bằng $0$ còn tử khác $0$ (sau khi đã giản ước nhân tử chung).

:::example Tiệm cận ngang
Tính $\displaystyle\lim_{x\to\infty}\frac{3x^2-5x}{2x^2+7}$.

**Lời giải.** Hai bậc bằng nhau, nên giới hạn là tỉ số các hệ số cao nhất, $\dfrac32$. Đồ thị có tiệm cận ngang $y=\dfrac32$.
:::

## Tính liên tục và định lí giá trị trung gian

:::theorem Liên tục tại một điểm
$f$ liên tục tại $x=a$ khi thoả mãn ba điều kiện: $f(a)$ xác định, $\displaystyle\lim_{x\to a}f(x)$ tồn tại, và $\displaystyle\lim_{x\to a}f(x)=f(a)$.

Điểm gián đoạn có thể **khử được** (removable, đồ thị bị khuyết: giới hạn tồn tại), **bước nhảy** (jump, hai giới hạn một bên khác nhau) hoặc **vô cực** (infinite, có tiệm cận đứng).
:::

:::example Làm cho hàm số từng khúc liên tục
$$f(x)=\begin{cases}kx+1, & x<2\\ x^2-1, & x\ge2\end{cases}$$
Với giá trị nào của $k$ thì $f$ liên tục tại $x=2$?

**Lời giải.** Giới hạn bên trái là $2k+1$; giới hạn bên phải và $f(2)$ đều bằng $3$. Liên tục đòi hỏi $2k+1=3$, nên $k=1$.
:::

:::theorem Định lí giá trị trung gian (IVT)
Nếu $f$ liên tục trên $[a; b]$ và $N$ là một số bất kì nằm giữa $f(a)$ và $f(b)$ thì tồn tại ít nhất một $c$ thuộc $(a; b)$ sao cho $f(c)=N$.
:::

:::example Dùng IVT
Hàm số $f$ liên tục trên $[1; 4]$, với $f(1)=-2$ và $f(4)=5$. Khẳng định nào chắc chắn đúng?
A. $f(c)=0$ với một $c$ nào đó thuộc $(1; 4)$.
B. $f$ đồng biến trên $[1; 4]$.
C. $f(c)=6$ với một $c$ nào đó thuộc $(1; 4)$.
D. $f'(c)=\dfrac73$ với một $c$ nào đó thuộc $(1; 4)$.

**Lời giải.** $0$ nằm giữa $-2$ và $5$, và $f$ liên tục, nên IVT cho **A**. Phương án D cần định lí giá trị trung bình, đòi hỏi $f$ có đạo hàm; điều đó không được cho. Trong bài tự luận, hãy viết: "Vì $f$ liên tục trên $[1; 4]$ và $f(1)<0<f(4)$, theo IVT tồn tại $c$ thuộc $(1; 4)$ sao cho $f(c)=0$."
:::

:::warning Những cái bẫy thường gặp
- **"Không xác định" không có nghĩa là "không có giới hạn".** Đồ thị bị khuyết tại $x=a$ vẫn có giới hạn.
- **Dùng IVT mà không nêu tính liên tục.** Luôn nêu $f$ liên tục trên đoạn đóng.
- **Quên giản ước trước khi tìm tiệm cận đứng.** $\dfrac{x+1}{x^2-1}$ bị khuyết tại $x=-1$, không có tiệm cận ở đó.
- **$\dfrac{\sin(kx)}{x}$ không tiến tới $1$.** Nó tiến tới $k$.
:::

:::tip Kiểm tra giới hạn bằng máy tính
Ở phần được dùng máy, một bảng giá trị với $x$ tiến về $a$ từ hai phía (ví dụ $2{,}99$; $2{,}999$ và $3{,}01$; $3{,}001$) là cách kiểm tra nhanh. Ở phần không dùng máy, hãy dựa vào biến đổi đại số.
:::

:::terms
- giới hạn | limit
- giới hạn một bên | one-sided limit
- dạng vô định | indeterminate form
- biểu thức liên hợp | conjugate
- tiệm cận ngang / tiệm cận đứng | horizontal / vertical asymptote
- liên tục | continuous
- gián đoạn khử được / bước nhảy / vô cực | removable / jump / infinite discontinuity
- định lí giá trị trung gian | intermediate value theorem
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
$\displaystyle\lim_{x\to4}\frac{x^2-4x}{x^2-16}$ bằng
A. $0$
B. $\dfrac12$
C. $1$
D. Giới hạn không tồn tại.

::hint
**Kiến thức:** phân tích tử và mẫu thành nhân tử.

**Gợi ý các bước:**
1. $x^2-4x=x(x-4)$ và $x^2-16=(x-4)(x+4)$.
2. Giản ước rồi thay số.

::solution
$\dfrac{x}{x+4}\to\dfrac48=\dfrac12$: đáp án **B**.
:::

:::exercise Tự luận
$$g(x)=\begin{cases}x+k, & x\le1\\ 2x^2, & x>1\end{cases}$$
Tìm $k$ để $g$ liên tục tại $x=1$, và giải thích.

::hint
**Kiến thức:** ba điều kiện của tính liên tục.

**Gợi ý các bước:**
1. $g(1)=1+k$ và giới hạn bên trái bằng $1+k$.
2. Giới hạn bên phải bằng $2$.

::solution
$g$ liên tục tại $1$ khi $\displaystyle\lim_{x\to1^-}g(x)=\lim_{x\to1^+}g(x)=g(1)$, tức là $1+k=2$, nên $k=1$.
:::

:::exercise Trắc nghiệm
$\displaystyle\lim_{x\to0}\frac{\sin(5x)}{2x}$ bằng
A. $\dfrac25$
B. $1$
C. $\dfrac52$
D. $5$

::hint
**Kiến thức:** $\dfrac{\sin(5x)}{2x}=\dfrac52\cdot\dfrac{\sin(5x)}{5x}$.

**Gợi ý các bước:**
1. Viết lại rồi dùng giới hạn đặc biệt.

::solution
$\dfrac52\cdot1=\dfrac52$: đáp án **C**.
:::

:::exercise Tự luận
Tính $\displaystyle\lim_{x\to9}\frac{x-9}{\sqrt x-3}$.

::hint
**Kiến thức:** $x-9=(\sqrt x-3)(\sqrt x+3)$.

**Gợi ý các bước:**
1. Phân tích tử thành hiệu hai bình phương.
2. Giản ước rồi thay số.

::solution
$\dfrac{(\sqrt x-3)(\sqrt x+3)}{\sqrt x-3}=\sqrt x+3\to6$.
:::

:::exercise Trắc nghiệm
$\displaystyle\lim_{x\to\infty}\frac{4x^3+1}{2x^3-x}$ bằng
A. $0$
B. $2$
C. $4$
D. $\infty$

::hint
**Kiến thức:** bậc bằng nhau: tỉ số các hệ số cao nhất.

**Gợi ý các bước:**
1. So sánh $4x^3$ và $2x^3$.

::solution
$\dfrac42=2$: đáp án **B**.
:::

## Bài tập vận dụng

:::exercise Tiệm cận và điểm khuyết
Tìm mọi tiệm cận đứng và điểm khuyết của đồ thị $y=\dfrac{x+1}{x^2-1}$.

::hint
**Kiến thức:** phân tích mẫu và giản ước nhân tử chung trước.

**Gợi ý các bước:**
1. $x^2-1=(x-1)(x+1)$.
2. Xét nghiệm nào của mẫu còn lại sau khi giản ước.

::solution
Với $x\ne\pm1$, $y=\dfrac{1}{x-1}$. Vậy $x=1$ là tiệm cận đứng, còn tại $x=-1$ đồ thị bị khuyết tại điểm $\left(-1; -\dfrac12\right)$.
:::

:::exercise Nghiệm theo IVT
Chứng minh phương trình $x^3+x-1=0$ có một nghiệm nằm giữa $0$ và $1$.

::hint
**Kiến thức:** IVT với hàm số liên tục $f(x)=x^3+x-1$.

**Gợi ý các bước:**
1. Tính $f(0)$ và $f(1)$.
2. Phát biểu định lí kèm điều kiện.

::solution
$f$ là đa thức nên liên tục trên $[0; 1]$. $f(0)=-1<0$ và $f(1)=1>0$. Theo IVT tồn tại $c$ thuộc $(0; 1)$ sao cho $f(c)=0$. (Máy tính cho $c\approx0{,}682$.)
:::

:::exercise Bước nhảy
$\displaystyle\lim_{x\to0}\frac{|x|}{x}$ có tồn tại không? Giải thích bằng giới hạn một bên.

::hint
**Kiến thức:** $|x|=x$ khi $x>0$ và $|x|=-x$ khi $x<0$.

**Gợi ý các bước:**
1. Tính cả hai giới hạn một bên.

::solution
Khi $x>0$ biểu thức bằng $1$; khi $x<0$ biểu thức bằng $-1$. Hai giới hạn một bên là $1$ và $-1$, khác nhau, nên giới hạn không tồn tại: đồ thị có bước nhảy tại $0$.
:::

:::exercise Thử thách
$$f(x)=\begin{cases}x^2, & x<1\\ ax+b, & 1\le x\le3\\ 12-x, & x>3\end{cases}$$
Tìm $a$ và $b$ để $f$ liên tục trên toàn bộ tập số thực.

::hint
**Kiến thức:** tính liên tục tại $x=1$ và tại $x=3$ cho hai phương trình.

**Gợi ý các bước:**
1. Tại $x=1$: $1=a+b$.
2. Tại $x=3$: $3a+b=9$.

::solution
Trừ hai phương trình: $2a=8$, nên $a=4$ và $b=-3$. Kiểm tra: tại $x=1$ hai vế đều bằng $1$; tại $x=3$ đều bằng $9$.
:::

:::quiz
::mc
$\displaystyle\lim_{x\to2}\left(x^2+3x\right)$ bằng
A. $4$
B. $6$
C. $10$
D. $12$
::key C
Hàm số liên tục, nên thay trực tiếp: $4+6=10$.

::mc
$\displaystyle\lim_{x\to0}\frac{\sin x}{4x}$ bằng
A. $\dfrac14$
B. $1$
C. $4$
D. $0$
::key A
$\dfrac14\cdot\dfrac{\sin x}{x}\to\dfrac14$.

::mc
Tiệm cận ngang của đồ thị $y=\dfrac{5x-1}{x+2}$ là
A. $y=-\dfrac12$
B. $y=5$
C. $y=-2$
D. $y=0$
::key B
Bậc bằng nhau: $\dfrac51=5$. Phương án C là tiệm cận đứng $x=-2$ bị viết thành $y$.

::mc
Tại $x=1$, hàm số $f(x)=\dfrac{x^2-1}{x-1}$ có
A. một tiệm cận đứng.
B. một điểm gián đoạn bước nhảy.
C. không có điểm gián đoạn.
D. một điểm gián đoạn khử được.
::key D
$f(1)$ không xác định, nhưng $\displaystyle\lim_{x\to1}f(x)=2$ tồn tại: đồ thị bị khuyết.

::tf
Cho $f(x)=\dfrac{x^2-x-6}{x-3}$.
a) $\displaystyle\lim_{x\to3}f(x)=5$.
b) $f(3)$ xác định.
c) $f$ có điểm gián đoạn khử được tại $x=3$.
d) Đường thẳng $x=3$ là tiệm cận đứng của đồ thị.
::key Đ S Đ S
a) Đúng: $f(x)=x+2$ khi $x\ne3$. b) Sai: mẫu bằng $0$. c) Đúng. d) Sai: giới hạn hữu hạn, nên đồ thị bị khuyết chứ không có tiệm cận.

::sa
Tính $\displaystyle\lim_{x\to-1}\frac{x^3+1}{x+1}$.
::key 3
$x^3+1=(x+1)(x^2-x+1)$, nên giới hạn bằng $1+1+1=3$.

::sa
$f(x)=kx^2$ khi $x\le2$ và $f(x)=x+6$ khi $x>2$. Với giá trị nào của $k$ thì $f$ liên tục tại $x=2$?
::key 2
$4k=8$, nên $k=2$.
:::
