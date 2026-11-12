---
title: Làm tròn và ước lượng
description: Làm tròn số nguyên và số thập phân đến một hàng cho trước, làm tròn số âm, và dùng ước lượng để kiểm tra kết quả, tính tiền khi mua sắm.
minutes: 25
---

:::goals
- Làm tròn được số nguyên và số thập phân đến một hàng cho trước.
- Làm tròn được số thập phân âm.
- Ước lượng được kết quả của một phép tính bằng cách làm tròn các số.
- Dùng ước lượng để phát hiện kết quả sai và để quyết định nhanh trong đời sống.
:::

Mẹ bạn Minh đi siêu thị với $200$ nghìn đồng trong ví. Mẹ chọn $3$ ki-lô-gam gạo giá $18\,900$ đồng một ki-lô-gam, $2$ hộp sữa giá $31\,500$ đồng một hộp và $1$ chai dầu ăn giá $48\,200$ đồng. Trước khi ra quầy thanh toán, mẹ nhẩm vài giây rồi gật đầu: "Đủ tiền."

Mẹ không đặt tính, không bấm máy. Mẹ chỉ làm tròn các con số cho dễ nhẩm rồi cộng lại. Đó là **ước lượng**, một kĩ năng mà người lớn dùng hằng ngày, khi đi chợ, khi xem hoá đơn, khi đoán xem đi đường mất bao lâu. Bài này dạy bạn làm tròn cho đúng quy tắc, và dùng nó một cách thông minh.

## Làm tròn số

Hãy nhìn số $2\,685$ trên một trục số chỉ có các số tròn trăm. Số $2\,685$ nằm giữa $2\,600$ và $2\,700$, và gần $2\,700$ hơn. Làm tròn $2\,685$ đến hàng trăm nghĩa là thay nó bằng số tròn trăm gần nó nhất, tức là $2\,700$.

:::graph Số $2\,685$ gần $2\,700$ hơn $2\,600$
alt: Một đoạn trục số quanh 2600 đến 2700, điểm 2685 nằm gần đầu 2700 hơn; điểm giữa 2650 được đánh dấu
x: 2450..2800
y: -1..1
shape: free
segment: (2450, 0) (2800, 0)
point: (2600, 0) "2600" below
point: (2650, 0) "2650" below
point: (2700, 0) "2700" below
open: (2685, 0) "2685" above
:::

Việc nhìn trục số mỗi lần thì chậm. May mắn là chỉ cần nhìn **một chữ số** là biết số nằm ở nửa nào.

:::theorem Quy tắc làm tròn số
Muốn làm tròn một số đến một hàng nào đó, ta xét **chữ số ngay bên phải** hàng làm tròn:
- Nếu chữ số đó **nhỏ hơn $5$** thì giữ nguyên chữ số ở hàng làm tròn và thay tất cả các chữ số bên phải bằng chữ số $0$ (nếu ở phần thập phân thì bỏ đi).
- Nếu chữ số đó **lớn hơn hoặc bằng $5$** thì cộng thêm $1$ vào chữ số ở hàng làm tròn rồi làm như trên.
:::

Với $2\,685$ làm tròn đến hàng trăm: hàng trăm là chữ số $6$, chữ số ngay bên phải là $8\ge5$, nên tăng $6$ thành $7$ và thay các chữ số sau bằng $0$, được $2\,700$.

Kết quả làm tròn được kí hiệu bằng dấu "$\approx$" (đọc là "xấp xỉ"): $2\,685\approx2\,700$.

:::note Làm tròn số thập phân âm
Muốn làm tròn một số thập phân âm, ta làm tròn số đối của nó rồi đặt dấu "$-$" trước kết quả. Ví dụ: $12{,}456\approx12{,}5$ (làm tròn đến hàng phần mười), nên $-12{,}456\approx-12{,}5$.
:::

## Ước lượng kết quả phép tính

