---
title: Biểu đồ cột. Biểu đồ cột kép
description: Đọc và vẽ biểu đồ cột, biểu đồ cột kép; rút ra nhận xét, so sánh hai bộ dữ liệu và nhận ra biểu đồ dễ gây hiểu lầm.
minutes: 30
---

:::goals
- Đọc được số liệu trên biểu đồ cột và biểu đồ cột kép.
- Vẽ được biểu đồ cột từ một bảng thống kê.
- Rút ra được nhận xét: giá trị lớn nhất, nhỏ nhất, tổng, chênh lệch, tỉ số phần trăm.
- Dùng biểu đồ cột kép để so sánh hai bộ dữ liệu, và nhận ra biểu đồ có thể gây hiểu lầm.
:::

Ở bài trước, lớp 6A đã có biểu đồ tranh về môn thể thao yêu thích. Biểu đồ tranh rất dễ nhìn, nhưng nó có một nhược điểm: khi số liệu là $13$ hay $17$, ta phải vẽ những phần biểu tượng lắt nhắt, khó đọc chính xác. Còn khi muốn so sánh lớp 6A với lớp 6B, hai biểu đồ tranh đặt cạnh nhau cũng không dễ nhìn ra chênh lệch.

Biểu đồ cột giải quyết cả hai chuyện. Mỗi giá trị là một cột, cột cao hay thấp đọc được chính xác nhờ một trục chia vạch. Và khi đặt hai cột cạnh nhau cho hai lớp, ta có biểu đồ cột kép: nhìn một lần là thấy ngay lớp nào hơn ở môn nào.

## Biểu đồ cột

Một biểu đồ cột gồm:

- **Trục ngang**: ghi tên các đối tượng (các câu lạc bộ, các lớp, các tháng…).
- **Trục đứng**: chia vạch đều, ghi số liệu, bắt đầu từ $0$, kèm đơn vị.
- Mỗi đối tượng ứng với **một cột** hình chữ nhật; các cột có độ rộng bằng nhau, cách đều nhau; **chiều cao** của cột cho biết số liệu.

:::diagram Số học sinh tham gia các câu lạc bộ của trường
alt: Biểu đồ cột năm cột: Toán 12, Tiếng Anh 18, Bóng đá 24, Mĩ thuật 9, Âm nhạc 15 học sinh; trục đứng chia vạch 6, 12, 18, 24
point O 0,0 ""
point XE 10.6,0 ""
point YE 0,8.8 ""
segment O XE
segment O YE
label -0.5,0 "0"
point G6a 0,2 ""
point G6b 10.6,2 ""
segment G6a G6b dashed
label -0.5,2 "6"
point G12a 0,4 ""
point G12b 10.6,4 ""
segment G12a G12b dashed
label -0.5,4 "12"
point G18a 0,6 ""
point G18b 10.6,6 ""
segment G18a G18b dashed
label -0.5,6 "18"
point G24a 0,8 ""
point G24b 10.6,8 ""
segment G24a G24b dashed
label -0.5,8 "24"
point B0a 0.8,0 ""
point B0b 2,0 ""
point B0c 2,4 ""
point B0d 0.8,4 ""
polygon B0a B0b B0c B0d
segment B0a B0d
segment B0d B0c
segment B0c B0b
label 1.4,4.4 "12"
label 1.4,-0.6 "Toán"
point B1a 2.8,0 ""
point B1b 4,0 ""
point B1c 4,6 ""
point B1d 2.8,6 ""
polygon B1a B1b B1c B1d
segment B1a B1d
segment B1d B1c
segment B1c B1b
label 3.4,6.4 "18"
label 3.4,-1.3 "Tiếng Anh"
point B2a 4.8,0 ""
point B2b 6,0 ""
point B2c 6,8 ""
point B2d 4.8,8 ""
polygon B2a B2b B2c B2d
segment B2a B2d
segment B2d B2c
segment B2c B2b
label 5.4,8.4 "24"
label 5.4,-0.6 "Bóng đá"
point B3a 6.8,0 ""
point B3b 8,0 ""
point B3c 8,3 ""
point B3d 6.8,3 ""
polygon B3a B3b B3c B3d
segment B3a B3d
segment B3d B3c
segment B3c B3b
label 7.4,3.4 "9"
label 7.4,-1.3 "Mĩ thuật"
point B4a 8.8,0 ""
point B4b 10,0 ""
point B4c 10,5 ""
point B4d 8.8,5 ""
polygon B4a B4b B4c B4d
segment B4a B4d
segment B4d B4c
segment B4c B4b
label 9.4,5.4 "15"
label 9.4,-0.6 "Âm nhạc"
label 0.3,9.2 "Số học sinh"
:::

