---
title: Cung và dây của một đường tròn
description: Nhận biết dây, góc ở tâm, cung nhỏ và cung lớn; tính độ dài dây và số đo cung của một đường tròn.
minutes: 20
---

:::goals
- Nhận biết dây cung và biết đường kính là dây lớn nhất.
- Tính độ dài dây hoặc khoảng cách từ tâm đến dây bằng định lí Pythagore.
- Nhận biết góc ở tâm, cung nhỏ, cung lớn và tính số đo cung.
:::

Chiếc đồng hồ treo tường trong lớp có kim phút dài $15$ cm. Từ $7$ giờ đến $7$ giờ $20$ phút, đầu kim phút đi từ vị trí $A$ đến vị trí $B$ trên một cung tròn. Cung đó có số đo bao nhiêu độ? Đoạn thẳng $AB$ dài bao nhiêu?

## Dây của đường tròn

### Khám phá: dây nào dài nhất?

Trên đường tròn $(O; 5\text{ cm})$, nối hai điểm bất kì ta được một **dây**. Thử vài dây: dây cách tâm $4$ cm dài $6$ cm, dây cách tâm $3$ cm dài $8$ cm, dây đi qua tâm dài $10$ cm. Dây càng gần tâm càng dài, và dài nhất khi đi qua tâm.

:::definition Dây cung
Đoạn thẳng nối hai điểm phân biệt của một đường tròn gọi là **dây cung** (gọi tắt là **dây**). Dây đi qua tâm là đường kính.
:::

:::theorem Đường kính là dây lớn nhất
Trong các dây của một đường tròn, dây lớn nhất là đường kính.
:::

**Vì sao?** Với dây $AB$ không đi qua tâm, xét tam giác $OAB$ ta có $AB<OA+OB=2R$. Nếu $AB$ đi qua tâm thì $AB=2R$.

Tam giác $OAB$ cân tại $O$ (vì $OA=OB=R$). Do đó nếu $H$ là chân đường vuông góc kẻ từ $O$ đến $AB$ thì $H$ là trung điểm của $AB$, và theo định lí Pythagore:

$$AB=2HA=2\sqrt{R^2-OH^2}.$$

:::diagram Dây $AB$ và khoảng cách $OH$ từ tâm đến dây
alt: Đường tròn tâm O, dây AB nằm ngang phía dưới tâm, đoạn OH vuông góc với AB tại trung điểm H, các bán kính OA và OB
point O 0,0 above
point A -4,-3 below-left
point B 4,-3 below-right
point H 0,-3 below
circle O 5
segment A B
segment O A
segment O B
segment O H dashed
right O H B
mark A H 1
mark H B 1
:::

:::example Tính độ dài dây
Cho đường tròn $(O; 10\text{ cm})$ và dây $AB$ cách $O$ một khoảng $6$ cm. Tính $AB$.

**Lời giải.** Kẻ $OH\perp AB$ tại $H$, ta có $OH=6$ cm và $H$ là trung điểm của $AB$ (tam giác $OAB$ cân tại $O$). Xét tam giác $OHA$ vuông tại $H$, ta có

$$HA=\sqrt{OA^2-OH^2}=\sqrt{10^2-6^2}=8\ \text{(cm)}.$$

Vậy $AB=2HA=16$ cm.
:::

## Góc ở tâm và cung

Hai điểm $A$, $B$ trên đường tròn chia đường tròn thành hai **cung**, kí hiệu chung là $\overset{\frown}{AB}$. Để phân biệt, ta lấy thêm một điểm $M$ trên một cung và viết $\overset{\frown}{AMB}$.

:::definition Góc ở tâm, cung nhỏ, cung lớn
Góc có đỉnh trùng với tâm đường tròn gọi là **góc ở tâm**. Với góc ở tâm $\widehat{AOB}$ ($0^\circ<\widehat{AOB}<180^\circ$), cung nằm bên trong góc là **cung nhỏ**, cung còn lại là **cung lớn**; cung nhỏ $AB$ gọi là **cung bị chắn** bởi góc $\widehat{AOB}$. Nếu $AB$ là đường kính thì mỗi cung là một **nửa đường tròn**.
:::

