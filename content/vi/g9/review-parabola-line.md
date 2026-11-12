---
title: "Chuyên đề: parabol y = ax² và đường thẳng"
description: Ôn đồ thị hàm số y = ax², cách tìm giao điểm của parabol và đường thẳng bằng phương trình hoành độ giao điểm, theo kiểu đề thi vào lớp 10.
minutes: 25
---

:::goals
- Nhận biết tính chất và vẽ được đồ thị parabol $y=ax^2$ ($a\neq0$).
- Biết vẽ đường thẳng $y=kx+b$ và xác định đường thẳng khi biết hai điểm của nó.
- Tìm giao điểm của parabol và đường thẳng bằng phương trình hoành độ giao điểm, và biết số giao điểm phụ thuộc vào dấu của $\Delta$.
- Vận dụng vào các câu hỏi thường gặp trong đề thi vào lớp 10 và các bài toán thực tế.
:::

Giả sử mặt cắt của một chiếc ăng-ten chảo có dạng parabol $y=\dfrac{x^2}8$ (đơn vị: dm), đặt đỉnh ở gốc toạ độ, miệng chảo quay lên trên. Nếu đường kính miệng chảo là $8$ dm thì chảo sâu bao nhiêu? Và nếu ta muốn chảo có đường kính $12$ dm thì cần sâu bao nhiêu?

Hai câu hỏi này đều quy về việc **đọc toạ độ điểm trên parabol**. Trong đề thi vào lớp 10, parabol thường đi cùng một đường thẳng, và câu hỏi quen thuộc là tìm giao điểm của chúng. Bài này ôn lại các công cụ cần dùng.

## Đồ thị hàm số $y=ax^2$

### Khám phá: bảng giá trị của $y=x^2$

Ta lập bảng giá trị của hàm số $y=x^2$:

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $y$ | $9$ | $4$ | $1$ | $0$ | $1$ | $4$ | $9$ |

Hai giá trị đối nhau của $x$ cho cùng một giá trị của $y$, nên các điểm $(-2;4)$ và $(2;4)$ đối xứng với nhau qua trục tung. Nối các điểm này lại, ta được một đường cong gọi là **parabol**.

:::graph Đồ thị hàm số $y=x^2$
alt: Parabol y bằng x bình phương có đỉnh ở gốc toạ độ, mở lên trên, đi qua các điểm (-2; 4), (-1; 1), (1; 1) và (2; 4)
x: -3..3
y: -1..6
plot: x^2
point: (0, 0) "O" below-right
point: (-2, 4) "(-2; 4)" above-left
point: (-1, 1) "(-1; 1)" left
point: (1, 1) "(1; 1)" right
point: (2, 4) "(2; 4)" above-right
:::

:::theorem Tính chất của đồ thị $y=ax^2$
Đồ thị của hàm số $y=ax^2$ ($a\neq0$) là một **parabol** có đỉnh $O$ và nhận trục $Oy$ làm trục đối xứng.
- Nếu $a>0$: parabol nằm phía trên trục hoành, mở lên trên; $y\geq0$ và $y=0$ chỉ khi $x=0$ (giá trị nhỏ nhất của $y$).
- Nếu $a<0$: parabol nằm phía dưới trục hoành, mở xuống dưới; $y\leq0$ và $y=0$ chỉ khi $x=0$ (giá trị lớn nhất của $y$).
:::

**Vì sao như vậy?** Vì $x^2\geq0$ nên dấu của $y=ax^2$ là dấu của $a$, còn $y=0$ chỉ khi $x=0$. Mặt khác $(-x)^2=x^2$ nên hai điểm có hoành độ đối nhau cùng có tung độ, từ đó có tính đối xứng qua $Oy$. Khi vẽ, ta chỉ cần tính vài cặp điểm đối xứng rồi nối bằng một đường cong trơn.

:::example Điểm thuộc parabol, xác định $a$
a) Parabol $(P)\colon y=ax^2$ đi qua điểm $A(2;-2)$. Tìm $a$ và cho biết điểm $B(-4;-8)$, $C(2;2)$ có thuộc $(P)$ không.

b) Tìm các điểm của $(P)$ có tung độ bằng $-18$.

