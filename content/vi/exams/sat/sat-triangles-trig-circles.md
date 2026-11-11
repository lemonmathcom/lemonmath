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

Bài này bao quát nửa khó hơn của mảng Geometry and Trigonometry. Học sinh Việt Nam biết các tỉ số lượng giác từ lớp 9, nhưng SAT còn dùng radian và phương trình đường tròn $(x-h)^2+(y-k)^2=r^2$, những nội dung ở Việt Nam học vào lớp 10 và lớp 11. Bảng công thức trong Bluebook có ghi các tam giác vuông đặc biệt; mọi thứ khác trong bài này bạn nên thuộc lòng.

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

Hai tam giác **đồng dạng** khi các góc tương ứng bằng nhau; khi đó các cạnh tương ứng tỉ lệ. Một đường thẳng song song với một cạnh của tam giác tạo ra một tam giác nhỏ đồng dạng với tam giác ban đầu.

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

Đường tròn tâm $(h, k)$, bán kính $r$ có phương trình $(x-h)^2+(y-k)^2=r^2$. Nếu phương trình đã được khai triển, hãy thêm bớt để tạo bình phương theo $x$ và theo $y$.

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
:::

:::tip Lượng giác trong Desmos
Desmos mặc định dùng radian; hãy bấm biểu tượng cờ lê để chuyển sang độ trước khi gõ `sin(30)`. Để kiểm tra một đường tròn, gõ phương trình đúng như đề cho: Desmos vẽ nó, và nếu gõ thêm dạng đã tạo bình phương thì bạn thấy ngay tâm.
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
Cạnh huyền là $7\sqrt2$: đáp án **D**. Kiểm tra bằng Pythagore: $49+49=98=(7\sqrt2)^2$.
:::

:::exercise Câu tự điền đáp số
Một cây cột cao 2 mét có bóng dài 3 mét. Cùng lúc đó, một cái cây có bóng dài 18 mét. Cây cao bao nhiêu mét?

::hint
**Kiến thức:** tia nắng tạo ra các tam giác đồng dạng.

**Gợi ý các bước:**
1. $\dfrac{h}{18}=\dfrac{2}{3}$.

::solution
$h=18\cdot\dfrac23=12$ mét.
:::

:::exercise Câu tự điền đáp số
Với góc $0<x<90$, $\cos x^\circ=\sin20^\circ$. Giá trị của $x$ bằng bao nhiêu?

::hint
**Kiến thức:** $\cos x^\circ=\sin(90-x)^\circ$.

**Gợi ý các bước:**
1. Cho $90-x=20$.

::solution
$x=70$.
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
$\cos B=\sin A=\dfrac35$: đáp án **C**. Phương án A là $\cos A$ (và $\sin B$).
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
$(x+4)^2+(y-1)^2=16+1-8=9$. Tâm là $(-4, 1)$ và bán kính là $3$: đáp án **B**.
:::

## Bài tập vận dụng

:::exercise Chiếc thang
Một chiếc thang dài 13 feet dựa vào một bức tường thẳng đứng. Chân thang cách tường 5 feet. Đầu thang chạm tường ở độ cao bao nhiêu?

::hint
**Kiến thức:** định lí Pythagore, hoặc bộ ba $5, 12, 13$.

**Gợi ý các bước:**
1. $h^2=13^2-5^2$.

::solution
$h^2=169-25=144$, nên $h=12$ feet.
:::

:::exercise Dốc lên xuống
Một con dốc dài 10 mét nghiêng một góc $6^\circ$ so với phương ngang. Con dốc cao lên bao nhiêu mét, làm tròn đến hàng phần trăm?

::hint
**Kiến thức:** độ cao là cạnh đối diện góc, con dốc là cạnh huyền.

**Gợi ý các bước:**
1. Độ cao $=10\sin6^\circ$ (máy tính để chế độ độ).

::solution
$10\sin6^\circ\approx10\cdot0{,}1045=1{,}05$ mét.
:::

