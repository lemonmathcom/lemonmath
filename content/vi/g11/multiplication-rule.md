---
title: Công thức nhân xác suất cho hai biến cố độc lập
description: Nhận biết hai biến cố độc lập và dùng công thức nhân để tính xác suất của giao, biến cố đối và các tình huống kết hợp.
minutes: 16
---

:::goals
- Nhận biết hai biến cố độc lập từ cách tiến hành phép thử hoặc từ các xác suất đã biết.
- Dùng công thức $P(A\cap B)=P(A)P(B)$ cho hai biến cố độc lập.
- Kết hợp công thức nhân với biến cố đối và công thức cộng xác suất.
- Phân biệt hai biến cố độc lập với hai biến cố xung khắc.
:::

Trong một trò chơi ở ngày hội trường, bạn gieo một con xúc xắc cân đối và tung một đồng xu cân đối. Bạn nhận quà nếu xúc xắc xuất hiện số chẵn **và** đồng xu xuất hiện mặt ngửa. Xác suất nhận quà là bao nhiêu: ta cộng hay nhân hai xác suất?

Kết quả của dụng cụ này không ảnh hưởng đến dụng cụ kia. Đó là dấu hiệu của hai biến cố độc lập.

## Nhận biết hai biến cố độc lập

### Khám phá: xúc xắc và đồng xu

Mỗi kết quả của phép thử là một cặp gồm số chấm của xúc xắc và mặt của đồng xu. Có $6\cdot2=12$ kết quả đồng khả năng:

| Mặt đồng xu | Số chấm có thể đi kèm | Số kết quả |
|---|---|---|
| Ngửa | $1,2,3,4,5,6$ | $6$ |
| Sấp | $1,2,3,4,5,6$ | $6$ |

Gọi $A$ là biến cố “xúc xắc xuất hiện số chẵn” và $B$ là biến cố “đồng xu xuất hiện mặt ngửa”. Trong $12$ kết quả, có $6$ kết quả thuộc $A$, $6$ kết quả thuộc $B$ và $3$ kết quả thuộc $A\cap B$. Do đó

$$P(A)=\frac{6}{12}=\frac12,\qquad P(B)=\frac{6}{12}=\frac12,\qquad P(A\cap B)=\frac{3}{12}=\frac14.$$

Trong $6$ kết quả thuộc $A$, một nửa vẫn thuộc $B$. Vì vậy $A$ không làm thay đổi khả năng xảy ra của $B$; đổi vai trò $A$, $B$ cũng vậy.

:::definition Hai biến cố độc lập
Hai biến cố $A$ và $B$ gọi là **độc lập** nếu việc xảy ra hay không xảy ra của biến cố này không làm thay đổi khả năng xảy ra của biến cố kia.
:::

## Công thức nhân xác suất

Trong khám phá trên, $\dfrac14=\dfrac12\cdot\dfrac12$. Đây là trường hợp đầu tiên của công thức tổng quát.

:::theorem Công thức nhân cho hai biến cố độc lập
Hai biến cố $A$ và $B$ độc lập khi và chỉ khi

$$P(A\cap B)=P(A)P(B).$$

Vì thế, nếu đã biết $A$ và $B$ độc lập, xác suất để **cả hai** cùng xảy ra bằng tích hai xác suất. Ngược lại, khi biết ba xác suất, đẳng thức trên là tiêu chí kiểm tra tính độc lập.
:::

Vì sao có phép nhân? Trong mô hình hai giai đoạn độc lập, tỉ lệ thuận lợi ở mỗi giai đoạn lần lượt là $P(A)$, $P(B)$. Vì tỉ lệ thứ hai không đổi theo kết quả đầu, tỉ lệ thuận lợi cho cả hai là $P(A)P(B)$.

:::example Gieo xúc xắc và tung đồng xu
Gieo một con xúc xắc cân đối và tung một đồng xu cân đối. Tính xác suất để xúc xắc xuất hiện số lớn hơn $4$ và đồng xu xuất hiện mặt sấp.

