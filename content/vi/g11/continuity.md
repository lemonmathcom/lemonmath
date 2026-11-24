---
title: Hàm số liên tục
description: Hiểu hàm số liên tục tại một điểm và trên một khoảng, xét hàm cho bởi nhiều công thức, và dùng tính chất giá trị trung gian để tìm nghiệm phương trình.
minutes: 25
---

:::goals
- Hiểu và phát biểu được định nghĩa hàm số liên tục tại một điểm, trên một khoảng, trên một đoạn.
- Xét tính liên tục của hàm số cho bởi nhiều công thức bằng giới hạn một bên.
- Nhận biết các hàm số đa thức, phân thức hữu tỉ, lượng giác liên tục trên tập xác định và dùng các phép toán về hàm số liên tục.
- Dùng tính chất giá trị trung gian để chứng minh phương trình có nghiệm và tìm khoảng chứa nghiệm.
- Giải thích được một số tình huống thực tế bằng tính liên tục hoặc gián đoạn của hàm số.
:::

Giả sử một công ty chuyển phát tính phí theo khối lượng $x$ (kg) của kiện hàng: $20$ nghìn đồng nếu $0<x\le1$, $30$ nghìn đồng nếu $1<x\le2$ và $40$ nghìn đồng nếu $2<x\le3$. Đồ thị của hàm phí bị đứt thành những đoạn rời nhau. Ngược lại, nhiệt độ trong phòng thay đổi suốt cả ngày, và ta vẽ đồ thị của nó bằng một nét liền.

Sự khác nhau giữa "đứt" và "liền" có phải chỉ là chuyện hình vẽ không? Hay có thể nói nó bằng ngôn ngữ giới hạn mà bạn vừa học? Câu trả lời cho ta một công cụ rất mạnh: nếu một hàm số "liền nét" đổi dấu thì đồ thị buộc phải cắt trục hoành.

:::graph Phí chuyển phát (nghìn đồng) theo khối lượng $x$ (kg)
alt: Đồ thị gồm ba đoạn nằm ngang ở độ cao 20, 30, 40 trên các khoảng từ 0 đến 1, từ 1 đến 2 và từ 2 đến 3; đầu mút trái của mỗi đoạn là điểm rỗng, đầu mút phải là điểm đặc, nên đồ thị bị đứt ở x = 1 và x = 2
x: 0..4
y: 0..50
segment: (0, 20) (1, 20)
segment: (1, 30) (2, 30)
segment: (2, 40) (3, 40)
open: (0, 20) "" left
open: (1, 30) "" above
open: (2, 40) "" above
point: (1, 20) "20" below
point: (2, 30) "30" below
point: (3, 40) "40" below
:::

## Khám phá: "liền" và "đứt" nhìn bằng giới hạn

Gọi $f(x)$ là hàm phí ở trên và $g(x)=x^2$. Ta so sánh các giá trị của hai hàm số khi $x$ tiến gần tới $1$ từ hai phía.

| $x$ | $0{,}9$ | $0{,}99$ | $1$ | $1{,}01$ | $1{,}1$ |
|---|---|---|---|---|---|
| $f(x)$ | $20$ | $20$ | $20$ | $30$ | $30$ |
| $g(x)=x^2$ | $0{,}81$ | $0{,}9801$ | $1$ | $1{,}0201$ | $1{,}21$ |

Với $f$, giá trị bên trái $x=1$ luôn là $20$ còn bên phải luôn là $30$. Ta có $\lim_{x\to1^-}f(x)=20$ và $\lim_{x\to1^+}f(x)=30$, hai giới hạn này khác nhau, nên $f$ không có giới hạn khi $x\to1$. Đồ thị bị đứt ngay tại $x=1$.

Với $g$, các giá trị ở hai phía đều dồn về $1$, và $1$ chính là $g(1)$. Ta có $\lim_{x\to1}g(x)=1=g(1)$. Đồ thị đi qua $x=1$ mà không bị gián đoạn.

Vậy "đồ thị liền nét tại $x_0$" nghĩa là: khi $x$ tiến tới $x_0$ thì $f(x)$ tiến tới đúng giá trị $f(x_0)$.

## Hàm số liên tục tại một điểm

:::definition Hàm số liên tục tại một điểm
Cho hàm số $y=f(x)$ xác định trên khoảng $K$ và $x_0\in K$. Hàm số $f$ **liên tục tại** $x_0$ nếu
$$\lim_{x\to x_0}f(x)=f(x_0).$$
Nếu $f$ không liên tục tại $x_0$ thì ta nói $f$ **gián đoạn** tại $x_0$.
:::

