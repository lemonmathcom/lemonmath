---
title: Tính chất đường phân giác của tam giác
description: Biết đường phân giác của một góc trong tam giác chia cạnh đối diện thành hai đoạn tỉ lệ với hai cạnh kề, rồi vận dụng để tính độ dài các đoạn thẳng.
minutes: 20
---

:::goals
- Phát biểu được tính chất đường phân giác của tam giác: $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.
- Hiểu vì sao tính chất đó đúng (dựa vào diện tích tam giác).
- Tính độ dài các đoạn thẳng trong tam giác khi có đường phân giác.
- Vận dụng vào bài toán thực tế và phối hợp với định lí Thalès để giải bài toán hình.
:::

Tính chất của đường phân giác đã được ghi trong bộ *Cơ sở* của Euclid từ hơn $2000$ năm trước (quyển VI, mệnh đề 3). Người xưa cần nó để chia đất và dựng hình, còn ngày nay nó vẫn giúp ta chia một mảnh đất, một tấm vải hay một mặt phẳng thiết kế theo một tỉ lệ cho trước.

Giả sử nhà bác Hải có một mảnh đất hình tam giác $ABC$ với $AB=12$ m, $AC=18$ m, $BC=20$ m, cạnh $BC$ nằm sát bờ kênh. Bác muốn làm một lối đi thẳng từ góc $A$ ra bờ kênh sao cho lối đi chia đôi góc $A$. Lối đi chạm bờ kênh tại điểm $D$. Điểm $D$ cách $B$ bao nhiêu mét? Có phải $D$ là trung điểm của $BC$ không?

## Cùng khám phá

Bạn hãy vẽ tam giác $ABC$ có $AB=6$ cm, $AC=9$ cm, $BC=10$ cm, rồi vẽ tia phân giác của góc $A$ cắt $BC$ tại $D$. Đo bằng thước, bạn sẽ được $DB\approx4$ cm và $DC\approx6$ cm.

:::diagram Phân giác $AD$ của tam giác $ABC$
alt: Tam giác ABC với đường phân giác AD của góc A cắt cạnh BC tại D; hai góc BAD và DAC được đánh dấu bằng nhau
point B 0,0 below-left
point C 10,0 below-right
point A 2.75,5.33 above
point D 4,0 below
polygon A B C
segment A D
angle B A D "α"
angle D A C "α"
:::

Ta thấy $\dfrac{DB}{DC}=\dfrac46=\dfrac23$ và $\dfrac{AB}{AC}=\dfrac69=\dfrac23$. Hai tỉ số bằng nhau! Điều đó có đúng với mọi tam giác không? Ta phát biểu thành định lí.

:::theorem Tính chất đường phân giác của tam giác
Trong tam giác $ABC$, đường phân giác của góc $A$ cắt cạnh $BC$ tại $D$. Khi đó $D$ chia cạnh $BC$ thành hai đoạn thẳng tỉ lệ với hai cạnh kề của chúng:
$$\frac{DB}{DC}=\frac{AB}{AC}.$$
:::

**Vì sao?** Hai tam giác $ABD$ và $ACD$ có chung đường cao kẻ từ $A$, nên tỉ số diện tích của chúng bằng tỉ số hai đáy:
$$\frac{S_{ABD}}{S_{ACD}}=\frac{DB}{DC}.$$
Mặt khác, $D$ nằm trên đường phân giác của góc $A$ nên $D$ cách đều hai cạnh $AB$ và $AC$; gọi khoảng cách đó là $h$. Xem $AB$ và $AC$ là đáy, hai tam giác trên có cùng đường cao $h$ kẻ từ $D$, nên
$$\frac{S_{ABD}}{S_{ACD}}=\frac{\frac12\cdot AB\cdot h}{\frac12\cdot AC\cdot h}=\frac{AB}{AC}.$$
Hai biểu thức cùng bằng $\dfrac{S_{ABD}}{S_{ACD}}$ nên $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.

**Hiểu sâu hơn.** Cạnh nào ngắn hơn thì đoạn tương ứng cũng ngắn hơn: nếu $AB<AC$ thì $DB<DC$, tức là $D$ nằm gần $B$ hơn. Chỉ khi $AB=AC$ thì $D$ mới là trung điểm của $BC$. Vì vậy đường phân giác nói chung **không** trùng với đường trung tuyến.

