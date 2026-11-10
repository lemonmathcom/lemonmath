---
title: Tỉ số lượng giác của góc nhọn
description: Định nghĩa sin, cos, tan, cot của góc nhọn trong tam giác vuông, nhớ giá trị của các góc đặc biệt và tỉ số lượng giác của hai góc phụ nhau.
minutes: 20
---

:::goals
- Viết được sin, cos, tan, cot của một góc nhọn trong tam giác vuông.
- Nhớ tỉ số lượng giác của các góc $30^\circ$, $45^\circ$, $60^\circ$ và dùng quan hệ giữa hai góc phụ nhau.
- Dùng máy tính cầm tay để tính tỉ số lượng giác và tìm góc khi biết một tỉ số.
:::

Bác Tư dựng một chiếc thang dài $5$ m vào tường, chân thang cách chân tường $3$ m. Theo hướng dẫn an toàn, góc giữa thang và mặt đất nên vào khoảng $75^\circ$. Thang của bác Tư có đủ dốc không?

Ta biết hai cạnh của tam giác vuông nhưng cần một **góc**. Công cụ nối cạnh với góc là các tỉ số lượng giác.

:::diagram Chiếc thang dựa vào tường
alt: Chiếc thang là cạnh huyền của tam giác vuông, chân thang cách tường 3 mét, thang dài 5 mét, góc giữa thang và mặt đất kí hiệu là alpha
point H 0,0 below-left "H"
point P 3,0 below-right "P"
point T 0,4 above-left "T"
segment H P "3 m"
segment P T "5 m"
segment H T
right P H T
angle T P H "α"
:::

## Các tỉ số lượng giác của góc nhọn

### Khám phá: tỉ số không phụ thuộc vào kích thước tam giác

Xét hai tam giác vuông có cùng góc nhọn $\alpha$ ở đỉnh $B$: tam giác thứ nhất có các cạnh $3$, $4$, $5$; tam giác thứ hai có các cạnh $6$, $8$, $10$ (gấp đôi). Ta lập tỉ số giữa cạnh đối diện góc $\alpha$ và cạnh huyền:

| Tam giác | cạnh đối | cạnh huyền | cạnh đối : cạnh huyền |
|---|---|---|---|
| thứ nhất | $3$ | $5$ | $0{,}6$ |
| thứ hai | $6$ | $10$ | $0{,}6$ |

Hai tam giác đồng dạng (lớp 8) nên tỉ số giống nhau. Tỉ số chỉ phụ thuộc vào góc $\alpha$, không phụ thuộc vào tam giác lớn hay nhỏ.

:::diagram Cạnh đối, cạnh kề và cạnh huyền của góc $\alpha$
alt: Tam giác ABC vuông tại A, góc alpha ở đỉnh B, cạnh AC đối diện góc alpha, cạnh AB kề góc alpha, cạnh BC là cạnh huyền
point A 0,0 below-left
point B 4,0 below-right
point C 0,3 above-left
polygon A B C
segment A B "cạnh kề"
segment A C "cạnh đối"
segment B C "cạnh huyền"
right B A C
angle C B A "α"
:::

:::definition Tỉ số lượng giác của góc nhọn
Cho tam giác vuông có góc nhọn $\alpha$. Khi đó:
$$\sin\alpha=\frac{\text{cạnh đối}}{\text{cạnh huyền}},\quad \cos\alpha=\frac{\text{cạnh kề}}{\text{cạnh huyền}},\quad \tan\alpha=\frac{\text{cạnh đối}}{\text{cạnh kề}},\quad \cot\alpha=\frac{\text{cạnh kề}}{\text{cạnh đối}}.$$
:::

Vì cạnh huyền dài nhất, ta luôn có $0<\sin\alpha<1$ và $0<\cos\alpha<1$. Mẹo nhớ quen thuộc: "**sin đi học, cos không hư, tan đoàn kết, cot kết đoàn**" (sin = đối : huyền, cos = kề : huyền, tan = đối : kề, cot = kề : đối).

