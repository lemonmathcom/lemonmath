---
title: Phép nhân và phép chia phân số
description: Nhân hai phân số, dùng tính chất của phép nhân để tính nhanh, tìm phân số nghịch đảo và chia phân số bằng cách nhân với số nghịch đảo.
minutes: 30
---

:::goals
- Nhân được hai phân số và nhân phân số với số nguyên, xác định đúng dấu của tích.
- Dùng tính chất giao hoán, kết hợp, phân phối của phép nhân để tính hợp lí.
- Tìm được phân số nghịch đảo của một phân số khác $0$.
- Chia được phân số cho phân số bằng cách nhân với số nghịch đảo.
:::

Bố bạn Lan muốn lắp một ô kính nhỏ trên cánh cửa. Ô kính hình chữ nhật dài $\dfrac34$ m, rộng $\dfrac23$ m. Diện tích ô kính là bao nhiêu mét vuông?

Ta biết diện tích hình chữ nhật bằng chiều dài nhân chiều rộng, nên câu trả lời là $\dfrac34\cdot\dfrac23$. Nhưng nhân hai phân số thế nào? Lần này, một hình vẽ sẽ tự cho ta quy tắc.

## Nhân hai phân số

Vẽ một hình vuông cạnh $1$ m, diện tích $1\ \text{m}^2$. Chia chiều ngang thành $4$ phần bằng nhau và chiều dọc thành $3$ phần bằng nhau. Hình vuông được chia thành $4\cdot3=12$ ô nhỏ bằng nhau, mỗi ô có diện tích $\dfrac{1}{12}\ \text{m}^2$.

:::diagram Ô kính $\dfrac34$ m × $\dfrac23$ m trong hình vuông $1$ m × $1$ m
alt: Hình vuông cạnh 1 m chia thành 4 cột và 3 hàng; phần tô màu gồm 3 cột và 2 hàng, tức 6 trong 12 ô nhỏ
point O 0,0 ""
point P 6,0 ""
point Q 6,6 ""
point R 0,6 ""
point S 4.5,0 ""
point T 4.5,4 ""
point U 0,4 ""
polygon O S T U
segment O P
segment P Q
segment Q R
segment R O
point C1 1.5,0 ""
point C1' 1.5,6 ""
point C2 3,0 ""
point C2' 3,6 ""
point C3 4.5,6 ""
point R1 0,2 ""
point R1' 6,2 ""
point R2' 6,4 ""
segment C1 C1' dashed
segment C2 C2' dashed
segment S C3 dashed
segment R1 R1' dashed
segment U R2' dashed
label 2.25,-0.6 "3/4 m"
label -0.9,2 "2/3 m"
:::

Ô kính chiếm $3$ cột và $2$ hàng, tức là $3\cdot2=6$ ô nhỏ. Vậy diện tích ô kính là $\dfrac{6}{12}=\dfrac12\ \text{m}^2$. Để ý: tử $6=3\cdot2$ là tích hai tử, mẫu $12=4\cdot3$ là tích hai mẫu.

:::theorem Quy tắc nhân hai phân số
Muốn nhân hai phân số, ta nhân các tử với nhau và nhân các mẫu với nhau:
$$\dfrac{a}{b}\cdot\dfrac{c}{d}=\dfrac{a\cdot c}{b\cdot d}.$$
:::

Đặc biệt, nhân phân số với số nguyên: $\dfrac{a}{b}\cdot m=\dfrac{a\cdot m}{b}$. Dấu của tích theo đúng quy tắc dấu của số nguyên: hai số cùng dấu thì tích dương, khác dấu thì tích âm.

:::tip Rút gọn trước khi nhân
Trước khi nhân, nếu một tử và một mẫu có ước chung thì chia cả hai cho ước chung đó. Các con số sẽ nhỏ hơn và kết quả ra ngay dạng tối giản:
$$\dfrac{-3}{5}\cdot\dfrac{10}{9}=\dfrac{(-3)\cdot10}{5\cdot9}=\dfrac{(-1)\cdot2}{1\cdot3}=\dfrac{-2}{3}.$$
:::

