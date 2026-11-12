---
title: Lượng giác
description: "IGCSE Toán Extended: tam giác vuông, phương vị, định lí sin, định lí côsin, diện tích ½ab sin C, bài toán không gian và giải sin x = k từ 0° đến 360°."
minutes: 50
---

:::goals
- Dùng định lí Pythagore và sin, côsin, tang trong tam giác vuông, kể cả phương vị và góc nâng.
- Dùng định lí sin, định lí côsin và $\tfrac12ab\sin C$ trong tam giác bất kì, và chọn đúng công thức.
- Giải phương trình lượng giác đơn giản với $0^\circ\le x\le360^\circ$ và tìm góc trong hình không gian.
:::

Một chiếc thang dài $6$ m dựa vào tường, chân thang cách tường $2$ m. Có an toàn không? Một hướng dẫn quen thuộc nói thang nên tạo với mặt đất góc khoảng $75^\circ$. Không ai trèo lên rồi áp thước đo góc vào cả, nhưng một chiếc máy tính và một tỉ số lượng giác sẽ trả lời trong vài giây.

Lượng giác dùng vào đúng việc ấy: đổi độ dài thành góc và góc thành độ dài, ở những chỗ khó đo trực tiếp. Ở Paper 4 các em có máy tính khoa học, và câu lượng giác thường chiếm khá nhiều điểm. Ý tưởng thì ít; phần lớn điểm mất là do chọn sai công thức hoặc để máy sai chế độ. Bài này xoay quanh hai lựa chọn đó.

## Tam giác vuông

Trong tam giác vuông, gọi tên các cạnh theo góc $\theta$ đang xét: **cạnh huyền** đối diện góc vuông, **cạnh đối** nằm đối diện $\theta$, **cạnh kề** nằm sát $\theta$. Khi đó

$$\sin\theta=\frac{\text{đối}}{\text{huyền}},\qquad \cos\theta=\frac{\text{kề}}{\text{huyền}},\qquad \tan\theta=\frac{\text{đối}}{\text{kề}}.$$

Trước hết, kiểm tra máy tính đang ở chế độ **độ** (Deg). Sau đó cách làm luôn như nhau: đánh dấu hai cạnh đã biết hoặc cần tìm, chọn tỉ số dùng đúng hai cạnh ấy, rồi giải.

:::example Chiếc thang
Một chiếc thang dài $6$ m dựa vào bức tường thẳng đứng, chân thang cách tường $2$ m. Tính góc giữa thang và mặt đất, làm tròn đến $1$ chữ số thập phân.
A. $19{,}5^\circ$
B. $70{,}5^\circ$
C. $71{,}6^\circ$
D. $75{,}0^\circ$

**Lời giải.** Với góc ở chân thang, thang là cạnh huyền ($6$ m), khoảng cách tới tường là cạnh kề ($2$ m), nên ta dùng côsin: $\cos\theta=\dfrac26$.

Do đó $\theta=\cos^{-1}\left(\dfrac13\right)\approx70{,}5^\circ$.

Vậy góc là $70{,}5^\circ$, chọn **B**. Góc này hơi thoải hơn mức $75^\circ$, nên cần dời chân thang lại gần tường. Phương án A là góc ở đầu thang, còn phương án C đến từ $\tan^{-1}3$, như thể $6$ m là chiều cao.
:::

**Phương vị** (bearing) là góc đo theo chiều kim đồng hồ từ hướng bắc, viết bằng ba chữ số: $060^\circ$, $245^\circ$. Nếu $B$ nằm theo phương vị $060^\circ$ từ $A$ thì $A$ nằm theo phương vị $060^\circ+180^\circ=240^\circ$ từ $B$. Luôn vẽ một mũi tên chỉ hướng bắc nhỏ tại mỗi điểm trước khi bắt đầu.

