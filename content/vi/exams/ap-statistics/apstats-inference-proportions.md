---
title: Suy luận cho tỉ lệ
description: AP Statistics Unit 3: khoảng tin cậy và kiểm định ý nghĩa cho một tỉ lệ và cho hiệu hai tỉ lệ, các loại sai lầm, lực kiểm định và cỡ mẫu.
minutes: 55
---

:::goals
- Lập và diễn giải khoảng tin cậy cho một tỉ lệ $p$ và cho hiệu $p_1-p_2$.
- Thực hiện kiểm định ý nghĩa cho $p$ và cho $p_1-p_2$: giả thuyết, điều kiện, thống kê kiểm định, giá trị P và kết luận theo tình huống.
- Diễn giải đúng độ tin cậy, sai số biên và giá trị P.
- Mô tả sai lầm loại I, loại II và lực kiểm định theo tình huống, chọn cỡ mẫu.
:::

Unit 3 là nơi thống kê bắt đầu rút ra kết luận về tổng thể. Mọi câu suy luận trong đề, kể cả câu tự luận về suy luận, đều được chấm theo cùng một cấu trúc bốn bước, nên hãy học một lần và dùng mọi lúc.

:::note Bốn bước của suy luận
1. **State (nêu):** tham số bằng lời và kí hiệu, độ tin cậy hoặc các giả thuyết và mức ý nghĩa.
2. **Plan (lập kế hoạch):** gọi tên phương pháp và kiểm tra điều kiện: ngẫu nhiên, $10\%$, số đếm đủ lớn.
3. **Do (thực hiện):** tính khoảng tin cậy, hoặc thống kê kiểm định và giá trị P.
4. **Conclude (kết luận):** trả lời câu hỏi theo tình huống.
:::

## Khoảng tin cậy cho một tỉ lệ

Khoảng tin cậy có dạng
$$\text{thống kê}\pm(\text{giá trị tới hạn})\times(\text{sai số chuẩn}),\qquad \hat p\pm z^*\sqrt{\frac{\hat p(1-\hat p)}{n}}.$$
Các giá trị tới hạn thường dùng: $z^*=1{,}645$ cho $90\%$, $1{,}960$ cho $95\%$, $2{,}576$ cho $99\%$. Phần sau dấu $\pm$ là **sai số biên** (margin of error). Điều kiện: mẫu ngẫu nhiên, $n\le0{,}1N$, và mẫu có ít nhất $10$ thành công và $10$ thất bại.

**Diễn giải khoảng:** "Ta tin cậy $95\%$ rằng khoảng từ … đến … chứa tỉ lệ thật của [tổng thể] [tình huống]." **Diễn giải độ tin cậy:** "Nếu lấy rất nhiều mẫu ngẫu nhiên cùng cỡ và lập khoảng từ mỗi mẫu, khoảng $95\%$ số khoảng sẽ chứa tỉ lệ thật."

:::example Khoảng tin cậy cho một tỉ lệ
Trong một mẫu ngẫu nhiên $500$ người trưởng thành ở một thành phố, $290$ người nói họ sẽ dùng dịch vụ xe đạp công cộng mới. Lập và diễn giải khoảng tin cậy $95\%$ cho tỉ lệ người trưởng thành của cả thành phố sẽ dùng dịch vụ.

**Lời giải.** *Nêu:* $p$ là tỉ lệ người trưởng thành của cả thành phố sẽ dùng dịch vụ; độ tin cậy $95\%$.

*Kế hoạch:* khoảng tin cậy $z$ một mẫu cho $p$. Ngẫu nhiên: mẫu ngẫu nhiên. $10\%$: $500$ nhỏ hơn $10\%$ số người trưởng thành của thành phố. Số đếm: $290$ thành công và $210$ thất bại, đều ít nhất $10$.

*Thực hiện:* $\hat p=\dfrac{290}{500}=0{,}58$ và sai số chuẩn là $\sqrt{\dfrac{0{,}58(0{,}42)}{500}}\approx0{,}02207$, nên khoảng là $0{,}58\pm1{,}96(0{,}02207)=0{,}58\pm0{,}0433$, tức $(0{,}5367;\ 0{,}6233)$.

