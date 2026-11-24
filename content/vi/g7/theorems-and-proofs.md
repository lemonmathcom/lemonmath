---
title: Định lí và chứng minh định lí
description: Định lí là gì, cách viết giả thiết và kết luận, cách chứng minh bằng chuỗi lập luận có căn cứ, và cách bác bỏ một mệnh đề bằng phản ví dụ.
minutes: 20
---

:::goals
- Phân biệt giả thiết và kết luận, viết định lí dưới dạng "nếu ... thì ...".
- Vẽ hình, viết GT và KL cho một định lí hình học.
- Trình bày chứng minh thành chuỗi lập luận, mỗi bước có căn cứ.
- Bác bỏ một mệnh đề sai bằng một phản ví dụ.
:::

Nam vẽ hai đường thẳng cắt nhau năm lần, mỗi lần đo bốn góc, và lần nào hai góc đối đỉnh cũng bằng nhau. Nam kết luận: "Hai góc đối đỉnh luôn bằng nhau." Hà hỏi lại: "Nếu lần thứ sáu bạn vẽ khác đi thì sao?"

Làm thế nào để chắc chắn một điều đúng với mọi hình, kể cả những hình chưa ai vẽ? Đó là việc của chứng minh. Học xong bài này, bạn sẽ biết viết một chứng minh gọn gàng, đúng kiểu mà các bài sau đều dùng.

## Định lí

Trong toán, có những điều ta **thừa nhận** (định nghĩa, tiên đề như tiên đề Euclid) và có những điều ta **chứng minh** từ chúng. Những điều đã chứng minh xong gọi là định lí.

:::definition Định lí, giả thiết, kết luận
**Định lí** là một khẳng định đúng, được suy ra từ những điều đã biết là đúng. Nhiều định lí có dạng "**nếu** $A$ **thì** $B$": phần $A$ là **giả thiết** (viết tắt GT), phần $B$ là **kết luận** (viết tắt KL).
:::

Ví dụ định lí về góc đối đỉnh viết là: "Nếu hai góc đối đỉnh thì chúng bằng nhau". Giả thiết: hai góc đối đỉnh. Kết luận: hai góc ấy bằng nhau. Khi viết GT, KL ta dùng kí hiệu ngắn gọn kèm hình vẽ, để người đọc nhìn là hiểu đề cho gì và cần chứng minh gì.

:::diagram $a\parallel b$; hai góc so le trong $\alpha$ và $\beta$
alt: Hai đường thẳng song song a và b bị đường thẳng c cắt; hai góc so le trong là alpha và beta
point A 1.13,2.2 above-left
point B 2.4,0 below-right
point P1 -0.67,2.2 ""
point P2 4.2,2.2 ""
point Q1 -0.67,0 ""
point Q2 4.2,0 ""
point C1 0.68,2.98 ""
point C2 2.85,-0.78 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P2 A B "α"
angle Q1 B A "β"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 0.43,3.08 "c"
:::

:::example Tìm giả thiết và kết luận
Viết mỗi định lí sau dưới dạng "nếu ... thì ...", rồi viết GT và KL:

a) Hai góc đối đỉnh thì bằng nhau.

b) Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.

c) Một đường thẳng cắt hai đường thẳng song song thì hai góc so le trong bằng nhau (hình trên).

**Lời giải.** a) Nếu hai góc đối đỉnh thì chúng bằng nhau. GT: $\widehat{xOy}$ và $\widehat{x'Oy'}$ đối đỉnh. KL: $\widehat{xOy}=\widehat{x'Oy'}$.

b) Nếu hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì chúng song song với nhau. GT: $a$, $b$, $c$ phân biệt, $a\parallel c$, $b\parallel c$. KL: $a\parallel b$.

c) Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc so le trong bằng nhau. GT: $a\parallel b$, $c$ cắt $a$ tại $A$ và cắt $b$ tại $B$, $\alpha$ và $\beta$ là hai góc so le trong. KL: $\alpha=\beta$.

Ở mỗi câu, GT là phần đứng sau "nếu", KL là phần đứng sau "thì".
:::

