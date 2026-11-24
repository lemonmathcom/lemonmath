---
title: Tìm phân số của một số
description: Em học cách tìm một phân số của một số bằng cách chia thành các phần bằng nhau, dùng phép nhân phân số và giải bài toán có lời văn.
minutes: 20
---

:::goals
- Hiểu "tìm phân số của một số" nghĩa là chia thành các phần bằng nhau rồi lấy một số phần.
- Tìm phân số của một số bằng phép chia rồi phép nhân, hoặc bằng phép nhân phân số.
- Tìm phân số của một phân số.
- Giải bài toán có lời văn liên quan đến phân số của một số.
:::

Lớp $4$A có $36$ học sinh. Trong giờ ra chơi, $\dfrac{5}{9}$ số học sinh của lớp chơi ở sân trường.

Có bao nhiêu em chơi ở sân trường? Bài này dạy em cách tìm "$\dfrac{5}{9}$ của $36$" và những phân số của một số khác.

## Cùng khám phá

Em vẽ một băng giấy tượng trưng cho $36$ học sinh và chia thành $9$ phần bằng nhau.

:::diagram Băng giấy $36$ học sinh chia thành $9$ phần bằng nhau; tô $5$ phần
alt: Hình chữ nhật dài chia thành 9 ô bằng nhau; 5 ô đầu bên trái được nhấn mạnh và ghi 5 phần, 4 ô còn lại ghi 4 phần
point A 0,0 below-left
point B 9,0 below-right
point C 9,1 above-right
point D 0,1 above-left
point E 5,0 below
point F 5,1 above
grid
polygon A B C D
polygon A E F D
label 2.5,0.5 "5 phần"
label 7,0.5 "4 phần"
:::

Mỗi phần có $36:9=4$ học sinh. Lấy $5$ phần thì được $5\times4=20$ học sinh. Vậy $\dfrac{5}{9}$ của $36$ là $20$:
$$36:9\times5=4\times5=20.$$

Em cũng có thể dùng phép nhân phân số: $36\times\dfrac{5}{9}=\dfrac{36\times5}{9}=\dfrac{180}{9}=20$. Hai cách cho cùng kết quả.

:::theorem Tìm phân số của một số
Muốn tìm $\dfrac{a}{b}$ của số $n$, ta chia $n$ cho $b$ (mẫu số) rồi nhân với $a$ (tử số):
$$\dfrac{a}{b}\ \text{của}\ n=n:b\times a=n\times\dfrac{a}{b}.$$
:::

Vì sao làm như vậy? Mẫu số $b$ cho biết ta chia số $n$ thành $b$ phần bằng nhau, nên mỗi phần là $n:b$. Tử số $a$ cho biết ta lấy $a$ phần như vậy, nên phải nhân với $a$.

**Kết nối.** Bài này dùng phép chia và nhân phân số em vừa học. Em sẽ gặp lại cách làm này trong nhiều bài toán về tỉ số và phần trăm sau này.

## Ví dụ

Bắt đầu với một số nhỏ.

:::example Phân số của một số
Tìm $\dfrac{2}{3}$ của $12$.

**Lời giải.** Ta chia $12$ thành $3$ phần bằng nhau, mỗi phần là $12:3=4$. Lấy $2$ phần, được $2\times4=8$.

Vậy $\dfrac{2}{3}$ của $12$ là $8$.
:::

Tiếp theo là một phép tính có đơn vị đo.

:::example Phân số của một số đo
Tìm $\dfrac{3}{5}$ của $45$ kg.

**Lời giải.** Mỗi phần là $45:5=9$ (kg). Lấy $3$ phần, được $9\times3=27$ (kg).

Vậy $\dfrac{3}{5}$ của $45$ kg là $27$ kg.
:::

Đôi khi nhân trước rồi rút gọn cũng thuận tiện.

:::example Dùng phép nhân phân số
Tìm $\dfrac{5}{6}$ của $18$.

