---
title: Cộng, trừ hai phân số khác mẫu số
description: Em học quy đồng mẫu số để cộng, trừ hai phân số khác mẫu số, rồi rút gọn kết quả và giải bài toán có lời văn.
minutes: 15
---

:::goals
- Biết quy đồng mẫu số hai phân số khác mẫu số.
- Cộng, trừ hai phân số khác mẫu số rồi rút gọn kết quả.
- Tính giá trị biểu thức có ba phân số.
- Giải bài toán có lời văn bằng phép cộng, phép trừ phân số.
:::

Một chiếc bánh được chia cho hai bạn. Mai ăn $\dfrac{1}{3}$ cái bánh, Nam ăn $\dfrac{1}{4}$ cái bánh. Hỏi hai bạn ăn tất cả mấy phần của cái bánh?

Hai phần bánh này to nhỏ khác nhau, nên em chưa gộp ngay được. Bài này giúp em biến chúng thành những phần bằng nhau.

## Cùng khám phá

Em chia cái bánh thành $12$ phần bằng nhau, vì $12$ chia hết cho cả $3$ và $4$.

- $\dfrac{1}{3}$ cái bánh là $4$ phần trong $12$ phần, tức là $\dfrac{4}{12}$.
- $\dfrac{1}{4}$ cái bánh là $3$ phần trong $12$ phần, tức là $\dfrac{3}{12}$.
- Cả hai bạn ăn $4+3=7$ phần, tức là $\dfrac{7}{12}$ cái bánh.

Vậy $\dfrac{1}{3}+\dfrac{1}{4}=\dfrac{4}{12}+\dfrac{3}{12}=\dfrac{7}{12}$.

:::graph Trên tia số: từ 1/3 đi thêm 1/4 thì đến 7/12
alt: Tia số từ 0 đến 1, đánh dấu các điểm 0, 1/3, 7/12 và 1; đoạn từ 1/3 đến 7/12 được tô đậm
x: 0..1
y: -1..1
segment: (0, 0) (1, 0)
point: (0, 0) "0" below
point: (0.3333, 0) "1/3" below
point: (0.5833, 0) "7/12" above
point: (1, 0) "1" below
:::

:::theorem Cộng, trừ hai phân số khác mẫu số
Muốn cộng (hoặc trừ) hai phân số khác mẫu số:
1. Quy đồng mẫu số hai phân số.
2. Cộng (hoặc trừ) hai tử số, giữ nguyên mẫu số chung.
3. Rút gọn kết quả nếu có thể.
:::

Vì sao đúng? Chia mỗi phần của một phân số thành $k$ phần nhỏ bằng nhau thì tử số và mẫu số cùng nhân với $k$, còn giá trị phân số không đổi. Sau khi quy đồng, các phần đều bằng nhau nên ta cộng, trừ số phần như cộng, trừ số tự nhiên.

**Kết nối.** Cách này dùng lại quy đồng mẫu số và rút gọn phân số em đã học. Về sau, nó giúp em làm phép nhân, phép chia phân số và cả số thập phân, vì $\dfrac{1}{4}=\dfrac{25}{100}$.

## Ví dụ

Ta bắt đầu với hai phân số có mẫu số nhỏ.

:::example Tính $\dfrac{1}{2}+\dfrac{1}{3}$
**Lời giải.** Mẫu số chung là $6$, vì $6$ chia hết cho $2$ và $3$:
$$\dfrac{1}{2}+\dfrac{1}{3}=\dfrac{3}{6}+\dfrac{2}{6}=\dfrac{5}{6}.$$
Vậy $\dfrac{1}{2}+\dfrac{1}{3}=\dfrac{5}{6}$.
:::

Bây giờ đến phép trừ, mẫu số chung là $12$.

:::example Tính $\dfrac{5}{6}-\dfrac{1}{4}$
**Lời giải.** Mẫu số chung là $12$. Ta quy đồng, rồi trừ hai tử số:
$$\dfrac{5}{6}-\dfrac{1}{4}=\dfrac{10}{12}-\dfrac{3}{12}=\dfrac{7}{12}.$$
Vậy $\dfrac{5}{6}-\dfrac{1}{4}=\dfrac{7}{12}$.
:::

Khi một mẫu số chia hết cho mẫu số kia, ta chỉ cần quy đồng một phân số, và nhớ rút gọn.

