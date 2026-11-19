---
title: Công thức lượng giác
description: Học công thức cộng, nhân đôi, hạ bậc và biến đổi tích thành tổng, tổng thành tích; dùng chúng để tính giá trị, rút gọn và giải bài toán thực tế.
minutes: 25
---

:::goals
- Viết và áp dụng công thức cộng cho $\sin$, $\cos$, $\tan$ để tính giá trị lượng giác của các góc như $75^\circ$, $15^\circ$, $\dfrac{\pi}{12}$.
- Dùng công thức nhân đôi và công thức hạ bậc để tính giá trị và biến đổi biểu thức.
- Dùng công thức biến đổi tích thành tổng và tổng thành tích để rút gọn biểu thức.
- Giải thích vì sao các công thức đúng và dùng chúng trong các bài toán thực tế: góc nhìn, tầm xa của quả bóng, hiện tượng phách của âm thanh.
:::

Một ứng dụng chỉnh ảnh xoay ảnh quanh gốc toạ độ $O$: lần đầu xoay $30^\circ$, lần sau xoay thêm $45^\circ$. Điểm $I(1; 0)$ qua hai lần xoay sẽ đến đúng vị trí của một lần xoay $75^\circ$, tức là điểm $(\cos75^\circ; \sin75^\circ)$.

Bảng giá trị lượng giác đặc biệt chỉ có $30^\circ$, $45^\circ$, $60^\circ$ và vài góc khác, không có $75^\circ$. Làm thế nào để tính chính xác $\cos75^\circ$ và $\sin75^\circ$ từ những giá trị ta đã biết? Muốn vậy, ta cần biết giá trị lượng giác của một tổng hai góc liên hệ ra sao với giá trị lượng giác của từng góc.

## Công thức cộng

### Khám phá: $\cos(a+b)$ có bằng $\cos a+\cos b$ không?

Ta thử với vài cặp góc quen thuộc:

| $(a; b)$ | $\cos(a+b)$ | $\cos a+\cos b$ | $\cos a\cos b-\sin a\sin b$ |
|---|---|---|---|
| $(30^\circ; 60^\circ)$ | $0$ | $\dfrac{\sqrt3+1}{2}\approx1{,}37$ | $\dfrac{\sqrt3}{4}-\dfrac{\sqrt3}{4}=0$ |
| $(45^\circ; 45^\circ)$ | $0$ | $\sqrt2\approx1{,}41$ | $\dfrac12-\dfrac12=0$ |
| $(60^\circ; 60^\circ)$ | $-\dfrac12$ | $1$ | $\dfrac14-\dfrac34=-\dfrac12$ |

Cột thứ hai và cột thứ ba khác nhau, nên $\cos(a+b)\ne\cos a+\cos b$. Còn cột thứ hai và cột thứ tư khớp nhau ở cả ba hàng. Ta dự đoán $\cos(a+b)=\cos a\cos b-\sin a\sin b$ và sẽ chứng minh dự đoán này.

:::theorem Công thức cộng
Với mọi góc lượng giác $a$, $b$:
$$\begin{aligned}\cos(a-b)&=\cos a\cos b+\sin a\sin b, & \cos(a+b)&=\cos a\cos b-\sin a\sin b,\\ \sin(a-b)&=\sin a\cos b-\cos a\sin b, & \sin(a+b)&=\sin a\cos b+\cos a\sin b.\end{aligned}$$
Nếu các biểu thức đều xác định thì
$$\tan(a+b)=\dfrac{\tan a+\tan b}{1-\tan a\tan b},\qquad \tan(a-b)=\dfrac{\tan a-\tan b}{1+\tan a\tan b}.$$
:::

### Vì sao công thức đúng?

Trên đường tròn đơn vị, lấy $M(\cos a; \sin a)$ và $N(\cos b; \sin b)$. Khi đó $\overrightarrow{OM}=(\cos a; \sin a)$ và $\overrightarrow{ON}=(\cos b; \sin b)$ đều có độ dài $1$. Ta tính tích vô hướng (scalar product, hay dot product) theo hai cách.

:::diagram Hai điểm $M$, $N$ trên đường tròn đơn vị ($a=60^\circ$, $b=30^\circ$)
alt: Đường tròn đơn vị với hai điểm M và N, góc b giữa tia OI và ON, góc a−b giữa ON và OM
point O 0,0 below-left
point I 1,0 below-right
point M 0.5,0.866 above
point N 0.866,0.5 right
circle O 1
axes
segment O M
segment O N
angle I O N "b"
angle N O M "a−b"
:::

Theo toạ độ: $\overrightarrow{OM}\cdot\overrightarrow{ON}=\cos a\cos b+\sin a\sin b$. Theo định nghĩa: $\overrightarrow{OM}\cdot\overrightarrow{ON}=1\cdot1\cdot\cos(a-b)$, vì góc giữa hai vectơ có số đo $a-b$ (hoặc bằng $b-a$, hoặc sai khác một bội của $2\pi$; côsin của chúng bằng nhau). Từ hai kết quả ta có
$$\cos(a-b)=\cos a\cos b+\sin a\sin b.$$