**Hiểu sâu hơn.** Đẳng thức trong định nghĩa gồm ba điều kiện cùng lúc: $f(x_0)$ có nghĩa; giới hạn $\lim_{x\to x_0}f(x)$ tồn tại, tức là giới hạn trái và giới hạn phải bằng nhau; và hai số đó bằng nhau. Chỉ cần một điều kiện sai là hàm số gián đoạn. Ở ví dụ phí chuyển phát, điều kiện thứ hai sai tại $x=1$. Ở ví dụ sau, ta sẽ thấy một hàm số có giới hạn nhưng vẫn gián đoạn vì điều kiện thứ ba sai.

:::definition Hàm số liên tục trên một khoảng, một đoạn
- Hàm số $f$ **liên tục trên khoảng** $(a; b)$ nếu nó liên tục tại mọi điểm của khoảng đó.
- Hàm số $f$ **liên tục trên đoạn** $[a; b]$ nếu nó liên tục trên $(a; b)$ và $\lim_{x\to a^+}f(x)=f(a)$, $\lim_{x\to b^-}f(x)=f(b)$.
:::

Hai điều kiện ở hai đầu mút của đoạn chỉ dùng giới hạn một bên, vì ta không thể tiến tới $a$ từ bên trái $a$ trong phạm vi của đoạn. Đồ thị của hàm số liên tục trên một khoảng là một nét liền trên khoảng đó.

Ta bắt đầu với một hàm số có "lỗ thủng" ở đồ thị.

:::example Hàm số có giới hạn nhưng vẫn gián đoạn
Xét hàm số $f(x)=\dfrac{x^2-4}{x-2}$ khi $x\neq2$. Xét tính liên tục của $f$ tại $x=2$ trong hai trường hợp:

a) $f(2)=3$.

b) $f(2)=4$.

**Lời giải.** Với $x\neq2$, ta rút gọn phân thức rồi tìm giới hạn:

$$\lim_{x\to2}\frac{x^2-4}{x-2}=\lim_{x\to2}\frac{(x-2)(x+2)}{x-2}=\lim_{x\to2}(x+2)=4.$$

a) Ta có $f(2)=3\neq4=\lim_{x\to2}f(x)$. Vậy $f$ gián đoạn tại $x=2$.

b) Ta có $f(2)=4=\lim_{x\to2}f(x)$. Vậy $f$ liên tục tại $x=2$.
:::

:::graph Đồ thị của $f$ khi $f(2)=3$
alt: Đường thẳng y = x + 2 bị thủng tại điểm (2; 4), điểm rỗng, và có thêm một điểm đặc cô lập (2; 3)
x: -1..5
y: -1..7
plot: x+2
open: (2, 4) "" above-left
point: (2, 3) "f(2) = 3" below-right
:::

Trường hợp a) cho thấy đồ thị "tự đứt" dù giới hạn tồn tại: chỉ cần đổi giá trị tại một điểm là mất tính liên tục. Bây giờ ta xét hàm số cho bởi hai công thức, nơi giới hạn một bên là công cụ chính.

:::example Hàm số cho bởi hai công thức
Xét tính liên tục của hàm số
$$f(x)=\begin{cases}x^2+1&\text{nếu }x\le1,\\3x+1&\text{nếu }x>1\end{cases}$$
tại $x=1$.

**Lời giải.** Ta có $f(1)=1^2+1=2$. Tính hai giới hạn một bên:

$$\lim_{x\to1^-}f(x)=\lim_{x\to1^-}(x^2+1)=2,\qquad\lim_{x\to1^+}f(x)=\lim_{x\to1^+}(3x+1)=4.$$

Hai giới hạn khác nhau nên không tồn tại $\lim_{x\to1}f(x)$.

Vậy hàm số $f$ gián đoạn tại $x=1$.
:::

## Các hàm số liên tục thường gặp

Việc kiểm tra định nghĩa cho từng điểm sẽ rất dài. May mắn là các hàm số quen thuộc đều liên tục trên tập xác định của chúng.

:::theorem Tính liên tục của các hàm số thường gặp
- Hàm số đa thức liên tục trên $\mathbb{R}$.
- Hàm số phân thức hữu tỉ và các hàm số lượng giác $y=\sin x$, $y=\cos x$, $y=\tan x$, $y=\cot x$ liên tục trên từng khoảng của tập xác định.
- Nếu $f$ và $g$ liên tục tại $x_0$ thì $f+g$, $f-g$, $f\cdot g$ cũng liên tục tại $x_0$; và $\dfrac{f}{g}$ liên tục tại $x_0$ nếu $g(x_0)\neq0$.
:::

**Vì sao?** Với đa thức $P(x)$, các quy tắc tính giới hạn cho $\lim_{x\to x_0}x^k=x_0^k$, rồi giới hạn của tổng và tích cho $\lim_{x\to x_0}P(x)=P(x_0)$. Phân thức $\dfrac{P(x)}{Q(x)}$ chính là thương của hai đa thức liên tục, nên nó liên tục tại mọi điểm mà $Q(x_0)\neq0$, tức là mọi điểm của tập xác định.

