---
title: Căn bậc hai và căn thức bậc hai
description: Hiểu căn bậc hai của một số không âm, dùng hằng đẳng thức √(A²) = |A| và tìm điều kiện xác định của căn thức bậc hai.
minutes: 20
---

:::goals
- Tìm các căn bậc hai của một số không âm, phân biệt căn bậc hai và căn bậc hai số học.
- Dùng hằng đẳng thức $\sqrt{A^2}=|A|$ để tính và rút gọn.
- Tìm điều kiện xác định của căn thức bậc hai $\sqrt{A}$.
:::

Bác Hùng muốn lát gạch một sân phơi hình vuông có diện tích $49$ m². Cạnh sân dài bao nhiêu mét? Nếu sân có diện tích $50$ m² thì cạnh dài bao nhiêu?

Câu hỏi thứ nhất dễ: $7\cdot7=49$, nên cạnh dài $7$ m. Câu hỏi thứ hai cần một số mà bình phương lên được $50$. Bài này giúp ta gọi tên, viết và tính những số như vậy.

## Căn bậc hai của một số không âm

### Khám phá: số nào bình phương lên bằng $16$?

Ta thử bình phương vài số:

| $x$ | $-5$ | $-4$ | $-3$ | $0$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|---|
| $x^2$ | $25$ | $16$ | $9$ | $0$ | $9$ | $16$ | $25$ |

Có hai số bình phương bằng $16$ là $4$ và $-4$. Chỉ có một số bình phương bằng $0$ là $0$. Không có số nào bình phương bằng $-9$, vì bình phương của mọi số đều không âm.

:::definition Căn bậc hai
**Căn bậc hai** của số thực không âm $a$ là số $x$ sao cho $x^2=a$.
- Số dương $a$ có đúng hai căn bậc hai là hai số đối nhau: số dương kí hiệu là $\sqrt{a}$, số âm là $-\sqrt{a}$.
- Số $0$ có đúng một căn bậc hai là $0$.
- Số âm không có căn bậc hai.

Số $\sqrt{a}$ gọi là **căn bậc hai số học** của $a$. Ta có $\sqrt{a}\ge0$ và $\left(\sqrt{a}\right)^2=a$.
:::

Hình dưới cho thấy vì sao số dương có hai căn bậc hai: đường thẳng $y=5$ cắt đồ thị $y=x^2$ tại hai điểm có hoành độ đối nhau.

:::graph Hai căn bậc hai của $5$
alt: Đồ thị y bằng x bình phương và đường thẳng nằm ngang y bằng 5 cắt nhau tại hai điểm có hoành độ là âm căn 5 và căn 5
x: -3.5..3.5
y: -1..8
plot: x^2
hline: 5 ; dashed
point: (-2.236, 5) "-√5" above-left
point: (2.236, 5) "√5" above-right
:::

:::example Tìm căn bậc hai
Tìm các căn bậc hai của: a) $81$; b) $\dfrac{9}{16}$; c) $0{,}36$; d) $-4$.

**Lời giải.** Ta có

$$9^2=81,\qquad \left(\frac34\right)^2=\frac{9}{16},\qquad 0{,}6^2=0{,}36.$$

Vậy căn bậc hai của $81$ là $9$ và $-9$; của $\dfrac{9}{16}$ là $\dfrac34$ và $-\dfrac34$; của $0{,}36$ là $0{,}6$ và $-0{,}6$; số $-4$ không có căn bậc hai (vì $-4<0$).
:::

Với số như $50$, không có số hữu tỉ nào bình phương bằng $50$. Khi đó ta dùng máy tính cầm tay để lấy giá trị gần đúng.

:::example Dùng máy tính cầm tay
Trả lời câu hỏi về sân phơi $50$ m² (làm tròn đến hàng phần trăm).

