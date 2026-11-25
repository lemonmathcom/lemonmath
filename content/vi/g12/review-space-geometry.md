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

Hình học không gian của lớp 11 vẫn chưa rời khỏi đề thi tốt nghiệp. Ở Phần I (trắc nghiệm nhiều lựa chọn), thường có một đến hai câu về quan hệ vuông góc, góc hoặc thể tích. Ở Phần II hoặc Phần III, đề thường có một câu về khoảng cách, góc nhị diện hoặc thể tích trong một tình huống thực tế. Cộng lại, chủ đề này thường đáng khoảng $0{,}5$ đến $1$ điểm, một phần điểm đáng để ôn cho kĩ.

Bài ôn đi qua bốn mảng: quan hệ vuông góc, góc, khoảng cách và thể tích. Cả bốn mảng cùng trả lời một câu hỏi: nhìn một hình trong không gian, làm sao tìm ra tam giác vuông cần dùng? Mọi ví dụ được viết đúng như một câu trong đề thi, và hầu hết dùng chung một hình quen thuộc: hình chóp có cạnh bên vuông góc với đáy.

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

Hình chóp có $SA\perp(ABCD)$ và đáy là hình vuông luôn cho ta hai "cặp vuông góc" dưới đây. Vì sao chúng đúng? Vì mỗi đường thẳng đều vuông góc với hai đường thẳng cắt nhau của mặt phẳng: một đường nằm trong đáy, đường kia là cạnh bên vuông góc với đáy. Bạn nên nhớ cách suy ra này hơn là học thuộc kết quả:

$$BC\perp AB,\ BC\perp SA\ \Rightarrow\ BC\perp(SAB);\qquad BD\perp AC,\ BD\perp SA\ \Rightarrow\ BD\perp(SAC).$$

Câu trắc nghiệm thường đưa ra bốn quan hệ và hỏi quan hệ nào đúng. Nhìn hình vẽ rất dễ bị đánh lừa, nên đừng đoán. Cách chắc chắn là tìm cho đường thẳng đó **hai** đường thẳng cắt nhau trong mặt phẳng mà nó vuông góc.

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
- **Góc giữa đường thẳng $d$ và mặt phẳng $(P)$:** là góc giữa $d$ và hình chiếu $d'$ của nó trên $(P)$, tức là cái "bóng" của đường thẳng trên mặt phẳng. Với $SA\perp(ABCD)$, hình chiếu của $SC$ là $AC$, nên góc giữa $SC$ và $(ABCD)$ là $\widehat{SCA}$.
- **Góc nhị diện $[S, BD, A]$:** lấy điểm $O$ trên cạnh $BD$, rồi trong mỗi mặt kẻ một đường vuông góc với cạnh: $OS\perp BD$ trong mặt $(SBD)$ và $OA\perp BD$ trong mặt $(ABD)$. Số đo góc nhị diện chính là $\widehat{SOA}$.
- Góc giữa hai mặt phẳng cắt nhau là góc từ $0^\circ$ đến $90^\circ$; góc nhị diện có thể từ $0^\circ$ đến $180^\circ$.
:::

Xác định được góc rồi thì phần còn lại quen thuộc: đưa góc đó về một tam giác vuông và dùng $\tan$, $\sin$ hoặc $\cos$. Câu Đúng/Sai trong đề thường hỏi cả hai việc, **xác định** góc và **tính** góc, nên ta cùng xem một câu như vậy.

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
- **Lấy nhầm góc tại đỉnh $S$.** Chỗ này nhiều bạn hay nhầm: góc giữa $SC$ và đáy là $\widehat{SCA}$, có đỉnh tại giao điểm của $SC$ với đáy, chứ không phải $\widehat{CSA}$.
- **Kẻ đường vuông góc sai chỗ.** Với góc nhị diện $[S, BC, A]$ khi đáy là hình vuông, chân đường vuông góc là $B$ (vì $BC\perp(SAB)$), và góc cần tìm là $\widehat{SBA}$. Đừng lấy trung điểm $BC$.
- **Đoán góc là $60^\circ$ vì "trông giống".** Hình vẽ dễ đánh lừa mắt, nên hãy tính $\tan$ trước. Ở đây $\tan=2$, và giá trị này không cho một góc đặc biệt.
:::

