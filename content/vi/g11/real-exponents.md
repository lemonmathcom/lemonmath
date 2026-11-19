---
title: Luỹ thừa với số mũ thực
description: Mở rộng luỹ thừa từ số mũ nguyên sang số mũ hữu tỉ và số mũ thực, nắm các tính chất, rút gọn, so sánh và vận dụng vào bài toán lãi kép, tăng trưởng.
minutes: 25
---

:::goals
- Nhắc lại luỹ thừa với số mũ nguyên và căn bậc $n$; hiểu vì sao luỹ thừa với số mũ hữu tỉ, số mũ thực chỉ xét cho cơ số dương.
- Tính được giá trị của luỹ thừa với số mũ nguyên, hữu tỉ và căn bậc $n$.
- Dùng các tính chất của luỹ thừa để rút gọn biểu thức và so sánh các luỹ thừa.
- Vận dụng luỹ thừa với số mũ thực vào bài toán lãi kép và tăng trưởng.
:::

Giả sử bạn gửi $100$ triệu đồng vào ngân hàng với lãi suất $6\%$ một năm, lãi kép (số liệu giả định). Sau mỗi năm, số tiền được nhân với $1{,}06$: sau $2$ năm là $100\cdot1{,}06^2=112{,}36$ triệu đồng, sau $3$ năm là $100\cdot1{,}06^3=119{,}1016$ triệu đồng.

Còn sau $2{,}5$ năm thì sao? Ta cần hiểu $1{,}06^{2{,}5}$ nghĩa là gì, và sâu hơn nữa, $2^{\sqrt2}$ nghĩa là gì khi số mũ không còn là số nguyên, thậm chí không còn là phân số. Bài này trả lời câu hỏi đó: ta mở rộng luỹ thừa từng bước, sao cho các tính chất quen thuộc vẫn giữ nguyên.

## Từ số mũ nguyên đến số mũ hữu tỉ

Với số nguyên dương $n$ và số thực $a$, $a^n=\underbrace{a\cdot a\cdots a}_{n\text{ thừa số}}$. Nếu $a\neq0$ thì $a^0=1$ và $a^{-n}=\dfrac{1}{a^n}$. Các quy ước $a^0=1$, $a^{-n}=\dfrac1{a^n}$ được chọn để tính chất $a^m\cdot a^n=a^{m+n}$ vẫn đúng: chẳng hạn $2^3\cdot2^{-3}=2^0$ phải bằng $1$, nên $2^{-3}=\dfrac{1}{2^3}$.

### Khám phá: $2^{1/2}$ phải bằng bao nhiêu?

Ta muốn $2^{1/2}$ cũng thoả tính chất $(a^{\alpha})^{\beta}=a^{\alpha\beta}$. Khi đó
$$\left(2^{1/2}\right)^2=2^{\frac12\cdot2}=2^1=2.$$
Số dương bình phương lên bằng $2$ là $\sqrt2$. Vậy cách duy nhất để giữ các tính chất là đặt $2^{1/2}=\sqrt2$. Tương tự, $(2^{1/3})^3=2$ nên $2^{1/3}=\sqrt[3]{2}$.

Để làm việc với những số như vậy, ta cần khái niệm căn bậc $n$.

:::definition Căn bậc $n$
Cho số thực $a$ và số nguyên $n\ge2$. Số $b$ gọi là **căn bậc $n$** của $a$ nếu $b^n=a$.
- Nếu $n$ lẻ, mọi số thực $a$ có đúng một căn bậc $n$, kí hiệu $\sqrt[n]{a}$.
- Nếu $n$ chẵn và $a>0$, có hai căn bậc $n$ đối nhau; căn dương kí hiệu $\sqrt[n]{a}$, căn âm là $-\sqrt[n]{a}$.
- Nếu $n$ chẵn và $a<0$ thì không có căn bậc $n$ (trong tập số thực); $\sqrt[n]{0}=0$.
:::

Ví dụ $\sqrt[3]{-8}=-2$ vì $(-2)^3=-8$, còn $\sqrt[4]{16}=2$ vì $2^4=16$ (số $-2$ cũng thoả $(-2)^4=16$ nhưng kí hiệu $\sqrt[4]{16}$ chỉ căn dương).

