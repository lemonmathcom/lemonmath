---
title: Quy tắc đếm
description: Dùng quy tắc cộng, quy tắc nhân, sơ đồ hình cây và cách đếm phần bù để đếm các lựa chọn, các số và mật khẩu mà không cần liệt kê.
minutes: 14
---

:::goals
- Nhận ra bài toán đếm cần dùng quy tắc cộng hay quy tắc nhân.
- Dùng sơ đồ hình cây để sắp xếp các lựa chọn được thực hiện qua nhiều bước.
- Đếm các số, mật khẩu và lộ trình có điều kiện ràng buộc về chữ số hoặc chữ cái.
- Đếm các tình huống "có ít nhất một" và "không ..." bằng cách đếm phần bù.
:::

Từ 4 chiếc áo, 3 chiếc quần và 2 đôi giày, bạn có thể phối được bao nhiêu bộ trang phục khác nhau? Bạn có thể liệt kê tất cả, nhưng danh sách sẽ dài và dễ nhầm. Các quy tắc đếm giúp bạn tìm ra con số bằng cách nghĩ về *cấu trúc* của việc chọn, thay vì viết ra từng khả năng. Chúng là nền tảng của hoán vị, tổ hợp và xác suất.

## Quy tắc cộng

Giả sử bạn muốn đọc một cuốn sách trên giá. Có 5 cuốn sách toán và 4 cuốn tiểu thuyết. Bạn chọn *hoặc* một cuốn toán *hoặc* một cuốn tiểu thuyết, không thể chọn cả hai cùng lúc, nên có $5+4=9$ cách chọn.

:::definition Quy tắc cộng
Nếu một công việc có thể làm theo một trong hai cách **không thể xảy ra đồng thời**, cách thứ nhất có $m$ khả năng và cách thứ hai có $n$ khả năng, thì công việc đó có $m+n$ cách thực hiện. Với nhiều cách hơn cũng vậy: cộng các số lại.
:::

Từ khoá là "**hoặc**" và "**xung khắc**": mỗi lựa chọn thuộc đúng một nhóm.

:::example Chọn một cuốn sách
Một giá sách có 5 cuốn sách toán, 4 cuốn tiểu thuyết và 3 cuốn sách khoa học. Có bao nhiêu cách chọn một cuốn mang về nhà?

**Lời giải.**
1. Mỗi cuốn sách thuộc đúng một trong ba nhóm, nên các nhóm xung khắc với nhau.
2. Bạn chọn một cuốn toán **hoặc** một cuốn tiểu thuyết **hoặc** một cuốn khoa học, nên ta cộng: $5+4+3=12$.

Có 12 cách.
:::

## Quy tắc nhân

Bây giờ giả sử bạn muốn chọn một món ăn nhẹ **và** một đồ uống. Việc chọn diễn ra qua các bước liên tiếp. Sơ đồ hình cây cho thấy mọi khả năng: bắt đầu bạn chọn đồ uống (trà hoặc nước ép), và với mỗi đồ uống bạn chọn món ăn nhẹ (bánh, trái cây hoặc hạt).

:::diagram Sơ đồ hình cây: 2 đồ uống, sau đó 3 món ăn nhẹ
alt: Một cây bắt đầu từ một điểm, tách thành hai đồ uống là trà và nước ép, mỗi đồ uống lại tách thành ba món ăn nhẹ, cho tổng cộng sáu nhánh
point S 0,0 left "Bắt đầu"
point T 3,2 above "Trà"
point J 3,-2 below "Nước ép"
point T1 6,3 right "Bánh"
point T2 6,2 right "Trái cây"
point T3 6,1 right "Hạt"
point J1 6,-1 right "Bánh"
point J2 6,-2 right "Trái cây"
point J3 6,-3 right "Hạt"
segment S T
segment S J
segment T T1
segment T T2
segment T T3
segment J J1
segment J J2
segment J J3
:::

Đếm các đầu nhánh bên phải của cây: $3+3=6$, cũng bằng $2\times 3$.

:::definition Quy tắc nhân
Nếu một công việc được thực hiện qua **các bước liên tiếp**, bước 1 có $n_1$ cách, với mỗi cách đó bước 2 có $n_2$ cách, và cứ thế đến bước $k$ có $n_k$ cách, thì cả công việc có
$$n_1\cdot n_2\cdots n_k$$
cách thực hiện.
:::

Từ khoá là "**và**": bạn làm bước 1 **và** rồi bước 2 **và** rồi bước 3.

:::example Chọn trang phục
Có bao nhiêu cách chọn một chiếc áo, một chiếc quần và một đôi giày từ 4 chiếc áo, 3 chiếc quần và 2 đôi giày?

**Lời giải.**
1. Có 3 bước: áo (4 cách), quần (3 cách), giày (2 cách).
2. Các lựa chọn được thực hiện lần lượt và không ảnh hưởng đến nhau, nên ta nhân: $4\cdot 3\cdot 2=24$.