:::tip Các bước vẽ biểu đồ cột
1. Vẽ trục ngang và trục đứng vuông góc với nhau.
2. Trên trục ngang, ghi tên các đối tượng, cách đều nhau.
3. Trên trục đứng, chọn khoảng chia phù hợp với số liệu (bắt đầu từ $0$) và ghi đơn vị.
4. Vẽ các cột có chiều cao bằng số liệu, độ rộng bằng nhau; ghi số liệu trên đầu mỗi cột.
5. Ghi tên biểu đồ.
:::

## Biểu đồ cột kép

Khi muốn so sánh **hai bộ dữ liệu** về cùng các đối tượng, ta vẽ hai cột cạnh nhau cho mỗi đối tượng. Hai cột được tô khác nhau, và phải có **chú giải** cho biết mỗi kiểu cột ứng với bộ dữ liệu nào. Đó là **biểu đồ cột kép**.

:::diagram Môn thể thao yêu thích của học sinh hai lớp 6A và 6B
alt: Biểu đồ cột kép bốn môn, mỗi môn hai cột: Bóng đá 6A 15, 6B 12; Cầu lông 6A 10, 6B 14; Bơi 6A 5, 6B 8; Bóng rổ 6A 10, 6B 6; cột tô màu là lớp 6A, cột để trắng là lớp 6B
point O 0,0 ""
point XE 10.2,0 ""
point YE 0,8.8 ""
segment O XE
segment O YE
label -0.5,0 "0"
point G4a 0,2 ""
point G4b 10.2,2 ""
segment G4a G4b dashed
label -0.5,2 "4"
point G8a 0,4 ""
point G8b 10.2,4 ""
segment G8a G8b dashed
label -0.5,4 "8"
point G12a 0,6 ""
point G12b 10.2,6 ""
segment G12a G12b dashed
label -0.5,6 "12"
point G16a 0,8 ""
point G16b 10.2,8 ""
segment G16a G16b dashed
label -0.5,8 "16"
point D00a 0.8,0 ""
point D00b 1.6,0 ""
point D00c 1.6,7.5 ""
point D00d 0.8,7.5 ""
polygon D00a D00b D00c D00d
segment D00a D00d
segment D00d D00c
segment D00c D00b
label 1.2,7.9 "15"
point D01a 1.6,0 ""
point D01b 2.4,0 ""
point D01c 2.4,6 ""
point D01d 1.6,6 ""
segment D01a D01d
segment D01d D01c
segment D01c D01b
label 2,6.4 "12"
label 1.6,-0.6 "Bóng đá"
point D10a 3.2,0 ""
point D10b 4,0 ""
point D10c 4,5 ""
point D10d 3.2,5 ""
polygon D10a D10b D10c D10d
segment D10a D10d
segment D10d D10c
segment D10c D10b
label 3.6,5.4 "10"
point D11a 4,0 ""
point D11b 4.8,0 ""
point D11c 4.8,7 ""
point D11d 4,7 ""
segment D11a D11d
segment D11d D11c
segment D11c D11b
label 4.4,7.4 "14"
label 4,-1.3 "Cầu lông"
point D20a 5.6,0 ""
point D20b 6.4,0 ""
point D20c 6.4,2.5 ""
point D20d 5.6,2.5 ""
polygon D20a D20b D20c D20d
segment D20a D20d
segment D20d D20c
segment D20c D20b
label 6,2.9 "5"
point D21a 6.4,0 ""
point D21b 7.2,0 ""
point D21c 7.2,4 ""
point D21d 6.4,4 ""
segment D21a D21d
segment D21d D21c
segment D21c D21b
label 6.8,4.4 "8"
label 6.4,-0.6 "Bơi"
point D30a 8,0 ""
point D30b 8.8,0 ""
point D30c 8.8,5 ""
point D30d 8,5 ""
polygon D30a D30b D30c D30d
segment D30a D30d
segment D30d D30c
segment D30c D30b
label 8.4,5.4 "10"
point D31a 8.8,0 ""
point D31b 9.6,0 ""
point D31c 9.6,3 ""
point D31d 8.8,3 ""
segment D31a D31d
segment D31d D31c
segment D31c D31b
label 9.2,3.4 "6"
label 8.8,-1.3 "Bóng rổ"
point L1a 1,9.6 ""
point L1b 1.6,9.6 ""
point L1c 1.6,10.1 ""
point L1d 1,10.1 ""
polygon L1a L1b L1c L1d
segment L1a L1b
segment L1b L1c
segment L1c L1d
segment L1d L1a
label 2.6,9.85 "6A"
point L2a 5,9.6 ""
point L2b 5.6,9.6 ""
point L2c 5.6,10.1 ""
point L2d 5,10.1 ""
segment L2a L2b
segment L2b L2c
segment L2c L2d
segment L2d L2a
label 6.6,9.85 "6B"
label 0.3,8.9 "Số học sinh"
:::

