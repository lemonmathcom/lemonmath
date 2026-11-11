---
title: Số và đại số: cấp số, logarit, nhị thức, chứng minh
description: IB Math AA chủ đề 1: cấp số cộng, cấp số nhân, lãi kép, luỹ thừa và logarit, nhị thức Newton và chứng minh ngắn, theo đúng kiểu câu hỏi của đề thi.
minutes: 45
---

:::goals
- Dùng các công thức của cấp số cộng, cấp số nhân và chuỗi, kể cả tổng vô hạn.
- Giải bài toán lãi kép và tăng trưởng trong Paper 2.
- Áp dụng các quy tắc luỹ thừa và logarit, giải đúng phương trình mũ và phương trình logarit.
- Tìm một số hạng hoặc một hệ số bằng nhị thức Newton.
- Viết một chứng minh suy diễn ngắn theo kiểu "show that".
:::

Chủ đề 1 hiếm khi chiếm trọn một câu dài ở Section B, nhưng có mặt trong gần như mọi đề: một câu về cấp số ở Section A, một bước logarit trong câu giải tích, một hệ số nhị thức trong câu xác suất. Các công thức đều có trong sổ công thức; điểm số đến từ việc chọn đúng công thức, lập phương trình gọn gàng và ghi đáp số đúng dạng chính xác ở Paper 1.

## Cấp số cộng và cấp số nhân

| | Cấp số cộng (arithmetic) | Cấp số nhân (geometric) |
|---|---|---|
| Số hạng thứ $n$ | $u_n=u_1+(n-1)d$ | $u_n=u_1r^{n-1}$ |
| Tổng $n$ số hạng | $S_n=\dfrac n2\big(2u_1+(n-1)d\big)=\dfrac n2(u_1+u_n)$ | $S_n=\dfrac{u_1\left(r^n-1\right)}{r-1}$, $r\ne1$ |
| Tổng vô hạn | không tồn tại (trừ khi mọi số hạng bằng $0$) | $S_\infty=\dfrac{u_1}{1-r}$, chỉ khi $|r|<1$ |

Khi đề cho hai số hạng, hãy viết hai phương trình ẩn $u_1$ và $d$ (hoặc $u_1$ và $r$) rồi giải. Với cấp số nhân, chia hai phương trình cho nhau sẽ khử được $u_1$.

:::example Hai số hạng của cấp số cộng
Trong một cấp số cộng, $u_3=11$ và $u_8=26$.

(a) Tìm công sai và số hạng đầu. [3 marks]
(b) Tính $S_{20}$. [2 marks]

**Lời giải.** (a) $u_1+2d=11$ và $u_1+7d=26$. Trừ vế theo vế: $5d=15$, nên $d=3$ và $u_1=5$.

(b) $S_{20}=\dfrac{20}{2}\big(2\cdot5+19\cdot3\big)=10\cdot67=670$.
:::

:::example Tổng vô hạn
Số hạng đầu của một cấp số nhân là $48$, và tổng vô hạn bằng $64$.

(a) Tìm công bội. [2 marks]
(b) Tìm số hạng thứ tư. [2 marks]

**Lời giải.** (a) $\dfrac{48}{1-r}=64$, nên $1-r=\dfrac34$ và $r=\dfrac14$. Giá trị này thoả mãn $|r|<1$, đúng như phải thế.

(b) $u_4=48\left(\dfrac14\right)^3=\dfrac{48}{64}=\dfrac34$.
:::

## Lãi kép và tăng trưởng (Paper 2)

Số tiền đầu tư với lãi suất năm $r\%$, ghép lãi $k$ lần mỗi năm, sau $n$ năm trở thành
$$FV=PV\left(1+\frac{r}{100k}\right)^{kn}.$$
Ở Paper 2 bạn có thể dùng chức năng tài chính của GDC, nhưng hãy viết công thức đã thay số: dòng đó mang điểm phương pháp.

:::example Ghép lãi hằng tháng
Mai đầu tư $5000$ đô la với lãi suất năm $3{,}6\%$, ghép lãi hằng tháng. Tính giá trị khoản đầu tư sau $4$ năm, làm tròn đến đô la. [3 marks]