:::example Một chuyến đi bộ
Mai đi bộ $5$ km về phía bắc, rồi $12$ km về phía đông. Mai cách điểm xuất phát bao xa, theo phương vị nào?

**Lời giải.** Hai chặng vuông góc với nhau, nên theo định lí Pythagore khoảng cách là $\sqrt{5^2+12^2}=\sqrt{169}=13$ km.

Góc tại điểm xuất phát, đo từ hướng bắc, thoả mãn $\tan\theta=\dfrac{12}{5}$, nên $\theta=\tan^{-1}2{,}4\approx67{,}4^\circ$.

Vậy Mai cách điểm xuất phát $13$ km, theo phương vị $067{,}4^\circ$.
:::

## Định lí sin, định lí côsin và diện tích

Với tam giác có các góc $A$, $B$, $C$ và các cạnh đối diện $a$, $b$, $c$:

$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C},\qquad a^2=b^2+c^2-2bc\cos A,\qquad \text{Diện tích}=\tfrac12ab\sin C.$$

Chọn thế nào? Hãy nhìn vào những gì đã biết.

| Đã biết | Dùng |
|---|---|
| một cạnh và góc đối diện nó, thêm một cạnh hoặc một góc nữa | định lí sin |
| hai cạnh và góc xen giữa | định lí côsin để tìm cạnh thứ ba; $\tfrac12ab\sin C$ để tính diện tích |
| cả ba cạnh | định lí côsin biến đổi để tìm góc |

Định lí côsin chính là định lí Pythagore có thêm một số hạng hiệu chỉnh. Khi $A=90^\circ$ thì $\cos A=0$ và số hạng ấy biến mất.

:::example Định lí sin
Trong tam giác $ABC$, góc $A=40^\circ$, góc $B=65^\circ$ và $a=8$ cm. Tính $b$.

**Lời giải.** Ta biết cạnh $a$ và góc đối diện $A$, cần tìm cạnh đối diện góc $B$, nên dùng định lí sin: $\dfrac{b}{\sin65^\circ}=\dfrac{8}{\sin40^\circ}$.

Do đó $b=\dfrac{8\sin65^\circ}{\sin40^\circ}\approx11{,}3$ cm.

Vậy $b\approx11{,}3$ cm.
:::

:::example Định lí côsin và diện tích
Hai cạnh của một tam giác dài $7$ cm và $10$ cm, góc xen giữa là $52^\circ$. Tính cạnh thứ ba và diện tích.

**Lời giải.** Biết hai cạnh và góc xen giữa, nên định lí côsin cho cạnh thứ ba: $c^2=7^2+10^2-2\times7\times10\cos52^\circ\approx149-86{,}19=62{,}81$, nên $c\approx7{,}93$ cm.

Diện tích là $\tfrac12\times7\times10\times\sin52^\circ\approx27{,}6\text{ cm}^2$.

Vậy cạnh thứ ba khoảng $7{,}93$ cm và diện tích khoảng $27{,}6\text{ cm}^2$.
:::

## Đồ thị và phương trình lượng giác

Đồ thị $y=\sin x$ và $y=\cos x$ lặp lại sau mỗi $360^\circ$ và luôn nằm giữa $-1$ và $1$. Vì thế, phương trình như $\sin x=0{,}5$ có **hai** nghiệm trong khoảng từ $0^\circ$ đến $360^\circ$, trong khi máy tính chỉ cho một. Đồ thị chỉ cho ta chỗ tìm nghiệm còn lại.

:::graph Đường thẳng y = 0,5 cắt đồ thị y = sin x hai lần trong khoảng từ 0° đến 360°
alt: Đồ thị y = sin x với x từ 0 đến 360 độ, đường thẳng nằm ngang y = 0,5 cắt đồ thị tại x = 30 và x = 150
x: 0..360
y: -1.5..1.5
shape: free
plot: sin(x*pi/180) ; 0..360
hline: 0.5 ; dashed
point: (30, 0.5) "30°" above
point: (150, 0.5) "150°" above
:::

