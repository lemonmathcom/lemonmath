---
title: Phép cộng và phép trừ số nguyên. Quy tắc dấu ngoặc
description: Cộng hai số nguyên cùng dấu, khác dấu, đổi phép trừ thành phép cộng với số đối và bỏ dấu ngoặc đúng cách để tính nhanh.
minutes: 35
---

:::goals
- Cộng được hai số nguyên cùng dấu và hai số nguyên khác dấu.
- Dùng các tính chất của phép cộng để tính hợp lí.
- Đổi phép trừ thành phép cộng với số đối: $a-b=a+(-b)$.
- Bỏ dấu ngoặc đúng quy tắc, nhất là khi trước ngoặc có dấu "$-$".
:::

Một tàu ngầm đang ở độ cao $-20$ m, tức là $20$ m dưới mặt nước biển. Nó lặn sâu thêm $15$ m nữa. Lúc này tàu ở độ cao nào? Rồi tàu nổi lên $50$ m thì sao, nó đã lên khỏi mặt nước chưa?

Bạn có thể đếm từng mét trên một cột số dựng đứng, và sẽ ra đáp án. Nhưng với những số lớn, đếm như thế rất lâu. Điều ta cần là vài quy tắc gọn để cộng, trừ số nguyên mà không phải vẽ gì cả. Các quy tắc đó đều đọc ra được từ trục số.

## Cộng hai số nguyên cùng dấu

Hai số nguyên dương thì cộng như hai số tự nhiên, bạn đã quen rồi. Ta xem hai số nguyên âm.

Tàu ngầm ở $-20$ m lặn thêm $15$ m: nó đi tiếp về phía âm. Đã xuống $20$, xuống thêm $15$, tất cả là xuống $20+15=35$ m. Vậy $(-20)+(-15)=-35$.

Trên trục số cũng thế: cộng với một số âm nghĩa là đi sang trái. Hình dưới cho thấy $(-2)+(-3)$: từ $-2$ đi sang trái $3$ đơn vị, ta tới $-5$.

:::graph Từ $-2$ đi sang trái $3$ đơn vị
alt: Trục số từ -6 đến 3; một mũi tên đi từ điểm -2 sang trái 3 đơn vị đến điểm -5
x: -6.5..3.5
y: -1..1.2
shape: free
segment: (-6.5, 0) (3.5, 0)
point: (-6, 0) "-6" below
point: (-5, 0) "-5" below
point: (-4, 0) "-4" below
point: (-3, 0) "-3" below
point: (-2, 0) "-2" below
point: (-1, 0) "-1" below
point: (0, 0) "0" below
point: (1, 0) "1" below
point: (2, 0) "2" below
point: (3, 0) "3" below
segment: (-2, 0.5) (-5, 0.5)
label: (-3.5, 0.85) "−3"
:::

:::theorem Cộng hai số nguyên âm
Muốn cộng hai số nguyên âm, ta cộng hai **phần số tự nhiên** của chúng (phần đứng sau dấu "$-$") rồi đặt dấu "$-$" trước kết quả:
$$(-a)+(-b)=-(a+b)\quad\text{với } a,\ b \text{ là số tự nhiên khác } 0.$$
:::

Nghĩ theo tiền bạc cho dễ nhớ: nợ $20$ nghìn đồng, nợ thêm $15$ nghìn đồng, thì nợ tất cả $35$ nghìn đồng.

## Cộng hai số nguyên khác dấu

Bây giờ tàu ngầm đang ở $-35$ m thì nổi lên $50$ m. Đi lên là đi về phía dương, nên ta phải tính $(-35)+50$.

Trong $50$ m đi lên, $35$ m đầu tiên chỉ vừa đủ đưa tàu về mặt nước, tức là về $0$. Còn lại $50-35=15$ m đưa tàu lên trên mặt nước. Vậy $(-35)+50=15$.

Nếu tàu chỉ nổi lên $10$ m thì sao? $10$ m không đủ để bù $35$ m. Tàu vẫn còn ở dưới nước $35-10=25$ m. Vậy $(-35)+10=-25$.

