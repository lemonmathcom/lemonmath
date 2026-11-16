---
title: Hai mặt phẳng song song
description: Học điều kiện và tính chất của hai mặt phẳng song song, định lí Thalès trong không gian, hình lăng trụ và hình hộp, rồi áp dụng chứng minh và tính toán.
minutes: 25
---

:::goals
- Nêu định nghĩa và điều kiện để hai mặt phẳng song song.
- Vận dụng các tính chất của hai mặt phẳng song song, đặc biệt: mặt phẳng thứ ba cắt hai mặt phẳng song song theo hai giao tuyến song song.
- Dùng định lí Thalès trong không gian để tính độ dài các đoạn thẳng.
- Nhận biết hình lăng trụ, hình hộp và các tính chất của chúng.
:::

Một giá sách có ba tấm ván nằm ngang song song với nhau: ván trên cùng $(P)$, ván giữa $(Q)$ và ván dưới cùng $(R)$. Hai thanh gỗ thẳng được dựng nghiêng, mỗi thanh cắt cả ba tấm ván. Ván giữa chia thanh thứ nhất thành hai đoạn dài $36$ cm (phía trên) và $24$ cm (phía dưới).

Thanh thứ hai được dựng nghiêng theo một hướng khác. Nếu đoạn trên của nó dài $45$ cm thì đoạn dưới dài bao nhiêu? Câu trả lời không phụ thuộc vào cách ta dựng thanh, và nó cho ta một định lí đẹp của hình học không gian.

## Hai mặt phẳng song song

:::definition Hai mặt phẳng song song
Hai mặt phẳng $(P)$ và $(Q)$ gọi là **song song** (viết $(P)\parallel(Q)$) nếu chúng không có điểm chung.
:::

Hai mặt phẳng phân biệt hoặc cắt nhau theo một đường thẳng (tính chất 5 ở bài đầu chương) hoặc song song. Làm sao biết hai mặt phẳng song song mà không phải kiểm tra từng điểm? Ta dùng đường thẳng song song với mặt phẳng ở bài trước.

:::theorem Điều kiện để hai mặt phẳng song song
Nếu mặt phẳng $(P)$ chứa hai đường thẳng $a$, $b$ cắt nhau và cả hai đường thẳng đó cùng song song với mặt phẳng $(Q)$ thì $(P)\parallel(Q)$.
:::

Vì sao đúng? Giả sử $(P)$ và $(Q)$ cắt nhau theo đường thẳng $c$. Vì $a\subset(P)$ và $a\parallel(Q)$ nên theo tính chất ở bài trước $a\parallel c$. Tương tự $b\parallel c$. Khi đó $a$ và $b$ cùng song song với $c$, nên $a\parallel b$ (hoặc trùng nhau), mâu thuẫn với việc $a$, $b$ cắt nhau. Vậy $(P)$ và $(Q)$ không cắt nhau, tức là song song.

:::theorem Tính chất của hai mặt phẳng song song
1. Qua một điểm nằm ngoài một mặt phẳng có một và chỉ một mặt phẳng song song với mặt phẳng đó.
2. Nếu $(P)\parallel(Q)$ thì mọi đường thẳng nằm trong $(P)$ đều song song với $(Q)$.
3. Nếu hai mặt phẳng song song bị một mặt phẳng thứ ba cắt thì hai giao tuyến song song với nhau.
:::

Vì sao tính chất 3 đúng? Gọi $(R)$ cắt $(P)$ theo $a$ và $(Q)$ theo $b$. Hai đường thẳng $a$ và $b$ cùng nằm trong $(R)$ và không có điểm chung (vì $a\subset(P)$, $b\subset(Q)$ mà $(P)$, $(Q)$ không có điểm chung). Hai đường đồng phẳng không có điểm chung thì song song.

## Định lí Thalès trong không gian

