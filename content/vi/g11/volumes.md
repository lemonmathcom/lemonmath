---
title: Thể tích
description: Tính thể tích khối hộp chữ nhật, khối lăng trụ, khối chóp và khối chóp cụt đều; vận dụng các công thức vào bài toán thực tế như bể chứa, mái nhà.
minutes: 30
---

:::goals
- Nhớ và dùng công thức thể tích khối hộp chữ nhật, khối lập phương và khối lăng trụ.
- Nhớ và dùng công thức thể tích khối chóp.
- Biết công thức thể tích khối chóp cụt đều và cách có được nó.
- Vận dụng vào bài toán thực tế: bể chứa, mái nhà, thùng đựng.
:::

Giả sử một thùng chứa nước có dạng khối chóp cụt đều: đáy trên là hình vuông cạnh $1{,}2$ m, đáy dưới là hình vuông cạnh $0{,}8$ m và thùng cao $0{,}9$ m (số liệu giả định). Thùng chứa được bao nhiêu lít nước? Để trả lời, ta cần công thức thể tích của khối chóp cụt, mà muốn có nó ta bắt đầu từ các khối đơn giản hơn.

## Khám phá: từ khối lập phương đến khối chóp

Khối hộp chữ nhật $a\times b\times c$ gồm $a\cdot b\cdot c$ khối lập phương đơn vị. Chẳng hạn khối $5\times4\times3$ chứa $60$ khối đơn vị.

Bây giờ lấy khối lập phương cạnh $a$ và chọn một đỉnh. Có thể chia khối thành $3$ khối chóp bằng nhau, mỗi khối có đỉnh là đỉnh đã chọn và đáy là một trong ba mặt không chứa đỉnh đó. Mỗi khối chóp có đáy diện tích $a^2$ và chiều cao $a$.

| Cạnh $a$ | Thể tích khối lập phương $a^3$ | Thể tích mỗi khối chóp $\dfrac{a^3}{3}$ |
|---|---|---|
| $1$ | $1$ | $\dfrac13$ |
| $2$ | $8$ | $\dfrac83$ |
| $3$ | $27$ | $9$ |

Mỗi khối chóp có thể tích bằng $\dfrac13\cdot a^2\cdot a$, tức một phần ba tích của diện tích đáy và chiều cao. Đó là gợi ý cho công thức thể tích khối chóp.

## Công thức thể tích

:::theorem Thể tích khối hộp chữ nhật và khối lăng trụ
- Khối hộp chữ nhật có ba kích thước $a$, $b$, $c$: $V=abc$. Khối lập phương cạnh $a$: $V=a^3$.
- Khối lăng trụ có diện tích đáy $B$ và chiều cao $h$: $V=B\cdot h$.
:::

Chiều cao của khối lăng trụ là khoảng cách giữa hai mặt phẳng chứa hai đáy. Với lăng trụ đứng, chiều cao bằng độ dài cạnh bên.

:::theorem Thể tích khối chóp
Khối chóp có diện tích đáy $B$ và chiều cao $h$ có thể tích
$$V=\frac13Bh.$$
:::

Chiều cao của khối chóp là khoảng cách từ đỉnh đến mặt phẳng chứa đáy. Chân đường cao của chóp đều là tâm của đáy.

