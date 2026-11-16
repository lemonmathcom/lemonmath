---
title: Phương trình lượng giác cơ bản
description: Giải các phương trình sin x = m, cos x = m, tan x = m, cot x = m bằng công thức nghiệm, đồ thị và máy tính cầm tay, rồi dùng chúng vào bài toán thực tế.
minutes: 25
---

:::goals
- Giải thích vì sao phương trình $\sin x=m$ và $\cos x=m$ có hai họ nghiệm khi $|m|\le1$ và vô nghiệm khi $|m|>1$.
- Viết công thức nghiệm của bốn phương trình lượng giác cơ bản và của các phương trình dạng $\sin u=\sin v$, $\cos u=\cos v$.
- Giải phương trình lượng giác cơ bản bằng công thức, bằng đồ thị và bằng máy tính cầm tay; chọn nghiệm trong một khoảng cho trước.
- Dùng phương trình lượng giác để tìm thời điểm một đại lượng tuần hoàn đạt giá trị cho trước.
:::

Một vòng quay khổng lồ có tâm cách mặt đất $22$ m và bán kính $20$ m, quay đều một vòng hết $8$ phút. Giả sử độ cao của một cabin sau $t$ phút (kể từ lúc ở điểm thấp nhất) là $h(t)=22-20\cos\dfrac{\pi t}{4}$ (mét).

Trong vòng quay đầu tiên, cabin ở độ cao đúng $32$ m vào những thời điểm nào? Ở bài trước ta đã biết $\cos$ lặp lại sau mỗi $2\pi$, nên ta chờ đợi có nhiều thời điểm như vậy. Bài này cho cách tìm tất cả chúng.

## Phương trình $\sin x=m$ và $\cos x=m$

### Khám phá: giải $\sin x=\dfrac12$

Từ bảng giá trị đặc biệt, ta biết $\sin\dfrac{\pi}{6}=\dfrac12$. Còn nghiệm nào khác? Nhìn đồ thị $y=\sin x$: đường thẳng $y=\dfrac12$ cắt đồ thị tại vô số điểm.

:::graph Đường thẳng $y=\dfrac12$ cắt đồ thị $y=\sin x$
alt: Đồ thị hình sin và đường thẳng nằm ngang y bằng 1/2, các giao điểm đầu tiên có hoành độ π/6 và 5π/6, lặp lại sau mỗi 2π
x: -4..8
y: -1.6..1.6
plot: sin(x)
hline: 0.5
point: (0.5236, 0.5) "π/6" above-left
point: (2.618, 0.5) "5π/6" above-right
point: (6.8068, 0.5) "13π/6" above
:::

Trong một chu kì $[0; 2\pi]$ có hai giao điểm: $x=\dfrac{\pi}{6}$ và $x=\pi-\dfrac{\pi}{6}=\dfrac{5\pi}{6}$ (vì $\sin(\pi-x)=\sin x$). Mỗi chu kì sau lại có hai giao điểm như vậy, cách nhau $2\pi$. Vậy nghiệm là $x=\dfrac{\pi}{6}+k2\pi$ hoặc $x=\dfrac{5\pi}{6}+k2\pi$, $k\in\mathbb{Z}$. Cách làm này tổng quát được.

