---
title: Hàm số bậc hai
description: Tìm hiểu hàm số y=ax²+bx+c, parabol, đỉnh và trục đối xứng, bảng biến thiên, giá trị lớn nhất và nhỏ nhất, phép tịnh tiến và các ứng dụng thực tế.
minutes: 24
---

:::goals
- Nhận biết hàm số bậc hai, tìm đỉnh, trục đối xứng và chiều bề lõm của parabol.
- Vẽ phác đồ thị và lập bảng biến thiên.
- Tìm giá trị lớn nhất hoặc nhỏ nhất, và tìm công thức của hàm số từ dữ kiện cho trước.
- Dùng dạng $y=a(x-p)^2+q$ và giải các bài toán về vật ném, diện tích và lợi nhuận.
:::

Hãy ném một quả bóng lên cao. Nó bay lên, chậm dần, dừng lại trong khoảnh khắc rồi rơi xuống; quỹ đạo là một đường cong gọi là **parabol**. Đường cong này cũng xuất hiện ở vòm cầu, ăng-ten chảo vệ tinh và đồ thị lợi nhuận theo giá bán. Tất cả đều được mô tả bởi một *hàm số bậc hai*, và biết điểm cao nhất hay thấp nhất của nó giúp trả lời câu hỏi "tốt nhất ta làm được đến đâu?".

## Hàm số $y=ax^2+bx+c$

:::definition Hàm số bậc hai
**Hàm số bậc hai** là hàm số có dạng
$$y=ax^2+bx+c,\qquad a\ne0.$$
Tập xác định là $\mathbb{R}$ và đồ thị là một **parabol**. Đặt $\Delta=b^2-4ac$.
- **Đỉnh** là $I\left(-\dfrac{b}{2a};\ -\dfrac{\Delta}{4a}\right)$.
- **Trục đối xứng** là đường thẳng đứng $x=-\dfrac{b}{2a}$.
- Nếu $a>0$, parabol có bề lõm **hướng lên** và đỉnh là điểm thấp nhất. Nếu $a<0$, bề lõm **hướng xuống** và đỉnh là điểm cao nhất.
:::

Giá trị $|a|$ quyết định parabol "hẹp" hay "rộng".

:::graph Các parabol $y=x^2$, $y=-x^2$ và $y=\frac12x^2$
alt: Ba parabol cùng đi qua gốc toạ độ: y=x^2 bề lõm hướng lên, y=-x^2 bề lõm hướng xuống và y=0,5x^2 rộng hơn, bề lõm hướng lên
x: -4..4
y: -5..5
plot: x^2
plot: -x^2
plot: 0.5*x^2
:::

## Vẽ phác parabol

Để vẽ phác $y=ax^2+bx+c$: (1) tìm đỉnh; (2) vẽ trục đối xứng; (3) tìm giao điểm của đồ thị với các trục ($x=0$ cho $y=c$; $y=0$ cho các nghiệm, nếu có); (4) dùng tính đối xứng qua trục.

:::example Parabol có bề lõm hướng lên
Khảo sát và vẽ phác $y=x^2-4x+3$.

**Lời giải.**
- $a=1>0$ nên bề lõm hướng lên. $\Delta=16-12=4$.
- Đỉnh: $x_I=-\dfrac{-4}{2}=2$, $y_I=-\dfrac{4}{4}=-1$. Vậy $I(2; -1)$; trục đối xứng $x=2$.
- Giao với trục tung: $x=0$ cho $y=3$.
- Giao với trục hoành: $x^2-4x+3=0$ cho $x=1$ hoặc $x=3$.
- Giá trị nhỏ nhất của hàm số là $-1$, đạt tại $x=2$.
:::

:::graph $y=x^2-4x+3$
alt: Parabol bề lõm hướng lên có đỉnh (2; -1), cắt trục hoành tại 1 và 3, cắt trục tung tại 3, trục đối xứng x=2 vẽ nét đứt
x: -1..5
y: -2..6
plot: x^2 - 4x + 3
vline: 2 ; dashed
point: (2, -1) "I(2; -1)" below
point: (1, 0) "1" above-left
point: (3, 0) "3" above-right
point: (0, 3) "3" left
:::

### Bảng biến thiên

Bảng biến thiên cho biết hàm số đi lên hay đi xuống ở đâu. Với $y=x^2-4x+3$ ($a>0$):

| $x$ | $-\infty$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y$ | $+\infty$ | nghịch biến | $-1$ | đồng biến | $+\infty$ |

Với $a>0$: nghịch biến trên $\left(-\infty; -\frac{b}{2a}\right)$, đồng biến trên $\left(-\frac{b}{2a}; +\infty\right)$, giá trị nhỏ nhất là $-\frac{\Delta}{4a}$. Với $a<0$ thì ngược lại và $-\frac{\Delta}{4a}$ là giá trị lớn nhất.

:::example Parabol có bề lõm hướng xuống
Khảo sát $y=-x^2+2x+3$.

