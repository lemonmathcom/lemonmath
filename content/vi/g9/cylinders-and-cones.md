---
title: Hình trụ và hình nón
description: Nhận biết hình trụ, hình nón, hiểu vì sao có các công thức diện tích xung quanh và thể tích, vận dụng vào bồn nước, nón lá, đống cát.
minutes: 20
---

:::goals
- Nhận biết hình trụ, hình nón và các yếu tố: bán kính đáy, chiều cao, đường sinh.
- Giải thích và sử dụng công thức diện tích xung quanh, thể tích của hình trụ và hình nón.
- Giải các bài toán thực tế: bồn nước, sơn cột, nón lá, đống cát.
:::

Trên mái nhà nhiều gia đình Việt Nam có một chiếc bồn nước hình trụ; ngoài đồng, chiếc nón lá che nắng cho người nông dân; ở công trường, cát đổ xuống tự tạo thành một đống hình nón. Những câu hỏi rất đời thường: bồn chứa được bao nhiêu lít, đủ dùng mấy ngày? Làm một chiếc nón cần bao nhiêu lá? Đống cát cần mấy chuyến xe?

Muốn trả lời, ta cần biết đo hai loại hình khối "tròn" đầu tiên: hình trụ và hình nón.

## Hình trụ

Quay một hình chữ nhật $OABO'$ một vòng quanh cạnh $OO'$ cố định, ta được một **hình trụ**. Hai cạnh $OA$, $O'B$ quét thành hai **mặt đáy** là hai hình tròn bằng nhau, nằm trên hai mặt phẳng song song; cạnh $AB$ quét thành **mặt xung quanh**, mỗi vị trí của $AB$ là một **đường sinh**. Độ dài $AB$ là **chiều cao** $h$, độ dài $OA$ là **bán kính đáy** $r$.

:::diagram Hình trụ bán kính đáy $r$, chiều cao $h$
alt: Hình trụ đứng với hai đáy hình tròn tâm O và O', bán kính r, chiều cao h; nửa sau của đáy dưới vẽ nét đứt
point P0 2.000,0.000 ""
point P1 1.732,0.300 ""
point P2 1.000,0.520 ""
point P3 0.000,0.600 ""
point P4 -1.000,0.520 ""
point P5 -1.732,0.300 ""
point P6 -2.000,0.000 ""
point P7 -1.732,-0.300 ""
point P8 -1.000,-0.520 ""
point P9 -0.000,-0.600 ""
point P10 1.000,-0.520 ""
point P11 1.732,-0.300 ""
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
point Q0 2.000,4.000 ""
point Q1 1.732,4.300 ""
point Q2 1.000,4.520 ""
point Q3 0.000,4.600 ""
point Q4 -1.000,4.520 ""
point Q5 -1.732,4.300 ""
point Q6 -2.000,4.000 ""
point Q7 -1.732,3.700 ""
point Q8 -1.000,3.480 ""
point Q9 -0.000,3.400 ""
point Q10 1.000,3.480 ""
point Q11 1.732,3.700 ""
segment Q0 Q1
segment Q1 Q2
segment Q2 Q3
segment Q3 Q4
segment Q4 Q5
segment Q5 Q6
segment Q6 Q7
segment Q7 Q8
segment Q8 Q9
segment Q9 Q10
segment Q10 Q11
segment Q11 Q0
point O 0,0 below
point O2 0,4 above "O'"
point A 2,0 right
point B 2,4 right
point L -2,0 ""
point L2 -2,4 ""
segment L L2
segment A B
segment O A dashed
segment O O2 dashed
label 1,0.25 "r"
label 2.4,2 "h"
:::

### Khám phá: trải phẳng mặt xung quanh

Hãy hình dung bóc nhãn của một lon nước hình trụ rồi trải phẳng: ta được một **hình chữ nhật**. Một cạnh của nó là chiều cao $h$, cạnh kia chính là chu vi đáy $2\pi r$. Do đó diện tích xung quanh bằng $2\pi r\cdot h$.