:::theorem Thể tích khối chóp cụt đều
Khối chóp cụt đều có diện tích hai đáy là $B$ và $B'$, chiều cao $h$ có thể tích
$$V=\frac13h\left(B+\sqrt{BB'}+B'\right).$$
:::

**Vì sao?** Khối chóp cụt là khối chóp lớn bỏ đi khối chóp nhỏ ở trên. Đặt $t=\sqrt B$, $s=\sqrt{B'}$ (tỉ lệ đồng dạng của hai đáy là $\dfrac st$). Gọi $x$ là chiều cao khối chóp nhỏ. Hai khối chóp đồng dạng nên $\dfrac{x}{x+h}=\dfrac st$, suy ra $x=\dfrac{hs}{t-s}$. Khi đó
$$V=\frac13B(h+x)-\frac13B'x=\frac13\cdot\frac{h(t^3-s^3)}{t-s}=\frac13h(t^2+ts+s^2),$$
tức là công thức trên vì $t^2=B$, $ts=\sqrt{BB'}$, $s^2=B'$.

:::diagram Khối chóp $S.ABCD$ với đường cao $SH$
alt: Hình chóp S.ABCD vẽ theo phép chiếu xiên, đáy là hình bình hành ABCD, đường cao SH nét đứt từ đỉnh S xuống điểm H là tâm đáy
point A 0,0 below-left
point B 4,0 below-right
point C 5.2,1.5 right
point D 1.2,1.5 above
point S 2.6,4.2 above
point H 2.6,0.75 below
segment S A
segment S B
segment S C
segment S D dashed
segment A B
segment B C
segment A D dashed
segment D C dashed
segment S H dashed
:::

## Ví dụ

Trước hết là khối hộp chữ nhật.

:::example Thể tích khối hộp chữ nhật
Một khối hộp chữ nhật có ba kích thước $5$, $4$, $3$. Tính thể tích.

**Lời giải.** Áp dụng công thức $V=abc$:
$$V=5\cdot4\cdot3=60.$$

Vậy thể tích bằng $60$ (đơn vị thể tích).
:::

Tiếp theo là khối lăng trụ.

:::example Thể tích khối lăng trụ tam giác đều
Cho khối lăng trụ đứng có đáy là tam giác đều cạnh $2$ và chiều cao $3$. Tính thể tích.

**Lời giải.** Diện tích tam giác đều cạnh $2$ là $B=\dfrac{\sqrt3}{4}\cdot2^2=\sqrt3$. Áp dụng công thức $V=Bh$:
$$V=\sqrt3\cdot3=3\sqrt3\approx5{,}2.$$

Vậy thể tích bằng $3\sqrt3$.
:::

Bây giờ là khối chóp.

:::example Thể tích khối chóp có cạnh bên vuông góc với đáy
Cho khối chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $3$, cạnh bên $SA$ vuông góc với đáy và $SA=4$. Tính thể tích.

**Lời giải.** Vì $SA\perp(ABCD)$ nên $SA$ là chiều cao, $h=4$. Diện tích đáy $B=3^2=9$. Áp dụng công thức $V=\dfrac13Bh$:
$$V=\frac13\cdot9\cdot4=12.$$

Vậy thể tích bằng $12$.
:::

Rồi đến khối chóp cụt.

:::example Thể tích khối chóp cụt đều
Cho khối chóp cụt đều có hai đáy là hình vuông cạnh $6$ và $3$, chiều cao $4$. Tính thể tích.

**Lời giải.** Diện tích hai đáy là $B=36$ và $B'=9$, nên $\sqrt{BB'}=\sqrt{324}=18$. Áp dụng công thức:
$$V=\frac13\cdot4\cdot(36+18+9)=\frac13\cdot4\cdot63=84.$$

Vậy thể tích bằng $84$.
:::

Cuối cùng ta quay lại thùng nước ở đầu bài, đi đủ bốn bước.

:::example Vận dụng: thùng chứa hình chóp cụt
Giả sử một thùng chứa có dạng khối chóp cụt đều, đáy trên là hình vuông cạnh $1{,}2$ m, đáy dưới là hình vuông cạnh $0{,}8$ m và thùng cao $0{,}9$ m (số liệu giả định). Thùng chứa được bao nhiêu lít nước khi đầy?

**Lời giải.**

*Hiểu đề.* Cần thể tích thùng theo mét khối rồi đổi ra lít, biết $1$ m$^3=1000$ lít.

*Tìm cách giải.* Thùng là khối chóp cụt đều, nên dùng $V=\dfrac13h(B+\sqrt{BB'}+B')$ với hai diện tích đáy và chiều cao.

*Giải.* Diện tích hai đáy là $B=1{,}2^2=1{,}44$ và $B'=0{,}8^2=0{,}64$ (m$^2$). Ta có $\sqrt{BB'}=1{,}2\cdot0{,}8=0{,}96$. Vậy
$$V=\frac13\cdot0{,}9\cdot(1{,}44+0{,}96+0{,}64)=0{,}3\cdot3{,}04=0{,}912\text{ m}^3.$$

Đổi ra lít: $0{,}912\cdot1000=912$ lít. Vậy thùng chứa được $912$ lít nước.

*Nhìn lại.* Kết quả có hợp lí không? Thể tích phải nằm giữa thể tích khối hộp đáy nhỏ và khối hộp đáy lớn cùng chiều cao: $0{,}64\cdot0{,}9=0{,}576$ m$^3$ và $1{,}44\cdot0{,}9=1{,}296$ m$^3$. Giá trị $0{,}912$ nằm giữa hai số đó nên hợp lí. Nó cũng gần với khối hộp có đáy là diện tích trung bình: $\dfrac{1{,}44+0{,}64}{2}\cdot0{,}9=0{,}936$ m$^3$, nhưng nhỏ hơn một chút, đúng như công thức chóp cụt cho.
:::

:::warning Những sai lầm thường gặp
- **Quên hệ số $\dfrac13$ của khối chóp.** Sai: $V=Bh$ cho khối chóp. Lí do sai: khối chóp chỉ chiếm một phần ba khối lăng trụ cùng đáy và cùng chiều cao. Đúng: $V=\dfrac13Bh$.
- **Dùng độ dài cạnh bên làm chiều cao.** Sai: lấy cạnh bên $SA$ của chóp đều làm $h$. Lí do sai: chiều cao là khoảng cách vuông góc từ đỉnh đến đáy. Đúng: tính $h=SO$ bằng định lí Pythagore, với $O$ là tâm đáy.
- **Công thức chóp cụt chỉ lấy trung bình hai đáy.** Sai: $V=\dfrac{B+B'}{2}\cdot h$. Lí do sai: công thức này không đúng cho khối chóp cụt, vì thiết diện song song nhỏ dần theo bình phương độ dài. Đúng: $V=\dfrac13h(B+\sqrt{BB'}+B')$.
- **Nhầm đơn vị.** Sai: đổi $0{,}912$ m$^3$ thành $91{,}2$ lít. Lí do sai: $1$ m$^3=1000$ lít chứ không phải $100$. Đúng: $0{,}912$ m$^3=912$ lít.
:::

**Kết nối.** Bài này dùng [khoảng cách trong không gian](lesson:distances-space), vì chiều cao của khối chóp là khoảng cách từ đỉnh đến mặt đáy, và dùng [đường thẳng vuông góc với mặt phẳng](lesson:line-perpendicular-plane) để xác định chân đường cao. Từ các công thức này ta có thể tính thể tích những vật thể trong đời sống như bể chứa, mái nhà và thùng đựng. Trong xây dựng và sản xuất, người ta tính thể tích để biết lượng bê tông cần đổ hay sức chứa của bể.

## Thuật ngữ

:::terms
- thể tích | volume
- khối hộp chữ nhật | cuboid
- khối lập phương | cube
- khối lăng trụ | prism
- khối chóp | pyramid (solid)
- khối chóp cụt đều | frustum of a regular pyramid
- diện tích đáy | base area
- chiều cao | height
- lít | litre
- mét khối | cubic metre
:::

## Tóm tắt

- Khối hộp chữ nhật: $V=abc$; khối lập phương: $V=a^3$.
- Khối lăng trụ: $V=Bh$ với $B$ là diện tích đáy và $h$ là chiều cao.
- Khối chóp: $V=\dfrac13Bh$.
- Khối chóp cụt đều: $V=\dfrac13h\left(B+\sqrt{BB'}+B'\right)$.
- Đổi đơn vị: $1$ m$^3=1000$ lít; chiều cao là khoảng cách vuông góc, không phải cạnh bên.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Một khối lập phương có cạnh $4$. Tính thể tích. Một khối hộp chữ nhật có ba kích thước $3$, $4$, $12$: tính độ dài đường chéo và thể tích.

::hint
**Kiến thức:** $V=a^3$; $V=abc$; đường chéo $\sqrt{a^2+b^2+c^2}$.

**Gợi ý các bước:**
1. Tính thể tích khối lập phương.
2. Tính đường chéo, rồi thể tích khối hộp chữ nhật.

::solution
Khối lập phương: $V=4^3=64$.

Khối hộp chữ nhật: đường chéo $\sqrt{9+16+144}=\sqrt{169}=13$ và $V=3\cdot4\cdot12=144$.

**Đáp số.** $64$; đường chéo $13$ và thể tích $144$.
:::

:::exercise
Một khối lăng trụ đứng có đáy là tam giác vuông với hai cạnh góc vuông $3$ và $4$, chiều cao $10$. Tính thể tích.

::hint
**Kiến thức:** $V=Bh$.

**Gợi ý các bước:**
1. Tính diện tích tam giác vuông.
2. Nhân với chiều cao.

::solution
$B=\dfrac12\cdot3\cdot4=6$ và $V=6\cdot10=60$.

**Đáp số.** $60$.
:::

:::exercise
Cho tứ diện $OABC$ có $OA$, $OB$, $OC$ đôi một vuông góc và bằng $6$. Tính thể tích.

::hint
**Kiến thức:** $OA\perp(OBC)$ nên $OA$ là chiều cao ứng với đáy $OBC$.

**Gợi ý các bước:**
1. Tính diện tích tam giác $OBC$.
2. Dùng $V=\dfrac13Bh$ với $h=OA$.

::solution
$B=\dfrac12\cdot6\cdot6=18$ và $h=OA=6$ nên $V=\dfrac13\cdot18\cdot6=36$.

**Đáp số.** $36$.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau.

a) Thể tích khối hộp chữ nhật có ba kích thước $a$, $b$, $c$ là $abc$.

b) Thể tích khối chóp có diện tích đáy $B$ và chiều cao $h$ là $Bh$.

c) Nếu cạnh của khối lập phương tăng gấp đôi thì thể tích tăng gấp $8$ lần.

