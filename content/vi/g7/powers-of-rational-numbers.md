---
title: Lũy thừa với số mũ tự nhiên của một số hữu tỉ
description: Hiểu lũy thừa bậc n của số hữu tỉ và dùng quy tắc nhân, chia, lũy thừa của lũy thừa, của một tích, của một thương để tính nhanh.
minutes: 35
---

:::goals
- Phát biểu được định nghĩa lũy thừa với số mũ tự nhiên của một số hữu tỉ; biết cơ số, số mũ và quy ước $x^1=x$, $x^0=1$.
- Phân biệt $(-2)^2$ với $-2^2$, và viết đúng $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$ cả ở tử lẫn mẫu.
- Vận dụng các quy tắc: tích và thương hai lũy thừa cùng cơ số, lũy thừa của lũy thừa, lũy thừa của một tích, của một thương.
- Giải được bài toán thực tế về thể tích, diện tích và lãi kép.
:::

Một bể nước hình lập phương có cạnh $\dfrac32$ m. Thể tích của bể là tích của ba thừa số bằng nhau, và người thợ chỉ viết gọn là $\left(\dfrac32\right)^3$ m³. Bể chứa được bao nhiêu lít nước? Nếu làm bể có cạnh gấp đôi thì bể chứa được gấp mấy lần? Câu sau nghe như phải tính lại từ đầu, nhưng ta sẽ thấy không cần.

Ở lớp 6, bạn đã viết $2\cdot2\cdot2$ thành $2^3$ với cơ số là số tự nhiên. Bài này cho phép cơ số là số hữu tỉ bất kì, kể cả số âm và phân số. Hai chỗ nhiều bạn hay nhầm là dấu và phân số, nên ta sẽ đi chậm ở hai chỗ ấy.

## Lũy thừa của một số hữu tỉ

Ta tính thử với phân số trước:

$$\left(\dfrac23\right)^2=\dfrac23\cdot\dfrac23=\dfrac{2\cdot2}{3\cdot3}=\dfrac{4}{9}=\dfrac{2^2}{3^2}.$$

Cả tử lẫn mẫu đều được nâng lên lũy thừa. Với cơ số âm, ta viết các lũy thừa liên tiếp của $-2$:

$$(-2)^1=-2,\quad (-2)^2=4,\quad (-2)^3=-8,\quad (-2)^4=16.$$

Dấu đổi luân phiên. Vì sao? Hai thừa số âm nhân nhau cho số dương, nên ta ghép các thừa số âm thành từng cặp: số thừa số chẵn thì ghép hết, kết quả dương; số thừa số lẻ thì còn thừa một số âm, kết quả âm.

:::definition Lũy thừa với số mũ tự nhiên
Lũy thừa bậc $n$ của số hữu tỉ $x$, kí hiệu $x^n$, là tích của $n$ thừa số $x$ ($n$ là số tự nhiên lớn hơn $1$):

$$x^n=\underbrace{x\cdot x\cdots x}_{n\ \text{thừa số}}.$$

Ta gọi $x$ là **cơ số**, $n$ là **số mũ**. Quy ước $x^1=x$ và $x^0=1$ (với $x\neq0$).

Với $x=\dfrac ab$ ($b\neq0$), ta có $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$.
:::

:::note Dấu của lũy thừa
Cơ số dương thì lũy thừa luôn dương. Cơ số âm thì lũy thừa với số mũ chẵn là số dương, lũy thừa với số mũ lẻ là số âm.
:::

Vì sao lại quy ước $x^0=1$? Vì ở phần sau, thương $x^n:x^n$ phải bằng $1$ và cũng phải bằng $x^{n-n}=x^0$. Còn $0^0$ thì không có nghĩa, nên ta luôn ghi $x\neq0$.

## Tích và thương hai lũy thừa cùng cơ số

Hãy viết ra các thừa số:

$$2^3\cdot2^4=(2\cdot2\cdot2)\cdot(2\cdot2\cdot2\cdot2)=2^7,\qquad \dfrac{5^6}{5^2}=\dfrac{5\cdot5\cdot5\cdot5\cdot5\cdot5}{5\cdot5}=5^4.$$

