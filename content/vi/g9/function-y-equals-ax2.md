---
title: Hàm số y = ax² (a ≠ 0)
description: Nhận biết hàm số y = ax², tính giá trị, lập bảng giá trị, vẽ đồ thị parabol và vận dụng vào các bài toán thực tế.
minutes: 20
---

:::goals
- Nhận biết hàm số $y=ax^2$ ($a\neq0$) và tính được giá trị của hàm số tại một điểm.
- Lập bảng giá trị và vẽ được đồ thị (parabol) của hàm số $y=ax^2$.
- Nêu được tính chất đối xứng của đồ thị và vị trí của nó theo dấu của $a$.
- Giải được một số bài toán thực tế gắn với hàm số $y=ax^2$.
:::

Trong khoảng những năm 1602–1604, ở Padova (Ý), Galileo Galilei cho các viên bi lăn trên máng nghiêng để làm chậm chuyển động rơi, nhờ đó đo được nó. Ông tìm ra một quy luật bất ngờ: quãng đường đi được không tỉ lệ với thời gian, mà tỉ lệ với **bình phương** của thời gian (theo MacTutor, Đại học St Andrews). Ở môn Vật lí lớp 10, quy luật rơi tự do được viết là $s=\dfrac12gt^2$ với $g\approx9{,}8$ m/s²; lấy tròn $g\approx10$ ta được $s\approx5t^2$ (mét).

Giả sử bạn thả một viên bi từ sân thượng của một toà nhà cao $45$ m (khoảng $15$ tầng) và bỏ qua sức cản của không khí. Sau bao lâu thì viên bi chạm đất? Và vì sao giây thứ ba viên bi rơi được nhiều hơn hẳn giây thứ nhất?

## Hàm số $y=ax^2$ ($a\neq0$)

### Khám phá: quãng đường rơi theo thời gian

Ta tính $s=5t^2$ tại vài thời điểm:

| $t$ (giây) | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $s$ (mét) | $0$ | $5$ | $20$ | $45$ |

Thời gian tăng gấp đôi (từ $1$ lên $2$ giây) thì quãng đường tăng gấp bốn (từ $5$ lên $20$ m); thời gian gấp ba thì quãng đường gấp chín. Trong từng giây, viên bi rơi được $5$ m, rồi $15$ m, rồi $25$ m: nó rơi ngày càng nhanh. Mỗi giá trị của $t$ cho đúng một giá trị của $s$, nên $s$ là một hàm số của $t$.

:::definition Hàm số $y=ax^2$
Hàm số có dạng $y=ax^2$, trong đó $a$ là một số thực khác $0$, xác định với mọi số thực $x$. Số $a$ gọi là **hệ số** của hàm số.
:::

**Hiểu sâu hơn.** Với hàm số bậc nhất $y=ax$ (lớp 8), $x$ gấp đôi thì $y$ gấp đôi. Với $y=ax^2$, $x$ gấp $k$ lần thì $y$ gấp $k^2$ lần, vì $a(kx)^2=k^2\cdot ax^2$. Đó là lí do diện tích hình vuông cạnh $x$ là $S=x^2$ ($a=1$) và diện tích hình tròn bán kính $R$ là $S=\pi R^2$ ($a=\pi$): phóng to hình gấp đôi thì diện tích gấp bốn.

Những hàm số như $y=x^2+1$ hay $y=(x-1)^2$ **không** có dạng $y=ax^2$: đồ thị của chúng không đi qua gốc $O$ (với $y=x^2+1$) hoặc không nhận $Oy$ làm trục đối xứng (với $y=(x-1)^2$). Ở lớp 10, bạn sẽ học các hàm số bậc hai tổng quát như vậy.

:::example Tính giá trị của hàm số
Cho hàm số $y=-2x^2$. Tính giá trị của $y$ khi $x=-3$; $x=\dfrac12$; $x=\sqrt2$.

**Lời giải.** Thay từng giá trị của $x$ vào công thức. Chú ý bình phương trước, nhân với $-2$ sau:

