---
title: Giá trị lượng giác của một góc từ 0° đến 180°
description: Định nghĩa sin, côsin, tang, côtang của góc từ 0° đến 180° trên nửa đường tròn đơn vị; góc bù nhau, bảng giá trị đặc biệt, hệ thức cơ bản, máy tính.
minutes: 25
---

:::goals
- Định nghĩa được $\sin\alpha$, $\cos\alpha$, $\tan\alpha$, $\cot\alpha$ với $0^\circ\leq\alpha\leq180^\circ$ nhờ một điểm trên nửa đường tròn đơn vị.
- Dùng được quan hệ giữa hai góc bù nhau và bảng giá trị lượng giác của các góc đặc biệt.
- Dùng $\sin^2\alpha+\cos^2\alpha=1$ và các hệ thức liên quan để tính các giá trị còn lại khi biết một giá trị, chọn đúng dấu.
- Tính giá trị lượng giác và tìm góc bằng máy tính cầm tay.
:::

Một thanh chắn dài $1$ m quay quanh trục $O$ đặt sát mặt đường. Khi thanh nghiêng $30^\circ$ so với mặt đường, đầu thanh cao $0{,}5$ m và ở bên phải $O$ khoảng $0{,}87$ m. Nếu thanh quay tiếp đến $150^\circ$ thì đầu thanh ở đâu: cao bao nhiêu, bên nào của $O$, cách bao xa?

Trong tam giác vuông, sin và côsin chỉ định nghĩa cho góc nhọn, nên chưa trả lời được câu hỏi với góc $150^\circ$. Bài này mở rộng chúng cho mọi góc từ $0^\circ$ đến $180^\circ$.

## Nửa đường tròn đơn vị

Vẽ nửa đường tròn nằm phía trên trục hoành, tâm $O(0; 0)$, bán kính $1$. Đó là **nửa đường tròn đơn vị**: các điểm $(x; y)$ của nó thoả mãn $x^2+y^2=1$ và $y\geq0$.

Lấy một góc $\alpha$ từ $0^\circ$ đến $180^\circ$. Xuất phát từ tia $Ox$ rồi quay ngược chiều kim đồng hồ một góc $\alpha$. Tia này cắt nửa đường tròn tại đúng một điểm $M(x_0; y_0)$.

:::graph Điểm $M$ ứng với góc $\alpha$
alt: Nửa đường tròn đơn vị tâm O. Điểm M trên nửa đường tròn được nối với O, góc alpha giữa trục hoành và OM được đánh dấu, và chân H của đường vuông góc hạ từ M xuống trục hoành.
x: -1.5..1.5
y: -0.3..1.3
plot: sqrt(1 - x^2)
segment: (-1, 0) (1, 0)
segment: (0, 0) (0.5, 0.866)
segment: (0.5, 0.866) (0.5, 0)
point: (0, 0) "O" below
point: (0.5, 0.866) "M" above-right
point: (0.5, 0) "H" below
label: (0.17, 0.08) "α"
:::

### Khám phá với góc nhọn

Khi $\alpha$ nhọn, tam giác $OHM$ vuông tại $H$ với cạnh huyền $OM=1$. Theo định nghĩa trong tam giác vuông:

$$\cos\alpha=\frac{OH}{OM}=OH=x_0,\qquad \sin\alpha=\frac{HM}{OM}=HM=y_0.$$

Chẳng hạn với $\alpha=30^\circ$: $M\left(\dfrac{\sqrt3}{2}; \dfrac12\right)\approx(0{,}87; 0{,}5)$, đúng là vị trí đầu thanh chắn ở đầu bài. Vậy với góc nhọn, **hoành độ của $M$ là côsin, tung độ là sin**. Ta lấy điều này làm định nghĩa cho **mọi** góc $\alpha$ thuộc $[0^\circ; 180^\circ]$.

:::definition Giá trị lượng giác của góc từ 0° đến 180°
Cho $M(x_0; y_0)$ là điểm của nửa đường tròn đơn vị sao cho $\widehat{xOM}=\alpha$. Khi đó

$$\sin\alpha=y_0,\qquad \cos\alpha=x_0,$$

$$\tan\alpha=\frac{y_0}{x_0}\ (x_0\neq0),\qquad \cot\alpha=\frac{x_0}{y_0}\ (y_0\neq0).$$
:::

### Khi nào tan và cot không xác định?