*Kết luận:* ta tin cậy $95\%$ rằng khoảng từ $0{,}537$ đến $0{,}623$ chứa tỉ lệ thật của người trưởng thành trong thành phố sẽ dùng dịch vụ. Vì mọi giá trị đều lớn hơn $0{,}5$, dữ liệu cho bằng chứng thuyết phục rằng đa số sẽ dùng dịch vụ.
:::

Để đạt sai số biên $M$, chọn $n\ge\left(\dfrac{z^*}{M}\right)^2\hat p(1-\hat p)$, dùng $\hat p=0{,}5$ nếu chưa có ước lượng trước; luôn làm tròn **lên**.

:::example Chọn cỡ mẫu
Một công ty thăm dò muốn có khoảng tin cậy $95\%$ cho một tỉ lệ với sai số biên không quá $0{,}03$, khi chưa có ước lượng trước. Cỡ mẫu nhỏ nhất là
A. $33$
B. $1068$
C. $1067$
D. $4268$

**Lời giải.** Khi chưa có ước lượng trước, ta dùng $\hat p=0{,}5$, giá trị cho sai số chuẩn lớn nhất.

Khi đó $n\ge\left(\dfrac{1{,}96}{0{,}03}\right)^2(0{,}5)(0{,}5)\approx1067{,}1$, và ta làm tròn lên số nguyên kế tiếp.

Vậy cỡ mẫu nhỏ nhất là $1068$, chọn đáp án **B**. Phương án C làm tròn xuống, sẽ cho sai số biên hơi lớn hơn $0{,}03$.
:::

## Kiểm định ý nghĩa cho một tỉ lệ

Kiểm định cân nhắc bằng chứng **chống lại** giả thuyết không $H_0:p=p_0$ để ủng hộ giả thuyết đối $H_a:p<p_0$, $p>p_0$ hoặc $p\ne p_0$. Giả sử $H_0$ đúng, thống kê kiểm định là
$$z=\frac{\hat p-p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}},$$
và điều kiện số đếm dùng $np_0$ và $n(1-p_0)$. **Giá trị P** là xác suất, khi giả sử $H_0$ đúng, để nhận được một thống kê ít nhất cũng cực đoan như giá trị quan sát được. Nếu giá trị P nhỏ hơn mức ý nghĩa $\alpha$, bác bỏ $H_0$: có bằng chứng thuyết phục ủng hộ $H_a$. Ngược lại thì không bác bỏ $H_0$; ta không bao giờ "chấp nhận" nó.

:::example Kiểm định cho một tỉ lệ
Một công ty xe buýt khẳng định $90\%$ chuyến xe đến đúng giờ. Một mẫu ngẫu nhiên $200$ chuyến cho thấy $170$ chuyến đúng giờ. Với $\alpha=0{,}05$, có bằng chứng thuyết phục rằng tỉ lệ thật nhỏ hơn $0{,}9$ không?

**Lời giải.** *Nêu:* $H_0:p=0{,}9$ và $H_a:p<0{,}9$, với $p$ là tỉ lệ thật các chuyến xe của công ty đến đúng giờ; $\alpha=0{,}05$.

*Kế hoạch:* kiểm định $z$ một mẫu cho $p$. Mẫu ngẫu nhiên; $200$ nhỏ hơn $10\%$ tổng số chuyến; $np_0=180$ và $n(1-p_0)=20$, đều ít nhất $10$.

*Thực hiện:* $\hat p=\dfrac{170}{200}=0{,}85$, độ lệch chuẩn khi $H_0$ đúng là $\sqrt{\dfrac{0{,}9(0{,}1)}{200}}\approx0{,}02121$, nên $z=\dfrac{0{,}85-0{,}9}{0{,}02121}\approx-2{,}357$ và giá trị P là $P(Z<-2{,}357)\approx0{,}0092$.

*Kết luận:* vì $0{,}0092<0{,}05$ nên ta bác bỏ $H_0$. Có bằng chứng thuyết phục rằng dưới $90\%$ số chuyến xe của công ty đến đúng giờ.
:::

## Hai tỉ lệ

Với hai mẫu ngẫu nhiên độc lập hoặc hai nhóm trong một thí nghiệm có phân nhóm ngẫu nhiên:

- **Khoảng tin cậy:** $(\hat p_1-\hat p_2)\pm z^*\sqrt{\dfrac{\hat p_1(1-\hat p_1)}{n_1}+\dfrac{\hat p_2(1-\hat p_2)}{n_2}}$.
- **Kiểm định $H_0:p_1-p_2=0$:** dùng tỉ lệ gộp $\hat p_c=\dfrac{x_1+x_2}{n_1+n_2}$ và $z=\dfrac{\hat p_1-\hat p_2}{\sqrt{\hat p_c(1-\hat p_c)\left(\dfrac{1}{n_1}+\dfrac{1}{n_2}\right)}}$.

Kiểm tra điều kiện số đếm ở từng mẫu. Nếu khoảng chứa $0$ thì "không có khác biệt" là hợp lí.

:::example Hiệu hai tỉ lệ
Trong hai mẫu ngẫu nhiên, mỗi mẫu $300$ học sinh từ hai thành phố, có $120$ học sinh ở thành phố A và $90$ ở thành phố B đi bộ đến trường. Khoảng tin cậy $95\%$ cho $p_A-p_B$ là $(0{,}024;\ 0{,}176)$. Kết luận nào đúng?
A. Không có bằng chứng về khác biệt, vì khoảng hẹp.
B. Tỉ lệ đi bộ ở thành phố A nằm giữa $2{,}4\%$ và $17{,}6\%$.
C. $95\%$ học sinh thành phố A đi bộ nhiều hơn học sinh thành phố B.
D. Vì cả khoảng nằm trên $0$ nên có bằng chứng thuyết phục rằng tỉ lệ học sinh đi bộ ở thành phố A cao hơn.

**Lời giải.** Khoảng tin cậy ước lượng **hiệu** $p_A-p_B$: ở đây $\hat p_A-\hat p_B=0{,}4-0{,}3=0{,}1$, với sai số biên khoảng $0{,}076$.

Mọi giá trị hợp lí của hiệu đều dương, nên $0$ không phải giá trị hợp lí và tỉ lệ đi bộ ở thành phố A cao hơn.

Vậy kết luận đúng là D, chọn đáp án **D**.
:::

## Các loại sai lầm và lực kiểm định

| | $H_0$ đúng | $H_0$ sai |
|---|---|---|
| Bác bỏ $H_0$ | **Sai lầm loại I** (xác suất $\alpha$) | đúng: lực kiểm định |
| Không bác bỏ $H_0$ | đúng | **Sai lầm loại II** |

**Lực kiểm định** (power) là xác suất bác bỏ $H_0$ khi một giả thuyết đối cụ thể là đúng. Lực tăng khi cỡ mẫu lớn hơn, $\alpha$ lớn hơn, và giá trị thật càng xa $p_0$. Mô tả sai lầm theo tình huống: trong ví dụ xe buýt, sai lầm loại I là kết luận dưới $90\%$ số chuyến đúng giờ trong khi thực tế đúng là $90\%$.

:::warning Những cái bẫy thường gặp
- **Giả thuyết nói về tham số:** viết $p$, không bao giờ viết $\hat p$, trong $H_0$ và $H_a$.
- **Kiểm định dùng $p_0$:** trong kiểm định, độ lệch chuẩn dùng $p_0$; trong khoảng tin cậy, sai số chuẩn dùng $\hat p$.
- **"Chấp nhận $H_0$":** hãy nói "không bác bỏ"; dữ liệu không phải bằng chứng cho $H_0$.
- **Ý nghĩa giá trị P:** không phải xác suất để $H_0$ đúng.
- **Điều kiện gắn với tình huống:** "mẫu là ngẫu nhiên", "$500<10\%$ số người trưởng thành của thành phố", kèm số đếm cụ thể.
:::

:::terms
- confidence interval / confidence level | khoảng tin cậy / độ tin cậy
- margin of error | sai số biên
- standard error | sai số chuẩn
- critical value | giá trị tới hạn
- null / alternative hypothesis | giả thuyết không / giả thuyết đối
- significance level | mức ý nghĩa
- P-value | giá trị P
- Type I / Type II error | sai lầm loại I / loại II
- power | lực kiểm định
- pooled proportion | tỉ lệ gộp
:::

## Bài tập tương tự