:::example Giải sin x = 0,5
Giải $\sin x=0{,}5$ với $0^\circ\le x\le360^\circ$.

**Lời giải.** Máy tính cho $x=\sin^{-1}0{,}5=30^\circ$.

Đồ thị sin đối xứng qua đường $x=90^\circ$, nên nghiệm thứ hai là $180^\circ-30^\circ=150^\circ$. Cả hai đều thuộc khoảng đã cho.

Vậy $x=30^\circ$ hoặc $x=150^\circ$.
:::

Với côsin, đồ thị đối xứng qua đường $x=180^\circ$, nên nếu $x_1$ là một nghiệm thì $360^\circ-x_1$ là một nghiệm khác.

## Không gian ba chiều

Một câu hỏi không gian thực ra là câu hỏi phẳng được ngụy trang. Tìm một tam giác vuông chứa độ dài hoặc góc cần tính, vẽ riêng nó ra mặt phẳng, rồi làm việc trong tam giác ấy. Góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng và "cái bóng" (hình chiếu) của nó trên mặt phẳng.

:::warning Những chỗ hay sai
- **Chế độ máy tính:** phải để ở độ; kết quả theo radian trông có vẻ hợp lí nhưng sai.
- **Chọn sai công thức:** dùng bảng ở trên; định lí sin cần một cạnh đi kèm góc đối diện nó.
- **Thứ tự trong định lí côsin:** tính trọn $2bc\cos A$ rồi mới lấy $b^2+c^2$ trừ đi.
- **Chỉ tìm một nghiệm:** phương trình trên $0^\circ$ đến $360^\circ$ thường có hai nghiệm; hãy nhìn đồ thị.
- **Làm tròn quá sớm:** giữ nguyên giá trị trên máy, rồi ghi độ dài $3$ chữ số có nghĩa, góc $1$ chữ số thập phân.
:::

:::terms
- hypotenuse / opposite / adjacent | cạnh huyền / cạnh đối / cạnh kề
- sine rule / cosine rule | định lí sin / định lí côsin
- included angle | góc xen giữa
- bearing | phương vị (góc hướng)
- angle of elevation / depression | góc nâng / góc hạ
- degree mode | chế độ độ (Deg)
- line and plane | đường thẳng và mặt phẳng
:::

## Bài tập tương tự

:::exercise
Một tam giác vuông có cạnh huyền $15$ cm và một góc $35^\circ$. Tính cạnh đối diện góc $35^\circ$.

::hint
**Kiến thức:** $\sin\theta=\dfrac{\text{đối}}{\text{huyền}}$.

::solution
Đã biết cạnh huyền và cần tìm cạnh đối, nên dùng sin: $\sin35^\circ=\dfrac{x}{15}$.

Nhân hai vế với $15$: $x=15\sin35^\circ\approx8{,}60$ cm.

Vậy cạnh đối dài khoảng $8{,}60$ cm.

**Đáp số.** $8{,}60$ cm.
:::

:::exercise
Một tam giác vuông có hai cạnh góc vuông $7$ cm và $4$ cm. Tính góc đối diện cạnh $7$ cm.

::hint
**Kiến thức:** $\tan\theta=\dfrac{\text{đối}}{\text{kề}}$.

::solution
Cạnh $7$ cm là cạnh đối, cạnh $4$ cm là cạnh kề của góc cần tìm, nên $\tan\theta=\dfrac74=1{,}75$.

Do đó $\theta=\tan^{-1}1{,}75\approx60{,}3^\circ$.

Vậy góc cần tìm khoảng $60{,}3^\circ$.

**Đáp số.** $60{,}3^\circ$.
:::

:::exercise
Trong tam giác $ABC$, $a=10$ cm, góc $A=48^\circ$ và góc $B=72^\circ$. Tính $b$.

