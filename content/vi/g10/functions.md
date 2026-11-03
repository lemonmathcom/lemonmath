---
title: Hàm số
description: Tìm hiểu khái niệm hàm số, cách tìm tập xác định và tập giá trị, đọc đồ thị, xét tính đồng biến, nghịch biến và làm việc với hàm số cho bởi nhiều công thức.
minutes: 25
---

:::goals
- Giải thích hàm số là gì và mô tả hàm số bằng công thức, bảng, đồ thị hoặc lời.
- Tìm tập xác định của hàm số cho bởi công thức và tập giá trị trong những trường hợp đơn giản.
- Đọc giá trị, không điểm, khoảng đồng biến và nghịch biến từ đồ thị.
- Làm việc với hàm số cho bởi nhiều công thức, như cước taxi hay tiền điện.
:::

Một hãng taxi tính $15$ nghìn đồng cho kilômét đầu tiên (hoặc ít hơn) và $12$ nghìn đồng cho mỗi kilômét tiếp theo. Một chuyến đi $3$ km hết bao nhiêu tiền? Và nếu biết số tiền, ta có luôn biết được quãng đường không?

## Hàm số là gì?

Ta lập bảng số tiền $T$ (nghìn đồng) theo quãng đường $d$ (km). Với $d>1$, ngoài $15$ nghìn của kilômét đầu còn $d-1$ kilômét, mỗi kilômét $12$ nghìn:

| $d$ (km) | $0{,}5$ | $1$ | $2$ | $3$ | $5$ |
|---|---|---|---|---|---|
| $T$ (nghìn đồng) | $15$ | $15$ | $27$ | $39$ | $63$ |

Chuyến đi $3$ km hết $15+12\cdot2=39$ nghìn đồng. Hãy để ý hai điều:

- Mỗi quãng đường cho **đúng một** số tiền. Vậy $T$ là một hàm số của $d$.
- Ngược lại, số tiền $15$ nghìn ứng với **hai** quãng đường khác nhau ($0{,}5$ km và $1$ km). Vậy biết số tiền chưa chắc biết được quãng đường: $d$ **không** là hàm số của $T$.

:::definition Hàm số
Cho $D$ là một tập con khác rỗng của $\mathbb{R}$. **Hàm số** $f$ xác định trên $D$ là một quy tắc cho tương ứng **mỗi** số $x\in D$ với **đúng một** số thực $y$. Ta viết $y=f(x)$.
- $x$ là **biến số** (đối số), $y$ là **giá trị** của hàm số tại $x$.
- $D$ là **tập xác định**. Tập hợp tất cả các giá trị $f(x)$ với $x\in D$ là **tập giá trị**.
- **Đồ thị** của hàm số $f$ là tập hợp các điểm $(x; f(x))$ trên mặt phẳng toạ độ, với $x\in D$.
:::

Hàm số có thể cho bằng **công thức** ($f(x)=3x-2$), bằng **bảng** giá trị, bằng **đồ thị**, hoặc bằng **lời** ("giá tiền của chuyến đi dài $x$ km"). Một quan hệ cho hai giá trị khác nhau ứng với cùng một $x$ thì **không** phải hàm số. Chẳng hạn đường tròn $x^2+y^2=1$ không phải đồ thị của hàm số, vì $x=0$ cho cả $y=1$ lẫn $y=-1$. Trên đồ thị của một hàm số, không có đường thẳng đứng nào cắt đồ thị tại hai điểm.

Ví dụ đầu tiên luyện cách nhận ra một hàm số cho bằng bảng.

:::example Bảng nào cho một hàm số?
Bãi gửi xe của trường thu tiền theo số giờ gửi như sau: $1$ giờ hay $2$ giờ đều $5$ nghìn đồng, $3$ giờ hay $4$ giờ đều $10$ nghìn đồng.

a) Tiền gửi xe có là hàm số của số giờ gửi không?
b) Số giờ gửi có là hàm số của tiền gửi xe không?

