---
title: Hình có trục đối xứng. Hình có tâm đối xứng
description: Nhận biết trục đối xứng, tâm đối xứng của một hình; đếm số trục đối xứng và tìm tâm đối xứng của các hình phẳng quen thuộc.
minutes: 35
---

:::goals
- Nhận biết được hình có trục đối xứng và chỉ ra các trục đối xứng của hình đó.
- Nhận biết được hình có tâm đối xứng và chỉ ra tâm đối xứng của hình đó.
- Biết số trục đối xứng và tâm đối xứng của các hình: tam giác đều, hình vuông, lục giác đều, hình chữ nhật, hình thoi, hình bình hành, hình thang cân, hình tròn.
- Dùng tính đối xứng để tìm độ dài, diện tích và giải thích các hiện tượng trong đời sống.
:::

Bạn đã từng cắt hình trái tim bằng giấy chưa? Người ta không vẽ cả trái tim rồi cắt. Người ta gấp đôi tờ giấy, chỉ cắt **một nửa** trái tim sát nếp gấp, rồi mở ra. Hai nửa giống nhau như soi gương, và trái tim cân đối hơn hẳn so với khi vẽ tay.

Còn lá bài tây thì có một điều lạ khác: bạn cầm xuôi hay cầm ngược, hình trên lá bài vẫn y như cũ. Không có nếp gấp nào ở đây cả. Lá bài "cân đối" theo một kiểu khác: xoay nửa vòng thì trùng với chính nó.

Hai kiểu cân đối ấy có tên riêng trong toán học: đối xứng trục và đối xứng tâm. Hiểu chúng, bạn sẽ nhìn ra vì sao nhiều thứ quanh ta, từ con bướm đến chiếc chong chóng, lại đẹp một cách đều đặn như vậy.

## Hình có trục đối xứng

Trở lại trái tim giấy. Nếp gấp là một đường thẳng chia hình thành hai phần. Khi gấp theo đường ấy, hai phần **chồng khít** lên nhau.

:::definition Trục đối xứng
Đường thẳng $d$ chia một hình thành hai phần mà nếu gấp hình theo đường thẳng $d$ thì hai phần đó chồng khít lên nhau. Khi đó ta nói hình đó là **hình có trục đối xứng** và $d$ là **trục đối xứng** của nó.
:::

Một hình có thể có một trục đối xứng, nhiều trục đối xứng, hoặc không có trục nào. Cách thử đơn giản nhất: cắt hình bằng giấy rồi tìm xem có bao nhiêu cách gấp đôi cho hai nửa trùng khít.

Hãy thử với hình chữ nhật. Gấp theo đường nối trung điểm hai chiều dài: trùng khít. Gấp theo đường nối trung điểm hai chiều rộng: cũng trùng khít. Vậy hình chữ nhật có hai trục đối xứng.

:::diagram Hai trục đối xứng $m$ và $n$ của hình chữ nhật
alt: Hình chữ nhật ABCD với hai đường nét đứt đi qua trung điểm các cặp cạnh đối: đường thẳng đứng m và đường nằm ngang n
point A 0,3 above-left
point B 5,3 above-right
point C 5,0 below-right
point D 0,0 below-left
point P 2.5,3.7 ""
point Q 2.5,-0.7 ""
point R -0.7,1.5 ""
point S 5.7,1.5 ""
polygon A B C D
segment P Q dashed
segment R S dashed
label 2.8,3.6 "m"
label 5.8,1.8 "n"
:::

Còn gấp theo đường chéo thì sao? Bạn thử sẽ thấy hai nửa **không** chồng khít: một góc thò ra ngoài. Đường chéo chia hình chữ nhật thành hai phần bằng nhau, nhưng nó không phải trục đối xứng. Chia đôi thôi chưa đủ, phải gấp lại trùng nhau mới được.

Với tam giác đều, mỗi đường thẳng đi qua một đỉnh và trung điểm của cạnh đối diện là một trục đối xứng. Có ba đỉnh nên có ba trục.

:::diagram Ba trục đối xứng của tam giác đều
alt: Tam giác đều ABC với ba đường nét đứt, mỗi đường đi qua một đỉnh và trung điểm cạnh đối diện
point A 2,3.46 above
point B 0,0 below-left
point C 4,0 below-right
point P 2,-0.6 ""
point Q 3.6,2.08 ""
point R 0.4,2.08 ""
polygon A B C
segment A P dashed
segment B Q dashed
segment C R dashed
:::

