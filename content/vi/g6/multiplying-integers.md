---
title: Phép nhân số nguyên. Phép chia hết. Ước và bội của một số nguyên
description: Nhân hai số nguyên cùng dấu, khác dấu, dùng tính chất để tính nhanh, chia hết hai số nguyên và tìm ước, bội của một số nguyên.
minutes: 35
---

:::goals
- Nhân được hai số nguyên khác dấu và hai số nguyên cùng dấu, xác định đúng dấu của tích.
- Dùng tính chất giao hoán, kết hợp, phân phối để tính hợp lí.
- Thực hiện được phép chia hết hai số nguyên.
- Tìm được các ước và bội của một số nguyên.
:::

Một đêm mùa đông ở vùng núi, cứ mỗi giờ nhiệt độ lại giảm $3^\circ\text{C}$. Lúc này nhiệt độ đang là $0^\circ\text{C}$. Sau $4$ giờ nữa, nhiệt độ sẽ là bao nhiêu? Câu này bạn nhẩm được: giảm bốn lần, mỗi lần $3$ độ, vậy là $-12^\circ\text{C}$.

Thế còn $4$ giờ **trước** thì sao? Lúc ấy trời ấm hơn bây giờ $12$ độ, tức là $12^\circ\text{C}$. Nếu coi "$4$ giờ trước" là $-4$ và "mỗi giờ giảm $3$ độ" là $-3$, thì ta vừa tính $(-4)\cdot(-3)=12$. Hai số âm nhân với nhau lại ra số dương. Điều nghe có vẻ lạ này thật ra rất tự nhiên, và phần dưới đây sẽ cho bạn thấy vì sao.

## Nhân hai số nguyên khác dấu

Phép nhân với số tự nhiên là phép cộng lặp lại. Điều đó vẫn đúng khi số được lặp lại là số âm:

$$4\cdot(-3)=(-3)+(-3)+(-3)+(-3)=-12.$$

Bốn lần giảm $3$ độ là giảm $12$ độ. Ta thấy $4\cdot(-3)=-(4\cdot3)$.

:::theorem Nhân hai số nguyên khác dấu
Muốn nhân hai số nguyên khác dấu, ta nhân hai phần số tự nhiên của chúng rồi đặt dấu "$-$" trước kết quả:
$$m\cdot(-n)=(-n)\cdot m=-(m\cdot n)\quad\text{với } m,\ n \text{ là số tự nhiên khác } 0.$$
:::

Tóm lại: dương nhân âm, hay âm nhân dương, đều ra âm.

## Nhân hai số nguyên cùng dấu

Hai số nguyên dương thì nhân như hai số tự nhiên. Còn hai số nguyên âm? Ta hãy để quy luật tự nói:

$$\begin{aligned}
(-3)\cdot 3&=-9\\
(-3)\cdot 2&=-6\\
(-3)\cdot 1&=-3\\
(-3)\cdot 0&=0\\
(-3)\cdot(-1)&=\ ?\\
(-3)\cdot(-2)&=\ ?
\end{aligned}$$

Đi từ trên xuống, thừa số thứ hai giảm $1$ đơn vị thì tích **tăng** $3$ đơn vị: $-9$; $-6$; $-3$; $0$. Nếu quy luật ấy tiếp tục, hai dòng cuối phải là $3$ và $6$. Vậy $(-3)\cdot(-1)=3$ và $(-3)\cdot(-2)=6$.

:::theorem Nhân hai số nguyên âm
Muốn nhân hai số nguyên âm, ta nhân hai phần số tự nhiên của chúng:
$$(-m)\cdot(-n)=m\cdot n\quad\text{với } m,\ n \text{ là số tự nhiên khác } 0.$$
:::

:::note Quy tắc dấu của tích
- $(+)\cdot(+)=(+)$ và $(-)\cdot(-)=(+)$: hai số **cùng dấu** thì tích **dương**.
- $(+)\cdot(-)=(-)$ và $(-)\cdot(+)=(-)$: hai số **khác dấu** thì tích **âm**.
- Tích của một số nguyên với $0$ luôn bằng $0$.
:::

