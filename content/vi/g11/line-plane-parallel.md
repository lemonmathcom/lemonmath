---
title: Đường thẳng và mặt phẳng song song
description: Học vị trí tương đối của đường thẳng và mặt phẳng, điều kiện và tính chất của đường thẳng song song mặt phẳng, rồi áp dụng chứng minh và tìm giao tuyến.
minutes: 25
---

:::goals
- Phân biệt ba vị trí tương đối của đường thẳng và mặt phẳng: nằm trong, cắt nhau, song song.
- Phát biểu điều kiện để một đường thẳng song song với một mặt phẳng và dùng nó để chứng minh.
- Dùng tính chất: nếu đường thẳng song song với mặt phẳng thì giao tuyến của mặt phẳng chứa nó với mặt phẳng đó song song với nó.
- Giải thích các tình huống thực tế bằng quan hệ đường thẳng song song với mặt phẳng.
:::

Khung thành bóng đá có hai cột dọc thẳng đứng cắm xuống mặt sân phẳng, và một xà ngang nối hai đỉnh cột. Hai cột cao bằng nhau. Dù ta kéo dài xà ngang về hai phía đến đâu, nó cũng không chạm mặt sân.

Vì sao xà ngang luôn song song với mặt sân? Để trả lời, ta cần biết khi nào một đường thẳng song song với một mặt phẳng, và cách kiểm tra điều đó mà không phải kéo dài đường thẳng ra vô tận.

## Vị trí tương đối của đường thẳng và mặt phẳng

Cho đường thẳng $d$ và mặt phẳng $(P)$. Theo tính chất 3 ở bài đầu chương, nếu $d$ có hai điểm chung với $(P)$ thì $d$ nằm trọn trong $(P)$. Vì vậy số điểm chung của $d$ và $(P)$ chỉ có thể là vô số, đúng một, hoặc không có điểm nào.

:::definition Vị trí tương đối của đường thẳng và mặt phẳng
- $d$ **nằm trong** $(P)$ (viết $d\subset(P)$): $d$ và $(P)$ có vô số điểm chung.
- $d$ **cắt** $(P)$ tại điểm $A$: $d$ và $(P)$ có đúng một điểm chung $A$.
- $d$ **song song** với $(P)$ (viết $d\parallel(P)$): $d$ và $(P)$ không có điểm chung.
:::

## Điều kiện để đường thẳng song song với mặt phẳng

Muốn chứng minh $d\parallel(P)$ bằng định nghĩa, ta phải kiểm tra vô số điểm của $d$. Định lí sau cho cách kiểm tra đơn giản hơn nhiều.

:::theorem Điều kiện để đường thẳng song song với mặt phẳng
Nếu đường thẳng $d$ không nằm trong mặt phẳng $(P)$ và song song với một đường thẳng $a$ nằm trong $(P)$ thì $d\parallel(P)$.
:::

Vì sao đúng? Hai đường thẳng song song $d$ và $a$ xác định một mặt phẳng $(Q)$, và $(Q)\cap(P)=a$ (vì $d\not\subset(P)$). Giả sử $d$ có điểm chung $I$ với $(P)$. Khi đó $I$ thuộc cả $(Q)$ lẫn $(P)$, nên $I\in a$. Như vậy $d$ và $a$ có điểm chung $I$, mâu thuẫn với $d\parallel a$. Vậy $d$ và $(P)$ không có điểm chung.

## Tính chất của đường thẳng song song với mặt phẳng

:::theorem Tính chất
1. Nếu đường thẳng $d$ song song với mặt phẳng $(P)$ thì mọi mặt phẳng $(Q)$ chứa $d$ và cắt $(P)$ đều cắt $(P)$ theo một giao tuyến $a$ song song với $d$.
2. Nếu hai mặt phẳng cắt nhau cùng song song với một đường thẳng thì giao tuyến của chúng song song với đường thẳng đó.
:::

Vì sao tính chất 1 đúng? Hai đường thẳng $d$ và $a$ cùng nằm trong $(Q)$. Chúng không có điểm chung, vì $a\subset(P)$ còn $d$ không có điểm chung với $(P)$. Hai đường đồng phẳng không có điểm chung thì song song, nên $a\parallel d$. Tính chất 2 suy ra bằng cách lấy một mặt phẳng phụ chứa $d$ và đi qua một điểm của giao tuyến, rồi áp dụng tính chất 1 hai lần.

