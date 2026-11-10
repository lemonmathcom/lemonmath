---
title: Hình cầu
description: Nhận biết hình cầu, mặt cắt của hình cầu, hiểu và dùng công thức diện tích mặt cầu, thể tích hình cầu trong các bài toán thực tế.
minutes: 20
---

:::goals
- Nhận biết hình cầu, tâm, bán kính, đường tròn lớn và mặt cắt của hình cầu bởi một mặt phẳng.
- Sử dụng công thức diện tích mặt cầu $S=4\pi R^2$ và thể tích hình cầu $V=\dfrac43\pi R^3$.
- Giải các bài toán thực tế có hình cầu kết hợp với hình trụ, hình nón.
:::

Archimedes (287–212 TCN) có rất nhiều phát minh, nhưng ông coi kết quả về hình cầu và hình trụ là quan trọng nhất: thể tích hình cầu bằng $\dfrac23$ thể tích hình trụ ngoại tiếp nó, và diện tích mặt cầu cũng bằng $\dfrac23$ diện tích toàn phần của hình trụ đó. Ông muốn khắc hình một quả cầu trong hình trụ lên mộ mình; khoảng năm 75 TCN, Cicero đã tìm thấy ngôi mộ nhờ hình vẽ ấy (theo MacTutor, Đại học St Andrews).

Từ quả bóng đá đến Trái Đất, hình cầu có mặt khắp nơi. Vỏ một quả bóng rộng bao nhiêu? Một viên bi chứa bao nhiêu kim loại? Bài này trả lời bằng phát hiện của Archimedes.

## Hình cầu và mặt cắt

Quay một nửa hình tròn tâm $O$, bán kính $R$ một vòng quanh đường kính cố định, ta được một **hình cầu** tâm $O$, bán kính $R$. Nửa đường tròn quét thành **mặt cầu**: mọi điểm của mặt cầu cách $O$ đúng bằng $R$.

:::diagram Hình cầu tâm $O$, bán kính $R$
alt: Hình cầu tâm O bán kính R với đường tròn lớn nằm ngang vẽ như một hình elip, nửa sau nét đứt
point P0 3.000,0.000 ""
point P1 2.598,0.400 ""
point P2 1.500,0.693 ""
point P3 0.000,0.800 ""
point P4 -1.500,0.693 ""
point P5 -2.598,0.400 ""
point P6 -3.000,0.000 ""
point P7 -2.598,-0.400 ""
point P8 -1.500,-0.693 ""
point P9 -0.000,-0.800 ""
point P10 1.500,-0.693 ""
point P11 2.598,-0.400 ""
segment P0 P1 dashed
segment P1 P2 dashed
segment P2 P3 dashed
segment P3 P4 dashed
segment P4 P5 dashed
segment P5 P6 dashed
segment P6 P7
segment P7 P8
segment P8 P9
segment P9 P10
segment P10 P11
segment P11 P0
point O 0,0 above
point A 3,0 right
circle O 3
segment O A
label 1.5,0.25 "R"
:::

### Khám phá: cắt hình cầu bằng một mặt phẳng

Hình dung cắt một hình cầu (chẳng hạn một quả cam gần tròn) bằng một nhát dao thẳng: mặt cắt là một hình tròn. Nhát cắt đi qua tâm cho hình tròn lớn nhất, bán kính $R$: đường tròn biên của nó gọi là **đường tròn lớn** (như đường xích đạo của Trái Đất). Nhát cắt cách tâm một khoảng $d$ ($d<R$) cho hình tròn bán kính $r=\sqrt{R^2-d^2}$, theo định lí Pythagore trong tam giác $OHM$ vuông tại $H$.

:::diagram Mặt cắt cách tâm $O$ một khoảng $d=OH$
alt: Nhìn từ bên cạnh: đường tròn tâm O bán kính R, một dây nằm ngang cách O một khoảng d, nửa dây bằng r
point O 0,0 below
point H 0,3 above-left
point M 4,3 right
point N -4,3 ""
circle O 5
segment N M
segment O H dashed
segment O M
right O H M
label -0.4,1.5 "d"
label 2,3.4 "r"
label 2.4,1.2 "R"
:::

:::example Mặt cắt của quả cầu
Một quả cầu có bán kính $13$ cm. Cắt quả cầu bằng một mặt phẳng cách tâm $5$ cm. Tính bán kính và diện tích của mặt cắt.

**Lời giải.** Gọi $H$ là tâm của mặt cắt và $M$ là một điểm trên đường tròn biên của mặt cắt. Xét tam giác $OHM$ vuông tại $H$, theo định lí Pythagore ta có

