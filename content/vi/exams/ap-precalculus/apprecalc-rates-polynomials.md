---
title: Tốc độ thay đổi và hàm đa thức
description: AP Precalculus Unit 1, phần 1: tốc độ thay đổi trung bình, tính lồi lõm từ bảng, dáng điệu ở vô cực, nghiệm và bội, lập đa thức, sai phân hữu hạn.
minutes: 45
---

:::goals
- Tính tốc độ thay đổi trung bình từ công thức, bảng và đồ thị, và dùng nó để mô tả cách hàm số thay đổi.
- Xác định đồ thị lõm lên hay lõm xuống từ các tốc độ thay đổi.
- Mô tả dáng điệu ở vô cực của đa thức từ số hạng bậc cao nhất.
- Dùng các nghiệm và bội của chúng để phác hoạ đồ thị và lập đa thức từ dữ kiện cho trước.
- Nhận ra mô hình đa thức từ sai phân hữu hạn không đổi.
:::

AP Precalculus mở đầu bằng một câu hỏi xuyên suốt cả môn học: một đại lượng đang thay đổi nhanh đến mức nào, và tốc độ đó đang tăng hay giảm? Đa thức là họ hàm số đầu tiên được nghiên cứu theo cách này. Phần lớn đại số đã quen thuộc từ chương trình Việt Nam; điểm mới là mô tả chính xác dáng điệu bằng lời, điều mà đề thi thưởng điểm ở cả phần trắc nghiệm lẫn tự luận.

## Tốc độ thay đổi trung bình

**Tốc độ thay đổi trung bình (average rate of change)** của $f$ trên $[a,b]$ là
$$\frac{f(b)-f(a)}{b-a},$$
tức hệ số góc của cát tuyến đi qua $\big(a,f(a)\big)$ và $\big(b,f(b)\big)$. Đơn vị của nó là đơn vị đầu ra trên mỗi đơn vị đầu vào.

:::example Tốc độ từ công thức
Tốc độ thay đổi trung bình của $f(x)=x^3-2x$ trên $[1,3]$ là
A. $8$
B. $11$
C. $22$
D. $\dfrac{21}{2}$

**Lời giải.** Ta có $f(3)=27-6=21$ và $f(1)=1-2=-1$. Do đó tốc độ thay đổi trung bình là
$$\frac{21-(-1)}{3-1}=\frac{22}{2}=11.$$

Vậy tốc độ thay đổi trung bình là $11$, chọn đáp án **B**. Phương án C quên chia cho $3-1$.
:::

## Tốc độ tăng dần và tính lồi lõm

Nếu trên các đoạn liên tiếp có độ dài bằng nhau, tốc độ thay đổi trung bình **tăng dần** thì đồ thị **lõm lên (concave up)**; nếu **giảm dần** thì đồ thị **lõm xuống (concave down)**. Một hàm số có thể vừa đồng biến vừa lõm xuống: nó đang tăng, nhưng tăng ngày càng chậm.

:::example Đọc bảng giá trị
Bảng cho các giá trị của hàm số $f$.

| $x$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $f(x)$ | $2$ | $5$ | $6$ | $5{,}5$ |

Khẳng định nào đúng trên $[0,3]$?
A. $f$ đồng biến và lõm lên.
B. $f$ nghịch biến và lõm xuống.
C. Các tốc độ thay đổi trung bình giảm dần, nên đồ thị lõm xuống.
D. Các tốc độ thay đổi trung bình tăng dần, nên đồ thị lõm lên.

**Lời giải.** Tốc độ thay đổi trung bình trên $[0,1]$, $[1,2]$ và $[2,3]$ lần lượt là
$$5-2=3,\qquad6-5=1,\qquad5{,}5-6=-0{,}5.$$

Các tốc độ này giảm dần qua từng đoạn, nên đồ thị lõm xuống. Hàm số lúc đầu tăng rồi sau đó giảm, nên trên cả đoạn nó không đồng biến cũng không nghịch biến.

Vậy khẳng định C đúng, chọn đáp án **C**.
:::

