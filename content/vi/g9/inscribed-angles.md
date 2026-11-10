---
title: Góc nội tiếp
description: Nhận biết góc nội tiếp, hiểu vì sao góc nội tiếp bằng nửa số đo cung bị chắn và dùng các hệ quả để tính góc, chứng minh vuông góc.
minutes: 20
---

:::goals
- Nhận biết được góc nội tiếp và cung bị chắn.
- Giải thích và sử dụng được định lí: số đo góc nội tiếp bằng nửa số đo cung bị chắn.
- Vận dụng các hệ quả của định lí để tính góc và chứng minh.
:::

Trong bóng đá, khung thành rộng $7{,}32$ m (khoảng cách giữa mép trong của hai cột dọc, theo Luật 1 trong Luật bóng đá của IFAB). Một tiền đạo đứng ở điểm $M$ "nhìn" hai cột dọc $A$, $B$ dưới góc $\widehat{AMB}$, gọi là góc sút: góc càng lớn, khung thành càng "rộng" trong mắt cầu thủ.

Vậy có những vị trí *khác nhau* mà góc sút *bằng nhau* không? Chúng nằm trên đường nào? Câu trả lời rất đẹp: chúng nằm trên một cung tròn đi qua hai cột dọc. Để hiểu vì sao, ta cần một loại góc mới: góc nội tiếp.

## Góc nội tiếp là gì?

Ở bài [Cung và dây](lesson:arcs-and-chords), góc ở tâm có đỉnh tại tâm $O$. Bây giờ ta dời đỉnh của góc lên chính đường tròn.

:::definition Góc nội tiếp
**Góc nội tiếp** là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó. Cung nằm bên trong góc gọi là **cung bị chắn**.
:::

Chẳng hạn, $A$, $B$, $M$ thuộc đường tròn $(O)$ thì $\widehat{AMB}$ là góc nội tiếp chắn cung $AB$ (cung không chứa $M$).

**Không phải góc nội tiếp:** góc có đỉnh trong hoặc ngoài đường tròn (chẳng hạn góc ở tâm), hay góc có đỉnh trên đường tròn nhưng một cạnh không cắt đường tròn thêm điểm nào.

:::diagram Góc nội tiếp $\widehat{AMB}$ và góc ở tâm $\widehat{AOB}$ cùng chắn cung $AB$
alt: Đường tròn tâm O với góc nội tiếp AMB 50 độ và góc ở tâm AOB 100 độ cùng chắn cung AB
point O 0,0 right
point A -2.298,-1.928 below-left
point B 2.298,-1.928 below-right
point M -0.521,2.954 above
circle O 3
segment M A
segment M B
segment O A dashed
segment O B dashed
angle A M B "50°"
angle A O B "100°"
:::

## Định lí góc nội tiếp

### Khám phá: đo rồi so sánh

Trên hình, cung nhỏ $AB$ có số đo $100^\circ$ (bằng góc ở tâm). Đo bằng thước đo góc, ta được $\widehat{AMB}=50^\circ$; dời $M$ trên cung lớn rồi đo lại, vẫn được $50^\circ$. Góc nội tiếp dường như luôn bằng **một nửa** cung bị chắn.

:::theorem Định lí góc nội tiếp
Trong một đường tròn, số đo của góc nội tiếp bằng nửa số đo của cung bị chắn.
:::

**Vì sao?** Xét trường hợp tâm $O$ nằm trên cạnh $MB$. Tam giác $OMA$ cân tại $O$ (vì $OM=OA=R$) nên $\widehat{OMA}=\widehat{OAM}$. Góc $\widehat{AOB}$ là góc ngoài của tam giác $OMA$, do đó

$$\widehat{AOB}=\widehat{OMA}+\widehat{OAM}=2\widehat{AMB}.$$

Mà $\widehat{AOB}$ bằng số đo cung $AB$, nên $\widehat{AMB}$ bằng nửa số đo cung đó. Khi $O$ nằm trong hoặc ngoài góc, ta kẻ đường kính $MD$ rồi cộng hoặc trừ hai trường hợp như trên.

Trở lại câu hỏi về góc sút.

:::example Vận dụng: những vị trí có cùng góc sút
Khung thành có hai cột dọc $A$, $B$ với $AB=7{,}32$ m. Giả sử vẽ trên mặt sân một đường tròn tâm $O$ đi qua $A$, $B$ sao cho $\widehat{AOB}=60^\circ$. Tính góc sút $\widehat{AMB}$ của một cầu thủ đứng tại điểm $M$ bất kì trên cung lớn $AB$, và tính bán kính của đường tròn.

