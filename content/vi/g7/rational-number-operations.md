---
title: Cộng, trừ, nhân, chia số hữu tỉ
description: Cộng, trừ, nhân, chia số hữu tỉ bằng quy đồng, quy tắc dấu và rút gọn; dùng tính chất giao hoán, kết hợp, phân phối để tính nhanh.
minutes: 30
---

:::goals
- Cộng, trừ hai số hữu tỉ bằng cách quy đồng mẫu số, đổi dấu rồi rút gọn kết quả.
- Nhân, chia hai số hữu tỉ, nắm chắc quy tắc dấu và hiểu vì sao chia cho một số là nhân với số nghịch đảo của nó.
- Dùng tính chất giao hoán, kết hợp, phân phối để tính nhanh.
- Vận dụng bốn phép tính vào các tình huống về nhiệt độ, lãi lỗ, độ sâu.
:::

Giả sử vào một sáng đầu đông ở vùng núi, lúc 6 giờ nhiệt kế chỉ $-\dfrac52\ ^\circ\text{C}$. Nắng lên dần, và mỗi giờ nhiệt độ tăng thêm $\dfrac34\ ^\circ\text{C}$. Lúc 9 giờ nhiệt độ là bao nhiêu, và đã lên trên $0\ ^\circ\text{C}$ chưa?

Nhiệt độ, tiền lãi lỗ, độ cao so với mực nước biển đều cần số âm, mà những con số "lẻ" như $\dfrac34$ lại gặp nhiều hơn số nguyên. Bài này cho bạn một bộ quy tắc gọn để làm bốn phép tính với cả hai loại số ấy cùng lúc. Có bộ quy tắc rồi, bạn không phải đoán số âm "đi" thế nào nữa.

## Khám phá từ ba phép tính nhỏ

Ta thử ba phép tính mà có thể tự kiểm tra bằng hình vẽ hoặc bằng đời sống.

**Cộng.** Tính $-\dfrac34+\dfrac12$. Trên trục số, ta xuất phát từ $-\dfrac34$ rồi đi sang phải $\dfrac12$. Một bước là "phần tư", một bước là "nửa" nên khó đếm. Nếu chia mỗi đơn vị thành $4$ phần bằng nhau thì $\dfrac12=\dfrac24$, bước đi là $2$ phần, và ta đến $-\dfrac14$.

:::graph Trên trục số: $-\dfrac34+\dfrac12=-\dfrac14$
alt: Trục số có các vạch -1, 0, 1; điểm -3/4 và điểm -1/4 được đánh dấu, đoạn nằm dưới trục nối hai điểm ấy dài một phần hai
x: -2..2
y: -1..1
segment: (-2, 0) (2, 0)
point: (-1, 0) "-1" below
point: (0, 0) "0" below
point: (1, 0) "1" below
point: (-0.75, 0) "-3/4" above
point: (-0.25, 0) "-1/4" above
segment: (-0.75, -0.55) (-0.25, -0.55)
label: (-0.5, -0.85) "+1/2"
:::

**Nhân.** Một nửa của $\dfrac34$ là bao nhiêu? Chia $\dfrac34$ thành hai phần bằng nhau thì mỗi phần là $\dfrac38$, tức là $\dfrac12\cdot\dfrac34=\dfrac38$: tử nhân tử, mẫu nhân mẫu.

**Chia.** Tính $\dfrac34:\dfrac38$, tức là hỏi $\dfrac34$ chứa mấy lần $\dfrac38$. Vì $\dfrac34=\dfrac68$ và $\dfrac68$ gồm đúng hai phần $\dfrac38$ nên kết quả là $2$. Số $2$ ấy cũng bằng $\dfrac34\cdot\dfrac83$: chia cho $\dfrac38$ cho cùng kết quả với nhân cho $\dfrac83$.

Ba phép tính trên đã gợi ra cả bộ quy tắc: cộng trừ thì cần cùng mẫu, nhân thì nhân thẳng, chia thì đổi thành nhân. Phần còn lại là phát biểu cho gọn và kiểm tra dấu âm.

## Cộng và trừ số hữu tỉ

Số hữu tỉ là số viết được dưới dạng phân số $\dfrac ab$ với $a$, $b$ nguyên và $b\neq0$. Vì $\dfrac ab=\dfrac{-a}{-b}$ nên ta luôn đưa được mẫu về số dương.

:::definition Cộng, trừ số hữu tỉ
Với hai số hữu tỉ $x=\dfrac am$ và $y=\dfrac bm$ (cùng mẫu dương $m$):
$$x+y=\dfrac{a+b}{m},\qquad x-y=\dfrac{a-b}{m}.$$
Muốn cộng hay trừ hai số hữu tỉ khác mẫu, ta quy đồng mẫu số, rồi áp dụng công thức trên và rút gọn kết quả. Phép trừ là phép cộng với số đối: $x-y=x+(-y)$.
:::

