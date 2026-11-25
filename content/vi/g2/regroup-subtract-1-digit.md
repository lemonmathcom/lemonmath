---
title: Phép trừ (có nhớ) số có hai chữ số cho số có một chữ số
description: Em học trừ số có hai chữ số cho số có một chữ số khi hàng đơn vị không đủ trừ, ví dụ 42 − 6, bằng cách đổi 1 chục thành 10 đơn vị.
minutes: 15
---

:::goals
- Hiểu vì sao khi hàng đơn vị không đủ trừ thì phải đổi $1$ chục thành $10$ đơn vị.
- Đặt tính theo cột dọc và tính đúng, ví dụ $42-6$.
- Giải bài toán có lời văn bằng một phép trừ có nhớ.
:::

Cô giáo có $42$ cái bút chì. Cô phát cho các bạn $6$ cái. Hỏi cô còn lại bao nhiêu cái bút chì?

Hàng đơn vị của số bút chì không đủ để cô phát đi. Vậy bớt kiểu gì đây? Em đã biết cộng có nhớ: đơn vị nhiều quá thì gộp thành chục. Trừ có nhớ làm ngược lại: đơn vị thiếu thì đổi một chục ra đơn vị. Học xong, em sẽ trả lời được câu hỏi của cô giáo.

## Cùng khám phá

Ta thử xếp $42$ cái bút chì thành $4$ chục và $2$ đơn vị. Cô cần phát đi $6$ cái, tức là phải bớt $6$ đơn vị.

- Hàng đơn vị chỉ có $2$ đơn vị, mà cần bớt $6$. Như vậy là không đủ để bớt.
- Vậy ta lấy $1$ chục đổi thành $10$ đơn vị. Hàng chục còn $3$ chục, hàng đơn vị thành $2+10=12$ đơn vị.
- Bây giờ bớt được rồi: $12-6=6$. Hàng chục vẫn còn $3$.

Gộp lại, còn $3$ chục và $6$ đơn vị, tức là $36$. Đó cũng là câu trả lời cho cô giáo.

$$\begin{array}{r} 42\\ -\ \ 6\\ \hline 36 \end{array}$$

Cách khác là đi lùi trên tia số. Từ $42$ lùi $2$ bước thì về $40$, rồi lùi thêm $4$ bước nữa về $36$. Hai cách cho cùng một kết quả.

:::graph Trên tia số: từ 42 lùi 2 bước về 40, rồi lùi 4 bước về 36
alt: Tia số từ 34 đến 44, đánh dấu các điểm 36, 40 và 42; đoạn từ 36 đến 42 được tô đậm
x: 34..44
y: -1..1
segment: (36, 0) (42, 0)
point: (36, 0) "36" below
point: (40, 0) "40" above
point: (42, 0) "42" below
:::

:::theorem Trừ có nhớ số có hai chữ số cho số có một chữ số
Muốn tính $42-6$:
1. Đặt tính: hàng đơn vị thẳng hàng đơn vị.
2. Hàng đơn vị: $2$ không trừ được $6$, nên mượn $1$ chục. Tính $12-6=6$, viết $6$.
3. Hàng chục: $4$ bớt $1$ chục đã mượn còn $3$. Viết $3$.
:::

Vì sao đổi như vậy được? Vì $1$ chục bằng $10$ đơn vị. Ta chỉ đổi cách đếm, không làm mất đi hay thêm vào cái bút chì nào.

## Ví dụ

Ta thử với một phép trừ mà hàng đơn vị chỉ thiếu một chút.

:::example Tính $32-5$
**Lời giải.** Hàng đơn vị: $2$ không trừ được $5$, mượn $1$ chục được $12$. Tính $12-5=7$. Hàng chục: $3-1=2$:
$$\begin{array}{r} 32\\ -\ \ 5\\ \hline 27 \end{array}$$
Vậy $32-5=27$.
:::

Phép tính này làm giống hệt, chỉ khác các số. Em thử đoán trước xem hàng đơn vị có đủ để bớt không.

:::example Tính $54-8$
**Lời giải.** Hàng đơn vị: mượn $1$ chục, $14-8=6$. Hàng chục: $5-1=4$:
$$\begin{array}{r} 54\\ -\ \ 8\\ \hline 46 \end{array}$$
Vậy $54-8=46$.
:::

Lần này hàng đơn vị chỉ có $1$, thiếu nhiều hơn các phép trước, nên ta phải đổi chục ra để có thêm đơn vị.