**Lời giải.**

*Hiểu đề.* Biết dây $AB$ và góc ở tâm; cần góc nội tiếp cùng chắn cung $AB$ và bán kính.

*Tìm cách giải.* Định lí góc nội tiếp cho góc; tam giác $OAB$ cho bán kính.

*Giải.* Góc $\widehat{AMB}$ là góc nội tiếp chắn cung nhỏ $AB$ có số đo $60^\circ$, nên

$$\widehat{AMB}=\frac{60^\circ}{2}=30^\circ.$$

Tam giác $OAB$ cân tại $O$ (vì $OA=OB$) và có $\widehat{AOB}=60^\circ$ nên là tam giác đều. Suy ra $OA=AB=7{,}32$ m.

Vậy mọi vị trí trên cung lớn $AB$ đều có góc sút $30^\circ$, và bán kính đường tròn là $7{,}32$ m.

*Nhìn lại.* Đứng tại $N$ **bên trong** đường tròn thì sao? Kéo dài $AN$ cắt đường tròn tại $M$; $\widehat{ANB}$ là góc ngoài của tam giác $NMB$ nên $\widehat{ANB}>30^\circ$. Đứng ngoài thì góc sút nhỏ hơn: đường tròn là "đường đồng mức" của góc sút.
:::

:::diagram Các điểm $M_1$, $M_2$, $M_3$ trên cung lớn nhìn $AB$ dưới cùng một góc
alt: Đường tròn qua hai cột dọc A, B; ba điểm M1, M2, M3 trên cung lớn cùng nhìn AB dưới góc 30 độ
point O 0,0 right
point A -1.5,-2.598 below "A"
point B 1.5,-2.598 below "B"
point M1 -2.598,1.5 left "M_1"
point M2 0,3 above "M_2"
point M3 2.598,1.5 right "M_3"
circle O 3
segment A B
segment M1 A
segment M1 B
segment M2 A
segment M2 B
segment M3 A
segment M3 B
angle A M2 B "30°"
:::

## Các hệ quả của định lí

Định lí cho ta ba hệ quả rất hay dùng.

:::theorem Hệ quả
Trong một đường tròn:
- Các góc nội tiếp bằng nhau chắn các cung bằng nhau; các góc nội tiếp cùng chắn một cung (hoặc chắn các cung bằng nhau) thì bằng nhau.
- Góc nội tiếp (nhỏ hơn hoặc bằng $90^\circ$) có số đo bằng nửa số đo góc ở tâm cùng chắn một cung.
- Góc nội tiếp chắn nửa đường tròn là góc vuông.
:::

Đảo lại, góc nội tiếp vuông thì chắn cung $180^\circ$, tức là hai cạnh của nó đi qua hai đầu một đường kính.

:::example Vận dụng: tìm tâm mặt bàn tròn
Để tìm tâm một mặt bàn tròn, bác thợ mộc đặt đỉnh góc vuông của ê ke tại điểm $C$ trên mép bàn, hai cạnh ê ke cắt mép tại $A$, $B$, rồi kẻ $AB$. Làm lại tại một điểm khác, được $A'B'$. Giải thích vì sao giao điểm của $AB$ và $A'B'$ là tâm mặt bàn.

**Lời giải.** Ta có $\widehat{ACB}=90^\circ$ là góc nội tiếp, nên nó chắn cung có số đo $2\cdot90^\circ=180^\circ$ (định lí góc nội tiếp). Do đó $AB$ là một đường kính, tức là $AB$ đi qua tâm.

Tương tự, $A'B'$ cũng là một đường kính và đi qua tâm.

Vậy hai đường kính $AB$, $A'B'$ cắt nhau tại tâm của mặt bàn.
:::

Các góc nội tiếp cùng chắn một cung cho ta những cặp góc bằng nhau, từ đó có tam giác đồng dạng (lớp 8).

:::example Hai dây cắt nhau
Hai dây $AB$ và $CD$ của đường tròn $(O)$ cắt nhau tại $I$ nằm bên trong đường tròn. Chứng minh rằng $IA\cdot IB=IC\cdot ID$.

**Lời giải.** Xét tam giác $IAC$ và tam giác $IDB$, ta có:

$\widehat{AIC}=\widehat{DIB}$ (hai góc đối đỉnh);

$\widehat{CAB}=\widehat{CDB}$ (hai góc nội tiếp cùng chắn cung $BC$).

