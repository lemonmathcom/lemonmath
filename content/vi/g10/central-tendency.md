---
title: Các số đặc trưng đo xu thế trung tâm
description: Tìm số trung bình cộng, trung vị, tứ phân vị và mốt của mẫu số liệu, kể cả từ bảng tần số, và chọn số đặc trưng phù hợp nhất.
minutes: 16
---

:::goals
- Tính số trung bình cộng, trung vị và mốt của mẫu số liệu, kể cả từ bảng tần số.
- Tìm các tứ phân vị $Q_1$, $Q_2$, $Q_3$ của mẫu số liệu.
- Giải thích một giá trị bất thường làm thay đổi từng số đặc trưng như thế nào.
- Chọn số đặc trưng mô tả tốt nhất cho một tình huống.
:::

Lớp bạn vừa có bài kiểm tra. Thầy cô nói: "Điểm trung bình là 7." Một bạn nói: "Một nửa lớp được từ 7,5 trở lên." Bạn thứ ba nói: "Đa số các bạn được 8." Họ có mâu thuẫn nhau không? Không: mỗi người đang mô tả "trung tâm" của cùng một dữ liệu theo một cách khác nhau. Bài này giới thiệu bốn cách chuẩn và khi nào mỗi cách là lựa chọn trung thực.

## Số trung bình cộng

:::definition Số trung bình cộng
Với mẫu số liệu $x_1, x_2, \dots, x_n$, **số trung bình cộng** là
$$\bar{x}=\frac{x_1+x_2+\cdots+x_n}{n}.$$
Nếu giá trị $x_i$ xuất hiện $f_i$ lần thì $\bar{x}=\dfrac{f_1x_1+f_2x_2+\cdots+f_kx_k}{n}$, trong đó $n=f_1+\cdots+f_k$.
:::

Số trung bình cộng dùng mọi giá trị nên nhạy với các giá trị quá lớn hoặc quá nhỏ.

## Trung vị và tứ phân vị

Sắp xếp mẫu số liệu từ bé đến lớn.

:::definition Trung vị và tứ phân vị
- **Trung vị** $M_e$ (còn kí hiệu $Q_2$) là giá trị ở giữa nếu $n$ lẻ, và là trung bình cộng của hai giá trị ở giữa nếu $n$ chẵn.
- **Tứ phân vị thứ nhất** $Q_1$ là trung vị của nửa số liệu bên dưới, và **tứ phân vị thứ ba** $Q_3$ là trung vị của nửa số liệu bên trên.
- Nếu $n$ lẻ, bản thân trung vị **bị loại** khỏi cả hai nửa.
:::

Trung vị chia mẫu số liệu thành hai nửa; các tứ phân vị chia nó thành bốn phần.

:::example Điểm của 11 học sinh
Điểm của 11 học sinh: $4, 5, 6, 6, 7, 7, 7, 8, 9, 9, 10$. Tìm số trung bình cộng, trung vị, các tứ phân vị và mốt.

**Lời giải.**
- Tổng bằng $78$, nên $\bar{x}=\frac{78}{11}\approx 7{,}09$.
- $n=11$ lẻ nên trung vị là giá trị thứ 6: $M_e=7$.
- Nửa dưới (không có trung vị): $4, 5, 6, 6, 7$, giá trị giữa là $6$. Vậy $Q_1=6$.
- Nửa trên: $7, 8, 9, 9, 10$, giá trị giữa là $9$. Vậy $Q_3=9$.
- Giá trị $7$ xuất hiện nhiều nhất (ba lần): mốt $M_o=7$.
:::

:::example Điểm của 10 học sinh
Điểm: $3, 5, 6, 6, 7, 8, 8, 8, 9, 10$. Tìm $\bar{x}$, $M_e$, $Q_1$, $Q_3$ và mốt.

