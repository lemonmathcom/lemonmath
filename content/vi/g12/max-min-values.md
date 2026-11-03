---
title: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số
description: Tìm giá trị lớn nhất, nhỏ nhất của hàm số trên một đoạn bằng cách so sánh các giá trị tới hạn và đầu mút, và trên một khoảng bằng bảng biến thiên.
minutes: 22
---

:::goals
- Hiểu giá trị lớn nhất, giá trị nhỏ nhất của hàm số trên một tập và phân biệt với cực đại, cực tiểu.
- Tìm giá trị lớn nhất, nhỏ nhất trên một đoạn $[a; b]$ bằng cách so sánh vài giá trị.
- Tìm giá trị lớn nhất, nhỏ nhất trên một khoảng bằng bảng biến thiên.
- Áp dụng cho hàm đa thức, phân thức, căn thức, lượng giác và bài toán thực tế.
:::

Nhiệt độ trong một phòng thí nghiệm được theo dõi trong $5$ giờ. Sau $t$ giờ, nhiệt độ là $T(t)=t^3-6t^2+9t+20$ (°C), $0\le t\le 5$. Lúc bắt đầu phòng có $20$ °C, sau $1$ giờ là $24$ °C, sau $3$ giờ lại về $20$ °C. Trong suốt $5$ giờ đó, nhiệt độ cao nhất và thấp nhất là bao nhiêu?

Bạn có thể nghĩ ngay đến cực đại $24$ °C lúc $t=1$. Nhưng câu trả lời không phải là $24$.

## Giá trị lớn nhất và giá trị nhỏ nhất

### Khám phá: cực đại có phải là cao nhất?

Ta tính nhiệt độ tại các giờ tròn:

| $t$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| $T(t)$ | $20$ | $24$ | $22$ | $20$ | $24$ | $40$ |

Đạo hàm $T'(t)=3t^2-12t+9=3(t-1)(t-3)$ cho biết $T$ có cực đại $24$ tại $t=1$ và cực tiểu $20$ tại $t=3$. Thế nhưng đến cuối buổi, $T(5)=40$, cao hơn hẳn cực đại. Cực đại chỉ so với các thời điểm **gần** nó; còn "cao nhất" phải so với **mọi** thời điểm.

:::graph Nhiệt độ phòng thí nghiệm $T(t)=t^3-6t^2+9t+20$
alt: Đồ thị trên đoạn từ 0 đến 5, có cực đại tại t bằng 1 với giá trị 24, cực tiểu tại t bằng 3 với giá trị 20, và đạt giá trị cao nhất 40 tại đầu mút t bằng 5
x: 0..5
y: 0..45
plot: x^3 - 6x^2 + 9x + 20 ; 0..5
point: (0, 20) "(0; 20)" left
point: (1, 24) "(1; 24)" above
point: (3, 20) "(3; 20)" below
point: (5, 40) "(5; 40)" left
:::

:::definition Giá trị lớn nhất, giá trị nhỏ nhất
Cho hàm số $y=f(x)$ xác định trên tập $D$.
- Số $M$ là **giá trị lớn nhất** của $f$ trên $D$ nếu $f(x)\le M$ với mọi $x\in D$ **và** có $x_0\in D$ sao cho $f(x_0)=M$. Kí hiệu $M=\max\limits_{D} f(x)$.
- Số $m$ là **giá trị nhỏ nhất** của $f$ trên $D$ nếu $f(x)\ge m$ với mọi $x\in D$ **và** có $x_0\in D$ sao cho $f(x_0)=m$. Kí hiệu $m=\min\limits_{D} f(x)$.
:::

Điều kiện "có $x_0$" rất quan trọng. Chẳng hạn $f(x)=x^2\le 4$ với mọi $x\in(0; 2)$, nhưng không có $x$ nào trong khoảng đó cho $f(x)=4$; vì vậy $4$ **không** phải giá trị lớn nhất của $f$ trên $(0; 2)$, và thực ra $f$ không có giá trị lớn nhất trên khoảng này.

## Trên một đoạn

:::theorem Hàm số liên tục trên một đoạn
Mọi hàm số liên tục trên đoạn $[a; b]$ đều có giá trị lớn nhất và giá trị nhỏ nhất trên đoạn đó.
:::