:::diagram Góc ở tâm $\widehat{AOB}$ chắn cung nhỏ $AB$
alt: Đường tròn tâm O, hai bán kính OA và OB tạo thành góc ở tâm 100 độ, điểm M nằm trên cung lớn AB
point O 0,0 below
point A 3,0 right
point B -0.52,2.95 above
point M -1.93,-2.3 below-left
circle O 3
segment O A
segment O B
angle A O B "100°"
:::

## Số đo cung

:::definition Số đo cung
- Số đo của cung nhỏ bằng số đo góc ở tâm chắn cung đó.
- Số đo của cung lớn bằng $360^\circ$ trừ số đo cung nhỏ có chung hai đầu mút.
- Số đo của nửa đường tròn bằng $180^\circ$; của cả đường tròn bằng $360^\circ$.

Số đo của cung $AB$ kí hiệu là $\text{sđ}\,\overset{\frown}{AB}$. Trong một đường tròn, hai cung bằng nhau nếu chúng có cùng số đo.
:::

Nếu điểm $C$ nằm trên cung $AB$ thì $\text{sđ}\,\overset{\frown}{AB}=\text{sđ}\,\overset{\frown}{AC}+\text{sđ}\,\overset{\frown}{CB}$ (vì góc ở tâm $\widehat{AOB}$ được chia thành hai góc).

:::example Cung nhỏ và cung lớn
Trên hình trên, $\widehat{AOB}=100^\circ$. Tính số đo cung nhỏ $AB$ và cung lớn $AMB$.

**Lời giải.** Ta có $\text{sđ}\,\overset{\frown}{AB}=\widehat{AOB}=100^\circ$ (số đo cung nhỏ bằng góc ở tâm chắn cung). Suy ra

$$\text{sđ}\,\overset{\frown}{AMB}=360^\circ-100^\circ=260^\circ.$$

Vậy cung nhỏ $AB$ có số đo $100^\circ$, cung lớn $AMB$ có số đo $260^\circ$.
:::

Bây giờ ta trả lời câu hỏi về chiếc đồng hồ ở đầu bài.

:::example Kim phút của đồng hồ
Kim phút $OA$ dài $15$ cm. Từ $7$ giờ đến $7$ giờ $20$ phút, đầu kim đi từ $A$ đến $B$. Tính $\text{sđ}\,\overset{\frown}{AB}$ (cung đầu kim đi qua) và độ dài $AB$ (làm tròn kết quả đến hàng phần trăm).

**Lời giải.** Mỗi phút kim phút quay $\dfrac{360^\circ}{60}=6^\circ$, nên trong $20$ phút kim quay $20\cdot6^\circ=120^\circ$. Do đó $\widehat{AOB}=120^\circ$ và $\text{sđ}\,\overset{\frown}{AB}=120^\circ$.

Kẻ $OH\perp AB$. Tam giác $OAB$ cân tại $O$ nên $OH$ vừa là đường cao vừa là tia phân giác, suy ra $\widehat{AOH}=60^\circ$. Xét tam giác $OHA$ vuông tại $H$, ta có

$$HA=OA\cdot\sin60^\circ=15\cdot\frac{\sqrt3}{2},\qquad AB=2HA=15\sqrt3\approx25{,}98\ \text{(cm)}.$$

Vậy cung có số đo $120^\circ$ và $AB\approx25{,}98$ cm.
:::

Khi ba điểm chia đường tròn thành ba cung, ta dùng tính chất cộng số đo cung.

:::example Ba cung của một đường tròn
Ba điểm $A$, $B$, $C$ chia đường tròn $(O)$ thành ba cung $AB$, $BC$, $CA$ không chứa điểm còn lại, với $\text{sđ}\,\overset{\frown}{AB}=100^\circ$, $\text{sđ}\,\overset{\frown}{BC}=140^\circ$. Tính $\text{sđ}\,\overset{\frown}{CA}$ và số đo cung $ACB$.

**Lời giải.** Ba cung ghép lại thành cả đường tròn, nên

$$\text{sđ}\,\overset{\frown}{CA}=360^\circ-100^\circ-140^\circ=120^\circ,\qquad \text{sđ}\,\overset{\frown}{ACB}=\text{sđ}\,\overset{\frown}{BC}+\text{sđ}\,\overset{\frown}{CA}=260^\circ.$$

