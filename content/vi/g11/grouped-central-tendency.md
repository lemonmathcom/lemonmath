---
title: Các số đặc trưng đo xu thế trung tâm
description: Ước lượng số trung bình, trung vị, tứ phân vị và mốt của mẫu số liệu ghép nhóm bằng giá trị đại diện và tần số tích luỹ, rồi giải thích ý nghĩa của chúng.
minutes: 25
---

:::goals
- Tính số trung bình của mẫu số liệu ghép nhóm bằng các giá trị đại diện.
- Xác định nhóm chứa trung vị, tứ phân vị và tính các số đó bằng công thức.
- Tìm nhóm chứa mốt và tính mốt của mẫu số liệu ghép nhóm.
- So sánh các số đặc trưng với giá trị tính từ số liệu gốc và chọn số đặc trưng phù hợp để mô tả mẫu.
:::

Ở bài trước, $40$ bạn lớp 11 được hỏi về thời gian đi từ nhà đến trường, và số liệu được ghép thành bảng:

| Thời gian (phút) | $[0; 10)$ | $[10; 20)$ | $[20; 30)$ | $[30; 40)$ | $[40; 50)$ |
|---|---|---|---|---|---|
| Số bạn | $6$ | $14$ | $12$ | $6$ | $2$ |

Giả sử $40$ số liệu gốc đã mất, chỉ còn bảng này. Trung bình các bạn đi bao lâu? Thời gian nào mà một nửa số bạn không vượt quá? Thời gian nào là phổ biến nhất? Ở lớp 10 ta trả lời các câu hỏi này bằng số trung bình, trung vị, tứ phân vị và mốt. Bài này cho cách ước lượng chúng khi chỉ có số liệu ghép nhóm.

## Số trung bình

### Khám phá: thay mỗi số liệu bằng giá trị đại diện

Ta không biết giá trị chính xác của $14$ bạn trong nhóm $[10; 20)$, nhưng biết họ đi từ $10$ đến dưới $20$ phút. Nếu coi mỗi bạn trong nhóm đi đúng thời gian đại diện $15$ phút, thì $14$ bạn này cùng góp $14\cdot15=210$ phút vào tổng thời gian. Làm tương tự cho các nhóm khác rồi chia cho số bạn, ta được một ước lượng của số trung bình.

:::theorem Số trung bình của mẫu số liệu ghép nhóm
Cho mẫu số liệu ghép nhóm cỡ $n$ có $k$ nhóm; nhóm thứ $i$ có giá trị đại diện $c_i$ và tần số $m_i$. Số trung bình (ước lượng) là
$$\bar{x}=\dfrac{m_1c_1+m_2c_2+\dots+m_kc_k}{n}.$$
:::

Mỗi giá trị đại diện được nhân với tần số của nhóm, nên nhóm đông người được tính nhiều hơn. Công thức này cũng viết được là $\bar{x}=f_1c_1+\dots+f_kc_k$ với $f_i=\dfrac{m_i}{n}$ là tần số tương đối (dạng số thập phân).

:::example Số trung bình thời gian đi học
Ước lượng số trung bình của thời gian đi học từ bảng ở trên.

**Hiểu đề.** Ta cần $\bar{x}$ cho mẫu cỡ $n=40$ với $5$ nhóm có độ rộng $10$.

**Tìm cách giải.** Tìm giá trị đại diện của từng nhóm, nhân với tần số rồi cộng lại và chia cho $n$.

**Giải.** Các giá trị đại diện là $5$, $15$, $25$, $35$, $45$. Do đó
$$\bar{x}=\dfrac{6\cdot5+14\cdot15+12\cdot25+6\cdot35+2\cdot45}{40}=\dfrac{30+210+300+210+90}{40}=\dfrac{840}{40}=21.$$
Vậy thời gian đi học trung bình ước lượng là $21$ phút.

**Nhìn lại.** Từ $40$ số liệu gốc ở bài trước, số trung bình thật là $20{,}575$ phút. Ước lượng $21$ lệch khoảng $0{,}4$ phút, rất gần. Sai lệch này là do ta coi mọi bạn trong nhóm đi đúng thời gian đại diện, trong khi thực tế có bạn đi nhiều hơn, có bạn đi ít hơn, và các sai lệch phần lớn bù trừ nhau.
:::

## Trung vị và tứ phân vị