:::example Tính $\dfrac{3}{4}-\dfrac{5}{12}$
**Lời giải.** Vì $12$ chia hết cho $4$ nên ta lấy $12$ làm mẫu số chung và chỉ đổi $\dfrac{3}{4}$:
$$\dfrac{3}{4}-\dfrac{5}{12}=\dfrac{9}{12}-\dfrac{5}{12}=\dfrac{4}{12}=\dfrac{1}{3}.$$
Vậy $\dfrac{3}{4}-\dfrac{5}{12}=\dfrac{1}{3}$.
:::

Với ba phân số, em làm lần lượt từ trái sang phải, hoặc quy đồng cả ba cùng lúc.

:::example Tính $\dfrac{7}{10}+\dfrac{1}{4}-\dfrac{2}{5}$
**Lời giải.** Mẫu số chung của $10$, $4$ và $5$ là $20$:
$$\dfrac{7}{10}+\dfrac{1}{4}-\dfrac{2}{5}=\dfrac{14}{20}+\dfrac{5}{20}-\dfrac{8}{20}=\dfrac{11}{20}.$$
Vậy kết quả là $\dfrac{11}{20}$.
:::

Cuối cùng là một bài toán thực tế, em làm theo bốn bước.

:::example Mảnh vườn nhà bác Hoa
Giả sử mảnh vườn nhà bác Hoa có $\dfrac{2}{5}$ diện tích trồng rau, $\dfrac{1}{3}$ diện tích trồng hoa, phần còn lại là lối đi. Hỏi lối đi chiếm mấy phần diện tích mảnh vườn?

**Hiểu đề.** Biết phần trồng rau và phần trồng hoa. Cần tìm phần lối đi, trong khi cả vườn là $1$.

**Tìm cách giải.** Tìm phần đã trồng cây (phép cộng), rồi lấy $1$ trừ đi phần đó.

**Bài giải.** Phần diện tích đã trồng rau và hoa là:
$$\dfrac{2}{5}+\dfrac{1}{3}=\dfrac{6}{15}+\dfrac{5}{15}=\dfrac{11}{15}\ \text{(diện tích vườn)}.$$
Phần diện tích lối đi là:
$$1-\dfrac{11}{15}=\dfrac{15}{15}-\dfrac{11}{15}=\dfrac{4}{15}\ \text{(diện tích vườn)}.$$
Đáp số: $\dfrac{4}{15}$ diện tích vườn.

**Nhìn lại.** Có cách khác không? Có: $1-\dfrac{2}{5}-\dfrac{1}{3}=\dfrac{15}{15}-\dfrac{6}{15}-\dfrac{5}{15}=\dfrac{4}{15}$, cùng kết quả. Kết quả có hợp lí không? Có, vì phần trồng cây và phần lối đi cộng lại phải bằng cả vườn: $\dfrac{11}{15}+\dfrac{4}{15}=1$.
:::

:::warning Những lỗi em hay gặp
- **Cộng tử với tử, mẫu với mẫu.** Sai: $\dfrac{1}{3}+\dfrac{1}{4}=\dfrac{2}{7}$. Vì sao sai: $\dfrac{2}{7}$ bé hơn $\dfrac{1}{3}$, mà tổng không thể bé hơn một số hạng. Đúng: $\dfrac{4}{12}+\dfrac{3}{12}=\dfrac{7}{12}$.
- **Chỉ đổi mẫu số, không đổi tử số.** Sai: $\dfrac{1}{2}+\dfrac{1}{3}=\dfrac{1}{6}+\dfrac{1}{6}=\dfrac{2}{6}$. Vì sao sai: đổi mẫu thành $6$ mà giữ nguyên tử thì phân số đã thay đổi giá trị. Đúng: $\dfrac{3}{6}+\dfrac{2}{6}=\dfrac{5}{6}$.
- **Quên rút gọn.** Sai: $\dfrac{3}{4}-\dfrac{5}{12}=\dfrac{4}{12}$ (chưa tối giản). Đúng: $\dfrac{4}{12}=\dfrac{1}{3}$.
:::

## Thuật ngữ

:::terms
- phân số | fraction
- tử số | numerator
- mẫu số | denominator
- quy đồng mẫu số | write over a common denominator
- mẫu số chung | common denominator
- rút gọn phân số | simplify a fraction
- phân số tối giản | fraction in its simplest form
- tổng | sum
- hiệu | difference
:::

