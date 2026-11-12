---
title: Phương trình bậc nhất một ẩn
description: Nhận biết phương trình bậc nhất một ẩn, dùng quy tắc chuyển vế và quy tắc nhân để giải, kể cả khi có ngoặc, mẫu số, vô nghiệm và vô số nghiệm.
minutes: 22
---

:::goals
- Nhận biết phương trình bậc nhất một ẩn và nghiệm của nó.
- Dùng quy tắc chuyển vế và quy tắc nhân để giải phương trình $ax+b=0$.
- Giải phương trình đưa được về dạng $ax+b=0$ (có ngoặc, có mẫu số).
- Nhận biết phương trình vô nghiệm và phương trình có vô số nghiệm.
:::

Giả sử một gói cước điện thoại có phí cố định $40\,000$ đồng mỗi tháng, mỗi gigabyte (GB) dữ liệu thêm tính $6\,000$ đồng. Tháng này bạn Lan phải trả $82\,000$ đồng. Gọi $x$ là số GB dữ liệu thêm Lan đã dùng, thì số tiền phải trả là $40\,000+6\,000x$ đồng. Ta có đẳng thức
$$6\,000x+40\,000=82\,000.$$
Làm sao tìm được $x$? Đây là một phương trình bậc nhất một ẩn, và bài này dạy bạn cách giải một cách có hệ thống.

## Cùng khám phá

Hãy hình dung một chiếc cân thăng bằng. Đĩa trái có $x$ và $3$ quả cân $1$ kg, đĩa phải có $7$ quả cân $1$ kg: $x+3=7$. Nếu ta bớt $3$ quả cân ở **cả hai** đĩa thì cân vẫn thăng bằng và ta được $x=4$. Nếu đĩa trái có hai gói hàng giống nhau cùng $3$ quả cân, đĩa phải có $11$ quả cân ($2x+3=11$), ta bớt $3$ quả cân mỗi đĩa được $2x=8$, rồi chia đôi cả hai bên được $x=4$.

Hai thao tác trên (cộng, trừ cùng một số ở hai vế, rồi nhân, chia cả hai vế với cùng một số khác $0$) không làm cân mất thăng bằng, tức là không làm thay đổi nghiệm. Đó là cơ sở của cách giải phương trình.

## Phương trình bậc nhất một ẩn

:::definition Phương trình bậc nhất một ẩn
**Phương trình bậc nhất một ẩn** là phương trình có dạng $ax+b=0$, trong đó $a$, $b$ là hai số đã cho và $a\neq0$.

Giá trị của $x$ làm hai vế bằng nhau gọi là **nghiệm** của phương trình. **Giải** phương trình là tìm tất cả các nghiệm của nó.
:::

**Hiểu sâu hơn.** Điều kiện $a\neq0$ rất quan trọng: nếu $a=0$ thì $0x+b=0$ không còn chứa ẩn và không phải phương trình bậc nhất. Ví dụ $2x-6=0$ có $a=2$, $b=-6$ và nghiệm là $x=3$ vì $2\cdot3-6=0$.

:::example Nhận biết phương trình bậc nhất một ẩn
Phương trình nào sau đây là phương trình bậc nhất một ẩn?

a) $3x-5=0$.

b) $0x+2=0$.

c) $x^2-1=0$.

d) $2y+7=0$.

e) $\dfrac1x+1=0$.

**Lời giải.** Ta kiểm tra dạng $ax+b=0$ với $a\neq0$.

a) Có dạng $ax+b=0$ với $a=3\neq0$: là phương trình bậc nhất.

b) Có $a=0$: không phải.

c) Ẩn có số mũ $2$: không phải.

d) Có dạng $ay+b=0$ với $a=2\neq0$ (ẩn là $y$): là phương trình bậc nhất.

e) Ẩn nằm ở mẫu: không phải.

Vậy a) và d) là phương trình bậc nhất một ẩn.
:::

## Cách giải phương trình bậc nhất

Hai phương trình có cùng tập nghiệm gọi là hai phương trình **tương đương**. Ta biến đổi phương trình thành những phương trình tương đương đơn giản hơn nhờ hai quy tắc:

:::theorem Hai quy tắc biến đổi phương trình
- **Quy tắc chuyển vế:** trong một phương trình, ta có thể chuyển một hạng tử từ vế này sang vế kia và phải đổi dấu hạng tử đó.
- **Quy tắc nhân:** trong một phương trình, ta có thể nhân (hoặc chia) cả hai vế với cùng một số khác $0$.
:::

