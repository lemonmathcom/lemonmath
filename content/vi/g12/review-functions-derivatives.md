---
title: "Ôn tập: đạo hàm và khảo sát hàm số"
description: Ôn tính đơn điệu, cực trị, giá trị lớn nhất và nhỏ nhất, tiệm cận, bảng biến thiên và đọc đồ thị theo đúng dạng câu hỏi của đề thi tốt nghiệp THPT.
minutes: 40
---

:::goals
- Xét tính đơn điệu và tìm cực trị từ công thức của $f(x)$, từ $f'(x)$ hoặc từ bảng biến thiên.
- Tìm giá trị lớn nhất, nhỏ nhất của hàm số trên một đoạn và trên một khoảng.
- Tìm tiệm cận đứng, ngang, xiên của đồ thị hàm phân thức.
- Đọc bảng biến thiên, đồ thị; đếm số nghiệm của phương trình $f(x)=k$; nhận dạng hàm số từ đồ thị.
:::

Chủ đề này thường có mặt ở cả ba phần của đề: vài câu ngắn ở Phần I (đọc bảng biến thiên, tìm tiệm cận), thường một câu đúng/sai về một hàm số ở Phần II, và một hai câu giá trị lớn nhất, nhỏ nhất ở Phần III, tổng cộng thường khoảng $1{,}5$ đến $2{,}5$ điểm.

Chi tiết nằm ở các bài [cực trị](lesson:monotonicity-extrema), [giá trị lớn nhất, nhỏ nhất](lesson:max-min-values), [tiệm cận](lesson:asymptotes) và [khảo sát hàm số](lesson:graphing-functions).

## Tính đơn điệu và cực trị

:::note Ghi nhớ
- Nếu $f'(x)\ge0$ với mọi $x$ thuộc khoảng $K$ và dấu bằng chỉ xảy ra tại hữu hạn điểm thì $f$ **đồng biến** trên $K$; nếu $f'(x)\le0$ (cùng điều kiện) thì $f$ **nghịch biến**.
- $f$ đạt **cực trị** tại $x_0$ khi $f'$ **đổi dấu** khi $x$ đi qua $x_0$: từ $+$ sang $-$ là cực đại, từ $-$ sang $+$ là cực tiểu.
- Nghiệm bội chẵn của $f'$ (như $(x-2)^2$) làm $f'$ bằng $0$ nhưng **không đổi dấu**, nên không phải điểm cực trị.
:::

Dạng câu hỏi thường gặp: cho $f'(x)$ dạng tích, hỏi khoảng đồng biến, nghịch biến hoặc số điểm cực trị; cho hàm bậc ba, bậc bốn, hỏi giá trị cực đại, cực tiểu.

:::example Trắc nghiệm: đọc dấu của đạo hàm
Hàm số $y=f(x)$ có đạo hàm $f'(x)=(x+1)(x-2)^2$ với mọi $x\in\mathbb{R}$. Hàm số nghịch biến trên khoảng nào dưới đây?
A. $(-\infty; -1)$.
B. $(-1; 2)$.
C. $(2; +\infty)$.
D. $(-1; +\infty)$.

**Lời giải.** Vì $(x-2)^2\ge0$, dấu của $f'(x)$ là dấu của $x+1$ (trừ tại $x=2$, nơi $f'=0$):

$$f'(x)<0\iff x<-1,\qquad f'(x)\ge0\ \text{khi}\ x\ge-1.$$

Vậy hàm số nghịch biến trên $(-\infty; -1)$, chọn **A**. Hàm số chỉ có một điểm cực trị là $x=-1$; tại $x=2$ đạo hàm không đổi dấu.
:::

Với câu đúng/sai, ta tính đạo hàm và các giá trị cực trị một lần cho cả bốn ý.

:::example Đúng/sai: một hàm bậc ba
Cho hàm số $f(x)=-x^3+3x^2+9x-2$.
a) Hàm số đồng biến trên khoảng $(-1; 3)$.
b) Hàm số đạt cực đại tại $x=-1$.
c) Giá trị cực đại của hàm số bằng $25$.
d) Đường thẳng đi qua hai điểm cực trị của đồ thị có hệ số góc bằng $8$.

