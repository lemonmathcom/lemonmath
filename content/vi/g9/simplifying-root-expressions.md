---
title: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai
description: Đưa thừa số ra ngoài hoặc vào trong dấu căn, trục căn thức ở mẫu và rút gọn biểu thức chứa căn thức bậc hai.
minutes: 20
---

:::goals
- Đưa thừa số ra ngoài dấu căn và vào trong dấu căn, dùng để tính và so sánh.
- Khử mẫu của biểu thức lấy căn và trục căn thức ở mẫu.
- Rút gọn biểu thức chứa căn thức bậc hai theo các bước của đề thi vào lớp 10.
:::

Nhà bác Lan có ba mảnh đất hình vuông nằm liền nhau trên một hàng, diện tích lần lượt là $12$ m², $27$ m² và $48$ m². Bác muốn làm hàng rào dọc theo cạnh phía trước của cả ba mảnh. Hàng rào dài bao nhiêu mét? Có viết được độ dài đúng thật gọn không?

:::diagram Ba mảnh đất hình vuông xếp liền nhau
alt: Ba hình vuông đặt cạnh nhau trên một đường thẳng, cạnh lần lượt là căn 12, căn 27 và căn 48 mét
point A 0,0 ""
point B 3.46,0 ""
point C 8.66,0 ""
point D 15.59,0 ""
point E 0,3.46 ""
point F 3.46,3.46 ""
point G 3.46,5.2 ""
point H 8.66,5.2 ""
point I 8.66,6.93 ""
point K 15.59,6.93 ""
polygon A B F E
polygon B C H G
polygon C D K I
segment A B "√12"
segment B C "√27"
segment C D "√48"
:::

Ba cạnh là $\sqrt{12}$, $\sqrt{27}$ và $\sqrt{48}$ m. Không có quy tắc cộng các căn, nhưng ta có thể biến đổi để chúng có chung một "phần căn".

## Đưa thừa số ra ngoài và vào trong dấu căn

### Khám phá

Ta tách mỗi số dưới dấu căn thành tích của một số chính phương với một số khác, rồi dùng $\sqrt{ab}=\sqrt a\cdot\sqrt b$:

$$\sqrt{12}=\sqrt{4\cdot3}=2\sqrt3,\qquad \sqrt{27}=\sqrt{9\cdot3}=3\sqrt3,\qquad \sqrt{48}=\sqrt{16\cdot3}=4\sqrt3.$$

Ba căn bây giờ là các bội của cùng một số $\sqrt3$. Ta gọi chúng là các **căn thức đồng dạng**, và cộng được như cộng các đơn thức đồng dạng.

:::definition Đưa thừa số ra ngoài và vào trong dấu căn
Với $B\ge0$:
- **Đưa thừa số ra ngoài dấu căn:** $\sqrt{A^2B}=|A|\sqrt B$.
- **Đưa thừa số vào trong dấu căn:** $A\sqrt B=\sqrt{A^2B}$ nếu $A\ge0$; $A\sqrt B=-\sqrt{A^2B}$ nếu $A<0$.
:::

Công thức thứ nhất đúng vì $\sqrt{A^2B}=\sqrt{A^2}\cdot\sqrt B=|A|\sqrt B$. Công thức thứ hai là đọc ngược công thức thứ nhất; khi $A<0$ thì số $A\sqrt B$ âm, nên phải giữ dấu trừ bên ngoài.

:::example Cộng các căn thức đồng dạng
Tính độ dài hàng rào $\sqrt{12}+\sqrt{27}+\sqrt{48}$ (viết gọn, rồi làm tròn đến hàng phần trăm).

**Lời giải.** Đưa thừa số ra ngoài dấu căn như ở phần khám phá, ta có

$$\sqrt{12}+\sqrt{27}+\sqrt{48}=2\sqrt3+3\sqrt3+4\sqrt3=9\sqrt3\approx15{,}59.$$

Vậy hàng rào dài đúng $9\sqrt3$ m, khoảng $15{,}59$ m.
:::

Khi dưới dấu căn có chữ, nhớ rằng $\sqrt{A^2}=|A|$ nên phải xét dấu của $A$.

:::example Đưa thừa số chứa chữ ra ngoài
Rút gọn: a) $\sqrt{50x^2}$ với $x<0$; b) $\sqrt{18a^3}$ với $a\ge0$.

