---
title: Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng
description: Hiểu phép chiếu vuông góc lên mặt phẳng, góc giữa đường thẳng và mặt phẳng; dùng hình chiếu để tính góc trong hình chóp, hình lập phương và thực tế.
minutes: 25
---

:::goals
- Hiểu phép chiếu vuông góc của điểm và đường thẳng lên một mặt phẳng.
- Xác định hình chiếu vuông góc của một đường thẳng lên mặt phẳng.
- Định nghĩa và tính góc giữa đường thẳng và mặt phẳng.
- Vận dụng vào hình chóp, hình lập phương và bài toán thực tế (thang, cột, dây neo).
:::

Giả sử một chiếc thang dài $4$ m dựa vào tường thẳng đứng, chân thang cách tường $1{,}5$ m (số liệu giả định). Thang nghiêng bao nhiêu so với mặt đất? Để trả lời, ta cần một cách đo góc giữa một đường thẳng và một mặt phẳng.

## Khám phá: bóng của đường thẳng

Khi ánh nắng chiếu thẳng đứng xuống sân phẳng, bóng của một cây gậy trên sân là một đoạn thẳng. Bóng đó chính là hình chiếu vuông góc của cây gậy lên sân. Gậy càng dựng gần thẳng đứng thì bóng càng ngắn.

Cho cây gậy $SA$ dài $5$ có chân $A$ trên sân, đầu $S$ cách sân $h$ (đơn vị tuỳ ý). Bóng của gậy là đoạn $AH$ với $H$ là hình chiếu của $S$ lên sân, và $AH=\sqrt{25-h^2}$.

| $h$ | $AH$ | $\cos$ góc giữa gậy và sân $=AH/5$ |
|---|---|---|
| $3$ | $4$ | $0{,}8$ |
| $4$ | $3$ | $0{,}6$ |
| $5$ | $0$ | $0$ |

Gậy nằm sát sân thì bóng dài bằng gậy (góc $0^\circ$); gậy thẳng đứng thì bóng co lại thành một điểm (góc $90^\circ$). Góc giữa gậy và bóng của nó chính là cách đo độ nghiêng.

## Phép chiếu vuông góc

:::definition Hình chiếu vuông góc của một điểm
Cho mặt phẳng $(P)$ và điểm $M$. Đường thẳng đi qua $M$ và vuông góc với $(P)$ cắt $(P)$ tại $H$. Điểm $H$ gọi là **hình chiếu vuông góc** (hay **hình chiếu**) của $M$ lên $(P)$. Nếu $M\in(P)$ thì hình chiếu của $M$ là chính $M$.
:::

Hình chiếu của một hình $\mathcal H$ lên $(P)$ là tập hợp hình chiếu của mọi điểm của $\mathcal H$. Với đường thẳng $d$ không vuông góc với $(P)$, hình chiếu của $d$ lên $(P)$ là một đường thẳng $d'$. Nếu $d\perp(P)$ thì hình chiếu của $d$ chỉ là một điểm.

:::theorem Định lí ba đường vuông góc
Cho đường thẳng $b$ nằm trong $(P)$ và đường thẳng $a$ không vuông góc với $(P)$, có hình chiếu $a'$ lên $(P)$. Khi đó $b\perp a$ khi và chỉ khi $b\perp a'$.
:::

**Vì sao?** Gọi $A\in a$ và $H$ là hình chiếu của $A$ lên $(P)$, nên $AH\perp(P)$ và $AH\perp b$. Nếu $b\perp a'$ thì $b$ vuông góc với hai đường cắt nhau $AH$ và $a'$ của mặt phẳng $(a, a')$, suy ra $b\perp(a, a')$ và do đó $b\perp a$. Chiều ngược lại chứng minh tương tự.

## Góc giữa đường thẳng và mặt phẳng