**Lời giải.** Gọi $x$ (m) là độ dài cạnh sân ($x>0$). Ta có $x^2=50$, suy ra $x$ là căn bậc hai số học của $50$. Dùng máy tính cầm tay, ta được

$$x=\sqrt{50}\approx7{,}0711\approx7{,}07.$$

Vậy cạnh sân dài khoảng $7{,}07$ m.
:::

Để so sánh hai căn bậc hai số học, ta dùng tính chất: với $a$, $b$ không âm, $a<b \iff \sqrt{a}<\sqrt{b}$. Chẳng hạn $\sqrt{50}<\sqrt{64}=8$.

## Hằng đẳng thức $\sqrt{A^2}=|A|$

Ta có $\sqrt{3^2}=\sqrt9=3$. Nhưng $\sqrt{(-3)^2}=\sqrt9=3$, không phải $-3$. Kết quả luôn là số không âm, đúng bằng giá trị tuyệt đối.

:::theorem Căn bậc hai của một bình phương
Với mọi số thực $a$, ta có $\sqrt{a^2}=|a|$.
:::

Vì sao? Số $|a|$ không âm và $|a|^2=a^2$. Vậy $|a|$ chính là căn bậc hai số học của $a^2$.

:::example Tính căn của một bình phương
Tính: a) $\sqrt{(-7)^2}$; b) $\sqrt{\left(2-\sqrt5\right)^2}$.

**Lời giải.** Áp dụng hằng đẳng thức $\sqrt{A^2}=|A|$, ta có (ở câu b, vì $5>4$ nên $\sqrt5>\sqrt4=2$, do đó $2-\sqrt5<0$):

$$\sqrt{(-7)^2}=|-7|=7,\qquad \sqrt{\left(2-\sqrt5\right)^2}=\left|2-\sqrt5\right|=\sqrt5-2.$$

Vậy a) bằng $7$; b) bằng $\sqrt5-2$.
:::

## Căn thức bậc hai

Trong thực tế, ta thường gặp căn của một biểu thức chứa chữ. Chẳng hạn, một hòn sỏi rơi tự do từ độ cao $h$ mét chạm đất sau khoảng $t=\sqrt{\dfrac{h}{5}}$ giây.

:::definition Căn thức bậc hai
Với $A$ là một biểu thức đại số, ta gọi $\sqrt{A}$ là **căn thức bậc hai**, còn $A$ là **biểu thức lấy căn**.

$\sqrt{A}$ **xác định** (có nghĩa) khi và chỉ khi $A\ge0$.

Với mọi biểu thức $A$, ta có $\sqrt{A^2}=|A|$, tức là $\sqrt{A^2}=A$ khi $A\ge0$ và $\sqrt{A^2}=-A$ khi $A<0$.
:::

:::example Tính giá trị của căn thức
Tính thời gian $t=\sqrt{\dfrac{h}{5}}$ khi hòn sỏi rơi từ độ cao $h=45$ m và $h=20$ m.

**Lời giải.** Thay $h=45$ và $h=20$ vào công thức, ta được

$$h=45:\ t=\sqrt{\frac{45}{5}}=\sqrt9=3;\qquad h=20:\ t=\sqrt{\frac{20}{5}}=\sqrt4=2.$$

Vậy hòn sỏi chạm đất sau $3$ giây (từ độ cao $45$ m) và sau $2$ giây (từ độ cao $20$ m).
:::

Độ cao gấp hơn hai lần nhưng thời gian rơi chỉ tăng thêm $1$ giây.

Tìm điều kiện xác định chính là giải một bất phương trình bậc nhất một ẩn, như ở bài [bất phương trình bậc nhất một ẩn](lesson:linear-inequalities-one-unknown).

:::example Điều kiện xác định
Tìm điều kiện của $x$ để mỗi căn thức xác định: a) $\sqrt{2x-6}$; b) $\sqrt{5-x}$; c) $\sqrt{x^2+1}$.

