# Generates ACT Math practice test 1 (EN + VI) from one bilingual bank.
# Enhanced ACT format: 45 multiple-choice questions, 4 options, 50 minutes, calculator allowed.
# Each item: (en, vi, correct, [3 distractors], expl_en, expl_vi, topic[, vi_options]); the correct option
# is placed at the letter given by KEYS so that the answers are spread evenly over A-D.
import re, pathlib
from collections import Counter
R = pathlib.Path(__file__).resolve().parents[2] / 'content'

def vi_num(s):
    return re.sub(r'(\d)\.(\d)', r'\1{,}\2', s)

L = {'nq': 'act-number-quantity', 'alg': 'act-algebra-functions', 'geo': 'act-geometry',
     'stat': 'act-statistics-probability', 'mod': 'act-modelling-integrating'}
TL = {'en': {'nq': 'Number, quantity and proportion', 'alg': 'Algebra and functions', 'geo': 'Geometry, coordinates and trigonometry',
             'stat': 'Statistics and probability', 'mod': 'Modelling and integrating skills'},
      'vi': {'nq': 'Số, đại lượng và tỉ lệ', 'alg': 'Đại số và hàm số', 'geo': 'Hình học phẳng, toạ độ và lượng giác',
             'stat': 'Thống kê và xác suất', 'mod': 'Mô hình hoá và bài tổng hợp'}}