Phép nhân gộp thêm thừa số nên số mũ cộng lại; phép chia gạch bớt thừa số nên số mũ trừ đi.

:::theorem Tích và thương hai lũy thừa cùng cơ số
Với $x$ là số hữu tỉ, $m$, $n$ là số tự nhiên:

- $x^m\cdot x^n=x^{m+n}$;
- $x^m:x^n=x^{m-n}$ ($x\neq0$, $m\geq n$).
:::

## Lũy thừa của lũy thừa, của một tích, của một thương

Thử với $\left(2^3\right)^2=2^3\cdot2^3=2^6$: có $2$ nhóm, mỗi nhóm $3$ thừa số $2$, tổng cộng $3\cdot2=6$ thừa số. Với một tích, $(2\cdot3)^2=(2\cdot3)(2\cdot3)=2\cdot2\cdot3\cdot3=2^2\cdot3^2$: ta chỉ đổi chỗ các thừa số.

:::theorem Lũy thừa của lũy thừa, của một tích, của một thương
Với $x$, $y$ là số hữu tỉ, $m$, $n$ là số tự nhiên:

- $\left(x^m\right)^n=x^{m\cdot n}$;
- $(x\cdot y)^n=x^n\cdot y^n$;
- $\left(\dfrac xy\right)^n=\dfrac{x^n}{y^n}$ ($y\neq0$).
:::

Đọc các đẳng thức ấy theo cả hai chiều: chiều từ phải sang trái cho ta cách tính nhanh, vì $x^n\cdot y^n=(xy)^n$ gom hai lũy thừa cùng số mũ lại.

:::example Tính lũy thừa của số hữu tỉ
Tính:

a) $\left(-\dfrac34\right)^2$;

b) $\left(-\dfrac23\right)^3$;

c) $(-0{,}3)^2$.

**Lời giải.** Ta áp dụng định nghĩa, và nhớ rằng cơ số âm với số mũ chẵn cho kết quả dương, với số mũ lẻ cho kết quả âm.

a) Ta có $\left(-\dfrac34\right)^2=\dfrac{(-3)^2}{4^2}=\dfrac{9}{16}$.

b) Ta có $\left(-\dfrac23\right)^3=\dfrac{(-2)^3}{3^3}=\dfrac{-8}{27}=-\dfrac{8}{27}$.

c) Ta có $(-0{,}3)^2=(-0{,}3)\cdot(-0{,}3)=0{,}09$.

Vậy kết quả là $\dfrac9{16}$; $-\dfrac8{27}$; $0{,}09$.

**Đáp số.** a) $\dfrac9{16}$. b) $-\dfrac8{27}$. c) $0{,}09$.
:::

Bây giờ ta dùng hai quy tắc đầu để viết gọn một biểu thức.

:::example Viết dưới dạng một lũy thừa
Viết mỗi biểu thức sau dưới dạng một lũy thừa:

a) $\left(\dfrac12\right)^3\cdot\left(\dfrac12\right)^5$;

b) $(-3)^7:(-3)^4$;

c) $\left[\left(\dfrac23\right)^2\right]^3$.

**Lời giải.**

a) Hai lũy thừa có cùng cơ số $\dfrac12$, nên ta giữ cơ số và cộng số mũ: $\left(\dfrac12\right)^3\cdot\left(\dfrac12\right)^5=\left(\dfrac12\right)^{3+5}=\left(\dfrac12\right)^8$.

b) Hai lũy thừa có cùng cơ số $-3$, nên ta giữ cơ số và trừ số mũ: $(-3)^7:(-3)^4=(-3)^{7-4}=(-3)^3$.

c) Ta nhân hai số mũ: $\left[\left(\dfrac23\right)^2\right]^3=\left(\dfrac23\right)^{2\cdot3}=\left(\dfrac23\right)^6$.

Vậy ta được $\left(\dfrac12\right)^8$; $(-3)^3$; $\left(\dfrac23\right)^6$.

**Đáp số.** a) $\left(\dfrac12\right)^8$. b) $(-3)^3$. c) $\left(\dfrac23\right)^6$.
:::