Thay $b$ bởi $-b$ và dùng $\cos(-b)=\cos b$, $\sin(-b)=-\sin b$, ta được $\cos(a+b)=\cos a\cos b-\sin a\sin b$. Để có công thức của $\sin$, ta dùng $\sin x=\cos\left(\dfrac{\pi}{2}-x\right)$:
$$\sin(a+b)=\cos\left(\left(\dfrac{\pi}{2}-a\right)-b\right)=\sin a\cos b+\cos a\sin b.$$
Thay $b$ bởi $-b$ ta có $\sin(a-b)$. Cuối cùng $\tan(a+b)=\dfrac{\sin(a+b)}{\cos(a+b)}$; chia tử và mẫu cho $\cos a\cos b$ (khác $0$) ta được công thức của $\tan$.

:::example Giá trị lượng giác của góc $75^\circ$
Tính $\sin75^\circ$, $\cos75^\circ$. Từ đó cho biết toạ độ của điểm $I(1; 0)$ sau khi xoay $30^\circ$ rồi xoay thêm $45^\circ$ quanh $O$.

**Lời giải.** Ta có $75^\circ=45^\circ+30^\circ$ nên áp dụng công thức cộng với các giá trị đặc biệt:
$$\begin{aligned}\sin75^\circ&=\sin45^\circ\cos30^\circ+\cos45^\circ\sin30^\circ=\dfrac{\sqrt2}{2}\cdot\dfrac{\sqrt3}{2}+\dfrac{\sqrt2}{2}\cdot\dfrac12=\dfrac{\sqrt6+\sqrt2}{4},\\ \cos75^\circ&=\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ=\dfrac{\sqrt6-\sqrt2}{4}.\end{aligned}$$
Hai lần xoay $30^\circ$ và $45^\circ$ cho kết quả như một lần xoay $75^\circ$. Vậy điểm cuối là $\left(\dfrac{\sqrt6-\sqrt2}{4}; \dfrac{\sqrt6+\sqrt2}{4}\right)$.

**Kiểm tra.** Ta có $\left(\sqrt6+\sqrt2\right)^2=8+4\sqrt3$ và $\left(\sqrt6-\sqrt2\right)^2=8-4\sqrt3$, nên $\sin^275^\circ+\cos^275^\circ=\dfrac{16}{16}=1$. Đúng.
:::

Công thức của $\tan$ rất hợp để tính góc nhìn trong đời sống.

:::example Góc nhìn một tấm biển quảng cáo
Một người đứng cách chân một bức tường $10$ m. Mép dưới của tấm biển quảng cáo trên tường cao hơn mắt người đó $2$ m, mép trên cao hơn mắt $6$ m. Tính $\tan$ của góc nhìn tấm biển (góc giữa hai tia nhìn tới hai mép) và số đo của góc đó.

**Hiểu đề.** Gọi $\alpha$ là góc giữa tia nhìn ngang và tia nhìn tới mép trên, $\beta$ là góc giữa tia nhìn ngang và tia nhìn tới mép dưới. Góc nhìn là $\alpha-\beta$.

**Tìm cách giải.** Ta biết $\tan\alpha$ và $\tan\beta$ từ các tam giác vuông, nên dùng công thức $\tan(\alpha-\beta)$ thay vì tính từng góc.

**Giải.** Ta có $\tan\alpha=\dfrac{6}{10}=0{,}6$ và $\tan\beta=\dfrac{2}{10}=0{,}2$. Do đó
$$\tan(\alpha-\beta)=\dfrac{0{,}6-0{,}2}{1+0{,}6\cdot0{,}2}=\dfrac{0{,}4}{1{,}12}=\dfrac{5}{14}\approx0{,}357,$$
suy ra $\alpha-\beta\approx19{,}7^\circ$. Vậy góc nhìn tấm biển xấp xỉ $19{,}7^\circ$.

**Nhìn lại.** Nếu đứng cách $5$ m, ta có $\tan\alpha=1{,}2$, $\tan\beta=0{,}4$ và góc nhìn khoảng $28{,}4^\circ$. Nếu đứng cách $20$ m thì góc chỉ còn khoảng $11{,}0^\circ$. Vậy đứng gần thì thấy rộng hơn, nhưng đứng sát chân tường thì góc nhìn lại nhỏ đi. Vị trí nào cho góc lớn nhất? Với khoảng cách $d=\sqrt{12}\approx3{,}46$ m, ta có $\tan(\alpha-\beta)=\dfrac{2}{d}=\dfrac{1}{\sqrt3}$ và góc nhìn đạt $30^\circ$.
:::

## Công thức nhân đôi và hạ bậc

Khi $b=a$, công thức cộng cho ta giá trị lượng giác của góc gấp đôi.

