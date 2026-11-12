---
title: "Chuyên đề: rút gọn biểu thức chứa căn"
description: Ôn các phép biến đổi căn bậc hai, trục căn thức ở mẫu và rút gọn biểu thức chứa căn theo cách ra đề thi vào lớp 10, kèm các bài toán thực tế.
minutes: 25
---

:::goals
- Ôn các phép biến đổi căn bậc hai: đưa thừa số ra ngoài và vào trong dấu căn, hằng đẳng thức $\sqrt{A^2}=|A|$, trục căn thức ở mẫu.
- Biết tìm điều kiện xác định và rút gọn biểu thức chứa căn có phân thức.
- Giải được các câu hỏi thường gặp trong đề thi vào lớp 10: tính giá trị biểu thức, tìm $x$ khi biết giá trị biểu thức.
- Vận dụng căn bậc hai vào các bài toán về hình vuông, đường chéo, diện tích.
:::

Giả sử một mảnh vườn hình vuông có diện tích $50$ m². Cạnh của nó là $\sqrt{50}$ m và chu vi là $4\sqrt{50}$ m. Máy tính cho $\sqrt{50}\approx7{,}07$, nhưng để chia sẻ với thợ làm hàng rào, ta muốn viết gọn: $\sqrt{50}=5\sqrt2$ nên chu vi là $20\sqrt2\approx28{,}3$ m. Còn nếu có thêm một mảnh vườn khác với cạnh $\sqrt{18}$ m thì tổng hai cạnh là $\sqrt{50}+\sqrt{18}$, và ta không thể cộng hai căn khác nhau như hai số thường. Làm thế nào để cộng, rút gọn được các biểu thức như vậy?

Trong đề thi vào lớp 10, bài đầu tiên thường là một biểu thức chứa căn: rút gọn, rồi tính giá trị hoặc tìm $x$. Đây là câu rất nên lấy trọn điểm, và bài này ôn lại các công cụ cần dùng.

## Các phép biến đổi căn bậc hai

### Khám phá: vì sao $\sqrt{50}+\sqrt{18}$ cộng được?

Ta có $\sqrt{50}=\sqrt{25\cdot2}=5\sqrt2$ và $\sqrt{18}=\sqrt{9\cdot2}=3\sqrt2$. Hai căn đã **cùng dạng** $\sqrt2$, nên
$$\sqrt{50}+\sqrt{18}=5\sqrt2+3\sqrt2=8\sqrt2.$$
Ý tưởng là đưa các căn về cùng dạng rồi cộng như các số hạng đồng dạng. Công cụ để làm việc đó là các quy tắc dưới đây.

:::theorem Các quy tắc cần nhớ
Với $A$, $B$ là các biểu thức, ta có:
- $\sqrt{A^2}=|A|$ (bằng $A$ nếu $A\geq0$, bằng $-A$ nếu $A<0$);
- $\sqrt{AB}=\sqrt A\cdot\sqrt B$ với $A\geq0$, $B\geq0$;
- $\sqrt{\dfrac AB}=\dfrac{\sqrt A}{\sqrt B}$ với $A\geq0$, $B>0$;
- đưa thừa số ra ngoài dấu căn: $\sqrt{A^2B}=|A|\sqrt B$ với $B\geq0$;
- trục căn thức ở mẫu: $\dfrac{k}{\sqrt a}=\dfrac{k\sqrt a}{a}$ với $a>0$; $\dfrac{k}{\sqrt a\pm b}=\dfrac{k(\sqrt a\mp b)}{a-b^2}$ với $a\geq0$, $a\neq b^2$.
:::

**Vì sao đúng?** Cả hai vế của $\sqrt{AB}=\sqrt A\cdot\sqrt B$ đều không âm và có bình phương bằng nhau: $(\sqrt A\sqrt B)^2=AB$. Còn $\sqrt{A^2}=|A|$ vì $|A|\geq0$ và $|A|^2=A^2$. Công thức trục căn thức dùng hằng đẳng thức $(\sqrt a-b)(\sqrt a+b)=a-b^2$: nhân cả tử và mẫu với **biểu thức liên hợp** của mẫu thì mẫu mất căn.