Tiếp theo là chiều "từ phải sang trái" của quy tắc lũy thừa của một tích, thường cho lời giải rất gọn.

:::example Tính nhanh
Tính:

a) $(0{,}125)^3\cdot8^3$;

b) $\dfrac{12^4}{6^4}$;

c) $\left(\dfrac35\right)^3\cdot\left(\dfrac{10}3\right)^3$.

**Lời giải.** Ở cả ba câu, hai lũy thừa có cùng số mũ, nên ta gom lại bằng $x^n\cdot y^n=(xy)^n$ hoặc $\dfrac{x^n}{y^n}=\left(\dfrac xy\right)^n$.

a) Ta có $(0{,}125)^3\cdot8^3=(0{,}125\cdot8)^3=1^3=1$.

b) Ta có $\dfrac{12^4}{6^4}=\left(\dfrac{12}{6}\right)^4=2^4=16$.

c) Ta có $\left(\dfrac35\right)^3\cdot\left(\dfrac{10}3\right)^3=\left(\dfrac35\cdot\dfrac{10}3\right)^3=2^3=8$.

Vậy kết quả là $1$; $16$; $8$.

**Đáp số.** a) $1$. b) $16$. c) $8$.
:::

Có những lũy thừa lớn đến mức không thể bấm máy, nhưng vẫn so sánh được nếu ta đưa về cùng số mũ.

:::example So sánh hai lũy thừa
So sánh $2^{300}$ và $3^{200}$.

**Lời giải.** Hai số mũ $300$ và $200$ cùng chia hết cho $100$, nên ta đưa cả hai về lũy thừa bậc $100$.

Ta có $2^{300}=\left(2^3\right)^{100}=8^{100}$ và $3^{200}=\left(3^2\right)^{100}=9^{100}$.

Vì $8<9$ nên $8^{100}<9^{100}$ (hai số dương có cùng số mũ, cơ số nào lớn hơn thì lũy thừa lớn hơn).

Suy ra $2^{300}<3^{200}$.

Vậy $2^{300}<3^{200}$.

**Đáp số.** $2^{300}<3^{200}$.
:::

Cuối cùng, ta quay lại bể nước ở đầu bài, đi đủ bốn bước.

:::example Thể tích bể nước
Một bể nước hình lập phương có cạnh $\dfrac32$ m.

a) Tính thể tích của bể theo mét khối, rồi đổi ra lít ($1$ m³ $=1000$ lít).

b) Nếu làm một bể khác có cạnh gấp đôi thì thể tích gấp mấy lần?

**Lời giải.**

*Hiểu đề.* Bể là hình lập phương cạnh $a=\dfrac32$ m. Cần tìm $V$ theo lít, và tỉ số hai thể tích khi cạnh gấp đôi.

*Tìm cách giải.* Thể tích hình lập phương cạnh $a$ là $V=a^3$. Ở câu b, cạnh mới là $2a$, nên thể tích mới là $(2a)^3$; ta dùng lũy thừa của một tích.

*Giải.*

a) Ta có $V=\left(\dfrac32\right)^3=\dfrac{3^3}{2^3}=\dfrac{27}{8}$ (m³). Đổi ra lít: $\dfrac{27}{8}\cdot1000=3375$ (lít).

b) Cạnh mới là $2\cdot\dfrac32=3$ m, nên thể tích mới là $3^3=27$ m³. Tỉ số hai thể tích là $27:\dfrac{27}8=8$.

Vậy bể chứa được $3375$ lít, và bể có cạnh gấp đôi chứa được gấp $8$ lần.

*Nhìn lại.* Ta cũng có $(2a)^3=2^3\cdot a^3=8a^3$, nên kết quả $8$ không phụ thuộc vào $a$. Nếu cạnh gấp ba thì thể tích gấp mấy lần?

**Đáp số.** $3375$ lít; gấp $8$ lần.
:::

Lãi kép là chỗ lũy thừa xuất hiện thường xuyên nhất ở đời sống.

:::example Lãi kép
Giả sử một ngân hàng nhận gửi tiền kì hạn $1$ năm với lãi suất $5\%$ một năm, hết kì hạn thì tiền lãi được cộng vào gốc để gửi tiếp. Bà Hà gửi $80$ triệu đồng và không rút trong $3$ năm. Hỏi sau $3$ năm, bà có bao nhiêu triệu đồng?