**Lời giải.** Ta nhân số đó với phân số:
$$\dfrac{5}{6}\ \text{của}\ 18=18\times\dfrac{5}{6}=\dfrac{18\times5}{6}=\dfrac{90}{6}=15.$$
Vậy $\dfrac{5}{6}$ của $18$ là $15$.
:::

Bây giờ em trả lời câu hỏi ở đầu bài.

:::example Học sinh chơi ở sân trường
Lớp $4$A có $36$ học sinh. Trong giờ ra chơi, $\dfrac{5}{9}$ số học sinh chơi ở sân trường. Hỏi có bao nhiêu em chơi ở sân trường? Có bao nhiêu em không chơi ở sân?

**Hiểu đề.** Cả lớp có $36$ em. Số em chơi ở sân là $\dfrac{5}{9}$ của $36$. Cần tìm số em chơi ở sân và số em không chơi ở sân.

**Tìm cách giải.** Chia $36$ thành $9$ phần bằng nhau, lấy $5$ phần cho số em chơi ở sân. Số em còn lại là $9-5=4$ phần.

**Giải.** Mỗi phần có $36:9=4$ (em). Số em chơi ở sân trường là $4\times5=20$ (em).

Số em không chơi ở sân là $36-20=16$ (em).

**Đáp số:** $20$ em chơi ở sân; $16$ em không chơi ở sân.

**Nhìn lại.** Số em không chơi ở sân cũng là $\dfrac{4}{9}$ của $36$, tức là $4\times4=16$ (em). Hai cách cho cùng kết quả, và $20+16=36$ nên đúng.
:::

Em hãy giải một bài có nhiều bước.

:::example Bán gạo
Một cửa hàng có $240$ kg gạo. Ngày thứ nhất cửa hàng bán $\dfrac{3}{8}$ số gạo, ngày thứ hai bán $\dfrac{1}{4}$ số gạo. Hỏi sau hai ngày cửa hàng còn lại bao nhiêu ki-lô-gam gạo?

**Lời giải.** Số ki-lô-gam gạo bán ngày thứ nhất là $240:8\times3=90$ (kg).

Số ki-lô-gam gạo bán ngày thứ hai là $240:4=60$ (kg).

Số ki-lô-gam gạo còn lại là $240-90-60=90$ (kg).

**Đáp số:** $90$ kg.
:::

Cuối cùng, tìm phân số của một phân số.

:::example Phân số của một phân số
Tìm $\dfrac{1}{2}$ của $\dfrac{3}{4}$ m.

**Lời giải.** Ta nhân hai phân số:
$$\dfrac{3}{4}\times\dfrac{1}{2}=\dfrac{3\times1}{4\times2}=\dfrac{3}{8}\ \text{(m)}.$$
Vậy $\dfrac{1}{2}$ của $\dfrac{3}{4}$ m là $\dfrac{3}{8}$ m.
:::

:::warning Những lỗi em hay gặp
- **Chia cho tử số, nhân với mẫu số.** Sai: $\dfrac{2}{5}$ của $30$ là $30:2\times5=75$. Vì sao sai: phải chia cho **mẫu số** và nhân với **tử số**. Đúng: $30:5\times2=12$.
- **Nhân với mẫu số mà không chia.** Sai: $\dfrac{1}{4}$ của $24$ là $24\times4=96$. Vì sao sai: $\dfrac{1}{4}$ bé hơn $1$ nên kết quả phải bé hơn $24$. Đúng: $24:4=6$.
- **Quên đơn vị.** Sai: "Đáp số: $20$". Vì sao sai: bài hỏi số em nên đáp số cần nói rõ đơn vị. Đúng: "Đáp số: $20$ em".
:::

## Thuật ngữ

:::terms
- tìm phân số của một số | finding a fraction of an amount
- phân số | fraction
- tử số | numerator
- mẫu số | denominator
- phần bằng nhau | equal parts
- phép nhân phân số | multiplication of fractions
- đơn vị | unit
:::

## Tóm tắt

