---
title: Hàm lượng giác và mô hình tuần hoàn
description: AP Precalculus Unit 3, phần 1: đường tròn lượng giác, đồ thị sin và cos, biên độ, chu kì, đường trung bình, độ dịch pha, hàm tang và mô hình dạng sin.
minutes: 50
---

:::goals
- Dùng đường tròn lượng giác để tìm giá trị sin, cos và toạ độ điểm trên một đường tròn bất kì.
- Đọc biên độ, chu kì, đường trung bình và độ dịch pha từ $y=a\sin\big(b(x-h)\big)+k$ hoặc dạng cos, và từ đồ thị.
- Mô tả đồ thị $y=\tan x$: chu kì, tiệm cận và nghiệm.
- Lập mô hình dạng sin từ mô tả một tình huống tuần hoàn và dùng nó để trả lời câu hỏi.
:::

Unit 3 nói về sự thay đổi lặp lại. Công cụ trung tâm là hàm dạng sin, mô tả vòng đu quay, thuỷ triều, nhiệt độ trong ngày và mọi đại lượng lên xuống theo một chu kì đều đặn. Trong đề thi, FRQ 3 (Modeling Periodic Contexts) được xây dựng hoàn toàn từ nội dung bài này, nên luyện tập kĩ rất đáng công.

## Đường tròn lượng giác

Góc $\theta$ ở vị trí chuẩn cắt đường tròn đơn vị tại điểm $(\cos\theta,\sin\theta)$. Trên đường tròn bán kính $r$ tâm gốc toạ độ, điểm đó là $(r\cos\theta,r\sin\theta)$. Các giá trị cần thuộc:

| $\theta$ | $0$ | $\dfrac\pi6$ | $\dfrac\pi4$ | $\dfrac\pi3$ | $\dfrac\pi2$ |
|---|---|---|---|---|---|
| $\sin\theta$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac12$ | $0$ |

Các góc khác suy ra nhờ tính đối xứng, với dấu xác định theo góc phần tư: ở góc phần tư II, sin dương và cos âm.

:::example Một điểm trên đường tròn
Góc $\dfrac{2\pi}{3}$ ở vị trí chuẩn cắt đường tròn bán kính $4$ tâm gốc toạ độ tại
A. $\left(2,2\sqrt3\right)$
B. $\left(-2\sqrt3,2\right)$
C. $\left(-2,2\sqrt3\right)$
D. $\left(-2,-2\sqrt3\right)$

**Lời giải.** Góc $\dfrac{2\pi}{3}$ nằm ở góc phần tư II với góc tham chiếu $\dfrac\pi3$, nên $\cos\dfrac{2\pi}{3}=-\dfrac12$ và $\sin\dfrac{2\pi}{3}=\dfrac{\sqrt3}{2}$.

Do đó điểm cần tìm là $\left(4\cdot\left(-\tfrac12\right),\,4\cdot\tfrac{\sqrt3}{2}\right)=\left(-2,2\sqrt3\right)$.

Vậy điểm đó là $\left(-2,2\sqrt3\right)$, chọn đáp án **C**. Phương án B đổi chỗ sin và cos.
:::

## Đồ thị hàm dạng sin

Với $y=a\sin\big(b(x-h)\big)+k$ hoặc $y=a\cos\big(b(x-h)\big)+k$, $b>0$:

| Đặc điểm | Giá trị |
|---|---|
| Biên độ | $\lvert a\rvert$ |
| Chu kì | $\dfrac{2\pi}{b}$ |
| Đường trung bình | $y=k$ |
| Giá trị lớn nhất, nhỏ nhất | $k+\lvert a\rvert$, $k-\lvert a\rvert$ |
| Độ dịch pha | $h$ đơn vị sang phải |

:::graph Đồ thị $y=3\cos\big(2(x-\tfrac\pi4)\big)-1$
alt: Một đường sóng dao động giữa giá trị nhỏ nhất -4 và lớn nhất 2 quanh đường trung bình nét đứt y = -1, đạt cực đại tại x khoảng 0,79 và có chu kì khoảng 3,14
x: -1..7
y: -5..3
plot: 3*cos(2*(x-pi/4))-1 ; -1..7
hline: -1 ; dashed
point: (0.785, 2) "max" above
point: (2.356, -4) "min" below
:::