:::definition Luỹ thừa với số mũ hữu tỉ
Cho $a>0$ và số hữu tỉ $r=\dfrac{m}{n}$ ($m\in\mathbb{Z}$, $n\in\mathbb{Z}$, $n\ge2$). Khi đó
$$a^{r}=a^{\frac mn}=\sqrt[n]{a^m}.$$
:::

**Hiểu sâu hơn.** Vì sao phải có $a>0$? Nếu cho phép $a<0$, ta gặp mâu thuẫn: $\dfrac13=\dfrac26$, nhưng $(-8)^{1/3}=\sqrt[3]{-8}=-2$ trong khi $(-8)^{2/6}=\sqrt[6]{(-8)^2}=\sqrt[6]{64}=2$. Cùng một số mũ mà hai kết quả khác nhau. Để luỹ thừa không phụ thuộc cách viết phân số của số mũ, ta chỉ xét cơ số dương.

## Luỹ thừa với số mũ thực

Còn $2^{\sqrt2}$ thì sao? Số $\sqrt2=1{,}41421\ldots$ là số vô tỉ, không viết được dưới dạng phân số. Ý tưởng: dùng các số hữu tỉ ngày càng gần $\sqrt2$.

| $r$ | $1{,}4$ | $1{,}41$ | $1{,}414$ | $1{,}4142$ |
|---|---|---|---|---|
| $2^{r}$ | $2{,}6390$ | $2{,}6574$ | $2{,}6647$ | $2{,}6651$ |

Khi $r$ tiến gần $\sqrt2$ thì $2^r$ dồn về một số xác định, khoảng $2{,}6651$. Số đó chính là $2^{\sqrt2}$.

:::definition Luỹ thừa với số mũ thực
Cho $a>0$ và số vô tỉ $\alpha$. Lấy dãy số hữu tỉ $(r_n)$ có giới hạn $\alpha$. Khi đó $a^{\alpha}=\lim a^{r_n}$.
:::

Giới hạn này tồn tại và không phụ thuộc cách chọn dãy $(r_n)$. Hình bên cho thấy đồ thị $y=2^x$ là một nét liền, đi qua cả điểm có hoành độ vô tỉ $\sqrt2$.

:::graph Đồ thị $y=2^x$ và điểm có hoành độ $\sqrt2$
alt: Đường cong y bằng 2 mũ x đi lên, qua các điểm (1; 2), (2; 4) và điểm có hoành độ khoảng 1,414 và tung độ khoảng 2,665
x: -1..3
y: 0..9
plot: 2^x
point: (1, 2) "2" below-right
point: (2, 4) "4" below-right
point: (1.4142, 2.6651) "2^√2" above-left
:::

:::theorem Tính chất của luỹ thừa với số mũ thực
Với $a>0$, $b>0$ và mọi số thực $\alpha$, $\beta$:
- $a^{\alpha}\cdot a^{\beta}=a^{\alpha+\beta}$; $\dfrac{a^{\alpha}}{a^{\beta}}=a^{\alpha-\beta}$; $(a^{\alpha})^{\beta}=a^{\alpha\beta}$.
- $(ab)^{\alpha}=a^{\alpha}b^{\alpha}$; $\left(\dfrac ab\right)^{\alpha}=\dfrac{a^{\alpha}}{b^{\alpha}}$.
- Nếu $a>1$ thì $a^{\alpha}>a^{\beta}\Leftrightarrow\alpha>\beta$. Nếu $0<a<1$ thì $a^{\alpha}>a^{\beta}\Leftrightarrow\alpha<\beta$.
:::

**Vì sao?** Các tính chất này đúng với số mũ hữu tỉ, rồi "chuyển qua giới hạn" cho số mũ thực. Tính chất so sánh có thể hiểu qua đồ thị: với $a>1$, đồ thị $y=a^x$ đi lên, nên số mũ lớn hơn cho giá trị lớn hơn; với $0<a<1$ đồ thị đi xuống, nên chiều bất đẳng thức đảo lại.

## Ví dụ