Thể tích hình trụ tính như hình lăng trụ đứng (lớp 7): diện tích đáy nhân chiều cao.

:::theorem Hình trụ bán kính đáy $r$, chiều cao $h$
$$S_{xq}=2\pi rh,\qquad S_{tp}=2\pi rh+2\pi r^2,\qquad V=\pi r^2h.$$
:::

:::example Tính diện tích và thể tích hình trụ
Một hình trụ có bán kính đáy $5$ cm và chiều cao $12$ cm. Tính diện tích xung quanh, diện tích toàn phần và thể tích (làm tròn kết quả đến hàng phần trăm).

**Lời giải.** Ta có

$$S_{xq}=2\pi\cdot5\cdot12=120\pi\approx376{,}99\ \text{(cm}^2),$$

$$S_{tp}=120\pi+2\pi\cdot5^2=170\pi\approx534{,}07\ \text{(cm}^2),\qquad V=\pi\cdot5^2\cdot12=300\pi\approx942{,}48\ \text{(cm}^3).$$

Vậy $S_{xq}\approx376{,}99$ cm², $S_{tp}\approx534{,}07$ cm² và $V\approx942{,}48$ cm³.
:::

:::example Vận dụng: bồn nước đủ dùng mấy ngày?
Giả sử một gia đình $4$ người có bồn nước hình trụ đường kính đáy $1$ m, cao $1{,}4$ m, và mỗi người dùng trung bình $100$ lít nước mỗi ngày. Nếu bơm đầy bồn một lần, gia đình dùng được trọn mấy ngày?

**Lời giải.**

*Hiểu đề.* Cần thể tích bồn (đổi ra lít) và lượng nước dùng mỗi ngày.

*Tìm cách giải.* Tính $V=\pi r^2h$ với $r=0{,}5$ m, đổi $1$ m³ $=1000$ lít, rồi chia cho $4\cdot100=400$ lít.

*Giải.* Thể tích bồn là

$$V=\pi\cdot0{,}5^2\cdot1{,}4=0{,}35\pi\approx1{,}0996\ \text{(m}^3)\approx1100\ \text{(lít)}.$$

Mỗi ngày gia đình dùng $400$ lít, ta có $1100:400=2{,}75$.

Vậy bồn đầy đủ dùng trọn $2$ ngày (sang ngày thứ ba thì thiếu).

*Nhìn lại.* Kết quả hợp lí: $1$ m³ là $1000$ lít, bồn hơi lớn hơn $1$ m³. Nếu muốn đủ dùng $3$ ngày ($1200$ lít) với cùng đường kính, cần chiều cao $h=\dfrac{1{,}2}{0{,}25\pi}\approx1{,}53$ m. Thể tích tỉ lệ thuận với $h$ nhưng tỉ lệ với **bình phương** của $r$: tăng đường kính hiệu quả hơn tăng chiều cao.
:::

## Hình nón

Quay một tam giác $SOA$ vuông tại $O$ một vòng quanh cạnh góc vuông $SO$ cố định, ta được một **hình nón**. Cạnh $OA$ quét thành **mặt đáy** (hình tròn bán kính $r=OA$), cạnh $SA$ quét thành **mặt xung quanh**, mỗi vị trí của $SA$ là một **đường sinh** $l$. Điểm $S$ là **đỉnh**, $SO=h$ là **chiều cao**. Theo định lí Pythagore, $l^2=r^2+h^2$.

:::diagram Hình nón đỉnh $S$, bán kính đáy $r$, chiều cao $h$, đường sinh $l$
alt: Hình nón đỉnh S, tâm đáy O, bán kính OA bằng r, chiều cao SO bằng h vuông góc với OA, đường sinh SA bằng l
point P0 2.000,0.000 ""
point P1 1.732,0.300 ""
point P2 1.000,0.520 ""
point P3 0.000,0.600 ""
point P4 -1.000,0.520 ""
point P5 -1.732,0.300 ""
point P6 -2.000,0.000 ""
point P7 -1.732,-0.300 ""
point P8 -1.000,-0.520 ""
point P9 -0.000,-0.600 ""
point P10 1.000,-0.520 ""
point P11 1.732,-0.300 ""
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
point O 0,0 below
point S 0,4 above
point A 2,0 right
point L -2,0 ""
segment S L
segment S A
segment O A dashed
segment S O dashed
right S O A
label 1,0.25 "r"
label -0.3,2 "h"
label 1.3,2.2 "l"
:::

