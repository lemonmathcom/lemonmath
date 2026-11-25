---
title: Nhân số có bốn chữ số với số có một chữ số
description: Em học cách đặt tính và nhân số có bốn chữ số với số có một chữ số, có nhớ và không nhớ, rồi giải bài toán có lời văn.
minutes: 15
---

:::goals
- Đặt tính và nhân số có bốn chữ số với số có một chữ số (không nhớ).
- Nhân có nhớ: biết viết một chữ số và nhớ sang hàng bên trái.
- Kiểm tra kết quả bằng cách ước lượng.
- Giải bài toán có lời văn bằng một phép nhân.
:::

Một thùng có $1\,213$ quyển vở. Hỏi $3$ thùng như thế có bao nhiêu quyển vở?

Em có thể cộng số vở của từng thùng, nhưng cộng nhiều lần thì chậm và dễ nhầm. Em đã biết bảng nhân và cách đặt tính với số có ít chữ số hơn. Giờ ta dùng lại đúng cách ấy cho số có bốn chữ số, và em sẽ tính được chỉ với một phép nhân.

## Cùng khám phá

Để thấy vì sao cách đặt tính chạy được, ta tách số ra trước. Số $1\,213$ gồm $1$ nghìn, $2$ trăm, $1$ chục và $3$ đơn vị. Ta nhân từng hàng với $3$ rồi ghép lại.

| | Nghìn | Trăm | Chục | Đơn vị |
|---|---|---|---|---|
| Số $1\,213$ | $1$ | $2$ | $1$ | $3$ |
| Nhân với $3$ | $1\times3=3$ | $2\times3=6$ | $1\times3=3$ | $3\times3=9$ |

Ghép các hàng lại, em được $3$ nghìn, $6$ trăm, $3$ chục và $9$ đơn vị, tức là $3\,639$. Đó cũng là câu trả lời cho câu hỏi đầu bài: $3$ thùng có $3\,639$ quyển vở.

Kẻ bảng như vậy hơi dài. Em làm gọn hơn bằng cách đặt tính, rồi nhân lần lượt từ phải sang trái:

$$\begin{array}{r}1213\\ \times\ 3\\ \hline 3639\end{array}$$

:::theorem Cách nhân số có bốn chữ số với số có một chữ số
1. Viết số có một chữ số dưới số có bốn chữ số, thẳng hàng đơn vị.
2. Nhân lần lượt từ phải sang trái: hàng đơn vị, hàng chục, hàng trăm, hàng nghìn.
3. Nếu tích của một hàng có hai chữ số, viết chữ số hàng đơn vị và **nhớ** chữ số hàng chục sang hàng bên trái. Ở hàng đó, nhân xong rồi **cộng thêm số nhớ**.
:::

Vì sao phải nhớ? Mỗi hàng chỉ chứa được một chữ số. Ví dụ $15$ đơn vị là $1$ chục và $5$ đơn vị. Em viết $5$ đơn vị ở hàng đơn vị, còn $1$ chục không bỏ đi được mà phải chuyển sang hàng chục. Đó chính là số nhớ.

## Ví dụ

Ta thử với phép nhân dễ nhất trước: mỗi hàng nhân xong đều nhỏ hơn mười, nên chưa phải nhớ.

:::example Nhân không nhớ
Tính $2\,121\times4$.

**Lời giải.** Em đặt tính rồi nhân từng chữ số với $4$, từ phải sang trái:
$$\begin{array}{r}2121\\ \times\ 4\\ \hline 8484\end{array}$$
- Hàng đơn vị: $1\times4=4$, viết $4$.
- Hàng chục: $2\times4=8$, viết $8$.
- Hàng trăm: $1\times4=4$, viết $4$.
- Hàng nghìn: $2\times4=8$, viết $8$.

Vậy $2\,121\times4=8\,484$.
:::

Ví dụ sau làm đúng như vậy, chỉ khác số. Em thử đoán trước xem có hàng nào phải nhớ không.

:::example Nhân không nhớ, số khác
Tính $3\,102\times3$.

**Lời giải.** Mỗi hàng nhân với $3$ đều nhỏ hơn $10$, nên không cần nhớ:
$$\begin{array}{r}3102\\ \times\ 3\\ \hline 9306\end{array}$$
Hàng đơn vị: $2\times3=6$. Hàng chục: $0\times3=0$. Hàng trăm: $1\times3=3$. Hàng nghìn: $3\times3=9$.

