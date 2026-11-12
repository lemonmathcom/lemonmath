---
title: "Chuyên đề: hình học đường tròn"
description: Ôn góc ở tâm, góc nội tiếp, tứ giác nội tiếp, tiếp tuyến, độ dài cung và diện tích hình quạt theo kiểu bài hình học trong đề thi vào lớp 10.
minutes: 25
---

:::goals
- Ôn góc ở tâm, góc nội tiếp, góc nội tiếp chắn nửa đường tròn và tứ giác nội tiếp.
- Nhớ tính chất tiếp tuyến và hai tiếp tuyến cắt nhau, rồi tính độ dài các đoạn bằng định lí Pythagore và hệ thức lượng.
- Tính độ dài cung tròn và diện tích hình quạt tròn.
- Biết trình bày một bài hình học nhiều ý như trong đề thi vào lớp 10, kèm các bài toán thực tế.
:::

Giả sử một chiếc bánh pizza hình tròn có đường kính $30$ cm được cắt thành $8$ phần bằng nhau. Mỗi phần là một hình quạt tròn. Diện tích mỗi phần là bao nhiêu, và đường viền ngoài (cung tròn) của mỗi phần dài bao nhiêu? Câu trả lời phụ thuộc vào góc ở tâm của mỗi phần, và đó chính là điểm xuất phát của hình học đường tròn.

Bài hình học thường là bài nhiều điểm nhất trong đề thi vào lớp 10 (khoảng ba điểm), và gần như luôn có một đường tròn. Bài này ôn lại các kiến thức then chốt và cách trình bày để lấy trọn điểm.

## Góc với đường tròn

### Khám phá: góc nội tiếp và góc ở tâm

Trong đường tròn $(O)$, xét cung $BC$ có số đo $100^\circ$. Góc ở tâm $\widehat{BOC}$ chắn cung này nên bằng $100^\circ$. Nếu $A$ là một điểm nằm trên đường tròn, không thuộc cung $BC$ đó, thì góc nội tiếp $\widehat{BAC}$ cũng chắn cung $BC$ và bằng một nửa số đo cung, tức là $50^\circ$.

:::diagram Góc nội tiếp $\widehat{BAC}$ và góc ở tâm $\widehat{BOC}$
alt: Đường tròn tâm O có dây BC phía trên; điểm A nằm ở phía dưới đường tròn; góc ở tâm BOC bằng 100 độ và góc nội tiếp BAC bằng 50 độ cùng chắn cung BC
point O 0,0 below
point A 0,-3 below
point B -2.298,1.928 above-left
point C 2.298,1.928 above-right
circle O 3
segment A B
segment A C
segment O B
segment O C
angle B O C "100°"
angle B A C "50°"
:::

:::theorem Các tính chất về góc với đường tròn
Trong một đường tròn:
- Góc ở tâm có số đo bằng số đo cung bị chắn.
- Góc nội tiếp có số đo bằng một nửa số đo cung bị chắn. Do đó các góc nội tiếp cùng chắn một cung thì bằng nhau, và góc nội tiếp chắn nửa đường tròn là góc vuông.
- Tứ giác nội tiếp đường tròn có tổng hai góc đối bằng $180^\circ$. Ngược lại, tứ giác có tổng hai góc đối bằng $180^\circ$ thì nội tiếp được đường tròn.
:::

**Vì sao đúng?** Với góc nội tiếp, tam giác $OAB$ cân tại $O$ nên góc ở đáy bằng nhau, và góc ngoài của tam giác bằng tổng hai góc trong không kề, từ đó góc ở tâm gấp đôi góc nội tiếp cùng chắn một cung. Với tứ giác nội tiếp $ABCD$, hai góc đối $\widehat A$ và $\widehat C$ chắn hai cung có tổng số đo bằng cả đường tròn $360^\circ$, nên $\widehat A+\widehat C=\dfrac12\cdot360^\circ=180^\circ$.

