---
title: Giá trị lượng giác của một góc từ 0° đến 180°
description: Định nghĩa sin, côsin, tang, côtang của góc từ 0° đến 180° trên nửa đường tròn đơn vị; góc bù nhau, bảng giá trị đặc biệt, hệ thức cơ bản, máy tính.
minutes: 16
---

:::goals
- Định nghĩa được $\sin\alpha$, $\cos\alpha$, $\tan\alpha$, $\cot\alpha$ với $0^\circ\leq\alpha\leq180^\circ$ nhờ một điểm trên nửa đường tròn đơn vị.
- Dùng được quan hệ giữa hai góc bù nhau và bảng giá trị lượng giác của các góc đặc biệt.
- Dùng $\sin^2\alpha+\cos^2\alpha=1$ và các hệ thức liên quan để tính các giá trị còn lại khi biết một giá trị, chọn đúng dấu.
- Tính giá trị lượng giác và tìm góc bằng máy tính cầm tay.
:::

Trong tam giác vuông, sin và côsin chỉ có nghĩa với góc nhọn. Nhưng mái nhà có thể dốc $120^\circ$, cánh cửa có thể mở rộng $150^\circ$, và chiếc thước có thể xoay một góc bất kì cho đến khi thẳng hàng. Muốn đo những thứ đó, ta cần $\sin$, $\cos$, $\tan$, $\cot$ của cả **góc tù**. Mẹo là đưa góc vào mặt phẳng toạ độ.

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

Khi $\alpha$ nhọn, tam giác $OHM$ vuông tại $H$ với cạnh huyền $OM=1$. Khi đó $\cos\alpha=\dfrac{OH}{OM}=x_0$ và $\sin\alpha=\dfrac{HM}{OM}=y_0$. Vậy toạ độ của $M$ chính là côsin và sin. Ta lấy điều này làm định nghĩa cho **mọi** góc $\alpha$ thuộc $[0^\circ; 180^\circ]$.

:::definition Giá trị lượng giác của góc từ 0° đến 180°
Cho $M(x_0; y_0)$ là điểm của nửa đường tròn đơn vị sao cho tia $OM$ tạo với tia $Ox$ góc $\alpha$. Khi đó

$$\sin\alpha=y_0,\qquad \cos\alpha=x_0,$$

$$\tan\alpha=\frac{y_0}{x_0}\ (x_0\neq0),\qquad \cot\alpha=\frac{x_0}{y_0}\ (y_0\neq0).$$
:::

### Khi nào tan và cot không xác định?

- $x_0=0$ đúng khi $M=(0; 1)$, tức là $\alpha=90^\circ$. Vậy $\tan90^\circ$ không xác định.
- $y_0=0$ đúng khi $M=(\pm1; 0)$, tức là $\alpha=0^\circ$ hoặc $\alpha=180^\circ$. Vậy $\cot0^\circ$ và $\cot180^\circ$ không xác định.

### Dấu của các giá trị lượng giác

Vì $M$ nằm trên nửa đường tròn phía trên nên $\sin\alpha\geq0$ với mọi $\alpha$. Dấu của $\cos\alpha=x_0$ phụ thuộc $M$ nằm bên nào của trục tung:

| góc | $\sin\alpha$ | $\cos\alpha$ | $\tan\alpha$ | $\cot\alpha$ |
|---|---|---|---|---|
| nhọn ($0^\circ<\alpha<90^\circ$) | $+$ | $+$ | $+$ | $+$ |
| tù ($90^\circ<\alpha<180^\circ$) | $+$ | $-$ | $-$ | $-$ |

## Hai góc bù nhau

Lấy $\alpha=60^\circ$ và $180^\circ-\alpha=120^\circ$. Hai điểm $M$ và $M'$ tương ứng đối xứng với nhau qua trục tung.

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

Hai điểm đối xứng có cùng tung độ và hoành độ đối nhau. Từ đó có quy tắc cho mọi $\alpha$.