Do đó $\triangle IAC\backsim\triangle IDB$ (g.g), suy ra

$$\frac{IA}{ID}=\frac{IC}{IB}\ \Rightarrow\ IA\cdot IB=IC\cdot ID.$$

Vậy $IA\cdot IB=IC\cdot ID$.
:::

:::warning Những sai lầm thường gặp
- **Lấy góc nội tiếp bằng góc ở tâm.** Sai: "$\widehat{AOB}=110^\circ$ nên $\widehat{ACB}=110^\circ$". Lí do sai: góc nội tiếp chỉ bằng **nửa** cung bị chắn. Đúng: $\widehat{ACB}=55^\circ$.
- **Chọn nhầm cung bị chắn.** Sai: "$\widehat{AOB}=110^\circ$, $D$ thuộc cung nhỏ $AB$, nên $\widehat{ADB}=55^\circ$". Lí do sai: góc $\widehat{ADB}$ chắn cung **lớn** $AB$ (cung không chứa $D$) có số đo $250^\circ$. Đúng: $\widehat{ADB}=125^\circ$.
:::

**Kết nối.** Bài này dựa trên góc ở tâm ([Cung và dây](lesson:arcs-and-chords)), góc ngoài của tam giác (lớp 7) và tam giác đồng dạng (lớp 8). Nó dẫn tới [đường tròn ngoại tiếp tam giác vuông](lesson:circumcircle-incircle) và [tứ giác nội tiếp](lesson:cyclic-quadrilaterals), dạng bài có trong hầu hết đề thi vào lớp 10.

## Thuật ngữ

:::terms
- góc nội tiếp | inscribed angle (angle at the circumference)
- góc ở tâm | angle at the centre
- cung bị chắn | intercepted arc
- nửa đường tròn | semicircle
- đường kính | diameter
- dây cung | chord
- góc đối đỉnh | vertically opposite angles
:::

## Tóm tắt

- Góc nội tiếp: đỉnh trên đường tròn, hai cạnh chứa hai dây.
- Góc nội tiếp $=\dfrac12$ số đo cung bị chắn (cung nằm trong góc).
- Cùng chắn một cung (hoặc các cung bằng nhau) thì bằng nhau.
- Góc nội tiếp $\leq 90^\circ$ bằng nửa góc ở tâm cùng chắn một cung.
- Chắn nửa đường tròn thì là góc vuông; góc nội tiếp vuông thì chắn đường kính.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho các điểm $A$, $B$, $C$, $D$ thuộc đường tròn $(O)$ với $\widehat{AOB}=130^\circ$, $C$ thuộc cung lớn $AB$ và $D$ thuộc cung nhỏ $AB$.

a) Tính số đo cung lớn $AB$.

b) Tính $\widehat{ACB}$.

c) Tính $\widehat{ADB}$.

::hint
**Kiến thức:** góc nội tiếp bằng nửa số đo cung bị chắn (cung nằm trong góc).

**Gợi ý các bước:**
1. Cung nhỏ $AB$ bằng góc ở tâm; cung lớn bằng $360^\circ$ trừ cung nhỏ.
2. Xác định mỗi góc chắn cung nào rồi chia đôi.

::solution
a) Ta có $\text{sđ}\,\overset{\frown}{AB}_{\text{nhỏ}}=130^\circ$, nên cung lớn $AB$ có số đo $360^\circ-130^\circ=230^\circ$.

b) Góc $\widehat{ACB}$ chắn cung nhỏ $AB$, nên $\widehat{ACB}=\dfrac{130^\circ}{2}=65^\circ$.

c) Góc $\widehat{ADB}$ chắn cung lớn $AB$, nên $\widehat{ADB}=\dfrac{230^\circ}{2}=115^\circ$.

**Đáp số.** a) $230^\circ$; b) $65^\circ$; c) $115^\circ$.
:::

:::exercise
Cho đường tròn $(O; 6{,}5\text{ cm})$ có đường kính $AB$ và điểm $C$ thuộc đường tròn với $BC=5$ cm. Tính $\widehat{ACB}$ và $AC$.

::hint
**Kiến thức:** góc nội tiếp chắn nửa đường tròn là góc vuông; định lí Pythagore.

**Gợi ý các bước:**
1. Chỉ ra tam giác $ABC$ vuông tại $C$.
2. Tính $AC=\sqrt{AB^2-BC^2}$ với $AB=13$ cm.