:::diagram Ba mặt phẳng song song $(P)$, $(Q)$, $(R)$ chắn trên hai cát tuyến những đoạn thẳng tỉ lệ
alt: Ba hình bình hành nằm ngang xếp chồng lên nhau biểu diễn ba mặt phẳng song song, và hai đường thẳng xiên cắt cả ba mặt phẳng tại các điểm A, B, C và A', B', C'
point R1 0,0 ""
point R2 6,0 ""
point R3 8,1.5 ""
point R4 2,1.5 ""
polygon R1 R2 R3 R4
point Q1 0,2 ""
point Q2 6,2 ""
point Q3 8,3.5 ""
point Q4 2,3.5 ""
polygon Q1 Q2 Q3 Q4
point T1 0,5 ""
point T2 6,5 ""
point T3 8,6.5 ""
point T4 2,6.5 ""
polygon T1 T2 T3 T4
point A 3,5.6 above
point B 3.6,2.6 above-right
point C 4,0.6 below
point A2 5.5,5.9 above "A′"
point B2 5.98,2.9 above-right "B′"
point C2 6.3,0.9 below "C′"
segment A C
segment A2 C2
label -0.4,5.9 "(P)"
label -0.4,2.9 "(Q)"
label -0.4,0.9 "(R)"
:::

:::theorem Định lí Thalès trong không gian
Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì những đoạn thẳng tương ứng tỉ lệ. Nghĩa là nếu hai đường thẳng $d$, $d'$ cắt ba mặt phẳng song song $(P)$, $(Q)$, $(R)$ lần lượt tại $A$, $B$, $C$ và $A'$, $B'$, $C'$ thì
$$\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}\quad\text{và}\quad\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}.$$
:::

Vì sao đúng? Qua $A$ kẻ đường thẳng $d''$ song song với $d'$, cắt $(Q)$ và $(R)$ lần lượt tại $B''$, $C''$. Mặt phẳng chứa $d$ và $d''$ cắt hai mặt phẳng song song $(Q)$, $(R)$ theo $BB''$ và $CC''$, nên $BB''\parallel CC''$ (tính chất 3). Trong mặt phẳng đó, theo định lí Thalès của hình học phẳng, $\dfrac{AB}{BC}=\dfrac{AB''}{B''C''}$. Mặt phẳng chứa $d'$ và $d''$ cắt $(P)$, $(Q)$, $(R)$ theo $AA'$, $B''B'$, $C''C'$ song song với nhau, nên $AA'B'B''$ và $B''B'C'C''$ là các hình bình hành, do đó $AB''=A'B'$ và $B''C''=B'C'$. Ghép lại ta có $\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$.

:::example Giá sách
Ba tấm ván song song chia một thanh gỗ thành hai đoạn $AB=36$ cm và $BC=24$ cm. Một thanh thứ hai bị ba tấm ván đó chia thành $A'B'=45$ cm và $B'C'$. Tính $B'C'$.

**Hiểu đề.** Hai thanh là hai cát tuyến của ba mặt phẳng song song. Ta biết $AB$, $BC$ và $A'B'$, cần tìm $B'C'$.

**Tìm cách giải.** Dùng định lí Thalès trong không gian: $\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$.

**Giải.** Từ $\dfrac{36}{24}=\dfrac{45}{B'C'}$ ta có $B'C'=\dfrac{45\cdot24}{36}=30$ cm.

Vậy đoạn dưới của thanh thứ hai dài $30$ cm.

**Nhìn lại.** Tỉ số $AB:BC=36:24=3:2$ và $A'B':B'C'=45:30=3:2$ bằng nhau, đúng như định lí. Độ dài cả hai thanh ($60$ cm và $75$ cm) khác nhau nhưng tỉ số chia vẫn như nhau.
:::

