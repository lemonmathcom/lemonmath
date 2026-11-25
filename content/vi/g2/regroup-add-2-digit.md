---
title: Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số
description: Em học cộng hai số có hai chữ số khi tổng hàng đơn vị từ 10 trở lên, ví dụ 46 + 38, bằng cách đặt tính và nhớ 1 chục sang hàng chục.
minutes: 15
---

:::goals
- Đặt tính và cộng hai số có hai chữ số, ví dụ $46+38$.
- Nhớ cộng thêm $1$ chục khi hàng đơn vị được $10$ hoặc hơn.
- Giải bài toán có lời văn bằng một phép cộng có nhớ.
:::

Lan có $46$ cái nhãn vở. Mai có $38$ cái nhãn vở. Hỏi hai bạn có tất cả bao nhiêu cái nhãn vở?

Lan và Mai có nhiều nhãn vở, đếm từng cái thì lâu. Em đã có sẵn cách: ở bài trước, em cộng số có hai chữ số với số có một chữ số và biết nhớ $1$ chục. Bài này vẫn dùng cách ấy, chỉ khác một chỗ: số hạng thứ hai cũng có chục. Vậy khi cả hai số đều có chục, chục nhớ phải đặt vào đâu?

## Cùng khám phá

Muốn cộng, ta xem mỗi số gồm những gì. Ta tách $46$ thành $4$ chục $6$ đơn vị, và $38$ thành $3$ chục $8$ đơn vị. Lần này cả hai số đều có chục.

- Trước hết cộng hàng đơn vị: $6+8=14$. Đó là $1$ chục và $4$ đơn vị.
- Viết $4$ ở hàng đơn vị, và nhớ $1$ chục để lát nữa cộng vào hàng chục.
- Rồi cộng hàng chục: $4+3=7$. Cộng thêm $1$ chục đã nhớ, ta được $8$.

Ghép lại, ta có $8$ chục và $4$ đơn vị, tức là $84$ cái nhãn vở. Đó là số nhãn vở của cả hai bạn.

$$\begin{array}{r} 46\\ +\ 38\\ \hline 84 \end{array}$$

Em cũng có thể nhìn trên tia số. Từ $46$, ta cộng $30$ để được $76$: số chục đã cộng xong. Rồi cộng $8$ để được $84$. Hai cách cho cùng một kết quả.

:::graph Trên tia số: từ 46 cộng 30 được 76, rồi cộng 8 được 84
alt: Tia số từ 40 đến 90, đánh dấu các điểm 46, 76 và 84; đoạn từ 46 đến 84 được tô đậm
x: 40..90
y: -1..1
segment: (46, 0) (84, 0)
point: (46, 0) "46" below
point: (76, 0) "76" above
point: (84, 0) "84" below
:::

:::theorem Cộng có nhớ hai số có hai chữ số
Muốn tính $46+38$:
1. Đặt tính: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục.
2. Cộng hàng đơn vị: $6+8=14$. Viết $4$, nhớ $1$ chục.
3. Cộng hàng chục: $4+3+1=8$. Viết $8$.
:::

Vì sao cách này đúng? Vì $14$ đơn vị là $1$ chục và $4$ đơn vị: ta chỉ gom lại cho gọn. Chục mới ấy được cộng vào hàng chục nên không bị mất. Chỗ này nhiều bạn hay quên, nên làm xong hàng đơn vị, em nhớ ngoái lại tìm chục nhớ nhé.

## Ví dụ

Ta thử thêm vài phép tính cho quen tay. Phép đầu dùng hai số nhỏ, tổng hàng đơn vị chỉ hơn $10$ một chút.

:::example Tính $27+15$
**Lời giải.** Hàng đơn vị: $7+5=12$, viết $2$ nhớ $1$. Hàng chục: $2+1+1=4$ (số chục của hai số và $1$ chục nhớ):
$$\begin{array}{r} 27\\ +\ 15\\ \hline 42 \end{array}$$
Vậy $27+15=42$.
:::

Phép tính sau làm y hệt phép trước, chỉ đổi số. Em thử đoán xem có phải nhớ không, rồi mở lời giải đối chiếu.

:::example Tính $48+36$
**Lời giải.** Hàng đơn vị: $8+6=14$, viết $4$ nhớ $1$. Hàng chục: $4+3+1=8$:
$$\begin{array}{r} 48\\ +\ 36\\ \hline 84 \end{array}$$
Vậy $48+36=84$.
:::