## Số trục đối xứng của các hình quen thuộc

Bằng cách gấp giấy như trên, ta lập được bảng sau.

| Hình | Số trục đối xứng | Các trục đối xứng |
|---|---|---|
| Tam giác đều | $3$ | ba đường đi qua một đỉnh và trung điểm cạnh đối diện |
| Hình vuông | $4$ | hai đường chéo; hai đường nối trung điểm các cặp cạnh đối |
| Lục giác đều | $6$ | ba đường chéo chính; ba đường nối trung điểm các cặp cạnh đối |
| Hình chữ nhật | $2$ | hai đường nối trung điểm các cặp cạnh đối |
| Hình thoi | $2$ | hai đường chéo |
| Hình thang cân | $1$ | đường nối trung điểm hai đáy |
| Hình bình hành | $0$ | không có |
| Hình tròn | vô số | mọi đường thẳng đi qua tâm |

Bảng này cho thấy một điều thú vị. Hình vuông vừa là hình chữ nhật, vừa là hình thoi, nên nó có cả hai trục của hình chữ nhật lẫn hai trục của hình thoi: $2+2=4$. Hình càng "đều" thì càng nhiều trục đối xứng, và hình tròn, hình đều đặn nhất, có vô số trục.

## Hình có tâm đối xứng

Hình bình hành không có trục đối xứng nào. Thế nhưng nhìn nó, ta vẫn thấy cân đối. Vì sao?

Hãy đặt đầu bút chì vào giao điểm $O$ của hai đường chéo rồi xoay hình bình hành **nửa vòng** quanh $O$. Đỉnh $A$ đi tới chỗ của đỉnh $C$, đỉnh $B$ đi tới chỗ của đỉnh $D$, và cả hình nằm trùng khít lên vị trí cũ.

:::diagram Hình bình hành có tâm đối xứng $O$
alt: Hình bình hành ABCD có hai đường chéo cắt nhau tại O; điểm M trên cạnh AB và điểm M' trên cạnh CD thẳng hàng với O và cách đều O
point A 1,2.5 above-left
point B 6,2.5 above-right
point C 5,0 below-right
point D 0,0 below-left
point O 3,1.25 right
point M 2,2.5 above
point M' 4,0 below
polygon A B C D
segment A C dashed
segment B D dashed
segment M M' dashed
:::

:::definition Tâm đối xứng
Nếu có một điểm $O$ sao cho khi quay hình nửa vòng quanh $O$, hình thu được chồng khít với chính nó ở vị trí ban đầu, thì ta nói hình đó là **hình có tâm đối xứng** và $O$ là **tâm đối xứng** của nó.
:::

Có một cách nhận biết khác, không cần xoay. Lấy một điểm $M$ bất kì của hình, nối $M$ với $O$ rồi kéo dài thêm một đoạn bằng $OM$, ta được điểm $M'$. Nếu $O$ là tâm đối xứng thì $M'$ cũng thuộc hình. Nói cách khác, các điểm của hình ghép thành từng cặp, và $O$ là **trung điểm** của đoạn thẳng nối mỗi cặp. Trong hình trên, $O$ là trung điểm của $AC$, của $BD$ và của $MM'$.

:::note Tâm đối xứng của các hình quen thuộc
- Hình bình hành, hình chữ nhật, hình thoi, hình vuông: tâm đối xứng là giao điểm hai đường chéo.
- Lục giác đều: tâm đối xứng là giao điểm ba đường chéo chính.
- Hình tròn: tâm đối xứng là tâm của hình tròn.
- Đoạn thẳng: tâm đối xứng là trung điểm của nó.
- Tam giác đều và hình thang cân **không có** tâm đối xứng.
:::

## Hai kiểu đối xứng, đừng lẫn với nhau

Trục đối xứng gắn với động tác **gấp**. Tâm đối xứng gắn với động tác **xoay nửa vòng**. Hai tính chất này độc lập với nhau:

- Tam giác đều có ba trục đối xứng nhưng không có tâm đối xứng. Xoay nửa vòng, đỉnh ở trên sẽ chúi xuống dưới.
- Hình bình hành có tâm đối xứng nhưng không có trục đối xứng.
- Hình chữ nhật, hình thoi, hình vuông, lục giác đều, hình tròn có cả hai.

Tính đối xứng không chỉ để ngắm. Người thợ xây một chiếc cổng có trục đối xứng chỉ cần đo một nửa. Kĩ sư thiết kế cánh quạt có tâm đối xứng để khi quay nó không bị lệch. Còn trong toán học, đối xứng giúp ta biết nhiều điều mà không cần đo: hai phần đối xứng với nhau thì bằng nhau.

## Ví dụ

Ta bắt đầu bằng việc đếm trục đối xứng, kèm theo lí do.

:::example Đếm số trục đối xứng
Mỗi hình sau có bao nhiêu trục đối xứng? Hãy chỉ ra các trục đó.

a) Hình vuông;

b) Hình thang cân;

c) Hình bình hành (không phải hình chữ nhật, không phải hình thoi).

**Lời giải.**

a) Gấp hình vuông theo mỗi đường chéo, hai nửa chồng khít. Gấp theo mỗi đường nối trung điểm hai cạnh đối, hai nửa cũng chồng khít. Hình vuông có $4$ trục đối xứng: hai đường chéo và hai đường nối trung điểm các cặp cạnh đối.

b) Gấp hình thang cân theo đường nối trung điểm hai đáy, hai cạnh bên trùng nhau nên hai nửa chồng khít. Không còn cách gấp nào khác. Hình thang cân có $1$ trục đối xứng.

c) Gấp hình bình hành theo đường chéo hay theo đường nối trung điểm hai cạnh đối, hai nửa đều không chồng khít vì các góc kề nhau không bằng nhau. Hình bình hành không có trục đối xứng.

Vậy hình vuông có $4$ trục, hình thang cân có $1$ trục, hình bình hành có $0$ trục đối xứng.
:::

Chữ cái in hoa là nơi luyện mắt rất tốt.

:::example Đối xứng của các chữ cái
Xét các chữ cái in hoa, nét thẳng đơn giản: A, H, N, T, Z.

a) Chữ nào có trục đối xứng?

b) Chữ nào có tâm đối xứng?

**Lời giải.**

a) Chữ A và chữ T có một trục đối xứng là đường thẳng đứng đi qua giữa chữ: gấp dọc theo đường đó thì nửa trái trùng nửa phải.

Chữ H có hai trục đối xứng: một đường thẳng đứng và một đường nằm ngang đi qua giữa chữ.

Chữ N và chữ Z không có trục đối xứng: gấp theo đường nào thì hai nét xiên cũng lệch nhau.

b) Xoay nửa vòng quanh điểm chính giữa, chữ H, chữ N và chữ Z trùng với chính nó, nên ba chữ này có tâm đối xứng.

Chữ A và chữ T khi xoay nửa vòng thì bị lộn ngược, nên không có tâm đối xứng.

Vậy a) các chữ A, T, H có trục đối xứng; b) các chữ H, N, Z có tâm đối xứng.

**Nhận xét.** Chữ H có cả hai kiểu đối xứng; chữ N và Z chỉ có tâm; chữ A và T chỉ có trục.
:::

Tâm đối xứng là trung điểm của mọi đoạn nối hai điểm đối xứng. Điều đó cho ta độ dài.

:::example Tâm đối xứng của hình bình hành
Cho hình bình hành $ABCD$ có tâm đối xứng $O$, biết $AC=10$ cm và $BD=6$ cm.

a) Điểm nào đối xứng với điểm $A$ qua $O$? Điểm nào đối xứng với điểm $B$ qua $O$?

b) Tính $OA$ và $OB$.

**Lời giải.**

a) Tâm đối xứng của hình bình hành là giao điểm hai đường chéo. Khi quay nửa vòng quanh $O$, đỉnh $A$ tới vị trí đỉnh $C$ và đỉnh $B$ tới vị trí đỉnh $D$.

Do đó điểm đối xứng với $A$ qua $O$ là $C$, điểm đối xứng với $B$ qua $O$ là $D$.

