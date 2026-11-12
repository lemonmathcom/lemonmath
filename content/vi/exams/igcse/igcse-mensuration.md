---
title: "Đo lường: cung, hình quạt, diện tích bề mặt và thể tích"
description: IGCSE Toán Extended: độ dài cung, diện tích hình quạt, diện tích bề mặt và thể tích lăng trụ, hình trụ, nón, chóp, cầu, và đổi đơn vị.
minutes: 50
---

:::goals
- Tính độ dài cung và diện tích hình quạt từ góc ở tâm.
- Tính diện tích bề mặt và thể tích hình lăng trụ, hình trụ, hình chóp, hình nón, hình cầu và các khối ghép từ chúng.
- Đổi đơn vị diện tích, thể tích, dung tích mà không lạc mất một thừa số $10$.
:::

Một bồn nước hình trụ cao $1{,}2$ m, bán kính $0{,}5$ m, được bơm đầy với tốc độ $12$ lít mỗi phút. Bao lâu thì đầy? Câu hỏi này không có gì khó, vậy mà nhiều em vẫn làm sai. Các em tính thể tích đúng, rồi trượt chân ở đúng bước cuối: đổi mét khối sang lít.

"Mensuration" chỉ có nghĩa là đo: đo độ dài, diện tích, thể tích. Phần này mang lại điểm đều đặn trong mọi đề IGCSE, và cách làm gần như lúc nào cũng vậy. Chọn đúng công thức, thay số cẩn thận, và để mắt tới đơn vị. Bài này đi lần lượt từng loại hình, rồi quay lại với chiếc bồn nước.

## Cung và hình quạt

Hình quạt có góc ở tâm $\theta$ chiếm phần $\dfrac{\theta}{360}$ của cả hình tròn. Vì thế độ dài cung và diện tích của nó cũng bằng chừng ấy phần của chu vi và diện tích hình tròn:

$$\text{độ dài cung}=\frac{\theta}{360}\times2\pi r,\qquad \text{diện tích hình quạt}=\frac{\theta}{360}\times\pi r^2.$$

Không có gì mới phải học thuộc ở đây. Chỉ cần nhớ "một phần của hình tròn", các em tự dựng lại được cả hai công thức trong phòng thi.

:::example Một hình quạt
Hình quạt có bán kính $9$ cm, góc ở tâm $80^\circ$. Tính độ dài cung và diện tích, làm tròn đến $3$ chữ số có nghĩa.

**Lời giải.** Hình quạt chiếm $\dfrac{80}{360}=\dfrac29$ hình tròn.

Độ dài cung $=\dfrac29\times2\pi\times9=4\pi\approx12{,}6$ cm.

Diện tích $=\dfrac29\times\pi\times9^2=18\pi\approx56{,}5\text{ cm}^2$.

Vậy cung dài khoảng $12{,}6$ cm và diện tích khoảng $56{,}5\text{ cm}^2$.
:::

## Lăng trụ và hình trụ

Hình lăng trụ có mặt cắt như nhau dọc suốt chiều dài, nên thể tích bằng diện tích mặt cắt nhân chiều dài. Hình trụ là lăng trụ có mặt cắt hình tròn:

$$V_{\text{lăng trụ}}=A\times l,\qquad V_{\text{trụ}}=\pi r^2h,\qquad \text{diện tích xung quanh hình trụ}=2\pi rh.$$

Mặt xung quanh hình trụ trải ra thành một hình chữ nhật: chiều rộng là chu vi đáy $2\pi r$, chiều cao là $h$. Công thức $2\pi rh$ đến từ đó. Muốn có diện tích toàn phần thì cộng thêm hai đáy tròn.

:::example Lăng trụ đáy hình thang
Một lăng trụ dài $12$ cm có mặt cắt là hình thang với hai đáy $4$ cm và $10$ cm, khoảng cách giữa hai đáy là $5$ cm. Tính thể tích.
A. $240\text{ cm}^3$
B. $420\text{ cm}^3$
C. $480\text{ cm}^3$
D. $840\text{ cm}^3$

**Lời giải.** Diện tích hình thang là $\dfrac{4+10}{2}\times5=35\text{ cm}^2$.

Thể tích bằng diện tích mặt cắt nhân chiều dài: $35\times12=420\text{ cm}^3$.

Vậy thể tích là $420\text{ cm}^3$, chọn **B**. Phương án D quên chia đôi tổng hai đáy.
:::

## Hình chóp, hình nón và hình cầu

Hình chóp hay hình nón chứa được đúng một phần ba lăng trụ hay hình trụ có cùng đáy và cùng chiều cao. Hình cầu có công thức riêng:

$$V_{\text{chóp}}=\tfrac13\times\text{diện tích đáy}\times h,\qquad V_{\text{nón}}=\tfrac13\pi r^2h,\qquad \text{diện tích xung quanh hình nón}=\pi rl,$$

$$V_{\text{cầu}}=\tfrac43\pi r^3,\qquad \text{diện tích mặt cầu}=4\pi r^2.$$

Ở đây $l$ là **đường sinh** của hình nón, khoảng cách từ đỉnh tới mép đáy, và $l^2=r^2+h^2$. Một số công thức này có trong bảng công thức in kèm đề, nhưng các em vẫn nên thuộc cả: không mất thời gian tra, lại nhận ra ngay khi đặt nhầm một giá trị.

:::diagram Hình nón với bán kính r, chiều cao h và đường sinh l
alt: Hình chiếu cạnh của một hình nón: đỉnh A nằm trên tâm O của đáy; đoạn AO là chiều cao 8, đoạn OC là bán kính 6, đoạn AC là đường sinh 10
point A 0,4 above
point O 0,0 below
point B -3,0 left
point C 3,0 right
segment A B
segment A C
label 2.5,2.4 "l = 10"
segment B C
segment A O
label -0.7,1.8 "h = 8"
segment O C "r = 6"
:::

:::example Một hình nón
Hình nón có bán kính $6$ cm, chiều cao $8$ cm. Tính đường sinh, diện tích xung quanh và thể tích.

**Lời giải.** Bán kính, chiều cao và đường sinh tạo thành một tam giác vuông, nên $l=\sqrt{6^2+8^2}=\sqrt{100}=10$ cm.

Diện tích xung quanh $=\pi rl=\pi\times6\times10=60\pi\approx188{,}5\text{ cm}^2$.

Thể tích $=\tfrac13\pi\times6^2\times8=96\pi\approx301{,}6\text{ cm}^3$.

Vậy $l=10$ cm, diện tích xung quanh khoảng $188{,}5\text{ cm}^2$ và thể tích khoảng $301{,}6\text{ cm}^3$.
:::

:::example Một khối ghép
Một khối gồm hình trụ bán kính $3$ cm, cao $10$ cm, phía trên đặt nửa hình cầu bán kính $3$ cm. Tính thể tích.

**Lời giải.** Hình trụ: $\pi\times3^2\times10=90\pi$.

Nửa hình cầu: một nửa khối cầu, $\tfrac12\times\tfrac43\pi\times3^3=18\pi$.

Tổng thể tích là $90\pi+18\pi=108\pi\approx339{,}3\text{ cm}^3$.

Vậy thể tích khoảng $339\text{ cm}^3$. Giữ kết quả theo $\pi$ đến dòng cuối giúp tránh sai số làm tròn.
:::

## Đơn vị

Đổi đơn vị diện tích và thể tích là chỗ nhiều điểm lặng lẽ rơi mất. Vì $1\text{ m}=100$ cm nên

$$1\text{ m}^2=100^2=10.000\text{ cm}^2,\qquad 1\text{ m}^3=100^3=1.000.000\text{ cm}^3.$$

Với dung tích, $1\text{ lít}=1000\text{ cm}^3$, nên $1\text{ m}^3=1000$ lít. Chẳng hạn $2{,}5\text{ m}^3=2500$ lít.

Giờ quay lại chiếc bồn nước. Thể tích của nó là $\pi\times0{,}5^2\times1{,}2=0{,}3\pi\approx0{,}942\text{ m}^3$, tức khoảng $942$ lít. Với $12$ lít mỗi phút, cần $942:12\approx78{,}5$ phút. Bước cuối mới là bước quyết định: thiếu nó, các em sẽ trả lời bằng mét khối trong khi đề hỏi về lít.

:::warning Những chỗ hay sai
- **Cho đường kính mà dùng như bán kính:** chia đôi đường kính trước khi thay số.
- **Chiều cao và đường sinh:** $\pi rl$ dùng đường sinh; $\tfrac13\pi r^2h$ dùng chiều cao thẳng đứng.
- **Mặt nửa hình cầu:** phần cong là $2\pi r^2$; chỉ cộng mặt phẳng tròn $\pi r^2$ khi mặt đó lộ ra ngoài.
- **Đơn vị:** bình phương thừa số với diện tích, lập phương với thể tích; $1\text{ m}^3=1000$ lít.
- **Làm tròn quá sớm:** giữ $\pi$ hoặc giá trị đầy đủ trên máy tính đến đáp số cuối, rồi ghi $3$ chữ số có nghĩa.
:::

