---
title: Hỗn số
description: Em học cách đọc, viết hỗn số, đổi hỗn số sang phân số và ngược lại, so sánh hỗn số rồi cộng, trừ các hỗn số.
minutes: 15
---

:::goals
- Biết hỗn số gồm phần nguyên và phần phân số, và đọc, viết được hỗn số.
- Đổi được hỗn số thành phân số và phân số lớn hơn $1$ thành hỗn số.
- So sánh hai hỗn số.
- Cộng, trừ hai hỗn số và giải bài toán có lời văn.
:::

Mẹ có $2$ chiếc bánh nướng nguyên và thêm $\dfrac{3}{4}$ chiếc bánh nữa. Mẹ cắt mỗi chiếc bánh thành $4$ phần bằng nhau để chia cho cả nhà. Hỏi mẹ có tất cả bao nhiêu phần bánh?

Số bánh của mẹ vừa có phần nguyên, vừa có phần lẻ. Bài này dạy em cách viết và tính với những số như vậy.

## Cùng khám phá

Mỗi chiếc bánh được cắt thành $4$ phần, mỗi phần là $\dfrac{1}{4}$ chiếc bánh.

- $2$ chiếc bánh nguyên có $2\times4=8$ phần.
- Thêm $3$ phần nữa, ta có $8+3=11$ phần.
- Mỗi phần là $\dfrac{1}{4}$ nên mẹ có $\dfrac{11}{4}$ chiếc bánh.

Ta viết số bánh đó là $2\dfrac{3}{4}$ (đọc là "hai và ba phần tư"), và $2\dfrac{3}{4}=\dfrac{11}{4}$.

:::graph Trên tia số: hỗn số 2 3/4 nằm giữa 2 và 3
alt: Tia số từ 1 đến 4, đánh dấu các điểm 2, 2 3/4 và 3; đoạn từ 2 đến 2 3/4 được tô đậm
x: 1..4
y: -1..1
segment: (2, 0) (2.75, 0)
point: (2, 0) "2" below
point: (2.75, 0) "2 3/4" above
point: (3, 0) "3" below
:::

:::definition Hỗn số
**Hỗn số** gồm một số tự nhiên (phần nguyên) và một phân số bé hơn $1$ (phần phân số), viết liền nhau. Chẳng hạn $2\dfrac{3}{4}$ có phần nguyên là $2$ và phần phân số là $\dfrac{3}{4}$, tức là $2\dfrac{3}{4}=2+\dfrac{3}{4}$.
:::

:::theorem Đổi giữa hỗn số và phân số
- **Hỗn số sang phân số:** lấy phần nguyên nhân với mẫu số, cộng với tử số, giữ nguyên mẫu số: $a\dfrac{b}{c}=\dfrac{a\times c+b}{c}$.
- **Phân số lớn hơn $1$ sang hỗn số:** chia tử số cho mẫu số. Thương là phần nguyên, số dư là tử số của phần phân số, mẫu số giữ nguyên.
:::

Vì sao đúng? Mỗi đơn vị gồm $c$ phần bằng nhau, nên $a$ đơn vị có $a\times c$ phần. Cộng thêm $b$ phần lẻ, ta được $a\times c+b$ phần. Đổi ngược lại là phép chia có dư: $23:6=3$ dư $5$ nghĩa là $23$ phần gom được $3$ đơn vị đủ $6$ phần, thừa $5$ phần.

**Kết nối.** Hỗn số luôn nằm giữa hai số tự nhiên liên tiếp, như $2\dfrac{3}{4}$ nằm giữa $2$ và $3$. Cách nhìn này giúp em hiểu số thập phân $2{,}75$ ở các bài sau.

## Ví dụ

Ta bắt đầu với việc đổi hỗn số thành phân số.

:::example Đổi $3\dfrac{2}{5}$ thành phân số
**Lời giải.** Ta có $3\times5=15$ và $15+2=17$. Giữ nguyên mẫu số $5$:
$$3\dfrac{2}{5}=\dfrac{3\times5+2}{5}=\dfrac{17}{5}.$$
Vậy $3\dfrac{2}{5}=\dfrac{17}{5}$.
:::

Bây giờ làm ngược lại bằng phép chia có dư.

:::example Đổi $\dfrac{23}{6}$ thành hỗn số
**Lời giải.** Ta có $23:6=3$ (dư $5$). Thương $3$ là phần nguyên, số dư $5$ là tử số của phần phân số:
$$\dfrac{23}{6}=3\dfrac{5}{6}.$$
Vậy $\dfrac{23}{6}=3\dfrac{5}{6}$.
:::

