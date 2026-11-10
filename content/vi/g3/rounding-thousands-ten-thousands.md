---
title: Làm tròn số đến hàng nghìn, hàng chục nghìn
description: Em học cách làm tròn một số đến hàng nghìn hoặc hàng chục nghìn bằng cách nhìn chữ số ở hàng bên phải, rồi dùng vào bài toán thực tế.
minutes: 15
---

:::goals
- Biết làm tròn một số đến hàng nghìn.
- Biết làm tròn một số đến hàng chục nghìn.
- Nhìn đúng chữ số cần xét: từ $5$ trở lên thì làm tròn lên, dưới $5$ thì làm tròn xuống.
- Dùng làm tròn để nói số lượng "khoảng bao nhiêu".
:::

Sân vận động của thành phố có $4\,732$ khán giả xem trận bóng đá chiều nay. Cô phóng viên muốn viết ngắn gọn: "Có khoảng mấy nghìn khán giả?" Em giúp cô chọn một số tròn nghìn gần với $4\,732$ nhé.

Ở bài trước, em đã biết so sánh các số trong phạm vi $100\,000$. Em cũng đã biết làm tròn số đến hàng chục và hàng trăm. Bài này dùng lại cách nghĩ đó cho hàng nghìn và hàng chục nghìn.

## Cùng khám phá

Ta xếp các số tròn nghìn $4\,000$ và $5\,000$ trên tia số. Số $4\,732$ nằm giữa hai số đó. Điểm chính giữa của hai số là $4\,500$.

:::graph Số $4\,732$ nằm giữa $4\,000$ và $5\,000$
alt: Tia số từ 3800 đến 5200, đánh dấu các điểm 4000, 4500, 4732 và 5000; điểm 4732 nằm gần 5000 hơn
x: 3800..5200
y: -1..1
segment: (4000, 0) (5000, 0)
point: (4000, 0) "4000" below
point: (4500, 0) "4500" above
point: (4732, 0) "4732" below
point: (5000, 0) "5000" below
:::

Em hãy hỏi: số $4\,732$ gần số nào hơn?

- Từ $4\,000$ đến $4\,732$ là $4\,732-4\,000=732$.
- Từ $4\,732$ đến $5\,000$ là $5\,000-4\,732=268$.
- Vì $268<732$ nên $4\,732$ gần $5\,000$ hơn.

Ta nói: làm tròn $4\,732$ đến hàng nghìn được $5\,000$, viết $4\,732\approx5\,000$. Kí hiệu $\approx$ đọc là "gần bằng".

Em để ý: $4\,732$ lớn hơn điểm chính giữa $4\,500$, nên nó gần $5\,000$ hơn. Số nào nhỏ hơn $4\,500$ thì gần $4\,000$ hơn. Chữ số hàng trăm của số $4\,500$ là $5$, nên chữ số hàng trăm cho em biết số đó ở nửa nào.

:::theorem Cách làm tròn
**Làm tròn đến hàng nghìn:** nhìn chữ số ở hàng trăm.
- Nếu chữ số đó **bé hơn $5$** (từ $0$ đến $4$): giữ nguyên chữ số hàng nghìn, các chữ số bên phải đổi thành $0$.
- Nếu chữ số đó **từ $5$ trở lên** (từ $5$ đến $9$): tăng chữ số hàng nghìn thêm $1$, các chữ số bên phải đổi thành $0$.

**Làm tròn đến hàng chục nghìn:** làm tương tự, nhưng nhìn chữ số ở hàng nghìn.
:::

Cách làm này đúng vì em chọn số tròn gần nhất. Chữ số hàng trăm từ $5$ trở lên nghĩa là số đó ở nửa trên, gần số tròn nghìn lớn hơn.

## Ví dụ

Ta bắt đầu với một số có chữ số hàng trăm nhỏ.

:::example Làm tròn $3\,214$ đến hàng nghìn
**Lời giải.** Muốn làm tròn đến hàng nghìn, em nhìn chữ số hàng trăm. Chữ số hàng trăm của $3\,214$ là $2$, bé hơn $5$, nên giữ nguyên $3$ nghìn và đổi các chữ số bên phải thành $0$:
$$3\,214\approx3\,000.$$
Vậy $3\,214$ làm tròn đến hàng nghìn là $3\,000$.
:::

