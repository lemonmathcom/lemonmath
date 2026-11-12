---
title: Chia số có bốn chữ số cho số có một chữ số
description: Em học chia lần lượt từ trái sang phải số có bốn chữ số cho số có một chữ số, chia hết và chia có dư, rồi thử lại bằng phép nhân.
minutes: 20
---

:::goals
- Chia số có bốn chữ số cho số có một chữ số, ví dụ $1\,248:4$.
- Chia đúng khi gặp chữ số $0$ ở thương, ví dụ $6\,084:6$.
- Thực hiện phép chia có dư và nhận biết số dư luôn bé hơn số chia.
- Thử lại phép chia bằng phép nhân và giải bài toán có lời văn bằng phép chia.
:::

Một trường tiểu học (số liệu giả định) mua $1\,248$ quyển vở, chia đều cho $4$ lớp. Hỏi mỗi lớp nhận được bao nhiêu quyển vở?

Số $1\,248$ có bốn chữ số, nhưng số chia chỉ có một chữ số. Em chia từng hàng, từ hàng lớn nhất sang hàng bé hơn, và phần còn lại của hàng này được đổi thành đơn vị của hàng sau. Bài này dạy em cách làm đó.

## Cùng khám phá

Em tách $1\,248$ thành $12$ trăm, $4$ chục và $8$ đơn vị. Ta chia từng phần cho $4$:

- $12$ trăm : $4=3$ trăm.
- $4$ chục : $4=1$ chục.
- $8$ đơn vị : $4=2$ đơn vị.

Gộp lại: $3$ trăm $+$ $1$ chục $+$ $2$ đơn vị $=312$. Vậy $1\,248:4=312$.

Vì sao lại lấy $12$ trăm? Vì ở hàng nghìn chỉ có $1$ nghìn, mà $1$ không chia được cho $4$. Ta đổi $1$ nghìn thành $10$ trăm, cộng với $2$ trăm sẵn có, được $12$ trăm. Em viết gọn như sau:

- $12:4=3$, viết $3$. Ta có $3\times4=12$ và $12-12=0$.
- Hạ $4$, ta có $4:4=1$, viết $1$. Ta có $1\times4=4$ và $4-4=0$.
- Hạ $8$, ta có $8:4=2$, viết $2$.

Mỗi quyển lớp nhận được là $312$ quyển. Em thử lại bằng phép nhân: $312\times4=1\,248$. Đúng.

## Chia số có bốn chữ số cho số có một chữ số

:::theorem Cách chia số có bốn chữ số cho số có một chữ số
Muốn chia số có bốn chữ số cho số có một chữ số, ta chia từ trái sang phải, mỗi lần chia một hàng:
1. Lấy chữ số đầu tiên chia cho số chia. Nếu chữ số đó bé hơn số chia thì lấy hai chữ số đầu.
2. Viết thương, nhân thương với số chia rồi trừ để tìm số dư.
3. Hạ chữ số tiếp theo xuống bên cạnh số dư, rồi chia tiếp.
4. Lặp lại cho đến hàng đơn vị. Số dư cuối cùng luôn bé hơn số chia.
:::

Nếu số dư cuối cùng bằng $0$ thì ta có phép chia hết. Nếu số dư khác $0$ thì ta có phép chia có dư, và ta viết "dư" sau thương. Khi thử lại, ta nhân thương với số chia rồi cộng số dư: kết quả phải bằng số bị chia.

Ta bắt đầu với phép chia mà chữ số nào cũng chia hết.

:::example Tính $4\,862:2$
**Lời giải.** Mỗi chữ số của số bị chia đều chia hết cho $2$:

$4:2=2$; $8:2=4$; $6:2=3$; $2:2=1$.

Vậy $4\,862:2=2\,431$.
:::

Bây giờ chữ số đầu bé hơn số chia, nên ta lấy hai chữ số đầu.

:::example Tính $3\,645:5$
**Lời giải.** Vì $3<5$ nên ta lấy $36$ để chia cho $5$:

$36:5=7$ (dư $1$), vì $7\times5=35$. Hạ $4$ được $14$; $14:5=2$ (dư $4$), vì $2\times5=10$. Hạ $5$ được $45$; $45:5=9$ (dư $0$).

Vậy $3\,645:5=729$.
:::

Tiếp theo, ta gặp chữ số $0$ ở số bị chia.

:::example Tính $5\,408:4$
**Lời giải.** Ta chia từng bước:

$5:4=1$ (dư $1$). Hạ $4$ được $14$; $14:4=3$ (dư $2$). Hạ $0$ được $20$; $20:4=5$ (dư $0$). Hạ $8$ được $8$; $8:4=2$.