- $x_0=0$ đúng khi $M=(0; 1)$, tức là $\alpha=90^\circ$. Vậy $\tan90^\circ$ không xác định.
- $y_0=0$ đúng khi $M=(1; 0)$ hoặc $M=(-1; 0)$, tức là $\alpha=0^\circ$ hoặc $\alpha=180^\circ$. Vậy $\cot0^\circ$ và $\cot180^\circ$ không xác định.

### Dấu của các giá trị lượng giác

Vì $M$ nằm trên nửa đường tròn phía trên nên $\sin\alpha\geq0$ với mọi $\alpha$. Dấu của $\cos\alpha=x_0$ phụ thuộc vào việc $M$ nằm bên phải hay bên trái trục tung:

| góc | $\sin\alpha$ | $\cos\alpha$ | $\tan\alpha$ | $\cot\alpha$ |
|---|---|---|---|---|
| nhọn ($0^\circ<\alpha<90^\circ$) | $+$ | $+$ | $+$ | $+$ |
| tù ($90^\circ<\alpha<180^\circ$) | $+$ | $-$ | $-$ | $-$ |

## Hai góc bù nhau

Quay lại thanh chắn: góc $150^\circ$ và góc $30^\circ$ có tổng $180^\circ$. Hai điểm $M$ (góc $\alpha$) và $M'$ (góc $180^\circ-\alpha$) đối xứng với nhau qua trục tung.

:::graph Hai góc bù nhau cho hai điểm đối xứng qua trục tung
alt: Nửa đường tròn đơn vị với hai điểm M ứng với góc 60 độ và M' ứng với góc 120 độ, cùng độ cao và đối xứng nhau qua trục tung.
x: -1.5..1.5
y: -0.3..1.3
plot: sqrt(1 - x^2)
segment: (-1, 0) (1, 0)
segment: (0, 0) (0.5, 0.866)
segment: (0, 0) (-0.5, 0.866)
point: (0, 0) "O" below
point: (0.5, 0.866) "M" above-right
point: (-0.5, 0.866) "M'" above-left
label: (0.3, 0.12) "α"
label: (-0.45, 0.12) "180°−α"
:::

Hai điểm đối xứng qua trục tung có cùng tung độ và hoành độ đối nhau. Từ đó có quy tắc cho mọi $\alpha$.

:::theorem Hai góc bù nhau
Với $0^\circ\leq\alpha\leq180^\circ$:

$$\sin(180^\circ-\alpha)=\sin\alpha,\qquad \cos(180^\circ-\alpha)=-\cos\alpha,$$

$$\tan(180^\circ-\alpha)=-\tan\alpha,\qquad \cot(180^\circ-\alpha)=-\cot\alpha$$

(khi các giá trị đó xác định).
:::

Vậy ở góc $150^\circ$, đầu thanh chắn vẫn cao $0{,}5$ m nhưng nằm **bên trái** $O$ khoảng $0{,}87$ m, vì $\cos150^\circ=-\cos30^\circ\approx-0{,}87$. Với góc nhọn, bạn còn biết quy tắc hai góc phụ nhau: $\sin(90^\circ-\alpha)=\cos\alpha$ và $\cos(90^\circ-\alpha)=\sin\alpha$.

Ví dụ đầu tiên chỉ dùng quy tắc góc bù, không cần biết giá trị cụ thể nào.

:::example Rút gọn nhờ góc bù nhau
Tính $A=\sin100^\circ-\sin80^\circ+\cos100^\circ+\cos80^\circ$.

**Lời giải.** Vì $100^\circ=180^\circ-80^\circ$ nên ta đưa mọi số hạng về góc $80^\circ$:

$$\sin100^\circ=\sin80^\circ,\qquad \cos100^\circ=-\cos80^\circ.$$

$$A=\sin80^\circ-\sin80^\circ-\cos80^\circ+\cos80^\circ=0.$$

Vậy $A=0$.
:::

## Bảng giá trị lượng giác của các góc đặc biệt

Đặt $M$ ở các góc $30^\circ$, $45^\circ$, $60^\circ$ (và các điểm đối xứng ở $150^\circ$, $135^\circ$, $120^\circ$) ta được bảng dưới đây. Bạn chỉ cần nhớ nửa đầu; nửa sau suy ra từ quy tắc góc bù nhau.

