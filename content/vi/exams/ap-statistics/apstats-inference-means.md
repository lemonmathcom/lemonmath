---
title: Suy luận cho trung bình
description: AP Statistics Unit 4: phân phối t, khoảng tin cậy và kiểm định ý nghĩa cho một trung bình, dữ liệu ghép cặp và hiệu hai trung bình.
minutes: 55
---

:::goals
- Giải thích vì sao suy luận cho trung bình dùng phân phối $t$, và tìm giá trị tới hạn với đúng số bậc tự do.
- Lập và diễn giải khoảng tin cậy $t$ một mẫu, thực hiện kiểm định $t$ một mẫu cho $\mu$.
- Nhận ra dữ liệu ghép cặp và phân tích chúng bằng phương pháp một mẫu trên các hiệu.
- Lập khoảng tin cậy và thực hiện kiểm định cho hiệu hai trung bình $\mu_1-\mu_2$.
- Kiểm tra các điều kiện, kể cả điều kiện chuẩn / mẫu lớn.
:::

Suy luận cho trung bình theo đúng bốn bước như suy luận cho tỉ lệ: nêu, lập kế hoạch, thực hiện, kết luận. Thành phần mới là phân phối $t$, cần thiết vì ta hầu như không bao giờ biết độ lệch chuẩn của tổng thể $\sigma$ và phải ước lượng nó bằng độ lệch chuẩn mẫu $s$. Lỗi hay gặp nhất trong unit này không phải tính toán mà là chọn sai phương pháp, đặc biệt là coi dữ liệu ghép cặp như hai mẫu độc lập.

## Phân phối $t$

Khi thay $\sigma$ bằng $s$, thống kê chuẩn hoá
$$t=\frac{\bar x-\mu}{s/\sqrt n}$$
có **phân phối $t$** với $n-1$ **bậc tự do** (df). Phân phối $t$ đối xứng, hình chuông như phân phối chuẩn, nhưng có đuôi dày hơn, nên giá trị tới hạn lớn hơn; khi số bậc tự do tăng, nó tiến tới phân phối chuẩn tắc. Đại lượng $\dfrac{s}{\sqrt n}$ là **sai số chuẩn** của $\bar x$.

**Điều kiện** cho phương pháp một mẫu:

| Điều kiện | Kiểm tra |
|---|---|
| Ngẫu nhiên | mẫu ngẫu nhiên hoặc phân nhóm ngẫu nhiên |
| $10\%$ | $n\le0{,}1N$ khi chọn không hoàn lại |
| Chuẩn / mẫu lớn | tổng thể có phân phối chuẩn, hoặc $n\ge30$, hoặc (với $n$ nhỏ) đồ thị dữ liệu không lệch mạnh và không có ngoại lai |

## Khoảng tin cậy và kiểm định $t$ một mẫu

- **Khoảng tin cậy:** $\bar x\pm t^*\dfrac{s}{\sqrt n}$, với $t^*$ ứng với df $=n-1$.
- **Kiểm định $H_0:\mu=\mu_0$:** $t=\dfrac{\bar x-\mu_0}{s/\sqrt n}$, giá trị P lấy từ phân phối $t$ với df $=n-1$.

:::example Khoảng tin cậy một mẫu
Một mẫu ngẫu nhiên $16$ học sinh của một trường có điểm đọc hiểu trung bình $82{,}5$ và độ lệch chuẩn $6$, biểu đồ chấm của điểm không lệch mạnh và không có ngoại lai. Lập khoảng tin cậy $95\%$ cho điểm trung bình của toàn bộ học sinh trong trường.

**Lời giải.** *Nêu:* $\mu$ là điểm đọc hiểu trung bình thật của toàn bộ học sinh trong trường; độ tin cậy $95\%$.

*Kế hoạch:* khoảng tin cậy $t$ một mẫu. Mẫu ngẫu nhiên; $16$ nhỏ hơn $10\%$ số học sinh; $n<30$ nhưng biểu đồ chấm không lệch mạnh, không có ngoại lai.