:::theorem Công thức nhân đôi
$$\sin2a=2\sin a\cos a,\qquad \cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a,$$
$$\tan2a=\dfrac{2\tan a}{1-\tan^2a}\quad(\text{khi các biểu thức xác định}).$$
:::

Dạng thứ hai và thứ ba của $\cos2a$ có từ $\sin^2a+\cos^2a=1$. Giải ngược hai dạng đó theo $\cos^2a$ và $\sin^2a$, ta được công thức hạ bậc:
$$\cos^2a=\dfrac{1+\cos2a}{2},\qquad \sin^2a=\dfrac{1-\cos2a}{2}.$$
Công thức hạ bậc cho phép tính góc "một nửa" của một góc đã biết, ví dụ $\dfrac{\pi}{8}$ từ $\dfrac{\pi}{4}$.

:::example Tầm xa của quả bóng
Giả sử một cầu thủ đá quả bóng từ mặt đất với vận tốc đầu $v=20$ m/s, hợp với mặt đất góc $\alpha$. Bỏ qua sức cản của không khí, tầm xa (khoảng cách từ chỗ đá đến chỗ bóng chạm đất) là $R=\dfrac{v^2\sin2\alpha}{g}$, với $g\approx9{,}8$ m/s$^2$. Tính tầm xa khi $\alpha=30^\circ$ (làm tròn đến hàng phần mười). Với góc nào thì tầm xa lớn nhất?

**Lời giải.** Với $\alpha=30^\circ$, ta có $\sin2\alpha=\sin60^\circ=\dfrac{\sqrt3}{2}$ nên
$$R=\dfrac{20^2\cdot\frac{\sqrt3}{2}}{9{,}8}=\dfrac{200\sqrt3}{9{,}8}\approx35{,}4\ \text{(m)}.$$
Vì $\sin2\alpha\le1$ nên $R\le\dfrac{v^2}{g}$, và dấu bằng xảy ra khi $\sin2\alpha=1$, tức $2\alpha=90^\circ$, $\alpha=45^\circ$. Khi đó $R=\dfrac{400}{9{,}8}\approx40{,}8$ m.

Vậy tầm xa khi $\alpha=30^\circ$ xấp xỉ $35{,}4$ m, và tầm xa lớn nhất xấp xỉ $40{,}8$ m, đạt được khi $\alpha=45^\circ$.

**Nhận xét.** Vì $\sin(180^\circ-2\alpha)=\sin2\alpha$, hai góc $\alpha$ và $90^\circ-\alpha$ cho cùng tầm xa. Chẳng hạn $30^\circ$ và $60^\circ$ đều cho $35{,}4$ m, nhưng cú đá $60^\circ$ bay cao hơn và lâu hơn.
:::

Tiếp theo, ta dùng công thức hạ bậc để tính chính xác một giá trị không có trong bảng.

:::example Tính $\cos\dfrac{\pi}{8}$
Tính giá trị chính xác của $\cos\dfrac{\pi}{8}$.

**Lời giải.** Áp dụng công thức hạ bậc với $a=\dfrac{\pi}{8}$ và $2a=\dfrac{\pi}{4}$, ta có
$$\cos^2\dfrac{\pi}{8}=\dfrac{1+\cos\frac{\pi}{4}}{2}=\dfrac{1+\frac{\sqrt2}{2}}{2}=\dfrac{2+\sqrt2}{4}.$$
Vì $0<\dfrac{\pi}{8}<\dfrac{\pi}{2}$ nên $\cos\dfrac{\pi}{8}>0$. Vậy $\cos\dfrac{\pi}{8}=\dfrac{\sqrt{2+\sqrt2}}{2}\approx0{,}924$.
:::

## Biến đổi tích thành tổng và tổng thành tích

Cộng (hoặc trừ) từng vế các công thức cộng của cùng một hàm ta được những kết quả rất hữu ích. Chẳng hạn cộng $\cos(a-b)$ với $\cos(a+b)$, hai số hạng $\sin a\sin b$ triệt tiêu và còn $2\cos a\cos b$.

:::theorem Công thức biến đổi tích thành tổng
$$\begin{aligned}\cos a\cos b&=\dfrac12\left[\cos(a-b)+\cos(a+b)\right],\\ \sin a\sin b&=\dfrac12\left[\cos(a-b)-\cos(a+b)\right],\\ \sin a\cos b&=\dfrac12\left[\sin(a-b)+\sin(a+b)\right].\end{aligned}$$
:::

Đặt $u=a+b$ và $v=a-b$, tức $a=\dfrac{u+v}{2}$, $b=\dfrac{u-v}{2}$, rồi đọc các công thức trên theo chiều ngược lại:

:::theorem Công thức biến đổi tổng thành tích
$$\begin{aligned}\cos u+\cos v&=2\cos\dfrac{u+v}{2}\cos\dfrac{u-v}{2}, & \cos u-\cos v&=-2\sin\dfrac{u+v}{2}\sin\dfrac{u-v}{2},\\ \sin u+\sin v&=2\sin\dfrac{u+v}{2}\cos\dfrac{u-v}{2}, & \sin u-\sin v&=2\cos\dfrac{u+v}{2}\sin\dfrac{u-v}{2}.\end{aligned}$$
:::

