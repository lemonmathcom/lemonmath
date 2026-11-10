---
title: Hai mặt phẳng vuông góc
description: Hiểu góc nhị diện, góc giữa hai mặt phẳng, điều kiện hai mặt phẳng vuông góc và tính góc giữa các mặt trong lăng trụ đứng, hình chóp đều.
minutes: 20
---

:::goals
- Nhận biết góc nhị diện và xác định góc phẳng nhị diện.
- Xác định và tính góc giữa hai mặt phẳng cắt nhau.
- Chứng minh hai mặt phẳng vuông góc và dùng tính chất của hai mặt phẳng vuông góc.
- Nhận biết lăng trụ đứng, lăng trụ đều, hình hộp chữ nhật, hình chóp đều và tính góc giữa các mặt của chúng.
:::

Màn hình laptop quay quanh bản lề, là một đường thẳng $d$ nằm trên đế. Lấy $H$ trên bản lề, điểm $A$ trên đế và điểm $B$ trên màn hình sao cho $HA$ và $HB$ đều vuông góc với bản lề và dài $20$ cm.

Khi nào màn hình thẳng đứng so với đế? Nếu đo được $AB=20\sqrt2$ cm thì ta có kết luận được không?

Để trả lời, ta cần đo "độ mở" giữa hai mặt phẳng.

## Góc nhị diện

### Khám phá: mở màn hình laptop

Gọi $\theta=\widehat{AHB}$ là góc mở. Vì $HA=HB=20$, ta tính $AB$ với vài giá trị của $\theta$:

| $\theta$ | $60^\circ$ | $90^\circ$ | $120^\circ$ |
|---|---|---|---|
| $AB$ | $20$ | $20\sqrt2\approx28{,}28$ | $20\sqrt3\approx34{,}64$ |

Với $\theta=60^\circ$, tam giác $AHB$ đều nên $AB=20$. Với $\theta=90^\circ$, định lí Pythagore cho $AB=\sqrt{20^2+20^2}=20\sqrt2$. Với $\theta=120^\circ$, tam giác cân $AHB$ cho $AB=2\cdot20\cdot\sin60^\circ=20\sqrt3$.

Ngược lại, nếu $AB^2=800=HA^2+HB^2$ thì theo định lí Pythagore đảo, $\widehat{AHB}=90^\circ$. Vậy $AB=20\sqrt2$ cm cho biết màn hình thẳng đứng. Góc $\widehat{AHB}$ chính là thứ ta gọi là góc phẳng nhị diện.

:::definition Góc nhị diện
Hình gồm hai nửa mặt phẳng $(\alpha)$, $(\beta)$ có chung bờ $d$ gọi là **góc nhị diện**; $d$ là **cạnh**, hai nửa mặt phẳng là hai **mặt** của góc nhị diện.
:::

:::definition Góc phẳng nhị diện
Lấy $O\in d$. Trong $(\alpha)$ kẻ tia $Ox\perp d$, trong $(\beta)$ kẻ tia $Oy\perp d$. Góc $\widehat{xOy}$ gọi là **góc phẳng** của góc nhị diện, và **số đo của góc nhị diện** bằng số đo của $\widehat{xOy}$ (từ $0^\circ$ đến $180^\circ$).
:::

Số đo này không phụ thuộc vào vị trí của $O$: khi dời $O$ dọc theo $d$, các tia mới song song và cùng hướng với các tia cũ, nên hai góc bằng nhau.

:::diagram Góc phẳng nhị diện
alt: Hai nửa mặt phẳng chung bờ d, hai tia Ox và Oy cùng vuông góc với d tại O, góc xOy là góc phẳng nhị diện
point O 0,0 below
point E 0,3 ""
point X -3,-0.8 left
point U -3,2.2 ""
point Y 3.2,-0.6 right
point V 3.2,2.4 ""
polygon O E U X
polygon O E V Y
segment O E
segment O X
segment O Y
right X O E
right Y O E
angle X O Y "φ"
label 0.3,3.3 "d"
label -1.8,1.6 "(α)"
label 1.9,1.6 "(β)"
:::

### Góc giữa hai mặt phẳng

Hai mặt phẳng cắt nhau tạo ra bốn góc nhị diện. Hai góc kề nhau có tổng số đo bằng $180^\circ$, nên ta chọn góc không vượt quá $90^\circ$ để đo độ mở.