Trong biểu đồ trên, cột tô màu là lớp 6A, cột để trắng là lớp 6B. Nhìn từng cặp cột, ta thấy ngay ở môn nào lớp nào có nhiều bạn yêu thích hơn.

## Ví dụ

Ta bắt đầu bằng việc đọc biểu đồ cột.

:::example Đọc biểu đồ cột
Quan sát biểu đồ "Số học sinh tham gia các câu lạc bộ của trường".

a) Mỗi câu lạc bộ có bao nhiêu học sinh tham gia?

b) Câu lạc bộ nào đông nhất, câu lạc bộ nào ít nhất?

c) Có tất cả bao nhiêu lượt học sinh tham gia năm câu lạc bộ?

**Lời giải.**

a) Đọc số liệu trên đầu mỗi cột: Toán $12$; Tiếng Anh $18$; Bóng đá $24$; Mĩ thuật $9$; Âm nhạc $15$ học sinh.

b) Cột Bóng đá cao nhất ($24$), cột Mĩ thuật thấp nhất ($9$). Vậy câu lạc bộ Bóng đá đông nhất, câu lạc bộ Mĩ thuật ít nhất.

c) Tổng số lượt học sinh tham gia là
$$12+18+24+9+15=78.$$

Vậy a) như trên; b) Bóng đá đông nhất, Mĩ thuật ít nhất; c) $78$ lượt học sinh.
:::

Từ biểu đồ, ta còn rút ra được những so sánh khác.

:::example So sánh trên biểu đồ cột
Theo biểu đồ "Số học sinh tham gia các câu lạc bộ của trường":

a) Câu lạc bộ Bóng đá nhiều hơn câu lạc bộ Mĩ thuật bao nhiêu học sinh?

b) Số học sinh câu lạc bộ Bóng đá gấp mấy lần số học sinh câu lạc bộ Toán?

**Lời giải.**

a) Câu lạc bộ Bóng đá nhiều hơn câu lạc bộ Mĩ thuật
$$24-9=15\ (\text{học sinh}).$$

b) Ta có $24:12=2$, nên số học sinh câu lạc bộ Bóng đá gấp $2$ lần số học sinh câu lạc bộ Toán.

Vậy a) $15$ học sinh; b) gấp $2$ lần.

**Nhận xét.** Trên biểu đồ, cột Bóng đá cũng cao đúng gấp đôi cột Toán. Biểu đồ vẽ đúng thì tỉ lệ chiều cao các cột phản ánh đúng tỉ lệ các số liệu.
:::

Đọc biểu đồ cột kép là đọc từng cặp cột.

:::example Đọc biểu đồ cột kép
Quan sát biểu đồ "Môn thể thao yêu thích của học sinh hai lớp 6A và 6B".

a) Ở những môn nào, lớp 6B có nhiều bạn yêu thích hơn lớp 6A?

b) Mỗi lớp có bao nhiêu học sinh (mỗi bạn chọn đúng một môn)?

**Lời giải.**

a) So sánh từng cặp cột:

Bóng đá: 6A có $15$, 6B có $12$, nên 6A nhiều hơn.

Cầu lông: 6A có $10$, 6B có $14$, nên 6B nhiều hơn.