$$r=HM=\sqrt{13^2-5^2}=12\ \text{(cm)}.$$

Do đó diện tích mặt cắt là $\pi\cdot12^2=144\pi\approx452{,}39$ (cm²).

Vậy mặt cắt là hình tròn bán kính $12$ cm, diện tích khoảng $452{,}39$ cm².
:::

## Diện tích mặt cầu và thể tích hình cầu

Hình trụ ngoại tiếp hình cầu bán kính $R$ có bán kính đáy $R$ và chiều cao $2R$. Diện tích xung quanh của nó là $2\pi R\cdot2R=4\pi R^2$ và thể tích là $\pi R^2\cdot2R=2\pi R^3$. Archimedes đã chứng minh: diện tích mặt cầu đúng bằng diện tích xung quanh của hình trụ ngoại tiếp, còn thể tích hình cầu bằng $\dfrac23$ thể tích hình trụ đó.

:::theorem Hình cầu bán kính $R$
$$S=4\pi R^2,\qquad V=\frac43\pi R^3.$$
:::

**Hiểu sâu hơn.** $S=4\pi R^2$ nghĩa là mặt cầu có diện tích bằng đúng $4$ hình tròn lớn. *Hoạt động:* vẽ $4$ hình tròn có bán kính bằng bán kính một quả cam, bóc vỏ cam thành từng mảnh nhỏ rồi thử phủ lên các hình tròn đó và so sánh với công thức (quả cam không tròn tuyệt đối nên kết quả chỉ gần đúng). Thể tích tỉ lệ với $R^3$: bán kính gấp đôi thì thể tích gấp $8$ lần.

:::example Tính diện tích và thể tích
Tính diện tích mặt cầu và thể tích của hình cầu có bán kính $3$ cm.

**Lời giải.** Ta có

$$S=4\pi\cdot3^2=36\pi\approx113{,}10\ \text{(cm}^2),\qquad V=\frac43\pi\cdot3^3=36\pi\approx113{,}10\ \text{(cm}^3).$$

Vậy $S=36\pi$ cm² và $V=36\pi$ cm³.

**Nhận xét.** Hai số đo bằng nhau là trùng hợp riêng của $R=3$: từ $4\pi R^2=\dfrac43\pi R^3$ suy ra $R=3$. Diện tích và thể tích có đơn vị khác nhau, nên không thể "so sánh" chúng.
:::

:::example Vận dụng: quả bóng đá
Theo Luật 2 trong Luật bóng đá của IFAB, quả bóng thi đấu có chu vi từ $68$ cm đến $70$ cm. Giả sử một quả bóng có chu vi đường tròn lớn là $69$ cm. Tính diện tích vỏ quả bóng và thể tích không khí bên trong (bỏ qua độ dày vỏ, làm tròn kết quả đến hàng đơn vị).

**Lời giải.**

*Hiểu đề.* Biết chu vi đường tròn lớn $C=69$ cm; cần $S$ và $V$.

*Tìm cách giải.* Từ $C=2\pi R$ tìm $R$, rồi dùng hai công thức.

*Giải.* Ta có $R=\dfrac{69}{2\pi}\approx10{,}98$ (cm). Do đó

$$S=4\pi R^2=\frac{C^2}{\pi}=\frac{69^2}{\pi}\approx1515\ \text{(cm}^2),\qquad V=\frac43\pi R^3\approx5547\ \text{(cm}^3).$$

Vậy vỏ bóng có diện tích khoảng $1515$ cm² và quả bóng chứa khoảng $5547$ cm³ (gần $5{,}5$ lít) không khí.

*Nhìn lại.* Công thức $S=\dfrac{C^2}{\pi}$ cho phép tính ngay từ số đo bằng thước dây, không cần làm tròn $R$ giữa chừng (làm tròn sớm gây sai số). Với $C=68$ cm và $C=70$ cm, diện tích lần lượt khoảng $1472$ cm² và $1560$ cm²: chênh lệch nhỏ của chu vi tạo ra chênh lệch khoảng $6\%$ của diện tích.
:::

:::example Vận dụng: Trái Đất
Coi Trái Đất là một hình cầu bán kính $6371$ km (bán kính trung bình theo NASA). Tính độ dài đường xích đạo (coi là một đường tròn lớn) và diện tích bề mặt Trái Đất.

**Lời giải.** Độ dài đường tròn lớn là

$$C=2\pi\cdot6371\approx40\,030\ \text{(km)}.$$

Diện tích bề mặt là $S=4\pi\cdot6371^2\approx510\,064\,472$ (km²), tức khoảng $5{,}1\cdot10^8$ km².

