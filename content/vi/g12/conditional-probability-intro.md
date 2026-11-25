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

Chọn ngẫu nhiên một học sinh. Xác suất bạn đó tham gia câu lạc bộ là $\dfrac{90}{200}=0{,}45$. Nhưng nếu ta **biết thêm** bạn được chọn là nữ, thì xác suất bạn ấy tham gia câu lạc bộ là bao nhiêu? Bạn thử nghĩ xem: thông tin mới có làm con số thay đổi không?

## Xác suất có điều kiện

### Khám phá: thu hẹp không gian mẫu

Khi đã biết bạn được chọn là nữ, ta chỉ còn xét $100$ bạn nữ ở hàng thứ hai. Trong đó có $30$ bạn tham gia, nên xác suất cần tìm là

$$\frac{30}{100}=0{,}3.$$

Con số này khác $0{,}45$: chỉ một thông tin "là nữ" đã làm thay đổi xác suất. Ta cũng có thể viết nó bằng các xác suất tính trên toàn bộ $200$ học sinh, và cách viết đó dẫn ta tới công thức chung:

$$\frac{30}{100}=\frac{30/200}{100/200}=\frac{P(\text{nữ và tham gia})}{P(\text{nữ})}=\frac{0{,}15}{0{,}5}=0{,}3.$$

:::definition Xác suất có điều kiện
Cho hai biến cố $A$ và $B$ với $P(B)>0$. Xác suất của $A$ **với điều kiện** $B$ đã xảy ra, kí hiệu $P(A\mid B)$, là
$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}.$$
Khi các kết quả đồng khả năng, ta có thể đếm: $P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}$.
:::

**Vì sao như vậy?** Biết $B$ đã xảy ra nghĩa là chỉ những kết quả trong $B$ còn có thể xảy ra, nên $B$ đóng vai trò không gian mẫu mới. Trong đó, các kết quả làm $A$ xảy ra chính là $A\cap B$. Chia cho $P(B)$ để tổng xác suất trong "không gian mới" bằng $1$.

Từ định nghĩa ta có $P(\overline{A}\mid B)=1-P(A\mid B)$, giống như với xác suất thông thường. Lí do là trong không gian mẫu mới, một kết quả hoặc làm biến cố ấy xảy ra, hoặc không.

:::example Gieo hai con xúc xắc
Gieo hai con xúc xắc cân đối. Biết tổng số chấm bằng $8$, tính xác suất có ít nhất một con xuất hiện mặt $6$ chấm.

**Lời giải.** Gọi $B$: "tổng bằng $8$", $A$: "có ít nhất một mặt $6$". Ta liệt kê $B$ rồi đếm những kết quả của $B$ có mặt $6$:

$$B=\{(2; 6), (3; 5), (4; 4), (5; 3), (6; 2)\},\qquad A\cap B=\{(2; 6), (6; 2)\}.$$

Vậy $P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}=\dfrac25$.
:::

Thứ tự hai biến cố trong $P(A\mid B)$ rất quan trọng. Đổi chỗ chúng là hỏi một câu hỏi khác hẳn, như ví dụ sau cho thấy.

:::example Đổi chỗ hai biến cố
Với bảng khảo sát ở đầu bài, chọn ngẫu nhiên một học sinh. Gọi $T$: "tham gia câu lạc bộ", $N$: "là nữ". Tính $P(T\mid N)$ và $P(N\mid T)$.

**Lời giải.** $P(T\mid N)$ chỉ xét hàng "Nữ"; $P(N\mid T)$ chỉ xét cột "Có tham gia":

$$P(T\mid N)=\frac{30}{100}=\frac{3}{10},\qquad P(N\mid T)=\frac{30}{90}=\frac13.$$

Hai số khác nhau: $P(T\mid N)$ trả lời "trong các bạn nữ, bao nhiêu phần tham gia", còn $P(N\mid T)$ trả lời "trong các bạn tham gia, bao nhiêu phần là nữ".
:::

## Công thức nhân và sơ đồ cây

Nhân hai vế của định nghĩa với $P(B)$, ta được một công thức để tính xác suất của giao. Công thức này dùng nhiều không kém chính định nghĩa.

:::theorem Công thức nhân xác suất
Với hai biến cố $A$, $B$ có xác suất dương:
$$P(A\cap B)=P(B)\cdot P(A\mid B)=P(A)\cdot P(B\mid A).$$
:::