Vậy $3\,102\times3=9\,306$.
:::

Đến đây là chỗ nhiều bạn hay vấp: có hàng nhân xong được từ $10$ trở lên. Lúc ấy em viết chữ số hàng đơn vị và nhớ phần còn lại sang hàng bên trái.

:::example Nhân có nhớ
Tính $1\,425\times3$.

**Lời giải.** Em nhân từng hàng và nhớ khi tích có hai chữ số:
$$\begin{array}{r}1425\\ \times\ 3\\ \hline 4275\end{array}$$
- Hàng đơn vị: $5\times3=15$, viết $5$ nhớ $1$.
- Hàng chục: $2\times3=6$, thêm $1$ được $7$, viết $7$.
- Hàng trăm: $4\times3=12$, viết $2$ nhớ $1$.
- Hàng nghìn: $1\times3=3$, thêm $1$ được $4$, viết $4$.

Vậy $1\,425\times3=4\,275$.

**Kiểm tra.** $1\,425$ gần $1\,400$, mà $1\,400\times3=4\,200$. Kết quả $4\,275$ gần $4\,200$, hợp lí.
:::

Chữ số $0$ dễ làm ta chủ quan. Nhưng nếu có số nhớ chuyển sang hàng ấy, em vẫn phải cộng vào.

:::example Nhân có chữ số 0 và có nhớ
Tính $2\,308\times4$.

**Lời giải.** Hàng chục có chữ số $0$, nhưng em vẫn cộng số nhớ từ hàng đơn vị:
$$\begin{array}{r}2308\\ \times\ 4\\ \hline 9232\end{array}$$
- Hàng đơn vị: $8\times4=32$, viết $2$ nhớ $3$.
- Hàng chục: $0\times4=0$, thêm $3$ được $3$, viết $3$.
- Hàng trăm: $3\times4=12$, viết $2$ nhớ $1$.
- Hàng nghìn: $2\times4=8$, thêm $1$ được $9$, viết $9$.

Vậy $2\,308\times4=9\,232$.

**Kiểm tra.** $2\,300\times4=9\,200$, gần $9\,232$. Hợp lí.
:::

Cuối cùng, ta quay về một chuyện giống câu hỏi đầu bài: nhiều thùng, mỗi thùng đựng số đồ vật bằng nhau. Em dùng phép nhân để giải.

:::example Xếp hộp bút
Một kho có $6$ thùng, mỗi thùng đựng $1\,125$ cái bút. Hỏi kho có tất cả bao nhiêu cái bút?

**Lời giải.** Mỗi thùng có số bút bằng nhau, nên em lấy số bút của một thùng nhân với số thùng:
$$1\,125\times6=6\,750\ \text{(cái)}.$$
- Hàng đơn vị: $5\times6=30$, viết $0$ nhớ $3$.
- Hàng chục: $2\times6=12$, thêm $3$ được $15$, viết $5$ nhớ $1$.
- Hàng trăm: $1\times6=6$, thêm $1$ được $7$, viết $7$.
- Hàng nghìn: $1\times6=6$, viết $6$.

Vậy kho có $6\,750$ cái bút.
:::

:::warning Những lỗi em hay gặp
- **Quên cộng số nhớ.** Sai: $1\,425\times3=4\,265$. Vì sao sai: ở hàng chục, em đã bỏ quên $1$ nhớ từ hàng đơn vị. Đúng: $2\times3=6$, thêm $1$ được $7$, nên kết quả là $4\,275$.
- **Gặp chữ số 0 là bỏ qua số nhớ.** Sai: $2\,308\times4=9\,202$. Vì sao sai: $0\times4=0$ thật, nhưng hàng chục vẫn phải cộng $3$ nhớ, nên chữ số hàng chục là $3$. Đúng: $9\,232$.
- **Quên đơn vị trong bài toán có lời văn.** Sai: "Đáp số: $6\,750$". Vì sao sai: con số đứng một mình chưa nói đó là cái gì. Đúng: "Đáp số: $6\,750$ cái bút".
:::

## Thuật ngữ

