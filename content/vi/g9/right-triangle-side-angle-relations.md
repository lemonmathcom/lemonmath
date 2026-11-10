---
title: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng
description: Tính cạnh của tam giác vuông khi biết một cạnh và một góc nhọn, giải tam giác vuông và đo chiều cao, khoảng cách trong thực tế.
minutes: 20
---

:::goals
- Viết và dùng các hệ thức giữa cạnh và góc trong tam giác vuông.
- Giải tam giác vuông khi biết hai cạnh, hoặc một cạnh và một góc nhọn.
- Tính chiều cao, khoảng cách trong thực tế mà không cần đo trực tiếp.
:::

Bạn Minh đứng cách chân cột cờ của trường $15$ m. Minh nhìn lên đỉnh cột cờ theo một tia hợp với phương nằm ngang góc $35^\circ$, mắt Minh cách mặt đất $1{,}5$ m. Không cần trèo lên, làm sao biết cột cờ cao bao nhiêu mét?

Trong tam giác vuông tạo bởi mắt Minh, đỉnh cột và một điểm trên cột ngang tầm mắt, ta biết một cạnh ($15$ m) và một góc ($35^\circ$). Bài này cho ta cách tính các cạnh còn lại.

## Hệ thức giữa cạnh và góc

Cho tam giác $ABC$ vuông tại $A$, với $BC=a$, $CA=b$, $AB=c$.

:::diagram Tam giác vuông $ABC$ với các cạnh $a$, $b$, $c$
alt: Tam giác ABC vuông tại A, cạnh huyền BC kí hiệu a, cạnh CA kí hiệu b, cạnh AB kí hiệu c
point A 0,0 below-left
point B 5,0 below-right
point C 0,3 above-left
polygon A B C
segment B C "a"
segment A C "b"
segment A B "c"
right B A C
:::

### Khám phá

Từ định nghĩa, $\sin B=\dfrac{b}{a}$. Nhân hai vế với $a$ ta được $b=a\sin B$. Chẳng hạn, nếu $a=10$ và $\widehat{B}=30^\circ$ thì $b=10\cdot\dfrac12=5$. Làm tương tự với các tỉ số khác, ta được bốn hệ thức.

:::theorem Hệ thức giữa cạnh và góc trong tam giác vuông
Trong tam giác $ABC$ vuông tại $A$:
- Mỗi cạnh góc vuông bằng cạnh huyền nhân với sin góc đối hoặc nhân với côsin góc kề:
$$b=a\sin B=a\cos C,\qquad c=a\sin C=a\cos B.$$
- Mỗi cạnh góc vuông bằng cạnh góc vuông kia nhân với tang góc đối hoặc nhân với côtang góc kề:
$$b=c\tan B=c\cot C,\qquad c=b\tan C=b\cot B.$$
:::

Vì sao? Mỗi đẳng thức chỉ là định nghĩa viết lại. Ví dụ $\cos C=\dfrac{b}{a}$ (cạnh kề của góc $C$ là $b$), nên $b=a\cos C$; $\tan B=\dfrac bc$, nên $b=c\tan B$.

:::example Biết cạnh huyền và một góc nhọn
Cho tam giác $ABC$ vuông tại $A$ có $BC=12$ cm, $\widehat{B}=40^\circ$. Tính $AC$ và $AB$ (làm tròn đến hàng phần trăm).

**Lời giải.** Áp dụng hệ thức giữa cạnh và góc cho tam giác $ABC$ vuông tại $A$ ($AC$ đối diện góc $B$, $AB$ kề góc $B$), ta được

$$AC=BC\sin B=12\sin40^\circ\approx7{,}71;\qquad AB=BC\cos B=12\cos40^\circ\approx9{,}19.$$

Vậy $AC\approx7{,}71$ cm và $AB\approx9{,}19$ cm.
:::

Khi biết một cạnh góc vuông, ta dùng tang hoặc côtang.

:::example Biết một cạnh góc vuông và một góc nhọn
Cho tam giác $ABC$ vuông tại $A$ có $AB=6$ cm, $\widehat{B}=55^\circ$. Tính $AC$ (làm tròn đến hàng phần trăm).