Bây giờ chữ số hàng trăm lớn hơn.

:::example Làm tròn $6\,750$ đến hàng nghìn
**Lời giải.** Chữ số hàng trăm của $6\,750$ là $7$, từ $5$ trở lên, nên tăng chữ số hàng nghìn từ $6$ lên $7$ và đổi các chữ số bên phải thành $0$:
$$6\,750\approx7\,000.$$
Vậy $6\,750$ làm tròn đến hàng nghìn là $7\,000$.
:::

Với số có năm chữ số, em có hai cách làm tròn khác nhau.

:::example Làm tròn $47\,328$ đến hàng nghìn và đến hàng chục nghìn
**Lời giải.** Làm tròn đến hàng nghìn: chữ số hàng trăm là $3$, bé hơn $5$, nên giữ nguyên $47$ nghìn:
$$47\,328\approx47\,000.$$
Làm tròn đến hàng chục nghìn: em nhìn chữ số hàng nghìn là $7$, từ $5$ trở lên, nên tăng $4$ chục nghìn lên $5$ chục nghìn:
$$47\,328\approx50\,000.$$
Vậy $47\,328$ làm tròn đến hàng nghìn là $47\,000$, đến hàng chục nghìn là $50\,000$.
:::

Có một trường hợp hay làm em lúng túng: chữ số cần tăng là $9$.

:::example Làm tròn $9\,640$ đến hàng nghìn
**Lời giải.** Chữ số hàng trăm của $9\,640$ là $6$, từ $5$ trở lên, nên em cần thêm $1$ nghìn vào $9$ nghìn. $9$ nghìn thêm $1$ nghìn là $10$ nghìn:
$$9\,640\approx10\,000.$$
Vậy $9\,640$ làm tròn đến hàng nghìn là $10\,000$.
:::

Bây giờ em dùng làm tròn để trả lời một câu hỏi trong cuộc sống.

:::example Vé buổi hòa nhạc
Một buổi hòa nhạc bán được $23\,480$ vé. Báo viết: "Khoảng bao nhiêu nghìn vé đã được bán?" Hãy trả lời.

**Lời giải.** "Khoảng bao nhiêu nghìn" nghĩa là làm tròn đến hàng nghìn. Chữ số hàng trăm của $23\,480$ là $4$, bé hơn $5$, nên:
$$23\,480\approx23\,000.$$
Vậy đã bán được khoảng $23$ nghìn vé.
:::

:::warning Những lỗi em hay gặp
- **Nhìn nhầm chữ số.** Sai: làm tròn $4\,372$ đến hàng nghìn bằng cách nhìn chữ số $2$ ở hàng đơn vị. Vì sao sai: em phải nhìn chữ số ở hàng ngay bên phải hàng cần làm tròn, tức là hàng trăm, chữ số $3$. Đúng: $4\,372\approx4\,000$.
- **Quên đổi các chữ số bên phải thành $0$.** Sai: $6\,750\approx7\,750$. Vì sao sai: số làm tròn đến hàng nghìn phải là số tròn nghìn. Đúng: $6\,750\approx7\,000$.
- **Chữ số $9$ không dám tăng.** Sai: $9\,640\approx9\,000$. Vì sao sai: chữ số hàng trăm là $6$ nên phải làm tròn lên, và $9$ nghìn thêm $1$ nghìn là $10$ nghìn. Đúng: $9\,640\approx10\,000$.
:::

## Thuật ngữ

:::terms
- làm tròn số | rounding (to round a number)
- hàng nghìn | thousands place
- hàng chục nghìn | ten-thousands place
- hàng trăm | hundreds place
- chữ số | digit
- số tròn nghìn | whole thousand
- gần bằng | approximately equal to
- tia số | number line
:::

## Tóm tắt

