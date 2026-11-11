---
title: Khảo sát hàm số bằng đạo hàm
description: AP Calculus Unit 5: định lí giá trị trung bình, cực trị, đồng biến – nghịch biến, tính lõm, đọc đồ thị của f', tối ưu và cách lập luận.
minutes: 50
---

:::goals
- Áp dụng định lí giá trị trung bình và định lí giá trị cực biên, có kiểm tra điều kiện.
- Tìm khoảng đồng biến, nghịch biến và phân loại cực trị bằng dấu hiệu đạo hàm cấp một, cấp hai.
- Tìm giá trị lớn nhất, nhỏ nhất trên một đoạn bằng cách so sánh các "ứng viên".
- Xác định tính lõm và điểm uốn, kể cả từ đồ thị của $f'$.
- Giải bài toán tối ưu và viết lời lập luận được đủ điểm.
:::

Unit 5 là một trong những unit có trọng số lớn nhất của AB, và các ý tưởng của nó quay lại trong gần như mọi câu tự luận có đồ thị hay bảng giá trị của $f'$. Phần tính toán ngắn; điều đề thi thực sự kiểm tra là lập luận. "Vì $f'$ đổi dấu từ âm sang dương tại $x=2$" được điểm; "vì $f'(2)=0$" thì không. Bài này luyện cả phần toán lẫn câu chữ. Bạn đã quen nhiều nội dung này từ chương khảo sát hàm số ở trường phổ thông; điểm mới là cách AP đòi hỏi lí giải bằng lời.

## Hai định lí về sự tồn tại

:::theorem Định lí giá trị trung bình (Mean Value Theorem, MVT)
Nếu $f$ liên tục trên $[a,b]$ và có đạo hàm trên $(a,b)$ thì tồn tại ít nhất một $c$ thuộc $(a,b)$ sao cho
$$f'(c)=\frac{f(b)-f(a)}{b-a}.$$
Ở đâu đó, tốc độ tức thời bằng tốc độ trung bình. Ở Việt Nam định lí này còn gọi là định lí Lagrange.
:::

:::theorem Định lí giá trị cực biên (Extreme Value Theorem, EVT)
Nếu $f$ liên tục trên một đoạn $[a,b]$ thì $f$ có cả giá trị lớn nhất và giá trị nhỏ nhất trên $[a,b]$.
:::

:::example Giá trị c mà MVT bảo đảm
Với $f(x)=x^3-x$ trên $[0,2]$, giá trị $c$ nào thoả mãn kết luận của định lí giá trị trung bình?
A. $1$
B. $\dfrac{\sqrt3}{2}$
C. $1{,}5$
D. $\dfrac{2}{\sqrt3}$

**Lời giải.** $f$ là đa thức nên thoả mãn các điều kiện. Tốc độ trung bình là $\dfrac{f(2)-f(0)}{2}=\dfrac{6-0}{2}=3$. Giải $f'(c)=3c^2-1=3$: $c^2=\dfrac43$, nên $c=\dfrac{2}{\sqrt3}\approx1{,}155$, thuộc $(0,2)$: đáp án **D**.
:::

## Đồng biến, nghịch biến và cực trị

$f$ đồng biến (tăng) khi $f'>0$ và nghịch biến (giảm) khi $f'<0$. **Điểm tới hạn** là một $x$ bên trong miền xác định tại đó $f'(x)=0$ hoặc $f'(x)$ không tồn tại.

- **Dấu hiệu đạo hàm cấp một.** Nếu $f'$ đổi dấu từ dương sang âm tại một điểm tới hạn thì $f$ đạt cực đại tại đó; từ âm sang dương thì cực tiểu; không đổi dấu thì không có cực trị.
- **Dấu hiệu đạo hàm cấp hai.** Nếu $f'(c)=0$ và $f''(c)<0$ thì cực đại; nếu $f''(c)>0$ thì cực tiểu; nếu $f''(c)=0$ thì dấu hiệu không kết luận được.

