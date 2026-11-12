---
title: Hệ số góc của đường thẳng
description: Hiểu hệ số góc của đường thẳng y = ax + b, tính hệ số góc qua hai điểm, nhận biết đường thẳng song song hay cắt nhau và viết phương trình đường thẳng.
minutes: 25
---

:::goals
- Nhận biết hàm số bậc nhất $y=ax+b$ và hệ số góc $a$ của đường thẳng.
- Nhận biết đường thẳng đi lên hay đi xuống và độ dốc của nó qua hệ số góc.
- Tính hệ số góc của đường thẳng đi qua hai điểm và viết phương trình đường thẳng.
- Nhận biết hai đường thẳng song song, trùng nhau hoặc cắt nhau.
:::

Giả sử một đoạn đường dốc lên cao $3$ m khi người đi tiến ngang $40$ m. Để nói đường này dốc nhiều hay ít, ta so sánh độ cao tăng thêm với quãng đường đi ngang: $\dfrac{3}{40}=0{,}075$. Con số này cho biết mỗi mét đi ngang, đường lên cao thêm $0{,}075$ m, tức độ dốc là $7{,}5\%$.

Trong toán học, con số mô tả độ dốc của một đường thẳng gọi là hệ số góc. Nó cho biết đường thẳng đi lên hay đi xuống, và dốc nhiều hay ít. Hai đường thẳng có cùng độ dốc thì sao? Bài này trả lời những câu hỏi đó.

## Cùng khám phá

Ta vẽ ba đường thẳng $y=2x$, $y=0{,}5x$ và $y=-x$ trên cùng một mặt phẳng toạ độ. Với mỗi đường, hãy xem $y$ thay đổi bao nhiêu khi $x$ tăng thêm $1$.

:::graph Ba đường thẳng có độ dốc khác nhau
alt: Ba đường thẳng đi qua gốc toạ độ: y = 2x dốc lên mạnh, y = 0,5x dốc lên thoải, y = -x đi xuống
x: -3..3
y: -4..4
plot: 2x
plot: 0.5x
plot: -x
label: (1.6, 3.5) "y = 2x"
label: (2.6, 1.7) "y = 0,5x"
label: (-2.4, 3) "y = -x"
:::

Khi $x$ tăng $1$: với $y=2x$, $y$ tăng $2$; với $y=0{,}5x$, $y$ tăng $0{,}5$; với $y=-x$, $y$ giảm $1$. Những số $2$; $0{,}5$; $-1$ chính là hệ số của $x$ trong mỗi công thức. Dấu của chúng cho biết đường đi lên hay đi xuống, độ lớn cho biết dốc nhiều hay ít.

## Hệ số góc

:::definition Hàm số bậc nhất và hệ số góc
**Hàm số bậc nhất** là hàm số cho bởi công thức $y=ax+b$, trong đó $a$, $b$ là các số cho trước và $a\neq0$. Đồ thị của nó là một **đường thẳng**.

Số $a$ gọi là **hệ số góc** của đường thẳng $y=ax+b$.
:::

**Vì sao $a$ là độ dốc?** Khi $x$ tăng thêm $1$, giá trị $y=ax+b$ trở thành $a(x+1)+b=ax+b+a$, tức là $y$ tăng thêm đúng $a$. Vì vậy $a$ cho biết mỗi lần $x$ tăng $1$ thì $y$ thay đổi bao nhiêu.

Từ đó ta có các nhận xét:
- $a>0$: đường thẳng đi lên từ trái sang phải; $a<0$: đường thẳng đi xuống.
- Giá trị $|a|$ càng lớn thì đường thẳng càng dốc.
- Hằng số $b$ là tung độ của giao điểm với trục tung, vì khi $x=0$ thì $y=b$.

:::example Xác định hệ số góc
Tìm hệ số góc của mỗi đường thẳng và cho biết nó đi lên hay đi xuống:

a) $y=3x-2$.

b) $y=-\dfrac12x+1$.

c) $y=4-2x$.

**Lời giải.** Ta viết mỗi công thức dưới dạng $y=ax+b$ rồi đọc $a$.

a) $a=3>0$ nên đường thẳng đi lên.

b) $a=-\dfrac12<0$ nên đường thẳng đi xuống.

