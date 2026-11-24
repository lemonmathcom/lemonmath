---
title: Hình học và lượng giác
description: IB Math AA chủ đề 3: thể tích và diện tích, định lí sin và cosin, radian, cung và hình quạt, đẳng thức, phương trình lượng giác và mô hình tuần hoàn.
minutes: 45
---

:::goals
- Tính thể tích và diện tích của khối không gian, dùng định lí Pythagoras khi thiếu một độ dài.
- Dùng định lí sin, định lí cosin và công thức diện tích, kể cả trường hợp hai nghiệm.
- Làm việc với radian, độ dài cung và diện tích hình quạt.
- Dùng đường tròn đơn vị, giá trị đặc biệt và các đẳng thức để tính giá trị lượng giác và giải phương trình trên một khoảng cho trước.
- Mô hình hoá hiện tượng tuần hoàn bằng $y=a\sin\big(b(x-c)\big)+d$.
:::

Chủ đề 3 trộn hai kiểu câu hỏi. Paper 1 kiểm tra tính toán chính xác: giá trị lượng giác đặc biệt, đẳng thức và phương trình trên một khoảng, với đáp số theo $\pi$. Paper 2 kiểm tra mô hình hoá: tam giác trong bối cảnh thực tế, phương vị, độ cao, và hàm tuần hoàn như thuỷ triều hay vòng đu quay. Ở cả hai, vẽ nhanh một hình là bước đầu tiên mà thí sinh giỏi không bao giờ bỏ qua.

## Khối không gian: thể tích và diện tích

Sổ công thức có thể tích và diện tích của hình chóp, hình nón và hình cầu. Cái khó thường là một độ dài còn thiếu, tìm bằng định lí Pythagoras trong một tam giác vuông bên trong khối.

:::example Hình nón
Một hình nón có bán kính đáy $6$ cm và đường sinh $10$ cm. Tính theo $\pi$:
(a) thể tích; [3 marks]
(b) diện tích xung quanh. [2 marks]

**Lời giải.** (a) Chiều cao là $\sqrt{10^2-6^2}=8$ cm, nên $V=\dfrac13\pi(6^2)(8)=96\pi$ cm³.

(b) $\pi rl=\pi(6)(10)=60\pi$ cm².
:::

## Tam giác: định lí sin, định lí cosin, diện tích

$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C},\qquad c^2=a^2+b^2-2ab\cos C,\qquad\text{Diện tích}=\frac12ab\sin C.$$
Dùng định lí cosin khi biết hai cạnh và góc xen giữa (hoặc cả ba cạnh); dùng định lí sin khi biết một cạnh và góc đối diện.

:::example Định lí cosin và diện tích, tính chính xác
Trong tam giác $ABC$, $AB=7$, $AC=9$ và $\hat A=60^\circ$.
(a) Tính $BC$. [3 marks]
(b) Tính diện tích tam giác. [2 marks]

**Lời giải.** (a) $BC^2=49+81-2(7)(9)\cos60^\circ=130-63=67$, nên $BC=\sqrt{67}$.

(b) $\dfrac12(7)(9)\sin60^\circ=\dfrac{63\sqrt3}{4}$.
:::

:::example Trường hợp hai nghiệm
Trong tam giác $ABC$, $a=8$, $b=10$ và $\hat A=40^\circ$. Tìm hai giá trị có thể của $\hat B$. [4 marks]

**Lời giải.** $\sin B=\dfrac{10\sin40^\circ}{8}\approx0{,}8035$. Một nghiệm là $\hat B\approx53{,}5^\circ$. Vì $\sin(180^\circ-B)=\sin B$, nghiệm còn lại là $\hat B\approx126{,}5^\circ$, và nghiệm này chấp nhận được vì $40^\circ+126{,}5^\circ<180^\circ$. Có hai tam giác khác nhau thoả mãn dữ kiện.
:::

## Radian, cung và hình quạt

$\pi$ radian $=180^\circ$. Với hình quạt bán kính $r$ và góc $\theta$ tính bằng radian: độ dài cung $l=r\theta$ và diện tích $A=\dfrac12r^2\theta$.

:::example Một hình quạt
Một hình quạt có bán kính $5$ cm và góc $1{,}2$ radian. Tính độ dài cung, diện tích và chu vi của nó. [4 marks]

**Lời giải.** $l=5(1{,}2)=6$ cm, $A=\dfrac12(25)(1{,}2)=15$ cm², và chu vi là $6+2(5)=16$ cm.
:::

