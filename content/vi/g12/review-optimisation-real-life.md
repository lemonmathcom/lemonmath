---
title: "Ôn tập: bài toán tối ưu và thực tế"
description: Ôn cách lập hàm số và dùng đạo hàm cho bài toán tối ưu, tốc độ thay đổi, chuyển động, chi phí và lợi nhuận theo dạng câu hỏi của đề thi tốt nghiệp THPT.
minutes: 40
---

:::goals
- Chuyển một bài toán thực tế thành bài toán tìm giá trị lớn nhất, nhỏ nhất của một hàm số trên một tập xác định đúng.
- Dùng đạo hàm làm tốc độ thay đổi: vận tốc, gia tốc, tốc độ tăng trưởng.
- Giải bài toán chi phí, doanh thu, lợi nhuận và bài toán đường đi, lắp đặt có chi phí nhỏ nhất.
- Trình bày đáp số đúng đơn vị và đúng yêu cầu làm tròn.
:::

Bài toán thực tế là "đặc sản" của đề thi theo cấu trúc mới. Chúng thường xuất hiện ở Phần III (trả lời ngắn, đáp số là một con số có đơn vị), đôi khi thành cả một câu đúng/sai ở Phần II, tổng cộng thường khoảng $1$ đến $2$ điểm. Phần toán thường không khó; cái khó là **lập được hàm số** và **xác định đúng miền** của biến.

Kiến thức nền nằm ở bài [giá trị lớn nhất và nhỏ nhất](lesson:max-min-values) và bài [đạo hàm và bài toán thực tế](lesson:derivative-real-problems).

## Quy trình giải bài toán tối ưu

:::note Bốn bước
1. **Chọn biến** $x$ (đại lượng có thể thay đổi), ghi đơn vị và **điều kiện** của $x$.
2. **Lập hàm** cần tối ưu theo $x$ (dùng các ràng buộc để khử bớt biến).
3. **Tìm giá trị lớn nhất, nhỏ nhất** của hàm trên miền đó: tính đạo hàm, so sánh với đầu mút hoặc lập bảng biến thiên.
4. **Trả lời đúng câu hỏi**: đề hỏi $x$, hỏi giá trị lớn nhất, hay hỏi một đại lượng khác?
:::

:::example Trả lời ngắn: hộp không nắp
Từ một tấm bìa hình vuông cạnh $30$ cm, người ta cắt bỏ ở bốn góc bốn hình vuông bằng nhau cạnh $x$ cm rồi gấp lên thành một chiếc hộp không nắp. Thể tích lớn nhất của hộp là bao nhiêu cm³?

**Lời giải.** Đáy hộp là hình vuông cạnh $30-2x$, chiều cao $x$, với $0<x<15$. Thể tích:

$$V(x)=x(30-2x)^2,\qquad V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x).$$

Trên $(0; 15)$, $30-2x>0$, nên $V'$ có dấu của $30-6x$: dương khi $x<5$, âm khi $x>5$. Vậy $V$ lớn nhất tại $x=5$:

$$V(5)=5\cdot20^2=2000.$$

Thể tích lớn nhất là $2000$ cm³ (cắt hình vuông cạnh $5$ cm).
:::

## Tốc độ thay đổi và chuyển động

:::note Ghi nhớ
- Nếu đại lượng $Q$ phụ thuộc thời gian $t$ thì $Q'(t)$ là **tốc độ thay đổi tức thời** của $Q$ tại thời điểm $t$.
- Chuyển động thẳng với phương trình $s(t)$: vận tốc $v(t)=s'(t)$, gia tốc $a(t)=v'(t)=s''(t)$.
- Vận tốc và gia tốc cùng dấu thì vật đang nhanh dần; trái dấu thì vật đang chậm dần.
:::

Hai câu hỏi hay bị nhầm: "khi nào $Q$ lớn nhất" (giải $Q'=0$) và "khi nào $Q$ **tăng nhanh nhất**" (tìm giá trị lớn nhất của $Q'$, tức là xét $Q''$).

:::example Trắc nghiệm: tăng nhanh nhất
Số vi khuẩn trong một mẻ nuôi cấy sau $t$ giờ là $N(t)=1000+30t^2-t^3$, $0\le t\le20$. Số vi khuẩn tăng nhanh nhất tại thời điểm nào?
A. $t=10$.
B. $t=20$.
C. $t=0$.
D. $t=15$.

**Lời giải.** Tốc độ tăng là $N'(t)=60t-3t^2$. Ta tìm giá trị lớn nhất của $N'$ trên $[0; 20]$:

$$N''(t)=60-6t=0\iff t=10;\qquad N'(0)=0,\quad N'(10)=300,\quad N'(20)=0.$$

Vậy vi khuẩn tăng nhanh nhất lúc $t=10$ giờ, chọn **A**. Phương án B là lúc $N'(t)=0$, tức lúc số vi khuẩn **lớn nhất**, không phải lúc tăng nhanh nhất.
:::

:::example Đúng/sai: chuyển động thẳng
Một vật chuyển động thẳng với quãng đường $s(t)=-t^3+9t^2$ (m), $t$ (giây), $0\le t\le6$.
a) Vận tốc của vật tại $t=2$ là $24$ m/s.
b) Vận tốc lớn nhất của vật là $27$ m/s.
c) Tại $t=4$, vật đang chuyển động nhanh dần.
d) Quãng đường vật đi được trong $6$ giây là $108$ m.

**Lời giải.** Ta tính trước vận tốc và gia tốc:

$$v(t)=-3t^2+18t,\qquad a(t)=-6t+18.$$

a) **Đúng**: $v(2)=-12+36=24$.

b) **Đúng**: $v$ là hàm bậc hai với hệ số $-3<0$, lớn nhất tại $t=3$ (nơi $a=0$): $v(3)=-27+54=27$.

c) **Sai**: $v(4)=24>0$ còn $a(4)=-6<0$, trái dấu nên vật đang chậm dần.

d) **Đúng**: $v(t)=3t(6-t)\ge0$ trên $[0; 6]$ nên vật không quay đầu, quãng đường là $s(6)-s(0)=-216+324=108$.

Đáp án: Đ Đ S Đ.
:::

## Chi phí, doanh thu và lợi nhuận

:::note Ghi nhớ
- Lợi nhuận = doanh thu − chi phí: $P(x)=R(x)-C(x)$.
- Chi phí trung bình mỗi sản phẩm: $\overline{C}(x)=\dfrac{C(x)}{x}$.
- Số sản phẩm $x$ thường là số tự nhiên, nhưng ta xét $x$ liên tục trên một đoạn rồi kiểm tra lại nghiệm.
:::

:::example Trắc nghiệm: sản lượng cho lợi nhuận lớn nhất
Một xưởng sản xuất $x$ sản phẩm mỗi ngày ($0\le x\le60$) thu lợi nhuận $P(x)=-x^3+45x^2+1200x$ (nghìn đồng). Mỗi ngày xưởng nên sản xuất bao nhiêu sản phẩm để lợi nhuận lớn nhất?
A. $40$.
B. $15$.
C. $60$.
D. $10$.

**Lời giải.** Ta giải $P'(x)=0$ trên $(0; 60)$ rồi so sánh với hai đầu mút:

$$P'(x)=-3x^2+90x+1200=-3(x-40)(x+10)=0\iff x=40\ (\text{loại } x=-10).$$

$$P(0)=0,\qquad P(40)=56\,000,\qquad P(60)=18\,000.$$

Vậy nên sản xuất $40$ sản phẩm mỗi ngày (lợi nhuận $56$ triệu đồng), chọn **A**. Phương án B là nghiệm của $P''(x)=0$; D là nghiệm bị đổi dấu; C chỉ là đầu mút.
:::

## Bài toán đường đi và lắp đặt

Dạng này có một điểm $M$ chạy trên một đường thẳng; quãng đường hoặc chi phí gồm một đoạn xiên (dùng định lí Pythagore) và một đoạn thẳng.

:::diagram Kéo dây điện từ nhà máy $A$ ra đảo $C$
alt: Bờ biển nằm ngang với điểm B bên trái và nhà máy A bên phải cách B 8 km; đảo C nằm phía trên B cách bờ 3 km; dây đi trên bờ từ A đến M rồi dưới nước từ M đến C
point B 0,0 below
point A 8,0 below
point C 0,3 above
point M 2.25,0 below
segment B A
segment C M
segment C B dashed
right C B A
label 1.1,-0.5 "x"
label -0.4,1.5 "3"
:::

:::example Trả lời ngắn: chi phí lắp đặt nhỏ nhất
Một nhà máy điện $A$ nằm trên bờ biển thẳng. Đảo $C$ cách bờ $3$ km, điểm gần đảo nhất trên bờ là $B$ với $AB=8$ km. Người ta kéo dây trên bờ từ $A$ đến $M$ (thuộc đoạn $AB$) rồi kéo dưới nước từ $M$ đến $C$. Chi phí mỗi km dây là $30$ triệu đồng trên bờ và $50$ triệu đồng dưới nước. Điểm $M$ cách $B$ bao nhiêu km thì chi phí nhỏ nhất?

