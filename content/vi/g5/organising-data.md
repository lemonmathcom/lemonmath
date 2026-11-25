---
title: Thu thập, phân loại, sắp xếp các số liệu
description: Em học cách thu thập số liệu bằng kiểm đếm, phân loại vào bảng, đọc bảng và sắp xếp số liệu theo thứ tự tăng dần hoặc giảm dần.
minutes: 15
---

:::goals
- Biết thu thập số liệu bằng cách hỏi, đếm và kiểm đếm.
- Phân loại số liệu vào bảng và kiểm tra tổng.
- Đọc bảng số liệu và sắp xếp số liệu theo thứ tự tăng dần hoặc giảm dần.
:::

Lớp 5A có $24$ bạn. Cô giáo hỏi: "Em thích ăn loại quả nào nhất?" Cô ghi lại câu trả lời của từng bạn theo thứ tự hỏi:

Cam, Xoài, Ổi, Cam, Chuối, Xoài, Cam, Dưa hấu, Cam, Xoài, Chuối, Ổi, Cam, Xoài, Cam, Dưa hấu, Chuối, Xoài, Cam, Ổi, Xoài, Chuối, Cam, Dưa hấu.

Danh sách dài và lộn xộn, đọc một lượt khó nhớ nổi mỗi loại quả có mấy bạn chọn. Vậy loại quả nào được nhiều bạn chọn nhất?

## Cùng khám phá

Ta thử làm gọn lại. Em kẻ một bảng, mỗi loại quả một dòng. Rồi em đọc lần lượt từng câu trả lời: bạn nào chọn quả gì thì gạch một vạch vào dòng của quả đó. Vạch nhiều thì khó đếm, nên cứ đủ $5$ vạch ta gom thành một nhóm. Cách ghi này gọi là **kiểm đếm**.

| Loại quả | Kiểm đếm | Số bạn |
|---|---|---|
| Cam | ///// /// | 8 |
| Xoài | ///// / | 6 |
| Chuối | //// | 4 |
| Ổi | /// | 3 |
| Dưa hấu | /// | 3 |
| Tổng | | 24 |

Bảng đã trả lời được câu hỏi đầu bài: loại quả được chọn nhiều nhất là cam, với $8$ bạn. Nhưng trước khi tin vào bảng, em cộng các số bạn lại: $8+6+4+3+3=24$. Vì sao phải cộng? Vì tổng này phải bằng số bạn được hỏi. Khi hai số khớp nhau, em biết mình không bỏ sót và không đếm trùng bạn nào.

:::theorem Ba việc với số liệu
1. **Thu thập:** hỏi, đo hoặc đếm, rồi ghi lại từng số liệu.
2. **Phân loại:** chia số liệu vào từng nhóm, kiểm đếm và ghi vào bảng. Cộng lại để kiểm tra tổng.
3. **Sắp xếp:** xếp các số theo thứ tự **tăng dần** (từ bé đến lớn) hoặc **giảm dần** (từ lớn đến bé).
:::

Chỗ này nhiều bạn hay quên: kiểm tra tổng. Việc đó chỉ mất vài giây mà cho em biết ngay bảng có đúng không. Nếu tổng khác số bạn được hỏi, em đã bỏ sót hoặc đếm trùng một bạn nào đó, và cần đếm lại.

## Ví dụ

Số liệu không chỉ là tên các loại quả. Nó cũng có thể là những con số, như số anh chị em ruột của mỗi bạn. Cách làm vẫn vậy: chia nhóm, kiểm đếm, rồi kiểm tra tổng.

:::example Số anh chị em
Cô hỏi $12$ bạn: "Em có mấy anh chị em ruột?" Kết quả: $1, 2, 1, 0, 2, 1, 3, 1, 2, 1, 0, 2$. Hãy lập bảng số liệu.

**Lời giải.** Ta chia các số vào từng nhóm $0$, $1$, $2$, $3$ rồi đếm:

| Số anh chị em | Kiểm đếm | Số bạn |
|---|---|---|
| 0 | // | 2 |
| 1 | ///// | 5 |
| 2 | //// | 4 |
| 3 | / | 1 |
| Tổng | | 12 |

Kiểm tra: $2+5+4+1=12$, đúng bằng số bạn được hỏi. Vậy có $5$ bạn có đúng $1$ anh chị em ruột.
:::

Có số liệu rồi, ta thường muốn biết ai thấp nhất, ai cao nhất. Muốn thấy ngay, ta sắp xếp các số theo thứ tự.

:::example Sắp xếp chiều cao
Chiều cao của $6$ bạn trong một tổ (đơn vị cm): $138, 145, 141, 150, 139, 143$. Hãy xếp theo thứ tự tăng dần. Bạn thấp nhất và bạn cao nhất cao bao nhiêu?

**Lời giải.** Ta tìm số bé nhất, rồi số bé nhất trong các số còn lại, cứ thế tiếp tục:
$$138 < 139 < 141 < 143 < 145 < 150.$$
Xếp giảm dần thì viết ngược lại: $150, 145, 143, 141, 139, 138$.
Vậy bạn thấp nhất cao $138$ cm và bạn cao nhất cao $150$ cm.
:::

Một bảng số liệu chứa nhiều thông tin hơn ta thấy trong lần nhìn đầu tiên. Em đọc kĩ bảng sau và trả lời từng câu hỏi nhé.

:::example Mượn sách thư viện
Bảng cho biết số quyển sách được mượn trong $5$ ngày:

| Ngày | Thứ Hai | Thứ Ba | Thứ Tư | Thứ Năm | Thứ Sáu |
|---|---|---|---|---|---|
| Số quyển | 34 | 28 | 41 | 28 | 39 |

Ngày nào mượn nhiều nhất? Cả $5$ ngày mượn bao nhiêu quyển? Ngày nhiều nhất hơn ngày ít nhất bao nhiêu quyển?

**Lời giải.** Số lớn nhất là $41$, nên thứ Tư mượn nhiều nhất. Số bé nhất là $28$.

Tổng số quyển là:
$$34+28+41+28+39=170.$$
Ngày nhiều nhất hơn ngày ít nhất:
$$41-28=13.$$
Vậy thứ Tư mượn nhiều nhất; cả tuần mượn $170$ quyển; ngày nhiều nhất hơn ngày ít nhất $13$ quyển.
:::

Biết tổng còn giúp ta làm thêm một việc nữa: tìm số bị thiếu. Khi đã biết tổng và các số còn lại, số thiếu sẽ hiện ra nhờ một phép trừ.

:::example Cửa hàng bánh
Một buổi sáng, cửa hàng bán được $60$ cái bánh: $18$ bánh mì, $12$ bánh bao, $14$ xôi và một số bánh rán. Hỏi bán được bao nhiêu bánh rán? Xếp các loại bánh theo số cái bán được, từ nhiều đến ít.

**Lời giải.** Số bánh đã biết là $18+12+14=44$. Số bánh rán là tổng trừ số bánh đã biết:
$$60-44=16.$$
Kiểm tra: $18+12+14+16=60$. Xếp giảm dần: $18, 16, 14, 12$, tức là bánh mì, bánh rán, xôi, bánh bao.
Vậy cửa hàng bán được $16$ cái bánh rán.
:::

:::warning Những lỗi em hay gặp
- **Không kiểm tra tổng.** Sai: bảng cộng ra $23$ trong khi đã hỏi $24$ bạn, mà em không đếm lại. Vì sao sai: hai số lệch nhau nghĩa là đã bỏ sót một bạn. Đúng: cộng các số trong bảng rồi so với số bạn được hỏi.
- **Nhầm tăng dần với giảm dần.** Sai: nói dãy $5, 9, 12$ là giảm dần. Vì sao sai: đi từ trái sang phải, các số đang to lên. Đúng: $5<9<12$ là tăng dần.
- **Xếp số mà bỏ tên.** Sai: xếp xong các số thời gian chạy mà không ghi đó là bạn nào. Đúng: luôn để tên đi kèm với từng số.