::solution
Ta có $\widehat{ACB}=90^\circ$ (góc nội tiếp chắn nửa đường tròn). Xét tam giác $ABC$ vuông tại $C$, ta có $AC=\sqrt{13^2-5^2}=\sqrt{144}=12$ (cm).

Vậy $\widehat{ACB}=90^\circ$ và $AC=12$ cm.

**Đáp số.** $\widehat{ACB}=90^\circ$; $AC=12$ cm.
:::

:::exercise
Ba điểm $A$, $B$, $C$ thuộc đường tròn $(O)$ với $\widehat{BAC}=40^\circ$ và $\widehat{ABC}=75^\circ$. Tính số đo các cung nhỏ $BC$, $AC$, $AB$.

::hint
**Kiến thức:** cung bị chắn bằng hai lần góc nội tiếp.

**Gợi ý các bước:**
1. Tính $\widehat{ACB}$.
2. Nhân đôi mỗi góc để được cung đối diện.

::solution
Ta có $\widehat{ACB}=180^\circ-40^\circ-75^\circ=65^\circ$. Mỗi góc của tam giác là góc nội tiếp chắn cung đối diện, nên

$$\text{sđ}\,\overset{\frown}{BC}=2\cdot40^\circ=80^\circ,\quad \text{sđ}\,\overset{\frown}{AC}=2\cdot75^\circ=150^\circ,\quad \text{sđ}\,\overset{\frown}{AB}=2\cdot65^\circ=130^\circ.$$

Vậy các cung $BC$, $AC$, $AB$ có số đo lần lượt $80^\circ$, $150^\circ$, $130^\circ$ (tổng $360^\circ$).

**Đáp số.** $80^\circ$, $150^\circ$, $130^\circ$.
:::

:::exercise
Cho đường tròn $(O)$ đường kính $AB$ và điểm $C$ thuộc đường tròn ($C$ khác $A$, $B$). Tia phân giác của góc $\widehat{ACB}$ cắt đường tròn tại điểm thứ hai $D$. Chứng minh rằng cung $AD$ và cung $DB$ (không chứa $C$) bằng nhau, và tam giác $ADB$ vuông cân.

::hint
**Kiến thức:** các góc nội tiếp bằng nhau chắn các cung bằng nhau; góc nội tiếp chắn nửa đường tròn.

**Gợi ý các bước:**
1. Tính $\widehat{ACD}=\widehat{DCB}$, suy ra hai cung $AD$, $DB$.
2. Dùng $\widehat{ADB}=90^\circ$.

::solution
Ta có $\widehat{ACB}=90^\circ$ (góc nội tiếp chắn nửa đường tròn), nên $\widehat{ACD}=\widehat{DCB}=45^\circ$ ($CD$ là tia phân giác). Hai góc nội tiếp bằng nhau nên chắn hai cung bằng nhau: $\text{sđ}\,\overset{\frown}{AD}=\text{sđ}\,\overset{\frown}{DB}=90^\circ$. Suy ra $AD=DB$ (hai cung bằng nhau căng hai dây bằng nhau).

Mặt khác $\widehat{ADB}=90^\circ$ (góc nội tiếp chắn nửa đường tròn).

Vậy hai cung $AD$, $DB$ bằng nhau và tam giác $ADB$ vuông cân tại $D$.

**Đáp số.** Cung $AD$ = cung $DB$ $=90^\circ$; tam giác $ADB$ vuông cân tại $D$.
:::

:::exercise
Giả sử một sân khấu ngoài trời rộng $AB=12$ m. Ban tổ chức xếp một hàng ghế trên cung lớn $AB$ của đường tròn tâm $O$ đi qua $A$, $B$, với $\widehat{AOB}=100^\circ$. Tính góc nhìn sân khấu $\widehat{AMB}$ từ một ghế $M$ bất kì của hàng, và tính bán kính đường tròn (làm tròn kết quả đến hàng phần mười của mét). (Ôn lại [tỉ số lượng giác của góc nhọn](lesson:acute-angle-trig-ratios).)

::hint
**Kiến thức:** định lí góc nội tiếp; tỉ số sin trong tam giác vuông.

**Gợi ý các bước:**
1. Tính $\widehat{AMB}$ từ cung nhỏ $AB$.
2. Gọi $H$ là trung điểm của $AB$, dùng $\sin\widehat{AOH}=\dfrac{AH}{OA}$.

::solution
Góc $\widehat{AMB}$ chắn cung nhỏ $AB$ có số đo $100^\circ$, nên $\widehat{AMB}=50^\circ$.

