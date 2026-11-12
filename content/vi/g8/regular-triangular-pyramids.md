---
title: Hình chóp tam giác đều. Hình chóp tứ giác đều
description: Nhận biết hình chóp tam giác đều và tứ giác đều, tính trung đoạn, diện tích xung quanh, diện tích toàn phần và thể tích; vận dụng vào lều, mái nhà, phễu.
minutes: 25
---

:::goals
- Nhận biết hình chóp tam giác đều, hình chóp tứ giác đều và gọi đúng tên các yếu tố: đỉnh, đáy, mặt bên, cạnh bên, đường cao, trung đoạn.
- Tính diện tích xung quanh và diện tích toàn phần bằng công thức $S_{xq}=p\cdot d$.
- Tính thể tích bằng công thức $V=\dfrac13S_{\text{đáy}}\cdot h$.
- Dùng định lí Pythagore để tìm trung đoạn, chiều cao, cạnh bên và giải các bài toán thực tế.
:::

Một chiếc lều có dạng hình chóp tứ giác đều, cạnh đáy $4$ m và chiều cao $1{,}5$ m (đây là số liệu giả định). Cần bao nhiêu mét vuông vải để che bốn mặt bên? Bên trong lều chứa được bao nhiêu mét khối không khí?

Hai câu hỏi này, một về mặt ngoài và một về lòng khối, là hai việc ta thường làm với mọi hình khối: tính diện tích xung quanh để biết cần bao nhiêu vật liệu, tính thể tích để biết khối chứa được bao nhiêu. Bài này trả lời chúng cho hai loại hình chóp thường gặp nhất, bắt đầu từ hình chóp tam giác đều.

## Hình chóp tam giác đều

### Khám phá: gấp một tấm bìa

Hãy tưởng tượng một tấm bìa gồm một tam giác đều cạnh $6$ cm làm đáy và ba tam giác cân bằng nhau dán vào ba cạnh của nó. Gấp ba tam giác cân lên cho ba đỉnh gặp nhau, ta được một hình chóp. Giả sử đường cao của mỗi tam giác cân (kẻ từ đỉnh chóp) dài $2$ cm.

Mỗi mặt bên có diện tích $\dfrac12\cdot6\cdot2=6$ cm². Ba mặt bên có diện tích $3\cdot6=18$ cm². Ta thấy $18=\dfrac12\cdot(3\cdot6)\cdot2$, tức là bằng **nửa chu vi đáy nhân với đường cao của mặt bên**. Kết quả này đúng cho mọi hình chóp đều, vì sao vậy? Bây giờ ta gọi tên các yếu tố rồi giải thích.

:::definition Hình chóp tam giác đều
Hình chóp có đáy là tam giác đều và các mặt bên là những tam giác cân bằng nhau gọi là **hình chóp tam giác đều**. Chân đường cao của nó là **tâm của đáy**, tức giao điểm ba đường trung tuyến của tam giác đáy.
:::

Với hình chóp tam giác đều $S.ABC$: $S$ là **đỉnh**, tam giác $ABC$ là **đáy**, $SA$, $SB$, $SC$ là các **cạnh bên**, đoạn $SO$ vuông góc với đáy ($O$ là tâm của đáy) là **đường cao**, độ dài $h=SO$. Gọi $M$ là trung điểm của $BC$, đoạn $SM$ là đường cao của mặt bên $SBC$, gọi là **trung đoạn** của hình chóp, độ dài $d=SM$.

:::diagram Hình chóp tam giác đều $S.ABC$
alt: Hình chóp tam giác đều S.ABC vẽ theo phép chiếu xiên; SO là đường cao đặt thẳng đứng nét đứt, M là trung điểm của BC, SM là trung đoạn, đường AM nét đứt đi qua O
point A 0,0 below-left
point B 4,0 below-right
point C 1.6,1.5 above
point O 1.87,0.5 below
point M 2.8,0.75 right
point S 1.87,4 above
segment S A
segment S B
segment S C
segment A B
segment B C
segment C A dashed
segment S O dashed
segment S M
segment A M dashed
:::