## Tính chất của phép nhân phân số

Phép nhân phân số có đủ các tính chất quen thuộc: **giao hoán**, **kết hợp**, **nhân với số $1$** không đổi, và **phân phối đối với phép cộng**:
$$\dfrac{a}{b}\cdot\left(\dfrac{c}{d}+\dfrac{p}{q}\right)=\dfrac{a}{b}\cdot\dfrac{c}{d}+\dfrac{a}{b}\cdot\dfrac{p}{q}.$$

Giống như với số nguyên, tính chất phân phối đọc ngược lại cho phép đặt thừa số chung ra ngoài, và đó thường là con đường ngắn nhất.

## Phân số nghịch đảo

:::definition Phân số nghịch đảo
Hai số được gọi là **nghịch đảo** của nhau nếu tích của chúng bằng $1$. Với phân số $\dfrac{a}{b}$ khác $0$ (tức $a\ne0$, $b\ne0$), số nghịch đảo của nó là $\dfrac{b}{a}$, vì
$$\dfrac{a}{b}\cdot\dfrac{b}{a}=\dfrac{a\cdot b}{b\cdot a}=1.$$
:::

Muốn tìm số nghịch đảo, ta chỉ cần đổi chỗ tử và mẫu. Số nghịch đảo của $\dfrac{-3}{7}$ là $\dfrac{7}{-3}=\dfrac{-7}{3}$; số nghịch đảo của $5=\dfrac51$ là $\dfrac15$. Số $0$ không có số nghịch đảo, vì $0$ nhân với số nào cũng bằng $0$, không bao giờ bằng $1$.

Chỗ này nhiều bạn hay lẫn: **số đối** làm cho tổng bằng $0$ (đổi dấu), còn **số nghịch đảo** làm cho tích bằng $1$ (đảo tử và mẫu).

## Phép chia phân số

Trên bàn có $\dfrac34$ lít nước. Rót vào các cốc nhỏ, mỗi cốc $\dfrac18$ lít. Được bao nhiêu cốc? Ta cần tính $\dfrac34:\dfrac18$.

Nghĩ thế này: $1$ lít rót được $8$ cốc, nên $\dfrac34$ lít rót được $\dfrac34\cdot8=6$ cốc. Như vậy chia cho $\dfrac18$ cũng chính là nhân với $8$, số nghịch đảo của $\dfrac18$.

:::theorem Quy tắc chia phân số
Muốn chia một phân số cho một phân số khác $0$, ta nhân số bị chia với **số nghịch đảo** của số chia:
$$\dfrac{a}{b}:\dfrac{c}{d}=\dfrac{a}{b}\cdot\dfrac{d}{c}\qquad\left(\dfrac{c}{d}\ne0\right).$$
:::

Nhờ quy tắc này, phép chia quay về phép nhân. Bạn không cần học thêm điều gì mới, chỉ cần nhớ đảo **số chia**, không đảo số bị chia.

## Ví dụ

Ta bắt đầu với phép nhân, kể cả nhân với số nguyên.

:::example Nhân phân số
Tính:

a) $\dfrac{-3}{5}\cdot\dfrac{10}{9}$;

b) $\dfrac{4}{-7}\cdot\dfrac{-21}{8}$;

c) $\dfrac{-5}{12}\cdot8$.

**Lời giải.**

a) Rút gọn $3$ với $9$ và $5$ với $10$ rồi nhân:
$$\dfrac{-3}{5}\cdot\dfrac{10}{9}=\dfrac{(-3)\cdot10}{5\cdot9}=\dfrac{(-1)\cdot2}{1\cdot3}=\dfrac{-2}{3}.$$

b) Đưa về mẫu dương: $\dfrac{4}{-7}=\dfrac{-4}{7}$. Hai thừa số cùng âm nên tích dương:
$$\dfrac{-4}{7}\cdot\dfrac{-21}{8}=\dfrac{4\cdot21}{7\cdot8}=\dfrac{1\cdot3}{1\cdot2}=\dfrac{3}{2}.$$