b) Vì $A$ và $C$ đối xứng với nhau qua $O$ nên $O$ là trung điểm của $AC$. Suy ra
$$OA=AC:2=10:2=5\ (\text{cm}).$$

Tương tự, $O$ là trung điểm của $BD$ nên
$$OB=BD:2=6:2=3\ (\text{cm}).$$

Vậy $OA=5$ cm và $OB=3$ cm.
:::

Lục giác đều là hình có nhiều kiểu đối xứng nhất trong các đa giác ta đã học.

:::example Đối xứng của lục giác đều
Cho lục giác đều $ABCDEF$ có ba đường chéo chính cắt nhau tại $O$.

a) Lục giác đều có bao nhiêu trục đối xứng?

b) Lục giác đều có tâm đối xứng không? Điểm nào đối xứng với đỉnh $B$ qua tâm đó?

**Lời giải.**

a) Mỗi đường chéo chính $AD$, $BE$, $CF$ là một trục đối xứng: có $3$ trục.

Mỗi đường thẳng nối trung điểm hai cạnh đối diện cũng là một trục đối xứng. Lục giác có $3$ cặp cạnh đối nên có thêm $3$ trục.

Do đó lục giác đều có $3+3=6$ trục đối xứng.

b) Quay lục giác đều nửa vòng quanh $O$, mỗi đỉnh tới vị trí của đỉnh đối diện, nên hình trùng với chính nó. Lục giác đều có tâm đối xứng là $O$.

Đỉnh đối diện với $B$ là $E$ (vì $BE$ là đường chéo chính), nên điểm đối xứng với $B$ qua $O$ là $E$.

Vậy lục giác đều có $6$ trục đối xứng, có tâm đối xứng $O$, và $E$ đối xứng với $B$ qua $O$.
:::

Cuối cùng, ta trở lại với trò gấp giấy ở đầu bài.

:::example Gấp giấy cắt hình
Bạn Mai gấp đôi một tờ giấy rồi cắt một hình thang vuông sát nếp gấp: cạnh nằm trên nếp gấp dài $5$ cm và vuông góc với hai đáy; hai đáy dài $3$ cm và $7$ cm. Khi mở tờ giấy ra, Mai được hình gì? Tính diện tích của hình đó.

**Lời giải.**

*Hiểu đề.* Hình cắt ra gồm hai nửa giống nhau, đối xứng qua nếp gấp. Mỗi nửa là một hình thang vuông có hai đáy $3$ cm, $7$ cm và chiều cao $5$ cm.

*Tìm cách giải.* Nếp gấp là trục đối xứng. Khi mở ra, mỗi đáy dài gấp đôi, còn chiều cao giữ nguyên.

*Giải.* Khi mở tờ giấy, hai đáy của hình thu được dài
$$3\cdot2=6\ (\text{cm})\quad\text{và}\quad 7\cdot2=14\ (\text{cm}).$$

Hai cạnh bên là hai nét cắt, chúng đối xứng với nhau qua nếp gấp nên bằng nhau. Do đó hình thu được là một hình thang cân có hai đáy $6$ cm, $14$ cm và chiều cao $5$ cm.

Diện tích của hình thang cân đó là
$$S=\dfrac{(6+14)\cdot5}{2}=\dfrac{20\cdot5}{2}=50\ (\text{cm}^2).$$

Vậy Mai được một hình thang cân có diện tích $50\ \text{cm}^2$.

*Nhìn lại.* Có cách khác không? Diện tích một nửa là $\dfrac{(3+7)\cdot5}{2}=25\ (\text{cm}^2)$. Hai nửa đối xứng thì bằng nhau, nên cả hình có diện tích $25\cdot2=50\ (\text{cm}^2)$. Kết quả khớp nhau.
:::