Làm bảng số liệu ai cũng có lúc nhầm. Em quen tay kiểm tra lại từng bước là sẽ tránh được những lỗi này.
:::

## Thuật ngữ

:::terms
- số liệu | data
- thu thập số liệu | collecting data
- phân loại | classify (sort into groups)
- kiểm đếm | tally
- bảng số liệu | data table (tally chart)
- tổng | total
- sắp xếp | order (sort)
- tăng dần | ascending order
- giảm dần | descending order
:::

## Tóm tắt

- Thu thập số liệu bằng cách hỏi, đo hoặc đếm, và ghi lại từng số liệu.
- Phân loại vào bảng bằng **kiểm đếm**: gặp một số liệu thì gạch một vạch, đủ $5$ vạch thì gom thành một nhóm.
- Cộng các số trong bảng: tổng phải bằng số bạn được hỏi.
- **Tăng dần:** từ bé đến lớn. **Giảm dần:** từ lớn đến bé.
- Khi đã biết tổng, số còn thiếu bằng tổng trừ đi các số đã biết.

Quay lại câu hỏi đầu bài: nhờ bảng kiểm đếm, danh sách lộn xộn đã cho ta câu trả lời là cam. Em nhớ luôn cộng lại để kiểm tra tổng nhé.

## Luyện tập

Mỗi bài có phần kiến thức cần nhớ và một gợi ý để em bắt đầu. Em cứ tự làm trước, chưa ra thì xem gợi ý, rồi mới mở lời giải. Sai một lần cũng không sao, vì điều ta đang luyện là cách làm.

:::exercise
Xếp các số sau theo thứ tự tăng dần: $47, 39, 52, 40, 45$.

::hint
**Kiến thức:** tăng dần là từ bé đến lớn.

**Gợi ý các bước:**
1. Tìm số bé nhất.
2. Tìm số bé nhất trong các số còn lại, cứ thế tiếp tục.

::solution
Muốn xếp theo thứ tự tăng dần, ta tìm số bé nhất trước, rồi lần lượt các số lớn hơn.

Các số đều có hai chữ số. So sánh chữ số hàng chục: $39$ có hàng chục là $3$, bé nhất; các số $47$, $40$, $45$ có hàng chục là $4$; số $52$ có hàng chục là $5$, lớn nhất.

So sánh ba số có hàng chục là $4$ theo chữ số hàng đơn vị: $0<5<7$, nên $40<45<47$.

Do đó
$$39<40<45<47<52.$$

Vậy các số xếp theo thứ tự tăng dần là $39, 40, 45, 47, 52$.

**Đáp số.** $39, 40, 45, 47, 52$.
:::

:::exercise
Xếp các số sau theo thứ tự giảm dần: $205, 250, 25, 502, 52$.

::hint
**Kiến thức:** giảm dần là từ lớn đến bé. Số có nhiều chữ số hơn thì lớn hơn.

**Gợi ý các bước:**
1. Tìm các số có ba chữ số và so sánh chúng.
2. So sánh các số có hai chữ số.

::solution
Muốn xếp theo thứ tự giảm dần, ta tìm số lớn nhất trước. Số có ba chữ số luôn lớn hơn số có hai chữ số, nên ta xếp các số có ba chữ số trước.

Các số có ba chữ số là $205$, $250$, $502$. So sánh chữ số hàng trăm: $502$ có hàng trăm là $5$, lớn nhất. Hai số $250$ và $205$ cùng hàng trăm là $2$; so sánh hàng chục: $5>0$, nên $250>205$. Do đó $502>250>205$.

Các số có hai chữ số là $25$ và $52$. So sánh hàng chục: $5>2$, nên $52>25$.

Do đó
$$502>250>205>52>25.$$

Vậy các số xếp theo thứ tự giảm dần là $502, 250, 205, 52, 25$.

**Đáp số.** $502, 250, 205, 52, 25$.
:::

