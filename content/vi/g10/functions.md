---
title: Hàm số
description: Tìm hiểu khái niệm hàm số, cách tìm tập xác định và tập giá trị, đọc đồ thị, xét tính đồng biến, nghịch biến và làm việc với hàm số cho bởi nhiều công thức.
minutes: 20
---

:::goals
- Giải thích hàm số là gì và mô tả hàm số bằng công thức, bảng, đồ thị hoặc lời.
- Tìm tập xác định của hàm số cho bởi công thức và tập giá trị trong những trường hợp đơn giản.
- Đọc giá trị, không điểm, khoảng đồng biến và nghịch biến từ đồ thị.
- Làm việc với hàm số cho bởi nhiều công thức, như cước taxi hay tiền điện.
:::

Bác tài bật đồng hồ tính tiền. Đi càng xa, bạn trả càng nhiều, và với mỗi quãng đường chỉ có **một** số tiền duy nhất. Ý tưởng "mỗi giá trị đầu vào cho đúng một giá trị đầu ra" chính là cốt lõi của khái niệm hàm số. Hầu hết các công thức trong khoa học, kinh tế và đời sống đều là hàm số.

## Hàm số là gì?

:::definition Hàm số
Cho $D$ là một tập con khác rỗng của $\mathbb{R}$. **Hàm số** $f$ xác định trên $D$ là một quy tắc cho tương ứng **mỗi** số $x\in D$ với **đúng một** số thực $y$. Ta viết $y=f(x)$.
- $x$ là **biến số** (đối số), $y$ là **giá trị** của hàm số tại $x$.
- $D$ là **tập xác định**. Tập hợp tất cả các giá trị $f(x)$ với $x\in D$ là **tập giá trị**.
- **Đồ thị** của hàm số $f$ là tập hợp các điểm $(x; f(x))$ trên mặt phẳng toạ độ, với $x\in D$.
:::

Hàm số có thể cho bằng **công thức** ($f(x)=3x-2$), bằng **bảng** giá trị, bằng **đồ thị**, hoặc bằng **lời** ("giá tiền của chuyến đi dài $x$ km"). Một quan hệ cho hai giá trị khác nhau ứng với cùng một $x$ thì **không** phải hàm số: đường tròn $x^2+y^2=1$ không phải đồ thị của hàm số, vì $x=0$ cho cả $y=1$ lẫn $y=-1$. Trên đồ thị, ta kiểm tra bằng cách vẽ các đường thẳng đứng: không có đường thẳng đứng nào cắt đồ thị tại hai điểm.

Khi hàm số cho bằng công thức mà không nói gì thêm, tập xác định là tập tất cả các số thực $x$ làm cho công thức có nghĩa. Cần chú ý hai điều: **mẫu khác $0$** và **biểu thức dưới dấu căn không âm**.

:::example Tìm tập xác định
Tìm tập xác định của $f(x)=\dfrac{\sqrt{x-2}}{x-5}$ và tính $f(3)$.

**Lời giải.**
- Căn thức cần $x-2\ge 0$, tức là $x\ge 2$.
- Mẫu cần $x-5\ne 0$, tức là $x\ne 5$.
- Kết hợp hai điều kiện: $D=[2; 5)\cup(5; +\infty)$.
- $f(3)=\dfrac{\sqrt{1}}{3-5}=-\dfrac12$.
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

:::example Chứng minh hàm số đồng biến
Chứng minh $g(x)=x^2$ đồng biến trên $(0; +\infty)$ và nghịch biến trên $(-\infty; 0)$.

**Lời giải.**
- Lấy $x_1<x_2$ và xét $g(x_2)-g(x_1)=x_2^2-x_1^2=(x_2-x_1)(x_2+x_1)$.
- Trên $(0; +\infty)$: $x_2-x_1>0$ và $x_2+x_1>0$ nên hiệu dương, tức là $g(x_1)<g(x_2)$. Hàm số đồng biến.
- Trên $(-\infty; 0)$: $x_2-x_1>0$ nhưng $x_2+x_1<0$ nên hiệu âm, tức là $g(x_1)>g(x_2)$. Hàm số nghịch biến.
:::

## Hàm số cho bởi nhiều công thức

Đôi khi một công thức không đủ: quy tắc thay đổi theo giá trị của $x$. Khi đó ta viết hàm số thành **nhiều dòng**.

:::example Hàm số cho bởi nhiều công thức
Cho $f(x)=\begin{cases} x+2 & \text{nếu } x<0,\\ x^2 & \text{nếu } x\ge 0.\end{cases}$ Tính $f(-3)$, $f(0)$, $f(2)$ và phác hoạ đồ thị.

**Lời giải.**
- $-3<0$ nên dùng dòng thứ nhất: $f(-3)=-3+2=-1$.
- $0\ge 0$ nên dùng dòng thứ hai: $f(0)=0$.
- $f(2)=2^2=4$.
- Đồ thị gồm phần đường thẳng $y=x+2$ với $x<0$ (kết thúc bằng điểm rỗng $(0; 2)$) và phần parabol $y=x^2$ với $x\ge0$.
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

Một hãng taxi tính $15$ nghìn đồng cho kilômét đầu tiên (hoặc ít hơn) và $12$ nghìn đồng cho mỗi kilômét tiếp theo. Với quãng đường $d$ km, số tiền (nghìn đồng) là
$$T(d)=\begin{cases}15 & \text{nếu } 0<d\le 1,\\ 15+12(d-1) & \text{nếu } d>1.\end{cases}$$

:::example Cước taxi
Tìm số tiền phải trả cho quãng đường $0{,}8$ km, $5$ km, và độ dài chuyến đi phải trả $99$ nghìn đồng.