Giá trị lớn nhất chỉ có thể đạt ở hai nơi: tại một đầu mút, hoặc tại một điểm bên trong mà đồ thị "quay đầu", tức là nơi $f'=0$ hoặc $f'$ không xác định. Ở mọi điểm khác bên trong, $f'$ khác $0$, nên hàm số vẫn đang tăng hoặc giảm và còn có giá trị lớn hơn ở gần đó. Vì vậy ta chỉ cần so sánh vài giá trị:

1. Tìm các điểm $x_1, x_2, \dots$ thuộc **khoảng** $(a; b)$ tại đó $f'(x)=0$ hoặc $f'(x)$ không xác định.
2. Tính $f(a)$, $f(x_1)$, $f(x_2)$, …, $f(b)$.
3. Số lớn nhất trong các số đó là $\max\limits_{[a; b]} f(x)$, số nhỏ nhất là $\min\limits_{[a; b]} f(x)$.

:::example Hàm bậc ba trên một đoạn
Tìm giá trị lớn nhất và giá trị nhỏ nhất của $f(x)=x^3-3x+1$ trên đoạn $[0; 2]$.

**Lời giải.** Hàm đa thức liên tục trên $[0; 2]$. Ta tìm nghiệm của $f'$ và chỉ giữ nghiệm nằm trong $(0; 2)$:

$$f'(x)=3x^2-3=0\iff x=1\ \text{hoặc}\ x=-1\ (\text{loại vì } -1\notin(0; 2)).$$

So sánh giá trị tại điểm tới hạn và hai đầu mút:

$$f(0)=1,\qquad f(1)=-1,\qquad f(2)=8-6+1=3.$$

Vậy $\max\limits_{[0; 2]} f(x)=3$ (tại $x=2$) và $\min\limits_{[0; 2]} f(x)=-1$ (tại $x=1$).
:::

Bước loại nghiệm nằm ngoài đoạn rất dễ quên. Ví dụ sau có một nghiệm bị loại và một nghiệm vô tỉ.

:::example Hàm bậc bốn
Tìm giá trị lớn nhất và giá trị nhỏ nhất của $f(x)=x^4-4x^2+5$ trên đoạn $[-1; 3]$.

**Lời giải.** Ta giải $f'(x)=0$ rồi giữ các nghiệm thuộc $(-1; 3)$:

$$f'(x)=4x^3-8x=4x(x^2-2)=0\iff x\in\{0; \sqrt2; -\sqrt2\},\quad -\sqrt2\notin(-1; 3).$$

Tính các giá trị cần so sánh. Với $x=\sqrt2$ ta có $x^2=2$ và $x^4=4$:

$$f(-1)=1-4+5=2,\quad f(0)=5,\quad f(\sqrt2)=4-8+5=1,\quad f(3)=81-36+5=50.$$

Vậy $\max\limits_{[-1; 3]} f(x)=50$ tại $x=3$ và $\min\limits_{[-1; 3]} f(x)=1$ tại $x=\sqrt2$.
:::

Với hàm chứa căn, ta giải phương trình $f'(x)=0$ cẩn thận, có điều kiện để bình phương.

:::example Hàm chứa căn
Tìm giá trị lớn nhất và giá trị nhỏ nhất của $f(x)=x+\sqrt{4-x^2}$.

**Lời giải.** Tập xác định là $[-2; 2]$ và $f$ liên tục trên đoạn này. Trên $(-2; 2)$:

$$f'(x)=1-\frac{x}{\sqrt{4-x^2}}=0\iff \sqrt{4-x^2}=x.$$

Phương trình này cần $x\ge 0$; bình phương hai vế:

$$4-x^2=x^2\iff x^2=2\iff x=\sqrt2\quad(\text{vì } x\ge 0).$$

So sánh: $f(-2)=-2$, $f(\sqrt2)=\sqrt2+\sqrt2=2\sqrt2$, $f(2)=2$.

Vậy giá trị lớn nhất là $2\sqrt2$ (tại $x=\sqrt2$), giá trị nhỏ nhất là $-2$ (tại $x=-2$).
:::

Với hàm lượng giác, đặt ẩn phụ thường đưa bài toán về một đa thức trên một đoạn.

:::example Hàm lượng giác và ẩn phụ
Tìm giá trị lớn nhất và giá trị nhỏ nhất của $f(x)=2\sin x+\cos 2x$ trên đoạn $[0; \pi]$.

**Lời giải.** Dùng công thức nhân đôi $\cos 2x=1-2\sin^2x$ và đặt $t=\sin x$:

$$f(x)=2\sin x+1-2\sin^2 x=g(t)=-2t^2+2t+1.$$

Khi $x$ chạy trên $[0; \pi]$, $t=\sin x$ chạy trên đoạn $[0; 1]$. Ta tìm giá trị lớn nhất, nhỏ nhất của $g$ trên $[0; 1]$:

$$g'(t)=-4t+2=0\iff t=\frac12;\qquad g(0)=1,\quad g\left(\frac12\right)=\frac32,\quad g(1)=1.$$

Vậy $\max\limits_{[0; \pi]} f(x)=\dfrac32$ (khi $\sin x=\dfrac12$, tức $x=\dfrac{\pi}{6}$ hoặc $x=\dfrac{5\pi}{6}$) và $\min\limits_{[0; \pi]} f(x)=1$ (khi $x\in\left\{0; \dfrac{\pi}{2}; \pi\right\}$).

**Nhìn lại.** Phải đổi đúng miền của ẩn phụ: $t\in[0; 1]$ chứ không phải $[-1; 1]$, vì $\sin x\ge 0$ trên $[0; \pi]$.
:::

## Trên một khoảng

Trên một khoảng (không chứa đầu mút), hàm số có thể **không có** giá trị lớn nhất hoặc nhỏ nhất. Khi đó ta lập bảng biến thiên và đọc kết quả từ bảng.

:::example Giá trị nhỏ nhất trên một khoảng
Tìm giá trị nhỏ nhất của $f(x)=x+\dfrac{9}{x}$ trên khoảng $(0; +\infty)$.

**Lời giải.** Ta tính đạo hàm và quy đồng để xét dấu:

$$f'(x)=1-\frac{9}{x^2}=\frac{(x-3)(x+3)}{x^2},\qquad f'(x)=0\iff x=3\ \ (x>0).$$

Với $x>0$, dấu của $f'$ là dấu của $x-3$. Khi $x\to0^+$ và khi $x\to+\infty$, $f(x)\to+\infty$:

| $x$ | $0$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | $+\infty$ | $\searrow$ | $6$ | $\nearrow$ | $+\infty$ |

Vậy $\min\limits_{(0; +\infty)} f(x)=f(3)=6$, còn $f$ không có giá trị lớn nhất trên $(0; +\infty)$.
:::

:::graph Đồ thị $y=x+\dfrac{9}{x}$ với $x>0$
alt: Đồ thị trên nửa trục dương, đi xuống từ rất cao gần trục tung đến điểm thấp nhất (3; 6) rồi đi lên mãi
x: 0..12
y: 0..16
plot: x + 9/x ; 0.5..12
point: (3, 6) "(3; 6)" below
:::

## Bài toán thực tế

Bây giờ ta trả lời câu hỏi về nhiệt độ ở đầu bài. Trong bài toán thực tế, đầu mút của đoạn thường là thời điểm bắt đầu và kết thúc, nên không được bỏ qua.

:::example Nhiệt độ cao nhất và thấp nhất
Nhiệt độ phòng là $T(t)=t^3-6t^2+9t+20$ (°C), $0\le t\le 5$ (giờ). Tìm nhiệt độ cao nhất và thấp nhất trong $5$ giờ.

**Lời giải.** $T$ liên tục trên $[0; 5]$. Ta tìm nghiệm của $T'$ trong $(0; 5)$, rồi so sánh với hai đầu mút:

$$T'(t)=3(t-1)(t-3)=0\iff t=1\ \text{hoặc}\ t=3;\qquad T(0)=20,\ T(1)=24,\ T(3)=20,\ T(5)=40.$$

Vậy nhiệt độ cao nhất là $40$ °C (lúc kết thúc, $t=5$), thấp nhất là $20$ °C (lúc bắt đầu và lúc $t=3$ giờ).
:::