:::exercise
Cô hỏi $12$ bạn nuôi con vật nào: chó, mèo, chó, cá, mèo, chó, chó, mèo, cá, chó, thỏ, mèo. Hãy lập bảng số liệu. Con vật nào được nuôi nhiều nhất?

::hint
**Kiến thức:** chia vào từng nhóm rồi kiểm đếm; cộng lại để kiểm tra tổng.

**Gợi ý các bước:**
1. Kẻ bảng bốn dòng: chó, mèo, cá, thỏ.
2. Đọc từng câu trả lời và gạch một vạch.
3. Cộng các số, so với $12$.

::solution
Ta đọc lần lượt các câu trả lời và đếm số bạn nuôi mỗi con vật:
- Chó: lần thứ $1$, $3$, $6$, $7$, $10$, tất cả $5$ bạn.
- Mèo: lần thứ $2$, $5$, $8$, $12$, tất cả $4$ bạn.
- Cá: lần thứ $4$, $9$, tất cả $2$ bạn.
- Thỏ: lần thứ $11$, tất cả $1$ bạn.

Bảng số liệu:

| Con vật | Chó | Mèo | Cá | Thỏ |
|---|---|---|---|---|
| Số bạn | $5$ | $4$ | $2$ | $1$ |

Kiểm tra: $5+4+2+1=12$, đúng bằng số bạn được hỏi.

Trong bảng, số lớn nhất là $5$, ứng với con chó.

Vậy chó $5$ bạn, mèo $4$ bạn, cá $2$ bạn, thỏ $1$ bạn; con vật được nuôi nhiều nhất là chó.

**Đáp số.** Chó $5$, mèo $4$, cá $2$, thỏ $1$. Nhiều nhất là chó.
:::

:::exercise
Số ngày mưa trong bốn tháng là: tháng $6$: $14$ ngày; tháng $7$: $17$ ngày; tháng $8$: $20$ ngày; tháng $9$: $16$ ngày. Tháng nào mưa nhiều nhất? Cả bốn tháng có bao nhiêu ngày mưa?

::hint
**Kiến thức:** số lớn nhất ứng với tháng mưa nhiều nhất; tổng là phép cộng.

**Gợi ý các bước:**
1. Tìm số lớn nhất trong bốn số.
2. Cộng bốn số lại.

::solution
Bài giải

So sánh số ngày mưa của bốn tháng: $14$, $17$, $20$, $16$. Số lớn nhất là $20$, ứng với tháng $8$, nên tháng $8$ mưa nhiều nhất.

Số ngày mưa của cả bốn tháng là:
$$14+17+20+16=67\ \text{(ngày)}.$$

Vậy tháng $8$ mưa nhiều nhất; cả bốn tháng có $67$ ngày mưa.

**Đáp số.** Tháng $8$; $67$ ngày.
:::

:::exercise
Bốn lớp $5$A, $5$B, $5$C, $5$D trồng tất cả $120$ cây. Lớp $5$A trồng $24$ cây, lớp $5$B trồng $31$ cây, lớp $5$D trồng $28$ cây. Hỏi lớp $5$C trồng bao nhiêu cây? Xếp các lớp theo số cây, từ nhiều đến ít.

::hint
**Kiến thức:** số còn thiếu bằng tổng trừ các số đã biết.

**Gợi ý các bước:**
1. Đề cho biết gì? Hỏi gì?
2. Tính số cây ba lớp đã trồng, rồi lấy $120$ trừ đi.
3. Thử lại bằng cách cộng bốn số.

::solution
Bài giải

Số cây ba lớp $5$A, $5$B, $5$D trồng được là:
$$24+31+28=83\ \text{(cây)}.$$

Số cây lớp $5$C trồng được là:
$$120-83=37\ \text{(cây)}.$$

Kiểm tra: $83+37=120$. Đúng.

Xếp số cây theo thứ tự từ nhiều đến ít: $37>31>28>24$, ứng với các lớp $5$C, $5$B, $5$D, $5$A.