:::definition Góc giữa hai mặt phẳng
Nếu hai mặt phẳng $(\alpha)$, $(\beta)$ cắt nhau và một góc nhị diện tạo bởi chúng có góc phẳng $\varphi$, thì **góc giữa** $(\alpha)$ và $(\beta)$ bằng $\varphi$ khi $\varphi\le90^\circ$ và bằng $180^\circ-\varphi$ khi $\varphi>90^\circ$. Nếu hai mặt phẳng song song hoặc trùng nhau, góc giữa chúng bằng $0^\circ$.

Hai mặt phẳng **vuông góc** khi góc giữa chúng bằng $90^\circ$; ta viết $(\alpha)\perp(\beta)$.
:::

:::note Cách tìm góc giữa hai mặt phẳng cắt nhau
1. Tìm giao tuyến $d$ của hai mặt phẳng.
2. Trong mỗi mặt phẳng, tìm một đường thẳng vuông góc với $d$ tại cùng một điểm.
3. Tính góc giữa hai đường thẳng đó; nếu góc tù thì lấy góc bù.
:::

Ta áp dụng ngay trong hình lập phương.

:::diagram Mặt phẳng $(A'BCD')$ cắt đáy $(ABCD)$ theo $BC$
alt: Hình lập phương ABCD.A'B'C'D' với các cạnh khuất vẽ nét đứt, hình chữ nhật A'BCD' và góc ABA' bằng 45 độ
point A 0,0 below-left
point B 3,0 below-right
point C 4.2,1.4 right
point D 1.2,1.4 above-left
point A' 0,3 left
point B' 3,3 above
point C' 4.2,4.4 above-right
point D' 1.2,4.4 above
segment A B
segment B C
segment C D dashed
segment D A dashed
segment A' B'
segment B' C'
segment C' D'
segment D' A'
segment A A'
segment B B'
segment C C'
segment D D' dashed
segment A' B
segment C D' dashed
angle A B A' "45°"
:::

:::example Góc giữa hai mặt phẳng trong hình lập phương
Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa $(A'BCD')$ và $(ABCD)$.

**Lời giải.** Hai mặt phẳng cắt nhau theo $BC$, nên ta tìm trong mỗi mặt phẳng một đường thẳng vuông góc với $BC$ tại $B$. Trong $(ABCD)$ đó là $BA$, vì $AB\perp BC$. Trong $(A'BCD')$ đó là $BA'$, vì $BC\perp(ABB'A')$ nên $BC\perp BA'$.

Vậy góc phẳng nhị diện là $\widehat{ABA'}$. Tam giác $ABA'$ vuông cân tại $A$ vì $AA'=AB$ và $AA'\perp AB$:

$$\widehat{ABA'}=45^\circ.$$

Vậy góc giữa $(A'BCD')$ và $(ABCD)$ bằng $45^\circ$.
:::

## Hai mặt phẳng vuông góc

Làm sao biết hai mặt phẳng vuông góc mà không cần đo góc? Câu trả lời nằm ở một đường thẳng vuông góc với mặt phẳng.

:::theorem Điều kiện để hai mặt phẳng vuông góc
Nếu mặt phẳng $(\alpha)$ chứa một đường thẳng $a$ vuông góc với mặt phẳng $(\beta)$ thì $(\alpha)\perp(\beta)$.
:::

Thật vậy, gọi $d$ là giao tuyến và $O$ là giao điểm của $a$ với $(\beta)$; khi đó $O\in d$. Vì $a\perp(\beta)$ nên $a\perp d$. Trong $(\beta)$ kẻ $Oy\perp d$; vì $a\perp(\beta)$ nên cũng có $a\perp Oy$. Vậy $a$ và $Oy$ cùng vuông góc với $d$ và vuông góc với nhau, tức là góc phẳng nhị diện bằng $90^\circ$.

Chiều ngược lại cho ta những tính chất hay dùng nhất khi tính toán.

:::theorem Tính chất của hai mặt phẳng vuông góc
Cho $(\alpha)\perp(\beta)$ có giao tuyến $d$.
- Nếu đường thẳng $a\subset(\alpha)$ và $a\perp d$ thì $a\perp(\beta)$.
- Nếu hai mặt phẳng cắt nhau cùng vuông góc với một mặt phẳng thứ ba thì giao tuyến của chúng vuông góc với mặt phẳng thứ ba đó.
:::

Với tính chất thứ nhất: gọi $O=a\cap d$ và kẻ $Oy\perp d$ trong $(\beta)$. Góc phẳng nhị diện là $90^\circ$ nên $a\perp Oy$. Đường thẳng $a$ vuông góc với hai đường thẳng cắt nhau $d$ và $Oy$ của $(\beta)$, nên $a\perp(\beta)$. Tính chất thứ hai ta dùng như một kết quả có sẵn.

:::diagram Hình chóp $S.ABCD$ có $SA\perp(ABCD)$
alt: Hình chóp S.ABCD có đáy là hình bình hành vẽ theo phép chiếu xiên, cạnh SA thẳng đứng vuông góc với đáy, các cạnh khuất vẽ nét đứt
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.5 right
point D 1.2,1.5 above
point S 0,4.2 above-left
segment S A
segment S B
segment S C
segment A B
segment B C
segment A D dashed
segment D C dashed
segment S D dashed
right S A B
:::

:::example Chứng minh hai mặt phẳng vuông góc
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $4$, $SA\perp(ABCD)$ và $SA=4\sqrt3$. Chứng minh
a) $(SAB)\perp(ABCD)$; b) $(SBC)\perp(SAB)$; c) $(SBD)\perp(SAC)$.
Sau đó tính góc giữa $(SBC)$ và $(ABCD)$.