Ta bắt đầu với căn và số mũ hữu tỉ.

:::example Tính giá trị
Tính:

a) $\sqrt[3]{-125}$.

b) $\sqrt[4]{81}$.

c) $16^{3/4}$.

d) $8^{-2/3}$.

**Lời giải.** a) Vì $(-5)^3=-125$ nên $\sqrt[3]{-125}=-5$.

b) Vì $3^4=81$ nên $\sqrt[4]{81}=3$.

c) Ta có $16^{3/4}=\left(2^4\right)^{3/4}=2^{3}=8$.

d) Ta có $8^{-2/3}=\left(2^3\right)^{-2/3}=2^{-2}=\dfrac14$.

Vậy a) $-5$; b) $3$; c) $8$; d) $\dfrac14$.
:::

Với số mũ vô tỉ ta dùng các tính chất để đưa về số nguyên.

:::example Tính giá trị với số mũ vô tỉ
Tính:

a) $\left(2^{\sqrt3+1}\right)^{\sqrt3-1}$.

b) $\dfrac{5^{\sqrt3+2}\cdot5^{2-\sqrt3}}{25}$.

**Lời giải.** a) Ta có $\left(2^{\sqrt3+1}\right)^{\sqrt3-1}=2^{(\sqrt3+1)(\sqrt3-1)}=2^{3-1}=2^2=4$.

b) Ta có $5^{\sqrt3+2}\cdot5^{2-\sqrt3}=5^{(\sqrt3+2)+(2-\sqrt3)}=5^4=625$, và $625:25=25$.

Vậy a) $4$; b) $25$.
:::

Tiếp theo, ta rút gọn biểu thức chứa chữ.

:::example Rút gọn biểu thức
Với $a>0$, $b>0$, rút gọn:

a) $A=\dfrac{a^{2/3}\cdot a^{1/2}}{a^{1/6}}$.

b) $B=\left(a^{1/2}+b^{1/2}\right)^2-2\sqrt{ab}$.

**Lời giải.** a) Cộng, trừ các số mũ:

$$A=a^{\frac23+\frac12-\frac16}=a^{\frac46+\frac36-\frac16}=a^{1}=a.$$

b) Khai triển bình phương, với $\sqrt{ab}=(ab)^{1/2}=a^{1/2}b^{1/2}$:

$$B=a+2a^{1/2}b^{1/2}+b-2a^{1/2}b^{1/2}=a+b.$$

Vậy $A=a$ và $B=a+b$.
:::

Bây giờ ta dùng tính chất so sánh. Điều quan trọng là xét xem cơ số lớn hơn hay nhỏ hơn $1$.

:::example So sánh các luỹ thừa
So sánh:

a) $2^{\sqrt3}$ và $2^{1{,}7}$.

b) $\left(\dfrac13\right)^{\sqrt2}$ và $\left(\dfrac13\right)^{1{,}5}$.

c) $2^{300}$ và $3^{200}$.

**Lời giải.** a) Cơ số $2>1$ và $\sqrt3\approx1{,}732>1{,}7$, nên $2^{\sqrt3}>2^{1{,}7}$.

b) Cơ số $0<\dfrac13<1$ và $\sqrt2\approx1{,}414<1{,}5$, nên $\left(\dfrac13\right)^{\sqrt2}>\left(\dfrac13\right)^{1{,}5}$.

c) Đưa về cùng số mũ $100$: $2^{300}=\left(2^3\right)^{100}=8^{100}$ và $3^{200}=\left(3^2\right)^{100}=9^{100}$. Vì $8<9$ nên $8^{100}<9^{100}$.

Vậy a) $2^{\sqrt3}>2^{1{,}7}$; b) $\left(\dfrac13\right)^{\sqrt2}>\left(\dfrac13\right)^{1{,}5}$; c) $2^{300}<3^{200}$.
:::

Cuối cùng là bài toán đã mở đầu bài học, đi đủ bốn bước.

:::example Vận dụng: lãi kép
Giả sử bác Hoa gửi $100$ triệu đồng với lãi suất $6\%$ một năm, lãi kép (số liệu giả định). Số tiền sau $t$ năm là $A(t)=100\cdot1{,}06^{t}$ (triệu đồng). Tính số tiền sau $3$ năm và sau $2{,}5$ năm (làm tròn đến hàng phần trăm).

