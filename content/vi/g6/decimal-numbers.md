---
title: Số thập phân. Tính toán với số thập phân
description: Mở rộng số thập phân sang số âm, so sánh số thập phân, cộng, trừ, nhân, chia số thập phân và dùng tính chất để tính nhanh.
minutes: 35
---

:::goals
- Nhận biết số thập phân âm, số đối của một số thập phân; đổi qua lại giữa số thập phân và phân số thập phân.
- So sánh và sắp xếp được các số thập phân, kể cả số thập phân âm.
- Cộng, trừ, nhân, chia được các số thập phân, xác định đúng dấu của kết quả.
- Dùng tính chất của các phép tính để tính hợp lí và giải bài toán thực tế.
:::

Bản tin thời tiết một buổi sáng mùa đông đọc: "Nhiệt độ trên đỉnh núi là âm $2{,}4$ độ C." Trên nhiệt kế, vạch chỉ nằm dưới số $0$, ở khoảng giữa $-2$ và $-3$. Một bạn học sinh bơi $50$ m hết $34{,}75$ giây, lần sau hết $33{,}9$ giây. Lần sau nhanh hơn bao nhiêu giây?

Số thập phân bạn đã gặp từ tiểu học, nhưng khi đó chỉ có số dương. Giờ đã có số nguyên âm và phân số âm, số thập phân cũng có thêm "nửa bên kia" của trục số. Tin vui là: mọi quy tắc về dấu bạn vừa học với số nguyên vẫn dùng được nguyên vẹn.

## Số thập phân âm

Phân số mà mẫu là luỹ thừa của $10$ gọi là **phân số thập phân**, ví dụ $\dfrac{7}{10}$, $\dfrac{-25}{100}$, $\dfrac{-2021}{1000}$. Mọi phân số thập phân đều viết được dưới dạng số thập phân:
$$\dfrac{7}{10}=0{,}7;\qquad \dfrac{-25}{100}=-0{,}25;\qquad \dfrac{-2021}{1000}=-2{,}021.$$

Các số $-0{,}25$; $-2{,}021$ là **số thập phân âm**. Cũng như trước, mỗi số thập phân gồm phần nguyên ở bên trái dấu phẩy và phần thập phân ở bên phải dấu phẩy. Với $-2{,}021$, ta đọc là "âm hai phẩy không hai mốt".

:::definition Số đối của một số thập phân
Số đối của số thập phân $a$ là $-a$. Hai số đối nhau nằm về hai phía của điểm $0$ trên trục số và cách đều điểm $0$. Ví dụ số đối của $1{,}5$ là $-1{,}5$; số đối của $-0{,}08$ là $0{,}08$.
:::

Muốn đổi số thập phân thành phân số, ta làm ngược lại rồi rút gọn: $-0{,}125=\dfrac{-125}{1000}=\dfrac{-1}{8}$.

## So sánh hai số thập phân

Trên trục số nằm ngang, số nào ở bên trái thì nhỏ hơn. Hình dưới đây đặt một vài số thập phân lên trục số.

:::graph Một số số thập phân trên trục số
alt: Trục số từ -1,5 đến 1 có các điểm -1,25; -1; -0,8; 0; 0,5 theo thứ tự từ trái sang phải
x: -1.7..1.2
y: -1..1
shape: free
segment: (-1.7, 0) (1.2, 0)
point: (-1.25, 0) "-1,25" above
point: (-1, 0) "-1" below
point: (-0.8, 0) "-0,8" above
point: (0, 0) "0" below
point: (0.5, 0) "0,5" below
point: (1, 0) "1" below
:::

Với hai số thập phân dương, ta so sánh như ở tiểu học: phần nguyên lớn hơn thì số lớn hơn; nếu phần nguyên bằng nhau thì so sánh lần lượt từng hàng phần mười, phần trăm, … Với số âm, ta làm giống như với số nguyên.

:::theorem So sánh hai số thập phân
- Số thập phân âm luôn nhỏ hơn $0$ và nhỏ hơn mọi số thập phân dương.
- Nếu $a$ và $b$ là hai số thập phân dương và $a>b$ thì $-a<-b$.
:::