:::warning Những chỗ hay nhầm
- **Coi đường chéo của hình chữ nhật là trục đối xứng.** Sai: "Đường chéo chia hình chữ nhật thành hai nửa bằng nhau nên là trục đối xứng." Vì sao sai: gấp theo đường chéo, hai nửa không chồng khít. Đúng: hình chữ nhật chỉ có $2$ trục đối xứng, là hai đường nối trung điểm các cặp cạnh đối.
- **Cho rằng hình bình hành có trục đối xứng.** Sai: "Hình bình hành cân đối nên có trục đối xứng." Vì sao sai: sự cân đối của nó là do xoay nửa vòng, không phải do gấp. Đúng: hình bình hành có tâm đối xứng nhưng không có trục đối xứng.
- **Cho rằng hình nào có trục đối xứng cũng có tâm đối xứng.** Sai: "Tam giác đều có $3$ trục đối xứng nên có tâm đối xứng." Vì sao sai: xoay tam giác đều nửa vòng thì nó bị lộn ngược. Đúng: tam giác đều không có tâm đối xứng.
- **Xoay chưa đủ nửa vòng.** Sai: "Xoay hình vuông một phần tư vòng thấy trùng, nên điểm đó là tâm đối xứng." Vì sao sai: tâm đối xứng được định nghĩa bằng phép xoay **nửa vòng**. Đúng: hình vuông có tâm đối xứng vì xoay nửa vòng nó cũng trùng với chính nó.
:::

## Thuật ngữ

:::terms
- đối xứng | symmetry
- trục đối xứng | line of symmetry
- hình có trục đối xứng | shape with a line of symmetry
- tâm đối xứng | centre of symmetry
- hình có tâm đối xứng | shape with a centre of symmetry
- chồng khít | to coincide exactly
- quay nửa vòng | half-turn
- trung điểm | midpoint
- hình tròn | circle
:::

## Tóm tắt

- Trục đối xứng: gấp hình theo đường thẳng đó thì hai phần chồng khít lên nhau.
- Tâm đối xứng: quay hình nửa vòng quanh điểm đó thì hình trùng với chính nó; tâm là trung điểm của đoạn nối hai điểm đối xứng.
- Số trục đối xứng: tam giác đều $3$; hình vuông $4$; lục giác đều $6$; hình chữ nhật $2$; hình thoi $2$; hình thang cân $1$; hình bình hành $0$; hình tròn vô số.
- Có tâm đối xứng: hình bình hành, hình chữ nhật, hình thoi, hình vuông (giao điểm hai đường chéo), lục giác đều, hình tròn. Không có: tam giác đều, hình thang cân.
- Hai phần đối xứng với nhau thì bằng nhau: nhờ đó ta suy ra độ dài, diện tích mà không cần đo.

Trái tim giấy cân đối vì nếp gấp là trục đối xứng của nó. Lá bài cầm ngược vẫn như cũ vì nó có tâm đối xứng. Từ giờ, khi thấy một hình đẹp một cách đều đặn, bạn thử tự hỏi: nó đẹp nhờ gấp được, hay nhờ xoay được? Để ôn lại cạnh, góc, đường chéo của các hình trong bài, bạn xem bài [các hình phẳng quen thuộc](lesson:triangles-squares-hexagons).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Cho biết số trục đối xứng của mỗi hình sau: tam giác đều, hình thoi, hình bình hành, lục giác đều, hình tròn.

::hint
**Kiến thức:** bảng số trục đối xứng của các hình quen thuộc.

**Gợi ý các bước:**
1. Với mỗi hình, nghĩ xem có bao nhiêu cách gấp đôi cho hai nửa chồng khít.
2. Ghi lại số cách gấp.

::solution
Tam giác đều có $3$ trục đối xứng, mỗi trục đi qua một đỉnh và trung điểm cạnh đối diện.

Hình thoi có $2$ trục đối xứng là hai đường chéo.

Hình bình hành không có trục đối xứng.

Lục giác đều có $6$ trục đối xứng: ba đường chéo chính và ba đường nối trung điểm các cặp cạnh đối.

Hình tròn có vô số trục đối xứng: mọi đường thẳng đi qua tâm.

Vậy số trục đối xứng lần lượt là $3$; $2$; $0$; $6$; vô số.

**Đáp số.** $3$; $2$; $0$; $6$; vô số.
:::

:::exercise
Trong các hình sau, hình nào có tâm đối xứng: tam giác đều, hình vuông, hình thang cân, hình chữ nhật, hình tròn? Với mỗi hình có tâm đối xứng, hãy cho biết tâm đó ở đâu.

::hint
**Kiến thức:** hình có tâm đối xứng nếu quay nửa vòng quanh tâm thì trùng với chính nó.

**Gợi ý các bước:**
1. Tưởng tượng xoay mỗi hình nửa vòng quanh điểm chính giữa.
2. Hình nào trùng lại vị trí cũ thì có tâm đối xứng.

