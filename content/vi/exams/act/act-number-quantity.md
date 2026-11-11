---
title: Số, đại lượng và tỉ lệ
description: ACT Math phần số và đại lượng: thay đổi phần trăm, tỉ số và tỉ lệ thức, tốc độ và đổi đơn vị, luỹ thừa và căn thức, kí hiệu khoa học, số phức.
minutes: 45
---

:::goals
- Tính phần trăm, các lần thay đổi phần trăm liên tiếp và bài toán tìm giá trị ban đầu.
- Giải bài toán tỉ số, tỉ lệ thức và tỉ lệ bản đồ.
- Đổi đơn vị và làm việc với tốc độ.
- Rút gọn biểu thức chứa luỹ thừa và căn thức, dùng kí hiệu khoa học.
- Cộng, nhân số phức và rút gọn luỹ thừa của $i$.
:::

Các câu về số và đại lượng là những điểm nhanh nhất của ACT, nhưng cũng là nơi lỗi cẩu thả gây thiệt hại nhiều nhất: tính phần trăm trên nhầm đại lượng, quên đổi đơn vị, mất dấu khi tính luỹ thừa của $i$. Bài này tập hợp những ý cần biết và cho thấy cách trình bày một lời giải nhanh, chắc chắn cho từng dạng.

## Phần trăm

Thay đổi $p\%$ nghĩa là nhân đại lượng với một **hệ số nhân (multiplier)**: tăng $p\%$ thì nhân với $1+\dfrac{p}{100}$, giảm $p\%$ thì nhân với $1-\dfrac{p}{100}$. Các lần thay đổi liên tiếp nhân các hệ số với nhau, nên không thể cộng đơn giản.

:::example Tăng 20% rồi giảm 20%
Một chiếc áo khoác giá $50$ đô la. Giá được tăng $20\%$, sau đó giá mới lại giảm $20\%$. Giá cuối cùng là bao nhiêu?
A. $50$ đô la
B. $48$ đô la
C. $46$ đô la
D. $52$ đô la

**Lời giải.** Lần tăng nhân giá với $1{,}2$ và lần giảm nhân giá với $0{,}8$.

Do đó giá cuối cùng là
$$50\times1{,}2\times0{,}8=50\times0{,}96=48.$$

Vậy giá cuối cùng là $48$ đô la, chọn đáp án **B**. Phương án A cho rằng $+20\%$ và $-20\%$ triệt tiêu nhau.
:::

## Tỉ số, tỉ lệ thức và tỉ lệ bản đồ

Nếu hai đại lượng có tỉ số $a:b$, hãy viết chúng là $ak$ và $bk$ với một số $k$ nào đó. Với tỉ lệ thức $\dfrac ab=\dfrac cd$, nhân chéo: $ad=bc$.

:::example Tỉ lệ bản đồ
Trên một bản đồ, $1$ cm ứng với $2{,}5$ km. Hai thị trấn cách nhau $7{,}2$ cm trên bản đồ. Khoảng cách thực tế giữa chúng là bao nhiêu?
A. $18$ km
B. $2{,}88$ km
C. $9{,}7$ km
D. $180$ km

**Lời giải.** Mỗi xăng-ti-mét trên bản đồ ứng với $2{,}5$ km, nên $7{,}2$ cm ứng với
$$7{,}2\times2{,}5=18\text{ km}.$$

Vậy hai thị trấn cách nhau $18$ km, chọn đáp án **A**. Phương án B chia thay vì nhân.
:::

## Tốc độ và đổi đơn vị

Hãy viết đơn vị ở mọi bước và rút gọn chúng như các con số. Chẳng hạn $1$ km $=1000$ m và $1$ h $=3600$ s, nên để đổi km/h sang m/s ta nhân với $\dfrac{1000}{3600}=\dfrac{1}{3{,}6}$.

:::example Từ km/h sang m/s
Một đoàn tàu chạy với tốc độ $72$ km/h. Tốc độ của nó tính bằng mét mỗi giây là bao nhiêu?
A. $259{,}2$
B. $7{,}2$
C. $20$
D. $1{,}2$

**Lời giải.** Ta đổi ki-lô-mét sang mét và giờ sang giây:
$$72\ \frac{\text{km}}{\text{h}}=\frac{72\times1000\text{ m}}{3600\text{ s}}=20\ \frac{\text{m}}{\text{s}}.$$