Một biểu thức chứa căn chỉ có nghĩa khi mọi biểu thức dưới dấu căn không âm và mọi mẫu khác $0$. Đó là **điều kiện xác định** và ta luôn ghi nó trước khi biến đổi.

:::example Biến đổi và cộng trừ các căn
Rút gọn biểu thức $A=\sqrt{75}-2\sqrt{12}+\sqrt{27}$.

**Lời giải.** Ta đưa thừa số ra ngoài dấu căn:
$$\sqrt{75}=\sqrt{25\cdot3}=5\sqrt3,\quad 2\sqrt{12}=2\sqrt{4\cdot3}=4\sqrt3,\quad\sqrt{27}=\sqrt{9\cdot3}=3\sqrt3.$$
Suy ra $A=5\sqrt3-4\sqrt3+3\sqrt3=4\sqrt3$.

Vậy $A=4\sqrt3$.
:::

:::example Trục căn thức ở mẫu
Trục căn thức ở mẫu của mỗi biểu thức:

a) $\dfrac{6}{\sqrt3}$;

b) $\dfrac{4}{\sqrt5-1}$;

c) $\dfrac{6}{3+\sqrt3}$.

**Lời giải.**

a) $\dfrac{6}{\sqrt3}=\dfrac{6\sqrt3}{3}=2\sqrt3$.

b) Nhân cả tử và mẫu với biểu thức liên hợp $\sqrt5+1$:
$$\frac{4}{\sqrt5-1}=\frac{4(\sqrt5+1)}{(\sqrt5-1)(\sqrt5+1)}=\frac{4(\sqrt5+1)}{5-1}=\sqrt5+1.$$

c) Nhân cả tử và mẫu với $3-\sqrt3$:
$$\frac{6}{3+\sqrt3}=\frac{6(3-\sqrt3)}{9-3}=3-\sqrt3.$$

**Đáp số.** a) $2\sqrt3$; b) $\sqrt5+1$; c) $3-\sqrt3$.
:::

:::example Hằng đẳng thức $\sqrt{A^2}=|A|$
Rút gọn:

a) $\sqrt{(\sqrt3-2)^2}$;

b) $\sqrt{7-4\sqrt3}$.

**Lời giải.**

a) Ta có $\sqrt{(\sqrt3-2)^2}=|\sqrt3-2|$. Vì $\sqrt3<2$ nên $\sqrt3-2<0$, suy ra $|\sqrt3-2|=2-\sqrt3$.

b) Ta viết $7-4\sqrt3=4-4\sqrt3+3=(2-\sqrt3)^2$. Do đó $\sqrt{7-4\sqrt3}=|2-\sqrt3|=2-\sqrt3$ (vì $2>\sqrt3$).

**Đáp số.** a) $2-\sqrt3$; b) $2-\sqrt3$.
:::

## Rút gọn biểu thức có phân thức

Các câu thi vào lớp 10 thường cho một biểu thức có nhiều phân thức. Ta làm theo thứ tự: **tìm điều kiện xác định**, **phân tích mẫu thành nhân tử**, **quy đồng**, **rút gọn**, rồi mới trả lời các ý hỏi thêm.

:::example Một câu hỏi kiểu đề thi
Cho biểu thức
$$P=\left(\frac{2\sqrt x}{\sqrt x+3}+\frac{\sqrt x}{\sqrt x-3}-\frac{3x+3}{x-9}\right):\left(\frac{2\sqrt x-2}{\sqrt x-3}-1\right)\quad\text{với }x\geq0,\ x\neq9.$$
a) Rút gọn $P$.

b) Tính giá trị của $P$ khi $x=16$.

c) Tìm $x$ để $P=-\dfrac35$.

**Lời giải.**

*Hiểu đề.* Cần rút gọn một phép chia hai biểu thức, rồi thay số và giải một phương trình chứa căn. Điều kiện $x\geq0$, $x\neq9$ đã cho.