**Lời giải.** Ta tính đạo hàm và các giá trị tại nghiệm:

$$f'(x)=-3x^2+6x+9=-3(x+1)(x-3);\qquad f(-1)=-7,\quad f(3)=25.$$

Hệ số $-3<0$ nên $f'>0$ giữa hai nghiệm và $f'<0$ ở ngoài.

a) **Đúng**: $f'(x)>0$ với $-1<x<3$.

b) **Sai**: $f'$ đổi dấu từ $-$ sang $+$ tại $x=-1$, đó là điểm cực tiểu.

c) **Đúng**: cực đại tại $x=3$, giá trị cực đại $f(3)=-27+27+27-2=25$.

d) **Đúng**: hai điểm cực trị là $(-1; -7)$ và $(3; 25)$, hệ số góc $\dfrac{25-(-7)}{3-(-1)}=\dfrac{32}{4}=8$.

Đáp án: Đ S Đ Đ.
:::

## Giá trị lớn nhất và giá trị nhỏ nhất

:::note Quy trình trên đoạn $[a; b]$
1. Tìm các điểm thuộc **khoảng** $(a; b)$ tại đó $f'(x)=0$ hoặc $f'(x)$ không xác định.
2. Tính $f$ tại các điểm đó và tại $a$, $b$.
3. Số lớn nhất là $\max\limits_{[a; b]}f$, số nhỏ nhất là $\min\limits_{[a; b]}f$.

Trên một **khoảng**, ta lập bảng biến thiên.
:::

:::example Trả lời ngắn: tổng giá trị lớn nhất và nhỏ nhất
Gọi $M$, $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của $f(x)=x^3-3x^2-9x+5$ trên đoạn $[-2; 4]$. Tính $M+m$.

**Lời giải.** Ta giải $f'(x)=0$ và giữ các nghiệm thuộc $(-2; 4)$:

$$f'(x)=3x^2-6x-9=3(x+1)(x-3)=0\iff x=-1\ \text{hoặc}\ x=3.$$

So sánh bốn giá trị:

$$f(-2)=3,\qquad f(-1)=10,\qquad f(3)=-22,\qquad f(4)=-15.$$

Vậy $M=10$, $m=-22$ và $M+m=-12$. Đáp số ghi vào phiếu: $-12$.
:::

## Tiệm cận

:::note Ghi nhớ
- $x=x_0$ là **tiệm cận đứng** nếu $\lim\limits_{x\to x_0^+}f(x)$ hoặc $\lim\limits_{x\to x_0^-}f(x)$ bằng $\pm\infty$.
- $y=b$ là **tiệm cận ngang** nếu $\lim\limits_{x\to+\infty}f(x)=b$ hoặc $\lim\limits_{x\to-\infty}f(x)=b$.
- $y=ax+b$ ($a\ne0$) là **tiệm cận xiên** nếu $\lim\limits_{x\to\pm\infty}\left[f(x)-(ax+b)\right]=0$. Với $y=\dfrac{x^2+x+1}{x-1}=x+2+\dfrac{3}{x-1}$, tiệm cận xiên là $y=x+2$.
- Với $y=\dfrac{ax+b}{cx+d}$ ($c\ne0$, $ad-bc\ne0$): tiệm cận đứng $x=-\dfrac dc$, tiệm cận ngang $y=\dfrac ac$.
:::

Bẫy hay gặp: mẫu số bằng $0$ tại $x_0$ nhưng tử số cũng bằng $0$ tại đó; sau khi rút gọn, $x_0$ có thể không còn là tiệm cận đứng.

:::example Trắc nghiệm: đếm tiệm cận
Đồ thị hàm số $y=\dfrac{x^2-1}{x^2-3x+2}$ có tất cả bao nhiêu đường tiệm cận đứng và tiệm cận ngang?
A. $2$.
B. $3$.
C. $1$.
D. $4$.