## Dáng điệu ở vô cực của đa thức

Khi $|x|$ lớn, đa thức có dáng điệu giống **số hạng bậc cao nhất (leading term)** $a_nx^n$ của nó. Nếu $n$ chẵn, hai đầu đồ thị đi cùng hướng: lên khi $a_n>0$, xuống khi $a_n<0$. Nếu $n$ lẻ, hai đầu đi ngược hướng. Viết bằng kí hiệu giới hạn, chẳng hạn $\displaystyle\lim_{x\to\infty}p(x)=-\infty$.

:::example Dáng điệu ở vô cực
Đâu là mô tả đúng dáng điệu ở vô cực của $p(x)=-2x^5+3x^2-1$?
A. $\displaystyle\lim_{x\to\infty}p(x)=-\infty$ và $\displaystyle\lim_{x\to-\infty}p(x)=\infty$
B. $\displaystyle\lim_{x\to\infty}p(x)=\infty$ và $\displaystyle\lim_{x\to-\infty}p(x)=-\infty$
C. Cả hai giới hạn đều bằng $-\infty$
D. Cả hai giới hạn đều bằng $\infty$

**Lời giải.** Số hạng bậc cao nhất là $-2x^5$, có bậc lẻ và hệ số âm. Khi $x$ dương rất lớn, $-2x^5$ âm và có trị tuyệt đối rất lớn; khi $x$ âm rất lớn, $x^5$ âm nên $-2x^5$ dương rất lớn.

Vậy $p(x)\to-\infty$ khi $x\to\infty$ và $p(x)\to\infty$ khi $x\to-\infty$, chọn đáp án **A**.
:::

## Nghiệm và bội của nghiệm

Nếu $(x-c)^m$ là một nhân tử của $p$ thì $c$ là nghiệm **bội $m$ (multiplicity)**. Tại nghiệm bội lẻ, đồ thị **cắt** trục $x$; tại nghiệm bội chẵn, đồ thị **tiếp xúc** với trục rồi quay lại. Đa thức bậc $n$ có nhiều nhất $n$ nghiệm thực và nhiều nhất $n-1$ điểm đổi chiều.

:::graph Đồ thị của $p(x)=(x-1)^2(x+3)$
alt: Một đường cong bậc ba cắt trục x tại x = -3 và tiếp xúc với trục tại x = 1, có một điểm cực đại ở giữa
x: -3.5..2.5
y: -11..14
plot: (x-1)^2*(x+3)
point: (-3, 0) "-3" above-left
point: (1, 0) "1" below
:::

:::example Đọc nghiệm từ các nhân tử
Với $p(x)=(x-1)^2(x+3)$ như hình trên, khẳng định nào đúng?
A. Đồ thị cắt trục $x$ tại $x=1$.
B. $p$ có ba nghiệm thực phân biệt.
C. Đồ thị tiếp xúc với trục $x$ tại $x=1$ và cắt trục tại $x=-3$.
D. $p(x)<0$ với mọi $x>1$.

**Lời giải.** Nhân tử $(x-1)^2$ cho nghiệm bội $2$ tại $x=1$, nên đồ thị tiếp xúc với trục tại đó. Nhân tử $(x+3)$ cho nghiệm bội $1$ tại $x=-3$, nên đồ thị cắt trục tại đó. Chỉ có hai nghiệm phân biệt, và khi $x>1$ cả hai nhân tử đều dương nên $p(x)>0$.

Vậy khẳng định C đúng, chọn đáp án **C**.
:::

:::example Lập một đa thức
Đa thức $p$ bậc $3$ có các nghiệm $-2$, $1$, $4$ và $p(0)=16$. Tìm $p(x)$.

**Lời giải.** Vì các nghiệm là $-2$, $1$ và $4$ nên ta có thể viết
$$p(x)=a(x+2)(x-1)(x-4)$$
với một hằng số $a$ nào đó.

Thay $x=0$: $p(0)=a(2)(-1)(-4)=8a$. Vì $p(0)=16$ nên $8a=16$, suy ra $a=2$.

