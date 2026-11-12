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
$$\dfrac{1}{4}+\dfrac{2}{3}=\dfrac{3}{12}+\dfrac{8}{12}=\dfrac{11}{12}.$$

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
Mẫu số chung là $24$:
$$\dfrac{5}{6}-\dfrac{3}{8}=\dfrac{20}{24}-\dfrac{9}{24}=\dfrac{11}{24}.$$

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
$$\dfrac{3}{4}+\dfrac{1}{12}=\dfrac{9}{12}+\dfrac{1}{12}=\dfrac{10}{12}=\dfrac{5}{6}.$$

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
$$\dfrac{5}{6}-\dfrac{1}{2}=\dfrac{5}{6}-\dfrac{3}{6}=\dfrac{2}{6}=\dfrac{1}{3}.$$

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
Phần chai nước Lan đã uống là:
$$\dfrac{1}{4}+\dfrac{2}{5}=\dfrac{5}{20}+\dfrac{8}{20}=\dfrac{13}{20}\ \text{(chai)}.$$
Phần chai nước còn lại là:
$$1-\dfrac{13}{20}=\dfrac{7}{20}\ \text{(chai)}.$$

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
Sợi dây còn lại dài:
$$\dfrac{7}{8}-\dfrac{1}{3}=\dfrac{21}{24}-\dfrac{8}{24}=\dfrac{13}{24}\ \text{(m)}.$$

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
Mẫu số chung là $24$: $\dfrac{5}{8}=\dfrac{15}{24}$ và $\dfrac{7}{12}=\dfrac{14}{24}$.

Vì $15>14$ nên $\dfrac{5}{8}>\dfrac{7}{12}$. Hiệu của chúng là $\dfrac{15}{24}-\dfrac{14}{24}=\dfrac{1}{24}$.

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
Phần đất xây nhà và đào ao là:
$$\dfrac{3}{10}+\dfrac{1}{4}=\dfrac{6}{20}+\dfrac{5}{20}=\dfrac{11}{20}\ \text{(diện tích)}.$$
Phần đất trồng cây là:
$$1-\dfrac{11}{20}=\dfrac{9}{20}\ \text{(diện tích)}.$$

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
Vì $2=1\times2$, $6=2\times3$, $12=3\times4$, $20=4\times5$, $30=5\times6$ nên:
$$\left(1-\dfrac{1}{2}\right)+\left(\dfrac{1}{2}-\dfrac{1}{3}\right)+\left(\dfrac{1}{3}-\dfrac{1}{4}\right)+\left(\dfrac{1}{4}-\dfrac{1}{5}\right)+\left(\dfrac{1}{5}-\dfrac{1}{6}\right)=1-\dfrac{1}{6}=\dfrac{5}{6}.$$

**Đáp số.** $\dfrac{5}{6}$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $\dfrac{2}{3}+\dfrac{1}{5}$ là
A. $\dfrac{3}{8}$.
B. $\dfrac{11}{15}$.
C. $\dfrac{3}{15}$.
D. $\dfrac{13}{15}$.
::key D
$\dfrac{2}{3}=\dfrac{10}{15}$ và $\dfrac{1}{5}=\dfrac{3}{15}$ nên tổng là $\dfrac{13}{15}$. Phương án A cộng tử với tử, mẫu với mẫu; C và B quên đổi tử số.

::mc
Kết quả của $\dfrac{7}{8}-\dfrac{1}{4}$ là
A. $\dfrac{5}{8}$.
B. $\dfrac{3}{4}$.
C. $\dfrac{1}{2}$.
D. $\dfrac{6}{4}$.
::key A
$\dfrac{7}{8}-\dfrac{2}{8}=\dfrac{5}{8}$. Phương án D trừ tử với tử, mẫu với mẫu; B quên đổi tử số của $\dfrac{1}{4}$; C trừ tử và cộng mẫu.

::mc
Kết quả của $\dfrac{1}{4}+\dfrac{1}{12}$, viết dưới dạng phân số tối giản, là
A. $\dfrac{1}{8}$.
B. $\dfrac{1}{3}$.
C. $\dfrac{4}{12}$.
D. $\dfrac{1}{6}$.
::key B
$\dfrac{3}{12}+\dfrac{1}{12}=\dfrac{4}{12}=\dfrac{1}{3}$. Phương án A cộng tử với tử, mẫu với mẫu; C chưa rút gọn; D quên đổi tử số của $\dfrac{1}{4}$.

::mc
Một thùng sơn, buổi sáng dùng $\dfrac{1}{3}$ thùng, buổi chiều dùng $\dfrac{1}{5}$ thùng. Số phần thùng sơn còn lại là
A. $\dfrac{8}{15}$.
B. $\dfrac{3}{4}$.
C. $\dfrac{7}{15}$.
D. $\dfrac{3}{5}$.
::key C
Đã dùng $\dfrac{5}{15}+\dfrac{3}{15}=\dfrac{8}{15}$ thùng, còn lại $1-\dfrac{8}{15}=\dfrac{7}{15}$. Phương án A quên lấy $1$ trừ đi; B cộng tử với tử, mẫu với mẫu rồi lấy $1$ trừ đi; D quên đổi tử số của $\dfrac{1}{5}$.

::tf
Em xét hiệu $\dfrac{3}{4}-\dfrac{1}{6}$.
a) Mẫu số chung nhỏ nhất của hai phân số là $24$.
b) $\dfrac{3}{4}-\dfrac{1}{6}=\dfrac{9}{12}-\dfrac{2}{12}$.
c) $\dfrac{3}{4}-\dfrac{1}{6}=\dfrac{7}{12}$.
d) Hiệu này lớn hơn $\dfrac{1}{2}$.
::key S Đ Đ Đ
a) Sai: $12$ chia hết cho cả $4$ và $6$ nên mẫu số chung nhỏ nhất là $12$. b) Đúng: $\dfrac{3}{4}=\dfrac{9}{12}$ và $\dfrac{1}{6}=\dfrac{2}{12}$. c) Đúng: $9-2=7$. d) Đúng: $\dfrac{7}{12}>\dfrac{6}{12}=\dfrac{1}{2}$.

::sa
Số?  $\dfrac{3}{4}-\dfrac{2}{5}=\dfrac{?}{20}$.
::key 7
$\dfrac{15}{20}-\dfrac{8}{20}=\dfrac{7}{20}$.

::sa
Mỗi giờ vòi thứ nhất chảy được $\dfrac{1}{4}$ bể, vòi thứ hai chảy được $\dfrac{1}{6}$ bể. Trong $1$ giờ cả hai vòi chảy được $\dfrac{a}{12}$ bể. Tìm $a$.
::key 5
$\dfrac{3}{12}+\dfrac{2}{12}=\dfrac{5}{12}$, nên $a=5$.
:::
