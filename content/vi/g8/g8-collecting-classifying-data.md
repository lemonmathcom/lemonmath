---
title: Thu thập và phân loại dữ liệu. Biểu diễn dữ liệu bằng bảng, biểu đồ
description: Biết thu thập, phân loại dữ liệu định tính và định lượng, lập bảng tần số, vẽ và chọn biểu đồ cột, hình quạt tròn, đoạn thẳng phù hợp.
minutes: 25
---

:::goals
- Biết các cách thu thập dữ liệu và kiểm tra tính hợp lí của dữ liệu.
- Phân loại được dữ liệu định tính và dữ liệu định lượng.
- Lập được bảng tần số và tần số tương đối từ một danh sách dữ liệu.
- Đọc, vẽ và chọn được biểu đồ cột, biểu đồ hình quạt tròn, biểu đồ đoạn thẳng phù hợp với mục đích.
:::

Mỗi ngày bạn gặp rất nhiều con số: điểm kiểm tra, nhiệt độ, tiền điện, kết quả bình chọn. Muốn dùng chúng để quyết định điều gì đó, ta cần thu thập cho đúng, sắp xếp cho gọn rồi vẽ ra để nhìn thấy quy luật. Đó là ba việc của thống kê, và bài này gộp cả ba.

Giả sử nhà trường muốn mua dụng cụ cho câu lạc bộ thể thao và hỏi $40$ bạn lớp 8A: "Bạn thích môn nào nhất?". Một xấp phiếu trả lời chưa nói lên điều gì cả. Làm thế nào để biết nên mua dụng cụ cho môn nào trước?

## Cùng khám phá

Mười hai phiếu đầu tiên ghi: Bóng đá, Cầu lông, Bóng đá, Bóng rổ, Bóng đá, Bơi, Cầu lông, Bóng đá, Đá cầu, Cầu lông, Bóng đá, Bóng rổ. Bạn hãy đếm xem mỗi môn xuất hiện mấy lần.

Đếm bằng cách gạch từng nét, ta được: Bóng đá $5$ lần, Cầu lông $3$ lần, Bóng rổ $2$ lần, Bơi $1$ lần, Đá cầu $1$ lần. Tổng là $5+3+2+1+1=12$, đúng bằng số phiếu. Danh sách dài đã biến thành một bảng ngắn, và ta thấy ngay bóng đá được chọn nhiều nhất. Các mục sau gọi tên và hệ thống hoá từng bước này.

## Thu thập dữ liệu

**Dữ liệu** là những thông tin (con số, tên gọi, ...) mà ta ghi lại để nghiên cứu một vấn đề. Có hai cách thu thập chính.

- **Trực tiếp:** tự quan sát, đo đạc, phỏng vấn hoặc phát phiếu hỏi, ví dụ đo chiều cao của các bạn trong lớp.
- **Gián tiếp:** lấy từ nguồn đã có như sách, báo, trang web của cơ quan thống kê (ví dụ Tổng cục Thống kê).

Dữ liệu chỉ có giá trị khi **hợp lí**: đúng đối tượng cần hỏi, đúng đơn vị và nằm trong khoảng có thể xảy ra. Điểm kiểm tra thang $10$ thì không thể là $12$.

:::example Chọn cách thu thập
Nêu cách thu thập dữ liệu phù hợp cho từng vấn đề:

a) Số quyển sách mỗi bạn trong lớp đã đọc trong tháng này.

b) Số dân của một tỉnh vào năm trước.

**Lời giải.** a) Ta phát phiếu hỏi hoặc hỏi trực tiếp từng bạn (thu thập trực tiếp), vì số liệu này chưa có ở đâu sẵn.

b) Ta tra cứu từ nguồn chính thức như niên giám của cơ quan thống kê (thu thập gián tiếp), vì ta không thể tự đếm dân cả tỉnh.

Vậy a) trực tiếp; b) gián tiếp.
:::

:::example Kiểm tra tính hợp lí
Điểm kiểm tra (thang $10$) của sáu bạn được ghi lại: $7$; $8{,}5$; $9$; $12$; $6$; $7{,}5$. Dữ liệu nào không hợp lí? Vì sao?