- Làm tròn đến hàng nghìn: nhìn chữ số hàng trăm. Bé hơn $5$ thì giữ nguyên, từ $5$ trở lên thì tăng hàng nghìn thêm $1$.
- Làm tròn đến hàng chục nghìn: nhìn chữ số hàng nghìn, làm theo cách tương tự.
- Sau khi làm tròn, các chữ số bên phải đều thành $0$.
- Ví dụ: $4\,732\approx5\,000$ (đến hàng nghìn); $47\,328\approx50\,000$ (đến hàng chục nghìn).
- Em có thể thử lại bằng tia số: số làm tròn phải là số tròn gần nhất.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Làm tròn mỗi số sau đến hàng nghìn:

a) $2\,148$.

b) $6\,905$.

::hint
**Kiến thức:** nhìn chữ số hàng trăm: bé hơn $5$ thì giữ nguyên, từ $5$ trở lên thì tăng hàng nghìn thêm $1$.

**Gợi ý các bước:**
1. Tìm chữ số hàng trăm của số đó.
2. So sánh chữ số đó với $5$, rồi đổi các chữ số bên phải thành $0$.

::solution
a) Chữ số hàng trăm của $2\,148$ là $1$, bé hơn $5$, nên $2\,148\approx2\,000$.

b) Chữ số hàng trăm của $6\,905$ là $9$, từ $5$ trở lên, nên $6\,905\approx7\,000$.

**Đáp số.** a) $2\,000$; b) $7\,000$.
:::

:::exercise
Làm tròn:

a) $4\,372$ đến hàng nghìn.

b) $8\,650$ đến hàng nghìn.

c) $35\,480$ đến hàng chục nghìn.

::hint
**Kiến thức:** làm tròn đến hàng nghìn thì nhìn hàng trăm; làm tròn đến hàng chục nghìn thì nhìn hàng nghìn.

**Gợi ý các bước:**
1. Xác định hàng cần làm tròn và hàng cần nhìn.
2. Làm theo cách của ví dụ.

::solution
a) Chữ số hàng trăm là $3$, bé hơn $5$: $4\,372\approx4\,000$.

b) Chữ số hàng trăm là $6$, từ $5$ trở lên: $8\,650\approx9\,000$.

c) Chữ số hàng nghìn là $5$, từ $5$ trở lên, nên tăng $3$ chục nghìn lên $4$ chục nghìn: $35\,480\approx40\,000$.

**Đáp số.** a) $4\,000$; b) $9\,000$; c) $40\,000$.
:::

:::exercise
Em hãy nhớ lại bài trước (so sánh các số trong phạm vi $100\,000$).

a) Điền dấu $>$, $<$ hoặc $=$: $45\,802\;\square\;45\,820$.

b) Làm tròn số lớn hơn trong hai số ở câu a) đến hàng nghìn.

::hint
**Kiến thức:** so sánh từ hàng cao xuống hàng thấp, chữ số nào lớn hơn trước thì số đó lớn hơn.

**Gợi ý các bước:**
1. So sánh lần lượt các hàng cho đến khi gặp chữ số khác nhau.
2. Tìm số lớn hơn rồi nhìn chữ số hàng trăm của nó.

::solution
a) Hai số có cùng chữ số ở hàng chục nghìn, hàng nghìn, hàng trăm ($4$, $5$, $8$). Ở hàng chục: $0<2$. Vậy $45\,802<45\,820$.

b) Số lớn hơn là $45\,820$. Chữ số hàng trăm là $8$, từ $5$ trở lên, nên $45\,820\approx46\,000$.

**Đáp số.** a) Dấu $<$; b) $46\,000$.
:::

:::exercise
Trong các số $5\,499$, $5\,500$, $6\,499$, $6\,500$, $6\,501$, những số nào làm tròn đến hàng nghìn được $6\,000$?

::hint
**Kiến thức:** số làm tròn đến hàng nghìn được $6\,000$ khi chữ số hàng nghìn là $5$ và hàng trăm từ $5$ trở lên, hoặc chữ số hàng nghìn là $6$ và hàng trăm bé hơn $5$.

**Gợi ý các bước:**
1. Làm tròn từng số đến hàng nghìn.
2. Chọn những số cho kết quả $6\,000$.