:::example Một hàm bậc ba
Cho $f(x)=x^3-3x^2-9x+5$. Tìm khoảng đồng biến và các cực trị của $f$.

**Lời giải.** $f'(x)=3x^2-6x-9=3(x-3)(x+1)$. Xét dấu: $f'>0$ khi $x<-1$, $f'<0$ khi $-1<x<3$, $f'>0$ khi $x>3$. Vậy $f$ đồng biến trên $(-\infty,-1)$ và $(3,\infty)$.

$f'$ đổi dấu từ dương sang âm tại $x=-1$: cực đại $f(-1)=10$. $f'$ đổi dấu từ âm sang dương tại $x=3$: cực tiểu $f(3)=-22$.
:::

## Giá trị lớn nhất, nhỏ nhất: so sánh các ứng viên

Trên một đoạn, tính $f$ tại mọi điểm tới hạn và tại hai đầu mút; giá trị lớn nhất trong số đó là giá trị lớn nhất của hàm, giá trị nhỏ nhất là giá trị nhỏ nhất của hàm.

:::example Các ứng viên trên một đoạn
Tìm giá trị lớn nhất và nhỏ nhất của $g(x)=x^3-3x^2$ trên $[-1,4]$.

**Lời giải.** $g'(x)=3x^2-6x=3x(x-2)$, nên các điểm tới hạn là $x=0$ và $x=2$.

| $x$ | $-1$ | $0$ | $2$ | $4$ |
|---|---|---|---|---|
| $g(x)$ | $-4$ | $0$ | $-4$ | $16$ |

Giá trị lớn nhất $16$ tại $x=4$; giá trị nhỏ nhất $-4$, đạt tại cả $x=-1$ và $x=2$.
:::

## Tính lõm và điểm uốn

