---
title: Xác suất và thống kê
description: "IGCSE Toán Extended: sơ đồ cây, biểu đồ Ven và xác suất có điều kiện, ước lượng số trung bình mẫu ghép nhóm, biểu đồ mật độ tần số, tần số tích luỹ."
minutes: 50
---

:::goals
- Tính xác suất của biến cố kết hợp bằng sơ đồ cây và biểu đồ Ven, kể cả lấy không hoàn lại và xác suất có điều kiện.
- Ước lượng số trung bình của mẫu số liệu ghép nhóm và tìm nhóm chứa trung vị.
- Vẽ và đọc biểu đồ tần số (histogram) có độ rộng nhóm khác nhau bằng mật độ tần số, và đọc đồ thị tần số tích luỹ.
:::

Một túi có $5$ viên kẹo đỏ và $3$ viên kẹo xanh. Em lấy một viên, ăn luôn, rồi lấy viên nữa. Khả năng hai viên cùng màu là bao nhiêu? Nhiều em nhân $\tfrac58\times\tfrac58$ cho màu đỏ rồi dừng, và mắc hai lỗi trong một dòng. Viên thứ hai được lấy từ túi đã bớt một viên, và "cùng màu" còn gồm cả trường hợp hai viên xanh.

Câu hỏi xác suất trong đề IGCSE hiếm khi khó về tính toán. Chúng kiểm tra xem em có đọc đúng tình huống không. Thống kê cũng vậy: phép tính ngắn, nhưng mỗi phép tính giấu một ý, như giá trị đại diện hay mật độ tần số, phải nắm chắc. Bài này đi qua từng ý một.

## Biến cố kết hợp và sơ đồ cây

Với hai biến cố, "và" thường là nhân dọc theo nhánh, còn "hoặc" là cộng các kết quả riêng rẽ. **Sơ đồ cây** giúp sắp xếp gọn gàng: ghi xác suất trên mỗi nhánh, nhân dọc từng đường đi, rồi cộng các đường đi cần lấy.

Nếu vật thứ nhất không được trả lại, xác suất trên các nhánh thứ hai sẽ thay đổi. Đó là toàn bộ ý nghĩa của **lấy không hoàn lại**.

:::example Hai viên kẹo
Một túi có $5$ viên kẹo đỏ và $3$ viên kẹo xanh. Lấy ngẫu nhiên lần lượt hai viên không hoàn lại. Tính xác suất hai viên cùng màu.
A. $\dfrac{13}{28}$
B. $\dfrac{17}{32}$
C. $\dfrac{15}{28}$
D. $\dfrac{5}{14}$

**Lời giải.** Hai viên đỏ: $\dfrac58\times\dfrac47=\dfrac{20}{56}$, vì sau khi lấy một viên đỏ còn $4$ viên đỏ trong $7$ viên.

Hai viên xanh: $\dfrac38\times\dfrac27=\dfrac{6}{56}$.

Đây là hai kết quả riêng rẽ, nên ta cộng: $\dfrac{20}{56}+\dfrac{6}{56}=\dfrac{26}{56}=\dfrac{13}{28}$.

Vậy xác suất là $\dfrac{13}{28}$, chọn **A**. Phương án B là kết quả khi viên thứ nhất được trả lại, còn phương án C là xác suất hai viên khác màu.
:::

## Biểu đồ Ven và xác suất có điều kiện

**Biểu đồ Ven** cho thấy hai nhóm giao nhau thế nào. Điền từ trong ra ngoài: phần chung trước, rồi phần còn lại của mỗi vòng tròn, cuối cùng là phần nằm ngoài cả hai vòng.

**Xác suất có điều kiện** hỏi xác suất *khi đã biết* một điều gì đó. Điều đã biết thu hẹp nhóm ta chọn: $P(B\mid A)$ bằng số phần tử thuộc cả $A$ và $B$ chia cho số phần tử thuộc $A$.

:::example Bóng đá và bóng rổ
Một lớp có $30$ học sinh, $18$ em chơi bóng đá, $12$ em chơi bóng rổ và $5$ em chơi cả hai. Chọn ngẫu nhiên một học sinh trong số các em chơi bóng đá. Tính xác suất em đó cũng chơi bóng rổ.

**Lời giải.** Trong biểu đồ Ven, phần chung là $5$, chỉ bóng đá là $18-5=13$, chỉ bóng rổ là $12-5=7$, không chơi môn nào là $30-13-5-7=5$.

Đề cho biết học sinh chơi bóng đá, nên ta chỉ chọn trong $18$ em đó, và $5$ em trong số này cũng chơi bóng rổ.

