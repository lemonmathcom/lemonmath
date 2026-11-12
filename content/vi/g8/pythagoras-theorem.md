---
title: Định lí Pythagore và ứng dụng
description: Phát biểu và chứng minh định lí Pythagore và định lí đảo, tính độ dài cạnh tam giác vuông, đường chéo, đường cao và giải bài toán thực tế.
minutes: 25
---

:::goals
- Phát biểu định lí Pythagore và định lí đảo của nó.
- Tính độ dài một cạnh của tam giác vuông khi biết hai cạnh còn lại.
- Nhận biết một tam giác có vuông hay không từ độ dài ba cạnh.
- Vận dụng để tính đường chéo, đường cao và giải các bài toán thực tế.
:::

Giả sử một chiếc thang dài $5$ m được dựa vào bức tường thẳng đứng, chân thang đặt trên nền ngang cách tường $3$ m. Thang chạm tường ở độ cao bao nhiêu mét so với nền?

Thang, tường và nền tạo thành một tam giác vuông, trong đó ta biết hai cạnh và cần tìm cạnh thứ ba. Mối liên hệ giữa ba cạnh của tam giác vuông là một trong những kết quả nổi tiếng và có ích nhất của hình học: định lí Pythagore.

## Cùng khám phá

Ta vẽ một tam giác vuông có hai cạnh góc vuông dài $3$ và $4$, cạnh huyền dài $5$, rồi dựng ba hình vuông trên ba cạnh của nó. Diện tích các hình vuông lần lượt là $3^2=9$, $4^2=16$ và $5^2=25$.

:::diagram Ba hình vuông dựng trên ba cạnh của tam giác vuông
alt: Tam giác vuông tại A có hai cạnh góc vuông dài 3 và 4; trên mỗi cạnh dựng một hình vuông có diện tích lần lượt 9, 16 và 25
point A 0,0 below-left
point B 3,0 below-right
point C 0,4 above-left
point P1 3,-3 ""
point P2 0,-3 ""
point Q1 -4,4 ""
point Q2 -4,0 ""
point R1 7,3 ""
point R2 4,7 ""
polygon A B C
polygon A B P1 P2
polygon A C Q1 Q2
polygon B R1 R2 C
label 1.5,-1.5 "9"
label -2,2 "16"
label 5.5,3.5 "25"
:::

Ta thấy $9+16=25$: tổng diện tích hai hình vuông trên hai cạnh góc vuông bằng diện tích hình vuông trên cạnh huyền. Điều này có đúng với mọi tam giác vuông không? Bài này cho câu trả lời.

## Định lí Pythagore

:::theorem Định lí Pythagore
Trong một tam giác vuông, bình phương độ dài cạnh huyền bằng tổng các bình phương độ dài hai cạnh góc vuông.

Nếu $\triangle ABC$ vuông tại $A$ thì
$$BC^2=AB^2+AC^2.$$
:::

**Vì sao?** Kẻ đường cao $AH$ ($H\in BC$). Hai tam giác $HBA$ và $ABC$ cùng có một góc vuông và chung góc $B$ nên đồng dạng (g.g), suy ra $\dfrac{BH}{AB}=\dfrac{AB}{BC}$, tức $AB^2=BH\cdot BC$. Tương tự, $\triangle HCA\sim\triangle ACB$ cho $AC^2=CH\cdot BC$. Cộng hai hệ thức:
$$AB^2+AC^2=BC\cdot(BH+CH)=BC\cdot BC=BC^2.$$

:::example Tính cạnh của tam giác vuông
a) Tam giác $ABC$ vuông tại $A$ có $AB=6$, $AC=8$. Tính $BC$.

b) Tam giác $DEF$ vuông tại $D$ có cạnh huyền $EF=13$ và $DE=5$. Tính $DF$.

**Lời giải.** a) Theo định lí Pythagore, $BC^2=6^2+8^2=36+64=100$, nên $BC=10$.

b) Theo định lí Pythagore, $EF^2=DE^2+DF^2$, suy ra $DF^2=13^2-5^2=169-25=144$, nên $DF=12$.

Vậy a) $BC=10$; b) $DF=12$.
:::

Không phải lúc nào kết quả cũng là số nguyên; khi đó ta dùng căn bậc hai.

:::example Kết quả không nguyên
Tam giác $ABC$ vuông tại $A$ có $AB=2$, $AC=3$. Tính $BC$ (làm tròn đến hai chữ số thập phân).

