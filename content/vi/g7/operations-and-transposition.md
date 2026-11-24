---
title: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế
description: Nắm thứ tự thực hiện các phép tính và quy tắc dấu ngoặc với số hữu tỉ, rồi dùng quy tắc chuyển vế để tìm số chưa biết, kèm bài toán thực tế.
minutes: 30
---

:::goals
- Thực hiện đúng thứ tự các phép tính trong biểu thức có luỹ thừa, nhân, chia, cộng, trừ và dấu ngoặc.
- Dùng quy tắc dấu ngoặc để bỏ ngoặc và tính hợp lí.
- Dùng quy tắc chuyển vế để tìm số hữu tỉ chưa biết.
- Giải bài toán thực tế bằng cách lập phép tính hoặc tìm số chưa biết.
:::

Hà và Hùng cùng tính biểu thức $\dfrac12+\dfrac13\cdot\dfrac32$. Hà cộng trước: $\dfrac56\cdot\dfrac32=\dfrac54$. Hùng nhân trước: $\dfrac12+\dfrac12=1$. Hai kết quả khác nhau, nhưng một biểu thức thì chỉ có một giá trị.

Ai đúng, và vì sao? Muốn mọi người cùng đọc một biểu thức ra cùng một kết quả, toán học có quy ước về thứ tự các phép tính. Sau đó ta học thêm một công cụ rất tiện để tìm số chưa biết: quy tắc chuyển vế.

## Thứ tự thực hiện các phép tính

Khi tính giá trị biểu thức, ta làm theo thứ tự sau:

:::theorem Thứ tự thực hiện các phép tính
- Biểu thức không có dấu ngoặc: luỹ thừa, rồi nhân và chia (từ trái sang phải), rồi cộng và trừ (từ trái sang phải).
- Biểu thức có dấu ngoặc: thực hiện trong ngoặc tròn $(\ )$ trước, rồi đến ngoặc vuông $[\ ]$, rồi đến ngoặc nhọn $\{\ \}$.
:::

Theo quy ước ấy, Hùng đúng: phép nhân phải làm trước phép cộng, nên $\dfrac12+\dfrac13\cdot\dfrac32=\dfrac12+\dfrac12=1$. Hà chỉ đúng nếu biểu thức có ngoặc $\left(\dfrac12+\dfrac13\right)\cdot\dfrac32$.

:::example Biểu thức không có dấu ngoặc
Tính:

a) $\dfrac12+\dfrac13\cdot\dfrac32$.

b) $\dfrac23-\left(-\dfrac12\right)^2\cdot4$.

c) $\left(-\dfrac23\right)^2:\dfrac49+\dfrac12$.

**Lời giải.** Ta làm luỹ thừa trước, rồi nhân chia, cuối cùng mới cộng trừ.

a) Làm phép nhân trước: $\dfrac13\cdot\dfrac32=\dfrac12$. Sau đó $\dfrac12+\dfrac12=1$.

b) Luỹ thừa trước: $\left(-\dfrac12\right)^2=\dfrac14$. Nhân: $\dfrac14\cdot4=1$. Trừ: $\dfrac23-1=-\dfrac13$.

c) Luỹ thừa trước: $\left(-\dfrac23\right)^2=\dfrac49$. Chia: $\dfrac49:\dfrac49=1$. Cộng: $1+\dfrac12=\dfrac32$.

Vậy a) $1$; b) $-\dfrac13$; c) $\dfrac32$.

**Đáp số.** a) $1$; b) $-\dfrac13$; c) $\dfrac32$.
:::

:::example Biểu thức có dấu ngoặc
Tính:

a) $\left(\dfrac12+\dfrac13\right)\cdot\dfrac32$.

b) $\left[\dfrac34-\left(\dfrac12-\dfrac13\right)\right]:\dfrac12$.

c) $\dfrac25\cdot\left[\dfrac12-\left(-\dfrac34\right)\right]$.

**Lời giải.** Ta tính trong ngoặc trong cùng trước, rồi ra ngoặc ngoài.

a) Trong ngoặc: $\dfrac12+\dfrac13=\dfrac56$. Sau đó $\dfrac56\cdot\dfrac32=\dfrac{15}{12}=\dfrac54$. Đây đúng là kết quả của Hà khi biểu thức có ngoặc.

