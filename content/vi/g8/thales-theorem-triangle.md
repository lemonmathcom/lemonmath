---
title: Định lí Thalès trong tam giác
description: Tìm hiểu tỉ số của hai đoạn thẳng, định lí Thalès và định lí Thalès đảo trong tam giác, rồi tính độ dài, chứng minh song song và giải bài toán thực tế.
minutes: 35
---

:::goals
- Hiểu tỉ số của hai đoạn thẳng và biết tính tỉ số khi hai đoạn có cùng đơn vị đo.
- Phát biểu và vận dụng định lí Thalès: đường thẳng song song với một cạnh của tam giác cắt hai cạnh còn lại tại các đoạn tỉ lệ.
- Phát biểu và vận dụng định lí Thalès đảo để chứng minh hai đường thẳng song song.
- Tính độ dài đoạn thẳng, chứng minh song song và giải bài toán thực tế bằng các định lí này.
:::

Giả sử một mảnh đất có dạng tam giác $ABC$ với $AB=30$ m và $AC=24$ m. Người ta muốn làm một lối đi thẳng $DE$ song song với cạnh $BC$ (cạnh sát đường lớn), với $D$ nằm trên $AB$, $E$ nằm trên $AC$ và $AD=12$ m.

Điểm $E$ phải cách $A$ bao nhiêu mét? Ta sẽ trả lời bằng **định lí Thalès**, một trong những kết quả đẹp và hữu ích nhất của hình học phẳng.

## Tỉ số của hai đoạn thẳng

:::definition Tỉ số của hai đoạn thẳng
**Tỉ số của hai đoạn thẳng** $AB$ và $CD$ là tỉ số độ dài của chúng, khi hai độ dài được đo bằng cùng một đơn vị. Ta viết tỉ số đó là $\dfrac{AB}{CD}$.
:::

Tỉ số không có đơn vị. Nếu hai đoạn thẳng đo bằng hai đơn vị khác nhau thì ta phải đổi về cùng một đơn vị trước khi lập tỉ số.

Hai cặp đoạn thẳng $AB$, $CD$ và $A'B'$, $C'D'$ gọi là **tỉ lệ** nếu $\dfrac{AB}{CD}=\dfrac{A'B'}{C'D'}$. Đây chính là một tỉ lệ thức quen thuộc từ lớp 7.

## Định lí Thalès

### Khám phá: đường song song cắt hai cạnh của tam giác

Cho tam giác $ABC$. Lấy $D$ trên cạnh $AB$ và $E$ trên cạnh $AC$ sao cho $DE\parallel BC$. Giả sử $AD=2$ cm và $AB=5$ cm (vậy $DB=3$ cm). Khi đo trên hình vẽ chính xác, ta thấy $AE=\dfrac{2}{5}AC$. Nói cách khác, $\dfrac{AD}{AB}=\dfrac{AE}{AC}$: đường thẳng $DE$ chia hai cạnh $AB$ và $AC$ theo cùng một tỉ lệ.

:::diagram Đường thẳng $DE$ song song với cạnh $BC$
alt: Tam giác ABC có đỉnh A ở trên; điểm D trên cạnh AB, điểm E trên cạnh AC, đoạn DE song song với cạnh đáy BC
point A 0,6 above
point B -4,0 below-left
point C 5,0 below-right
point D -1.6,3.6 left
point E 2,3.6 right
polygon A B C
segment D E
:::

:::theorem Định lí Thalès trong tam giác
Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.

Với tam giác $ABC$, $D\in AB$, $E\in AC$ và $DE\parallel BC$, ta có
$$\frac{AD}{AB}=\frac{AE}{AC},\qquad \frac{AD}{DB}=\frac{AE}{EC},\qquad \frac{DB}{AB}=\frac{EC}{AC}.$$
:::

Ở bậc THCS ta công nhận định lí này. Ba đẳng thức đều nói cùng một điều: hai cạnh $AB$ và $AC$ bị cắt theo cùng một tỉ lệ. Chúng suy ra được từ nhau nhờ tính chất của tỉ lệ thức. Chẳng hạn, từ $\dfrac{AD}{AB}=\dfrac{AE}{AC}$ ta có $\dfrac{AB}{AD}=\dfrac{AC}{AE}$, trừ $1$ hai vế được $\dfrac{AB-AD}{AD}=\dfrac{AC-AE}{AE}$, tức là $\dfrac{DB}{AD}=\dfrac{EC}{AE}$, và đảo lại hai vế ta có $\dfrac{AD}{DB}=\dfrac{AE}{EC}$.