:::example Tính bốn tỉ số
Cho tam giác $ABC$ vuông tại $A$ có $AB=8$ cm, $AC=6$ cm. Tính các tỉ số lượng giác của góc $B$.

**Lời giải.** Xét tam giác $ABC$ vuông tại $A$, ta có $BC^2=AB^2+AC^2$ (định lí Pythagore). Với góc $B$, cạnh đối là $AC$, cạnh kề là $AB$. Do đó

$$BC=\sqrt{8^2+6^2}=\sqrt{100}=10;\qquad \sin B=\frac{6}{10}=\frac35,\quad \cos B=\frac{8}{10}=\frac45,\quad \tan B=\frac68=\frac34,\quad \cot B=\frac86=\frac43.$$

Vậy $\sin B=\dfrac35$, $\cos B=\dfrac45$, $\tan B=\dfrac34$, $\cot B=\dfrac43$.
:::

Cạnh đối và cạnh kề thay đổi khi ta xét góc nhọn còn lại, nên luôn xác định lại trước khi lập tỉ số.

:::example Tỉ số của góc còn lại
Cho tam giác $ABC$ vuông tại $A$ có $AB=5$, $AC=12$. Tính các tỉ số lượng giác của góc $C$.

**Lời giải.** Xét tam giác $ABC$ vuông tại $A$, ta có $BC^2=AB^2+AC^2$ (định lí Pythagore). Với góc $C$, cạnh đối là $AB$, cạnh kề là $AC$. Do đó

$$BC=\sqrt{5^2+12^2}=13;\qquad \sin C=\frac{5}{13},\quad \cos C=\frac{12}{13},\quad \tan C=\frac{5}{12},\quad \cot C=\frac{12}{5}.$$

Vậy $\sin C=\dfrac5{13}$, $\cos C=\dfrac{12}{13}$, $\tan C=\dfrac5{12}$, $\cot C=\dfrac{12}5$.
:::

## Tỉ số lượng giác của các góc đặc biệt

Nửa hình vuông cạnh $1$ là tam giác vuông cân có hai góc $45^\circ$, cạnh huyền $\sqrt2$. Nửa tam giác đều cạnh $2$ là tam giác vuông có các góc $30^\circ$, $60^\circ$ và các cạnh $1$, $\sqrt3$, $2$. Từ hai tam giác này ta được bảng sau.

| $\alpha$ | $30^\circ$ | $45^\circ$ | $60^\circ$ |
|---|---|---|---|
| $\sin\alpha$ | $\dfrac12$ | $\dfrac{\sqrt2}2$ | $\dfrac{\sqrt3}2$ |
| $\cos\alpha$ | $\dfrac{\sqrt3}2$ | $\dfrac{\sqrt2}2$ | $\dfrac12$ |
| $\tan\alpha$ | $\dfrac{\sqrt3}3$ | $1$ | $\sqrt3$ |
| $\cot\alpha$ | $\sqrt3$ | $1$ | $\dfrac{\sqrt3}3$ |

Chẳng hạn $\sin45^\circ=\dfrac{1}{\sqrt2}=\dfrac{\sqrt2}{2}$ (trục căn thức ở mẫu như ở chương trước).

:::example Tính giá trị biểu thức
Tính: a) $A=\sin30^\circ+\cos60^\circ-\tan45^\circ$; b) $B=\sin60^\circ\cdot\cot30^\circ$.

**Lời giải.** Thay các giá trị trong bảng, ta được

$$A=\frac12+\frac12-1=0;\qquad B=\frac{\sqrt3}{2}\cdot\sqrt3=\frac32.$$

Vậy $A=0$ và $B=\dfrac32$.
:::

## Tỉ số lượng giác của hai góc phụ nhau

Trong tam giác $ABC$ vuông tại $A$, hai góc $B$ và $C$ phụ nhau: $\widehat{B}+\widehat{C}=90^\circ$. Cạnh đối của góc $B$ chính là cạnh kề của góc $C$, nên $\sin B=\dfrac{AC}{BC}=\cos C$.