Vậy $p(x)=2(x+2)(x-1)(x-4)$.
:::

## Sai phân hữu hạn và mô hình đa thức

Với các giá trị đầu vào cách đều: nếu sai phân cấp một của các giá trị đầu ra không đổi thì mô hình **tuyến tính** phù hợp; nếu sai phân cấp hai không đổi thì mô hình **bậc hai** phù hợp; nếu sai phân cấp ba không đổi thì mô hình **bậc ba** phù hợp.

:::example Mô hình nào?
Giá trị của một hàm số tại $x=0,1,2,3,4$ là $1, 4, 11, 22, 37$. Loại đa thức nào khớp hoàn toàn với dữ liệu này?
A. Bậc nhất
B. Bậc ba
C. Bậc bốn
D. Bậc hai

**Lời giải.** Sai phân cấp một là $3, 7, 11, 15$, không bằng nhau. Sai phân cấp hai là $4, 4, 4$, bằng nhau.

Vậy mô hình bậc hai khớp hoàn toàn với dữ liệu, chọn đáp án **D**.
:::

:::warning Những cái bẫy thường gặp
- **Quên mẫu số** $b-a$ khi tính tốc độ thay đổi trung bình.
- **Nhầm đồng biến với lõm lên:** hàm số có thể tăng trong khi tốc độ thay đổi của nó giảm.
- **Xét dáng điệu ở vô cực bằng số hạng khác:** khi $|x|$ lớn chỉ số hạng bậc cao nhất quyết định.
- **Bội của nghiệm:** chẵn là tiếp xúc, lẻ là cắt; đừng đếm nghiệm kép hai lần khi đề hỏi số nghiệm phân biệt.
- **Bước đầu vào không đều:** sai phân hữu hạn chỉ dùng được khi các giá trị đầu vào cách đều.
:::

:::terms
- average rate of change | tốc độ thay đổi trung bình
- secant line | cát tuyến
- concave up / concave down | lõm lên / lõm xuống
- end behavior, leading term | dáng điệu ở vô cực, số hạng bậc cao nhất
- zero, multiplicity | nghiệm (không điểm), bội của nghiệm
- turning point | điểm đổi chiều
- finite differences | sai phân hữu hạn
- polynomial model | mô hình đa thức
:::

## Bài tập tương tự

:::exercise
Tính tốc độ thay đổi trung bình của $g(x)=\sqrt x$ trên $[4,9]$.

::hint
**Kiến thức:** $\dfrac{g(9)-g(4)}{9-4}$.

::solution
Ta có $g(9)=3$ và $g(4)=2$.

Do đó tốc độ thay đổi trung bình là
$$\frac{3-2}{9-4}=\frac15.$$

Vậy tốc độ thay đổi trung bình của $g$ trên $[4,9]$ là $\dfrac15$.

**Đáp số.** $\dfrac15$.
:::

:::exercise
Giá trị của hàm số $h$ tại $x=0,2,4,6$ là $10, 11, 14, 19$. Trên $[0,6]$, đồ thị của $h$ lõm lên hay lõm xuống? Giải thích.

::hint
**Kiến thức:** so sánh tốc độ thay đổi trung bình trên ba đoạn bằng nhau.

::solution
Tốc độ thay đổi trung bình trên $[0,2]$, $[2,4]$ và $[4,6]$ lần lượt là
$$\frac{11-10}{2}=0{,}5,\qquad\frac{14-11}{2}=1{,}5,\qquad\frac{19-14}{2}=2{,}5.$$

Các tốc độ này tăng dần qua từng đoạn.

Vậy đồ thị của $h$ lõm lên trên $[0,6]$.

**Đáp số.** Lõm lên, vì các tốc độ thay đổi trung bình tăng dần.
:::

:::exercise
Mô tả dáng điệu ở vô cực của $q(x)=3x^4-x$.

::hint
**Kiến thức:** số hạng bậc cao nhất $3x^4$ có bậc chẵn và hệ số dương.