$$\begin{aligned} x=-3:&\quad y=-2\cdot(-3)^2=-2\cdot9=-18;\\ x=\tfrac12:&\quad y=-2\cdot\tfrac14=-\tfrac12;\\ x=\sqrt2:&\quad y=-2\cdot(\sqrt2)^2=-2\cdot2=-4. \end{aligned}$$

Vậy các giá trị tương ứng của $y$ là $-18$; $-\dfrac12$; $-4$.
:::

## Đồ thị của hàm số $y=ax^2$

### Khám phá: hai hàm số $y=x^2$ và $y=-x^2$

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $y=x^2$ | $4$ | $1$ | $0$ | $1$ | $4$ |
| $y=-x^2$ | $-4$ | $-1$ | $0$ | $-1$ | $-4$ |

Hai giá trị đối nhau của $x$ cho cùng một giá trị của $y$, vì $(-x)^2=x^2$. Biểu diễn các điểm $(x; y)$ trên mặt phẳng toạ độ rồi nối bằng một đường cong trơn, ta được hình dưới đây.

:::graph Đồ thị của $y=x^2$ và $y=-x^2$
alt: Hai parabol cùng có đỉnh tại gốc toạ độ O; parabol y bằng x bình phương mở lên trên, parabol y bằng trừ x bình phương mở xuống dưới, đối xứng với nhau qua trục hoành
x: -3..3
y: -5..5
plot: x^2
plot: -x^2 ; dashed
point: (0, 0) "O" right
point: (-2, 4) "A" left
point: (2, 4) "A'" right
point: (-1, 1)
point: (1, 1)
point: (-2, -4) "B" left
point: (2, -4) "B'" right
point: (-1, -1)
point: (1, -1)
:::

:::theorem Đồ thị của hàm số $y=ax^2$ ($a\neq0$)
Đồ thị của hàm số $y=ax^2$ là một đường cong đi qua gốc toạ độ $O$, nhận trục $Oy$ làm trục đối xứng. Đường cong này gọi là một **parabol** với **đỉnh** $O$.
- Nếu $a>0$ thì đồ thị nằm phía trên trục hoành, $O$ là điểm thấp nhất của đồ thị.
- Nếu $a<0$ thì đồ thị nằm phía dưới trục hoành, $O$ là điểm cao nhất của đồ thị.
:::

**Vì sao đối xứng qua $Oy$?** Nếu điểm $(x_0; y_0)$ thuộc đồ thị thì $y_0=ax_0^2=a(-x_0)^2$, nên điểm $(-x_0; y_0)$ cũng thuộc đồ thị. Hai điểm này đối xứng với nhau qua $Oy$. Ngoài ra $x^2\geq0$, nên $y=ax^2$ cùng dấu với $a$ khi $x\neq0$.

:::example Vẽ đồ thị
Vẽ đồ thị của hàm số $y=\dfrac12x^2$.

**Lời giải.** Ta lập bảng giá trị (chọn $x$ chẵn để $y$ là số nguyên):

| $x$ | $-4$ | $-2$ | $0$ | $2$ | $4$ |
|---|---|---|---|---|---|
| $y=\frac12x^2$ | $8$ | $2$ | $0$ | $2$ | $8$ |

Biểu diễn các điểm $(-4; 8)$, $(-2; 2)$, $(0; 0)$, $(2; 2)$, $(4; 8)$ rồi nối chúng bằng một đường cong trơn.

Vậy đồ thị là parabol đỉnh $O$, nằm phía trên trục hoành, nhận $Oy$ làm trục đối xứng (hình dưới).
:::

:::graph Đồ thị của hàm số $y=\frac12x^2$
alt: Parabol mở lên trên, đỉnh tại gốc toạ độ, đi qua các điểm (-4; 8), (-2; 2), (2; 2), (4; 8)
x: -5..5
y: -1..9
plot: 0.5x^2
point: (0, 0) "O" below-right
point: (-2, 2) "(-2; 2)" left
point: (2, 2) "(2; 2)" right
point: (-4, 8) "(-4; 8)" left
point: (4, 8) "(4; 8)" right
:::

