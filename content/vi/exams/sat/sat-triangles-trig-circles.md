---
title: Tam giác, lượng giác và đường tròn
description: SAT Geometry: định lí Pythagore, tam giác vuông đặc biệt, tam giác đồng dạng, sin, côsin, tang, radian, cung, hình quạt và phương trình đường tròn.
minutes: 40
---

:::goals
- Dùng định lí Pythagore và các tam giác vuông đặc biệt $30^\circ$–$60^\circ$–$90^\circ$ và $45^\circ$–$45^\circ$–$90^\circ$.
- Dùng tam giác đồng dạng để tìm độ dài chưa biết.
- Dùng sin, côsin, tang trong tam giác vuông và hệ thức $\sin x^\circ=\cos(90-x)^\circ$.
- Làm việc với radian, độ dài cung, diện tích hình quạt và phương trình đường tròn.
:::

Một chiếc thang dựa vào tường, một miếng bánh cắt từ chiếc pizza: cả hai đều là hình học quanh ta, và bài này cho bạn công cụ để tính chúng. Bài này bao quát nửa khó hơn của mảng Geometry and Trigonometry. Bạn biết các tỉ số lượng giác từ lớp 9, nhưng SAT còn dùng radian và phương trình đường tròn $(x-h)^2+(y-k)^2=r^2$, những nội dung ở Việt Nam học vào lớp 10 và lớp 11. Bảng công thức trong Bluebook có ghi các tam giác vuông đặc biệt; mọi thứ khác trong bài này bạn nên thuộc lòng.

## Tam giác vuông

:::theorem Định lí Pythagore và các tam giác vuông đặc biệt
- Trong tam giác vuông có hai cạnh góc vuông $a$, $b$ và cạnh huyền $c$: $a^2+b^2=c^2$.
- $45^\circ$–$45^\circ$–$90^\circ$: các cạnh tỉ lệ với $1:1:\sqrt2$.
- $30^\circ$–$60^\circ$–$90^\circ$: các cạnh tỉ lệ với $1:\sqrt3:2$ (cạnh ngắn nhất đối diện góc $30^\circ$).
- Các bộ ba Pythagore thường gặp: $3, 4, 5$; $5, 12, 13$; $8, 15, 17$ và các bội của chúng.
:::

:::example Tam giác 30–60–90
Trong một tam giác vuông, một góc bằng $30^\circ$ và cạnh huyền dài 10. Cạnh đối diện góc $60^\circ$ dài bao nhiêu?
A. $5$
B. $5\sqrt2$
C. $5\sqrt3$
D. $10\sqrt3$

**Lời giải.** Các cạnh tỉ lệ với $1:\sqrt3:2$, cạnh huyền ứng với $2$ là $10$, nên mỗi "đơn vị" là $5$. Cạnh đối diện $60^\circ$ là $5\sqrt3$: đáp án **C**. Phương án A là cạnh đối diện $30^\circ$.
:::

## Tam giác đồng dạng

Hai tấm ảnh chụp cùng một cảnh, một tấm nhỏ một tấm to, có hình dáng giống hệt nhau, chỉ khác kích thước. Tam giác cũng có thể như vậy. Hai tam giác **đồng dạng** khi các góc tương ứng bằng nhau; khi đó các cạnh tương ứng tỉ lệ. Một đường thẳng song song với một cạnh của tam giác tạo ra một tam giác nhỏ đồng dạng với tam giác ban đầu.

:::example Đoạn thẳng song song
Trong tam giác $ABC$, điểm $D$ nằm trên $\overline{AB}$ và điểm $E$ nằm trên $\overline{AC}$, với $\overline{DE}$ song song với $\overline{BC}$. Nếu $AD=4$, $DB=6$ và $DE=5$ thì $\overline{BC}$ dài bao nhiêu?

