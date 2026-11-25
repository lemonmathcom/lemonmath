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

Hàm số và đạo hàm có mặt ở cả ba phần của đề, nên ôn chắc chỗ này có lợi cho cả bài thi. Phần I có vài câu ngắn (đọc bảng biến thiên, tìm tiệm cận). Phần II thường có một câu đúng/sai về một hàm số. Phần III có một hai câu về giá trị lớn nhất, nhỏ nhất. Cộng lại, chủ đề này thường đáng khoảng $1{,}5$ đến $2{,}5$ điểm. Vậy cần nắm những gì để câu nào về hàm số cũng làm được?

Bài này không dạy lại từ đầu, mà gom những gì hay gặp nhất vào một chỗ. Nếu chỗ nào còn lơ mơ, bạn có thể quay lại các bài [cực trị](lesson:monotonicity-extrema), [giá trị lớn nhất, nhỏ nhất](lesson:max-min-values), [tiệm cận](lesson:asymptotes) và [khảo sát hàm số](lesson:graphing-functions) để xem kĩ hơn.

## Tính đơn điệu và cực trị

:::note Ghi nhớ
- Nếu $f'(x)\ge0$ với mọi $x$ thuộc khoảng $K$ và dấu bằng chỉ xảy ra tại hữu hạn điểm thì $f$ **đồng biến** trên $K$; nếu $f'(x)\le0$ (cùng điều kiện) thì $f$ **nghịch biến**.
- $f$ đạt **cực trị** tại $x_0$ khi $f'$ **đổi dấu** khi $x$ đi qua $x_0$: từ $+$ sang $-$ là cực đại, từ $-$ sang $+$ là cực tiểu.
- Nghiệm bội chẵn của $f'$ (như $(x-2)^2$) làm $f'$ bằng $0$ nhưng **không đổi dấu**, nên không phải điểm cực trị.
:::

Ở phần này, đề thường cho $f'(x)$ dưới dạng tích rồi hỏi khoảng đồng biến, nghịch biến hoặc số điểm cực trị. Cũng có khi đề cho hàm bậc ba, bậc bốn và hỏi giá trị cực đại, cực tiểu. Với dạng thứ nhất, mọi việc quy về một thao tác: xét dấu của đạo hàm. Vì sao? Vì đạo hàm dương thì hàm đi lên, đạo hàm âm thì hàm đi xuống, nên chỗ đạo hàm đổi dấu chính là chỗ hàm đổi chiều.

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

Câu đúng/sai có bốn ý, nhưng thường chỉ xoay quanh một hàm số. Vì vậy ta tính đạo hàm và các giá trị cực trị một lần, rồi dùng chung cho cả bốn ý.

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

Còn trên một **khoảng** thì không có đầu mút để so sánh, nên ta lập bảng biến thiên để xem hàm tăng giảm ra sao.
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

Chỗ này nhiều bạn hay nhầm: mẫu số bằng $0$ tại $x_0$ chưa chắc đã cho tiệm cận đứng. Nếu tử số cũng bằng $0$ tại đó, ta phải rút gọn trước. Sau khi rút gọn, $x_0$ có thể không còn là tiệm cận đứng.

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

Bảng biến thiên và đồ thị cho ta khá nhiều thông tin: khoảng đơn điệu, cực trị, giá trị lớn nhất, nhỏ nhất. Riêng **số nghiệm** của phương trình $f(x)=k$ thì cần nghĩ thêm một chút. Nghiệm của phương trình là hoành độ giao điểm, nên số nghiệm chính là số giao điểm của đồ thị với đường thẳng nằm ngang $y=k$. Bạn cứ hình dung kéo một thanh ngang lên xuống và đếm xem nó cắt đồ thị ở mấy chỗ.

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