## Giá trị đặc biệt, đẳng thức và phương trình

:::note Các đẳng thức có trong sổ công thức
$$\cos^2\theta+\sin^2\theta=1,\qquad\tan\theta=\frac{\sin\theta}{\cos\theta},\qquad\sin2\theta=2\sin\theta\cos\theta,$$
$$\cos2\theta=\cos^2\theta-\sin^2\theta=2\cos^2\theta-1=1-2\sin^2\theta.$$
:::

:::example Dùng góc phần tư
Cho $\sin\theta=\dfrac35$ và $\dfrac\pi2<\theta<\pi$. Tìm giá trị chính xác của $\cos\theta$ và $\sin2\theta$. [5 marks]

**Lời giải.** $\cos^2\theta=1-\dfrac{9}{25}=\dfrac{16}{25}$. Ở góc phần tư thứ hai cosin âm, nên $\cos\theta=-\dfrac45$. Khi đó $\sin2\theta=2\left(\dfrac35\right)\left(-\dfrac45\right)=-\dfrac{24}{25}$.
:::

:::example Phương trình bậc hai theo cosin
Giải $2\cos^2x-\cos x-1=0$ với $0\le x\le2\pi$. [6 marks]

**Lời giải.** Phân tích: $(2\cos x+1)(\cos x-1)=0$.

$\cos x=1$ cho $x=0$ hoặc $x=2\pi$. $\cos x=-\dfrac12$ cho $x=\dfrac{2\pi}{3}$ hoặc $x=\dfrac{4\pi}{3}$.

Bốn nghiệm: $0$, $\dfrac{2\pi}{3}$, $\dfrac{4\pi}{3}$, $2\pi$. Kiểm tra khoảng ở bước cuối: hai đầu mút được tính vì dấu bất đẳng thức là $\le$.
:::

## Mô hình lượng giác

Với $y=a\sin\big(b(x-c)\big)+d$ (hoặc với cosin): **biên độ (amplitude)** là $|a|$, **chu kì (period)** là $\dfrac{2\pi}{b}$, **trục chính (principal axis)** là $y=d$, giá trị lớn nhất là $d+|a|$ và nhỏ nhất là $d-|a|$.

:::example Vòng đu quay
Độ cao, tính bằng mét, của một ghế trên vòng đu quay sau $t$ giây kể từ khi qua điểm thấp nhất là $h(t)=12-10\cos\left(\dfrac{\pi t}{15}\right)$.
(a) Viết độ cao lớn nhất và nhỏ nhất. [2 marks]
(b) Tìm thời gian quay hết một vòng. [2 marks]

**Lời giải.** (a) Lớn nhất $12+10=22$ mét, nhỏ nhất $12-10=2$ mét.

(b) Chu kì là $\dfrac{2\pi}{\pi/15}=30$ giây.
:::

:::warning Những cái bẫy thường gặp
- **Chế độ độ hay radian.** Câu về tam giác thường dùng độ; giải tích và mô hình tuần hoàn dùng radian.
- **Trường hợp hai nghiệm.** Khi định lí sin cho một góc, hãy kiểm tra xem $180^\circ$ trừ góc đó có cũng thoả mãn không.
- **Bỏ sót nghiệm.** Tìm mọi nghiệm trong khoảng: vẽ đồ thị hoặc dùng tính đối xứng của đường tròn đơn vị.
- **Chia cho $\sin x$** trong phương trình như $\sin2x=\sin x$ làm mất các nghiệm có $\sin x=0$. Hãy phân tích thành nhân tử.
- **Công thức hình quạt với độ.** $l=r\theta$ và $A=\dfrac12r^2\theta$ đòi hỏi $\theta$ tính bằng radian.
:::

:::terms
- slant height, curved surface area | đường sinh, diện tích xung quanh
- sine rule, cosine rule | định lí sin, định lí cosin
- ambiguous case | trường hợp hai nghiệm
- radian, arc length, sector | radian, độ dài cung, hình quạt
- unit circle, quadrant | đường tròn đơn vị, góc phần tư
- double angle identity | công thức nhân đôi
- amplitude, period, principal axis | biên độ, chu kì, trục chính
- angle of elevation, bearing | góc nâng, phương vị
:::

## Bài tập tương tự

:::exercise Hình cầu
Một hình cầu có thể tích $36\pi$ cm³. Tìm bán kính và diện tích mặt cầu. [4 marks]

