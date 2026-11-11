---
title: Dùng Desmos và các mẹo làm bài SAT
description: Dùng tốt máy tính Desmos có sẵn, nhập đúng câu tự điền đáp số và áp dụng năm chiến thuật giúp tiết kiệm thời gian ở phần Toán SAT.
minutes: 30
type: guide
---

:::goals
- Dùng Desmos để giải phương trình, hệ phương trình, bài toán bậc hai và kiểm tra hai biểu thức có tương đương không.
- Nhập câu tự điền đáp số đúng định dạng đề thi chấp nhận.
- Biết khi nào giải trực tiếp, khi nào thay số, khi nào thử ngược từ các phương án.
- Dùng các công cụ của Bluebook (đánh dấu xem lại, gạch phương án, bảng công thức) để quản lí thời gian.
:::

Trong SAT thi trên máy, câu Toán nào cũng được dùng máy tính, và Bluebook có sẵn máy tính đồ thị Desmos. Học sinh học Toán ở Việt Nam thường giải đại số bằng tay rất nhanh, nên hay bỏ qua Desmos. Đó là một thiệt thòi: Desmos không thay được kĩ năng đại số của bạn, nhưng kiểm tra nó chỉ trong vài giây và cứu bạn khi phương trình quá rối. Bài này chỉ ra khi nào nên dùng và khi nào không.

## Năm việc Desmos làm trong vài giây

| Việc cần làm | Bạn gõ gì | Bạn đọc gì |
|---|---|---|
| Giải phương trình $f(x)=g(x)$ | Hai vế thành hai dòng `y=`, hoặc gõ nguyên phương trình | Hoành độ các giao điểm |
| Giải hệ phương trình | Hai phương trình đúng như đề cho | Giao điểm |
| Đỉnh và nghiệm của hàm bậc hai | Hàm số, ví dụ `y=2x^2-12x+10` | Bấm các điểm xám: đỉnh và giao điểm với trục $x$ |
| Kiểm tra hai biểu thức tương đương | Mỗi biểu thức một dòng `y=` | Tương đương nếu hai đồ thị trùng khít |
| Đếm số nghiệm | Hai vế thành hai đồ thị | Số giao điểm |

:::example Giải một phương trình rối
Nghiệm dương của $\sqrt{x+7}=x-5$ là bao nhiêu?

**Lời giải.** Giải tay: bình phương hai vế, giải $x^2-11x+18=0$, được $x=2$ hoặc $x=9$, rồi loại $x=2$ vì $\sqrt9=3\ne-3$. Dùng Desmos: gõ `y=sqrt(x+7)` và `y=x-5`. Hai đồ thị chỉ cắt nhau tại một điểm $(9, 4)$, nên đáp số là **9**. Desmos không bao giờ hiện nghiệm ngoại lai $x=2$, vì đồ thị không thể đi qua một điểm không nằm trên nó.
:::

:::tip Thanh trượt (slider)
Nếu đề có một hằng số như $k$, hãy gõ biểu thức chứa $k$, Desmos sẽ tạo thanh trượt. Kéo thanh trượt để thấy đồ thị thay đổi thế nào, rất có ích cho các câu kiểu "với giá trị nào của $k$ thì hệ vô nghiệm?"
:::

## Khi nào không nên dùng Desmos

Desmos chậm với những câu nhìn là ra: "nếu $3x+7=22$ thì $6x+5$ bằng bao nhiêu?" giải tay chỉ mất năm giây. Quy tắc tốt là: **nghĩ trước 15 giây**. Nếu thấy đường đi, hãy làm tay và chỉ dùng Desmos để kiểm tra. Nếu chưa thấy, hoặc số liệu xấu, hãy vẽ đồ thị.

Desmos cũng không đọc đề giúp bạn. Với bài toán có lời văn, lập đúng phương trình vẫn là việc của bạn.

## Nhập câu tự điền đáp số

