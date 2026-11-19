---
title: Hàm số lượng giác
description: Tìm hiểu hàm số sin, côsin, tang, côtang: tập xác định, tập giá trị, tính chẵn lẻ, tuần hoàn, đơn điệu và đồ thị; dùng chúng mô tả hiện tượng lặp lại.
minutes: 25
---

:::goals
- Nêu tập xác định, tập giá trị, tính chẵn lẻ và chu kì của các hàm số $y=\sin x$, $y=\cos x$, $y=\tan x$, $y=\cot x$.
- Nhận biết đồ thị của bốn hàm số này và đọc từ đồ thị các khoảng đồng biến, nghịch biến.
- Tìm tập xác định, giá trị lớn nhất, giá trị nhỏ nhất, chu kì của những hàm số lượng giác đơn giản.
- Dùng hàm số lượng giác để mô tả các hiện tượng lặp lại như thuỷ triều và dòng điện xoay chiều.
:::

Giả sử mực nước tại một cảng (đơn vị: mét) sau $t$ giờ kể từ $0$ giờ sáng được cho bởi $h(t)=3+2\sin\dfrac{\pi t}{6}$. Nước lên rồi xuống, rồi lại lên, cứ thế lặp đi lặp lại.

Mực nước cao nhất và thấp nhất là bao nhiêu? Sau bao lâu thì cảnh nước lên xuống lặp lại y như cũ? Để trả lời, ta cần hiểu hàm số $\sin$ "chạy" thế nào khi $x$ tăng dần: nó đạt giá trị lớn nhất, nhỏ nhất ở đâu và sau bao nhiêu thì lặp lại.

## Hàm số $y=\sin x$ và $y=\cos x$

### Khám phá: $\sin x$ lặp lại như thế nào?

Với góc $x$ (đơn vị radian), điểm $M$ trên đường tròn lượng giác ứng với $x$ có toạ độ $(\cos x; \sin x)$. Ta tính $\sin x$ ở một số góc quen thuộc:

| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{2}$ | $\dfrac{5\pi}{6}$ | $\pi$ | $\dfrac{7\pi}{6}$ | $\dfrac{3\pi}{2}$ | $\dfrac{11\pi}{6}$ | $2\pi$ |
|---|---|---|---|---|---|---|---|---|---|
| $\sin x$ | $0$ | $\dfrac12$ | $1$ | $\dfrac12$ | $0$ | $-\dfrac12$ | $-1$ | $-\dfrac12$ | $0$ |

Ta thấy hai điều. Giá trị của $\sin x$ luôn nằm giữa $-1$ và $1$, đạt $1$ tại $\dfrac{\pi}{2}$ và đạt $-1$ tại $\dfrac{3\pi}{2}$. Và sau mỗi vòng $2\pi$ (một vòng đường tròn), điểm $M$ trở về chỗ cũ nên các giá trị lặp lại: $\sin(x+2\pi)=\sin x$.

:::definition Hàm số tuần hoàn
Hàm số $y=f(x)$ có tập xác định $D$ gọi là **hàm số tuần hoàn** nếu có số $T>0$ sao cho với mọi $x\in D$ thì $x+T\in D$, $x-T\in D$ và $f(x+T)=f(x)$. Số $T$ nhỏ nhất (nếu có) thoả mãn các điều kiện đó gọi là **chu kì** của hàm số.
:::

Số $2\pi$ có phải là chu kì (nhỏ nhất) của $\sin$ không? Giả sử $0<T<2\pi$ cũng thoả mãn $\sin(x+T)=\sin x$ với mọi $x$. Thay $x=\dfrac{\pi}{2}$ ta có $\sin\left(\dfrac{\pi}{2}+T\right)=1$. Nhưng $\sin$ chỉ nhận giá trị $1$ tại các góc $\dfrac{\pi}{2}+k2\pi$, nên $T=k2\pi$, mâu thuẫn với $0<T<2\pi$. Vậy chu kì nhỏ nhất của $\sin$ là $2\pi$; lập luận cho $\cos$ cũng tương tự.

:::theorem Tính chất của hàm số $y=\sin x$ và $y=\cos x$
**Hàm số $y=\sin x$:**
- Tập xác định $\mathbb{R}$, tập giá trị $[-1; 1]$.
- Là hàm số lẻ (vì $\sin(-x)=-\sin x$), đồ thị nhận gốc toạ độ làm tâm đối xứng.
- Tuần hoàn với chu kì $2\pi$.
- Đồng biến trên mỗi khoảng $\left(-\dfrac{\pi}{2}+k2\pi; \dfrac{\pi}{2}+k2\pi\right)$, nghịch biến trên mỗi khoảng $\left(\dfrac{\pi}{2}+k2\pi; \dfrac{3\pi}{2}+k2\pi\right)$, $k\in\mathbb{Z}$.