:::example Chứng minh hai mặt phẳng song song
Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh $(A'BD)\parallel(B'D'C)$.

**Lời giải.** Các mặt của hình hộp là hình bình hành. Tứ giác $A'BCD'$ là hình bình hành nên $A'B\parallel D'C$, mà $D'C\subset(B'D'C)$ và $A'B\not\subset(B'D'C)$, nên $A'B\parallel(B'D'C)$. Tứ giác $BB'D'D$ là hình bình hành nên $BD\parallel B'D'$, mà $B'D'\subset(B'D'C)$ và $BD\not\subset(B'D'C)$, nên $BD\parallel(B'D'C)$.

Mặt phẳng $(A'BD)$ chứa hai đường thẳng $A'B$ và $BD$ cắt nhau tại $B$ và cả hai song song với $(B'D'C)$. Theo điều kiện, $(A'BD)\parallel(B'D'C)$.
:::

## Hình lăng trụ và hình hộp

Cho hai mặt phẳng song song $(P)$ và $(Q)$, đa giác $A_1\dots A_n$ trong $(P)$ và các đường thẳng song song $A_iA_i'$ cắt $(Q)$ tại $A_i'$. Hình gồm hai đa giác $A_1\dots A_n$, $A_1'\dots A_n'$ và các hình bình hành $A_iA_{i+1}A_{i+1}'A_i'$ gọi là **hình lăng trụ** $A_1\dots A_n.A_1'\dots A_n'$. Hai đa giác là **hai mặt đáy** (bằng nhau, nằm trong hai mặt phẳng song song), các hình bình hành là **mặt bên** và các đoạn $A_iA_i'$ là **cạnh bên** (song song và bằng nhau). Lăng trụ có đáy $n$-giác có $2n$ đỉnh, $3n$ cạnh và $n+2$ mặt. **Hình hộp** là lăng trụ có đáy là hình bình hành; nó có $8$ đỉnh, $12$ cạnh, $6$ mặt và các mặt đối diện song song với nhau.

:::example Mặt phẳng song song với đáy của lăng trụ
Cho hình lăng trụ tam giác $ABC.A'B'C'$. Mặt phẳng $(\alpha)$ song song với $(ABC)$ cắt các cạnh bên $AA'$, $BB'$, $CC'$ lần lượt tại $M$, $N$, $P$. Chứng minh tam giác $MNP$ bằng tam giác $ABC$.

**Lời giải.** Mặt phẳng $(AA'B'B)$ cắt hai mặt phẳng song song $(\alpha)$ và $(ABC)$ theo $MN$ và $AB$, nên $MN\parallel AB$. Mặt khác $AM\parallel BN$ (cùng nằm trên các cạnh bên song song). Tứ giác $ABNM$ có hai cặp cạnh đối song song nên là hình bình hành, do đó $MN=AB$. Tương tự $NP=BC$ và $PM=CA$.

Vậy tam giác $MNP$ có ba cạnh bằng ba cạnh của tam giác $ABC$ nên bằng tam giác $ABC$.
:::

:::example Đếm yếu tố của lăng trụ
Hình lăng trụ có đáy là ngũ giác có bao nhiêu đỉnh, cạnh, mặt? Hình hộp có mấy cặp mặt song song?

**Lời giải.** Với $n=5$: $2n=10$ đỉnh, $3n=15$ cạnh, $n+2=7$ mặt ($5$ mặt bên và $2$ đáy). Hình hộp có $6$ mặt chia thành các cặp mặt đối diện song song nhau: $\dfrac62=3$ cặp.

Vậy lăng trụ ngũ giác có $10$ đỉnh, $15$ cạnh, $7$ mặt; hình hộp có $3$ cặp mặt song song.
:::

**Kết nối.** Bài này kết hợp đường thẳng song song và đường thẳng song song với mặt phẳng để nói về mặt phẳng song song. Định lí Thalès trong không gian là phiên bản ba chiều của định lí Thalès quen thuộc trong mặt phẳng. Bài kế tiếp xét phép chiếu song song, trong đó tỉ số của các đoạn thẳng cùng nằm trên một đường thẳng được bảo toàn, cũng dựa trên các mặt phẳng song song.

:::warning Những sai lầm thường gặp
- **Chỉ cần hai đường thẳng song song với $(Q)$ là đủ.** Sai: $(P)$ chứa hai đường thẳng $a\parallel b$ cùng song song với $(Q)$ nên $(P)\parallel(Q)$. Vì sao sai: hai mặt phẳng cắt nhau theo đường thẳng $c$ chứa hai đường song song $a$, $b$ cùng song song với $c$. Đúng: hai đường thẳng phải cắt nhau.
- **Viết ngược tỉ số trong định lí Thalès.** Sai: $\dfrac{AB}{BC}=\dfrac{B'C'}{A'B'}$. Vì sao sai: với $AB=36$, $BC=24$, $A'B'=45$, $B'C'=30$ thì $\dfrac{36}{24}\ne\dfrac{30}{45}$. Đúng: các đoạn tương ứng cùng thứ tự, $\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$.
- **Cho rằng qua một điểm ngoài mặt phẳng có nhiều mặt phẳng song song.** Sai: qua $A\notin(Q)$ có vô số mặt phẳng song song với $(Q)$. Vì sao sai: có đúng một mặt phẳng như vậy (tính chất 1). Đúng: chỉ có một.
- **Cho rằng giao tuyến của mặt phẳng thứ ba với hai mặt phẳng song song có thể chéo nhau.** Sai: $a=(R)\cap(P)$ và $b=(R)\cap(Q)$ chéo nhau. Vì sao sai: $a$ và $b$ cùng nằm trong $(R)$ nên đồng phẳng. Đúng: $a\parallel b$.
:::

## Thuật ngữ

:::terms
- hai mặt phẳng song song | parallel planes
- cát tuyến | transversal
- định lí Thalès | intercept theorem (in Vietnam: Thales' theorem)
- hình lăng trụ | prism
- hình hộp | parallelepiped
- mặt đáy | base
- mặt bên | lateral face
- cạnh bên | lateral edge
- đường thẳng song song với mặt phẳng | line parallel to a plane
:::

## Tóm tắt

- $(P)\parallel(Q)$ khi và chỉ khi chúng không có điểm chung.
- Điều kiện: $(P)$ chứa hai đường thẳng cắt nhau cùng song song với $(Q)$ thì $(P)\parallel(Q)$.
- Qua một điểm ngoài mặt phẳng có đúng một mặt phẳng song song với nó; mọi đường thẳng trong $(P)$ đều song song với $(Q)$.
- Mặt phẳng thứ ba cắt hai mặt phẳng song song theo hai giao tuyến song song.
- Thalès trong không gian: ba mặt phẳng song song chắn trên hai cát tuyến những đoạn tỉ lệ: $\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$.
- Lăng trụ đáy $n$-giác có $2n$ đỉnh, $3n$ cạnh, $n+2$ mặt; hình hộp có $8$ đỉnh, $12$ cạnh, $6$ mặt.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh $(ABB'A')\parallel(CDD'C')$.

::hint
**Kiến thức:** điều kiện để hai mặt phẳng song song; các mặt của hình hộp là hình bình hành.

**Gợi ý các bước:**
1. Chứng minh $AB\parallel(CDD'C')$ và $AA'\parallel(CDD'C')$.
2. $AB$ và $AA'$ cắt nhau tại $A$.

::solution
$AB\parallel CD\subset(CDD'C')$ nên $AB\parallel(CDD'C')$. $AA'\parallel DD'\subset(CDD'C')$ nên $AA'\parallel(CDD'C')$. Mặt phẳng $(ABB'A')$ chứa hai đường thẳng cắt nhau $AB$, $AA'$ cùng song song với $(CDD'C')$, nên $(ABB'A')\parallel(CDD'C')$.

**Đáp số.** $(ABB'A')\parallel(CDD'C')$.
:::

:::exercise
Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh $(AB'D')\parallel(C'BD)$.

::hint
**Kiến thức:** tìm hai đường thẳng cắt nhau trong $(AB'D')$ song song với hai đường thẳng trong $(C'BD)$.

**Gợi ý các bước:**
1. $AB'\parallel DC'$ và $AD'\parallel BC'$.
2. Áp dụng điều kiện.

::solution
$AB'C'D$ là hình bình hành nên $AB'\parallel DC'$, mà $DC'\subset(C'BD)$ nên $AB'\parallel(C'BD)$. $AD'C'B$ là hình bình hành nên $AD'\parallel BC'$, mà $BC'\subset(C'BD)$ nên $AD'\parallel(C'BD)$. Mặt phẳng $(AB'D')$ chứa $AB'$ và $AD'$ cắt nhau tại $A$, cùng song song với $(C'BD)$.

**Đáp số.** $(AB'D')\parallel(C'BD)$.
:::

:::exercise
Ba mặt phẳng song song cắt hai cát tuyến $d$, $d'$ tại $A$, $B$, $C$ và $A'$, $B'$, $C'$. Biết $AB=3$, $BC=5$ và $A'C'=24$. Tính $A'B'$ và $B'C'$.

::hint
**Kiến thức:** $\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}$ với $AC=AB+BC$.

**Gợi ý các bước:**
1. Tính $AC$.
2. Tính $A'B'$ rồi $B'C'=A'C'-A'B'$.

::solution
$AC=3+5=8$. Từ $\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}$ ta có $A'B'=\dfrac{3}{8}\cdot24=9$, nên $B'C'=24-9=15$.

**Đáp số.** $A'B'=9$, $B'C'=15$.
:::

:::exercise
Hình lăng trụ có đáy là đa giác $12$ cạnh có bao nhiêu đỉnh, cạnh và mặt?

::hint
**Kiến thức:** lăng trụ đáy $n$-giác có $2n$ đỉnh, $3n$ cạnh, $n+2$ mặt.

**Gợi ý các bước:**
1. Thay $n=12$.

::solution
Với $n=12$: $2n=24$ đỉnh, $3n=36$ cạnh, $n+2=14$ mặt.

**Đáp số.** $24$ đỉnh, $36$ cạnh, $14$ mặt.
:::

:::exercise
Giả sử ba tấm ván song song của một giá sách chia một thanh gỗ dài $1{,}2$ m thành hai đoạn có tỉ lệ $3:5$. Một thanh gỗ khác dài $2{,}4$ m cũng bị ba tấm ván đó cắt. Tính các đoạn của hai thanh.

::hint
**Kiến thức:** theo Thalès trong không gian, cả hai thanh được chia theo cùng tỉ lệ.

**Gợi ý các bước:**
1. Chia $1{,}2$ m theo tỉ lệ $3:5$.
2. Chia $2{,}4$ m theo cùng tỉ lệ.

::solution
Tổng số phần là $3+5=8$. Thanh $1{,}2$ m: đoạn trên $\dfrac38\cdot1{,}2=0{,}45$ m và đoạn dưới $0{,}75$ m. Thanh $2{,}4$ m: đoạn trên $\dfrac38\cdot2{,}4=0{,}9$ m và đoạn dưới $1{,}5$ m.

**Đáp số.** Thanh $1{,}2$ m: $0{,}45$ m và $0{,}75$ m; thanh $2{,}4$ m: $0{,}9$ m và $1{,}5$ m.
:::

:::exercise
Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Xét tính đúng sai của các mệnh đề sau:

a) $(ABCD)\parallel(A'B'C'D')$.

b) Mỗi mặt của hình hộp cắt đúng $4$ mặt còn lại.

