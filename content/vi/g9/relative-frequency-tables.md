---
title: Bảng tần số tương đối và biểu đồ tần số tương đối
description: Tính tần số tương đối, lập bảng tần số tương đối, vẽ và đọc biểu đồ tần số tương đối dạng cột và dạng hình quạt tròn để so sánh các mẫu dữ liệu.
minutes: 20
---

:::goals
- Tính được tần số tương đối và lập được bảng tần số tương đối.
- Vẽ và đọc được biểu đồ tần số tương đối dạng cột và dạng hình quạt tròn.
- Dùng tần số tương đối để so sánh các mẫu dữ liệu có cỡ khác nhau.
:::

Giả sử trường A khảo sát 300 học sinh và thấy $84$ bạn dùng mạng xã hội hơn 3 giờ mỗi ngày; trường B khảo sát 180 học sinh và thấy $63$ bạn như vậy. Trường A có nhiều bạn hơn, vậy học sinh trường A "nghiện" mạng xã hội hơn? Chưa chắc: $84$ trên $300$ và $63$ trên $180$ là hai chuyện khác nhau. Để so sánh công bằng, ta cần biết mỗi nhóm chiếm *bao nhiêu phần* của cả mẫu. Đó chính là tần số tương đối.

## Tần số tương đối

### Khám phá: chia cho cỡ mẫu

Ta chia số bạn dùng mạng xã hội hơn 3 giờ cho số bạn được khảo sát:

$$\text{Trường A: } \frac{84}{300}=0{,}28=28\%;\qquad \text{Trường B: } \frac{63}{180}=0{,}35=35\%.$$

Như vậy trường B có tỉ lệ cao hơn, dù số bạn ít hơn. Con số $28\%$ cho biết: cứ 100 học sinh trường A thì có khoảng 28 bạn dùng mạng xã hội hơn 3 giờ mỗi ngày.

:::definition Tần số tương đối
Cho mẫu dữ liệu cỡ $n$ có các giá trị $x_1, x_2, \ldots, x_k$ với tần số $m_1, m_2, \ldots, m_k$.
- **Tần số tương đối** của giá trị $x_i$ là tỉ số giữa tần số $m_i$ và cỡ mẫu $n$:
$$f_i=\frac{m_i}{n}\cdot100\%.$$
- **Bảng tần số tương đối** gồm một hàng ghi các giá trị $x_i$ và một hàng ghi các tần số tương đối $f_i$ tương ứng.
- Tổng các tần số tương đối bằng $100\%$.
:::

**Hiểu sâu hơn.** Tần số trả lời "bao nhiêu?", còn tần số tương đối trả lời "bao nhiêu phần của cả mẫu?". Vì đã chia cho $n$, tần số tương đối không phụ thuộc cỡ mẫu, nên so sánh được một lớp 35 bạn với cả một quốc gia. Tổng bằng $100\%$ vì $\dfrac{m_1+m_2+\ldots+m_k}{n}=\dfrac nn=1$. Khi các $f_i$ được làm tròn, tổng có thể là $99{,}9\%$ hoặc $100{,}1\%$: đó là sai số làm tròn, không phải lỗi.

:::example Lập bảng tần số tương đối
Số giờ ngủ của 200 học sinh khối 9 (bài [bảng tần số](lesson:frequency-tables-charts)) có bảng tần số:

| Số giờ ngủ | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|
| Số học sinh | $24$ | $46$ | $68$ | $44$ | $18$ |

Lập bảng tần số tương đối của mẫu dữ liệu.

**Lời giải.** Cỡ mẫu $n=200$. Ta có

$$f_1=\frac{24}{200}\cdot100\%=12\%,\quad f_2=\frac{46}{200}\cdot100\%=23\%,\quad f_3=\frac{68}{200}\cdot100\%=34\%,$$
$$f_4=\frac{44}{200}\cdot100\%=22\%,\quad f_5=\frac{18}{200}\cdot100\%=9\%.$$

Vậy bảng tần số tương đối là:

| Số giờ ngủ | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|
| Tần số tương đối | $12\%$ | $23\%$ | $34\%$ | $22\%$ | $9\%$ |