**Lời giải.**
- $a=-1<0$: bề lõm hướng xuống. $\Delta=4+12=16$.
- Đỉnh: $x_I=-\dfrac{2}{-2}=1$, $y_I=-\dfrac{16}{-4}=4$. Vậy $I(1; 4)$.
- $x=0$ cho $y=3$. $-x^2+2x+3=0$ cho $x=-1$ hoặc $x=3$.
- Đồng biến trên $(-\infty; 1)$, nghịch biến trên $(1; +\infty)$; giá trị lớn nhất là $4$ tại $x=1$.
:::

:::graph $y=-x^2+2x+3$
alt: Parabol bề lõm hướng xuống có đỉnh (1; 4), cắt trục hoành tại -1 và 3, cắt trục tung tại 3
x: -2..4
y: -2..6
plot: -x^2 + 2x + 3
vline: 1 ; dashed
point: (1, 4) "I(1; 4)" above
point: (-1, 0) "-1" below-left
point: (3, 0) "3" below-right
point: (0, 3) "3" left
:::

## Tìm công thức của hàm số

:::example Parabol đi qua ba điểm
Tìm hàm số bậc hai có đồ thị đi qua $A(0; 5)$, $B(1; 2)$ và $C(3; 2)$.

**Lời giải.**
- Gọi $y=ax^2+bx+c$. Từ $A$: $c=5$.
- Từ $B$: $a+b+5=2$, suy ra $a+b=-3$.
- Từ $C$: $9a+3b+5=2$, suy ra $3a+b=-1$.
- Trừ hai phương trình: $2a=2$, $a=1$, rồi $b=-4$.
- Hàm số là $y=x^2-4x+5$. Kiểm tra: $B$ và $C$ có cùng tung độ nên trục đối xứng là $x=2$, và đúng là $-\frac{b}{2a}=2$.
:::

## Phép tịnh tiến: $y=a(x-p)^2+q$

Hoàn thành bình phương cho $ax^2+bx+c=a(x-p)^2+q$ với $p=-\frac{b}{2a}$ và $q=-\frac{\Delta}{4a}$. Vậy **đỉnh là $(p; q)$**. Đồ thị là parabol $y=ax^2$ được tịnh tiến sang phải $p$ đơn vị và lên trên $q$ đơn vị (sang trái hoặc xuống dưới nếu âm).

:::graph $y=2x^2$ tịnh tiến thành $y=2(x-1)^2+3$
alt: Parabol y=2x^2 vẽ nét đứt và chính parabol đó được tịnh tiến sang phải một đơn vị, lên trên ba đơn vị, có đỉnh (1; 3)
x: -3..4
y: -1..9
plot: 2x^2 ; dashed
plot: 2(x - 1)^2 + 3
point: (1, 3) "(1; 3)" below-right
:::

Khai triển, $2(x-1)^2+3=2x^2-4x+5$ có đỉnh $\left(\frac{4}{4}; \frac{-(16-40)}{8}\right)=(1; 3)$. ✓

## Ứng dụng

:::example Quả bóng được ném lên
Một quả bóng được ném lên cao. Độ cao của nó (đơn vị mét) sau $t$ giây là $h(t)=-5t^2+20t+1{,}5$. Tìm độ cao lớn nhất và thời điểm quả bóng chạm đất.

**Lời giải.**
- $a=-5<0$ nên có giá trị lớn nhất tại $t=-\dfrac{20}{2\cdot(-5)}=2$ giây.
- $h(2)=-20+40+1{,}5=21{,}5$ m.
- Quả bóng chạm đất khi $h=0$: $5t^2-20t-1{,}5=0$, $t=\dfrac{20\pm\sqrt{430}}{10}$. Ta giữ nghiệm dương $t\approx4{,}07$ giây.
:::

:::graph Độ cao của quả bóng
alt: Một parabol bề lõm hướng xuống bắt đầu ở độ cao 1,5 khi t=0, đạt 21,5 tại t=2 và trở về 0 vào khoảng t=4,07
x: 0..5
y: -2..24
plot: -5x^2 + 20x + 1.5 ; 0..4.07
point: (2, 21.5) "(2; 21,5)" above
:::

:::example Diện tích lớn nhất
Một bác nông dân có $40$ m hàng rào và muốn rào một chuồng hình chữ nhật có một cạnh dựa vào bức tường thẳng (cạnh này không cần rào). Các kích thước nào cho diện tích lớn nhất?

**Lời giải.**
- Gọi hai cạnh vuông góc với tường dài $x$ m. Cạnh song song với tường dài $40-2x$, với $0<x<20$.
- Diện tích $S(x)=x(40-2x)=-2x^2+40x$.
- $a=-2<0$: giá trị lớn nhất đạt tại $x=-\dfrac{40}{2\cdot(-2)}=10$, và $S(10)=-200+400=200$.
- Chuồng nên có kích thước $10$ m $\times$ $20$ m; diện tích lớn nhất là $200$ m$^2$.
:::

:::warning Những sai lầm thường gặp
- Dùng $x_I=\frac{b}{2a}$ mà quên dấu trừ.
- Nói "giá trị nhỏ nhất" khi $a<0$. Hãy kiểm tra dấu của $a$ trước.
- Quên giới hạn $x$ trong bài toán thực tế (chuồng cần $0<x<20$).
- Trong $a(x-p)^2+q$, đỉnh có hoành độ $x=p$ chứ không phải $-p$.
:::