:::example Biến đổi tích thành tổng
a) Viết $\sin3x\cos x$ thành tổng. b) Tính $\sin105^\circ\cos15^\circ$.

**Lời giải.** a) Áp dụng $\sin a\cos b=\dfrac12\left[\sin(a-b)+\sin(a+b)\right]$ với $a=3x$, $b=x$:
$$\sin3x\cos x=\dfrac12\left(\sin2x+\sin4x\right).$$
b) Tương tự với $a=105^\circ$, $b=15^\circ$:
$$\sin105^\circ\cos15^\circ=\dfrac12\left(\sin90^\circ+\sin120^\circ\right)=\dfrac12\left(1+\dfrac{\sqrt3}{2}\right)=\dfrac{2+\sqrt3}{4}.$$
Vậy $\sin105^\circ\cos15^\circ=\dfrac{2+\sqrt3}{4}$.

**Kiểm tra.** Vì $\sin105^\circ=\cos15^\circ$, tích này bằng $\cos^215^\circ=\dfrac{1+\cos30^\circ}{2}=\dfrac{2+\sqrt3}{4}$ theo công thức hạ bậc. Hai cách cho cùng kết quả.
:::

Công thức tổng thành tích giải thích một hiện tượng quen thuộc của âm thanh.

:::example Hiện tượng phách
Giả sử hai âm thoa phát ra âm thuần có tần số $440$ Hz và $444$ Hz cùng lúc. Tại một điểm, độ lệch (li độ) dao động tổng hợp tỉ lệ với $y=\sin(2\pi\cdot440t)+\sin(2\pi\cdot444t)$ ($t$ tính bằng giây). Viết $y$ dưới dạng tích và cho biết âm nghe to nhỏ lặp lại bao nhiêu lần mỗi giây.

**Lời giải.** Áp dụng $\sin u+\sin v=2\sin\dfrac{u+v}{2}\cos\dfrac{u-v}{2}$ với $u=2\pi\cdot440t$, $v=2\pi\cdot444t$. Ta có $\dfrac{u+v}{2}=2\pi\cdot442t$ và $\dfrac{u-v}{2}=-2\pi\cdot2t$. Vì $\cos$ là hàm chẵn nên
$$y=2\cos(4\pi t)\cdot\sin(2\pi\cdot442t).$$
Thừa số $\sin(2\pi\cdot442t)$ dao động $442$ lần mỗi giây, nghe như một âm $442$ Hz. Thừa số $2\cos(4\pi t)$ thay đổi chậm và làm biên độ lúc to lúc nhỏ; $|\cos(4\pi t)|$ có chu kì $\dfrac{\pi}{4\pi}=\dfrac14$ giây.

Vậy âm nghe to nhỏ lặp lại $4$ lần mỗi giây, bằng hiệu hai tần số $444-440$.
:::

**Kết nối.** Các công thức này xây trên giá trị lượng giác của góc lượng giác và tích vô hướng ở lớp 10. Chúng được dùng ngay ở hai bài sau: khi vẽ đồ thị và tìm chu kì của hàm số lượng giác, và khi giải phương trình lượng giác, nơi ta thường phải đưa một tổng về tích hoặc hạ bậc để giải. Về sau, chúng cũng giúp tính đạo hàm của $\sin$ và $\cos$.

:::warning Những sai lầm thường gặp
- **Cho rằng $\cos(a+b)=\cos a+\cos b$.** Sai: $\cos(60^\circ+60^\circ)=\cos60^\circ+\cos60^\circ=1$. Vì sao sai: $\cos120^\circ=-\dfrac12$, mà $\cos60^\circ+\cos60^\circ=1$. Đúng: $\cos(a+b)=\cos a\cos b-\sin a\sin b=\dfrac14-\dfrac34=-\dfrac12$.
- **Nhầm dấu trong công thức của $\cos$.** Sai: $\cos(a+b)=\cos a\cos b+\sin a\sin b$. Vì sao sai: với $a=b=45^\circ$ vế trái bằng $0$, còn vế phải bằng $1$. Đúng: dấu của $\cos$ ngược với dấu trong ngoặc, dấu của $\sin$ cùng với dấu trong ngoặc.
- **Viết $\sin2a=2\sin a$.** Sai: $\sin60^\circ=2\sin30^\circ=1$. Vì sao sai: $\sin60^\circ=\dfrac{\sqrt3}{2}\ne1$. Đúng: $\sin2a=2\sin a\cos a=2\cdot\dfrac12\cdot\dfrac{\sqrt3}{2}=\dfrac{\sqrt3}{2}$.
- **Bỏ sót dấu âm khi biến đổi hiệu hai côsin.** Sai: $\cos u-\cos v=2\sin\dfrac{u+v}{2}\sin\dfrac{u-v}{2}$. Vì sao sai: với $u=0$, $v=\dfrac{\pi}{2}$ vế trái bằng $1$, còn vế phải bằng $2\cdot\dfrac{\sqrt2}{2}\cdot\left(-\dfrac{\sqrt2}{2}\right)=-1$. Đúng: có dấu trừ phía trước: $-2\sin\dfrac{u+v}{2}\sin\dfrac{u-v}{2}$.
:::