**Lời giải.**

a) Vì $A(2;-2)$ thuộc $(P)$ nên $-2=a\cdot2^2$, suy ra $a=-\dfrac12$. Do đó $(P)\colon y=-\dfrac12x^2$. Với $x=-4$ thì $y=-\dfrac12\cdot16=-8$ nên $B(-4;-8)$ thuộc $(P)$. Với $x=2$ thì $y=-2\neq2$ nên $C(2;2)$ không thuộc $(P)$.

b) Từ $-\dfrac12x^2=-18$ ta có $x^2=36$, suy ra $x=6$ hoặc $x=-6$. Hai điểm cần tìm là $(6;-18)$ và $(-6;-18)$.

**Đáp số.** a) $a=-\dfrac12$; $B$ thuộc $(P)$, $C$ không thuộc $(P)$; b) $(6;-18)$ và $(-6;-18)$.
:::

:::example Ăng-ten chảo
Giả sử mặt cắt của một chiếc ăng-ten chảo là parabol $y=\dfrac{x^2}8$ (đơn vị: dm). a) Tính độ sâu của chảo nếu đường kính miệng chảo là $8$ dm. b) Nếu chảo sâu $4{,}5$ dm thì đường kính miệng chảo là bao nhiêu?

**Lời giải.**

a) Đường kính miệng là $8$ dm nên điểm ở mép chảo có hoành độ $x=4$ (và $x=-4$). Với $x=4$ thì $y=\dfrac{16}{8}=2$. Vậy chảo sâu $2$ dm.

b) Với $y=4{,}5$ thì $\dfrac{x^2}8=4{,}5$, suy ra $x^2=36$ và $x=\pm6$. Đường kính miệng chảo là $6-(-6)=12$ (dm).

Vậy chảo sâu $2$ dm khi đường kính là $8$ dm, và đường kính là $12$ dm khi chảo sâu $4{,}5$ dm.
:::

## Đường thẳng và giao điểm với parabol

Đường thẳng $(d)\colon y=kx+b$ cắt trục tung tại $(0;b)$ và có **hệ số góc** $k$. Để vẽ $(d)$ ta chỉ cần hai điểm, thường là giao điểm với hai trục toạ độ. Khi biết $(d)$ đi qua hai điểm $A(x_A;y_A)$ và $B(x_B;y_B)$ ta lập hệ phương trình ẩn $k$, $b$.

:::theorem Giao điểm của parabol và đường thẳng
Cho parabol $(P)\colon y=ax^2$ và đường thẳng $(d)\colon y=kx+b$. Hoành độ giao điểm của $(P)$ và $(d)$ là nghiệm của **phương trình hoành độ giao điểm**
$$ax^2=kx+b\iff ax^2-kx-b=0.$$
- Nếu $\Delta>0$ (hoặc $\Delta'>0$): $(d)$ cắt $(P)$ tại hai điểm phân biệt.
- Nếu $\Delta=0$: $(d)$ tiếp xúc với $(P)$ (có một điểm chung).
- Nếu $\Delta<0$: $(d)$ và $(P)$ không có điểm chung.

Sau khi tìm được hoành độ $x_0$, ta tính tung độ bằng cách thay $x_0$ vào $y=kx+b$ hoặc vào $y=ax^2$.
:::

**Vì sao như vậy?** Một điểm $(x_0;y_0)$ nằm trên cả $(P)$ và $(d)$ khi và chỉ khi $y_0=ax_0^2$ và $y_0=kx_0+b$. Thay $y_0$ từ phương trình thứ hai vào phương trình thứ nhất ta được $ax_0^2=kx_0+b$. Do đó mỗi nghiệm của phương trình hoành độ giao điểm cho đúng một giao điểm, và số giao điểm bằng số nghiệm.

:::example Tìm giao điểm
Cho parabol $(P)\colon y=x^2$ và đường thẳng $(d)\colon y=2x+3$. Tìm toạ độ giao điểm của $(P)$ và $(d)$.

**Lời giải.** Phương trình hoành độ giao điểm là $x^2=2x+3$, tức là $x^2-2x-3=0$. Ta có $a-b+c=1+2-3=0$ nên $x_1=-1$ và $x_2=-\dfrac ca=3$. Thay vào $y=x^2$: với $x=-1$ thì $y=1$, với $x=3$ thì $y=9$.

Vậy $(P)$ và $(d)$ cắt nhau tại hai điểm $(-1;1)$ và $(3;9)$.
:::

:::graph Parabol $y=x^2$ và đường thẳng $y=2x+3$
alt: Parabol y bằng x bình phương và đường thẳng y bằng 2x cộng 3 cắt nhau tại hai điểm (-1; 1) và (3; 9)
x: -3..4
y: -1..10
plot: x^2
plot: 2x + 3
point: (-1, 1) "(-1; 1)" above-left
point: (3, 9) "(3; 9)" above-left
point: (0, 0) "O" below-right
:::

:::example Ba vị trí tương đối
Cho parabol $(P)\colon y=x^2$. Xét vị trí của $(P)$ với các đường thẳng

a) $(d_1)\colon y=2x-1$;