Muốn ước lượng kết quả một phép tính, ta làm tròn các số sao cho dễ nhẩm, rồi tính với các số đã làm tròn. Không có quy định cứng phải làm tròn đến hàng nào: chọn hàng sao cho phép tính nhẩm được mà vẫn đủ gần.

Ví dụ: $19{,}8\cdot5{,}1\approx20\cdot5=100$. Kết quả đúng là $100{,}98$, rất gần với $100$.

Ước lượng có hai công dụng lớn:

1. **Kiểm tra kết quả.** Nếu bạn bấm máy ra $4{,}9\cdot21{,}3=10{,}437$, một phép ước lượng $5\cdot20=100$ lập tức cho thấy có gì đó sai: chắc bạn đã đặt nhầm dấu phẩy.
2. **Quyết định nhanh.** Khi không cần con số chính xác, chỉ cần biết "đủ hay không đủ", "kịp hay không kịp", ước lượng tiết kiệm rất nhiều thời gian.

:::tip Làm tròn lên cho an toàn
Khi lo thiếu, chẳng hạn ước lượng tiền mua hàng, hãy làm tròn **lên** các giá tiền. Nếu tổng ước lượng vẫn không vượt quá số tiền mang theo, thì chắc chắn đủ.
:::

## Ví dụ

Ta bắt đầu với một số thập phân quen thuộc.

:::example Làm tròn số thập phân
Làm tròn số $3{,}1416$:

a) đến hàng phần mười;

b) đến hàng phần trăm;

c) đến hàng phần nghìn.

**Lời giải.**

a) Chữ số hàng phần mười là $1$, chữ số ngay bên phải là $4<5$. Ta giữ nguyên và bỏ các chữ số sau: $3{,}1416\approx3{,}1$.

b) Chữ số hàng phần trăm là $4$, chữ số ngay bên phải là $1<5$. Ta được $3{,}1416\approx3{,}14$.

c) Chữ số hàng phần nghìn là $1$, chữ số ngay bên phải là $6\ge5$. Ta tăng $1$ thành $2$: $3{,}1416\approx3{,}142$.

Vậy kết quả lần lượt là $3{,}1$; $3{,}14$; $3{,}142$.
:::

Làm tròn số nguyên đến các hàng khác nhau cho các kết quả khác nhau.

:::example Làm tròn số nguyên
Làm tròn số $2\,685$ đến hàng chục, hàng trăm, hàng nghìn.

**Lời giải.**

Đến hàng chục: chữ số hàng chục là $8$, chữ số ngay bên phải là $5\ge5$, nên $2\,685\approx2\,690$.

Đến hàng trăm: chữ số hàng trăm là $6$, chữ số ngay bên phải là $8\ge5$, nên $2\,685\approx2\,700$.

Đến hàng nghìn: chữ số hàng nghìn là $2$, chữ số ngay bên phải là $6\ge5$, nên $2\,685\approx3\,000$.

Vậy $2\,685\approx2\,690$ (hàng chục); $2\,685\approx2\,700$ (hàng trăm); $2\,685\approx3\,000$ (hàng nghìn).
:::

Với số âm, ta làm việc với số đối.

:::example Làm tròn số thập phân âm
Làm tròn số $-12{,}456$:

a) đến hàng phần mười;

b) đến hàng đơn vị.

**Lời giải.**

Số đối của $-12{,}456$ là $12{,}456$.

a) Làm tròn $12{,}456$ đến hàng phần mười: chữ số ngay bên phải hàng phần mười là $5\ge5$, nên $12{,}456\approx12{,}5$. Do đó $-12{,}456\approx-12{,}5$.

b) Làm tròn $12{,}456$ đến hàng đơn vị: chữ số ngay bên phải hàng đơn vị là $4<5$, nên $12{,}456\approx12$. Do đó $-12{,}456\approx-12$.

Vậy a) $-12{,}5$; b) $-12$.
:::

Ước lượng giúp ta phát hiện lỗi ngay.