Có 24 bộ trang phục.
:::

:::tip Cộng hay nhân?
Hãy tự hỏi: "Mình làm việc này **hoặc** việc kia?" Khi đó cộng. "Mình làm việc này **rồi** làm việc khác?" Khi đó nhân. Nhiều bài toán dùng cả hai: nhân dọc theo một lộ trình, rồi cộng các lộ trình khác nhau.
:::

## Số, mật khẩu và lộ trình

### Các số có điều kiện

Khi một chữ số bị ràng buộc, hãy **điền vị trí bị ràng buộc nhiều nhất trước**.

:::example Số có ba chữ số khác nhau
Có bao nhiêu số có ba chữ số mà ba chữ số đó khác nhau? Trong đó có bao nhiêu số chẵn?

**Lời giải.**
1. *Tất cả các số như vậy.* Chữ số hàng trăm không thể là 0: có 9 cách. Chữ số hàng chục là chữ số bất kì khác chữ số đã dùng: có 9 cách (bây giờ được dùng 0). Chữ số hàng đơn vị khác cả hai chữ số trước: có 8 cách. Tổng cộng $9\cdot 9\cdot 8=648$.
2. *Các số chẵn.* Chữ số hàng đơn vị quyết định, nên bắt đầu từ đó. Chia thành hai trường hợp (quy tắc cộng).
   - Chữ số hàng đơn vị là 0: chữ số hàng trăm có 9 cách, hàng chục có 8 cách, cho $9\cdot 8=72$ số.
   - Chữ số hàng đơn vị là 2, 4, 6 hoặc 8 (4 cách): chữ số hàng trăm không được là 0 hay chữ số hàng đơn vị, nên có 8 cách; chữ số hàng chục còn 8 cách. Cho $4\cdot 8\cdot 8=256$ số.
3. Cộng các trường hợp: $72+256=328$.

Vậy có tất cả 648 số, trong đó 328 số là số chẵn.
:::

### Mật khẩu

:::example Một mật khẩu
Một mật khẩu có 4 kí tự: đầu tiên là một chữ cái in hoa (26 cách chọn), sau đó là ba chữ số. Có bao nhiêu mật khẩu nếu các chữ số được lặp lại? Có bao nhiêu mật khẩu nếu ba chữ số phải khác nhau đôi một?

**Lời giải.**
1. Được lặp: $26\cdot 10\cdot 10\cdot 10=26\,000$.
2. Ba chữ số khác nhau: chữ số đầu có 10 cách, chữ số thứ hai có 9 cách, chữ số thứ ba có 8 cách, nên $26\cdot 10\cdot 9\cdot 8=18\,720$.
:::

### Lộ trình

:::example Lộ trình giữa các thị trấn
Có 3 con đường từ thị trấn A đến thị trấn B và 4 con đường từ B đến C. Ngoài ra còn có 2 con đường đi thẳng từ A đến C. Có bao nhiêu lộ trình đi từ A đến C?

**Lời giải.**
1. Đi qua B: 3 con đường rồi 4 con đường, nên có $3\cdot 4=12$ lộ trình (quy tắc nhân).
2. Đi thẳng: 2 lộ trình.
3. Một lộ trình đi qua B **hoặc** đi thẳng, nên ta cộng: $12+2=14$.
:::

## Cách đếm phần bù

Đôi khi đếm những gì ta **không** muốn lại dễ hơn. Nếu $N$ là tổng số khả năng và $M$ khả năng trong đó không thoả mãn điều kiện, thì số khả năng thoả mãn điều kiện là $N-M$.

:::example Có ít nhất một chữ số 7
Có bao nhiêu số có bốn chữ số chứa ít nhất một chữ số 7?

**Lời giải.**
1. Tổng số các số có bốn chữ số: từ 1000 đến 9999, tức là $9\cdot 10\cdot 10\cdot 10=9000$.
2. Các số **không** chứa chữ số 7: chữ số đầu có 8 cách (khác 0, khác 7), mỗi chữ số còn lại có 9 cách (khác 7). Vậy $8\cdot 9\cdot 9\cdot 9=5832$.
3. Lấy hiệu: $9000-5832=3168$.

Có 3168 số như vậy.
:::

## Kiểm tra bằng máy tính

Một chương trình ngắn có thể kiểm tra lập luận đếm bằng cách thử hết mọi khả năng. Đây là đoạn kiểm tra cho ví dụ đầu tiên ở trên:

```python
count = 0
for n in range(100, 1000):
    if len(set(str(n))) == 3:
        count += 1
print(count)   # 648
```

:::warning Những sai lầm thường gặp
- Cộng khi lẽ ra phải nhân (hoặc ngược lại). Hãy thử với một trường hợp nhỏ mà bạn liệt kê được bằng tay, như 2 áo và 2 quần.
- Quên rằng chữ số đầu tiên của một số không thể bằng 0.
- Đếm một đối tượng hai lần khi các trường hợp chồng lên nhau. Quy tắc cộng cần các nhóm **không giao nhau**; hãy tách thành các trường hợp riêng trước.
:::