**Kiểm tra.** $12+23+34+22+9=100$. Từ bảng ta đọc ngay: $22\%+9\%=31\%$ học sinh ngủ đủ từ 8 giờ trở lên.
:::

Từ tần số tương đối, ta cũng tính ngược được tần số: $m_i=f_i\cdot n$.

:::example Vận dụng: phân loại rác tại nguồn
Giả sử một phường khảo sát 250 hộ gia đình về việc phân loại rác: $18\%$ phân loại đầy đủ, $46\%$ phân loại một phần, còn lại không phân loại. Tính số hộ của mỗi nhóm.

**Lời giải.** Tần số tương đối của nhóm không phân loại là $100\%-18\%-46\%=36\%$. Ta có

$$250\cdot18\%=45,\qquad 250\cdot46\%=115,\qquad 250\cdot36\%=90.$$

Vậy có $45$ hộ phân loại đầy đủ, $115$ hộ phân loại một phần và $90$ hộ không phân loại.
:::

## Biểu đồ tần số tương đối

### Dạng cột

Biểu đồ tần số tương đối dạng cột vẽ giống biểu đồ tần số dạng cột, chỉ khác là chiều cao mỗi cột bằng tần số tương đối (tính theo %).

:::graph Tần số tương đối của số giờ ngủ (%)
alt: Biểu đồ cột: các giá trị 5, 6, 7, 8, 9 giờ có cột cao lần lượt 12, 23, 34, 22, 9 phần trăm
x: 4..10
y: 0..40
fill: 12 ; 0 ; 4.7..5.3
fill: 23 ; 0 ; 5.7..6.3
fill: 34 ; 0 ; 6.7..7.3
fill: 22 ; 0 ; 7.7..8.3
fill: 9 ; 0 ; 8.7..9.3
:::

Hình dạng giống hệt biểu đồ tần số của bài trước, vì mọi cột đều được chia cho cùng một số $n=200$. Chỉ thang đo trên trục đứng thay đổi.

### Dạng hình quạt tròn

Khi muốn thấy mỗi nhóm chiếm bao nhiêu phần của *toàn thể*, ta dùng biểu đồ hình quạt tròn: cả hình tròn ứng với $100\%$, mỗi giá trị ứng với một hình quạt có số đo góc ở tâm

$$\alpha_i=f_i\cdot360^\circ.$$

Chẳng hạn $f=25\%$ ứng với góc $90^\circ$, tức một phần tư hình tròn.

:::example Cơ cấu dân số Việt Nam theo nhóm tuổi
Theo kết quả Điều tra dân số và nhà ở giữa kì năm 2024 của Tổng cục Thống kê (công bố tháng 1/2025), tại thời điểm 1/4/2024, dân số Việt Nam là $101\,112\,656$ người, trong đó $23{,}3\%$ dưới 15 tuổi, $67{,}4\%$ từ 15 đến 64 tuổi và $9{,}3\%$ từ 65 tuổi trở lên.

a) Tính số đo góc ở tâm của mỗi hình quạt khi vẽ biểu đồ hình quạt tròn.

b) Ước tính số người từ 65 tuổi trở lên (làm tròn đến hàng trăm nghìn).

**Lời giải.** a) Ta có

$$23{,}3\%\cdot360^\circ\approx83{,}9^\circ,\qquad 67{,}4\%\cdot360^\circ\approx242{,}6^\circ,\qquad 9{,}3\%\cdot360^\circ\approx33{,}5^\circ.$$

b) Số người từ 65 tuổi trở lên khoảng $101\,112\,656\cdot9{,}3\%\approx9\,403\,477$, tức khoảng $9{,}4$ triệu người.

Vậy a) các góc khoảng $83{,}9^\circ$, $242{,}6^\circ$, $33{,}5^\circ$; b) khoảng $9{,}4$ triệu người.

**Nhận xét.** Hình quạt "65 tuổi trở lên" nhỏ, nhưng $9{,}4$ triệu người là rất nhiều: họ cần y tế, lương hưu, chăm sóc. Đọc tần số tương đối luôn cần nhớ cỡ của tổng thể.
:::

