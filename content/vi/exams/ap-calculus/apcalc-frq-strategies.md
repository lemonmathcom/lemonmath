---
title: Các dạng câu tự luận AP Calculus và cách trình bày
description: Cách chấm câu tự luận AP Calculus, các dạng câu lặp lại hằng năm, mẫu câu giải thích được điểm và một ví dụ chấm đủ 9 điểm.
minutes: 35
type: guide
---

:::goals
- Nắm cách sắp xếp, thời gian và cách chấm sáu câu tự luận.
- Nhận ra các dạng câu lặp lại và những gì mỗi dạng thường hỏi.
- Viết lời giải thích theo đúng dạng người chấm chấp nhận.
- Tránh các lỗi trình bày làm mất điểm dù phần toán đã đúng.
:::

Phần tự luận chiếm một nửa điểm AP Calculus: sáu câu, mỗi câu chín điểm. Khác với phần trắc nghiệm, mỗi điểm ở đây gắn với một điều bạn viết ra. Rất nhiều học sinh hiểu giải tích nhưng mất điểm vì cách trình bày, và cách khắc phục rất cụ thể: biết người chấm tìm gì, rồi luyện viết đúng điều đó. Mọi điều trong bài này đều lấy từ hướng dẫn làm bài và hướng dẫn chấm công bố trên AP Central; bạn nên tự đọc hướng dẫn chấm của ít nhất vài câu gần đây.

## Phần tự luận diễn ra thế nào

- **Part A:** 2 câu trong 30 phút, bắt buộc dùng máy tính vẽ đồ thị. Để máy tính ở **chế độ radian**.
- **Part B:** 4 câu trong 60 phút, không dùng máy tính.
- Mỗi câu $9$ điểm, và các ý được chấm độc lập: sai ý (a) không làm bạn mất điểm ở ý (b). Nếu không làm được ý (a), hãy giả sử một giá trị hợp lí và làm tiếp.
- Đáp số **không cần rút gọn**: $\dfrac{3}{2}\left(2^4-1\right)$ cũng tốt như $22{,}5$.
- **Đáp số thập phân** phải chính xác đến **ba chữ số sau dấu phẩy**, làm tròn hoặc cắt bớt đều được. Trong một câu, lỗi làm tròn chỉ bị trừ tối đa một điểm, vì vậy hãy giữ nguyên độ chính xác ở các bước trung gian và chỉ làm tròn ở kết quả cuối.
- Bài làm phải viết bằng **kí hiệu toán học chuẩn**, không dùng cú pháp máy tính. $\displaystyle\int_1^5x^2\,dx$ được chấp nhận; "fnInt(X², X, 1, 5)" thì không.

:::tip Những việc máy tính được làm mà không cần ghi các bước
Ở Part A, bạn được dùng máy tính để vẽ đồ thị, giải phương trình, tính đạo hàm tại một điểm và tính tích phân xác định, chỉ cần ghi thiết lập và kết quả. Với mọi việc khác, hãy trình bày phần toán dẫn tới đáp số.
:::

## Các dạng câu lặp lại

Cơ cấu cụ thể thay đổi mỗi năm, nhưng các dạng sau trở lại liên tục. Biết trước chúng nghĩa là trong phòng thi bạn nhận ra câu hỏi, thay vì lần đầu gặp nó.