Một hình chóp tam giác đều chưa chắc là tứ diện đều. Tứ diện đều có cả sáu cạnh bằng nhau, còn hình chóp tam giác đều chỉ cần đáy đều và các cạnh bên bằng nhau, độ dài cạnh bên có thể khác cạnh đáy.

:::theorem Diện tích và thể tích của hình chóp đều
Cho hình chóp đều có chu vi đáy $2p$, trung đoạn $d$, diện tích đáy $S_{\text{đáy}}$ và chiều cao $h$. Khi đó
- diện tích xung quanh: $S_{xq}=p\cdot d$;
- diện tích toàn phần: $S_{tp}=S_{xq}+S_{\text{đáy}}$;
- thể tích: $V=\dfrac13S_{\text{đáy}}\cdot h$.
:::

**Vì sao?** Các mặt bên là những tam giác bằng nhau, mỗi mặt có đáy là một cạnh $a$ của đa giác đáy và đường cao $d$. Với $n$ mặt bên, ta có $S_{xq}=n\cdot\dfrac12ad=\dfrac12(na)d=p\cdot d$, vì $na$ là chu vi đáy. Công thức thể tích ta thừa nhận; có thể kiểm tra bằng thí nghiệm: một hình chóp và một hình lăng trụ cùng đáy, cùng chiều cao thì phải đổ đầy nước từ hình chóp ba lần mới đầy lăng trụ.

Để tìm $d$, $h$ hay cạnh bên khi chưa biết, ta dùng tam giác vuông $SOM$ (vuông tại $O$ vì $SO$ vuông góc với đáy):
$$SM^2=SO^2+OM^2\quad\text{hay}\quad d^2=h^2+OM^2,$$
và tương tự $SA^2=h^2+OA^2$. Trong tam giác đều cạnh $a$, trung tuyến $AM=\dfrac{a\sqrt3}2$ (theo định lí Pythagore) và tâm $O$ chia trung tuyến theo tỉ lệ $2:1$, nên
$$OM=\frac13AM=\frac{a\sqrt3}6,\qquad OA=\frac23AM=\frac{a\sqrt3}3.$$

:::example Tính diện tích xung quanh và thể tích
Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $6$ cm và trung đoạn bằng $2$ cm. Tính diện tích xung quanh, chiều cao và thể tích của hình chóp (làm tròn thể tích đến hàng phần mười).

**Lời giải.** Nửa chu vi đáy là $p=\dfrac{3\cdot6}2=9$ cm. Diện tích xung quanh là
$$S_{xq}=p\cdot d=9\cdot2=18\ (\text{cm}^2).$$

Gọi $M$ là trung điểm $BC$ và $O$ là tâm của đáy. Ta có $AM=\sqrt{6^2-3^2}=3\sqrt3$ và $OM=\dfrac13AM=\sqrt3$. Xét tam giác $SOM$ vuông tại $O$, ta có
$$h=SO=\sqrt{SM^2-OM^2}=\sqrt{4-3}=1\ (\text{cm}).$$

Diện tích đáy là $S_{\text{đáy}}=\dfrac12\cdot6\cdot3\sqrt3=9\sqrt3$ cm². Thể tích là
$$V=\frac13\cdot9\sqrt3\cdot1=3\sqrt3\approx5{,}2\ (\text{cm}^3).$$

Vậy $S_{xq}=18$ cm², chiều cao bằng $1$ cm và $V\approx5{,}2$ cm³.
:::

Bây giờ ta xét một vật thật, có chiều cao cho trước thay vì trung đoạn.

:::example Khối thuỷ tinh trang trí
Một khối thuỷ tinh trang trí có dạng hình chóp tam giác đều với cạnh đáy $12$ cm và chiều cao $5{,}5$ cm. Tính trung đoạn, diện tích xung quanh và thể tích của khối (làm tròn thể tích đến hàng phần mười).

**Lời giải.** Gọi $M$ là trung điểm một cạnh đáy và $O$ là tâm của đáy. Ta có $OM=\dfrac{12\sqrt3}6=2\sqrt3$, nên $OM^2=12$. Xét tam giác $SOM$ vuông tại $O$, ta có
$$d=SM=\sqrt{5{,}5^2+12}=\sqrt{42{,}25}=6{,}5\ (\text{cm}).$$