:::example Đọc các đặc điểm
Với $y=3\cos\big(2(x-\tfrac\pi4)\big)-1$, khẳng định nào đúng?
A. Biên độ là $3$ và chu kì là $\pi$.
B. Biên độ là $3$ và chu kì là $4\pi$.
C. Đường trung bình là $y=1$ và giá trị lớn nhất là $4$.
D. Giá trị nhỏ nhất là $-3$ và chu kì là $2\pi$.

**Lời giải.** Ở đây $a=3$, $b=2$, $h=\dfrac\pi4$ và $k=-1$.

Biên độ là $3$, chu kì là $\dfrac{2\pi}{2}=\pi$, đường trung bình là $y=-1$, nên giá trị lớn nhất là $-1+3=2$ và giá trị nhỏ nhất là $-1-3=-4$. Hàm số đạt cực đại tại $x=\dfrac\pi4$, nơi biểu thức trong cos bằng $0$.

Vậy khẳng định A đúng, chọn đáp án **A**. Phương án B tính $2\pi\cdot2$ thay vì $\dfrac{2\pi}{2}$.
:::

## Hàm tang

Vì $\tan x=\dfrac{\sin x}{\cos x}$ nên hàm tang không xác định khi $\cos x=0$, cho các tiệm cận đứng $x=\dfrac\pi2+k\pi$. Nghiệm của nó là $x=k\pi$, nó đồng biến giữa hai tiệm cận liên tiếp, và chu kì là $\pi$ (không phải $2\pi$). Với $y=\tan(bx)$, chu kì là $\dfrac\pi b$.

## Lập mô hình dạng sin

Để mô hình hoá một tình huống tuần hoàn:
1. **Đường trung bình** $k=\dfrac{\max+\min}{2}$, **biên độ** $\lvert a\rvert=\dfrac{\max-\min}{2}$.
2. **Chu kì** lấy từ tình huống, rồi $b=\dfrac{2\pi}{\text{chu kì}}$.
3. **Điểm xuất phát:** cos bắt đầu ở cực đại, $-\cos$ ở cực tiểu, sin ở đường trung bình và đi lên. Chọn $h$ cho phù hợp.

:::example Vòng đu quay
Một vòng đu quay có bán kính $14$ m, tâm cao $16$ m so với mặt đất và quay hết một vòng trong $40$ giây. Một người lên ở điểm thấp nhất tại thời điểm $t=0$. Hàm số nào cho độ cao (mét) của người đó sau $t$ giây?
A. $h(t)=14-16\cos\dfrac{\pi t}{20}$
B. $h(t)=16-14\cos\dfrac{\pi t}{20}$
C. $h(t)=16+14\cos\dfrac{\pi t}{20}$
D. $h(t)=16-14\cos\dfrac{\pi t}{40}$

**Lời giải.** Đường trung bình là độ cao của tâm, $16$, và biên độ là bán kính, $14$. Chu kì là $40$, nên $b=\dfrac{2\pi}{40}=\dfrac{\pi}{20}$.

Tại $t=0$ người đó ở điểm thấp nhất, nên mô hình bắt đầu bằng $-\cos$: $h(t)=16-14\cos\dfrac{\pi t}{20}$. Kiểm tra: $h(0)=16-14=2$ m, đúng là điểm thấp nhất.

Vậy mô hình là $h(t)=16-14\cos\dfrac{\pi t}{20}$, chọn đáp án **B**. Phương án C bắt đầu ở đỉnh, còn phương án D có chu kì $80$ giây.
:::

:::example Mô hình thuỷ triều
Ở một bến cảng, triều cường cao $3{,}8$ m lúc $2$ giờ sáng và triều thấp tiếp theo cao $0{,}6$ m xảy ra sau đó $6{,}25$ giờ. Lập mô hình cho độ sâu mực nước $D$ (mét) sau $t$ giờ kể từ nửa đêm.

**Lời giải.** Đường trung bình là $\dfrac{3{,}8+0{,}6}{2}=2{,}2$ và biên độ là $\dfrac{3{,}8-0{,}6}{2}=1{,}6$.

Từ triều cường đến triều thấp là nửa chu kì, nên chu kì là $2\times6{,}25=12{,}5$ giờ và $b=\dfrac{2\pi}{12{,}5}$.