Lần này hàng đơn vị có số $9$, nên tổng lớn hơn. Đừng lo, cách làm vẫn như cũ. Làm xong, ta còn kiểm tra lại bằng một cách khác.

:::example Tính $59+27$
**Lời giải.** Hàng đơn vị: $9+7=16$, viết $6$ nhớ $1$. Hàng chục: $5+2+1=8$:
$$\begin{array}{r} 59\\ +\ 27\\ \hline 86 \end{array}$$
Vậy $59+27=86$.

**Kiểm tra.** Làm tròn $59$ thành $60$: $60+27=87$, rồi bớt $1$ được $86$. Kết quả giống nhau.
:::

Giờ ta dùng phép cộng cho một chuyện quen ở lớp: đếm xem lớp có tất cả bao nhiêu bạn. Em đọc kĩ đề rồi tự hỏi: đề bảo gộp lại hay bớt đi? Hỏi xong, em mới chọn phép tính.

:::example Đội văn nghệ
Lớp có $35$ bạn nam và $48$ bạn nữ. Hỏi lớp có tất cả bao nhiêu bạn?

**Lời giải.** "Tất cả" nghĩa là gộp lại, nên em làm phép cộng. Hàng đơn vị: $5+8=13$, viết $3$ nhớ $1$. Hàng chục: $3+4+1=8$:
$$35+48=83\ \text{(bạn)}.$$
Vậy lớp có tất cả $83$ bạn.
:::

:::warning Những lỗi em hay gặp
- **Quên chục nhớ.** Sai: $46+38=74$. Vì sao sai: nhiều bạn viết xong $4$ là dừng, quên cộng $1$ chục nhớ vào hàng chục. Đúng: $46+38=84$.
- **Viết cả $14$ vào hàng đơn vị.** Sai: $46+38=714$. Vì sao sai: $14$ đơn vị phải đổi thành $1$ chục và $4$ đơn vị. Hàng đơn vị chỉ giữ phần lẻ. Đúng: $46+38=84$.
- **Bài toán có lời văn quên đơn vị.** Sai: "Đáp số: $83$". Vì sao sai: một con số đứng một mình chưa cho biết ta đang đếm gì. Đúng: "Đáp số: $83$ bạn".
:::

## Thuật ngữ

:::terms
- phép cộng có nhớ | addition with regrouping
- hàng chục | tens
- hàng đơn vị | ones
- đổi 10 đơn vị lấy 1 chục | exchange 10 ones for 1 ten
- đặt tính | set out the column
- tổng | sum (total)
- số hạng | addend
- tia số | number line
:::

## Tóm tắt

- Đặt tính thẳng cột, rồi cộng từ hàng đơn vị sang hàng chục.
- Khi hàng đơn vị được $10$ hoặc hơn, viết số đơn vị còn lại và nhớ $1$ chục.
- Ở hàng chục, cộng hai chữ số chục rồi cộng thêm $1$ chục nhớ.
- Ví dụ: $46+38$: $6+8=14$, viết $4$ nhớ $1$; $4+3+1=8$; kết quả $84$.
Còn nhớ câu hỏi đầu bài không: chục nhớ đặt vào đâu? Nó được cộng vào hàng chục, cùng với số chục của hai số hạng. Em làm thêm vài phép tính ở phần Luyện tập để cách này thành quen tay nhé.

## Luyện tập

Mỗi bài có phần kiến thức cần nhớ và một gợi ý để em bắt đầu. Em cứ thử tự làm trước, chưa ra ngay cũng không sao. Làm xong rồi hãy bấm xem lời giải để đối chiếu.

:::exercise
Tính $24+18$.

::hint
**Kiến thức:** cộng hàng đơn vị trước; được $10$ hoặc hơn thì nhớ $1$ chục.

**Gợi ý các bước:**
1. Tính $4+8$.
2. Cộng hàng chục và nhớ thêm $1$.

::solution
Ta đặt tính rồi cộng từ hàng đơn vị.

Hàng đơn vị: $4+8=12$, viết $2$ nhớ $1$.

Hàng chục: $2+1+1=4$ (có $1$ chục nhớ), viết $4$.

Ta có
$$24+18=42.$$

Thử lại: $42-18=24$. Đúng.

Vậy $24+18=42$.

**Đáp số.** $42$.
:::

:::exercise
Đặt tính rồi tính $37+25$.