## Chứng minh định lí

**Chứng minh** một định lí là dùng một chuỗi lập luận để đi từ giả thiết đến kết luận. Mỗi bước phải có **căn cứ**: giả thiết, định nghĩa, tiên đề, hoặc một định lí đã học. Bạn sẽ thấy các căn cứ ấy ghi trong ngoặc, như (gt), (kề bù), (so le trong).

Một bài chứng minh gọn gàng có bốn phần: vẽ hình; viết GT, KL; chứng minh từng bước "vì ... nên ..."; và câu kết luận.

:::diagram Hai đường thẳng $xx'$ và $yy'$ cắt nhau tại $O$
alt: Hai đường thẳng xx' và yy' cắt nhau tại O tạo bốn góc, ba góc được đánh số
point O 0,0 below-right
point x 2.82,1.03 right
point y -1.5,2.6 above-left
point xp -2.82,-1.03 left "x'"
point yp 1.5,-2.6 below-right "y'"
segment x xp
segment y yp
angle x O y "1"
angle y O xp "2"
angle xp O yp "3"
:::

:::example Chứng minh hai góc đối đỉnh bằng nhau
Chứng minh định lí: hai góc đối đỉnh thì bằng nhau.

**Lời giải.**

GT: Hai đường thẳng $xx'$ và $yy'$ cắt nhau tại $O$.

KL: $\widehat{xOy}=\widehat{x'Oy'}$.