:::warning Những sai lầm thường gặp
- **Lấy cực đại làm giá trị lớn nhất.** Sai: "$T$ đạt cực đại $24$ nên nhiệt độ cao nhất là $24$ °C". Lí do sai: chưa so sánh với đầu mút, mà $T(5)=40$. Đúng: luôn tính cả $f(a)$ và $f(b)$.
- **Giữ nghiệm nằm ngoài đoạn.** Sai: tìm giá trị nhỏ nhất của $x^3-3x+1$ trên $[0; 2]$ mà tính cả $f(-1)=3$. Lí do sai: $-1$ không thuộc đoạn đang xét. Đúng: chỉ xét nghiệm thuộc $(a; b)$.
- **Sai miền của ẩn phụ.** Sai: đặt $t=\sin x$ với $x\in[0; \pi]$ rồi xét $t\in[-1; 1]$, được giá trị nhỏ nhất $g(-1)=-3$. Lí do sai: trên $[0; \pi]$ thì $\sin x\ge 0$. Đúng: $t\in[0; 1]$, giá trị nhỏ nhất là $1$.
- **Nói có giá trị lớn nhất khi không đạt được.** Sai: "$x+\dfrac9x$ có giá trị lớn nhất là $+\infty$". Lí do sai: $+\infty$ không phải là một số và không có $x$ nào cho giá trị đó. Đúng: hàm số không có giá trị lớn nhất trên $(0; +\infty)$.
:::

## Thuật ngữ

:::terms
- giá trị lớn nhất | maximum (greatest) value
- giá trị nhỏ nhất | minimum (least) value
- đoạn | closed interval
- khoảng | open interval
- đầu mút | endpoint
- điểm tới hạn | critical point
- hàm số liên tục | continuous function
- ẩn phụ | substitution (new variable)
:::

## Tóm tắt

- $M=\max\limits_D f$ khi $f(x)\le M$ với mọi $x\in D$ **và** $M$ đạt được tại một điểm của $D$. Tương tự với $\min$.
- Hàm liên tục trên đoạn $[a; b]$ luôn có giá trị lớn nhất và nhỏ nhất.
- Trên đoạn: tìm nghiệm của $f'$ (và điểm $f'$ không xác định) **trong** $(a; b)$ → tính $f$ tại đó và tại $a$, $b$ → so sánh.
- Trên khoảng: lập bảng biến thiên; có thể không có giá trị lớn nhất hoặc nhỏ nhất.
- Đặt ẩn phụ thì phải tìm đúng miền giá trị của ẩn phụ.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm giá trị lớn nhất và giá trị nhỏ nhất của $y=x^3-3x^2$ trên đoạn $[-1; 3]$.

::hint
**Kiến thức:** trên đoạn, so sánh giá trị tại các nghiệm của $y'$ thuộc khoảng $(-1; 3)$ và tại hai đầu mút.

**Gợi ý các bước:**
1. Giải $y'=3x^2-6x=0$.
2. Tính $y$ tại các nghiệm và tại $-1$, $3$.

::solution
$y'=3x(x-2)=0\iff x=0$ hoặc $x=2$, cả hai thuộc $(-1; 3)$. $y(-1)=-4$, $y(0)=0$, $y(2)=8-12=-4$, $y(3)=27-27=0$.

**Đáp số.** Giá trị lớn nhất $0$ (tại $x=0$ và $x=3$); giá trị nhỏ nhất $-4$ (tại $x=-1$ và $x=2$).
:::

:::exercise
Tìm giá trị lớn nhất và giá trị nhỏ nhất của $y=\dfrac{x-1}{x+2}$ trên đoạn $[0; 3]$.

::hint
**Kiến thức:** nếu hàm số đơn điệu trên đoạn thì giá trị lớn nhất, nhỏ nhất nằm ở hai đầu mút.

**Gợi ý các bước:**
1. Tính $y'$ và xem dấu.
2. Tính $y(0)$ và $y(3)$.

::solution
$y'=\dfrac{1\cdot2-(-1)\cdot1}{(x+2)^2}=\dfrac{3}{(x+2)^2}>0$, nên hàm số đồng biến trên $[0; 3]$. $y(0)=-\dfrac12$, $y(3)=\dfrac25$.

**Đáp số.** Giá trị lớn nhất $\dfrac25$; giá trị nhỏ nhất $-\dfrac12$.
:::

:::exercise
Tìm giá trị lớn nhất và giá trị nhỏ nhất của $y=x^4-2x^2+3$ trên đoạn $[0; 2]$.

::hint
**Kiến thức:** chỉ giữ nghiệm của $y'$ nằm trong khoảng $(0; 2)$.

**Gợi ý các bước:**
1. Giải $y'=4x^3-4x=0$.
2. Loại nghiệm không thuộc $(0; 2)$, rồi so sánh các giá trị.

::solution
$y'=4x(x-1)(x+1)$; trong $(0; 2)$ chỉ có $x=1$. $y(0)=3$, $y(1)=2$, $y(2)=16-8+3=11$.