**Lời giải.** Gọi $A$ là biến cố “số chấm lớn hơn $4$”, $B$ là biến cố “mặt sấp”. Hai biến cố độc lập vì kết quả của xúc xắc không ảnh hưởng đến đồng xu:

$$P(A)=\frac26=\frac13,\qquad P(B)=\frac12.$$

Dùng công thức nhân:

$$P(A\cap B)=P(A)P(B)=\frac13\cdot\frac12=\frac16.$$

Vậy xác suất cần tìm là $\dfrac16$.
:::

Khi lặp lại một thao tác, ta cần xem điều kiện của lần sau có được giữ nguyên hay không.

:::example Có hoàn lại và không hoàn lại
Một hộp có $3$ thẻ đỏ và $2$ thẻ xanh, các thẻ được phân biệt. Rút ngẫu nhiên hai lần. Gọi $A$ là biến cố “lần đầu rút được thẻ đỏ”, $B$ là biến cố “lần hai rút được thẻ đỏ”. Xét tính độc lập của $A$ và $B$ trong hai cách: hoàn lại thẻ sau lần đầu, và không hoàn lại.

**Lời giải.** Nếu hoàn lại, mỗi lần hộp đều có $3$ thẻ đỏ trong $5$ thẻ. Có $5\cdot5=25$ cặp thẻ đồng khả năng, trong đó có $3\cdot3=9$ cặp đỏ–đỏ:

$$P(A)=P(B)=\frac35,\qquad P(A\cap B)=\frac9{25}=\frac35\cdot\frac35.$$

Vậy $A$ và $B$ độc lập khi có hoàn lại.

Nếu không hoàn lại, có $5\cdot4=20$ cặp thẻ khác nhau có thứ tự, trong đó có $3\cdot2=6$ cặp đỏ–đỏ. Mỗi vị trí vẫn có xác suất nhận thẻ đỏ bằng $\dfrac35$, nhưng

$$P(A\cap B)=\frac6{20}=\frac3{10}\ne\frac35\cdot\frac35=\frac9{25}.$$

Vậy $A$ và $B$ không độc lập khi không hoàn lại.
:::

Không được dùng công thức nhân chỉ vì đề bài có từ “và”: trước hết phải xét tính độc lập.

## Kết hợp với biến cố đối và công thức cộng

Nếu $A$ và $B$ độc lập thì $A$ cũng độc lập với $\overline B$. Thật vậy, $A\cap B$ và $A\cap\overline B$ xung khắc, hợp của chúng là $A$, nên

$$\begin{aligned}
P(A\cap\overline B)
&=P(A)-P(A\cap B)\\
&=P(A)-P(A)P(B)\\
&=P(A)\bigl(1-P(B)\bigr)\\
&=P(A)P(\overline B).
\end{aligned}$$

Tương tự, các cặp $\overline A$ và $B$, $\overline A$ và $\overline B$ cũng độc lập. Ta có thể kết hợp công thức nhân và công thức cộng để xử lí “ít nhất một” hoặc “đúng một”.

:::example Ít nhất một linh kiện lỗi
Hai linh kiện hoạt động độc lập. Xác suất linh kiện thứ nhất đạt chuẩn là $0{,}96$ và xác suất linh kiện thứ hai đạt chuẩn là $0{,}95$. Tính xác suất cả hai đều đạt chuẩn và xác suất có ít nhất một linh kiện lỗi.

**Lời giải.** Gọi $A$, $B$ lần lượt là biến cố linh kiện thứ nhất, thứ hai đạt chuẩn. Do $A$ và $B$ độc lập:

$$P(A\cap B)=0{,}96\cdot0{,}95=0{,}912.$$

Biến cố “có ít nhất một linh kiện lỗi” là biến cố đối của “cả hai đều đạt chuẩn”. Vì vậy

$$P(\text{ít nhất một linh kiện lỗi})=1-0{,}912=0{,}088.$$

Vậy hai xác suất lần lượt là $0{,}912$ và $0{,}088$, tức $91{,}2\%$ và $8{,}8\%$.
:::

