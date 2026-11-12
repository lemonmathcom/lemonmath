---
title: Phép nhân phân số. Phép chia phân số
description: Em học nhân hai phân số, nhân phân số với số tự nhiên, chia phân số bằng cách nhân với phân số đảo ngược và giải bài toán có lời văn.
minutes: 25
---

:::goals
- Nhân hai phân số và nhân phân số với số tự nhiên, rút gọn kết quả.
- Hiểu vì sao nhân hai phân số là nhân tử số với tử số, mẫu số với mẫu số.
- Chia một phân số cho một phân số, cho một số tự nhiên bằng cách nhân với phân số đảo ngược.
- Giải bài toán có lời văn bằng phép nhân, phép chia phân số.
:::

Giả sử một tấm bìa hình chữ nhật có chiều dài $\dfrac{2}{3}$ m và chiều rộng $\dfrac{1}{2}$ m. Ở một chỗ khác, một chiếc can có $\dfrac{3}{4}$ lít nước, và người ta rót nước vào các chiếc cốc, mỗi cốc $\dfrac{1}{8}$ lít.

Diện tích tấm bìa là bao nhiêu mét vuông? Rót được đầy bao nhiêu cốc? Hai bài toán này cần nhân và chia hai phân số. Bài này dạy em cách làm cả hai.

## Phép nhân phân số

### Cùng khám phá

Em vẽ một hình chữ nhật chia thành $3$ cột và $2$ hàng, tức là $6$ ô bằng nhau, và coi cả hình là $1$ đơn vị diện tích. Lấy $\dfrac{2}{3}$ chiều rộng và $\dfrac{1}{2}$ chiều cao, em được phần tô gồm $2$ cột và $1$ hàng.

:::diagram Nhân $\dfrac{2}{3}$ với $\dfrac{1}{2}$ bằng hình chữ nhật chia ô
alt: Hình chữ nhật chia thành 3 cột và 2 hàng được 6 ô bằng nhau; phần hình chữ nhật có 2 cột và 1 hàng ở góc dưới bên trái gồm 2 ô được nhấn mạnh
point A 0,0 below-left
point B 3,0 below-right
point C 3,2 above-right
point D 0,2 above-left
point E 2,0 below
point F 2,1 right
point G 0,1 left
grid
polygon A B C D
polygon A E F G
:::

Phần tô có $2$ ô trong $6$ ô, nên diện tích phần tô là $\dfrac{2}{6}=\dfrac{1}{3}$ đơn vị. Cách làm này cho kết quả:
$$\dfrac{2}{3}\times\dfrac{1}{2}=\dfrac{2\times1}{3\times2}=\dfrac{2}{6}=\dfrac{1}{3}.$$

Em thấy: tử số $2$ lấy $2$ cột, tử số $1$ lấy $1$ hàng nên có $2\times1$ ô; mẫu số $3\times2$ là tổng số ô của cả hình.

:::theorem Nhân hai phân số
Muốn nhân hai phân số, ta nhân các tử số với nhau và nhân các mẫu số với nhau:
$$\dfrac{a}{b}\times\dfrac{c}{d}=\dfrac{a\times c}{b\times d}.$$

Muốn nhân một phân số với một số tự nhiên, ta nhân tử số với số tự nhiên và giữ nguyên mẫu số:
$$\dfrac{a}{b}\times n=\dfrac{a\times n}{b}.$$
Rút gọn kết quả nếu có thể.
:::

Vì sao nhân với số tự nhiên làm như vậy? Vì $n=\dfrac{n}{1}$, nên $\dfrac{a}{b}\times\dfrac{n}{1}=\dfrac{a\times n}{b\times1}=\dfrac{a\times n}{b}$.

**Kết nối.** Bài này dùng nhân số tự nhiên, rút gọn phân số và diện tích hình chữ nhật. Nó chuẩn bị cho bài tìm phân số của một số.

Ta bắt đầu với bài toán tấm bìa.