**Lời giải.** Ở câu a, vì $x<0$ nên $|x|=-x$; ở câu b, vì $a\ge0$ nên $|3a|=3a$. Ta có

$$\sqrt{50x^2}=\sqrt{(5x)^2\cdot2}=5|x|\sqrt2=-5x\sqrt2;\qquad \sqrt{18a^3}=\sqrt{(3a)^2\cdot2a}=3a\sqrt{2a}.$$

Vậy a) bằng $-5x\sqrt2$; b) bằng $3a\sqrt{2a}$.
:::

Đưa thừa số vào trong dấu căn giúp so sánh hai số mà không cần máy tính.

:::example So sánh nhờ đưa vào trong dấu căn
So sánh $3\sqrt5$ và $2\sqrt{11}$.

**Lời giải.** Đưa thừa số vào trong dấu căn, ta có

$$3\sqrt5=\sqrt{9\cdot5}=\sqrt{45},\qquad 2\sqrt{11}=\sqrt{4\cdot11}=\sqrt{44}.$$

Vì $45>44$ nên $\sqrt{45}>\sqrt{44}$.

Vậy $3\sqrt5>2\sqrt{11}$.
:::

## Khử mẫu và trục căn thức ở mẫu

Những số như $\dfrac{6}{\sqrt3}$ khó ước lượng vì mẫu là số vô tỉ. Ta biến đổi để mẫu không còn căn.

:::theorem Các phép biến đổi
- **Khử mẫu của biểu thức lấy căn:** $\sqrt{\dfrac AB}=\dfrac{\sqrt{AB}}{|B|}$ với $AB\ge0$, $B\neq0$.
- **Trục căn thức ở mẫu:** $\dfrac{A}{\sqrt B}=\dfrac{A\sqrt B}{B}$ với $B>0$.
- Với $A\ge0$, $A\neq B^2$: $\dfrac{C}{\sqrt A+B}=\dfrac{C\left(\sqrt A-B\right)}{A-B^2}$ và $\dfrac{C}{\sqrt A-B}=\dfrac{C\left(\sqrt A+B\right)}{A-B^2}$.
- Với $A$, $B\ge0$, $A\neq B$: $\dfrac{C}{\sqrt A+\sqrt B}=\dfrac{C\left(\sqrt A-\sqrt B\right)}{A-B}$ và $\dfrac{C}{\sqrt A-\sqrt B}=\dfrac{C\left(\sqrt A+\sqrt B\right)}{A-B}$.
:::

Ý tưởng chung: nhân cả tử và mẫu với một biểu thức để mẫu thành hằng đẳng thức $(m+n)(m-n)=m^2-n^2$, trong đó bình phương làm mất căn. Hai biểu thức $\sqrt A+\sqrt B$ và $\sqrt A-\sqrt B$ gọi là hai **biểu thức liên hợp**.

:::example Trục căn thức ở mẫu
Trục căn thức ở mẫu: a) $\dfrac{6}{\sqrt3}$; b) $\dfrac{4}{\sqrt5-1}$; c) $\dfrac{1}{\sqrt7+\sqrt5}$.

**Lời giải.** Ở câu a, ta nhân cả tử và mẫu với $\sqrt3$; ở câu b và c, ta nhân cả tử và mẫu với biểu thức liên hợp của mẫu. Ta có

$$\begin{aligned} \text{a) }& \frac{6}{\sqrt3}=\frac{6\sqrt3}{3}=2\sqrt3;\\ \text{b) }& \frac{4}{\sqrt5-1}=\frac{4\left(\sqrt5+1\right)}{5-1}=\sqrt5+1;\\ \text{c) }& \frac{1}{\sqrt7+\sqrt5}=\frac{\sqrt7-\sqrt5}{7-5}=\frac{\sqrt7-\sqrt5}{2}. \end{aligned}$$

Vậy a) $2\sqrt3$; b) $\sqrt5+1$; c) $\dfrac{\sqrt7-\sqrt5}{2}$.
:::

## Rút gọn biểu thức chứa căn thức bậc hai

Bài rút gọn trong đề thi vào lớp 10 thường đi theo các bước: tìm điều kiện xác định, phân tích tử và mẫu thành nhân tử, quy đồng và thu gọn.