c) Nhân tử với số nguyên, giữ nguyên mẫu:
$$\dfrac{-5}{12}\cdot8=\dfrac{(-5)\cdot8}{12}=\dfrac{-40}{12}=\dfrac{-10}{3}.$$

Vậy kết quả lần lượt là $\dfrac{-2}{3}$; $\dfrac{3}{2}$; $\dfrac{-10}{3}$.
:::

Tính chất của phép nhân giúp ta tránh những phép tính cồng kềnh.

:::example Tính một cách hợp lí
Tính:

a) $\dfrac{-7}{11}\cdot\dfrac{5}{9}+\dfrac{-7}{11}\cdot\dfrac{4}{9}$;

b) $\dfrac{-4}{5}\cdot\dfrac{13}{17}\cdot\dfrac{-5}{4}$.

**Lời giải.**

a) Hai tích có thừa số chung là $\dfrac{-7}{11}$. Dùng tính chất phân phối:
$$\dfrac{-7}{11}\cdot\dfrac{5}{9}+\dfrac{-7}{11}\cdot\dfrac{4}{9}=\dfrac{-7}{11}\cdot\left(\dfrac{5}{9}+\dfrac{4}{9}\right)=\dfrac{-7}{11}\cdot1=\dfrac{-7}{11}.$$

b) Hai phân số $\dfrac{-4}{5}$ và $\dfrac{-5}{4}$ là nghịch đảo của nhau. Dùng tính chất giao hoán và kết hợp:
$$\dfrac{-4}{5}\cdot\dfrac{13}{17}\cdot\dfrac{-5}{4}=\left(\dfrac{-4}{5}\cdot\dfrac{-5}{4}\right)\cdot\dfrac{13}{17}=1\cdot\dfrac{13}{17}=\dfrac{13}{17}.$$

Vậy a) $\dfrac{-7}{11}$; b) $\dfrac{13}{17}$.
:::

Bây giờ đến số nghịch đảo và phép chia.

:::example Số nghịch đảo và phép chia
a) Tìm số nghịch đảo của $\dfrac{-3}{7}$ và của $-6$.

b) Tính $\dfrac{2}{3}:\dfrac{-4}{9}$ và $-6:\dfrac{3}{5}$.

**Lời giải.**

a) Số nghịch đảo của $\dfrac{-3}{7}$ là $\dfrac{7}{-3}=\dfrac{-7}{3}$.

Ta có $-6=\dfrac{-6}{1}$, nên số nghịch đảo của $-6$ là $\dfrac{1}{-6}=\dfrac{-1}{6}$.

b) Nhân số bị chia với số nghịch đảo của số chia:
$$\dfrac{2}{3}:\dfrac{-4}{9}=\dfrac{2}{3}\cdot\dfrac{9}{-4}=\dfrac{2}{3}\cdot\dfrac{-9}{4}=\dfrac{1\cdot(-3)}{1\cdot2}=\dfrac{-3}{2};$$
$$-6:\dfrac{3}{5}=-6\cdot\dfrac{5}{3}=\dfrac{(-6)\cdot5}{3}=-10.$$

Vậy a) $\dfrac{-7}{3}$ và $\dfrac{-1}{6}$; b) $\dfrac{-3}{2}$ và $-10$.
:::

Phép chia phân số trả lời những câu hỏi kiểu "chứa được bao nhiêu lần".

:::example Cắt dây
Một cuộn dây dài $7\dfrac12$ m. Người ta cắt cuộn dây thành các đoạn dài $\dfrac34$ m. Hỏi cắt được bao nhiêu đoạn?

**Lời giải.**

Đổi hỗn số thành phân số: $7\dfrac{1}{2}=\dfrac{15}{2}$.

Số đoạn dây cắt được là
$$\dfrac{15}{2}:\dfrac{3}{4}=\dfrac{15}{2}\cdot\dfrac{4}{3}=\dfrac{15\cdot4}{2\cdot3}=\dfrac{60}{6}=10\ (\text{đoạn}).$$

Vậy cắt được $10$ đoạn dây.
:::

Cuối cùng là một bài toán chuyển động với hỗn số.

