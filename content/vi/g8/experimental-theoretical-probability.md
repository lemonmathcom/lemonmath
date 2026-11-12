---
title: Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng
description: Tính xác suất thực nghiệm từ kết quả các lần thử, so sánh với xác suất lí thuyết và dùng để dự đoán, ước lượng trong các bài toán thực tế.
minutes: 25
---

:::goals
- Tính xác suất thực nghiệm của một biến cố từ kết quả các lần thử.
- Hiểu mối liên hệ giữa xác suất thực nghiệm và xác suất lí thuyết khi số lần thử tăng.
- Dùng xác suất để dự đoán số lần xảy ra của biến cố.
- Ước lượng xác suất hoặc số phần tử chưa biết từ kết quả thực nghiệm.
:::

Bạn Nam nghi ngờ con xúc xắc của mình không cân đối. Nam gieo nó $60$ lần và thấy mặt $6$ chấm xuất hiện $13$ lần. Nếu con xúc xắc cân đối, xác suất ra mặt $6$ chỉ là $\dfrac16$, tức là trong $60$ lần ta chỉ mong đợi khoảng $10$ lần.

Vậy $13$ lần có phải là bằng chứng cho thấy xúc xắc bị lệch không? Hay chỉ là sự ngẫu nhiên thông thường? Để trả lời, ta cần hiểu kết quả thực tế của thí nghiệm liên quan thế nào đến xác suất tính bằng lí thuyết.

## Cùng khám phá

Giả sử một bạn tung một đồng xu cân đối nhiều lần và ghi lại số lần ra mặt ngửa. Ta tính tỉ lệ ngửa sau mỗi lượt:

| Số lần tung | $10$ | $50$ | $100$ | $500$ | $1\,000$ |
|---|---|---|---|---|---|
| Số lần ngửa | $7$ | $28$ | $47$ | $254$ | $497$ |
| Tỉ lệ ngửa | $0{,}7$ | $0{,}56$ | $0{,}47$ | $0{,}508$ | $0{,}497$ |

Khi số lần tung ít, tỉ lệ dao động khá nhiều ($0{,}7$ sau $10$ lần). Khi số lần tung tăng lên, tỉ lệ dần ổn định quanh $0{,}5$, đúng là xác suất lí thuyết $\dfrac12$ của mặt ngửa. Đây là mối liên hệ ta sẽ gọi tên chính xác.

## Xác suất thực nghiệm

:::definition Xác suất thực nghiệm
Giả sử ta thực hiện một phép thử $n$ lần và biến cố $E$ xảy ra $m$ lần. **Xác suất thực nghiệm** của $E$ là
$$\frac{m}{n}=\frac{\text{số lần }E\text{ xảy ra}}{\text{tổng số lần thử}}.$$
:::

Xác suất thực nghiệm là con số ta đo được từ thí nghiệm thực tế, còn xác suất ở bài trước (tính bằng $\dfrac kn$ với các kết quả đồng khả năng) gọi là **xác suất lí thuyết**.

**Mối liên hệ.** Khi số lần thử $n$ càng lớn thì xác suất thực nghiệm càng gần xác suất lí thuyết. Với số lần thử nhỏ, hai giá trị có thể lệch nhau đáng kể mà vẫn là bình thường. Nhờ vậy ta có hai ứng dụng: khi biết xác suất lí thuyết, ta dự đoán được tần suất của biến cố; khi không tính được xác suất lí thuyết, ta ước lượng nó bằng xác suất thực nghiệm với số lần thử đủ lớn.

:::example Tính xác suất thực nghiệm
Gieo một con xúc xắc $60$ lần, mặt $6$ chấm xuất hiện $12$ lần. Tính xác suất thực nghiệm của biến cố "mặt $6$ chấm" và so sánh với xác suất lí thuyết.

**Lời giải.** Xác suất thực nghiệm là $\dfrac{12}{60}=\dfrac15=0{,}2$. Xác suất lí thuyết của mặt $6$ chấm là $\dfrac16\approx0{,}167$.

Hai giá trị gần nhau; sự chênh lệch nhỏ là bình thường với $60$ lần thử.

Vậy xác suất thực nghiệm là $\dfrac15$, hơi lớn hơn xác suất lí thuyết $\dfrac16$.
:::