Chú ý: hai mệnh đề trên khác nhau. Điều kiện cho phép *kết luận* $d\parallel(P)$ khi biết đường thẳng song song nằm trong $(P)$; tính chất cho phép *suy ra* một đường song song khi đã biết $d\parallel(P)$.

:::example Xà ngang của khung thành
Hai cột $AA'$ và $BB'$ của khung thành thẳng đứng, cao bằng nhau, chân $A$, $B$ nằm trên mặt sân $(P)$ phẳng. Giải thích vì sao xà ngang $A'B'$ song song với mặt sân.

**Hiểu đề.** Ta cần chứng minh $A'B'\parallel(P)$, biết $AA'$ và $BB'$ cùng thẳng đứng (nên song song) và $AA'=BB'$.

**Tìm cách giải.** Dùng điều kiện ở trên: tìm một đường thẳng nằm trong $(P)$ song song với $A'B'$; đó phải là $AB$.

**Giải.** Hai cột $AA'$ và $BB'$ song song và bằng nhau, nên tứ giác $AA'B'B$ là hình bình hành (hình học phẳng trong mặt phẳng chứa hai cột). Do đó $A'B'\parallel AB$. Đường thẳng $AB$ nằm trong $(P)$ còn $A'B'$ không nằm trong $(P)$ (vì $A'\notin(P)$).

Theo điều kiện, $A'B'\parallel(P)$. Vậy xà ngang song song với mặt sân.

**Nhìn lại.** Nếu hai cột cao không bằng nhau (chẳng hạn $3$ m và $3{,}2$ m) thì $A'B'$ không song song với $AB$ và sẽ cắt $(P)$ khi kéo dài: xà ngang bị nghiêng. Điều kiện hai cột bằng nhau là cần thiết.
:::

:::example Đường trung bình và mặt phẳng
Cho tứ diện $ABCD$. Gọi $M$, $N$ lần lượt là trung điểm của $AB$, $AC$. Chứng minh $MN\parallel(BCD)$.

**Lời giải.** Trong tam giác $ABC$, $MN$ là đường trung bình nên $MN\parallel BC$. Đường thẳng $BC$ nằm trong $(BCD)$. Đường thẳng $MN$ không nằm trong $(BCD)$, vì nếu có thì $M\in(BCD)$ và $A\in AB$ cũng thuộc $(BCD)$, nên bốn điểm $A$, $B$, $C$, $D$ đồng phẳng, vô lí.

Theo điều kiện, $MN\parallel(BCD)$.
:::

:::diagram Hình chóp $S.ABCD$ có đáy là hình bình hành, $O=AC\cap BD$ và $M$ là trung điểm của $SA$
alt: Hình chóp S.ABCD với đáy là hình bình hành, hai đường chéo AC và BD cắt nhau tại O, điểm M là trung điểm của SA, và các đoạn MO, MD, MB
point A 0,0 below-left
point B 4,0 below-right
point C 5.5,1.5 right
point D 1.5,1.5 left
point S 2.7,4 above
point O 2.75,0.75 below
point M 1.35,2 left
segment S A
segment S B
segment S C
segment A B
segment B C
segment S D dashed
segment A D dashed
segment C D dashed
segment A C dashed
segment B D dashed
segment M O dashed
segment M D dashed
segment M B
:::

:::example Đường thẳng song song với mặt phẳng chứa đường trung bình
Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$, tâm $O$ là giao điểm của $AC$ và $BD$. Gọi $M$ là trung điểm của $SA$. Chứng minh $SC\parallel(MBD)$.

**Lời giải.** Vì $ABCD$ là hình bình hành nên $O$ là trung điểm của $AC$. Trong tam giác $SAC$, $MO$ là đường trung bình ($M$, $O$ là trung điểm của $SA$, $AC$), nên $MO\parallel SC$.

Đường thẳng $MO$ nằm trong $(MBD)$, vì $O\in BD$ và $M\in(MBD)$. Đường thẳng $SC$ không nằm trong $(MBD)$ (nếu có thì $S$ và $M$ cùng thuộc mặt phẳng này, kéo theo $A\in SM$ cũng thuộc, nên $A$, $B$, $D$, $S$ đồng phẳng, vô lí).

Theo điều kiện, $SC\parallel(MBD)$.
:::

:::example Chứng minh hai đường thẳng song song
Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Gọi $M$ là một điểm thuộc cạnh $SA$ và $N$ là giao điểm của $SD$ với $(MBC)$. Chứng minh $MN\parallel BC$.

**Lời giải.** Vì $ABCD$ là hình bình hành nên $BC\parallel AD$, mà $AD\subset(SAD)$ và $BC\not\subset(SAD)$. Theo điều kiện, $BC\parallel(SAD)$.

Mặt phẳng $(MBC)$ chứa $BC$ và cắt $(SAD)$ theo giao tuyến $MN$ (vì $M$ và $N$ cùng thuộc cả hai mặt phẳng). Theo tính chất 1, $MN\parallel BC$.

Vậy $MN\parallel BC$ (và do đó $MN\parallel AD$).
:::

:::example Giao tuyến song song với mặt đáy
Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Chứng minh giao tuyến $d$ của $(SAB)$ và $(SCD)$ song song với mặt phẳng $(ABCD)$.

**Lời giải.** Từ bài hai đường thẳng song song, $d$ đi qua $S$ và song song với $AB$. Đường thẳng $AB$ nằm trong $(ABCD)$, còn $d$ không nằm trong $(ABCD)$ vì $S\notin(ABCD)$.

Theo điều kiện, $d\parallel(ABCD)$.
:::

**Kết nối.** Đường thẳng song song với mặt phẳng nối hai khái niệm ở các bài trước: đường thẳng song song và mặt phẳng. Điều kiện và tính chất ở bài này là công cụ chính để chứng minh song song và tìm giao tuyến trong bài hai mặt phẳng song song, nơi ta cần hai đường thẳng cắt nhau cùng song song với một mặt phẳng.

:::warning Những sai lầm thường gặp
- **Quên điều kiện $d\not\subset(P)$.** Sai: $d\parallel a$ và $a\subset(P)$ nên $d\parallel(P)$. Vì sao sai: $d$ có thể nằm trong $(P)$. Đúng: cần thêm $d\not\subset(P)$.
- **Cho rằng đường thẳng song song với mặt phẳng thì song song với mọi đường thẳng trong mặt phẳng đó.** Sai: $d\parallel(P)$ nên $d\parallel b$ với mọi $b\subset(P)$. Vì sao sai: $d$ có thể chéo nhau với $b$. Đúng: $d$ song song với những đường thẳng trong $(P)$ cùng phương với nó, và chéo nhau với các đường còn lại.
- **Dùng tính chất 1 với mặt phẳng không chứa $d$.** Sai: $d\parallel(P)$ nên giao tuyến của $(P)$ với mặt phẳng $(Q)$ bất kì song song $d$. Vì sao sai: nếu $(Q)\not\supset d$ thì giao tuyến không nhất thiết song song $d$. Đúng: $(Q)$ phải chứa $d$.
- **Cho rằng hai mặt phẳng cùng song song với một đường thẳng thì song song nhau.** Sai: $d\parallel(P)$ và $d\parallel(Q)$ nên $(P)\parallel(Q)$. Vì sao sai: hai mái nhà cắt nhau cùng song song với mép sân, nhưng không song song nhau. Đúng: giao tuyến của chúng song song với $d$ (tính chất 2).
:::

## Thuật ngữ

:::terms
- đường thẳng song song với mặt phẳng | line parallel to a plane
- nằm trong mặt phẳng | lying in a plane
- cắt mặt phẳng | meeting a plane
- giao tuyến | line of intersection
- đường trung bình | midsegment
- hình bình hành | parallelogram
- mặt đáy | base
- tứ diện | tetrahedron
:::

## Tóm tắt

- Đường thẳng $d$ và mặt phẳng $(P)$ có ba vị trí: $d\subset(P)$, $d$ cắt $(P)$ tại một điểm, hoặc $d\parallel(P)$ (không có điểm chung).
- Nếu $d\not\subset(P)$ và $d\parallel a$ với $a\subset(P)$ thì $d\parallel(P)$.
- Nếu $d\parallel(P)$ thì mọi mặt phẳng chứa $d$ cắt $(P)$ theo giao tuyến song song với $d$.
- Nếu hai mặt phẳng cắt nhau cùng song song với $d$ thì giao tuyến của chúng song song với $d$.
- Cách chứng minh $d\parallel(P)$: tìm $a\subset(P)$ song song với $d$ (thường là một đường trung bình hoặc một cạnh của hình bình hành) và kiểm tra $d\not\subset(P)$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh $AB\parallel(CDD'C')$ và $AC\parallel(A'B'C'D')$.

::hint
**Kiến thức:** các mặt của hình hộp là hình bình hành; $d\parallel a\subset(P)$ và $d\not\subset(P)$ thì $d\parallel(P)$.

**Gợi ý các bước:**
1. $AB\parallel CD$ và $CD\subset(CDD'C')$.
2. $AC\parallel A'C'$ và $A'C'\subset(A'B'C'D')$.

::solution
$ABCD$ là hình bình hành nên $AB\parallel CD$, mà $CD\subset(CDD'C')$ và $AB\not\subset(CDD'C')$, nên $AB\parallel(CDD'C')$. Tương tự $AA'C'C$ là hình bình hành nên $AC\parallel A'C'\subset(A'B'C'D')$, và $AC\not\subset(A'B'C'D')$, nên $AC\parallel(A'B'C'D')$.

**Đáp số.** $AB\parallel(CDD'C')$; $AC\parallel(A'B'C'D')$.
:::

:::exercise
Cho tứ diện $ABCD$. Gọi $M$, $N$, $P$ lần lượt là trung điểm của $AB$, $BC$, $CD$. Chứng minh $MN\parallel(ACD)$ và $NP\parallel(ABD)$.

::hint
**Kiến thức:** đường trung bình của tam giác song song với cạnh thứ ba.

**Gợi ý các bước:**
1. $MN\parallel AC$ và $AC\subset(ACD)$.
2. $NP\parallel BD$ và $BD\subset(ABD)$.

::solution
Trong tam giác $ABC$, $MN\parallel AC$ và $AC\subset(ACD)$, $MN\not\subset(ACD)$, nên $MN\parallel(ACD)$. Trong tam giác $BCD$, $NP\parallel BD$ và $BD\subset(ABD)$, $NP\not\subset(ABD)$, nên $NP\parallel(ABD)$.

**Đáp số.** $MN\parallel(ACD)$; $NP\parallel(ABD)$.
:::

:::exercise
Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$ tâm $O$. Gọi $N$ là trung điểm của $SB$. Chứng minh $SD\parallel(NAC)$.

::hint
**Kiến thức:** $ON$ là đường trung bình của tam giác $SBD$.

**Gợi ý các bước:**
1. Chứng minh $ON\parallel SD$.
2. $ON\subset(NAC)$.

::solution
$O$ là trung điểm của $BD$ và $N$ là trung điểm của $SB$ nên $ON$ là đường trung bình của tam giác $SBD$, do đó $ON\parallel SD$. Đường thẳng $ON$ nằm trong $(NAC)$ (vì $O\in AC$), còn $SD\not\subset(NAC)$, nên $SD\parallel(NAC)$.

**Đáp số.** $SD\parallel(NAC)$.
:::

:::exercise
Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Gọi $M$ là trung điểm của $SC$ và $N$ là giao điểm của $SB$ với $(ADM)$. Chứng minh $MN\parallel BC$ và $N$ là trung điểm của $SB$.

::hint
**Kiến thức:** $BC\parallel AD$ nên $BC\parallel(ADM)$; $(SBC)\cap(ADM)=MN$.

**Gợi ý các bước:**
1. Chứng minh $BC\parallel(ADM)$.
2. Áp dụng tính chất 1 với mặt phẳng $(SBC)$.

::solution
Vì $BC\parallel AD\subset(ADM)$ và $BC\not\subset(ADM)$ nên $BC\parallel(ADM)$. Mặt phẳng $(SBC)$ chứa $BC$ và cắt $(ADM)$ theo $MN$, nên $MN\parallel BC$. Trong tam giác $SBC$, $M$ là trung điểm $SC$ và $MN\parallel BC$ nên $N$ là trung điểm $SB$.

**Đáp số.** $MN\parallel BC$ và $N$ là trung điểm của $SB$.
:::

:::exercise
Theo Luật bóng đá của FIFA, khung thành tiêu chuẩn có hai cột dọc cách nhau $7{,}32$ m (khoảng cách giữa hai chân cột) và cao $2{,}44$ m. Hai cột thẳng đứng, chân cột nằm trên mặt sân phẳng. Chứng minh xà ngang song song với mặt sân và tính độ dài xà ngang giữa hai đỉnh cột.

::hint
**Kiến thức:** hai cột song song và bằng nhau nên chân và đỉnh hai cột tạo thành hình bình hành.

**Gợi ý các bước:**
1. Chứng minh xà ngang song song với đoạn nối hai chân cột.
2. Dùng tính chất của hình bình hành để so sánh độ dài.

::solution
Gọi chân hai cột là $A$, $B$ và đỉnh là $A'$, $B'$. $AA'$ và $BB'$ song song và bằng nhau ($2{,}44$ m) nên $AA'B'B$ là hình bình hành, do đó $A'B'\parallel AB$ và $A'B'=AB=7{,}32$ m. $AB$ nằm trong mặt sân và $A'B'$ không nằm trong mặt sân nên $A'B'\parallel$ mặt sân.

**Đáp số.** Xà ngang song song với mặt sân và dài $7{,}32$ m.
:::

:::exercise
Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Xét tính đúng sai của các mệnh đề sau:

a) $AD\parallel(SBC)$.