“Đúng một” gồm hai trường hợp xung khắc: lần thứ nhất thành công còn lần thứ hai thất bại, hoặc ngược lại.

:::example Đúng một lần ném trúng
Một vận động viên thực hiện hai quả ném độc lập. Xác suất ném trúng ở quả thứ nhất là $0{,}7$, ở quả thứ hai là $0{,}8$. Tính xác suất vận động viên ném trúng đúng một quả.

**Lời giải.** Gọi $A$, $B$ là biến cố ném trúng ở quả thứ nhất, thứ hai. Hai trường hợp $A\cap\overline B$ và $\overline A\cap B$ xung khắc, nên ta cộng xác suất của chúng:

$$\begin{aligned}
P\bigl((A\cap\overline B)\cup(\overline A\cap B)\bigr)
&=0{,}7\cdot0{,}2+0{,}3\cdot0{,}8\\
&=0{,}14+0{,}24=0{,}38.
\end{aligned}$$

Vậy xác suất ném trúng đúng một quả là $0{,}38$.
:::

Công thức nhân còn cho phép tìm một xác suất chưa biết khi xác suất của giao đã được cho.

:::example Tìm xác suất còn thiếu
Một ứng dụng có hai bước kiểm tra độc lập $A$ và $B$. Xác suất vượt qua bước $A$ là $0{,}8$, còn xác suất vượt qua cả hai bước là $0{,}52$. Tính xác suất vượt qua bước $B$ và xác suất không vượt qua bước nào.

**Lời giải.** Vì $A$ và $B$ độc lập và $P(A)>0$, ta chia công thức nhân cho $P(A)$:

$$P(B)=\frac{P(A\cap B)}{P(A)}=\frac{0{,}52}{0{,}8}=0{,}65.$$

Hai biến cố đối cũng độc lập. Do đó

$$P(\overline A\cap\overline B)=(1-0{,}8)(1-0{,}65)=0{,}2\cdot0{,}35=0{,}07.$$

Vậy xác suất vượt qua bước $B$ là $0{,}65$; xác suất không vượt qua bước nào là $0{,}07$.
:::

:::warning Những sai lầm thường gặp
- **Thấy từ “và” là nhân.** Công thức $P(A\cap B)=P(A)P(B)$ chỉ dùng khi $A$, $B$ độc lập. Hãy kiểm tra điều kiện của phép thử hoặc đẳng thức xác suất.
- **Nhân để tính “ít nhất một”.** Tích là xác suất cả hai cùng xảy ra. Xác suất ít nhất một thường bằng $1-P(\overline A\cap\overline B)$.
- **Coi xung khắc là độc lập.** Nếu $P(A)>0$, $P(B)>0$ và $A$, $B$ xung khắc thì $P(A\cap B)=0$ nhưng $P(A)P(B)>0$; chúng không độc lập.
- **Mặc nhiên coi hai lần rút là độc lập.** Nếu không hoàn lại, lần đầu làm thay đổi thành phần của hộp, nên hai lần rút không độc lập.
:::

## Thuật ngữ

:::terms
- phép thử ngẫu nhiên | random experiment
- biến cố | event
- biến cố giao | intersection of events
- biến cố hợp | union of events
- biến cố đối | complementary event
- biến cố xung khắc | mutually exclusive events
- biến cố độc lập | independent events
- công thức nhân xác suất | multiplication rule for probabilities
:::

## Tóm tắt

- $A$ và $B$ độc lập khi việc xảy ra hay không xảy ra của biến cố này không làm thay đổi khả năng xảy ra của biến cố kia.
- Tiêu chí và công thức nhân: $A$, $B$ độc lập $\Leftrightarrow P(A\cap B)=P(A)P(B)$.
- Nếu $A$, $B$ độc lập thì các cặp có thay $A$ hoặc $B$ bằng biến cố đối của nó cũng độc lập.
- “Ít nhất một” thường tính bằng $1-P(\overline A\cap\overline B)$; “đúng một” là hợp của $A\cap\overline B$ và $\overline A\cap B$.
- Độc lập không có nghĩa là xung khắc. Hai biến cố có xác suất dương và xung khắc thì không độc lập.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Gieo một con xúc xắc cân đối và tung một đồng xu cân đối. Tính xác suất để số chấm là bội của $3$ và đồng xu xuất hiện mặt sấp.