Ví dụ: $3{,}25<3{,}4$ (vì ở hàng phần mười $2<4$), nên $-3{,}25>-3{,}4$. Một lần nữa, chỗ hay nhầm là số âm: "trông lớn hơn" lại nhỏ hơn.

## Cộng, trừ, nhân, chia số thập phân

Cách đặt tính và cách làm với phần số thì bạn đã biết từ tiểu học. Cái mới chỉ là **dấu**, và dấu thì theo đúng quy tắc của số nguyên:

- **Cộng hai số cùng dấu**: cộng hai phần số, giữ dấu chung. **Cộng hai số khác dấu**: lấy phần số lớn trừ phần số nhỏ, đặt dấu của số có phần số lớn hơn.
- **Trừ** là cộng với số đối: $a-b=a+(-b)$.
- **Nhân, chia**: nhân, chia hai phần số; hai số cùng dấu thì kết quả dương, khác dấu thì kết quả âm.

:::note Tính chất của các phép tính
Phép cộng và phép nhân số thập phân có đủ tính chất giao hoán, kết hợp, phân phối như với số nguyên và phân số. Quy tắc dấu ngoặc và thứ tự thực hiện phép tính cũng giữ nguyên.
:::

Vì sao mọi thứ vẫn giữ nguyên? Vì mỗi số thập phân thực chất là một phân số thập phân. Các phép tính với số thập phân chính là các phép tính với phân số, chỉ được viết gọn hơn.

Hai cặp số rất hay dùng để tính nhanh: $2{,}5\cdot4=10$ và $1{,}25\cdot8=10$; ngoài ra $0{,}25\cdot4=1$, $0{,}5\cdot2=1$.

## Ví dụ

Ta bắt đầu bằng việc đổi qua lại giữa phân số và số thập phân.

:::example Phân số thập phân và số thập phân
a) Viết phân số $\dfrac{-37}{100}$ dưới dạng số thập phân.

b) Viết các số thập phân $2{,}05$ và $-0{,}125$ dưới dạng phân số tối giản.

**Lời giải.**

a) Ta có $\dfrac{-37}{100}=-0{,}37$.

b) Ta có $2{,}05=\dfrac{205}{100}$. Vì ƯCLN$(205, 100)=5$ nên $\dfrac{205}{100}=\dfrac{41}{20}$.

Ta có $-0{,}125=\dfrac{-125}{1000}$. Vì ƯCLN$(125, 1000)=125$ nên $\dfrac{-125}{1000}=\dfrac{-1}{8}$.

Vậy a) $-0{,}37$; b) $2{,}05=\dfrac{41}{20}$ và $-0{,}125=\dfrac{-1}{8}$.
:::

Tiếp theo là so sánh và sắp xếp, với cả số âm lẫn số dương.

:::example So sánh và sắp xếp
a) So sánh $-3{,}25$ và $-3{,}4$.

b) Sắp xếp các số sau theo thứ tự tăng dần: $-1{,}2$; $0{,}5$; $-1{,}25$; $0$; $-0{,}8$.

**Lời giải.**

a) So sánh hai số đối của chúng: $3{,}25$ và $3{,}4$ có cùng phần nguyên $3$; ở hàng phần mười, $2<4$, nên $3{,}25<3{,}4$.

Do đó $-3{,}25>-3{,}4$.

b) Các số âm là $-1{,}2$; $-1{,}25$; $-0{,}8$. Ta có $0{,}8<1{,}2<1{,}25$, nên
$$-1{,}25<-1{,}2<-0{,}8.$$

Các số âm nhỏ hơn $0$, và $0<0{,}5$.

Vậy các số xếp theo thứ tự tăng dần là $-1{,}25$; $-1{,}2$; $-0{,}8$; $0$; $0{,}5$.
:::

Bây giờ đến phép cộng và phép trừ.

:::example Cộng, trừ số thập phân
Tính:

a) $(-2{,}5)+(-1{,}75)$;

b) $3{,}2-5{,}75$;

c) $(-4{,}6)-(-1{,}35)$.

**Lời giải.**

a) Hai số cùng âm nên cộng hai phần số và giữ dấu "$-$":
$$(-2{,}5)+(-1{,}75)=-(2{,}5+1{,}75)=-4{,}25.$$