**Lời giải.**

*Hiểu đề.* Mỗi năm số tiền nhân với $1{,}06$. Cần tính $A(3)$ và $A(2{,}5)$, trong đó số mũ $2{,}5$ không phải số nguyên.

*Tìm cách giải.* Thay $t$ vào công thức. Với $t=2{,}5=\dfrac52$ ta dùng luỹ thừa số mũ hữu tỉ: $1{,}06^{5/2}=\sqrt{1{,}06^5}$, tính bằng máy tính cầm tay.

*Giải.* Ta có $A(3)=100\cdot1{,}06^3=119{,}1016\approx119{,}10$. Ta có $A(2{,}5)=100\cdot1{,}06^{2{,}5}\approx115{,}68$.

Vậy sau $3$ năm bác Hoa có khoảng $119{,}10$ triệu đồng và sau $2{,}5$ năm có khoảng $115{,}68$ triệu đồng.

*Nhìn lại.* Kết quả có hợp lí không? Sau $2$ năm là $112{,}36$ và sau $3$ năm là $119{,}10$, nên $115{,}68$ nằm giữa hai giá trị đó, đúng như mong đợi. Tuy vậy, thực tế ngân hàng thường chỉ trả lãi theo kì hạn đã định, nên công thức với $t$ không nguyên là một mô hình xấp xỉ, không phải số tiền chính xác ngân hàng sẽ trả.
:::

:::warning Những sai lầm thường gặp
- **Nhân số mũ khi nhân hai luỹ thừa cùng cơ số.** Sai: $2^3\cdot2^4=2^{12}$. Lí do sai: khi nhân luỹ thừa cùng cơ số ta cộng số mũ. Đúng: $2^3\cdot2^4=2^7$.
- **Lấy luỹ thừa của một tổng bằng tổng các luỹ thừa.** Sai: $(4+9)^{1/2}=4^{1/2}+9^{1/2}=5$. Lí do sai: $(a+b)^{\alpha}\neq a^{\alpha}+b^{\alpha}$ nói chung. Đúng: $(4+9)^{1/2}=\sqrt{13}\approx3{,}61$.
- **Quên đảo chiều bất đẳng thức khi cơ số nhỏ hơn $1$.** Sai: $\left(\dfrac12\right)^3>\left(\dfrac12\right)^2$ vì $3>2$. Lí do sai: với $0<a<1$, số mũ lớn hơn cho giá trị nhỏ hơn. Đúng: $\left(\dfrac12\right)^3=\dfrac18<\dfrac14=\left(\dfrac12\right)^2$.
- **Cho phép cơ số âm với số mũ hữu tỉ.** Sai: $(-8)^{1/3}=-2$ và $(-8)^{2/6}=2$ đều là luỹ thừa hợp lệ. Lí do sai: hai kết quả mâu thuẫn dù $\dfrac26=\dfrac13$. Đúng: luỹ thừa với số mũ hữu tỉ chỉ xét khi $a>0$.
:::

**Kết nối.** Luỹ thừa với số mũ thực dựa trên căn bậc hai và các hằng đẳng thức bạn đã học, và dựa trên giới hạn để định nghĩa số mũ vô tỉ. Nó mở đường cho bài [lôgarit](lesson:logarithms) (cách "tìm số mũ" khi biết luỹ thừa) và bài [hàm số mũ và hàm số lôgarit](lesson:exp-log-functions) (xét $a^x$ như một hàm số). Trong thực tế, mọi đại lượng tăng hay giảm theo một tỉ lệ cố định mỗi kì (tiền lãi kép, số vi khuẩn, giá trị tài sản khấu hao) đều là luỹ thừa với số mũ là thời gian.

## Thuật ngữ

:::terms
- luỹ thừa | power
- cơ số | base
- số mũ | exponent (index)
- căn bậc $n$ | $n$th root
- số mũ nguyên âm | negative exponent
- số mũ hữu tỉ | rational exponent
- số mũ thực | real exponent
- lãi kép | compound interest
- tăng trưởng | growth
- khấu hao | depreciation
:::