:::example Dùng bảng kết quả
Gieo một con xúc xắc $50$ lần, ta ghi được bảng:

| Mặt | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| Số lần | $7$ | $9$ | $8$ | $10$ | $6$ | $10$ |

Tính xác suất thực nghiệm của biến cố "mặt có số chấm chẵn" và so sánh với xác suất lí thuyết.

**Lời giải.** Kiểm tra tổng: $7+9+8+10+6+10=50$. Số lần xuất hiện mặt chẵn là $9+10+10=29$. Xác suất thực nghiệm là $\dfrac{29}{50}=0{,}58$. Xác suất lí thuyết là $\dfrac36=0{,}5$.

Vậy xác suất thực nghiệm là $58\%$, lớn hơn xác suất lí thuyết $50\%$ khoảng $8$ điểm phần trăm.
:::

## Ứng dụng: dự đoán và ước lượng

Nếu xác suất của biến cố $E$ là $p$ thì khi thử $n$ lần, ta dự đoán $E$ xảy ra khoảng $n\cdot p$ lần. Con số này chỉ là ước lượng, không phải kết quả chắc chắn.

:::example Kiểm tra chất lượng sản phẩm
Một nhà máy kiểm tra ngẫu nhiên $400$ sản phẩm và thấy $8$ sản phẩm bị lỗi (giả sử). Ước lượng xác suất một sản phẩm bị lỗi. Dự đoán trong lô $15\,000$ sản phẩm có khoảng bao nhiêu sản phẩm lỗi.

**Lời giải.** Xác suất thực nghiệm bị lỗi là $\dfrac{8}{400}=0{,}02=2\%$. Ta dùng nó để ước lượng xác suất bị lỗi. Với $15\,000$ sản phẩm, số sản phẩm lỗi dự đoán là $15\,000\cdot0{,}02=300$.

Vậy xác suất lỗi khoảng $2\%$ và lô hàng có khoảng $300$ sản phẩm lỗi.
:::

Ta cũng có thể ước lượng một số lượng chưa biết bằng cách lấy mẫu.

:::example Ước lượng số bi đỏ
Một hộp có $50$ bi gồm bi đỏ và bi trắng, ta chưa biết có bao nhiêu bi đỏ. Bạn lấy ngẫu nhiên một bi, ghi màu rồi trả lại hộp, lặp lại $100$ lần. Có $24$ lần lấy được bi đỏ. Ước lượng số bi đỏ trong hộp.

**Lời giải.** Xác suất thực nghiệm lấy được bi đỏ là $\dfrac{24}{100}=0{,}24$. Ta coi đây là xấp xỉ của tỉ lệ bi đỏ trong hộp. Số bi đỏ ước lượng là $50\cdot0{,}24=12$.

Vậy trong hộp có khoảng $12$ bi đỏ.
:::

:::example Dự báo thời tiết
Giả sử trong $30$ ngày của một tháng có $12$ ngày mưa. Ước lượng xác suất một ngày của tháng đó có mưa và dự đoán số ngày mưa trong $5$ ngày tới.

**Lời giải.** Xác suất thực nghiệm có mưa là $\dfrac{12}{30}=\dfrac25=40\%$. Trong $5$ ngày tới, số ngày mưa dự đoán là $5\cdot0{,}4=2$.

Vậy xác suất mưa khoảng $40\%$ và ta dự đoán khoảng $2$ ngày mưa trong $5$ ngày tới (chỉ là dự đoán).
:::

Ta quay lại con xúc xắc của Nam, đi đủ bốn bước của việc giải một bài toán.

:::example Xúc xắc của Nam có cân đối không?
Nam gieo xúc xắc $60$ lần được $13$ lần mặt $6$ chấm. Để chắc hơn, Nam gieo tiếp, tổng cộng $600$ lần và được $98$ lần mặt $6$ chấm (giả sử). Hãy đánh giá xem có lí do để nghi ngờ con xúc xắc không.

**Lời giải.**

*Hiểu đề.* Có hai thí nghiệm với số lần thử khác nhau; cần so sánh xác suất thực nghiệm của mặt $6$ với xác suất lí thuyết $\dfrac16\approx16{,}7\%$.