**Hàm số $y=\cos x$:**
- Tập xác định $\mathbb{R}$, tập giá trị $[-1; 1]$.
- Là hàm số chẵn (vì $\cos(-x)=\cos x$), đồ thị nhận trục tung làm trục đối xứng.
- Tuần hoàn với chu kì $2\pi$.
- Đồng biến trên mỗi khoảng $(-\pi+k2\pi; k2\pi)$, nghịch biến trên mỗi khoảng $(k2\pi; \pi+k2\pi)$, $k\in\mathbb{Z}$.
:::

:::graph Đồ thị $y=\sin x$
alt: Đường hình sin đi qua gốc toạ độ, đạt giá trị lớn nhất 1 tại π/2 và nhỏ nhất −1 tại 3π/2, lặp lại sau mỗi đoạn dài 2π
x: -7..7
y: -1.6..1.6
plot: sin(x)
point: (1.5708, 1) "π/2" above
point: (3.1416, 0) "π" above-right
point: (4.7124, -1) "3π/2" below
point: (-1.5708, -1) "-π/2" below
:::

:::graph Đồ thị $y=\cos x$
alt: Đường hình sin cắt trục tung tại 1, đạt giá trị nhỏ nhất −1 tại π và −π, đạt lớn nhất 1 tại 2π, nhận trục tung làm trục đối xứng
x: -7..7
y: -1.6..1.6
plot: cos(x)
point: (0, 1) "1" above-right
point: (3.1416, -1) "π" below
point: (-3.1416, -1) "-π" below
point: (6.2832, 1) "2π" above
:::

Đồ thị của $\cos$ chính là đồ thị của $\sin$ tịnh tiến sang trái $\dfrac{\pi}{2}$ đơn vị, vì $\cos x=\sin\left(x+\dfrac{\pi}{2}\right)$. Ta chỉ cần vẽ kĩ một chu kì dài $2\pi$ rồi lặp lại sang hai phía.

## Hàm số $y=\tan x$ và $y=\cot x$

Hai hàm số này được định nghĩa bằng thương của $\sin$ và $\cos$:
$$\tan x=\dfrac{\sin x}{\cos x}\ (\cos x\ne0),\qquad \cot x=\dfrac{\cos x}{\sin x}\ (\sin x\ne0).$$
Vì $\cos x=0$ khi $x=\dfrac{\pi}{2}+k\pi$ và $\sin x=0$ khi $x=k\pi$, nên hai hàm số này không xác định ở những điểm đó.

:::theorem Tính chất của hàm số $y=\tan x$ và $y=\cot x$
**Hàm số $y=\tan x$:**
- Tập xác định $\mathbb{R}\setminus\left\{\dfrac{\pi}{2}+k\pi \mid k\in\mathbb{Z}\right\}$, tập giá trị $\mathbb{R}$.
- Là hàm số lẻ, tuần hoàn với chu kì $\pi$.
- Đồng biến trên mỗi khoảng $\left(-\dfrac{\pi}{2}+k\pi; \dfrac{\pi}{2}+k\pi\right)$.
- Đồ thị nhận các đường thẳng $x=\dfrac{\pi}{2}+k\pi$ làm tiệm cận đứng.

**Hàm số $y=\cot x$:**
- Tập xác định $\mathbb{R}\setminus\{k\pi \mid k\in\mathbb{Z}\}$, tập giá trị $\mathbb{R}$.
- Là hàm số lẻ, tuần hoàn với chu kì $\pi$.
- Nghịch biến trên mỗi khoảng $(k\pi; \pi+k\pi)$.
- Đồ thị nhận các đường thẳng $x=k\pi$ làm tiệm cận đứng.
:::

Chu kì của $\tan$ là $\pi$ chứ không phải $2\pi$ vì $\tan(x+\pi)=\dfrac{\sin(x+\pi)}{\cos(x+\pi)}=\dfrac{-\sin x}{-\cos x}=\tan x$: cả tử và mẫu cùng đổi dấu.

:::graph Đồ thị $y=\tan x$
alt: Ba nhánh của đồ thị tang đi lên từ trái sang phải, mỗi nhánh nằm giữa hai đường tiệm cận đứng, nhánh giữa đi qua gốc toạ độ và điểm (π/4, 1)
x: -4.5..4.5
y: -4..4
plot: tan(x) ; -1.45..1.45
plot: tan(x) ; 1.7..4.4
plot: tan(x) ; -4.4..-1.7
vline: 1.5708 ; dashed
vline: -1.5708 ; dashed
point: (0.7854, 1) "π/4" below-right
:::

Đồ thị của $\cot$ có dạng tương tự nhưng đi xuống, vì $\cot x=\tan\left(\dfrac{\pi}{2}-x\right)$: ta lấy đối xứng đồ thị của $\tan$ qua trục tung rồi tịnh tiến sang phải $\dfrac{\pi}{2}$ đơn vị.

## Ví dụ

Ta bắt đầu với việc tìm điều kiện để hàm số có nghĩa.

