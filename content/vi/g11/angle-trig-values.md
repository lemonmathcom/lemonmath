---
title: "Giá trị lượng giác của góc lượng giác"
description: Hiểu góc lượng giác, radian và đường tròn lượng giác; tính sin, cos, tan, cot bằng hệ thức cơ bản, giá trị đặc biệt và các góc liên quan.
minutes: 35
---

:::goals
- Đổi số đo giữa độ và radian, tính độ dài cung tròn và nhận biết số đo của góc lượng giác.
- Biểu diễn góc lượng giác trên đường tròn lượng giác và định nghĩa $\sin\alpha$, $\cos\alpha$, $\tan\alpha$, $\cot\alpha$.
- Xác định dấu của các giá trị lượng giác theo góc phần tư.
- Dùng hệ thức cơ bản, bảng giá trị đặc biệt và các góc liên quan để tính giá trị lượng giác.
:::

Một chiếc đồng hồ treo tường có kim phút dài $10$ cm. Ta đặt gốc toạ độ $O$ tại trục kim, trục $Ox$ nằm ngang hướng sang phải, trục $Oy$ hướng lên trên. Lúc $12$ giờ đúng, đầu kim ở điểm $(0;10)$.

Sau $20$ phút, đầu kim ở đâu? Kim đã quay một góc bao nhiêu, và theo chiều nào? Góc $90^\circ$, $180^\circ$ hay $360^\circ$ chưa đủ để trả lời, vì kim còn quay được nhiều vòng và có thể quay ngược chiều. Bài này xây dựng công cụ cho những tình huống như vậy: **góc lượng giác**, rồi **các giá trị lượng giác** cho ta toạ độ của điểm trên đường tròn.

## Góc lượng giác và số đo

### Khám phá: kim phút quay

Kim phút quay đều một vòng ($360^\circ$) trong $60$ phút, tức là $6^\circ$ mỗi phút, và quay theo chiều kim đồng hồ. Ta thống nhất chiều ngược kim đồng hồ là chiều dương, nên khi kim quay theo chiều kim đồng hồ thì số đo là số âm.

| Thời gian | $15$ phút | $30$ phút | $60$ phút | $90$ phút |
|---|---|---|---|---|
| Số đo góc kim quay | $-90^\circ$ | $-180^\circ$ | $-360^\circ$ | $-540^\circ$ |

Sau $90$ phút, kim quay $1{,}5$ vòng; vị trí đầu kim giống như sau $30$ phút, nhưng số đo khác nhau $360^\circ$. Vậy một vị trí của đầu kim ứng với vô số số đo.

:::definition Góc lượng giác
Cho hai tia $Ou$, $Ov$. Tia $Om$ quay quanh $O$ từ vị trí $Ou$ đến vị trí $Ov$ theo một chiều nhất định, tạo ra **góc lượng giác** với tia đầu $Ou$ và tia cuối $Ov$, kí hiệu $(Ou,Ov)$. Chiều quay ngược chiều kim đồng hồ gọi là chiều dương, chiều quay cùng chiều kim đồng hồ gọi là chiều âm.

Nếu một số đo của $(Ou,Ov)$ là $\alpha^\circ$ thì mọi số đo của nó có dạng $\alpha^\circ+k\cdot360^\circ$ với $k\in\mathbb Z$.
:::

Số đo theo độ khá quen thuộc, nhưng khi tính toán với góc, ta thường dùng một đơn vị khác tiện hơn.

:::definition Radian
Góc ở tâm của đường tròn chắn một cung có độ dài bằng bán kính có số đo là **một radian** (viết là $1$ rad).
:::

Vì chu vi đường tròn bán kính $R$ là $2\pi R$ nên cả đường tròn ứng với góc $2\pi$ rad. Do đó $360^\circ=2\pi$ rad, tức là

$$180^\circ=\pi\text{ rad},\qquad 1^\circ=\frac\pi{180}\text{ rad},\qquad 1\text{ rad}=\left(\frac{180}\pi\right)^\circ\approx57{,}3^\circ.$$

Số đo radian của góc lượng giác cũng có dạng $\alpha+k2\pi$ với $k\in\mathbb Z$. Khi viết số đo theo radian, ta thường bỏ chữ "rad".

**Hiểu sâu hơn.** Vì sao dùng radian? Một cung của đường tròn bán kính $R$ chắn góc ở tâm $\alpha$ (radian) có độ dài

$$l=R\alpha.$$

Công thức này không còn hệ số $\dfrac\pi{180}$, nên các công thức về sau gọn hơn nhiều. Nhưng nó chỉ đúng khi $\alpha$ tính bằng radian.

Ta ghi nhớ các số đo thường gặp:

| Độ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$ | $180^\circ$ |
|---|---|---|---|---|---|---|---|---|---|
| Radian | $0$ | $\dfrac\pi6$ | $\dfrac\pi4$ | $\dfrac\pi3$ | $\dfrac\pi2$ | $\dfrac{2\pi}3$ | $\dfrac{3\pi}4$ | $\dfrac{5\pi}6$ | $\pi$ |

:::example Đổi đơn vị và tính độ dài cung
a) Đổi $72^\circ$ và $-225^\circ$ sang radian, đổi $\dfrac{5\pi}{12}$ sang độ.
b) Một bánh xe có bán kính $0{,}3$ m lăn không trượt, quay được $2{,}5$ vòng. Tính quãng đường xe đi được (làm tròn đến hàng phần trăm của mét). (Số liệu là giả định.)

**Lời giải.** a) Nhân với $\dfrac\pi{180}$ để đổi từ độ sang radian:

$$72^\circ=72\cdot\frac\pi{180}=\frac{2\pi}5,\qquad -225^\circ=-225\cdot\frac\pi{180}=-\frac{5\pi}4.$$

Nhân với $\dfrac{180}\pi$ để đổi từ radian sang độ: $\dfrac{5\pi}{12}=\dfrac{5\pi}{12}\cdot\dfrac{180}\pi=75^\circ$.

b) Mỗi vòng ứng với góc $2\pi$ rad, nên $2{,}5$ vòng ứng với $\alpha=2{,}5\cdot2\pi=5\pi$ (rad). Quãng đường xe đi được bằng độ dài cung của vành bánh xe:

$$l=R\alpha=0{,}3\cdot5\pi=1{,}5\pi\approx4{,}71\text{ (m)}.$$

Vậy $72^\circ=\dfrac{2\pi}5$, $-225^\circ=-\dfrac{5\pi}4$, $\dfrac{5\pi}{12}=75^\circ$, và xe đi được khoảng $4{,}71$ m.
:::

:::example Số đo của góc lượng giác
a) Trong các số $\dfrac{7\pi}3$, $-\dfrac{5\pi}3$, $\dfrac{4\pi}3$, $\dfrac{13\pi}3$, những số nào là số đo của cùng một góc lượng giác (cùng tia đầu, tia cuối) với góc có số đo $\dfrac\pi3$?
b) Tìm số đo $\alpha\in[0;2\pi)$ của góc lượng giác có một số đo là $\dfrac{25\pi}6$.

**Lời giải.** a) Hai số đo cùng biểu diễn một góc lượng giác khi hiệu của chúng là bội nguyên của $2\pi$. Ta có $\dfrac{7\pi}3-\dfrac\pi3=2\pi$, $-\dfrac{5\pi}3-\dfrac\pi3=-2\pi$ và $\dfrac{13\pi}3-\dfrac\pi3=4\pi$ đều là bội của $2\pi$. Còn $\dfrac{4\pi}3-\dfrac\pi3=\pi$ không phải bội của $2\pi$.

b) Ta có $\dfrac{25\pi}6=\dfrac\pi6+4\pi=\dfrac\pi6+2\cdot2\pi$. Vậy $\alpha=\dfrac\pi6$.

Vậy các số $\dfrac{7\pi}3$, $-\dfrac{5\pi}3$, $\dfrac{13\pi}3$ cùng biểu diễn với $\dfrac\pi3$, và $\alpha=\dfrac\pi6$.
:::

## Đường tròn lượng giác và giá trị lượng giác

Trong mặt phẳng $Oxy$, **đường tròn lượng giác** là đường tròn tâm $O$, bán kính $1$, được định hướng (chiều dương ngược chiều kim đồng hồ) và có điểm gốc $A(1;0)$. Với mỗi số $\alpha$, điểm $M$ trên đường tròn sao cho $(OA,OM)$ có số đo $\alpha$ gọi là điểm biểu diễn của góc lượng giác $\alpha$.

:::diagram Điểm $M$ biểu diễn góc $\alpha$ trên đường tròn lượng giác
alt: Đường tròn lượng giác tâm O với điểm gốc A trên trục hoành, điểm M trên đường tròn, đoạn MH vuông góc với Ox; độ dài OH là cos alpha, độ dài MH là sin alpha
point O 0,0 below-left
point A 4,0 below-right
point M 2,3.46 above-right
point H 2,0 below
circle O 4
axes
segment O M
segment M H
right M H O
angle A O M "α"
label 2.9,1.7 "sin α"
label 0.9,-0.4 "cos α"
:::

:::definition Giá trị lượng giác
Gọi $M(x_M;y_M)$ là điểm biểu diễn của góc lượng giác $\alpha$ trên đường tròn lượng giác. Ta định nghĩa

$$\cos\alpha=x_M,\qquad\sin\alpha=y_M,$$

$$\tan\alpha=\frac{\sin\alpha}{\cos\alpha}\ (\cos\alpha\neq0),\qquad\cot\alpha=\frac{\cos\alpha}{\sin\alpha}\ (\sin\alpha\neq0).$$
:::