::hint
**Kiến thức:** định lí sin.

::solution
Ta biết cạnh $a$ cùng góc đối diện $A$, đúng cặp mà định lí sin cần, nên định lí sin cho $\dfrac{b}{\sin72^\circ}=\dfrac{10}{\sin48^\circ}$.

Do đó $b=\dfrac{10\sin72^\circ}{\sin48^\circ}\approx12{,}8$ cm.

Vậy $b\approx12{,}8$ cm.

**Đáp số.** $12{,}8$ cm.
:::

:::exercise
Hai cạnh của một tam giác dài $8$ cm và $11$ cm, góc xen giữa là $120^\circ$. Tính cạnh thứ ba.

::hint
**Kiến thức:** định lí côsin; $\cos120^\circ=-0{,}5$.

::solution
Biết hai cạnh và góc xen giữa, nên dùng định lí côsin: $c^2=8^2+11^2-2\times8\times11\cos120^\circ$.

Vì $\cos120^\circ=-0{,}5$ nên $c^2=64+121+88=273$, do đó $c=\sqrt{273}\approx16{,}5$ cm.

Vậy cạnh thứ ba khoảng $16{,}5$ cm. Nó dài hơn cả hai cạnh kia, đúng như cạnh đối diện một góc tù.

**Đáp số.** $16{,}5$ cm.
:::

:::exercise
Một tam giác có các cạnh $5$ cm, $7$ cm và $9$ cm. Tính góc lớn nhất.

::hint
**Kiến thức:** góc lớn nhất đối diện cạnh dài nhất.

::solution
Góc lớn nhất $C$ đối diện cạnh $9$ cm. Biến đổi định lí côsin: $\cos C=\dfrac{5^2+7^2-9^2}{2\times5\times7}=\dfrac{-7}{70}=-0{,}1$.

Do đó $C=\cos^{-1}(-0{,}1)\approx95{,}7^\circ$.

Vậy góc lớn nhất khoảng $95{,}7^\circ$; côsin âm đã báo trước đó là góc tù.

**Đáp số.** $95{,}7^\circ$.
:::

## Bài tập vận dụng

:::exercise
Từ một điểm trên mặt đất bằng phẳng cách chân tháp $50$ m, góc nâng nhìn lên đỉnh tháp là $32^\circ$. Tính chiều cao của tháp.

::hint
**Kiến thức:** $\tan\theta=\dfrac{\text{đối}}{\text{kề}}$.

::solution
Chiều cao là cạnh đối của góc $32^\circ$, khoảng cách $50$ m là cạnh kề, nên $\tan32^\circ=\dfrac{h}{50}$.

Do đó $h=50\tan32^\circ\approx31{,}2$ m.

Vậy tháp cao khoảng $31{,}2$ m.

**Đáp số.** $31{,}2$ m.
:::

:::exercise
Giải $2\cos x+1=0$ với $0^\circ\le x\le360^\circ$.

::hint
**Kiến thức:** đưa về $\cos x=-0{,}5$, rồi dùng tính đối xứng của đồ thị côsin.

::solution
Trừ hai vế cho $1$ rồi chia cho $2$, được $\cos x=-0{,}5$; máy tính cho $x=\cos^{-1}(-0{,}5)=120^\circ$.

Đồ thị côsin đối xứng qua đường $x=180^\circ$, nên nghiệm thứ hai là $360^\circ-120^\circ=240^\circ$.

Vậy $x=120^\circ$ hoặc $x=240^\circ$.

**Đáp số.** $120^\circ$, $240^\circ$.
:::

:::exercise
Một hình hộp chữ nhật dài $8$ cm, rộng $6$ cm, cao $5$ cm. Tính độ dài đường chéo đi xuyên qua bên trong hình hộp, và góc giữa đường chéo đó với mặt đáy.

::hint
**Kiến thức:** tính đường chéo mặt đáy trước, rồi xét một tam giác vuông đứng.