Vậy $5\,408:4=1\,352$.
:::

Có khi chữ số $0$ xuất hiện ở thương. Em hãy cẩn thận để không bỏ sót.

:::example Tính $6\,084:6$
**Lời giải.** Ta chia từng bước:

$6:6=1$ (dư $0$). Hạ $0$ được $0$; $0:6=0$, viết $0$ vào thương. Hạ $8$ được $8$; $8:6=1$ (dư $2$). Hạ $4$ được $24$; $24:6=4$.

Vậy $6\,084:6=1\,014$.

**Kiểm tra.** $1\,014\times6=6\,084$. Đúng.
:::

Bây giờ là phép chia có dư.

:::example Tính $7\,589:8$
**Lời giải.** Vì $7<8$ nên ta lấy $75$ để chia cho $8$:

$75:8=9$ (dư $3$), vì $9\times8=72$. Hạ $8$ được $38$; $38:8=4$ (dư $6$), vì $4\times8=32$. Hạ $9$ được $69$; $69:8=8$ (dư $5$), vì $8\times8=64$.

Vậy $7\,589:8=948$ (dư $5$).

**Kiểm tra.** $948\times8=7\,584$ và $7\,584+5=7\,589$. Đúng, và số dư $5$ bé hơn số chia $8$.
:::

Cuối cùng là một bài toán mà số dư có ý nghĩa. Ta làm theo bốn bước: hiểu đề, tìm cách giải, giải, nhìn lại.

:::example Xếp truyện vào hộp
Một thư viện (số liệu giả định) có $4\,003$ quyển truyện. Người ta xếp vào các hộp, mỗi hộp $9$ quyển. Hỏi cần ít nhất bao nhiêu hộp để xếp hết số truyện?

**Hiểu đề.** Đề cho tổng số truyện và số truyện trong mỗi hộp. Đề hỏi số hộp ít nhất để xếp hết.

**Tìm cách giải.** Chia đều vào các hộp nên ta làm phép chia $4\,003:9$. Số dư cho biết còn thừa bao nhiêu quyển chưa vào hộp nào.

**Giải.**

Bài giải

Ta có $4\,003:9=444$ (dư $7$).

Vậy xếp được $444$ hộp đầy và còn thừa $7$ quyển, số quyển này cần thêm $1$ hộp nữa.

Số hộp ít nhất cần dùng là:
$$444+1=445\ \text{(hộp)}.$$
Đáp số: $445$ hộp.

**Nhìn lại.** Nếu chỉ lấy thương thì ta bỏ sót $7$ quyển truyện. Em thử lại: $444\times9=3\,996$ và $3\,996+7=4\,003$. Đúng. Em hãy nghĩ xem nếu số dư bằng $0$ thì cần bao nhiêu hộp: khi đó chỉ cần $444$ hộp.
:::

**Kết nối.** Phép chia là phép tính ngược của phép nhân: nếu $a:b=c$ thì $c\times b=a$. Em dùng điều này để thử lại phép chia và để tìm thừa số chưa biết.

:::warning Những lỗi em hay gặp
- **Bỏ sót chữ số $0$ ở thương.** Sai: $6\,084:6=114$. Vì sao sai: sau khi hạ $0$, $0$ chia $6$ bằng $0$ nhưng em quên viết $0$ vào thương. Đúng: $6\,084:6=1\,014$.
- **Số dư lớn hơn hoặc bằng số chia.** Sai: $7\,589:8=947$ (dư $13$). Vì sao sai: số dư $13$ còn chia được cho $8$, nên em phải tăng thương lên. Đúng: $7\,589:8=948$ (dư $5$).
- **Quên đơn vị trong bài toán có lời văn.** Sai: "Đáp số: $445$". Đúng: "Đáp số: $445$ hộp".
:::

## Thuật ngữ

:::terms
- phép chia | division
- số bị chia | dividend
- số chia | divisor
- thương | quotient
- số dư | remainder
- phép chia hết | exact division
- phép chia có dư | division with a remainder
- hạ chữ số | bring down the next digit
- phép nhân | multiplication
- thử lại | check
:::

## Tóm tắt

- Chia số có bốn chữ số cho số có một chữ số: chia **từ trái sang phải**, mỗi lần một hàng. Chữ số đầu bé hơn số chia thì lấy hai chữ số đầu.
- Mỗi lần chia: viết thương, nhân thương với số chia, trừ để tìm số dư, rồi hạ chữ số tiếp theo.
- Hạ một chữ số $0$ thì thương ở hàng đó có thể là $0$: không được bỏ sót.
- Số dư luôn bé hơn số chia. Thử lại: thương $\times$ số chia $+$ số dư $=$ số bị chia.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính: $3\,628:4$.