:::example Tính $81-7$
**Lời giải.** Hàng đơn vị: $1$ không trừ được $7$, mượn $1$ chục được $11$. Tính $11-7=4$. Hàng chục: $8-1=7$:
$$\begin{array}{r} 81\\ -\ \ 7\\ \hline 74 \end{array}$$
Vậy $81-7=74$.

**Kiểm tra.** Thử lại bằng phép cộng: $74+7=81$. Đúng.
:::

Phép trừ có nhớ còn dùng được khi ta đếm hàng trong cửa hàng. Em thử với bài toán cửa hàng bán vở.

:::example Cửa hàng bán vở
Cửa hàng có $63$ quyển vở. Cửa hàng bán đi $8$ quyển vở. Hỏi cửa hàng còn lại bao nhiêu quyển vở?

**Lời giải.** "Bán đi", "còn lại" nghĩa là bớt đi, nên em làm phép trừ. Hàng đơn vị: mượn $1$ chục, $13-8=5$. Hàng chục: $6-1=5$:
$$63-8=55\ \text{(quyển)}.$$
Vậy cửa hàng còn lại $55$ quyển vở.
:::

:::warning Những lỗi em hay gặp
- **Lấy số nhỏ trừ số lớn.** Chỗ này nhiều bạn hay nhầm. Sai: $42-6=44$. Vì sao sai: em lấy $6-2=4$, trong khi phải mượn chục để tính $12-6$. Đúng: $42-6=36$.
- **Mượn chục mà không bớt ở hàng chục.** Sai: $42-6=46$. Vì sao sai: em tính $12-6=6$ nhưng vẫn giữ nguyên $4$ chục, quên bớt $1$ chục đã mượn. Mượn đi một chục thì hàng chục phải ít đi một chục. Đúng: $42-6=36$.
- **Bài toán có lời văn quên đơn vị.** Sai: "Đáp số: $55$". Con số nào cũng cần đi kèm đơn vị. Đúng: "Đáp số: $55$ quyển vở".
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

- Hàng đơn vị không đủ trừ: mượn $1$ chục, đổi thành $10$ đơn vị rồi mới trừ.
- Hàng chục: nhớ bớt $1$ chục đã mượn.
- Ví dụ: $42-6$: $12-6=6$; $4-1=3$; kết quả $36$.
- Thử lại bằng phép cộng: $36+6=42$.

Vậy cô giáo còn lại $36$ cái bút chì. Khi hàng đơn vị thiếu, ta đổi một chục ra đơn vị rồi mới trừ. Em làm thêm vài bài ở phần luyện tập để quen tay nhé.

## Luyện tập

Mỗi bài đều có phần cần nhớ và gợi ý để em bắt đầu. Em cứ tự làm trước, chưa chắc thì xem gợi ý, làm xong rồi mới bấm xem lời giải. Sai một chút cũng không sao, vì mỗi lần sửa lại là một lần em hiểu rõ hơn.

:::exercise
Tính $53-7$.

::hint
**Kiến thức:** hàng đơn vị không đủ trừ thì mượn $1$ chục.

**Gợi ý các bước:**
1. Tính $13-7$.
2. Hàng chục: $5$ bớt $1$.

::solution
Ta đặt tính rồi trừ lần lượt từ hàng đơn vị sang hàng chục.

$$\begin{array}{r} 53 \\ -\ 7 \\ \hline 46 \end{array}$$

Hàng đơn vị: $3$ không trừ được $7$, nên mượn $1$ chục. Ta có $13-7=6$, viết $6$.

Hàng chục: $5$ chục mượn đi $1$ chục còn $4$ chục, ta có $5-1=4$, viết $4$.

Thử lại: $46+7=53$.

Vậy $53-7=46$.

**Đáp số.** $46$.
:::

:::exercise
Đặt tính rồi tính $72-5$.

::hint
**Kiến thức:** đặt hàng đơn vị thẳng hàng đơn vị.

**Gợi ý các bước:**
1. Viết $72$, viết $5$ thẳng cột với số $2$.
2. Trừ hàng đơn vị (có mượn), rồi hàng chục.

::solution
Ta đặt tính rồi trừ lần lượt từ hàng đơn vị sang hàng chục.

$$\begin{array}{r} 72 \\ -\ 5 \\ \hline 67 \end{array}$$

Hàng đơn vị: $2$ không trừ được $5$, nên mượn $1$ chục. Ta có $12-5=7$, viết $7$.

Hàng chục: $7$ chục mượn đi $1$ chục còn $6$ chục, ta có $7-1=6$, viết $6$.

Thử lại: $67+5=72$.