:::example Diện tích tấm bìa
Tấm bìa hình chữ nhật có chiều dài $\dfrac{2}{3}$ m và chiều rộng $\dfrac{1}{2}$ m. Tính diện tích tấm bìa.

**Lời giải.** Diện tích hình chữ nhật bằng chiều dài nhân chiều rộng:
$$\dfrac{2}{3}\times\dfrac{1}{2}=\dfrac{2\times1}{3\times2}=\dfrac{2}{6}=\dfrac{1}{3}\ (\text{m}^2).$$
Vậy diện tích tấm bìa là $\dfrac{1}{3}\ \text{m}^2$.
:::

Tiếp theo là hai phân số không rút gọn được.

:::example Nhân hai phân số
Tính $\dfrac{3}{5}\times\dfrac{2}{7}$.

**Lời giải.** Ta nhân các tử số với nhau và các mẫu số với nhau:
$$\dfrac{3}{5}\times\dfrac{2}{7}=\dfrac{3\times2}{5\times7}=\dfrac{6}{35}.$$
Phân số $\dfrac{6}{35}$ không rút gọn được. Vậy $\dfrac{3}{5}\times\dfrac{2}{7}=\dfrac{6}{35}$.
:::

Bây giờ nhân phân số với số tự nhiên.

:::example Nhân phân số với số tự nhiên
Tính $\dfrac{3}{8}\times4$.

**Lời giải.** Ta nhân tử số với $4$ và giữ nguyên mẫu số:
$$\dfrac{3}{8}\times4=\dfrac{3\times4}{8}=\dfrac{12}{8}.$$
Cả $12$ và $8$ chia hết cho $4$ nên $\dfrac{12}{8}=\dfrac{3}{2}$.

Vậy $\dfrac{3}{8}\times4=\dfrac{3}{2}$.
:::

Em có thể rút gọn trước khi nhân để các số nhỏ hơn.

:::example Rút gọn khi nhân
Tính $\dfrac{4}{9}\times\dfrac{3}{8}$.

**Lời giải.** Ta có $\dfrac{4}{9}\times\dfrac{3}{8}=\dfrac{4\times3}{9\times8}=\dfrac{12}{72}$. Cả $12$ và $72$ chia hết cho $12$ nên:
$$\dfrac{12}{72}=\dfrac{1}{6}.$$
Vậy $\dfrac{4}{9}\times\dfrac{3}{8}=\dfrac{1}{6}$.
:::

## Phép chia phân số

### Cùng khám phá

Ta trả lời câu hỏi về chiếc can. Chiếc can có $\dfrac{3}{4}$ lít nước, mỗi cốc $\dfrac{1}{8}$ lít, nên số cốc là $\dfrac{3}{4}:\dfrac{1}{8}$. Em đổi $\dfrac{3}{4}=\dfrac{6}{8}$ lít. Trong $\dfrac{6}{8}$ lít có $6$ phần tám lít, mỗi cốc là $1$ phần tám lít, nên rót được $6$ cốc.

Em thấy: $1$ lít có $8$ cốc loại $\dfrac{1}{8}$ lít. Chia cho $\dfrac{1}{8}$ nghĩa là nhân với $8$. Ta có
$$\dfrac{3}{4}:\dfrac{1}{8}=\dfrac{3}{4}\times8=\dfrac{24}{4}=6.$$

Phân số $\dfrac{8}{1}$ (tức là $8$) là phân số đảo ngược của $\dfrac{1}{8}$: ta đổi chỗ tử số và mẫu số.

:::theorem Chia hai phân số
Muốn chia một phân số cho một phân số khác $0$, ta nhân phân số thứ nhất với **phân số đảo ngược** của phân số thứ hai:
$$\dfrac{a}{b}:\dfrac{c}{d}=\dfrac{a}{b}\times\dfrac{d}{c}.$$