:::diagram Cơ cấu dân số Việt Nam theo nhóm tuổi (1/4/2024)
alt: Biểu đồ hình quạt tròn chia ba phần: dưới 15 tuổi 23,3%, từ 15 đến 64 tuổi 67,4%, từ 65 tuổi trở lên 9,3%
point O 0,0 ""
point A 0,3 ""
point B 2.98,0.32 ""
point C -1.65,2.5 ""
circle O 3
segment O A
segment O B
segment O C
label 1.25,1.4 "23,3%"
label -0.75,-1.2 "67,4%"
label -0.75,-1.9 "15–64 tuổi"
label 2.9,2.9 "Dưới 15 tuổi"
label -0.55,3.45 "9,3%"
label -2.5,3.3 "Từ 65 tuổi"
:::

:::example Trường nào đáng lo hơn?
Trở lại tình huống mở đầu. Giả sử ngoài nhóm "hơn 3 giờ", trường A có $126$ bạn dùng từ 1 đến 3 giờ và trường B có $72$ bạn như vậy; những bạn còn lại dùng dưới 1 giờ. Lập bảng tần số tương đối của hai trường và nhận xét.

**Lời giải.**

*Hiểu đề.* Mỗi trường có ba nhóm; cỡ mẫu khác nhau ($300$ và $180$) nên phải so sánh bằng tần số tương đối.

*Tìm cách giải.* Tìm số bạn dùng dưới 1 giờ ở mỗi trường, rồi chia từng tần số cho cỡ mẫu.

*Giải.* Số bạn dùng dưới 1 giờ: trường A có $300-84-126=90$, trường B có $180-63-72=45$. Ta có bảng:

| Thời gian dùng | Dưới 1 giờ | Từ 1 đến 3 giờ | Hơn 3 giờ |
|---|---|---|---|
| Trường A | $\frac{90}{300}=30\%$ | $\frac{126}{300}=42\%$ | $\frac{84}{300}=28\%$ |
| Trường B | $\frac{45}{180}=25\%$ | $\frac{72}{180}=40\%$ | $\frac{63}{180}=35\%$ |

Vậy trường B có tỉ lệ dùng hơn 3 giờ cao hơn ($35\%$ so với $28\%$) và tỉ lệ dùng dưới 1 giờ thấp hơn, nên đáng lo hơn.

*Nhìn lại.* Kết quả có hợp lí không? Mỗi hàng có tổng $100\%$. Nếu trường B chỉ hỏi 20 bạn thì sao? Khi đó một bạn đã chiếm $5\%$, kết luận dễ sai do ngẫu nhiên: tần số tương đối chỉ đáng tin khi cỡ mẫu đủ lớn.
:::

:::warning Những sai lầm thường gặp
- **So sánh tần số thay cho tần số tương đối** khi hai mẫu có cỡ khác nhau (như $84>63$ ở mở đầu).
- **Tính góc sai.** Sai: $25\%$ ứng với góc $25^\circ$. Đúng: $25\%\cdot360^\circ=90^\circ$.
- **Chia cho sai cỡ mẫu**, chẳng hạn chia cho số giá trị $k$ thay vì cho $n$.
:::

**Kết nối.** Tần số tương đối là cầu nối giữa thống kê và xác suất: ở lớp 8 bạn đã thấy khi lặp lại một phép thử nhiều lần, tần số tương đối của một biến cố gần với xác suất của nó. Ở chương sau, ta sẽ tính [xác suất](lesson:event-probability-experiments) bằng cách đếm, rồi so sánh với tần số tương đối thu được từ thực tế.

## Thuật ngữ

:::terms
- tần số tương đối | relative frequency
- bảng tần số tương đối | relative frequency table
- biểu đồ tần số tương đối dạng cột | relative frequency bar chart
- biểu đồ hình quạt tròn | pie chart
- hình quạt | sector
- góc ở tâm | angle at the centre
- tỉ lệ phần trăm | percentage
:::

## Tóm tắt