## Thuật ngữ

:::terms
- công thức cộng | addition formulas
- công thức nhân đôi | double-angle formulas
- công thức hạ bậc | power-reducing formulas
- công thức biến đổi tích thành tổng | product-to-sum formulas
- công thức biến đổi tổng thành tích | sum-to-product formulas
- giá trị lượng giác | trigonometric value
- đường tròn đơn vị | unit circle
- tích vô hướng | scalar product (dot product)
- tầm xa | range (of a projectile)
- phách | beats
:::

## Tóm tắt

- $\cos(a\mp b)=\cos a\cos b\pm\sin a\sin b$; $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$; $\tan(a\pm b)=\dfrac{\tan a\pm\tan b}{1\mp\tan a\tan b}$.
- $\sin2a=2\sin a\cos a$; $\cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a$; $\tan2a=\dfrac{2\tan a}{1-\tan^2a}$.
- Hạ bậc: $\cos^2a=\dfrac{1+\cos2a}{2}$, $\sin^2a=\dfrac{1-\cos2a}{2}$.
- Tích thành tổng: $\cos a\cos b=\dfrac12[\cos(a-b)+\cos(a+b)]$, $\sin a\sin b=\dfrac12[\cos(a-b)-\cos(a+b)]$, $\sin a\cos b=\dfrac12[\sin(a-b)+\sin(a+b)]$.
- Tổng thành tích: $\cos u+\cos v=2\cos\dfrac{u+v}{2}\cos\dfrac{u-v}{2}$, $\sin u+\sin v=2\sin\dfrac{u+v}{2}\cos\dfrac{u-v}{2}$, và hai công thức hiệu có thêm dấu: $\cos u-\cos v=-2\sin\dfrac{u+v}{2}\sin\dfrac{u-v}{2}$, $\sin u-\sin v=2\cos\dfrac{u+v}{2}\sin\dfrac{u-v}{2}$.
- Chỉ cần nhớ công thức cộng; các công thức còn lại suy ra từ đó.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính $\cos15^\circ$ và $\tan15^\circ$.

::hint
**Kiến thức:** công thức cộng với $15^\circ=45^\circ-30^\circ$.

**Gợi ý các bước:**
1. Viết $\cos15^\circ=\cos(45^\circ-30^\circ)$ và dùng công thức hiệu.
2. Tính $\tan15^\circ=\tan(45^\circ-30^\circ)$ với $\tan45^\circ=1$, $\tan30^\circ=\dfrac{1}{\sqrt3}$.

::solution
Ta có $\cos15^\circ=\cos45^\circ\cos30^\circ+\sin45^\circ\sin30^\circ=\dfrac{\sqrt6+\sqrt2}{4}$.

Ta có $\tan15^\circ=\dfrac{1-\frac{1}{\sqrt3}}{1+\frac{1}{\sqrt3}}=\dfrac{\sqrt3-1}{\sqrt3+1}=\dfrac{(\sqrt3-1)^2}{2}=2-\sqrt3$.

**Đáp số.** $\cos15^\circ=\dfrac{\sqrt6+\sqrt2}{4}$; $\tan15^\circ=2-\sqrt3$.
:::

:::exercise
Cho $\sin a=\dfrac35$ với $\dfrac{\pi}{2}<a<\pi$ và $\cos b=\dfrac{5}{13}$ với $0<b<\dfrac{\pi}{2}$. Tính $\sin(a+b)$ và $\cos(a+b)$.

::hint
**Kiến thức:** $\sin^2x+\cos^2x=1$; dấu của $\cos a$ phụ thuộc góc phần tư của $a$.

**Gợi ý các bước:**
1. Tìm $\cos a$ (âm) và $\sin b$ (dương).
2. Thay vào công thức cộng.

::solution
Vì $a$ thuộc góc phần tư thứ hai nên $\cos a=-\sqrt{1-\frac{9}{25}}=-\dfrac45$. Vì $0<b<\dfrac{\pi}{2}$ nên $\sin b=\sqrt{1-\frac{25}{169}}=\dfrac{12}{13}$. Do đó
$$\sin(a+b)=\dfrac35\cdot\dfrac{5}{13}+\left(-\dfrac45\right)\dfrac{12}{13}=-\dfrac{33}{65},\qquad \cos(a+b)=\left(-\dfrac45\right)\dfrac{5}{13}-\dfrac35\cdot\dfrac{12}{13}=-\dfrac{56}{65}.$$

**Đáp số.** $\sin(a+b)=-\dfrac{33}{65}$; $\cos(a+b)=-\dfrac{56}{65}$.
:::