Công thức này đặc biệt có ích khi một phép thử diễn ra theo **từng bước**, chẳng hạn lấy bi lần lượt. Trên sơ đồ cây, mỗi nhánh ghi xác suất có điều kiện của bước đó, và xác suất của một đường đi bằng tích các số trên đường đi.

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

Tổng bốn số ở đầu mút là $\dfrac{20+15+15+6}{56}=1$. Bạn nên tập thói quen cộng lại như vậy: nếu tổng không bằng một, chắc chắn có chỗ sai.

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

Ví dụ cuối là một tình huống y tế. Ở đây, nhầm lẫn giữa $P(A\mid B)$ và $P(B\mid A)$ không chỉ làm sai bài, mà còn có thể khiến người ta hiểu sai về sức khoẻ của chính mình.

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

Lỗi đầu tiên không chỉ học sinh mắc, người lớn cũng hay nhầm. Mỗi lần đọc một xác suất có điều kiện, bạn tự hỏi: điều gì đã biết, và ta đang hỏi về điều gì?
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

Quay lại cuộc khảo sát: khi đã biết bạn được chọn là nữ, ta chỉ đếm trong nhóm các bạn nữ, và xác suất thay đổi theo. Nếu chỉ nhớ một điều, bạn hãy nhớ: xác suất có điều kiện là xác suất trong một không gian mẫu đã được thu hẹp.

## Luyện tập

Mỗi bài đều có phần kiến thức cần dùng và vài bước gợi ý. Bạn hãy tự làm trước. Nếu bị kẹt, xem gợi ý một chút rồi làm tiếp, sau đó mới mở lời giải để đối chiếu.

:::exercise
Gieo một con xúc xắc cân đối. Biết xuất hiện mặt lẻ, tính xác suất số chấm không vượt quá $3$.

::hint
**Kiến thức:** $P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}$ khi các kết quả đồng khả năng.

**Gợi ý các bước:**
1. Liệt kê $B=\{1; 3; 5\}$.
2. Đếm các phần tử của $B$ không vượt quá $3$.

::solution
Gọi $A$ là biến cố "số chấm không vượt quá $3$" và $B$ là biến cố "xuất hiện mặt lẻ". Cần tính $P(A\mid B)$.

Không gian mẫu là $\Omega=\{1; 2; 3; 4; 5; 6\}$ gồm $6$ kết quả đồng khả năng. Ta có $B=\{1; 3; 5\}$ nên $n(B)=3$.

Các kết quả thuận lợi cho cả $A$ và $B$ là $A\cap B=\{1; 3\}$, nên $n(A\cap B)=2$.

Áp dụng công thức $P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}$, ta được
$$P(A\mid B)=\frac23.$$

Vậy xác suất số chấm không vượt quá $3$, biết xuất hiện mặt lẻ, bằng $\dfrac23$.

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
Gọi $A$ là biến cố "học sinh được chọn thích Toán", $N$ là biến cố "học sinh được chọn là nữ", $M$ là biến cố "học sinh được chọn là nam".

Số học sinh thích Toán là $14+10=24$. Ta có
$$P(N)=\frac{20}{40},\qquad P(A)=\frac{24}{40},\qquad P(A\cap N)=\frac{10}{40},\qquad P(A\cap M)=\frac{14}{40}.$$

Xác suất bạn đó thích Toán biết đó là bạn nữ:
$$P(A\mid N)=\frac{P(A\cap N)}{P(N)}=\frac{10/40}{20/40}=\frac{10}{20}=\frac12.$$

Xác suất bạn đó là nam biết bạn thích Toán:
$$P(M\mid A)=\frac{P(A\cap M)}{P(A)}=\frac{14/40}{24/40}=\frac{14}{24}=\frac7{12}.$$

Vậy xác suất bạn đó thích Toán biết là bạn nữ bằng $\dfrac12$, và xác suất bạn đó là nam biết bạn thích Toán bằng $\dfrac7{12}$.

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
Áp dụng công thức xác suất có điều kiện $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ và $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}$, ta có
$$P(A\mid B)=\frac{0{,}2}{0{,}4}=0{,}5,\qquad P(B\mid A)=\frac{0{,}2}{0{,}5}=0{,}4.$$

Xét tính độc lập. Ta có $P(A\mid B)=0{,}5=P(A)$. Ngoài ra $P(A)\cdot P(B)=0{,}5\cdot0{,}4=0{,}2=P(A\cap B)$.