**Đáp số.** Giá trị lớn nhất $11$ (tại $x=2$); giá trị nhỏ nhất $2$ (tại $x=1$).
:::

:::exercise
Tìm giá trị nhỏ nhất của $y=x^2+\dfrac{16}{x}$ trên khoảng $(0; +\infty)$.

::hint
**Kiến thức:** trên một khoảng, lập bảng biến thiên để đọc giá trị nhỏ nhất.

**Gợi ý các bước:**
1. Tính $y'=2x-\dfrac{16}{x^2}=\dfrac{2(x^3-8)}{x^2}$.
2. Tìm nghiệm dương của $y'$ và xét dấu hai bên.

::solution
$y'=0\iff x^3=8\iff x=2$. Với $0<x<2$ thì $y'<0$, với $x>2$ thì $y'>0$. Vậy giá trị nhỏ nhất là $y(2)=4+8=12$.

**Đáp số.** $\min\limits_{(0; +\infty)} y=12$ tại $x=2$.
:::

:::exercise
Cho hàm số $f(x)=-x^3+3x^2+2$ xét trên đoạn $[-1; 3]$. Mỗi khẳng định sau đúng hay sai?

a) Phương trình $f'(x)=0$ có hai nghiệm thuộc đoạn $[-1; 3]$.

b) Giá trị lớn nhất của $f$ trên $[-1; 3]$ bằng $6$.

c) $f$ chỉ đạt giá trị lớn nhất tại $x=2$.

d) Giá trị nhỏ nhất của $f$ trên $[-1; 3]$ bằng $2$.

::hint
**Kiến thức:** so sánh giá trị tại các nghiệm của $f'$ và tại hai đầu mút; giá trị lớn nhất có thể đạt tại nhiều điểm.

**Gợi ý các bước:**
1. Giải $f'(x)=-3x^2+6x=0$.
2. Tính $f(-1)$, $f(0)$, $f(2)$, $f(3)$.

::solution
$f'(x)=-3x(x-2)=0\iff x=0$ hoặc $x=2$. $f(-1)=1+3+2=6$, $f(0)=2$, $f(2)=-8+12+2=6$, $f(3)=-27+27+2=2$.

a) **Đúng**: $0$ và $2$ đều thuộc $[-1; 3]$.

b) **Đúng**: số lớn nhất trong các giá trị là $6$.

c) **Sai**: $f(-1)=6$ nữa, nên giá trị lớn nhất đạt tại cả $x=-1$ và $x=2$.

d) **Đúng**: số nhỏ nhất là $2$, đạt tại $x=0$ và $x=3$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Tìm giá trị lớn nhất của hàm số $y=x\sqrt{9-x^2}$ trên đoạn $[0; 3]$ (ghi kết quả dưới dạng số thập phân).

::hint
**Kiến thức:** $\left(\sqrt{u}\right)'=\dfrac{u'}{2\sqrt u}$ và cách so sánh giá trị trên một đoạn.

**Gợi ý các bước:**
1. Tính $y'$ và quy đồng: tử là $9-2x^2$.
2. Tìm nghiệm trong $(0; 3)$ và so sánh với $y(0)$, $y(3)$.

::solution
$y'=\sqrt{9-x^2}-\dfrac{x^2}{\sqrt{9-x^2}}=\dfrac{9-2x^2}{\sqrt{9-x^2}}=0\iff x^2=\dfrac92$, tức $x=\dfrac{3}{\sqrt2}$. Khi đó $y=\dfrac{3}{\sqrt2}\cdot\sqrt{\dfrac92}=\dfrac92$. Hai đầu mút cho $y(0)=y(3)=0$.

**Đáp số.** $4{,}5$.
:::

:::exercise
Một xưởng sản xuất $x$ chiếc ghế mỗi tuần ($10\le x\le 100$) với tổng chi phí $C(x)=x^2+100x+2500$ (nghìn đồng). Chi phí trung bình cho mỗi chiếc ghế là $A(x)=\dfrac{C(x)}{x}$. Xưởng nên sản xuất bao nhiêu chiếc mỗi tuần để chi phí trung bình thấp nhất? Chi phí đó là bao nhiêu?

::hint
**Kiến thức:** tìm giá trị nhỏ nhất của $A(x)=x+100+\dfrac{2500}{x}$ trên đoạn $[10; 100]$.