### Vì sao $S_{xq}=\pi rl$?

Cắt mặt xung quanh của hình nón theo một đường sinh rồi trải phẳng, ta được một **hình quạt tròn** bán kính $l$. Độ dài cung của hình quạt bằng chu vi đáy $2\pi r$. Theo bài [Diện tích hình quạt tròn](lesson:arc-length-sector-area), $S_{\text{quạt}}=\dfrac{l_{\text{cung}}\cdot R}{2}$, nên

$$S_{xq}=\frac{2\pi r\cdot l}{2}=\pi rl.$$

Về thể tích: đổ nước đầy một hình nón rồi rót sang hình trụ có cùng đáy và cùng chiều cao, ta thấy cần đúng $3$ lần mới đầy. Thể tích hình nón bằng $\dfrac13$ thể tích hình trụ cùng đáy, cùng chiều cao.

:::theorem Hình nón bán kính đáy $r$, chiều cao $h$, đường sinh $l$
$$S_{xq}=\pi rl,\qquad S_{tp}=\pi rl+\pi r^2,\qquad V=\frac13\pi r^2h.$$
:::

:::example Tính các yếu tố của hình nón
Một hình nón có bán kính đáy $6$ cm, chiều cao $8$ cm. Tính đường sinh, diện tích xung quanh và thể tích.

**Lời giải.** Xét tam giác $SOA$ vuông tại $O$, theo định lí Pythagore ta có $l=\sqrt{6^2+8^2}=10$ (cm). Do đó

$$S_{xq}=\pi\cdot6\cdot10=60\pi\approx188{,}50\ \text{(cm}^2),\qquad V=\frac13\pi\cdot6^2\cdot8=96\pi\approx301{,}59\ \text{(cm}^3).$$

Vậy $l=10$ cm, $S_{xq}=60\pi$ cm², $V=96\pi$ cm³.
:::

:::example Vận dụng: lá cho một chiếc nón
Giả sử một chiếc nón lá có dạng hình nón với đường kính vành $40$ cm và chiều cao $15$ cm. Tính diện tích lá cần để phủ một lớp mặt nón (làm tròn kết quả đến hàng đơn vị của cm²). Khi trải phẳng lớp lá, ta được hình quạt có số đo cung bao nhiêu độ?

**Lời giải.** Ta có $r=20$ cm, $h=15$ cm, nên $l=\sqrt{20^2+15^2}=25$ (cm). Diện tích một lớp lá là

$$S_{xq}=\pi\cdot20\cdot25=500\pi\approx1571\ \text{(cm}^2).$$

Hình quạt bán kính $25$ cm có độ dài cung bằng chu vi đáy $40\pi$ cm. Gọi $n^\circ$ là số đo cung, ta có $\dfrac{\pi\cdot25\cdot n}{180}=40\pi$, suy ra $n=288$.

Vậy cần khoảng $1571$ cm² lá cho một lớp, và hình quạt trải phẳng có số đo cung $288^\circ$.
:::

:::warning Những sai lầm thường gặp
- **Dùng chiều cao thay cho đường sinh.** Sai: $S_{xq}=\pi rh$. Đúng: $S_{xq}=\pi rl$ với $l=\sqrt{r^2+h^2}$.
- **Quên $\dfrac13$.** Sai: $V_{\text{nón}}=\pi r^2h$. Đúng: $V_{\text{nón}}=\dfrac13\pi r^2h$.
- **Dùng đường kính thay cho bán kính.** Đề cho đường kính $1$ m thì $r=0{,}5$ m; nhầm sẽ làm thể tích tăng gấp $4$ lần.
- **Không đổi đơn vị.** $1$ m³ $=1000$ dm³ $=1000$ lít.
:::

