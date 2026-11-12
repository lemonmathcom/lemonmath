# Generates AP Statistics practice exam 1 (EN + VI) from one bilingual bank.
# Format from May 2027: Section I 42 MC with 4 options (90 min, includes two sets of 3 questions on a shared
# stimulus), Section II 4 FRQ of 10 points (90 min). Item: (en, vi, correct, [3 distractors], expl_en, expl_vi,
# topic[, vi_options]). In VI strings every number with a decimal point must be inside $...$; vi_num converts it.
import re, pathlib
from collections import Counter
R = pathlib.Path(__file__).resolve().parents[2] / 'content'
G = pathlib.Path(__file__).resolve().parent

def vi_num(s):
    return re.sub(r'(\d)\.(\d)', r'\1{,}\2', s)

L = {'od': 'apstats-one-variable-data', 'cd': 'apstats-collecting-data', 'pr': 'apstats-probability-random-variables',
     'sd': 'apstats-sampling-distributions', 'ip': 'apstats-inference-proportions', 'im': 'apstats-inference-means',
     'rg': 'apstats-two-variable-regression'}
TL = {'en': {'od': 'Describing one-variable data', 'cd': 'Sampling, observational studies and experiments',
             'pr': 'Probability and random variables', 'sd': 'Normal models and sampling distributions',
             'ip': 'Inference for proportions', 'im': 'Inference for means', 'rg': 'Two-variable data and linear regression'},
      'vi': {'od': 'Mô tả dữ liệu một biến', 'cd': 'Chọn mẫu, nghiên cứu quan sát và thí nghiệm',
             'pr': 'Xác suất và biến ngẫu nhiên', 'sd': 'Phân phối chuẩn và phân phối mẫu',
             'ip': 'Suy luận cho tỉ lệ', 'im': 'Suy luận cho trung bình', 'rg': 'Dữ liệu hai biến và hồi quy tuyến tính'}}

S1 = "Questions 14–16 refer to the following. A machine produces parts, $10\\%$ of which are defective, independently of each other. Let $X$ be the number of defective parts in a random sample of $8$ parts."
S1v = "Câu 14–16 dùng chung dữ kiện sau. Một máy sản xuất linh kiện, $10\\%$ trong số đó bị lỗi, độc lập với nhau. Gọi $X$ là số linh kiện lỗi trong một mẫu ngẫu nhiên $8$ linh kiện."
S2 = "Questions 36–38 refer to the following. For a group of students, the least-squares line relating weekly practice time $x$ (hours) to quiz score $y$ (points) is $\\hat y=3.2+0.85x$, with $r=0.78$."
S2v = "Câu 36–38 dùng chung dữ kiện sau. Với một nhóm học sinh, đường bình phương nhỏ nhất liên hệ thời gian luyện tập mỗi tuần $x$ (giờ) với điểm bài kiểm tra ngắn $y$ (điểm) là $\\hat y=3.2+0.85x$, với $r=0.78$."

