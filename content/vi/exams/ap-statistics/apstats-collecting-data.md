---
title: Chọn mẫu, nghiên cứu quan sát và thí nghiệm
description: AP Statistics Unit 1: câu hỏi khảo sát, phương pháp chọn mẫu và độ chệch, nghiên cứu quan sát và thí nghiệm, thiết kế thí nghiệm, phạm vi suy luận.
minutes: 50
---

:::goals
- Viết và đánh giá câu hỏi khảo sát thống kê.
- Mô tả mẫu ngẫu nhiên đơn giản, mẫu phân tầng, mẫu cụm và mẫu hệ thống, nhận ra các nguồn gây chệch.
- Phân biệt nghiên cứu quan sát với thí nghiệm, giải thích hiện tượng gây nhiễu.
- Mô tả thiết kế ngẫu nhiên hoàn toàn, khối ngẫu nhiên hoặc cặp ghép, kể cả cách phân nhóm ngẫu nhiên.
- Nêu phạm vi suy luận: khi nào được mở rộng kết quả, khi nào được kết luận nhân quả.
:::

Cách thu thập dữ liệu quyết định dữ liệu cho ta biết được gì. Một mẫu rất lớn nhưng thu thập kém có thể tệ hơn một mẫu nhỏ thu thập tốt, và một liên hệ mạnh trong nghiên cứu quan sát không chứng tỏ quan hệ nhân quả. Câu tự luận số 1 trong đề mới nói đúng về những ý này, nên dùng thuật ngữ chính xác và mô tả quy trình rõ ràng sẽ được điểm.

## Câu hỏi khảo sát và chọn mẫu

**Câu hỏi khảo sát thống kê** hỏi về một nhóm, trả lời được bằng dữ liệu có biến động, và nêu rõ biến cần quan tâm, ví dụ "Học sinh trường ta thường ngủ bao nhiêu giờ vào các đêm trước ngày đi học?"

**Tổng thể** (population) là toàn bộ nhóm cần tìm hiểu; **mẫu** (sample) là phần ta thực sự đo; **tổng điều tra** (census) là đo tất cả. **Tham số** (parameter) mô tả tổng thể (như $p$ hay $\mu$), còn **thống kê** (statistic) mô tả mẫu (như $\hat p$ hay $\bar x$).

| Phương pháp | Cách làm |
|---|---|
| Mẫu ngẫu nhiên đơn giản (SRS) | mọi nhóm $n$ cá thể đều có cùng khả năng được chọn |
| Mẫu ngẫu nhiên phân tầng | chia tổng thể thành các nhóm tương đồng (tầng), lấy một SRS từ **mỗi** tầng |
| Mẫu cụm | chia thành các nhóm (cụm), chọn ngẫu nhiên **một số** cụm, đo mọi cá thể trong đó |
| Mẫu ngẫu nhiên hệ thống | chọn ngẫu nhiên điểm bắt đầu, rồi cứ cách $k$ cá thể lấy một |

Phân tầng theo một biến có liên quan đến biến phản hồi cho ước lượng chính xác hơn; chọn mẫu cụm tiết kiệm thời gian và chi phí.

:::example Gọi tên phương pháp
Một trường có bốn khối lớp. Hiệu trưởng chọn ngẫu nhiên $25$ học sinh ở mỗi khối và hỏi ý kiến về căng tin. Đây là
A. mẫu ngẫu nhiên đơn giản
B. mẫu cụm
C. mẫu ngẫu nhiên phân tầng
D. mẫu thuận tiện

**Lời giải.** Tổng thể được chia thành các nhóm là các khối, và một mẫu ngẫu nhiên được lấy từ **mọi** nhóm.

Với mẫu cụm, chỉ một số nhóm được chọn và mọi cá thể trong đó được khảo sát; với SRS, khối lớp không đóng vai trò gì.

Vậy đây là mẫu ngẫu nhiên phân tầng với các khối là tầng, chọn đáp án **C**.
:::

## Độ chệch