*Tìm cách giải.* Tính hai xác suất thực nghiệm; số lần thử càng nhiều càng đáng tin.

*Giải.* Với $60$ lần: $\dfrac{13}{60}\approx21{,}7\%$, cao hơn $16{,}7\%$ khoảng $5$ điểm phần trăm. Với $600$ lần: $\dfrac{98}{600}\approx16{,}3\%$, gần như bằng $16{,}7\%$.

*Nhìn lại.* Khi tăng số lần thử, xác suất thực nghiệm tiến gần xác suất lí thuyết, nên chênh lệch ở lần thử đầu nhiều khả năng chỉ do ngẫu nhiên. Tuy vậy thí nghiệm không chứng minh được xúc xắc tuyệt đối cân đối; nó chỉ cho thấy không có bằng chứng đủ mạnh để nghi ngờ.

Vậy không có lí do thuyết phục để cho rằng xúc xắc của Nam không cân đối.
:::

:::warning Những sai lầm thường gặp
- **Cho rằng xác suất thực nghiệm phải bằng xác suất lí thuyết.** Sai: tung đồng xu $10$ lần thì phải ra đúng $5$ lần ngửa. Lí do sai: với số lần thử nhỏ, kết quả dao động; chỉ khi số lần thử lớn, xác suất thực nghiệm mới gần xác suất lí thuyết. Đúng: $7$ lần ngửa trong $10$ lần là hoàn toàn bình thường.
- **Tin rằng kết quả trước ảnh hưởng lần sau.** Sai: sau $5$ lần liên tiếp ra mặt sấp thì lần sau nhiều khả năng ra mặt ngửa hơn. Lí do sai: các lần tung độc lập nhau, đồng xu không "nhớ" kết quả trước. Đúng: xác suất ra mặt ngửa vẫn là $\dfrac12$.
- **Chia cho số lần không xảy ra.** Sai: $8$ sản phẩm lỗi trong $400$ sản phẩm cho xác suất thực nghiệm $\dfrac{8}{392}$. Lí do sai: mẫu số phải là tổng số lần thử. Đúng: $\dfrac{8}{400}=2\%$.
- **Coi dự đoán là kết quả chính xác.** Sai: "lô $15\,000$ sản phẩm chắc chắn có đúng $300$ sản phẩm lỗi". Lí do sai: số lỗi thực tế dao động quanh giá trị đó. Đúng: có khoảng $300$ sản phẩm lỗi.
:::

**Kết nối.** Bài này dựa trên cách tính xác suất bằng tỉ số ở bài [kết quả có thể và kết quả thuận lợi](lesson:possible-favourable-outcomes), cộng với tỉ số phần trăm và bảng thống kê ở các bài về dữ liệu. Ý tưởng "số lần thử càng nhiều thì tần suất càng ổn định" là nền tảng của thống kê và được dùng trong kiểm tra chất lượng, dự báo thời tiết và khảo sát.

## Thuật ngữ

:::terms
- xác suất thực nghiệm | experimental probability
- xác suất lí thuyết | theoretical probability
- số lần thử | number of trials
- tần số tương đối | relative frequency
- dự đoán | prediction
- ước lượng | estimate
- độc lập | independent
- ngẫu nhiên | random
:::

## Tóm tắt

- Xác suất thực nghiệm của $E$ bằng số lần $E$ xảy ra chia cho tổng số lần thử.
- Xác suất lí thuyết tính bằng $\dfrac kn$ khi các kết quả đồng khả năng.
- Số lần thử càng lớn thì xác suất thực nghiệm càng gần xác suất lí thuyết; với ít lần thử, sự chênh lệch là bình thường.
- Dự đoán: số lần $E$ xảy ra khoảng $n\cdot p$ trong $n$ lần thử.
- Ước lượng: dùng xác suất thực nghiệm (với nhiều lần thử) để ước lượng xác suất hoặc một số lượng chưa biết.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tung một đồng xu $50$ lần, được $27$ lần ngửa. Tính xác suất thực nghiệm của mặt ngửa, của mặt sấp và so sánh với $50\%$.

::hint
**Kiến thức:** xác suất thực nghiệm bằng số lần xảy ra chia cho số lần thử.