## Khoảng cách

:::theorem Hai công thức dùng nhiều nhất
- Nếu $SA\perp(ABC)$, $AH\perp SK$ với $K$ là chân đường vuông góc hạ từ $A$ xuống $BC$, thì $d(A, (SBC))=AH$ và
$$\frac{1}{AH^2}=\frac{1}{SA^2}+\frac{1}{AK^2}.$$
- **Đổi điểm:** nếu $MN\parallel(P)$ thì $d(M, (P))=d(N, (P))$. Nếu đường thẳng $AM$ cắt $(P)$ tại $I$ thì $\dfrac{d(A, (P))}{d(M, (P))}=\dfrac{IA}{IM}$.
- **Hai đường thẳng chéo nhau $a$, $b$:** nếu $a\parallel(P)$ với $(P)\supset b$ thì $d(a, b)=d(a, (P))$.
:::

Khoảng cách từ một điểm "khó" ($D$, $C$, trung điểm...) thì không dễ tính thẳng. Kĩ thuật đổi điểm giúp ta đưa nó về khoảng cách từ $A$, là điểm dễ làm việc nhất. Còn chân $K$ thì dễ xác định: khi đáy là hình vuông hoặc hình chữ nhật, nó trùng $B$ vì $AB\perp BC$. Ví dụ dưới đây dùng đúng cách này.

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

Khối chóp đều có một điểm rất tiện: chân đường cao rơi đúng tâm của đáy. Nhờ vậy cạnh bên, đường cao và nửa đường chéo đáy tạo thành một tam giác vuông, và ta tính chiều cao bằng định lí Pythagore. Ví dụ dưới đây là một chiếc lều như thế.

:::example Trả lời ngắn: thể tích một chiếc lều
Một chiếc lều cắm trại có dạng khối chóp tứ giác đều, đáy là hình vuông cạnh $6$ m, mỗi cạnh bên dài $5$ m. Tính thể tích không khí bên trong lều (đơn vị: m³, làm tròn kết quả đến hàng phần mười).

**Lời giải.** Gọi $O$ là tâm đáy; $SO$ là chiều cao. Nửa đường chéo đáy là $OA=\dfrac{6\sqrt2}{2}=3\sqrt2$, nên:

$$SO=\sqrt{SA^2-OA^2}=\sqrt{25-18}=\sqrt7,\qquad V=\frac13\cdot 6^2\cdot\sqrt7=12\sqrt7\approx31{,}749.$$

Vậy thể tích không khí trong lều khoảng $31{,}7$ m³ (ghi $31{,}7$).

**Nhìn lại.** Nếu dùng nhầm nửa cạnh đáy $3$ thay cho nửa đường chéo, ta được chiều cao $4$ và thể tích $48$ m³, một đáp án sai rất "đẹp".
:::

:::warning Bẫy thường gặp về khoảng cách và thể tích
- **Quên hệ số $\dfrac13$** khi tính thể tích khối chóp, hoặc lỡ thêm $\dfrac13$ vào khối lăng trụ.
- **Nhầm cạnh bên với chiều cao.** Chỉ trong khối lăng trụ đứng thì cạnh bên mới là chiều cao.
- **Lấy $AB$ hoặc $SB$ làm khoảng cách.** Khoảng cách từ $A$ đến $(SBC)$ là đường vuông góc $AH$, và nó luôn ngắn hơn $AB$ và $SA$.
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

Các bài xếp từ dễ đến khó, mỗi bài ghi rõ dạng câu hỏi trong đề thi. Bạn cứ vẽ hình trước rồi mới tính. Làm xong, thử hỏi: tam giác vuông cần dùng nằm ở đâu?

:::exercise Trắc nghiệm
Khối lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác vuông tại $A$, $AB=3$, $AC=4$ và $AA'=5$. Thể tích của khối lăng trụ là

**A.** $30$. **B.** $10$. **C.** $60$. **D.** $20$.