*Thực hiện:* df $=15$, nên $t^*\approx2{,}131$. Sai số chuẩn là $\dfrac{6}{\sqrt{16}}=1{,}5$, nên khoảng là $82{,}5\pm2{,}131(1{,}5)=82{,}5\pm3{,}197$, tức $(79{,}30;\ 85{,}70)$.

*Kết luận:* ta tin cậy $95\%$ rằng khoảng từ $79{,}30$ đến $85{,}70$ điểm chứa điểm đọc hiểu trung bình thật của toàn bộ học sinh trong trường.
:::

:::example Kiểm định một mẫu
Một máy được thiết kế để rót trung bình $500$ ml mỗi chai. Một mẫu ngẫu nhiên $25$ chai có trung bình $497{,}8$ ml và độ lệch chuẩn $5$ ml, lượng rót không lệch mạnh. Với $\alpha=0{,}05$, có bằng chứng thuyết phục rằng trung bình thật nhỏ hơn $500$ ml không?
A. Có, vì giá trị P xấp xỉ $0{,}019$.
B. Không, vì giá trị P xấp xỉ $0{,}019$.
C. Có, vì giá trị P xấp xỉ $0{,}038$, dùng kiểm định hai phía.
D. Không, vì $497{,}8$ gần $500$.

**Lời giải.** Các giả thuyết là $H_0:\mu=500$ và $H_a:\mu<500$, với $\mu$ là lượng rót trung bình thật. Thống kê kiểm định là
$$t=\frac{497{,}8-500}{5/\sqrt{25}}=\frac{-2{,}2}{1}=-2{,}2,$$
với df $=24$, nên giá trị P là $P(t<-2{,}2)\approx0{,}019$.

Vì $0{,}019<0{,}05$ nên ta bác bỏ $H_0$: có bằng chứng thuyết phục rằng lượng rót trung bình của máy nhỏ hơn $500$ ml.

Vậy chọn đáp án **A**. Phương án C nhân đôi giá trị P dù giả thuyết đối là một phía.
:::

## Dữ liệu ghép cặp

Dữ liệu **ghép cặp** khi mỗi quan sát ở tập này được ghép tự nhiên với một quan sát ở tập kia: cùng đối tượng đo hai lần, hoặc các cặp ghép trong thí nghiệm. Tính **hiệu** trong mỗi cặp, rồi dùng phương pháp $t$ một mẫu trên các hiệu, với tham số $\mu_{\text{hiệu}}$.

:::example Trước và sau
Tám học sinh làm bài kiểm tra trước và sau một khoá học ngắn. Hiệu điểm (sau trừ trước) có trung bình $3{,}5$ điểm và độ lệch chuẩn $4{,}2$ điểm, không lệch mạnh và không có ngoại lai. Các em là mẫu ngẫu nhiên từ một trường lớn. Với $\alpha=0{,}05$, có bằng chứng thuyết phục rằng khoá học làm tăng điểm trung bình không?

**Lời giải.** *Nêu:* $H_0:\mu_{\text{hiệu}}=0$ và $H_a:\mu_{\text{hiệu}}>0$, với $\mu_{\text{hiệu}}$ là hiệu trung bình thật (sau trừ trước) của học sinh trong trường; $\alpha=0{,}05$.

*Kế hoạch:* kiểm định $t$ ghép cặp. Mẫu ngẫu nhiên; $8$ nhỏ hơn $10\%$ số học sinh; các hiệu không lệch mạnh, không có ngoại lai.

*Thực hiện:* $t=\dfrac{3{,}5-0}{4{,}2/\sqrt8}\approx2{,}357$ với df $=7$, nên giá trị P xấp xỉ $0{,}0253$.

*Kết luận:* vì $0{,}0253<0{,}05$ nên ta bác bỏ $H_0$. Vậy có bằng chứng thuyết phục rằng, tính trung bình, học sinh của trường đạt điểm cao hơn sau khoá học. Tuy nhiên, khi không có nhóm đối chứng và phân nhóm ngẫu nhiên, ta không chắc chính khoá học gây ra mức tăng này.
:::