:::example Tìm tập xác định
Tìm tập xác định của các hàm số a) $y=\tan\left(2x-\dfrac{\pi}{3}\right)$; b) $y=\dfrac{1}{1-\cos x}$.

**Lời giải.** a) Hàm số xác định khi $\cos\left(2x-\dfrac{\pi}{3}\right)\ne0$, tức là
$$2x-\dfrac{\pi}{3}\ne\dfrac{\pi}{2}+k\pi\Leftrightarrow 2x\ne\dfrac{5\pi}{6}+k\pi\Leftrightarrow x\ne\dfrac{5\pi}{12}+\dfrac{k\pi}{2}\quad(k\in\mathbb{Z}).$$
Vậy tập xác định là $\mathbb{R}\setminus\left\{\dfrac{5\pi}{12}+\dfrac{k\pi}{2}\mid k\in\mathbb{Z}\right\}$.

b) Hàm số xác định khi $1-\cos x\ne0$, tức là $\cos x\ne1$, hay $x\ne k2\pi$. Vậy tập xác định là $\mathbb{R}\setminus\{k2\pi\mid k\in\mathbb{Z}\}$.
:::

Từ tập giá trị $[-1; 1]$ của $\sin$ và $\cos$, ta suy ra giá trị lớn nhất, nhỏ nhất của nhiều hàm số khác. Ví dụ sau trả lời câu hỏi ở đầu bài.

:::example Mực nước thuỷ triều
Với $h(t)=3+2\sin\dfrac{\pi t}{6}$ (mét, $t$ là số giờ kể từ $0$ giờ), tìm mực nước cao nhất, thấp nhất, thời điểm đạt các mực đó trong khoảng $0\le t<24$, và chu kì lặp lại của mực nước.

**Hiểu đề.** Ta cần giá trị lớn nhất, nhỏ nhất của $h$, các thời điểm đạt chúng, và số giờ $T$ nhỏ nhất để $h(t+T)=h(t)$.

**Tìm cách giải.** Dùng $-1\le\sin x\le1$ cho giá trị lớn nhất, nhỏ nhất; dùng chu kì $2\pi$ của $\sin$ để tìm $T$.

**Giải.** Vì $-1\le\sin\dfrac{\pi t}{6}\le1$ nên $1\le h(t)\le5$. Mực nước đạt $5$ m khi $\dfrac{\pi t}{6}=\dfrac{\pi}{2}+k2\pi$, tức $t=3+12k$; trong $[0; 24)$ đó là $t=3$ và $t=15$. Mực nước đạt $1$ m khi $\dfrac{\pi t}{6}=-\dfrac{\pi}{2}+k2\pi$, tức $t=-3+12k$; trong $[0; 24)$ đó là $t=9$ và $t=21$.

Ta có $h(t+12)=3+2\sin\left(\dfrac{\pi t}{6}+2\pi\right)=h(t)$, và $12$ là số nhỏ nhất như vậy vì $\sin$ có chu kì nhỏ nhất là $2\pi$.

Vậy mực nước cao nhất là $5$ m (lúc $3$ giờ và $15$ giờ), thấp nhất là $1$ m (lúc $9$ giờ và $21$ giờ), và cứ $12$ giờ thì lặp lại.

**Nhìn lại.** Một tàu cần mực nước ít nhất $4$ m để vào cảng. Ta cần $h(t)\ge4$, tức $\sin\dfrac{\pi t}{6}\ge\dfrac12$. Trên đồ thị $\sin$, điều này xảy ra khi $\dfrac{\pi t}{6}$ thuộc $\left[\dfrac{\pi}{6}; \dfrac{5\pi}{6}\right]$ trong một chu kì, tức $t\in[1; 5]$. Vậy trong mỗi chu kì $12$ giờ, tàu chỉ vào được trong $4$ giờ (từ $1$ đến $5$ giờ rồi từ $13$ đến $17$ giờ). Kết quả hợp lí: $4$ m nằm giữa mực thấp nhất $1$ m và cao nhất $5$ m, nên khoảng thời gian không chiếm cả chu kì.
:::

Tiếp theo, ta xét tính chẵn lẻ và chu kì.

:::example Tính chẵn lẻ và chu kì
a) Xét tính chẵn lẻ của hàm số $y=x\sin x$ và $y=\sin x+1$. b) Tìm chu kì của hàm số $y=\sin2x$.

**Lời giải.** a) Với $f(x)=x\sin x$ ta có $f(-x)=(-x)\sin(-x)=(-x)(-\sin x)=x\sin x=f(x)$. Tập xác định $\mathbb{R}$ đối xứng, nên $f$ là hàm số chẵn.

Với $g(x)=\sin x+1$ ta có $g\left(\dfrac{\pi}{2}\right)=2$ và $g\left(-\dfrac{\pi}{2}\right)=0$. Vì $0\ne2$ và $0\ne-2$ nên $g(-x)$ không bằng $g(x)$ cũng không bằng $-g(x)$. Vậy $g$ không chẵn, không lẻ.

