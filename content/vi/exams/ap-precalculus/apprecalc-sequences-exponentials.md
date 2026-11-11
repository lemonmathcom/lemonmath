---
title: Dãy số và hàm mũ
description: AP Precalculus Unit 2, phần 1: cấp số cộng và cấp số nhân, hàm mũ và các dạng viết của nó, lập mô hình từ hai điểm hoặc từ tình huống, và phần dư.
minutes: 45
---

:::goals
- Viết công thức của cấp số cộng, cấp số nhân và liên hệ chúng với hàm bậc nhất, hàm mũ.
- Mô tả hàm mũ: tăng trưởng hay suy giảm, tính lồi lõm và dáng điệu ở vô cực.
- Viết biểu thức mũ dưới các dạng tương đương, chẳng hạn để đổi đơn vị thời gian.
- Lập mô hình hàm mũ từ hai điểm hoặc từ một mô tả, và chọn giữa mô hình tuyến tính và mô hình hàm mũ.
- Dùng phần dư để đánh giá mô hình khớp với dữ liệu đến đâu.
:::

Unit 2 xoay quanh một sự đối lập: cộng thêm cùng một lượng sau mỗi bước (cấp số cộng, tuyến tính) và nhân với cùng một hệ số (cấp số nhân, hàm mũ). Khi đã phân biệt được hai loại và chuyển đổi được giữa các dạng viết của chúng, phần lớn câu hỏi Unit 2 trở nên quen thuộc. Bài này nói về dãy số và hàm mũ; bài sau nói về hàm ngược của chúng, tức logarit.

## Cấp số cộng và cấp số nhân

| | Cấp số cộng | Cấp số nhân |
|---|---|---|
| Quy luật | cộng $d$ sau mỗi bước | nhân $r$ sau mỗi bước |
| Số hạng thứ $n$ | $a_n=a_1+(n-1)d$ | $g_n=g_1r^{n-1}$ |
| Dạng hàm số | bậc nhất: $f(x)=b+mx$ | hàm mũ: $f(x)=ab^x$ |

Cấp số cộng là một hàm bậc nhất chỉ xét tại các đầu vào nguyên; cấp số nhân là một hàm mũ được hạn chế theo cùng cách.

:::example Một cấp số nhân
Ba số hạng đầu của một cấp số nhân là $5$, $15$, $45$. Số hạng thứ sáu là
A. $135$
B. $1215$
C. $405$
D. $3645$

**Lời giải.** Công bội là $r=\dfrac{15}{5}=3$, nên $g_n=5\cdot3^{n-1}$.

Số hạng thứ sáu là $g_6=5\cdot3^5=5\cdot243=1215$.

Vậy số hạng thứ sáu là $1215$, chọn đáp án **B**. Phương án D dùng $3^6$ thay vì $3^5$.
:::

:::example Cấp số cộng từ hai số hạng
Trong một cấp số cộng, $a_3=11$ và $a_9=29$. Tìm công thức của $a_n$ và giá trị của $a_{20}$.

**Lời giải.** Từ số hạng thứ ba đến số hạng thứ chín có $6$ bước, nên $6d=29-11=18$ và $d=3$.

Khi đó $a_1=a_3-2d=11-6=5$, và
$$a_n=5+3(n-1)=3n+2.$$

Vậy $a_n=3n+2$ và $a_{20}=3(20)+2=62$.
:::

## Hàm mũ và các dạng viết của nó

Với $f(x)=ab^x$, $a>0$: nếu $b>1$ thì hàm số **tăng trưởng**, nếu $0<b<1$ thì hàm số **suy giảm**. Trong cả hai trường hợp, đồ thị lõm lên, có tiệm cận ngang $y=0$, và giá trị đầu ra được nhân với $b$ mỗi khi đầu vào tăng $1$. Các quy tắc luỹ thừa cho phép viết lại mô hình: $b^{x+k}=b^k\cdot b^x$, và $b^{x/k}=\left(b^{1/k}\right)^x$.

:::example Hai điểm xác định mô hình
Hàm mũ $f(x)=ab^x$ đi qua $(1,6)$ và $(3,24)$. $f(x)$ là
A. $f(x)=6\cdot2^x$
B. $f(x)=3\cdot4^x$
C. $f(x)=2\cdot3^x$
D. $f(x)=3\cdot2^x$