c) Viết $y=-2x+4$ nên $a=-2<0$ và đường thẳng đi xuống.

Vậy hệ số góc lần lượt là $3$; $-\dfrac12$; $-2$.
:::

Nếu biết hai điểm của đường thẳng, ta tính được hệ số góc từ định nghĩa "$y$ thay đổi bao nhiêu khi $x$ tăng $1$".

:::theorem Hệ số góc qua hai điểm
Đường thẳng đi qua hai điểm $A(x_1; y_1)$ và $B(x_2; y_2)$ với $x_1\neq x_2$ có hệ số góc
$$a=\frac{y_2-y_1}{x_2-x_1}.$$
:::

**Vì sao?** Vì $A$ và $B$ thuộc đường thẳng $y=ax+b$ nên $y_1=ax_1+b$ và $y_2=ax_2+b$. Trừ hai đẳng thức, ta được $y_2-y_1=a(x_2-x_1)$. Chia hai vế cho $x_2-x_1\neq0$, ta có công thức trên.

:::example Đường thẳng qua hai điểm
Viết phương trình đường thẳng đi qua $A(1; 2)$ và $B(3; 8)$.

**Lời giải.** Hệ số góc là $a=\dfrac{8-2}{3-1}=3$. Đường thẳng có dạng $y=3x+b$. Điểm $A(1; 2)$ thuộc đường thẳng nên $2=3\cdot1+b$, suy ra $b=-1$.

Kiểm tra với $B$: $3\cdot3-1=8$, đúng.

Vậy phương trình đường thẳng là $y=3x-1$.
:::

Ta vẽ đường thẳng bằng cách tìm hai điểm của nó rồi nối lại.

:::example Vẽ đồ thị hàm số bậc nhất
Vẽ đồ thị của hàm số $y=-2x+3$.

**Lời giải.** Hệ số góc $a=-2<0$ nên đường thẳng đi xuống. Cho $x=0$ thì $y=3$, được điểm $(0; 3)$. Cho $x=2$ thì $y=-1$, được điểm $(2; -1)$. Ta nối hai điểm đó, và kiểm tra thêm điểm $(1; 1)$: $-2\cdot1+3=1$, đúng.

Vậy đồ thị là đường thẳng đi qua $(0; 3)$ và $(2; -1)$.
:::

:::graph Đồ thị của hàm số $y=-2x+3$
alt: Đường thẳng đi xuống từ trái sang phải, đi qua các điểm (0; 3), (1; 1), (2; -1)
x: -2..4
y: -3..6
plot: -2x + 3
point: (0, 3) "(0; 3)" above-right
point: (1, 1) "(1; 1)" above-right
point: (2, -1) "(2; -1)" above-right
:::

## Hai đường thẳng song song, cắt nhau

:::theorem Vị trí của hai đường thẳng
Cho hai đường thẳng $d: y=ax+b$ và $d': y=a'x+b'$.
- $d\parallel d'$ (song song) khi $a=a'$ và $b\neq b'$.
- $d\equiv d'$ (trùng nhau) khi $a=a'$ và $b=b'$.
- $d$ và $d'$ cắt nhau khi $a\neq a'$.
:::

**Vì sao?** Nếu $a=a'$ thì hai đường dốc như nhau, đường này là đường kia dịch chuyển lên hoặc xuống $b'-b$ đơn vị: song song nếu $b\neq b'$, trùng nếu $b=b'$. Nếu $a\neq a'$, phương trình $ax+b=a'x+b'$ có đúng một nghiệm $x=\dfrac{b'-b}{a-a'}$, nên hai đường có đúng một điểm chung.

:::example Vị trí của ba đường thẳng
Xét ba đường thẳng $d_1: y=2x+1$, $d_2: y=2x-3$, $d_3: y=-x+4$. Hai đường nào song song? Tìm giao điểm của $d_1$ và $d_3$.

**Lời giải.** Hai đường $d_1$ và $d_2$ có cùng hệ số góc $2$ và $1\neq-3$ nên $d_1\parallel d_2$. Hệ số góc của $d_3$ là $-1$, khác $2$ nên $d_3$ cắt cả $d_1$ và $d_2$.

Giao điểm của $d_1$ và $d_3$ có hoành độ thoả mãn $2x+1=-x+4$, suy ra $3x=3$ và $x=1$. Khi đó $y=2\cdot1+1=3$.

Vậy $d_1\parallel d_2$ và $d_1$ cắt $d_3$ tại $(1; 3)$.
:::

:::graph Ba đường thẳng $d_1$, $d_2$, $d_3$
alt: Hai đường thẳng song song đi lên và một đường thẳng đi xuống cắt chúng, trong đó giao điểm của đường đi xuống với đường y = 2x + 1 là (1; 3)
x: -3..4
y: -6..8
plot: 2x + 1
plot: 2x - 3
plot: -x + 4
point: (1, 3) "(1; 3)" above-right
:::

:::example Viết phương trình đường thẳng
Viết phương trình đường thẳng:

a) có hệ số góc $2$ và đi qua $M(1; 5)$;

