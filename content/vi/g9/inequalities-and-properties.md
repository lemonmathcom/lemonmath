---
title: Bất đẳng thức và tính chất
description: Hiểu bất đẳng thức, tính chất bắc cầu, liên hệ giữa thứ tự với phép cộng và phép nhân, và dùng chúng để so sánh, chứng minh bất đẳng thức đơn giản.
minutes: 20
---

:::goals
- Đọc, viết bất đẳng thức với các dấu $<$, $>$, $\le$, $\ge$.
- Dùng tính chất bắc cầu và liên hệ giữa thứ tự với phép cộng, phép nhân để so sánh hai biểu thức.
- Chứng minh một số bất đẳng thức đơn giản.
:::

Bạn An cao hơn bạn Bình. Một năm sau, cả hai đều cao thêm $5$ cm. An có còn cao hơn Bình không? Chắc chắn có. Nhưng nếu biết $a>b$ thì $-2a$ và $-2b$, số nào lớn hơn? Câu trả lời làm nhiều bạn bất ngờ.

Bài này giúp ta trả lời những câu hỏi như vậy một cách chắc chắn, không cần đoán.

## Bất đẳng thức

Ta gọi hệ thức dạng $a<b$ (hay $a>b$, $a\le b$, $a\ge b$) là một **bất đẳng thức**; $a$ là **vế trái**, $b$ là **vế phải**.

- $a\le b$ đọc là "$a$ nhỏ hơn hoặc bằng $b$", hay "$a$ không lớn hơn $b$".
- $a\ge b$ đọc là "$a$ lớn hơn hoặc bằng $b$", hay "$a$ không nhỏ hơn $b$".

:::example Viết bằng kí hiệu
Viết các khẳng định sau bằng bất đẳng thức: a) số $x$ không âm; b) tốc độ $v$ (km/h) không vượt quá $60$; c) tuổi $t$ của người lái ô tô ít nhất là $18$.

**Lời giải.** "Không âm" là $\ge0$, "không vượt quá" là $\le$, "ít nhất" là $\ge$:

$$\text{a) } x\ge0;\qquad \text{b) } v\le60;\qquad \text{c) } t\ge18.$$

Vậy ba khẳng định được viết là $x\ge0$, $v\le60$ và $t\ge18$.
:::

:::theorem Tính chất bắc cầu
Nếu $a<b$ và $b<c$ thì $a<c$. (Tương tự với $>$, $\le$, $\ge$.)
:::

Trên trục số, $a<b$ nghĩa là điểm $a$ nằm bên trái điểm $b$. Nếu $a$ ở bên trái $b$ và $b$ ở bên trái $c$ thì $a$ ở bên trái $c$.

## Liên hệ giữa thứ tự và phép cộng

### Khám phá: dịch chuyển trên trục số

Ta có $2<3$. Cộng $4$ vào hai vế: $6<7$. Cộng $-5$: $-3<-2$. Cộng một số vào hai vế giống như dịch cả hai điểm đi cùng một đoạn trên trục số, nên thứ tự không đổi.

:::theorem Liên hệ giữa thứ tự và phép cộng
Với mọi số $a$, $b$, $c$: nếu $a<b$ thì $a+c<b+c$.
:::

Tính chất cũng đúng với $>$, $\le$, $\ge$, và với phép trừ (vì trừ $c$ là cộng $-c$).

:::example Cộng cùng một số vào hai vế
Cho $a>b$. So sánh: a) $a+3$ và $b+3$; b) $a-7$ và $b-7$. Từ đó so sánh $2025+(-7)$ và $2024+(-7)$.

**Lời giải.** Cộng cùng một số vào hai vế thì giữ nguyên chiều:

$$a>b\Rightarrow a+3>b+3;\qquad a>b\Rightarrow a-7>b-7.$$

Vì $2025>2024$ nên $2025+(-7)>2024+(-7)$, không cần tính.
:::

## Liên hệ giữa thứ tự và phép nhân

### Khám phá: nhân với số âm

Ta có $2<3$. Nhân hai vế với $4$: $8<12$, chiều giữ nguyên. Nhân hai vế với $-1$: $-2$ và $-3$, mà $-2>-3$, chiều bị **đổi**. Trên trục số, nhân với $-1$ là lấy đối xứng qua điểm $0$, nên điểm ở bên trái trở thành điểm ở bên phải.