## Thuật ngữ

:::terms
- quy tắc cộng | addition rule
- quy tắc nhân | multiplication rule
- xung khắc (không thể xảy ra đồng thời) | mutually exclusive
- các bước liên tiếp | successive steps
- sơ đồ hình cây | tree diagram
- trường hợp | case
- phần bù (đếm phần còn lại) | complement
- điều kiện ràng buộc | restriction
:::

## Tóm tắt

- Quy tắc cộng: các lựa chọn không thể xảy ra đồng thời, cộng các số lại ("hoặc").
- Quy tắc nhân: các bước liên tiếp, nhân các số lại ("rồi").
- Sơ đồ hình cây liệt kê mọi kết quả và cho thấy vì sao phép nhân đúng.
- Với các số có điều kiện, điền vị trí bị ràng buộc nhiều nhất trước và chia trường hợp khi cần.
- Cách đếm phần bù: (tất cả) $-$ (những khả năng không muốn).

## Luyện tập

:::practice
1. Một thực đơn có 3 món khai vị, 5 món chính và 2 món tráng miệng. Có bao nhiêu bữa ăn gồm một món khai vị, một món chính và một món tráng miệng?
2. Một giá sách thư viện có 6 cuốn sách tiếng Anh và 4 cuốn sách tiếng Pháp. Có bao nhiêu cách chọn (a) một cuốn sách; (b) một cuốn tiếng Anh và một cuốn tiếng Pháp?
3. Có bao nhiêu số có ba chữ số mà cả ba chữ số đều lẻ?
4. Một mã gồm hai chữ cái (mỗi chữ cái 26 cách chọn, được lặp lại) theo sau là ba chữ số (được lặp lại). Có bao nhiêu mã như vậy?
5. Có bao nhiêu số có ba chữ số khác nhau chia hết cho 5?
6. Có 3 con đường từ A đến B, 4 con đường từ B đến C và 2 con đường đi thẳng từ A đến C. Có bao nhiêu chuyến đi khứ hồi từ A đến C rồi quay về A, nếu mỗi con đường đều đi được theo cả hai chiều và đường về có thể là lộ trình bất kì?
7. Một xâu nhị phân có 8 kí hiệu, mỗi kí hiệu là 0 hoặc 1. Có bao nhiêu xâu (a) tất cả; (b) có ít nhất một chữ số 1; (c) bắt đầu bằng 1 và kết thúc bằng 0?
8. Có bao nhiêu số có bốn chữ số chứa ít nhất một chữ số 0?
9. Tìm số ước nguyên dương của 360.
10. Một lá cờ có 3 sọc ngang, mỗi sọc tô một trong 5 màu, và hai sọc kề nhau phải khác màu. Có bao nhiêu lá cờ như vậy?
:::

:::solution Xem lời giải
1. Ba bước liên tiếp: $3\cdot 5\cdot 2=30$ bữa ăn.
2. (a) Một cuốn từ một trong hai nhóm, hai nhóm không giao nhau: $6+4=10$. (b) Một cuốn mỗi loại, hai bước: $6\cdot 4=24$.
3. Mỗi chữ số trong 3 chữ số được chọn từ $\{1;3;5;7;9\}$: $5\cdot 5\cdot 5=125$.
4. $26\cdot 26\cdot 10\cdot 10\cdot 10=676\,000$.
5. Số chia hết cho 5 có tận cùng là 0 hoặc 5. Hàng đơn vị là 0: hàng trăm có 9 cách, hàng chục có 8 cách, được $72$ số. Hàng đơn vị là 5: hàng trăm không là 0 và không là 5 nên có 8 cách; hàng chục có 8 cách; được $64$ số. Tổng cộng $72+64=136$.
6. Đi từ A đến C có $3\cdot 4+2=14$ lộ trình. Lộ trình về cũng là một trong 14 lộ trình đó, được chọn độc lập, nên có $14\cdot 14=196$ chuyến khứ hồi.
7. (a) $2^8=256$. (b) Đếm phần bù: chỉ có xâu gồm toàn số 0 là không có số 1, nên $256-1=255$. (c) Kí hiệu đầu và cuối đã cố định, 6 kí hiệu ở giữa tuỳ ý: $2^6=64$.
8. Tổng cộng 9000 số. Số không có chữ số 0: $9^4=6561$. Vậy $9000-6561=2439$.
9. $360=2^3\cdot 3^2\cdot 5$. Mỗi ước có dạng $2^a3^b5^c$ với $a\in\{0;1;2;3\}$, $b\in\{0;1;2\}$, $c\in\{0;1\}$: $4\cdot 3\cdot 2=24$ ước.
10. Sọc đầu có 5 màu; mỗi sọc tiếp theo có 4 màu (khác màu của sọc kề nó): $5\cdot 4\cdot 4=80$.
:::
