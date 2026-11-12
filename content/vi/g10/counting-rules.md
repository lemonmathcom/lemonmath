---
title: Quy tắc đếm
description: Dùng quy tắc cộng, quy tắc nhân, sơ đồ hình cây và cách đếm phần bù để đếm các lựa chọn, các số và mật khẩu mà không cần liệt kê.
minutes: 20
---

:::goals
- Nhận ra bài toán đếm cần dùng quy tắc cộng hay quy tắc nhân.
- Dùng sơ đồ hình cây để sắp xếp các lựa chọn được thực hiện qua nhiều bước.
- Đếm các số, mã và lộ trình có điều kiện ràng buộc về chữ số hoặc chữ cái.
- Đếm các tình huống "có ít nhất một" bằng cách đếm phần bù.
:::

Thư viện trường cấp cho mỗi bạn đọc một mã thẻ gồm một chữ cái trong năm chữ $A, B, C, D, E$, theo sau là ba chữ số. Thư viện có $4\,800$ bạn đọc. Liệu có đủ mã để mỗi bạn một mã khác nhau không? Và nếu quy định ba chữ số trong mã phải khác nhau thì sao?

Bạn có thể thử ngồi viết ra từng mã: $A000$, $A001$, $A002$, … Nhưng chỉ sau vài chục mã là đã thấy mỏi tay, mà còn dễ sót. Cách khôn hơn là nhìn vào *cách* một mã được tạo ra: chọn chữ cái trước, rồi đến từng chữ số. Các **quy tắc đếm** trong bài này giúp ta đếm theo cấu trúc ấy, không cần liệt kê. Về sau, hoán vị, tổ hợp và cả xác suất đều đứng trên hai quy tắc nhỏ này.

## Quy tắc cộng

Lớp bạn được đi tham quan **một** địa điểm: hoặc một trong $3$ bảo tàng, hoặc một trong $2$ công viên. Ta chỉ đi đúng một nơi, và mỗi nơi thuộc đúng một nhóm, nên số cách chọn là $3+2=5$. Đếm từng nhóm, rồi cộng lại, thế thôi.

:::definition Quy tắc cộng
Nếu một công việc có thể làm theo một trong hai phương án **không có lựa chọn chung**, phương án thứ nhất có $m$ cách và phương án thứ hai có $n$ cách, thì công việc đó có $m+n$ cách thực hiện. Với nhiều phương án hơn cũng vậy: cộng các số lại.
:::

Khi đọc đề, bạn để ý chữ "**hoặc**": ta chỉ chọn ở nhóm này hoặc nhóm kia, và mỗi lựa chọn thuộc đúng một nhóm. Gặp tình huống ấy thì cộng.

:::example Chọn một cuốn sách
Tủ sách của lớp có $7$ truyện tranh, $5$ sách khoa học và $4$ tiểu thuyết. Có bao nhiêu cách chọn một cuốn để mượn về nhà?

**Lời giải.** Mỗi cuốn thuộc đúng một trong ba nhóm, và ta chọn một cuốn ở nhóm này **hoặc** nhóm kia, nên dùng quy tắc cộng:

$$7+5+4=16.$$

Vậy có $16$ cách chọn.
:::

## Quy tắc nhân

Giờ đổi tình huống một chút: ở căng-tin, bạn chọn một đồ uống **và** một món ăn nhẹ. Lần này không phải chọn một thứ nữa, mà chọn hai thứ, lần lượt: chọn đồ uống trước (trà hoặc nước ép), rồi với mỗi đồ uống chọn một món ăn nhẹ (bánh, trái cây hoặc hạt). Vẽ ra thành sơ đồ hình cây thì thấy hết mọi khả năng.

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

Đếm các đầu nhánh bên phải: $3+3=6$. Bạn để ý, đồ uống nào cũng mở ra đúng $3$ nhánh như nhau, nên thay vì cộng $3$ hai lần, ta viết gọn $2\cdot3=6$. Phép nhân xuất hiện từ đó.