Phân số đảo ngược của $\dfrac{c}{d}$ là $\dfrac{d}{c}$ (đổi chỗ tử số và mẫu số). Chia cho một số tự nhiên khác $0$ là nhân với phân số đảo ngược của nó: $\dfrac{a}{b}:n=\dfrac{a}{b}\times\dfrac{1}{n}=\dfrac{a}{b\times n}$.
:::

Vì sao làm như vậy? Chia cho $\dfrac{c}{d}$ nghĩa là hỏi có bao nhiêu phần $\dfrac{c}{d}$ trong số đó. Mỗi đơn vị có $\dfrac{d}{c}$ phần như vậy, nên chia cho $\dfrac{c}{d}$ cũng là nhân với $\dfrac{d}{c}$.

:::example Chia hai phân số
Tính $\dfrac{2}{5}:\dfrac{3}{4}$.

**Lời giải.** Phân số đảo ngược của $\dfrac{3}{4}$ là $\dfrac{4}{3}$. Ta nhân với nó:
$$\dfrac{2}{5}:\dfrac{3}{4}=\dfrac{2}{5}\times\dfrac{4}{3}=\dfrac{2\times4}{5\times3}=\dfrac{8}{15}.$$
Vậy $\dfrac{2}{5}:\dfrac{3}{4}=\dfrac{8}{15}$.
:::

Chia phân số cho số tự nhiên, và chia số tự nhiên cho phân số.

:::example Chia với số tự nhiên
Tính:
a) $\dfrac{3}{5}:2$
b) $4:\dfrac{2}{3}$

**Lời giải.** a) Chia cho $2$ là nhân với $\dfrac{1}{2}$:
$$\dfrac{3}{5}:2=\dfrac{3}{5}\times\dfrac{1}{2}=\dfrac{3}{10}.$$
b) Phân số đảo ngược của $\dfrac{2}{3}$ là $\dfrac{3}{2}$. Ta nhân:
$$4:\dfrac{2}{3}=4\times\dfrac{3}{2}=\dfrac{12}{2}=6.$$
Vậy a) $\dfrac{3}{10}$; b) $6$.
:::

Bây giờ em giải bài toán rót nước.

:::example Rót nước vào cốc
Một chiếc can có $\dfrac{3}{4}$ lít nước. Người ta rót nước vào các chiếc cốc, mỗi cốc đựng $\dfrac{1}{8}$ lít. Hỏi rót được đầy bao nhiêu cốc?

**Hiểu đề.** Có $\dfrac{3}{4}$ lít nước, mỗi cốc $\dfrac{1}{8}$ lít. Cần tìm số cốc.

**Tìm cách giải.** Số cốc bằng số lít nước chia cho số lít nước trong mỗi cốc: $\dfrac{3}{4}:\dfrac{1}{8}$.

**Giải.** Số cốc rót được là:
$$\dfrac{3}{4}:\dfrac{1}{8}=\dfrac{3}{4}\times\dfrac{8}{1}=\dfrac{24}{4}=6\ \text{(cốc)}.$$

**Đáp số:** $6$ cốc.

**Nhìn lại.** Thử lại bằng phép nhân: $6\times\dfrac{1}{8}=\dfrac{6}{8}=\dfrac{3}{4}$ (lít), đúng bằng số nước trong can. Nếu mỗi cốc đựng $\dfrac{1}{4}$ lít thì rót được bao nhiêu cốc?
:::