b) Ta có $\sin2(x+\pi)=\sin(2x+2\pi)=\sin2x$ nên $\pi$ là một chu kì. Khi $x$ chạy từ $0$ đến $\pi$ thì $2x$ chạy hết một chu kì $2\pi$ của $\sin$, nên không có số dương nhỏ hơn $\pi$ thoả mãn. Vậy chu kì của $y=\sin2x$ là $\pi$.
:::

**Nhận xét.** Tổng quát, hàm số $y=\sin(\omega x+\varphi)$ và $y=\cos(\omega x+\varphi)$ với $\omega\ne0$ có chu kì $\dfrac{2\pi}{|\omega|}$; hàm số $y=\tan(\omega x+\varphi)$ có chu kì $\dfrac{\pi}{|\omega|}$.

Tính đơn điệu giúp so sánh giá trị mà không cần máy tính.

:::example So sánh giá trị lượng giác
So sánh a) $\cos\dfrac{\pi}{5}$ và $\cos\dfrac{2\pi}{5}$; b) $\tan\left(-\dfrac{\pi}{5}\right)$ và $\tan\dfrac{\pi}{7}$.

**Lời giải.** a) Hai góc $\dfrac{\pi}{5}$ và $\dfrac{2\pi}{5}$ cùng thuộc khoảng $(0; \pi)$, nơi $\cos$ nghịch biến. Vì $\dfrac{\pi}{5}<\dfrac{2\pi}{5}$ nên $\cos\dfrac{\pi}{5}>\cos\dfrac{2\pi}{5}$.

b) Hai góc $-\dfrac{\pi}{5}$ và $\dfrac{\pi}{7}$ cùng thuộc khoảng $\left(-\dfrac{\pi}{2}; \dfrac{\pi}{2}\right)$, nơi $\tan$ đồng biến. Vì $-\dfrac{\pi}{5}<\dfrac{\pi}{7}$ nên $\tan\left(-\dfrac{\pi}{5}\right)<\tan\dfrac{\pi}{7}$.
:::

Đồ thị còn cho ta biết số nghiệm của một phương trình, và đây là bước chuẩn bị cho bài sau.

:::example Số nghiệm của phương trình lượng giác
Dựa vào đồ thị hàm số $y=\cos x$, cho biết phương trình $\cos x=\dfrac12$ có bao nhiêu nghiệm trong đoạn $[-\pi; 2\pi]$.

**Lời giải.** Nghiệm của phương trình là hoành độ giao điểm của đồ thị $y=\cos x$ và đường thẳng $y=\dfrac12$. Ta có $\cos\dfrac{\pi}{3}=\dfrac12$. Trong đoạn $[-\pi; \pi]$, $\cos$ chẵn nên có hai giao điểm $x=\pm\dfrac{\pi}{3}$. Trong $\left(\pi; 2\pi\right]$, đồ thị đi lên từ $-1$ đến $1$ và cắt đường $y=\dfrac12$ đúng một lần, tại $x=2\pi-\dfrac{\pi}{3}=\dfrac{5\pi}{3}$.

Vậy phương trình có $3$ nghiệm trong đoạn $[-\pi; 2\pi]$: $-\dfrac{\pi}{3}$, $\dfrac{\pi}{3}$, $\dfrac{5\pi}{3}$.
:::

Cuối cùng là một ví dụ về dòng điện xoay chiều.

:::example Điện xoay chiều
Điện lưới sinh hoạt ở Việt Nam có điện áp hiệu dụng $220$ V và tần số $50$ Hz. Điện áp tức thời được mô tả bởi $u(t)=220\sqrt2\sin(100\pi t)$ (V), với $t$ tính bằng giây. Tìm chu kì và điện áp cực đại (làm tròn đến hàng đơn vị).

**Lời giải.** Hàm số $\sin(100\pi t)$ có chu kì $\dfrac{2\pi}{100\pi}=0{,}02$ giây, tức mỗi giây lặp lại $\dfrac{1}{0{,}02}=50$ lần, khớp với tần số $50$ Hz.

Vì $-1\le\sin(100\pi t)\le1$ nên $-220\sqrt2\le u\le220\sqrt2$. Giá trị lớn nhất $220\sqrt2\approx311$ (V) đạt khi $\sin(100\pi t)=1$, chẳng hạn tại $t=0{,}005$ giây.

Vậy chu kì là $0{,}02$ giây và điện áp cực đại xấp xỉ $311$ V.
:::

**Kết nối.** Bài này dựa trên giá trị lượng giác của góc lượng giác và các công thức ở bài trước, chẳng hạn khi viết $\sin x+\cos x$ dưới dạng một hàm $\sin$. Nó chuẩn bị cho bài sau: nghiệm của phương trình lượng giác chính là giao điểm của đồ thị với một đường ngang, và chu kì cho ta biết các nghiệm lặp lại sau $2\pi$ hay $\pi$. Về sau, hàm số lượng giác còn xuất hiện khi tính đạo hàm và mô tả dao động.

