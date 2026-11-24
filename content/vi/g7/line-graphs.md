---
title: Biểu đồ đoạn thẳng
description: Đọc biểu đồ đoạn thẳng, vẽ từ bảng số liệu, nhận xét xu hướng tăng giảm, so sánh hai thời điểm và biết khi nào nên dùng loại biểu đồ này.
minutes: 30
---

:::goals
- Nhận biết biểu đồ đoạn thẳng và biết nó dùng để biểu diễn loại dữ liệu nào.
- Đọc được số liệu trên biểu đồ đoạn thẳng và nhận xét xu hướng tăng, giảm, không đổi.
- Vẽ được biểu đồ đoạn thẳng từ một bảng số liệu.
- So sánh số liệu ở hai thời điểm, tính được mức thay đổi và mức thay đổi trung bình.
:::

Một ngày hè, bạn Hà đặt chiếc nhiệt kế ngoài sân và ghi nhiệt độ cứ hai giờ một lần, từ 6 giờ sáng đến 6 giờ chiều. Bảng ghi của bạn như sau (số liệu giả định):

| Giờ | 6 | 8 | 10 | 12 | 14 | 16 | 18 |
|---|---|---|---|---|---|---|---|
| Nhiệt độ (°C) | 24 | 26 | 29 | 33 | 34 | 31 | 28 |

Nhìn bảng, bạn trả lời được ngay lúc 12 giờ là 33 °C. Nhưng nếu hỏi "cả ngày hôm đó nóng lên rồi dịu đi như thế nào, lúc nào nhiệt độ tăng nhanh nhất?", bạn phải so sánh từng cặp số một, khá mệt. Có cách nào để chỉ cần nhìn một lần là thấy được "câu chuyện" của cả ngày không?

Có, và cách đó rất quen thuộc: bảng theo dõi sức khoẻ ở bệnh viện, mực nước sông trong mùa lũ hay doanh thu của một cửa hàng đều thường được vẽ theo kiểu này. Ở bài trước, biểu đồ cột giúp ta so sánh các đối tượng với nhau. Bài này giúp ta theo dõi **một đại lượng thay đổi theo thời gian**.

## Biểu đồ đoạn thẳng

### Khám phá: từ bảng đến một đường gấp khúc

Trước hết ta xem nhiệt độ thay đổi bao nhiêu sau mỗi hai giờ:

| Khoảng giờ | 6–8 | 8–10 | 10–12 | 12–14 | 14–16 | 16–18 |
|---|---|---|---|---|---|---|
| Thay đổi (°C) | +2 | +3 | +4 | +1 | −3 | −3 |

Buổi sáng nhiệt độ tăng, mức tăng lớn dần đến lúc 12 giờ, rồi chậm lại; sang chiều thì giảm. Bây giờ ta "vẽ" câu chuyện đó. Mỗi lần đo là một điểm: hoành độ là giờ, tung độ là nhiệt độ. Sau đó ta nối các điểm liên tiếp bằng đoạn thẳng.

:::graph Nhiệt độ ngoài sân của bạn Hà (°C) theo giờ
alt: Biểu đồ đoạn thẳng nhiệt độ theo giờ: tăng từ 24 độ lúc 6 giờ lên 34 độ lúc 14 giờ, rồi giảm xuống 28 độ lúc 18 giờ
x: 0..20
y: 0..38
shape: free
segment: (6, 24) (8, 26)
segment: (8, 26) (10, 29)
segment: (10, 29) (12, 33)
segment: (12, 33) (14, 34)
segment: (14, 34) (16, 31)
segment: (16, 31) (18, 28)
point: (6, 24) "24" above
point: (8, 26) "26" above
point: (10, 29) "29" above
point: (12, 33) "33" above
point: (14, 34) "34" above
point: (16, 31) "31" above
point: (18, 28) "28" above
:::

Bây giờ bạn thấy ngay: đường đi lên ở buổi sáng, đạt đỉnh lúc 14 giờ, rồi đi xuống. Đoạn nào dốc hơn thì nhiệt độ ở đoạn đó thay đổi nhanh hơn. Hình này có tên là biểu đồ đoạn thẳng.

:::definition Biểu đồ đoạn thẳng
**Biểu đồ đoạn thẳng** biểu diễn sự thay đổi của một đại lượng theo thời gian. Mỗi số liệu là một **điểm**: hoành độ là thời điểm, tung độ là giá trị của đại lượng. Các điểm liên tiếp được nối với nhau bằng các **đoạn thẳng**.
:::

**Hiểu sâu hơn.** Đoạn thẳng đi lên cho biết đại lượng tăng, đi xuống cho biết giảm, nằm ngang cho biết không đổi. Với các khoảng thời gian bằng nhau, đoạn nào dốc hơn thì thay đổi nhanh hơn. Có một điều cần nhớ: ta chỉ đo ở các thời điểm đã ghi. Phần đoạn thẳng nằm giữa hai điểm giúp mắt ta theo dõi xu hướng, nhưng giá trị trên đó chỉ là ước lượng chứ không phải số đo thật.