Vậy $\text{sđ}\,\overset{\frown}{CA}=120^\circ$ và $\text{sđ}\,\overset{\frown}{ACB}=260^\circ$.
:::

:::warning Những sai lầm thường gặp
- **Quên nhân đôi khi tính dây.** Sai: dây cách tâm $6$ cm của $(O; 10\text{ cm})$ dài $\sqrt{100-36}=8$ cm. Lí do sai: $8$ cm chỉ là nửa dây $HA$. Đúng: $AB=16$ cm.
- **Lấy góc ở tâm làm số đo cung lớn.** Sai: $\widehat{AOB}=70^\circ$ nên cung lớn $AB$ có số đo $70^\circ$. Lí do sai: góc ở tâm chỉ bằng cung nhỏ. Đúng: cung lớn có số đo $290^\circ$.
:::

## Thuật ngữ

:::terms
- dây cung | chord
- góc ở tâm | angle at the centre
- cung | arc
- cung nhỏ / cung lớn | minor arc / major arc
- cung bị chắn | intercepted arc
- nửa đường tròn | semicircle
- số đo cung | measure of an arc
:::

## Tóm tắt

- Dây nối hai điểm của đường tròn; đường kính là dây lớn nhất.
- $OH\perp AB$ thì $H$ là trung điểm của $AB$ và $AB=2\sqrt{R^2-OH^2}$.
- Số đo cung nhỏ bằng góc ở tâm chắn nó; cung lớn bằng $360^\circ$ trừ cung nhỏ; nửa đường tròn $180^\circ$.
- $C$ nằm trên cung $AB$ thì $\text{sđ}\,\overset{\frown}{AB}=\text{sđ}\,\overset{\frown}{AC}+\text{sđ}\,\overset{\frown}{CB}$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho góc ở tâm $\widehat{AOB}=65^\circ$. Tính số đo cung nhỏ $AB$ và cung lớn $AB$.

::hint
**Kiến thức:** cung nhỏ bằng góc ở tâm; cung lớn bằng $360^\circ$ trừ cung nhỏ.

**Gợi ý các bước:**
1. Đọc số đo cung nhỏ, rồi lấy $360^\circ$ trừ đi.

::solution
Ta có $\text{sđ}\,\overset{\frown}{AB}_{\text{nhỏ}}=65^\circ$, suy ra cung lớn có số đo $360^\circ-65^\circ=295^\circ$.

Vậy cung nhỏ $65^\circ$, cung lớn $295^\circ$.

**Đáp số.** Cung nhỏ $65^\circ$, cung lớn $295^\circ$.
:::

:::exercise
Cho đường tròn $(O; 5\text{ cm})$ và dây $AB$ cách tâm $3$ cm. Tính $AB$.

::hint
**Kiến thức:** $AB=2\sqrt{R^2-OH^2}$.

**Gợi ý các bước:**
1. Tính nửa dây $HA$, rồi nhân đôi.

::solution
Kẻ $OH\perp AB$, ta có $HA=\sqrt{5^2-3^2}=4$ (cm), suy ra $AB=2HA=8$ cm.

Vậy $AB=8$ cm.

**Đáp số.** $AB=8$ cm.
:::

:::exercise
Cho đường tròn $(O; 13\text{ cm})$ và dây $AB=24$ cm. Tính khoảng cách từ $O$ đến $AB$.

::hint
**Kiến thức:** chân đường vuông góc $H$ là trung điểm của $AB$.

**Gợi ý các bước:**
1. Tính $HA=12$ cm.
2. Dùng định lí Pythagore trong tam giác $OHA$.

::solution
Kẻ $OH\perp AB$, ta có $HA=\dfrac{24}{2}=12$ (cm). Xét tam giác $OHA$ vuông tại $H$, ta có $OH=\sqrt{13^2-12^2}=5$ (cm).

Vậy khoảng cách từ $O$ đến $AB$ là $5$ cm.

**Đáp số.** $5$ cm.
:::

:::exercise
Cho đường tròn $(O; R)$ và dây $AB=R$. Tính số đo cung nhỏ $AB$ và cung lớn $AB$.

::hint
**Kiến thức:** tam giác có ba cạnh bằng nhau là tam giác đều.

**Gợi ý các bước:**
1. Chỉ ra tam giác $OAB$ đều, suy ra $\widehat{AOB}$.