Vậy tốc độ của tàu là $20$ m/s, chọn đáp án **C**. Phương án A nhân với $3{,}6$ thay vì chia.
:::

## Luỹ thừa, căn thức và kí hiệu khoa học

:::note Các quy tắc cần nhớ
$$a^ma^n=a^{m+n},\qquad\frac{a^m}{a^n}=a^{m-n},\qquad\left(a^m\right)^n=a^{mn},\qquad a^{-n}=\frac{1}{a^n},$$
$$\sqrt{ab}=\sqrt a\sqrt b,\qquad a^{1/n}=\sqrt[n]{a}.$$
Một số viết dưới dạng kí hiệu khoa học có dạng $a\times10^n$ với $1\le a<10$.
:::

:::example Luỹ thừa của 2 và tổng căn thức
Biểu thức nào sau đây bằng $\dfrac{2^5\cdot4^3}{8^3}$?
A. $2$
B. $8$
C. $16$
D. $4$

**Lời giải.** Ta viết mọi thừa số dưới dạng luỹ thừa của $2$: $4^3=\left(2^2\right)^3=2^6$ và $8^3=\left(2^3\right)^3=2^9$.

Khi đó
$$\frac{2^5\cdot2^6}{2^9}=2^{5+6-9}=2^2=4.$$

Vậy biểu thức bằng $4$, chọn đáp án **D**.

Tương tự, căn thức được rút gọn bằng cách đưa thừa số chính phương ra ngoài: $\sqrt{50}+\sqrt{18}=5\sqrt2+3\sqrt2=8\sqrt2$.
:::

:::example Kí hiệu khoa học
Kết quả của $\dfrac{6\times10^8}{3\times10^{-2}}$ viết dưới dạng kí hiệu khoa học là
A. $2\times10^{6}$
B. $2\times10^{10}$
C. $3\times10^{10}$
D. $2\times10^{-16}$

**Lời giải.** Ta chia riêng phần số và phần luỹ thừa của $10$:
$$\frac{6}{3}\times10^{8-(-2)}=2\times10^{10}.$$

Vậy kết quả là $2\times10^{10}$, chọn đáp án **B**. Phương án A tính $8-2$ mà bỏ qua dấu âm.
:::

## Số phức

Số $i$ thoả mãn $i^2=-1$. Cộng hai số phức bằng cách cộng phần thực với nhau và phần ảo với nhau; nhân chúng như nhân hai nhị thức rồi thay $i^2$ bởi $-1$. Các luỹ thừa của $i$ lặp lại với chu kì $4$: $i,-1,-i,1$.

:::example Nhân hai số phức
Biểu thức nào sau đây bằng $(3+2i)(1-i)$?
A. $5-i$
B. $3-2i$
C. $1+i$
D. $5+i$

**Lời giải.** Ta khai triển tích như nhân hai nhị thức:
$$(3+2i)(1-i)=3-3i+2i-2i^2.$$

Vì $i^2=-1$ nên số hạng $-2i^2$ bằng $+2$, do đó tích bằng $3+2-i=5-i$.

Vậy $(3+2i)(1-i)=5-i$, chọn đáp án **A**.
:::

:::warning Những cái bẫy thường gặp
- **Cộng các phần trăm:** tăng $20\%$ rồi giảm $20\%$ là giảm $4\%$, không phải $0\%$.
- **Gốc của phần trăm:** "nhiều hơn $x$ là $25\%$" là $1{,}25x$, còn "$x$ nhiều hơn $y$ là $25\%$" nghĩa là $x=1{,}25y$.
- **Đổi đơn vị ngược chiều:** kiểm tra xem các đơn vị rút gọn có ra đúng đơn vị cần tìm không.
- **Quy tắc luỹ thừa với cơ số khác nhau:** hãy đưa về cùng cơ số trước.
- **Luỹ thừa của $i$:** chia số mũ cho $4$ và dùng số dư.
:::

:::terms
- percent increase / decrease | tăng / giảm phần trăm
- multiplier | hệ số nhân
- ratio, proportion | tỉ số, tỉ lệ thức
- scale | tỉ lệ bản đồ
- rate, unit conversion | tốc độ, đổi đơn vị
- exponent, radical | số mũ, căn thức
- scientific notation | kí hiệu khoa học
- complex number, imaginary unit | số phức, đơn vị ảo
:::

## Bài tập tương tự