**Lời giải.** Phân tích tử và mẫu rồi rút gọn với $x\ne1$:

$$y=\frac{(x-1)(x+1)}{(x-1)(x-2)}=\frac{x+1}{x-2}\quad(x\ne1).$$

Khi $x\to1$, $y\to-2$ (hữu hạn), nên $x=1$ không phải tiệm cận đứng. Khi $x\to2^+$, $y\to+\infty$, nên $x=2$ là tiệm cận đứng. Khi $x\to\pm\infty$, $y\to1$, nên $y=1$ là tiệm cận ngang.

Vậy có $2$ đường tiệm cận, chọn **A**. Phương án B tính nhầm cả $x=1$.
:::

## Bảng biến thiên và đọc đồ thị

Từ bảng biến thiên hoặc đồ thị, ta đọc được khoảng đơn điệu, cực trị, giá trị lớn nhất, nhỏ nhất và **số nghiệm** của phương trình $f(x)=k$: đó là số giao điểm của đồ thị với đường thẳng nằm ngang $y=k$.

:::example Đúng/sai: đọc bảng biến thiên
Cho hàm số $y=f(x)$ liên tục trên $\mathbb{R}$ và có bảng biến thiên:

| $x$ | $-\infty$ | | $-1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $3$ | $\searrow$ | $-2$ | $\nearrow$ | $+\infty$ |

a) Giá trị cực đại của hàm số bằng $3$.
b) Hàm số đồng biến trên khoảng $(-1; +\infty)$.
c) Phương trình $f(x)=1$ có ba nghiệm phân biệt.
d) Phương trình $f(x)=3$ có ba nghiệm phân biệt.

**Lời giải.** a) **Đúng**: $f'$ đổi dấu từ $+$ sang $-$ tại $x=-1$, giá trị cực đại là $3$.

b) **Sai**: trên $(-1; 2)$ hàm số nghịch biến.

c) **Đúng**: vì $-2<1<3$, đường thẳng $y=1$ cắt đồ thị một lần trên mỗi khoảng $(-\infty; -1)$, $(-1; 2)$, $(2; +\infty)$.

d) **Sai**: đường thẳng $y=3$ chỉ chạm đồ thị tại điểm cực đại $x=-1$ và cắt thêm một lần trên $(2; +\infty)$, tức là $2$ nghiệm.

Đáp án: Đ S Đ S.
:::

Để nhận dạng hàm bậc ba $y=ax^3+bx^2+cx+d$ từ đồ thị, ta kiểm tra lần lượt: nhánh phải đi lên thì $a>0$; giao điểm với trục tung là $(0; d)$; hoành độ hai điểm cực trị là nghiệm của $y'$.

:::graph Đồ thị của một hàm bậc ba
alt: Đồ thị hàm bậc ba đi lên đến điểm cực đại (1; 3), đi xuống đến điểm cực tiểu (3; -1) rồi đi lên, cắt trục tung tại (0; -1)
x: -1..5
y: -3..5
plot: x^3 - 6x^2 + 9x - 1 ; -0.3..4.3
point: (1, 3) "(1; 3)" above
point: (3, -1) "(3; -1)" below
point: (0, -1) "(0; -1)" left
:::

:::example Trắc nghiệm: nhận dạng đồ thị
Đường cong trong hình trên là đồ thị của hàm số nào?
A. $y=x^3-6x^2+9x-1$.
B. $y=-x^3+6x^2-9x+1$.
C. $y=x^3-6x^2+9x+1$.
D. $y=x^3+6x^2+9x-1$.

**Lời giải.** Ta loại dần bằng các đặc điểm đọc từ hình. Nhánh phải đi lên nên $a>0$: loại B. Đồ thị cắt trục tung tại $(0; -1)$ nên $d=-1$: loại C. Với D, $y'=3(x+1)(x+3)$ có nghiệm âm, trái với hình (cực trị tại $x=1$ và $x=3$): loại D.

Kiểm tra A: $y'=3(x-1)(x-3)$, $y(1)=3$, $y(3)=-1$, khớp với hình. Chọn **A**.
:::