:::example Rút gọn một biểu thức chứa $\sqrt x$
Rút gọn $A=\dfrac{x-\sqrt x}{\sqrt x-1}+\dfrac{x-4}{\sqrt x+2}$ với $x\ge0$, $x\neq1$.

**Lời giải.** Vì $x\ge0$ nên $x=\left(\sqrt x\right)^2$. Do đó $x-\sqrt x=\sqrt x\left(\sqrt x-1\right)$ và $x-4=\left(\sqrt x-2\right)\left(\sqrt x+2\right)$. Ta có

$$A=\frac{\sqrt x\left(\sqrt x-1\right)}{\sqrt x-1}+\frac{\left(\sqrt x-2\right)\left(\sqrt x+2\right)}{\sqrt x+2}=\sqrt x+\sqrt x-2=2\sqrt x-2.$$

Vậy $A=2\sqrt x-2$ với $x\ge0$, $x\neq1$.
:::

:::warning Những sai lầm thường gặp
- **Cộng các căn không đồng dạng.** Sai: $\sqrt2+\sqrt3=\sqrt5$. Lí do sai: căn không cộng qua dấu cộng. Đúng: $\sqrt2+\sqrt3$ đã gọn; chỉ cộng được $a\sqrt3+b\sqrt3=(a+b)\sqrt3$.
- **Đưa số âm vào trong dấu căn.** Sai: $-2\sqrt3=\sqrt{12}$. Lí do sai: vế trái âm, vế phải dương. Đúng: $-2\sqrt3=-\sqrt{12}$.
- **Nhân liên hợp chỉ ở mẫu.** Sai: $\dfrac{4}{\sqrt5-1}=\dfrac{4}{4}=1$. Lí do sai: nhân mẫu với $\sqrt5+1$ thì phải nhân cả tử. Đúng: $\dfrac{4\left(\sqrt5+1\right)}{4}=\sqrt5+1$.
- **Quên điều kiện khi rút gọn.** Sai: rút gọn $\dfrac{x-\sqrt x}{\sqrt x-1}$ mà không ghi $x\neq1$. Lí do sai: tại $x=1$ mẫu bằng $0$. Đúng: ghi rõ $x\ge0$, $x\neq1$.
:::

## Thuật ngữ

:::terms
- đưa thừa số ra ngoài dấu căn | take a factor outside the square root
- đưa thừa số vào trong dấu căn | move a factor inside the square root
- căn thức đồng dạng | like surds
- khử mẫu của biểu thức lấy căn | remove the denominator under the root sign
- trục căn thức ở mẫu | rationalise the denominator
- biểu thức liên hợp | conjugate
- rút gọn | simplify
- phân tích thành nhân tử | factorise
:::

## Tóm tắt

- $\sqrt{A^2B}=|A|\sqrt B$ ($B\ge0$): tách ra một bình phương rồi đưa ra ngoài.
- $A\sqrt B=\sqrt{A^2B}$ khi $A\ge0$; $A\sqrt B=-\sqrt{A^2B}$ khi $A<0$. Dùng để so sánh.
- Căn đồng dạng: $a\sqrt c+b\sqrt c=(a+b)\sqrt c$.
- $\dfrac{A}{\sqrt B}=\dfrac{A\sqrt B}{B}$; với mẫu $\sqrt A\pm B$ hoặc $\sqrt A\pm\sqrt B$, nhân cả tử và mẫu với biểu thức liên hợp.
- Rút gọn: điều kiện xác định → phân tích nhân tử → quy đồng → thu gọn → kiểm tra bằng một giá trị.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Đưa thừa số ra ngoài dấu căn: a) $\sqrt{75}$; b) $\sqrt{200}$; c) $\sqrt{28a^2}$ với $a<0$.

::hint
**Kiến thức:** $\sqrt{A^2B}=|A|\sqrt B$.

**Gợi ý các bước:**
1. Tìm số chính phương lớn nhất là ước của số dưới dấu căn.
2. Đưa căn của nó ra ngoài; với chữ, xét dấu.

::solution
a) $\sqrt{75}=\sqrt{25\cdot3}=5\sqrt3$. b) $\sqrt{200}=\sqrt{100\cdot2}=10\sqrt2$. c) $\sqrt{28a^2}=\sqrt{(2a)^2\cdot7}=2|a|\sqrt7=-2a\sqrt7$ (vì $a<0$).