## Tóm tắt

- $a^0=1$, $a^{-n}=\dfrac1{a^n}$ ($a\neq0$); $a^{m/n}=\sqrt[n]{a^m}$ với $a>0$.
- Với $a>0$ và số mũ vô tỉ $\alpha$: $a^{\alpha}=\lim a^{r_n}$, trong đó $r_n$ hữu tỉ và $r_n\to\alpha$.
- Các tính chất: $a^{\alpha}a^{\beta}=a^{\alpha+\beta}$, $\dfrac{a^{\alpha}}{a^{\beta}}=a^{\alpha-\beta}$, $(a^{\alpha})^{\beta}=a^{\alpha\beta}$, $(ab)^{\alpha}=a^{\alpha}b^{\alpha}$.
- So sánh: $a>1$ thì số mũ lớn hơn cho giá trị lớn hơn; $0<a<1$ thì ngược lại.
- Bài toán thực tế: lãi kép, tăng trưởng, khấu hao đều có dạng (giá trị đầu) $\times$ (tỉ lệ)$^{t}$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính:

a) $2^{-5}$.

b) $(-3)^{-3}$.

c) $\left(\dfrac23\right)^{-2}$.

::hint
**Kiến thức:** $a^{-n}=\dfrac{1}{a^n}$ với $a\neq0$.

**Gợi ý các bước:**
1. Viết mỗi luỹ thừa dưới dạng $\dfrac{1}{a^n}$.
2. Chú ý dấu ở câu b và nghịch đảo phân số ở câu c.

::solution
a) Ta có $2^{-5}=\dfrac{1}{2^5}=\dfrac1{32}$.

b) Ta có $(-3)^{-3}=\dfrac{1}{(-3)^3}=-\dfrac1{27}$.

c) Ta có $\left(\dfrac23\right)^{-2}=\left(\dfrac32\right)^2=\dfrac94$.

Vậy a) $\dfrac1{32}$; b) $-\dfrac1{27}$; c) $\dfrac94$.

**Đáp số.** a) $\dfrac1{32}$; b) $-\dfrac1{27}$; c) $\dfrac94$.
:::

:::exercise
Tính:

a) $\sqrt[3]{-64}$.

b) $\sqrt[4]{256}$.

c) $125^{2/3}$.

d) $16^{-3/4}$.

::hint
**Kiến thức:** $a^{m/n}=\sqrt[n]{a^m}$; viết cơ số thành luỹ thừa của một số nhỏ hơn.

**Gợi ý các bước:**
1. Viết $125=5^3$ và $16=2^4$.
2. Nhân số mũ.

::solution
a) Vì $(-4)^3=-64$ nên $\sqrt[3]{-64}=-4$.

b) Vì $4^4=256$ nên $\sqrt[4]{256}=4$.

c) Ta có $125^{2/3}=\left(5^3\right)^{2/3}=5^2=25$.

d) Ta có $16^{-3/4}=\left(2^4\right)^{-3/4}=2^{-3}=\dfrac18$.

Vậy a) $-4$; b) $4$; c) $25$; d) $\dfrac18$.

**Đáp số.** a) $-4$; b) $4$; c) $25$; d) $\dfrac18$.
:::

:::exercise
Tính:

a) $\dfrac{7^{\sqrt5+1}}{7^{\sqrt5-1}}$.

b) $\left(3^{\sqrt2}\right)^{\sqrt2}$.

c) $4^{\sqrt3}\cdot2^{2-2\sqrt3}$.

::hint
**Kiến thức:** $\dfrac{a^{\alpha}}{a^{\beta}}=a^{\alpha-\beta}$, $(a^{\alpha})^{\beta}=a^{\alpha\beta}$; viết $4=2^2$.

**Gợi ý các bước:**
1. Đưa về cùng một cơ số.
2. Cộng, trừ hoặc nhân các số mũ.

::solution
a) Ta có $\dfrac{7^{\sqrt5+1}}{7^{\sqrt5-1}}=7^{(\sqrt5+1)-(\sqrt5-1)}=7^2=49$.