Biểu đồ đoạn thẳng không thay thế biểu đồ cột. Biểu đồ cột hợp với việc so sánh các đối tượng riêng rẽ (các môn thể thao, các lớp). Biểu đồ đoạn thẳng hợp với dữ liệu có thứ tự thời gian (từng giờ, từng tháng, từng tuần).

## Đọc và nhận xét biểu đồ

:::example Đọc số liệu trên biểu đồ
Quan sát biểu đồ nhiệt độ ngoài sân của bạn Hà.

a) Lúc 10 giờ nhiệt độ là bao nhiêu?

b) Nhiệt độ cao nhất là bao nhiêu và đo lúc mấy giờ?

c) Trong khoảng thời gian nào nhiệt độ tăng, trong khoảng thời gian nào nhiệt độ giảm?

**Lời giải.** a) Điểm có hoành độ $10$ có tung độ $29$. Vậy lúc 10 giờ nhiệt độ là $29$ °C.

b) Điểm cao nhất có hoành độ $14$ và tung độ $34$. Vậy nhiệt độ cao nhất là $34$ °C, đo lúc 14 giờ.

c) Các đoạn thẳng đi lên là các đoạn từ 6 giờ đến 14 giờ, nên nhiệt độ tăng từ 6 giờ đến 14 giờ. Các đoạn thẳng đi xuống là các đoạn từ 14 giờ đến 18 giờ, nên nhiệt độ giảm từ 14 giờ đến 18 giờ.

Vậy a) $29$ °C; b) $34$ °C lúc 14 giờ; c) tăng từ 6 giờ đến 14 giờ, giảm từ 14 giờ đến 18 giờ.
:::

Biết đọc từng điểm rồi, ta bắt đầu so sánh hai thời điểm và tính mức thay đổi.

:::example So sánh hai thời điểm
Cũng với biểu đồ nhiệt độ ở trên.

a) Nhiệt độ lúc 14 giờ cao hơn lúc 6 giờ bao nhiêu độ?

b) Trong các khoảng cách nhau hai giờ, nhiệt độ tăng nhiều nhất ở khoảng nào?

c) Ước lượng nhiệt độ lúc 11 giờ.

**Lời giải.** a) Nhiệt độ lúc 14 giờ là $34$ °C, lúc 6 giờ là $24$ °C. Ta có $34-24=10$. Vậy nhiệt độ lúc 14 giờ cao hơn lúc 6 giờ $10$ °C.

b) Mức tăng ở các khoảng là: $26-24=2$; $29-26=3$; $33-29=4$; $34-33=1$. Mức tăng lớn nhất là $4$ °C, ở khoảng từ 10 giờ đến 12 giờ. Đây cũng là đoạn dốc nhất trong phần đi lên của biểu đồ.

c) Lúc 11 giờ nằm giữa 10 giờ ($29$ °C) và 12 giờ ($33$ °C). Nếu nhiệt độ tăng đều trong hai giờ này thì lúc 11 giờ là
$$\dfrac{29+33}{2}=31\ (\text{°C}).$$

Vậy a) $10$ °C; b) khoảng 10–12 giờ, tăng $4$ °C; c) khoảng $31$ °C.

**Nhận xét.** Kết quả câu c) chỉ là ước lượng, vì ta không biết thật sự nhiệt độ lúc 11 giờ có tăng đều hay không.
:::

## Vẽ biểu đồ đoạn thẳng

:::tip Các bước vẽ biểu đồ đoạn thẳng
1. Vẽ trục ngang ghi thời điểm, các thời điểm cách đều nhau nếu khoảng cách thời gian bằng nhau; vẽ trục đứng ghi giá trị, chia vạch đều và ghi đơn vị.
2. Với mỗi số liệu, đánh dấu điểm có hoành độ là thời điểm, tung độ là giá trị.
3. Nối các điểm liên tiếp theo thứ tự thời gian bằng các đoạn thẳng.
4. Ghi số liệu cạnh mỗi điểm nếu cần, và ghi tên biểu đồ.
:::

:::example Vẽ biểu đồ từ bảng số liệu
Doanh thu của một quán trà sữa trong năm tháng đầu năm như sau (số liệu giả định):

| Tháng | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Doanh thu (triệu đồng) | 40 | 35 | 45 | 55 | 60 |

Hãy nêu cách vẽ biểu đồ đoạn thẳng biểu diễn bảng số liệu này và nhận xét xu hướng.

**Lời giải.** Vẽ trục ngang ghi các tháng $1$; $2$; $3$; $4$; $5$ cách đều nhau. Số liệu lớn nhất là $60$, nên vẽ trục đứng từ $0$ đến $70$, mỗi vạch ứng với $10$ triệu đồng; ghi đơn vị "triệu đồng".