**Lời giải.**
- Tổng bằng $70$, nên $\bar{x}=7$.
- $n=10$ chẵn: giá trị thứ 5 và thứ 6 là $7$ và $8$, nên $M_e=7{,}5$.
- Nửa dưới $3, 5, 6, 6, 7$ cho $Q_1=6$; nửa trên $8, 8, 8, 9, 10$ cho $Q_3=8$.
- Mốt bằng $8$ (ba lần).
:::

## Mốt

**Mốt** là giá trị xuất hiện nhiều nhất. Một mẫu số liệu có thể không có mốt rõ ràng, hoặc có hai mốt. Mốt là số đặc trưng duy nhất dùng được cả cho dữ liệu phân loại (màu được ưa chuộng nhất, cỡ giày phổ biến nhất).

## Số liệu trong bảng tần số

:::example Bảng tần số
Điểm của 20 học sinh được tóm tắt dưới đây. Tìm $\bar{x}$, $M_e$, $Q_1$, $Q_3$ và mốt.

| Điểm | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|
| Tần số | 2 | 3 | 5 | 6 | 3 | 1 |

**Lời giải.**
- $n=2+3+5+6+3+1=20$. Tổng bằng $10+18+35+48+27+10=148$, nên $\bar{x}=\frac{148}{20}=7{,}4$.
- Tần số tích luỹ: $2, 5, 10, 16, 19, 20$. Giá trị thứ 10 là $7$ và thứ 11 là $8$, nên $M_e=7{,}5$.
- Nửa dưới là 10 giá trị đầu: giá trị thứ 5 là $6$ và thứ 6 là $7$, nên $Q_1=6{,}5$.
- Nửa trên là 10 giá trị cuối: giá trị thứ 15 và thứ 16 đều bằng $8$, nên $Q_3=8$.
- Tần số lớn nhất là $6$, nên mốt bằng $8$.
:::

## Ảnh hưởng của giá trị bất thường

:::example Một giá trị quá lớn
Tiền tiêu vặt hằng tháng của bảy học sinh (nghìn đồng): $50, 60, 60, 70, 80, 90, 500$. So sánh các số đặc trưng khi có và khi không có giá trị $500$.

**Lời giải.**
- Có cả bảy giá trị: $\bar{x}=\frac{910}{7}=130$, $M_e=70$.
- Bỏ $500$: $\bar{x}=\frac{410}{6}\approx 68{,}33$ và $M_e=\frac{60+70}{2}=65$.
- Một giá trị bất thường làm số trung bình cộng thay đổi khoảng $62$ nhưng trung vị chỉ thay đổi $5$.
:::

:::tip Nên dùng số đặc trưng nào
- Số trung bình cộng: dữ liệu không có giá trị bất thường, khi mọi giá trị đều quan trọng (tổng, ngân sách).
- Trung vị: dữ liệu có giá trị bất thường hoặc phân bố lệch (lương, giá nhà).
- Mốt: dữ liệu phân loại, hoặc cần giá trị "điển hình nhất".
- Tứ phân vị: mô tả độ phân tán quanh trung vị (bài sau).
:::

:::warning Những sai lầm thường gặp
- Không sắp xếp số liệu trước khi tìm trung vị.
- Khi $n$ chẵn, chọn một trong hai giá trị giữa thay vì lấy trung bình cộng của chúng.
- Khi $n$ lẻ, giữ trung vị trong các nửa khi tìm $Q_1$ và $Q_3$.
- Nhầm mốt (một giá trị) với tần số của nó.
:::

## Thuật ngữ

:::terms
- số trung bình cộng | mean
- trung vị | median
- tứ phân vị | quartile
- mốt | mode
- tần số | frequency
- bảng tần số | frequency table
- giá trị ngoại lệ | outlier
- mẫu số liệu | data set
:::

## Tóm tắt

