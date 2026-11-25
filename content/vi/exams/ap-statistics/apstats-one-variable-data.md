---
title: Mô tả dữ liệu một biến
description: AP Statistics Unit 1: biểu đồ, hình dạng, trung tâm và độ phân tán, tứ phân vị và giá trị ngoại lai, điểm z và bách phân vị, so sánh hai phân phối.
minutes: 50
---

:::goals
- Phân biệt biến định tính và biến định lượng, chọn biểu đồ phù hợp.
- Mô tả một phân phối theo hình dạng, trung tâm, độ phân tán và đặc điểm bất thường, gắn với tình huống.
- Tính và diễn giải trung bình, trung vị, độ lệch chuẩn, tứ phân vị và khoảng tứ phân vị, nhận ra giá trị ngoại lai bằng quy tắc $1{,}5\times\text{IQR}$.
- Dùng điểm z và bách phân vị để mô tả vị trí của một giá trị.
- So sánh hai phân phối bằng ngôn ngữ so sánh.
:::

Mọi cuộc khảo sát thống kê đều bắt đầu bằng việc nhìn vào dữ liệu. Thử hình dung điểm kiểm tra của hai lớp đặt cạnh nhau: ta nói được gì về chúng? Đó là câu hỏi của bài này, và cũng là trọng tâm của câu tự luận số 2 trong đề AP, rồi còn xuất hiện trong hầu hết các câu khác. Phần tính toán khá ngắn. Điểm đến từ việc mô tả những gì bạn thấy **gắn với tình huống của dữ liệu** và **so sánh** bằng những từ như "lớn hơn", "gần bằng".

## Biến và biểu đồ

Trước hết, ta xem dữ liệu thuộc loại nào, vì loại dữ liệu quyết định cách vẽ. **Biến định tính** (categorical) xếp mỗi cá thể vào một nhóm (môn thể thao yêu thích, nhóm máu); **biến định lượng** (quantitative) nhận giá trị số mà phép tính có ý nghĩa (chiều cao, thời gian). Dữ liệu định tính được biểu diễn bằng biểu đồ cột và tóm tắt bằng tần số hoặc tần số tương đối. Dữ liệu định lượng biểu diễn bằng biểu đồ chấm, biểu đồ thân lá, biểu đồ tần số (histogram) và biểu đồ hộp.

Nhìn một biểu đồ, bạn nên nói gì? Một mô tả đầy đủ cần bốn điều, và điều nào cũng phải gắn với tình huống của dữ liệu:

| Đặc điểm | Cần nói gì |
|---|---|
| Hình dạng | gần đối xứng, lệch phải hay lệch trái; số đỉnh |
| Trung tâm | trung bình hoặc trung vị, kèm đơn vị |
| Độ phân tán | độ lệch chuẩn, khoảng biến thiên hoặc IQR, kèm đơn vị |
| Đặc điểm bất thường | giá trị ngoại lai, khoảng trống, cụm |

## Số đo trung tâm và độ phân tán

Với dữ liệu $x_1,\dots,x_n$, ta tìm trung tâm bằng một trong hai cách: **trung bình** là $\bar x=\dfrac{\sum x_i}{n}$, còn **trung vị** là giá trị đứng giữa của dữ liệu đã sắp xếp. Để đo độ phân tán, ta dùng độ lệch chuẩn. **Độ lệch chuẩn mẫu** là
$$s=\sqrt{\frac{\sum(x_i-\bar x)^2}{n-1}},$$
xấp xỉ khoảng cách điển hình từ các giá trị đến trung bình. Con số nhỏ nghĩa là dữ liệu tụm gần nhau, con số lớn nghĩa là dữ liệu rải rộng. **Tứ phân vị** $Q_1$ và $Q_3$ là trung vị của nửa dưới và nửa trên, và $\text{IQR}=Q_3-Q_1$ cho biết nửa giữa của dữ liệu trải rộng đến đâu.

Vì sao có lúc ta chọn trung vị thay cho trung bình? Vì trung vị và IQR là số đo **bền vững** (resistant): một giá trị cực đoan hầu như không làm chúng nhúc nhích. Trung bình và độ lệch chuẩn thì không được như vậy. Trong phân phối lệch phải, đuôi dài kéo trung bình lên trên trung vị; trong phân phối lệch trái thì kéo xuống dưới.