c) Hình hộp có $8$ cạnh.

d) $AA'\parallel(CDD'C')$.

::hint
**Kiến thức:** các mặt đối diện của hình hộp song song; mỗi mặt song song với một mặt và cắt bốn mặt.

**Gợi ý các bước:**
1. Đếm cạnh của hình hộp.
2. d) $AA'\parallel DD'\subset(CDD'C')$.

::solution
a) **Đúng**: hai mặt đối diện song song.

b) **Đúng**: mỗi mặt song song với mặt đối diện và cắt $4$ mặt kề còn lại.

c) **Sai**: hình hộp có $12$ cạnh.

d) **Đúng**: $AA'\parallel DD'\subset(CDD'C')$ và $AA'\not\subset(CDD'C')$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise Ôn tập
Dùng định nghĩa đường thẳng song song với mặt phẳng ở bài trước, chứng minh rằng nếu $(P)\parallel(Q)$ và $d\subset(P)$ thì $d\parallel(Q)$.

::hint
**Kiến thức:** $d\parallel(Q)$ nghĩa là $d$ và $(Q)$ không có điểm chung.

**Gợi ý các bước:**
1. Mọi điểm của $d$ thuộc $(P)$.
2. $(P)$ và $(Q)$ không có điểm chung.

::solution
Mọi điểm của $d$ đều thuộc $(P)$, mà $(P)$ và $(Q)$ không có điểm chung nên không điểm nào của $d$ thuộc $(Q)$. Vậy $d$ và $(Q)$ không có điểm chung, tức $d\parallel(Q)$.