**Lời giải.** Gọi $T$ (triệu đồng) là số tiền sau $3$ năm.

Sau mỗi năm, số tiền được nhân với $1+\dfrac{5}{100}=\dfrac{21}{20}$.

Do đó sau $3$ năm, ta có $T=80\cdot\left(\dfrac{21}{20}\right)^3=80\cdot\dfrac{21^3}{20^3}=80\cdot\dfrac{9261}{8000}=\dfrac{9261}{100}=92{,}61$.

Vậy sau $3$ năm bà Hà có $92{,}61$ triệu đồng.

**Đáp số.** $92{,}61$ triệu đồng.
:::

:::warning Những lỗi hay gặp
- **Nhầm dấu.** Sai: $(-2)^2=-4$, hoặc $-2^2=4$. Vì sao sai: $(-2)^2$ nâng cả số $-2$ lên bình phương, còn $-2^2$ chỉ nâng số $2$ lên bình phương rồi mới lấy số đối. Đúng: $(-2)^2=4$ và $-2^2=-4$.
- **Chỉ nâng tử (hoặc mẫu) lên lũy thừa.** Sai: $\left(\dfrac23\right)^2=\dfrac{2^2}{3}=\dfrac43$. Vì sao sai: lũy thừa của cả phân số là tích hai phân số giống nhau, nên cả tử và mẫu đều nhân hai lần. Đúng: $\left(\dfrac23\right)^2=\dfrac{2^2}{3^2}=\dfrac49$.
- **Lẫn quy tắc cộng và nhân số mũ.** Sai: $2^3\cdot2^4=2^{12}$, hoặc $\left(2^3\right)^4=2^7$. Vì sao sai: nhân hai lũy thừa cùng cơ số thì cộng số mũ; lũy thừa của lũy thừa thì nhân số mũ. Đúng: $2^3\cdot2^4=2^7$ và $\left(2^3\right)^4=2^{12}$.
- **Tách lũy thừa của một tổng.** Sai: $(2+3)^2=2^2+3^2=13$. Vì sao sai: quy tắc chỉ dành cho tích và thương. Đúng: $(2+3)^2=5^2=25$.
:::

**Kết nối.** Bài này dựa trên lũy thừa của số tự nhiên ở lớp 6 và các phép tính với số hữu tỉ. Các quy tắc ở đây sẽ còn dùng khi ta học số thực và căn bậc hai, và trong các môn khoa học khi viết những số rất lớn, rất nhỏ.

## Thuật ngữ

:::terms
- lũy thừa | power
- cơ số | base
- số mũ | exponent (index)
- số hữu tỉ | rational number
- bình phương | square
- lập phương | cube
- tích | product
- thương | quotient
- lãi kép | compound interest
- thể tích | volume
:::

## Tóm tắt

- $x^n$ là tích của $n$ thừa số $x$; $x^1=x$, $x^0=1$ ($x\neq0$); $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$.
- Cơ số âm: số mũ chẵn cho kết quả dương, số mũ lẻ cho kết quả âm; $(-2)^2=4$ còn $-2^2=-4$.
- $x^m\cdot x^n=x^{m+n}$ và $x^m:x^n=x^{m-n}$: giữ cơ số, cộng hoặc trừ số mũ.
- $\left(x^m\right)^n=x^{mn}$, $(xy)^n=x^ny^n$, $\left(\dfrac xy\right)^n=\dfrac{x^n}{y^n}$.

Vậy bể nước cạnh $\dfrac32$ m chứa $3375$ lít, và cạnh gấp đôi thì thể tích gấp $2^3=8$ lần. Bạn hãy làm bài tập rồi so với lời giải để kiểm tra mình đã nắm chắc dấu và phân số chưa.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính:

a) $\left(\dfrac35\right)^2$;

b) $\left(-\dfrac12\right)^5$;

c) $(-0{,}4)^2$;

d) $(-1)^{2027}$.

::hint
**Kiến thức:** $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$; cơ số âm với số mũ chẵn cho kết quả dương, với số mũ lẻ cho kết quả âm.