:::theorem Phương trình $\sin x=m$
- Nếu $|m|>1$ thì phương trình vô nghiệm.
- Nếu $|m|\le1$, gọi $\alpha$ là một góc thoả mãn $\sin\alpha=m$ (máy tính cầm tay cho $\alpha=\arcsin m\in\left[-\dfrac{\pi}{2}; \dfrac{\pi}{2}\right]$). Khi đó
$$\sin x=m\Leftrightarrow\left[\begin{aligned}x&=\alpha+k2\pi\\ x&=\pi-\alpha+k2\pi\end{aligned}\right.\quad(k\in\mathbb{Z}).$$
- Trường hợp đặc biệt: $\sin x=1\Leftrightarrow x=\dfrac{\pi}{2}+k2\pi$; $\sin x=-1\Leftrightarrow x=-\dfrac{\pi}{2}+k2\pi$; $\sin x=0\Leftrightarrow x=k\pi$.
:::

:::theorem Phương trình $\cos x=m$
- Nếu $|m|>1$ thì phương trình vô nghiệm.
- Nếu $|m|\le1$, gọi $\alpha$ là một góc thoả mãn $\cos\alpha=m$ (máy tính cho $\alpha=\arccos m\in[0; \pi]$). Khi đó
$$\cos x=m\Leftrightarrow x=\pm\alpha+k2\pi\quad(k\in\mathbb{Z}).$$
- Trường hợp đặc biệt: $\cos x=1\Leftrightarrow x=k2\pi$; $\cos x=-1\Leftrightarrow x=\pi+k2\pi$; $\cos x=0\Leftrightarrow x=\dfrac{\pi}{2}+k\pi$.
:::

### Vì sao công thức đúng?

Điểm $M$ ứng với góc $x$ trên đường tròn lượng giác có tung độ $\sin x$ và hoành độ $\cos x$. Phương trình $\sin x=m$ nghĩa là $M$ nằm trên đường thẳng ngang $y=m$. Đường thẳng này cắt đường tròn tại không quá hai điểm, và chỉ cắt khi $|m|\le1$. Hai điểm đó đối xứng nhau qua trục tung, nên nếu một điểm ứng với góc $\alpha$ thì điểm kia ứng với góc $\pi-\alpha$. Mỗi điểm ứng với các góc sai khác nhau một bội của $2\pi$, ta được hai họ nghiệm.

Với $\cos x=m$, điểm $M$ nằm trên đường thẳng đứng $x=m$; hai giao điểm đối xứng nhau qua trục hoành nên ứng với hai góc $\alpha$ và $-\alpha$, cho họ nghiệm $x=\pm\alpha+k2\pi$.

Khi dùng độ, ta thay $2\pi$ bằng $360^\circ$ và $\pi$ bằng $180^\circ$. Chẳng hạn $\sin x=\sin30^\circ\Leftrightarrow x=30^\circ+k360^\circ$ hoặc $x=150^\circ+k360^\circ$.

:::example Giải phương trình $\sin x=m$
Giải các phương trình a) $2\sin x-\sqrt3=0$; b) $\sin x=\dfrac32$.

**Lời giải.** a) Phương trình tương đương $\sin x=\dfrac{\sqrt3}{2}=\sin\dfrac{\pi}{3}$. Do đó
$$x=\dfrac{\pi}{3}+k2\pi\quad\text{hoặc}\quad x=\pi-\dfrac{\pi}{3}+k2\pi=\dfrac{2\pi}{3}+k2\pi\quad(k\in\mathbb{Z}).$$
Vậy phương trình có nghiệm $x=\dfrac{\pi}{3}+k2\pi$ và $x=\dfrac{2\pi}{3}+k2\pi$.

b) Vì $\dfrac32>1$ mà $-1\le\sin x\le1$ nên phương trình vô nghiệm.
:::

Khi góc có dạng $ax+b$, ta giải như trên với "góc" là cả biểu thức đó.

:::example Giải phương trình $\cos(ax+b)=m$
Giải phương trình $\cos\left(2x-\dfrac{\pi}{3}\right)=-\dfrac12$.

**Lời giải.** Ta có $-\dfrac12=\cos\dfrac{2\pi}{3}$ nên
$$2x-\dfrac{\pi}{3}=\pm\dfrac{2\pi}{3}+k2\pi.$$
Với dấu $+$: $2x=\dfrac{2\pi}{3}+\dfrac{\pi}{3}+k2\pi=\pi+k2\pi$, suy ra $x=\dfrac{\pi}{2}+k\pi$.

Với dấu $-$: $2x=-\dfrac{2\pi}{3}+\dfrac{\pi}{3}+k2\pi=-\dfrac{\pi}{3}+k2\pi$, suy ra $x=-\dfrac{\pi}{6}+k\pi$.

Vậy phương trình có nghiệm $x=\dfrac{\pi}{2}+k\pi$ và $x=-\dfrac{\pi}{6}+k\pi$ $(k\in\mathbb{Z})$.

**Kiểm tra.** Với $x=\dfrac{\pi}{2}$: $\cos\left(\pi-\dfrac{\pi}{3}\right)=\cos\dfrac{2\pi}{3}=-\dfrac12$. Đúng.
:::

## Phương trình $\tan x=m$ và $\cot x=m$

Với $\tan$, mỗi giá trị $m$ thuộc $\mathbb{R}$ đều được nhận, vì tập giá trị của $\tan$ là $\mathbb{R}$. Hai điểm trên đường tròn ứng với cùng một giá trị $\tan$ là hai điểm đối xứng nhau qua tâm $O$, ứng với hai góc hơn kém nhau $\pi$. Vì vậy chỉ có một họ nghiệm, với chu kì $\pi$.

