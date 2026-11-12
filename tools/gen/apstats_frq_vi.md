Viết câu trả lời thành câu đầy đủ: gọi tên phương pháp, kiểm tra điều kiện và kết luận gắn với tình huống. Điểm của từng ý ghi trong ngoặc vuông; mỗi câu $10$ điểm.

:::exercise Câu 1 (10 điểm): Thu thập dữ liệu
Một trường có $1200$ học sinh, mỗi khối 10, 11, 12 có $400$ em, muốn tìm hiểu thời gian học sinh làm bài tập về nhà.

a) Viết một câu hỏi khảo sát thống kê mà trường có thể trả lời bằng một cuộc khảo sát. [2 điểm]
b) Mô tả cách chọn một mẫu ngẫu nhiên phân tầng $90$ học sinh, với các khối là tầng. [4 điểm]
c) Giải thích một ưu điểm của việc phân tầng theo khối trong tình huống này. [2 điểm]
d) Một giáo viên đề xuất đăng phiếu khảo sát lên trang web của trường cho ai muốn thì trả lời. Mô tả một độ chệch có khả năng xảy ra và chiều của nó. [2 điểm]

::hint
**Kiến thức:** câu hỏi khảo sát nói về một nhóm và được trả lời bằng dữ liệu có biến động; mẫu phân tầng lấy một mẫu ngẫu nhiên đơn giản từ mỗi tầng.

::solution
a) Một câu hỏi phù hợp: "Học sinh trường ta thường dành bao nhiêu phút làm bài tập về nhà vào một buổi tối trước ngày đi học?" Câu hỏi nói về toàn bộ học sinh, và câu trả lời thay đổi từ em này sang em khác.

b) Lấy $30$ học sinh ở mỗi khối, vì $\dfrac{90}{3}=30$ và các khối có sĩ số bằng nhau. Đánh số $400$ học sinh khối 10 từ $1$ đến $400$, dùng máy sinh số ngẫu nhiên chọn $30$ số khác nhau từ $1$ đến $400$ (bỏ qua số lặp), và khảo sát các em đó. Làm tương tự, riêng rẽ, cho khối 11 và khối 12.

c) Thời gian làm bài tập có lẽ khác nhau giữa các khối, chẳng hạn học sinh lớp lớn có thể có nhiều bài hơn. Phân tầng theo khối đảm bảo khối nào cũng có mặt trong mẫu và cho ước lượng thời gian làm bài điển hình của trường chính xác hơn so với mẫu ngẫu nhiên đơn giản cùng cỡ.

d) Học sinh tự chọn có trả lời hay không, đó là độ chệch do tự nguyện trả lời. Những em dành nhiều thời gian cho bài tập và có cảm nhận mạnh về điều này dễ trả lời hơn, nên cuộc khảo sát nhiều khả năng ước lượng quá cao thời gian làm bài điển hình.

Vậy các ý gồm một câu hỏi khảo sát rõ ràng, mẫu gồm $30$ học sinh chọn ngẫu nhiên trong mỗi khối, ước lượng chính xác hơn nhờ phân tầng, và nguy cơ ước lượng quá cao do tự nguyện trả lời.

**Đáp số.** Xem bài làm mẫu; ý chính: $30$ em mỗi khối chọn ngẫu nhiên, độ chệch tự nguyện trả lời dẫn đến ước lượng quá cao.
:::

:::exercise Câu 2 (10 điểm): Phân tích dữ liệu
Hai mẫu ngẫu nhiên, mỗi mẫu $40$ khách ở hai quán cà phê, cho thời gian chờ (phút) như sau.

| Quán | Min | $Q_1$ | Trung vị | $Q_3$ | Max | Trung bình | Độ lệch chuẩn |
|---|---|---|---|---|---|---|---|
| A | $2$ | $5$ | $7$ | $9$ | $16$ | $7{,}4$ | $3{,}0$ |
| B | $1$ | $3$ | $5$ | $11$ | $22$ | $7{,}1$ | $5{,}2$ |