**Gợi ý các bước:**
1. Tính $A'(x)$ và giải $A'(x)=0$.
2. So sánh giá trị tại nghiệm và tại $10$, $100$.

::solution
$A'(x)=1-\dfrac{2500}{x^2}=0\iff x=50$. $A(10)=10+100+250=360$, $A(50)=50+100+50=200$, $A(100)=100+100+25=225$.

**Đáp số.** $50$ chiếc mỗi tuần; chi phí trung bình thấp nhất $200$ nghìn đồng mỗi chiếc.
:::

:::exercise Ôn tập
Tìm giá trị lớn nhất và giá trị nhỏ nhất của $y=\cos 2x+2\cos x$ trên đoạn $[0; \pi]$.

::hint
**Kiến thức:** công thức nhân đôi $\cos 2x=2\cos^2x-1$ (lớp 11); với $x\in[0; \pi]$ thì $\cos x\in[-1; 1]$.

**Gợi ý các bước:**
1. Đặt $t=\cos x$, viết $y=g(t)$.
2. Tìm giá trị lớn nhất, nhỏ nhất của $g$ trên $[-1; 1]$.

::solution
$y=2t^2+2t-1=g(t)$ với $t\in[-1; 1]$. $g'(t)=4t+2=0\iff t=-\dfrac12$. $g(-1)=-1$, $g\left(-\dfrac12\right)=\dfrac12-1-1=-\dfrac32$, $g(1)=3$.

**Đáp số.** Giá trị lớn nhất $3$ (tại $x=0$); giá trị nhỏ nhất $-\dfrac32$ (tại $x=\dfrac{2\pi}{3}$).
:::

:::exercise Ôn tập
Tìm giá trị lớn nhất và giá trị nhỏ nhất của $y=-x^2+4x+1$ trên đoạn $[0; 5]$ bằng hai cách: dùng đỉnh parabol (lớp 10) và dùng đạo hàm.

::hint
**Kiến thức:** parabol $y=ax^2+bx+c$ với $a<0$ có đỉnh tại $x=-\dfrac{b}{2a}$ là điểm cao nhất (xem [hàm số bậc hai](lesson:quadratic-function)).

**Gợi ý các bước:**
1. Cách 1: tìm đỉnh, xem đỉnh có thuộc $[0; 5]$ không, rồi so sánh với hai đầu mút.
2. Cách 2: giải $y'=0$ và so sánh như thường lệ.

::solution
Cách 1: đỉnh tại $x=-\dfrac{4}{2\cdot(-1)}=2\in[0; 5]$, $y(2)=5$. Cách 2: $y'=-2x+4=0\iff x=2$. Cả hai cách đều so sánh $y(0)=1$, $y(2)=5$, $y(5)=-25+20+1=-4$.

**Đáp số.** Giá trị lớn nhất $5$ (tại $x=2$); giá trị nhỏ nhất $-4$ (tại $x=5$).
:::

:::exercise Thử thách
Tìm giá trị lớn nhất và giá trị nhỏ nhất của $y=x+\sqrt2\cos x$ trên đoạn $\left[0; \dfrac{\pi}{2}\right]$.

::hint
**Kiến thức:** cách so sánh giá trị trên một đoạn; để so sánh các số vô tỉ, dùng giá trị gần đúng.

**Gợi ý các bước:**
1. Giải $y'=1-\sqrt2\sin x=0$ trên $\left(0; \dfrac{\pi}{2}\right)$.
2. Tính $y$ tại nghiệm và tại hai đầu mút, rồi so sánh bằng giá trị gần đúng.

::solution
$\sin x=\dfrac{1}{\sqrt2}$ cho $x=\dfrac{\pi}{4}$. $y(0)=\sqrt2\approx1{,}414$; $y\left(\dfrac{\pi}{4}\right)=\dfrac{\pi}{4}+1\approx1{,}785$; $y\left(\dfrac{\pi}{2}\right)=\dfrac{\pi}{2}\approx1{,}571$.

**Đáp số.** Giá trị lớn nhất $\dfrac{\pi}{4}+1$ (tại $x=\dfrac{\pi}{4}$); giá trị nhỏ nhất $\sqrt2$ (tại $x=0$).
:::

## Kiểm tra mini