:::theorem Phương trình $\tan x=m$ và $\cot x=m$
Với mọi số thực $m$:
- $\tan x=m\Leftrightarrow x=\alpha+k\pi$ $(k\in\mathbb{Z})$, trong đó $\alpha=\arctan m\in\left(-\dfrac{\pi}{2}; \dfrac{\pi}{2}\right)$ là góc thoả mãn $\tan\alpha=m$.
- $\cot x=m\Leftrightarrow x=\alpha+k\pi$ $(k\in\mathbb{Z})$, trong đó $\alpha$ là góc thoả mãn $\cot\alpha=m$ (ví dụ $\alpha=\operatorname{arccot}m\in(0; \pi)$).
:::

:::example Giải phương trình $\tan x=m$ và chọn nghiệm trong một đoạn
Giải phương trình $\tan3x=1$, rồi tìm các nghiệm thuộc đoạn $[0; \pi]$.

**Lời giải.** Điều kiện xác định: $\cos3x\ne0$. Ta có $1=\tan\dfrac{\pi}{4}$ nên
$$3x=\dfrac{\pi}{4}+k\pi\Leftrightarrow x=\dfrac{\pi}{12}+\dfrac{k\pi}{3}\quad(k\in\mathbb{Z}).$$
Các giá trị này thoả mãn điều kiện vì $\tan3x=1$ nên $\cos3x\ne0$.

Để chọn nghiệm thuộc $[0; \pi]$, ta lần lượt thay $k$: $k=0$ cho $x=\dfrac{\pi}{12}$; $k=1$ cho $x=\dfrac{5\pi}{12}$; $k=2$ cho $x=\dfrac{3\pi}{4}$; $k=3$ cho $x=\dfrac{13\pi}{12}>\pi$ (loại), $k=-1$ cho $x<0$ (loại).

Vậy nghiệm của phương trình là $x=\dfrac{\pi}{12}+\dfrac{k\pi}{3}$, và trong $[0; \pi]$ có ba nghiệm $\dfrac{\pi}{12}$, $\dfrac{5\pi}{12}$, $\dfrac{3\pi}{4}$.
:::

Không phải lúc nào góc cũng đặc biệt. Khi đó ta dùng máy tính cầm tay.

:::example Dùng máy tính cầm tay
Giải phương trình $\sin x=0{,}3$. Cho nghiệm theo radian, làm tròn đến hàng phần trăm, và tìm các nghiệm thuộc $[0; 2\pi)$.

**Lời giải.** Để máy ở chế độ radian và bấm $\sin^{-1}0{,}3$, ta được $\alpha=\arcsin0{,}3\approx0{,}3047$. Do đó
$$x\approx0{,}30+k2\pi\quad\text{hoặc}\quad x=\pi-\alpha+k2\pi\approx2{,}84+k2\pi\quad(k\in\mathbb{Z}).$$
Trong $[0; 2\pi)$ lấy $k=0$ cho hai nghiệm $x\approx0{,}30$ và $x\approx2{,}84$ (nghiệm với $k=1$ đã vượt quá $2\pi$).

Vậy các nghiệm thuộc $[0; 2\pi)$ xấp xỉ $0{,}30$ và $2{,}84$. Nếu dùng độ thì đó là $17{,}5^\circ$ và $162{,}5^\circ$.
:::

Bây giờ ta quay lại câu hỏi đầu bài.

:::example Vòng quay khổng lồ
Với $h(t)=22-20\cos\dfrac{\pi t}{4}$ (mét, $t$ là số phút), tìm các thời điểm cabin ở độ cao $32$ m trong vòng quay đầu tiên $(0\le t<8)$.

**Hiểu đề.** Ta cần tìm $t\in[0; 8)$ sao cho $h(t)=32$.

**Tìm cách giải.** Đưa phương trình về dạng $\cos u=m$ với $u=\dfrac{\pi t}{4}$ rồi dùng công thức nghiệm.

**Giải.** Ta có $22-20\cos\dfrac{\pi t}{4}=32\Leftrightarrow\cos\dfrac{\pi t}{4}=-\dfrac12=\cos\dfrac{2\pi}{3}$. Do đó
$$\dfrac{\pi t}{4}=\pm\dfrac{2\pi}{3}+k2\pi\Leftrightarrow t=\pm\dfrac{8}{3}+8k\quad(k\in\mathbb{Z}).$$
Với $0\le t<8$: dấu $+$ và $k=0$ cho $t=\dfrac83$; dấu $-$ và $k=1$ cho $t=-\dfrac83+8=\dfrac{16}{3}$.