:::exercise Miếng bánh pizza
Một chiếc bánh pizza có bán kính 20 xăng-ti-mét được cắt thành 8 miếng bằng nhau. Diện tích một miếng và độ dài mép cong của nó là bao nhiêu? Cho giá trị chính xác và giá trị thập phân làm tròn đến một chữ số sau dấu phẩy.

::hint
**Kiến thức:** mỗi miếng là một hình quạt có góc ở tâm $45^\circ$.

**Gợi ý các bước:**
1. Diện tích $=\dfrac{45}{360}\cdot\pi\cdot20^2$.
2. Cung $=\dfrac{45}{360}\cdot2\pi\cdot20$.

::solution
Diện tích $=\dfrac18\cdot400\pi=50\pi\approx157{,}1$ xăng-ti-mét vuông. Cung $=\dfrac18\cdot40\pi=5\pi\approx15{,}7$ xăng-ti-mét.
:::

:::exercise Thử thách
Điểm $(5, k)$, với $k>0$, nằm trên đường tròn $(x-2)^2+(y-1)^2=25$. Giá trị của $k$ bằng bao nhiêu?

::hint
**Kiến thức:** thay toạ độ điểm vào phương trình.

**Gợi ý các bước:**
1. $9+(k-1)^2=25$.
2. Giữ giá trị dương.

::solution
$(k-1)^2=16$, nên $k-1=4$ hoặc $k-1=-4$, cho $k=5$ hoặc $k=-3$. Vì $k>0$ nên $k=5$. Hai điểm $(5, 5)$ và $(5, -3)$ đối xứng nhau qua đường nằm ngang đi qua tâm.
:::

:::quiz
::mc
Một tam giác vuông có hai cạnh góc vuông là 6 và 8. Cạnh huyền dài
A. $10$
B. $14$
C. $48$
D. $7$
::key A
$\sqrt{36+64}=10$. Phương án B cộng hai cạnh góc vuông.

::mc
$90^\circ$ bằng bao nhiêu radian?
A. $\pi$
B. $2\pi$
C. $\dfrac{\pi}{2}$
D. $\dfrac{\pi}{4}$
::key C
$90^\circ=\dfrac{90}{180}\pi=\dfrac{\pi}{2}$.

::mc
Giá trị của $\sin30^\circ$ là
A. $\dfrac{\sqrt3}{2}$
B. $1$
C. $\dfrac{\sqrt2}{2}$
D. $\dfrac12$
::key D
Trong tam giác $30^\circ$–$60^\circ$–$90^\circ$, cạnh đối diện $30^\circ$ bằng nửa cạnh huyền.

::mc
Tâm và bán kính của đường tròn $(x+1)^2+(y-4)^2=49$ là
A. Tâm $(1, -4)$, bán kính $7$
B. Tâm $(-1, 4)$, bán kính $7$
C. Tâm $(-1, 4)$, bán kính $49$
D. Tâm $(1, 4)$, bán kính $7$
::key B
$x+1=x-(-1)$, nên $h=-1$; $k=4$; $r=\sqrt{49}=7$.

::tf
Trong tam giác $ABC$ vuông tại $C$, $BC=5$, $AC=12$ và $AB=13$.
a) $\sin A=\dfrac{5}{13}$.
b) $\cos A=\dfrac{12}{13}$.
c) $\tan A=\dfrac{12}{5}$.
d) $\sin A=\cos B$.
::key Đ Đ S Đ
a) Đúng: cạnh đối diện $A$ là $BC=5$. b) Đúng. c) Sai: $\tan A=\dfrac{5}{12}$. d) Đúng: $A$ và $B$ phụ nhau.

::sa
Một đường tròn có bán kính 9. Cung bị chắn bởi góc ở tâm $40^\circ$ có độ dài $k\pi$. Giá trị của $k$ bằng bao nhiêu?
::key 2
$\dfrac{40}{360}\cdot2\pi\cdot9=2\pi$.

::sa
Với góc $0<x<90$, $\sin x^\circ=\cos25^\circ$. Giá trị của $x$ bằng bao nhiêu?
::key 65
$90-x=25$, nên $x=65$.
:::
