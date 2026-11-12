---
title: Làm quen với biến cố và xác suất
description: Hiểu biến cố, xác suất lí thuyết và xác suất thực nghiệm, vận dụng quy tắc vào tính toán và giải bài toán thực tế.
minutes: 25
---

:::goals
- Nhận biết và mô tả biến cố, xác suất lí thuyết và xác suất thực nghiệm.
- Giải thích được vì sao quy tắc chính là đúng.
- Thực hiện chính xác các phép tính hoặc lập luận liên quan.
- Vận dụng kiến thức vào một tình huống thực tế.
:::

Một túi có $3$ thẻ xanh và $2$ thẻ đỏ giống nhau. Khi rút một thẻ, “rút đỏ” là một biến cố. Ta biết biến cố không chắc chắn, nhưng có thể gán một số từ $0$ đến $1$ để mô tả mức độ có khả năng của nó.

## biến cố, xác suất lí thuyết và xác suất thực nghiệm

**Khám phá nhỏ.**
Có $5$ thẻ đồng khả năng, trong đó $2$ thẻ thuận lợi cho biến cố đỏ, nên $P(\text{đỏ})=\dfrac25$. Nếu lặp phép thử nhiều lần, tần suất tương đối của kết quả đỏ thường dao động quanh $\dfrac25$.

:::definition Biến cố và xác suất
Biến cố là tập các kết quả của phép thử. Xác suất $P(A)$ đo khả năng xảy ra của biến cố $A$, với $0\le P(A)\le1$. Xác suất $0$ ứng với biến cố không thể và $1$ ứng với biến cố chắc chắn.
:::

:::definition Đếm và thực nghiệm
Khi các kết quả đồng khả năng, $P(A)=\dfrac{\text{số kết quả thuận lợi}}{\text{tổng số kết quả}}$. Xác suất thực nghiệm sau $n$ lần thử là $\dfrac{\text{số lần A xảy ra}}n$.
:::

**Vì sao?**
Mẫu số đếm toàn bộ cơ hội đồng khả năng, tử số đếm phần làm biến cố đúng. Biến cố đối của $A$ gồm mọi kết quả không thuộc $A$, nên $P(A)+P(\overline A)=1$. Tần suất thực nghiệm có thể khác lí thuyết ở số lần thử ít nhưng thường ổn định hơn khi số thử lớn.

**Cách tự kiểm tra.** Khi làm một câu về chủ đề này, trước hết bạn hãy nói bằng lời dữ kiện cho biết gì và cần tìm gì. Sau đó viết quy tắc sẽ dùng, thay số hoặc lập luận từng bước, rồi kiểm tra kết quả bằng một cách khác: thử lại vào dữ kiện, ước lượng độ lớn, hoặc đối chiếu với hình và trục số. Nếu hai cách không khớp, hãy tìm bước đầu tiên xuất hiện sự khác biệt thay vì chỉ sửa đáp số. Thói quen này giúp bạn phát hiện lỗi dấu, lỗi đơn vị và trường hợp bị bỏ sót.

**Tư duy hệ thống.** biến cố, xác suất lí thuyết và xác suất thực nghiệm không phải là một mẹo riêng lẻ. Hãy nhìn chuỗi liên hệ: dữ kiện quyết định mô hình, mô hình quyết định phép tính, còn kết quả phải quay lại trả lời tình huống ban đầu. Khi một dữ kiện thay đổi, bạn nên dự đoán kết quả tăng, giảm hay giữ nguyên trước khi tính lại.

## Ví dụ và vận dụng

:::example Xúc xắc ra số chẵn
Gieo xúc xắc cân bằng. Tính xác suất ra số chẵn.

**Lời giải.**
Không gian mẫu có $6$ kết quả; thuận lợi là $2,4,6$, có $3$ kết quả. Vậy $P=\dfrac36=\dfrac12$.

Vậy, $\dfrac12$.
:::

:::example Biến cố đối
Xác suất trời mưa theo một mô hình giả định là $0{,}3$. Tính xác suất không mưa.

**Lời giải.**
$1-0{,}3=0{,}7$.

Vậy, $0{,}7$.
:::