| Dạng | Thường cho gì | Thường hỏi gì |
|---|---|---|
| Tốc độ trong ngữ cảnh | Bảng hoặc công thức của tốc độ vào và tốc độ ra | Tổng Riemann hoặc tổng hình thang kèm đơn vị, tổng lượng, thời điểm đạt lớn nhất, ý nghĩa của đạo hàm |
| Chuyển động của hạt | Vận tốc dưới dạng công thức, đồ thị hoặc bảng | Khi nào hạt đi sang trái hay phải, nhanh dần hay chậm dần, vị trí, tổng quãng đường |
| Đồ thị của $f'$ hoặc $f$ | Đồ thị gồm các đoạn thẳng và cung | Cực trị và điểm uốn có giải thích, giá trị của $g(x)=\displaystyle\int_a^xf(t)\,dt$ |
| Phương trình vi phân | $\dfrac{dy}{dx}$ theo $x$ và $y$ | Vẽ trường hướng, xấp xỉ bằng tiếp tuyến, giải bằng tách biến |
| Diện tích và thể tích | Hai đường cong giới hạn một miền | Diện tích, thể tích theo thiết diện, thể tích khối tròn xoay |
| Khảo sát hàm số | Hàm cho ẩn, cho bằng bảng hoặc là hàm hợp | Đạo hàm bằng quy tắc chuỗi, định lí giá trị trung bình hoặc định lí giá trị trung gian, một giới hạn |
| Chỉ có ở BC | Đường cong tham số hoặc cực; đa thức Taylor hoặc chuỗi luỹ thừa | Tốc độ, quãng đường, diện tích cực; đa thức Taylor, cận sai số, khoảng hội tụ |

## Mẫu câu giải thích được điểm

Người chấm chỉ cho điểm giải thích khi lí do nói về đúng hàm số, đúng về mặt toán học, và thật sự dẫn tới kết luận. Hãy gọi tên hàm số: hướng dẫn chấm thường không chấp nhận những cụm mơ hồ như "hàm số" hay "đồ thị" khi không rõ đó là hàm nào.

| Để kết luận | Hãy viết |
|---|---|
| $f$ đạt cực đại tại $x=a$ | "$f'$ đổi dấu từ dương sang âm tại $x=a$." |
| $f$ đạt cực tiểu tại $x=a$ | "$f'$ đổi dấu từ âm sang dương tại $x=a$." |
| Giá trị lớn nhất, nhỏ nhất trên $[a,b]$ | Xét các ứng viên: liệt kê $f$ tại hai đầu mút và tại các điểm tới hạn, rồi chọn số lớn nhất hoặc nhỏ nhất. |
| Điểm uốn tại $x=a$ | "$f''$ đổi dấu tại $x=a$", hoặc "$f'$ chuyển từ đồng biến sang nghịch biến tại $x=a$." |
| Hạt nhanh dần tại $t=c$ | "$v(c)$ và $a(c)$ cùng dấu." |
| Hạt đổi chiều tại $t=c$ | "$v$ đổi dấu tại $t=c$." |
| Tồn tại một giá trị (IVT) | "$f$ liên tục trên $[a,b]$ và $k$ nằm giữa $f(a)$ và $f(b)$, nên ..." |
| Tồn tại một giá trị đạo hàm (MVT) | "$f$ khả vi, do đó liên tục, trên $[a,b]$, và $\dfrac{f(b)-f(a)}{b-a}=m$, nên ..." |
| Lớn hơn hay nhỏ hơn giá trị thật | Gắn với tính đơn điệu (tổng trái và phải) hoặc tính lồi lõm (tiếp tuyến, hình thang). |

Hai thói quen có ích. Thứ nhất, nêu **giả thiết** của định lí trước khi dùng: liên tục cho định lí giá trị trung gian, khả vi cho định lí giá trị trung bình. Thứ hai, giải thích kết quả **trong ngữ cảnh, kèm đơn vị**: "Tại thời điểm $t=3$ giờ, lượng nước trong bể đang giảm với tốc độ $2{,}5$ lít mỗi giờ."

## Một ví dụ có chấm điểm minh hoạ

Câu dưới đây do chúng tôi tự soạn, theo phong cách một câu chuyển động của hạt không dùng máy tính. Cách chia $9$ điểm mô phỏng cách các hướng dẫn chấm đã công bố chia điểm.

:::example Một câu chuyển động, có chấm điểm
Một hạt chuyển động trên trục $x$ với vận tốc $v(t)=t^2-6t+8$, $0\le t\le5$. Lúc $t=0$ hạt ở $x=2$.

