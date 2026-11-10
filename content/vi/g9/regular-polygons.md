---
title: Đa giác đều
description: Nhận biết đa giác đều, tính số đo mỗi góc, bán kính đường tròn ngoại tiếp và nội tiếp, và nhận biết các phép quay giữ nguyên một đa giác đều.
minutes: 20
---

:::goals
- Nhận biết đa giác đều và tính được số đo mỗi góc của nó.
- Xác định tâm, tính bán kính đường tròn ngoại tiếp, nội tiếp của tam giác đều, hình vuông, lục giác đều.
- Nhận biết các phép quay biến một đa giác đều thành chính nó.
- Vận dụng vào các bài toán thực tế (lát nền, ốc vít, vòng quay).
:::

Hơn hai nghìn năm trước, Archimedes (287–212 TCN) muốn biết đường tròn dài gấp bao nhiêu lần đường kính. Ông không đo được trực tiếp, nên "kẹp" đường tròn giữa hai **đa giác đều** $96$ cạnh, một nội tiếp và một ngoại tiếp, rồi tính chu vi hai đa giác. Kết quả: $3\frac{10}{71}<\pi<3\frac17$ (theo MacTutor, Đại học St Andrews).

Vì sao lại là đa giác *đều*? Vì một đa giác đều được xác định hoàn toàn bởi số cạnh và bán kính đường tròn ngoại tiếp, nên mọi đại lượng của nó đều tính được. Bài này cho bạn những công cụ đầu tiên của Archimedes.

## Đa giác đều và số đo các góc

:::definition Đa giác đều
**Đa giác đều** là đa giác lồi có tất cả các cạnh bằng nhau và tất cả các góc bằng nhau.
:::

Tam giác đều và hình vuông là những đa giác đều quen thuộc. Một hình thoi (cạnh bằng nhau nhưng góc không bằng nhau) hay một hình chữ nhật không vuông (góc bằng nhau nhưng cạnh không bằng nhau) **không** phải đa giác đều: cần đủ cả hai điều kiện.

### Khám phá: tổng các góc

Từ một đỉnh của đa giác lồi $n$ cạnh, kẻ các đường chéo, ta chia đa giác thành $n-2$ tam giác. Mỗi tam giác có tổng ba góc $180^\circ$, nên tổng các góc của đa giác là $(n-2)\cdot180^\circ$. Đa giác đều có $n$ góc bằng nhau, do đó:

:::theorem Số đo mỗi góc của đa giác đều $n$ cạnh
$$\alpha=\frac{(n-2)\cdot180^\circ}{n}.$$
:::

:::example Góc của ngũ giác đều, lục giác đều, bát giác đều
Tính số đo mỗi góc của ngũ giác đều, lục giác đều và bát giác đều.

**Lời giải.** Áp dụng công thức với $n=5$, $n=6$, $n=8$, ta có

$$\frac{3\cdot180^\circ}{5}=108^\circ,\qquad \frac{4\cdot180^\circ}{6}=120^\circ,\qquad \frac{6\cdot180^\circ}{8}=135^\circ.$$

Vậy mỗi góc của ngũ giác đều, lục giác đều, bát giác đều lần lượt là $108^\circ$, $120^\circ$, $135^\circ$.
:::

Số đo góc quyết định một câu hỏi rất thực tế: lát nền bằng những viên gạch đều nhau.

:::example Vận dụng: gạch lát nền
Người ta muốn lát kín một mặt sàn bằng các viên gạch cùng hình một đa giác đều, sao cho tại mỗi đỉnh chung, các viên gạch ghép khít với nhau không chồng lên nhau. Gạch hình lục giác đều có dùng được không? Gạch hình ngũ giác đều thì sao?

**Lời giải.**

*Hiểu đề.* Tại một đỉnh chung, các góc của những viên gạch ghép quanh đỉnh phải lấp đầy đúng $360^\circ$.

*Tìm cách giải.* Lấy $360^\circ$ chia cho số đo mỗi góc; kết quả phải là số tự nhiên.

*Giải.* Lục giác đều có góc $120^\circ$ và $360^\circ:120^\circ=3$, nên ba viên gạch ghép khít tại mỗi đỉnh. Ngũ giác đều có góc $108^\circ$ và $360^\circ:108^\circ\approx3{,}33$ không là số tự nhiên: ba viên để hở $360^\circ-324^\circ=36^\circ$, bốn viên thì chồng lên nhau.