**Lời giải.** $5000\left(1+\dfrac{3{,}6}{1200}\right)^{12\cdot4}=5000(1{,}003)^{48}\approx5773{,}18$, nên khoản đầu tư có giá trị $5773$ đô la.
:::

## Luỹ thừa và logarit

:::note Các quy tắc dùng nhiều nhất
$$a^xa^y=a^{x+y},\quad\left(a^x\right)^y=a^{xy},\quad\log_a(xy)=\log_ax+\log_ay,\quad\log_a\frac xy=\log_ax-\log_ay,$$
$$\log_a\left(x^m\right)=m\log_ax,\qquad\log_ax=\frac{\log_bx}{\log_ba},\qquad a^x=b\iff x=\log_ab.$$
:::

:::example Phương trình mũ, giải chính xác
Giải $2^{x+1}=5^x$, viết đáp số dưới dạng $\dfrac{\ln a}{\ln b}$ với $a,b\in\mathbb{Q}$. [4 marks]

**Lời giải.** Lấy logarit tự nhiên hai vế: $(x+1)\ln2=x\ln5$. Gom các số hạng chứa $x$: $x(\ln5-\ln2)=\ln2$, nên
$$x=\frac{\ln2}{\ln5-\ln2}=\frac{\ln2}{\ln2{,}5}.$$
(Ở Paper 2, $x\approx0{,}756$.)
:::

:::example Phương trình logarit có nghiệm ngoại lai
Giải $\log_3x+\log_3(x-8)=2$. [5 marks]

**Lời giải.** $\log_3\big(x(x-8)\big)=2$, nên $x^2-8x=9$, tức $(x-9)(x+1)=0$. Loại $x=-1$ vì $\log_3x$ không xác định khi $x\le0$ (đây là điểm R). Nghiệm là $x=9$.
:::

## Nhị thức Newton

$$(a+b)^n=\sum_{r=0}^{n}\binom nr a^{n-r}b^r,\qquad\binom nr=\frac{n!}{r!(n-r)!}.$$
Để tìm một số hạng, hãy viết số hạng tổng quát rồi xác định $r$ nào cho luỹ thừa cần tìm. Giữ nguyên dấu và hệ số ở trong ngoặc.

:::example Một hệ số và một số hạng không chứa x
(a) Tìm hệ số của $x^3$ trong khai triển $(2x-3)^5$. [3 marks]
(b) Tìm số hạng không chứa $x$ trong khai triển $\left(x^2+\dfrac2x\right)^6$. [4 marks]

**Lời giải.** (a) Số hạng chứa $x^3$ là $\dbinom53(2x)^3(-3)^2=10\cdot8x^3\cdot9=720x^3$. Hệ số là $720$.

(b) Số hạng tổng quát là $\dbinom6r\left(x^2\right)^{6-r}\left(\dfrac2x\right)^r=\dbinom6r2^rx^{12-3r}$. Không chứa $x$ khi $12-3r=0$, tức $r=4$: $\dbinom64\cdot2^4=15\cdot16=240$.
:::

## Chứng minh

Ở SL, các chứng minh ngắn và mang tính suy diễn: xuất phát từ điều đã biết, biến đổi đại số, và kết thúc bằng mệnh đề cần chứng minh. Hãy viết "VT $=$" (vế trái) rồi biến đổi từng bước thành vế phải, hoặc chứng tỏ một đại lượng là bội của một số bằng cách đặt số đó ra ngoài.

:::example Một chứng minh "show that"
Chứng minh rằng tổng của ba số nguyên liên tiếp bất kì là bội của $3$. [3 marks]

**Lời giải.** Gọi ba số nguyên là $n-1$, $n$, $n+1$, với $n\in\mathbb{Z}$. Tổng của chúng là $(n-1)+n+(n+1)=3n$. Vì $n$ là số nguyên nên $3n$ là bội của $3$.

Hãy để ý ba phần: gọi tên đối tượng bằng đại số, rút gọn, và nêu kết luận bằng lời.
:::