Đánh dấu năm điểm $(1; 40)$, $(2; 35)$, $(3; 45)$, $(4; 55)$, $(5; 60)$, rồi nối các điểm liên tiếp bằng các đoạn thẳng, ta được biểu đồ dưới đây.

Từ tháng 1 sang tháng 2, doanh thu giảm $40-35=5$ (triệu đồng). Từ tháng 2 trở đi, doanh thu tăng liên tục.

Vậy biểu đồ có năm điểm như trên; doanh thu giảm nhẹ ở tháng 2 rồi tăng từ tháng 2 đến tháng 5.
:::

:::graph Doanh thu của quán trà sữa (triệu đồng) theo tháng
alt: Biểu đồ đoạn thẳng doanh thu: 40 ở tháng 1, giảm xuống 35 ở tháng 2, rồi tăng lên 45, 55 và 60 ở các tháng 3, 4, 5
x: 0..6
y: 0..70
shape: free
segment: (1, 40) (2, 35)
segment: (2, 35) (3, 45)
segment: (3, 45) (4, 55)
segment: (4, 55) (5, 60)
point: (1, 40) "40" above
point: (2, 35) "35" below
point: (3, 45) "45" above
point: (4, 55) "55" above
point: (5, 60) "60" above
:::

Trong biểu đồ này, đoạn nối tháng 3 với tháng 4 dốc hơn đoạn nối tháng 4 với tháng 5, vì mức tăng lần lượt là $10$ và $5$ triệu đồng.

## Bài toán thực tế

Với những bài có nhiều số liệu, ta đi đủ bốn bước: hiểu đề, tìm cách giải, giải, nhìn lại.

:::example Chiều cao của cây đậu mầm
Bạn Minh gieo hạt đậu và đo chiều cao của mầm vào đầu mỗi tuần (số liệu giả định):

| Tuần | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Chiều cao (cm) | 3 | 5 | 9 | 14 | 16 |

a) Cây cao thêm nhiều nhất trong tuần nào?

b) Từ tuần 0 đến tuần 4, trung bình mỗi tuần cây cao thêm bao nhiêu xăng-ti-mét?

c) Bạn Minh có nên dùng biểu đồ để đoán chiều cao của cây ở tuần 10 không?

**Lời giải.**

*Hiểu đề.* Có năm mốc đo, cách nhau một tuần. Ta cần so sánh mức tăng chiều cao giữa các tuần liên tiếp, tính mức tăng trung bình, và cân nhắc việc dự đoán xa.

*Tìm cách giải.* Mức tăng trong một tuần bằng hiệu hai số liệu liên tiếp. Mức tăng trung bình bằng tổng mức tăng chia cho số tuần.

*Giải.* a) Mức tăng ở từng tuần là $5-3=2$; $9-5=4$; $14-9=5$; $16-14=2$ (cm). Mức tăng lớn nhất là $5$ cm, từ tuần 2 đến tuần 3.

b) Sau $4$ tuần, cây cao thêm $16-3=13$ (cm). Trung bình mỗi tuần cây cao thêm
$$\dfrac{13}{4}=3{,}25\ (\text{cm}).$$

c) Biểu đồ chỉ có số liệu đến tuần 4, nên không đủ cơ sở để đoán chính xác chiều cao ở tuần 10.

Vậy a) từ tuần 2 đến tuần 3 (cao thêm $5$ cm); b) $3{,}25$ cm; c) không nên.

*Nhìn lại.* Con số $3{,}25$ chỉ là trung bình: không tuần nào cây cao thêm đúng $3{,}25$ cm. Ở tuần cuối, đoạn thẳng đã thoải dần ($+2$ cm), cho thấy cây không tăng nhanh mãi. Nếu kéo dài xu hướng đến tuần 10 thì kết quả có thể rất sai. Bạn thử nghĩ: một biểu đồ đoạn thẳng cho phép ta dự đoán xa đến mức nào?
:::

:::graph Chiều cao của mầm đậu (cm) theo tuần
alt: Biểu đồ đoạn thẳng chiều cao mầm đậu tăng từ 3 cm ở tuần 0 lên 16 cm ở tuần 4, dốc nhất ở đoạn từ tuần 2 đến tuần 3
x: 0..5
y: 0..18
shape: free
segment: (0, 3) (1, 5)
segment: (1, 5) (2, 9)
segment: (2, 9) (3, 14)
segment: (3, 14) (4, 16)
point: (0, 3) "3" above
point: (1, 5) "5" above
point: (2, 9) "9" above
point: (3, 14) "14" above
point: (4, 16) "16" above
:::

Ví dụ cuối là một tình huống ở mỗi gia đình: hoá đơn điện hằng tháng.

:::example Tiền điện của một gia đình
Tiền điện của gia đình bạn Mai trong sáu tháng đầu năm là (số liệu giả định):

| Tháng | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Tiền điện (nghìn đồng) | 450 | 420 | 480 | 590 | 720 | 690 |

a) Tháng nào tiền điện cao nhất, tháng nào thấp nhất?