**Gợi ý các bước:**
1. Tính số lần sấp.
2. Tính hai xác suất thực nghiệm.

::solution
Số lần sấp là $50-27=23$. Xác suất thực nghiệm của ngửa là $\dfrac{27}{50}=54\%$; của sấp là $\dfrac{23}{50}=46\%$. Cả hai gần $50\%$.

Vậy $54\%$ và $46\%$, gần xác suất lí thuyết $50\%$.

**Đáp số.** $54\%$; $46\%$.
:::

:::exercise
Gieo một con xúc xắc $60$ lần, ta được bảng:

| Mặt | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| Số lần | $9$ | $11$ | $10$ | $8$ | $12$ | $10$ |

Tính xác suất thực nghiệm của biến cố "mặt có số chấm lớn hơn $4$" và so sánh với xác suất lí thuyết.

::hint
**Kiến thức:** các mặt lớn hơn $4$ là $5$ và $6$.

**Gợi ý các bước:**
1. Cộng số lần của mặt $5$ và $6$.
2. Chia cho $60$ và so sánh với $\dfrac13$.

::solution
Số lần là $12+10=22$. Xác suất thực nghiệm là $\dfrac{22}{60}=\dfrac{11}{30}\approx36{,}7\%$. Xác suất lí thuyết là $\dfrac26=\dfrac13\approx33{,}3\%$.

Vậy xác suất thực nghiệm là $\dfrac{11}{30}$, hơi lớn hơn xác suất lí thuyết $\dfrac13$.

**Đáp số.** $\dfrac{11}{30}$.
:::

:::exercise
Nhà máy kiểm tra ngẫu nhiên $250$ bóng đèn và thấy $5$ bóng hỏng (giả sử). Ước lượng xác suất một bóng bị hỏng và dự đoán số bóng hỏng trong lô $20\,000$ bóng.

::hint
**Kiến thức:** dự đoán bằng $n\cdot p$.

**Gợi ý các bước:**
1. Tính xác suất thực nghiệm $\dfrac{5}{250}$.
2. Nhân với $20\,000$.

::solution
Xác suất thực nghiệm là $\dfrac{5}{250}=0{,}02=2\%$. Số bóng hỏng dự đoán là $20\,000\cdot0{,}02=400$.

Vậy xác suất hỏng khoảng $2\%$ và lô có khoảng $400$ bóng hỏng.

**Đáp số.** $2\%$; khoảng $400$ bóng.
:::

:::exercise
Một hộp có $40$ bi đỏ và xanh. Lấy ngẫu nhiên một bi, ghi màu rồi trả lại, lặp lại $80$ lần; có $20$ lần lấy được bi đỏ. Ước lượng số bi đỏ trong hộp.

::hint
**Kiến thức:** tỉ lệ bi đỏ trong hộp xấp xỉ xác suất thực nghiệm.

**Gợi ý các bước:**
1. Tính $\dfrac{20}{80}$.
2. Nhân với $40$.

::solution
Xác suất thực nghiệm là $\dfrac{20}{80}=\dfrac14$. Số bi đỏ ước lượng là $40\cdot\dfrac14=10$.

Vậy trong hộp có khoảng $10$ bi đỏ.

**Đáp số.** Khoảng $10$ bi đỏ.
:::

:::exercise
Giả sử trong $40$ ngày hè có $14$ ngày nắng nóng. Ước lượng xác suất một ngày hè là ngày nắng nóng và dự đoán số ngày nắng nóng trong $60$ ngày hè tới.

::hint
**Kiến thức:** xác suất thực nghiệm rồi nhân với số ngày.

**Gợi ý các bước:**
1. Tính $\dfrac{14}{40}$.
2. Nhân với $60$.

::solution
Xác suất thực nghiệm là $\dfrac{14}{40}=35\%$. Số ngày nắng nóng dự đoán là $60\cdot0{,}35=21$.

Vậy xác suất khoảng $35\%$ và dự đoán khoảng $21$ ngày nắng nóng.

**Đáp số.** $35\%$; khoảng $21$ ngày.
:::