:::warning Những sai lầm thường gặp
- **Cho chu kì của $\tan x$ là $2\pi$.** Sai: $\tan x$ có chu kì $2\pi$ giống $\sin x$. Vì sao sai: $\tan(x+\pi)=\tan x$, ví dụ $\tan\dfrac{\pi}{4}=\tan\dfrac{5\pi}{4}=1$, nên $\pi$ đã là một chu kì. Đúng: chu kì của $\tan x$ và $\cot x$ là $\pi$.
- **Cho chu kì của $\sin2x$ là $2\pi$.** Sai: đổi $x$ thành $2x$ không làm đổi chu kì. Vì sao sai: $\sin2(x+\pi)=\sin2x$. Đúng: chu kì là $\dfrac{2\pi}{2}=\pi$.
- **Quên loại điểm không xác định.** Sai: tập xác định của $y=\tan x$ là $\mathbb{R}$. Vì sao sai: tại $x=\dfrac{\pi}{2}$ ta có $\cos x=0$ nên $\tan x$ không có nghĩa. Đúng: $x\ne\dfrac{\pi}{2}+k\pi$.
- **Nói $\tan x$ đồng biến trên toàn bộ tập xác định.** Sai: $\tan x$ đồng biến trên $(0; \pi)$. Vì sao sai: $\tan\dfrac{\pi}{4}=1$ nhưng $\tan\dfrac{3\pi}{4}=-1$, còn $\dfrac{\pi}{4}<\dfrac{3\pi}{4}$. Đúng: $\tan x$ đồng biến trên từng khoảng $\left(-\dfrac{\pi}{2}+k\pi; \dfrac{\pi}{2}+k\pi\right)$.
:::

## Thuật ngữ

:::terms
- hàm số lượng giác | trigonometric function
- hàm số tuần hoàn | periodic function
- chu kì | period
- hàm số chẵn | even function
- hàm số lẻ | odd function
- tập xác định | domain
- tập giá trị | range
- đồng biến | increasing
- nghịch biến | decreasing
- tiệm cận đứng | vertical asymptote
- đường tròn lượng giác | unit circle
:::

## Tóm tắt

- $y=\sin x$ và $y=\cos x$: xác định trên $\mathbb{R}$, tập giá trị $[-1; 1]$, chu kì $2\pi$; $\sin$ lẻ, $\cos$ chẵn.
- $y=\tan x$: $x\ne\dfrac{\pi}{2}+k\pi$; $y=\cot x$: $x\ne k\pi$. Cả hai có tập giá trị $\mathbb{R}$, là hàm số lẻ, chu kì $\pi$.
- $\sin$ đồng biến trên $\left(-\dfrac{\pi}{2}; \dfrac{\pi}{2}\right)$; $\cos$ nghịch biến trên $(0; \pi)$; $\tan$ đồng biến trên $\left(-\dfrac{\pi}{2}; \dfrac{\pi}{2}\right)$; $\cot$ nghịch biến trên $(0; \pi)$ (và lặp lại theo chu kì).
- Chu kì của $\sin(\omega x+\varphi)$, $\cos(\omega x+\varphi)$ là $\dfrac{2\pi}{|\omega|}$; của $\tan(\omega x+\varphi)$ là $\dfrac{\pi}{|\omega|}$.
- Giá trị lớn nhất, nhỏ nhất của hàm số dạng $a\sin(\cdot)+b$ suy ra từ $-1\le\sin\le1$: nằm giữa $b-|a|$ và $b+|a|$.
- Nghiệm của $\sin x=m$ hay $\cos x=m$ là hoành độ giao điểm của đồ thị với đường thẳng $y=m$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm tập xác định của hàm số a) $y=\tan\left(x+\dfrac{\pi}{6}\right)$; b) $y=\dfrac{1}{1+\sin x}$.

::hint
**Kiến thức:** $\tan u$ xác định khi $\cos u\ne0$; phân thức xác định khi mẫu khác $0$.

**Gợi ý các bước:**
1. Câu a: đặt $x+\dfrac{\pi}{6}\ne\dfrac{\pi}{2}+k\pi$.
2. Câu b: $\sin x\ne-1$ khi nào?

::solution
a) Hàm số xác định khi $x+\dfrac{\pi}{6}\ne\dfrac{\pi}{2}+k\pi$, tức $x\ne\dfrac{\pi}{3}+k\pi$.

b) Hàm số xác định khi $1+\sin x\ne0$, tức $\sin x\ne-1$, hay $x\ne-\dfrac{\pi}{2}+k2\pi$.

**Đáp số.** a) $\mathbb{R}\setminus\left\{\dfrac{\pi}{3}+k\pi\right\}$; b) $\mathbb{R}\setminus\left\{-\dfrac{\pi}{2}+k2\pi\right\}$ ($k\in\mathbb{Z}$).
:::

:::exercise
Tìm giá trị lớn nhất, giá trị nhỏ nhất của hàm số $y=5-3\cos x$ và các giá trị $x$ đạt chúng.