Khi so sánh hai hỗn số, em so sánh phần nguyên trước.

:::example So sánh $2\dfrac{3}{4}$ với $2\dfrac{4}{5}$, và $3\dfrac{1}{2}$ với $2\dfrac{9}{10}$
**Lời giải.** Hai hỗn số $2\dfrac{3}{4}$ và $2\dfrac{4}{5}$ có cùng phần nguyên, nên ta so sánh hai phần phân số. Quy đồng mẫu số: $\dfrac{3}{4}=\dfrac{15}{20}$ và $\dfrac{4}{5}=\dfrac{16}{20}$. Vì $15<16$ nên $2\dfrac{3}{4}<2\dfrac{4}{5}$.

Hai hỗn số $3\dfrac{1}{2}$ và $2\dfrac{9}{10}$ có phần nguyên khác nhau. Vì $3>2$ nên $3\dfrac{1}{2}>2\dfrac{9}{10}$.
:::

Phép cộng hỗn số làm theo hai cách; em thử với một bài toán thực tế.

:::example Tấm vải
Giả sử một tấm vải đỏ dài $1\dfrac{1}{2}$ m và một tấm vải xanh dài $2\dfrac{3}{4}$ m được nối lại với nhau. Hỏi tấm vải sau khi nối dài bao nhiêu mét?

**Hiểu đề.** Biết độ dài hai tấm vải. Cần tìm tổng độ dài.

**Tìm cách giải.** Cộng hai phần nguyên với nhau, cộng hai phần phân số với nhau, rồi gộp lại.

**Bài giải.** Tổng các phần nguyên là $1+2=3$. Tổng các phần phân số là:
$$\dfrac{1}{2}+\dfrac{3}{4}=\dfrac{2}{4}+\dfrac{3}{4}=\dfrac{5}{4}=1\dfrac{1}{4}.$$
Độ dài tấm vải sau khi nối là:
$$3+1\dfrac{1}{4}=4\dfrac{1}{4}\ \text{(m)}.$$
Đáp số: $4\dfrac{1}{4}$ m.

**Nhìn lại.** Có cách khác không? Có: đổi ra phân số, $\dfrac{3}{2}+\dfrac{11}{4}=\dfrac{6}{4}+\dfrac{11}{4}=\dfrac{17}{4}=4\dfrac{1}{4}$, cùng kết quả. Kết quả có hợp lí không? Có, vì $1\dfrac{1}{2}$ gần $2$ và $2\dfrac{3}{4}$ gần $3$, nên tổng gần $5$.
:::

Cuối cùng là phép trừ, em nên đổi ra phân số.

:::example Tính $5\dfrac{1}{3}-2\dfrac{3}{4}$
**Lời giải.** Đổi hai hỗn số thành phân số, rồi quy đồng mẫu số:
$$5\dfrac{1}{3}-2\dfrac{3}{4}=\dfrac{16}{3}-\dfrac{11}{4}=\dfrac{64}{12}-\dfrac{33}{12}=\dfrac{31}{12}=2\dfrac{7}{12}.$$
Vậy $5\dfrac{1}{3}-2\dfrac{3}{4}=2\dfrac{7}{12}$.
:::

:::warning Những lỗi em hay gặp
- **Viết liền các chữ số.** Sai: $2\dfrac{3}{4}=\dfrac{23}{4}$. Vì sao sai: $\dfrac{23}{4}=5\dfrac{3}{4}$ lớn hơn $2\dfrac{3}{4}$ rất nhiều. Đúng: $\dfrac{2\times4+3}{4}=\dfrac{11}{4}$.
- **Nhầm thương và số dư.** Sai: $\dfrac{23}{6}=5\dfrac{3}{6}$. Vì sao sai: $23:6=3$ dư $5$, phần nguyên là thương $3$ và tử số là số dư $5$. Đúng: $\dfrac{23}{6}=3\dfrac{5}{6}$.
- **Để phần phân số lớn hơn $1$.** Sai: $1\dfrac{1}{2}+2\dfrac{3}{4}=3\dfrac{5}{4}$. Vì sao sai: phần phân số của hỗn số phải bé hơn $1$, nên $\dfrac{5}{4}$ phải đổi thành $1\dfrac{1}{4}$. Đúng: $3+1\dfrac{1}{4}=4\dfrac{1}{4}$.
:::

