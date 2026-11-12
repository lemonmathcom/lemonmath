---
title: Hai bài toán về phân số
description: Tìm giá trị phân số của một số cho trước và tìm một số khi biết giá trị một phân số của nó; áp dụng vào bài toán giảm giá, tiết kiệm, đọc sách.
minutes: 25
---

:::goals
- Tìm được giá trị phân số $\dfrac{m}{n}$ của một số $b$ cho trước.
- Tìm được một số khi biết giá trị $\dfrac{m}{n}$ của số đó.
- Nhận ra trong một bài toán thực tế nên dùng phép nhân hay phép chia.
- Giải được bài toán nhiều bước có phân số, như giảm giá, tiết kiệm, dùng nước.
:::

Một cửa hàng treo biển: "Giảm $\dfrac15$ giá tất cả các mặt hàng". Hai khách hàng đặt hai câu hỏi.

Chị Mai hỏi: "Chiếc áo này giá $300$ nghìn đồng, tôi được giảm bao nhiêu tiền?"

Anh Tuấn hỏi: "Tôi vừa trả $240$ nghìn đồng cho đôi giày sau khi đã giảm giá. Lúc đầu nó giá bao nhiêu?"

Hai câu hỏi nghe rất giống nhau, nhưng là hai bài toán ngược chiều. Câu thứ nhất biết cái "toàn bộ", hỏi một phần của nó. Câu thứ hai biết một phần, hỏi cái "toàn bộ". Nhận ra mình đang ở bài toán nào là việc quan trọng nhất của bài học này.

## Bài toán 1: Tìm giá trị phân số của một số cho trước

Muốn tìm $\dfrac35$ của $40$, ta chia $40$ thành $5$ phần bằng nhau, mỗi phần là $40:5=8$. Lấy $3$ phần như thế, ta được $3\cdot8=24$.

:::diagram $\dfrac35$ của $40$
alt: Một băng giấy dài biểu thị số 40, chia thành 5 phần bằng nhau, mỗi phần là 8; ba phần đầu được tô màu, biểu thị 3/5 của 40 bằng 24
point A 0,0 ""
point B 10,0 ""
point C 10,1.5 ""
point D 0,1.5 ""
point E 6,0 ""
point F 6,1.5 ""
polygon A E F D
segment A B
segment B C
segment C D
segment D A
point G1 2,0 ""
point H1 2,1.5 ""
point G2 4,0 ""
point H2 4,1.5 ""
point G3 8,0 ""
point H3 8,1.5 ""
segment G1 H1
segment G2 H2
segment E F
segment G3 H3
label 1,0.75 "8"
label 3,0.75 "8"
label 5,0.75 "8"
label 7,0.75 "8"
label 9,0.75 "8"
label 5,2.2 "40"
label 3,-0.6 "24"
:::

Hai bước "chia cho $5$ rồi nhân với $3$" gộp lại chính là nhân với $\dfrac35$: $40\cdot\dfrac35=24$.

:::theorem Tìm giá trị phân số của một số
Muốn tìm $\dfrac{m}{n}$ của số $b$ cho trước, ta tính
$$b\cdot\dfrac{m}{n}\qquad(m,\ n\in\mathbb{N},\ n\ne0).$$
:::

Với chị Mai: số tiền được giảm là $\dfrac15$ của $300$ nghìn đồng, tức là $300\cdot\dfrac15=60$ nghìn đồng.

## Bài toán 2: Tìm một số khi biết giá trị phân số của nó

Bây giờ làm ngược lại. Biết $\dfrac35$ của một số là $24$, tìm số đó.

Nhìn lại băng giấy: $3$ phần là $24$, vậy $1$ phần là $24:3=8$, và cả $5$ phần là $5\cdot8=40$. Hai bước "chia cho $3$ rồi nhân với $5$" gộp lại chính là nhân với $\dfrac53$, tức là chia cho $\dfrac35$: $24:\dfrac35=24\cdot\dfrac53=40$.

:::theorem Tìm một số khi biết giá trị phân số của nó
Muốn tìm một số khi biết $\dfrac{m}{n}$ của nó bằng $a$, ta tính
$$a:\dfrac{m}{n}\qquad(m,\ n\in\mathbb{N}^*).$$
:::

Với anh Tuấn: giá ban đầu là cái toàn bộ, coi là $1$. Sau khi giảm $\dfrac15$, giá còn lại là $1-\dfrac15=\dfrac45$ giá ban đầu, và $\dfrac45$ đó bằng $240$ nghìn đồng. Vậy giá ban đầu là $240:\dfrac45=300$ nghìn đồng.