:::warning Những sai lầm thường gặp
- **Coi mọi nghiệm của $f'$ là cực trị.** Sai: "$f'=(x+1)(x-2)^2$ nên có $2$ điểm cực trị". Đúng: tại $x=2$, $f'$ không đổi dấu; chỉ có $1$ điểm cực trị.
- **Nhầm điểm cực trị với giá trị cực trị.** Điểm cực đại là $x_0$, giá trị cực đại là $f(x_0)$, điểm cực đại của đồ thị là $(x_0; f(x_0))$. Đọc kĩ đề hỏi cái nào.
- **Quên đầu mút.** Giá trị lớn nhất trên đoạn có thể đạt tại đầu mút, không nhất thiết tại điểm cực đại.
- **Không rút gọn trước khi tìm tiệm cận đứng.** Nghiệm chung của tử và mẫu có thể không phải tiệm cận.
:::

## Thuật ngữ

:::terms
- đồng biến / nghịch biến | increasing / decreasing
- điểm cực đại / cực tiểu | local maximum / local minimum point
- giá trị cực trị | turning value (local extreme value)
- giá trị lớn nhất / nhỏ nhất | maximum / minimum value
- tiệm cận đứng / ngang / xiên | vertical / horizontal / oblique asymptote
- bảng biến thiên | table of variations
- nghiệm bội chẵn | repeated root of even multiplicity
- hệ số góc | gradient
- đoạn / khoảng | closed interval / open interval
:::

## Bài tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise Trắc nghiệm
Hàm số $y=x^4-2x^2+1$ có bao nhiêu điểm cực trị?
A. $3$.
B. $1$.
C. $2$.
D. $0$.

::hint
**Kiến thức:** điểm cực trị là nghiệm của $y'$ mà tại đó $y'$ đổi dấu.

**Gợi ý các bước:**
1. Phân tích $y'=4x^3-4x$.
2. Xét dấu qua từng nghiệm.

::solution
$y'=4x(x-1)(x+1)$ có ba nghiệm đơn $-1$, $0$, $1$, và $y'$ đổi dấu qua mỗi nghiệm.

**Đáp số.** A.
:::

:::exercise Trắc nghiệm
Đồ thị hàm số $y=\dfrac{3x-1}{x-2}$ có tiệm cận đứng và tiệm cận ngang lần lượt là
A. $x=2$ và $y=3$.
B. $x=-2$ và $y=3$.
C. $x=2$ và $y=\dfrac12$.
D. $x=3$ và $y=2$.

::hint
**Kiến thức:** $y=\dfrac{ax+b}{cx+d}$ có tiệm cận đứng $x=-\dfrac dc$ và tiệm cận ngang $y=\dfrac ac$.

**Gợi ý các bước:**
1. Tìm nghiệm của mẫu và kiểm tra tử khác $0$ tại đó.
2. Lấy tỉ số hai hệ số của $x$.

::solution
Mẫu bằng $0$ tại $x=2$, tử bằng $5\ne0$, nên $x=2$ là tiệm cận đứng. $\lim\limits_{x\to\pm\infty}y=3$. Phương án C lấy tỉ số hai hệ số tự do $\dfrac{-1}{-2}$.

**Đáp số.** A.
:::

:::exercise Trả lời ngắn
Gọi $M$, $m$ là giá trị lớn nhất và giá trị nhỏ nhất của $y=x+\dfrac4x$ trên đoạn $[1; 5]$. Tính $M+m$.

::hint
**Kiến thức:** so sánh giá trị tại nghiệm của $y'$ thuộc $(1; 5)$ và tại hai đầu mút.

**Gợi ý các bước:**
1. Giải $y'=1-\dfrac{4}{x^2}=0$.
2. Tính $y(1)$, $y(2)$, $y(5)$.

::solution
$y'=0\iff x=2$ (loại $x=-2$). $y(1)=5$, $y(2)=4$, $y(5)=5+0{,}8=5{,}8$. Vậy $M=5{,}8$, $m=4$.

**Đáp số.** $9{,}8$.
:::

