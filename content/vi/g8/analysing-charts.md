---
title: Phân tích số liệu thống kê dựa vào biểu đồ
description: Đọc và so sánh số liệu trên biểu đồ, tính phần trăm thay đổi, nhận xét xu hướng và nhận ra biểu đồ gây hiểu lầm để rút ra kết luận đúng.
minutes: 25
---

:::goals
- Đọc được số liệu trên biểu đồ cột, cột kép, hình quạt tròn và đoạn thẳng.
- So sánh số liệu bằng hiệu và bằng tỉ số phần trăm; tính phần trăm tăng, giảm.
- Nhận xét xu hướng và rút ra kết luận từ biểu đồ.
- Nhận ra biểu đồ có thể gây hiểu lầm (ví dụ trục không bắt đầu từ $0$).
:::

Một quảng cáo viết: "Doanh thu quý này gấp ba lần quý trước!", kèm biểu đồ có một cột cao gấp ba cột kia. Nhưng con số thật chỉ là $52$ triệu đồng và $56$ triệu đồng. Biểu đồ nói thật hay đang đánh lừa mắt ta? Vẽ biểu đồ là một việc, đọc biểu đồ một cách tỉnh táo là việc khác, và đó là điều bài này rèn cho bạn.

## Cùng khám phá

Giả sử hai quán nước A và B ghi số ly bán được (đơn vị: nghìn ly) trong $5$ tháng. Quán A bán $20$; $24$; $28$; $32$; $36$. Quán B bán $30$; $31$; $29$; $32$; $30$. Ta vẽ hai đường trên cùng một biểu đồ.

:::graph Số ly bán được của hai quán nước (nghìn ly)
alt: Hai đường gấp khúc theo tháng từ 1 đến 5; quán A đi lên đều từ 20 đến 36, quán B dao động quanh 30
x: 0..6
y: 15..40
segment: (1, 20) (2, 24)
segment: (2, 24) (3, 28)
segment: (3, 28) (4, 32)
segment: (4, 32) (5, 36)
segment: (1, 30) (2, 31)
segment: (2, 31) (3, 29)
segment: (3, 29) (4, 32)
segment: (4, 32) (5, 30)
label: (5.3, 36) "A"
label: (5.3, 30) "B"
:::

Đường có nhãn A là quán A, đường có nhãn B là quán B. Ta thấy A đi lên đều, còn B gần như đứng yên. Tháng $1$ quán B bán nhiều hơn $10$ nghìn ly, nhưng tháng $5$ quán A lại hơn $6$ nghìn ly. Hai đường gặp nhau ở tháng $4$ với cùng $32$ nghìn ly. Ta có thể nói gì chắc chắn từ những quan sát này?

## Đọc và so sánh số liệu

Khi gặp một biểu đồ, bạn nên đi theo các bước sau.

:::note Các bước phân tích biểu đồ
1. Đọc **tiêu đề**, **đơn vị** và xem **trục** bắt đầu từ đâu.
2. Đọc các giá trị cần dùng (cột cao bao nhiêu, cung chiếm bao nhiêu phần trăm).
3. So sánh bằng **hiệu** (hơn kém bao nhiêu) hoặc bằng **tỉ số phần trăm** (bằng bao nhiêu phần của cái kia).
4. Nêu nhận xét hoặc kết luận, nói rõ dựa vào số liệu nào.
:::

Khi so sánh theo thời gian, ta thường dùng **phần trăm thay đổi**:
$$\text{phần trăm thay đổi}=\frac{\text{giá trị mới}-\text{giá trị cũ}}{\text{giá trị cũ}}\cdot100\%.$$
Kết quả dương là tăng, âm là giảm. Ta chia cho giá trị **cũ** vì ta muốn biết thay đổi so với mức ban đầu.