:::example Góc nội tiếp và góc ở tâm
Tam giác $ABC$ nội tiếp đường tròn $(O)$ có $\widehat{BAC}=50^\circ$.

a) Tính $\widehat{BOC}$.

b) Tính $\widehat{OBC}$.

**Lời giải.**

a) $\widehat{BAC}$ là góc nội tiếp và $\widehat{BOC}$ là góc ở tâm cùng chắn cung $BC$, nên $\widehat{BOC}=2\cdot\widehat{BAC}=2\cdot50^\circ=100^\circ$.

b) Tam giác $OBC$ có $OB=OC$ (cùng là bán kính) nên cân tại $O$. Do đó $\widehat{OBC}=\dfrac{180^\circ-100^\circ}2=40^\circ$.

**Đáp số.** a) $100^\circ$; b) $40^\circ$.
:::

:::example Tứ giác nội tiếp
Tứ giác $ABCD$ nội tiếp đường tròn có $\widehat A=70^\circ$ và $\widehat B=100^\circ$. Tính $\widehat C$ và $\widehat D$.

**Lời giải.** Vì $ABCD$ nội tiếp nên các góc đối bù nhau. Do đó $\widehat C=180^\circ-\widehat A=180^\circ-70^\circ=110^\circ$ và $\widehat D=180^\circ-\widehat B=180^\circ-100^\circ=80^\circ$. Kiểm tra: $70^\circ+100^\circ+110^\circ+80^\circ=360^\circ$.

**Đáp số.** $\widehat C=110^\circ$; $\widehat D=80^\circ$.
:::

## Tiếp tuyến của đường tròn

:::theorem Tiếp tuyến
- Tiếp tuyến của đường tròn vuông góc với bán kính tại tiếp điểm.
- Nếu hai tiếp tuyến của một đường tròn cắt nhau tại $A$, với các tiếp điểm $B$, $C$, thì $AB=AC$ và $AO$ là đường trung trực của $BC$ (nên $AO\perp BC$ tại trung điểm $H$ của $BC$).
:::

Với tam giác $ABO$ vuông tại $B$ và $BH$ là đường cao ứng với cạnh huyền $AO$, ta có các hệ thức thường dùng
$$AB^2=AH\cdot AO,\qquad OB^2=OH\cdot OA,\qquad BH\cdot AO=AB\cdot OB.$$

## Độ dài cung và diện tích hình quạt

:::theorem Cung tròn và hình quạt
Trên đường tròn bán kính $R$, cung có số đo $n^\circ$ có độ dài
$$l=\frac{\pi Rn}{180},$$
và hình quạt tròn tương ứng có diện tích
$$S=\frac{\pi R^2n}{360}.$$
:::

**Vì sao đúng?** Cả đường tròn ứng với $360^\circ$ có chu vi $2\pi R$ và diện tích $\pi R^2$. Cung $n^\circ$ chiếm $\dfrac n{360}$ đường tròn nên có độ dài $\dfrac n{360}\cdot2\pi R=\dfrac{\pi Rn}{180}$ và hình quạt có diện tích $\dfrac n{360}\cdot\pi R^2$.

:::example Cung tròn và hình quạt
a) Tính độ dài cung $60^\circ$ và diện tích hình quạt tương ứng của đường tròn bán kính $6$ cm (làm tròn đến hai chữ số thập phân).

b) Chiếc pizza ở đầu bài có đường kính $30$ cm được cắt thành $8$ phần bằng nhau. Tính diện tích và độ dài cung của mỗi phần (làm tròn đến một chữ số thập phân).

**Lời giải.**

a) Độ dài cung là $l=\dfrac{\pi\cdot6\cdot60}{180}=2\pi\approx6{,}28$ (cm). Diện tích hình quạt là $S=\dfrac{\pi\cdot6^2\cdot60}{360}=6\pi\approx18{,}85$ (cm²).