b) Ngoặc tròn: $\dfrac12-\dfrac13=\dfrac16$. Ngoặc vuông: $\dfrac34-\dfrac16=\dfrac9{12}-\dfrac2{12}=\dfrac7{12}$. Chia: $\dfrac7{12}:\dfrac12=\dfrac7{12}\cdot2=\dfrac76$.

c) Trong ngoặc: $\dfrac12-\left(-\dfrac34\right)=\dfrac12+\dfrac34=\dfrac54$. Nhân: $\dfrac25\cdot\dfrac54=\dfrac12$.

Vậy a) $\dfrac54$; b) $\dfrac76$; c) $\dfrac12$.

**Đáp số.** a) $\dfrac54$; b) $\dfrac76$; c) $\dfrac12$.
:::

## Quy tắc dấu ngoặc

:::theorem Quy tắc dấu ngoặc
Khi bỏ dấu ngoặc:
- Có dấu $+$ đằng trước: giữ nguyên dấu các số hạng trong ngoặc, $a+(b-c)=a+b-c$.
- Có dấu $-$ đằng trước: đổi dấu tất cả các số hạng trong ngoặc, $a-(b-c)=a-b+c$.
:::

**Vì sao?** Trừ đi một số là cộng với số đối của nó, mà số đối của tổng $(b-c)$ là $-b+c$. Chẳng hạn $5-(3-1)=5-2=3$ và $5-3+1=3$: hai cách cho cùng kết quả. Đây là chỗ hay sai nhất, nên bạn hãy đổi dấu thật cẩn thận.

:::example Bỏ dấu ngoặc để tính hợp lí
Tính một cách hợp lí:

a) $A=\left(\dfrac37+\dfrac25\right)-\left(\dfrac37-\dfrac35\right)$.

b) $B=-\left(\dfrac56-\dfrac12\right)+\left(\dfrac12-\dfrac16\right)$.

**Lời giải.** a) Bỏ ngoặc, nhớ đổi dấu trong ngoặc thứ hai vì có dấu $-$ đằng trước:
$$A=\dfrac37+\dfrac25-\dfrac37+\dfrac35=\left(\dfrac37-\dfrac37\right)+\left(\dfrac25+\dfrac35\right)=0+1=1.$$

b) Bỏ ngoặc thứ nhất bằng cách đổi dấu, ngoặc thứ hai giữ nguyên dấu:
$$B=-\dfrac56+\dfrac12+\dfrac12-\dfrac16=\left(-\dfrac56-\dfrac16\right)+\left(\dfrac12+\dfrac12\right)=-1+1=0.$$

Vậy $A=1$ và $B=0$.

**Đáp số.** $A=1$; $B=0$.
:::

## Quy tắc chuyển vế

Ta nhắc lại tính chất của đẳng thức: nếu $a=b$ thì $a+c=b+c$ và $a-c=b-c$. Hai vế của một đẳng thức còn bằng nhau khi cùng cộng hoặc cùng trừ một số.

Giả sử $x+\dfrac34=\dfrac16$. Cùng trừ $\dfrac34$ vào hai vế, ta được $x=\dfrac16-\dfrac34$. Số hạng $\dfrac34$ đã "chuyển" sang vế phải và đổi dấu từ $+$ thành $-$.

:::theorem Quy tắc chuyển vế
Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó:
$$a+b=c\ \Rightarrow\ a=c-b,\qquad a-b=c\ \Rightarrow\ a=c+b.$$
:::

:::example Tìm số chưa biết bằng quy tắc chuyển vế
Tìm $x$, biết:

a) $x+\dfrac34=\dfrac16$.

b) $x-\dfrac25=-\dfrac3{10}$.

c) $\dfrac56-x=\dfrac13$.

**Lời giải.** Ta chuyển các số hạng đã biết sang một vế và đổi dấu chúng.

a) Chuyển $\dfrac34$ sang vế phải: $x=\dfrac16-\dfrac34=\dfrac2{12}-\dfrac9{12}=-\dfrac7{12}$.

