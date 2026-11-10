---
title: Phép trừ (có nhớ) số có hai chữ số cho số có hai chữ số
description: Em học trừ hai số có hai chữ số khi hàng đơn vị không đủ trừ, ví dụ 52 − 27, bằng cách mượn 1 chục rồi trừ ở cả hai hàng.
minutes: 15
---

:::goals
- Đặt tính và trừ hai số có hai chữ số, ví dụ $52-27$.
- Nhớ bớt $1$ chục đã mượn ở hàng chục.
- Giải bài toán có lời văn bằng một phép trừ có nhớ.
:::

Trong thư viện lớp có $52$ quyển truyện. Các bạn đã mượn đi $27$ quyển. Hỏi thư viện còn lại bao nhiêu quyển truyện?

Ở bài trước, em đã trừ một số có một chữ số và biết mượn $1$ chục. Bài này dùng đúng cách đó, chỉ trừ thêm số chục.

## Cùng khám phá

Ta tách $52$ thành $5$ chục $2$ đơn vị, và $27$ thành $2$ chục $7$ đơn vị.

- Hàng đơn vị: $2$ không trừ được $7$. Ta đổi $1$ chục thành $10$ đơn vị, được $12$ đơn vị, rồi tính $12-7=5$.
- Hàng chục: $5$ chục bớt $1$ chục đã mượn còn $4$ chục. Rồi bớt $2$ chục: $4-2=2$.

Vậy còn $2$ chục và $5$ đơn vị, tức là $25$.

$$\begin{array}{r} 52\\ -\ 27\\ \hline 25 \end{array}$$

Em cũng có thể lùi trên tia số: từ $52$ lùi $20$ về $32$, rồi lùi $7$ về $25$.

:::graph Trên tia số: từ 52 lùi 20 về 32, rồi lùi 7 về 25
alt: Tia số từ 20 đến 55, đánh dấu các điểm 25, 32 và 52; đoạn từ 25 đến 52 được tô đậm
x: 20..55
y: -1..1
segment: (25, 0) (52, 0)
point: (25, 0) "25" below
point: (32, 0) "32" above
point: (52, 0) "52" below
:::

:::theorem Trừ có nhớ hai số có hai chữ số
Muốn tính $52-27$:
1. Đặt tính: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục.
2. Hàng đơn vị: $2$ không trừ được $7$, mượn $1$ chục. Tính $12-7=5$, viết $5$.
3. Hàng chục: $5-1-2=2$ (bớt $1$ chục đã mượn, rồi bớt $2$ chục). Viết $2$.
:::

Cách này đúng vì $1$ chục bằng $10$ đơn vị. Ta chỉ đổi cách viết, tổng số quyển truyện không đổi.

## Ví dụ

Ta bắt đầu với hai số nhỏ, hàng đơn vị thiếu ít.

:::example Tính $41-15$
**Lời giải.** Hàng đơn vị: $1$ không trừ được $5$, mượn $1$ chục được $11$. Tính $11-5=6$. Hàng chục: $4-1-1=2$:
$$\begin{array}{r} 41\\ -\ 15\\ \hline 26 \end{array}$$
Vậy $41-15=26$.
:::

Phép tính sau làm giống hệt, chỉ đổi số.

:::example Tính $63-28$
**Lời giải.** Hàng đơn vị: mượn $1$ chục, $13-8=5$. Hàng chục: $6-1-2=3$:
$$\begin{array}{r} 63\\ -\ 28\\ \hline 35 \end{array}$$
Vậy $63-28=35$.

**Kiểm tra.** Thử lại bằng phép cộng: $35+28=63$. Đúng.
:::

Bây giờ số bị trừ có hàng đơn vị là $0$, nên cần cẩn thận hơn.

:::example Tính $80-34$
**Lời giải.** Hàng đơn vị: $0$ không trừ được $4$, mượn $1$ chục được $10$. Tính $10-4=6$. Hàng chục: $8-1-3=4$:
$$\begin{array}{r} 80\\ -\ 34\\ \hline 46 \end{array}$$
Vậy $80-34=46$.
:::

Bây giờ em dùng phép trừ để giải một bài toán trong cuộc sống.

:::example Thư viện
Thư viện có $72$ quyển sách. Các bạn mượn đi $45$ quyển. Hỏi thư viện còn lại bao nhiêu quyển sách?