::solution
$5\,499\approx5\,000$ (hàng trăm là $4$). $5\,500\approx6\,000$ (hàng trăm là $5$). $6\,499\approx6\,000$ (hàng trăm là $4$). $6\,500\approx7\,000$ (hàng trăm là $5$). $6\,501\approx7\,000$ (hàng trăm là $5$).

**Đáp số.** $5\,500$ và $6\,499$.
:::

:::exercise
Nhà Nam cách chợ $7\,480$ m. Nam nói: "Khoảng $7\,000$ m." Lan nói: "Khoảng $7\,500$ m."

a) Bạn nào đã làm tròn đến hàng nghìn? Vì sao?

b) Bạn còn lại đã làm tròn đến hàng nào?

::hint
**Kiến thức:** làm tròn đến hàng nghìn thì kết quả là số tròn nghìn.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Làm tròn $7\,480$ đến hàng nghìn rồi đối chiếu với lời hai bạn.

::solution
a) Chữ số hàng trăm của $7\,480$ là $4$, bé hơn $5$, nên $7\,480\approx7\,000$. Vậy Nam đã làm tròn đến hàng nghìn.

b) $7\,500$ là số tròn trăm gần $7\,480$ nhất ($80$ làm tròn lên thành $100$), nên Lan đã làm tròn đến hàng trăm.

**Đáp số.** a) Nam; b) hàng trăm.
:::

:::exercise
Tìm lỗi sai trong lời giải của hai bạn rồi sửa lại.

a) Hà: "Làm tròn $3\,700$ đến hàng nghìn: chữ số hàng trăm là $7$ nên em giữ nguyên, được $3\,000$."

b) Tú: "Làm tròn $27\,450$ đến hàng chục nghìn: em nhìn chữ số hàng trăm là $4$, bé hơn $5$, nên được $27\,000$."

::hint
**Kiến thức:** làm tròn đến hàng nào thì nhìn hàng ngay bên phải; kết quả chỉ có chữ số $0$ ở các hàng bên phải.

**Gợi ý các bước:**
1. Hà: chữ số $7$ so với $5$ thì làm tròn lên hay xuống?
2. Tú: làm tròn đến hàng chục nghìn thì nhìn hàng nào?

::solution
a) Chữ số hàng trăm là $7$, từ $5$ trở lên, nên phải làm tròn lên: $3\,700\approx4\,000$.

b) Làm tròn đến hàng chục nghìn thì phải nhìn chữ số hàng nghìn, là $7$, từ $5$ trở lên, nên $27\,450\approx30\,000$. Tú đã nhìn nhầm hàng, và kết quả $27\,000$ chưa phải số tròn chục nghìn.

**Đáp số.** a) $4\,000$; b) $30\,000$.
:::

:::exercise
Bảng dưới đây ghi số khán giả của ba trận bóng.

| Trận | Số khán giả |
|---|---|
| Trận 1 | $12\,380$ |
| Trận 2 | $15\,720$ |
| Trận 3 | $9\,560$ |

a) Làm tròn số khán giả của mỗi trận đến hàng nghìn.

b) Theo số đã làm tròn, trận nào có nhiều khán giả nhất?

::hint
**Kiến thức:** làm tròn đến hàng nghìn thì nhìn chữ số hàng trăm.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Làm tròn từng số trong bảng.
3. So sánh ba số đã làm tròn.

::solution
a) $12\,380\approx12\,000$ (hàng trăm là $3$). $15\,720\approx16\,000$ (hàng trăm là $7$). $9\,560\approx10\,000$ (hàng trăm là $5$).

b) So sánh $12\,000$, $16\,000$, $10\,000$: số lớn nhất là $16\,000$, của trận $2$.

**Đáp số.** a) $12\,000$; $16\,000$; $10\,000$. b) Trận $2$.
:::

:::exercise Thử thách
Một số có bốn chữ số, chữ số hàng nghìn là $4$. Làm tròn số đó đến hàng nghìn được $5\,000$.

a) Chữ số hàng trăm của số đó có thể là những chữ số nào?

b) Số nhỏ nhất và số lớn nhất như thế là những số nào?