**Lời giải.** Ta kiểm tra xem mỗi giá trị của đại lượng thứ nhất có ứng với đúng một giá trị của đại lượng thứ hai không.

a) Mỗi số giờ $1$, $2$, $3$, $4$ ứng với đúng một số tiền ($5$, $5$, $10$, $10$). Hai số giờ cùng một giá tiền vẫn được phép.

b) Số tiền $5$ nghìn ứng với hai số giờ khác nhau là $1$ và $2$.

Vậy tiền gửi xe là hàm số của số giờ, còn số giờ **không** là hàm số của tiền gửi xe.
:::

Khi hàm số cho bằng công thức mà không nói gì thêm, tập xác định là tập tất cả các số thực $x$ làm cho công thức có nghĩa. Cần chú ý hai điều: **mẫu khác $0$** và **biểu thức dưới dấu căn bậc hai không âm**.

:::example Tìm tập xác định
Tìm tập xác định của $f(x)=\dfrac{\sqrt{x-2}}{x-5}$ và tính $f(3)$.

**Lời giải.** Hàm số có một căn thức và một mẫu, nên ta viết cả hai điều kiện:

$$\begin{cases}x-2\ge0\\x-5\neq0\end{cases}\iff\begin{cases}x\ge2\\x\neq5.\end{cases}$$

Vậy $D=[2; 5)\cup(5; +\infty)$. Số $3$ thuộc $D$, và
$$f(3)=\frac{\sqrt{3-2}}{3-5}=-\frac12.$$
:::

## Đọc đồ thị

:::graph Đồ thị của hàm số $f(x)=x^2-2x-3$
alt: Một parabol quay bề lõm lên trên, có điểm thấp nhất (1; -4), cắt trục hoành tại -1 và 3, cắt trục tung tại -3
x: -3..5
y: -5..6
plot: x^2 - 2x - 3
point: (-1, 0) "(-1; 0)" above-left
point: (3, 0) "(3; 0)" above-right
point: (0, -3) "(0; -3)" below-left
point: (1, -4) "(1; -4)" below
:::

Từ hình vẽ, không cần tính toán, ta đọc được:
- $f(0)=-3$, là điểm đồ thị cắt trục tung.
- $f(x)=0$ khi $x=-1$ và $x=3$ (các **không điểm** của $f$).
- Điểm thấp nhất là $(1; -4)$ nên **tập giá trị** là $[-4; +\infty)$.
- Đi từ trái sang phải, đồ thị **đi xuống** đến $x=1$, rồi **đi lên**.

:::definition Hàm số đồng biến, nghịch biến
Cho $K$ là một khoảng nằm trong tập xác định của $f$.
- $f$ **đồng biến** trên $K$ nếu với mọi $x_1<x_2$ thuộc $K$ ta có $f(x_1)<f(x_2)$ (đồ thị đi lên).
- $f$ **nghịch biến** trên $K$ nếu với mọi $x_1<x_2$ thuộc $K$ ta có $f(x_1)>f(x_2)$ (đồ thị đi xuống).
:::

Vậy $f(x)=x^2-2x-3$ nghịch biến trên $(-\infty; 1)$ và đồng biến trên $(1; +\infty)$.

Đọc đồ thị cho ta dự đoán; để chứng minh, ta so sánh $f(x_1)$ và $f(x_2)$ bằng cách xét dấu của hiệu.

:::example Chứng minh hàm số đồng biến, nghịch biến
Chứng minh $g(x)=x^2$ đồng biến trên $(0; +\infty)$ và nghịch biến trên $(-\infty; 0)$.

**Lời giải.** Lấy $x_1<x_2$ và phân tích hiệu thành nhân tử:

$$g(x_2)-g(x_1)=x_2^2-x_1^2=(x_2-x_1)(x_2+x_1).$$

Thừa số $x_2-x_1$ luôn dương, nên dấu của hiệu là dấu của $x_2+x_1$:

- Trên $(0; +\infty)$: $x_2+x_1>0$, nên $g(x_1)<g(x_2)$.
- Trên $(-\infty; 0)$: $x_2+x_1<0$, nên $g(x_1)>g(x_2)$.

Vậy $g$ đồng biến trên $(0; +\infty)$ và nghịch biến trên $(-\infty; 0)$.
:::

## Hàm số cho bởi nhiều công thức

Đôi khi một công thức không đủ: quy tắc thay đổi theo giá trị của $x$. Khi đó ta viết hàm số thành **nhiều dòng**, mỗi dòng kèm một điều kiện.

:::example Hàm số cho bởi hai công thức
Cho $f(x)=\begin{cases} x+2 & \text{nếu } x<0,\\ x^2 & \text{nếu } x\ge 0.\end{cases}$ Tính $f(-3)$, $f(0)$, $f(2)$ và mô tả đồ thị.

**Lời giải.** Với mỗi số, ta xem nó thoả điều kiện nào rồi dùng dòng tương ứng:

$$f(-3)=-3+2=-1\ (\text{vì } -3<0),\qquad f(0)=0^2=0,\qquad f(2)=2^2=4\ (\text{vì } 0, 2\ge0).$$

Đồ thị gồm phần đường thẳng $y=x+2$ với $x<0$ (kết thúc bằng điểm rỗng $(0; 2)$, vì $x=0$ không dùng dòng này) và phần parabol $y=x^2$ với $x\ge0$.
:::

:::graph Một hàm số cho bởi hai công thức
alt: Một nửa đường thẳng đi từ phía dưới bên trái lên đến điểm rỗng (0; 2), và một nhánh parabol bắt đầu từ gốc toạ độ ở bên phải
x: -4..3
y: -2..6
plot: x + 2 ; -4..0
plot: x^2 ; 0..2.4
open: (0, 2) "(0; 2)" above-left
point: (0, 0) "O" below-right
:::

### Hàm số trong thực tế: cước taxi

Quay lại hãng taxi ở đầu bài. Với quãng đường $d$ km, số tiền (nghìn đồng) là
$$T(d)=\begin{cases}15 & \text{nếu } 0<d\le 1,\\ 15+12(d-1) & \text{nếu } d>1.\end{cases}$$

Ví dụ cuối đi theo cả hai chiều: từ quãng đường tính tiền, và từ tiền tìm quãng đường.

:::example Cước taxi
Tìm số tiền phải trả cho quãng đường $0{,}8$ km và $5$ km. Một chuyến đi hết $99$ nghìn đồng thì dài bao nhiêu kilômét?

**Lời giải.** Với $d=0{,}8\le1$ ta dùng dòng thứ nhất; với $d=5>1$ ta dùng dòng thứ hai:

$$T(0{,}8)=15,\qquad T(5)=15+12\cdot4=63.$$

Số tiền $99>15$ nên chuyến đi dài hơn $1$ km, và ta giải phương trình ở dòng thứ hai:

$$15+12(d-1)=99\iff 12(d-1)=84\iff d-1=7\iff d=8.$$

Vậy hai chuyến đầu hết $15$ nghìn và $63$ nghìn đồng; chuyến đi hết $99$ nghìn đồng dài $8$ km.

**Kiểm tra.** $T(8)=15+12\cdot7=99$.
:::

:::graph Cước taxi $T(d)$
alt: Một đoạn nằm ngang ở độ cao 15 từ d=0 đến d=1, sau đó là một đoạn thẳng đi lên đến độ cao 75 tại d=6
x: 0..6
y: 0..80
plot: 15 ; 0..1
plot: 12x + 3 ; 1..6
open: (0, 15) "" above
point: (1, 15) "(1; 15)" below-right
:::