b) Bán kính là $R=15$ cm, mỗi phần có góc ở tâm $\dfrac{360^\circ}{8}=45^\circ$. Diện tích mỗi phần là $\dfrac{\pi\cdot15^2\cdot45}{360}=\dfrac{225\pi}8\approx88{,}4$ (cm²). Độ dài cung là $\dfrac{\pi\cdot15\cdot45}{180}=\dfrac{15\pi}4\approx11{,}8$ (cm).

**Đáp số.** a) $2\pi\approx6{,}28$ cm; $6\pi\approx18{,}85$ cm². b) $\approx88{,}4$ cm²; $\approx11{,}8$ cm.
:::

## Một bài hình kiểu đề thi

:::diagram Hai tiếp tuyến $AB$, $AC$ của đường tròn $(O)$
alt: Đường tròn tâm O bán kính 3; điểm A nằm ngoài đường tròn trên đường thẳng ngang qua O; hai tiếp tuyến AB và AC; dây BC cắt OA tại H; góc ABO và góc AHB là góc vuông
point O 0,0 below-left
point A 5,0 right
point B 1.8,2.4 above
point C 1.8,-2.4 below
point H 1.8,0 below-left
circle O 3
segment A B
segment A C
segment O A
segment B C
segment O B
segment O C
right O B A
right B H A
:::

:::example Hai tiếp tuyến cắt nhau
**Bài 4.** ($3{,}0$ điểm) Cho đường tròn $(O;3\text{ cm})$ và điểm $A$ nằm ngoài đường tròn sao cho $OA=5$ cm. Kẻ các tiếp tuyến $AB$, $AC$ với đường tròn ($B$, $C$ là các tiếp điểm). Gọi $H$ là giao điểm của $OA$ và $BC$.

a) Chứng minh bốn điểm $A$, $B$, $O$, $C$ cùng nằm trên một đường tròn.

b) Chứng minh $OA\perp BC$ tại $H$ và $AH\cdot AO=AB^2$.

c) Tính $AB$, $BC$ và diện tích tam giác $ABC$.


**Lời giải.**

*Hiểu đề.* Ta có đường tròn bán kính $3$, điểm $A$ cách tâm $5$, và hai tiếp tuyến $AB$, $AC$. Ba ý hỏi lần lượt là: bốn điểm cùng nằm trên một đường tròn, tính vuông góc và hệ thức, rồi tính số.

*Tìm cách giải.* Ý a) dùng tiếp tuyến vuông góc với bán kính để có hai góc vuông ở $B$ và $C$. Ý b) dùng hai tiếp tuyến cắt nhau và hệ thức lượng trong tam giác vuông $ABO$. Ý c) dùng Pythagore và hệ thức ở ý b).

*Giải.*

a) ($1{,}0$ điểm) Vì $AB$ là tiếp tuyến tại $B$ nên $AB\perp OB$, tức là $\widehat{ABO}=90^\circ$. Tương tự, $\widehat{ACO}=90^\circ$. Do đó $\widehat{ABO}+\widehat{ACO}=180^\circ$, nên tứ giác $ABOC$ nội tiếp được đường tròn (đường kính $AO$). Vậy bốn điểm $A$, $B$, $O$, $C$ cùng nằm trên một đường tròn.

b) ($1{,}0$ điểm) Vì hai tiếp tuyến cắt nhau tại $A$ nên $AB=AC$, và $OB=OC$ (bán kính). Vậy $OA$ là đường trung trực của $BC$, nên $OA\perp BC$ tại $H$ (là trung điểm của $BC$). Trong tam giác $ABO$ vuông tại $B$ có đường cao $BH$, theo hệ thức lượng ta có $AB^2=AH\cdot AO$.

c) ($1{,}0$ điểm) Trong tam giác $ABO$ vuông tại $B$: $AB=\sqrt{OA^2-OB^2}=\sqrt{25-9}=4$ (cm). Từ $AB^2=AH\cdot AO$ suy ra $AH=\dfrac{16}5=3{,}2$ (cm). Ta có $BH=\dfrac{AB\cdot OB}{OA}=\dfrac{4\cdot3}5=2{,}4$ (cm) nên $BC=2BH=4{,}8$ (cm). Diện tích tam giác $ABC$ là $\dfrac12\cdot BC\cdot AH=\dfrac12\cdot4{,}8\cdot3{,}2=7{,}68$ (cm²).

