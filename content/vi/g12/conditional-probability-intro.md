---
title: Xác suất có điều kiện
description: Tính xác suất của một biến cố khi biết một biến cố khác đã xảy ra, dùng bảng hai chiều, sơ đồ cây, công thức nhân và nhận biết hai biến cố độc lập.
minutes: 18
---

:::goals
- Hiểu và tính xác suất có điều kiện $P(A\mid B)$ bằng công thức và bằng cách đếm.
- Đọc xác suất có điều kiện từ bảng hai chiều và sơ đồ cây.
- Dùng công thức nhân $P(A\cap B)=P(B)\cdot P(A\mid B)$.
- Nhận biết hai biến cố độc lập qua đẳng thức $P(A\mid B)=P(A)$.
:::

Một trường khảo sát $200$ học sinh lớp 12 về việc tham gia câu lạc bộ thể thao:

| | Có tham gia | Không tham gia | Tổng |
|---|---|---|---|
| Nam | $60$ | $40$ | $100$ |
| Nữ | $30$ | $70$ | $100$ |
| Tổng | $90$ | $110$ | $200$ |

Chọn ngẫu nhiên một học sinh. Xác suất bạn đó tham gia câu lạc bộ là $\dfrac{90}{200}=0{,}45$. Nhưng nếu ta **biết thêm** bạn được chọn là nữ, thì xác suất bạn ấy tham gia câu lạc bộ là bao nhiêu?

## Xác suất có điều kiện

### Khám phá: thu hẹp không gian mẫu

Khi đã biết bạn được chọn là nữ, ta chỉ còn xét $100$ bạn nữ ở hàng thứ hai. Trong đó có $30$ bạn tham gia, nên xác suất cần tìm là

$$\frac{30}{100}=0{,}3.$$

Con số này khác $0{,}45$: thông tin "là nữ" đã làm thay đổi xác suất. Ta cũng có thể viết nó bằng các xác suất trên toàn bộ $200$ học sinh:

$$\frac{30}{100}=\frac{30/200}{100/200}=\frac{P(\text{nữ và tham gia})}{P(\text{nữ})}=\frac{0{,}15}{0{,}5}=0{,}3.$$

:::definition Xác suất có điều kiện
Cho hai biến cố $A$ và $B$ với $P(B)>0$. Xác suất của $A$ **với điều kiện** $B$ đã xảy ra, kí hiệu $P(A\mid B)$, là
$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}.$$
Khi các kết quả đồng khả năng, ta có thể đếm: $P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}$.
:::

**Vì sao như vậy?** Biết $B$ đã xảy ra nghĩa là chỉ những kết quả trong $B$ còn có thể xảy ra, nên $B$ đóng vai trò không gian mẫu mới. Trong đó, các kết quả làm $A$ xảy ra chính là $A\cap B$. Chia cho $P(B)$ để tổng xác suất trong "không gian mới" bằng $1$.

Từ định nghĩa ta có $P(\overline{A}\mid B)=1-P(A\mid B)$, giống như với xác suất thông thường.

:::example Gieo hai con xúc xắc
Gieo hai con xúc xắc cân đối. Biết tổng số chấm bằng $8$, tính xác suất có ít nhất một con xuất hiện mặt $6$ chấm.

**Lời giải.** Gọi $B$: "tổng bằng $8$", $A$: "có ít nhất một mặt $6$". Ta liệt kê $B$ rồi đếm những kết quả của $B$ có mặt $6$:

$$B=\{(2; 6), (3; 5), (4; 4), (5; 3), (6; 2)\},\qquad A\cap B=\{(2; 6), (6; 2)\}.$$

Vậy $P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}=\dfrac25$.
:::

Thứ tự hai biến cố trong $P(A\mid B)$ rất quan trọng, như ví dụ sau cho thấy.

:::example Đổi chỗ hai biến cố
Với bảng khảo sát ở đầu bài, chọn ngẫu nhiên một học sinh. Gọi $T$: "tham gia câu lạc bộ", $N$: "là nữ". Tính $P(T\mid N)$ và $P(N\mid T)$.