## Thuật ngữ

:::terms
- hàm số bậc hai | quadratic function
- parabol | parabola
- đỉnh | vertex
- trục đối xứng | axis of symmetry
- biệt thức $\Delta$ (delta) | discriminant
- bảng biến thiên | table of variation
- giá trị nhỏ nhất | minimum value
- giá trị lớn nhất | maximum value
- phép tịnh tiến | translation
:::

## Tóm tắt

- Đồ thị của $y=ax^2+bx+c$ là parabol có đỉnh $\left(-\frac{b}{2a}; -\frac{\Delta}{4a}\right)$ và trục đối xứng $x=-\frac{b}{2a}$.
- $a>0$: bề lõm hướng lên, giá trị nhỏ nhất tại đỉnh. $a<0$: bề lõm hướng xuống, giá trị lớn nhất tại đỉnh.
- Vẽ phác bằng đỉnh, các giao điểm với trục và tính đối xứng; tóm tắt bằng bảng biến thiên.
- $y=a(x-p)^2+q$ có đỉnh $(p; q)$.
- Dùng đỉnh để giải bài toán giá trị lớn nhất, nhỏ nhất; luôn kiểm tra miền giá trị cho phép của $x$.

## Luyện tập

:::practice
1. Tìm đỉnh, trục đối xứng và các giao điểm với trục hoành của $y=x^2-6x+5$.
2. Với $y=-2x^2+4x+1$, cho biết bề lõm parabol hướng lên hay xuống và tìm đỉnh.
3. Tìm giá trị nhỏ nhất của $y=3x^2-12x+7$ và điểm đạt giá trị đó.
4. Lập bảng biến thiên của $y=-x^2+4x$ và cho biết giá trị lớn nhất.
5. Tìm hàm số bậc hai có parabol với đỉnh $(1; -4)$ và đi qua $(3; 0)$.
6. Tìm hàm số bậc hai có đồ thị đi qua $A(0; 1)$, $B(1; 0)$, $C(2; 3)$.
7. Mô tả cách thu được đồ thị của $y=x^2-2x-3$ từ đồ thị của $y=x^2$.
8. Độ cao của một quả bóng là $h(t)=-5t^2+10t$ mét sau $t$ giây. Tìm độ cao lớn nhất và thời điểm quả bóng trở lại mặt đất.
9. Thử thách. Một hình chữ nhật có chu vi $60$ m. Kích thước nào cho diện tích lớn nhất và diện tích đó bằng bao nhiêu?
10. Thử thách. Với những giá trị nào của $m$ thì giá trị nhỏ nhất của $y=x^2-2mx+3$ bằng $2$?
:::

:::solution Xem lời giải
1. $x_I=3$, $y_I=9-18+5=-4$. Đỉnh $(3; -4)$, trục $x=3$. $x^2-6x+5=0$ cho $x=1$ hoặc $x=5$.
2. $a=-2<0$: bề lõm hướng xuống. $x_I=-\dfrac{4}{-4}=1$, $y_I=-2+4+1=3$. Đỉnh $(1; 3)$.
3. $a=3>0$ nên có giá trị nhỏ nhất tại $x=\dfrac{12}{6}=2$: $y=12-24+7=-5$. Giá trị nhỏ nhất là $-5$ tại $x=2$.
4. $a=-1<0$, đỉnh tại $x=2$, $y=-4+8=4$.

| $x$ | $-\infty$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $y$ | $-\infty$ | đồng biến | $4$ | nghịch biến | $-\infty$ |

   Giá trị lớn nhất là $4$ tại $x=2$.
5. $y=a(x-1)^2-4$. Đi qua $(3; 0)$: $4a-4=0$, $a=1$. Vậy $y=(x-1)^2-4=x^2-2x-3$.
6. $c=1$ (từ $A$). $B$: $a+b+1=0$. $C$: $4a+2b+1=3$, suy ra $2a+b=1$. Trừ hai phương trình: $a=2$, $b=-3$. $y=2x^2-3x+1$. Kiểm tra $C$: $8-6+1=3$ ✓.
7. $x^2-2x-3=(x-1)^2-4$. Tịnh tiến parabol $y=x^2$ sang phải một đơn vị và xuống dưới bốn đơn vị.
8. Giá trị lớn nhất đạt tại $t=-\dfrac{10}{-10}=1$ giây: $h(1)=-5+10=5$ m. $h=0$: $-5t(t-2)=0$, nên quả bóng chạm đất tại $t=2$ giây.
9. Gọi hai cạnh là $x$ và $30-x$. Diện tích $S=x(30-x)=-x^2+30x$, lớn nhất tại $x=15$, $S=225$. Đó là hình vuông cạnh $15$ m, diện tích $225$ m$^2$.
10. $y=(x-m)^2+3-m^2$, nên giá trị nhỏ nhất là $3-m^2$. Cho $3-m^2=2$ được $m^2=1$, nên $m=1$ hoặc $m=-1$.
:::
