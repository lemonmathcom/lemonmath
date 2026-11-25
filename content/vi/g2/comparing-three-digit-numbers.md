---
title: So sánh các số có ba chữ số
description: Em so sánh hai số có ba chữ số bằng cách so sánh từng hàng từ trái sang phải, dùng các dấu lớn hơn, bé hơn, bằng và xếp các số theo thứ tự.
minutes: 15
---

:::goals
- So sánh hai số có ba chữ số bằng cách so sánh từng hàng từ trái sang phải.
- Dùng đúng các dấu $>$, $<$, $=$.
- Sắp xếp các số có ba chữ số từ bé đến lớn và từ lớn đến bé.
:::

Trường A có $428$ học sinh. Trường B có $482$ học sinh. Trường nào đông học sinh hơn?

Em đã biết viết số có ba chữ số thành tổng các trăm, chục và đơn vị. Nhờ vậy, so sánh hai số như thế cũng không khó: ta chỉ cần biết nhìn vào đâu trước. Em sẽ thấy vì sao phải bắt đầu từ hàng trăm.

## Cùng khám phá

Ta viết hai số thành tổng:
$$428=400+20+8,\qquad 482=400+80+2.$$

Hai số đều có $4$ trăm nên hàng trăm chưa phân biệt được. Ta so sánh tiếp hàng chục: $2$ chục bé hơn $8$ chục. Vậy $428<482$, tức là trường B đông học sinh hơn.

Tia số cũng cho ta thấy điều đó. Số nào đứng bên phải thì lớn hơn:

:::graph Trên tia số: 378 đứng bên phải 352 nên 378 lớn hơn 352
alt: Tia số từ 340 đến 390, đánh dấu các điểm 352 và 378; điểm 378 nằm bên phải điểm 352
x: 340..390
y: -1..1
segment: (340, 0) (390, 0)
point: (352, 0) "352" below
point: (378, 0) "378" below
:::

:::theorem Cách so sánh hai số có ba chữ số
So sánh từng hàng từ trái sang phải:
1. So sánh hàng trăm. Số nào có nhiều trăm hơn thì lớn hơn.
2. Nếu hàng trăm bằng nhau, so sánh hàng chục.
3. Nếu hàng chục cũng bằng nhau, so sánh hàng đơn vị.
4. Nếu cả ba hàng bằng nhau thì hai số bằng nhau.
:::

Vì sao phải xét hàng trăm trước? Vì hàng trăm có giá trị lớn nhất. Chỉ riêng $1$ trăm đã là $10$ chục, nhiều hơn $9$ chục. Vì thế khi hàng trăm đã khác nhau, số chục và số đơn vị đi kèm không làm đổi được kết quả.

## Ví dụ

Trước hết, hai số khác nhau ngay ở hàng trăm. Chỉ cần nhìn hàng trăm là xong.

:::example So sánh hàng trăm
So sánh $476$ và $534$.

**Lời giải.** Hàng trăm: $4$ và $5$. Vì $4<5$ nên số thứ nhất bé hơn, không cần xét hàng chục và hàng đơn vị:
$$476<534.$$
Vậy $476<534$.
:::

Nếu hai số có cùng hàng trăm thì sao? Ta so tiếp hàng chục.

:::example So sánh hàng chục
So sánh $352$ và $378$.

**Lời giải.** Hàng trăm: $3$ và $3$, bằng nhau. Hàng chục: $5$ và $7$. Vì $5<7$ nên:
$$352<378.$$
Vậy $352<378$.
:::

Còn khi hàng trăm và hàng chục đều giống nhau, ta phải nhìn đến hàng đơn vị.

:::example So sánh hàng đơn vị
So sánh $641$ và $647$.

**Lời giải.** Hàng trăm: $6$ và $6$. Hàng chục: $4$ và $4$. Hàng đơn vị: $1$ và $7$. Vì $1<7$ nên:
$$641<647.$$
Vậy $641<647$.
:::