**Lời giải.** Tam giác $ADE$ đồng dạng với tam giác $ABC$, với $AB=4+6=10$. Vậy $\dfrac{BC}{DE}=\dfrac{AB}{AD}$: $BC=5\cdot\dfrac{10}{4}=12{,}5$. Bạn gõ **12.5**. Cái bẫy là dùng $\dfrac{DB}{AD}$ thay vì $\dfrac{AB}{AD}$.
:::

## Tỉ số lượng giác

:::theorem Sin, côsin và tang
Với góc nhọn $\theta$ của một tam giác vuông:
$$\sin\theta=\frac{\text{cạnh đối}}{\text{cạnh huyền}},\qquad\cos\theta=\frac{\text{cạnh kề}}{\text{cạnh huyền}},\qquad\tan\theta=\frac{\text{cạnh đối}}{\text{cạnh kề}}.$$
Hai góc nhọn của tam giác vuông có tổng $90^\circ$, nên $\sin x^\circ=\cos(90-x)^\circ$.
:::

:::example Hai góc phụ nhau
Với góc $0<x<90$, $\sin x^\circ=\cos32^\circ$. Giá trị của $x$ bằng bao nhiêu?

**Lời giải.** $\sin x^\circ=\cos(90-x)^\circ$, nên $90-x=32$ và $x=58$. Bạn gõ **58**.
:::

:::example Tỉ số từ các cạnh
Trong tam giác $PQR$ vuông tại $R$, $PR=8$, $QR=15$ và $PQ=17$. Giá trị của $\tan Q$ là
A. $\dfrac{8}{15}$
B. $\dfrac{15}{8}$
C. $\dfrac{8}{17}$
D. $\dfrac{15}{17}$

**Lời giải.** Cạnh đối diện $Q$ là $PR=8$ và cạnh kề $Q$ (không phải cạnh huyền) là $QR=15$: $\tan Q=\dfrac{8}{15}$. Đáp án là **A**. Phương án B là $\tan P$; phương án C là $\sin Q$.
:::

## Radian, cung và đường tròn

:::theorem Radian và cung
$180^\circ=\pi$ radian. Trong đường tròn bán kính $r$, góc ở tâm $\theta$ radian chắn một cung dài $s=r\theta$ và tạo một hình quạt có diện tích $\dfrac12r^2\theta$. Theo độ: cung $=\dfrac{\theta}{360}\cdot2\pi r$, hình quạt $=\dfrac{\theta}{360}\cdot\pi r^2$.
:::

:::example Độ dài cung
Một đường tròn có bán kính 6. Cung bị chắn bởi góc ở tâm $\dfrac{2\pi}{3}$ radian dài bao nhiêu?
A. $2\pi$
B. $4\pi$
C. $12\pi$
D. $\dfrac{\pi}{9}$

**Lời giải.** $s=r\theta=6\cdot\dfrac{2\pi}{3}=4\pi$. Đáp án là **B**. Phương án C là diện tích hình quạt, $\dfrac12\cdot36\cdot\dfrac{2\pi}{3}$.
:::

Mọi điểm trên đường tròn đều cách tâm một khoảng bằng bán kính. Từ ý đó, đường tròn tâm $(h, k)$, bán kính $r$ có phương trình $(x-h)^2+(y-k)^2=r^2$. Nếu phương trình đã được khai triển, ta thêm bớt để tạo bình phương theo $x$ và theo $y$, rồi đọc tâm và bán kính.

:::example Tìm bán kính
Phương trình một đường tròn trong mặt phẳng $xy$ là $x^2+y^2-6x+4y-12=0$. Bán kính của đường tròn bằng bao nhiêu?

**Lời giải.** Nhóm lại và tạo bình phương:

$$(x^2-6x+9)+(y^2+4y+4)=12+9+4\iff(x-3)^2+(y+2)^2=25.$$

Tâm là $(3, -2)$ và bán kính là $5$. Bạn gõ **5**.
:::

