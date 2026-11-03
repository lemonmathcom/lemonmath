---
title: Số gần đúng và sai số
description: Đo mức chênh lệch của số gần đúng bằng sai số tuyệt đối và sai số tương đối; quy tròn số và viết số quy tròn với độ chính xác cho trước.
minutes: 20
---

:::goals
- Giải thích được số gần đúng là gì và viết được $a = \bar{a} \pm d$.
- Tính được sai số tuyệt đối, độ chính xác và sai số tương đối, rồi dùng chúng để so sánh mức chính xác.
- Quy tròn một số đến một hàng cho trước và xác định số gần đúng của một số với độ chính xác cho trước.
- Viết được số quy tròn của một số gần đúng khi biết độ chính xác của nó.
:::

Một bánh xe đạp có đường kính $60$ cm. Chu vi đúng của nó là $60\pi$ cm, nhưng $\pi$ có vô số chữ số thập phân nên không ai tính "hết" được. Bạn An dùng $\pi\approx3{,}14$ và được chu vi $188{,}4$ cm. Bạn Bình dùng $\pi\approx\dfrac{22}{7}$ và được khoảng $188{,}57$ cm. Kết quả của ai gần với chu vi đúng hơn, và lệch nhiều nhất bao nhiêu?

Trong đời sống, hầu hết các số ta gặp, từ độ dài đến khối lượng, đều là **số gần đúng**. Câu hỏi quan trọng không phải là "số này có chính xác không?" mà là "số này có thể lệch nhiều nhất bao nhiêu?". Bài này trang bị cho bạn công cụ để trả lời.

## Số gần đúng và sai số tuyệt đối

Dùng máy tính với nhiều chữ số, ta có $60\pi=188{,}4955\ldots$ cm. So sánh hai kết quả với số này:

| Bạn | Kết quả | Chênh lệch so với $60\pi$ |
|---|---|---|
| An | $188{,}4$ | $188{,}4955\ldots-188{,}4\approx0{,}096$ |
| Bình | $188{,}5714\ldots$ | $188{,}5714\ldots-188{,}4955\ldots\approx0{,}076$ |

Kết quả của Bình gần hơn một chút. Điều ta vừa làm là đo **khoảng cách** giữa giá trị đúng và giá trị gần đúng. Khoảng cách đó có tên gọi riêng.

:::definition Sai số tuyệt đối và độ chính xác
Gọi $a$ là giá trị đúng và $\bar{a}$ là một giá trị gần đúng của nó. **Sai số tuyệt đối** của $\bar{a}$ là
$$\Delta_{\bar a} = |a - \bar{a}|.$$
Thường ta không biết $a$ nên không tính được $\Delta_{\bar a}$. Khi đó ta tìm một số $d$ chắc chắn đủ lớn để $\Delta_{\bar a} \leq d$. Số $d$ gọi là **độ chính xác** của số gần đúng $\bar a$, và ta viết
$$a = \bar{a} \pm d,\quad\text{nghĩa là}\quad \bar{a} - d \leq a \leq \bar{a} + d.$$
:::

Số $d$ càng nhỏ thì số gần đúng càng tốt. Ví dụ đầu tiên là một số gần đúng quen thuộc nhất.

:::example Viết $\pi$ dưới dạng $3{,}14\pm d$
Biết $\pi=3{,}14159265\ldots$ Tìm sai số tuyệt đối của số gần đúng $3{,}14$ và chọn một độ chính xác $d$ gọn.

**Lời giải.** Lấy giá trị đúng trừ giá trị gần đúng:

$$\Delta = |\pi - 3{,}14| = 0{,}00159\ldots$$

Vì $0{,}00159\ldots<0{,}002$, ta có thể lấy $d=0{,}002$.

Vậy $\pi = 3{,}14 \pm 0{,}002$, tức là $\pi$ nằm trong đoạn $[3{,}138; 3{,}142]$.
:::

:::graph Số $\pi$ nằm trong đoạn $[3{,}138; 3{,}142]$
alt: Một đoạn trục số ngắn từ 3,136 đến 3,144 với đoạn thẳng từ 3,138 đến 3,142, một điểm tại 3,14 và một điểm rỗng tại pi nằm trong đoạn đó.
x: 3.136..3.144
y: -1..1
segment: (3.138, 0) (3.142, 0)
point: (3.138, 0) "3,138" below
point: (3.142, 0) "3,142" below
point: (3.14, 0) "ā" above-left
open: (3.14159, 0) "π" above-right
:::