Chứng minh. Vì $Ox$, $Ox'$ là hai tia đối nhau nên $\widehat{xOy}$ và $\widehat{yOx'}$ là hai góc kề bù, suy ra
$$\widehat{xOy}+\widehat{yOx'}=180^\circ\quad(1)$$
(tính chất hai góc kề bù).

Vì $Oy$, $Oy'$ là hai tia đối nhau nên $\widehat{x'Oy'}$ và $\widehat{yOx'}$ là hai góc kề bù, suy ra
$$\widehat{x'Oy'}+\widehat{yOx'}=180^\circ\quad(2)$$
(tính chất hai góc kề bù).

Từ (1) và (2): $\widehat{xOy}+\widehat{yOx'}=\widehat{x'Oy'}+\widehat{yOx'}$. Bớt $\widehat{yOx'}$ ở cả hai vế, ta được $\widehat{xOy}=\widehat{x'Oy'}$.

Vậy hai góc đối đỉnh thì bằng nhau. Câu hỏi của Hà đã có lời đáp: lập luận trên không phụ thuộc vào cách vẽ nên đúng cho mọi hình.
:::

:::diagram $a\parallel b$ và $c\perp a$
alt: Hai đường thẳng song song a, b; đường thẳng c vuông góc với a tại A và cắt b tại B
point A 2.4,2.2 above-left
point B 2.4,0 below-right
point P1 0.6,2.2 ""
point P2 4.2,2.2 ""
point Q1 0.6,0 ""
point Q2 4.2,0 ""
point C1 2.4,3.1 ""
point C2 2.4,-0.9 ""
segment P1 P2
segment Q1 Q2
segment C1 C2
angle P2 A B "90°"
angle Q2 B C2 "?"
label 4.5,2.2 "a"
label 4.5,0 "b"
label 2.15,3.2 "c"
:::

:::example Hai đường thẳng song song và đường thẳng vuông góc
Chứng minh: nếu một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia.

**Lời giải.**

GT: $a\parallel b$, $c\perp a$ tại $A$, $c$ cắt $b$ tại $B$.

KL: $c\perp b$.

Chứng minh. Gọi $\widehat{A}_3$ và $\widehat{B}_7$ là hai góc đồng vị như hình trên. Vì $c\perp a$ nên $\widehat{A}_3=90^\circ$ (gt).

Vì $a\parallel b$ nên hai góc đồng vị bằng nhau (tính chất hai đường thẳng song song), suy ra $\widehat{B}_7=\widehat{A}_3=90^\circ$.

Do $\widehat{B}_7=90^\circ$ nên $c\perp b$.

Vậy $c\perp b$.
:::

:::diagram Hai tia phân giác của hai góc kề bù
alt: Đường thẳng xz, tia Oy và các tia phân giác Om, On của hai góc kề bù xOy, yOz
point O 0,0 below
point x -3.2,0 left
point z 3.2,0 right
point y -1.93,2.3 above-left
point m -2.72,1.27 left
point n 1.27,2.72 above-right
segment x z
segment O y
segment O m
segment O n
angle x O y "α"
angle y O z "β"
:::

:::example Hai tia phân giác của hai góc kề bù
Chứng minh: hai tia phân giác của hai góc kề bù vuông góc với nhau.

**Lời giải.**

GT: $\widehat{xOy}$ và $\widehat{yOz}$ kề bù; $Om$ là tia phân giác của $\widehat{xOy}$; $On$ là tia phân giác của $\widehat{yOz}$.

KL: $Om\perp On$, tức $\widehat{mOn}=90^\circ$.

Chứng minh. Vì $\widehat{xOy}$ và $\widehat{yOz}$ kề bù nên $\widehat{xOy}+\widehat{yOz}=180^\circ$ (kề bù).

Vì $Om$ là tia phân giác của $\widehat{xOy}$ nên $\widehat{mOy}=\dfrac12\widehat{xOy}$. Vì $On$ là tia phân giác của $\widehat{yOz}$ nên $\widehat{yOn}=\dfrac12\widehat{yOz}$ (tính chất tia phân giác).

Tia $Oy$ nằm giữa $Om$ và $On$ nên
$$\widehat{mOn}=\widehat{mOy}+\widehat{yOn}=\frac12(\widehat{xOy}+\widehat{yOz})=\frac12\cdot180^\circ=90^\circ.$$

Vậy $Om\perp On$.
:::

## Phản ví dụ

Muốn chứng minh một định lí, ta phải lập luận cho **mọi** trường hợp. Còn muốn bác bỏ một mệnh đề sai, chỉ cần **một** trường hợp thoả giả thiết mà không thoả kết luận. Trường hợp ấy gọi là **phản ví dụ**.

:::diagram Hai góc bằng nhau nhưng không đối đỉnh
alt: Hai góc cùng bằng 50 độ có hai đỉnh khác nhau O và O phẩy
point O 0,0 below-left
point X1 2.5,0 right "x"
point Y1 1.61,1.92 above-right "y"
point P 6,0 below-left "O'"
point X2 5.57,2.46 above "x'"
point Y2 3.83,1.25 above-left "y'"
segment O X1
segment O Y1
segment P X2
segment P Y2
angle X1 O Y1 "50°"
angle X2 P Y2 "50°"
:::

:::example Tìm phản ví dụ
Chỉ ra phản ví dụ để chứng tỏ các mệnh đề sau là sai:

a) Hai góc bằng nhau thì đối đỉnh.

b) Hai góc bù nhau thì kề bù.

c) Nếu $a^2=b^2$ thì $a=b$.

**Lời giải.** a) Hai góc $\widehat{xOy}$ và $\widehat{x'O'y'}$ trong hình trên cùng bằng $50^\circ$ nhưng có hai đỉnh khác nhau, nên không đối đỉnh. Đây là một phản ví dụ.

b) Hai góc $100^\circ$ và $80^\circ$ có tổng $180^\circ$ nên bù nhau. Nếu đặt chúng ở hai đỉnh khác nhau thì không có cạnh chung, nên không kề bù. Đây là một phản ví dụ.

c) Lấy $a=2$, $b=-2$: ta có $a^2=4=b^2$ nhưng $a\ne b$. Đây là một phản ví dụ.

Vậy cả ba mệnh đề đều sai.
:::

Ví dụ sau là một tình huống thực tế, theo bốn bước.

:::diagram Cổng sắt: thanh đứng $d$, hai thanh ngang $a$, $b$
alt: Thanh đứng d cắt hai thanh ngang a và b tại A và B, các góc tại A và B đều vuông
point D1 0,0 ""
point D2 0,4 ""
point A 0,1 below-right
point B 0,3 below-right
point L1 -2.2,1 ""
point R1 2.2,1 ""
point L2 -2.2,3 ""
point R2 2.2,3 ""
segment D1 D2
segment L1 R1
segment L2 R2
right R1 A D2
right R2 B D2
label 2.5,1 "a"
label 2.5,3 "b"
label 0.2,4.1 "d"
:::

