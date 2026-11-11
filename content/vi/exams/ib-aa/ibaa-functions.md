---
title: Hàm số: đồ thị, phép biến đổi, hàm ngược
description: IB Math AA chủ đề 2: tập xác định và tập giá trị, hàm hợp và hàm ngược, biến đổi đồ thị, hàm bậc hai, hàm phân thức và giải phương trình bằng GDC.
minutes: 45
---

:::goals
- Nêu tập xác định và tập giá trị của hàm số, và thu hẹp tập xác định để hàm ngược tồn tại.
- Lập hàm hợp và tìm hàm ngược bằng đại số.
- Mô tả và thực hiện các phép biến đổi đồ thị.
- Khảo sát hàm bậc hai bằng dạng đỉnh và biệt thức.
- Tìm tiệm cận và giao điểm với các trục của hàm phân thức $y=\dfrac{ax+b}{cx+d}$.
- Giải phương trình bằng đồ thị trên GDC và ghi đáp số đúng cách.
:::

Chủ đề 2 là ngôn ngữ của cả chương trình. Một câu giải tích ở Section B gần như luôn mở đầu bằng một hàm số: bạn được hỏi tập xác định, một giao điểm, một tiệm cận hay hàm ngược trước khi đến phần đạo hàm. Những ý đầu này là điểm dễ, và chủ yếu bị mất vì kí hiệu cẩu thả hoặc quên điều kiện.

## Tập xác định, tập giá trị, hàm hợp và hàm ngược

**Tập xác định (domain)** là tập các giá trị đầu vào; **tập giá trị (range)** là tập các giá trị đầu ra. Hai điều kiện xuất hiện liên tục: không chia cho không, và (với hàm thực) không lấy căn bậc hai của số âm hay logarit của số không dương.

**Hàm hợp (composite)** $(f\circ g)(x)=f\big(g(x)\big)$ thực hiện $g$ trước. **Hàm ngược (inverse)** $f^{-1}$ đảo ngược tác dụng của $f$: để tìm nó, viết $y=f(x)$, đổi chỗ $x$ và $y$, rồi rút $y$. Hàm ngược chỉ tồn tại khi $f$ là đơn ánh; đồ thị của $f^{-1}$ đối xứng với đồ thị của $f$ qua đường thẳng $y=x$, và tập xác định với tập giá trị đổi chỗ cho nhau.

:::example Hàm hợp và hàm ngược
Cho $f(x)=2x-3$ và $g(x)=x^2+1$.

(a) Tính $(f\circ g)(2)$. [2 marks]
(b) Tìm $(g\circ f)(x)$. [2 marks]
(c) Tìm $f^{-1}(x)$. [2 marks]

**Lời giải.** (a) $g(2)=5$, nên $(f\circ g)(2)=f(5)=7$.

(b) $(g\circ f)(x)=(2x-3)^2+1$, có thể để nguyên dạng này trừ khi đề yêu cầu khai triển.

(c) $y=2x-3$; đổi chỗ: $x=2y-3$, nên $f^{-1}(x)=\dfrac{x+3}{2}$.
:::

:::example Thu hẹp tập xác định
Cho $h(x)=(x-1)^2$ với $x\ge1$.

(a) Viết tập giá trị của $h$. [1 mark]
(b) Tìm $h^{-1}(x)$ và nêu tập xác định của nó. [3 marks]

**Lời giải.** (a) $h(x)\ge0$.

(b) $y=(x-1)^2$; đổi chỗ: $x=(y-1)^2$, nên $y-1=\pm\sqrt x$. Vì tập giá trị của $h^{-1}$ là tập xác định của $h$ nên $y\ge1$, do đó lấy căn dương: $h^{-1}(x)=1+\sqrt x$, với tập xác định $x\ge0$.
:::

## Biến đổi đồ thị

| Phương trình | Phép biến đổi đồ thị $y=f(x)$ |
|---|---|
| $y=f(x)+b$ | tịnh tiến lên trên $b$ đơn vị |
| $y=f(x-a)$ | tịnh tiến sang phải $a$ đơn vị |
| $y=pf(x)$ | co giãn theo phương thẳng đứng với hệ số $p$ |
| $y=f(qx)$ | co giãn theo phương ngang với hệ số $\dfrac1q$ |
| $y=-f(x)$ | đối xứng qua trục $x$ |
| $y=f(-x)$ | đối xứng qua trục $y$ |