b) Đổi thành phép cộng với số đối. Hai số khác dấu, $5{,}75>3{,}2$ nên kết quả mang dấu "$-$":
$$3{,}2-5{,}75=3{,}2+(-5{,}75)=-(5{,}75-3{,}2)=-2{,}55.$$

c) Số đối của $-1{,}35$ là $1{,}35$. Hai số khác dấu, $4{,}6>1{,}35$ nên kết quả mang dấu "$-$":
$$(-4{,}6)-(-1{,}35)=(-4{,}6)+1{,}35=-(4{,}6-1{,}35)=-3{,}25.$$

Vậy kết quả lần lượt là $-4{,}25$; $-2{,}55$; $-3{,}25$.
:::

Phép nhân và phép chia chỉ cần thêm một bước: xác định dấu trước.

:::example Nhân, chia số thập phân
Tính:

a) $(-1{,}25)\cdot0{,}8$;

b) $(-3{,}6):(-0{,}12)$;

c) $0{,}45\cdot(-20)$.

**Lời giải.**

a) Hai số khác dấu nên tích âm. Ta có $1{,}25\cdot0{,}8=1$, nên
$$(-1{,}25)\cdot0{,}8=-1.$$

b) Hai số cùng dấu nên thương dương. Ta có $3{,}6:0{,}12=360:12=30$, nên
$$(-3{,}6):(-0{,}12)=30.$$

c) Hai số khác dấu nên tích âm. Ta có $0{,}45\cdot20=9$, nên
$$0{,}45\cdot(-20)=-9.$$

Vậy kết quả lần lượt là $-1$; $30$; $-9$.
:::

Các tính chất giúp tránh những phép nhân dài.

:::example Tính một cách hợp lí
Tính:

a) $2{,}5\cdot(-0{,}73)\cdot4$;

b) $(-3{,}7)\cdot2{,}6+(-3{,}7)\cdot7{,}4$.

**Lời giải.**

a) Dùng tính chất giao hoán và kết hợp, ta nhóm $2{,}5$ với $4$:
$$2{,}5\cdot(-0{,}73)\cdot4=(2{,}5\cdot4)\cdot(-0{,}73)=10\cdot(-0{,}73)=-7{,}3.$$

b) Hai tích có thừa số chung là $-3{,}7$. Dùng tính chất phân phối:
$$(-3{,}7)\cdot2{,}6+(-3{,}7)\cdot7{,}4=(-3{,}7)\cdot(2{,}6+7{,}4)=(-3{,}7)\cdot10=-37.$$

Vậy a) $-7{,}3$; b) $-37$.
:::

Cuối cùng, ta trở lại với nhiệt độ trên núi.

:::example Nhiệt độ trong một ngày
Lúc $6$ giờ sáng, nhiệt độ trên đỉnh núi là $-2{,}4^\circ\text{C}$. Đến trưa, nhiệt độ tăng thêm $6{,}5^\circ\text{C}$. Đến tối, nhiệt độ giảm $3{,}8^\circ\text{C}$ so với buổi trưa. Tính nhiệt độ trên đỉnh núi lúc tối.

**Lời giải.**

*Hiểu đề.* Nhiệt độ ban đầu là số âm. Tăng là cộng thêm, giảm là trừ đi. Cần tìm nhiệt độ cuối cùng.

*Tìm cách giải.* Viết cả quá trình thành một biểu thức rồi tính.

*Giải.* Nhiệt độ trên đỉnh núi lúc tối là
$$\begin{aligned}
-2{,}4+6{,}5-3{,}8&=(6{,}5-2{,}4)-3{,}8\\
&=4{,}1-3{,}8\\
&=0{,}3\ (^\circ\text{C}).
\end{aligned}$$

Vậy lúc tối nhiệt độ trên đỉnh núi là $0{,}3^\circ\text{C}$.

*Nhìn lại.* Có cách khác không? Cả ngày nhiệt độ tăng $6{,}5$ rồi giảm $3{,}8$, tức là tăng tất cả $6{,}5-3{,}8=2{,}7^\circ\text{C}$. Lấy $-2{,}4+2{,}7=0{,}3$, cùng kết quả.
:::