:::theorem Hai góc bù nhau
Với $0^\circ\leq\alpha\leq180^\circ$:

$$\sin(180^\circ-\alpha)=\sin\alpha,\qquad \cos(180^\circ-\alpha)=-\cos\alpha,$$

$$\tan(180^\circ-\alpha)=-\tan\alpha,\qquad \cot(180^\circ-\alpha)=-\cot\alpha$$

(khi các giá trị đó xác định).
:::

Với góc nhọn, em còn biết quy tắc hai góc phụ nhau từ tam giác vuông: $\sin(90^\circ-\alpha)=\cos\alpha$ và $\cos(90^\circ-\alpha)=\sin\alpha$.

## Bảng giá trị lượng giác của các góc đặc biệt

Đặt $M$ ở các góc $30^\circ$, $45^\circ$, $60^\circ$ (và các điểm đối xứng $150^\circ$, $135^\circ$, $120^\circ$) ta được bảng dưới đây. Em chỉ cần nhớ nửa đầu; nửa sau suy ra từ quy tắc góc bù nhau.

:::graph Các điểm của nửa đường tròn ở những góc đặc biệt
alt: Nửa đường tròn đơn vị với các điểm được đánh dấu ở các góc 30, 45, 60, 120, 135 và 150 độ.
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

("không xác định" nghĩa là giá trị đó không tồn tại.)

:::example Các giá trị tại 135°
Tìm $\sin135^\circ$, $\cos135^\circ$, $\tan135^\circ$, $\cot135^\circ$.

**Lời giải.**
Bước 1. $135^\circ=180^\circ-45^\circ$, nên dùng quy tắc góc bù nhau với $\alpha=45^\circ$.
Bước 2. $\sin135^\circ=\sin45^\circ=\dfrac{\sqrt2}{2}$.
Bước 3. $\cos135^\circ=-\cos45^\circ=-\dfrac{\sqrt2}{2}$.
Bước 4. $\tan135^\circ=-\tan45^\circ=-1$ và $\cot135^\circ=-\cot45^\circ=-1$.
:::

## Các hệ thức cơ bản

Điểm $M(x_0; y_0)$ nằm trên đường tròn $x^2+y^2=1$ nên $\cos^2\alpha+\sin^2\alpha=1$. Chia hai vế cho $\cos^2\alpha$ hoặc $\sin^2\alpha$ ta được thêm hai hệ thức nữa.

:::theorem Các hệ thức cơ bản
$$\sin^2\alpha+\cos^2\alpha=1$$

$$1+\tan^2\alpha=\frac{1}{\cos^2\alpha}\quad(\alpha\neq90^\circ),\qquad 1+\cot^2\alpha=\frac{1}{\sin^2\alpha}\quad(\alpha\neq0^\circ,180^\circ)$$

$$\tan\alpha=\frac{\sin\alpha}{\cos\alpha},\qquad \cot\alpha=\frac{\cos\alpha}{\sin\alpha},\qquad \tan\alpha\cdot\cot\alpha=1$$

(hệ thức cuối khi cả $\tan\alpha$ và $\cot\alpha$ đều xác định, tức là $\alpha\neq0^\circ,90^\circ,180^\circ$).
:::

### Tính các giá trị còn lại khi biết một giá trị

1. Dùng một hệ thức để tìm bình phương của giá trị cần tính.
2. Khai căn và chọn dấu theo bảng dấu (đây là chỗ góc nhọn hay góc tù có vai trò quyết định).
3. Dùng $\tan=\sin/\cos$ và $\cot=\cos/\sin$.

:::example Biết sin, góc tù
Cho $\sin\alpha=\dfrac35$ và $90^\circ<\alpha<180^\circ$. Tính $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.