Bao xa thì một giá trị được coi là lạ so với phần còn lại? Thống kê có một quy tắc cụ thể. Theo quy tắc $1{,}5\times\text{IQR}$, một giá trị là **giá trị ngoại lai** nếu nó nhỏ hơn $Q_1-1{,}5\,\text{IQR}$ hoặc lớn hơn $Q_3+1{,}5\,\text{IQR}$. Ta thử áp dụng vào một ví dụ.

:::example Tìm giá trị ngoại lai
Số phút làm bài tập về nhà trong một buổi tối của $12$ học sinh là
$$3,\ 5,\ 6,\ 6,\ 7,\ 8,\ 9,\ 10,\ 11,\ 12,\ 14,\ 29.$$
Theo quy tắc $1{,}5\times\text{IQR}$, những giá trị nào là ngoại lai?
A. Chỉ $3$
B. $3$ và $29$
C. Không có giá trị ngoại lai.
D. Chỉ $29$

**Lời giải.** Với $12$ giá trị đã sắp xếp, nửa dưới là $3,5,6,6,7,8$ và nửa trên là $9,10,11,12,14,29$. Do đó $Q_1=\dfrac{6+6}{2}=6$, $Q_3=\dfrac{11+12}{2}=11{,}5$ và $\text{IQR}=5{,}5$.

Hai ngưỡng là $Q_1-1{,}5(5{,}5)=6-8{,}25=-2{,}25$ và $Q_3+1{,}5(5{,}5)=11{,}5+8{,}25=19{,}75$.

Chỉ có $29$ vượt ngưỡng, nên giá trị ngoại lai duy nhất là $29$ phút, chọn đáp án **D**.
:::

:::example Trung bình, trung vị và hình dạng
Lương năm ở một công ty nhỏ có trung bình $52$ nghìn đô la và trung vị $45$ nghìn đô la. Hình dạng nào của phân phối là có khả năng nhất?
A. Lệch trái
B. Lệch phải
C. Gần đối xứng
D. Đều

**Lời giải.** Trung bình lớn hơn trung vị khá nhiều. Điều này xảy ra khi vài giá trị rất lớn, ở đây là vài mức lương cao, kéo trung bình lên, trong khi trung vị vẫn nằm cùng phần lớn dữ liệu.

Vậy phân phối nhiều khả năng lệch phải, chọn đáp án **B**. Với dữ liệu như vậy, trung vị mô tả mức lương điển hình tốt hơn.
:::

## Vị trí: điểm z và bách phân vị

Một điểm kiểm tra cao hay thấp còn tùy cả lớp làm bài ra sao. Để đo điều đó, ta xem giá trị cách trung bình bao xa, tính bằng độ lệch chuẩn. **Điểm z** của một giá trị cho biết nó cách trung bình bao nhiêu độ lệch chuẩn:
$$z=\frac{x-\text{trung bình}}{\text{độ lệch chuẩn}}.$$
Điểm z âm nghĩa là giá trị nhỏ hơn trung bình. Một cách khác để nói về vị trí là dùng bách phân vị. **Bách phân vị** (percentile) của một giá trị là phần trăm dữ liệu nhỏ hơn hoặc bằng nó. Điểm z còn có thêm một lợi thế: nó cho phép so sánh các giá trị thuộc những phân phối khác nhau, như trong ví dụ sau.

:::example So sánh bằng điểm z
Minh được $82$ điểm bài kiểm tra toán có trung bình $70$, độ lệch chuẩn $8$, và $75$ điểm bài kiểm tra vật lí có trung bình $65$, độ lệch chuẩn $4$. So với các bạn, Minh làm bài nào tốt hơn?

**Lời giải.** Ta so sánh điểm z. Với môn toán, $z=\dfrac{82-70}{8}=1{,}5$; với môn vật lí, $z=\dfrac{75-65}{4}=2{,}5$.

Điểm vật lí cao hơn trung bình $2{,}5$ độ lệch chuẩn, còn điểm toán chỉ cao hơn $1{,}5$ độ lệch chuẩn.

Vậy so với các bạn, Minh làm bài vật lí tốt hơn, dù điểm thô thấp hơn.
:::

## So sánh hai phân phối

Chỗ này nhiều bạn hay nhầm: viết ra hai con số rồi tưởng là đã so sánh. Khi so sánh hai nhóm, ta nói về hình dạng, trung tâm, độ phân tán và đặc điểm bất thường, và dùng **từ so sánh**. Liệt kê hai trung vị chưa phải là so sánh; "trung vị của A lớn hơn trung vị của B" mới là so sánh.