Với nhiều số, ta cũng so sánh từng hàng như vậy để xếp thứ tự.

:::example Xếp thứ tự
Xếp các số $325, 235, 253$ từ bé đến lớn.

**Lời giải.** Hàng trăm: $3, 2, 2$. Số $325$ có hàng trăm lớn nhất. Hai số còn lại có hàng trăm bằng nhau, so tiếp hàng chục: $3$ và $5$, nên $235<253$:
$$235<253<325.$$
Vậy thứ tự từ bé đến lớn là $235, 253, 325$.
:::

:::warning Những lỗi em hay gặp
- **So sánh hàng đơn vị trước.** Sai: "$349>351$ vì $9>1$". Vì sao sai: ta luôn bắt đầu từ hàng trăm. Hàng trăm $3$ và $3$ bằng nhau, nên xét tiếp hàng chục: $4<5$. Đúng: $349<351$.
- **Quên so sánh hàng tiếp theo khi hàng trước bằng nhau.** Sai: "$352=358$ vì cùng $35$". Vì sao sai: hai hàng đầu giống nhau, nhưng hàng đơn vị thì khác: $2<8$. Đúng: $352<358$.
- **Quay sai đầu nhọn của dấu.** Sai: $476>534$. Vì sao sai: số đứng trước là số bé hơn, mà đầu nhọn phải quay về số bé hơn. Đúng: $476<534$.
:::

## Thuật ngữ

:::terms
- so sánh | compare
- lớn hơn | greater than
- bé hơn | less than
- bằng | equal to
- hàng trăm | hundreds place
- từ bé đến lớn | in order, smallest first
- từ lớn đến bé | in order, largest first
:::

## Tóm tắt

- So sánh từng hàng từ trái sang phải: trăm, rồi chục, rồi đơn vị.
- Hàng nào khác nhau đầu tiên thì quyết định số nào lớn hơn.
- Đầu nhọn của dấu $>$ hoặc $<$ quay về số bé hơn.
- Xếp từ bé đến lớn: bắt đầu từ số bé nhất.
Quay lại câu hỏi đầu bài: trường nào đông học sinh hơn? Chỉ cần so từng hàng, bắt đầu từ hàng trăm, là có câu trả lời. Em nhớ hàng khác nhau đầu tiên sẽ quyết định, rồi thử sức ở phần luyện tập nhé.

## Luyện tập

Mỗi bài có phần kiến thức cần nhớ và gợi ý cách bắt đầu. Em cứ tự làm trước. Làm chưa đúng cũng không sao, vì như thế em biết chỗ nào cần xem lại. Xong rồi hãy bấm xem lời giải.

:::exercise
Điền dấu $>$, $<$ hoặc $=$.

a) $243\;\square\;351$.

b) $780\;\square\;620$.

c) $505\;\square\;505$.

::hint
**Kiến thức:** so sánh hàng trăm trước.

**Gợi ý các bước:**
1. Nhìn chữ số hàng trăm của hai số.
2. Nếu khác nhau thì chọn dấu ngay.

::solution
a) So sánh $243$ và $351$: hàng trăm $2<3$ nên $243<351$.

b) So sánh $780$ và $620$: hàng trăm $7>6$ nên $780>620$.

c) Hai số $505$ và $505$ có các hàng trăm, chục, đơn vị đều giống nhau nên $505=505$.

Vậy ta điền: $243<351$; $780>620$; $505=505$.

**Đáp số.** a) $<$; b) $>$; c) $=$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$.

a) $352\;\square\;358$.

b) $910\;\square\;190$.

c) $467\;\square\;427$.

::hint
**Kiến thức:** hàng nào khác nhau đầu tiên (từ trái sang phải) thì quyết định.

**Gợi ý các bước:**
1. So sánh hàng trăm.
2. Nếu bằng nhau thì so sánh hàng chục, rồi hàng đơn vị.