**Đáp số.** a) $5\sqrt3$; b) $10\sqrt2$; c) $-2a\sqrt7$.
:::

:::exercise
Tính $\sqrt{20}-\sqrt{45}+3\sqrt5$.

::hint
**Kiến thức:** đưa ra ngoài dấu căn để được các căn đồng dạng.

**Gợi ý các bước:**
1. Viết $\sqrt{20}=2\sqrt5$, $\sqrt{45}=3\sqrt5$.
2. Cộng, trừ các hệ số.

::solution
Ta có $\sqrt{20}-\sqrt{45}+3\sqrt5=2\sqrt5-3\sqrt5+3\sqrt5=2\sqrt5$.

**Đáp số.** $2\sqrt5$.
:::

:::exercise
a) So sánh $4\sqrt3$ và $3\sqrt5$.

b) Sắp xếp theo thứ tự tăng dần: $2\sqrt7$, $3\sqrt3$, $4\sqrt2$.

::hint
**Kiến thức:** với $A\ge0$, $A\sqrt B=\sqrt{A^2B}$.

**Gợi ý các bước:**
1. Đưa hệ số vào trong dấu căn.
2. So sánh các số dưới dấu căn.

::solution
a) Ta có $4\sqrt3=\sqrt{48}$ và $3\sqrt5=\sqrt{45}$. Vì $48>45$ nên $4\sqrt3>3\sqrt5$.

b) Ta có $2\sqrt7=\sqrt{28}$, $3\sqrt3=\sqrt{27}$, $4\sqrt2=\sqrt{32}$. Vì $27<28<32$ nên $3\sqrt3<2\sqrt7<4\sqrt2$.

**Đáp số.** a) $4\sqrt3>3\sqrt5$; b) $3\sqrt3<2\sqrt7<4\sqrt2$.
:::

:::exercise
Trục căn thức ở mẫu: a) $\dfrac{10}{\sqrt5}$; b) $\dfrac{2}{\sqrt3+1}$; c) $\dfrac{4}{\sqrt7-\sqrt3}$.

::hint
**Kiến thức:** $\dfrac A{\sqrt B}=\dfrac{A\sqrt B}B$; nhân với biểu thức liên hợp của mẫu.

**Gợi ý các bước:**
1. Chọn biểu thức để nhân cả tử và mẫu.
2. Tính mẫu bằng hằng đẳng thức, rồi rút gọn.

::solution
a) $\dfrac{10}{\sqrt5}=\dfrac{10\sqrt5}{5}=2\sqrt5$. b) $\dfrac{2}{\sqrt3+1}=\dfrac{2\left(\sqrt3-1\right)}{3-1}=\sqrt3-1$. c) $\dfrac{4}{\sqrt7-\sqrt3}=\dfrac{4\left(\sqrt7+\sqrt3\right)}{7-3}=\sqrt7+\sqrt3$.

**Đáp số.** a) $2\sqrt5$; b) $\sqrt3-1$; c) $\sqrt7+\sqrt3$.
:::

:::exercise
Khử mẫu của biểu thức lấy căn: a) $\sqrt{\dfrac23}$; b) $\sqrt{\dfrac58}$.

::hint
**Kiến thức:** $\sqrt{\dfrac AB}=\dfrac{\sqrt{AB}}{|B|}$.

**Gợi ý các bước:**
1. Nhân tử và mẫu dưới dấu căn để mẫu thành số chính phương.
2. Khai căn mẫu.

::solution
a) $\sqrt{\dfrac23}=\sqrt{\dfrac{2\cdot3}{3^2}}=\dfrac{\sqrt6}{3}$. b) $\sqrt{\dfrac58}=\sqrt{\dfrac{5\cdot2}{16}}=\dfrac{\sqrt{10}}{4}$.

**Đáp số.** a) $\dfrac{\sqrt6}3$; b) $\dfrac{\sqrt{10}}4$.
:::

:::exercise
Tính $\left(\sqrt{12}+\sqrt{27}\right)\cdot\sqrt3$.

::hint
**Kiến thức:** $\sqrt a\cdot\sqrt b=\sqrt{ab}$ (xem [khai căn bậc hai với phép nhân và phép chia](lesson:square-roots-multiply-divide)).

**Gợi ý các bước:**
1. Nhân phân phối.
2. Gộp thành một căn rồi khai căn.

