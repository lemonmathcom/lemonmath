---
title: Hình học phẳng, toạ độ và lượng giác
description: ACT Math hình học: tam giác vuông và đồng dạng, đường tròn, diện tích, thể tích, khoảng cách, trung điểm, hệ số góc, phương trình đường tròn, lượng giác.
minutes: 45
---

:::goals
- Dùng định lí Pythagoras và tam giác đồng dạng.
- Tính diện tích, chu vi, độ dài cung, diện tích hình quạt và thể tích.
- Dùng công thức khoảng cách và trung điểm, hệ số góc của hai đường thẳng song song và vuông góc, phương trình đường tròn.
- Dùng sin, cos, tan trong tam giác vuông và nhớ các giá trị đặc biệt trên đường tròn đơn vị.
:::

Câu hỏi hình học trong ACT thường ngắn: một hình vẽ hoặc một mô tả, một hai kiến thức cần áp dụng, và một con số cần tìm. Nhiều học sinh mất điểm không phải vì hình học khó, mà vì không thuộc một công thức hoặc không vẽ nhanh một hình phác. Bài này tập hợp các kiến thức cần có và trình bày một lời giải gọn gàng cho từng dạng câu hỏi.

## Tam giác vuông và tam giác đồng dạng

Trong tam giác vuông có hai cạnh góc vuông $a$, $b$ và cạnh huyền $c$: $a^2+b^2=c^2$. Các bộ ba quen thuộc như $3,4,5$ và $5,12,13$ (cùng các bội của chúng) giúp tiết kiệm thời gian. Trong **tam giác đồng dạng**, các cạnh tương ứng tỉ lệ với nhau.

:::example Chiếc thang dựa vào tường
Một chiếc thang dài $13$ mét dựa vào một bức tường thẳng đứng. Chân thang cách tường $5$ mét. Thang chạm tường ở độ cao bao nhiêu?
A. $8$ m
B. $12$ m
C. $18$ m
D. $\sqrt{194}$ m

**Lời giải.** Chiếc thang, bức tường và mặt đất tạo thành một tam giác vuông có cạnh huyền $13$ m và một cạnh góc vuông $5$ m. Gọi $h$ là độ cao trên tường. Theo định lí Pythagoras,
$$h^2+5^2=13^2,$$
nên $h^2=169-25=144$ và $h=12$.

Vậy thang chạm tường ở độ cao $12$ m, chọn đáp án **B**. Phương án D cộng các bình phương thay vì trừ.
:::

:::example Bóng nắng và tam giác đồng dạng
Cùng một thời điểm trong ngày, một người cao $1{,}6$ m có bóng dài $2$ m, còn một cái cây có bóng dài $15$ m. Cái cây cao bao nhiêu?
A. $18{,}75$ m
B. $14{,}6$ m
C. $12$ m
D. $24$ m

**Lời giải.** Tia nắng tạo với mặt đất cùng một góc, nên hai tam giác tạo bởi mỗi vật và bóng của nó đồng dạng với nhau. Gọi $h$ là chiều cao của cây. Ta có
$$\frac{h}{15}=\frac{1{,}6}{2},$$
nên $h=15\times0{,}8=12$.

Vậy cái cây cao $12$ m, chọn đáp án **C**. Phương án A dùng tỉ số bị đảo ngược.
:::

## Đường tròn, diện tích và thể tích

:::note Các công thức cần biết
Đường tròn: $C=2\pi r$, $A=\pi r^2$; cung hay hình quạt có góc ở tâm $\theta^\circ$ chiếm $\dfrac{\theta}{360}$ cả hình tròn.
Tam giác: $A=\dfrac12bh$. Hình thang: $A=\dfrac12(a+b)h$. Tổng các góc trong của đa giác $n$ cạnh: $(n-2)\times180^\circ$.
Hình hộp chữ nhật: $V=lwh$. Hình trụ: $V=\pi r^2h$. Hình nón: $V=\dfrac13\pi r^2h$. Hình cầu: $V=\dfrac43\pi r^3$.
:::

:::example Từ chu vi đến hình quạt
Một đường tròn có chu vi $10\pi$. Diện tích hình quạt của hình tròn này có góc ở tâm $72^\circ$ là
A. $5\pi$
B. $2\pi$
C. $25\pi$
D. $10\pi$

**Lời giải.** Từ $2\pi r=10\pi$, bán kính là $r=5$, nên diện tích hình tròn là $\pi(5)^2=25\pi$.

