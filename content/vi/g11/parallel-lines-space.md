---
title: Hai đường thẳng song song
description: Phân biệt vị trí tương đối của hai đường thẳng trong không gian, học tính chất của hai đường thẳng song song và định lí ba giao tuyến để tìm giao tuyến.
minutes: 25
---

:::goals
- Phân biệt ba vị trí tương đối của hai đường thẳng phân biệt trong không gian: cắt nhau, song song, chéo nhau.
- Phát biểu và vận dụng các tính chất của hai đường thẳng song song trong không gian.
- Dùng định lí về ba giao tuyến để nhận biết ba giao tuyến đồng quy hoặc đôi một song song.
- Dùng hai đường thẳng song song để tìm giao tuyến của hai mặt phẳng và giải thích các hiện tượng thực tế.
:::

Mái nhà có hai mái dốc phẳng gặp nhau ở đường nóc. Mép dưới của hai mái dốc là hai đường song song với nhau, và đường nóc cũng chạy song song với chúng, nên nhìn từ phía trước ngôi nhà các đường này trông như cùng một hướng.

Vì sao đường nóc luôn song song với hai mép mái, mà không "xiên" sang hướng khác? Để trả lời, ta cần biết khi nào hai đường thẳng trong không gian song song với nhau và điều đó cho ta biết gì về giao tuyến của hai mặt phẳng.

## Vị trí tương đối của hai đường thẳng

### Khám phá: các cạnh của một hình hộp

Trong mặt phẳng, hai đường thẳng phân biệt hoặc cắt nhau hoặc song song. Trong không gian có thêm một khả năng. Ta xem các cạnh của hình hộp chữ nhật $ABCD.A'B'C'D'$.

:::diagram Hình hộp chữ nhật $ABCD.A'B'C'D'$ (nét đứt là các cạnh bị che)
alt: Hình hộp chữ nhật với đáy ABCD ở dưới, mặt trên A'B'C'D' ở trên, các cạnh AD, DC và DD' vẽ nét đứt vì bị che
point A 0,0 below-left
point B 4,0 below-right
point C 5.5,1.5 right
point D 1.5,1.5 left
point A1 0,3 left "A′"
point B1 4,3 above-left "B′"
point C1 5.5,4.5 above-right "C′"
point D1 1.5,4.5 above "D′"
segment A B
segment B C
segment A1 B1
segment B1 C1
segment C1 D1
segment D1 A1
segment A A1
segment B B1
segment C C1
segment C D dashed
segment D A dashed
segment D D1 dashed
:::

Lấy đường thẳng $AB$. Nó cắt $AD$ tại $A$ và cắt $BB'$ tại $B$. Nó cùng nằm trong một mặt phẳng với $CD$ và không có điểm chung với $CD$: đó là hai đường song song. Còn $AB$ và $CC'$ thì không có điểm chung và cũng không nằm trong cùng một mặt phẳng: không có mặt phẳng nào chứa cả hai đường thẳng này.

:::definition Vị trí tương đối của hai đường thẳng
Hai đường thẳng phân biệt $a$, $b$ trong không gian có đúng một trong ba vị trí:
- **cắt nhau**: có đúng một điểm chung (khi đó chúng đồng phẳng);
- **song song**: đồng phẳng và không có điểm chung, viết $a\parallel b$;
- **chéo nhau**: không cùng nằm trong một mặt phẳng nào (khi đó chúng không có điểm chung).
:::

Hai đường thẳng không có điểm chung có thể song song hoặc chéo nhau; điểm khác nhau là chúng có đồng phẳng hay không. Hai đường thẳng chéo nhau không cắt nhau dù kéo dài đến đâu.

:::example Các cặp cạnh của hình hộp chữ nhật
Trong hình hộp chữ nhật $ABCD.A'B'C'D'$, hãy xét vị trí tương đối của đường thẳng $AB$ với mỗi cạnh trong $11$ cạnh còn lại.

**Lời giải.** Các cạnh song song với $AB$ là $CD$, $A'B'$, $C'D'$: $3$ cạnh. Các cạnh cắt $AB$ là $AD$, $AA'$ (tại $A$) và $BC$, $BB'$ (tại $B$): $4$ cạnh. Các cạnh còn lại là $CC'$, $DD'$, $B'C'$, $A'D'$: không cùng mặt phẳng với $AB$ và không có điểm chung, nên chéo nhau với $AB$: $4$ cạnh.