b) song song với $y=-3x+1$ và đi qua $N(2; -1)$.

**Lời giải.** a) Đường thẳng có dạng $y=2x+b$. Vì $M(1; 5)$ thuộc đường thẳng nên $5=2\cdot1+b$, suy ra $b=3$.

b) Hai đường song song nên có cùng hệ số góc $-3$; đường thẳng cần tìm có dạng $y=-3x+b$. Vì $N(2; -1)$ thuộc đường thẳng nên $-1=-3\cdot2+b$, suy ra $b=5$.

Vậy a) $y=2x+3$; b) $y=-3x+5$.
:::

Ta quay lại đoạn đường dốc ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Độ dốc của đường
Giả sử một đường dốc lên cao $3$ m khi đi ngang $40$ m. Tính độ dốc (hệ số góc) và cho biết khi đi ngang $100$ m thì đường lên cao thêm bao nhiêu mét.

**Lời giải.**

*Hiểu đề.* Độ cao $h$ tăng đều theo quãng đường ngang $x$; cần tính hệ số góc và $h$ khi $x=100$.

*Tìm cách giải.* Đường dốc đều là đường thẳng $h=ax$ qua gốc, với hệ số góc $a$ bằng độ cao chia quãng đường ngang.

*Giải.* Hệ số góc là $a=\dfrac{3}{40}=0{,}075$, tức độ dốc $7{,}5\%$. Hàm số là $h=0{,}075x$. Khi $x=100$: $h=0{,}075\cdot100=7{,}5$ (m).

*Nhìn lại.* Kiểm tra: $0{,}075\cdot40=3$ m, đúng với đề. Kết quả hợp lí vì đi ngang gấp hơn $2$ lần thì độ cao tăng gấp hơn $2$ lần.

Vậy độ dốc là $0{,}075$ ($7{,}5\%$) và đi ngang $100$ m thì đường lên cao thêm $7{,}5$ m.
:::

:::warning Những sai lầm thường gặp
- **Lấy hệ số tự do làm hệ số góc.** Sai: hệ số góc của $y=3x-2$ là $-2$. Lí do sai: hệ số góc là hệ số của $x$, còn $-2$ là tung độ của giao điểm với trục tung. Đúng: hệ số góc của $y=3x-2$ là $3$.
- **Đảo thứ tự khi tính hệ số góc.** Sai: $a=\dfrac{y_2-y_1}{x_1-x_2}$. Lí do sai: hiệu ở tử và ở mẫu phải cùng thứ tự điểm nên $a$ bị đổi dấu; với $A(1; 2)$, $B(3; 8)$ ta được $-3$ trong khi đường đi lên. Đúng: $a=\dfrac{y_2-y_1}{x_2-x_1}$.
- **Cho rằng cùng hệ số góc là song song.** Sai: $y=2x+1$ và $y=2x+1$ song song. Lí do sai: hai đường trùng nhau khi cả $b$ cũng bằng nhau. Đúng: song song cần $a=a'$ và $b\neq b'$.
:::

**Kết nối.** Bài này dùng hàm số, đồ thị và mặt phẳng toạ độ ở bài [khái niệm hàm số và đồ thị của hàm số](lesson:intro-functions-graphs), cùng phương trình bậc nhất để tìm giao điểm. Trong thực tế, hệ số góc là "tốc độ thay đổi": độ dốc của đường, giá mỗi gigabyte của gói cước, vận tốc của chuyển động đều.