:::example Hai lớp học
Bộ năm số tóm tắt điểm kiểm tra của hai lớp như sau.

| Lớp | Min | $Q_1$ | Trung vị | $Q_3$ | Max |
|---|---|---|---|---|---|
| A | $40$ | $55$ | $68$ | $75$ | $90$ |
| B | $52$ | $60$ | $65$ | $70$ | $78$ |

So sánh trung tâm và độ phân tán của hai phân phối.

**Lời giải.** Trung tâm: trung vị điểm của lớp A ($68$) lớn hơn một chút so với trung vị của lớp B ($65$).

Độ phân tán: điểm của lớp A phân tán hơn. Khoảng biến thiên của lớp A là $90-40=50$ và IQR là $75-55=20$, còn của lớp B là $78-52=26$ và $70-60=10$.

Vậy lớp A có điểm điển hình cao hơn một chút nhưng điểm phân tán hơn nhiều so với lớp B.
:::

:::warning Những cái bẫy thường gặp
- **Thiếu tình huống:** "trung vị là $68$" nên viết "trung vị điểm của lớp A là $68$ điểm".
- **Liệt kê thay vì so sánh:** hãy dùng "lớn hơn", "nhỏ hơn", "gần bằng".
- **Dùng trung bình cho dữ liệu lệch:** khi lệch mạnh hoặc có ngoại lai, mô tả trung tâm bằng trung vị và độ phân tán bằng IQR.
- **Tính tứ phân vị bằng tay:** khi $n$ lẻ, hãy bỏ trung vị ra khỏi cả hai nửa.
- **Phương sai và độ lệch chuẩn:** độ lệch chuẩn có cùng đơn vị với dữ liệu.
Nếu chỉ nhớ một điều, hãy nhớ điều này: mỗi con số cần có đơn vị và tình huống đi kèm, và mỗi so sánh cần một từ so sánh. Các bài tập bên dưới là chỗ để bạn luyện cho quen tay.
:::

:::terms
- categorical / quantitative variable | biến định tính / biến định lượng
- distribution | phân phối
- skewed right / left | lệch phải / lệch trái
- mean / median | trung bình / trung vị
- standard deviation | độ lệch chuẩn
- interquartile range (IQR) | khoảng tứ phân vị
- outlier | giá trị ngoại lai
- resistant measure | số đo bền vững
- z-score / percentile | điểm z / bách phân vị
- five-number summary | bộ năm số tóm tắt
:::

## Bài tập tương tự

:::exercise
Với dữ liệu $2,\ 4,\ 4,\ 5,\ 7,\ 8,\ 9,\ 10,\ 22$, tìm trung vị, các tứ phân vị và IQR, rồi cho biết có giá trị ngoại lai không.

::hint
**Kiến thức:** với $n=9$, trung vị là giá trị thứ $5$; bỏ nó ra khỏi cả hai nửa.

::solution
Dữ liệu đã sắp xếp và $n=9$, nên trung vị là giá trị thứ $5$, bằng $7$.

Nửa dưới là $2,4,4,5$, nên $Q_1=\dfrac{4+4}{2}=4$; nửa trên là $8,9,10,22$, nên $Q_3=\dfrac{9+10}{2}=9{,}5$. Do đó $\text{IQR}=9{,}5-4=5{,}5$.

Ngưỡng trên là $9{,}5+1{,}5(5{,}5)=17{,}75$ và ngưỡng dưới là $4-8{,}25=-4{,}25$. Chỉ có $22$ vượt ngưỡng.

Vậy trung vị là $7$, $Q_1=4$, $Q_3=9{,}5$, $\text{IQR}=5{,}5$, và $22$ là giá trị ngoại lai.

**Đáp số.** Trung vị $7$, $\text{IQR}=5{,}5$; $22$ là giá trị ngoại lai.
:::

:::exercise
Tính trung bình và độ lệch chuẩn mẫu của $4,\ 8,\ 6,\ 10,\ 12$.

::hint
**Kiến thức:** $s=\sqrt{\dfrac{\sum(x_i-\bar x)^2}{n-1}}$.

::solution
Trung bình là $\bar x=\dfrac{4+8+6+10+12}{5}=\dfrac{40}{5}=8$.

