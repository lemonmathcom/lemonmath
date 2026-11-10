---
title: Vị trí tương đối của đường thẳng và đường tròn
description: Xác định vị trí của đường thẳng và đường tròn bằng khoảng cách từ tâm, nhận biết tiếp tuyến và dùng tính chất hai tiếp tuyến cắt nhau.
minutes: 20
---

:::goals
- Xác định được vị trí tương đối của đường thẳng và đường tròn bằng cách so sánh $d$ với $R$.
- Nhận biết và chứng minh được một đường thẳng là tiếp tuyến của đường tròn.
- Vận dụng tính chất hai tiếp tuyến cắt nhau.
:::

Một trạm phát sóng điện thoại phủ sóng trong bán kính $5$ km. Một đường quốc lộ thẳng cách trạm $3$ km, một đường khác cách trạm $7$ km. Trên mỗi đường, đoạn có sóng dài bao nhiêu?

## Ba vị trí của đường thẳng và đường tròn

### Khám phá: dịch đường thẳng ra xa tâm

Gọi $d=OH$ là khoảng cách từ $O$ đến đường thẳng $a$ ($OH\perp a$). Dịch dần $a$ ra xa tâm: lúc đầu có hai giao điểm, chúng nhập làm một khi $d=R$, rồi biến mất khi $d>R$.

:::theorem Vị trí tương đối của đường thẳng $a$ và đường tròn $(O; R)$
- $d<R$: $a$ và $(O)$ cắt nhau (có $2$ điểm chung);
- $d=R$: $a$ và $(O)$ tiếp xúc nhau (có $1$ điểm chung);
- $d>R$: $a$ và $(O)$ không giao nhau.
:::

Khi $a$ tiếp xúc với $(O)$, $a$ gọi là **tiếp tuyến**, điểm chung là **tiếp điểm**. Khi cắt nhau, hai giao điểm tạo thành một dây dài $2\sqrt{R^2-d^2}$ (bài [Cung và dây](lesson:arcs-and-chords)).

:::diagram Đường thẳng $a$ cắt, $b$ tiếp xúc, $c$ không giao với $(O)$
alt: Đường tròn tâm O; đường thẳng a cắt, b tiếp xúc tại H, c nằm ngoài đường tròn
point O 0,0 above
point P1 -3.2,1.2 left "a"
point P2 3.2,1.2 ""
point Q1 -3.2,-2.5 left "b"
point Q2 3.2,-2.5 ""
point H 0,-2.5 below
point S1 3.6,-2.6 ""
point S2 3.6,2.6 above "c"
circle O 2.5
segment P1 P2
segment Q1 Q2
segment S1 S2
segment O H dashed
:::

:::example Trả lời câu hỏi ở đầu bài
Giải bài toán ở đầu bài.

**Lời giải.** Đường thứ nhất có $d=3<5$ nên cắt biên vùng phủ sóng theo một dây dài

$$2\sqrt{R^2-d^2}=2\sqrt{5^2-3^2}=2\cdot4=8\ \text{(km)}.$$

Đường thứ hai có $d=7>5$ nên không giao vùng phủ sóng.

Vậy đường thứ nhất có $8$ km có sóng, đường thứ hai không có sóng.
:::

## Tiếp tuyến của đường tròn

:::theorem Tính chất và dấu hiệu nhận biết tiếp tuyến
- Nếu đường thẳng $a$ là tiếp tuyến của $(O)$ tại $A$ thì $a\perp OA$.
- Ngược lại, nếu đường thẳng $a$ đi qua điểm $A$ thuộc $(O)$ và $a\perp OA$ thì $a$ là tiếp tuyến của $(O)$ tại $A$.
:::

Thật vậy, $a\perp OA$ tại $A$ khi và chỉ khi khoảng cách từ $O$ đến $a$ là $d=OA=R$.

:::example Chứng minh một đường thẳng là tiếp tuyến
Cho tam giác $ABC$ vuông tại $A$. Chứng minh rằng $AC$ là tiếp tuyến của đường tròn $(B; BA)$.

**Lời giải.** Ta có $A$ thuộc đường tròn $(B; BA)$ và $AC\perp BA$ tại $A$ (vì $\widehat{BAC}=90^\circ$).

