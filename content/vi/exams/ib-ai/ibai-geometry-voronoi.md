---
title: Hình học, lượng giác và sơ đồ Voronoi
description: IB Math AI: thể tích và diện tích bề mặt, định lí sin và côsin, phương vị và góc nâng, sơ đồ Voronoi với đường trung trực và láng giềng gần nhất.
minutes: 50
---

:::goals
- Tính thể tích và diện tích bề mặt của các hình không gian trong tình huống thực tế.
- Dùng lượng giác trong tam giác vuông, định lí sin, định lí côsin và công thức $\tfrac12ab\sin C$, kể cả bài toán phương vị và góc nâng.
- Vẽ và đọc sơ đồ Voronoi: điểm gốc, ô, cạnh và đỉnh.
- Viết phương trình đường trung trực, dùng nội suy láng giềng gần nhất, và giải bài toán "đường tròn rỗng lớn nhất".
:::

Một thị trấn có ba trạm cứu hoả. Khi có báo cháy, trạm nào nên đi? Thường thì câu trả lời đơn giản là "trạm gần nhất". Nếu tô màu mỗi điểm trên bản đồ theo trạm gần nó nhất, thị trấn sẽ chia thành những vùng có biên thẳng. Bức tranh ấy gọi là **sơ đồ Voronoi**, một trong những ý tưởng thực tế nhất của IB Math AI.

Bài này đặt nó cạnh phần hình học bạn đã biết: độ dài, góc và thể tích trong tình huống thật. Bạn sẽ thấy sơ đồ Voronoi được dựng từ một đối tượng quen thuộc là đường trung trực, nên chẳng có gì thật sự mới. Cái mới là dùng những công cụ ấy để trả lời câu hỏi về thế giới quanh mình.

## Thể tích, diện tích bề mặt và tam giác vuông

Sổ công thức cho sẵn thể tích và diện tích bề mặt của lăng trụ, hình trụ, hình chóp, hình nón và hình cầu. Trong tình huống thực tế, hãy để ý đơn vị: $1\text{ m}^3=1000$ lít và $1\text{ cm}^3=1$ ml.

Trong tam giác vuông, $\sin\theta=\dfrac{\text{đối}}{\text{huyền}}$, $\cos\theta=\dfrac{\text{kề}}{\text{huyền}}$ và $\tan\theta=\dfrac{\text{đối}}{\text{kề}}$. **Góc nâng** đo từ phương ngang lên phía trên; góc hạ đo từ phương ngang xuống phía dưới.

:::example Bồn nước
Một bồn nước hình trụ có bán kính $1{,}2$ m và chiều cao $3$ m. Khi đầy, bồn chứa bao nhiêu lít nước?

**Lời giải.** Thể tích hình trụ là $V=\pi r^2h=\pi(1{,}2)^2(3)\approx13{,}57\text{ m}^3$.

Vì $1\text{ m}^3=1000$ lít nên bồn chứa khoảng $13{,}57\times1000\approx13.600$ lít, làm tròn đến ba chữ số có nghĩa.

Vậy bồn đầy chứa khoảng $13.600$ lít nước.
:::

## Tam giác thường và phương vị

Với mọi tam giác có các cạnh $a,b,c$ đối diện các góc $A,B,C$:
$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C},\qquad c^2=a^2+b^2-2ab\cos C,\qquad \text{Diện tích}=\tfrac12ab\sin C.$$
Dùng định lí sin khi biết một cạnh và góc đối diện nó; dùng định lí côsin khi biết hai cạnh và góc xen giữa, hoặc biết cả ba cạnh. **Phương vị** là góc đo theo chiều kim đồng hồ từ hướng bắc, viết bằng ba chữ số, chẳng hạn $040^\circ$.

:::example Hai chiếc thuyền
Hai chiếc thuyền rời cảng. Một chiếc đi $8$ km theo phương vị $040^\circ$, chiếc kia đi $11$ km theo phương vị $110^\circ$. Hai thuyền cách nhau bao xa?
A. $3{,}00$ km
B. $13{,}6$ km
C. $11{,}2$ km
D. $124{,}8$ km