:::exercise
Trong một mẫu ngẫu nhiên $400$ học sinh, $140$ em nói mình đọc sách mỗi ngày. Lập khoảng tin cậy $90\%$ cho tỉ lệ học sinh đọc sách mỗi ngày. Giả sử các điều kiện được thoả mãn.

::hint
**Kiến thức:** $\hat p\pm1{,}645\sqrt{\dfrac{\hat p(1-\hat p)}{n}}$.

::solution
Tỉ lệ mẫu là $\hat p=\dfrac{140}{400}=0{,}35$, và sai số chuẩn là $\sqrt{\dfrac{0{,}35(0{,}65)}{400}}\approx0{,}02385$.

Sai số biên là $1{,}645(0{,}02385)\approx0{,}0392$, nên khoảng là $0{,}35\pm0{,}0392$, tức $(0{,}3108;\ 0{,}3892)$.

Vậy ta tin cậy $90\%$ rằng khoảng từ $31{,}1\%$ đến $38{,}9\%$ học sinh đọc sách mỗi ngày.

**Đáp số.** $(0{,}3108;\ 0{,}3892)$.
:::

:::exercise
Một trường khẳng định $75\%$ học sinh tốt nghiệp vào đại học. Một phóng viên nghi ngờ con số thật thấp hơn. Nêu các giả thuyết, định nghĩa tham số.

::hint
**Kiến thức:** lời khẳng định đặt ở $H_0$; điều nghi ngờ đặt ở $H_a$.

::solution
Gọi $p$ là tỉ lệ thật học sinh tốt nghiệp của trường vào đại học.

Lời khẳng định là giả thuyết không, còn nghi ngờ của phóng viên là giả thuyết đối: $H_0:p=0{,}75$ và $H_a:p<0{,}75$.

Vậy các giả thuyết là $H_0:p=0{,}75$ với $H_a:p<0{,}75$.

**Đáp số.** $H_0:p=0{,}75$, $H_a:p<0{,}75$.
:::

:::exercise
Một kiểm định $H_0:p=0{,}5$ với $H_a:p>0{,}5$ cho giá trị P bằng $0{,}03$. Diễn giải giá trị P và nêu kết luận với $\alpha=0{,}05$ và với $\alpha=0{,}01$.

::hint
**Kiến thức:** giá trị P được tính khi giả sử $H_0$ đúng.

::solution
Giả sử tỉ lệ thật là $0{,}5$, xác suất để chỉ do ngẫu nhiên mà nhận được tỉ lệ mẫu lớn bằng hoặc lớn hơn giá trị quan sát được là $0{,}03$.

Với $\alpha=0{,}05$, $0{,}03<0{,}05$ nên ta bác bỏ $H_0$: có bằng chứng thuyết phục rằng $p>0{,}5$. Với $\alpha=0{,}01$, $0{,}03>0{,}01$ nên ta không bác bỏ $H_0$.

Vậy kết luận phụ thuộc vào mức ý nghĩa được chọn trước khi kiểm định.

**Đáp số.** Bác bỏ ở mức $0{,}05$; không bác bỏ ở mức $0{,}01$.
:::

:::exercise
Sai số biên của khoảng tin cậy cho $p$ thay đổi thế nào trong mỗi trường hợp?
a) Độ tin cậy tăng từ $95\%$ lên $99\%$.
b) Cỡ mẫu tăng gấp $4$ lần.

::hint
**Kiến thức:** $M=z^*\sqrt{\dfrac{\hat p(1-\hat p)}{n}}$.

::solution
a) Độ tin cậy cao hơn cần giá trị tới hạn lớn hơn, $2{,}576$ thay vì $1{,}96$, nên sai số biên tăng.

b) Sai số chuẩn có $\sqrt n$ ở mẫu số, nên tăng $n$ gấp $4$ lần thì sai số biên giảm một nửa.

Vậy sai số biên lớn hơn ở trường hợp a) và giảm một nửa ở trường hợp b).

**Đáp số.** a) lớn hơn; b) giảm một nửa.
:::

:::exercise
Một nhà nghiên cứu muốn kiểm định $H_0:p=0{,}1$ với mẫu ngẫu nhiên $40$ người. Điều kiện số đếm có thoả mãn không?