b) Từ tháng 2 đến tháng 5, tiền điện tăng bao nhiêu nghìn đồng?

c) Bạn có nhận xét gì về xu hướng của tiền điện và giải thích vì sao có thể như vậy?

**Lời giải.** a) Giá trị lớn nhất là $720$, ở tháng 5; giá trị nhỏ nhất là $420$, ở tháng 2. Vậy tiền điện cao nhất ở tháng 5 và thấp nhất ở tháng 2.

b) Ta có $720-420=300$. Vậy từ tháng 2 đến tháng 5, tiền điện tăng $300$ nghìn đồng.

c) Mức thay đổi ở các tháng là $-30$; $+60$; $+110$; $+130$; $-30$. Tiền điện tăng liên tục từ tháng 2 đến tháng 5 và tăng nhanh nhất ở tháng 5 (tăng $130$ nghìn đồng), rồi giảm nhẹ ở tháng 6.

Vậy a) cao nhất tháng 5, thấp nhất tháng 2; b) $300$ nghìn đồng; c) tiền điện tăng mạnh vào các tháng nóng.

**Nhận xét.** Biểu đồ cho biết *khi nào* tiền điện tăng, nhưng không cho biết *vì sao*. Có thể trời nóng nên nhà dùng quạt, điều hoà nhiều hơn, nhưng muốn chắc ta cần thêm thông tin, chẳng hạn số giờ dùng từng thiết bị.
:::

:::warning Những lỗi hay gặp
- **Chia trục không đều.** Sai: trục đứng ghi $20$; $25$; $30$; $40$ nhưng các vạch cách đều nhau. Vì sao sai: một khoảng thì ứng với $5$, một khoảng lại ứng với $10$, nên độ dốc của các đoạn thẳng bị méo. Đúng: chia đều $20$; $25$; $30$; $35$; $40$.
- **Nối nhầm điểm.** Sai: nối các điểm không theo thứ tự thời gian, hoặc nối điểm đầu tiên với gốc $O$. Vì sao sai: đoạn nối không ứng với khoảng thời gian nào cả. Đúng: chỉ nối các điểm liên tiếp theo thứ tự thời gian.
- **Dùng cho dữ liệu không có thứ tự thời gian.** Sai: nối các môn thể thao yêu thích bằng đoạn thẳng. Vì sao sai: giữa "bóng đá" và "bơi" không có "khoảng giữa", nên đoạn thẳng không có nghĩa. Đúng: dùng biểu đồ cột.
- **Coi giá trị giữa hai điểm là số đo thật.** Sai: "lúc 11 giờ nhiệt độ chắc chắn là $31$ °C". Vì sao sai: ta chỉ đo lúc 10 giờ và 12 giờ. Đúng: nói "khoảng $31$ °C".
:::

**Kết nối.** Bài này xây trên biểu đồ tranh và biểu đồ cột mà bạn đã học, nhưng thêm một ý quan trọng: thứ tự thời gian. Khi đọc một biểu đồ đoạn thẳng, bạn đã tập nhìn "một đại lượng phụ thuộc vào một đại lượng khác", đúng là tinh thần của khái niệm hàm số và đồ thị mà bạn sẽ gặp về sau.

## Thuật ngữ

:::terms
- biểu đồ đoạn thẳng | line graph
- trục ngang | horizontal axis
- trục đứng | vertical axis
- điểm biểu diễn | plotted point
- đoạn thẳng nối | joining line segment
- thời điểm | point in time
- xu hướng | trend
- tăng | increase
- giảm | decrease
- không đổi | unchanged (constant)
- mức thay đổi | change
:::

## Tóm tắt

- Biểu đồ đoạn thẳng biểu diễn sự thay đổi của một đại lượng theo thời gian: mỗi số liệu là một điểm, các điểm liên tiếp được nối bằng đoạn thẳng.
- Đoạn đi lên: tăng; đi xuống: giảm; nằm ngang: không đổi. Với các khoảng thời gian bằng nhau, đoạn nào dốc hơn thì thay đổi nhanh hơn.
- Mức thay đổi giữa hai thời điểm bằng hiệu hai số liệu; mức thay đổi trung bình bằng tổng mức thay đổi chia cho số khoảng thời gian.
- Khi vẽ: trục chia đều, ghi đơn vị, chỉ nối các điểm liên tiếp theo thứ tự thời gian.
- Giá trị giữa hai điểm chỉ là ước lượng; không nên đoán quá xa ngoài phạm vi số liệu.

Câu hỏi ở đầu bài giờ đã có lời đáp: ngày hôm đó nóng nhất lúc 14 giờ ($34$ °C) và nhiệt độ tăng nhanh nhất trong khoảng 10 giờ đến 12 giờ. Cách nhanh nhất để nhớ bài là tự vẽ một biểu đồ từ số liệu của chính bạn, chẳng hạn nhiệt độ hoặc số trang sách bạn đọc mỗi ngày.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Theo biểu đồ nhiệt độ ngoài sân của bạn Hà:

a) Lúc 16 giờ nhiệt độ là bao nhiêu?

b) Nhiệt độ trên $30$ °C vào những thời điểm nào?

c) Nhiệt độ lúc 18 giờ thấp hơn lúc 12 giờ bao nhiêu độ?

::hint
**Kiến thức:** đọc tung độ của điểm ứng với mỗi thời điểm trên trục ngang.

**Gợi ý các bước:**
1. a) Tìm điểm có hoành độ $16$.
2. b) Liệt kê các giá trị lớn hơn $30$ trong bảng số liệu.
3. c) Lấy nhiệt độ lúc 12 giờ trừ nhiệt độ lúc 18 giờ.

::solution
a) Điểm có hoành độ $16$ có tung độ $31$. Vậy lúc 16 giờ nhiệt độ là $31$ °C.

b) Các nhiệt độ lớn hơn $30$ là $33$ (12 giờ), $34$ (14 giờ), $31$ (16 giờ). Vậy nhiệt độ trên $30$ °C vào lúc 12 giờ, 14 giờ và 16 giờ.

c) Ta có $33-28=5$. Vậy nhiệt độ lúc 18 giờ thấp hơn lúc 12 giờ $5$ °C.

**Đáp số.** a) $31$ °C; b) 12 giờ, 14 giờ, 16 giờ; c) $5$ °C.
:::

:::exercise
Số lượt mượn sách của thư viện trường từ thứ Hai đến thứ Sáu trong một tuần là (số liệu giả định):

| Ngày | Thứ Hai | Thứ Ba | Thứ Tư | Thứ Năm | Thứ Sáu |
|---|---|---|---|---|---|
| Số lượt mượn | 20 | 35 | 30 | 50 | 40 |

a) Ngày nào có nhiều lượt mượn nhất?

b) Từ thứ Ba sang thứ Tư, số lượt mượn tăng hay giảm bao nhiêu lượt?

c) Số lượt mượn tăng nhiều nhất ở khoảng nào giữa hai ngày liên tiếp?

::hint
**Kiến thức:** mức thay đổi giữa hai ngày liên tiếp bằng số liệu ngày sau trừ số liệu ngày trước.

**Gợi ý các bước:**
1. a) Tìm số lớn nhất trong bảng.
2. b) Lấy $30-35$ và xét dấu.
3. c) Tính mức thay đổi của bốn khoảng rồi chọn mức tăng lớn nhất.

::solution
a) Số lớn nhất là $50$, ở thứ Năm. Vậy thứ Năm có nhiều lượt mượn nhất.

b) Ta có $30-35=-5$. Vậy từ thứ Ba sang thứ Tư, số lượt mượn giảm $5$ lượt.

c) Mức thay đổi ở các khoảng là $35-20=15$; $30-35=-5$; $50-30=20$; $40-50=-10$. Mức tăng lớn nhất là $20$ lượt, từ thứ Tư sang thứ Năm.

**Đáp số.** a) Thứ Năm; b) giảm $5$ lượt; c) từ thứ Tư sang thứ Năm, tăng $20$ lượt.
:::

:::exercise
Cân nặng của một chú chó con trong sáu tháng đầu đời như sau (số liệu giả định):

| Tháng | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Cân nặng (kg) | 2 | 3 | 6 | 6 | 7 | 8 |

a) Nêu cách vẽ biểu đồ đoạn thẳng biểu diễn bảng số liệu này.

b) Cân nặng của chó không đổi trong khoảng thời gian nào?

c) Đoạn thẳng nào dốc nhất?

::hint
**Kiến thức:** các bước vẽ biểu đồ đoạn thẳng; đoạn nằm ngang là không đổi, đoạn dốc nhất ứng với mức tăng lớn nhất.

**Gợi ý các bước:**
1. a) Số liệu lớn nhất là $8$, chọn trục đứng từ $0$ đến $8$.
2. b) Tìm hai tháng liên tiếp có cùng cân nặng.
3. c) Tính mức thay đổi từng khoảng.

::solution
a) Để vẽ biểu đồ đoạn thẳng, ta làm như sau.

Vẽ trục ngang ghi các tháng từ $1$ đến $6$ cách đều nhau. Vẽ trục đứng từ $0$ đến $8$, mỗi vạch ứng với $1$ kg và ghi đơn vị "kg".

Đánh dấu các điểm $(1; 2)$, $(2; 3)$, $(3; 6)$, $(4; 6)$, $(5; 7)$, $(6; 8)$ theo từng cặp (tháng; cân nặng).

Nối các điểm liên tiếp bằng các đoạn thẳng và ghi tên biểu đồ.

b) Cân nặng tháng $3$ và tháng $4$ đều bằng $6$ kg, nên đoạn thẳng nối hai điểm $(3; 6)$ và $(4; 6)$ nằm ngang.

Vậy cân nặng của chó không đổi từ tháng $3$ đến tháng $4$.