**Kết nối.** Hai công thức diện tích xung quanh đều đến từ việc **trải phẳng**: hình chữ nhật (hình trụ) và hình quạt tròn (hình nón), dùng độ dài đường tròn và diện tích hình quạt ở chương Đường tròn. Thể tích hình trụ mở rộng công thức lăng trụ đứng (lớp 7), thể tích hình nón giống công thức hình chóp đều ($\dfrac13$ đáy nhân cao) ở lớp 8. Bài tiếp theo, [hình cầu](lesson:spheres), là hình khối "tròn" thứ ba.

## Thuật ngữ

:::terms
- hình trụ | cylinder
- hình nón | cone
- mặt đáy | base
- mặt xung quanh | curved surface
- đường sinh | slant height (generator)
- diện tích xung quanh | curved surface area
- diện tích toàn phần | total surface area
- thể tích | volume
:::

## Tóm tắt

- Hình trụ: $S_{xq}=2\pi rh$, $S_{tp}=2\pi rh+2\pi r^2$, $V=\pi r^2h$.
- Hình nón: $l=\sqrt{r^2+h^2}$, $S_{xq}=\pi rl$, $S_{tp}=\pi rl+\pi r^2$, $V=\dfrac13\pi r^2h$.
- Trải phẳng: mặt xung quanh hình trụ là hình chữ nhật $2\pi r\times h$; của hình nón là hình quạt bán kính $l$, cung dài $2\pi r$.
- Nón và trụ cùng đáy, cùng chiều cao: $V_{\text{nón}}=\dfrac13V_{\text{trụ}}$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Một hình trụ có bán kính đáy $3$ cm và chiều cao $10$ cm. Tính diện tích xung quanh và thể tích (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** $S_{xq}=2\pi rh$, $V=\pi r^2h$.

**Gợi ý các bước:**
1. Thay $r=3$, $h=10$.

::solution
Hình trụ có bán kính đáy $r=3$ cm và chiều cao $h=10$ cm.

Diện tích xung quanh của hình trụ là
$$S_{xq}=2\pi rh=2\pi\cdot3\cdot10=60\pi\approx188{,}50\ \text{(cm}^2\text{)}.$$

Thể tích của hình trụ là
$$V=\pi r^2h=\pi\cdot3^2\cdot10=90\pi\approx282{,}74\ \text{(cm}^3\text{)}.$$

Vậy $S_{xq}=60\pi\approx188{,}50$ cm² và $V=90\pi\approx282{,}74$ cm³.

**Đáp số.** $60\pi\approx188{,}50$ cm²; $90\pi\approx282{,}74$ cm³.
:::

:::exercise
Một hình nón có bán kính đáy $5$ cm và đường sinh $13$ cm. Tính chiều cao, diện tích xung quanh và thể tích của hình nón.

::hint
**Kiến thức:** $h=\sqrt{l^2-r^2}$; $S_{xq}=\pi rl$; $V=\dfrac13\pi r^2h$.

**Gợi ý các bước:**
1. Tính $h$ bằng định lí Pythagore.
2. Thay vào hai công thức.

::solution
Hình nón có bán kính đáy $r=5$ cm và đường sinh $l=13$ cm.

Chiều cao $h$, bán kính đáy $r$ và đường sinh $l$ là ba cạnh của một tam giác vuông có cạnh huyền $l$. Theo định lí Pythagore, ta có
$$h=\sqrt{l^2-r^2}=\sqrt{13^2-5^2}=\sqrt{144}=12\ \text{(cm)}.$$

Diện tích xung quanh của hình nón là
$$S_{xq}=\pi rl=\pi\cdot5\cdot13=65\pi\approx204{,}2\ \text{(cm}^2\text{)}.$$

Thể tích của hình nón là
$$V=\frac13\pi r^2h=\frac13\pi\cdot5^2\cdot12=100\pi\approx314{,}2\ \text{(cm}^3\text{)}.$$

Vậy $h=12$ cm, $S_{xq}=65\pi$ cm² và $V=100\pi$ cm³.

**Đáp số.** $12$ cm; $65\pi$ cm²; $100\pi$ cm³.
:::

:::exercise
Một hình trụ có chiều cao $8$ cm và thể tích $72\pi$ cm³. Tính bán kính đáy.

::hint
**Kiến thức:** $V=\pi r^2h$.

**Gợi ý các bước:**
1. Giải $\pi r^2\cdot8=72\pi$ với $r>0$.

::solution
Gọi $r$ (cm) là bán kính đáy của hình trụ ($r>0$).

Thể tích hình trụ là $V=\pi r^2h=\pi r^2\cdot8$. Theo đề bài, ta có
$$8\pi r^2=72\pi.$$

Suy ra $r^2=9$. Vì $r>0$ nên $r=3$.

Vậy bán kính đáy của hình trụ là $3$ cm.

**Đáp số.** $3$ cm.
:::

:::exercise
Giả sử sảnh một nhà văn hoá có $8$ cột hình trụ, mỗi cột đường kính $0{,}4$ m, cao $3{,}5$ m. Người ta sơn mặt xung quanh các cột; mỗi lít sơn phủ được $10$ m². Cần mua ít nhất bao nhiêu lít sơn (sơn bán theo từng lít)?

::hint
**Kiến thức:** $S_{xq}=2\pi rh$ với $r=0{,}2$ m.

**Gợi ý các bước:**
1. Tính diện tích xung quanh một cột, nhân $8$.
2. Chia cho $10$ rồi làm tròn lên.

::solution
Diện tích xung quanh một cột là $2\pi\cdot0{,}2\cdot3{,}5=1{,}4\pi$ (m²). Tổng diện tích cần sơn là $8\cdot1{,}4\pi=11{,}2\pi\approx35{,}19$ (m²). Ta có $35{,}19:10\approx3{,}52$.

Vậy cần mua ít nhất $4$ lít sơn.

**Đáp số.** $4$ lít.
:::

:::exercise
Giả sử ở công trường có một đống cát hình nón với đường kính đáy $4$ m và chiều cao $1{,}5$ m. Mỗi chuyến xe chở được $5$ m³ cát. Cần ít nhất mấy chuyến để chở hết đống cát?

::hint
**Kiến thức:** $V=\dfrac13\pi r^2h$ với $r=2$ m.

**Gợi ý các bước:**
1. Tính thể tích, chia cho $5$, làm tròn lên.

::solution
Đống cát có dạng hình nón với bán kính đáy $r=\dfrac42=2$ (m) và chiều cao $h=1{,}5$ m.

Thể tích đống cát là
$$V=\frac13\pi r^2h=\frac13\pi\cdot2^2\cdot1{,}5=2\pi\approx6{,}28\ \text{(m}^3\text{)}.$$

Mỗi chuyến chở được $5$ m³. Vì $6{,}28>5$ nên một chuyến không chở hết; vì $6{,}28<2\cdot5=10$ nên hai chuyến chở hết.

Vậy cần ít nhất $2$ chuyến xe.

**Đáp số.** $2$ chuyến.
:::

:::exercise
Một cốc hình nón và một cốc hình trụ có cùng bán kính đáy $4$ cm và cùng chiều cao $9$ cm. Tính thể tích mỗi cốc. Phải đổ đầy cốc hình nón bao nhiêu lần để rót đầy cốc hình trụ?

::hint
**Kiến thức:** $V_{\text{trụ}}=\pi r^2h$, $V_{\text{nón}}=\dfrac13\pi r^2h$.

**Gợi ý các bước:**
1. Tính hai thể tích rồi chia.

::solution
Hai cốc có cùng bán kính đáy $r=4$ cm và cùng chiều cao $h=9$ cm.

Thể tích cốc hình nón là
$$V_{\text{nón}}=\frac13\pi r^2h=\frac13\pi\cdot4^2\cdot9=48\pi\ \text{(cm}^3\text{)}.$$

Thể tích cốc hình trụ là
$$V_{\text{trụ}}=\pi r^2h=\pi\cdot4^2\cdot9=144\pi\ \text{(cm}^3\text{)}.$$

Ta có $\dfrac{V_{\text{trụ}}}{V_{\text{nón}}}=\dfrac{144\pi}{48\pi}=3$.

Vậy cốc hình nón có thể tích $48\pi$ cm³, cốc hình trụ có thể tích $144\pi$ cm³, và phải đổ đầy cốc hình nón $3$ lần để rót đầy cốc hình trụ.

**Đáp số.** $48\pi$ cm³, $144\pi$ cm³; $3$ lần.
:::

:::exercise
**(1,5 điểm)** Cho hình chữ nhật $ABCD$ có $AB=6$ cm, $BC=4$ cm.

a) Quay hình chữ nhật một vòng quanh cạnh $AB$ cố định. Tính thể tích hình trụ tạo thành.