:::quiz
::mc
Giá trị lớn nhất của hàm số $f(x)=x^3-12x+1$ trên đoạn $[-1; 3]$ bằng
A. $17$.
B. $-15$.
C. $-8$.
D. $12$.
::key D
$f'(x)=3x^2-12=0\iff x=\pm2$, chỉ lấy $x=2\in(-1; 3)$. So sánh $f(-1)=12$, $f(2)=-15$, $f(3)=-8$. Phương án A là $f(-2)=17$, giá trị tại nghiệm nằm ngoài đoạn.

::mc
Giá trị nhỏ nhất của hàm số $y=\dfrac{2x-1}{x+1}$ trên đoạn $[0; 2]$ bằng
A. $-1$.
B. $1$.
C. $2$.
D. $0$.
::key A
$y'=\dfrac{3}{(x+1)^2}>0$ nên hàm số đồng biến trên $[0; 2]$, giá trị nhỏ nhất là $y(0)=-1$. Phương án B là giá trị lớn nhất $y(2)$; số $2$ chỉ là giới hạn khi $x\to+\infty$.

::mc
Giá trị nhỏ nhất của hàm số $y=x+\dfrac{4}{x-1}$ trên khoảng $(1; +\infty)$ bằng
A. $4$.
B. $3$.
C. $5$.
D. $-3$.
::key C
$y'=1-\dfrac{4}{(x-1)^2}=0\iff x=3$ (loại $x=-1$), $y'$ đổi dấu từ $-$ sang $+$ tại $x=3$ nên giá trị nhỏ nhất là $y(3)=5$. Phương án B là điểm $x=3$, phương án A quên số hạng $+1$ khi viết $y=(x-1)+\dfrac{4}{x-1}+1$, phương án D là $y(-1)$.

::mc
Hàm số $y=f(x)$ liên tục trên đoạn $[-2; 4]$ và $f'(x)>0$ với mọi $x\in(-2; 4)$. Khẳng định nào sau đây đúng?
A. $\max\limits_{[-2; 4]} f(x)=f(-2)$.
B. $\max\limits_{[-2; 4]} f(x)=f(4)$.
C. $\min\limits_{[-2; 4]} f(x)=f(4)$.
D. Hàm số không có giá trị lớn nhất trên $[-2; 4]$.
::key B
Hàm số đồng biến trên $[-2; 4]$ nên giá trị lớn nhất đạt tại đầu mút phải $x=4$. Hàm số liên tục trên một đoạn luôn có giá trị lớn nhất, nên D sai.

::tf
Cho hàm số $f(x)=x^4-8x^2+3$ xét trên đoạn $[-1; 3]$.
a) Phương trình $f'(x)=0$ có ba nghiệm thuộc đoạn $[-1; 3]$.
b) $f(2)=-13$.
c) Giá trị lớn nhất của $f(x)$ trên đoạn $[-1; 3]$ bằng $3$.
d) Tổng giá trị lớn nhất và giá trị nhỏ nhất của $f(x)$ trên đoạn $[-1; 3]$ bằng $-1$.
::key S Đ S Đ
a) Sai: $f'(x)=4x(x^2-4)$ có nghiệm $0$, $2$, $-2$ nhưng $-2\notin[-1; 3]$. b) Đúng: $16-32+3=-13$. c) Sai: $f(-1)=-4$, $f(0)=3$, $f(2)=-13$, $f(3)=12$ nên giá trị lớn nhất là $12$ (tại đầu mút). d) Đúng: $12+(-13)=-1$.

::sa
Một xưởng sản xuất $x$ tấn hàng mỗi tháng ($0\le x\le 20$) với lợi nhuận $P(x)=-x^3+18x^2+135x$ (triệu đồng). Lợi nhuận lớn nhất mỗi tháng bằng bao nhiêu triệu đồng?
::key 2700
$P'(x)=-3(x-15)(x+3)=0\iff x=15$ (loại $x=-3$). So sánh $P(0)=0$, $P(15)=2700$, $P(20)=1900$: lợi nhuận lớn nhất là $2700$ triệu đồng.

::sa
Tìm giá trị lớn nhất của hàm số $y=\sqrt{x}\,(6-x)$ trên đoạn $[0; 6]$ (làm tròn kết quả đến hàng phần mười).
::key 5,7
$y=6\sqrt x-x\sqrt x$, $y'=\dfrac{3}{\sqrt x}-\dfrac32\sqrt x=0\iff x=2$. So sánh $y(0)=y(6)=0$ và $y(2)=4\sqrt2\approx5{,}66$, làm tròn được $5{,}7$.
:::