Với $\pi$ ta may mắn biết rất nhiều chữ số. Với một phép đo thật, ta chỉ biết giá trị đúng nằm trong một khoảng nào đó.

:::example Khi không biết giá trị đúng
Đo chiều dài một mảnh vườn nhiều lần, các kết quả đều nằm giữa $24{,}6$ m và $25{,}0$ m. Hãy chọn một số gần đúng $\bar a$ và độ chính xác $d$ cho chiều dài $a$.

**Lời giải.** Chọn $\bar a$ là trung điểm của đoạn $[24{,}6; 25{,}0]$, khi đó $d$ là nửa độ dài đoạn:

$$\bar a=\dfrac{24{,}6+25{,}0}{2}=24{,}8,\qquad d=\dfrac{25{,}0-24{,}6}{2}=0{,}2.$$

Vậy chiều dài mảnh vườn là $a=24{,}8\pm0{,}2$ (m).

**Kiểm tra.** $24{,}8-0{,}2=24{,}6$ và $24{,}8+0{,}2=25{,}0$: đúng là hai đầu của khoảng đo.
:::

## Sai số tương đối

Sai số $1$ cm có đáng kể không? Với chiều dài một cây bút thì có. Với chiều dài sân bóng thì gần như không. Muốn biết phép đo nào **chính xác hơn**, ta phải so sánh sai số với độ lớn của đại lượng.

:::definition Sai số tương đối
**Sai số tương đối** của số gần đúng $\bar{a}$ là
$$\delta_{\bar a} = \frac{\Delta_{\bar a}}{|\bar{a}|}.$$
Vì $\Delta_{\bar a} \leq d$ nên $\delta_{\bar a} \leq \dfrac{d}{|\bar{a}|}$. Sai số tương đối thường được viết dưới dạng phần trăm. Sai số tương đối càng nhỏ thì phép đo càng chính xác.
:::

:::example Phép đo nào chính xác hơn?
Chiều dài một sân bóng đo được là $105$ m với độ chính xác $0{,}2$ m. Chiều dài một cây bút đo được là $14{,}6$ cm với độ chính xác $0{,}1$ cm. Phép đo nào chính xác hơn?

**Lời giải.** Hai đại lượng có độ lớn và đơn vị khác nhau, nên ta so sánh sai số tương đối:

$$\delta_1\le\dfrac{0{,}2}{105}\approx0{,}19\%,\qquad \delta_2\le\dfrac{0{,}1}{14{,}6}\approx0{,}68\%.$$

Vậy phép đo sân bóng chính xác hơn, dù độ chính xác $0{,}2$ m của nó (bằng $20$ cm) lớn hơn nhiều so với $0{,}1$ cm.
:::

## Quy tròn số

Để quy tròn một số đến một hàng nào đó, ta nhìn chữ số ngay bên phải hàng đó.

- Nếu chữ số ấy **nhỏ hơn $5$**: giữ nguyên các chữ số bên trái, thay các chữ số bên phải bằng $0$ (hoặc bỏ đi nếu ở phần thập phân).
- Nếu chữ số ấy **lớn hơn hoặc bằng $5$**: cộng thêm $1$ vào chữ số của hàng quy tròn rồi làm như trên.

Chẳng hạn, $4\,863$ quy tròn đến hàng trăm là $4\,900$ (vì chữ số hàng chục là $6\ge5$).

:::theorem Sai số do quy tròn
Khi quy tròn một số đến một hàng nào đó, sai số tuyệt đối không vượt quá **nửa đơn vị** của hàng đó.
:::

**Vì sao?** Số quy tròn là bội của đơn vị hàng đó gần số ban đầu nhất. Hai bội liên tiếp cách nhau một đơn vị, nên số ban đầu cách bội gần nhất không quá nửa đơn vị.

:::example Quy tròn và sai số
Quy tròn $7\,254\,836$ đến hàng nghìn và $0{,}58276$ đến hàng phần trăm. Tính sai số tuyệt đối trong mỗi trường hợp.

**Lời giải.** Ta nhìn chữ số ngay bên phải hàng quy tròn.