Vậy $AB=4$ cm, $BC=4{,}8$ cm và $S_{ABC}=7{,}68$ cm².

*Nhìn lại.* Kiểm tra bằng cách khác: $OH=\dfrac{OB^2}{OA}=\dfrac95=1{,}8$ cm và $AH+OH=3{,}2+1{,}8=5=OA$, đúng. Cũng có thể tính $BH=\sqrt{OB^2-OH^2}=\sqrt{9-3{,}24}=2{,}4$ cm, trùng với kết quả trên.
:::

:::example Bánh xe
Giả sử một bánh xe đạp có đường kính $70$ cm. a) Khi bánh xe quay $100$ vòng thì xe đi được bao nhiêu mét? b) Để đi $1$ km thì bánh xe quay khoảng bao nhiêu vòng? (Làm tròn đến một chữ số thập phân ở ý a), và làm tròn đến hàng đơn vị ở ý b).)

**Lời giải.** Mỗi vòng quay, xe đi được một quãng bằng chu vi bánh xe: $C=\pi\cdot0{,}7\approx2{,}199$ (m).

a) Quay $100$ vòng, xe đi được $100\cdot0{,}7\pi=70\pi\approx219{,}9$ (m).

b) Đổi $1$ km $=1000$ m. Số vòng quay là $\dfrac{1000}{0{,}7\pi}\approx454{,}7$, tức là khoảng $455$ vòng.

Vậy xe đi được khoảng $219{,}9$ m sau $100$ vòng, và cần khoảng $455$ vòng để đi $1$ km.
:::

:::warning Lỗi hay gặp
- **Nhầm góc nội tiếp với góc ở tâm.** Sai: cho rằng $\widehat{BAC}=\widehat{BOC}$ khi cùng chắn cung $BC$. Vì sao sai: góc ở tâm gấp đôi góc nội tiếp. Đúng: $\widehat{BOC}=2\widehat{BAC}$.
- **Quên tứ giác nội tiếp có các góc đối bù nhau.** Sai: tính $\widehat C=\widehat A$ trong tứ giác nội tiếp. Vì sao sai: hai góc kề nhau không bằng nhau, hai góc đối mới có tổng $180^\circ$. Đúng: $\widehat A+\widehat C=180^\circ$.
- **Chứng minh tứ giác nội tiếp mà không nêu cách.** Sai: chỉ viết "vậy $ABOC$ nội tiếp". Vì sao sai: bài thi chấm theo các bước: góc đối bù nhau (hoặc hai điểm nhìn một đoạn dưới góc bằng nhau). Đúng: viết rõ $\widehat{ABO}+\widehat{ACO}=180^\circ$ rồi mới kết luận.
- **Dùng sai công thức cung và hình quạt.** Sai: tính độ dài cung bằng $\dfrac{\pi R^2n}{360}$. Vì sao sai: đó là diện tích hình quạt. Đúng: $l=\dfrac{\pi Rn}{180}$.
- **Vẽ hình sai tỉ lệ rồi suy luận từ hình.** Sai: nhìn hình thấy $H$ là trung điểm rồi kết luận ngay. Vì sao sai: bài thi cần lí do. Đúng: nêu $AB=AC$, $OB=OC$ nên $OA$ là đường trung trực của $BC$.
:::

**Kết nối.** Bài này dùng định lí Pythagore, tam giác đồng dạng và hệ thức lượng trong tam giác vuông, tam giác cân, và các công thức về chu vi, diện tích đường tròn. Chuyên đề tiếp theo về hệ thức lượng và hình học thực tế sẽ dùng thêm tỉ số lượng giác.

## Thuật ngữ

