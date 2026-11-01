---
title: Các số đặc trưng đo độ phân tán
description: Đo mức độ phân tán của số liệu bằng khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn; so sánh mẫu số liệu và tìm giá trị ngoại lệ.
minutes: 18
---

:::goals
- Tìm khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu.
- Tính phương sai và độ lệch chuẩn, bằng một trong hai công thức.
- So sánh độ phân tán của hai mẫu số liệu.
- Phát hiện giá trị ngoại lệ bằng quy tắc $1{,}5$ lần khoảng tứ phân vị.
:::

Hai cầu thủ bóng rổ đều ghi trung bình $8$ điểm mỗi trận. Một người trận nào cũng ghi $7, 8, 9$ điểm; người kia ghi $0, 8, 16$ điểm. Cùng số trung bình nhưng là hai cầu thủ hoàn toàn khác nhau: một người ổn định, một người may rủi. Chỉ riêng số trung bình đã che giấu điều này. Để mô tả dữ liệu trung thực, ta cần thêm một số đo **mức độ phân tán**.

## Khoảng biến thiên và khoảng tứ phân vị

:::definition Khoảng biến thiên và khoảng tứ phân vị
- **Khoảng biến thiên** là $R=x_{\max}-x_{\min}$.
- **Khoảng tứ phân vị** là $\Delta_Q=Q_3-Q_1$, độ rộng của nửa số liệu ở giữa.
:::

Khoảng biến thiên dễ tính nhưng chỉ phụ thuộc hai giá trị, nên một giá trị bất thường làm nó sai lệch. Khoảng tứ phân vị bỏ qua các giá trị ở hai đầu.

:::example Khoảng biến thiên và khoảng tứ phân vị
Điểm của 8 học sinh: $4, 6, 7, 7, 8, 9, 10, 11$. Tìm $R$ và $\Delta_Q$.

**Lời giải.**
- $R=11-4=7$.
- $n=8$: nửa dưới $4, 6, 7, 7$ cho $Q_1=\frac{6+7}{2}=6{,}5$; nửa trên $8, 9, 10, 11$ cho $Q_3=\frac{9+10}{2}=9{,}5$.
- $\Delta_Q=9{,}5-6{,}5=3$.
:::

## Phương sai và độ lệch chuẩn

Hai số đo trên bỏ qua phần lớn số liệu. Phương sai dùng mọi giá trị: nó là trung bình cộng của bình phương khoảng cách từ mỗi giá trị đến số trung bình.

:::definition Phương sai và độ lệch chuẩn
Với số liệu $x_1, \dots, x_n$ có số trung bình cộng $\bar{x}$,
$$s^2=\frac{(x_1-\bar{x})^2+\cdots+(x_n-\bar{x})^2}{n},\qquad s=\sqrt{s^2}.$$
Một công thức tương đương, thường nhanh hơn, là
$$s^2=\frac{x_1^2+\cdots+x_n^2}{n}-\bar{x}^2.$$
:::

Độ lệch chuẩn $s$ có cùng đơn vị với số liệu nên dễ diễn giải hơn. $s$ nhỏ nghĩa là các giá trị tập trung gần số trung bình; $s$ lớn nghĩa là chúng phân tán.

:::example Hai cách tính phương sai
Với $4, 6, 7, 7, 8, 9, 10, 11$ số trung bình cộng là $\bar{x}=\frac{62}{8}=7{,}75$. Tìm $s^2$ và $s$.

**Lời giải.**
- Công thức định nghĩa: các bình phương độ lệch là $14{,}0625;\ 3{,}0625;\ 0{,}5625;\ 0{,}5625;\ 0{,}0625;\ 1{,}5625;\ 5{,}0625;\ 10{,}5625$, tổng bằng $35{,}5$. Vậy $s^2=\frac{35{,}5}{8}=4{,}4375\approx 4{,}44$.
- Công thức thứ hai: $\frac{16+36+49+49+64+81+100+121}{8}=\frac{516}{8}=64{,}5$ và $64{,}5-7{,}75^2=64{,}5-60{,}0625=4{,}4375$. ✓
- $s=\sqrt{4{,}4375}\approx 2{,}11$.
:::