::hint
**Kiến thức:** $-1\le\cos x\le1$; $\cos x=1$ khi $x=k2\pi$, $\cos x=-1$ khi $x=\pi+k2\pi$.

**Gợi ý các bước:**
1. Nhân bất đẳng thức với $-3$ (đổi chiều) rồi cộng $5$.
2. Tìm $x$ ứng với mỗi giá trị.

::solution
Vì $-1\le\cos x\le1$ nên $-3\le-3\cos x\le3$, suy ra $2\le y\le8$. Giá trị nhỏ nhất $2$ đạt khi $\cos x=1$, tức $x=k2\pi$. Giá trị lớn nhất $8$ đạt khi $\cos x=-1$, tức $x=\pi+k2\pi$.

**Đáp số.** $\min y=2$ tại $x=k2\pi$; $\max y=8$ tại $x=\pi+k2\pi$.
:::

:::exercise
Xét tính chẵn lẻ của các hàm số a) $y=x\cos x$; b) $y=\sin^2x+\cos x$; c) $y=\tan x+x$.

::hint
**Kiến thức:** hàm số chẵn: $f(-x)=f(x)$; hàm số lẻ: $f(-x)=-f(x)$.

**Gợi ý các bước:**
1. Tính $f(-x)$ với $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$, $\tan(-x)=-\tan x$.
2. So sánh với $f(x)$ và $-f(x)$.

::solution
a) $f(-x)=(-x)\cos(-x)=-x\cos x=-f(x)$: hàm số lẻ.

b) $f(-x)=\sin^2(-x)+\cos(-x)=\sin^2x+\cos x=f(x)$: hàm số chẵn.

c) $f(-x)=\tan(-x)+(-x)=-(\tan x+x)=-f(x)$: hàm số lẻ.

**Đáp số.** a) lẻ; b) chẵn; c) lẻ.
:::

:::exercise
Tìm chu kì của các hàm số a) $y=\sin3x$; b) $y=\cos\dfrac{x}{2}$; c) $y=\tan2x$.

::hint
**Kiến thức:** $\sin(\omega x)$, $\cos(\omega x)$ có chu kì $\dfrac{2\pi}{|\omega|}$; $\tan(\omega x)$ có chu kì $\dfrac{\pi}{|\omega|}$.

**Gợi ý các bước:**
1. Xác định hệ số $\omega$ của $x$ trong mỗi hàm số.
2. Áp dụng công thức chu kì.

::solution
a) $\omega=3$ nên chu kì là $\dfrac{2\pi}{3}$.

b) $\omega=\dfrac12$ nên chu kì là $\dfrac{2\pi}{1/2}=4\pi$.

c) $\omega=2$ nên chu kì là $\dfrac{\pi}{2}$.

**Đáp số.** a) $\dfrac{2\pi}{3}$; b) $4\pi$; c) $\dfrac{\pi}{2}$.
:::

:::exercise
So sánh a) $\sin\dfrac{\pi}{9}$ và $\sin\dfrac{2\pi}{9}$; b) $\cos\dfrac{4\pi}{5}$ và $\cos\dfrac{3\pi}{5}$.

::hint
**Kiến thức:** $\sin$ đồng biến trên $\left(0; \dfrac{\pi}{2}\right)$; $\cos$ nghịch biến trên $(0; \pi)$.

**Gợi ý các bước:**
1. Kiểm tra hai góc cùng nằm trong khoảng đơn điệu nào.
2. So sánh hai góc rồi suy ra.

::solution
a) Hai góc cùng thuộc $\left(0; \dfrac{\pi}{2}\right)$ nơi $\sin$ đồng biến và $\dfrac{\pi}{9}<\dfrac{2\pi}{9}$, nên $\sin\dfrac{\pi}{9}<\sin\dfrac{2\pi}{9}$.

b) Hai góc cùng thuộc $(0; \pi)$ nơi $\cos$ nghịch biến và $\dfrac{4\pi}{5}>\dfrac{3\pi}{5}$, nên $\cos\dfrac{4\pi}{5}<\cos\dfrac{3\pi}{5}$.

**Đáp số.** a) $\sin\dfrac{\pi}{9}<\sin\dfrac{2\pi}{9}$; b) $\cos\dfrac{4\pi}{5}<\cos\dfrac{3\pi}{5}$.
:::

:::exercise
Giả sử nhiệt độ ngoài trời (độ C) tại một thành phố vào ngày nóng nực được mô tả bởi $T(t)=28+5\sin\dfrac{\pi(t-9)}{12}$, trong đó $t$ là số giờ kể từ $0$ giờ ($0\le t<24$). Tìm nhiệt độ cao nhất, thấp nhất và thời điểm đạt chúng. Sau bao nhiêu giờ thì nhiệt độ lặp lại?

::hint
**Kiến thức:** $-1\le\sin u\le1$; $\sin u=1$ khi $u=\dfrac{\pi}{2}+k2\pi$, $\sin u=-1$ khi $u=-\dfrac{\pi}{2}+k2\pi$.

