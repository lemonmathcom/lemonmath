---
title: Giới hạn của hàm số
description: Hiểu giới hạn hàm số tại một điểm, giới hạn một phía, tại vô cực và giới hạn vô cực; tính giới hạn dạng 0/0 và vận dụng vào vận tốc tức thời.
minutes: 25
---

:::goals
- Hiểu ý nghĩa của giới hạn của hàm số tại một điểm, kể cả khi hàm số không xác định tại điểm đó.
- Tính giới hạn bằng các quy tắc và bằng cách thay giá trị, phân tích thành nhân tử hoặc nhân với biểu thức liên hợp khi gặp dạng $\dfrac00$.
- Dùng giới hạn một phía để xét sự tồn tại của giới hạn.
- Tính giới hạn tại vô cực và nhận biết giới hạn vô cực.
:::

Một vật rơi tự do (bỏ qua sức cản của không khí) từ trạng thái nghỉ. Sau $t$ giây vật đã rơi được quãng đường $s(t)=4{,}9t^2$ mét. Từ giây thứ $1$ đến giây thứ $1+h$, vận tốc trung bình là $\dfrac{s(1+h)-s(1)}{h}$.

Vận tốc của vật đúng tại thời điểm $t=1$ giây là bao nhiêu? Ta không thể đặt $h=0$ vì khi đó cả tử và mẫu đều bằng $0$. Nhưng ta có thể cho $h$ nhỏ dần và xem vận tốc trung bình tiến tới số nào. Đó là ý nghĩa của giới hạn của hàm số.

## Giới hạn hữu hạn của hàm số tại một điểm

### Khám phá: hàm số không xác định tại một điểm

Xét $f(x)=\dfrac{x^2-1}{x-1}$. Hàm số không xác định tại $x=1$ vì mẫu bằng $0$. Ta tính $f(x)$ với $x$ gần $1$:

| $x$ | $0{,}9$ | $0{,}99$ | $0{,}999$ | $1{,}001$ | $1{,}01$ | $1{,}1$ |
|---|---|---|---|---|---|---|
| $f(x)$ | $1{,}9$ | $1{,}99$ | $1{,}999$ | $2{,}001$ | $2{,}01$ | $2{,}1$ |

Khi $x$ tiến gần $1$ từ cả hai phía, $f(x)$ tiến gần $2$. Thật vậy, với $x\ne1$ ta có $f(x)=\dfrac{(x-1)(x+1)}{x-1}=x+1$: đồ thị là đường thẳng $y=x+1$ khuyết mất điểm $(1; 2)$.

:::graph Đồ thị $y=\dfrac{x^2-1}{x-1}$: đường thẳng $y=x+1$ khuyết điểm $(1; 2)$
alt: Đường thẳng y bằng x cộng 1 đi qua các điểm tương ứng, tại x bằng 1 đồ thị bị khuyết điểm có tung độ 2
x: -2..4
y: -1..5
plot: x+1
point: (1, 2) "(1; 2)" above
:::

:::definition Giới hạn hữu hạn của hàm số tại một điểm
Cho hàm số $f$ xác định trên một khoảng chứa $x_0$ (có thể trừ điểm $x_0$). Ta nói $f$ có **giới hạn** là $L$ khi $x$ dần tới $x_0$, viết $\lim\limits_{x\to x_0}f(x)=L$, nếu với mọi dãy số $(x_n)$ trong tập xác định thoả mãn $x_n\ne x_0$ và $\lim x_n=x_0$ thì $\lim f(x_n)=L$.
:::

Giới hạn tại $x_0$ chỉ phụ thuộc vào giá trị của $f(x)$ với $x$ gần $x_0$ và khác $x_0$; nó không phụ thuộc vào việc $f(x_0)$ có xác định hay bằng bao nhiêu.

:::theorem Quy tắc tính giới hạn
1. $\lim\limits_{x\to x_0}c=c$ và $\lim\limits_{x\to x_0}x=x_0$.
2. Nếu $\lim\limits_{x\to x_0}f(x)=L$ và $\lim\limits_{x\to x_0}g(x)=M$ thì
$$\lim(f\pm g)=L\pm M,\quad\lim(fg)=LM,\quad\lim\dfrac fg=\dfrac LM\ (M\ne0).$$
3. Với đa thức $P$ thì $\lim\limits_{x\to x_0}P(x)=P(x_0)$; với phân thức $\dfrac{P(x)}{Q(x)}$ mà $Q(x_0)\ne0$ thì $\lim\limits_{x\to x_0}\dfrac{P(x)}{Q(x)}=\dfrac{P(x_0)}{Q(x_0)}$.
:::