::solution
Hình vuông và hình chữ nhật có tâm đối xứng là giao điểm hai đường chéo.

Hình tròn có tâm đối xứng là tâm của nó.

Tam giác đều không có tâm đối xứng: quay nửa vòng thì đỉnh ở trên chúi xuống dưới.

Hình thang cân không có tâm đối xứng: quay nửa vòng thì đáy lớn và đáy nhỏ đổi chỗ cho nhau.

Vậy các hình có tâm đối xứng là hình vuông, hình chữ nhật, hình tròn.

**Đáp số.** Hình vuông, hình chữ nhật (giao điểm hai đường chéo); hình tròn (tâm hình tròn).
:::

:::exercise
Xét các chữ cái in hoa, nét đơn giản: M, O, S, E, X.

a) Chữ nào có trục đối xứng?

b) Chữ nào có tâm đối xứng?

::hint
**Kiến thức:** trục đối xứng gắn với gấp, tâm đối xứng gắn với xoay nửa vòng.

**Gợi ý các bước:**
1. Với mỗi chữ, thử gấp dọc, gấp ngang.
2. Thử xoay chữ nửa vòng (lộn ngược tờ giấy).

::solution
a) Chữ M có một trục đối xứng thẳng đứng.

Chữ E có một trục đối xứng nằm ngang.

Chữ O và chữ X có hai trục đối xứng: một thẳng đứng, một nằm ngang.

Chữ S không có trục đối xứng.

b) Xoay nửa vòng, các chữ O, S, X trùng với chính nó nên có tâm đối xứng.

Chữ M xoay nửa vòng thành hình chữ W, chữ E xoay nửa vòng thì quay mặt sang trái, nên hai chữ này không có tâm đối xứng.

Vậy a) M, O, E, X có trục đối xứng; b) O, S, X có tâm đối xứng.

**Đáp số.** a) M, O, E, X. b) O, S, X.
:::

:::exercise
Cho hình chữ nhật $ABCD$ có tâm đối xứng $O$ và đường chéo $AC=26$ cm.

a) Điểm nào đối xứng với điểm $B$ qua $O$?

b) Tính $OA$ và $OB$.

::hint
**Kiến thức:** tâm đối xứng của hình chữ nhật là giao điểm hai đường chéo; hai đường chéo của hình chữ nhật bằng nhau.

**Gợi ý các bước:**
1. $O$ là trung điểm của $AC$ và của $BD$.
2. Dùng $BD=AC$.

::solution
a) Tâm đối xứng $O$ là giao điểm hai đường chéo $AC$ và $BD$. Quay nửa vòng quanh $O$, đỉnh $B$ tới vị trí đỉnh $D$.

Do đó điểm đối xứng với $B$ qua $O$ là $D$.

b) Vì $O$ là trung điểm của $AC$ nên
$$OA=AC:2=26:2=13\ (\text{cm}).$$

Hình chữ nhật có hai đường chéo bằng nhau nên $BD=AC=26$ cm. Vì $O$ là trung điểm của $BD$ nên
$$OB=BD:2=26:2=13\ (\text{cm}).$$

Vậy $D$ đối xứng với $B$ qua $O$; $OA=OB=13$ cm.

**Đáp số.** a) Điểm $D$. b) $OA=13$ cm; $OB=13$ cm.
:::

:::exercise
Cho hình thoi $ABCD$ có hai đường chéo $AC=12$ cm, $BD=16$ cm cắt nhau tại $O$.

a) Nêu các trục đối xứng và tâm đối xứng của hình thoi.

b) Tính $OA$, $OB$.

c) Tính diện tích của hình thoi.

::hint
**Kiến thức:** hình thoi có hai trục đối xứng là hai đường chéo, tâm đối xứng là giao điểm của chúng; $S=\dfrac{m\cdot n}{2}$.

**Gợi ý các bước:**
1. $O$ là tâm đối xứng nên là trung điểm của mỗi đường chéo.
2. Diện tích bằng nửa tích hai đường chéo.

::solution
a) Hình thoi $ABCD$ có hai trục đối xứng là hai đường thẳng $AC$ và $BD$. Tâm đối xứng là giao điểm $O$ của hai đường chéo.