Chú ý rằng "liên tục trên tập xác định" không có nghĩa đồ thị liền nét trên cả đường thẳng: tập xác định có thể gồm nhiều khoảng rời nhau.

:::example Liên tục trên các khoảng của tập xác định
Hàm số $f(x)=\dfrac{x+1}{x^2-5x+6}$ liên tục trên những khoảng nào?

**Lời giải.** Ta có $x^2-5x+6=(x-2)(x-3)$. Điều kiện xác định: $x\neq2$ và $x\neq3$.

Tập xác định là $\mathbb{R}\setminus\{2; 3\}$. Hàm số phân thức hữu tỉ liên tục trên từng khoảng của tập xác định.

Vậy $f$ liên tục trên các khoảng $(-\infty; 2)$, $(2; 3)$ và $(3; +\infty)$.
:::

Một loại hàm số khác xuất hiện hằng ngày là hàm tính tiền theo từng bậc. Bài toán sau cũng dùng đủ bốn bước của việc giải toán.

:::example Vận dụng: hóa đơn điện theo bậc thang
Giả sử một công ty điện lực (số liệu tự nghĩ, không phải biểu giá thật của EVN) tính tiền điện như sau: $2$ nghìn đồng cho mỗi kWh trong $50$ kWh đầu, $2{,}5$ nghìn đồng cho mỗi kWh từ kWh thứ $51$ đến kWh thứ $100$, và $3$ nghìn đồng cho mỗi kWh từ kWh thứ $101$ trở đi. Gọi $T(x)$ (nghìn đồng) là số tiền điện khi dùng $x$ kWh.

a) Viết công thức của $T(x)$.

b) Xét tính liên tục của $T$ tại $x=50$ và $x=100$.

c) Tính số tiền điện khi dùng $80$ kWh.

**Lời giải.**

*Hiểu đề.* Mỗi bậc chỉ áp dụng cho phần điện thuộc bậc đó. Cần một công thức cho từng đoạn của $x$, rồi xem hai đoạn có "khớp" nhau không.

*Tìm cách giải.* Số tiền ở cuối mỗi bậc là số tiền đã trả cho các bậc trước đó, cộng với phần của bậc đang xét. Tại chỗ nối giữa hai bậc, ta so sánh giới hạn trái, giới hạn phải và giá trị của hàm số.

*Giải.* a) Với $0\le x\le50$: $T(x)=2x$, và $T(50)=100$.

Với $50<x\le100$: $T(x)=100+2{,}5(x-50)=2{,}5x-25$, và $T(100)=225$.

Với $x>100$: $T(x)=225+3(x-100)=3x-75$.

b) Tại $x=50$: $T(50)=100$, $\lim_{x\to50^-}2x=100$ và $\lim_{x\to50^+}(2{,}5x-25)=100$. Ba giá trị này bằng nhau nên $T$ liên tục tại $x=50$.

Tại $x=100$: $T(100)=225$, $\lim_{x\to100^-}(2{,}5x-25)=225$ và $\lim_{x\to100^+}(3x-75)=225$. Vậy $T$ liên tục tại $x=100$.

c) Vì $50<80\le100$ nên $T(80)=2{,}5\cdot80-25=175$.

Vậy hàm $T$ liên tục tại $x=50$ và $x=100$, và khi dùng $80$ kWh phải trả $175$ nghìn đồng.

*Nhìn lại.* Nếu công ty áp giá $2{,}5$ nghìn đồng cho **toàn bộ** lượng điện khi vượt $50$ kWh thì hàm tiền điện sẽ là $2{,}5x$ với $x>50$. Khi đó dùng $50$ kWh trả $100$ nghìn đồng, còn $51$ kWh phải trả $127{,}5$ nghìn đồng: chỉ thêm $1$ kWh mà tiền tăng $27{,}5$ nghìn đồng, và hàm số gián đoạn tại $x=50$. Cách tính theo bậc thang làm cho hóa đơn tăng "êm": tăng một lượng điện nhỏ thì tiền chỉ tăng một lượng nhỏ.
:::

## Tính chất giá trị trung gian

Nhiệt độ ban đầu là $18\,^\circ\text{C}$, về sau là $30\,^\circ\text{C}$, và nhiệt độ thay đổi liên tục. Khi đó chắc chắn có lúc nhiệt độ đúng bằng $25\,^\circ\text{C}$. Nhận xét đó đúng cho mọi hàm số liên tục.

:::theorem Tính chất giá trị trung gian
Nếu hàm số $y=f(x)$ liên tục trên đoạn $[a; b]$ và $f(a)\cdot f(b)<0$ thì phương trình $f(x)=0$ có ít nhất một nghiệm trong khoảng $(a; b)$.
:::