:::definition Quy tắc nhân
Nếu một công việc được thực hiện qua **các bước liên tiếp**, bước 1 có $n_1$ cách, ứng với mỗi cách đó bước 2 có $n_2$ cách, ..., bước $k$ có $n_k$ cách, thì cả công việc có
$$n_1\cdot n_2\cdots n_k$$
cách thực hiện.
:::

**Vì sao lại nhân?** Nhìn lại sơ đồ hình cây: mỗi nhánh ở bước 1 tách thành $n_2$ nhánh, nên sau hai bước có $n_1$ nhóm, mỗi nhóm $n_2$ nhánh, tức $n_1\cdot n_2$ nhánh. Bước sau lại tách tiếp từng nhánh như thế, nên ta cứ nhân thêm.

Dấu hiệu lần này là chữ "**và**" (hay "rồi"): làm bước 1, **rồi** bước 2, **rồi** bước 3, và phải làm đủ các bước mới xong việc.

:::example Chọn trang phục
Bạn Lan có $5$ chiếc áo, $4$ chiếc quần và $2$ đôi giày. Mỗi bộ trang phục gồm một áo, một quần và một đôi giày. Lan có bao nhiêu bộ trang phục khác nhau?

**Lời giải.** Chọn một bộ gồm ba bước liên tiếp (áo, rồi quần, rồi giày), và số cách ở mỗi bước không phụ thuộc vào bước trước, nên dùng quy tắc nhân:

$$5\cdot4\cdot2=40.$$

Vậy Lan có $40$ bộ trang phục.
:::

:::tip Cộng hay nhân?
Trước khi viết phép tính, bạn tự hỏi một câu: "Ta làm việc này **hoặc** việc kia?" thì cộng. "Ta làm việc này **rồi** việc kia?" thì nhân. Nhiều bài cần cả hai: trong mỗi phương án thì nhân các bước, rồi cộng các phương án lại.
:::

## Số, mã và lộ trình

Bài toán thật thường kèm điều kiện: chữ số đầu không được là $0$, số phải chẵn, các chữ số phải khác nhau… Lời khuyên ở đây rất đơn giản: **điền vị trí khó tính nhất trước**, vì để nó về sau thì có khi nó chẳng còn mấy lựa chọn. Còn nếu số cách ở một bước lại tuỳ vào lựa chọn trước đó, thì ta chia trường hợp mà đếm.

:::example Lập số từ các chữ số cho trước
Từ các chữ số $0, 1, 2, 3, 4, 5$ lập được bao nhiêu số có ba chữ số khác nhau? Trong đó có bao nhiêu số chẵn?

**Lời giải.** Chữ số hàng trăm phải khác $0$, nên ta chọn nó trước:

$$\underbrace{5}_{\text{hàng trăm}}\cdot\underbrace{5}_{\text{hàng chục}}\cdot\underbrace{4}_{\text{hàng đơn vị}}=100.$$

Với số chẵn, hàng đơn vị là $0$, $2$ hoặc $4$. Số cách chọn hàng trăm phụ thuộc vào việc hàng đơn vị có phải là $0$ không, nên ta chia hai trường hợp:
- Hàng đơn vị là $0$: hàng trăm có $5$ cách, hàng chục có $4$ cách, được $5\cdot4=20$ số.
- Hàng đơn vị là $2$ hoặc $4$ ($2$ cách): hàng trăm khác $0$ và khác chữ số hàng đơn vị nên có $4$ cách, hàng chục có $4$ cách, được $2\cdot4\cdot4=32$ số.

Hai trường hợp không có số chung, nên cộng lại: $20+32=52$.

Vậy lập được $100$ số có ba chữ số khác nhau, trong đó có $52$ số chẵn.
:::

Đến đây ta đã đủ đồ nghề để quay lại với thư viện ở đầu bài.

