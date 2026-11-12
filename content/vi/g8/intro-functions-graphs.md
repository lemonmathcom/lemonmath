---
title: Khái niệm hàm số và đồ thị của hàm số
description: Hiểu hàm số là gì, cách cho hàm số bằng bảng và công thức, tính giá trị hàm số, tìm tập xác định, vẽ đồ thị trên mặt phẳng toạ độ.
minutes: 25
---

:::goals
- Hiểu khái niệm hàm số và nhận biết một đại lượng có là hàm số của đại lượng khác hay không.
- Tính giá trị của hàm số và tìm tập xác định đơn giản.
- Xác định toạ độ điểm trên mặt phẳng toạ độ $Oxy$.
- Vẽ và đọc đồ thị của hàm số.
:::

Một bạn đạp xe với vận tốc không đổi $12$ km/h. Sau $t$ giờ, bạn đi được $s=12t$ (km). Với mỗi thời gian $t$ ta tính được đúng một quãng đường $s$. Quãng đường vì thế phụ thuộc vào thời gian theo một quy tắc rõ ràng, và ta muốn gọi tên quy tắc ấy.

Nhưng không phải mối quan hệ nào giữa hai đại lượng cũng như vậy. Ví dụ, biết số tiền bạn tiêu hôm nay là $50\,000$ đồng thì không suy ra được bạn đã mua bao nhiêu món. Bài này giúp bạn phân biệt hai tình huống đó và vẽ chúng lên mặt phẳng toạ độ.

## Cùng khám phá

Bảng sau cho nhiệt độ $T$ (°C) đo vào các thời điểm $t$ (giờ) trong một ngày (giả sử):

| $t$ (giờ) | $6$ | $9$ | $12$ | $15$ | $18$ |
|---|---|---|---|---|---|
| $T$ (°C) | $24$ | $27$ | $31$ | $33$ | $29$ |

Mỗi giá trị của $t$ có đúng một giá trị của $T$. Giờ so sánh với quan hệ sau giữa $x$ và $y$ thoả mãn $y^2=x$: với $x=4$ ta có cả $y=2$ và $y=-2$. Một giá trị $x$ ứng với **hai** giá trị $y$, nên ta không thể nói "$y$ được xác định bởi $x$".

Điều khác nhau giữa hai trường hợp là: ở bảng nhiệt độ, mỗi $t$ chỉ cho một $T$; ở quan hệ $y^2=x$, một $x$ cho hai $y$. Ta dùng khái niệm hàm số để nói về trường hợp thứ nhất.

## Khái niệm hàm số

:::definition Hàm số
Nếu đại lượng $y$ phụ thuộc vào đại lượng thay đổi $x$ sao cho với **mỗi** giá trị của $x$ ta xác định được **đúng một** giá trị tương ứng của $y$ thì $y$ được gọi là **hàm số** của $x$, còn $x$ gọi là **biến số**.

Ta viết $y=f(x)$. Giá trị của hàm số $f$ tại $x=a$ kí hiệu là $f(a)$.
:::

**Hiểu sâu hơn.** Hàm số không buộc hai giá trị khác nhau của $x$ phải cho hai giá trị khác nhau của $y$. Bảng $x:1,2,3$ ứng với $y:5,5,6$ vẫn là hàm số, vì mỗi $x$ chỉ có một $y$. Chỉ khi một $x$ cho từ hai giá trị $y$ trở lên thì đó mới không phải hàm số.

Hàm số có thể được cho bằng **bảng**, bằng **công thức** (như $y=2x+3$), bằng **lời mô tả** hoặc bằng **đồ thị**. Khi cho bằng công thức, tập hợp các giá trị của $x$ làm cho biểu thức có nghĩa gọi là **tập xác định** của hàm số.

:::example Nhận biết hàm số cho bởi bảng
Trong mỗi bảng dưới đây, $y$ có là hàm số của $x$ không?

a) Bảng 1:

| $x$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $y$ | $5$ | $5$ | $6$ | $7$ |

b) Bảng 2:

| $x$ | $1$ | $2$ | $2$ | $3$ |
|---|---|---|---|---|
| $y$ | $3$ | $4$ | $5$ | $6$ |

**Lời giải.** a) Mỗi giá trị của $x$ ($1$, $2$, $3$, $4$) ứng với đúng một giá trị của $y$. Hai giá trị $x=1$ và $x=2$ cùng cho $y=5$ nhưng điều này không vi phạm định nghĩa. Vậy $y$ là hàm số của $x$.

b) Giá trị $x=2$ ứng với hai giá trị $y=4$ và $y=5$. Vậy $y$ không phải là hàm số của $x$.
:::

:::example Tập xác định
Tìm tập xác định của các hàm số:

a) $y=5x-1$.

b) $y=\dfrac{3}{x-2}$.

c) $y=\dfrac{x+1}{x^2-4}$.

**Lời giải.** a) Biểu thức $5x-1$ có nghĩa với mọi số thực $x$. Tập xác định là $\mathbb R$.

b) Phân thức có nghĩa khi mẫu khác $0$, tức $x-2\neq0$, hay $x\neq2$.

c) Mẫu khác $0$: $x^2-4\neq0$, tức $(x-2)(x+2)\neq0$, hay $x\neq2$ và $x\neq-2$.

Vậy a) $\mathbb R$; b) mọi $x\neq2$; c) mọi $x\neq\pm2$.
:::

:::example Tính giá trị của hàm số
Cho hàm số $f(x)=-2x+5$. Tính $f(0)$, $f(3)$, $f(-2)$ và tìm $x$ để $f(x)=7$.

**Lời giải.** Thay giá trị của $x$ vào công thức:
$$f(0)=-2\cdot0+5=5,\quad f(3)=-2\cdot3+5=-1,\quad f(-2)=-2\cdot(-2)+5=9.$$
Để $f(x)=7$, ta giải $-2x+5=7$, suy ra $-2x=2$ và $x=-1$.

Vậy $f(0)=5$, $f(3)=-1$, $f(-2)=9$ và $f(x)=7$ khi $x=-1$.
:::

## Đồ thị của hàm số

Để vẽ hàm số, ta dùng **mặt phẳng toạ độ $Oxy$** gồm trục hoành $Ox$ nằm ngang và trục tung $Oy$ thẳng đứng, cắt nhau tại gốc $O$. Mỗi điểm $M$ có toạ độ $(x_0; y_0)$: **hoành độ** $x_0$ (đọc trên trục hoành) và **tung độ** $y_0$ (đọc trên trục tung).

:::definition Đồ thị của hàm số
**Đồ thị của hàm số** $y=f(x)$ là tập hợp tất cả các điểm $M(x; f(x))$ trên mặt phẳng toạ độ với $x$ thuộc tập xác định.
:::

Điểm $M(a; b)$ thuộc đồ thị của $y=f(x)$ khi và chỉ khi $b=f(a)$. Để vẽ đồ thị, ta lập bảng giá trị, đánh dấu các điểm rồi nối chúng.

:::example Vẽ đồ thị
Cho hàm số $y=2x-1$. Lập bảng giá trị với $x=-1,0,1,2$, vẽ đồ thị và kiểm tra điểm $A(3; 5)$ có thuộc đồ thị không.

**Lời giải.** Ta lập bảng giá trị:

| $x$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|
| $y=2x-1$ | $-3$ | $-1$ | $1$ | $3$ |

Các điểm $(-1; -3)$, $(0; -1)$, $(1; 1)$, $(2; 3)$ nằm trên một đường thẳng, đó là đồ thị của hàm số.

Với điểm $A(3; 5)$: $2\cdot3-1=5$, đúng bằng tung độ của $A$.

Vậy đồ thị là đường thẳng đi qua các điểm trên, và $A(3; 5)$ thuộc đồ thị.
:::

:::graph Đồ thị của hàm số $y=2x-1$
alt: Đường thẳng đi qua các điểm (-1; -3), (0; -1), (1; 1), (2; 3) và đi lên về bên phải
x: -3..4
y: -5..6
plot: 2x - 1
point: (-1, -3) "(-1; -3)" below
point: (0, -1) "(0; -1)" below-right
point: (1, 1) "(1; 1)" above-left
point: (2, 3) "(2; 3)" above-left
:::