Q = [
# ---- Unit 1: one-variable data (6)
("The annual incomes in a town are strongly skewed right. Which measure best describes a typical income?", "Thu nhập năm ở một thị trấn lệch phải mạnh. Số đo nào mô tả tốt nhất thu nhập điển hình?",
 "The median", ["The mean", "The range", "The standard deviation"],
 "The median is resistant to the few very large incomes that pull the mean up.", "Trung vị bền vững trước vài thu nhập rất lớn vốn kéo trung bình lên.", 'od',
 ["Trung vị", "Trung bình", "Khoảng biến thiên", "Độ lệch chuẩn"]),
("What is the interquartile range of the data $4,\\ 7,\\ 8,\\ 10,\\ 11,\\ 13,\\ 30$?", "Khoảng tứ phân vị của dữ liệu $4,\\ 7,\\ 8,\\ 10,\\ 11,\\ 13,\\ 30$ là",
 "$6$", ["$26$", "$9$", "$5$"],
 "The median is $10$; $Q_1=7$ (median of $4,7,8$) and $Q_3=13$ (median of $11,13,30$), so $\\text{IQR}=6$.",
 "Trung vị là $10$; $Q_1=7$ (trung vị của $4,7,8$) và $Q_3=13$ (trung vị của $11,13,30$), nên $\\text{IQR}=6$.", 'od'),
("A data set has $Q_1=20$ and $Q_3=32$. By the $1.5\\times\\text{IQR}$ rule, which value is an outlier?", "Một bộ dữ liệu có $Q_1=20$ và $Q_3=32$. Theo quy tắc $1.5\\times\\text{IQR}$, giá trị nào là ngoại lai?",
 "$52$", ["$45$", "$49$", "$14$"],
 "$\\text{IQR}=12$, so the fences are $20-18=2$ and $32+18=50$; only $52$ is beyond a fence.",
 "$\\text{IQR}=12$, nên hai ngưỡng là $20-18=2$ và $32+18=50$; chỉ có $52$ vượt ngưỡng.", 'od'),
("A test has mean $80$ and standard deviation $4$. What is the z-score of a score of $74$?", "Một bài kiểm tra có trung bình $80$ và độ lệch chuẩn $4$. Điểm z của điểm số $74$ là",
 "$-1.5$", ["$1.5$", "$-6$", "$-0.67$"],
 "$z=\\dfrac{74-80}{4}=-1.5$.", "$z=\\dfrac{74-80}{4}=-1.5$.", 'od'),
("Two classes have the same mean score, $70$, but class A has standard deviation $5$ and class B has standard deviation $12$. Which statement is correct?", "Hai lớp có cùng điểm trung bình $70$, nhưng lớp A có độ lệch chuẩn $5$ còn lớp B có độ lệch chuẩn $12$. Khẳng định nào đúng?",
 "Scores in class B are more variable than in class A.", ["Scores in class A are higher than in class B.", "Class B has more students.", "Scores in class A are more variable than in class B."],
 "The standard deviation measures variability; the centres are equal.", "Độ lệch chuẩn đo độ phân tán; trung tâm của hai lớp như nhau.", 'od',
 ["Điểm lớp B phân tán hơn lớp A.", "Điểm lớp A cao hơn lớp B.", "Lớp B có nhiều học sinh hơn.", "Điểm lớp A phân tán hơn lớp B."]),
("The largest value of a data set is an extreme outlier and is removed. What happens to the mean and the median?", "Giá trị lớn nhất của một bộ dữ liệu là ngoại lai rất xa và bị loại bỏ. Trung bình và trung vị thay đổi thế nào?",
 "The mean decreases noticeably; the median changes little.", ["Both decrease by the same amount.", "The median decreases noticeably; the mean changes little.", "Neither changes."],
 "The mean is pulled by extreme values; the median is resistant.", "Trung bình bị kéo bởi giá trị cực đoan; trung vị thì bền vững.", 'od',
 ["Trung bình giảm rõ rệt; trung vị thay đổi ít.", "Cả hai giảm cùng một lượng.", "Trung vị giảm rõ rệt; trung bình thay đổi ít.", "Không số nào thay đổi."]),
# ---- Unit 1: collecting data (5)
("A school randomly selects $10$ of its $50$ homerooms and surveys every student in them. This is", "Một trường chọn ngẫu nhiên $10$ trong $50$ lớp chủ nhiệm và khảo sát mọi học sinh trong các lớp đó. Đây là",
 "a cluster sample", ["a stratified random sample", "a simple random sample of students", "a systematic sample"],
 "Whole groups are chosen at random and everyone in them is measured.", "Chọn ngẫu nhiên trọn một số nhóm và đo mọi cá thể trong đó.", 'cd',
 ["mẫu cụm", "mẫu ngẫu nhiên phân tầng", "mẫu ngẫu nhiên đơn giản học sinh", "mẫu hệ thống"]),
("A radio show asks listeners to call in and say whether they support a new tax. Which bias is most likely?", "Một chương trình phát thanh mời thính giả gọi điện cho biết họ có ủng hộ một loại thuế mới không. Độ chệch nào có khả năng nhất?",
 "Voluntary response bias", ["Nonresponse bias", "Response bias from wording", "No bias, since the sample is large"],
 "Listeners choose themselves; people with strong opinions are more likely to call.", "Thính giả tự chọn mình; người có ý kiến mạnh dễ gọi hơn.", 'cd',
 ["Chệch do tự nguyện trả lời", "Chệch do không trả lời", "Chệch do cách hỏi", "Không chệch vì mẫu lớn"]),
("Which study design allows a conclusion about cause and effect?", "Thiết kế nghiên cứu nào cho phép kết luận về quan hệ nhân quả?",
 "A randomized comparative experiment", ["A large observational study", "A sample survey", "A census"],
 "Random assignment of treatments makes the groups comparable.", "Phân nhóm ngẫu nhiên các nghiệm thức làm các nhóm tương đương.", 'cd',
 ["Thí nghiệm so sánh có phân nhóm ngẫu nhiên", "Nghiên cứu quan sát quy mô lớn", "Khảo sát chọn mẫu", "Tổng điều tra"]),
("In an experiment on fertilizers, plots are first grouped by soil type and the fertilizers are then randomly assigned within each group. The main purpose of grouping is to", "Trong thí nghiệm về phân bón, các thửa ruộng được gom theo loại đất rồi phân bón được phân ngẫu nhiên trong từng nhóm. Mục đích chính của việc gom nhóm là",
 "reduce variability in the response caused by soil type", ["increase the number of treatments", "allow generalization to all farms", "remove the need for random assignment"],
 "Blocking by soil type removes its effect from the comparison of treatments.", "Lập khối theo loại đất loại bỏ ảnh hưởng của nó khỏi phép so sánh các nghiệm thức.", 'cd',
 ["giảm biến động của biến phản hồi do loại đất", "tăng số nghiệm thức", "mở rộng kết quả cho mọi nông trại", "không cần phân nhóm ngẫu nhiên nữa"]),
("Which is a statistical investigative question?", "Câu nào là một câu hỏi khảo sát thống kê?",
 "How many minutes do students at our school typically spend travelling to school?", ["How many minutes did Minh spend travelling to school today?", "Is travelling to school tiring?", "At what time does the first lesson start?"],
 "It asks about a group and is answered with data that vary.", "Câu hỏi nói về một nhóm và được trả lời bằng dữ liệu có biến động.", 'cd',
 ["Học sinh trường ta thường mất bao nhiêu phút để đến trường?", "Hôm nay Minh mất bao nhiêu phút để đến trường?", "Đi học có mệt không?", "Tiết học đầu tiên bắt đầu lúc mấy giờ?"]),
# ---- Unit 2: probability (6, with a set of 3)
("Events $A$ and $B$ are independent with $P(A)=0.5$ and $P(B)=0.3$. What is $P(A\\text{ or }B)$?", "Hai biến cố $A$ và $B$ độc lập với $P(A)=0.5$ và $P(B)=0.3$. Giá trị $P(A\\text{ hoặc }B)$ là",
 "$0.65$", ["$0.80$", "$0.15$", "$0.50$"],
 "$P(A\\text{ and }B)=0.15$, so $0.5+0.3-0.15=0.65$.", "$P(A\\text{ và }B)=0.15$, nên $0.5+0.3-0.15=0.65$.", 'pr'),
("Of $100$ adults under $30$, $40$ prefer tea; of $200$ adults aged $30$ or over, $80$ prefer tea. A randomly chosen adult from these $300$ prefers tea. What is the probability that the adult is under $30$?", "Trong $100$ người dưới $30$ tuổi có $40$ người thích trà; trong $200$ người từ $30$ tuổi trở lên có $80$ người thích trà. Chọn ngẫu nhiên một người trong $300$ người này thì người đó thích trà. Xác suất để người đó dưới $30$ tuổi là",
 "$0.333$", ["$0.400$", "$0.133$", "$0.500$"],
 "Among the $120$ tea drinkers, $40$ are under $30$: $\\dfrac{40}{120}\\approx0.333$.", "Trong $120$ người thích trà có $40$ người dưới $30$ tuổi: $\\dfrac{40}{120}\\approx0.333$.", 'pr'),
(S1 + " What is $P(X=0)$?", S1v + " Giá trị $P(X=0)$ là",
 "$0.430$", ["$0.900$", "$0.570$", "$0.100$"],
 "$P(X=0)=(0.9)^8\\approx0.430$.", "$P(X=0)=(0.9)^8\\approx0.430$.", 'pr'),
(S1 + " What is the mean of $X$?", S1v + " Kì vọng của $X$ là",
 "$0.8$", ["$0.1$", "$8$", "$0.72$"],
 "$\\mu_X=np=8(0.1)=0.8$. The value $0.72$ is the variance $np(1-p)$.", "$\\mu_X=np=8(0.1)=0.8$. Giá trị $0.72$ là phương sai $np(1-p)$.", 'pr'),
(S1 + " What is the probability that at least one part is defective?", S1v + " Xác suất để có ít nhất một linh kiện lỗi là",
 "$0.570$", ["$0.430$", "$0.800$", "$0.100$"],
 "$P(X\\ge1)=1-P(X=0)\\approx1-0.430=0.570$.", "$P(X\\ge1)=1-P(X=0)\\approx1-0.430=0.570$.", 'pr'),
("A random variable takes the values $0,1,2,3$ with probabilities $0.1,\\ 0.3,\\ 0.4,\\ 0.2$. What is its mean?", "Một biến ngẫu nhiên nhận các giá trị $0,1,2,3$ với xác suất $0.1;\\ 0.3;\\ 0.4;\\ 0.2$. Kì vọng của nó là",
 "$1.7$", ["$1.5$", "$2$", "$0.25$"],
 "$0(0.1)+1(0.3)+2(0.4)+3(0.2)=1.7$.", "$0(0.1)+1(0.3)+2(0.4)+3(0.2)=1.7$.", 'pr'),
# ---- Unit 2: sampling distributions (3)
("A variable is normally distributed with mean $50$ and standard deviation $8$. What proportion of values are less than $62$?", "Một biến có phân phối chuẩn với trung bình $50$ và độ lệch chuẩn $8$. Tỉ lệ giá trị nhỏ hơn $62$ là",
 "$0.9332$", ["$0.0668$", "$0.8413$", "$0.9772$"],
 "$z=\\dfrac{62-50}{8}=1.5$ and $P(Z<1.5)\\approx0.9332$.", "$z=\\dfrac{62-50}{8}=1.5$ và $P(Z<1.5)\\approx0.9332$.", 'sd'),
("A population has standard deviation $20$. What is the standard deviation of $\\bar x$ for random samples of size $100$?", "Một tổng thể có độ lệch chuẩn $20$. Độ lệch chuẩn của $\\bar x$ với các mẫu ngẫu nhiên cỡ $100$ là",
 "$2$", ["$20$", "$0.2$", "$5$"],
 "$\\dfrac{20}{\\sqrt{100}}=2$.", "$\\dfrac{20}{\\sqrt{100}}=2$.", 'sd'),
("In a population, $p=0.04$. What is the smallest of these sample sizes for which the large counts condition holds for $\\hat p$?", "Trong một tổng thể, $p=0.04$. Cỡ mẫu nhỏ nhất trong các cỡ sau mà điều kiện số đếm đủ lớn cho $\\hat p$ được thoả mãn là",
 "$250$", ["$100$", "$150$", "$200$"],
 "We need $np\\ge10$: $250(0.04)=10$, while $200(0.04)=8$.", "Cần $np\\ge10$: $250(0.04)=10$, còn $200(0.04)=8$.", 'sd'),
# ---- Unit 3: proportions (8)
("In a random sample of $400$ voters, $45\\%$ support a proposal. Which is a $95\\%$ confidence interval for the proportion of all voters who support it?", "Trong một mẫu ngẫu nhiên $400$ cử tri, $45\\%$ ủng hộ một đề xuất. Khoảng nào là khoảng tin cậy $95\\%$ cho tỉ lệ toàn bộ cử tri ủng hộ?",
 "$0.45\\pm0.049$", ["$0.45\\pm0.025$", "$0.45\\pm0.098$", "$0.45\\pm0.041$"],
 "$1.96\\sqrt{\\dfrac{0.45(0.55)}{400}}\\approx1.96(0.0249)\\approx0.049$. The value $0.025$ omits $z^*$, and $0.041$ uses $z^*=1.645$.",
 "$1.96\\sqrt{\\dfrac{0.45(0.55)}{400}}\\approx1.96(0.0249)\\approx0.049$. Giá trị $0.025$ thiếu $z^*$, còn $0.041$ dùng $z^*=1.645$.", 'ip'),
("What does \"$95\\%$ confidence\" mean for a confidence interval?", "\"Độ tin cậy $95\\%$\" của một khoảng tin cậy nghĩa là gì?",
 "About $95\\%$ of intervals built this way from many samples capture the true parameter.", ["There is a $95\\%$ probability that the sample statistic is in the interval.", "$95\\%$ of the data lie in the interval.", "The parameter changes $5\\%$ of the time."],
 "The confidence level describes the long-run success rate of the method.", "Độ tin cậy mô tả tỉ lệ thành công trong dài hạn của phương pháp.", 'ip',
 ["Khoảng $95\\%$ số khoảng lập theo cách này từ nhiều mẫu chứa tham số thật.", "Xác suất để thống kê mẫu nằm trong khoảng là $95\\%$.", "$95\\%$ dữ liệu nằm trong khoảng.", "Tham số thay đổi $5\\%$ số lần."]),
("A company claims that more than $30\\%$ of its customers are under $25$. Which hypotheses test the claim?", "Một công ty khẳng định hơn $30\\%$ khách hàng của họ dưới $25$ tuổi. Cặp giả thuyết nào kiểm định lời khẳng định đó?",
 "$H_0:p=0.3$, $H_a:p>0.3$", ["$H_0:p>0.3$, $H_a:p=0.3$", "$H_0:\\hat p=0.3$, $H_a:\\hat p>0.3$", "$H_0:p=0.3$, $H_a:p\\ne0.3$"],
 "The claim needing evidence goes in $H_a$, and hypotheses are about $p$.", "Lời khẳng định cần bằng chứng đặt ở $H_a$, và giả thuyết nói về $p$.", 'ip'),
("In a test of $H_0:p=0.5$ with $n=100$, the sample proportion is $0.55$. What is the test statistic?", "Trong kiểm định $H_0:p=0.5$ với $n=100$, tỉ lệ mẫu là $0.55$. Thống kê kiểm định là",
 "$z=1.00$", ["$z=0.10$", "$z=2.00$", "$z=0.05$"],
 "$z=\\dfrac{0.55-0.5}{\\sqrt{0.5(0.5)/100}}=\\dfrac{0.05}{0.05}=1.00$.", "$z=\\dfrac{0.55-0.5}{\\sqrt{0.5(0.5)/100}}=\\dfrac{0.05}{0.05}=1.00$.", 'ip'),
("A test gives a P-value of $0.08$ with $\\alpha=0.05$. The correct conclusion is", "Một kiểm định cho giá trị P bằng $0.08$ với $\\alpha=0.05$. Kết luận đúng là",
 "fail to reject $H_0$; there is not convincing evidence for $H_a$", ["reject $H_0$; there is convincing evidence for $H_a$", "accept $H_0$; it is proved true", "reject $H_a$; $H_0$ is true"],
 "$0.08>0.05$, so we fail to reject $H_0$; this does not prove $H_0$.", "$0.08>0.05$ nên ta không bác bỏ $H_0$; điều này không chứng minh $H_0$ đúng.", 'ip',
 ["không bác bỏ $H_0$; không có bằng chứng thuyết phục cho $H_a$", "bác bỏ $H_0$; có bằng chứng thuyết phục cho $H_a$", "chấp nhận $H_0$; nó được chứng minh là đúng", "bác bỏ $H_a$; $H_0$ đúng"]),
("A factory tests $H_0$: the defect rate is $2\\%$, against $H_a$: the rate is higher than $2\\%$. Which describes a Type II error?", "Một nhà máy kiểm định $H_0$: tỉ lệ lỗi là $2\\%$, với $H_a$: tỉ lệ lỗi cao hơn $2\\%$. Đâu là sai lầm loại II?",
 "Concluding there is not convincing evidence of a higher rate when the rate really is higher", ["Concluding the rate is higher when it really is $2\\%$", "Concluding the rate is $2\\%$ when it really is $2\\%$", "Concluding the rate is higher when it really is higher"],
 "A Type II error is failing to reject a false $H_0$.", "Sai lầm loại II là không bác bỏ một $H_0$ sai.", 'ip',
 ["Kết luận không có bằng chứng thuyết phục về tỉ lệ cao hơn trong khi tỉ lệ thật sự cao hơn", "Kết luận tỉ lệ cao hơn trong khi thực tế là $2\\%$", "Kết luận tỉ lệ là $2\\%$ trong khi thực tế là $2\\%$", "Kết luận tỉ lệ cao hơn trong khi thực tế cao hơn"]),
("What is the smallest sample size for a $95\\%$ confidence interval for $p$ with margin of error at most $0.05$, with no prior estimate?", "Cỡ mẫu nhỏ nhất để khoảng tin cậy $95\\%$ cho $p$ có sai số biên không quá $0.05$, khi chưa có ước lượng trước, là",
 "$385$", ["$384$", "$20$", "$196$"],
 "$n\\ge\\left(\\dfrac{1.96}{0.05}\\right)^2(0.25)=384.16$; round up to $385$.", "$n\\ge\\left(\\dfrac{1.96}{0.05}\\right)^2(0.25)=384.16$; làm tròn lên thành $385$.", 'ip'),
("A $95\\%$ confidence interval for $p_1-p_2$ is $(-0.03,\\ 0.08)$. Which conclusion is correct?", "Một khoảng tin cậy $95\\%$ cho $p_1-p_2$ là $(-0.03;\\ 0.08)$. Kết luận nào đúng?",
 "There is not convincing evidence that the two proportions differ.", ["$p_1$ is greater than $p_2$.", "$p_1$ is less than $p_2$.", "The two proportions are equal."],
 "The interval contains $0$, so no difference is plausible; this does not prove they are equal.", "Khoảng chứa $0$ nên \"không khác biệt\" là hợp lí; điều này không chứng minh hai tỉ lệ bằng nhau.", 'ip',
 ["Không có bằng chứng thuyết phục rằng hai tỉ lệ khác nhau.", "$p_1$ lớn hơn $p_2$.", "$p_1$ nhỏ hơn $p_2$.", "Hai tỉ lệ bằng nhau."]),
# ---- Unit 4: means (7)
("A paired $t$ procedure is used with $12$ pairs. How many degrees of freedom are there?", "Dùng phương pháp $t$ ghép cặp với $12$ cặp. Số bậc tự do là",
 "$11$", ["$12$", "$22$", "$24$"],
 "Paired data are analysed as one sample of $12$ differences: df $=11$.", "Dữ liệu ghép cặp được phân tích như một mẫu $12$ hiệu: df $=11$.", 'im'),
("Why is a $t$ interval for a mean wider than a $z$ interval with the same standard error?", "Vì sao khoảng tin cậy $t$ cho trung bình rộng hơn khoảng $z$ có cùng sai số chuẩn?",
 "Estimating $\\sigma$ with $s$ adds uncertainty, so $t^*>z^*$.", ["The sample mean is biased.", "The $t$ distribution is skewed.", "The sample size is always smaller."],
 "The $t$ distribution has heavier tails than the normal.", "Phân phối $t$ có đuôi dày hơn phân phối chuẩn.", 'im',
 ["Ước lượng $\\sigma$ bằng $s$ làm tăng độ bất định, nên $t^*>z^*$.", "Trung bình mẫu bị chệch.", "Phân phối $t$ bị lệch.", "Cỡ mẫu luôn nhỏ hơn."]),
("Which study should be analysed with a paired $t$ procedure?", "Nghiên cứu nào nên phân tích bằng phương pháp $t$ ghép cặp?",
 "Each of $20$ runners is timed with old shoes and with new shoes.", ["Times of $20$ runners with old shoes are compared with $20$ other runners with new shoes.", "The proportion of runners who finish is compared for two clubs.", "The heights of $50$ runners are recorded."],
 "The same runners are measured twice.", "Cùng các vận động viên được đo hai lần.", 'im',
 ["Mỗi người trong $20$ vận động viên được bấm giờ khi đi giày cũ và khi đi giày mới.", "So sánh thời gian của $20$ vận động viên đi giày cũ với $20$ người khác đi giày mới.", "So sánh tỉ lệ vận động viên về đích ở hai câu lạc bộ.", "Ghi lại chiều cao của $50$ vận động viên."]),
("A random sample of $36$ values has $\\bar x=40$ and $s=9$. With $t^*\\approx2.030$, the $95\\%$ confidence interval for $\\mu$ is", "Một mẫu ngẫu nhiên $36$ giá trị có $\\bar x=40$ và $s=9$. Với $t^*\\approx2.030$, khoảng tin cậy $95\\%$ cho $\\mu$ là",
 "$(36.95,\\ 43.05)$", ["$(39.49,\\ 40.51)$", "$(21.73,\\ 58.27)$", "$(38.50,\\ 41.50)$"],
 "The standard error is $\\dfrac{9}{6}=1.5$, so $40\\pm2.030(1.5)=40\\pm3.045$.", "Sai số chuẩn là $\\dfrac{9}{6}=1.5$, nên $40\\pm2.030(1.5)=40\\pm3.045$.", 'im',
 ["$(36.95;\\ 43.05)$", "$(39.49;\\ 40.51)$", "$(21.73;\\ 58.27)$", "$(38.50;\\ 41.50)$"]),
("In a test of $H_0:\\mu=100$, a sample of $25$ has $\\bar x=103$ and $s=10$. What is the test statistic?", "Trong kiểm định $H_0:\\mu=100$, một mẫu $25$ giá trị có $\\bar x=103$ và $s=10$. Thống kê kiểm định là",
 "$t=1.5$", ["$t=0.3$", "$t=7.5$", "$t=3.0$"],
 "$t=\\dfrac{103-100}{10/\\sqrt{25}}=\\dfrac{3}{2}=1.5$.", "$t=\\dfrac{103-100}{10/\\sqrt{25}}=\\dfrac{3}{2}=1.5$.", 'im'),
("A random sample of $15$ commute times is strongly skewed right with two outliers. Is a one-sample $t$ interval appropriate?", "Một mẫu ngẫu nhiên $15$ thời gian đi làm lệch phải mạnh với hai giá trị ngoại lai. Khoảng tin cậy $t$ một mẫu có phù hợp không?",
 "No, because the sample is small and strongly skewed with outliers.", ["Yes, because the sample is random.", "Yes, because $15<30$.", "No, because $t$ intervals need $n\\ge100$."],
 "With $n<30$, the normal/large sample condition needs no strong skew or outliers.", "Với $n<30$, điều kiện chuẩn / mẫu lớn đòi hỏi không lệch mạnh, không có ngoại lai.", 'im',
 ["Không, vì mẫu nhỏ và lệch mạnh, có ngoại lai.", "Có, vì mẫu ngẫu nhiên.", "Có, vì $15<30$.", "Không, vì khoảng $t$ cần $n\\ge100$."]),
("Researchers compare the mean sleep time of a random sample of $40$ boys and an independent random sample of $40$ girls. The appropriate procedure is", "Các nhà nghiên cứu so sánh thời gian ngủ trung bình của một mẫu ngẫu nhiên $40$ bạn nam và một mẫu ngẫu nhiên độc lập $40$ bạn nữ. Phương pháp phù hợp là",
 "a two-sample $t$ procedure", ["a paired $t$ procedure", "a one-sample $z$ test for a proportion", "a two-sample $z$ test for proportions"],
 "Two independent samples and a quantitative variable.", "Hai mẫu độc lập và một biến định lượng.", 'im',
 ["phương pháp $t$ hai mẫu", "phương pháp $t$ ghép cặp", "kiểm định $z$ một tỉ lệ", "kiểm định $z$ hai tỉ lệ"]),
# ---- Unit 5: regression (7, with a set of 3)
(S2 + " Which is the correct interpretation of $0.85$?", S2v + " Cách diễn giải đúng của $0.85$ là",
 "For each additional hour of practice, the predicted score increases by $0.85$ points.", ["Each student's score increases by exactly $0.85$ points per hour.", "$85\\%$ of the variation in scores is explained by practice.", "A student who does not practise is predicted to score $0.85$ points."],
 "The slope gives the change in the predicted response per unit of $x$.", "Hệ số góc cho mức thay đổi của giá trị dự đoán khi $x$ tăng một đơn vị.", 'rg',
 ["Mỗi giờ luyện tập thêm, điểm dự đoán tăng $0.85$ điểm.", "Điểm của mỗi học sinh tăng đúng $0.85$ điểm mỗi giờ.", "$85\\%$ sự biến động của điểm được giải thích bởi việc luyện tập.", "Học sinh không luyện tập được dự đoán đạt $0.85$ điểm."]),
(S2 + " A student who practised $20$ hours scored $22$ points. What is the residual?", S2v + " Một học sinh luyện tập $20$ giờ đạt $22$ điểm. Phần dư là",
 "$1.8$", ["$-1.8$", "$20.2$", "$2.2$"],
 "$\\hat y=3.2+0.85(20)=20.2$, so the residual is $22-20.2=1.8$.", "$\\hat y=3.2+0.85(20)=20.2$, nên phần dư là $22-20.2=1.8$.", 'rg'),
(S2 + " About what percent of the variation in scores is accounted for by the linear model with practice time?", S2v + " Khoảng bao nhiêu phần trăm sự biến động của điểm được giải thích bởi mô hình tuyến tính theo thời gian luyện tập?",
 "$61\\%$", ["$78\\%$", "$85\\%$", "$39\\%$"],
 "$r^2=0.78^2\\approx0.608$.", "$r^2=0.78^2\\approx0.608$.", 'rg'),
("For a data set, $\\bar x=10$, $s_x=2$, $\\bar y=50$, $s_y=8$ and $r=0.5$. The least-squares line is", "Một bộ dữ liệu có $\\bar x=10$, $s_x=2$, $\\bar y=50$, $s_y=8$ và $r=0.5$. Đường bình phương nhỏ nhất là",
 "$\\hat y=30+2x$", ["$\\hat y=50+2x$", "$\\hat y=45+0.5x$", "$\\hat y=10+4x$"],
 "$b=0.5\\cdot\\dfrac82=2$ and $a=50-2(10)=30$.", "$b=0.5\\cdot\\dfrac82=2$ và $a=50-2(10)=30$.", 'rg'),
("Heights are converted from centimetres to inches. What happens to the correlation between height and weight?", "Chiều cao được đổi từ xăng-ti-mét sang inch. Hệ số tương quan giữa chiều cao và cân nặng thay đổi thế nào?",
 "It does not change.", ["It is divided by $2.54$.", "It is multiplied by $2.54$.", "It becomes negative."],
 "Correlation has no units and is not affected by changing units.", "Hệ số tương quan không có đơn vị và không bị ảnh hưởng khi đổi đơn vị.", 'rg',
 ["Không thay đổi.", "Bị chia cho $2.54$.", "Bị nhân với $2.54$.", "Trở thành số âm."]),
("A line relating age to height was fitted to children aged $3$ to $12$. Using it to predict the height of a $30$-year-old is an example of", "Một đường thẳng liên hệ tuổi với chiều cao được lập từ trẻ $3$ đến $12$ tuổi. Dùng nó để dự đoán chiều cao của người $30$ tuổi là một ví dụ về",
 "extrapolation", ["a residual", "a lurking variable", "a matched pair"],
 "$x=30$ is far outside the range of the data.", "$x=30$ nằm xa ngoài khoảng dữ liệu.", 'rg',
 ["ngoại suy", "phần dư", "biến ẩn", "cặp ghép"]),
("A residual plot for a least-squares line shows a clear curved pattern. What does this suggest?", "Biểu đồ phần dư của một đường bình phương nhỏ nhất cho thấy một quy luật cong rõ rệt. Điều này gợi ý gì?",
 "A linear model is not appropriate for these data.", ["The correlation is $0$.", "The linear model fits very well.", "There are no outliers."],
 "A random scatter supports a linear model; a pattern means the form is not linear.", "Phần dư phân tán ngẫu nhiên ủng hộ mô hình tuyến tính; có quy luật nghĩa là dạng không tuyến tính.", 'rg',
 ["Mô hình tuyến tính không phù hợp với dữ liệu này.", "Hệ số tương quan bằng $0$.", "Mô hình tuyến tính rất khớp.", "Không có giá trị ngoại lai."]),
]