:::exercise
Một đôi giày giá $80$ đô la. Giày được giảm giá $30\%$, sau đó cộng thêm $10\%$ thuế bán hàng trên giá đã giảm. Hỏi giá cuối cùng là bao nhiêu?

::hint
**Kiến thức:** các hệ số nhân $0{,}7$ và $1{,}1$.

**Gợi ý các bước:**
1. Nhân $80$ với $0{,}7$.
2. Nhân kết quả với $1{,}1$.

::solution
Giảm giá $30\%$ nghĩa là nhân giá với $0{,}7$, còn thuế $10\%$ nghĩa là nhân giá đã giảm với $1{,}1$.

Do đó giá cuối cùng là
$$80\times0{,}7\times1{,}1=56\times1{,}1=61{,}6.$$

Vậy giá cuối cùng của đôi giày là $61{,}60$ đô la.

**Đáp số.** $61{,}60$ đô la.
:::

:::exercise
Tỉ số giữa số học sinh nam và nữ trong một lớp là $3:5$. Lớp có $32$ học sinh. Hỏi lớp có bao nhiêu học sinh nam?

::hint
**Kiến thức:** viết số học sinh nam và nữ là $3k$ và $5k$.

::solution
Gọi số học sinh nam và nữ lần lượt là $3k$ và $5k$.

Ta có $3k+5k=32$, nên $8k=32$ và $k=4$.

Số học sinh nam là $3k=3\times4=12$, và số học sinh nữ là $5k=20$. Kiểm tra: $12+20=32$.

Vậy lớp có $12$ học sinh nam.

**Đáp số.** $12$.
:::

:::exercise
Một ô tô đi được $300$ km trong $3$ giờ $45$ phút. Tính tốc độ trung bình của ô tô theo km/h.

::hint
**Kiến thức:** đổi $45$ phút ra phần của giờ.

::solution
Vì $45$ phút $=\dfrac{45}{60}=0{,}75$ giờ nên thời gian đi là $3{,}75$ giờ.

Tốc độ trung bình là
$$\frac{300}{3{,}75}=80\text{ km/h}.$$

Vậy tốc độ trung bình của ô tô là $80$ km/h.

**Đáp số.** $80$ km/h.
:::

:::exercise
Rút gọn $\dfrac{\left(x^3y^{-2}\right)^2}{x^4y^{-3}}$, với $x,y\ne0$.

::hint
**Kiến thức:** $\left(a^m\right)^n=a^{mn}$ và $\dfrac{a^m}{a^n}=a^{m-n}$.

::solution
Trước hết khai triển tử số: $\left(x^3y^{-2}\right)^2=x^6y^{-4}$.

Sau đó chia các luỹ thừa cùng cơ số:
$$\frac{x^6y^{-4}}{x^4y^{-3}}=x^{6-4}y^{-4-(-3)}=x^2y^{-1}.$$

Vậy biểu thức rút gọn thành $\dfrac{x^2}{y}$.

**Đáp số.** $\dfrac{x^2}{y}$.
:::

:::exercise
Rút gọn $i^{2027}$.

::hint
**Kiến thức:** các luỹ thừa của $i$ lặp lại sau mỗi $4$ lần; tìm số dư khi chia $2027$ cho $4$.

::solution
Chia $2027$ cho $4$, ta được $2027=4\times506+3$.

Vì $i^4=1$ nên $i^{2027}=\left(i^4\right)^{506}\cdot i^3=i^3$.

Mặt khác $i^3=i^2\cdot i=-i$.

Vậy $i^{2027}=-i$.

**Đáp số.** $-i$.
:::

## Bài tập vận dụng

:::exercise
Một thành phố có dân số $2{,}4\times10^6$ người. Dân số tăng $5\%$. Viết dân số mới dưới dạng kí hiệu khoa học.

::hint
**Kiến thức:** nhân với $1{,}05$, rồi viết kết quả dưới dạng $a\times10^n$ với $1\le a<10$.

::solution
Tăng $5\%$ nghĩa là nhân dân số với $1{,}05$.

Do đó dân số mới là
$$2{,}4\times10^6\times1{,}05=2{,}52\times10^6.$$

Vậy dân số mới là $2{,}52\times10^6$ người, tức là $2.520.000$ người.

**Đáp số.** $2{,}52\times10^6$.
:::