Độ sâu lớn nhất tại $t=2$, nên dùng hàm cos dịch sang phải $2$ đơn vị:
$$D(t)=2{,}2+1{,}6\cos\frac{2\pi(t-2)}{12{,}5}.$$

Vậy $D(t)=2{,}2+1{,}6\cos\dfrac{2\pi(t-2)}{12{,}5}$. Kiểm tra: $D(2)=3{,}8$ và $D(8{,}25)=2{,}2-1{,}6=0{,}6$.
:::

:::warning Những cái bẫy thường gặp
- **Chu kì:** là $\dfrac{2\pi}{b}$, không phải $2\pi b$; với hàm tang là $\dfrac{\pi}{b}$.
- **Độ dịch pha:** với $\cos(2x-\pi)$, đặt nhân tử chung trước: $\cos\big(2(x-\tfrac\pi2)\big)$, nên độ dịch là $\dfrac\pi2$, không phải $\pi$.
- **Radian:** chuyển máy tính sang chế độ radian.
- **Điểm xuất phát của mô hình:** ở cực tiểu dùng $-\cos$; ở cực đại dùng $\cos$.
- **Nửa chu kì:** từ cực đại đến cực tiểu kế tiếp là nửa chu kì.
:::

:::terms
- unit circle | đường tròn lượng giác
- reference angle | góc tham chiếu
- amplitude | biên độ
- period | chu kì
- midline | đường trung bình
- phase shift | độ dịch pha
- sinusoidal function | hàm dạng sin
- vertical asymptote | tiệm cận đứng
:::

## Bài tập tương tự

:::exercise
Tìm toạ độ giao điểm của góc $\dfrac\pi6$ ở vị trí chuẩn với đường tròn bán kính $10$ tâm gốc toạ độ.

::hint
**Kiến thức:** điểm đó là $(r\cos\theta,r\sin\theta)$.

::solution
Điểm trên đường tròn bán kính $r$ ứng với góc $\theta$ là $(r\cos\theta,r\sin\theta)$. Với $r=10$ và $\theta=\dfrac\pi6$, toạ độ là $\left(10\cos\dfrac\pi6,\,10\sin\dfrac\pi6\right)$.

Vì $\cos\dfrac\pi6=\dfrac{\sqrt3}{2}$ và $\sin\dfrac\pi6=\dfrac12$ nên điểm đó là $\left(5\sqrt3,5\right)$.

Vậy giao điểm là $\left(5\sqrt3,5\right)\approx(8{,}66;\,5)$.

**Đáp số.** $\left(5\sqrt3,5\right)$.
:::

:::exercise
Nêu biên độ, chu kì, đường trung bình và tập giá trị của $y=-2\sin\dfrac{\pi x}{3}+5$.

::hint
**Kiến thức:** biên độ $\lvert a\rvert$, chu kì $\dfrac{2\pi}{b}$, đường trung bình $y=k$.

::solution
Ở đây $a=-2$, $b=\dfrac\pi3$ và $k=5$.

Biên độ là $\lvert-2\rvert=2$, chu kì là $\dfrac{2\pi}{\pi/3}=6$, và đường trung bình là $y=5$.

Giá trị của hàm số thay đổi giữa $5-2=3$ và $5+2=7$, nên tập giá trị là $[3;7]$.

Vậy biên độ là $2$, chu kì $6$, đường trung bình $y=5$ và tập giá trị $[3;7]$.

**Đáp số.** $2$; $6$; $y=5$; $[3;7]$.
:::

:::exercise
Tìm chu kì và các tiệm cận đứng của $y=\tan3x$ với $0<x<\pi$.

::hint
**Kiến thức:** chu kì của $\tan bx$ là $\dfrac\pi b$; tiệm cận khi $3x=\dfrac\pi2+k\pi$.

::solution
Chu kì là $\dfrac\pi3$.

Tiệm cận xảy ra khi $3x=\dfrac\pi2+k\pi$, tức $x=\dfrac\pi6+\dfrac{k\pi}{3}$. Trong khoảng $0<x<\pi$, đó là $x=\dfrac\pi6$, $\dfrac\pi2$ và $\dfrac{5\pi}{6}$.

Vậy chu kì là $\dfrac\pi3$ và các tiệm cận là $x=\dfrac\pi6$, $x=\dfrac\pi2$, $x=\dfrac{5\pi}6$.