**Lời giải.** Áp dụng hệ thức giữa cạnh và góc cho tam giác $ABC$ vuông tại $A$ ($AC$ đối diện góc $B$, $AB$ kề góc $B$), ta được

$$AC=AB\tan B=6\tan55^\circ\approx8{,}57.$$

Vậy $AC\approx8{,}57$ cm.
:::

## Giải tam giác vuông

**Giải tam giác vuông** là tìm tất cả các cạnh và góc còn lại khi biết hai yếu tố, trong đó có ít nhất một cạnh. Ta dùng ba công cụ: định lí Pythagore, $\widehat{B}+\widehat{C}=90^\circ$, và các hệ thức ở trên.

:::example Biết hai cạnh góc vuông
Giải tam giác $ABC$ vuông tại $A$, biết $AB=5$ cm, $AC=7$ cm (góc làm tròn đến độ, cạnh đến hàng phần trăm).

**Lời giải.** Xét tam giác $ABC$ vuông tại $A$, ta có $BC^2=AB^2+AC^2$ (định lí Pythagore) và $\tan B=\dfrac{AC}{AB}$. Do đó

$$BC=\sqrt{5^2+7^2}=\sqrt{74}\approx8{,}60;\qquad \tan B=\frac75=1{,}4\Rightarrow \widehat{B}\approx54^\circ;\qquad \widehat{C}\approx90^\circ-54^\circ=36^\circ.$$

Vậy $BC\approx8{,}60$ cm, $\widehat{B}\approx54^\circ$, $\widehat{C}\approx36^\circ$.
:::

:::example Biết cạnh huyền và một góc nhọn
Giải tam giác $ABC$ vuông tại $A$, biết $BC=20$ cm, $\widehat{C}=35^\circ$ (cạnh làm tròn đến hàng phần trăm).

**Lời giải.** Xét tam giác $ABC$ vuông tại $A$, ta có $\widehat B+\widehat C=90^\circ$. Áp dụng hệ thức giữa cạnh và góc ($AB$ đối diện góc $C$, $AC$ kề góc $C$), ta được

$$\widehat{B}=90^\circ-35^\circ=55^\circ;\qquad AB=20\sin35^\circ\approx11{,}47;\qquad AC=20\cos35^\circ\approx16{,}38.$$

Vậy $\widehat{B}=55^\circ$, $AB\approx11{,}47$ cm, $AC\approx16{,}38$ cm.
:::

## Ứng dụng: đo chiều cao và khoảng cách

Khi nhìn lên một vật, góc giữa tia nhìn và phương nằm ngang gọi là **góc nâng**. Khi nhìn xuống, góc đó gọi là **góc hạ**. Ta dựng một tam giác vuông có một cạnh nằm ngang, rồi dùng hệ thức.

:::diagram Đo chiều cao cột cờ
alt: Mắt Minh ở điểm M cao 1,5 mét so với mặt đất, cách cột cờ 15 mét, tia nhìn lên đỉnh cột D tạo với phương ngang góc 35 độ
point G 0,0 below-left "G"
point M 0,1.5 left "M"
point K 15,1.5 right "K"
point F 15,0 below-right "F"
point D 15,12 above-right "D"
segment G M
segment G F "15 m"
segment F D
segment M K dashed
segment M D
right M K D
angle D M K "35°"
:::

:::example Chiều cao cột cờ
Trả lời câu hỏi ở đầu bài (làm tròn đến hàng phần mười).

**Lời giải.** *Hiểu đề:* $M$ là mắt Minh, $K$ là điểm trên cột ngang tầm mắt, $D$ là đỉnh cột; $MK=15$ m, $\widehat{DMK}=35^\circ$, $KF=1{,}5$ m. *Tìm cách giải:* trong tam giác $MKD$ vuông tại $K$, $DK$ đối diện góc $M$, $MK$ kề góc $M$, nên dùng tang. Chiều cao cột cờ bằng $DK$ cộng với chiều cao $KF$ từ mắt Minh xuống đất. *Giải:* Xét tam giác $MKD$ vuông tại $K$, ta có

