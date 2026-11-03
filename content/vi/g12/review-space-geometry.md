---
title: "Ôn tập: hình học không gian"
description: Ôn quan hệ song song, vuông góc, góc, khoảng cách, góc nhị diện và thể tích khối chóp, khối lăng trụ theo đúng dạng câu hỏi của đề thi tốt nghiệp.
minutes: 40
---

:::goals
- Chứng minh nhanh một đường thẳng vuông góc với một mặt phẳng và nhận ra hai mặt phẳng vuông góc.
- Xác định và tính góc giữa đường thẳng và mặt phẳng, góc nhị diện.
- Tính khoảng cách từ một điểm đến một mặt phẳng và giữa hai đường thẳng chéo nhau.
- Tính thể tích khối chóp, khối lăng trụ, kể cả trong bài toán thực tế.
:::

Hình học không gian lớp 11 vẫn có mặt trong đề thi tốt nghiệp. Ở Phần I (trắc nghiệm nhiều lựa chọn), thường có một đến hai câu hỏi về quan hệ vuông góc, góc hoặc thể tích. Ở Phần II hoặc Phần III, đề thường có một câu về khoảng cách, góc nhị diện hoặc thể tích trong tình huống thực tế. Tổng cộng chủ đề này thường chiếm khoảng $0{,}5$ đến $1$ điểm.

Bài ôn này đi qua bốn mảng: quan hệ vuông góc, góc, khoảng cách và thể tích. Mọi ví dụ được viết đúng như một câu trong đề thi. Hầu hết đều dùng chung một hình quen thuộc: hình chóp có cạnh bên vuông góc với đáy.

:::diagram Hình chóp $S.ABCD$ có $SA\perp(ABCD)$, đáy là hình vuông tâm $O$
alt: Hình chóp S.ABCD vẽ theo phép chiếu song song, S ở ngay trên A, cạnh SA vuông góc với đáy; các đoạn khuất AD, AC, BD vẽ nét đứt, O là giao điểm của AC và BD
point S 0,4 above
point A 0,0 left
point B 1.5,-1.5 below-left
point C 5.8,-1.5 below-right
point D 4.3,0 right
point O 2.9,-0.75 below
segment S A
segment S B
segment S C
segment S D
segment A B
segment B C
segment C D
segment A D dashed
segment A C dashed
segment B D dashed
right S A B
:::

## Quan hệ song song và vuông góc

:::theorem Các dấu hiệu cần nhớ
- **Đường thẳng vuông góc với mặt phẳng:** nếu $d$ vuông góc với hai đường thẳng cắt nhau nằm trong $(P)$ thì $d\perp(P)$. Khi đó $d$ vuông góc với **mọi** đường thẳng nằm trong $(P)$.
- **Hai mặt phẳng vuông góc:** nếu $(Q)$ chứa một đường thẳng vuông góc với $(P)$ thì $(Q)\perp(P)$.
- **Định lí ba đường vuông góc:** cho $a$ nằm trong $(P)$ và $b$ không vuông góc với $(P)$, có hình chiếu vuông góc trên $(P)$ là $b'$. Khi đó $a\perp b\iff a\perp b'$.
- **Song song:** nếu $d$ song song với một đường thẳng nằm trong $(P)$ và $d$ không nằm trong $(P)$ thì $d\parallel(P)$.
:::

Với hình chóp có $SA\perp(ABCD)$ và đáy là hình vuông, ta luôn có hai "cặp vuông góc" sau. Hãy nhớ cách suy ra chứ không học thuộc kết quả:

$$BC\perp AB,\ BC\perp SA\ \Rightarrow\ BC\perp(SAB);\qquad BD\perp AC,\ BD\perp SA\ \Rightarrow\ BD\perp(SAC).$$

Câu hỏi trắc nghiệm thường đưa ra bốn quan hệ và hỏi quan hệ nào đúng. Cách làm chắc chắn là tìm cho đường thẳng đó **hai** đường thẳng cắt nhau trong mặt phẳng mà nó vuông góc.