## Điểm thuộc đồ thị và bài toán thực tế

Điểm $M(x_0; y_0)$ thuộc đồ thị của hàm số $y=ax^2$ khi và chỉ khi $y_0=ax_0^2$. Nhờ đó, biết một điểm của đồ thị ta tìm được hệ số $a$.

:::example Tìm hệ số $a$
Cho hàm số $y=ax^2$ có đồ thị đi qua điểm $A(2; -12)$.

a) Tìm $a$.

b) Điểm $B(-1; -3)$ và $C(3; 27)$ có thuộc đồ thị không?

**Lời giải.** a) Thay $x=2$, $y=-12$ vào $y=ax^2$, ta được

$$-12=a\cdot2^2\Leftrightarrow 4a=-12\Leftrightarrow a=-3.$$

b) Với $y=-3x^2$, ta có $-3\cdot(-1)^2=-3$ nên $B$ thuộc đồ thị; $-3\cdot3^2=-27\neq27$ nên $C$ không thuộc đồ thị.

Vậy $a=-3$; điểm $B$ thuộc đồ thị, điểm $C$ không thuộc đồ thị.
:::

Ngược lại, biết tung độ, ta tìm hoành độ bằng cách giải $ax^2=y_0$. Do tính đối xứng, thường có hai giá trị đối nhau của $x$.

:::example Trả lời câu hỏi ở đầu bài
Viên bi rơi từ độ cao $45$ m, quãng đường rơi là $s=5t^2$ (m). Sau bao lâu viên bi chạm đất? Sau $2$ giây, viên bi còn cách mặt đất bao nhiêu mét?

**Lời giải.**

*Hiểu đề.* Cần tìm $t$ lúc viên bi chạm đất, và độ cao còn lại khi $t=2$.

*Tìm cách giải.* Viên bi chạm đất khi quãng đường rơi bằng độ cao, tức $s=45$. Độ cao còn lại bằng $45-s$.

*Giải.* Ta có

$$5t^2=45\Leftrightarrow t^2=9\Leftrightarrow t=3\ \text{ hoặc }\ t=-3.$$

Vì $t>0$ nên $t=3$. Sau $2$ giây, viên bi rơi được $s=5\cdot2^2=20$ (m), nên còn cách mặt đất $45-20=25$ (m).

Vậy viên bi chạm đất sau $3$ giây; sau $2$ giây nó còn cách mặt đất $25$ m.

*Nhìn lại.* Kết quả có hợp lí không? Sau $2$ giây (hai phần ba thời gian) viên bi mới rơi được chưa đến một nửa độ cao, vì nó rơi ngày càng nhanh. Nếu toà nhà cao gấp bốn ($180$ m) thì thời gian rơi chỉ gấp đôi ($t^2=36$, $t=6$ giây), không gấp bốn.
:::

**Kết nối.** Bài này dựa trên hàm số, đồ thị (lớp 8) và căn bậc hai. Giải $ax^2=k$ là trường hợp đơn giản nhất của [phương trình bậc hai một ẩn](lesson:quadratic-equations). Parabol còn là quỹ đạo của quả bóng được ném xiên (khi bỏ qua sức cản không khí) và là đồ thị của hàm số bậc hai lớp 10.

:::warning Những sai lầm thường gặp
- **Bình phương cả hệ số.** Sai: với $y=-2x^2$, tại $x=-3$ tính $y=(-2\cdot(-3))^2=36$. Lí do sai: chỉ $x$ được bình phương. Đúng: $y=-2\cdot(-3)^2=-18$.
- **Bỏ sót một giá trị của $x$.** Sai: "$x^2=9$ nên $x=3$". Lí do sai: $(-3)^2=9$ cũng đúng. Đúng: $x=3$ hoặc $x=-3$, rồi đối chiếu điều kiện của bài toán (như $t>0$).
- **Nối các điểm bằng đoạn thẳng.** Đồ thị là một đường cong trơn, ở gần đỉnh $O$ nó "tròn", không có góc nhọn.
:::