Khi thay $x=x_0$ cho dạng $\dfrac00$ ta chưa biết giới hạn. Ta biến đổi (phân tích thành nhân tử rồi rút gọn, hoặc nhân với biểu thức liên hợp) để khử thừa số làm tử và mẫu cùng bằng $0$.

:::example Vận tốc tức thời của vật rơi tự do
Vật rơi tự do có $s(t)=4{,}9t^2$ (mét). Tính giới hạn của vận tốc trung bình trên đoạn $[1; 1+h]$ khi $h\to0$.

**Hiểu đề.** Vận tốc trung bình là $\dfrac{s(1+h)-s(1)}{h}$ với $h\ne0$; ta cần $\lim\limits_{h\to0}$ của nó.

**Tìm cách giải.** Thay $h=0$ cho dạng $\dfrac00$, nên ta khai triển tử số, rút gọn $h$ rồi mới cho $h\to0$.

**Giải.** Với $h\ne0$ ta có
$$\dfrac{s(1+h)-s(1)}{h}=\dfrac{4{,}9(1+h)^2-4{,}9}{h}=\dfrac{4{,}9(2h+h^2)}{h}=4{,}9(2+h)=9{,}8+4{,}9h.$$
Khi $h\to0$, $9{,}8+4{,}9h\to9{,}8$.

Vậy vận tốc tức thời tại $t=1$ giây là $9{,}8$ m/s.

**Nhìn lại.** Với $h=0{,}1$ vận tốc trung bình là $9{,}8+0{,}49=10{,}29$ m/s; với $h=0{,}001$ là $9{,}80490$ m/s: tiến dần tới $9{,}8$. Số $9{,}8$ trùng với gia tốc trọng trường $g$ vì vật rơi từ nghỉ sau $1$ giây có vận tốc $gt=9{,}8$ m/s. Đây là ví dụ đầu tiên của khái niệm đạo hàm, sẽ học ở bài sau.
:::

:::example Thay giá trị trực tiếp
Tính a) $\lim\limits_{x\to2}(x^2+3x-1)$; b) $\lim\limits_{x\to3}\dfrac{x+1}{x^2-2}$.

**Lời giải.** a) Đa thức nên thay $x=2$: $4+6-1=9$.

b) Mẫu số tại $x=3$ là $9-2=7\ne0$ nên thay $x=3$: $\dfrac{3+1}{9-2}=\dfrac47$.

Vậy a) $9$; b) $\dfrac47$.
:::

:::example Dạng $\dfrac00$: phân tích thành nhân tử
Tính a) $\lim\limits_{x\to2}\dfrac{x^2-4}{x-2}$; b) $\lim\limits_{x\to1}\dfrac{x^2-3x+2}{x^2-1}$.

**Lời giải.** a) Thay $x=2$ cho dạng $\dfrac00$. Với $x\ne2$: $\dfrac{x^2-4}{x-2}=\dfrac{(x-2)(x+2)}{x-2}=x+2\to4$.

b) Thay $x=1$ cho dạng $\dfrac00$. Với $x\ne1$: $\dfrac{x^2-3x+2}{x^2-1}=\dfrac{(x-1)(x-2)}{(x-1)(x+1)}=\dfrac{x-2}{x+1}\to\dfrac{1-2}{1+1}=-\dfrac12$.

Vậy a) $4$; b) $-\dfrac12$.
:::

:::example Dạng $\dfrac00$: nhân với biểu thức liên hợp
Tính $\lim\limits_{x\to0}\dfrac{\sqrt{x+4}-2}{x}$.

**Lời giải.** Thay $x=0$ cho dạng $\dfrac00$. Nhân tử và mẫu với $\sqrt{x+4}+2$:
$$\dfrac{\sqrt{x+4}-2}{x}=\dfrac{(x+4)-4}{x\left(\sqrt{x+4}+2\right)}=\dfrac{1}{\sqrt{x+4}+2}\to\dfrac{1}{2+2}=\dfrac14.$$
Vậy giới hạn bằng $\dfrac14$.
:::

## Giới hạn một phía