Q = [
(r"If $3x-7=14$, what is the value of $x$?", r"Nếu $3x-7=14$ thì giá trị của $x$ là",
 "$7$", ["$\\dfrac73$", "$21$", "$3$"],
 r"Add $7$ to both sides: $3x=21$, so $x=7$.", r"Cộng $7$ vào hai vế: $3x=21$, nên $x=7$.", 'alg'),
(r"What is $25\%$ of $180$?", r"$25\%$ của $180$ bằng",
 "$45$", ["$72$", "$4.5$", "$155$"],
 r"$0.25\times180=45$.", r"$0{,}25\times180=45$.", 'nq'),
(r"A jacket costs $60$ dollars. During a sale, its price is reduced by $15\%$. What is the sale price?", r"Một chiếc áo khoác giá $60$ đô la. Trong đợt giảm giá, giá được giảm $15\%$. Giá bán khi giảm là",
 "$51$ dollars", ["$45$ dollars", "$9$ dollars", "$69$ dollars"],
 r"The sale price is $60\times0.85=51$ dollars. Option C is the discount, not the price.", r"Giá khi giảm là $60\times0{,}85=51$ đô la. Phương án C là số tiền được giảm, không phải giá bán.", 'nq',
 ["$51$ đô la", "$45$ đô la", "$9$ đô la", "$69$ đô la"]),
(r"What is the value of $2a^2-b$ when $a=-3$ and $b=4$?", r"Giá trị của $2a^2-b$ khi $a=-3$ và $b=4$ là",
 "$14$", ["$-22$", "$32$", "$-14$"],
 r"$2(-3)^2-4=2(9)-4=14$. Squaring first keeps the result positive.", r"$2(-3)^2-4=2(9)-4=14$. Bình phương trước nên kết quả dương.", 'alg'),
(r"Three numbers are in the ratio $2:3:5$ and their sum is $120$. What is the largest number?", r"Ba số tỉ lệ với $2:3:5$ và có tổng bằng $120$. Số lớn nhất là",
 "$60$", ["$24$", "$50$", "$36$"],
 r"Write the numbers as $2k$, $3k$, $5k$. Then $10k=120$, so $k=12$ and the largest is $5k=60$.", r"Viết các số là $2k$, $3k$, $5k$. Khi đó $10k=120$, nên $k=12$ và số lớn nhất là $5k=60$.", 'nq'),
(r"The mean of $5$ numbers is $14$. One number, $22$, is removed. What is the mean of the remaining $4$ numbers?", r"Trung bình của $5$ số là $14$. Bỏ đi số $22$. Trung bình của $4$ số còn lại là",
 "$12$", ["$13$", "$14$", "$8$"],
 r"The total is $5\times14=70$; without $22$ it is $48$, and $\dfrac{48}{4}=12$.", r"Tổng là $5\times14=70$; bỏ $22$ còn $48$, và $\dfrac{48}{4}=12$.", 'stat'),
(r"What is the slope of the line $4x+2y=10$?", r"Hệ số góc của đường thẳng $4x+2y=10$ là",
 "$-2$", ["$4$", "$2$", "$5$"],
 r"Solve for $y$: $y=-2x+5$, so the slope is $-2$. Option D is the $y$-intercept.", r"Rút $y$: $y=-2x+5$, nên hệ số góc là $-2$. Phương án D là tung độ gốc.", 'alg'),
(r"Which expression is equivalent to $(x+5)(x-2)$?", r"Biểu thức nào tương đương với $(x+5)(x-2)$?",
 "$x^2+3x-10$", ["$x^2-3x-10$", "$x^2+7x-10$", "$x^2-10$"],
 r"$x^2-2x+5x-10=x^2+3x-10$.", r"$x^2-2x+5x-10=x^2+3x-10$.", 'alg'),
(r"Which of the following is equal to $\sqrt{48}$?", r"Số nào sau đây bằng $\sqrt{48}$?",
 "$4\\sqrt3$", ["$3\\sqrt4$", "$16\\sqrt3$", "$4\\sqrt{12}$"],
 r"$\sqrt{48}=\sqrt{16\cdot3}=4\sqrt3$.", r"$\sqrt{48}=\sqrt{16\cdot3}=4\sqrt3$.", 'nq'),
(r"A rectangle has perimeter $30$ cm and length $9$ cm. What is its area?", r"Một hình chữ nhật có chu vi $30$ cm và chiều dài $9$ cm. Diện tích của nó là",
 "$54$ cm²", ["$270$ cm²", "$21$ cm²", "$63$ cm²"],
 r"The width is $\dfrac{30}{2}-9=6$ cm, so the area is $9\times6=54$ cm².", r"Chiều rộng là $\dfrac{30}{2}-9=6$ cm, nên diện tích là $9\times6=54$ cm².", 'geo'),
(r"What are all the solutions of $x^2=6x$?", r"Tất cả các nghiệm của $x^2=6x$ là",
 "$0$ and $6$", ["$6$ only", "$-6$ and $6$", "$0$ only"],
 r"$x^2-6x=x(x-6)=0$, so $x=0$ or $x=6$. Dividing by $x$ loses the solution $0$.", r"$x^2-6x=x(x-6)=0$, nên $x=0$ hoặc $x=6$. Chia hai vế cho $x$ sẽ mất nghiệm $0$.", 'alg',
 ["$0$ và $6$", "chỉ $6$", "$-6$ và $6$", "chỉ $0$"]),
(r"If $f(x)=2x^2-3x$, what is $f(-1)$?", r"Nếu $f(x)=2x^2-3x$ thì $f(-1)$ bằng",
 "$5$", ["$-1$", "$-5$", "$1$"],
 r"$2(1)-3(-1)=2+3=5$.", r"$2(1)-3(-1)=2+3=5$.", 'alg'),
(r"One letter is chosen at random from the word MATHEMATICS. What is the probability that it is a vowel?", r"Chọn ngẫu nhiên một chữ cái từ từ MATHEMATICS. Xác suất chọn được nguyên âm là",
 "$\\dfrac{4}{11}$", ["$\\dfrac{3}{11}$", "$\\dfrac{4}{7}$", "$\\dfrac{7}{11}$"],
 r"The $11$ letters include the vowels A, E, A, I: $4$ of them.", r"$11$ chữ cái có các nguyên âm A, E, A, I: $4$ chữ.", 'stat'),
(r"A bus travels $150$ km in $2$ hours $30$ minutes. What is its average speed?", r"Một xe buýt đi $150$ km trong $2$ giờ $30$ phút. Tốc độ trung bình của xe là",
 "$60$ km/h", ["$75$ km/h", "$65$ km/h", "$50$ km/h"],
 r"$2$ hours $30$ minutes is $2.5$ hours, and $\dfrac{150}{2.5}=60$. Option C treats $2$ hours $30$ minutes as $2.3$ hours.", r"$2$ giờ $30$ phút là $2{,}5$ giờ, và $\dfrac{150}{2{,}5}=60$. Phương án C coi $2$ giờ $30$ phút là $2{,}3$ giờ.", 'nq'),
(r"What is the area of a circle with radius $7$?", r"Diện tích hình tròn bán kính $7$ là",
 "$49\\pi$", ["$14\\pi$", "$7\\pi$", "$196\\pi$"],
 r"$\pi r^2=49\pi$. Option A is the circumference.", r"$\pi r^2=49\pi$. Phương án A là chu vi.", 'geo'),
(r"If $x+y=10$ and $x-y=4$, what is the value of $xy$?", r"Nếu $x+y=10$ và $x-y=4$ thì giá trị của $xy$ là",
 "$21$", ["$40$", "$24$", "$14$"],
 r"Adding the equations gives $2x=14$, so $x=7$ and $y=3$; then $xy=21$.", r"Cộng hai phương trình được $2x=14$, nên $x=7$ và $y=3$; do đó $xy=21$.", 'alg'),
(r"What is the sum of the solutions of $|x-3|=5$?", r"Tổng các nghiệm của $|x-3|=5$ là",
 "$6$", ["$10$", "$8$", "$-2$"],
 r"$x-3=5$ or $x-3=-5$, so $x=8$ or $x=-2$, and $8+(-2)=6$.", r"$x-3=5$ hoặc $x-3=-5$, nên $x=8$ hoặc $x=-2$, và $8+(-2)=6$.", 'alg'),
(r"A right triangle has legs of lengths $9$ and $12$. What is the length of the hypotenuse?", r"Một tam giác vuông có hai cạnh góc vuông dài $9$ và $12$. Cạnh huyền dài",
 "$15$", ["$21$", "$\\sqrt{63}$", "$18$"],
 r"$\sqrt{81+144}=\sqrt{225}=15$.", r"$\sqrt{81+144}=\sqrt{225}=15$.", 'geo'),
(r"If $3^x=81$, what is $x$?", r"Nếu $3^x=81$ thì $x$ bằng",
 "$4$", ["$27$", "$3$", "$9$"],
 r"$81=3^4$.", r"$81=3^4$.", 'alg'),
(r"A line passes through $(2,3)$ and has slope $-1$. What is its $y$-intercept?", r"Một đường thẳng đi qua $(2,3)$ và có hệ số góc $-1$. Tung độ gốc của nó là",
 "$5$", ["$1$", "$3$", "$-1$"],
 r"$y=-x+b$ with $3=-2+b$, so $b=5$.", r"$y=-x+b$ với $3=-2+b$, nên $b=5$.", 'alg'),
(r"Which of the following is the solution set of $-3x+4\le16$?", r"Tập nghiệm của $-3x+4\le16$ là",
 "$x\\ge-4$", ["$x\\le-4$", "$x\\ge4$", "$x\\le4$"],
 r"$-3x\le12$; dividing by $-3$ reverses the sign: $x\ge-4$.", r"$-3x\le12$; chia cho $-3$ thì đổi chiều: $x\ge-4$.", 'alg'),
(r"What is the median of $5, 9, 2, 8, 11, 3$?", r"Trung vị của $5, 9, 2, 8, 11, 3$ là",
 "$6.5$", ["$8$", "$6.33$", "$5$"],
 r"Sorted: $2, 3, 5, 8, 9, 11$; the median is $\dfrac{5+8}{2}=6.5$. Option C is the mean.", r"Sắp xếp: $2, 3, 5, 8, 9, 11$; trung vị là $\dfrac{5+8}{2}=6{,}5$. Phương án C là số trung bình.", 'stat'),
(r"What is the midpoint of the segment with endpoints $(-4,7)$ and $(6,-1)$?", r"Trung điểm của đoạn thẳng có hai đầu mút $(-4,7)$ và $(6,-1)$ là",
 "$(1,3)$", ["$(5,4)$", "$(2,6)$", "$(1,4)$"],
 r"$\left(\dfrac{-4+6}{2},\dfrac{7-1}{2}\right)=(1,3)$.", r"$\left(\dfrac{-4+6}{2},\dfrac{7-1}{2}\right)=(1,3)$.", 'geo'),
(r"What is $(2+3i)(2-3i)$?", r"$(2+3i)(2-3i)$ bằng",
 "$13$", ["$-5$", "$4-9i$", "$13-12i$"],
 r"$4-9i^2=4+9=13$. Option B uses $i^2=1$.", r"$4-9i^2=4+9=13$. Phương án B dùng $i^2=1$.", 'nq'),
(r"A pizza shop offers $7$ toppings. In how many ways can a customer choose $3$ different toppings?", r"Một tiệm pizza có $7$ loại nhân phủ. Khách hàng có bao nhiêu cách chọn $3$ loại khác nhau?",
 "$35$", ["$210$", "$21$", "$343$"],
 r"Order does not matter: $\dbinom73=35$. Option A counts ordered choices.", r"Không tính thứ tự: $\dbinom73=35$. Phương án A đếm các cách chọn có thứ tự.", 'stat'),
(r"Two similar triangles have corresponding sides in the ratio $3:5$. What is the ratio of their areas?", r"Hai tam giác đồng dạng có các cạnh tương ứng tỉ lệ $3:5$. Tỉ số diện tích của chúng là",
 "$9:25$", ["$3:5$", "$6:10$", "$27:125$"],
 r"Areas scale by the square of the ratio of sides: $3^2:5^2$.", r"Diện tích tỉ lệ với bình phương tỉ số cạnh: $3^2:5^2$.", 'geo'),
(r"What is the vertex of the parabola $y=2x^2-8x+1$?", r"Đỉnh của parabol $y=2x^2-8x+1$ là",
 "$(2,-7)$", ["$(-2,25)$", "$(4,1)$", "$(2,1)$"],
 r"$x=-\dfrac{-8}{2\cdot2}=2$ and $y=8-16+1=-7$.", r"$x=-\dfrac{-8}{2\cdot2}=2$ và $y=8-16+1=-7$.", 'alg'),
(r"A town of $8000$ people grows by $5\%$ each year. What is its population after $3$ years?", r"Một thị trấn có $8000$ dân, mỗi năm tăng $5\%$. Sau $3$ năm dân số là",
 "$9261$", ["$9200$", "$8400$", "$9600$"],
 r"$8000\times1.05^3=9261$. Option A adds $5\%$ of $8000$ three times (simple growth).", r"$8000\times1{,}05^3=9261$. Phương án A cộng $5\%$ của $8000$ ba lần (tăng đơn).", 'mod'),
(r"For an acute angle $\theta$, $\sin\theta=0.6$. What is $\tan\theta$?", r"Với góc nhọn $\theta$, $\sin\theta=0{,}6$. Giá trị $\tan\theta$ là",
 "$0.75$", ["$0.8$", "$1.33$", "$0.6$"],
 r"$\cos\theta=\sqrt{1-0.36}=0.8$, so $\tan\theta=\dfrac{0.6}{0.8}=0.75$.", r"$\cos\theta=\sqrt{1-0{,}36}=0{,}8$, nên $\tan\theta=\dfrac{0{,}6}{0{,}8}=0{,}75$.", 'geo'),
(r"If $f(x)=x+4$ and $g(x)=x^2$, what is $g\big(f(-6)\big)$?", r"Nếu $f(x)=x+4$ và $g(x)=x^2$ thì $g\big(f(-6)\big)$ bằng",
 "$4$", ["$40$", "$-2$", "$36$"],
 r"$f(-6)=-2$ and $g(-2)=4$. Option B is $f\big(g(-6)\big)$.", r"$f(-6)=-2$ và $g(-2)=4$. Phương án B là $f\big(g(-6)\big)$.", 'alg'),
(r"What is the $20$th term of the arithmetic sequence $7, 11, 15, \dots$?", r"Số hạng thứ $20$ của cấp số cộng $7, 11, 15, \dots$ là",
 "$83$", ["$87$", "$80$", "$147$"],
 r"$7+19\times4=83$. Option A uses $20\times4$.", r"$7+19\times4=83$. Phương án A dùng $20\times4$.", 'alg'),
(r"What is the volume of a cylinder with radius $3$ and height $8$?", r"Thể tích hình trụ có bán kính $3$ và chiều cao $8$ là",
 "$72\\pi$", ["$24\\pi$", "$48\\pi$", "$192\\pi$"],
 r"$\pi r^2h=\pi\cdot9\cdot8=72\pi$. Option B is the cone volume.", r"$\pi r^2h=\pi\cdot9\cdot8=72\pi$. Phương án B là thể tích hình nón.", 'geo'),
(r"In a class of $30$ students, $18$ study French, $12$ study Spanish and $5$ study both. How many study neither language?", r"Trong một lớp $30$ học sinh, $18$ em học tiếng Pháp, $12$ em học tiếng Tây Ban Nha và $5$ em học cả hai. Có bao nhiêu em không học thứ tiếng nào?",
 "$5$", ["$0$", "$10$", "$7$"],
 r"$18+12-5=25$ study at least one language, so $30-25=5$ study neither.", r"$18+12-5=25$ em học ít nhất một thứ tiếng, nên $30-25=5$ em không học thứ tiếng nào.", 'stat'),
(r"What is the value of $\log_264-\log_39$?", r"Giá trị của $\log_264-\log_39$ là",
 "$4$", ["$55$", "$8$", "$3$"],
 r"$\log_264=6$ and $\log_39=2$.", r"$\log_264=6$ và $\log_39=2$.", 'alg'),
(r"What is the distance between $(1,2)$ and $(7,10)$?", r"Khoảng cách giữa $(1,2)$ và $(7,10)$ là",
 "$10$", ["$14$", "$\\sqrt{28}$", "$8$"],
 r"$\sqrt{6^2+8^2}=10$.", r"$\sqrt{6^2+8^2}=10$.", 'geo'),
(r"In a game, a player wins $5$ dollars with probability $0.3$ and loses $2$ dollars otherwise. What is the expected gain per game?", r"Trong một trò chơi, người chơi thắng $5$ đô la với xác suất $0{,}3$, ngược lại thua $2$ đô la. Tiền lãi kì vọng mỗi ván là",
 "$0.1$ dollars", ["$3$ dollars", "$1.5$ dollars", "$-0.1$ dollars"],
 r"$5(0.3)-2(0.7)=1.5-1.4=0.1$.", r"$5(0{,}3)-2(0{,}7)=1{,}5-1{,}4=0{,}1$.", 'stat',
 ["$0{,}1$ đô la", "$3$ đô la", "$1{,}5$ đô la", "$-0{,}1$ đô la"]),
(r"Which is the equation of the circle with center $(-2,3)$ and radius $4$?", r"Phương trình đường tròn tâm $(-2,3)$ bán kính $4$ là",
 "$(x+2)^2+(y-3)^2=16$", ["$(x-2)^2+(y+3)^2=16$", "$(x+2)^2+(y-3)^2=4$", "$(x-2)^2+(y-3)^2=16$"],
 r"$(x-h)^2+(y-k)^2=r^2$ with $h=-2$, $k=3$, $r^2=16$.", r"$(x-h)^2+(y-k)^2=r^2$ với $h=-2$, $k=3$, $r^2=16$.", 'geo'),
(r"How many real solutions does $2x^2+3x+5=0$ have?", r"Phương trình $2x^2+3x+5=0$ có bao nhiêu nghiệm thực?",
 "$0$", ["$1$", "$2$", "infinitely many"],
 r"The discriminant is $9-40=-31<0$.", r"Biệt thức là $9-40=-31<0$.", 'alg',
 ["$0$", "$1$", "$2$", "vô số"]),
(r"One pipe fills a tank in $6$ hours and another fills it in $3$ hours. How long do they take working together?", r"Một vòi chảy đầy bể trong $6$ giờ, vòi khác trong $3$ giờ. Hai vòi cùng chảy thì bao lâu đầy bể?",
 "$2$ hours", ["$4.5$ hours", "$9$ hours", "$3$ hours"],
 r"Together they fill $\dfrac16+\dfrac13=\dfrac12$ of the tank per hour, so $2$ hours. Option A averages the times.", r"Cùng chảy, mỗi giờ hai vòi đầy $\dfrac16+\dfrac13=\dfrac12$ bể, nên mất $2$ giờ. Phương án A lấy trung bình hai thời gian.", 'mod',
 ["$2$ giờ", "$4{,}5$ giờ", "$9$ giờ", "$3$ giờ"]),
(r"The top of a $40$-m building is seen from a point $30$ m from its base, on level ground. What is the straight-line distance from the point to the top of the building?", r"Nhìn đỉnh một toà nhà cao $40$ m từ một điểm cách chân toà nhà $30$ m trên mặt đất bằng phẳng. Khoảng cách theo đường thẳng từ điểm đó đến đỉnh toà nhà là",
 "$50$ m", ["$70$ m", "$10$ m", "$35$ m"],
 r"$\sqrt{30^2+40^2}=50$ (a $3$-$4$-$5$ triangle scaled by $10$).", r"$\sqrt{30^2+40^2}=50$ (bộ ba $3$-$4$-$5$ nhân với $10$).", 'geo'),
(r"What is the sum of all the entries of $\begin{pmatrix}2&1\\0&3\end{pmatrix}+\begin{pmatrix}1&-1\\4&2\end{pmatrix}$?", r"Tổng tất cả các phần tử của $\begin{pmatrix}2&1\\0&3\end{pmatrix}+\begin{pmatrix}1&-1\\4&2\end{pmatrix}$ là",
 "$12$", ["$14$", "$10$", "$6$"],
 r"The sum is $\begin{pmatrix}3&0\\4&5\end{pmatrix}$, whose entries add up to $12$.", r"Tổng là $\begin{pmatrix}3&0\\4&5\end{pmatrix}$, các phần tử cộng lại bằng $12$.", 'nq'),
(r"If $f(x)=\dfrac{x-1}{3}$, what is $f^{-1}(4)$?", r"Nếu $f(x)=\dfrac{x-1}{3}$ thì $f^{-1}(4)$ bằng",
 "$13$", ["$1$", "$\\dfrac13$", "$11$"],
 r"Solve $\dfrac{x-1}{3}=4$: $x=13$. Option A is $f(4)$.", r"Giải $\dfrac{x-1}{3}=4$: $x=13$. Phương án A là $f(4)$.", 'alg'),
(r"The value of an account after $t$ months is $V=1500(1.02)^t$ dollars. What does $1.02$ represent?", r"Giá trị một tài khoản sau $t$ tháng là $V=1500(1{,}02)^t$ đô la. Số $1{,}02$ biểu thị điều gì?",
 "A $2\\%$ increase each month", ["The starting value", "An increase of $1.02$ dollars each month", "A $102\\%$ increase each month"],
 r"Each month the value is multiplied by $1.02$, which is a $2\%$ increase.", r"Mỗi tháng giá trị được nhân với $1{,}02$, tức tăng $2\%$.", 'mod',
 ["Tăng $2\\%$ mỗi tháng", "Giá trị ban đầu", "Tăng $1{,}02$ đô la mỗi tháng", "Tăng $102\\%$ mỗi tháng"]),
(r"A fair coin is tossed $3$ times. What is the probability of getting at least one head?", r"Tung một đồng xu cân đối $3$ lần. Xác suất được ít nhất một lần mặt ngửa là",
 "$\\dfrac78$", ["$\\dfrac38$", "$\\dfrac12$", "$\\dfrac18$"],
 r"$1-P(\text{no heads})=1-\left(\dfrac12\right)^3=\dfrac78$.", r"$1-P(\text{không lần nào ngửa})=1-\left(\dfrac12\right)^3=\dfrac78$.", 'stat'),
(r"Two positive numbers have a sum of $20$. What is the greatest possible value of their product?", r"Hai số dương có tổng bằng $20$. Tích của chúng lớn nhất bằng",
 "$100$", ["$99$", "$400$", "$96$"],
 r"With numbers $x$ and $20-x$, the product $x(20-x)$ is greatest at the vertex $x=10$: $10\times10=100$.", r"Với hai số $x$ và $20-x$, tích $x(20-x)$ lớn nhất tại đỉnh $x=10$: $10\times10=100$.", 'mod'),
]