- Chữ số hàng trăm của $7\,254\,836$ là $8\ge5$, nên tăng chữ số hàng nghìn: $7\,255\,000$. Sai số là $7\,255\,000-7\,254\,836=164\le500$.
- Chữ số hàng phần nghìn của $0{,}58276$ là $2<5$, nên giữ nguyên: $0{,}58$. Sai số là $0{,}58276-0{,}58=0{,}00276\le0{,}005$.

Vậy hai số quy tròn là $7\,255\,000$ (sai số $164$) và $0{,}58$ (sai số $0{,}00276$), đều không vượt quá nửa đơn vị của hàng quy tròn.
:::

## Số gần đúng với độ chính xác cho trước

Có hai câu hỏi thường gặp, và cả hai đều dựa vào quy tắc "sai số không quá nửa đơn vị".

**1. Cho một số đã biết và độ chính xác $d$, tìm số gần đúng.** Ta quy tròn số đó đến hàng của chữ số khác $0$ đầu tiên (tính từ trái) của $d$. Sai số khi đó không quá nửa đơn vị của hàng ấy, nên không quá $d$.

**2. Cho số gần đúng $\bar a$ với độ chính xác $d$, viết số quy tròn của $\bar a$.** Ta quy tròn $\bar a$ đến **hàng thấp nhất mà $d$ nhỏ hơn một đơn vị của hàng đó**. Các chữ số ở hàng thấp hơn không đáng tin vì $d$ đã lớn hơn cả một đơn vị của chúng.

:::example Số gần đúng của $\sqrt5$
Biết $\sqrt5=2{,}2360679\ldots$ Hãy viết số gần đúng của $\sqrt5$ với độ chính xác $d=0{,}01$, rồi với $d=0{,}001$.

**Lời giải.** Chữ số khác $0$ đầu tiên của $d=0{,}01$ ở hàng phần trăm, nên ta quy tròn đến hàng phần trăm:

$$\sqrt5\approx2{,}24,\qquad |2{,}24-\sqrt5|=0{,}0039\ldots\le0{,}01.$$

Với $d=0{,}001$, ta quy tròn đến hàng phần nghìn:

$$\sqrt5\approx2{,}236,\qquad |\sqrt5-2{,}236|=0{,}000067\ldots\le0{,}001.$$

Vậy số gần đúng của $\sqrt5$ là $2{,}24$ với độ chính xác $0{,}01$, và $2{,}236$ với độ chính xác $0{,}001$.
:::

Câu hỏi thứ hai đi theo hướng ngược lại: ta đã có $\bar a$ cùng $d$, và cần bỏ bớt những chữ số không đáng tin.

:::example Số quy tròn của một số gần đúng
(a) Một con đường dài $\bar a=3\,527\,418$ mm với độ chính xác $d=300$ mm. Viết số quy tròn của $\bar a$.

(b) Một khối kim loại nặng $\bar b=12{,}4637$ kg với độ chính xác $d=0{,}02$ kg. Viết số quy tròn của $\bar b$.

**Lời giải.** Ta tìm hàng thấp nhất có đơn vị lớn hơn $d$.

- (a) Một đơn vị hàng trăm là $100<300$, một đơn vị hàng nghìn là $1000>300$. Vậy quy tròn đến hàng nghìn: chữ số hàng trăm là $4<5$, nên được $3\,527\,000$.
- (b) Một đơn vị hàng phần trăm là $0{,}01<0{,}02$, một đơn vị hàng phần mười là $0{,}1>0{,}02$. Vậy quy tròn đến hàng phần mười: chữ số hàng phần trăm là $6\ge5$, nên được $12{,}5$.

Vậy số quy tròn là $3\,527\,000$ mm và $12{,}5$ kg.
:::

:::warning Những sai lầm thường gặp
- **Chọn $d$ quá nhỏ.** Viết $\pi=3{,}14\pm0{,}001$. Sai vì sai số thật là $0{,}00159\ldots>0{,}001$. Đúng: $d$ phải lớn hơn hoặc bằng sai số thật, chẳng hạn $d=0{,}002$.
- **So sánh sai số tuyệt đối của hai đại lượng khác nhau.** Kết luận cây bút ($d=0{,}1$ cm) đo chính xác hơn sân bóng ($d=0{,}2$ m). Sai vì hai đại lượng có độ lớn rất khác nhau. Đúng: so sánh sai số tương đối.
- **Giữ quá nhiều chữ số.** Với $\bar b=12{,}4637\pm0{,}02$, viết số quy tròn là $12{,}46$. Sai vì $d=0{,}02$ lớn hơn một đơn vị hàng phần trăm. Đúng: $12{,}5$.
- **Quy tròn "dây chuyền".** Quy tròn $2{,}346$ đến hàng phần mười bằng cách làm tròn $2{,}346\to2{,}35\to2{,}4$. Sai vì chỉ được nhìn chữ số ngay bên phải hàng quy tròn ($4<5$). Đúng: $2{,}3$.
:::