d) Thể tích khối chóp cụt đều là $\dfrac13h(B+B')$.

::hint
**Kiến thức:** các công thức thể tích.

**Gợi ý các bước:**
1. So từng mệnh đề với công thức.
2. Ở câu c, tính $(2a)^3$.

::solution
a) **Đúng**.

b) **Sai**: phải có hệ số $\dfrac13$.

c) **Đúng**: $(2a)^3=8a^3$.

d) **Sai**: thiếu số hạng $\sqrt{BB'}$.

**Đáp số.** a) Đúng; b) Sai; c) Đúng; d) Sai.
:::

:::exercise
Giả sử một bể nước có dạng khối hộp chữ nhật với đáy $2$ m $\times1{,}5$ m và cao $1{,}2$ m (số liệu giả định). Bể chứa được bao nhiêu mét khối nước? Một máy bơm đổ đầy bể với tốc độ $0{,}6$ m$^3$ mỗi phút thì cần bao nhiêu phút?

::hint
**Kiến thức:** $V=abc$; thời gian bằng thể tích chia tốc độ.

**Gợi ý các bước:**
1. Tính thể tích bể.
2. Chia cho tốc độ bơm.

::solution
$V=2\cdot1{,}5\cdot1{,}2=3{,}6$ m$^3$. Thời gian là $\dfrac{3{,}6}{0{,}6}=6$ phút.