Nửa chu vi đáy là $p=\dfrac{3\cdot12}2=18$ cm, nên $S_{xq}=18\cdot6{,}5=117$ cm². Diện tích đáy là $\dfrac{12^2\sqrt3}4=36\sqrt3$ cm², nên
$$V=\frac13\cdot36\sqrt3\cdot5{,}5=66\sqrt3\approx114{,}3\ (\text{cm}^3).$$

Vậy trung đoạn bằng $6{,}5$ cm, $S_{xq}=117$ cm² và $V\approx114{,}3$ cm³.
:::

## Hình chóp tứ giác đều

:::definition Hình chóp tứ giác đều
Hình chóp có đáy là hình vuông và các mặt bên là những tam giác cân bằng nhau gọi là **hình chóp tứ giác đều**. Chân đường cao là **tâm của đáy**, tức giao điểm hai đường chéo của hình vuông.
:::

Các yếu tố được gọi tên như ở hình chóp tam giác đều. Với hình chóp tứ giác đều $S.ABCD$ có cạnh đáy $a$, tâm $O$ và $M$ là trung điểm $BC$, ta có $OM=\dfrac a2$ và $OB=\dfrac{a\sqrt2}2$. Do đó
$$d^2=h^2+\frac{a^2}4,\qquad SB^2=h^2+\frac{a^2}2.$$
Công thức ở phần trước vẫn đúng, với $p=2a$ và $S_{\text{đáy}}=a^2$.

:::diagram Hình chóp tứ giác đều $S.ABCD$
alt: Hình chóp tứ giác đều S.ABCD vẽ theo phép chiếu xiên; SO là đường cao nét đứt đặt thẳng đứng từ đỉnh S xuống tâm O của đáy, M là trung điểm BC, SM là trung đoạn, các cạnh khuất vẽ nét đứt
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.5 right
point D 1.2,1.5 above
point O 2.6,0.75 below
point M 4.6,0.75 right
point S 2.6,4.5 above
segment S A
segment S B
segment S C
segment S D dashed
segment A B
segment B C
segment C D dashed
segment D A dashed
segment S O dashed
segment O M dashed
segment S M
:::

Ta quay lại chiếc lều ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Chiếc lều hình chóp
Một chiếc lều có dạng hình chóp tứ giác đều với cạnh đáy $4$ m và chiều cao $1{,}5$ m. Tính diện tích vải để che bốn mặt bên và thể tích không khí trong lều.

**Lời giải.**

*Hiểu đề.* Ta biết cạnh đáy $a=4$ m và chiều cao $h=1{,}5$ m; cần tìm $S_{xq}$ (diện tích vải che bốn mặt bên) và $V$. Ta coi lều là hình chóp đều và bỏ qua phần vải để nối.

*Tìm cách giải.* Công thức $S_{xq}=p\cdot d$ cần trung đoạn $d$. Ta tìm $d$ từ tam giác vuông $SOM$ với $OM=\dfrac a2=2$ m và $SO=h=1{,}5$ m.

*Giải.* Ta có $d=SM=\sqrt{1{,}5^2+2^2}=\sqrt{6{,}25}=2{,}5$ (m). Nửa chu vi đáy là $p=\dfrac{4\cdot4}2=8$ m, nên
$$S_{xq}=8\cdot2{,}5=20\ (\text{m}^2),\qquad V=\frac13\cdot4^2\cdot1{,}5=8\ (\text{m}^3).$$

Vậy cần $20$ m² vải và lều chứa được $8$ m³ không khí.

*Nhìn lại.* Có cách khác không? Mỗi mặt bên có diện tích $\dfrac12\cdot4\cdot2{,}5=5$ m², bốn mặt là $20$ m², cùng kết quả. Kết quả có hợp lí không? Lều cao $1{,}5$ m và đáy $4\times4$ m, nếu là hình hộp thì chứa $4^2\cdot1{,}5=24$ m³; hình chóp chỉ chứa $\dfrac13$ của số đó, tức $8$ m³. Nếu hao hụt $10\%$ vải khi cắt và nối thì cần $20\cdot1{,}1=22$ m² vải.
:::

Khi đề cho cạnh bên thay vì chiều cao, ta tìm trung đoạn trước.