- Tìm $\dfrac{a}{b}$ của $n$: chia $n$ cho $b$ rồi nhân với $a$, hoặc tính $n\times\dfrac{a}{b}$.
- Mẫu số cho biết số phần bằng nhau, tử số cho biết số phần được lấy.
- Với $\dfrac{a}{b}$ bé hơn $1$, kết quả bé hơn số ban đầu.
- Tìm phân số của một phân số bằng phép nhân hai phân số.
- Nhớ viết đơn vị trong đáp số.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý. Em hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tìm $\dfrac{3}{4}$ của $20$.

::hint
**Kiến thức:** chia cho mẫu số rồi nhân với tử số.

**Gợi ý các bước:**
1. Mỗi phần là $20:4=?$
2. Lấy $3$ phần.

::solution
Muốn tìm $\dfrac{3}{4}$ của $20$, ta chia $20$ thành $4$ phần bằng nhau rồi lấy $3$ phần.

Giá trị của mỗi phần là:
$$20:4=5.$$

Giá trị của $3$ phần là:
$$5\times3=15.$$

Vậy $\dfrac{3}{4}$ của $20$ là $15$.

**Đáp số.** $15$.
:::

:::exercise
Tìm $\dfrac{2}{5}$ của $30$.

::hint
**Kiến thức:** $\dfrac{a}{b}$ của $n$ là $n:b\times a$.

**Gợi ý các bước:**
1. Chia $30$ cho mẫu số.
2. Nhân với tử số.

::solution
Muốn tìm $\dfrac{2}{5}$ của $30$, ta chia $30$ thành $5$ phần bằng nhau rồi lấy $2$ phần.

Ta có
$$30:5\times2=6\times2=12.$$

Vậy $\dfrac{2}{5}$ của $30$ là $12$.

**Đáp số.** $12$.
:::

:::exercise
Tìm $\dfrac{7}{8}$ của $64$.

::hint
**Kiến thức:** chia thành $8$ phần bằng nhau rồi lấy $7$ phần.

**Gợi ý các bước:**
1. Mỗi phần là $64:8=?$
2. Lấy $7$ phần.

::solution
Muốn tìm $\dfrac{7}{8}$ của $64$, ta chia $64$ thành $8$ phần bằng nhau rồi lấy $7$ phần.

Ta có
$$64:8\times7=8\times7=56.$$

Vậy $\dfrac{7}{8}$ của $64$ là $56$.

**Đáp số.** $56$.
:::

:::exercise
Một giờ có $60$ phút. Hỏi $\dfrac{2}{3}$ giờ là bao nhiêu phút?

::hint
**Kiến thức:** $1$ giờ $=60$ phút; tìm $\dfrac{2}{3}$ của $60$ phút.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Chia $60$ cho $3$ rồi nhân với $2$.

::solution
Bài giải

Muốn tìm $\dfrac{2}{3}$ giờ là bao nhiêu phút, ta tìm $\dfrac{2}{3}$ của $60$ phút.

Số phút trong $\dfrac{2}{3}$ giờ là:
$$60:3\times2=20\times2=40\ \text{(phút)}$$

Vậy $\dfrac{2}{3}$ giờ là $40$ phút.

**Đáp số.** $40$ phút.
:::

:::exercise
Một bể chứa $480$ lít nước. Người ta đã dùng $\dfrac{3}{8}$ lượng nước trong bể. Hỏi đã dùng bao nhiêu lít nước và trong bể còn lại bao nhiêu lít nước?

::hint
**Kiến thức:** số lít đã dùng là $\dfrac{3}{8}$ của $480$; số lít còn lại bằng $480$ trừ số lít đã dùng.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Tìm $\dfrac{3}{8}$ của $480$, rồi trừ.

::solution
Bài giải

Số lít nước đã dùng là $\dfrac{3}{8}$ của $480$ lít, tức là:
$$480:8\times3=60\times3=180\ \text{(lít)}$$

Số lít nước còn lại trong bể là:
$$480-180=300\ \text{(lít)}$$

*Thử lại.* Số nước còn lại là $\dfrac{5}{8}$ lượng nước trong bể và $480:8\times5=60\times5=300$ (lít). Đúng.