KEYS = "ACBDBADCCABDACDBACDBDCABBDCADBCACDABDBCADBACD"
assert len(Q) == 45 and len(KEYS) == 45, (len(Q), len(KEYS))

def place(correct, wrong, key):
    k = 'ABCD'.index(key); opts = list(wrong); opts.insert(k, correct); return opts

TXT = {
'en': dict(title='ACT Math practice test 1',
  desc='A full ACT Math practice test in the enhanced format: 45 multiple-choice questions in 50 minutes, marked instantly, with a solution to every question.',
  intro="""This practice test follows the enhanced ACT Math format: **45 questions, 50 minutes, 4 answer options, calculator allowed, no penalty for wrong answers**. All questions are written by Lemonmath; they are not real ACT questions, but they cover the official content areas at the level of the test. The questions get gradually harder, as on the real test.

## How to take this test

1. Set a timer for **50 minutes** (about 67 seconds per question) and work without looking at the solutions.
2. Make a first pass through all the questions, skip the slow ones, and come back to them.
3. In the last minute, answer every remaining question: a guess cannot lower your score.
4. Submit to see how many questions you got right, then read the solution of every question you missed.""",
  part='## The test',
  after="""## After the test

The number of correct answers is your raw score out of 45. ACT converts raw scores to the 1–36 scale with a table that differs from test to test, so this practice test does not give a scaled score. Use the table below to find which lesson to revise for each question you missed.""",
  th='| Question | Lesson |\n|---|---|',
  tail="Then review with [What ACT Math tests and how to prepare](lesson:act-overview), and keep an error log of every mistake."),
'vi': dict(title='Đề luyện ACT Math số 1',
  desc='Đề luyện ACT Math trọn vẹn theo cấu trúc mới: 45 câu trắc nghiệm trong 50 phút, chấm điểm ngay, có lời giải cho từng câu.',
  intro="""Đề luyện này theo cấu trúc ACT Math mới: **45 câu, 50 phút, 4 phương án, được dùng máy tính, trả lời sai không bị trừ điểm**. Mọi câu hỏi đều do Lemonmath soạn; đây không phải câu hỏi ACT thật, nhưng bao quát các mảng nội dung chính thức ở đúng mức độ của kì thi. Các câu khó dần, như trong đề thật.

## Cách làm đề

1. Bấm giờ **50 phút** (khoảng 67 giây mỗi câu) và làm mà không xem lời giải.
2. Làm lượt đầu qua tất cả các câu, bỏ qua câu chậm, rồi quay lại sau.
3. Trong phút cuối, điền hết các câu còn lại: đoán không thể làm giảm điểm của bạn.
4. Nộp bài để xem số câu đúng, rồi đọc lời giải của mọi câu sai.""",
  part='## Đề thi',
  after="""## Sau khi làm đề

Số câu đúng là điểm thô của bạn trên 45. ACT quy đổi điểm thô sang thang 1–36 bằng một bảng khác nhau theo từng đề, nên đề luyện này không đưa ra điểm quy đổi. Hãy dùng bảng dưới để biết mỗi câu sai cần ôn lại bài nào.""",
  th='| Câu | Bài cần ôn |\n|---|---|',
  tail="Sau đó ôn lại bằng bài [ACT Math gồm những gì và cách ôn](lesson:act-overview), và ghi mọi lỗi sai vào sổ lỗi sai."),
}