## Tóm tắt

- Hai phân số khác mẫu số thì phải **quy đồng mẫu số** trước khi cộng, trừ.
- Sau khi quy đồng, ta cộng (trừ) hai tử số và **giữ nguyên mẫu số chung**.
- Cuối cùng em rút gọn kết quả về phân số tối giản.
- Phần còn lại của một cái gì đó bằng $1$ trừ đi phần đã dùng.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính: $\dfrac{1}{4}+\dfrac{2}{3}$.

::hint
**Kiến thức:** quy đồng mẫu số rồi cộng hai tử số.

**Gợi ý các bước:**
1. Tìm mẫu số chung của $4$ và $3$.
2. Đổi hai phân số, rồi cộng.

::solution
Hai phân số có mẫu số khác nhau nên ta quy đồng mẫu số. Mẫu số chung là $12$ (vì $12=4\times3$).

Ta có $\dfrac{1}{4}=\dfrac{1\times3}{4\times3}=\dfrac{3}{12}$ và $\dfrac{2}{3}=\dfrac{2\times4}{3\times4}=\dfrac{8}{12}$.

Cộng hai phân số cùng mẫu số:
$$\frac{1}{4}+\frac{2}{3}=\frac{3}{12}+\frac{8}{12}=\frac{3+8}{12}=\frac{11}{12}.$$

Phân số $\dfrac{11}{12}$ đã tối giản vì $11$ và $12$ chỉ có ước chung là $1$.

Vậy $\dfrac{1}{4}+\dfrac{2}{3}=\dfrac{11}{12}$.

**Đáp số.** $\dfrac{11}{12}$.
:::

:::exercise
Tính: $\dfrac{5}{6}-\dfrac{3}{8}$.

::hint
**Kiến thức:** mẫu số chung là một số chia hết cho cả hai mẫu số.

**Gợi ý các bước:**
1. Mẫu số chung nhỏ nhất của $6$ và $8$ là bao nhiêu?
2. Quy đồng rồi trừ.

::solution
Hai phân số có mẫu số khác nhau nên ta quy đồng mẫu số. Mẫu số chung là $24$ (vì $24=6\times4=8\times3$).

Ta có $\dfrac{5}{6}=\dfrac{5\times4}{6\times4}=\dfrac{20}{24}$ và $\dfrac{3}{8}=\dfrac{3\times3}{8\times3}=\dfrac{9}{24}$.

Trừ hai phân số cùng mẫu số:
$$\frac{5}{6}-\frac{3}{8}=\frac{20}{24}-\frac{9}{24}=\frac{20-9}{24}=\frac{11}{24}.$$

Phân số $\dfrac{11}{24}$ đã tối giản.

Vậy $\dfrac{5}{6}-\dfrac{3}{8}=\dfrac{11}{24}$.

**Đáp số.** $\dfrac{11}{24}$.
:::

:::exercise
Tính rồi rút gọn kết quả: $\dfrac{3}{4}+\dfrac{1}{12}$.

::hint
**Kiến thức:** $12$ chia hết cho $4$, nên chỉ cần đổi một phân số.

**Gợi ý các bước:**
1. Đổi $\dfrac{3}{4}$ thành phân số có mẫu số $12$.
2. Cộng, rồi rút gọn.

::solution
Mẫu số $12$ chia hết cho mẫu số $4$ nên ta chọn $12$ làm mẫu số chung và chỉ cần quy đồng phân số thứ nhất:
$$\frac{3}{4}=\frac{3\times3}{4\times3}=\frac{9}{12}.$$

Cộng hai phân số cùng mẫu số:
$$\frac{3}{4}+\frac{1}{12}=\frac{9}{12}+\frac{1}{12}=\frac{10}{12}.$$

Rút gọn kết quả: chia cả tử số và mẫu số cho $2$ (là ước chung lớn nhất của $10$ và $12$), ta được
$$\frac{10}{12}=\frac{10:2}{12:2}=\frac{5}{6}.$$

Vậy $\dfrac{3}{4}+\dfrac{1}{12}=\dfrac{5}{6}$.

**Đáp số.** $\dfrac{5}{6}$.
:::

:::exercise
Số?  $\dfrac{1}{2}+\ ?=\dfrac{5}{6}$.

::hint
**Kiến thức:** muốn tìm số hạng chưa biết, lấy tổng trừ số hạng đã biết.