:::example Cổng sắt
Giả sử một cổng sắt có thanh đứng $d$. Hai thanh ngang $a$ và $b$ đều được hàn vuông góc với $d$. Giải thích vì sao hai thanh ngang song song.

**Lời giải.**

*Hiểu đề.* Cho: $a\perp d$ tại $A$ và $b\perp d$ tại $B$. Cần chứng tỏ $a\parallel b$.

*Tìm cách giải.* Hai góc ở $A$ và $B$ nằm ở vị trí đồng vị. Nếu chúng bằng nhau, ta dùng dấu hiệu nhận biết hai đường thẳng song song.

*Giải.*
GT: $a\perp d$ tại $A$, $b\perp d$ tại $B$. KL: $a\parallel b$.

Vì $a\perp d$ nên góc tạo bởi $a$ và $d$ ở phía trên bên phải tại $A$ bằng $90^\circ$ (gt). Vì $b\perp d$ nên góc cùng vị trí ở $B$ cũng bằng $90^\circ$ (gt).

Hai góc này là hai góc đồng vị và bằng nhau, nên theo dấu hiệu nhận biết hai đường thẳng song song, $a\parallel b$.

Vậy hai thanh ngang song song.

*Nhìn lại.* Ta không cần đo khoảng cách giữa hai thanh. Chỉ cần hai góc vuông là đủ. Nếu một thanh bị hàn nghiêng, góc không còn bằng nhau và kết luận không còn đúng.
:::

:::warning Những sai lầm thường gặp
- **Đo vài hình rồi coi như đã chứng minh.** Sai: "Em đo năm hình đều thấy $\widehat{xOy}=\widehat{x'Oy'}$ nên xong". Lí do sai: đo chỉ kiểm tra từng hình cụ thể, chưa chắc đúng cho hình khác. Đúng: lập luận từ các căn cứ.
- **Dùng điều cần chứng minh làm căn cứ.** Sai: khi chứng minh hai góc đối đỉnh bằng nhau lại viết "vì hai góc đối đỉnh bằng nhau". Lí do sai: lập luận quẩn quanh. Đúng: dùng tính chất kề bù đã biết.
- **Viết bước không ghi căn cứ.** Sai: "$\widehat{xOy}=\widehat{x'Oy'}$" xuất hiện không lí do. Lí do sai: người đọc không biết điều đó từ đâu ra. Đúng: ghi (gt), (kề bù), (đối đỉnh), (so le trong)... ngay sau mỗi bước.
:::

**Kết nối.** Bài này gom những gì bạn đã học ở hai bài trước thành định lí và cho bạn cách viết chúng thành văn: GT, KL, chứng minh từng bước có căn cứ. Bài sau, bạn sẽ dùng đúng cách ấy để chứng minh rằng tổng ba góc của một tam giác bằng $180^\circ$. Trở lại câu hỏi của Hà: nhờ chứng minh, ta chắc chắn hai góc đối đỉnh luôn bằng nhau, kể cả ở lần vẽ thứ sáu.

## Thuật ngữ

:::terms
- định lí | theorem
- giả thiết | hypothesis (given)
- kết luận | conclusion
- chứng minh | proof
- tiên đề | axiom
- định nghĩa | definition
- phản ví dụ | counterexample
- mệnh đề | statement
- lập luận | argument (reasoning)
- suy ra | deduce
:::

## Tóm tắt

- Định lí là khẳng định đúng suy ra từ những điều đã biết là đúng; thường có dạng "nếu $A$ thì $B$" với $A$ là giả thiết, $B$ là kết luận.
- Khi chứng minh, ta vẽ hình, viết GT, KL rồi lập luận từng bước.
- Mỗi bước có căn cứ: giả thiết, định nghĩa, tiên đề hoặc định lí đã học.
- Chứng minh phải đúng cho mọi trường hợp; đo vài hình chưa đủ.
- Một phản ví dụ đủ để bác bỏ một mệnh đề sai.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Viết GT và KL của định lí: "Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc đồng vị bằng nhau." Dùng các kí hiệu $a$, $b$, $c$ và các giao điểm $A$, $B$.