::solution
Ta có $\left(\sqrt{12}+\sqrt{27}\right)\cdot\sqrt3=\sqrt{36}+\sqrt{81}=6+9=15$.

**Đáp số.** $15$.
:::

:::exercise
Ba mảnh vườn hình vuông có diện tích $18$ m², $32$ m² và $50$ m² được xếp liền nhau thành một hàng. Tính tổng độ dài ba cạnh nằm trên hàng đó: viết dạng gọn, rồi làm tròn đến hàng phần trăm.

::hint
**Kiến thức:** cạnh hình vuông diện tích $S$ là $\sqrt S$; đưa thừa số ra ngoài dấu căn.

**Gợi ý các bước:**
1. Viết ba cạnh dưới dạng $a\sqrt2$.
2. Cộng, rồi bấm máy.

::solution
Ba cạnh dài $\sqrt{18}$ m, $\sqrt{32}$ m và $\sqrt{50}$ m. Do đó tổng độ dài là $\sqrt{18}+\sqrt{32}+\sqrt{50}=3\sqrt2+4\sqrt2+5\sqrt2=12\sqrt2\approx16{,}97$ (m).

**Đáp số.** $12\sqrt2$ m, khoảng $16{,}97$ m.
:::

:::exercise
Rút gọn biểu thức $B=\dfrac{a\sqrt b+b\sqrt a}{\sqrt a+\sqrt b}$ với $a>0$, $b>0$.

::hint
**Kiến thức:** $a=\left(\sqrt a\right)^2$ với $a\ge0$; đặt nhân tử chung.

**Gợi ý các bước:**
1. Viết tử thành $\sqrt a\sqrt b\left(\sqrt a+\sqrt b\right)$.
2. Rút gọn với mẫu.

::solution
Vì $a>0$, $b>0$ nên $a\sqrt b+b\sqrt a=\sqrt a\sqrt b\left(\sqrt a+\sqrt b\right)$. Do đó $B=\dfrac{\sqrt a\sqrt b\left(\sqrt a+\sqrt b\right)}{\sqrt a+\sqrt b}=\sqrt{ab}$.

**Đáp số.** $B=\sqrt{ab}$.
:::

:::exercise
Cho biểu thức $P=\dfrac{\sqrt x}{\sqrt x-3}-\dfrac{3}{\sqrt x+3}$.

a) Tìm điều kiện xác định của biểu thức $P$.

b) Rút gọn $P$.

c) Tính giá trị của $P$ khi $x=36$.

d) Tìm $x$ để $P=2$.

::hint
**Kiến thức:** mẫu chung $\left(\sqrt x-3\right)\left(\sqrt x+3\right)=x-9$.

**Gợi ý các bước:**
1. Cần $x\ge0$ và $\sqrt x\neq3$.
2. Quy đồng, thu gọn tử.
3. Thay $x=36$; giải phương trình ở câu d và đối chiếu điều kiện.

::solution
a) Điều kiện xác định: $x\ge0$ và $\sqrt x\neq3$, tức là $x\ge0$, $x\neq9$.

b) Với $x\ge0$, $x\neq9$, ta có $P=\dfrac{\sqrt x\left(\sqrt x+3\right)-3\left(\sqrt x-3\right)}{x-9}=\dfrac{x+3\sqrt x-3\sqrt x+9}{x-9}=\dfrac{x+9}{x-9}$.

c) Thay $x=36$ (thoả mãn điều kiện) vào $P$, ta được $P=\dfrac{36+9}{36-9}=\dfrac{45}{27}=\dfrac53$.

d) Ta có $P=2\iff\dfrac{x+9}{x-9}=2\iff x+9=2(x-9)\iff x=27$ (thoả mãn điều kiện).

**Đáp số.** a) $x\ge0$, $x\neq9$; b) $P=\dfrac{x+9}{x-9}$; c) $\dfrac53$; d) $x=27$.
:::

:::exercise Thử thách
Tính $C=\sqrt{4-2\sqrt3}+\sqrt{4+2\sqrt3}$.

::hint
**Kiến thức:** $\left(\sqrt3\pm1\right)^2=4\pm2\sqrt3$ và $\sqrt{A^2}=|A|$.