::hint
**Kiến thức:** $V_{\text{lăng trụ}}=B\cdot h$; lăng trụ đứng có chiều cao bằng cạnh bên.

**Gợi ý các bước:**
1. Tính diện tích tam giác vuông $ABC$.
2. Nhân với $AA'$.

::solution
Vì $ABC.A'B'C'$ là lăng trụ đứng nên đường cao của lăng trụ là $AA'=5$.

Đáy $ABC$ là tam giác vuông tại $A$ nên diện tích đáy là
$$S_{ABC}=\frac12\cdot AB\cdot AC=\frac12\cdot3\cdot4=6.$$

Áp dụng công thức thể tích khối lăng trụ $V=S_{\text{đáy}}\cdot h$, ta có
$$V=6\cdot5=30.$$

Vậy thể tích của khối lăng trụ là $30$. Vậy chọn **A**.

*Nhận xét.* Phương án B nhân thêm $\dfrac13$ (nhầm với công thức thể tích khối chóp); phương án C quên $\dfrac12$ trong công thức diện tích tam giác.

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
Vì $OA\perp OB$ và $OA\perp OC$, mà $OB$, $OC$ cắt nhau trong mặt phẳng $(OBC)$ nên $OA\perp(OBC)$. Do đó $OA$ là đường cao của tứ diện kẻ từ $A$, và $OA=2$.

Tam giác $OBC$ vuông tại $O$ nên
$$S_{OBC}=\frac12\cdot OB\cdot OC=\frac12\cdot3\cdot4=6.$$

Áp dụng công thức thể tích khối chóp, ta có
$$V=\frac13\cdot S_{OBC}\cdot OA=\frac13\cdot6\cdot2=4.$$

Vậy thể tích khối tứ diện là $4$. Vậy chọn **D**.

*Nhận xét.* Phương án A quên cả $\dfrac13$ và $\dfrac12$; phương án B quên $\dfrac13$; phương án C quên $\dfrac12$.

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
Gọi $M$ là trung điểm của $BC$. Vì tam giác $ABC$ đều cạnh $a$ nên $AM\perp BC$ và $AM=\dfrac{a\sqrt3}{2}$.

Vì $SA\perp(ABC)$ nên $SA\perp BC$. Mà $AM\perp BC$ nên $BC\perp(SAM)$, suy ra $BC\perp SM$.

Hai mặt phẳng $(SBC)$ và $(ABC)$ cắt nhau theo giao tuyến $BC$, lại có $AM\perp BC$ và $SM\perp BC$. Do đó góc giữa hai mặt phẳng là $\widehat{SMA}=60^\circ$.

Trong tam giác $SAM$ vuông tại $A$, ta có
$$SA=AM\cdot\tan60^\circ=\frac{a\sqrt3}{2}\cdot\sqrt3=\frac{3a}{2}.$$

Diện tích đáy là $S_{ABC}=\dfrac{a^2\sqrt3}{4}$. Áp dụng công thức thể tích khối chóp, ta có
$$V=\frac13\cdot S_{ABC}\cdot SA=\frac13\cdot\frac{a^2\sqrt3}{4}\cdot\frac{3a}{2}=\frac{a^3\sqrt3}{8}.$$

Vậy thể tích khối chóp là $\dfrac{a^3\sqrt3}{8}$. Vậy chọn **B**.

*Nhận xét.* Phương án A dùng nhầm $\tan30^\circ$; phương án C quên $\dfrac13$; phương án D lấy nhầm góc là $\widehat{SBA}$.

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
a) **Đúng.** Vì $ABCD$ là hình vuông nên $AC\perp BD$ (hai đường chéo của hình vuông). Vì $BB'\perp(ABCD)$ nên $AC\perp BB'$. Đường thẳng $AC$ vuông góc với hai đường thẳng cắt nhau $BD$ và $BB'$ của mặt phẳng $(BDD'B')$, nên $AC\perp(BDD'B')$.