b) $SA\parallel(ABCD)$.

c) $BC\parallel(SAD)$.

d) $AB\parallel(SAD)$.

::hint
**Kiến thức:** điều kiện $d\parallel a\subset(P)$, $d\not\subset(P)$.

**Gợi ý các bước:**
1. a), c) Dùng $AD\parallel BC$.
2. b), d) Xét điểm chung của đường thẳng với mặt phẳng.

::solution
a) **Đúng**: $AD\parallel BC\subset(SBC)$ và $AD\not\subset(SBC)$.

b) **Sai**: $SA$ cắt $(ABCD)$ tại $A$.

c) **Đúng**: $BC\parallel AD\subset(SAD)$ và $BC\not\subset(SAD)$.

d) **Sai**: $AB$ cắt $(SAD)$ tại $A$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise Ôn tập
Chứng minh rằng nếu hai đường thẳng phân biệt $a$, $b$ song song và $a\parallel(P)$ thì $b\parallel(P)$ hoặc $b\subset(P)$.

::hint
**Kiến thức:** ở bài hai đường thẳng song song, hai đường thẳng phân biệt cùng song song với đường thứ ba thì song song nhau; ở bài này, tính chất 1.

**Gợi ý các bước:**
1. Tìm đường thẳng $a'\subset(P)$ song song với $a$.
2. So sánh $b$ với $a'$.