**Gợi ý các bước:**
1. Ở câu a và b, nâng cả tử và mẫu lên lũy thừa.
2. Ở câu d, số mũ $2027$ chẵn hay lẻ?

::solution
a) Ta có $\left(\dfrac35\right)^2=\dfrac{3^2}{5^2}=\dfrac9{25}$.

b) Số mũ $5$ lẻ nên kết quả âm: $\left(-\dfrac12\right)^5=\dfrac{(-1)^5}{2^5}=-\dfrac1{32}$.

c) Số mũ $2$ chẵn nên kết quả dương: $(-0{,}4)^2=0{,}4\cdot0{,}4=0{,}16$.

d) Số mũ $2027$ lẻ nên $(-1)^{2027}=-1$.

Vậy kết quả là $\dfrac9{25}$; $-\dfrac1{32}$; $0{,}16$; $-1$.

**Đáp số.** a) $\dfrac9{25}$. b) $-\dfrac1{32}$. c) $0{,}16$. d) $-1$.
:::

:::exercise
Tính và so sánh:

a) $(-3)^2$;

b) $-3^2$;

c) $\left(-\dfrac23\right)^2$;

d) $-\left(\dfrac23\right)^2$.

::hint
**Kiến thức:** $(-a)^2$ nâng cả số $-a$ lên bình phương; $-a^2$ là số đối của $a^2$.

**Gợi ý các bước:**
1. Câu a và c: dấu trừ nằm trong ngoặc cùng cơ số.
2. Câu b và d: tính bình phương trước rồi mới lấy số đối.

::solution
a) Ta có $(-3)^2=(-3)\cdot(-3)=9$.

b) Ta có $-3^2=-(3\cdot3)=-9$.

c) Ta có $\left(-\dfrac23\right)^2=\dfrac{(-2)^2}{3^2}=\dfrac49$.

d) Ta có $-\left(\dfrac23\right)^2=-\dfrac{2^2}{3^2}=-\dfrac49$.

Vậy hai biểu thức ở mỗi cặp có giá trị đối nhau, vì dấu trừ ở câu a và c nằm trong cơ số, còn ở câu b và d nằm ngoài lũy thừa.

**Đáp số.** a) $9$. b) $-9$. c) $\dfrac49$. d) $-\dfrac49$.
:::

:::exercise
Viết mỗi biểu thức sau dưới dạng một lũy thừa:

a) $\left(\dfrac34\right)^2\cdot\left(\dfrac34\right)^3$;

b) $(-0{,}5)^6:(-0{,}5)^2$;

c) $\left[\left(-\dfrac25\right)^3\right]^2$;

d) $2^3\cdot2^5:2^4$ (rồi tính giá trị).

::hint
**Kiến thức:** $x^m\cdot x^n=x^{m+n}$; $x^m:x^n=x^{m-n}$; $\left(x^m\right)^n=x^{mn}$.

**Gợi ý các bước:**
1. Xác định cơ số của mỗi câu.
2. Câu d: thực hiện từ trái sang phải, nhân trước rồi chia.

::solution
a) Hai lũy thừa cùng cơ số $\dfrac34$: $\left(\dfrac34\right)^2\cdot\left(\dfrac34\right)^3=\left(\dfrac34\right)^{2+3}=\left(\dfrac34\right)^5$.

b) Hai lũy thừa cùng cơ số $-0{,}5$: $(-0{,}5)^6:(-0{,}5)^2=(-0{,}5)^{6-2}=(-0{,}5)^4$.

c) Ta nhân số mũ: $\left[\left(-\dfrac25\right)^3\right]^2=\left(-\dfrac25\right)^{3\cdot2}=\left(-\dfrac25\right)^6$.

d) Ta có $2^3\cdot2^5=2^8$, rồi $2^8:2^4=2^{8-4}=2^4=16$.

Vậy kết quả là $\left(\dfrac34\right)^5$; $(-0{,}5)^4$; $\left(-\dfrac25\right)^6$; $2^4=16$.

**Đáp số.** a) $\left(\dfrac34\right)^5$. b) $(-0{,}5)^4$. c) $\left(-\dfrac25\right)^6$. d) $2^4=16$.
:::