b) $(d_2)\colon y=2x-3$.

**Lời giải.**

a) Phương trình hoành độ giao điểm: $x^2=2x-1$, tức là $x^2-2x+1=0$, hay $(x-1)^2=0$. Phương trình có nghiệm kép $x=1$, nên $(d_1)$ tiếp xúc với $(P)$ tại điểm $(1;1)$.

b) Phương trình hoành độ giao điểm: $x^2=2x-3$, tức là $x^2-2x+3=0$. Ta có $\Delta'=1-3=-2<0$ nên $(d_2)$ và $(P)$ không có điểm chung.

**Đáp số.** a) Tiếp xúc tại $(1;1)$; b) không giao nhau.
:::

:::example Một câu hỏi kiểu đề thi
**Bài 3.** ($2{,}5$ điểm) Cho parabol $(P)\colon y=\dfrac12x^2$ và đường thẳng $(d)\colon y=x+4$. a) Tìm toạ độ các giao điểm $A$, $B$ của $(P)$ và $(d)$. b) Tính diện tích tam giác $OAB$.

**Lời giải.**

*Hiểu đề.* Cần giải phương trình hoành độ giao điểm để có hai điểm $A$, $B$, rồi tính diện tích tam giác $OAB$ với $O$ là gốc toạ độ.

*Tìm cách giải.* Sau khi có $A$, $B$, ta tìm giao điểm $C$ của $(d)$ với trục tung. $OC$ là một đáy chung chia tam giác $OAB$ thành hai tam giác có đường cao là các hoành độ của $A$ và $B$.

*Giải.*

a) Phương trình hoành độ giao điểm: $\dfrac12x^2=x+4$, suy ra $x^2-2x-8=0$. Ta có $\Delta'=1+8=9>0$ nên $x=1+3=4$ hoặc $x=1-3=-2$. Với $x=4$ thì $y=4+4=8$; với $x=-2$ thì $y=-2+4=2$. Vậy $A(4;8)$ và $B(-2;2)$.

b) Đường thẳng $(d)$ cắt trục tung tại $C(0;4)$ nên $OC=4$. $C$ nằm giữa $A$ và $B$ theo hoành độ, và $O$, $C$ nằm trên trục tung. Do đó
$$S_{OAB}=S_{OCA}+S_{OCB}=\tfrac12\cdot OC\cdot4+\tfrac12\cdot OC\cdot2=\tfrac12\cdot4\cdot(4+2)=12.$$

Vậy $A(4;8)$, $B(-2;2)$ và diện tích tam giác $OAB$ bằng $12$ (đơn vị diện tích).

*Nhìn lại.* Tính bằng công thức toạ độ: $S=\dfrac12|x_Ay_B-x_By_A|=\dfrac12|4\cdot2-(-2)\cdot8|=\dfrac12\cdot24=12$, trùng với kết quả trên.
:::

:::graph Parabol $y=\dfrac12x^2$ và đường thẳng $y=x+4$
alt: Parabol y bằng một phần hai x bình phương và đường thẳng y bằng x cộng 4 cắt nhau tại A (4; 8) và B (-2; 2); đường thẳng cắt trục tung tại C (0; 4)
x: -4..6
y: -1..10
plot: x^2/2
plot: x + 4
point: (4, 8) "A" above-left
point: (-2, 2) "B" above-left
point: (0, 4) "C" above-left
point: (0, 0) "O" below-right
:::