**Lời giải.**
Bước 1. $\cos^2\alpha=1-\sin^2\alpha=1-\dfrac{9}{25}=\dfrac{16}{25}$.
Bước 2. $\alpha$ là góc tù nên $\cos\alpha<0$. Vậy $\cos\alpha=-\dfrac45$.
Bước 3. $\tan\alpha=\dfrac{3/5}{-4/5}=-\dfrac34$.
Bước 4. $\cot\alpha=\dfrac{1}{\tan\alpha}=-\dfrac43$.
:::

:::example Biết tang
Cho $\tan\alpha=-2$. Tính $\sin\alpha$, $\cos\alpha$, $\cot\alpha$.

**Lời giải.**
Bước 1. $\tan\alpha<0$ nên $\alpha$ là góc tù: $\cos\alpha<0$ và $\sin\alpha>0$.
Bước 2. $\dfrac{1}{\cos^2\alpha}=1+\tan^2\alpha=1+4=5$, nên $\cos^2\alpha=\dfrac15$.
Bước 3. $\cos\alpha<0$ nên $\cos\alpha=-\dfrac{1}{\sqrt5}=-\dfrac{\sqrt5}{5}$.
Bước 4. $\sin\alpha=\tan\alpha\cdot\cos\alpha=(-2)\left(-\dfrac{\sqrt5}{5}\right)=\dfrac{2\sqrt5}{5}$.
Bước 5. $\cot\alpha=\dfrac{1}{\tan\alpha}=-\dfrac12$.

Kiểm tra: $\sin^2\alpha+\cos^2\alpha=\dfrac{4}{5}+\dfrac15=1$.
:::

:::example Rút gọn nhờ góc bù nhau
Tính $A=\sin100^\circ-\sin80^\circ+\cos100^\circ+\cos80^\circ$.

**Lời giải.**
Bước 1. $100^\circ=180^\circ-80^\circ$, nên $\sin100^\circ=\sin80^\circ$.
Bước 2. Cũng vậy, $\cos100^\circ=-\cos80^\circ$.
Bước 3. $A=\sin80^\circ-\sin80^\circ-\cos80^\circ+\cos80^\circ=0$.
:::

:::warning Những lỗi thường gặp
- Quên dấu: $\cos120^\circ=-\dfrac12$, không phải $\dfrac12$. Góc tù có côsin, tang, côtang âm.
- Viết $\sqrt{\cos^2\alpha}=\cos\alpha$. Thực ra $\sqrt{\cos^2\alpha}=|\cos\alpha|$; phải xét góc để chọn dấu.
- Viết $\tan90^\circ=\infty$ như một số, hoặc $\cot0^\circ=0$. Những giá trị này đơn giản là không tồn tại.
:::

## Dùng máy tính cầm tay

Phím bấm khác nhau đôi chút giữa các loại máy, nhưng ý tưởng thì giống nhau.

- Trước hết đặt máy ở chế độ **độ** (màn hình hiện D hoặc DEG). Ở chế độ radian, kết quả sẽ sai.
- Với $\sin$, $\cos$, $\tan$: bấm phím hàm, nhập góc, đóng ngoặc nếu cần rồi bấm dấu bằng.
- Máy không có phím $\cot$: dùng $\cot\alpha=\dfrac{1}{\tan\alpha}$.
- Để tìm góc khi biết giá trị, bấm SHIFT (hoặc 2nd) rồi phím hàm (hiện là $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$).

:::example Làm việc với máy tính
(a) Tìm $\sin37^\circ$ với 4 chữ số thập phân. (b) Tìm $\alpha\in[0^\circ; 180^\circ]$ sao cho $\cos\alpha=-0{,}3$. (c) Tìm mọi $\alpha\in[0^\circ; 180^\circ]$ sao cho $\sin\alpha=0{,}8$.

**Lời giải.**
(a) Bấm $\sin 37$ được $\sin37^\circ\approx0{,}6018$.

(b) Bấm $\cos^{-1}(-0{,}3)$ được $\alpha\approx107{,}46^\circ$. Hàm côsin ngược luôn cho góc trong $[0^\circ; 180^\circ]$ nên đây là đáp án duy nhất.