::hint
**Cần nhớ:** $V=\dfrac43\pi r^3$ và $S=4\pi r^2$.

::solution
Gọi $r$ (cm) là bán kính hình cầu, $r>0$. Áp dụng công thức thể tích hình cầu $V=\dfrac43\pi r^3$, ta có
$$\frac43\pi r^3=36\pi.$$

Chia hai vế cho $\pi$ rồi nhân với $\dfrac34$, ta được $r^3=36\cdot\dfrac34=27$, suy ra $r=3$ (cm).

Áp dụng công thức diện tích mặt cầu $S=4\pi r^2$, ta có
$$S=4\pi\cdot3^2=36\pi\ \text{cm}^2.$$

Vậy hình cầu có bán kính $3$ cm và diện tích mặt cầu là $36\pi$ cm².

**Đáp số.** $r=3$ cm; $S=36\pi$ cm².
:::

:::exercise Tìm góc từ ba cạnh
Một tam giác có các cạnh $5$, $7$ và $8$. Tìm góc đối diện cạnh dài $7$. [3 marks]

::hint
**Cần nhớ:** định lí cosin viết lại: $\cos C=\dfrac{a^2+b^2-c^2}{2ab}$.

::solution
Xét tam giác $ABC$ với $a=BC=5$, $b=CA=8$ và $c=AB=7$. Góc đối diện cạnh dài $7$ là góc $C$.

Áp dụng định lí côsin $c^2=a^2+b^2-2ab\cos C$, ta có
$$\cos C=\frac{a^2+b^2-c^2}{2ab}=\frac{25+64-49}{2\cdot5\cdot8}=\frac{40}{80}=\frac12.$$

Vì $0^\circ<C<180^\circ$ và $\cos C=\dfrac12$ nên $C=60^\circ$.

Vậy góc đối diện cạnh dài $7$ bằng $60^\circ$.

**Đáp số.** $60^\circ$.
:::

:::exercise Chu vi hình quạt
Một hình quạt có bán kính $6$ cm và góc $\dfrac\pi3$. Tìm chu vi chính xác của nó. [3 marks]

::hint
**Cần nhớ:** chu vi $=2r+r\theta$.

::solution
Chu vi hình quạt gồm hai bán kính và độ dài cung.

Với góc $\theta=\dfrac\pi3$ (rađian) và bán kính $r=6$ cm, độ dài cung là
$$l=r\theta=6\cdot\frac\pi3=2\pi\ \text{cm}.$$

Chu vi hình quạt là
$$P=2r+l=2\cdot6+2\pi=12+2\pi\ \text{cm}.$$

Vậy chu vi chính xác của hình quạt là $12+2\pi$ cm.

**Đáp số.** $12+2\pi$ cm.
:::

:::exercise Góc phần tư thứ ba
Cho $\cos\theta=-\dfrac{5}{13}$ và $\pi<\theta<\dfrac{3\pi}{2}$. Tìm giá trị chính xác của $\sin\theta$ và $\tan\theta$. [4 marks]

::hint
**Cần nhớ:** ở góc phần tư thứ ba sin âm và tan dương.

::solution
Áp dụng hệ thức $\sin^2\theta+\cos^2\theta=1$, ta có
$$\sin^2\theta=1-\cos^2\theta=1-\frac{25}{169}=\frac{144}{169}.$$

Suy ra $\sin\theta=\pm\dfrac{12}{13}$.

Vì $\pi<\theta<\dfrac{3\pi}{2}$ nên $\theta$ thuộc góc phần tư thứ ba, ở đó $\sin\theta<0$. Do đó
$$\sin\theta=-\sqrt{1-\frac{25}{169}}=-\frac{12}{13}.$$

Ta có
$$\tan\theta=\frac{\sin\theta}{\cos\theta}=\frac{-12/13}{-5/13}=\frac{12}{5}.$$

Giá trị $\tan\theta>0$ phù hợp với góc phần tư thứ ba.

Vậy $\sin\theta=-\dfrac{12}{13}$ và $\tan\theta=\dfrac{12}{5}$.

**Đáp số.** $\sin\theta=-\dfrac{12}{13}$; $\tan\theta=\dfrac{12}{5}$.
:::

:::exercise Phân tích, đừng chia
Giải $\sin2x=\sin x$ với $0\le x\le\pi$. [5 marks]

::hint
**Cần nhớ:** $2\sin x\cos x-\sin x=\sin x(2\cos x-1)$.