**Lời giải.** Điểm tối đa của thang $10$ là $10$. Ta thấy $12>10$ nên giá trị $12$ không hợp lí; có thể bạn ghi nhầm (ví dụ $1{,}2$ hoặc $2$). Các giá trị còn lại đều nằm trong khoảng từ $0$ đến $10$.

Vậy giá trị $12$ không hợp lí và cần kiểm tra lại.
:::

## Phân loại dữ liệu

:::definition Dữ liệu định tính và dữ liệu định lượng
- **Dữ liệu định tính** là dữ liệu không phải số, mô tả một tính chất (tên, màu sắc, môn học yêu thích, ...).
- **Dữ liệu định lượng** là dữ liệu là số, cho biết một đại lượng đo hoặc đếm được (chiều cao, điểm số, số anh chị em, ...).
:::

**Hiểu sâu hơn.** Không phải cứ là số thì là dữ liệu định lượng. Số điện thoại hay số áo của cầu thủ chỉ dùng để *gọi tên*; cộng hay tính trung bình chúng không có ý nghĩa. Dữ liệu định lượng phải là số mà các phép tính trên nó có nghĩa.

:::example Phân loại dữ liệu
Cho biết mỗi dữ liệu sau là định tính hay định lượng:

a) Món ăn yêu thích.

b) Cân nặng (kg).

c) Số điện thoại.

d) Số anh chị em ruột.

**Lời giải.** Ta xét xem dữ liệu có phải là một đại lượng đo hoặc đếm được hay không.

a) Món ăn là tên gọi, không phải số: định tính.

b) Cân nặng là đại lượng đo được: định lượng.

c) Số điện thoại chỉ dùng để gọi tên, phép tính trên chúng không có nghĩa: định tính.

d) Số anh chị em là đại lượng đếm được: định lượng.

Vậy a) và c) là định tính; b) và d) là định lượng.
:::

## Biểu diễn dữ liệu bằng bảng

Để thấy nhanh dữ liệu, ta lập **bảng tần số**. **Tần số** của một giá trị là số lần giá trị đó xuất hiện. **Tần số tương đối** là tỉ số giữa tần số và tổng số dữ liệu, thường viết dưới dạng phần trăm:
$$\text{tần số tương đối}=\frac{\text{tần số}}{\text{tổng số dữ liệu}}.$$
Tổng các tần số bằng tổng số dữ liệu, và tổng các tần số tương đối bằng $100\%$.

:::example Lập bảng tần số
Hai mươi bạn lớp 8A được hỏi cách đi học và trả lời: Bộ, Đạp, Buýt, Máy, Máy, Bộ, Đạp, Đạp, Máy, Buýt, Bộ, Máy, Đạp, Máy, Buýt, Đạp, Máy, Bộ, Máy, Đạp. (Bộ: đi bộ; Đạp: xe đạp; Buýt: xe buýt; Máy: xe máy do người thân chở.) Lập bảng tần số và tần số tương đối.

**Lời giải.** Ta đếm số lần xuất hiện của từng cách đi, rồi chia cho tổng số bạn là $20$:

| Cách đi học | Đi bộ | Xe đạp | Xe buýt | Xe máy | Tổng |
|---|---|---|---|---|---|
| Tần số | $4$ | $6$ | $3$ | $7$ | $20$ |
| Tần số tương đối | $20\%$ | $30\%$ | $15\%$ | $35\%$ | $100\%$ |

Kiểm tra: $4+6+3+7=20$ và $20+30+15+35=100$.

Vậy xe máy là cách đi học phổ biến nhất ($35\%$).
:::

## Biểu diễn dữ liệu bằng biểu đồ

Biểu đồ giúp ta nhìn thấy sự so sánh ngay lập tức. Mỗi loại biểu đồ có thế mạnh riêng:

| Biểu đồ | Dùng để |
|---|---|
| Biểu đồ cột | so sánh số lượng giữa các nhóm |
| Biểu đồ cột kép | so sánh hai tập dữ liệu trên cùng các nhóm (ví dụ nam và nữ của từng lớp) |
| Biểu đồ tranh | so sánh số lượng bằng các biểu tượng, dễ nhìn với số nhỏ |
| Biểu đồ hình quạt tròn | cho thấy tỉ lệ các phần trong một tổng |
| Biểu đồ đoạn thẳng | theo dõi sự thay đổi theo thời gian |