::hint
**Kiến thức:** đặt hàng chục thẳng hàng chục, hàng đơn vị thẳng hàng đơn vị.

**Gợi ý các bước:**
1. Viết hai số thẳng cột.
2. Cộng hàng đơn vị, rồi hàng chục.

::solution
Đặt tính sao cho các chữ số cùng hàng thẳng cột với nhau:
$$\begin{array}{r}37\\+25\\\hline62\end{array}$$

Hàng đơn vị: $7+5=12$, viết $2$ nhớ $1$.

Hàng chục: $3+2+1=6$, viết $6$.

Thử lại: $62-25=37$. Đúng.

Vậy $37+25=62$.

**Đáp số.** $62$.
:::

:::exercise
Em hãy nhớ lại bài trước. Tính $58+7$.

::hint
**Kiến thức:** số có một chữ số chỉ có hàng đơn vị; vẫn nhớ $1$ chục khi được $10$ hoặc hơn.

**Gợi ý các bước:**
1. Tính $8+7$.
2. Hàng chục: $5$ cộng $1$ chục nhớ.

::solution
Hàng đơn vị: $8+7=15$, viết $5$ nhớ $1$.

Hàng chục: $5+1=6$ (chỉ có chữ số $5$ và $1$ chục nhớ), viết $6$.

Ta có
$$58+7=65.$$

Thử lại: $65-7=58$. Đúng.

Vậy $58+7=65$.

**Đáp số.** $65$.
:::

:::exercise
Tính.

a) $45+39$.

b) $56+27$.

::hint
**Kiến thức:** cùng một cách làm cho cả hai phép tính.

**Gợi ý các bước:**
1. Cộng hàng đơn vị, viết số đơn vị, nhớ $1$.
2. Cộng hàng chục rồi cộng $1$ nhớ.

::solution
a) Tính $45+39$. Hàng đơn vị: $5+9=14$, viết $4$ nhớ $1$. Hàng chục: $4+3+1=8$. Ta có $45+39=84$. Thử lại: $84-39=45$. Đúng.

b) Tính $56+27$. Hàng đơn vị: $6+7=13$, viết $3$ nhớ $1$. Hàng chục: $5+2+1=8$. Ta có $56+27=83$. Thử lại: $83-27=56$. Đúng.

Vậy $45+39=84$ và $56+27=83$.

**Đáp số.** a) $84$; b) $83$.
:::

:::exercise
Điền dấu $>$, $<$ hoặc $=$ vào chỗ trống. Em hãy nói vì sao.

a) $38+47 \;\square\; 84$.

b) $29+35 \;\square\; 65$.

::hint
**Kiến thức:** tính tổng trước, rồi so sánh hai số.

**Gợi ý các bước:**
1. Tính tổng ở vế trái.
2. So sánh hàng chục, rồi hàng đơn vị.

::solution
a) Tính $38+47$. Hàng đơn vị: $8+7=15$, viết $5$ nhớ $1$. Hàng chục: $3+4+1=8$. Ta có $38+47=85$. Vì $85>84$ nên $38+47>84$.

b) Tính $29+35$. Hàng đơn vị: $9+5=14$, viết $4$ nhớ $1$. Hàng chục: $2+3+1=6$. Ta có $29+35=64$. Vì $64<65$ nên $29+35<65$.

Vậy ở câu a) điền dấu $>$, ở câu b) điền dấu $<$.

**Đáp số.** a) Dấu $>$; b) Dấu $<$.
:::

:::exercise
Bạn Hà làm bài: $36+47=73$. Bạn Hà làm sai ở đâu? Em hãy sửa lại cho đúng.

::hint
**Kiến thức:** khi hàng đơn vị được $10$ hoặc hơn, phải nhớ $1$ chục.

**Gợi ý các bước:**
1. Tính $6+7$.
2. Tính hàng chục, có cộng chục nhớ không?

::solution
Ta tính lại phép cộng $36+47$.

Hàng đơn vị: $6+7=13$, viết $3$ nhớ $1$.

Hàng chục phải là $3+4+1=8$ (cộng thêm $1$ chục nhớ). Bạn Hà chỉ làm $3+4=7$ vì quên chục nhớ, nên được kết quả sai là $73$.

Sửa lại:
$$36+47=83.$$

Thử lại: $83-47=36$. Đúng.

Vậy bạn Hà sai ở chỗ quên chục nhớ; kết quả đúng là $36+47=83$.