:::tip Nhân hay chia?
Hãy hỏi: **cái toàn bộ đã biết chưa?**
- Đã biết cái toàn bộ, hỏi một phần của nó: **nhân** với phân số.
- Biết một phần, hỏi cái toàn bộ: **chia** cho phân số.

Kiểm tra nhanh: phần bao giờ cũng nhỏ hơn toàn bộ (khi phân số nhỏ hơn $1$). Nếu đáp số của bạn ngược lại, có lẽ bạn đã nhân nhầm thành chia hoặc ngược lại.
:::

## Ví dụ

Ta bắt đầu với bài toán thứ nhất, ở dạng thuần tính toán.

:::example Tìm giá trị phân số của một số
Tính:

a) $\dfrac{3}{4}$ của $60$;

b) $\dfrac{2}{3}$ của $\dfrac{3}{8}$.

**Lời giải.**

a) $\dfrac{3}{4}$ của $60$ là
$$60\cdot\dfrac{3}{4}=\dfrac{60\cdot3}{4}=15\cdot3=45.$$

b) $\dfrac{2}{3}$ của $\dfrac{3}{8}$ là
$$\dfrac{3}{8}\cdot\dfrac{2}{3}=\dfrac{3\cdot2}{8\cdot3}=\dfrac{1}{4}.$$

Vậy a) $45$; b) $\dfrac{1}{4}$.
:::

Áp dụng vào một lớp học.

:::example Số học sinh nam, nữ
Lớp 6A có $40$ học sinh, trong đó số học sinh nam chiếm $\dfrac38$ số học sinh cả lớp. Tính số học sinh nam và số học sinh nữ của lớp.

**Lời giải.**

Số học sinh cả lớp đã biết, cần tìm $\dfrac38$ của nó. Số học sinh nam của lớp là
$$40\cdot\dfrac{3}{8}=15\ (\text{học sinh}).$$

Số học sinh nữ của lớp là
$$40-15=25\ (\text{học sinh}).$$

Vậy lớp 6A có $15$ học sinh nam và $25$ học sinh nữ.
:::

Sang bài toán thứ hai: biết một phần, tìm toàn bộ.

:::example Tìm một số khi biết giá trị phân số của nó
Tìm một số, biết:

a) $\dfrac{2}{3}$ của số đó bằng $18$;

b) $\dfrac{5}{4}$ của số đó bằng $35$.

**Lời giải.**

a) Số cần tìm là
$$18:\dfrac{2}{3}=18\cdot\dfrac{3}{2}=27.$$

b) Số cần tìm là
$$35:\dfrac{5}{4}=35\cdot\dfrac{4}{5}=28.$$

Thử lại: $27\cdot\dfrac23=18$ và $28\cdot\dfrac54=35$, đều đúng.

Vậy a) $27$; b) $28$.

**Nhận xét.** Ở câu b), phân số $\dfrac54$ lớn hơn $1$ nên số cần tìm ($28$) nhỏ hơn $35$. Quy tắc vẫn dùng được, chỉ có cảm giác "phần nhỏ hơn toàn bộ" là đảo lại.
:::

Áp dụng vào việc đọc sách.

:::example Cuốn sách dày bao nhiêu trang?
Bạn An đọc được $\dfrac25$ cuốn sách thì được $48$ trang. Hỏi cuốn sách có bao nhiêu trang và An còn phải đọc bao nhiêu trang nữa?

**Lời giải.**

Ta biết $\dfrac25$ cuốn sách là $48$ trang, cần tìm cả cuốn. Số trang của cuốn sách là
$$48:\dfrac{2}{5}=48\cdot\dfrac{5}{2}=120\ (\text{trang}).$$

Số trang An còn phải đọc là
$$120-48=72\ (\text{trang}).$$

Vậy cuốn sách có $120$ trang và An còn phải đọc $72$ trang.
:::

Cuối cùng, ta trở lại với câu hỏi của anh Tuấn, lần này trình bày đầy đủ.

:::example Giá ban đầu của đôi giày
Một cửa hàng giảm $\dfrac15$ giá niêm yết của tất cả các mặt hàng. Anh Tuấn mua một đôi giày và trả $240$ nghìn đồng. Hỏi giá niêm yết của đôi giày là bao nhiêu?

**Lời giải.**