:::example Mã thẻ thư viện
Mỗi mã thẻ gồm một chữ cái trong $A, B, C, D, E$ rồi đến ba chữ số. Có bao nhiêu mã nếu các chữ số được lặp lại? Bao nhiêu mã nếu ba chữ số phải khác nhau? Mỗi cách có đủ cho $4\,800$ bạn đọc không?

**Lời giải.** Một mã gồm bốn vị trí được điền lần lượt, nên dùng quy tắc nhân.

Khi chữ số được lặp, mỗi chữ số có $10$ cách:

$$5\cdot10\cdot10\cdot10=5\,000.$$

Khi ba chữ số khác nhau, mỗi chữ số sau ít hơn chữ số trước một cách:

$$5\cdot10\cdot9\cdot8=3\,600.$$

Vậy có $5\,000$ mã khi được lặp chữ số, đủ cho $4\,800$ bạn đọc; nhưng chỉ có $3\,600$ mã khi ba chữ số khác nhau, không đủ.
:::

Trong nhiều bài, hai quy tắc không đứng riêng mà đi cùng nhau. Bài toán chọn đường đi sau là một ví dụ quen thuộc.

:::example Lộ trình giữa các thị trấn
Từ thị trấn $A$ đến thị trấn $B$ có $4$ con đường, từ $B$ đến thị trấn $C$ có $2$ con đường, ngoài ra có $3$ con đường đi thẳng từ $A$ đến $C$. Có bao nhiêu cách đi từ $A$ đến $C$?

**Lời giải.** Một lộ trình hoặc đi qua $B$, hoặc đi thẳng. Đi qua $B$ gồm hai bước liên tiếp nên dùng quy tắc nhân:

$$\underbrace{4\cdot2}_{\text{qua } B}+\underbrace{3}_{\text{đi thẳng}}=8+3=11.$$

Vậy có $11$ cách đi từ $A$ đến $C$.
:::

## Cách đếm phần bù

Có những bài đếm thẳng thì rất rối, nhưng đếm phần ngược lại thì nhẹ nhàng. Giống như muốn biết lớp có bao nhiêu bạn đã nộp bài, đôi khi đếm số bạn *chưa* nộp rồi lấy sĩ số trừ đi lại nhanh hơn. Nếu có tất cả $N$ khả năng, trong đó $M$ khả năng không thoả điều kiện, thì số khả năng thoả điều kiện là $N-M$.

:::example Có ít nhất một chữ số chẵn
Có bao nhiêu số có ba chữ số chứa ít nhất một chữ số chẵn?

**Lời giải.** "Ít nhất một" có nhiều trường hợp (một, hai hoặc ba chữ số chẵn), còn phần bù "không có chữ số chẵn nào" chỉ có một trường hợp. Ta đếm tất cả rồi trừ phần bù.

Tất cả các số có ba chữ số (hàng trăm khác $0$):

$$9\cdot10\cdot10=900.$$

Các số có cả ba chữ số đều lẻ (mỗi chữ số chọn trong $1, 3, 5, 7, 9$):

$$5\cdot5\cdot5=125.$$

Vậy có $900-125=775$ số có ba chữ số chứa ít nhất một chữ số chẵn.
:::

## Kiểm tra bằng máy tính

Đếm sai là chuyện rất hay gặp, kể cả với người làm toán lâu năm. Nếu có máy tính, bạn có thể để nó thử hết mọi khả năng rồi so với kết quả của mình. Đây là đoạn kiểm tra cho ví dụ lập số từ các chữ số $0, 1, 2, 3, 4, 5$:

```python
count = 0
even = 0
for n in range(100, 1000):
    s = str(n)
    if set(s) <= set("012345") and len(set(s)) == 3:
        count += 1
        if n % 2 == 0:
            even += 1
print(count, even)   # 100 52
```