::solution
Lấy điểm $A\in(P)$ và mặt phẳng $(Q)$ chứa $a$ và $A$. Vì $a\parallel(P)$ nên $(Q)$ cắt $(P)$ theo đường thẳng $a'$ qua $A$ và $a'\parallel a$. Nếu $b=a'$ thì $b\subset(P)$. Nếu $b\ne a'$ thì $b\parallel a'$ (cùng song song với $a$), với $a'\subset(P)$; khi $b\not\subset(P)$, theo điều kiện ta có $b\parallel(P)$.

**Đáp số.** $b\parallel(P)$ hoặc $b\subset(P)$.
:::

:::exercise Thử thách
Cho tứ diện $ABCD$. Lấy điểm $M$ thuộc cạnh $AB$. Mặt phẳng $(\alpha)$ qua $M$ song song với $AC$ và $BD$ cắt các cạnh $BC$, $CD$, $DA$ lần lượt tại $N$, $P$, $Q$. Chứng minh $MNPQ$ là hình bình hành.

::hint
**Kiến thức:** nếu $d\parallel(\alpha)$ thì mặt phẳng chứa $d$ cắt $(\alpha)$ theo giao tuyến song song $d$.

**Gợi ý các bước:**
1. $MN=(\alpha)\cap(ABC)$ và $PQ=(\alpha)\cap(ACD)$ đều song song $AC$.
2. $MQ=(\alpha)\cap(ABD)$ và $NP=(\alpha)\cap(BCD)$ đều song song $BD$.