:::note Cách tính nhanh
Từ $\dfrac{DB}{DC}=\dfrac{AB}{AC}$ và $DB+DC=BC$, ta suy ra
$$DB=BC\cdot\frac{AB}{AB+AC},\qquad DC=BC\cdot\frac{AC}{AB+AC}.$$
:::

## Ví dụ

Ta bắt đầu với bài tính trực tiếp.

:::example Tính độ dài hai đoạn thẳng
Cho tam giác $ABC$ có $AB=8$, $AC=12$, $BC=15$. Đường phân giác $AD$ ($D\in BC$). Tính $DB$ và $DC$.

**Lời giải.** Vì $AD$ là đường phân giác của tam giác $ABC$ nên
$$\frac{DB}{DC}=\frac{AB}{AC}=\frac{8}{12}=\frac23.$$
Suy ra $DB=\dfrac{2}{2+3}\cdot BC=\dfrac25\cdot15=6$ và $DC=15-6=9$.

Vậy $DB=6$, $DC=9$.
:::

Tính chất cũng cho phép đi ngược lại: biết hai đoạn thẳng trên $BC$, tìm một cạnh.

:::example Tìm độ dài một cạnh
Cho tam giác $ABC$ có $AB=6$. Đường phân giác $AD$ ($D\in BC$) có $DB=3$, $DC=4{,}5$. Tính $AC$.

**Lời giải.** Vì $AD$ là đường phân giác nên $\dfrac{AB}{AC}=\dfrac{DB}{DC}$. Thay số, ta được
$$\frac{6}{AC}=\frac{3}{4{,}5}\ \Rightarrow\ AC=\frac{6\cdot4{,}5}{3}=9.$$

Vậy $AC=9$.
:::

Trong tam giác vuông, ta còn cần định lí Pythagore để tìm cạnh thứ ba.

:::example Tam giác vuông
Cho tam giác $ABC$ vuông tại $A$ có $AB=6$ cm, $AC=8$ cm. Đường phân giác $AD$ ($D\in BC$). Tính $DB$ và $DC$.

**Lời giải.** Theo định lí Pythagore, ta có $BC^2=AB^2+AC^2=36+64=100$, suy ra $BC=10$ cm. Vì $AD$ là đường phân giác nên
$$DB=BC\cdot\frac{AB}{AB+AC}=10\cdot\frac{6}{14}=\frac{30}{7},\qquad DC=10-\frac{30}{7}=\frac{40}{7}.$$

Vậy $DB=\dfrac{30}{7}$ cm và $DC=\dfrac{40}{7}$ cm.
:::

Bây giờ ta phối hợp với định lí Thalès (đường thẳng song song cắt hai cạnh của tam giác).

:::example Kết hợp với định lí Thalès
Cho tam giác $ABC$ có $AB=9$, $AC=12$, $BC=14$. Đường phân giác $AD$ ($D\in BC$). Đường thẳng qua $D$ song song với $AB$ cắt $AC$ tại $E$. Tính $DE$.

**Lời giải.** Vì $AD$ là đường phân giác nên $\dfrac{DB}{DC}=\dfrac{AB}{AC}=\dfrac{9}{12}=\dfrac34$. Suy ra $DC=\dfrac47\cdot14=8$.

Trong tam giác $ABC$ có $DE\parallel AB$, theo định lí Thalès, ta có
$$\frac{DE}{AB}=\frac{CD}{CB}\ \Rightarrow\ DE=9\cdot\frac{8}{14}=\frac{36}{7}.$$

Vậy $DE=\dfrac{36}{7}$.
:::

Cuối cùng, ta quay lại mảnh đất ở đầu bài, đi đủ bốn bước của việc giải một bài toán.

:::example Mảnh đất của bác Hải
Mảnh đất hình tam giác $ABC$ có $AB=12$ m, $AC=18$ m, $BC=20$ m. Lối đi $AD$ chia đôi góc $A$ ($D\in BC$). Tính $DB$ và $DC$.

**Lời giải.**

*Hiểu đề.* Biết ba cạnh; $AD$ là đường phân giác; cần tìm hai đoạn $DB$, $DC$ của cạnh $BC$.