:::example Quãng đường ô tô đi
Một ô tô chạy với vận tốc $42$ km/h trong $2$ giờ $20$ phút. Tính quãng đường ô tô đã đi.

**Lời giải.**

*Hiểu đề.* Biết vận tốc và thời gian, cần tìm quãng đường. Thời gian đang viết bằng giờ và phút.

*Tìm cách giải.* Đổi thời gian ra giờ dưới dạng hỗn số, rồi dùng công thức quãng đường bằng vận tốc nhân thời gian.

*Giải.* Ta có $20$ phút $=\dfrac{20}{60}$ giờ $=\dfrac13$ giờ, nên thời gian ô tô chạy là
$$2\dfrac{1}{3}=\dfrac{7}{3}\ (\text{giờ}).$$

Quãng đường ô tô đã đi là
$$42\cdot\dfrac{7}{3}=\dfrac{42\cdot7}{3}=14\cdot7=98\ (\text{km}).$$

Vậy ô tô đã đi được $98$ km.

*Nhìn lại.* Kết quả có hợp lí không? Trong $2$ giờ xe đi $84$ km, trong $3$ giờ đi $126$ km. Thời gian nằm giữa $2$ và $3$ giờ, nên quãng đường $98$ km nằm giữa $84$ và $126$ km là hợp lí.
:::

:::warning Những chỗ hay nhầm
- **Quy đồng mẫu khi nhân.** Sai: $\dfrac34\cdot\dfrac23=\dfrac{9}{12}\cdot\dfrac{8}{12}=\dfrac{72}{12}$. Vì sao sai: quy đồng chỉ cần cho phép cộng và trừ; khi nhân, ta nhân tử với tử, mẫu với mẫu. Đúng: $\dfrac34\cdot\dfrac23=\dfrac{6}{12}=\dfrac12$.
- **Đảo nhầm số bị chia.** Sai: $\dfrac23:\dfrac{-4}{9}=\dfrac32\cdot\dfrac{-4}{9}$. Vì sao sai: chỉ đảo số chia, số bị chia giữ nguyên. Đúng: $\dfrac23\cdot\dfrac{9}{-4}=\dfrac{-3}{2}$.
- **Lẫn số nghịch đảo với số đối.** Sai: "Số nghịch đảo của $\dfrac{-3}{7}$ là $\dfrac37$." Vì sao sai: $\dfrac{-3}{7}\cdot\dfrac37=\dfrac{-9}{49}\ne1$; $\dfrac37$ là số đối. Đúng: số nghịch đảo là $\dfrac{-7}{3}$.
- **Nhân số nguyên với cả tử và mẫu.** Sai: $\dfrac{-5}{12}\cdot8=\dfrac{-40}{96}$. Vì sao sai: $8=\dfrac81$, nên mẫu chỉ nhân với $1$. Đúng: $\dfrac{-5}{12}\cdot8=\dfrac{-40}{12}=\dfrac{-10}{3}$.
:::

## Thuật ngữ

:::terms
- phép nhân phân số | multiplication of fractions
- phép chia phân số | division of fractions
- tích | product
- thương | quotient
- phân số nghịch đảo | reciprocal
- tính chất phân phối | distributive property
- thừa số chung | common factor
- rút gọn | simplify
:::

## Tóm tắt

- Nhân: $\dfrac{a}{b}\cdot\dfrac{c}{d}=\dfrac{a\cdot c}{b\cdot d}$; nhân với số nguyên: $\dfrac{a}{b}\cdot m=\dfrac{a\cdot m}{b}$. Nên rút gọn trước khi nhân.
- Phép nhân phân số có tính giao hoán, kết hợp, nhân với $1$ không đổi, phân phối đối với phép cộng.
- Số nghịch đảo của $\dfrac{a}{b}$ ($a\ne0$) là $\dfrac{b}{a}$; tích hai số nghịch đảo bằng $1$; số $0$ không có số nghịch đảo.
- Chia là nhân với số nghịch đảo của số chia: $\dfrac{a}{b}:\dfrac{c}{d}=\dfrac{a}{b}\cdot\dfrac{d}{c}$.