## Thuật ngữ

:::terms
- hỗn số | mixed number
- phần nguyên | whole-number part
- phần phân số | fractional part
- phân số lớn hơn 1 | improper fraction
- tử số | numerator
- mẫu số | denominator
- phép chia có dư | division with a remainder
- thương | quotient
- số dư | remainder
:::

## Tóm tắt

- Hỗn số $a\dfrac{b}{c}$ gồm phần nguyên $a$ và phần phân số $\dfrac{b}{c}$ bé hơn $1$.
- Hỗn số sang phân số: $a\dfrac{b}{c}=\dfrac{a\times c+b}{c}$.
- Phân số lớn hơn $1$ sang hỗn số: chia tử cho mẫu; thương là phần nguyên, số dư là tử số mới.
- So sánh hỗn số: so sánh phần nguyên trước; nếu bằng nhau thì so sánh phần phân số.
- Cộng, trừ hỗn số: đổi ra phân số, hoặc tính riêng phần nguyên và phần phân số.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Đổi các hỗn số sau thành phân số: a) $2\dfrac{1}{5}$; b) $6\dfrac{3}{4}$.

::hint
**Kiến thức:** $a\dfrac{b}{c}=\dfrac{a\times c+b}{c}$.

**Gợi ý các bước:**
1. Nhân phần nguyên với mẫu số.
2. Cộng thêm tử số, giữ nguyên mẫu số.

::solution
Muốn đổi hỗn số thành phân số, ta lấy phần nguyên nhân với mẫu số rồi cộng với tử số của phần phân số; kết quả là tử số mới, mẫu số giữ nguyên.

a) Với $2\dfrac{1}{5}$: phần nguyên là $2$, tử số là $1$, mẫu số là $5$. Ta có
$$2\frac{1}{5}=\frac{2\times5+1}{5}=\frac{10+1}{5}=\frac{11}{5}.$$

b) Với $6\dfrac{3}{4}$: phần nguyên là $6$, tử số là $3$, mẫu số là $4$. Ta có
$$6\frac{3}{4}=\frac{6\times4+3}{4}=\frac{24+3}{4}=\frac{27}{4}.$$

Thử lại: $11:5=2$ (dư $1$) và $27:4=6$ (dư $3$), đúng với hai hỗn số ban đầu.

Vậy $2\dfrac{1}{5}=\dfrac{11}{5}$ và $6\dfrac{3}{4}=\dfrac{27}{4}$.

**Đáp số.** a) $\dfrac{11}{5}$; b) $\dfrac{27}{4}$.
:::

:::exercise
Đổi các phân số sau thành hỗn số: a) $\dfrac{7}{2}$; b) $\dfrac{29}{8}$.

::hint
**Kiến thức:** chia tử số cho mẫu số; thương là phần nguyên, số dư là tử số mới.

**Gợi ý các bước:**
1. Thực hiện phép chia có dư.
2. Viết hỗn số, giữ nguyên mẫu số.

::solution
Muốn đổi phân số (tử số lớn hơn mẫu số) thành hỗn số, ta chia tử số cho mẫu số: thương là phần nguyên, số dư là tử số của phần phân số, mẫu số giữ nguyên.

a) Ta có $7:2=3$ (dư $1$). Phần nguyên là $3$, phần phân số là $\dfrac{1}{2}$, nên
$$\frac{7}{2}=3\frac{1}{2}.$$

b) Ta có $29:8=3$ (dư $5$), vì $3\times8=24$ và $29-24=5$. Phần nguyên là $3$, phần phân số là $\dfrac{5}{8}$, nên
$$\frac{29}{8}=3\frac{5}{8}.$$

Thử lại: $3\times2+1=7$ và $3\times8+5=29$.

Vậy $\dfrac{7}{2}=3\dfrac{1}{2}$ và $\dfrac{29}{8}=3\dfrac{5}{8}$.

**Đáp số.** a) $3\dfrac{1}{2}$; b) $3\dfrac{5}{8}$.
:::

:::exercise
So sánh: $3\dfrac{2}{3}$ và $3\dfrac{5}{8}$.

::hint
**Kiến thức:** hai hỗn số có cùng phần nguyên thì so sánh hai phần phân số.

**Gợi ý các bước:**
1. Hai phần nguyên có bằng nhau không?
2. Quy đồng mẫu số hai phần phân số rồi so sánh.