:::example Cho cạnh bên
Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy $10$ cm và cạnh bên $13$ cm. Tính diện tích xung quanh và diện tích toàn phần của hình chóp.

**Lời giải.** Gọi $M$ là trung điểm của $BC$. Tam giác $SBC$ cân tại $S$ nên $SM\perp BC$. Xét tam giác $SBM$ vuông tại $M$ có $BM=5$, $SB=13$, ta có
$$d=SM=\sqrt{13^2-5^2}=12\ (\text{cm}).$$

Nửa chu vi đáy là $p=\dfrac{4\cdot10}2=20$ cm, nên $S_{xq}=20\cdot12=240$ cm². Diện tích đáy là $10^2=100$ cm², nên $S_{tp}=240+100=340$ cm².

Vậy $S_{xq}=240$ cm² và $S_{tp}=340$ cm².

**Nhận xét.** Chiều cao cũng tìm được: $h=\sqrt{12^2-5^2}=\sqrt{119}\approx10{,}9$ cm.
:::

:::warning Những sai lầm thường gặp
- **Dùng chiều cao thay cho trung đoạn.** Sai: với chiếc lều ($a=4$, $h=1{,}5$), tính $S_{xq}=8\cdot1{,}5=12$ m². Lí do sai: công thức dùng đường cao của mặt bên $SM$, không phải đường cao $SO$ của hình chóp. Đúng: $d=2{,}5$ nên $S_{xq}=8\cdot2{,}5=20$ m².
- **Quên hệ số $\dfrac13$ khi tính thể tích.** Sai: $V=4^2\cdot1{,}5=24$ m³. Lí do sai: đó là thể tích hình hộp cùng đáy, cùng chiều cao. Đúng: $V=\dfrac13\cdot24=8$ m³.
- **Cho rằng mặt bên là tam giác đều.** Sai: hình chóp tam giác đều có ba mặt bên là ba tam giác đều. Lí do sai: mặt bên chỉ là tam giác cân; ở ví dụ đầu, cạnh bên $\sqrt{13}\approx3{,}6$ cm khác cạnh đáy $6$ cm. Đúng: mặt bên là các tam giác cân bằng nhau.
- **Nhầm khoảng cách $OM$.** Sai: ở hình chóp tam giác đều cạnh đáy $a$, lấy $OM=\dfrac a2$. Lí do sai: $\dfrac a2$ là $BM$; $O$ là trọng tâm nên $OM=\dfrac13AM=\dfrac{a\sqrt3}6$. Đúng: chỉ ở hình vuông mới có $OM=\dfrac a2$.
:::

**Kết nối.** Bài này dùng định lí Pythagore (trong các tam giác vuông $SOM$, $SBM$), tính chất trọng tâm của tam giác và diện tích tam giác, hình vuông. Nó chuẩn bị cho phần hình khối ở lớp 9 (hình nón, hình cầu), nơi ta lại gặp ý "xung quanh" và "thể tích bằng một phần ba tích đáy với chiều cao".

## Thuật ngữ

:::terms
- hình chóp tam giác đều | regular triangular pyramid
- hình chóp tứ giác đều | regular square-based pyramid
- đỉnh | apex
- đáy | base
- mặt bên | lateral face
- cạnh bên | lateral edge
- đường cao | height (perpendicular height)
- trung đoạn | slant height
- diện tích xung quanh | lateral surface area
- diện tích toàn phần | total surface area
- thể tích | volume
:::

## Tóm tắt

- Hình chóp đều: đáy là đa giác đều, các mặt bên là tam giác cân bằng nhau, chân đường cao là tâm đáy.
- $S_{xq}=p\cdot d$ ($p$ là nửa chu vi đáy, $d$ là trung đoạn), $S_{tp}=S_{xq}+S_{\text{đáy}}$, $V=\dfrac13S_{\text{đáy}}\cdot h$.
- $d^2=h^2+OM^2$ và $SA^2=h^2+OA^2$. Tam giác đều cạnh $a$: $OM=\dfrac{a\sqrt3}6$, $OA=\dfrac{a\sqrt3}3$. Hình vuông cạnh $a$: $OM=\dfrac a2$, $OB=\dfrac{a\sqrt2}2$.
- Trung đoạn khác đường cao: trung đoạn nằm trong mặt bên, đường cao vuông góc với đáy.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Mỗi khẳng định sau đúng hay sai?