:::exercise
Giả sử một cầu thủ sút phạt đền $30$ lần và ghi bàn $24$ lần. Ước lượng xác suất cầu thủ ghi bàn mỗi lần sút. Trong $10$ lần sút tới, dự đoán cầu thủ ghi được khoảng mấy bàn? Kết quả đó có chắc chắn không?

::hint
**Kiến thức:** dự đoán chỉ là ước lượng.

**Gợi ý các bước:**
1. Tính $\dfrac{24}{30}$.
2. Nhân với $10$ và nhận xét.

::solution
Xác suất thực nghiệm là $\dfrac{24}{30}=0{,}8=80\%$. Trong $10$ lần sút, dự đoán ghi khoảng $10\cdot0{,}8=8$ bàn. Kết quả này không chắc chắn: số bàn thực tế có thể là $7$, $9$ hay $10$.

Vậy dự đoán khoảng $8$ bàn, nhưng chỉ là ước lượng.

**Đáp số.** $80\%$; khoảng $8$ bàn; không chắc chắn.
:::

:::exercise
An tung đồng xu $20$ lần được $13$ lần ngửa. Bình tung $200$ lần được $104$ lần ngửa. Tính xác suất thực nghiệm của mỗi bạn. Kết quả của bạn nào đáng tin hơn để ước lượng xác suất của mặt ngửa? Vì sao?

::hint
**Kiến thức:** số lần thử càng lớn càng đáng tin.

**Gợi ý các bước:**
1. Tính $\dfrac{13}{20}$ và $\dfrac{104}{200}$.
2. So sánh với $\dfrac12$ và số lần thử.

::solution
An: $\dfrac{13}{20}=65\%$. Bình: $\dfrac{104}{200}=52\%$. Kết quả của Bình gần $50\%$ hơn và dựa trên số lần thử lớn hơn nhiều.

Vậy kết quả của Bình đáng tin hơn vì số lần thử nhiều hơn.

**Đáp số.** $65\%$; $52\%$; kết quả của Bình đáng tin hơn.
:::

:::exercise
Một hộp có $5$ bi đỏ và $15$ bi xanh. Lấy ngẫu nhiên một bi, ghi màu rồi trả lại, lặp lại $200$ lần. Tính xác suất lí thuyết lấy được bi đỏ và dự đoán số lần lấy được bi đỏ.

::hint
**Kiến thức:** xác suất lí thuyết $\dfrac kn$; dự đoán bằng $n\cdot p$.

**Gợi ý các bước:**
1. Tính xác suất lí thuyết của bi đỏ.
2. Nhân với $200$.

::solution
Xác suất lí thuyết lấy bi đỏ là $\dfrac{5}{20}=\dfrac14$. Số lần dự đoán là $200\cdot\dfrac14=50$.

Vậy dự đoán khoảng $50$ lần lấy được bi đỏ.

**Đáp số.** $\dfrac14$; khoảng $50$ lần.
:::

:::exercise
Một máy quay thưởng được quay $80$ lần và có $12$ lần trúng thưởng (giả sử). Tính xác suất thực nghiệm của biến cố "trúng thưởng" và của biến cố đối "không trúng". (Ôn lại [biến cố đối](lesson:possible-favourable-outcomes).)

::hint
**Kiến thức:** $P(\overline E)=1-P(E)$.

**Gợi ý các bước:**
1. Tính $\dfrac{12}{80}$.
2. Lấy $1$ trừ kết quả.

::solution
Xác suất thực nghiệm trúng thưởng là $\dfrac{12}{80}=\dfrac{3}{20}=15\%$. Xác suất thực nghiệm không trúng là $1-0{,}15=0{,}85=85\%$ (cũng bằng $\dfrac{68}{80}$).

**Đáp số.** $15\%$; $85\%$.
:::

:::exercise Thử thách
Gieo cùng lúc hai con xúc xắc $72$ lần; tổng số chấm bằng $7$ xuất hiện $15$ lần. Tính xác suất thực nghiệm của biến cố đó và so với xác suất lí thuyết $\dfrac16$. Nếu dùng xác suất thực nghiệm để dự đoán cho $600$ lần gieo thì được bao nhiêu lần, và con số lí thuyết là bao nhiêu? Nhận xét.

::hint
**Kiến thức:** dự đoán bằng $n\cdot p$ với $p$ thực nghiệm hoặc lí thuyết.