*Hiểu đề.* Giá niêm yết chưa biết. Số tiền $240$ nghìn đồng là giá sau khi đã giảm, tức là một phần của giá niêm yết.

*Tìm cách giải.* Coi giá niêm yết là $1$. Tìm xem $240$ nghìn đồng ứng với phân số nào của giá niêm yết, rồi dùng bài toán 2.

*Giải.* Sau khi giảm $\dfrac15$, giá bán bằng
$$1-\dfrac{1}{5}=\dfrac{4}{5}\ (\text{giá niêm yết}).$$

Vậy $\dfrac45$ giá niêm yết bằng $240$ nghìn đồng. Giá niêm yết của đôi giày là
$$240:\dfrac{4}{5}=240\cdot\dfrac{5}{4}=300\ (\text{nghìn đồng}).$$

Vậy giá niêm yết của đôi giày là $300$ nghìn đồng.

*Nhìn lại.* Một cách làm sai rất hay gặp là lấy $240$ cộng thêm $\dfrac15$ của $240$, ra $288$. Thử lại sẽ thấy sai: giảm $\dfrac15$ của $288$ thì còn $288\cdot\dfrac45=230{,}4$, không phải $240$. Lỗi nằm ở chỗ $\dfrac15$ là của giá niêm yết, không phải của giá đã giảm.
:::

:::warning Những chỗ hay nhầm
- **Nhân khi phải chia.** Sai: "$\dfrac23$ của một số là $18$, số đó là $18\cdot\dfrac23=12$." Vì sao sai: $12$ nhỏ hơn $18$, trong khi cái toàn bộ phải lớn hơn phần của nó. Đúng: $18:\dfrac23=27$.
- **Chia khi phải nhân.** Sai: "$\dfrac35$ của $40$ là $40:\dfrac35=\dfrac{200}{3}$." Vì sao sai: cái toàn bộ là $40$ đã biết, chỉ cần lấy một phần của nó. Đúng: $40\cdot\dfrac35=24$.
- **Lấy phân số của sai đại lượng.** Sai: giá sau khi giảm $\dfrac15$ là $240$, nên giá ban đầu là $240+240\cdot\dfrac15=288$. Vì sao sai: $\dfrac15$ là của giá ban đầu, không phải của $240$. Đúng: $240:\dfrac45=300$.
- **Quên bước "phần còn lại".** Sai: "Giảm $\dfrac15$, trả $240$ nghìn, nên giá ban đầu là $240:\dfrac15=1200$." Vì sao sai: $240$ nghìn ứng với phần còn phải trả, tức $\dfrac45$, không phải $\dfrac15$. Đúng: $240:\dfrac45=300$.
:::

## Thuật ngữ

:::terms
- giá trị phân số của một số | fraction of an amount
- tìm một số khi biết giá trị phân số của nó | finding the whole from a fraction of it
- phần | part
- toàn bộ | whole
- giá niêm yết | marked price
- giảm giá | discount
- phần còn lại | remaining part
:::

## Tóm tắt

- $\dfrac{m}{n}$ của số $b$ là $b\cdot\dfrac{m}{n}$ (biết toàn bộ, tìm phần: nhân).
- Nếu $\dfrac{m}{n}$ của một số bằng $a$ thì số đó là $a:\dfrac{m}{n}$ (biết phần, tìm toàn bộ: chia).
- Trong bài toán nhiều bước, hãy tìm xem số đã cho ứng với phân số nào của cái toàn bộ, thường là "phần còn lại" $1-\dfrac{m}{n}$.
- Thử lại bằng cách lấy phân số của đáp số xem có ra số đã cho không.

Chị Mai được giảm $60$ nghìn đồng, còn đôi giày của anh Tuấn lúc đầu giá $300$ nghìn đồng. Hai câu hỏi cùng dùng phân số $\dfrac15$, nhưng một câu nhân, một câu chia. Trước mỗi bài toán, bạn hãy dừng lại một giây và hỏi: "Cái toàn bộ đã biết chưa?" Nếu cần ôn lại phép nhân, phép chia phân số, bạn xem bài [Phép nhân và phép chia phân số](lesson:g6-multiply-divide-fractions).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Tính:

a) $\dfrac{2}{3}$ của $27$;

b) $\dfrac{5}{8}$ của $64$;

c) $\dfrac{3}{4}$ của $\dfrac{2}{9}$.

::hint
**Kiến thức:** $\dfrac{m}{n}$ của $b$ là $b\cdot\dfrac{m}{n}$.

