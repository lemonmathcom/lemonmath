---
title: Paper 3 và bài khám phá toán học (IA)
description: Cách ra đề các câu mở rộng của Paper 3 HL kèm một ví dụ có lời giải, và cách lên kế hoạch, viết, tự chấm bài khám phá IB Math AA theo năm tiêu chí.
minutes: 35
type: guide
---

:::goals
- Biết Paper 3 HL trông như thế nào và các câu dài của nó được xây dựng ra sao.
- Làm trọn một bài kiểu Paper 3: trường hợp đơn giản, quy luật, giả thuyết, chứng minh.
- Hiểu năm tiêu chí chấm bài khám phá toán học và điều gì được điểm ở mỗi tiêu chí.
- Lên kế hoạch bài khám phá từ lúc chọn đề tài đến lần kiểm tra cuối.
:::

Bạn đã quen với câu hỏi thi có đề rõ ràng và một đáp số cần tìm. IB Math AA còn hai phần không giống thế, và nhiều bạn thấy lạ khi gặp lần đầu. **Paper 3**, chỉ dành cho HL, gồm hai bài toán dài, dẫn từng bước tới một kết quả tổng quát. **Bài khám phá toán học (exploration)**, phần đánh giá nội bộ (IA) cho cả SL và HL, là một bài viết độc lập về đề tài bạn tự chọn. Mỗi phần chiếm 20% điểm tổng kết, nên đáng để bạn chuẩn bị có chủ đích. Ta sẽ xem các câu dài của Paper 3 được xây dựng ra sao, rồi xem bài khám phá được chấm như thế nào.

## Paper 3 trông như thế nào

Paper 3 HL gồm hai câu giải quyết vấn đề mở rộng, bắt buộc dùng máy tính vẽ đồ thị, được 55 điểm và chiếm 20% điểm HL. Từ các kì thi năm 2025, bài thi kéo dài 1 giờ 15 phút (tài liệu cũ ghi 1 giờ). Các câu này dài, nhưng đừng vội ngại: chúng được dẫn dắt rất rõ. Các ý đầu dễ và cụ thể, mỗi ý chuẩn bị cho ý sau. Cả câu thường đi theo đúng hành trình của một nghiên cứu toán học:

1. **Khám phá** các trường hợp nhỏ, bằng tay hoặc trên GDC, để làm quen với tình huống.
2. **Nhận ra quy luật** từ những kết quả đó và viết thành một giả thuyết (conjecture).
3. **Chứng minh** giả thuyết, thường bằng đại số, quy nạp hoặc giải tích, để biết nó đúng trong mọi trường hợp.
4. **Mở rộng** kết quả sang một tình huống mới.

Đề tài có thể lạ, nhưng công cụ luôn nằm trong chương trình, nên bạn không cần lo. Mẹo nhỏ là đọc hết câu hỏi trước khi làm: các ý sau thường hé lộ ý trước đang nhắm tới điều gì.

## Một bài kiểu Paper 3 có lời giải

:::example Đa giác nội tiếp đường tròn
Một đa giác đều $n$ cạnh nội tiếp đường tròn bán kính $1$.

(a) Chứng minh diện tích của nó là $A_n=\dfrac n2\sin\left(\dfrac{2\pi}{n}\right)$. [3 marks]
(b) Tìm giá trị chính xác của $A_4$ và $A_6$. [3 marks]
(c) Dùng GDC tính $A_{100}$, và đưa ra giả thuyết về $A_n$ khi $n\to\infty$. [3 marks]
(d) Chứng minh giả thuyết của bạn. [4 marks]

**Lời giải.** (a) Nối tâm với các đỉnh: được $n$ tam giác bằng nhau, mỗi tam giác có hai cạnh dài $1$ và góc xen giữa $\dfrac{2\pi}{n}$. Mỗi tam giác có diện tích $\dfrac12\sin\dfrac{2\pi}{n}$, nên $A_n=\dfrac n2\sin\dfrac{2\pi}{n}$.

(b) $A_4=2\sin\dfrac\pi2=2$ và $A_6=3\sin\dfrac\pi3=\dfrac{3\sqrt3}{2}$.

(c) $A_{100}\approx3{,}1395$. Giả thuyết: $A_n\to\pi$, diện tích hình tròn.