Bơi: 6A có $5$, 6B có $8$, nên 6B nhiều hơn.

Bóng rổ: 6A có $10$, 6B có $6$, nên 6A nhiều hơn.

b) Lớp 6A có $15+10+5+10=40$ học sinh. Lớp 6B có $12+14+8+6=40$ học sinh.

Vậy a) cầu lông và bơi; b) mỗi lớp có $40$ học sinh.
:::

Vẽ biểu đồ cột đòi hỏi chọn khoảng chia hợp lí.

:::example Vẽ biểu đồ cột
Số sách bạn An đọc trong năm tháng như sau: tháng Một $4$ quyển, tháng Hai $2$ quyển, tháng Ba $5$ quyển, tháng Tư $3$ quyển, tháng Năm $6$ quyển. Hãy nêu cách vẽ biểu đồ cột biểu diễn dữ liệu này.

**Lời giải.**

Vẽ trục ngang, ghi lần lượt năm tháng cách đều nhau: tháng Một, tháng Hai, tháng Ba, tháng Tư, tháng Năm.

Vẽ trục đứng vuông góc với trục ngang. Số liệu lớn nhất là $6$, nên chia trục đứng từ $0$ đến $6$, mỗi vạch ứng với $1$ quyển; ghi đơn vị "Số quyển".

Vẽ năm cột có độ rộng bằng nhau, chiều cao lần lượt là $4$; $2$; $5$; $3$; $6$ vạch; ghi số liệu trên đầu mỗi cột.

Ghi tên biểu đồ: "Số sách bạn An đọc trong năm tháng đầu năm".

Vậy biểu đồ có năm cột cao lần lượt $4$; $2$; $5$; $3$; $6$ đơn vị trên trục đứng chia từ $0$ đến $6$.
:::

Cuối cùng, ta dùng biểu đồ cột kép để trả lời một câu hỏi cần suy nghĩ.

:::example Lớp nào "mê" bóng đá hơn?
Dựa vào biểu đồ "Môn thể thao yêu thích của học sinh hai lớp 6A và 6B", hãy tính tỉ số phần trăm số bạn thích bóng đá so với số học sinh của mỗi lớp. Lớp nào yêu thích bóng đá hơn?

**Lời giải.**

*Hiểu đề.* Cần so sánh mức độ yêu thích bóng đá của hai lớp. Hai lớp có cùng sĩ số $40$, nhưng để so sánh cho chắc chắn, ta dùng tỉ số phần trăm.

*Tìm cách giải.* Lấy số bạn thích bóng đá chia cho sĩ số lớp rồi nhân với $100\%$.

*Giải.* Lớp 6A có $15$ trên $40$ bạn thích bóng đá, chiếm
$$\dfrac{15}{40}\cdot100\%=37{,}5\%.$$

Lớp 6B có $12$ trên $40$ bạn thích bóng đá, chiếm
$$\dfrac{12}{40}\cdot100\%=30\%.$$

Vì $37{,}5\%>30\%$ nên lớp 6A yêu thích bóng đá hơn.

Vậy lớp 6A yêu thích bóng đá hơn ($37{,}5\%$ so với $30\%$).

*Nhìn lại.* Ở đây hai lớp có cùng sĩ số, nên so số bạn ($15>12$) cũng ra cùng kết luận. Nhưng nếu hai lớp có sĩ số khác nhau, chỉ có tỉ số phần trăm mới cho phép so sánh công bằng.
:::

:::warning Những chỗ hay nhầm
- **Trục đứng không bắt đầu từ $0$.** Sai: vẽ trục đứng bắt đầu từ $100$ để các cột "trông khác nhau hơn". Vì sao sai: chiều cao cột không còn tỉ lệ với số liệu, người xem bị đánh lừa. Đúng: trục đứng của biểu đồ cột phải bắt đầu từ $0$ (xem bài tập 8).
- **Khoảng chia không đều.** Sai: trên trục đứng ghi $0$; $5$; $10$; $20$; $50$ cách đều nhau. Vì sao sai: mỗi khoảng phải ứng với cùng một lượng. Đúng: $0$; $10$; $20$; $30$; …
- **Quên chú giải ở biểu đồ cột kép.** Sai: vẽ hai cột cạnh nhau nhưng không ghi cột nào của lớp nào. Vì sao sai: người đọc không biết so sánh thế nào. Đúng: luôn có chú giải cho hai kiểu cột.
- **Đọc nhầm cột trong cặp.** Sai: đọc cột trắng thành số liệu của lớp 6A. Vì sao sai: phải đối chiếu với chú giải. Đúng: nhìn chú giải trước rồi mới đọc.
:::