**Lời giải.** Theo định lí Pythagore, $BC^2=2^2+3^2=4+9=13$. Do đó $BC=\sqrt{13}\approx3{,}61$.

Vậy $BC=\sqrt{13}\approx3{,}61$.
:::

## Định lí Pythagore đảo

:::theorem Định lí Pythagore đảo
Nếu một tam giác có bình phương của một cạnh bằng tổng các bình phương của hai cạnh còn lại thì tam giác đó vuông, và góc vuông nằm đối diện cạnh lớn nhất.

Cụ thể, nếu $BC^2=AB^2+AC^2$ thì $\triangle ABC$ vuông tại $A$.
:::

**Vì sao?** Dựng tam giác $A'B'C'$ vuông tại $A'$ có $A'B'=AB$ và $A'C'=AC$. Theo định lí Pythagore, $B'C'^2=AB^2+AC^2=BC^2$ nên $B'C'=BC$. Hai tam giác $ABC$ và $A'B'C'$ có ba cặp cạnh bằng nhau nên bằng nhau (c.c.c). Do đó $\widehat A=\widehat{A'}=90^\circ$.

:::example Kiểm tra tam giác vuông
Tam giác nào dưới đây là tam giác vuông?

a) Các cạnh $9$, $12$, $15$.

b) Các cạnh $6$, $7$, $9$.

**Lời giải.** Ta so sánh bình phương cạnh lớn nhất với tổng các bình phương hai cạnh còn lại.

a) $15^2=225$ và $9^2+12^2=81+144=225$. Hai vế bằng nhau nên tam giác vuông, góc vuông đối diện cạnh $15$.

b) $9^2=81$ và $6^2+7^2=36+49=85$. Hai vế không bằng nhau nên tam giác không vuông.

Vậy a) là tam giác vuông; b) không phải.
:::

Các bộ ba số nguyên dương thoả $a^2+b^2=c^2$ gọi là **bộ ba Pythagore**, ví dụ $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ và mọi bộ nhân cả ba số với cùng một số nguyên, như $(6,8,10)$.

## Ứng dụng

Định lí Pythagore cho phép tính nhiều độ dài trong hình học và thực tế.

:::example Đường chéo
Tính đường chéo của hình chữ nhật có hai cạnh $12$ và $5$, và của hình vuông cạnh $4$ (làm tròn đến hai chữ số thập phân).

**Lời giải.** Đường chéo chia hình chữ nhật thành hai tam giác vuông có hai cạnh góc vuông là hai cạnh của hình chữ nhật. Đường chéo hình chữ nhật là $\sqrt{12^2+5^2}=\sqrt{169}=13$. Đường chéo hình vuông cạnh $4$ là $\sqrt{4^2+4^2}=\sqrt{32}=4\sqrt2\approx5{,}66$.

Vậy đường chéo hình chữ nhật là $13$ và đường chéo hình vuông là $4\sqrt2\approx5{,}66$.
:::

:::example Đường cao tam giác đều
Tính đường cao của tam giác đều cạnh $6$ (làm tròn đến hai chữ số thập phân).

**Lời giải.** Đường cao $AH$ của tam giác đều $ABC$ cũng là đường trung tuyến nên $BH=3$. Trong tam giác $ABH$ vuông tại $H$: $AH^2=AB^2-BH^2=36-9=27$, suy ra $AH=\sqrt{27}=3\sqrt3\approx5{,}20$.

Vậy đường cao là $3\sqrt3\approx5{,}20$.
:::

Ta quay lại chiếc thang ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Chiếc thang dựa tường
Thang dài $5$ m dựa vào tường thẳng đứng, chân thang cách tường $3$ m (giả sử). Tính độ cao của đầu thang. Nếu kéo chân thang ra xa tường thêm $1$ m (thang không đổi chiều dài) thì đầu thang hạ xuống bao nhiêu?

**Lời giải.**

*Hiểu đề.* Thang là cạnh huyền ($5$ m) của tam giác vuông, chân thang đến tường là một cạnh góc vuông ($3$ m); cần tìm cạnh góc vuông còn lại.

*Tìm cách giải.* Dùng định lí Pythagore với cạnh huyền đã biết.

*Giải.* Gọi $h$ là độ cao của đầu thang (m). Ta có $h^2+3^2=5^2$, suy ra $h^2=25-9=16$ và $h=4$. Khi chân thang cách tường $4$ m: $h'^2=25-16=9$, nên $h'=3$. Đầu thang hạ xuống $4-3=1$ (m).