Gọi $H$ là trung điểm của $AB$. Tam giác $OAB$ cân tại $O$ nên $OH\perp AB$ và $\widehat{AOH}=50^\circ$. Xét tam giác $OAH$ vuông tại $H$, ta có

$$OA=\frac{AH}{\sin 50^\circ}=\frac{6}{\sin 50^\circ}\approx7{,}8\ \text{(m)}.$$

Vậy mọi ghế trong hàng nhìn sân khấu dưới góc $50^\circ$, và bán kính khoảng $7{,}8$ m.

**Đáp số.** $50^\circ$; khoảng $7{,}8$ m.
:::

:::exercise
Một tấm kính hình tròn bị vỡ. Người thợ đặt đỉnh góc vuông của ê ke tại điểm $C$ trên mép cong của một mảnh vỡ, hai cạnh ê ke cắt mép tại $A$, $B$ với $CA=30$ cm, $CB=40$ cm. Tính bán kính tấm kính.

::hint
**Kiến thức:** góc nội tiếp vuông thì chắn nửa đường tròn, nên $AB$ là đường kính.

**Gợi ý các bước:**
1. Tính $AB$ bằng định lí Pythagore, rồi chia đôi.

::solution
Ta có $\widehat{ACB}=90^\circ$ là góc nội tiếp, nên nó chắn cung $180^\circ$, do đó $AB$ là đường kính. Xét tam giác $ABC$ vuông tại $C$, ta có $AB=\sqrt{30^2+40^2}=50$ (cm).

Vậy bán kính tấm kính là $25$ cm.

**Đáp số.** $25$ cm.
:::

:::exercise
**(2,0 điểm)** Cho đường tròn $(O; 5\text{ cm})$ có đường kính $AB$ và điểm $C$ thuộc đường tròn sao cho $AC=6$ cm. Gọi $H$ là chân đường vuông góc kẻ từ $C$ đến $AB$.

a) Chứng minh rằng tam giác $ABC$ vuông tại $C$.

b) Chứng minh rằng $\widehat{ACH}=\widehat{ABC}$.

c) Tính $CH$ và $BH$.

::hint
**Kiến thức:** góc nội tiếp chắn nửa đường tròn; hai góc cùng phụ một góc.

**Gợi ý các bước:**
1. b) Chỉ ra $\widehat{ACH}$ và $\widehat{ABC}$ cùng phụ với $\widehat{CAB}$.
2. c) Tính $BC$, rồi $CH=\dfrac{AC\cdot BC}{AB}$ và $BH=\sqrt{BC^2-CH^2}$.

::solution
a) Ta có $\widehat{ACB}=90^\circ$ (góc nội tiếp chắn nửa đường tròn), nên tam giác $ABC$ vuông tại $C$.

b) Ta có $\widehat{ACH}+\widehat{CAB}=90^\circ$ (tam giác $ACH$ vuông tại $H$) và $\widehat{ABC}+\widehat{CAB}=90^\circ$ (tam giác $ABC$ vuông tại $C$). Do đó $\widehat{ACH}=\widehat{ABC}$ (cùng phụ với $\widehat{CAB}$).

c) Ta có $AB=10$ cm, $BC=\sqrt{10^2-6^2}=8$ (cm). Từ $S_{ABC}=\dfrac12\cdot AC\cdot BC=\dfrac12\cdot AB\cdot CH$, suy ra $CH=\dfrac{6\cdot8}{10}=4{,}8$ (cm). Xét tam giác $BCH$ vuông tại $H$, ta có $BH=\sqrt{8^2-4{,}8^2}=6{,}4$ (cm).

Vậy $CH=4{,}8$ cm và $BH=6{,}4$ cm.

**Đáp số.** a), b) Xem chứng minh; c) $CH=4{,}8$ cm, $BH=6{,}4$ cm.
:::

:::exercise Thử thách
Hai dây $AB$ và $CD$ của một đường tròn cắt nhau tại $I$ nằm bên trong đường tròn. Biết $IA=2$ cm, $IB=12$ cm và $CD=11$ cm. Tính $IC$ và $ID$ (biết $IC<ID$). (Ôn lại [định lí Viète](lesson:vietes-theorem).)

::hint
**Kiến thức:** $IA\cdot IB=IC\cdot ID$ (chứng minh ở ví dụ Hai dây cắt nhau); hai số biết tổng và tích.