### Khám phá: tìm điểm chia đôi dựa vào tần số tích luỹ

Trung vị chia mẫu thành hai nửa bằng nhau. Với $n=40$, ta cần giá trị mà $\dfrac n2=20$ bạn đi dưới giá trị đó. Tần số tích luỹ của các nhóm là $6$, $20$, $32$, $38$, $40$. Vì $6<20\le20$ nên điểm chia đôi nằm trong nhóm $[10; 20)$, nhóm đầu tiên có tần số tích luỹ không nhỏ hơn $20$. Trước nhóm này mới có $6$ bạn, nên ta cần thêm $20-6=14$ bạn nữa trong số $14$ bạn của nhóm: lấy hết cả nhóm. Điểm chia đôi là đầu mút phải $20$.

Tổng quát, nếu nhóm chứa điểm chia đôi có $m_p$ bạn, trong đó ta cần thêm $\dfrac n2-C_{p-1}$ bạn, và giả sử các bạn trong nhóm phân bố đều, thì ta đi từ đầu mút trái $a_p$ một đoạn bằng $\dfrac{n/2-C_{p-1}}{m_p}$ của độ rộng nhóm.

:::theorem Trung vị và tứ phân vị của mẫu số liệu ghép nhóm
Cho mẫu số liệu ghép nhóm cỡ $n$, nhóm thứ $j$ có tần số $m_j$ và tần số tích luỹ $C_j$ (đặt $C_0=0$). Với $r=1, 2, 3$, gọi $[a_p; a_{p+1})$ là nhóm đầu tiên có $C_p\ge\dfrac{rn}{4}$. Tứ phân vị thứ $r$ là
$$Q_r=a_p+\dfrac{\dfrac{rn}{4}-C_{p-1}}{m_p}\cdot(a_{p+1}-a_p).$$
Tứ phân vị thứ hai $Q_2$ là **trung vị** $M_e$; $Q_1$ là **tứ phân vị thứ nhất** và $Q_3$ là **tứ phân vị thứ ba**.
:::

Khi $\dfrac{rn}{4}$ đúng bằng một tần số tích luỹ, chọn nhóm đó hay nhóm kế tiếp đều cho cùng một kết quả: đầu mút chung của hai nhóm.

:::example Trung vị và tứ phân vị của thời gian đi học
Ước lượng $M_e$, $Q_1$, $Q_3$ cho thời gian đi học, rồi so với giá trị tính từ số liệu gốc.

**Lời giải.** Tần số tích luỹ là $6$, $20$, $32$, $38$, $40$ và $n=40$.

Trung vị: $\dfrac n2=20$, nhóm đầu tiên có $C_p\ge20$ là $[10; 20)$ ($p=2$, $C_1=6$, $m_2=14$). Do đó $M_e=10+\dfrac{20-6}{14}\cdot10=20$.

Tứ phân vị thứ nhất: $\dfrac n4=10$; nhóm đầu tiên có $C_p\ge10$ cũng là $[10; 20)$. Do đó $Q_1=10+\dfrac{10-6}{14}\cdot10\approx12{,}86$.

Tứ phân vị thứ ba: $\dfrac{3n}{4}=30$; nhóm đầu tiên có $C_p\ge30$ là $[20; 30)$ ($C_2=20$, $m_3=12$). Do đó $Q_3=20+\dfrac{30-20}{12}\cdot10\approx28{,}33$.

Vậy $M_e=20$, $Q_1\approx12{,}86$, $Q_3\approx28{,}33$ phút.

**So với số liệu gốc.** Từ $40$ số liệu gốc ta có $M_e=19{,}5$, $Q_1=12{,}5$ và $Q_3=27{,}5$. Các ước lượng lệch dưới một phút.
:::

## Mốt

Mốt là giá trị xuất hiện nhiều nhất. Với số liệu ghép nhóm, ta xác định nhóm có tần số lớn nhất, gọi là **nhóm chứa mốt**, rồi chọn một điểm trong nhóm đó. Điểm đó không nhất thiết là giá trị đại diện: nó lệch về phía nhóm lân cận đông hơn, vì ở đó số liệu dày đặc hơn.

