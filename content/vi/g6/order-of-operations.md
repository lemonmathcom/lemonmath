---
title: Thứ tự thực hiện các phép tính
description: Thứ tự thực hiện phép tính trong biểu thức có hoặc không có dấu ngoặc: luỹ thừa, nhân chia, cộng trừ; ngoặc tròn, ngoặc vuông, ngoặc nhọn.
minutes: 40
---

:::goals
- Biết biểu thức là gì và tính giá trị của biểu thức có nhiều phép tính.
- Thực hiện đúng thứ tự: luỹ thừa, rồi nhân và chia, rồi cộng và trừ, từ trái sang phải.
- Dùng đúng các dấu ngoặc tròn, ngoặc vuông, ngoặc nhọn để đổi thứ tự thực hiện.
- Viết biểu thức cho một bài toán có lời văn rồi tính giá trị.
:::

Giả sử bạn mua $1$ quyển vở giá $12$ nghìn đồng và $3$ cây bút, mỗi cây giá $7$ nghìn đồng. Tổng số tiền được viết là $12+3\times7$. An tính: $12+3=15$ rồi $15\times7=105$. Bình tính: $3\times7=21$ rồi $12+21=33$. Hai bạn cho hai kết quả khác nhau. Kết quả nào mới đúng với số tiền phải trả, và vì sao?

## Biểu thức và thứ tự thực hiện phép tính

**Khám phá.** Hãy kiểm tra bằng đời sống: $3$ cây bút giá $7$ nghìn đồng mỗi cây tốn $3\times7=21$ nghìn đồng, cộng thêm quyển vở $12$ nghìn đồng được $33$ nghìn đồng. Vậy Bình đúng. Trong biểu thức $12+3\times7$, phép nhân $3\times7$ là một khoản tiền riêng, nên phải tính trước khi cộng.

Một dãy các số nối với nhau bằng các phép tính (có thể có dấu ngoặc) gọi là **biểu thức**. Kết quả sau khi thực hiện các phép tính gọi là **giá trị** của biểu thức. Để mọi người cùng tính ra một kết quả, ta thống nhất thứ tự thực hiện các phép tính.

:::theorem Biểu thức không có dấu ngoặc
- Nếu biểu thức chỉ có phép cộng và phép trừ, hoặc chỉ có phép nhân và phép chia, ta tính từ trái sang phải.
- Nếu biểu thức có luỹ thừa, phép nhân, phép chia, phép cộng, phép trừ, ta thực hiện theo thứ tự:
  1. luỹ thừa;
  2. nhân và chia (từ trái sang phải);
  3. cộng và trừ (từ trái sang phải).
:::

:::theorem Biểu thức có dấu ngoặc
Ta thực hiện các phép tính trong ngoặc trước, theo thứ tự: ngoặc tròn $(\ )$, rồi ngoặc vuông $[\ ]$, rồi ngoặc nhọn $\{\ \}$. Trong mỗi ngoặc, ta tính như quy tắc ở trên.
:::

**Vì sao thứ tự như vậy?** Phép nhân là phép cộng lặp lại, nên $3\times7$ là một "khoản" gộp sẵn, phải tính ra trước khi cộng với số khác. Luỹ thừa là phép nhân lặp lại, nên còn được ưu tiên hơn. Còn dấu ngoặc dùng để gom một nhóm phép tính thành một số, khi ta muốn nhóm đó được tính trước. Chỉ có cộng, trừ (hoặc chỉ nhân, chia) thì các phép tính cùng "cấp", ta tính theo thứ tự xuất hiện, từ trái sang phải.

## Ví dụ

:::example Chỉ có cộng và trừ
Tính $48-12+8$.

**Lời giải.** Chỉ có phép cộng và trừ nên tính từ trái sang phải: $48-12+8=36+8=44$.
:::

:::example Có luỹ thừa, nhân và cộng
Tính $2+3\times4^2$.