**Lời giải.** Góc tại cảng giữa hai đường đi là $110^\circ-40^\circ=70^\circ$, và ta biết hai cạnh kề góc đó, nên dùng định lí côsin:
$$d^2=8^2+11^2-2(8)(11)\cos70^\circ\approx124{,}8,\qquad d\approx11{,}2\text{ km}.$$

Vậy hai thuyền cách nhau khoảng $11{,}2$ km, chọn đáp án **C**. Phương án D quên khai căn.
:::

## Sơ đồ Voronoi

Sơ đồ Voronoi chia mặt phẳng quanh một tập hợp điểm gọi là các **điểm gốc** (sites). Mỗi **ô** gồm mọi điểm gần điểm gốc của nó hơn mọi điểm gốc khác. **Cạnh** giữa hai ô nằm trên **đường trung trực** của hai điểm gốc, và **đỉnh** nơi ba ô gặp nhau cách đều cả ba điểm gốc.

Để viết đường trung trực của $P(x_1,y_1)$ và $Q(x_2,y_2)$: tìm trung điểm, tìm hệ số góc $m$ của $PQ$, rồi lấy đường thẳng qua trung điểm có hệ số góc $-\dfrac1m$.

:::graph Sơ đồ Voronoi của các điểm gốc $A(0;0)$, $B(6;0)$ và $C(2;6)$
alt: Ba điểm gốc A, B, C với ba cạnh gặp nhau tại đỉnh V(3; 2,33); một cạnh đi thẳng xuống theo x = 3, một cạnh đi sang trái và lên, một cạnh đi sang phải và lên
x: -1..8
y: -1..7
shape: equal
segment: (3, 2.333) (3, -1)
segment: (3, 2.333) (-1, 3.667)
segment: (3, 2.333) (8, 5.667)
point: (0, 0) "A" below-right
point: (6, 0) "B" below-left
point: (2, 6) "C" right
point: (3, 2.333) "V" right
:::

:::example Tìm một cạnh và một đỉnh
Với các điểm gốc $A(0;0)$, $B(6;0)$ và $C(2;6)$, viết phương trình cạnh giữa ô của $A$ và ô của $C$, và tìm toạ độ đỉnh $V$.

**Lời giải.** Cạnh giữa $A$ và $B$ là đường trung trực của $AB$, tức đường thẳng đứng $x=3$.

Với $A$ và $C$: trung điểm là $(1;3)$ và hệ số góc của $AC$ là $\dfrac{6}{2}=3$, nên đường trung trực có hệ số góc $-\dfrac13$:
$$y-3=-\frac13(x-1),\qquad y=-\frac13x+\frac{10}{3}.$$

Đỉnh nằm trên cả hai đường trung trực, nên $x=3$ và $y=-1+\dfrac{10}{3}=\dfrac73\approx2{,}33$.

Vậy cạnh giữa $A$ và $C$ là $y=-\dfrac13x+\dfrac{10}{3}$, và đỉnh là $V\left(3;\dfrac73\right)$.
:::

Hai ứng dụng thường gặp của sơ đồ Voronoi:

- **Nội suy láng giềng gần nhất:** để ước lượng một giá trị (như lượng mưa) tại điểm không có số đo, lấy giá trị tại điểm gốc của ô chứa điểm đó.
- **Đường tròn rỗng lớn nhất:** để đặt một thứ gì đó xa nhất có thể khỏi mọi điểm gốc (cửa hàng mới tránh xa đối thủ, hay một cơ sở tránh xa khu dân cư), xét các **đỉnh** trong vùng; đỉnh tốt nhất là đỉnh xa các điểm gốc gần nó nhất.

:::example Láng giềng gần nhất
Lượng mưa được đo ở ba trạm: $A$ ghi $12$ mm, $B$ ghi $18$ mm và $C$ ghi $25$ mm. Dùng sơ đồ trên, ước lượng lượng mưa tại điểm $(5;1)$ theo phương pháp láng giềng gần nhất.
A. $12$ mm
B. $25$ mm
C. $18{,}3$ mm
D. $18$ mm