Vậy $72-5=67$.

**Đáp số.** $67$.
:::

:::exercise
Em hãy nhớ lại bài cộng có nhớ.

a) Tính $29+7$.

b) Dùng kết quả câu a) để tính $36-7$.

::hint
**Kiến thức:** phép trừ là phép ngược của phép cộng: nếu $29+7=36$ thì $36-7=29$.

**Gợi ý các bước:**
1. Tính $9+7$ rồi hàng chục.
2. Thử trừ $36-7$ bằng cách mượn chục.

::solution
a) Phép cộng có nhớ: hàng đơn vị $9+7=16$, viết $6$ nhớ $1$. Hàng chục: $2+1=3$, viết $3$. Vậy $29+7=36$.

b) Ta cần tính $36-7$. Hàng đơn vị: $6$ không trừ được $7$, nên mượn $1$ chục, ta có $16-7=9$. Hàng chục: $3-1=2$. Do đó $36-7=29$.

Đối chiếu với câu a): vì $29+7=36$ nên lấy tổng $36$ trừ đi một số hạng $7$ thì được số hạng còn lại là $29$. Hai kết quả giống nhau.

Vậy $29+7=36$ và $36-7=29$.

**Đáp số.** a) $36$; b) $29$.
:::

:::exercise
Tìm số thích hợp điền vào ô trống.

a) $45-\square=39$.

b) $71-\square=64$.

::hint
**Kiến thức:** số cần điền là hiệu của hai số đã cho, hoặc thử lại bằng phép cộng.

**Gợi ý các bước:**
1. Từ $39$ lên $45$ cần thêm mấy?
2. Thử lại bằng phép trừ.

::solution
a) Số cần tìm là số trừ, bằng số bị trừ trừ đi hiệu. Ta có $\square=45-39$. Hàng đơn vị: $5$ không trừ được $9$, nên mượn $1$ chục, $15-9=6$. Hàng chục: $4-1-3=0$. Suy ra $\square=6$ (từ $39$ lên $45$ cần thêm $6$).

Thử lại: $45-6=39$.

b) Tương tự, $\square=71-64$. Hàng đơn vị: $1$ không trừ được $4$, nên mượn $1$ chục, $11-4=7$. Hàng chục: $7-1-6=0$. Suy ra $\square=7$ (từ $64$ lên $71$ cần thêm $7$).

Thử lại: $71-7=64$.

Vậy số cần điền ở câu a) là $6$ và ở câu b) là $7$.

**Đáp số.** a) $6$; b) $7$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống. Em hãy nói vì sao.

a) $62-8 \;\square\; 55$.

b) $40-3 \;\square\; 37$.

::hint
**Kiến thức:** tính hiệu trước, rồi so sánh hai số.

**Gợi ý các bước:**
1. Tính hiệu ở vế trái.
2. So sánh hàng chục, rồi hàng đơn vị.

::solution
a) Ta tính $62-8$. Hàng đơn vị: $2$ không trừ được $8$, nên mượn $1$ chục, $12-8=4$. Hàng chục: $6-1=5$. Do đó $62-8=54$. Vì $54<55$ nên $62-8<55$.

b) Ta tính $40-3$. Hàng đơn vị: $0$ không trừ được $3$, nên mượn $1$ chục, $10-3=7$. Hàng chục: $4-1=3$. Do đó $40-3=37$. Hai số $37$ và $37$ bằng nhau nên $40-3=37$.

Vậy $62-8<55$ và $40-3=37$.

**Đáp số.** a) Dấu $<$; b) Dấu $=$.
:::

:::exercise
Bạn Bình làm bài: $52-7=55$. Bạn Bình làm sai ở đâu? Em hãy sửa lại cho đúng.

::hint
**Kiến thức:** hàng đơn vị không đủ trừ thì mượn $1$ chục, không lấy số nhỏ trừ số lớn.

**Gợi ý các bước:**
1. Tính $2-7$ có được không?
2. Làm lại với $12-7$.

::solution
Ở hàng đơn vị, $2$ không trừ được $7$. Bạn Bình lấy $7-2=5$, đó là sai vì phải lấy $2$ trừ $7$, mà $2<7$ nên phải mượn. Ở hàng chục, bạn Bình cũng quên bớt $1$ chục đã mượn nên giữ nguyên $5$.

Cách làm đúng: mượn $1$ chục, ta có $12-7=5$. Hàng chục: $5-1=4$. Do đó $52-7=45$.

Thử lại: $45+7=52$.