**Lời giải.** Luỹ thừa trước: $4^2=16$. Rồi nhân: $3\times16=48$. Cuối cùng cộng: $2+48=50$.
:::

:::example Nhân, chia, luỹ thừa và trừ
Tính $100:5\times2-3^2$.

**Lời giải.** Luỹ thừa trước: $3^2=9$. Nhân, chia từ trái sang phải: $100:5=20$ rồi $20\times2=40$. Cuối cùng trừ: $40-9=31$.
:::

:::example Ngoặc lồng nhau
Tính $100-\{5\times[4+(12-8)]\}$.

**Lời giải.** Làm ngoặc tròn trước: $12-8=4$. Rồi ngoặc vuông: $4+4=8$. Rồi ngoặc nhọn: $5\times8=40$. Cuối cùng: $100-40=60$.
:::

Bài sau có lời văn, nên ta đi từng bước *Hiểu đề, Tìm cách giải, Giải, Nhìn lại*.

:::example Tiền thối
Giả sử cô Lan mua $4$ hộp bánh giá $25$ nghìn đồng một hộp và $3$ hộp kẹo giá $18$ nghìn đồng một hộp. Cô đưa cho người bán $200$ nghìn đồng. Cô được thối lại bao nhiêu tiền?

**Lời giải.**

*Hiểu đề.* Cần tính tổng tiền mua bánh và kẹo, rồi lấy $200$ nghìn đồng trừ đi tổng đó.

*Tìm cách giải.* Tiền bánh là $4\times25$, tiền kẹo là $3\times18$. Tiền thối là $200-(4\times25+3\times18)$.

*Giải.* Ta có $200-(4\times25+3\times18)$. Trong ngoặc, nhân trước: $4\times25=100$ và $3\times18=54$. Rồi cộng: $100+54=154$. Cuối cùng $200-154=46$. Vậy cô Lan được thối lại $46$ nghìn đồng.

*Nhìn lại.* Ta thử trừ lần lượt từng khoản: $200-4\times25-3\times18=200-100-54=46$. Hai cách cho cùng kết quả, vì trừ cả tổng cũng như trừ từng khoản. Dấu ngoặc trong cách đầu là bắt buộc: nếu bỏ ngoặc thành $200-4\times25+3\times18$ thì ta được $154$, không phải $46$.
:::

:::warning Những lỗi bạn hay gặp
- **Cộng trước nhân.** Sai: $12+3\times7=15\times7=105$. Vì sao sai: phép nhân phải được tính trước phép cộng. Đúng: $12+21=33$.
- **Không tính từ trái sang phải.** Sai: $48-12+8=48-20=28$. Vì sao sai: cộng và trừ cùng cấp, tính theo thứ tự từ trái sang phải. Đúng: $36+8=44$.
- **Làm sai với luỹ thừa.** Sai: $2\times3^2=6^2=36$. Vì sao sai: luỹ thừa chỉ áp dụng cho số $3$, tính trước. Đúng: $2\times9=18$.
- **Bỏ qua dấu ngoặc.** Sai: $20-(6+4)=20-6+4=18$. Vì sao sai: phải tính trong ngoặc trước. Đúng: $20-10=10$.
:::

## Thuật ngữ

:::terms
- biểu thức | expression
- giá trị của biểu thức | value of an expression
- thứ tự thực hiện phép tính | order of operations
- luỹ thừa | power
- phép nhân | multiplication
- phép chia | division
- ngoặc tròn | round brackets
- ngoặc vuông | square brackets
- ngoặc nhọn | curly brackets
- từ trái sang phải | from left to right
:::

## Tóm tắt

- Không có ngoặc: luỹ thừa trước, rồi nhân và chia, rồi cộng và trừ; các phép cùng cấp tính từ trái sang phải.
- Có ngoặc: ngoặc tròn $(\ )$, rồi ngoặc vuông $[\ ]$, rồi ngoặc nhọn $\{\ \}$.
- Muốn đổi thứ tự tính, ta thêm dấu ngoặc; muốn bài toán có lời văn, hãy viết biểu thức rồi mới tính.