:::theorem Hai góc phụ nhau
Nếu $\alpha+\beta=90^\circ$ thì
$$\sin\alpha=\cos\beta,\quad \cos\alpha=\sin\beta,\quad \tan\alpha=\cot\beta,\quad \cot\alpha=\tan\beta.$$
:::

:::example Dùng góc phụ nhau
a) Viết $\sin72^\circ$ và $\tan65^\circ$ thành tỉ số lượng giác của góc nhỏ hơn $45^\circ$.
b) Không dùng máy tính, tính $\dfrac{\sin25^\circ}{\cos65^\circ}$ và $\tan40^\circ\cdot\tan50^\circ$.

**Lời giải.** Ta có $72^\circ+18^\circ=90^\circ$, $65^\circ+25^\circ=90^\circ$, $25^\circ+65^\circ=90^\circ$, $40^\circ+50^\circ=90^\circ$ (các cặp góc phụ nhau) và $\tan40^\circ\cdot\cot40^\circ=\dfrac{\text{đối}}{\text{kề}}\cdot\dfrac{\text{kề}}{\text{đối}}=1$. Do đó

$$\sin72^\circ=\cos18^\circ,\quad \tan65^\circ=\cot25^\circ;\qquad \frac{\sin25^\circ}{\cos65^\circ}=\frac{\sin25^\circ}{\sin25^\circ}=1,\quad \tan40^\circ\cdot\tan50^\circ=\tan40^\circ\cdot\cot40^\circ=1.$$

Vậy a) $\cos18^\circ$ và $\cot25^\circ$; b) cả hai biểu thức đều bằng $1$.
:::

Với góc bất kì, ta dùng máy tính cầm tay (để ở chế độ độ, kí hiệu D). Phím `sin`, `cos`, `tan` cho tỉ số; tổ hợp `SHIFT` + `sin` (hoặc `cos`, `tan`) cho góc khi biết tỉ số. Không có phím cot, nên ta dùng $\cot\alpha=\dfrac{1}{\tan\alpha}$.

:::example Trả lời câu hỏi chiếc thang
Thang dài $5$ m, chân thang cách tường $3$ m. Tìm góc $\alpha$ giữa thang và mặt đất (làm tròn đến độ).

**Lời giải.** Xét tam giác $HPT$ vuông tại $H$, với góc $\alpha$ ở chân thang $P$, cạnh kề là $HP=3$ m, cạnh huyền là $PT=5$ m. Ta có

$$\cos\alpha=\frac35=0{,}6\ \Rightarrow\ \alpha\approx53{,}13^\circ\approx53^\circ.$$

Vậy góc giữa thang và mặt đất chỉ khoảng $53^\circ$, nhỏ hơn nhiều so với $75^\circ$, nên thang của bác Tư quá thoải, dễ trượt.
:::

:::warning Những sai lầm thường gặp
- **Nhầm cạnh đối và cạnh kề.** Sai: trong tam giác vuông tại $A$, $\sin C=\dfrac{AC}{BC}$. Lí do sai: cạnh đối diện góc $C$ là $AB$. Đúng: $\sin C=\dfrac{AB}{BC}$.
- **Lập tỉ số với cạnh huyền ở tử.** Sai: $\cos B=\dfrac{BC}{AB}$. Lí do sai: tỉ số này lớn hơn $1$, mà $\cos B<1$. Đúng: $\cos B=\dfrac{AB}{BC}$.
- **Nhầm giá trị đặc biệt.** Sai: $\sin60^\circ=\dfrac12$. Lí do sai: đó là $\sin30^\circ$ (cạnh đối góc $30^\circ$ ngắn nhất). Đúng: $\sin60^\circ=\dfrac{\sqrt3}2$.
- **Để máy tính sai chế độ.** Sai: bấm $\sin30$ được $-0{,}988$. Lí do sai: máy đang ở chế độ radian. Đúng: chuyển sang chế độ độ, được $0{,}5$.
:::