:::example Đọc biểu đồ hình quạt tròn
Biểu đồ hình quạt tròn cho biết bữa sáng ở căng tin của $200$ học sinh: bánh mì $45\%$, xôi $30\%$, phở $15\%$, món khác $10\%$. Tính số học sinh của mỗi nhóm. Nhóm nào đông gấp đôi nhóm ăn phở?

**Lời giải.** Số học sinh của mỗi nhóm bằng tỉ lệ phần trăm nhân với $200$:
$$200\cdot0{,}45=90,\quad 200\cdot0{,}3=60,\quad 200\cdot0{,}15=30,\quad 200\cdot0{,}1=20.$$
Ta thấy $60=2\cdot30$ nên nhóm ăn xôi đông gấp đôi nhóm ăn phở.

Vậy bánh mì $90$ bạn, xôi $60$ bạn, phở $30$ bạn, món khác $20$ bạn; nhóm ăn xôi đông gấp đôi nhóm ăn phở.
:::

:::example So sánh hai quán nước
Dựa vào biểu đồ ở phần khám phá, hãy tính: a) hiệu số ly bán được của A và B ở tháng $5$; b) phần trăm thay đổi của mỗi quán từ tháng $1$ đến tháng $5$.

**Lời giải.** a) Tháng $5$, quán A bán $36$ nghìn ly, quán B bán $30$ nghìn ly. Ta có $36-30=6$ (nghìn ly).

b) Quán A: $\dfrac{36-20}{20}\cdot100\%=80\%$. Quán B: $\dfrac{30-30}{30}\cdot100\%=0\%$.

Vậy tháng $5$ quán A bán hơn quán B $6$ nghìn ly; từ tháng $1$ đến tháng $5$ quán A tăng $80\%$ còn quán B không đổi.
:::

Biểu đồ cột kép đặt hai cột cạnh nhau cho từng nhóm, giúp so sánh hai tập dữ liệu.

:::diagram Xếp loại học lực của lớp 8A và 8B
alt: Biểu đồ cột kép; Giỏi có 12 bạn ở lớp 8A và 8 bạn ở lớp 8B, Khá có 20 và 22, Đạt có 8 và 10
point A1 1,0 ""
point A2 2,0 ""
point A3 2,12 ""
point A4 1,12 ""
point B1 2,0 ""
point B2 3,0 ""
point B3 3,8 ""
point B4 2,8 ""
point C1 4,0 ""
point C2 5,0 ""
point C3 5,20 ""
point C4 4,20 ""
point D1 5,0 ""
point D2 6,0 ""
point D3 6,22 ""
point D4 5,22 ""
point E1 7,0 ""
point E2 8,0 ""
point E3 8,8 ""
point E4 7,8 ""
point F1 8,0 ""
point F2 9,0 ""
point F3 9,10 ""
point F4 8,10 ""
polygon A1 A2 A3 A4
polygon B1 B2 B3 B4
polygon C1 C2 C3 C4
polygon D1 D2 D3 D4
polygon E1 E2 E3 E4
polygon F1 F2 F3 F4
label 1.5,13.5 "12"
label 2.5,9.5 "8"
label 4.5,21.5 "20"
label 5.5,23.5 "22"
label 7.5,9.5 "8"
label 8.5,11.5 "10"
label 1.5,-1.5 "8A"
label 2.5,-1.5 "8B"
label 4.5,-1.5 "8A"
label 5.5,-1.5 "8B"
label 7.5,-1.5 "8A"
label 8.5,-1.5 "8B"
label 2,-3 "Giỏi"
label 5,-3 "Khá"
label 8,-3 "Đạt"
:::

:::example Đọc biểu đồ cột kép
Mỗi lớp 8A và 8B có $40$ học sinh. Dựa vào biểu đồ trên, hãy so sánh tỉ lệ học sinh giỏi và học sinh khá của hai lớp.

**Lời giải.** Hai lớp có cùng sĩ số nên so sánh số bạn hay tỉ lệ đều được; ta tính tỉ lệ cho rõ.