Vậy bạn Bình làm sai ở chỗ lấy số lớn trừ số nhỏ, và kết quả đúng là $52-7=45$.

**Đáp số.** Bạn Bình lấy số lớn trừ số nhỏ; đúng là $45$.
:::

:::exercise
Trong rổ có $64$ quả cam. Mẹ bán đi $9$ quả cam. Hỏi trong rổ còn lại bao nhiêu quả cam?

::hint
**Kiến thức:** "bán đi", "còn lại" nghĩa là bớt đi: dùng phép trừ.

**Gợi ý các bước:**
1. Đề cho biết gì? Có $64$ quả, bán $9$ quả. Đề hỏi gì?
2. Tính $64-9$ rồi ghi đáp số có đơn vị.

::solution
Bài giải

Số quả cam còn lại trong rổ là:
$$64-9=55\ \text{(quả)}.$$

Cách tính: hàng đơn vị $4$ không trừ được $9$, mượn $1$ chục, $14-9=5$. Hàng chục: $6-1=5$.

Thử lại: $55+9=64$.

Vậy trong rổ còn lại $55$ quả cam.

**Đáp số.** $55$ quả cam.
:::

:::exercise Thử thách
Tìm chữ số thích hợp điền vào ô trống: $7\square-8=65$.

::hint
**Kiến thức:** hàng đơn vị của hiệu là $5$. Mượn $1$ chục thì hàng đơn vị là $10+\square$.

**Gợi ý các bước:**
1. $(10+\square)-8$ phải bằng $5$.
2. Thử lại bằng phép trừ.

::solution
Số bị trừ là $7\square$, hiệu là $65$, số trừ là $8$.

Hàng chục của số bị trừ là $7$ còn hàng chục của hiệu là $6$, kém $1$. Vậy ở hàng đơn vị đã mượn $1$ chục, nên $(10+\square)-8=5$.

Suy ra $10+\square=5+8=13$, do đó $\square=3$.

Thử lại: $73-8=65$ (vì $13-8=5$ và $7-1=6$). Cũng có thể kiểm tra bằng phép cộng: $65+8=73$.

Vậy chữ số cần điền là $3$.

**Đáp số.** Chữ số cần điền là $3$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Kết quả của $51-6$ là
A. $45$.
B. $55$.
C. $57$.
D. $46$.
::key A
$11-6=5$ và $5-1=4$, nên $51-6=45$. Phương án B là lỗi lấy $6-1=5$ rồi giữ nguyên hàng chục, C là $51+6$.

::mc TH
Khi tính $62-8$, ở hàng đơn vị em không trừ được $2-8$. Em mượn $1$ chục rồi tính
A. $8-2$.
B. $12-8$.
C. $2+8$.
D. $10-8$.
::key B
Mượn $1$ chục được $12$ đơn vị: $12-8=4$; hàng chục $6-1=5$; kết quả $54$. Phương án A lấy số lớn trừ số nhỏ, D quên $2$ đơn vị có sẵn.

::mc TH
Phép tính nào có kết quả bằng $36$?
A. $41-6$.
B. $43-6$.
C. $42-6$.
D. $44-6$.
::key C
$42-6=36$. Các phép tính khác lần lượt bằng $37$, $35$, $38$.

::mc VD
Hộp có $71$ viên bi, Nam lấy đi $9$ viên. Trong hộp còn lại bao nhiêu viên bi?
A. $80$ viên.
B. $78$ viên.
C. $72$ viên.
D. $62$ viên.
::key D
"Lấy đi", "còn lại" là bớt đi: $71-9=62$. Phương án A là $71+9$, B lấy $9-1=8$ rồi giữ hàng chục, C quên bớt $1$ chục đã mượn.

::tf NB TH TH VD
Em xét phép trừ $83-5$.
a) Hàng đơn vị: $3$ không trừ được $5$.
b) Mượn $1$ chục thì hàng đơn vị có $13$.
c) Hàng chục còn lại sau khi mượn là $8$.
d) $83-5=78$.
::key Đ Đ S Đ
a) Đúng: $3<5$. b) Đúng: $10+3=13$. c) Sai: hàng chục $8-1=7$. d) Đúng: $13-5=8$ và $7$, được $78$.

::sa VD
Tính $92-7$.
::key 85
$12-7=5$, hàng chục $9-1=8$. Vậy $92-7=85$.

::sa VD
Bể có $54$ con cá, người ta vớt ra $8$ con cá. Bể còn lại bao nhiêu con cá?
::key 46
$14-8=6$, hàng chục $5-1=4$. Vậy $54-8=46$ (con cá).
:::