## Thuật ngữ

:::terms
- số gần đúng | approximate value
- sai số tuyệt đối | absolute error
- độ chính xác (của số gần đúng) | error bound
- sai số tương đối | relative error
- quy tròn | rounding
- hàng (đơn vị, chục, phần mười, ...) | place value
- số quy tròn | rounded value
:::

## Tóm tắt

- Số gần đúng $\bar a$ của giá trị đúng $a$ có sai số tuyệt đối $\Delta_{\bar a}=|a-\bar a|$. Nếu $\Delta_{\bar a}\le d$ thì viết $a=\bar a\pm d$ ($d$ là độ chính xác).
- Sai số tương đối $\delta_{\bar a}=\Delta_{\bar a}/|\bar a|\le d/|\bar a|$, thường viết bằng phần trăm; dùng nó để so sánh độ chính xác của các phép đo khác nhau.
- Quy tròn đến một hàng: nhìn chữ số ngay bên phải; sai số không quá nửa đơn vị của hàng đó.
- Số gần đúng của một số với độ chính xác $d$: quy tròn đến hàng của chữ số khác $0$ đầu tiên của $d$.
- Số quy tròn của $\bar a\pm d$: quy tròn đến hàng thấp nhất mà $d$ nhỏ hơn một đơn vị của hàng đó.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Quy tròn $4\,863$ đến hàng chục và hàng trăm; quy tròn $2{,}71828$ đến hàng phần trăm và hàng phần nghìn.

::hint
**Kiến thức:** nhìn chữ số ngay bên phải hàng quy tròn; nhỏ hơn $5$ thì giữ, từ $5$ trở lên thì tăng $1$.

**Gợi ý các bước:**
1. Xác định chữ số ở hàng quy tròn.
2. Nhìn chữ số ngay bên phải nó.

::solution
$4\,863$: chữ số hàng đơn vị $3<5$ nên đến hàng chục là $4\,860$; chữ số hàng chục $6\ge5$ nên đến hàng trăm là $4\,900$. $2{,}71828$: chữ số hàng phần nghìn $8\ge5$ nên đến hàng phần trăm là $2{,}72$; chữ số hàng phần chục nghìn $2<5$ nên đến hàng phần nghìn là $2{,}718$.

**Đáp số.** $4\,860$; $4\,900$; $2{,}72$; $2{,}718$.
:::