**Vì sao?** Điều kiện $f(a)f(b)<0$ nghĩa là hai điểm đầu mút của đồ thị nằm ở hai phía của trục hoành. Đồ thị của hàm số liên tục là một nét liền, không nhấc bút, nên nét vẽ từ phía này sang phía kia buộc phải cắt trục hoành ít nhất một lần.

**Hiểu sâu hơn.** Điều kiện "liên tục" là không thể bỏ. Hàm số $f(x)=-1$ khi $x<0$ và $f(x)=1$ khi $x\ge0$ có $f(-1)f(1)=-1<0$, nhưng $f(x)=0$ vô nghiệm, vì $f$ gián đoạn tại $0$. Ngược lại, tính chất chỉ cho biết **có** nghiệm, không nói **có bao nhiêu** nghiệm.

:::example Chứng minh phương trình có nghiệm
Chứng minh rằng phương trình $x^3-3x+1=0$ có ba nghiệm phân biệt.

**Lời giải.** Đặt $f(x)=x^3-3x+1$. Hàm số $f$ là đa thức nên liên tục trên $\mathbb{R}$. Ta tính một vài giá trị:

$$f(-2)=-1,\quad f(-1)=3,\quad f(0)=1,\quad f(1)=-1,\quad f(2)=3.$$

Ta có $f(-2)f(-1)=-3<0$ nên phương trình có nghiệm trong $(-2; -1)$.

Ta có $f(0)f(1)=-1<0$ nên phương trình có nghiệm trong $(0; 1)$.

Ta có $f(1)f(2)=-3<0$ nên phương trình có nghiệm trong $(1; 2)$.

Ba khoảng này đôi một không giao nhau, nên đó là ba nghiệm phân biệt.

Vậy phương trình $x^3-3x+1=0$ có ít nhất ba nghiệm phân biệt. Vì phương trình bậc ba có không quá ba nghiệm nên nó có đúng ba nghiệm.
:::

Từ khoảng $(0; 1)$, ta thu hẹp dần để có nghiệm gần đúng: $f(0{,}3)=0{,}127>0$ và $f(0{,}4)=-0{,}136<0$, nên nghiệm nằm trong $(0{,}3; 0{,}4)$. Cứ chia đôi khoảng như vậy ta được nghiệm với độ chính xác tùy ý.

:::warning Những sai lầm thường gặp
- **Chỉ cần giới hạn tồn tại là liên tục.** Sai: $\lim_{x\to2}\dfrac{x^2-4}{x-2}=4$ nên hàm số liên tục tại $2$ (dù $f(2)=3$). Lí do sai: phải có $\lim_{x\to2}f(x)=f(2)$, tức $4=3$, điều này sai. Đúng: $f$ gián đoạn tại $2$.
- **Quên xét giới hạn một bên ở chỗ nối hai công thức.** Sai: hàm số có hai công thức đa thức nên luôn liên tục. Lí do sai: tại chỗ nối, hai công thức có thể cho hai giá trị khác nhau. Đúng: so sánh $\lim_{x\to x_0^-}f(x)$, $\lim_{x\to x_0^+}f(x)$ và $f(x_0)$.
- **Dùng tính chất giá trị trung gian khi $f(a)f(b)>0$.** Sai: $f(1)f(2)>0$ nên phương trình vô nghiệm trong $(1; 2)$. Lí do sai: định lí chỉ cho điều kiện đủ; cùng dấu thì chưa kết luận được. Đúng: không kết luận được, cần thử thêm điểm khác.
:::

**Kết nối.** Tính liên tục dựa trên khái niệm giới hạn của hàm số bạn đã học, và nó là điều kiện cần cho những bài sau: hàm số có đạo hàm tại một điểm thì phải liên tục tại điểm đó (xem bài [đạo hàm](lesson:derivative-definition)), và các hàm số mũ, lôgarit trong bài [hàm số mũ và hàm số lôgarit](lesson:exp-log-functions) cũng liên tục trên tập xác định của chúng. Trong thực tế, hàm "liên tục" mô tả những đại lượng thay đổi êm (nhiệt độ, quãng đường), còn hàm "gián đoạn" mô tả những đại lượng thay đổi theo từng nấc (cước phí theo khối lượng).

## Thuật ngữ

:::terms
- hàm số liên tục tại một điểm | continuous at a point
- hàm số liên tục trên một khoảng | continuous on an interval
- gián đoạn | discontinuous
- giới hạn bên trái | left-hand limit
- giới hạn bên phải | right-hand limit
- tập xác định | domain
- đa thức | polynomial
- hàm số phân thức hữu tỉ | rational function
- tính chất giá trị trung gian | intermediate value theorem
- nghiệm của phương trình | root of an equation
:::