Khi nhân nhiều số, bạn chỉ cần đếm các thừa số âm. Cứ hai thừa số âm ghép lại cho một tích dương. Vì thế nếu số thừa số âm là số chẵn thì tích dương, là số lẻ thì tích âm (với điều kiện không có thừa số nào bằng $0$).

## Tính chất của phép nhân

:::theorem Tính chất
Với mọi số nguyên $a$, $b$, $c$:
- Giao hoán: $a\cdot b=b\cdot a$.
- Kết hợp: $(a\cdot b)\cdot c=a\cdot(b\cdot c)$.
- Nhân với số $1$: $a\cdot1=a$.
- Phân phối của phép nhân đối với phép cộng: $a\cdot(b+c)=a\cdot b+a\cdot c$.
:::

Tính chất phân phối cũng đúng với phép trừ: $a\cdot(b-c)=a\cdot b-a\cdot c$. Đọc từ phải sang trái, nó cho phép ta **đặt thừa số chung** ra ngoài: $a\cdot b+a\cdot c=a\cdot(b+c)$. Đây là cách tính nhanh mà bạn sẽ dùng rất nhiều.

## Phép chia hết

Ta đã biết $(-3)\cdot4=-12$. Như với số tự nhiên, từ một phép nhân ta đọc ra hai phép chia: $(-12):4=-3$ và $(-12):(-3)=4$.

:::definition Phép chia hết
Cho hai số nguyên $a$, $b$ với $b\ne0$. Nếu có số nguyên $q$ sao cho $a=b\cdot q$ thì ta nói $a$ **chia hết cho** $b$, kí hiệu $a\ \vdots\ b$. Ta viết $a:b=q$ và gọi $q$ là **thương** của phép chia $a$ cho $b$.
:::

Vì phép chia sinh ra từ phép nhân nên dấu của thương theo đúng quy tắc dấu của tích: hai số cùng dấu thì thương dương, hai số khác dấu thì thương âm. Cách làm: chia hai phần số tự nhiên cho nhau, rồi đặt dấu.

## Ước và bội của một số nguyên

:::definition Ước và bội
Cho hai số nguyên $a$, $b$ với $b\ne0$. Nếu $a$ chia hết cho $b$ thì ta nói $a$ là một **bội** của $b$ và $b$ là một **ước** của $a$.
:::

Chẳng hạn $-12=4\cdot(-3)$ nên $-12$ là bội của $4$ và của $-3$; còn $4$ và $-3$ là ước của $-12$.

So với số tự nhiên, có một điều mới: ước và bội bây giờ đi thành từng cặp đối nhau. Nếu $b$ là ước của $a$ thì $-b$ cũng là ước của $a$. Vì sao? Vì nếu $a=b\cdot q$ thì $a=(-b)\cdot(-q)$. Do đó, muốn tìm tất cả các ước của một số nguyên, ta tìm các ước dương rồi thêm các số đối của chúng. Với bội cũng vậy.

## Ví dụ

Ta bắt đầu bằng việc luyện quy tắc dấu.

:::example Nhân hai số nguyên khác dấu
Tính:

a) $(-6)\cdot9$;

b) $12\cdot(-5)$;

c) $(-25)\cdot4$.

**Lời giải.**

Trong cả ba câu, hai thừa số khác dấu nên tích mang dấu "$-$". Ta nhân hai phần số tự nhiên rồi đặt dấu "$-$" trước kết quả.

a) $(-6)\cdot9=-(6\cdot9)=-54$.

b) $12\cdot(-5)=-(12\cdot5)=-60$.

c) $(-25)\cdot4=-(25\cdot4)=-100$.

Vậy kết quả lần lượt là $-54$; $-60$; $-100$.
:::

Sang hai số cùng dấu. Với ba thừa số, ta nhân lần lượt từng đôi một.

:::example Nhân các số nguyên âm
Tính:

a) $(-7)\cdot(-8)$;

b) $(-15)\cdot(-6)$;

c) $(-2)\cdot(-5)\cdot(-9)$.

**Lời giải.**

a) Hai thừa số cùng âm nên tích dương: $(-7)\cdot(-8)=7\cdot8=56$.

b) Tương tự, $(-15)\cdot(-6)=15\cdot6=90$.