Kiểm tra: $3+4+4=11$. Vậy $AB$ song song với $3$ cạnh, cắt $4$ cạnh và chéo nhau với $4$ cạnh.
:::

:::example Hai cạnh đối của tứ diện
Cho tứ diện $ABCD$. Chứng minh hai đường thẳng $AB$ và $CD$ chéo nhau.

**Lời giải.** Giả sử $AB$ và $CD$ không chéo nhau, tức là chúng đồng phẳng, nằm trong một mặt phẳng $(P)$. Khi đó bốn điểm $A$, $B$, $C$, $D$ đều thuộc $(P)$, tức là đồng phẳng. Điều này mâu thuẫn với tứ diện $ABCD$ có bốn đỉnh không đồng phẳng.

Vậy $AB$ và $CD$ chéo nhau.
:::

## Tính chất của hai đường thẳng song song

:::theorem Tính chất của hai đường thẳng song song
1. Qua một điểm nằm ngoài một đường thẳng có một và chỉ một đường thẳng song song với đường thẳng đó.
2. Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.
3. (**Định lí về ba giao tuyến**) Nếu ba mặt phẳng phân biệt đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc đồng quy hoặc đôi một song song.
4. Nếu hai mặt phẳng phân biệt lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng (nếu có) song song với hai đường thẳng đó hoặc trùng với một trong hai.
:::

Vì sao tính chất 3 đúng? Gọi ba mặt phẳng là $(P)$, $(Q)$, $(R)$ với $a=(P)\cap(Q)$, $b=(Q)\cap(R)$, $c=(R)\cap(P)$. Nếu $a$ và $b$ cắt nhau tại $I$ thì $I$ thuộc cả ba mặt phẳng, nên $I\in c$: ba giao tuyến đồng quy. Nếu $a$ và $b$ không cắt nhau thì, vì cùng nằm trong $(Q)$, chúng song song. Khi đó $a$ và $c$ cũng không cắt nhau: nếu chúng cắt nhau tại $J$ thì $J\in(Q)$ và $J\in(R)$ nên $J\in b$, mâu thuẫn. Hai đường $a$, $c$ cùng nằm trong $(P)$ nên song song, và do đó $b\parallel c$. Vậy ba giao tuyến đôi một song song.

Vì sao tính chất 4 đúng? Gọi hai đường thẳng song song là $a\subset(P)$, $b\subset(Q)$ và $c=(P)\cap(Q)$. Hai đường $a$, $b$ song song nên nằm trong mặt phẳng $(R)$ và $a=(P)\cap(R)$, $b=(Q)\cap(R)$. Áp dụng tính chất 3 cho $(P)$, $(Q)$, $(R)$: nếu $c$ khác $a$ và $b$ thì ba giao tuyến $a$, $b$, $c$ không đồng quy (vì $a\parallel b$) nên đôi một song song, tức $c\parallel a\parallel b$.

:::example Hình bình hành từ trung điểm các cạnh
Cho tứ diện $ABCD$. Gọi $M$, $N$ là trung điểm của $AB$, $AC$ và $P$, $Q$ là trung điểm của $DC$, $DB$. Chứng minh $M$, $N$, $P$, $Q$ đồng phẳng và $MNPQ$ là hình bình hành.

**Hiểu đề.** Ta cần chứng minh bốn điểm cùng nằm trong một mặt phẳng và tứ giác tạo thành có hai cạnh đối song song và bằng nhau.

**Tìm cách giải.** Dùng đường trung bình trong các tam giác $ABC$ và $DBC$ (hình học phẳng, tính chất 6 ở bài trước), rồi dùng tính chất bắc cầu của hai đường thẳng song song.

**Giải.** Trong tam giác $ABC$, $MN$ là đường trung bình nên $MN\parallel BC$ và $MN=\dfrac{BC}{2}$. Trong tam giác $DBC$, $QP$ là đường trung bình nên $QP\parallel BC$ và $QP=\dfrac{BC}{2}$. Do đó $MN\parallel QP$ (cùng song song với $BC$) và $MN=QP$.