Với $0<\alpha<\dfrac\pi2$, định nghĩa này trùng với tỉ số lượng giác trong tam giác vuông $OHM$ có cạnh huyền $OM=1$: $\cos\alpha=OH$ và $\sin\alpha=MH$. Điều mới là bây giờ góc $\alpha$ có thể lớn tuỳ ý, âm, và tỉ số trở thành toạ độ.

Từ định nghĩa, ta có ngay các nhận xét:

- Mọi số $\alpha$ đều có $\sin\alpha$ và $\cos\alpha$, và $-1\le\sin\alpha\le1$, $-1\le\cos\alpha\le1$ (vì toạ độ của điểm trên đường tròn bán kính $1$).
- $\tan\alpha$ xác định khi $\alpha\neq\dfrac\pi2+k\pi$; $\cot\alpha$ xác định khi $\alpha\neq k\pi$ ($k\in\mathbb Z$).
- Hai số đo hơn kém nhau $2\pi$ cho cùng điểm $M$, nên $\sin(\alpha+k2\pi)=\sin\alpha$ và $\cos(\alpha+k2\pi)=\cos\alpha$. Còn $\tan(\alpha+k\pi)=\tan\alpha$.

### Dấu của giá trị lượng giác

Dấu của $\cos\alpha$ là dấu của hoành độ $x_M$, dấu của $\sin\alpha$ là dấu của tung độ $y_M$. Ta xét theo góc phần tư của điểm $M$:

| Góc phần tư | I | II | III | IV |
|---|---|---|---|---|
| $\sin\alpha$ | $+$ | $+$ | $-$ | $-$ |
| $\cos\alpha$ | $+$ | $-$ | $-$ | $+$ |
| $\tan\alpha$, $\cot\alpha$ | $+$ | $-$ | $+$ | $-$ |

### Hệ thức cơ bản

:::theorem Hệ thức lượng giác cơ bản
Với mọi $\alpha$ mà các biểu thức có nghĩa:

$$\sin^2\alpha+\cos^2\alpha=1,\qquad\tan\alpha\cdot\cot\alpha=1,$$

$$1+\tan^2\alpha=\frac1{\cos^2\alpha},\qquad1+\cot^2\alpha=\frac1{\sin^2\alpha}.$$
:::

Vì sao đúng? Điểm $M(\cos\alpha;\sin\alpha)$ nằm trên đường tròn $x^2+y^2=1$, nên $\cos^2\alpha+\sin^2\alpha=1$. Chia hai vế cho $\cos^2\alpha$ ta được $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$; chia cho $\sin^2\alpha$ ta được $1+\cot^2\alpha=\dfrac1{\sin^2\alpha}$. Còn $\tan\alpha\cdot\cot\alpha=\dfrac{\sin\alpha}{\cos\alpha}\cdot\dfrac{\cos\alpha}{\sin\alpha}=1$.

### Giá trị đặc biệt

| $\alpha$ | $0$ | $\dfrac\pi6$ | $\dfrac\pi4$ | $\dfrac\pi3$ | $\dfrac\pi2$ |
|---|---|---|---|---|---|
| $\sin\alpha$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}2$ | $\dfrac{\sqrt3}2$ | $1$ |
| $\cos\alpha$ | $1$ | $\dfrac{\sqrt3}2$ | $\dfrac{\sqrt2}2$ | $\dfrac12$ | $0$ |
| $\tan\alpha$ | $0$ | $\dfrac{\sqrt3}3$ | $1$ | $\sqrt3$ | không xác định |
| $\cot\alpha$ | không xác định | $\sqrt3$ | $1$ | $\dfrac{\sqrt3}3$ | $0$ |

### Các góc liên quan

Các điểm biểu diễn của $\alpha$ và $-\alpha$ đối xứng nhau qua $Ox$; của $\alpha$ và $\pi-\alpha$ đối xứng qua $Oy$; của $\alpha$ và $\pi+\alpha$ đối xứng qua $O$. Đổi dấu hoành độ, tung độ tương ứng, ta được:

:::theorem Giá trị lượng giác của các góc liên quan
- $\sin(-\alpha)=-\sin\alpha$, $\cos(-\alpha)=\cos\alpha$, $\tan(-\alpha)=-\tan\alpha$.
- $\sin(\pi-\alpha)=\sin\alpha$, $\cos(\pi-\alpha)=-\cos\alpha$, $\tan(\pi-\alpha)=-\tan\alpha$.
- $\sin(\pi+\alpha)=-\sin\alpha$, $\cos(\pi+\alpha)=-\cos\alpha$, $\tan(\pi+\alpha)=\tan\alpha$.
- $\sin\left(\dfrac\pi2-\alpha\right)=\cos\alpha$, $\cos\left(\dfrac\pi2-\alpha\right)=\sin\alpha$.
:::