*Tìm cách giải.* Mẫu $x-9=(\sqrt x-3)(\sqrt x+3)$ nên ta quy đồng ở ngoặc thứ nhất về mẫu $x-9$; ở ngoặc thứ hai quy đồng về mẫu $\sqrt x-3$.

*Giải.*

a) Ngoặc thứ nhất có tử số
$$2\sqrt x(\sqrt x-3)+\sqrt x(\sqrt x+3)-(3x+3)=2x-6\sqrt x+x+3\sqrt x-3x-3=-3\sqrt x-3=-3(\sqrt x+1),$$
nên ngoặc thứ nhất bằng $\dfrac{-3(\sqrt x+1)}{(\sqrt x-3)(\sqrt x+3)}$. Ngoặc thứ hai bằng $\dfrac{2\sqrt x-2-(\sqrt x-3)}{\sqrt x-3}=\dfrac{\sqrt x+1}{\sqrt x-3}$. Do đó
$$P=\frac{-3(\sqrt x+1)}{(\sqrt x-3)(\sqrt x+3)}\cdot\frac{\sqrt x-3}{\sqrt x+1}=\frac{-3}{\sqrt x+3}.$$

b) Với $x=16$ (thoả mãn điều kiện), $\sqrt x=4$ nên $P=\dfrac{-3}{4+3}=-\dfrac37$.

c) $P=-\dfrac35$ nghĩa là $\dfrac{-3}{\sqrt x+3}=-\dfrac35$, tức là $\sqrt x+3=5$, suy ra $\sqrt x=2$ và $x=4$. Giá trị $x=4$ thoả mãn điều kiện.

Vậy a) $P=\dfrac{-3}{\sqrt x+3}$; b) $P=-\dfrac37$; c) $x=4$.

*Nhìn lại.* Kiểm tra lại với $x=4$: biểu thức rút gọn cho $\dfrac{-3}{2+3}=-\dfrac35$, đúng yêu cầu. Thử kiểm tra biểu thức ban đầu tại $x=16$: ngoặc thứ nhất bằng $\dfrac{8}{7}+\dfrac{4}{1}-\dfrac{51}{7}=-\dfrac{15}{7}$ và ngoặc thứ hai bằng $\dfrac{6}{1}-1=5$, nên $P=-\dfrac{15}{7}:5=-\dfrac37$, khớp với kết quả. Hai cách làm cho cùng kết quả nên ta yên tâm.
:::

:::example Phương trình chứa căn đơn giản
Giải các phương trình:

a) $\sqrt{2x+1}=3$;

b) $\sqrt{x^2-4x+4}=3$.

**Lời giải.**

a) Điều kiện $2x+1\geq0$, tức là $x\geq-\dfrac12$. Bình phương hai vế (hai vế đều không âm), ta có $2x+1=9$, suy ra $x=4$, thoả mãn điều kiện.

b) Ta có $x^2-4x+4=(x-2)^2$ nên phương trình trở thành $|x-2|=3$. Suy ra $x-2=3$ hoặc $x-2=-3$, tức là $x=5$ hoặc $x=-1$.

**Đáp số.** a) $x=4$; b) $x=5$ hoặc $x=-1$.
:::

:::example Mảnh kính hình vuông
Giả sử một tấm kính hình vuông có diện tích $72$ dm². Tính độ dài cạnh và độ dài đường chéo của tấm kính, và chu vi của nó (làm tròn đến một chữ số thập phân).

**Lời giải.** Gọi cạnh của tấm kính là $a$ (dm). Ta có $a^2=72$ nên $a=\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2\approx8{,}5$ (dm).

Đường chéo của hình vuông là $d=a\sqrt2=6\sqrt2\cdot\sqrt2=6\cdot2=12$ (dm).

Chu vi là $4a=24\sqrt2\approx33{,}9$ (dm).

Vậy cạnh $6\sqrt2\approx8{,}5$ dm, đường chéo $12$ dm, chu vi $24\sqrt2\approx33{,}9$ dm.
:::