::hint
**Kiến thức:** kiểm tra $np_0$ và $n(1-p_0)$.

::solution
Với kiểm định, các số đếm kì vọng khi $H_0$ đúng là $np_0=40(0{,}1)=4$ và $n(1-p_0)=36$.

Vì $4<10$ nên điều kiện số đếm không thoả mãn, do đó phân phối mẫu của $\hat p$ có thể không xấp xỉ chuẩn.

Vậy không nên dùng kiểm định $z$; cần mẫu lớn hơn.

**Đáp số.** Không, vì $np_0=4<10$.
:::

## Bài tập vận dụng

:::exercise
Một ứng viên khẳng định $60\%$ cử tri ủng hộ mình. Trong mẫu ngẫu nhiên $250$ cử tri, $138$ người ủng hộ. Với $\alpha=0{,}05$, có bằng chứng thuyết phục rằng sự ủng hộ thấp hơn $60\%$ không?

::hint
**Kiến thức:** $\hat p=0{,}552$; độ lệch chuẩn $\sqrt{\dfrac{0{,}6(0{,}4)}{250}}$.

::solution
*Nêu:* $H_0:p=0{,}6$, $H_a:p<0{,}6$, với $p$ là tỉ lệ thật cử tri ủng hộ ứng viên; $\alpha=0{,}05$.

*Kế hoạch:* kiểm định $z$ một mẫu. Mẫu ngẫu nhiên; $250$ nhỏ hơn $10\%$ số cử tri; $np_0=150$ và $n(1-p_0)=100$, đều ít nhất $10$.

*Thực hiện:* $\hat p=\dfrac{138}{250}=0{,}552$, nên $z=\dfrac{0{,}552-0{,}6}{\sqrt{0{,}24/250}}\approx\dfrac{-0{,}048}{0{,}03098}\approx-1{,}549$, và giá trị P xấp xỉ $0{,}0607$.

*Kết luận:* vì $0{,}0607>0{,}05$ nên ta không bác bỏ $H_0$. Vậy không có bằng chứng thuyết phục rằng sự ủng hộ dưới $60\%$.

**Đáp số.** Giá trị P $\approx0{,}0607$; không có bằng chứng thuyết phục.
:::

:::exercise
Trong một thí nghiệm, $300$ bệnh nhân được phân ngẫu nhiên vào nhóm điều trị mới hoặc điều trị tiêu chuẩn, mỗi nhóm $150$ người. Có $45$ bệnh nhân điều trị mới và $30$ bệnh nhân điều trị tiêu chuẩn đỡ bệnh. Với $\alpha=0{,}05$, kiểm định xem cách điều trị mới có cho tỉ lệ đỡ bệnh cao hơn không.

::hint
**Kiến thức:** tỉ lệ gộp $\hat p_c=\dfrac{75}{300}=0{,}25$.

::solution
*Nêu:* $H_0:p_M-p_T=0$, $H_a:p_M-p_T>0$, với $p_M$ và $p_T$ là tỉ lệ đỡ bệnh thật của cách điều trị mới và tiêu chuẩn; $\alpha=0{,}05$.

*Kế hoạch:* kiểm định $z$ hai mẫu. Các cách điều trị được phân ngẫu nhiên; các số đếm $45,105,30,120$ đều ít nhất $10$.

*Thực hiện:* $\hat p_M=0{,}30$, $\hat p_T=0{,}20$ và $\hat p_c=0{,}25$, nên độ lệch chuẩn là $\sqrt{0{,}25(0{,}75)\left(\dfrac{1}{150}+\dfrac{1}{150}\right)}=\sqrt{0{,}0025}=0{,}05$ và $z=\dfrac{0{,}10}{0{,}05}=2{,}0$, với giá trị P xấp xỉ $0{,}0228$.

*Kết luận:* vì $0{,}0228<0{,}05$ nên ta bác bỏ $H_0$. Vậy có bằng chứng thuyết phục rằng cách điều trị mới làm tăng tỉ lệ đỡ bệnh với những bệnh nhân như trong thí nghiệm.

**Đáp số.** $z=2{,}0$, giá trị P $\approx0{,}0228$; bác bỏ $H_0$.
:::