:::graph Nhân với $-1$ làm đổi thứ tự
alt: Trục số có các điểm 2 và 3 bên phải số 0, và các điểm −2, −3 đối xứng với chúng bên trái số 0
x: -4..4
y: -1..1
segment: (-4, 0) (4, 0)
point: (2, 0) "2" above
point: (3, 0) "3" above
point: (-2, 0) "−2" above
point: (-3, 0) "−3" above
point: (0, 0) "0" below
:::

:::theorem Liên hệ giữa thứ tự và phép nhân
Cho $a<b$.
- Nếu $c>0$ thì $ac<bc$ (giữ nguyên chiều).
- Nếu $c<0$ thì $ac>bc$ (**đổi chiều**).
:::

Phép chia cho $c\neq0$ là nhân với $\dfrac1c$, nên cũng theo quy tắc này.

:::example Nhân với số âm
Cho $a<b$. So sánh: a) $3a$ và $3b$; b) $-4a$ và $-4b$; c) $5-2a$ và $5-2b$.

**Lời giải.** Nhân với số dương thì giữ chiều, nhân với số âm thì đổi chiều. Câu c) nhân với $-2$ rồi cộng $5$:

$$\text{a) } 3a<3b;\qquad \text{b) } -4a>-4b;\qquad \text{c) } -2a>-2b\Rightarrow 5-2a>5-2b.$$

Vậy $3a<3b$, $-4a>-4b$ và $5-2a>5-2b$.
:::

Kết hợp các tính chất, ta chứng minh được nhiều bất đẳng thức.

:::example Dùng tính chất bắc cầu
Cho $a>b$. Chứng minh $3a+1>3b-2$.

**Lời giải.** Nhân hai vế của $a>b$ với $3>0$, cộng $1$, rồi so sánh $3b+1$ với $3b-2$:

$$a>b\Rightarrow 3a>3b\Rightarrow 3a+1>3b+1;\qquad 3b+1>3b-2\ (\text{vì } 1>-2).$$

Theo tính chất bắc cầu, $3a+1>3b-2$.
:::

Để chứng minh một bất đẳng thức có chữ, ta thường dùng sự thật đơn giản: **bình phương của mọi số đều không âm**.

:::example Một bất đẳng thức quan trọng
Chứng minh rằng với mọi số $a$, $b$ ta có $a^2+b^2\ge2ab$. Khi nào xảy ra dấu bằng?

**Lời giải.** Bắt đầu từ $(a-b)^2\ge0$, khai triển rồi cộng $2ab$ vào hai vế:

$$(a-b)^2\ge0\iff a^2-2ab+b^2\ge0\iff a^2+b^2\ge2ab.$$

Vậy $a^2+b^2\ge2ab$ với mọi $a$, $b$; dấu bằng xảy ra khi $a-b=0$, tức $a=b$.
:::

:::warning Những sai lầm thường gặp
- **Quên đổi chiều khi nhân với số âm.** Sai: $a<b\Rightarrow -3a<-3b$. Lí do sai: nhân với $-3<0$ phải đổi chiều. Đúng: $-3a>-3b$.
- **Bình phương hai vế.** Sai: $a<b\Rightarrow a^2<b^2$. Lí do sai: $-3<1$ nhưng $9>1$. Đúng: chỉ được bình phương khi biết hai vế không âm (xem bài tập 8).
- **Trừ từng vế hai bất đẳng thức.** Sai: $5>1$ và $4>0$ nên $5-4>1-0$. Lí do sai: $1>1$ là sai. Đúng: chỉ cộng (hoặc trừ) **cùng một số** vào hai vế.
:::

## Thuật ngữ

:::terms
- bất đẳng thức | inequality
- vế trái / vế phải | left-hand side / right-hand side
- nhỏ hơn hoặc bằng | less than or equal to
- lớn hơn hoặc bằng | greater than or equal to
- tính chất bắc cầu | transitive property
- giữ nguyên chiều | keep the direction (of the inequality)
- đổi chiều | reverse the inequality sign
- dấu bằng xảy ra | equality holds
:::

## Tóm tắt