:::graph Đường tròn $(x-3)^2+(y+2)^2=25$
alt: Một đường tròn tâm (3, -2), bán kính 5, đi qua (8, -2) và (3, 3)
x: -4..10
y: -9..5
plot: -2 + sqrt(25 - (x-3)^2) ; -2..8
plot: -2 - sqrt(25 - (x-3)^2) ; -2..8
point: (3, -2) "(3, -2)" below
segment: (3, -2) (8, -2)
label: (5.5, -1.4) "r = 5"
:::

:::warning Những cái bẫy thường gặp
- **Nhầm cạnh "đối".** Cạnh đối và cạnh kề phụ thuộc vào góc đang xét; cạnh huyền luôn đối diện góc vuông.
- **Dấu trong phương trình đường tròn.** $(x+4)^2+(y-1)^2=9$ có tâm $(-4, 1)$, không phải $(4, -1)$.
- **$r^2$ hay $r$.** Trong $(x-3)^2+(y+2)^2=25$, bán kính là $5$, không phải $25$.
- **Độ hay radian.** Đọc kĩ đề. Với máy tính cầm tay, kiểm tra chế độ đo góc; với Desmos, kiểm tra phần cài đặt.
Đây là những lỗi nhỏ nhưng mất điểm thật. Nhớ liếc qua danh sách này trước khi nộp bài.
:::

:::tip Lượng giác trong Desmos
Chỗ này nhiều bạn hay quên: Desmos mặc định dùng radian. Hãy bấm biểu tượng cờ lê để chuyển sang độ trước khi gõ `sin(30)`. Để kiểm tra một đường tròn, gõ phương trình đúng như đề cho: Desmos vẽ nó, và nếu gõ thêm dạng đã tạo bình phương thì bạn thấy ngay tâm.
:::

:::terms
- cạnh huyền | hypotenuse
- cạnh góc vuông | leg
- định lí Pythagore | Pythagorean theorem
- tam giác đồng dạng | similar triangles
- sin / côsin / tang | sine / cosine / tangent
- hai góc phụ nhau | complementary angles
- radian | radian
- độ dài cung | arc length
- hình quạt | sector
- tâm / bán kính | center / radius
:::

## Bài tập tương tự

:::exercise Trắc nghiệm
Trong một tam giác vuông cân, mỗi cạnh góc vuông dài 7. Cạnh huyền dài bao nhiêu?
A. $7$
B. $14$
C. $7\sqrt3$
D. $7\sqrt2$

::hint
**Kiến thức:** tam giác $45^\circ$–$45^\circ$–$90^\circ$ có các cạnh tỉ lệ với $1:1:\sqrt2$.

**Gợi ý các bước:**
1. Nhân cạnh góc vuông với $\sqrt2$.

::solution
Gọi $c$ là độ dài cạnh huyền ($c>0$). Tam giác vuông cân có hai cạnh góc vuông bằng nhau, mỗi cạnh dài $7$.

Áp dụng định lí Pythagore, ta có
$$c^2=7^2+7^2=49+49=98.$$

Suy ra $c=\sqrt{98}=\sqrt{49\cdot2}=7\sqrt2$ (nhận $c>0$).

Kiểm tra: $\left(7\sqrt2\right)^2=49\cdot2=98=49+49$ (đúng).

Vậy cạnh huyền dài $7\sqrt2$, nên chọn **D**.

**Đáp số.** D.
:::

:::exercise Câu tự điền đáp số
Một cây cột cao 2 mét có bóng dài 3 mét. Cùng lúc đó, một cái cây có bóng dài 18 mét. Cây cao bao nhiêu mét?

::hint
**Kiến thức:** tia nắng tạo ra các tam giác đồng dạng.

**Gợi ý các bước:**
1. $\dfrac{h}{18}=\dfrac{2}{3}$.

::solution
Gọi $h$ (mét) là chiều cao của cây ($h>0$).

Cùng một thời điểm, tia nắng tạo với mặt đất cùng một góc, nên cột và bóng của nó, cây và bóng của nó tạo thành hai tam giác vuông đồng dạng. Do đó tỉ số chiều cao trên độ dài bóng là như nhau:
$$\frac{h}{18}=\frac{2}{3}.$$