Vậy đường xích đạo dài khoảng $40\,030$ km và diện tích bề mặt Trái Đất khoảng $5{,}1\cdot10^8$ km².
:::

:::warning Những sai lầm thường gặp
- **Dùng đường kính thay cho bán kính.** Quả bóng đường kính $22$ cm có $R=11$ cm.
- **Nhầm hai công thức.** Diện tích có $R^2$ (đơn vị cm²), thể tích có $R^3$ (đơn vị cm³). Sai: $V=4\pi R^2$.
- **Nghĩ rằng gấp đôi bán kính thì thể tích gấp đôi.** Đúng: thể tích gấp $2^3=8$ lần, diện tích gấp $2^2=4$ lần.
:::

**Kết nối.** Hình cầu khép lại chương các hình khối thực tiễn: hình trụ, hình nón, hình cầu đều sinh ra khi quay một hình phẳng quanh một trục. Mặt cắt dùng định lí Pythagore như bài toán dây cung trong [Cung và dây](lesson:arcs-and-chords). Ba công thức thể tích có liên hệ đẹp: với cùng bán kính $R$ và chiều cao $2R$, ta có $V_{\text{nón}}:V_{\text{cầu}}:V_{\text{trụ}}=1:2:3$ (bài [Hình trụ và hình nón](lesson:cylinders-and-cones)).

## Thuật ngữ

:::terms
- hình cầu | sphere (solid ball)
- mặt cầu | surface of a sphere
- tâm, bán kính | centre, radius
- đường tròn lớn | great circle
- mặt cắt | cross-section
- nửa hình cầu | hemisphere
- hình trụ ngoại tiếp | circumscribed cylinder
:::

## Tóm tắt