**Đáp số.** Bạn Hà quên chục nhớ; đúng là $83$.
:::

:::exercise
Tổ Một trồng được $49$ cây, tổ Hai trồng được $38$ cây. Hỏi cả hai tổ trồng được bao nhiêu cây?

::hint
**Kiến thức:** "cả hai tổ" nghĩa là gộp lại: dùng phép cộng.

**Gợi ý các bước:**
1. Đề cho biết gì? Có $49$ cây và $38$ cây. Đề hỏi gì?
2. Tính $49+38$ rồi ghi đáp số có đơn vị.

::solution
Bài giải

Muốn biết cả hai tổ trồng được bao nhiêu cây, ta lấy số cây của tổ Một cộng với số cây của tổ Hai.

Hàng đơn vị: $9+8=17$, viết $7$ nhớ $1$. Hàng chục: $4+3+1=8$.

Số cây cả hai tổ trồng được là:
$$49+38=87\ \text{(cây)}$$

Vậy cả hai tổ trồng được $87$ cây.

**Đáp số.** $87$ cây.
:::

:::exercise Thử thách
Tìm chữ số thích hợp điền vào ô trống: $5\square+27=84$.

::hint
**Kiến thức:** hàng đơn vị của tổng là $4$, mà $\square+7$ phải được $14$.

**Gợi ý các bước:**
1. $\square+7$ phải bằng bao nhiêu để viết $4$ nhớ $1$?
2. Thử lại bằng phép cộng.

::solution
Phép tính $5\square+27=84$ có tổng là $84$, nên chữ số hàng đơn vị của tổng là $4$.

Ở hàng đơn vị, $\square+7$ phải có chữ số tận cùng là $4$. Vì $\square+7$ không nhỏ hơn $7$ và không lớn hơn $16$ nên $\square+7=14$, suy ra $\square=14-7=7$.

Kiểm tra hàng chục: $5+2+1=8$ (có $1$ chục nhớ), đúng với chữ số hàng chục của $84$.

Thử lại: $57+27=84$ (vì $7+7=14$ và $5+2+1=8$). Đúng.

Vậy chữ số cần điền vào ô trống là $7$.

**Đáp số.** Chữ số cần điền là $7$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Kết quả của $38+45$ là
A. $73$.
B. $82$.
C. $713$.
D. $83$.
::key D
$8+5=13$, viết $3$ nhớ $1$; $3+4+1=8$, nên $38+45=83$. Phương án A quên chục nhớ, C viết cả $13$ vào hàng đơn vị.

::mc TH
Phép tính nào đúng?
A. $29+36=65$.
B. $29+36=55$.
C. $29+36=515$.
D. $29+36=64$.
::key A
$9+6=15$, viết $5$ nhớ $1$; $2+3+1=6$, nên $29+36=65$. A quên chục nhớ, C viết cả $15$ vào hàng đơn vị.

::mc TH
Phép tính nào có kết quả bằng $71$?
A. $35+35$.
B. $35+36$.
C. $34+36$.
D. $38+34$.
::key B
$35+36=71$. Các phép tính khác lần lượt bằng $70$, $70$, $72$.

::mc VD
Lớp 2A có $29$ bạn, lớp 2B có $34$ bạn. Cả hai lớp có bao nhiêu bạn?
A. $53$ bạn.
B. $613$ bạn.
C. $63$ bạn.
D. $5$ bạn.
::key C
"Cả hai lớp" là gộp lại: $29+34=63$. Phương án A quên chục nhớ, D là $34-29$, nhầm sang phép trừ.

::tf NB TH TH VD
Em xét phép cộng $48+27$.
a) Hàng đơn vị: $8+7=15$.
b) $15$ đơn vị đổi được $1$ chục và $5$ đơn vị.
c) Hàng chục của tổng là $6$.
d) $48+27=75$.
::key Đ Đ S Đ
a) Đúng: $8+7=15$. b) Đúng: $15=10+5$. c) Sai: hàng chục là $4+2+1=7$. d) Đúng: $48+27=75$.

::sa VD
Tính $56+38$.
::key 94
$6+8=14$, viết $4$ nhớ $1$; $5+3+1=9$. Vậy $56+38=94$.

::sa VD
Thùng có $45$ quả cam và $37$ quả quýt. Thùng có tất cả bao nhiêu quả?
::key 82
$5+7=12$, viết $2$ nhớ $1$; $4+3+1=8$. Vậy $45+37=82$ (quả).
:::