:::exercise
Một bức tường cao $3{,}5$ m và rộng $4$ m. Bức tường cần sơn hai lớp, và $1$ lít sơn phủ được $10$ m². Sơn chỉ bán theo lon $1$ lít. Cần mua bao nhiêu lon sơn?

::hint
**Kiến thức:** tổng diện tích $=$ diện tích tường $\times$ số lớp sơn; làm tròn lên ở bước cuối.

::solution
Diện tích bức tường là $3{,}5\times4=14$ m², nên hai lớp sơn phủ $2\times14=28$ m².

Lượng sơn cần dùng là $\dfrac{28}{10}=2{,}8$ lít.

Sơn chỉ bán theo lon nguyên $1$ lít, nên $2$ lon là không đủ và ta phải làm tròn lên thành $3$ lon.

Vậy cần mua $3$ lon sơn.

**Đáp số.** $3$ lon.
:::

:::exercise
Giả sử $1$ đô la đổi được $25.000$ đồng. Một phòng khách sạn giá $120$ đô la mỗi đêm. Hỏi ở $3$ đêm hết bao nhiêu đồng?

::hint
**Kiến thức:** tính chi phí theo đô la trước, rồi nhân với tỉ giá.

::solution
Chi phí cho $3$ đêm là $3\times120=360$ đô la.

Với tỉ giá $25.000$ đồng mỗi đô la, số tiền này là
$$360\times25.000=9.000.000\text{ đồng}.$$

Vậy ở $3$ đêm hết $9.000.000$ đồng.

**Đáp số.** $9.000.000$ đồng.
:::

:::exercise Thử thách
Cho $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$ và $I=\begin{pmatrix}1&0\\0&1\end{pmatrix}$. Tìm ma trận $2A-I$.

::hint
**Kiến thức:** nhân mọi phần tử với $2$, rồi trừ từng phần tử tương ứng.

::solution
Nhân mọi phần tử của $A$ với $2$, ta được $2A=\begin{pmatrix}2&4\\6&8\end{pmatrix}$.

Trừ $I$ theo từng phần tử tương ứng, ta có
$$2A-I=\begin{pmatrix}2-1&4-0\\6-0&8-1\end{pmatrix}=\begin{pmatrix}1&4\\6&7\end{pmatrix}.$$

Vậy $2A-I=\begin{pmatrix}1&4\\6&7\end{pmatrix}$.

**Đáp số.** $\begin{pmatrix}1&4\\6&7\end{pmatrix}$.
:::

:::quiz
::mc
$15\%$ của $240$ bằng
A. $24$
B. $16$
C. $36$
D. $3{,}6$
::key C
$0{,}15\times240=36$.

::mc
Số nào sau đây bằng $\sqrt{72}$?
A. $6\sqrt2$
B. $8\sqrt3$
C. $3\sqrt6$
D. $12\sqrt2$
::key A
$\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2$. Phương án C là $\sqrt{54}$ và phương án D là $\sqrt{288}$.

::mc
$(2-i)+(3+4i)$ bằng
A. $5+5i$
B. $5+3i$
C. $6-4i$
D. $-1+3i$
::key B
Cộng phần thực với nhau và phần ảo với nhau: $(2+3)+(-1+4)i$.

::mc
Kết quả của $\left(5\times10^3\right)\left(4\times10^{-5}\right)$ viết dưới dạng kí hiệu khoa học là
A. $20\times10^{-2}$
B. $2\times10^{-2}$
C. $2\times10^{8}$
D. $2\times10^{-1}$
::key D
$20\times10^{-2}=2\times10^{-1}$. Phương án A có cùng giá trị nhưng chưa ở dạng kí hiệu khoa học.

::tf
Một giá tăng $50\%$ rồi giảm $50\%$. Xét tính đúng sai của các mệnh đề sau:
a) Giá cuối cùng bằng $75\%$ giá ban đầu.
b) Thay đổi chung là giảm $25\%$.
c) Giá cuối cùng bằng giá ban đầu.
d) Nếu giảm trước rồi mới tăng thì giá cuối cùng vẫn như vậy.
::key T T F T
$1{,}5\times0{,}5=0{,}75$. Phép nhân có tính giao hoán, nên thứ tự các lần thay đổi không ảnh hưởng.

::sa
Tính $25\%$ của $64$.
::key 16
$0{,}25\times64=16$.

::sa
Đổi $90$ km/h sang mét mỗi giây.
::key 25
$\dfrac{90\times1000}{3600}=25$.
:::