:::warning Lỗi hay gặp
- **Tách căn của một tổng.** Sai: $\sqrt{9+16}=\sqrt9+\sqrt{16}=7$. Vì sao sai: $\sqrt{a+b}\neq\sqrt a+\sqrt b$ (ở đây $\sqrt{25}=5$). Đúng: chỉ được tách căn của một **tích** hoặc một thương.
- **Quên dấu giá trị tuyệt đối.** Sai: $\sqrt{(\sqrt3-2)^2}=\sqrt3-2$. Vì sao sai: kết quả của căn bậc hai không bao giờ âm, mà $\sqrt3-2<0$. Đúng: $\sqrt{(\sqrt3-2)^2}=|\sqrt3-2|=2-\sqrt3$.
- **Đưa thừa số ra sai.** Sai: $\sqrt{18}=9\sqrt2$. Vì sao sai: thừa số $9$ phải lấy căn khi ra ngoài. Đúng: $\sqrt{18}=\sqrt{9\cdot2}=3\sqrt2$.
- **Quên điều kiện xác định hoặc không đối chiếu nghiệm.** Sai: giải $\sqrt{x-1}=-2$ và bình phương hai vế để ra nghiệm. Vì sao sai: căn bậc hai không âm nên phương trình vô nghiệm. Đúng: ghi điều kiện, và đối chiếu nghiệm với điều kiện của đề (ví dụ $x\neq9$).
- **Nhầm dấu khi dùng liên hợp.** Sai: $\dfrac{4}{\sqrt5-1}=\dfrac{4(\sqrt5-1)}{5-1}$. Vì sao sai: nhân với chính mẫu thì mẫu thành $(\sqrt5-1)^2$, vẫn còn căn. Đúng: nhân với $\sqrt5+1$.
:::

**Kết nối.** Bài này dùng căn bậc hai và hằng đẳng thức ở lớp 9, quy đồng phân thức ở lớp 8 và giá trị tuyệt đối. Các phép rút gọn ở đây là công cụ cho các chuyên đề sau, đặc biệt là phương trình bậc hai và hệ thức Viète.

## Thuật ngữ

:::terms
- căn bậc hai | square root
- biểu thức chứa căn | expression with roots
- điều kiện xác định | condition for the expression to be defined
- đưa thừa số ra ngoài dấu căn | taking a factor out of the root
- trục căn thức ở mẫu | rationalising the denominator
- biểu thức liên hợp | conjugate expression
- giá trị tuyệt đối | absolute value
- rút gọn | simplify
- đường chéo | diagonal
:::

## Tóm tắt

- Đưa các căn về cùng dạng (đưa thừa số ra ngoài dấu căn) rồi cộng trừ.
- $\sqrt{A^2}=|A|$; $\sqrt{AB}=\sqrt A\sqrt B$ với $A,B\geq0$.
- Trục căn thức: $\dfrac{k}{\sqrt a}=\dfrac{k\sqrt a}{a}$; $\dfrac{k}{\sqrt a\pm b}=\dfrac{k(\sqrt a\mp b)}{a-b^2}$.
- Rút gọn biểu thức có phân thức: ghi điều kiện xác định, phân tích mẫu thành nhân tử, quy đồng, rút gọn.
- Trong đề thi: rút gọn trước, rồi thay giá trị hoặc giải phương trình, và nhớ đối chiếu điều kiện.
- Đường chéo của hình vuông cạnh $a$ là $a\sqrt2$.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và gợi ý bước đầu. Hãy tự làm trước rồi mới mở lời giải.

:::exercise
Rút gọn $A=\sqrt{48}-3\sqrt{12}+\sqrt{75}$.

::hint
**Kiến thức:** đưa thừa số ra ngoài dấu căn.

**Gợi ý các bước:**
1. Viết $48=16\cdot3$, $12=4\cdot3$, $75=25\cdot3$.
2. Cộng trừ các căn cùng dạng.

::solution
$A=4\sqrt3-3\cdot2\sqrt3+5\sqrt3=4\sqrt3-6\sqrt3+5\sqrt3=3\sqrt3$.