::solution
a) So sánh $352$ và $358$: hàng trăm $3=3$, hàng chục $5=5$, hàng đơn vị $2<8$ nên $352<358$.

b) So sánh $910$ và $190$: hàng trăm $9>1$ nên $910>190$.

c) So sánh $467$ và $427$: hàng trăm $4=4$, hàng chục $6>2$ nên $467>427$.

Vậy ta điền: $352<358$; $910>190$; $467>427$.

**Đáp số.** a) $<$; b) $>$; c) $>$.
:::

:::exercise
Em nhớ lại bài trước. Viết $428$ và $482$ thành tổng các trăm, chục, đơn vị rồi so sánh hai số.

::hint
**Kiến thức:** $428=400+20+8$.

**Gợi ý các bước:**
1. Viết từng số thành tổng.
2. So sánh hàng trăm, rồi hàng chục.

::solution
Viết hai số thành tổng các trăm, chục, đơn vị:
$$428=400+20+8,\qquad 482=400+80+2.$$

Hai số có hàng trăm bằng nhau ($4$ trăm).

Ta so sánh tiếp hàng chục: $2$ chục $<$ $8$ chục.

Vậy $428<482$.

**Đáp số.** $428<482$.
:::

:::exercise
Sắp xếp các số.

a) Từ bé đến lớn: $450, 405, 540, 504$.

b) Từ lớn đến bé: $899, 989, 998$.

::hint
**Kiến thức:** so sánh hàng trăm, rồi hàng chục, rồi hàng đơn vị.

**Gợi ý các bước:**
1. Chọn số bé nhất (hoặc lớn nhất) trước.
2. Chọn tiếp từng số.

::solution
a) Cả bốn số đều có hàng trăm là $4$ hoặc $5$.

Các số có hàng trăm $4$ là $450$ và $405$. Hàng chục $0<5$ nên $405<450$.

Các số có hàng trăm $5$ là $540$ và $504$. Hàng chục $0<4$ nên $504<540$.

Vì $4<5$ nên $405<450<504<540$.

b) Hàng trăm của ba số $899$, $989$, $998$ lần lượt là $8$, $9$, $9$. Số $899$ có hàng trăm bé nhất nên $899$ bé nhất.

Hai số $989$ và $998$ có hàng trăm bằng nhau ($9$), so tiếp hàng chục: $8<9$ nên $989<998$.

Vậy từ lớn đến bé là $998>989>899$.

**Đáp số.** a) $405, 450, 504, 540$; b) $998, 989, 899$.
:::

:::exercise
Số nào lớn nhất trong ba số $376, 367, 673$? Vì sao?

::hint
**Kiến thức:** so sánh hàng trăm trước.

**Gợi ý các bước:**
1. Viết hàng trăm của từng số.
2. Chọn số có hàng trăm lớn nhất.

::solution
Ta so sánh hàng trăm của ba số.

Hàng trăm của $376$, $367$, $673$ lần lượt là $3$, $3$, $6$.

Vì $6>3$ nên $673$ lớn hơn cả hai số còn lại.

Vậy số lớn nhất là $673$, vì số này có hàng trăm lớn nhất.

**Đáp số.** $673$.
:::

:::exercise
Nam nói: "$349>351$ vì $9>1$." Nam sai ở đâu? Sửa lại cho đúng.

::hint
**Kiến thức:** phải so sánh hàng trăm trước.

**Gợi ý các bước:**
1. So sánh hàng trăm của hai số.
2. Nếu bằng nhau, so sánh hàng chục.

::solution
Ta so sánh $349$ và $351$ từ hàng cao nhất, tức là từ hàng trăm.

Hàng trăm: $3=3$.

Hàng chục: $4<5$.

Do đó $349<351$.

Nam sai vì đã so sánh hàng đơn vị ($9>1$) trước. Khi so sánh các số có ba chữ số, ta phải so sánh từ hàng trăm, rồi đến hàng chục, cuối cùng mới đến hàng đơn vị.

Vậy Nam nói sai; câu đúng là $349<351$.