:::graph Các điểm của nửa đường tròn ở những góc đặc biệt
alt: Nửa đường tròn đơn vị với các điểm được đánh dấu ở các góc 30, 45, 60, 90, 120, 135 và 150 độ.
x: -1.4..1.4
y: -0.3..1.3
plot: sqrt(1 - x^2)
segment: (-1, 0) (1, 0)
point: (0.866, 0.5) "30°" right
point: (0.707, 0.707) "45°" above-right
point: (0.5, 0.866) "60°" above
point: (-0.5, 0.866) "120°" above
point: (-0.707, 0.707) "135°" above-left
point: (-0.866, 0.5) "150°" left
point: (0, 1) "90°" above
:::

| $\alpha$ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$ | $180^\circ$ |
|---|---|---|---|---|---|---|---|---|---|
| $\sin\alpha$ | $0$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ |
| $\cos\alpha$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ | $-\frac12$ | $-\frac{\sqrt2}{2}$ | $-\frac{\sqrt3}{2}$ | $-1$ |
| $\tan\alpha$ | $0$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | không xác định | $-\sqrt3$ | $-1$ | $-\frac{\sqrt3}{3}$ | $0$ |
| $\cot\alpha$ | không xác định | $\sqrt3$ | $1$ | $\frac{\sqrt3}{3}$ | $0$ | $-\frac{\sqrt3}{3}$ | $-1$ | $-\sqrt3$ | không xác định |

Bây giờ ta dùng bảng và quy tắc góc bù để tìm cả bốn giá trị của một góc tù.

:::example Các giá trị tại 135°
Tìm $\sin135^\circ$, $\cos135^\circ$, $\tan135^\circ$, $\cot135^\circ$.

**Lời giải.** Vì $135^\circ=180^\circ-45^\circ$ nên ta dùng quy tắc góc bù với $\alpha=45^\circ$; sin giữ nguyên, ba giá trị còn lại đổi dấu:

$$\sin135^\circ=\sin45^\circ=\frac{\sqrt2}{2},\qquad \cos135^\circ=-\cos45^\circ=-\frac{\sqrt2}{2},$$

$$\tan135^\circ=-\tan45^\circ=-1,\qquad \cot135^\circ=-\cot45^\circ=-1.$$

Vậy $\sin135^\circ=\dfrac{\sqrt2}{2}$, $\cos135^\circ=-\dfrac{\sqrt2}{2}$, $\tan135^\circ=\cot135^\circ=-1$.
:::

## Các hệ thức cơ bản

**Vì sao $\sin^2\alpha+\cos^2\alpha=1$?** Điểm $M(x_0; y_0)$ nằm trên đường tròn tâm $O$ bán kính $1$, nên $x_0^2+y_0^2=OM^2=1$, tức là $\cos^2\alpha+\sin^2\alpha=1$. Chia hai vế cho $\cos^2\alpha$ hoặc $\sin^2\alpha$ ta được thêm hai hệ thức nữa.

:::theorem Các hệ thức cơ bản
$$\sin^2\alpha+\cos^2\alpha=1$$

$$1+\tan^2\alpha=\frac{1}{\cos^2\alpha}\quad(\alpha\neq90^\circ),\qquad 1+\cot^2\alpha=\frac{1}{\sin^2\alpha}\quad(\alpha\neq0^\circ,180^\circ)$$

$$\tan\alpha=\frac{\sin\alpha}{\cos\alpha},\qquad \cot\alpha=\frac{\cos\alpha}{\sin\alpha},\qquad \tan\alpha\cdot\cot\alpha=1$$

(hệ thức cuối khi $\alpha\neq0^\circ,90^\circ,180^\circ$).
:::

Khi biết một giá trị, ta tìm bình phương của giá trị cần tính bằng một hệ thức, rồi **chọn dấu** theo góc nhọn hay góc tù. Chỗ chọn dấu là chỗ dễ sai nhất: từ $\cos^2\alpha=\dfrac{16}{25}$ có hai khả năng $\cos\alpha=\dfrac45$ hoặc $\cos\alpha=-\dfrac45$.

:::example Biết sin, góc tù
Cho $\sin\alpha=\dfrac35$ và $90^\circ<\alpha<180^\circ$. Tính $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.

**Lời giải.** Ta dùng $\sin^2\alpha+\cos^2\alpha=1$ để tìm $\cos^2\alpha$:

$$\cos^2\alpha=1-\frac{9}{25}=\frac{16}{25}.$$

Góc $\alpha$ tù nên $\cos\alpha<0$, ta lấy giá trị âm:

$$\cos\alpha=-\frac45,\qquad \tan\alpha=\frac{3/5}{-4/5}=-\frac34,\qquad \cot\alpha=\frac{1}{\tan\alpha}=-\frac43.$$

Vậy $\cos\alpha=-\dfrac45$, $\tan\alpha=-\dfrac34$, $\cot\alpha=-\dfrac43$.
:::

Khi đề cho tang, dấu của tang cho biết luôn góc nhọn hay tù.

:::example Biết tang
Cho $\tan\alpha=-2$. Tính $\cos\alpha$, $\sin\alpha$, $\cot\alpha$.

**Lời giải.** Vì $\tan\alpha<0$ nên $\alpha$ là góc tù, do đó $\cos\alpha<0$. Dùng $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$:

$$\frac{1}{\cos^2\alpha}=1+4=5\Rightarrow \cos^2\alpha=\frac15\Rightarrow \cos\alpha=-\frac{1}{\sqrt5}=-\frac{\sqrt5}{5}.$$

Sin bằng tang nhân côsin:

$$\sin\alpha=\tan\alpha\cdot\cos\alpha=(-2)\left(-\frac{\sqrt5}{5}\right)=\frac{2\sqrt5}{5},\qquad \cot\alpha=-\frac12.$$

Vậy $\cos\alpha=-\dfrac{\sqrt5}{5}$, $\sin\alpha=\dfrac{2\sqrt5}{5}$, $\cot\alpha=-\dfrac12$.

**Kiểm tra.** $\sin^2\alpha+\cos^2\alpha=\dfrac45+\dfrac15=1$, và $\sin\alpha>0$ đúng như mọi góc trong $[0^\circ; 180^\circ]$.
:::

:::warning Những lỗi thường gặp
- **Sai:** $\cos120^\circ=\dfrac12$. **Vì sao sai:** $120^\circ$ là góc tù, điểm $M$ nằm bên trái trục tung nên hoành độ âm. **Đúng:** $\cos120^\circ=-\cos60^\circ=-\dfrac12$.
- **Sai:** từ $\cos^2\alpha=\dfrac{16}{25}$ viết ngay $\cos\alpha=\dfrac45$. **Vì sao sai:** $\sqrt{\cos^2\alpha}=|\cos\alpha|$, còn hai khả năng về dấu. **Đúng:** xét góc nhọn hay tù rồi mới chọn dấu.
- **Sai:** viết $\tan90^\circ=\infty$ hoặc $\cot0^\circ=0$. **Vì sao sai:** mẫu số $x_0$ (hoặc $y_0$) bằng $0$, phép chia không thực hiện được. **Đúng:** các giá trị này không xác định.
:::

## Dùng máy tính cầm tay

Phím bấm khác nhau đôi chút giữa các loại máy, nhưng ý tưởng thì giống nhau.

- Trước hết đặt máy ở chế độ **độ** (màn hình hiện D hoặc DEG). Ở chế độ radian, kết quả sẽ sai.
- Với $\sin$, $\cos$, $\tan$: bấm phím hàm, nhập góc rồi bấm dấu bằng.
- Máy không có phím $\cot$: dùng $\cot\alpha=\dfrac{1}{\tan\alpha}$.
- Để tìm góc khi biết giá trị, bấm SHIFT (hoặc 2nd) rồi phím hàm ($\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$).

Ví dụ cuối cho thấy một cái bẫy: biết sin thì có thể có **hai** góc.

:::example Làm việc với máy tính
a) Tìm $\sin37^\circ$ (làm tròn đến $4$ chữ số thập phân).

b) Tìm $\alpha\in[0^\circ; 180^\circ]$ sao cho $\cos\alpha=-0{,}3$.

c) Tìm mọi $\alpha\in[0^\circ; 180^\circ]$ sao cho $\sin\alpha=0{,}8$.

**Lời giải.** a) Bấm $\sin 37$:
$$\sin37^\circ\approx0{,}6018.$$

b) Bấm $\cos^{-1}(-0{,}3)$, được $\alpha\approx107{,}46^\circ$. Mỗi giá trị côsin ứng với đúng một điểm $M$ trên nửa đường tròn, nên đây là góc duy nhất.

c) Bấm $\sin^{-1}(0{,}8)$, được góc nhọn $53{,}13^\circ$. Góc bù có cùng sin, nên còn một góc nữa:
$$180^\circ-53{,}13^\circ=126{,}87^\circ.$$