::solution
Vì $AC\parallel(\alpha)$, mặt phẳng $(ABC)$ chứa $AC$ cắt $(\alpha)$ theo $MN$ nên $MN\parallel AC$; mặt phẳng $(ACD)$ chứa $AC$ cắt $(\alpha)$ theo $PQ$ nên $PQ\parallel AC$. Suy ra $MN\parallel PQ$. Tương tự, vì $BD\parallel(\alpha)$, $MQ=(\alpha)\cap(ABD)\parallel BD$ và $NP=(\alpha)\cap(BCD)\parallel BD$, nên $MQ\parallel NP$. Tứ giác $MNPQ$ có các cặp cạnh đối song song nên là hình bình hành.

**Đáp số.** $MNPQ$ là hình bình hành.
:::

## Kiểm tra mini

:::quiz
::mc
Số điểm chung của một đường thẳng và một mặt phẳng không thể là
A. $2$.
B. $0$.
C. $1$.
D. vô số.
::key A
Nếu đường thẳng có hai điểm chung với mặt phẳng thì nó nằm trong mặt phẳng, nên có vô số điểm chung. Vậy số điểm chung là $0$, $1$ hoặc vô số, không thể là $2$.

::mc
Cho hai đường thẳng $a\parallel b$ với $b\subset(P)$ và $a\not\subset(P)$. Khi đó
A. $a$ cắt $(P)$.
B. $a\parallel(P)$.
C. $a\subset(P)$.
D. $a$ chéo nhau với $(P)$.
::key B
Đây là điều kiện để đường thẳng song song với mặt phẳng. Phương án C trái với giả thiết $a\not\subset(P)$.