c) Mức tăng cân nặng ở từng khoảng thời gian là:
$$3-2=1;\quad 6-3=3;\quad 6-6=0;\quad 7-6=1;\quad 8-7=1\ (\text{kg}).$$

Mức tăng lớn nhất là $3$ kg, ở khoảng từ tháng $2$ đến tháng $3$. Các khoảng cách đều nhau trên trục ngang nên đoạn thẳng có mức tăng lớn nhất là đoạn dốc nhất.

Vậy đoạn thẳng nối tháng $2$ với tháng $3$ dốc nhất.

**Đáp số.** b) Từ tháng 3 đến tháng 4; c) đoạn nối tháng 2 và tháng 3.
:::

:::exercise
Dữ liệu nào dưới đây nên biểu diễn bằng biểu đồ đoạn thẳng? Vì sao?

a) Số học sinh của từng lớp trong khối 7.

b) Nhiệt độ ngoài trời đo mỗi giờ trong một ngày.

c) Số trang sách bạn Lan đọc mỗi ngày trong một tuần.

d) Môn thể thao yêu thích của các bạn trong tổ.

::hint
**Kiến thức:** biểu đồ đoạn thẳng dùng cho dữ liệu thay đổi theo thời gian; biểu đồ cột dùng để so sánh các đối tượng riêng rẽ.

**Gợi ý các bước:**
1. Với mỗi dữ liệu, hỏi: các số liệu có xếp theo thứ tự thời gian không?
2. Nếu không, đoạn thẳng nối hai điểm có nghĩa gì không?

::solution
a) Các lớp là các đối tượng riêng rẽ, không có thứ tự thời gian, nên dùng biểu đồ cột.

b) Nhiệt độ đo theo từng giờ, có thứ tự thời gian, nên dùng biểu đồ đoạn thẳng.

c) Số trang sách đọc mỗi ngày có thứ tự thời gian, nên dùng biểu đồ đoạn thẳng.

d) Các môn thể thao là các đối tượng riêng rẽ, nên dùng biểu đồ cột (hoặc biểu đồ tranh).

Vậy dữ liệu ở b) và c) nên biểu diễn bằng biểu đồ đoạn thẳng.

**Đáp số.** b) và c).
:::

:::exercise
Lượng nước tiêu thụ của một hộ gia đình trong sáu tháng đầu năm như sau (số liệu giả định):

| Tháng | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Lượng nước (m³) | 12 | 14 | 13 | 18 | 20 | 19 |

a) Tháng nào dùng nhiều nước nhất?

b) Từ một tháng sang tháng liền sau, lượng nước tăng nhiều nhất là bao nhiêu mét khối và ở tháng nào?

c) Tính lượng nước trung bình mỗi tháng. Những tháng nào dùng nhiều hơn mức trung bình?

::hint
**Kiến thức:** số trung bình bằng tổng các số liệu chia cho số lượng số liệu.

**Gợi ý các bước:**
1. a) Tìm số lớn nhất.
2. b) Tính hiệu hai số liệu liên tiếp.
3. c) Cộng sáu số liệu, chia cho $6$, rồi so sánh từng tháng.

::solution
a) Số lớn nhất là $20$, ở tháng 5. Vậy tháng 5 dùng nhiều nước nhất.

b) Mức thay đổi ở các tháng là $+2$; $-1$; $+5$; $+2$; $-1$ (m³). Mức tăng lớn nhất là $5$ m³, từ tháng 3 sang tháng 4.

c) Tổng lượng nước là $12+14+13+18+20+19=96$ (m³). Lượng nước trung bình mỗi tháng là $96:6=16$ (m³). Các tháng có lượng nước lớn hơn $16$ là tháng 4 ($18$), tháng 5 ($20$), tháng 6 ($19$).

**Đáp số.** a) Tháng 5; b) $5$ m³, từ tháng 3 sang tháng 4; c) $16$ m³; tháng 4, 5, 6.
:::

:::exercise
Số xe máy đi qua một ngã tư vào các giờ buổi sáng như sau (số liệu giả định):

| Giờ | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|
| Số xe | 120 | 300 | 240 | 150 | 130 |

a) Giờ nào có nhiều xe nhất, bao nhiêu chiếc?

b) Từ 7 giờ đến 9 giờ, số xe giảm bao nhiêu chiếc? Số xe giảm chiếm bao nhiêu phần trăm số xe lúc 7 giờ?

c) Số xe tăng nhiều nhất ở khoảng nào?

::hint
**Kiến thức:** tỉ số phần trăm của $a$ và $b$ là $\dfrac{a}{b}\cdot100\%$.

**Gợi ý các bước:**
1. a) Tìm số lớn nhất.
2. b) Lấy $300-150$, rồi chia cho $300$ và nhân $100\%$.
3. c) Tính mức thay đổi từng khoảng.

::solution
a) Số xe lớn nhất là $300$, lúc 7 giờ. Vậy 7 giờ có nhiều xe nhất, $300$ chiếc.