**Đáp số.** $349<351$.
:::

:::exercise
Trường A có $428$ học sinh, trường B có $482$ học sinh. Trường nào đông học sinh hơn?

::hint
**Kiến thức:** số lớn hơn thì nhiều hơn.

**Gợi ý các bước:**
1. Đề cho biết gì? $428$ học sinh và $482$ học sinh. Đề hỏi gì? Trường nào đông hơn.
2. So sánh $428$ và $482$.

::solution
Bài giải

Để biết trường nào đông học sinh hơn, ta so sánh $428$ và $482$.

Hai số có hàng trăm bằng nhau ($4$ trăm), hàng chục $2<8$ nên $428<482$.

Vậy trường B ($482$ học sinh) đông học sinh hơn.

**Đáp số.** Trường B đông học sinh hơn.
:::

:::exercise Thử thách
Tìm chữ số thích hợp thay cho $\square$ để $475<4\square5<495$.

::hint
**Kiến thức:** hàng trăm đều là $4$; xét hàng chục.

**Gợi ý các bước:**
1. Hàng chục phải lớn hơn $7$ và bé hơn $9$, hoặc xét thêm trường hợp bằng nhau.
2. Thử các chữ số $7, 8, 9$.

::solution
Số $4\square5$ phải lớn hơn $475$ và bé hơn $495$. Hai số này đều có hàng trăm là $4$ và hàng đơn vị là $5$, nên ta thử các chữ số ở hàng chục.

Thử $\square=7$: $475$ không lớn hơn $475$, không thoả mãn.

Thử $\square=8$: $485$ lớn hơn $475$ và bé hơn $495$, thoả mãn.

Thử $\square=9$: $495$ không bé hơn $495$, không thoả mãn.

Các chữ số bé hơn $7$ cho số bé hơn $475$ nên cũng không thoả mãn.

Kiểm tra: $475<485<495$. Đúng.

Vậy chữ số thích hợp là $8$.

**Đáp số.** $\square=8$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Dấu thích hợp điền vào $365\;\square\;358$ là
A. $>$.
B. $<$.
C. $=$.
D. Không so sánh được.
::key A
Hàng trăm bằng nhau, hàng chục $6>5$ nên $365>358$. Phương án B là lỗi chỉ nhìn hàng đơn vị.

::mc TH
Số nào lớn nhất trong các số $504, 540, 450, 405$?
A. $504$.
B. $540$.
C. $450$.
D. $405$.
::key B
Hàng trăm lớn nhất là $5$, ở $504$ và $540$; hàng chục $4>0$ nên $540$ lớn nhất.

::mc TH
Số nào bé nhất trong các số $318, 381, 183, 138$?
A. $318$.
B. $381$.
C. $183$.
D. $138$.
::key D
Hàng trăm bé nhất là $1$, ở $183$ và $138$; hàng chục $3<8$ nên $138$ bé nhất.

::mc TH
Số nào lớn hơn $628$ và bé hơn $640$?
A. $620$.
B. $635$.
C. $645$.
D. $628$.
::key B
$635>628$ (hàng chục $3>2$) và $635<640$ (hàng chục $3<4$). Phương án C lớn hơn $640$.

::tf TH TH TH TH
Em so sánh các số.
a) $700>699$.
b) $456<465$.
c) $349>351$.
d) $510=501$.
::key Đ Đ S S
a) Đúng: hàng trăm $7>6$. b) Đúng: hàng chục $5<6$. c) Sai: hàng chục $4<5$ nên $349<351$. d) Sai: hàng chục $1>0$ nên $510>501$.

::sa TH
Số lớn nhất trong các số $276, 267, 726$ là số nào?
::key 726
Hàng trăm $7$ là lớn nhất.

::sa TH
Số bé nhất trong các số $482, 428, 842$ là số nào?
::key 428
Hàng trăm bé nhất là $4$ ở $482$ và $428$; hàng chục $2<8$.
:::