Vậy xác suất là $\dfrac{5}{18}$, không phải $\dfrac{5}{30}$.
:::

## Số trung bình của mẫu ghép nhóm

Khi số liệu đã ghép nhóm, ta không còn biết giá trị chính xác, nên dùng **trung điểm** mỗi nhóm làm giá trị đại diện. Kết quả là một **ước lượng** của số trung bình, và đề IGCSE dùng đúng chữ "estimate".

:::example Số trung bình ghép nhóm
Bảng cho thời gian $t$ (phút) mà $30$ học sinh đi từ nhà đến trường.

| Thời gian $t$ | $0<t\le10$ | $10<t\le20$ | $20<t\le30$ | $30<t\le50$ |
|---|---|---|---|---|
| Tần số | $4$ | $10$ | $12$ | $4$ |

Tính ước lượng thời gian trung bình, và cho biết nhóm chứa trung vị.

**Lời giải.** Các trung điểm là $5$, $15$, $25$ và $40$. Nhân mỗi trung điểm với tần số rồi cộng: $4\times5+10\times15+12\times25+4\times40=20+150+300+160=630$.

Số trung bình ước lượng là $\dfrac{630}{30}=21$ phút.

Trung vị là giá trị ở giữa, nằm giữa giá trị thứ $15$ và thứ $16$. Hai nhóm đầu có $4+10=14$ học sinh, nên cả hai giá trị này thuộc nhóm $20<t\le30$.

Vậy thời gian trung bình ước lượng là $21$ phút, trung vị thuộc nhóm $20<t\le30$.
:::

## Biểu đồ tần số và tần số tích luỹ

Khi các nhóm có **độ rộng khác nhau**, chiều cao cột không thể chỉ là tần số: một nhóm rộng sẽ trông to quá mức. Thay vào đó, **diện tích** mỗi cột biểu thị tần số, còn chiều cao là **mật độ tần số**:

$$\text{mật độ tần số}=\frac{\text{tần số}}{\text{độ rộng nhóm}}.$$

Với thời gian đi học ở trên, độ rộng các nhóm là $10$, $10$, $10$ và $20$, nên mật độ là $0{,}4$, $1$, $1{,}2$ và $0{,}2$.

:::graph Biểu đồ tần số của thời gian đi học
alt: Biểu đồ tần số có các cột từ 0 đến 10 cao 0,4, từ 10 đến 20 cao 1, từ 20 đến 30 cao 1,2, từ 30 đến 50 cao 0,2; trục ngang là thời gian (phút), trục đứng là mật độ tần số
x: 0..55
y: 0..1.4
shape: free
fill: 0.4 ; 0 ; 0..10
fill: 1 ; 0 ; 10..20
fill: 1.2 ; 0 ; 20..30
fill: 0.2 ; 0 ; 30..50
segment: (0, 0.4) (10, 0.4)
segment: (10, 0) (10, 1)
segment: (10, 1) (20, 1)
segment: (20, 0) (20, 1.2)
segment: (20, 1.2) (30, 1.2)
segment: (30, 0) (30, 1.2)
segment: (30, 0.2) (50, 0.2)
segment: (50, 0) (50, 0.2)
:::

Đồ thị **tần số tích luỹ** biểu diễn tổng dồn theo đầu mút trên của mỗi nhóm. Muốn ước lượng trung vị, dóng ngang từ một nửa tổng tần số; với các tứ phân vị, dóng từ một phần tư và ba phần tư. **Khoảng tứ phân vị** bằng tứ phân vị trên trừ tứ phân vị dưới, mô tả độ phân tán của nửa giữa số liệu.

:::warning Những chỗ hay sai
- **Không hoàn lại:** ở nhánh thứ hai, cả tử số lẫn mẫu số đều thay đổi.
- **"Cùng màu" hay "ít nhất một":** liệt kê mọi đường đi phù hợp, hoặc dùng $1-P(\text{không có})$.
- **Xác suất có điều kiện:** chia cho số phần tử của nhóm đã biết, không chia cho cả tổng.
- **Số trung bình ghép nhóm:** dùng trung điểm và gọi kết quả là ước lượng.
- **Biểu đồ tần số:** trục đứng là mật độ tần số; tần số là diện tích cột.
:::

:::terms
- tree diagram | sơ đồ cây
- without replacement | không hoàn lại
- Venn diagram | biểu đồ Ven
- conditional probability | xác suất có điều kiện
- midpoint / estimate of the mean | giá trị đại diện (trung điểm) / ước lượng số trung bình
- frequency density | mật độ tần số
- cumulative frequency | tần số tích luỹ
- median / quartile / interquartile range | trung vị / tứ phân vị / khoảng tứ phân vị
:::