Hai góc $\alpha$ và $\dfrac\pi2-\alpha$ là hai góc nhọn phụ nhau trong tam giác vuông, nên sin của góc này bằng cos của góc kia. Công thức này cũng cho ta $\sin\left(\alpha-\dfrac\pi2\right)=-\sin\left(\dfrac\pi2-\alpha\right)=-\cos\alpha$.

:::example Tính giá trị lượng giác bằng góc liên quan
Tính a) $\sin\dfrac{5\pi}6$; b) $\cos\left(-\dfrac\pi4\right)$; c) $\tan\dfrac{2\pi}3$; d) $\sin\dfrac{7\pi}6$.

**Lời giải.** Ta đưa mỗi góc về một góc đặc biệt trong $\left[0;\dfrac\pi2\right]$.

a) $\dfrac{5\pi}6=\pi-\dfrac\pi6$ nên $\sin\dfrac{5\pi}6=\sin\dfrac\pi6=\dfrac12$.

b) $\cos\left(-\dfrac\pi4\right)=\cos\dfrac\pi4=\dfrac{\sqrt2}2$.

c) $\dfrac{2\pi}3=\pi-\dfrac\pi3$ nên $\tan\dfrac{2\pi}3=-\tan\dfrac\pi3=-\sqrt3$.

d) $\dfrac{7\pi}6=\pi+\dfrac\pi6$ nên $\sin\dfrac{7\pi}6=-\sin\dfrac\pi6=-\dfrac12$.

Vậy a) $\dfrac12$; b) $\dfrac{\sqrt2}2$; c) $-\sqrt3$; d) $-\dfrac12$.
:::

:::example Tìm các giá trị lượng giác còn lại
Cho $\cos\alpha=-\dfrac35$ và $\dfrac\pi2<\alpha<\pi$. Tính $\sin\alpha$, $\tan\alpha$ và $\cot\alpha$.

**Lời giải.** Từ $\sin^2\alpha+\cos^2\alpha=1$ ta có $\sin^2\alpha=1-\dfrac9{25}=\dfrac{16}{25}$. Vì $\dfrac\pi2<\alpha<\pi$ (góc phần tư thứ II) nên $\sin\alpha>0$, suy ra $\sin\alpha=\dfrac45$.

Do đó $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}=\dfrac45\cdot\left(-\dfrac53\right)=-\dfrac43$ và $\cot\alpha=\dfrac1{\tan\alpha}=-\dfrac34$.

Vậy $\sin\alpha=\dfrac45$, $\tan\alpha=-\dfrac43$, $\cot\alpha=-\dfrac34$.

**Nhận xét.** Nếu quên điều kiện về góc phần tư, ta có hai đáp án $\pm\dfrac45$. Điều kiện $\dfrac\pi2<\alpha<\pi$ chọn đúng một đáp án.
:::

Bây giờ ta quay lại chiếc đồng hồ ở đầu bài. Ta dùng bốn bước để giải một bài toán thực tế có nhiều dữ kiện.

:::example Vị trí đầu kim phút
Kim phút của đồng hồ dài $10$ cm, đặt trong hệ toạ độ như ở đầu bài (lúc $12$ giờ, đầu kim ở $(0;10)$). Tìm toạ độ đầu kim sau $20$ phút. (Số liệu là giả định.)

**Lời giải.**

*Hiểu đề.* Kim phút quay đều theo chiều kim đồng hồ $6^\circ$ mỗi phút. Cần toạ độ đầu kim sau $t=20$ phút.

*Tìm cách giải.* Tính góc kim quay, suy ra góc $(Ox,\text{kim})$, rồi dùng toạ độ $(R\cos\theta;R\sin\theta)$ của điểm trên đường tròn bán kính $R$.

*Giải.* Sau $20$ phút kim quay $-6^\circ\cdot20=-120^\circ=-\dfrac{2\pi}3$. Lúc đầu kim hợp với $Ox$ góc $\dfrac\pi2$ nên bây giờ góc đó là $\theta=\dfrac\pi2-\dfrac{2\pi}3=-\dfrac\pi6$. Toạ độ đầu kim là

$$x=10\cos\left(-\frac\pi6\right)=10\cdot\frac{\sqrt3}2=5\sqrt3,\qquad y=10\sin\left(-\frac\pi6\right)=-5.$$

Vậy đầu kim ở $(5\sqrt3;-5)\approx(8{,}66;-5)$.

*Nhìn lại.* Vị trí này có hợp lí không? Sau $20$ phút, kim chỉ vào số $4$ trên mặt đồng hồ, tức là ở bên phải và thấp hơn tâm, đúng với $x>0$, $y<0$. Khoảng cách tới tâm là $\sqrt{75+25}=10$, đúng bằng độ dài kim. Nếu thay $t=50$ phút thì sao? Kim quay $-300^\circ\equiv60^\circ$, và theo cách tính tương tự đầu kim ở $(-5\sqrt3;5)$, phía trên bên trái, đúng với số $10$ trên mặt đồng hồ.
:::