## Thuật ngữ

:::terms
- hàm số bậc nhất | linear function
- hệ số góc | gradient
- đường thẳng | straight line
- song song | parallel
- trùng nhau | coincident
- cắt nhau | intersecting
- giao điểm | point of intersection
- tung độ gốc | $y$-intercept
- độ dốc | steepness
:::

## Tóm tắt

- Hàm số bậc nhất $y=ax+b$ ($a\neq0$) có đồ thị là đường thẳng; $a$ là hệ số góc, $b$ là tung độ giao điểm với trục tung.
- $a>0$: đường thẳng đi lên; $a<0$: đường thẳng đi xuống; $|a|$ càng lớn càng dốc.
- Đường thẳng qua $A(x_1; y_1)$, $B(x_2; y_2)$ có hệ số góc $a=\dfrac{y_2-y_1}{x_2-x_1}$.
- Song song: $a=a'$, $b\neq b'$; trùng nhau: $a=a'$, $b=b'$; cắt nhau: $a\neq a'$.
- Để vẽ đường thẳng chỉ cần hai điểm.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Xác định hệ số góc $a$ và hệ số $b$ của mỗi hàm số:

a) $y=-3x+5$.

b) $y=\dfrac{x}{4}-1$.

c) $y=4-2x$.

d) $y=7x$.

::hint
**Kiến thức:** viết về dạng $y=ax+b$.

**Gợi ý các bước:**
1. Sắp xếp số hạng chứa $x$ trước.
2. Đọc $a$ và $b$.

::solution
a) $a=-3$, $b=5$.

b) $y=\dfrac14x-1$ nên $a=\dfrac14$, $b=-1$.

c) $y=-2x+4$ nên $a=-2$, $b=4$.

d) $y=7x+0$ nên $a=7$, $b=0$.

**Đáp số.** a) $(-3; 5)$. b) $\left(\dfrac14; -1\right)$. c) $(-2; 4)$. d) $(7; 0)$.
:::

:::exercise
Hàm số nào đi lên, hàm số nào đi xuống?

a) $y=0{,}5x+2$.

b) $y=-4x+1$.

c) $y=1-3x$.

::hint
**Kiến thức:** dấu của hệ số góc cho biết đường thẳng đi lên ($a>0$) hay đi xuống ($a<0$).

**Gợi ý các bước:**
1. Tìm hệ số góc của từng hàm số.
2. Xét dấu.

::solution
a) $a=0{,}5>0$: đi lên. b) $a=-4<0$: đi xuống. c) $y=-3x+1$ nên $a=-3<0$: đi xuống.

Vậy a) đi lên; b) và c) đi xuống.

**Đáp số.** a) lên. b) xuống. c) xuống.
:::

:::exercise
Viết phương trình đường thẳng đi qua:

a) $A(-1; -3)$ và $B(2; 3)$.

b) $A(0; 5)$ và $B(4; 1)$.

::hint
**Kiến thức:** $a=\dfrac{y_2-y_1}{x_2-x_1}$, rồi tìm $b$.

**Gợi ý các bước:**
1. Tính hệ số góc $a$.
2. Thay toạ độ một điểm để tìm $b$.

::solution
a) $a=\dfrac{3-(-3)}{2-(-1)}=\dfrac63=2$. Từ $A$: $-3=2\cdot(-1)+b$, suy ra $b=-1$. Phương trình: $y=2x-1$. Kiểm tra với $B$: $2\cdot2-1=3$, đúng.

b) $a=\dfrac{1-5}{4-0}=-1$. Đường thẳng cắt trục tung tại $(0; 5)$ nên $b=5$. Phương trình: $y=-x+5$. Kiểm tra với $B$: $-4+5=1$, đúng.

**Đáp số.** a) $y=2x-1$. b) $y=-x+5$.
:::

:::exercise
Vẽ đồ thị của hàm số $y=\dfrac{x}{2}+1$.

::hint
**Kiến thức:** vẽ đường thẳng chỉ cần hai điểm.

**Gợi ý các bước:**
1. Chọn hai giá trị $x$ dễ tính, ví dụ $0$ và $2$.
2. Tính $y$ rồi nối hai điểm.