:::exercise
Tính nhanh:

a) $(0{,}25)^3\cdot4^3$;

b) $15^5:3^5$;

c) $\left(\dfrac12\right)^3\cdot6^3$.

::hint
**Kiến thức:** $x^n\cdot y^n=(xy)^n$ và $x^n:y^n=\left(\dfrac xy\right)^n$ khi hai lũy thừa có cùng số mũ.

**Gợi ý các bước:**
1. Câu a: $0{,}25\cdot4$ bằng bao nhiêu?
2. Câu b: $15:3$ bằng bao nhiêu?
3. Câu c: $\dfrac12\cdot6$ bằng bao nhiêu?

::solution
a) Ta có $(0{,}25)^3\cdot4^3=(0{,}25\cdot4)^3=1^3=1$.

b) Ta có $15^5:3^5=(15:3)^5=5^5=3125$.

c) Ta có $\left(\dfrac12\right)^3\cdot6^3=\left(\dfrac12\cdot6\right)^3=3^3=27$.

Vậy kết quả là $1$; $3125$; $27$.

**Đáp số.** a) $1$. b) $3125$. c) $27$.
:::

:::exercise
Tìm số hữu tỉ $x$ (hoặc số tự nhiên $n$) biết:

a) $x^2=\dfrac{25}{36}$;

b) $x^3=-\dfrac{27}{64}$;

c) $\left(-\dfrac23\right)^n=\dfrac{16}{81}$.

::hint
**Kiến thức:** lũy thừa bậc chẵn của hai số đối nhau thì bằng nhau; lũy thừa bậc lẻ của số âm là số âm.

**Gợi ý các bước:**
1. Câu a: $25=5^2$ và $36=6^2$; có hai số thoả mãn.
2. Câu b: $27=3^3$ và $64=4^3$; kết quả là số âm.
3. Câu c: viết ra các lũy thừa $\left(-\dfrac23\right)^1$, $\left(-\dfrac23\right)^2$, … cho đến khi gặp $\dfrac{16}{81}$.

::solution
a) Ta có $\dfrac{25}{36}=\left(\dfrac56\right)^2=\left(-\dfrac56\right)^2$. Vậy $x=\dfrac56$ hoặc $x=-\dfrac56$.

b) Ta có $-\dfrac{27}{64}=\left(-\dfrac34\right)^3$. Vậy $x=-\dfrac34$.

c) Ta có $\left(-\dfrac23\right)^1=-\dfrac23$, $\left(-\dfrac23\right)^2=\dfrac49$, $\left(-\dfrac23\right)^3=-\dfrac8{27}$ và $\left(-\dfrac23\right)^4=\dfrac{16}{81}$. Các lũy thừa sau có giá trị tuyệt đối nhỏ dần nên $n=4$ là số duy nhất thoả mãn. Vậy $n=4$.

**Đáp số.** a) $x=\pm\dfrac56$. b) $x=-\dfrac34$. c) $n=4$.
:::

:::exercise
So sánh:

a) $2^{500}$ và $5^{200}$;

b) $\left(\dfrac13\right)^{20}$ và $\left(\dfrac19\right)^{10}$.

::hint
**Kiến thức:** đưa về cùng số mũ hoặc cùng cơ số nhờ $\left(x^m\right)^n=x^{mn}$.

**Gợi ý các bước:**
1. Câu a: $500$ và $200$ cùng chia hết cho $100$; viết $2^{500}=\left(2^5\right)^{100}$.
2. Câu b: viết $\dfrac19=\left(\dfrac13\right)^2$.

::solution
a) Ta có $2^{500}=\left(2^5\right)^{100}=32^{100}$ và $5^{200}=\left(5^2\right)^{100}=25^{100}$. Vì $32>25$ nên $32^{100}>25^{100}$. Vậy $2^{500}>5^{200}$.

b) Ta có $\dfrac19=\left(\dfrac13\right)^2$ nên $\left(\dfrac19\right)^{10}=\left[\left(\dfrac13\right)^2\right]^{10}=\left(\dfrac13\right)^{20}$. Vậy hai số bằng nhau.