:::warning Lỗi hay gặp
- **Quên điều kiện $a\neq0$ hoặc nhầm hướng mở.** Sai: cho rằng $y=-x^2$ mở lên trên. Vì sao sai: khi $a<0$ thì $y\leq0$ với mọi $x$. Đúng: $a<0$ thì parabol mở xuống dưới.
- **Lập sai phương trình hoành độ giao điểm.** Sai: với $y=x^2$ và $y=2x+3$ viết $x^2-2x+3=0$. Vì sao sai: chuyển $2x+3$ sang vế trái phải đổi dấu cả hai số hạng. Đúng: $x^2-2x-3=0$.
- **Chỉ tìm hoành độ mà không tìm tung độ.** Sai: kết luận giao điểm là $x=-1$ và $x=3$. Vì sao sai: giao điểm là một điểm có hai toạ độ. Đúng: thay vào hàm số để được $(-1;1)$ và $(3;9)$.
- **Nhầm "tiếp xúc" với "không giao".** Sai: $\Delta=0$ nghĩa là $(d)$ và $(P)$ không có điểm chung. Vì sao sai: nghiệm kép cho đúng một điểm chung. Đúng: $\Delta=0$ thì $(d)$ tiếp xúc với $(P)$; $\Delta<0$ mới không có điểm chung.
- **Tính $y$ sai dấu.** Sai: với $y=-\dfrac12x^2$ và $x=-4$ viết $y=\dfrac12\cdot(-4)^2=8$. Vì sao sai: bỏ mất dấu của hệ số $a$. Đúng: $y=-\dfrac12\cdot16=-8$.
:::

**Kết nối.** Bài này dùng phương trình bậc hai và định lí Viète để tìm hoành độ giao điểm, hệ phương trình để xác định đường thẳng, và công thức diện tích tam giác. Đồ thị cho ta một cách nhìn bằng hình ảnh của chính các phương trình đó: số nghiệm của phương trình là số giao điểm.

## Thuật ngữ

:::terms
- parabol | parabola
- đỉnh | vertex
- trục đối xứng | axis of symmetry
- đồ thị | graph
- hệ số góc | gradient
- giao điểm | point of intersection
- phương trình hoành độ giao điểm | equation for the x-coordinates of the intersection points
- tiếp xúc | tangent to (touching at one point)
- hoành độ, tung độ | x-coordinate, y-coordinate
- giá trị lớn nhất, giá trị nhỏ nhất | maximum value, minimum value
:::

## Tóm tắt

- Đồ thị $y=ax^2$ ($a\neq0$) là parabol có đỉnh $O$, trục đối xứng $Oy$; $a>0$ mở lên (giá trị nhỏ nhất $0$), $a<0$ mở xuống (giá trị lớn nhất $0$).
- Đường thẳng $y=kx+b$ cắt trục tung tại $(0;b)$; xác định đường thẳng qua hai điểm bằng hệ phương trình ẩn $k$, $b$.
- Giao điểm của $(P)\colon y=ax^2$ và $(d)\colon y=kx+b$: giải $ax^2=kx+b$. $\Delta>0$ hai điểm, $\Delta=0$ tiếp xúc, $\Delta<0$ không giao.
- Sau khi có hoành độ, thay vào hàm số để tìm tung độ rồi viết toạ độ điểm.
- Diện tích tam giác $OAB$ có thể tính bằng cách chia theo trục tung hoặc bằng công thức toạ độ.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và gợi ý bước đầu. Hãy tự làm trước rồi mới mở lời giải.

:::exercise
Cho parabol $(P)\colon y=-\dfrac12x^2$. Điểm nào trong các điểm $A(2;-2)$, $B(-4;-8)$, $C(2;2)$, $D(6;-18)$ thuộc $(P)$?

::hint
**Kiến thức:** điểm thuộc đồ thị khi toạ độ thoả mãn phương trình.