Hai phép tính có chung một cách làm: lấy phần số lớn trừ phần số nhỏ, và kết quả mang dấu của số "mạnh hơn".

:::theorem Cộng hai số nguyên khác dấu
- Hai số đối nhau có tổng bằng $0$: $a+(-a)=0$.
- Muốn cộng hai số nguyên khác dấu không đối nhau, ta lấy phần số tự nhiên **lớn hơn trừ đi** phần số tự nhiên **nhỏ hơn**, rồi đặt trước hiệu tìm được **dấu của số có phần số tự nhiên lớn hơn**.
:::

Vì sao lại trừ? Vì hai số kéo về hai phía ngược nhau, phần này bù cho phần kia. Giống như có $50$ nghìn đồng mà đang nợ $35$ nghìn đồng: trả nợ xong bạn còn $15$ nghìn đồng.

## Tính chất của phép cộng số nguyên

Phép cộng số nguyên giữ đủ các tính chất quen thuộc của phép cộng số tự nhiên, và có thêm một tính chất mới.

:::theorem Tính chất
Với mọi số nguyên $a$, $b$, $c$:
- Giao hoán: $a+b=b+a$.
- Kết hợp: $(a+b)+c=a+(b+c)$.
- Cộng với số $0$: $a+0=a$.
- Cộng với số đối: $a+(-a)=0$.
:::

Nhờ giao hoán và kết hợp, khi cộng nhiều số ta được phép đổi chỗ và nhóm các số tuỳ ý. Mẹo thường dùng: gom các số đối nhau, hoặc gom các số có tổng tròn chục, tròn trăm.

## Phép trừ số nguyên

Với số tự nhiên, phép tính $3-5$ không làm được. Với số nguyên thì được. Hãy nhìn dãy sau:

$$3-1=2,\quad 3-2=1,\quad 3-3=0,\quad 3-4=\ ?,\quad 3-5=\ ?$$

Mỗi lần số trừ tăng $1$ thì hiệu giảm $1$. Theo đà đó, $3-4=-1$ và $3-5=-2$. Mặt khác, $3+(-4)=-1$ và $3+(-5)=-2$. Hai cách cho cùng kết quả.

:::theorem Quy tắc trừ
Muốn trừ số nguyên $a$ cho số nguyên $b$, ta cộng $a$ với **số đối** của $b$:
$$a-b=a+(-b).$$
:::

Quy tắc này có lợi ở chỗ: ta không cần học thêm cách trừ nào mới. Mọi phép trừ đều đổi được thành phép cộng, mà phép cộng thì ta đã biết làm.

Một trường hợp hay gặp là trừ đi một số âm: $6-(-9)=6+9=15$. Trừ một số âm chính là cộng thêm. Điều này hợp lí: bớt đi một khoản nợ $9$ nghìn đồng thì bạn "giàu lên" $9$ nghìn đồng.

## Quy tắc dấu ngoặc

Hãy so sánh $20-(8+5)$ với $20-8-5$. Ta có $20-(8+5)=20-13=7$ và $20-8-5=7$. Bằng nhau. Trừ đi cả một tổng cũng là trừ lần lượt từng số trong tổng.

Còn $20-(8-5)$ thì sao? Ta có $20-(8-5)=20-3=17$, và $20-8+5=17$. Lần này số $5$ trong ngoặc đang bị trừ, khi bỏ ngoặc nó lại thành cộng.

:::theorem Quy tắc dấu ngoặc
- Khi bỏ dấu ngoặc có dấu "$+$" đằng trước, ta **giữ nguyên dấu** của các số hạng trong ngoặc:
$$a+(b-c+d)=a+b-c+d.$$
- Khi bỏ dấu ngoặc có dấu "$-$" đằng trước, ta **đổi dấu tất cả** các số hạng trong ngoặc: dấu "$+$" thành dấu "$-$" và dấu "$-$" thành dấu "$+$":
$$a-(b-c+d)=a-b+c-d.$$
:::

Vì sao phải đổi dấu tất cả? Vì trừ đi một tổng là cộng với số đối của tổng đó, mà muốn lấy số đối của một tổng thì phải lấy số đối của từng số hạng.