:::terms
- đường tròn | circle
- tâm, bán kính | centre, radius
- dây cung | chord
- góc ở tâm | angle at the centre
- góc nội tiếp | inscribed angle
- tứ giác nội tiếp | cyclic quadrilateral
- tiếp tuyến | tangent
- tiếp điểm | point of contact
- cung tròn | arc
- hình quạt tròn | sector
- độ dài cung | arc length
- đường trung trực | perpendicular bisector
:::

## Tóm tắt

- Góc ở tâm bằng số đo cung chắn; góc nội tiếp bằng nửa số đo cung chắn; góc nội tiếp chắn nửa đường tròn bằng $90^\circ$.
- Tứ giác nội tiếp có hai góc đối bù nhau; ngược lại, tứ giác có hai góc đối bù nhau thì nội tiếp được.
- Tiếp tuyến vuông góc với bán kính tại tiếp điểm; hai tiếp tuyến cắt nhau tại $A$ thì $AB=AC$ và $OA\perp BC$.
- Hệ thức lượng: $AB^2=AH\cdot AO$, $OB^2=OH\cdot OA$.
- Độ dài cung $l=\dfrac{\pi Rn}{180}$; diện tích hình quạt $S=\dfrac{\pi R^2n}{360}$.
- Trình bày hình học: nêu lí do ở mỗi bước, kết luận rõ ràng.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và gợi ý bước đầu. Hãy tự làm trước rồi mới mở lời giải.

:::exercise
Tam giác $ABC$ nội tiếp đường tròn $(O;4\text{ cm})$ có $\widehat{BAC}=60^\circ$. Tính $\widehat{BOC}$ và độ dài $BC$ (làm tròn đến một chữ số thập phân).

::hint
**Kiến thức:** góc ở tâm gấp đôi góc nội tiếp cùng chắn một cung.

**Gợi ý các bước:**
1. Tính $\widehat{BOC}$.
2. Tam giác $OBC$ cân tại $O$ có góc ở đỉnh $120^\circ$; kẻ đường cao $OK$ để tính $BC$.

::solution
Ta có $\widehat{BOC}=2\cdot60^\circ=120^\circ$. Tam giác $OBC$ cân tại $O$, đường cao $OK$ cũng là phân giác nên $\widehat{BOK}=60^\circ$ và $BK=OB\sin60^\circ=4\cdot\dfrac{\sqrt3}2=2\sqrt3$. Do đó $BC=2BK=4\sqrt3\approx6{,}9$ (cm).

**Đáp số.** $\widehat{BOC}=120^\circ$; $BC=4\sqrt3\approx6{,}9$ cm.
:::

:::exercise
Tứ giác $ABCD$ nội tiếp đường tròn có $\widehat A=80^\circ$ và $\widehat B=95^\circ$. Tính $\widehat C$ và $\widehat D$.

::hint
**Kiến thức:** hai góc đối của tứ giác nội tiếp bù nhau.

**Gợi ý các bước:**
1. $\widehat C$ đối với $\widehat A$.
2. $\widehat D$ đối với $\widehat B$.

::solution
$\widehat C=180^\circ-80^\circ=100^\circ$ và $\widehat D=180^\circ-95^\circ=85^\circ$. Kiểm tra: $80+95+100+85=360$.

**Đáp số.** $\widehat C=100^\circ$; $\widehat D=85^\circ$.
:::

:::exercise
Cho đường tròn $(O)$ đường kính $AB=10$ cm, điểm $C$ nằm trên đường tròn sao cho $\widehat{CAB}=30^\circ$. Tính $\widehat{ACB}$, $BC$ và $AC$ (làm tròn $AC$ đến hai chữ số thập phân).

::hint
**Kiến thức:** góc nội tiếp chắn nửa đường tròn bằng $90^\circ$; tỉ số lượng giác trong tam giác vuông.

**Gợi ý các bước:**
1. Chứng minh tam giác $ABC$ vuông tại $C$.
2. Dùng $\sin30^\circ$ và $\cos30^\circ$.