## Hai mẫu độc lập

Với hai mẫu ngẫu nhiên độc lập hoặc hai nhóm trong thí nghiệm có phân nhóm ngẫu nhiên:

- **Khoảng tin cậy:** $(\bar x_1-\bar x_2)\pm t^*\sqrt{\dfrac{s_1^2}{n_1}+\dfrac{s_2^2}{n_2}}$.
- **Kiểm định $H_0:\mu_1-\mu_2=0$:** $t=\dfrac{\bar x_1-\bar x_2}{\sqrt{\dfrac{s_1^2}{n_1}+\dfrac{s_2^2}{n_2}}}$.

Dùng số bậc tự do do máy tính cho, hoặc cách an toàn: df $=$ số nhỏ hơn trong $n_1-1$ và $n_2-1$. Kiểm tra điều kiện chuẩn / mẫu lớn cho **từng** mẫu.

:::example Hai trường học
Một mẫu ngẫu nhiên $30$ học sinh trường A có thời gian tự học trung bình $72$ phút mỗi ngày với $s=10$, và một mẫu ngẫu nhiên độc lập $35$ học sinh trường B có trung bình $66$ phút với $s=12$. Người ta kiểm định $H_0:\mu_A-\mu_B=0$ với $H_a:\mu_A-\mu_B\ne0$. Thống kê kiểm định và giá trị P xấp xỉ là
A. $t\approx0{,}60$, giá trị P $\approx0{,}55$
B. $t\approx2{,}20$, giá trị P $\approx0{,}016$
C. $t\approx2{,}20$, giá trị P $\approx0{,}032$
D. $t\approx6{,}00$, giá trị P $\approx0{,}000$

**Lời giải.** Sai số chuẩn là $\sqrt{\dfrac{10^2}{30}+\dfrac{12^2}{35}}=\sqrt{3{,}333+4{,}114}\approx2{,}729$, nên
$$t=\frac{72-66}{2{,}729}\approx2{,}20.$$

Với số bậc tự do máy tính cho, df $\approx63$, giá trị P hai phía là $2P(t>2{,}20)\approx0{,}032$.

Vậy $t\approx2{,}20$ và giá trị P xấp xỉ $0{,}032$, chọn đáp án **C**. Phương án B chỉ lấy một đuôi, còn phương án D quên chia cho sai số chuẩn.
:::

:::warning Những cái bẫy thường gặp
- **Ghép cặp hay hai mẫu?** Cùng đối tượng hoặc cặp ghép thì là ghép cặp: phân tích các hiệu.
- **$z$ hay $t$?** Với trung bình mà $s$ ước lượng từ dữ liệu, dùng $t$.
- **Chuẩn / mẫu lớn:** với mẫu nhỏ, nói rõ đồ thị cho thấy gì: "không lệch mạnh, không có ngoại lai".
- **Bậc tự do:** $n-1$ cho một mẫu hoặc dữ liệu ghép cặp.
- **Một phía hay hai phía:** giá trị P phải khớp với $H_a$.
:::

:::terms
- t distribution | phân phối t (Student)
- degrees of freedom | bậc tự do
- standard error of the mean | sai số chuẩn của trung bình
- one-sample t interval / test | khoảng tin cậy / kiểm định t một mẫu
- paired data | dữ liệu ghép cặp
- mean difference | trung bình hiệu
- two-sample t procedures | phương pháp t hai mẫu
- normal/large sample condition | điều kiện chuẩn / mẫu lớn
:::

## Bài tập tương tự

:::exercise
Một mẫu ngẫu nhiên $25$ viên pin có thời gian sử dụng trung bình $12{,}4$ giờ và độ lệch chuẩn $2{,}5$ giờ; dữ liệu không lệch mạnh. Lập khoảng tin cậy $90\%$ cho thời gian sử dụng trung bình của mọi viên pin loại này.