- Bất đẳng thức: $a<b$, $a>b$, $a\le b$, $a\ge b$.
- Bắc cầu: $a<b$, $b<c\Rightarrow a<c$.
- Cộng (trừ) cùng một số vào hai vế: giữ nguyên chiều.
- Nhân (chia) cùng một số dương: giữ chiều; số âm: **đổi chiều**.
- Chứng minh: đưa về $(\dots)^2\ge0$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Viết bất đẳng thức để mô tả mỗi tình huống sau:

a) Số học sinh $n$ của một lớp không quá $45$;
b) Giá vé $p$ (nghìn đồng) ít nhất là $50$;
c) Nhiệt độ $T$ ($^\circ$C) dưới $0$.

::hint
**Kiến thức:** "không quá" là $\le$, "ít nhất" là $\ge$, "dưới" là $<$.

**Gợi ý các bước:**
1. Xác định dấu cho từng cụm từ.
2. Viết bất đẳng thức.

::solution
a) "Không quá $45$" nghĩa là nhỏ hơn hoặc bằng $45$. Ta có bất đẳng thức $n\le45$.

b) "Ít nhất là $50$" nghĩa là lớn hơn hoặc bằng $50$. Ta có bất đẳng thức $p\ge50$.

c) "Dưới $0$" nghĩa là nhỏ hơn $0$. Ta có bất đẳng thức $T<0$.

Vậy các bất đẳng thức cần viết là $n\le45$; $p\ge50$; $T<0$.

**Đáp số.** $n\le45$; $p\ge50$; $T<0$.
:::

:::exercise
Xét tính đúng sai của mỗi khẳng định sau:

a) $-5<-3$;
b) $2\cdot(-3)\ge-6$;
c) $(-2)^2<3$;
d) $7-10\le-4$.

::hint
**Kiến thức:** tính giá trị mỗi vế rồi so sánh; $\ge$ đúng cả khi hai vế bằng nhau.

**Gợi ý các bước:**
1. Tính từng vế.
2. So sánh trên trục số.

::solution
a) **Đúng.** Trên trục số, điểm $-5$ nằm bên trái điểm $-3$ nên $-5<-3$.

b) **Đúng.** Ta có $2\cdot(-3)=-6$. Vì $-6=-6$ nên khẳng định $-6\ge-6$ đúng.

c) **Sai.** Ta có $(-2)^2=4$, mà $4>3$ nên khẳng định $4<3$ sai.

d) **Sai.** Ta có $7-10=-3$, mà $-3>-4$ nên khẳng định $-3\le-4$ sai.

Vậy các khẳng định a) và b) đúng; các khẳng định c) và d) sai.

**Đáp số.** Đúng, Đúng, Sai, Sai.
:::

:::exercise
Cho $a<b$. So sánh:

a) $a+5$ và $b+5$;
b) $-3a$ và $-3b$;
c) $2a-1$ và $2b-1$.

::hint
**Kiến thức:** cộng giữ chiều; nhân với số dương giữ chiều, với số âm đổi chiều.

**Gợi ý các bước:**
1. Câu b) nhân với $-3$.
2. Câu c) nhân với $2$ rồi cộng $-1$.

::solution
a) Cộng $5$ vào hai vế của bất đẳng thức $a<b$, ta được $a+5<b+5$.

b) Nhân hai vế của bất đẳng thức $a<b$ với $-3$. Vì $-3<0$ nên bất đẳng thức đổi chiều: $-3a>-3b$.

c) Nhân hai vế của bất đẳng thức $a<b$ với $2$. Vì $2>0$ nên bất đẳng thức giữ nguyên chiều: $2a<2b$.

Cộng $-1$ vào hai vế, ta được $2a-1<2b-1$.

Vậy $a+5<b+5$; $-3a>-3b$; $2a-1<2b-1$.

**Đáp số.** a) $<$; b) $>$; c) $<$.
:::

:::exercise
Biết $-2a+3<-2b+3$. So sánh $a$ và $b$.

::hint
**Kiến thức:** cộng $-3$ vào hai vế, rồi chia cho $-2$ (đổi chiều).

**Gợi ý các bước:**
1. Bỏ số $3$ ở hai vế.
2. Chia cho $-2$.