## Luyện tập

Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
**Bài 1.** Tính: a) $60-25+15$; b) $72:8\times3$.

::hint
**Kiến thức:** cộng, trừ cùng cấp; nhân, chia cùng cấp: tính từ trái sang phải.

**Gợi ý các bước:**
1. Thực hiện phép tính đầu tiên bên trái.
2. Rồi phép tính thứ hai.

::solution
a) $60-25+15=35+15=50$. b) $72:8\times3=9\times3=27$.

**Đáp số.** a) $50$; b) $27$.
:::

:::exercise
**Bài 2.** Tính $5+4\times6-10$.

::hint
**Kiến thức:** nhân trước, rồi cộng và trừ từ trái sang phải.

**Gợi ý các bước:**
1. Tính $4\times6$.
2. Cộng, rồi trừ.

::solution
$5+4\times6-10=5+24-10=29-10=19$.

**Đáp số.** $19$.
:::

:::exercise
**Bài 3.** Tính $3\times2^3+5^2$.

::hint
**Kiến thức:** luỹ thừa trước, rồi nhân, rồi cộng.

**Gợi ý các bước:**
1. Tính $2^3$ và $5^2$.
2. Nhân, rồi cộng.

::solution
$3\times2^3+5^2=3\times8+25=24+25=49$.

**Đáp số.** $49$.
:::

:::exercise
**Bài 4.** Tính $36:(2+4)\times3$.

::hint
**Kiến thức:** ngoặc trước; sau đó chia và nhân từ trái sang phải.

**Gợi ý các bước:**
1. Tính trong ngoặc.
2. Chia, rồi nhân.

::solution
$36:(2+4)\times3=36:6\times3=6\times3=18$.

**Đáp số.** $18$.
:::

:::exercise
**Bài 5.** Tính: a) $2\times[30-(4+6)]$; b) $100-\{3\times[5+(9-4)]\}$.

::hint
**Kiến thức:** ngoặc tròn, rồi ngoặc vuông, rồi ngoặc nhọn.

**Gợi ý các bước:**
1. Tính ngoặc tròn trong cùng.
2. Tính lần lượt ra ngoài.

::solution
a) $2\times[30-10]=2\times20=40$. b) $9-4=5$; $5+5=10$; $3\times10=30$; $100-30=70$.

**Đáp số.** a) $40$; b) $70$.
:::

:::exercise
**Bài 6.** Giả sử mẹ mua $5$ hộp màu giá $28$ nghìn đồng một hộp và $6$ quyển vở giá $9$ nghìn đồng một quyển, rồi đưa cho người bán $200$ nghìn đồng. Hỏi mẹ được thối lại bao nhiêu tiền?

::hint
**Kiến thức:** tiền thối $=$ tiền đưa $-$ tổng tiền mua.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Viết biểu thức $200-(5\times28+6\times9)$.
3. Tính trong ngoặc rồi trừ.

::solution
$200-(5\times28+6\times9)=200-(140+54)=200-194=6$ (nghìn đồng).

**Đáp số.** $6$ nghìn đồng.
:::

:::exercise
**Bài 7.** Lớp $6$A có $36$ học sinh xếp thành các hàng, mỗi hàng $9$ bạn. Mỗi hàng được phát $2$ lá cờ và cả lớp được phát thêm $3$ lá cờ dùng chung. Hỏi có tất cả bao nhiêu lá cờ?

::hint
**Kiến thức:** số hàng $=36:9$; viết một biểu thức rồi tính.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Tính số hàng.
3. Nhân với số cờ mỗi hàng rồi cộng $3$.

::solution
Biểu thức: $36:9\times2+3=4\times2+3=8+3=11$ (lá cờ).