$f$ lõm lên (concave up) khi $f''>0$ (tương đương: $f'$ đồng biến) và lõm xuống (concave down) khi $f''<0$. **Điểm uốn** là điểm tại đó đồ thị đổi chiều lõm, tức là $f''$ đổi dấu.

:::example Khi dấu hiệu cấp hai bất lực
Cho $h(x)=x^4-4x^3$. Tìm các điểm uốn và phân loại các điểm tới hạn.

**Lời giải.** $h'(x)=4x^3-12x^2=4x^2(x-3)$ và $h''(x)=12x^2-24x=12x(x-2)$.

$h''$ đổi dấu tại $x=0$ và $x=2$: cả hai đều là điểm uốn.

Điểm tới hạn: $x=0$ và $x=3$. $h''(3)=36>0$, nên cực tiểu tại $x=3$. Tại $x=0$, $h''(0)=0$ và dấu hiệu cấp hai không kết luận được; dấu hiệu cấp một cho thấy $h'\le0$ ở cả hai phía của $0$, nên tại đó không có cực trị.
:::

:::graph Đồ thị của $f'(x)=x^2-x-2$ (đồ thị đạo hàm, không phải đồ thị của $f$)
alt: Một parabol quay lên, cắt trục hoành tại -1 và 2, điểm thấp nhất tại x = 0,5
x: -2.5..3.5
y: -3..5
plot: x^2 - x - 2
point: (-1, 0) "-1" above-left
point: (2, 0) "2" above-right
:::

:::example Đọc đồ thị của đạo hàm
Hình trên là đồ thị của $f'$, đạo hàm của hàm số $f$. Hàm số $f$ đạt cực tiểu tại
A. $-1$
B. $0{,}5$
C. $2$
D. $-2$

**Lời giải.** $f'$ đổi dấu từ âm sang dương tại $x=2$, nên $f$ đạt cực tiểu tại đó: đáp án **C**. Tại $x=-1$, dấu đổi từ dương sang âm (cực đại). Tại $x=0{,}5$, $f'$ đạt điểm thấp nhất, tức là $f'$ chuyển từ giảm sang tăng: đó là điểm uốn của $f$, một cái bẫy quen thuộc.
:::

## Bài toán tối ưu

Viết đại lượng cần tối ưu thành hàm của một biến, nêu miền xác định, tìm điểm tới hạn, rồi lập luận đó là lớn nhất hay nhỏ nhất bằng cách so sánh ứng viên, bảng xét dấu hoặc đạo hàm cấp hai.

:::example Rào đất ven sông
Một bác nông dân có $600$ mét lưới để rào một mảnh đất hình chữ nhật ven một con sông thẳng; phía bờ sông không cần rào. Diện tích lớn nhất có thể là bao nhiêu?

**Lời giải.** Gọi $y$ là mỗi cạnh vuông góc với bờ sông; cạnh song song với bờ sông là $600-2y$. Diện tích $A(y)=y(600-2y)=600y-2y^2$ với $0<y<300$. $A'(y)=600-4y=0$ cho $y=150$. Vì $A''(y)=-4<0$ nên đây là cực đại, và là điểm tới hạn duy nhất trên khoảng, nên là giá trị lớn nhất: $A(150)=150\cdot300=45.000$ mét vuông.
:::

:::warning Những cái bẫy thường gặp
- **"$f'(c)=0$ nên có cực trị."** Chưa đủ: $f'$ phải đổi dấu (hoặc dùng $f''$).
- **"$f''(c)=0$ nên có điểm uốn."** Chưa đủ: $f''$ phải đổi dấu.
- **Quên hai đầu mút** khi so sánh ứng viên.
- **Đọc đồ thị $f'$ như đồ thị $f$.** Trên đồ thị của $f'$, cực trị của $f$ nằm ở các giao điểm với trục hoành mà tại đó có đổi dấu; điểm uốn của $f$ nằm ở các đỉnh và đáy của $f'$.
- **Bỏ qua điều kiện của MVT.** Ở phần tự luận, hãy ghi "liên tục trên $[a,b]$ và có đạo hàm trên $(a,b)$".
:::

:::tip Câu lập luận được điểm (viết bằng tiếng Anh trong bài thi)
- "$f$ has a relative maximum at $x=-1$ because $f'$ changes from positive to negative there." ($f$ đạt cực đại tại $x=-1$ vì $f'$ đổi dấu từ dương sang âm tại đó.)
- "The graph of $f$ is concave up on $(0,2)$ because $f'$ is increasing there" (hoặc "because $f''>0$").
- Luôn nói về đúng hàm được cho: nếu đồ thị là của $f'$, hãy nói về $f'$, đừng nói mơ hồ "đồ thị".
:::

:::terms
- định lí giá trị trung bình (định lí Lagrange) | Mean Value Theorem
- định lí giá trị cực biên (tồn tại GTLN, GTNN) | Extreme Value Theorem
- điểm tới hạn | critical point
- cực trị (địa phương) | relative (local) extremum
- giá trị lớn nhất, nhỏ nhất (cực trị toàn cục) | absolute extremum
- lõm lên / lõm xuống | concave up / concave down
- điểm uốn | point of inflection
- bài toán tối ưu | optimization
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
Với $f(x)=x^2$ trên $[1,3]$, giá trị $c$ mà định lí giá trị trung bình bảo đảm là
A. $1{,}5$
B. $2$
C. $2{,}5$
D. $4$

::hint
**Cần nhớ:** giải $f'(c)=$ tốc độ thay đổi trung bình.

**Các bước:**
1. Tốc độ trung bình: $\dfrac{9-1}{2}=4$.
2. $2c=4$.

::solution
$c=2$: đáp án **B**.
:::

:::exercise Tự luận
Tìm các khoảng đồng biến, nghịch biến và cực trị của $f(x)=xe^{-x}$.

::hint
**Cần nhớ:** quy tắc tích và dấu của $f'$.

**Các bước:**
1. $f'(x)=e^{-x}-xe^{-x}=e^{-x}(1-x)$.
2. $e^{-x}>0$ với mọi $x$, nên dấu của $f'$ là dấu của $1-x$.

::solution
$f$ đồng biến trên $(-\infty,1)$ và nghịch biến trên $(1,\infty)$. Cực đại tại $x=1$, giá trị $f(1)=\dfrac1e$, vì $f'$ đổi dấu từ dương sang âm tại đó.
:::

:::exercise Trắc nghiệm
Điểm uốn của $f(x)=x^3-6x^2+1$ có hoành độ
A. $x=0$
B. $x=4$
C. $x=2$
D. $x=-2$

::hint
**Cần nhớ:** nơi $f''$ đổi dấu.

**Các bước:**
1. $f''(x)=6x-12$.

::solution
$f''$ đổi dấu tại $x=2$: đáp án **C**. Phương án B là điểm tới hạn ($f'(4)=0$), không phải điểm uốn.
:::

:::exercise Tự luận
Tìm giá trị lớn nhất và nhỏ nhất của $f(x)=2x^3-3x^2-12x+1$ trên $[-2,3]$.

::hint
**Cần nhớ:** so sánh các ứng viên.

**Các bước:**
1. $f'(x)=6x^2-6x-12=6(x-2)(x+1)$.
2. Tính $f$ tại $-2$, $-1$, $2$, $3$.

::solution
$f(-2)=-3$, $f(-1)=8$, $f(2)=-19$, $f(3)=-8$. Giá trị lớn nhất $8$ tại $x=-1$; giá trị nhỏ nhất $-19$ tại $x=2$.
:::

:::exercise Tự luận
Một hàm số có đạo hàm $f'(x)=(x-1)^2(x+2)$. Tìm và phân loại mọi cực trị của $f$.

::hint
**Cần nhớ:** dấu hiệu cấp một; thừa số bình phương không đổi dấu.

**Các bước:**
1. Điểm tới hạn: $x=-2$ và $x=1$.
2. Dấu của $f'$ ở hai phía mỗi điểm tới hạn.

::solution
$f'<0$ khi $x<-2$ và $f'>0$ khi $-2<x<1$ cũng như khi $x>1$. Vậy $f$ đạt cực tiểu tại $x=-2$, và không có cực trị tại $x=1$ vì $f'$ không đổi dấu tại đó.
:::

## Bài tập vận dụng

:::exercise Chiếc hộp không nắp
Từ một tấm bìa hình vuông $30$ nhân $30$ xăng-ti-mét, người ta cắt bốn hình vuông cạnh $x$ xăng-ti-mét ở bốn góc rồi gấp lên thành một chiếc hộp không nắp. Tìm $x$ để thể tích lớn nhất và tính thể tích đó.

::hint
**Cần nhớ:** $V(x)=x(30-2x)^2$ với $0<x<15$.

**Các bước:**
1. $V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)$.
2. Điểm tới hạn trong miền: $x=5$.

::solution
$V'>0$ khi $0<x<5$ và $V'<0$ khi $5<x<15$, nên $x=5$ cho giá trị lớn nhất: $V(5)=5\cdot20^2=2000$ xăng-ti-mét khối.
:::

:::exercise Viết lời lập luận
Hàm số $f$ có $f'(x)=x^2-4$.
a) $f$ có đạt cực đại tại $x=-2$ không? Giải thích.
b) Tại $x=1$, đồ thị của $f$ lõm lên hay lõm xuống? Giải thích.