:::definition Góc giữa đường thẳng và mặt phẳng
Cho đường thẳng $d$ và mặt phẳng $(P)$.
- Nếu $d\perp(P)$ thì góc giữa $d$ và $(P)$ bằng $90^\circ$.
- Nếu $d$ không vuông góc với $(P)$ thì góc giữa $d$ và $(P)$ là góc giữa $d$ và hình chiếu $d'$ của nó lên $(P)$. Kí hiệu $\widehat{(d, (P))}$.
- Nếu $d\parallel(P)$ hoặc $d\subset(P)$ thì quy ước góc bằng $0^\circ$.
:::

Góc giữa đường thẳng và mặt phẳng luôn thuộc đoạn từ $0^\circ$ đến $90^\circ$.

**Cách tìm.** Muốn tính góc giữa đường thẳng $d$ cắt $(P)$ tại $A$, ta lấy một điểm $S$ trên $d$, dựng hình chiếu $H$ của $S$ lên $(P)$. Khi đó góc cần tìm là $\widehat{SAH}$ trong tam giác $SAH$ vuông tại $H$, và
$$\sin\widehat{SAH}=\frac{SH}{SA},\qquad \cos\widehat{SAH}=\frac{AH}{SA}.$$

:::diagram Góc giữa $SC$ và mặt đáy $(ABCD)$
alt: Hình chóp S.ABCD có SA vuông góc với đáy, hình chiếu của SC lên đáy là AC, góc giữa SC và đáy là góc SCA với tam giác SAC vuông tại A
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.5 right
point D 1.2,1.5 above
point S 0,4.2 above-left
segment S A
segment S B
segment S C
segment S D dashed
segment A B
segment B C
segment A D dashed
segment D C dashed
segment A C dashed
right S A B
right S A D
:::

## Ví dụ

Trước hết ta xét một hình chóp có cạnh bên vuông góc với đáy.

:::example Góc giữa cạnh bên và mặt đáy
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA\perp(ABCD)$ và $SA=a$. Tính góc giữa $SC$ và mặt phẳng $(ABCD)$, làm tròn đến hàng phần mười của độ.

**Lời giải.** Vì $SA\perp(ABCD)$ nên $AC$ là hình chiếu của $SC$ lên $(ABCD)$. Vậy $\widehat{(SC, (ABCD))}=\widehat{SCA}$.

Đường chéo hình vuông có $AC=a\sqrt2$. Tam giác $SAC$ vuông tại $A$ nên
$$\tan\widehat{SCA}=\frac{SA}{AC}=\frac{a}{a\sqrt2}=\frac1{\sqrt2}\Rightarrow\widehat{SCA}\approx35{,}3^\circ.$$

Vậy góc giữa $SC$ và $(ABCD)$ khoảng $35{,}3^\circ$.
:::

Tiếp theo là cạnh bên khác của cùng hình chóp.

:::example Một góc đặc biệt
Với hình chóp ở ví dụ trên, tính góc giữa $SB$ và $(ABCD)$.

**Lời giải.** Vì $SA\perp(ABCD)$ nên $AB$ là hình chiếu của $SB$ lên $(ABCD)$. Vậy $\widehat{(SB, (ABCD))}=\widehat{SBA}$.

Tam giác $SAB$ vuông tại $A$ có $SA=AB=a$ nên vuông cân, do đó $\widehat{SBA}=45^\circ$.

Vậy góc giữa $SB$ và $(ABCD)$ bằng $45^\circ$.
:::

Bây giờ ta tính góc của đường chéo hình lập phương.

:::example Đường chéo của hình lập phương
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính góc giữa $AC'$ và $(ABCD)$.