:::exercise Tự luận
Tìm các đường tiệm cận của đồ thị hàm số $y=\dfrac{x^2+x+1}{x-1}$.

::hint
**Kiến thức:** chia tử cho mẫu để viết $y=ax+b+\dfrac{r}{x-1}$.

**Gợi ý các bước:**
1. Thực hiện phép chia đa thức.
2. Xét giới hạn khi $x\to1^\pm$ và hiệu $y-(ax+b)$ khi $x\to\pm\infty$.

::solution
Phép chia cho $x^2+x+1=(x-1)(x+2)+3$, nên $y=x+2+\dfrac{3}{x-1}$. Khi $x\to1^+$, $y\to+\infty$, nên $x=1$ là tiệm cận đứng. Khi $x\to\pm\infty$, $y-(x+2)=\dfrac{3}{x-1}\to0$, nên $y=x+2$ là tiệm cận xiên. Đồ thị không có tiệm cận ngang vì $y\to\pm\infty$.

**Đáp số.** Tiệm cận đứng $x=1$, tiệm cận xiên $y=x+2$.
:::

:::exercise Đúng/Sai
Hàm số $y=f(x)$ có đạo hàm $f'(x)=x(x-1)^2(x+2)$ với mọi $x\in\mathbb{R}$.

a) Hàm số có ba điểm cực trị.

b) Hàm số đạt cực tiểu tại $x=0$.

c) Hàm số đồng biến trên khoảng $(0; +\infty)$.

d) $f(-1)>f(0)$.

::hint
**Kiến thức:** nghiệm bội chẵn không làm $f'$ đổi dấu.

**Gợi ý các bước:**
1. Lập bảng xét dấu $f'$ với các nghiệm $-2$, $0$, $1$.
2. Xét từng ý.

::solution
Dấu của $f'$: dương trên $(-\infty; -2)$, âm trên $(-2; 0)$, dương trên $(0; 1)$ và $(1; +\infty)$.

a) **Sai**: tại $x=1$ không đổi dấu; chỉ có hai điểm cực trị $x=-2$ và $x=0$.

b) **Đúng**: $f'$ đổi dấu từ $-$ sang $+$ tại $x=0$.

c) **Đúng**: $f'\ge0$ trên $(0; +\infty)$ và chỉ bằng $0$ tại $x=1$.

d) **Đúng**: $f$ nghịch biến trên $(-2; 0)$ và $-1<0$.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Đúng.
:::

:::exercise Trả lời ngắn
Nồng độ một loại thuốc trong máu sau khi uống $t$ giờ là $C(t)=\dfrac{5t}{t^2+4}$ (mg/l), $t\ge0$. Nồng độ cao nhất bằng bao nhiêu mg/l?

::hint
**Kiến thức:** đạo hàm của thương $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$; giá trị lớn nhất trên nửa khoảng $[0; +\infty)$.

**Gợi ý các bước:**
1. Tính $C'(t)$ và tìm nghiệm dương.
2. Xét dấu $C'$, chú ý $C(0)=0$ và $C(t)\to0$ khi $t\to+\infty$.

::solution
$$C'(t)=\frac{5(t^2+4)-5t\cdot2t}{(t^2+4)^2}=\frac{5(4-t^2)}{(t^2+4)^2}.$$
Với $t\ge0$, $C'>0$ khi $t<2$ và $C'<0$ khi $t>2$. Nồng độ cao nhất là $C(2)=\dfrac{10}{8}=1{,}25$ mg/l, sau $2$ giờ.

**Đáp số.** $1{,}25$.
:::

:::exercise Trắc nghiệm
Hàm số $y=f(x)$ liên tục trên $\mathbb{R}$ có bảng biến thiên:

| $x$ | $-\infty$ | | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $1$ | $\searrow$ | $-3$ | $\nearrow$ | $+\infty$ |

Số nghiệm của phương trình $2f(x)+6=0$ là
A. $1$.
B. $2$.
C. $3$.
D. $0$.

::hint
**Kiến thức:** số nghiệm của $f(x)=k$ là số giao điểm của đồ thị với đường thẳng $y=k$.