*Tìm cách giải.* Đường phân giác chia cạnh đối diện theo tỉ lệ hai cạnh kề, nên ta dùng $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.

*Giải.* Ta có $\dfrac{DB}{DC}=\dfrac{12}{18}=\dfrac23$. Do đó $DB=\dfrac{2}{5}\cdot20=8$ (m) và $DC=20-8=12$ (m).

*Nhìn lại.* Kiểm tra: $8+12=20$ và $\dfrac{8}{12}=\dfrac{12}{18}$. Điểm $D$ không phải trung điểm của $BC$ vì $AB\neq AC$. Nếu thay đổi dữ kiện thì sao? Giả sử cạnh $AC$ dài hơn, còn $AB$ và $BC$ giữ nguyên, thì $DB$ nhỏ đi, tức là chân lối đi tiến gần về phía $B$. Điều này hợp lí vì lối đi luôn lệch về phía cạnh ngắn hơn.
:::

:::warning Những sai lầm thường gặp
- **Viết ngược tỉ số.** Sai: $\dfrac{DB}{DC}=\dfrac{AC}{AB}$. Lí do sai: với $AB=6$, $AC=9$ thì $DB$ sẽ lớn hơn $DC$, trong khi $AB<AC$ phải cho $DB<DC$. Đúng: $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.
- **So sánh một đoạn với cả cạnh $BC$.** Sai: $\dfrac{DB}{BC}=\dfrac{AB}{AC}$. Lí do sai: tỉ số này so sánh $DB$ với $BC=DB+DC$, không phải với $DC$. Đúng: $\dfrac{DB}{BC}=\dfrac{AB}{AB+AC}$.
- **Cho rằng $D$ là trung điểm của $BC$.** Sai: "$AD$ là phân giác nên $DB=DC$". Lí do sai: điều này chỉ đúng khi $AB=AC$. Đúng: $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.
:::

**Kết nối.** Bài này dựa trên khái niệm đường phân giác, diện tích tam giác và định lí Thalès mà bạn đã học. Nó chuẩn bị cho bài [hai tam giác đồng dạng](lesson:similar-triangles), nơi các tỉ số độ dài tương ứng trở thành công cụ chính.

## Thuật ngữ

:::terms
- đường phân giác | angle bisector
- tính chất đường phân giác | angle bisector theorem
- hai cạnh kề | adjacent sides
- cạnh đối diện | opposite side
- tỉ số | ratio
- tỉ lệ thức | proportion
- định lí Thalès | intercept theorem
- đường thẳng song song | parallel line
- diện tích | area
:::

## Tóm tắt

- Nếu $AD$ là đường phân giác của góc $A$ trong tam giác $ABC$ ($D\in BC$) thì $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.
- Lí do: hai tam giác $ABD$, $ACD$ có tỉ số diện tích vừa bằng $\dfrac{DB}{DC}$ (chung đường cao từ $A$), vừa bằng $\dfrac{AB}{AC}$ ($D$ cách đều $AB$, $AC$).
- Cách tính nhanh: $DB=BC\cdot\dfrac{AB}{AB+AC}$, $DC=BC\cdot\dfrac{AC}{AB+AC}$.
- Điểm $D$ nằm gần đỉnh có cạnh kề ngắn hơn; $D$ là trung điểm của $BC$ khi và chỉ khi $AB=AC$.
- Có thể phối hợp với định lí Thalès và định lí Pythagore để giải bài toán nhiều bước.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho tam giác $ABC$ có $AB=4$, $AC=6$. Đường phân giác $AD$ ($D\in BC$) có $DB=2$. Tính $DC$.

::hint
**Kiến thức:** $\dfrac{DB}{DC}=\dfrac{AB}{AC}$.

**Gợi ý các bước:**
1. Viết tỉ lệ thức với các số đã cho.
2. Giải để tìm $DC$.

::solution
Vì $AD$ là đường phân giác nên $\dfrac{DB}{DC}=\dfrac{AB}{AC}$, hay $\dfrac{2}{DC}=\dfrac46$. Suy ra $DC=\dfrac{2\cdot6}{4}=3$.

Vậy $DC=3$.

**Đáp số.** $DC=3$.
:::

:::exercise
Cho tam giác $ABC$ có $AB=10$, $AC=14$, $BC=18$. Đường phân giác $AD$ ($D\in BC$). Tính $DB$ và $DC$.