**Vì sao phải quy đồng?** Ta chỉ cộng được những thứ cùng loại: $3$ phần tư và $2$ phần tư là $5$ phần tư. Một phần tư và một phần ba chưa cùng "đơn vị", nên phải đổi cả hai về cùng một mẫu. **Vì sao trừ là cộng số đối?** Bớt đi một khoản lỗ cũng là thêm vào một khoản lãi, nên $x-(-y)=x+y$.

:::example Cộng, trừ hai số hữu tỉ
Tính:

a) $-\dfrac34+\dfrac56$.

b) $\dfrac16-\left(-\dfrac38\right)$.

c) $-\dfrac5{12}-\dfrac14$.

**Lời giải.** Ta quy đồng mẫu số rồi cộng hoặc trừ các tử.

a) Mẫu số chung nhỏ nhất của $4$ và $6$ là $12$. Ta có
$$-\dfrac34+\dfrac56=-\dfrac9{12}+\dfrac{10}{12}=\dfrac{-9+10}{12}=\dfrac1{12}.$$

b) Trừ một số âm là cộng với số đối của nó, tức là cộng $\dfrac38$. Mẫu số chung là $24$ nên
$$\dfrac16-\left(-\dfrac38\right)=\dfrac16+\dfrac38=\dfrac4{24}+\dfrac9{24}=\dfrac{13}{24}.$$

c) Mẫu số chung là $12$. Ta có
$$-\dfrac5{12}-\dfrac14=-\dfrac5{12}-\dfrac3{12}=\dfrac{-5-3}{12}=-\dfrac8{12}=-\dfrac23\quad(\text{rút gọn cho }4).$$

Vậy a) $\dfrac1{12}$; b) $\dfrac{13}{24}$; c) $-\dfrac23$.
:::

Số thập phân và mẫu số âm cũng là số hữu tỉ, nên chỉ cần đổi chúng về phân số mẫu dương là làm được như trên.

:::example Số thập phân và mẫu số âm
Tính:

a) $-1{,}25+\dfrac76$.

b) $\dfrac3{-8}-\left(-\dfrac56\right)$.

**Lời giải.** a) Ta đổi $-1{,}25=-\dfrac{125}{100}=-\dfrac54$. Mẫu số chung của $4$ và $6$ là $12$, nên
$$-\dfrac54+\dfrac76=-\dfrac{15}{12}+\dfrac{14}{12}=-\dfrac1{12}.$$

b) Đưa mẫu về số dương: $\dfrac3{-8}=-\dfrac38$. Trừ một số âm là cộng số đối, nên
$$-\dfrac38-\left(-\dfrac56\right)=-\dfrac38+\dfrac56=-\dfrac9{24}+\dfrac{20}{24}=\dfrac{11}{24}.$$

Vậy a) $-\dfrac1{12}$; b) $\dfrac{11}{24}$.
:::

## Nhân và chia số hữu tỉ

:::definition Nhân, chia số hữu tỉ
Với $x=\dfrac ab$ và $y=\dfrac cd$ ($b\neq0$, $d\neq0$):
$$x\cdot y=\dfrac{a\cdot c}{b\cdot d}.$$
Nếu $y\neq0$ (tức là $c\neq0$) thì
$$x:y=x\cdot\dfrac dc=\dfrac{a\cdot d}{b\cdot c}.$$
Số $\dfrac dc$ gọi là **số nghịch đảo** của $y=\dfrac cd$.

Quy tắc dấu: hai số cùng dấu thì tích và thương dương; hai số khác dấu thì tích và thương âm.
:::

**Vì sao chia là nhân với số nghịch đảo?** Thương $x:y$ là số mà nhân với $y$ thì được $x$. Số $x\cdot\dfrac dc$ đúng như vậy, vì $\left(x\cdot\dfrac dc\right)\cdot\dfrac cd=x\cdot1=x$. Còn dấu thì giống hệt số nguyên: chỉ phụ thuộc hai số cùng hay khác dấu. Vì thế ta nên xác định dấu trước, rồi mới nhân hoặc chia hai số không âm. Phép chia cho $0$ không có nghĩa.

:::tip Rút gọn trước khi nhân
Trước khi nhân, hãy tìm tử và mẫu có ước chung rồi rút gọn ngay. Số nhỏ hơn thì ít sai hơn, và kết quả thường đã ở dạng tối giản.
:::

:::example Nhân hai số hữu tỉ
Tính:

a) $\left(-\dfrac34\right)\cdot\dfrac89$.

b) $\left(-\dfrac56\right)\cdot\left(-\dfrac{12}{25}\right)$.

c) $(-0{,}6)\cdot\dfrac59$.

**Lời giải.** a) Hai thừa số khác dấu nên tích âm. Ta có
$$\left(-\dfrac34\right)\cdot\dfrac89=-\dfrac{3\cdot8}{4\cdot9}=-\dfrac{24}{36}=-\dfrac23\quad(\text{rút gọn cho }12).$$