::solution
Vì $AB$ là đường kính nên $\widehat{ACB}=90^\circ$. Trong tam giác $ABC$ vuông tại $C$: $BC=AB\sin30^\circ=10\cdot\dfrac12=5$ (cm) và $AC=AB\cos30^\circ=10\cdot\dfrac{\sqrt3}2=5\sqrt3\approx8{,}66$ (cm).

**Đáp số.** $\widehat{ACB}=90^\circ$; $BC=5$ cm; $AC=5\sqrt3\approx8{,}66$ cm.
:::

:::exercise
Cho đường tròn $(O;6\text{ cm})$ và điểm $A$ nằm ngoài đường tròn sao cho $OA=10$ cm. Kẻ các tiếp tuyến $AB$, $AC$ ($B$, $C$ là tiếp điểm). Tính $AB$, $AH$ và $BC$, trong đó $H$ là giao điểm của $OA$ và $BC$.

::hint
**Kiến thức:** tiếp tuyến vuông góc với bán kính; $AB^2=AH\cdot AO$.

**Gợi ý các bước:**
1. Dùng Pythagore trong tam giác $ABO$ vuông tại $B$.
2. Tính $AH$ từ $AB^2=AH\cdot AO$, rồi $BH$ và $BC$.

::solution
Trong tam giác $ABO$ vuông tại $B$: $AB=\sqrt{100-36}=8$ (cm). Từ $AB^2=AH\cdot AO$ suy ra $AH=\dfrac{64}{10}=6{,}4$ (cm). Ta có $BH=\dfrac{AB\cdot OB}{OA}=\dfrac{8\cdot6}{10}=4{,}8$ (cm), nên $BC=2BH=9{,}6$ (cm).

**Đáp số.** $AB=8$ cm; $AH=6{,}4$ cm; $BC=9{,}6$ cm.
:::

:::exercise
**Bài 4.** ($3{,}0$ điểm) Cho nửa đường tròn tâm $O$ đường kính $AB$. Lấy điểm $C$ thuộc nửa đường tròn ($C$ khác $A$, $B$), kẻ $CH\perp AB$ tại $H$. a) Chứng minh tam giác $ABC$ vuông tại $C$. b) Chứng minh $CH^2=AH\cdot HB$. c) Cho $AB=10$ cm, $AH=2$ cm. Tính $CH$, $AC$ và $BC$ (làm tròn đến hai chữ số thập phân nếu cần).

::hint
**Kiến thức:** góc nội tiếp chắn nửa đường tròn; hệ thức lượng trong tam giác vuông.

**Gợi ý các bước:**
1. Ở ý a), dùng $\widehat{ACB}$ chắn nửa đường tròn.
2. Ở ý b) và c), dùng $CH^2=AH\cdot HB$, $AC^2=AH\cdot AB$, $BC^2=BH\cdot AB$.

::solution
a) ($1{,}0$ điểm) $\widehat{ACB}$ là góc nội tiếp chắn nửa đường tròn đường kính $AB$ nên $\widehat{ACB}=90^\circ$, tức là tam giác $ABC$ vuông tại $C$.

b) ($1{,}0$ điểm) Tam giác $ABC$ vuông tại $C$ có đường cao $CH$, theo hệ thức lượng ta có $CH^2=AH\cdot HB$.

c) ($1{,}0$ điểm) $HB=AB-AH=10-2=8$ (cm). Do đó $CH^2=2\cdot8=16$, suy ra $CH=4$ cm. Ta có $AC^2=AH\cdot AB=2\cdot10=20$ nên $AC=2\sqrt5\approx4{,}47$ cm, và $BC^2=BH\cdot AB=8\cdot10=80$ nên $BC=4\sqrt5\approx8{,}94$ cm. Kiểm tra: $AC^2+BC^2=20+80=100=AB^2$.

**Đáp số.** $CH=4$ cm; $AC=2\sqrt5\approx4{,}47$ cm; $BC=4\sqrt5\approx8{,}94$ cm.
:::