**Đáp số.** $A=3\sqrt3$.
:::

:::exercise
Rút gọn:

a) $\sqrt{(1-\sqrt2)^2}$;

b) $\sqrt{9-4\sqrt5}$.

::hint
**Kiến thức:** $\sqrt{A^2}=|A|$; viết biểu thức dưới căn thành bình phương.

**Gợi ý các bước:**
1. Ở ý a), xét dấu của $1-\sqrt2$.
2. Ở ý b), viết $9-4\sqrt5=(\sqrt5-2)^2$.

::solution
a) $\sqrt{(1-\sqrt2)^2}=|1-\sqrt2|=\sqrt2-1$ vì $1<\sqrt2$.

b) $9-4\sqrt5=5-4\sqrt5+4=(\sqrt5-2)^2$, nên $\sqrt{9-4\sqrt5}=|\sqrt5-2|=\sqrt5-2$ vì $\sqrt5>2$.

**Đáp số.** a) $\sqrt2-1$; b) $\sqrt5-2$.
:::

:::exercise
Trục căn thức ở mẫu:

a) $\dfrac{10}{\sqrt5}$;

b) $\dfrac{8}{\sqrt5+1}$;

c) $\dfrac{6}{\sqrt7-\sqrt3}$.

::hint
**Kiến thức:** nhân cả tử và mẫu với biểu thức liên hợp của mẫu.

**Gợi ý các bước:**
1. Xác định biểu thức liên hợp ở mỗi mẫu.
2. Dùng $(a-b)(a+b)=a^2-b^2$ cho mẫu.

::solution
a) $\dfrac{10}{\sqrt5}=\dfrac{10\sqrt5}{5}=2\sqrt5$.

b) $\dfrac{8}{\sqrt5+1}=\dfrac{8(\sqrt5-1)}{5-1}=2(\sqrt5-1)=2\sqrt5-2$.

c) $\dfrac{6}{\sqrt7-\sqrt3}=\dfrac{6(\sqrt7+\sqrt3)}{7-3}=\dfrac{3(\sqrt7+\sqrt3)}{2}$.

**Đáp số.** a) $2\sqrt5$; b) $2\sqrt5-2$; c) $\dfrac{3(\sqrt7+\sqrt3)}{2}$.
:::

:::exercise
Cho $A=\dfrac{\sqrt x+1}{\sqrt x-2}$ với $x\geq0$, $x\neq4$. a) Tính giá trị của $A$ khi $x=9$. b) Tìm $x$ để $A=3$.

::hint
**Kiến thức:** thay giá trị vào biểu thức; giải phương trình chứa $\sqrt x$.

**Gợi ý các bước:**
1. Với $x=9$, tính $\sqrt x$.
2. Ở ý b), nhân hai vế với $\sqrt x-2$ rồi tìm $\sqrt x$.

::solution
a) Với $x=9$, $\sqrt x=3$ nên $A=\dfrac{3+1}{3-2}=4$.

b) $A=3$ nghĩa là $\sqrt x+1=3(\sqrt x-2)$, tức là $2\sqrt x=7$, suy ra $\sqrt x=\dfrac72$ và $x=\dfrac{49}{4}$. Giá trị này thoả mãn điều kiện.

**Đáp số.** a) $A=4$; b) $x=\dfrac{49}4$.
:::

:::exercise
**Bài 1.** ($2{,}0$ điểm) Cho biểu thức
$$P=\left(\frac{\sqrt x}{\sqrt x-1}-\frac{1}{x-\sqrt x}\right):\left(\frac1{\sqrt x+1}+\frac2{x-1}\right)\quad\text{với }x>0,\ x\neq1.$$
a) Rút gọn $P$. b) Tính giá trị của $P$ khi $x=4$.

::hint
**Kiến thức:** $x-\sqrt x=\sqrt x(\sqrt x-1)$ và $x-1=(\sqrt x-1)(\sqrt x+1)$.