::hint
**Kiến thức:** để từ $4$ nghìn tăng lên $5$ nghìn, chữ số hàng trăm phải từ $5$ trở lên.

**Gợi ý các bước:**
1. Chữ số hàng trăm phải thoả điều kiện nào?
2. Số nhỏ nhất: chọn các chữ số nhỏ nhất có thể. Số lớn nhất: chọn các chữ số lớn nhất có thể.

::solution
a) Chữ số hàng trăm phải từ $5$ trở lên, tức là $5$, $6$, $7$, $8$ hoặc $9$.

b) Số nhỏ nhất: hàng trăm là $5$, các hàng còn lại là $0$, được $4\,500$. Số lớn nhất: hàng trăm là $9$, các hàng còn lại là $9$, được $4\,999$.

**Kiểm tra.** $4\,500\approx5\,000$ và $4\,999\approx5\,000$.

**Đáp số.** a) $5$, $6$, $7$, $8$, $9$; b) $4\,500$ và $4\,999$.
:::

## Kiểm tra mini

:::quiz
::mc
Làm tròn số $6\,284$ đến hàng nghìn được
A. $6\,000$.
B. $7\,000$.
C. $6\,300$.
D. $6\,280$.
::key A
Chữ số hàng trăm là $2$, bé hơn $5$, nên giữ nguyên $6$ nghìn: $6\,000$. Phương án B là lỗi luôn làm tròn lên; phương án C, D là làm tròn đến hàng trăm và hàng chục.

::mc
Làm tròn số $38\,700$ đến hàng chục nghìn được
A. $30\,000$.
B. $39\,000$.
C. $40\,000$.
D. $38\,000$.
::key C
Chữ số hàng nghìn là $8$, từ $5$ trở lên, nên tăng $3$ chục nghìn lên $4$ chục nghìn: $40\,000$. Phương án A là lỗi luôn làm tròn xuống; phương án B là làm tròn đến hàng nghìn, phương án D là bỏ phần lẻ mà không làm tròn.

::mc
Số nào làm tròn đến hàng nghìn được $9\,000$?
A. $8\,490$.
B. $9\,500$.
C. $9\,600$.
D. $9\,400$.
::key D
$9\,400$ có hàng trăm là $4$, nên làm tròn xuống $9\,000$. $8\,490\approx8\,000$, còn $9\,500$ và $9\,600$ làm tròn lên $10\,000$.

::mc
Một thị trấn có $7\,960$ người. Làm tròn đến hàng nghìn, thị trấn có khoảng
A. $7\,000$ người.
B. $8\,000$ người.
C. $7\,960$ người.
D. $10\,000$ người.
::key B
Chữ số hàng trăm là $9$, từ $5$ trở lên, nên $7\,960\approx8\,000$. Phương án D là làm tròn đến hàng chục nghìn, không phải hàng nghìn.

::tf
Em xét số $24\,673$.
a) Làm tròn đến hàng nghìn được $25\,000$.
b) Làm tròn đến hàng chục nghìn được $20\,000$.
c) Làm tròn đến hàng chục nghìn được $30\,000$.
d) Khi làm tròn đến hàng nghìn, em nhìn chữ số hàng trăm.
::key Đ Đ S Đ
a) Đúng: hàng trăm là $6$, làm tròn lên. b) Đúng: hàng nghìn là $4$, bé hơn $5$, nên $24\,673\approx20\,000$. c) Sai: vì hàng nghìn là $4$, không làm tròn lên. d) Đúng: nhìn hàng ngay bên phải hàng nghìn.

::sa
Làm tròn số $5\,600$ đến hàng nghìn. Viết kết quả (không có dấu cách).
::key 6000
Chữ số hàng trăm là $6$, từ $5$ trở lên, nên $5\,600\approx6\,000$.

::sa
Sân vận động có $15\,280$ chỗ ngồi. Làm tròn đến hàng nghìn, sân có khoảng bao nhiêu nghìn chỗ?
::key 15
Chữ số hàng trăm là $2$, bé hơn $5$, nên $15\,280\approx15\,000$, tức khoảng $15$ nghìn chỗ.
:::