Vậy gạch lục giác đều dùng được, gạch ngũ giác đều không dùng được.

*Nhìn lại.* Những đa giác đều nào dùng được? Cần $\alpha$ là ước của $360^\circ$, với $60^\circ\leq\alpha<180^\circ$. Chỉ có $\alpha=60^\circ$, $90^\circ$, $120^\circ$, tức tam giác đều, hình vuông, lục giác đều. Đó là lí do sàn nhà thường lát gạch vuông hoặc lục giác.
:::

## Đường tròn ngoại tiếp và nội tiếp đa giác đều

:::theorem Định lí
Mỗi đa giác đều có đúng một đường tròn ngoại tiếp và đúng một đường tròn nội tiếp; hai đường tròn này có cùng tâm, gọi là **tâm của đa giác đều**.
:::

Nối tâm $O$ với các đỉnh, đa giác đều $n$ cạnh được chia thành $n$ tam giác cân bằng nhau; mỗi tam giác có góc ở đỉnh $O$ bằng $\dfrac{360^\circ}{n}$. Bán kính ngoại tiếp $R$ là cạnh bên, bán kính nội tiếp $r$ là đường cao của các tam giác cân đó.

:::diagram Lục giác đều $ABCDEF$ nội tiếp đường tròn $(O; R)$
alt: Lục giác đều ABCDEF nội tiếp đường tròn tâm O; các bán kính OA, OB và đoạn OH vuông góc với AB tại trung điểm H
point O 0,0 left
point A 3,0 right
point B 1.5,2.598 above-right
point C -1.5,2.598 above-left
point D -3,0 left
point E -1.5,-2.598 below-left
point F 1.5,-2.598 below-right
point H 2.25,1.299 right
polygon A B C D E F
circle O 3
segment O A
segment O B
segment O H dashed
right O H A
:::

Với lục giác đều, mỗi tam giác $OAB$ cân có góc ở đỉnh $\dfrac{360^\circ}{6}=60^\circ$, nên là **tam giác đều**. Vì vậy cạnh lục giác đều bằng bán kính ngoại tiếp: $a=R$.

| Đa giác đều cạnh $a$ | $R$ | $r$ |
|---|---|---|
| Tam giác đều | $\dfrac{a\sqrt3}{3}$ | $\dfrac{a\sqrt3}{6}$ |
| Hình vuông | $\dfrac{a\sqrt2}{2}$ | $\dfrac a2$ |
| Lục giác đều | $a$ | $\dfrac{a\sqrt3}{2}$ |

:::example Lục giác đều cạnh $4$ cm
Cho lục giác đều $ABCDEF$ cạnh $4$ cm. Tính $R$, $r$ và diện tích lục giác.

**Lời giải.** Ta có $R=a=4$ cm (tam giác $OAB$ đều). Gọi $H$ là trung điểm của $AB$, ta có $OH\perp AB$ (tam giác $OAB$ đều) nên

$$r=OH=\frac{4\sqrt3}{2}=2\sqrt3\ \text{(cm)}.$$

Lục giác gồm $6$ tam giác đều cạnh $4$ cm, do đó diện tích là

$$S=6\cdot\frac12\cdot AB\cdot OH=6\cdot\frac12\cdot4\cdot2\sqrt3=24\sqrt3\approx41{,}57\ \text{(cm}^2).$$

Vậy $R=4$ cm, $r=2\sqrt3$ cm và $S=24\sqrt3\approx41{,}57$ cm².
:::

## Phép quay giữ nguyên đa giác đều

:::definition Phép quay
**Phép quay** tâm $O$ góc $\alpha^\circ$ ($0^\circ<\alpha^\circ<360^\circ$) biến điểm $O$ thành chính nó và biến mỗi điểm $M\neq O$ thành điểm $M'$ sao cho $OM'=OM$ và góc quay từ $OM$ đến $OM'$ bằng $\alpha^\circ$ theo chiều đã chọn (thuận hoặc ngược chiều kim đồng hồ).
:::