(d) Đặt $x=\dfrac{2\pi}{n}$, khi đó $x\to0^+$ khi $n\to\infty$. Ta có $A_n=\dfrac{\pi}{x}\sin x=\pi\cdot\dfrac{\sin x}{x}\to\pi\cdot1=\pi$, nhờ $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$ (hoặc quy tắc L'Hôpital).
:::

Bài vừa rồi là một mẫu hình rất điển hình. Ta bắt đầu từ vài giá trị cụ thể, thử bằng số, rồi viết một giả thuyết bằng lời và kí hiệu. Cuối cùng là một chứng minh ngắn, dùng một kết quả quen thuộc. Gặp bài khác, bạn cứ thử tìm lại các bước ấy.

:::tip Thói quen cho Paper 3
- Đừng bỏ qua các ý dễ đầu tiên: chúng có điểm, và còn cho bạn ý tưởng cho các ý sau.
- Khi đề yêu cầu "conjecture", hãy nêu một mệnh đề toán học chính xác, không phải một mô tả mơ hồ.
- Nếu chưa chứng minh được một ý, cứ thừa nhận kết quả của nó và dùng cho các ý sau. Làm vậy bạn không bị kẹt.
- Để ý đồng hồ: hai câu trong 75 phút nghĩa là khoảng 35 phút mỗi câu, cộng thời gian kiểm tra.
:::

## Bài khám phá toán học: năm tiêu chí

Bài khám phá khác ở chỗ câu hỏi là của chính bạn. Đó là một báo cáo viết, khuyến nghị dài khoảng 12 đến 20 trang, về một vấn đề toán học do bạn chọn. Giáo viên chấm bài, và IB có thể kiểm duyệt lại điểm. Tổng điểm là 20, chia theo năm tiêu chí:

| Tiêu chí | Điểm | Điều được thưởng điểm |
|---|---|---|
| A. Trình bày (Presentation) | 4 | Báo cáo mạch lạc, có tổ chức, súc tích, mục tiêu rõ ràng |
| B. Giao tiếp toán học (Mathematical communication) | 4 | Kí hiệu và thuật ngữ đúng, nhất quán; đồ thị, bảng, hình vẽ phù hợp |
| C. Dấn thân cá nhân (Personal engagement) | 3 | Tư duy của chính bạn: những lựa chọn, câu hỏi và ý tưởng rõ ràng là của bạn |
| D. Suy ngẫm (Reflection) | 3 | Đánh giá có phê phán về kết quả, phương pháp, giới hạn và ý nghĩa |
| E. Sử dụng toán học (Use of mathematics) | 6 | Toán học phù hợp, đúng, ngang tầm chương trình bạn học, và bạn thật sự hiểu |

Tiêu chí E có nhiều điểm nhất, nhưng nó phụ thuộc vào các tiêu chí khác. Lí do là toán học không được trình bày rõ, hoặc không gắn với mục tiêu, thì không thể hiện được bạn hiểu. Vì vậy đừng dồn hết sức vào phần tính toán mà bỏ quên cách viết.

## Chọn đề tài và viết báo cáo

Một đề tài tốt là đề tài **gắn với bản thân**, **tập trung** và **có toán học thật sự**. Hãy so hai cách đặt đề. "Toán học trong âm nhạc" quá rộng, khó biết bắt đầu từ đâu. "Mô hình hoá tần số các phím đàn guitar bằng cấp số nhân và đo sai số" thì tập trung, có toán thật, và gắn với điều bạn đang làm.

:::note Một cấu trúc hiệu quả
1. **Mở đầu và mục tiêu:** vì sao đề tài cuốn hút bạn, và câu hỏi chính xác bạn sẽ trả lời.
2. **Kiến thức nền:** chỉ những định nghĩa và kết quả cần dùng, viết bằng lời của chính bạn.
3. **Phần chính:** toán học từng bước, mọi kí hiệu đều được định nghĩa, mọi đồ thị đều có nhãn.
4. **Suy ngẫm trong suốt bài:** nhận xét ý nghĩa của từng kết quả ngay khi có nó, không để đến cuối.
5. **Kết luận:** trả lời mục tiêu đã đặt ra, bàn về giới hạn và hướng mở rộng.
6. **Tài liệu tham khảo:** mọi nguồn bạn đã dùng.
:::

:::warning Những cái bẫy thường gặp
- **Tóm tắt sách giáo khoa.** Chép lại lí thuyết đã biết mà không có câu hỏi của riêng bạn thì được rất ít điểm ở C và E.
- **Toán dưới tầm chương trình.** Với AA, một dự án chỉ dùng phần trăm và biểu đồ cột không thể đạt điểm cao ở E.
- **Toán vượt quá sự hiểu của bạn.** Chép các phương pháp nâng cao mà bạn không giải thích được cũng làm mất điểm ở E.
- **Chỉ suy ngẫm ở đoạn cuối.** Tiêu chí D thưởng cho những nhận xét có phê phán xuyên suốt bài.
- **Kí hiệu trôi nổi:** viết $=$ khi ý là $\approx$, biến không được định nghĩa, hoặc lẫn độ với radian. Chỗ này nhiều bạn hay nhầm, nên đọc lại kĩ trước khi nộp.
:::

## Lịch trình làm bài khám phá

1. **Đề tài và mục tiêu:** nghĩ ra ba ý tưởng, kiểm tra xem mỗi ý có toán học AA thật sự không, rồi thống nhất một ý với giáo viên.
2. **Bản nháp đầu:** viết phần toán trước, rồi mới viết mở đầu và kết luận.
3. **Góp ý:** giáo viên có thể nhận xét một bản nháp; hãy đọc các nhận xét đó nghiêm túc và sửa theo.
4. **Tự chấm:** chấm bản nháp theo năm tiêu chí, chặt tay như một người kiểm duyệt.
5. **Bản cuối:** kiểm tra từng kí hiệu, nhãn, trích dẫn và trang.

Cả Paper 3 lẫn bài khám phá đều thưởng cho cùng một thói quen: suy nghĩ như một nhà toán học, không chỉ trả lời câu hỏi. Hai phần trông lạ ấy thật ra đòi cùng một cách nghĩ, và luyện dần là có. Khi đã quen với cách nghĩ đó, bạn thử làm [đề luyện SL](lesson:ibaa-practice-paper-sl) nhé.