Đôi khi $f(x)$ tiến tới những số khác nhau khi $x$ tiến tới $x_0$ từ bên phải và từ bên trái. Khi đó ta xét giới hạn một phía: $\lim\limits_{x\to x_0^+}f(x)$ (với $x>x_0$) và $\lim\limits_{x\to x_0^-}f(x)$ (với $x<x_0$).

:::theorem Giới hạn và giới hạn một phía
$\lim\limits_{x\to x_0}f(x)=L$ khi và chỉ khi $\lim\limits_{x\to x_0^+}f(x)=\lim\limits_{x\to x_0^-}f(x)=L$.
:::

:::example Cước phí gửi hàng
Giả sử cước phí gửi một bưu phẩm nặng $x$ kg là $f(x)=20$ (nghìn đồng) nếu $0<x\le1$ và $f(x)=30$ nếu $1<x\le2$. Xét giới hạn của $f(x)$ khi $x\to1$. So sánh với hàm $g(x)=x+1$ nếu $x<1$ và $g(x)=3-x$ nếu $x\ge1$ khi $x\to1$.

**Lời giải.** Với $f$: khi $x\to1^-$ ta có $0<x\le1$ nên $f(x)=20$, giới hạn trái là $20$; khi $x\to1^+$ ta có $1<x\le2$ nên $f(x)=30$, giới hạn phải là $30$. Hai giới hạn khác nhau nên $\lim\limits_{x\to1}f(x)$ không tồn tại.

Với $g$: khi $x\to1^-$, $g(x)=x+1\to2$; khi $x\to1^+$, $g(x)=3-x\to2$. Hai giới hạn bằng nhau nên $\lim\limits_{x\to1}g(x)=2$.

Vậy $f$ không có giới hạn tại $1$ (cước phí nhảy bậc), còn $g$ có giới hạn là $2$.
:::

## Giới hạn tại vô cực và giới hạn vô cực

Ta cũng xét $x$ lớn không giới hạn: $\lim\limits_{x\to+\infty}f(x)=L$ nếu $f(x)\to L$ với mọi dãy $x_n\to+\infty$; tương tự khi $x\to-\infty$.

:::theorem Các giới hạn cơ bản
1. $\lim\limits_{x\to\pm\infty}\dfrac{1}{x^k}=0$ với $k>0$ nguyên dương (và $\lim\limits_{x\to+\infty}x^k=+\infty$).
2. $\lim\limits_{x\to x_0^+}\dfrac{1}{x-x_0}=+\infty$ và $\lim\limits_{x\to x_0^-}\dfrac{1}{x-x_0}=-\infty$.
3. Với phân thức theo $x$ khi $x\to\pm\infty$, chia tử và mẫu cho luỹ thừa cao nhất của $x$.
:::

:::example Giới hạn tại vô cực và giới hạn vô cực
Tính a) $\lim\limits_{x\to+\infty}\dfrac{2x^2+x}{x^2+3}$; b) $\lim\limits_{x\to1^+}\dfrac{1}{x-1}$ và $\lim\limits_{x\to1^-}\dfrac{1}{x-1}$.

**Lời giải.** a) Chia tử và mẫu cho $x^2$: $\dfrac{2+\frac1x}{1+\frac3{x^2}}\to\dfrac{2+0}{1+0}=2$.

b) Khi $x\to1^+$, $x-1$ dương và tiến tới $0$ nên $\dfrac{1}{x-1}\to+\infty$. Khi $x\to1^-$, $x-1$ âm và tiến tới $0$ nên $\dfrac{1}{x-1}\to-\infty$.

Vậy a) $2$; b) giới hạn phải là $+\infty$, giới hạn trái là $-\infty$, nên giới hạn tại $1$ không tồn tại.
:::

**Kết nối.** Giới hạn hàm số mở rộng giới hạn dãy số ở bài trước: định nghĩa dùng chính giới hạn của dãy $f(x_n)$. Bài toán vận tốc tức thời ở đầu bài, giới hạn của $\dfrac{s(1+h)-s(1)}{h}$ khi $h\to0$, chính là đạo hàm của $s$ tại $t=1$. Giới hạn cũng cho phép nói hàm số liên tục: không bị "đứt" tại một điểm.