::solution
Áp dụng công thức nhân đôi $\sin2x=2\sin x\cos x$, phương trình trở thành
$$2\sin x\cos x=\sin x.$$

Chuyển vế và đặt nhân tử chung (không chia hai vế cho $\sin x$ để không mất nghiệm):
$$\sin x(2\cos x-1)=0.$$

Suy ra $\sin x=0$ hoặc $\cos x=\dfrac12$.

Trường hợp $\sin x=0$ với $0\le x\le\pi$: $x=0$ hoặc $x=\pi$.

Trường hợp $\cos x=\dfrac12$ với $0\le x\le\pi$: $x=\dfrac\pi3$ (trên đoạn $[0; \pi]$ hàm $\cos x$ giảm từ $1$ đến $-1$ nên chỉ có một nghiệm).

Vậy phương trình có ba nghiệm $x=0$, $x=\dfrac\pi3$, $x=\pi$ trong đoạn $[0; \pi]$.

**Đáp số.** $0$, $\dfrac\pi3$, $\pi$.
:::

## Bài tập vận dụng

:::exercise Trở lại vòng đu quay
Với vòng đu quay ở trên, $h(t)=12-10\cos\left(\dfrac{\pi t}{15}\right)$. Tìm thời điểm đầu tiên ghế ở độ cao $17$ mét. [4 marks]

::hint
**Cần nhớ:** $\cos\left(\dfrac{\pi t}{15}\right)=-\dfrac12$, và lấy nghiệm dương nhỏ nhất.

::solution
Thời điểm ghế ở độ cao $17$ mét thoả mãn $h(t)=17$, tức là
$$12-10\cos\left(\frac{\pi t}{15}\right)=17.$$

Suy ra $-10\cos\left(\dfrac{\pi t}{15}\right)=5$, tức là $\cos\left(\dfrac{\pi t}{15}\right)=-\dfrac12$.

Đặt $u=\dfrac{\pi t}{15}$. Vì $t\ge0$ nên $u\ge0$. Trên đoạn $[0; \pi]$, hàm $\cos u$ giảm từ $1$ đến $-1$ nên có đúng một giá trị $u$ thoả $\cos u=-\dfrac12$, đó là $u=\dfrac{2\pi}{3}$. Đây là giá trị nhỏ nhất của $u\ge0$ thoả mãn, ứng với thời điểm đầu tiên.

Từ $\dfrac{\pi t}{15}=\dfrac{2\pi}{3}$ suy ra
$$t=\frac{2\pi}{3}\cdot\frac{15}{\pi}=10.$$

Vậy ghế lần đầu tiên ở độ cao $17$ mét sau $10$ giây.

**Đáp số.** $t=10$ giây.
:::

:::exercise Phương vị
Một con tàu đi $12$ km theo phương vị $060^\circ$, rồi đi $8$ km theo phương vị $150^\circ$. Tính khoảng cách từ tàu đến điểm xuất phát. [4 marks]

::hint
**Cần nhớ:** vẽ hình sẽ thấy hai chặng vuông góc với nhau ($150^\circ-60^\circ=90^\circ$).

::solution
Gọi $O$ là điểm xuất phát, $A$ là vị trí sau khi đi $12$ km theo phương vị $060^\circ$, và $B$ là vị trí sau khi đi tiếp $8$ km theo phương vị $150^\circ$. Ta có $OA=12$ km và $AB=8$ km.

Phương vị đo từ hướng bắc theo chiều kim đồng hồ. Hướng từ $A$ về $O$ có phương vị $060^\circ+180^\circ=240^\circ$, còn hướng từ $A$ đến $B$ có phương vị $150^\circ$. Do đó
$$\widehat{OAB}=240^\circ-150^\circ=90^\circ.$$

Tam giác $OAB$ vuông tại $A$. Áp dụng định lí Pythagore:
$$OB^2=OA^2+AB^2=12^2+8^2=144+64=208.$$

Suy ra $OB=\sqrt{208}\approx14{,}4$ km.

Vậy khoảng cách từ tàu đến điểm xuất phát khoảng $14{,}4$ km.

**Đáp số.** $\sqrt{208}\approx14{,}4$ km.
:::

:::exercise Chiều cao của tháp
Từ một điểm cách chân tháp $50$ m trên mặt đất bằng phẳng, góc nâng tới đỉnh tháp là $32^\circ$. Tính chiều cao của tháp. [2 marks]