b) Ta có $300-150=150$. Số xe giảm chiếm
$$\dfrac{150}{300}\cdot100\%=50\%$$
số xe lúc 7 giờ.

c) Mức thay đổi ở các khoảng là $180$; $-60$; $-90$; $-20$. Số xe chỉ tăng ở khoảng từ 6 giờ đến 7 giờ, tăng $180$ chiếc.

**Đáp số.** a) 7 giờ, $300$ xe; b) $150$ xe, $50\%$; c) từ 6 giờ đến 7 giờ.
:::

:::exercise
Một bạn đi xe đạp, ghi quãng đường đã đi được tính từ lúc xuất phát (số liệu giả định):

| Thời gian (giờ) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Quãng đường (km) | 0 | 12 | 24 | 24 | 36 |

a) Bạn dừng nghỉ trong khoảng thời gian nào? Vì sao bạn biết?

b) Trong giờ đầu tiên, bạn đi với vận tốc bao nhiêu ki-lô-mét trên giờ?

c) Giả sử trong giờ thứ hai bạn đi đều. Ước lượng quãng đường bạn đã đi sau $1{,}5$ giờ.

::hint
**Kiến thức:** quãng đường không đổi nghĩa là bạn đang đứng yên; vận tốc bằng quãng đường chia cho thời gian.

**Gợi ý các bước:**
1. a) Tìm hai thời điểm liên tiếp có cùng quãng đường.
2. b) Lấy $12$ chia cho $1$ giờ.
3. c) $1{,}5$ giờ nằm giữa $1$ giờ và $2$ giờ.

::solution
a) Quãng đường sau $2$ giờ và sau $3$ giờ đều là $24$ km, nên đoạn thẳng nối hai điểm đó nằm ngang. Vậy bạn dừng nghỉ từ giờ thứ $2$ đến giờ thứ $3$.

b) Trong giờ đầu bạn đi được $12$ km, nên vận tốc là $12:1=12$ (km/h).

c) Nếu đi đều trong giờ thứ hai thì sau $1{,}5$ giờ bạn đi được
$$\dfrac{12+24}{2}=18\ (\text{km}).$$

**Đáp số.** a) Từ giờ thứ $2$ đến giờ thứ $3$; b) $12$ km/h; c) khoảng $18$ km.
:::

:::exercise
Số bạn đi học muộn của một lớp trong năm tuần liên tiếp là (số liệu giả định):

| Tuần | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Số bạn đi muộn | 6 | 4 | 5 | 2 | 1 |

a) Tổng cộng có bao nhiêu lượt đi học muộn trong năm tuần?

b) Số bạn đi muộn giảm nhiều nhất ở khoảng nào?

c) Số bạn đi muộn ở tuần 5 giảm bao nhiêu phần trăm so với tuần 1? (Làm tròn đến hàng đơn vị.)

::hint
**Kiến thức:** phần trăm giảm bằng mức giảm chia cho số liệu ban đầu, rồi nhân $100\%$.

**Gợi ý các bước:**
1. a) Cộng năm số liệu.
2. b) Tính hiệu hai số liên tiếp và tìm mức giảm lớn nhất.
3. c) Lấy $(6-1):6$.

::solution
a) Ta có $6+4+5+2+1=18$. Vậy có tất cả $18$ lượt đi học muộn.

b) Mức thay đổi ở các khoảng là $-2$; $+1$; $-3$; $-1$. Mức giảm lớn nhất là $3$ bạn, từ tuần 3 sang tuần 4.

c) Từ tuần 1 đến tuần 5, số bạn đi muộn giảm $6-1=5$ (bạn), tức là giảm
$$\dfrac{5}{6}\cdot100\%\approx83{,}3\%\approx83\%.$$

**Đáp số.** a) $18$; b) từ tuần 3 sang tuần 4; c) khoảng $83\%$.
:::

:::exercise Thử thách
Nhiệt độ lúc một số giờ trong ngày ở hai thành phố $A$ và $B$ như sau (số liệu giả định):

| Giờ | 6 | 9 | 12 | 15 | 18 |
|---|---|---|---|---|---|
| Thành phố $A$ (°C) | 20 | 25 | 30 | 32 | 27 |
| Thành phố $B$ (°C) | 22 | 24 | 27 | 28 | 26 |

a) Vào giờ nào hai thành phố chênh lệch nhiệt độ nhiều nhất, chênh bao nhiêu độ?

b) Với mỗi thành phố, hiệu giữa nhiệt độ cao nhất và thấp nhất trong ngày là bao nhiêu? Thành phố nào có nhiệt độ dao động trong ngày lớn hơn, gấp mấy lần?

::hint
**Kiến thức:** chênh lệch của hai số là số lớn trừ số nhỏ.

**Gợi ý các bước:**
1. a) Tính chênh lệch của $A$ và $B$ tại từng giờ.
2. b) Tìm số lớn nhất và nhỏ nhất của từng thành phố.