*Nhìn lại.* Kiểm tra: $3^2+4^2=5^2$. Kết quả hợp lí: kéo chân thang ra xa thì đầu thang hạ thấp, và ta có bộ ba Pythagore quen thuộc $(3,4,5)$.

Vậy đầu thang cao $4$ m, và nếu kéo chân thang thêm $1$ m thì đầu thang hạ xuống $1$ m.
:::

:::warning Những sai lầm thường gặp
- **Cộng thay vì trừ khi tìm cạnh góc vuông.** Sai: cạnh huyền $13$, một cạnh góc vuông $5$ thì cạnh còn lại là $\sqrt{13^2+5^2}$. Lí do sai: cạnh huyền là cạnh lớn nhất nên $13^2=5^2+x^2$. Đúng: $x=\sqrt{13^2-5^2}=12$.
- **Cho rằng $\sqrt{a^2+b^2}=a+b$.** Sai: hai cạnh góc vuông $3$ và $4$ thì cạnh huyền là $3+4=7$. Lí do sai: $\sqrt{3^2+4^2}=\sqrt{25}=5\neq7$. Đúng: phải bình phương, cộng rồi mới khai căn.
- **So sánh với cạnh không phải là cạnh lớn nhất khi dùng định lí đảo.** Sai: với các cạnh $5$, $12$, $13$, kiểm tra $5^2+13^2=12^2$ và kết luận không vuông. Lí do sai: cạnh huyền (nếu có) phải là cạnh lớn nhất. Đúng: $5^2+12^2=13^2$ nên tam giác vuông.
:::

**Kết nối.** Bài này dùng tam giác đồng dạng ở các bài [hai tam giác đồng dạng](lesson:similar-triangles) và [ba trường hợp đồng dạng](lesson:triangle-similarity-conditions) để chứng minh định lí, cùng căn bậc hai đã học ở lớp 7. Định lí Pythagore được dùng khắp nơi: xây dựng, thiết kế, đo đạc, và ở các lớp sau là nền tảng của lượng giác và hình học toạ độ.

## Thuật ngữ

:::terms
- định lí Pythagore | Pythagoras' theorem
- định lí Pythagore đảo | converse of Pythagoras' theorem
- cạnh huyền | hypotenuse
- cạnh góc vuông | leg
- bộ ba Pythagore | Pythagorean triple
- đường chéo | diagonal
- đường cao | altitude (height)
- căn bậc hai | square root
:::

## Tóm tắt

- Định lí Pythagore: tam giác $ABC$ vuông tại $A$ thì $BC^2=AB^2+AC^2$.
- Định lí đảo: nếu $BC^2=AB^2+AC^2$ thì tam giác $ABC$ vuông tại $A$.
- Để tìm cạnh huyền, cộng hai bình phương rồi khai căn; để tìm cạnh góc vuông, lấy bình phương cạnh huyền trừ bình phương cạnh góc vuông kia.
- Đường chéo hình chữ nhật cạnh $a$, $b$ là $\sqrt{a^2+b^2}$; đường chéo hình vuông cạnh $a$ là $a\sqrt2$.
- Các bộ ba Pythagore quen thuộc: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính cạnh huyền của tam giác vuông có hai cạnh góc vuông:

a) $9$ và $12$.

b) $7$ và $24$.

::hint
**Kiến thức:** $c^2=a^2+b^2$.

**Gợi ý các bước:**
1. Bình phương hai cạnh góc vuông rồi cộng.
2. Khai căn.

::solution
a) $c^2=81+144=225$ nên $c=15$.

b) $c^2=49+576=625$ nên $c=25$.

**Đáp số.** a) $15$. b) $25$.
:::

:::exercise
Tính cạnh góc vuông còn lại của tam giác vuông biết:

a) cạnh huyền $17$, một cạnh góc vuông $8$.

b) cạnh huyền $10$, một cạnh góc vuông $6$.

::hint
**Kiến thức:** $a^2=c^2-b^2$ với $c$ là cạnh huyền.

**Gợi ý các bước:**
1. Lấy bình phương cạnh huyền trừ bình phương cạnh đã biết.
2. Khai căn.

::solution
a) $a^2=289-64=225$ nên $a=15$.

b) $a^2=100-36=64$ nên $a=8$.

**Đáp số.** a) $15$. b) $8$.
:::

:::exercise
Tam giác vuông có hai cạnh góc vuông là $4$ và $7$. Tính cạnh huyền (làm tròn đến hai chữ số thập phân).