:::example Kết quả này có đúng không?
Bạn An dùng máy tính và được $4{,}9\cdot21{,}3=10{,}437$. Không cần tính lại, hãy cho biết kết quả này có hợp lí không. Nếu không, hãy tìm kết quả đúng.

**Lời giải.**

Làm tròn các thừa số đến hàng đơn vị và hàng chục: $4{,}9\approx5$ và $21{,}3\approx20$. Do đó
$$4{,}9\cdot21{,}3\approx5\cdot20=100.$$

Kết quả $10{,}437$ nhỏ hơn ước lượng khoảng $10$ lần, nên không hợp lí. Có lẽ An đã đặt sai dấu phẩy.

Tính lại: $49\cdot213=10\,437$; hai thừa số có tất cả hai chữ số ở phần thập phân, nên $4{,}9\cdot21{,}3=104{,}37$.

Vậy kết quả của An sai; kết quả đúng là $104{,}37$, rất gần với ước lượng $100$.
:::

Cuối cùng, ta trở lại với mẹ bạn Minh ở siêu thị.

:::example Mẹ có đủ tiền không?
Mẹ bạn Minh mang $200$ nghìn đồng. Mẹ mua $3$ kg gạo giá $18\,900$ đồng/kg, $2$ hộp sữa giá $31\,500$ đồng/hộp và $1$ chai dầu ăn giá $48\,200$ đồng. Bằng cách ước lượng, hãy cho biết mẹ có đủ tiền không. Sau đó tính số tiền chính xác.

**Lời giải.**

*Hiểu đề.* Chỉ cần biết "đủ hay không đủ", nên ước lượng là đủ dùng.

*Tìm cách giải.* Để chắc chắn, ta làm tròn **lên** mỗi giá tiền đến hàng nghìn, rồi cộng.

*Giải.* Làm tròn lên: $18\,900\to19\,000$; $31\,500\to32\,000$; $48\,200\to49\,000$. Tổng ước lượng là
$$3\cdot19\,000+2\cdot32\,000+49\,000=57\,000+64\,000+49\,000=170\,000\ (\text{đồng}).$$

Vì mỗi giá tiền đều được làm tròn lên, số tiền thật không vượt quá $170\,000$ đồng, nhỏ hơn $200\,000$ đồng. Vậy mẹ đủ tiền.

Số tiền chính xác là
$$3\cdot18\,900+2\cdot31\,500+48\,200=56\,700+63\,000+48\,200=167\,900\ (\text{đồng}).$$

Vậy mẹ đủ tiền; số tiền phải trả là $167\,900$ đồng.

*Nhìn lại.* Ước lượng $170\,000$ chỉ chênh với số thật $2\,100$ đồng, đủ tốt để quyết định. Nếu làm tròn theo quy tắc thông thường thì $31\,500\to32\,000$ nhưng $48\,200\to48\,000$, một số lên một số xuống; khi đó ta không chắc tổng ước lượng lớn hơn hay nhỏ hơn số thật.
:::

:::warning Những chỗ hay nhầm
- **Nhìn nhầm chữ số để quyết định.** Sai: làm tròn $3{,}1416$ đến hàng phần trăm, nhìn chữ số $6$ ở cuối nên được $3{,}15$. Vì sao sai: chỉ xét chữ số **ngay bên phải** hàng làm tròn, ở đây là $1$. Đúng: $3{,}1416\approx3{,}14$.
- **Làm tròn số âm "lên" về phía số lớn hơn.** Sai: $-12{,}456\approx-12{,}4$ "vì làm tròn lên". Vì sao sai: với số âm, ta làm tròn số đối rồi đặt dấu "$-$"; $12{,}456\approx12{,}5$. Đúng: $-12{,}456\approx-12{,}5$.
- **Quên thay các chữ số bên phải bằng $0$.** Sai: $2\,685$ làm tròn đến hàng trăm được $27$. Vì sao sai: số tròn trăm vẫn phải giữ đúng giá trị, có các chữ số $0$ ở hàng chục, hàng đơn vị. Đúng: $2\,685\approx2\,700$.
- **Làm tròn quá thô khi ước lượng.** Sai: ước lượng $49{,}7\cdot2{,}03\approx0\cdot2=0$. Vì sao sai: làm tròn $49{,}7$ đến hàng trăm làm mất hết thông tin. Đúng: $49{,}7\cdot2{,}03\approx50\cdot2=100$.
:::