Vậy $AC$ là tiếp tuyến của $(B; BA)$ tại $A$ (dấu hiệu nhận biết tiếp tuyến).
:::

Nhờ góc vuông ở tiếp điểm, ta tính độ dài tiếp tuyến bằng định lí Pythagore.

:::example Độ dài tiếp tuyến
Từ điểm $M$ cách tâm $O$ của đường tròn $(O; 6\text{ cm})$ là $10$ cm, kẻ tiếp tuyến $MA$ ($A$ là tiếp điểm). Tính $MA$.

**Lời giải.** Ta có $OA\perp MA$ (tính chất tiếp tuyến). Xét tam giác $OAM$ vuông tại $A$, theo định lí Pythagore ta có

$$MA=\sqrt{OM^2-OA^2}=\sqrt{10^2-6^2}=8\ \text{(cm)}.$$

Vậy $MA=8$ cm.
:::

## Hai tiếp tuyến cắt nhau

:::theorem Tính chất của hai tiếp tuyến cắt nhau
Nếu hai tiếp tuyến của $(O)$ tại $A$ và $B$ cắt nhau tại $M$ thì:
- $MA=MB$;
- $MO$ là tia phân giác của góc $\widehat{AMB}$;
- $OM$ là tia phân giác của góc $\widehat{AOB}$.
:::

**Vì sao?** Hai tam giác $OAM$ và $OBM$ vuông tại $A$, $B$, có chung cạnh huyền $OM$ và $OA=OB$, nên bằng nhau (cạnh huyền – cạnh góc vuông). Suy ra $MA=MB$, $\widehat{AMO}=\widehat{BMO}$ và $\widehat{AOM}=\widehat{BOM}$.

:::diagram Hai tiếp tuyến $MA$, $MB$ của đường tròn $(O)$
alt: Từ điểm M ngoài đường tròn tâm O kẻ hai tiếp tuyến MA, MB vuông góc với bán kính OA, OB
point O 0,0 left
point M 4,0 right
point A 1,1.732 above
point B 1,-1.732 below
circle O 2
segment M A
segment M B
segment O A
segment O B
segment O M dashed
right O A M
right O B M
mark M A 1
mark M B 1
:::

:::example Hai tiếp tuyến từ một điểm
Từ điểm $M$ với $OM=10$ cm, kẻ hai tiếp tuyến $MA$, $MB$ của đường tròn $(O; 5\text{ cm})$. Tính $MA$, góc $\widehat{AMB}$ và $AB$.

**Lời giải.** Xét tam giác $OAM$ vuông tại $A$, ta có

$$MA=\sqrt{10^2-5^2}=5\sqrt3\approx8{,}66\ \text{(cm)},\qquad \sin\widehat{AMO}=\frac{OA}{OM}=\frac12\Rightarrow\widehat{AMO}=30^\circ.$$

Vì $MO$ là tia phân giác của $\widehat{AMB}$ nên $\widehat{AMB}=60^\circ$. Tam giác $MAB$ cân tại $M$ có góc $60^\circ$ nên là tam giác đều, suy ra $AB=MA$.

Vậy $MA=AB=5\sqrt3\approx8{,}66$ cm, $\widehat{AMB}=60^\circ$.
:::

:::warning Những sai lầm thường gặp
- **Đo $d$ đến một điểm bất kì của đường thẳng.** Sai: "$M\in a$, $OM=7>5$ nên $a$ không giao $(O; 5)$". Lí do sai: $d=OH$ với $OH\perp a$, ngắn hơn $OM$. Đúng: tính $OH$.
- **Kết luận tiếp tuyến khi chưa đủ điều kiện.** Sai: "$a\perp OA$ nên $a$ là tiếp tuyến". Lí do sai: còn cần $A$ thuộc đường tròn. Đúng: kiểm tra cả hai điều kiện.
:::

## Thuật ngữ

:::terms
- cắt nhau | intersect
- tiếp xúc | touch (be tangent)
- không giao nhau | do not meet
- tiếp tuyến | tangent
- tiếp điểm | point of contact
- tia phân giác | angle bisector
:::

## Tóm tắt