**Lời giải.** Chia hai phương trình $ab^3=24$ và $ab=6$ cho nhau, ta được $b^2=4$, nên $b=2$ (vì $b>0$).

Khi đó $a\cdot2=6$, nên $a=3$, và $f(x)=3\cdot2^x$. Kiểm tra: $f(3)=3\cdot8=24$.

Vậy $f(x)=3\cdot2^x$, chọn đáp án **D**.
:::

:::example Đổi đơn vị thời gian
Một quần thể được mô hình hoá bởi $P(t)=500(1{,}2)^t$, với $t$ tính bằng năm. Biểu thức nào cho cùng giá trị quần thể, $t$ vẫn tính bằng năm, nhưng thể hiện hệ số tăng trưởng hằng tháng?
A. $500\left(1{,}2^{1/12}\right)^{12t}$
B. $500\left(\dfrac{1{,}2}{12}\right)^{12t}$
C. $500(1{,}2)^{12t}$
D. $500\left(1{,}2^{12}\right)^{t/12}$

**Lời giải.** Trong một tháng, $t$ tăng $\dfrac{1}{12}$, nên quần thể được nhân với $1{,}2^{1/12}$. Viết $1{,}2^t=\left(1{,}2^{1/12}\right)^{12t}$ cho thấy hệ số này, xấp xỉ $1{,}0153$, tức tăng khoảng $1{,}53\%$ mỗi tháng.

Vậy biểu thức tương đương là $500\left(1{,}2^{1/12}\right)^{12t}$, chọn đáp án **A**. Phương án D cũng bằng $P(t)$, nhưng thể hiện hệ số cho $12$ năm.
:::

## Tuyến tính hay hàm mũ, và phần dư

Dùng mô hình tuyến tính khi đại lượng thay đổi **một lượng không đổi** trên mỗi đơn vị, và mô hình hàm mũ khi nó thay đổi **một tỉ lệ phần trăm không đổi**. Để kiểm tra mô hình với dữ liệu, hãy tính **phần dư (residual)**: phần dư $=$ giá trị thực tế $-$ giá trị dự đoán. Phần dư nhỏ và không có quy luật cho thấy mô hình khớp tốt.

:::example Đọc một phần dư
Một mô hình dự đoán cây sẽ cao $50{,}4$ cm sau $6$ tuần. Chiều cao thực tế là $52$ cm. Phần dư là bao nhiêu và có ý nghĩa gì?
A. $-1{,}6$; mô hình ước lượng cao hơn thực tế
B. $1{,}6$; mô hình ước lượng thấp hơn thực tế
C. $1{,}6$; mô hình ước lượng cao hơn thực tế
D. $102{,}4$; mô hình khớp tốt

**Lời giải.** Phần dư là
$$\text{thực tế}-\text{dự đoán}=52-50{,}4=1{,}6.$$

Phần dư dương nghĩa là giá trị thực tế lớn hơn giá trị dự đoán.

Vậy phần dư là $1{,}6$ cm và mô hình ước lượng thấp hơn thực tế, chọn đáp án **B**.
:::

:::warning Những cái bẫy thường gặp
- **Số mũ $n-1$:** số hạng đầu tiên không có thừa số $r$.
- **Lượng không đổi hay phần trăm không đổi:** "tăng $4\%$" là hàm mũ, "tăng $4$" là tuyến tính.
- **Dạng tương đương:** kiểm tra bằng cách thay một giá trị của $t$ vào cả hai biểu thức.
- **Dấu của phần dư:** lấy thực tế trừ dự đoán, không làm ngược lại.
- **Suy giảm với $a>0$:** đồ thị đi xuống nhưng vẫn lõm lên.
:::

:::terms
- arithmetic / geometric sequence | cấp số cộng / cấp số nhân
- common difference / ratio | công sai / công bội
- exponential growth / decay | tăng trưởng / suy giảm theo hàm mũ
- growth factor | hệ số tăng trưởng
- horizontal asymptote | tiệm cận ngang
- equivalent form | dạng tương đương
- residual | phần dư
- model | mô hình
:::

## Bài tập tương tự

:::exercise
Một cấp số nhân có $g_1=2$ và công bội $r=-3$. Tính $g_5$.

::hint
**Kiến thức:** $g_n=g_1r^{n-1}$; luỹ thừa chẵn của một số âm là số dương.

::solution
Số hạng thứ $n$ của cấp số nhân là $g_n=g_1r^{n-1}$. Theo công thức, $g_5=2\cdot(-3)^{5-1}=2\cdot(-3)^4$.