**Vì sao?** Chuyển vế chính là cộng (hoặc trừ) cùng một số vào hai vế, như bớt cân ở cả hai đĩa; nhân, chia với số khác $0$ giữ nguyên sự bằng nhau và có thể làm ngược lại. Vì vậy các phương trình thu được tương đương với phương trình ban đầu.

Áp dụng cho $ax+b=0$: chuyển $b$ sang vế phải được $ax=-b$, rồi chia hai vế cho $a$ được
$$x=-\frac{b}{a}.$$
Vậy phương trình bậc nhất $ax+b=0$ luôn có **một nghiệm duy nhất** $x=-\dfrac ba$.

:::example Giải phương trình bậc nhất
Giải các phương trình sau:

a) $4x-12=0$.

b) $5x+7=0$.

c) $2x+3=11$.

**Lời giải.** a) Chuyển $-12$ sang vế phải được $4x=12$, chia hai vế cho $4$ được $x=3$.

b) Chuyển $7$ sang vế phải được $5x=-7$, chia hai vế cho $5$ được $x=-\dfrac75$.

c) Chuyển $3$ sang vế phải được $2x=11-3=8$, chia hai vế cho $2$ được $x=4$.

Vậy a) $x=3$; b) $x=-\dfrac75$; c) $x=4$.
:::

## Phương trình đưa được về dạng $ax+b=0$

Nhiều phương trình chưa có dạng $ax+b=0$, nhưng ta đưa được về dạng đó bằng cách bỏ ngoặc, quy đồng khử mẫu, chuyển các hạng tử chứa ẩn về một vế và các số về vế còn lại, rồi thu gọn.

:::example Phương trình có dấu ngoặc
Giải phương trình $3(x-2)-5=2(x+1)$.

**Lời giải.** Bỏ ngoặc, ta được $3x-6-5=2x+2$, tức $3x-11=2x+2$. Chuyển $2x$ sang vế trái và $-11$ sang vế phải được $3x-2x=2+11$, hay $x=13$.

Kiểm tra: vế trái $3\cdot11-5=28$, vế phải $2\cdot14=28$.

Vậy phương trình có nghiệm $x=13$.
:::

:::example Phương trình có mẫu số
Giải phương trình $\dfrac{x+1}{2}-\dfrac{2x-1}{3}=1$.

**Lời giải.** Mẫu số chung là $6$. Nhân hai vế với $6$ (nhớ nhân cả số $1$ ở vế phải), ta được
$$3(x+1)-2(2x-1)=6.$$
Bỏ ngoặc: $3x+3-4x+2=6$, tức $-x+5=6$, suy ra $-x=1$, hay $x=-1$.

Kiểm tra: $\dfrac{0}{2}-\dfrac{-3}{3}=0+1=1$.

Vậy phương trình có nghiệm $x=-1$.
:::

Không phải phương trình nào cũng cho ra đúng một nghiệm. Khi biến đổi, ta có thể gặp dạng $0x=c$.

:::example Vô nghiệm và vô số nghiệm
Giải các phương trình sau:

a) $2(x+1)=2x+5$.

b) $3(x-1)=3x-3$.

**Lời giải.** a) Bỏ ngoặc ta được $2x+2=2x+5$. Chuyển vế: $2x-2x=5-2$, tức $0x=3$. Không có giá trị nào của $x$ thoả mãn $0x=3$ (vế trái luôn bằng $0$).

b) Bỏ ngoặc ta được $3x-3=3x-3$. Chuyển vế: $3x-3x=-3+3$, tức $0x=0$. Đẳng thức này đúng với mọi $x$.

Vậy a) phương trình vô nghiệm; b) phương trình có vô số nghiệm (mọi số thực đều là nghiệm).
:::

Ta quay lại gói cước ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Lan dùng bao nhiêu GB thêm?
Phí cố định $40\,000$ đồng, mỗi GB thêm $6\,000$ đồng (giả sử). Lan trả $82\,000$ đồng. Hỏi Lan dùng thêm bao nhiêu GB?

**Lời giải.**

*Hiểu đề.* Số tiền trả bằng phí cố định cộng tiền dữ liệu thêm; cần tìm số GB thêm $x$.

*Tìm cách giải.* Lập phương trình $6\,000x+40\,000=82\,000$ rồi giải.

*Giải.* Chuyển $40\,000$ sang vế phải: $6\,000x=82\,000-40\,000=42\,000$. Chia hai vế cho $6\,000$ được $x=7$.

*Nhìn lại.* Kiểm tra: $6\,000\cdot7+40\,000=42\,000+40\,000=82\,000$. Kết quả hợp lí vì $x=7$ là số GB dương. Nếu số tiền trả nhỏ hơn $40\,000$ đồng thì nghiệm sẽ âm, tức là đề bài vô lí.