Suy ra
$$h=18\cdot\frac23=12.$$

Vậy cây cao $12$ mét.

**Đáp số.** $12$ mét.
:::

:::exercise Câu tự điền đáp số
Với góc $0<x<90$, $\cos x^\circ=\sin20^\circ$. Giá trị của $x$ bằng bao nhiêu?

::hint
**Kiến thức:** $\cos x^\circ=\sin(90-x)^\circ$.

**Gợi ý các bước:**
1. Cho $90-x=20$.

::solution
Với hai góc phụ nhau $\alpha$ và $90^\circ-\alpha$, ta có $\sin\alpha=\cos\left(90^\circ-\alpha\right)$.

Áp dụng với $\alpha=20^\circ$:
$$\sin20^\circ=\cos\left(90^\circ-20^\circ\right)=\cos70^\circ.$$

Do đó $\cos x^\circ=\cos70^\circ$. Vì $0<x<90$ và hàm số côsin nghịch biến trên khoảng $\left(0^\circ; 90^\circ\right)$ nên $x=70$ (thoả mãn điều kiện $0<x<90$).

Vậy $x=70$.

**Đáp số.** $70$.
:::

:::exercise Trắc nghiệm
Trong tam giác $ABC$ vuông tại $C$, $\sin A=\dfrac35$. Giá trị của $\cos B$ là
A. $\dfrac45$
B. $\dfrac34$
C. $\dfrac35$
D. $\dfrac43$

::hint
**Kiến thức:** $A$ và $B$ là hai góc phụ nhau.

**Gợi ý các bước:**
1. Cạnh đối diện $A$ chính là cạnh kề $B$.

::solution
Tam giác $ABC$ vuông tại $C$ nên hai góc nhọn $A$ và $B$ phụ nhau: $A+B=90^\circ$.

Với hai góc phụ nhau, sin của góc này bằng côsin của góc kia. Do đó
$$\cos B=\cos\left(90^\circ-A\right)=\sin A=\frac35.$$

Vậy $\cos B=\dfrac35$, nên chọn **C**.

*Nhận xét.* Phương án A là $\cos A=\sqrt{1-\sin^2A}=\dfrac45$ (và cũng bằng $\sin B$); phương án B là $\tan A=\dfrac34$; phương án D là $\tan B=\dfrac43$.

**Đáp số.** C.
:::

:::exercise Trắc nghiệm
Tâm của đường tròn $x^2+y^2+8x-2y+8=0$ là
A. $(4, -1)$
B. $(-4, 1)$
C. $(8, -2)$
D. $(-8, 2)$

::hint
**Kiến thức:** tạo bình phương theo $x$ và theo $y$.

**Gợi ý các bước:**
1. $x^2+8x=(x+4)^2-16$, $y^2-2y=(y-1)^2-1$.

::solution
Đưa phương trình về dạng chính tắc bằng cách nhóm các số hạng chứa $x$ và chứa $y$:
$$\left(x^2+8x\right)+\left(y^2-2y\right)+8=0.$$

Hoàn thành bình phương: $x^2+8x=(x+4)^2-16$ và $y^2-2y=(y-1)^2-1$. Thay vào, ta được
$$(x+4)^2-16+(y-1)^2-1+8=0\iff(x+4)^2+(y-1)^2=16+1-8=9.$$

Đây là phương trình đường tròn $(x-a)^2+(y-b)^2=R^2$ với $a=-4$, $b=1$ và $R^2=9$, tức là $R=3$.

Vậy đường tròn có tâm $(-4; 1)$ và bán kính $3$, nên chọn **B**.

**Đáp số.** B.
:::

## Bài tập vận dụng

:::exercise Chiếc thang
Một chiếc thang dài 13 feet dựa vào một bức tường thẳng đứng. Chân thang cách tường 5 feet. Đầu thang chạm tường ở độ cao bao nhiêu?