Hai đường thẳng song song $MN$ và $QP$ cùng nằm trong một mặt phẳng, nên $M$, $N$, $P$, $Q$ đồng phẳng. Tứ giác $MNPQ$ có hai cạnh đối $MN$ và $QP$ song song và bằng nhau nên là hình bình hành.

**Nhìn lại.** Lập luận chỉ cần $MN$ và $QP$ cùng song song với một đường thẳng thứ ba là $BC$. Đó chính là tính chất 2.
:::

:::diagram Hình chóp $S.ABCD$ có đáy là hình thang $ABCD$ với $AB\parallel CD$; đường $d$ qua $S$ song song với $AB$
alt: Hình chóp S.ABCD đáy là hình thang với AB song song CD, và đường thẳng nét đứt nằm ngang đi qua đỉnh S song song với AB
point A 0,0 below-left
point B 4,0 below-right
point C 3.5,1.6 right
point D 1,1.6 left
point S 1.9,4.2 above
point X 0,4.2 left
point Y 4.2,4.2 right
segment S A
segment S B
segment S C
segment A B
segment B C
segment S D dashed
segment A D dashed
segment C D dashed
segment X Y dashed
:::

:::example Giao tuyến khi đáy có hai cạnh song song
Cho hình chóp $S.ABCD$ có đáy là hình thang $ABCD$ với $AB\parallel CD$. Tìm giao tuyến của $(SAB)$ và $(SCD)$.

**Lời giải.** Điểm $S$ thuộc cả hai mặt phẳng. Mặt phẳng $(SAB)$ chứa $AB$ và mặt phẳng $(SCD)$ chứa $CD$, mà $AB\parallel CD$. Theo tính chất 4, giao tuyến của hai mặt phẳng song song với $AB$ và $CD$ (hoặc trùng với một trong hai). Vì giao tuyến đi qua $S$ và $S$ không thuộc $AB$, $CD$ nên nó không trùng với hai đường này.

Vậy giao tuyến là đường thẳng $d$ đi qua $S$ và song song với $AB$ (và $CD$).
:::

Đây cũng là điều ta đã hứa chứng minh ở bài trước, khi đáy là hình bình hành và không có điểm $E=AB\cap CD$.

:::example Mái nhà
Một ngôi nhà có hai mái dốc phẳng $(P)$ và $(Q)$ gặp nhau ở đường nóc $c$. Mép dưới của mái $(P)$ là đường thẳng $a$ và mép dưới của mái $(Q)$ là đường thẳng $b$, với $a\parallel b$. Giải thích vì sao đường nóc $c$ song song với hai mép mái.

**Hiểu đề.** Hai mặt phẳng $(P)$ và $(Q)$ cắt nhau theo $c$, trong đó $a\subset(P)$, $b\subset(Q)$ và $a\parallel b$. Ta cần chứng minh $c\parallel a$.

**Tìm cách giải.** Đây đúng là tình huống của tính chất 4: hai mặt phẳng lần lượt chứa hai đường thẳng song song.

**Giải.** Theo tính chất 4, giao tuyến $c$ của $(P)$ và $(Q)$ song song với $a$ và $b$ hoặc trùng với một trong hai. Đường nóc không trùng với mép mái (nóc cao hơn mép), nên $c$ song song với $a$ và $b$.

Vậy đường nóc song song với hai mép mái.

**Nhìn lại.** Nếu hai mép mái $a$ và $b$ không song song mà cắt nhau (như ở góc nhà hình chữ L hoặc mái chóp), thì theo tính chất 3, ba đường $a$, $b$, $c$ đồng quy tại một điểm: đường nóc chạy đến chính điểm gặp nhau của hai mép.
:::

**Kết nối.** Hai đường thẳng song song cho ta công cụ tìm giao tuyến, bổ sung cho cách dùng giao điểm ở bài trước. Bài kế tiếp xét đường thẳng và mặt phẳng song song, dựa trên các tính chất của bài này.