def build(lang):
    t = TXT[lang]; out = [':::quiz test']
    for i, q in enumerate(Q):
        en, vi, cor, wrong, xe, xv, topic = q[:7]
        if lang == 'en':
            opts = place(cor, wrong, KEYS[i])
        else:
            if len(q) > 7:
                vo = q[7]; opts = place(vo[0], vo[1:], KEYS[i])
            else:
                opts = [vi_num(o) for o in place(cor, wrong, KEYS[i])]
        out += ['::mc', en if lang == 'en' else vi] + [f"{'ABCD'[j]}. {o}" for j, o in enumerate(opts)] + ['::key ' + KEYS[i], xe if lang == 'en' else xv, '']
    quiz = '\n'.join(out).rstrip() + '\n:::'
    rows = '\n'.join(f"| {i+1} | [{TL[lang][q[6]]}](lesson:{L[q[6]]}) |" for i, q in enumerate(Q))
    md = f"""---
title: {t['title']}
description: {t['desc']}
minutes: 50
type: test
---

{t['intro']}

{t['part']}

{quiz}

{t['after']}

{t['th']}
{rows}

{t['tail']}
"""
    (R / lang / 'exams' / 'act' / 'act-practice-test-1.md').write_text(md)

for lang in ('en', 'vi'):
    build(lang)
print(sorted(Counter(KEYS).items()), Counter(q[6] for q in Q))