Vậy Lan đã dùng thêm $7$ GB.
:::

:::warning Những sai lầm thường gặp
- **Chuyển vế không đổi dấu.** Sai: $x+3=7\Rightarrow x=7+3=10$. Lí do sai: chuyển $+3$ sang vế phải phải đổi thành $-3$; thử lại $10+3=13\neq7$. Đúng: $x=7-3=4$.
- **Quên nhân cho mọi hạng tử khi khử mẫu.** Sai: $\dfrac{x+1}{2}-\dfrac{2x-1}{3}=1\Rightarrow3(x+1)-2(2x-1)=1$. Lí do sai: số $1$ ở vế phải cũng phải nhân với $6$. Đúng: $3(x+1)-2(2x-1)=6$.
- **Bỏ ngoặc có dấu trừ sai.** Sai: $-2(2x-1)=-4x-2$. Lí do sai: dấu trừ phải nhân cả với $-1$. Đúng: $-2(2x-1)=-4x+2$.
:::

**Kết nối.** Bài này dùng lại các phép tính với số hữu tỉ, bỏ ngoặc và quy đồng mẫu số đã học ở các lớp dưới. Bài tiếp theo, [giải bài toán bằng cách lập phương trình](lesson:g8-equation-word-problems), dùng chính cách giải này để giải những bài toán có lời văn như bài gói cước ở đầu bài.

## Thuật ngữ

:::terms
- phương trình bậc nhất một ẩn | linear equation in one unknown
- ẩn | unknown
- nghiệm | solution (root)
- giải phương trình | solving an equation
- phương trình tương đương | equivalent equations
- quy tắc chuyển vế | rule for moving a term across
- vế trái, vế phải | left-hand side, right-hand side
- vô nghiệm | no solution
- vô số nghiệm | infinitely many solutions
:::

## Tóm tắt

- Phương trình bậc nhất một ẩn có dạng $ax+b=0$ với $a\neq0$; nó có đúng một nghiệm $x=-\dfrac ba$.
- Quy tắc chuyển vế: chuyển hạng tử sang vế kia thì đổi dấu. Quy tắc nhân: nhân hoặc chia hai vế với cùng một số khác $0$.
- Với phương trình có ngoặc hoặc mẫu số: bỏ ngoặc, khử mẫu (nhân mọi hạng tử), chuyển vế, thu gọn rồi giải.
- Nếu thu gọn được $0x=c$ với $c\neq0$ thì phương trình vô nghiệm; nếu được $0x=0$ thì có vô số nghiệm.
- Luôn thử lại nghiệm vào phương trình ban đầu.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Phương trình nào sau đây là phương trình bậc nhất một ẩn?

a) $5x-3=0$.

b) $0x-4=0$.

c) $x^2+2=0$.

d) $7-2t=0$.

::hint
**Kiến thức:** dạng $ax+b=0$ với $a\neq0$.

**Gợi ý các bước:**
1. Xác định ẩn và số mũ của ẩn.
2. Kiểm tra hệ số $a$ khác $0$.

::solution
a) Có $a=5\neq0$: đúng. b) $a=0$: không phải. c) Ẩn có số mũ $2$: không phải. d) Viết $-2t+7=0$ với $a=-2\neq0$: đúng.

Vậy a) và d) là phương trình bậc nhất một ẩn.

**Đáp số.** a), d).
:::

:::exercise
Giải các phương trình sau:

a) $2x-10=0$.

b) $3x+8=0$.

c) $7-4x=0$.

::hint
**Kiến thức:** quy tắc chuyển vế và quy tắc nhân.

**Gợi ý các bước:**
1. Chuyển hạng tử tự do sang vế phải, nhớ đổi dấu.
2. Chia hai vế cho hệ số của $x$.

::solution
a) $2x=10$ nên $x=5$.

b) $3x=-8$ nên $x=-\dfrac83$.

c) $-4x=-7$ nên $x=\dfrac74$.

Vậy a) $x=5$; b) $x=-\dfrac83$; c) $x=\dfrac74$.

**Đáp số.** a) $5$. b) $-\dfrac83$. c) $\dfrac74$.
:::

:::exercise
Giải phương trình $5x-3=2x+9$.

::hint
**Kiến thức:** chuyển các hạng tử chứa ẩn về một vế, các số về vế kia.

**Gợi ý các bước:**
1. Chuyển $2x$ sang vế trái và $-3$ sang vế phải.
2. Thu gọn rồi chia hai vế.