:::example Thẻ màu
Túi có $4$ thẻ vàng, $5$ thẻ tím và $1$ thẻ trắng giống nhau. Tính xác suất rút thẻ trắng.

**Lời giải.**
Tổng $10$ thẻ, có $1$ thẻ trắng nên $P=\dfrac1{10}$.

Vậy, $\dfrac1{10}$.
:::

:::example Dữ liệu thực nghiệm
Một vòng quay được thử $80$ lần và dừng ở vùng A $22$ lần. Tính xác suất thực nghiệm của A.

**Lời giải.**

*Hiểu đề.* Ta ghi rõ dữ kiện, điều cần tìm và các điều kiện đi kèm.

*Tìm cách giải.* Ta chọn định nghĩa hoặc quy tắc phù hợp, rồi thực hiện theo thứ tự hợp lí.

*Giải.* $P_{TN}(A)=\dfrac{22}{80}=\dfrac{11}{40}=0{,}275$.

*Nhìn lại.* Ta đối chiếu kết quả với dữ kiện và thử một cách kiểm tra độc lập.

Vậy, $0{,}275$.
:::

## Sai lầm thường gặp và kết nối

:::warning Sai ở đâu?
- **Đếm kết quả không đồng khả năng.** Dùng số tên vùng của vòng quay dù diện tích khác nhau. Công thức đếm chỉ đúng khi các kết quả đồng khả năng. Kiểm tra cơ chế, diện tích hoặc trọng số trước khi đếm.
- **Cho rằng xác suất dự đoán chính xác từng đợt.** Xác suất $\dfrac12$ nghĩa là cứ hai lần phải có đúng một lần. Kết quả ngẫu nhiên dao động; tỉ lệ chỉ ổn định trong dài hạn. So sánh nhiều lần thử và dùng tần suất tương đối.
:::

**Kết nối.** Xác suất biến danh sách khả năng thành thước đo định lượng cho sự không chắc chắn. Nó kết nối đếm, phân số và dữ liệu thực nghiệm, đồng thời hỗ trợ quyết định dưới rủi ro. Khi giải bài, bạn nên tách rõ ba lớp: dữ kiện, quan hệ toán học và kết luận. Trước khi thay số, hãy nói bằng lời vì sao quy tắc được chọn phù hợp; sau mỗi bước, kiểm tra dấu, đơn vị và điều kiện. Một hình vẽ, bảng nhỏ hoặc ví dụ đơn giản thường giúp phát hiện giả thiết bị bỏ sót. Hãy ước lượng trước khi tính để biết kết quả nên lớn hay nhỏ, dương hay âm. Sau khi có đáp án, dùng một cách độc lập để kiểm tra: thay ngược vào dữ kiện, đo lại trên hình, hoặc xét một trường hợp biên. Nếu thay đổi một dữ kiện, hãy dự đoán phần nào của lời giải thay đổi và phần nào vẫn giữ nguyên. Cách nhìn này biến công thức thành một hệ thống có nguyên nhân, giúp bạn vận dụng trong tình huống mới thay vì chỉ nhớ mẫu.

## Thuật ngữ

:::terms
- biến cố | event
- xác suất | probability
- kết quả thuận lợi | favourable outcome
- đồng khả năng | equally likely
- biến cố đối | complementary event
- xác suất lí thuyết | theoretical probability
- xác suất thực nghiệm | experimental probability
- tần suất tương đối | relative frequency
- phép thử | trial
:::

## Tóm tắt

- $0\le P(A)\le1$.
- Với kết quả đồng khả năng, xác suất bằng thuận lợi chia tổng số.
- $P(A)+P(\overline A)=1$.
- Xác suất thực nghiệm là tần suất tương đối.
- Nhiều lần thử thường cho tần suất ổn định hơn.

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước khi xem lời giải.

:::exercise
Gieo xúc xắc chuẩn. Xác suất kết quả nhỏ hơn $7$ là bao nhiêu?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Cả $6$ kết quả đều thuận lợi nên $P=\dfrac66=1$.

**Đáp số.** $1$.
:::

:::exercise
Tung một đồng xu. Xác suất xuất hiện số $5$ là bao nhiêu?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Không có kết quả thuận lợi, nên xác suất bằng $0$.