## Bài tập tương tự

:::exercise
Gieo hai con xúc xắc cân đối sáu mặt. Tính xác suất tổng số chấm bằng $8$.

::hint
**Kiến thức:** có $36$ kết quả đồng khả năng; liệt kê các cặp có tổng $8$.

::solution
Mỗi con xúc xắc có $6$ mặt, nên có $6\times6=36$ kết quả đồng khả năng.

Các cặp có tổng $8$ là $(2;\ 6)$, $(3;\ 5)$, $(4;\ 4)$, $(5;\ 3)$, $(6;\ 2)$: có $5$ kết quả.

Vậy xác suất là $\dfrac{5}{36}$.

**Đáp số.** $\dfrac{5}{36}$.
:::

:::exercise
Một vòng quay không cân đối dừng ở ô đỏ với xác suất $0{,}15$. Quay $200$ lần. Em dự đoán vòng quay dừng ở ô đỏ bao nhiêu lần?

::hint
**Kiến thức:** tần số kì vọng $=$ xác suất $\times$ số lần thử.

::solution
Số lần dừng ở ô đỏ dự đoán bằng xác suất nhân số lần quay: $0{,}15\times200=30$.

Đây là con số ta chờ đợi về trung bình; trong một lần thí nghiệm, kết quả thật có thể chênh đi một chút.

Vậy ta dự đoán khoảng $30$ lần.

**Đáp số.** $30$.
:::

:::exercise
Xác suất trời mưa vào một ngày bất kì là $0{,}3$, độc lập với các ngày khác. Tính xác suất trời mưa đúng một trong hai ngày.

::hint
**Kiến thức:** hai đường đi trên sơ đồ cây: mưa rồi tạnh, tạnh rồi mưa.

::solution
Chỉ mưa ngày thứ nhất: $0{,}3\times0{,}7=0{,}21$. Chỉ mưa ngày thứ hai: $0{,}7\times0{,}3=0{,}21$.

Đây là hai đường đi riêng rẽ, nên ta cộng: $0{,}21+0{,}21=0{,}42$.

Vậy xác suất là $0{,}42$.

**Đáp số.** $0{,}42$.
:::

:::exercise
Bảng cho số bàn thắng của một đội trong $20$ trận. Tính số trung bình, trung vị và mốt.

| Số bàn thắng | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| Tần số | $3$ | $5$ | $7$ | $5$ |

::hint
**Kiến thức:** số trung bình là $\dfrac{\sum fx}{\sum f}$; trung vị nằm giữa giá trị thứ $10$ và thứ $11$.

::solution
Tổng số bàn thắng là $0\times3+1\times5+2\times7+3\times5=34$, nên số trung bình là $\dfrac{34}{20}=1{,}7$.

Tổng dồn là $3$, $8$, $15$, $20$, nên giá trị thứ $10$ và thứ $11$ đều bằng $2$: trung vị là $2$. Tần số lớn nhất là $7$, ứng với $2$ bàn, nên mốt là $2$.

Vậy số trung bình là $1{,}7$, trung vị $2$ và mốt $2$.

**Đáp số.** Số trung bình $1{,}7$; trung vị $2$; mốt $2$.
:::

:::exercise
Trong một biểu đồ tần số, nhóm $20<x\le35$ có tần số $18$. Tính chiều cao cột của nhóm này.

::hint
**Kiến thức:** mật độ tần số $=\dfrac{\text{tần số}}{\text{độ rộng nhóm}}$.

::solution
Độ rộng nhóm là $35-20=15$. Trong biểu đồ tần số, tần số là diện tích cột, nên chiều cao bằng tần số chia cho độ rộng.

Mật độ tần số là $\dfrac{18}{15}=1{,}2$, và đó là chiều cao cột.

Vậy cột cao $1{,}2$.

**Đáp số.** $1{,}2$.
:::

## Bài tập vận dụng

:::exercise
Một hộp có $4$ bóng đèn tốt và $2$ bóng hỏng. Lấy ngẫu nhiên lần lượt hai bóng không hoàn lại. Tính xác suất có ít nhất một bóng hỏng.

::hint
**Kiến thức:** $P(\text{ít nhất một})=1-P(\text{không có})$.

::solution
Cả hai bóng tốt: $\dfrac46\times\dfrac35=\dfrac{12}{30}=\dfrac25$, vì sau khi lấy một bóng tốt còn $3$ bóng tốt trong $5$ bóng.