- Tần số tương đối: $f_i=\dfrac{m_i}{n}\cdot100\%$; tổng các $f_i$ bằng $100\%$.
- Ngược lại: $m_i=f_i\cdot n$.
- Biểu đồ cột: chiều cao cột bằng $f_i$. Biểu đồ hình quạt tròn: góc ở tâm $f_i\cdot360^\circ$.
- So sánh hai mẫu có cỡ khác nhau: dùng tần số tương đối, không dùng tần số.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Giả sử số con trong 25 gia đình có bảng tần số: giá trị $1, 2, 3, 4$ với tần số lần lượt $7, 12, 5, 1$. Lập bảng tần số tương đối.

::hint
**Kiến thức:** $f_i=\dfrac{m_i}{n}\cdot100\%$.

**Gợi ý các bước:**
1. Chia mỗi tần số cho $25$.
2. Kiểm tra tổng bằng $100\%$.

::solution
Ta có $\dfrac{7}{25}=28\%$, $\dfrac{12}{25}=48\%$, $\dfrac{5}{25}=20\%$, $\dfrac{1}{25}=4\%$; tổng $100\%$.

Vậy các giá trị $1, 2, 3, 4$ có tần số tương đối lần lượt là $28\%, 48\%, 20\%, 4\%$.

**Đáp số.** $28\%$, $48\%$, $20\%$, $4\%$.
:::

:::exercise
Giả sử khảo sát 40 học sinh về phương tiện đến trường: $15\%$ đi bộ, $35\%$ đi xe đạp, $30\%$ được bố mẹ đưa đón, còn lại đi xe buýt. Tính số học sinh của mỗi nhóm.

::hint
**Kiến thức:** $m_i=f_i\cdot n$; tổng các $f_i$ bằng $100\%$.

**Gợi ý các bước:**
1. Tìm tần số tương đối của nhóm đi xe buýt.
2. Nhân mỗi tần số tương đối với $40$.

::solution
Nhóm đi xe buýt chiếm $100\%-15\%-35\%-30\%=20\%$. Ta có $40\cdot15\%=6$, $40\cdot35\%=14$, $40\cdot30\%=12$, $40\cdot20\%=8$.

Vậy có $6$ bạn đi bộ, $14$ bạn đi xe đạp, $12$ bạn được đưa đón, $8$ bạn đi xe buýt.

**Đáp số.** $6$, $14$, $12$, $8$.
:::

:::exercise
Một mẫu dữ liệu có bốn giá trị với tần số tương đối $25\%$, $40\%$, $20\%$, $15\%$. Tính số đo góc ở tâm của các hình quạt tương ứng trong biểu đồ hình quạt tròn.

::hint
**Kiến thức:** góc ở tâm $\alpha_i=f_i\cdot360^\circ$.

**Gợi ý các bước:**
1. Nhân mỗi tần số tương đối với $360^\circ$.
2. Kiểm tra tổng bằng $360^\circ$.

::solution
Ta có $25\%\cdot360^\circ=90^\circ$, $40\%\cdot360^\circ=144^\circ$, $20\%\cdot360^\circ=72^\circ$, $15\%\cdot360^\circ=54^\circ$; tổng $360^\circ$.

Vậy các góc là $90^\circ$, $144^\circ$, $72^\circ$, $54^\circ$.

**Đáp số.** $90^\circ$, $144^\circ$, $72^\circ$, $54^\circ$.
:::

:::exercise
Theo Tổng cục Thống kê, tại thời điểm 1/4/2024, Việt Nam có $101\,112\,656$ người, trong đó $38\,599\,637$ người sống ở thành thị. Tính tần số tương đối của dân số thành thị (làm tròn đến hàng phần mười của phần trăm) và số đo góc của hình quạt "thành thị" (làm tròn đến độ).

::hint
**Kiến thức:** $f=\dfrac mn\cdot100\%$; góc $=f\cdot360^\circ$.

**Gợi ý các bước:**
1. Chia số dân thành thị cho tổng dân số.
2. Nhân kết quả với $360^\circ$.

::solution
Ta có $f=\dfrac{38\,599\,637}{101\,112\,656}\cdot100\%\approx38{,}2\%$. Góc của hình quạt là $\dfrac{38\,599\,637}{101\,112\,656}\cdot360^\circ\approx137^\circ$ (dùng tỉ số chính xác; nếu nhân với $38{,}2\%$ đã làm tròn sẽ được $137{,}52^\circ$ và làm tròn sai thành $138^\circ$).