Học sinh giỏi: lớp 8A có $\dfrac{12}{40}=30\%$, lớp 8B có $\dfrac{8}{40}=20\%$. Học sinh khá: lớp 8A có $\dfrac{20}{40}=50\%$, lớp 8B có $\dfrac{22}{40}=55\%$.

Vậy lớp 8A có tỉ lệ học sinh giỏi cao hơn ($30\%$ so với $20\%$), còn lớp 8B có tỉ lệ học sinh khá cao hơn ($55\%$ so với $50\%$).
:::

## Biểu đồ có thể gây hiểu lầm

Mắt ta so sánh **chiều cao cột**, nên nếu trục đứng không bắt đầu từ $0$, sự chênh lệch trông lớn hơn thực tế rất nhiều. Hãy quay lại quảng cáo ở đầu bài.

:::diagram Doanh thu hai quý (trục đứng bắt đầu từ 50)
alt: Biểu đồ cột có hai cột; cột quý 1 ghi 52 rất thấp, cột quý 2 ghi 56 cao gấp ba lần vì trục đứng bắt đầu từ 50 chứ không phải từ 0
point A1 1,0 ""
point A2 2,0 ""
point A3 2,2 ""
point A4 1,2 ""
point B1 3,0 ""
point B2 4,0 ""
point B3 4,6 ""
point B4 3,6 ""
polygon A1 A2 A3 A4
polygon B1 B2 B3 B4
label 1.5,2.7 "52"
label 3.5,6.7 "56"
label 0.2,0 "50"
label 1.5,-0.7 "Quý 1"
label 3.5,-0.7 "Quý 2"
:::

:::example Phát hiện biểu đồ gây hiểu lầm
Doanh thu quý 1 là $52$ triệu đồng, quý 2 là $56$ triệu đồng. Trong biểu đồ trên, trục đứng bắt đầu từ $50$. Cột quý 2 trông cao gấp mấy lần cột quý 1? Doanh thu thực sự tăng bao nhiêu phần trăm?

**Lời giải.** Chiều cao cột được tính từ mốc $50$: cột quý 1 cao $52-50=2$, cột quý 2 cao $56-50=6$. Ta có $\dfrac62=3$ nên cột quý 2 trông cao gấp ba lần.

Phần trăm tăng thật sự là $\dfrac{56-52}{52}\cdot100\%\approx7{,}7\%$.

Vậy biểu đồ làm ta tưởng doanh thu gấp ba lần, trong khi thực tế chỉ tăng khoảng $7{,}7\%$.
:::

Hai cách khác cũng hay gây hiểu lầm: chia thang đo không đều trên một trục, và chỉ chọn một khoảng thời gian có lợi cho kết luận.

Ta kết thúc bằng một bài toán đi đủ bốn bước, dùng lại số liệu tiền điện ở bài trước.

:::example Lượng điện giảm bao nhiêu phần trăm?
Một gia đình dùng $290$ kWh điện ở tháng $4$ và $230$ kWh ở tháng $6$ (giả sử). Lượng điện giảm bao nhiêu phần trăm? (làm tròn đến hàng phần mười)

**Lời giải.**

*Hiểu đề.* Có hai giá trị: cũ ($290$) và mới ($230$); cần tìm phần trăm giảm.

*Tìm cách giải.* Dùng công thức phần trăm thay đổi, chia cho giá trị cũ.

*Giải.* Ta có $\dfrac{230-290}{290}\cdot100\%=\dfrac{-60}{290}\cdot100\%\approx-20{,}7\%$.

*Nhìn lại.* Dấu âm cho biết lượng điện giảm. Nếu chia cho giá trị mới $230$ ta được $26{,}1\%$, sai vì phần trăm thay đổi luôn so với mức ban đầu. Kết quả hợp lí: $20\%$ của $290$ là $58$, gần với mức giảm thật là $60$.

Vậy lượng điện giảm khoảng $20{,}7\%$.
:::