**Lời giải.** Vì $CC'\perp(ABCD)$ nên $AC$ là hình chiếu của $AC'$ lên $(ABCD)$. Vậy $\widehat{(AC', (ABCD))}=\widehat{C'AC}$.

Ta có $AC=a\sqrt2$ và $CC'=a$. Tam giác $C'CA$ vuông tại $C$ nên
$$\tan\widehat{C'AC}=\frac{CC'}{AC}=\frac1{\sqrt2}\Rightarrow\widehat{C'AC}\approx35{,}3^\circ.$$

Vậy góc giữa $AC'$ và $(ABCD)$ khoảng $35{,}3^\circ$.
:::

Cuối cùng ta quay lại chiếc thang ở đầu bài, đi đủ bốn bước.

:::example Vận dụng: độ nghiêng của chiếc thang
Giả sử một chiếc thang dài $4$ m dựa vào bức tường thẳng đứng, chân thang cách tường $1{,}5$ m trên nền ngang (số liệu giả định). Tính góc giữa thang và mặt đất, làm tròn đến hàng phần mười của độ.

**Lời giải.**

*Hiểu đề.* Thang là đoạn $SA$ với $A$ trên mặt đất và $S$ trên tường. Cần tìm góc giữa $SA$ và mặt đất.

*Tìm cách giải.* Gọi $H$ là chân đường vuông góc hạ từ $S$ xuống mặt đất, tức chân tường. Khi đó $AH$ là hình chiếu của $SA$ lên mặt đất, và góc cần tìm là $\widehat{SAH}$ trong tam giác $SAH$ vuông tại $H$.

*Giải.* Ta có $SA=4$ và $AH=1{,}5$ nên
$$\cos\widehat{SAH}=\frac{AH}{SA}=\frac{1{,}5}{4}=0{,}375\Rightarrow\widehat{SAH}\approx68{,}0^\circ.$$

Vậy thang nghiêng khoảng $68{,}0^\circ$ so với mặt đất.

*Nhìn lại.* Kết quả có hợp lí không? Chân thang cách tường chưa bằng nửa chiều dài thang nên thang dựng khá dốc, góc lớn hơn $60^\circ$ là hợp lí (nếu chân cách tường đúng $2$ m, tức nửa chiều dài thì $\cos=0{,}5$ và góc $60^\circ$). Ta cũng kiểm tra chiều cao đầu thang: $SH=\sqrt{16-2{,}25}=\sqrt{13{,}75}\approx3{,}7$ m, và $\sin\widehat{SAH}=\dfrac{3{,}7}{4}\approx0{,}93$, khớp với góc $68^\circ$.
:::

:::warning Những sai lầm thường gặp
- **Góc giữa đường thẳng và mặt phẳng là góc với một đường tuỳ ý của mặt phẳng.** Sai: lấy một đường bất kì trong $(P)$ cắt $d$ rồi đo góc. Lí do sai: mỗi đường trong $(P)$ cho một góc khác nhau. Đúng: dùng đường hình chiếu $d'$, vì đó là góc nhỏ nhất.
- **Quên dựng đường vuông góc.** Sai: lấy $H$ bất kì trên mặt phẳng làm hình chiếu của $S$. Lí do sai: hình chiếu phải thoả $SH\perp(P)$. Đúng: $H$ là chân đường vuông góc hạ từ $S$ xuống $(P)$.
- **Nhầm góc với sin và cos.** Sai: $\widehat{SAH}$ có cạnh kề là $SH$. Lí do sai: $SH$ là đường cao vuông góc với mặt phẳng, là cạnh đối của góc $\widehat{SAH}$. Đúng: $\sin\widehat{SAH}=\dfrac{SH}{SA}$ và $\cos\widehat{SAH}=\dfrac{AH}{SA}$.
- **Cho rằng đường song song với mặt phẳng thì không có góc.** Sai: $d\parallel(P)$ nên không có góc. Lí do sai: hình chiếu của $d$ song song với $d$, nên góc giữa chúng bằng $0^\circ$. Đúng: quy ước góc bằng $0^\circ$.
:::

**Kết nối.** Bài này dùng [đường thẳng vuông góc với mặt phẳng](lesson:line-perpendicular-plane) để dựng hình chiếu, và dùng tam giác vuông để tính góc. Bài [khoảng cách trong không gian](lesson:distances-space) dùng chính các đường vuông góc ấy để đo độ dài, còn bài [thể tích](lesson:volumes) dùng chiều cao hạ vuông góc xuống đáy. Trong thực tế, độ dốc của mái nhà, của thang hay của dây neo đều được đo bằng góc giữa một đường và mặt phẳng nằm ngang.

## Thuật ngữ

:::terms
- phép chiếu vuông góc | orthogonal projection
- hình chiếu vuông góc | orthogonal projection (of a point or figure)
- góc giữa đường thẳng và mặt phẳng | angle between a line and a plane
- định lí ba đường vuông góc | three perpendiculars theorem
- mặt phẳng nằm ngang | horizontal plane
- đường chéo | diagonal
- cạnh bên | lateral edge
- mặt đáy | base
- tam giác vuông | right-angled triangle
- độ dốc | slope
:::

## Tóm tắt

- Hình chiếu vuông góc của $M$ lên $(P)$ là chân $H$ của đường thẳng qua $M$ vuông góc với $(P)$.
- Hình chiếu của một đường thẳng không vuông góc với $(P)$ là một đường thẳng $d'$ nằm trong $(P)$.
- Góc giữa $d$ và $(P)$ là góc giữa $d$ và hình chiếu $d'$ của nó; bằng $90^\circ$ nếu $d\perp(P)$, bằng $0^\circ$ nếu $d\parallel(P)$ hoặc $d\subset(P)$.
- Muốn tính góc, dựng $SH\perp(P)$ rồi dùng tam giác vuông $SAH$: $\sin\widehat{SAH}=\dfrac{SH}{SA}$, $\cos\widehat{SAH}=\dfrac{AH}{SA}$.
- Định lí ba đường vuông góc: $b\subset(P)$ thì $b\perp a\iff b\perp a'$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật với $AB=3$, $AD=4$, $SA\perp(ABCD)$ và $SA=5$. Tính góc giữa $SC$ và $(ABCD)$, làm tròn đến hàng phần mười của độ.

::hint
**Kiến thức:** hình chiếu của $SC$ lên đáy là $AC$; tam giác $SAC$ vuông tại $A$.

**Gợi ý các bước:**
1. Tính $AC$ bằng định lí Pythagore.
2. Tính $\tan\widehat{SCA}=\dfrac{SA}{AC}$.

::solution
Đáy $ABCD$ là hình chữ nhật nên tam giác $ABC$ vuông tại $B$. Theo định lí Pythagore,
$$AC=\sqrt{AB^2+BC^2}=\sqrt{3^2+4^2}=\sqrt{25}=5.$$

Vì $SA\perp(ABCD)$ nên $A$ là hình chiếu của $S$ lên $(ABCD)$, và $C$ nằm trong $(ABCD)$. Do đó $AC$ là hình chiếu của $SC$ lên $(ABCD)$, và
$$\widehat{(SC,(ABCD))}=\widehat{SCA}.$$

Tam giác $SAC$ vuông tại $A$ (vì $SA\perp AC$) nên
$$\tan\widehat{SCA}=\frac{SA}{AC}=\frac55=1.$$
Suy ra $\widehat{SCA}=45^\circ$.

Vậy góc giữa $SC$ và $(ABCD)$ bằng $45^\circ$ (tức $45{,}0^\circ$ khi làm tròn đến hàng phần mười).

**Đáp số.** $45^\circ$.
:::

:::exercise
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính góc giữa $A'C$ và mặt phẳng $(ABCD)$, làm tròn đến hàng phần mười của độ.

::hint
**Kiến thức:** hình chiếu của $A'$ lên $(ABCD)$ là $A$.

**Gợi ý các bước:**
1. Xác định hình chiếu của $A'C$ là $AC$.
2. Tính $\tan\widehat{A'CA}$.

::solution
Vì $AA'\perp(ABCD)$ nên $A$ là hình chiếu của $A'$ lên $(ABCD)$, còn $C$ nằm trong $(ABCD)$. Do đó $AC$ là hình chiếu của $A'C$ lên $(ABCD)$, và góc cần tìm là $\widehat{A'CA}$.

$ABCD$ là hình vuông cạnh $a$ nên $AC=a\sqrt2$. Ngoài ra $AA'=a$.

Tam giác $A'AC$ vuông tại $A$ nên
$$\tan\widehat{A'CA}=\frac{AA'}{AC}=\frac{a}{a\sqrt2}=\frac1{\sqrt2}.$$
Dùng máy tính, $\widehat{A'CA}\approx35{,}26^\circ\approx35{,}3^\circ$ (làm tròn đến hàng phần mười).

Vậy góc giữa $A'C$ và $(ABCD)$ khoảng $35{,}3^\circ$.

**Đáp số.** Khoảng $35{,}3^\circ$.
:::

:::exercise
Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, tam giác $ABC$ vuông tại $B$, $AB=a$, $BC=a$ và $SA=a\sqrt2$. Tính góc giữa $SB$ và $(ABC)$, và góc giữa $SC$ và $(ABC)$.

::hint
**Kiến thức:** hình chiếu của $SB$, $SC$ lên $(ABC)$ lần lượt là $AB$, $AC$.

**Gợi ý các bước:**
1. Tính $\tan\widehat{SBA}$.
2. Tính $AC$ rồi $\tan\widehat{SCA}$.

::solution
Vì $SA\perp(ABC)$ nên $A$ là hình chiếu của $S$ lên $(ABC)$. Do đó $AB$ là hình chiếu của $SB$ và $AC$ là hình chiếu của $SC$ lên $(ABC)$. Suy ra
$$\widehat{(SB,(ABC))}=\widehat{SBA},\qquad \widehat{(SC,(ABC))}=\widehat{SCA}.$$

Góc giữa $SB$ và $(ABC)$. Tam giác $SAB$ vuông tại $A$ nên
$$\tan\widehat{SBA}=\frac{SA}{AB}=\frac{a\sqrt2}{a}=\sqrt2.$$
Dùng máy tính, $\widehat{SBA}\approx54{,}7^\circ$.

Góc giữa $SC$ và $(ABC)$. Tam giác $ABC$ vuông tại $B$ nên
$$AC=\sqrt{AB^2+BC^2}=\sqrt{a^2+a^2}=a\sqrt2.$$
Tam giác $SAC$ vuông tại $A$ nên
$$\tan\widehat{SCA}=\frac{SA}{AC}=\frac{a\sqrt2}{a\sqrt2}=1,$$
suy ra $\widehat{SCA}=45^\circ$.

Vậy góc giữa $SB$ và $(ABC)$ khoảng $54{,}7^\circ$, góc giữa $SC$ và $(ABC)$ bằng $45^\circ$.

**Đáp số.** $\approx54{,}7^\circ$ và $45^\circ$.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau. Cho đường thẳng $d$ và mặt phẳng $(P)$.

a) Nếu $d\perp(P)$ thì góc giữa $d$ và $(P)$ bằng $90^\circ$.

b) Nếu $d\parallel(P)$ thì góc giữa $d$ và $(P)$ bằng $90^\circ$.

c) Góc giữa $d$ và $(P)$ có thể bằng $120^\circ$.