::mc
Cho tứ diện $ABCD$; $M$, $N$ là trung điểm của $AB$, $AC$. Đường thẳng $MN$ song song với mặt phẳng nào sau đây?
A. $(ABC)$.
B. $(ABD)$.
C. $(BCD)$.
D. $(ACD)$.
::key C
$MN\parallel BC\subset(BCD)$ và $MN\not\subset(BCD)$. Phương án A chứa $MN$, các phương án B và D cắt $MN$ lần lượt tại $M$ và $N$.

::mc
Cho $d\parallel(P)$, mặt phẳng $(Q)$ chứa $d$ và cắt $(P)$ theo giao tuyến $a$. Khẳng định nào sau đây đúng?
A. $a$ cắt $d$.
B. $a$ và $d$ chéo nhau.
C. $a$ trùng $d$.
D. $a\parallel d$.
::key D
Đây là tính chất 1: $a$ và $d$ cùng nằm trong $(Q)$ và không có điểm chung nên song song.

::tf
Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Xét tính đúng sai của các mệnh đề sau:
a) $AD\parallel(SBC)$.
b) $SA\parallel(ABCD)$.
c) $BC\parallel(SAD)$.
d) $AB\parallel(SAD)$.
::key Đ S Đ S
a) Đúng: $AD\parallel BC\subset(SBC)$. b) Sai: $SA$ cắt $(ABCD)$ tại $A$. c) Đúng: $BC\parallel AD\subset(SAD)$. d) Sai: $AB$ cắt $(SAD)$ tại $A$.

::sa
Mỗi cạnh của hình lập phương song song với bao nhiêu mặt của nó?
::key 2
Cạnh $AB$ song song với hai mặt $(CDD'C')$ và $(A'B'C'D')$; nó nằm trong hai mặt và cắt hai mặt còn lại.

::sa
Hình hộp $ABCD.A'B'C'D'$ có bao nhiêu cạnh song song với mặt phẳng $(ABCD)$?
::key 4
Đó là bốn cạnh của mặt trên $A'B'C'D'$; bốn cạnh đáy nằm trong $(ABCD)$ và bốn cạnh bên cắt $(ABCD)$.
:::