c) Ta nhân hai thừa số đầu trước:
$$(-2)\cdot(-5)\cdot(-9)=[(-2)\cdot(-5)]\cdot(-9)=10\cdot(-9)=-90.$$

Vậy kết quả lần lượt là $56$; $90$; $-90$.

**Nhận xét.** Câu c) có ba thừa số âm, là một số lẻ, nên tích âm.
:::

Các tính chất của phép nhân giúp ta tránh những phép tính nặng.

:::example Tính một cách hợp lí
Tính:

a) $(-4)\cdot37\cdot(-25)$;

b) $(-17)\cdot46+(-17)\cdot54$.

**Lời giải.**

a) Ta thấy $4\cdot25=100$. Dùng tính chất giao hoán và kết hợp, ta nhóm $(-4)$ với $(-25)$:
$$(-4)\cdot37\cdot(-25)=[(-4)\cdot(-25)]\cdot37=100\cdot37=3700.$$

b) Hai tích có thừa số chung là $-17$. Dùng tính chất phân phối, ta đặt $-17$ ra ngoài:
$$\begin{aligned}
(-17)\cdot46+(-17)\cdot54&=(-17)\cdot(46+54)\\
&=(-17)\cdot100\\
&=-1700.
\end{aligned}$$

Vậy kết quả lần lượt là $3700$ và $-1700$.
:::

Phép chia cũng theo đúng quy tắc dấu ấy.

:::example Chia hai số nguyên
Tính:

a) $(-48):6$;

b) $63:(-7)$;

c) $(-72):(-9)$.

**Lời giải.**

a) Hai số khác dấu nên thương âm. Ta có $48:6=8$, do đó $(-48):6=-8$.

b) Hai số khác dấu nên thương âm. Ta có $63:7=9$, do đó $63:(-7)=-9$.

c) Hai số cùng dấu nên thương dương. Ta có $72:9=8$, do đó $(-72):(-9)=8$.

Thử lại bằng phép nhân: $6\cdot(-8)=-48$; $(-7)\cdot(-9)=63$; $(-9)\cdot8=-72$.

Vậy kết quả lần lượt là $-8$; $-9$; $8$.
:::

Với ước và bội, hãy nhớ lấy cả các số âm.

:::example Tìm ước và bội
a) Tìm tất cả các ước của $-10$.

b) Tìm các bội của $-4$ lớn hơn $-10$ và nhỏ hơn $10$.

**Lời giải.**

a) Các ước dương của $10$ là $1$; $2$; $5$; $10$.

Số đối của mỗi ước này cũng là ước của $-10$.

Vậy các ước của $-10$ là $1$; $-1$; $2$; $-2$; $5$; $-5$; $10$; $-10$.

b) Các bội của $-4$ có dạng $(-4)\cdot q$ với $q$ là số nguyên, đó là các số
$$0;\ 4;\ -4;\ 8;\ -8;\ 12;\ -12;\ \dots$$

Trong các số này, những số lớn hơn $-10$ và nhỏ hơn $10$ là $-8$; $-4$; $0$; $4$; $8$.

Vậy các bội cần tìm là $-8$; $-4$; $0$; $4$; $8$.
:::

Cuối cùng là một bài toán lãi lỗ, nơi số âm xuất hiện rất tự nhiên.

:::example Lãi hay lỗ?
Trong một đợt bán hàng, một cửa hàng bán được $12$ chiếc áo, mỗi chiếc lãi $35$ nghìn đồng, và bán xả $8$ chiếc quần, mỗi chiếc lỗ $40$ nghìn đồng. Hỏi sau đợt bán hàng đó, cửa hàng lãi hay lỗ bao nhiêu nghìn đồng?

**Lời giải.**

*Hiểu đề.* Có hai khoản: lãi từ áo và lỗ từ quần. Cần gộp hai khoản lại để biết cuối cùng cửa hàng lãi hay lỗ.

*Tìm cách giải.* Coi lãi là số dương, lỗ là số âm. Mỗi chiếc quần "lãi" $-40$ nghìn đồng. Ta tính tổng số tiền lãi của cả hai mặt hàng.