d) Nếu $d$ cắt $(P)$ mà không vuông góc thì góc giữa $d$ và $(P)$ là góc giữa $d$ và hình chiếu của nó lên $(P)$.

::hint
**Kiến thức:** định nghĩa góc giữa đường thẳng và mặt phẳng; góc thuộc đoạn từ $0^\circ$ đến $90^\circ$.

**Gợi ý các bước:**
1. Xét từng trường hợp: vuông góc, song song, cắt.
2. Nhớ giới hạn của góc.

::solution
Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ được quy ước như sau: nếu $d\perp(P)$ thì góc bằng $90^\circ$; nếu $d\parallel(P)$ hoặc $d\subset(P)$ thì góc bằng $0^\circ$; nếu $d$ cắt $(P)$ và không vuông góc với $(P)$ thì góc bằng góc giữa $d$ và hình chiếu của $d$ lên $(P)$.

a) **Đúng.** Theo định nghĩa, khi $d\perp(P)$ thì góc giữa $d$ và $(P)$ bằng $90^\circ$.

b) **Sai.** Khi $d\parallel(P)$, góc giữa $d$ và $(P)$ bằng $0^\circ$, không phải $90^\circ$.

c) **Sai.** Góc giữa đường thẳng và mặt phẳng luôn thuộc đoạn $[0^\circ; 90^\circ]$, nên không thể bằng $120^\circ$.