::hint
**Kiến thức:** định lí Pythagore, hoặc bộ ba $5, 12, 13$.

**Gợi ý các bước:**
1. $h^2=13^2-5^2$.

::solution
Chiếc thang, bức tường thẳng đứng và mặt đất tạo thành một tam giác vuông: thang là cạnh huyền dài $13$ feet, chân thang cách tường $5$ feet là một cạnh góc vuông.

Gọi $h$ (feet) là độ cao của đầu thang trên tường ($h>0$). Áp dụng định lí Pythagore, ta có
$$h^2+5^2=13^2\iff h^2=169-25=144.$$

Suy ra $h=\sqrt{144}=12$ (nhận $h>0$).

Kiểm tra: $5^2+12^2=25+144=169=13^2$ (đúng).

Vậy đầu thang chạm tường ở độ cao $12$ feet.

**Đáp số.** $12$ feet.
:::

:::exercise Dốc lên xuống
Một con dốc dài 10 mét nghiêng một góc $6^\circ$ so với phương ngang. Con dốc cao lên bao nhiêu mét, làm tròn đến hàng phần trăm?

::hint
**Kiến thức:** độ cao là cạnh đối diện góc, con dốc là cạnh huyền.

**Gợi ý các bước:**
1. Độ cao $=10\sin6^\circ$ (máy tính để chế độ độ).

::solution
Con dốc, phương ngang và đường thẳng đứng từ đỉnh dốc xuống tạo thành một tam giác vuông. Con dốc là cạnh huyền dài $10$ mét, góc nghiêng $6^\circ$ nằm đối diện với độ cao cần tìm.

Gọi $h$ (mét) là độ cao con dốc lên được ($h>0$). Theo định nghĩa của sin trong tam giác vuông, $\sin6^\circ=\dfrac{h}{10}$, nên
$$h=10\sin6^\circ\approx10\cdot0{,}1045=1{,}045\approx1{,}05\ \text{(mét)}.$$

Vậy con dốc cao lên khoảng $1{,}05$ mét (làm tròn đến hàng phần trăm).

**Đáp số.** $1{,}05$ mét.
:::

:::exercise Miếng bánh pizza
Một chiếc bánh pizza có bán kính 20 xăng-ti-mét được cắt thành 8 miếng bằng nhau. Diện tích một miếng và độ dài mép cong của nó là bao nhiêu? Cho giá trị chính xác và giá trị thập phân làm tròn đến một chữ số sau dấu phẩy.

::hint
**Kiến thức:** mỗi miếng là một hình quạt có góc ở tâm $45^\circ$.

**Gợi ý các bước:**
1. Diện tích $=\dfrac{45}{360}\cdot\pi\cdot20^2$.
2. Cung $=\dfrac{45}{360}\cdot2\pi\cdot20$.

::solution
Cả chiếc bánh là hình tròn bán kính $R=20$ xăng-ti-mét, được cắt thành $8$ miếng bằng nhau, nên mỗi miếng là một hình quạt tròn chiếm $\dfrac18$ hình tròn.

Diện tích cả hình tròn là $\pi R^2=\pi\cdot20^2=400\pi$. Diện tích một miếng là
$$S=\frac18\cdot400\pi=50\pi\approx157{,}1\ \text{(xăng-ti-mét vuông)}.$$

Chu vi hình tròn là $2\pi R=2\pi\cdot20=40\pi$. Độ dài mép cong (cung tròn) của một miếng là
$$\ell=\frac18\cdot40\pi=5\pi\approx15{,}7\ \text{(xăng-ti-mét)}.$$

Vậy diện tích một miếng là $50\pi$ xăng-ti-mét vuông, xấp xỉ $157{,}1$ xăng-ti-mét vuông; độ dài mép cong là $5\pi$ xăng-ti-mét, xấp xỉ $15{,}7$ xăng-ti-mét.

**Đáp số.** Diện tích $50\pi\approx157{,}1$ xăng-ti-mét vuông; độ dài mép cong $5\pi\approx15{,}7$ xăng-ti-mét.
:::