Hình quạt chiếm $\dfrac{72}{360}=\dfrac15$ hình tròn, nên diện tích của nó là
$$\frac15\times25\pi=5\pi.$$

Vậy diện tích hình quạt là $5\pi$, chọn đáp án **A**. Phương án C là diện tích cả hình tròn.
:::

## Hình học toạ độ

Với hai điểm $(x_1,y_1)$ và $(x_2,y_2)$: **khoảng cách** là $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$, **trung điểm** là $\left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2}\right)$ và **hệ số góc (slope)** là $\dfrac{y_2-y_1}{x_2-x_1}$. Hai đường thẳng song song có hệ số góc bằng nhau; hai đường thẳng vuông góc có tích hệ số góc bằng $-1$. Đường tròn tâm $(h,k)$ bán kính $r$ có phương trình $(x-h)^2+(y-k)^2=r^2$.

:::example Trung điểm và độ dài
Hai đầu mút của một đoạn thẳng là $(-2,5)$ và $(6,-1)$. Trung điểm và độ dài của đoạn thẳng là
A. $(4,4)$ và $10$
B. $(2,2)$ và $\sqrt{28}$
C. $(2,2)$ và $10$
D. $(4,-3)$ và $8$

**Lời giải.** Trung điểm là
$$\left(\frac{-2+6}{2},\ \frac{5+(-1)}{2}\right)=(2,2).$$

Độ dài đoạn thẳng là
$$\sqrt{(6-(-2))^2+(-1-5)^2}=\sqrt{64+36}=\sqrt{100}=10.$$

Vậy trung điểm là $(2,2)$ và độ dài là $10$, chọn đáp án **C**.
:::

:::example Đường thẳng vuông góc
Phương trình đường thẳng đi qua $(1,3)$ và vuông góc với $y=2x+1$ là
A. $y=2x+1$
B. $y=-\dfrac12x+\dfrac72$
C. $y=\dfrac12x+\dfrac52$
D. $y=-2x+5$

**Lời giải.** Đường thẳng đã cho có hệ số góc $2$, nên đường thẳng vuông góc với nó có hệ số góc $-\dfrac12$, vì $2\times\left(-\dfrac12\right)=-1$.

Đường thẳng qua $(1,3)$ có hệ số góc $-\dfrac12$ là $y-3=-\dfrac12(x-1)$, tức là
$$y=-\frac12x+\frac72.$$

Vậy phương trình cần tìm là $y=-\dfrac12x+\dfrac72$, chọn đáp án **B**. Phương án D dùng $-2$ thay vì $-\dfrac12$.
:::

## Lượng giác trong tam giác vuông

Trong tam giác vuông có góc nhọn $\theta$: $\sin\theta=\dfrac{\text{đối}}{\text{huyền}}$, $\cos\theta=\dfrac{\text{kề}}{\text{huyền}}$, $\tan\theta=\dfrac{\text{đối}}{\text{kề}}$. Hãy nhớ các giá trị tại $30^\circ$, $45^\circ$, $60^\circ$, và hệ thức $\sin^2\theta+\cos^2\theta=1$.

:::example Từ sin đến tan
Trong một tam giác vuông, $\sin\theta=\dfrac35$ với $\theta$ là góc nhọn. Giá trị của $\tan\theta$ là
A. $\dfrac45$
B. $\dfrac53$
C. $\dfrac43$
D. $\dfrac34$

**Lời giải.** Vẽ một tam giác vuông có cạnh đối diện góc $\theta$ bằng $3$ và cạnh huyền bằng $5$. Theo định lí Pythagoras, cạnh kề bằng $\sqrt{25-9}=4$.

Do đó
$$\tan\theta=\frac{\text{đối}}{\text{kề}}=\frac34.$$

Vậy $\tan\theta=\dfrac34$, chọn đáp án **D**. Phương án A là $\cos\theta$.
:::

:::warning Những cái bẫy thường gặp
- **Cộng thay vì trừ** trong định lí Pythagoras khi đã biết cạnh huyền.
- **Đường kính hay bán kính:** đề có thể cho một đại lượng mà công thức cần đại lượng kia.
- **Hệ số góc vuông góc:** lấy số nghịch đảo đổi dấu, không chỉ đổi dấu.
- **Phần của hình quạt:** dùng $\dfrac{\theta}{360}$ khi góc tính bằng độ.
- **Chế độ máy tính:** câu lượng giác của ACT dùng độ trừ khi đề ghi radian.
:::