Vậy dân số thành thị chiếm khoảng $38{,}2\%$, hình quạt có góc khoảng $137^\circ$.

**Đáp số.** $38{,}2\%$; $137^\circ$.
:::

:::exercise
Giả sử khảo sát tại hai cổng trường: cổng 1 có $160$ người đi xe máy, trong đó $12$ người không đội mũ bảo hiểm; cổng 2 có $90$ người đi xe máy, trong đó $9$ người không đội. Cổng nào cần tuyên truyền nhiều hơn? Giải thích.

::hint
**Kiến thức:** hai mẫu có cỡ khác nhau thì so sánh tần số tương đối.

**Gợi ý các bước:**
1. Tính tỉ lệ không đội mũ ở mỗi cổng.
2. So sánh.

::solution
Ta có $\dfrac{12}{160}\cdot100\%=7{,}5\%$ và $\dfrac{9}{90}\cdot100\%=10\%$.

Vậy cổng 2 có tỉ lệ không đội mũ cao hơn ($10\%>7{,}5\%$) nên cần tuyên truyền nhiều hơn, dù số người vi phạm ít hơn.

**Đáp số.** Cổng 2 ($10\%$ so với $7{,}5\%$).
:::

:::exercise
**(1,5 điểm)** Giả sử 50 học sinh chọn một câu lạc bộ: Toán $14$ bạn, Tiếng Anh $18$ bạn, Bóng đá $x$ bạn, Âm nhạc $8$ bạn.

a) Tìm $x$.

b) Lập bảng tần số tương đối.

c) Tính số đo góc ở tâm của hình quạt "Tiếng Anh".

::hint
**Kiến thức:** tổng các tần số bằng $n$; $f_i=\dfrac{m_i}{n}\cdot100\%$; góc $=f_i\cdot360^\circ$.

**Gợi ý các bước:**
1. $x=50-(14+18+8)$.
2. Chia mỗi tần số cho $50$.
3. Nhân $f$ của Tiếng Anh với $360^\circ$.

::solution
a) Ta có $x=50-(14+18+8)=10$.

b) Các tần số tương đối: Toán $\dfrac{14}{50}=28\%$, Tiếng Anh $\dfrac{18}{50}=36\%$, Bóng đá $\dfrac{10}{50}=20\%$, Âm nhạc $\dfrac{8}{50}=16\%$.

c) Góc của hình quạt "Tiếng Anh" là $36\%\cdot360^\circ=129{,}6^\circ$.

**Đáp số.** a) $10$; b) $28\%$, $36\%$, $20\%$, $16\%$; c) $129{,}6^\circ$.
:::

:::exercise
Trong một mẫu dữ liệu, lựa chọn A có tần số $12$ và tần số tương đối $15\%$.

a) Tính cỡ mẫu.

b) Sau đó có thêm một số người được hỏi và tất cả đều chọn A, khi ấy tần số tương đối của A là $20\%$. Hỏi có thêm bao nhiêu người? (Ôn lại [giải bài toán bằng cách lập phương trình](lesson:g9-equation-word-problems).)

::hint
**Kiến thức:** $n=\dfrac{m}{f}$; khi thêm $x$ người chọn A, cả tần số và cỡ mẫu đều tăng $x$.

**Gợi ý các bước:**
1. Tính $n=12:15\%$.
2. Lập phương trình $\dfrac{12+x}{n+x}=20\%$.

::solution
a) Ta có $n=12:0{,}15=80$.

b) Gọi $x$ là số người được hỏi thêm ($x\in\mathbb{N}^*$). Theo đề bài ta có phương trình

$$\frac{12+x}{80+x}=0{,}2\ \Rightarrow\ 12+x=16+0{,}2x\ \Rightarrow\ 0{,}8x=4\ \Rightarrow\ x=5\ \text{(thoả mãn)}.$$

Vậy có thêm $5$ người được hỏi.

**Đáp số.** a) $80$; b) $5$ người.
:::

:::exercise Thử thách
Một biểu đồ hình quạt tròn biểu diễn kết quả khảo sát 120 người, gồm ba hình quạt A, B, C. Góc của hình quạt C là $72^\circ$, góc của hình quạt A gấp đôi góc của hình quạt B. Tính số người của mỗi nhóm.