::solution
Đường chéo mặt đáy là $\sqrt{8^2+6^2}=10$ cm. Đường chéo hình hộp, đường chéo đáy và một cạnh đứng $5$ cm tạo thành tam giác vuông, nên đường chéo hình hộp là $\sqrt{10^2+5^2}=\sqrt{125}\approx11{,}2$ cm.

Góc với mặt đáy là góc giữa đường chéo hình hộp và hình chiếu của nó, chính là đường chéo đáy: $\tan\theta=\dfrac{5}{10}$, nên $\theta\approx26{,}6^\circ$.

Vậy đường chéo dài khoảng $11{,}2$ cm và tạo với mặt đáy góc $26{,}6^\circ$.

**Đáp số.** $11{,}2$ cm; $26{,}6^\circ$.
:::

:::exercise Thử thách
Tàu $B$ cách cảng $P$ $20$ km theo phương vị $050^\circ$. Tàu $C$ cách $P$ $15$ km theo phương vị $140^\circ$. Tính khoảng cách $BC$ và diện tích tam giác $PBC$.

::hint
**Kiến thức:** góc $BPC$ bằng hiệu hai phương vị.

::solution
Góc tại $P$ là $140^\circ-50^\circ=90^\circ$, nên tam giác $PBC$ vuông tại $P$ và $BC=\sqrt{20^2+15^2}=\sqrt{625}=25$ km.

Diện tích là $\tfrac12\times20\times15\times\sin90^\circ=150\text{ km}^2$.

Vậy hai tàu cách nhau $25$ km, tam giác có diện tích $150\text{ km}^2$. Tính góc giữa hai phương vị trước là đáng công: ở đây nó biến bài định lí côsin thành bài Pythagore.

**Đáp số.** $25$ km; $150\text{ km}^2$.
:::

:::quiz
::mc
$B$ nằm theo phương vị $060^\circ$ từ $A$. Phương vị của $A$ từ $B$ là
A. $120^\circ$
B. $300^\circ$
C. $240^\circ$
D. $060^\circ$
::key C
Cộng thêm $180^\circ$.

::mc
Biết hai cạnh và góc xen giữa. Để tìm cạnh thứ ba, ta dùng
A. định lí sin
B. định lí côsin
C. $\tan\theta=\dfrac{\text{đối}}{\text{kề}}$
D. $\tfrac12ab\sin C$
::key B
Hai cạnh và góc xen giữa: định lí côsin.

::mc
Giá trị của $\sin150^\circ$ là
A. $0{,}5$
B. $-0{,}5$
C. $0{,}866$
D. $-0{,}866$
::key A
$\sin150^\circ=\sin30^\circ$.

::mc
Công thức nào tính diện tích tam giác bất kì?
A. $\tfrac12ab\cos C$
B. $ab\sin C$
C. $\tfrac12(a+b)\sin C$
D. $\tfrac12ab\sin C$
::key D
Nửa tích hai cạnh nhân sin góc xen giữa.

::tf
Tam giác $ABC$ vuông tại $C$, với $BC=3$, $AC=4$ và $AB=5$. Mỗi khẳng định sau đúng hay sai?
a) $\sin A=0{,}6$.
b) $\cos A=0{,}8$.
c) $\tan A=0{,}75$.
d) Góc $A=45^\circ$.
::key T T T F
$A=\tan^{-1}0{,}75\approx36{,}9^\circ$.

::sa
Tính diện tích tam giác có hai cạnh $9$ cm, $12$ cm và góc xen giữa $30^\circ$ (đơn vị $\text{cm}^2$).
::key 27
$\tfrac12\times9\times12\times0{,}5$.

::sa
Giải $\sin x=1$ với $0^\circ\le x\le360^\circ$ (đơn vị độ).
::key 90
Đồ thị sin chỉ chạm $1$ một lần trong khoảng này.
:::