:::terms
- hypotenuse, leg | cạnh huyền, cạnh góc vuông
- Pythagorean theorem | định lí Pythagoras
- similar triangles | tam giác đồng dạng
- circumference, arc, sector | chu vi đường tròn, cung, hình quạt
- midpoint, distance formula | trung điểm, công thức khoảng cách
- slope, perpendicular | hệ số góc, vuông góc
- sine, cosine, tangent | sin, cos, tan
- volume, cylinder, cone, sphere | thể tích, hình trụ, hình nón, hình cầu
:::

## Bài tập tương tự

:::exercise
Một tam giác vuông có hai cạnh góc vuông dài $8$ và $15$. Tính độ dài cạnh huyền.

::hint
**Kiến thức:** $c^2=a^2+b^2$.

::solution
Gọi $c$ là độ dài cạnh huyền. Theo định lí Pythagoras,
$$c^2=8^2+15^2=64+225=289.$$

Vì $c>0$ nên $c=\sqrt{289}=17$.

Vậy cạnh huyền dài $17$.

**Đáp số.** $17$.
:::

:::exercise
Một đường tròn có đường kính $12$ cm. Tính chu vi và diện tích của nó theo $\pi$.

::hint
**Kiến thức:** bán kính bằng một nửa đường kính.

::solution
Bán kính là $r=\dfrac{12}{2}=6$ cm.

Chu vi là $C=2\pi r=12\pi$ cm, và diện tích là $A=\pi r^2=36\pi$ cm².

Vậy đường tròn có chu vi $12\pi$ cm và diện tích $36\pi$ cm².

**Đáp số.** $12\pi$ cm và $36\pi$ cm².
:::

:::exercise
Tính khoảng cách giữa hai điểm $(1,-2)$ và $(4,2)$.

::hint
**Kiến thức:** công thức khoảng cách.

::solution
Hiệu các toạ độ là $4-1=3$ và $2-(-2)=4$.

Do đó khoảng cách là
$$\sqrt{3^2+4^2}=\sqrt{25}=5.$$

Vậy hai điểm cách nhau $5$ đơn vị.

**Đáp số.** $5$.
:::

:::exercise
Tìm hệ số góc của đường thẳng $3x-2y=6$ và hệ số góc của các đường thẳng vuông góc với nó.

::hint
**Kiến thức:** viết phương trình về dạng $y=mx+b$.

::solution
Rút $y$: $-2y=-3x+6$, nên $y=\dfrac32x-3$. Hệ số góc là $\dfrac32$.

Đường thẳng vuông góc có hệ số góc bằng số nghịch đảo đổi dấu, tức là $-\dfrac23$, vì $\dfrac32\times\left(-\dfrac23\right)=-1$.

Vậy đường thẳng đã cho có hệ số góc $\dfrac32$, còn đường thẳng vuông góc có hệ số góc $-\dfrac23$.

**Đáp số.** $\dfrac32$ và $-\dfrac23$.
:::

:::exercise
Với góc nhọn $\theta$, $\sin\theta=\dfrac{5}{13}$. Tính $\cos\theta$ và $\tan\theta$.

::hint
**Kiến thức:** tam giác vuông có cạnh đối $5$ và cạnh huyền $13$.

::solution
Trong tam giác vuông có cạnh đối $5$ và cạnh huyền $13$, cạnh kề bằng $\sqrt{169-25}=\sqrt{144}=12$.

Do đó $\cos\theta=\dfrac{12}{13}$ và $\tan\theta=\dfrac{5}{12}$.

Vậy $\cos\theta=\dfrac{12}{13}$ và $\tan\theta=\dfrac{5}{12}$.

**Đáp số.** $\dfrac{12}{13}$ và $\dfrac{5}{12}$.
:::

## Bài tập vận dụng

:::exercise
Một đường dốc cho xe lăn cao lên $1{,}2$ m trên khoảng cách nằm ngang $4$ m. Tính góc giữa đường dốc và mặt đất, làm tròn đến phần mười độ.

::hint
**Kiến thức:** $\tan\theta=\dfrac{\text{độ cao}}{\text{khoảng cách ngang}}$.

::solution
Độ cao và khoảng cách nằm ngang là cạnh đối và cạnh kề của góc $\theta$, nên
$$\tan\theta=\frac{1{,}2}{4}=0{,}3.$$