:::theorem Mốt của mẫu số liệu ghép nhóm
Gọi $[u_j; u_{j+1})$ là nhóm có tần số lớn nhất $m_j$, $h=u_{j+1}-u_j$ là độ rộng, và $m_{j-1}$, $m_{j+1}$ là tần số của hai nhóm kề (bằng $0$ nếu không có nhóm đó). Mốt là
$$M_o=u_j+\dfrac{m_j-m_{j-1}}{(m_j-m_{j-1})+(m_j-m_{j+1})}\cdot h.$$
:::

Nếu $m_{j-1}$ bằng $m_{j+1}$ thì phân số bằng $\dfrac12$ và mốt là trung điểm của nhóm. Nếu nhóm trước đông hơn nhóm sau ($m_{j-1}>m_{j+1}$), phân số nhỏ hơn $\dfrac12$ và mốt lệch về phía đầu mút trái.

:::example Mốt của thời gian đi học
Ước lượng mốt của thời gian đi học.

**Lời giải.** Nhóm có tần số lớn nhất là $[10; 20)$ với $m_j=14$, $u_j=10$, $h=10$. Hai nhóm kề có tần số $m_{j-1}=6$ và $m_{j+1}=12$. Do đó
$$M_o=10+\dfrac{14-6}{(14-6)+(14-12)}\cdot10=10+\dfrac{8}{10}\cdot10=18.$$
Vậy mốt ước lượng là $18$ phút.

**Nhận xét.** Giá trị đại diện của nhóm là $15$, còn mốt là $18$: nhóm sau $([20; 30)$, $12$ bạn) đông hơn nhóm trước ($[0; 10)$, $6$ bạn) nên mốt bị kéo về phía bên phải. Trong $40$ số liệu gốc, nhiều giá trị xuất hiện hai lần nên không có mốt duy nhất; con số $18$ cho biết vùng thời gian phổ biến nhất.
:::

Bây giờ ta tính đủ bốn số cho một bài toán thực tế và xem chúng nói gì.

:::example Mức lương của nhân viên
Giả sử mức lương tháng (triệu đồng) của $50$ nhân viên một công ty được ghép nhóm như sau: $[6; 9)$ có $10$ người, $[9; 12)$ có $18$ người, $[12; 15)$ có $14$ người, $[15; 18)$ có $6$ người, $[18; 21)$ có $2$ người. Ước lượng số trung bình, trung vị, $Q_1$, $Q_3$ và mốt (làm tròn đến hàng phần trăm). Nên dùng số nào để nói về mức lương "thông thường"?

**Lời giải.** Các giá trị đại diện là $7{,}5$; $10{,}5$; $13{,}5$; $16{,}5$; $19{,}5$ và tần số tích luỹ là $10$, $28$, $42$, $48$, $50$.

Số trung bình: $\bar{x}=\dfrac{10\cdot7{,}5+18\cdot10{,}5+14\cdot13{,}5+6\cdot16{,}5+2\cdot19{,}5}{50}=\dfrac{591}{50}=11{,}82$.

Trung vị: $\dfrac n2=25$, nhóm $[9; 12)$ ($C_1=10$, $m_2=18$): $M_e=9+\dfrac{25-10}{18}\cdot3\approx11{,}5$.

$Q_1$: $\dfrac n4=12{,}5$, nhóm $[9; 12)$: $Q_1=9+\dfrac{12{,}5-10}{18}\cdot3\approx9{,}42$.

$Q_3$: $\dfrac{3n}{4}=37{,}5$, nhóm $[12; 15)$ ($C_2=28$, $m_3=14$): $Q_3=12+\dfrac{37{,}5-28}{14}\cdot3\approx14{,}04$.

Mốt: nhóm $[9; 12)$ có $m_j=18$, hai nhóm kề có $10$ và $14$: $M_o=9+\dfrac{18-10}{(18-10)+(18-14)}\cdot3=9+\dfrac{8}{12}\cdot3=11$.

Vậy $\bar{x}\approx11{,}82$, $M_e\approx11{,}50$, $Q_1\approx9{,}42$, $Q_3\approx14{,}04$ và $M_o=11{,}00$ (triệu đồng).

**Ý nghĩa.** Số trung bình ($11{,}82$) lớn hơn trung vị ($11{,}5$) và mốt ($11$) vì một số ít nhân viên có lương cao (đến $21$ triệu đồng) kéo trung bình lên. Trung vị cho biết một nửa nhân viên lương không quá $11{,}5$ triệu đồng, và mốt cho biết mức lương phổ biến nhất nằm quanh $11$ triệu đồng. Để mô tả mức lương "thông thường", trung vị hoặc mốt phù hợp hơn số trung bình khi có vài giá trị lớn bất thường.
:::