Các độ lệch so với trung bình là $-4,\ 0,\ -2,\ 2,\ 4$, tổng bình phương là $16+0+4+4+16=40$.

Chia cho $n-1=4$ được $10$, nên $s=\sqrt{10}\approx3{,}162$.

Vậy trung bình là $8$ và độ lệch chuẩn xấp xỉ $3{,}162$.

**Đáp số.** $\bar x=8$, $s\approx3{,}162$.
:::

:::exercise
Phân phối giá nhà có trung bình $310$ nghìn đô la và trung vị $260$ nghìn đô la. Mô tả hình dạng có khả năng của phân phối và cho biết số đo trung tâm nào mô tả tốt hơn một căn nhà điển hình.

::hint
**Kiến thức:** trung bình lớn hơn trung vị gợi ý một đuôi dài bên phải.

::solution
Trung bình lớn hơn trung vị, gợi ý rằng vài căn nhà đắt kéo trung bình lên: phân phối nhiều khả năng lệch phải.

Vì trung vị bền vững trước những mức giá cực đoan đó, nó mô tả giá nhà điển hình tốt hơn.

Vậy phân phối nhiều khả năng lệch phải, và trung vị $260$ nghìn đô la là số đo tốt hơn cho mức giá điển hình.

**Đáp số.** Lệch phải; trung vị.
:::

:::exercise
Chiều cao của đàn ông trưởng thành ở một nước có trung bình $170$ cm và độ lệch chuẩn $8$ cm.
a) Tìm điểm z của một người cao $180$ cm.
b) Chiều cao nào có điểm z bằng $-2$?

::hint
**Kiến thức:** $z=\dfrac{x-\text{trung bình}}{\text{độ lệch chuẩn}}$, và $x=\text{trung bình}+z\cdot\text{độ lệch chuẩn}$.

::solution
a) Điểm z là $z=\dfrac{180-170}{8}=1{,}25$: người này cao hơn trung bình $1{,}25$ độ lệch chuẩn.

b) Giải tìm $x$: $x=170+(-2)(8)=154$ cm.

Vậy điểm z là $1{,}25$, và chiều cao $154$ cm có điểm z bằng $-2$.

**Đáp số.** a) $1{,}25$; b) $154$ cm.
:::

:::exercise
Trong một khảo sát $50$ học sinh, $18$ em đi học bằng xe buýt, $15$ em được đưa bằng ô tô, $12$ em đi bộ và $5$ em đi xe đạp. Tính tần số tương đối của từng nhóm và nêu một biểu đồ phù hợp.

::hint
**Kiến thức:** tần số tương đối $=\dfrac{\text{tần số}}{\text{tổng}}$.

::solution
Chia mỗi tần số cho $50$: xe buýt $\dfrac{18}{50}=36\%$, ô tô $30\%$, đi bộ $24\%$ và xe đạp $10\%$; tổng là $100\%$.

Biến "cách đến trường" là biến định tính, nên biểu đồ cột của các tần số tương đối này là phù hợp.

Vậy các tần số tương đối là $36\%$, $30\%$, $24\%$ và $10\%$, biểu diễn bằng biểu đồ cột.

**Đáp số.** $36\%$, $30\%$, $24\%$, $10\%$; biểu đồ cột.
:::

## Bài tập vận dụng

:::exercise
Giá (nghìn đô la) của năm căn nhà bán trên một con phố là $210,\ 230,\ 245,\ 260,\ 950$. Tính trung bình và trung vị, rồi giải thích người mua nên dùng số nào để mô tả mức giá điển hình trên con phố này.

::hint
**Kiến thức:** giá trị $950$ cách xa các giá trị còn lại.

::solution
Trung bình là $\dfrac{210+230+245+260+950}{5}=\dfrac{1895}{5}=379$, còn trung vị là giá trị đứng giữa, $245$.

Trung bình lớn hơn bốn trong năm mức giá vì một căn nhà đắt kéo nó lên, trong khi trung vị không bị giá trị đó ảnh hưởng.

Vậy trung vị $245$ nghìn đô la mô tả mức giá điển hình trên con phố này tốt hơn.

**Đáp số.** Trung bình $379$, trung vị $245$ (nghìn đô la); dùng trung vị.
:::

:::exercise
Một lớp $20$ học sinh có điểm trung bình $72$ và một lớp $30$ học sinh có điểm trung bình $82$. Tính điểm trung bình của cả $50$ học sinh.