Vậy cabin ở độ cao $32$ m lúc $\dfrac83$ phút (tức $2$ phút $40$ giây) và lúc $\dfrac{16}{3}$ phút (tức $5$ phút $20$ giây).

**Nhìn lại.** Hai thời điểm đối xứng quanh $t=4$, lúc cabin ở điểm cao nhất $42$ m, đúng như ta chờ đợi. Nếu ta hỏi cabin ở độ cao ít nhất $32$ m trong bao lâu mỗi vòng thì sao? Ta cần $\cos\dfrac{\pi t}{4}\le-\dfrac12$, tức $\dfrac{\pi t}{4}\in\left[\dfrac{2\pi}{3}; \dfrac{4\pi}{3}\right]$, hay $t\in\left[\dfrac83; \dfrac{16}{3}\right]$. Thời gian đó là $\dfrac83$ phút, bằng một phần ba vòng quay.
:::

Hai vế của phương trình có thể cùng là $\sin$ hoặc cùng là $\cos$. Khi đó ta dùng thẳng các công thức nghiệm: $\sin u=\sin v\Leftrightarrow u=v+k2\pi$ hoặc $u=\pi-v+k2\pi$, và $\cos u=\cos v\Leftrightarrow u=\pm v+k2\pi$.

:::example Phương trình dạng $\sin u=\sin v$
Giải phương trình $\sin2x=\sin\left(x+\dfrac{\pi}{3}\right)$.

**Lời giải.** Ta có
$$2x=x+\dfrac{\pi}{3}+k2\pi\quad\text{hoặc}\quad2x=\pi-\left(x+\dfrac{\pi}{3}\right)+k2\pi.$$
Từ phương trình thứ nhất ta có $x=\dfrac{\pi}{3}+k2\pi$. Từ phương trình thứ hai ta có $3x=\dfrac{2\pi}{3}+k2\pi$, suy ra $x=\dfrac{2\pi}{9}+\dfrac{k2\pi}{3}$.

Vậy phương trình có nghiệm $x=\dfrac{\pi}{3}+k2\pi$ và $x=\dfrac{2\pi}{9}+\dfrac{k2\pi}{3}$ $(k\in\mathbb{Z})$.

**Kiểm tra.** Với $x=\dfrac{2\pi}{9}$: $\sin\dfrac{4\pi}{9}=\sin80^\circ$ và $\sin\left(\dfrac{2\pi}{9}+\dfrac{\pi}{3}\right)=\sin\dfrac{5\pi}{9}=\sin100^\circ=\sin80^\circ$. Đúng.
:::

**Kết nối.** Phương trình lượng giác dựa trên đồ thị và chu kì ở bài trước: nghiệm là hoành độ giao điểm của đồ thị với một đường ngang, và chu kì cho ta biết các giao điểm lặp lại. Các họ nghiệm như $x=\alpha+k2\pi$ là những dãy số có hiệu hai số liên tiếp không đổi, chính là ý tưởng của cấp số cộng ở bài sau.

:::warning Những sai lầm thường gặp
- **Chỉ viết một họ nghiệm của $\sin x=m$.** Sai: $\sin x=\dfrac12\Leftrightarrow x=\dfrac{\pi}{6}+k2\pi$. Vì sao sai: $x=\dfrac{5\pi}{6}$ cũng có $\sin x=\dfrac12$ nhưng không thuộc họ này. Đúng: thêm họ $x=\pi-\dfrac{\pi}{6}+k2\pi$.
- **Quên dấu $\pm$ của $\cos x=m$.** Sai: $\cos x=\dfrac12\Leftrightarrow x=\dfrac{\pi}{3}+k2\pi$. Vì sao sai: $\cos\left(-\dfrac{\pi}{3}\right)=\dfrac12$ nên $x=-\dfrac{\pi}{3}$ cũng là nghiệm. Đúng: $x=\pm\dfrac{\pi}{3}+k2\pi$.
- **Trộn độ với radian.** Sai: $x=30^\circ+k2\pi$. Vì sao sai: $2\pi$ rad là $360^\circ$, không thể cộng với số đo độ. Đúng: $x=30^\circ+k360^\circ$ hoặc $x=\dfrac{\pi}{6}+k2\pi$.
- **Dùng chu kì sai.** Sai: $\tan x=1\Leftrightarrow x=\dfrac{\pi}{4}+k2\pi$. Vì sao sai: $\tan\dfrac{5\pi}{4}=1$ nhưng $\dfrac{5\pi}{4}$ không thuộc họ này. Đúng: $x=\dfrac{\pi}{4}+k\pi$.
:::