:::exercise
Cho $\sin\alpha=\dfrac45$ với $\dfrac{\pi}{2}<\alpha<\pi$. Tính $\sin2\alpha$ và $\cos2\alpha$.

::hint
**Kiến thức:** $\sin2\alpha=2\sin\alpha\cos\alpha$; $\cos2\alpha=1-2\sin^2\alpha$.

**Gợi ý các bước:**
1. Tìm $\cos\alpha$ và chú ý dấu.
2. Thay vào công thức nhân đôi.

::solution
Vì $\dfrac{\pi}{2}<\alpha<\pi$ nên $\cos\alpha=-\sqrt{1-\frac{16}{25}}=-\dfrac35$. Do đó $\sin2\alpha=2\cdot\dfrac45\cdot\left(-\dfrac35\right)=-\dfrac{24}{25}$ và $\cos2\alpha=1-2\cdot\dfrac{16}{25}=-\dfrac{7}{25}$.

**Đáp số.** $\sin2\alpha=-\dfrac{24}{25}$; $\cos2\alpha=-\dfrac{7}{25}$.
:::

:::exercise
Tính a) $\sin15^\circ\cos75^\circ$; b) $\cos105^\circ+\cos15^\circ$.

::hint
**Kiến thức:** công thức tích thành tổng cho câu a, công thức tổng thành tích cho câu b.

**Gợi ý các bước:**
1. Câu a: dùng $\sin a\cos b=\dfrac12[\sin(a-b)+\sin(a+b)]$.
2. Câu b: dùng $\cos u+\cos v=2\cos\dfrac{u+v}{2}\cos\dfrac{u-v}{2}$.

::solution
a) $\sin15^\circ\cos75^\circ=\dfrac12\left[\sin(-60^\circ)+\sin90^\circ\right]=\dfrac12\left(1-\dfrac{\sqrt3}{2}\right)=\dfrac{2-\sqrt3}{4}$.

b) $\cos105^\circ+\cos15^\circ=2\cos60^\circ\cos45^\circ=2\cdot\dfrac12\cdot\dfrac{\sqrt2}{2}=\dfrac{\sqrt2}{2}$.

**Đáp số.** a) $\dfrac{2-\sqrt3}{4}$; b) $\dfrac{\sqrt2}{2}$.
:::

:::exercise
Rút gọn biểu thức $A=\dfrac{\sin3x+\sin x}{\cos3x+\cos x}$ (với $x$ làm cho biểu thức xác định).

::hint
**Kiến thức:** biến đổi tổng thành tích ở cả tử và mẫu.

**Gợi ý các bước:**
1. Viết $\sin3x+\sin x$ và $\cos3x+\cos x$ thành tích.
2. Giản ước thừa số chung.

::solution
Ta có $\sin3x+\sin x=2\sin2x\cos x$ và $\cos3x+\cos x=2\cos2x\cos x$. Vì biểu thức xác định nên $\cos x\ne0$, do đó
$$A=\dfrac{2\sin2x\cos x}{2\cos2x\cos x}=\dfrac{\sin2x}{\cos2x}=\tan2x.$$

**Đáp số.** $A=\tan2x$.
:::

:::exercise
Một cầu thủ đá quả bóng với vận tốc đầu $15$ m/s, bóng chạm đất cách chỗ đá $20$ m. Dùng công thức tầm xa $R=\dfrac{v^2\sin2\alpha}{g}$ với $g\approx9{,}8$ m/s$^2$ (bỏ qua sức cản của không khí), tính góc đá $\alpha$ (đơn vị độ, làm tròn đến hàng phần mười). Có mấy góc như vậy với $0^\circ<\alpha<90^\circ$?

::hint
**Kiến thức:** $\sin x=\sin(180^\circ-x)$; từ $\sin2\alpha$ tìm $2\alpha$ trong khoảng $(0^\circ; 180^\circ)$.

**Gợi ý các bước:**
1. Tính $\sin2\alpha=\dfrac{Rg}{v^2}$.
2. Tìm hai giá trị của $2\alpha$ rồi chia đôi.

::solution
Ta có $\sin2\alpha=\dfrac{20\cdot9{,}8}{15^2}=\dfrac{196}{225}\approx0{,}8711$. Vì $0^\circ<2\alpha<180^\circ$ nên $2\alpha\approx60{,}6^\circ$ hoặc $2\alpha\approx180^\circ-60{,}6^\circ=119{,}4^\circ$, suy ra $\alpha\approx30{,}3^\circ$ hoặc $\alpha\approx59{,}7^\circ$.

**Đáp số.** Có hai góc: $\alpha\approx30{,}3^\circ$ và $\alpha\approx59{,}7^\circ$ (hai góc phụ nhau).
:::

:::exercise
Cho $\alpha=\dfrac{\pi}{12}$. Xét tính đúng sai của các mệnh đề sau:

a) $\cos\alpha=\cos\dfrac{\pi}{3}-\cos\dfrac{\pi}{4}$.

b) $\cos\alpha=\dfrac{\sqrt6+\sqrt2}{4}$.