Muốn biết một đồ thị cho trước là của hàm bậc ba $y=ax^3+bx^2+cx+d$ nào, ta lần lượt hỏi đồ thị ba câu. Nhánh bên phải đi lên hay đi xuống? Nếu đi lên thì $a>0$. Đồ thị cắt trục tung ở đâu? Giao điểm là $(0; d)$, nên ta đọc ngay được hệ số tự do. Hai điểm cực trị có hoành độ bằng bao nhiêu? Hai hoành độ ấy là nghiệm của $y'$.

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
- **Coi mọi nghiệm của $f'$ là cực trị.** Chỗ này nhiều bạn hay nhầm. Sai: "$f'=(x+1)(x-2)^2$ nên có $2$ điểm cực trị". Đúng: tại $x=2$, $f'$ không đổi dấu, nên chỉ có $1$ điểm cực trị.
- **Nhầm điểm cực trị với giá trị cực trị.** Điểm cực đại là $x_0$, giá trị cực đại là $f(x_0)$, điểm cực đại của đồ thị là $(x_0; f(x_0))$. Ba thứ này khác nhau, nên hãy đọc kĩ đề đang hỏi cái nào.
- **Quên đầu mút.** Trên một đoạn, giá trị lớn nhất có thể nằm ở đầu mút chứ không nhất thiết ở điểm cực đại, nên ta luôn tính cả hai đầu.
- **Không rút gọn trước khi tìm tiệm cận đứng.** Nghiệm chung của tử và mẫu có thể không cho tiệm cận nào cả, vì sau khi rút gọn nó biến mất khỏi mẫu.
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

Mỗi bài có phần kiến thức cần dùng và vài bước gợi ý để bạn bắt đầu. Bạn thử tự làm trước, rồi hãy bấm xem lời giải. Sai một lần rồi tự tìm ra chỗ sai thường nhớ lâu hơn là đọc lời giải ngay.

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
Hàm số xác định và có đạo hàm trên $\mathbb{R}$. Ta có
$$y'=4x^3-4x=4x\left(x^2-1\right)=4x(x-1)(x+1).$$

Suy ra $y'=0\iff x=-1$, $x=0$ hoặc $x=1$. Đây là ba nghiệm đơn (bội lẻ) nên $y'$ đổi dấu qua mỗi nghiệm. Ta có bảng xét dấu:

| $x$ | $-\infty$ | | $-1$ | | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $y'$ | | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |

Do đó hàm số có đúng ba điểm cực trị: $x=-1$ và $x=1$ là điểm cực tiểu, $x=0$ là điểm cực đại.

Vậy chọn **A**.

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
Hàm số xác định trên $\mathbb{R}\setminus\{2\}$.

Tiệm cận đứng: khi $x\to2$, mẫu $x-2\to0$ còn tử $3x-1\to3\cdot2-1=5\neq0$, nên $\lim\limits_{x\to2^{\pm}}y=\pm\infty$. Do đó đường thẳng $x=2$ là tiệm cận đứng.

Tiệm cận ngang: ta có
$$\lim_{x\to\pm\infty}\frac{3x-1}{x-2}=\lim_{x\to\pm\infty}\frac{3-\dfrac1x}{1-\dfrac2x}=3.$$
Do đó đường thẳng $y=3$ là tiệm cận ngang.

Vậy chọn **A**.

*Nhận xét.* Phương án C lấy nhầm tỉ số hai hệ số tự do $\dfrac{-1}{-2}$ làm tiệm cận ngang; tiệm cận ngang phải tính bằng giới hạn khi $x\to\pm\infty$.

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
Hàm số $y=x+\dfrac4x$ xác định và liên tục trên đoạn $[1; 5]$ (vì $x\neq0$). Ta có
$$y'=1-\frac{4}{x^2}=\frac{x^2-4}{x^2}.$$

Suy ra $y'=0\iff x=2$ hoặc $x=-2$. Chỉ có $x=2$ thuộc đoạn $[1; 5]$; loại $x=-2$.

Tính giá trị của hàm số tại hai đầu mút và tại điểm tới hạn:
$$y(1)=1+4=5,\qquad y(2)=2+2=4,\qquad y(5)=5+\frac45=5+0{,}8=5{,}8.$$

So sánh ba giá trị, ta được $M=5{,}8$ và $m=4$.

Vậy $M+m=5{,}8+4=9{,}8$.

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
Hàm số xác định trên $\mathbb{R}\setminus\{1\}$.