::hint
**Kiến thức:** $DB=BC\cdot\dfrac{AB}{AB+AC}$.

**Gợi ý các bước:**
1. Tính $AB+AC$.
2. Tính $DB$, rồi $DC=BC-DB$.

::solution
Vì $AD$ là đường phân giác nên $DB=18\cdot\dfrac{10}{24}=7{,}5$. Suy ra $DC=18-7{,}5=10{,}5$.

Vậy $DB=7{,}5$ và $DC=10{,}5$.

**Đáp số.** $DB=7{,}5$; $DC=10{,}5$.
:::

:::exercise
Cho tam giác $ABC$ có $AB=7{,}5$. Đường phân giác $AD$ ($D\in BC$) có $DB=4{,}5$, $DC=6$. Tính $AC$.

::hint
**Kiến thức:** $\dfrac{AB}{AC}=\dfrac{DB}{DC}$.

**Gợi ý các bước:**
1. Viết tỉ lệ thức $\dfrac{7{,}5}{AC}=\dfrac{4{,}5}{6}$.
2. Dùng tính chất của tỉ lệ thức để tìm $AC$.

::solution
Vì $AD$ là đường phân giác nên $\dfrac{AB}{AC}=\dfrac{DB}{DC}$, hay $\dfrac{7{,}5}{AC}=\dfrac{4{,}5}{6}$. Suy ra $AC=\dfrac{7{,}5\cdot6}{4{,}5}=10$.

Vậy $AC=10$.

**Đáp số.** $AC=10$.
:::

:::exercise
Cho tam giác $ABC$ cân tại $A$ có $AB=AC=10$ cm, $BC=12$ cm. Đường phân giác $AD$ ($D\in BC$). Chứng minh $D$ là trung điểm của $BC$ và $AD\perp BC$, rồi tính $AD$. (Ôn lại [định lí Pythagore](lesson:pythagoras-theorem).)

::hint
**Kiến thức:** tính chất đường phân giác; hai tam giác bằng nhau; định lí Pythagore.

**Gợi ý các bước:**
1. Dùng $\dfrac{DB}{DC}=\dfrac{AB}{AC}$ với $AB=AC$.
2. Xét hai tam giác $ABD$, $ACD$ để chứng minh $AD\perp BC$.
3. Áp dụng định lí Pythagore cho tam giác $ABD$.

::solution
Vì $AD$ là đường phân giác nên $\dfrac{DB}{DC}=\dfrac{AB}{AC}=1$, suy ra $DB=DC=6$ cm. Vậy $D$ là trung điểm của $BC$.

Xét hai tam giác $ABD$ và $ACD$, ta có $AB=AC$, $DB=DC$, $AD$ chung, nên $\triangle ABD=\triangle ACD$ (c.c.c). Suy ra $\widehat{ADB}=\widehat{ADC}$, mà hai góc này kề bù nên mỗi góc bằng $90^\circ$, tức là $AD\perp BC$.

Xét tam giác $ABD$ vuông tại $D$, theo định lí Pythagore, ta có $AD^2=AB^2-DB^2=100-36=64$, suy ra $AD=8$ cm.

Vậy $D$ là trung điểm của $BC$, $AD\perp BC$ và $AD=8$ cm.

**Đáp số.** $AD=8$ cm.
:::

:::exercise
Một tấm vải hình tam giác $ABC$ có $AB=90$ cm, $AC=120$ cm, $BC=105$ cm. Người thợ gấp tấm vải sao cho cạnh $AB$ chồng lên cạnh $AC$; nếp gấp $AD$ cắt $BC$ tại $D$. Tính $DB$ và $DC$.

::hint
**Kiến thức:** khi gấp để $AB$ chồng lên $AC$, nếp gấp $AD$ chính là đường phân giác của góc $A$.

**Gợi ý các bước:**
1. Nhận ra $AD$ là đường phân giác.
2. Áp dụng $DB=BC\cdot\dfrac{AB}{AB+AC}$.

::solution
Nếp gấp $AD$ là đường phân giác của góc $A$ nên
$$DB=105\cdot\frac{90}{90+120}=45\ \text{(cm)},\qquad DC=105-45=60\ \text{(cm)}.$$