## Thuật ngữ

:::terms
- làm tròn số | rounding
- hàng làm tròn | rounding place
- xấp xỉ | approximately equal to
- ước lượng | estimate
- làm tròn lên | round up
- hàng phần mười | tenths place
- hàng phần trăm | hundredths place
- hàng đơn vị | units place
- kết quả chính xác | exact result
:::

## Tóm tắt

- Làm tròn: xét chữ số ngay bên phải hàng làm tròn; nhỏ hơn $5$ thì giữ nguyên, lớn hơn hoặc bằng $5$ thì cộng $1$ vào hàng làm tròn; các chữ số bên phải thay bằng $0$ (ở phần thập phân thì bỏ đi).
- Số thập phân âm: làm tròn số đối rồi đặt dấu "$-$".
- Kí hiệu "$\approx$" đọc là "xấp xỉ".
- Ước lượng: làm tròn các số cho dễ nhẩm rồi tính; dùng để kiểm tra kết quả và quyết định nhanh. Khi sợ thiếu, làm tròn lên.

Mẹ bạn Minh không cần máy tính vẫn biết mình đủ tiền, vì mẹ ước lượng có chủ đích: làm tròn lên cho an toàn. Từ nay, mỗi lần bấm máy tính xong, bạn hãy nhẩm một phép ước lượng. Chỉ mất vài giây, nhưng nó sẽ cứu bạn khỏi những lỗi đặt sai dấu phẩy. Nếu cần ôn lại phép tính với số thập phân, bạn xem bài [Số thập phân. Tính toán với số thập phân](lesson:decimal-numbers).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Làm tròn số $47{,}3862$:

a) đến hàng đơn vị;

b) đến hàng phần mười;

c) đến hàng phần trăm;

d) đến hàng chục.

::hint
**Kiến thức:** xét chữ số ngay bên phải hàng làm tròn.

**Gợi ý các bước:**
1. Xác định chữ số ở hàng làm tròn và chữ số ngay bên phải nó.
2. Áp dụng quy tắc làm tròn.

::solution
a) Chữ số ngay bên phải hàng đơn vị là $3<5$, nên $47{,}3862\approx47$.

b) Chữ số ngay bên phải hàng phần mười là $8\ge5$, nên tăng $3$ thành $4$: $47{,}3862\approx47{,}4$.

c) Chữ số ngay bên phải hàng phần trăm là $6\ge5$, nên tăng $8$ thành $9$: $47{,}3862\approx47{,}39$.

d) Chữ số ngay bên phải hàng chục là $7\ge5$, nên tăng $4$ thành $5$: $47{,}3862\approx50$.

Vậy kết quả lần lượt là $47$; $47{,}4$; $47{,}39$; $50$.

**Đáp số.** a) $47$; b) $47{,}4$; c) $47{,}39$; d) $50$.
:::

:::exercise
Làm tròn số $-8{,}0549$:

a) đến hàng phần mười;

b) đến hàng phần trăm;

c) đến hàng đơn vị.

::hint
**Kiến thức:** làm tròn số đối $8{,}0549$ rồi đặt dấu "$-$".

**Gợi ý các bước:**
1. Làm tròn $8{,}0549$ đến hàng cần thiết.
2. Đặt dấu "$-$" trước kết quả.

::solution
Số đối của $-8{,}0549$ là $8{,}0549$.