b) Vì $O$ là tâm đối xứng nên $O$ là trung điểm của $AC$ và của $BD$. Do đó
$$OA=12:2=6\ (\text{cm}),\qquad OB=16:2=8\ (\text{cm}).$$

c) Diện tích của hình thoi là
$$S=\dfrac{12\cdot16}{2}=\dfrac{192}{2}=96\ (\text{cm}^2).$$

Vậy hình thoi có hai trục đối xứng $AC$, $BD$, tâm đối xứng $O$; $OA=6$ cm, $OB=8$ cm; diện tích $96\ \text{cm}^2$.

**Đáp số.** a) Trục $AC$, $BD$; tâm $O$. b) $OA=6$ cm; $OB=8$ cm. c) $96\ \text{cm}^2$.
:::

:::exercise
Một tấm biển có dạng hình tròn nền đỏ, chính giữa có một vạch hình chữ nhật màu trắng nằm ngang. Tâm của hình chữ nhật trùng với tâm của hình tròn.

a) Tấm biển có bao nhiêu trục đối xứng?

b) Tấm biển có tâm đối xứng không?

::hint
**Kiến thức:** một đường thẳng là trục đối xứng của cả tấm biển khi nó là trục đối xứng của cả hình tròn lẫn vạch chữ nhật.

**Gợi ý các bước:**
1. Hình tròn có vô số trục, nhưng vạch chữ nhật chỉ có $2$ trục.
2. Xét xem khi quay nửa vòng quanh tâm, hình tròn và vạch chữ nhật có trùng lại không.

::solution
a) Mọi đường thẳng đi qua tâm đều là trục đối xứng của hình tròn. Vạch chữ nhật chỉ có $2$ trục đối xứng: đường nằm ngang và đường thẳng đứng đi qua tâm của nó. Hai đường này cũng đi qua tâm hình tròn.

Do đó tấm biển có $2$ trục đối xứng: một đường nằm ngang và một đường thẳng đứng đi qua tâm.

b) Quay nửa vòng quanh tâm, hình tròn trùng với chính nó và vạch chữ nhật cũng trùng với chính nó. Do đó tấm biển có tâm đối xứng là tâm của hình tròn.

Vậy tấm biển có $2$ trục đối xứng và có tâm đối xứng.

**Đáp số.** a) $2$ trục. b) Có, là tâm của hình tròn.
:::

:::exercise
Bạn Lan gấp đôi một tờ giấy rồi cắt một tam giác vuông sát nếp gấp: cạnh góc vuông nằm trên nếp gấp dài $6$ cm, cạnh góc vuông còn lại dài $4$ cm. Khi mở tờ giấy ra, Lan được một hình tam giác. Tính độ dài cạnh đáy (cạnh vuông góc với nếp gấp) và diện tích của tam giác đó.

::hint
**Kiến thức:** nếp gấp là trục đối xứng; hai nửa đối xứng thì bằng nhau. Diện tích tam giác vuông bằng nửa tích hai cạnh góc vuông.

**Gợi ý các bước:**
1. Cạnh đáy gồm hai đoạn $4$ cm ở hai phía của nếp gấp.
2. Tính diện tích một nửa rồi nhân đôi.

::solution
Nếp gấp là trục đối xứng của hình thu được. Hình đó gồm hai tam giác vuông bằng nhau, đối xứng với nhau qua nếp gấp.

Cạnh đáy của tam giác thu được gồm hai đoạn dài $4$ cm ở hai phía của nếp gấp, nên dài
$$4\cdot2=8\ (\text{cm}).$$

Diện tích mỗi tam giác vuông là
$$\dfrac{6\cdot4}{2}=12\ (\text{cm}^2).$$

Diện tích của tam giác thu được là
$$12\cdot2=24\ (\text{cm}^2).$$

Vậy tam giác thu được có cạnh đáy $8$ cm và diện tích $24\ \text{cm}^2$.

**Đáp số.** Cạnh đáy $8$ cm; diện tích $24\ \text{cm}^2$.
:::

:::exercise Thử thách
Một tấm bìa hình chữ nhật dài $8$ cm, rộng $4$ cm có tâm đối xứng $O$. Bạn Nam cắt tấm bìa theo một đường thẳng bất kì đi qua $O$, được hai mảnh. Chứng tỏ rằng hai mảnh đó có diện tích bằng nhau, và tính diện tích mỗi mảnh.