b) Ta có $\left(3^{\sqrt2}\right)^{\sqrt2}=3^{\sqrt2\cdot\sqrt2}=3^2=9$.

c) Ta có $4^{\sqrt3}=2^{2\sqrt3}$ nên $4^{\sqrt3}\cdot2^{2-2\sqrt3}=2^{2\sqrt3+2-2\sqrt3}=2^2=4$.

Vậy a) $49$; b) $9$; c) $4$.

**Đáp số.** a) $49$; b) $9$; c) $4$.
:::

:::exercise
Với $a>0$, viết mỗi biểu thức sau dưới dạng $a^{r}$ với $r$ là số hữu tỉ:

a) $\sqrt{a}\cdot\sqrt[3]{a}$.

b) $\dfrac{a^2}{\sqrt[3]{a}}$.

c) $\dfrac{1}{a\sqrt{a}}$.

::hint
**Kiến thức:** $\sqrt[n]{a}=a^{1/n}$ và các tính chất của luỹ thừa.

**Gợi ý các bước:**
1. Đổi mọi căn thành luỹ thừa số mũ hữu tỉ.
2. Cộng hoặc trừ các số mũ.

::solution
a) Ta có $a^{1/2}\cdot a^{1/3}=a^{\frac12+\frac13}=a^{5/6}$.

b) Ta có $\dfrac{a^2}{a^{1/3}}=a^{2-\frac13}=a^{5/3}$.

c) Ta có $\dfrac{1}{a\cdot a^{1/2}}=\dfrac{1}{a^{3/2}}=a^{-3/2}$.

Vậy a) $a^{5/6}$; b) $a^{5/3}$; c) $a^{-3/2}$.

**Đáp số.** a) $a^{5/6}$; b) $a^{5/3}$; c) $a^{-3/2}$.
:::

:::exercise
Giả sử số vi khuẩn trong một mẻ nuôi cấy (số liệu giả định) là $N(t)=500\cdot2^{t/3}$ con, với $t$ là số giờ kể từ lúc bắt đầu. Tính số vi khuẩn lúc bắt đầu, sau $9$ giờ và sau $4{,}5$ giờ (làm tròn đến hàng đơn vị).

::hint
**Kiến thức:** thay $t$ vào công thức; $2^{t/3}$ nhân đôi sau mỗi $3$ giờ.

**Gợi ý các bước:**
1. Thay $t=0$ và $t=9$.
2. Thay $t=4{,}5$ rồi dùng máy tính cầm tay.

::solution
Ta có $N(0)=500\cdot2^0=500$ và $N(9)=500\cdot2^3=4000$. Ta có $N(4{,}5)=500\cdot2^{1{,}5}\approx1414{,}2$.

Vậy lúc đầu có $500$ con, sau $9$ giờ có $4000$ con và sau $4{,}5$ giờ có khoảng $1414$ con.

**Đáp số.** $500$ con; $4000$ con; khoảng $1414$ con.
:::

:::exercise
Giả sử một chiếc ô tô mua mới giá $800$ triệu đồng và mỗi năm giá trị giảm $10\%$ so với năm trước (số liệu giả định). Giá trị của xe sau $t$ năm là $V(t)=800\cdot0{,}9^{t}$ (triệu đồng). Tính giá trị của xe sau $3$ năm và sau $2{,}5$ năm (làm tròn đến hàng phần mười).

::hint
**Kiến thức:** mỗi năm giá trị nhân với $0{,}9$.

**Gợi ý các bước:**
1. Tính $V(3)$.
2. Tính $V(2{,}5)$ bằng máy tính cầm tay.

::solution
Ta có $V(3)=800\cdot0{,}9^3=800\cdot0{,}729=583{,}2$. Ta có $V(2{,}5)=800\cdot0{,}9^{2{,}5}\approx614{,}7$.

Vậy giá trị xe sau $3$ năm là $583{,}2$ triệu đồng và sau $2{,}5$ năm khoảng $614{,}7$ triệu đồng.

**Đáp số.** $583{,}2$ triệu đồng; khoảng $614{,}7$ triệu đồng.
:::