Thay đổi bên trong ngoặc tác động lên $x$ và làm điều "ngược" với vẻ bề ngoài: $f(x-3)$ dời đồ thị sang phải, còn $f(2x)$ ép đồ thị theo phương ngang.

:::example Theo dấu một điểm
Điểm $(4,-2)$ nằm trên đồ thị $y=f(x)$. Tìm toạ độ điểm tương ứng trên đồ thị $y=2f(x-3)+1$. [3 marks]

**Lời giải.** $x-3=4$ cho $x=7$. Giá trị $y$ mới là $2(-2)+1=-3$. Điểm cần tìm là $(7,-3)$. Với giá trị $y$, thứ tự quan trọng: co giãn trước, tịnh tiến sau.
:::

## Hàm bậc hai

Hàm bậc hai có ba dạng viết: $f(x)=ax^2+bx+c$ (giao với trục $y$ tại $c$), $f(x)=a(x-h)^2+k$ (đỉnh $(h,k)$, trục đối xứng $x=h$) và $f(x)=a(x-p)(x-q)$ (giao với trục $x$ tại $p$ và $q$). **Biệt thức (discriminant)** $\Delta=b^2-4ac$ quyết định số nghiệm thực: hai nghiệm nếu $\Delta>0$, một nghiệm kép nếu $\Delta=0$, vô nghiệm nếu $\Delta<0$.

:::example Dạng đỉnh và biệt thức
(a) Viết $f(x)=2x^2-8x+5$ dưới dạng $a(x-h)^2+k$ và viết toạ độ đỉnh. [3 marks]
(b) Tìm các giá trị của $k$ để $x^2+kx+9=0$ có nghiệm kép. [3 marks]

**Lời giải.** (a) $2\left(x^2-4x\right)+5=2(x-2)^2-8+5=2(x-2)^2-3$. Đỉnh là $(2,-3)$.

(b) $\Delta=k^2-36=0$, nên $k=\pm6$.
:::

## Hàm phân thức

Với $f(x)=\dfrac{ax+b}{cx+d}$, $c\ne0$: **tiệm cận đứng** là nơi mẫu bằng không, $x=-\dfrac dc$, và **tiệm cận ngang** là $y=\dfrac ac$, giá trị mà hàm số tiến tới khi $x\to\pm\infty$.

:::graph Đồ thị $y=\dfrac{2x+1}{x-3}$ cùng các tiệm cận
alt: Một hyperbol có tiệm cận đứng x = 3 và tiệm cận ngang y = 2; nhánh trái cắt các trục tại x = -0,5 và y = -1/3
x: -6..12
y: -8..12
plot: (2x+1)/(x-3) ; -6..2.6
plot: (2x+1)/(x-3) ; 3.45..12
vline: 3 ; dashed
hline: 2 ; dashed
point: (-0.5, 0) "(-0,5; 0)" below-left
:::

:::example Tiệm cận, giao điểm và hàm ngược
Cho $f(x)=\dfrac{2x+1}{x-3}$, $x\ne3$.

(a) Viết phương trình các tiệm cận. [2 marks]
(b) Tìm giao điểm với các trục toạ độ. [2 marks]
(c) Tìm $f^{-1}(x)$. [3 marks]

**Lời giải.** (a) $x=3$ và $y=2$.

(b) Giao với trục $x$: $2x+1=0$, nên $\left(-\dfrac12,0\right)$. Giao với trục $y$: $f(0)=-\dfrac13$, nên $\left(0,-\dfrac13\right)$.

(c) $x=\dfrac{2y+1}{y-3}$, nên $xy-3x=2y+1$, $y(x-2)=3x+1$ và $f^{-1}(x)=\dfrac{3x+1}{x-2}$, $x\ne2$. Các tiệm cận của $f^{-1}$ là $x=2$ và $y=3$: hai tiệm cận đổi chỗ, đúng như phép đối xứng qua $y=x$ dự báo.
:::

## Giải phương trình bằng GDC (Paper 2)

Nhiều phương trình ở Paper 2 không giải được bằng đại số. Hãy vẽ đồ thị hai vế, tìm giao điểm, rồi ghi đáp số lấy ba chữ số có nghĩa. Ghi rõ phương trình bạn đã giải, để nếu đáp số cuối sai vẫn còn điểm phương pháp.