**Gợi ý các bước:**
1. Quy đồng ngoặc thứ nhất về mẫu $\sqrt x(\sqrt x-1)$, ngoặc thứ hai về mẫu $x-1$.
2. Rút gọn rồi thực hiện phép chia.

::solution
a) Ngoặc thứ nhất bằng $\dfrac{x-1}{\sqrt x(\sqrt x-1)}=\dfrac{\sqrt x+1}{\sqrt x}$. Ngoặc thứ hai bằng $\dfrac{(\sqrt x-1)+2}{x-1}=\dfrac{\sqrt x+1}{x-1}=\dfrac1{\sqrt x-1}$. Do đó
$$P=\frac{\sqrt x+1}{\sqrt x}\cdot(\sqrt x-1)=\frac{x-1}{\sqrt x}.$$

b) Với $x=4$: $P=\dfrac{4-1}{2}=\dfrac32$.

**Đáp số.** a) $P=\dfrac{x-1}{\sqrt x}$; b) $P=\dfrac32$.
:::

:::exercise
Giả sử một tấm bạt hình vuông có diện tích $50$ m². Tính độ dài cạnh, độ dài đường chéo và chu vi của tấm bạt (chu vi làm tròn đến một chữ số thập phân).

::hint
**Kiến thức:** cạnh $a=\sqrt S$; đường chéo $d=a\sqrt2$.

**Gợi ý các bước:**
1. Tính $a$ và rút gọn $\sqrt{50}$.
2. Tính $d$ và chu vi $4a$.

::solution
Cạnh là $a=\sqrt{50}=5\sqrt2\approx7{,}1$ (m). Đường chéo là $d=5\sqrt2\cdot\sqrt2=10$ (m). Chu vi là $4a=20\sqrt2\approx28{,}3$ (m).

**Đáp số.** Cạnh $5\sqrt2$ m; đường chéo $10$ m; chu vi $\approx28{,}3$ m.
:::

:::exercise
Giải các phương trình:

a) $\sqrt{3x-2}=4$;

b) $\sqrt{x^2-6x+9}=4$.

::hint
**Kiến thức:** điều kiện của căn; $\sqrt{A^2}=|A|$.

**Gợi ý các bước:**
1. Ở ý a), bình phương hai vế rồi kiểm tra điều kiện.
2. Ở ý b), viết $x^2-6x+9=(x-3)^2$.

::solution
a) Điều kiện $x\geq\dfrac23$. Bình phương hai vế: $3x-2=16$, suy ra $x=6$, thoả mãn điều kiện.

b) Phương trình trở thành $|x-3|=4$, nên $x-3=4$ hoặc $x-3=-4$, tức là $x=7$ hoặc $x=-1$.

**Đáp số.** a) $x=6$; b) $x=7$ hoặc $x=-1$.
:::

:::exercise
So sánh (không dùng máy tính):

a) $3\sqrt5$ và $2\sqrt{11}$;

b) $\sqrt7+\sqrt3$ và $4$.

::hint
**Kiến thức:** với $a,b\geq0$: $a>b$ khi và chỉ khi $a^2>b^2$.

**Gợi ý các bước:**
1. Đưa thừa số vào trong dấu căn hoặc bình phương hai vế.
2. So sánh hai số không âm.

::solution
a) $(3\sqrt5)^2=45$ và $(2\sqrt{11})^2=44$, mà $45>44$ nên $3\sqrt5>2\sqrt{11}$.

b) $(\sqrt7+\sqrt3)^2=10+2\sqrt{21}$. Vì $\sqrt{21}>4$ nên $10+2\sqrt{21}>18>16=4^2$, suy ra $\sqrt7+\sqrt3>4$.

**Đáp số.** a) $3\sqrt5>2\sqrt{11}$; b) $\sqrt7+\sqrt3>4$.
:::

:::exercise Thử thách
Tính $B=\dfrac1{1+\sqrt2}+\dfrac1{\sqrt2+\sqrt3}+\dfrac1{\sqrt3+2}+\dots+\dfrac1{\sqrt8+3}$.

::hint
**Kiến thức:** trục căn thức ở mẫu: $\dfrac1{\sqrt k+\sqrt{k+1}}=\sqrt{k+1}-\sqrt k$.