**Gợi ý các bước:**
1. Viết phép tính $\dfrac{5}{6}-\dfrac{1}{2}$.
2. Quy đồng, trừ, rồi rút gọn.

::solution
Số cần tìm là số hạng chưa biết. Muốn tìm một số hạng, ta lấy tổng trừ đi số hạng đã biết:
$$?=\frac{5}{6}-\frac{1}{2}.$$

Quy đồng mẫu số: mẫu số chung là $6$ và $\dfrac{1}{2}=\dfrac{1\times3}{2\times3}=\dfrac{3}{6}$.

Ta có
$$\frac{5}{6}-\frac{1}{2}=\frac{5}{6}-\frac{3}{6}=\frac{2}{6}=\frac{1}{3}.$$

Thử lại: $\dfrac{1}{2}+\dfrac{1}{3}=\dfrac{3}{6}+\dfrac{2}{6}=\dfrac{5}{6}$. Đúng.

Vậy số cần điền vào dấu $?$ là $\dfrac{1}{3}$.

**Đáp số.** $\dfrac{1}{3}$.
:::

:::exercise
Buổi sáng Lan uống $\dfrac{1}{4}$ chai nước, buổi trưa Lan uống $\dfrac{2}{5}$ chai nước. Hỏi Lan đã uống mấy phần chai nước? Còn lại mấy phần chai nước?

::hint
**Kiến thức:** "đã uống cả hai buổi" là gộp lại, phần còn lại là $1$ trừ đi phần đã uống.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì? Cộng hai phần đã uống.
2. Lấy $1$ trừ đi kết quả. Thử lại: phần uống cộng phần còn lại phải bằng $1$.

::solution
Bài giải

Phần chai nước Lan đã uống (buổi sáng và buổi trưa) là:
$$\frac{1}{4}+\frac{2}{5}=\frac{5}{20}+\frac{8}{20}=\frac{13}{20}\ \text{(chai)}.$$

Coi cả chai nước là $1$ (chai). Phần chai nước còn lại là:
$$1-\frac{13}{20}=\frac{20}{20}-\frac{13}{20}=\frac{7}{20}\ \text{(chai)}.$$

Vậy Lan đã uống $\dfrac{13}{20}$ chai nước và còn lại $\dfrac{7}{20}$ chai nước.

**Đáp số.** Đã uống $\dfrac{13}{20}$ chai; còn lại $\dfrac{7}{20}$ chai.
:::

:::exercise
Một sợi dây dài $\dfrac{7}{8}$ m. Cô giáo cắt đi $\dfrac{1}{3}$ m để làm dây nhảy. Hỏi sợi dây còn lại dài bao nhiêu mét?

::hint
**Kiến thức:** "cắt đi" nghĩa là bớt đi: dùng phép trừ.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Quy đồng $\dfrac{7}{8}$ và $\dfrac{1}{3}$ rồi trừ. Nhớ ghi đơn vị.

::solution
Bài giải

Muốn biết sợi dây còn lại dài bao nhiêu mét, ta lấy độ dài ban đầu trừ đi độ dài đã cắt. Quy đồng mẫu số với mẫu số chung là $24$:
$$\frac{7}{8}=\frac{21}{24},\qquad \frac{1}{3}=\frac{8}{24}.$$

Sợi dây còn lại dài:
$$\frac{7}{8}-\frac{1}{3}=\frac{21}{24}-\frac{8}{24}=\frac{13}{24}\ \text{(m)}.$$

Vậy sợi dây còn lại dài $\dfrac{13}{24}$ m.

**Đáp số.** $\dfrac{13}{24}$ m.
:::

:::exercise
Em hãy nhớ lại bài so sánh phân số. So sánh $\dfrac{5}{8}$ và $\dfrac{7}{12}$, rồi tính xem phân số lớn hơn lớn hơn phân số bé bao nhiêu.

::hint
**Kiến thức:** quy đồng mẫu số thì so sánh hai tử số; hiệu của hai phân số là phép trừ.

**Gợi ý các bước:**
1. Quy đồng hai phân số về cùng mẫu số.
2. So sánh hai tử số, rồi lấy phân số lớn trừ phân số bé.

::solution
Quy đồng mẫu số hai phân số với mẫu số chung là $24$:
$$\frac{5}{8}=\frac{5\times3}{8\times3}=\frac{15}{24},\qquad \frac{7}{12}=\frac{7\times2}{12\times2}=\frac{14}{24}.$$