b) **Đúng.** Vì $ABC'D'$ là hình bình hành (có $AB\parallel C'D'$ và $AB=C'D'$) nên $BC'\parallel AD'$. Do đó góc giữa $AB'$ và $BC'$ bằng góc giữa $AB'$ và $AD'$. Tam giác $AB'D'$ có $AB'=AD'=B'D'=a\sqrt2$ (là các đường chéo của các mặt hình vuông cạnh $a$) nên là tam giác đều, suy ra $\widehat{B'AD'}=60^\circ$. Vậy góc giữa hai đường thẳng $AB'$ và $BC'$ bằng $60^\circ$.

c) **Đúng.** Theo a), $AC\perp(BDD'B')$, mà $O\in AC$ và $O\in BD\subset(BDD'B')$, nên $AO\perp(BDD'B')$ tại $O$. Do đó khoảng cách từ $A$ đến $(BDD'B')$ là
$$AO=\frac{AC}{2}=\frac{a\sqrt2}{2}.$$

d) **Sai.** Hai mặt phẳng $(C'BD)$ và $(CBD)$ có giao tuyến $BD$. Ta có $CO\perp BD$; lại có $C'B=C'D$ nên tam giác $C'BD$ cân tại $C'$, suy ra $C'O\perp BD$. Do đó số đo góc nhị diện $[C', BD, C]$ bằng $\widehat{C'OC}$. Trong tam giác $C'CO$ vuông tại $C$,
$$\tan\widehat{C'OC}=\frac{CC'}{CO}=\frac{a}{\frac{a\sqrt2}{2}}=\sqrt2,$$
nên $\widehat{C'OC}\approx54{,}7^\circ$, khác $45^\circ$.

Vậy các mệnh đề a), b), c) đúng; mệnh đề d) sai.

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
Gọi $a$ là độ dài cạnh của hình lập phương.

Vì $AA'\perp(ABCD)$ nên $AC$ là hình chiếu vuông góc của $A'C$ lên mặt phẳng $(ABCD)$. Do đó góc giữa đường thẳng $A'C$ và mặt phẳng $(ABCD)$ là $\widehat{A'CA}$.

Trong tam giác $A'AC$ vuông tại $A$, ta có $AA'=a$ và $AC=a\sqrt2$ (đường chéo hình vuông cạnh $a$), nên
$$\tan\widehat{A'CA}=\frac{AA'}{AC}=\frac{a}{a\sqrt2}=\frac{1}{\sqrt2}.$$