$$DK=MK\tan35^\circ=15\tan35^\circ\approx10{,}50;\qquad DF=DK+KF\approx10{,}50+1{,}5=12{,}0.$$

Vậy cột cờ cao khoảng $12{,}0$ m.
:::

:::warning Những sai lầm thường gặp
- **Chọn sai tỉ số.** Sai: $AC=BC\cos B$. Lí do sai: $AC$ đối diện góc $B$, nên đi với sin. Đúng: $AC=BC\sin B$ (hoặc $BC\cos C$).
- **Chia thay vì nhân.** Sai: $AC=\dfrac{AB}{\tan B}$. Lí do sai: $\tan B=\dfrac{AC}{AB}$ nên $AC=AB\tan B$. Đúng: chỉ chia khi cần tìm cạnh ở mẫu, ví dụ $BC=\dfrac{AC}{\sin B}$.
- **Làm tròn quá sớm.** Sai: ở bài thả diều, lấy $\sin38^\circ\approx0{,}6$ rồi tính $50\cdot0{,}6=30$ (m). Lí do sai: $50\sin38^\circ\approx30{,}78$, lệch gần $0{,}8$ m, và sai số còn lớn dần qua nhiều bước. Đúng: giữ nguyên trên máy, chỉ làm tròn kết quả cuối.
:::

## Thuật ngữ

:::terms
- cạnh góc vuông | leg of a right-angled triangle
- cạnh huyền | hypotenuse
- góc đối | opposite angle
- góc kề | adjacent angle
- giải tam giác vuông | solving a right-angled triangle
- góc nâng | angle of elevation
- góc hạ | angle of depression
- phương nằm ngang | horizontal
:::

## Tóm tắt

- Tam giác $ABC$ vuông tại $A$: $b=a\sin B=a\cos C$, $c=a\sin C=a\cos B$.
- $b=c\tan B=c\cot C$, $c=b\tan C=b\cot B$.
- Giải tam giác vuông: Pythagore, $\widehat B+\widehat C=90^\circ$, các hệ thức; cần biết ít nhất một cạnh.
- Bài thực tế: vẽ hình, tìm tam giác vuông, chọn tỉ số, làm tròn ở bước cuối.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $BC=8$ cm, $\widehat{C}=30^\circ$. Tính $AB$ và $AC$.

::hint
**Kiến thức:** $c=a\sin C$, $b=a\cos C$; $\sin30^\circ=\dfrac12$, $\cos30^\circ=\dfrac{\sqrt3}2$.

**Gợi ý các bước:**
1. $AB$ đối diện góc $C$.
2. $AC$ kề góc $C$.

::solution
Xét tam giác $ABC$ vuông tại $A$, ta có $AB=BC\sin C=8\sin30^\circ=4$ (cm) và $AC=BC\cos C=8\cos30^\circ=4\sqrt3\approx6{,}93$ (cm).