:::warning Những sai lầm thường gặp
- **Cho rằng hàm số không xác định tại $x_0$ thì không có giới hạn tại $x_0$.** Sai: $f(x)=\dfrac{x^2-1}{x-1}$ không xác định tại $1$ nên không có giới hạn tại $1$. Vì sao sai: giới hạn chỉ xét các giá trị $x$ gần $x_0$ và khác $x_0$. Đúng: $\lim\limits_{x\to1}f(x)=2$.
- **Coi dạng $\dfrac00$ là bằng $0$ hoặc không tồn tại.** Sai: $\lim\limits_{x\to2}\dfrac{x^2-4}{x-2}=\dfrac00=0$. Vì sao sai: $\dfrac00$ là dạng chưa xác định, cần biến đổi. Đúng: rút gọn $\dfrac{(x-2)(x+2)}{x-2}=x+2\to4$.
- **Bỏ qua giới hạn một phía.** Sai: hàm $\dfrac{|x|}{x}$ có giới hạn bằng $1$ tại $0$. Vì sao sai: giới hạn phải bằng $1$ nhưng giới hạn trái bằng $-1$. Đúng: giới hạn hai phía khác nhau nên không tồn tại giới hạn.
- **Viết $\lim\limits_{x\to0}\dfrac1x=+\infty$.** Sai: $\dfrac1x\to+\infty$ khi $x\to0$. Vì sao sai: $x\to0^-$ cho $\dfrac1x\to-\infty$. Đúng: chỉ có $\lim\limits_{x\to0^+}\dfrac1x=+\infty$; giới hạn tại $0$ không tồn tại.
:::

## Thuật ngữ

:::terms
- giới hạn của hàm số | limit of a function
- giới hạn một phía | one-sided limit
- giới hạn bên trái | left-hand limit
- giới hạn bên phải | right-hand limit
- giới hạn tại vô cực | limit at infinity
- giới hạn vô cực | infinite limit
- dạng chưa xác định | indeterminate form
- biểu thức liên hợp | conjugate expression
- vận tốc tức thời | instantaneous velocity
:::

## Tóm tắt

- $\lim\limits_{x\to x_0}f(x)=L$ nếu mọi dãy $x_n\to x_0$ ($x_n\ne x_0$) cho $f(x_n)\to L$; giới hạn không phụ thuộc $f(x_0)$.
- Giới hạn của tổng, hiệu, tích, thương bằng tổng, hiệu, tích, thương các giới hạn (thương cần mẫu có giới hạn khác $0$).
- Với đa thức và phân thức có mẫu khác $0$ tại $x_0$, thay $x=x_0$.
- Dạng $\dfrac00$: phân tích thành nhân tử rồi rút gọn, hoặc nhân với biểu thức liên hợp.
- Giới hạn tồn tại khi và chỉ khi giới hạn trái bằng giới hạn phải.
- $\lim\limits_{x\to\pm\infty}\dfrac1{x^k}=0$; phân thức khi $x\to\pm\infty$: chia cho luỹ thừa cao nhất; $\lim\limits_{x\to x_0^\pm}\dfrac{1}{x-x_0}=\pm\infty$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính a) $\lim\limits_{x\to3}(x^2-2x+1)$; b) $\lim\limits_{x\to-1}\dfrac{2x+3}{x^2+2}$.

::hint
**Kiến thức:** đa thức và phân thức có mẫu khác $0$: thay $x=x_0$.

**Gợi ý các bước:**
1. Thay giá trị $x_0$.
2. Với câu b, kiểm tra mẫu khác $0$.

::solution
a) $9-6+1=4$. b) Mẫu tại $x=-1$ là $1+2=3\ne0$ nên $\dfrac{2(-1)+3}{3}=\dfrac13$.

**Đáp số.** a) $4$; b) $\dfrac13$.
:::

:::exercise
Tính a) $\lim\limits_{x\to3}\dfrac{x^2-9}{x-3}$; b) $\lim\limits_{x\to2}\dfrac{x^2-5x+6}{x-2}$.

::hint
**Kiến thức:** dạng $\dfrac00$: phân tích thành nhân tử rồi rút gọn.

**Gợi ý các bước:**
1. Phân tích tử số.
2. Rút gọn thừa số chung rồi thay $x_0$.

::solution
a) $\dfrac{(x-3)(x+3)}{x-3}=x+3\to6$. b) $\dfrac{(x-2)(x-3)}{x-2}=x-3\to-1$.

**Đáp số.** a) $6$; b) $-1$.
:::

:::exercise
Tính $\lim\limits_{x\to0}\dfrac{\sqrt{x+1}-1}{x}$.