:::exercise
Biết $\sqrt3=1{,}7320508\ldots$ Lấy $\bar a=1{,}73$ làm số gần đúng của $\sqrt3$. Chứng tỏ $\Delta_{\bar a}<0{,}0021$ và tìm cận trên của sai số tương đối (dạng phần trăm, làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** $\Delta_{\bar a}=|a-\bar a|$ và $\delta_{\bar a}\le\dfrac{d}{|\bar a|}$.

**Gợi ý các bước:**
1. Tính $\sqrt3-1{,}73$.
2. Chia $0{,}0021$ cho $1{,}73$ và đổi ra phần trăm.

::solution
$\Delta_{\bar a}=1{,}7320508\ldots-1{,}73=0{,}0020508\ldots<0{,}0021$. Do đó
$$\delta_{\bar a}\le\dfrac{0{,}0021}{1{,}73}\approx0{,}0012=0{,}12\%.$$

**Đáp số.** $\delta_{\bar a}\le0{,}12\%$.
:::

:::exercise
Số nào xấp xỉ $\sqrt2=1{,}41421356\ldots$ tốt hơn: $1{,}41$ hay $\dfrac{99}{70}$?

::hint
**Kiến thức:** số gần đúng tốt hơn là số có sai số tuyệt đối nhỏ hơn (khi cùng xấp xỉ một số).

**Gợi ý các bước:**
1. Đổi $\dfrac{99}{70}$ ra số thập phân.
2. Tính hai sai số tuyệt đối rồi so sánh.

::solution
$\dfrac{99}{70}=1{,}4142857\ldots$ Ta có
$$|\sqrt2-1{,}41|\approx0{,}0042,\qquad \left|\dfrac{99}{70}-\sqrt2\right|\approx0{,}000072.$$
Sai số thứ hai nhỏ hơn rất nhiều.

**Đáp số.** $\dfrac{99}{70}$ xấp xỉ $\sqrt2$ tốt hơn.
:::

:::exercise
Biết $\sqrt7=2{,}6457513\ldots$ và $\pi^2=9{,}8696044\ldots$ Viết số gần đúng của $\sqrt7$ với độ chính xác $0{,}001$ và của $\pi^2$ với độ chính xác $0{,}01$.

::hint
**Kiến thức:** quy tròn đến hàng của chữ số khác $0$ đầu tiên của $d$ thì sai số không quá $d$.

**Gợi ý các bước:**
1. $d=0{,}001$: quy tròn đến hàng phần nghìn.
2. $d=0{,}01$: quy tròn đến hàng phần trăm.

::solution
$\sqrt7\approx2{,}646$ với sai số $\approx0{,}00025\le0{,}001$. $\pi^2\approx9{,}87$ với sai số $\approx0{,}0004\le0{,}01$.

**Đáp số.** $\sqrt7\approx2{,}646$; $\pi^2\approx9{,}87$.
:::

:::exercise
Viết số quy tròn của mỗi số gần đúng: (a) $\bar a=2\,476\,154\pm2\,000$; (b) $\bar b=0{,}73914\pm0{,}004$.

::hint
**Kiến thức:** quy tròn đến hàng thấp nhất mà $d$ nhỏ hơn một đơn vị của hàng đó.

**Gợi ý các bước:**
1. So sánh $d$ với $1$, $10$, $100$, ... (hoặc $0{,}1$, $0{,}01$, ...) để tìm hàng.
2. Quy tròn theo chữ số ngay bên phải hàng đó.

::solution
(a) $2\,000$ không nhỏ hơn $1\,000$ nhưng nhỏ hơn $10\,000$, nên quy tròn đến hàng chục nghìn; chữ số hàng nghìn là $6\ge5$: $2\,480\,000$.

(b) $0{,}004$ nhỏ hơn $0{,}01$ nhưng không nhỏ hơn $0{,}001$, nên quy tròn đến hàng phần trăm; chữ số hàng phần nghìn là $9\ge5$: $0{,}74$.

**Đáp số.** (a) $2\,480\,000$; (b) $0{,}74$.
:::

:::exercise
Một thợ may đo tấm vải dài $6{,}4$ m với độ chính xác $0{,}05$ m. Một thợ xây đo bức tường dài $85$ m với độ chính xác $0{,}4$ m. Phép đo của ai chính xác hơn?

::hint
**Kiến thức:** phép đo có sai số tương đối nhỏ hơn thì chính xác hơn.

**Gợi ý các bước:**
1. Tính $\dfrac{d}{\bar a}$ cho mỗi phép đo.
2. So sánh hai tỉ số.

::solution
Thợ may: $\delta_1\le\dfrac{0{,}05}{6{,}4}\approx0{,}78\%$. Thợ xây: $\delta_2\le\dfrac{0{,}4}{85}\approx0{,}47\%$.

**Đáp số.** Phép đo của thợ xây chính xác hơn.
:::

:::exercise
Cho $\bar a=4{,}375$ là số gần đúng của $a$ với độ chính xác $d=0{,}02$. Mỗi khẳng định sau đúng hay sai?

a) $a$ thuộc đoạn $[4{,}355; 4{,}395]$.
b) Sai số tương đối của $\bar a$ không vượt quá $0{,}5\%$.
c) Số quy tròn của $\bar a$ là $4{,}38$.
d) Có thể $a=4{,}4$.

::hint
**Kiến thức:** $a=\bar a\pm d$ nghĩa là $\bar a-d\le a\le\bar a+d$; $\delta\le\dfrac{d}{|\bar a|}$; quy tắc viết số quy tròn.

**Gợi ý các bước:**
1. Tính $\bar a-d$ và $\bar a+d$.
2. Tính $\dfrac{0{,}02}{4{,}375}$.
3. Tìm hàng thấp nhất có đơn vị lớn hơn $0{,}02$.

::solution
a) **Đúng.** $4{,}375-0{,}02=4{,}355$ và $4{,}375+0{,}02=4{,}395$.