b) Quay tam giác $ABC$ (vuông tại $B$) một vòng quanh cạnh $AB$ cố định. Tính thể tích hình nón tạo thành.

c) Tính diện tích xung quanh của hình nón ở câu b) (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** khi quay quanh $AB$, bán kính đáy là $BC$, chiều cao là $AB$.

**Gợi ý các bước:**
1. a), b) Dùng $r=4$, $h=6$.
2. c) Đường sinh là $AC$.

::solution
a) Khi quay hình chữ nhật $ABCD$ một vòng quanh cạnh $AB$ cố định, ta được hình trụ có chiều cao $h=AB=6$ cm và bán kính đáy $r=BC=4$ cm.

Thể tích hình trụ là
$$V=\pi r^2h=\pi\cdot4^2\cdot6=96\pi\approx301{,}59\ \text{(cm}^3\text{)}.$$

Vậy thể tích hình trụ là $96\pi$ cm³.

b) Khi quay tam giác $ABC$ vuông tại $B$ một vòng quanh cạnh $AB$ cố định, ta được hình nón có đỉnh $A$, chiều cao $h=AB=6$ cm và bán kính đáy $r=BC=4$ cm.

Thể tích hình nón là
$$V=\frac13\pi r^2h=\frac13\pi\cdot4^2\cdot6=32\pi\approx100{,}53\ \text{(cm}^3\text{)}.$$