:::warning Những chỗ hay nhầm
- **So sánh số thập phân âm như số dương.** Sai: $-3{,}4>-3{,}25$ "vì $3{,}4>3{,}25$". Vì sao sai: với số âm, số nào có phần số lớn hơn thì nhỏ hơn. Đúng: $-3{,}4<-3{,}25$.
- **So sánh bằng cách đếm chữ số.** Sai: $3{,}25>3{,}4$ "vì $325>34$". Vì sao sai: phải so sánh từng hàng từ trái sang phải, bắt đầu từ phần nguyên. Đúng: ở hàng phần mười $2<4$, nên $3{,}25<3{,}4$.
- **Quên dấu khi trừ.** Sai: $3{,}2-5{,}75=2{,}55$. Vì sao sai: số trừ lớn hơn số bị trừ nên hiệu phải âm. Đúng: $3{,}2-5{,}75=-2{,}55$.
- **Đặt sai dấu phẩy khi chia.** Sai: $3{,}6:0{,}12=3$. Vì sao sai: phải dời dấu phẩy ở cả số bị chia và số chia cùng một số chữ số: $360:12$. Đúng: $3{,}6:0{,}12=30$.
:::

## Thuật ngữ

:::terms
- số thập phân | decimal
- số thập phân âm | negative decimal
- phân số thập phân | decimal fraction
- phần nguyên | whole-number part
- phần thập phân | decimal part
- hàng phần mười | tenths place
- hàng phần trăm | hundredths place
- dấu phẩy thập phân | decimal comma
- số đối | opposite number
:::

## Tóm tắt

- Phân số thập phân (mẫu là luỹ thừa của $10$) viết được thành số thập phân: $\dfrac{-25}{100}=-0{,}25$. Ngược lại, đổi số thập phân thành phân số rồi rút gọn.
- Số đối của $a$ là $-a$. Số thập phân âm nhỏ hơn $0$ và nhỏ hơn mọi số dương; nếu $a>b>0$ thì $-a<-b$.
- Cộng, trừ, nhân, chia số thập phân: phần số làm như ở tiểu học, dấu theo quy tắc của số nguyên.
- Các tính chất giao hoán, kết hợp, phân phối, quy tắc dấu ngoặc vẫn đúng; nhớ $2{,}5\cdot4=10$; $1{,}25\cdot8=10$; $0{,}25\cdot4=1$.

Bạn học sinh bơi ở đầu bài đã nhanh hơn $34{,}75-33{,}9=0{,}85$ giây. Còn $-2{,}4^\circ\text{C}$ trên đỉnh núi, giờ bạn biết nó nằm ở đâu và tính được nó thay đổi thế nào trong ngày. Bài sau, ta học cách [làm tròn và ước lượng](lesson:rounding-and-estimating), một kĩ năng mà người lớn dùng hằng ngày khi đi chợ.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Viết các số sau dưới dạng số thập phân: $\dfrac{-7}{10}$; $\dfrac{13}{100}$; $\dfrac{-2021}{1000}$; $\dfrac{3}{4}$.

::hint
**Kiến thức:** phân số thập phân viết ngay được thành số thập phân; phân số khác thì đổi về phân số thập phân trước.

**Gợi ý các bước:**
1. Với ba phân số đầu: đếm số chữ số $0$ ở mẫu.
2. Với $\dfrac34$: nhân cả tử và mẫu với $25$.

::solution
Ta có $\dfrac{-7}{10}=-0{,}7$; $\dfrac{13}{100}=0{,}13$; $\dfrac{-2021}{1000}=-2{,}021$.

Ta có $\dfrac{3}{4}=\dfrac{3\cdot25}{4\cdot25}=\dfrac{75}{100}=0{,}75$.

Vậy các số thập phân lần lượt là $-0{,}7$; $0{,}13$; $-2{,}021$; $0{,}75$.

**Đáp số.** $-0{,}7$; $0{,}13$; $-2{,}021$; $0{,}75$.
:::

:::exercise
Viết các số thập phân sau dưới dạng phân số tối giản: $0{,}6$; $-1{,}25$; $-0{,}08$.

::hint
**Kiến thức:** viết thành phân số thập phân rồi rút gọn bằng ƯCLN.

