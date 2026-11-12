---
title: IB Math AI gồm những gì và cách ôn
description: IB Mathematics Applications and Interpretation: các bài thi SL và HL, năm chủ đề, cách chấm khi dùng máy tính đồ thị, và kế hoạch ôn tập.
minutes: 25
type: guide
---

:::goals
- Nắm các bài thi, thời gian và tỉ trọng của IB Math AI ở SL và HL.
- Nắm năm chủ đề và những nội dung riêng của AI: tài chính, mô hình, sơ đồ Voronoi, kiểm định thống kê.
- Hiểu cách chấm bài và quy tắc làm tròn.
- Lập kế hoạch ôn tập trong mười hai tuần cuối.
:::

Hãy nghĩ đến những câu hỏi người ta thật sự đặt ra với các con số. Khoản vay này rốt cuộc tốn của mình bao nhiêu? Mô hình nào hợp với sự tăng dân số của thị trấn này? Nên đặt bệnh viện mới ở đâu để phục vụ những người đang ở xa các bệnh viện cũ nhất? IB Mathematics: Applications and Interpretation, thường gọi là **Math AI**, được xây dựng quanh những câu hỏi như vậy. Đó vẫn là toán thật sự, nhưng điểm xuất phát gần như luôn là một tình huống, và điểm kết thúc là một câu trả lời có nghĩa trong tình huống ấy.

Điều đó thay đổi cách ôn. Ở AI, máy tính làm phần lớn việc tính toán nặng, nên điểm số dành cho việc chọn đúng mô hình, lập mô hình cẩn thận và giải thích kết quả nghĩa là gì. Nếu bạn quen với chương trình Việt Nam, nơi tốc độ biến đổi đại số bằng tay rất được coi trọng, lúc đầu điều này có thể hơi lạ. Nhưng nó sẽ sớm thành thế mạnh: bạn đã biết toán, giờ là lúc học cách dùng nó.

## Các bài thi

**Máy tính cầm tay đồ thị (GDC)** cần dùng trong **mọi** bài thi AI. Chương trình hiện hành được thi đến tháng 11/2028.

| Cấp độ | Thành phần | Thời gian | Điểm | Tỉ trọng |
|---|---|---|---|---|
| SL | Paper 1 (câu ngắn) | 90 phút | 80 | 40% |
| SL | Paper 2 (câu dài hơn) | 90 phút | 80 | 40% |
| SL | Đánh giá nội bộ (bài khám phá) | — | — | 20% |
| HL | Paper 1 | 120 phút | 110 | 30% |
| HL | Paper 2 | 120 phút | 110 | 30% |
| HL | Paper 3 (hai bài toán mở rộng) | 1 giờ 15 phút | 55 | 20% |
| HL | Đánh giá nội bộ | — | — | 20% |

Điểm cuối cùng theo thang 1–7. Mọi bài thi đều có sổ công thức (formula booklet). Paper 3 của HL kéo dài 1 giờ 15 phút từ các kì thi năm 2025; tài liệu cũ có thể ghi 1 giờ.

## Năm chủ đề

| Chủ đề | Điểm riêng của AI |
|---|---|
| Số và đại số | xấp xỉ và sai số, toán tài chính với TVM solver; HL: ma trận |
| Hàm số | xây dựng và chọn mô hình: bậc nhất, bậc hai, hàm mũ, dạng sin và các dạng khác |
| Hình học và lượng giác | đo đạc không gian, lượng giác trong tình huống, sơ đồ Voronoi; HL: lí thuyết đồ thị |
| Thống kê và xác suất | hồi quy, tương quan, kiểm định chi bình phương và kiểm định $t$ ở mức IB; HL: phân phối và kiểm định nâng cao |
| Giải tích | tốc độ thay đổi, tối ưu, diện tích bằng quy tắc hình thang; HL: phương trình vi phân |

## Cách chấm bài

Giám khảo IB cho điểm cả **phương pháp** lẫn đáp số, nên hãy luôn viết ra mình đang làm gì, kể cả khi máy tính làm hộ phần tính. Chẳng hạn, viết phương trình đã giải, hoặc các giá trị đã nhập vào TVM solver, trước khi ghi đáp số. Đáp số đúng mà không có lời giải có thể không được trọn điểm, còn đáp số sai mà phương pháp đúng thường vẫn giữ được phần lớn số điểm.

Có hai quy tắc làm tròn gặp trong hầu hết các câu:

- Ghi kết quả gần đúng với **ba chữ số có nghĩa**, trừ khi đề yêu cầu khác.
- Tiền thường ghi đến **hai chữ số thập phân**.

Giữ nguyên độ chính xác trong máy đến tận bước cuối; làm tròn giữa chừng là một trong những cách mất điểm phổ biến nhất.

## Hai ví dụ nhỏ theo phong cách AI

:::example Tiền sinh lời
Bạn gửi $5000$ đô la với lãi suất $4\%$ một năm, ghép lãi hằng tháng. Sau $6$ năm khoản tiền có giá trị bao nhiêu?

**Lời giải.** Mỗi tháng số tiền được nhân với $1+\dfrac{0{,}04}{12}$, và có $6\times12=72$ tháng, nên giá trị là
$$5000\left(1+\frac{0{,}04}{12}\right)^{72}\approx6353{,}71\text{ đô la}.$$

Trên GDC, bạn nhập $N=72$, $I\%=4$, $PV=-5000$, $PMT=0$, $P/Y=C/Y=12$ rồi giải tìm $FV$; hãy ghi các giá trị nhập này vào bài làm.

Vậy sau $6$ năm khoản tiền có giá trị khoảng $6353{,}71$ đô la.
:::

:::example Chọn mô hình
Số vi khuẩn trong một đĩa nuôi cấy tăng gấp đôi khoảng mỗi $3$ giờ. Loại hàm số nào là mô hình phù hợp nhất?
A. Bậc nhất
B. Bậc hai
C. Hàm mũ
D. Dạng sin

**Lời giải.** Tăng gấp đôi sau những khoảng thời gian bằng nhau nghĩa là đại lượng được **nhân** với cùng một hệ số sau mỗi bước, đó chính là đặc trưng của tăng trưởng hàm mũ. Mô hình bậc nhất cộng thêm cùng một lượng sau mỗi bước, còn mô hình dạng sin lặp lại theo chu kì.

Vậy mô hình phù hợp nhất là hàm mũ, chọn đáp án **C**.
:::

## Kế hoạch ôn tập

:::note Mười hai tuần trước kì thi
1. **Tuần 1–2:** [Số, xấp xỉ và toán tài chính](lesson:ibai-number-finance), rồi [Mô hình hàm số](lesson:ibai-function-models). Học thành thạo TVM solver và các menu hồi quy trên chính máy tính của bạn.
2. **Tuần 3–4:** hình học, lượng giác và sơ đồ Voronoi.
3. **Tuần 5–6:** thống kê, tương quan và kiểm định.
4. **Tuần 7–8:** giải tích ứng dụng; học sinh HL học thêm ma trận, lí thuyết đồ thị và phương trình vi phân.
5. **Tuần 9–12:** làm trọn đề có bấm giờ, rồi ghi sổ lỗi sai: với mỗi điểm bị mất, ghi rõ do phương pháp, do làm tròn hay do đọc đề.
:::

:::warning Những cái bẫy thường gặp
- **Chỉ ghi đáp số từ GDC:** hãy viết phương trình, loại hồi quy hoặc các giá trị nhập vào solver trước.
- **Làm tròn quá sớm:** lưu giá trị trong máy.
- **Thiếu đơn vị và tình huống:** viết "$6353{,}71$ đô la sau $6$ năm", không chỉ "$6353{,}71$".
- **Sai chế độ máy:** kiểm tra độ hay radian trước mọi bài lượng giác.
- **Dùng mô hình ngoài tập xác định:** nói rõ khi nào mô hình hết hợp lí.
:::

Quay lại những câu hỏi ở đầu bài: giá thật của một khoản vay, mô hình tốt nhất, vị trí tốt nhất cho bệnh viện. Câu nào cũng được trả lời bằng cách lập mô hình toán cẩn thận rồi nói rõ các con số nghĩa là gì. Gói gọn Math AI trong một câu thì là như vậy. Hãy dùng thành thạo máy tính của mình, tập viết ra phương pháp, rồi mọi thứ khác sẽ đến.

:::terms
- Applications and Interpretation (AI) | Ứng dụng và Diễn giải
- graphing display calculator (GDC) | máy tính cầm tay đồ thị
- internal assessment (IA) | đánh giá nội bộ (bài khám phá)
- formula booklet | sổ công thức
- significant figures | chữ số có nghĩa
- TVM solver | trình giải giá trị tiền theo thời gian
- model | mô hình
- method marks | điểm phương pháp
:::