c) $\sin\alpha\cos\alpha=\dfrac14$.

d) $\tan\alpha=2+\sqrt3$.

::hint
**Kiến thức:** $\dfrac{\pi}{12}=\dfrac{\pi}{3}-\dfrac{\pi}{4}$; $\sin2a=2\sin a\cos a$; $\tan15^\circ$ đã tính ở bài đầu.

**Gợi ý các bước:**
1. a), b) Dùng công thức $\cos(a-b)$.
2. c) Viết $\sin\alpha\cos\alpha=\dfrac12\sin2\alpha$.
3. d) So sánh với $\tan15^\circ$.

::solution
a) **Sai**: $\cos\dfrac{\pi}{12}\approx0{,}966$, còn $\cos\dfrac{\pi}{3}-\cos\dfrac{\pi}{4}\approx-0{,}207$; hiệu hai côsin không phải côsin của hiệu hai góc.

b) **Đúng**: $\cos\dfrac{\pi}{12}=\cos\dfrac{\pi}{3}\cos\dfrac{\pi}{4}+\sin\dfrac{\pi}{3}\sin\dfrac{\pi}{4}=\dfrac{\sqrt2}{4}+\dfrac{\sqrt6}{4}$.

c) **Đúng**: $\sin\alpha\cos\alpha=\dfrac12\sin\dfrac{\pi}{6}=\dfrac14$.

d) **Sai**: $\tan\dfrac{\pi}{12}=\tan15^\circ=2-\sqrt3\approx0{,}268$; $2+\sqrt3$ là $\tan75^\circ$.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Một người đứng cách một bức tường $8$ m. Mép dưới của một tấm băng rôn treo trên tường cao hơn mắt người đó $1$ m, mép trên cao hơn mắt $7$ m. Tính góc nhìn tấm băng rôn (đơn vị độ, làm tròn đến hàng phần mười).

::hint
**Kiến thức:** góc nhìn là hiệu của hai góc $\alpha-\beta$; dùng công thức $\tan(\alpha-\beta)$.

**Gợi ý các bước:**
1. Tính $\tan\alpha$ và $\tan\beta$ từ các tam giác vuông.
2. Tính $\tan(\alpha-\beta)$ rồi suy ra góc.

::solution
Ta có $\tan\alpha=\dfrac78$ và $\tan\beta=\dfrac18$. Do đó
$$\tan(\alpha-\beta)=\dfrac{\frac78-\frac18}{1+\frac78\cdot\frac18}=\dfrac{\frac34}{\frac{71}{64}}=\dfrac{48}{71}\approx0{,}676,$$
suy ra $\alpha-\beta\approx34{,}1^\circ$.

**Đáp số.** Khoảng $34{,}1^\circ$.
:::

:::exercise Ôn tập
Cho tam giác $ABC$ có $\widehat{A}=45^\circ$, $\widehat{B}=60^\circ$ và $BC=a$. Tính $\sin C$ và độ dài cạnh $AB$ theo $a$.

::hint
**Kiến thức:** tổng ba góc trong tam giác bằng $180^\circ$; định lí sin $\dfrac{AB}{\sin C}=\dfrac{BC}{\sin A}$.

**Gợi ý các bước:**
1. Tìm $\widehat{C}$ rồi dùng công thức cộng để tính $\sin C$.
2. Áp dụng định lí sin để tính $AB$.

::solution
Ta có $\widehat{C}=180^\circ-45^\circ-60^\circ=75^\circ$ nên $\sin C=\sin75^\circ=\dfrac{\sqrt6+\sqrt2}{4}$ (ví dụ đầu bài). Theo định lí sin:
$$AB=\dfrac{BC\sin C}{\sin A}=\dfrac{a\cdot\frac{\sqrt6+\sqrt2}{4}}{\frac{\sqrt2}{2}}=\dfrac{a(\sqrt6+\sqrt2)}{2\sqrt2}=\dfrac{a(\sqrt3+1)}{2}.$$

**Đáp số.** $\sin C=\dfrac{\sqrt6+\sqrt2}{4}$; $AB=\dfrac{(\sqrt3+1)a}{2}$.
:::

:::exercise Thử thách
Chứng minh $\cos\dfrac{\pi}{7}\cos\dfrac{2\pi}{7}\cos\dfrac{3\pi}{7}=\dfrac18$.

::hint
**Kiến thức:** $\sin2a=2\sin a\cos a$ nên $\cos a=\dfrac{\sin2a}{2\sin a}$; $\cos(\pi-x)=-\cos x$.

**Gợi ý các bước:**
1. Viết $\cos\dfrac{3\pi}{7}=-\cos\dfrac{4\pi}{7}$ để ba góc là $\dfrac{\pi}{7}$, $\dfrac{2\pi}{7}$, $\dfrac{4\pi}{7}$ (gấp đôi liên tiếp).
2. Nhân và chia với $\sin\dfrac{\pi}{7}$, dùng công thức nhân đôi ba lần.