*Giải.* Tiền lãi từ $12$ chiếc áo là $12\cdot35=420$ (nghìn đồng).

Tiền lãi từ $8$ chiếc quần là $8\cdot(-40)=-320$ (nghìn đồng).

Tổng số tiền lãi của cửa hàng là
$$420+(-320)=100\ (\text{nghìn đồng}).$$

Vì $100>0$ nên cửa hàng có lãi.

Vậy sau đợt bán hàng, cửa hàng lãi $100$ nghìn đồng.

*Nhìn lại.* Nếu cửa hàng bán xả $11$ chiếc quần thay vì $8$ chiếc thì sao? Khi đó tổng là $420+11\cdot(-40)=420-440=-20$, tức là lỗ $20$ nghìn đồng. Dấu của kết quả trả lời luôn câu hỏi "lãi hay lỗ".
:::

:::warning Những chỗ hay nhầm
- **Âm nhân âm vẫn ra âm.** Sai: $(-7)\cdot(-8)=-56$. Vì sao sai: hai thừa số cùng dấu thì tích dương. Đúng: $(-7)\cdot(-8)=56$.
- **Lẫn quy tắc dấu của phép nhân sang phép cộng.** Sai: $(-7)+(-8)=15$ "vì âm với âm ra dương". Vì sao sai: quy tắc "cùng dấu thì dương" chỉ dành cho phép nhân và phép chia. Đúng: $(-7)+(-8)=-15$.
- **Quên các ước âm.** Sai: "Các ước của $6$ là $1$; $2$; $3$; $6$." Vì sao sai: trong tập hợp số nguyên, số đối của mỗi ước cũng là ước. Đúng: các ước của $6$ là $\pm1$; $\pm2$; $\pm3$; $\pm6$.
- **Cho rằng $0$ là ước.** Sai: "$0$ là ước của $5$." Vì sao sai: không có phép chia cho $0$. Đúng: $0$ là bội của mọi số nguyên khác $0$, nhưng không là ước của số nào.
:::

## Thuật ngữ

:::terms
- phép nhân số nguyên | multiplication of integers
- thừa số | factor (of a product)
- tích | product
- quy tắc dấu | sign rule
- tính chất phân phối | distributive property
- phép chia hết | exact division
- thương | quotient
- chia hết cho | divisible by
- ước | factor (divisor)
- bội | multiple
:::

## Tóm tắt

- Hai số khác dấu: nhân hai phần số tự nhiên, đặt dấu "$-$". Ví dụ $4\cdot(-3)=-12$.
- Hai số cùng dấu: nhân hai phần số tự nhiên, tích dương. Ví dụ $(-4)\cdot(-3)=12$.
- Tích nhiều thừa số khác $0$: số thừa số âm chẵn thì tích dương, lẻ thì tích âm.
- Phép nhân có tính giao hoán, kết hợp và phân phối: $a\cdot b+a\cdot c=a\cdot(b+c)$.
- $a$ chia hết cho $b$ ($b\ne0$) nếu $a=b\cdot q$ với $q$ nguyên; dấu của thương giống quy tắc dấu của tích.
- Nếu $a\ \vdots\ b$ thì $a$ là bội của $b$, $b$ là ước của $a$. Ước và bội đi thành cặp đối nhau; $0$ là bội của mọi số nguyên khác $0$ nhưng không là ước của số nào.

Giờ thì đêm mùa đông ở đầu bài không còn gì bí ẩn: $4$ giờ sau là $4\cdot(-3)=-12$ độ, $4$ giờ trước là $(-4)\cdot(-3)=12$ độ. Quy tắc "âm nhân âm ra dương" chỉ là cách nói gọn của việc đi ngược thời gian trong lúc nhiệt độ đang giảm. Nếu cần ôn lại phép cộng và trừ, bạn xem bài [Phép cộng và phép trừ số nguyên](lesson:add-subtract-integers).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Tính:

a) $(-8)\cdot7$;

b) $9\cdot(-11)$;

c) $(-13)\cdot(-4)$;

d) $(-20)\cdot(-5)\cdot(-3)$.

::hint
**Kiến thức:** hai số khác dấu thì tích âm, hai số cùng dấu thì tích dương.