**Lời giải.**
- $d=0{,}8\le 1$: $T=15$ nghìn đồng.
- $d=5>1$: $T=15+12\cdot4=63$ nghìn đồng.
- $T=99>15$ nên dùng dòng thứ hai: $15+12(d-1)=99$, suy ra $12(d-1)=84$, $d-1=7$, $d=8$ km.
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
- Quên tập xác định: $\dfrac{1}{x}$ không xác định tại $0$, còn $\sqrt{x}$ chỉ xác định khi $x\ge0$.
- Nói hàm số "đồng biến" trên toàn bộ trong khi nó chỉ đồng biến trên một *khoảng*.
- Dùng sai dòng của hàm số nhiều công thức. Hãy kiểm tra trước xem số đã cho thoả mãn điều kiện nào.
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

- Hàm số cho mỗi $x$ thuộc tập xác định đúng một giá trị $f(x)$; có thể cho bằng công thức, bảng, đồ thị hoặc lời.
- Tập xác định của hàm số cho bằng công thức: mọi $x$ làm công thức có nghĩa (mẫu $\ne0$, biểu thức dưới căn $\ge0$).
- $f$ đồng biến trên $K$ nếu $x_1<x_2\Rightarrow f(x_1)<f(x_2)$, nghịch biến nếu $f(x_1)>f(x_2)$.
- Hàm số nhiều công thức dùng các công thức khác nhau trên các phần khác nhau của tập xác định; luôn chọn dòng theo điều kiện.

## Luyện tập

:::practice
1. Cho $f(x)=3x-2$. Tính $f(-1)$ và $f(4)$.
2. Tìm tập xác định của $f(x)=\sqrt{5-x}$.
3. Tìm tập xác định của $f(x)=\dfrac{1}{x^2-4}$.
4. Một bảng cho các cặp $(x; y)$: $(1; 4)$, $(2; 5)$, $(2; 6)$, $(3; 7)$. Bảng này có xác định $y$ là hàm số của $x$ không? Vì sao?
5. Chứng minh $h(x)=-2x+5$ nghịch biến trên $\mathbb{R}$.
6. Cho $f(x)=\begin{cases} x+2 & x<0,\\ x^2 & x\ge 0.\end{cases}$ Giải $f(x)=9$ và $f(x)=-1$.
7. Một công ty điện tính $2$ nghìn đồng cho mỗi kWh trong $50$ kWh đầu và $2{,}5$ nghìn đồng cho mỗi kWh vượt quá $50$. Viết tiền điện $B(x)$ cho $x$ kWh dưới dạng hàm số nhiều công thức, rồi tính tiền điện của $80$ kWh và số kWh ứng với hoá đơn $300$ nghìn đồng.
8. Tìm tập giá trị của $f(x)=x^2-4x+7$ trên $\mathbb{R}$. (Gợi ý: $x^2-4x+7=(x-2)^2+3$.)
9. Nâng cao. Tìm tập xác định của $f(x)=\sqrt{x+3}+\dfrac{1}{\sqrt{2-x}}$.
10. Nâng cao. Tìm tập giá trị của $f(x)=x^2-4x+7$ trên đoạn $[0; 3]$.
:::

:::solution Xem lời giải
1. $f(-1)=3\cdot(-1)-2=-5$; $f(4)=12-2=10$.
2. Cần $5-x\ge0$, tức $x\le5$. $D=(-\infty; 5]$.
3. Cần $x^2-4\ne0$, tức $x\ne2$ và $x\ne-2$. $D=\mathbb{R}\setminus\{-2; 2\}$.
4. Không. Giá trị $x=2$ ứng với hai giá trị khác nhau của $y$ là $5$ và $6$.
5. Lấy $x_1<x_2$. Khi đó $h(x_1)-h(x_2)=-2x_1+2x_2=2(x_2-x_1)>0$, nên $h(x_1)>h(x_2)$: hàm số nghịch biến trên $\mathbb{R}$.
6. $f(x)=9$: nếu $x<0$ thì $x+2=9$ cho $x=7$, không thoả $x<0$, loại. Nếu $x\ge0$ thì $x^2=9$ cho $x=3$ (loại $x=-3$). Vậy $x=3$. $f(x)=-1$: nếu $x<0$, $x+2=-1$ cho $x=-3$, thoả mãn. Nếu $x\ge0$, $x^2=-1$ vô nghiệm. Vậy $x=-3$.
7. $B(x)=2x$ với $0\le x\le50$ và $B(x)=100+2{,}5(x-50)$ với $x>50$. Với $80$ kWh: $100+2{,}5\cdot30=175$ nghìn đồng. Với hoá đơn $300>100$: $100+2{,}5(x-50)=300$, suy ra $x-50=80$, $x=130$ kWh.
8. $(x-2)^2\ge0$ nên $f(x)\ge3$, dấu bằng xảy ra khi $x=2$; mọi giá trị $\ge3$ đều đạt được. Tập giá trị là $[3; +\infty)$.
9. Cần $x+3\ge0$ và $2-x>0$ (căn nằm ở mẫu nên không được bằng $0$). Vậy $x\ge-3$ và $x<2$: $D=[-3; 2)$.
10. $f(x)=(x-2)^2+3$. Hoành độ đỉnh $x=2$ thuộc $[0; 3]$ nên giá trị nhỏ nhất là $f(2)=3$. Tại hai đầu mút, $f(0)=7$ và $f(3)=4$, nên giá trị lớn nhất là $7$. Hàm số liên tục nên tập giá trị là $[3; 7]$.
:::