d) **Đúng.** Theo định nghĩa, nếu $d$ cắt $(P)$ mà không vuông góc với $(P)$ thì góc giữa $d$ và $(P)$ là góc giữa $d$ và hình chiếu của nó lên $(P)$.

Vậy các mệnh đề a), d) đúng; các mệnh đề b), c) sai.

**Đáp số.** a) Đúng; b) Sai; c) Sai; d) Đúng.
:::

:::exercise
Giả sử một chiếc thang dài $5$ m dựa vào bức tường thẳng đứng, chân thang cách tường $2$ m trên nền ngang (số liệu giả định). Tính góc giữa thang và mặt đất, làm tròn đến hàng phần mười của độ.

::hint
**Kiến thức:** hình chiếu của thang lên mặt đất là đoạn từ chân thang đến chân tường.

**Gợi ý các bước:**
1. Lập tam giác vuông với cạnh huyền là thang.
2. Dùng $\cos$ của góc cần tìm.

::solution
Gọi $A$ là điểm trên tường mà đầu thang chạm vào, $B$ là chân thang trên nền ngang và $H$ là chân tường ngay dưới $A$. Khi đó $AH\perp$ mặt đất, $AB=5$ m và $BH=2$ m.

Vì $AH$ vuông góc với mặt đất nên $BH$ là hình chiếu của thang $AB$ lên mặt đất. Do đó góc giữa thang và mặt đất là $\varphi=\widehat{ABH}$.