:::example So sánh hai nhóm
Nhóm B có điểm $7, 7, 7, 8, 8, 8, 9, 9$. So sánh với nhóm ở trên.

**Lời giải.** Với B: $\bar{x}=7{,}875$, $s^2=\frac{501}{8}-7{,}875^2\approx 0{,}61$, nên $s\approx 0{,}78$; $R=2$ và $\Delta_Q=8{,}5-7=1{,}5$. Hai số trung bình gần bằng nhau ($7{,}75$ và $7{,}875$) nhưng mọi số đo độ phân tán của B đều nhỏ hơn nhiều. Nhóm B đồng đều hơn hẳn.
:::

## Biểu đồ hộp

**Biểu đồ hộp** vẽ năm số: giá trị nhỏ nhất, $Q_1$, trung vị, $Q_3$ và giá trị lớn nhất. Hộp chứa nửa số liệu ở giữa, còn các "râu" kéo ra đến hai đầu.

:::diagram Biểu đồ hộp của $4, 6, 7, 7, 8, 9, 10, 11$
alt: Biểu đồ hộp trên trục số: râu từ 4 đến 11, hộp từ 6,5 đến 9,5 và một đoạn trong hộp tại trung vị 7,5
point L1 4,0.3 ""
point L2 4,0.9 ""
point R1 11,0.3 ""
point R2 11,0.9 ""
point Q1a 6.5,0 ""
point Q1b 6.5,1.2 ""
point Q3a 9.5,1.2 ""
point Q3b 9.5,0 ""
point Ma 7.5,0 ""
point Mb 7.5,1.2 ""
point WL1 4,0.6 ""
point WL2 6.5,0.6 ""
point WR1 9.5,0.6 ""
point WR2 11,0.6 ""
point P1 4,-0.5 ""
point P2 11,-0.5 ""
polygon Q1a Q1b Q3a Q3b
segment Ma Mb
segment WL1 WL2
segment WR1 WR2
segment L1 L2
segment R1 R2
segment P1 P2
label 4,-0.9 "4"
label 6.5,-0.9 "Q₁"
label 7.5,-0.9 "Mₑ"
label 9.5,-0.9 "Q₃"
label 11,-0.9 "11"
:::

## Giá trị ngoại lệ

Một giá trị là **giá trị ngoại lệ** nếu nó nằm xa phần lớn số liệu. Một quy tắc thường dùng: $x$ là giá trị ngoại lệ nếu
$$x<Q_1-1{,}5\,\Delta_Q\qquad\text{hoặc}\qquad x>Q_3+1{,}5\,\Delta_Q.$$

:::example 45 có phải giá trị ngoại lệ không?
Số liệu: $12, 13, 13, 14, 15, 15, 16, 17, 45$. Kiểm tra giá trị ngoại lệ.

**Lời giải.** $n=9$, $M_e=15$. Nửa dưới $12, 13, 13, 14$ cho $Q_1=13$; nửa trên $15, 16, 17, 45$ cho $Q_3=\frac{16+17}{2}=16{,}5$. Vậy $\Delta_Q=3{,}5$ và $1{,}5\Delta_Q=5{,}25$.
- Ngưỡng dưới: $13-5{,}25=7{,}75$. Ngưỡng trên: $16{,}5+5{,}25=21{,}75$.
- $45>21{,}75$ nên $45$ là giá trị ngoại lệ. Không giá trị nào khác nằm ngoài $[7{,}75;\ 21{,}75]$.
:::

:::warning Những sai lầm thường gặp
- Chia cho $n-1$: trong chương trình này phương sai chia cho $n$.
- Quên lấy căn bậc hai khi yêu cầu độ lệch chuẩn.
- Dùng $s^2=\frac{\sum x_i^2}{n}-\bar{x}$ (quên bình phương $\bar{x}$).
- Dùng khoảng biến thiên để so sánh độ phân tán khi có giá trị bất thường.
:::

## Thuật ngữ

:::terms
- khoảng biến thiên | range
- khoảng tứ phân vị | interquartile range
- phương sai | variance
- độ lệch chuẩn | standard deviation
- độ lệch | deviation
- biểu đồ hộp | box plot
- giá trị ngoại lệ | outlier
- độ phân tán | spread
:::