:::warning Những lỗi em hay gặp
- **Quy đồng mẫu số rồi nhân như khi cộng.** Sai: $\dfrac{1}{2}\times\dfrac{1}{3}=\dfrac{3}{6}\times\dfrac{2}{6}=\dfrac{6}{6}=1$. Vì sao sai: nhân hai phân số bé hơn $1$ không thể được $1$. Đúng: $\dfrac{1}{2}\times\dfrac{1}{3}=\dfrac{1\times1}{2\times3}=\dfrac{1}{6}$.
- **Đảo ngược nhầm phân số.** Sai: $\dfrac{3}{4}:\dfrac{1}{8}=\dfrac{4}{3}\times\dfrac{1}{8}=\dfrac{1}{6}$. Vì sao sai: phải đảo ngược phân số thứ hai (số chia), không phải phân số thứ nhất. Đúng: $\dfrac{3}{4}:\dfrac{1}{8}=\dfrac{3}{4}\times8=6$.
- **Nhân cả mẫu số với số tự nhiên.** Sai: $\dfrac{3}{8}\times4=\dfrac{3}{32}$. Vì sao sai: kết quả $\dfrac{3}{32}$ bé hơn $\dfrac{3}{8}$, mà nhân với $4$ phải được số lớn hơn. Đúng: $\dfrac{3}{8}\times4=\dfrac{12}{8}=\dfrac{3}{2}$.
:::

## Thuật ngữ

:::terms
- phép nhân phân số | multiplication of fractions
- phép chia phân số | division of fractions
- phân số đảo ngược | reciprocal
- tích | product
- thương | quotient
- tử số | numerator
- mẫu số | denominator
- rút gọn | simplify
- số tự nhiên | natural number
- diện tích | area
:::

## Tóm tắt

- Nhân hai phân số: nhân tử số với tử số, mẫu số với mẫu số; rút gọn kết quả.
- Nhân phân số với số tự nhiên: $\dfrac{a}{b}\times n=\dfrac{a\times n}{b}$.
- Chia cho một phân số là nhân với phân số đảo ngược của nó: $\dfrac{a}{b}:\dfrac{c}{d}=\dfrac{a}{b}\times\dfrac{d}{c}$.
- Chia cho số tự nhiên $n$ là nhân với $\dfrac{1}{n}$; chia số tự nhiên cho phân số thì nhân với phân số đảo ngược.
- Thử lại phép chia bằng phép nhân.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính $\dfrac{3}{4}\times\dfrac{2}{5}$.

::hint
**Kiến thức:** nhân tử số với tử số, mẫu số với mẫu số.

**Gợi ý các bước:**
1. Nhân hai tử số, nhân hai mẫu số.
2. Rút gọn kết quả.

::solution
$$\dfrac{3}{4}\times\dfrac{2}{5}=\dfrac{3\times2}{4\times5}=\dfrac{6}{20}=\dfrac{3}{10}.$$

**Đáp số.** $\dfrac{3}{10}$.
:::

:::exercise
Tính $\dfrac{5}{12}\times3$.

::hint
**Kiến thức:** $\dfrac{a}{b}\times n=\dfrac{a\times n}{b}$.

**Gợi ý các bước:**
1. Nhân tử số với $3$, giữ nguyên mẫu số.
2. Rút gọn kết quả.

::solution
$$\dfrac{5}{12}\times3=\dfrac{5\times3}{12}=\dfrac{15}{12}=\dfrac{5}{4}.$$

**Đáp số.** $\dfrac{5}{4}$.
:::

:::exercise
Tính $\dfrac{6}{7}\times\dfrac{14}{15}$.

::hint
**Kiến thức:** có thể rút gọn kết quả bằng số chung lớn.

**Gợi ý các bước:**
1. Nhân tử số với tử số, mẫu số với mẫu số.
2. Rút gọn phân số.

::solution
$$\dfrac{6}{7}\times\dfrac{14}{15}=\dfrac{6\times14}{7\times15}=\dfrac{84}{105}=\dfrac{4}{5}.$$
Ở bước cuối, ta chia cả $84$ và $105$ cho $21$.

**Đáp số.** $\dfrac{4}{5}$.
:::

:::exercise
Tính $\dfrac{3}{4}:\dfrac{5}{6}$.

::hint
**Kiến thức:** chia cho một phân số là nhân với phân số đảo ngược.

**Gợi ý các bước:**
1. Phân số đảo ngược của $\dfrac{5}{6}$ là gì?
2. Nhân rồi rút gọn.