:::example Độ cao của cabin đu quay
Một vòng đu quay có bán kính $10$ m, tâm cách mặt đất $12$ m. Cabin xuất phát ở điểm thấp nhất, rồi quay ngược chiều kim đồng hồ một góc $\theta$ (radian). Độ cao của cabin so với mặt đất là $h=12-10\cos\theta$ (m). Tính độ cao của cabin khi $\theta=\dfrac\pi3$ và khi $\theta=\pi$. (Số liệu là giả định.)

**Lời giải.** Điểm thấp nhất nằm ở hướng $-\dfrac\pi2$ so với $Ox$. Sau khi quay $\theta$, cabin ở hướng $\theta-\dfrac\pi2$, và độ cao so với tâm là $10\sin\left(\theta-\dfrac\pi2\right)=-10\cos\theta$. Cộng với $12$ m ta được công thức đã cho.

Với $\theta=\dfrac\pi3$: $h=12-10\cdot\dfrac12=7$ (m). Với $\theta=\pi$: $h=12-10\cdot(-1)=22$ (m).

Vậy cabin ở độ cao $7$ m khi $\theta=\dfrac\pi3$ và ở độ cao $22$ m (điểm cao nhất) khi $\theta=\pi$.
:::

:::warning Những sai lầm thường gặp
- **Dùng độ và radian lẫn lộn.** Sai: tính độ dài cung bằng $l=R\alpha$ với $\alpha=72^\circ$ và $R=5$ được $l=360$. Lí do sai: công thức chỉ đúng khi $\alpha$ tính bằng radian. Đúng: đổi $72^\circ=\dfrac{2\pi}5$ rồi tính $l=5\cdot\dfrac{2\pi}5=2\pi$.
- **Quên điều kiện góc phần tư khi lấy căn.** Sai: $\sin^2\alpha=\dfrac{16}{25}$ nên $\sin\alpha=\dfrac45$ với mọi $\alpha$. Lí do sai: có hai giá trị $\pm\dfrac45$. Đúng: dựa vào góc phần tư để chọn dấu.
- **Nhầm giá trị của $\cos(\pi-\alpha)$.** Sai: $\cos(\pi-\alpha)=\cos\alpha$. Lí do sai: điểm biểu diễn đối xứng qua $Oy$ nên hoành độ đổi dấu. Đúng: $\cos(\pi-\alpha)=-\cos\alpha$.
- **Coi $\tan$ xác định với mọi góc.** Sai: $\tan\dfrac\pi2=\dfrac{1}{0}$ hoặc bằng $1$. Lí do sai: $\cos\dfrac\pi2=0$. Đúng: $\tan\dfrac\pi2$ không xác định.
:::

**Kết nối.** Bài này xây dựng trên tỉ số lượng giác của góc nhọn ở lớp 10 và mở rộng chúng cho mọi góc. Nó chuẩn bị cho các công thức lượng giác (cộng, nhân đôi), hàm số lượng giác và phương trình lượng giác ở các bài sau, cũng như cho các bài toán dao động tuần hoàn, như đu quay hay con lắc.

## Thuật ngữ

:::terms
- góc lượng giác | directed angle
- số đo của góc lượng giác | measure of a directed angle
- radian | radian
- độ dài cung | arc length
- đường tròn lượng giác | unit circle
- điểm biểu diễn | representing point
- giá trị lượng giác | trigonometric value
- sin, côsin, tang, côtang | sine, cosine, tangent, cotangent
- góc phần tư | quadrant
- hệ thức lượng giác cơ bản | fundamental trigonometric identities
- góc liên quan | related angles
- tuần hoàn | periodic
:::

## Tóm tắt

- Góc lượng giác $(Ou,Ov)$ có chiều quay: dương là ngược chiều kim đồng hồ. Số đo: $\alpha+k2\pi$ ($k\in\mathbb Z$).
- $180^\circ=\pi$ rad; độ dài cung $l=R\alpha$ ($\alpha$ tính bằng radian).
- Trên đường tròn lượng giác: $M(\cos\alpha;\sin\alpha)$, $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$, $\cot\alpha=\dfrac{\cos\alpha}{\sin\alpha}$.
- Hệ thức: $\sin^2\alpha+\cos^2\alpha=1$, $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$, $1+\cot^2\alpha=\dfrac1{\sin^2\alpha}$, $\tan\alpha\cot\alpha=1$.
- Góc liên quan: $-\alpha$, $\pi-\alpha$, $\pi+\alpha$, $\dfrac\pi2-\alpha$; dấu theo góc phần tư.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Đổi số đo các góc sau sang radian: $150^\circ$, $-60^\circ$. Đổi sang độ: $\dfrac{5\pi}4$, $\dfrac{7\pi}{18}$.