::solution
Cho $x=0$ thì $y=1$, được $(0; 1)$. Cho $x=2$ thì $y=2$, được $(2; 2)$. Nối hai điểm ta được đường thẳng đi lên (vì $a=\dfrac12>0$), đi qua thêm điểm $(-2; 0)$.

**Đáp số.** Đường thẳng đi qua $(0; 1)$ và $(2; 2)$.
:::

:::exercise
Cho bốn đường thẳng $d_1: y=2x+3$, $d_2: y=2x-5$, $d_3: y=-2x+3$, $d_4: y=2x+3$. Xét vị trí của $d_1$ với từng đường còn lại.

::hint
**Kiến thức:** so sánh hệ số góc và hệ số $b$.

**Gợi ý các bước:**
1. So sánh $a$ của $d_1$ với từng đường.
2. Nếu $a$ bằng nhau, so sánh $b$.

::solution
Với $d_2$: cùng $a=2$, $b$ khác ($3\neq-5$): song song. Với $d_3$: $a=-2\neq2$: cắt nhau, giao điểm có $2x+3=-2x+3$, suy ra $x=0$ và $y=3$, tức $(0; 3)$. Với $d_4$: cùng $a=2$ và cùng $b=3$: trùng nhau.

**Đáp số.** $d_1\parallel d_2$; $d_1$ cắt $d_3$ tại $(0; 3)$; $d_1\equiv d_4$.
:::

:::exercise
Viết phương trình đường thẳng đi qua $(0; 4)$ và song song với đường thẳng $y=3x-1$.

::hint
**Kiến thức:** hai đường song song có cùng hệ số góc.

**Gợi ý các bước:**
1. Hệ số góc cần tìm là $3$.
2. Đường thẳng cắt trục tung tại $(0; 4)$ nên $b=4$.

::solution
Đường thẳng song song với $y=3x-1$ nên có dạng $y=3x+b$ với $b\neq-1$. Vì đi qua $(0; 4)$ nên $4=3\cdot0+b$, suy ra $b=4\neq-1$.

Vậy phương trình đường thẳng là $y=3x+4$.

**Đáp số.** $y=3x+4$.
:::

:::exercise
Giả sử hai gói cước điện thoại có số tiền (đồng) khi dùng $x$ GB thêm là $A: y=6\,000x+40\,000$ và $B: y=4\,000x+60\,000$. Nêu ý nghĩa của hệ số góc mỗi gói. Dùng bao nhiêu GB thì hai gói tốn tiền bằng nhau? Từ mức đó trở lên gói nào rẻ hơn?

::hint
**Kiến thức:** hệ số góc là số tiền tăng thêm cho mỗi GB; tìm giao điểm bằng cách cho hai biểu thức bằng nhau.

**Gợi ý các bước:**
1. Giải $6\,000x+40\,000=4\,000x+60\,000$.
2. Thử một giá trị $x$ lớn hơn nghiệm.

::solution
Hệ số góc $6\,000$ và $4\,000$ là giá mỗi GB thêm của gói A và gói B. Phương trình $6\,000x+40\,000=4\,000x+60\,000$ cho $2\,000x=20\,000$, suy ra $x=10$; khi đó cả hai gói tốn $100\,000$ đồng. Với $x=11$: gói A tốn $106\,000$, gói B tốn $104\,000$, nên từ đó trở đi gói B rẻ hơn (hệ số góc nhỏ hơn).

Vậy dùng $10$ GB thì hai gói bằng nhau; trên $10$ GB gói B rẻ hơn.

**Đáp số.** $10$ GB; gói B rẻ hơn khi dùng trên $10$ GB.
:::

:::exercise
Giả sử đường A lên cao $6$ m khi đi ngang $80$ m, đường B lên cao $5$ m khi đi ngang $60$ m. Đường nào dốc hơn?

::hint
**Kiến thức:** độ dốc là độ cao chia quãng đường ngang.

**Gợi ý các bước:**
1. Tính hệ số góc của từng đường.
2. So sánh hai số.

::solution
Đường A có hệ số góc $\dfrac{6}{80}=0{,}075$. Đường B có hệ số góc $\dfrac{5}{60}\approx0{,}0833$. Vì $0{,}0833>0{,}075$ nên đường B dốc hơn.

Vậy đường B dốc hơn đường A.