Tam giác $ABH$ vuông tại $H$ nên
$$\cos\varphi=\frac{BH}{AB}=\frac25=0{,}4.$$
Dùng máy tính, $\varphi\approx66{,}42^\circ\approx66{,}4^\circ$ (làm tròn đến hàng phần mười).

Vậy góc giữa thang và mặt đất khoảng $66{,}4^\circ$.

**Đáp số.** Khoảng $66{,}4^\circ$.
:::

:::exercise
Giả sử một cột $SO$ cao $6$ m dựng vuông góc với mặt đất phẳng. Một dây neo $SB$ nối đỉnh cột với điểm $B$ trên đất cách chân cột $8$ m (số liệu giả định). Tính độ dài dây neo và góc giữa dây neo với mặt đất, làm tròn đến hàng phần mười của độ.

::hint
**Kiến thức:** $SO\perp(\text{đất})$ nên $OB$ là hình chiếu của $SB$.

**Gợi ý các bước:**
1. Dùng định lí Pythagore trong tam giác $SOB$.
2. Tính $\sin\widehat{SBO}=\dfrac{SO}{SB}$.

::solution
Cột $SO$ vuông góc với mặt đất nên tam giác $SOB$ vuông tại $O$, với $SO=6$ m và $OB=8$ m.

Theo định lí Pythagore, độ dài dây neo là
$$SB=\sqrt{SO^2+OB^2}=\sqrt{36+64}=\sqrt{100}=10\ \text{m}.$$

Vì $SO\perp$ mặt đất nên $OB$ là hình chiếu của $SB$ lên mặt đất. Do đó góc giữa dây neo và mặt đất là $\widehat{SBO}$. Trong tam giác $SOB$ vuông tại $O$,
$$\sin\widehat{SBO}=\frac{SO}{SB}=\frac6{10}=0{,}6.$$
Dùng máy tính, $\widehat{SBO}\approx36{,}87^\circ\approx36{,}9^\circ$ (làm tròn đến hàng phần mười).

Vậy dây neo dài $10$ m và tạo với mặt đất một góc khoảng $36{,}9^\circ$.

**Đáp số.** Dây dài $10$ m, góc khoảng $36{,}9^\circ$.
:::

:::exercise
Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$ và cạnh bên bằng $a$. Gọi $O$ là tâm của đáy. Tính góc giữa $SA$ và $(ABCD)$.

::hint
**Kiến thức:** trong hình chóp đều, $SO\perp(ABCD)$.

**Gợi ý các bước:**
1. Tính $OA$.
2. Tính $\cos\widehat{SAO}=\dfrac{OA}{SA}$.