**Đáp số.** $3{,}6$ m$^3$; $6$ phút.
:::

:::exercise
Giả sử một mái chóp có dạng khối chóp đều $S.ABCD$ với đáy là hình vuông cạnh $6$ m và các cạnh bên bằng $5$ m (số liệu giả định). Tính thể tích khoảng không bên trong mái, làm tròn đến hàng phần mười của mét khối.

::hint
**Kiến thức:** chân đường cao là tâm $O$ của đáy; $SO=\sqrt{SA^2-OA^2}$.

**Gợi ý các bước:**
1. Tính $OA$ rồi $SO$.
2. Dùng $V=\dfrac13Bh$.

::solution
$OA=3\sqrt2$ nên $SO=\sqrt{25-18}=\sqrt7$. Diện tích đáy $B=36$. Vậy $V=\dfrac13\cdot36\cdot\sqrt7=12\sqrt7\approx31{,}7$ m$^3$.

**Đáp số.** Khoảng $31{,}7$ m$^3$.
:::

:::exercise
Cho khối chóp cụt đều có hai đáy là hình vuông cạnh $10$ và $4$, chiều cao $6$. Tính thể tích.

::hint
**Kiến thức:** $V=\dfrac13h(B+\sqrt{BB'}+B')$.

**Gợi ý các bước:**
1. Tính $B$, $B'$ và $\sqrt{BB'}$.
2. Thay vào công thức.

::solution
$B=100$, $B'=16$, $\sqrt{BB'}=40$. $V=\dfrac13\cdot6\cdot(100+40+16)=2\cdot156=312$.

**Đáp số.** $312$.
:::