**Gợi ý các bước:**
1. Xác định dấu của tích.
2. Nhân các phần số tự nhiên rồi đặt dấu.

::solution
a) Hai thừa số khác dấu nên $(-8)\cdot7=-(8\cdot7)=-56$.

b) Hai thừa số khác dấu nên $9\cdot(-11)=-(9\cdot11)=-99$.

c) Hai thừa số cùng dấu nên $(-13)\cdot(-4)=13\cdot4=52$.

d) Ta nhân hai thừa số đầu trước:
$$(-20)\cdot(-5)\cdot(-3)=[(-20)\cdot(-5)]\cdot(-3)=100\cdot(-3)=-300.$$

Vậy kết quả lần lượt là $-56$; $-99$; $52$; $-300$.

**Đáp số.** a) $-56$; b) $-99$; c) $52$; d) $-300$.
:::

:::exercise
Tính:

a) $(-56):8$;

b) $81:(-9)$;

c) $(-120):(-12)$;

d) $0:(-7)$.

::hint
**Kiến thức:** dấu của thương giống dấu của tích; $0$ chia cho số nguyên khác $0$ thì bằng $0$.

**Gợi ý các bước:**
1. Xác định dấu của thương.
2. Chia hai phần số tự nhiên rồi đặt dấu.

::solution
a) Hai số khác dấu nên thương âm. Vì $56:8=7$ nên $(-56):8=-7$.

b) Hai số khác dấu nên thương âm. Vì $81:9=9$ nên $81:(-9)=-9$.

c) Hai số cùng dấu nên thương dương. Vì $120:12=10$ nên $(-120):(-12)=10$.

d) Vì $0=(-7)\cdot0$ nên $0:(-7)=0$.

Vậy kết quả lần lượt là $-7$; $-9$; $10$; $0$.

**Đáp số.** a) $-7$; b) $-9$; c) $10$; d) $0$.
:::

:::exercise
Tính một cách hợp lí:

a) $(-8)\cdot19\cdot(-125)$;

b) $43\cdot(-28)+43\cdot(-72)$.

::hint
**Kiến thức:** $8\cdot125=1000$; tính chất phân phối $a\cdot b+a\cdot c=a\cdot(b+c)$.

**Gợi ý các bước:**
1. Câu a): nhóm hai thừa số có tích tròn nghìn.
2. Câu b): đặt thừa số chung ra ngoài.

::solution
a) Dùng tính chất giao hoán và kết hợp, ta nhóm $(-8)$ với $(-125)$:
$$(-8)\cdot19\cdot(-125)=[(-8)\cdot(-125)]\cdot19=1000\cdot19=19\,000.$$

b) Hai tích có thừa số chung là $43$. Dùng tính chất phân phối, ta có
$$\begin{aligned}
43\cdot(-28)+43\cdot(-72)&=43\cdot[(-28)+(-72)]\\
&=43\cdot(-100)\\
&=-4300.
\end{aligned}$$

Vậy kết quả lần lượt là $19\,000$ và $-4300$.

**Đáp số.** a) $19\,000$; b) $-4300$.
:::

:::exercise
Tìm số nguyên $x$, biết:

a) $(-6)\cdot x=42$;

b) $x:(-4)=-9$.

::hint
**Kiến thức:** thừa số chưa biết bằng tích chia cho thừa số đã biết; số bị chia bằng thương nhân với số chia.

**Gợi ý các bước:**
1. Xác định vai trò của $x$ trong phép tính.
2. Viết phép tính tìm $x$, chú ý dấu.

::solution
a) Ta có $(-6)\cdot x=42$.

Thừa số chưa biết bằng tích chia cho thừa số đã biết, nên
$$x=42:(-6)=-7.$$

b) Ta có $x:(-4)=-9$.

Số bị chia bằng thương nhân với số chia, nên
$$x=(-9)\cdot(-4)=36.$$

Thử lại: $(-6)\cdot(-7)=42$ và $36:(-4)=-9$, đều đúng.

Vậy a) $x=-7$; b) $x=36$.

**Đáp số.** a) $x=-7$; b) $x=36$.
:::

:::exercise
a) Tìm tất cả các ước của $-12$.