**Lời giải.** Điểm $(5;1)$ có $x>3$, nên nằm về phía $B$ của cạnh $x=3$. Kiểm tra khoảng cách cũng thấy vậy: $(5;1)$ cách $B$ là $\sqrt{4+1}\approx2{,}24$, cách $A$ là $\sqrt{25+1}\approx5{,}10$ và cách $C$ là $\sqrt{9+25}\approx5{,}83$.

Vậy giá trị ước lượng là giá trị tại $B$, $18$ mm, chọn đáp án **D**. Phương án C lấy trung bình ba giá trị, đó không phải nội suy láng giềng gần nhất.
:::

:::warning Những cái bẫy thường gặp
- **Độ:** hình học IB AI dùng độ; hãy kiểm tra chế độ máy tính.
- **Định lí sin có hai nghiệm:** góc tìm bằng định lí sin có thể có hai giá trị; xem giá trị nào hợp với hình.
- **Phương vị:** đo theo chiều kim đồng hồ từ hướng bắc và viết ba chữ số.
- **Cạnh Voronoi:** dùng đường trung trực của hai điểm gốc, không phải đường thẳng nối chúng.
- **Đường tròn rỗng lớn nhất:** đáp án nằm ở một đỉnh (hoặc trên biên vùng), không phải ở một điểm gốc.
:::

:::terms
- volume / surface area | thể tích / diện tích bề mặt
- angle of elevation / depression | góc nâng / góc hạ
- sine rule / cosine rule | định lí sin / định lí côsin
- bearing | phương vị
- Voronoi diagram | sơ đồ Voronoi
- site / cell / edge / vertex | điểm gốc / ô / cạnh / đỉnh
- perpendicular bisector | đường trung trực
- nearest-neighbour interpolation | nội suy láng giềng gần nhất
- largest empty circle | đường tròn rỗng lớn nhất
:::

## Bài tập tương tự

:::exercise
Trong tam giác $ABC$, $a=10$ cm, $A=40^\circ$ và $B=65^\circ$. Tính $b$.

::hint
**Kiến thức:** định lí sin $\dfrac{b}{\sin B}=\dfrac{a}{\sin A}$.

::solution
Ta biết cạnh $a$ cùng góc đối diện $A$, và góc $B$, nên áp dụng định lí sin:
$$b=\frac{a\sin B}{\sin A}=\frac{10\sin65^\circ}{\sin40^\circ}\approx14{,}1\text{ cm}.$$

Vậy $b\approx14{,}1$ cm.

**Đáp số.** $b\approx14{,}1$ cm.
:::

:::exercise
Tính diện tích tam giác có hai cạnh $7$ m và $9$ m, góc xen giữa $50^\circ$.

::hint
**Kiến thức:** $\text{Diện tích}=\tfrac12ab\sin C$.

::solution
Công thức $\tfrac12ab\sin C$ cần góc xen giữa hai cạnh. Góc $50^\circ$ nằm giữa hai cạnh đã cho, nên diện tích là $\tfrac12(7)(9)\sin50^\circ$.

Ta được $31{,}5\times0{,}7660\approx24{,}1\text{ m}^2$.

Vậy diện tích khoảng $24{,}1\text{ m}^2$.

**Đáp số.** Khoảng $24{,}1\text{ m}^2$.
:::

:::exercise
Một quả bóng có bán kính $4$ cm. Tính diện tích bề mặt và thể tích của nó.

::hint
**Kiến thức:** $S=4\pi r^2$, $V=\tfrac43\pi r^3$.

::solution
Diện tích bề mặt là $S=4\pi(4)^2=64\pi\approx201\text{ cm}^2$.

Thể tích là $V=\tfrac43\pi(4)^3=\tfrac{256}{3}\pi\approx268\text{ cm}^3$.