b) Hai thừa số cùng dấu nên tích dương. Rút gọn $5$ với $25$ (cho $5$) và $12$ với $6$ (cho $6$):
$$\dfrac{5\cdot12}{6\cdot25}=\dfrac{1\cdot2}{1\cdot5}=\dfrac25.$$

c) Đổi $-0{,}6=-\dfrac35$. Tích âm, và
$$-\dfrac35\cdot\dfrac59=-\dfrac{3\cdot5}{5\cdot9}=-\dfrac39=-\dfrac13.$$

Vậy a) $-\dfrac23$; b) $\dfrac25$; c) $-\dfrac13$.
:::

Phép chia cần thêm một bước là tìm số nghịch đảo, và đây là chỗ dấu âm dễ làm ta lúng túng. Số nghịch đảo của $-\dfrac{10}9$ là $-\dfrac9{10}$: đảo tử và mẫu, dấu giữ nguyên.

:::example Phép chia và dấu âm
Tính:

a) $\left(-\dfrac56\right):\left(-\dfrac{10}9\right)$.

b) $\dfrac7{12}:\left(-\dfrac73\right)$.

c) $\left(-\dfrac45\right):8$.

**Lời giải.** Ta đổi phép chia thành phép nhân với số nghịch đảo của số chia.

a) Số nghịch đảo của $-\dfrac{10}9$ là $-\dfrac9{10}$. Hai số cùng dấu nên thương dương:
$$\left(-\dfrac56\right)\cdot\left(-\dfrac9{10}\right)=\dfrac{45}{60}=\dfrac34.$$

b) Số nghịch đảo của $-\dfrac73$ là $-\dfrac37$. Hai số khác dấu nên thương âm:
$$\dfrac7{12}\cdot\left(-\dfrac37\right)=-\dfrac{7\cdot3}{12\cdot7}=-\dfrac3{12}=-\dfrac14.$$

c) Viết $8=\dfrac81$, số nghịch đảo là $\dfrac18$. Ta có
$$\left(-\dfrac45\right)\cdot\dfrac18=-\dfrac4{40}=-\dfrac1{10}.$$

Vậy a) $\dfrac34$; b) $-\dfrac14$; c) $-\dfrac1{10}$.
:::

## Tính chất và cách tính nhanh

Các tính chất bạn đã dùng với số nguyên vẫn đúng với số hữu tỉ.

:::theorem Tính chất của phép cộng và phép nhân số hữu tỉ
Với mọi số hữu tỉ $x$, $y$, $z$:
- Giao hoán: $x+y=y+x$; $x\cdot y=y\cdot x$.
- Kết hợp: $(x+y)+z=x+(y+z)$; $(x\cdot y)\cdot z=x\cdot(y\cdot z)$.
- Cộng với $0$, nhân với $1$: $x+0=x$; $x\cdot1=x$.
- Số đối, số nghịch đảo: $x+(-x)=0$; $x\cdot\dfrac1x=1$ ($x\neq0$).
- Phân phối của phép nhân đối với phép cộng: $x\cdot(y+z)=x\cdot y+x\cdot z$.
:::

Công dụng của chúng rất thực tế. Khi có nhiều số hạng, ta được đổi chỗ và nhóm lại để ghép những số "hợp nhau": hai số cùng mẫu, hai số có tổng là số nguyên, hai số có tích bằng $1$. Khi hai tích có chung một thừa số, ta đặt thừa số ấy ra ngoài.

:::example Tính nhanh
Tính một cách hợp lí:

a) $-\dfrac7{12}+\dfrac45+\left(-\dfrac5{12}\right)+\dfrac25$.

b) $\left(-\dfrac37\right)\cdot\dfrac59+\left(-\dfrac37\right)\cdot\dfrac49$.

c) $\left(-\dfrac45\right)\cdot\dfrac7{11}\cdot\left(-\dfrac54\right)$.

**Lời giải.** a) Dùng tính chất giao hoán và kết hợp, ta ghép hai số cùng mẫu $12$ và hai số cùng mẫu $5$:
$$\left(-\dfrac7{12}-\dfrac5{12}\right)+\left(\dfrac45+\dfrac25\right)=-\dfrac{12}{12}+\dfrac65=-1+\dfrac65=\dfrac15.$$

b) Hai tích có thừa số chung $-\dfrac37$. Theo tính chất phân phối, ta có
$$-\dfrac37\cdot\left(\dfrac59+\dfrac49\right)=-\dfrac37\cdot1=-\dfrac37.$$

c) Đổi chỗ để ghép hai thừa số có tích bằng $1$ (vì $\left(-\dfrac45\right)\cdot\left(-\dfrac54\right)=1$):
$$\left(-\dfrac45\right)\cdot\left(-\dfrac54\right)\cdot\dfrac7{11}=1\cdot\dfrac7{11}=\dfrac7{11}.$$

Vậy a) $\dfrac15$; b) $-\dfrac37$; c) $\dfrac7{11}$.
:::