b) **Đúng.** $\dfrac{0{,}02}{4{,}375}\approx0{,}46\%\le0{,}5\%$.

c) **Sai.** $0{,}02$ không nhỏ hơn $0{,}01$ nhưng nhỏ hơn $0{,}1$, nên quy tròn đến hàng phần mười: $4{,}4$.

d) **Sai.** $4{,}4-4{,}375=0{,}025>0{,}02$, nên $4{,}4$ nằm ngoài đoạn ở câu a).

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Sai.
:::

:::exercise
Một sân hình chữ nhật có chiều dài $32{,}5\pm0{,}1$ m và chiều rộng $18{,}4\pm0{,}1$ m. Tính cận trên của sai số tương đối của chu vi, viết dưới dạng phần trăm và làm tròn đến hàng phần trăm.

::hint
**Kiến thức:** nếu mỗi cạnh lệch không quá $0{,}1$ m thì chu vi $2(x+y)$ lệch không quá $2(0{,}1+0{,}1)$.

**Gợi ý các bước:**
1. Tính chu vi gần đúng.
2. Tính độ chính xác của chu vi.
3. Chia và đổi ra phần trăm.

::solution
Chu vi gần đúng $\bar P=2(32{,}5+18{,}4)=101{,}8$ m, độ chính xác $d=2(0{,}1+0{,}1)=0{,}4$ m. Do đó
$$\delta\le\dfrac{0{,}4}{101{,}8}\approx0{,}39\%.$$

**Đáp số.** $\delta\le0{,}39\%$.
:::

:::exercise
(Ôn tập bài [Tập hợp và các phép toán trên tập hợp](lesson:sets-and-set-operations)) Biết $\pi=3{,}14\pm0{,}002$.

(a) Viết tập $I$ các giá trị có thể của $\pi$ theo thông tin này dưới dạng một đoạn. (b) Số $\dfrac{22}{7}$ có thuộc $I$ không? (c) Tìm $I\cap[3{,}141; 3{,}15]$.

::hint
**Kiến thức:** $a=\bar a\pm d$ nghĩa là $a\in[\bar a-d; \bar a+d]$; giao của hai đoạn là phần chung.

**Gợi ý các bước:**
1. Tính hai đầu mút.
2. Đổi $\dfrac{22}{7}$ ra số thập phân rồi so sánh.
3. Vẽ hai đoạn lên trục số.

::solution
(a) $I=[3{,}138; 3{,}142]$.

(b) $\dfrac{22}{7}=3{,}142857\ldots>3{,}142$, nên $\dfrac{22}{7}\notin I$.

(c) Phần chung của $[3{,}138; 3{,}142]$ và $[3{,}141; 3{,}15]$ là $[3{,}141; 3{,}142]$.

**Đáp số.** (a) $[3{,}138; 3{,}142]$; (b) không; (c) $[3{,}141; 3{,}142]$.
:::

:::exercise Thử thách
Với sân hình chữ nhật ở bài trên ($32{,}5\pm0{,}1$ m và $18{,}4\pm0{,}1$ m), diện tích được ước lượng là $32{,}5\cdot18{,}4$. Tìm diện tích nhỏ nhất và lớn nhất có thể, một độ chính xác $d$ cho diện tích ước lượng, rồi viết số quy tròn của diện tích.

::hint
**Kiến thức:** diện tích nhỏ nhất ứng với hai cạnh nhỏ nhất, lớn nhất ứng với hai cạnh lớn nhất; $d$ là khoảng cách lớn hơn từ giá trị ước lượng đến hai giá trị đó.

**Gợi ý các bước:**
1. Tính $32{,}4\cdot18{,}3$, $32{,}5\cdot18{,}4$ và $32{,}6\cdot18{,}5$.
2. Tính hai khoảng cách và lấy số lớn hơn làm $d$.
3. Áp dụng quy tắc viết số quy tròn.

::solution
Diện tích ước lượng $\bar S=32{,}5\cdot18{,}4=598$ m². Nhỏ nhất $32{,}4\cdot18{,}3=592{,}92$, lớn nhất $32{,}6\cdot18{,}5=603{,}1$. Hai khoảng cách là $598-592{,}92=5{,}08$ và $603{,}1-598=5{,}1$, nên lấy $d=5{,}1$. Vì $5{,}1$ không nhỏ hơn $1$ nhưng nhỏ hơn $10$, ta quy tròn $598$ đến hàng chục: $600$.