## Thuật ngữ

:::terms
- phương trình lượng giác cơ bản | basic trigonometric equation
- nghiệm | solution
- họ nghiệm | family of solutions
- công thức nghiệm | solution formula
- vô nghiệm | no solution
- đường tròn lượng giác | unit circle
- máy tính cầm tay | scientific calculator
- hàm số lượng giác ngược | inverse trigonometric function
- chế độ radian | radian mode
- tập nghiệm | solution set
:::

## Tóm tắt

- $\sin x=m$ và $\cos x=m$ vô nghiệm khi $|m|>1$; khi $|m|\le1$, gọi $\alpha$ sao cho $\sin\alpha=m$ (hoặc $\cos\alpha=m$).
- $\sin x=m\Leftrightarrow x=\alpha+k2\pi$ hoặc $x=\pi-\alpha+k2\pi$; $\cos x=m\Leftrightarrow x=\pm\alpha+k2\pi$.
- $\tan x=m\Leftrightarrow x=\alpha+k\pi$; $\cot x=m\Leftrightarrow x=\alpha+k\pi$, với mọi $m\in\mathbb{R}$.
- Trường hợp đặc biệt: $\sin x=0\Leftrightarrow x=k\pi$; $\sin x=1\Leftrightarrow x=\dfrac{\pi}{2}+k2\pi$; $\cos x=0\Leftrightarrow x=\dfrac{\pi}{2}+k\pi$; $\cos x=1\Leftrightarrow x=k2\pi$.
- $\sin u=\sin v\Leftrightarrow u=v+k2\pi$ hoặc $u=\pi-v+k2\pi$; $\cos u=\cos v\Leftrightarrow u=\pm v+k2\pi$.
- Dùng độ thì thay $2\pi$ bằng $360^\circ$ và $\pi$ bằng $180^\circ$; không trộn lẫn hai đơn vị.
- Để chọn nghiệm trong một khoảng, thay lần lượt các giá trị của $k$ rồi kiểm tra.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Giải phương trình $\sin x=-\dfrac12$.

::hint
**Kiến thức:** $\sin\left(-\dfrac{\pi}{6}\right)=-\dfrac12$; công thức nghiệm của $\sin x=\sin\alpha$.

**Gợi ý các bước:**
1. Viết $-\dfrac12=\sin\left(-\dfrac{\pi}{6}\right)$.
2. Viết hai họ nghiệm $x=\alpha+k2\pi$ và $x=\pi-\alpha+k2\pi$.

::solution
Ta có $\sin x=\sin\left(-\dfrac{\pi}{6}\right)$ nên $x=-\dfrac{\pi}{6}+k2\pi$ hoặc $x=\pi+\dfrac{\pi}{6}+k2\pi=\dfrac{7\pi}{6}+k2\pi$.

**Đáp số.** $x=-\dfrac{\pi}{6}+k2\pi$ hoặc $x=\dfrac{7\pi}{6}+k2\pi$ $(k\in\mathbb{Z})$.
:::

:::exercise
Giải phương trình $2\cos x+1=0$.

::hint
**Kiến thức:** $\cos x=\cos\alpha\Leftrightarrow x=\pm\alpha+k2\pi$.

**Gợi ý các bước:**
1. Đưa về $\cos x=-\dfrac12$.
2. Viết $-\dfrac12=\cos\dfrac{2\pi}{3}$.

::solution
Ta có $\cos x=-\dfrac12=\cos\dfrac{2\pi}{3}$ nên $x=\pm\dfrac{2\pi}{3}+k2\pi$.

**Đáp số.** $x=\pm\dfrac{2\pi}{3}+k2\pi$ $(k\in\mathbb{Z})$.
:::

:::exercise
Giải phương trình $\tan\left(x-\dfrac{\pi}{4}\right)=\sqrt3$.

::hint
**Kiến thức:** $\tan x=\tan\alpha\Leftrightarrow x=\alpha+k\pi$; $\tan\dfrac{\pi}{3}=\sqrt3$.

**Gợi ý các bước:**
1. Viết $\sqrt3=\tan\dfrac{\pi}{3}$.
2. Giải $x-\dfrac{\pi}{4}=\dfrac{\pi}{3}+k\pi$.