## Trở lại câu hỏi ở đầu bài

Trong biểu thức có nhiều phép tính, thứ tự vẫn như với số nguyên: tính trong ngoặc trước, rồi nhân chia, rồi cộng trừ.

:::example Nhiệt độ buổi sáng vùng núi
Lúc 6 giờ sáng, nhiệt độ là $-\dfrac52\ ^\circ\text{C}$. Từ lúc đó, mỗi giờ nhiệt độ tăng thêm $\dfrac34\ ^\circ\text{C}$. Hỏi lúc 9 giờ nhiệt độ là bao nhiêu độ C? Lúc đó đã trên $0\ ^\circ\text{C}$ chưa?

**Lời giải.**

*Hiểu đề.* Nhiệt độ ban đầu là $-\dfrac52\ ^\circ\text{C}$; mỗi giờ tăng $\dfrac34\ ^\circ\text{C}$; cần nhiệt độ sau $3$ giờ (từ 6 giờ đến 9 giờ).

*Tìm cách giải.* Sau $3$ giờ, nhiệt độ tăng thêm $3\cdot\dfrac34$. Nhiệt độ lúc 9 giờ bằng nhiệt độ ban đầu cộng phần tăng thêm. Ta nhân trước, cộng sau.

*Giải.* Gọi $T$ ($^\circ\text{C}$) là nhiệt độ lúc 9 giờ. Ta có
$$T=-\dfrac52+3\cdot\dfrac34=-\dfrac52+\dfrac94=-\dfrac{10}4+\dfrac94=-\dfrac14.$$

Vậy lúc 9 giờ nhiệt độ là $-\dfrac14\ ^\circ\text{C}$ (tức $-0{,}25\ ^\circ\text{C}$), vẫn dưới $0\ ^\circ\text{C}$.

*Nhìn lại.* Ta thử cách khác: cộng từng giờ. Lúc 7 giờ là $-\dfrac52+\dfrac34=-\dfrac74$; lúc 8 giờ là $-\dfrac74+\dfrac34=-1$; lúc 9 giờ là $-1+\dfrac34=-\dfrac14$. Hai cách cho cùng kết quả. Nếu chờ thêm một giờ nữa thì sao? Lúc 10 giờ là $-\dfrac14+\dfrac34=\dfrac12>0$, nên đến 10 giờ nhiệt độ mới lên trên $0\ ^\circ\text{C}$.
:::

### Những chỗ hay nhầm

:::warning Những sai lầm thường gặp
- **Cộng tử với tử, mẫu với mẫu.** Sai: $\dfrac12+\dfrac13=\dfrac25$. Lí do sai: $\dfrac25$ nhỏ hơn $\dfrac12$, trong khi ta vừa cộng thêm một số dương. Đúng: $\dfrac36+\dfrac26=\dfrac56$.
- **Quên đổi dấu khi trừ một số âm.** Sai: $\dfrac12-\left(-\dfrac14\right)=\dfrac24-\dfrac14=\dfrac14$. Lí do sai: trừ một số âm là cộng với số đối của nó. Đúng: $\dfrac24+\dfrac14=\dfrac34$.
- **Đảo nhầm số bị chia.** Sai: $\dfrac34:\dfrac12=\dfrac43\cdot\dfrac12=\dfrac23$. Lí do sai: chỉ được đảo số chia $\dfrac12$, còn số bị chia giữ nguyên. Đúng: $\dfrac34\cdot2=\dfrac32$.
- **Bỏ qua dấu của mẫu số.** Sai: coi $\dfrac3{-4}$ như $\dfrac34$ rồi viết $\dfrac3{-4}+\dfrac14=1$. Lí do sai: $\dfrac3{-4}=-\dfrac34$. Đúng: $-\dfrac34+\dfrac14=-\dfrac24=-\dfrac12$.
:::

**Kết nối.** Bốn phép tính này xây trên những gì bạn đã học ở lớp 6 về số nguyên và phân số, và là nền cho các bài sau của chương: luỹ thừa của số hữu tỉ, quy tắc dấu ngoặc và quy tắc chuyển vế. Gặp một bài có số âm và phân số, bạn cứ làm theo thứ tự: đưa mẫu về dương, xác định dấu, quy đồng hoặc rút gọn, rồi mới tính.

## Thuật ngữ

:::terms
- số hữu tỉ | rational number
- số đối | opposite (additive inverse)
- số nghịch đảo | reciprocal
- mẫu số chung | common denominator
- quy đồng mẫu số | write over a common denominator
- rút gọn phân số | simplify a fraction
- phân số tối giản | fraction in its simplest form
- tính chất giao hoán | commutative law
- tính chất kết hợp | associative law
- tính chất phân phối | distributive law
:::

## Tóm tắt