**Đáp số.** $AB=4$ cm, $AC=4\sqrt3\approx6{,}93$ cm.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $AC=10$ cm, $\widehat{C}=42^\circ$. Tính $AB$ và $BC$ (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** $c=b\tan C$; $b=a\cos C\Rightarrow a=\dfrac{b}{\cos C}$.

**Gợi ý các bước:**
1. $AB=AC\tan C$.
2. $BC=\dfrac{AC}{\cos C}$.

::solution
Xét tam giác $ABC$ vuông tại $A$, ta có $AB=AC\tan C=10\tan42^\circ\approx9{,}00$ (cm). Vì $AC=BC\cos C$ nên $BC=\dfrac{AC}{\cos C}=\dfrac{10}{\cos42^\circ}\approx13{,}46$ (cm).

**Đáp số.** $AB\approx9{,}00$ cm, $BC\approx13{,}46$ cm.
:::

:::exercise
Giải tam giác $ABC$ vuông tại $A$, biết $AB=9$ cm, $BC=15$ cm (góc làm tròn đến độ).

::hint
**Kiến thức:** định lí Pythagore; $\sin C=\dfrac{AB}{BC}$.

**Gợi ý các bước:**
1. Tính $AC$.
2. Tính góc $C$, rồi góc $B=90^\circ-\widehat C$.

::solution
Xét tam giác $ABC$ vuông tại $A$, ta có $AC=\sqrt{BC^2-AB^2}=\sqrt{225-81}=12$ (cm) (định lí Pythagore). Ta có $\sin C=\dfrac{AB}{BC}=\dfrac9{15}=0{,}6$, suy ra $\widehat{C}\approx37^\circ$. Do đó $\widehat{B}\approx90^\circ-37^\circ=53^\circ$.

**Đáp số.** $AC=12$ cm, $\widehat{C}\approx37^\circ$, $\widehat{B}\approx53^\circ$.
:::

:::exercise
Giải tam giác $ABC$ vuông tại $A$, biết $AC=4$ cm, $\widehat{B}=50^\circ$ (cạnh làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** $c=b\cot B$; $b=a\sin B$.

**Gợi ý các bước:**
1. $\widehat C=90^\circ-50^\circ$.
2. $AB=AC\cot B=\dfrac{AC}{\tan B}$; $BC=\dfrac{AC}{\sin B}$.

::solution
Xét tam giác $ABC$ vuông tại $A$, ta có $\widehat{C}=90^\circ-50^\circ=40^\circ$. Vì $AC=AB\tan B$ nên $AB=\dfrac{AC}{\tan B}=\dfrac{4}{\tan50^\circ}\approx3{,}36$ (cm). Vì $AC=BC\sin B$ nên $BC=\dfrac{AC}{\sin B}=\dfrac{4}{\sin50^\circ}\approx5{,}22$ (cm).

**Đáp số.** $\widehat{C}=40^\circ$, $AB\approx3{,}36$ cm, $BC\approx5{,}22$ cm.
:::

:::exercise
Cho tam giác $ABC$ vuông tại $A$ có $AB=2\sqrt3$ cm, $\widehat{B}=60^\circ$. Tính chính xác $AC$ và $BC$.

::hint
**Kiến thức:** $\tan60^\circ=\sqrt3$, $\cos60^\circ=\dfrac12$ (xem [tỉ số lượng giác của góc nhọn](lesson:acute-angle-trig-ratios)).

**Gợi ý các bước:**
1. $AC=AB\tan B$.
2. $BC=\dfrac{AB}{\cos B}$.

::solution
Xét tam giác $ABC$ vuông tại $A$, ta có $AC=AB\tan B=2\sqrt3\cdot\sqrt3=6$ (cm). Vì $AB=BC\cos B$ nên $BC=\dfrac{AB}{\cos B}=\dfrac{2\sqrt3}{1/2}=4\sqrt3$ (cm).

**Đáp số.** $AC=6$ cm, $BC=4\sqrt3$ cm.
:::

:::exercise
Một chiếc thang dài $6$ m dựa vào tường, tạo với mặt đất góc $70^\circ$. Chân thang cách tường bao xa, đỉnh thang cao bao nhiêu (làm tròn đến hàng phần trăm)?

::hint
**Kiến thức:** thang là cạnh huyền; khoảng cách đến tường kề góc $70^\circ$.

**Gợi ý các bước:**
1. Khoảng cách $=6\cos70^\circ$.
2. Độ cao $=6\sin70^\circ$.

::solution
Thang, tường và mặt đất tạo thành một tam giác vuông có cạnh huyền là thang dài $6$ m. Khoảng cách từ chân thang đến tường là $6\cos70^\circ\approx2{,}05$ (m). Độ cao của đỉnh thang là $6\sin70^\circ\approx5{,}64$ (m).

**Đáp số.** Khoảng $2{,}05$ m và $5{,}64$ m.
:::

:::exercise
Từ đỉnh một ngọn hải đăng cao $40$ m so với mặt biển, người gác nhìn thấy một chiếc thuyền với góc hạ $12^\circ$. Thuyền cách chân hải đăng bao nhiêu mét (làm tròn đến mét)?

::hint
**Kiến thức:** góc hạ bằng góc giữa tia nhìn và mặt biển (hai góc so le trong).

**Gợi ý các bước:**
1. Trong tam giác vuông, cạnh $40$ m đối diện góc $12^\circ$ tại thuyền.
2. Khoảng cách $=\dfrac{40}{\tan12^\circ}$.

::solution
Gọi $d$ (m) là khoảng cách từ thuyền đến chân hải đăng. Góc giữa tia nhìn và mặt biển bằng $12^\circ$ (hai góc so le trong). Trong tam giác vuông tạo bởi hải đăng, mặt biển và tia nhìn, ta có $40=d\tan12^\circ$, suy ra $d=\dfrac{40}{\tan12^\circ}\approx188$ (m).

**Đáp số.** Khoảng $188$ m.
:::

:::exercise
Lúc tia nắng tạo với mặt đất góc $52^\circ$, một cây có bóng dài $9$ m trên mặt đất phẳng. Tính chiều cao của cây (làm tròn đến hàng phần mười).

::hint
**Kiến thức:** chiều cao đối diện góc $52^\circ$, bóng kề góc đó.

**Gợi ý các bước:**
1. Vẽ tam giác vuông: cây, bóng, tia nắng.
2. Chiều cao $=9\tan52^\circ$.

::solution
Cây, bóng cây và tia nắng tạo thành một tam giác vuông. Chiều cao của cây là $9\tan52^\circ\approx11{,}5$ (m).

**Đáp số.** Khoảng $11{,}5$ m.
:::

:::exercise
Bạn Hà thả diều. Dây diều căng thẳng, dài $50$ m, tạo với phương nằm ngang góc $38^\circ$; tay Hà cầm dây ở độ cao $1{,}2$ m.

a) Diều cao bao nhiêu mét so với mặt đất (làm tròn đến hàng phần mười)?

b) Khoảng cách theo phương ngang từ tay Hà đến điểm ngay dưới diều là bao nhiêu (làm tròn đến hàng phần mười)?