**Đáp số.** $0$.
:::

:::exercise
Chọn ngẫu nhiên một chữ trong từ HOCSINH gồm $7$ vị trí. Tính xác suất chọn chữ H.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Chữ H xuất hiện $2$ lần trong $7$ vị trí, nên xác suất $\dfrac27$.

**Đáp số.** $\dfrac27$.
:::

:::exercise
Tung hai đồng xu cân bằng. Tính xác suất đúng một mặt ngửa.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Các kết quả đồng khả năng là $NN,NS,SN,SS$. Có $2$ kết quả thuận lợi trong $4$, nên $P=\dfrac12$.

**Đáp số.** $\dfrac12$.
:::

:::exercise
Có $20$ kết quả đồng khả năng và $P(A)=0{,}35$. Có bao nhiêu kết quả thuận lợi?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Số thuận lợi là $0{,}35\cdot20=7$.

**Đáp số.** $7$.
:::

:::exercise
Đồng xu cân bằng có xác suất ngửa $0{,}5$ nhưng $20$ lần tung chỉ có $8$ lần ngửa. Có mâu thuẫn không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Không. Xác suất thực nghiệm $\dfrac8{20}=0{,}4$ có thể dao động; $0{,}5$ là mô hình dài hạn chứ không bắt buộc mọi nhóm nhỏ.

**Đáp số.** không.
:::

:::exercise
Biết $P(A)=\dfrac7{12}$. Tính $P(\overline A)$.

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
$P(\overline A)=1-\dfrac7{12}=\dfrac5{12}$.

**Đáp số.** $\dfrac5{12}$.
:::

:::exercise Thử thách
Vòng quay có một vùng đỏ chiếm nửa hình và hai vùng xanh mỗi vùng một phần tư. Có thể coi ba tên vùng là ba kết quả đồng khả năng không?

::hint
**Kiến thức:** Định nghĩa và quy tắc vừa học.

**Gợi ý các bước:**
1. Xác định dữ kiện và yêu cầu của bài toán.
2. Áp dụng định nghĩa hoặc quy tắc phù hợp.
3. Kiểm tra kết quả với dữ kiện ban đầu.

::solution
Không. Vùng đỏ có diện tích gấp đôi mỗi vùng xanh, nên không thể chỉ đếm ba vùng như nhau.

**Đáp số.** không.
:::

## Kiểm tra mini

:::quiz
::mc
Xác suất luôn nằm trong khoảng
A. từ $0$ đến $1$.
B. từ $1$ đến $10$.
C. các số âm.
D. các số lớn hơn $1$.
::key A
$0$ là không thể và $1$ là chắc chắn.

::mc
Xúc xắc ra số lớn hơn $4$ có xác suất
A. $\dfrac16$
B. $\dfrac13$
C. $\dfrac12$
D. $\dfrac23$
::key B
Thuận lợi là $5,6$: $\dfrac26=\dfrac13$.

::mc
Nếu $P(A)=0{,}2$ thì $P(\overline A)$ bằng
A. $0{,}2$
B. $1{,}2$
C. $0{,}8$
D. $0$
::key C
$1-0{,}2=0{,}8$.

::mc
Biến cố chắc chắn có xác suất
A. $0$
B. $\dfrac12$
C. không xác định
D. $1$
::key D
Mọi kết quả đều thuận lợi.

::tf
Xét các nhận định về xác suất.
a) Xác suất $\dfrac12$ buộc mỗi hai lần thử có đúng một lần xảy ra.
b) Xác suất biến cố đối bằng $1-P(A)$.
c) Xác suất biến cố không thể bằng $0$.
d) Kết quả không đồng khả năng vẫn luôn đếm như nhau.
::key S Đ Đ S
c), b) đúng. Kết quả phải đồng khả năng để đếm và tần số ngắn hạn có thể dao động nên d), a) sai.

::sa
Xúc xắc ra số $6$ có xác suất bao nhiêu?
::key 1/6
Có $1$ kết quả thuận lợi trong $6$.

::sa
$P(A)=0{,}65$. Tính $P(\overline A)$.
::key 0,35
$1-0{,}65=0{,}35$.

:::
