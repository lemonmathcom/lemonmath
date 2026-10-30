---
title: Số gần đúng và sai số
description: Đo mức chênh lệch của số gần đúng bằng sai số tuyệt đối và sai số tương đối; quy tròn số và xác định các chữ số chắc.
minutes: 15
---

:::goals
- Giải thích được số gần đúng là gì và viết được $a = \bar{a} \pm d$.
- Tính được sai số tuyệt đối, độ chính xác và sai số tương đối, rồi dùng chúng để so sánh mức chính xác.
- Quy tròn một số đến một hàng cho trước hoặc đến một số chữ số có nghĩa.
- Xác định được chữ số nào của số gần đúng là chữ số chắc.
:::

Chiếc thước cho biết quyển sách giáo khoa của bạn rộng 24,4 cm. Máy tính bỏ túi cho $\sqrt{2} = 1{,}414213562\ldots$ rồi màn hình dừng lại. Trong đời sống, hầu hết các số ta gặp, từ độ dài đến dân số, đều là **số gần đúng**. Câu hỏi đúng không phải là "nó có chính xác không?" mà là "nó có thể lệch nhiều nhất bao nhiêu?". Bài học này trang bị cho bạn công cụ để trả lời.

## Số gần đúng và sai số tuyệt đối

Có khi giá trị đúng không thể viết ra được ($\pi$, $\sqrt{2}$), có khi không thể biết được (khối lượng chính xác của một bao gạo). Khi đó ta dùng một số ở gần nó thay thế.

Gọi $a$ là giá trị đúng và $\bar{a}$ là một giá trị gần đúng của nó.

:::definition Sai số tuyệt đối và độ chính xác
**Sai số tuyệt đối** của số gần đúng $\bar{a}$ là
$$\Delta = |a - \bar{a}|.$$
Thông thường ta không biết $a$ nên không tính được chính xác $\Delta$. Thay vào đó, ta tìm một số $d$ chắc chắn đủ lớn:
$$\Delta \leq d.$$
Số $d$ này gọi là **độ chính xác** của số gần đúng (hay cận trên của sai số). Ta viết
$$a = \bar{a} \pm d,$$
nghĩa là $\bar{a} - d \leq a \leq \bar{a} + d$.
:::

Số $d$ càng nhỏ thì số gần đúng càng tốt. Với $\pi \approx 3{,}14$ ta có thể lấy $d = 0{,}002$, tức là $\pi$ nằm giữa $3{,}138$ và $3{,}142$.

:::graph Số $\pi$ nằm trong khoảng $3{,}14 \pm 0{,}002$
alt: Một đoạn trục số ngắn từ 3,136 đến 3,144 với đoạn thẳng từ 3,138 đến 3,142, một điểm tại 3,14 và một điểm rỗng tại pi nằm trong đoạn đó.
x: 3.136..3.144
y: -1..1
segment: (3.138, 0) (3.142, 0)
point: (3.138, 0) "3,138" below
point: (3.142, 0) "3,142" below
point: (3.14, 0) "ā" above-left
open: (3.14159, 0) "π" above-right
:::

## Sai số tương đối

Sai số 1 cm có nghiêm trọng không? Với chiều dài cây bút chì thì có. Với chiều dài sân bóng đá thì chẳng đáng kể. Ta cần so sánh sai số với độ lớn của số đang xét.

:::definition Sai số tương đối
**Sai số tương đối** của số gần đúng $\bar{a}$ là
$$\delta = \frac{\Delta}{|\bar{a}|}.$$
Vì $\Delta \leq d$ nên ta có
$$\delta \leq \frac{d}{|\bar{a}|},$$
và thường viết dưới dạng phần trăm. Sai số tương đối càng nhỏ thì phép đo càng **chính xác** (đáng tin cậy).
:::

:::example Số 3,14 gần đúng với $\pi$ tốt đến đâu?
Lấy $\bar{a} = 3{,}14$ làm số gần đúng của $\pi = 3{,}14159265\ldots$. Tìm độ chính xác và cận trên của sai số tương đối.

**Lời giải.**
1. Sai số tuyệt đối là $\Delta = |\pi - 3{,}14| = 0{,}00159\ldots$.
2. Số này nhỏ hơn $0{,}002$ nên ta có thể lấy $d = 0{,}002$ và viết $\pi = 3{,}14 \pm 0{,}002$.
3. Sai số tương đối thoả mãn $\delta \leq \dfrac{0{,}002}{3{,}14} \approx 0{,}00064$, tức khoảng $0{,}064\%$ (làm tròn đến ba chữ số thập phân của phần trăm).
:::