**Lời giải.** Mỗi câu ta tìm một đường thẳng nằm trong mặt phẳng này và vuông góc với mặt phẳng kia.

a) Mặt phẳng $(SAB)$ chứa $SA$, mà $SA\perp(ABCD)$. Vậy $(SAB)\perp(ABCD)$.

b) $BC\perp AB$ (hình vuông) và $BC\perp SA$ (vì $SA\perp(ABCD)$). Vậy $BC\perp(SAB)$. Mặt phẳng $(SBC)$ chứa $BC$, nên $(SBC)\perp(SAB)$.

c) $BD\perp AC$ (hai đường chéo của hình vuông) và $BD\perp SA$. Vậy $BD\perp(SAC)$. Mặt phẳng $(SBD)$ chứa $BD$, nên $(SBD)\perp(SAC)$.

Góc giữa $(SBC)$ và $(ABCD)$: giao tuyến là $BC$, ta có $BA\perp BC$ và $BS\perp BC$ (theo câu b, vì $BC\perp(SAB)$). Góc phẳng nhị diện là $\widehat{SBA}$, trong tam giác $SAB$ vuông tại $A$:

$$\tan\widehat{SBA}=\frac{SA}{AB}=\frac{4\sqrt3}{4}=\sqrt3\Rightarrow\widehat{SBA}=60^\circ.$$

Vậy góc giữa $(SBC)$ và $(ABCD)$ bằng $60^\circ$.
:::

Khi một mặt bên nằm trong mặt phẳng vuông góc với đáy, đường cao của hình chóp nằm ngay trong mặt bên đó.

:::example Mặt bên vuông góc với đáy
Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật với $AB=6$, $BC=4$. Tam giác $SAB$ đều và nằm trong mặt phẳng vuông góc với $(ABCD)$. Tính chiều cao $SH$ với $H$ là trung điểm của $AB$, rồi tính góc giữa $SC$ và $(ABCD)$ (làm tròn đến hàng phần mười của độ).

**Lời giải.** Tam giác $SAB$ đều nên đường trung tuyến $SH$ cũng là đường cao, tức $SH\perp AB$. Đường thẳng $SH$ nằm trong $(SAB)$ và vuông góc với giao tuyến $AB$, mà $(SAB)\perp(ABCD)$, nên $SH\perp(ABCD)$. Chiều cao là

$$SH=\frac{6\sqrt3}{2}=3\sqrt3.$$

Vì $SH\perp(ABCD)$ nên $H$ là hình chiếu của $S$, và góc giữa $SC$ với $(ABCD)$ là $\widehat{SCH}$. Tam giác $HBC$ vuông tại $B$ cho $HC=\sqrt{3^2+4^2}=5$, rồi tam giác $SHC$ vuông tại $H$:

$$\tan\widehat{SCH}=\frac{SH}{HC}=\frac{3\sqrt3}{5}\approx1{,}039\Rightarrow\widehat{SCH}\approx46{,}1^\circ.$$

Vậy chiều cao là $3\sqrt3$ và góc giữa $SC$ với $(ABCD)$ xấp xỉ $46{,}1^\circ$.
:::

## Lăng trụ đứng và hình chóp đều