::solution
Gọi $P$ là tích cần tính. Vì $\cos\dfrac{3\pi}{7}=-\cos\dfrac{4\pi}{7}$ nên $P=-\cos\dfrac{\pi}{7}\cos\dfrac{2\pi}{7}\cos\dfrac{4\pi}{7}$. Nhân hai vế với $8\sin\dfrac{\pi}{7}$ và dùng $2\sin x\cos x=\sin2x$ ba lần:
$$8\sin\dfrac{\pi}{7}\,P=-\sin\dfrac{8\pi}{7}=\sin\dfrac{\pi}{7}\quad\left(\text{vì }\sin\dfrac{8\pi}{7}=-\sin\dfrac{\pi}{7}\right).$$
Vì $\sin\dfrac{\pi}{7}\ne0$ nên $P=\dfrac18$.

**Đáp số.** $\cos\dfrac{\pi}{7}\cos\dfrac{2\pi}{7}\cos\dfrac{3\pi}{7}=\dfrac18$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Giá trị của $\sin20^\circ\cos25^\circ+\cos20^\circ\sin25^\circ$ bằng
A. $\dfrac12$.
B. $\dfrac{\sqrt2}{2}$.
C. $\dfrac{\sqrt3}{2}$.
D. $\sin5^\circ$.
::key B
Đây là $\sin(20^\circ+25^\circ)=\sin45^\circ=\dfrac{\sqrt2}{2}$. Phương án D là $\sin(25^\circ-20^\circ)$, dùng nhầm công thức hiệu.

::mc NB
Cho $\cos x=-\dfrac13$. Giá trị của $\cos2x$ bằng
A. $-\dfrac23$.
B. $\dfrac79$.
C. $-\dfrac79$.
D. $\dfrac29$.
::key C
$\cos2x=2\cos^2x-1=\dfrac29-1=-\dfrac79$. Phương án A là $2\cos x$, phương án D quên trừ $1$.

::mc TH
Cho $\tan a=2$ và $\tan b=-3$. Giá trị của $\tan(a-b)$ bằng
A. $1$.
B. $\dfrac57$.
C. $-\dfrac17$.
D. $-1$.
::key D
$\tan(a-b)=\dfrac{2-(-3)}{1+2\cdot(-3)}=\dfrac{5}{-5}=-1$. Phương án B nhầm mẫu thành $1-\tan a\tan b$, phương án C dùng công thức của $\tan(a+b)$.

::mc NB
Với mọi $x$, biểu thức $\sin7x-\sin x$ bằng
A. $2\cos4x\sin3x$.
B. $-2\cos4x\sin3x$.
C. $2\sin4x\cos3x$.
D. $2\sin3x\sin4x$.
::key A
$\sin u-\sin v=2\cos\dfrac{u+v}{2}\sin\dfrac{u-v}{2}=2\cos4x\sin3x$. Phương án C là công thức của $\sin u+\sin v$, phương án B thừa dấu trừ.

::tf NB TH TH TH
Một cầu thủ đá quả bóng với vận tốc đầu $14$ m/s, hợp với mặt đất góc $\alpha=30^\circ$. Bỏ qua sức cản của không khí, tầm xa là $R=\dfrac{v^2\sin2\alpha}{g}$ với $g=9{,}8$ m/s$^2$. Xét tính đúng sai của các mệnh đề sau:
a) $\sin2\alpha=2\sin\alpha=1$.
b) Tầm xa của quả bóng là $10\sqrt3$ m.
c) Nếu đá với góc $60^\circ$ và cùng vận tốc thì tầm xa vẫn là $10\sqrt3$ m.
d) Với cùng vận tốc đầu, tầm xa lớn nhất khi $\alpha=45^\circ$.
::key S Đ Đ Đ
a) Sai: $\sin2\alpha=\sin60^\circ=\dfrac{\sqrt3}{2}$, không phải $2\sin\alpha$. b) Đúng: $R=\dfrac{196\cdot\frac{\sqrt3}{2}}{9{,}8}=10\sqrt3$. c) Đúng: $\sin120^\circ=\sin60^\circ$. d) Đúng: $\sin2\alpha=1$ khi $\alpha=45^\circ$.

::sa TH
Tính giá trị của $2\cos^222{,}5^\circ-1$ (làm tròn kết quả đến hàng phần trăm).
::key 0,71
$2\cos^222{,}5^\circ-1=\cos45^\circ=\dfrac{\sqrt2}{2}\approx0{,}71$.

::sa VDC
Hai âm thoa phát ra âm thuần có tần số $440$ Hz và $448$ Hz cùng lúc. Âm nghe to nhỏ lặp lại bao nhiêu lần mỗi giây?
::key 8
$\sin(2\pi\cdot440t)+\sin(2\pi\cdot448t)=2\cos(8\pi t)\sin(2\pi\cdot444t)$, và $|\cos(8\pi t)|$ có chu kì $\dfrac18$ giây. Vậy $8$ lần mỗi giây, bằng $448-440$.
:::