:::warning Những lỗi thường gặp
- **Quên điều kiện của tập xác định.** Sai: tập xác định của $\dfrac{1}{\sqrt{2-x}}$ là $(-\infty; 2]$. Tại $x=2$ mẫu bằng $0$; đúng là $(-\infty; 2)$.
- **Nói đồng biến "trên toàn bộ".** Sai: "$y=x^2$ đồng biến". Hàm số này chỉ đồng biến trên $(0; +\infty)$; trên $(-\infty; 0)$ nó nghịch biến.
- **Dùng sai dòng của hàm số nhiều công thức.** Sai: với $f$ ở trên, giải $x+2=9$ được $x=7$ rồi kết luận $f(7)=9$. Nhưng $7\ge0$ nên $f(7)=49$; phải kiểm tra nghiệm có thoả điều kiện của dòng đã dùng.
:::

## Thuật ngữ

:::terms
- hàm số | function
- tập xác định | domain
- tập giá trị | range
- biến số (đối số) | independent variable
- đồ thị hàm số | graph of a function
- đồng biến | increasing
- nghịch biến | decreasing
- hàm số cho bởi nhiều công thức | piecewise function
- không điểm (nghiệm) của hàm số | zero of a function
:::

## Tóm tắt

- Hàm số: mỗi $x$ thuộc tập xác định cho **đúng một** $f(x)$; cho bằng công thức, bảng, đồ thị hoặc lời.
- Tập xác định của công thức: mẫu $\ne0$, biểu thức dưới căn $\ge0$ (căn ở mẫu thì $>0$).
- Đồng biến trên $K$: $x_1<x_2\Rightarrow f(x_1)<f(x_2)$; nghịch biến: $f(x_1)>f(x_2)$. Chứng minh bằng dấu của $f(x_2)-f(x_1)$.
- Đồ thị cho biết giá trị, không điểm, tập giá trị và khoảng đồng biến, nghịch biến.
- Hàm số nhiều công thức: chọn dòng theo điều kiện, và kiểm tra nghiệm với điều kiện đó.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho $f(x)=3x-2$. Tính $f(-1)$ và $f(4)$.

::hint
**Kiến thức:** $f(a)$ là giá trị của công thức khi thay $x=a$.

**Gợi ý các bước:**
1. Thay $x=-1$ vào công thức.
2. Thay $x=4$.

::solution
$f(-1)=3\cdot(-1)-2=-5$ và $f(4)=3\cdot4-2=10$.

**Đáp số.** $f(-1)=-5$; $f(4)=10$.
:::

:::exercise
Tìm tập xác định của: (a) $f(x)=\sqrt{5-x}$; (b) $g(x)=\dfrac{1}{x^2-4}$.

::hint
**Kiến thức:** biểu thức dưới căn bậc hai phải không âm; mẫu phải khác $0$.

**Gợi ý các bước:**
1. Với (a), giải $5-x\ge0$.
2. Với (b), tìm các $x$ làm $x^2-4=0$ rồi bỏ đi.

::solution
(a) $5-x\ge0\iff x\le5$. (b) $x^2-4=0\iff x=\pm2$, nên ta bỏ hai giá trị này.

**Đáp số.** (a) $D=(-\infty; 5]$; (b) $D=\mathbb{R}\setminus\{-2; 2\}$.
:::

:::exercise
Một bảng cho các cặp $(x; y)$: $(1; 4)$, $(2; 5)$, $(2; 6)$, $(3; 7)$. Bảng này có xác định $y$ là hàm số của $x$ không? Vì sao?

::hint
**Kiến thức:** hàm số cho mỗi $x$ đúng một giá trị $y$.

**Gợi ý các bước:**
1. Tìm xem có giá trị $x$ nào xuất hiện hai lần không.
2. Nếu có, so sánh hai giá trị $y$ tương ứng.

::solution
Giá trị $x=2$ ứng với hai giá trị khác nhau của $y$ là $5$ và $6$.

**Đáp số.** Không phải hàm số.
:::

:::exercise
Chứng minh $h(x)=-2x+5$ nghịch biến trên $\mathbb{R}$.