a) Chữ số ngay bên phải hàng phần mười là $5\ge5$, nên tăng $0$ thành $1$: $8{,}0549\approx8{,}1$. Do đó $-8{,}0549\approx-8{,}1$.

b) Chữ số ngay bên phải hàng phần trăm là $4<5$, nên $8{,}0549\approx8{,}05$. Do đó $-8{,}0549\approx-8{,}05$.

c) Chữ số ngay bên phải hàng đơn vị là $0<5$, nên $8{,}0549\approx8$. Do đó $-8{,}0549\approx-8$.

Vậy kết quả lần lượt là $-8{,}1$; $-8{,}05$; $-8$.

**Đáp số.** a) $-8{,}1$; b) $-8{,}05$; c) $-8$.
:::

:::exercise
Làm tròn số $1\,234\,567$ đến hàng nghìn, hàng trăm nghìn và hàng triệu.

::hint
**Kiến thức:** khi làm tròn số nguyên, các chữ số bên phải hàng làm tròn được thay bằng chữ số $0$.

**Gợi ý các bước:**
1. Xác định chữ số ở hàng làm tròn và chữ số ngay bên phải.
2. Áp dụng quy tắc, thay các chữ số sau bằng $0$.

::solution
Đến hàng nghìn: chữ số hàng nghìn là $4$, chữ số ngay bên phải là $5\ge5$, nên $1\,234\,567\approx1\,235\,000$.

Đến hàng trăm nghìn: chữ số hàng trăm nghìn là $2$, chữ số ngay bên phải là $3<5$, nên $1\,234\,567\approx1\,200\,000$.

Đến hàng triệu: chữ số hàng triệu là $1$, chữ số ngay bên phải là $2<5$, nên $1\,234\,567\approx1\,000\,000$.

Vậy kết quả lần lượt là $1\,235\,000$; $1\,200\,000$; $1\,000\,000$.

**Đáp số.** $1\,235\,000$; $1\,200\,000$; $1\,000\,000$.
:::

:::exercise
Ước lượng kết quả các phép tính sau bằng cách làm tròn các số cho dễ nhẩm:

a) $61{,}8+29{,}3$;

b) $7{,}9\cdot4{,}05$;

c) $59{,}4:3{,}1$.

::hint
**Kiến thức:** làm tròn mỗi số đến một hàng thích hợp để phép tính nhẩm được.

**Gợi ý các bước:**
1. Làm tròn từng số.
2. Tính nhẩm với các số đã làm tròn.

::solution
a) Làm tròn đến hàng đơn vị: $61{,}8\approx62$ và $29{,}3\approx29$. Do đó
$$61{,}8+29{,}3\approx62+29=91.$$

b) Làm tròn đến hàng đơn vị: $7{,}9\approx8$ và $4{,}05\approx4$. Do đó
$$7{,}9\cdot4{,}05\approx8\cdot4=32.$$

c) Làm tròn số bị chia đến hàng chục, số chia đến hàng đơn vị: $59{,}4\approx60$ và $3{,}1\approx3$. Do đó
$$59{,}4:3{,}1\approx60:3=20.$$

Vậy các kết quả xấp xỉ $91$; $32$; $20$.

**Đáp số.** a) $\approx91$; b) $\approx32$; c) $\approx20$.
:::

:::exercise
Bạn Nam tính được $0{,}48\cdot51=244{,}8$. Hãy dùng ước lượng để kiểm tra kết quả của Nam, rồi tìm kết quả đúng.

::hint
**Kiến thức:** $0{,}48\approx0{,}5$; $51\approx50$.

**Gợi ý các bước:**
1. Ước lượng tích.
2. So sánh với kết quả của Nam; nếu sai, tính lại.

::solution
Làm tròn: $0{,}48\approx0{,}5$ và $51\approx50$. Do đó
$$0{,}48\cdot51\approx0{,}5\cdot50=25.$$

Kết quả $244{,}8$ lớn hơn ước lượng khoảng $10$ lần, nên kết quả của Nam sai.