**Lời giải.** Đặt $BM=x$ (km), $0\le x\le8$. Khi đó $MC=\sqrt{x^2+9}$, $AM=8-x$, chi phí (triệu đồng):

$$T(x)=30(8-x)+50\sqrt{x^2+9},\qquad T'(x)=-30+\frac{50x}{\sqrt{x^2+9}}.$$

Giải $T'(x)=0$ (cần $x>0$ để bình phương):

$$5x=3\sqrt{x^2+9}\iff25x^2=9x^2+81\iff x^2=\frac{81}{16}\iff x=\frac94.$$

So sánh: $T(0)=390$, $T\left(\frac94\right)=172{,}5+187{,}5=360$, $T(8)=50\sqrt{73}\approx427$. Vậy $M$ cách $B$ $2{,}25$ km, chi phí nhỏ nhất là $360$ triệu đồng.
:::

:::warning Những sai lầm thường gặp
- **Sai miền của biến.** Với hộp cạnh $30$ cm, $x$ phải nhỏ hơn $15$; nghiệm $x=15$ của $V'$ cho thể tích $0$.
- **Trả lời nhầm đại lượng.** Đề hỏi "cách $B$ bao nhiêu km" mà ghi chi phí $360$, hoặc ngược lại.
- **Nhầm "lớn nhất" với "tăng nhanh nhất".** Lớn nhất: $Q'=0$. Tăng nhanh nhất: $Q'$ lớn nhất.
- **Quên đầu mút.** Giá trị tối ưu có thể nằm ở đầu mút, nhất là khi miền bị giới hạn bởi thực tế.
- **Quên đổi đơn vị.** Phút và giờ, mét và kilômét, nghìn đồng và triệu đồng.
:::

## Thuật ngữ

:::terms
- bài toán tối ưu | optimisation problem
- tốc độ thay đổi tức thời | instantaneous rate of change
- vận tốc / gia tốc | velocity / acceleration
- chi phí / doanh thu / lợi nhuận | cost / revenue / profit
- chi phí trung bình | average cost
- điều kiện của biến | constraint on the variable
- thể tích / diện tích toàn phần | volume / total surface area
- định lí Pythagore | Pythagoras' theorem
:::

## Bài tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise Trắc nghiệm
Một mảnh vườn hình chữ nhật có chu vi $40$ m. Diện tích lớn nhất của mảnh vườn là
A. $100$ m².
B. $400$ m².
C. $96$ m².
D. $200$ m².

::hint
**Kiến thức:** gọi một cạnh là $x$ thì cạnh kia là $20-x$.

**Gợi ý các bước:**
1. Lập $S(x)=x(20-x)$, $0<x<20$.
2. Giải $S'(x)=0$.

::solution
$S'(x)=20-2x=0\iff x=10$, $S'$ đổi dấu từ $+$ sang $-$. $S(10)=100$. Phương án B là $20^2$.

**Đáp số.** A.
:::

:::exercise Trả lời ngắn
Một vật chuyển động với $s(t)=t^3-3t^2+5t$ (m), $t$ (giây). Tính vận tốc của vật (m/s) tại thời điểm gia tốc bằng $0$.

::hint
**Kiến thức:** $v=s'$, $a=v'$.

**Gợi ý các bước:**
1. Tính $v(t)$ và $a(t)$.
2. Giải $a(t)=0$ rồi thay vào $v$.

::solution
$v(t)=3t^2-6t+5$, $a(t)=6t-6=0\iff t=1$. $v(1)=3-6+5=2$.

**Đáp số.** $2$.
:::

:::exercise Trắc nghiệm
Tổng chi phí sản xuất $x$ sản phẩm là $C(x)=x^2+20x+900$ (nghìn đồng), $x>0$. Chi phí trung bình nhỏ nhất cho mỗi sản phẩm là
A. $80$ nghìn đồng.
B. $30$ nghìn đồng.
C. $60$ nghìn đồng.
D. $50$ nghìn đồng.

::hint
**Kiến thức:** chi phí trung bình $\overline C(x)=x+20+\dfrac{900}{x}$.

**Gợi ý các bước:**
1. Giải $\overline C'(x)=1-\dfrac{900}{x^2}=0$.
2. Tính $\overline C$ tại nghiệm dương.