Vì $(-3)^4=81$ nên $g_5=2\cdot81=162$.

Vậy số hạng thứ năm là $162$.

**Đáp số.** $162$.
:::

:::exercise
Một dãy số được cho bởi $a_n=7-4n$. Chứng tỏ đây là cấp số cộng, và tìm công sai cùng $a_{10}$.

::hint
**Kiến thức:** tính $a_{n+1}-a_n$.

::solution
Ta có $a_{n+1}-a_n=\big(7-4(n+1)\big)-(7-4n)=-4$, không phụ thuộc $n$, nên dãy là cấp số cộng với $d=-4$.

Khi đó $a_{10}=7-40=-33$.

Vậy dãy là cấp số cộng có công sai $-4$, và $a_{10}=-33$.

**Đáp số.** $d=-4$, $a_{10}=-33$.
:::

:::exercise
Tìm hàm mũ $f(x)=ab^x$ đi qua $(0,5)$ và $(2,45)$.

::hint
**Kiến thức:** $f(0)=a$.

::solution
Vì $b^0=1$ nên $f(0)=a$. Từ điểm $(0,5)$ ta có $a=5$, nên hàm số có dạng $f(x)=5b^x$.

Khi đó $f(2)=5b^2=45$, nên $b^2=9$ và $b=3$ (vì $b>0$).

Vậy $f(x)=5\cdot3^x$.

**Đáp số.** $f(x)=5\cdot3^x$.
:::

:::exercise
Viết $2^{3x+1}$ dưới dạng $a\cdot b^x$.

::hint
**Kiến thức:** $2^{3x+1}=2\cdot\left(2^3\right)^x$.

::solution
Ta tách số mũ thành tổng rồi dùng quy tắc luỹ thừa: $2^{3x+1}=2^1\cdot2^{3x}=2\cdot\left(2^3\right)^x$.

Vì $2^3=8$ nên biểu thức bằng $2\cdot8^x$.

Vậy $2^{3x+1}=2\cdot8^x$, với $a=2$ và $b=8$.

**Đáp số.** $2\cdot8^x$.
:::

:::exercise
Một mô hình dự đoán giá trị $20{,}5$, còn giá trị thực tế là $18$. Tính phần dư và cho biết mô hình ước lượng cao hơn hay thấp hơn thực tế.

::hint
**Kiến thức:** phần dư $=$ thực tế $-$ dự đoán.

::solution
Phần dư là $18-20{,}5=-2{,}5$.

Phần dư âm, nên giá trị thực tế nhỏ hơn giá trị dự đoán.

Vậy phần dư là $-2{,}5$ và mô hình ước lượng cao hơn thực tế.

**Đáp số.** $-2{,}5$; ước lượng cao hơn thực tế.
:::

## Bài tập vận dụng

:::exercise
Một mẻ nuôi cấy có $200$ vi khuẩn, và số vi khuẩn tăng gấp ba sau mỗi $4$ giờ.
a) Lập mô hình $N(t)$ cho số vi khuẩn sau $t$ giờ.
b) Ước tính số vi khuẩn sau $10$ giờ.

::hint
**Kiến thức:** sau $t$ giờ, số vi khuẩn đã tăng gấp ba $\dfrac t4$ lần.

::solution
a) Cứ $4$ giờ số vi khuẩn được nhân với $3$, nên sau $t$ giờ nó được nhân với $3^{t/4}$:
$$N(t)=200\cdot3^{t/4}.$$

b) Sau $10$ giờ, $N(10)=200\cdot3^{2{,}5}\approx3117{,}7$.

Vậy sau $10$ giờ có khoảng $3118$ vi khuẩn.

**Đáp số.** a) $N(t)=200\cdot3^{t/4}$; b) khoảng $3118$.
:::

:::exercise
Một ô tô mua với giá $30.000$ đô la, mỗi năm mất $15\%$ giá trị. Sau bao nhiêu năm tròn thì giá trị xe lần đầu thấp hơn một nửa giá mua?

::hint
**Kiến thức:** giải $0{,}85^t<0{,}5$ bằng bảng giá trị hoặc logarit.

::solution
Giá trị sau $t$ năm là $30.000(0{,}85)^t$, và một nửa giá mua là $15.000$.