::solution
Ta có $x-\dfrac{\pi}{4}=\dfrac{\pi}{3}+k\pi$, suy ra $x=\dfrac{7\pi}{12}+k\pi$.

**Đáp số.** $x=\dfrac{7\pi}{12}+k\pi$ $(k\in\mathbb{Z})$.
:::

:::exercise
Giải phương trình $\cos x=0{,}25$ bằng máy tính cầm tay. Cho nghiệm theo radian, làm tròn đến hàng phần trăm.

::hint
**Kiến thức:** $\cos x=m\Leftrightarrow x=\pm\arccos m+k2\pi$; để máy ở chế độ radian.

**Gợi ý các bước:**
1. Bấm $\cos^{-1}0{,}25$ để được $\alpha$.
2. Viết nghiệm $x=\pm\alpha+k2\pi$.

::solution
Máy tính cho $\alpha=\arccos0{,}25\approx1{,}3181$. Do đó $x\approx\pm1{,}32+k2\pi$.

**Đáp số.** $x\approx1{,}32+k2\pi$ hoặc $x\approx-1{,}32+k2\pi$ $(k\in\mathbb{Z})$.
:::

:::exercise
Giải phương trình $\sin2x=\dfrac{\sqrt3}{2}$ và tìm các nghiệm thuộc đoạn $[0; \pi]$.

::hint
**Kiến thức:** $\sin2x=\sin\dfrac{\pi}{3}$ cho hai họ nghiệm của $2x$.

**Gợi ý các bước:**
1. Viết hai họ nghiệm của $2x$ rồi chia $2$.
2. Thay $k$ để chọn nghiệm trong $[0; \pi]$.

::solution
Ta có $2x=\dfrac{\pi}{3}+k2\pi$ hoặc $2x=\dfrac{2\pi}{3}+k2\pi$, suy ra $x=\dfrac{\pi}{6}+k\pi$ hoặc $x=\dfrac{\pi}{3}+k\pi$. Trong $[0; \pi]$, chỉ $k=0$ cho nghiệm ($k=1$ cho $x>\pi$ và $k=-1$ cho $x<0$): $x=\dfrac{\pi}{6}$ và $x=\dfrac{\pi}{3}$.

**Đáp số.** $x=\dfrac{\pi}{6}+k\pi$, $x=\dfrac{\pi}{3}+k\pi$; trong $[0; \pi]$: $\dfrac{\pi}{6}$ và $\dfrac{\pi}{3}$.
:::

:::exercise
Giả sử nhiệt độ ngoài trời (độ C) tại một thành phố được mô tả bởi $T(t)=28+5\sin\dfrac{\pi(t-9)}{12}$, trong đó $t$ là số giờ kể từ $0$ giờ ($0\le t<24$). Vào những thời điểm nào nhiệt độ đạt $30{,}5^\circ$C?

::hint
**Kiến thức:** $\sin u=\dfrac12\Leftrightarrow u=\dfrac{\pi}{6}+k2\pi$ hoặc $u=\dfrac{5\pi}{6}+k2\pi$.

**Gợi ý các bước:**
1. Đưa về $\sin\dfrac{\pi(t-9)}{12}=\dfrac12$.
2. Giải hai họ nghiệm rồi chọn $t$ trong $[0; 24)$.

::solution
Ta có $28+5\sin\dfrac{\pi(t-9)}{12}=30{,}5\Leftrightarrow\sin\dfrac{\pi(t-9)}{12}=\dfrac12$. Do đó $\dfrac{\pi(t-9)}{12}=\dfrac{\pi}{6}+k2\pi$, suy ra $t=11+24k$; hoặc $\dfrac{\pi(t-9)}{12}=\dfrac{5\pi}{6}+k2\pi$, suy ra $t=19+24k$. Với $0\le t<24$ ta lấy $k=0$.

**Đáp số.** Lúc $11$ giờ và $19$ giờ.
:::

:::exercise
Cho phương trình $\cos x=\dfrac12$. Xét tính đúng sai của các mệnh đề sau:

a) $x=\dfrac{\pi}{3}$ là một nghiệm của phương trình.

b) $x=\dfrac{\pi}{3}+k\pi$ $(k\in\mathbb{Z})$ đều là nghiệm của phương trình.

c) Trong đoạn $[0; 2\pi]$, phương trình có đúng hai nghiệm.

d) Tổng các nghiệm thuộc đoạn $[0; 2\pi]$ bằng $\pi$.