## Tóm tắt

- $f$ liên tục tại $x_0$ khi $\lim_{x\to x_0}f(x)=f(x_0)$: $f(x_0)$ có nghĩa, giới hạn tồn tại và hai giá trị bằng nhau.
- Với hàm số cho bởi nhiều công thức, tại chỗ nối ta so sánh giới hạn trái, giới hạn phải và giá trị của hàm số.
- Đa thức liên tục trên $\mathbb{R}$; phân thức hữu tỉ và hàm số lượng giác liên tục trên từng khoảng của tập xác định; tổng, hiệu, tích liên tục, thương liên tục khi mẫu khác $0$.
- Nếu $f$ liên tục trên $[a; b]$ và $f(a)f(b)<0$ thì $f(x)=0$ có ít nhất một nghiệm trong $(a; b)$.
- Cách tính theo bậc thang làm cho hóa đơn liên tục; cách tính theo nấc làm cho cước phí gián đoạn.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho hàm số $f(x)=x^2-3x+5$. Chứng minh rằng $f$ liên tục tại $x=2$.

::hint
**Kiến thức:** $f$ liên tục tại $x_0$ khi $\lim_{x\to x_0}f(x)=f(x_0)$.

**Gợi ý các bước:**
1. Tính $f(2)$.
2. Tính $\lim_{x\to2}f(x)$ rồi so sánh.

::solution
Hàm số $f(x)=x^2-3x+5$ là hàm đa thức nên xác định trên $\mathbb{R}$, do đó xác định tại $x=2$. Hàm số $f$ liên tục tại $x=2$ khi và chỉ khi $\lim_{x\to2}f(x)=f(2)$.

Ta có $f(2)=2^2-3\cdot2+5=4-6+5=3$.

Mặt khác, vì $f$ là hàm đa thức nên
$$\lim_{x\to2}\left(x^2-3x+5\right)=2^2-3\cdot2+5=3.$$

Suy ra $\lim_{x\to2}f(x)=3=f(2)$.

Vậy $f$ liên tục tại $x=2$.

**Đáp số.** $f$ liên tục tại $x=2$.
:::

:::exercise
Xét tính liên tục của hàm số
$$f(x)=\begin{cases}\dfrac{x^2-x-6}{x-3}&\text{nếu }x\neq3,\\4&\text{nếu }x=3\end{cases}$$
tại $x=3$.

::hint
**Kiến thức:** phân tích tử thành nhân tử để rút gọn; so sánh giới hạn với $f(3)$.

**Gợi ý các bước:**
1. Phân tích $x^2-x-6$.
2. Tìm $\lim_{x\to3}f(x)$ rồi so với $f(3)$.

::solution
Hàm số $f$ xác định tại $x=3$ với $f(3)=4$. Ta xét giới hạn của $f(x)$ khi $x\to3$ và so sánh với $f(3)$.

Với $x\neq3$, phân tích tử thức thành nhân tử:
$$\frac{x^2-x-6}{x-3}=\frac{(x-3)(x+2)}{x-3}=x+2.$$

Do đó
$$\lim_{x\to3}f(x)=\lim_{x\to3}(x+2)=5.$$

Mặt khác $f(3)=4$, nên $\lim_{x\to3}f(x)=5\neq4=f(3)$.

Vậy $f$ gián đoạn tại $x=3$.

**Đáp số.** $f$ gián đoạn tại $x=3$.
:::

:::exercise
Hàm số $f(x)=\dfrac{2x-1}{x^2-4}$ liên tục trên những khoảng nào?

::hint
**Kiến thức:** phân thức hữu tỉ liên tục trên từng khoảng của tập xác định.

**Gợi ý các bước:**
1. Tìm các giá trị làm mẫu bằng $0$.
2. Viết tập xác định dưới dạng hợp các khoảng.

::solution
Hàm số $f(x)=\dfrac{2x-1}{x^2-4}$ là hàm phân thức hữu tỉ nên liên tục trên từng khoảng thuộc tập xác định của nó.

Điều kiện xác định: $x^2-4\neq0$. Ta có $x^2-4=0\Leftrightarrow x=2$ hoặc $x=-2$.

Do đó tập xác định là $\mathbb{R}\setminus\{-2; 2\}$, gồm ba khoảng $(-\infty; -2)$, $(-2; 2)$ và $(2; +\infty)$.

Vậy $f$ liên tục trên các khoảng $(-\infty; -2)$, $(-2; 2)$ và $(2; +\infty)$.

**Đáp số.** $(-\infty; -2)$, $(-2; 2)$, $(2; +\infty)$.
:::

:::exercise
Xét tính liên tục của hàm số
$$f(x)=\begin{cases}x^2-1&\text{nếu }x<2,\\2x-1&\text{nếu }x\ge2\end{cases}$$
tại $x=2$.