::solution
Ta có $-2a+3<-2b+3$.

Cộng $-3$ vào hai vế, ta được $-2a<-2b$.

Chia hai vế cho $-2$. Vì $-2<0$ nên bất đẳng thức đổi chiều, ta được $a>b$.

Vậy $a>b$.

**Đáp số.** $a>b$.
:::

:::exercise
Chứng minh: nếu $a>2$ thì $3a-1>5$.

::hint
**Kiến thức:** nhân với số dương, rồi cộng cùng một số.

**Gợi ý các bước:**
1. Nhân hai vế với $3$.
2. Cộng $-1$ vào hai vế.

::solution
Ta có $a>2$.

Nhân hai vế với $3$. Vì $3>0$ nên bất đẳng thức giữ nguyên chiều: $3a>6$.

Cộng $-1$ vào hai vế, ta được $3a-1>6-1$, tức là $3a-1>5$.

Vậy nếu $a>2$ thì $3a-1>5$ (điều phải chứng minh).

**Đáp số.** Đã chứng minh.
:::

:::exercise
Một thang máy chở được tối đa $600$ kg. Bác Tư nặng $70$ kg muốn chở các bao xi măng, mỗi bao $50$ kg. Viết bất đẳng thức cho khối lượng khi chở $10$ bao, và cho biết chở $10$ bao, $11$ bao có được không.

::hint
**Kiến thức:** "tối đa $600$" nghĩa là tổng khối lượng $\le600$.

**Gợi ý các bước:**
1. Tính tổng khối lượng với $10$ bao và $11$ bao.
2. So sánh với $600$.

::solution
Thang máy chở được tối đa $600$ kg nên tổng khối lượng của bác Tư và các bao xi măng phải không vượt quá $600$ kg.

Khi chở $10$ bao, tổng khối lượng là $70+10\cdot50=570$ (kg). Ta có bất đẳng thức
$$70+10\cdot50\le600.$$

Vì $570\le600$ là khẳng định đúng nên bác Tư chở được $10$ bao.

Khi chở $11$ bao, tổng khối lượng là $70+11\cdot50=620$ (kg). Vì $620>600$ nên bác Tư không chở được $11$ bao.

Vậy bác Tư chở được $10$ bao nhưng không chở được $11$ bao xi măng trong một lần.

**Đáp số.** Chở được $10$ bao, không chở được $11$ bao.
:::

:::exercise Ôn tập
Phương trình $(x-1)(x+2)=0$ có những nghiệm nào? Nghiệm nào thoả mãn $x>0$?

::hint
**Kiến thức:** phương trình tích (bài trước).

**Gợi ý các bước:**
1. Giải $x-1=0$ và $x+2=0$.
2. So sánh từng nghiệm với $0$.

::solution
Ta có $(x-1)(x+2)=0$. Ta giải hai phương trình sau:

- $x-1=0$, suy ra $x=1$;
- $x+2=0$, suy ra $x=-2$.

Do đó phương trình có hai nghiệm $x=1$ và $x=-2$.

Vì $1>0$ nên nghiệm $x=1$ thoả mãn $x>0$. Vì $-2<0$ nên nghiệm $x=-2$ không thoả mãn $x>0$.

Vậy phương trình có hai nghiệm $x=1$ và $x=-2$; trong đó chỉ nghiệm $x=1$ thoả mãn $x>0$.

**Đáp số.** $x=1$.
:::

:::exercise
Cho $a>b>0$.

a) Chứng minh $a^2>ab$.

b) Chứng minh $ab>b^2$.

c) Suy ra $a^2>b^2$.

::hint
**Kiến thức:** nhân hai vế với một số dương thì giữ chiều; tính chất bắc cầu.

**Gợi ý các bước:**
1. a) Nhân $a>b$ với $a>0$.
2. b) Nhân $a>b$ với $b>0$.
3. c) Bắc cầu.

::solution
a) Ta có $a>b$. Nhân hai vế với $a$. Vì $a>0$ nên bất đẳng thức giữ nguyên chiều:
$$a\cdot a>b\cdot a,\ \text{tức là } a^2>ab.$$

b) Ta có $a>b$. Nhân hai vế với $b$. Vì $b>0$ nên bất đẳng thức giữ nguyên chiều:
$$a\cdot b>b\cdot b,\ \text{tức là } ab>b^2.$$