**Gợi ý các bước:**
1. Viết phép nhân.
2. Rút gọn rồi tính.

::solution
a) $\dfrac{2}{3}$ của $27$ là $27\cdot\dfrac{2}{3}=9\cdot2=18$.

b) $\dfrac{5}{8}$ của $64$ là $64\cdot\dfrac{5}{8}=8\cdot5=40$.

c) $\dfrac{3}{4}$ của $\dfrac{2}{9}$ là
$$\dfrac{2}{9}\cdot\dfrac{3}{4}=\dfrac{2\cdot3}{9\cdot4}=\dfrac{1\cdot1}{3\cdot2}=\dfrac{1}{6}.$$

Vậy kết quả lần lượt là $18$; $40$; $\dfrac16$.

**Đáp số.** a) $18$; b) $40$; c) $\dfrac16$.
:::

:::exercise
Tìm một số, biết:

a) $\dfrac{3}{5}$ của số đó bằng $24$;

b) $\dfrac{4}{7}$ của số đó bằng $36$;

c) $\dfrac{5}{6}$ của số đó bằng $\dfrac{10}{3}$.

::hint
**Kiến thức:** nếu $\dfrac{m}{n}$ của một số bằng $a$ thì số đó là $a:\dfrac{m}{n}$.

**Gợi ý các bước:**
1. Viết phép chia.
2. Đổi thành phép nhân với số nghịch đảo rồi tính.

::solution
a) Số cần tìm là $24:\dfrac{3}{5}=24\cdot\dfrac{5}{3}=8\cdot5=40$.

b) Số cần tìm là $36:\dfrac{4}{7}=36\cdot\dfrac{7}{4}=9\cdot7=63$.

c) Số cần tìm là
$$\dfrac{10}{3}:\dfrac{5}{6}=\dfrac{10}{3}\cdot\dfrac{6}{5}=\dfrac{2\cdot2}{1\cdot1}=4.$$

Vậy các số cần tìm lần lượt là $40$; $63$; $4$.

**Đáp số.** a) $40$; b) $63$; c) $4$.
:::

:::exercise
Một mảnh vườn có diện tích $360\ \text{m}^2$. Người ta dùng $\dfrac{5}{12}$ diện tích để trồng rau, $\dfrac{1}{3}$ diện tích để trồng hoa, phần còn lại làm lối đi. Tính diện tích mỗi phần.

::hint
**Kiến thức:** diện tích cả vườn đã biết, tìm phân số của nó bằng phép nhân.

**Gợi ý các bước:**
1. Tính diện tích trồng rau và trồng hoa.
2. Lấy diện tích cả vườn trừ đi hai phần trên.

::solution
Diện tích trồng rau là
$$360\cdot\dfrac{5}{12}=30\cdot5=150\ (\text{m}^2).$$

Diện tích trồng hoa là
$$360\cdot\dfrac{1}{3}=120\ (\text{m}^2).$$

Diện tích làm lối đi là
$$360-150-120=90\ (\text{m}^2).$$

Vậy diện tích trồng rau, trồng hoa và làm lối đi lần lượt là $150\ \text{m}^2$; $120\ \text{m}^2$; $90\ \text{m}^2$.

**Đáp số.** Rau $150\ \text{m}^2$; hoa $120\ \text{m}^2$; lối đi $90\ \text{m}^2$.
:::

:::exercise
Một lớp có $36$ học sinh. Cuối học kì, số học sinh xếp loại Tốt chiếm $\dfrac14$ số học sinh cả lớp, số học sinh xếp loại Khá chiếm $\dfrac49$ số học sinh cả lớp, còn lại là xếp loại Đạt. Tính số học sinh mỗi loại.

::hint
**Kiến thức:** $\dfrac{m}{n}$ của $36$ là $36\cdot\dfrac{m}{n}$.

**Gợi ý các bước:**
1. Tính số học sinh Tốt, Khá.
2. Lấy $36$ trừ đi để được số học sinh Đạt.

::solution
Số học sinh xếp loại Tốt là
$$36\cdot\dfrac{1}{4}=9\ (\text{học sinh}).$$

Số học sinh xếp loại Khá là
$$36\cdot\dfrac{4}{9}=16\ (\text{học sinh}).$$

Số học sinh xếp loại Đạt là
$$36-9-16=11\ (\text{học sinh}).$$

Vậy lớp có $9$ học sinh Tốt, $16$ học sinh Khá và $11$ học sinh Đạt.