::solution
$\overline C'(x)=0\iff x=30$, và $\overline C'$ đổi dấu từ $-$ sang $+$. $\overline C(30)=30+20+30=80$. Phương án B là số sản phẩm $x$; C quên số hạng $20$.

**Đáp số.** A.
:::

:::exercise Tự luận
Một bể chứa không nắp có đáy hình vuông, thể tích $32$ dm³. Tìm kích thước của bể để tốn ít vật liệu nhất (diện tích đáy cộng bốn mặt bên nhỏ nhất).

::hint
**Kiến thức:** đáy cạnh $x$, chiều cao $h=\dfrac{32}{x^2}$.

**Gợi ý các bước:**
1. Lập $S(x)=x^2+4xh=x^2+\dfrac{128}{x}$, $x>0$.
2. Lập bảng biến thiên trên $(0; +\infty)$.

::solution
$S'(x)=2x-\dfrac{128}{x^2}=\dfrac{2(x^3-64)}{x^2}=0\iff x=4$; $S'<0$ khi $0<x<4$, $S'>0$ khi $x>4$. Khi đó $h=\dfrac{32}{16}=2$ và $S(4)=16+32=48$ dm².

**Đáp số.** Đáy cạnh $4$ dm, cao $2$ dm (diện tích vật liệu $48$ dm²).
:::

:::exercise Đúng/Sai
Một cửa hàng bán áo với giá $200$ nghìn đồng mỗi chiếc thì mỗi tháng bán được $50$ chiếc; cứ giảm giá $1$ nghìn đồng thì bán thêm được $1$ chiếc. Giá nhập mỗi chiếc là $120$ nghìn đồng. Gọi $x$ (nghìn đồng) là số tiền giảm giá, $0\le x\le80$.

a) Khi bán với giá $190$ nghìn đồng, cửa hàng bán được $60$ chiếc mỗi tháng.

b) Lợi nhuận mỗi tháng là $P(x)=(80-x)(50+x)$ (nghìn đồng).

c) Lợi nhuận lớn nhất khi giá bán là $170$ nghìn đồng.

d) Lợi nhuận lớn nhất là $4225$ nghìn đồng.

::hint
**Kiến thức:** lợi nhuận = (giá bán − giá nhập) × số lượng.

**Gợi ý các bước:**
1. Giá bán $200-x$, lãi mỗi chiếc $80-x$, số lượng $50+x$.
2. Tìm giá trị lớn nhất của $P$ trên $[0; 80]$.

::solution
a) **Đúng**: giảm $10$ nghìn thì bán $50+10=60$ chiếc.

b) **Đúng**: lãi mỗi chiếc $200-x-120=80-x$, nhân với $50+x$.

c) **Sai**: $P'(x)=30-2x=0\iff x=15$, nên giá bán tốt nhất là $185$ nghìn đồng.

d) **Đúng**: $P(15)=65\cdot65=4225$, lớn hơn $P(0)=4000$ và $P(80)=0$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise Trả lời ngắn
Một quả bóng được ném thẳng đứng lên, độ cao sau $t$ giây là $h(t)=1{,}5+19{,}6t-4{,}9t^2$ (m). Tính độ cao lớn nhất của quả bóng (đơn vị: mét).

::hint
**Kiến thức:** độ cao lớn nhất khi vận tốc $h'(t)=0$.

**Gợi ý các bước:**
1. Giải $h'(t)=19{,}6-9{,}8t=0$.
2. Thay vào $h(t)$.

::solution
$h'(t)=0\iff t=2$, $h'$ đổi dấu từ $+$ sang $-$. $h(2)=1{,}5+39{,}2-19{,}6=21{,}1$.

**Đáp số.** $21{,}1$.
:::

:::exercise Trắc nghiệm
Một lon nước hình trụ có thể tích $16\pi$ cm³. Để tốn ít vật liệu nhất (diện tích toàn phần nhỏ nhất), bán kính đáy của lon phải bằng
A. $2$ cm.
B. $4$ cm.
C. $8$ cm.
D. $1$ cm.

::hint
**Kiến thức:** $V=\pi r^2h$, diện tích toàn phần $S=2\pi r^2+2\pi rh$.

**Gợi ý các bước:**
1. Thay $h=\dfrac{16}{r^2}$ để được $S(r)=2\pi r^2+\dfrac{32\pi}{r}$.
2. Giải $S'(r)=0$.