Vậy $DB=45$ cm và $DC=60$ cm.

**Đáp số.** $DB=45$ cm; $DC=60$ cm.
:::

:::exercise
Cho tam giác $ABC$, đường phân giác $AD$ ($D\in BC$). Chứng minh rằng $\dfrac{DB}{BC}=\dfrac{AB}{AB+AC}$.

::hint
**Kiến thức:** $\dfrac{DB}{DC}=\dfrac{AB}{AC}$ và tính chất của dãy tỉ số bằng nhau.

**Gợi ý các bước:**
1. Từ $\dfrac{DB}{AB}=\dfrac{DC}{AC}$, cộng tử với tử, mẫu với mẫu.
2. Dùng $DB+DC=BC$.

::solution
Vì $AD$ là đường phân giác nên $\dfrac{DB}{DC}=\dfrac{AB}{AC}$, suy ra $\dfrac{DB}{AB}=\dfrac{DC}{AC}$. Theo tính chất của dãy tỉ số bằng nhau, ta có
$$\frac{DB}{AB}=\frac{DC}{AC}=\frac{DB+DC}{AB+AC}=\frac{BC}{AB+AC}.$$
Do đó $\dfrac{DB}{BC}=\dfrac{AB}{AB+AC}$.

**Đáp số.** Đã chứng minh.
:::

:::exercise
Cho tam giác $ABC$ có $AB=10$, $AC=15$, $BC=20$. Đường phân giác $AD$ ($D\in BC$). Đường thẳng qua $D$ song song với $AB$ cắt $AC$ tại $E$. Tính $DE$.

::hint
**Kiến thức:** tính chất đường phân giác và định lí Thalès.

**Gợi ý các bước:**
1. Tính $DC$.
2. Viết $\dfrac{DE}{AB}=\dfrac{CD}{CB}$.

::solution
Vì $AD$ là đường phân giác nên $DC=20\cdot\dfrac{15}{25}=12$. Vì $DE\parallel AB$ nên theo định lí Thalès, ta có $\dfrac{DE}{AB}=\dfrac{CD}{CB}=\dfrac{12}{20}$. Suy ra $DE=10\cdot\dfrac{12}{20}=6$.

Vậy $DE=6$.

**Đáp số.** $DE=6$.
:::

:::exercise
Tam giác $ABC$ có $AB=6$ cm, $AC=10$ cm và diện tích $48$ cm². Đường phân giác $AD$ ($D\in BC$). Tính diện tích của các tam giác $ABD$ và $ACD$.

::hint
**Kiến thức:** $\dfrac{S_{ABD}}{S_{ACD}}=\dfrac{DB}{DC}=\dfrac{AB}{AC}$.

**Gợi ý các bước:**
1. Tìm tỉ số $\dfrac{S_{ABD}}{S_{ACD}}$.
2. Chia $48$ cm² theo tỉ số đó.

::solution
Ta có $\dfrac{S_{ABD}}{S_{ACD}}=\dfrac{AB}{AC}=\dfrac{6}{10}=\dfrac35$ và $S_{ABD}+S_{ACD}=48$. Suy ra $S_{ABD}=\dfrac38\cdot48=18$ (cm²) và $S_{ACD}=48-18=30$ (cm²).

Vậy $S_{ABD}=18$ cm² và $S_{ACD}=30$ cm².

**Đáp số.** $18$ cm²; $30$ cm².
:::

:::exercise Thử thách
Cho tam giác $ABC$, đường phân giác $AD$ ($D\in BC$). Đường thẳng qua $D$ song song với $AB$ cắt $AC$ tại $E$.

a) Chứng minh $EA=ED$.

b) Cho $AB=12$, $AC=20$. Tính $AE$.

::hint
**Kiến thức:** hai góc so le trong bằng nhau; tam giác cân; định lí Thalès.

**Gợi ý các bước:**
1. a) So sánh $\widehat{EDA}$ với $\widehat{BAD}$, rồi với $\widehat{EAD}$.
2. b) Đặt $AE=x$, viết $\dfrac{DE}{AB}=\dfrac{CE}{CA}$ với $DE=x$, $CE=20-x$.