Ô kính ở đầu bài có diện tích $\dfrac34\cdot\dfrac23=\dfrac12\ \text{m}^2$, đúng bằng $6$ trên $12$ ô của hình vuông. Bạn hãy giữ hình vẽ ấy trong đầu: nó giải thích vì sao nhân hai phân số nhỏ hơn $1$ lại cho kết quả nhỏ hơn cả hai. Bài sau, ta dùng phép nhân và phép chia để giải [hai bài toán về phân số](lesson:two-fraction-problems).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Tính:

a) $\dfrac{2}{7}\cdot\dfrac{-14}{5}$;

b) $\dfrac{-9}{10}\cdot\dfrac{-5}{6}$;

c) $\dfrac{-3}{8}\cdot16$.

::hint
**Kiến thức:** $\dfrac{a}{b}\cdot\dfrac{c}{d}=\dfrac{a\cdot c}{b\cdot d}$; cùng dấu thì tích dương, khác dấu thì tích âm.

**Gợi ý các bước:**
1. Xác định dấu của tích.
2. Rút gọn chéo rồi nhân.

::solution
a) Hai thừa số khác dấu nên tích âm. Rút gọn $7$ với $14$:
$$\dfrac{2}{7}\cdot\dfrac{-14}{5}=\dfrac{2\cdot(-14)}{7\cdot5}=\dfrac{2\cdot(-2)}{1\cdot5}=\dfrac{-4}{5}.$$

b) Hai thừa số cùng âm nên tích dương. Rút gọn $9$ với $6$ và $10$ với $5$:
$$\dfrac{-9}{10}\cdot\dfrac{-5}{6}=\dfrac{9\cdot5}{10\cdot6}=\dfrac{3\cdot1}{2\cdot2}=\dfrac{3}{4}.$$

c) Ta có
$$\dfrac{-3}{8}\cdot16=\dfrac{(-3)\cdot16}{8}=(-3)\cdot2=-6.$$

Vậy kết quả lần lượt là $\dfrac{-4}{5}$; $\dfrac{3}{4}$; $-6$.

**Đáp số.** a) $\dfrac{-4}{5}$; b) $\dfrac{3}{4}$; c) $-6$.
:::

:::exercise
Tìm số nghịch đảo của mỗi số sau: $\dfrac{3}{5}$; $\dfrac{-7}{2}$; $-4$; $1$.

::hint
**Kiến thức:** số nghịch đảo của $\dfrac{a}{b}$ là $\dfrac{b}{a}$; tích của hai số nghịch đảo bằng $1$.

**Gợi ý các bước:**
1. Viết số nguyên dưới dạng phân số có mẫu $1$.
2. Đổi chỗ tử và mẫu, đưa về mẫu dương.

::solution
Số nghịch đảo của $\dfrac{3}{5}$ là $\dfrac{5}{3}$.

Số nghịch đảo của $\dfrac{-7}{2}$ là $\dfrac{2}{-7}=\dfrac{-2}{7}$.

Ta có $-4=\dfrac{-4}{1}$, nên số nghịch đảo của $-4$ là $\dfrac{1}{-4}=\dfrac{-1}{4}$.

Vì $1\cdot1=1$ nên số nghịch đảo của $1$ là $1$.

Vậy các số nghịch đảo lần lượt là $\dfrac{5}{3}$; $\dfrac{-2}{7}$; $\dfrac{-1}{4}$; $1$.

**Đáp số.** $\dfrac{5}{3}$; $\dfrac{-2}{7}$; $\dfrac{-1}{4}$; $1$.
:::

:::exercise
Tính:

a) $\dfrac{5}{6}:\dfrac{10}{9}$;

b) $\dfrac{-8}{15}:\dfrac{4}{5}$;

c) $\dfrac{3}{4}:(-6)$.

::hint
**Kiến thức:** $\dfrac{a}{b}:\dfrac{c}{d}=\dfrac{a}{b}\cdot\dfrac{d}{c}$.