## Thuật ngữ

:::terms
- tỉ số lượng giác | trigonometric ratio
- góc nhọn | acute angle
- cạnh huyền | hypotenuse
- cạnh đối | opposite side
- cạnh kề | adjacent side
- sin, côsin, tang, côtang | sine, cosine, tangent, cotangent
- hai góc phụ nhau | complementary angles
- tam giác vuông cân | right-angled isosceles triangle
:::

## Tóm tắt

- $\sin\alpha=\dfrac{\text{đối}}{\text{huyền}}$, $\cos\alpha=\dfrac{\text{kề}}{\text{huyền}}$, $\tan\alpha=\dfrac{\text{đối}}{\text{kề}}$, $\cot\alpha=\dfrac{\text{kề}}{\text{đối}}$.
- Tỉ số chỉ phụ thuộc vào góc; $0<\sin\alpha<1$, $0<\cos\alpha<1$; $\tan\alpha\cdot\cot\alpha=1$.
- $\sin30^\circ=\cos60^\circ=\dfrac12$, $\sin45^\circ=\cos45^\circ=\dfrac{\sqrt2}2$, $\sin60^\circ=\cos30^\circ=\dfrac{\sqrt3}2$, $\tan45^\circ=1$, $\tan60^\circ=\sqrt3$, $\tan30^\circ=\dfrac{\sqrt3}3$.
- Hai góc phụ nhau: sin góc này bằng cos góc kia, tan góc này bằng cot góc kia.
- Máy tính: chế độ độ; `SHIFT` + `sin`/`cos`/`tan` để tìm góc.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $AB=3$, $AC=4$. Tính các tỉ số lượng giác của góc $B$.

::hint
**Kiến thức:** định nghĩa bốn tỉ số; định lí Pythagore.

**Gợi ý các bước:**
1. Tính $BC$.
2. Với góc $B$: đối là $AC$, kề là $AB$.

::solution
Xét tam giác $ABC$ vuông tại $A$, ta có $BC=\sqrt{AB^2+AC^2}=\sqrt{9+16}=5$ (định lí Pythagore). Do đó $\sin B=\dfrac{AC}{BC}=\dfrac45$, $\cos B=\dfrac{AB}{BC}=\dfrac35$, $\tan B=\dfrac{AC}{AB}=\dfrac43$, $\cot B=\dfrac{AB}{AC}=\dfrac34$.

**Đáp số.** $\dfrac45$; $\dfrac35$; $\dfrac43$; $\dfrac34$.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $BC=17$, $AB=8$. Tính các tỉ số lượng giác của góc $C$.

::hint
**Kiến thức:** $AC^2=BC^2-AB^2$; với góc $C$, cạnh đối là $AB$.

**Gợi ý các bước:**
1. Tính $AC$.
2. Lập bốn tỉ số.

::solution
Xét tam giác $ABC$ vuông tại $A$, ta có $AC=\sqrt{BC^2-AB^2}=\sqrt{289-64}=15$ (định lí Pythagore). Do đó $\sin C=\dfrac{AB}{BC}=\dfrac8{17}$, $\cos C=\dfrac{AC}{BC}=\dfrac{15}{17}$, $\tan C=\dfrac{AB}{AC}=\dfrac8{15}$, $\cot C=\dfrac{AC}{AB}=\dfrac{15}8$.

**Đáp số.** $\dfrac8{17}$; $\dfrac{15}{17}$; $\dfrac8{15}$; $\dfrac{15}8$.
:::

:::exercise
Tính: a) $\sin45^\circ\cdot\cos45^\circ$; b) $\tan60^\circ-\cot30^\circ+\tan45^\circ$.

::hint
**Kiến thức:** bảng tỉ số lượng giác của các góc đặc biệt.

**Gợi ý các bước:**
1. Thay giá trị.
2. Tính.