Thực hiện phép chia, ta có $x^2+x+1=(x-1)(x+2)+3$, nên
$$y=\frac{x^2+x+1}{x-1}=x+2+\frac{3}{x-1}.$$

Tiệm cận đứng: khi $x\to1^+$, tử $x^2+x+1\to3>0$ và mẫu $x-1\to0^+$, nên $y\to+\infty$. Do đó đường thẳng $x=1$ là tiệm cận đứng.

Tiệm cận xiên: khi $x\to\pm\infty$, ta có
$$y-(x+2)=\frac{3}{x-1}\to0.$$
Do đó đường thẳng $y=x+2$ là tiệm cận xiên.

Tiệm cận ngang: khi $x\to\pm\infty$ thì $y\to\pm\infty$ (giới hạn không hữu hạn), nên đồ thị không có tiệm cận ngang.

Vậy đồ thị có tiệm cận đứng $x=1$, tiệm cận xiên $y=x+2$ và không có tiệm cận ngang.

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
Vì $(x-1)^2\ge0$ và chỉ bằng $0$ khi $x=1$, nên với $x\neq1$ thì $f'(x)=x(x-1)^2(x+2)$ cùng dấu với $x(x+2)$. Ta có bảng xét dấu của $f'$:

| $x$ | $-\infty$ | | $-2$ | | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | $0$ | $+$ | |

Tức là $f'$ dương trên $(-\infty; -2)$, âm trên $(-2; 0)$, dương trên $(0; 1)$ và $(1; +\infty)$.

a) **Sai.** Tại $x=1$ thì $f'=0$ nhưng $f'$ không đổi dấu, nên $x=1$ không là điểm cực trị. Hàm số chỉ có hai điểm cực trị là $x=-2$ và $x=0$.

b) **Đúng.** Khi $x$ đi qua $0$, $f'$ đổi dấu từ $-$ sang $+$, nên hàm số đạt cực tiểu tại $x=0$.

c) **Đúng.** Trên $(0; +\infty)$ ta có $f'\ge0$ và $f'$ chỉ bằng $0$ tại $x=1$, nên hàm số đồng biến trên khoảng $(0; +\infty)$.

d) **Đúng.** Hàm số nghịch biến trên $(-2; 0)$ (vì $f'<0$ ở đó) và liên tục trên $[-2; 0]$. Vì $-2<-1<0$ nên $f(-1)>f(0)$.

Vậy các mệnh đề b), c), d) đúng; mệnh đề a) sai.

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
Gọi $C(t)$ (mg/l) là nồng độ thuốc sau $t$ giờ, $t\ge0$. Áp dụng quy tắc đạo hàm của một thương, ta có
$$C'(t)=\frac{5\left(t^2+4\right)-5t\cdot2t}{\left(t^2+4\right)^2}=\frac{5\left(4-t^2\right)}{\left(t^2+4\right)^2}.$$

Vì $5>0$ và $\left(t^2+4\right)^2>0$ nên $C'(t)$ cùng dấu với $4-t^2$. Với $t\ge0$: $C'(t)>0$ khi $0\le t<2$ và $C'(t)<0$ khi $t>2$; $C'(t)=0\iff t=2$.

Do đó $C$ tăng trên $[0; 2]$ và giảm trên $[2; +\infty)$, nên $C$ đạt giá trị lớn nhất tại $t=2$:
$$C(2)=\frac{5\cdot2}{2^2+4}=\frac{10}{8}=1{,}25.$$

Vậy nồng độ thuốc cao nhất là $1{,}25$ mg/l, đạt được sau $2$ giờ.

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
Phương trình $2f(x)+6=0$ tương đương với $f(x)=-3$. Số nghiệm của nó bằng số giao điểm của đồ thị $y=f(x)$ với đường thẳng $y=-3$. Ta xét từng khoảng theo bảng biến thiên.

Trên $(-\infty; 0)$: $f$ liên tục, đồng biến và đi từ $-\infty$ lên $1$. Vì $-3$ nằm giữa $-\infty$ và $1$ nên phương trình $f(x)=-3$ có đúng một nghiệm trên khoảng này.