Hình dung một chiếc đĩa hình lục giác đều quay quanh tâm: sau mỗi $60^\circ$, đĩa lại khớp đúng vào "chỗ cũ" của nó. Tổng quát, phép quay tâm $O$ góc $\dfrac{360^\circ}{n}$, $2\cdot\dfrac{360^\circ}{n}$, ..., $(n-1)\cdot\dfrac{360^\circ}{n}$ (theo cùng một chiều) biến đa giác đều $n$ cạnh tâm $O$ thành chính nó.

:::example Phép quay biến hình vuông thành chính nó
Cho hình vuông $ABCD$ tâm $O$ (các đỉnh theo thứ tự ngược chiều kim đồng hồ). Nêu các phép quay ngược chiều kim đồng hồ tâm $O$ biến hình vuông thành chính nó, và tìm ảnh của đỉnh $A$ trong mỗi phép quay.

**Lời giải.** Ta có $n=4$, nên các góc quay là $\dfrac{360^\circ}{4}=90^\circ$, $180^\circ$, $270^\circ$. Ta thấy $\widehat{AOB}=\widehat{BOC}=\widehat{COD}=90^\circ$ (hai đường chéo hình vuông vuông góc) và $OA=OB=OC=OD$. Do đó

$$\text{quay } 90^\circ:\ A\mapsto B,\qquad \text{quay } 180^\circ:\ A\mapsto C,\qquad \text{quay } 270^\circ:\ A\mapsto D.$$

Vậy có ba phép quay: $90^\circ$, $180^\circ$, $270^\circ$, biến $A$ lần lượt thành $B$, $C$, $D$.
:::

:::warning Những sai lầm thường gặp
- **Chỉ kiểm tra một điều kiện.** Sai: "hình thoi có các cạnh bằng nhau nên là đa giác đều". Đúng: cần cả các góc bằng nhau.
- **Nhầm góc của đa giác với góc ở tâm.** Lục giác đều có mỗi góc $120^\circ$, còn góc ở tâm $\widehat{AOB}=60^\circ$.
- **Nhầm $R$ và $r$.** $R$ đi từ tâm đến **đỉnh**, $r$ đi từ tâm đến **trung điểm cạnh**; luôn có $r<R$.
:::

**Kết nối.** Bài này dựa trên tổng các góc của tam giác, tam giác đều và [đường tròn ngoại tiếp, nội tiếp tam giác](lesson:circumcircle-incircle). Chu vi lục giác đều nội tiếp là $6R$, nhỏ hơn độ dài đường tròn $2\pi R$, nên $\pi>3$: đó chính là bước đầu tiên của Archimedes. Tăng số cạnh lên $12$, $24$, $48$, $96$, chu vi đa giác càng gần độ dài đường tròn. Phép quay còn giúp ta hiểu các hoa văn, logo có tính đối xứng quay quanh ta.

## Thuật ngữ

:::terms
- đa giác đều | regular polygon
- ngũ giác đều | regular pentagon
- lục giác đều | regular hexagon
- bát giác đều | regular octagon
- tâm của đa giác đều | centre of a regular polygon
- phép quay | rotation
- ngược chiều kim đồng hồ | anticlockwise
- lát kín mặt phẳng | tessellation
:::

## Tóm tắt

- Đa giác đều: lồi, các cạnh bằng nhau và các góc bằng nhau.
- Mỗi góc: $\dfrac{(n-2)\cdot180^\circ}{n}$; góc ở tâm chắn một cạnh: $\dfrac{360^\circ}{n}$.
- Đường tròn ngoại tiếp và nội tiếp có chung tâm; lục giác đều có $R=a$, $r=\dfrac{a\sqrt3}{2}$; hình vuông có $R=\dfrac{a\sqrt2}{2}$, $r=\dfrac a2$.
- Các phép quay tâm $O$ góc $k\cdot\dfrac{360^\circ}{n}$ ($k=1,\dots,n-1$) giữ nguyên đa giác đều $n$ cạnh.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính số đo mỗi góc của thập giác đều ($10$ cạnh) và của đa giác đều $12$ cạnh.

::hint
**Kiến thức:** $\alpha=\dfrac{(n-2)\cdot180^\circ}{n}$.

**Gợi ý các bước:**
1. Thay $n=10$ và $n=12$.

::solution
Ta có $\dfrac{8\cdot180^\circ}{10}=144^\circ$ và $\dfrac{10\cdot180^\circ}{12}=150^\circ$.