Vậy thể tích hình nón là $32\pi$ cm³.

c) Đường sinh của hình nón là $l=AC$. Xét tam giác $ABC$ vuông tại $B$, theo định lí Pythagore, ta có
$$AC=\sqrt{AB^2+BC^2}=\sqrt{6^2+4^2}=\sqrt{52}=2\sqrt{13}\ \text{(cm)}.$$

Diện tích xung quanh của hình nón là
$$S_{xq}=\pi rl=\pi\cdot4\cdot2\sqrt{13}=8\sqrt{13}\,\pi\approx90{,}62\ \text{(cm}^2\text{)}.$$

Vậy diện tích xung quanh của hình nón khoảng $90{,}62$ cm².

**Đáp số.** a) $96\pi$ cm³; b) $32\pi$ cm³; c) $\approx90{,}62$ cm².
:::

:::exercise Thử thách
Từ một tấm giấy hình nửa hình tròn bán kính $20$ cm, bạn Minh cuộn lại (không chồng mép) thành mặt xung quanh của một hình nón. Tính bán kính đáy, chiều cao và thể tích hình nón (làm tròn kết quả đến hàng đơn vị của cm³). (Ôn lại [độ dài cung tròn](lesson:arc-length-sector-area).)

::hint
**Kiến thức:** bán kính tấm giấy là đường sinh; độ dài cung nửa đường tròn bằng chu vi đáy.

