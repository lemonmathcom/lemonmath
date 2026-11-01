---
title: Thực hành tính xác suất theo định nghĩa cổ điển
description: Chiến lược giải bài toán xác suất cổ điển, dùng quy tắc đếm, tổ hợp, tổng số chấm của xúc xắc và biến cố đối cho bài toán "ít nhất một".
minutes: 18
---

:::goals
- Làm theo chiến lược bốn bước cho bài toán xác suất cổ điển.
- Dùng tổ hợp để đếm kết quả khi chọn các đối tượng không có thứ tự.
- Dùng biến cố đối cho các biến cố "ít nhất một".
- Làm việc với các tình huống thực tế: hộp bóng, ban đại diện, kiểm tra chất lượng, xổ số và bộ bài.
:::

Hai bạn được chọn ngẫu nhiên có khả năng đều là nữ không? Một lô hàng có vài sản phẩm lỗi thì an toàn đến đâu? Cơ hội trúng xổ số là bao nhiêu? Các câu hỏi này đều cùng một dạng: **đếm kết quả thuận lợi, đếm mọi kết quả, rồi chia**. Khó khăn nằm ở việc đếm, và đó là chỗ hoán vị và tổ hợp phát huy tác dụng.

## Một chiến lược hiệu quả

1. **Xác định phép thử** và quyết định thứ tự có quan trọng không. Lấy các đối tượng "cùng lúc" nghĩa là thứ tự không quan trọng, nên dùng tổ hợp.
2. **Đếm $n(\Omega)$** bằng các quy tắc đếm.
3. **Đếm $n(A)$**: chia trường hợp hoặc dùng quy tắc nhân. Nếu biến cố có chữ "ít nhất một", hãy cân nhắc biến cố đối.
4. **Chia** và rút gọn: $P(A)=\frac{n(A)}{n(\Omega)}$. Kiểm tra $0\le P\le 1$.

## Bóng trong hộp

:::example Hai bóng lấy cùng lúc
Một hộp có $5$ bóng đỏ và $3$ bóng xanh. Lấy ngẫu nhiên hai bóng cùng lúc. Tìm xác suất để (a) cả hai đều đỏ, (b) có một bóng mỗi màu, (c) có ít nhất một bóng đỏ.

**Lời giải.** $n(\Omega)=C_8^2=28$.
- (a) $n(A)=C_5^2=10$, nên $P=\frac{10}{28}=\frac5{14}$.
- (b) Một đỏ và một xanh: $5\cdot3=15$, nên $P=\frac{15}{28}$.
- (c) Biến cố đối là "cả hai đều xanh": $C_3^2=3$. $P=1-\frac3{28}=\frac{25}{28}$.
:::

## Chọn ban đại diện

:::example Nam và nữ
Một nhóm có $6$ nam và $4$ nữ. Chọn ngẫu nhiên ba người. Tìm xác suất để (a) cả ba đều là nữ, (b) có đúng $2$ nam, (c) có ít nhất một nữ.

**Lời giải.** $n(\Omega)=C_{10}^3=120$.
- (a) $C_4^3=4$: $P=\frac4{120}=\frac1{30}$.
- (b) $C_6^2\cdot C_4^1=15\cdot4=60$: $P=\frac{60}{120}=\frac12$.
- (c) Biến cố đối là "cả ba đều nam", $C_6^3=20$: $P=1-\frac{20}{120}=\frac56$.
:::

## Kiểm tra chất lượng

:::example Sản phẩm lỗi
Một hộp có $20$ sản phẩm, trong đó $3$ sản phẩm lỗi. Người kiểm tra lấy ngẫu nhiên $4$ sản phẩm. Tìm xác suất để không có sản phẩm lỗi nào, và xác suất để có ít nhất một sản phẩm lỗi.

**Lời giải.** $n(\Omega)=C_{20}^4=4845$. "Không có sản phẩm lỗi" nghĩa là cả $4$ sản phẩm đều lấy từ $17$ sản phẩm tốt: $C_{17}^4=2380$, nên $P=\frac{2380}{4845}=\frac{28}{57}$. Khi đó $P(\text{ít nhất một lỗi})=1-\frac{28}{57}=\frac{29}{57}\approx0{,}51$.
:::

## Xổ số và bộ bài

:::example Một trò xổ số
Trong một trò xổ số, bạn chọn $6$ số trong $45$ số và kết quả quay chọn ra $6$ số. Tìm xác suất để (a) trùng cả sáu số, (b) trùng đúng năm số.

**Lời giải.** $n(\Omega)=C_{45}^6=8\,145\,060$.
- (a) Chỉ có một cách chọn thuận lợi: $P=\frac1{8\,145\,060}$.
- (b) Chọn $5$ trong $6$ số trúng và $1$ trong $39$ số còn lại: $C_6^5\cdot39=234$. $P=\frac{234}{8\,145\,060}=\frac{39}{1\,357\,510}$.
:::