::hint
**Kiến thức:** so sánh giới hạn trái, giới hạn phải và $f(2)$.

**Gợi ý các bước:**
1. Tính $f(2)$ bằng công thức thứ hai.
2. Tính hai giới hạn một bên.

::solution
Hàm số $f$ được cho bởi hai công thức khác nhau ở hai phía của $x=2$, nên ta tính $f(2)$ và hai giới hạn một bên tại $x=2$.

Vì $2\ge2$ nên $f(2)=2\cdot2-1=3$.

Giới hạn bên trái (với $x<2$, $f(x)=x^2-1$):
$$\lim_{x\to2^-}f(x)=\lim_{x\to2^-}\left(x^2-1\right)=2^2-1=3.$$

Giới hạn bên phải (với $x>2$, $f(x)=2x-1$):
$$\lim_{x\to2^+}f(x)=\lim_{x\to2^+}(2x-1)=2\cdot2-1=3.$$

Ta có $\lim_{x\to2^-}f(x)=\lim_{x\to2^+}f(x)=3$, nên $\lim_{x\to2}f(x)=3$. Giá trị này bằng $f(2)=3$.

Vậy $f$ liên tục tại $x=2$.

**Đáp số.** $f$ liên tục tại $x=2$.
:::

:::exercise
Giả sử một công ty cấp nước (số liệu tự nghĩ) tính tiền nước theo lượng nước $x$ (m³) như sau, đơn vị nghìn đồng: $W(x)=8x$ nếu $0\le x\le10$ và $W(x)=12x$ nếu $x>10$ (giá $12$ nghìn đồng cho **toàn bộ** lượng nước khi dùng quá $10$ m³). Hàm $W$ có liên tục tại $x=10$ không? Tính tiền nước khi dùng $10$ m³ và $10{,}1$ m³ rồi nhận xét.

::hint
**Kiến thức:** so sánh giới hạn trái, giới hạn phải và $W(10)$.

**Gợi ý các bước:**
1. Tính $W(10)$, $\lim_{x\to10^-}W(x)$, $\lim_{x\to10^+}W(x)$.
2. Tính $W(10{,}1)$.

::solution
Ta có $W(10)=80$, $\lim_{x\to10^-}8x=80$ và $\lim_{x\to10^+}12x=120$. Hai giới hạn khác nhau nên $W$ gián đoạn tại $x=10$.

Ta có $W(10)=80$ và $W(10{,}1)=12\cdot10{,}1=121{,}2$. Chỉ thêm $0{,}1$ m³ mà tiền tăng $41{,}2$ nghìn đồng, không hợp lí.

Vậy $W$ gián đoạn tại $x=10$ và cách tính này làm hóa đơn tăng đột ngột.

**Đáp số.** $W$ gián đoạn tại $x=10$; $80$ nghìn đồng và $121{,}2$ nghìn đồng.
:::

:::exercise
Nhiệt độ $T(t)$ ($^\circ\text{C}$) trong một phòng thí nghiệm được ghi liên tục: lúc $6$ giờ là $18\,^\circ\text{C}$ và lúc $14$ giờ là $30\,^\circ\text{C}$. Chứng minh rằng có một thời điểm trong khoảng từ $6$ giờ đến $14$ giờ nhiệt độ đúng bằng $25\,^\circ\text{C}$.

::hint
**Kiến thức:** tính chất giá trị trung gian cho hàm số liên tục trên một đoạn.

**Gợi ý các bước:**
1. Đặt $g(t)=T(t)-25$.
2. Tính $g(6)$ và $g(14)$.

::solution
Đặt $g(t)=T(t)-25$. Vì $T$ liên tục trên $[6; 14]$ nên $g$ liên tục trên $[6; 14]$.

Ta có $g(6)=18-25=-7$ và $g(14)=30-25=5$, suy ra $g(6)g(14)<0$. Do đó tồn tại $t_0\in(6; 14)$ để $g(t_0)=0$, tức $T(t_0)=25$.

Vậy có thời điểm nhiệt độ đúng bằng $25\,^\circ\text{C}$.

**Đáp số.** Có thời điểm $t_0\in(6; 14)$ để $T(t_0)=25$.
:::

:::exercise
Cho hàm số
$$f(x)=\begin{cases}\dfrac{x^2-1}{x-1}&\text{nếu }x\neq1,\\3&\text{nếu }x=1.\end{cases}$$
Xét tính đúng sai của các mệnh đề sau:

a) $f(1)=3$.

b) $\lim_{x\to1}f(x)=3$.

c) Hàm số $f$ không liên tục tại $x=1$.

d) Hàm số $f$ liên tục trên khoảng $(1; +\infty)$.

::hint
**Kiến thức:** rút gọn phân thức với $x\neq1$; so sánh giới hạn với $f(1)$.