::hint
**Cần nhớ:** dấu của $f'$ quanh $-2$, và dấu của $f''(1)$.

**Các bước:**
1. $f'(x)=(x-2)(x+2)$.
2. $f''(x)=2x$.

::solution
a) Có: $f'$ đổi dấu từ dương (khi $x<-2$) sang âm (khi $-2<x<2$) tại $x=-2$, nên $f$ đạt cực đại tại đó.

b) $f''(1)=2>0$, nên đồ thị của $f$ lõm lên tại $x=1$.
:::

:::exercise Điểm gần nhất
Tìm điểm trên đường cong $y=\sqrt x$ gần điểm $(3, 0)$ nhất.

::hint
**Cần nhớ:** cực tiểu hoá bình phương khoảng cách, dễ hơn mà cho cùng điểm cực tiểu.

**Các bước:**
1. $D(x)=(x-3)^2+\left(\sqrt x\right)^2=x^2-5x+9$.
2. $D'(x)=2x-5$.

::solution
$D'(x)=0$ tại $x=2{,}5$, và $D''=2>0$, nên đây là cực tiểu. Điểm cần tìm là $\left(2{,}5; \sqrt{2{,}5}\right)\approx(2{,}5; 1{,}58)$, cách điểm đã cho một khoảng $\sqrt{2{,}75}\approx1{,}66$.
:::