:::example Trắc nghiệm: chọn quan hệ vuông góc đúng
Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông và $SA\perp(ABCD)$. Khẳng định nào sau đây đúng?

**A.** $BD\perp(SAB)$.

**B.** $BC\perp(SAB)$.

**C.** $AC\perp(SBD)$.

**D.** $CD\perp(SBC)$.

**Lời giải.** Ta kiểm tra từng đường thẳng xem có vuông góc với hai đường thẳng cắt nhau của mặt phẳng đó không.

$$BC\perp AB\ (\text{đáy là hình vuông}),\quad BC\perp SA\ (SA\perp(ABCD))\ \Rightarrow\ BC\perp(SAB).$$

Phương án A sai vì $BD$ không vuông góc với $AB$ (góc giữa chúng là $45^\circ$). Phương án C sai vì $AC$ không vuông góc với $SO$. Phương án D sai vì $CD\parallel AB$, mà $AB$ không vuông góc với $SB$ (tam giác $SAB$ vuông tại $A$), nên $CD$ không vuông góc với $SB$.

Vậy chọn **B**.
:::

## Góc trong không gian

:::note Cách xác định góc
- **Góc giữa đường thẳng $d$ và mặt phẳng $(P)$:** là góc giữa $d$ và hình chiếu $d'$ của nó trên $(P)$. Với $SA\perp(ABCD)$, hình chiếu của $SC$ là $AC$, nên góc giữa $SC$ và $(ABCD)$ là $\widehat{SCA}$.
- **Góc nhị diện $[S, BD, A]$:** lấy điểm $O$ trên cạnh $BD$, kẻ $OS\perp BD$ trong mặt $(SBD)$ và $OA\perp BD$ trong mặt $(ABD)$. Khi đó số đo góc nhị diện là $\widehat{SOA}$.
- Góc giữa hai mặt phẳng cắt nhau là góc từ $0^\circ$ đến $90^\circ$; góc nhị diện có thể từ $0^\circ$ đến $180^\circ$.
:::

Để tính góc, ta đưa về một tam giác vuông rồi dùng $\tan$, $\sin$ hoặc $\cos$. Trong đề thi, câu Đúng/Sai về góc thường hỏi cả việc **xác định** góc và việc **tính** góc.

:::example Đúng/Sai: góc với mặt phẳng và góc nhị diện
Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, tâm $O$, $SA\perp(ABCD)$ và $SA=a\sqrt2$.

a) Góc giữa $SC$ và mặt phẳng $(ABCD)$ là $\widehat{SCA}$.

b) Góc giữa $SC$ và mặt phẳng $(ABCD)$ bằng $45^\circ$.

c) Số đo của góc nhị diện $[S, BD, A]$ bằng $60^\circ$.

d) Sin của góc giữa $SB$ và mặt phẳng $(SAD)$ bằng $\dfrac{\sqrt3}{3}$.

**Lời giải.** Ta xét từng ý, mỗi ý quy về một tam giác vuông.

a) **Đúng.** $SA\perp(ABCD)$ nên $AC$ là hình chiếu của $SC$ trên đáy.

b) **Đúng.** Đường chéo hình vuông là $AC=a\sqrt2$, nên trong tam giác $SAC$ vuông tại $A$:

$$\tan\widehat{SCA}=\frac{SA}{AC}=\frac{a\sqrt2}{a\sqrt2}=1\ \Rightarrow\ \widehat{SCA}=45^\circ.$$

c) **Sai.** Vì $BD\perp(SAC)$ nên $BD\perp SO$ và $BD\perp AO$; góc nhị diện là $\widehat{SOA}$. Với $AO=\dfrac{a\sqrt2}{2}$:

$$\tan\widehat{SOA}=\frac{SA}{AO}=\frac{a\sqrt2}{\frac{a\sqrt2}{2}}=2\ \Rightarrow\ \widehat{SOA}\approx63{,}4^\circ.$$

d) **Đúng.** $AB\perp AD$ và $AB\perp SA$ nên $AB\perp(SAD)$; hình chiếu của $SB$ trên $(SAD)$ là $SA$, góc cần tìm là $\widehat{BSA}$. Ta có $SB=\sqrt{a^2+2a^2}=a\sqrt3$:

$$\sin\widehat{BSA}=\frac{AB}{SB}=\frac{a}{a\sqrt3}=\frac{\sqrt3}{3}.$$

Vậy đáp án là a) Đúng, b) Đúng, c) Sai, d) Đúng.
:::

:::warning Bẫy thường gặp về góc
- **Lấy nhầm góc tại đỉnh $S$.** Góc giữa $SC$ và đáy là $\widehat{SCA}$ (đỉnh tại giao điểm của $SC$ với đáy), không phải $\widehat{CSA}$.
- **Kẻ đường vuông góc sai chỗ.** Với góc nhị diện $[S, BC, A]$ khi đáy là hình vuông, chân đường vuông góc là $B$ (vì $BC\perp(SAB)$), góc là $\widehat{SBA}$; không phải trung điểm $BC$.
- **Đoán góc là $60^\circ$ vì "trông giống".** Luôn tính $\tan$ trước; $\tan=2$ không cho góc đặc biệt.
:::

## Khoảng cách

:::theorem Hai công thức dùng nhiều nhất
- Nếu $SA\perp(ABC)$, $AH\perp SK$ với $K$ là chân đường vuông góc hạ từ $A$ xuống $BC$, thì $d(A, (SBC))=AH$ và
$$\frac{1}{AH^2}=\frac{1}{SA^2}+\frac{1}{AK^2}.$$
- **Đổi điểm:** nếu $MN\parallel(P)$ thì $d(M, (P))=d(N, (P))$. Nếu đường thẳng $AM$ cắt $(P)$ tại $I$ thì $\dfrac{d(A, (P))}{d(M, (P))}=\dfrac{IA}{IM}$.
- **Hai đường thẳng chéo nhau $a$, $b$:** nếu $a\parallel(P)$ với $(P)\supset b$ thì $d(a, b)=d(a, (P))$.
:::

Với đáy là hình vuông hoặc hình chữ nhật, chân $K$ trùng $B$ vì $AB\perp BC$. Kĩ thuật đổi điểm giúp đưa khoảng cách từ một điểm "khó" ($D$, $C$, trung điểm...) về khoảng cách từ $A$.

:::example Trả lời ngắn: khoảng cách đến một mặt bên
Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $3$, $SA\perp(ABCD)$ và $SA=4$. Tính khoảng cách từ điểm $D$ đến mặt phẳng $(SBC)$.

**Lời giải.** Vì $AD\parallel BC$ nên $AD\parallel(SBC)$, do đó $d(D, (SBC))=d(A, (SBC))$. Kẻ $AH\perp SB$; vì $BC\perp(SAB)$ nên $BC\perp AH$, suy ra $AH\perp(SBC)$:

$$\frac{1}{AH^2}=\frac{1}{4^2}+\frac{1}{3^2}=\frac{9+16}{144}=\frac{25}{144}\ \Rightarrow\ AH=\frac{12}{5}=2{,}4.$$

Vậy $d(D, (SBC))=2{,}4$. Trên phiếu trả lời ta ghi $2{,}4$.

**Nhìn lại.** Theo cùng lí do, khoảng cách giữa hai đường thẳng chéo nhau $AD$ và $SB$ cũng bằng $2{,}4$.
:::

## Thể tích khối chóp và khối lăng trụ

:::theorem Công thức thể tích
- Khối chóp: $V=\dfrac13 B\cdot h$; khối lăng trụ: $V=B\cdot h$ ($B$ là diện tích đáy, $h$ là chiều cao).
- Khối hộp chữ nhật: $V=abc$; khối lập phương cạnh $a$: $V=a^3$.
- Tứ diện $OABC$ có $OA$, $OB$, $OC$ đôi một vuông góc: $V=\dfrac16\,OA\cdot OB\cdot OC$.
- Diện tích tam giác đều cạnh $a$: $\dfrac{a^2\sqrt3}{4}$.
:::

Trong khối chóp đều, chân đường cao là tâm của đáy. Vì vậy chiều cao thường tính bằng định lí Pythagore trong tam giác tạo bởi cạnh bên, đường cao và nửa đường chéo đáy.