**Lời giải.** $P(T\mid N)$ chỉ xét hàng "Nữ"; $P(N\mid T)$ chỉ xét cột "Có tham gia":

$$P(T\mid N)=\frac{30}{100}=\frac{3}{10},\qquad P(N\mid T)=\frac{30}{90}=\frac13.$$

Hai số khác nhau: $P(T\mid N)$ trả lời "trong các bạn nữ, bao nhiêu phần tham gia", còn $P(N\mid T)$ trả lời "trong các bạn tham gia, bao nhiêu phần là nữ".
:::

## Công thức nhân và sơ đồ cây

Nhân hai vế của định nghĩa với $P(B)$, ta được một công thức để tính xác suất của giao.

:::theorem Công thức nhân xác suất
Với hai biến cố $A$, $B$ có xác suất dương:
$$P(A\cap B)=P(B)\cdot P(A\mid B)=P(A)\cdot P(B\mid A).$$
:::

Công thức này đặc biệt có ích khi một phép thử diễn ra theo **từng bước**. Trên sơ đồ cây, mỗi nhánh ghi xác suất có điều kiện của bước đó, và xác suất của một đường đi bằng tích các số trên đường đi.

:::example Lấy bi không hoàn lại
Một hộp có $5$ viên bi đỏ và $3$ viên bi xanh. Lấy lần lượt hai viên, không hoàn lại. Tính xác suất cả hai viên đều đỏ, và xác suất viên thứ hai đỏ biết viên thứ nhất xanh.

**Lời giải.** Gọi $D_1$, $D_2$: "viên thứ nhất, thứ hai màu đỏ". Lần đầu có $5$ đỏ trong $8$ viên. Nếu lần đầu đã lấy một viên đỏ thì còn $4$ đỏ trong $7$ viên:

$$P(D_1\cap D_2)=P(D_1)\cdot P(D_2\mid D_1)=\frac58\cdot\frac47=\frac{20}{56}=\frac{5}{14}.$$

Nếu lần đầu lấy viên xanh thì hộp còn $5$ đỏ, $2$ xanh, nên $P(D_2\mid \overline{D_1})=\dfrac57$.
:::

:::diagram Sơ đồ cây lấy hai viên bi không hoàn lại
alt: Sơ đồ cây hai tầng; tầng một tách thành đỏ với xác suất 5/8 và xanh với xác suất 3/8, mỗi nhánh lại tách thành đỏ và xanh với xác suất có điều kiện; bốn đầu mút ghi xác suất 20/56, 15/56, 15/56 và 6/56
point S 0,0 left "Bắt đầu"
point R 3,2 above "Đỏ"
point X 3,-2 below "Xanh"
point RR 6,3 right "Đỏ: 20/56"
point RX 6,1 right "Xanh: 15/56"
point XR 6,-1 right "Đỏ: 15/56"
point XX 6,-3 right "Xanh: 6/56"
segment S R
segment S X
segment R RR
segment R RX
segment X XR
segment X XX
label 1.2,1.5 "5/8"
label 1.2,-1.5 "3/8"
label 4.4,3 "4/7"
label 4.4,1.1 "3/7"
label 4.4,-1.1 "5/7"
label 4.4,-3 "2/7"
:::

Tổng bốn số ở đầu mút là $\dfrac{20+15+15+6}{56}=1$, một cách kiểm tra nhanh.

:::example Thi hai vòng
Xác suất một học sinh vượt qua vòng 1 của một cuộc thi là $0{,}6$. Nếu đã vượt qua vòng 1 thì xác suất bạn ấy vượt qua vòng 2 là $0{,}5$. Tính xác suất học sinh đó vượt qua cả hai vòng.

**Lời giải.** Gọi $V_1$, $V_2$ là các biến cố vượt qua vòng 1, vòng 2. Muốn vào vòng 2 thì phải qua vòng 1, nên dùng công thức nhân:

$$P(V_1\cap V_2)=P(V_1)\cdot P(V_2\mid V_1)=0{,}6\cdot0{,}5=0{,}3.$$

Vậy xác suất vượt qua cả hai vòng là $0{,}3$.
:::

## Biến cố độc lập

Ở lớp 11, hai biến cố gọi là độc lập khi việc xảy ra hay không của biến cố này không ảnh hưởng đến xác suất của biến cố kia. Với xác suất có điều kiện, ta viết điều đó thành công thức: khi $P(B)>0$,

$$A \text{ và } B \text{ độc lập}\iff P(A\mid B)=P(A)\iff P(A\cap B)=P(A)\cdot P(B).$$

Đẳng thức thứ hai suy ra từ công thức nhân. Trong ví dụ lấy bi không hoàn lại, $P(D_2\mid D_1)=\dfrac47$ còn $P(D_2\mid\overline{D_1})=\dfrac57$, nên $D_1$ và $D_2$ **không** độc lập.

:::example Kiểm tra tính độc lập
Gieo một con xúc xắc. Gọi $A$: "mặt chẵn", $B$: "số chấm không vượt quá $4$", $C$: "số chấm ít nhất là $4$". Hỏi $A$ và $B$ có độc lập không? $A$ và $C$ thì sao?

**Lời giải.** Ta có $P(A)=\dfrac36=\dfrac12$. Trong $B=\{1; 2; 3; 4\}$ có hai mặt chẵn; trong $C=\{4; 5; 6\}$ cũng có hai mặt chẵn:

$$P(A\mid B)=\frac24=\frac12=P(A),\qquad P(A\mid C)=\frac23\neq P(A).$$

Vậy $A$ và $B$ độc lập, còn $A$ và $C$ không độc lập.
:::

Ví dụ cuối là một tình huống y tế, nơi nhầm lẫn giữa $P(A\mid B)$ và $P(B\mid A)$ có thể gây hiểu lầm nghiêm trọng.

:::example Kết quả xét nghiệm
Một đợt xét nghiệm sàng lọc $1000$ người cho kết quả sau:

| | Mắc bệnh | Không mắc bệnh | Tổng |
|---|---|---|---|
| Dương tính | $45$ | $95$ | $140$ |
| Âm tính | $5$ | $855$ | $860$ |
| Tổng | $50$ | $950$ | $1000$ |

Chọn ngẫu nhiên một người. Tính xác suất người đó dương tính biết người đó mắc bệnh, và xác suất người đó mắc bệnh biết người đó dương tính.

**Lời giải.** Câu hỏi thứ nhất chỉ xét cột "Mắc bệnh", câu hỏi thứ hai chỉ xét hàng "Dương tính":

$$P(\text{dương tính}\mid\text{bệnh})=\frac{45}{50}=0{,}9,\qquad P(\text{bệnh}\mid\text{dương tính})=\frac{45}{140}=\frac{9}{28}\approx0{,}32.$$

Xét nghiệm phát hiện $90\%$ người bệnh, nhưng trong số người dương tính chỉ khoảng $32\%$ thực sự mắc bệnh, vì số người khoẻ rất đông nên $95$ ca dương tính giả nhiều hơn $45$ ca thật. Bài sau sẽ giải thích hiện tượng này bằng công thức Bayes.
:::