- Cộng, trừ: đưa mẫu về dương, quy đồng, cộng hoặc trừ các tử, giữ nguyên mẫu, rồi rút gọn. $x-y=x+(-y)$.
- Nhân: $\dfrac ab\cdot\dfrac cd=\dfrac{ac}{bd}$. Chia: $\dfrac ab:\dfrac cd=\dfrac ab\cdot\dfrac dc$ với $c\neq0$.
- Hai số cùng dấu thì tích và thương dương; khác dấu thì tích và thương âm.
- Giao hoán, kết hợp, phân phối giúp ghép số hợp nhau và đặt thừa số chung để tính nhanh.
- Có nhiều phép tính thì làm trong ngoặc trước, rồi nhân chia, rồi cộng trừ.

Câu hỏi ở đầu bài đã có lời đáp: lúc 9 giờ nhiệt độ là $-\dfrac14\ ^\circ\text{C}$. Hãy làm các bài luyện tập dưới đây, và chỗ nào còn chần chừ về dấu thì cứ viết dấu ra trước khi tính.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính:

a) $-\dfrac23+\dfrac14$.

b) $\dfrac58-\dfrac7{12}$.

c) $-\dfrac7{10}-\dfrac1{15}$.

::hint
**Kiến thức:** quy đồng mẫu số, cộng hoặc trừ các tử, rồi rút gọn.

**Gợi ý các bước:**
1. Mẫu số chung nhỏ nhất: a) $12$; b) $24$; c) $30$.
2. Cộng, trừ các tử rồi xem kết quả có rút gọn được không.

::solution
a) Mẫu số chung là $12$. Ta có $-\dfrac23+\dfrac14=-\dfrac8{12}+\dfrac3{12}=\dfrac{-8+3}{12}=-\dfrac5{12}$.

b) Mẫu số chung là $24$. Ta có $\dfrac58-\dfrac7{12}=\dfrac{15}{24}-\dfrac{14}{24}=\dfrac1{24}$.

c) Mẫu số chung là $30$. Ta có $-\dfrac7{10}-\dfrac1{15}=-\dfrac{21}{30}-\dfrac2{30}=-\dfrac{23}{30}$ (không rút gọn được vì $23$ là số nguyên tố).

Vậy a) $-\dfrac5{12}$; b) $\dfrac1{24}$; c) $-\dfrac{23}{30}$.

**Đáp số.** a) $-\dfrac5{12}$; b) $\dfrac1{24}$; c) $-\dfrac{23}{30}$.
:::

:::exercise
Tính:

a) $\dfrac34-\left(-\dfrac56\right)$.

b) $-0{,}4+\dfrac7{15}$.

c) $\dfrac2{-5}-\dfrac3{-10}$.

::hint
**Kiến thức:** $x-y=x+(-y)$; đổi số thập phân và mẫu số âm về phân số mẫu dương.

**Gợi ý các bước:**
1. a) Đổi thành phép cộng với $\dfrac56$.
2. b) $-0{,}4=-\dfrac25$.
3. c) $\dfrac2{-5}=-\dfrac25$ và $\dfrac3{-10}=-\dfrac3{10}$.

::solution
a) Trừ một số âm là cộng số đối: $\dfrac34+\dfrac56=\dfrac9{12}+\dfrac{10}{12}=\dfrac{19}{12}$.

b) Ta có $-0{,}4=-\dfrac4{10}=-\dfrac25=-\dfrac6{15}$. Suy ra $-\dfrac6{15}+\dfrac7{15}=\dfrac1{15}$.

c) Đưa mẫu về dương: $-\dfrac25-\left(-\dfrac3{10}\right)=-\dfrac4{10}+\dfrac3{10}=-\dfrac1{10}$.

Vậy a) $\dfrac{19}{12}$; b) $\dfrac1{15}$; c) $-\dfrac1{10}$.

**Đáp số.** a) $\dfrac{19}{12}$; b) $\dfrac1{15}$; c) $-\dfrac1{10}$.
:::

:::exercise
Tính:

a) $\left(-\dfrac59\right)\cdot\dfrac3{10}$.

b) $\left(-\dfrac78\right)\cdot\left(-\dfrac{12}{35}\right)$.

c) $(-2{,}5)\cdot\dfrac4{15}$.

::hint
**Kiến thức:** nhân tử với tử, mẫu với mẫu; xác định dấu theo quy tắc dấu.

**Gợi ý các bước:**
1. a) Tích của hai số khác dấu là số âm; rút gọn $5$ với $10$ và $3$ với $9$.
2. b) Hai số cùng dấu nên tích dương; rút gọn $7$ với $35$ và $12$ với $8$.
3. c) $-2{,}5=-\dfrac52$.

::solution
a) Hai thừa số khác dấu nên tích âm: $-\dfrac{5\cdot3}{9\cdot10}=-\dfrac{15}{90}=-\dfrac16$.

b) Hai thừa số cùng dấu nên tích dương: $\dfrac{7\cdot12}{8\cdot35}=\dfrac{1\cdot3}{2\cdot5}=\dfrac3{10}$ (rút gọn $7$ với $35$ cho $7$, $12$ với $8$ cho $4$).