**Lời giải.** "Mượn đi", "còn lại" nghĩa là bớt đi, nên em làm phép trừ. Hàng đơn vị: mượn $1$ chục, $12-5=7$. Hàng chục: $7-1-4=2$:
$$72-45=27\ \text{(quyển)}.$$
Vậy thư viện còn lại $27$ quyển sách.
:::

:::warning Những lỗi em hay gặp
- **Lấy số nhỏ trừ số lớn.** Sai: $41-15=34$. Vì sao sai: em lấy $5-1=4$ thay vì mượn chục để tính $11-5$. Đúng: $41-15=26$.
- **Mượn chục mà không bớt ở hàng chục.** Sai: $41-15=36$. Vì sao sai: em tính $11-5=6$ nhưng ở hàng chục chỉ làm $4-1$, quên bớt $1$ chục đã mượn. Đúng: $41-15=26$.
- **Bài toán có lời văn quên đơn vị.** Sai: "Đáp số: $27$". Đúng: "Đáp số: $27$ quyển sách".
:::

## Thuật ngữ

:::terms
- phép trừ có nhớ | subtraction with regrouping
- số bị trừ | minuend
- số trừ | subtrahend
- hiệu | difference
- hàng chục | tens
- hàng đơn vị | ones
- đổi 1 chục lấy 10 đơn vị | exchange 1 ten for 10 ones
- đặt tính | set out the column
:::

## Tóm tắt

- Đặt tính thẳng cột, trừ từ hàng đơn vị sang hàng chục.
- Hàng đơn vị không đủ trừ: mượn $1$ chục, đổi thành $10$ đơn vị rồi trừ.
- Hàng chục: bớt $1$ chục đã mượn, rồi bớt số chục của số trừ.
- Ví dụ: $52-27$: $12-7=5$; $5-1-2=2$; kết quả $25$. Thử lại: $25+27=52$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính $74-36$.

::hint
**Kiến thức:** hàng đơn vị không đủ trừ thì mượn $1$ chục.

**Gợi ý các bước:**
1. Tính $14-6$.
2. Hàng chục: $7$ bớt $1$, rồi bớt $3$.

::solution
Hàng đơn vị: $4$ không trừ được $6$, mượn $1$ chục, $14-6=8$. Hàng chục: $7-1-3=3$. Vậy $74-36=38$.

**Đáp số.** $38$.
:::

:::exercise
Đặt tính rồi tính $85-29$.

::hint
**Kiến thức:** đặt hàng chục thẳng hàng chục, hàng đơn vị thẳng hàng đơn vị.

**Gợi ý các bước:**
1. Viết hai số thẳng cột.
2. Trừ hàng đơn vị (có mượn), rồi hàng chục.

::solution
$15-9=6$. Hàng chục: $8-1-2=5$. Vậy $85-29=56$.

**Đáp số.** $56$.
:::

:::exercise
Em hãy nhớ lại bài trước. Tính $61-8$.

::hint
**Kiến thức:** số có một chữ số chỉ có hàng đơn vị; vẫn mượn $1$ chục khi hàng đơn vị không đủ trừ.

**Gợi ý các bước:**
1. Tính $11-8$.
2. Hàng chục: $6$ bớt $1$.

::solution
$11-8=3$. Hàng chục: $6-1=5$. Vậy $61-8=53$.

**Đáp số.** $53$.
:::

:::exercise
Tính.

a) $93-47$.

b) $60-25$.

::hint
**Kiến thức:** cùng một cách làm cho cả hai phép tính.

**Gợi ý các bước:**
1. Mượn $1$ chục ở hàng đơn vị rồi trừ.
2. Hàng chục: bớt $1$ chục đã mượn rồi bớt số chục của số trừ.

::solution
a) $13-7=6$; $9-1-4=4$. Vậy $93-47=46$.

b) $10-5=5$; $6-1-2=3$. Vậy $60-25=35$.

**Đáp số.** a) $46$; b) $35$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống. Em hãy nói vì sao.

a) $71-34 \;\square\; 36$.

b) $56-19 \;\square\; 38$.

::hint
**Kiến thức:** tính hiệu trước, rồi so sánh hai số.

**Gợi ý các bước:**
1. Tính hiệu ở vế trái.
2. So sánh hàng chục, rồi hàng đơn vị.

::solution
a) $71-34=37$. Vì $37>36$ nên $71-34>36$.

b) $56-19=37$. Vì $37<38$ nên $56-19<38$.

**Đáp số.** a) Dấu $>$; b) Dấu $<$.
:::