::hint
**Kiến thức:** df $=24$ cho $t^*\approx1{,}711$.

::solution
Sai số chuẩn là $\dfrac{2{,}5}{\sqrt{25}}=0{,}5$ giờ, và với df $=24$, giá trị tới hạn cho $90\%$ là $t^*\approx1{,}711$.

Sai số biên là $1{,}711(0{,}5)\approx0{,}856$, nên khoảng là $12{,}4\pm0{,}856$, tức $(11{,}54;\ 13{,}26)$.

Vậy ta tin cậy $90\%$ rằng thời gian sử dụng trung bình thật của pin nằm trong khoảng từ $11{,}54$ đến $13{,}26$ giờ.

**Đáp số.** $(11{,}54;\ 13{,}26)$ giờ.
:::

:::exercise
Giải thích vì sao $t^*$ cho khoảng tin cậy $95\%$ với $n=10$ lớn hơn $1{,}96$.

::hint
**Kiến thức:** ước lượng $\sigma$ bằng $s$ làm tăng độ bất định.

::solution
Với $n=10$, ta dùng phân phối $t$ với $9$ bậc tự do, vì $\sigma$ được ước lượng bằng $s$.

Độ bất định thêm này làm phân phối $t$ có đuôi dày hơn phân phối chuẩn, nên phải đi xa tâm hơn mới bao được $95\%$ ở giữa: $t^*\approx2{,}262>1{,}96$.

Vậy $t^*$ lớn hơn vì bản thân độ lệch chuẩn mẫu cũng bất định, nhất là với mẫu nhỏ.

**Đáp số.** Đuôi dày hơn với $9$ bậc tự do: $t^*\approx2{,}262$.
:::

:::exercise
Một mẫu ngẫu nhiên $12$ giá nhà ở một thị trấn lệch phải mạnh và có một giá trị ngoại lai rất lớn. Khoảng tin cậy $t$ một mẫu cho giá trung bình có phù hợp không?

::hint
**Kiến thức:** điều kiện chuẩn / mẫu lớn.

::solution
Cỡ mẫu $12$ nhỏ hơn $30$, nên điều kiện chuẩn / mẫu lớn phụ thuộc vào hình dạng dữ liệu.

Dữ liệu lệch mạnh và có ngoại lai, gợi ý tổng thể không có phân phối chuẩn, nên phân phối mẫu của $\bar x$ có thể không xấp xỉ chuẩn.

Vậy khoảng tin cậy $t$ không phù hợp; cần mẫu lớn hơn.

**Đáp số.** Không.
:::

:::exercise
Một khoảng tin cậy $95\%$ cho trung bình là $(47{,}2;\ 53{,}6)$. Có bằng chứng thuyết phục rằng $\mu\ne50$ không? Có bằng chứng thuyết phục rằng $\mu\ne45$ không?

::hint
**Kiến thức:** các giá trị nằm trong khoảng là hợp lí.

::solution
Giá trị $50$ nằm trong khoảng, nên nó là giá trị hợp lí của $\mu$: không có bằng chứng thuyết phục rằng $\mu\ne50$.

Giá trị $45$ nằm ngoài khoảng, nên không hợp lí: có bằng chứng thuyết phục, ở mức khoảng $5\%$ với kiểm định hai phía, rằng $\mu\ne45$.

Vậy câu trả lời là không với $50$ và có với $45$.

**Đáp số.** Không với $50$; có với $45$.
:::

:::exercise
Với mỗi nghiên cứu, cho biết dữ liệu là ghép cặp hay từ hai mẫu độc lập.
a) Thời gian phản xạ của $20$ lái xe được đo khi có và khi không có cuộc gọi điện thoại.
b) Chiều cao của $30$ bạn nam và $30$ bạn nữ chọn ngẫu nhiên được so sánh.

::hint
**Kiến thức:** các phép đo có được ghép tự nhiên không?

::solution
a) Mỗi lái xe được đo hai lần, nên thời gian "có điện thoại" được ghép với thời gian "không điện thoại" của cùng lái xe đó: dữ liệu ghép cặp.