:::example Phép đo nào chính xác hơn?
Một chiếc thước chia đến milimét cho chiều dài quyển sách là $12{,}4\text{ cm}$ với $d = 0{,}1\text{ cm}$. Một chiếc cân cho khối lượng một học sinh là $85\text{ kg}$ với $d = 0{,}5\text{ kg}$. Phép đo nào chính xác hơn?

**Lời giải.**
1. Chiều dài: $\delta_1 \leq \dfrac{0{,}1}{12{,}4} \approx 0{,}0081 = 0{,}81\%$.
2. Khối lượng: $\delta_2 \leq \dfrac{0{,}5}{85} \approx 0{,}0059 = 0{,}59\%$.
3. Ta so sánh sai số tương đối chứ không so sánh sai số tuyệt đối. Vì $0{,}59\% < 0{,}81\%$ nên phép đo khối lượng chính xác hơn, dù cận sai số tuyệt đối $0{,}5$ của nó lớn hơn $0{,}1$.
:::

:::warning Đừng so sánh sai số tuyệt đối của các đại lượng khác nhau
Sai số $0{,}5\text{ kg}$ và $0{,}1\text{ cm}$ có đơn vị khác nhau và đại lượng được đo cũng có độ lớn khác nhau. Khi các số được đo khác nhau, hãy luôn so sánh **sai số tương đối**.
:::

## Quy tròn và chữ số có nghĩa

Để quy tròn một số đến một hàng nào đó, hãy nhìn chữ số ngay bên phải hàng đó.

- Nếu chữ số ấy **nhỏ hơn 5**, giữ nguyên các chữ số bên trái và thay các chữ số còn lại bằng số 0 (hoặc bỏ đi nếu ở sau dấu phẩy).
- Nếu chữ số ấy **lớn hơn hoặc bằng 5**, cộng thêm 1 vào chữ số cuối cùng được giữ lại rồi làm như trên.

Chẳng hạn, $7\,459$ quy tròn đến hàng trăm là $7\,500$; $3{,}14159$ quy tròn đến hai chữ số thập phân là $3{,}14$.

Khi quy tròn đến một hàng, sai số không vượt quá **nửa đơn vị của hàng đó**. Vì vậy $3{,}14$ (quy tròn đến hàng phần trăm) có $d = 0{,}005$, còn $7\,500$ (quy tròn đến hàng trăm) có $d = 50$.

**Chữ số có nghĩa** của một số là các chữ số kể từ chữ số khác 0 đầu tiên ở bên trái. Vậy $0{,}0305$ có 3 chữ số có nghĩa ($3, 0, 5$), và $2{,}40$ cũng có 3 ($2, 4, 0$). Để quy tròn đến $k$ chữ số có nghĩa, ta giữ $k$ chữ số đầu rồi quy tròn như trên. Chẳng hạn $0{,}0071849$ quy tròn đến 3 chữ số có nghĩa là $0{,}00718$, và $12\,345$ quy tròn đến 3 chữ số có nghĩa là $12\,300$.

## Chữ số chắc

Giả sử $a = \bar{a} \pm d$. Một chữ số của $\bar{a}$ là **chữ số chắc** (chữ số đáng tin) nếu $d$ không vượt quá nửa đơn vị của hàng có chữ số đó. Mọi chữ số bên trái một chữ số chắc cũng là chữ số chắc. Khi viết kết quả, ta chỉ giữ các chữ số chắc và quy tròn phần còn lại.

:::example Chữ số chắc của số dân một thị trấn
Dân số một thị trấn là $\bar{a} = 5\,248\,300$ với $d = 300$. Những chữ số nào là chữ số chắc? Nên viết kết quả như thế nào?

**Lời giải.**
1. Nửa đơn vị của hàng nghìn là $500$ và $d = 300 \leq 500$. Vậy chữ số hàng nghìn là $8$ chắc, và các chữ số bên trái nó cũng chắc: $5, 2, 4$.
2. Nửa đơn vị của hàng trăm là $50$ và $d = 300 > 50$. Vậy chữ số hàng trăm là $3$ **không** chắc.
3. Ta giữ các chữ số chắc và quy tròn đến hàng nghìn: dân số khoảng $5\,248\,000$.
:::

:::example Xấp xỉ $\sqrt{2}$ bằng máy tính
Máy tính cho $\sqrt{2} = 1{,}41421356\ldots$. Hãy quy tròn đến 2 và đến 3 chữ số thập phân. Với mỗi trường hợp, nêu độ chính xác, cận trên của sai số tương đối và các chữ số chắc.