:::warning Những sai lầm thường gặp
- **Nhân khi phải cộng.** Với tủ sách $7$, $5$, $4$ cuốn, nhiều bạn viết $7\cdot5\cdot4=140$ cách chọn **một** cuốn. Sai vì ta đâu có lấy mỗi nhóm một cuốn. Đúng: $7+5+4=16$. Khi phân vân, hãy thử với một trường hợp nhỏ liệt kê được bằng tay.
- **Quên chữ số $0$ ở đầu.** Đếm số có ba chữ số khác nhau từ $0, \dots, 5$ là $6\cdot5\cdot4=120$. Sai vì đã tính cả những "số" như $012$, mà $012$ thật ra chỉ là số có hai chữ số. Đúng: $5\cdot5\cdot4=100$.
- **Không chia trường hợp khi cần.** Đếm số chẵn ở ví dụ trên là $5\cdot4\cdot3=60$ (hàng trăm $5$ cách, hàng chục $4$ cách, hàng đơn vị là $0$, $2$ hoặc $4$). Sai vì có thể một chữ số chẵn đã được dùng ở hàng trăm hay hàng chục, nên hàng đơn vị không phải lúc nào cũng còn $3$ cách. Đúng: chọn hàng đơn vị trước, chia hai trường hợp, được $52$.
- **Đếm trùng.** Cộng hai nhóm có phần chung thì phần chung bị đếm hai lần. Quy tắc cộng chỉ dùng được khi các phương án **không có lựa chọn chung**.
:::

## Thuật ngữ

:::terms
- quy tắc cộng | addition rule
- quy tắc nhân | multiplication rule
- các bước liên tiếp | successive steps
- sơ đồ hình cây | tree diagram
- trường hợp | case
- phần bù (đếm phần còn lại) | complement
- điều kiện ràng buộc | restriction
:::

## Tóm tắt

- **Quy tắc cộng** ("hoặc"): các phương án không có lựa chọn chung, cộng số cách lại.
- **Quy tắc nhân** ("rồi"): các bước liên tiếp, nhân số cách lại. Sơ đồ hình cây cho thấy vì sao.
- Có điều kiện: điền vị trí bị ràng buộc nhiều nhất trước (chữ số đầu khác $0$, chữ số cuối chẵn, ...), chia trường hợp khi số cách thay đổi.
- **Đếm phần bù**: số cách thoả điều kiện $=$ tất cả $-$ số cách không thoả. Rất hợp với "có ít nhất một".

Nhớ lại thư viện ở đầu bài: không cần viết ra mã nào, chỉ một phép nhân $5\cdot10\cdot10\cdot10$ đã cho biết có đủ mã hay không. Đó là sức mạnh của việc đếm theo cấu trúc. Khi làm bài, bạn cứ tự hỏi "đây là *hoặc* hay là *rồi*?" trước, phần còn lại sẽ dễ hơn nhiều.

## Luyện tập

Mỗi bài có phần kiến thức cần dùng và gợi ý vài bước đầu. Bạn cứ tự làm trước, sai cũng không sao; đối chiếu với lời giải sau mới thấy mình hiểu đến đâu.

:::exercise
Căng tin có $4$ món chính, $3$ món canh và $2$ món tráng miệng. Một suất ăn gồm một món chính, một món canh và một món tráng miệng. Có bao nhiêu suất ăn khác nhau?

::hint
**Kiến thức:** quy tắc nhân cho các bước liên tiếp.

**Gợi ý các bước:**
1. Xác định các bước chọn.
2. Nhân số cách ở mỗi bước.

::solution
Ba bước liên tiếp: món chính ($4$ cách), canh ($3$ cách), tráng miệng ($2$ cách): $4\cdot3\cdot2=24$.

**Đáp số.** $24$ suất ăn.
:::

:::exercise
Đội văn nghệ của lớp có $8$ bạn nam và $6$ bạn nữ. Có bao nhiêu cách chọn (a) một bạn dẫn chương trình; (b) một bạn nam và một bạn nữ để song ca?