:::terms
- phép nhân | multiplication
- thừa số | factor
- tích | product
- đặt tính | set out in columns
- nhân có nhớ | multiplication with regrouping
- số nhớ | carried digit
- hàng nghìn | thousands
- hàng trăm | hundreds
- hàng chục | tens
- hàng đơn vị | ones
:::

## Tóm tắt

- Đặt tính thẳng hàng, nhân từng chữ số từ phải sang trái: đơn vị, chục, trăm, nghìn.
- Tích của một hàng có hai chữ số: viết hàng đơn vị, nhớ hàng chục sang hàng bên trái.
- Ở hàng tiếp theo, nhân xong rồi cộng thêm số nhớ, kể cả khi chữ số đó là $0$.
- Kiểm tra bằng cách làm tròn số rồi ước lượng, và nhớ ghi đơn vị trong đáp số.
Quay lại câu hỏi đầu bài: nhân từng hàng, nhớ đúng chỗ là em tìm được số quyển vở của cả mấy thùng. Em nhớ làm vài bài luyện tập bên dưới để tay quen dần nhé.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý để em bắt đầu. Em cứ thử làm trước. Nếu vướng, hãy đọc gợi ý, rồi mới mở lời giải để so lại.

:::exercise
Tính:

a) $2\,103\times3$.

b) $1\,321\times2$.

::hint
**Kiến thức:** nhân từng chữ số với số có một chữ số, từ phải sang trái. Hai bài này đều không phải nhớ.

**Gợi ý các bước:**
1. Đặt tính thẳng hàng đơn vị.
2. Nhân lần lượt hàng đơn vị, chục, trăm, nghìn.

::solution
Bài giải

a) Ta nhân lần lượt từng chữ số của $2\,103$ với $3$, bắt đầu từ hàng đơn vị. Không có hàng nào có tích từ $10$ trở lên nên không phải nhớ.
$$\begin{aligned}
\text{Hàng đơn vị: } & 3\times3=9,\\
\text{Hàng chục: } & 0\times3=0,\\
\text{Hàng trăm: } & 1\times3=3,\\
\text{Hàng nghìn: } & 2\times3=6.
\end{aligned}$$
Viết các kết quả từ hàng nghìn đến hàng đơn vị, ta được $2\,103\times3=6\,309$.

b) Ta nhân lần lượt từng chữ số của $1\,321$ với $2$, bắt đầu từ hàng đơn vị. Cũng không có hàng nào phải nhớ.
$$\begin{aligned}
\text{Hàng đơn vị: } & 1\times2=2,\\
\text{Hàng chục: } & 2\times2=4,\\
\text{Hàng trăm: } & 3\times2=6,\\
\text{Hàng nghìn: } & 1\times2=2.
\end{aligned}$$
Do đó $1\,321\times2=2\,642$.

Vậy $2\,103\times3=6\,309$ và $1\,321\times2=2\,642$.

**Đáp số.** a) $6\,309$; b) $2\,642$.
:::

:::exercise
Tính (có nhớ):

a) $1\,346\times2$.

b) $1\,507\times4$.

::hint
**Kiến thức:** tích của một hàng có hai chữ số thì viết hàng đơn vị và nhớ hàng chục sang hàng bên trái.

**Gợi ý các bước:**
1. Nhân hàng đơn vị, ghi nhớ nếu có.
2. Ở hàng sau, nhân xong rồi cộng số nhớ.

::solution
a) $6\times2=12$, viết $2$ nhớ $1$. $4\times2=8$, thêm $1$ được $9$. $3\times2=6$. $1\times2=2$. Vậy $1\,346\times2=2\,692$.

b) $7\times4=28$, viết $8$ nhớ $2$. $0\times4=0$, thêm $2$ được $2$. $5\times4=20$, viết $0$ nhớ $2$. $1\times4=4$, thêm $2$ được $6$. Vậy $1\,507\times4=6\,028$.

**Đáp số.** a) $2\,692$; b) $6\,028$.
:::

:::exercise
Em hãy nhớ lại bài trước (phép trừ trong phạm vi $10\,000$). Tính $5\,000-1\,275$, rồi nhân kết quả với $2$.

::hint
**Kiến thức:** phép trừ có nhớ, rồi phép nhân với số có một chữ số.

**Gợi ý các bước:**
1. Đặt tính trừ $5\,000-1\,275$.
2. Lấy hiệu vừa tìm được nhân $2$.

::solution
Bài giải