b) Chuyển $-\dfrac25$ sang vế phải thành $+\dfrac25$: $x=-\dfrac3{10}+\dfrac25=-\dfrac3{10}+\dfrac4{10}=\dfrac1{10}$.

c) Chuyển $\dfrac56$ sang vế phải: $-x=\dfrac13-\dfrac56=\dfrac2{6}-\dfrac56=-\dfrac12$. Vậy $x=\dfrac12$ (đổi dấu hai vế).

Vậy a) $x=-\dfrac7{12}$; b) $x=\dfrac1{10}$; c) $x=\dfrac12$.

**Đáp số.** a) $-\dfrac7{12}$; b) $\dfrac1{10}$; c) $\dfrac12$.
:::

:::graph Các nghiệm $-\dfrac7{12}$ (điểm a), $\dfrac1{10}$ (điểm b) và $\dfrac12$ (điểm c)
alt: Trục số từ -1 đến 1; điểm a ở vị trí -7/12, điểm b ở vị trí 1/10 gần 0, điểm c ở vị trí 1/2
x: -1.2..1.2
y: -1..1
segment: (-1.2, 0) (1.2, 0)
point: (-1, 0) "-1" below
point: (0, 0) "0" below
point: (1, 0) "1" below
point: (-0.5833, 0) "a" above
point: (0.1, 0) "b" above
point: (0.5, 0) "c" above
:::

:::example Chuyển vế rồi chia
Tìm $x$, biết:

a) $\dfrac23\cdot x-\dfrac12=\dfrac14$.

b) $\dfrac35-\left(x+\dfrac15\right)=\dfrac12$.

**Lời giải.** a) Chuyển $-\dfrac12$ sang vế phải: $\dfrac23\cdot x=\dfrac14+\dfrac12=\dfrac34$. Đây là một tích có thừa số chưa biết, nên $x=\dfrac34:\dfrac23=\dfrac34\cdot\dfrac32=\dfrac98$.

b) Bỏ ngoặc có dấu $-$ đằng trước, đổi dấu: $\dfrac35-x-\dfrac15=\dfrac12$, tức là $\dfrac25-x=\dfrac12$. Chuyển $\dfrac25$ sang vế phải: $-x=\dfrac12-\dfrac25=\dfrac1{10}$. Do đó $x=-\dfrac1{10}$.

Vậy a) $x=\dfrac98$; b) $x=-\dfrac1{10}$.

**Đáp số.** a) $\dfrac98$; b) $-\dfrac1{10}$.
:::

:::example Quãng đường của người đi xe đạp
Một người đi xe đạp từ A đến B trong ba ngày (số liệu giả định). Ngày thứ nhất đi $\dfrac25$ quãng đường, ngày thứ hai đi $\dfrac14$ quãng đường, ngày thứ ba đi nốt $14$ km. Tính quãng đường AB.

**Lời giải.**

*Hiểu đề.* Gọi $x$ (km) là quãng đường AB. Hai ngày đầu đi $\dfrac25x$ và $\dfrac14x$, ngày thứ ba đi $14$ km, và ba phần cộng lại là cả quãng đường $x$.

*Tìm cách giải.* Lập đẳng thức $x-\dfrac25x-\dfrac14x=14$ rồi gộp các số hạng chứa $x$.

*Giải.* Ta có $\left(1-\dfrac25-\dfrac14\right)x=14$. Vì $1-\dfrac25-\dfrac14=\dfrac{20-8-5}{20}=\dfrac7{20}$ nên $\dfrac7{20}x=14$. Suy ra $x=14:\dfrac7{20}=14\cdot\dfrac{20}7=40$.

*Nhìn lại.* Kiểm tra: ngày một đi $\dfrac25\cdot40=16$ km, ngày hai đi $\dfrac14\cdot40=10$ km, ngày ba đi $14$ km, và $16+10+14=40$ km. Kết quả khớp.

Vậy quãng đường AB dài $40$ km.

**Đáp số.** $40$ km.
:::