:::example Trả lời ngắn: thể tích một chiếc lều
Một chiếc lều cắm trại có dạng khối chóp tứ giác đều, đáy là hình vuông cạnh $6$ m, mỗi cạnh bên dài $5$ m. Tính thể tích không khí bên trong lều (đơn vị: m³, làm tròn kết quả đến hàng phần mười).

**Lời giải.** Gọi $O$ là tâm đáy; $SO$ là chiều cao. Nửa đường chéo đáy là $OA=\dfrac{6\sqrt2}{2}=3\sqrt2$, nên:

$$SO=\sqrt{SA^2-OA^2}=\sqrt{25-18}=\sqrt7,\qquad V=\frac13\cdot 6^2\cdot\sqrt7=12\sqrt7\approx31{,}749.$$

Vậy thể tích không khí trong lều khoảng $31{,}7$ m³ (ghi $31{,}7$).

**Nhìn lại.** Nếu dùng nhầm nửa cạnh đáy $3$ thay cho nửa đường chéo, ta được chiều cao $4$ và thể tích $48$ m³, một đáp án sai rất "đẹp".
:::

:::warning Bẫy thường gặp về khoảng cách và thể tích
- **Quên hệ số $\dfrac13$** khi tính thể tích khối chóp, hoặc thêm $\dfrac13$ vào khối lăng trụ.
- **Nhầm cạnh bên với chiều cao.** Chỉ trong khối lăng trụ đứng thì cạnh bên mới là chiều cao.
- **Lấy $AB$ hoặc $SB$ làm khoảng cách.** Khoảng cách từ $A$ đến $(SBC)$ là đường vuông góc $AH$, luôn ngắn hơn $AB$ và $SA$.
:::

## Thuật ngữ

:::terms
- đường thẳng vuông góc với mặt phẳng | line perpendicular to a plane
- hai mặt phẳng vuông góc | perpendicular planes
- định lí ba đường vuông góc | theorem of three perpendiculars
- hình chiếu vuông góc | orthogonal projection
- góc nhị diện | dihedral angle
- khoảng cách | distance
- đường thẳng chéo nhau | skew lines
- hình chóp đều | regular pyramid
- hình lăng trụ đứng | right prism
- thể tích | volume
:::

## Bài tập

Các bài được xếp từ dễ đến khó, mỗi bài ghi rõ dạng câu hỏi trong đề thi.

:::exercise Trắc nghiệm
Khối lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác vuông tại $A$, $AB=3$, $AC=4$ và $AA'=5$. Thể tích của khối lăng trụ là

**A.** $30$. **B.** $10$. **C.** $60$. **D.** $20$.

::hint
**Kiến thức:** $V_{\text{lăng trụ}}=B\cdot h$; lăng trụ đứng có chiều cao bằng cạnh bên.

**Gợi ý các bước:**
1. Tính diện tích tam giác vuông $ABC$.
2. Nhân với $AA'$.

::solution
Diện tích đáy là $\dfrac12\cdot3\cdot4=6$, nên $V=6\cdot5=30$. Phương án B nhân thêm $\dfrac13$, phương án C quên $\dfrac12$.

**Đáp số.** A.
:::

:::exercise Trắc nghiệm
Tứ diện $OABC$ có $OA$, $OB$, $OC$ đôi một vuông góc, $OA=2$, $OB=3$, $OC=4$. Thể tích khối tứ diện là

**A.** $24$. **B.** $12$. **C.** $8$. **D.** $4$.

::hint
**Kiến thức:** $V=\dfrac16\,OA\cdot OB\cdot OC$.

**Gợi ý các bước:**
1. Coi $OAB$ là đáy (tam giác vuông), $OC$ là chiều cao.
2. Tính $\dfrac13\cdot S_{OAB}\cdot OC$.

::solution
$V=\dfrac13\cdot\dfrac12\cdot2\cdot3\cdot4=4$. Phương án A quên cả $\dfrac13$ và $\dfrac12$; phương án B quên $\dfrac13$; phương án C quên $\dfrac12$.