Bước 1: tính $5\,000-1\,275$. Ta có $5\,000-1\,000=4\,000$, rồi $4\,000-275=3\,725$. Vậy
$$5\,000-1\,275=3\,725.$$

Bước 2: nhân kết quả với $2$. Ta nhân từng chữ số của $3\,725$ với $2$, bắt đầu từ hàng đơn vị:
- Hàng đơn vị: $5\times2=10$, viết $0$ nhớ $1$.
- Hàng chục: $2\times2=4$, thêm $1$ được $5$, viết $5$.
- Hàng trăm: $7\times2=14$, viết $4$ nhớ $1$.
- Hàng nghìn: $3\times2=6$, thêm $1$ được $7$, viết $7$.

Do đó $3\,725\times2=7\,450$.

*Kiểm tra.* $3\,725+1\,275=5\,000$. Đúng.

Vậy kết quả cần tìm là $7\,450$.

**Đáp số.** $7\,450$.
:::

:::exercise
Tính tích của hai thừa số:

a) $2\,019$ và $4$.

b) $7$ và $1\,234$.

::hint
**Kiến thức:** tích là kết quả của phép nhân; đổi chỗ hai thừa số thì tích không đổi.

**Gợi ý các bước:**
1. Viết số có bốn chữ số ở trên, số có một chữ số ở dưới.
2. Nhân từ phải sang trái, nhớ khi cần.

::solution
a) $9\times4=36$, viết $6$ nhớ $3$. $1\times4=4$, thêm $3$ được $7$. $0\times4=0$. $2\times4=8$. Vậy $2\,019\times4=8\,076$.

b) $1\,234\times7$: $4\times7=28$, viết $8$ nhớ $2$. $3\times7=21$, thêm $2$ được $23$, viết $3$ nhớ $2$. $2\times7=14$, thêm $2$ được $16$, viết $6$ nhớ $1$. $1\times7=7$, thêm $1$ được $8$. Vậy tích là $8\,638$.

**Đáp số.** a) $8\,076$; b) $8\,638$.
:::

:::exercise
Mỗi bài toán sau dùng phép cộng, phép trừ hay phép nhân? Vì sao? Rồi giải.

a) Mỗi lọ có $1\,250$ hạt đậu. Hỏi $3$ lọ như thế có bao nhiêu hạt đậu?

b) Kho có $4\,080$ kg gạo, đã bán $1\,260$ kg. Hỏi kho còn bao nhiêu ki-lô-gam gạo?

c) Sáng cửa hàng bán $2\,315$ quyển sách, chiều bán $1\,280$ quyển. Hỏi cả ngày bán bao nhiêu quyển?

::hint
**Kiến thức:** nhiều nhóm bằng nhau thì nhân; "còn lại" thì trừ; "cả hai lần", "tất cả" thì cộng.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Chọn phép tính rồi giải, ghi đơn vị.

::solution
Bài giải

a) Mỗi lọ có số hạt đậu bằng nhau và ta cần tìm số hạt của $3$ lọ, tức là $3$ nhóm bằng nhau. Vì vậy ta dùng phép nhân.
$$1\,250\times3=3\,750\ \text{(hạt)}.$$

b) Kho có $4\,080$ kg gạo, đã bán đi $1\,260$ kg rồi hỏi còn lại bao nhiêu, tức là bớt đi một phần. Vì vậy ta dùng phép trừ.
$$4\,080-1\,260=2\,820\ \text{(kg)}.$$

c) Số sách bán buổi sáng và số sách bán buổi chiều được gộp lại để tìm số sách cả ngày. Vì vậy ta dùng phép cộng.
$$2\,315+1\,280=3\,595\ \text{(quyển)}.$$

Vậy câu a) dùng phép nhân và có $3\,750$ hạt đậu; câu b) dùng phép trừ và còn $2\,820$ kg gạo; câu c) dùng phép cộng và cả ngày bán $3\,595$ quyển sách.

**Đáp số.** a) $3\,750$ hạt đậu; b) $2\,820$ kg; c) $3\,595$ quyển.
:::

:::exercise
Tìm lỗi sai trong lời giải của hai bạn rồi sửa lại.

a) Nam: "$1\,536\times3=4\,598$."

b) Lan: "$3\,070\times2=6\,040$."