::solution
Hai hỗn số có cùng phần nguyên là $3$, nên ta chỉ cần so sánh hai phần phân số $\dfrac{2}{3}$ và $\dfrac{5}{8}$.

Quy đồng mẫu số với mẫu số chung $24$ (vì $3\times8=24$):
$$\frac{2}{3}=\frac{2\times8}{3\times8}=\frac{16}{24};\qquad \frac{5}{8}=\frac{5\times3}{8\times3}=\frac{15}{24}.$$

Hai phân số cùng mẫu số, phân số nào có tử số lớn hơn thì lớn hơn. Vì $16>15$ nên $\dfrac{16}{24}>\dfrac{15}{24}$, tức là $\dfrac{2}{3}>\dfrac{5}{8}$.

Vậy $3\dfrac{2}{3}>3\dfrac{5}{8}$.

**Đáp số.** $3\dfrac{2}{3}>3\dfrac{5}{8}$.
:::

:::exercise
Tính: $2\dfrac{1}{3}+1\dfrac{1}{6}$.

::hint
**Kiến thức:** cộng phần nguyên với phần nguyên, phần phân số với phần phân số.

**Gợi ý các bước:**
1. Cộng hai phần nguyên.
2. Quy đồng rồi cộng hai phần phân số, rút gọn kết quả.

::solution
Ta cộng các phần nguyên với nhau và cộng các phần phân số với nhau.

Cộng phần nguyên: $2+1=3$.

Cộng phần phân số: mẫu số $6$ chia hết cho $3$, nên ta đổi $\dfrac{1}{3}=\dfrac{1\times2}{3\times2}=\dfrac{2}{6}$. Khi đó
$$\frac{1}{3}+\frac{1}{6}=\frac{2}{6}+\frac{1}{6}=\frac{3}{6}=\frac{1}{2}.$$

Do đó
$$2\frac{1}{3}+1\frac{1}{6}=3+\frac{1}{2}=3\frac{1}{2}.$$

Thử lại bằng cách đổi ra phân số: $\dfrac{7}{3}+\dfrac{7}{6}=\dfrac{14}{6}+\dfrac{7}{6}=\dfrac{21}{6}=\dfrac{7}{2}=3\dfrac{1}{2}$.

Vậy $2\dfrac{1}{3}+1\dfrac{1}{6}=3\dfrac{1}{2}$.

**Đáp số.** $3\dfrac{1}{2}$.
:::

:::exercise
Tính: $4\dfrac{1}{2}-1\dfrac{3}{4}$.

::hint
**Kiến thức:** đổi hai hỗn số ra phân số rồi trừ.

**Gợi ý các bước:**
1. Đổi $4\dfrac{1}{2}$ và $1\dfrac{3}{4}$ thành phân số.
2. Quy đồng, trừ, rồi đổi kết quả thành hỗn số.

::solution
Phần phân số của số bị trừ là $\dfrac{1}{2}=\dfrac{2}{4}$, bé hơn $\dfrac{3}{4}$, nên ta đổi cả hai hỗn số ra phân số rồi trừ.

Đổi ra phân số:
$$4\frac{1}{2}=\frac{4\times2+1}{2}=\frac{9}{2};\qquad 1\frac{3}{4}=\frac{1\times4+3}{4}=\frac{7}{4}.$$

Quy đồng mẫu số rồi trừ:
$$\frac{9}{2}-\frac{7}{4}=\frac{18}{4}-\frac{7}{4}=\frac{11}{4}.$$

Đổi kết quả ra hỗn số: $11:4=2$ (dư $3$), nên $\dfrac{11}{4}=2\dfrac{3}{4}$.

Thử lại: $2\dfrac{3}{4}+1\dfrac{3}{4}=3+\dfrac{6}{4}=3+1\dfrac{2}{4}=4\dfrac{1}{2}$.

Vậy $4\dfrac{1}{2}-1\dfrac{3}{4}=2\dfrac{3}{4}$.

**Đáp số.** $2\dfrac{3}{4}$.
:::

:::exercise
Sáng nay Nam chạy bộ $1\dfrac{1}{2}$ km, chiều chạy thêm $2\dfrac{1}{4}$ km. Hỏi cả ngày Nam chạy bộ bao nhiêu ki-lô-mét?

::hint
**Kiến thức:** "cả ngày" là gộp lại: dùng phép cộng.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Cộng hai hỗn số. Thử lại: tổng phải lớn hơn mỗi số hạng.

::solution
Bài giải