b) Tìm các bội của $6$ lớn hơn $-20$ và nhỏ hơn $15$.

::hint
**Kiến thức:** nếu $b$ là ước của $a$ thì $-b$ cũng là ước của $a$; bội của $6$ có dạng $6\cdot q$ với $q$ nguyên.

**Gợi ý các bước:**
1. Tìm các ước dương của $12$, rồi thêm các số đối.
2. Liệt kê các bội của $6$ (cả âm, cả $0$) rồi chọn số nằm trong khoảng đã cho.

::solution
a) Các ước dương của $12$ là $1$; $2$; $3$; $4$; $6$; $12$.

Số đối của mỗi ước này cũng là ước của $-12$.

Vậy các ước của $-12$ là $\pm1$; $\pm2$; $\pm3$; $\pm4$; $\pm6$; $\pm12$.

b) Các bội của $6$ là $0$; $\pm6$; $\pm12$; $\pm18$; $\pm24$; …

Trong các số này, những số lớn hơn $-20$ và nhỏ hơn $15$ là $-18$; $-12$; $-6$; $0$; $6$; $12$.

Vậy các bội cần tìm là $-18$; $-12$; $-6$; $0$; $6$; $12$.

**Đáp số.** a) $\pm1$; $\pm2$; $\pm3$; $\pm4$; $\pm6$; $\pm12$. b) $-18$; $-12$; $-6$; $0$; $6$; $12$.
:::

:::exercise
Không thực hiện phép tính, hãy so sánh mỗi tích sau với $0$:

a) $(-3)\cdot(-5)\cdot(-7)\cdot(-9)$;

b) $(-1)\cdot(-2)\cdot(-3)\cdot(-4)\cdot(-5)$.

::hint
**Kiến thức:** trong một tích các số khác $0$, số thừa số âm chẵn thì tích dương, lẻ thì tích âm.

**Gợi ý các bước:**
1. Đếm số thừa số âm.
2. Kết luận về dấu của tích.

::solution
a) Tích có $4$ thừa số âm. Cứ hai thừa số âm cho một tích dương, nên tích của $4$ thừa số âm là số dương.

Do đó $(-3)\cdot(-5)\cdot(-7)\cdot(-9)>0$.

b) Tích có $5$ thừa số âm. Bốn thừa số đầu cho tích dương, nhân tiếp với thừa số âm thứ năm thì được số âm.

Do đó $(-1)\cdot(-2)\cdot(-3)\cdot(-4)\cdot(-5)<0$.

Vậy tích ở câu a) lớn hơn $0$, tích ở câu b) nhỏ hơn $0$.

**Đáp số.** a) Lớn hơn $0$; b) nhỏ hơn $0$.
:::

:::exercise
Một tủ cấp đông đang ở $6^\circ\text{C}$. Khi bật máy, cứ mỗi phút nhiệt độ trong tủ giảm $4^\circ\text{C}$. Hỏi sau $5$ phút, nhiệt độ trong tủ là bao nhiêu độ C?

::hint
**Kiến thức:** mỗi phút nhiệt độ thay đổi $-4^\circ\text{C}$; sau $5$ phút thay đổi $5\cdot(-4)$.

**Gợi ý các bước:**
1. Tính tổng mức thay đổi nhiệt độ sau $5$ phút.
2. Cộng với nhiệt độ ban đầu.

::solution
Mỗi phút nhiệt độ giảm $4^\circ\text{C}$, tức là thay đổi $-4^\circ\text{C}$.

Sau $5$ phút, nhiệt độ thay đổi
$$5\cdot(-4)=-20\ (^\circ\text{C}).$$

Nhiệt độ trong tủ lúc đó là
$$6+(-20)=-14\ (^\circ\text{C}).$$

Vậy sau $5$ phút, nhiệt độ trong tủ là $-14^\circ\text{C}$.

**Đáp số.** $-14^\circ\text{C}$.
:::

:::exercise
Trong một cuộc thi có $20$ câu hỏi, mỗi câu trả lời đúng được $5$ điểm, mỗi câu trả lời sai bị trừ $2$ điểm, câu bỏ trống được $0$ điểm. Bạn An trả lời đúng $14$ câu, sai $5$ câu và bỏ trống $1$ câu. Hỏi bạn An được bao nhiêu điểm?