:::example Ảnh hưởng của giá trị ngoại lai
Giả sử có thêm một bạn đi học mất $90$ phút, và số liệu gốc của $40$ bạn ở bài trước nay có $41$ giá trị. Số trung bình và trung vị thay đổi thế nào?

**Lời giải.** Tổng của $40$ số liệu gốc là $40\cdot20{,}575=823$. Với bạn thứ $41$, tổng là $823+90=913$ nên số trung bình mới là $\dfrac{913}{41}\approx22{,}27$ phút, tăng $22{,}27-20{,}575\approx1{,}7$ phút. Trung vị mới là giá trị thứ $21$ khi sắp xếp, bằng $20$ phút, so với trước đây là $19{,}5$, chỉ tăng $0{,}5$ phút.

Vậy một giá trị rất lớn làm số trung bình tăng khoảng $1{,}7$ phút nhưng trung vị chỉ tăng $0{,}5$ phút.

**Nhận xét.** Số trung bình bị ảnh hưởng nhiều bởi giá trị ngoại lai, còn trung vị và tứ phân vị ít bị ảnh hưởng hơn.
:::

**Kết nối.** Các công thức ở bài này dựa trên giá trị đại diện và tần số tích luỹ của bài trước, và lấy ý tưởng từ cách tìm số trung bình, trung vị, tứ phân vị và mốt ở lớp 10. Số trung bình cho biết "tâm" của dữ liệu theo nghĩa tổng, trung vị chia mẫu làm đôi, mốt chỉ vùng đông nhất. Khi cần biết dữ liệu trải rộng đến đâu, ta dùng thêm các số đo độ phân tán, tiếp nối các số đặc trưng đo xu thế trung tâm này.

:::warning Những sai lầm thường gặp
- **Quên nhân với tần số khi tính số trung bình.** Sai: $\bar{x}=\dfrac{5+15+25+35+45}{5}=25$. Vì sao sai: cách này coi mỗi nhóm có cùng số bạn. Đúng: $\bar{x}=\dfrac{6\cdot5+14\cdot15+12\cdot25+6\cdot35+2\cdot45}{40}=21$.
- **Cho rằng nhóm chứa trung vị là nhóm có tần số lớn nhất.** Sai: với tần số $15, 3, 3, 3, 16$ ($n=40$), nhóm chứa trung vị là nhóm thứ năm vì nó đông nhất. Vì sao sai: tần số tích luỹ $15, 18, 21$ cho thấy $\dfrac n2=20$ nằm trong nhóm thứ ba. Đúng: nhóm chứa trung vị là nhóm đầu tiên có tần số tích luỹ $\ge\dfrac n2$.
- **Dùng tần số của nhóm đứng trước thay cho tần số tích luỹ.** Sai: $Q_3=12+\dfrac{37{,}5-18}{14}\cdot3\approx16{,}18$ ở ví dụ lương. Vì sao sai: $18$ chỉ là tần số của nhóm thứ hai, trong khi trước nhóm $[12; 15)$ có $28$ người. Đúng: $C_{p-1}=28$ và $Q_3\approx14{,}04$.
- **Coi mốt là giá trị đại diện của nhóm đông nhất.** Sai: mốt của thời gian đi học là $15$. Vì sao sai: công thức cho thấy mốt bị kéo về phía nhóm lân cận đông hơn. Đúng: $M_o=18$.
:::

## Thuật ngữ

:::terms
- số trung bình | mean
- trung vị | median
- tứ phân vị | quartile
- mốt | mode
- nhóm chứa mốt | modal class
- giá trị đại diện | representative value (class midpoint)
- tần số tích luỹ | cumulative frequency
- xu thế trung tâm | central tendency
- giá trị ngoại lai | outlier
- mẫu số liệu ghép nhóm | grouped data
:::

## Tóm tắt