::solution
$S.ABCD$ là hình chóp tứ giác đều với $O$ là tâm của đáy nên $SO\perp(ABCD)$. Do đó $O$ là hình chiếu của $S$ lên $(ABCD)$, và $OA$ là hình chiếu của $SA$ lên $(ABCD)$. Suy ra
$$\widehat{(SA,(ABCD))}=\widehat{SAO}.$$

Đáy $ABCD$ là hình vuông cạnh $a$ nên $AC=a\sqrt2$. Vì $O$ là trung điểm của $AC$ nên $OA=\dfrac{a\sqrt2}{2}$.

Tam giác $SOA$ vuông tại $O$ và $SA=a$ nên
$$\cos\widehat{SAO}=\frac{OA}{SA}=\frac{a\sqrt2}{2}\cdot\frac1a=\frac{\sqrt2}{2}.$$
Suy ra $\widehat{SAO}=45^\circ$.

Vậy góc giữa $SA$ và $(ABCD)$ bằng $45^\circ$.

**Đáp số.** $45^\circ$.
:::

:::exercise
Ôn lại định lí Pythagore. Giả sử một mặt dốc phẳng nghiêng góc $30^\circ$ so với mặt phẳng ngang. Một người đi thẳng lên dốc $12$ m dọc theo đường dốc nhất (số liệu giả định). Người đó đã lên cao bao nhiêu mét?

::hint
**Kiến thức:** $\sin$ của góc nghiêng bằng chiều cao chia quãng đường.

**Gợi ý các bước:**
1. Lập tam giác vuông với cạnh huyền là quãng đường đi.
2. Dùng $\sin30^\circ=\dfrac12$.

::solution
Gọi $A$ là điểm xuất phát (ở chân dốc), $B$ là vị trí người đó đến sau khi đi $12$ m dọc đường dốc nhất, và $H$ là hình chiếu của $B$ lên mặt phẳng ngang đi qua $A$. Khi đó $AB=12$ m và độ cao người đó đã lên là $BH$.

Vì $B$ đi theo đường dốc nhất nên góc giữa $AB$ và mặt phẳng ngang là $\widehat{BAH}=30^\circ$, và $AH$ là hình chiếu của $AB$ lên mặt phẳng ngang.

Tam giác $ABH$ vuông tại $H$ nên
$$BH=AB\cdot\sin\widehat{BAH}=12\cdot\sin30^\circ=12\cdot\frac12=6\ \text{m}.$$

Vậy người đó đã lên cao $6$ m.

**Đáp số.** $6$ m.
:::

:::exercise Thử thách
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA\perp(ABCD)$ và $SA=a\sqrt2$. Tính góc giữa $SC$ và $(SAB)$.

::hint
**Kiến thức:** $BC\perp(SAB)$ nên hình chiếu của $C$ lên $(SAB)$ là $B$.

**Gợi ý các bước:**
1. Xác định hình chiếu của $SC$ lên $(SAB)$.
2. Tính $\sin\widehat{CSB}=\dfrac{CB}{SC}$.

::solution
Đáy $ABCD$ là hình vuông nên $BC\perp AB$. Vì $SA\perp(ABCD)$ và $BC\subset(ABCD)$ nên $BC\perp SA$. Mặt phẳng $(SAB)$ chứa hai đường thẳng cắt nhau $AB$ và $SA$ cùng vuông góc với $BC$, nên $BC\perp(SAB)$.

Do đó $B$ là hình chiếu của $C$ lên $(SAB)$, còn $S$ nằm trong $(SAB)$. Suy ra $SB$ là hình chiếu của $SC$ lên $(SAB)$, và góc cần tìm là $\widehat{CSB}$.

Ta tính các cạnh. Tam giác $SAB$ vuông tại $A$ nên
$$SB=\sqrt{SA^2+AB^2}=\sqrt{2a^2+a^2}=a\sqrt3.$$
Ta có $AC=a\sqrt2$ nên tam giác $SAC$ vuông tại $A$ cho
$$SC=\sqrt{SA^2+AC^2}=\sqrt{2a^2+2a^2}=2a.$$