::solution
a) $\sin45^\circ\cdot\cos45^\circ=\dfrac{\sqrt2}2\cdot\dfrac{\sqrt2}2=\dfrac24=\dfrac12$. b) $\tan60^\circ-\cot30^\circ+\tan45^\circ=\sqrt3-\sqrt3+1=1$.

**Đáp số.** a) $\dfrac12$; b) $1$.
:::

:::exercise
Viết thành tỉ số lượng giác của góc nhỏ hơn $45^\circ$: $\sin70^\circ$, $\cos58^\circ$, $\tan80^\circ$, $\cot47^\circ$.

::hint
**Kiến thức:** nếu $\alpha+\beta=90^\circ$ thì $\sin\alpha=\cos\beta$, $\tan\alpha=\cot\beta$.

**Gợi ý các bước:**
1. Tính góc phụ của mỗi góc.
2. Đổi sin ↔ cos, tan ↔ cot.

::solution
Vì các cặp góc $70^\circ$ và $20^\circ$, $58^\circ$ và $32^\circ$, $80^\circ$ và $10^\circ$, $47^\circ$ và $43^\circ$ phụ nhau nên $\sin70^\circ=\cos20^\circ$, $\cos58^\circ=\sin32^\circ$, $\tan80^\circ=\cot10^\circ$, $\cot47^\circ=\tan43^\circ$.

**Đáp số.** $\cos20^\circ$; $\sin32^\circ$; $\cot10^\circ$; $\tan43^\circ$.
:::

:::exercise
Không dùng máy tính, tính $M=\dfrac{\sin32^\circ}{\cos58^\circ}+\tan17^\circ\cdot\tan73^\circ$.

::hint
**Kiến thức:** góc phụ nhau và $\tan\alpha\cdot\cot\alpha=1$.

**Gợi ý các bước:**
1. Viết $\cos58^\circ=\sin32^\circ$.
2. Viết $\tan73^\circ=\cot17^\circ$.

::solution
Vì $58^\circ+32^\circ=90^\circ$ và $73^\circ+17^\circ=90^\circ$ nên $\cos58^\circ=\sin32^\circ$ và $\tan73^\circ=\cot17^\circ$. Do đó $M=\dfrac{\sin32^\circ}{\sin32^\circ}+\tan17^\circ\cdot\cot17^\circ=1+1=2$.

**Đáp số.** $M=2$.
:::

:::exercise
Dùng máy tính cầm tay:

a) Tính $\sin54^\circ$ và $\tan20^\circ$ (làm tròn đến chữ số thập phân thứ tư).

b) Tìm góc nhọn $\alpha$ (làm tròn đến độ), biết $\tan\alpha=2$; biết $\sin\alpha=0{,}25$.

::hint
**Kiến thức:** chế độ độ; `SHIFT` + `tan` (hoặc `sin`) để tìm góc.

**Gợi ý các bước:**
1. Kiểm tra máy ở chế độ D.
2. Bấm và làm tròn.

::solution
a) Dùng máy tính cầm tay, ta được $\sin54^\circ\approx0{,}8090$ và $\tan20^\circ\approx0{,}3640$.

b) Từ $\tan\alpha=2$ suy ra $\alpha\approx63^\circ$. Từ $\sin\alpha=0{,}25$ suy ra $\alpha\approx14^\circ$.

**Đáp số.** a) $0{,}8090$; $0{,}3640$; b) $63^\circ$; $14^\circ$.
:::

:::exercise
Biển báo "dốc $10\%$" nghĩa là cứ đi ngang $100$ m thì đường lên cao $10$ m. Theo quy chuẩn, lối đi cho xe lăn nên có độ dốc không quá $1:12$ (lên cao $1$ m trên $12$ m chiều ngang). Tính góc nghiêng so với phương ngang của mỗi con dốc (làm tròn đến độ).

::hint
**Kiến thức:** góc nghiêng $\alpha$ có $\tan\alpha=\dfrac{\text{độ cao}}{\text{chiều ngang}}$.

**Gợi ý các bước:**
1. Lập $\tan\alpha$ cho mỗi dốc.
2. Bấm `SHIFT` `tan`.