:::exercise
Một khảo sát trước ước lượng khoảng $30\%$ cư dân dùng thư viện. Cần mẫu cỡ bao nhiêu để khoảng tin cậy $95\%$ có sai số biên không quá $0{,}04$?

::hint
**Kiến thức:** $n\ge\left(\dfrac{z^*}{M}\right)^2\hat p(1-\hat p)$ với $\hat p=0{,}3$.

::solution
Dùng ước lượng trước $\hat p=0{,}3$, ta cần $n\ge\left(\dfrac{1{,}96}{0{,}04}\right)^2(0{,}3)(0{,}7)$.

Điều này cho $n\ge49^2\times0{,}21=504{,}21$, và ta làm tròn lên.

Vậy cần mẫu ít nhất $505$ cư dân.

**Đáp số.** $505$.
:::

:::exercise Thử thách
Trong ví dụ về ứng viên ở trên, giả sử sự ủng hộ thật là $55\%$. Kết luận có thể đã mắc sai lầm loại nào? Nêu hai cách làm kiểm định mạnh hơn.

::hint
**Kiến thức:** ta đã không bác bỏ $H_0$.

::solution
Kiểm định đã không bác bỏ $H_0:p=0{,}6$. Nếu sự ủng hộ thật là $55\%$ thì $H_0$ sai, nên việc không bác bỏ nó là sai lầm loại II.

Lực kiểm định, tức xác suất phát hiện được sự ủng hộ dưới $60\%$, có thể tăng bằng cách lấy mẫu lớn hơn hoặc dùng mức ý nghĩa lớn hơn, chẳng hạn $\alpha=0{,}10$.

Vậy có thể đã mắc sai lầm loại II, và tăng $n$ hoặc tăng $\alpha$ sẽ làm tăng lực kiểm định.

**Đáp số.** Sai lầm loại II; tăng $n$ hoặc $\alpha$.
:::

:::quiz
::mc
Giá trị tới hạn nào dùng cho khoảng tin cậy $95\%$ của một tỉ lệ?
A. $1{,}645$
B. $2{,}576$
C. $1{,}96$
D. $0{,}95$
::key C
$95\%$ diện tích của phân phối chuẩn tắc nằm giữa $-1{,}96$ và $1{,}96$.

::mc
Giả thuyết không nào viết đúng?
A. $H_0:p=0{,}4$
B. $H_0:\hat p=0{,}4$
C. $H_0:p>0{,}4$
D. $H_0:\hat p>0{,}4$
::key A
Giả thuyết nói về tham số, và $H_0$ là đẳng thức.

::mc
Sai lầm loại I xảy ra khi ta
A. không bác bỏ một $H_0$ sai
B. bác bỏ một $H_0$ đúng
C. tính sai giá trị P
D. dùng sai cỡ mẫu
::key B
Xác suất của nó là $\alpha$.

::mc
Giá trị P bằng $0{,}002$ nghĩa là
A. có $0{,}2\%$ khả năng $H_0$ đúng
B. $H_a$ đúng với xác suất $0{,}998$
C. mẫu quá nhỏ
D. nếu $H_0$ đúng, kết quả cực đoan như vậy chỉ xảy ra khoảng $0{,}2\%$ số lần
::key D
Giá trị P được tính khi giả sử $H_0$ đúng.

::tf
Một khoảng tin cậy $95\%$ cho $p$ là $(0{,}42;\ 0{,}50)$. Xét tính đúng sai của các mệnh đề sau:
a) Tỉ lệ mẫu là $0{,}46$.
b) Sai số biên là $0{,}04$.
c) $p=0{,}55$ là một giá trị hợp lí.
d) Khoảng tin cậy $99\%$ từ cùng dữ liệu sẽ rộng hơn.
::key T T F T
$0{,}55$ nằm ngoài khoảng.

::sa
Một khoảng tin cậy $95\%$ cho $p$ là $(0{,}31;\ 0{,}39)$. Tìm sai số biên.
::key 0,04
Một nửa độ rộng: $\dfrac{0{,}39-0{,}31}{2}$.

::sa
Phải tăng $n$ lên bao nhiêu lần để sai số biên giảm một nửa?
::key 4
Sai số biên tỉ lệ với $\dfrac{1}{\sqrt n}$.
:::