Vậy $\alpha\approx53{,}13^\circ$ hoặc $\alpha\approx126{,}87^\circ$.
:::

## Thuật ngữ

:::terms
- nửa đường tròn đơn vị | unit semicircle
- sin (sin của một góc) | sine
- côsin | cosine
- tang | tangent
- côtang | cotangent
- hai góc bù nhau | supplementary angles
- góc tù | obtuse angle
- góc nhọn | acute angle
- đẳng thức (hằng đẳng thức) | identity
- không xác định | undefined
:::

## Tóm tắt

- $M(x_0; y_0)$ trên nửa đường tròn đơn vị, $\widehat{xOM}=\alpha$: $\sin\alpha=y_0$, $\cos\alpha=x_0$, $\tan\alpha=\dfrac{y_0}{x_0}$, $\cot\alpha=\dfrac{x_0}{y_0}$.
- $\tan90^\circ$, $\cot0^\circ$, $\cot180^\circ$ không xác định. Luôn có $\sin\alpha\geq0$; góc tù có $\cos$, $\tan$, $\cot$ âm.
- Góc bù: $\sin(180^\circ-\alpha)=\sin\alpha$; $\cos$, $\tan$, $\cot$ đổi dấu.
- $\sin^2\alpha+\cos^2\alpha=1$, $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$, $1+\cot^2\alpha=\dfrac1{\sin^2\alpha}$. Khai căn xong phải chọn dấu.
- Máy tính: chế độ độ; $\sin^{-1}$ chỉ cho góc nhọn, nhớ thêm góc bù.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Dùng quy tắc góc bù nhau để tìm $\sin150^\circ$, $\cos150^\circ$, $\tan150^\circ$, $\cot150^\circ$.

::hint
**Kiến thức:** $\sin(180^\circ-\alpha)=\sin\alpha$; côsin, tang, côtang đổi dấu.

**Gợi ý các bước:**
1. Viết $150^\circ=180^\circ-30^\circ$.
2. Lấy các giá trị của $30^\circ$ trong bảng và đổi dấu đúng chỗ.

::solution
$$\sin150^\circ=\frac12,\quad \cos150^\circ=-\frac{\sqrt3}{2},\quad \tan150^\circ=-\frac{\sqrt3}{3},\quad \cot150^\circ=-\sqrt3.$$

**Đáp số.** $\dfrac12$; $-\dfrac{\sqrt3}{2}$; $-\dfrac{\sqrt3}{3}$; $-\sqrt3$.
:::

:::exercise
Giá trị nào trong các giá trị sau không xác định: $\tan90^\circ$, $\cot0^\circ$, $\tan180^\circ$, $\cot180^\circ$, $\cot90^\circ$? Tính các giá trị xác định.

::hint
**Kiến thức:** $\tan\alpha=\dfrac{y_0}{x_0}$ cần $x_0\neq0$; $\cot\alpha=\dfrac{x_0}{y_0}$ cần $y_0\neq0$.

**Gợi ý các bước:**
1. Viết toạ độ $M$ ở $0^\circ$, $90^\circ$, $180^\circ$.
2. Xem mẫu số có bằng $0$ không.

::solution
$M(1; 0)$ ở $0^\circ$, $M(0; 1)$ ở $90^\circ$, $M(-1; 0)$ ở $180^\circ$. Các mẫu số bằng $0$ ở $\tan90^\circ$, $\cot0^\circ$, $\cot180^\circ$. Còn
$$\tan180^\circ=\frac{0}{-1}=0,\qquad \cot90^\circ=\frac01=0.$$

**Đáp số.** Không xác định: $\tan90^\circ$, $\cot0^\circ$, $\cot180^\circ$; $\tan180^\circ=0$, $\cot90^\circ=0$.
:::

:::exercise
Cho $\cos\alpha=-\dfrac35$ với $0^\circ\leq\alpha\leq180^\circ$. Tính $\sin\alpha$, $\tan\alpha$, $\cot\alpha$.

::hint
**Kiến thức:** $\sin^2\alpha+\cos^2\alpha=1$ và $\sin\alpha\geq0$ với mọi $\alpha\in[0^\circ; 180^\circ]$.

**Gợi ý các bước:**
1. Tính $\sin^2\alpha$.
2. Chọn dấu của $\sin\alpha$.
3. Tính $\tan$ và $\cot$.