- Số trung bình: $\bar{x}=\dfrac{m_1c_1+\dots+m_kc_k}{n}$, với $c_i$ là giá trị đại diện và $m_i$ là tần số của nhóm thứ $i$.
- Tứ phân vị thứ $r$: $Q_r=a_p+\dfrac{\frac{rn}{4}-C_{p-1}}{m_p}\cdot(a_{p+1}-a_p)$, với $[a_p; a_{p+1})$ là nhóm đầu tiên có $C_p\ge\dfrac{rn}{4}$; trung vị $M_e=Q_2$.
- Mốt: $M_o=u_j+\dfrac{m_j-m_{j-1}}{(m_j-m_{j-1})+(m_j-m_{j+1})}\cdot h$, với $[u_j; u_{j+1})$ là nhóm có tần số lớn nhất.
- Các giá trị này chỉ là ước lượng của các số tính từ số liệu gốc, vì ta giả sử số liệu trong nhóm phân bố đều.
- Số trung bình chịu ảnh hưởng nhiều của giá trị ngoại lai; trung vị và tứ phân vị ít hơn.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Chiều cao của $40$ bạn được ghép nhóm: $[150; 155)$ có $4$, $[155; 160)$ có $10$, $[160; 165)$ có $14$, $[165; 170)$ có $9$, $[170; 175)$ có $3$ bạn. Ước lượng chiều cao trung bình (làm tròn đến hàng phần mười).

::hint
**Kiến thức:** $\bar{x}=\dfrac{m_1c_1+\dots+m_kc_k}{n}$.

**Gợi ý các bước:**
1. Viết giá trị đại diện của từng nhóm.
2. Nhân với tần số, cộng lại, chia cho $40$.

::solution
Các giá trị đại diện là $152{,}5$; $157{,}5$; $162{,}5$; $167{,}5$; $172{,}5$. Do đó $\bar{x}=\dfrac{4\cdot152{,}5+10\cdot157{,}5+14\cdot162{,}5+9\cdot167{,}5+3\cdot172{,}5}{40}=\dfrac{6485}{40}\approx162{,}1$.

**Đáp số.** Khoảng $162{,}1$ cm.
:::