Suy ra $\widehat{A'CA}\approx35{,}26^\circ$, làm tròn đến hàng đơn vị là $35^\circ$.

Vậy góc giữa đường thẳng $A'C$ và mặt phẳng $(ABCD)$ xấp xỉ $35^\circ$.

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
Gọi $M$ là trung điểm của $BC$. Vì tam giác $ABC$ đều cạnh $2$ nên $AM\perp BC$ và $AM=\dfrac{2\sqrt3}{2}=\sqrt3$.

Vì $SA\perp(ABC)$ nên $SA\perp BC$. Mà $AM\perp BC$ nên $BC\perp(SAM)$.

Trong mặt phẳng $(SAM)$, kẻ $AH\perp SM$ tại $H$. Vì $BC\perp(SAM)$ nên $BC\perp AH$. Đường thẳng $AH$ vuông góc với hai đường thẳng cắt nhau $SM$ và $BC$ của mặt phẳng $(SBC)$, nên $AH\perp(SBC)$. Do đó $d(A, (SBC))=AH$.

Trong tam giác $SAM$ vuông tại $A$ với đường cao $AH$, ta có
$$\frac{1}{AH^2}=\frac{1}{SA^2}+\frac{1}{AM^2}=1+\frac13=\frac43.$$

Suy ra $AH=\dfrac{\sqrt3}{2}\approx0{,}866$, làm tròn đến hàng phần trăm là $0{,}87$.

Vậy khoảng cách từ $A$ đến mặt phẳng $(SBC)$ xấp xỉ $0{,}87$.

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
Gọi hình chóp tứ giác đều là $S.ABCD$ với đáy $ABCD$ là hình vuông cạnh $4$ m, $O$ là tâm của đáy. Vì hình chóp đều nên $SO\perp(ABCD)$ và $SO=3$ m.

Gọi $M$ là trung điểm của $CD$. Khi đó $OM\perp CD$ và $OM=\dfrac{AD}{2}=2$ m.

Vì $SO\perp(ABCD)$ nên $SO\perp CD$. Mà $OM\perp CD$ nên $CD\perp(SOM)$, suy ra $CD\perp SM$.

Hai mặt phẳng $(SCD)$ và $(ABCD)$ cắt nhau theo giao tuyến $CD$, lại có $SM\perp CD$ và $OM\perp CD$. Do đó góc giữa mặt bên $(SCD)$ và mặt đáy là $\widehat{SMO}$.

Trong tam giác $SOM$ vuông tại $O$, ta có
$$\tan\widehat{SMO}=\frac{SO}{OM}=\frac32.$$

Suy ra $\widehat{SMO}\approx56{,}31^\circ$, làm tròn đến hàng đơn vị là $56^\circ$.

Vậy góc giữa một mặt bên của mái và mặt đáy xấp xỉ $56^\circ$.

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
Máng chứa được nhiều nước nhất khi đầy nước đến miệng máng, lúc đó thể tích nước bằng thể tích của khối lăng trụ đứng.

Đáy của lăng trụ là mặt cắt ngang, một hình thang cân có hai đáy $0{,}6$ m và $0{,}4$ m, chiều cao (chiều sâu) $0{,}3$ m. Diện tích mặt cắt là
$$B=\frac{(0{,}6+0{,}4)\cdot0{,}3}{2}=0{,}15\ (\text{m}^2).$$

Máng dài $2$ m nên chiều cao của lăng trụ là $2$ m. Thể tích của máng là
$$V=B\cdot h=0{,}15\cdot2=0{,}3\ (\text{m}^3).$$

Vì $1$ m³ $=1000$ lít nên $V=0{,}3\cdot1000=300$ lít.

Vậy máng chứa được tối đa $300$ lít nước.

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
Hình vuông $ABCD$ có hai đường chéo $AC\perp BD$ cắt nhau tại $O$. Vì $SA\perp(ABCD)$ nên $SA\perp BD$. Đường thẳng $BD$ vuông góc với hai đường thẳng cắt nhau $AC$ và $SA$ của mặt phẳng $(SAC)$ nên $BD\perp(SAC)$.

Trong mặt phẳng $(SAC)$, kẻ $OH\perp SC$ tại $H$. Vì $BD\perp(SAC)$ và $OH\subset(SAC)$ nên $OH\perp BD$. Như vậy $OH$ vuông góc với cả $BD$ và $SC$, nên $OH$ là đoạn vuông góc chung của hai đường thẳng chéo nhau $SC$ và $BD$. Do đó $d(SC, BD)=OH$.

Ta tính $OH$. Đường chéo $AC=a\sqrt2$ nên $OC=\dfrac{a\sqrt2}{2}$. Tam giác $SAC$ vuông tại $A$ nên
$$SC=\sqrt{SA^2+AC^2}=\sqrt{a^2+2a^2}=a\sqrt3,\qquad\sin\widehat{SCA}=\frac{SA}{SC}=\frac{1}{\sqrt3}.$$

Tam giác $OHC$ vuông tại $H$ và $\widehat{OCH}=\widehat{SCA}$ (vì $O$ nằm trên $CA$, $H$ nằm trên $CS$), nên
$$OH=OC\cdot\sin\widehat{OCH}=\frac{a\sqrt2}{2}\cdot\frac{1}{\sqrt3}=\frac{a\sqrt6}{6}.$$

Vậy khoảng cách giữa hai đường thẳng chéo nhau $SC$ và $BD$ bằng $\dfrac{a\sqrt6}{6}$.

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
Gọi $B$ là diện tích đáy $ABC$ và $h$ là chiều cao của lăng trụ. Khi đó $V=B\cdot h=30$.

Vì mặt phẳng $(A'B'C')$ song song với $(ABC)$ nên $d(C', (ABC))=h$.

Đường thẳng $CC'$ cắt mặt phẳng $(ABC)$ tại $C$ và $M$ là trung điểm của $CC'$, nên
$$d(M, (ABC))=\frac12d(C', (ABC))=\frac h2.$$

Áp dụng công thức thể tích khối chóp, ta có
$$V_{M.ABC}=\frac13\cdot B\cdot\frac h2=\frac16\cdot B\cdot h=\frac V6=\frac{30}{6}=5.$$

Thể tích phần còn lại sau khi cắt bỏ khối chóp $M.ABC$ là $30-5=25$.

Vậy phần còn lại có thể tích bằng $25$.

**Đáp số.** $25$.
:::

## Kiểm tra mini

:::quiz
::mc NB
Một khối chóp có diện tích đáy bằng $12$ và chiều cao bằng $5$. Thể tích của khối chóp là
A. $60$.
B. $20$.
C. $30$.
D. $10$.
::key B
$V=\dfrac13\cdot12\cdot5=20$. Phương án A là công thức của khối lăng trụ; phương án C lấy nhầm hệ số $\dfrac12$.

::mc TH
Cho hình chóp $S.ABCD$ có $SA\perp(ABCD)$. Góc giữa đường thẳng $SB$ và mặt phẳng $(ABCD)$ là
A. $\widehat{SBA}$.
B. $\widehat{BSA}$.
C. $\widehat{SBC}$.
D. $\widehat{SAB}$.
::key A
Hình chiếu của $SB$ trên đáy là $AB$, nên góc là $\widehat{SBA}$. Phương án B là góc giữa $SB$ và $SA$; phương án D là góc vuông.

::mc VD
Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $2$. Khoảng cách giữa hai đường thẳng $AA'$ và $BD$ bằng
A. $2$.
B. $2\sqrt2$.
C. $\sqrt2$.
D. $\sqrt3$.
::key C
Với $O$ là tâm đáy, $AO\perp BD$ và $AO\perp AA'$, nên khoảng cách là $AO=\dfrac{2\sqrt2}{2}=\sqrt2$. Phương án B là cả đường chéo $AC$; phương án A là cạnh $AB$.

::mc TH
Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật và $SA\perp(ABCD)$. Mặt phẳng nào sau đây vuông góc với mặt phẳng $(SAB)$?
A. $(SCD)$.
B. $(SBD)$.
C. $(SAC)$.
D. $(SBC)$.
::key D
$BC\perp AB$ và $BC\perp SA$ nên $BC\perp(SAB)$; mặt phẳng $(SBC)$ chứa $BC$ nên vuông góc với $(SAB)$.

::tf NB TH VD TH
Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh bằng $2$, $O$ là tâm của đáy.
a) $SO\perp(ABCD)$.
b) $SO=\sqrt2$.
c) Góc giữa $SA$ và mặt phẳng $(ABCD)$ bằng $60^\circ$.
d) Thể tích khối chóp bằng $\dfrac{4\sqrt2}{3}$.
::key Đ Đ S Đ
a) Đúng: chân đường cao của hình chóp đều là tâm đáy. b) Đúng: $AO=\sqrt2$, $SO=\sqrt{4-2}=\sqrt2$. c) Sai: $\tan\widehat{SAO}=\dfrac{\sqrt2}{\sqrt2}=1$, góc bằng $45^\circ$. d) Đúng: $V=\dfrac13\cdot4\cdot\sqrt2$.

::sa TH
Khối lăng trụ đứng có đáy là tam giác đều cạnh $2$ và cạnh bên bằng $3$. Tính thể tích khối lăng trụ (làm tròn kết quả đến hàng phần mười).
::key 5,2
$B=\dfrac{2^2\sqrt3}{4}=\sqrt3$, $V=3\sqrt3\approx5{,}196$, làm tròn được $5{,}2$.

::sa VD
Cho hình chóp $S.ABC$ có $SA\perp(ABC)$, tam giác $ABC$ vuông tại $B$, $SA=AB=2$. Tính khoảng cách từ $A$ đến mặt phẳng $(SBC)$ (làm tròn kết quả đến hàng phần trăm).
::key 1,41
$BC\perp(SAB)$ nên khoảng cách là đường cao $AH$ của tam giác vuông cân $SAB$: $AH=\dfrac{SB}{2}=\dfrac{2\sqrt2}{2}=\sqrt2\approx1{,}41$.
:::