Khoảng một phần tư số câu yêu cầu bạn gõ đáp số. Hướng dẫn trên màn hình Bluebook quy định cách nhập; những điểm chính là:

- Đáp số dương được dùng tối đa 5 kí tự, đáp số âm tối đa 6 kí tự kể cả dấu trừ.
- Được nhập phân số (`7/2`) và số thập phân (`3.5`). Hỗn số như $3\tfrac12$ không được chấp nhận: hãy gõ `7/2` hoặc `3.5`.
- Nếu phân số không vừa ô, hãy nhập số thập phân; số thập phân dài có thể làm tròn hoặc cắt bớt cho vừa ô, ví dụ `0.6666` hoặc `0.6667` cho $\tfrac23$.
- Không gõ đơn vị, dấu phần trăm, dấu phẩy hay kí hiệu tiền tệ. Chú ý SAT dùng dấu chấm cho số thập phân.
- Nếu có nhiều đáp số đúng, chỉ nhập một.

:::example Nhập đáp số
Nghiệm của $3x-2=0$ là $x=\dfrac23$. Những cách nhập nào được chấp nhận?

**Lời giải.** `2/3`, `.6666`, `.6667`, `0.666` và `0.667` được chấp nhận. `0.67` là số thập phân quá ngắn khi còn nhập được chính xác hơn, và `0.66` là sai. Lựa chọn an toàn nhất là phân số `2/3`.
:::

## Những chiến thuật giúp tiết kiệm thời gian

**1. Trả lời đúng điều được hỏi.** Gạch chân câu hỏi cuối: $x$, $2x$, $x+y$ hay "giá trị của $k$". Nhiều phương án sai chính là con số đúng của một đại lượng khác.

**2. Thay số.** Khi các phương án là biểu thức, chọn một giá trị đơn giản cho biến (tránh $0$ và $1$ vì chúng che mất sự khác nhau), tính biểu thức ban đầu rồi thử từng phương án.

:::example Thay số
Biểu thức nào tương đương với $(x+3)^2-(x-3)^2$?
A. $0$
B. $18$
C. $12x$
D. $2x^2+18$

**Lời giải.** Chọn $x=2$: $25-1=24$. Chỉ phương án C cho $24$. Đại số xác nhận điều đó: hiệu hai bình phương cho $(2x)(6)=12x$.
:::

**3. Thử ngược.** Khi các phương án là số và phương trình khó lập, hãy thử các phương án vào điều kiện của đề, bắt đầu từ giá trị ở giữa.

**4. Ước lượng trước.** Một phép ước lượng nhanh loại được các phương án quá lớn hoặc quá nhỏ, và phát hiện lỗi bấm máy.

**5. Dùng thời gian của module thông minh.** Câu hỏi xếp gần đúng từ dễ đến khó. Nếu một câu đã tốn hai phút mà bạn vẫn chưa có hướng, hãy chọn phương án hợp lí nhất, đánh dấu để xem lại rồi làm tiếp. Làm sai không bị trừ điểm.

## Các công cụ của Bluebook

- **Mark for Review** (đánh dấu xem lại) gắn cờ một câu; bảng điều hướng câu hỏi hiện mọi câu đã gắn cờ.
- **Answer eliminator** (gạch phương án) gạch các phương án bạn đã loại, để khỏi đọc lại.
- **Reference sheet** (bảng công thức) ghi các công thức diện tích, thể tích và tam giác. Hãy nắm rõ nó trước ngày thi để không mất thời gian tìm.
- **Timer** (đồng hồ) có thể ẩn, nhưng sẽ hiện cảnh báo khi gần hết giờ module.

Hãy tập dùng các công cụ này trong các đề luyện chính thức trên Bluebook để ngày thi thấy quen thuộc. Và nhớ thói quen quan trọng nhất trong bài [Ôn thi theo khoa học](lesson:evidence-based-revision): sau mỗi bộ đề, ghi mọi câu sai vào sổ lỗi sai, kể cả những câu sai vì nhập đáp số không đúng cách.