::hint
**Kiến thức:** bị trừ $2$ điểm nghĩa là được $-2$ điểm.

**Gợi ý các bước:**
1. Tính điểm của các câu đúng và điểm của các câu sai.
2. Cộng các kết quả lại.

::solution
Số điểm của $14$ câu đúng là $14\cdot5=70$ (điểm).

Mỗi câu sai được $-2$ điểm, nên số điểm của $5$ câu sai là $5\cdot(-2)=-10$ (điểm).

Câu bỏ trống được $0$ điểm.

Tổng số điểm của bạn An là
$$70+(-10)+0=60\ (\text{điểm}).$$

Vậy bạn An được $60$ điểm.

**Đáp số.** $60$ điểm.
:::

:::exercise Thử thách
Tìm tất cả các số nguyên $x$ sao cho $x+1$ là ước của $5$.

::hint
**Kiến thức:** các ước của $5$ gồm cả ước âm: $\pm1$; $\pm5$.

**Gợi ý các bước:**
1. Liệt kê tất cả các ước của $5$.
2. Với mỗi ước, tìm $x$ từ $x+1$ bằng ước đó.

::solution
Các ước của $5$ là $1$; $-1$; $5$; $-5$.

Vì $x+1$ là ước của $5$ nên có bốn trường hợp.

Nếu $x+1=1$ thì $x=1-1=0$.

Nếu $x+1=-1$ thì $x=-1-1=-2$.

Nếu $x+1=5$ thì $x=5-1=4$.

Nếu $x+1=-5$ thì $x=-5-1=-6$.

Vậy $x\in\{-6;-2;0;4\}$.

**Đáp số.** $x\in\{-6;-2;0;4\}$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của phép tính $(-9)\cdot6$ là
A. $54$.
B. $-54$.
C. $-15$.
D. $-3$.
::key B
Hai thừa số khác dấu nên tích âm: $-(9\cdot6)=-54$. A sai dấu; C lấy $-9-6$; D lấy $-9+6$.

::mc
Kết quả của phép tính $(-12)\cdot(-5)$ là
A. $-60$.
B. $-17$.
C. $17$.
D. $60$.
::key D
Hai thừa số cùng dấu nên tích dương: $12\cdot5=60$. A sai dấu; B cộng hai số; C cộng hai phần số.

::mc
Kết quả của phép tính $(-84):7$ là
A. $-12$.
B. $12$.
C. $-77$.
D. $-91$.
::key A
Hai số khác dấu nên thương âm: $84:7=12$, vậy thương là $-12$. B sai dấu; C lấy $-84+7$; D lấy $-84-7$.

::mc
Số nào sau đây là một ước của $-15$?
A. $0$.
B. $30$.
C. $-5$.
D. $-45$.
::key C
$-15=(-5)\cdot3$ nên $-5$ là ước của $-15$. A: $0$ không là ước của số nào; B và D là bội của $-15$ chứ không phải ước.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) Tích của hai số nguyên âm là một số nguyên âm.
b) Tích của một số nguyên với $0$ bằng $0$.
c) Nếu $a$ là bội của $b$ thì $-a$ cũng là bội của $b$.
d) Số $0$ là ước của mọi số nguyên.
::key S Đ Đ S
a) Sai: hai số cùng dấu có tích dương, ví dụ $(-2)\cdot(-3)=6$. b) Đúng: $a\cdot0=0$. c) Đúng: nếu $a=b\cdot q$ thì $-a=b\cdot(-q)$. d) Sai: không có phép chia cho $0$ nên $0$ không là ước của số nào.

::sa
Tính giá trị của biểu thức $(-3)\cdot(-4)\cdot(-5)+70$.
::key 10
$(-3)\cdot(-4)=12$; $12\cdot(-5)=-60$; $-60+70=10$.

::sa
Số $-18$ có tất cả bao nhiêu ước nguyên?
::key 12
Các ước dương của $18$ là $1$; $2$; $3$; $6$; $9$; $18$ ($6$ ước). Thêm $6$ số đối, được $12$ ước.
:::