::hint
**Kiến thức:** giả thiết là phần đứng sau "nếu", kết luận là phần đứng sau "thì".

**Gợi ý các bước:**
1. Gọi tên hai đường thẳng song song và đường thẳng cắt chúng.
2. Gọi tên hai góc đồng vị ở kết luận.

::solution
Trong định lí dạng "nếu ... thì ...", phần sau từ "nếu" là giả thiết (GT), phần sau từ "thì" là kết luận (KL).

GT: $a\parallel b$; đường thẳng $c$ cắt $a$ tại $A$ và cắt $b$ tại $B$.

KL: Hai góc đồng vị bằng nhau, chẳng hạn $\widehat{A}_1=\widehat{B}_5$.

Vậy GT: $a\parallel b$, $c$ cắt $a$, $b$ tại $A$, $B$; KL: $\widehat{A}_1=\widehat{B}_5$ (và các cặp góc đồng vị khác).

**Đáp số.** GT: $a\parallel b$, $c$ cắt $a$, $b$ tại $A$, $B$. KL: $\widehat{A}_1=\widehat{B}_5$ (và các cặp đồng vị khác).
:::

:::exercise
Viết định lí "Hai góc kề bù có tổng bằng $180^\circ$" dưới dạng "nếu ... thì ...", rồi viết GT và KL.

::hint
**Kiến thức:** định lí dạng "nếu $A$ thì $B$"; $A$ là GT, $B$ là KL.

**Gợi ý các bước:**
1. Hai góc kề bù là phần đã cho.
2. Tổng bằng $180^\circ$ là điều cần chứng minh.

::solution
Dạng "nếu ... thì ...": Nếu hai góc kề bù thì tổng của chúng bằng $180^\circ$.

Phần sau từ "nếu" là giả thiết, phần sau từ "thì" là kết luận. Gọi hai góc kề bù là $\widehat{xOy}$ và $\widehat{yOz}$.

GT: $\widehat{xOy}$ và $\widehat{yOz}$ kề bù.

KL: $\widehat{xOy}+\widehat{yOz}=180^\circ$.

Vậy GT: $\widehat{xOy}$ và $\widehat{yOz}$ kề bù; KL: $\widehat{xOy}+\widehat{yOz}=180^\circ$.

**Đáp số.** GT: $\widehat{xOy}$ và $\widehat{yOz}$ kề bù. KL: $\widehat{xOy}+\widehat{yOz}=180^\circ$.
:::

:::exercise
Chỉ ra phản ví dụ để chứng tỏ mỗi mệnh đề sau sai:

a) Nếu $ab>0$ thì $a>0$ và $b>0$.

b) Tổng của hai số vô tỉ là một số vô tỉ.

::hint
**Kiến thức:** phản ví dụ là một trường hợp thoả giả thiết nhưng không thoả kết luận.

**Gợi ý các bước:**
1. a) Thử hai số cùng âm.
2. b) Thử hai số vô tỉ đối nhau, như $\sqrt2$ và $-\sqrt2$.

::solution
a) Lấy $a=-1$, $b=-2$: $ab=2>0$ nhưng $a<0$ và $b<0$. Đây là phản ví dụ.

b) Lấy $\sqrt2$ và $-\sqrt2$ là hai số vô tỉ: tổng $\sqrt2+(-\sqrt2)=0$ là số hữu tỉ. Đây là phản ví dụ.

Vậy cả hai mệnh đề đều sai.

**Đáp số.** a) $a=-1$, $b=-2$; b) $\sqrt2$ và $-\sqrt2$.
:::

:::exercise
Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$. Chứng minh $\widehat{AOD}=\widehat{BOC}$.

::hint
**Kiến thức:** hai góc cùng kề bù với một góc thứ ba thì bằng nhau; hoặc dùng cách chứng minh hai góc đối đỉnh.