**Độ chệch** (bias) nghĩa là phương pháp có xu hướng hệ thống ước lượng cao hơn hoặc thấp hơn giá trị cần tìm. Chọn mẫu ngẫu nhiên loại bỏ độ chệch do chọn, nhưng không loại được mọi loại độ chệch.

| Loại độ chệch | Nguyên nhân |
|---|---|
| Mẫu thuận tiện | chọn những cá thể dễ tiếp cận |
| Tự nguyện trả lời | người ta tự chọn mình; ý kiến mạnh bị đại diện quá mức |
| Thiếu bao phủ | một số thành viên của tổng thể không thể được chọn |
| Không trả lời | cá thể được chọn không liên lạc được hoặc từ chối |
| Chệch do trả lời | cách hỏi, người phỏng vấn hay chủ đề khiến câu trả lời không chính xác |

Khi được hỏi về độ chệch, hãy gọi tên nó, giải thích **vì sao** xảy ra và nêu **chiều** có khả năng của nó.

:::example Một cuộc bình chọn trực tuyến
Một trang tin mời độc giả bình chọn trực tuyến xem thành phố có nên cấm ô tô vào trung tâm không. Trong $3000$ phiếu, $78\%$ đồng ý. Khẳng định nào mô tả đúng nhất kết quả này?
A. Kết quả không chệch vì mẫu lớn.
B. Kết quả nhiều khả năng bị chệch do tự nguyện trả lời, nên $78\%$ có thể không phản ánh cư dân thành phố.
C. Kết quả bị chệch do không trả lời vì một số độc giả không bình chọn.
D. Đây là mẫu phân tầng của độc giả trang tin.

**Lời giải.** Độc giả tự quyết định có bình chọn hay không, và những người có ý kiến mạnh, ở đây nhiều khả năng là những người rất ủng hộ lệnh cấm, dễ tham gia hơn.

Mẫu lớn không sửa được phương pháp chệch, và những độc giả không bình chọn chưa từng được chọn, nên đây không phải độ chệch do không trả lời.

Vậy kết quả nhiều khả năng bị chệch do tự nguyện trả lời, chọn đáp án **B**.
:::

## Nghiên cứu quan sát và thí nghiệm

Trong **nghiên cứu quan sát**, nhà nghiên cứu đo các biến mà không tác động lên cá thể. Trong **thí nghiệm**, họ chủ động áp đặt các **nghiệm thức** (treatments) lên **đơn vị thí nghiệm** và đo một **biến phản hồi**. Hai biến **gây nhiễu** nhau (confounded) khi không tách được ảnh hưởng của chúng lên biến phản hồi; nghiên cứu quan sát dễ bị gây nhiễu, đó là lí do chúng không chứng minh được quan hệ nhân quả.

Nguyên tắc của một thí nghiệm tốt:

1. **So sánh** hai hay nhiều nghiệm thức, thường có nhóm đối chứng hoặc **giả dược** (placebo).
2. **Phân nhóm ngẫu nhiên** các nghiệm thức cho các đơn vị, để tạo các nhóm gần tương đương.
3. **Kiểm soát** các biến khác có thể ảnh hưởng đến biến phản hồi.
4. **Lặp lại**: đủ nhiều đơn vị trong mỗi nhóm nghiệm thức.

**Làm mù** (blinding) giúp đối tượng (mù đơn), hoặc cả đối tượng lẫn người đo kết quả (mù đôi), không biết ai nhận nghiệm thức nào.

**Các thiết kế.** Trong thiết kế **ngẫu nhiên hoàn toàn**, mọi đơn vị được phân nhóm ngẫu nhiên. Trong thiết kế **khối ngẫu nhiên**, các đơn vị trước hết được gom thành các khối tương đồng về một biến ảnh hưởng đến kết quả, rồi phân nhóm ngẫu nhiên trong từng khối. Thiết kế **cặp ghép** (matched pairs) là thiết kế khối với khối gồm hai đơn vị, hoặc mỗi đối tượng nhận cả hai nghiệm thức theo thứ tự ngẫu nhiên.