Quy tắc dùng được theo cả hai chiều. Khi cần, ta đưa các số hạng **vào** trong ngoặc: đặt dấu "$-$" trước ngoặc thì các số hạng đưa vào cũng phải đổi dấu. Ví dụ $57-18-82=57-(18+82)=57-100=-43$.

## Ví dụ

Ta bắt đầu với hai số cùng dấu.

:::example Cộng hai số nguyên âm
Tính:

a) $(-12)+(-25)$;

b) $(-48)+(-52)$.

**Lời giải.**

a) Ta cộng hai phần số tự nhiên rồi đặt dấu "$-$" trước kết quả:
$$(-12)+(-25)=-(12+25)=-37.$$

b) Tương tự, ta có
$$(-48)+(-52)=-(48+52)=-100.$$

Vậy $(-12)+(-25)=-37$ và $(-48)+(-52)=-100$.
:::

Với hai số khác dấu, việc đầu tiên là xem số nào có phần số tự nhiên lớn hơn.

:::example Cộng hai số nguyên khác dấu
Tính:

a) $(-15)+9$;

b) $27+(-12)$;

c) $(-34)+34$.

**Lời giải.**

a) Vì $15>9$ nên tổng mang dấu "$-$" của số $-15$. Ta có
$$(-15)+9=-(15-9)=-6.$$

b) Vì $27>12$ nên tổng mang dấu "$+$" của số $27$. Ta có
$$27+(-12)=27-12=15.$$

c) Hai số $-34$ và $34$ đối nhau nên $(-34)+34=0$.

Vậy kết quả lần lượt là $-6$; $15$; $0$.
:::

Phép trừ luôn đổi về phép cộng với số đối. Bạn hãy viết rõ bước đổi này trong những bài đầu.

:::example Trừ hai số nguyên
Tính:

a) $7-12$;

b) $(-8)-5$;

c) $6-(-9)$;

d) $(-20)-(-14)$.

**Lời giải.**

a) Ta có $7-12=7+(-12)=-(12-7)=-5$.

b) Ta có $(-8)-5=(-8)+(-5)=-(8+5)=-13$.

c) Số đối của $-9$ là $9$, nên $6-(-9)=6+9=15$.

d) Số đối của $-14$ là $14$, nên $(-20)-(-14)=(-20)+14=-(20-14)=-6$.

Vậy kết quả lần lượt là $-5$; $-13$; $15$; $-6$.
:::

Khi có nhiều số hạng, đừng vội cộng từ trái sang phải. Nhìn xem có những số nào "hợp" với nhau.

:::example Tính một cách hợp lí
Tính $46+(-137)+54+(-63)$.

**Lời giải.**

Ta thấy $46+54$ tròn trăm và $137+63$ cũng tròn trăm. Dùng tính chất giao hoán và kết hợp, ta nhóm các số dương với nhau, các số âm với nhau:
$$\begin{aligned}
46+(-137)+54+(-63)&=(46+54)+[(-137)+(-63)]\\
&=100+(-200)\\
&=-100.
\end{aligned}$$

Vậy $46+(-137)+54+(-63)=-100$.
:::

Quy tắc dấu ngoặc giúp những phép tính trông cồng kềnh trở nên nhẹ hẳn.

:::example Bỏ dấu ngoặc rồi tính
Tính:

a) $215-(115-80)$;

b) $(-325)+(325-46)$;

c) $(39-2024)-(39-24)$.

**Lời giải.**

a) Trước ngoặc có dấu "$-$" nên khi bỏ ngoặc ta đổi dấu các số hạng trong ngoặc:
$$215-(115-80)=215-115+80=100+80=180.$$

b) Trước ngoặc có dấu "$+$" nên ta giữ nguyên dấu các số hạng trong ngoặc:
$$(-325)+(325-46)=-325+325-46=0-46=-46.$$

c) Ngoặc thứ nhất không có dấu "$-$" đằng trước nên giữ nguyên dấu; ngoặc thứ hai có dấu "$-$" đằng trước nên đổi dấu:
$$\begin{aligned}
(39-2024)-(39-24)&=39-2024-39+24\\
&=(39-39)+(-2024+24)\\
&=0+(-2000)\\
&=-2000.
\end{aligned}$$