:::warning Những sai lầm thường gặp
- **Cộng trước, nhân sau.** Sai: $\dfrac12+\dfrac13\cdot\dfrac32=\dfrac56\cdot\dfrac32$. Lí do sai: phép nhân phải làm trước phép cộng khi không có ngoặc. Đúng: $\dfrac12+\dfrac12=1$.
- **Bỏ ngoặc có dấu trừ mà không đổi dấu.** Sai: $\dfrac34-\left(\dfrac12-\dfrac13\right)=\dfrac34-\dfrac12-\dfrac13$. Lí do sai: trừ cả ngoặc là trừ $\dfrac12$ nhưng cộng $\dfrac13$. Đúng: $\dfrac34-\dfrac12+\dfrac13$.
- **Chuyển vế mà không đổi dấu.** Sai: $x+\dfrac34=\dfrac16\Rightarrow x=\dfrac16+\dfrac34$. Lí do sai: phải trừ $\dfrac34$ ở cả hai vế. Đúng: $x=\dfrac16-\dfrac34$.
:::

**Kết nối.** Bài này dùng cả bốn phép tính và luỹ thừa của hai bài trước. Quy tắc chuyển vế sẽ trở thành công cụ chính khi bạn học giải phương trình ở các bài sau.

## Thuật ngữ

:::terms
- thứ tự thực hiện các phép tính | order of operations
- biểu thức | expression
- dấu ngoặc tròn, ngoặc vuông, ngoặc nhọn | round brackets, square brackets, braces
- quy tắc dấu ngoặc | rule for removing brackets
- quy tắc chuyển vế | rule for moving terms across the equals sign
- vế trái, vế phải | left-hand side, right-hand side
- đẳng thức | equality
- số hạng | term
:::

## Tóm tắt

- Không ngoặc: luỹ thừa, rồi nhân và chia, rồi cộng và trừ. Có ngoặc: trong ngoặc tròn, rồi ngoặc vuông, rồi ngoặc nhọn.
- Bỏ ngoặc có dấu $+$ đằng trước: giữ dấu; có dấu $-$ đằng trước: đổi dấu mọi số hạng trong ngoặc.
- Chuyển một số hạng sang vế kia thì đổi dấu: $a+b=c\Rightarrow a=c-b$.
- Tích có thừa số chưa biết: chia hai vế cho thừa số đã biết.

Câu hỏi ở đầu bài đã có lời đáp: Hùng đúng, biểu thức có giá trị $1$. Mỗi khi tính một biểu thức dài, bạn hãy gạch chân phép tính nào làm trước, rồi mới viết dòng tiếp theo.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính:

a) $\dfrac34-\dfrac12\cdot\dfrac23$.

b) $\dfrac12:\left(-\dfrac14\right)+3$.

c) $\left(-\dfrac12\right)^3+\dfrac34\cdot\dfrac13$.

d) $\dfrac56-\left(\dfrac12\right)^2:\dfrac32$.

::hint
**Kiến thức:** luỹ thừa trước, rồi nhân và chia, rồi cộng và trừ.

**Gợi ý các bước:**
1. Gạch chân phép tính làm trước trong từng câu.
2. d) Tính $\left(\dfrac12\right)^2=\dfrac14$ rồi chia cho $\dfrac32$ trước khi trừ.

::solution
a) Nhân trước: $\dfrac12\cdot\dfrac23=\dfrac13$. Trừ: $\dfrac34-\dfrac13=\dfrac9{12}-\dfrac4{12}=\dfrac5{12}$.

b) Chia trước: $\dfrac12:\left(-\dfrac14\right)=\dfrac12\cdot(-4)=-2$. Cộng: $-2+3=1$.

c) Luỹ thừa: $\left(-\dfrac12\right)^3=-\dfrac18$. Nhân: $\dfrac34\cdot\dfrac13=\dfrac14$. Cộng: $-\dfrac18+\dfrac28=\dfrac18$.

d) Luỹ thừa: $\left(\dfrac12\right)^2=\dfrac14$. Chia: $\dfrac14:\dfrac32=\dfrac14\cdot\dfrac23=\dfrac16$. Trừ: $\dfrac56-\dfrac16=\dfrac46=\dfrac23$.

Vậy kết quả lần lượt là $\dfrac5{12}$; $1$; $\dfrac18$; $\dfrac23$.

**Đáp số.** a) $\dfrac5{12}$; b) $1$; c) $\dfrac18$; d) $\dfrac23$.
:::