:::exercise
Với bảng chiều cao ở bài trước, ước lượng trung vị, $Q_1$ và $Q_3$ (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** $Q_r=a_p+\dfrac{\frac{rn}{4}-C_{p-1}}{m_p}\cdot h$, $p$ là nhóm đầu tiên có $C_p\ge\dfrac{rn}{4}$.

**Gợi ý các bước:**
1. Lập tần số tích luỹ: $4, 14, 28, 37, 40$.
2. Tìm nhóm chứa $10$, $20$, $30$ rồi áp dụng công thức.

::solution
Tần số tích luỹ là $4, 14, 28, 37, 40$. Trung vị: $\dfrac n2=20$, nhóm $[160; 165)$ ($C_2=14$, $m_3=14$): $M_e=160+\dfrac{20-14}{14}\cdot5\approx162{,}14$. $Q_1$: $\dfrac n4=10$, nhóm $[155; 160)$ ($C_1=4$, $m_2=10$): $Q_1=155+\dfrac{10-4}{10}\cdot5=158$. $Q_3$: $\dfrac{3n}{4}=30$, nhóm $[165; 170)$ ($C_3=28$, $m_4=9$): $Q_3=165+\dfrac{30-28}{9}\cdot5\approx166{,}11$.

**Đáp số.** $M_e\approx162{,}14$; $Q_1=158$; $Q_3\approx166{,}11$ (cm).
:::

:::exercise
Với bảng chiều cao ở bài trước, ước lượng mốt (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** $M_o=u_j+\dfrac{m_j-m_{j-1}}{(m_j-m_{j-1})+(m_j-m_{j+1})}\cdot h$.

**Gợi ý các bước:**
1. Tìm nhóm có tần số lớn nhất và hai tần số kề.
2. Thay vào công thức.

::solution
Nhóm có tần số lớn nhất là $[160; 165)$ với $m_j=14$; hai nhóm kề có $10$ và $9$. Do đó $M_o=160+\dfrac{14-10}{(14-10)+(14-9)}\cdot5=160+\dfrac49\cdot5\approx162{,}22$.

**Đáp số.** $M_o\approx162{,}22$ cm.
:::

:::exercise
Giả sử lượng nước tiêu thụ mỗi tháng ($\text{m}^3$) của $50$ hộ gia đình được ghép nhóm: $[0; 5)$ có $4$ hộ, $[5; 10)$ có $16$ hộ, $[10; 15)$ có $18$ hộ, $[15; 20)$ có $9$ hộ, $[20; 25)$ có $3$ hộ. Ước lượng số trung bình, trung vị và mốt (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** ba công thức của bài; tần số tích luỹ là $4, 20, 38, 47, 50$.

**Gợi ý các bước:**
1. Tính $\bar{x}$ với các giá trị đại diện $2{,}5; 7{,}5; \dots$.
2. Với trung vị, tìm nhóm chứa $\dfrac n2=25$.
3. Mốt thuộc nhóm có $18$ hộ.

::solution
Số trung bình: $\bar{x}=\dfrac{4\cdot2{,}5+16\cdot7{,}5+18\cdot12{,}5+9\cdot17{,}5+3\cdot22{,}5}{50}=\dfrac{580}{50}=11{,}6$. Trung vị: $\dfrac n2=25$, nhóm $[10; 15)$ ($C_2=20$, $m_3=18$): $M_e=10+\dfrac{25-20}{18}\cdot5\approx11{,}39$. Mốt: nhóm $[10; 15)$ có tần số $18$, hai nhóm kề có $16$ và $9$: $M_o=10+\dfrac{18-16}{(18-16)+(18-9)}\cdot5\approx10{,}91$.

**Đáp số.** $\bar{x}=11{,}60$; $M_e\approx11{,}39$; $M_o\approx10{,}91$ ($\text{m}^3$).
:::

:::exercise
Thời gian chờ xe buýt (phút) của $25$ hành khách được ghép nhóm: $[0; 5)$ có $7$, $[5; 10)$ có $10$, $[10; 15)$ có $6$, $[15; 20)$ có $2$ hành khách. Ước lượng trung vị và $Q_3$ (làm tròn đến hàng phần trăm). Hiểu $Q_3$ thế nào trong tình huống này?

::hint
**Kiến thức:** tần số tích luỹ là $7, 17, 23, 25$; $\dfrac n2=12{,}5$ và $\dfrac{3n}{4}=18{,}75$.

**Gợi ý các bước:**
1. Tìm nhóm đầu tiên có $C_p\ge12{,}5$, rồi $\ge18{,}75$.
2. Áp dụng công thức.

::solution
Trung vị: nhóm $[5; 10)$ ($C_1=7$, $m_2=10$): $M_e=5+\dfrac{12{,}5-7}{10}\cdot5=7{,}75$. $Q_3$: nhóm $[10; 15)$ ($C_2=17$, $m_3=6$): $Q_3=10+\dfrac{18{,}75-17}{6}\cdot5\approx11{,}46$. Điều này có nghĩa là khoảng $\dfrac34$ số hành khách chờ không quá $11{,}46$ phút, hay khoảng một phần tư số hành khách chờ lâu hơn mức đó.

**Đáp số.** $M_e=7{,}75$ phút; $Q_3\approx11{,}46$ phút.
:::

:::exercise
Cho mẫu số liệu ghép nhóm: $[0; 10)$ có $5$, $[10; 20)$ có $x$, $[20; 30)$ có $15$, $[30; 40)$ có $5$. Biết số trung bình ước lượng bằng $20$. Tìm $x$.

::hint
**Kiến thức:** $n=25+x$; giá trị đại diện là $5, 15, 25, 35$.

**Gợi ý các bước:**
1. Viết $\bar{x}$ theo $x$.
2. Giải phương trình $\bar{x}=20$.

::solution
Ta có $\bar{x}=\dfrac{5\cdot5+15x+25\cdot15+35\cdot5}{25+x}=\dfrac{575+15x}{25+x}$. Từ $\dfrac{575+15x}{25+x}=20$ ta có $575+15x=500+20x$, suy ra $x=15$.

**Đáp số.** $x=15$.
:::

:::exercise
Doanh thu mỗi ngày (triệu đồng) của một cửa hàng trong $30$ ngày được ghép nhóm: $[10; 15)$ có $4$ ngày, $[15; 20)$ có $9$ ngày, $[20; 25)$ có $10$ ngày, $[25; 30)$ có $5$ ngày, $[30; 35)$ có $2$ ngày. Xét tính đúng sai của các mệnh đề sau:

a) $Q_1$ thuộc nhóm $[15; 20)$.

b) Trung vị $M_e=21$.

c) Số trung bình ước lượng là $\bar{x}\approx21{,}17$.

d) Mốt $M_o=22{,}5$.