- Hình cầu sinh ra khi quay nửa hình tròn quanh đường kính.
- Mặt phẳng cách tâm $d<R$ cắt hình cầu theo hình tròn bán kính $\sqrt{R^2-d^2}$; qua tâm thì được đường tròn lớn.
- $S=4\pi R^2$ (bằng $4$ hình tròn lớn); $V=\dfrac43\pi R^3$.
- Hình cầu bằng $\dfrac23$ hình trụ ngoại tiếp (cả thể tích lẫn diện tích toàn phần).

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính diện tích mặt cầu và thể tích của hình cầu có bán kính $5$ cm (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** $S=4\pi R^2$, $V=\dfrac43\pi R^3$.

**Gợi ý các bước:**
1. Thay $R=5$.

::solution
Ta có $S=4\pi\cdot5^2=100\pi\approx314{,}16$ (cm²) và $V=\dfrac43\pi\cdot5^3=\dfrac{500\pi}{3}\approx523{,}60$ (cm³).

Vậy $S\approx314{,}16$ cm², $V\approx523{,}60$ cm³.

**Đáp số.** $100\pi\approx314{,}16$ cm²; $\dfrac{500\pi}{3}\approx523{,}60$ cm³.
:::

:::exercise
Một hình cầu có đường kính $12$ cm. Tính diện tích mặt cầu và thể tích hình cầu (để kết quả dưới dạng chứa $\pi$).

::hint
**Kiến thức:** $R=\dfrac{d}{2}$.

**Gợi ý các bước:**
1. Tính $R=6$ cm rồi thay vào hai công thức.

::solution
Ta có $R=6$ cm, nên $S=4\pi\cdot6^2=144\pi$ (cm²) và $V=\dfrac43\pi\cdot6^3=288\pi$ (cm³).

Vậy $S=144\pi$ cm², $V=288\pi$ cm³.

**Đáp số.** $144\pi$ cm²; $288\pi$ cm³.
:::

:::exercise
Một mặt cầu có diện tích $64\pi$ cm². Tính bán kính và thể tích của hình cầu.

::hint
**Kiến thức:** $4\pi R^2=S$.

**Gợi ý các bước:**
1. Giải $4\pi R^2=64\pi$ với $R>0$.
2. Tính $V$.

::solution
Ta có $4\pi R^2=64\pi$, suy ra $R^2=16$, $R=4$ (vì $R>0$). Do đó $V=\dfrac43\pi\cdot4^3=\dfrac{256\pi}{3}\approx268{,}08$ (cm³).

Vậy $R=4$ cm và $V=\dfrac{256\pi}{3}$ cm³.

**Đáp số.** $R=4$ cm; $V=\dfrac{256\pi}{3}$ cm³.
:::

:::exercise
Một quả cầu kim loại có bán kính $6$ cm được nấu chảy rồi đúc thành các viên bi hình cầu bán kính $2$ cm. Bỏ qua hao hụt, đúc được bao nhiêu viên bi?

::hint
**Kiến thức:** thể tích kim loại không đổi; $V$ tỉ lệ với $R^3$.

**Gợi ý các bước:**
1. Lập tỉ số hai thể tích.

::solution
Số viên bi bằng tỉ số hai thể tích:

$$\frac{\frac43\pi\cdot6^3}{\frac43\pi\cdot2^3}=\left(\frac62\right)^3=27.$$

Vậy đúc được $27$ viên bi.

**Đáp số.** $27$ viên.
:::

:::exercise
Giả sử một chiếc kem ốc quế gồm phần vỏ hình nón bán kính đáy $3$ cm, chiều cao $10$ cm chứa đầy kem, và phía trên có thêm một nửa hình cầu kem bán kính $3$ cm. Tính thể tích kem (làm tròn kết quả đến hàng phần trăm của cm³). (Ôn lại [hình nón](lesson:cylinders-and-cones).)

::hint
**Kiến thức:** $V_{\text{nón}}=\dfrac13\pi r^2h$; nửa hình cầu có thể tích $\dfrac23\pi R^3$.

**Gợi ý các bước:**
1. Tính hai thể tích rồi cộng.

::solution
Ta có $V_{\text{nón}}=\dfrac13\pi\cdot3^2\cdot10=30\pi$ (cm³) và $V_{\text{nửa cầu}}=\dfrac23\pi\cdot3^3=18\pi$ (cm³). Do đó thể tích kem là $30\pi+18\pi=48\pi\approx150{,}80$ (cm³).

Vậy chiếc kem có khoảng $150{,}80$ cm³ kem.

**Đáp số.** $48\pi\approx150{,}80$ cm³.
:::

:::exercise
Một quả bóng bay hình cầu được thổi từ bán kính $10$ cm lên bán kính $20$ cm. Diện tích mặt bóng và thể tích khí bên trong tăng lên bao nhiêu lần?

::hint
**Kiến thức:** $S$ tỉ lệ với $R^2$, $V$ tỉ lệ với $R^3$.

**Gợi ý các bước:**
1. Lập tỉ số $\dfrac{S_2}{S_1}$ và $\dfrac{V_2}{V_1}$.

::solution
Ta có $\dfrac{S_2}{S_1}=\dfrac{4\pi\cdot20^2}{4\pi\cdot10^2}=4$ và $\dfrac{V_2}{V_1}=\dfrac{\frac43\pi\cdot20^3}{\frac43\pi\cdot10^3}=8$.

Vậy diện tích tăng $4$ lần, thể tích tăng $8$ lần.

**Đáp số.** $4$ lần; $8$ lần.
:::

:::exercise
**(1,5 điểm)** Giả sử một hộp hình trụ đựng vừa khít $3$ quả bóng bàn xếp chồng lên nhau, mỗi quả có đường kính $4$ cm (các quả bóng tiếp xúc với thành hộp, đáy và nắp hộp).

a) Tính bán kính đáy và chiều cao của hộp.

b) Tính thể tích của hộp và tổng thể tích ba quả bóng (để kết quả dưới dạng chứa $\pi$).

c) Phần không gian trống trong hộp chiếm bao nhiêu phần trăm thể tích hộp (làm tròn kết quả đến hàng phần mười)?

::hint
**Kiến thức:** $V_{\text{trụ}}=\pi r^2h$; $V_{\text{cầu}}=\dfrac43\pi R^3$.

**Gợi ý các bước:**
1. a) Bán kính đáy bằng bán kính quả bóng, chiều cao bằng $3$ đường kính.
2. c) Lấy phần trống chia cho thể tích hộp.

::solution
a) Hộp có bán kính đáy $r=2$ cm và chiều cao $h=3\cdot4=12$ (cm).

b) Ta có $V_{\text{hộp}}=\pi\cdot2^2\cdot12=48\pi$ (cm³) và $V_{\text{bóng}}=3\cdot\dfrac43\pi\cdot2^3=32\pi$ (cm³).

c) Phần trống là $48\pi-32\pi=16\pi$ (cm³), chiếm $\dfrac{16\pi}{48\pi}=\dfrac13\approx33{,}3\%$ thể tích hộp.

Vậy a) $r=2$ cm, $h=12$ cm; b) $48\pi$ cm³ và $32\pi$ cm³; c) khoảng $33{,}3\%$.

**Đáp số.** a) $2$ cm, $12$ cm; b) $48\pi$ cm³, $32\pi$ cm³; c) $\approx33{,}3\%$.
:::