::hint
**Kiến thức:** $f$ nghịch biến trên $K$ nếu $x_1<x_2$ thì $f(x_1)>f(x_2)$.

**Gợi ý các bước:**
1. Lấy $x_1<x_2$ và tính $h(x_1)-h(x_2)$.
2. Xét dấu của hiệu đó.

::solution
Với $x_1<x_2$:
$$h(x_1)-h(x_2)=(-2x_1+5)-(-2x_2+5)=2(x_2-x_1)>0,$$
nên $h(x_1)>h(x_2)$.

**Đáp số.** $h$ nghịch biến trên $\mathbb{R}$ (đã chứng minh).
:::

:::exercise
Cho $f(x)=\begin{cases} x+2 & \text{nếu } x<0,\\ x^2 & \text{nếu } x\ge 0.\end{cases}$ Giải các phương trình $f(x)=9$ và $f(x)=-1$.

::hint
**Kiến thức:** với hàm số nhiều công thức, giải trên từng điều kiện rồi giữ nghiệm thoả điều kiện đó.

**Gợi ý các bước:**
1. Trường hợp $x<0$: giải với công thức $x+2$.
2. Trường hợp $x\ge0$: giải với công thức $x^2$.
3. Loại các nghiệm không thoả điều kiện.

::solution
$f(x)=9$: với $x<0$, $x+2=9$ cho $x=7$ (loại vì $7\ge0$); với $x\ge0$, $x^2=9$ cho $x=3$ (loại $x=-3$). $f(x)=-1$: với $x<0$, $x+2=-1$ cho $x=-3$ (nhận); với $x\ge0$, $x^2=-1$ vô nghiệm.

**Đáp số.** $f(x)=9\iff x=3$; $f(x)=-1\iff x=-3$.
:::

:::exercise
Một công ty điện tính $2$ nghìn đồng cho mỗi kWh trong $50$ kWh đầu và $2{,}5$ nghìn đồng cho mỗi kWh vượt quá $50$. Một hộ gia đình nhận hoá đơn $300$ nghìn đồng. Hộ đó đã dùng bao nhiêu kWh?

::hint
**Kiến thức:** hàm số cho bởi hai công thức: $B(x)=2x$ khi $0\le x\le50$, $B(x)=100+2{,}5(x-50)$ khi $x>50$.

**Gợi ý các bước:**
1. Tính tiền của $50$ kWh đầu để biết hoá đơn rơi vào dòng nào.
2. Giải phương trình ở dòng đó.

::solution
$50$ kWh đầu hết $2\cdot50=100$ nghìn đồng $<300$, nên $x>50$ và
$$100+2{,}5(x-50)=300\iff 2{,}5(x-50)=200\iff x-50=80\iff x=130.$$

**Đáp số.** $130$.
:::

:::exercise
Dựa vào đồ thị của $f(x)=x^2-2x-3$ trong bài, mỗi khẳng định sau đúng hay sai?

a) $f(0)=-3$.
b) Tập giá trị của $f$ là $[-4; +\infty)$.
c) $f$ đồng biến trên khoảng $(-1; 3)$.
d) $f(x)<0$ khi và chỉ khi $-1<x<3$.

::hint
**Kiến thức:** đọc giá trị, điểm thấp nhất và hướng đi lên, đi xuống của đồ thị.

**Gợi ý các bước:**
1. Tìm giao điểm với trục tung và điểm thấp nhất.
2. Xem đồ thị đi lên hay đi xuống trên từng đoạn.
3. Xem phần đồ thị nằm dưới trục hoành.

::solution
a) **Đúng.** Đồ thị cắt trục tung tại $(0; -3)$.

b) **Đúng.** Điểm thấp nhất là $(1; -4)$ và đồ thị đi lên mãi về hai phía.

c) **Sai.** Trên $(-1; 1)$ đồ thị đi xuống, chẳng hạn $f(0)=-3>f(1)=-4$; $f$ chỉ đồng biến trên $(1; +\infty)$.