::solution
$S'(r)=4\pi r-\dfrac{32\pi}{r^2}=0\iff r^3=8\iff r=2$; $S'$ đổi dấu từ $-$ sang $+$. Khi đó $h=4$. Phương án B là chiều cao, C là $r^3$.

**Đáp số.** A.
:::

:::exercise Trả lời ngắn
Một người ở điểm $A$ trên mặt hồ, cách bờ thẳng $4$ km ($B$ là điểm trên bờ gần $A$ nhất). Người đó muốn đến điểm $C$ trên bờ với $BC=10$ km: chèo thuyền với vận tốc $3$ km/h đến điểm $M$ trên đoạn $BC$, rồi đi bộ với vận tốc $5$ km/h đến $C$. Điểm $M$ cách $B$ bao nhiêu km thì thời gian ít nhất?

::hint
**Kiến thức:** thời gian = quãng đường : vận tốc; $AM=\sqrt{x^2+16}$ với $x=BM$.

**Gợi ý các bước:**
1. Lập $T(x)=\dfrac{\sqrt{x^2+16}}{3}+\dfrac{10-x}{5}$, $0\le x\le10$.
2. Giải $T'(x)=0$ và so sánh với hai đầu mút.

::solution
$T'(x)=\dfrac{x}{3\sqrt{x^2+16}}-\dfrac15=0\iff5x=3\sqrt{x^2+16}\iff16x^2=144\iff x=3$. $T(0)\approx3{,}33$, $T(3)=\dfrac53+\dfrac75\approx3{,}07$, $T(10)\approx3{,}59$ (giờ).

**Đáp số.** $3$.
:::

:::exercise Đúng/Sai
Từ một tấm bìa hình chữ nhật kích thước $16$ cm × $10$ cm, người ta cắt bốn hình vuông cạnh $x$ cm ở bốn góc rồi gấp thành hộp không nắp.

a) Điều kiện của $x$ là $0<x<5$.

b) Thể tích hộp là $V(x)=x(16-x)(10-x)$.

c) Thể tích lớn nhất khi $x=\dfrac{20}{3}$.

d) Thể tích lớn nhất của hộp là $144$ cm³.

::hint
**Kiến thức:** đáy hộp có kích thước $(16-2x)$ và $(10-2x)$.

**Gợi ý các bước:**
1. Viết $V(x)$ và tính $V'(x)$.
2. Chỉ giữ nghiệm thuộc miền của $x$.

::solution
$V(x)=x(16-2x)(10-2x)=4x^3-52x^2+160x$, $V'(x)=12x^2-104x+160=4(x-2)(3x-20)$.

a) **Đúng**: cần $10-2x>0$ và $x>0$.

b) **Sai**: mỗi cạnh đáy bị cắt hai lần, phải là $16-2x$ và $10-2x$.

c) **Sai**: $\dfrac{20}{3}\approx6{,}67$ không thuộc $(0; 5)$; nghiệm cần lấy là $x=2$.

d) **Đúng**: $V'$ đổi dấu từ $+$ sang $-$ tại $x=2$, $V(2)=2\cdot12\cdot6=144$.

**Đáp số.** a) Đúng; b) Sai; c) Sai; d) Đúng.
:::

:::exercise Thử thách
Một tấm tôn rộng $30$ cm được gấp thành máng nước: đáy rộng $10$ cm, hai thành mỗi bên rộng $10$ cm, nghiêng với phương nằm ngang một góc $\theta$ với $0<\theta\le\dfrac{\pi}{2}$ (mặt cắt là hình thang cân). Tìm $\theta$ để diện tích mặt cắt lớn nhất và tính diện tích đó (làm tròn đến hàng phần mười).

::hint
**Kiến thức:** diện tích hình thang $=\dfrac{(\text{đáy lớn}+\text{đáy nhỏ})\cdot\text{cao}}{2}$; $\cos2\theta=2\cos^2\theta-1$.

**Gợi ý các bước:**
1. Chiều cao $10\sin\theta$, đáy lớn $10+20\cos\theta$, nên $A(\theta)=100\sin\theta(1+\cos\theta)$.
2. Tính $A'(\theta)$, phân tích thành nhân tử theo $\cos\theta$.