## Thuật ngữ

:::terms
- biểu đồ cột | bar chart
- biểu đồ cột kép | dual bar chart
- trục ngang | horizontal axis
- trục đứng | vertical axis
- cột | bar
- khoảng chia | scale interval
- chú giải | key (legend)
- tên biểu đồ | chart title
:::

## Tóm tắt

- Biểu đồ cột: mỗi đối tượng là một cột; chiều cao cột cho biết số liệu, đọc theo trục đứng chia vạch đều, bắt đầu từ $0$.
- Vẽ biểu đồ cột: vẽ hai trục, ghi tên đối tượng, chọn khoảng chia, vẽ các cột cùng độ rộng, ghi số liệu và tên biểu đồ.
- Biểu đồ cột kép: mỗi đối tượng có hai cột cạnh nhau cho hai bộ dữ liệu; phải có chú giải.
- Từ biểu đồ, ta tìm giá trị lớn nhất, nhỏ nhất, tổng, chênh lệch, tỉ số phần trăm và rút ra nhận xét.

Biểu đồ cột kép ở bài này cho thấy ngay điều mà hai biểu đồ tranh khó nói rõ: lớp 6A mê bóng đá và bóng rổ hơn, lớp 6B lại chuộng cầu lông và bơi. Một biểu đồ tốt giúp dữ liệu tự lên tiếng. Bài sau, ta bước sang những trò chơi may rủi với [kết quả có thể và sự kiện](lesson:outcomes-and-events). Nếu cần ôn cách lập bảng thống kê, bạn xem bài [Dữ liệu và thu thập dữ liệu](lesson:data-collection).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Theo biểu đồ "Số học sinh tham gia các câu lạc bộ của trường":

a) Câu lạc bộ Tiếng Anh có bao nhiêu học sinh?

b) Những câu lạc bộ nào có nhiều hơn $12$ học sinh?

::hint
**Kiến thức:** đọc số liệu trên đầu mỗi cột.

**Gợi ý các bước:**
1. Tìm cột Tiếng Anh.
2. So sánh từng số liệu với $12$.

::solution
a) Cột Tiếng Anh có số liệu $18$, nên câu lạc bộ Tiếng Anh có $18$ học sinh.

b) Các số liệu lớn hơn $12$ là: Tiếng Anh ($18$), Bóng đá ($24$), Âm nhạc ($15$). Câu lạc bộ Toán có đúng $12$ học sinh, không nhiều hơn $12$.

Vậy a) $18$ học sinh; b) Tiếng Anh, Bóng đá, Âm nhạc.

**Đáp số.** a) $18$; b) Tiếng Anh, Bóng đá, Âm nhạc.
:::

:::exercise
Theo biểu đồ "Số học sinh tham gia các câu lạc bộ của trường", số lượt học sinh của câu lạc bộ Bóng đá chiếm bao nhiêu phần trăm tổng số lượt học sinh tham gia năm câu lạc bộ? (Làm tròn đến hàng đơn vị.)

::hint
**Kiến thức:** tổng số lượt là $78$; tỉ số phần trăm của $a$ và $b$ là $\dfrac{a}{b}\cdot100\%$.

**Gợi ý các bước:**
1. Lập tỉ số $\dfrac{24}{78}$.
2. Nhân với $100\%$ rồi làm tròn.

::solution
Tổng số lượt học sinh tham gia năm câu lạc bộ là $78$.

Số lượt học sinh câu lạc bộ Bóng đá chiếm
$$\dfrac{24}{78}\cdot100\%\approx30{,}77\%\approx31\%.$$

Vậy câu lạc bộ Bóng đá chiếm khoảng $31\%$ tổng số lượt học sinh.

**Đáp số.** Khoảng $31\%$.
:::