**Đáp số.** D.
:::

:::exercise Trắc nghiệm
Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh $a$, $SA\perp(ABC)$, góc giữa mặt phẳng $(SBC)$ và mặt phẳng đáy bằng $60^\circ$. Thể tích khối chóp là

**A.** $\dfrac{a^3\sqrt3}{24}$. **B.** $\dfrac{a^3\sqrt3}{8}$. **C.** $\dfrac{3a^3\sqrt3}{8}$. **D.** $\dfrac{a^3}{4}$.

::hint
**Kiến thức:** gọi $M$ là trung điểm $BC$; vì $BC\perp(SAM)$ nên góc giữa $(SBC)$ và đáy là $\widehat{SMA}$.

**Gợi ý các bước:**
1. Tính $AM=\dfrac{a\sqrt3}{2}$ rồi $SA=AM\tan60^\circ$.
2. Tính $V=\dfrac13\cdot\dfrac{a^2\sqrt3}{4}\cdot SA$.

::solution
$SA=\dfrac{a\sqrt3}{2}\cdot\sqrt3=\dfrac{3a}{2}$, nên $V=\dfrac13\cdot\dfrac{a^2\sqrt3}{4}\cdot\dfrac{3a}{2}=\dfrac{a^3\sqrt3}{8}$. Phương án A dùng nhầm $\tan30^\circ$, phương án C quên $\dfrac13$, phương án D lấy nhầm góc là $\widehat{SBA}$.

**Đáp số.** B.
:::

:::exercise Đúng/Sai
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$, $O$ là tâm của hình vuông $ABCD$.

a) $AC\perp(BDD'B')$.

b) Góc giữa hai đường thẳng $AB'$ và $BC'$ bằng $60^\circ$.

c) Khoảng cách từ $A$ đến mặt phẳng $(BDD'B')$ bằng $\dfrac{a\sqrt2}{2}$.

d) Số đo của góc nhị diện $[C', BD, C]$ bằng $45^\circ$.

::hint
**Kiến thức:** dấu hiệu đường thẳng vuông góc với mặt phẳng; góc giữa hai đường thẳng bằng góc giữa hai đường song song với chúng.

**Gợi ý các bước:**
1. $AC\perp BD$ và $AC\perp BB'$.
2. Thay $BC'$ bằng $AD'$ (song song) và xét tam giác $AB'D'$.
3. Với góc nhị diện, dùng $C'O\perp BD$ và $CO\perp BD$.

::solution
a) **Đúng.** $AC\perp BD$ (hai đường chéo hình vuông) và $AC\perp BB'$, nên $AC\perp(BDD'B')$.

b) **Đúng.** $BC'\parallel AD'$; tam giác $AB'D'$ có ba cạnh đều bằng $a\sqrt2$ nên là tam giác đều, góc bằng $60^\circ$.

c) **Đúng.** Theo a), $AO\perp(BDD'B')$, nên khoảng cách là $AO=\dfrac{a\sqrt2}{2}$.

d) **Sai.** Góc nhị diện là $\widehat{C'OC}$ với $\tan\widehat{C'OC}=\dfrac{CC'}{CO}=\dfrac{a}{\frac{a\sqrt2}{2}}=\sqrt2$, nên góc khoảng $54{,}7^\circ$.

**Đáp số.** a) Đúng; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise Trả lời ngắn
Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc giữa đường thẳng $A'C$ và mặt phẳng $(ABCD)$ (đơn vị: độ, làm tròn kết quả đến hàng đơn vị).

::hint
**Kiến thức:** hình chiếu của $A'C$ trên $(ABCD)$ là $AC$.

**Gợi ý các bước:**
1. Gọi cạnh là $a$, tính $AC=a\sqrt2$.
2. Tính $\tan\widehat{A'CA}=\dfrac{AA'}{AC}$.

::solution
$\tan\widehat{A'CA}=\dfrac{a}{a\sqrt2}=\dfrac{1}{\sqrt2}$, nên $\widehat{A'CA}\approx35{,}26^\circ$.

**Đáp số.** $35$.
:::