a) So sánh trung tâm và độ phân tán của hai phân phối thời gian chờ. [4 điểm]
b) Dùng quy tắc $1{,}5\times\text{IQR}$ để xét xem quán B có giá trị ngoại lai không. [3 điểm]
c) Một khách muốn khá chắc chắn không phải chờ quá $12$ phút. Bạn khuyên quán nào? Giải thích. [3 điểm]

::hint
**Kiến thức:** so sánh bằng từ so sánh; với quán B, $\text{IQR}=11-3=8$.

::solution
a) Trung tâm: trung vị thời gian chờ ở quán B ($5$ phút) nhỏ hơn ở quán A ($7$ phút), còn hai trung bình gần bằng nhau ($7{,}1$ và $7{,}4$ phút). Độ phân tán: thời gian chờ ở quán B biến động nhiều hơn hẳn, với IQR là $11-3=8$ phút so với $9-5=4$ phút ở quán A, và độ lệch chuẩn $5{,}2$ so với $3{,}0$ phút.

b) Với quán B, $\text{IQR}=8$, nên hai ngưỡng là $3-1{,}5(8)=-9$ và $11+1{,}5(8)=23$ phút. Giá trị nhỏ nhất $1$ và lớn nhất $22$ đều nằm trong hai ngưỡng, nên quán B không có giá trị ngoại lai.

c) Quán A. Ở quán A, $75\%$ khách chờ không quá $9$ phút và lâu nhất là $16$ phút. Ở quán B, khoảng một phần tư số khách chờ từ $11$ phút trở lên và lâu nhất là $22$ phút, nên chờ lâu xảy ra thường hơn, dù trung vị thấp hơn.

Vậy quán B có thời gian chờ điển hình ngắn hơn nhưng biến động nhiều hơn hẳn, không có giá trị ngoại lai, và quán A là lựa chọn an toàn hơn để tránh chờ quá $12$ phút.

**Đáp số.** a) B có trung vị thấp hơn, trung bình gần bằng, độ phân tán lớn hơn nhiều; b) không có ngoại lai (ngưỡng $-9$ và $23$); c) quán A.
:::

:::exercise Câu 3 (10 điểm): Suy luận thống kê
Năm mươi học sinh tình nguyện được phân ngẫu nhiên vào nhóm ôn thi bằng một ứng dụng mới ($25$ em) hoặc bằng sách giáo khoa ($25$ em). Điểm nhóm dùng ứng dụng có trung bình $78{,}4$ và độ lệch chuẩn $8{,}1$; nhóm dùng sách có trung bình $73{,}6$ và độ lệch chuẩn $9{,}0$. Biểu đồ chấm của cả hai nhóm không lệch mạnh, không có ngoại lai.

Với $\alpha=0{,}05$, dữ liệu có cho bằng chứng thuyết phục rằng ôn bằng ứng dụng dẫn đến điểm trung bình cao hơn ôn bằng sách không? [10 điểm]

::hint
**Kiến thức:** kiểm định $t$ hai mẫu; sai số chuẩn $\sqrt{\dfrac{8{,}1^2}{25}+\dfrac{9{,}0^2}{25}}$.

::solution
*Nêu* [2 điểm]: $H_0:\mu_U-\mu_S=0$ và $H_a:\mu_U-\mu_S>0$, với $\mu_U$ và $\mu_S$ là điểm trung bình thật của những học sinh như các em này khi ôn bằng ứng dụng và bằng sách; $\alpha=0{,}05$.

*Kế hoạch* [3 điểm]: kiểm định $t$ hai mẫu cho hiệu hai trung bình. Ngẫu nhiên: các nghiệm thức được phân ngẫu nhiên. Chuẩn / mẫu lớn: mỗi nhóm có $25<30$ học sinh, nhưng biểu đồ chấm không lệch mạnh, không có ngoại lai.

*Thực hiện* [3 điểm]: sai số chuẩn là $\sqrt{\dfrac{8{,}1^2}{25}+\dfrac{9{,}0^2}{25}}=\sqrt{2{,}6244+3{,}24}\approx2{,}422$, nên
$$t=\frac{78{,}4-73{,}6}{2{,}422}\approx1{,}98,$$
với df $\approx47{,}5$ theo máy tính, cho giá trị P xấp xỉ $0{,}027$.