**Gợi ý các bước:**
1. Thay hoành độ vào hàm số để tính tung độ.
2. So sánh với tung độ đã cho.

::solution
Với $x=2$: $y=-\dfrac12\cdot4=-2$, nên $A(2;-2)$ thuộc $(P)$ còn $C(2;2)$ không thuộc. Với $x=-4$: $y=-\dfrac12\cdot16=-8$ nên $B$ thuộc $(P)$. Với $x=6$: $y=-\dfrac12\cdot36=-18$ nên $D$ thuộc $(P)$.

**Đáp số.** $A$, $B$, $D$ thuộc $(P)$; $C$ không thuộc.
:::

:::exercise
Parabol $(P)\colon y=ax^2$ đi qua điểm $M(-3;6)$. Tìm $a$ và các điểm của $(P)$ có tung độ bằng $24$.

::hint
**Kiến thức:** thay toạ độ của điểm vào phương trình để tìm $a$.

**Gợi ý các bước:**
1. Thay $x=-3$, $y=6$ vào $y=ax^2$.
2. Giải phương trình $ax^2=24$.

::solution
Ta có $6=a\cdot9$, suy ra $a=\dfrac23$. Với $y=24$: $\dfrac23x^2=24$, suy ra $x^2=36$ và $x=\pm6$. Hai điểm là $(6;24)$ và $(-6;24)$.

**Đáp số.** $a=\dfrac23$; $(6;24)$ và $(-6;24)$.
:::

:::exercise
Đường thẳng $(d)\colon y=kx+b$ đi qua hai điểm $A(1;3)$ và $B(3;7)$. Tìm $k$, $b$ và toạ độ giao điểm của $(d)$ với hai trục toạ độ.

::hint
**Kiến thức:** thay toạ độ hai điểm vào phương trình đường thẳng để được hệ.

**Gợi ý các bước:**
1. Lập hệ phương trình ẩn $k$, $b$.
2. Giao điểm với $Ox$: $y=0$; với $Oy$: $x=0$.

::solution
Ta có $\begin{cases}k+b=3\\3k+b=7.\end{cases}$ Trừ vế với vế, ta được $2k=4$, suy ra $k=2$ và $b=1$. Vậy $(d)\colon y=2x+1$. Giao với $Oy$ tại $(0;1)$. Giao với $Ox$: $2x+1=0$, suy ra $x=-\dfrac12$, tức là $\left(-\dfrac12;0\right)$.

**Đáp số.** $y=2x+1$; $(0;1)$ và $\left(-\dfrac12;0\right)$.
:::

:::exercise
Tìm toạ độ giao điểm của parabol $(P)\colon y=x^2$ và đường thẳng $(d)\colon y=x+2$.

::hint
**Kiến thức:** phương trình hoành độ giao điểm.

**Gợi ý các bước:**
1. Giải $x^2=x+2$.
2. Tính tung độ từ $y=x+2$.

::solution
Ta có $x^2-x-2=0$. Vì $a-b+c=1+1-2=0$ nên $x_1=-1$ và $x_2=2$. Với $x=-1$ thì $y=1$; với $x=2$ thì $y=4$.

**Đáp số.** $(-1;1)$ và $(2;4)$.
:::

:::exercise
**Bài 3.** ($2{,}0$ điểm) Cho parabol $(P)\colon y=\dfrac14x^2$ và đường thẳng $(d)\colon y=\dfrac12x+2$. a) Tìm toạ độ các giao điểm $A$, $B$ của $(P)$ và $(d)$. b) Tính độ dài đoạn thẳng $AB$.

::hint
**Kiến thức:** phương trình hoành độ giao điểm; $AB=\sqrt{(x_A-x_B)^2+(y_A-y_B)^2}$.

**Gợi ý các bước:**
1. Giải $\dfrac14x^2=\dfrac12x+2$ (nhân hai vế với $4$).
2. Tính tung độ của $A$, $B$ rồi tính $AB$.

::solution
a) Ta có $\dfrac14x^2=\dfrac12x+2$, suy ra $x^2-2x-8=0$. Ta có $\Delta'=1+8=9$ nên $x=4$ hoặc $x=-2$. Với $x=4$: $y=\dfrac12\cdot4+2=4$; với $x=-2$: $y=\dfrac12\cdot(-2)+2=1$. Vậy $A(4;4)$ và $B(-2;1)$.