**Gợi ý các bước:**
1. Đưa về $f(x)=-3$.
2. Đọc bảng: $-3$ là giá trị cực tiểu.

::solution
$2f(x)+6=0\iff f(x)=-3$. Đường thẳng $y=-3$ chạm đồ thị tại điểm cực tiểu $x=2$ và cắt nhánh trái một lần trên $(-\infty; 0)$ (vì $f$ tăng từ $-\infty$ lên $1$). Không cắt trên $(2; +\infty)$ vì ở đó $f>-3$.

**Đáp số.** B.
:::

:::exercise Đúng/Sai
Cho hàm số $y=\dfrac{x+1}{x-1}$.

a) Tập xác định của hàm số là $\mathbb{R}\setminus\{1\}$.

b) Hàm số nghịch biến trên $\mathbb{R}\setminus\{1\}$.

c) Giao điểm hai tiệm cận của đồ thị là $I(1; 1)$.

d) Giá trị lớn nhất của hàm số trên đoạn $[2; 4]$ bằng $3$.

::hint
**Kiến thức:** $y=\dfrac{ax+b}{cx+d}$ có $y'=\dfrac{ad-bc}{(cx+d)^2}$; tính đơn điệu chỉ nói trên từng khoảng.

**Gợi ý các bước:**
1. Tính $y'$.
2. Tìm hai tiệm cận và so sánh $y(2)$, $y(4)$.

::solution
$y'=\dfrac{-1-1}{(x-1)^2}=\dfrac{-2}{(x-1)^2}<0$ với mọi $x\ne1$.

a) **Đúng**: mẫu bằng $0$ chỉ tại $x=1$.

b) **Sai**: hàm số nghịch biến trên từng khoảng $(-\infty; 1)$ và $(1; +\infty)$, nhưng $y(0)=-1<y(2)=3$ nên không nghịch biến trên cả hợp.

c) **Đúng**: tiệm cận đứng $x=1$, tiệm cận ngang $y=1$.

d) **Đúng**: hàm số nghịch biến trên $[2; 4]$ nên giá trị lớn nhất là $y(2)=3$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Đúng.
:::

:::exercise Trả lời ngắn
Tìm giá trị nhỏ nhất của hàm số $y=(x^2-3)e^x$ trên đoạn $[0; 2]$ (làm tròn kết quả đến hàng phần mười).

::hint
**Kiến thức:** $(uv)'=u'v+uv'$ và $(e^x)'=e^x$.

**Gợi ý các bước:**
1. Tính $y'=(x^2+2x-3)e^x$ và giải $y'=0$ trên $(0; 2)$.
2. So sánh với $y(0)$, $y(2)$.

::solution
$y'=2xe^x+(x^2-3)e^x=(x-1)(x+3)e^x=0\iff x=1$ (loại $x=-3$). $y(0)=-3$, $y(1)=-2e\approx-5{,}44$, $y(2)=e^2\approx7{,}39$. Giá trị nhỏ nhất là $-2e\approx-5{,}4$.

**Đáp số.** $-5{,}4$.
:::

:::exercise Thử thách
Đồ thị hàm số $y=ax^3+bx^2+cx+d$ có điểm cực đại $(0; 2)$ và điểm cực tiểu $(2; -2)$. Tìm $a$, $b$, $c$, $d$.

::hint
**Kiến thức:** tại điểm cực trị $x_0$ thì $y'(x_0)=0$; điểm cực trị nằm trên đồ thị.

**Gợi ý các bước:**
1. Viết bốn phương trình: $y(0)=2$, $y'(0)=0$, $y(2)=-2$, $y'(2)=0$.
2. Giải hệ rồi kiểm tra lại loại cực trị.

::solution
$y'=3ax^2+2bx+c$. Từ $y(0)=2$ và $y'(0)=0$: $d=2$, $c=0$. Từ $y'(2)=0$: $12a+4b=0$, tức $b=-3a$. Từ $y(2)=-2$: $8a+4b+2=-2$, tức $8a-12a=-4$, nên $a=1$, $b=-3$.