**Gợi ý các bước:**
1. Tính $\dfrac{15}{72}$ và $72\cdot\dfrac16$.
2. Tính $600\cdot\dfrac{15}{72}$ và $600\cdot\dfrac16$.

::solution
Xác suất thực nghiệm là $\dfrac{15}{72}=\dfrac{5}{24}\approx20{,}8\%$, lớn hơn $\dfrac16\approx16{,}7\%$ (lí thuyết mong đợi $72\cdot\dfrac16=12$ lần, ta được $15$ lần). Dự đoán cho $600$ lần theo thực nghiệm: $600\cdot\dfrac{5}{24}=125$ lần; theo lí thuyết: $600\cdot\dfrac16=100$ lần.

Nhận xét: $72$ lần thử còn ít nên xác suất thực nghiệm chưa đáng tin; với tổng cặp đồng khả năng ta nên dùng xác suất lí thuyết $\dfrac16$.

**Đáp số.** $\dfrac{5}{24}$; $125$ lần so với $100$ lần.
:::

## Kiểm tra mini

:::quiz
::mc
Tung một đồng xu $40$ lần, được $18$ lần ngửa. Xác suất thực nghiệm của mặt ngửa là
A. $\dfrac{18}{22}$.
B. $\dfrac{9}{20}$.
C. $\dfrac12$.
D. $\dfrac{22}{40}$.
::key B
$\dfrac{18}{40}=\dfrac{9}{20}=0{,}45$. A chia cho số lần sấp, C là xác suất lí thuyết, D là xác suất thực nghiệm của mặt sấp.

::mc
Khi số lần thử tăng lên rất nhiều thì xác suất thực nghiệm
A. xa xác suất lí thuyết hơn.
B. luôn bằng đúng xác suất lí thuyết.
C. gần xác suất lí thuyết hơn.
D. luôn lớn hơn xác suất lí thuyết.
::key C
Số lần thử càng lớn, tỉ lệ càng ổn định quanh xác suất lí thuyết, nhưng không nhất thiết bằng đúng.

::mc
Nhà máy kiểm tra $400$ sản phẩm có $8$ sản phẩm lỗi. Dự đoán lô $15\,000$ sản phẩm có khoảng bao nhiêu sản phẩm lỗi?
A. $8$.
B. $150$.
C. $600$.
D. $300$.
::key D
Xác suất thực nghiệm $\dfrac{8}{400}=0{,}02$ nên $15\,000\cdot0{,}02=300$. B và C tính sai tỉ lệ.

::mc
Hộp có $50$ bi đỏ và trắng. Lấy ngẫu nhiên một bi, trả lại, lặp $100$ lần; có $24$ lần lấy được bi đỏ. Ước lượng số bi đỏ là
A. $12$.
B. $24$.
C. $26$.
D. $6$.
::key A
$50\cdot\dfrac{24}{100}=12$. A lấy luôn số lần xuất hiện bi đỏ (quên nhân với tỉ lệ), C và D không theo cách tính nào hợp lí.

::tf
Tung một đồng xu cân đối $10$ lần được $7$ lần ngửa. Xét tính đúng sai của các mệnh đề sau:
a) Xác suất thực nghiệm của mặt ngửa là $0{,}7$.
b) Xác suất lí thuyết của mặt ngửa là $0{,}7$.
c) Kết quả này chứng tỏ đồng xu không cân đối.
d) Ở lần tung thứ $11$, xác suất ra mặt ngửa vẫn là $\dfrac12$.
::key Đ S S Đ
a) Đúng: $\dfrac7{10}$. b) Sai: xác suất lí thuyết là $\dfrac12$. c) Sai: $10$ lần thử quá ít để kết luận. d) Đúng: các lần tung độc lập.

::sa
Tung một đồng xu $50$ lần, được $27$ lần ngửa. Xác suất thực nghiệm của mặt ngửa là bao nhiêu phần trăm?
::key 54
$\dfrac{27}{50}=54\%$.

::sa
Xác suất một bóng đèn bị hỏng ước lượng là $2\%$. Dự đoán trong lô $20\,000$ bóng có khoảng bao nhiêu bóng hỏng?
::key 400
$20\,000\cdot0{,}02=400$.
:::