::hint
**Kiến thức:** ở mỗi hàng, nhân xong phải cộng số nhớ từ hàng bên phải, kể cả khi chữ số là $0$.

**Gợi ý các bước:**
1. Làm lại từng hàng và ghi số nhớ.
2. So sánh để tìm hàng bị sai.

::solution
a) Ta làm lại phép tính $1\,536\times3$ từng bước, bắt đầu từ hàng đơn vị:
- Hàng đơn vị: $6\times3=18$, viết $8$ nhớ $1$.
- Hàng chục: $3\times3=9$, thêm $1$ được $10$, viết $0$ nhớ $1$.
- Hàng trăm: $5\times3=15$, thêm $1$ được $16$, viết $6$ nhớ $1$.
- Hàng nghìn: $1\times3=3$, thêm $1$ được $4$.

Ta được $1\,536\times3=4\,608$. Nam đã quên cộng $1$ nhớ ở hàng chục nên viết $9$ thay vì $10$, và không nhớ sang hàng trăm. Vì thế bạn viết $5$ ở hàng trăm thay vì $6$ và được $4\,598$.

*Kiểm tra.* $1\,500\times3=4\,500$ và $36\times3=108$; $4\,500+108=4\,608$. Đúng.

b) Ta làm lại phép tính $3\,070\times2$ từng bước, bắt đầu từ hàng đơn vị:
- Hàng đơn vị: $0\times2=0$, viết $0$.
- Hàng chục: $7\times2=14$, viết $4$ nhớ $1$.
- Hàng trăm: $0\times2=0$, thêm $1$ được $1$, viết $1$.
- Hàng nghìn: $3\times2=6$, viết $6$.

Ta được $3\,070\times2=6\,140$. Lan đã quên cộng $1$ nhớ ở hàng trăm vì thấy chữ số $0$, nên viết $0$ thay vì $1$ và được $6\,040$.

*Kiểm tra.* $3\,000\times2=6\,000$ và $70\times2=140$; $6\,000+140=6\,140$. Đúng.

Vậy Nam quên cộng số nhớ ở hàng chục, kết quả đúng là $4\,608$; Lan quên cộng số nhớ ở hàng trăm, kết quả đúng là $6\,140$.

**Đáp số.** a) $4\,608$; b) $6\,140$.
:::

:::exercise
Một nhà máy mỗi ngày làm được $1\,450$ cái bánh.

a) Hỏi trong $3$ ngày nhà máy làm được bao nhiêu cái bánh?

b) Một đơn hàng cần $5\,000$ cái bánh. Hỏi $3$ ngày làm xong thì còn thiếu bao nhiêu cái bánh?

::hint
**Kiến thức:** nhiều ngày, mỗi ngày làm số bánh bằng nhau thì dùng phép nhân; "còn thiếu" thì dùng phép trừ.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Câu a): nhân. Câu b): lấy số cần trừ đi số đã có.
3. Thử lại bằng ước lượng.

::solution
Bài giải

a) Mỗi ngày nhà máy làm được $1\,450$ cái bánh, nên số bánh làm được trong $3$ ngày là:
$$1\,450\times3=4\,350\ \text{(cái bánh)}.$$

b) Đơn hàng cần $5\,000$ cái bánh, nhà máy đã làm được $4\,350$ cái bánh, nên số bánh còn thiếu là:
$$5\,000-4\,350=650\ \text{(cái bánh)}.$$

*Kiểm tra.* $1\,500\times3=4\,500$, gần với $4\,350$. Kết quả hợp lí.

Vậy trong $3$ ngày nhà máy làm được $4\,350$ cái bánh và còn thiếu $650$ cái bánh.

**Đáp số.** a) $4\,350$ cái bánh; b) $650$ cái bánh.
:::

:::exercise Thử thách
Bác Tư có $4$ túi hạt giống, bác Năm có $3$ túi hạt giống. Mỗi túi đều có $1\,245$ hạt.

a) Tính số hạt của bác Tư và số hạt của bác Năm.

b) Hai bác gộp hạt lại. Tổng số hạt là bao nhiêu? Vì sao tổng này cũng bằng $1\,245\times7$?

::hint
**Kiến thức:** nhân với $4$ nghĩa là lấy $4$ lần số đó; $4$ lần cộng $3$ lần là $7$ lần.