c) Đổi $-2{,}5=-\dfrac52$. Tích âm: $-\dfrac{5\cdot4}{2\cdot15}=-\dfrac{20}{30}=-\dfrac23$.

Vậy a) $-\dfrac16$; b) $\dfrac3{10}$; c) $-\dfrac23$.

**Đáp số.** a) $-\dfrac16$; b) $\dfrac3{10}$; c) $-\dfrac23$.
:::

:::exercise
Tính:

a) $\left(-\dfrac5{12}\right):\dfrac{15}8$.

b) $\left(-\dfrac67\right):\left(-\dfrac3{14}\right)$.

c) $\dfrac59:(-10)$.

::hint
**Kiến thức:** $x:y=x\cdot\dfrac1y$; chỉ đảo số chia, số bị chia giữ nguyên.

**Gợi ý các bước:**
1. a) Số nghịch đảo của $\dfrac{15}8$ là $\dfrac8{15}$.
2. b) Số nghịch đảo của $-\dfrac3{14}$ là $-\dfrac{14}3$.
3. c) Số nghịch đảo của $-10$ là $-\dfrac1{10}$.

::solution
a) Ta có $\left(-\dfrac5{12}\right)\cdot\dfrac8{15}=-\dfrac{5\cdot8}{12\cdot15}=-\dfrac{40}{180}=-\dfrac29$.

b) Ta có $\left(-\dfrac67\right)\cdot\left(-\dfrac{14}3\right)=\dfrac{6\cdot14}{7\cdot3}=\dfrac{84}{21}=4$ (hai số cùng dấu nên thương dương).

c) Ta có $\dfrac59\cdot\left(-\dfrac1{10}\right)=-\dfrac5{90}=-\dfrac1{18}$.

Vậy a) $-\dfrac29$; b) $4$; c) $-\dfrac1{18}$.

**Đáp số.** a) $-\dfrac29$; b) $4$; c) $-\dfrac1{18}$.
:::

:::exercise
Một quầy nước giải khát ghi sổ ba ngày liên tiếp (số liệu giả định): ngày thứ nhất lãi $\dfrac34$ triệu đồng, ngày thứ hai lỗ $\dfrac56$ triệu đồng, ngày thứ ba lãi $\dfrac13$ triệu đồng. Hỏi sau ba ngày quầy lãi hay lỗ bao nhiêu nghìn đồng?

::hint
**Kiến thức:** lãi là số dương, lỗ là số âm; tổng ba số này là kết quả sau ba ngày; $1$ triệu đồng $=1000$ nghìn đồng.

**Gợi ý các bước:**
1. Viết tổng $\dfrac34+\left(-\dfrac56\right)+\dfrac13$.
2. Quy đồng với mẫu số chung $12$.
3. Đổi kết quả từ triệu đồng ra nghìn đồng.

::solution
Gọi $S$ (triệu đồng) là tổng kết quả ba ngày, với lãi là số dương và lỗ là số âm. Ta có
$$S=\dfrac34+\left(-\dfrac56\right)+\dfrac13=\dfrac9{12}-\dfrac{10}{12}+\dfrac4{12}=\dfrac3{12}=\dfrac14.$$

Vì $S>0$ nên quầy lãi. Đổi ra nghìn đồng: $\dfrac14\cdot1000=250$.

Vậy sau ba ngày quầy lãi $250$ nghìn đồng.

**Đáp số.** Lãi $250$ nghìn đồng.
:::

:::exercise
Một cửa hàng lỗ tổng cộng $\dfrac92$ triệu đồng trong $3$ tháng đầu năm, mỗi tháng lỗ như nhau. Hỏi mỗi tháng cửa hàng lỗ bao nhiêu triệu đồng? Viết kết quả dưới dạng số thập phân.

::hint
**Kiến thức:** biểu diễn lỗ bằng số âm; chia cho $3$ là nhân với $\dfrac13$.

**Gợi ý các bước:**
1. Tổng kết quả ba tháng là $-\dfrac92$ (triệu đồng).
2. Tính $\left(-\dfrac92\right):3$ rồi đổi ra số thập phân.

::solution
Vì lỗ được biểu diễn bằng số âm nên tổng kết quả ba tháng là $-\dfrac92$ (triệu đồng). Kết quả mỗi tháng là
$$\left(-\dfrac92\right):3=-\dfrac92\cdot\dfrac13=-\dfrac9{6}=-\dfrac32=-1{,}5.$$

Thử lại: $3\cdot1{,}5=4{,}5=\dfrac92$.

Vậy mỗi tháng cửa hàng lỗ $1{,}5$ triệu đồng.

**Đáp số.** Lỗ $1{,}5$ triệu đồng mỗi tháng.
:::

:::exercise
Một thợ lặn xuất phát ở mực nước biển (độ cao $0$ m) và lặn xuống đều, mỗi phút xuống $\dfrac54$ m. Sau $6$ phút, anh nổi lên $\dfrac72$ m. Hỏi lúc đó anh ở độ cao bao nhiêu mét so với mực nước biển?