**Đáp số.** Chu kì $\dfrac\pi3$; $x=\dfrac\pi6,\ \dfrac\pi2,\ \dfrac{5\pi}6$.
:::

:::exercise
Một hàm dạng sin đạt cực đại tại $(1,9)$ và cực tiểu kế tiếp tại $(4,1)$. Viết hàm số dưới dạng $y=a\cos\big(b(x-h)\big)+k$.

::hint
**Kiến thức:** từ cực đại đến cực tiểu là nửa chu kì; hàm cos bắt đầu ở cực đại.

::solution
Đường trung bình là $k=\dfrac{9+1}{2}=5$ và biên độ là $a=\dfrac{9-1}{2}=4$.

Nửa chu kì là $4-1=3$, nên chu kì là $6$ và $b=\dfrac{2\pi}{6}=\dfrac\pi3$.

Hàm số đạt cực đại tại $x=1$, nên $h=1$ với hệ số cos dương.

Vậy $y=4\cos\left(\dfrac\pi3(x-1)\right)+5$.

**Đáp số.** $y=4\cos\left(\dfrac\pi3(x-1)\right)+5$.
:::

:::exercise
Không dùng máy tính, tính $\sin\dfrac{7\pi}{6}$ và $\cos\dfrac{7\pi}{6}$.

::hint
**Kiến thức:** $\dfrac{7\pi}{6}$ nằm ở góc phần tư III với góc tham chiếu $\dfrac\pi6$.

::solution
Góc $\dfrac{7\pi}{6}=\pi+\dfrac\pi6$ nằm ở góc phần tư III, nơi cả sin và cos đều âm, và góc tham chiếu là $\dfrac\pi6$.

Do đó $\sin\dfrac{7\pi}{6}=-\dfrac12$ và $\cos\dfrac{7\pi}{6}=-\dfrac{\sqrt3}{2}$.

Vậy $\sin\dfrac{7\pi}6=-\dfrac12$ và $\cos\dfrac{7\pi}6=-\dfrac{\sqrt3}2$.

**Đáp số.** $-\dfrac12$ và $-\dfrac{\sqrt3}{2}$.
:::

## Bài tập vận dụng

:::exercise
Với vòng đu quay $h(t)=16-14\cos\dfrac{\pi t}{20}$ ($h$ tính bằng mét, $t$ tính bằng giây), tìm thời điểm đầu tiên người chơi lên tới độ cao $23$ m.

::hint
**Kiến thức:** giải $\cos\dfrac{\pi t}{20}=-\dfrac12$ và lấy nghiệm dương nhỏ nhất.

::solution
Cho $h(t)=23$, ta được $-14\cos\dfrac{\pi t}{20}=7$, nên $\cos\dfrac{\pi t}{20}=-\dfrac12$.

Góc dương nhỏ nhất có cos bằng $-\dfrac12$ là $\dfrac{2\pi}{3}$, nên $\dfrac{\pi t}{20}=\dfrac{2\pi}{3}$ và $t=\dfrac{40}{3}\approx13{,}3$.

Vậy người chơi lên tới độ cao $23$ m lần đầu sau khoảng $13{,}3$ giây.

**Đáp số.** $t=\dfrac{40}{3}\approx13{,}3$ giây.
:::

:::exercise
Ở một thành phố, nhiệt độ trong ngày cao nhất $30^\circ$C lúc $14$ giờ và thấp nhất $20^\circ$C lúc $2$ giờ. Lập mô hình hàm cos cho nhiệt độ $T$ sau $t$ giờ kể từ nửa đêm, và tính nhiệt độ lúc $8$ giờ.

::hint
**Kiến thức:** chu kì là $24$ giờ; cực đại tại $t=14$.

::solution
Đường trung bình là $\dfrac{30+20}{2}=25$, biên độ là $\dfrac{30-20}{2}=5$, chu kì là $24$, nên $b=\dfrac{2\pi}{24}=\dfrac{\pi}{12}$.

Cực đại tại $t=14$, nên $T(t)=25+5\cos\dfrac{\pi(t-14)}{12}$.

Tại $t=8$: $T(8)=25+5\cos\left(-\dfrac\pi2\right)=25+0=25$.