::solution
a) Chênh lệch nhiệt độ ở các giờ $6$; $9$; $12$; $15$; $18$ lần lượt là $2$; $1$; $3$; $4$; $1$ (°C). Chênh lệch lớn nhất là $4$ °C, lúc 15 giờ.

b) Thành phố $A$ có nhiệt độ cao nhất $32$ °C và thấp nhất $20$ °C, hiệu là $32-20=12$ (°C). Thành phố $B$ có nhiệt độ cao nhất $28$ °C và thấp nhất $22$ °C, hiệu là $28-22=6$ (°C). Ta có $12:6=2$.

Vậy thành phố $A$ có nhiệt độ dao động trong ngày lớn hơn, gấp $2$ lần thành phố $B$.

**Đáp số.** a) 15 giờ, $4$ °C; b) $A$: $12$ °C, $B$: $6$ °C; $A$ gấp $2$ lần.
:::

## Kiểm tra mini

:::quiz
::mc NB
Biểu đồ đoạn thẳng thích hợp nhất để biểu diễn dữ liệu nào sau đây?
A. Nhiệt độ ngoài trời đo mỗi giờ trong một ngày.
B. Màu sắc yêu thích của các bạn trong tổ.
C. Mức độ yêu thích của các môn học.
D. Số học sinh của từng lớp trong khối 7.
::key A
Chỉ nhiệt độ theo từng giờ là dữ liệu có thứ tự thời gian. A, B, C là các đối tượng riêng rẽ nên dùng biểu đồ cột.

::mc NB
Doanh thu của một cửa hàng trong bốn tháng liên tiếp là $12$; $15$; $15$; $11$ (triệu đồng). Doanh thu giảm trong khoảng nào?
A. Từ tháng 1 đến tháng 2.
B. Từ tháng 3 đến tháng 4.
C. Từ tháng 2 đến tháng 3.
D. Cả ba khoảng.
::key B
$15\to11$ là giảm $4$ triệu đồng. B là tăng $3$ triệu đồng, C không đổi (đoạn nằm ngang).

::mc TH
Nhiệt độ lúc 6 giờ, 9 giờ, 12 giờ, 15 giờ lần lượt là $22$ °C, $26$ °C, $30$ °C, $28$ °C. Từ 6 giờ đến 12 giờ nhiệt độ tăng bao nhiêu độ?
A. $4$ °C.
B. $30$ °C.
C. $8$ °C.
D. $2$ °C.
::key C
$30-22=8$. A chỉ tính khoảng 6 giờ đến 9 giờ; C nhầm với nhiệt độ lúc 12 giờ; D là mức giảm từ 12 giờ đến 15 giờ.

::mc NB
Khi vẽ biểu đồ đoạn thẳng, điều nào sau đây đúng?
A. Có thể nối các điểm theo thứ tự bất kì.
B. Các vạch trên trục đứng không cần ứng với cùng một lượng.
C. Phải nối điểm đầu tiên với gốc toạ độ $O$.
D. Các điểm được nối lần lượt theo thứ tự thời gian bằng các đoạn thẳng.
::key D
Đó là định nghĩa của biểu đồ đoạn thẳng. A, C là lỗi nối nhầm điểm; B là lỗi chia trục không đều.

::tf NB TH NB TH
Số người vào một công viên lúc 7 giờ, 8 giờ, 9 giờ, 10 giờ lần lượt là $50$; $80$; $120$; $100$ (người). Xét tính đúng sai của các mệnh đề sau:
a) Lúc 8 giờ có $120$ người vào công viên.
b) Từ 7 giờ đến 9 giờ, số người tăng thêm $70$ người.
c) Đoạn thẳng nối 9 giờ và 10 giờ đi xuống.
d) Số người nhiều nhất vào lúc 10 giờ.
::key S Đ Đ S
a) Sai: lúc 8 giờ có $80$ người, $120$ là số người lúc 9 giờ. b) Đúng: $120-50=70$. c) Đúng: từ $120$ xuống $100$. d) Sai: nhiều nhất lúc 9 giờ.

::sa VD
Số cuốn sách thư viện cho mượn trong năm ngày liên tiếp là $24$; $30$; $27$; $36$; $33$. Mức tăng lớn nhất giữa hai ngày liên tiếp là bao nhiêu cuốn?
::key 9
Mức thay đổi là $+6$; $-3$; $+9$; $-3$. Mức tăng lớn nhất là $9$ cuốn (từ ngày thứ ba sang ngày thứ tư).

::sa VD
Chiều cao của một cây vào đầu các tuần 0, 1, 2, 3 là $4$ cm, $7$ cm, $11$ cm, $14$ cm. Trung bình mỗi tuần cây cao thêm bao nhiêu xăng-ti-mét? (Làm tròn đến hàng phần mười.)
::key 3,3
Sau $3$ tuần cây cao thêm $14-4=10$ (cm), nên trung bình mỗi tuần cao thêm $10:3\approx3{,}3$ (cm).
:::