## Tóm tắt

- $R=x_{\max}-x_{\min}$ và $\Delta_Q=Q_3-Q_1$.
- $s^2=\frac1n\sum(x_i-\bar{x})^2=\overline{x^2}-\bar{x}^2$ và $s=\sqrt{s^2}$.
- $s$ (hoặc $\Delta_Q$) càng nhỏ thì số liệu càng đồng đều.
- $x$ là giá trị ngoại lệ nếu $x<Q_1-1{,}5\Delta_Q$ hoặc $x>Q_3+1{,}5\Delta_Q$.

## Luyện tập

:::practice
1. Tìm $R$ và $\Delta_Q$ của $3, 5, 7, 9, 11$.
2. Tìm $s^2$ và $s$ của $2, 4, 4, 4, 5, 5, 7, 9$.
3. Tìm phương sai của $6, 6, 6, 6$. Kết quả cho bạn biết điều gì?
4. Với $3, 5, 7, 9, 11$ hãy dùng $s^2=\overline{x^2}-\bar{x}^2$ để tìm $s^2$ và $s$ (làm tròn đến $0{,}01$).
5. Nhóm nào đồng đều hơn: A $=4, 6, 7, 7, 8, 9, 10, 11$ hay B $=7, 7, 7, 8, 8, 8, 9, 9$? Hãy lập luận bằng $s$.
6. $40$ có phải giá trị ngoại lệ của $1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40$ không?
7. Cộng $5$ vào mọi giá trị của $3, 5, 7, 9, 11$. Số trung bình cộng và $s$ thay đổi thế nào?
8. Nhân mọi giá trị của $3, 5, 7, 9, 11$ với $2$. Tìm phương sai và $s$ mới (làm tròn đến $0{,}01$).
9. Thử thách. Các số $4, 6, 8, 10, x$ có trung bình cộng bằng $8$. Tìm $x$ và $s^2$.
10. Thử thách. Bốn số có $\sum x_i=20$ và $\sum x_i^2=120$. Tìm $s^2$.
:::

:::solution Xem lời giải
1. $R=11-3=8$. $Q_1=\frac{3+5}{2}=4$, $Q_3=\frac{9+11}{2}=10$, nên $\Delta_Q=6$.
2. $\bar{x}=5$. Bình phương độ lệch: $9, 1, 1, 1, 0, 0, 4, 16$, tổng $32$. $s^2=\frac{32}{8}=4$ và $s=2$.
3. $\bar{x}=6$ và mọi độ lệch đều bằng $0$, nên $s^2=0$. Mọi giá trị bằng nhau: không có sự phân tán.
4. $\bar{x}=7$ và $\overline{x^2}=\frac{9+25+49+81+121}{5}=\frac{285}{5}=57$. $s^2=57-49=8$ và $s=\sqrt8\approx 2{,}83$.
5. Với A, $s\approx 2{,}11$; với B, $s\approx 0{,}78$. B có độ lệch chuẩn nhỏ hơn nên B đồng đều hơn.
6. $Q_1=3$, $Q_3=9$ (loại trung vị $6$), $\Delta_Q=6$, $1{,}5\Delta_Q=9$. Ngưỡng trên $=9+9=18$. Vì $40>18$ nên đó là giá trị ngoại lệ.
7. Số liệu mới là $8, 10, 12, 14, 16$: số trung bình cộng thành $12$ (tăng $5$), còn $s=\sqrt8\approx 2{,}83$ không đổi. Dịch chuyển mọi giá trị không làm thay đổi độ phân tán.
8. Số liệu mới là $6, 10, 14, 18, 22$ với trung bình cộng $14$. $s^2=\frac{64+16+0+16+64}{5}=32$ và $s=\sqrt{32}\approx 5{,}66$. Phương sai nhân với $4$ và $s$ nhân với $2$.
9. Trung bình cộng bằng $8$ nên $4+6+8+10+x=40$, suy ra $x=12$. Các độ lệch là $-4, -2, 0, 2, 4$, tổng bình phương bằng $40$. $s^2=\frac{40}{5}=8$.
10. $\bar{x}=\frac{20}{4}=5$. $s^2=\frac{120}{4}-5^2=30-25=5$.
:::