::hint
**Kiến thức:** "chọn một bạn nam **hoặc** một bạn nữ" dùng quy tắc cộng; "chọn một nam **và** một nữ" dùng quy tắc nhân.

**Gợi ý các bước:**
1. Với (a), mỗi bạn thuộc đúng một nhóm.
2. Với (b), chọn bạn nam rồi chọn bạn nữ.

::solution
(a) Người dẫn là một bạn nam hoặc một bạn nữ: $8+6=14$. (b) Chọn nam rồi chọn nữ: $8\cdot6=48$.

**Đáp số.** (a) $14$; (b) $48$.
:::

:::exercise
Có bao nhiêu số có ba chữ số mà cả ba chữ số đều chẵn?

::hint
**Kiến thức:** quy tắc nhân; chữ số hàng trăm phải khác $0$.

**Gợi ý các bước:**
1. Hàng trăm chọn trong $2, 4, 6, 8$.
2. Hàng chục và hàng đơn vị chọn trong $0, 2, 4, 6, 8$.

::solution
Hàng trăm có $4$ cách, hàng chục $5$ cách, hàng đơn vị $5$ cách: $4\cdot5\cdot5=100$.

**Đáp số.** $100$.
:::

:::exercise
Một mã sản phẩm gồm một chữ cái (chọn trong $26$ chữ cái) theo sau là bốn chữ số, các chữ số được lặp lại. Có bao nhiêu mã như vậy?

::hint
**Kiến thức:** quy tắc nhân; mỗi chữ số có $10$ cách chọn khi được lặp.

**Gợi ý các bước:**
1. Đếm số cách cho chữ cái.
2. Nhân với số cách cho từng chữ số.

::solution
$26\cdot10\cdot10\cdot10\cdot10=260\,000$.

**Đáp số.** $260\,000$ mã.
:::

:::exercise
Có bao nhiêu số có bốn chữ số khác nhau chia hết cho $5$?

::hint
**Kiến thức:** số chia hết cho $5$ có chữ số tận cùng là $0$ hoặc $5$; chia trường hợp rồi dùng quy tắc cộng.

**Gợi ý các bước:**
1. Trường hợp tận cùng là $0$: chọn ba chữ số còn lại.
2. Trường hợp tận cùng là $5$: chữ số đầu khác $0$ và khác $5$.
3. Cộng hai trường hợp.

::solution
Tận cùng $0$: chữ số nghìn $9$ cách, trăm $8$ cách, chục $7$ cách, được $9\cdot8\cdot7=504$. Tận cùng $5$: chữ số nghìn khác $0$, khác $5$ nên $8$ cách, trăm $8$ cách, chục $7$ cách, được $8\cdot8\cdot7=448$. Tổng: $504+448=952$.

**Đáp số.** $952$.
:::

:::exercise
Từ $A$ đến $B$ có $2$ con đường, từ $B$ đến $C$ có $3$ con đường. Bạn Minh đi từ $A$ đến $C$ (qua $B$) rồi quay về $A$ (qua $B$), và đường về không đi lại con đường nào đã đi lúc đi. Có bao nhiêu cách đi như vậy?

::hint
**Kiến thức:** quy tắc nhân cho bốn chặng liên tiếp; mỗi chặng về bị bớt một lựa chọn.

**Gợi ý các bước:**
1. Đếm số cách đi từ $A$ đến $C$.
2. Chặng $C\to B$ lúc về: bỏ con đường đã đi.
3. Chặng $B\to A$ lúc về: bỏ con đường đã đi.

::solution
Lúc đi: $2\cdot3=6$ cách. Lúc về: $C\to B$ còn $3-1=2$ cách, $B\to A$ còn $2-1=1$ cách. Tổng: $6\cdot2\cdot1=12$.