:::exercise
Theo biểu đồ "Môn thể thao yêu thích của học sinh hai lớp 6A và 6B", tính tổng số bạn của cả hai lớp yêu thích mỗi môn. Môn nào được yêu thích nhất khi tính chung hai lớp?

::hint
**Kiến thức:** cộng hai số liệu trong mỗi cặp cột.

**Gợi ý các bước:**
1. Với mỗi môn, cộng số liệu của 6A và 6B.
2. So sánh các tổng.

::solution
Tổng số bạn của hai lớp yêu thích mỗi môn là:

Bóng đá: $15+12=27$ bạn.

Cầu lông: $10+14=24$ bạn.

Bơi: $5+8=13$ bạn.

Bóng rổ: $10+6=16$ bạn.

Vì $27$ là số lớn nhất nên bóng đá được yêu thích nhất khi tính chung hai lớp.

Vậy bóng đá $27$, cầu lông $24$, bơi $13$, bóng rổ $16$; bóng đá được yêu thích nhất.

**Đáp số.** Bóng đá ($27$ bạn).
:::

:::exercise
Theo biểu đồ "Môn thể thao yêu thích của học sinh hai lớp 6A và 6B", ở môn nào số bạn yêu thích của hai lớp chênh lệch nhau nhiều nhất?

::hint
**Kiến thức:** chênh lệch bằng số lớn trừ số nhỏ.

**Gợi ý các bước:**
1. Tính chênh lệch ở từng môn.
2. Tìm chênh lệch lớn nhất (có thể có nhiều môn).

::solution
Chênh lệch số bạn yêu thích giữa hai lớp ở mỗi môn là:

Bóng đá: $15-12=3$.

Cầu lông: $14-10=4$.

Bơi: $8-5=3$.

Bóng rổ: $10-6=4$.

Chênh lệch lớn nhất là $4$, ở hai môn cầu lông và bóng rổ.

Vậy hai môn cầu lông và bóng rổ có chênh lệch lớn nhất ($4$ bạn).

**Đáp số.** Cầu lông và bóng rổ ($4$ bạn).
:::

:::exercise
Số giờ tự học trong tuần của năm bạn như sau: An $8$ giờ, Bình $6$ giờ, Chi $10$ giờ, Dũng $7$ giờ, Hà $9$ giờ. Hãy nêu cách vẽ biểu đồ cột biểu diễn dữ liệu này (khoảng chia trên trục đứng, chiều cao mỗi cột).

::hint
**Kiến thức:** các bước vẽ biểu đồ cột.

**Gợi ý các bước:**
1. Số liệu lớn nhất là $10$: chọn khoảng chia phù hợp.
2. Chiều cao mỗi cột bằng số giờ.

::solution
Vẽ trục ngang, ghi tên năm bạn cách đều nhau: An, Bình, Chi, Dũng, Hà.

Vẽ trục đứng vuông góc với trục ngang, chia từ $0$ đến $10$, mỗi vạch ứng với $1$ giờ (hoặc mỗi vạch ứng với $2$ giờ cho gọn); ghi đơn vị "Số giờ".

Vẽ năm cột cùng độ rộng, chiều cao lần lượt ứng với $8$; $6$; $10$; $7$; $9$ giờ; ghi số liệu trên đầu mỗi cột.

Ghi tên biểu đồ: "Số giờ tự học trong tuần của năm bạn".

Vậy biểu đồ có năm cột cao lần lượt $8$; $6$; $10$; $7$; $9$ giờ trên trục đứng chia từ $0$ đến $10$.

**Đáp số.** Trục đứng từ $0$ đến $10$; các cột cao $8$; $6$; $10$; $7$; $9$.
:::

:::exercise
Ở bài trước, bốn lớp khối 6 trồng được số cây như sau: 6A $30$ cây, 6B $25$ cây, 6C $40$ cây, 6D $35$ cây. Nếu vẽ biểu đồ cột với mỗi vạch trên trục đứng ứng với $5$ cây, thì mỗi cột cao bao nhiêu vạch? Trục đứng cần ít nhất bao nhiêu vạch?

::hint
**Kiến thức:** số vạch bằng số cây chia cho $5$.

**Gợi ý các bước:**
1. Chia mỗi số cây cho $5$.
2. Số vạch của trục đứng ít nhất bằng cột cao nhất.