::hint
**Kiến thức:** $\cos x=\dfrac12\Leftrightarrow x=\pm\dfrac{\pi}{3}+k2\pi$.

**Gợi ý các bước:**
1. b) Thử $k=1$.
2. c), d) Liệt kê nghiệm thuộc $[0; 2\pi]$.

::solution
a) **Đúng**: $\cos\dfrac{\pi}{3}=\dfrac12$.

b) **Sai**: với $k=1$, $x=\dfrac{4\pi}{3}$ có $\cos\dfrac{4\pi}{3}=-\dfrac12\ne\dfrac12$.

c) **Đúng**: các nghiệm thuộc $[0; 2\pi]$ là $\dfrac{\pi}{3}$ và $\dfrac{5\pi}{3}$.

d) **Sai**: $\dfrac{\pi}{3}+\dfrac{5\pi}{3}=2\pi\ne\pi$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Độ cao (m) của một cabin vòng quay so với mặt đất sau $t$ phút là $h(t)=22-20\cos\dfrac{\pi t}{4}$. Tính thời điểm đầu tiên $t>0$ cabin ở độ cao $12$ m, làm tròn đến hàng phần mười (đơn vị phút).

::hint
**Kiến thức:** $\cos u=\dfrac12\Leftrightarrow u=\pm\dfrac{\pi}{3}+k2\pi$.

**Gợi ý các bước:**
1. Giải $22-20\cos\dfrac{\pi t}{4}=12$.
2. Chọn nghiệm dương nhỏ nhất.

::solution
Ta có $\cos\dfrac{\pi t}{4}=\dfrac12$, suy ra $\dfrac{\pi t}{4}=\pm\dfrac{\pi}{3}+k2\pi$, tức $t=\pm\dfrac43+8k$. Nghiệm dương nhỏ nhất là $t=\dfrac43\approx1{,}3$.

**Đáp số.** $1{,}3$ phút.
:::

:::exercise Ôn tập
Giải phương trình $\sin x+\cos x=1$.

::hint
**Kiến thức:** ở bài trước, $\sin x+\cos x=\sqrt2\sin\left(x+\dfrac{\pi}{4}\right)$.

**Gợi ý các bước:**
1. Đưa về $\sin\left(x+\dfrac{\pi}{4}\right)=\dfrac{\sqrt2}{2}$.
2. Giải hai họ nghiệm của $x+\dfrac{\pi}{4}$.

::solution
Ta có $\sqrt2\sin\left(x+\dfrac{\pi}{4}\right)=1$, tức $\sin\left(x+\dfrac{\pi}{4}\right)=\dfrac{\sqrt2}{2}=\sin\dfrac{\pi}{4}$. Do đó $x+\dfrac{\pi}{4}=\dfrac{\pi}{4}+k2\pi$, suy ra $x=k2\pi$; hoặc $x+\dfrac{\pi}{4}=\dfrac{3\pi}{4}+k2\pi$, suy ra $x=\dfrac{\pi}{2}+k2\pi$.

**Đáp số.** $x=k2\pi$ hoặc $x=\dfrac{\pi}{2}+k2\pi$ $(k\in\mathbb{Z})$.
:::

:::exercise Thử thách
Giải phương trình $\sin3x=\cos2x$.

::hint
**Kiến thức:** $\cos2x=\sin\left(\dfrac{\pi}{2}-2x\right)$; công thức nghiệm của $\sin u=\sin v$.

**Gợi ý các bước:**
1. Đưa về dạng $\sin3x=\sin\left(\dfrac{\pi}{2}-2x\right)$.
2. Viết hai họ nghiệm rồi rút gọn.

::solution
Ta có $\sin3x=\sin\left(\dfrac{\pi}{2}-2x\right)$. Do đó $3x=\dfrac{\pi}{2}-2x+k2\pi$, suy ra $x=\dfrac{\pi}{10}+\dfrac{k2\pi}{5}$; hoặc $3x=\pi-\left(\dfrac{\pi}{2}-2x\right)+k2\pi=\dfrac{\pi}{2}+2x+k2\pi$, suy ra $x=\dfrac{\pi}{2}+k2\pi$.

**Đáp số.** $x=\dfrac{\pi}{10}+\dfrac{k2\pi}{5}$ hoặc $x=\dfrac{\pi}{2}+k2\pi$ $(k\in\mathbb{Z})$.
:::

## Kiểm tra mini