a) Hình chóp tam giác đều có ba mặt bên là ba tam giác đều.

b) Chân đường cao của hình chóp tam giác đều là trọng tâm của tam giác đáy.

c) Các cạnh bên của hình chóp tứ giác đều bằng nhau.

d) Tứ diện đều là một hình chóp tam giác đều.

::hint
**Kiến thức:** định nghĩa hình chóp đều và tứ diện đều.

**Gợi ý các bước:**
1. Nhớ các mặt bên của hình chóp đều là tam giác gì.
2. Với d), kiểm tra đáy và chân đường cao của tứ diện đều.

::solution
a) **Sai**: các mặt bên là tam giác cân, không nhất thiết là tam giác đều.

b) **Đúng**: chân đường cao là tâm của đáy, tức trọng tâm của tam giác đều.

c) **Đúng**: mặt bên là những tam giác cân bằng nhau nên các cạnh bên bằng nhau.

d) **Đúng**: tứ diện đều có đáy là tam giác đều và các cạnh bên bằng nhau (bằng cạnh đáy), nên chân đường cao là tâm của đáy.

**Đáp số.** a) Sai; b) Đúng; c) Đúng; d) Đúng.
:::

:::exercise
Cho hình chóp tam giác đều có cạnh đáy $8$ cm và trung đoạn $3$ cm. Tính diện tích xung quanh.

::hint
**Kiến thức:** $S_{xq}=p\cdot d$ với $p$ là nửa chu vi đáy.

**Gợi ý các bước:**
1. Tính nửa chu vi đáy.
2. Nhân với trung đoạn.

::solution
Nửa chu vi đáy là $p=\dfrac{3\cdot8}2=12$ cm. Diện tích xung quanh là $S_{xq}=12\cdot3=36$ cm².

**Đáp số.** $36$ cm².
:::

:::exercise
Cho hình chóp tứ giác đều có cạnh đáy $8$ cm và trung đoạn $5$ cm. Tính diện tích xung quanh, diện tích toàn phần, chiều cao và thể tích.

::hint
**Kiến thức:** $S_{xq}=p\cdot d$; $d^2=h^2+\left(\dfrac a2\right)^2$; $V=\dfrac13a^2h$.

**Gợi ý các bước:**
1. Tính $S_{xq}$ và $S_{tp}$.
2. Tìm $h$ từ tam giác vuông $SOM$ với $OM=4$, rồi tính $V$.

::solution
Nửa chu vi đáy là $p=\dfrac{4\cdot8}2=16$ cm nên $S_{xq}=16\cdot5=80$ cm² và $S_{tp}=80+8^2=144$ cm². Xét tam giác $SOM$ vuông tại $O$ có $OM=4$, $SM=5$, ta có $h=\sqrt{5^2-4^2}=3$ cm. Thể tích là $V=\dfrac13\cdot64\cdot3=64$ cm³.

**Đáp số.** $S_{xq}=80$ cm²; $S_{tp}=144$ cm²; $h=3$ cm; $V=64$ cm³.
:::

:::exercise
Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy $6$ cm và chiều cao $1$ cm. Tính độ dài cạnh bên $SA$ (làm tròn đến hàng phần mười).

::hint
**Kiến thức:** $SA^2=h^2+OA^2$ với $OA=\dfrac{a\sqrt3}3$.

**Gợi ý các bước:**
1. Tính $OA$.
2. Xét tam giác $SOA$ vuông tại $O$.

::solution
Ta có $OA=\dfrac{6\sqrt3}3=2\sqrt3$. Xét tam giác $SOA$ vuông tại $O$, ta có $SA=\sqrt{1^2+(2\sqrt3)^2}=\sqrt{13}\approx3{,}6$ (cm).

**Đáp số.** $SA\approx3{,}6$ cm.
:::

:::exercise
Nhớ lại định lí Pythagore. Cho hình chóp tứ giác đều có cạnh đáy $10$ cm và chiều cao $12$ cm. Tính trung đoạn, diện tích xung quanh và thể tích.

::hint
**Kiến thức:** $d^2=h^2+OM^2$ với $OM=\dfrac a2$.

