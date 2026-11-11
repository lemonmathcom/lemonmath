---
title: Đề luyện IB Math AA SL
description: Đề luyện IB Math AA SL theo kiểu Paper 1: 90 phút, không máy tính, 80 điểm, gồm Section A và Section B, có gợi ý và lời giải chi tiết từng câu.
minutes: 90
type: exam
---

Đề luyện này theo cấu trúc **Paper 1** của IB Mathematics: Analysis and Approaches SL: 90 phút, **không dùng máy tính**, 80 điểm, gồm các câu ngắn ở Section A và các câu dài ở Section B. Mọi câu hỏi đều do Lemonmath soạn; đây không phải câu hỏi IB thật, nhưng bám theo chương trình và phong cách đề thi, kể cả số điểm [n marks] sau mỗi ý.

| | Section A | Section B |
|---|---|---|
| Số câu | 7 câu ngắn | 3 câu dài |
| Số điểm | 42 | 38 |
| Thời gian gợi ý | khoảng 45 phút | khoảng 45 phút |

**Hướng dẫn.** Trả lời tất cả các câu. Trình bày lời giải: đáp số đúng mà không có lời giải có thể không được trọn điểm. Ghi đáp số chính xác, như phân số, căn thức hay bội của $\pi$, trừ khi đề yêu cầu khác. Làm ra giấy có bấm giờ. Dưới mỗi câu có một gợi ý ngắn: hãy che lại trừ khi bị tắc, và chỉ mở lời giải sau khi đã làm xong.

## Section A

:::exercise [6 marks]
Trong một cấp số cộng, $u_1=4$ và $u_{10}=31$.

(a) Tìm công sai. [2 marks]
(b) Chứng minh $S_n=\dfrac{n(3n+5)}{2}$. [2 marks]
(c) Tìm giá trị nhỏ nhất của $n$ để $S_n>200$. [2 marks]

::hint
**Cần nhớ:** $u_{10}=u_1+9d$; $S_n=\dfrac n2\big(2u_1+(n-1)d\big)$; với câu (c), thử các giá trị gần nghiệm của $3n^2+5n=400$.

::solution
(a) $4+9d=31$, nên $d=3$.

(b) $S_n=\dfrac n2\big(8+3(n-1)\big)=\dfrac n2(3n+5)$.

(c) $S_{10}=\dfrac{10\cdot35}{2}=175$ và $S_{11}=\dfrac{11\cdot38}{2}=209$. Giá trị nhỏ nhất là $n=11$.
:::

:::exercise [6 marks]
Cho $f(x)=2x+1$ và $g(x)=x^2-3$.

(a) Tìm $(g\circ f)(x)$, viết dưới dạng $ax^2+bx+c$. [2 marks]
(b) Giải $(g\circ f)(x)=6$. [4 marks]

::hint
**Cần nhớ:** $(g\circ f)(x)=g\big(f(x)\big)=(2x+1)^2-3$.

::solution
(a) $(2x+1)^2-3=4x^2+4x-2$.

(b) $4x^2+4x-8=0$, nên $x^2+x-2=0$ và $(x+2)(x-1)=0$: $x=1$ hoặc $x=-2$.
:::

:::exercise [6 marks]
Giải $2\ln x-\ln(x+2)=\ln3$, viết đáp số dưới dạng $\dfrac{a+\sqrt b}{2}$ với $a,b\in\mathbb{Z}$.

::hint
**Cần nhớ:** $2\ln x-\ln(x+2)=\ln\dfrac{x^2}{x+2}$; sau đó loại nghiệm làm $\ln x$ không xác định.

::solution
$\dfrac{x^2}{x+2}=3$, nên $x^2-3x-6=0$ và $x=\dfrac{3\pm\sqrt{33}}{2}$. Vì $\ln x$ đòi hỏi $x>0$, và $\sqrt{33}>3$, ta loại $\dfrac{3-\sqrt{33}}{2}$. Nghiệm là $x=\dfrac{3+\sqrt{33}}{2}$.
:::

:::exercise [7 marks]
Giải $2\sin^2x=1+\cos x$ với $0\le x\le2\pi$.

::hint
**Cần nhớ:** thay $\sin^2x$ bởi $1-\cos^2x$ để được phương trình bậc hai theo $\cos x$.