:::warning Những sai lầm thường gặp
- **Nhầm $P(A\mid B)$ với $P(B\mid A)$.** Sai: "xét nghiệm đúng với $90\%$ người bệnh, nên người dương tính có $90\%$ khả năng mắc bệnh". Lí do sai: đó là $P(\text{dương}\mid\text{bệnh})$, không phải $P(\text{bệnh}\mid\text{dương})$. Đúng: $P(\text{bệnh}\mid\text{dương})=\dfrac{45}{140}\approx0{,}32$.
- **Chia cho cả không gian mẫu.** Sai: ở ví dụ xúc xắc, $P(A\mid B)=\dfrac{2}{36}$. Lí do sai: khi đã biết $B$ xảy ra thì chỉ còn $5$ kết quả. Đúng: $\dfrac25$.
- **Chia nhầm mẫu số.** Sai: $P(A\mid B)=\dfrac{P(A\cap B)}{P(A)}$. Lí do sai: điều kiện là $B$, nên chia cho $P(B)$.
- **Nhân như thể độc lập khi không hoàn lại.** Sai: $P(\text{hai viên đỏ})=\dfrac58\cdot\dfrac58=\dfrac{25}{64}$. Lí do sai: lấy viên đầu xong thì hộp đã thay đổi. Đúng: $\dfrac58\cdot\dfrac47=\dfrac5{14}$.
:::

## Thuật ngữ

:::terms
- xác suất có điều kiện | conditional probability
- biến cố giao | intersection of events
- bảng hai chiều | two-way table
- sơ đồ cây | tree diagram
- công thức nhân xác suất | multiplication rule
- biến cố độc lập | independent events
- lấy không hoàn lại | drawing without replacement
- dương tính giả | false positive
:::

## Tóm tắt

- $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ (với $P(B)>0$); đồng khả năng thì $\dfrac{n(A\cap B)}{n(B)}$.
- Biết $B$ xảy ra nghĩa là thu hẹp không gian mẫu về $B$; trên bảng hai chiều, chỉ đọc hàng hoặc cột của $B$.
- $P(A\mid B)$ và $P(B\mid A)$ nói chung khác nhau.
- Công thức nhân: $P(A\cap B)=P(B)\cdot P(A\mid B)$; trên sơ đồ cây, nhân các xác suất dọc một đường đi.
- $A$, $B$ độc lập $\iff P(A\mid B)=P(A)\iff P(A\cap B)=P(A)P(B)$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Gieo một con xúc xắc cân đối. Biết xuất hiện mặt lẻ, tính xác suất số chấm không vượt quá $3$.

::hint
**Kiến thức:** $P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}$ khi các kết quả đồng khả năng.

**Gợi ý các bước:**
1. Liệt kê $B=\{1; 3; 5\}$.
2. Đếm các phần tử của $B$ không vượt quá $3$.

::solution
$A\cap B=\{1; 3\}$, nên $P(A\mid B)=\dfrac23$.

**Đáp số.** $\dfrac23$.
:::

:::exercise
Một lớp có $40$ học sinh: $20$ nam, trong đó $14$ bạn thích môn Toán; $20$ nữ, trong đó $10$ bạn thích môn Toán. Chọn ngẫu nhiên một học sinh. Tính xác suất bạn đó thích Toán biết đó là bạn nữ, và xác suất bạn đó là nam biết bạn thích Toán.

::hint
**Kiến thức:** lập bảng hai chiều; điều kiện nằm ở hàng nào (cột nào) thì chỉ đọc hàng (cột) đó.

**Gợi ý các bước:**
1. Số bạn thích Toán: $14+10=24$.
2. Tính $\dfrac{10}{20}$ và $\dfrac{14}{24}$.

::solution
$P(\text{thích Toán}\mid\text{nữ})=\dfrac{10}{20}=\dfrac12$; $P(\text{nam}\mid\text{thích Toán})=\dfrac{14}{24}=\dfrac{7}{12}$.

**Đáp số.** $\dfrac12$ và $\dfrac7{12}$.
:::

:::exercise
Cho $P(A)=0{,}5$, $P(B)=0{,}4$, $P(A\cap B)=0{,}2$. Tính $P(A\mid B)$, $P(B\mid A)$ và cho biết $A$, $B$ có độc lập không.

::hint
**Kiến thức:** định nghĩa xác suất có điều kiện; độc lập khi $P(A\mid B)=P(A)$.

**Gợi ý các bước:**
1. Chia $P(A\cap B)$ cho $P(B)$, rồi cho $P(A)$.
2. So sánh $P(A\mid B)$ với $P(A)$.