**Đáp số.** a) $2^{500}>5^{200}$. b) Hai số bằng nhau.
:::

:::exercise
Một chiếc thùng nhựa hình lập phương có cạnh $0{,}4$ m.

a) Thùng chứa tối đa bao nhiêu lít nước? ($1$ m³ $=1000$ lít)

b) Nếu cạnh thùng giảm đi một nửa (còn $0{,}2$ m) thì thùng chứa tối đa bao nhiêu lít?

::hint
**Kiến thức:** thể tích hình lập phương cạnh $a$ là $a^3$; $1$ m³ $=1000$ lít.

**Gợi ý các bước:**
1. Tính $(0{,}4)^3$ theo mét khối.
2. Đổi sang lít bằng cách nhân với $1000$.
3. Làm tương tự với cạnh $0{,}2$ m, rồi so với câu a.

::solution
a) Thể tích thùng là $(0{,}4)^3=0{,}4\cdot0{,}4\cdot0{,}4=0{,}064$ (m³). Đổi ra lít: $0{,}064\cdot1000=64$ (lít).

b) Với cạnh $0{,}2$ m, thể tích là $(0{,}2)^3=0{,}008$ (m³), tức là $0{,}008\cdot1000=8$ (lít).

Vậy thùng cạnh $0{,}4$ m chứa tối đa $64$ lít, thùng cạnh $0{,}2$ m chứa tối đa $8$ lít, ít hơn $8$ lần vì $\left(\dfrac12\right)^3=\dfrac18$.

**Đáp số.** a) $64$ lít. b) $8$ lít.
:::

:::exercise
Giả sử một ngân hàng nhận gửi tiền kì hạn $1$ năm với lãi suất $4\%$ một năm, hết kì hạn tiền lãi được cộng vào gốc để gửi tiếp. Chú Hùng gửi $50$ triệu đồng và không rút trong $2$ năm. Hỏi sau $2$ năm, chú Hùng có bao nhiêu triệu đồng?

::hint
**Kiến thức:** mỗi năm số tiền được nhân với $1+\dfrac{4}{100}$; sau $n$ năm, tiền gốc được nhân với lũy thừa bậc $n$ của số đó.

**Gợi ý các bước:**
1. Viết $1+\dfrac4{100}$ thành phân số tối giản $\dfrac{26}{25}$.
2. Số tiền sau $2$ năm là $50\cdot\left(\dfrac{26}{25}\right)^2$.

::solution
Gọi $T$ (triệu đồng) là số tiền sau $2$ năm.

Mỗi năm số tiền được nhân với $1+\dfrac4{100}=\dfrac{26}{25}$.

Do đó $T=50\cdot\left(\dfrac{26}{25}\right)^2=50\cdot\dfrac{676}{625}=\dfrac{1352}{25}=54{,}08$.

Vậy sau $2$ năm chú Hùng có $54{,}08$ triệu đồng.

**Đáp số.** $54{,}08$ triệu đồng.
:::

:::exercise
Tính giá trị của biểu thức $A=\left(-\dfrac12\right)^3+\left(\dfrac23\right)^2$.

::hint
**Kiến thức:** tính từng lũy thừa trước, rồi cộng hai số hữu tỉ bằng cách quy đồng mẫu số.

**Gợi ý các bước:**
1. $\left(-\dfrac12\right)^3=-\dfrac18$ và $\left(\dfrac23\right)^2=\dfrac49$.
2. Mẫu chung của $8$ và $9$ là $72$.

::solution
Ta có $\left(-\dfrac12\right)^3=\dfrac{(-1)^3}{2^3}=-\dfrac18$ và $\left(\dfrac23\right)^2=\dfrac{2^2}{3^2}=\dfrac49$.

Quy đồng mẫu số hai phân số với mẫu chung $72$:

$$A=-\dfrac18+\dfrac49=-\dfrac{9}{72}+\dfrac{32}{72}=\dfrac{23}{72}.$$

Vậy $A=\dfrac{23}{72}$.

**Đáp số.** $A=\dfrac{23}{72}$.
:::

:::exercise Thử thách
a) Tìm số tự nhiên $n$ biết $27^n=3^{12}$.