KEYS = "BDACADBCADBCACBDABCDCABDACBDACBDACADBCBDCA"
assert len(Q) == 42 and len(KEYS) == 42, (len(Q), len(KEYS))

def place(correct, wrong, key):
    k = 'ABCD'.index(key); opts = list(wrong); opts.insert(k, correct); return opts

def quiz(lang):
    out = [':::quiz test']
    for i, q in enumerate(Q):
        en, vi, cor, wrong, xe, xv, topic = q[:7]; key = KEYS[i]
        if lang == 'en':
            opts = place(cor, wrong, key); stem, ex = en, xe
        else:
            if len(q) > 7:
                vo = q[7]; opts = [vi_num(o) for o in place(vo[0], vo[1:], key)]
            else:
                opts = [vi_num(o) for o in place(cor, wrong, key)]
            stem, ex = vi_num(vi), vi_num(xv)
        out += ['::mc', stem] + [f"{'ABCD'[j]}. {o}" for j, o in enumerate(opts)] + ['::key ' + key, ex, '']
    return '\n'.join(out).rstrip() + '\n:::'

TXT = {
'en': dict(title='AP Statistics practice exam 1',
  desc='A full AP Statistics practice exam in the 2027 format: 42 multiple-choice questions marked instantly and 4 free-response questions with model answers.',
  intro="""Taking a full exam under exam conditions is the best rehearsal there is. You find out where the time goes, which kinds of questions still slow you down, and how it feels to write clear conclusions when you are tired. This practice exam follows the AP Statistics format from May 2027. All questions are written by Lemonmath; they are not real AP questions, but they cover the five units in about the official proportions.

## How to take this exam

| | Section I | Section II |
|---|---|---|
| Questions | 42 multiple choice, 4 options each | 4 free response, 10 points each |
| Time | 90 minutes | 90 minutes |
| Tools | graphing calculator, formula sheet | graphing calculator, formula sheet |

1. Do each section with a timer and without looking at the solutions. Submit Section I to see your score.
2. Questions 14–16 and 36–38 are sets that share one stimulus, as on the real exam.
3. Write the free-response answers in full, then compare them with the model answers point by point, using the guide [The four free-response questions and how to score](lesson:apstats-frq-strategies).""",
  s1='## Section I: multiple choice', s2='## Section II: free response',
  after="""## After the exam

Section I is marked out of 42 and Section II out of 40. On the real exam each section is $50\\%$ of the score, and College Board converts the composite to the 1–5 scale, so this practice exam does not give an AP score. What matters more is the pattern of your mistakes: use the table to find which lesson to revisit for each multiple-choice question you missed, and redo any free-response part where your conclusion lacked context.""",
  th='| Question | Lesson |\n|---|---|'),
'vi': dict(title='Đề luyện AP Statistics số 1',
  desc='Đề luyện AP Statistics trọn vẹn theo cấu trúc 2027: 42 câu trắc nghiệm chấm ngay và 4 câu tự luận có bài làm mẫu.',
  intro="""Làm trọn một đề trong điều kiện như thi thật là cách tập dượt tốt nhất. Bạn sẽ biết thời gian trôi đi đâu, dạng câu nào còn làm mình chậm, và cảm giác phải viết kết luận rõ ràng khi đã mệt là thế nào. Đề luyện này theo cấu trúc AP Statistics từ kì thi tháng 5/2027. Mọi câu hỏi đều do Lemonmath soạn; đây không phải câu hỏi AP thật, nhưng bao quát năm unit theo tỉ lệ gần với tỉ lệ chính thức.

## Cách làm đề

| | Section I | Section II |
|---|---|---|
| Số câu | 42 trắc nghiệm, mỗi câu 4 phương án | 4 tự luận, mỗi câu 10 điểm |
| Thời gian | 90 phút | 90 phút |
| Công cụ | máy tính đồ thị, bảng công thức | máy tính đồ thị, bảng công thức |

1. Làm từng phần với đồng hồ bấm giờ và không xem lời giải. Nộp Section I để xem điểm.
2. Câu 14–16 và 36–38 là các cụm câu dùng chung một dữ kiện, giống đề thật.
3. Viết đầy đủ bài tự luận, rồi so với bài làm mẫu từng điểm, dùng bài [Bốn câu tự luận và cách đạt điểm](lesson:apstats-frq-strategies).""",
  s1='## Section I: trắc nghiệm', s2='## Section II: tự luận',
  after="""## Sau khi làm đề

Section I chấm trên 42 câu và Section II trên 40 điểm. Trong kì thi thật, mỗi phần chiếm $50\\%$ tổng điểm, và College Board quy đổi điểm tổng sang thang 1–5, nên đề luyện này không đưa ra điểm AP. Điều quan trọng hơn là quy luật của những lỗi sai: dùng bảng dưới để biết mỗi câu trắc nghiệm sai cần ôn lại bài nào, và làm lại những ý tự luận mà kết luận còn thiếu tình huống.""",
  th='| Câu | Bài cần ôn |\n|---|---|'),
}

def build(lang):
    t = TXT[lang]
    rows = '\n'.join(f"| {i+1} | [{TL[lang][q[6]]}](lesson:{L[q[6]]}) |" for i, q in enumerate(Q))
    frq = (G / f'apstats_frq_{lang}.md').read_text().strip()
    md = f"""---
title: {t['title']}
description: {t['desc']}
minutes: 180
type: test
---

{t['intro']}

{t['s1']}

{quiz(lang)}

{t['s2']}

{frq}

{t['after']}

{t['th']}
{rows}
"""
    (R / lang / 'exams' / 'ap-statistics' / 'apstats-practice-exam-1.md').write_text(md)

for lang in ('en', 'vi'):
    build(lang)
print(sorted(Counter(KEYS).items()), Counter(q[6] for q in Q))