*Kết luận* [2 điểm]: vì giá trị P khoảng $0{,}027$ nhỏ hơn $\alpha=0{,}05$ nên ta bác bỏ $H_0$. Có bằng chứng thuyết phục rằng ôn bằng ứng dụng dẫn đến điểm trung bình cao hơn ôn bằng sách, với những học sinh như các tình nguyện viên này. Vì nghiệm thức được phân ngẫu nhiên nên kết luận được quan hệ nhân quả, nhưng tình nguyện viên không phải mẫu ngẫu nhiên, nên không mở rộng cho mọi học sinh.

Vậy dữ liệu thuyết phục ở mức $5\%$.

**Đáp số.** $t\approx1{,}98$, giá trị P $\approx0{,}027$; bác bỏ $H_0$.
:::

:::exercise Câu 4 (10 điểm): Câu tổng hợp
Một cầu thủ bóng rổ đã ném phạt thành công $75\%$ trong sự nghiệp. Giả sử các lần ném độc lập.

a) Trong một trận, cô ném $12$ quả phạt. Tính xác suất cô ném trúng ít nhất $10$ quả. [3 điểm]
b) Mùa này cô ném trúng $162$ trên $240$ quả phạt. Coi các lần ném này là một mẫu ngẫu nhiên phản ánh phong độ hiện tại, với $\alpha=0{,}05$, có bằng chứng thuyết phục rằng tỉ lệ thành công hiện tại của cô nhỏ hơn $0{,}75$ không? [4 điểm]
c) Huấn luyện viên nói sự sụt giảm cho thấy đôi giày mới khiến cô ném kém đi. Giải thích vì sao dữ liệu không ủng hộ kết luận này. [2 điểm]
d) Mô tả sai lầm loại I trong tình huống của ý b). [1 điểm]

::hint
**Kiến thức:** nhị thức với $n=12$, $p=0{,}75$; kiểm định $z$ một mẫu với $p_0=0{,}75$.

::solution
a) Số quả ném trúng $X$ có phân phối nhị thức với $n=12$ và $p=0{,}75$, vì mỗi lần ném thành công hoặc thất bại, các lần ném độc lập, $n$ cố định và $p$ không đổi. Khi đó
$$P(X\ge10)=P(X=10)+P(X=11)+P(X=12)\approx0{,}2323+0{,}1267+0{,}0317=0{,}3907.$$

b) *Nêu:* $H_0:p=0{,}75$ và $H_a:p<0{,}75$, với $p$ là tỉ lệ thành công thật hiện tại của cô; $\alpha=0{,}05$. *Kế hoạch:* kiểm định $z$ một mẫu; các lần ném được coi là mẫu ngẫu nhiên; $np_0=180$ và $n(1-p_0)=60$ đều ít nhất $10$. *Thực hiện:* $\hat p=\dfrac{162}{240}=0{,}675$ và $z=\dfrac{0{,}675-0{,}75}{\sqrt{0{,}75(0{,}25)/240}}=\dfrac{-0{,}075}{0{,}02795}\approx-2{,}68$, nên giá trị P xấp xỉ $0{,}0036$. *Kết luận:* vì $0{,}0036<0{,}05$ nên ta bác bỏ $H_0$; có bằng chứng thuyết phục rằng tỉ lệ thành công hiện tại của cô nhỏ hơn $0{,}75$.

c) Đôi giày không được phân ngẫu nhiên trong một thí nghiệm; đây là so sánh quan sát theo thời gian. Các biến khác như mệt mỏi, chấn thương hay thay đổi thời gian tập có thể giải thích sự sụt giảm, nên không kết luận được đôi giày là nguyên nhân.

d) Sai lầm loại I là kết luận tỉ lệ thành công của cô đã giảm dưới $0{,}75$ trong khi thực tế vẫn là $0{,}75$.

Vậy xác suất ở ý a) xấp xỉ $0{,}3907$, bằng chứng ở ý b) là thuyết phục, và không thể đổ lỗi sự sụt giảm cho đôi giày.

**Đáp số.** a) $\approx0{,}3907$; b) $z\approx-2{,}68$, giá trị P $\approx0{,}0036$, bác bỏ $H_0$; c) không có phân nhóm ngẫu nhiên; d) như trên.
:::