Hai phân số có cùng mẫu số, phân số nào có tử số lớn hơn thì lớn hơn. Vì $15>14$ nên $\dfrac{15}{24}>\dfrac{14}{24}$, tức là $\dfrac{5}{8}>\dfrac{7}{12}$.

Phân số lớn hơn phân số bé một khoảng bằng hiệu của chúng:
$$\frac{5}{8}-\frac{7}{12}=\frac{15}{24}-\frac{14}{24}=\frac{1}{24}.$$

Vậy $\dfrac{5}{8}>\dfrac{7}{12}$ và phân số $\dfrac{5}{8}$ lớn hơn phân số $\dfrac{7}{12}$ là $\dfrac{1}{24}$.

**Đáp số.** $\dfrac{5}{8}>\dfrac{7}{12}$ và hơn nhau $\dfrac{1}{24}$.
:::

:::exercise
Một mảnh đất, giả sử, dùng $\dfrac{3}{10}$ diện tích để xây nhà và $\dfrac{1}{4}$ diện tích để đào ao. Phần đất còn lại trồng cây. Hỏi phần đất trồng cây chiếm mấy phần diện tích mảnh đất?

::hint
**Kiến thức:** cả mảnh đất là $1$; phần trồng cây là phần còn lại.

**Gợi ý các bước:**
1. Tính phần đất xây nhà và đào ao.
2. Lấy $1$ trừ đi phần đó.

::solution
Bài giải

Coi cả mảnh đất là $1$ (diện tích). Phần đất dùng để xây nhà và đào ao là:
$$\frac{3}{10}+\frac{1}{4}=\frac{6}{20}+\frac{5}{20}=\frac{11}{20}\ \text{(diện tích)}.$$

Phần đất còn lại để trồng cây là:
$$1-\frac{11}{20}=\frac{20}{20}-\frac{11}{20}=\frac{9}{20}\ \text{(diện tích)}.$$

Vậy phần đất trồng cây chiếm $\dfrac{9}{20}$ diện tích mảnh đất.

**Đáp số.** $\dfrac{9}{20}$ diện tích mảnh đất.
:::

:::exercise Thử thách
Tính nhanh: $\dfrac{1}{2}+\dfrac{1}{6}+\dfrac{1}{12}+\dfrac{1}{20}+\dfrac{1}{30}$.

::hint
**Kiến thức:** $\dfrac{1}{2}=1-\dfrac{1}{2}$ và $\dfrac{1}{6}=\dfrac{1}{2}-\dfrac{1}{3}$.

**Gợi ý các bước:**
1. Viết $\dfrac{1}{12}$, $\dfrac{1}{20}$, $\dfrac{1}{30}$ thành hiệu của hai phân số theo cách tương tự.
2. Nhìn xem những phân số nào triệt tiêu nhau.

::solution
Ta nhận thấy các mẫu số là tích của hai số tự nhiên liên tiếp:
$$2=1\times2,\quad 6=2\times3,\quad 12=3\times4,\quad 20=4\times5,\quad 30=5\times6.$$

Với hai số tự nhiên liên tiếp $n$ và $n+1$, ta có $\dfrac{1}{n}-\dfrac{1}{n+1}=\dfrac{n+1-n}{n(n+1)}=\dfrac{1}{n(n+1)}$. Do đó
$$\frac{1}{2}=1-\frac{1}{2},\quad \frac{1}{6}=\frac{1}{2}-\frac{1}{3},\quad \frac{1}{12}=\frac{1}{3}-\frac{1}{4},\quad \frac{1}{20}=\frac{1}{4}-\frac{1}{5},\quad \frac{1}{30}=\frac{1}{5}-\frac{1}{6}.$$

Thay vào tổng, ta được
$$\left(1-\frac{1}{2}\right)+\left(\frac{1}{2}-\frac{1}{3}\right)+\left(\frac{1}{3}-\frac{1}{4}\right)+\left(\frac{1}{4}-\frac{1}{5}\right)+\left(\frac{1}{5}-\frac{1}{6}\right).$$

Các phân số ở giữa đối nhau nên triệt tiêu từng cặp, chỉ còn số đầu và số cuối:
$$1-\frac{1}{6}=\frac{6}{6}-\frac{1}{6}=\frac{5}{6}.$$