Vậy lớp $5$C trồng $37$ cây; thứ tự từ nhiều đến ít là $5$C, $5$B, $5$D, $5$A.

**Đáp số.** Lớp $5$C trồng $37$ cây. Thứ tự: $5$C, $5$B, $5$D, $5$A.
:::

:::exercise
Thời gian chạy $60$ m của năm bạn (giây): An $11{,}2$; Bình $10{,}8$; Chi $12{,}5$; Dũng $9{,}9$; Hà $10{,}6$. Ai chạy nhanh nhất? Xếp các bạn từ nhanh đến chậm.

::hint
**Kiến thức:** thời gian càng ít thì chạy càng nhanh, nên xếp thời gian tăng dần.

**Gợi ý các bước:**
1. So sánh các số thập phân: trước hết xem phần nguyên.
2. Xếp từ bé đến lớn, giữ tên bạn đi kèm.

::solution
Cùng chạy $60$ m, bạn nào chạy hết ít thời gian hơn thì chạy nhanh hơn. Vì vậy ta xếp các thời gian theo thứ tự tăng dần.

So sánh phần nguyên: $9{,}9$ có phần nguyên $9$, bé nhất; $10{,}6$ và $10{,}8$ có phần nguyên $10$; tiếp đến $11{,}2$ rồi $12{,}5$. Hai số $10{,}6$ và $10{,}8$ có hàng phần mười $6<8$, nên $10{,}6<10{,}8$. Do đó
$$9{,}9<10{,}6<10{,}8<11{,}2<12{,}5.$$

Các thời gian này lần lượt là của Dũng, Hà, Bình, An, Chi.

Vậy Dũng chạy nhanh nhất; thứ tự từ nhanh đến chậm là Dũng, Hà, Bình, An, Chi.

**Đáp số.** Dũng chạy nhanh nhất. Thứ tự: Dũng, Hà, Bình, An, Chi.
:::

:::exercise
Em hãy nhớ lại bài trước. Ba bạn đi xe đạp đều trong $2$ giờ. Nam đi $24$ km, Sơn đi $30$ km, Tú đi $26$ km. Tính vận tốc của mỗi bạn rồi xếp từ nhanh đến chậm.

::hint
**Kiến thức:** vận tốc bằng quãng đường chia cho thời gian: $v=s:t$.

**Gợi ý các bước:**
1. Tính vận tốc của từng bạn.
2. Xếp các vận tốc giảm dần.

::solution
Bài giải

Muốn tính vận tốc, ta lấy quãng đường chia cho thời gian. Cả ba bạn đều đi trong $2$ giờ.

Vận tốc của Nam là:
$$24:2=12\ \text{(km/giờ)}.$$

Vận tốc của Sơn là:
$$30:2=15\ \text{(km/giờ)}.$$

Vận tốc của Tú là:
$$26:2=13\ \text{(km/giờ)}.$$

Xếp theo thứ tự giảm dần: $15>13>12$, nên từ nhanh đến chậm là Sơn, Tú, Nam.

Vậy Sơn đi $15$ km/giờ, Tú đi $13$ km/giờ, Nam đi $12$ km/giờ; thứ tự từ nhanh đến chậm là Sơn, Tú, Nam.

**Đáp số.** Sơn $15$ km/giờ, Tú $13$ km/giờ, Nam $12$ km/giờ.
:::

:::exercise Thử thách
Cô hỏi $30$ bạn chọn một môn thể thao. Bóng đá có $11$ bạn, cờ vua có $4$ bạn. Số bạn chọn cầu lông nhiều hơn số bạn chọn bơi là $3$ bạn. Hỏi mỗi môn cầu lông và bơi có bao nhiêu bạn?

::hint
**Kiến thức:** biết tổng và hiệu của hai số thì số bé bằng (tổng $-$ hiệu) $:2$.

**Gợi ý các bước:**
1. Tìm số bạn chọn cầu lông và bơi cộng lại.
2. Dùng hiệu $3$ để tìm số bé, rồi số lớn.
3. Thử lại: cộng bốn môn.