- $d<R$: cắt nhau (dây dài $2\sqrt{R^2-d^2}$); $d=R$: tiếp xúc; $d>R$: không giao nhau.
- Tiếp tuyến vuông góc với bán kính tại tiếp điểm, và ngược lại.
- Độ dài tiếp tuyến: $MA=\sqrt{OM^2-R^2}$.
- Hai tiếp tuyến từ $M$: $MA=MB$, $MO$ và $OM$ là các tia phân giác.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Ba đường thẳng cách tâm của đường tròn $(O; 6\text{ cm})$ lần lượt $4$ cm, $6$ cm, $7{,}5$ cm. Xác định vị trí của mỗi đường thẳng đối với đường tròn.

::hint
**Kiến thức:** so sánh $d$ với $R$.

**Gợi ý các bước:**
1. So sánh từng khoảng cách với $6$.

::solution
Ta có $4<6$, $6=6$, $7{,}5>6$.

Vậy đường thứ nhất cắt, đường thứ hai tiếp xúc, đường thứ ba không giao với đường tròn.

**Đáp số.** Đường thứ nhất cắt, đường thứ hai tiếp xúc, đường thứ ba không giao với đường tròn.
:::

:::exercise
Đường thẳng $a$ cách tâm của đường tròn $(O; 10\text{ cm})$ một khoảng $8$ cm. Chứng minh rằng $a$ cắt đường tròn tại hai điểm $A$, $B$ và tính $AB$.

::hint
**Kiến thức:** $d<R$ thì cắt nhau; dây dài $2\sqrt{R^2-d^2}$.

**Gợi ý các bước:**
1. So sánh $8$ với $10$, rồi tính dây.

::solution
Ta có $d=8<10=R$ nên $a$ cắt đường tròn tại hai điểm. Khi đó $AB=2\sqrt{10^2-8^2}=2\cdot6=12$ (cm).

Vậy $AB=12$ cm.

**Đáp số.** $AB=12$ cm.
:::

:::exercise
Từ điểm $M$ cách tâm $O$ là $15$ cm, kẻ tiếp tuyến $MA$ của đường tròn $(O; 9\text{ cm})$. Tính $MA$.

::hint
**Kiến thức:** $OA\perp MA$, tam giác $OAM$ vuông tại $A$.

**Gợi ý các bước:**
1. Dùng định lí Pythagore với cạnh huyền $OM$.

::solution
Xét tam giác $OAM$ vuông tại $A$, ta có $MA=\sqrt{15^2-9^2}=\sqrt{144}=12$ (cm).

Vậy $MA=12$ cm.

**Đáp số.** $MA=12$ cm.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$, có $AB=3$ cm, $AC=4$ cm. Chứng minh rằng $AB$ là tiếp tuyến của đường tròn $(C; CA)$ và điểm $B$ nằm ngoài đường tròn này.

::hint
**Kiến thức:** dấu hiệu nhận biết tiếp tuyến.

**Gợi ý các bước:**
1. Chỉ ra $A\in(C; CA)$ và $AB\perp CA$.
2. So sánh $CB$ với $4$.

::solution
Ta có $A\in(C; CA)$ và $AB\perp CA$ tại $A$, nên $AB$ là tiếp tuyến. Theo định lí Pythagore, $CB=\sqrt{3^2+4^2}=5>4$, nên $B$ nằm ngoài đường tròn.

Vậy $AB$ là tiếp tuyến và $B$ nằm ngoài $(C; CA)$.

**Đáp số.** $AB$ là tiếp tuyến của $(C; CA)$; $B$ nằm ngoài đường tròn vì $CB=5$ cm $>4$ cm.
:::

:::exercise
Từ đỉnh $M$ của một tháp cao $80$ m, ta nhìn ra biển đến đường chân trời tại $A$, với $MA$ tiếp xúc với Trái Đất. Coi mặt cắt Trái Đất là đường tròn tâm $O$ bán kính $6400$ km. Tính $MA$ (làm tròn kết quả đến hàng đơn vị của ki-lô-mét).

::hint
**Kiến thức:** $OA\perp MA$; đổi $80$ m $=0{,}08$ km.

**Gợi ý các bước:**
1. Tính $OM=6400+0{,}08$ (km).
2. Dùng định lí Pythagore trong tam giác $OAM$ vuông tại $A$.