:::example Mô tả cách phân nhóm ngẫu nhiên
Một nhà nghiên cứu có $40$ tình nguyện viên để so sánh hai kĩ thuật ghi nhớ A và B. Mô tả cách phân ngẫu nhiên các tình nguyện viên thành hai nhóm $20$ người.

**Lời giải.** Viết tên mỗi tình nguyện viên lên một mảnh giấy giống hệt nhau, trộn đều trong hộp, rồi rút không nhìn $20$ mảnh; những người đó dùng kĩ thuật A, $20$ người còn lại dùng kĩ thuật B.

Cách tương đương: đánh số tình nguyện viên từ $1$ đến $40$ và dùng máy sinh số ngẫu nhiên chọn $20$ số khác nhau từ $1$ đến $40$ cho kĩ thuật A.

Vậy mỗi tình nguyện viên có cùng khả năng nhận mỗi kĩ thuật, khiến hai nhóm gần tương đương trước khi áp dụng nghiệm thức.
:::

## Phạm vi suy luận

| | Có phân nhóm ngẫu nhiên | Không phân nhóm ngẫu nhiên |
|---|---|---|
| **Mẫu ngẫu nhiên** | mở rộng ra tổng thể; kết luận nhân quả | mở rộng ra tổng thể; chỉ là liên hệ |
| **Không phải mẫu ngẫu nhiên** | nhân quả, chỉ cho các đơn vị này | liên hệ, chỉ cho các đơn vị này |

:::example Ta kết luận được gì?
Trong một thí nghiệm được thiết kế tốt, $60$ học sinh tình nguyện được phân ngẫu nhiên vào nhóm học có nhạc hoặc học trong yên lặng, và nhóm yên lặng đạt điểm cao hơn có ý nghĩa. Kết luận nào là hợp lí?
A. Học trong yên lặng làm điểm cao hơn với mọi học sinh trong cả nước.
B. Học trong yên lặng có liên hệ với điểm cao hơn, nhưng không kết luận được nhân quả.
C. Học trong yên lặng làm điểm cao hơn với những học sinh giống các tình nguyện viên này.
D. Không kết luận được gì vì mẫu không ngẫu nhiên.

**Lời giải.** Việc phân nhóm ngẫu nhiên các nghiệm thức cho phép kết luận nhân quả.

Đối tượng là tình nguyện viên, không phải mẫu ngẫu nhiên, nên không mở rộng kết quả ra mọi học sinh được.

Vậy ta kết luận được rằng học trong yên lặng làm điểm cao hơn với những học sinh giống các tình nguyện viên này, chọn đáp án **C**.
:::

:::warning Những cái bẫy thường gặp
- **Nói "ngẫu nhiên" mà không nêu cách làm:** mô tả quy trình: giấy rút trong hộp hoặc máy sinh số ngẫu nhiên, kèm cách đánh số.
- **Phân tầng và cụm:** mẫu phân tầng lấy từ mọi nhóm; mẫu cụm lấy trọn vẹn một số nhóm.
- **Mẫu lớn nhưng chệch:** cỡ mẫu không loại bỏ được độ chệch.
- **Chọn mẫu ngẫu nhiên và phân nhóm ngẫu nhiên:** chọn mẫu cho phép mở rộng; phân nhóm cho phép kết luận nhân quả.
- **Chiều của độ chệch:** nói rõ ước lượng nhiều khả năng quá cao hay quá thấp, và vì sao.
:::

:::terms
- population / sample / census | tổng thể / mẫu / tổng điều tra
- simple random sample | mẫu ngẫu nhiên đơn giản
- stratified / cluster / systematic sample | mẫu phân tầng / mẫu cụm / mẫu hệ thống
- bias | độ chệch (sai lệch)
- voluntary response / nonresponse | tự nguyện trả lời / không trả lời
- observational study / experiment | nghiên cứu quan sát / thí nghiệm
- treatment / experimental unit | nghiệm thức / đơn vị thí nghiệm
- confounding | gây nhiễu (lẫn lộn)
- random assignment | phân nhóm ngẫu nhiên
- blinding / placebo | làm mù / giả dược
- randomized block / matched pairs | khối ngẫu nhiên / cặp ghép
:::