::solution
Ta có $OA=OB=AB=R$ nên tam giác $OAB$ đều, suy ra $\widehat{AOB}=60^\circ$. Do đó cung nhỏ có số đo $60^\circ$, cung lớn có số đo $300^\circ$.

Vậy cung nhỏ $60^\circ$, cung lớn $300^\circ$.

**Đáp số.** Cung nhỏ $60^\circ$, cung lớn $300^\circ$.
:::

:::exercise
Lúc $3$ giờ, Hà bắt đầu làm bài và làm xong lúc $3$ giờ $45$ phút. Trong thời gian đó, kim phút và kim giờ của đồng hồ quay được bao nhiêu độ?

::hint
**Kiến thức:** mỗi phút kim phút quay $6^\circ$; mỗi giờ kim giờ quay $30^\circ$.

**Gợi ý các bước:**
1. Nhân số phút với $6^\circ$.
2. Kim giờ quay $\dfrac{45}{60}$ giờ.

::solution
Kim phút quay $45\cdot6^\circ=270^\circ$. Kim giờ quay $\dfrac{45}{60}\cdot30^\circ=22{,}5^\circ$.

Vậy kim phút quay $270^\circ$, kim giờ quay $22{,}5^\circ$.

**Đáp số.** Kim phút quay $270^\circ$, kim giờ quay $22{,}5^\circ$.
:::

:::exercise
Cho đường tròn $(O; 8\text{ cm})$ và dây $AB$ với $\widehat{AOB}=120^\circ$. Tính $AB$ (làm tròn kết quả đến hàng phần trăm). (Ôn lại [tỉ số lượng giác của góc nhọn](lesson:acute-angle-trig-ratios).)

::hint
**Kiến thức:** đường cao $OH$ của tam giác cân $OAB$ cũng là tia phân giác.

**Gợi ý các bước:**
1. Suy ra $\widehat{AOH}=60^\circ$.
2. Tính $HA=OA\cdot\sin60^\circ$, rồi nhân đôi.

::solution
Kẻ $OH\perp AB$. Tam giác $OAB$ cân tại $O$ nên $\widehat{AOH}=60^\circ$. Xét tam giác $OHA$ vuông tại $H$, ta có $HA=8\sin60^\circ=4\sqrt3$ (cm), suy ra $AB=8\sqrt3\approx13{,}86$ cm.

Vậy $AB\approx13{,}86$ cm.

**Đáp số.** $AB=8\sqrt3\approx13{,}86$ cm.
:::

:::exercise
**(1,5 điểm)** Cho đường tròn $(O; 10\text{ cm})$ và dây $AB=16$ cm. Gọi $H$ là trung điểm của $AB$.

a) Chứng minh rằng $OH\perp AB$ và tính $OH$.

b) Tính số đo góc $\widehat{AOB}$ (làm tròn kết quả đến độ).

c) Tính số đo cung lớn $AB$.

::hint
**Kiến thức:** trong tam giác cân, đường trung tuyến cũng là đường cao, đường phân giác.

**Gợi ý các bước:**
1. Dùng tam giác $OAB$ cân, rồi định lí Pythagore.
2. Tính $\tan\widehat{AOH}$, suy ra $\widehat{AOB}=2\widehat{AOH}$.
3. Lấy $360^\circ$ trừ số đo cung nhỏ.

::solution
a) Tam giác $OAB$ cân tại $O$ có $OH$ là trung tuyến nên cũng là đường cao, do đó $OH\perp AB$. Ta có $HA=8$ cm, suy ra $OH=\sqrt{10^2-8^2}=6$ (cm).

b) Xét tam giác $OHA$ vuông tại $H$, ta có $\tan\widehat{AOH}=\dfrac{8}{6}$, suy ra $\widehat{AOH}\approx53{,}13^\circ$. Do $OH$ là tia phân giác nên $\widehat{AOB}\approx106{,}26^\circ\approx106^\circ$.

c) Số đo cung lớn $AB$ là $360^\circ-106{,}26^\circ\approx254^\circ$.

Vậy $OH=6$ cm, $\widehat{AOB}\approx106^\circ$, cung lớn $AB$ khoảng $254^\circ$.