::solution
Khi $|x|$ lớn, $q(x)$ có dáng điệu giống $3x^4$. Vì bậc $4$ chẵn và hệ số $3$ dương nên $3x^4$ dương rất lớn ở cả hai đầu.

Vậy $\displaystyle\lim_{x\to\infty}q(x)=\infty$ và $\displaystyle\lim_{x\to-\infty}q(x)=\infty$.

**Đáp số.** Cả hai đầu đều tiến tới $\infty$.
:::

:::exercise
Tìm các nghiệm của $f(x)=x^3-4x^2+4x$ và bội của chúng. Đồ thị cắt trục $x$ ở đâu và chỉ tiếp xúc với trục ở đâu?

::hint
**Kiến thức:** đặt $x$ làm nhân tử chung, rồi nhận ra một bình phương.

::solution
Phân tích thành nhân tử, $f(x)=x\left(x^2-4x+4\right)=x(x-2)^2$.

Do đó $x=0$ là nghiệm bội $1$ và $x=2$ là nghiệm bội $2$.

Vậy đồ thị cắt trục $x$ tại $x=0$ và tiếp xúc với trục tại $x=2$.

**Đáp số.** $0$ (bội $1$, cắt) và $2$ (bội $2$, tiếp xúc).
:::

:::exercise
Một đa thức bậc $3$ có các nghiệm $0$, $2$, $-1$ và đồ thị đi qua $(1,-4)$. Tìm đa thức đó.

::hint
**Kiến thức:** viết $p(x)=ax(x-2)(x+1)$ rồi dùng điểm đã cho để tìm $a$.

::solution
Vì các nghiệm là $0$, $2$ và $-1$ nên ta viết $p(x)=ax(x-2)(x+1)$.

Thay $x=1$: $p(1)=a(1)(-1)(2)=-2a$. Vì $p(1)=-4$ nên $a=2$.

Vậy $p(x)=2x(x-2)(x+1)$.

**Đáp số.** $p(x)=2x(x-2)(x+1)$.
:::

## Bài tập vận dụng

:::exercise
Nhiệt độ của một lò nướng, tính bằng độ C, được ghi lại sau khi bật lò.

| Thời gian (phút) | $0$ | $5$ | $10$ | $15$ |
|---|---|---|---|---|
| Nhiệt độ | $25$ | $105$ | $155$ | $180$ |

a) Tính tốc độ thay đổi trung bình trên mỗi đoạn, kèm đơn vị.
b) Mô tả cách nhiệt độ thay đổi.

::hint
**Kiến thức:** chia mỗi lượng thay đổi nhiệt độ cho $5$ phút.

::solution
a) Tốc độ thay đổi trung bình lần lượt là
$$\frac{105-25}{5}=16,\qquad\frac{155-105}{5}=10,\qquad\frac{180-155}{5}=5$$
độ C mỗi phút.

b) Nhiệt độ tăng trên mọi đoạn, nhưng các tốc độ giảm dần, nên đồ thị lõm xuống.

Vậy lò nóng lên ngày càng chậm khi gần tới nhiệt độ đã đặt.

**Đáp số.** a) $16$, $10$ và $5$ độ C mỗi phút; b) tăng với tốc độ giảm dần.
:::

:::exercise
Một chiếc hộp không nắp được làm từ tấm bìa $20$ cm × $20$ cm bằng cách cắt bốn hình vuông cạnh $x$ cm ở bốn góc. Thể tích của hộp là $V(x)=x(20-2x)^2$.
a) Trong bối cảnh này, tập xác định của $V$ là gì?
b) $V$ có bậc mấy và có những nghiệm nào?

::hint
**Kiến thức:** cạnh $x$ phải dương và $20-2x$ phải dương.

::solution
a) Hình vuông cắt đi phải có kích thước dương, nên $x>0$; đáy hộp phải có chiều rộng dương, nên $20-2x>0$, tức là $x<10$. Tập xác định là $0<x<10$.

b) Số hạng bậc cao nhất của $V(x)$ là $4x^3$, nên $V$ có bậc $3$. Các nghiệm của nó là $x=0$ và $x=10$ (nghiệm kép).