::hint
**Kiến thức:** $180^\circ=\pi$ rad.

**Gợi ý các bước:**
1. Độ sang radian: nhân với $\dfrac\pi{180}$.
2. Radian sang độ: nhân với $\dfrac{180}\pi$.

::solution
$150^\circ=150\cdot\dfrac\pi{180}=\dfrac{5\pi}6$; $-60^\circ=-\dfrac\pi3$; $\dfrac{5\pi}4=225^\circ$; $\dfrac{7\pi}{18}=70^\circ$.

**Đáp số.** $\dfrac{5\pi}6$; $-\dfrac\pi3$; $225^\circ$; $70^\circ$.
:::

:::exercise
Tìm số đo $\alpha\in[0;2\pi)$ của góc lượng giác có một số đo là $\dfrac{31\pi}6$, và của góc lượng giác có một số đo là $-\dfrac{17\pi}4$.

::hint
**Kiến thức:** các số đo của cùng một góc lượng giác hơn kém nhau một bội nguyên của $2\pi$.

**Gợi ý các bước:**
1. Cộng hoặc trừ bội của $2\pi$ sao cho kết quả thuộc $[0;2\pi)$.
2. Kiểm tra lại hiệu với số ban đầu.

::solution
$\dfrac{31\pi}6=\dfrac{7\pi}6+4\pi$, nên $\alpha=\dfrac{7\pi}6$. $-\dfrac{17\pi}4+6\pi=\dfrac{7\pi}4$, nên $\alpha=\dfrac{7\pi}4$.

**Đáp số.** $\dfrac{7\pi}6$; $\dfrac{7\pi}4$.
:::

:::exercise
Tính $\sin\dfrac{5\pi}3$, $\cos\left(-\dfrac\pi3\right)$, $\tan\dfrac{3\pi}4$, $\cot\dfrac{7\pi}6$.

::hint
**Kiến thức:** các góc liên quan đặc biệt và bảng giá trị đặc biệt.

**Gợi ý các bước:**
1. Viết mỗi góc dưới dạng $\pm\alpha$, $\pi\pm\alpha$ hoặc $2\pi-\alpha$ với $\alpha$ đặc biệt.
2. Xác định dấu theo góc phần tư.

::solution
$\sin\dfrac{5\pi}3=-\sin\dfrac\pi3=-\dfrac{\sqrt3}2$. $\cos\left(-\dfrac\pi3\right)=\cos\dfrac\pi3=\dfrac12$. $\tan\dfrac{3\pi}4=-\tan\dfrac\pi4=-1$. $\cot\dfrac{7\pi}6=\cot\dfrac\pi6=\sqrt3$.

**Đáp số.** $-\dfrac{\sqrt3}2$; $\dfrac12$; $-1$; $\sqrt3$.
:::

:::exercise
Xác định dấu của $\sin\alpha$, $\cos\alpha$, $\tan\alpha$ khi $\pi<\alpha<\dfrac{3\pi}2$.

::hint
**Kiến thức:** dấu của giá trị lượng giác theo góc phần tư.

**Gợi ý các bước:**
1. Xác định góc phần tư chứa điểm biểu diễn.
2. Đọc dấu từ bảng.

::solution
Với $\pi<\alpha<\dfrac{3\pi}2$, điểm biểu diễn ở góc phần tư thứ III, nên $\sin\alpha<0$, $\cos\alpha<0$, $\tan\alpha>0$.

**Đáp số.** $\sin\alpha<0$; $\cos\alpha<0$; $\tan\alpha>0$.
:::

:::exercise
Kim phút của một đồng hồ dài $12$ cm, đặt trong hệ toạ độ như ở đầu bài (lúc $12$ giờ đầu kim ở $(0;12)$). Sau $25$ phút:
a) Kim quay một góc lượng giác bao nhiêu radian?
b) Đầu kim đi được quãng đường bao nhiêu xentimét (làm tròn đến hàng phần mười)?
c) Toạ độ đầu kim là gì?

::hint
**Kiến thức:** kim quay $6^\circ$ mỗi phút theo chiều âm; $l=R\alpha$; toạ độ $(R\cos\theta;R\sin\theta)$.

**Gợi ý các bước:**
1. Tính góc quay rồi đổi sang radian.
2. Dùng $l=R|\alpha|$.
3. Tính góc $\theta=\dfrac\pi2+\alpha$.

::solution
a) Góc quay là $-6^\circ\cdot25=-150^\circ=-\dfrac{5\pi}6$.

b) $l=12\cdot\dfrac{5\pi}6=10\pi\approx31{,}4$ (cm).

c) $\theta=\dfrac\pi2-\dfrac{5\pi}6=-\dfrac\pi3$, nên $x=12\cos\left(-\dfrac\pi3\right)=6$ và $y=12\sin\left(-\dfrac\pi3\right)=-6\sqrt3\approx-10{,}39$.