:::exercise
Tính:

a) $\left(\dfrac23-\dfrac12\right)\cdot6$.

b) $\left[\dfrac12+\left(-\dfrac34\right)\right]:\dfrac18$.

c) $\dfrac35-\left[\dfrac23-\left(\dfrac13-\dfrac12\right)\right]$.

d) $\left(-\dfrac23\right)^2\cdot\left(\dfrac94-\dfrac32\right)$.

::hint
**Kiến thức:** tính trong ngoặc trong cùng trước, rồi ra ngoặc ngoài.

**Gợi ý các bước:**
1. c) Tính $\dfrac13-\dfrac12$ trước, chú ý dấu trừ đứng trước ngoặc tròn.
2. d) Tính ngoặc $\dfrac94-\dfrac32$ và luỹ thừa riêng rồi nhân.

::solution
a) Trong ngoặc: $\dfrac23-\dfrac12=\dfrac16$. Nhân: $\dfrac16\cdot6=1$.

b) Trong ngoặc: $\dfrac12-\dfrac34=-\dfrac14$. Chia: $-\dfrac14:\dfrac18=-\dfrac14\cdot8=-2$.

c) Ngoặc tròn: $\dfrac13-\dfrac12=-\dfrac16$. Ngoặc vuông: $\dfrac23-\left(-\dfrac16\right)=\dfrac46+\dfrac16=\dfrac56$. Trừ: $\dfrac35-\dfrac56=\dfrac{18}{30}-\dfrac{25}{30}=-\dfrac7{30}$.

d) Luỹ thừa: $\left(-\dfrac23\right)^2=\dfrac49$. Ngoặc: $\dfrac94-\dfrac64=\dfrac34$. Nhân: $\dfrac49\cdot\dfrac34=\dfrac13$.

Vậy kết quả lần lượt là $1$; $-2$; $-\dfrac7{30}$; $\dfrac13$.

**Đáp số.** a) $1$; b) $-2$; c) $-\dfrac7{30}$; d) $\dfrac13$.
:::

:::exercise
Bỏ dấu ngoặc rồi tính hợp lí:

a) $\left(\dfrac79-\dfrac25\right)-\left(\dfrac79+\dfrac35\right)$.

b) $-\left(\dfrac58-\dfrac23\right)-\left(\dfrac38+\dfrac13\right)$.

::hint
**Kiến thức:** bỏ ngoặc có dấu $-$ đằng trước thì đổi dấu mọi số hạng trong ngoặc.

**Gợi ý các bước:**
1. Bỏ ngoặc, đổi dấu đúng chỗ.
2. Nhóm các số hạng cùng mẫu: $\dfrac79$ với $\dfrac79$, $\dfrac58$ với $\dfrac38$, $\dfrac23$ với $\dfrac13$.

::solution
Bỏ dấu ngoặc: khi bỏ dấu ngoặc có dấu "$-$" đằng trước thì phải đổi dấu mọi số hạng trong ngoặc; dấu ngoặc có dấu "$+$" đằng trước thì giữ nguyên.

a) Bỏ dấu ngoặc, ta được
$$\left(\dfrac79-\dfrac25\right)-\left(\dfrac79+\dfrac35\right)=\dfrac79-\dfrac25-\dfrac79-\dfrac35.$$

Nhóm các số hạng có cùng mẫu số:
$$\begin{aligned}
&=\left(\dfrac79-\dfrac79\right)-\left(\dfrac25+\dfrac35\right)\\
&=0-1\\
&=-1.
\end{aligned}$$

b) Bỏ dấu ngoặc, ta được
$$-\left(\dfrac58-\dfrac23\right)-\left(\dfrac38+\dfrac13\right)=-\dfrac58+\dfrac23-\dfrac38-\dfrac13.$$

Nhóm các số hạng có cùng mẫu số:
$$\begin{aligned}
&=\left(-\dfrac58-\dfrac38\right)+\left(\dfrac23-\dfrac13\right)\\
&=-1+\dfrac13\\
&=-\dfrac23.
\end{aligned}$$

Vậy kết quả của a) là $-1$ và của b) là $-\dfrac23$.