Vậy $\dfrac{1}{2}+\dfrac{1}{6}+\dfrac{1}{12}+\dfrac{1}{20}+\dfrac{1}{30}=\dfrac{5}{6}$.

**Đáp số.** $\dfrac{5}{6}$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Kết quả của $\dfrac{2}{3}+\dfrac{1}{5}$ là
A. $\dfrac{3}{8}$.
B. $\dfrac{11}{15}$.
C. $\dfrac{3}{15}$.
D. $\dfrac{13}{15}$.
::key D
$\dfrac{2}{3}=\dfrac{10}{15}$ và $\dfrac{1}{5}=\dfrac{3}{15}$ nên tổng là $\dfrac{13}{15}$. Phương án A cộng tử với tử, mẫu với mẫu; C và B quên đổi tử số.

::mc TH
Kết quả của $\dfrac{7}{8}-\dfrac{1}{4}$ là
A. $\dfrac{5}{8}$.
B. $\dfrac{3}{4}$.
C. $\dfrac{1}{2}$.
D. $\dfrac{6}{4}$.
::key A
$\dfrac{7}{8}-\dfrac{2}{8}=\dfrac{5}{8}$. Phương án D trừ tử với tử, mẫu với mẫu; B quên đổi tử số của $\dfrac{1}{4}$; C trừ tử và cộng mẫu.

::mc TH
Kết quả của $\dfrac{1}{4}+\dfrac{1}{12}$, viết dưới dạng phân số tối giản, là
A. $\dfrac{1}{8}$.
B. $\dfrac{1}{3}$.
C. $\dfrac{4}{12}$.
D. $\dfrac{1}{6}$.
::key B
$\dfrac{3}{12}+\dfrac{1}{12}=\dfrac{4}{12}=\dfrac{1}{3}$. Phương án A cộng tử với tử, mẫu với mẫu; C chưa rút gọn; D quên đổi tử số của $\dfrac{1}{4}$.

::mc VD
Một thùng sơn, buổi sáng dùng $\dfrac{1}{3}$ thùng, buổi chiều dùng $\dfrac{1}{5}$ thùng. Số phần thùng sơn còn lại là
A. $\dfrac{8}{15}$.
B. $\dfrac{3}{4}$.
C. $\dfrac{7}{15}$.
D. $\dfrac{3}{5}$.
::key C
Đã dùng $\dfrac{5}{15}+\dfrac{3}{15}=\dfrac{8}{15}$ thùng, còn lại $1-\dfrac{8}{15}=\dfrac{7}{15}$. Phương án A quên lấy $1$ trừ đi; B cộng tử với tử, mẫu với mẫu rồi lấy $1$ trừ đi; D quên đổi tử số của $\dfrac{1}{5}$.

::tf TH NB TH TH
Em xét hiệu $\dfrac{3}{4}-\dfrac{1}{6}$.
a) Mẫu số chung nhỏ nhất của hai phân số là $24$.
b) $\dfrac{3}{4}-\dfrac{1}{6}=\dfrac{9}{12}-\dfrac{2}{12}$.
c) $\dfrac{3}{4}-\dfrac{1}{6}=\dfrac{7}{12}$.
d) Hiệu này lớn hơn $\dfrac{1}{2}$.
::key S Đ Đ Đ
a) Sai: $12$ chia hết cho cả $4$ và $6$ nên mẫu số chung nhỏ nhất là $12$. b) Đúng: $\dfrac{3}{4}=\dfrac{9}{12}$ và $\dfrac{1}{6}=\dfrac{2}{12}$. c) Đúng: $9-2=7$. d) Đúng: $\dfrac{7}{12}>\dfrac{6}{12}=\dfrac{1}{2}$.

::sa TH
Số?  $\dfrac{3}{4}-\dfrac{2}{5}=\dfrac{?}{20}$.
::key 7
$\dfrac{15}{20}-\dfrac{8}{20}=\dfrac{7}{20}$.

::sa VD
Mỗi giờ vòi thứ nhất chảy được $\dfrac{1}{4}$ bể, vòi thứ hai chảy được $\dfrac{1}{6}$ bể. Trong $1$ giờ cả hai vòi chảy được $\dfrac{a}{12}$ bể. Tìm $a$.
::key 5
$\dfrac{3}{12}+\dfrac{2}{12}=\dfrac{5}{12}$, nên $a=5$.
:::