Vậy đã dùng $180$ lít nước và trong bể còn lại $300$ lít nước.

**Đáp số.** Đã dùng $180$ lít; còn lại $300$ lít.
:::

:::exercise
Một mảnh vải dài $18$ m. Người ta dùng $\dfrac{2}{9}$ mảnh vải để may áo và $\dfrac{1}{3}$ mảnh vải để may quần. Hỏi còn lại bao nhiêu mét vải?

::hint
**Kiến thức:** tìm từng phân số của $18$, rồi trừ đi.

**Gợi ý các bước:**
1. Tính số mét vải may áo và số mét vải may quần.
2. Lấy $18$ trừ cả hai số đó.

::solution
Bài giải

Số mét vải dùng để may áo là $\dfrac{2}{9}$ của $18$ m, tức là:
$$18:9\times2=2\times2=4\ \text{(m)}$$

Số mét vải dùng để may quần là $\dfrac{1}{3}$ của $18$ m, tức là:
$$18:3=6\ \text{(m)}$$

Số mét vải còn lại là:
$$18-4-6=8\ \text{(m)}$$

Vậy còn lại $8$ m vải.

**Đáp số.** $8$ m.
:::

:::exercise
Nam có $150\,000$ đồng và tiêu $\dfrac{2}{5}$ số tiền đó để mua sách. Hỏi Nam đã tiêu bao nhiêu tiền để mua sách?

::hint
**Kiến thức:** tìm $\dfrac{2}{5}$ của $150\,000$.

**Gợi ý các bước:**
1. Đề cho biết gì? Đề hỏi gì?
2. Chia $150\,000$ cho $5$ rồi nhân với $2$.

::solution
Bài giải

Số tiền Nam đã tiêu để mua sách là $\dfrac{2}{5}$ của $150\,000$ đồng, tức là:
$$150\,000:5\times2=30\,000\times2=60\,000\ \text{(đồng)}$$

Vậy Nam đã tiêu $60\,000$ đồng để mua sách.

**Đáp số.** $60\,000$ đồng.
:::

:::exercise
Em hãy nhớ lại bài nhân phân số. Tìm $\dfrac{2}{3}$ của $\dfrac{3}{5}$.

::hint
**Kiến thức:** tìm phân số của một phân số bằng phép nhân.

**Gợi ý các bước:**
1. Viết phép nhân $\dfrac{3}{5}\times\dfrac{2}{3}$.
2. Rút gọn kết quả.

::solution
Tìm $\dfrac{2}{3}$ của $\dfrac{3}{5}$ nghĩa là lấy $\dfrac{3}{5}$ nhân với $\dfrac{2}{3}$.

Muốn nhân hai phân số, ta lấy tử số nhân với tử số, mẫu số nhân với mẫu số:
$$\frac{3}{5}\times\frac{2}{3}=\frac{3\times2}{5\times3}=\frac{6}{15}.$$

Rút gọn phân số bằng cách chia cả tử số và mẫu số cho $3$:
$$\frac{6}{15}=\frac{6:3}{15:3}=\frac{2}{5}.$$

Vậy $\dfrac{2}{3}$ của $\dfrac{3}{5}$ là $\dfrac{2}{5}$.

**Đáp số.** $\dfrac{2}{5}$.
:::

:::exercise
Em hãy nhớ lại bài so sánh và trừ phân số. Một lớp có $40$ học sinh, trong đó $\dfrac{3}{5}$ số học sinh thích môn Toán và $\dfrac{1}{4}$ số học sinh thích môn Văn. Hỏi số em thích Toán nhiều hơn số em thích Văn bao nhiêu em?

::hint
**Kiến thức:** tìm từng phân số của $40$ rồi trừ.

**Gợi ý các bước:**
1. Tìm số em thích Toán và số em thích Văn.
2. Lấy số lớn trừ số bé.

::solution
Bài giải

Số em thích môn Toán là $\dfrac{3}{5}$ của $40$ em, tức là:
$$40:5\times3=8\times3=24\ \text{(em)}$$