(c) $\sin^{-1}(0{,}8)\approx53{,}13^\circ$. Nhưng hàm sin ngược chỉ cho góc nhọn. Góc bù có cùng sin nên còn một đáp án nữa là $180^\circ-53{,}13^\circ=126{,}87^\circ$. Vậy $\alpha\approx53{,}13^\circ$ hoặc $\alpha\approx126{,}87^\circ$.
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

- Với $\alpha\in[0^\circ; 180^\circ]$ và $M(x_0; y_0)$ trên nửa đường tròn đơn vị: $\sin\alpha=y_0$, $\cos\alpha=x_0$, $\tan\alpha=\dfrac{y_0}{x_0}$, $\cot\alpha=\dfrac{x_0}{y_0}$.
- $\tan90^\circ$, $\cot0^\circ$, $\cot180^\circ$ không xác định. $\sin\alpha\geq0$ luôn đúng; với góc tù thì $\cos$, $\tan$, $\cot$ đều âm.
- Hai góc bù nhau: cùng $\sin$, còn $\cos$, $\tan$, $\cot$ đối nhau.
- $\sin^2\alpha+\cos^2\alpha=1$, $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$, $1+\cot^2\alpha=\dfrac1{\sin^2\alpha}$.
- Trên máy tính phải đặt chế độ độ; $\sin^{-1}$ chỉ cho góc nhọn nên nhớ kiểm tra thêm góc bù.

## Luyện tập

:::practice
1. Dùng quy tắc góc bù nhau để tìm $\sin150^\circ$, $\cos150^\circ$, $\tan150^\circ$, $\cot150^\circ$.
2. Viết toạ độ điểm $M$ của nửa đường tròn đơn vị ứng với $\alpha=135^\circ$ và với $\alpha=90^\circ$.
3. Giá trị nào trong các giá trị sau không tồn tại: $\tan90^\circ$, $\cot0^\circ$, $\tan180^\circ$, $\cot180^\circ$, $\cot90^\circ$? Hãy cho giá trị của những giá trị tồn tại.
4. Cho $\sin\alpha=\dfrac{5}{13}$ và $\alpha$ là góc nhọn. Tính $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.
5. Cho $\cos\alpha=-\dfrac35$ với $0^\circ\leq\alpha\leq180^\circ$. Tính $\sin\alpha$, $\tan\alpha$, $\cot\alpha$.
6. Tính $\cos20^\circ+\cos160^\circ+\sin35^\circ-\sin145^\circ$.
7. Cho $\tan\alpha=\dfrac12$. Tính $\sin\alpha$ và $\cos\alpha$.
8. Dùng máy tính (chế độ độ), tìm với 4 chữ số thập phân: $\sin72^\circ$, $\cos123^\circ$, $\tan148^\circ$.
9. Trong tam giác $ABC$, chứng minh $\sin(B+C)=\sin A$ và $\cos(B+C)=-\cos A$. Từ đó tìm $\sin(B+C)$ và $\cos(B+C)$ theo $\sin 50^\circ$ và $\cos 50^\circ$ khi $A=50^\circ$.
10. (Thử thách) Cho góc $\alpha\in[0^\circ; 180^\circ]$ thoả mãn $\sin\alpha+\cos\alpha=\dfrac12$. Tìm $\sin\alpha$ và $\cos\alpha$.
:::