:::quiz
::mc
Nghiệm của phương trình $\cos x=-1$ là
A. $x=\dfrac{\pi}{2}+k\pi$.
B. $x=k2\pi$.
C. $x=\pi+k2\pi$.
D. $x=\pi+k\pi$.
::key C
$\cos x=-1$ chỉ ứng với điểm $(-1; 0)$ trên đường tròn lượng giác, nên $x=\pi+k2\pi$. Phương án D thêm cả các góc có $\cos x=1$.

::mc
Nghiệm của phương trình $\tan x=-\sqrt3$ là
A. $x=\dfrac{\pi}{3}+k\pi$.
B. $x=-\dfrac{\pi}{3}+k2\pi$.
C. $x=\pm\dfrac{\pi}{3}+k\pi$.
D. $x=-\dfrac{\pi}{3}+k\pi$.
::key D
$\tan\left(-\dfrac{\pi}{3}\right)=-\sqrt3$ và $\tan$ có chu kì $\pi$. Phương án A sai dấu, B dùng chu kì $2\pi$, C thêm nghiệm của $\tan x=\sqrt3$.

::mc
Phương trình nào sau đây vô nghiệm?
A. $\sin x=\dfrac{\pi}{3}$.
B. $\cos x=-0{,}9$.
C. $\sin x=\dfrac{\sqrt3}{2}$.
D. $\tan x=100$.
::key A
$\dfrac{\pi}{3}\approx1{,}047>1$ nên $\sin x=\dfrac{\pi}{3}$ vô nghiệm. Phương trình $\tan x=m$ có nghiệm với mọi $m$, còn $|-0{,}9|<1$ và $\left|\dfrac{\sqrt3}{2}\right|<1$.

::mc
Nghiệm của phương trình $\sin\left(x-\dfrac{\pi}{6}\right)=\dfrac12$ là
A. $x=\dfrac{\pi}{6}+k2\pi$ hoặc $x=\dfrac{5\pi}{6}+k2\pi$.
B. $x=\dfrac{\pi}{3}+k2\pi$ hoặc $x=\pi+k2\pi$.
C. $x=\dfrac{\pi}{3}+k2\pi$ hoặc $x=\dfrac{2\pi}{3}+k2\pi$.
D. $x=-\dfrac{\pi}{3}+k2\pi$ hoặc $x=\pi+k2\pi$.
::key B
$x-\dfrac{\pi}{6}=\dfrac{\pi}{6}+k2\pi$ cho $x=\dfrac{\pi}{3}+k2\pi$; $x-\dfrac{\pi}{6}=\dfrac{5\pi}{6}+k2\pi$ cho $x=\pi+k2\pi$. Phương án A quên cộng $\dfrac{\pi}{6}$.

::tf
Cho phương trình $2\cos2x=\sqrt3$. Xét tính đúng sai của các mệnh đề sau:
a) $x=\dfrac{\pi}{6}$ là một nghiệm của phương trình.
b) $x=\dfrac{\pi}{12}$ là một nghiệm của phương trình.
c) $x=-\dfrac{\pi}{12}+k\pi$ $(k\in\mathbb{Z})$ đều là nghiệm của phương trình.
d) Trong đoạn $[0; \pi]$, phương trình có đúng ba nghiệm.
::key S Đ Đ S
Phương trình tương đương $\cos2x=\dfrac{\sqrt3}{2}$, nên $2x=\pm\dfrac{\pi}{6}+k2\pi$, tức $x=\pm\dfrac{\pi}{12}+k\pi$. a) Sai: $\cos\dfrac{\pi}{3}=\dfrac12\ne\dfrac{\sqrt3}{2}$. b) Đúng. c) Đúng. d) Sai: trong $[0; \pi]$ chỉ có $\dfrac{\pi}{12}$ và $\dfrac{11\pi}{12}$.

::sa
Có bao nhiêu nghiệm của phương trình $\tan x=1$ thuộc đoạn $[0; 3\pi]$?
::key 3
$x=\dfrac{\pi}{4}+k\pi$ cho các nghiệm $\dfrac{\pi}{4}$, $\dfrac{5\pi}{4}$, $\dfrac{9\pi}{4}$; nghiệm kế tiếp $\dfrac{13\pi}{4}>3\pi$.

::sa
Nghiệm dương nhỏ nhất của phương trình $\sin x=0{,}3$ bằng bao nhiêu độ? (làm tròn kết quả đến hàng phần mười)
::key 17,5
Máy tính cho $x=\arcsin0{,}3\approx17{,}5^\circ$, và nghiệm còn lại $162{,}5^\circ$ lớn hơn.
:::