Các hình sau xuất hiện thường xuyên trong bài toán về góc giữa hai mặt phẳng.

- **Lăng trụ đứng** có cạnh bên vuông góc với mặt đáy. Mỗi mặt bên là hình chữ nhật chứa một cạnh bên, nên theo điều kiện ở trên, mỗi mặt bên vuông góc với đáy.
- **Lăng trụ đều** là lăng trụ đứng có đáy là đa giác đều. **Hình hộp đứng** là lăng trụ đứng có đáy là hình bình hành; **hình hộp chữ nhật** có đáy là hình chữ nhật; **hình lập phương** có mọi mặt là hình vuông.
- **Hình chóp đều** có đáy là đa giác đều và chân đường cao là tâm của đáy. Các cạnh bên bằng nhau, các mặt bên là những tam giác cân bằng nhau, và đường cao kẻ từ đỉnh của một mặt bên gọi là **trung đoạn**.
- **Hình chóp cụt đều** là phần của hình chóp đều nằm giữa đáy và một mặt phẳng song song với đáy cắt các cạnh bên. Hai đáy là hai đa giác đều đồng dạng, các mặt bên là những hình thang cân bằng nhau.

:::example Lăng trụ đứng
Cho lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ vuông tại $A$, $AB=3$, $AC=4$ và $AA'=1{,}8$. Tính góc giữa $(A'BC)$ và $(ABC)$ (làm tròn đến hàng phần mười của độ).

**Lời giải.** Giao tuyến của hai mặt phẳng là $BC$. Kẻ $AH\perp BC$ tại $H$ trong $(ABC)$. Vì $AA'\perp(ABC)$ nên $BC\perp AA'$, do đó $BC\perp(A'AH)$ và suy ra $BC\perp A'H$. Góc phẳng nhị diện là $\widehat{A'HA}$.

Tính $AH$ từ diện tích tam giác vuông $ABC$ (với $BC=5$):

$$AH=\frac{AB\cdot AC}{BC}=\frac{3\cdot4}{5}=2{,}4,\qquad\tan\widehat{A'HA}=\frac{AA'}{AH}=\frac{1{,}8}{2{,}4}=0{,}75.$$

Do đó $\widehat{A'HA}\approx36{,}9^\circ$. Vậy góc giữa $(A'BC)$ và $(ABC)$ xấp xỉ $36{,}9^\circ$.
:::

Với hình chóp đều, mặt bên và đáy cắt nhau theo một cạnh đáy, và trung điểm của cạnh đó giúp ta tìm góc phẳng.

:::example Hình chóp tứ giác đều
Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $6$ và cạnh bên bằng $5$. Gọi $O$ là tâm của đáy.
a) Chứng minh $(SAC)\perp(ABCD)$.
b) Tính góc giữa $(SBC)$ và $(ABCD)$ (làm tròn đến hàng phần mười của độ).

**Lời giải.** a) Vì $S.ABCD$ là hình chóp đều nên $SO\perp(ABCD)$. Mặt phẳng $(SAC)$ chứa $SO$, vậy $(SAC)\perp(ABCD)$.

b) Gọi $M$ là trung điểm của $BC$. Hình vuông cho $OM\perp BC$, tam giác $SBC$ cân tại $S$ cho $SM\perp BC$. Vậy góc phẳng nhị diện là $\widehat{SMO}$. Ta có $OM=\dfrac{6}{2}=3$ và $SM=\sqrt{SB^2-BM^2}=\sqrt{25-9}=4$. Trong tam giác $SOM$ vuông tại $O$:

$$\cos\widehat{SMO}=\frac{OM}{SM}=\frac34\Rightarrow\widehat{SMO}\approx41{,}4^\circ.$$

Vậy góc giữa $(SBC)$ và $(ABCD)$ xấp xỉ $41{,}4^\circ$.

**Kiểm tra.** Chiều cao $SO=\sqrt{SM^2-OM^2}=\sqrt7$, và $SB^2=SO^2+OB^2=7+18=25$, đúng với cạnh bên $5$.
:::