**Đáp số.** a) $OH=6$ cm; b) $\widehat{AOB}\approx106^\circ$; c) khoảng $254^\circ$.
:::

:::exercise Thử thách
Cho đường tròn $(O; 10\text{ cm})$ và hai dây song song $AB=12$ cm, $CD=16$ cm. Tính khoảng cách giữa hai dây.

::hint
**Kiến thức:** khoảng cách từ tâm đến dây là $\sqrt{R^2-\left(\frac{\text{dây}}{2}\right)^2}$.

**Gợi ý các bước:**
1. Tính khoảng cách từ $O$ đến mỗi dây.
2. Xét hai trường hợp: hai dây cùng phía hoặc khác phía đối với $O$.

::solution
Khoảng cách từ $O$ đến $AB$ là $\sqrt{10^2-6^2}=8$ (cm), đến $CD$ là $\sqrt{10^2-8^2}=6$ (cm). Hai dây song song nên các đường vuông góc từ $O$ cùng nằm trên một đường thẳng.

Nếu hai dây nằm cùng phía đối với $O$, khoảng cách là $8-6=2$ (cm); nếu khác phía, khoảng cách là $8+6=14$ (cm).

Vậy khoảng cách giữa hai dây là $2$ cm hoặc $14$ cm.

**Đáp số.** $2$ cm hoặc $14$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Góc ở tâm $\widehat{AOB}=50^\circ$. Số đo cung lớn $AB$ là
A. $310^\circ$.
B. $130^\circ$.
C. $50^\circ$.
D. $260^\circ$.
::key A
Cung lớn có số đo $360^\circ-50^\circ=310^\circ$. B lấy $180^\circ-50^\circ$, C là số đo cung nhỏ, D lấy $360^\circ-2\cdot50^\circ$.

::mc
Dây dài nhất của đường tròn $(O; 6\text{ cm})$ dài
A. $6$ cm.
B. $3$ cm.
C. $36$ cm.
D. $12$ cm.
::key D
Dây lớn nhất là đường kính, dài $2R=12$ cm. A nhầm với bán kính, C lấy $R^2$.

::mc
Dây $AB$ của đường tròn $(O; 10\text{ cm})$ cách tâm $8$ cm. Độ dài $AB$ là
A. $4$ cm.
B. $6$ cm.
C. $12$ cm.
D. $4\sqrt{41}$ cm.
::key C
$AB=2\sqrt{10^2-8^2}=12$ cm. B quên nhân đôi, A lấy $2(10-8)$, D cộng thay vì trừ dưới dấu căn.

::mc
Trong $25$ phút, kim phút của đồng hồ quay được một góc
A. $125^\circ$.
B. $150^\circ$.
C. $25^\circ$.
D. $300^\circ$.
::key B
Mỗi phút kim phút quay $6^\circ$, nên $25\cdot6^\circ=150^\circ$. A nhầm mỗi phút $5^\circ$.

::tf
Cho đường tròn $(O; 5\text{ cm})$ và dây $AB=8$ cm, $H$ là trung điểm của $AB$. Xét tính đúng sai của các mệnh đề sau:
a) $OH\perp AB$.
b) $OH=3$ cm.
c) Cung nhỏ $AB$ có số đo $90^\circ$.
d) Đường tròn có một dây dài $11$ cm.
::key Đ Đ S S
a) Đúng: tam giác $OAB$ cân tại $O$. b) Đúng: $OH=\sqrt{25-16}=3$. c) Sai: $AB^2=64\neq OA^2+OB^2=50$, nên $\widehat{AOB}\neq90^\circ$. d) Sai: mọi dây dài không quá $2R=10$ cm.

::sa
Dây $AB=30$ cm của đường tròn $(O; 17\text{ cm})$ cách tâm $O$ bao nhiêu xăng-ti-mét?
::key 8
$OH=\sqrt{17^2-15^2}=\sqrt{64}=8$ (cm).

::sa
Ba điểm chia một đường tròn thành ba cung có số đo tỉ lệ với $2$, $3$, $4$. Tính số đo (đơn vị: độ) của cung nhỏ nhất.
::key 80
Tổng ba cung là $360^\circ$, mỗi phần bằng $\dfrac{360^\circ}{9}=40^\circ$, nên cung nhỏ nhất là $2\cdot40^\circ=80^\circ$.
:::