Vậy $P(A\mid B)=0{,}5$, $P(B\mid A)=0{,}4$ và hai biến cố $A$, $B$ độc lập.

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
Gọi $A_1$ là biến cố "viên thứ nhất đen", $A_2$ là biến cố "viên thứ hai đen", $T_2$ là biến cố "viên thứ hai trắng".

Xác suất cả hai viên đều đen. Ban đầu hộp có $10$ viên, trong đó $6$ viên đen, nên $P(A_1)=\dfrac{6}{10}$. Sau khi lấy một viên đen (không hoàn lại), hộp còn $9$ viên, trong đó $5$ viên đen, nên $P(A_2\mid A_1)=\dfrac59$. Theo công thức nhân xác suất,
$$P(A_1\cap A_2)=P(A_1)\cdot P(A_2\mid A_1)=\frac{6}{10}\cdot\frac59=\frac{30}{90}=\frac13.$$

Xác suất viên thứ hai trắng biết viên thứ nhất đen. Sau khi lấy một viên đen, hộp còn $9$ viên, trong đó $4$ viên trắng, nên
$$P(T_2\mid A_1)=\frac49.$$

Vậy xác suất cả hai viên đều đen bằng $\dfrac13$, và xác suất viên thứ hai trắng biết viên thứ nhất đen bằng $\dfrac49$.

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
Không gian mẫu $\Omega=\{1; 2; \dots; 10\}$ gồm $10$ kết quả đồng khả năng. Ta có $A=\{2; 4; 6; 8; 10\}$ nên $n(A)=5$ và $P(A)=\dfrac5{10}=\dfrac12$. Ta có $B=\{7; 8; 9; 10\}$ nên $n(B)=4$. Giao của hai biến cố là $A\cap B=\{8; 10\}$ nên $n(A\cap B)=2$.

a) **Đúng.** Ta có $P(B)=\dfrac{n(B)}{n(\Omega)}=\dfrac4{10}=0{,}4$.

b) **Đúng.** Ta có $P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}=\dfrac24=\dfrac12$.

c) **Đúng.** Trong $5$ phần tử của $A$ có $2$ phần tử là $8$ và $10$ thuộc $B$, nên $P(B\mid A)=\dfrac{n(A\cap B)}{n(A)}=\dfrac25$.

d) **Sai.** Ta có $P(A\mid B)=\dfrac12=P(A)$. Ngoài ra $P(A)\cdot P(B)=\dfrac12\cdot0{,}4=0{,}2=\dfrac2{10}=P(A\cap B)$. Do đó $A$ và $B$ độc lập, nên khẳng định "$A$ và $B$ không độc lập" là sai.

Vậy các mệnh đề a), b), c) đúng; mệnh đề d) sai.

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
Gọi $A$ là biến cố "có ít nhất một con xuất hiện mặt $6$ chấm" và $B$ là biến cố "tổng số chấm ít nhất là $10$". Cần tính $P(B\mid A)$.

Gieo hai con xúc xắc có $6\cdot6=36$ kết quả đồng khả năng. Biến cố đối của $A$ là "cả hai con đều không ra mặt $6$", có $5\cdot5=25$ kết quả. Do đó $n(A)=36-25=11$.

Các kết quả thuận lợi cho cả $A$ và $B$ (có mặt $6$ và tổng $\ge10$) là $(4; 6)$, $(6; 4)$, $(5; 6)$, $(6; 5)$, $(6; 6)$, nên $n(A\cap B)=5$.

Áp dụng công thức $P(B\mid A)=\dfrac{n(A\cap B)}{n(A)}$, ta được
$$P(B\mid A)=\frac5{11}\approx0{,}4545.$$

Vậy xác suất tổng số chấm ít nhất là $10$, biết có ít nhất một con xuất hiện mặt $6$ chấm, xấp xỉ $0{,}45$.

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
Gọi $A$ là biến cố "khách gọi đồ uống có cà phê" và $B$ là biến cố "khách có gọi bánh". Theo đề, $P(A)=0{,}7$, $P(B\mid A)=0{,}4$ và $P(B)=0{,}35$.

Xác suất khách gọi cả cà phê và bánh. Theo công thức nhân xác suất,
$$P(A\cap B)=P(A)\cdot P(B\mid A)=0{,}7\cdot0{,}4=0{,}28.$$