:::warning Những sai lầm thường gặp
- **Lấy hai đường thẳng tuỳ ý.** Sai: góc giữa hai mặt phẳng bằng góc giữa hai đường thẳng bất kì, mỗi đường nằm trong một mặt phẳng. Lí do sai: hai đường thẳng đó có thể không vuông góc với giao tuyến. Đúng: lấy hai đường thẳng cùng vuông góc với giao tuyến tại một điểm.
- **Quên đổi góc tù.** Sai: góc phẳng nhị diện là $120^\circ$ nên góc giữa hai mặt phẳng là $120^\circ$. Lí do sai: góc giữa hai mặt phẳng không vượt quá $90^\circ$. Đúng: $180^\circ-120^\circ=60^\circ$.
- **Cho rằng mọi đường thẳng trong $(\alpha)$ đều vuông góc với $(\beta)$.** Sai: $(\alpha)\perp(\beta)$ nên mọi đường thẳng của $(\alpha)$ vuông góc với $(\beta)$. Lí do sai: chỉ những đường thẳng vuông góc với giao tuyến mới vuông góc với $(\beta)$. Đúng: $a\subset(\alpha)$ và $a\perp d$.
- **Thiếu điều kiện vuông góc với giao tuyến.** Sai: $(SAB)\perp(ABCD)$ nên $SA\perp(ABCD)$ với mọi tam giác $SAB$. Lí do sai: phải có $SA\perp AB$ (vuông góc với giao tuyến) mới suy ra được. Đúng: kiểm tra $SA\perp AB$ rồi mới kết luận.
:::

## Thuật ngữ

:::terms
- góc nhị diện | dihedral angle
- cạnh của góc nhị diện | edge of a dihedral angle
- góc phẳng nhị diện | plane angle of a dihedral angle
- góc giữa hai mặt phẳng | angle between two planes
- hai mặt phẳng vuông góc | perpendicular planes
- giao tuyến | line of intersection
- lăng trụ đứng | right prism
- lăng trụ đều | regular prism
- hình hộp chữ nhật | cuboid
- hình chóp đều | regular pyramid
- trung đoạn | slant height
- hình chóp cụt đều | frustum of a regular pyramid
:::

## Tóm tắt

- Góc phẳng nhị diện $\widehat{xOy}$: $Ox\subset(\alpha)$, $Oy\subset(\beta)$ cùng vuông góc với giao tuyến $d$ tại $O$.
- Góc giữa hai mặt phẳng cắt nhau là góc nhị diện không tù: $\varphi$ nếu $\varphi\le90^\circ$, $180^\circ-\varphi$ nếu $\varphi>90^\circ$.
- $(\alpha)\perp(\beta)$ khi góc giữa chúng bằng $90^\circ$; chỉ cần $(\alpha)$ chứa một đường thẳng vuông góc với $(\beta)$.
- Nếu $(\alpha)\perp(\beta)$ và $a\subset(\alpha)$, $a\perp d$ thì $a\perp(\beta)$. Hai mặt phẳng cắt nhau cùng vuông góc với mặt phẳng thứ ba thì giao tuyến vuông góc với mặt phẳng đó.
- Lăng trụ đứng: các mặt bên vuông góc với đáy. Hình chóp đều: chân đường cao là tâm đáy; góc giữa mặt bên và đáy là $\widehat{SMO}$ với $M$ là trung điểm cạnh đáy.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Hai mặt phẳng $(\alpha)$ và $(\beta)$ cắt nhau theo đường thẳng $d$. Một góc nhị diện tạo bởi chúng có góc phẳng $135^\circ$. Tính góc giữa $(\alpha)$ và $(\beta)$.

::hint
**Kiến thức:** góc giữa hai mặt phẳng không vượt quá $90^\circ$; nếu góc phẳng $\varphi>90^\circ$ thì góc giữa là $180^\circ-\varphi$.

**Gợi ý các bước:**
1. So sánh $135^\circ$ với $90^\circ$.
2. Lấy góc bù.

::solution
Vì $135^\circ>90^\circ$ nên góc giữa hai mặt phẳng là $180^\circ-135^\circ=45^\circ$.

**Đáp số.** $45^\circ$.
:::

:::exercise
Một tờ bìa được gập theo nếp gấp $d$. Lấy điểm $H$ trên nếp gấp, điểm $A$ trên một nửa tờ bìa và điểm $B$ trên nửa còn lại sao cho $HA\perp d$, $HB\perp d$, $HA=12$ cm, $HB=16$ cm. Đo được $AB=20$ cm. Hai nửa tờ bìa có vuông góc với nhau không?

::hint
**Kiến thức:** $\widehat{AHB}$ là góc phẳng nhị diện; định lí Pythagore đảo.