Vậy mô hình là $T(t)=25+5\cos\dfrac{\pi(t-14)}{12}$, và lúc $8$ giờ nhiệt độ là $25^\circ$C.

**Đáp số.** $T(t)=25+5\cos\dfrac{\pi(t-14)}{12}$; $25^\circ$C.
:::

:::exercise
Dùng mô hình thuỷ triều $D(t)=2{,}2+1{,}6\cos\dfrac{2\pi(t-2)}{12{,}5}$, một con thuyền cần mực nước ít nhất $3$ m. Tìm thời điểm đầu tiên sau $2$ giờ sáng mà độ sâu giảm xuống $3$ m (làm tròn đến một chữ số thập phân).

::hint
**Kiến thức:** giải $\cos\dfrac{2\pi(t-2)}{12{,}5}=0{,}5$.

::solution
Cho $D(t)=3$, ta được $1{,}6\cos\dfrac{2\pi(t-2)}{12{,}5}=0{,}8$, nên $\cos\dfrac{2\pi(t-2)}{12{,}5}=0{,}5$.

Ngay sau cực đại, góc bằng $\dfrac\pi3$, nên $\dfrac{2\pi(t-2)}{12{,}5}=\dfrac\pi3$ và $t-2=\dfrac{12{,}5}{6}\approx2{,}08$.

Do đó $t\approx4{,}08$, tức khoảng $4{,}1$ giờ sau nửa đêm.

Vậy độ sâu giảm xuống $3$ m vào khoảng $t\approx4{,}1$, tức khoảng $4$ giờ $5$ phút sáng.

**Đáp số.** $t\approx4{,}1$ giờ.
:::

:::exercise Thử thách
Hàm số $f(x)=a\sin(bx)+k$ với $a>0$, $b>0$ có tập giá trị $[-1;7]$, đồ thị cắt đường trung bình theo chiều đi lên tại $x=0$ và lần kế tiếp tại $x=8$. Tìm $a$, $b$ và $k$.

::hint
**Kiến thức:** hai lần liên tiếp cắt đường trung bình theo chiều đi lên cách nhau đúng một chu kì.

::solution
Từ tập giá trị, $k=\dfrac{7+(-1)}{2}=3$ và $a=\dfrac{7-(-1)}{2}=4$.

Hai lần liên tiếp cắt đường trung bình theo chiều đi lên cách nhau một chu kì, nên chu kì là $8$ và $b=\dfrac{2\pi}{8}=\dfrac\pi4$.

Vậy $a=4$, $b=\dfrac\pi4$ và $k=3$, tức $f(x)=4\sin\dfrac{\pi x}{4}+3$.

**Đáp số.** $a=4$, $b=\dfrac\pi4$, $k=3$.
:::

:::quiz
::mc
Chu kì của $y=\sin4x$ là
A. $4\pi$
B. $\dfrac\pi4$
C. $\dfrac\pi2$
D. $8\pi$
::key C
$\dfrac{2\pi}{4}=\dfrac\pi2$.

::mc
Biên độ của $y=-5\cos x+1$ là
A. $-5$
B. $1$
C. $6$
D. $5$
::key D
Biên độ là $\lvert-5\rvert=5$.

::mc
Giá trị đúng của $\sin\dfrac\pi3$ là
A. $\dfrac{\sqrt3}{2}$
B. $\dfrac12$
C. $\dfrac{\sqrt2}{2}$
D. $\sqrt3$
::key A
Theo đường tròn lượng giác.

::mc
Đường trung bình của $y=2\sin x+7$ là
A. $y=2$
B. $y=7$
C. $y=9$
D. $y=5$
::key B
Độ dịch dọc $k=7$ cho đường trung bình.

::tf
Cho $y=3\sin2x$. Xét tính đúng sai của các mệnh đề sau:
a) Biên độ là $3$.
b) Chu kì là $\pi$.
c) Đồ thị đi qua gốc toạ độ.
d) Giá trị lớn nhất là $6$.
::key T T T F
Giá trị lớn nhất là $3$.

::sa
Tìm chu kì của $y=\sin\dfrac{\pi x}{6}$.
::key 12
$\dfrac{2\pi}{\pi/6}=12$.

::sa
Tìm giá trị lớn nhất của $y=2\cos x+3$.
::key 5
$3+2=5$.
:::