**Lời giải.**
1. Đến 2 chữ số thập phân: $\bar{a} = 1{,}41$. Sai số là $|\sqrt{2} - 1{,}41| = 0{,}0042\ldots \leq 0{,}005$ nên $d = 0{,}005$. Nửa đơn vị của hàng phần trăm là $0{,}005$, nên cả ba chữ số $1, 4, 1$ đều chắc. Sai số tương đối $\delta \leq \dfrac{0{,}005}{1{,}41} \approx 0{,}35\%$.
2. Đến 3 chữ số thập phân: $\bar{a} = 1{,}414$. Sai số là $|\sqrt{2} - 1{,}414| = 0{,}00021\ldots \leq 0{,}0005$ nên $d = 0{,}0005$. Cả bốn chữ số $1, 4, 1, 4$ đều chắc. Sai số tương đối $\delta \leq \dfrac{0{,}0005}{1{,}414} \approx 0{,}035\%$.
3. Càng lấy nhiều chữ số thập phân thì độ chính xác càng cao và càng có nhiều chữ số chắc.
:::

:::warning Những sai lầm thường gặp
- Viết $a = \bar{a} \pm d$ với $d$ quá nhỏ. Số $d$ phải **lớn hơn hoặc bằng** sai số thật.
- Nghĩ rằng mọi chữ số hiện trên màn hình đều chắc. Máy tính hay thước đo có thể hiện những chữ số chỉ là phỏng đoán.
- Quên rằng bản thân việc quy tròn cũng gây ra sai số tối đa là nửa đơn vị của hàng cuối.
:::

## Thuật ngữ

:::terms
- số gần đúng | approximate number
- sai số tuyệt đối | absolute error
- độ chính xác (của số gần đúng) | error bound
- sai số tương đối | relative error
- quy tròn | rounding
- chữ số có nghĩa | significant figure
- chữ số chắc | reliable digit
:::

## Tóm tắt

- Số gần đúng $\bar{a}$ của giá trị đúng $a$ có sai số tuyệt đối $\Delta = |a - \bar{a}|$. Độ chính xác $d$ thoả mãn $\Delta \leq d$, và ta viết $a = \bar{a} \pm d$.
- Sai số tương đối là $\delta = \Delta/|\bar{a}|$, bị chặn bởi $d/|\bar{a}|$. Dùng nó để so sánh mức chính xác của các phép đo khác nhau.
- Quy tròn đến một hàng gây sai số không quá nửa đơn vị của hàng đó.
- Một chữ số là chắc nếu $d$ không vượt quá nửa đơn vị của hàng chữ số đó. Chỉ nên viết các chữ số chắc.

## Luyện tập

:::practice
1. Quy tròn $7\,459$ đến hàng chục và hàng trăm; quy tròn $3{,}14159$ đến 2 và đến 4 chữ số thập phân.
2. Các số $0{,}0305$, $2{,}40$ và $40{,}007$ có bao nhiêu chữ số có nghĩa? Quy tròn $0{,}0071849$ đến 2 chữ số có nghĩa.
3. Dùng $\bar{a} = 1{,}73$ làm số gần đúng của $\sqrt{3} = 1{,}7320508\ldots$. Tìm $\Delta$ (đến 4 chữ số thập phân, làm tròn lên), rồi tìm cận trên của sai số tương đối dưới dạng phần trăm (2 chữ số thập phân).
4. Một thợ may đo tấm vải dài $8{,}5\text{ m}$ với $d = 0{,}05\text{ m}$, còn một thợ xây đo bức tường dài $120\text{ m}$ với $d = 0{,}5\text{ m}$. Phép đo của ai chính xác hơn?
5. Số nào xấp xỉ $\pi$ tốt hơn: $\dfrac{22}{7}$ hay $3{,}1416$? Hãy so sánh sai số tuyệt đối của chúng.
6. Cho $\bar{a} = 1\,536$ với $d = 4$. Những chữ số nào là chữ số chắc? Viết kết quả chỉ với các chữ số chắc.
7. Cho $\bar{a} = 45{,}60$ với $d = 0{,}03$. Những chữ số nào là chữ số chắc? Nên viết kết quả thế nào?
8. Các cạnh của một hình chữ nhật được đo là $25{,}4\text{ cm}$ và $12{,}6\text{ cm}$, mỗi số với $d = 0{,}1\text{ cm}$. Tìm chu vi và độ chính xác của nó, rồi cận trên của sai số tương đối.
9. Một học sinh viết $\bar{a} = 2{,}500$ với $d = 0{,}001$ và cho rằng cả bốn chữ số đều chắc. Có đúng không? Hãy dùng ý "nửa đơn vị" và cho biết nên viết số này thế nào.
10. (Thử thách) Với hình chữ nhật ở bài 8, diện tích được ước lượng là $25{,}4 \times 12{,}6$. Tìm diện tích nhỏ nhất và lớn nhất có thể, một độ chính xác $d$ cho diện tích ước lượng và các chữ số chắc.
:::