**Lời giải.** Mỗi căn thức xác định khi biểu thức lấy căn không âm (ở câu b, nhân hai vế với $-1$ thì phải đổi chiều bất đẳng thức). Ta có

$$\begin{aligned} \text{a) }& 2x-6\ge0\iff 2x\ge6\iff x\ge3;\\ \text{b) }& 5-x\ge0\iff -x\ge-5\iff x\le5;\\ \text{c) }& x^2+1\ge1>0 \text{ với mọi } x. \end{aligned}$$

Vậy a) $x\ge3$; b) $x\le5$; c) căn thức xác định với mọi số thực $x$.
:::

Khi biểu thức lấy căn là một bình phương, ta bỏ căn nhờ giá trị tuyệt đối, rồi dùng điều kiện đã cho để bỏ dấu giá trị tuyệt đối.

:::example Rút gọn với điều kiện cho trước
Rút gọn $P=\sqrt{(x-3)^2}+x-1$ với $x<3$.

**Lời giải.** Vì $x<3$ nên $x-3<0$, do đó $|x-3|=-(x-3)=3-x$. Ta có

$$P=|x-3|+x-1=3-x+x-1=2.$$

Vậy $P=2$ với mọi $x<3$.
:::

:::warning Những sai lầm thường gặp
- **Viết $\sqrt{16}=\pm4$.** Lí do sai: kí hiệu $\sqrt{16}$ chỉ căn bậc hai số học, luôn không âm. Đúng: $\sqrt{16}=4$; các căn bậc hai của $16$ là $4$ và $-4$.
- **Viết $\sqrt{a^2}=a$ với mọi $a$.** Sai: $\sqrt{(-3)^2}=-3$. Lí do sai: căn bậc hai số học không âm. Đúng: $\sqrt{(-3)^2}=|-3|=3$.
- **Tách căn của một tổng.** Sai: $\sqrt{9+16}=\sqrt9+\sqrt{16}=7$. Lí do sai: căn không "tách" được qua phép cộng. Đúng: $\sqrt{9+16}=\sqrt{25}=5$.
- **Quên đổi chiều bất phương trình.** Sai: $\sqrt{4-2x}$ xác định khi $x\ge2$. Lí do sai: chia hai vế của $-2x\ge-4$ cho số âm phải đổi chiều. Đúng: $x\le2$.
:::

## Thuật ngữ

:::terms
- căn bậc hai | square root
- căn bậc hai số học | principal square root
- căn thức bậc hai | square-root expression
- biểu thức lấy căn | expression under the root sign
- điều kiện xác định | condition for the expression to be defined
- giá trị tuyệt đối | absolute value
- số vô tỉ | irrational number
- máy tính cầm tay | calculator
:::

## Tóm tắt

- $x$ là căn bậc hai của $a\ge0$ khi $x^2=a$. Số dương $a$ có hai căn bậc hai $\pm\sqrt{a}$; số $0$ có một; số âm không có.
- $\sqrt{a}$ là căn bậc hai số học: $\sqrt{a}\ge0$ và $\left(\sqrt{a}\right)^2=a$.
- Với $a$, $b\ge0$: $a<b\iff\sqrt{a}<\sqrt{b}$.
- $\sqrt{A^2}=|A|$: bằng $A$ khi $A\ge0$, bằng $-A$ khi $A<0$.
- $\sqrt{A}$ xác định $\iff A\ge0$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm các căn bậc hai của mỗi số sau:

a) $121$;
b) $0{,}49$;
c) $\dfrac{25}{36}$.

::hint
**Kiến thức:** số dương $a$ có hai căn bậc hai là $\sqrt{a}$ và $-\sqrt{a}$.

**Gợi ý các bước:**
1. Tìm số dương có bình phương bằng số đã cho.
2. Viết thêm số đối của nó.

::solution
Số dương $a$ có đúng hai căn bậc hai là hai số đối nhau: $\sqrt a$ và $-\sqrt a$.