Ta vẽ biểu đồ cột cho bảng ở ví dụ trên: mỗi cột ứng với một cách đi học, chiều cao của cột bằng tần số.

:::example Vẽ biểu đồ cột
Vẽ biểu đồ cột biểu diễn bảng tần số cách đi học ở ví dụ trên.

**Lời giải.** Ta vẽ hai trục; trên trục ngang đặt các cách đi học, trên trục đứng ghi tần số. Các cột có chiều rộng bằng nhau, khoảng cách đều nhau và chiều cao lần lượt là $4$; $6$; $3$; $7$.

Vậy ta được biểu đồ ở hình dưới, trong đó cột "Xe máy" cao nhất và cột "Xe buýt" thấp nhất.
:::

:::diagram Cách đi học của $20$ bạn lớp 8A
alt: Biểu đồ cột có bốn cột: Đi bộ cao 4, Xe đạp cao 6, Xe buýt cao 3, Xe máy cao 7
point P1 1,0 ""
point P2 2,0 ""
point P3 2,4 ""
point P4 1,4 ""
point Q1 3,0 ""
point Q2 4,0 ""
point Q3 4,6 ""
point Q4 3,6 ""
point R1 5,0 ""
point R2 6,0 ""
point R3 6,3 ""
point R4 5,3 ""
point S1 7,0 ""
point S2 8,0 ""
point S3 8,7 ""
point S4 7,7 ""
polygon P1 P2 P3 P4
polygon Q1 Q2 Q3 Q4
polygon R1 R2 R3 R4
polygon S1 S2 S3 S4
label 1.5,4.5 "4"
label 3.5,6.5 "6"
label 5.5,3.5 "3"
label 7.5,7.5 "7"
label 1.5,-0.6 "Đi bộ"
label 3.5,-0.6 "Xe đạp"
label 5.5,-0.6 "Xe buýt"
label 7.5,-0.6 "Xe máy"
:::

Biểu đồ hình quạt tròn chia hình tròn thành các cung; cung ứng với một nhóm có số đo bằng tần số tương đối nhân với $360^\circ$.

:::example Số đo các cung của biểu đồ quạt tròn
Tính số đo các cung của biểu đồ hình quạt tròn biểu diễn bảng tần số cách đi học ở trên.

**Lời giải.** Cả hình tròn ứng với $100\%$, tức là $360^\circ$, nên mỗi $1\%$ ứng với $3{,}6^\circ$. Ta có:

$$\begin{aligned} \text{Đi bộ: } & 20\%\cdot360^\circ=72^\circ, \\ \text{Xe đạp: } & 30\%\cdot360^\circ=108^\circ, \\ \text{Xe buýt: } & 15\%\cdot360^\circ=54^\circ, \\ \text{Xe máy: } & 35\%\cdot360^\circ=126^\circ. \end{aligned}$$

Kiểm tra: $72+108+54+126=360$.

Vậy các cung có số đo lần lượt là $72^\circ$, $108^\circ$, $54^\circ$, $126^\circ$.
:::

Bây giờ ta xét dữ liệu thay đổi theo thời gian, nơi biểu đồ đoạn thẳng phát huy tác dụng.

:::example Tiền điện theo tháng
Giả sử một gia đình ghi lượng điện tiêu thụ (đơn vị: kWh) trong sáu tháng đầu năm: $180$; $210$; $260$; $290$; $270$; $230$. Vẽ biểu đồ đoạn thẳng và cho biết tháng nào dùng nhiều điện nhất, từ tháng $1$ đến tháng đó lượng điện tăng bao nhiêu kWh.

**Lời giải.** Ta lấy tháng làm trục ngang, lượng điện làm trục đứng, đánh dấu sáu điểm rồi nối các điểm liên tiếp bằng đoạn thẳng.

Ta được biểu đồ ở hình dưới. Điểm cao nhất ứng với tháng $4$ ($290$ kWh), và từ tháng $1$ đến tháng $4$ lượng điện tăng $290-180=110$ (kWh).

Vậy tháng $4$ dùng nhiều điện nhất và lượng điện tăng $110$ kWh so với tháng $1$.
:::