:::example Hai giao điểm
Giải $e^x=4-x^2$. [3 marks]

**Lời giải.** Vẽ $y=e^x$ và $y=4-x^2$ được hai giao điểm: $x\approx-1{,}96$ và $x\approx1{,}06$. Lỗi hay gặp là chỉ ghi nghiệm hiện ra trong khung nhìn mặc định; hãy thu nhỏ để chắc chắn không còn nghiệm khác.
:::

:::warning Những cái bẫy thường gặp
- **Thứ tự của hàm hợp:** $(f\circ g)(x)$ nghĩa là làm $g$ trước.
- **$f^{-1}(x)$ không phải là $\dfrac{1}{f(x)}$.**
- **Quên tập xác định** của hàm ngược, hoặc quên dấu $\pm$ mà điều kiện tập xác định loại bớt.
- **Biến đổi bên trong ngoặc:** $f(x+2)$ dời đồ thị sang trái, không phải sang phải.
- **Ghi tiệm cận bằng một con số.** Hãy viết phương trình: "$x=3$", không phải "$3$".
- **Bỏ sót nghiệm trên GDC** nằm ngoài khung nhìn.
:::

:::terms
- domain, range | tập xác định, tập giá trị
- composite function | hàm hợp
- inverse function, one-to-one | hàm ngược, đơn ánh
- translation, stretch, reflection | phép tịnh tiến, phép co giãn, phép đối xứng
- vertex, axis of symmetry | đỉnh, trục đối xứng
- discriminant | biệt thức
- rational function | hàm phân thức
- vertical / horizontal asymptote | tiệm cận đứng / ngang
:::

## Bài tập tương tự

:::exercise Tập xác định và tập giá trị
Cho $f(x)=\ln(5-x)$. Viết tập xác định và tập giá trị của $f$. [2 marks]

::hint
**Cần nhớ:** biểu thức trong logarit phải dương; logarit nhận mọi giá trị thực.

::solution
Tập xác định $x<5$; tập giá trị $f(x)\in\mathbb{R}$.
:::

:::exercise Phương trình với hàm hợp
Cho $f(x)=x+2$ và $g(x)=3x^2$. Giải $(g\circ f)(x)=27$. [4 marks]

::hint
**Cần nhớ:** $(g\circ f)(x)=3(x+2)^2$.

::solution
$(x+2)^2=9$, nên $x+2=\pm3$: $x=1$ hoặc $x=-5$.
:::

:::exercise Hàm ngược của hàm mũ
Cho $f(x)=e^{2x}-1$. Tìm $f^{-1}(x)$ và tập xác định của nó. [4 marks]

::hint
**Cần nhớ:** đổi chỗ $x$ và $y$, rồi lấy logarit tự nhiên.

::solution
$x=e^{2y}-1$, nên $e^{2y}=x+1$ và $f^{-1}(x)=\dfrac12\ln(x+1)$, với tập xác định $x>-1$ (tập giá trị của $f$).
:::

:::exercise Biến đổi một parabol
Mô tả dãy các phép biến đổi đưa $y=x^2$ thành $y=-(x+1)^2+4$, và viết toạ độ đỉnh của đồ thị mới. [3 marks]

::hint
**Cần nhớ:** đọc riêng phần trong ngoặc, dấu trừ và hằng số.

::solution
Đối xứng qua trục $x$, rồi tịnh tiến sang trái $1$ đơn vị và lên trên $4$ đơn vị. Đỉnh là $(-1,4)$.
:::

:::exercise Bất phương trình với biệt thức
Tìm các giá trị của $k$ để $kx^2+4x+1=0$ có hai nghiệm thực phân biệt. [4 marks]

::hint
**Cần nhớ:** $\Delta>0$, và $k\ne0$ để phương trình là bậc hai.

::solution
$16-4k>0$, nên $k<4$, với $k\ne0$.
:::

## Bài tập vận dụng

:::exercise Quả bóng bay lên
Một quả bóng được ném lên, độ cao tính bằng mét sau $t$ giây là $h(t)=-4{,}9t^2+19{,}6t+1{,}5$.
(a) Tìm độ cao lớn nhất. [3 marks]
(b) Tìm thời điểm bóng chạm đất. [2 marks]

::hint
**Cần nhớ:** đỉnh tại $t=-\dfrac{b}{2a}$; câu (b) giải $h(t)=0$ bằng GDC và lấy nghiệm dương.

