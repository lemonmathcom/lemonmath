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

Có hai phần của IB Math AA trông khác hẳn câu hỏi thi thông thường. **Paper 3**, chỉ dành cho HL, gồm hai bài toán dài dẫn dắt tới một kết quả tổng quát. **Bài khám phá toán học (exploration)**, phần đánh giá nội bộ (IA) cho cả SL và HL, là một bài viết độc lập về đề tài bạn tự chọn. Mỗi phần chiếm 20% điểm tổng kết, nên cả hai đều cần được chuẩn bị có chủ đích.

## Paper 3 trông như thế nào

Paper 3 HL gồm hai câu giải quyết vấn đề mở rộng, bắt buộc dùng máy tính vẽ đồ thị, được 55 điểm và chiếm 20% điểm HL. Từ các kì thi năm 2025, bài thi kéo dài 1 giờ 15 phút (tài liệu cũ ghi 1 giờ). Các câu dài nhưng được dẫn dắt rất rõ: các ý đầu dễ và cụ thể, mỗi ý chuẩn bị cho ý sau. Chúng thường đi theo đúng hành trình của nghiên cứu toán học:

1. **Khám phá** các trường hợp nhỏ, bằng tay hoặc trên GDC.
2. **Nhận ra quy luật** và viết thành một giả thuyết (conjecture).
3. **Chứng minh** giả thuyết, thường bằng đại số, quy nạp hoặc giải tích.
4. **Mở rộng** kết quả sang một tình huống mới.

Đề tài có thể lạ, nhưng công cụ luôn nằm trong chương trình. Hãy đọc hết câu hỏi trước: các ý sau thường hé lộ ý trước đang nhắm tới điều gì.

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

Mẫu hình này rất điển hình: giá trị cụ thể, một thí nghiệm bằng số, một giả thuyết viết bằng lời và kí hiệu, rồi một chứng minh ngắn dùng một kết quả quen thuộc.

:::tip Thói quen cho Paper 3
- Đừng bỏ qua các ý dễ đầu tiên: chúng có điểm và cho bạn ý tưởng.
- Khi một ý yêu cầu "conjecture", hãy nêu một mệnh đề toán học chính xác, không phải một mô tả mơ hồ.
- Nếu không chứng minh được một ý, hãy thừa nhận kết quả của nó và dùng cho các ý sau.
- Để ý đồng hồ: hai câu trong 75 phút nghĩa là khoảng 35 phút mỗi câu, cộng thời gian kiểm tra.
:::

## Bài khám phá toán học: năm tiêu chí

Bài khám phá là một báo cáo viết, khuyến nghị dài khoảng 12 đến 20 trang, về một câu hỏi toán học do bạn chọn. Giáo viên chấm bài, và IB có thể kiểm duyệt lại điểm. Bài được chấm trên 20 điểm theo năm tiêu chí:

| Tiêu chí | Điểm | Điều được thưởng điểm |
|---|---|---|
| A. Trình bày (Presentation) | 4 | Báo cáo mạch lạc, có tổ chức, súc tích, mục tiêu rõ ràng |
| B. Giao tiếp toán học (Mathematical communication) | 4 | Kí hiệu và thuật ngữ đúng, nhất quán; đồ thị, bảng, hình vẽ phù hợp |
| C. Dấn thân cá nhân (Personal engagement) | 3 | Tư duy của chính bạn: những lựa chọn, câu hỏi và ý tưởng rõ ràng là của bạn |
| D. Suy ngẫm (Reflection) | 3 | Đánh giá có phê phán về kết quả, phương pháp, giới hạn và ý nghĩa |
| E. Sử dụng toán học (Use of mathematics) | 6 | Toán học phù hợp, đúng, ngang tầm chương trình bạn học, và bạn thật sự hiểu |

Tiêu chí E có nhiều điểm nhất, nhưng phụ thuộc vào các tiêu chí khác: toán học không được trình bày rõ, hoặc không gắn với mục tiêu, thì không thể hiện được sự hiểu biết.

## Chọn đề tài và viết báo cáo

Một đề tài tốt là đề tài **gắn với bản thân**, **tập trung** và **có toán học thật sự**. "Toán học trong âm nhạc" quá rộng; "Mô hình hoá tần số các phím đàn guitar bằng cấp số nhân và đo sai số" thì tập trung, có toán thật, và gắn với điều bạn đang làm.

:::note Một cấu trúc hiệu quả
1. **Mở đầu và mục tiêu:** vì sao đề tài cuốn hút bạn, và câu hỏi chính xác bạn sẽ trả lời.
2. **Kiến thức nền:** chỉ những định nghĩa và kết quả cần dùng, diễn đạt bằng lời của bạn.
3. **Phần chính:** toán học từng bước, mọi kí hiệu đều được định nghĩa, mọi đồ thị đều có nhãn.
4. **Suy ngẫm trong suốt bài:** bình luận ý nghĩa của từng kết quả, không chỉ ở cuối.
5. **Kết luận:** trả lời mục tiêu, bàn về giới hạn và hướng mở rộng.
6. **Tài liệu tham khảo:** mọi nguồn bạn đã dùng.
:::

:::warning Những cái bẫy thường gặp
- **Tóm tắt sách giáo khoa.** Chép lại lí thuyết đã biết mà không có câu hỏi của riêng bạn thì được rất ít điểm ở C và E.
- **Toán dưới tầm chương trình.** Với AA, một dự án chỉ dùng phần trăm và biểu đồ cột không thể đạt điểm cao ở E.
- **Toán vượt quá sự hiểu của bạn.** Chép các phương pháp nâng cao mà không giải thích được cũng mất điểm ở E.
- **Chỉ suy ngẫm ở đoạn cuối.** Tiêu chí D thưởng cho những nhận xét có phê phán xuyên suốt bài.
- **Kí hiệu trôi nổi:** viết $=$ khi ý là $\approx$, biến không được định nghĩa, hoặc lẫn độ với radian.
:::

## Lịch trình làm bài khám phá

1. **Đề tài và mục tiêu:** nghĩ ra ba ý tưởng, kiểm tra xem mỗi ý có toán học AA thật sự không, rồi thống nhất một ý với giáo viên.
2. **Bản nháp đầu:** viết phần toán trước, rồi mới viết mở đầu và kết luận.
3. **Góp ý:** giáo viên có thể nhận xét một bản nháp; hãy dùng các nhận xét đó nghiêm túc.
4. **Tự chấm:** chấm bản nháp theo năm tiêu chí, chặt như một người kiểm duyệt.
5. **Bản cuối:** kiểm tra từng kí hiệu, nhãn, trích dẫn và trang.

Cả Paper 3 lẫn bài khám phá đều thưởng cho cùng một thói quen: suy nghĩ như một nhà toán học, không chỉ trả lời câu hỏi. Khi đã luyện được thói quen đó, hãy thử [đề luyện SL](lesson:ibaa-practice-paper-sl).