::solution
$P(A\mid B)=\dfrac{0{,}2}{0{,}4}=0{,}5$, $P(B\mid A)=\dfrac{0{,}2}{0{,}5}=0{,}4$. Vì $P(A\mid B)=P(A)$ nên $A$, $B$ độc lập.

**Đáp số.** $0{,}5$; $0{,}4$; độc lập.
:::

:::exercise
Một hộp có $4$ viên bi trắng và $6$ viên bi đen. Lấy lần lượt hai viên không hoàn lại. Tính xác suất cả hai viên đều đen, và xác suất viên thứ hai trắng biết viên thứ nhất đen.

::hint
**Kiến thức:** công thức nhân $P(A\cap B)=P(A)\cdot P(B\mid A)$; sau lần lấy đầu, hộp còn $9$ viên.

**Gợi ý các bước:**
1. $P(\text{đen lần 1})=\dfrac{6}{10}$, $P(\text{đen lần 2}\mid\text{đen lần 1})=\dfrac59$.
2. Nếu lần đầu đen thì còn $4$ trắng trong $9$ viên.

::solution
$P(\text{hai viên đen})=\dfrac{6}{10}\cdot\dfrac59=\dfrac13$. $P(\text{trắng lần 2}\mid\text{đen lần 1})=\dfrac49$.

**Đáp số.** $\dfrac13$ và $\dfrac49$.
:::

:::exercise
Một hộp có $10$ tấm thẻ đánh số từ $1$ đến $10$. Rút ngẫu nhiên một thẻ. Gọi $A$: "số trên thẻ chẵn", $B$: "số trên thẻ lớn hơn hoặc bằng $7$". Mỗi khẳng định sau đúng hay sai?

a) $P(B)=0{,}4$.

b) $P(A\mid B)=\dfrac12$.

c) $P(B\mid A)=\dfrac25$.

d) $A$ và $B$ không độc lập.

::hint
**Kiến thức:** $P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}$; độc lập khi $P(A\mid B)=P(A)$.

**Gợi ý các bước:**
1. Liệt kê $B=\{7; 8; 9; 10\}$ và $A\cap B=\{8; 10\}$.
2. So sánh $P(A\mid B)$ với $P(A)=\dfrac12$.

::solution
a) **Đúng**: $P(B)=\dfrac4{10}=0{,}4$.

b) **Đúng**: $P(A\mid B)=\dfrac24=\dfrac12$.

c) **Đúng**: $A$ có $5$ phần tử, trong đó $8$ và $10$ thuộc $B$, nên $P(B\mid A)=\dfrac25$.

d) **Sai**: $P(A\mid B)=\dfrac12=P(A)$, nên $A$ và $B$ độc lập.

**Đáp số.** a) Đúng; b) Đúng; c) Đúng; d) Sai.
:::