Muốn biết cả ngày Nam chạy bao nhiêu ki-lô-mét, ta cộng quãng đường buổi sáng với quãng đường buổi chiều. Ta cộng phần nguyên: $1+2=3$; cộng phần phân số: $\dfrac{1}{2}+\dfrac{1}{4}=\dfrac{2}{4}+\dfrac{1}{4}=\dfrac{3}{4}$.

Cả ngày Nam chạy bộ được số ki-lô-mét là:
$$1\frac{1}{2}+2\frac{1}{4}=3+\left(\frac{2}{4}+\frac{1}{4}\right)=3\frac{3}{4}\ \text{(km)}.$$

Vậy cả ngày Nam chạy bộ được $3\dfrac{3}{4}$ km.

**Đáp số.** $3\dfrac{3}{4}$ km.
:::

:::exercise
Giả sử nhà bác Lan có $3\dfrac{1}{2}$ kg gạo. Bác dùng $1\dfrac{3}{4}$ kg để nấu cơm. Hỏi nhà bác còn bao nhiêu ki-lô-gam gạo?

::hint
**Kiến thức:** "còn lại" là bớt đi: dùng phép trừ.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Đổi ra phân số, trừ, rồi viết kết quả thành hỗn số. Nhớ ghi đơn vị.

::solution
Bài giải

Muốn biết còn lại bao nhiêu gạo, ta lấy số gạo có trừ đi số gạo đã dùng. Phần phân số $\dfrac{1}{2}=\dfrac{2}{4}$ bé hơn $\dfrac{3}{4}$, nên ta đổi hai hỗn số ra phân số: $3\dfrac{1}{2}=\dfrac{7}{2}$ và $1\dfrac{3}{4}=\dfrac{7}{4}$.

Số ki-lô-gam gạo còn lại là:
$$3\frac{1}{2}-1\frac{3}{4}=\frac{7}{2}-\frac{7}{4}=\frac{14}{4}-\frac{7}{4}=\frac{7}{4}=1\frac{3}{4}\ \text{(kg)}.$$

Thử lại: $1\dfrac{3}{4}+1\dfrac{3}{4}=2+\dfrac{6}{4}=3\dfrac{2}{4}=3\dfrac{1}{2}$ (kg), đúng bằng số gạo lúc đầu.

Vậy nhà bác Lan còn $1\dfrac{3}{4}$ kg gạo.

**Đáp số.** $1\dfrac{3}{4}$ kg.
:::

:::exercise
Em hãy nhớ lại bài về chu vi hình chữ nhật. Một mảnh vườn hình chữ nhật có chiều dài $2\dfrac{1}{2}$ m và chiều rộng $1\dfrac{1}{4}$ m. Tính chu vi mảnh vườn.

::hint
**Kiến thức:** chu vi hình chữ nhật bằng tổng chiều dài và chiều rộng, nhân với $2$.

**Gợi ý các bước:**
1. Tính tổng chiều dài và chiều rộng.
2. Nhân tổng đó với $2$, rồi viết kết quả thành hỗn số.

::solution
Bài giải

Chu vi hình chữ nhật bằng tổng chiều dài và chiều rộng (nửa chu vi) nhân với $2$. Ta đổi hai hỗn số ra phân số có cùng mẫu số $4$: $2\dfrac{1}{2}=\dfrac{5}{2}=\dfrac{10}{4}$ và $1\dfrac{1}{4}=\dfrac{5}{4}$.

Nửa chu vi mảnh vườn là:
$$2\frac{1}{2}+1\frac{1}{4}=\frac{10}{4}+\frac{5}{4}=\frac{15}{4}\ \text{(m)}.$$

Chu vi mảnh vườn là:
$$\frac{15}{4}\times2=\frac{30}{4}=\frac{15}{2}=7\frac{1}{2}\ \text{(m)}.$$

Vậy chu vi mảnh vườn là $7\dfrac{1}{2}$ m.

**Đáp số.** $7\dfrac{1}{2}$ m.
:::

:::exercise Thử thách
Tính nhanh: $1\dfrac{1}{2}+2\dfrac{1}{2}+3\dfrac{1}{2}+4\dfrac{1}{2}$.

::hint
**Kiến thức:** cộng riêng các phần nguyên và các phần phân số.

**Gợi ý các bước:**
1. Cộng các phần nguyên $1+2+3+4$.
2. Có bao nhiêu phần $\dfrac{1}{2}$? Hai phần $\dfrac{1}{2}$ làm thành số nào?