:::warning Những sai lầm thường gặp
- **So sánh số lượng khi tổng khác nhau.** Sai: "lớp A có $12$ bạn giỏi, lớp B có $15$ bạn giỏi nên lớp B giỏi hơn" khi lớp A có $40$ bạn, lớp B có $60$ bạn. Lí do sai: $\dfrac{12}{40}=30\%$ còn $\dfrac{15}{60}=25\%$. Đúng: so sánh bằng tỉ lệ phần trăm.
- **Chia cho giá trị mới khi tính phần trăm tăng.** Sai: từ $52$ lên $56$, tăng $\dfrac{4}{56}\approx7{,}1\%$. Lí do sai: phần trăm thay đổi so với mức ban đầu. Đúng: $\dfrac{4}{52}\approx7{,}7\%$.
- **Không nhìn gốc của trục.** Sai: kết luận "doanh thu tăng gấp ba" chỉ vì cột cao gấp ba. Lí do sai: trục bắt đầu từ $50$ chứ không phải $0$. Đúng: đọc giá trị ghi trên cột rồi mới so sánh.
:::

**Kết nối.** Bài này dùng lại tần số tương đối và các loại biểu đồ của bài [thu thập và phân loại dữ liệu](lesson:g8-collecting-classifying-data), và tỉ số phần trăm của các lớp dưới. Kĩ năng đọc biểu đồ có ích trong mọi môn học và khi bạn đọc tin tức: hãy luôn hỏi "số liệu thật là bao nhiêu?" trước khi tin vào hình dáng của biểu đồ.

## Thuật ngữ

:::terms
- phân tích số liệu | data analysis
- xu hướng | trend
- trục | axis
- phần trăm thay đổi | percentage change
- phần trăm tăng | percentage increase
- phần trăm giảm | percentage decrease
- biểu đồ gây hiểu lầm | misleading chart
- chênh lệch | difference
- so sánh | compare
:::

## Tóm tắt

- Khi đọc biểu đồ: xem tiêu đề, đơn vị, gốc của trục; đọc giá trị; so sánh; rồi nêu kết luận có dẫn số liệu.
- So sánh bằng hiệu cho biết hơn kém bao nhiêu; so sánh bằng phần trăm cho biết hơn kém so với mức nào, nhất là khi tổng khác nhau.
- Phần trăm thay đổi $=\dfrac{\text{mới}-\text{cũ}}{\text{cũ}}\cdot100\%$: dương là tăng, âm là giảm.
- Trục đứng không bắt đầu từ $0$ làm sự chênh lệch trông lớn hơn thực tế.
- Kết luận chỉ nên dựa vào những gì số liệu cho thấy.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Bạn hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Biểu đồ hình quạt tròn cho biết $150$ học sinh chọn câu lạc bộ: Bóng đá $40\%$, Âm nhạc $30\%$, Mỹ thuật $20\%$, Cờ vua $10\%$. Tính số học sinh của mỗi câu lạc bộ.

::hint
**Kiến thức:** số học sinh bằng tỉ lệ phần trăm nhân với tổng.

**Gợi ý các bước:**
1. Đổi phần trăm ra số thập phân.
2. Nhân với $150$.

::solution
Ta có $150\cdot0{,}4=60$; $150\cdot0{,}3=45$; $150\cdot0{,}2=30$; $150\cdot0{,}1=15$.

Vậy Bóng đá $60$ bạn, Âm nhạc $45$ bạn, Mỹ thuật $30$ bạn, Cờ vua $15$ bạn.

**Đáp số.** $60$; $45$; $30$; $15$ bạn.
:::

:::exercise
Nhiệt độ (°C) lúc $6$ giờ, $9$ giờ, $12$ giờ, $15$ giờ, $18$ giờ lần lượt là $24$; $27$; $31$; $33$; $29$. Nhiệt độ cao nhất là bao nhiêu? Trong khoảng $3$ giờ liên tiếp nào nhiệt độ tăng nhiều nhất?