::hint
**Kiến thức:** độ cao dưới mực nước biển là số âm; lặn $6$ phút là cộng $6$ lần số $-\dfrac54$.

**Gợi ý các bước:**
1. Tính độ cao sau $6$ phút lặn: $6\cdot\left(-\dfrac54\right)$.
2. Cộng thêm $\dfrac72$ (nổi lên là tăng độ cao).

::solution
Sau $6$ phút lặn, độ cao của thợ lặn là
$$6\cdot\left(-\dfrac54\right)=-\dfrac{30}4=-\dfrac{15}2\ (\text{m}).$$

Sau khi nổi lên $\dfrac72$ m, độ cao là
$$-\dfrac{15}2+\dfrac72=-\dfrac82=-4\ (\text{m}).$$

Vậy lúc đó thợ lặn ở độ cao $-4$ m, tức là dưới mực nước biển $4$ m.

**Đáp số.** $-4$ m.
:::

:::exercise
Tính một cách hợp lí:

a) $\dfrac57+\left(-\dfrac3{11}\right)+\dfrac27+\left(-\dfrac5{11}\right)$.

b) $\left(-\dfrac56\right)\cdot\dfrac7{13}+\left(-\dfrac56\right)\cdot\dfrac6{13}$.

c) $\left(-\dfrac34\right)\cdot\dfrac87\cdot\left(-\dfrac75\right)$.

::hint
**Kiến thức:** giao hoán, kết hợp, phân phối.

**Gợi ý các bước:**
1. a) Ghép hai số cùng mẫu $7$ và hai số cùng mẫu $11$.
2. b) Đặt thừa số chung $-\dfrac56$ ra ngoài.
3. c) Chú ý $7$ ở tử và $7$ ở mẫu có thể rút gọn.

::solution
a) Dùng giao hoán và kết hợp:
$$\left(\dfrac57+\dfrac27\right)+\left(-\dfrac3{11}-\dfrac5{11}\right)=1+\left(-\dfrac8{11}\right)=\dfrac3{11}.$$

b) Theo tính chất phân phối:
$$-\dfrac56\cdot\left(\dfrac7{13}+\dfrac6{13}\right)=-\dfrac56\cdot1=-\dfrac56.$$

c) Hai thừa số âm nên tích dương:
$$\left(-\dfrac34\right)\cdot\left(-\dfrac75\right)\cdot\dfrac87=\dfrac{3\cdot7\cdot8}{4\cdot5\cdot7}=\dfrac{3\cdot2}{5}=\dfrac65.$$

Vậy a) $\dfrac3{11}$; b) $-\dfrac56$; c) $\dfrac65$.

**Đáp số.** a) $\dfrac3{11}$; b) $-\dfrac56$; c) $\dfrac65$.
:::

:::exercise
Cho $A=\dfrac12+\dfrac34:\left(-\dfrac98\right)$.

a) Tính $A$.

b) So sánh $A$ với $-\dfrac15$.

::hint
**Kiến thức:** thứ tự thực hiện phép tính (chia trước, cộng sau); so sánh hai số hữu tỉ bằng cách quy đồng mẫu số.

**Gợi ý các bước:**
1. a) Tính $\dfrac34:\left(-\dfrac98\right)$ trước, bằng cách nhân với $-\dfrac89$.
2. b) Quy đồng $A$ và $-\dfrac15$ về mẫu số chung $30$.

::solution
a) Ta thực hiện phép chia trước:
$$\dfrac34:\left(-\dfrac98\right)=\dfrac34\cdot\left(-\dfrac89\right)=-\dfrac{3\cdot8}{4\cdot9}=-\dfrac{24}{36}=-\dfrac23.$$

Suy ra $A=\dfrac12-\dfrac23=\dfrac36-\dfrac46=-\dfrac16$.

b) Quy đồng mẫu số: $-\dfrac16=-\dfrac5{30}$ và $-\dfrac15=-\dfrac6{30}$. Vì $-5>-6$ nên $-\dfrac5{30}>-\dfrac6{30}$.

Vậy $A=-\dfrac16$ và $A>-\dfrac15$.

**Đáp số.** a) $A=-\dfrac16$; b) $A>-\dfrac15$.
:::

:::exercise Thử thách
a) Chứng minh rằng với mọi số nguyên dương $n$ ta có $\dfrac1{n(n+1)}=\dfrac1n-\dfrac1{n+1}$.

b) Tính $S=\dfrac1{1\cdot2}+\dfrac1{2\cdot3}+\dfrac1{3\cdot4}+\dfrac1{4\cdot5}+\dfrac1{5\cdot6}$.

::hint
**Kiến thức:** quy đồng hiệu hai phân số; $x+(-x)=0$.

**Gợi ý các bước:**
1. a) Quy đồng vế phải với mẫu số chung $n(n+1)$.
2. b) Viết mỗi số hạng của $S$ thành hiệu hai phân số theo câu a), rồi gạch các cặp số đối nhau.