:::warning Những sai lầm thường gặp
- **Cho rằng hai đường thẳng không có điểm chung thì song song.** Sai: $AB$ và $CC'$ của hình hộp không có điểm chung nên song song. Vì sao sai: chúng không đồng phẳng, nên chéo nhau. Đúng: song song cần cả điều kiện đồng phẳng.
- **Cho rằng hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì song song.** Sai: $AB$ và $AD$ cùng vuông góc với $AA'$ nên $AB\parallel AD$. Vì sao sai: $AB$ và $AD$ cắt nhau tại $A$. Đúng: trong không gian, hai đường thẳng cùng vuông góc với đường thứ ba có thể cắt nhau, song song hoặc chéo nhau.
- **Cho rằng hai đường thẳng chéo nhau sẽ cắt nhau nếu kéo dài.** Sai: kéo dài $AB$ và $CC'$ ta được giao điểm. Vì sao sai: chúng không đồng phẳng nên không bao giờ cắt nhau, dù kéo dài đến đâu. Đúng: chéo nhau nghĩa là không có điểm chung và không đồng phẳng.
- **Cho rằng ba giao tuyến luôn đồng quy.** Sai: ba mặt phẳng đôi một cắt nhau thì ba giao tuyến cắt nhau tại một điểm. Vì sao sai: hai mái nhà và mặt đất, với hai mép mái song song, cho ba giao tuyến đôi một song song. Đúng: ba giao tuyến đồng quy hoặc đôi một song song.
:::

## Thuật ngữ

:::terms
- hai đường thẳng song song | parallel lines
- hai đường thẳng cắt nhau | intersecting lines
- hai đường thẳng chéo nhau | skew lines
- đồng phẳng | coplanar
- giao tuyến | line of intersection
- đồng quy | concurrent
- đường trung bình | midsegment
- hình hộp chữ nhật | cuboid
- tứ diện | tetrahedron
:::

## Tóm tắt

- Hai đường thẳng phân biệt trong không gian hoặc cắt nhau (một điểm chung), hoặc song song (đồng phẳng, không điểm chung), hoặc chéo nhau (không đồng phẳng).
- Qua một điểm ngoài đường thẳng $d$ có đúng một đường thẳng song song với $d$.
- Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau.
- Ba mặt phẳng phân biệt đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đồng quy hoặc đôi một song song.
- Hai mặt phẳng chứa hai đường thẳng song song thì giao tuyến (nếu có) song song với hai đường thẳng đó hoặc trùng với một trong hai.
- Trong hình hộp chữ nhật, mỗi cạnh song song với $3$ cạnh, cắt $4$ cạnh và chéo nhau với $4$ cạnh.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Trong hình lập phương $ABCD.A'B'C'D'$, đường thẳng $AA'$ song song với bao nhiêu cạnh khác, cắt bao nhiêu cạnh và chéo nhau với bao nhiêu cạnh?

::hint
**Kiến thức:** làm tương tự ví dụ đầu với $11$ cạnh còn lại.

**Gợi ý các bước:**
1. Tìm các cạnh song song với $AA'$.
2. Tìm các cạnh cắt $AA'$ tại $A$ hoặc $A'$.
3. Các cạnh còn lại là chéo nhau.

::solution
Các cạnh song song với $AA'$ là $BB'$, $CC'$, $DD'$: $3$ cạnh. Các cạnh cắt $AA'$ là $AB$, $AD$ (tại $A$) và $A'B'$, $A'D'$ (tại $A'$): $4$ cạnh. Các cạnh còn lại là $BC$, $CD$, $B'C'$, $C'D'$: chéo nhau với $AA'$, $4$ cạnh.

**Đáp số.** Song song với $3$ cạnh, cắt $4$ cạnh, chéo nhau với $4$ cạnh.
:::

:::exercise
Cho tứ diện $ABCD$. Chứng minh hai đường thẳng $AC$ và $BD$ chéo nhau.

::hint
**Kiến thức:** nếu hai đường thẳng đồng phẳng thì các điểm của chúng đồng phẳng.

**Gợi ý các bước:**
1. Giả sử $AC$ và $BD$ đồng phẳng rồi tìm mâu thuẫn.

::solution
Giả sử $AC$ và $BD$ nằm trong một mặt phẳng. Khi đó bốn điểm $A$, $B$, $C$, $D$ đồng phẳng, mâu thuẫn với $ABCD$ là tứ diện. Vậy $AC$ và $BD$ chéo nhau.