- Số trung bình cộng là tổng chia cho số giá trị; với bảng tần số dùng $\bar{x}=\frac{\sum f_ix_i}{n}$.
- Trung vị là giá trị ở giữa của mẫu đã sắp xếp; $Q_1$ và $Q_3$ là trung vị của nửa dưới và nửa trên.
- Mốt là giá trị có tần số lớn nhất.
- Giá trị bất thường kéo số trung bình cộng nhiều hơn nhiều so với trung vị.

## Luyện tập

:::practice
1. Tìm số trung bình cộng của $6, 8, 9, 10, 12$.
2. Tìm trung vị của $3, 9, 4, 7, 1, 6$.
3. Tìm mốt của $2, 3, 3, 5, 5, 5, 7$.
4. Với $2, 4, 5, 7, 8, 10, 11, 13, 15$ hãy tìm $M_e$, $Q_1$ và $Q_3$.
5. Bảng cho số quyển sách đã đọc của 22 học sinh. Tìm $\bar{x}$ (làm tròn đến $0{,}01$), $M_e$ và mốt.

   | Số sách | 1 | 2 | 3 | 4 | 5 |
   |---|---|---|---|---|---|
   | Số học sinh | 3 | 5 | 8 | 4 | 2 |
6. Năm số có trung bình cộng bằng $8$. Bốn trong năm số là $6, 7, 9, 10$. Tìm số còn lại.
7. Một lớp có 20 nữ với điểm trung bình $7{,}0$ và 10 nam với điểm trung bình $8{,}5$. Tìm điểm trung bình của cả lớp.
8. Với $12, 13, 14, 15, 16, 17, 90$ hãy tìm số trung bình cộng và trung vị. Số nào mô tả dữ liệu tốt hơn?
9. Thử thách. Bảy số có trung bình cộng bằng $10$. Bỏ đi một số thì trung bình cộng của sáu số còn lại bằng $9$. Số bị bỏ là số nào?
10. Thử thách. Với $3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20$ hãy tìm $M_e$, $Q_1$ và $Q_3$.
:::

:::solution Xem lời giải
1. $\frac{6+8+9+10+12}{5}=\frac{45}{5}=9$.
2. Sắp xếp: $1, 3, 4, 6, 7, 9$. Hai giá trị giữa là $4$ và $6$, nên $M_e=5$.
3. Giá trị $5$ xuất hiện ba lần: mốt bằng $5$.
4. $n=9$: $M_e=8$ (giá trị thứ 5). Nửa dưới $2, 4, 5, 7$ cho $Q_1=\frac{4+5}{2}=4{,}5$. Nửa trên $10, 11, 13, 15$ cho $Q_3=\frac{11+13}{2}=12$.
5. $n=22$; tổng bằng $3+10+24+16+10=63$, nên $\bar{x}=\frac{63}{22}\approx 2{,}86$. Tần số tích luỹ $3, 8, 16, 20, 22$: giá trị thứ 11 và thứ 12 đều là $3$, nên $M_e=3$. Tần số lớn nhất là $8$, nên mốt bằng $3$.
6. Tổng cả năm số $=5\cdot 8=40$. Tổng bốn số đã biết $=32$. Số còn lại là $8$.
7. Tổng điểm $=20\cdot 7+10\cdot 8{,}5=140+85=225$; điểm trung bình $=\frac{225}{30}=7{,}5$.
8. Số trung bình cộng $=\frac{177}{7}\approx 25{,}29$; trung vị $=15$. Giá trị bất thường $90$ kéo số trung bình cộng lớn hơn tất cả các giá trị trừ một, nên trung vị mô tả dữ liệu tốt hơn.
9. Tổng bảy số $=70$; tổng sáu số $=54$. Số bị bỏ là $70-54=16$.
10. $n=12$: giá trị thứ 6 và thứ 7 là $10$ và $12$, nên $M_e=11$. Nửa dưới $3, 4, 6, 7, 9, 10$ cho $Q_1=\frac{6+7}{2}=6{,}5$. Nửa trên $12, 13, 15, 16, 18, 20$ cho $Q_3=\frac{15+16}{2}=15{,}5$.
:::
