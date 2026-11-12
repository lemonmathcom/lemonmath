---
title: Phép cộng và phép trừ phân thức đại số
description: Cộng, trừ các phân thức cùng mẫu và khác mẫu bằng cách quy đồng mẫu thức, dùng phân thức đối, rồi vận dụng vào bài toán thực tế.
minutes: 22
---

:::goals
- Cộng, trừ hai phân thức có cùng mẫu thức.
- Tìm mẫu thức chung và quy đồng mẫu thức các phân thức.
- Cộng, trừ các phân thức khác mẫu, kể cả khi phải đổi dấu.
- Vận dụng phép cộng, trừ phân thức vào bài toán thực tế.
:::

Giả sử một bể nước được bơm bởi hai vòi. Vòi thứ nhất chảy một mình thì đầy bể sau $x$ giờ, vòi thứ hai chảy một mình thì đầy bể sau $x+3$ giờ. Mỗi giờ vòi thứ nhất chảy được $\dfrac1x$ bể, vòi thứ hai chảy được $\dfrac{1}{x+3}$ bể.

Khi mở cả hai vòi, mỗi giờ bể được bơm $\dfrac1x+\dfrac{1}{x+3}$ bể. Biểu thức này có thể viết thành một phân thức duy nhất không? Và nếu $x=6$ thì hai vòi cùng chảy bao lâu thì đầy bể? Bài này cho bạn công cụ để trả lời.

## Cùng khám phá

Với phân số, ta cộng $\dfrac16+\dfrac19$ bằng cách quy đồng: mẫu chung nhỏ nhất là $18$, nên
$$\frac16+\frac19=\frac{3}{18}+\frac{2}{18}=\frac{5}{18}.$$
Ta đổi hai phân số về **cùng mẫu** rồi cộng các tử. Với $\dfrac1x+\dfrac{1}{x+3}$, hai mẫu $x$ và $x+3$ không có nhân tử chung, nên mẫu chung tự nhiên là tích $x(x+3)$. Cách làm vẫn y hệt: đưa về cùng mẫu rồi cộng tử. Các mục sau trình bày từng bước.

## Cộng, trừ các phân thức cùng mẫu

:::theorem Cộng, trừ hai phân thức cùng mẫu
Muốn cộng (hoặc trừ) hai phân thức có cùng mẫu thức, ta cộng (hoặc trừ) các tử thức và giữ nguyên mẫu thức:
$$\frac{A}{C}+\frac{B}{C}=\frac{A+B}{C},\qquad \frac{A}{C}-\frac{B}{C}=\frac{A-B}{C}.$$
:::

**Vì sao?** Đây chính là quy tắc của phân số: $\dfrac{A}{C}$ nghĩa là $A$ phần, mỗi phần là $\dfrac1C$; cộng $A$ phần với $B$ phần được $A+B$ phần. Sau khi cộng, trừ, ta nên rút gọn kết quả nếu có thể.

:::example Cùng mẫu
Thực hiện các phép tính:

a) $\dfrac{3x+1}{x-2}+\dfrac{x+5}{x-2}$.

b) $\dfrac{5x+3}{x^2-1}-\dfrac{2x-1}{x^2-1}$.

**Lời giải.** a) Hai phân thức có cùng mẫu, ta cộng các tử:
$$\frac{3x+1}{x-2}+\frac{x+5}{x-2}=\frac{4x+6}{x-2}.$$

b) Khi trừ, ta đặt tử thứ hai trong ngoặc để đổi dấu mọi hạng tử:
$$\frac{5x+3}{x^2-1}-\frac{2x-1}{x^2-1}=\frac{5x+3-(2x-1)}{x^2-1}=\frac{3x+4}{x^2-1}.$$

Vậy a) $\dfrac{4x+6}{x-2}$; b) $\dfrac{3x+4}{x^2-1}$.
:::

## Quy đồng mẫu thức

Khi hai phân thức khác mẫu, ta phải **quy đồng mẫu thức**: biến đổi chúng thành các phân thức bằng chúng và có cùng mẫu. Ta làm theo các bước:

:::note Các bước quy đồng mẫu thức
1. Phân tích mỗi mẫu thành nhân tử.
2. Tìm **mẫu thức chung** (MTC): tích của mọi nhân tử xuất hiện, mỗi nhân tử lấy với số mũ lớn nhất; phần hệ số là bội chung nhỏ nhất của các hệ số.
3. Tìm **nhân tử phụ** của mỗi mẫu: lấy MTC chia cho mẫu đó.
4. Nhân cả tử và mẫu của mỗi phân thức với nhân tử phụ tương ứng (tính chất cơ bản của phân thức).
:::