**Gợi ý các bước:**
1. Rút gọn $\dfrac{x^2-1}{x-1}$.
2. Xét từng mệnh đề.

::solution
Ta có $f(x)=\dfrac{x^2-1}{x-1}$ với $x\neq1$ và $f(1)=3$. Với $x\neq1$:
$$f(x)=\frac{(x-1)(x+1)}{x-1}=x+1.$$

a) **Đúng.** Theo định nghĩa của hàm số, $f(1)=3$.

b) **Sai.** Vì $f(x)=x+1$ với mọi $x\neq1$ nên $\lim_{x\to1}f(x)=\lim_{x\to1}(x+1)=2$, không phải $3$.

c) **Đúng.** Ta có $\lim_{x\to1}f(x)=2\neq3=f(1)$ nên $f$ không liên tục tại $x=1$.

d) **Đúng.** Với mọi $x>1$ ta có $f(x)=x+1$ là hàm đa thức, liên tục trên $\mathbb{R}$, nên $f$ liên tục trên khoảng $(1; +\infty)$.

Vậy các mệnh đề a), c), d) đúng; mệnh đề b) sai.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Đúng.
:::

:::exercise
Phương trình $x^3+2x-5=0$ có một nghiệm trong khoảng $(1; 2)$. Tìm nghiệm này, làm tròn đến hàng phần trăm.

::hint
**Kiến thức:** chia đôi khoảng chứa nghiệm bằng tính chất giá trị trung gian.

**Gợi ý các bước:**
1. Kiểm tra $f(1)f(2)<0$ với $f(x)=x^3+2x-5$.
2. Thu hẹp khoảng chứa nghiệm bằng máy tính cầm tay rồi làm tròn.

::solution
Ta có $f(1)=-2$ và $f(2)=7$ nên nghiệm nằm trong $(1; 2)$. Ta có $f(1{,}3)=-0{,}203<0$ và $f(1{,}4)=0{,}544>0$, nên nghiệm thuộc $(1{,}3; 1{,}4)$. Tiếp tục thu hẹp, ta được nghiệm gần đúng $1{,}328\ldots$

Vậy nghiệm xấp xỉ $1{,}33$.

**Đáp số.** $1{,}33$.
:::

:::exercise
Ôn lại giới hạn một bên. Cho hàm số $f(x)=\dfrac{1}{x-1}$. Hàm số $f$ liên tục trên những khoảng nào? Tính $\lim_{x\to1^-}f(x)$ và $\lim_{x\to1^+}f(x)$, rồi nêu hình dạng đồ thị của $f$ gần $x=1$.

::hint
**Kiến thức:** xét dấu của $x-1$ khi $x$ tiến tới $1$ từ hai phía.

**Gợi ý các bước:**
1. Tìm tập xác định.
2. Với $x<1$ thì $x-1<0$; với $x>1$ thì $x-1>0$.

::solution
Tập xác định là $\mathbb{R}\setminus\{1\}$, nên $f$ liên tục trên $(-\infty; 1)$ và $(1; +\infty)$.

Khi $x\to1^-$, mẫu tiến tới $0$ với giá trị âm nên $\lim_{x\to1^-}f(x)=-\infty$. Khi $x\to1^+$, mẫu tiến tới $0$ với giá trị dương nên $\lim_{x\to1^+}f(x)=+\infty$.

Vậy đồ thị gồm hai nhánh tách rời, nhận đường thẳng $x=1$ làm tiệm cận đứng.

**Đáp số.** Liên tục trên $(-\infty; 1)$ và $(1; +\infty)$; $-\infty$ và $+\infty$.
:::

:::exercise Thử thách
Chứng minh rằng phương trình $\cos x=x$ có nghiệm trong khoảng $(0; 1)$ (với $x$ tính bằng radian).

::hint
**Kiến thức:** hiệu của hai hàm số liên tục là hàm số liên tục; tính chất giá trị trung gian.

**Gợi ý các bước:**
1. Đặt $f(x)=\cos x-x$ và chứng minh $f$ liên tục trên $[0; 1]$.
2. Tính $f(0)$ và $f(1)$ (dùng máy tính ở chế độ radian).

::solution
Đặt $f(x)=\cos x-x$. Hàm số $\cos x$ và đa thức $x$ đều liên tục trên $\mathbb{R}$ nên $f$ liên tục trên $[0; 1]$.

Ta có $f(0)=1>0$ và $f(1)=\cos1-1\approx-0{,}46<0$, suy ra $f(0)f(1)<0$.

Do đó phương trình $f(x)=0$ có ít nhất một nghiệm trong $(0; 1)$.

Vậy phương trình $\cos x=x$ có nghiệm trong khoảng $(0; 1)$.