:::terms
- arc length | độ dài cung
- sector | hình quạt
- cross-section | mặt cắt (thiết diện)
- prism / cylinder | hình lăng trụ / hình trụ
- pyramid / cone | hình chóp / hình nón
- slant height | đường sinh
- sphere / hemisphere | hình cầu / nửa hình cầu
- curved surface area | diện tích xung quanh
- capacity | dung tích
:::

## Bài tập tương tự

:::exercise
Một hình tròn có diện tích $78{,}5\text{ cm}^2$. Lấy $\pi=3{,}14$, tính bán kính và chu vi.

::hint
**Kiến thức:** $A=\pi r^2$, $C=2\pi r$.

::solution
Từ $\pi r^2=78{,}5$ ta có $r^2=\dfrac{78{,}5}{3{,}14}=25$, nên $r=5$ cm. Với $\pi=3{,}14$, phép chia ra số tròn, đó là dấu hiệu ta đang làm đúng.

Chu vi là $2\times3{,}14\times5=31{,}4$ cm.

Vậy bán kính là $5$ cm và chu vi là $31{,}4$ cm.

**Đáp số.** $r=5$ cm; $31{,}4$ cm.
:::

:::exercise
Tính độ dài cung của hình quạt bán kính $12$ cm, góc ở tâm $150^\circ$.

::hint
**Kiến thức:** $\dfrac{\theta}{360}\times2\pi r$.

::solution
Đề hỏi độ dài, nên ta lấy một phần của chu vi chứ không phải của diện tích. Hình quạt chiếm $\dfrac{150}{360}=\dfrac{5}{12}$ hình tròn có chu vi $2\pi\times12=24\pi$.

Độ dài cung là $\dfrac{5}{12}\times24\pi=10\pi\approx31{,}4$ cm.

Vậy cung dài khoảng $31{,}4$ cm.

**Đáp số.** $10\pi\approx31{,}4$ cm.
:::

:::exercise
Tính thể tích hình cầu bán kính $6$ cm.

::hint
**Kiến thức:** $V=\tfrac43\pi r^3$.

::solution
Thay $r=6$: $V=\tfrac43\pi\times6^3=\tfrac43\pi\times216$.

Lập phương bán kính trước, $6^3=216$, rồi mới nhân với $\tfrac43\pi$; viết nhầm thành $3r$ hay $r^2$ là lỗi rất hay gặp. Ta được $V=288\pi\approx905\text{ cm}^3$.

Vậy thể tích khoảng $905\text{ cm}^3$.

**Đáp số.** $288\pi\approx905\text{ cm}^3$.
:::

:::exercise
Tính diện tích toàn phần của hình trụ kín có bán kính $4$ cm, chiều cao $10$ cm.

::hint
**Kiến thức:** hai đáy tròn cộng diện tích xung quanh $2\pi rh$.

::solution
Hình trụ kín nên phải tính đủ cả hai đáy. Hai đáy tròn có diện tích $2\times\pi\times4^2=32\pi$, mặt xung quanh có diện tích $2\pi\times4\times10=80\pi$.

Tổng là $32\pi+80\pi=112\pi\approx352\text{ cm}^2$.

Vậy diện tích toàn phần khoảng $352\text{ cm}^2$.

**Đáp số.** $112\pi\approx352\text{ cm}^2$.
:::

:::exercise
Một hình chóp có đáy là hình vuông cạnh $6$ cm và chiều cao $10$ cm. Tính thể tích.

::hint
**Kiến thức:** $\tfrac13\times\text{diện tích đáy}\times h$.

::solution
Diện tích đáy là $6^2=36\text{ cm}^2$. Hình chóp chỉ chứa một phần ba khối hộp có cùng đáy và chiều cao, nên đừng quên thừa số $\tfrac13$.

Thể tích là $\tfrac13\times36\times10=120\text{ cm}^3$.

Vậy hình chóp có thể tích $120\text{ cm}^3$.

**Đáp số.** $120\text{ cm}^3$.
:::

## Bài tập vận dụng

:::exercise
Một quả cầu kim loại bán kính $3$ cm được nấu chảy và đúc lại thành hình trụ bán kính $2$ cm. Tính chiều cao hình trụ.

::hint
**Kiến thức:** thể tích không đổi.

::solution
Thể tích quả cầu là $\tfrac43\pi\times3^3=36\pi\text{ cm}^3$.

Hình trụ có cùng thể tích, nên $\pi\times2^2\times h=36\pi$, tức là $4h=36$ và $h=9$.