Vậy quả bóng có diện tích bề mặt khoảng $201\text{ cm}^2$ và thể tích khoảng $268\text{ cm}^3$.

**Đáp số.** $201\text{ cm}^2$; $268\text{ cm}^3$.
:::

:::exercise
Viết phương trình đường trung trực của hai điểm $P(1;2)$ và $Q(5;6)$.

::hint
**Kiến thức:** trung điểm và số nghịch đảo đổi dấu của hệ số góc.

::solution
Trung điểm của $PQ$ là $\left(\dfrac{1+5}{2};\dfrac{2+6}{2}\right)=(3;4)$, và hệ số góc của $PQ$ là $\dfrac{6-2}{5-1}=1$.

Đường trung trực vuông góc với $PQ$ nên có hệ số góc $-1$, và đi qua $(3;4)$: $y-4=-(x-3)$, tức $y=-x+7$.

Vậy đường trung trực là $y=-x+7$.

**Đáp số.** $y=-x+7$.
:::

:::exercise
Các điểm gốc ở $A(0;0)$, $B(6;0)$ và $C(2;6)$. Điểm $(1;4)$ thuộc ô của điểm gốc nào?

::hint
**Kiến thức:** so sánh khoảng cách đến ba điểm gốc.

::solution
Bình phương khoảng cách từ $(1;4)$ là $1+16=17$ đến $A$, $25+16=41$ đến $B$ và $1+4=5$ đến $C$.

Khoảng cách đến $C$ nhỏ nhất, nên $(1;4)$ nằm trong ô của $C$.

Vậy điểm $(1;4)$ thuộc ô của $C$.

**Đáp số.** Ô của $C$.
:::

## Bài tập vận dụng

:::exercise
Một con tàu đi $12$ km theo phương vị $060^\circ$, rồi rẽ và đi $9$ km theo phương vị $150^\circ$. Tìm khoảng cách từ tàu đến điểm xuất phát và phương vị của tàu so với điểm xuất phát.

::hint
**Kiến thức:** tàu rẽ $90^\circ$, nên đường đi tạo thành góc vuông.

::solution
Hai phương vị hơn kém nhau $150^\circ-60^\circ=90^\circ$, nên hai chặng tạo thành góc vuông. Khoảng cách là $\sqrt{12^2+9^2}=\sqrt{225}=15$ km.

Góc tại điểm xuất phát giữa chặng đầu và đường nối đến tàu là $\arctan\dfrac{9}{12}\approx36{,}9^\circ$, nên phương vị là $060^\circ+36{,}9^\circ\approx096{,}9^\circ$.

Vậy tàu cách điểm xuất phát $15$ km theo phương vị khoảng $097^\circ$.

**Đáp số.** $15$ km; phương vị khoảng $097^\circ$.
:::

:::exercise
Một công ty muốn xây nhà kho bên trong tam giác tạo bởi các điểm gốc $A(0;0)$, $B(6;0)$ và $C(2;6)$ (đơn vị km), sao cho xa cả ba thị trấn nhất có thể. Dùng sơ đồ Voronoi đề xuất vị trí và tính khoảng cách đến thị trấn gần nhất.

::hint
**Kiến thức:** đỉnh $V\left(3;\tfrac73\right)$ cách đều ba điểm gốc.

::solution
Trong tam giác, điểm xa thị trấn gần nó nhất là đỉnh Voronoi $V\left(3;\dfrac73\right)$, điểm cách đều $A$, $B$ và $C$.

Khoảng cách từ $V$ đến $A$ là $\sqrt{3^2+\left(\dfrac73\right)^2}=\sqrt{9+\dfrac{49}{9}}\approx3{,}80$ km, và bằng khoảng cách đến $B$, $C$.

Vậy nên xây nhà kho ở khoảng $(3;\ 2{,}33)$, cách mỗi thị trấn $3{,}80$ km.

**Đáp số.** Tại $V(3;\ 2{,}33)$, cách mỗi thị trấn khoảng $3{,}80$ km.
:::