Ta quay lại bạn đi xe đạp ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Quãng đường của bạn đi xe đạp
Bạn đi xe đạp với vận tốc $12$ km/h, quãng đường đi sau $t$ giờ là $s=12t$ (km). Chứng tỏ $s$ là hàm số của $t$, tính quãng đường sau $2{,}5$ giờ và tìm thời gian để đi được $48$ km.

**Lời giải.**

*Hiểu đề.* Quãng đường tính theo thời gian bằng công thức $s=12t$ với $t\geq0$; cần tính $s$ khi $t=2{,}5$ và tìm $t$ khi $s=48$.

*Tìm cách giải.* Mỗi $t$ cho đúng một $s$ nên $s$ là hàm số của $t$; thay số, và giải phương trình bậc nhất cho phần cuối.

*Giải.* Vì mỗi giá trị $t\geq0$ cho đúng một giá trị $s=12t$ nên $s$ là hàm số của $t$. Khi $t=2{,}5$: $s=12\cdot2{,}5=30$ (km). Khi $s=48$: $12t=48$, suy ra $t=4$ (giờ).

*Nhìn lại.* Kiểm tra: $12\cdot4=48$. Đồ thị là một tia xuất phát từ gốc toạ độ (vì $t\geq0$), đi lên đều: thời gian gấp đôi thì quãng đường gấp đôi.

Vậy sau $2{,}5$ giờ bạn đi được $30$ km, và đi $48$ km mất $4$ giờ.
:::

:::graph Quãng đường $s=12t$ theo thời gian $t$
alt: Tia xuất phát từ gốc toạ độ đi lên về bên phải, đi qua điểm (2,5; 30) và (4; 48)
x: -1..6
y: -5..75
plot: 12x ; 0..6
point: (2.5, 30) "(2,5; 30)" below-right
point: (4, 48) "(4; 48)" below-right
:::

:::warning Những sai lầm thường gặp
- **Nhầm hàm số với quan hệ một–một.** Sai: "bảng $x:1,2$ ứng với $y:5,5$ không phải hàm số vì hai $y$ bằng nhau". Lí do sai: định nghĩa chỉ đòi mỗi $x$ có đúng một $y$. Đúng: đó vẫn là hàm số; hàm số bị loại khi một $x$ cho hai $y$ khác nhau.
- **Tính giá trị tại điểm không thuộc tập xác định.** Sai: $f(2)=\dfrac{3}{2-2}=\dfrac30=0$ với $f(x)=\dfrac{3}{x-2}$. Lí do sai: không chia được cho $0$, nên $f(2)$ không xác định. Đúng: kiểm tra tập xác định trước khi thay.
- **Đảo thứ tự hoành độ và tung độ.** Sai: vẽ điểm $(3; 1)$ ở vị trí $(1; 3)$. Lí do sai: toạ độ viết theo thứ tự hoành độ trước, tung độ sau. Đúng: $(3; 1)$ ở cột $3$ trên trục hoành và cao $1$.
:::

**Kết nối.** Bài này dùng phương trình bậc nhất ở bài [phương trình bậc nhất một ẩn](lesson:linear-equations-one-unknown) để tìm $x$ khi biết $f(x)$, và mặt phẳng toạ độ đã học ở lớp 7. Nó chuẩn bị cho bài [hệ số góc của đường thẳng](lesson:gradient-of-a-line), nơi ta nghiên cứu đồ thị dạng $y=ax+b$ như đường thẳng vừa vẽ.

## Thuật ngữ

:::terms
- hàm số | function
- biến số | variable
- giá trị của hàm số | value of a function
- tập xác định | domain
- mặt phẳng toạ độ | coordinate plane
- trục hoành, trục tung | $x$-axis, $y$-axis
- hoành độ, tung độ | $x$-coordinate, $y$-coordinate
- gốc toạ độ | origin
- đồ thị của hàm số | graph of a function
:::

## Tóm tắt