**Gợi ý các bước:**
1. Đếm số chữ số ở phần thập phân để chọn mẫu $10$, $100$, …
2. Rút gọn.

::solution
Ta có $0{,}6=\dfrac{6}{10}=\dfrac{3}{5}$.

Ta có $-1{,}25=\dfrac{-125}{100}$. Vì ƯCLN$(125, 100)=25$ nên $\dfrac{-125}{100}=\dfrac{-5}{4}$.

Ta có $-0{,}08=\dfrac{-8}{100}$. Vì ƯCLN$(8, 100)=4$ nên $\dfrac{-8}{100}=\dfrac{-2}{25}$.

Vậy $0{,}6=\dfrac35$; $-1{,}25=\dfrac{-5}{4}$; $-0{,}08=\dfrac{-2}{25}$.

**Đáp số.** $\dfrac35$; $\dfrac{-5}{4}$; $\dfrac{-2}{25}$.
:::

:::exercise
So sánh:

a) $-5{,}08$ và $-5{,}8$;

b) $-0{,}999$ và $0{,}01$;

c) $-12{,}3$ và $-12{,}30$.

::hint
**Kiến thức:** số âm nhỏ hơn số dương; nếu $a>b>0$ thì $-a<-b$; thêm chữ số $0$ vào cuối phần thập phân không làm thay đổi số.

**Gợi ý các bước:**
1. Xét dấu của hai số.
2. Nếu cùng âm, so sánh hai số đối của chúng.

::solution
a) Ta so sánh $5{,}08$ và $5{,}8$: cùng phần nguyên $5$; ở hàng phần mười, $0<8$, nên $5{,}08<5{,}8$. Do đó $-5{,}08>-5{,}8$.

b) Số $-0{,}999$ là số âm, số $0{,}01$ là số dương. Do đó $-0{,}999<0{,}01$.

c) Ta có $12{,}30=12{,}3$, nên $-12{,}3=-12{,}30$.

Vậy a) $-5{,}08>-5{,}8$; b) $-0{,}999<0{,}01$; c) $-12{,}3=-12{,}30$.

**Đáp số.** a) $>$; b) $<$; c) $=$.
:::

:::exercise
Sắp xếp các số sau theo thứ tự giảm dần: $2{,}1$; $-3{,}05$; $-3{,}5$; $0$; $-0{,}7$; $2{,}01$.

::hint
**Kiến thức:** các số dương lớn hơn $0$, các số âm nhỏ hơn $0$.

**Gợi ý các bước:**
1. Sắp xếp các số dương, rồi đến $0$.
2. Sắp xếp các số âm: số nào có phần số nhỏ hơn thì lớn hơn.

::solution
Các số dương là $2{,}1$ và $2{,}01$. Ở hàng phần mười, $1>0$, nên $2{,}1>2{,}01$.

Số $0$ nhỏ hơn các số dương và lớn hơn các số âm.

Các số âm là $-3{,}05$; $-3{,}5$; $-0{,}7$. Ta có $0{,}7<3{,}05<3{,}5$, nên $-0{,}7>-3{,}05>-3{,}5$.

Vậy các số xếp theo thứ tự giảm dần là $2{,}1$; $2{,}01$; $0$; $-0{,}7$; $-3{,}05$; $-3{,}5$.

**Đáp số.** $2{,}1$; $2{,}01$; $0$; $-0{,}7$; $-3{,}05$; $-3{,}5$.
:::

:::exercise
Tính:

a) $(-6{,}25)+4{,}8$;

b) $-3{,}7-2{,}45$;

c) $1{,}2-(-0{,}85)$.

::hint
**Kiến thức:** quy tắc cộng hai số cùng dấu, khác dấu; $a-b=a+(-b)$.

**Gợi ý các bước:**
1. Đổi phép trừ thành phép cộng với số đối.
2. Xác định dấu rồi tính phần số.

::solution
a) Hai số khác dấu, $6{,}25>4{,}8$ nên kết quả mang dấu "$-$":
$$(-6{,}25)+4{,}8=-(6{,}25-4{,}8)=-1{,}45.$$

b) Ta có $-3{,}7-2{,}45=(-3{,}7)+(-2{,}45)$. Hai số cùng âm nên
$$(-3{,}7)+(-2{,}45)=-(3{,}7+2{,}45)=-6{,}15.$$