::hint
**Kiến thức:** so sánh bằng hiệu hai giá trị liên tiếp.

**Gợi ý các bước:**
1. Tìm giá trị lớn nhất.
2. Tính hiệu của từng cặp giá trị liên tiếp.

::solution
Nhiệt độ cao nhất là $33^\circ$C lúc $15$ giờ. Các hiệu liên tiếp là $27-24=3$; $31-27=4$; $33-31=2$; $29-33=-4$. Nhiệt độ tăng nhiều nhất là $4^\circ$C, từ $9$ giờ đến $12$ giờ.

Vậy nhiệt độ cao nhất là $33^\circ$C và tăng nhiều nhất trong khoảng $9$ giờ đến $12$ giờ.

**Đáp số.** $33^\circ$C; từ $9$ giờ đến $12$ giờ.
:::

:::exercise
Số thành viên của một câu lạc bộ tăng từ $40$ lên $52$ người. Tính phần trăm tăng.

::hint
**Kiến thức:** phần trăm thay đổi $=\dfrac{\text{mới}-\text{cũ}}{\text{cũ}}\cdot100\%$.

**Gợi ý các bước:**
1. Tính hiệu $52-40$.
2. Chia cho giá trị cũ $40$.

::solution
Ta có $\dfrac{52-40}{40}\cdot100\%=\dfrac{12}{40}\cdot100\%=30\%$.

Vậy số thành viên tăng $30\%$.

**Đáp số.** $30\%$.
:::

:::exercise
Lớp 8C có $50$ học sinh, trong đó $15$ bạn đạt loại Tốt. Lớp 8D có $40$ học sinh, trong đó $12$ bạn đạt loại Tốt. Lớp nào có tỉ lệ học sinh loại Tốt cao hơn?

::hint
**Kiến thức:** khi sĩ số khác nhau, so sánh bằng tỉ lệ phần trăm.

**Gợi ý các bước:**
1. Tính tỉ lệ của mỗi lớp.
2. So sánh hai tỉ lệ.

::solution
Lớp 8C có $\dfrac{15}{50}=30\%$; lớp 8D có $\dfrac{12}{40}=30\%$. Hai tỉ lệ bằng nhau.

Vậy hai lớp có tỉ lệ học sinh loại Tốt bằng nhau ($30\%$), dù số bạn khác nhau.

**Đáp số.** Bằng nhau ($30\%$).
:::

:::exercise
Giá của hai sản phẩm là $18$ nghìn đồng và $20$ nghìn đồng. Một biểu đồ cột có trục đứng bắt đầu từ $16$ nghìn đồng. Cột thứ hai trông cao gấp mấy lần cột thứ nhất? Giá thật sự chênh lệch bao nhiêu phần trăm so với sản phẩm thứ nhất (làm tròn đến hàng phần mười)?

::hint
**Kiến thức:** chiều cao cột được tính từ gốc của trục.

**Gợi ý các bước:**
1. Tính chiều cao hai cột so với mốc $16$.
2. Tính $\dfrac{20-18}{18}\cdot100\%$.

::solution
Chiều cao hai cột là $18-16=2$ và $20-16=4$. Ta có $\dfrac42=2$ nên cột thứ hai trông cao gấp $2$ lần. Giá thật sự chênh $\dfrac{20-18}{18}\cdot100\%\approx11{,}1\%$.

Vậy biểu đồ làm ta tưởng giá gấp đôi, trong khi thực tế chỉ chênh khoảng $11{,}1\%$.

**Đáp số.** $2$ lần; $11{,}1\%$.
:::

:::exercise
Giả sử lượng mưa (mm) ở một địa phương các tháng $6$, $7$, $8$, $9$ lần lượt là $100$; $180$; $250$; $200$. Tính phần trăm tăng từ tháng $6$ đến tháng $8$ và phần trăm giảm từ tháng $8$ sang tháng $9$.

