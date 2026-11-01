---
title: Biến cố và định nghĩa cổ điển của xác suất
description: Mô tả phép thử ngẫu nhiên bằng không gian mẫu và biến cố, rồi tính xác suất khi các kết quả đồng khả năng.
minutes: 16
---

:::goals
- Mô tả một phép thử ngẫu nhiên bằng các kết quả và không gian mẫu $\Omega$.
- Viết biến cố dưới dạng tập con của $\Omega$, kể cả biến cố chắc chắn, biến cố không thể và biến cố đối.
- Tính $P(A)=\dfrac{n(A)}{n(\Omega)}$ khi các kết quả đồng khả năng.
- Dùng các tính chất $0\le P(A)\le 1$ và $P(\bar A)=1-P(A)$.
:::

Tung một đồng xu. Bạn không thể nói nó sẽ ra mặt sấp hay mặt ngửa, nhưng bạn có thể nói hai mặt có khả năng như nhau. Xác suất biến cảm nhận này thành một con số từ $0$ đến $1$. Bước đầu tiên là liệt kê cẩn thận **những điều có thể xảy ra**.

## Phép thử, kết quả và biến cố

**Phép thử ngẫu nhiên** là một quá trình mà ta không thể đoán chắc kết quả, dù biết mọi kết quả có thể xảy ra (tung đồng xu, gieo xúc xắc). Mỗi kết quả có thể xảy ra là một **kết quả**. Tập hợp mọi kết quả là **không gian mẫu** $\Omega$.

:::definition Biến cố
**Biến cố** $A$ là một tập con của $\Omega$: tập các kết quả mà "$A$ xảy ra".
- **Biến cố chắc chắn** là chính $\Omega$; **biến cố không thể** là $\varnothing$.
- **Biến cố đối** $\bar A$ gồm các kết quả không thuộc $A$.
- $n(A)$ kí hiệu số kết quả của $A$.
:::

:::example Tung đồng xu hai lần
Liệt kê $\Omega$ và biến cố $A$: "có đúng một mặt sấp". (Kí hiệu S là sấp, N là ngửa.)

**Lời giải.** $\Omega=\{SS, SN, NS, NN\}$, nên $n(\Omega)=4$. $A=\{SN, NS\}$ và $n(A)=2$. Biến cố đối là $\bar A=\{SS, NN\}$.
:::

## Xác suất cổ điển

Khi các kết quả của phép thử **đồng khả năng**, xác suất của một biến cố là tỉ lệ các kết quả thuận lợi cho nó.

:::definition Định nghĩa cổ điển
Nếu $\Omega$ hữu hạn và các kết quả đồng khả năng thì
$$P(A)=\frac{n(A)}{n(\Omega)}.$$
:::

:::theorem Tính chất
- $0\le P(A)\le 1$, với $P(\Omega)=1$ và $P(\varnothing)=0$.
- $P(\bar A)=1-P(A)$.
:::

:::example Tung đồng xu hai lần, tiếp tục
Với biến cố $A$ ở trên, $P(A)=\frac24=\frac12$, và $P(\bar A)=1-\frac12=\frac12$.
:::

:::example Gieo xúc xắc
Gieo một con xúc xắc cân đối. Tìm xác suất để được (a) số chẵn, (b) số không nhỏ hơn $5$.

**Lời giải.** $\Omega=\{1, 2, 3, 4, 5, 6\}$, $n(\Omega)=6$.
- (a) $A=\{2, 4, 6\}$: $P(A)=\frac36=\frac12$. Biến cố đối (được số lẻ) có xác suất $\frac12$.
- (b) $B=\{5, 6\}$: $P(B)=\frac26=\frac13$.
:::

## Hai con xúc xắc

Với hai con xúc xắc, một kết quả là một cặp có thứ tự, nên $n(\Omega)=6\cdot6=36$. Bảng cho thấy tổng số chấm của hai con ứng với mỗi cặp.

| Lần 1 \ Lần 2 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 6 | 7 | 8 | 9 | 10 | 11 | 12 |

:::example Tổng số chấm của hai con xúc xắc
Gieo hai con xúc xắc cân đối. Tìm $P(\text{tổng}=7)$ và $P(\text{tổng}\ge10)$.

**Lời giải.**
- Tổng $7$ xuất hiện $6$ lần trong bảng: $P=\frac6{36}=\frac16$.
- Tổng $10$ (3 lần), $11$ (2 lần) và $12$ (1 lần) cho $6$ kết quả: $P=\frac6{36}=\frac16$.
:::

## Quân bài và quả bóng

:::example Rút một lá bài
Rút một lá bài từ bộ bài tiêu chuẩn $52$ lá. Tìm xác suất để được (a) một lá át, (b) một lá cơ.