c) Hà thả thêm dây cho dài $60$ m, góc giữ nguyên. Diều lên cao thêm bao nhiêu mét (làm tròn đến hàng phần mười)?

::hint
**Kiến thức:** dây diều là cạnh huyền; độ cao đối diện góc $38^\circ$.

**Gợi ý các bước:**
1. Độ cao từ tay: $50\sin38^\circ$; cộng $1{,}2$.
2. Khoảng ngang: $50\cos38^\circ$.
3. Phần tăng: $(60-50)\sin38^\circ$.

::solution
a) Độ cao của diều so với tay Hà là $50\sin38^\circ\approx30{,}78$ (m). Do đó độ cao của diều so với mặt đất là khoảng $30{,}78+1{,}2\approx32{,}0$ (m).

b) Khoảng cách theo phương ngang là $50\cos38^\circ\approx39{,}4$ (m).

c) Diều lên cao thêm $60\sin38^\circ-50\sin38^\circ=10\sin38^\circ\approx6{,}2$ (m).

**Đáp số.** a) $32{,}0$ m; b) $39{,}4$ m; c) $6{,}2$ m.
:::

:::exercise Thử thách
Hai bạn đứng trên cùng một đường thẳng với chân một toà nhà, ở cùng một phía, cách nhau $20$ m. Bạn đứng gần nhìn đỉnh toà nhà với góc nâng $45^\circ$, bạn đứng xa với góc nâng $30^\circ$. Tính chiều cao toà nhà (bỏ qua chiều cao của mắt; viết dạng gọn rồi làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** khoảng cách đến chân nhà $=h\cot\alpha$; trục căn thức ở mẫu.

**Gợi ý các bước:**
1. Gọi $h$ là chiều cao. Khoảng cách của hai bạn là $h\cot45^\circ=h$ và $h\cot30^\circ=h\sqrt3$.
2. Lập phương trình $h\sqrt3-h=20$ và giải.

::solution
Gọi $h$ (m) là chiều cao toà nhà ($h>0$). Khoảng cách từ hai bạn đến chân toà nhà lần lượt là $h\cot45^\circ=h$ và $h\cot30^\circ=h\sqrt3$. Theo đề bài ta có phương trình $h\sqrt3-h=20$. Suy ra $h=\dfrac{20}{\sqrt3-1}=\dfrac{20\left(\sqrt3+1\right)}{2}=10\left(\sqrt3+1\right)\approx27{,}32$ (m) (thoả mãn điều kiện).

**Đáp số.** $10\left(\sqrt3+1\right)\approx27{,}32$ m.
:::

## Kiểm tra mini

:::quiz
::mc
Tam giác $ABC$ vuông tại $A$ có $BC=a$, $CA=b$. Khi đó
A. $b=a\sin C$.
B. $b=a\cos B$.
C. $b=a\tan B$.
D. $b=a\sin B$.
::key D
Vì $b$ là cạnh góc vuông đối diện góc $B$ nên $b=a\sin B$ (hoặc $b=a\cos C$). Phương án B và A nhầm góc đối với góc kề, C dùng tang với cạnh huyền.

::mc
Tam giác $ABC$ vuông tại $A$ có $AB=c$. Khi đó $AC$ bằng
A. $c\cot B$.
B. $c\sin B$.
C. $c\tan B$.
D. $c\cos B$.
::key C
Ta có $\tan B=\dfrac{AC}{AB}$, suy ra $AC=c\tan B$. Phương án A dùng côtang của góc đối, B và D dùng sin, cos với cạnh góc vuông thay cho cạnh huyền.

::mc
Tam giác $ABC$ vuông tại $A$ có $BC=10$, $\widehat{B}=30^\circ$. Khi đó $AC$ bằng
A. $5$.
B. $5\sqrt3$.
C. $10\sqrt3$.
D. $20$.
::key A
Ta có $AC=BC\sin B=10\sin30^\circ=5$. Phương án B là $10\cos30^\circ$ (cạnh $AB$), D chia cho $\sin30^\circ$ thay vì nhân.

::mc
Một cột điện cao $8$ m có bóng trên mặt đất dài $8\sqrt3$ m. Góc giữa tia nắng và mặt đất là
A. khoảng $0{,}58^\circ$.
B. $30^\circ$.
C. $45^\circ$.
D. $60^\circ$.
::key B
Gọi $\alpha$ là góc cần tìm. Ta có $\tan\alpha=\dfrac{8}{8\sqrt3}=\dfrac{\sqrt3}3$, suy ra $\alpha=30^\circ$. Phương án D đảo tỉ số (bóng chia cột), A viết luôn tỉ số $0{,}58$ thành số đo góc.

::tf
Cho tam giác $ABC$ vuông tại $A$ có $AB=6$ cm, $\widehat{C}=30^\circ$. Xét tính đúng sai của các mệnh đề sau:
a) $BC=12$ cm.
b) $AC=6\sqrt3$ cm.
c) $\widehat{B}=30^\circ$.
d) $AC=BC\sin C$.
::key Đ Đ S S
a) Đúng. Vì $AB=BC\sin C$ nên $BC=\dfrac{AB}{\sin C}=\dfrac{6}{1/2}=12$ (cm). b) Đúng. $AC=AB\cot C=6\sqrt3$ (cm). c) Sai. $\widehat{B}=90^\circ-30^\circ=60^\circ$. d) Sai. $BC\sin C=6=AB$; hệ thức đúng là $AC=BC\cos C$.

::sa
Một chiếc thang dài $4$ m dựa vào tường, tạo với mặt đất góc $60^\circ$. Hỏi đỉnh thang cách mặt đất bao nhiêu mét (làm tròn kết quả đến hàng phần mười)?
::key 3,5
Độ cao của đỉnh thang là $4\sin60^\circ=2\sqrt3\approx3{,}5$ (m).

::sa
Bóng của một toà nhà trên mặt đất dài $25$ m khi tia nắng tạo với mặt đất góc $40^\circ$. Hỏi toà nhà cao bao nhiêu mét (làm tròn kết quả đến hàng đơn vị)?
::key 21
Chiều cao của toà nhà là $25\tan40^\circ\approx21$ (m).
:::