"Ít nhất một bóng hỏng" là mọi trường hợp trừ "cả hai bóng tốt", nên xác suất là $1-\dfrac25=\dfrac35$.

Vậy xác suất là $\dfrac35$.

**Đáp số.** $\dfrac35$.
:::

:::exercise
Số trung bình của $8$ số là $15$. Bỏ đi một số là $22$. Tính số trung bình của $7$ số còn lại.

::hint
**Kiến thức:** làm việc với tổng, không làm với số trung bình.

::solution
Tổng của $8$ số là $8\times15=120$. Bỏ số $22$ đi, tổng còn $120-22=98$.

Số trung bình mới là $\dfrac{98}{7}=14$.

Vậy số trung bình của các số còn lại là $14$; nó giảm vì số bị bỏ lớn hơn số trung bình.

**Đáp số.** $14$.
:::

:::exercise
Dùng tổng dồn của thời gian đi học trong bài ($4$, $14$, $26$, $30$ tại $t=10$, $20$, $30$, $50$). Ước lượng trung vị, giả sử các giá trị trải đều trong mỗi nhóm.

::hint
**Kiến thức:** trung vị ứng với tần số tích luỹ $15$, nằm trong nhóm $20<t\le30$.

::solution
Một nửa của $30$ là $15$. Tần số tích luỹ là $14$ tại $t=20$ và $26$ tại $t=30$, nên trung vị là học sinh thứ $1$ trong nhóm có $12$ học sinh.

Trải đều $12$ học sinh trên $10$ phút của nhóm, trung vị khoảng $20+\dfrac{1}{12}\times10\approx20{,}8$ phút.

Vậy trung vị khoảng $20{,}8$ phút, đúng bằng giá trị đọc được trên đường tần số tích luỹ tại $15$.

**Đáp số.** Khoảng $20{,}8$ phút.
:::

:::exercise Thử thách
Trong $40$ người, $25$ người uống trà, $18$ người uống cà phê và $8$ người uống cả hai. Tìm số người không uống thứ nào, và xác suất một người uống cà phê được chọn ngẫu nhiên cũng uống trà.

::hint
**Kiến thức:** điền biểu đồ Ven từ phần chung ra ngoài.

::solution
Chỉ uống trà là $25-8=17$, chỉ uống cà phê là $18-8=10$, nên $17+8+10=35$ người uống ít nhất một thứ, và $40-35=5$ người không uống thứ nào.

Biết người đó uống cà phê, ta chọn trong $18$ người uống cà phê, và $8$ người trong số đó cũng uống trà: xác suất là $\dfrac{8}{18}=\dfrac49$.

Vậy có $5$ người không uống thứ nào, và xác suất là $\dfrac49$.

**Đáp số.** $5$; $\dfrac49$.
:::

:::quiz
::mc
Trong biểu đồ tần số có độ rộng nhóm khác nhau, chiều cao mỗi cột là
A. tần số
B. mật độ tần số
C. độ rộng nhóm
D. tần số tích luỹ
::key B
Tần số chia cho độ rộng nhóm.

::mc
$P(A)=0{,}35$. Khi đó $P(\text{không }A)$ bằng
A. $0{,}65$
B. $0{,}35$
C. $0{,}7$
D. $1{,}35$
::key A
$1-0{,}35$.

::mc
Để ước lượng số trung bình của mẫu ghép nhóm, mỗi nhóm được đại diện bởi
A. đầu mút dưới
B. tần số
C. trung điểm
D. đầu mút trên
::key C
Trung điểm thay mặt cho mọi giá trị trong nhóm.

::mc
Số đặc trưng nào mô tả độ phân tán của nửa giữa số liệu?
A. số trung bình
B. mốt
C. trung vị
D. khoảng tứ phân vị
::key D
Tứ phân vị trên trừ tứ phân vị dưới.

::tf
Tung hai đồng xu cân đối. Mỗi khẳng định sau đúng hay sai?
a) Có $4$ kết quả đồng khả năng.
b) $P(\text{hai mặt ngửa})=\dfrac14$.
c) $P(\text{ít nhất một mặt ngửa})=\dfrac34$.
d) $P(\text{một ngửa, một sấp})=\dfrac14$.
::key T T T F
NS và SN cho $\dfrac24=\dfrac12$.

::sa
Tính số trung bình của $2$, $4$, $6$, $8$, $10$.
::key 6
$\dfrac{30}{5}$.

::sa
Tung một đồng xu cân đối hai lần. Tính xác suất được hai mặt sấp, viết dạng số thập phân.
::key 0,25
$0{,}5\times0{,}5$.
:::