Vậy mỗi góc lần lượt là $144^\circ$ và $150^\circ$.

**Đáp số.** $144^\circ$; $150^\circ$.
:::

:::exercise
Một đa giác đều có mỗi góc bằng $140^\circ$. Đa giác đó có bao nhiêu cạnh?

::hint
**Kiến thức:** $\dfrac{(n-2)\cdot180^\circ}{n}=140^\circ$.

**Gợi ý các bước:**
1. Nhân hai vế với $n$ rồi giải phương trình bậc nhất.

::solution
Ta có $(n-2)\cdot180=140n$, suy ra $180n-360=140n$, $40n=360$, $n=9$.

Vậy đa giác có $9$ cạnh.

**Đáp số.** $9$ cạnh.
:::

:::exercise
a) Tính cạnh của hình vuông nội tiếp đường tròn bán kính $5$ cm.

b) Tính cạnh của hình vuông ngoại tiếp đường tròn bán kính $5$ cm.

::hint
**Kiến thức:** hình vuông cạnh $a$ có $R=\dfrac{a\sqrt2}{2}$, $r=\dfrac a2$.

**Gợi ý các bước:**
1. a) Giải $\dfrac{a\sqrt2}{2}=5$. b) Giải $\dfrac a2=5$.

::solution
a) Ta có $\dfrac{a\sqrt2}{2}=5$, suy ra $a=\dfrac{10}{\sqrt2}=5\sqrt2\approx7{,}07$ (cm).

b) Ta có $\dfrac a2=5$, suy ra $a=10$ cm.

Vậy a) $5\sqrt2$ cm; b) $10$ cm.

**Đáp số.** a) $5\sqrt2$ cm; b) $10$ cm.
:::

:::exercise
Cho tam giác đều $ABC$ tâm $O$ (các đỉnh theo thứ tự ngược chiều kim đồng hồ). Nêu các phép quay ngược chiều kim đồng hồ tâm $O$ biến tam giác thành chính nó. Phép quay $90^\circ$ tâm $O$ có biến tam giác thành chính nó không?

::hint
**Kiến thức:** các góc quay $k\cdot\dfrac{360^\circ}{n}$.

**Gợi ý các bước:**
1. Với $n=3$, tính các góc quay.
2. Kiểm tra $90^\circ$ có là bội của $120^\circ$ không.

::solution
Ta có $\dfrac{360^\circ}{3}=120^\circ$, nên các phép quay là $120^\circ$ (biến $A$ thành $B$) và $240^\circ$ (biến $A$ thành $C$). Phép quay $90^\circ$ biến $A$ thành điểm $A'$ với $\widehat{AOA'}=90^\circ$, mà $\widehat{AOB}=\widehat{AOC}=120^\circ$, nên $A'$ không phải đỉnh của tam giác.

Vậy có hai phép quay $120^\circ$, $240^\circ$; phép quay $90^\circ$ không giữ nguyên tam giác.

**Đáp số.** $120^\circ$ và $240^\circ$; không.
:::

:::exercise
Giả sử một con ốc (đai ốc) có mặt là lục giác đều cạnh $10$ mm. Cỡ cờ lê vặn được con ốc bằng khoảng cách giữa hai cạnh đối diện của lục giác. Tính cỡ cờ lê (làm tròn kết quả đến hàng phần mười của mi-li-mét) và khoảng cách giữa hai đỉnh đối diện.

::hint
**Kiến thức:** khoảng cách giữa hai cạnh đối diện bằng $2r$; giữa hai đỉnh đối diện bằng $2R$.

**Gợi ý các bước:**
1. Tính $r=\dfrac{a\sqrt3}{2}$ và $R=a$.

::solution
Ta có $r=\dfrac{10\sqrt3}{2}=5\sqrt3$ (mm), nên khoảng cách giữa hai cạnh đối diện là $2r=10\sqrt3\approx17{,}3$ (mm). Khoảng cách giữa hai đỉnh đối diện là $2R=2\cdot10=20$ (mm).

Vậy cần cờ lê cỡ khoảng $17{,}3$ mm; hai đỉnh đối diện cách nhau $20$ mm.

**Đáp số.** Khoảng $17{,}3$ mm; $20$ mm.
:::