**Đáp số.** $592{,}92\le S\le603{,}1$; $S=598\pm5{,}1$ (m²); số quy tròn là $600$ m².
:::

## Kiểm tra mini

:::quiz
::mc
Chiều dài của một chiếc bút là $a=12{,}5\pm0{,}3$ (cm). Khẳng định nào sau đây đúng?
A. $12{,}2\le a\le12{,}8$.
B. $12{,}47\le a\le12{,}53$.
C. $12{,}5\le a\le12{,}8$.
D. $12{,}2\le a\le12{,}5$.
::key A
$a=\bar a\pm d$ nghĩa là $\bar a-d\le a\le\bar a+d$, tức là $12{,}5-0{,}3\le a\le12{,}5+0{,}3$. Phải trừ và cộng cả hai phía, không chỉ một phía.

::mc
Quy tròn số $52\,846$ đến hàng trăm, ta được
A. $52\,800$.
B. $52\,900$.
C. $52\,850$.
D. $53\,000$.
::key A
Chữ số hàng chục là $4<5$ nên giữ nguyên hàng trăm: $52\,800$. Phương án B là lỗi quy tròn "nối tiếp" $52\,846\to52\,850\to52\,900$.

::mc
Số gần đúng $\bar a=40$ có độ chính xác $d=0{,}2$. Sai số tương đối của $\bar a$ không vượt quá
A. $0{,}2\%$.
B. $0{,}5\%$.
C. $5\%$.
D. $200\%$.
::key B
$\delta_{\bar a}\le\dfrac{d}{|\bar a|}=\dfrac{0{,}2}{40}=0{,}005=0{,}5\%$. Phương án A lấy nhầm $d$ làm sai số tương đối; D lấy $\dfrac{40}{0{,}2}$.

::mc
Số quy tròn của số gần đúng $\bar a=1\,734\,562$ với độ chính xác $d=300$ là
A. $1\,734\,600$.
B. $1\,735\,000$.
C. $1\,734\,000$.
D. $1\,730\,000$.
::key B
Hàng trăm có đơn vị $100<300$, hàng nghìn có đơn vị $1000>300$, nên quy tròn đến hàng nghìn. Chữ số hàng trăm là $5\ge5$ nên được $1\,735\,000$ (C là lỗi bỏ bớt chữ số mà không quy tròn).

::tf
Biết $\sqrt5=2{,}2360679\ldots$ Lấy $\bar a=2{,}24$ làm số gần đúng của $\sqrt5$.
a) Sai số tuyệt đối của $\bar a$ nhỏ hơn $0{,}004$.
b) Có thể viết $\sqrt5=2{,}24\pm0{,}003$.
c) Với độ chính xác $d=0{,}004$, sai số tương đối của $\bar a$ không vượt quá $0{,}2\%$.
d) Quy tròn $\sqrt5$ đến hàng phần nghìn ta được $2{,}237$.
::key Đ S Đ S
a) Đúng: $2{,}24-2{,}2360679\ldots=0{,}0039\ldots<0{,}004$. b) Sai: sai số thật $0{,}0039\ldots$ lớn hơn $0{,}003$. c) Đúng: $\dfrac{0{,}004}{2{,}24}\approx0{,}18\%$. d) Sai: quy tròn đến hàng phần nghìn, chữ số sau là $0<5$, nên được $2{,}236$.

::sa
Một bao gạo cân được $49{,}6$ kg với độ chính xác $0{,}2$ kg. Khối lượng thật của bao gạo lớn nhất có thể là bao nhiêu ki-lô-gam?
::key 49,8
Khối lượng thật $a$ thoả mãn $49{,}6-0{,}2\le a\le49{,}6+0{,}2$, nên lớn nhất là $49{,}8$ kg.

::sa
Đo chiều dài một chiếc lá nhiều lần, mọi kết quả đều nằm giữa $7{,}42$ cm và $7{,}58$ cm. Lấy $\bar a$ là trung điểm của đoạn này. Sai số tương đối của $\bar a$ không vượt quá bao nhiêu phần trăm? (Làm tròn đến hàng phần trăm.)
::key 1,07
$\bar a=\dfrac{7{,}42+7{,}58}{2}=7{,}5$ và $d=\dfrac{7{,}58-7{,}42}{2}=0{,}08$, nên $\delta\le\dfrac{0{,}08}{7{,}5}\approx1{,}07\%$.
:::