::hint
**Kiến thức:** kết quả của xúc xắc và đồng xu độc lập, nên xác suất của giao bằng tích hai xác suất.

**Gợi ý các bước:**
1. Tính xác suất số chấm là $3$ hoặc $6$.
2. Nhân với xác suất xuất hiện mặt sấp.

::solution
Xác suất số chấm là bội của $3$ bằng $\dfrac26=\dfrac13$; xác suất mặt sấp bằng $\dfrac12$.

$$P=\frac13\cdot\frac12=\frac16.$$

**Đáp số.** $\dfrac16$.
:::

:::exercise
Hai vòng quay hoạt động độc lập. Xác suất vòng thứ nhất dừng ở ô đỏ là $0{,}4$; xác suất vòng thứ hai dừng ở ô đỏ là $0{,}7$. Tính xác suất a) cả hai cùng dừng ở ô đỏ; b) không vòng nào dừng ở ô đỏ.

::hint
**Kiến thức:** nhân xác suất cho hai biến cố độc lập; xác suất biến cố đối bằng $1-P(A)$.

**Gợi ý các bước:**
1. Với câu a), nhân $0{,}4$ và $0{,}7$.
2. Với câu b), nhân hai xác suất không dừng ở ô đỏ.

::solution
a) $P(\text{cả hai đỏ})=0{,}4\cdot0{,}7=0{,}28$.

b) $P(\text{không vòng nào đỏ})=(1-0{,}4)(1-0{,}7)=0{,}6\cdot0{,}3=0{,}18$.

**Đáp số.** a) $0{,}28$; b) $0{,}18$.
:::

:::exercise
Kiểm tra tính độc lập của $A$ và $B$ trong mỗi trường hợp:

a) $P(A)=0{,}4$, $P(B)=0{,}5$, $P(A\cap B)=0{,}2$;

b) $P(A)=0{,}4$, $P(B)=0{,}5$, $P(A\cap B)=0{,}18$.

::hint
**Kiến thức:** $A$, $B$ độc lập khi và chỉ khi $P(A\cap B)=P(A)P(B)$.

**Gợi ý các bước:**
1. Tính $P(A)P(B)$ trong mỗi trường hợp.
2. So sánh với xác suất của giao.

::solution
Trong cả hai trường hợp, $P(A)P(B)=0{,}4\cdot0{,}5=0{,}2$.

a) $P(A\cap B)=0{,}2$, nên $A$, $B$ độc lập.

b) $P(A\cap B)=0{,}18\ne0{,}2$, nên $A$, $B$ không độc lập.

**Đáp số.** a) Độc lập; b) không độc lập.
:::

:::exercise
Hai bộ phận của một thiết bị hoạt động độc lập. Xác suất bộ phận thứ nhất hoạt động tốt là $0{,}97$, của bộ phận thứ hai là $0{,}94$. Tính xác suất có ít nhất một bộ phận không hoạt động tốt.

::hint
**Kiến thức:** biến cố đối của “ít nhất một bộ phận không tốt” là “cả hai bộ phận đều tốt”.

**Gợi ý các bước:**
1. Nhân hai xác suất hoạt động tốt.
2. Lấy $1$ trừ kết quả.

::solution
Xác suất cả hai bộ phận đều tốt là $0{,}97\cdot0{,}94=0{,}9118$.

Do đó $P(\text{ít nhất một bộ phận không tốt})=1-0{,}9118=0{,}0882$.

**Đáp số.** $0{,}0882$.
:::

:::exercise
Một cầu thủ thực hiện hai cú sút độc lập. Xác suất ghi bàn ở cú thứ nhất là $0{,}75$, ở cú thứ hai là $0{,}6$. Tính xác suất cầu thủ ghi đúng một bàn.