**Gợi ý các bước:**
1. Từ $2\pi r=\pi\cdot20$ tìm $r$.
2. Tính $h=\sqrt{l^2-r^2}$, rồi $V$.

::solution
Đường sinh $l=20$ cm. Cung nửa đường tròn dài $\pi\cdot20=20\pi$ (cm), bằng chu vi đáy, nên $2\pi r=20\pi$, suy ra $r=10$ cm. Do đó

$$h=\sqrt{20^2-10^2}=10\sqrt3\ \text{(cm)},\qquad V=\frac13\pi\cdot10^2\cdot10\sqrt3=\frac{1000\sqrt3}{3}\pi\approx1814\ \text{(cm}^3).$$

Vậy $r=10$ cm, $h=10\sqrt3\approx17{,}32$ cm và $V\approx1814$ cm³.

**Đáp số.** $r=10$ cm; $h=10\sqrt3$ cm; $V\approx1814$ cm³.
:::

## Kiểm tra mini

:::quiz
::mc
Diện tích xung quanh của hình trụ có bán kính đáy $2$ cm, chiều cao $5$ cm là
A. $10\pi$ cm².
B. $28\pi$ cm².
C. $20\pi$ cm².
D. $40\pi$ cm².
::key C
$2\pi\cdot2\cdot5=20\pi$. A quên hệ số $2$, B là diện tích toàn phần, D dùng đường kính thay cho bán kính.

::mc
Thể tích của hình trụ có bán kính đáy $3$ cm, chiều cao $4$ cm là
A. $36\pi$ cm³.
B. $12\pi$ cm³.
C. $24\pi$ cm³.
D. $48\pi$ cm³.
::key A
$\pi\cdot9\cdot4=36\pi$. B là thể tích hình nón, C là diện tích xung quanh, D đổi chỗ $r$ và $h$ ($\pi\cdot4^2\cdot3$).

::mc
Hình nón có bán kính đáy $3$ cm, chiều cao $4$ cm có đường sinh bằng
A. $7$ cm.
B. $\sqrt7$ cm.
C. $25$ cm.
D. $5$ cm.
::key D
$l=\sqrt{9+16}=5$. A cộng hai cạnh, B lấy hiệu dưới căn, C quên lấy căn.

::mc
Diện tích xung quanh của hình nón có bán kính đáy $3$ cm, đường sinh $5$ cm là
A. $12\pi$ cm².
B. $15\pi$ cm².
C. $30\pi$ cm².
D. $24\pi$ cm².
::key B
$\pi\cdot3\cdot5=15\pi$. A dùng chiều cao $4$ thay cho đường sinh, C dùng $2\pi rl$ như hình trụ, D là diện tích toàn phần.

::tf
Cho hình nón có bán kính đáy $6$ cm, chiều cao $8$ cm. Xét tính đúng sai của các mệnh đề sau:
a) Đường sinh của hình nón dài $10$ cm.
b) Diện tích xung quanh là $60\pi$ cm².
c) Thể tích là $288\pi$ cm³.
d) Nếu giữ nguyên bán kính và tăng chiều cao lên gấp đôi thì thể tích tăng gấp đôi.
::key Đ Đ S Đ
a) Đúng: $\sqrt{36+64}=10$. b) Đúng: $\pi\cdot6\cdot10$. c) Sai: $V=\dfrac13\pi\cdot36\cdot8=96\pi$. d) Đúng: $V$ tỉ lệ thuận với $h$.

::sa
Tính thể tích (đơn vị: cm³) của hình trụ có bán kính đáy $1$ cm, chiều cao $2$ cm (làm tròn kết quả đến hàng phần trăm).
::key 6,28
$V=\pi\cdot1\cdot2=2\pi\approx6{,}28$ cm³.

::sa
Một hình nón và một hình trụ có cùng bán kính đáy và cùng chiều cao. Thể tích hình trụ là $27$ dm³. Tính thể tích (đơn vị: dm³) của hình nón.
::key 9
$V_{\text{nón}}=\dfrac13V_{\text{trụ}}=9$ dm³.
:::