**Đáp số.** Tốt $9$; Khá $16$; Đạt $11$.
:::

:::exercise
Một ô tô phải đi quãng đường $120$ km. Ô tô đã đi được $\dfrac38$ quãng đường. Hỏi ô tô còn phải đi bao nhiêu ki-lô-mét nữa?

::hint
**Kiến thức:** quãng đường đã đi là $\dfrac38$ của $120$ km.

**Gợi ý các bước:**
1. Tính quãng đường đã đi.
2. Lấy $120$ trừ đi.

::solution
Quãng đường ô tô đã đi là
$$120\cdot\dfrac{3}{8}=15\cdot3=45\ (\text{km}).$$

Quãng đường ô tô còn phải đi là
$$120-45=75\ (\text{km}).$$

Vậy ô tô còn phải đi $75$ km.

**Đáp số.** $75$ km.
:::

:::exercise
Bạn Hùng để dành tiền mua một chiếc xe đạp. Đến nay Hùng đã có $1200$ nghìn đồng, bằng $\dfrac35$ giá chiếc xe. Hỏi chiếc xe đạp giá bao nhiêu và Hùng còn thiếu bao nhiêu tiền?

::hint
**Kiến thức:** biết $\dfrac35$ giá xe, tìm cả giá xe bằng phép chia.

**Gợi ý các bước:**
1. Tính giá xe: $1200:\dfrac35$.
2. Lấy giá xe trừ số tiền đã có.

::solution
Giá chiếc xe đạp là
$$1200:\dfrac{3}{5}=1200\cdot\dfrac{5}{3}=400\cdot5=2000\ (\text{nghìn đồng}).$$

Số tiền Hùng còn thiếu là
$$2000-1200=800\ (\text{nghìn đồng}).$$

Vậy chiếc xe đạp giá $2000$ nghìn đồng (tức $2$ triệu đồng) và Hùng còn thiếu $800$ nghìn đồng.

**Đáp số.** Giá xe $2000$ nghìn đồng; còn thiếu $800$ nghìn đồng.
:::

:::exercise
Một cửa hàng giảm $\dfrac14$ giá niêm yết. Bạn Lan mua một chiếc ba lô và trả $270$ nghìn đồng. Tính giá niêm yết của chiếc ba lô.

::hint
**Kiến thức:** sau khi giảm $\dfrac14$, giá bán bằng $\dfrac34$ giá niêm yết.

**Gợi ý các bước:**
1. Tìm phân số ứng với $270$ nghìn đồng.
2. Dùng bài toán tìm một số khi biết giá trị phân số của nó.

::solution
Sau khi giảm $\dfrac14$, giá bán bằng
$$1-\dfrac{1}{4}=\dfrac{3}{4}\ (\text{giá niêm yết}).$$

Vậy $\dfrac34$ giá niêm yết bằng $270$ nghìn đồng. Giá niêm yết của chiếc ba lô là
$$270:\dfrac{3}{4}=270\cdot\dfrac{4}{3}=360\ (\text{nghìn đồng}).$$

Vậy giá niêm yết của chiếc ba lô là $360$ nghìn đồng.

**Đáp số.** $360$ nghìn đồng.
:::

:::exercise
So sánh $\dfrac{3}{4}$ của $80$ và $\dfrac{4}{5}$ của $75$.

::hint
**Kiến thức:** tính từng giá trị phân số rồi so sánh hai số.

**Gợi ý các bước:**
1. Tính $80\cdot\dfrac34$.
2. Tính $75\cdot\dfrac45$ rồi so sánh.

::solution
Ta có $\dfrac{3}{4}$ của $80$ là $80\cdot\dfrac{3}{4}=60$.

Ta có $\dfrac{4}{5}$ của $75$ là $75\cdot\dfrac{4}{5}=60$.

Vậy hai giá trị bằng nhau, cùng bằng $60$.

**Đáp số.** Bằng nhau (cùng bằng $60$).
:::

:::exercise Thử thách
Một gia đình dùng nước trong bể. Ngày thứ nhất dùng $\dfrac13$ lượng nước trong bể. Ngày thứ hai dùng $\dfrac25$ lượng nước còn lại. Sau hai ngày, trong bể còn $120$ lít nước. Hỏi lúc đầu bể chứa bao nhiêu lít nước?

::hint
**Kiến thức:** "$\dfrac25$ lượng nước còn lại" là phân số của phần còn lại sau ngày thứ nhất, không phải của cả bể.