- $y$ là hàm số của $x$ nếu mỗi giá trị của $x$ cho đúng một giá trị của $y$; viết $y=f(x)$.
- Hàm số có thể cho bằng bảng, công thức, lời mô tả hoặc đồ thị; tập xác định gồm các giá trị của $x$ để biểu thức có nghĩa.
- Giá trị $f(a)$ tính bằng cách thay $x=a$ vào công thức.
- Đồ thị của $y=f(x)$ là tập các điểm $(x; f(x))$; điểm $(a; b)$ thuộc đồ thị khi $b=f(a)$.
- Toạ độ viết theo thứ tự (hoành độ; tung độ).

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Trong mỗi bảng, $y$ có là hàm số của $x$ không?

a) $x:0,1,2,3$ và $y:1,3,5,7$.

b) $x:1,1,2$ và $y:2,3,4$.

::hint
**Kiến thức:** mỗi giá trị của $x$ phải ứng với đúng một giá trị của $y$.

**Gợi ý các bước:**
1. Xem có giá trị $x$ nào lặp lại không.
2. Nếu lặp, so sánh các giá trị $y$ tương ứng.

::solution
a) Các giá trị $x$ đều khác nhau, mỗi $x$ có một $y$: là hàm số.

b) Giá trị $x=1$ ứng với hai giá trị $y=2$ và $y=3$: không phải hàm số.

**Đáp số.** a) là hàm số. b) không là hàm số.
:::

:::exercise
Trong các hệ thức sau, $y$ có là hàm số của $x$ không?

a) $y^2=x$.

b) $y=3-x$.

c) $y=\dfrac1x$.

::hint
**Kiến thức:** với mỗi $x$, tìm số giá trị của $y$.

**Gợi ý các bước:**
1. Thử vài giá trị $x$ cụ thể.
2. Với c), chú ý giá trị $x$ làm mẫu bằng $0$.

::solution
a) Với $x=4$ ta có $y=2$ hoặc $y=-2$: một $x$ cho hai $y$, không phải hàm số.

b) Mỗi $x$ cho đúng một $y=3-x$: là hàm số.

c) Mỗi $x\neq0$ cho đúng một $y=\dfrac1x$: là hàm số với tập xác định $x\neq0$.

**Đáp số.** a) không. b) có. c) có (với $x\neq0$).
:::

:::exercise
Cho hàm số $f(x)=3x-4$. Tính $f(0)$, $f(2)$, $f(-1)$ và tìm $x$ để $f(x)=11$.

::hint
**Kiến thức:** $f(a)$ là giá trị của biểu thức khi $x=a$.

**Gợi ý các bước:**
1. Thay lần lượt $x=0$, $2$, $-1$.
2. Giải phương trình $3x-4=11$.

::solution
Ta có $f(0)=-4$; $f(2)=6-4=2$; $f(-1)=-3-4=-7$. Phương trình $3x-4=11$ cho $3x=15$ và $x=5$.

Vậy $f(0)=-4$, $f(2)=2$, $f(-1)=-7$ và $f(x)=11$ khi $x=5$.

**Đáp số.** $-4$; $2$; $-7$; $x=5$.
:::

:::exercise
Tìm tập xác định của các hàm số:

a) $y=\dfrac{2}{x+3}$.

b) $y=\dfrac{x-1}{2x-6}$.

c) $y=x^2+1$.

::hint
**Kiến thức:** mẫu phải khác $0$.

**Gợi ý các bước:**
1. Cho mẫu bằng $0$ và giải để tìm giá trị cần loại.
2. Với c), không có mẫu.

::solution
a) $x+3\neq0$ nên $x\neq-3$.

b) $2x-6\neq0$ nên $x\neq3$.

c) Biểu thức có nghĩa với mọi $x$, tập xác định là $\mathbb R$.

**Đáp số.** a) $x\neq-3$. b) $x\neq3$. c) $\mathbb R$.
:::

:::exercise
Trong các điểm $A(1; 2)$, $B(2; 2)$, $C(0; 3)$, $D(-1; 4)$, những điểm nào thuộc đồ thị của hàm số $y=-x+3$?