:::solution Xem lời giải
1. $150^\circ=180^\circ-30^\circ$. Vậy $\sin150^\circ=\sin30^\circ=\dfrac12$, $\cos150^\circ=-\cos30^\circ=-\dfrac{\sqrt3}{2}$, $\tan150^\circ=-\tan30^\circ=-\dfrac{\sqrt3}{3}$, $\cot150^\circ=-\cot30^\circ=-\sqrt3$.
2. Với $\alpha=135^\circ$: $M=(\cos135^\circ; \sin135^\circ)=\left(-\dfrac{\sqrt2}{2}; \dfrac{\sqrt2}{2}\right)$. Với $\alpha=90^\circ$: $M=(0; 1)$.
3. $\tan90^\circ$, $\cot0^\circ$ và $\cot180^\circ$ không tồn tại (mẫu số $x_0$ hoặc $y_0$ bằng $0$). $\tan180^\circ=\dfrac{0}{-1}=0$ và $\cot90^\circ=\dfrac{0}{1}=0$ tồn tại.
4. $\cos^2\alpha=1-\dfrac{25}{169}=\dfrac{144}{169}$ và $\alpha$ nhọn nên $\cos\alpha=\dfrac{12}{13}$. Khi đó $\tan\alpha=\dfrac{5/13}{12/13}=\dfrac{5}{12}$ và $\cot\alpha=\dfrac{12}{5}$.
5. $\sin^2\alpha=1-\dfrac{9}{25}=\dfrac{16}{25}$ và $\sin\alpha\geq0$ nên $\sin\alpha=\dfrac45$. Khi đó $\tan\alpha=\dfrac{4/5}{-3/5}=-\dfrac43$ và $\cot\alpha=-\dfrac34$.
6. $\cos160^\circ=-\cos20^\circ$ và $\sin145^\circ=\sin35^\circ$. Vậy tổng bằng $\cos20^\circ-\cos20^\circ+\sin35^\circ-\sin35^\circ=0$.
7. $\tan\alpha>0$ nên $\alpha$ nhọn và cả hai giá trị đều dương. $\dfrac{1}{\cos^2\alpha}=1+\dfrac14=\dfrac54$, nên $\cos^2\alpha=\dfrac45$ và $\cos\alpha=\dfrac{2}{\sqrt5}=\dfrac{2\sqrt5}{5}$. Khi đó $\sin\alpha=\tan\alpha\cos\alpha=\dfrac12\cdot\dfrac{2\sqrt5}{5}=\dfrac{\sqrt5}{5}$. Kiểm tra: $\dfrac15+\dfrac45=1$.
8. $\sin72^\circ\approx0{,}9511$, $\cos123^\circ\approx-0{,}5446$, $\tan148^\circ\approx-0{,}6249$. (Hai giá trị sau âm vì các góc là góc tù; đó là cách kiểm tra tốt xem máy có đang ở chế độ độ không.)
9. Trong tam giác, $A+B+C=180^\circ$ nên $B+C=180^\circ-A$. Theo quy tắc góc bù nhau, $\sin(B+C)=\sin(180^\circ-A)=\sin A$ và $\cos(B+C)=\cos(180^\circ-A)=-\cos A$. Với $A=50^\circ$: $\sin(B+C)=\sin50^\circ$ và $\cos(B+C)=-\cos50^\circ$ (lúc này $B+C=130^\circ$).
10. Bình phương: $(\sin\alpha+\cos\alpha)^2=\dfrac14$, nên $1+2\sin\alpha\cos\alpha=\dfrac14$ và $\sin\alpha\cos\alpha=-\dfrac38$. Tích âm và $\sin\alpha\geq0$ nên $\sin\alpha>0$ và $\cos\alpha<0$. Khi đó $(\sin\alpha-\cos\alpha)^2=1-2\sin\alpha\cos\alpha=1+\dfrac34=\dfrac74$ và $\sin\alpha-\cos\alpha>0$, nên $\sin\alpha-\cos\alpha=\dfrac{\sqrt7}{2}$. Cộng và trừ với $\sin\alpha+\cos\alpha=\dfrac12$: $\sin\alpha=\dfrac{1+\sqrt7}{4}\approx0{,}911$ và $\cos\alpha=\dfrac{1-\sqrt7}{4}\approx-0{,}411$. Kiểm tra: $\dfrac{(1+\sqrt7)^2+(1-\sqrt7)^2}{16}=\dfrac{16}{16}=1$.
:::