a) Ta có $11^2=121$ nên $\sqrt{121}=11$. Do đó các căn bậc hai của $121$ là $11$ và $-11$.

b) Ta có $0{,}7^2=0{,}49$ nên $\sqrt{0{,}49}=0{,}7$. Do đó các căn bậc hai của $0{,}49$ là $0{,}7$ và $-0{,}7$.

c) Ta có $\left(\dfrac56\right)^2=\dfrac{25}{36}$ nên $\sqrt{\dfrac{25}{36}}=\dfrac56$. Do đó các căn bậc hai của $\dfrac{25}{36}$ là $\dfrac56$ và $-\dfrac56$.

Vậy các căn bậc hai cần tìm lần lượt là $\pm11$; $\pm0{,}7$; $\pm\dfrac56$.

**Đáp số.** a) $\pm11$; b) $\pm0{,}7$; c) $\pm\dfrac56$.
:::

:::exercise
Tính:

a) $\sqrt{0{,}64}+\sqrt{1{,}21}$;
b) $\left(\sqrt7\right)^2-\sqrt{(-6)^2}$.

::hint
**Kiến thức:** $\left(\sqrt{a}\right)^2=a$ với $a\ge0$; $\sqrt{a^2}=|a|$.

**Gợi ý các bước:**
1. Khai căn từng số.
2. Cộng hoặc trừ.

::solution
a) Ta có $\sqrt{0{,}64}=0{,}8$ (vì $0{,}8>0$ và $0{,}8^2=0{,}64$) và $\sqrt{1{,}21}=1{,}1$ (vì $1{,}1>0$ và $1{,}1^2=1{,}21$). Do đó
$$\sqrt{0{,}64}+\sqrt{1{,}21}=0{,}8+1{,}1=1{,}9.$$

b) Áp dụng $\left(\sqrt a\right)^2=a$ (với $a\ge0$) và $\sqrt{a^2}=|a|$, ta có
$$\left(\sqrt7\right)^2-\sqrt{(-6)^2}=7-|-6|=7-6=1.$$

Vậy giá trị của hai biểu thức lần lượt là $1{,}9$ và $1$.

**Đáp số.** a) $1{,}9$; b) $1$.
:::

:::exercise
So sánh:

a) $6$ và $\sqrt{35}$;
b) $\sqrt{10}-1$ và $2$.

::hint
**Kiến thức:** với $a$, $b\ge0$: $a<b\iff\sqrt{a}<\sqrt{b}$.

**Gợi ý các bước:**
1. Viết số nguyên dưới dạng căn: $6=\sqrt{36}$, $3=\sqrt9$.
2. So sánh hai số dưới dấu căn.

::solution
a) Ta có $6=\sqrt{36}$.

Vì $36>35$ nên $\sqrt{36}>\sqrt{35}$.

Vậy $6>\sqrt{35}$.

b) Ta có $3=\sqrt9$. Vì $10>9$ nên $\sqrt{10}>\sqrt9$, tức là $\sqrt{10}>3$.

Cộng $-1$ vào hai vế, ta được $\sqrt{10}-1>3-1$, tức là $\sqrt{10}-1>2$.

Vậy $\sqrt{10}-1>2$.

**Đáp số.** a) $6>\sqrt{35}$; b) $\sqrt{10}-1>2$.
:::

:::exercise
Tìm điều kiện của $x$ để mỗi căn thức sau xác định:

a) $\sqrt{3x-12}$;
b) $\sqrt{7-2x}$;
c) $\sqrt{x^2+4}$.

::hint
**Kiến thức:** $\sqrt{A}$ xác định khi $A\ge0$.

**Gợi ý các bước:**
1. Viết bất phương trình $A\ge0$.
2. Giải; nhớ đổi chiều khi chia cho số âm.