::solution
Ta có $5x-2x=9+3$, tức $3x=12$, suy ra $x=4$.

Kiểm tra: vế trái $5\cdot4-3=17$, vế phải $2\cdot4+9=17$.

Vậy phương trình có nghiệm $x=4$.

**Đáp số.** $x=4$.
:::

:::exercise
Giải phương trình $4(x-1)-3=2(x+5)$.

::hint
**Kiến thức:** bỏ ngoặc bằng tính chất phân phối.

**Gợi ý các bước:**
1. Bỏ ngoặc ở hai vế.
2. Chuyển vế và thu gọn.

::solution
Bỏ ngoặc: $4x-4-3=2x+10$, tức $4x-7=2x+10$. Chuyển vế: $4x-2x=10+7$, tức $2x=17$, suy ra $x=\dfrac{17}{2}=8{,}5$.

Kiểm tra: vế trái $4\cdot7{,}5-3=27$, vế phải $2\cdot13{,}5=27$.

Vậy phương trình có nghiệm $x=8{,}5$.

**Đáp số.** $x=\dfrac{17}{2}$.
:::

:::exercise
Giải phương trình $\dfrac{2x-1}{3}-\dfrac{x+2}{4}=1$.

::hint
**Kiến thức:** khử mẫu bằng cách nhân hai vế với mẫu số chung.

**Gợi ý các bước:**
1. Mẫu số chung là $12$; nhân mọi hạng tử với $12$.
2. Bỏ ngoặc, chuyển vế, thu gọn.

::solution
Nhân hai vế với $12$: $4(2x-1)-3(x+2)=12$. Bỏ ngoặc: $8x-4-3x-6=12$, tức $5x-10=12$, suy ra $5x=22$ và $x=\dfrac{22}{5}=4{,}4$.

Kiểm tra: $\dfrac{8{,}8-1}{3}-\dfrac{6{,}4}{4}=2{,}6-1{,}6=1$.

Vậy phương trình có nghiệm $x=\dfrac{22}{5}$.

**Đáp số.** $x=\dfrac{22}{5}$.
:::

:::exercise
Giải các phương trình sau và nhận xét số nghiệm:

a) $3(x+2)=3x+6$.

b) $2x+5=2(x-1)$.

::hint
**Kiến thức:** thu gọn về dạng $0x=c$.

**Gợi ý các bước:**
1. Bỏ ngoặc, chuyển các hạng tử chứa $x$ về một vế.
2. Xét $c$ bằng $0$ hay khác $0$.

::solution
a) Bỏ ngoặc: $3x+6=3x+6$, tức $0x=0$ đúng với mọi $x$: phương trình có vô số nghiệm.

b) Bỏ ngoặc: $2x+5=2x-2$, suy ra $0x=-7$, không có $x$ nào thoả mãn: phương trình vô nghiệm.

**Đáp số.** a) vô số nghiệm. b) vô nghiệm.
:::

:::exercise
Giả sử một hãng taxi tính cước mở cửa $12\,000$ đồng và $14\,000$ đồng cho mỗi ki-lô-mét. Một hành khách trả $96\,000$ đồng. Hỏi hành khách đã đi bao nhiêu ki-lô-mét?

::hint
**Kiến thức:** lập phương trình từ số tiền phải trả.

**Gợi ý các bước:**
1. Gọi $x$ là số ki-lô-mét; viết $14\,000x+12\,000=96\,000$.
2. Giải phương trình.

::solution
Phương trình: $14\,000x+12\,000=96\,000$. Chuyển vế: $14\,000x=84\,000$, suy ra $x=6$.

Kiểm tra: $14\,000\cdot6+12\,000=96\,000$.

Vậy hành khách đã đi $6$ km.

**Đáp số.** $6$ km.
:::

:::exercise
Giả sử có hai cách thuê xe đạp. Cách A: $30\,000$ đồng cộng $5\,000$ đồng mỗi giờ. Cách B: $10\,000$ đồng cộng $7\,000$ đồng mỗi giờ. Thuê bao nhiêu giờ thì hai cách tốn tiền bằng nhau? Khi đó tốn bao nhiêu tiền?

::hint
**Kiến thức:** cho hai biểu thức chi phí bằng nhau.

**Gợi ý các bước:**
1. Gọi $x$ là số giờ; viết $30\,000+5\,000x=10\,000+7\,000x$.
2. Giải rồi tính chi phí.