b) Chứng minh rằng $7^6+7^5-7^4$ chia hết cho $11$.

::hint
**Kiến thức:** $27=3^3$; hai lũy thừa cùng cơ số $3$ bằng nhau thì số mũ bằng nhau; đặt thừa số chung $7^4$.

**Gợi ý các bước:**
1. a) Viết $27^n=\left(3^3\right)^n$ rồi so số mũ.
2. b) Đặt $7^4$ ra ngoài, tính biểu thức trong ngoặc.

::solution
a) Ta có $27^n=\left(3^3\right)^n=3^{3n}$. Do đó $3^{3n}=3^{12}$, suy ra $3n=12$, tức là $n=4$.

b) Ta có $7^6+7^5-7^4=7^4\cdot\left(7^2+7-1\right)=7^4\cdot(49+7-1)=7^4\cdot55$. Vì $55=11\cdot5$ nên $7^4\cdot55$ chia hết cho $11$. Vậy $7^6+7^5-7^4$ chia hết cho $11$.

**Đáp số.** a) $n=4$. b) Chứng minh xong.
:::

## Kiểm tra mini

:::quiz
::mc
Giá trị của $\left(-\dfrac23\right)^3$ là
A. $\dfrac{8}{27}$.
B. $-\dfrac{8}{27}$.
C. $-\dfrac{8}{9}$.
D. $-\dfrac{6}{27}$.
::key B
Cơ số âm, số mũ lẻ nên kết quả âm; cả tử và mẫu đều được nâng lên lũy thừa: $\dfrac{(-2)^3}{3^3}=-\dfrac8{27}$. A quên dấu, C chỉ nâng tử, D lấy tích $2\cdot3$.

::mc
Viết $\left(\dfrac12\right)^3\cdot\left(\dfrac12\right)^4$ dưới dạng một lũy thừa, ta được
A. $\left(\dfrac14\right)^7$.
B. $\left(\dfrac12\right)^{12}$.
C. $\left(\dfrac12\right)^7$.
D. $\left(\dfrac12\right)^1$.
::key C
Cùng cơ số nên giữ cơ số và cộng số mũ: $3+4=7$. B nhân số mũ, A nhân cơ số, D trừ số mũ.

::mc
Giá trị của $\left(\dfrac35\right)^2$ là
A. $\dfrac95$.
B. $\dfrac65$.
C. $\dfrac9{10}$.
D. $\dfrac9{25}$.
::key D
Cả tử và mẫu cùng được bình phương: $\dfrac{3^2}{5^2}=\dfrac9{25}$. A chỉ bình phương tử, B nhân tử với $2$, C lấy $3^2$ chia cho $5\cdot2$.

::mc
Số nào sau đây bằng $\left(2^3\right)^4$?
A. $2^{12}$.
B. $2^7$.
C. $2^{81}$.
D. $8^7$.
::key A
Lũy thừa của lũy thừa thì nhân số mũ: $3\cdot4=12$. A cộng số mũ, C lấy $3^4$ làm số mũ, D cộng số mũ khi đã đổi cơ số.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) $-2^2=4$.
b) $\left(\dfrac23\right)^3=\dfrac8{27}$.
c) $5^6:5^2=5^4$.
d) $\left(3^2\right)^3=3^5$.
::key S Đ Đ S
a) Sai: $-2^2=-4$, còn $(-2)^2=4$. b) Đúng: $\dfrac{2^3}{3^3}=\dfrac8{27}$. c) Đúng: trừ số mũ, $6-2=4$. d) Sai: nhân số mũ, $\left(3^2\right)^3=3^6$.

::sa
Tính $(0{,}5)^3\cdot8^3$.
::key 64
Ta có $(0{,}5)^3\cdot8^3=(0{,}5\cdot8)^3=4^3=64$.

::sa
Một hộp hình lập phương có cạnh $0{,}3$ m. Hộp chứa tối đa bao nhiêu lít nước? ($1$ m³ $=1000$ lít)
::key 27
Thể tích là $(0{,}3)^3=0{,}027$ m³, đổi ra lít là $0{,}027\cdot1000=27$ lít.
:::