::solution
$$\sin^2\alpha=1-\frac{9}{25}=\frac{16}{25},\ \sin\alpha\geq0\Rightarrow \sin\alpha=\frac45;\qquad \tan\alpha=\frac{4/5}{-3/5}=-\frac43,\quad \cot\alpha=-\frac34.$$

**Đáp số.** $\sin\alpha=\dfrac45$, $\tan\alpha=-\dfrac43$, $\cot\alpha=-\dfrac34$.
:::

:::exercise
Tính $B=\cos20^\circ+\cos160^\circ+\sin35^\circ-\sin145^\circ$.

::hint
**Kiến thức:** quy tắc hai góc bù nhau.

**Gợi ý các bước:**
1. Nhận ra $160^\circ=180^\circ-20^\circ$ và $145^\circ=180^\circ-35^\circ$.
2. Đưa mọi số hạng về góc $20^\circ$ và $35^\circ$.

::solution
$$\cos160^\circ=-\cos20^\circ,\quad \sin145^\circ=\sin35^\circ\Rightarrow B=\cos20^\circ-\cos20^\circ+\sin35^\circ-\sin35^\circ=0.$$

**Đáp số.** $B=0$.
:::

:::exercise
Cho góc $\alpha$ với $90^\circ<\alpha<180^\circ$ và $\sin\alpha=\dfrac{12}{13}$. Mỗi khẳng định sau đúng hay sai?

a) $\cos\alpha=\dfrac{5}{13}$.

b) $\tan\alpha=-\dfrac{12}{5}$.

c) $\cos(180^\circ-\alpha)=-\dfrac{5}{13}$.

d) $\sin\alpha\cos\alpha=-\dfrac{60}{169}$.

::hint
**Kiến thức:** $\sin^2\alpha+\cos^2\alpha=1$; góc tù có côsin âm; $\cos(180^\circ-\alpha)=-\cos\alpha$.

**Gợi ý các bước:**
1. Tính $\cos^2\alpha$ rồi chọn dấu.
2. Tính $\tan\alpha$ và $\sin\alpha\cos\alpha$.
3. Dùng quy tắc góc bù cho c).

::solution
$\cos^2\alpha=1-\dfrac{144}{169}=\dfrac{25}{169}$, góc tù nên $\cos\alpha=-\dfrac{5}{13}$.

a) **Sai:** $\cos\alpha=-\dfrac5{13}$, không phải $\dfrac5{13}$.

b) **Đúng:** $\tan\alpha=\dfrac{12/13}{-5/13}=-\dfrac{12}{5}$.

c) **Sai:** $\cos(180^\circ-\alpha)=-\cos\alpha=\dfrac{5}{13}$.

d) **Đúng:** $\dfrac{12}{13}\cdot\left(-\dfrac{5}{13}\right)=-\dfrac{60}{169}$.

**Đáp số.** a) Sai; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Cánh tay của một cần cẩu dài $20$ m, gắn vào thân cần cẩu tại điểm $O$ cao $3$ m so với mặt đất. Cánh tay tạo với tia nằm ngang $Ox$ một góc $115^\circ$. Đầu cánh tay cao bao nhiêu mét so với mặt đất (làm tròn đến hàng phần mười)?

::hint
**Kiến thức:** nếu $OM=R$ và $\widehat{xOM}=\alpha$ thì $M$ cao hơn $O$ một đoạn $R\sin\alpha$.

**Gợi ý các bước:**
1. Phóng to nửa đường tròn đơn vị lên $20$ lần: tung độ của đầu cánh tay so với $O$ là $20\sin115^\circ$.
2. Cộng thêm độ cao $3$ m của $O$.
3. Dùng máy tính ở chế độ độ.

::solution
$$h=3+20\sin115^\circ\approx3+20\cdot0{,}9063\approx21{,}1\ \text{(m)}.$$

**Đáp số.** $21{,}1$.
:::

:::exercise
Trong tam giác $ABC$, chứng minh $\sin(B+C)=\sin A$ và $\cos(B+C)=-\cos A$. Áp dụng: tính $\sin(B+C)$ và $\cos(B+C)$ khi $A=120^\circ$.

::hint
**Kiến thức:** tổng ba góc của tam giác bằng $180^\circ$; quy tắc góc bù.

**Gợi ý các bước:**
1. Viết $B+C=180^\circ-A$.
2. Áp dụng quy tắc góc bù.
3. Thay $A=120^\circ$ và dùng bảng.