b) $AB=\sqrt{(4+2)^2+(4-1)^2}=\sqrt{36+9}=\sqrt{45}=3\sqrt5$.

**Đáp số.** a) $A(4;4)$, $B(-2;1)$; b) $AB=3\sqrt5$.
:::

:::exercise
Cho parabol $(P)\colon y=x^2$. Mỗi đường thẳng sau có bao nhiêu điểm chung với $(P)$?

a) $(d_1)\colon y=4x-4$;

b) $(d_2)\colon y=2x-2$;

c) $(d_3)\colon y=3x$.

::hint
**Kiến thức:** số nghiệm của phương trình hoành độ giao điểm.

**Gợi ý các bước:**
1. Lập phương trình hoành độ giao điểm cho từng đường.
2. Xét dấu của $\Delta$ (hoặc $\Delta'$).

::solution
a) $x^2=4x-4\iff x^2-4x+4=0\iff(x-2)^2=0$: nghiệm kép $x=2$, một điểm chung $(2;4)$ (tiếp xúc).

b) $x^2=2x-2\iff x^2-2x+2=0$, có $\Delta'=1-2=-1<0$: không có điểm chung.

c) $x^2=3x\iff x(x-3)=0$: $x=0$ hoặc $x=3$, hai điểm chung $(0;0)$ và $(3;9)$.

**Đáp số.** a) $1$ điểm; b) $0$ điểm; c) $2$ điểm.
:::

:::exercise
Giả sử mặt cắt của một chiếc chảo là parabol $y=\dfrac{x^2}4$ (đơn vị: dm). a) Nếu đường kính miệng chảo là $10$ dm thì chảo sâu bao nhiêu? b) Tại độ sâu $4$ dm thì đường kính của chảo là bao nhiêu?

::hint
**Kiến thức:** điểm ở mép chảo có hoành độ bằng một nửa đường kính.

**Gợi ý các bước:**
1. Ở ý a), thay $x=5$.
2. Ở ý b), giải $\dfrac{x^2}4=4$.

::solution
a) Điểm ở mép có $x=5$, nên $y=\dfrac{25}{4}=6{,}25$. Chảo sâu $6{,}25$ dm.

b) Với $y=4$: $\dfrac{x^2}4=4$ nên $x^2=16$ và $x=\pm4$. Đường kính tại độ sâu $4$ dm là $8$ dm.

**Đáp số.** a) $6{,}25$ dm; b) $8$ dm.
:::

:::exercise
Cho hàm số $y=-2x^2$. a) Tính giá trị của hàm số tại $x=-3$. b) Tìm $x$ để $y=-8$. c) Hàm số có giá trị lớn nhất hay nhỏ nhất? Giá trị đó bằng bao nhiêu?

::hint
**Kiến thức:** với $a<0$ thì $y\leq0$ và $y=0$ chỉ khi $x=0$.

**Gợi ý các bước:**
1. Thay $x=-3$ để tính $y$.
2. Giải $-2x^2=-8$.

::solution
a) Tại $x=-3$: $y=-2\cdot9=-18$.

b) $-2x^2=-8$ nên $x^2=4$, suy ra $x=2$ hoặc $x=-2$.

c) Vì $a=-2<0$ nên $y=-2x^2\leq0$ với mọi $x$, và $y=0$ khi $x=0$. Hàm số có giá trị lớn nhất bằng $0$ (tại $x=0$) và không có giá trị nhỏ nhất.

**Đáp số.** a) $-18$; b) $x=\pm2$; c) giá trị lớn nhất bằng $0$.
:::

:::exercise Thử thách
Cho parabol $(P)\colon y=x^2$ và đường thẳng $(d)\colon y=x+2$ cắt nhau tại hai điểm $A$, $B$. Tính diện tích tam giác $OAB$.

::hint
**Kiến thức:** tìm $A$, $B$ và giao điểm $C$ của $(d)$ với trục tung.