::hint
**Kiến thức:** nhân tử và mẫu với biểu thức liên hợp $\sqrt{x+1}+1$.

**Gợi ý các bước:**
1. Dùng $(a-b)(a+b)=a^2-b^2$.
2. Rút gọn $x$ rồi thay $x=0$.

::solution
$\dfrac{\sqrt{x+1}-1}{x}=\dfrac{(x+1)-1}{x\left(\sqrt{x+1}+1\right)}=\dfrac{1}{\sqrt{x+1}+1}\to\dfrac12$.

**Đáp số.** $\dfrac12$.
:::

:::exercise
Tính a) $\lim\limits_{x\to+\infty}\dfrac{3x^2-x+1}{x^2+2}$; b) $\lim\limits_{x\to+\infty}\dfrac{x+1}{x^2+1}$.

::hint
**Kiến thức:** chia tử và mẫu cho luỹ thừa cao nhất của $x$.

**Gợi ý các bước:**
1. Câu a: chia cho $x^2$.
2. Câu b: chia cho $x^2$ và để ý bậc.

::solution
a) $\dfrac{3-\frac1x+\frac1{x^2}}{1+\frac2{x^2}}\to3$. b) $\dfrac{\frac1x+\frac1{x^2}}{1+\frac1{x^2}}\to0$.

**Đáp số.** a) $3$; b) $0$.
:::

:::exercise
Với vật rơi tự do $s(t)=4{,}9t^2$ (mét), tính vận tốc tức thời tại $t=2$ giây bằng cách tính giới hạn của vận tốc trung bình trên đoạn $[2; 2+h]$ khi $h\to0$.

::hint
**Kiến thức:** $\dfrac{s(2+h)-s(2)}{h}$, rút gọn $h$ trước khi cho $h\to0$.

**Gợi ý các bước:**
1. Khai triển $(2+h)^2=4+4h+h^2$.
2. Rút gọn rồi lấy giới hạn.

::solution
$\dfrac{4{,}9(2+h)^2-4{,}9\cdot4}{h}=\dfrac{4{,}9(4h+h^2)}{h}=4{,}9(4+h)=19{,}6+4{,}9h\to19{,}6$.

**Đáp số.** $19{,}6$ m/s.
:::

:::exercise
Xét hàm số $f(x)=\dfrac{|x-2|}{x-2}$. Tính $\lim\limits_{x\to2^+}f(x)$, $\lim\limits_{x\to2^-}f(x)$ và cho biết có tồn tại $\lim\limits_{x\to2}f(x)$ không.

::hint
**Kiến thức:** $|x-2|=x-2$ khi $x>2$ và $|x-2|=-(x-2)$ khi $x<2$.

**Gợi ý các bước:**
1. Rút gọn $f(x)$ trên từng phía.
2. So sánh hai giới hạn một phía.

::solution
Khi $x>2$, $f(x)=1$ nên giới hạn phải là $1$. Khi $x<2$, $f(x)=-1$ nên giới hạn trái là $-1$. Hai giới hạn khác nhau nên $\lim\limits_{x\to2}f(x)$ không tồn tại.

**Đáp số.** $1$ và $-1$; không tồn tại giới hạn tại $2$.
:::

:::exercise
Cho hàm số $f(x)=\dfrac{x^2-1}{x-1}$. Xét tính đúng sai của các mệnh đề sau:

a) $f$ xác định tại $x=1$.

b) $\lim\limits_{x\to1}f(x)=2$.

c) $\lim\limits_{x\to0}f(x)=1$.

d) $\lim\limits_{x\to+\infty}f(x)=1$.

::hint
**Kiến thức:** với $x\ne1$, $f(x)=x+1$.

**Gợi ý các bước:**
1. Rút gọn $f(x)$.
2. Tính các giới hạn của $x+1$.

::solution
a) **Sai**: mẫu bằng $0$ tại $x=1$.

b) **Đúng**: $x+1\to2$.

c) **Đúng**: $x+1\to1$ khi $x\to0$.

d) **Sai**: $x+1\to+\infty$.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Tính $\lim\limits_{x\to2}\dfrac{x^3-8}{x-2}$.

::hint
**Kiến thức:** $x^3-8=(x-2)(x^2+2x+4)$.

**Gợi ý các bước:**
1. Phân tích tử số.
2. Rút gọn rồi thay $x=2$.