**Gợi ý các bước:**
1. Ghi GT, KL.
2. Viết hai đẳng thức kề bù có chung số hạng $\widehat{AOC}$.

::solution
GT: Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$.

KL: $\widehat{AOD}=\widehat{BOC}$.

Chứng minh. Vì $OC$, $OD$ là hai tia đối nhau nên $\widehat{AOD}$ và $\widehat{AOC}$ là hai góc kề bù, suy ra
$$\widehat{AOD}+\widehat{AOC}=180^\circ\ \text{(kề bù)}.$$

Vì $OA$, $OB$ là hai tia đối nhau nên $\widehat{BOC}$ và $\widehat{AOC}$ là hai góc kề bù, suy ra
$$\widehat{BOC}+\widehat{AOC}=180^\circ\ \text{(kề bù)}.$$

Do đó $\widehat{AOD}+\widehat{AOC}=\widehat{BOC}+\widehat{AOC}$. Bớt $\widehat{AOC}$ ở hai vế, ta được $\widehat{AOD}=\widehat{BOC}$.

Vậy $\widehat{AOD}=\widehat{BOC}$ (điều phải chứng minh).

**Đáp số.** Đã chứng minh.
:::

:::exercise
Chứng minh: hai góc cùng bù với một góc thứ ba thì bằng nhau.

::hint
**Kiến thức:** hai góc bù nhau có tổng bằng $180^\circ$.

**Gợi ý các bước:**
1. Gọi ba góc là $\widehat{A}$, $\widehat{B}$, $\widehat{C}$ và viết GT, KL.
2. Lập hai đẳng thức tổng bằng $180^\circ$ rồi so sánh.

::solution
GT: $\widehat{A}$ bù với $\widehat{C}$; $\widehat{B}$ bù với $\widehat{C}$.

KL: $\widehat{A}=\widehat{B}$.

Chứng minh. Vì $\widehat{A}$ bù với $\widehat{C}$ nên $\widehat{A}+\widehat{C}=180^\circ$, tức là $\widehat{A}=180^\circ-\widehat{C}$ (gt).

Vì $\widehat{B}$ bù với $\widehat{C}$ nên $\widehat{B}+\widehat{C}=180^\circ$, tức là $\widehat{B}=180^\circ-\widehat{C}$ (gt).

Hai vế phải cùng bằng $180^\circ-\widehat{C}$ nên $\widehat{A}=\widehat{B}$.

Vậy hai góc cùng bù với một góc thứ ba thì bằng nhau.

**Đáp số.** Đã chứng minh.
:::

:::exercise
Giả sử hai đường ray $a$ và $b$ của hai đoạn đường sắt thẳng cùng song song với một quốc lộ $d$ (ba đường phân biệt). Hai đường ray có song song với nhau không? Giải thích.

::hint
**Kiến thức:** hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau.

**Gợi ý các bước:**
1. Viết GT, KL.
2. Nêu căn cứ.

::solution
GT: $a\parallel d$, $b\parallel d$, $a$, $b$, $d$ phân biệt. KL: $a\parallel b$.

Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau (hệ quả của tiên đề Euclid). Do $a\parallel d$ và $b\parallel d$ nên $a\parallel b$.

Vậy hai đường ray song song với nhau.

**Đáp số.** Có, $a\parallel b$.
:::

:::exercise
Giả sử một thợ mộc đo hai góc đồng vị tại hai cạnh đối của mặt bàn bị một cạnh khác cắt, được $88^\circ$ và $92^\circ$. Hai cạnh đối có song song không? Giải thích.

::hint
**Kiến thức:** nếu hai đường thẳng song song thì hai góc đồng vị bằng nhau.

**Gợi ý các bước:**
1. Giả sử hai cạnh song song, điều gì xảy ra với hai góc đồng vị?
2. So với kết quả đo.

::solution
Nếu hai cạnh đối song song thì theo tính chất của hai đường thẳng song song, hai góc đồng vị phải bằng nhau. Nhưng $88^\circ\ne92^\circ$, mâu thuẫn.