::hint
**Kiến thức:** phần trăm thay đổi $=\dfrac{\text{mới}-\text{cũ}}{\text{cũ}}\cdot100\%$.

**Gợi ý các bước:**
1. Từ tháng $6$ đến tháng $8$: cũ là $100$, mới là $250$.
2. Từ tháng $8$ sang tháng $9$: cũ là $250$, mới là $200$.

::solution
Từ tháng $6$ đến tháng $8$: $\dfrac{250-100}{100}\cdot100\%=150\%$. Từ tháng $8$ sang tháng $9$: $\dfrac{200-250}{250}\cdot100\%=-20\%$.

Vậy lượng mưa tăng $150\%$ rồi giảm $20\%$.

**Đáp số.** Tăng $150\%$; giảm $20\%$.
:::

:::exercise
Khảo sát $25$ bạn về môn học yêu thích: Toán $10$ bạn, Văn $5$ bạn, Tiếng Anh $5$ bạn, môn khác $5$ bạn. Tính tần số tương đối và số đo cung của mỗi môn trong biểu đồ hình quạt tròn.

::hint
**Kiến thức:** số đo cung bằng tần số tương đối nhân $360^\circ$.

**Gợi ý các bước:**
1. Chia mỗi tần số cho $25$.
2. Nhân với $360^\circ$.

::solution
Toán: $\dfrac{10}{25}=40\%$, cung $144^\circ$. Mỗi môn còn lại: $\dfrac{5}{25}=20\%$, cung $72^\circ$.

Kiểm tra: $144+3\cdot72=360$.

**Đáp số.** $40\%$, $20\%$, $20\%$, $20\%$; cung $144^\circ$, $72^\circ$, $72^\circ$, $72^\circ$.
:::

:::exercise
Giả sử hóa đơn tiền điện của một gia đình là $600\,000$ đồng, được chia theo thiết bị: điều hoà $45\%$, tủ lạnh $20\%$, đèn $15\%$, thiết bị khác $20\%$. Tính số tiền mỗi khoản. Nếu gia đình giảm $20\%$ phần điện của điều hoà thì tiết kiệm được bao nhiêu tiền?

::hint
**Kiến thức:** số tiền bằng phần trăm nhân tổng; giảm $20\%$ là lấy $20\%$ của khoản đó.

**Gợi ý các bước:**
1. Tính $600\,000\cdot\dfrac{p}{100}$ cho từng khoản.
2. Tính $20\%$ của khoản điều hoà.

::solution
Ta có: điều hoà $600\,000\cdot0{,}45=270\,000$; tủ lạnh $120\,000$; đèn $90\,000$; khác $120\,000$ (đồng). Số tiền tiết kiệm là $270\,000\cdot0{,}2=54\,000$ (đồng).

Kiểm tra: $270\,000+120\,000+90\,000+120\,000=600\,000$.

Vậy gia đình tiết kiệm được $54\,000$ đồng.

**Đáp số.** $270\,000$; $120\,000$; $90\,000$; $120\,000$ đồng; tiết kiệm $54\,000$ đồng.
:::

:::exercise Thử thách
Doanh thu của cửa hàng A tăng từ $100$ lên $120$ triệu đồng, của cửa hàng B tăng từ $400$ lên $440$ triệu đồng. Cửa hàng nào tăng nhiều hơn tính theo số tiền? Cửa hàng nào tăng nhanh hơn tính theo phần trăm? Vì sao hai câu trả lời khác nhau?

::hint
**Kiến thức:** hiệu cho biết tăng bao nhiêu tiền; phần trăm cho biết tăng so với mức ban đầu.

**Gợi ý các bước:**
1. Tính mức tăng của mỗi cửa hàng.
2. Tính phần trăm tăng của mỗi cửa hàng rồi so sánh.

::solution
Cửa hàng A tăng $120-100=20$ (triệu đồng); cửa hàng B tăng $440-400=40$ (triệu đồng), nên B tăng nhiều tiền hơn. Về phần trăm, A tăng $\dfrac{20}{100}=20\%$ còn B tăng $\dfrac{40}{400}=10\%$, nên A tăng nhanh hơn.