b) Các bạn nam và nữ là hai mẫu ngẫu nhiên riêng, không có ghép tự nhiên, nên đây là hai mẫu độc lập.

Vậy nghiên cứu a) dùng phương pháp ghép cặp và nghiên cứu b) dùng phương pháp hai mẫu.

**Đáp số.** a) ghép cặp; b) hai mẫu độc lập.
:::

## Bài tập vận dụng

:::exercise
Một hãng pin khẳng định pin của họ dùng được trung bình $40$ giờ. Một mẫu ngẫu nhiên $20$ viên có trung bình $38{,}5$ giờ và độ lệch chuẩn $3{,}2$ giờ, không lệch mạnh. Kiểm định lời khẳng định với $\alpha=0{,}05$, giả thuyết đối là trung bình nhỏ hơn $40$ giờ.

::hint
**Kiến thức:** $t=\dfrac{38{,}5-40}{3{,}2/\sqrt{20}}$, df $=19$.

::solution
*Nêu:* $H_0:\mu=40$, $H_a:\mu<40$, với $\mu$ là thời gian sử dụng trung bình thật của pin; $\alpha=0{,}05$.

*Kế hoạch:* kiểm định $t$ một mẫu. Mẫu ngẫu nhiên; $20$ nhỏ hơn $10\%$ số pin; mẫu không lệch mạnh.

*Thực hiện:* $t=\dfrac{38{,}5-40}{3{,}2/\sqrt{20}}\approx\dfrac{-1{,}5}{0{,}7155}\approx-2{,}096$ với df $=19$, nên giá trị P xấp xỉ $0{,}0248$.

*Kết luận:* vì $0{,}0248<0{,}05$ nên ta bác bỏ $H_0$. Vậy có bằng chứng thuyết phục rằng thời gian sử dụng trung bình của pin dưới $40$ giờ.

**Đáp số.** $t\approx-2{,}096$, giá trị P $\approx0{,}0248$; bác bỏ lời khẳng định.
:::

:::exercise
Hai mẫu ngẫu nhiên độc lập gồm $40$ khách ở cửa hàng X và $45$ khách ở cửa hàng Y có thời gian chờ trung bình $25{,}1$ và $22{,}4$ phút, độ lệch chuẩn $4{,}0$ và $5{,}0$ phút. Lập khoảng tin cậy $95\%$ cho $\mu_X-\mu_Y$, dùng df $\approx82$ ($t^*\approx1{,}989$), và diễn giải.

::hint
**Kiến thức:** sai số chuẩn $\sqrt{\dfrac{4^2}{40}+\dfrac{5^2}{45}}$.

::solution
Hiệu hai trung bình mẫu là $25{,}1-22{,}4=2{,}7$ phút, và sai số chuẩn là $\sqrt{\dfrac{16}{40}+\dfrac{25}{45}}=\sqrt{0{,}4+0{,}5556}\approx0{,}9775$.

Sai số biên là $1{,}989(0{,}9775)\approx1{,}945$, nên khoảng là $2{,}7\pm1{,}945$, tức $(0{,}755;\ 4{,}645)$ phút. Cả hai mẫu đều lớn hơn $30$, nên điều kiện chuẩn / mẫu lớn được thoả mãn.

Vậy ta tin cậy $95\%$ rằng thời gian chờ trung bình thật ở cửa hàng X dài hơn ở cửa hàng Y từ khoảng $0{,}76$ đến $4{,}64$ phút; vì $0$ không thuộc khoảng, hai cửa hàng có khác biệt.

**Đáp số.** $(0{,}755;\ 4{,}645)$ phút.
:::

:::exercise
Trong một thí nghiệm cặp ghép gồm $10$ cặp, các hiệu có trung bình $1{,}8$ và độ lệch chuẩn $2{,}0$, không lệch mạnh. Lập khoảng tin cậy $95\%$ cho $\mu_{\text{hiệu}}$.