::solution
Ta có $OM=6400{,}08$ km, tam giác $OAM$ vuông tại $A$, nên

$$MA=\sqrt{6400{,}08^2-6400^2}\approx\sqrt{1024}=32\ \text{(km)}.$$

Vậy từ đỉnh tháp có thể nhìn xa khoảng $32$ km.

**Đáp số.** Khoảng $32$ km.
:::

:::exercise
Từ điểm $M$ với $OM=8$ cm, kẻ hai tiếp tuyến $MA$, $MB$ của đường tròn $(O; 4\text{ cm})$. Tính góc $\widehat{AMB}$ và số đo cung nhỏ $AB$. (Ôn lại [cung và dây](lesson:arcs-and-chords).)

::hint
**Kiến thức:** $\sin\widehat{AMO}=\dfrac{OA}{OM}$; tổng các góc của tứ giác là $360^\circ$.

**Gợi ý các bước:**
1. Tính $\widehat{AMO}$, suy ra $\widehat{AMB}$, rồi $\widehat{AOB}$.

::solution
Xét tam giác $OAM$ vuông tại $A$, ta có $\sin\widehat{AMO}=\dfrac48=\dfrac12$, suy ra $\widehat{AMO}=30^\circ$, $\widehat{AMB}=60^\circ$. Tứ giác $OAMB$ có hai góc vuông tại $A$, $B$, nên $\widehat{AOB}=360^\circ-90^\circ-90^\circ-60^\circ=120^\circ$.

Vậy $\widehat{AMB}=60^\circ$ và cung nhỏ $AB$ có số đo $120^\circ$.

**Đáp số.** $\widehat{AMB}=60^\circ$; cung nhỏ $AB$ có số đo $120^\circ$.
:::

:::exercise
**(2,0 điểm)** Từ điểm $M$ nằm ngoài đường tròn $(O; 3\text{ cm})$ với $OM=5$ cm, kẻ hai tiếp tuyến $MA$, $MB$ ($A$, $B$ là các tiếp điểm). Gọi $H$ là giao điểm của $OM$ và $AB$.

a) Chứng minh rằng bốn điểm $M$, $A$, $O$, $B$ cùng nằm trên một đường tròn.

b) Chứng minh rằng $OM\perp AB$ tại $H$.

c) Tính $MA$ và $AB$.

::hint
**Kiến thức:** trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền; tính chất đường trung trực.

**Gợi ý các bước:**
1. Gọi $I$ là trung điểm của $OM$, chứng minh $IA=IB=IO=IM$.
2. Chỉ ra $OM$ là trung trực của $AB$.
3. Tính $AH$ qua diện tích tam giác $OAM$.

::solution
a) Các tam giác $OAM$, $OBM$ vuông tại $A$, $B$ (tính chất tiếp tuyến). Gọi $I$ là trung điểm của $OM$, ta có $IA=IB=IO=IM=\dfrac{OM}{2}$ (trung tuyến ứng với cạnh huyền). Do đó $M$, $A$, $O$, $B$ cùng thuộc đường tròn tâm $I$.

b) Ta có $MA=MB$ (tính chất hai tiếp tuyến cắt nhau) và $OA=OB$, nên $OM$ là trung trực của $AB$. Suy ra $OM\perp AB$ tại trung điểm $H$ của $AB$.

c) Ta có $MA=\sqrt{5^2-3^2}=4$ (cm). Diện tích tam giác $OAM$ bằng $\dfrac12\cdot OA\cdot MA=\dfrac12\cdot OM\cdot AH$, suy ra $AH=\dfrac{3\cdot4}{5}=2{,}4$ (cm). Do đó $AB=2AH=4{,}8$ cm.

Vậy $MA=4$ cm và $AB=4{,}8$ cm.

**Đáp số.** a), b) Xem chứng minh; c) $MA=4$ cm, $AB=4{,}8$ cm.
:::

:::exercise Thử thách
Từ điểm $M$ ngoài đường tròn $(O)$, kẻ hai tiếp tuyến $MA$, $MB$ với $MA=10$ cm. Tiếp tuyến tại điểm $C$ trên cung nhỏ $AB$ cắt $MA$, $MB$ lần lượt tại $D$, $E$. Tính chu vi tam giác $MDE$.