**Đáp số.** a) $-\dfrac{5\pi}6$; b) $\approx31{,}4$ cm; c) $(6;-6\sqrt3)$.
:::

:::exercise
Một vòng đu quay có bán kính $15$ m, tâm cách mặt đất $18$ m. Cabin xuất phát ở điểm thấp nhất, quay ngược chiều kim đồng hồ một góc $\theta$ thì độ cao so với mặt đất là $h=18-15\cos\theta$ (m). Tính độ cao của cabin khi $\theta=\dfrac\pi3$, và cho biết độ cao lớn nhất và nhỏ nhất của cabin. (Số liệu là giả định.)

::hint
**Kiến thức:** $-1\le\cos\theta\le1$; $\cos\dfrac\pi3=\dfrac12$.

**Gợi ý các bước:**
1. Thay $\theta=\dfrac\pi3$ vào công thức.
2. Tìm khoảng giá trị của $h$ từ $-1\le\cos\theta\le1$.

::solution
Với $\theta=\dfrac\pi3$: $h=18-15\cdot\dfrac12=10{,}5$ (m). Vì $-1\le\cos\theta\le1$ nên $3\le h\le33$. Độ cao nhỏ nhất là $3$ m (khi $\cos\theta=1$), lớn nhất là $33$ m (khi $\cos\theta=-1$).

**Đáp số.** $10{,}5$ m; nhỏ nhất $3$ m; lớn nhất $33$ m.
:::

:::exercise
Cho góc $\alpha$ thoả mãn $0<\alpha<\dfrac\pi2$ và $\tan\alpha=\dfrac34$. Xét tính đúng sai của các mệnh đề sau:

a) $\sin\alpha=\dfrac45$.

b) $\cos\alpha=\dfrac45$.

c) $\sin(\pi-\alpha)=\dfrac35$.

d) $\cos\left(\dfrac\pi2-\alpha\right)=\dfrac35$.

::hint
**Kiến thức:** $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$; các góc liên quan.

**Gợi ý các bước:**
1. Tính $\cos\alpha$ từ $\tan\alpha$, rồi $\sin\alpha=\tan\alpha\cdot\cos\alpha$.
2. Dùng $\sin(\pi-\alpha)=\sin\alpha$ và $\cos\left(\dfrac\pi2-\alpha\right)=\sin\alpha$.

::solution
Ta có $\dfrac1{\cos^2\alpha}=1+\dfrac9{16}=\dfrac{25}{16}$ nên $\cos\alpha=\dfrac45$ (vì $\cos\alpha>0$), và $\sin\alpha=\dfrac34\cdot\dfrac45=\dfrac35$.

a) **Sai**: $\sin\alpha=\dfrac35$. b) **Đúng**: $\cos\alpha=\dfrac45$. c) **Đúng**: $\sin(\pi-\alpha)=\sin\alpha=\dfrac35$. d) **Đúng**: $\cos\left(\dfrac\pi2-\alpha\right)=\sin\alpha=\dfrac35$.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Đúng.
:::

:::exercise
Cho $\tan\alpha=3$. Tính giá trị của $A=\dfrac{2\sin\alpha+\cos\alpha}{\sin\alpha-\cos\alpha}$ (làm tròn đến hàng phần mười nếu cần).

::hint
**Kiến thức:** chia tử và mẫu cho $\cos\alpha\neq0$ để đưa về $\tan\alpha$.

**Gợi ý các bước:**
1. Vì $\tan\alpha=3$ nên $\cos\alpha\neq0$.
2. Chia tử và mẫu cho $\cos\alpha$.

::solution
Chia tử và mẫu cho $\cos\alpha$: $A=\dfrac{2\tan\alpha+1}{\tan\alpha-1}=\dfrac{2\cdot3+1}{3-1}=\dfrac72=3{,}5$.

**Đáp số.** $3{,}5$.
:::

:::exercise
Tam giác $ABC$ vuông tại $A$ có $AB=6$ và $AC=8$. Tính $\sin B$, $\cos B$, $\tan B$ rồi kiểm tra hệ thức $\sin^2B+\cos^2B=1$. (Ôn lại tỉ số lượng giác của góc nhọn.)

::hint
**Kiến thức:** $\sin B=\dfrac{\text{đối}}{\text{huyền}}$, $\cos B=\dfrac{\text{kề}}{\text{huyền}}$, $\tan B=\dfrac{\text{đối}}{\text{kề}}$; định lí Pythagore.

**Gợi ý các bước:**
1. Tính $BC$.
2. Viết các tỉ số rồi kiểm tra hệ thức.

::solution
$BC=\sqrt{6^2+8^2}=10$. Do đó $\sin B=\dfrac{AC}{BC}=\dfrac45$, $\cos B=\dfrac{AB}{BC}=\dfrac35$, $\tan B=\dfrac{AC}{AB}=\dfrac43$. Kiểm tra: $\dfrac{16}{25}+\dfrac9{25}=1$.