**Gợi ý các bước:**
1. Trục căn thức ở mẫu của từng số hạng.
2. Cộng lại: các số hạng ở giữa triệt tiêu nhau.

::solution
Nhân tử và mẫu với $\sqrt{k+1}-\sqrt k$ ta có $\dfrac1{\sqrt k+\sqrt{k+1}}=\dfrac{\sqrt{k+1}-\sqrt k}{(k+1)-k}=\sqrt{k+1}-\sqrt k$. Do đó
$$B=(\sqrt2-1)+(\sqrt3-\sqrt2)+\dots+(3-\sqrt8)=3-1=2.$$

**Đáp số.** $B=2$.
:::

## Kiểm tra mini

:::quiz
::mc
Giá trị rút gọn của $\sqrt{48}-\sqrt{12}$ là
A. $6$.
B. $2\sqrt3$.
C. $2$.
D. $3\sqrt3$.
::key B
$\sqrt{48}-\sqrt{12}=4\sqrt3-2\sqrt3=2\sqrt3$. Đáp án A là $\sqrt{48-12}$ (căn của hiệu), C là $\sqrt{48}:\sqrt{12}$, D là $4\sqrt3-\sqrt3$.

::mc
Trục căn thức ở mẫu của $\dfrac{6}{\sqrt5-\sqrt2}$ ta được
A. $2\sqrt5-2\sqrt2$.
B. $6(\sqrt5+\sqrt2)$.
C. $2\sqrt5+2\sqrt2$.
D. $\dfrac{\sqrt5+\sqrt2}{2}$.
::key C
$\dfrac{6(\sqrt5+\sqrt2)}{5-2}=2(\sqrt5+\sqrt2)$. Đáp án A nhầm dấu của liên hợp, B quên chia cho $5-2=3$, D chia nhầm cho $12$.

::mc
Giá trị của $\sqrt{(\sqrt5-3)^2}$ là
A. $\sqrt5-3$.
B. $3+\sqrt5$.
C. $\sqrt5+3$.
D. $3-\sqrt5$.
::key D
$\sqrt{(\sqrt5-3)^2}=|\sqrt5-3|=3-\sqrt5$ vì $\sqrt5<3$. Đáp án A quên giá trị tuyệt đối, B và C là các biểu thức khác (phép cộng thay phép trừ).

::mc
Điều kiện xác định của biểu thức $\dfrac{1}{\sqrt{x-3}}$ là
A. $x>3$.
B. $x\geq3$.
C. $x\neq3$.
D. $x>0$.
::key A
Biểu thức dưới căn phải không âm và mẫu khác $0$, nên $x-3>0$. Đáp án B bỏ sót việc mẫu khác $0$, C bỏ sót điều kiện của căn, D lấy điều kiện của $\sqrt x$.

::tf
Cho $P=\dfrac{2\sqrt x}{\sqrt x+2}$ với $x\geq0$. Các nhận định sau đúng hay sai?
a) $P$ xác định với mọi $x\geq0$.
b) $P=2$ khi $x=0$.
c) $P=1$ khi $x=4$.
d) $P=\dfrac12$ khi $x=1$.
::key Đ S Đ S
a) Đúng: $\sqrt x+2>0$ với mọi $x\geq0$. b) Sai: tại $x=0$ thì $P=0$. c) Đúng: $P=\dfrac{4}{4}=1$. d) Sai: tại $x=1$ thì $P=\dfrac23$.

::sa
Cho $P=\dfrac{x-1}{\sqrt x}$ với $x>0$. Tính giá trị của $P$ khi $x=4$.
::key 1,5
$P=\dfrac{4-1}{2}=\dfrac32=1{,}5$.

::sa
Một tấm kính hình vuông có diện tích $72$ dm². Tính độ dài đường chéo của tấm kính (đơn vị dm).
::key 12
Cạnh là $6\sqrt2$ nên đường chéo là $6\sqrt2\cdot\sqrt2=12$.
:::