:::exercise
Ôn lại phần trăm. Một khối lập phương có cạnh tăng thêm $10\%$. Thể tích của nó tăng thêm bao nhiêu phần trăm?

::hint
**Kiến thức:** cạnh mới bằng $1{,}1$ lần cạnh cũ.

**Gợi ý các bước:**
1. Tính tỉ số thể tích $(1{,}1)^3$.
2. Đổi ra phần trăm tăng.

::solution
Tỉ số thể tích là $1{,}1^3=1{,}331$, tức tăng $33{,}1\%$.

**Đáp số.** Tăng $33{,}1\%$.
:::

:::exercise Thử thách
Cho khối chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật với $AB=3$, $AD=4$, $SA\perp(ABCD)$ và góc giữa $SC$ với mặt phẳng $(ABCD)$ bằng $45^\circ$. Tính thể tích.

::hint
**Kiến thức:** góc giữa $SC$ và đáy là $\widehat{SCA}$; tam giác $SAC$ vuông tại $A$.

**Gợi ý các bước:**
1. Tính $AC$, rồi $SA$ từ góc $45^\circ$.
2. Dùng $V=\dfrac13Bh$.

::solution
$AC=\sqrt{9+16}=5$. Vì $\widehat{SCA}=45^\circ$ nên tam giác $SAC$ vuông cân tại $A$ và $SA=AC=5$. Diện tích đáy $B=3\cdot4=12$. Vậy $V=\dfrac13\cdot12\cdot5=20$.

**Đáp số.** $20$.
:::

## Kiểm tra mini

:::quiz
::mc NB
Thể tích của khối lăng trụ có diện tích đáy $B$ và chiều cao $h$ là
A. $\dfrac13Bh$.
B. $Bh$.
C. $\dfrac12Bh$.
D. $B+h$.
::key B
Đó là công thức khối lăng trụ. Phương án A là khối chóp, C và D không phải công thức thể tích.

::mc NB
Một khối hộp chữ nhật có ba kích thước $7$, $3$, $2$. Thể tích của nó là
A. $12$.
B. $21$.
C. $42$.
D. $84$.
::key C
$V=7\cdot3\cdot2=42$. Phương án A là tổng, B bỏ một kích thước, D nhân thừa.

::mc NB
Một khối chóp có diện tích đáy bằng $12$ và chiều cao bằng $5$. Thể tích của nó là
A. $60$.
B. $30$.
C. $17$.
D. $20$.
::key D
$V=\dfrac13\cdot12\cdot5=20$. Phương án A thiếu hệ số $\dfrac13$, B là một nửa, C là tổng.

::mc TH
Một khối lăng trụ đứng có đáy là tam giác đều cạnh $4$ và chiều cao $5$. Thể tích của nó là
A. $20\sqrt3$.
B. $10\sqrt3$.
C. $20$.
D. $40\sqrt3$.
::key A
$B=\dfrac{\sqrt3}{4}\cdot16=4\sqrt3$ và $V=4\sqrt3\cdot5=20\sqrt3$. Phương án C bỏ qua diện tích đáy, B và D sai hệ số.

::tf NB NB TH TH
Xét tính đúng sai của các mệnh đề sau:
a) Thể tích khối lập phương cạnh $a$ là $a^3$.
b) Thể tích khối chóp là $Bh$.
c) Thể tích khối chóp bằng một phần ba thể tích khối lăng trụ có cùng đáy và cùng chiều cao.
d) $1$ m$^3$ bằng $100$ lít.
::key Đ S Đ S
a) Đúng. b) Sai: phải có hệ số $\dfrac13$. c) Đúng. d) Sai: $1$ m$^3=1000$ lít.

::sa TH
Một khối lập phương có cạnh $2{,}5$. Tính thể tích, làm tròn đến hàng phần mười.
::key 15,6
$V=2{,}5^3=15{,}625\approx15{,}6$.

::sa VD
Giả sử một thùng chứa có dạng khối chóp cụt đều, đáy dưới là hình vuông cạnh $2$ m, đáy trên là hình vuông cạnh $1$ m và cao $0{,}9$ m. Tính thể tích theo mét khối.
::key 2,1
$V=\dfrac13\cdot0{,}9\cdot(4+2+1)=0{,}3\cdot7=2{,}1$.
:::