:::exercise Thử thách
Hai mặt phẳng song song cách nhau $7$ cm cắt một hình cầu tâm $O$ theo hai hình tròn có bán kính $3$ cm và $4$ cm; tâm $O$ nằm giữa hai mặt phẳng. Tính bán kính $R$ của hình cầu. (Ôn lại [phương trình quy về phương trình bậc nhất](lesson:equations-reducible-to-linear).)

::hint
**Kiến thức:** khoảng cách từ $O$ đến mặt cắt bán kính $r$ là $d=\sqrt{R^2-r^2}$.

**Gợi ý các bước:**
1. Gọi $d_1$, $d_2$ là khoảng cách từ $O$ đến hai mặt cắt; ta có $d_1+d_2=7$.
2. Lập $R^2=d_1^2+9=d_2^2+16$ và thay $d_1=7-d_2$.

::solution
Gọi $d_1$, $d_2$ (cm) lần lượt là khoảng cách từ $O$ đến mặt cắt bán kính $3$ cm và $4$ cm. Vì $O$ nằm giữa hai mặt phẳng nên $d_1+d_2=7$. Theo định lí Pythagore, ta có

$$R^2=d_1^2+3^2=d_2^2+4^2.$$

Thay $d_1=7-d_2$, ta được $(7-d_2)^2+9=d_2^2+16$, suy ra $49-14d_2=7$, $d_2=3$, $d_1=4$. Do đó $R=\sqrt{3^2+4^2}=5$ (cm).

Vậy bán kính hình cầu là $5$ cm.

**Đáp số.** $R=5$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Diện tích mặt cầu bán kính $2$ cm là
A. $8\pi$ cm².
B. $16\pi$ cm².
C. $\dfrac{32\pi}{3}$ cm².
D. $4\pi$ cm².
::key B
$S=4\pi\cdot2^2=16\pi$. A dùng $4\pi R$ (quên bình phương), C là thể tích, D là diện tích một hình tròn lớn.

::mc
Thể tích hình cầu bán kính $3$ cm là
A. $108\pi$ cm³.
B. $12\pi$ cm³.
C. $36\pi$ cm³.
D. $27\pi$ cm³.
::key C
$V=\dfrac43\pi\cdot27=36\pi$. A quên $\dfrac13$, B dùng $R^2$ thay cho $R^3$, D quên hệ số $\dfrac43$.

::mc
Một mặt phẳng cách tâm hình cầu bán kính $5$ cm một khoảng $3$ cm. Mặt cắt là hình tròn bán kính
A. $4$ cm.
B. $2$ cm.
C. $8$ cm.
D. $\sqrt{34}$ cm.
::key A
$\sqrt{25-9}=4$. B lấy hiệu $5-3$, C lấy tổng $5+3$, D cộng dưới dấu căn.

::mc
Nếu bán kính hình cầu tăng gấp đôi thì thể tích tăng
A. $2$ lần.
B. $4$ lần.
C. $6$ lần.
D. $8$ lần.
::key D
$V$ tỉ lệ với $R^3$, $2^3=8$. A coi $V$ tỉ lệ thuận với $R$, B là tỉ số diện tích, C nhân $2\cdot3$ thay vì tính $2^3$.

::tf
Cho hình cầu bán kính $6$ cm. Xét tính đúng sai của các mệnh đề sau:
a) Diện tích mặt cầu là $144\pi$ cm².
b) Thể tích hình cầu là $288\pi$ cm³.
c) Mỗi đường tròn lớn có độ dài $12\pi$ cm.
d) Hình trụ ngoại tiếp hình cầu có thể tích gấp đôi thể tích hình cầu.
::key Đ Đ Đ S
a) Đúng: $4\pi\cdot36$. b) Đúng: $\dfrac43\pi\cdot216$. c) Đúng: $2\pi\cdot6$. d) Sai: hình trụ có thể tích $\pi\cdot36\cdot12=432\pi$, gấp $1{,}5$ lần.

::sa
Hình cầu có số đo diện tích mặt cầu (cm²) bằng số đo thể tích (cm³). Tính bán kính (đơn vị: cm) của hình cầu.
::key 3
$4\pi R^2=\dfrac43\pi R^3$ nên $R=3$.

::sa
Một quả cầu kim loại bán kính $4$ cm được nấu chảy và đúc thành các viên bi bán kính $1$ cm. Bỏ qua hao hụt, đúc được bao nhiêu viên bi?
::key 64
Tỉ số thể tích là $\left(\dfrac41\right)^3=64$.
:::