::hint
**Kiến thức:** khi tổng bình phương không phải số chính phương, dùng căn bậc hai.

**Gợi ý các bước:**
1. Tính $4^2+7^2$.
2. Khai căn và làm tròn.

::solution
$c^2=16+49=65$ nên $c=\sqrt{65}\approx8{,}06$.

**Đáp số.** $\sqrt{65}\approx8{,}06$.
:::

:::exercise
Tam giác nào là tam giác vuông?

a) Các cạnh $7$, $24$, $25$.

b) Các cạnh $8$, $10$, $12$.

c) Các cạnh $9$, $40$, $41$.

::hint
**Kiến thức:** định lí Pythagore đảo, so với cạnh lớn nhất.

**Gợi ý các bước:**
1. Xác định cạnh lớn nhất.
2. So sánh bình phương nó với tổng hai bình phương còn lại.

::solution
a) $25^2=625$ và $7^2+24^2=49+576=625$: vuông.

b) $12^2=144$ và $8^2+10^2=164$: không vuông.

c) $41^2=1681$ và $9^2+40^2=81+1600=1681$: vuông.

**Đáp số.** a) và c) là tam giác vuông.
:::

:::exercise
Tính đường chéo của hình chữ nhật có hai cạnh $15$ và $8$, và của hình vuông cạnh $5$ (làm tròn đến hai chữ số thập phân).

::hint
**Kiến thức:** đường chéo chia hình thành hai tam giác vuông.

**Gợi ý các bước:**
1. Dùng $d^2=a^2+b^2$.
2. Với hình vuông, $a=b$.

::solution
Hình chữ nhật: $d=\sqrt{15^2+8^2}=\sqrt{289}=17$. Hình vuông: $d=\sqrt{25+25}=\sqrt{50}=5\sqrt2\approx7{,}07$.

**Đáp số.** $17$; $5\sqrt2\approx7{,}07$.
:::

:::exercise
Giả sử một chiếc thang dài $6{,}5$ m dựa vào tường thẳng đứng, chân thang cách tường $2{,}5$ m. Đầu thang chạm tường ở độ cao bao nhiêu?

::hint
**Kiến thức:** thang là cạnh huyền.

**Gợi ý các bước:**
1. Viết $h^2=6{,}5^2-2{,}5^2$.
2. Tính và khai căn.

::solution
$h^2=42{,}25-6{,}25=36$ nên $h=6$.

Kiểm tra: $2{,}5^2+6^2=6{,}25+36=42{,}25=6{,}5^2$.

Vậy đầu thang cao $6$ m.

**Đáp số.** $6$ m.
:::

:::exercise
Giả sử một chiếc tivi có chiều rộng $96$ cm và chiều cao $54$ cm. Tính đường chéo màn hình theo cm (làm tròn đến hàng đơn vị) và theo inch (biết $1$ inch $=2{,}54$ cm, làm tròn đến hàng đơn vị).

::hint
**Kiến thức:** đường chéo là cạnh huyền.

**Gợi ý các bước:**
1. Tính $\sqrt{96^2+54^2}$.
2. Chia cho $2{,}54$.

::solution
$d^2=9\,216+2\,916=12\,132$, nên $d=\sqrt{12\,132}\approx110$ (cm). Đổi sang inch: $\dfrac{110{,}14}{2{,}54}\approx43{,}4\approx43$ (inch).

**Đáp số.** Khoảng $110$ cm, tức khoảng $43$ inch.
:::

:::exercise
Giả sử hai tàu cùng rời cảng một lúc, một tàu đi về hướng bắc, tàu kia đi về hướng đông. Sau một thời gian, tàu thứ nhất cách cảng $12$ km, tàu thứ hai cách cảng $16$ km. Hai tàu cách nhau bao xa?

::hint
**Kiến thức:** hướng bắc và hướng đông vuông góc với nhau.

**Gợi ý các bước:**
1. Vẽ tam giác vuông với hai cạnh góc vuông $12$ và $16$.
2. Tính cạnh huyền.

::solution
Khoảng cách là $\sqrt{12^2+16^2}=\sqrt{144+256}=\sqrt{400}=20$ (km).

**Đáp số.** $20$ km.
:::

:::exercise
Hình thoi $ABCD$ có hai đường chéo $AC=16$ và $BD=12$ cắt nhau tại $O$. Tính cạnh của hình thoi. (Ôn lại: hai đường chéo của hình thoi vuông góc và cắt nhau tại trung điểm của mỗi đường.)