**Đáp số.** $AC$ và $BD$ chéo nhau.
:::

:::exercise
Cho tứ diện $ABCD$. Gọi $M$, $N$, $P$, $Q$ lần lượt là trung điểm của $AB$, $BC$, $CD$, $DA$. Chứng minh $MNPQ$ là hình bình hành.

::hint
**Kiến thức:** đường trung bình của tam giác; hai đường thẳng cùng song song với đường thứ ba thì song song.

**Gợi ý các bước:**
1. Chứng minh $MN\parallel AC$ và $QP\parallel AC$.
2. So sánh độ dài $MN$ và $QP$.

::solution
Trong tam giác $ABC$, $MN$ là đường trung bình nên $MN\parallel AC$ và $MN=\dfrac{AC}{2}$. Trong tam giác $ADC$, $QP$ là đường trung bình nên $QP\parallel AC$ và $QP=\dfrac{AC}{2}$. Do đó $MN\parallel QP$ và $MN=QP$, nên $M$, $N$, $P$, $Q$ đồng phẳng và $MNPQ$ là hình bình hành.

**Đáp số.** $MNPQ$ là hình bình hành.
:::

:::exercise
Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Tìm giao tuyến của $(SAD)$ và $(SBC)$.

::hint
**Kiến thức:** nếu hai mặt phẳng lần lượt chứa hai đường thẳng song song thì giao tuyến song song với chúng.

**Gợi ý các bước:**
1. Chỉ ra $AD\parallel BC$.
2. $S$ là điểm chung; giao tuyến qua $S$.

::solution
Vì $ABCD$ là hình bình hành nên $AD\parallel BC$. Mặt phẳng $(SAD)$ chứa $AD$ và $(SBC)$ chứa $BC$, hai mặt phẳng có điểm chung $S$. Theo tính chất 4, giao tuyến là đường thẳng đi qua $S$ và song song với $AD$ (và $BC$).

**Đáp số.** Đường thẳng qua $S$ song song với $AD$ và $BC$.
:::

:::exercise
Cho hình chóp $S.ABCD$ có đáy là hình thang $ABCD$ với $AD\parallel BC$ và $AB$ cắt $CD$ tại $E$. Tìm giao tuyến của $(SAB)$ và $(SCD)$, và giao tuyến của $(SAD)$ và $(SBC)$.

::hint
**Kiến thức:** nếu hai cạnh đáy cắt nhau thì dùng giao điểm; nếu song song thì dùng đường thẳng qua $S$ song song với chúng.

**Gợi ý các bước:**
1. Với $(SAB)\cap(SCD)$: dùng $S$ và $E$.
2. Với $(SAD)\cap(SBC)$: dùng $AD\parallel BC$.

::solution
$(SAB)\cap(SCD)$: $S$ là điểm chung; $E=AB\cap CD$ thuộc $AB\subset(SAB)$ và $CD\subset(SCD)$ nên $E$ cũng là điểm chung. Giao tuyến là $SE$. $(SAD)\cap(SBC)$: $(SAD)\supset AD$, $(SBC)\supset BC$ và $AD\parallel BC$, nên giao tuyến là đường thẳng đi qua $S$ song song với $AD$.

**Đáp số.** $(SAB)\cap(SCD)=SE$; $(SAD)\cap(SBC)$ là đường thẳng qua $S$ song song với $AD$.
:::

:::exercise
Một cầu vượt bắc ngang phía trên một con đường: tuyến đường trên cầu vượt và tuyến đường phía dưới (coi là hai đường thẳng) không giao nhau và không song song. Hai đường thẳng đó có cùng nằm trong một mặt phẳng không? Cầu vượt phải chạy thế nào để hai tuyến song song?

::hint
**Kiến thức:** hai đường thẳng không có điểm chung hoặc song song hoặc chéo nhau; song song cần đồng phẳng.

**Gợi ý các bước:**
1. Xếp hai tuyến vào một trong ba vị trí tương đối.
2. Nghĩ xem khi nào chúng đồng phẳng.