::hint
**Cần nhớ:** $\tan32^\circ=\dfrac{h}{50}$.

::solution
Gọi $h$ (m) là chiều cao của tháp. Mặt đất bằng phẳng nên tháp vuông góc với mặt đất; tam giác tạo bởi đỉnh tháp, chân tháp và điểm quan sát là tam giác vuông, với cạnh kề góc nâng bằng $50$ m và cạnh đối bằng $h$.

Áp dụng tỉ số lượng giác trong tam giác vuông:
$$\tan32^\circ=\frac{h}{50}.$$

Suy ra $h=50\tan32^\circ\approx31{,}2$ (m).

Vậy chiều cao của tháp khoảng $31{,}2$ m.

**Đáp số.** $h\approx31{,}2$ m.
:::

:::exercise Thử thách: một đẳng thức
Chứng minh $\dfrac{1-\cos2x}{\sin2x}=\tan x$ với $\sin2x\ne0$. [4 marks]

::hint
**Cần nhớ:** $\cos2x=1-2\sin^2x$ và $\sin2x=2\sin x\cos x$.

::solution
Điều kiện $\sin2x\ne0$. Vì $\sin2x=2\sin x\cos x$ nên điều kiện này tương đương $\sin x\ne0$ và $\cos x\ne0$; khi đó $\tan x$ cũng xác định.

Xét vế trái (VT). Áp dụng công thức nhân đôi $\cos2x=1-2\sin^2x$, ta có $1-\cos2x=1-\left(1-2\sin^2x\right)=2\sin^2x$. Áp dụng $\sin2x=2\sin x\cos x$, ta được
$$\text{VT}=\frac{1-\left(1-2\sin^2x\right)}{2\sin x\cos x}=\frac{2\sin^2x}{2\sin x\cos x}.$$

Vì $2\sin x\ne0$ nên ta rút gọn được:
$$\text{VT}=\frac{\sin x}{\cos x}=\tan x=\text{VP}.$$

Vậy $\dfrac{1-\cos2x}{\sin2x}=\tan x$ với $\sin2x\ne0$.

**Đáp số.** $\dfrac{1-\cos2x}{\sin2x}=\tan x$.
:::

:::quiz
::mc TH
Góc $150^\circ$ đổi sang radian bằng
A. $\dfrac{3\pi}{4}$
B. $\dfrac{2\pi}{3}$
C. $\dfrac{5\pi}{6}$
D. $\dfrac{5\pi}{3}$
::key C
$150\cdot\dfrac{\pi}{180}=\dfrac{5\pi}{6}$.

::mc TH
Chu kì của $y=3\sin(4x)$ bằng
A. $\dfrac\pi2$
B. $4\pi$
C. $\dfrac{3\pi}{2}$
D. $8\pi$
::key A
$\dfrac{2\pi}{4}=\dfrac\pi2$. Số $3$ là biên độ.

::mc TH
Giá trị chính xác của $\cos\dfrac{4\pi}{3}$ là
A. $\dfrac12$
B. $-\dfrac{\sqrt3}{2}$
C. $\dfrac{\sqrt3}{2}$
D. $-\dfrac12$
::key D
$\dfrac{4\pi}{3}$ thuộc góc phần tư thứ ba, góc tham chiếu $\dfrac\pi3$; cosin âm ở đó.

::mc TH
Một tam giác có hai cạnh dài $8$ và $5$, góc xen giữa $30^\circ$. Diện tích tam giác bằng
A. $20$
B. $10$
C. $10\sqrt3$
D. $40$
::key B
$\dfrac12(8)(5)\sin30^\circ=10$.

::tf NB TH TH VD
Xét $y=2\cos x+1$.
a) Biên độ bằng $2$.
b) Giá trị nhỏ nhất bằng $1$.
c) Chu kì bằng $\pi$.
d) Tập giá trị là $-1\le y\le3$.
::key T F F T
a) Đúng. b) Sai: giá trị nhỏ nhất là $1-2=-1$. c) Sai: chu kì là $2\pi$. d) Đúng.

::sa TH
Một hình quạt có bán kính $4$ và góc $0{,}5$ radian. Tính diện tích của nó.
::key 4
$\dfrac12(16)(0{,}5)=4$.

::sa TH
Cho $\sin\theta=0{,}6$ và $\cos\theta>0$. Tính $\cos\theta$.
::key 0,8
$\sqrt{1-0{,}36}=0{,}8$.
:::