:::exercise Thử thách
Một lon hình trụ kín phải chứa được $500$ xăng-ti-mét khối. Tìm bán kính để tốn ít vật liệu nhất, và chứng tỏ lon tốt nhất có chiều cao bằng đường kính.

::hint
**Cần nhớ:** dùng $\pi r^2h=500$ để khử $h$.

**Các bước:**
1. Diện tích toàn phần $S=2\pi r^2+2\pi rh=2\pi r^2+\dfrac{1000}{r}$.
2. $S'(r)=4\pi r-\dfrac{1000}{r^2}$.

::solution
$S'(r)=0$ cho $r^3=\dfrac{250}{\pi}$, nên $r\approx4{,}30$ xăng-ti-mét. $S''(r)=4\pi+\dfrac{2000}{r^3}>0$, nên đây là cực tiểu. Khi đó $h=\dfrac{500}{\pi r^2}=\dfrac{2\cdot250}{\pi r^2}=\dfrac{2\pi r^3}{\pi r^2}=2r$, nên $h\approx8{,}60$ xăng-ti-mét, bằng đường kính.
:::

:::quiz
::mc
Nếu $f'(x)=x(x-4)$ thì $f$ nghịch biến khi
A. $x<0$ hoặc $x>4$
B. $x>4$
C. $0<x<4$
D. $x<0$
::key C
$f'<0$ giữa hai nghiệm $0$ và $4$.

::mc
Với $f(x)=\sqrt x$ trên $[0,4]$, giá trị $c$ mà định lí giá trị trung bình bảo đảm là
A. $1$
B. $2$
C. $\dfrac12$
D. $4$
::key A
Tốc độ trung bình là $\dfrac{2-0}{4}=\dfrac12$, và $\dfrac{1}{2\sqrt c}=\dfrac12$ cho $c=1$.

::mc
Nếu $f''(x)=(x+1)(x-3)^2$ thì đồ thị của $f$ có điểm uốn tại
A. chỉ $x=3$
B. $x=-1$ và $x=3$
C. không có giá trị nào
D. chỉ $x=-1$
::key D
$f''$ chỉ đổi dấu tại $x=-1$; thừa số bình phương giữ nguyên dấu tại $x=3$.

::mc
Giá trị lớn nhất của $f(x)=x^2-2x$ trên $[0,3]$ là
A. $0$
B. $3$
C. $-1$
D. $9$
::key B
Các ứng viên: $f(0)=0$, $f(1)=-1$, $f(3)=3$.

::tf
Cho $f(x)=x^3-3x$.
a) Các điểm tới hạn của $f$ là $x=-1$ và $x=1$.
b) $f$ đạt cực đại tại $x=1$.
c) Đồ thị của $f$ lõm xuống khi $x<0$.
d) Giá trị lớn nhất của $f$ trên $[0,2]$ là $2$.
::key Đ S Đ Đ
a) Đúng: $f'=3x^2-3$. b) Sai: $f''(1)=6>0$, là cực tiểu. c) Đúng: $f''=6x<0$. d) Đúng: $f(0)=0$, $f(1)=-2$, $f(2)=2$.

::sa
Hai số dương có tổng bằng $20$. Tích của chúng lớn nhất bằng bao nhiêu?
::key 100
$P=x(20-x)$ lớn nhất khi $x=10$: $P=100$.

::sa
Hàm số $f(x)=x^3-6x^2+9x+1$ đạt cực tiểu tại $x$ bằng bao nhiêu?
::key 3
$f'=3(x-1)(x-3)$ đổi dấu từ âm sang dương tại $x=3$.
:::