::hint
**Kiến thức:** cộng tổng điểm, không cộng các trung bình.

::solution
Tổng điểm của lớp thứ nhất là $20\times72=1440$, của lớp thứ hai là $30\times82=2460$, nên tổng chung là $3900$.

Chia cho $50$ học sinh được $\dfrac{3900}{50}=78$.

Vậy điểm trung bình của cả $50$ học sinh là $78$; lấy trung bình cộng $\dfrac{72+82}{2}=77$ là sai vì hai lớp có sĩ số khác nhau.

**Đáp số.** $78$.
:::

:::exercise
Dùng bộ năm số tóm tắt của lớp A và lớp B trong ví dụ trên, có thể nói lớp A có giá trị ngoại lai không? Dùng quy tắc $1{,}5\times\text{IQR}$.

::hint
**Kiến thức:** với lớp A, $Q_1=55$, $Q_3=75$, nên $\text{IQR}=20$.

::solution
Với lớp A, $\text{IQR}=75-55=20$, nên hai ngưỡng là $55-30=25$ và $75+30=105$.

Giá trị nhỏ nhất $40$ lớn hơn $25$ và giá trị lớn nhất $90$ nhỏ hơn $105$, nên không giá trị nào có thể nằm ngoài hai ngưỡng.

Vậy theo quy tắc $1{,}5\times\text{IQR}$, lớp A không có giá trị ngoại lai, dù khoảng biến thiên lớn.

**Đáp số.** Không có giá trị ngoại lai.
:::

:::exercise Thử thách
Bốn số theo thứ tự tăng dần là $4,\ 7,\ 9,\ x$, với $x>9$. Tìm $x$ để trung bình bằng trung vị.

::hint
**Kiến thức:** trung vị của bốn giá trị là trung bình cộng của hai giá trị ở giữa.

::solution
Với các giá trị đã sắp xếp, trung vị là $\dfrac{7+9}{2}=8$, với mọi $x>9$.

Trung bình là $\dfrac{4+7+9+x}{4}=\dfrac{20+x}{4}$. Cho bằng $8$, ta được $20+x=32$, nên $x=12$.

Vì $12>9$ nên thứ tự được giữ nguyên. Vậy $x=12$.

**Đáp số.** $x=12$.
:::

:::quiz
::mc NB
Biến nào là biến định tính?
A. Chiều cao tính bằng xăng-ti-mét
B. Môn thể thao yêu thích
C. Số anh chị em
D. Thời gian chạy $100$ m
::key B
Môn thể thao yêu thích xếp mỗi người vào một nhóm.

::mc NB
Cặp số đo nào bền vững trước giá trị ngoại lai?
A. Trung bình và độ lệch chuẩn
B. Trung bình và IQR
C. Trung vị và độ lệch chuẩn
D. Trung vị và IQR
::key D
Cả hai đều dựa vào phần giữa của dữ liệu đã sắp xếp.

::mc TH
Với một phân phối lệch trái mạnh, thông thường
A. trung bình nhỏ hơn trung vị
B. trung bình bằng trung vị
C. trung bình lớn hơn trung vị
D. trung vị bằng $0$
::key A
Đuôi dài bên trái kéo trung bình xuống.

::mc TH
Một giá trị có điểm z bằng $-1$. Điều này nghĩa là giá trị đó
A. nhỏ hơn trung bình $1$ đơn vị
B. ở bách phân vị thứ $1$
C. nhỏ hơn trung bình một độ lệch chuẩn
D. nhỏ hơn giá trị nhỏ nhất
::key C
Điểm z đếm số độ lệch chuẩn so với trung bình.

::tf TH NB TH VD
Cho dữ liệu $2,\ 4,\ 6,\ 8,\ 10$. Xét tính đúng sai của các mệnh đề sau:
a) Trung bình là $6$.
b) Trung vị là $6$.
c) Khoảng biến thiên là $8$.
d) IQR bằng $4$.
::key T T T F
$Q_1=3$ và $Q_3=9$, nên IQR bằng $6$.

::sa TH
Tìm trung vị của $3,\ 9,\ 4,\ 7,\ 10$.
::key 7
Sắp xếp: $3,4,7,9,10$.

::sa TH
Một bài kiểm tra có trung bình $50$ và độ lệch chuẩn $6$. Tìm điểm z của điểm số $65$.
::key 2,5
$\dfrac{65-50}{6}=2{,}5$.
:::