::solution
Hai tuyến không có điểm chung và không song song nên chéo nhau, do đó không nằm trong cùng một mặt phẳng. Hai tuyến sẽ song song khi cầu vượt chạy cùng hướng với tuyến phía dưới, tức hai đường thẳng đồng phẳng và không giao nhau.

**Đáp số.** Chéo nhau, không cùng mặt phẳng; chúng song song khi cầu vượt chạy cùng hướng với đường dưới.
:::

:::exercise
Cho hình lập phương $ABCD.A'B'C'D'$. Xét tính đúng sai của các mệnh đề sau:

a) $AB\parallel C'D'$.

b) $AB$ và $CC'$ chéo nhau.

c) $AA'$ và $CC'$ chéo nhau.

d) $BD$ và $A'C'$ cắt nhau.

::hint
**Kiến thức:** hai đường thẳng song song hoặc chéo nhau khi không có điểm chung.

**Gợi ý các bước:**
1. a) $AB\parallel CD$ và $CD\parallel C'D'$.
2. c) $AA'$, $CC'$ cùng song song với $BB'$.
3. d) $BD\parallel B'D'$.

::solution
a) **Đúng**: $AB\parallel CD$ và $CD\parallel C'D'$, nên $AB\parallel C'D'$.

b) **Đúng**: $AB$ và $CC'$ không có điểm chung và không đồng phẳng.

c) **Sai**: $AA'\parallel BB'$ và $CC'\parallel BB'$, nên $AA'\parallel CC'$.

d) **Sai**: $BD$ nằm trong mặt đáy, $A'C'$ nằm trong mặt trên, chúng không có điểm chung và không song song, nên chéo nhau.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Sai.
:::

:::exercise
Hình hộp chữ nhật có bao nhiêu cặp cạnh chéo nhau?

::hint
**Kiến thức:** mỗi cạnh chéo nhau với $4$ cạnh khác; mỗi cặp đếm hai lần.

**Gợi ý các bước:**
1. Nhân số cạnh với số cạnh chéo nhau với mỗi cạnh.
2. Chia $2$.

::solution
Hình hộp chữ nhật có $12$ cạnh, mỗi cạnh chéo nhau với $4$ cạnh. Tổng $12\cdot4=48$ lần đếm, mỗi cặp được đếm hai lần nên có $\dfrac{48}{2}=24$ cặp.

**Đáp số.** $24$ cặp.
:::

:::exercise Ôn tập
Chứng minh rằng hai đường thẳng song song phân biệt $a$, $b$ xác định đúng một mặt phẳng.

::hint
**Kiến thức:** bài trước: một đường thẳng và một điểm không thuộc nó xác định đúng một mặt phẳng.

**Gợi ý các bước:**
1. Vì $a\parallel b$ nên $a$, $b$ đồng phẳng.
2. Lấy $A\in b$ rồi dùng $(A, a)$.

::solution
Vì $a\parallel b$ nên $a$ và $b$ cùng nằm trong một mặt phẳng. Lấy điểm $A\in b$; $A\notin a$ vì $a$, $b$ không có điểm chung. Mọi mặt phẳng chứa $a$ và $b$ đều chứa $a$ và $A$, mà mặt phẳng $(A, a)$ là duy nhất, nên mặt phẳng chứa cả $a$ và $b$ là duy nhất.

**Đáp số.** Có đúng một mặt phẳng chứa $a$ và $b$.
:::

:::exercise Thử thách
Cho tứ diện $ABCD$. Chứng minh ba đoạn thẳng nối trung điểm các cặp cạnh đối $(AB, CD)$, $(AC, BD)$, $(AD, BC)$ cùng đi qua một điểm và bị điểm đó chia đôi.

::hint
**Kiến thức:** hai đường chéo của hình bình hành cắt nhau tại trung điểm mỗi đường; áp dụng bài về hình bình hành tạo từ trung điểm các cạnh.

**Gợi ý các bước:**
1. Gọi $M$, $N$, $P$, $Q$ là trung điểm $AB$, $BC$, $CD$, $DA$; $MNPQ$ là hình bình hành.
2. Dùng thêm trung điểm $R$ của $AC$ và $T$ của $BD$.