:::graph Lượng điện tiêu thụ sáu tháng đầu năm (kWh)
alt: Biểu đồ đoạn thẳng đi lên từ 180 ở tháng 1 đến đỉnh 290 ở tháng 4 rồi đi xuống 270 ở tháng 5 và 230 ở tháng 6
x: 0..7
y: 150..320
segment: (1, 180) (2, 210)
segment: (2, 210) (3, 260)
segment: (3, 260) (4, 290)
segment: (4, 290) (5, 270)
segment: (5, 270) (6, 230)
point: (1, 180) "180" below
point: (2, 210) "210" below
point: (3, 260) "260" above-left
point: (4, 290) "290" above
point: (5, 270) "270" above-right
point: (6, 230) "230" below
:::

:::warning Những sai lầm thường gặp
- **Coi mọi số là dữ liệu định lượng.** Sai: "số điện thoại là dữ liệu định lượng". Lí do sai: số điện thoại chỉ dùng để gọi tên, tính tổng hay trung bình không có nghĩa. Đúng: đó là dữ liệu định tính.
- **Tần số tương đối không cộng thành $100\%$.** Sai: $20\%+30\%+15\%+30\%=95\%$ (ghi nhầm một giá trị). Lí do sai: các nhóm đủ và không trùng nhau thì tổng phải bằng $100\%$. Đúng: tính lại, $20\%+30\%+15\%+35\%=100\%$.
- **Dùng biểu đồ hình quạt tròn cho dữ liệu theo thời gian.** Sai: vẽ nhiệt độ từng giờ bằng biểu đồ quạt tròn. Lí do sai: quạt tròn chỉ cho thấy tỉ lệ các phần của một tổng, không cho thấy xu hướng. Đúng: dùng biểu đồ đoạn thẳng.
:::

**Kết nối.** Bài này là điểm xuất phát của cả chương: bạn dùng lại tỉ số phần trăm ở lớp 6 để tính tần số tương đối. Bài sau, [phân tích số liệu thống kê dựa vào biểu đồ](lesson:analysing-charts), dạy bạn đọc biểu đồ để rút ra kết luận và phát hiện biểu đồ gây hiểu lầm.

## Thuật ngữ

:::terms
- dữ liệu | data
- thu thập dữ liệu | collecting data
- dữ liệu định tính | qualitative data
- dữ liệu định lượng | quantitative data
- bảng tần số | frequency table
- tần số | frequency
- tần số tương đối | relative frequency
- biểu đồ cột | bar chart
- biểu đồ cột kép | double bar chart
- biểu đồ hình quạt tròn | pie chart
- biểu đồ đoạn thẳng | line graph
:::

## Tóm tắt

- Dữ liệu được thu thập trực tiếp (quan sát, phiếu hỏi) hoặc gián tiếp (sách, báo, nguồn chính thức), và phải hợp lí.
- Dữ liệu định tính không phải số; dữ liệu định lượng là số mà phép tính trên nó có nghĩa.
- Tần số tương đối bằng tần số chia tổng số dữ liệu; tổng các tần số tương đối bằng $100\%$.
- Biểu đồ cột so sánh các nhóm, hình quạt tròn cho thấy tỉ lệ, đoạn thẳng cho thấy xu hướng theo thời gian.
- Số đo cung của biểu đồ quạt tròn bằng tần số tương đối nhân $360^\circ$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Cho biết mỗi dữ liệu sau là định tính hay định lượng:

a) Màu mắt của các bạn trong lớp.

b) Chiều cao (cm) của các bạn.

c) Số học sinh của mỗi lớp trong trường.

d) Tên các bài hát yêu thích.

::hint
**Kiến thức:** dữ liệu định lượng là số đo hoặc số đếm được.

**Gợi ý các bước:**
1. Hỏi: dữ liệu này có phải là số có ý nghĩa tính toán không?
2. Phân loại từng dữ liệu.

::solution
a) Màu mắt là tên gọi: định tính. b) Chiều cao là số đo: định lượng. c) Số học sinh là số đếm: định lượng. d) Tên bài hát: định tính.

Vậy a) và d) là định tính; b) và c) là định lượng.

**Đáp số.** a) định tính; b) định lượng; c) định lượng; d) định tính.
:::

:::exercise
Nêu cách thu thập dữ liệu (trực tiếp hay gián tiếp) phù hợp cho từng vấn đề:

a) Thời gian đi từ nhà đến trường của mỗi bạn trong lớp.

b) Lượng mưa trung bình hằng năm của một thành phố trong $10$ năm qua.

::hint
**Kiến thức:** thu thập trực tiếp khi tự đo hoặc hỏi được; gián tiếp khi dữ liệu đã được tổ chức khác ghi lại.

**Gợi ý các bước:**
1. Hỏi: ta có thể tự thu thập dữ liệu này không?
2. Nếu không, dữ liệu có thể lấy từ nguồn nào?

::solution
a) Ta hỏi hoặc phát phiếu cho từng bạn: thu thập trực tiếp.

b) Ta không thể quay ngược thời gian để đo, nên tra cứu từ số liệu của cơ quan khí tượng: thu thập gián tiếp.

Vậy a) trực tiếp; b) gián tiếp.

**Đáp số.** a) trực tiếp; b) gián tiếp.
:::

:::exercise
Số bạn nam của năm lớp 8 được ghi lại: $18$; $20$; $2{,}5$; $19$; $22$. Dữ liệu nào không hợp lí? Vì sao?

::hint
**Kiến thức:** số người phải là số tự nhiên.

**Gợi ý các bước:**
1. Hỏi: có thể có một nửa bạn không?
2. Chỉ ra giá trị không phù hợp.

::solution
Số bạn nam là số đếm nên phải là số tự nhiên. Ta thấy $2{,}5$ không là số tự nhiên nên không hợp lí; có thể bạn ghi nhầm ($25$ chẳng hạn).

Vậy giá trị $2{,}5$ không hợp lí.

**Đáp số.** $2{,}5$.
:::

:::exercise
Số anh chị em ruột của $20$ bạn được ghi lại: $1$, $2$, $0$, $1$, $1$, $3$, $2$, $1$, $0$, $2$, $1$, $1$, $2$, $0$, $1$, $2$, $1$, $0$, $1$, $2$. Lập bảng tần số và tần số tương đối.

::hint
**Kiến thức:** tần số là số lần xuất hiện; tần số tương đối bằng tần số chia $20$.

**Gợi ý các bước:**
1. Đếm số lần xuất hiện của $0$, $1$, $2$, $3$.
2. Chia cho $20$ và đổi ra phần trăm.

::solution
Ta đếm và chia cho $20$:

| Số anh chị em | $0$ | $1$ | $2$ | $3$ | Tổng |
|---|---|---|---|---|---|
| Tần số | $4$ | $9$ | $6$ | $1$ | $20$ |
| Tần số tương đối | $20\%$ | $45\%$ | $30\%$ | $5\%$ | $100\%$ |

Kiểm tra: $4+9+6+1=20$.

**Đáp số.** Tần số $4$; $9$; $6$; $1$, tần số tương đối $20\%$; $45\%$; $30\%$; $5\%$.
:::

:::exercise
Từ bảng tần số ở bài trước, hãy mô tả biểu đồ cột biểu diễn số anh chị em (chiều cao các cột và cột nào cao nhất).

::hint
**Kiến thức:** chiều cao cột bằng tần số.

**Gợi ý các bước:**
1. Mỗi giá trị $0$, $1$, $2$, $3$ ứng với một cột.
2. So sánh các tần số.

::solution
Các cột ứng với $0$, $1$, $2$, $3$ anh chị em có chiều cao lần lượt là $4$; $9$; $6$; $1$. Cột ứng với $1$ anh chị em cao nhất ($9$) và cột ứng với $3$ anh chị em thấp nhất ($1$).

Vậy hầu hết các bạn có $1$ anh chị em.

**Đáp số.** Chiều cao các cột: $4$; $9$; $6$; $1$.
:::

:::exercise
Khảo sát $40$ bạn về thể loại sách yêu thích: Truyện $16$ bạn, Khoa học $12$ bạn, Thơ $4$ bạn, Khác $8$ bạn. Tính tần số tương đối và số đo cung tương ứng của biểu đồ hình quạt tròn.

::hint
**Kiến thức:** số đo cung bằng tần số tương đối nhân $360^\circ$.

**Gợi ý các bước:**
1. Chia từng tần số cho $40$.
2. Nhân với $360^\circ$.