**Đáp số.** $12$ cách.
:::

:::exercise
Từ các chữ số $1, 2, 3, 4, 5$ lập các số có ba chữ số. Mỗi khẳng định sau đúng hay sai?

a) Lập được $125$ số (các chữ số có thể lặp lại).
b) Lập được $60$ số có ba chữ số khác nhau.
c) Lập được $30$ số chẵn có ba chữ số khác nhau.
d) Có $61$ số (các chữ số có thể lặp lại) có ít nhất hai chữ số giống nhau.

::hint
**Kiến thức:** quy tắc nhân; số chẵn có chữ số tận cùng chẵn; đếm phần bù.

**Gợi ý các bước:**
1. Đếm khi được lặp và khi các chữ số khác nhau.
2. Với c), chọn chữ số hàng đơn vị trước.
3. Với d), lấy tất cả trừ đi số có ba chữ số khác nhau.

::solution
a) **Đúng.** $5\cdot5\cdot5=125$.

b) **Đúng.** $5\cdot4\cdot3=60$.

c) **Sai.** Hàng đơn vị là $2$ hoặc $4$ ($2$ cách), hàng trăm $4$ cách, hàng chục $3$ cách: $2\cdot4\cdot3=24$.

d) **Sai.** Phần bù của "có ít nhất hai chữ số giống nhau" là "ba chữ số khác nhau", nên số cần tìm là $125-60=65$.

**Đáp số.** a) Đúng; b) Đúng; c) Sai; d) Sai.
:::

:::exercise
Số $720$ có bao nhiêu ước nguyên dương?

::hint
**Kiến thức:** nếu $n=2^a\cdot3^b\cdot5^c$ thì mỗi ước của $n$ có dạng $2^x3^y5^z$ với $0\le x\le a$, $0\le y\le b$, $0\le z\le c$.

**Gợi ý các bước:**
1. Phân tích $720$ ra thừa số nguyên tố.
2. Đếm số cách chọn từng số mũ rồi nhân.

::solution
$720=2^4\cdot3^2\cdot5$. Số mũ của $2$ có $5$ cách ($0$ đến $4$), của $3$ có $3$ cách, của $5$ có $2$ cách: $5\cdot3\cdot2=30$.

**Đáp số.** $30$.
:::

:::exercise
(Ôn tập bài [Tập hợp và các phép toán trên tập hợp](lesson:sets-and-set-operations)) Có bao nhiêu số tự nhiên từ $1$ đến $100$ chia hết cho $2$ hoặc chia hết cho $3$?

::hint
**Kiến thức:** $n(A\cup B)=n(A)+n(B)-n(A\cap B)$; số chia hết cho cả $2$ và $3$ là số chia hết cho $6$.

**Gợi ý các bước:**
1. Gọi $A$, $B$ là tập các số chia hết cho $2$, cho $3$. Đếm $n(A)$, $n(B)$.
2. Đếm $n(A\cap B)$.
3. Áp dụng công thức.

::solution
$n(A)=50$, $n(B)=33$ (vì $3\cdot33=99$), $n(A\cap B)=16$ (vì $6\cdot16=96$). Vậy $n(A\cup B)=50+33-16=67$.

**Đáp số.** $67$.
:::

:::exercise Thử thách
Có bao nhiêu số có ba chữ số mà tổng các chữ số bằng $5$?

::hint
**Kiến thức:** chia trường hợp theo chữ số hàng trăm rồi dùng quy tắc cộng.

**Gợi ý các bước:**
1. Hàng trăm $a$ nhận giá trị từ $1$ đến $5$.
2. Với mỗi $a$, đếm số cặp (hàng chục, hàng đơn vị) có tổng $5-a$.
3. Cộng các trường hợp.

::solution
Nếu hai chữ số cuối có tổng $s$ thì chữ số hàng chục nhận $0, 1, \dots, s$, tức $s+1$ cách. Với $a=1, 2, 3, 4, 5$ ta có $s=4, 3, 2, 1, 0$, nên
$$5+4+3+2+1=15.$$