:::exercise
Giả sử một vòng quay có $12$ cabin gắn cách đều nhau trên một đường tròn bán kính $20$ m, đánh số $1$ đến $12$ theo chiều quay.

a) Vòng quay phải quay một góc bao nhiêu độ để cabin số $1$ đến đúng vị trí cũ của cabin số $5$?

b) Tính khoảng cách giữa hai cabin liền kề (làm tròn kết quả đến hàng phần trăm của mét). (Ôn lại [tỉ số lượng giác](lesson:acute-angle-trig-ratios).)

::hint
**Kiến thức:** $12$ cabin là $12$ đỉnh của một đa giác đều; góc ở tâm giữa hai cabin liền kề là $30^\circ$.

**Gợi ý các bước:**
1. Từ cabin $1$ đến vị trí cabin $5$ là $4$ khoảng.
2. Kẻ đường cao của tam giác cân $OAB$ và dùng $\sin15^\circ$.

::solution
a) Hai cabin liền kề cách nhau góc ở tâm $\dfrac{360^\circ}{12}=30^\circ$, nên vòng quay phải quay $4\cdot30^\circ=120^\circ$.

b) Gọi $A$, $B$ là hai cabin liền kề, $H$ là trung điểm của $AB$. Tam giác $OAB$ cân tại $O$ có $\widehat{AOB}=30^\circ$, nên $\widehat{AOH}=15^\circ$ và

$$AB=2AH=2\cdot20\cdot\sin15^\circ\approx10{,}35\ \text{(m)}.$$

Vậy a) $120^\circ$; b) khoảng $10{,}35$ m.

**Đáp số.** a) $120^\circ$; b) khoảng $10{,}35$ m.
:::

:::exercise
**(2,0 điểm)** Cho lục giác đều $ABCDEF$ nội tiếp đường tròn $(O; 6\text{ cm})$.

a) Tính độ dài cạnh $AB$ và số đo góc $\widehat{AOB}$.

b) Chứng minh rằng tam giác $ACE$ đều và tính $AC$.

c) Tính diện tích phần hình tròn nằm ngoài lục giác (làm tròn kết quả đến hàng phần trăm của cm²).

::hint
**Kiến thức:** cạnh lục giác đều bằng $R$; tam giác đều cạnh $a$ nội tiếp đường tròn bán kính $R=\dfrac{a\sqrt3}{3}$.

**Gợi ý các bước:**
1. b) Chỉ ra $AC=CE=EA$ (các cung bằng nhau), rồi giải $\dfrac{AC\sqrt3}{3}=6$.
2. c) Lấy $\pi R^2$ trừ diện tích $6$ tam giác đều cạnh $6$ cm.

::solution
a) Ta có $AB=R=6$ cm và $\widehat{AOB}=\dfrac{360^\circ}{6}=60^\circ$.

b) Mỗi cung $AC$, $CE$, $EA$ gồm hai cung bằng nhau $60^\circ$, nên có số đo $120^\circ$. Ba cung bằng nhau căng ba dây bằng nhau, do đó $AC=CE=EA$ và tam giác $ACE$ đều. Tam giác này nội tiếp $(O; 6\text{ cm})$ nên $\dfrac{AC\sqrt3}{3}=6$, suy ra $AC=6\sqrt3$ cm.

c) Diện tích lục giác là $6\cdot\dfrac{6^2\sqrt3}{4}=54\sqrt3$ (cm²). Diện tích cần tìm là $36\pi-54\sqrt3\approx19{,}57$ (cm²).

Vậy a) $AB=6$ cm, $\widehat{AOB}=60^\circ$; b) $AC=6\sqrt3$ cm; c) khoảng $19{,}57$ cm².

**Đáp số.** a) $6$ cm, $60^\circ$; b) $6\sqrt3$ cm; c) $\approx19{,}57$ cm².
:::

:::exercise Thử thách
Từ một tấm bìa hình vuông cạnh $10$ cm, người ta cắt bốn góc là bốn tam giác vuông cân bằng nhau để được một bát giác đều. Tính cạnh của bát giác đều (viết dưới dạng $a+b\sqrt2$ rồi làm tròn kết quả đến hàng phần trăm). (Ôn lại [trục căn thức ở mẫu](lesson:simplifying-root-expressions).)