**Kiểm tra.** $y=x^3-3x^2+2$, $y'=3x(x-2)$ đổi dấu từ $+$ sang $-$ tại $0$ và từ $-$ sang $+$ tại $2$; $y(0)=2$, $y(2)=-2$.

**Đáp số.** $a=1$, $b=-3$, $c=0$, $d=2$.
:::

## Kiểm tra mini

:::quiz
::mc
Hàm số $y=f(x)$ có đạo hàm $f'(x)=(x-1)(x+3)$. Hàm số đồng biến trên khoảng nào dưới đây?
A. $(1; +\infty)$.
B. $(-3; 1)$.
C. $(-\infty; 1)$.
D. $(-3; +\infty)$.
::key A
$f'(x)>0\iff x<-3$ hoặc $x>1$. Phương án B là khoảng hàm số nghịch biến; C và D chứa một phần của $(-3; 1)$, nơi $f'<0$.

::mc
Đồ thị hàm số $y=\dfrac{x+2}{x^2-4}$ có bao nhiêu tiệm cận đứng?
A. $1$.
B. $2$.
C. $0$.
D. $3$.
::key A
Với $x\ne-2$, $y=\dfrac{1}{x-2}$; khi $x\to-2$, $y\to-\dfrac14$ nên $x=-2$ không phải tiệm cận đứng. Chỉ còn $x=2$. Phương án B quên rút gọn.

::mc
Giá trị lớn nhất của hàm số $y=-x^3+3x+1$ trên đoạn $[0; 2]$ bằng
A. $3$.
B. $1$.
C. $-1$.
D. $2$.
::key A
$y'=-3x^2+3=0\iff x=1$ (loại $-1$). $y(0)=1$, $y(1)=3$, $y(2)=-1$. Phương án B là $y(0)$, phương án C là giá trị nhỏ nhất.

::mc
Hàm số $y=f(x)$ có bảng biến thiên:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $4$ | $\searrow$ | $0$ | $\nearrow$ | $+\infty$ |

Giá trị cực tiểu của hàm số bằng
A. $0$.
B. $1$.
C. $4$.
D. $-1$.
::key A
$f'$ đổi dấu từ $-$ sang $+$ tại $x=1$, giá trị cực tiểu là $f(1)=0$. Phương án B là điểm cực tiểu, C là giá trị cực đại, D là điểm cực đại.

::tf
Cho hàm số $f(x)=x^4-2x^2+3$.
a) $f'(x)=4x^3-4x$.
b) Hàm số có ba điểm cực trị.
c) Giá trị cực đại của hàm số bằng $2$.
d) Giá trị nhỏ nhất của hàm số trên $\mathbb{R}$ bằng $2$.
::key Đ Đ S Đ
a) Đúng. b) Đúng: $f'=4x(x-1)(x+1)$ đổi dấu qua ba nghiệm. c) Sai: cực đại tại $x=0$, giá trị $3$; số $2$ là giá trị cực tiểu. d) Đúng: $f(\pm1)=2$ và $f(x)-2=(x^2-1)^2\ge0$.

::sa
Hai đường tiệm cận của đồ thị hàm số $y=\dfrac{2x+1}{x-3}$ cắt nhau tại điểm $I(a; b)$. Tính $a+b$.
::key 5
Tiệm cận đứng $x=3$, tiệm cận ngang $y=2$, nên $I(3; 2)$ và $a+b=5$.

::sa
Gọi $M$, $m$ là giá trị lớn nhất và nhỏ nhất của $y=x+\dfrac1x$ trên đoạn $\left[\dfrac12; 3\right]$. Tính $M+m$ (làm tròn kết quả đến hàng phần mười).
::key 5,3
$y'=1-\dfrac{1}{x^2}=0\iff x=1$. $y\left(\dfrac12\right)=2{,}5$, $y(1)=2$, $y(3)=\dfrac{10}{3}$. Vậy $M+m=\dfrac{10}{3}+2=\dfrac{16}{3}\approx5{,}3$.
:::