Vậy hình trụ cao $9$ cm.

**Đáp số.** $9$ cm.
:::

:::exercise
Một căn phòng dài $5$ m, rộng $4$ m, cao $3$ m. Cần sơn bốn bức tường (bỏ qua cửa ra vào và cửa sổ). Một lít sơn phủ được $10\text{ m}^2$, sơn bán theo hộp $1$ lít. Cần bao nhiêu hộp?

::hint
**Kiến thức:** hai cặp tường hình chữ nhật.

::solution
Hai bức tường mỗi bức $5\times3=15\text{ m}^2$, hai bức mỗi bức $4\times3=12\text{ m}^2$, nên diện tích là $2\times15+2\times12=54\text{ m}^2$.

Lượng sơn cần là $54:10=5{,}4$ lít. Năm hộp chưa đủ, nên ta làm tròn lên.

Vậy cần $6$ hộp.

**Đáp số.** $6$ hộp.
:::

:::exercise
Một bồn hình trụ có bán kính $0{,}5$ m, chiều cao $1{,}2$ m, được bơm với tốc độ $12$ lít mỗi phút. Bao lâu thì đầy?

::hint
**Kiến thức:** $1\text{ m}^3=1000$ lít.

::solution
Thể tích là $\pi\times0{,}5^2\times1{,}2=0{,}3\pi\approx0{,}942\text{ m}^3$, tức khoảng $942$ lít.

Mỗi phút bơm thêm $12$ lít, nên ta lấy dung tích chia cho tốc độ. Thời gian là $942:12\approx78{,}5$ phút.

Vậy cần khoảng $78{,}5$ phút, hơn một tiếng mười lăm phút một chút.

**Đáp số.** Khoảng $78{,}5$ phút.
:::

:::exercise Thử thách
Một hình quạt bán kính $10$ cm, góc ở tâm $216^\circ$ được cuộn lại thành hình nón (hai cạnh thẳng khít vào nhau). Tính thể tích hình nón.

::hint
**Kiến thức:** cung trở thành chu vi đáy; bán kính hình quạt trở thành đường sinh.

::solution
Độ dài cung là $\dfrac{216}{360}\times2\pi\times10=12\pi$. Cung này thành chu vi đáy, nên $2\pi r=12\pi$ và $r=6$ cm.

Đường sinh là $10$ cm, nên chiều cao là $h=\sqrt{10^2-6^2}=8$ cm.

Thể tích là $\tfrac13\pi\times6^2\times8=96\pi\approx301{,}6\text{ cm}^3$.

Vậy hình nón có thể tích khoảng $302\text{ cm}^3$.

**Đáp số.** $96\pi\approx302\text{ cm}^3$.
:::

:::quiz
::mc
Thể tích hình nón bán kính $r$, chiều cao $h$ là
A. $\pi r^2h$
B. $\tfrac13\pi r^2h$
C. $\pi rl$
D. $\tfrac43\pi r^3$
::key B
Một phần ba hình trụ.

::mc
$1\text{ m}^3$ bằng bao nhiêu lít?
A. $1000$
B. $100$
C. $10$
D. $1.000.000$
::key A
$1\text{ m}^3=1.000.000\text{ cm}^3$ và $1$ lít $=1000\text{ cm}^3$.

::mc
Diện tích mặt cầu bán kính $r$ là
A. $2\pi r^2$
B. $\tfrac43\pi r^3$
C. $4\pi r^2$
D. $\pi r^2$
::key C
Bốn lần diện tích hình tròn lớn.

::mc
Hình quạt có góc $90^\circ$, bán kính $4$ cm. Diện tích của nó là
A. $16\pi$
B. $8\pi$
C. $2\pi$
D. $4\pi$
::key D
Một phần tư của $16\pi$.

::tf
Một hình trụ có bán kính $2$ cm, chiều cao $5$ cm. Mỗi khẳng định sau đúng hay sai?
a) Thể tích là $20\pi\text{ cm}^3$.
b) Diện tích xung quanh là $20\pi\text{ cm}^2$.
c) Diện tích toàn phần là $28\pi\text{ cm}^2$.
d) Gấp đôi bán kính thì thể tích gấp đôi.
::key T T T F
Thể tích phụ thuộc $r^2$, nên được nhân với $4$.

::sa
Tính thể tích hình lập phương cạnh $3$ cm (đơn vị $\text{cm}^3$).
::key 27
$3^3=27$.

::sa
$2\text{ m}^3$ bằng bao nhiêu lít?
::key 2000
$2\times1000$.
:::