**Đáp số.** $\sin B=\dfrac45$, $\cos B=\dfrac35$, $\tan B=\dfrac43$.
:::

:::exercise Thử thách
Chứng minh rằng $\sin^6\alpha+\cos^6\alpha+3\sin^2\alpha\cos^2\alpha=1$ với mọi $\alpha$.

::hint
**Kiến thức:** $a^3+b^3=(a+b)^3-3ab(a+b)$ và $\sin^2\alpha+\cos^2\alpha=1$.

**Gợi ý các bước:**
1. Đặt $a=\sin^2\alpha$, $b=\cos^2\alpha$.
2. Viết $a^3+b^3$ qua $a+b$ và $ab$.

::solution
Đặt $a=\sin^2\alpha$, $b=\cos^2\alpha$ thì $a+b=1$. Ta có $\sin^6\alpha+\cos^6\alpha=a^3+b^3=(a+b)^3-3ab(a+b)=1-3ab$. Do đó vế trái bằng $1-3ab+3ab=1$.

**Đáp số.** Đẳng thức được chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Số đo $135^\circ$ đổi sang radian bằng
A. $\dfrac{3\pi}4$.
B. $\dfrac{5\pi}6$.
C. $\dfrac{3\pi}2$.
D. $\dfrac{2\pi}3$.
::key A
$135\cdot\dfrac\pi{180}=\dfrac{3\pi}4$. Phương án D ứng với $120^\circ$, B ứng với $150^\circ$, C ứng với $270^\circ$.

::mc
Giá trị của $\cos\dfrac{2\pi}3$ bằng
A. $\dfrac12$.
B. $-\dfrac12$.
C. $\dfrac{\sqrt3}2$.
D. $-\dfrac{\sqrt3}2$.
::key B
$\cos\dfrac{2\pi}3=\cos\left(\pi-\dfrac\pi3\right)=-\cos\dfrac\pi3=-\dfrac12$. Phương án A quên đổi dấu, C và D nhầm với $\cos\dfrac\pi6$.

::mc
Cho $\tan\alpha=2$. Giá trị của $\dfrac{\sin\alpha+\cos\alpha}{\sin\alpha-\cos\alpha}$ bằng
A. $-3$.
B. $\dfrac13$.
C. $3$.
D. $1$.
::key C
Chia tử và mẫu cho $\cos\alpha$: $\dfrac{\tan\alpha+1}{\tan\alpha-1}=\dfrac{3}{1}=3$. Phương án B là đảo ngược tử và mẫu.

::mc
Trên đường tròn bán kính $5$ cm, cung chắn góc ở tâm $\dfrac{2\pi}5$ (radian) có độ dài bằng
A. $\dfrac{2\pi}{25}$ cm.
B. $360$ cm.
C. $\pi$ cm.
D. $2\pi$ cm.
::key D
$l=R\alpha=5\cdot\dfrac{2\pi}5=2\pi$. Phương án A chia $\alpha$ cho $R$, B dùng độ thay cho radian.

::tf
Cho góc $\alpha$ thoả mãn $\dfrac\pi2<\alpha<\pi$ và $\sin\alpha=\dfrac35$. Xét tính đúng sai của các mệnh đề sau:
a) $\cos\alpha=\dfrac45$.
b) $\tan\alpha=\dfrac34$.
c) $\sin(\pi-\alpha)=-\dfrac35$.
d) $\cos(-\alpha)=\dfrac45$.
::key S S S S
Vì $\alpha$ ở góc phần tư thứ II nên $\cos\alpha=-\dfrac45$. a) Sai: $\cos\alpha=-\dfrac45$. b) Sai: $\tan\alpha=-\dfrac34$. c) Sai: $\sin(\pi-\alpha)=\sin\alpha=\dfrac35$. d) Sai: $\cos(-\alpha)=\cos\alpha=-\dfrac45$.

::sa
Một vòng đu quay có bán kính $10$ m, tâm cách mặt đất $12$ m. Độ cao của cabin so với mặt đất là $h=12-10\cos\theta$ (m), $\theta$ là góc quay từ điểm thấp nhất. Tính độ cao của cabin khi $\theta=\dfrac{4\pi}3$ (đơn vị mét).
::key 17
$\cos\dfrac{4\pi}3=-\dfrac12$ nên $h=12+5=17$.

::sa
Cho $\tan\alpha=2$. Tính $\dfrac{3\sin\alpha-\cos\alpha}{\sin\alpha+2\cos\alpha}$ (làm tròn đến hàng phần trăm nếu cần).
::key 1,25
Chia tử và mẫu cho $\cos\alpha$: $\dfrac{3\tan\alpha-1}{\tan\alpha+2}=\dfrac54=1{,}25$.
:::