Vậy kết quả lần lượt là $180$; $-46$; $-2000$.
:::

Cuối cùng, ta trở lại với chiếc tàu ngầm, lần này đi cả ba chặng.

:::example Hành trình của tàu ngầm
Một tàu ngầm đang ở độ cao $-45$ m so với mặt nước biển. Tàu nổi lên $28$ m, sau đó lặn xuống $36$ m. Hỏi sau hai lần di chuyển, tàu ở độ cao bao nhiêu mét so với mặt nước biển?

**Lời giải.**

*Hiểu đề.* Mặt nước biển là mốc $0$. Tàu xuất phát ở $-45$ m, đi lên $28$ m rồi đi xuống $36$ m. Cần tìm độ cao cuối cùng.

*Tìm cách giải.* Đi lên là cộng thêm một số dương, đi xuống là trừ đi. Ta viết cả hành trình thành một biểu thức.

*Giải.* Độ cao của tàu sau hai lần di chuyển là
$$\begin{aligned}
-45+28-36&=(-45)+28+(-36)\\
&=[(-45)+(-36)]+28\\
&=(-81)+28\\
&=-53\ (\text{m}).
\end{aligned}$$

Vậy sau hai lần di chuyển, tàu ở độ cao $-53$ m, tức là $53$ m dưới mặt nước biển.

*Nhìn lại.* Kết quả có hợp lí không? Tàu đi lên $28$ m nhưng đi xuống tới $36$ m, tức là rốt cuộc xuống thêm $8$ m so với lúc đầu. Mà $-45-8=-53$, khớp với kết quả trên.
:::

:::warning Những chỗ hay nhầm
- **Cộng hai số âm lại ra số dương.** Sai: $(-7)+(-5)=12$. Vì sao sai: nhầm với quy tắc "âm nhân âm ra dương" của phép nhân; nợ thêm thì chỉ nợ nhiều hơn. Đúng: $(-7)+(-5)=-12$.
- **Cộng hai số khác dấu mà lấy sai dấu.** Sai: $(-15)+9=6$. Vì sao sai: số $-15$ "mạnh hơn" vì $15>9$, nên tổng phải mang dấu "$-$". Đúng: $(-15)+9=-6$.
- **Trừ số âm mà quên đổi thành cộng.** Sai: $6-(-9)=-3$. Vì sao sai: trừ $-9$ là cộng với số đối của $-9$, tức là cộng $9$. Đúng: $6-(-9)=6+9=15$.
- **Bỏ ngoặc có dấu "$-$" đằng trước mà chỉ đổi dấu số đầu tiên.** Sai: $215-(115-80)=215-115-80$. Vì sao sai: phải đổi dấu tất cả các số hạng trong ngoặc. Đúng: $215-(115-80)=215-115+80$.
:::

## Thuật ngữ

:::terms
- phép cộng số nguyên | addition of integers
- phép trừ số nguyên | subtraction of integers
- hai số cùng dấu | numbers with the same sign
- hai số khác dấu | numbers with different signs
- số đối | opposite number
- tính chất giao hoán | commutative property
- tính chất kết hợp | associative property
- quy tắc dấu ngoặc | bracket rule
- bỏ dấu ngoặc | removing brackets
:::

## Tóm tắt

- Hai số âm: cộng hai phần số tự nhiên, đặt dấu "$-$" trước kết quả. Ví dụ $(-20)+(-15)=-35$.
- Hai số khác dấu: lấy phần số lớn trừ phần số nhỏ, kết quả mang dấu của số có phần số lớn hơn. Ví dụ $(-35)+50=15$; $(-35)+10=-25$. Hai số đối nhau có tổng bằng $0$.
- Phép cộng số nguyên có tính giao hoán, kết hợp; nhờ đó ta được đổi chỗ, nhóm các số để tính cho nhanh.
- Trừ là cộng với số đối: $a-b=a+(-b)$. Riêng $a-(-b)=a+b$.
- Bỏ ngoặc: trước ngoặc là dấu "$+$" thì giữ nguyên dấu; trước ngoặc là dấu "$-$" thì đổi dấu tất cả các số hạng trong ngoặc.