Sau $4$ năm, giá trị là $30.000(0{,}85)^4\approx15.660$ đô la, vẫn cao hơn một nửa. Sau $5$ năm, giá trị là $30.000(0{,}85)^5\approx13.311$ đô la.

Vậy giá trị xe lần đầu thấp hơn một nửa giá mua sau $5$ năm.

**Đáp số.** $5$ năm.
:::

:::exercise
Hai gói tiết kiệm đều bắt đầu với $100$ đô la. Gói A cộng thêm $20$ đô la mỗi tháng; gói B tăng $10\%$ mỗi tháng. Sau bao nhiêu tháng thì gói B lần đầu có giá trị lớn hơn gói A?

::hint
**Kiến thức:** $A(n)=100+20n$ và $B(n)=100(1{,}1)^n$; lập bảng giá trị.

::solution
Gói A tuyến tính, $A(n)=100+20n$, còn gói B theo hàm mũ, $B(n)=100(1{,}1)^n$.

Lập bảng: $n=14$: $A=380$, $B\approx379{,}7$; $n=15$: $A=400$, $B\approx417{,}7$.

Do đó sau $14$ tháng gói A vẫn hơn, và từ tháng $15$ gói B vượt lên.

Vậy gói B lần đầu có giá trị lớn hơn gói A sau $15$ tháng. Về lâu dài, mô hình hàm mũ luôn vượt mô hình tuyến tính.

**Đáp số.** $15$ tháng.
:::

:::exercise Thử thách
Hàm mũ $f(x)=ab^x$ thoả mãn $f(2)=12$ và $f(5)=96$. Tính $f(0)$.

::hint
**Kiến thức:** chia $f(5)$ cho $f(2)$ để tìm $b^3$.

::solution
Chia hai giá trị cho nhau để khử $a$: $\dfrac{ab^5}{ab^2}=b^3=\dfrac{96}{12}=8$, nên $b=2$.

Khi đó $a\cdot2^2=12$, nên $a=3$, và $f(x)=3\cdot2^x$.

Vậy $f(0)=a=3$.

**Đáp số.** $3$.
:::

:::quiz
::mc
Số hạng tiếp theo của dãy $2, 6, 18, \dots$ là
A. $24$
B. $36$
C. $54$
D. $30$
::key C
Công bội là $3$, nên số hạng tiếp theo là $18\times3=54$.

::mc
Công thức nào cho cấp số cộng $4, 9, 14, \dots$?
A. $a_n=5n-1$
B. $a_n=4n+5$
C. $a_n=4\cdot5^{n-1}$
D. $a_n=5n+4$
::key A
$a_1=4$ và $d=5$: $4+5(n-1)=5n-1$.

::mc
Một đại lượng được mô hình hoá bởi $Q(t)=80(1{,}07)^t$. Số $1{,}07$ cho biết điều gì?
A. Đại lượng tăng $1{,}07$ đơn vị mỗi chu kì.
B. Đại lượng giảm $7\%$ mỗi chu kì.
C. Giá trị ban đầu là $1{,}07$.
D. Đại lượng tăng $7\%$ mỗi chu kì.
::key D
Hệ số tăng trưởng $1{,}07$ nghĩa là tăng $7\%$ mỗi chu kì.

::mc
Hàm số nào thể hiện sự suy giảm theo hàm mũ?
A. $f(x)=0{,}9x+3$
B. $f(x)=3(0{,}9)^x$
C. $f(x)=3(1{,}9)^x$
D. $f(x)=-3(1{,}9)^{-x}$
::key B
Với $a>0$, cơ số nằm giữa $0$ và $1$ cho sự suy giảm.

::tf
Cho $f(x)=200(0{,}5)^{x/3}$. Xét tính đúng sai của các mệnh đề sau:
a) $f(0)=200$.
b) Giá trị giảm một nửa sau mỗi $3$ đơn vị của $x$.
c) $f$ đồng biến.
d) Đồ thị có tiệm cận ngang $y=0$.
::key T T F T
Cơ số $0{,}5$ nhỏ hơn $1$, nên $f$ nghịch biến và tiến về $0$.

::sa
Một cấp số nhân có $g_1=3$ và $r=2$. Tính $g_5$.
::key 48
$3\cdot2^4=48$.

::sa
Một hàm mũ có $f(0)=10$ và $f(1)=15$. Tính $f(2)$.
::key 22,5
Hệ số là $1{,}5$, nên $f(2)=15\times1{,}5=22{,}5$.
:::