::hint
**Kiến thức:** “đúng một” gồm hai trường hợp xung khắc: ghi bàn rồi không ghi, hoặc không ghi rồi ghi bàn.

**Gợi ý các bước:**
1. Tính xác suất từng trường hợp bằng công thức nhân.
2. Cộng hai kết quả.

::solution
Hai trường hợp có xác suất lần lượt là $0{,}75\cdot0{,}4=0{,}3$ và $0{,}25\cdot0{,}6=0{,}15$.

$$P(\text{đúng một bàn})=0{,}3+0{,}15=0{,}45.$$

**Đáp số.** $0{,}45$.
:::

:::exercise
Cho hai biến cố độc lập $A$, $B$ với $P(A)=0{,}3$ và $P(B)=0{,}8$. Mỗi khẳng định sau đúng hay sai?

a) $P(A\cap B)=0{,}24$.

b) $P(\overline A\cap B)=0{,}56$.

c) $P(A\cup B)=0{,}86$.

d) $A$ và $B$ là hai biến cố xung khắc.

::hint
**Kiến thức:** dùng công thức nhân cho giao và công thức cộng $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.

**Gợi ý các bước:**
1. Tính $P(A\cap B)$ và $P(\overline A\cap B)$.
2. Dùng công thức cộng cho hợp.
3. So sánh $P(A\cap B)$ với $0$ để xét xung khắc.

::solution
a) **Đúng:** $P(A\cap B)=0{,}3\cdot0{,}8=0{,}24$.

b) **Đúng:** $P(\overline A\cap B)=0{,}7\cdot0{,}8=0{,}56$.

c) **Đúng:** $P(A\cup B)=0{,}3+0{,}8-0{,}24=0{,}86$.

d) **Sai:** $P(A\cap B)=0{,}24>0$, nên hai biến cố không xung khắc.

**Đáp số.** a) Đúng; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Hai chuyến giao hàng độc lập có xác suất đến đúng giờ lần lượt là $0{,}92$ và $0{,}85$. Xác suất có đúng một chuyến đến muộn là bao nhiêu phần trăm? Làm tròn đến hàng phần mười.

::hint
**Kiến thức:** “đúng một chuyến muộn” gồm: chuyến đầu đúng giờ, chuyến sau muộn; hoặc chuyến đầu muộn, chuyến sau đúng giờ.

**Gợi ý các bước:**
1. Tính xác suất đến muộn của từng chuyến.
2. Tính và cộng xác suất hai trường hợp xung khắc.
3. Đổi sang phần trăm và làm tròn.

::solution
Xác suất đúng một chuyến đến muộn là

$$0{,}92\cdot0{,}15+0{,}08\cdot0{,}85=0{,}138+0{,}068=0{,}206.$$

Đổi sang phần trăm: $0{,}206=20{,}6\%$.

**Đáp số.** $20{,}6\%$.
:::

:::exercise
Cho $P(A)=0{,}45$, $P(B)=0{,}35$ và $P(A\cap B)=0{,}15$.

a) Tính $P(A\cup B)$.

b) Hai biến cố $A$, $B$ có độc lập không?

::hint
**Kiến thức:** công thức cộng xác suất và tiêu chí độc lập.

**Gợi ý các bước:**
1. Dùng $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.
2. So sánh $P(A\cap B)$ với $P(A)P(B)$.

::solution
a) Theo công thức cộng:

$$P(A\cup B)=0{,}45+0{,}35-0{,}15=0{,}65.$$

b) $P(A)P(B)=0{,}45\cdot0{,}35=0{,}1575\ne0{,}15$, nên $A$, $B$ không độc lập.

**Đáp số.** a) $0{,}65$; b) không độc lập.
:::

:::exercise Thử thách
Một học sinh trả lời hai câu hỏi độc lập. Xác suất trả lời đúng mỗi câu đều bằng $p$. Biết xác suất trả lời đúng ít nhất một câu là $0{,}84$. Tìm $p$.

::hint
**Kiến thức:** biến cố đối của “đúng ít nhất một câu” là “sai cả hai câu”.