:::example Hai lá át
Rút hai lá bài từ bộ bài $52$ lá. Tìm xác suất để cả hai đều là lá át.

**Lời giải.** $\frac{C_4^2}{C_{52}^2}=\frac{6}{1326}=\frac1{221}$.
:::

:::warning Những sai lầm thường gặp
- Đếm $n(\Omega)$ có thứ tự còn $n(A)$ không có thứ tự (hoặc ngược lại). Hãy nhất quán.
- Cộng các xác suất khi các trường hợp chồng lên nhau.
- Quên dùng biến cố đối cho "ít nhất một": đếm từng trường hợp riêng rất dài và dễ sai.
- Không rút gọn phân số, hoặc cho ra xác suất lớn hơn $1$.
:::

## Thuật ngữ

:::terms
- kết quả thuận lợi | favourable outcomes
- ít nhất một | at least one
- biến cố đối | complement
- chọn ngẫu nhiên | random selection
- kiểm tra chất lượng | quality control
- xổ số | lottery
- lỗi (phế phẩm) | faulty (defective)
- hộp (túi) đựng bóng | urn
:::

## Tóm tắt

- Chiến lược: xác định phép thử, đếm $n(\Omega)$, đếm $n(A)$, rồi chia.
- Lấy "cùng lúc" hay "không có thứ tự": dùng tổ hợp.
- "Ít nhất một": $P=1-P(\text{không có})$.
- Luôn kiểm tra $0\le P\le1$ và rút gọn.

## Luyện tập

:::practice
1. Một hộp có $6$ bóng trắng và $4$ bóng đen. Lấy hai bóng cùng lúc. Tìm xác suất để cả hai đều trắng.
2. Với hộp bóng trên, tìm xác suất để hai bóng có màu khác nhau.
3. Một lớp có $12$ nam và $8$ nữ. Chọn ngẫu nhiên ba học sinh. Tìm xác suất để cả ba đều là nam.
4. Trong tình huống bài 3, tìm xác suất để có ít nhất một nữ được chọn.
5. Một hộp có $15$ sản phẩm, trong đó $2$ sản phẩm lỗi. Lấy ngẫu nhiên ba sản phẩm. Tìm xác suất để không có sản phẩm lỗi nào.
6. Gieo hai con xúc xắc. Tìm xác suất để tích hai số chấm là số chẵn.
7. Rút ba lá bài từ bộ bài $52$ lá. Tìm xác suất để cả ba đều là lá cơ.
8. Trong trò xổ số chọn $6$ trong $45$ số, một người mua $3$ vé khác nhau. Tìm xác suất để một trong các vé đó trúng giải độc đắc.
9. Thử thách. Một nhóm có $5$ nam và $4$ nữ. Chọn bốn người. Tìm xác suất để có đúng $2$ nam và $2$ nữ.
10. Thử thách. Gieo ba con xúc xắc. Tìm xác suất để tổng bằng $9$, và xác suất để có ít nhất một con xuất hiện mặt sáu chấm.
:::

:::solution Xem lời giải
1. $\frac{C_6^2}{C_{10}^2}=\frac{15}{45}=\frac13$.
2. $\frac{6\cdot4}{45}=\frac{24}{45}=\frac8{15}$.
3. $\frac{C_{12}^3}{C_{20}^3}=\frac{220}{1140}=\frac{11}{57}$.
4. $1-\frac{11}{57}=\frac{46}{57}$.
5. $\frac{C_{13}^3}{C_{15}^3}=\frac{286}{455}=\frac{22}{35}$.
6. Tích là số lẻ chỉ khi cả hai số đều lẻ: $3\cdot3=9$ trong $36$ kết quả. $P(\text{chẵn})=1-\frac9{36}=\frac34$.
7. $\frac{C_{13}^3}{C_{52}^3}=\frac{286}{22\,100}=\frac{11}{850}$.
8. Có ba vé thuận lợi trong $C_{45}^6$ kết quả quay có thể: $\frac3{8\,145\,060}=\frac1{2\,715\,020}$.
9. $n(\Omega)=C_9^4=126$. Thuận lợi: $C_5^2C_4^2=10\cdot6=60$. $P=\frac{60}{126}=\frac{10}{21}$.
10. $n(\Omega)=6^3=216$. Tổng $9$: có $25$ bộ ba có thứ tự, nên $P=\frac{25}{216}$. Không có mặt sáu: $5^3=125$ bộ ba, nên $P(\text{ít nhất một mặt sáu})=1-\frac{125}{216}=\frac{91}{216}$.
:::