:::exercise Thử thách
Điểm $(5, k)$, với $k>0$, nằm trên đường tròn $(x-2)^2+(y-1)^2=25$. Giá trị của $k$ bằng bao nhiêu?

::hint
**Kiến thức:** thay toạ độ điểm vào phương trình.

**Gợi ý các bước:**
1. $9+(k-1)^2=25$.
2. Giữ giá trị dương.

::solution
Điểm $(5; k)$ nằm trên đường tròn $(x-2)^2+(y-1)^2=25$ nên toạ độ của nó thoả mãn phương trình đường tròn. Thay $x=5$, $y=k$, ta được
$$(5-2)^2+(k-1)^2=25\iff9+(k-1)^2=25\iff(k-1)^2=16.$$

Suy ra $k-1=4$ hoặc $k-1=-4$, tức là $k=5$ hoặc $k=-3$.

Vì $k>0$ nên loại $k=-3$ và nhận $k=5$.

Kiểm tra: $(5-2)^2+(5-1)^2=9+16=25$ (đúng).

Vậy $k=5$.

*Nhận xét.* Hai điểm $(5; 5)$ và $(5; -3)$ đối xứng nhau qua đường nằm ngang đi qua tâm $(2; 1)$ của đường tròn, tức là qua đường thẳng $y=1$.

**Đáp số.** $5$.
:::

:::quiz
::mc NB
Một tam giác vuông có hai cạnh góc vuông là 6 và 8. Cạnh huyền dài
A. $10$
B. $14$
C. $48$
D. $7$
::key A
$\sqrt{36+64}=10$. Phương án B cộng hai cạnh góc vuông.

::mc NB
$90^\circ$ bằng bao nhiêu radian?
A. $\pi$
B. $2\pi$
C. $\dfrac{\pi}{2}$
D. $\dfrac{\pi}{4}$
::key C
$90^\circ=\dfrac{90}{180}\pi=\dfrac{\pi}{2}$.

::mc NB
Giá trị của $\sin30^\circ$ là
A. $\dfrac{\sqrt3}{2}$
B. $1$
C. $\dfrac{\sqrt2}{2}$
D. $\dfrac12$
::key D
Trong tam giác $30^\circ$–$60^\circ$–$90^\circ$, cạnh đối diện $30^\circ$ bằng nửa cạnh huyền.

::mc NB
Tâm và bán kính của đường tròn $(x+1)^2+(y-4)^2=49$ là
A. Tâm $(1, -4)$, bán kính $7$
B. Tâm $(-1, 4)$, bán kính $7$
C. Tâm $(-1, 4)$, bán kính $49$
D. Tâm $(1, 4)$, bán kính $7$
::key B
$x+1=x-(-1)$, nên $h=-1$; $k=4$; $r=\sqrt{49}=7$.

::tf NB NB TH TH
Trong tam giác $ABC$ vuông tại $C$, $BC=5$, $AC=12$ và $AB=13$.
a) $\sin A=\dfrac{5}{13}$.
b) $\cos A=\dfrac{12}{13}$.
c) $\tan A=\dfrac{12}{5}$.
d) $\sin A=\cos B$.
::key Đ Đ S Đ
a) Đúng: cạnh đối diện $A$ là $BC=5$. b) Đúng. c) Sai: $\tan A=\dfrac{5}{12}$. d) Đúng: $A$ và $B$ phụ nhau.

::sa TH
Một đường tròn có bán kính 9. Cung bị chắn bởi góc ở tâm $40^\circ$ có độ dài $k\pi$. Giá trị của $k$ bằng bao nhiêu?
::key 2
$\dfrac{40}{360}\cdot2\pi\cdot9=2\pi$.

::sa TH
Với góc $0<x<90$, $\sin x^\circ=\cos25^\circ$. Giá trị của $x$ bằng bao nhiêu?
::key 65
$90-x=25$, nên $x=65$.
:::