::solution
Căn thức $\sqrt A$ xác định khi biểu thức $A$ lấy giá trị không âm, tức là $A\ge0$.

a) $\sqrt{3x-12}$ xác định khi $3x-12\ge0$, hay $3x\ge12$, tức là $x\ge4$.

Vậy điều kiện xác định là $x\ge4$.

b) $\sqrt{7-2x}$ xác định khi $7-2x\ge0$, hay $-2x\ge-7$, tức là $x\le3{,}5$ (chia hai vế cho $-2<0$ nên đổi chiều).

Vậy điều kiện xác định là $x\le3{,}5$.

c) Vì $x^2\ge0$ với mọi $x$ nên $x^2+4\ge4>0$ với mọi $x$.

Vậy $\sqrt{x^2+4}$ xác định với mọi số thực $x$.

**Đáp số.** a) $x\ge4$; b) $x\le3{,}5$; c) mọi $x$.
:::

:::exercise
Rút gọn các biểu thức sau:

a) $\sqrt{\left(\sqrt3-1\right)^2}$;
b) $\sqrt{\left(3-\sqrt{11}\right)^2}$.

::hint
**Kiến thức:** $\sqrt{A^2}=|A|$.

**Gợi ý các bước:**
1. Xét dấu số bên trong (so sánh $\sqrt3$ với $1$, $\sqrt{11}$ với $3$).
2. Bỏ dấu giá trị tuyệt đối.

::solution
Áp dụng hằng đẳng thức $\sqrt{A^2}=|A|$.

a) Ta có $\sqrt{\left(\sqrt3-1\right)^2}=\left|\sqrt3-1\right|$.

Vì $3>1$ nên $\sqrt3>\sqrt1=1$, do đó $\sqrt3-1>0$. Suy ra $\left|\sqrt3-1\right|=\sqrt3-1$.

Vậy $\sqrt{\left(\sqrt3-1\right)^2}=\sqrt3-1$.

b) Ta có $\sqrt{\left(3-\sqrt{11}\right)^2}=\left|3-\sqrt{11}\right|$.

Vì $11>9$ nên $\sqrt{11}>\sqrt9=3$, do đó $3-\sqrt{11}<0$. Suy ra $\left|3-\sqrt{11}\right|=-\left(3-\sqrt{11}\right)=\sqrt{11}-3$.

Vậy $\sqrt{\left(3-\sqrt{11}\right)^2}=\sqrt{11}-3$.

**Đáp số.** a) $\sqrt3-1$; b) $\sqrt{11}-3$.
:::

:::exercise
Một tấm thảm hình vuông có diện tích $30$ m². Tính chu vi tấm thảm (làm tròn đến hàng phần mười).

::hint
**Kiến thức:** hình vuông diện tích $S$ có cạnh $\sqrt{S}$.

**Gợi ý các bước:**
1. Cạnh là $\sqrt{30}$ m.
2. Chu vi bằng $4$ lần cạnh; bấm máy rồi làm tròn ở bước cuối.

::solution
Gọi $a$ (m) là độ dài cạnh của tấm thảm ($a>0$).

Diện tích tấm thảm là $30$ m² nên $a^2=30$. Vì $a>0$ nên $a=\sqrt{30}$.

Chu vi tấm thảm là
$$4a=4\sqrt{30}\approx21{,}9\ \text{(m)}.$$

Vậy chu vi tấm thảm khoảng $21{,}9$ m.

**Đáp số.** Khoảng $21{,}9$ m.
:::

:::exercise
Dùng công thức $t=\sqrt{\dfrac{h}{5}}$ (giây) cho vật rơi tự do từ độ cao $h$ mét.

a) Một quả bóng rơi từ độ cao $80$ m. Sau bao lâu nó chạm đất?

b) Một viên bi rơi mất đúng $2{,}5$ giây. Viên bi được thả từ độ cao bao nhiêu?