## Bài tập tương tự

:::exercise
Quản lí một cửa hàng chọn ngẫu nhiên một số từ $1$ đến $10$, chẳng hạn $4$, rồi khảo sát khách hàng thứ $4$, $14$, $24$, … trong ngày. Gọi tên phương pháp chọn mẫu và cho biết nó có ngẫu nhiên không.

::hint
**Kiến thức:** điểm bắt đầu ngẫu nhiên, rồi cứ cách $k$ cá thể lấy một.

::solution
Người quản lí chọn ngẫu nhiên điểm bắt đầu rồi cứ $10$ khách lấy một, nên đây là mẫu ngẫu nhiên hệ thống.

Phương pháp có tính ngẫu nhiên vì điểm bắt đầu được chọn ngẫu nhiên, nên mỗi khách hàng có cùng khả năng được chọn là $\dfrac{1}{10}$.

Vậy phương pháp là mẫu ngẫu nhiên hệ thống.

**Đáp số.** Mẫu ngẫu nhiên hệ thống; có.
:::

:::exercise
Để khảo sát học sinh, một trường chọn ngẫu nhiên $5$ trong $40$ lớp và khảo sát mọi học sinh ở các lớp đó. Gọi tên phương pháp và giải thích nó khác mẫu phân tầng thế nào.

::hint
**Kiến thức:** lấy mẫu ở mọi nhóm hay chỉ một số nhóm?

::solution
Các lớp là các nhóm học sinh, một số nhóm được chọn ngẫu nhiên, và mọi người trong nhóm được chọn đều được khảo sát: đây là mẫu cụm.

Với mẫu phân tầng, ta sẽ lấy một mẫu ngẫu nhiên học sinh từ **mọi** lớp (hoặc mọi khối) thay vì khảo sát trọn lớp.

Vậy đây là mẫu cụm; nó rẻ hơn, nhưng các lớp có thể khác nhau.

**Đáp số.** Mẫu cụm.
:::

:::exercise
Các nhà nghiên cứu ghi lại lượng cà phê mỗi ngày và số giờ ngủ của $500$ người trưởng thành. Người uống nhiều cà phê hơn ngủ ít hơn tính trung bình. Đây có phải thí nghiệm không? Có kết luận được cà phê làm ngủ ít đi không?

::hint
**Kiến thức:** có áp đặt nghiệm thức không?

::solution
Các nhà nghiên cứu chỉ ghi lại những gì người tham gia vốn làm; không có nghiệm thức nào được áp đặt, nên đây là nghiên cứu quan sát, không phải thí nghiệm.

Do có thể có biến gây nhiễu, chẳng hạn người làm công việc căng thẳng vừa uống nhiều cà phê vừa ngủ ít, ta không tách được ảnh hưởng của cà phê khỏi các biến khác.

Vậy không kết luận được cà phê làm ngủ ít đi; chỉ nói được hai biến có liên hệ.

**Đáp số.** Nghiên cứu quan sát; không kết luận nhân quả.
:::

:::exercise
Một kĩ sư nông nghiệp bón phân A, phân B hoặc không bón cho $30$ thửa ruộng và đo năng suất lúa trên mỗi thửa. Xác định các nghiệm thức, đơn vị thí nghiệm và biến phản hồi.

::hint
**Kiến thức:** nghiệm thức là cái được áp dụng; đơn vị là đối tượng được áp dụng.

::solution
Các nghiệm thức là ba điều kiện được áp dụng: phân A, phân B và không bón phân (đóng vai trò đối chứng).

Đơn vị thí nghiệm là $30$ thửa ruộng, và biến phản hồi là năng suất lúa của mỗi thửa.

Vậy có $3$ nghiệm thức, $30$ đơn vị thí nghiệm, và biến phản hồi là năng suất.