d) **Đúng.** Phần đồ thị nằm dưới trục hoành ứng với $x$ nằm giữa hai không điểm $-1$ và $3$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
(Ôn lại tập hợp.) Tìm tập xác định $D$ của $f(x)=\sqrt{x+3}+\dfrac{1}{\sqrt{2-x}}$, rồi tìm $D\cap\mathbb{Z}$.

::hint
**Kiến thức:** căn ở mẫu cần biểu thức dưới căn **dương**; giao của hai tập gồm các phần tử thuộc cả hai.

**Gợi ý các bước:**
1. Viết hai điều kiện $x+3\ge0$ và $2-x>0$.
2. Lấy giao của hai khoảng, rồi liệt kê các số nguyên trong đó.

::solution
$x+3\ge0\iff x\ge-3$ và $2-x>0\iff x<2$. Vậy $D=[-3; 2)$, và các số nguyên trong $D$ là $-3, -2, -1, 0, 1$ (không lấy $2$).

**Đáp số.** $D=[-3; 2)$; $D\cap\mathbb{Z}=\{-3; -2; -1; 0; 1\}$.
:::

:::exercise Thử thách
Tìm tập giá trị của $f(x)=x^2-4x+7$ trên $\mathbb{R}$ và trên đoạn $[0; 3]$.

::hint
**Kiến thức:** $x^2-4x+7=(x-2)^2+3$; một bình phương không âm.

**Gợi ý các bước:**
1. Trên $\mathbb{R}$: $(x-2)^2$ nhận mọi giá trị không âm.
2. Trên $[0; 3]$: tìm khoảng giá trị của $x-2$, rồi của $(x-2)^2$.

::solution
Trên $\mathbb{R}$, $(x-2)^2$ nhận mọi giá trị trong $[0; +\infty)$, nên $f(x)$ nhận mọi giá trị trong $[3; +\infty)$.

Với $0\le x\le3$ thì $-2\le x-2\le1$, nên $(x-2)^2$ nhận mọi giá trị trong $[0; 4]$ (giá trị $4$ tại $x=0$, giá trị $0$ tại $x=2$). Do đó $f(x)$ nhận mọi giá trị trong $[3; 7]$.

**Đáp số.** Trên $\mathbb{R}$: $[3; +\infty)$; trên $[0; 3]$: $[3; 7]$.
:::

:::exercise Thử thách
Một nhà mạng có hai gói dữ liệu theo tháng. Gói A: $50$ nghìn đồng cộng $10$ nghìn đồng cho mỗi GB dùng. Gói B: $90$ nghìn đồng cho tối đa $6$ GB, mỗi GB vượt quá $6$ tính thêm $15$ nghìn đồng. Với lượng dùng $x$ GB nào thì gói B rẻ hơn gói A?

::hint
**Kiến thức:** gói B là hàm số cho bởi hai công thức; so sánh trên từng điều kiện.

**Gợi ý các bước:**
1. Viết $A(x)=50+10x$ và $B(x)$ với hai dòng $0\le x\le6$, $x>6$.
2. Giải $B(x)<A(x)$ trên từng điều kiện rồi gộp kết quả.

::solution
Với $0\le x\le6$: $90<50+10x\iff x>4$, nên $4<x\le6$.

Với $x>6$: $B(x)=90+15(x-6)=15x$, và $15x<50+10x\iff x<10$, nên $6<x<10$.

Gộp lại được $4<x<10$. **Kiểm tra.** Tại $x=4$: $A=B=90$; tại $x=10$: $A=B=150$.

**Đáp số.** Gói B rẻ hơn khi $4<x<10$ (GB).
:::

## Kiểm tra mini