Tính lại: $48\cdot51=2448$; thừa số $0{,}48$ có hai chữ số ở phần thập phân, nên $0{,}48\cdot51=24{,}48$.

Vậy kết quả của Nam sai; kết quả đúng là $24{,}48$.

**Đáp số.** Sai; kết quả đúng là $24{,}48$.
:::

:::exercise
Một căn phòng hình chữ nhật dài $12{,}45$ m, rộng $7{,}8$ m. Tính diện tích căn phòng rồi làm tròn kết quả đến hàng phần mười.

::hint
**Kiến thức:** diện tích hình chữ nhật bằng chiều dài nhân chiều rộng.

**Gợi ý các bước:**
1. Tính tích $12{,}45\cdot7{,}8$.
2. Làm tròn đến hàng phần mười.

::solution
Diện tích căn phòng là
$$12{,}45\cdot7{,}8=97{,}11\ (\text{m}^2).$$

Chữ số ngay bên phải hàng phần mười là $1<5$, nên $97{,}11\approx97{,}1$.

Vậy diện tích căn phòng xấp xỉ $97{,}1\ \text{m}^2$.

**Đáp số.** $\approx97{,}1\ \text{m}^2$.
:::

:::exercise
Một ô tô cần đi quãng đường $245{,}6$ km với vận tốc trung bình $49{,}2$ km/h. Hãy ước lượng thời gian ô tô đi hết quãng đường đó.

::hint
**Kiến thức:** thời gian bằng quãng đường chia cho vận tốc.

**Gợi ý các bước:**
1. Làm tròn quãng đường và vận tốc đến hàng chục.
2. Chia nhẩm.

::solution
Làm tròn đến hàng chục: $245{,}6\approx250$ và $49{,}2\approx50$.

Thời gian ô tô đi hết quãng đường xấp xỉ
$$250:50=5\ (\text{giờ}).$$

Vậy ô tô đi hết quãng đường trong khoảng $5$ giờ.

**Đáp số.** Khoảng $5$ giờ.
:::

:::exercise
Một chiếc đĩa hình tròn có đường kính $12{,}5$ cm. Chu vi của đĩa được tính theo công thức $C=3{,}14\cdot d$, trong đó $d$ là đường kính. Tính chu vi chiếc đĩa rồi làm tròn kết quả đến hàng đơn vị.

::hint
**Kiến thức:** $C=3{,}14\cdot d$; quy tắc làm tròn.

**Gợi ý các bước:**
1. Tính $3{,}14\cdot12{,}5$.
2. Làm tròn đến hàng đơn vị.

::solution
Chu vi chiếc đĩa là
$$C=3{,}14\cdot12{,}5=39{,}25\ (\text{cm}).$$

Chữ số ngay bên phải hàng đơn vị là $2<5$, nên $39{,}25\approx39$.

Vậy chu vi chiếc đĩa xấp xỉ $39$ cm.

**Đáp số.** $\approx39$ cm.
:::

:::exercise Thử thách
Có bao nhiêu số thập phân dương có đúng hai chữ số ở phần thập phân mà khi làm tròn đến hàng phần mười thì được $2{,}4$? Tìm số nhỏ nhất và số lớn nhất trong các số đó.

::hint
**Kiến thức:** một số được làm tròn thành $2{,}4$ khi nó nằm ở khoảng gần $2{,}4$ nhất, từ nửa đường giữa $2{,}3$ và $2{,}4$ đến trước nửa đường giữa $2{,}4$ và $2{,}5$.

**Gợi ý các bước:**
1. Thử $2{,}34$ và $2{,}35$; thử $2{,}44$ và $2{,}45$.
2. Liệt kê và đếm.

::solution
Một số có hai chữ số ở phần thập phân, khi làm tròn đến hàng phần mười được $2{,}4$, thì phải có dạng $2{,}3b$ hoặc $2{,}4b$, với $b$ là một chữ số.