Xác suất khách gọi cà phê biết khách có gọi bánh:
$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{0{,}28}{0{,}35}=0{,}8.$$

Vậy xác suất một khách gọi cả cà phê và bánh bằng $0{,}28$, và xác suất khách gọi cà phê biết khách có gọi bánh bằng $0{,}8$.

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
Gọi $A$ là biến cố "xạ thủ thứ nhất bắn trúng", $B$ là biến cố "xạ thủ thứ hai bắn trúng". Theo đề, $P(A)=0{,}8$, $P(B)=0{,}7$ và $A$, $B$ độc lập.

Gọi $C=A\cap B$ là biến cố "cả hai người đều bắn trúng" và $D$ là biến cố "mục tiêu bị trúng ít nhất một viên". Cần tính $P(C\mid D)$.

Vì $A$, $B$ độc lập nên
$$P(C)=P(A)\cdot P(B)=0{,}8\cdot0{,}7=0{,}56.$$

Biến cố đối của $D$ là "cả hai đều bắn trượt", có xác suất $(1-0{,}8)(1-0{,}7)=0{,}2\cdot0{,}3=0{,}06$. Do đó
$$P(D)=1-0{,}06=0{,}94.$$

Vì "cả hai trúng" kéo theo "ít nhất một trúng" nên $C\subset D$, suy ra $C\cap D=C$. Áp dụng công thức xác suất có điều kiện,
$$P(C\mid D)=\frac{P(C\cap D)}{P(D)}=\frac{0{,}56}{0{,}94}=\frac{28}{47}\approx0{,}596.$$

Vậy xác suất cả hai người đều bắn trúng, biết mục tiêu bị trúng ít nhất một viên, xấp xỉ $0{,}60$.

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
Gọi $A$ là biến cố "trong $3$ bạn được chọn có ít nhất một bạn nữ" và $B$ là biến cố "trong $3$ bạn được chọn có đúng một bạn nữ". Cần tính $P(B\mid A)$.

Chọn $3$ bạn trong $9$ bạn có $C_9^3=84$ cách. Biến cố đối của $A$ là "cả $3$ bạn đều là nam", có $C_5^3=10$ cách. Do đó $n(A)=84-10=74$.

Biến cố $B$: chọn $1$ bạn nữ trong $4$ bạn nữ và $2$ bạn nam trong $5$ bạn nam, nên $n(B)=C_4^1\cdot C_5^2=4\cdot10=40$.

Vì có đúng một bạn nữ thì có ít nhất một bạn nữ nên $B\subset A$, suy ra $n(A\cap B)=n(B)=40$.

Áp dụng công thức $P(B\mid A)=\dfrac{n(A\cap B)}{n(A)}$, ta được
$$P(B\mid A)=\frac{40}{74}=\frac{20}{37}.$$

Vậy xác suất có đúng một bạn nữ, biết có ít nhất một bạn nữ, bằng $\dfrac{20}{37}$.

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
Kí hiệu N là mặt ngửa, S là mặt sấp. Không gian mẫu gồm $2^3=8$ kết quả đồng khả năng.

Biến cố $A$ "lần đầu xuất hiện mặt ngửa": $A=\{\text{NNN}; \text{NNS}; \text{NSN}; \text{NSS}\}$, nên $P(A)=\dfrac48=\dfrac12$.

Biến cố $B$ "có ít nhất hai lần xuất hiện mặt ngửa": $B=\{\text{NNN}; \text{NNS}; \text{NSN}; \text{SNN}\}$, nên $P(B)=\dfrac48=\dfrac12$.

Giao của hai biến cố là $A\cap B=\{\text{NNS}; \text{NSN}; \text{NNN}\}$ có $3$ phần tử, nên $P(A\cap B)=\dfrac38$.

Áp dụng công thức xác suất có điều kiện,
$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{3/8}{4/8}=\frac34,\qquad P(B\mid A)=\frac{P(A\cap B)}{P(A)}=\frac{3/8}{4/8}=\frac34.$$

Xét tính độc lập. Ta có $P(A)=\dfrac12\neq\dfrac34=P(A\mid B)$ (hay $P(A)\cdot P(B)=\dfrac14\neq\dfrac38=P(A\cap B)$), nên $A$ và $B$ không độc lập: biết lần đầu ngửa thì dễ có ít nhất hai mặt ngửa hơn.