::solution
Gọi $\alpha$, $\beta$ lần lượt là góc nghiêng của con dốc $10\%$ và của lối đi cho xe lăn. Ta có $\tan\alpha=\dfrac{10}{100}=0{,}1$, suy ra $\alpha\approx6^\circ$; $\tan\beta=\dfrac1{12}$, suy ra $\beta\approx5^\circ$.

**Đáp số.** Khoảng $6^\circ$ và $5^\circ$.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $BC=10$ cm và $\sin B=0{,}6$.

a) Tính $AC$.

b) Tính $AB$.

c) Tính $\tan B$ và $\cos C$.

d) Tìm số đo góc $B$ (làm tròn đến độ).

::hint
**Kiến thức:** $\sin B=\dfrac{AC}{BC}$; định lí Pythagore; $\cos C=\sin B$ vì hai góc phụ nhau.

**Gợi ý các bước:**
1. $AC=BC\cdot\sin B$.
2. $AB=\sqrt{BC^2-AC^2}$.
3. Lập các tỉ số; bấm `SHIFT` `sin` $0{,}6$.

::solution
a) Xét tam giác $ABC$ vuông tại $A$, ta có $\sin B=\dfrac{AC}{BC}$, suy ra $AC=BC\cdot\sin B=10\cdot0{,}6=6$ (cm).

b) $AB=\sqrt{BC^2-AC^2}=\sqrt{100-36}=8$ (cm) (định lí Pythagore).

c) $\tan B=\dfrac{AC}{AB}=\dfrac68=0{,}75$; $\cos C=\sin B=0{,}6$ (hai góc phụ nhau).

d) Từ $\sin B=0{,}6$ suy ra $\widehat{B}\approx37^\circ$.

**Đáp số.** a) $6$ cm; b) $8$ cm; c) $0{,}75$ và $0{,}6$; d) $37^\circ$.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $AB=1$, $AC=2$. Tính $\sin B$ và $\cos B$, viết kết quả với mẫu không chứa căn.

::hint
**Kiến thức:** trục căn thức ở mẫu (xem [biến đổi đơn giản và rút gọn biểu thức chứa căn](lesson:simplifying-root-expressions)).

**Gợi ý các bước:**
1. Tính $BC=\sqrt5$.
2. Lập tỉ số rồi trục căn thức ở mẫu.

::solution
Xét tam giác $ABC$ vuông tại $A$, ta có $BC=\sqrt{AB^2+AC^2}=\sqrt{1+4}=\sqrt5$ (định lí Pythagore). Do đó $\sin B=\dfrac{AC}{BC}=\dfrac2{\sqrt5}=\dfrac{2\sqrt5}5$ và $\cos B=\dfrac{AB}{BC}=\dfrac1{\sqrt5}=\dfrac{\sqrt5}5$.

**Đáp số.** $\sin B=\dfrac{2\sqrt5}5$, $\cos B=\dfrac{\sqrt5}5$.
:::

:::exercise Thử thách
Cho tam giác $ABC$ cân tại $A$ có $BC=12$ cm và $\widehat{B}=30^\circ$. Kẻ đường cao $AH$. Tính $AH$ và $AB$ (viết dạng gọn).

::hint
**Kiến thức:** đường cao của tam giác cân cũng là đường trung tuyến, nên $BH=6$ cm; $\tan30^\circ=\dfrac{\sqrt3}3$, $\cos30^\circ=\dfrac{\sqrt3}2$.

**Gợi ý các bước:**
1. Trong tam giác vuông $ABH$: $\tan B=\dfrac{AH}{BH}$.
2. $\cos B=\dfrac{BH}{AB}$, suy ra $AB$; trục căn thức ở mẫu.

::solution
Vì tam giác $ABC$ cân tại $A$ nên đường cao $AH$ cũng là đường trung tuyến, do đó $BH=\dfrac{BC}2=6$ cm.