::solution
Ta có: Truyện $\dfrac{16}{40}=40\%$, cung $144^\circ$; Khoa học $\dfrac{12}{40}=30\%$, cung $108^\circ$; Thơ $\dfrac{4}{40}=10\%$, cung $36^\circ$; Khác $\dfrac{8}{40}=20\%$, cung $72^\circ$.

Kiểm tra: $144+108+36+72=360$.

**Đáp số.** $40\%$, $30\%$, $10\%$, $20\%$; cung $144^\circ$, $108^\circ$, $36^\circ$, $72^\circ$.
:::

:::exercise
Chọn loại biểu đồ (cột, cột kép, hình quạt tròn, đoạn thẳng) phù hợp nhất cho mỗi mục đích:

a) So sánh số học sinh của bốn lớp $8$.

b) Theo dõi nhiệt độ ngoài trời mỗi giờ trong một ngày.

c) Cho thấy phần trăm các khoản chi trong ngân sách của một gia đình.

d) So sánh số học sinh nam và nữ ở từng lớp trong bốn lớp.

::hint
**Kiến thức:** xem bảng các loại biểu đồ ở trên.

**Gợi ý các bước:**
1. Xác định mục đích: so sánh, tỉ lệ hay xu hướng?
2. Chọn biểu đồ tương ứng.

::solution
a) So sánh các nhóm: biểu đồ cột. b) Theo thời gian: biểu đồ đoạn thẳng. c) Tỉ lệ các phần trong một tổng: biểu đồ hình quạt tròn. d) So sánh hai tập dữ liệu trên cùng các nhóm: biểu đồ cột kép.

**Đáp số.** a) cột; b) đoạn thẳng; c) hình quạt tròn; d) cột kép.
:::

:::exercise
Một gia đình chi tiêu $15$ triệu đồng mỗi tháng (giả sử): ăn uống $40\%$, nhà ở $25\%$, học tập $15\%$, khoản khác $20\%$. Tính số tiền mỗi khoản và số đo cung của khoản "nhà ở" trong biểu đồ hình quạt tròn.

::hint
**Kiến thức:** số tiền bằng phần trăm nhân tổng; cung bằng phần trăm nhân $360^\circ$.

**Gợi ý các bước:**
1. Tính $15\cdot\dfrac{p}{100}$ cho từng khoản.
2. Tính $25\%\cdot360^\circ$.

::solution
Ta có: ăn uống $15\cdot0{,}4=6$ (triệu đồng); nhà ở $15\cdot0{,}25=3{,}75$ (triệu đồng); học tập $15\cdot0{,}15=2{,}25$ (triệu đồng); khác $15\cdot0{,}2=3$ (triệu đồng). Cung của nhà ở: $25\%\cdot360^\circ=90^\circ$.

Kiểm tra: $6+3{,}75+2{,}25+3=15$.

Vậy các khoản lần lượt là $6$; $3{,}75$; $2{,}25$; $3$ triệu đồng và cung "nhà ở" là $90^\circ$.

**Đáp số.** $6$; $3{,}75$; $2{,}25$; $3$ triệu đồng; $90^\circ$.
:::

:::exercise
Giả sử một bạn ghi lại số cốc nước uống mỗi ngày trong năm ngày: $6$; $8$; $5$; $8$; $7$. Lập bảng tần số của các giá trị và cho biết giá trị nào xuất hiện nhiều nhất.

::hint
**Kiến thức:** tần số là số lần xuất hiện của một giá trị.

**Gợi ý các bước:**
1. Liệt kê các giá trị khác nhau.
2. Đếm số lần mỗi giá trị xuất hiện.

::solution
Các giá trị khác nhau là $5$, $6$, $7$, $8$ với tần số lần lượt là $1$, $1$, $1$, $2$; tổng là $5$.

Vậy giá trị $8$ xuất hiện nhiều nhất ($2$ lần).

**Đáp số.** Tần số $1$; $1$; $1$; $2$; giá trị $8$.
:::

:::exercise Thử thách
Một khảo sát $50$ bạn về môn học yêu thích được biểu diễn bằng biểu đồ hình quạt tròn. Cung của môn Toán có số đo $108^\circ$; môn Tiếng Anh chiếm $24\%$; môn Khoa học có $10$ bạn; còn lại là môn khác.