## Thuật ngữ

:::terms
- hàm số $y=ax^2$ | the function $y=ax^2$
- hệ số | coefficient
- bảng giá trị | table of values
- đồ thị | graph
- parabol | parabola
- đỉnh | vertex
- trục đối xứng | axis of symmetry
- điểm thấp nhất / cao nhất | lowest / highest point
:::

## Tóm tắt

- Hàm số $y=ax^2$ ($a\neq0$) xác định với mọi $x\in\mathbb{R}$; $x$ và $-x$ cho cùng một giá trị $y$.
- Đồ thị là parabol đỉnh $O$, trục đối xứng $Oy$.
- $a>0$: đồ thị ở phía trên trục hoành, $O$ thấp nhất; $a<0$: đồ thị ở phía dưới trục hoành, $O$ cao nhất.
- $M(x_0; y_0)$ thuộc đồ thị $\Leftrightarrow y_0=ax_0^2$; dùng điều này để tìm $a$ hoặc tìm điểm.
- Vẽ đồ thị: lập bảng giá trị với các cặp $x$ đối nhau, nối bằng đường cong trơn.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho hàm số $y=3x^2$. Tính giá trị của $y$ khi $x=-2$; $x=0$; $x=\dfrac13$; $x=\sqrt3$.

::hint
**Kiến thức:** thay giá trị của $x$ vào công thức, bình phương trước rồi nhân với $3$.

**Gợi ý các bước:**
1. Tính $x^2$ cho từng giá trị.
2. Nhân kết quả với $3$.

::solution
Thay lần lượt từng giá trị của $x$ vào công thức $y=3x^2$, ta được:

- Với $x=-2$: $y=3\cdot(-2)^2=3\cdot4=12$.
- Với $x=0$: $y=3\cdot0^2=0$.
- Với $x=\dfrac13$: $y=3\cdot\left(\dfrac13\right)^2=3\cdot\dfrac19=\dfrac13$.
- Với $x=\sqrt3$: $y=3\cdot\left(\sqrt3\right)^2=3\cdot3=9$.

Vậy các giá trị của $y$ lần lượt là $12$; $0$; $\dfrac13$; $9$.

**Đáp số.** $12$; $0$; $\dfrac13$; $9$.
:::

:::exercise
Lập bảng giá trị và vẽ đồ thị của hàm số $y=-\dfrac12x^2$ với $x\in\{-4; -2; 0; 2; 4\}$. Nêu nhận xét về vị trí của đồ thị.

::hint
**Kiến thức:** $a<0$ thì parabol nằm phía dưới trục hoành, $O$ là điểm cao nhất.

**Gợi ý các bước:**
1. Tính $y$ tại các giá trị của $x$.
2. Biểu diễn các điểm và nối bằng đường cong trơn.

::solution
Ta có bảng giá trị:

| $x$ | $-4$ | $-2$ | $0$ | $2$ | $4$ |
|---|---|---|---|---|---|
| $y$ | $-8$ | $-2$ | $0$ | $-2$ | $-8$ |

Vậy đồ thị là parabol đỉnh $O$ đi qua các điểm trên, nằm phía dưới trục hoành và nhận $Oy$ làm trục đối xứng; $O$ là điểm cao nhất.

**Đáp số.** Parabol đỉnh $O$ qua các điểm trong bảng, nằm phía dưới trục hoành.
:::

:::exercise
Trong các điểm $A(1; 2)$, $B(-2; 8)$, $C(3; 18)$, $D(-1; -2)$, điểm nào thuộc đồ thị của hàm số $y=2x^2$?

::hint
**Kiến thức:** $M(x_0; y_0)$ thuộc đồ thị khi và chỉ khi $y_0=2x_0^2$.