::hint
**Kiến thức:** điểm $(a; b)$ thuộc đồ thị khi $b=f(a)$.

**Gợi ý các bước:**
1. Tính $-a+3$ cho từng điểm.
2. So sánh với tung độ.

::solution
Với $A$: $-1+3=2$, đúng. Với $B$: $-2+3=1\neq2$, sai. Với $C$: $-0+3=3$, đúng. Với $D$: $-(-1)+3=4$, đúng.

Vậy $A$, $C$, $D$ thuộc đồ thị.

**Đáp số.** $A$, $C$, $D$.
:::

:::exercise
Lập bảng giá trị của hàm số $y=x+1$ với $x=-2,-1,0,1,2$ và nêu hình dạng của đồ thị.

::hint
**Kiến thức:** đồ thị là tập các điểm $(x; y)$.

**Gợi ý các bước:**
1. Tính $y$ cho từng giá trị $x$.
2. Đánh dấu các điểm và quan sát chúng.

::solution
Ta có bảng:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $y$ | $-1$ | $0$ | $1$ | $2$ | $3$ |

Các điểm $(-2; -1)$, $(-1; 0)$, $(0; 1)$, $(1; 2)$, $(2; 3)$ nằm trên một đường thẳng đi lên về bên phải.

Vậy đồ thị của $y=x+1$ là một đường thẳng.

**Đáp số.** Đường thẳng đi qua các điểm trong bảng.
:::

:::exercise
Giả sử một hãng taxi tính cước $y=14\,000x+12\,000$ (đồng) khi đi $x$ ki-lô-mét ($x\geq0$). Tính cước khi đi $5$ km và $10$ km. Đi bao nhiêu ki-lô-mét thì trả $96\,000$ đồng?

::hint
**Kiến thức:** thay giá trị $x$ vào công thức; giải phương trình khi biết $y$.

**Gợi ý các bước:**
1. Tính $y$ khi $x=5$ và $x=10$.
2. Giải $14\,000x+12\,000=96\,000$.

::solution
Khi $x=5$: $y=14\,000\cdot5+12\,000=82\,000$ (đồng). Khi $x=10$: $y=140\,000+12\,000=152\,000$ (đồng). Khi $y=96\,000$: $14\,000x=84\,000$, suy ra $x=6$.

Vậy cước là $82\,000$ đồng và $152\,000$ đồng; trả $96\,000$ đồng khi đi $6$ km.

**Đáp số.** $82\,000$ đồng; $152\,000$ đồng; $6$ km.
:::

:::exercise
Bảng nhiệt độ $T$ (°C) theo thời điểm $t$ (giờ) ở phần khám phá: $f(6)=24$, $f(9)=27$, $f(12)=31$, $f(15)=33$, $f(18)=29$. Tính $f(12)$, cho biết nhiệt độ cao nhất xảy ra lúc mấy giờ, và hàm số có cho biết nhiệt độ lúc $10$ giờ không?

::hint
**Kiến thức:** hàm số cho bằng bảng chỉ xác định tại các giá trị có trong bảng.

**Gợi ý các bước:**
1. Đọc $f(12)$ từ bảng.
2. Tìm giá trị lớn nhất của $T$.

::solution
Ta có $f(12)=31$ (°C). Nhiệt độ lớn nhất trong bảng là $33^\circ$C, ở lúc $15$ giờ. Giá trị $t=10$ không có trong bảng nên hàm số này không cho biết nhiệt độ lúc $10$ giờ.

Vậy $f(12)=31^\circ$C, cao nhất lúc $15$ giờ, và không biết nhiệt độ lúc $10$ giờ.

**Đáp số.** $31^\circ$C; $15$ giờ; không xác định.
:::

:::exercise
Cho hàm số $f(x)=2x-5$. Tìm $x$ để $f(x)=0$ và tìm $x$ để $f(x)=x$. (Ôn lại [phương trình bậc nhất](lesson:linear-equations-one-unknown).)

::hint
**Kiến thức:** đưa về phương trình bậc nhất một ẩn.