:::warning Những cái bẫy thường gặp
- **Dùng $S_\infty$ khi $|r|\ge1$.** Hãy kiểm tra điều kiện; có câu hỏi yêu cầu đúng việc kiểm tra này.
- **Quên $-1$** trong $u_1+(n-1)d$ hoặc $u_1r^{n-1}$.
- **Tự chế quy tắc logarit.** $\log(x+y)\ne\log x+\log y$, và $\dfrac{\log x}{\log y}\ne\log\dfrac xy$.
- **Không loại nghiệm sai** của phương trình logarit, hoặc loại mà không nêu lí do.
- **Mất dấu** trong số hạng nhị thức: $(-3)^2=9$, nhưng $(-3)^3=-27$.
- **Chứng minh vòng quanh:** trong câu "show that", không bao giờ xuất phát từ mệnh đề cần chứng minh.
:::

:::terms
- arithmetic sequence, common difference | cấp số cộng, công sai
- geometric sequence, common ratio | cấp số nhân, công bội
- sum to infinity | tổng vô hạn
- compound interest, compounded monthly | lãi kép, tính lãi hằng tháng
- logarithm, change of base | logarit, đổi cơ số
- binomial theorem, binomial coefficient | nhị thức Newton, hệ số nhị thức
- term independent of $x$ | số hạng không chứa $x$
- deductive proof | chứng minh suy diễn
:::

## Bài tập tương tự

:::exercise Cấp số cộng
Một cấp số cộng có số hạng đầu $7$ và công sai $4$.
(a) Tìm $n$ sao cho $u_n=95$. [2 marks]
(b) Tính tổng $n$ số hạng đầu với giá trị $n$ đó. [2 marks]

::hint
**Cần nhớ:** $u_n=7+4(n-1)$ và $S_n=\dfrac n2(u_1+u_n)$.

::solution
(a) $7+4(n-1)=95$ cho $n-1=22$, nên $n=23$.

(b) $S_{23}=\dfrac{23}{2}(7+95)=23\cdot51=1173$.
:::

:::exercise Cấp số nhân
Trong một cấp số nhân, $u_2=12$ và $u_5=96$. Tìm công bội, số hạng đầu và $S_{10}$. [5 marks]

::hint
**Cần nhớ:** chia $u_1r^4=96$ cho $u_1r=12$.

::solution
$r^3=8$, nên $r=2$ và $u_1=6$. $S_{10}=\dfrac{6\left(2^{10}-1\right)}{2-1}=6\cdot1023=6138$.
:::

:::exercise Phương trình logarit
Giải $\log_2(x+3)+\log_2(x-3)=4$. [5 marks]

::hint
**Cần nhớ:** gộp thành $\log_2\big((x+3)(x-3)\big)$, rồi viết $4=\log_216$.

**Các bước:**
1. $x^2-9=16$.
2. Kiểm tra nghiệm nào làm cả hai logarit xác định.

::solution
$x^2=25$, nên $x=\pm5$. Loại $x=-5$ vì khi đó $x-3<0$. Nghiệm là $x=5$.
:::

:::exercise Hệ số nhị thức
Tìm hệ số của $x^2$ trong khai triển $(1+3x)^6$. [3 marks]

::hint
**Cần nhớ:** số hạng $\dbinom62(3x)^2$.

::solution
$\dbinom62\cdot9x^2=15\cdot9x^2=135x^2$. Hệ số là $135$.
:::

:::exercise Chứng minh
Chứng minh rằng $(2n+1)^2-(2n-1)^2$ là bội của $8$ với mọi số nguyên $n$. [3 marks]

::hint
**Cần nhớ:** khai triển, hoặc dùng $a^2-b^2=(a-b)(a+b)$.

::solution
$(2n+1)^2-(2n-1)^2=\big((2n+1)-(2n-1)\big)\big((2n+1)+(2n-1)\big)=2\cdot4n=8n$, là bội của $8$ vì $n$ là số nguyên.
:::

## Bài tập vận dụng

:::exercise Thị trấn đang lớn
Một thị trấn có $12.000$ dân, và dân số tăng $2{,}5\%$ mỗi năm. Sau bao nhiêu năm tròn thì dân số lần đầu vượt $20.000$? [4 marks]