:::exercise
Một cốc giấy hình nón có bán kính $4$ cm và chiều cao $10$ cm. Một chai $2$ lít rót đầy được bao nhiêu cốc?

::hint
**Kiến thức:** $V=\tfrac13\pi r^2h$ và $2$ lít $=2000\text{ cm}^3$.

::solution
Cốc có dạng hình nón nên thể tích một cốc là $\tfrac13\pi(4)^2(10)\approx167{,}6\text{ cm}^3$.

Hai lít là $2000\text{ cm}^3$, và $\dfrac{2000}{167{,}6}\approx11{,}9$.

Vậy rót đầy được $11$ cốc.

**Đáp số.** $11$ cốc.
:::

:::exercise Thử thách
Ba cột phát sóng điện thoại đặt ở $(0;0)$, $(8;0)$ và $(0;6)$ (đơn vị km). Tìm đỉnh Voronoi và giải thích ý nghĩa của nó.

::hint
**Kiến thức:** đường trung trực của hai cặp đầu là $x=4$ và $y=3$.

::solution
Đường trung trực của $(0;0)$ và $(8;0)$ là $x=4$, của $(0;0)$ và $(0;6)$ là $y=3$, nên đỉnh là $(4;3)$.

Khoảng cách từ đỉnh đến mỗi cột là $\sqrt{4^2+3^2}=5$ km; có thể kiểm tra $(4;3)$ cũng cách $(8;0)$ và $(0;6)$ đúng $\sqrt{16+9}=5$ km.

Vậy đỉnh $(4;3)$ là điểm trong vùng xa cột gần nó nhất, cách $5$ km: nơi sóng yếu nhất.

**Đáp số.** $(4;3)$, cách mỗi cột $5$ km.
:::

:::quiz
::mc
Biết hai cạnh của một tam giác và góc xen giữa. Dùng công thức nào để tìm cạnh thứ ba?
A. Định lí sin
B. Định lí Pythagore
C. Định lí côsin
D. $\tfrac12ab\sin C$
::key C
Hai cạnh và góc xen giữa: định lí côsin.

::mc
Cạnh của sơ đồ Voronoi giữa hai điểm gốc nằm trên
A. đường trung trực của hai điểm gốc
B. đường thẳng đi qua hai điểm gốc
C. một đường tròn có tâm tại một điểm gốc
D. trục hoành
::key A
Mọi điểm trên đó cách đều hai điểm gốc.

::mc
Một hình trụ có bán kính $2$ m và chiều cao $5$ m. Thể tích của nó là
A. $10\pi\text{ m}^3$
B. $20\pi\text{ m}^3$
C. $40\pi\text{ m}^3$
D. $100\pi\text{ m}^3$
::key B
$\pi(2)^2(5)=20\pi$.

::mc
Nội suy láng giềng gần nhất ước lượng giá trị tại một điểm bằng cách
A. lấy trung bình mọi điểm gốc
B. dùng điểm gốc xa nhất
C. vẽ đường hồi quy
D. dùng giá trị tại điểm gốc của ô chứa điểm đó
::key D
Điểm gốc của ô là điểm gốc gần nhất.

::tf
Với hai điểm gốc $(0;0)$ và $(4;0)$, xét tính đúng sai của các mệnh đề sau:
a) Cạnh giữa hai ô là $x=2$.
b) Điểm $(1;5)$ thuộc ô của $(0;0)$.
c) Điểm $(2;3)$ cách đều hai điểm gốc.
d) Điểm $(3;-2)$ thuộc ô của $(0;0)$.
::key T T T F
$(3;-2)$ có $x>2$, nên gần $(4;0)$ hơn.

::sa
Tính diện tích tam giác có hai cạnh $6$ và $8$, góc xen giữa $90^\circ$.
::key 24
$\tfrac12(6)(8)\sin90^\circ=24$.

::sa
Tính khoảng cách từ $(0;0)$ đến $(4;3)$.
::key 5
$\sqrt{16+9}=5$.
:::