Trên $[0; 2]$: $f$ nghịch biến từ $1$ xuống $-3$. Do đó $f(x)>-3$ với $0\le x<2$ và $f(2)=-3$, nên phương trình có đúng một nghiệm là $x=2$ (đường thẳng $y=-3$ chạm đồ thị tại điểm cực tiểu).

Trên $(2; +\infty)$: $f$ đồng biến từ $-3$ lên $+\infty$ nên $f(x)>-3$, phương trình không có nghiệm.

Tổng cộng phương trình có $1+1+0=2$ nghiệm.

Vậy chọn **B**.

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
Hàm số $y=\dfrac{x+1}{x-1}$ có đạo hàm
$$y'=\frac{1\cdot(x-1)-(x+1)\cdot1}{(x-1)^2}=\frac{-2}{(x-1)^2}<0\quad\text{với mọi}\ x\neq1.$$

a) **Đúng.** Hàm số xác định khi mẫu $x-1\neq0$, tức là $x\neq1$. Vậy tập xác định là $\mathbb{R}\setminus\{1\}$.

b) **Sai.** Vì $y'<0$ nên hàm số nghịch biến trên từng khoảng $(-\infty; 1)$ và $(1; +\infty)$. Tuy nhiên $0<2$ mà $y(0)=-1<y(2)=3$, nên hàm số không nghịch biến trên cả tập $\mathbb{R}\setminus\{1\}$ (hợp của hai khoảng).

c) **Đúng.** Khi $x\to1$, tử $x+1\to2\neq0$ và mẫu $\to0$, nên $x=1$ là tiệm cận đứng. Ta có $\lim\limits_{x\to\pm\infty}y=\lim\limits_{x\to\pm\infty}\dfrac{1+\frac1x}{1-\frac1x}=1$, nên $y=1$ là tiệm cận ngang. Giao điểm hai tiệm cận là $I(1; 1)$.

d) **Đúng.** Đoạn $[2; 4]$ nằm trong khoảng $(1; +\infty)$ nên hàm số nghịch biến trên $[2; 4]$. Do đó giá trị lớn nhất trên đoạn này là $y(2)=\dfrac{2+1}{2-1}=3$.

Vậy các mệnh đề a), c), d) đúng; mệnh đề b) sai.

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
Hàm số $y=\left(x^2-3\right)e^x$ liên tục trên đoạn $[0; 2]$. Áp dụng quy tắc đạo hàm của một tích, ta có
$$y'=2xe^x+\left(x^2-3\right)e^x=\left(x^2+2x-3\right)e^x=(x-1)(x+3)e^x.$$

Vì $e^x>0$ nên $y'=0\iff x=1$ hoặc $x=-3$. Chỉ có $x=1$ thuộc đoạn $[0; 2]$; loại $x=-3$.

Tính giá trị của hàm số tại hai đầu mút và tại điểm tới hạn:
$$y(0)=-3,\qquad y(1)=(1-3)e=-2e\approx-5{,}44,\qquad y(2)=(4-3)e^2=e^2\approx7{,}39.$$

So sánh ba giá trị, giá trị nhỏ nhất là $y(1)=-2e\approx-5{,}4$ (làm tròn đến hàng phần mười).

Vậy giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$ xấp xỉ $-5{,}4$.

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
Hàm số $y=ax^3+bx^2+cx+d$ có đạo hàm $y'=3ax^2+2bx+c$.

Đồ thị có điểm cực đại $(0; 2)$ nên $y(0)=2$ và $y'(0)=0$. Suy ra $d=2$ và $c=0$.

Đồ thị có điểm cực tiểu $(2; -2)$ nên $y'(2)=0$ và $y(2)=-2$.

Từ $y'(2)=0$: $12a+4b+c=0$, mà $c=0$ nên $12a+4b=0$, tức là $b=-3a$.

Từ $y(2)=-2$: $8a+4b+2c+d=-2$, mà $c=0$, $d=2$ nên $8a+4b+2=-2$, tức là $8a+4b=-4$. Thay $b=-3a$, ta được $8a-12a=-4$, suy ra $a=1$ và $b=-3$.