**Đáp số.** a) $-1$; b) $-\dfrac23$.
:::

:::exercise
Tìm $x$ bằng quy tắc chuyển vế:

a) $x-\dfrac13=\dfrac25$.

b) $x+\dfrac56=-\dfrac12$.

c) $\dfrac34-x=\dfrac18$.

d) $-x+\dfrac12=-\dfrac23$.

::hint
**Kiến thức:** chuyển một số hạng sang vế kia thì đổi dấu.

**Gợi ý các bước:**
1. a), b) Chuyển số hạng đã biết ở vế trái sang vế phải.
2. c), d) Tìm $-x$ trước, rồi đổi dấu hai vế.

::solution
Quy tắc chuyển vế: khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó.

a) Chuyển $-\dfrac13$ sang vế phải thành $+\dfrac13$:
$$x=\frac25+\frac13=\frac{6}{15}+\frac{5}{15}=\frac{11}{15}.$$

b) Chuyển $+\dfrac56$ sang vế phải thành $-\dfrac56$:
$$x=-\frac12-\frac56=-\frac36-\frac56=-\frac86=-\frac43.$$

c) Chuyển $-x$ sang vế phải thành $+x$ và chuyển $\dfrac18$ sang vế trái thành $-\dfrac18$, ta được $x=\dfrac34-\dfrac18$, tức là
$$x=\frac34-\frac18=\frac68-\frac18=\frac58.$$

d) Chuyển $\dfrac12$ sang vế phải thành $-\dfrac12$:
$$-x=-\frac23-\frac12=-\frac46-\frac36=-\frac76.$$

Suy ra $x=\dfrac76$.

Vậy a) $\dfrac{11}{15}$; b) $-\dfrac43$; c) $\dfrac58$; d) $\dfrac76$.

**Đáp số.** a) $\dfrac{11}{15}$; b) $-\dfrac43$; c) $\dfrac58$; d) $\dfrac76$.
:::

:::exercise
Tìm $x$, biết:

a) $\dfrac35\cdot x=-\dfrac9{10}$.

b) $x:\dfrac23-\dfrac12=\dfrac14$.

c) $\dfrac12-\left(x-\dfrac13\right)=\dfrac16$.

::hint
**Kiến thức:** thừa số chưa biết bằng tích chia cho thừa số đã biết; số bị chia bằng thương nhân số chia.

**Gợi ý các bước:**
1. b) Chuyển $-\dfrac12$ sang vế phải để được $x:\dfrac23=\dfrac34$.
2. c) Bỏ ngoặc, đổi dấu, gộp số hạng rồi chuyển vế.

::solution
a) $x=-\dfrac9{10}:\dfrac35=-\dfrac9{10}\cdot\dfrac53=-\dfrac{45}{30}=-\dfrac32$.

b) Chuyển vế: $x:\dfrac23=\dfrac14+\dfrac12=\dfrac34$. Suy ra $x=\dfrac34\cdot\dfrac23=\dfrac12$.

c) Bỏ ngoặc: $\dfrac12-x+\dfrac13=\dfrac16$, tức là $\dfrac56-x=\dfrac16$. Chuyển vế: $-x=\dfrac16-\dfrac56=-\dfrac46$, nên $x=\dfrac23$.

Vậy a) $x=-\dfrac32$; b) $x=\dfrac12$; c) $x=\dfrac23$.

**Đáp số.** a) $-\dfrac32$; b) $\dfrac12$; c) $\dfrac23$.
:::

:::exercise
Giả sử bạn Hà đọc một quyển sách trong ba ngày. Ngày thứ nhất đọc $\dfrac13$ số trang, ngày thứ hai đọc $\dfrac14$ số trang, ngày thứ ba đọc nốt $15$ trang. Hỏi quyển sách có bao nhiêu trang?

::hint
**Kiến thức:** ba phần đã đọc cộng lại bằng cả quyển sách.

**Gợi ý các bước:**
1. Gọi $x$ là số trang, lập $x-\dfrac13x-\dfrac14x=15$.
2. Tính $1-\dfrac13-\dfrac14$ rồi tìm $x$.