::hint
**Kiến thức:** tam giác $AOB$ vuông tại $O$.

**Gợi ý các bước:**
1. Tính $OA$ và $OB$.
2. Dùng định lí Pythagore trong tam giác $AOB$.

::solution
Ta có $OA=\dfrac{16}{2}=8$ và $OB=\dfrac{12}{2}=6$. Tam giác $AOB$ vuông tại $O$ nên $AB^2=8^2+6^2=100$, suy ra $AB=10$.

Vậy cạnh hình thoi bằng $10$.

**Đáp số.** $10$.
:::

:::exercise Thử thách
Với hai số nguyên dương $m>n$, đặt $a=m^2-n^2$, $b=2mn$, $c=m^2+n^2$. Chứng minh $a^2+b^2=c^2$ (tức $a$, $b$, $c$ là các cạnh của một tam giác vuông). Áp dụng với $m=3$, $n=2$.

::hint
**Kiến thức:** khai triển hằng đẳng thức $(m^2-n^2)^2$ và $(m^2+n^2)^2$.

**Gợi ý các bước:**
1. Khai triển $a^2+b^2$.
2. So sánh với $c^2$.

::solution
Ta có $a^2+b^2=(m^2-n^2)^2+(2mn)^2=m^4-2m^2n^2+n^4+4m^2n^2=m^4+2m^2n^2+n^4=(m^2+n^2)^2=c^2$. Với $m=3$, $n=2$: $a=9-4=5$, $b=2\cdot3\cdot2=12$, $c=9+4=13$, và $5^2+12^2=13^2$.

Vậy công thức luôn cho một bộ ba Pythagore.

**Đáp số.** Đã chứng minh; $(5,12,13)$.
:::

## Kiểm tra mini

:::quiz
::mc
Tam giác vuông có cạnh huyền $13$ và một cạnh góc vuông $5$. Cạnh góc vuông còn lại là
A. $8$.
B. $12$.
C. $18$.
D. $\sqrt{194}$.
::key B
$13^2-5^2=169-25=144$ nên cạnh còn lại là $12$. A lấy $13-5$, C lấy $13+5$, D cộng các bình phương thay vì trừ.

::mc
Tam giác có ba cạnh nào sau đây là tam giác vuông?
A. $4$, $5$, $6$.
B. $5$, $6$, $7$.
C. $6$, $8$, $10$.
D. $6$, $7$, $8$.
::key C
$6^2+8^2=100=10^2$. Các bộ A, B, D không thoả $a^2+b^2=c^2$.

::mc
Đường chéo của hình chữ nhật có hai cạnh $12$ và $5$ bằng
A. $60$.
B. $17$.
C. $7$.
D. $13$.
::key D
$\sqrt{12^2+5^2}=\sqrt{169}=13$. B cộng hai cạnh, C lấy hiệu, A nhân hai cạnh.

::mc
Đường chéo của hình vuông cạnh $4$ bằng
A. $4\sqrt2$.
B. $4$.
C. $8$.
D. $2\sqrt2$.
::key A
$\sqrt{4^2+4^2}=\sqrt{32}=4\sqrt2$. A là tổng hai cạnh, B là chính cạnh, D chia đôi.

::tf
Tam giác $ABC$ có $AB=9$, $AC=12$, $BC=15$. Xét tính đúng sai của các mệnh đề sau:
a) Tam giác $ABC$ không phải tam giác vuông.
b) Tam giác $ABC$ vuông tại $A$.
c) Diện tích tam giác $ABC$ bằng $54$.
d) Đường cao kẻ từ $A$ xuống $BC$ bằng $6$.
::key S Đ Đ S
a) Sai: $9^2+12^2=225=15^2$ nên tam giác vuông. b) Đúng: góc vuông đối diện cạnh lớn nhất $BC$. c) Đúng: $\dfrac12\cdot9\cdot12=54$. d) Sai: $AH=\dfrac{2\cdot54}{15}=7{,}2$.

::sa
Tam giác vuông có hai cạnh góc vuông $7$ và $24$. Cạnh huyền bằng bao nhiêu?
::key 25
$\sqrt{49+576}=\sqrt{625}=25$.

::sa
Thang dài $5$ m dựa vào tường, chân thang cách tường $3$ m. Đầu thang cao bao nhiêu mét?
::key 4
$\sqrt{25-9}=4$.
:::