::solution
(a) $t=\dfrac{19{,}6}{9{,}8}=2$, và $h(2)=21{,}1$ mét.

(b) $h(t)=0$ khi $t\approx4{,}08$ giây (nghiệm còn lại âm).
:::

:::exercise Cốc nước nguội dần
Nhiệt độ của một cốc nước, tính bằng độ C, sau $t$ phút kể từ khi rót là $T(t)=20+70e^{-0{,}05t}$.
(a) Viết phương trình tiệm cận ngang của đồ thị $T$ và giải thích ý nghĩa. [2 marks]
(b) Tìm thời điểm nhiệt độ bằng $50$ độ C. [3 marks]

::hint
**Cần nhớ:** $e^{-0{,}05t}\to0$; câu (b): $70e^{-0{,}05t}=30$.

::solution
(a) $T=20$: về lâu dài, cốc nước tiến tới nhiệt độ phòng $20$ độ C.

(b) $e^{-0{,}05t}=\dfrac37$, nên $t=\dfrac{\ln(7/3)}{0{,}05}\approx16{,}9$ phút.
:::

:::exercise Hàm tự ngược
Cho $f(x)=\dfrac{x+2}{x-1}$, $x\ne1$. Chứng minh $f^{-1}(x)=f(x)$. Điều này cho biết gì về đồ thị của $f$? [4 marks]

::hint
**Cần nhớ:** tìm $f^{-1}$ theo cách thông thường.

::solution
$x=\dfrac{y+2}{y-1}$ cho $xy-x=y+2$, nên $y(x-1)=x+2$ và $f^{-1}(x)=\dfrac{x+2}{x-1}=f(x)$. Đồ thị của $f$ đối xứng qua đường thẳng $y=x$.
:::

:::exercise Thử thách
Tìm các giá trị của $k$ để đường thẳng $y=kx$ tiếp xúc với đường cong $y=x^2+1$. [4 marks]

::hint
**Cần nhớ:** tiếp tuyến cắt đường cong tại đúng một điểm, nên phương trình bậc hai thu được có $\Delta=0$.

::solution
$x^2-kx+1=0$ có $\Delta=k^2-4=0$, nên $k=\pm2$.
:::

:::quiz
::mc
Cho $f(x)=3x+1$. Giá trị $f^{-1}(7)$ bằng
A. $22$
B. $\dfrac83$
C. $2$
D. $\dfrac{1}{22}$
::key C
$3x+1=7$ cho $x=2$. Phương án A là $f(7)$; phương án D là $\dfrac{1}{f(7)}$.

::mc
Tập giá trị của $f(x)=x^2+2$, $x\in\mathbb{R}$, là
A. $f(x)\ge2$
B. $f(x)\ge0$
C. $f(x)>2$
D. $f(x)\in\mathbb{R}$
::key A
$x^2\ge0$, nên $x^2+2\ge2$, và giá trị $2$ đạt được tại $x=0$.

::mc
Tiệm cận ngang của $y=\dfrac{4x-1}{2x+5}$ là
A. $y=-\dfrac15$
B. $x=-\dfrac52$
C. $y=4$
D. $y=2$
::key D
$\dfrac ac=\dfrac42=2$. Phương án B là tiệm cận đứng.

::mc
Cho $f(x)=x^2$ và $g(x)=2x-3$. Giá trị $(f\circ g)(1)$ bằng
A. $-1$
B. $1$
C. $-2$
D. $4$
::key B
$g(1)=-1$ và $f(-1)=1$. Phương án A là $(g\circ f)(1)$.

::tf
Cho $f(x)=2(x-1)^2+3$.
a) Đỉnh của đồ thị là $(1,3)$.
b) Đồ thị quay bề lõm xuống dưới.
c) Trục đối xứng là $x=-1$.
d) Phương trình $f(x)=0$ vô nghiệm thực.
::key T F F T
a) Đúng. b) Sai: $a=2>0$. c) Sai: trục đối xứng là $x=1$. d) Đúng: giá trị nhỏ nhất là $3>0$.

::sa
Cho $f(x)=\sqrt{x+1}$. Tính $f^{-1}(3)$.
::key 8
$\sqrt{x+1}=3$ cho $x=8$.

::sa
Tìm $c$ để $x^2-6x+c=0$ có nghiệm kép.
::key 9
$36-4c=0$.
:::