:::example Quy đồng với mẫu là đơn thức
Thực hiện phép tính $\dfrac{5}{6x^2y}-\dfrac{1}{4xy^2}$.

**Lời giải.** Ta có $6x^2y=2\cdot3\cdot x^2\cdot y$ và $4xy^2=2^2\cdot x\cdot y^2$. Mẫu thức chung là $12x^2y^2$. Nhân tử phụ của hai phân thức lần lượt là $2y$ và $3x$. Do đó
$$\frac{5}{6x^2y}-\frac{1}{4xy^2}=\frac{5\cdot2y}{12x^2y^2}-\frac{1\cdot3x}{12x^2y^2}=\frac{10y-3x}{12x^2y^2}.$$

Vậy kết quả là $\dfrac{10y-3x}{12x^2y^2}$.
:::

:::example Hai mẫu không có nhân tử chung
Thực hiện phép tính $\dfrac1x+\dfrac{1}{x+3}$.

**Lời giải.** Hai mẫu $x$ và $x+3$ không có nhân tử chung nên mẫu thức chung là $x(x+3)$. Ta có
$$\frac1x+\frac{1}{x+3}=\frac{x+3}{x(x+3)}+\frac{x}{x(x+3)}=\frac{2x+3}{x(x+3)}.$$

Vậy $\dfrac1x+\dfrac{1}{x+3}=\dfrac{2x+3}{x(x+3)}$.
:::

Khi một mẫu có thể phân tích thành nhân tử, kết quả thường rút gọn được rất đẹp.

:::example Mẫu có hằng đẳng thức
Thực hiện phép tính $\dfrac{1}{x-2}-\dfrac{4}{x^2-4}$.

**Lời giải.** Ta có $x^2-4=(x-2)(x+2)$ nên mẫu thức chung là $(x-2)(x+2)$. Do đó
$$\frac{1}{x-2}-\frac{4}{x^2-4}=\frac{x+2}{(x-2)(x+2)}-\frac{4}{(x-2)(x+2)}=\frac{x-2}{(x-2)(x+2)}=\frac{1}{x+2}.$$

Vậy kết quả là $\dfrac{1}{x+2}$.
:::

## Phân thức đối và phép trừ

Hai phân thức có tổng bằng $0$ gọi là hai **phân thức đối** của nhau. Phân thức đối của $\dfrac{A}{B}$ là $-\dfrac{A}{B}=\dfrac{-A}{B}$. Phép trừ là cộng với phân thức đối:
$$\frac{A}{B}-\frac{C}{D}=\frac{A}{B}+\left(-\frac{C}{D}\right).$$

Khi hai mẫu chỉ khác nhau về dấu (như $x-1$ và $1-x$), ta đổi dấu một phân thức để hai mẫu giống nhau.

:::example Mẫu đối nhau
Thực hiện phép tính $\dfrac{x}{x-1}+\dfrac{2}{1-x}$.

**Lời giải.** Ta có $\dfrac{2}{1-x}=\dfrac{-2}{x-1}$ (đổi dấu cả tử và mẫu). Do đó
$$\frac{x}{x-1}+\frac{2}{1-x}=\frac{x}{x-1}+\frac{-2}{x-1}=\frac{x-2}{x-1}.$$

Vậy kết quả là $\dfrac{x-2}{x-1}$.
:::

Bây giờ ta cộng, trừ ba phân thức rồi rút gọn.

:::example Ba phân thức
Thực hiện phép tính $\dfrac{x}{x+1}+\dfrac{1}{x-1}-\dfrac{2x}{x^2-1}$.

**Lời giải.** Ta có $x^2-1=(x-1)(x+1)$ nên mẫu thức chung là $x^2-1$. Do đó
$$\begin{aligned}\frac{x}{x+1}+\frac{1}{x-1}-\frac{2x}{x^2-1}&=\frac{x(x-1)+(x+1)-2x}{x^2-1}\\&=\frac{x^2-2x+1}{x^2-1}\\&=\frac{(x-1)^2}{(x-1)(x+1)}=\frac{x-1}{x+1}.\end{aligned}$$

Vậy kết quả là $\dfrac{x-1}{x+1}$.
:::