c) Theo câu a) và câu b), ta có $a^2>ab$ và $ab>b^2$. Theo tính chất bắc cầu, suy ra $a^2>b^2$.

Vậy với hai số dương, số lớn hơn có bình phương lớn hơn.

**Đáp số.** Đã chứng minh; vậy với hai số dương, số lớn hơn có bình phương lớn hơn.
:::

:::exercise Thử thách
Chứng minh rằng với mọi số $a$, $b$: $a^2+b^2+2\ge2(a+b)$. Khi nào xảy ra dấu bằng?

::hint
**Kiến thức:** bình phương của mọi số đều không âm.

**Gợi ý các bước:**
1. Chuyển hết sang vế trái.
2. Viết vế trái thành $(a-1)^2+(b-1)^2$.

::solution
Xét hiệu của vế trái và vế phải:
$$\begin{aligned}
a^2+b^2+2-2(a+b)&=a^2+b^2+2-2a-2b\\
&=(a^2-2a+1)+(b^2-2b+1)\\
&=(a-1)^2+(b-1)^2.
\end{aligned}$$

Vì $(a-1)^2\ge0$ và $(b-1)^2\ge0$ với mọi $a$, $b$ nên $(a-1)^2+(b-1)^2\ge0$.

Do đó $a^2+b^2+2-2(a+b)\ge0$, tức là $a^2+b^2+2\ge2(a+b)$.

Dấu bằng xảy ra khi và chỉ khi $(a-1)^2=0$ và $(b-1)^2=0$, tức là $a=1$ và $b=1$.

Vậy $a^2+b^2+2\ge2(a+b)$ với mọi số $a$, $b$; dấu bằng xảy ra khi $a=b=1$.

**Đáp số.** Bất đẳng thức đúng; dấu bằng khi $a=b=1$.
:::

## Kiểm tra mini

:::quiz
::mc
"$x$ không vượt quá $5$" được viết là
A. $x<5$.
B. $x\le5$.
C. $x\ge5$.
D. $x>5$.
::key B
"Không vượt quá" cho phép bằng $5$. A bỏ mất trường hợp bằng; C, D sai chiều.

::mc
Cho $a<b$. Khẳng định nào đúng?
A. $-2a<-2b$.
B. $a-3>b-3$.
C. $3a<3b$.
D. $-a<-b$.
::key C
Nhân với $3>0$ giữ chiều. A, D quên đổi chiều khi nhân với số âm; B đổi chiều sai khi trừ.

::mc
Cho $a>b$. So sánh $1-4a$ và $1-4b$.
A. $1-4a<1-4b$.
B. $1-4a>1-4b$.
C. $1-4a=1-4b$.
D. Không so sánh được.
::key A
$-4a<-4b$ (đổi chiều), cộng $1$ được $1-4a<1-4b$. B quên đổi chiều.

::mc
Khẳng định nào đúng với **mọi** số $a$, $b$?
A. Nếu $a<b$ thì $a^2<b^2$.
B. Nếu $a<b$ thì $-a<-b$.
C. $2a>a$.
D. $a^2+1>0$.
::key D
$a^2\ge0$ nên $a^2+1\ge1>0$. A sai với $a=-3$, $b=1$; C sai với $a=-1$; B quên đổi chiều.

::tf
Cho $a>b$.
a) $a+2>b+2$.
b) $-5a>-5b$.
c) $a-b>0$.
d) $a^2>b^2$.
::key Đ S Đ S
a) Đúng: cộng giữ chiều. b) Sai: nhân với $-5$ phải đổi chiều. c) Đúng: cộng $-b$ vào hai vế. d) Sai: chẳng hạn $1>-3$ nhưng $1<9$.

::sa
Có bao nhiêu số nguyên $x$ thoả mãn $-3<x\le2$?
::key 5
Đó là $-2$, $-1$, $0$, $1$, $2$ (không lấy $-3$, có lấy $2$).

::sa
Tìm giá trị nhỏ nhất của biểu thức $(x-3)^2+4$.
::key 4
$(x-3)^2\ge0$ nên biểu thức $\ge4$, và bằng $4$ khi $x=3$.
:::