::solution
Bài giải

Số bạn chọn cầu lông và bơi cộng lại là:
$$30-11-4=15\ \text{(bạn)}.$$

Đây là bài toán tìm hai số khi biết tổng ($15$) và hiệu ($3$). Số bé là số bạn chọn bơi.

Số bạn chọn bơi là:
$$(15-3):2=6\ \text{(bạn)}.$$

Số bạn chọn cầu lông là:
$$6+3=9\ \text{(bạn)}.$$

Kiểm tra: $11+9+6+4=30$ và $9-6=3$. Đúng.

Vậy có $9$ bạn chọn cầu lông và $6$ bạn chọn bơi.

**Đáp số.** Cầu lông $9$ bạn, bơi $6$ bạn.
:::

## Kiểm tra mini

:::quiz
::mc NB
Dãy nào được xếp theo thứ tự tăng dần?
A. $48, 40, 84, 80$.
B. $84, 80, 48, 40$.
C. $40, 80, 48, 84$.
D. $40, 48, 80, 84$.
::key D
Tăng dần là từ bé đến lớn: $40<48<80<84$. Phương án B là thứ tự giảm dần.

::mc NB
Hình kiểm đếm ///// /// ứng với số nào?
A. $8$.
B. $5$.
C. $7$.
D. $3$.
::key A
Một nhóm đủ $5$ vạch và thêm $3$ vạch nữa: $5+3=8$. Phương án B quên nhóm $3$ vạch, phương án D quên nhóm $5$ vạch.

::mc TH
Cô hỏi $20$ bạn thích môn nào nhất: Toán $6$ bạn, Tiếng Việt $5$ bạn, Tiếng Anh $4$ bạn, còn lại thích Thể dục. Có bao nhiêu bạn thích Thể dục?
A. $15$.
B. $5$.
C. $35$.
D. $4$.
::key B
Ba môn đầu có $6+5+4=15$ bạn, nên Thể dục có $20-15=5$ bạn. Phương án A là số bạn của ba môn đầu, chưa trừ khỏi $20$.

::mc TH
Dãy nào được xếp theo thứ tự giảm dần?
A. $0{,}9;\ 0{,}8;\ 0{,}85;\ 0{,}75$.
B. $0{,}75;\ 0{,}8;\ 0{,}85;\ 0{,}9$.
C. $0{,}9;\ 0{,}85;\ 0{,}8;\ 0{,}75$.
D. $0{,}85;\ 0{,}9;\ 0{,}8;\ 0{,}75$.
::key C
Ta có $0{,}9>0{,}85>0{,}8>0{,}75$. Phương án B là tăng dần; phương án A đặt $0{,}8$ trước $0{,}85$ nên sai.

::tf NB TH NB TH
Số quyển sách bốn bạn đọc trong tháng: Lan $8$, Mai $12$, Nam $5$, Hùng $12$.
a) Mai và Hùng đọc nhiều sách nhất.
b) Cả bốn bạn đọc $36$ quyển.
c) Xếp tăng dần: $5, 8, 12, 12$.
d) Nam đọc ít hơn Lan $4$ quyển.
::key Đ S Đ S
a) Đúng: số lớn nhất là $12$. b) Sai: $8+12+5+12=37$. c) Đúng: $5<8<12=12$. d) Sai: $8-5=3$.

::sa TH
Cửa hàng bán $45$ cái bánh ngày thứ nhất, $38$ cái ngày thứ hai và $52$ cái ngày thứ ba. Tổng cộng bán bao nhiêu cái bánh?
::key 135
$45+38+52=135$ (cái).

::sa TH
Điểm kiểm tra của $5$ bạn: $36, 29, 41, 33, 38$. Khi xếp tăng dần, số đứng thứ hai là số nào?
::key 33
Xếp tăng dần: $29, 33, 36, 38, 41$. Số đứng thứ hai là $33$.
:::