Dùng máy tính ở chế độ độ, $\theta=\tan^{-1}(0{,}3)\approx16{,}7^\circ$.

Vậy đường dốc tạo với mặt đất một góc khoảng $16{,}7^\circ$.

**Đáp số.** $16{,}7^\circ$.
:::

:::exercise
Một tiệm pizza bán một bánh lớn đường kính $30$ cm, hoặc hai bánh vừa mỗi bánh đường kính $20$ cm, cùng một giá. Chọn cách nào được nhiều bánh hơn?

::hint
**Kiến thức:** so sánh diện tích, không so sánh đường kính.

::solution
Bánh lớn có bán kính $15$ cm, nên diện tích là $\pi(15)^2=225\pi$ cm².

Mỗi bánh vừa có bán kính $10$ cm và diện tích $\pi(10)^2=100\pi$ cm², nên hai bánh vừa có tổng diện tích $200\pi$ cm².

Vì $225\pi>200\pi$ nên bánh lớn có diện tích lớn hơn.

Vậy mua một bánh lớn được nhiều pizza hơn hai bánh vừa.

**Đáp số.** Bánh lớn.
:::

:::exercise
Một bồn nước hình trụ có bán kính $0{,}5$ m và chiều cao $1{,}2$ m. Bồn chứa được bao nhiêu lít nước? ($1$ m³ $=1000$ lít.)

::hint
**Kiến thức:** $V=\pi r^2h$, rồi đổi mét khối ra lít.

::solution
Thể tích của bồn là
$$V=\pi(0{,}5)^2(1{,}2)=0{,}3\pi\approx0{,}942\text{ m}^3.$$

Vì $1$ m³ $=1000$ lít nên bồn chứa được khoảng $0{,}942\times1000=942$ lít.

Vậy bồn chứa được khoảng $942$ lít nước.

**Đáp số.** Khoảng $942$ lít.
:::

:::exercise Thử thách
Tìm tâm và bán kính của đường tròn $x^2+y^2-6x+4y-12=0$.

::hint
**Kiến thức:** đưa về bình phương đủ theo $x$ và theo $y$.

::solution
Nhóm các số hạng và đưa về bình phương đủ:
$$\left(x^2-6x+9\right)+\left(y^2+4y+4\right)=12+9+4,$$
tức là $(x-3)^2+(y+2)^2=25$.

Đây là phương trình đường tròn tâm $(3,-2)$, bán kính $\sqrt{25}=5$.

Vậy đường tròn có tâm $(3,-2)$ và bán kính $5$.

**Đáp số.** Tâm $(3,-2)$, bán kính $5$.
:::

:::quiz
::mc
Tổng các góc trong của một lục giác là
A. $540^\circ$
B. $360^\circ$
C. $1080^\circ$
D. $720^\circ$
::key D
$(6-2)\times180^\circ=720^\circ$.

::mc
Một tam giác có đáy $10$ và chiều cao $6$. Diện tích của nó là
A. $30$
B. $60$
C. $16$
D. $15$
::key A
$\dfrac12\times10\times6=30$.

::mc
Giá trị của $\tan45^\circ$ là
A. $\dfrac{\sqrt2}{2}$
B. $1$
C. $\sqrt3$
D. $\dfrac{\sqrt3}{3}$
::key B
Trong tam giác vuông cân, cạnh đối và cạnh kề bằng nhau.

::mc
Thể tích của hình lập phương cạnh $4$ là
A. $16$
B. $48$
C. $64$
D. $96$
::key C
$4^3=64$. Phương án D là diện tích toàn phần.

::tf
Xét đường tròn $(x-1)^2+(y+2)^2=9$. Xét tính đúng sai của các mệnh đề sau:
a) Tâm là $(1,-2)$.
b) Bán kính bằng $9$.
c) Đường tròn đi qua điểm $(4,-2)$.
d) Diện tích hình tròn bằng $9\pi$.
::key T F T T
Bán kính là $\sqrt9=3$; điểm $(4,-2)$ cách tâm $3$ đơn vị; diện tích là $\pi(3)^2=9\pi$.

::sa
Một tam giác vuông có hai cạnh góc vuông $6$ và $8$. Tính cạnh huyền.
::key 10
$\sqrt{36+64}=10$.

::sa
Tìm hệ số góc của đường thẳng đi qua $(0,1)$ và $(2,7)$.
::key 3
$\dfrac{7-1}{2-0}=3$.
:::