**Gợi ý các bước:**
1. Viết $4-2\sqrt3=\left(\sqrt3-1\right)^2$ và $4+2\sqrt3=\left(\sqrt3+1\right)^2$.
2. Bỏ căn, xét dấu $\sqrt3-1$.

::solution
Ta có $4-2\sqrt3=\left(\sqrt3-1\right)^2$ và $4+2\sqrt3=\left(\sqrt3+1\right)^2$. Do đó $C=\left|\sqrt3-1\right|+\left|\sqrt3+1\right|$. Vì $\sqrt3>1$ nên $C=\left(\sqrt3-1\right)+\left(\sqrt3+1\right)=2\sqrt3$.

**Đáp số.** $C=2\sqrt3$.
:::

## Kiểm tra mini

:::quiz
::mc
$\sqrt{72}$ bằng
A. $6\sqrt2$.
B. $36\sqrt2$.
C. $2\sqrt6$.
D. $3\sqrt2$.
::key A
Ta có $\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2$. Phương án B quên khai căn $36$, C đảo vị trí hai số, D chỉ tách $9$ rồi bỏ quên thừa số $4$.

::mc
Trục căn thức ở mẫu của $\dfrac{6}{\sqrt2}$ ta được
A. $\sqrt3$.
B. $6\sqrt2$.
C. $3\sqrt2$.
D. $3$.
::key C
Ta có $\dfrac{6}{\sqrt2}=\dfrac{6\sqrt2}{2}=3\sqrt2$. Phương án B quên chia cho $2$, A lấy $6$ chia $2$ dưới dấu căn, D làm mất căn ở tử.

::mc
$\dfrac{1}{\sqrt5-2}$ bằng
A. $-\sqrt5-2$.
B. $\sqrt5-2$.
C. $\dfrac{\sqrt5+2}{3}$.
D. $\sqrt5+2$.
::key D
Ta có $\dfrac{1}{\sqrt5-2}=\dfrac{\sqrt5+2}{5-4}=\sqrt5+2$. Phương án C tính mẫu là $5-2$ (quên bình phương $2$), A tính mẫu là $4-5$.

::mc
Với $a<0$, $a\sqrt3$ bằng
A. $\sqrt{3a^2}$.
B. $-\sqrt{3a^2}$.
C. $\sqrt{3a}$.
D. $-\sqrt{3a}$.
::key B
Vì $a<0$ nên $a\sqrt3<0$, do đó $a\sqrt3=-\sqrt{3a^2}$. Phương án A quên dấu; C, D không bình phương $a$ (và $\sqrt{3a}$ không xác định khi $a<0$).

::tf
Cho $A=\sqrt{50}-\sqrt{18}+\sqrt8$. Xét tính đúng sai của các mệnh đề sau:
a) $\sqrt{50}=5\sqrt2$.
b) $A=\sqrt{40}$.
c) $A\cdot\sqrt2=8$.
d) $\dfrac1A=\dfrac{\sqrt2}{8}$.
::key Đ S Đ Đ
a) Đúng. Ta có $\sqrt{50}=\sqrt{25\cdot2}=5\sqrt2$. b) Sai. Ta có $A=5\sqrt2-3\sqrt2+2\sqrt2=4\sqrt2=\sqrt{32}$ (không được cộng, trừ dưới dấu căn). c) Đúng. $A\cdot\sqrt2=4\sqrt2\cdot\sqrt2=8$. d) Đúng. $\dfrac1A=\dfrac{1}{4\sqrt2}=\dfrac{\sqrt2}{8}$.

::sa
Tính $\dfrac{\sqrt{75}-\sqrt{12}}{\sqrt3}$.
::key 3
Ta có $\sqrt{75}-\sqrt{12}=5\sqrt3-2\sqrt3=3\sqrt3$. Do đó $\dfrac{\sqrt{75}-\sqrt{12}}{\sqrt3}=\dfrac{3\sqrt3}{\sqrt3}=3$.

::sa
Một mảnh đất hình chữ nhật có chiều dài $\sqrt{98}$ m và chiều rộng $\sqrt{32}$ m. Tính chu vi của mảnh đất theo mét (làm tròn kết quả đến hàng phần mười).
::key 31,1
Chu vi mảnh đất là $2\left(\sqrt{98}+\sqrt{32}\right)=2\left(7\sqrt2+4\sqrt2\right)=22\sqrt2\approx31{,}1$ (m).
:::