::hint
**Kiến thức:** quay nửa vòng quanh tâm đối xứng, hình trùng với chính nó; một đường thẳng đi qua $O$ khi quay nửa vòng quanh $O$ cũng trùng với chính nó.

**Gợi ý các bước:**
1. Nghĩ xem khi quay cả tấm bìa nửa vòng quanh $O$, mảnh thứ nhất đi tới đâu.
2. Hai mảnh chồng khít lên nhau thì có diện tích bằng nhau.

::solution
Quay tấm bìa nửa vòng quanh $O$. Vì $O$ là tâm đối xứng nên tấm bìa trùng với chính nó.

Đường cắt là một đường thẳng đi qua $O$, nên khi quay nửa vòng quanh $O$, đường cắt cũng trùng với chính nó, còn hai phía của đường cắt đổi chỗ cho nhau.

Do đó mảnh thứ nhất sau khi quay nằm chồng khít lên vị trí của mảnh thứ hai. Suy ra hai mảnh có diện tích bằng nhau.

Diện tích của cả tấm bìa là
$$8\cdot4=32\ (\text{cm}^2).$$

Diện tích mỗi mảnh là
$$32:2=16\ (\text{cm}^2).$$

Vậy hai mảnh có diện tích bằng nhau, mỗi mảnh $16\ \text{cm}^2$.

**Đáp số.** Mỗi mảnh $16\ \text{cm}^2$.
:::

## Kiểm tra mini

:::quiz
::mc
Hình nào sau đây không có trục đối xứng?
A. Hình thang cân.
B. Hình bình hành.
C. Hình thoi.
D. Tam giác đều.
::key B
Hình bình hành chỉ có tâm đối xứng, không có trục đối xứng. Hình thang cân có $1$ trục, hình thoi có $2$ trục, tam giác đều có $3$ trục.

::mc
Hình vuông có bao nhiêu trục đối xứng?
A. $1$.
B. $2$.
C. $4$.
D. $8$.
::key C
Hai đường chéo và hai đường nối trung điểm các cặp cạnh đối, tất cả $4$ trục. B chỉ đếm một loại; D đếm mỗi trục hai lần.

::mc
Hình nào sau đây có tâm đối xứng?
A. Tam giác đều.
B. Hình thang cân.
C. Nửa hình tròn.
D. Hình bình hành.
::key D
Hình bình hành có tâm đối xứng là giao điểm hai đường chéo. Ba hình còn lại quay nửa vòng thì bị lộn ngược.

::mc
Tâm đối xứng của hình chữ nhật là
A. giao điểm của hai đường chéo.
B. một đỉnh của hình chữ nhật.
C. trung điểm của một cạnh.
D. một điểm bất kì nằm trên đường chéo.
::key A
Quay nửa vòng quanh giao điểm hai đường chéo, hình chữ nhật trùng với chính nó. Quay quanh các điểm ở B, C, D thì hình bị lệch khỏi vị trí cũ.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) Hình tròn có vô số trục đối xứng.
b) Hình nào có trục đối xứng thì cũng có tâm đối xứng.
c) Hình thoi có bốn trục đối xứng.
d) Lục giác đều vừa có trục đối xứng, vừa có tâm đối xứng.
::key Đ S S Đ
a) Đúng: mọi đường thẳng đi qua tâm đều là trục đối xứng. b) Sai: tam giác đều có $3$ trục nhưng không có tâm đối xứng. c) Sai: hình thoi chỉ có $2$ trục là hai đường chéo. d) Đúng: nó có $6$ trục và tâm đối xứng là giao điểm ba đường chéo chính.

::sa
Lục giác đều có bao nhiêu trục đối xứng?
::key 6
Ba đường chéo chính và ba đường nối trung điểm các cặp cạnh đối: $3+3=6$.

::sa
Hình bình hành $ABCD$ có tâm đối xứng $O$ và $AC=18$ cm. Độ dài đoạn $OA$ là bao nhiêu xăng-ti-mét?
::key 9
$O$ là trung điểm của $AC$ nên $OA=18:2=9$ (cm).
:::