Hai kết luận khác nhau vì B xuất phát từ mức doanh thu lớn hơn nhiều: cùng tăng $1$ triệu đồng thì B tăng ít hơn về phần trăm.

Vậy B tăng nhiều tiền hơn, A tăng nhanh hơn.

**Đáp số.** B tăng $40$ triệu đồng, A tăng nhanh hơn ($20\%$ so với $10\%$).
:::

## Kiểm tra mini

:::quiz
::mc
Doanh thu tăng từ $40$ lên $46$ triệu đồng. Phần trăm tăng là
A. $15\%$.
B. $13\%$.
C. $115\%$.
D. $6\%$.
::key A
$\dfrac{46-40}{40}\cdot100\%=15\%$. A lấy hiệu $6$ làm phần trăm, B chia cho giá trị mới ($\dfrac{6}{46}\approx13\%$), C là tỉ số $\dfrac{46}{40}$.

::mc
Biểu đồ hình quạt tròn cho thấy $35\%$ trong $200$ học sinh chọn môn bơi. Số học sinh chọn bơi là
A. $35$.
B. $70$.
C. $5{,}7$.
D. $165$.
::key B
$200\cdot0{,}35=70$. A nhầm phần trăm với số bạn, C chia $200$ cho $35$ thay vì nhân, D là số bạn không chọn bơi.

::mc
Biểu đồ cột có trục đứng bắt đầu từ một giá trị lớn hơn $0$ có thể gây hiểu lầm vì
A. không đọc được giá trị trên cột.
B. các cột trở nên bằng nhau.
C. sự chênh lệch giữa các cột trông lớn hơn thực tế.
D. tổng các giá trị bị thay đổi.
::key C
Chiều cao cột tính từ gốc của trục, nên hiệu nhỏ trông như chênh lệch lớn. Giá trị và tổng không đổi.

::mc
Lớp A có $9$ học sinh giỏi trong $30$ bạn, lớp B có $12$ học sinh giỏi trong $48$ bạn. Khẳng định nào đúng?
A. Không thể so sánh.
B. Lớp B có tỉ lệ học sinh giỏi cao hơn, vì $12>9$.
C. Hai lớp có tỉ lệ bằng nhau.
D. Lớp A có tỉ lệ học sinh giỏi cao hơn, vì $30\%>25\%$.
::key D
$\dfrac{9}{30}=30\%$ và $\dfrac{12}{48}=25\%$. B so sánh số bạn khi sĩ số khác nhau.

::tf
Số ly bán được (nghìn ly) trong $5$ tháng của quán A là $20$; $24$; $28$; $32$; $36$ và của quán B là $30$; $31$; $29$; $32$; $30$. Xét tính đúng sai của các mệnh đề sau:
a) Ở tháng $3$, quán A bán nhiều hơn quán B.
b) Ở tháng $4$, hai quán bán bằng nhau.
c) Số ly bán được của quán B tăng liên tục qua các tháng.
d) Ở tháng $5$, quán A bán nhiều hơn quán B $6$ nghìn ly.
::key S Đ S Đ
a) Sai: $28<29$. b) Đúng: cùng $32$. c) Sai: tháng $3$ giảm từ $31$ xuống $29$. d) Đúng: $36-30=6$.

::sa
Lượng mưa tăng từ $100$ mm lên $250$ mm. Phần trăm tăng là bao nhiêu?
::key 150
$\dfrac{250-100}{100}\cdot100\%=150\%$.

::sa
Lượng điện giảm từ $290$ kWh xuống $230$ kWh. Phần trăm giảm là bao nhiêu (làm tròn đến hàng phần mười, bỏ dấu âm)?
::key 20,7
$\dfrac{290-230}{290}\cdot100\%\approx20{,}7\%$.
:::