**Lời giải.** $n(\Omega)=52$. (a) Có $4$ lá át: $\frac4{52}=\frac1{13}$. (b) Có $13$ lá cơ: $\frac{13}{52}=\frac14$.
:::

:::example Mẹo dùng biến cố đối
Tung đồng xu $3$ lần. Tìm xác suất để có ít nhất một lần sấp. (Dùng S cho sấp.)

**Lời giải.** $n(\Omega)=2^3=8$. Biến cố đối "không có lần nào sấp" là $\{NNN\}$ với xác suất $\frac18$. Vậy $P=1-\frac18=\frac78$.
:::

:::warning Những sai lầm thường gặp
- Dùng công thức cổ điển khi các kết quả **không** đồng khả năng.
- Coi hai con xúc xắc không phân biệt thứ tự, được $21$ kết quả không đồng khả năng; hãy dùng các cặp có thứ tự ($36$).
- Quên rằng $P(A)$ phải nằm giữa $0$ và $1$.
- Liệt kê $\Omega$ thiếu kết quả.
:::

## Thuật ngữ

:::terms
- phép thử ngẫu nhiên | random experiment
- kết quả | outcome
- không gian mẫu | sample space
- biến cố | event
- biến cố chắc chắn | certain event
- biến cố không thể | impossible event
- biến cố đối | complement of an event
- xác suất | probability
:::

## Tóm tắt

- $\Omega$ là tập mọi kết quả; biến cố là một tập con của $\Omega$.
- Với các kết quả đồng khả năng, $P(A)=\frac{n(A)}{n(\Omega)}$.
- $0\le P(A)\le 1$, $P(\Omega)=1$, $P(\varnothing)=0$, $P(\bar A)=1-P(A)$.
- Bài toán "ít nhất một" thường dễ nhất khi dùng biến cố đối.

## Luyện tập

:::practice
1. Gieo một con xúc xắc. Tìm xác suất để được số nguyên tố.
2. Tung đồng xu hai lần. Tìm xác suất để có ít nhất một lần ngửa.
3. Gieo hai con xúc xắc. Tìm xác suất để tổng bằng $8$.
4. Gieo hai con xúc xắc. Tìm xác suất để hai con có số chấm bằng nhau.
5. Rút một lá bài từ $52$ lá. Tìm xác suất để được lá K hoặc lá Q.
6. Một chiếc hộp có $4$ bóng đỏ và $6$ bóng trắng. Lấy ngẫu nhiên một bóng. Tìm xác suất để được bóng trắng.
7. Tung đồng xu $3$ lần. Tìm xác suất để có đúng hai lần sấp.
8. Gieo hai con xúc xắc. Tìm xác suất để tổng **không** bằng $7$.
9. Thử thách. Lập một số có $3$ chữ số khác nhau từ $1, 2, 3, 4, 5$. Tìm xác suất để số đó là số chẵn.
10. Thử thách. Lấy một bóng từ các bóng được đánh số từ $1$ đến $10$. Tìm xác suất để số trên bóng chia hết cho $2$ hoặc cho $3$.
:::

:::solution Xem lời giải
1. Các số nguyên tố: $\{2, 3, 5\}$, nên $\frac36=\frac12$.
2. $n(\Omega)=4$. Biến cố đối "không có lần nào ngửa" là $\{SS\}$. $P=1-\frac14=\frac34$.
3. Tổng $8$: $(2,6), (3,5), (4,4), (5,3), (6,2)$ cho $5$ kết quả. $P=\frac5{36}$.
4. Hai mặt giống nhau $(1,1), \dots, (6,6)$: $6$ kết quả. $P=\frac6{36}=\frac16$.
5. $4$ lá K và $4$ lá Q cho $8$ lá: $\frac8{52}=\frac2{13}$.
6. $\frac6{10}=\frac35$.
7. Các kết quả $SSN, SNS, NSS$: $\frac38$.
8. $P(\text{tổng}=7)=\frac16$, nên đáp số là $1-\frac16=\frac56$.
9. $n(\Omega)=5\cdot4\cdot3=60$. Để được số chẵn, chữ số hàng đơn vị là $2$ hoặc $4$ ($2$ cách), rồi còn $4$ và $3$ cách cho hai chữ số kia: $2\cdot4\cdot3=24$. $P=\frac{24}{60}=\frac25$.
10. Chia hết cho $2$: $2, 4, 6, 8, 10$ (5 số). Chia hết cho $3$: $3, 6, 9$ (3 số). Gộp lại mà không đếm $6$ hai lần: $\{2, 3, 4, 6, 8, 9, 10\}$ có $7$ số. $P=\frac7{10}$.
:::