::solution
$$\dfrac{3}{4}:\dfrac{5}{6}=\dfrac{3}{4}\times\dfrac{6}{5}=\dfrac{18}{20}=\dfrac{9}{10}.$$

**Đáp số.** $\dfrac{9}{10}$.
:::

:::exercise
Tính:
a) $\dfrac{7}{8}:\dfrac{7}{4}$
b) $5:\dfrac{5}{6}$

::hint
**Kiến thức:** số tự nhiên $5$ có thể coi là $\dfrac{5}{1}$.

**Gợi ý các bước:**
1. Viết phép nhân với phân số đảo ngược của số chia.
2. Rút gọn kết quả.

::solution
a) $\dfrac{7}{8}:\dfrac{7}{4}=\dfrac{7}{8}\times\dfrac{4}{7}=\dfrac{28}{56}=\dfrac{1}{2}$.

b) $5:\dfrac{5}{6}=5\times\dfrac{6}{5}=\dfrac{30}{5}=6$.

**Đáp số.** a) $\dfrac{1}{2}$. b) $6$.
:::

:::exercise
Giả sử mỗi chiếc nơ cần $\dfrac{2}{5}$ m ruy-băng. Hỏi làm $6$ chiếc nơ như vậy cần bao nhiêu mét ruy-băng?

::hint
**Kiến thức:** số mét cần dùng bằng số mét cho mỗi chiếc nhân số chiếc.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Nhân $\dfrac{2}{5}$ với $6$ và ghi đơn vị mét.

::solution
Số mét ruy-băng cần dùng là:
$$\dfrac{2}{5}\times6=\dfrac{2\times6}{5}=\dfrac{12}{5}\ \text{(m)}.$$

**Đáp số.** $\dfrac{12}{5}$ m.
:::

:::exercise
Một tấm kính hình chữ nhật có chiều dài $\dfrac{3}{4}$ m và chiều rộng $\dfrac{2}{3}$ m. Tính diện tích tấm kính.

::hint
**Kiến thức:** diện tích hình chữ nhật bằng chiều dài nhân chiều rộng.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Nhân hai phân số, rút gọn, ghi đơn vị mét vuông.

::solution
Diện tích tấm kính là:
$$\dfrac{3}{4}\times\dfrac{2}{3}=\dfrac{6}{12}=\dfrac{1}{2}\ (\text{m}^2).$$

**Đáp số.** $\dfrac{1}{2}\ \text{m}^2$.
:::

:::exercise
Giả sử $\dfrac{5}{6}$ kg gạo được chia đều vào $5$ túi nhỏ. Hỏi mỗi túi có bao nhiêu ki-lô-gam gạo?

::hint
**Kiến thức:** chia cho $5$ là nhân với $\dfrac{1}{5}$.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Tính $\dfrac{5}{6}:5$ rồi rút gọn.

::solution
Số ki-lô-gam gạo trong mỗi túi là:
$$\dfrac{5}{6}:5=\dfrac{5}{6}\times\dfrac{1}{5}=\dfrac{5}{30}=\dfrac{1}{6}\ \text{(kg)}.$$

**Thử lại.** $\dfrac{1}{6}\times5=\dfrac{5}{6}$. Đúng.

**Đáp số.** $\dfrac{1}{6}$ kg.
:::

:::exercise
Em hãy nhớ lại bài cộng phân số. Tính $\dfrac{1}{2}\times\dfrac{1}{3}+\dfrac{1}{6}$.

::hint
**Kiến thức:** thực hiện phép nhân trước, rồi cộng.

**Gợi ý các bước:**
1. Tính $\dfrac{1}{2}\times\dfrac{1}{3}$.
2. Cộng với $\dfrac{1}{6}$ và rút gọn.

::solution
$\dfrac{1}{2}\times\dfrac{1}{3}=\dfrac{1}{6}$.

Do đó $\dfrac{1}{6}+\dfrac{1}{6}=\dfrac{2}{6}=\dfrac{1}{3}$.