**Đáp số.** Đường B.
:::

:::exercise
Tìm giao điểm của hai đường thẳng $y=2x-1$ và $y=-x+5$. (Ôn lại [phương trình bậc nhất](lesson:linear-equations-one-unknown).)

::hint
**Kiến thức:** tại giao điểm, hai giá trị $y$ bằng nhau.

**Gợi ý các bước:**
1. Giải $2x-1=-x+5$.
2. Thay $x$ vào một hàm số để tìm $y$.

::solution
Ta có $2x-1=-x+5$, suy ra $3x=6$ và $x=2$. Khi đó $y=2\cdot2-1=3$.

Kiểm tra: $-2+5=3$.

Vậy giao điểm là $(2; 3)$.

**Đáp số.** $(2; 3)$.
:::

:::exercise Thử thách
Chứng minh ba điểm $A(1; 3)$, $B(2; 5)$, $C(4; 9)$ thẳng hàng.

::hint
**Kiến thức:** ba điểm thẳng hàng khi các hệ số góc $AB$ và $AC$ bằng nhau.

**Gợi ý các bước:**
1. Tính hệ số góc của đường thẳng $AB$.
2. Tính hệ số góc của đường thẳng $AC$ rồi so sánh.

::solution
Hệ số góc của $AB$ là $\dfrac{5-3}{2-1}=2$. Hệ số góc của $AC$ là $\dfrac{9-3}{4-1}=\dfrac63=2$. Hai hệ số góc bằng nhau và hai đường thẳng $AB$, $AC$ cùng đi qua $A$ nên trùng nhau.

Vậy $A$, $B$, $C$ thẳng hàng (cùng nằm trên đường thẳng $y=2x+1$).

**Đáp số.** Đã chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Hệ số góc của đường thẳng $y=4-2x$ là
A. $4$.
B. $2$.
C. $-4$.
D. $-2$.
::key D
Viết $y=-2x+4$ nên $a=-2$. A lấy hệ số tự do, B bỏ dấu, C nhầm cả dấu và giá trị.

::mc
Đường thẳng đi qua $A(1; 2)$ và $B(3; 8)$ có hệ số góc là
A. $3$.
B. $6$.
C. $\dfrac13$.
D. $2$.
::key A
$a=\dfrac{8-2}{3-1}=3$. B quên chia, C đảo tỉ số, D nhầm với $3-1$.

::mc
Cặp đường thẳng nào song song?
A. $y=2x+1$ và $y=-2x+1$.
B. $y=2x+1$ và $y=2x-4$.
C. $y=x+1$ và $y=2x+1$.
D. $y=2x+1$ và $y=2x+1$.
::key B
Hai đường có cùng $a=2$ và $b$ khác nhau. A và C cắt nhau (khác hệ số góc), D trùng nhau.

::mc
Đường thẳng có hệ số góc $-2$ và đi qua $(0; 3)$ có phương trình
A. $y=3x-2$.
B. $y=-2x-3$.
C. $y=-2x+3$.
D. $y=2x+3$.
::key C
Hệ số góc $a=-2$ và tung độ giao điểm với trục tung $b=3$. A đảo hai hệ số, B sai dấu của $b$, D sai dấu của $a$.

::tf
Cho đường thẳng $d: y=-3x+6$. Xét tính đúng sai của các mệnh đề sau:
a) Hệ số góc của $d$ là $-3$.
b) $d$ đi lên từ trái sang phải.
c) $d$ cắt trục tung tại điểm $(0; 6)$.
d) $d$ song song với đường thẳng $y=-3x+2$.
::key Đ S Đ Đ
a) Đúng. b) Sai: $a=-3<0$ nên $d$ đi xuống. c) Đúng: $x=0$ cho $y=6$. d) Đúng: cùng $a=-3$ và $6\neq2$.

::sa
Đường thẳng đi qua $A(2; 1)$ và $B(6; 9)$ có hệ số góc bằng bao nhiêu?
::key 2
$a=\dfrac{9-1}{6-2}=2$.

::sa
Đường dốc lên cao $2$ m khi đi ngang $25$ m. Hệ số góc (độ dốc) bằng bao nhiêu?
::key 0,08
$\dfrac{2}{25}=0{,}08$.
:::