::hint
**Kiến thức:** góc $=f\cdot360^\circ$, nên $f=\dfrac{\text{góc}}{360^\circ}$; ba góc có tổng $360^\circ$.

**Gợi ý các bước:**
1. Tính góc của A và B từ tổng $360^\circ-72^\circ$.
2. Đổi mỗi góc thành tần số: $m=\dfrac{\text{góc}}{360^\circ}\cdot120$.

::solution
Góc A và góc B có tổng $360^\circ-72^\circ=288^\circ$ và góc A gấp đôi góc B, nên góc B là $96^\circ$, góc A là $192^\circ$.

Do đó số người mỗi nhóm là

$$\frac{192}{360}\cdot120=64,\qquad \frac{96}{360}\cdot120=32,\qquad \frac{72}{360}\cdot120=24.$$

Vậy nhóm A có $64$ người, nhóm B có $32$ người, nhóm C có $24$ người.

**Đáp số.** $64$, $32$, $24$.
:::

## Kiểm tra mini

:::quiz
::mc
Một giá trị có tần số $9$ trong mẫu dữ liệu cỡ $36$. Tần số tương đối của giá trị đó là
A. $9\%$.
B. $25\%$.
C. $4\%$.
D. $75\%$.
::key B
$\dfrac{9}{36}\cdot100\%=25\%$. A lấy tần số làm phần trăm, C tính $36:9$, D là phần còn lại $100\%-25\%$.

::mc
Trong mẫu dữ liệu cỡ $50$, một giá trị có tần số tương đối $30\%$. Tần số của giá trị đó là
A. $30$.
B. $20$.
C. $35$.
D. $15$.
::key D
$m=50\cdot30\%=15$. A lấy phần trăm làm tần số, B tính $50-30$, C là tần số của phần còn lại $50-15$.

::mc
Trong biểu đồ hình quạt tròn, hình quạt ứng với tần số tương đối $15\%$ có góc ở tâm là
A. $54^\circ$.
B. $15^\circ$.
C. $27^\circ$.
D. $5{,}4^\circ$.
::key A
$15\%\cdot360^\circ=54^\circ$. B lấy phần trăm làm số đo góc, C nhân với $180^\circ$ thay vì $360^\circ$, D đổi nhầm $15\%$ thành $0{,}015$.

::mc
Để thấy rõ mỗi nhóm chiếm bao nhiêu phần của tổng thể, nên dùng
A. biểu đồ đoạn thẳng.
B. bảng tần số.
C. biểu đồ hình quạt tròn.
D. danh sách dữ liệu ban đầu.
::key C
Cả hình tròn ứng với $100\%$, mỗi hình quạt cho thấy ngay phần của từng nhóm. Biểu đồ đoạn thẳng (A) cho thấy xu hướng; bảng tần số (B) và danh sách dữ liệu (D) cho con số, không cho hình ảnh "phần của toàn thể".

::tf
Một mẫu dữ liệu cỡ $80$ có bốn nhóm với tần số tương đối $35\%$, $25\%$, $x\%$, $15\%$. Xét tính đúng sai của các mệnh đề sau:
a) $x=25$.
b) Tần số của nhóm thứ nhất là $35$.
c) Hình quạt của nhóm thứ tư có góc ở tâm $54^\circ$.
d) Nhóm thứ ba và nhóm thứ tư có tổng tần số là $30$.
::key Đ S Đ S
a) Đúng: $100-35-25-15=25$. b) Sai: $80\cdot35\%=28$. c) Đúng: $15\%\cdot360^\circ=54^\circ$. d) Sai: $80\cdot40\%=32$.

::sa
Một giá trị có tần số $18$ và tần số tương đối $12\%$. Tính cỡ mẫu.
::key 150
$n=18:0{,}12=150$.

::sa
Một hình quạt trong biểu đồ hình quạt tròn có góc ở tâm $126^\circ$. Tần số tương đối của nhóm đó bằng bao nhiêu phần trăm?
::key 35
$\dfrac{126}{360}=0{,}35=35\%$.
:::