::hint
**Kiến thức:** df $=9$ cho $t^*\approx2{,}262$.

::solution
Sai số chuẩn của hiệu trung bình là $\dfrac{2{,}0}{\sqrt{10}}\approx0{,}6325$, và với df $=9$, $t^*\approx2{,}262$.

Sai số biên là $2{,}262(0{,}6325)\approx1{,}431$, nên khoảng là $1{,}8\pm1{,}431$, tức $(0{,}369;\ 3{,}231)$.

Vậy ta tin cậy $95\%$ rằng hiệu trung bình thật nằm trong khoảng từ $0{,}37$ đến $3{,}23$; vì cả khoảng dương, nghiệm thức có vẻ làm tăng biến phản hồi.

**Đáp số.** $(0{,}369;\ 3{,}231)$.
:::

:::exercise Thử thách
Một nhà nghiên cứu muốn có khoảng tin cậy $95\%$ cho trung bình với sai số biên không quá $3$ đơn vị. Từ các nghiên cứu trước, $\sigma\approx15$. Dùng xấp xỉ $z^*$, tìm cỡ mẫu nhỏ nhất.

::hint
**Kiến thức:** $n\ge\left(\dfrac{z^*\sigma}{M}\right)^2$.

::solution
Sai số biên xấp xỉ $z^*\dfrac{\sigma}{\sqrt n}$, nên ta cần $1{,}96\cdot\dfrac{15}{\sqrt n}\le3$, tức $\sqrt n\ge\dfrac{1{,}96\times15}{3}=9{,}8$.

Do đó $n\ge9{,}8^2=96{,}04$, và ta làm tròn lên.

Vậy cỡ mẫu nhỏ nhất là $97$.

**Đáp số.** $97$.
:::

:::quiz
::mc
Với phương pháp $t$ một mẫu và $n=20$, số bậc tự do là
A. $20$
B. $19$
C. $18$
D. $21$
::key B
df $=n-1$.

::mc
So với phân phối chuẩn tắc, phân phối $t$ có
A. đuôi dày hơn
B. kì vọng lớn hơn
C. đuôi mỏng hơn
D. hình dạng lệch
::key A
Ước lượng $\sigma$ làm tăng độ bất định.

::mc
Một nghiên cứu đo huyết áp của mỗi bệnh nhân trước và sau khi dùng thuốc. Phương pháp đúng là
A. kiểm định $t$ hai mẫu
B. kiểm định $z$ cho một tỉ lệ
C. kiểm định $z$ cho hai tỉ lệ
D. kiểm định $t$ ghép cặp trên các hiệu
::key D
Cùng bệnh nhân được đo hai lần.

::mc
Với mẫu nhỏ, điều kiện chuẩn / mẫu lớn được kiểm tra bằng cách
A. tính $np$
B. đảm bảo $n\ge10$
C. vẽ đồ thị dữ liệu và xem có lệch mạnh hay ngoại lai không
D. kiểm tra $\bar x$ có gần $\mu_0$ không
::key C
Hình dạng của mẫu cho bằng chứng về hình dạng của tổng thể.

::tf
Một mẫu ngẫu nhiên $36$ giá trị có $\bar x=50$ và $s=12$. Xét tính đúng sai của các mệnh đề sau:
a) Sai số chuẩn của trung bình là $2$.
b) Số bậc tự do là $35$.
c) Khoảng tin cậy $t$ $95\%$ dùng đúng $t^*=1{,}96$.
d) Điều kiện chuẩn / mẫu lớn thoả mãn vì $n\ge30$.
::key T T F T
Với df $=35$, $t^*\approx2{,}03$.

::sa
Tìm sai số chuẩn của trung bình khi $s=8$ và $n=16$.
::key 2
$\dfrac{8}{\sqrt{16}}=2$.

::sa
Trong một kiểm định, $\bar x=52$, $\mu_0=50$ và sai số chuẩn là $0{,}8$. Tìm $t$.
::key 2,5
$\dfrac{52-50}{0{,}8}=2{,}5$.
:::