::hint
**Kiến thức:** tam giác vuông cân có cạnh huyền $x$ thì mỗi cạnh góc vuông là $\dfrac{x}{\sqrt2}$.

**Gợi ý các bước:**
1. Gọi $x$ là cạnh bát giác; mỗi cạnh hình vuông gồm một cạnh bát giác và hai cạnh góc vuông.
2. Giải phương trình, trục căn thức ở mẫu.

::solution
Gọi $x$ (cm) là cạnh bát giác đều ($0<x<10$). Mỗi tam giác cắt đi có cạnh huyền $x$, mỗi cạnh góc vuông $\dfrac{x}{\sqrt2}$. Theo cạnh hình vuông, ta có phương trình

$$x+2\cdot\frac{x}{\sqrt2}=10\ \Leftrightarrow\ x\left(1+\sqrt2\right)=10\ \Leftrightarrow\ x=\frac{10}{\sqrt2+1}=10\left(\sqrt2-1\right).$$

Ta có $x=-10+10\sqrt2\approx4{,}14$ (thoả mãn điều kiện).

Vậy cạnh bát giác đều là $10\sqrt2-10\approx4{,}14$ cm.

**Đáp số.** $-10+10\sqrt2\approx4{,}14$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Số đo mỗi góc của lục giác đều là
A. $120^\circ$.
B. $60^\circ$.
C. $720^\circ$.
D. $108^\circ$.
::key A
$\dfrac{4\cdot180^\circ}{6}=120^\circ$. B là góc ở tâm, C là tổng các góc, D là góc của ngũ giác đều.

::mc
Lục giác đều nội tiếp đường tròn bán kính $5$ cm có cạnh bằng
A. $10$ cm.
B. $5\sqrt3$ cm.
C. $5$ cm.
D. $2{,}5$ cm.
::key C
Các tam giác $OAB$ đều nên cạnh bằng $R$. A là khoảng cách giữa hai đỉnh đối diện ($2R$), B là khoảng cách giữa hai cạnh đối diện ($2r$), D là $\dfrac R2$.

::mc
Góc quay dương nhỏ nhất của phép quay tâm $O$ biến ngũ giác đều tâm $O$ thành chính nó là
A. $108^\circ$.
B. $36^\circ$.
C. $60^\circ$.
D. $72^\circ$.
::key D
$\dfrac{360^\circ}{5}=72^\circ$. A là góc của ngũ giác đều, B là nửa góc ở tâm, C là góc quay của lục giác đều.

::mc
Một đa giác đều có mỗi góc bằng $150^\circ$. Số cạnh của đa giác là
A. $6$.
B. $12$.
C. $5$.
D. $24$.
::key B
$180n-360=150n$ nên $n=12$. A lấy $180^\circ:30^\circ$ thay vì $360^\circ:30^\circ$, C lấy $150^\circ:30^\circ$, D lấy $360^\circ:15^\circ$ (chia đôi nhầm góc $30^\circ$).

::tf
Cho hình vuông $ABCD$ nội tiếp đường tròn $(O; 4\text{ cm})$. Xét tính đúng sai của các mệnh đề sau:
a) $AB=4\sqrt2$ cm.
b) $\widehat{AOB}=90^\circ$.
c) Bán kính đường tròn nội tiếp hình vuông là $2\sqrt2$ cm.
d) Phép quay tâm $O$ góc $45^\circ$ biến hình vuông thành chính nó.
::key Đ Đ Đ S
a) Đúng: $\dfrac{a\sqrt2}{2}=4$. b) Đúng: $\dfrac{360^\circ}{4}$. c) Đúng: $r=\dfrac a2=2\sqrt2$. d) Sai: góc quay phải là bội của $90^\circ$.

::sa
Tính tổng số đo (đơn vị: độ) các góc của một bát giác đều.
::key 1080
$(8-2)\cdot180^\circ=1080^\circ$.

::sa
Tính diện tích (đơn vị: cm²) của lục giác đều cạnh $2$ cm (làm tròn kết quả đến hàng phần mười).
::key 10,4
Lục giác gồm $6$ tam giác đều cạnh $2$ cm, diện tích $6\cdot\dfrac{4\sqrt3}{4}=6\sqrt3\approx10{,}4$ cm².
:::