**Đáp số.** Có nghiệm trong $(0; 1)$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Hàm số nào dưới đây liên tục trên $\mathbb{R}$?
A. $y=\dfrac{1}{x-1}$.
B. $y=\dfrac{x}{x^2-4}$.
C. $y=\sqrt{x}$.
D. $y=x^3-2x+5$.
::key D
Đa thức liên tục trên $\mathbb{R}$. Hàm số ở A và B không xác định tại một số điểm, còn hàm số ở D chỉ xác định khi $x\ge0$.

::mc VD
Cho hàm số $f(x)=\begin{cases}\dfrac{x^2-x-2}{x-2}&\text{nếu }x\neq2,\\3&\text{nếu }x=2.\end{cases}$ Phát biểu nào sau đây đúng?
A. Hàm số liên tục tại $x=2$.
B. Hàm số không liên tục tại $x=2$ vì không xác định tại $2$.
C. Hàm số không liên tục tại $x=2$ vì $\lim_{x\to2}f(x)=0$.
D. Hàm số không liên tục tại $x=2$ vì không tồn tại $\lim_{x\to2}f(x)$.
::key A
Với $x\neq2$, $f(x)=\dfrac{(x-2)(x+1)}{x-2}=x+1$ nên $\lim_{x\to2}f(x)=3=f(2)$. Phương án B quên rằng $f(2)=3$, C tính sai giới hạn, D nhầm dạng $\dfrac{0}{0}$ với giới hạn không tồn tại.

::mc VD
Phương trình nào sau đây có nghiệm trong khoảng $(1; 2)$?
A. $x^3+x-1=0$.
B. $x^3-3x-1=0$.
C. $x^2-4x+5=0$.
D. $2x^2-5x+4=0$.
::key B
Với $f(x)=x^3-3x-1$ ta có $f(1)=-3$, $f(2)=1$ nên $f(1)f(2)<0$. Ở A, D, C hai giá trị $f(1)$, $f(2)$ cùng dấu và các phương trình không có nghiệm trong $(1; 2)$.

::mc TH
Cho hàm số $f(x)=\begin{cases}x^2+1&\text{nếu }x<1,\\3&\text{nếu }x=1,\\2x&\text{nếu }x>1.\end{cases}$ Phát biểu nào sau đây đúng?
A. Hàm số liên tục tại $x=1$ vì tồn tại các giới hạn một bên.
B. Hàm số không liên tục tại $x=1$ vì giới hạn trái khác giới hạn phải.
C. Hàm số không liên tục tại $x=1$ vì $\lim_{x\to1}f(x)=2$ khác $f(1)=3$.
D. Hàm số liên tục tại $x=1$ vì $f(1)$ xác định.
::key C
Giới hạn trái và giới hạn phải đều bằng $2$ nên $\lim_{x\to1}f(x)=2\neq f(1)=3$. Phương án B sai vì hai giới hạn một bên bằng nhau; A và D thiếu điều kiện $\lim f=f(x_0)$.

::tf VD TH NB NB
Giả sử một gói cước điện thoại tính tiền (nghìn đồng) theo dung lượng dữ liệu $x$ (GB) như sau: $C(x)=50$ nếu $0\le x\le5$ và $C(x)=50+20(x-5)$ nếu $x>5$. Xét tính đúng sai của các mệnh đề sau:
a) Hàm số $C$ không liên tục tại $x=5$ vì được cho bởi hai công thức.
b) $\lim_{x\to5^+}C(x)=50$.
c) $C(8)=110$.
d) $C(7)=100$.
::key S Đ Đ S
a) Sai: $C(5)=50$, $\lim_{x\to5^-}C(x)=50$ và $\lim_{x\to5^+}C(x)=50$ nên $C$ liên tục tại $5$, dù có hai công thức. b) Đúng: $50+20\cdot0=50$. c) Đúng: $50+20\cdot3=110$. d) Sai: $C(7)=50+20\cdot2=90$.

::sa VD
Phương trình $x^3+x-1=0$ có một nghiệm trong khoảng $(0; 1)$. Tìm nghiệm này (làm tròn kết quả đến hàng phần trăm).
::key 0,68
Với $f(x)=x^3+x-1$ ta có $f(0)=-1<0$ và $f(1)=1>0$ nên có nghiệm trong $(0; 1)$. Thu hẹp khoảng chứa nghiệm bằng máy tính, ta được nghiệm gần đúng $0{,}682\ldots\approx0{,}68$.

::sa TH
Với biểu giá điện bậc thang trong bài, tiền điện (nghìn đồng) khi dùng $x>100$ kWh là $T(x)=3x-75$. Tính số tiền (nghìn đồng) phải trả khi dùng $120$ kWh.
::key 285
$T(120)=3\cdot120-75=285$ (nghìn đồng).
:::