**Gợi ý các bước:**
1. Tính $2x_0^2$ cho từng điểm và so sánh với $y_0$.

::solution
Điểm $M(x_0; y_0)$ thuộc đồ thị của hàm số $y=2x^2$ khi và chỉ khi $y_0=2x_0^2$. Ta kiểm tra lần lượt từng điểm:

- $A(1; 2)$: $2\cdot1^2=2$, bằng tung độ của $A$. Điểm $A$ thuộc đồ thị.
- $B(-2; 8)$: $2\cdot(-2)^2=8$, bằng tung độ của $B$. Điểm $B$ thuộc đồ thị.
- $C(3; 18)$: $2\cdot3^2=18$, bằng tung độ của $C$. Điểm $C$ thuộc đồ thị.
- $D(-1; -2)$: $2\cdot(-1)^2=2\neq-2$. Điểm $D$ không thuộc đồ thị.

Vậy các điểm $A$, $B$, $C$ thuộc đồ thị của hàm số $y=2x^2$; điểm $D$ không thuộc đồ thị.

**Đáp số.** $A$, $B$, $C$.
:::

:::exercise
Cho hàm số $y=ax^2$ có đồ thị đi qua điểm $M(-3; 6)$.

a) Tìm $a$.

b) Tìm các điểm thuộc đồ thị có tung độ bằng $24$.

::hint
**Kiến thức:** thay toạ độ điểm vào $y=ax^2$; phương trình $x^2=k$ ($k>0$) có hai nghiệm $\pm\sqrt k$.

**Gợi ý các bước:**
1. Giải $9a=6$.
2. Giải $ax^2=24$.

::solution
a) Thay $x=-3$, $y=6$, ta được $9a=6$, suy ra $a=\dfrac23$.

b) Ta có $\dfrac23x^2=24\Leftrightarrow x^2=36\Leftrightarrow x=6$ hoặc $x=-6$.

Vậy $a=\dfrac23$; các điểm cần tìm là $(6; 24)$ và $(-6; 24)$.

**Đáp số.** a) $a=\dfrac23$; b) $(6; 24)$, $(-6; 24)$.
:::

:::exercise
Một vật được thả rơi từ độ cao $125$ m. Quãng đường vật rơi được sau $t$ giây là $s=5t^2$ (m).

a) Sau $3$ giây, vật còn cách mặt đất bao nhiêu mét?

b) Sau bao lâu vật chạm đất?

::hint
**Kiến thức:** khoảng cách tới mặt đất bằng $125-s$; vật chạm đất khi $s=125$.

**Gợi ý các bước:**
1. Tính $s$ khi $t=3$.
2. Giải $5t^2=125$ với $t>0$.

::solution
a) Khi $t=3$, ta có $s=5\cdot3^2=45$ (m). Do đó vật còn cách mặt đất $125-45=80$ (m).

b) Ta có $5t^2=125\Leftrightarrow t^2=25$. Vì $t>0$ nên $t=5$.

Vậy sau $3$ giây vật còn cách mặt đất $80$ m; vật chạm đất sau $5$ giây.

**Đáp số.** a) $80$ m; b) $5$ giây.
:::

:::exercise
Trong môn Khoa học tự nhiên 9 (bài Động năng. Thế năng), động năng của vật có khối lượng $m$ (kg) chuyển động với vận tốc $v$ (m/s) là $W=\dfrac12mv^2$ (J). Giả sử một quả bóng có khối lượng $0{,}4$ kg, khi đó $W=0{,}2v^2$.

a) Tính động năng của quả bóng khi $v=10$ m/s.

b) Quả bóng có động năng $45$ J thì vận tốc của nó bằng bao nhiêu?

::hint
**Kiến thức:** $W=0{,}2v^2$ là hàm số dạng $y=ax^2$ với $a=0{,}2$; vận tốc $v>0$.