Ta quay lại hai vòi nước ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Hai vòi cùng chảy
Một vòi chảy đầy bể sau $x$ giờ, vòi kia sau $x+3$ giờ (giả sử). Viết phân thức biểu thị phần bể được bơm trong một giờ khi mở cả hai vòi. Với $x=6$, hai vòi cùng chảy bao lâu thì đầy bể?

**Lời giải.**

*Hiểu đề.* Mỗi giờ hai vòi chảy được $\dfrac1x$ và $\dfrac1{x+3}$ bể; cần cộng chúng, rồi tìm thời gian khi $x=6$.

*Tìm cách giải.* Quy đồng để cộng; thời gian đầy bể là $1$ chia cho phần bể chảy được trong một giờ.

*Giải.* Theo ví dụ trên, mỗi giờ hai vòi chảy được $\dfrac{2x+3}{x(x+3)}$ bể. Với $x=6$ ta được $\dfrac{15}{6\cdot9}=\dfrac{5}{18}$ bể mỗi giờ. Thời gian đầy bể là $1:\dfrac{5}{18}=\dfrac{18}{5}=3{,}6$ (giờ).

*Nhìn lại.* Kiểm tra bằng phân số: $\dfrac16+\dfrac19=\dfrac{5}{18}$. Kết quả hợp lí vì hai vòi cùng chảy thì nhanh hơn vòi nhanh nhất ($6$ giờ). Nếu $x$ tăng thì mỗi vòi chậm đi, nên thời gian đầy bể tăng.

Vậy hai vòi cùng chảy thì sau $3{,}6$ giờ (tức $3$ giờ $36$ phút) đầy bể.
:::

:::warning Những sai lầm thường gặp
- **Cộng tử với tử, mẫu với mẫu.** Sai: $\dfrac1x+\dfrac1y=\dfrac{2}{x+y}$. Lí do sai: với $x=y=1$ vế trái bằng $2$ còn vế phải bằng $1$. Đúng: $\dfrac1x+\dfrac1y=\dfrac{y+x}{xy}$.
- **Quên đổi dấu khi trừ.** Sai: $\dfrac{x+3}{x}-\dfrac{x-1}{x}=\dfrac{x+3-x-1}{x}=\dfrac2x$. Lí do sai: dấu trừ phải đổi dấu cả $-1$ trong tử thứ hai. Đúng: $\dfrac{x+3-(x-1)}{x}=\dfrac4x$.
- **Chỉ nhân mẫu khi quy đồng.** Sai: $\dfrac1x+\dfrac{1}{x+3}=\dfrac{1}{x(x+3)}+\dfrac{1}{x(x+3)}$. Lí do sai: nhân mẫu với $x+3$ mà không nhân tử làm giá trị phân thức đổi. Đúng: nhân cả tử và mẫu: $\dfrac{x+3}{x(x+3)}+\dfrac{x}{x(x+3)}$.
:::

**Kết nối.** Bài này dựa trực tiếp vào tính chất cơ bản và rút gọn phân thức ở bài [phân thức đại số](lesson:intro-algebraic-fractions), cùng kĩ năng phân tích đa thức thành nhân tử. Nó chuẩn bị cho bài [phép nhân và phép chia phân thức đại số](lesson:multiply-divide-algebraic-fractions), và sau này cho việc giải phương trình chứa ẩn ở mẫu.

## Thuật ngữ

:::terms
- phép cộng phân thức | addition of algebraic fractions
- phép trừ phân thức | subtraction of algebraic fractions
- quy đồng mẫu thức | writing over a common denominator
- mẫu thức chung | common denominator
- nhân tử phụ | multiplying factor
- phân thức đối | opposite fraction
- phân tích thành nhân tử | factorising
- rút gọn | simplify
:::

## Tóm tắt

- Cùng mẫu: $\dfrac AC\pm\dfrac BC=\dfrac{A\pm B}{C}$; khi trừ, đổi dấu mọi hạng tử của tử thứ hai.
- Khác mẫu: phân tích mẫu thành nhân tử, tìm mẫu thức chung, tìm nhân tử phụ, nhân cả tử và mẫu, rồi cộng hoặc trừ.
- Phép trừ là cộng với phân thức đối: $\dfrac AB-\dfrac CD=\dfrac AB+\left(-\dfrac CD\right)$.
- Mẫu đối nhau (như $x-1$ và $1-x$): đổi dấu một phân thức trước.
- Sau khi tính, luôn rút gọn kết quả nếu có thể.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Thực hiện các phép tính:

a) $\dfrac{2x+1}{x+3}+\dfrac{x+8}{x+3}$.

b) $\dfrac{4x-5}{x^2+1}-\dfrac{x-2}{x^2+1}$.

::hint
**Kiến thức:** cùng mẫu thì cộng (trừ) các tử, giữ nguyên mẫu.

**Gợi ý các bước:**
1. a) Cộng các tử rồi rút gọn.
2. b) Đặt tử thứ hai trong ngoặc khi trừ.

::solution
a) $\dfrac{2x+1}{x+3}+\dfrac{x+8}{x+3}=\dfrac{3x+9}{x+3}=\dfrac{3(x+3)}{x+3}=3$.

b) $\dfrac{4x-5}{x^2+1}-\dfrac{x-2}{x^2+1}=\dfrac{4x-5-(x-2)}{x^2+1}=\dfrac{3x-3}{x^2+1}$.

Vậy a) $3$; b) $\dfrac{3x-3}{x^2+1}$.

**Đáp số.** a) $3$. b) $\dfrac{3x-3}{x^2+1}$.
:::

:::exercise
Thực hiện phép tính $\dfrac{3}{4x}+\dfrac{5}{6x^2}$.

::hint
**Kiến thức:** mẫu thức chung gồm bội chung nhỏ nhất của hệ số và lũy thừa lớn nhất của mỗi biến.

**Gợi ý các bước:**
1. Tìm mẫu thức chung của $4x$ và $6x^2$.
2. Tìm nhân tử phụ rồi cộng.

::solution
Mẫu thức chung là $12x^2$; nhân tử phụ là $3x$ và $2$. Do đó
$$\frac{3}{4x}+\frac{5}{6x^2}=\frac{9x}{12x^2}+\frac{10}{12x^2}=\frac{9x+10}{12x^2}.$$

Vậy kết quả là $\dfrac{9x+10}{12x^2}$.

**Đáp số.** $\dfrac{9x+10}{12x^2}$.
:::

:::exercise
Thực hiện phép tính $\dfrac{2}{x}-\dfrac{3}{x+1}$.

::hint
**Kiến thức:** hai mẫu không có nhân tử chung thì mẫu thức chung là tích của chúng.

**Gợi ý các bước:**
1. Mẫu thức chung là $x(x+1)$.
2. Quy đồng rồi trừ các tử, chú ý dấu.

::solution
Ta có
$$\frac{2}{x}-\frac{3}{x+1}=\frac{2(x+1)-3x}{x(x+1)}=\frac{2-x}{x(x+1)}.$$

Vậy kết quả là $\dfrac{2-x}{x(x+1)}$.

**Đáp số.** $\dfrac{2-x}{x(x+1)}$.
:::

:::exercise
Thực hiện phép tính $\dfrac{x}{x^2-4}+\dfrac{1}{x+2}$.

::hint
**Kiến thức:** $x^2-4=(x-2)(x+2)$.

**Gợi ý các bước:**
1. Mẫu thức chung là $x^2-4$.
2. Nhân tử phụ của $\dfrac{1}{x+2}$ là $x-2$.

::solution
Ta có
$$\frac{x}{x^2-4}+\frac{1}{x+2}=\frac{x+(x-2)}{(x-2)(x+2)}=\frac{2x-2}{x^2-4}.$$

Vậy kết quả là $\dfrac{2x-2}{x^2-4}$.

**Đáp số.** $\dfrac{2x-2}{x^2-4}$.
:::

:::exercise
Thực hiện phép tính $\dfrac{3}{x-2}-\dfrac{5}{2-x}$.

::hint
**Kiến thức:** $\dfrac{5}{2-x}=\dfrac{-5}{x-2}$.

**Gợi ý các bước:**
1. Đổi dấu để hai mẫu giống nhau.
2. Trừ hai tử, chú ý dấu.

::solution
Ta có $-\dfrac{5}{2-x}=\dfrac{5}{x-2}$. Do đó
$$\frac{3}{x-2}-\frac{5}{2-x}=\frac{3}{x-2}+\frac{5}{x-2}=\frac{8}{x-2}.$$

Vậy kết quả là $\dfrac{8}{x-2}$.

**Đáp số.** $\dfrac{8}{x-2}$.
:::

:::exercise
Thực hiện phép tính $\dfrac{1}{x^2-x}+\dfrac{1}{x^2+x}$.