**Gợi ý các bước:**
1. Đổi phép chia thành phép nhân với số nghịch đảo của số chia.
2. Rút gọn chéo rồi nhân.

::solution
a) Ta có
$$\dfrac{5}{6}:\dfrac{10}{9}=\dfrac{5}{6}\cdot\dfrac{9}{10}=\dfrac{5\cdot9}{6\cdot10}=\dfrac{1\cdot3}{2\cdot2}=\dfrac{3}{4}.$$

b) Ta có
$$\dfrac{-8}{15}:\dfrac{4}{5}=\dfrac{-8}{15}\cdot\dfrac{5}{4}=\dfrac{(-8)\cdot5}{15\cdot4}=\dfrac{(-2)\cdot1}{3\cdot1}=\dfrac{-2}{3}.$$

c) Số nghịch đảo của $-6$ là $\dfrac{-1}{6}$, nên
$$\dfrac{3}{4}:(-6)=\dfrac{3}{4}\cdot\dfrac{-1}{6}=\dfrac{3\cdot(-1)}{4\cdot6}=\dfrac{-3}{24}=\dfrac{-1}{8}.$$

Vậy kết quả lần lượt là $\dfrac{3}{4}$; $\dfrac{-2}{3}$; $\dfrac{-1}{8}$.

**Đáp số.** a) $\dfrac{3}{4}$; b) $\dfrac{-2}{3}$; c) $\dfrac{-1}{8}$.
:::

:::exercise
Tính một cách hợp lí:

a) $\dfrac{5}{9}\cdot\dfrac{7}{13}+\dfrac{5}{9}\cdot\dfrac{6}{13}$;

b) $\dfrac{-2}{3}\cdot\dfrac{9}{14}\cdot\dfrac{-7}{3}$.

::hint
**Kiến thức:** tính chất phân phối; tính chất giao hoán và kết hợp.

**Gợi ý các bước:**
1. Câu a): đặt thừa số chung $\dfrac59$ ra ngoài.
2. Câu b): xác định dấu, rồi rút gọn chéo cả ba phân số.

::solution
a) Hai tích có thừa số chung là $\dfrac{5}{9}$. Dùng tính chất phân phối:
$$\dfrac{5}{9}\cdot\dfrac{7}{13}+\dfrac{5}{9}\cdot\dfrac{6}{13}=\dfrac{5}{9}\cdot\left(\dfrac{7}{13}+\dfrac{6}{13}\right)=\dfrac{5}{9}\cdot1=\dfrac{5}{9}.$$

b) Tích có hai thừa số âm nên tích dương. Ta có
$$\dfrac{-2}{3}\cdot\dfrac{9}{14}\cdot\dfrac{-7}{3}=\dfrac{2\cdot9\cdot7}{3\cdot14\cdot3}=\dfrac{126}{126}=1.$$

Vậy a) $\dfrac{5}{9}$; b) $1$.

**Đáp số.** a) $\dfrac{5}{9}$; b) $1$.
:::

:::exercise
Tìm $x$, biết:

a) $x\cdot\dfrac{3}{4}=\dfrac{-9}{10}$;

b) $\dfrac{2}{3}:x=\dfrac{-4}{9}$.

::hint
**Kiến thức:** thừa số chưa biết bằng tích chia cho thừa số đã biết; số chia bằng số bị chia chia cho thương.

**Gợi ý các bước:**
1. Viết phép tính tìm $x$.
2. Đổi phép chia thành phép nhân với số nghịch đảo.

::solution
a) Ta có $x\cdot\dfrac{3}{4}=\dfrac{-9}{10}$, nên
$$x=\dfrac{-9}{10}:\dfrac{3}{4}=\dfrac{-9}{10}\cdot\dfrac{4}{3}=\dfrac{(-3)\cdot2}{5\cdot1}=\dfrac{-6}{5}.$$

b) Ta có $\dfrac{2}{3}:x=\dfrac{-4}{9}$. Số chia bằng số bị chia chia cho thương, nên
$$x=\dfrac{2}{3}:\dfrac{-4}{9}=\dfrac{2}{3}\cdot\dfrac{-9}{4}=\dfrac{1\cdot(-3)}{1\cdot2}=\dfrac{-3}{2}.$$