**Gợi ý các bước:**
1. Tính $HA^2+HB^2$.
2. So sánh với $AB^2$.

::solution
$HA^2+HB^2=144+256=400=20^2=AB^2$, nên $\widehat{AHB}=90^\circ$.

**Đáp số.** Có, hai nửa tờ bìa vuông góc với nhau.
:::

:::exercise
Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Chứng minh $(ABB'A')\perp(ADD'A')$.

::hint
**Kiến thức:** nếu $(\alpha)$ chứa một đường thẳng vuông góc với $(\beta)$ thì $(\alpha)\perp(\beta)$.

**Gợi ý các bước:**
1. Chọn đường thẳng $AB$ trong $(ABB'A')$.
2. Chứng minh $AB$ vuông góc với hai đường thẳng cắt nhau của $(ADD'A')$.

::solution
$AB\perp AD$ (đáy là hình chữ nhật) và $AB\perp AA'$ (mặt bên là hình chữ nhật). Hai đường thẳng $AD$, $AA'$ cắt nhau trong $(ADD'A')$, nên $AB\perp(ADD'A')$. Mặt phẳng $(ABB'A')$ chứa $AB$.

**Đáp số.** $(ABB'A')\perp(ADD'A')$.
:::

:::exercise
Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, tam giác $ABC$ vuông tại $B$ và $SA=AB=2$. Tính góc giữa $(SBC)$ và $(ABC)$.

::hint
**Kiến thức:** góc giữa hai mặt phẳng là góc giữa hai đường thẳng cùng vuông góc với giao tuyến $BC$ tại $B$.

**Gợi ý các bước:**
1. Chứng minh $BC\perp(SAB)$.
2. Chỉ ra góc phẳng nhị diện là $\widehat{SBA}$ và tính $\tan$.

::solution
$BC\perp AB$ và $BC\perp SA$ nên $BC\perp(SAB)$, suy ra $BC\perp SB$. Góc phẳng nhị diện là $\widehat{SBA}$ với $\tan\widehat{SBA}=\dfrac{SA}{AB}=\dfrac22=1$.

**Đáp số.** $45^\circ$.
:::

:::exercise
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật với $AB=3$, $AD=4$, $SA\perp(ABCD)$ và $SA=4$. Mỗi khẳng định sau đúng hay sai?

a) $(SAB)\perp(ABCD)$.

b) $(SCD)\perp(SAD)$.

c) Góc giữa $(SBC)$ và $(ABCD)$ bằng $45^\circ$.

d) Góc giữa $(SCD)$ và $(ABCD)$ bằng $45^\circ$.

::hint
**Kiến thức:** điều kiện hai mặt phẳng vuông góc; góc phẳng nhị diện qua giao tuyến.

**Gợi ý các bước:**
1. a) $(SAB)$ chứa $SA$.
2. b) Chứng minh $CD\perp(SAD)$.
3. c), d) Tìm góc $\widehat{SBA}$ và $\widehat{SDA}$.

::solution
a) **Đúng**: $(SAB)$ chứa $SA\perp(ABCD)$.

b) **Đúng**: $CD\perp AD$ và $CD\perp SA$ nên $CD\perp(SAD)$; mà $(SCD)$ chứa $CD$.

c) **Sai**: góc phẳng là $\widehat{SBA}$ với $\tan\widehat{SBA}=\dfrac{SA}{AB}=\dfrac43\ne1$.

d) **Đúng**: $CD\perp(SAD)$ nên $CD\perp SD$; góc phẳng là $\widehat{SDA}$ với $\tan\widehat{SDA}=\dfrac{SA}{AD}=1$, tức $45^\circ$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Một ngôi nhà có hai tấm mái phẳng. Mặt cắt thẳng đứng vuông góc với đường nóc là một tam giác cân có đáy nằm ngang dài $8$ m và chiều cao $3$ m. Mỗi tấm mái tạo với mặt phẳng ngang một góc bao nhiêu độ (làm tròn đến hàng đơn vị)?

::hint
**Kiến thức:** mặt cắt vuông góc với giao tuyến (mép mái) của tấm mái và mặt phẳng ngang, nên góc ở đáy của tam giác là góc phẳng nhị diện.

**Gợi ý các bước:**
1. Tìm nửa đáy của tam giác cân.
2. Tính $\tan$ của góc ở đáy.

::solution
Nửa đáy bằng $4$ m, chiều cao $3$ m nên $\tan\alpha=\dfrac34$, suy ra $\alpha\approx36{,}87^\circ$.