:::exercise
Xét tính đúng sai của các mệnh đề sau:

a) $(-8)^{1/3}=-2$ theo định nghĩa luỹ thừa với số mũ hữu tỉ.

b) $4^{3/2}=8$.

c) $2^{\sqrt3}<2^{1{,}7}$.

d) $\left(\dfrac12\right)^{\sqrt5}<\left(\dfrac12\right)^{2}$.

::hint
**Kiến thức:** luỹ thừa với số mũ hữu tỉ chỉ định nghĩa cho cơ số dương; tính chất so sánh phụ thuộc cơ số lớn hơn hay nhỏ hơn $1$.

**Gợi ý các bước:**
1. a) Cơ số có dương không?
2. c), d) So sánh $\sqrt3$ với $1{,}7$ và $\sqrt5$ với $2$.

::solution
a) **Sai**: theo định nghĩa, $a^{r}$ chỉ xét với $a>0$, nên $(-8)^{1/3}$ không được định nghĩa là luỹ thừa với số mũ hữu tỉ (còn căn bậc ba của $-8$ là $-2$).

b) **Đúng**: $4^{3/2}=\left(2^2\right)^{3/2}=2^3=8$.

c) **Sai**: cơ số $2>1$ và $\sqrt3\approx1{,}732>1{,}7$ nên $2^{\sqrt3}>2^{1{,}7}$.

d) **Đúng**: cơ số $\dfrac12<1$ và $\sqrt5\approx2{,}236>2$ nên $\left(\dfrac12\right)^{\sqrt5}<\left(\dfrac12\right)^2$.

**Đáp số.** a) Sai; b) Đúng; c) Sai; d) Đúng.
:::

:::exercise
Tính giá trị của biểu thức $\left(3^{\sqrt5-1}\right)^{\sqrt5+1}$.

::hint
**Kiến thức:** $(a^{\alpha})^{\beta}=a^{\alpha\beta}$ và $(x-1)(x+1)=x^2-1$.

**Gợi ý các bước:**
1. Nhân hai số mũ.
2. Tính $3$ mũ kết quả.

::solution
Ta có $\left(3^{\sqrt5-1}\right)^{\sqrt5+1}=3^{(\sqrt5-1)(\sqrt5+1)}=3^{5-1}=3^4=81$.

Vậy giá trị của biểu thức bằng $81$.

**Đáp số.** $81$.
:::

:::exercise
Ôn lại căn thức lớp 9. Tính $\left(\sqrt5+2\right)^{2026}\left(\sqrt5-2\right)^{2026}$.

::hint
**Kiến thức:** $a^{\alpha}b^{\alpha}=(ab)^{\alpha}$ và hằng đẳng thức $(x+y)(x-y)=x^2-y^2$.

**Gợi ý các bước:**
1. Gộp hai luỹ thừa cùng số mũ.
2. Tính tích $(\sqrt5+2)(\sqrt5-2)$.

::solution
Ta có $\left(\sqrt5+2\right)^{2026}\left(\sqrt5-2\right)^{2026}=\left[\left(\sqrt5+2\right)\left(\sqrt5-2\right)\right]^{2026}$. Vì $\left(\sqrt5+2\right)\left(\sqrt5-2\right)=5-4=1$ nên biểu thức bằng $1^{2026}=1$.

Vậy giá trị của biểu thức bằng $1$.

**Đáp số.** $1$.
:::

:::exercise Thử thách
Cho $x>0$ thoả mãn $x^{1/2}+x^{-1/2}=3$. Tính $A=x+x^{-1}$ và $B=x^{3/2}+x^{-3/2}$.

::hint
**Kiến thức:** $(u+v)^2=u^2+2uv+v^2$ và $(u+v)^3=u^3+v^3+3uv(u+v)$.

**Gợi ý các bước:**
1. Đặt $u=x^{1/2}$, $v=x^{-1/2}$; tính $uv$.
2. Bình phương rồi lập phương tổng $u+v$.

::solution
Đặt $u=x^{1/2}$, $v=x^{-1/2}$. Ta có $uv=1$ và $u+v=3$.