Mẹo nhớ: khi lập tỉ số, ta luôn so sánh các đoạn **tương ứng**, tức là các đoạn cùng nằm trên một cạnh theo cùng một cách (phần gần $A$ với cả cạnh, phần gần $A$ với phần xa $A$, hoặc phần xa $A$ với cả cạnh).

## Định lí Thalès đảo

Nếu biết các đoạn thẳng tỉ lệ thì ta có suy ra được hai đường thẳng song song không?

:::theorem Định lí Thalès đảo
Nếu một đường thẳng cắt hai cạnh của tam giác và định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ thì nó song song với cạnh còn lại.

Với tam giác $ABC$, $D\in AB$, $E\in AC$: nếu $\dfrac{AD}{AB}=\dfrac{AE}{AC}$ (hoặc $\dfrac{AD}{DB}=\dfrac{AE}{EC}$) thì $DE\parallel BC$.
:::

Vì sao? Giả sử $\dfrac{AD}{AB}=\dfrac{AE}{AC}$. Qua $D$ kẻ đường thẳng song song với $BC$, cắt $AC$ tại $E'$. Theo định lí Thalès, $\dfrac{AD}{AB}=\dfrac{AE'}{AC}$. Do đó $\dfrac{AE'}{AC}=\dfrac{AE}{AC}$, suy ra $AE'=AE$. Hai điểm $E$ và $E'$ cùng nằm trên tia $AC$ và cùng cách $A$ một khoảng $AE$ nên trùng nhau. Vậy $DE\parallel BC$.

## Ví dụ

Ta bắt đầu với tỉ số của hai đoạn thẳng.

:::example Tính tỉ số hai đoạn thẳng
Cho $AB=6$ cm và $CD=45$ mm. Tính tỉ số $\dfrac{AB}{CD}$.

**Lời giải.** Hai đoạn thẳng đo bằng hai đơn vị khác nhau nên ta đổi về milimét: $AB=6$ cm $=60$ mm. Do đó
$$\frac{AB}{CD}=\frac{60}{45}=\frac{4}{3}.$$

Vậy $\dfrac{AB}{CD}=\dfrac43$.
:::

Tiếp theo ta dùng định lí Thalès để tính một đoạn thẳng.

:::example Dùng tỉ số $\dfrac{AD}{DB}=\dfrac{AE}{EC}$
Cho tam giác $ABC$, $D\in AB$, $E\in AC$ và $DE\parallel BC$. Biết $AD=4$ cm, $DB=6$ cm và $AE=5$ cm. Tính $EC$ và $AC$.

**Lời giải.** Vì $DE\parallel BC$ nên theo định lí Thalès,
$$\frac{AD}{DB}=\frac{AE}{EC},\quad\text{tức là}\quad \frac{4}{6}=\frac{5}{EC}.$$
Suy ra $EC=\dfrac{5\cdot6}{4}=7{,}5$ (cm). Do đó $AC=AE+EC=5+7{,}5=12{,}5$ (cm).

Vậy $EC=7{,}5$ cm và $AC=12{,}5$ cm.
:::

Bây giờ ta dùng tỉ số với cả cạnh.

:::example Dùng tỉ số $\dfrac{AD}{AB}=\dfrac{AE}{AC}$
Cho tam giác $ABC$, $D\in AB$, $E\in AC$ và $DE\parallel BC$. Biết $AD=4$ cm, $AB=10$ cm và $AC=15$ cm. Tính $AE$ và $EC$.

**Lời giải.** Vì $DE\parallel BC$ nên theo định lí Thalès,
$$\frac{AD}{AB}=\frac{AE}{AC},\quad\text{tức là}\quad \frac{4}{10}=\frac{AE}{15}.$$
Suy ra $AE=\dfrac{4\cdot15}{10}=6$ (cm). Do đó $EC=AC-AE=15-6=9$ (cm).

Vậy $AE=6$ cm và $EC=9$ cm.
:::

Bây giờ ta chứng minh hai đường thẳng song song.

:::example Chứng minh song song
Cho tam giác $ABC$ có $AB=9$ cm và $AC=12$ cm. Trên $AB$ lấy $D$ sao cho $DB=6$ cm, trên $AC$ lấy $E$ sao cho $EC=8$ cm. Chứng minh rằng $DE\parallel BC$.

**Lời giải.** Ta có $AD=AB-DB=9-6=3$ (cm) và $AE=AC-EC=12-8=4$ (cm). Khi đó
$$\frac{AD}{DB}=\frac{3}{6}=\frac12,\qquad \frac{AE}{EC}=\frac{4}{8}=\frac12.$$
Vậy $\dfrac{AD}{DB}=\dfrac{AE}{EC}$, nên theo định lí Thalès đảo, $DE\parallel BC$.
:::

Còn khi các tỉ số không bằng nhau thì sao?

:::example Hai đường thẳng không song song
Cho tam giác $ABC$, $D\in AB$ và $E\in AC$ sao cho $AD=2$ cm, $DB=4$ cm, $AE=3$ cm và $EC=5$ cm. Hỏi $DE$ có song song với $BC$ không?

**Lời giải.** Ta có
$$\frac{AD}{DB}=\frac{2}{4}=\frac{5}{10},\qquad \frac{AE}{EC}=\frac35=\frac{6}{10}.$$
Vì $\dfrac{5}{10}\ne\dfrac{6}{10}$, tức là $\dfrac12\ne\dfrac35$, nên $\dfrac{AD}{DB}\ne\dfrac{AE}{EC}$. Nếu $DE\parallel BC$ thì theo định lí Thalès hai tỉ số này phải bằng nhau, điều đó không xảy ra.

Vậy $DE$ không song song với $BC$.
:::

Cuối cùng là bài toán về mảnh đất ở đầu bài.

:::example Làm lối đi song song với đường lớn (Vận dụng)
Giả sử một mảnh đất hình tam giác $ABC$ có $AB=30$ m và $AC=24$ m. Người ta làm lối đi thẳng $DE$ song song với $BC$, với $D\in AB$, $E\in AC$ và $AD=12$ m. Tính $AE$ và $EC$.

**Lời giải.**

*Hiểu đề.* Lối đi $DE$ song song với cạnh $BC$ và cắt hai cạnh $AB$, $AC$. Ta biết $AB$, $AC$, $AD$ và cần tìm $AE$, $EC$.

*Tìm cách giải.* Có $DE\parallel BC$ nên dùng định lí Thalès. Các đoạn đã biết là $AD$, $AB$, $AC$, nên chọn tỉ số $\dfrac{AD}{AB}=\dfrac{AE}{AC}$ để tìm $AE$.

*Giải.* Vì $DE\parallel BC$ nên $\dfrac{AD}{AB}=\dfrac{AE}{AC}$, tức là $\dfrac{12}{30}=\dfrac{AE}{24}$. Suy ra
$$AE=\frac{12\cdot24}{30}=9{,}6\ (\text{m}).$$
Do đó $EC=AC-AE=24-9{,}6=14{,}4$ (m).

Vậy $AE=9{,}6$ m và $EC=14{,}4$ m.

*Nhìn lại.* Kiểm tra bằng tỉ số còn lại: $DB=30-12=18$ m, $\dfrac{AD}{DB}=\dfrac{12}{18}=\dfrac23$ và $\dfrac{AE}{EC}=\dfrac{9{,}6}{14{,}4}=\dfrac23$. Hai tỉ số bằng nhau nên kết quả đúng.
:::

:::warning Những sai lầm thường gặp
- **Lập tỉ số lẫn lộn.** Sai: $\dfrac{AD}{DB}=\dfrac{AE}{AC}$. Lí do sai: vế trái so một phần với một phần, vế phải so một phần với cả cạnh. Đúng: $\dfrac{AD}{DB}=\dfrac{AE}{EC}$ hoặc $\dfrac{AD}{AB}=\dfrac{AE}{AC}$.
- **Dùng định lí Thalès khi chưa có song song.** Sai: lấy $D\in AB$, $E\in AC$ bất kì rồi viết $\dfrac{AD}{AB}=\dfrac{AE}{AC}$. Lí do sai: đẳng thức này chỉ đúng khi $DE\parallel BC$. Đúng: phải có $DE\parallel BC$ trước khi viết các tỉ số.
- **Lập tỉ số khi đơn vị khác nhau.** Sai: $\dfrac{6\text{ cm}}{45\text{ mm}}=\dfrac{6}{45}$. Lí do sai: hai độ dài chưa cùng đơn vị nên số $6$ và $45$ không so sánh được. Đúng: đổi $6$ cm $=60$ mm rồi lập $\dfrac{60}{45}=\dfrac43$.
- **So sánh các đoạn không tương ứng khi dùng Thalès đảo.** Sai: kết luận $DE\parallel BC$ khi $\dfrac{AD}{AB}=\dfrac{EC}{AC}$. Lí do sai: $EC$ là đoạn xa $A$, không tương ứng với $AD$ là đoạn gần $A$. Đúng: so sánh $\dfrac{AD}{AB}$ với $\dfrac{AE}{AC}$, hoặc $\dfrac{AD}{DB}$ với $\dfrac{AE}{EC}$.
:::

**Kết nối.** Định lí Thalès dùng tỉ lệ thức ở lớp 7 và các phép biến đổi phương trình đơn giản. Nó cũng là nền tảng cho bài sau: khi $D$ và $E$ là trung điểm của $AB$ và $AC$ thì $\dfrac{AD}{AB}=\dfrac{AE}{AC}=\dfrac12$, và ta được đường trung bình của tam giác.

## Thuật ngữ

:::terms
- tỉ số | ratio
- đoạn thẳng tỉ lệ | proportional segments
- tỉ lệ thức | proportion
- song song | parallel
- định lí Thalès | intercept theorem (Thales' theorem)
- định lí Thalès đảo | converse of the intercept theorem
- đơn vị đo | unit of measurement
- cạnh | side
- tương ứng | corresponding
:::

## Tóm tắt

- Tỉ số của hai đoạn thẳng là tỉ số độ dài của chúng khi cùng đơn vị đo; tỉ số không có đơn vị.
- Định lí Thalès: nếu $DE\parallel BC$ với $D\in AB$, $E\in AC$ thì $\dfrac{AD}{AB}=\dfrac{AE}{AC}$, $\dfrac{AD}{DB}=\dfrac{AE}{EC}$ và $\dfrac{DB}{AB}=\dfrac{EC}{AC}$.
- Định lí Thalès đảo: nếu $\dfrac{AD}{AB}=\dfrac{AE}{AC}$ (hoặc $\dfrac{AD}{DB}=\dfrac{AE}{EC}$) thì $DE\parallel BC$.
- Khi lập tỉ số phải lấy các đoạn thẳng tương ứng và cùng đơn vị đo.
- Để tìm độ dài, dùng định lí Thalès; để chứng minh song song, dùng định lí Thalès đảo.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho $AB=15$ cm và $CD=1{,}2$ dm. Tính tỉ số $\dfrac{AB}{CD}$.

::hint
**Kiến thức:** tỉ số của hai đoạn thẳng chỉ lập được khi hai độ dài cùng đơn vị.

**Gợi ý các bước:**
1. Đổi $CD$ về xăng-ti-mét.
2. Lập tỉ số và rút gọn.

::solution
Ta có $CD=1{,}2$ dm $=12$ cm. Do đó $\dfrac{AB}{CD}=\dfrac{15}{12}=\dfrac54$.

Vậy $\dfrac{AB}{CD}=\dfrac54$.

**Đáp số.** $\dfrac54$.
:::

:::exercise
Cho tam giác $ABC$, $D\in AB$, $E\in AC$ và $DE\parallel BC$. Biết $AD=6$ cm, $DB=9$ cm và $AE=4$ cm. Tính $EC$.

::hint
**Kiến thức:** định lí Thalès: $\dfrac{AD}{DB}=\dfrac{AE}{EC}$.

**Gợi ý các bước:**
1. Viết tỉ số bằng nhau.
2. Thay số và tính $EC$.

::solution
Vì $DE\parallel BC$ nên $\dfrac{AD}{DB}=\dfrac{AE}{EC}$, tức là $\dfrac{6}{9}=\dfrac{4}{EC}$. Suy ra $EC=\dfrac{4\cdot9}{6}=6$ (cm).

Vậy $EC=6$ cm.

**Đáp số.** $EC=6$ cm.
:::

:::exercise
Cho tam giác $ABC$, $D\in AB$, $E\in AC$ và $DE\parallel BC$. Biết $AB=12$ cm, $AD=5$ cm và $AC=18$ cm. Tính $AE$ và $EC$.

::hint
**Kiến thức:** định lí Thalès: $\dfrac{AD}{AB}=\dfrac{AE}{AC}$.

**Gợi ý các bước:**
1. Tính $AE$ từ tỉ số $\dfrac{AD}{AB}$.
2. Tính $EC=AC-AE$.

::solution
Vì $DE\parallel BC$ nên $\dfrac{AD}{AB}=\dfrac{AE}{AC}$, tức là $\dfrac{5}{12}=\dfrac{AE}{18}$. Suy ra $AE=\dfrac{5\cdot18}{12}=7{,}5$ (cm). Do đó $EC=18-7{,}5=10{,}5$ (cm).

Vậy $AE=7{,}5$ cm và $EC=10{,}5$ cm.

**Đáp số.** $AE=7{,}5$ cm; $EC=10{,}5$ cm.
:::

:::exercise
Cho tam giác $ABC$, $D\in AB$, $E\in AC$ và $DE\parallel BC$. Biết $AD=x$ cm, $DB=3$ cm, $AE=4$ cm và $EC=6$ cm. Tìm $x$.

::hint
**Kiến thức:** $\dfrac{AD}{DB}=\dfrac{AE}{EC}$.

**Gợi ý các bước:**
1. Thay số vào tỉ lệ thức.
2. Giải để tìm $x$.

::solution
Vì $DE\parallel BC$ nên $\dfrac{AD}{DB}=\dfrac{AE}{EC}$, tức là $\dfrac{x}{3}=\dfrac{4}{6}$. Suy ra $x=\dfrac{3\cdot4}{6}=2$.

Vậy $x=2$ (cm).

**Đáp số.** $x=2$.
:::

:::exercise
Cho tam giác $ABC$ có $AB=15$ cm, $AC=20$ cm. Trên $AB$ lấy $D$ với $AD=6$ cm, trên $AC$ lấy $E$ với $AE=8$ cm. Chứng minh rằng $DE\parallel BC$.

::hint
**Kiến thức:** định lí Thalès đảo: nếu $\dfrac{AD}{AB}=\dfrac{AE}{AC}$ thì $DE\parallel BC$.

**Gợi ý các bước:**
1. Tính $\dfrac{AD}{AB}$ và $\dfrac{AE}{AC}$.
2. So sánh hai tỉ số rồi kết luận.

::solution
Ta có $\dfrac{AD}{AB}=\dfrac{6}{15}=\dfrac25$ và $\dfrac{AE}{AC}=\dfrac{8}{20}=\dfrac25$. Hai tỉ số bằng nhau nên theo định lí Thalès đảo, $DE\parallel BC$.

**Đáp số.** $DE\parallel BC$.
:::

:::exercise
Cho tam giác $ABC$, $D\in AB$ và $E\in AC$ sao cho $AD=4$ cm, $DB=6$ cm, $AE=5$ cm và $EC=8$ cm. Hỏi $DE$ có song song với $BC$ không? Vì sao?

::hint
**Kiến thức:** nếu $DE\parallel BC$ thì $\dfrac{AD}{DB}=\dfrac{AE}{EC}$.

**Gợi ý các bước:**
1. Tính hai tỉ số $\dfrac{AD}{DB}$ và $\dfrac{AE}{EC}$.
2. So sánh rồi kết luận.

::solution
Ta có $\dfrac{AD}{DB}=\dfrac46=\dfrac23$ và $\dfrac{AE}{EC}=\dfrac58$. Vì $\dfrac23=\dfrac{16}{24}$ còn $\dfrac58=\dfrac{15}{24}$ nên hai tỉ số không bằng nhau. Nếu $DE\parallel BC$ thì theo định lí Thalès hai tỉ số phải bằng nhau.

Vậy $DE$ không song song với $BC$.

**Đáp số.** Không song song.
:::

:::exercise
Giả sử một khung mái nhà hình tam giác $ABC$ có $AB=6$ m và $AC=5$ m. Người ta đóng thanh ngang $DE$ song song với $BC$, với $D\in AB$, $E\in AC$ và $AD=2{,}4$ m. Tính $AE$ và $EC$.

::hint
**Kiến thức:** định lí Thalès: $\dfrac{AD}{AB}=\dfrac{AE}{AC}$.

**Gợi ý các bước:**
1. Tính $AE$.
2. Tính $EC=AC-AE$.

::solution
Vì $DE\parallel BC$ nên $\dfrac{AD}{AB}=\dfrac{AE}{AC}$, tức là $\dfrac{2{,}4}{6}=\dfrac{AE}{5}$. Suy ra $AE=\dfrac{2{,}4\cdot5}{6}=2$ (m). Do đó $EC=5-2=3$ (m).

Vậy $AE=2$ m và $EC=3$ m.

**Đáp số.** $AE=2$ m; $EC=3$ m.
:::

:::exercise
Giả sử một mảnh vườn hình tam giác $ABC$ có $AC=25$ m. Người ta căng dây $DE$ song song với $BC$ ($D\in AB$, $E\in AC$) sao cho $\dfrac{AD}{DB}=\dfrac23$. Tính $AE$ và $EC$.

::hint
**Kiến thức:** định lí Thalès: $\dfrac{AE}{EC}=\dfrac{AD}{DB}$; $AE+EC=AC$.

**Gợi ý các bước:**
1. Viết $AE=2k$, $EC=3k$ với $k>0$.
2. Dùng $AE+EC=25$ để tìm $k$.

::solution
Vì $DE\parallel BC$ nên $\dfrac{AE}{EC}=\dfrac{AD}{DB}=\dfrac23$. Đặt $AE=2k$ và $EC=3k$ (với $k>0$). Vì $AE+EC=AC=25$ nên $5k=25$, suy ra $k=5$. Do đó $AE=10$ m và $EC=15$ m.

Vậy $AE=10$ m và $EC=15$ m.

**Đáp số.** $AE=10$ m; $EC=15$ m.
:::

:::exercise
Nhớ lại bài về hình thoi. Cho hình thoi $ABCD$ có cạnh $9$ cm. Lấy $M$ trên $AB$ và $N$ trên $AD$ sao cho $AM=AN=3$ cm. Chứng minh rằng $MN\parallel BD$ và $MN\perp AC$.

::hint
**Kiến thức:** định lí Thalès đảo trong tam giác $ABD$; hai đường chéo của hình thoi vuông góc; đường thẳng vuông góc với một trong hai đường thẳng song song thì vuông góc với đường còn lại.

**Gợi ý các bước:**
1. Tính $\dfrac{AM}{AB}$ và $\dfrac{AN}{AD}$.
2. Kết luận $MN\parallel BD$, rồi dùng $AC\perp BD$.

::solution
Hình thoi $ABCD$ có $AB=AD=9$ cm. Trong tam giác $ABD$ ta có $\dfrac{AM}{AB}=\dfrac39=\dfrac13$ và $\dfrac{AN}{AD}=\dfrac39=\dfrac13$. Hai tỉ số bằng nhau nên theo định lí Thalès đảo, $MN\parallel BD$.

Hai đường chéo của hình thoi vuông góc nên $AC\perp BD$. Vì $MN\parallel BD$ nên $AC\perp MN$.

Vậy $MN\parallel BD$ và $MN\perp AC$.

**Đáp số.** $MN\parallel BD$; $MN\perp AC$.
:::

:::exercise Thử thách
Cho tam giác $ABC$, $D\in AB$ và $E\in AC$ sao cho $DE\parallel BC$. Qua $D$ kẻ đường thẳng song song với $AC$, cắt $BC$ tại $F$. Chứng minh rằng
$$\frac{AE}{AC}+\frac{BF}{BC}=1.$$

::hint
**Kiến thức:** định lí Thalès cho $DE\parallel BC$ trong tam giác $ABC$ và cho $DF\parallel AC$ trong tam giác $BAC$.

**Gợi ý các bước:**
1. Tìm một đẳng thức tỉ số cho $\dfrac{AE}{AC}$ theo $AD$ và $AB$.
2. Tìm một đẳng thức tỉ số cho $\dfrac{BF}{BC}$ theo $BD$ và $BA$.
3. Cộng hai tỉ số, nhớ rằng $AD+DB=AB$.

::solution
Vì $DE\parallel BC$ nên theo định lí Thalès trong tam giác $ABC$: $\dfrac{AE}{AC}=\dfrac{AD}{AB}$.

Trong tam giác $BAC$, $D\in BA$, $F\in BC$ và $DF\parallel AC$ nên theo định lí Thalès: $\dfrac{BF}{BC}=\dfrac{BD}{BA}$.

Cộng hai đẳng thức, ta được
$$\frac{AE}{AC}+\frac{BF}{BC}=\frac{AD}{AB}+\frac{BD}{AB}=\frac{AD+BD}{AB}=\frac{AB}{AB}=1.$$

Vậy $\dfrac{AE}{AC}+\dfrac{BF}{BC}=1$.

**Đáp số.** Đẳng thức được chứng minh.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $AB=3$ dm và $CD=15$ cm. Tỉ số $\dfrac{AB}{CD}$ bằng
A. $\dfrac12$.
B. $5$.
C. $2$.
D. $\dfrac15$.
::key C
Đổi $AB=3$ dm $=30$ cm nên $\dfrac{AB}{CD}=\dfrac{30}{15}=2$. A là tỉ số nghịch đảo, B và D là kết quả khi tính sai đơn vị.

::mc
Tam giác $ABC$ có $D\in AB$, $E\in AC$, $DE\parallel BC$, $AD=3$ cm, $DB=6$ cm, $AE=2$ cm. Độ dài $EC$ bằng
A. $1$ cm.
B. $3$ cm.
C. $6$ cm.
D. $4$ cm.
::key D
Theo định lí Thalès, $\dfrac{AD}{DB}=\dfrac{AE}{EC}$ nên $EC=\dfrac{2\cdot6}{3}=4$ cm. A là $AE:2$, B là $AD$ và C là $DB$.

::mc
Tam giác $ABC$ có $D\in AB$, $E\in AC$ và $DE\parallel BC$. Đẳng thức nào sau đây đúng?
A. $\dfrac{AD}{AB}=\dfrac{AE}{AC}$.
B. $\dfrac{AD}{DB}=\dfrac{AE}{AC}$.
C. $\dfrac{AD}{AB}=\dfrac{EC}{AC}$.
D. $\dfrac{AB}{DB}=\dfrac{AE}{EC}$.
::key A
Định lí Thalès cho $\dfrac{AD}{AB}=\dfrac{AE}{AC}$. Ở B, C, D các đoạn thẳng ở hai vế không tương ứng.

::mc
Tam giác $ABC$ có $D\in AB$, $E\in AC$. Trường hợp nào sau đây chắc chắn có $DE\parallel BC$?
A. $AD=2$, $AB=6$, $AE=2$, $AC=9$.
B. $AD=2$, $AB=6$, $AE=3$, $AC=9$.
C. $AD=3$, $DB=6$, $AE=4$, $EC=6$.
D. $AD=2$, $DB=4$, $AE=2$, $EC=6$.
::key B
Ở C: $\dfrac{AD}{AB}=\dfrac26=\dfrac13$ và $\dfrac{AE}{AC}=\dfrac39=\dfrac13$ nên song song theo định lí Thalès đảo. Ở A: $\dfrac13\ne\dfrac29$; ở B: $\dfrac12\ne\dfrac23$; ở D: $\dfrac12\ne\dfrac13$.

::tf
Tam giác $ABC$ có $AB=12$ cm, $AC=15$ cm; $D\in AB$ với $AD=4$ cm và $E\in AC$ với $AE=6$ cm.
a) $\dfrac{AD}{AB}=\dfrac13$.
b) $\dfrac{AE}{AC}=\dfrac25$.
c) $DE\parallel BC$.
d) $\dfrac{AD}{DB}=\dfrac{AE}{EC}$.
::key Đ Đ S S
a) Đúng: $\dfrac4{12}=\dfrac13$. b) Đúng: $\dfrac6{15}=\dfrac25$. c) Sai: $\dfrac13\ne\dfrac25$ nên không song song. d) Sai: $\dfrac{AD}{DB}=\dfrac48=\dfrac12$ còn $\dfrac{AE}{EC}=\dfrac69=\dfrac23$.

::sa
Tam giác $ABC$ có $DE\parallel BC$ ($D\in AB$, $E\in AC$), $AD=4$ cm, $AB=10$ cm và $AC=15$ cm. Tính $AE$ (cm).
::key 6
$\dfrac{AE}{15}=\dfrac4{10}$ nên $AE=6$ cm.

::sa
Tam giác $ABC$ có $DE\parallel BC$ ($D\in AB$, $E\in AC$), $AD=2$ cm, $DB=3$ cm và $AC=10$ cm. Tính $AE$ (cm).
::key 4
$\dfrac{AD}{AB}=\dfrac25$ nên $AE=\dfrac25\cdot10=4$ cm.
:::