**Đáp số.** Khoảng $37^\circ$.
:::

:::exercise
Cho lăng trụ tam giác đều $ABC.A'B'C'$ có cạnh đáy bằng $6$ và cạnh bên bằng $9$. Tính góc giữa $(A'BC)$ và $(ABC)$.

::hint
**Kiến thức:** lăng trụ đều có cạnh bên vuông góc với đáy; gọi $M$ là trung điểm $BC$.

**Gợi ý các bước:**
1. Chứng minh $AM\perp BC$ và $A'M\perp BC$.
2. Tính $AM$ rồi $\tan\widehat{A'MA}$.

::solution
Tam giác $ABC$ đều nên $AM\perp BC$ và $AM=\dfrac{6\sqrt3}{2}=3\sqrt3$. Vì $AA'\perp(ABC)$ nên $BC\perp(A'AM)$, suy ra $BC\perp A'M$. Góc phẳng là $\widehat{A'MA}$ với $\tan\widehat{A'MA}=\dfrac{9}{3\sqrt3}=\sqrt3$.

**Đáp số.** $60^\circ$.
:::

:::exercise Ôn tập
Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA\perp(ABCD)$ và $SC=a\sqrt3$. Tính
a) góc giữa đường thẳng $SC$ và mặt phẳng $(ABCD)$ (làm tròn đến hàng phần mười của độ);
b) góc giữa $(SBC)$ và $(ABCD)$.

::hint
**Kiến thức:** góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng và hình chiếu vuông góc của nó trên mặt phẳng; ở câu b dùng góc phẳng nhị diện.

**Gợi ý các bước:**
1. Hình chiếu của $SC$ trên $(ABCD)$ là $AC$; tính $AC$ và $SA$.
2. Tính $\cos\widehat{SCA}$.
3. Câu b: góc phẳng là $\widehat{SBA}$.

::solution
a) $AC=a\sqrt2$, $SA=\sqrt{3a^2-2a^2}=a$. Góc cần tìm là $\widehat{SCA}$ với $\cos\widehat{SCA}=\dfrac{AC}{SC}=\sqrt{\dfrac23}$, nên $\widehat{SCA}\approx35{,}3^\circ$.

b) $BC\perp(SAB)$ nên góc phẳng là $\widehat{SBA}$ với $\tan\widehat{SBA}=\dfrac{SA}{AB}=1$, tức $45^\circ$.

**Đáp số.** a) $35{,}3^\circ$; b) $45^\circ$.
:::

:::exercise Thử thách
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính góc giữa $(A'BD)$ và $(C'BD)$ (làm tròn đến hàng phần mười của độ).

::hint
**Kiến thức:** giao tuyến của hai mặt phẳng là $BD$; gọi $O$ là tâm của $ABCD$ và tìm hai đường thẳng vuông góc với $BD$ tại $O$.

**Gợi ý các bước:**
1. $A'B=A'D$ và $C'B=C'D$, suy ra $A'O\perp BD$ và $C'O\perp BD$.
2. Tính $A'O$, $C'O$, $A'C'$.
3. Dùng định lí côsin trong tam giác $A'OC'$.

::solution
Tam giác $A'BD$ cân tại $A'$ nên $A'O\perp BD$; tương tự $C'O\perp BD$. Góc phẳng là $\widehat{A'OC'}$. Ta có $A'O=C'O=\sqrt{a^2+\dfrac{a^2}{2}}=\dfrac{a\sqrt6}{2}$ và $A'C'=a\sqrt2$:

$$\cos\widehat{A'OC'}=\frac{\frac{3a^2}{2}+\frac{3a^2}{2}-2a^2}{2\cdot\frac{3a^2}{2}}=\frac13.$$

Góc này nhọn nên $\widehat{A'OC'}\approx70{,}5^\circ$.

**Đáp số.** $70{,}5^\circ$.
:::

:::exercise
Cho hình chóp $S.ABC$ có $(SAB)\perp(ABC)$ và $(SAC)\perp(ABC)$. Chứng minh $SA\perp(ABC)$. Biết $AB=3$ và $SB=5$, tính $SA$.

::hint
**Kiến thức:** hai mặt phẳng cắt nhau cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng vuông góc với mặt phẳng đó.

**Gợi ý các bước:**
1. Tìm giao tuyến của $(SAB)$ và $(SAC)$.
2. Dùng $SA\perp AB$ trong tam giác $SAB$.