Số $2{,}3b$ làm tròn đến hàng phần mười được $2{,}4$ khi $b\ge5$, tức là $2{,}35$; $2{,}36$; $2{,}37$; $2{,}38$; $2{,}39$.

Số $2{,}4b$ làm tròn đến hàng phần mười được $2{,}4$ khi $b<5$, tức là $2{,}40$; $2{,}41$; $2{,}42$; $2{,}43$; $2{,}44$.

Các số khác (như $2{,}34$ hay $2{,}45$) làm tròn được $2{,}3$ hoặc $2{,}5$.

Có tất cả $5+5=10$ số; số nhỏ nhất là $2{,}35$, số lớn nhất là $2{,}44$.

Vậy có $10$ số; số nhỏ nhất là $2{,}35$ và số lớn nhất là $2{,}44$.

**Đáp số.** $10$ số; nhỏ nhất $2{,}35$; lớn nhất $2{,}44$.
:::

## Kiểm tra mini

:::quiz
::mc
Làm tròn số $5{,}276$ đến hàng phần trăm, ta được
A. $5{,}27$.
B. $5{,}28$.
C. $5{,}3$.
D. $5{,}2$.
::key B
Chữ số ngay bên phải hàng phần trăm là $6\ge5$, nên $5{,}276\approx5{,}28$. A bỏ đi mà không tăng; C làm tròn đến hàng phần mười; D chỉ cắt bớt.

::mc
Làm tròn số $-3{,}46$ đến hàng phần mười, ta được
A. $-3{,}4$.
B. $-3$.
C. $-3{,}5$.
D. $-4$.
::key C
Làm tròn $3{,}46\approx3{,}5$ rồi đặt dấu "$-$". A làm tròn sai hướng; B và D làm tròn đến hàng đơn vị.

::mc
Làm tròn số $8\,652$ đến hàng trăm, ta được
A. $8\,600$.
B. $8\,650$.
C. $9\,000$.
D. $8\,700$.
::key D
Chữ số ngay bên phải hàng trăm là $5\ge5$, nên $8\,652\approx8\,700$. A giữ nguyên sai; B làm tròn đến hàng chục; C làm tròn đến hàng nghìn.

::mc
Giá trị gần nhất với kết quả của phép tính $49{,}7\cdot2{,}03$ là
A. $100$.
B. $10$.
C. $1000$.
D. $50$.
::key A
$49{,}7\cdot2{,}03\approx50\cdot2=100$. B và C lệch đi $10$ lần (sai dấu phẩy); D quên nhân với $2$.

::tf
Cho số $a=17{,}0451$. Xét tính đúng sai của các mệnh đề sau:
a) Làm tròn $a$ đến hàng đơn vị, ta được $17$.
b) Làm tròn $a$ đến hàng phần mười, ta được $17{,}1$.
c) Làm tròn $a$ đến hàng phần trăm, ta được $17{,}05$.
d) Làm tròn $a$ đến hàng chục, ta được $10$.
::key Đ S Đ S
a) Đúng: chữ số sau hàng đơn vị là $0$. b) Sai: chữ số sau hàng phần mười là $4<5$, nên $a\approx17{,}0$. c) Đúng: chữ số sau hàng phần trăm là $5$, nên tăng $4$ thành $5$. d) Sai: chữ số sau hàng chục là $7\ge5$, nên $a\approx20$.

::sa
Làm tròn số $2{,}718$ đến hàng phần trăm.
::key 2,72
Chữ số ngay bên phải hàng phần trăm là $8\ge5$, nên $2{,}718\approx2{,}72$.

::sa
Làm tròn $198{,}6$ đến hàng chục và $4{,}97$ đến hàng đơn vị, rồi ước lượng thương $198{,}6:4{,}97$.
::key 40
$198{,}6\approx200$ và $4{,}97\approx5$, nên $198{,}6:4{,}97\approx200:5=40$.
:::