::hint
**Kiến thức:** $t=\sqrt{\dfrac{h}{5}}\iff t^2=\dfrac{h}{5}\iff h=5t^2$ (với $t\ge0$).

**Gợi ý các bước:**
1. Câu a: thay $h=80$.
2. Câu b: dùng $h=5t^2$.

::solution
a) Thay $h=80$ vào công thức $t=\sqrt{\dfrac h5}$, ta được
$$t=\sqrt{\frac{80}{5}}=\sqrt{16}=4.$$

Vậy sau $4$ giây quả bóng chạm đất.

b) Thay $t=2{,}5$ vào công thức, ta được $\sqrt{\dfrac h5}=2{,}5$.

Bình phương hai vế (hai vế đều không âm), ta được $\dfrac h5=2{,}5^2=6{,}25$.

Suy ra $h=5\cdot6{,}25=31{,}25$.

Vậy viên bi được thả từ độ cao $31{,}25$ m.

**Đáp số.** a) $4$ giây; b) $31{,}25$ m.
:::

:::exercise
Rút gọn biểu thức $Q=\sqrt{x^2-6x+9}-x$ với $x\ge3$.

::hint
**Kiến thức:** hằng đẳng thức $(a-b)^2=a^2-2ab+b^2$ (lớp 8) và $\sqrt{A^2}=|A|$.

**Gợi ý các bước:**
1. Viết $x^2-6x+9=(x-3)^2$.
2. Với $x\ge3$, $|x-3|=x-3$.

::solution
Ta có $x^2-6x+9=(x-3)^2$. Do đó
$$Q=\sqrt{(x-3)^2}-x=|x-3|-x.$$

Vì $x\ge3$ nên $x-3\ge0$, suy ra $|x-3|=x-3$.

Do đó $Q=(x-3)-x=-3$.

Vậy với $x\ge3$ thì $Q=-3$.

**Đáp số.** $Q=-3$.
:::

:::exercise
Cho biểu thức $A=\sqrt{4x-8}$.

a) Tìm điều kiện xác định của $A$.

b) Tính giá trị của $A$ khi $x=6$.

c) Tìm $x$ để $A=6$.

::hint
**Kiến thức:** $\sqrt{B}$ xác định khi $B\ge0$; với $c\ge0$, $\sqrt{B}=c\iff B=c^2$.

**Gợi ý các bước:**
1. Giải $4x-8\ge0$.
2. Thay $x=6$.
3. Giải $4x-8=36$ và đối chiếu điều kiện.

::solution
a) Biểu thức $A=\sqrt{4x-8}$ xác định khi $4x-8\ge0$, hay $4x\ge8$, tức là $x\ge2$.

Vậy điều kiện xác định của $A$ là $x\ge2$.

b) Giá trị $x=6$ thoả mãn điều kiện $x\ge2$. Thay $x=6$ vào $A$, ta được
$$A=\sqrt{4\cdot6-8}=\sqrt{16}=4.$$

Vậy khi $x=6$ thì $A=4$.

c) Với $x\ge2$, ta có $A=6$ khi $\sqrt{4x-8}=6$.

Bình phương hai vế (hai vế đều không âm), ta được $4x-8=36$, hay $4x=44$, tức là $x=11$.

Ta thấy $x=11$ thoả mãn điều kiện $x\ge2$.

Vậy $A=6$ khi $x=11$.

**Đáp số.** a) $x\ge2$; b) $A=4$; c) $x=11$.
:::

:::exercise Thử thách
Tìm $x$, biết $\sqrt{x^2}=2x-3$.

::hint
**Kiến thức:** $\sqrt{x^2}=|x|\ge0$, nên vế phải cũng phải không âm.

**Gợi ý các bước:**
1. Điều kiện: $2x-3\ge0$, tức $x\ge1{,}5$.
2. Khi đó $x>0$ nên $|x|=x$; giải $x=2x-3$.