**Đáp số.** $11$ lá cờ.
:::

:::exercise
**Bài 8.** Thêm dấu ngoặc để được đẳng thức đúng: a) $5+3\times4=32$; b) $20-6+4=10$.

::hint
**Kiến thức:** dấu ngoặc làm một nhóm phép tính được tính trước.

**Gợi ý các bước:**
1. Muốn $5+3\times4$ ra $32$, nhóm nào phải tính trước?
2. Muốn $20-6+4$ ra $10$, nhóm nào phải tính trước?

::solution
a) $(5+3)\times4=8\times4=32$. b) $20-(6+4)=20-10=10$.

**Đáp số.** a) $(5+3)\times4=32$; b) $20-(6+4)=10$.
:::

:::exercise
**Bài 9.** Tính $25\times4\times13-3^3$.

::hint
**Kiến thức:** dùng tính chất giao hoán, kết hợp để tính nhanh; luỹ thừa trước.

**Gợi ý các bước:**
1. Tính $25\times4$ trước.
2. Tính $3^3$.
3. Trừ.

::solution
$25\times4\times13-3^3=100\times13-27=1300-27=1273$.

**Đáp số.** $1273$.
:::

:::exercise Thử thách
**Bài 10.** Chỉ dùng bốn chữ số $4$ (mỗi chữ số dùng một lần), các phép tính $+$, $-$, $\times$, $:$ và dấu ngoặc, hãy viết biểu thức có giá trị: a) $5$; b) $7$.

::hint
**Kiến thức:** ngoặc làm đổi thứ tự thực hiện; $4:4=1$.

**Gợi ý các bước:**
1. Câu a: thử tạo ra $20$ rồi chia cho $4$.
2. Câu b: thử $4+4-1$ với $1=4:4$.

::solution
a) $(4\times4+4):4=(16+4):4=20:4=5$. b) $4+4-4:4=8-1=7$.

**Đáp số.** a) $(4\times4+4):4=5$; b) $4+4-4:4=7$ (có thể có đáp án khác).
:::

## Kiểm tra mini

:::quiz
::mc
Giá trị của $12+3\times7$ là
A. $105$.
B. $36$.
C. $22$.
D. $33$.
::key D
Nhân trước: $3\times7=21$, rồi $12+21=33$. Phương án A cộng trước, C cộng $12+3+7$, B lấy $12\times3$.

::mc
Giá trị của $48-12+8$ là
A. $44$.
B. $28$.
C. $52$.
D. $68$.
::key A
Tính từ trái sang phải: $36+8=44$. Phương án B cộng $12+8$ trước, C là $48+12-8$, D là $48+12+8$.

::mc
Giá trị của $2\times3^2$ là
A. $36$.
B. $18$.
C. $12$.
D. $11$.
::key B
Luỹ thừa trước: $3^2=9$, rồi $2\times9=18$. Phương án A tính $(2\times3)^2$, C là $2\times3\times2$, D là $2+9$.

::mc
Giá trị của $36:(2+4)\times3$ là
A. $2$.
B. $30$.
C. $18$.
D. $6$.
::key C
Ngoặc trước: $36:6\times3=6\times3=18$. Phương án A là $36:(6\times3)$, B bỏ qua ngoặc, D quên nhân $3$.

::tf
Về thứ tự thực hiện các phép tính.
a) $12+3\times7=33$.
b) $2\times3^2=36$.
c) $20-(6+4)=10$.
d) $48-12+8=28$.
::key Đ S Đ S
a) Đúng. b) Sai: $2\times9=18$. c) Đúng: $20-10=10$. d) Sai: từ trái sang phải được $44$.

::sa
Tính $3\times2^3+5^2$.
::key 49
$3\times8+25=24+25=49$.

::sa
Tính $2\times[30-(4+6)]$.
::key 40
$2\times[30-10]=2\times20=40$.
:::