**Gợi ý các bước:**
1. Tìm khoảng giá trị của $T$.
2. Giải $\dfrac{\pi(t-9)}{12}=\pm\dfrac{\pi}{2}$ với $0\le t<24$.
3. Tìm chu kì của $\sin\dfrac{\pi t}{12}$.

::solution
Vì $-1\le\sin\dfrac{\pi(t-9)}{12}\le1$ nên $23\le T\le33$. Nhiệt độ $33$ khi $\dfrac{\pi(t-9)}{12}=\dfrac{\pi}{2}$, tức $t=15$. Nhiệt độ $23$ khi $\dfrac{\pi(t-9)}{12}=-\dfrac{\pi}{2}$, tức $t=3$. Chu kì là $\dfrac{2\pi}{\pi/12}=24$ giờ.

**Đáp số.** Cao nhất $33^\circ$C lúc $15$ giờ; thấp nhất $23^\circ$C lúc $3$ giờ; lặp lại sau $24$ giờ.
:::

:::exercise
Cho hàm số $y=\tan x$. Xét tính đúng sai của các mệnh đề sau:

a) Hàm số xác định trên $\mathbb{R}$.

b) Hàm số tuần hoàn với chu kì $\pi$.

c) Hàm số đồng biến trên khoảng $(0; \pi)$.

d) Đồ thị hàm số nhận gốc toạ độ làm tâm đối xứng.

::hint
**Kiến thức:** tập xác định, chu kì, khoảng đồng biến và tính lẻ của $\tan$.

**Gợi ý các bước:**
1. a) $\tan x$ không xác định khi nào?
2. c) Điểm $x=\dfrac{\pi}{2}$ có thuộc $(0; \pi)$ không?
3. d) Hàm số lẻ có đồ thị đối xứng qua gốc $O$.

::solution
a) **Sai**: $\tan x$ không xác định tại $x=\dfrac{\pi}{2}+k\pi$.

b) **Đúng**: $\tan(x+\pi)=\tan x$ và $\pi$ là số dương nhỏ nhất như vậy.

c) **Sai**: $\dfrac{\pi}{2}\in(0; \pi)$ mà $\tan x$ không xác định tại đó; hàm số đồng biến trên $\left(0; \dfrac{\pi}{2}\right)$ và trên $\left(\dfrac{\pi}{2}; \pi\right)$ riêng rẽ.

d) **Đúng**: $\tan$ là hàm số lẻ.

**Đáp số.** a) Sai; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Điện áp tức thời của một nguồn điện xoay chiều là $u(t)=220\sqrt2\sin(100\pi t)$ (V). Tính điện áp cực đại, làm tròn đến hàng đơn vị (đơn vị V).

::hint
**Kiến thức:** giá trị lớn nhất của $\sin$ là $1$.

**Gợi ý các bước:**
1. Tìm giá trị lớn nhất của $u$.
2. Tính gần đúng $220\sqrt2$.

::solution
Vì $\sin(100\pi t)\le1$ nên $u\le220\sqrt2\approx311{,}1$.

**Đáp số.** $311$ V.
:::

:::exercise Ôn tập
Dùng công thức cộng để viết $y=\sin x+\cos x$ dưới dạng $y=\sqrt2\sin\left(x+\dfrac{\pi}{4}\right)$. Từ đó tìm tập giá trị và chu kì của hàm số.

::hint
**Kiến thức:** $\sin(a+b)=\sin a\cos b+\cos a\sin b$; $\sin\dfrac{\pi}{4}=\cos\dfrac{\pi}{4}=\dfrac{\sqrt2}{2}$.

**Gợi ý các bước:**
1. Khai triển $\sqrt2\sin\left(x+\dfrac{\pi}{4}\right)$.
2. Dùng $-1\le\sin\le1$ và chu kì của $\sin(x+\varphi)$.

::solution
Ta có $\sqrt2\sin\left(x+\dfrac{\pi}{4}\right)=\sqrt2\left(\sin x\cdot\dfrac{\sqrt2}{2}+\cos x\cdot\dfrac{\sqrt2}{2}\right)=\sin x+\cos x$. Vì $-1\le\sin\left(x+\dfrac{\pi}{4}\right)\le1$ nên $-\sqrt2\le y\le\sqrt2$. Chu kì là $2\pi$.

**Đáp số.** Tập giá trị $\left[-\sqrt2; \sqrt2\right]$; chu kì $2\pi$.
:::

:::exercise Thử thách
Chứng minh hàm số $y=\sin^2x$ tuần hoàn với chu kì $\pi$ (nghĩa là $\pi$ là số dương nhỏ nhất thoả mãn).

::hint
**Kiến thức:** công thức hạ bậc $\sin^2x=\dfrac{1-\cos2x}{2}$; $\sin^2T=0$ khi nào?