**Đáp số.** $15$.
:::

## Kiểm tra mini

:::quiz
::mc
Một hộp có $6$ chiếc bút xanh và $4$ chiếc bút đỏ, các chiếc bút đều khác nhau. Số cách lấy ra một chiếc bút từ hộp là
A. $10$.
B. $24$.
C. $45$.
D. $6$.
::key A
Lấy một chiếc bút xanh **hoặc** một chiếc bút đỏ, hai nhóm không có chiếc chung, nên dùng quy tắc cộng: $6+4=10$. Phương án B nhân nhầm (đó là số cách lấy một bút xanh **và** một bút đỏ).

::mc
Một chiếc khoá số có $3$ vòng, mỗi vòng có các chữ số từ $0$ đến $9$. Có bao nhiêu mã mở khoá khác nhau?
A. $30$.
B. $720$.
C. $900$.
D. $1000$.
::key D
Chọn lần lượt chữ số cho từng vòng, mỗi vòng $10$ cách (được lặp lại, được bắt đầu bằng $0$): $10\cdot10\cdot10=1000$. Phương án B đòi các chữ số khác nhau, C bỏ nhầm các mã bắt đầu bằng $0$.

::mc
Từ các chữ số $1, 2, 3, 4, 5, 6$ lập được bao nhiêu số lẻ có ba chữ số khác nhau?
A. $60$.
B. $120$.
C. $108$.
D. $216$.
::key A
Chọn chữ số hàng đơn vị trước (là $1$, $3$ hoặc $5$): $3$ cách; hàng trăm $5$ cách; hàng chục $4$ cách: $3\cdot5\cdot4=60$. Phương án B quên điều kiện lẻ, C cho phép các chữ số lặp lại.

::mc
Từ thành phố $A$ đến $B$ có $3$ con đường, từ $B$ đến $C$ có $4$ con đường, và có $2$ con đường đi thẳng từ $A$ đến $C$. Số cách đi từ $A$ đến $C$ là
A. $9$.
B. $24$.
C. $12$.
D. $14$.
::key D
Đi qua $B$ gồm hai bước liên tiếp: $3\cdot4=12$ cách; đi thẳng: $2$ cách. Hai phương án không trùng nhau nên cộng lại: $12+2=14$. Phương án C quên các đường đi thẳng.

::tf
Một tổ có $7$ bạn nam và $5$ bạn nữ.
a) Có $12$ cách chọn một bạn làm tổ trưởng.
b) Có $12$ cách chọn một bạn nam và một bạn nữ để song ca.
c) Có $144$ cách chọn một tổ trưởng và một tổ phó (hai bạn khác nhau).
d) Có $90$ cách chọn một tổ trưởng và một tổ phó sao cho có ít nhất một bạn nữ.
::key Đ S S Đ
a) Đúng: $7+5=12$. b) Sai: chọn nam **rồi** chọn nữ, $7\cdot5=35$. c) Sai: tổ trưởng $12$ cách, tổ phó còn $11$ cách: $132$. d) Đúng: trừ đi các cách mà cả hai đều là nam, $132-7\cdot6=90$.

::sa
Từ các chữ số $0, 1, 2, 3, 4$ lập được bao nhiêu số có ba chữ số khác nhau?
::key 48
Hàng trăm khác $0$: $4$ cách; hàng chục: $4$ cách; hàng đơn vị: $3$ cách. Vậy có $4\cdot4\cdot3=48$ số.

::sa
Có bao nhiêu số có bốn chữ số mà trong đó có ít nhất một chữ số $0$?
::key 2439
Có tất cả $9\cdot10^3=9000$ số có bốn chữ số. Số không có chữ số $0$ nào là $9^4=6561$. Vậy có $9000-6561=2439$ số.
:::