Trở lại câu hỏi đầu bài: tàu ngầm ở $-20$ m lặn thêm $15$ m thì tới $-35$ m, rồi nổi lên $50$ m thì tới $15$ m, tức là đã ở trên mặt nước. Bạn không cần vẽ cột số nào nữa, chỉ cần hai quy tắc cộng. Bài sau, ta học tiếp [phép nhân số nguyên](lesson:multiplying-integers).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Tính:

a) $(-17)+(-28)$;

b) $(-36)+19$;

c) $45+(-18)$;

d) $(-63)+63$.

::hint
**Kiến thức:** hai quy tắc cộng hai số nguyên cùng dấu và khác dấu; hai số đối nhau có tổng bằng $0$.

**Gợi ý các bước:**
1. Xem hai số cùng dấu hay khác dấu.
2. Cùng dấu âm: cộng hai phần số, đặt dấu "$-$". Khác dấu: lấy phần số lớn trừ phần số nhỏ, đặt dấu của số có phần số lớn hơn.

::solution
a) Hai số cùng là số âm nên $(-17)+(-28)=-(17+28)=-45$.

b) Hai số khác dấu, $36>19$ nên tổng mang dấu "$-$": $(-36)+19=-(36-19)=-17$.

c) Hai số khác dấu, $45>18$ nên tổng mang dấu "$+$": $45+(-18)=45-18=27$.

d) Hai số $-63$ và $63$ đối nhau nên $(-63)+63=0$.

Vậy kết quả lần lượt là $-45$; $-17$; $27$; $0$.

**Đáp số.** a) $-45$; b) $-17$; c) $27$; d) $0$.
:::

:::exercise
Tính:

a) $9-21$;

b) $(-14)-6$;

c) $13-(-7)$;

d) $(-30)-(-45)$.

::hint
**Kiến thức:** $a-b=a+(-b)$.

**Gợi ý các bước:**
1. Đổi phép trừ thành phép cộng với số đối của số trừ.
2. Thực hiện phép cộng hai số nguyên.

::solution
a) Ta có $9-21=9+(-21)=-(21-9)=-12$.

b) Ta có $(-14)-6=(-14)+(-6)=-(14+6)=-20$.

c) Số đối của $-7$ là $7$, nên $13-(-7)=13+7=20$.

d) Số đối của $-45$ là $45$, nên $(-30)-(-45)=(-30)+45=45-30=15$.

Vậy kết quả lần lượt là $-12$; $-20$; $20$; $15$.

**Đáp số.** a) $-12$; b) $-20$; c) $20$; d) $15$.
:::

:::exercise
Tính một cách hợp lí:

a) $(-29)+64+(-71)+36$;

b) $125+(-58)+(-125)+(-42)$.

::hint
**Kiến thức:** tính chất giao hoán, kết hợp; hai số đối nhau có tổng bằng $0$.

**Gợi ý các bước:**
1. Tìm các cặp số có tổng tròn trăm hoặc đối nhau.
2. Nhóm các cặp đó lại rồi tính.

::solution
a) Ta nhóm hai số âm với nhau, hai số dương với nhau:
$$\begin{aligned}
(-29)+64+(-71)+36&=[(-29)+(-71)]+(64+36)\\
&=(-100)+100\\
&=0.
\end{aligned}$$

b) Ta thấy $125$ và $-125$ đối nhau, còn $58+42=100$. Do đó
$$\begin{aligned}
125+(-58)+(-125)+(-42)&=[125+(-125)]+[(-58)+(-42)]\\
&=0+(-100)\\
&=-100.
\end{aligned}$$

Vậy kết quả lần lượt là $0$ và $-100$.

**Đáp số.** a) $0$; b) $-100$.
:::

:::exercise
Bỏ dấu ngoặc rồi tính:

a) $148-(48-25)$;

b) $(-76)+(76-130)$;

c) $(53-170)-(53-70)$.

::hint
**Kiến thức:** quy tắc dấu ngoặc. Trước ngoặc là dấu "$-$" thì đổi dấu tất cả các số hạng trong ngoặc.