:::exercise
Tính độ dài cung $72^\circ$ và diện tích hình quạt tương ứng của đường tròn bán kính $10$ cm (làm tròn đến hai chữ số thập phân).

::hint
**Kiến thức:** $l=\dfrac{\pi Rn}{180}$ và $S=\dfrac{\pi R^2n}{360}$.

**Gợi ý các bước:**
1. Thay $R=10$ và $n=72$ vào hai công thức.
2. Rút gọn rồi làm tròn.

::solution
$l=\dfrac{\pi\cdot10\cdot72}{180}=4\pi\approx12{,}57$ (cm). $S=\dfrac{\pi\cdot100\cdot72}{360}=20\pi\approx62{,}83$ (cm²).

**Đáp số.** $4\pi\approx12{,}57$ cm; $20\pi\approx62{,}83$ cm².
:::

:::exercise
Giả sử một chiếc quạt giấy khi mở ra có dạng hình quạt tròn bán kính $20$ cm, góc ở tâm $120^\circ$. Tính diện tích và độ dài cung ngoài của quạt (làm tròn đến một chữ số thập phân).

::hint
**Kiến thức:** hình quạt tròn: $S=\dfrac{\pi R^2n}{360}$ và $l=\dfrac{\pi Rn}{180}$.

**Gợi ý các bước:**
1. Thay $R=20$ và $n=120$.
2. Rút gọn phân số rồi làm tròn.

::solution
$S=\dfrac{\pi\cdot400\cdot120}{360}=\dfrac{400\pi}3\approx418{,}9$ (cm²). $l=\dfrac{\pi\cdot20\cdot120}{180}=\dfrac{40\pi}3\approx41{,}9$ (cm).

**Đáp số.** $\approx418{,}9$ cm²; $\approx41{,}9$ cm.
:::

:::exercise
Giả sử một bánh xe có đường kính $60$ cm. Khi bánh xe quay $500$ vòng thì xe đi được bao nhiêu mét (làm tròn đến một chữ số thập phân)?

::hint
**Kiến thức:** mỗi vòng quay, xe đi được một quãng bằng chu vi bánh xe.

**Gợi ý các bước:**
1. Đổi đường kính ra mét và tính chu vi.
2. Nhân với số vòng quay.

::solution
Chu vi bánh xe là $0{,}6\pi$ m. Quay $500$ vòng, xe đi được $500\cdot0{,}6\pi=300\pi\approx942{,}5$ (m).

**Đáp số.** Khoảng $942{,}5$ m.
:::

:::exercise Thử thách
Cho đường tròn $(O;3\text{ cm})$ và điểm $A$ sao cho hai tiếp tuyến $AB$, $AC$ tạo với nhau góc $\widehat{BAC}=60^\circ$. Chứng minh tam giác $ABC$ đều, rồi tính $OA$, $AB$ và diện tích tam giác $ABC$ (làm tròn đến hai chữ số thập phân).

::hint
**Kiến thức:** $AB=AC$ và $AO$ là phân giác của $\widehat{BAC}$; tam giác cân có một góc $60^\circ$ là tam giác đều.

**Gợi ý các bước:**
1. Chứng minh $AB=AC$, suy ra tam giác $ABC$ đều.
2. Trong tam giác $ABO$ vuông tại $B$ có $\widehat{BAO}=30^\circ$, tính $OA$, $AB$.

::solution
Vì $AB$, $AC$ là hai tiếp tuyến cắt nhau nên $AB=AC$. Tam giác $ABC$ cân tại $A$ có $\widehat{BAC}=60^\circ$ nên đều. Vì $AO$ là phân giác của $\widehat{BAC}$ nên $\widehat{BAO}=30^\circ$. Trong tam giác $ABO$ vuông tại $B$: $OA=\dfrac{OB}{\sin30^\circ}=6$ (cm) và $AB=\sqrt{36-9}=3\sqrt3\approx5{,}20$ (cm). Diện tích tam giác đều cạnh $3\sqrt3$ là $\dfrac{\sqrt3}4\cdot27=\dfrac{27\sqrt3}4\approx11{,}69$ (cm²).