::solution
$B+C=180^\circ-A$, nên $\sin(B+C)=\sin A$ và $\cos(B+C)=-\cos A$. Với $A=120^\circ$:
$$\sin(B+C)=\sin120^\circ=\frac{\sqrt3}{2},\qquad \cos(B+C)=-\cos120^\circ=\frac12.$$

**Đáp số.** $\sin(B+C)=\dfrac{\sqrt3}{2}$, $\cos(B+C)=\dfrac12$ (đúng với $B+C=60^\circ$).
:::

:::exercise
Dùng máy tính, tìm mọi góc $\alpha\in[0^\circ; 180^\circ]$ (làm tròn đến hàng phần trăm của độ) sao cho: a) $\sin\alpha=0{,}6$; b) $\cos\alpha=-0{,}6$.

::hint
**Kiến thức:** $\sin^{-1}$ chỉ cho góc nhọn, góc bù có cùng sin; mỗi giá trị côsin chỉ ứng với một góc.

**Gợi ý các bước:**
1. Bấm $\sin^{-1}(0{,}6)$ rồi lấy thêm góc bù.
2. Bấm $\cos^{-1}(-0{,}6)$.

::solution
a) $\sin^{-1}(0{,}6)\approx36{,}87^\circ$, và $180^\circ-36{,}87^\circ=143{,}13^\circ$.

b) $\cos^{-1}(-0{,}6)\approx126{,}87^\circ$ (một góc duy nhất).

**Đáp số.** a) $\alpha\approx36{,}87^\circ$ hoặc $\alpha\approx143{,}13^\circ$; b) $\alpha\approx126{,}87^\circ$.
:::

:::exercise Thử thách
Cho góc $\alpha\in[0^\circ; 180^\circ]$ thoả mãn $\sin\alpha+\cos\alpha=\dfrac12$. Tính $\sin\alpha$ và $\cos\alpha$.

::hint
**Kiến thức:** $(\sin\alpha\pm\cos\alpha)^2=1\pm2\sin\alpha\cos\alpha$.

**Gợi ý các bước:**
1. Bình phương để tìm $\sin\alpha\cos\alpha$.
2. Xét dấu để biết $\sin\alpha-\cos\alpha$ dương.
3. Tìm $\sin\alpha-\cos\alpha$, rồi giải hệ tổng và hiệu.

::solution
Bình phương hai vế:
$$1+2\sin\alpha\cos\alpha=\frac14\Rightarrow \sin\alpha\cos\alpha=-\frac38.$$
Tích âm và $\sin\alpha\geq0$ nên $\sin\alpha>0>\cos\alpha$, do đó $\sin\alpha-\cos\alpha>0$:
$$(\sin\alpha-\cos\alpha)^2=1+\frac34=\frac74\Rightarrow \sin\alpha-\cos\alpha=\frac{\sqrt7}{2}.$$
Cộng và trừ với $\sin\alpha+\cos\alpha=\dfrac12$.

**Đáp số.** $\sin\alpha=\dfrac{1+\sqrt7}{4}\approx0{,}911$, $\cos\alpha=\dfrac{1-\sqrt7}{4}\approx-0{,}411$.
:::

:::exercise
(Ôn lại [Mệnh đề](lesson:statements).) Xét hai mệnh đề

$P$: "$\forall\alpha\in[0^\circ; 180^\circ],\ \sin\alpha\geq0$";

$Q$: "$\exists\alpha\in[0^\circ; 180^\circ]$ sao cho $\tan\alpha=0$ và $\cot\alpha=0$".

Mỗi mệnh đề đúng hay sai? Phát biểu mệnh đề phủ định của $P$.

::hint
**Kiến thức:** $\sin\alpha$ là tung độ của một điểm trên nửa đường tròn phía trên; phủ định của "$\forall\alpha, R(\alpha)$" là "$\exists\alpha, \overline{R(\alpha)}$".

**Gợi ý các bước:**
1. Với $P$: nhớ lại $M$ nằm ở đâu.
2. Với $Q$: tìm các góc có $\tan\alpha=0$, rồi xem $\cot$ của chúng.

::solution
$P$ đúng vì $M$ nằm trên nửa đường tròn phía trên trục hoành nên $y_0\geq0$.

$\tan\alpha=0$ chỉ khi $y_0=0$, tức $\alpha=0^\circ$ hoặc $180^\circ$; khi đó $\cot\alpha$ không xác định. Vậy không có góc nào thoả mãn cả hai, $Q$ sai.