::hint
**Kiến thức:** tính chất hai tiếp tuyến cắt nhau tại $D$ và tại $E$.

**Gợi ý các bước:**
1. Chỉ ra $DC=DA$, $EC=EB$, rồi viết chu vi theo $MA$, $MB$.

::solution
Ta có $DC=DA$ (hai tiếp tuyến từ $D$) và $EC=EB$ (hai tiếp tuyến từ $E$). Do đó

$$MD+DE+EM=MD+DC+CE+EM=(MD+DA)+(EB+EM)=MA+MB=20\ \text{(cm)}.$$

Vậy chu vi tam giác $MDE$ bằng $20$ cm.

**Đáp số.** $20$ cm.
:::

## Kiểm tra mini

:::quiz
::mc
Cho đường tròn $(O; 7\text{ cm})$ và đường thẳng $a$ cách $O$ một khoảng $7$ cm. Khẳng định nào sau đây đúng?
A. $a$ cắt $(O)$ tại hai điểm.
B. $a$ tiếp xúc với $(O)$.
C. $a$ không giao với $(O)$.
D. $a$ đi qua $O$.
::key B
$d=R=7$ cm nên $a$ tiếp xúc với $(O)$.

::mc
Đường thẳng cách tâm của đường tròn $(O; 5\text{ cm})$ một khoảng $3$ cm cắt đường tròn theo một dây dài
A. $8$ cm.
B. $4$ cm.
C. $2\sqrt{34}$ cm.
D. $2$ cm.
::key A
$2\sqrt{25-9}=8$ cm. B quên nhân đôi, C cộng dưới dấu căn.

::mc
Từ điểm $M$ với $OM=13$ cm, kẻ tiếp tuyến $MA$ của đường tròn $(O; 5\text{ cm})$. Độ dài $MA$ là
A. $\sqrt{194}$ cm.
B. $18$ cm.
C. $8$ cm.
D. $12$ cm.
::key D
$MA=\sqrt{169-25}=12$ cm. A coi $OM$ là cạnh góc vuông, C lấy hiệu $13-5$, B lấy tổng $13+5$.

::mc
Hai tiếp tuyến tại $A$, $B$ của đường tròn $(O)$ cắt nhau tại $M$ và $\widehat{AMB}=50^\circ$. Số đo góc $\widehat{AOB}$ là
A. $50^\circ$.
B. $40^\circ$.
C. $130^\circ$.
D. $25^\circ$.
::key C
Tứ giác $OAMB$ có hai góc vuông nên $\widehat{AOB}=360^\circ-180^\circ-50^\circ=130^\circ$. D là $\widehat{AMO}$.

::tf
Từ điểm $M$ với $OM=12$ cm, kẻ hai tiếp tuyến $MA$, $MB$ của đường tròn $(O; 6\text{ cm})$. Xét tính đúng sai của các mệnh đề sau:
a) $MA=6\sqrt3$ cm.
b) $\widehat{AMO}=30^\circ$.
c) $\widehat{AMB}=30^\circ$.
d) $MA=MB$.
::key Đ Đ S Đ
a) Đúng: $MA=\sqrt{108}=6\sqrt3$. b) Đúng: $\sin\widehat{AMO}=\dfrac12$. c) Sai: $\widehat{AMB}=60^\circ$. d) Đúng: tính chất hai tiếp tuyến cắt nhau.

::sa
Một đường thẳng cách tâm $O$ một khoảng $4$ cm và cắt đường tròn $(O)$ theo một dây dài $6$ cm. Tính bán kính (đơn vị: cm) của đường tròn.
::key 5
Nửa dây dài $3$ cm, nên $R=\sqrt{4^2+3^2}=5$ cm.

::sa
Hai tiếp tuyến $MA$, $MB$ của đường tròn $(O)$ có $MA=7{,}5$ cm. Tiếp tuyến tại một điểm $C$ trên cung nhỏ $AB$ cắt $MA$, $MB$ tại $D$, $E$. Tính chu vi (đơn vị: cm) của tam giác $MDE$.
::key 15
$DC=DA$ và $EC=EB$, nên chu vi bằng $MA+MB=15$ cm.
:::