**Gợi ý các bước:**
1. Tính phần nước còn lại sau ngày thứ nhất (theo cả bể).
2. Tính phần nước dùng ngày thứ hai và phần còn lại sau hai ngày (theo cả bể).
3. Dùng bài toán tìm một số khi biết giá trị phân số của nó.

::solution
Coi lượng nước lúc đầu là $1$.

Sau ngày thứ nhất, lượng nước còn lại là
$$1-\dfrac{1}{3}=\dfrac{2}{3}\ (\text{bể}).$$

Ngày thứ hai dùng $\dfrac25$ của $\dfrac23$ bể, tức là
$$\dfrac{2}{3}\cdot\dfrac{2}{5}=\dfrac{4}{15}\ (\text{bể}).$$

Sau hai ngày, lượng nước còn lại là
$$\dfrac{2}{3}-\dfrac{4}{15}=\dfrac{10}{15}-\dfrac{4}{15}=\dfrac{6}{15}=\dfrac{2}{5}\ (\text{bể}).$$

Như vậy $\dfrac25$ lượng nước lúc đầu bằng $120$ lít. Lượng nước lúc đầu trong bể là
$$120:\dfrac{2}{5}=120\cdot\dfrac{5}{2}=300\ (\text{lít}).$$

Thử lại: ngày thứ nhất dùng $100$ lít, còn $200$ lít; ngày thứ hai dùng $200\cdot\dfrac25=80$ lít, còn $120$ lít. Đúng.

Vậy lúc đầu bể chứa $300$ lít nước.

**Đáp số.** $300$ lít.
:::

## Kiểm tra mini

:::quiz
::mc
$\dfrac{3}{5}$ của $40$ là
A. $24$.
B. $\dfrac{200}{3}$.
C. $120$.
D. $8$.
::key A
$40\cdot\dfrac35=24$. B chia thay vì nhân; C chỉ nhân với $3$; D chỉ chia cho $5$.

::mc
Biết $\dfrac{2}{3}$ của một số bằng $12$. Số đó là
A. $8$.
B. $18$.
C. $36$.
D. $24$.
::key B
$12:\dfrac23=12\cdot\dfrac32=18$. A nhân thay vì chia; C chỉ nhân với $3$; D chỉ nhân với $2$.

::mc
Một lớp có $32$ học sinh, trong đó số học sinh nữ chiếm $\dfrac38$. Số học sinh nam của lớp là
A. $12$.
B. $8$.
C. $20$.
D. $24$.
::key C
Số nữ là $32\cdot\dfrac38=12$, số nam là $32-12=20$. A là số nữ; B chỉ là $\dfrac14$ của $32$; D lấy $\dfrac34$ của $32$.

::mc
Sau khi giảm $\dfrac15$ giá niêm yết, một món hàng có giá $400$ nghìn đồng. Giá niêm yết của món hàng là
A. $480$ nghìn đồng.
B. $320$ nghìn đồng.
C. $2000$ nghìn đồng.
D. $500$ nghìn đồng.
::key D
$400$ là $\dfrac45$ giá niêm yết, nên giá niêm yết là $400:\dfrac45=500$. A lấy $400+80$; B nhân với $\dfrac45$; C chia cho $\dfrac15$.

::tf
Một cuốn sách có $150$ trang. Ngày thứ nhất, An đọc $\dfrac25$ cuốn sách. Ngày thứ hai, An đọc $\dfrac13$ số trang còn lại. Xét tính đúng sai của các mệnh đề sau:
a) Ngày thứ nhất An đọc $60$ trang.
b) Ngày thứ hai An đọc $50$ trang.
c) Sau hai ngày, An còn $40$ trang chưa đọc.
d) Số trang An đọc ngày thứ hai bằng $\dfrac13$ số trang của cả cuốn sách.
::key Đ S S S
a) Đúng: $150\cdot\dfrac25=60$. b) Sai: còn lại $90$ trang, ngày thứ hai đọc $90\cdot\dfrac13=30$ trang. c) Sai: còn $150-60-30=60$ trang. d) Sai: $30$ trang chỉ bằng $\dfrac15$ cuốn sách.

::sa
Tính $\dfrac{5}{6}$ của $48$.
::key 40
$48\cdot\dfrac56=8\cdot5=40$.

::sa
Biết $\dfrac{3}{4}$ một quãng đường dài $60$ km. Cả quãng đường dài bao nhiêu ki-lô-mét?
::key 80
$60:\dfrac34=60\cdot\dfrac43=80$ (km).
:::