**Gợi ý các bước:**
1. Tính $IC\cdot ID$ và $IC+ID$.
2. Lập phương trình $x^2-Sx+P=0$ và giải.

::solution
Ta có $IC\cdot ID=IA\cdot IB=2\cdot12=24$ và $IC+ID=CD=11$ (vì $I$ nằm giữa $C$ và $D$). Do đó $IC$, $ID$ là hai nghiệm của phương trình

$$x^2-11x+24=0.$$

Ta có $\Delta=121-96=25$, nên $x_1=\dfrac{11-5}{2}=3$, $x_2=\dfrac{11+5}{2}=8$.

Vậy $IC=3$ cm và $ID=8$ cm.

**Đáp số.** $IC=3$ cm, $ID=8$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Góc nội tiếp chắn cung có số đo $100^\circ$ có số đo là
A. $100^\circ$.
B. $50^\circ$.
C. $200^\circ$.
D. $130^\circ$.
::key B
Góc nội tiếp bằng nửa cung bị chắn: $50^\circ$. A nhầm với góc ở tâm, C nhân đôi thay vì chia đôi, D lấy nửa cung lớn.

::mc
Cho đường tròn $(O)$ đường kính $AB$ và điểm $C$ thuộc đường tròn với $\widehat{CAB}=35^\circ$. Số đo $\widehat{CBA}$ là
A. $35^\circ$.
B. $90^\circ$.
C. $145^\circ$.
D. $55^\circ$.
::key D
$\widehat{ACB}=90^\circ$ (chắn nửa đường tròn), nên $\widehat{CBA}=90^\circ-35^\circ=55^\circ$. A coi tam giác cân tại $C$, B nhầm với $\widehat{ACB}$, C quên góc vuông tại $C$ (lấy $180^\circ-35^\circ$).

::mc
Cho $A$, $B$, $M$ thuộc đường tròn $(O)$, $\widehat{AOB}=140^\circ$ và $M$ thuộc cung lớn $AB$. Số đo $\widehat{AMB}$ là
A. $70^\circ$.
B. $140^\circ$.
C. $110^\circ$.
D. $280^\circ$.
::key A
$\widehat{AMB}$ chắn cung nhỏ $140^\circ$, nên bằng $70^\circ$. B là góc ở tâm, C ứng với $M$ thuộc cung nhỏ, D nhân đôi thay vì chia đôi.

::mc
Cho bốn điểm $A$, $B$, $C$, $D$ thuộc một đường tròn, $C$ và $D$ cùng thuộc cung lớn $AB$, $\widehat{ACB}=40^\circ$. Số đo $\widehat{ADB}$ là
A. $80^\circ$.
B. $140^\circ$.
C. $40^\circ$.
D. $20^\circ$.
::key C
Hai góc nội tiếp cùng chắn cung nhỏ $AB$ nên bằng nhau: $\widehat{ADB}=40^\circ$. A nhân đôi như góc ở tâm, B coi $D$ ở cung kia ($180^\circ-40^\circ$), D chia đôi thêm một lần.

::tf
Cho đường tròn $(O; 8{,}5\text{ cm})$ có đường kính $AB$ và điểm $C$ thuộc đường tròn với $AC=8$ cm. Xét tính đúng sai của các mệnh đề sau:
a) $\widehat{ACB}=90^\circ$.
b) $BC=15$ cm.
c) $\widehat{AOC}=2\widehat{ABC}$.
d) Diện tích tam giác $ABC$ bằng $120$ cm².
::key Đ Đ Đ S
a) Đúng: chắn nửa đường tròn. b) Đúng: $\sqrt{17^2-8^2}=15$. c) Đúng: góc ở tâm và góc nội tiếp cùng chắn cung nhỏ $AC$. d) Sai: $\dfrac12\cdot8\cdot15=60$ cm².

::sa
Một góc nội tiếp có số đo $27^\circ$. Tính số đo (đơn vị: độ) của cung bị chắn.
::key 54
Cung bị chắn bằng hai lần góc nội tiếp: $2\cdot27^\circ=54^\circ$.

::sa
Cho tam giác nhọn $ABC$ nội tiếp đường tròn $(O)$ có $\widehat{ABC}=62^\circ$. Tính số đo (đơn vị: độ) của góc $\widehat{AOC}$.
::key 124
Góc nội tiếp $\widehat{ABC}$ và góc ở tâm $\widehat{AOC}$ cùng chắn cung nhỏ $AC$, nên $\widehat{AOC}=2\cdot62^\circ=124^\circ$.
:::