**Gợi ý các bước:**
1. Xem dấu đứng trước mỗi ngoặc.
2. Bỏ ngoặc, rồi nhóm các số đối nhau hoặc các số tròn chục, tròn trăm.

::solution
a) Trước ngoặc có dấu "$-$" nên ta đổi dấu các số hạng trong ngoặc:
$$148-(48-25)=148-48+25=100+25=125.$$

b) Trước ngoặc có dấu "$+$" nên ta giữ nguyên dấu:
$$(-76)+(76-130)=-76+76-130=0-130=-130.$$

c) Ngoặc thứ nhất giữ nguyên dấu, ngoặc thứ hai đổi dấu:
$$\begin{aligned}
(53-170)-(53-70)&=53-170-53+70\\
&=(53-53)+(-170+70)\\
&=-100.
\end{aligned}$$

Vậy kết quả lần lượt là $125$; $-130$; $-100$.

**Đáp số.** a) $125$; b) $-130$; c) $-100$.
:::

:::exercise
Tìm số nguyên $x$, biết:

a) $x+15=7$;

b) $x-(-9)=4$.

::hint
**Kiến thức:** số hạng chưa biết bằng tổng trừ đi số hạng đã biết; số bị trừ bằng hiệu cộng với số trừ.

**Gợi ý các bước:**
1. Xác định $x$ đóng vai trò gì trong phép tính.
2. Viết phép tính tìm $x$ rồi thực hiện với số nguyên.

::solution
a) Ta có $x+15=7$.

Số hạng chưa biết bằng tổng trừ đi số hạng đã biết, nên
$$x=7-15=7+(-15)=-8.$$

b) Ta có $x-(-9)=4$.

Số bị trừ bằng hiệu cộng với số trừ, nên
$$x=4+(-9)=-(9-4)=-5.$$

Thử lại: $(-8)+15=7$ và $(-5)-(-9)=(-5)+9=4$, đều đúng.

Vậy a) $x=-8$; b) $x=-5$.

**Đáp số.** a) $x=-8$; b) $x=-5$.
:::

:::exercise
Nhiệt độ trong một kho đông lạnh đang là $-18^\circ\text{C}$. Do mất điện, nhiệt độ trong kho tăng thêm $7^\circ\text{C}$. Khi có điện trở lại, máy lạnh làm nhiệt độ giảm đi $9^\circ\text{C}$. Hỏi lúc đó nhiệt độ trong kho là bao nhiêu độ C?

::hint
**Kiến thức:** tăng nhiệt độ là cộng thêm, giảm nhiệt độ là trừ đi.

**Gợi ý các bước:**
1. Viết một biểu thức cho cả quá trình: bắt đầu từ $-18$, cộng $7$, trừ $9$.
2. Tính giá trị của biểu thức.

::solution
Nhiệt độ ban đầu là $-18^\circ\text{C}$, tăng $7^\circ\text{C}$ rồi giảm $9^\circ\text{C}$.

Nhiệt độ trong kho lúc sau là
$$\begin{aligned}
-18+7-9&=(-18)+7+(-9)\\
&=[(-18)+(-9)]+7\\
&=(-27)+7\\
&=-20\ (^\circ\text{C}).
\end{aligned}$$

Vậy lúc đó nhiệt độ trong kho là $-20^\circ\text{C}$.

**Đáp số.** $-20^\circ\text{C}$.
:::

:::exercise
Nhà bác học Archimedes sinh vào khoảng năm $287$ trước Công nguyên và mất năm $212$ trước Công nguyên (theo Bách khoa toàn thư Britannica). Coi năm sinh là $-287$ và năm mất là $-212$. Hãy tính xem ông sống thọ khoảng bao nhiêu tuổi.

::hint
**Kiến thức:** tuổi thọ bằng năm mất trừ đi năm sinh; $a-(-b)=a+b$.

**Gợi ý các bước:**
1. Viết hiệu $(-212)-(-287)$.
2. Đổi phép trừ thành phép cộng với số đối.

::solution
Tuổi thọ của Archimedes bằng năm mất trừ đi năm sinh.