::hint
**Kiến thức:** $x^2-x=x(x-1)$ và $x^2+x=x(x+1)$.

**Gợi ý các bước:**
1. Tìm mẫu thức chung $x(x-1)(x+1)$.
2. Cộng rồi rút gọn.

::solution
Ta có
$$\frac{1}{x(x-1)}+\frac{1}{x(x+1)}=\frac{(x+1)+(x-1)}{x(x-1)(x+1)}=\frac{2x}{x(x^2-1)}=\frac{2}{x^2-1}.$$

Vậy kết quả là $\dfrac{2}{x^2-1}$.

**Đáp số.** $\dfrac{2}{x^2-1}$.
:::

:::exercise
Một xe đi $60$ km với vận tốc $x$ km/h, rồi quay về cùng quãng đường đó với vận tốc $(x+10)$ km/h. Viết phân thức biểu thị tổng thời gian đi và về, rút gọn rồi tính khi $x=40$.

::hint
**Kiến thức:** thời gian bằng quãng đường chia vận tốc.

**Gợi ý các bước:**
1. Viết $\dfrac{60}{x}+\dfrac{60}{x+10}$.
2. Quy đồng, rồi thay $x=40$.

::solution
Tổng thời gian là
$$\frac{60}{x}+\frac{60}{x+10}=\frac{60(x+10)+60x}{x(x+10)}=\frac{120(x+5)}{x(x+10)}\ \text{(giờ)}.$$
Với $x=40$: $\dfrac{120\cdot45}{40\cdot50}=2{,}7$ (giờ).

Kiểm tra: $\dfrac{60}{40}+\dfrac{60}{50}=1{,}5+1{,}2=2{,}7$.

Vậy tổng thời gian là $\dfrac{120(x+5)}{x(x+10)}$ giờ, bằng $2{,}7$ giờ khi $x=40$.

**Đáp số.** $\dfrac{120(x+5)}{x(x+10)}$ giờ; $2{,}7$ giờ.
:::

:::exercise
Giả sử An làm xong một công việc một mình trong $x$ giờ, còn Bình làm xong trong $2x$ giờ. Mỗi giờ hai bạn cùng làm được bao nhiêu phần công việc? Nếu $x=6$ thì hai bạn cùng làm xong sau bao lâu?

::hint
**Kiến thức:** phần việc làm được trong một giờ bằng $1$ chia thời gian làm xong.

**Gợi ý các bước:**
1. Viết $\dfrac1x+\dfrac{1}{2x}$.
2. Thời gian cùng làm bằng $1$ chia phần việc mỗi giờ.

::solution
Mỗi giờ hai bạn làm được $\dfrac1x+\dfrac1{2x}=\dfrac{2}{2x}+\dfrac{1}{2x}=\dfrac{3}{2x}$ công việc. Thời gian cùng làm xong là $1:\dfrac{3}{2x}=\dfrac{2x}{3}$ (giờ). Với $x=6$: $\dfrac{2\cdot6}{3}=4$ (giờ).

Vậy mỗi giờ làm được $\dfrac{3}{2x}$ công việc và hai bạn cùng làm xong sau $4$ giờ khi $x=6$.

**Đáp số.** $\dfrac{3}{2x}$; $4$ giờ.
:::

:::exercise
Rút gọn $A=\dfrac{1}{x-1}-\dfrac{1}{x+1}$ rồi tính $A$ tại $x=3$. (Ôn lại [rút gọn phân thức](lesson:intro-algebraic-fractions).)

::hint
**Kiến thức:** mẫu thức chung là $(x-1)(x+1)$.

**Gợi ý các bước:**
1. Quy đồng rồi trừ.
2. Thay $x=3$ vào kết quả.

::solution
Điều kiện: $x\neq\pm1$. Ta có
$$A=\frac{(x+1)-(x-1)}{(x-1)(x+1)}=\frac{2}{x^2-1}.$$
Với $x=3$: $A=\dfrac{2}{9-1}=\dfrac14$.

Kiểm tra: $\dfrac12-\dfrac14=\dfrac14$.

Vậy $A=\dfrac{2}{x^2-1}$ và $A=\dfrac14$ tại $x=3$.

**Đáp số.** $\dfrac{2}{x^2-1}$; $\dfrac14$.
:::

:::exercise Thử thách
Chứng minh rằng
$$\frac{1}{x(x+1)}+\frac{1}{(x+1)(x+2)}+\frac{1}{(x+2)(x+3)}=\frac{3}{x(x+3)}.$$