::solution
$2-2\cos^2x=1+\cos x$, nên $2\cos^2x+\cos x-1=0$ và $(2\cos x-1)(\cos x+1)=0$.

$\cos x=\dfrac12$ cho $x=\dfrac\pi3$ hoặc $x=\dfrac{5\pi}{3}$. $\cos x=-1$ cho $x=\pi$.

Các nghiệm là $\dfrac\pi3$, $\pi$, $\dfrac{5\pi}{3}$.
:::

:::exercise [5 marks]
Tìm hệ số của $x^2$ trong khai triển $\left(x-\dfrac2x\right)^6$.

::hint
**Cần nhớ:** số hạng tổng quát là $\dbinom6rx^{6-r}\left(-\dfrac2x\right)^r=\dbinom6r(-2)^rx^{6-2r}$.

::solution
$6-2r=2$ cho $r=2$. Số hạng đó là $\dbinom62(-2)^2x^2=15\cdot4x^2=60x^2$. Hệ số là $60$.
:::

:::exercise [6 marks]
Các biến cố $A$ và $B$ thoả mãn $P(A)=0{,}4$, $P(B\mid A)=0{,}5$ và $P(B\mid A')=0{,}25$.

(a) Tính $P(B)$. [3 marks]
(b) Tính $P(A\mid B)$. [3 marks]

::hint
**Cần nhớ:** sơ đồ cây; $P(A\cap B)=P(A)P(B\mid A)$.

::solution
(a) $P(A\cap B)=0{,}4\times0{,}5=0{,}2$ và $P(A'\cap B)=0{,}6\times0{,}25=0{,}15$, nên $P(B)=0{,}35$.

(b) $P(A\mid B)=\dfrac{0{,}2}{0{,}35}=\dfrac47$.
:::

:::exercise [6 marks]
Hàm số $f$ thoả mãn $f'(x)=6x^2-4x$ và $f(1)=3$.

(a) Tìm $f(x)$. [4 marks]
(b) Tính $f(2)$. [2 marks]

::hint
**Cần nhớ:** lấy nguyên hàm, rồi dùng $f(1)=3$ để tìm hằng số.

::solution
(a) $f(x)=2x^3-2x^2+C$. $f(1)=0+C=3$, nên $f(x)=2x^3-2x^2+3$.

(b) $f(2)=16-8+3=11$.
:::

## Section B

:::exercise [13 marks]
Cho $f(x)=x^3-6x^2+9x+1$.

(a) Tìm $f'(x)$. [1 mark]
(b) Tìm toạ độ các điểm dừng của đồ thị $f$ và xác định tính chất của chúng. [6 marks]
(c) Tìm toạ độ điểm uốn. [2 marks]
(d) Viết phương trình tiếp tuyến của đồ thị $f$ tại $x=0$. [2 marks]
(e) Tính diện tích miền giới hạn bởi đồ thị $f$, trục $x$ và các đường thẳng $x=0$, $x=3$. [2 marks]

::hint
**Cần nhớ:** $f'(x)=3(x-1)(x-3)$; $f''(x)=6x-12$; với câu (e), kiểm tra $f(x)>0$ trên $[0,3]$.

::solution
(a) $f'(x)=3x^2-12x+9$.

(b) $f'(x)=3(x-1)(x-3)=0$ tại $x=1$ và $x=3$. $f''(x)=6x-12$: $f''(1)=-6<0$, nên $(1,5)$ là điểm cực đại; $f''(3)=6>0$, nên $(3,1)$ là điểm cực tiểu.

(c) $f''(x)=0$ tại $x=2$, và $f''$ đổi dấu tại đó: $(2,3)$.

(d) $f(0)=1$ và $f'(0)=9$, nên $y=9x+1$.

(e) Giá trị nhỏ nhất trên $[0,3]$ là $1>0$, nên diện tích là $\displaystyle\int_0^3f(x)\,dx=\left[\frac{x^4}{4}-2x^3+\frac{9x^2}{2}+x\right]_0^3=\frac{81}{4}-54+\frac{81}{2}+3=\frac{39}{4}$.
:::

:::exercise [12 marks]
Trong tam giác $ABC$, $AB=5$, $AC=8$ và $\hat{A}=60^\circ$. Điểm $D$ nằm trên $AC$ sao cho $BD$ vuông góc với $AC$.

(a) Chứng minh $BC=7$. [3 marks]
(b) Tính diện tích tam giác $ABC$. [2 marks]
(c) Tìm giá trị chính xác của $\sin A\hat{B}C$. [3 marks]
(d) Tìm độ dài chính xác của $AD$ và $BD$. [4 marks]

::hint
**Cần nhớ:** định lí cosin, $\dfrac12ab\sin C$, định lí sin, và lượng giác trong tam giác vuông $ABD$.

::solution
(a) $BC^2=25+64-2(5)(8)\cos60^\circ=89-40=49$, nên $BC=7$.

(b) $\dfrac12(5)(8)\sin60^\circ=20\cdot\dfrac{\sqrt3}{2}=10\sqrt3$.

(c) $\dfrac{\sin B}{8}=\dfrac{\sin60^\circ}{7}$, nên $\sin A\hat{B}C=\dfrac{8}{7}\cdot\dfrac{\sqrt3}{2}=\dfrac{4\sqrt3}{7}$.

(d) Trong tam giác vuông $ABD$: $AD=5\cos60^\circ=\dfrac52$ và $BD=5\sin60^\circ=\dfrac{5\sqrt3}{2}$. Kiểm tra: $\dfrac12\cdot8\cdot\dfrac{5\sqrt3}{2}=10\sqrt3$, đúng bằng diện tích ở câu (b).
:::

:::exercise [13 marks]
Trong một trò chơi, xác suất thắng mỗi lượt là $\dfrac14$, độc lập giữa các lượt. Mai chơi $3$ lượt. Gọi $X$ là số lượt Mai thắng.

(a) Viết phân phối của $X$. [1 mark]
(b) Tính $P(X=0)$. [2 marks]
(c) Tính $P(X\ge1)$. [2 marks]
(d) Tính $P(X=2)$. [2 marks]
(e) Tính $E(X)$. [1 mark]
(f) Mai trả $2$ đô la để chơi ba lượt và nhận $3$ đô la cho mỗi lượt thắng. Trò chơi có công bằng không? [3 marks]
(g) Tìm số tiền Mai cần nhận cho mỗi lượt thắng để trò chơi công bằng. [2 marks]

::hint
**Cần nhớ:** $X\sim B\left(3,\dfrac14\right)$; $P(X\ge1)=1-P(X=0)$; trò chơi công bằng khi số tiền lãi kì vọng bằng $0$.

::solution
(a) $X\sim B\left(3,\dfrac14\right)$.

(b) $\left(\dfrac34\right)^3=\dfrac{27}{64}$.

(c) $1-\dfrac{27}{64}=\dfrac{37}{64}$.

(d) $\dbinom32\left(\dfrac14\right)^2\left(\dfrac34\right)=3\cdot\dfrac{1}{16}\cdot\dfrac34=\dfrac{9}{64}$.

(e) $E(X)=3\cdot\dfrac14=\dfrac34$.

(f) Lãi kì vọng $=3\cdot\dfrac34-2=\dfrac14$ đô la. Giá trị này khác $0$, nên trò chơi không công bằng: nó có lợi cho Mai.

(g) $k\cdot\dfrac34=2$, nên $k=\dfrac83$ đô la cho mỗi lượt thắng.
:::

## Sau khi làm đề

Cộng điểm trên 80, từng ý một, như một giám khảo: điểm phương pháp vẫn được tính khi đáp số sai. Ngưỡng điểm thay đổi theo từng kì thi, vì vậy hãy dùng điểm số để tìm chủ đề còn yếu thay vì đoán mức điểm. Với mỗi điểm bị mất, hãy ôn lại bài tương ứng: [Số và đại số](lesson:ibaa-number-algebra) (bài 1, 3, 5), [Hàm số](lesson:ibaa-functions) (bài 2), [Hình học và lượng giác](lesson:ibaa-geometry-trigonometry) (bài 4, 9), [Thống kê và xác suất](lesson:ibaa-statistics-probability) (bài 6, 10), [Giải tích](lesson:ibaa-calculus) (bài 7, 8).