::solution
$$A'(\theta)=100\left(\cos\theta+\cos^2\theta-\sin^2\theta\right)=100(2\cos^2\theta+\cos\theta-1)=100(2\cos\theta-1)(\cos\theta+1).$$
Trên $\left(0; \dfrac{\pi}{2}\right]$, $\cos\theta+1>0$, nên $A'=0\iff\cos\theta=\dfrac12\iff\theta=\dfrac{\pi}{3}$; $A'>0$ khi $\theta<\dfrac{\pi}{3}$ và $A'<0$ khi $\theta>\dfrac{\pi}{3}$. $A\left(\dfrac{\pi}{3}\right)=100\cdot\dfrac{\sqrt3}{2}\cdot\dfrac32=75\sqrt3\approx129{,}9$.

**Đáp số.** $\theta=\dfrac{\pi}{3}$ ($60^\circ$), diện tích lớn nhất $75\sqrt3\approx129{,}9$ cm².
:::

## Kiểm tra mini

:::quiz
::mc
Hai số dương có tổng bằng $12$. Tích của chúng lớn nhất bằng
A. $36$.
B. $6$.
C. $144$.
D. $72$.
::key A
Tích $P(x)=x(12-x)$, $P'(x)=12-2x=0\iff x=6$, $P(6)=36$. Phương án B là giá trị của mỗi số, C là $12^2$.

::mc
Một vật chuyển động với $s(t)=t^3-3t^2+4t$ (m). Gia tốc của vật tại $t=2$ giây là
A. $6$ m/s².
B. $8$ m/s².
C. $4$ m/s².
D. $0$ m/s².
::key A
$v(t)=3t^2-6t+4$, $a(t)=6t-6$, $a(2)=6$. Phương án C là vận tốc $v(2)$; D là gia tốc tại $t=1$.

::mc
Tổng chi phí sản xuất $x$ sản phẩm là $C(x)=2x^2+50x+800$ (nghìn đồng). Để chi phí trung bình mỗi sản phẩm nhỏ nhất, cần sản xuất bao nhiêu sản phẩm?
A. $20$.
B. $400$.
C. $10$.
D. $40$.
::key A
$\overline C(x)=2x+50+\dfrac{800}{x}$, $\overline C'(x)=2-\dfrac{800}{x^2}=0\iff x^2=400\iff x=20$. Phương án B là $x^2$.

::mc
$N(t)$ là số người dùng một ứng dụng (nghìn người) sau $t$ tháng, và $N'(5)=12$. Khẳng định nào đúng?
A. Tại thời điểm $5$ tháng, số người dùng đang tăng với tốc độ khoảng $12$ nghìn người mỗi tháng.
B. Sau $5$ tháng có $12$ nghìn người dùng.
C. Trong $5$ tháng đầu, trung bình mỗi tháng tăng $12$ nghìn người.
D. Sau $5$ tháng, số người dùng đã tăng thêm tổng cộng $12$ nghìn người.
::key A
Đạo hàm là tốc độ thay đổi tức thời tại một thời điểm. B nhầm với $N(5)$, C nhầm với tốc độ trung bình, D nhầm với lượng thay đổi.

::tf
Bác Ba dùng $120$ m lưới rào ba cạnh của một mảnh đất hình chữ nhật, cạnh thứ tư là bờ sông không cần rào. Gọi $x$ (m) là độ dài mỗi cạnh vuông góc với bờ sông.
a) Điều kiện của $x$ là $0<x<60$.
b) Diện tích mảnh đất là $S(x)=x(120-2x)$.
c) Diện tích lớn nhất khi $x=30$.
d) Diện tích lớn nhất là $3600$ m².
::key Đ Đ Đ S
a) Đúng: cạnh song song bờ sông là $120-2x>0$. b) Đúng. c) Đúng: $S'(x)=120-4x=0\iff x=30$, $S'$ đổi dấu từ $+$ sang $-$. d) Sai: $S(30)=30\cdot60=1800$ m².

::sa
Một quả bóng được ném lên với độ cao $h(t)=2+14{,}7t-4{,}9t^2$ (m) sau $t$ giây. Sau bao nhiêu giây quả bóng đạt độ cao lớn nhất?
::key 1,5
$h'(t)=14{,}7-9{,}8t=0\iff t=1{,}5$, $h'$ đổi dấu từ $+$ sang $-$.

::sa
Từ một tấm bìa hình vuông cạnh $12$ cm, cắt bốn hình vuông cạnh $x$ cm ở bốn góc rồi gấp thành hộp không nắp. Thể tích lớn nhất của hộp là bao nhiêu cm³?
::key 128
$V(x)=x(12-2x)^2$, $0<x<6$; $V'(x)=(12-2x)(12-6x)=0\iff x=2$. $V(2)=2\cdot8^2=128$.
:::