:::exercise Trả lời ngắn
Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh $2$, $SA\perp(ABC)$ và $SA=1$. Tính khoảng cách từ $A$ đến mặt phẳng $(SBC)$ (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** với $M$ là trung điểm $BC$ thì $BC\perp(SAM)$; $\dfrac{1}{AH^2}=\dfrac{1}{SA^2}+\dfrac{1}{AM^2}$.

**Gợi ý các bước:**
1. Tính $AM=\sqrt3$.
2. Thay vào công thức.

::solution
$\dfrac{1}{AH^2}=1+\dfrac13=\dfrac43$, nên $AH=\dfrac{\sqrt3}{2}\approx0{,}866$.

**Đáp số.** $0{,}87$.
:::

:::exercise Trả lời ngắn
Mái che của một giếng trời có dạng hình chóp tứ giác đều, đáy là hình vuông cạnh $4$ m, chiều cao $3$ m. Tính góc giữa một mặt bên của mái và mặt đáy (đơn vị: độ, làm tròn kết quả đến hàng đơn vị).

::hint
**Kiến thức:** với $O$ là tâm đáy và $M$ là trung điểm một cạnh đáy, góc giữa mặt bên và đáy là $\widehat{SMO}$.

**Gợi ý các bước:**
1. $OM$ bằng nửa cạnh đáy.
2. Tính $\tan\widehat{SMO}=\dfrac{SO}{OM}$.

::solution
$OM=2$, $\tan\widehat{SMO}=\dfrac32$, nên $\widehat{SMO}\approx56{,}31^\circ$.

**Đáp số.** $56$.
:::

:::exercise Trả lời ngắn
Một máng nước dài $2$ m có dạng hình lăng trụ đứng, mặt cắt ngang là hình thang cân với đáy lớn (miệng máng) $0{,}6$ m, đáy nhỏ $0{,}4$ m và chiều sâu $0{,}3$ m. Máng chứa được tối đa bao nhiêu lít nước?

::hint
**Kiến thức:** $V=B\cdot h$, với đáy là hình thang; $1$ m³ $=1000$ lít.

**Gợi ý các bước:**
1. Tính diện tích hình thang.
2. Nhân với chiều dài máng, rồi đổi sang lít.

::solution
$B=\dfrac{(0{,}6+0{,}4)\cdot0{,}3}{2}=0{,}15$ m², nên $V=0{,}15\cdot2=0{,}3$ m³ $=300$ lít.

**Đáp số.** $300$.
:::

:::exercise Tự luận
Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, tâm $O$, $SA\perp(ABCD)$ và $SA=a$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SC$ và $BD$.

::hint
**Kiến thức:** $BD\perp(SAC)$; nếu $OH\perp SC$ trong mặt $(SAC)$ thì $OH$ là đoạn vuông góc chung.

**Gợi ý các bước:**
1. Chứng minh $BD\perp OH$.
2. Tính $OH=OC\cdot\sin\widehat{SCA}$.

::solution
Vì $BD\perp(SAC)$ và $OH\subset(SAC)$ nên $OH\perp BD$; lại có $OH\perp SC$, nên $d(SC, BD)=OH$. Ta có $OC=\dfrac{a\sqrt2}{2}$, $SC=\sqrt{a^2+2a^2}=a\sqrt3$, $\sin\widehat{SCA}=\dfrac{SA}{SC}=\dfrac{1}{\sqrt3}$:

$$OH=\frac{a\sqrt2}{2}\cdot\frac{1}{\sqrt3}=\frac{a\sqrt6}{6}.$$

**Đáp số.** $d(SC, BD)=\dfrac{a\sqrt6}{6}$.
:::

:::exercise Trả lời ngắn (thử thách)
Khối lăng trụ $ABC.A'B'C'$ có thể tích bằng $30$. Gọi $M$ là trung điểm của cạnh $CC'$. Cắt bỏ khối chóp $M.ABC$ khỏi khối lăng trụ. Tính thể tích phần còn lại.

::hint
**Kiến thức:** khối chóp và khối lăng trụ có cùng đáy; chiều cao của khối chóp bằng một nửa chiều cao lăng trụ.

**Gợi ý các bước:**
1. Viết $V_{M.ABC}=\dfrac13\cdot B\cdot\dfrac h2$ theo $V=B\cdot h$.
2. Lấy $30$ trừ đi.

::solution
$d(M, (ABC))=\dfrac12 d(C', (ABC))=\dfrac h2$, nên $V_{M.ABC}=\dfrac13\cdot B\cdot\dfrac h2=\dfrac{V}{6}=5$. Phần còn lại có thể tích $30-5=25$.

**Đáp số.** $25$.
:::

## Kiểm tra mini

:::quiz
::mc
Một khối chóp có diện tích đáy bằng $12$ và chiều cao bằng $5$. Thể tích của khối chóp là
A. $60$.
B. $20$.
C. $30$.
D. $10$.
::key B
$V=\dfrac13\cdot12\cdot5=20$. Phương án A là công thức của khối lăng trụ; phương án C lấy nhầm hệ số $\dfrac12$.

::mc
Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$. Góc giữa đường thẳng $SB$ và mặt phẳng $(ABCD)$ là
A. $\widehat{SBA}$.
B. $\widehat{BSA}$.
C. $\widehat{SBC}$.
D. $\widehat{SAB}$.
::key A
Hình chiếu của $SB$ trên đáy là $AB$, nên góc là $\widehat{SBA}$. Phương án B là góc giữa $SB$ và $SA$; phương án D là góc vuông.

::mc
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $2$. Khoảng cách giữa hai đường thẳng $AA'$ và $BD$ bằng
A. $2$.
B. $2\sqrt2$.
C. $\sqrt2$.
D. $\sqrt3$.
::key C
Với $O$ là tâm đáy, $AO\perp BD$ và $AO\perp AA'$, nên khoảng cách là $AO=\dfrac{2\sqrt2}{2}=\sqrt2$. Phương án B là cả đường chéo $AC$; phương án A là cạnh $AB$.

::mc
Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật và $SA\perp(ABCD)$. Mặt phẳng nào sau đây vuông góc với mặt phẳng $(SAB)$?
A. $(SCD)$.
B. $(SBD)$.
C. $(SAC)$.
D. $(SBC)$.
::key D
$BC\perp AB$ và $BC\perp SA$ nên $BC\perp(SAB)$; mặt phẳng $(SBC)$ chứa $BC$ nên vuông góc với $(SAB)$.

::tf
Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh bằng $2$, $O$ là tâm của đáy.
a) $SO\perp(ABCD)$.
b) $SO=\sqrt2$.
c) Góc giữa $SA$ và mặt phẳng $(ABCD)$ bằng $60^\circ$.
d) Thể tích khối chóp bằng $\dfrac{4\sqrt2}{3}$.
::key Đ Đ S Đ
a) Đúng: chân đường cao của hình chóp đều là tâm đáy. b) Đúng: $AO=\sqrt2$, $SO=\sqrt{4-2}=\sqrt2$. c) Sai: $\tan\widehat{SAO}=\dfrac{\sqrt2}{\sqrt2}=1$, góc bằng $45^\circ$. d) Đúng: $V=\dfrac13\cdot4\cdot\sqrt2$.

::sa
Khối lăng trụ đứng có đáy là tam giác đều cạnh $2$ và cạnh bên bằng $3$. Tính thể tích khối lăng trụ (làm tròn kết quả đến hàng phần mười).
::key 5,2
$B=\dfrac{2^2\sqrt3}{4}=\sqrt3$, $V=3\sqrt3\approx5{,}196$, làm tròn được $5{,}2$.

::sa
Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, tam giác $ABC$ vuông tại $B$, $SA=AB=2$. Tính khoảng cách từ $A$ đến mặt phẳng $(SBC)$ (làm tròn kết quả đến hàng phần trăm).
::key 1,41
$BC\perp(SAB)$ nên khoảng cách là đường cao $AH$ của tam giác vuông cân $SAB$: $AH=\dfrac{SB}{2}=\dfrac{2\sqrt2}{2}=\sqrt2\approx1{,}41$.
:::