**Gợi ý các bước:**
1. Tính $1\,245\times4$ và $1\,245\times3$.
2. Cộng hai kết quả, rồi tính $1\,245\times7$ để so sánh.

::solution
Bài giải

a) Mỗi túi có $1\,245$ hạt. Số hạt của bác Tư là:
$$1\,245\times4=4\,980\ \text{(hạt)}.$$
Số hạt của bác Năm là:
$$1\,245\times3=3\,735\ \text{(hạt)}.$$

b) Khi hai bác gộp hạt lại, tổng số hạt là:
$$4\,980+3\,735=8\,715\ \text{(hạt)}.$$

Gộp lại có $4+3=7$ túi, mỗi túi có $1\,245$ hạt nên tổng số hạt cũng là
$$1\,245\times7=8\,715\ \text{(hạt)}.$$
Hai kết quả bằng nhau vì $1\,245\times4+1\,245\times3=1\,245\times(4+3)$: cộng số hạt của $4$ túi với số hạt của $3$ túi cũng chính là tính số hạt của $7$ túi.

Vậy bác Tư có $4\,980$ hạt, bác Năm có $3\,735$ hạt, và hai bác có tất cả $8\,715$ hạt.

**Đáp số.** a) $4\,980$ hạt và $3\,735$ hạt; b) $8\,715$ hạt.
:::

## Kiểm tra mini

:::quiz
::mc TH
Kết quả của $2\,456\times3$ là
A. $6\,258$.
B. $7\,358$.
C. $7\,368$.
D. $2\,459$.
::key C
$6\times3=18$ viết $8$ nhớ $1$; $5\times3=15$, thêm $1$ được $16$ viết $6$ nhớ $1$; $4\times3=12$, thêm $1$ được $13$ viết $3$ nhớ $1$; $2\times3=6$, thêm $1$ được $7$. Phương án A bỏ hết số nhớ, B quên số nhớ từ hàng đơn vị, D là phép cộng $2\,456+3$.

::mc NB
Khi tính $1\,524\times3$, em bắt đầu nhân từ hàng nào?
A. Hàng nghìn.
B. Hàng trăm.
C. Hàng chục.
D. Hàng đơn vị.
::key D
Em nhân từ phải sang trái, bắt đầu từ hàng đơn vị, để số nhớ đi sang hàng bên trái.

::mc TH
Mỗi thùng có $1\,400$ quyển sách. $5$ thùng như thế có bao nhiêu quyển sách?
A. $5\,000$ quyển.
B. $7\,000$ quyển.
C. $700$ quyển.
D. $1\,405$ quyển.
::key B
$1\,400\times5=7\,000$: $4\times5=20$ viết $0$ nhớ $2$, $1\times5=5$ thêm $2$ được $7$. Phương án A quên số nhớ, C thiếu một chữ số $0$, D là phép cộng $1\,400+5$.

::mc TH
Mai mua $4$ gói bánh, mỗi gói giá $2\,150$ đồng. Mai phải trả bao nhiêu tiền?
A. $2\,154$ đồng.
B. $8\,400$ đồng.
C. $8\,600$ đồng.
D. $8\,000$ đồng.
::key C
$2\,150\times4=8\,600$: $5\times4=20$ viết $0$ nhớ $2$, $1\times4=4$ thêm $2$ được $6$, $2\times4=8$. Phương án B quên số nhớ $2$, D chỉ nhân chữ số hàng nghìn.

::tf NB TH TH TH
Em xét phép nhân $1\,325\times3$.
a) Chữ số hàng đơn vị của tích là $5$.
b) Ở hàng chục, phải cộng thêm số nhớ $1$.
c) $1\,325\times3=3\,875$.
d) Tích lớn hơn $3\,900$.
::key Đ Đ S Đ
a) Đúng: $5\times3=15$, viết $5$. b) Đúng: nhớ $1$ từ $15$. c) Sai: $1\,325\times3=3\,975$. d) Đúng: $3\,975>3\,900$.

::sa TH
Tính $1\,203\times3$.
::key 3609
$3\times3=9$, $0\times3=0$, $2\times3=6$, $1\times3=3$, nên tích là $3\,609$.

::sa TH
Một xe chở $4$ chuyến, mỗi chuyến $1\,800$ viên gạch. Xe chở tất cả bao nhiêu viên gạch?
::key 7200
$1\,800\times4=7\,200$ (viên gạch).
:::