**Đáp số.** Nghiệm thức: A, B, không bón; đơn vị: $30$ thửa ruộng; phản hồi: năng suất.
:::

:::exercise
Một phiếu khảo sát hỏi: "Bạn có đồng ý rằng ngày học ở trường quá dài không?" Chỉ ra vấn đề và viết lại câu hỏi.

::hint
**Kiến thức:** chệch do cách hỏi.

::solution
Cách hỏi đẩy người trả lời về phía đồng ý, nên câu hỏi gây chệch do trả lời, và tỉ lệ người cho rằng ngày học quá dài nhiều khả năng bị ước lượng quá cao.

Một cách hỏi trung lập là: "Bạn thấy độ dài của ngày học là quá dài, vừa phải hay quá ngắn?"

Vậy vấn đề nằm ở cách hỏi dẫn dắt, và câu hỏi trung lập đưa ra các lựa chọn cân bằng.

**Đáp số.** Chệch do cách hỏi; dùng câu hỏi trung lập.
:::

## Bài tập vận dụng

:::exercise
Kĩ sư ở bài trước muốn phân ba nghiệm thức cho $30$ thửa ruộng, mỗi nghiệm thức $10$ thửa. Mô tả cách làm bằng máy sinh số ngẫu nhiên.

::hint
**Kiến thức:** đánh số các đơn vị, rồi chọn các số không lặp lại.

::solution
Đánh số các thửa ruộng từ $1$ đến $30$. Dùng máy sinh số ngẫu nhiên chọn $10$ số nguyên khác nhau từ $1$ đến $30$, bỏ qua số lặp; các thửa đó được bón phân A.

Tiếp theo chọn $10$ số khác nhau trong $20$ số còn lại; các thửa đó được bón phân B, và $10$ thửa cuối cùng không bón phân.

Vậy mỗi thửa ruộng có cùng khả năng nhận mỗi nghiệm thức.

**Đáp số.** Đánh số các thửa và phân nhóm bằng số ngẫu nhiên không lặp.
:::

:::exercise
Một công ty muốn so sánh hai loại đế giày chạy. Mỗi người trong $20$ vận động viên đi một chiếc giày đế A và một chiếc đế B, chân đi đế A được chọn bằng cách tung đồng xu, và độ mòn được đo sau một tháng. Gọi tên thiết kế và giải thích vì sao nó tốt hơn cách cho $10$ người đi đế A và $10$ người đi đế B.

::hint
**Kiến thức:** mỗi vận động viên là một khối gồm hai đơn vị.

::solution
Mỗi vận động viên nhận cả hai nghiệm thức, với chân được chọn ngẫu nhiên, nên đây là thiết kế cặp ghép.

Các vận động viên khác nhau nhiều về cân nặng, quãng đường và cách chạy, những yếu tố ảnh hưởng đến độ mòn. So sánh hai đế trên cùng một người loại bỏ được biến động này khỏi phép so sánh, nên dễ phát hiện khác biệt giữa hai loại đế hơn.

Vậy thiết kế cặp ghép tốt hơn vì nó kiểm soát được khác biệt giữa các vận động viên.

**Đáp số.** Cặp ghép; loại bỏ biến động giữa các vận động viên.
:::

:::exercise
Một trường có $600$ học sinh khối 10, $500$ học sinh khối 11 và $400$ học sinh khối 12. Lấy một mẫu ngẫu nhiên phân tầng $60$ học sinh theo tỉ lệ sĩ số các khối. Mỗi khối được chọn bao nhiêu học sinh?

::hint
**Kiến thức:** $60$ trên $1500$ là $4\%$.

::solution
Trường có $600+500+400=1500$ học sinh, nên mẫu chiếm $\dfrac{60}{1500}=4\%$ mỗi khối.

Do đó mẫu gồm $0{,}04\times600=24$ học sinh khối 10, $0{,}04\times500=20$ học sinh khối 11 và $0{,}04\times400=16$ học sinh khối 12; kiểm tra: $24+20+16=60$.