::solution
Ta có $\sqrt{x^2}=|x|$, nên đẳng thức đã cho trở thành $|x|=2x-3$.

Vì $|x|\ge0$ nên phải có $2x-3\ge0$, tức là $x\ge1{,}5$.

Với $x\ge1{,}5$ thì $x>0$, do đó $|x|=x$. Khi đó ta có
$$x=2x-3,$$
suy ra $x=3$.

Ta thấy $x=3$ thoả mãn điều kiện $x\ge1{,}5$. Thử lại: $\sqrt{3^2}=3$ và $2\cdot3-3=3$.

Vậy $x=3$.

**Đáp số.** $x=3$.
:::

## Kiểm tra mini

:::quiz
::mc
Căn bậc hai số học của $49$ là
A. $24{,}5$.
B. $-7$.
C. $7$ và $-7$.
D. $7$.
::key D
Ta có $7\ge0$ và $7^2=49$ nên căn bậc hai số học của $49$ là $7$. Phương án C là các căn bậc hai của $49$, còn A lấy $49$ chia $2$.

::mc
$\sqrt{(-8)^2}$ bằng
A. $-8$.
B. $8$.
C. $64$.
D. $\pm8$.
::key B
Ta có $\sqrt{(-8)^2}=|-8|=8$. Phương án A quên giá trị tuyệt đối, C quên khai căn.

::mc
Căn thức $\sqrt{6-3x}$ xác định khi
A. $x\le2$.
B. $x\ge-2$.
C. $x\ge2$.
D. $x\le-2$.
::key A
Căn thức xác định khi $6-3x\ge0\iff -3x\ge-6\iff x\le2$ (chia hai vế cho $-3$ thì đổi chiều). Phương án C quên đổi chiều.

::mc
$\sqrt{\left(\sqrt5-3\right)^2}$ bằng
A. $\sqrt5-3$.
B. $14-6\sqrt5$.
C. $3-\sqrt5$.
D. $3+\sqrt5$.
::key C
Vì $\sqrt5<\sqrt9=3$ nên $\sqrt5-3<0$. Do đó $\sqrt{\left(\sqrt5-3\right)^2}=\left|\sqrt5-3\right|=3-\sqrt5$. Phương án A quên xét dấu, B bình phương thay vì khai căn.

::tf
Cho biểu thức $A=\sqrt{2x+10}$. Xét tính đúng sai của các mệnh đề sau:
a) $A$ xác định khi $x\ge-5$.
b) Khi $x=3$ thì $A=4$.
c) Khi $x=-3$ thì $A=-2$.
d) $A=0$ khi $x=5$.
::key Đ Đ S S
a) Đúng. $A$ xác định khi $2x+10\ge0\iff x\ge-5$. b) Đúng. Khi $x=3$ ta có $A=\sqrt{16}=4$. c) Sai. Khi $x=-3$ ta có $A=\sqrt4=2$ (căn bậc hai số học không âm). d) Sai. Ta có $A=0\iff 2x+10=0\iff x=-5$.

::sa
Tính $\sqrt{0{,}81}+\sqrt{(-1{,}2)^2}$.
::key 2,1
Ta có $\sqrt{0{,}81}=0{,}9$ và $\sqrt{(-1{,}2)^2}=|-1{,}2|=1{,}2$. Do đó tổng bằng $0{,}9+1{,}2=2{,}1$.

::sa
Thời gian $t$ (giây) để một vật rơi tự do từ độ cao $h$ mét chạm đất được tính bởi công thức $t=\sqrt{\dfrac{h}{5}}$. Một vật rơi tự do từ độ cao $61{,}25$ m. Hỏi sau bao nhiêu giây vật chạm đất?
::key 3,5
Thay $h=61{,}25$ vào công thức, ta được $t=\sqrt{\dfrac{61{,}25}{5}}=\sqrt{12{,}25}=3{,}5$ (giây).
:::