Vậy $P(A\mid B)=\dfrac34$, $P(B\mid A)=\dfrac34$ và hai biến cố $A$, $B$ không độc lập.

**Đáp số.** $\dfrac34$; $\dfrac34$; không độc lập.
:::

## Kiểm tra mini

:::quiz
::mc NB
Cho $P(A)=0{,}6$, $P(B)=0{,}5$ và $P(A\cap B)=0{,}2$. Giá trị $P(A\mid B)$ bằng
A. $0{,}3$.
B. $0{,}4$.
C. $\dfrac13$.
D. $0{,}1$.
::key B
$P(A\mid B)=\dfrac{0{,}2}{0{,}5}=0{,}4$. A là $P(A)P(B)$, C chia cho $P(A)$ (đó là $P(B\mid A)$), D nhân $P(A\cap B)$ với $P(B)$.

::mc TH
Gieo một con xúc xắc cân đối. Biết xuất hiện mặt chẵn, xác suất xuất hiện mặt $6$ chấm là
A. $\dfrac16$.
B. $\dfrac12$.
C. $\dfrac13$.
D. $\dfrac1{12}$.
::key C
Không gian mẫu thu hẹp còn $\{2; 4; 6\}$, nên xác suất là $\dfrac13$. A bỏ qua điều kiện, B là xác suất của mặt chẵn, D nhân $\dfrac16\cdot\dfrac12$.

::mc TH
Một hộp có $3$ bi đỏ và $2$ bi xanh. Lấy lần lượt hai viên không hoàn lại. Xác suất cả hai viên đều đỏ là
A. $\dfrac{9}{25}$.
B. $\dfrac{3}{10}$.
C. $\dfrac35$.
D. $\dfrac12$.
::key B
$\dfrac35\cdot\dfrac24=\dfrac3{10}$. A tính như có hoàn lại, C chỉ là xác suất viên đầu đỏ, D chỉ là $P(\text{đỏ lần 2}\mid\text{đỏ lần 1})$.

::mc TH
Trong $100$ người được hỏi, $40$ người dùng ứng dụng X và $30$ người trong số đó hài lòng; $60$ người không dùng X và $30$ người trong số đó hài lòng. Chọn ngẫu nhiên một người hài lòng, xác suất người đó dùng ứng dụng X là
A. $\dfrac34$.
B. $\dfrac{3}{10}$.
C. $\dfrac12$.
D. $\dfrac35$.
::key C
Có $60$ người hài lòng, trong đó $30$ người dùng X: $\dfrac{30}{60}=\dfrac12$. A là $P(\text{hài lòng}\mid\text{dùng X})$, B chia cho cả $100$ người, D là xác suất hài lòng.

::tf NB TH TH TH
Cho hai biến cố độc lập $A$, $B$ với $P(A)=0{,}4$ và $P(B)=0{,}5$.
a) $P(A\cap B)=0{,}2$.
b) $P(A\mid B)=0{,}4$.
c) $P(\overline{A}\mid B)=0{,}4$.
d) $P(A\cup B)=0{,}7$.
::key Đ Đ S Đ
a) Đúng: $0{,}4\cdot0{,}5$. b) Đúng: độc lập nên $P(A\mid B)=P(A)$. c) Sai: $P(\overline{A}\mid B)=1-0{,}4=0{,}6$. d) Đúng: $0{,}4+0{,}5-0{,}2=0{,}7$.

::sa VD
Gieo hai con xúc xắc cân đối. Biết tổng số chấm bằng $7$, tính xác suất có một con xuất hiện mặt $1$ chấm (làm tròn đến hàng phần trăm).
::key 0,33
Tổng bằng $7$ có $6$ kết quả, trong đó $(1; 6)$ và $(6; 1)$ có mặt $1$: $\dfrac26=\dfrac13\approx0{,}33$.

::sa VD
Xét nghiệm $500$ người: $20$ người mắc bệnh, trong đó $18$ người dương tính; $480$ người không mắc bệnh, trong đó $24$ người dương tính. Chọn ngẫu nhiên một người dương tính, tính xác suất người đó mắc bệnh (làm tròn đến hàng phần trăm).
::key 0,43
Có $18+24=42$ người dương tính, $18$ người mắc bệnh: $\dfrac{18}{42}=\dfrac37\approx0{,}43$.
:::