::solution
a) Vì $DE\parallel AB$ nên $\widehat{EDA}=\widehat{BAD}$ (hai góc so le trong). Vì $AD$ là đường phân giác nên $\widehat{BAD}=\widehat{EAD}$. Suy ra $\widehat{EDA}=\widehat{EAD}$, nên tam giác $EAD$ cân tại $E$, tức là $EA=ED$.

b) Đặt $AE=x$ ($0<x<20$). Khi đó $DE=x$ và $CE=20-x$. Vì $DE\parallel AB$ nên $\dfrac{DE}{AB}=\dfrac{CE}{CA}$, hay
$$\frac{x}{12}=\frac{20-x}{20}\ \Rightarrow\ 20x=240-12x\ \Rightarrow\ x=\frac{240}{32}=7{,}5.$$

Vậy $AE=7{,}5$.

**Đáp số.** a) Đã chứng minh. b) $AE=7{,}5$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho tam giác $ABC$ có $AB=6$, $AC=10$, $BC=12$. Đường phân giác $AD$ ($D\in BC$). Độ dài $DB$ bằng
A. $7{,}5$.
B. $7{,}2$.
C. $6$.
D. $4{,}5$.
::key D
$DB=12\cdot\dfrac{6}{16}=4{,}5$. A là $DC$, C là nửa $BC$ (nhầm $D$ là trung điểm), B là $BC\cdot\dfrac{AB}{AC}$ (quên cộng ở mẫu).

::mc
Cho tam giác $ABC$ có $AB=9$. Đường phân giác $AD$ ($D\in BC$) có $DB=3$, $DC=5$. Độ dài $AC$ bằng
A. $15$.
B. $12$.
C. $14$.
D. $5{,}4$.
::key A
$\dfrac{AB}{AC}=\dfrac{DB}{DC}$ nên $AC=9\cdot\dfrac53=15$. A viết ngược tỉ số, B và C cộng thay vì nhân.

::mc
Cho tam giác $ABC$ có $AB=AC$. Đường phân giác $AD$ ($D\in BC$). Khẳng định nào sau đây đúng?
A. $DB=AB$.
B. $D$ là trung điểm của $BC$.
C. $AD=AB$.
D. $DB<DC$.
::key B
$\dfrac{DB}{DC}=\dfrac{AB}{AC}=1$ nên $DB=DC$. Các phương án A, C, D không suy ra được từ tính chất đường phân giác.

::mc
Tam giác $ABC$ có $AB=4$, $AC=6$. Đường phân giác $AD$ ($D\in BC$). Biết $S_{ABD}=12$. Diện tích $S_{ACD}$ bằng
A. $8$.
B. $16$.
C. $18$.
D. $24$.
::key C
$\dfrac{S_{ABD}}{S_{ACD}}=\dfrac{AB}{AC}=\dfrac23$ nên $S_{ACD}=12\cdot\dfrac32=18$. A viết ngược tỉ số, B cộng $12+4$, D nhân đôi.

::tf
Cho tam giác $ABC$ có $AB=9$, $AC=12$, $BC=14$. Đường phân giác $AD$ ($D\in BC$). Xét tính đúng sai của các mệnh đề sau:
a) $D$ là trung điểm của $BC$.
b) $\dfrac{DB}{DC}=\dfrac34$.
c) $DB=6$.
d) $DC=6$.
::key S Đ Đ S
a) Sai: $AB\neq AC$ nên $DB\neq DC$. b) Đúng: $\dfrac{DB}{DC}=\dfrac{9}{12}=\dfrac34$. c) Đúng: $DB=14\cdot\dfrac{9}{21}=6$. d) Sai: $DC=14-6=8$.

::sa
Cho tam giác $ABC$ có $AB=14$ cm, $AC=21$ cm, $BC=25$ cm. Đường phân giác $AD$ ($D\in BC$). Tính $DB$ (đơn vị: cm).
::key 10
$DB=25\cdot\dfrac{14}{35}=10$.

::sa
Cho tam giác $ABC$ có $AB=6$ cm, $AC=8$ cm, $BC=9$ cm. Đường phân giác $AD$ ($D\in BC$). Tính $DC$ (đơn vị: cm, làm tròn đến hàng phần mười).
::key 5,1
$DC=9\cdot\dfrac{8}{14}=\dfrac{36}{7}\approx5{,}14$, làm tròn là $5{,}1$.
:::