c) Số đối của $-0{,}85$ là $0{,}85$, nên
$$1{,}2-(-0{,}85)=1{,}2+0{,}85=2{,}05.$$

Vậy kết quả lần lượt là $-1{,}45$; $-6{,}15$; $2{,}05$.

**Đáp số.** a) $-1{,}45$; b) $-6{,}15$; c) $2{,}05$.
:::

:::exercise
Tính:

a) $(-0{,}25)\cdot(-1{,}6)$;

b) $4{,}5:(-0{,}15)$;

c) $(-2{,}4)\cdot0{,}5-1{,}8:0{,}6$.

::hint
**Kiến thức:** cùng dấu thì tích, thương dương; khác dấu thì âm. Nhân, chia trước; cộng, trừ sau.

**Gợi ý các bước:**
1. Xác định dấu của từng tích, thương.
2. Ở câu c), tính tích và thương trước rồi mới trừ.

::solution
a) Hai số cùng dấu nên tích dương:
$$(-0{,}25)\cdot(-1{,}6)=0{,}25\cdot1{,}6=0{,}4.$$

b) Hai số khác dấu nên thương âm. Ta có $4{,}5:0{,}15=450:15=30$, nên
$$4{,}5:(-0{,}15)=-30.$$

c) Thực hiện nhân, chia trước:
$$(-2{,}4)\cdot0{,}5=-1{,}2;\qquad 1{,}8:0{,}6=3.$$

Do đó
$$(-2{,}4)\cdot0{,}5-1{,}8:0{,}6=-1{,}2-3=-4{,}2.$$

Vậy kết quả lần lượt là $0{,}4$; $-30$; $-4{,}2$.

**Đáp số.** a) $0{,}4$; b) $-30$; c) $-4{,}2$.
:::

:::exercise
Tính một cách hợp lí:

a) $12{,}75+(-4{,}3)+(-12{,}75)+6{,}3$;

b) $0{,}25\cdot(-7{,}9)\cdot40$.

::hint
**Kiến thức:** hai số đối nhau có tổng bằng $0$; $0{,}25\cdot40=10$.

**Gợi ý các bước:**
1. Câu a): nhóm hai số đối nhau.
2. Câu b): nhóm $0{,}25$ với $40$.

::solution
a) Dùng tính chất giao hoán và kết hợp:
$$\begin{aligned}
12{,}75+(-4{,}3)+(-12{,}75)+6{,}3&=[12{,}75+(-12{,}75)]+[(-4{,}3)+6{,}3]\\
&=0+2=2.
\end{aligned}$$

b) Ta nhóm $0{,}25$ với $40$:
$$0{,}25\cdot(-7{,}9)\cdot40=(0{,}25\cdot40)\cdot(-7{,}9)=10\cdot(-7{,}9)=-79.$$

Vậy a) $2$; b) $-79$.

**Đáp số.** a) $2$; b) $-79$.
:::

:::exercise
Người ta ghi mực nước một hồ chứa so với mức bình thường (mực nước thấp hơn mức bình thường ghi bằng số âm). Cuối tháng Một, mực nước là $-0{,}35$ m. Trong tháng Hai, mực nước giảm thêm $0{,}4$ m. Trong tháng Ba, nhờ mưa, mực nước tăng $1{,}25$ m. Hỏi cuối tháng Ba, mực nước hồ cao hơn hay thấp hơn mức bình thường bao nhiêu mét?

::hint
**Kiến thức:** giảm là trừ, tăng là cộng; kết quả dương nghĩa là cao hơn mức bình thường.

**Gợi ý các bước:**
1. Viết biểu thức $-0{,}35-0{,}4+1{,}25$.
2. Tính rồi giải thích dấu của kết quả.

::solution
Mực nước hồ cuối tháng Ba so với mức bình thường là
$$\begin{aligned}
-0{,}35-0{,}4+1{,}25&=(-0{,}35)+(-0{,}4)+1{,}25\\
&=(-0{,}75)+1{,}25\\
&=0{,}5\ (\text{m}).
\end{aligned}$$

Kết quả là số dương nên mực nước cao hơn mức bình thường.