::hint
**Kiến thức:** chia từ trái sang phải, mỗi lần một hàng.

**Gợi ý các bước:**
1. Lấy $36$ chia cho $4$.
2. Hạ từng chữ số tiếp theo, chia tiếp.

::solution
$36:4=9$ (dư $0$). Hạ $2$ được $2$; $2:4=0$, viết $0$. Hạ $8$ được $28$; $28:4=7$.

**Đáp số.** $907$.
:::

:::exercise
Tính: $8\,436:6$.

::hint
**Kiến thức:** chữ số đầu bé hơn số chia thì lấy hai chữ số đầu.

**Gợi ý các bước:**
1. Lấy $8$ chia cho $6$.
2. Hạ từng chữ số, nhớ viết $0$ vào thương khi cần.

::solution
$8:6=1$ (dư $2$). Hạ $4$ được $24$; $24:6=4$. Hạ $3$ được $3$; $3:6=0$ (dư $3$), viết $0$. Hạ $6$ được $36$; $36:6=6$.

**Đáp số.** $1\,406$.
:::

:::exercise
Tính: $9\,125:5$.

::hint
**Kiến thức:** thử lại bằng phép nhân.

**Gợi ý các bước:**
1. Lấy $9$ chia cho $5$.
2. Hạ từng chữ số, chia tiếp rồi thử lại.

::solution
$9:5=1$ (dư $4$). Hạ $1$ được $41$; $41:5=8$ (dư $1$). Hạ $2$ được $12$; $12:5=2$ (dư $2$). Hạ $5$ được $25$; $25:5=5$.

**Thử lại.** $1\,825\times5=9\,125$. Đúng.

**Đáp số.** $1\,825$.
:::

:::exercise
Tính: $5\,237:7$.

::hint
**Kiến thức:** số dư luôn bé hơn số chia.

**Gợi ý các bước:**
1. Lấy $52$ chia cho $7$.
2. Hạ từng chữ số, ghi số dư cuối cùng.

::solution
$52:7=7$ (dư $3$). Hạ $3$ được $33$; $33:7=4$ (dư $5$). Hạ $7$ được $57$; $57:7=8$ (dư $1$).

**Thử lại.** $748\times7=5\,236$ và $5\,236+1=5\,237$. Đúng.

**Đáp số.** $748$ (dư $1$).
:::

:::exercise
Tìm $x$: $x\times6=4\,614$.

::hint
**Kiến thức:** thừa số chưa biết bằng tích chia cho thừa số đã biết.

**Gợi ý các bước:**
1. Viết $x=4\,614:6$.
2. Chia rồi thử lại.

::solution
$x=4\,614:6=769$.

**Thử lại.** $769\times6=4\,614$. Đúng.

**Đáp số.** $x=769$.
:::

:::exercise
Một nhà máy nước (số liệu giả định) chia đều $3\,648$ lít nước vào $4$ bể. Hỏi mỗi bể có bao nhiêu lít nước?

::hint
**Kiến thức:** "chia đều" nghĩa là dùng phép chia.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Làm thế nào? Lấy $3\,648$ chia cho $4$.
3. Thử lại: nhân kết quả với $4$.

::solution
Bài giải

Số lít nước ở mỗi bể là:
$$3\,648:4=912\ \text{(lít)}.$$

**Đáp số.** $912$ lít nước.
:::

:::exercise
Một cửa hàng bánh (số liệu giả định) có $2\,500$ chiếc bánh. Người ta xếp vào các hộp, mỗi hộp $6$ chiếc. Hỏi cần ít nhất bao nhiêu hộp để xếp hết số bánh?

::hint
**Kiến thức:** số dư cho biết còn thừa bao nhiêu chiếc bánh chưa vào hộp nào.

**Gợi ý các bước:**
1. Tính $2\,500:6$ và đọc số dư.
2. Số bánh còn thừa cần thêm một hộp.

::solution
Bài giải

Ta có $2\,500:6=416$ (dư $4$).

Xếp được $416$ hộp đầy, còn thừa $4$ chiếc bánh nên cần thêm $1$ hộp. Số hộp ít nhất là:
$$416+1=417\ \text{(hộp)}.$$

**Đáp số.** $417$ hộp.
:::

:::exercise
Em hãy nhớ lại bài nhân số có bốn chữ số với số có một chữ số. Biết $1\,507\times3=4\,521$. Không đặt tính, hãy tìm $4\,521:3$ và $4\,521:1\,507$.