**Đáp số.** $\dfrac{1}{3}$.
:::

:::exercise Thử thách
Một hình chữ nhật có diện tích $\dfrac{3}{5}\ \text{m}^2$ và chiều rộng $\dfrac{1}{2}$ m. Tính chiều dài của hình chữ nhật đó.

::hint
**Kiến thức:** diện tích $=$ chiều dài $\times$ chiều rộng, nên chiều dài $=$ diện tích $:$ chiều rộng.

**Gợi ý các bước:**
1. Viết phép chia cần làm.
2. Nhân với phân số đảo ngược, rồi thử lại.

::solution
Chiều dài hình chữ nhật là:
$$\dfrac{3}{5}:\dfrac{1}{2}=\dfrac{3}{5}\times2=\dfrac{6}{5}\ \text{(m)}.$$

**Thử lại.** $\dfrac{6}{5}\times\dfrac{1}{2}=\dfrac{6}{10}=\dfrac{3}{5}$. Đúng.

**Đáp số.** $\dfrac{6}{5}$ m.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $\dfrac{2}{3}\times\dfrac{3}{5}$ là
A. $\dfrac{6}{8}$.
B. $\dfrac{5}{8}$.
C. $\dfrac{2}{5}$.
D. $\dfrac{9}{10}$.
::key C
$\dfrac{2}{3}\times\dfrac{3}{5}=\dfrac{6}{15}=\dfrac{2}{5}$. Phương án B và A cộng thay vì nhân.

::mc
Kết quả của $\dfrac{3}{8}\times4$ là
A. $\dfrac{3}{32}$.
B. $\dfrac{7}{8}$.
C. $\dfrac{12}{32}$.
D. $\dfrac{3}{2}$.
::key D
$\dfrac{3}{8}\times4=\dfrac{12}{8}=\dfrac{3}{2}$. Phương án A và C nhân cả mẫu số với $4$.

::mc
Kết quả của $\dfrac{3}{4}:\dfrac{1}{8}$ là
A. $6$.
B. $\dfrac{1}{6}$.
C. $\dfrac{3}{8}$.
D. $\dfrac{3}{32}$.
::key A
$\dfrac{3}{4}:\dfrac{1}{8}=\dfrac{3}{4}\times8=6$. Phương án B là do đảo ngược sai phân số.

::mc
Phân số đảo ngược của $\dfrac{2}{7}$ là
A. $\dfrac{2}{7}$.
B. $\dfrac{7}{2}$.
C. $\dfrac{7}{9}$.
D. $\dfrac{1}{7}$.
::key B
Đổi chỗ tử số và mẫu số của $\dfrac{2}{7}$ được $\dfrac{7}{2}$.

::tf
Em xét phép nhân $\dfrac{2}{3}\times\dfrac{1}{2}$.
a) $\dfrac{2}{3}\times\dfrac{1}{2}=\dfrac{2}{6}$.
b) $\dfrac{2}{3}\times\dfrac{1}{2}=\dfrac{1}{3}$.
c) Tích này lớn hơn $\dfrac{2}{3}$.
d) Tích này bé hơn $1$.
::key Đ Đ S Đ
a) Đúng: $\dfrac{2\times1}{3\times2}$. b) Đúng: $\dfrac{2}{6}=\dfrac{1}{3}$. c) Sai: $\dfrac{1}{3}<\dfrac{2}{3}$. d) Đúng: $\dfrac{1}{3}<1$.

::sa
Tính $4:\dfrac{2}{3}$.
::key 6
$4:\dfrac{2}{3}=4\times\dfrac{3}{2}=\dfrac{12}{2}=6$.

::sa
Mỗi chiếc nơ cần $\dfrac{2}{5}$ m ruy-băng. Có $4$ m ruy-băng thì làm được nhiều nhất bao nhiêu chiếc nơ?
::key 10
$4:\dfrac{2}{5}=4\times\dfrac{5}{2}=\dfrac{20}{2}=10$ (chiếc).
:::