:::solution Xem lời giải
1. Đến hàng chục: $7\,459 \to 7\,460$ (chữ số hàng đơn vị $9 \geq 5$). Đến hàng trăm: $7\,459 \to 7\,500$ (chữ số hàng chục $5 \geq 5$). Tiếp theo, $3{,}14159 \to 3{,}14$ (chữ số kế tiếp là $1$) và $3{,}14159 \to 3{,}1416$ (chữ số kế tiếp là $9$).
2. $0{,}0305$ có 3 chữ số có nghĩa, $2{,}40$ có 3, và $40{,}007$ có 5. Với $0{,}0071849$ giữ $7$ và $1$; chữ số kế tiếp là $8 \geq 5$ nên làm tròn lên thành $0{,}0072$.
3. $\Delta = |1{,}7320508 - 1{,}73| = 0{,}0020508 \approx 0{,}0021$ (làm tròn lên). Vậy $d = 0{,}0021$ và $\delta \leq \dfrac{0{,}0021}{1{,}73} \approx 0{,}0012 = 0{,}12\%$.
4. Thợ may: $\dfrac{0{,}05}{8{,}5} \approx 0{,}0059 = 0{,}59\%$. Thợ xây: $\dfrac{0{,}5}{120} \approx 0{,}0042 = 0{,}42\%$. Phép đo của thợ xây chính xác hơn vì sai số tương đối nhỏ hơn.
5. $\left|\dfrac{22}{7} - \pi\right| \approx 0{,}00126$ và $|3{,}1416 - \pi| \approx 0{,}0000073$. Sai số thứ hai nhỏ hơn nhiều nên $3{,}1416$ là số xấp xỉ tốt hơn.
6. Nửa đơn vị của hàng chục là $5 \geq 4$ nên chữ số hàng chục $3$ chắc (và $1$, $5$ cũng chắc). Nửa đơn vị của hàng đơn vị là $0{,}5 < 4$ nên chữ số $6$ không chắc. Viết $1\,540$ (quy tròn đến hàng chục).
7. Nửa đơn vị của hàng phần mười là $0{,}05 \geq 0{,}03$ nên chữ số $6$ chắc, cũng như $4$ và $5$. Nửa đơn vị của hàng phần trăm là $0{,}005 < 0{,}03$ nên chữ số cuối $0$ không chắc. Viết $45{,}6$.
8. Chu vi $\bar{P} = 2(25{,}4 + 12{,}6) = 76{,}0\text{ cm}$. Mỗi cạnh có thể lệch $0{,}1$ nên $d = 2(0{,}1 + 0{,}1) = 0{,}4\text{ cm}$ và $P = 76{,}0 \pm 0{,}4$. Sai số tương đối: $\delta \leq \dfrac{0{,}4}{76{,}0} \approx 0{,}0053 = 0{,}53\%$.
9. Không đúng. Chữ số cuối $0$ ở hàng phần nghìn. Độ chính xác $d = 0{,}001$ lớn hơn nửa đơn vị của hàng phần nghìn ($0{,}0005$) nên chữ số $0$ cuối cùng không chắc. Nhưng $d$ nhỏ hơn nửa đơn vị của hàng phần trăm ($0{,}005$) nên các chữ số $2, 5, 0$ chắc. Viết $2{,}50$.
10. Diện tích nhỏ nhất là $25{,}3 \times 12{,}5 = 316{,}25$ và lớn nhất là $25{,}5 \times 12{,}7 = 323{,}85$. Giá trị ước lượng là $25{,}4 \times 12{,}6 = 320{,}04\text{ cm}^2$. Các khoảng cách là $|323{,}85 - 320{,}04| = 3{,}81$ và $|316{,}25 - 320{,}04| = 3{,}79$, nên $d = 3{,}81$. Nửa đơn vị của hàng chục là $5 \geq 3{,}81$ nên các chữ số $3$ và $2$ chắc, còn nửa đơn vị của hàng đơn vị là $0{,}5 < 3{,}81$ nên chữ số $0$ không chắc. Viết diện tích khoảng $320\text{ cm}^2$.
:::