Vậy tập xác định là $0<x<10$, và $V$ là đa thức bậc ba có các nghiệm $0$ và $10$.

**Đáp số.** a) $0<x<10$; b) bậc $3$, nghiệm $0$ và $10$.
:::

:::exercise
Một hàm số có các giá trị $2, 3, 10, 29, 66$ tại $x=0,1,2,3,4$. Tìm bậc nhỏ nhất của đa thức khớp hoàn toàn với dữ liệu này.

::hint
**Kiến thức:** tính các sai phân liên tiếp cho đến khi chúng không đổi.

::solution
Sai phân cấp một là $1, 7, 19, 37$; sai phân cấp hai là $6, 12, 18$; sai phân cấp ba là $6, 6$.

Sai phân cấp ba không đổi.

Vậy đa thức bậc $3$ khớp hoàn toàn với dữ liệu.

**Đáp số.** Bậc $3$.
:::

:::exercise Thử thách
Giải bất phương trình $x^3-2x^2-5x+6>0$.

::hint
**Kiến thức:** $x=1$ là một nghiệm; phân tích thành nhân tử rồi lập bảng xét dấu.

::solution
Vì $1-2-5+6=0$ nên $(x-1)$ là một nhân tử. Chia đa thức, $x^3-2x^2-5x+6=(x-1)\left(x^2-x-6\right)=(x-1)(x+2)(x-3)$.

Các nghiệm $-2$, $1$ và $3$ đều là nghiệm bội $1$, nên dấu đổi tại mỗi nghiệm. Khi $x$ lớn, đa thức dương, nên nó dương trên $(3,\infty)$, âm trên $(1,3)$, dương trên $(-2,1)$ và âm trên $(-\infty,-2)$.

Vậy tập nghiệm là $-2<x<1$ hoặc $x>3$.

**Đáp số.** $-2<x<1$ hoặc $x>3$.
:::

:::quiz
::mc
Tốc độ thay đổi trung bình của $f(x)=x^3$ trên $[0,2]$ là
A. $8$
B. $2$
C. $6$
D. $4$
::key D
$\dfrac{8-0}{2-0}=4$.

::mc
Dáng điệu ở vô cực của $f(x)=-x^4+5x$ là
A. Cả hai đầu tiến tới $-\infty$
B. Cả hai đầu tiến tới $\infty$
C. Đầu trái $\infty$, đầu phải $-\infty$
D. Đầu trái $-\infty$, đầu phải $\infty$
::key A
Số hạng bậc cao nhất $-x^4$ có bậc chẵn và hệ số âm.

::mc
Tại một nghiệm bội chẵn, đồ thị của đa thức
A. cắt trục $x$
B. tiếp xúc với trục $x$ rồi quay lại
C. có tiệm cận đứng
D. không xác định
::key B
Bội chẵn: dấu không đổi, nên đồ thị tiếp xúc với trục.

::mc
Số điểm đổi chiều nhiều nhất có thể của một đa thức bậc $5$ là
A. $5$
B. $6$
C. $4$
D. $3$
::key C
Đa thức bậc $n$ có nhiều nhất $n-1$ điểm đổi chiều.

::tf
Cho $p(x)=x(x-3)^2$. Xét tính đúng sai của các mệnh đề sau:
a) Các nghiệm của $p$ là $0$ và $3$.
b) $p$ có bậc $3$.
c) Đồ thị cắt trục $x$ tại $x=3$.
d) $p(x)\to\infty$ khi $x\to\infty$.
::key T T F T
$3$ là nghiệm bội $2$ nên đồ thị chỉ tiếp xúc với trục tại đó; số hạng bậc cao nhất là $x^3$.

::sa
Tính tốc độ thay đổi trung bình của $f(x)=2x^2+1$ trên $[1,3]$.
::key 8
$\dfrac{19-3}{2}=8$.

::sa
Hàm số $f(x)=x^3-x$ có bao nhiêu nghiệm thực?
::key 3
$x(x-1)(x+1)$ có các nghiệm $-1$, $0$, $1$.
:::