::solution
Gọi $x$ là số trang của quyển sách. Ta có $x-\dfrac13x-\dfrac14x=15$, tức là $\left(1-\dfrac13-\dfrac14\right)x=15$.

Vì $1-\dfrac13-\dfrac14=\dfrac{12-4-3}{12}=\dfrac5{12}$ nên $\dfrac5{12}x=15$, suy ra $x=15:\dfrac5{12}=15\cdot\dfrac{12}5=36$.

Kiểm tra: $\dfrac13\cdot36=12$ trang, $\dfrac14\cdot36=9$ trang, và $12+9+15=36$.

Vậy quyển sách có $36$ trang.

**Đáp số.** $36$ trang.
:::

:::exercise
Giả sử nhiệt độ buổi sáng là $-\dfrac32\,^\circ\mathrm{C}$ và mỗi giờ sau đó tăng $\dfrac34\,^\circ\mathrm{C}$. Hỏi sau bao nhiêu giờ thì nhiệt độ đạt $3\,^\circ\mathrm{C}$?

::hint
**Kiến thức:** nhiệt độ sau $t$ giờ bằng nhiệt độ ban đầu cộng $t$ lần mức tăng mỗi giờ.

**Gợi ý các bước:**
1. Lập đẳng thức $-\dfrac32+\dfrac34\cdot t=3$.
2. Chuyển $-\dfrac32$ sang vế phải rồi chia cho $\dfrac34$.

::solution
Sau $t$ giờ, nhiệt độ là $-\dfrac32+\dfrac34\cdot t$. Ta cần $-\dfrac32+\dfrac34\cdot t=3$.

Chuyển vế: $\dfrac34\cdot t=3+\dfrac32=\dfrac92$. Suy ra $t=\dfrac92:\dfrac34=\dfrac92\cdot\dfrac43=6$.

Kiểm tra: $-\dfrac32+\dfrac34\cdot6=-\dfrac32+\dfrac92=3$.

Vậy sau $6$ giờ nhiệt độ đạt $3\,^\circ\mathrm{C}$.

**Đáp số.** $6$ giờ.
:::

:::exercise
Bạn Hà giải bài "Tìm $x$ biết $x-\dfrac34=\dfrac12$" như sau: $x=\dfrac12-\dfrac34=-\dfrac14$. Hà sai ở đâu? Hãy giải lại cho đúng và thử lại.

::hint
**Kiến thức:** khi chuyển một số hạng sang vế kia thì đổi dấu số hạng đó.

**Gợi ý các bước:**
1. Xét dấu của $\dfrac34$ ở vế trái, rồi xem Hà đã đổi dấu chưa.
2. Thay kết quả mới vào đề để kiểm tra.

::solution
Ở vế trái, $\dfrac34$ đang mang dấu $-$. Chuyển sang vế phải phải đổi thành $+$, nhưng Hà vẫn giữ dấu $-$. Đó là chỗ sai.

Giải lại: $x=\dfrac12+\dfrac34=\dfrac24+\dfrac34=\dfrac54$.

Thử lại: $\dfrac54-\dfrac34=\dfrac24=\dfrac12$, đúng với vế phải.

Vậy $x=\dfrac54$.

**Đáp số.** $x=\dfrac54$.
:::

:::exercise Thử thách
Tính $M=\dfrac12-\dfrac16-\dfrac1{12}-\dfrac1{20}-\dfrac1{30}-\dfrac1{42}$.

::hint
**Kiến thức:** $\dfrac1{n(n+1)}=\dfrac1n-\dfrac1{n+1}$; các mẫu $6,12,20,30,42$ là $2\cdot3$, $3\cdot4$, $4\cdot5$, $5\cdot6$, $6\cdot7$.

**Gợi ý các bước:**
1. Viết $\dfrac16+\dfrac1{12}+\dfrac1{20}+\dfrac1{30}+\dfrac1{42}$ thành tổng các hiệu hai phân số.
2. Các số hạng ở giữa triệt tiêu, rồi dùng quy tắc dấu ngoặc để trừ cả nhóm.

::solution
Ta có $M=\dfrac12-\left(\dfrac16+\dfrac1{12}+\dfrac1{20}+\dfrac1{30}+\dfrac1{42}\right)$.