Ta có
$$(-212)-(-287)=(-212)+287=287-212=75.$$

Vậy Archimedes sống thọ khoảng $75$ tuổi.

**Đáp số.** Khoảng $75$ tuổi.
:::

:::exercise Thử thách
Tính tổng tất cả các số nguyên $x$ thoả mãn $-7<x\le5$.

::hint
**Kiến thức:** hai số đối nhau có tổng bằng $0$; tính chất giao hoán và kết hợp.

**Gợi ý các bước:**
1. Liệt kê các số nguyên $x$ thoả mãn đề bài.
2. Ghép các cặp số đối nhau, xem số nào không có cặp.

::solution
Các số nguyên $x$ thoả mãn $-7<x\le5$ là
$$-6;\ -5;\ -4;\ -3;\ -2;\ -1;\ 0;\ 1;\ 2;\ 3;\ 4;\ 5.$$

Ta ghép các cặp số đối nhau: $(-5)+5=0$; $(-4)+4=0$; $(-3)+3=0$; $(-2)+2=0$; $(-1)+1=0$.

Chỉ còn lại hai số $-6$ và $0$ không có cặp. Do đó tổng cần tìm là
$$(-6)+0+0+0+0+0+0=-6.$$

Vậy tổng tất cả các số nguyên $x$ thoả mãn $-7<x\le5$ bằng $-6$.

**Đáp số.** $-6$.
:::

## Kiểm tra mini

:::quiz
::mc
Kết quả của phép tính $(-25)+(-15)$ là
A. $-10$.
B. $40$.
C. $-40$.
D. $10$.
::key C
$(-25)+(-15)=-(25+15)=-40$. A lấy hiệu thay vì tổng; B quên dấu "$-$"; D vừa lấy hiệu vừa sai dấu.

::mc
Kết quả của phép tính $(-18)+11$ là
A. $-7$.
B. $7$.
C. $-29$.
D. $29$.
::key A
Hai số khác dấu, $18>11$ nên tổng là $-(18-11)=-7$. B sai dấu; C cộng hai phần số như cùng dấu; D cộng hai phần số và quên dấu.

::mc
Kết quả của phép tính $5-(-8)$ là
A. $-3$.
B. $3$.
C. $-13$.
D. $13$.
::key D
$5-(-8)=5+8=13$. A tính $5-8$, quên đổi dấu; B tính $8-5$; C đổi sai dấu cả hai số.

::mc
Với $a$, $b$, $c$ là các số nguyên, biểu thức $a-(b-c)$ bằng
A. $a-b-c$.
B. $a-b+c$.
C. $a+b-c$.
D. $a+b+c$.
::key B
Trước ngoặc có dấu "$-$" nên đổi dấu cả hai số hạng: $a-(b-c)=a-b+c$. A chỉ đổi dấu số hạng đầu; C đổi dấu ngược; D sai cả hai.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) Tổng của một số nguyên dương và một số nguyên âm luôn là một số nguyên dương.
b) Tổng của hai số nguyên âm là một số nguyên âm.
c) Hiệu của hai số nguyên âm luôn là một số nguyên âm.
d) Hai số nguyên đối nhau có tổng bằng $0$.
::key S Đ S Đ
a) Sai: ví dụ $3+(-5)=-2$ là số âm. b) Đúng: $(-a)+(-b)=-(a+b)$. c) Sai: ví dụ $(-2)-(-5)=3$ là số dương. d) Đúng: $a+(-a)=0$.

::sa
Tính giá trị của biểu thức $(-120)+75-(-45)$.
::key 0
$(-120)+75-(-45)=(-120)+75+45=(-120)+120=0$.

::sa
Lúc $5$ giờ sáng nhiệt độ là $-6^\circ\text{C}$, đến trưa nhiệt độ là $4^\circ\text{C}$. Từ $5$ giờ sáng đến trưa, nhiệt độ đã tăng bao nhiêu độ C?
::key 10
Mức tăng bằng nhiệt độ lúc sau trừ nhiệt độ lúc đầu: $4-(-6)=4+6=10$ (độ C).
:::