**Gợi ý các bước:**
1. Chứng tỏ $\pi$ là một chu kì.
2. Giả sử $0<T<\pi$ cũng là chu kì; thay $x=0$ để tìm mâu thuẫn.

::solution
Ta có $\sin^2(x+\pi)=(-\sin x)^2=\sin^2x$ nên $\pi$ là một chu kì. Giả sử $0<T<\pi$ cũng thoả mãn $\sin^2(x+T)=\sin^2x$ với mọi $x$. Thay $x=0$ ta có $\sin^2T=0$, suy ra $T=k\pi$, mâu thuẫn với $0<T<\pi$. Vậy chu kì nhỏ nhất là $\pi$.

**Đáp số.** Chu kì của $y=\sin^2x$ là $\pi$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Tập xác định của hàm số $y=\cot2x$ là
A. $\mathbb{R}\setminus\{k\pi\mid k\in\mathbb{Z}\}$.
B. $\mathbb{R}\setminus\left\{\dfrac{\pi}{2}+k\pi\mid k\in\mathbb{Z}\right\}$.
C. $\mathbb{R}\setminus\left\{\dfrac{k\pi}{2}\mid k\in\mathbb{Z}\right\}$.
D. $\mathbb{R}\setminus\left\{\dfrac{k\pi}{4}\mid k\in\mathbb{Z}\right\}$.
::key C
Hàm số xác định khi $\sin2x\ne0$, tức $2x\ne k\pi$, hay $x\ne\dfrac{k\pi}{2}$. Phương án A quên hệ số $2$, phương án B là tập xác định của $\tan$.

::mc TH
Giá trị lớn nhất của hàm số $y=4-3\sin2x$ bằng
A. $1$.
B. $4$.
C. $10$.
D. $7$.
::key D
Vì $-1\le\sin2x\le1$ nên $y\le4+3=7$, đạt khi $\sin2x=-1$. Phương án A là giá trị nhỏ nhất, phương án C coi $\sin2x$ có thể bằng $-2$.

::mc NB
Chu kì của hàm số $y=\sin\dfrac{\pi x}{3}$ là
A. $6$.
B. $3$.
C. $2\pi$.
D. $\dfrac{\pi}{3}$.
::key A
Chu kì là $\dfrac{2\pi}{\pi/3}=6$. Phương án C bỏ qua hệ số của $x$, phương án B dùng $\dfrac{\pi}{\pi/3}$ (chu kì của $\tan$).

::mc TH
Khẳng định nào sau đây đúng?
A. $\cos\dfrac{\pi}{5}<\cos\dfrac{2\pi}{5}$.
B. $\tan\dfrac{\pi}{5}<\tan\dfrac{2\pi}{5}$.
C. $\sin\dfrac{3\pi}{5}>\sin\dfrac{\pi}{2}$.
D. $\tan\dfrac{3\pi}{5}>\tan\dfrac{2\pi}{5}$.
::key B
$\tan$ đồng biến trên $\left(0; \dfrac{\pi}{2}\right)$ nên A đúng. B sai vì $\cos$ nghịch biến trên $(0; \pi)$; C sai vì $\sin\dfrac{\pi}{2}=1$ là giá trị lớn nhất; D sai vì $\tan\dfrac{3\pi}{5}<0<\tan\dfrac{2\pi}{5}$.

::tf TH TH TH NB
Cho hàm số $y=3-2\cos x$. Xét tính đúng sai của các mệnh đề sau:
a) Tập giá trị của hàm số là $[1; 5]$.
b) Hàm số đã cho là hàm số lẻ.
c) Hàm số đồng biến trên khoảng $(0; \pi)$.
d) Hàm số tuần hoàn với chu kì $2\pi$.
::key Đ S Đ Đ
a) Đúng: $-1\le\cos x\le1$ nên $1\le y\le5$. b) Sai: $y(-x)=3-2\cos(-x)=y(x)$, hàm số chẵn. c) Đúng: $\cos x$ nghịch biến trên $(0; \pi)$ nên $-2\cos x$ đồng biến. d) Đúng: $\cos x$ có chu kì $2\pi$.

::sa VD
Có bao nhiêu giá trị $x\in[0; 3\pi]$ thoả mãn $\sin x=\dfrac12$?
::key 4
Các nghiệm là $\dfrac{\pi}{6}$, $\dfrac{5\pi}{6}$, $\dfrac{13\pi}{6}$, $\dfrac{17\pi}{6}$, đều thuộc $[0; 3\pi]$; nghiệm tiếp theo $\dfrac{25\pi}{6}>3\pi$.

::sa TH
Độ cao (m) của một cabin vòng quay so với mặt đất sau $t$ phút là $h(t)=22-20\cos\dfrac{\pi t}{4}$. Tính độ cao của cabin sau $3$ phút, làm tròn đến hàng phần mười.
::key 36,1
$h(3)=22-20\cos\dfrac{3\pi}{4}=22+20\cdot\dfrac{\sqrt2}{2}=22+10\sqrt2\approx36{,}1$ (m).
:::