**Đáp số.** Tam giác $ABC$ đều; $OA=6$ cm; $AB=3\sqrt3\approx5{,}20$ cm; $S\approx11{,}69$ cm².
:::

## Kiểm tra mini

:::quiz
::mc
Tam giác $ABC$ nội tiếp đường tròn $(O)$ có góc ở tâm $\widehat{BOC}=80^\circ$ (cùng chắn cung $BC$ với $\widehat{BAC}$). Số đo $\widehat{BAC}$ là
A. $80^\circ$.
B. $160^\circ$.
C. $40^\circ$.
D. $100^\circ$.
::key C
Góc nội tiếp bằng một nửa góc ở tâm cùng chắn một cung: $\widehat{BAC}=80^\circ:2=40^\circ$. Đáp án A nhầm hai góc bằng nhau, B nhân đôi thay vì chia đôi, D là $180^\circ-80^\circ$.

::mc
Tứ giác $ABCD$ nội tiếp đường tròn có $\widehat A=70^\circ$. Số đo $\widehat C$ là
A. $290^\circ$.
B. $70^\circ$.
C. $20^\circ$.
D. $110^\circ$.
::key D
Hai góc đối bù nhau nên $\widehat C=180^\circ-70^\circ=110^\circ$. Đáp án B cho hai góc đối bằng nhau, C là $90^\circ-70^\circ$, A là $360^\circ-70^\circ$.

::mc
Cho đường tròn $(O;3\text{ cm})$ và điểm $A$ với $OA=5$ cm. $AB$ là tiếp tuyến của đường tròn tại $B$. Độ dài $AB$ là
A. $4$ cm.
B. $2$ cm.
C. $\sqrt{34}$ cm.
D. $8$ cm.
::key A
Tam giác $ABO$ vuông tại $B$ nên $AB=\sqrt{25-9}=4$. Đáp án D là $5+3$, B là $5-3$, C là $\sqrt{25+9}$ (cộng thay vì trừ).

::mc
Độ dài cung $90^\circ$ của đường tròn bán kính $4$ cm là
A. $\pi$ cm.
B. $2\pi$ cm.
C. $4\pi$ cm.
D. $8\pi$ cm.
::key B
$l=\dfrac{\pi\cdot4\cdot90}{180}=2\pi$. Đáp án A chia thêm cho $2$, C là $\dfrac{\pi R n}{90}$, D là chu vi cả đường tròn.

::tf
Tam giác $ABC$ nội tiếp đường tròn $(O;5\text{ cm})$ có $\widehat{BAC}=30^\circ$. Các nhận định sau đúng hay sai?
a) $\widehat{BOC}=60^\circ$.
b) $BC=5$ cm.
c) $\widehat{OBC}=70^\circ$.
d) Tam giác $OBC$ đều.
::key Đ Đ S Đ
a) Đúng: góc ở tâm gấp đôi góc nội tiếp. b) Đúng: tam giác $OBC$ cân có góc ở đỉnh $60^\circ$ nên đều, $BC=OB=5$. c) Sai: $\widehat{OBC}=60^\circ$. d) Đúng: như ở b).

::sa
Cho đường tròn $(O;6\text{ cm})$ và điểm $A$ sao cho $OA=10$ cm. $AB$ là tiếp tuyến tại $B$. Tính $AB$ (đơn vị cm).
::key 8
$AB=\sqrt{10^2-6^2}=8$.

::sa
Tính diện tích hình quạt tròn bán kính $6$ cm, góc ở tâm $60^\circ$ (đơn vị cm², làm tròn đến một chữ số thập phân).
::key 18,8
$S=\dfrac{\pi\cdot36\cdot60}{360}=6\pi\approx18{,}8$.
:::