Bình phương hai vế: $9=u^2+2uv+v^2=x+2+x^{-1}$, suy ra $A=x+x^{-1}=7$.

Lập phương hai vế: $27=u^3+v^3+3uv(u+v)=B+3\cdot1\cdot3$, suy ra $B=27-9=18$.

Vậy $A=7$ và $B=18$.

**Đáp số.** $A=7$; $B=18$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Giá trị của biểu thức $\sqrt[3]{-27}+\sqrt[4]{16}$ bằng
A. $-1$.
B. $5$.
C. $-5$.
D. $1$.
::key A
Ta có $\sqrt[3]{-27}=-3$ và $\sqrt[4]{16}=2$ nên tổng bằng $-1$. Phương án B bỏ dấu của căn bậc ba, C lấy cả hai căn âm, D đổi dấu kết quả.

::mc TH
Giá trị của $8^{-2/3}$ bằng
A. $\dfrac{1}{64}$.
B. $\dfrac14$.
C. $4$.
D. $-4$.
::key B
$8^{-2/3}=\left(2^3\right)^{-2/3}=2^{-2}=\dfrac14$. Phương án A tính $8^{-2}$, C bỏ dấu của số mũ, D coi số mũ âm cho giá trị âm.

::mc TH
Với $a>0$, biểu thức $\left(a^{\sqrt3+1}\right)^{\sqrt3-1}$ bằng
A. $a^{2\sqrt3}$.
B. $a^{4}$.
C. $a^{2}$.
D. $a^{3}$.
::key C
Ta nhân hai số mũ: $(\sqrt3+1)(\sqrt3-1)=3-1=2$. Phương án A cộng hai số mũ, B dùng $3+1$ thay cho $3-1$, D quên trừ $1^2$.

::mc TH
Mệnh đề nào sau đây đúng?
A. $\left(\dfrac13\right)^{2{,}5}<\left(\dfrac13\right)^{3}$.
B. $2^{\sqrt3}<2^{1{,}7}$.
C. $3^{-\sqrt2}>3^{-1{,}4}$.
D. $\left(\dfrac12\right)^{\sqrt3}<\left(\dfrac12\right)^{1{,}7}$.
::key D
Cơ số $\dfrac12<1$ và $\sqrt3>1{,}7$ nên $\left(\dfrac12\right)^{\sqrt3}<\left(\dfrac12\right)^{1{,}7}$. Phương án B quên $\sqrt3>1{,}7$, C sai vì $-\sqrt2<-1{,}4$, A quên đảo chiều với cơ số nhỏ hơn $1$.

::tf NB TH TH TH
Cho $a>0$, $b>0$. Xét tính đúng sai của các mệnh đề sau:
a) $(a+b)^{1/2}=a^{1/2}+b^{1/2}$.
b) $a^{1/2}\cdot a^{1/3}=a^{1/6}$.
c) $a^{3/2}=a\sqrt{a}$.
d) $\dfrac{a^{5/3}}{a^{2/3}}=a$.
::key S S Đ Đ
a) Sai: ví dụ $a=4$, $b=9$ cho $\sqrt{13}\neq5$. b) Sai: cộng số mũ được $\dfrac12+\dfrac13=\dfrac56$, tức $a^{5/6}$. c) Đúng: $a^{3/2}=a^{1+1/2}=a\cdot a^{1/2}$. d) Đúng: $a^{5/3-2/3}=a^1$.

::sa TH
Giả sử số vi khuẩn trong một mẻ nuôi cấy là $N(t)=200\cdot2^{t/2}$ con, với $t$ là số giờ. Tính số vi khuẩn sau $5$ giờ (làm tròn đến hàng đơn vị).
::key 1131
$N(5)=200\cdot2^{2{,}5}\approx200\cdot5{,}657\approx1131$ (con).

::sa VD
Tính giá trị của $81^{3/4}\cdot16^{-1/2}$ (viết dưới dạng số thập phân).
::key 6,75
$81^{3/4}=\left(3^4\right)^{3/4}=27$ và $16^{-1/2}=\dfrac14$, nên tích bằng $\dfrac{27}{4}=6{,}75$.
:::