Vậy cuối tháng Ba, mực nước hồ cao hơn mức bình thường $0{,}5$ m.

**Đáp số.** Cao hơn $0{,}5$ m.
:::

:::exercise Thử thách
Tính nhanh:
$$(-1{,}5)+2{,}5+(-3{,}5)+4{,}5+(-5{,}5)+6{,}5+(-7{,}5)+8{,}5+(-9{,}5)+10{,}5.$$

::hint
**Kiến thức:** tính chất kết hợp; nhóm các số hạng thành từng cặp.

**Gợi ý các bước:**
1. Tính tổng của cặp đầu tiên $(-1{,}5)+2{,}5$.
2. Đếm xem có bao nhiêu cặp như thế.

::solution
Ta nhóm các số hạng thành từng cặp liên tiếp:
$$[(-1{,}5)+2{,}5]+[(-3{,}5)+4{,}5]+[(-5{,}5)+6{,}5]+[(-7{,}5)+8{,}5]+[(-9{,}5)+10{,}5].$$

Mỗi cặp có tổng bằng $1$, chẳng hạn $(-1{,}5)+2{,}5=1$ và $(-9{,}5)+10{,}5=1$.

Có $5$ cặp, nên tổng bằng
$$1+1+1+1+1=5.$$

Vậy giá trị của biểu thức là $5$.

**Đáp số.** $5$.
:::

## Kiểm tra mini

:::quiz
::mc
Số đối của $-3{,}07$ là
A. $3{,}07$.
B. $-3{,}07$.
C. $3{,}7$.
D. $-0{,}307$.
::key A
Số đối của $-3{,}07$ là $3{,}07$. B là chính số đó; C bỏ mất chữ số $0$; D dời sai dấu phẩy.

::mc
Kết quả của phép tính $(-1{,}8)+(-2{,}4)$ là
A. $0{,}6$.
B. $-0{,}6$.
C. $-4{,}2$.
D. $4{,}2$.
::key C
Hai số cùng âm: $-(1{,}8+2{,}4)=-4{,}2$. A và B lấy hiệu thay vì tổng; D quên dấu "$-$".

::mc
Khẳng định nào sau đây đúng?
A. $-2{,}5>-2{,}45$.
B. $-0{,}1<-0{,}01$.
C. $-3{,}2>0$.
D. $-1{,}5<-1{,}55$.
::key B
$0{,}1>0{,}01$ nên $-0{,}1<-0{,}01$. A và D so sánh số âm như số dương; C cho số âm lớn hơn $0$.

::mc
Kết quả của phép tính $(-0{,}6)\cdot(-0{,}5)$ là
A. $-0{,}3$.
B. $3$.
C. $0{,}03$.
D. $0{,}3$.
::key D
Hai số cùng dấu nên tích dương: $0{,}6\cdot0{,}5=0{,}3$. A sai dấu; B và C đặt sai dấu phẩy.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) Mọi số thập phân âm đều nhỏ hơn mọi số thập phân dương.
b) $-7{,}25>-7{,}2$.
c) $(-2{,}5)\cdot(-4)=10$.
d) $-0{,}5=\dfrac{-1}{2}$.
::key Đ S Đ Đ
a) Đúng: số âm nhỏ hơn $0$, số dương lớn hơn $0$. b) Sai: $7{,}25>7{,}2$ nên $-7{,}25<-7{,}2$. c) Đúng: cùng dấu, $2{,}5\cdot4=10$. d) Đúng: $-0{,}5=\dfrac{-5}{10}=\dfrac{-1}{2}$.

::sa
Tính giá trị của biểu thức $(-2{,}5)\cdot4+12{,}5$.
::key 2,5
$(-2{,}5)\cdot4=-10$; $-10+12{,}5=2{,}5$.

::sa
Lúc $6$ giờ sáng nhiệt độ là $-1{,}8^\circ\text{C}$, lúc $12$ giờ trưa nhiệt độ là $4{,}5^\circ\text{C}$. Nhiệt độ đã tăng bao nhiêu độ C?
::key 6,3
Mức tăng là $4{,}5-(-1{,}8)=4{,}5+1{,}8=6{,}3$ (độ C).
:::