::solution
Phương trình: $30\,000+5\,000x=10\,000+7\,000x$. Chuyển vế: $30\,000-10\,000=7\,000x-5\,000x$, tức $20\,000=2\,000x$, suy ra $x=10$. Chi phí là $30\,000+5\,000\cdot10=80\,000$ (đồng).

Kiểm tra cách B: $10\,000+7\,000\cdot10=80\,000$.

Vậy thuê $10$ giờ thì hai cách bằng nhau, tốn $80\,000$ đồng.

**Đáp số.** $10$ giờ; $80\,000$ đồng.
:::

:::exercise
Trong các số $-2$, $0$, $2$, số nào là nghiệm của phương trình $3x+7=x+3$?

::hint
**Kiến thức:** nghiệm là giá trị làm hai vế bằng nhau.

**Gợi ý các bước:**
1. Thay lần lượt từng số vào hai vế.
2. So sánh hai vế.

::solution
Với $x=-2$: vế trái $3\cdot(-2)+7=1$, vế phải $-2+3=1$, bằng nhau. Với $x=0$: $7\neq3$. Với $x=2$: $13\neq5$.

Vậy chỉ có $x=-2$ là nghiệm.

**Đáp số.** $-2$.
:::

:::exercise Thử thách
Giải phương trình $\dfrac{x-1}{2}-\dfrac{x+1}{3}=\dfrac{x-5}{6}$ và nhận xét.

::hint
**Kiến thức:** khử mẫu rồi thu gọn.

**Gợi ý các bước:**
1. Nhân hai vế với $6$.
2. Thu gọn và xem kết quả có dạng $0x=c$ nào.

::solution
Nhân hai vế với $6$: $3(x-1)-2(x+1)=x-5$. Bỏ ngoặc: $3x-3-2x-2=x-5$, tức $x-5=x-5$. Đẳng thức này đúng với mọi $x$.

Kiểm tra với $x=0$: vế trái $-\dfrac12-\dfrac13=-\dfrac56$, vế phải $-\dfrac56$.

Vậy phương trình có vô số nghiệm: mọi số thực đều là nghiệm.

**Đáp số.** Vô số nghiệm.
:::

## Kiểm tra mini

:::quiz
::mc
Phương trình nào sau đây là phương trình bậc nhất một ẩn?
A. $x^2-4=0$.
B. $0x+5=0$.
C. $2x-3=0$.
D. $\dfrac1x=2$.
::key C
$2x-3=0$ có dạng $ax+b=0$ với $a=2\neq0$. A có ẩn bậc hai, B có $a=0$, D có ẩn ở mẫu.

::mc
Nghiệm của phương trình $3x-9=0$ là
A. $-3$.
B. $9$.
C. $\dfrac13$.
D. $3$.
::key D
$3x=9$ nên $x=3$. A sai dấu, B quên chia cho $3$, C lấy $\dfrac{1}{3}$ thay vì $\dfrac{9}{3}$.

::mc
Nghiệm của phương trình $5x-2=3x+6$ là
A. $4$.
B. $2$.
C. $8$.
D. $-4$.
::key A
$5x-3x=6+2$ nên $2x=8$ và $x=4$. B quên chia cho $2$, C quên chia, D sai dấu.

::mc
Nghiệm của phương trình $\dfrac{x+1}{2}=\dfrac{x-1}{3}$ là
A. $5$.
B. $-5$.
C. $\dfrac15$.
D. $-\dfrac15$.
::key B
Nhân hai vế với $6$: $3(x+1)=2(x-1)$, tức $3x+3=2x-2$, suy ra $x=-5$. A sai dấu, C và D chia nhầm.

::tf
Cho phương trình $2(x+1)=2x+5$. Xét tính đúng sai của các mệnh đề sau:
a) Sau khi bỏ ngoặc ta được $2x+2=2x+5$.
b) Phương trình có đúng một nghiệm.
c) Phương trình vô nghiệm.
d) Phương trình $3(x-1)=3x-3$ có vô số nghiệm.
::key Đ S Đ Đ
a) Đúng. b) Sai: thu gọn được $0x=3$ nên không có nghiệm nào. c) Đúng: $0x=3$ không có nghiệm. d) Đúng: thu gọn được $0x=0$, đúng với mọi $x$.

::sa
Nghiệm của phương trình $4x-1=1$ là bao nhiêu?
::key 0,5
$4x=2$ nên $x=0{,}5$.

::sa
Cước taxi: mở cửa $12\,000$ đồng và $14\,000$ đồng mỗi ki-lô-mét. Hành khách trả $96\,000$ đồng thì đã đi bao nhiêu ki-lô-mét?
::key 6
$14\,000x+12\,000=96\,000$ nên $x=6$.
:::