Vậy hai cạnh đối không song song. Chênh lệch $4^\circ$ lớn hơn sai số thông thường của thước đo góc, nên có thể tin kết quả đo.

**Đáp số.** Không song song.
:::

:::exercise
Cho $\widehat{xOy}$ và $\widehat{yOz}$ là hai góc kề bù, $\widehat{xOy}=2\cdot\widehat{yOz}$. Viết GT, KL rồi tính mỗi góc. (Ôn lại góc kề bù.)

::hint
**Kiến thức:** hai góc kề bù có tổng $180^\circ$.

**Gợi ý các bước:**
1. Đặt $\widehat{yOz}=t$ (độ).
2. Lập phương trình $2t+t=180$.

::solution
GT: $\widehat{xOy}$ và $\widehat{yOz}$ kề bù; $\widehat{xOy}=2\cdot\widehat{yOz}$. KL: tính $\widehat{xOy}$, $\widehat{yOz}$.

Đặt $\widehat{yOz}=t^\circ$ thì $\widehat{xOy}=2t^\circ$. Vì hai góc kề bù nên $2t+t=180$, suy ra $3t=180$, $t=60$.

Vậy $\widehat{yOz}=60^\circ$ và $\widehat{xOy}=120^\circ$.

**Đáp số.** $60^\circ$ và $120^\circ$.
:::

:::exercise
Hai đường thẳng $a$, $b$ bị đường thẳng $c$ cắt tại $A$, $B$. Chứng minh: nếu một cặp góc đồng vị bằng nhau thì các cặp góc so le trong cũng bằng nhau. (Dùng các góc đánh số như bài trước: $\widehat{A}_1$ và $\widehat{B}_5$ đồng vị, $\widehat{A}_3$ và $\widehat{B}_5$ so le trong.)

::hint
**Kiến thức:** hai góc đối đỉnh bằng nhau.

**Gợi ý các bước:**
1. Cho $\widehat{A}_1=\widehat{B}_5$.
2. $\widehat{A}_1$ đối đỉnh với góc nào? Rồi so sánh với $\widehat{B}_5$.

::solution
GT: Hai đường thẳng $a$, $b$ bị đường thẳng $c$ cắt tại $A$, $B$; $\widehat{A}_1=\widehat{B}_5$ (một cặp góc đồng vị bằng nhau).

KL: $\widehat{A}_3=\widehat{B}_5$ (cặp góc so le trong bằng nhau).

Chứng minh. Vì $\widehat{A}_1$ và $\widehat{A}_3$ là hai góc đối đỉnh nên
$$\widehat{A}_3=\widehat{A}_1\ \text{(đối đỉnh)}.$$

Mà $\widehat{A}_1=\widehat{B}_5$ (gt) nên $\widehat{A}_3=\widehat{B}_5$.

Vậy $\widehat{A}_3=\widehat{B}_5$, tức là nếu một cặp góc đồng vị bằng nhau thì cặp góc so le trong cũng bằng nhau.

**Đáp số.** Đã chứng minh.
:::

:::exercise Thử thách
Cho $a\parallel b$, đường thẳng $c$ cắt $a$ tại $A$, cắt $b$ tại $B$. Gọi $\widehat{A}_1$ và $\widehat{B}_5$ là hai góc đồng vị ở cùng một phía, đánh số như bài trước. Tia $Am$ là phân giác của $\widehat{A}_1$, tia $Bn$ là phân giác của $\widehat{B}_5$. Chứng minh $Am\parallel Bn$.

::hint
**Kiến thức:** tính chất hai đường thẳng song song, tia phân giác chia đôi góc, dấu hiệu nhận biết bằng góc đồng vị.

**Gợi ý các bước:**
1. Chứng tỏ hai góc tạo bởi $c$ với $Am$ và $Bn$ bằng nhau.
2. Hai góc ấy ở vị trí gì với hai đường $Am$, $Bn$ và đường cắt $c$?

::solution
GT: $a\parallel b$; $c$ cắt $a$ tại $A$, cắt $b$ tại $B$; $Am$ là phân giác của $\widehat{A}_1$; $Bn$ là phân giác của $\widehat{B}_5$.