::hint
**Kiến thức:** tần số tích luỹ là $4, 13, 23, 28, 30$; $\dfrac n4=7{,}5$, $\dfrac n2=15$.

**Gợi ý các bước:**
1. a) Tìm nhóm đầu tiên có $C_p\ge7{,}5$.
2. b) Tính $M_e$ ở nhóm $[20; 25)$.
3. c), d) Tính $\bar{x}$ và $M_o$.

::solution
a) **Đúng**: $C_1=4<7{,}5\le C_2=13$, nên $Q_1\in[15; 20)$.

b) **Đúng**: $M_e=20+\dfrac{15-13}{10}\cdot5=21$.

c) **Đúng**: $\bar{x}=\dfrac{12{,}5\cdot4+17{,}5\cdot9+22{,}5\cdot10+27{,}5\cdot5+32{,}5\cdot2}{30}=\dfrac{635}{30}\approx21{,}17$.

d) **Sai**: $M_o=20+\dfrac{10-9}{(10-9)+(10-5)}\cdot5\approx20{,}83$; $22{,}5$ chỉ là giá trị đại diện của nhóm.

**Đáp số.** a) Đúng; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Một mẫu số liệu ghép nhóm cỡ $40$ có tần số tích luỹ của nhóm $[10; 20)$ là $12$ và nhóm $[20; 30)$ có tần số $16$. Ước lượng trung vị.

::hint
**Kiến thức:** $\dfrac n2=20$ nằm trong nhóm $[20; 30)$ vì $12<20\le12+16$.

**Gợi ý các bước:**
1. Xác định $a_p$, $C_{p-1}$, $m_p$.
2. Thay vào công thức $M_e$.

::solution
Ta có $a_p=20$, $C_{p-1}=12$, $m_p=16$ và $h=10$. Do đó $M_e=20+\dfrac{20-12}{16}\cdot10=25$.

**Đáp số.** $M_e=25$.
:::

:::exercise Ôn tập
Dùng tần số tương đối của bảng thời gian đi học ở bài trước ($15\%$, $35\%$, $30\%$, $15\%$, $5\%$) và các giá trị đại diện $5, 15, 25, 35, 45$ để tính lại số trung bình theo công thức $\bar{x}=f_1c_1+\dots+f_kc_k$.

::hint
**Kiến thức:** $f_i=\dfrac{m_i}{n}$ nên $\dfrac{m_ic_i}{n}=f_ic_i$; đổi phần trăm sang số thập phân.

**Gợi ý các bước:**
1. Viết $0{,}15; 0{,}35; 0{,}30; 0{,}15; 0{,}05$.
2. Nhân với các giá trị đại diện rồi cộng.

::solution
$\bar{x}=0{,}15\cdot5+0{,}35\cdot15+0{,}30\cdot25+0{,}15\cdot35+0{,}05\cdot45=0{,}75+5{,}25+7{,}5+5{,}25+2{,}25=21$.

**Đáp số.** $\bar{x}=21$ phút, cùng kết quả với cách tính bằng tần số.
:::

:::exercise Thử thách
Một mẫu số liệu ghép nhóm có $k$ nhóm cùng độ rộng $h$, tất cả có cùng tần số. Chứng minh số trung bình ước lượng bằng trung điểm của đoạn $[a_1; a_{k+1}]$, với $a_1$ là đầu mút trái của nhóm đầu và $a_{k+1}$ là đầu mút phải của nhóm cuối.

::hint
**Kiến thức:** các giá trị đại diện lập thành cấp số cộng công sai $h$ (bài trước); tổng $k$ số hạng đầu của cấp số cộng là $S_k=\dfrac{k(c_1+c_k)}{2}$.

**Gợi ý các bước:**
1. Với cùng tần số $m$, $n=km$ và $\bar{x}=\dfrac{c_1+\dots+c_k}{k}$.
2. Dùng $c_1=a_1+\dfrac h2$ và $c_k=a_{k+1}-\dfrac h2$.

::solution
Vì mỗi nhóm có tần số $m$ nên $n=km$ và $\bar{x}=\dfrac{m(c_1+\dots+c_k)}{km}=\dfrac{c_1+\dots+c_k}{k}$. Các $c_i$ lập cấp số cộng nên $c_1+\dots+c_k=\dfrac{k(c_1+c_k)}{2}$, suy ra $\bar{x}=\dfrac{c_1+c_k}{2}=\dfrac{\left(a_1+\frac h2\right)+\left(a_{k+1}-\frac h2\right)}{2}=\dfrac{a_1+a_{k+1}}{2}$.