Thử lại: $\dfrac{-6}{5}\cdot\dfrac34=\dfrac{-18}{20}=\dfrac{-9}{10}$; $\dfrac23:\dfrac{-3}{2}=\dfrac23\cdot\dfrac{-2}{3}=\dfrac{-4}{9}$. Cả hai đều đúng.

Vậy a) $x=\dfrac{-6}{5}$; b) $x=\dfrac{-3}{2}$.

**Đáp số.** a) $x=\dfrac{-6}{5}$; b) $x=\dfrac{-3}{2}$.
:::

:::exercise
Một mảnh vườn hình chữ nhật có chiều dài $12\dfrac{1}{2}$ m, chiều rộng bằng $\dfrac{4}{5}$ chiều dài. Tính diện tích mảnh vườn.

::hint
**Kiến thức:** chiều rộng bằng chiều dài nhân $\dfrac45$; diện tích bằng chiều dài nhân chiều rộng.

**Gợi ý các bước:**
1. Đổi hỗn số thành phân số, tính chiều rộng.
2. Tính diện tích.

::solution
Đổi hỗn số thành phân số: $12\dfrac{1}{2}=\dfrac{25}{2}$.

Chiều rộng của mảnh vườn là
$$\dfrac{25}{2}\cdot\dfrac{4}{5}=\dfrac{25\cdot4}{2\cdot5}=\dfrac{5\cdot2}{1\cdot1}=10\ (\text{m}).$$

Diện tích của mảnh vườn là
$$\dfrac{25}{2}\cdot10=125\ (\text{m}^2).$$

Vậy mảnh vườn có diện tích $125\ \text{m}^2$.

**Đáp số.** $125\ \text{m}^2$.
:::

:::exercise
Mẹ mua $2\dfrac{1}{4}$ kg thịt, giá mỗi ki-lô-gam là $120$ nghìn đồng. Hỏi mẹ phải trả bao nhiêu tiền?

::hint
**Kiến thức:** số tiền bằng khối lượng nhân giá tiền một ki-lô-gam.

**Gợi ý các bước:**
1. Đổi hỗn số thành phân số.
2. Nhân với giá tiền.

::solution
Đổi hỗn số thành phân số: $2\dfrac{1}{4}=\dfrac{9}{4}$.

Số tiền mẹ phải trả là
$$\dfrac{9}{4}\cdot120=\dfrac{9\cdot120}{4}=9\cdot30=270\ (\text{nghìn đồng}).$$

Vậy mẹ phải trả $270$ nghìn đồng.

**Đáp số.** $270$ nghìn đồng.
:::

:::exercise
Một xe máy đi quãng đường $90$ km hết $1\dfrac{1}{2}$ giờ. Tính vận tốc trung bình của xe máy.

::hint
**Kiến thức:** vận tốc bằng quãng đường chia cho thời gian.

**Gợi ý các bước:**
1. Đổi $1\dfrac12$ giờ thành phân số.
2. Chia $90$ cho phân số đó.

::solution
Đổi hỗn số thành phân số: $1\dfrac{1}{2}=\dfrac{3}{2}$ (giờ).

Vận tốc trung bình của xe máy là
$$90:\dfrac{3}{2}=90\cdot\dfrac{2}{3}=\dfrac{90\cdot2}{3}=60\ (\text{km/h}).$$

Vậy vận tốc trung bình của xe máy là $60$ km/h.

**Đáp số.** $60$ km/h.
:::

:::exercise Thử thách
Tính tích
$$P=\left(1-\dfrac{1}{2}\right)\cdot\left(1-\dfrac{1}{3}\right)\cdot\left(1-\dfrac{1}{4}\right)\cdots\left(1-\dfrac{1}{10}\right).$$

::hint
**Kiến thức:** $1-\dfrac{1}{n}=\dfrac{n-1}{n}$; khi nhân, tử của phân số này rút gọn được với mẫu của phân số kia.