**Gợi ý các bước:**
1. Thay $v=10$.
2. Giải $0{,}2v^2=45$.

::solution
a) Ta có $W=0{,}2\cdot10^2=20$ (J).

b) Ta có $0{,}2v^2=45\Leftrightarrow v^2=225$. Vì $v>0$ nên $v=15$.

Vậy động năng là $20$ J; vận tốc cần tìm là $15$ m/s.

**Nhận xét.** Vận tốc gấp $1{,}5$ lần thì động năng gấp $1{,}5^2=2{,}25$ lần; xe chạy nhanh gấp đôi thì động năng gấp bốn.

**Đáp số.** a) $20$ J; b) $15$ m/s.
:::

:::exercise
Cho hàm số $y=3x^2$. (Ôn lại [căn thức bậc hai](lesson:simplifying-root-expressions).)

a) Tìm hoành độ các điểm thuộc đồ thị có tung độ bằng $6$.

b) Tính giá trị của $y$ khi $x=1-\sqrt2$.

::hint
**Kiến thức:** $x^2=2\Leftrightarrow x=\pm\sqrt2$; hằng đẳng thức $(a-b)^2=a^2-2ab+b^2$.

**Gợi ý các bước:**
1. Giải $3x^2=6$.
2. Khai triển $(1-\sqrt2)^2$ rồi nhân với $3$.

::solution
a) Điểm thuộc đồ thị có tung độ bằng $6$ khi $3x^2=6$.

Suy ra $x^2=2$, do đó $x=\sqrt2$ hoặc $x=-\sqrt2$.

Vậy có hai điểm thoả mãn, với hoành độ $x=\sqrt2$ và $x=-\sqrt2$.

b) Ta có
$$\left(1-\sqrt2\right)^2=1-2\sqrt2+\left(\sqrt2\right)^2=1-2\sqrt2+2=3-2\sqrt2.$$

Thay $x=1-\sqrt2$ vào công thức, ta được
$$y=3\left(1-\sqrt2\right)^2=3\left(3-2\sqrt2\right)=9-6\sqrt2.$$

Vậy khi $x=1-\sqrt2$ thì $y=9-6\sqrt2$.

**Đáp số.** a) $x=\sqrt2$, $x=-\sqrt2$; b) $9-6\sqrt2$.
:::

:::exercise
**(2,0 điểm)** Cho hàm số $y=ax^2$ có đồ thị $(P)$ đi qua điểm $A(2; 2)$.

a) Tìm $a$.

b) Vẽ $(P)$.

c) Tìm các điểm thuộc $(P)$ có tung độ gấp đôi hoành độ.

::hint
**Kiến thức:** điểm thuộc đồ thị; phương trình tích $A\cdot B=0$ (bài [phương trình quy về phương trình bậc nhất](lesson:equations-reducible-to-linear)).

**Gợi ý các bước:**
1. Giải $4a=2$.
2. Lập bảng giá trị với $x\in\{-4; -2; 0; 2; 4\}$.
3. Điểm cần tìm có dạng $(x; 2x)$: giải $\dfrac12x^2=2x$.

::solution
a) Thay $x=2$, $y=2$, ta được $4a=2$, suy ra $a=\dfrac12$.

b) $(P)$ là parabol $y=\dfrac12x^2$ đã vẽ ở ví dụ "Vẽ đồ thị".

c) Điểm cần tìm có dạng $(x; 2x)$. Thay vào $(P)$, ta có

$$\frac12x^2=2x\Leftrightarrow x^2-4x=0\Leftrightarrow x(x-4)=0\Leftrightarrow x=0\ \text{ hoặc }\ x=4.$$

Vậy $a=\dfrac12$ và các điểm cần tìm là $(0; 0)$, $(4; 8)$.

**Đáp số.** a) $a=\dfrac12$; c) $(0; 0)$ và $(4; 8)$.
:::