a) Có bao nhiêu bạn chọn Toán?

b) Có bao nhiêu bạn chọn môn khác và chiếm bao nhiêu phần trăm?

::hint
**Kiến thức:** số bạn bằng $\dfrac{\text{số đo cung}}{360^\circ}\cdot50$ hoặc phần trăm nhân $50$.

**Gợi ý các bước:**
1. a) Tính tần số tương đối của Toán từ cung $108^\circ$.
2. b) Tìm số bạn của Tiếng Anh, rồi lấy $50$ trừ các nhóm đã biết.

::solution
a) Tần số tương đối của Toán là $\dfrac{108}{360}=30\%$, nên có $50\cdot0{,}3=15$ bạn chọn Toán.

b) Tiếng Anh có $50\cdot0{,}24=12$ bạn. Số bạn chọn môn khác là $50-15-12-10=13$, chiếm $\dfrac{13}{50}=26\%$.

Vậy có $15$ bạn chọn Toán và $13$ bạn chọn môn khác ($26\%$).

**Đáp số.** a) $15$ bạn. b) $13$ bạn, $26\%$.
:::

## Kiểm tra mini

:::quiz
::mc
Dữ liệu nào sau đây là dữ liệu định lượng?
A. Màu áo yêu thích.
B. Số anh chị em của mỗi bạn.
C. Tên môn học yêu thích.
D. Số điện thoại của mỗi bạn.
::key B
Số anh chị em là số đếm được. A và C là tên gọi, D là số chỉ để gọi tên nên là dữ liệu định tính.

::mc
Để theo dõi sự thay đổi nhiệt độ ngoài trời theo từng giờ trong ngày, nên dùng
A. bảng chỉ có tổng số.
B. biểu đồ hình quạt tròn.
C. biểu đồ đoạn thẳng.
D. biểu đồ tranh.
::key C
Biểu đồ đoạn thẳng cho thấy xu hướng theo thời gian. Biểu đồ hình quạt tròn chỉ cho thấy tỉ lệ các phần của một tổng.

::mc
Điểm kiểm tra (thang $10$) của năm bạn là $8$; $7{,}5$; $9$; $11$; $6$. Giá trị không hợp lí là
A. $7{,}5$.
B. $9$.
C. $6$.
D. $11$.
::key D
Điểm tối đa là $10$ nên $11$ không hợp lí; các giá trị còn lại nằm trong khoảng từ $0$ đến $10$.

::mc
Trong biểu đồ hình quạt tròn, một nhóm chiếm $25\%$. Số đo cung ứng với nhóm đó là
A. $90^\circ$.
B. $25^\circ$.
C. $180^\circ$.
D. $250^\circ$.
::key A
$25\%\cdot360^\circ=90^\circ$. A nhầm phần trăm với độ, D nhân với $10$.

::tf
Khảo sát $40$ bạn về môn thể thao yêu thích: Bóng đá $14$, Cầu lông $10$, Bóng rổ $6$, Bơi $6$, Khác $4$. Xét tính đúng sai của các mệnh đề sau:
a) Môn thể thao yêu thích là dữ liệu định lượng.
b) Tần số tương đối của Bóng đá là $35\%$.
c) Cung của Cầu lông trong biểu đồ hình quạt tròn là $90^\circ$.
d) Tổng các tần số tương đối bằng $100\%$.
::key S Đ Đ Đ
a) Sai: tên môn thể thao là dữ liệu định tính. b) Đúng: $\dfrac{14}{40}=35\%$. c) Đúng: $\dfrac{10}{40}\cdot360^\circ=90^\circ$. d) Đúng: các nhóm đủ và không trùng nhau.

::sa
Khảo sát $40$ bạn, có $14$ bạn chọn Bóng đá. Trong biểu đồ hình quạt tròn, cung của Bóng đá có số đo bao nhiêu độ?
::key 126
$\dfrac{14}{40}\cdot360^\circ=126^\circ$.

::sa
Một gia đình chi $15\%$ của $15$ triệu đồng cho học tập. Số tiền đó là bao nhiêu triệu đồng?
::key 2,25
$15\cdot0{,}15=2{,}25$ (triệu đồng).
:::