Vậy số học sinh được chọn ở khối 10, 11, 12 lần lượt là $24$, $20$ và $16$.

**Đáp số.** $24$, $20$, $16$.
:::

:::exercise Thử thách
Một mẫu ngẫu nhiên $1000$ người trưởng thành trong một nước được khảo sát, và những người tập thể dục đều đặn cho biết họ ít căng thẳng hơn. Giải thích điều gì kết luận được và điều gì không.

::hint
**Kiến thức:** có chọn mẫu ngẫu nhiên, nhưng không phân nhóm ngẫu nhiên.

::solution
Vì người tham gia được chọn ngẫu nhiên từ cả nước, mối liên hệ giữa tập thể dục và ít căng thẳng có thể mở rộng ra mọi người trưởng thành trong nước.

Vì việc tập thể dục không được phân ngẫu nhiên, đây là nghiên cứu quan sát, và các biến gây nhiễu như thời gian rảnh hay thu nhập có thể giải thích mối liên hệ. Do đó không kết luận được tập thể dục làm giảm căng thẳng.

Vậy ta mở rộng được mối liên hệ ra tổng thể, nhưng không kết luận được quan hệ nhân quả.

**Đáp số.** Mở rộng được mối liên hệ; không kết luận nhân quả.
:::

:::quiz
::mc
Phương pháp nào bảo vệ tốt nhất trước độ chệch do chọn mẫu?
A. Chọn một mẫu ngẫu nhiên
B. Chọn một mẫu thuận tiện rất lớn
C. Mời người tình nguyện
D. Khảo sát bạn bè của nhà nghiên cứu
::key A
Chọn ngẫu nhiên cho mỗi cá thể một khả năng được chọn xác định.

::mc
Mục đích chính của giả dược là gì?
A. Tăng cỡ mẫu
B. Làm nghiệm thức mạnh hơn
C. Cho phép chọn mẫu ngẫu nhiên
D. Làm trải nghiệm của nhóm đối chứng giống nhất có thể, trừ nghiệm thức thật
::key D
Khi đó hiệu ứng giả dược tác động lên cả hai nhóm.

::mc
Hai biến gây nhiễu nhau khi
A. hệ số tương quan của chúng bằng $0$
B. không tách được ảnh hưởng của chúng lên biến phản hồi
C. cả hai đều là biến định tính
D. một biến là biến phản hồi
::key B
Gây nhiễu là lí do nghiên cứu quan sát không chứng minh được nhân quả.

::mc
Trường hợp nào là thí nghiệm?
A. Ghi lại thời gian dùng màn hình của $200$ thiếu niên
B. So sánh chiều cao của nam và nữ trong một lớp
C. Phân ngẫu nhiên bệnh nhân dùng thuốc mới hoặc giả dược
D. Khảo sát cử tri về một ứng cử viên
::key C
Chỉ C áp đặt một nghiệm thức.

::tf
Trong một thí nghiệm, $50$ tình nguyện viên được phân ngẫu nhiên theo chế độ ăn mới hoặc chế độ ăn thường ngày. Xét tính đúng sai của các mệnh đề sau:
a) Đây là một thí nghiệm.
b) Phân nhóm ngẫu nhiên cho phép kết luận nhân quả.
c) Kết quả mở rộng được cho mọi người trưởng thành.
d) Nhóm ăn như thường ngày đóng vai trò nhóm đối chứng.
::key T T F T
Đối tượng là tình nguyện viên, không phải mẫu ngẫu nhiên.

::sa
Một trường $1200$ học sinh có $300$ học sinh khối 12. Trong một mẫu phân tầng theo tỉ lệ gồm $80$ học sinh, có bao nhiêu học sinh khối 12?
::key 20
$\dfrac{300}{1200}\times80=20$.

::sa
Một thí nghiệm có yếu tố A với $3$ mức và yếu tố B với $2$ mức. Có bao nhiêu nghiệm thức?
::key 6
$3\times2=6$ tổ hợp.
:::