::solution
Mỗi hỗn số gồm phần nguyên và phần phân số $\dfrac{1}{2}$. Ta nhóm các phần nguyên với nhau và các phần phân số với nhau.

Tổng các phần nguyên là:
$$1+2+3+4=10.$$

Có bốn phần phân số, mỗi phần là $\dfrac{1}{2}$, nên tổng của chúng là:
$$\frac{1}{2}+\frac{1}{2}+\frac{1}{2}+\frac{1}{2}=4\times\frac{1}{2}=2.$$

Do đó
$$1\frac{1}{2}+2\frac{1}{2}+3\frac{1}{2}+4\frac{1}{2}=10+2=12.$$

Vậy tổng cần tính bằng $12$.

**Đáp số.** $12$.
:::

## Kiểm tra mini

:::quiz
::mc NB
Hỗn số $3\dfrac{4}{7}$ được đổi thành phân số là
A. $\dfrac{25}{7}$.
B. $\dfrac{34}{7}$.
C. $\dfrac{12}{7}$.
D. $\dfrac{25}{4}$.
::key A
$3\times7+4=25$ nên $3\dfrac{4}{7}=\dfrac{25}{7}$. Phương án C nhân phần nguyên với tử số; B viết liền các chữ số; D nhầm mẫu số.

::mc TH
Phân số $\dfrac{31}{9}$ được đổi thành hỗn số là
A. $4\dfrac{3}{9}$.
B. $3\dfrac{4}{9}$.
C. $3\dfrac{5}{9}$.
D. $4\dfrac{4}{9}$.
::key B
$31:9=3$ (dư $4$) nên $\dfrac{31}{9}=3\dfrac{4}{9}$. Phương án A đổi chỗ thương và số dư; C tính sai số dư; D lấy thương làm tròn lên.

::mc TH
Trong các số sau, số lớn nhất là
A. $2\dfrac{9}{10}$.
B. $3\dfrac{2}{5}$.
C. $3\dfrac{1}{2}$.
D. $2\dfrac{3}{4}$.
::key C
Hai số có phần nguyên $3$ lớn hơn hai số có phần nguyên $2$. Giữa $3\dfrac{1}{2}$ và $3\dfrac{2}{5}$: $\dfrac{1}{2}=\dfrac{5}{10}>\dfrac{4}{10}=\dfrac{2}{5}$. Phương án A chỉ nhìn phần phân số lớn nhất; B cho rằng mẫu số lớn hơn thì phân số lớn hơn.

::mc VD
Kết quả của $2\dfrac{3}{4}+1\dfrac{2}{3}$ là
A. $3\dfrac{5}{7}$.
B. $3\dfrac{5}{12}$.
C. $3\dfrac{17}{12}$.
D. $4\dfrac{5}{12}$.
::key D
$\dfrac{3}{4}+\dfrac{2}{3}=\dfrac{17}{12}=1\dfrac{5}{12}$ và $2+1=3$, nên tổng là $4\dfrac{5}{12}$. Phương án A cộng tử với tử, mẫu với mẫu; C để phần phân số lớn hơn $1$; D quên nhớ $1$.

::tf NB NB TH TH
Em xét hỗn số $3\dfrac{2}{5}$.
a) $3\dfrac{2}{5}=3\times\dfrac{2}{5}$.
b) $3\dfrac{2}{5}=\dfrac{17}{5}$.
c) $3\dfrac{2}{5}>3\dfrac{1}{2}$.
d) $3\dfrac{2}{5}$ lớn hơn $3$ nhưng bé hơn $4$.
::key S Đ S Đ
a) Sai: $3\dfrac{2}{5}$ là $3+\dfrac{2}{5}$, không phải $3\times\dfrac{2}{5}$. b) Đúng: $3\times5+2=17$. c) Sai: $\dfrac{2}{5}=\dfrac{4}{10}<\dfrac{5}{10}=\dfrac{1}{2}$. d) Đúng: phần phân số $\dfrac{2}{5}$ bé hơn $1$.

::sa NB
Số?  $4\dfrac{3}{8}=\dfrac{?}{8}$.
::key 35
$4\times8+3=35$.

::sa VD
Hai bao đường nặng $2\dfrac{3}{4}$ kg và $1\dfrac{1}{2}$ kg. Cả hai bao nặng $\dfrac{a}{4}$ kg. Tìm $a$.
::key 17
$\dfrac{11}{4}+\dfrac{6}{4}=\dfrac{17}{4}$, nên $a=17$.
:::