Xét tam giác $ABH$ vuông tại $H$, ta có $AH=BH\cdot\tan B=6\cdot\dfrac{\sqrt3}3=2\sqrt3$ (cm) và $AB=\dfrac{BH}{\cos B}=\dfrac{6\cdot2}{\sqrt3}=\dfrac{12}{\sqrt3}=4\sqrt3$ (cm).

**Đáp số.** $AH=2\sqrt3$ cm, $AB=4\sqrt3$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Cho tam giác $ABC$ vuông tại $A$. Khi đó $\sin B$ bằng
A. $\dfrac{AC}{AB}$.
B. $\dfrac{AB}{BC}$.
C. $\dfrac{AC}{BC}$.
D. $\dfrac{AB}{AC}$.
::key C
Cạnh đối của góc $B$ là $AC$, cạnh huyền là $BC$, nên $\sin B=\dfrac{AC}{BC}$. Phương án B là $\cos B$, A là $\tan B$, D là $\cot B$.

::mc
$\tan60^\circ$ bằng
A. $\dfrac{\sqrt3}3$.
B. $\dfrac12$.
C. $\dfrac{\sqrt3}2$.
D. $\sqrt3$.
::key D
Ta có $\tan60^\circ=\sqrt3$ (trong nửa tam giác đều cạnh $2$, cạnh đối của góc $60^\circ$ là $\sqrt3$, cạnh kề là $1$). Phương án A là $\tan30^\circ$, C là $\sin60^\circ$.

::mc
$\cos52^\circ$ bằng
A. $\sin52^\circ$.
B. $\cos38^\circ$.
C. $\tan38^\circ$.
D. $\sin38^\circ$.
::key D
Vì $52^\circ+38^\circ=90^\circ$ (hai góc phụ nhau) nên $\cos52^\circ=\sin38^\circ$. Phương án B giữ nguyên cos khi đổi sang góc phụ.

::mc
Tam giác $ABC$ vuông tại $A$ có $AB=12$, $BC=13$. Khi đó $\cos B$ bằng
A. $\dfrac{12}{13}$.
B. $\dfrac{5}{13}$.
C. $\dfrac{5}{12}$.
D. $\dfrac{13}{12}$.
::key A
Ta có $\cos B=\dfrac{AB}{BC}=\dfrac{12}{13}$. Phương án B là $\sin B$ (vì $AC=5$), D đặt cạnh huyền ở tử nên lớn hơn $1$.

::tf
Cho tam giác $ABC$ vuông tại $A$ có $AB=\sqrt3$, $AC=1$. Xét tính đúng sai của các mệnh đề sau:
a) $BC=2$.
b) $\sin B=\dfrac12$.
c) $\tan B=\sqrt3$.
d) $\widehat{C}=60^\circ$.
::key Đ Đ S Đ
a) Đúng. $BC=\sqrt{AB^2+AC^2}=\sqrt{3+1}=2$ (định lí Pythagore). b) Đúng. $\sin B=\dfrac{AC}{BC}=\dfrac12$. c) Sai. $\tan B=\dfrac{AC}{AB}=\dfrac{1}{\sqrt3}=\dfrac{\sqrt3}3$. d) Đúng. Vì $\sin B=\dfrac12$ nên $\widehat B=30^\circ$, do đó $\widehat C=90^\circ-30^\circ=60^\circ$.

::sa
Tính $2\sin30^\circ+3\tan45^\circ-\cot45^\circ$.
::key 3
Ta có $2\sin30^\circ+3\tan45^\circ-\cot45^\circ=2\cdot\dfrac12+3\cdot1-1=3$.

::sa
Một con đường có biển báo dốc $8\%$. Tính góc nghiêng của con đường so với phương nằm ngang theo độ (làm tròn kết quả đến hàng phần mười).
::key 4,6
Gọi $\alpha$ là góc nghiêng. Ta có $\tan\alpha=\dfrac{8}{100}=0{,}08$, suy ra $\alpha\approx4{,}6^\circ$.
:::