:::exercise
Gieo hai con xúc xắc cân đối. Biết có ít nhất một con xuất hiện mặt $6$ chấm, tính xác suất tổng số chấm ít nhất là $10$ (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** đếm trên không gian mẫu thu hẹp.

**Gợi ý các bước:**
1. Đếm số kết quả có ít nhất một mặt $6$: $36-25=11$.
2. Trong đó đếm các kết quả có tổng $\ge10$.

::solution
Các kết quả có mặt $6$ và tổng $\ge10$: $(4; 6)$, $(6; 4)$, $(5; 6)$, $(6; 5)$, $(6; 6)$. Xác suất là $\dfrac5{11}\approx0{,}4545$.

**Đáp số.** $0{,}45$.
:::

:::exercise
Ở một quán cà phê, $70\%$ khách gọi đồ uống có cà phê và $40\%$ trong số đó gọi thêm bánh. Ngoài ra, $35\%$ tổng số khách có gọi bánh. Tính xác suất một khách gọi cả cà phê và bánh, và xác suất một khách gọi cà phê biết khách đó có gọi bánh.

::hint
**Kiến thức:** "$40\%$ trong số đó" là xác suất có điều kiện $P(\text{bánh}\mid\text{cà phê})=0{,}4$.

**Gợi ý các bước:**
1. Dùng công thức nhân.
2. Chia cho $P(\text{bánh})=0{,}35$.

::solution
$P(\text{cà phê và bánh})=0{,}7\cdot0{,}4=0{,}28$. $P(\text{cà phê}\mid\text{bánh})=\dfrac{0{,}28}{0{,}35}=0{,}8$.

**Đáp số.** $0{,}28$ và $0{,}8$.
:::

:::exercise Ôn tập
Hai xạ thủ bắn độc lập vào một mục tiêu, mỗi người một viên, với xác suất trúng lần lượt $0{,}8$ và $0{,}7$. Biết mục tiêu bị trúng ít nhất một viên, tính xác suất cả hai người đều bắn trúng (làm tròn đến hàng phần trăm).

::hint
**Kiến thức:** quy tắc nhân cho biến cố độc lập (lớp 11) và biến cố đối: $P(\text{ít nhất một})=1-P(\text{không ai trúng})$.

**Gợi ý các bước:**
1. $P(\text{cả hai trúng})=0{,}8\cdot0{,}7$.
2. $P(\text{ít nhất một trúng})=1-0{,}2\cdot0{,}3$; "cả hai trúng" nằm trong "ít nhất một trúng".

::solution
$P(\text{cả hai})=0{,}56$, $P(\text{ít nhất một})=1-0{,}06=0{,}94$. Vì "cả hai trúng" kéo theo "ít nhất một trúng", giao của chúng là "cả hai trúng", nên xác suất cần tìm là $\dfrac{0{,}56}{0{,}94}=\dfrac{28}{47}\approx0{,}596$.

**Đáp số.** $\approx0{,}60$.
:::

:::exercise Ôn tập
Một nhóm có $5$ bạn nam và $4$ bạn nữ. Chọn ngẫu nhiên $3$ bạn. Biết trong $3$ bạn được chọn có ít nhất một bạn nữ, tính xác suất có đúng một bạn nữ.

::hint
**Kiến thức:** đếm bằng tổ hợp (xem [hoán vị, chỉnh hợp và tổ hợp](lesson:permutations-combinations)).

**Gợi ý các bước:**
1. Số cách có ít nhất một nữ: $C_9^3-C_5^3$.
2. Số cách có đúng một nữ: $C_4^1\cdot C_5^2$.

::solution
$C_9^3-C_5^3=84-10=74$ và $C_4^1\cdot C_5^2=4\cdot10=40$. Xác suất là $\dfrac{40}{74}=\dfrac{20}{37}$.

**Đáp số.** $\dfrac{20}{37}$.
:::

:::exercise Thử thách
Gieo một đồng xu cân đối ba lần. Gọi $A$: "lần đầu xuất hiện mặt ngửa", $B$: "có ít nhất hai lần xuất hiện mặt ngửa". Tính $P(A\mid B)$, $P(B\mid A)$ và cho biết $A$, $B$ có độc lập không.

::hint
**Kiến thức:** liệt kê $8$ kết quả đồng khả năng; độc lập khi $P(A\mid B)=P(A)$.

**Gợi ý các bước:**
1. Viết $B$ (kí hiệu N là ngửa, S là sấp): NNS, NSN, SNN, NNN.
2. Đếm $A\cap B$, rồi chia cho $n(B)$ và cho $n(A)=4$.

::solution
$A\cap B=\{\text{NNS}; \text{NSN}; \text{NNN}\}$ có $3$ phần tử. $P(A\mid B)=\dfrac34$ và $P(B\mid A)=\dfrac34$. Vì $P(A)=\dfrac12\neq\dfrac34$, hai biến cố không độc lập: biết lần đầu ngửa thì dễ có ít nhất hai mặt ngửa hơn.

**Đáp số.** $\dfrac34$; $\dfrac34$; không độc lập.
:::

## Kiểm tra mini

:::quiz
::mc
Cho $P(A)=0{,}6$, $P(B)=0{,}5$ và $P(A\cap B)=0{,}2$. Giá trị $P(A\mid B)$ bằng
A. $0{,}3$.
B. $0{,}4$.
C. $\dfrac13$.
D. $0{,}1$.
::key B
$P(A\mid B)=\dfrac{0{,}2}{0{,}5}=0{,}4$. A là $P(A)P(B)$, C chia cho $P(A)$ (đó là $P(B\mid A)$), D nhân $P(A\cap B)$ với $P(B)$.

::mc
Gieo một con xúc xắc cân đối. Biết xuất hiện mặt chẵn, xác suất xuất hiện mặt $6$ chấm là
A. $\dfrac16$.
B. $\dfrac12$.
C. $\dfrac13$.
D. $\dfrac1{12}$.
::key C
Không gian mẫu thu hẹp còn $\{2; 4; 6\}$, nên xác suất là $\dfrac13$. A bỏ qua điều kiện, B là xác suất của mặt chẵn, D nhân $\dfrac16\cdot\dfrac12$.

::mc
Một hộp có $3$ bi đỏ và $2$ bi xanh. Lấy lần lượt hai viên không hoàn lại. Xác suất cả hai viên đều đỏ là
A. $\dfrac{9}{25}$.
B. $\dfrac{3}{10}$.
C. $\dfrac35$.
D. $\dfrac12$.
::key B
$\dfrac35\cdot\dfrac24=\dfrac3{10}$. A tính như có hoàn lại, C chỉ là xác suất viên đầu đỏ, D chỉ là $P(\text{đỏ lần 2}\mid\text{đỏ lần 1})$.

::mc
Trong $100$ người được hỏi, $40$ người dùng ứng dụng X và $30$ người trong số đó hài lòng; $60$ người không dùng X và $30$ người trong số đó hài lòng. Chọn ngẫu nhiên một người hài lòng, xác suất người đó dùng ứng dụng X là
A. $\dfrac34$.
B. $\dfrac{3}{10}$.
C. $\dfrac12$.
D. $\dfrac35$.
::key C
Có $60$ người hài lòng, trong đó $30$ người dùng X: $\dfrac{30}{60}=\dfrac12$. A là $P(\text{hài lòng}\mid\text{dùng X})$, B chia cho cả $100$ người, D là xác suất hài lòng.

::tf
Cho hai biến cố độc lập $A$, $B$ với $P(A)=0{,}4$ và $P(B)=0{,}5$.
a) $P(A\cap B)=0{,}2$.
b) $P(A\mid B)=0{,}4$.
c) $P(\overline{A}\mid B)=0{,}4$.
d) $P(A\cup B)=0{,}7$.
::key Đ Đ S Đ
a) Đúng: $0{,}4\cdot0{,}5$. b) Đúng: độc lập nên $P(A\mid B)=P(A)$. c) Sai: $P(\overline{A}\mid B)=1-0{,}4=0{,}6$. d) Đúng: $0{,}4+0{,}5-0{,}2=0{,}7$.

::sa
Gieo hai con xúc xắc cân đối. Biết tổng số chấm bằng $7$, tính xác suất có một con xuất hiện mặt $1$ chấm (làm tròn đến hàng phần trăm).
::key 0,33
Tổng bằng $7$ có $6$ kết quả, trong đó $(1; 6)$ và $(6; 1)$ có mặt $1$: $\dfrac26=\dfrac13\approx0{,}33$.

::sa
Xét nghiệm $500$ người: $20$ người mắc bệnh, trong đó $18$ người dương tính; $480$ người không mắc bệnh, trong đó $24$ người dương tính. Chọn ngẫu nhiên một người dương tính, tính xác suất người đó mắc bệnh (làm tròn đến hàng phần trăm).
::key 0,43
Có $18+24=42$ người dương tính, $18$ người mắc bệnh: $\dfrac{18}{42}=\dfrac37\approx0{,}43$.
:::