**Đáp số.** $\bar{x}=\dfrac{a_1+a_{k+1}}{2}$, trung điểm của $[a_1; a_{k+1}]$.
:::

## Kiểm tra mini

:::quiz
::mc
Mẫu số liệu ghép nhóm có các nhóm $[0; 10)$, $[10; 20)$, $[20; 30)$ với tần số $2$, $3$, $5$. Số trung bình ước lượng bằng
A. $15$.
B. $20$.
C. $180$.
D. $18$.
::key D
$\bar{x}=\dfrac{2\cdot5+3\cdot15+5\cdot25}{10}=\dfrac{180}{10}=18$. Phương án A là trung bình cộng của ba giá trị đại diện (quên tần số), phương án C quên chia cho $n$.

::mc
Một mẫu số liệu ghép nhóm cỡ $40$ có năm nhóm với tần số $15, 3, 3, 3, 16$. Nhóm chứa trung vị là nhóm thứ
A. ba.
B. một.
C. năm.
D. hai.
::key A
Tần số tích luỹ là $15, 18, 21, 24, 40$ và $\dfrac n2=20$, nên nhóm đầu tiên có $C_p\ge20$ là nhóm thứ ba. Phương án C là nhóm có tần số lớn nhất.

::mc
Bảng $[0; 10)$: $4$; $[10; 20)$: $10$; $[20; 30)$: $6$ có mốt ước lượng bằng
A. $15$.
B. $16$.
C. $14$.
D. $20$.
::key B
$M_o=10+\dfrac{10-4}{(10-4)+(10-6)}\cdot10=16$. Phương án A là giá trị đại diện, phương án C đổi vai hai nhóm kề, phương án D là đầu mút phải.

::mc
Bảng cỡ $40$: $[0; 10)$: $5$; $[10; 20)$: $10$; $[20; 30)$: $15$; $[30; 40)$: $10$. Tứ phân vị thứ nhất $Q_1$ bằng
A. $5$.
B. $10$.
C. $15$.
D. $20$.
::key C
$\dfrac n4=10$, nhóm $[10; 20)$ ($C_1=5$, $m_2=10$): $Q_1=10+\dfrac{10-5}{10}\cdot10=15$. Phương án A là $C_1$, phương án B là $\dfrac n4$, phương án D là đầu mút phải của nhóm.

::tf
Mẫu số liệu ghép nhóm cỡ $60$: $[0; 20)$ có $10$, $[20; 40)$ có $30$, $[40; 60)$ có $20$. Xét tính đúng sai của các mệnh đề sau:
a) Số trung bình ước lượng bằng $30$.
b) Nhóm chứa $Q_3$ là $[40; 60)$.
c) Trung vị $M_e\approx33{,}3$.
d) $Q_1=20$.
::key S Đ Đ S
Tần số tích luỹ là $10, 40, 60$. a) Sai: $\bar{x}=\dfrac{10\cdot10+30\cdot30+20\cdot50}{60}\approx33{,}3$; $30$ là trung bình cộng các giá trị đại diện. b) Đúng: $\dfrac{3n}{4}=45>40$. c) Đúng: $M_e=20+\dfrac{30-10}{30}\cdot20\approx33{,}3$. d) Sai: $Q_1=20+\dfrac{15-10}{30}\cdot20\approx23{,}3$.

::sa
Mẫu số liệu ghép nhóm cỡ $10$ có các nhóm $[0; 5)$ và $[5; 10)$ với tần số $3$ và $7$. Số trung bình ước lượng bằng bao nhiêu?
::key 6
$\bar{x}=\dfrac{3\cdot2{,}5+7\cdot7{,}5}{10}=\dfrac{60}{10}=6$.

::sa
Bảng cỡ $40$: $[0; 10)$: $5$; $[10; 20)$: $10$; $[20; 30)$: $15$; $[30; 40)$: $10$. Tứ phân vị thứ ba $Q_3$ bằng bao nhiêu?
::key 30
$\dfrac{3n}{4}=30$; tần số tích luỹ là $5, 15, 30, 40$ nên nhóm $[20; 30)$ ($C_2=15$, $m_3=15$): $Q_3=20+\dfrac{30-15}{15}\cdot10=30$.
:::