Vì $\dfrac1{n(n+1)}=\dfrac1n-\dfrac1{n+1}$ nên tổng trong ngoặc bằng
$$\left(\dfrac12-\dfrac13\right)+\left(\dfrac13-\dfrac14\right)+\left(\dfrac14-\dfrac15\right)+\left(\dfrac15-\dfrac16\right)+\left(\dfrac16-\dfrac17\right)=\dfrac12-\dfrac17=\dfrac5{14}.$$

Do đó $M=\dfrac12-\dfrac5{14}=\dfrac7{14}-\dfrac5{14}=\dfrac2{14}=\dfrac17$.

Vậy $M=\dfrac17$.

**Đáp số.** $\dfrac17$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Giá trị của biểu thức $\dfrac12+\dfrac13\cdot\dfrac32$ là
A. $1$.
B. $\dfrac54$.
C. $\dfrac14$.
D. $\dfrac76$.
::key A
Nhân trước: $\dfrac13\cdot\dfrac32=\dfrac12$, rồi $\dfrac12+\dfrac12=1$. B là kết quả khi cộng trước, C và D là các phép tính sai khác.

::mc TH
Giá trị của $\dfrac34-\left(\dfrac12-\dfrac13\right)$ là
A. $-\dfrac1{12}$.
B. $\dfrac7{12}$.
C. $\dfrac{11}{12}$.
D. $\dfrac1{12}$.
::key B
Ngoặc: $\dfrac12-\dfrac13=\dfrac16$, nên $\dfrac34-\dfrac16=\dfrac7{12}$. A bỏ ngoặc mà không đổi dấu, C cộng thay vì trừ.

::mc TH
Số $x$ thoả mãn $x+\dfrac34=\dfrac16$ là
A. $\dfrac{11}{12}$.
B. $\dfrac7{12}$.
C. $-\dfrac7{12}$.
D. $-\dfrac{11}{12}$.
::key C
Chuyển vế: $x=\dfrac16-\dfrac34=\dfrac2{12}-\dfrac9{12}=-\dfrac7{12}$. A quên đổi dấu khi chuyển vế.

::mc TH
Số $x$ thoả mãn $\dfrac56-x=\dfrac13$ là
A. $-\dfrac12$.
B. $\dfrac76$.
C. $-\dfrac76$.
D. $\dfrac12$.
::key D
Chuyển vế: $-x=\dfrac13-\dfrac56=-\dfrac12$ nên $x=\dfrac12$. B cộng $\dfrac56$ với $\dfrac13$, A quên đổi dấu hai vế cuối cùng.

::tf NB TH TH TH
Xét các biến đổi sau. Xét tính đúng sai của các mệnh đề:
a) $x-\dfrac12=3\Rightarrow x=3+\dfrac12$.
b) $x+\dfrac34=\dfrac16\Rightarrow x=\dfrac16+\dfrac34$.
c) $-x=\dfrac35\Rightarrow x=\dfrac35$.
d) $\dfrac34-\left(\dfrac12-\dfrac14\right)=\dfrac34-\dfrac12+\dfrac14$.
::key Đ S S Đ
a) Đúng: chuyển $-\dfrac12$ sang vế phải thành $+\dfrac12$. b) Sai: phải là $\dfrac16-\dfrac34$. c) Sai: đổi dấu hai vế thì $x=-\dfrac35$. d) Đúng: bỏ ngoặc có dấu $-$ đằng trước, đổi dấu mọi số hạng trong ngoặc.

::sa VD
Tìm $x$ biết $x:\dfrac34+\dfrac12=\dfrac52$, và viết kết quả dưới dạng số thập phân.
::key 1,5
Chuyển vế: $x:\dfrac34=2$, nên $x=2\cdot\dfrac34=\dfrac32=1{,}5$.

::sa VD
Tính $\left(\dfrac23-\dfrac12\right)\cdot12-\dfrac32$ và viết kết quả dưới dạng số thập phân.
::key 0,5
Ngoặc: $\dfrac23-\dfrac12=\dfrac16$. Nhân: $\dfrac16\cdot12=2$. Trừ: $2-\dfrac32=\dfrac12=0{,}5$.
:::