:::exercise
Bạn Phương làm bài: $63-27=44$. Bạn Phương làm sai ở đâu? Em hãy sửa lại cho đúng.

::hint
**Kiến thức:** hàng đơn vị không đủ trừ thì mượn $1$ chục, không lấy số nhỏ trừ số lớn.

**Gợi ý các bước:**
1. Tính $3-7$ có được không?
2. Làm lại với $13-7$.

::solution
Bạn Phương lấy $7-3=4$, đó là sai vì phải lấy $3$ trừ $7$. Mượn $1$ chục: $13-7=6$, hàng chục $6-1-2=3$. Vậy $63-27=36$.

**Đáp số.** Bạn Phương lấy số lớn trừ số nhỏ; đúng là $36$.
:::

:::exercise
Sân trường có $82$ bạn đang chơi. Có $37$ bạn về lớp. Hỏi sân trường còn lại bao nhiêu bạn?

::hint
**Kiến thức:** "về lớp", "còn lại" nghĩa là bớt đi: dùng phép trừ.

**Gợi ý các bước:**
1. Đề cho biết gì? Có $82$ bạn, $37$ bạn về lớp. Đề hỏi gì?
2. Tính $82-37$ rồi ghi đáp số có đơn vị.

::solution
Hàng đơn vị: mượn $1$ chục, $12-7=5$. Hàng chục: $8-1-3=4$. Số bạn còn lại là:
$$82-37=45\ \text{(bạn)}.$$

**Đáp số.** $45$ bạn.
:::

:::exercise Thử thách
Tìm chữ số thích hợp điền vào ô trống: $7\square-28=45$.

::hint
**Kiến thức:** hàng đơn vị của hiệu là $5$. Mượn $1$ chục thì hàng đơn vị là $10+\square$.

**Gợi ý các bước:**
1. $(10+\square)-8$ phải bằng $5$.
2. Thử lại bằng phép trừ.

::solution
$(10+\square)-8=5$ nên $10+\square=13$, suy ra $\square=3$. Thử lại: $73-28=45$ (vì $13-8=5$ và $7-1-2=4$).

**Đáp số.** Chữ số cần điền là $3$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $73-38$ là
A. $45$.
B. $35$.
C. $111$.
D. $25$.
::key B
$13-8=5$ và $7-1-3=3$, nên $73-38=35$. Phương án A quên bớt $1$ chục đã mượn, C là $73+38$.

::mc
Khi tính $61-25$, ở hàng chục em tính
A. $6-1-2$.
B. $6-2$.
C. $6+1-2$.
D. $6-1+2$.
::key A
Hàng đơn vị đã mượn $1$ chục nên hàng chục phải bớt $1$ rồi bớt $2$: $6-1-2=3$. Kết quả $61-25=36$.

::mc
Phép tính nào có kết quả bằng $45$?
A. $82-37$.
B. $83-37$.
C. $81-37$.
D. $82-36$.
::key A
$82-37=45$. Các phép tính khác lần lượt bằng $46$, $44$, $46$.

::mc
Cửa hàng có $62$ chiếc bút, bán đi $38$ chiếc. Cửa hàng còn lại bao nhiêu chiếc bút?
A. $36$ chiếc.
B. $34$ chiếc.
C. $100$ chiếc.
D. $24$ chiếc.
::key D
"Bán đi", "còn lại" là bớt đi: $62-38=24$. Phương án A lấy số lớn trừ số nhỏ ở hàng đơn vị, B quên bớt $1$ chục đã mượn, C là $62+38$.

::tf
Em xét phép trừ $64-28$.
a) Hàng đơn vị: $4$ không trừ được $8$.
b) Mượn $1$ chục thì hàng đơn vị có $14$.
c) Hàng chục: $6-1-2=3$.
d) $64-28=46$.
::key Đ Đ Đ S
a) Đúng: $4<8$. b) Đúng: $10+4=14$. c) Đúng: $6-1-2=3$. d) Sai: $14-8=6$ và $3$ chục, được $36$.

::sa
Tính $81-46$.
::key 35
$11-6=5$, hàng chục $8-1-4=3$. Vậy $81-46=35$.

::sa
Bể có $73$ con cá, người ta vớt ra $29$ con cá. Bể còn lại bao nhiêu con cá?
::key 44
$13-9=4$, hàng chục $7-1-2=4$. Vậy $73-29=44$ (con cá).
:::