**Đáp số.** $d\parallel(Q)$.
:::

:::exercise Thử thách
Cho hình chóp $S.ABC$. Mặt phẳng $(\alpha)$ song song với $(ABC)$ cắt $SA$, $SB$, $SC$ lần lượt tại $A_1$, $B_1$, $C_1$. Chứng minh $\dfrac{SA_1}{SA}=\dfrac{SB_1}{SB}=\dfrac{SC_1}{SC}=\dfrac{A_1B_1}{AB}$.

::hint
**Kiến thức:** mặt phẳng thứ ba cắt hai mặt phẳng song song theo hai giao tuyến song song; định lí Thalès trong mặt phẳng.

**Gợi ý các bước:**
1. $(SAB)\cap(\alpha)=A_1B_1$ song song với $AB$.
2. Làm tương tự với $(SBC)$ và $(SAC)$.

::solution
Mặt phẳng $(SAB)$ cắt $(\alpha)$ và $(ABC)$ song song theo $A_1B_1$ và $AB$ nên $A_1B_1\parallel AB$. Theo Thalès trong tam giác $SAB$, $\dfrac{SA_1}{SA}=\dfrac{SB_1}{SB}=\dfrac{A_1B_1}{AB}$. Tương tự với mặt phẳng $(SBC)$ ta có $B_1C_1\parallel BC$ và $\dfrac{SB_1}{SB}=\dfrac{SC_1}{SC}$. Ghép các đẳng thức ta có điều phải chứng minh.