::solution
a) Quy đồng vế phải với mẫu số chung $n(n+1)$:
$$\dfrac1n-\dfrac1{n+1}=\dfrac{n+1}{n(n+1)}-\dfrac n{n(n+1)}=\dfrac{(n+1)-n}{n(n+1)}=\dfrac1{n(n+1)}.$$
Đây đúng là vế trái, nên đẳng thức được chứng minh.

b) Áp dụng câu a) với $n=1$, $2$, $3$, $4$, $5$, ta có
$$S=\left(1-\dfrac12\right)+\left(\dfrac12-\dfrac13\right)+\left(\dfrac13-\dfrac14\right)+\left(\dfrac14-\dfrac15\right)+\left(\dfrac15-\dfrac16\right).$$

Theo tính chất kết hợp và $x+(-x)=0$, các cặp $\dfrac12$, $\dfrac13$, $\dfrac14$, $\dfrac15$ triệt tiêu nhau, nên $S=1-\dfrac16=\dfrac56$.

Vậy $S=\dfrac56$.

**Đáp số.** $S=\dfrac56$.
:::

## Kiểm tra mini

:::quiz
::mc TH
Kết quả của phép tính $-\dfrac56+\dfrac34$ là
A. $-\dfrac1{12}$.
B. $-\dfrac15$.
C. $\dfrac1{12}$.
D. $-\dfrac{19}{12}$.
::key A
Mẫu số chung là $12$: $-\dfrac{10}{12}+\dfrac9{12}=-\dfrac1{12}$. A là cộng tử với tử, mẫu với mẫu; C sai dấu; D trừ thay vì cộng.

::mc TH
Kết quả của phép tính $\left(-\dfrac3{10}\right):\dfrac65$ là
A. $\dfrac14$.
B. $-\dfrac14$.
C. $-\dfrac9{25}$.
D. $-4$.
::key B
$\left(-\dfrac3{10}\right)\cdot\dfrac56=-\dfrac{15}{60}=-\dfrac14$. A sai dấu; B đảo nhầm số bị chia; C quên đảo số chia.

::mc TH
Kết quả của phép tính $\dfrac23-\left(-\dfrac14\right)$ là
A. $\dfrac37$.
B. $\dfrac5{12}$.
C. $\dfrac{11}{12}$.
D. $\dfrac{11}{24}$.
::key C
Trừ một số âm là cộng số đối: $\dfrac8{12}+\dfrac3{12}=\dfrac{11}{12}$. B bỏ qua dấu âm; C cộng tử với tử, mẫu với mẫu; D cộng cả hai mẫu số sau khi quy đồng.

::mc VD
Giá trị của $\left(-\dfrac38\right)\cdot\dfrac57+\left(-\dfrac38\right)\cdot\dfrac27$ là
A. $-\dfrac{15}{56}$.
B. $\dfrac38$.
C. $-\dfrac{21}8$.
D. $-\dfrac38$.
::key D
Đặt $-\dfrac38$ ra ngoài: $-\dfrac38\cdot\left(\dfrac57+\dfrac27\right)=-\dfrac38\cdot1$. A chỉ tính số hạng đầu; B sai dấu; D quên mẫu $7$ khi cộng.

::tf TH TH TH TH
Cho $x=-\dfrac34$ và $y=\dfrac56$. Xét tính đúng sai của các mệnh đề sau:
a) $x+y=-\dfrac1{12}$.
b) $x-y=-\dfrac{19}{12}$.
c) $x\cdot y=-\dfrac58$.
d) $x:y=-\dfrac{10}9$.
::key S Đ Đ S
a) Sai: $-\dfrac9{12}+\dfrac{10}{12}=\dfrac1{12}$. b) Đúng: $-\dfrac9{12}-\dfrac{10}{12}=-\dfrac{19}{12}$. c) Đúng: $-\dfrac{15}{24}=-\dfrac58$. d) Sai: $x:y=-\dfrac34\cdot\dfrac65=-\dfrac9{10}$; $-\dfrac{10}9$ là $y:x$.

::sa VD
Tính $\left(\dfrac34-\dfrac56\right):\left(-\dfrac1{24}\right)$.
::key 2
$\dfrac34-\dfrac56=-\dfrac1{12}$, rồi $\left(-\dfrac1{12}\right)\cdot(-24)=2$.

::sa VD
Một quầy hàng lỗ $\dfrac34$ triệu đồng mỗi ngày trong $3$ ngày liên tiếp, rồi ngày thứ tư lãi $\dfrac{11}4$ triệu đồng. Hỏi sau bốn ngày quầy lãi bao nhiêu triệu đồng? (viết kết quả dưới dạng số thập phân)
::key 0,5
$3\cdot\left(-\dfrac34\right)+\dfrac{11}4=-\dfrac94+\dfrac{11}4=\dfrac24=0{,}5$.
:::