Tam giác $CBS$ vuông tại $B$ (vì $BC\perp(SAB)$ nên $BC\perp SB$) nên
$$\sin\widehat{CSB}=\frac{BC}{SC}=\frac{a}{2a}=\frac12.$$
Suy ra $\widehat{CSB}=30^\circ$.

Vậy góc giữa $SC$ và $(SAB)$ bằng $30^\circ$.

**Đáp số.** $30^\circ$.
:::

## Kiểm tra mini

:::quiz
::mc NB
Hình chiếu vuông góc của điểm $M$ lên mặt phẳng $(P)$ là
A. điểm bất kì của $(P)$.
B. giao điểm của $(P)$ với đường thẳng qua $M$ song song với $(P)$.
C. giao điểm của $(P)$ với đường thẳng qua $M$ vuông góc với $(P)$.
D. trung điểm của một đoạn thẳng trong $(P)$.
::key C
Đó là định nghĩa hình chiếu vuông góc. Các phương án còn lại không xác định một điểm duy nhất theo định nghĩa.

::mc TH
Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$. Góc giữa $SD$ và $(ABCD)$ là
A. $\widehat{ASD}$.
B. $\widehat{SAD}$.
C. $\widehat{SDC}$.
D. $\widehat{SDA}$.
::key D
Hình chiếu của $SD$ lên đáy là $AD$ nên góc cần tìm là $\widehat{SDA}$. Phương án B là góc vuông, C và A không là góc với hình chiếu.

::mc VD
Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa $BD'$ và $(ABCD)$ có $\tan$ bằng
A. $\dfrac1{\sqrt2}$.
B. $\sqrt2$.
C. $1$.
D. $\dfrac{1}{\sqrt3}$.
::key A
Hình chiếu của $BD'$ là $BD=a\sqrt2$ và $DD'=a$, nên $\tan=\dfrac{a}{a\sqrt2}=\dfrac1{\sqrt2}$. Phương án C tương ứng góc $45^\circ$, B là nghịch đảo, D là giá trị khác.

::mc TH
Một dây neo dài $10$ m nối đỉnh cột thẳng đứng cao $6$ m với điểm trên mặt đất phẳng. Góc giữa dây và mặt đất có $\sin$ bằng
A. $0{,}8$.
B. $0{,}6$.
C. $0{,}75$.
D. $1{,}67$.
::key B
$\sin=\dfrac{\text{chiều cao}}{\text{dây}}=\dfrac6{10}=0{,}6$. Phương án A là $\cos$, C là $\tan$, D là tỉ số lớn hơn $1$ nên không phải $\sin$.

::tf NB TH TH TH
Cho đường thẳng $d$ và mặt phẳng $(P)$. Xét tính đúng sai của các mệnh đề sau:
a) Nếu $d\perp(P)$ thì góc giữa $d$ và $(P)$ bằng $90^\circ$.
b) Nếu $d\parallel(P)$ thì góc giữa $d$ và $(P)$ bằng $90^\circ$.
c) Góc giữa $d$ và $(P)$ luôn không vượt quá $90^\circ$.
d) Góc giữa $d$ và $(P)$ là góc giữa $d$ và một đường thẳng bất kì của $(P)$.
::key Đ S Đ S
a) Đúng theo định nghĩa. b) Sai: góc bằng $0^\circ$. c) Đúng: góc thuộc đoạn từ $0^\circ$ đến $90^\circ$. d) Sai: phải dùng hình chiếu của $d$ lên $(P)$.

::sa TH
Giả sử một chiếc thang dài $6$ m dựa vào tường thẳng đứng, chân thang cách tường $3$ m. Tính góc giữa thang và mặt đất theo đơn vị độ.
::key 60
$\cos\varphi=\dfrac36=0{,}5$ nên $\varphi=60^\circ$.

::sa VD
Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $4$, $SA\perp(ABCD)$ và $SA=4$. Tính $\tan$ của góc giữa $SC$ và $(ABCD)$, làm tròn đến hàng phần trăm.
::key 0,71
$AC=4\sqrt2$ nên $\tan=\dfrac4{4\sqrt2}=\dfrac1{\sqrt2}\approx0{,}71$.
:::