:::exercise Thử thách
Giả sử một cổng chào có dạng parabol. Chân cổng rộng $8$ m, đỉnh cổng cao $6$ m so với mặt đất. Chọn hệ trục toạ độ có gốc $O$ tại đỉnh cổng, trục $Oy$ hướng lên trên, khi đó cổng là một phần của đồ thị $y=ax^2$. Một xe tải rộng $3$ m, cao $5$ m đi chính giữa cổng. Hỏi xe có đi qua cổng được không?

::hint
**Kiến thức:** hai chân cổng là các điểm $(-4; -6)$ và $(4; -6)$.

**Gợi ý các bước:**
1. Tìm $a$ từ điểm $(4; -6)$.
2. Thành xe cách trục giữa $1{,}5$ m: tính $y$ tại $x=1{,}5$.
3. Chiều cao của cổng tại đó bằng $6+y$; so sánh với $5$.

::solution
Chân cổng $(4; -6)$ thuộc đồ thị nên $16a=-6$, suy ra $a=-\dfrac38$.

Tại $x=1{,}5$, ta có $y=-\dfrac38\cdot1{,}5^2=-\dfrac{27}{32}\approx-0{,}84$. Do đó chiều cao của cổng tại vị trí thành xe là $6-0{,}84375=5{,}15625$ (m) $>5$ m.

Vậy xe tải đi qua cổng được.

**Đáp số.** Đi qua được (cổng cao khoảng $5{,}16$ m tại vị trí thành xe).
:::

## Kiểm tra mini

:::quiz
::mc
Hàm số nào sau đây có dạng $y=ax^2$ với $a\neq0$?
A. $y=3x$.
B. $y=-\dfrac12x^2$.
C. $y=x^2+2$.
D. $y=0x^2$.
::key B
$a=-\dfrac12\neq0$. A là hàm số bậc nhất, C có thêm số hạng $2$, D có $a=0$.

::mc
Cho hàm số $y=-2x^2$. Giá trị của $y$ khi $x=-3$ là
A. $18$.
B. $-18$.
C. $36$.
D. $6$.
::key B
$y=-2\cdot9=-18$. A sai dấu, C bình phương cả $-2$, D quên bình phương.

::mc
Đồ thị của hàm số $y=ax^2$ đi qua điểm $(-2; 8)$. Giá trị của $a$ là
A. $2$.
B. $-2$.
C. $4$.
D. $-4$.
::key A
$4a=8$ nên $a=2$. B coi $(-2)^2=-4$, C lấy $8:2$, D lấy $8:(-2)$.

::mc
Điểm nào sau đây không thuộc đồ thị của hàm số $y=-x^2$?
A. $(1; -1)$.
B. $(-2; -4)$.
C. $(3; 9)$.
D. $(0; 0)$.
::key C
Tại $x=3$, $y=-9\neq9$.

::tf
Cho hàm số $y=\dfrac13x^2$ có đồ thị $(P)$. Xét tính đúng sai của các mệnh đề sau:
a) $O(0; 0)$ là điểm thấp nhất của $(P)$.
b) $(P)$ đi qua điểm $(3; 3)$.
c) $(P)$ đi qua điểm $(-3; -3)$.
d) Các điểm thuộc $(P)$ có tung độ bằng $12$ có hoành độ là $6$ và $-6$.
::key Đ Đ S Đ
a) Đúng: $a>0$. b) Đúng: $\dfrac13\cdot9=3$. c) Sai: tại $x=-3$, $y=3$. d) Đúng: $x^2=36$.

::sa
Một vật rơi từ độ cao $80$ m, quãng đường rơi sau $t$ giây là $s=5t^2$ (m). Sau bao nhiêu giây thì vật chạm đất?
::key 4
$5t^2=80\Leftrightarrow t^2=16$, mà $t>0$ nên $t=4$.

::sa
Đồ thị của hàm số $y=ax^2$ đi qua điểm $A(4; 4)$. Tính $a$ (viết kết quả dưới dạng số thập phân).
::key 0,25
$16a=4$ nên $a=0{,}25$.
:::