(a) Trên những khoảng mở nào hạt đi sang trái? Giải thích.
(b) Tại $t=1$, tốc độ của hạt đang tăng hay giảm? Giải thích.
(c) Tìm vị trí của hạt lúc $t=3$.
(d) Tìm tổng quãng đường hạt đi được từ $t=0$ đến $t=5$.

**Lời giải và điểm.**

(a) $v(t)=(t-2)(t-4)<0$ khi $2<t<4$. Hạt đi sang trái trên $(2,4)$ vì ở đó $v(t)<0$. **2 điểm:** một cho khoảng, một cho lí do.

(b) $v(1)=3>0$ và $a(t)=2t-6$, nên $a(1)=-4<0$. Vận tốc và gia tốc trái dấu, nên tốc độ đang giảm. **2 điểm:** một cho $a(1)$, một cho kết luận kèm lí do.

(c) $x(3)=2+\displaystyle\int_0^3\left(t^2-6t+8\right)dt=2+\left[\frac{t^3}{3}-3t^2+8t\right]_0^3=2+6=8$. **2 điểm:** một cho tích phân cộng vị trí ban đầu, một cho đáp số.

(d) Tách tại chỗ $v$ đổi dấu: $\displaystyle\int_0^2v\,dt=\frac{20}{3}$, $\displaystyle\int_2^4v\,dt=-\frac43$ và $\displaystyle\int_4^5v\,dt=\frac43$. Tổng quãng đường là $\dfrac{20}{3}+\dfrac43+\dfrac43=\dfrac{28}{3}$. **3 điểm:** một cho việc dùng $|v|$ hoặc tách tại chỗ đổi dấu, một cho nguyên hàm, một cho đáp số.
:::

Hãy để ý những chỗ có thể mất điểm dù toán đúng: ghi khoảng mà không có lí do ở (a), viết "chậm dần" mà không nhắc tới $v$ và $a$ ở (b), tính vị trí mà quên giá trị ban đầu $2$ ở (c), và lấy độ dời $\dfrac{20}{3}$ thay cho quãng đường ở (d).

## Thói quen trình bày giữ điểm

:::warning Những lỗi mất điểm dù toán đúng
- **Chỉ ghi đáp số.** Ở câu không dùng máy tính, một con số không có lời giải đi kèm thường được rất ít điểm.
- **Lỗi nối kết.** Viết $\displaystyle\int_0^3v(t)\,dt=x(3)$ trong khi ý bạn là $x(3)-x(0)$: một dấu bằng nối hai thứ không bằng nhau có thể làm mất điểm.
- **Làm tròn quá sớm.** Giữ nguyên giá trị đầy đủ trong máy; chỉ làm tròn đáp số cuối.
- **Để máy ở chế độ độ** trong phần được dùng máy tính.
- **Trả lời sai câu hỏi.** "Khi nào $f$ đồng biến?" cần các khoảng của $x$; "giá trị lớn nhất bằng bao nhiêu?" cần một giá trị của $f$, không phải của $x$.
- **Thiếu đơn vị** khi đề yêu cầu.
:::

:::tip Luyện tập trong sáu tuần cuối
1. Mỗi tuần, làm hai câu tự luận đã công bố, có bấm giờ: $15$ phút mỗi câu.
2. Tự chấm bằng hướng dẫn chấm chính thức, từng điểm một, chặt như người chấm thật.
3. Chép mỗi lời giải thích bạn bị thiếu vào sổ lỗi sai, đúng nguyên văn dạng mà hướng dẫn chấm dùng.
4. Mỗi tuần đọc phần nhận xét chấm (scoring commentary) của một câu: nó cho thấy bài làm thật của học sinh và vì sao từng điểm được hay không được.
:::

Các câu tự luận đã công bố của nhiều năm, kèm hướng dẫn chấm và bài làm mẫu, đều miễn phí trên AP Central, ở trang kì thi AP Calculus AB và AP Calculus BC. Đó là tài liệu luyện tập tốt nhất hiện có, vì nó cho thấy không chỉ câu hỏi mà cả cách bài làm thật được chấm.