::solution
Gọi $M$, $N$, $P$, $Q$ lần lượt là trung điểm $AB$, $BC$, $CD$, $DA$. $MNPQ$ là hình bình hành nên hai đường chéo $MP$ và $NQ$ cắt nhau tại trung điểm $O$ của mỗi đường. $MP$ nối trung điểm của cặp $(AB, CD)$ và $NQ$ nối trung điểm của cặp $(BC, AD)$. Gọi $R$, $T$ là trung điểm $AC$, $BD$. Trong tam giác $ABC$, $MR\parallel BC$ và $MR=\dfrac{BC}{2}$; trong tam giác $DBC$, $TP\parallel BC$ và $TP=\dfrac{BC}{2}$. Vậy $MRPT$ là hình bình hành, hai đường chéo $MP$ và $RT$ cắt nhau tại trung điểm của $MP$, tức chính điểm $O$. Do đó ba đoạn $MP$, $NQ$, $RT$ cùng đi qua $O$ và bị $O$ chia đôi.

**Đáp số.** Ba đoạn thẳng đồng quy tại $O$, trung điểm của mỗi đoạn.
:::

## Kiểm tra mini

:::quiz
::mc TH
Hai đường thẳng $a$, $b$ trong không gian không có điểm chung. Khẳng định nào sau đây đúng?
A. $a$ và $b$ song song.
B. $a$ và $b$ chéo nhau.
C. $a$ và $b$ trùng nhau.
D. $a$ và $b$ song song hoặc chéo nhau.
::key D
Hai đường thẳng không có điểm chung là song song nếu đồng phẳng, và chéo nhau nếu không đồng phẳng. Phương án A và B chỉ đúng một trong hai trường hợp.

::mc TH
Trong hình lập phương $ABCD.A'B'C'D'$, cặp đường thẳng nào sau đây chéo nhau?
A. $AB$ và $CC'$.
B. $AB$ và $AD$.
C. $AB$ và $CD$.
D. $AB$ và $A'B'$.
::key A
$AB$ và $CC'$ không đồng phẳng và không có điểm chung. Phương án C và D song song, phương án B cắt nhau tại $A$.

::mc NB
Ba mặt phẳng phân biệt đôi một cắt nhau theo ba giao tuyến phân biệt. Khẳng định nào sau đây đúng?
A. Ba giao tuyến luôn đồng quy.
B. Ba giao tuyến đồng quy hoặc đôi một song song.
C. Ba giao tuyến luôn đôi một song song.
D. Ba giao tuyến luôn chéo nhau.
::key B
Đây là định lí về ba giao tuyến.

::mc TH
Cho tứ diện $ABCD$; $M$, $N$ là trung điểm của $AB$, $AC$. Đường thẳng $MN$ song song với đường thẳng nào sau đây?
A. $BD$.
B. $CD$.
C. $BC$.
D. $AD$.
::key C
$MN$ là đường trung bình của tam giác $ABC$ nên $MN\parallel BC$.

::tf TH VD TH TH
Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Xét tính đúng sai của các mệnh đề sau:
a) Giao tuyến của $(SAB)$ và $(SCD)$ song song với $AB$.
b) Giao tuyến của $(SAD)$ và $(SBC)$ cắt đường thẳng $AD$ tại một điểm.
c) $AB$ và $SC$ chéo nhau.
d) $SB$ và $AD$ chéo nhau.
::key Đ S Đ Đ
a) Đúng: $AB\parallel CD$ nên giao tuyến đi qua $S$ và song song với $AB$. b) Sai: giao tuyến song song với $AD$ nên không cắt $AD$. c) Đúng: $AB$ và $SC$ không đồng phẳng. d) Đúng: $SB$ và $AD$ không đồng phẳng và không có điểm chung.

::sa VD
Trong hình hộp chữ nhật, mỗi cạnh chéo nhau với bao nhiêu cạnh khác?
::key 4
Mỗi cạnh chéo nhau với $4$ cạnh (ví dụ $AB$ chéo nhau với $CC'$, $DD'$, $B'C'$, $A'D'$).

::sa TH
Tứ diện $ABCD$ có bao nhiêu cặp cạnh chéo nhau?
::key 3
Các cặp cạnh đối chéo nhau là $(AB, CD)$, $(AC, BD)$, $(AD, BC)$: $3$ cặp.
:::