::solution
Chiều cao mỗi cột (tính bằng số vạch) là:

6A: $30:5=6$ vạch; 6B: $25:5=5$ vạch; 6C: $40:5=8$ vạch; 6D: $35:5=7$ vạch.

Cột cao nhất là $8$ vạch (lớp 6C), nên trục đứng cần ít nhất $8$ vạch, tức là chia từ $0$ đến $40$ cây.

Vậy các cột cao $6$; $5$; $8$; $7$ vạch; trục đứng cần ít nhất $8$ vạch.

**Đáp số.** $6$; $5$; $8$; $7$ vạch; ít nhất $8$ vạch.
:::

:::exercise
Bảng sau ghi lượng mưa (mm) trong bốn tháng mùa mưa ở hai thành phố $A$ và $B$ (số liệu giả định):

| Tháng | 6 | 7 | 8 | 9 |
|---|---|---|---|---|
| Thành phố $A$ | $180$ | $220$ | $260$ | $200$ |
| Thành phố $B$ | $150$ | $240$ | $230$ | $210$ |

Nếu vẽ biểu đồ cột kép từ bảng này:

a) Ở những tháng nào cột của thành phố $A$ cao hơn cột của thành phố $B$?

b) Tính tổng lượng mưa bốn tháng của mỗi thành phố. Thành phố nào mưa nhiều hơn?

::hint
**Kiến thức:** so sánh từng cặp số liệu; cộng các số liệu của mỗi thành phố.

**Gợi ý các bước:**
1. So sánh từng tháng.
2. Cộng bốn tháng của mỗi thành phố rồi so sánh.

::solution
a) So sánh từng tháng:

Tháng 6: $180>150$, $A$ cao hơn.

Tháng 7: $220<240$, $B$ cao hơn.

Tháng 8: $260>230$, $A$ cao hơn.

Tháng 9: $200<210$, $B$ cao hơn.

Vậy cột của thành phố $A$ cao hơn ở tháng 6 và tháng 8.

b) Tổng lượng mưa của thành phố $A$ là $180+220+260+200=860$ (mm).

Tổng lượng mưa của thành phố $B$ là $150+240+230+210=830$ (mm).

Vì $860>830$ nên thành phố $A$ mưa nhiều hơn.

Vậy a) tháng 6 và tháng 8; b) $A$: $860$ mm, $B$: $830$ mm, thành phố $A$ mưa nhiều hơn.

**Đáp số.** a) Tháng 6, tháng 8. b) $A$: $860$ mm; $B$: $830$ mm; $A$ mưa nhiều hơn.
:::

:::exercise
Một cửa hàng vẽ biểu đồ cột so sánh doanh thu hai tháng: tháng trước $110$ triệu đồng, tháng này $120$ triệu đồng. Họ cho trục đứng bắt đầu từ $100$ triệu đồng. Trên biểu đồ, cột tháng này trông cao gấp mấy lần cột tháng trước? Thực tế doanh thu tháng này tăng bao nhiêu phần trăm so với tháng trước? (Làm tròn đến hàng đơn vị.) Em có nhận xét gì?

::hint
**Kiến thức:** khi trục bắt đầu từ $100$, chiều cao cột chỉ thể hiện phần vượt quá $100$.

**Gợi ý các bước:**
1. Tính phần cột nhìn thấy: $110-100$ và $120-100$.
2. Tính phần trăm tăng thật: $\dfrac{120-110}{110}\cdot100\%$.

::solution
Trục đứng bắt đầu từ $100$, nên phần cột nhìn thấy của tháng trước ứng với $110-100=10$, của tháng này ứng với $120-100=20$. Do đó cột tháng này trông cao gấp $20:10=2$ lần cột tháng trước.

Thực tế, doanh thu tăng $120-110=10$ triệu đồng, tức là tăng
$$\dfrac{10}{110}\cdot100\%\approx9{,}09\%\approx9\%.$$

Vậy trên biểu đồ, doanh thu như tăng gấp đôi, nhưng thực tế chỉ tăng khoảng $9\%$. Biểu đồ có trục đứng không bắt đầu từ $0$ dễ gây hiểu lầm; khi đọc biểu đồ, ta luôn phải nhìn trục đứng.

**Đáp số.** Trông gấp $2$ lần; thực tế tăng khoảng $9\%$; biểu đồ gây hiểu lầm.
:::