Số em thích môn Văn là $\dfrac{1}{4}$ của $40$ em, tức là:
$$40:4=10\ \text{(em)}$$

Số em thích Toán nhiều hơn số em thích Văn là:
$$24-10=14\ \text{(em)}$$

Vậy số em thích Toán nhiều hơn số em thích Văn là $14$ em.

**Đáp số.** $14$ em.
:::

:::exercise Thử thách
Khối lớp $4$ của một trường có một số học sinh. Biết $\dfrac{3}{5}$ số học sinh của khối là $36$ em. Hỏi khối lớp $4$ có bao nhiêu học sinh?

::hint
**Kiến thức:** vẽ băng giấy chia thành $5$ phần bằng nhau; $3$ phần ứng với $36$ em.

**Gợi ý các bước:**
1. $3$ phần là $36$ em; $1$ phần là bao nhiêu em?
2. Cả khối là $5$ phần.

::solution
Bài giải

$\dfrac{3}{5}$ số học sinh của khối là $36$ em, tức là $3$ phần bằng nhau có tất cả $36$ em.

Số học sinh của mỗi phần là:
$$36:3=12\ \text{(em)}$$

Cả khối có $5$ phần như vậy, nên số học sinh của khối lớp $4$ là:
$$12\times5=60\ \text{(em)}$$

*Thử lại.* $\dfrac{3}{5}$ của $60$ là $60:5\times3=12\times3=36$. Đúng.

Vậy khối lớp $4$ có $60$ học sinh.

**Đáp số.** $60$ học sinh.
:::

## Kiểm tra mini

:::quiz
::mc TH
$\dfrac{2}{3}$ của $12$ là
A. $6$.
B. $18$.
C. $4$.
D. $8$.
::key D
Mỗi phần là $12:3=4$; lấy $2$ phần được $4\times2=8$. Phương án C chỉ là $12:3$.

::mc TH
$\dfrac{3}{5}$ của $45$ kg là
A. $27$ kg.
B. $9$ kg.
C. $75$ kg.
D. $15$ kg.
::key A
$45:5\times3=9\times3=27$ (kg). Phương án B quên nhân với $3$, phương án C chia cho tử số rồi nhân với mẫu số.

::mc TH
Nam có $48$ viên bi và cho bạn $\dfrac{1}{6}$ số bi. Nam đã cho bạn
A. $288$ viên bi.
B. $8$ viên bi.
C. $42$ viên bi.
D. $6$ viên bi.
::key B
$48:6=8$ (viên). Phương án A là $48\times6$, kết quả lớn hơn số bi ban đầu.

::mc NB
Phép tính nào tìm $\dfrac{5}{9}$ của $36$?
A. $36:5\times9$.
B. $36\times9:5$.
C. $36:9\times5$.
D. $36+\dfrac{5}{9}$.
::key C
Chia cho mẫu số $9$ rồi nhân với tử số $5$.

::tf NB TH TH TH
Em xét $\dfrac{3}{8}$ của $40$.
a) $\dfrac{3}{8}$ của $40$ bằng $40:3\times8$.
b) $\dfrac{3}{8}$ của $40$ bằng $120$.
c) $\dfrac{3}{8}$ của $40$ bằng $15$.
d) $\dfrac{3}{8}$ của $40$ lớn hơn $40$.
::key S S Đ S
a) Sai: phải chia cho mẫu số $8$ và nhân với tử số $3$. b) Sai: $120=40\times3$ chưa chia cho $8$. c) Đúng: $40:8\times3=15$. d) Sai: $\dfrac{3}{8}<1$ nên kết quả bé hơn $40$.

::sa VD
Tìm $\dfrac{4}{7}$ của $35$.
::key 20
$35:7\times4=5\times4=20$.

::sa VD
Lớp $4$A có $36$ học sinh, trong đó $\dfrac{5}{9}$ số học sinh chơi ở sân trường. Hỏi có bao nhiêu em không chơi ở sân trường?
::key 16
$36:9\times5=20$ em chơi ở sân; số em không chơi ở sân là $36-20=16$.
:::