::hint
**Kiến thức:** $\dfrac{1}{n(n+1)}=\dfrac1n-\dfrac{1}{n+1}$.

**Gợi ý các bước:**
1. Viết mỗi phân thức thành hiệu hai phân thức.
2. Cộng lại và để ý các số hạng triệt tiêu nhau.

::solution
Vì $\dfrac1n-\dfrac1{n+1}=\dfrac{1}{n(n+1)}$ nên vế trái bằng
$$\left(\frac1x-\frac1{x+1}\right)+\left(\frac1{x+1}-\frac1{x+2}\right)+\left(\frac1{x+2}-\frac1{x+3}\right)=\frac1x-\frac1{x+3}.$$
Quy đồng: $\dfrac1x-\dfrac1{x+3}=\dfrac{(x+3)-x}{x(x+3)}=\dfrac{3}{x(x+3)}$.

Vậy đẳng thức được chứng minh.

**Đáp số.** Đã chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của $\dfrac{2x+3}{x-1}+\dfrac{x-4}{x-1}$ là
A. $\dfrac{3x-1}{2x-2}$.
B. $\dfrac{3x-1}{x-1}$.
C. $\dfrac{3x+7}{x-1}$.
D. $\dfrac{3x-1}{x^2-1}$.
::key B
Cùng mẫu thì cộng tử: $2x+3+x-4=3x-1$. A cộng cả mẫu, C sai dấu của $-4$, D đổi mẫu.

::mc
Kết quả của $\dfrac{5x+2}{x}-\dfrac{2x-1}{x}$ là
A. $\dfrac{3x+1}{x}$.
B. $\dfrac{7x+1}{x}$.
C. $\dfrac{3x+3}{x}$.
D. $3$.
::key C
$5x+2-(2x-1)=3x+3$. A quên đổi dấu của $-1$, B cộng thay vì trừ, D rút gọn sai.

::mc
Kết quả của $\dfrac1x+\dfrac1{x+1}$ là
A. $\dfrac{2}{2x+1}$.
B. $\dfrac{1}{x(x+1)}$.
C. $\dfrac{2x}{x(x+1)}$.
D. $\dfrac{2x+1}{x(x+1)}$.
::key D
$\dfrac{x+1}{x(x+1)}+\dfrac{x}{x(x+1)}=\dfrac{2x+1}{x(x+1)}$. A cộng tử với tử, mẫu với mẫu; B quên nhân tử; C nhầm tử.

::mc
Mẫu thức chung của $\dfrac{1}{x-2}$ và $\dfrac{3}{x^2-4}$ là
A. $x^2-4$.
B. $(x-2)(x^2-4)$.
C. $x-2$.
D. $x+2$.
::key A
$x^2-4=(x-2)(x+2)$ đã chứa nhân tử $x-2$, nên MTC là $x^2-4$. B nhân thừa nhân tử $x-2$.

::tf
Cho $P=\dfrac{1}{x-2}-\dfrac{4}{x^2-4}$ ($x\neq\pm2$). Xét tính đúng sai của các mệnh đề sau:
a) Mẫu thức chung của hai phân thức là $(x-2)(x+2)$.
b) $P=\dfrac{x-3}{x^2-4}$.
c) $P=\dfrac{1}{x+2}$.
d) Giá trị của $P$ tại $x=3$ bằng $\dfrac15$.
::key Đ S Đ Đ
a) Đúng: $x^2-4=(x-2)(x+2)$. b) Sai: tử là $(x+2)-4=x-2$, không phải $x-3$. c) Đúng: $\dfrac{x-2}{(x-2)(x+2)}=\dfrac1{x+2}$. d) Đúng: $\dfrac{1}{3+2}=\dfrac15$.

::sa
Hai vòi nước chảy đầy bể sau $6$ giờ và $9$ giờ. Mỗi giờ cả hai vòi chảy được bao nhiêu phần bể? (làm tròn đến hàng phần trăm)
::key 0,28
$\dfrac16+\dfrac19=\dfrac{5}{18}\approx0{,}28$.

::sa
Một xe đi $60$ km với vận tốc $40$ km/h rồi về $60$ km với vận tốc $50$ km/h. Tổng thời gian đi và về là bao nhiêu giờ?
::key 2,7
$\dfrac{60}{40}+\dfrac{60}{50}=1{,}5+1{,}2=2{,}7$.
:::