::solution
Hai mặt phẳng $(SAB)$, $(SAC)$ cắt nhau theo $SA$ và cùng vuông góc với $(ABC)$, nên $SA\perp(ABC)$. Khi đó $SA\perp AB$ và $SA=\sqrt{SB^2-AB^2}=\sqrt{25-9}=4$.

**Đáp số.** $SA=4$.
:::

## Kiểm tra mini

:::quiz
::mc
Hai mặt phẳng cắt nhau có một góc nhị diện với góc phẳng $120^\circ$. Góc giữa hai mặt phẳng đó bằng
A. $120^\circ$.
B. $30^\circ$.
C. $60^\circ$.
D. $90^\circ$.
::key C
Góc giữa hai mặt phẳng không vượt quá $90^\circ$ nên lấy $180^\circ-120^\circ=60^\circ$. Phương án A quên đổi góc tù.

::mc
Cho hình lập phương $ABCD.A'B'C'D'$. Mặt phẳng nào sau đây **không** vuông góc với $(ABCD)$?
A. $(ABB'A')$.
B. $(BCC'B')$.
C. $(BDD'B')$.
D. $(A'BCD')$.
::key D
Các mặt phẳng ở A, B, C đều chứa một cạnh bên vuông góc với $(ABCD)$. Mặt phẳng $(A'BCD')$ tạo với $(ABCD)$ góc $45^\circ$.

::mc
Cho hình chóp $S.ABCD$ có đáy là hình vuông và $SA\perp(ABCD)$. Mặt phẳng nào sau đây vuông góc với $(SAC)$?
A. $(SBD)$.
B. $(SAD)$.
C. $(SAB)$.
D. $(SBC)$.
::key A
$BD\perp AC$ và $BD\perp SA$ nên $BD\perp(SAC)$, suy ra $(SBD)\perp(SAC)$. Các mặt phẳng còn lại đều đi qua $SA$ và không vuông góc với $(SAC)$.

::mc
Hình chóp tứ giác đều có cạnh đáy $6$ và chiều cao $4$. Tang của góc giữa mặt bên và mặt đáy bằng
A. $\dfrac34$.
B. $\dfrac43$.
C. $\dfrac{2\sqrt2}{3}$.
D. $\dfrac23$.
::key B
Góc phẳng là $\widehat{SMO}$ với $OM=3$, $SO=4$ nên $\tan=\dfrac{SO}{OM}=\dfrac43$. Phương án A đảo tỉ số, C dùng $OB=3\sqrt2$ thay cho $OM$, D dùng cả cạnh đáy $6$.

::tf
Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $4$ và chiều cao $SO=2\sqrt3$ ($O$ là tâm đáy, $M$ là trung điểm $BC$).
a) $(SAC)\perp(ABCD)$.
b) $(SAC)\perp(SBD)$.
c) Góc giữa $(SBC)$ và $(ABCD)$ bằng $30^\circ$.
d) $SM=4$.
::key Đ Đ S Đ
a) Đúng: $(SAC)$ chứa $SO\perp(ABCD)$. b) Đúng: $BD\perp AC$ và $BD\perp SO$ nên $BD\perp(SAC)$. c) Sai: $\tan\widehat{SMO}=\dfrac{2\sqrt3}{2}=\sqrt3$ nên góc là $60^\circ$. d) Đúng: $SM=\sqrt{12+4}=4$.

::sa
Cho hình lập phương $ABCD.A'B'C'D'$. Tính số đo (độ) của góc giữa $(A'BD)$ và $(ABCD)$, làm tròn đến hàng phần mười.
::key 54,7
Gọi $O$ là tâm $ABCD$, góc phẳng là $\widehat{A'OA}$ với $\tan=\dfrac{AA'}{AO}=\dfrac{a}{a\sqrt2/2}=\sqrt2$, nên góc xấp xỉ $54{,}7^\circ$.

::sa
Hình chóp $S.ABCD$ có đáy là hình chữ nhật $AB=4$, $BC=3$, tam giác $SAB$ đều và $(SAB)\perp(ABCD)$. Tính độ dài $SC$.
::key 5
Gọi $H$ là trung điểm $AB$ thì $SH\perp(ABCD)$ và $SH=2\sqrt3$, $HC=\sqrt{4+9}=\sqrt{13}$. Vậy $SC=\sqrt{12+13}=5$.
:::