KL: $Am\parallel Bn$.

Chứng minh. Vì $a\parallel b$ nên $\widehat{A}_1=\widehat{B}_5$ (hai góc đồng vị).

Vì $Am$ là phân giác của $\widehat{A}_1$ nên góc giữa $Am$ và tia của $c$ nằm trong $\widehat{A}_1$ bằng $\dfrac12\widehat{A}_1$. Vì $Bn$ là phân giác của $\widehat{B}_5$ nên góc giữa $Bn$ và tia của $c$ nằm trong $\widehat{B}_5$ bằng $\dfrac12\widehat{B}_5$.

Do $\widehat{A}_1=\widehat{B}_5$ nên $\dfrac12\widehat{A}_1=\dfrac12\widehat{B}_5$, tức là hai góc này bằng nhau.

Hai góc này là hai góc đồng vị đối với hai đường thẳng $Am$, $Bn$ và đường thẳng cắt $c$. Theo dấu hiệu nhận biết hai đường thẳng song song (hai góc đồng vị bằng nhau), ta có $Am\parallel Bn$.

Vậy $Am\parallel Bn$ (điều phải chứng minh).

**Đáp số.** Đã chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc NB
Trong định lí "Nếu hai góc đối đỉnh thì chúng bằng nhau", kết luận là
A. hai góc đối đỉnh.
B. hai góc kề bù.
C. chúng bằng nhau.
D. hai góc bằng $90^\circ$.
::key C
Kết luận là phần đứng sau "thì": hai góc ấy bằng nhau. Phần "hai góc đối đỉnh" là giả thiết.

::mc NB
Để chứng tỏ một mệnh đề là sai, ta cần
A. chứng minh nó đúng trong mọi trường hợp.
B. vẽ một hình rồi đo.
C. thử ba trường hợp đều đúng.
D. chỉ ra một phản ví dụ.
::key D
Một phản ví dụ thoả giả thiết mà không thoả kết luận là đủ để bác bỏ mệnh đề.

::mc TH
Mệnh đề nào sau đây **sai**?
A. Hai góc bằng nhau thì đối đỉnh.
B. Hai góc đối đỉnh thì bằng nhau.
C. Hai góc kề bù có tổng $180^\circ$.
D. Hai đường thẳng cùng song song với đường thẳng thứ ba thì song song với nhau.
::key A
Hai góc bằng nhau chưa chắc đối đỉnh: hai góc $50^\circ$ ở hai đỉnh khác nhau là phản ví dụ.

::mc TH
Trong chứng minh, lập luận "vì $\widehat{A}_3=\widehat{B}_5$ (so le trong) nên $a\parallel b$" dựa vào
A. tính chất của hai đường thẳng song song.
B. dấu hiệu nhận biết hai đường thẳng song song.
C. tiên đề Euclid.
D. định lí hai góc đối đỉnh.
::key B
Từ hai góc so le trong bằng nhau suy ra song song là dấu hiệu nhận biết. Tính chất đi theo chiều ngược lại.

::tf TH NB NB NB
Xét tính đúng sai của các mệnh đề sau:
a) Mọi mệnh đề đúng trong vài trường hợp thử đều là định lí.
b) Giả thiết là điều đã cho, kết luận là điều cần chứng minh.
c) Một phản ví dụ đủ để bác bỏ một mệnh đề.
d) Trong chứng minh, mỗi bước cần có căn cứ.
::key S Đ Đ Đ
a) Sai: đúng vài trường hợp chưa chắc đúng mọi trường hợp. b), c), d) Đúng.

::sa VD
Hai góc đối đỉnh có số đo $(3x-5)^\circ$ và $(x+25)^\circ$. Tìm $x$.
::key 15
Hai góc đối đỉnh bằng nhau nên $3x-5=x+25$, suy ra $2x=30$, $x=15$.

::sa TH
Hai tia phân giác của hai góc kề bù tạo thành một góc bao nhiêu độ?
::key 90
Theo định lí đã chứng minh ở Ví dụ 3, góc đó bằng $90^\circ$.
:::