:::quiz
::mc
Tập xác định của hàm số $f(x)=\dfrac{\sqrt{x+1}}{x-3}$ là
A. $[-1; +\infty)$.
B. $[-1; 3)\cup(3; +\infty)$.
C. $(-1; 3)\cup(3; +\infty)$.
D. $\mathbb{R}\setminus\{3\}$.
::key B
Cần $x+1\ge0$ và $x-3\ne0$, tức $x\ge-1$ và $x\ne3$. Phương án A quên điều kiện mẫu khác $0$; C bỏ nhầm $x=-1$ (tại đó $\sqrt0=0$ vẫn xác định); D quên điều kiện của căn.

::mc
Bảng nào sau đây cho $y$ là hàm số của $x$?
A. $(1; 2)$, $(2; 3)$, $(1; 4)$.
B. $(1; 5)$, $(2; 5)$, $(3; 5)$.
C. $(0; 1)$, $(0; -1)$, $(1; 0)$.
D. $(2; 1)$, $(3; 2)$, $(2; 2)$.
::key B
Ở B, mỗi giá trị của $x$ ứng với đúng một giá trị của $y$; nhiều $x$ cùng cho $y=5$ vẫn được phép. Ở A, C, D có một giá trị $x$ ứng với hai giá trị $y$ khác nhau.

::mc
Cho hàm số $f(x)=\begin{cases}2x-1 & \text{nếu } x<1,\\ x^2+1 & \text{nếu } x\ge1.\end{cases}$ Giá trị của $f(1)+f(-2)$ là
A. $-3$.
B. $-4$.
C. $7$.
D. $6$.
::key A
$1\ge1$ nên $f(1)=1^2+1=2$; $-2<1$ nên $f(-2)=2\cdot(-2)-1=-5$. Tổng bằng $-3$. Phương án B tính nhầm $f(1)$ bằng dòng thứ nhất; C tính nhầm $f(-2)$ bằng dòng thứ hai.

::mc
Hàm số $f(x)=-x^2+4x$ đồng biến trên khoảng nào sau đây?
A. $(-\infty; 2)$.
B. $(2; +\infty)$.
C. $(0; 4)$.
D. $(-\infty; 4)$.
::key A
$f(x)=4-(x-2)^2$: đồ thị là parabol quay bề lõm xuống, đỉnh $(2; 4)$, nên đi lên khi $x<2$ và đi xuống khi $x>2$. Phương án C là khoảng giữa hai không điểm $0$ và $4$, trên đó hàm số vừa tăng vừa giảm.

::tf
Cho hàm số $f(x)=x^2-4x+3$.
a) $f(0)=3$.
b) Các không điểm của $f$ là $x=1$ và $x=3$.
c) Tập giá trị của $f$ là $[-1; +\infty)$.
d) $f$ nghịch biến trên khoảng $(1; 3)$.
::key Đ Đ Đ S
a) Đúng. b) Đúng: $f(1)=f(3)=0$. c) Đúng: $f(x)=(x-2)^2-1\ge-1$ và nhận mọi giá trị từ $-1$ trở lên. d) Sai: $f$ chỉ nghịch biến trên $(-\infty; 2)$; trên $(2; 3)$ nó đồng biến, ví dụ $f(2)=-1<f(2{,}5)=-0{,}75$.

::sa
Có bao nhiêu số nguyên dương thuộc tập xác định của hàm số $f(x)=\sqrt{12-3x}$?
::key 4
Cần $12-3x\ge0\iff x\le4$. Các số nguyên dương thoả mãn là $1, 2, 3, 4$: có $4$ số.

::sa
Một công ty nước tính giá $8$ nghìn đồng mỗi m³ cho $10$ m³ đầu tiên và $12$ nghìn đồng mỗi m³ cho phần vượt quá $10$ m³. Tháng này một gia đình trả $176$ nghìn đồng. Gia đình đó đã dùng bao nhiêu m³ nước?
::key 18
$10$ m³ đầu tiên giá $80$ nghìn đồng $<176$, nên lượng nước $x>10$ và $80+12(x-10)=176\iff 12(x-10)=96\iff x=18$.
:::