Kiểm tra: với $a=1$, $b=-3$, $c=0$, $d=2$ ta có $y=x^3-3x^2+2$ và $y'=3x^2-6x=3x(x-2)$. Đạo hàm $y'$ đổi dấu từ $+$ sang $-$ tại $x=0$ và từ $-$ sang $+$ tại $x=2$; ngoài ra $y(0)=2$, $y(2)=8-12+2=-2$ (thoả mãn).

Vậy $a=1$, $b=-3$, $c=0$, $d=2$.

**Đáp số.** $a=1$, $b=-3$, $c=0$, $d=2$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Hàm số $y=f(x)$ có đạo hàm $f'(x)=(x-1)(x+3)$. Hàm số đồng biến trên khoảng nào dưới đây?
A. $(-3; 1)$.
B. $(1; +\infty)$.
C. $(-\infty; 1)$.
D. $(-3; +\infty)$.
::key B
$f'(x)>0\iff x<-3$ hoặc $x>1$. Phương án A là khoảng hàm số nghịch biến; C và D chứa một phần của $(-3; 1)$, nơi $f'<0$.

::mc TH
Đồ thị hàm số $y=\dfrac{x+2}{x^2-4}$ có bao nhiêu tiệm cận đứng?
A. $2$.
B. $3$.
C. $0$.
D. $1$.
::key D
Với $x\ne-2$, $y=\dfrac{1}{x-2}$; khi $x\to-2$, $y\to-\dfrac14$ nên $x=-2$ không phải tiệm cận đứng. Chỉ còn $x=2$. Phương án A quên rút gọn.

::mc VD
Giá trị lớn nhất của hàm số $y=-x^3+3x+1$ trên đoạn $[0; 2]$ bằng
A. $3$.
B. $1$.
C. $-1$.
D. $2$.
::key A
$y'=-3x^2+3=0\iff x=1$ (loại $-1$). $y(0)=1$, $y(1)=3$, $y(2)=-1$. Phương án B là $y(0)$, phương án C là giá trị nhỏ nhất.

::mc NB
Hàm số $y=f(x)$ có bảng biến thiên:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | $\nearrow$ | $4$ | $\searrow$ | $0$ | $\nearrow$ | $+\infty$ |

Giá trị cực tiểu của hàm số bằng
A. $-1$.
B. $1$.
C. $0$.
D. $4$.
::key C
$f'$ đổi dấu từ $-$ sang $+$ tại $x=1$, giá trị cực tiểu là $f(1)=0$. Phương án B là điểm cực tiểu, D là giá trị cực đại, A là điểm cực đại.

::tf NB TH TH VD
Cho hàm số $f(x)=x^4-2x^2+3$.
a) $f'(x)=4x^3-4x$.
b) Hàm số có ba điểm cực trị.
c) Giá trị cực đại của hàm số bằng $2$.
d) Giá trị nhỏ nhất của hàm số trên $\mathbb{R}$ bằng $2$.
::key Đ Đ S Đ
a) Đúng. b) Đúng: $f'=4x(x-1)(x+1)$ đổi dấu qua ba nghiệm. c) Sai: cực đại tại $x=0$, giá trị $3$; số $2$ là giá trị cực tiểu. d) Đúng: $f(\pm1)=2$ và $f(x)-2=(x^2-1)^2\ge0$.

::sa TH
Hai đường tiệm cận của đồ thị hàm số $y=\dfrac{2x+1}{x-3}$ cắt nhau tại điểm $I(a; b)$. Tính $a+b$.
::key 5
Tiệm cận đứng $x=3$, tiệm cận ngang $y=2$, nên $I(3; 2)$ và $a+b=5$.

::sa VD
Gọi $M$, $m$ là giá trị lớn nhất và nhỏ nhất của $y=x+\dfrac1x$ trên đoạn $\left[\dfrac12; 3\right]$. Tính $M+m$ (làm tròn kết quả đến hàng phần mười).
::key 5,3
$y'=1-\dfrac{1}{x^2}=0\iff x=1$. $y\left(\dfrac12\right)=2{,}5$, $y(1)=2$, $y(3)=\dfrac{10}{3}$. Vậy $M+m=\dfrac{10}{3}+2=\dfrac{16}{3}\approx5{,}3$.
:::