:::exercise Thử thách
Theo biểu đồ "Số học sinh tham gia các câu lạc bộ của trường", trung bình mỗi câu lạc bộ có bao nhiêu học sinh? (Làm tròn đến hàng đơn vị.) Câu lạc bộ nào có số học sinh gần với số trung bình đó nhất?

::hint
**Kiến thức:** số trung bình bằng tổng chia cho số câu lạc bộ.

**Gợi ý các bước:**
1. Tính $78:5$ rồi làm tròn.
2. So sánh khoảng cách từ mỗi số liệu đến số trung bình.

::solution
Tổng số lượt học sinh là $78$, có $5$ câu lạc bộ. Trung bình mỗi câu lạc bộ có
$$78:5=15{,}6\approx16\ (\text{học sinh}).$$

Khoảng cách từ mỗi số liệu đến $15{,}6$ là: Toán $3{,}6$; Tiếng Anh $2{,}4$; Bóng đá $8{,}4$; Mĩ thuật $6{,}6$; Âm nhạc $0{,}6$.

Khoảng cách nhỏ nhất là $0{,}6$, ứng với câu lạc bộ Âm nhạc ($15$ học sinh).

Vậy trung bình mỗi câu lạc bộ có khoảng $16$ học sinh; câu lạc bộ Âm nhạc gần số trung bình nhất.

**Đáp số.** Khoảng $16$ học sinh; câu lạc bộ Âm nhạc.
:::

## Kiểm tra mini

:::quiz
::mc
Theo biểu đồ "Số học sinh tham gia các câu lạc bộ của trường", câu lạc bộ có nhiều học sinh nhất là
A. Tiếng Anh.
B. Toán.
C. Bóng đá.
D. Âm nhạc.
::key C
Cột Bóng đá cao nhất, $24$ học sinh.

::mc
Theo biểu đồ trên, câu lạc bộ Mĩ thuật có bao nhiêu học sinh?
A. $9$.
B. $3$.
C. $12$.
D. $15$.
::key A
Số liệu trên đầu cột Mĩ thuật là $9$. B đọc chiều cao cột theo ô vẽ mà quên khoảng chia; C và D là số liệu của cột bên cạnh.

::mc
Theo biểu đồ "Môn thể thao yêu thích của học sinh hai lớp 6A và 6B", môn mà lớp 6B có nhiều bạn yêu thích hơn lớp 6A là
A. Bóng đá.
B. Cầu lông.
C. Bóng rổ.
D. Không có môn nào.
::key B
Cầu lông: 6B có $14$, 6A có $10$. Ở bóng đá và bóng rổ, 6A nhiều hơn.

::mc
Biểu đồ cột kép thường được dùng để
A. biểu diễn một bộ dữ liệu duy nhất.
B. thay cho biểu đồ tranh khi số liệu nhỏ.
C. tính tổng các số liệu.
D. so sánh hai bộ dữ liệu về cùng các đối tượng.
::key D
Mỗi đối tượng có hai cột cạnh nhau để so sánh hai bộ dữ liệu.

::tf
Theo biểu đồ "Môn thể thao yêu thích của học sinh hai lớp 6A và 6B". Xét tính đúng sai của các mệnh đề sau:
a) Lớp 6B có $15$ bạn thích bóng đá.
b) Lớp 6B có nhiều bạn thích bơi hơn lớp 6A.
c) Tổng số bạn thích cầu lông của hai lớp là $22$.
d) Ở môn bóng rổ, lớp 6A nhiều hơn lớp 6B $4$ bạn.
::key S Đ S Đ
a) Sai: 6B có $12$ bạn, $15$ là của 6A. b) Đúng: $8>5$. c) Sai: $10+14=24$. d) Đúng: $10-6=4$.

::sa
Theo biểu đồ "Số học sinh tham gia các câu lạc bộ của trường", có tất cả bao nhiêu lượt học sinh tham gia năm câu lạc bộ?
::key 78
$12+18+24+9+15=78$.

::sa
Theo biểu đồ "Môn thể thao yêu thích của học sinh hai lớp 6A và 6B", có tất cả bao nhiêu bạn của hai lớp thích bóng đá?
::key 27
$15+12=27$.
:::