::solution
$\dfrac{(x-2)(x^2+2x+4)}{x-2}=x^2+2x+4\to4+4+4=12$.

**Đáp số.** $12$.
:::

:::exercise Ôn tập
Dùng định nghĩa giới hạn của hàm số qua dãy số và giới hạn của dãy số ở bài trước, chứng tỏ $\lim\limits_{x\to2}x^2=4$ bằng cách xét dãy $x_n=2+\dfrac1n$.

::hint
**Kiến thức:** $\lim x_n=2$ và tính $f(x_n)=x_n^2$; $\lim\dfrac1n=0$.

**Gợi ý các bước:**
1. Tính $x_n^2$.
2. Lấy giới hạn của dãy.

::solution
Dãy $x_n=2+\dfrac1n\ne2$ có $\lim x_n=2$. Ta có $f(x_n)=\left(2+\dfrac1n\right)^2=4+\dfrac4n+\dfrac1{n^2}\to4$. Kết quả như nhau với mọi dãy $x_n\to2$ (theo quy tắc giới hạn của tích), nên $\lim\limits_{x\to2}x^2=4$.

**Đáp số.** $\lim\limits_{x\to2}x^2=4$.
:::

:::exercise Thử thách
Tính $\lim\limits_{x\to0}\dfrac{\sqrt{1+x}-\sqrt{1-x}}{x}$.

::hint
**Kiến thức:** nhân tử và mẫu với $\sqrt{1+x}+\sqrt{1-x}$.

**Gợi ý các bước:**
1. Tử số thành $(1+x)-(1-x)=2x$.
2. Rút gọn $x$.

::solution
$\dfrac{\sqrt{1+x}-\sqrt{1-x}}{x}=\dfrac{(1+x)-(1-x)}{x\left(\sqrt{1+x}+\sqrt{1-x}\right)}=\dfrac{2}{\sqrt{1+x}+\sqrt{1-x}}\to\dfrac{2}{1+1}=1$.

**Đáp số.** $1$.
:::

## Kiểm tra mini

:::quiz
::mc
$\lim\limits_{x\to2}\dfrac{x^2+1}{x-1}$ bằng
A. $3$.
B. $5$.
C. $+\infty$.
D. $1$.
::key B
Mẫu tại $x=2$ khác $0$ nên thay $x=2$: $\dfrac{4+1}{2-1}=5$.

::mc
$\lim\limits_{x\to3}\dfrac{x^2-9}{x-3}$ bằng
A. $0$.
B. $3$.
C. $6$.
D. không tồn tại.
::key C
$\dfrac{x^2-9}{x-3}=x+3\to6$. Phương án A coi dạng $\dfrac00$ bằng $0$.

::mc
$\lim\limits_{x\to+\infty}\dfrac{2x+1}{x-3}$ bằng
A. $1$.
B. $+\infty$.
C. $-3$.
D. $2$.
::key D
Chia tử và mẫu cho $x$: $\dfrac{2+\frac1x}{1-\frac3x}\to2$.

::mc
$\lim\limits_{x\to0^+}\dfrac1x$ bằng
A. $+\infty$.
B. $-\infty$.
C. $0$.
D. $1$.
::key A
Với $x>0$ nhỏ dần, $\dfrac1x$ dương và lớn không giới hạn. Phương án B là giới hạn khi $x\to0^-$.

::tf
Cho hàm số $g(x)=x+2$ nếu $x<1$ và $g(x)=4-x$ nếu $x\ge1$. Xét tính đúng sai của các mệnh đề sau:
a) $\lim\limits_{x\to1^-}g(x)=3$.
b) $\lim\limits_{x\to1^+}g(x)=4$.
c) $\lim\limits_{x\to1}g(x)=3$.
d) $g(1)=4$.
::key Đ S Đ S
a) Đúng: $x+2\to3$. b) Sai: $4-x\to3$. c) Đúng: hai giới hạn một phía cùng bằng $3$. d) Sai: $g(1)=4-1=3$.

::sa
Tính $\lim\limits_{x\to1}\dfrac{x^2-1}{x-1}$.
::key 2
$\dfrac{x^2-1}{x-1}=x+1\to2$.

::sa
Tính $\lim\limits_{x\to+\infty}\dfrac{5x^2+1}{x^2-2}$.
::key 5
Chia cho $x^2$: $\dfrac{5+\frac1{x^2}}{1-\frac2{x^2}}\to5$.
:::