**Đáp số.** $P$ đúng, $Q$ sai. $\overline{P}$: "$\exists\alpha\in[0^\circ; 180^\circ],\ \sin\alpha<0$".
:::

## Kiểm tra mini

:::quiz
::mc
Giá trị của $\cos150^\circ$ là
A. $\dfrac{\sqrt3}{2}$.
B. $-\dfrac{\sqrt3}{2}$.
C. $\dfrac12$.
D. $-\dfrac12$.
::key B
$\cos150^\circ=\cos(180^\circ-30^\circ)=-\cos30^\circ=-\dfrac{\sqrt3}{2}$. Phương án A quên đổi dấu; góc tù luôn có côsin âm.

::mc
Giá trị nào sau đây **không xác định**?
A. $\tan0^\circ$.
B. $\cot90^\circ$.
C. $\tan90^\circ$.
D. $\cos180^\circ$.
::key C
Tại $90^\circ$, điểm $M(0; 1)$ có hoành độ $x_0=0$ nên $\tan90^\circ=\dfrac{y_0}{x_0}$ không xác định. Các giá trị còn lại là $0$, $0$, $-1$.

::mc
Cho $\sin\alpha=\dfrac45$ với $90^\circ<\alpha<180^\circ$. Giá trị của $\cos\alpha$ là
A. $\dfrac35$.
B. $-\dfrac35$.
C. $\dfrac15$.
D. $-\dfrac15$.
::key B
$\cos^2\alpha=1-\dfrac{16}{25}=\dfrac{9}{25}$, góc tù nên lấy giá trị âm: $\cos\alpha=-\dfrac35$. Phương án C lấy $1-\sin\alpha$ thay vì $1-\sin^2\alpha$.

::mc
Giá trị của biểu thức $\sin120^\circ\cos30^\circ+\cos120^\circ\sin30^\circ$ là
A. $\dfrac12$.
B. $1$.
C. $0$.
D. $-\dfrac12$.
::key A
$\dfrac{\sqrt3}{2}\cdot\dfrac{\sqrt3}{2}+\left(-\dfrac12\right)\cdot\dfrac12=\dfrac34-\dfrac14=\dfrac12$. Lấy nhầm $\cos120^\circ=\dfrac12$ thì ra $1$ (phương án B).

::tf
Cho góc $\alpha$ với $90^\circ<\alpha<180^\circ$ và $\cos\alpha=-\dfrac{\sqrt5}{3}$.
a) $\sin\alpha=\dfrac23$.
b) $\sin(180^\circ-\alpha)=-\dfrac23$.
c) $\tan\alpha=-\dfrac{2\sqrt5}{5}$.
d) $\cos(180^\circ-\alpha)=\dfrac{\sqrt5}{3}$.
::key Đ S Đ Đ
a) Đúng: $\sin^2\alpha=1-\dfrac59=\dfrac49$ và $\sin\alpha\ge 0$. b) Sai: $\sin(180^\circ-\alpha)=\sin\alpha=\dfrac23$. c) Đúng: $\tan\alpha=\dfrac{2/3}{-\sqrt5/3}=-\dfrac{2}{\sqrt5}=-\dfrac{2\sqrt5}{5}$. d) Đúng: $\cos(180^\circ-\alpha)=-\cos\alpha$.

::sa
Tính $P=\sin^2 25^\circ+\sin^2 65^\circ+\cos100^\circ+\cos80^\circ$.
::key 1
$\sin65^\circ=\cos25^\circ$ (hai góc phụ nhau) nên $\sin^2 25^\circ+\sin^2 65^\circ=1$. Còn $\cos100^\circ=-\cos80^\circ$ (hai góc bù nhau) nên hai số hạng cuối có tổng $0$. Vậy $P=1$.

::sa
Trên mặt phẳng toạ độ, điểm $M$ nằm trên nửa đường tròn tâm $O$ bán kính $4$ (phía trên trục hoành) với $\widehat{xOM}=140^\circ$. Tìm hoành độ của $M$ (làm tròn đến hàng phần mười).
::key -3,1
Phóng to nửa đường tròn đơn vị lên $4$ lần: hoành độ của $M$ là $4\cos140^\circ\approx4\cdot(-0{,}766)\approx-3{,}06$, làm tròn được $-3{,}1$. Hoành độ âm vì góc tù đưa $M$ sang bên trái trục tung.
:::