**Gợi ý các bước:**
1. Viết xác suất sai mỗi câu là $1-p$.
2. Lập phương trình $1-(1-p)^2=0{,}84$.
3. Dùng $0\le p\le1$ để chọn nghiệm.

::solution
Ta có

$$1-(1-p)^2=0{,}84\iff(1-p)^2=0{,}16.$$

Vì $0\le p\le1$ nên $1-p\ge0$. Do đó $1-p=0{,}4$, suy ra $p=0{,}6$.

**Đáp số.** $0{,}6$.
:::

## Kiểm tra mini

:::quiz
::mc
Cho hai biến cố độc lập $A$, $B$ với $P(A)=0{,}7$ và $P(B)=0{,}4$. Giá trị $P(A\cap B)$ là
A. $0{,}28$.
B. $0{,}42$.
C. $0{,}7$.
D. $1{,}1$.
::key A
Do $A$, $B$ độc lập, $P(A\cap B)=0{,}7\cdot0{,}4=0{,}28$. Phương án B dùng xác suất của $\overline B$, còn D cộng hai xác suất.

::mc
Hai cảm biến hoạt động độc lập với xác suất hoạt động tốt lần lượt là $0{,}98$ và $0{,}95$. Xác suất cả hai cùng hoạt động tốt là
A. $0{,}069$.
B. $0{,}931$.
C. $0{,}001$.
D. $0{,}965$.
::key B
Xác suất cả hai cùng tốt là $0{,}98\cdot0{,}95=0{,}931$. Phương án A là xác suất có ít nhất một cảm biến lỗi, còn C là xác suất cả hai cùng lỗi.

::mc
Biết $P(A)=0{,}5$ và $P(B)=0{,}6$. Nếu $A$, $B$ độc lập thì $P(A\cap B)$ bằng
A. $0{,}1$.
B. $0{,}5$.
C. $0{,}3$.
D. $0{,}6$.
::key C
Tiêu chí độc lập cho $P(A\cap B)=P(A)P(C)=0{,}5\cdot0{,}6=0{,}3$.

::mc
Hai lần thử độc lập có xác suất thành công lần lượt là $0{,}8$ và $0{,}6$. Xác suất có ít nhất một lần thành công là
A. $0{,}48$.
B. $0{,}44$.
C. $0{,}08$.
D. $0{,}92$.
::key D
Xác suất cả hai lần đều thất bại là $0{,}2\cdot0{,}4=0{,}08$, nên xác suất cần tìm là $1-0{,}08=0{,}92$. Phương án A là xác suất cả hai cùng thành công, B là xác suất đúng một lần thành công.

::tf
Cho hai biến cố độc lập $A$, $B$ với $P(A)=0{,}6$ và $P(B)=0{,}25$.
a) $P(A\cap B)=0{,}15$.
b) $P(\overline A\cap B)=0{,}4$.
c) $P(A\cup B)=0{,}7$.
d) $A$ và $B$ xung khắc.
::key Đ S Đ S
a) Đúng vì $0{,}6\cdot0{,}25=0{,}15$. b) Sai vì $P(\overline A\cap B)=0{,}4\cdot0{,}25=0{,}1$. c) Đúng vì $0{,}6+0{,}25-0{,}15=0{,}7$. d) Sai vì $P(A\cap B)>0$.

::sa
Hai máy hoạt động độc lập. Xác suất máy thứ nhất không hỏng là $0{,}98$, máy thứ hai không hỏng là $0{,}97$. Xác suất cả hai máy không hỏng là bao nhiêu phần trăm? Làm tròn đến hàng phần mười.
::key 95,1
Xác suất cả hai máy không hỏng là $0{,}98\cdot0{,}97=0{,}9506=95{,}06\%$, làm tròn được $95{,}1\%$.

::sa
Hai lần thử độc lập có cùng xác suất thành công là $p$. Biết xác suất cả hai lần đều thất bại là $0{,}09$. Tìm $p$.
::key 0,7
Ta có $(1-p)^2=0{,}09$ và $1-p\ge0$, nên $1-p=0{,}3$ và $p=0{,}7$.
:::