::hint
**Kiến thức:** nếu $a\times b=c$ thì $c:b=a$ và $c:a=b$.

**Gợi ý các bước:**
1. Gọi tên các thừa số và tích trong phép nhân đã cho.
2. Viết hai phép chia tương ứng.

::solution
Vì $1\,507\times3=4\,521$ nên $4\,521:3=1\,507$ và $4\,521:1\,507=3$.

**Đáp số.** $4\,521:3=1\,507$ và $4\,521:1\,507=3$.
:::

:::exercise
Lan tính $4\,208:4=152$. Em hãy dùng phép nhân để thử lại kết quả của Lan. Nếu sai, em hãy sửa lại.

::hint
**Kiến thức:** thương $\times$ số chia phải bằng số bị chia.

**Gợi ý các bước:**
1. Tính $152\times4$.
2. Nếu khác $4\,208$ thì chia lại.

::solution
Ta có $152\times4=608$, khác $4\,208$, nên kết quả của Lan sai. Chia lại: $4:4=1$; hạ $2$, $2:4=0$, viết $0$; hạ $0$ được $20$, $20:4=5$; hạ $8$ được $8$, $8:4=2$. Vậy $4\,208:4=1\,052$.

**Thử lại.** $1\,052\times4=4\,208$. Đúng.

**Đáp số.** Lan sai; kết quả đúng là $1\,052$.
:::

:::exercise Thử thách
Một số chia cho $6$ được thương là $724$ và dư $5$. Tìm số đó.

::hint
**Kiến thức:** số bị chia bằng thương nhân số chia, rồi cộng số dư.

**Gợi ý các bước:**
1. Tính $724\times6$.
2. Cộng thêm số dư $5$.

::solution
Ta có $724\times6=4\,344$. Số cần tìm là:
$$4\,344+5=4\,349.$$

**Thử lại.** $4\,349:6=724$ (dư $5$). Đúng.

**Đáp số.** $4\,349$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $7\,248:6$ là
A. $128$.
B. $1\,280$.
C. $43\,488$.
D. $1\,208$.
::key D
$7:6=1$ (dư $1$); $12:6=2$; $4:6=0$ (dư $4$), viết $0$; $48:6=8$. Phương án A bỏ sót chữ số $0$, phương án B viết $0$ sai chỗ, phương án C là phép nhân.

::mc
Kết quả của $5\,000:8$ là
A. $625$.
B. $600$ (dư $200$).
C. $6\,250$.
D. $62$.
::key A
$50:8=6$ (dư $2$); $20:8=2$ (dư $4$); $40:8=5$. Phương án B có số dư lớn hơn số chia, phương án C thừa một chữ số $0$, phương án D thiếu một chữ số.

::mc
Người ta chia đều $3\,150$ quả trứng vào $9$ khay. Mỗi khay có
A. $35$ quả.
B. $350$ quả.
C. $28\,350$ quả.
D. $305$ quả.
::key B
$31:9=3$ (dư $4$); $45:9=5$; $0:9=0$. Vậy mỗi khay có $350$ quả. Phương án A bỏ sót chữ số $0$ cuối, phương án D viết $0$ sai chỗ, phương án C là phép nhân.

::mc
Kết quả của $9\,407:5$ là
A. $1\,880$ (dư $7$).
B. $1\,881$.
C. $1\,881$ (dư $2$).
D. $1\,882$.
::key C
$9\,407:5=1\,881$ (dư $2$), vì $1\,881\times5=9\,405$ và $9\,405+2=9\,407$. Phương án A có số dư lớn hơn số chia, phương án B bỏ số dư, phương án D làm tròn lên.

::tf
Em xét phép chia $7\,305:5$.
a) Thương có bốn chữ số.
b) $7\,305:5=1\,416$.
c) Đây là phép chia có dư.
d) $1\,461\times5=7\,305$.
::key Đ S S Đ
a) Đúng: $7\,305:5=1\,461$, thương có bốn chữ số. b) Sai: $1\,416\times5=7\,080$, không bằng $7\,305$. c) Sai: số dư cuối cùng bằng $0$ nên đây là phép chia hết. d) Đúng: $1\,461\times5=7\,305$.

::sa
Tính $8\,096:8$.
::key 1012
$8:8=1$; $0:8=0$, viết $0$; $9:8=1$ (dư $1$); $16:8=2$. Vậy $8\,096:8=1\,012$.

::sa
Tìm số dư của phép chia $6\,500:7$.
::key 4
$6\,500:7=928$ (dư $4$), vì $928\times7=6\,496$ và $6\,500-6\,496=4$.
:::