**Đáp số.** $\dfrac{SA_1}{SA}=\dfrac{SB_1}{SB}=\dfrac{SC_1}{SC}=\dfrac{A_1B_1}{AB}$.
:::

## Kiểm tra mini

:::quiz
::mc
Hai mặt phẳng phân biệt song song với nhau khi
A. chúng có đúng một điểm chung.
B. chúng có một đường thẳng chung.
C. chúng có hai điểm chung.
D. chúng không có điểm chung.
::key D
Đây là định nghĩa. Phương án B là hai mặt phẳng cắt nhau.

::mc
Qua một điểm nằm ngoài mặt phẳng $(P)$ có bao nhiêu mặt phẳng song song với $(P)$?
A. Đúng một.
B. Hai.
C. Vô số.
D. Không có.
::key A
Đây là tính chất thứ nhất của hai mặt phẳng song song.

::mc
Ba mặt phẳng song song chắn trên cát tuyến $d$ các đoạn $AB=3$, $BC=6$ và chắn trên cát tuyến $d'$ đoạn $A'B'=4$. Khi đó $B'C'$ bằng
A. $2$.
B. $8$.
C. $12$.
D. $4{,}5$.
::key B
$\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}$ nên $B'C'=\dfrac{4\cdot6}{3}=8$. Phương án A viết ngược tỉ số.

::mc
Hình lăng trụ có đáy là ngũ giác có bao nhiêu mặt?
A. $5$.
B. $10$.
C. $7$.
D. $15$.
::key C
Lăng trụ đáy $n$-giác có $n+2=7$ mặt. Phương án B là số đỉnh, phương án D là số cạnh.

::tf
Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Xét tính đúng sai của các mệnh đề sau:
a) $(ABCD)\parallel(A'B'C'D')$.
b) Mỗi mặt của hình hộp cắt đúng $4$ mặt khác.
c) Hình hộp có $8$ cạnh.
d) $AA'\parallel(CDD'C')$.
::key Đ Đ S Đ
a) Đúng. b) Đúng: mỗi mặt song song với một mặt và cắt $4$ mặt còn lại. c) Sai: hình hộp có $12$ cạnh. d) Đúng: $AA'\parallel DD'\subset(CDD'C')$.

::sa
Hình lăng trụ có đáy $8$ cạnh có bao nhiêu cạnh?
::key 24
Lăng trụ đáy $n$-giác có $3n$ cạnh, với $n=8$ là $24$.

::sa
Ba mặt phẳng song song chắn trên cát tuyến $d$ các đoạn $AB=4$, $AC=10$ và trên cát tuyến $d'$ đoạn $A'B'=6$. Tính $A'C'$.
::key 15
$\dfrac{AB}{AC}=\dfrac{A'B'}{A'C'}$ nên $A'C'=\dfrac{6\cdot10}{4}=15$.
:::