**Gợi ý các bước:**
1. Tìm toạ độ $A$, $B$ bằng phương trình hoành độ giao điểm.
2. Chia tam giác $OAB$ thành hai tam giác chung đáy $OC$.

::solution
Phương trình hoành độ giao điểm: $x^2-x-2=0$ có nghiệm $x=2$ và $x=-1$, nên $A(2;4)$ và $B(-1;1)$. Đường thẳng $(d)$ cắt $Oy$ tại $C(0;2)$, nên $OC=2$. Diện tích là $S_{OAB}=\dfrac12\cdot OC\cdot(|x_A|+|x_B|)=\dfrac12\cdot2\cdot(2+1)=3$. Kiểm tra bằng công thức toạ độ: $\dfrac12|2\cdot1-(-1)\cdot4|=\dfrac12\cdot6=3$.

**Đáp số.** $3$ (đơn vị diện tích).
:::

## Kiểm tra mini

:::quiz
::mc
Điểm nào sau đây thuộc đồ thị hàm số $y=-3x^2$?
A. $(1;3)$.
B. $(2;6)$.
C. $(-1;-3)$.
D. $(-2;12)$.
::key C
$y(-1)=-3\cdot1=-3$. Đáp án A bỏ dấu của $a$, B lấy $3\cdot2$, D bỏ dấu của $a$ và tính $3\cdot4$.

::mc
Parabol $y=ax^2$ đi qua điểm $(-3;-18)$. Giá trị của $a$ là
A. $2$.
B. $-6$.
C. $6$.
D. $-2$.
::key D
$-18=a\cdot9$ nên $a=-2$. Đáp án A bỏ dấu, B và C lấy $\dfrac{-18}{\pm3}$ thay vì chia cho $x^2=9$.

::mc
Số giao điểm của parabol $y=x^2$ và đường thẳng $y=2x-1$ là
A. $1$.
B. $2$.
C. $0$.
D. $3$.
::key A
$x^2-2x+1=0\iff(x-1)^2=0$ có nghiệm kép $x=1$, nên tiếp xúc, chỉ có một điểm chung. Đáp án C nhầm với $\Delta<0$, B nhầm với $\Delta>0$, D không thể có (phương trình bậc hai có tối đa hai nghiệm).

::mc
Hoành độ các giao điểm của parabol $y=x^2$ và đường thẳng $y=x+6$ là
A. $x=-3$ và $x=2$.
B. $x=3$ và $x=-2$.
C. $x=3$ và $x=6$.
D. $x=-3$ và $x=-2$.
::key B
$x^2-x-6=0\iff(x-3)(x+2)=0$. Đáp án A đổi dấu cả hai nghiệm, C và D lấy sai nghiệm.

::tf
Cho parabol $(P)\colon y=-x^2$ và đường thẳng $(d)\colon y=-2x-3$. Các nhận định sau đúng hay sai?
a) Parabol $(P)$ nằm phía dưới trục hoành, trừ điểm $O$.
b) Điểm $(-1;-1)$ thuộc $(P)$.
c) $(P)$ và $(d)$ cắt nhau tại hai điểm phân biệt.
d) Một giao điểm của $(P)$ và $(d)$ là $(3;9)$.
::key Đ Đ Đ S
a) Đúng: $a=-1<0$ nên $y\leq0$. b) Đúng: $y(-1)=-1$. c) Đúng: $-x^2=-2x-3\iff x^2-2x-3=0$ có nghiệm $x=3$, $x=-1$. d) Sai: giao điểm là $(3;-9)$ và $(-1;-1)$.

::sa
Parabol $y=x^2$ và đường thẳng $y=x+2$ cắt nhau tại hai điểm. Tính tổng hai hoành độ giao điểm.
::key 1
$x^2-x-2=0$ nên theo hệ thức Viète, $x_1+x_2=1$ (hai nghiệm là $-1$ và $2$).

::sa
Mặt cắt của một chảo là parabol $y=\dfrac{x^2}8$ (đơn vị: dm). Đường kính miệng chảo là $12$ dm. Tính độ sâu của chảo (đơn vị dm).
::key 4,5
Mép chảo có $x=6$ nên $y=\dfrac{36}8=4{,}5$.
:::