**Gợi ý các bước:**
1. Tính $d$ bằng tam giác vuông $SOM$.
2. Dùng các công thức của $S_{xq}$ và $V$.

::solution
Xét tam giác $SOM$ vuông tại $O$ có $OM=5$, $SO=12$, ta có $d=\sqrt{12^2+5^2}=13$ cm. Nửa chu vi đáy là $20$ cm nên $S_{xq}=20\cdot13=260$ cm². Thể tích là $V=\dfrac13\cdot10^2\cdot12=400$ cm³.

**Đáp số.** $d=13$ cm; $S_{xq}=260$ cm²; $V=400$ cm³.
:::

:::exercise
Một khối thuỷ tinh có dạng hình chóp tam giác đều với cạnh đáy $12$ cm và chiều cao $5{,}5$ cm. Người ta dán giấy màu lên ba mặt bên. Tính diện tích giấy cần dùng và thể tích khối thuỷ tinh (làm tròn thể tích đến hàng phần mười).

::hint
**Kiến thức:** tìm trung đoạn từ $d^2=h^2+OM^2$ với $OM=\dfrac{a\sqrt3}6$.

**Gợi ý các bước:**
1. Tính $OM$ rồi $d$.
2. Tính $S_{xq}$ và $V$.

::solution
Ta có $OM=\dfrac{12\sqrt3}6=2\sqrt3$ nên $d=\sqrt{5{,}5^2+12}=6{,}5$ cm. Nửa chu vi đáy là $18$ cm nên $S_{xq}=18\cdot6{,}5=117$ cm². Diện tích đáy là $36\sqrt3$ cm² nên $V=\dfrac13\cdot36\sqrt3\cdot5{,}5=66\sqrt3\approx114{,}3$ cm³.

**Đáp số.** $117$ cm²; $\approx114{,}3$ cm³.
:::

:::exercise
Mái của một ngôi đình có dạng hình chóp tứ giác đều với cạnh đáy $6$ m và chiều cao $4$ m. Giả sử mỗi mét vuông mái lợp ngói hết $180\,000$ đồng. Tính chi phí lợp ngói cho bốn mặt của mái.

::hint
**Kiến thức:** diện tích mái là diện tích xung quanh; tìm trung đoạn trước.

**Gợi ý các bước:**
1. Tính $d$ từ tam giác $SOM$ với $OM=3$.
2. Tính $S_{xq}$ rồi nhân với giá tiền.

::solution
Xét tam giác $SOM$ vuông tại $O$ có $OM=3$, $SO=4$, ta có $d=\sqrt{4^2+3^2}=5$ m. Nửa chu vi đáy là $12$ m nên $S_{xq}=12\cdot5=60$ m². Chi phí là $60\cdot180\,000=10\,800\,000$ (đồng).

**Đáp số.** $10\,800\,000$ đồng.
:::

:::exercise
Một cái phễu có dạng hình chóp tứ giác đều đặt đỉnh xuống dưới, miệng phễu là hình vuông cạnh $30$ cm và chiều sâu của phễu là $40$ cm. Phễu chứa được tối đa bao nhiêu lít nước? ($1$ lít $=1000$ cm³.)

::hint
**Kiến thức:** $V=\dfrac13S_{\text{đáy}}\cdot h$; đổi cm³ ra lít.

**Gợi ý các bước:**
1. Tính diện tích miệng phễu.
2. Tính $V$ rồi đổi đơn vị.

::solution
Diện tích miệng phễu là $30^2=900$ cm². Thể tích là $V=\dfrac13\cdot900\cdot40=12\,000$ cm³ $=12$ lít.

**Đáp số.** $12$ lít.
:::

:::exercise Thử thách
Cho tứ diện đều $ABCD$ có cạnh bằng $6$. Tính chiều cao hạ từ đỉnh $D$ xuống mặt phẳng $(ABC)$ và thể tích của tứ diện (làm tròn đến hàng phần mười).

::hint
**Kiến thức:** tứ diện đều là hình chóp tam giác đều có cạnh bên bằng cạnh đáy; $DO^2=DA^2-OA^2$ với $OA=\dfrac{a\sqrt3}3$.