**Gợi ý các bước:**
1. Tính từng thừa số trong ngoặc.
2. Viết tích ra rồi xem các số nào rút gọn được với nhau.

::solution
Ta có $1-\dfrac{1}{n}=\dfrac{n-1}{n}$, nên
$$P=\dfrac{1}{2}\cdot\dfrac{2}{3}\cdot\dfrac{3}{4}\cdots\dfrac{9}{10}=\dfrac{1\cdot2\cdot3\cdots9}{2\cdot3\cdot4\cdots10}.$$

Các thừa số $2$; $3$; …; $9$ có mặt cả ở tử và ở mẫu nên rút gọn được. Ở tử chỉ còn $1$, ở mẫu chỉ còn $10$. Do đó
$$P=\dfrac{1}{10}.$$

Vậy $P=\dfrac{1}{10}$.

**Đáp số.** $P=\dfrac{1}{10}$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của phép tính $\dfrac{-2}{3}\cdot\dfrac{3}{4}$ là
A. $\dfrac{-1}{2}$.
B. $\dfrac{1}{2}$.
C. $\dfrac{-8}{9}$.
D. $\dfrac{1}{12}$.
::key A
$\dfrac{(-2)\cdot3}{3\cdot4}=\dfrac{-6}{12}=\dfrac{-1}{2}$. B sai dấu; C nhân chéo tử với mẫu; D là tổng $\dfrac{-2}{3}+\dfrac34$.

::mc
Số nghịch đảo của $\dfrac{-5}{8}$ là
A. $\dfrac{5}{8}$.
B. $\dfrac{8}{5}$.
C. $\dfrac{-8}{5}$.
D. $\dfrac{-5}{8}$.
::key C
$\dfrac{-5}{8}\cdot\dfrac{-8}{5}=1$. A là số đối; B sai dấu; D là chính số đó.

::mc
Kết quả của phép tính $\dfrac{4}{5}:\dfrac{2}{15}$ là
A. $\dfrac{8}{75}$.
B. $6$.
C. $\dfrac{1}{6}$.
D. $\dfrac{8}{15}$.
::key B
$\dfrac45\cdot\dfrac{15}{2}=\dfrac{60}{10}=6$. A nhân luôn không đảo; C đảo nhầm số bị chia; D chỉ nhân hai tử, giữ mẫu $15$.

::mc
Một xe đi với vận tốc $40$ km/h trong $\dfrac34$ giờ. Quãng đường xe đi được là
A. $\dfrac{160}{3}$ km.
B. $10$ km.
C. $43$ km.
D. $30$ km.
::key D
$40\cdot\dfrac34=30$ km. A chia thay vì nhân; B chỉ nhân với $\dfrac14$; C cộng $40+3$.

::tf
Cho hai phân số $\dfrac{-2}{3}$ và $\dfrac{3}{2}$. Xét tính đúng sai của các mệnh đề sau:
a) Hai phân số này là nghịch đảo của nhau.
b) Tích của hai phân số này bằng $-1$.
c) $\dfrac{-2}{3}:\dfrac{3}{2}=\dfrac{-4}{9}$.
d) $\dfrac{3}{2}\cdot\dfrac{-2}{3}\cdot(-1)=1$.
::key S Đ Đ Đ
a) Sai: tích của chúng bằng $-1$, không bằng $1$. b) Đúng: $\dfrac{-6}{6}=-1$. c) Đúng: $\dfrac{-2}{3}\cdot\dfrac23=\dfrac{-4}{9}$. d) Đúng: $(-1)\cdot(-1)=1$.

::sa
Tính $\dfrac{5}{6}:\dfrac{5}{12}$.
::key 2
$\dfrac56\cdot\dfrac{12}{5}=\dfrac{12}{6}=2$.

::sa
Một thanh gỗ dài $\dfrac{9}{2}$ m được cắt thành các đoạn dài $\dfrac{3}{4}$ m. Cắt được bao nhiêu đoạn?
::key 6
$\dfrac92:\dfrac34=\dfrac92\cdot\dfrac43=\dfrac{36}{6}=6$ (đoạn).
:::