**Gợi ý các bước:**
1. Giải $2x-5=0$.
2. Giải $2x-5=x$.

::solution
Với $f(x)=0$: $2x-5=0$, suy ra $x=\dfrac52=2{,}5$. Với $f(x)=x$: $2x-5=x$, suy ra $x=5$.

Kiểm tra: $f(2{,}5)=0$ và $f(5)=5$.

Vậy $x=2{,}5$ khi $f(x)=0$ và $x=5$ khi $f(x)=x$.

**Đáp số.** $2{,}5$; $5$.
:::

:::exercise Thử thách
Cho hàm số $f(x)=ax+b$ với $f(1)=3$ và $f(2)=5$. Tìm $a$ và $b$, rồi tính $f(10)$.

::hint
**Kiến thức:** $f(1)=a+b$ và $f(2)=2a+b$.

**Gợi ý các bước:**
1. Lập hai đẳng thức từ hai giá trị đã cho.
2. Lấy hiệu hai đẳng thức để tìm $a$, rồi tìm $b$.

::solution
Ta có $a+b=3$ và $2a+b=5$. Trừ hai đẳng thức, ta được $a=2$. Từ $a+b=3$ suy ra $b=1$. Do đó $f(x)=2x+1$ và $f(10)=21$.

Kiểm tra: $f(1)=3$ và $f(2)=5$.

Vậy $a=2$, $b=1$ và $f(10)=21$.

**Đáp số.** $a=2$; $b=1$; $f(10)=21$.
:::

## Kiểm tra mini

:::quiz
::mc
Đại lượng $y$ là hàm số của $x$ khi
A. mỗi giá trị của $y$ cho đúng một giá trị của $x$.
B. mỗi giá trị của $x$ cho đúng một giá trị của $y$.
C. hai giá trị khác nhau của $x$ luôn cho hai giá trị khác nhau của $y$.
D. $y$ luôn lớn hơn $x$.
::key B
Đó là định nghĩa hàm số. B và C là điều kiện thừa (hàm số vẫn có thể cho cùng $y$ với hai $x$ khác nhau), D không liên quan.

::mc
Cho $f(x)=2x-3$. Giá trị $f(4)$ bằng
A. $11$.
B. $1$.
C. $5$.
D. $-5$.
::key C
$f(4)=2\cdot4-3=5$. A lấy $2\cdot4+3$, B lấy $4-3$, D sai dấu.

::mc
Tập xác định của hàm số $y=\dfrac{5}{x-1}$ là
A. $x\neq0$.
B. $x\neq-1$.
C. mọi số thực.
D. $x\neq1$.
::key D
Mẫu khác $0$: $x-1\neq0$ nên $x\neq1$. A và B sai giá trị loại, C bỏ qua mẫu.

::mc
Điểm nào sau đây thuộc đồ thị hàm số $y=2x-1$?
A. $(2; 3)$.
B. $(1; 2)$.
C. $(0; 1)$.
D. $(3; 4)$.
::key A
$2\cdot2-1=3$ nên $(2; 3)$ thuộc đồ thị. Với A: $2\cdot1-1=1\neq2$; C: $-1\neq1$; D: $5\neq4$.

::tf
Cho hàm số $y=-x+4$. Xét tính đúng sai của các mệnh đề sau:
a) Giá trị của hàm số tại $x=0$ là $4$.
b) Giá trị của hàm số tại $x=2$ là $2$.
c) Điểm $(4; 0)$ thuộc đồ thị của hàm số.
d) Điểm $(1; 5)$ thuộc đồ thị của hàm số.
::key Đ Đ Đ S
a) Đúng: $-0+4=4$. b) Đúng: $-2+4=2$. c) Đúng: $-4+4=0$. d) Sai: $-1+4=3\neq5$.

::sa
Cho $f(x)=3x-4$. Tính $f(5)$.
::key 11
$f(5)=3\cdot5-4=11$.

::sa
Bạn đi xe đạp với vận tốc $12$ km/h. Sau bao nhiêu giờ thì đi được $30$ km?
::key 2,5
$12t=30$ nên $t=2{,}5$.
:::