::hint
**Cần nhớ:** giải $12.000\cdot(1{,}025)^n>20.000$ bằng logarit hoặc bảng giá trị của GDC.

::solution
$1{,}025^n>\dfrac53$, nên $n>\dfrac{\ln(5/3)}{\ln1{,}025}\approx20{,}7$. Dân số lần đầu vượt $20.000$ sau $21$ năm. Kiểm tra: $12.000\cdot(1{,}025)^{20}\approx19.663$ và $12.000\cdot(1{,}025)^{21}\approx20.155$.
:::

:::exercise Thang lương
Lương khởi điểm của một giáo viên là $32.000$ đô la mỗi năm, và tăng $1500$ đô la mỗi năm. Tính tổng số tiền nhận được trong $10$ năm đầu. [3 marks]

::hint
**Cần nhớ:** chuỗi cấp số cộng với $u_1=32.000$ và $d=1500$.

::solution
$S_{10}=\dfrac{10}{2}\big(2\cdot32.000+9\cdot1500\big)=5\cdot77.500=387.500$ đô la.
:::

:::exercise Quả bóng nảy
Một quả bóng được thả từ độ cao $10$ mét. Sau mỗi lần nảy, nó lên tới $70\%$ độ cao trước đó. Tính tổng quãng đường theo phương thẳng đứng mà bóng đi được cho đến khi dừng. [5 marks]

::hint
**Cần nhớ:** bóng rơi $10$ mét, rồi mỗi lần nảy lên lại rơi xuống một đoạn bằng thế; các lần nảy lên tạo thành chuỗi cấp số nhân với số hạng đầu $7$ và công bội $0{,}7$.

::solution
Tổng $=10+2\cdot\dfrac{7}{1-0{,}7}=10+\dfrac{14}{0{,}3}\approx56{,}7$ mét.
:::

:::exercise Thử thách
Chuỗi $1+2x+4x^2+8x^3+\dots$ là chuỗi cấp số nhân.
(a) Tìm các giá trị của $x$ để tổng vô hạn tồn tại. [2 marks]
(b) Tìm $x$ nếu tổng vô hạn bằng $4$. [3 marks]

::hint
**Cần nhớ:** công bội là $2x$.

::solution
(a) $|2x|<1$, tức $-\dfrac12<x<\dfrac12$.

(b) $\dfrac{1}{1-2x}=4$, nên $1-2x=\dfrac14$ và $x=\dfrac38$, thuộc khoảng ở câu (a).
:::

:::quiz
::mc
Giá trị của $\log_232+\log_3\dfrac19$ bằng
A. $7$
B. $3$
C. $\dfrac{32}{9}$
D. $-3$
::key B
$\log_232=5$ và $\log_3\dfrac19=-2$.

::mc
Một cấp số nhân bắt đầu bằng $3, -6, 12, \dots$ Số hạng $u_6$ bằng
A. $96$
B. $-192$
C. $192$
D. $-96$
::key D
$u_6=3(-2)^5=-96$.

::mc
Hệ số của $x^3$ trong khai triển $(1+x)^7$ bằng
A. $35$
B. $21$
C. $7$
D. $343$
::key A
$\dbinom73=35$.

::mc
Tổng vô hạn của $18+12+8+\dots$ bằng
A. $38$
B. $27$
C. $54$
D. $36$
::key C
$r=\dfrac23$, nên $S_\infty=\dfrac{18}{1/3}=54$.

::tf
Một dãy số được cho bởi $u_n=5+3n$ với $n\ge1$.
a) Dãy là cấp số cộng.
b) $u_1=8$.
c) Công sai bằng $5$.
d) $S_{10}=215$.
::key T T F T
a) Đúng: hiệu hai số hạng liên tiếp không đổi. b) Đúng. c) Sai: công sai bằng $3$. d) Đúng: $u_{10}=35$ và $S_{10}=\dfrac{10}{2}(8+35)=215$.

::sa
Giải $3^x=81$.
::key 4
$81=3^4$.

::sa
Tính tổng $2+5+8+\dots+29$.
::key 155
Có mười số hạng ($29=2+3(n-1)$ cho $n=10$): $\dfrac{10}{2}(2+29)=155$.
:::