**Gợi ý các bước:**
1. Tính $OA$ cho đáy $ABC$ có cạnh $6$.
2. Tính $h=DO$ rồi $V$.

::solution
Gọi $O$ là tâm của tam giác đều $ABC$. Ta có $OA=\dfrac{6\sqrt3}3=2\sqrt3$. Xét tam giác $DOA$ vuông tại $O$, ta có $h=DO=\sqrt{6^2-12}=\sqrt{24}=2\sqrt6\approx4{,}9$. Diện tích đáy là $9\sqrt3$ nên $V=\dfrac13\cdot9\sqrt3\cdot2\sqrt6=18\sqrt2\approx25{,}5$.

**Đáp số.** $h=2\sqrt6\approx4{,}9$; $V=18\sqrt2\approx25{,}5$.
:::

## Kiểm tra mini

:::quiz
::mc
Hình chóp tứ giác đều $S.ABCD$ có cạnh đáy $16$ và chiều cao $6$. Trung đoạn của hình chóp bằng
A. $14$.
B. $2\sqrt{41}$.
C. $2\sqrt{73}$.
D. $10$.
::key D
$OM=8$ nên $d=\sqrt{6^2+8^2}=10$. Phương án A cộng $h$ với $OM$, B dùng $OB=8\sqrt2$ thay cho $OM$, C dùng cả cạnh đáy $16$.

::mc
Hình chóp tam giác đều có cạnh đáy $6$ cm và trung đoạn $5$ cm. Diện tích xung quanh bằng
A. $45$ cm².
B. $90$ cm².
C. $15$ cm².
D. $30$ cm².
::key A
$p=9$ nên $S_{xq}=9\cdot5=45$. Phương án B quên $\dfrac12$ (dùng chu vi), C là diện tích một mặt bên, D là $6\cdot5$.

::mc
Hình chóp tứ giác đều có cạnh đáy $6$ cm và chiều cao $5$ cm. Thể tích bằng
A. $180$ cm³.
B. $60$ cm³.
C. $30$ cm³.
D. $40$ cm³.
::key B
$V=\dfrac13\cdot36\cdot5=60$. Phương án A quên $\dfrac13$, C dùng $\dfrac12$, D dùng chu vi đáy $24$ thay cho diện tích đáy.

::mc
Hình chóp tam giác đều có cạnh đáy $6$ và chiều cao $1$. Khoảng cách $OM$ từ tâm đáy đến một cạnh đáy bằng
A. $3$.
B. $2\sqrt3$.
C. $\sqrt3$.
D. $3\sqrt3$.
::key C
$OM=\dfrac{a\sqrt3}6=\sqrt3$. Phương án A là $\dfrac a2$, B là $OA$, D là trung tuyến $AM$.

::tf
Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $12$ và chiều cao bằng $8$ ($O$ là tâm đáy, $M$ là trung điểm $BC$). Xét tính đúng sai của các mệnh đề sau:
a) $SM=10$.
b) Diện tích xung quanh bằng $480$.
c) Cạnh bên $SB=8$.
d) Thể tích bằng $384$.
::key Đ S S Đ
a) Đúng: $SM=\sqrt{8^2+6^2}=10$. b) Sai: $S_{xq}=24\cdot10=240$; $480$ là kết quả khi quên $\dfrac12$. c) Sai: $SB=\sqrt{8^2+(6\sqrt2)^2}=\sqrt{136}$, còn $8$ là chiều cao. d) Đúng: $V=\dfrac13\cdot144\cdot8=384$.

::sa
Hình chóp tam giác đều có cạnh đáy $6$ cm và chiều cao $2$ cm. Tính thể tích của hình chóp (đơn vị: cm³, làm tròn đến hàng phần mười).
::key 10,4
$S_{\text{đáy}}=9\sqrt3$ nên $V=\dfrac13\cdot9\sqrt3\cdot2=6\sqrt3\approx10{,}4$.

::sa
Hình chóp tứ giác đều có cạnh đáy $6$ dm và trung đoạn $7$ dm. Tính diện tích toàn phần (đơn vị: dm²).
::key 120
$S_{xq}=12\cdot7=84$ và $S_{\text{đáy}}=36$ nên $S_{tp}=84+36=120$.
:::
