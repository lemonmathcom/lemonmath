# Generates the two SAT practice tests (EN + VI) from one bilingual question bank.
import os
import pathlib
R=str(pathlib.Path(__file__).resolve().parents[2]/'content')+'/'
def MC(en,vi,oe,ov,key,xe,xv,topic): return dict(t='mc',en=en,vi=vi,oe=oe,ov=ov or oe,key=key,xe=xe,xv=xv,topic=topic)
def SA(en,vi,key,xe,xv,topic): return dict(t='sa',en=en,vi=vi,key=key,xe=xe,xv=xv,topic=topic)
L={'alg1':'sat-linear-equations-systems','alg2':'sat-linear-functions-inequalities','exp':'sat-equivalent-expressions','quad':'sat-quadratics-nonlinear','expo':'sat-exponential-functions','rat':'sat-ratios-percentages-units','stat':'sat-statistics-probability','geo1':'sat-area-volume-lines-angles','geo2':'sat-triangles-trig-circles'}

T1M1=[
MC("If $5x-3=17$, what is the value of $x$?","Nếu $5x-3=17$ thì giá trị của $x$ là",["$3$","$4$","$20$","$70$"],None,"B","$5x=20$, so $x=4$. Option C is $5x$.","$5x=20$, nên $x=4$. Phương án C là $5x$.",'alg1'),
MC("A store sells pencils at 3 for 1.20 dollars. At this rate, how much do 15 pencils cost, in dollars?","Một cửa hàng bán bút chì với giá 1,20 đô la cho 3 chiếc. Với giá đó, 15 chiếc bút chì giá bao nhiêu đô la?",["$4.50$","$5.40$","$6.00$","$18.00$"],["$4{,}50$","$5{,}40$","$6{,}00$","$18{,}00$"],"C","One pencil costs $0.40$ dollars, and $15\\cdot0.40=6$.","Một chiếc giá $0{,}40$ đô la, và $15\\cdot0{,}40=6$.",'rat'),
MC("Which expression is equivalent to $3(x^2+2x)-x(x-4)$?","Biểu thức nào tương đương với $3(x^2+2x)-x(x-4)$?",["$2x^2+2x$","$4x^2+10x$","$2x^2-2x$","$2x^2+10x$"],None,"D","$3x^2+6x-x^2+4x=2x^2+10x$. Options A and C get the sign of $-x\\cdot(-4)$ wrong.","$3x^2+6x-x^2+4x=2x^2+10x$. Phương án A và C sai dấu của $-x\\cdot(-4)$.",'exp'),
SA("A line in the $xy$-plane passes through the points $(0, 3)$ and $(2, 11)$. What is the slope of the line?","Một đường thẳng trong mặt phẳng $xy$ đi qua các điểm $(0, 3)$ và $(2, 11)$. Hệ số góc của đường thẳng bằng bao nhiêu?","4","$\\dfrac{11-3}{2-0}=4$.","$\\dfrac{11-3}{2-0}=4$.",'alg2'),
MC("Two angles of a triangle measure $50^\\circ$ and $65^\\circ$. What is the measure of the third angle?","Hai góc của một tam giác có số đo $50^\\circ$ và $65^\\circ$. Số đo góc thứ ba là",["$65^\\circ$","$55^\\circ$","$115^\\circ$","$245^\\circ$"],None,"A","$180-50-65=65$. Option C is the sum of the two given angles.","$180-50-65=65$. Phương án C là tổng hai góc đã cho.",'geo1'),
MC("The function $f$ is defined by $f(x)=4x-7$. What is the value of $f(5)$?","Hàm số $f$ được cho bởi $f(x)=4x-7$. Giá trị của $f(5)$ là",["$3$","$20$","$27$","$13$"],None,"D","$4\\cdot5-7=13$.","$4\\cdot5-7=13$.",'alg2'),
SA("In a survey of 250 students, 36% said they ride a bus to school. How many of the students surveyed ride a bus to school?","Trong một cuộc khảo sát 250 học sinh, 36% cho biết đi xe buýt đến trường. Có bao nhiêu học sinh được khảo sát đi xe buýt đến trường?","90","$0.36\\cdot250=90$.","$0{,}36\\cdot250=90$.",'rat'),
MC("Which of the following is a solution of $x^2-5x+6=0$?","Số nào sau đây là một nghiệm của $x^2-5x+6=0$?",["$-2$","$-3$","$3$","$6$"],None,"C","$(x-2)(x-3)=0$, so the solutions are $2$ and $3$. Options A and B have the wrong sign.","$(x-2)(x-3)=0$, nên các nghiệm là $2$ và $3$. Phương án A và B sai dấu.",'quad'),
MC("A gym charges according to $C=25+12m$, where $C$ is the total cost, in dollars, for $m$ months. What does $12$ represent?","Một phòng tập thu phí theo $C=25+12m$, trong đó $C$ là tổng chi phí, tính bằng đô la, cho $m$ tháng. Số $12$ biểu thị điều gì?",["A one-time sign-up fee","The cost per month","The total cost after 12 months","The number of months"],["Phí đăng kí một lần","Chi phí mỗi tháng","Tổng chi phí sau 12 tháng","Số tháng"],"B","The number multiplied by $m$ is the rate: 12 dollars per month. Option A describes $25$.","Số nhân với $m$ là mức mỗi đơn vị: 12 đô la mỗi tháng. Phương án A mô tả số $25$.",'alg2'),
SA("If $x+y=12$ and $x-y=4$, what is the value of $x$?","Nếu $x+y=12$ và $x-y=4$ thì giá trị của $x$ bằng bao nhiêu?","8","Adding the equations gives $2x=16$, so $x=8$.","Cộng hai phương trình được $2x=16$, nên $x=8$.",'alg1'),
MC("The function $f$ is defined by $f(x)=3\\cdot2^x$. What is the value of $f(3)$?","Hàm số $f$ được cho bởi $f(x)=3\\cdot2^x$. Giá trị của $f(3)$ là",["$18$","$216$","$12$","$24$"],None,"D","$3\\cdot8=24$. Option B computes $6^3$; option A computes $3\\cdot2\\cdot3$.","$3\\cdot8=24$. Phương án B tính $6^3$; phương án A tính $3\\cdot2\\cdot3$.",'expo'),
MC("The mean of the four numbers 70, 85, 90 and $x$ is 80. What is the value of $x$?","Số trung bình của bốn số 70, 85, 90 và $x$ là 80. Giá trị của $x$ là",["$75$","$80$","$65$","$85$"],None,"A","The sum must be $4\\cdot80=320$, so $x=320-245=75$.","Tổng phải là $4\\cdot80=320$, nên $x=320-245=75$.",'stat'),
MC("What is the area of a circle with radius 5?","Diện tích hình tròn bán kính 5 là",["$10\\pi$","$5\\pi$","$100\\pi$","$25\\pi$"],None,"D","$\\pi\\cdot5^2=25\\pi$. Option A is the circumference.","$\\pi\\cdot5^2=25\\pi$. Phương án A là chu vi.",'geo1'),
MC("Kim saves 20 dollars each week. She needs at least 300 dollars. Which inequality gives the numbers of weeks $w$ for which she reaches her goal?","Kim tiết kiệm 20 đô la mỗi tuần. Kim cần ít nhất 300 đô la. Bất phương trình nào cho số tuần $w$ để Kim đạt mục tiêu?",["$20w\\le300$","$20+w\\ge300$","$20w\\ge300$","$w\\ge20\\cdot300$"],None,"C","\"At least\" means $\\ge$, and the savings after $w$ weeks are $20w$.","\"Ít nhất\" là $\\ge$, và số tiền sau $w$ tuần là $20w$.",'alg2'),
SA("In the equation $(x+5)(x-2)=x^2+bx-10$, $b$ is a constant and the equation is true for all $x$. What is the value of $b$?","Trong đẳng thức $(x+5)(x-2)=x^2+bx-10$, $b$ là hằng số và đẳng thức đúng với mọi $x$. Giá trị của $b$ bằng bao nhiêu?","3","$(x+5)(x-2)=x^2-2x+5x-10=x^2+3x-10$.","$(x+5)(x-2)=x^2-2x+5x-10=x^2+3x-10$.",'exp'),
MC("Line $k$ is perpendicular to the line $y=-\\dfrac13x+2$. What is the slope of line $k$?","Đường thẳng $k$ vuông góc với đường thẳng $y=-\\dfrac13x+2$. Hệ số góc của $k$ là",["$-3$","$\\dfrac13$","$3$","$-\\dfrac13$"],None,"C","The negative reciprocal of $-\\dfrac13$ is $3$.","Nghịch đảo đối của $-\\dfrac13$ là $3$.",'alg2'),
MC("In a group of 120 people, 45 prefer tea. Of the people who prefer tea, 18 are under 30 years old. If a person who prefers tea is chosen at random, what is the probability that the person is under 30?","Trong một nhóm 120 người, 45 người thích trà. Trong số những người thích trà, 18 người dưới 30 tuổi. Chọn ngẫu nhiên một người thích trà. Xác suất để người đó dưới 30 tuổi là",["$0.15$","$0.4$","$0.375$","$0.18$"],["$0{,}15$","$0{,}4$","$0{,}375$","$0{,}18$"],"B","The total is the 45 tea drinkers: $\\dfrac{18}{45}=0.4$. Option A divides by 120.","Tổng là 45 người thích trà: $\\dfrac{18}{45}=0{,}4$. Phương án A chia cho 120.",'stat'),
MC("What is the vertex of the graph of $y=(x+3)^2-7$?","Đỉnh của đồ thị $y=(x+3)^2-7$ là",["$(3, -7)$","$(-3, 7)$","$(-3, -7)$","$(3, 7)$"],None,"C","$(x+3)^2=(x-(-3))^2$, so the vertex is $(-3, -7)$.","$(x+3)^2=(x-(-3))^2$, nên đỉnh là $(-3, -7)$.",'quad'),
SA("A right triangle has legs of lengths 9 and 12. What is the length of the hypotenuse?","Một tam giác vuông có hai cạnh góc vuông dài 9 và 12. Cạnh huyền dài bao nhiêu?","15","$\\sqrt{81+144}=\\sqrt{225}=15$.","$\\sqrt{81+144}=\\sqrt{225}=15$.",'geo2'),
MC("The value, in dollars, of a machine $t$ years after it was bought is $V(t)=800(0.95)^t$. Which statement is true?","Giá trị, tính bằng đô la, của một chiếc máy sau $t$ năm kể từ khi mua là $V(t)=800(0{,}95)^t$. Câu nào đúng?",["The value decreases by 5% each year.","The value increases by 95% each year.","The value decreases by 95% each year.","The value increases by 5% each year."],["Giá trị giảm 5% mỗi năm.","Giá trị tăng 95% mỗi năm.","Giá trị giảm 95% mỗi năm.","Giá trị tăng 5% mỗi năm."],"A","$0.95=1-0.05$: a decrease of 5% per year.","$0{,}95=1-0{,}05$: giảm 5% mỗi năm.",'expo'),
SA("$$3x+ky=12$$ $$6x+8y=24$$ In the system, $k$ is a constant. The system has infinitely many solutions. What is the value of $k$?","$$3x+ky=12$$ $$6x+8y=24$$ Trong hệ, $k$ là hằng số. Hệ có vô số nghiệm. Giá trị của $k$ bằng bao nhiêu?","4","The second equation must be twice the first, so $2k=8$ and $k=4$.","Phương trình thứ hai phải gấp đôi phương trình thứ nhất, nên $2k=8$ và $k=4$.",'alg1'),
MC("If $x>0$ and $x^2-4x-21=0$, what is the value of $x-3$?","Nếu $x>0$ và $x^2-4x-21=0$ thì giá trị của $x-3$ là",["$4$","$7$","$10$","$-10$"],None,"A","$(x-7)(x+3)=0$ and $x>0$, so $x=7$ and $x-3=4$. Option B is $x$.","$(x-7)(x+3)=0$ và $x>0$, nên $x=7$ và $x-3=4$. Phương án B là $x$.",'quad'),
]

T1M2=[
MC("If $2(x+3)=x-4$, what is the value of $x$?","Nếu $2(x+3)=x-4$ thì giá trị của $x$ là",["$-10$","$-2$","$2$","$10$"],None,"A","$2x+6=x-4$, so $x=-10$.","$2x+6=x-4$, nên $x=-10$.",'alg1'),
MC("The price of a game was 60 dollars. The price increased by 15%. What is the new price, in dollars?","Giá một trò chơi là 60 đô la. Giá tăng 15%. Giá mới là bao nhiêu đô la?",["$61.50$","$69$","$75$","$51$"],["$61{,}50$","$69$","$75$","$51$"],"B","$60\\cdot1.15=69$. Option D is a decrease of 15%.","$60\\cdot1{,}15=69$. Phương án D là giảm 15%.",'rat'),
SA("If $x^{\\frac12}=6$, what is the value of $x^{\\frac32}$?","Nếu $x^{\\frac12}=6$ thì giá trị của $x^{\\frac32}$ bằng bao nhiêu?","216","$x^{\\frac32}=\\left(x^{\\frac12}\\right)^3=6^3=216$.","$x^{\\frac32}=\\left(x^{\\frac12}\\right)^3=6^3=216$.",'exp'),
MC("For a linear relationship, $y=7$ when $x=1$, $y=13$ when $x=3$ and $y=19$ when $x=5$. Which equation describes the relationship?","Trong một quan hệ bậc nhất, $y=7$ khi $x=1$, $y=13$ khi $x=3$ và $y=19$ khi $x=5$. Phương trình nào mô tả quan hệ đó?",["$y=6x+1$","$y=2x+5$","$y=3x+7$","$y=3x+4$"],None,"D","The slope is $\\dfrac{13-7}{3-1}=3$ and $7=3+b$ gives $b=4$.","Hệ số góc là $\\dfrac{13-7}{3-1}=3$ và $7=3+b$ cho $b=4$.",'alg2'),
MC("Two similar triangles have corresponding sides in the ratio $3:5$. The smaller triangle has area 18. What is the area of the larger triangle?","Hai tam giác đồng dạng có các cạnh tương ứng theo tỉ số $3:5$. Tam giác nhỏ có diện tích 18. Diện tích tam giác lớn là",["$30$","$50$","$54$","$90$"],None,"B","Areas scale by $\\left(\\dfrac53\\right)^2=\\dfrac{25}{9}$: $18\\cdot\\dfrac{25}9=50$. Option A scales linearly.","Diện tích được nhân với $\\left(\\dfrac53\\right)^2=\\dfrac{25}{9}$: $18\\cdot\\dfrac{25}9=50$. Phương án A nhân theo tỉ lệ bậc nhất.",'geo1'),
MC("Which of the following is a factor of $6x^2-x-12$?","Biểu thức nào sau đây là một nhân tử của $6x^2-x-12$?",["$3x-4$","$2x+3$","$2x-3$","$6x+4$"],None,"C","$6x^2-x-12=(2x-3)(3x+4)$.","$6x^2-x-12=(2x-3)(3x+4)$.",'exp'),
SA("A car travels 48 miles in 40 minutes at a constant speed. What is its speed, in miles per hour?","Một ô tô đi 48 dặm trong 40 phút với tốc độ không đổi. Tốc độ của nó là bao nhiêu dặm mỗi giờ?","72","40 minutes is $\\dfrac23$ hour: $48\\div\\dfrac23=72$.","40 phút là $\\dfrac23$ giờ: $48:\\dfrac23=72$.",'rat'),
MC("The graph of $f(x)=x^2-8x+k$, where $k$ is a constant, has exactly one $x$-intercept. What is the value of $k$?","Đồ thị của $f(x)=x^2-8x+k$, với $k$ là hằng số, có đúng một giao điểm với trục $x$. Giá trị của $k$ là",["$4$","$8$","$-16$","$16$"],None,"D","One $x$-intercept means $64-4k=0$, so $k=16$.","Đúng một giao điểm nghĩa là $64-4k=0$, nên $k=16$.",'quad'),
MC("Which equation defines the line that passes through $(2, 5)$ and is parallel to the line $3x-y=4$?","Phương trình nào xác định đường thẳng đi qua $(2, 5)$ và song song với đường thẳng $3x-y=4$?",["$y=3x-1$","$y=-3x+11$","$y=\\dfrac13x+\\dfrac{13}3$","$y=3x+5$"],None,"A","$3x-y=4$ is $y=3x-4$, slope $3$. Then $5=6+b$ gives $b=-1$.","$3x-y=4$ là $y=3x-4$, hệ số góc $3$. Khi đó $5=6+b$ cho $b=-1$.",'alg2'),
SA("What is the solution of $\\sqrt{3x+10}=x+2$?","Nghiệm của $\\sqrt{3x+10}=x+2$ là bao nhiêu?","2","Squaring gives $x^2+x-6=0$, so $x=2$ or $x=-3$. For $x=-3$: $\\sqrt1=1\\ne-1$, so the only solution is $2$.","Bình phương được $x^2+x-6=0$, nên $x=2$ hoặc $x=-3$. Với $x=-3$: $\\sqrt1=1\\ne-1$, nên nghiệm duy nhất là $2$.",'quad'),
MC("The data set 12, 15, 15, 18, 20, 95 lists the ages of six people at a meeting. If the value 95 is removed, which statement is true?","Tập dữ liệu 12, 15, 15, 18, 20, 95 là tuổi của sáu người trong một buổi họp. Nếu bỏ giá trị 95 thì câu nào đúng?",["Both the mean and the median decrease, and the mean decreases more.","Both decrease, and the median decreases more.","Both the mean and the median increase.","Neither the mean nor the median changes."],["Cả số trung bình và trung vị đều giảm, số trung bình giảm nhiều hơn.","Cả hai đều giảm, trung vị giảm nhiều hơn.","Cả số trung bình và trung vị đều tăng.","Số trung bình và trung vị đều không đổi."],"A","The mean falls from about $29.2$ to $16$; the median falls from $16.5$ to $15$.","Số trung bình giảm từ khoảng $29{,}2$ xuống $16$; trung vị giảm từ $16{,}5$ xuống $15$.",'stat'),
MC("What is the radius of the circle $x^2+y^2-10x+6y+18=0$?","Bán kính của đường tròn $x^2+y^2-10x+6y+18=0$ là",["$16$","$18$","$34$","$4$"],None,"D","$(x-5)^2+(y+3)^2=25+9-18=16$, so $r=4$. Option A is $r^2$.","$(x-5)^2+(y+3)^2=25+9-18=16$, nên $r=4$. Phương án A là $r^2$.",'geo2'),
MC("A ball's height, in meters, $t$ seconds after it is thrown is $h(t)=-5t^2+30t+2$. What is the maximum height of the ball, in meters?","Độ cao của một quả bóng, tính bằng mét, sau $t$ giây kể từ khi ném là $h(t)=-5t^2+30t+2$. Độ cao lớn nhất của quả bóng là bao nhiêu mét?",["$3$","$32$","$47$","$92$"],None,"C","The vertex is at $t=3$, and $h(3)=-45+90+2=47$. Option A is the time.","Đỉnh tại $t=3$, và $h(3)=-45+90+2=47$. Phương án A là thời điểm.",'quad'),
SA("$$4x+3y=24$$ $$x-3y=-9$$ The solution to the system is $(x, y)$. What is the value of $x+y$?","$$4x+3y=24$$ $$x-3y=-9$$ Nghiệm của hệ là $(x, y)$. Giá trị của $x+y$ bằng bao nhiêu?","7","Adding gives $5x=15$, so $x=3$; then $3-3y=-9$ gives $y=4$, and $x+y=7$.","Cộng lại được $5x=15$, nên $x=3$; khi đó $3-3y=-9$ cho $y=4$, và $x+y=7$.",'alg1'),
MC("For nonzero $x$ and $y$, which expression is equivalent to $\\dfrac{\\left(x^3y^{-2}\\right)^2}{xy^{-3}}$?","Với $x$, $y$ khác $0$, biểu thức nào tương đương với $\\dfrac{\\left(x^3y^{-2}\\right)^2}{xy^{-3}}$?",["$x^4y$","$\\dfrac{x^5}{y}$","$x^5y$","$\\dfrac{x^6}{y}$"],None,"B","$\\dfrac{x^6y^{-4}}{xy^{-3}}=x^5y^{-1}$.","$\\dfrac{x^6y^{-4}}{xy^{-3}}=x^5y^{-1}$.",'exp'),
MC("A town has 2,000 residents, and the population grows by 3% each year. Which expression gives the population after $t$ years?","Một thị trấn có 2.000 dân, và dân số tăng 3% mỗi năm. Biểu thức nào cho dân số sau $t$ năm?",["$2{,}000(0.03)^t$","$2{,}000+0.03t$","$2{,}000(1.03)^t$","$2{,}000(1.3)^t$"],["$2.000\\cdot(0{,}03)^t$","$2.000+0{,}03t$","$2.000\\cdot(1{,}03)^t$","$2.000\\cdot(1{,}3)^t$"],"C","The growth factor is $1+0.03=1.03$.","Hệ số tăng trưởng là $1+0{,}03=1{,}03$.",'expo'),
SA("For an acute angle, $\\sin x^\\circ=\\cos(2x-30)^\\circ$. What is the value of $x$?","Với góc nhọn, $\\sin x^\\circ=\\cos(2x-30)^\\circ$. Giá trị của $x$ bằng bao nhiêu?","40","The angles are complementary: $x+2x-30=90$, so $x=40$.","Hai góc phụ nhau: $x+2x-30=90$, nên $x=40$.",'geo2'),
MC("An investment is modeled by $f(t)=500(1.44)^t$, where $t$ is in years. Which equivalent form shows the growth rate for each half-year?","Một khoản đầu tư được mô tả bởi $f(t)=500(1{,}44)^t$, với $t$ tính bằng năm. Dạng tương đương nào thể hiện tốc độ tăng sau mỗi nửa năm?",["$500(0.72)^{2t}$","$500(1.72)^{\\frac t2}$","$500(1.2)^{\\frac t2}$","$500(1.2)^{2t}$"],["$500\\cdot(0{,}72)^{2t}$","$500\\cdot(1{,}72)^{\\frac t2}$","$500\\cdot(1{,}2)^{\\frac t2}$","$500\\cdot(1{,}2)^{2t}$"],"D","$1.2^2=1.44$, so $(1.44)^t=(1.2)^{2t}$: 20% per half-year.","$1{,}2^2=1{,}44$, nên $(1{,}44)^t=(1{,}2)^{2t}$: tăng 20% mỗi nửa năm.",'expo'),
MC("$$kx+2y=5$$ $$3x-4y=1$$ In the system, $k$ is a constant. The system has no solution. What is the value of $k$?","$$kx+2y=5$$ $$3x-4y=1$$ Trong hệ, $k$ là hằng số. Hệ vô nghiệm. Giá trị của $k$ là",["$-6$","$1.5$","$-1.5$","$6$"],["$-6$","$1{,}5$","$-1{,}5$","$6$"],"C","Parallel lines: $\\dfrac k3=\\dfrac{2}{-4}$, so $k=-1.5$.","Hai đường thẳng song song: $\\dfrac k3=\\dfrac{2}{-4}$, nên $k=-1{,}5$.",'alg1'),
SA("If $x^2-y^2=40$ and $x-y=4$, what is the value of $x+y$?","Nếu $x^2-y^2=40$ và $x-y=4$ thì giá trị của $x+y$ bằng bao nhiêu?","10","$(x+y)(x-y)=40$, so $x+y=10$.","$(x+y)(x-y)=40$, nên $x+y=10$.",'exp'),
MC("A cone has radius 3 and height 8. What is its volume?","Một hình nón có bán kính đáy 3 và chiều cao 8. Thể tích của nó là",["$72\\pi$","$24\\pi$","$8\\pi$","$48\\pi$"],None,"B","$\\dfrac13\\pi\\cdot9\\cdot8=24\\pi$. Option A forgets the $\\dfrac13$.","$\\dfrac13\\pi\\cdot9\\cdot8=24\\pi$. Phương án A quên $\\dfrac13$.",'geo1'),
SA("The equation $x^2+bx+12=0$, where $b>0$, has two solutions that differ by 1. What is the value of $b$?","Phương trình $x^2+bx+12=0$, với $b>0$, có hai nghiệm hơn kém nhau 1. Giá trị của $b$ bằng bao nhiêu?","7","Two numbers that differ by 1 with product 12: $3, 4$ or $-3, -4$. Since $b>0$ the sum $-b$ is negative, so the solutions are $-3, -4$ and $b=7$.","Hai số hơn kém nhau 1 có tích 12: $3, 4$ hoặc $-3, -4$. Vì $b>0$ nên tổng $-b$ âm, do đó hai nghiệm là $-3, -4$ và $b=7$.",'quad'),
]

T2M1=[
MC("If $7-2x=15$, what is the value of $x$?","Nếu $7-2x=15$ thì giá trị của $x$ là",["$-4$","$4$","$-11$","$11$"],None,"A","$-2x=8$, so $x=-4$.","$-2x=8$, nên $x=-4$.",'alg1'),
MC("A recipe uses 3 cups of flour to make 24 cookies. How many cups of flour are needed to make 60 cookies at the same rate?","Một công thức dùng 3 cốc bột để làm 24 chiếc bánh quy. Cần bao nhiêu cốc bột để làm 60 chiếc với cùng tỉ lệ?",["$6$","$7.5$","$8$","$20$"],["$6$","$7{,}5$","$8$","$20$"],"B","$\\dfrac{3}{24}=\\dfrac{c}{60}$, so $c=7.5$.","$\\dfrac{3}{24}=\\dfrac{c}{60}$, nên $c=7{,}5$.",'rat'),
MC("Which expression is equivalent to $(2x-3)^2$?","Biểu thức nào tương đương với $(2x-3)^2$?",["$4x^2-9$","$4x^2+9$","$4x^2-6x+9$","$4x^2-12x+9$"],None,"D","$(2x)^2-2\\cdot2x\\cdot3+9=4x^2-12x+9$.","$(2x)^2-2\\cdot2x\\cdot3+9=4x^2-12x+9$.",'exp'),
SA("The function $f$ is defined by $f(x)=3x+b$, where $b$ is a constant. If $f(2)=11$, what is the value of $b$?","Hàm số $f$ được cho bởi $f(x)=3x+b$, với $b$ là hằng số. Nếu $f(2)=11$ thì giá trị của $b$ bằng bao nhiêu?","5","$6+b=11$, so $b=5$.","$6+b=11$, nên $b=5$.",'alg2'),
MC("A rectangle is 9 units wide and 12 units long. What is the length of its diagonal?","Một hình chữ nhật rộng 9 đơn vị và dài 12 đơn vị. Đường chéo của nó dài",["$15$","$21$","$108$","$42$"],None,"A","$\\sqrt{81+144}=15$.","$\\sqrt{81+144}=15$.",'geo2'),
MC("18 is 30% of what number?","18 là 30% của số nào?",["$5.4$","$54$","$60$","$600$"],["$5{,}4$","$54$","$60$","$600$"],"C","$0.3N=18$, so $N=60$. Option A is 30% of 18.","$0{,}3N=18$, nên $N=60$. Phương án A là 30% của 18.",'rat'),
MC("A phone plan costs $30+0.1m$ dollars per month, where $m$ is the number of minutes of international calls. What does $30$ represent?","Một gói cước điện thoại có giá $30+0{,}1m$ đô la mỗi tháng, trong đó $m$ là số phút gọi quốc tế. Số $30$ biểu thị điều gì?",["The cost per minute","The fixed monthly cost","The number of minutes included","The total cost for 30 minutes"],["Giá mỗi phút","Chi phí cố định mỗi tháng","Số phút được tặng","Tổng chi phí cho 30 phút"],"B","$30$ does not depend on $m$: it is the fixed monthly cost.","$30$ không phụ thuộc vào $m$: đó là chi phí cố định mỗi tháng.",'alg2'),
SA("What is the positive solution of $x^2=3x+10$?","Nghiệm dương của $x^2=3x+10$ là bao nhiêu?","5","$x^2-3x-10=0\\iff(x-5)(x+2)=0$.","$x^2-3x-10=0\\iff(x-5)(x+2)=0$.",'quad'),
MC("Which equation defines the line through $(-1, 2)$ and $(3, 10)$?","Phương trình nào xác định đường thẳng đi qua $(-1, 2)$ và $(3, 10)$?",["$y=x+3$","$y=2x+4$","$y=4x+6$","$y=2x+2$"],None,"B","The slope is $\\dfrac{8}{4}=2$, and $2=-2+b$ gives $b=4$.","Hệ số góc là $\\dfrac{8}{4}=2$, và $2=-2+b$ cho $b=4$.",'alg2'),
SA("Two supplementary angles measure $x^\\circ$ and $(2x+30)^\\circ$. What is the value of $x$?","Hai góc bù nhau có số đo $x^\\circ$ và $(2x+30)^\\circ$. Giá trị của $x$ bằng bao nhiêu?","50","$3x+30=180$, so $x=50$.","$3x+30=180$, nên $x=50$.",'geo1'),
MC("The function $g$ is defined by $g(x)=4\\left(\\dfrac12\\right)^x$. What is the value of $g(3)$?","Hàm số $g$ được cho bởi $g(x)=4\\left(\\dfrac12\\right)^x$. Giá trị của $g(3)$ là",["$0.5$","$1$","$2$","$6$"],["$0{,}5$","$1$","$2$","$6$"],"A","$4\\cdot\\dfrac18=0.5$.","$4\\cdot\\dfrac18=0{,}5$.",'expo'),
MC("What is the median of the data set 8, 3, 10, 6, 7?","Trung vị của tập dữ liệu 8, 3, 10, 6, 7 là",["$6$","$6.8$","$7$","$8$"],["$6$","$6{,}8$","$7$","$8$"],"C","Ordered: 3, 6, 7, 8, 10. Option B is the mean.","Sắp xếp: 3, 6, 7, 8, 10. Phương án B là số trung bình.",'stat'),
MC("Which point $(x, y)$ is a solution of the inequality $y<2x+1$?","Điểm $(x, y)$ nào là một nghiệm của bất phương trình $y<2x+1$?",["$(0, 2)$","$(1, 4)$","$(-1, 0)$","$(2, 4)$"],None,"D","$4<5$ is true. The others give $2<1$, $4<3$ and $0<-1$, all false.","$4<5$ đúng. Các điểm còn lại cho $2<1$, $4<3$ và $0<-1$, đều sai.",'alg2'),
MC("For $x>0$, which expression is equivalent to $\\sqrt x\\cdot x^2$?","Với $x>0$, biểu thức nào tương đương với $\\sqrt x\\cdot x^2$?",["$x^{\\frac52}$","$x^3$","$x^{\\frac25}$","$x$"],None,"A","$x^{\\frac12}\\cdot x^2=x^{\\frac52}$.","$x^{\\frac12}\\cdot x^2=x^{\\frac52}$.",'exp'),
SA("If $2x+y=9$ and $x+2y=9$, what is the value of $x+y$?","Nếu $2x+y=9$ và $x+2y=9$ thì giá trị của $x+y$ bằng bao nhiêu?","6","Adding gives $3x+3y=18$, so $x+y=6$.","Cộng lại được $3x+3y=18$, nên $x+y=6$.",'alg1'),
MC("A train travels at 72 kilometers per hour. What is its speed in meters per second?","Một đoàn tàu chạy với tốc độ 72 ki-lô-mét mỗi giờ. Tốc độ đó bằng bao nhiêu mét mỗi giây?",["$2$","$259.2$","$72{,}000$","$20$"],["$2$","$259{,}2$","$72.000$","$20$"],"D","$72\\cdot\\dfrac{1{,}000}{3{,}600}=20$.","$72\\cdot\\dfrac{1.000}{3.600}=20$.",'rat'),
MC("The function $f$ is defined by $f(x)=(x-4)(x+1)$. What is the value of $f(0)$?","Hàm số $f$ được cho bởi $f(x)=(x-4)(x+1)$. Giá trị của $f(0)$ là",["$4$","$-4$","$3$","$-3$"],None,"B","$(-4)(1)=-4$.","$(-4)(1)=-4$.",'quad'),
MC("A cylinder has radius 3 and height 4. What is its volume?","Một hình trụ có bán kính đáy 3 và chiều cao 4. Thể tích của nó là",["$12\\pi$","$24\\pi$","$36\\pi$","$48\\pi$"],None,"C","$\\pi\\cdot9\\cdot4=36\\pi$.","$\\pi\\cdot9\\cdot4=36\\pi$.",'geo1'),
SA("If $2^{x+1}=32$, what is the value of $x$?","Nếu $2^{x+1}=32$ thì giá trị của $x$ bằng bao nhiêu?","4","$32=2^5$, so $x+1=5$.","$32=2^5$, nên $x+1=5$.",'expo'),
MC("$$ax+3y=6$$ $$2x+6y=12$$ In the system, $a$ is a constant. The system has infinitely many solutions. What is the value of $a$?","$$ax+3y=6$$ $$2x+6y=12$$ Trong hệ, $a$ là hằng số. Hệ có vô số nghiệm. Giá trị của $a$ là",["$2$","$3$","$4$","$1$"],None,"D","The second equation is twice the first, so $2a=2$ and $a=1$.","Phương trình thứ hai gấp đôi phương trình thứ nhất, nên $2a=2$ và $a=1$.",'alg1'),
SA("Of 200 adults surveyed, 120 own a car. Of the car owners, 30 also cycle to work. If a car owner is chosen at random, what is the probability that the person cycles to work? Give your answer as a decimal.","Trong 200 người trưởng thành được khảo sát, 120 người có ô tô. Trong số người có ô tô, 30 người cũng đạp xe đi làm. Chọn ngẫu nhiên một người có ô tô. Xác suất để người đó đạp xe đi làm là bao nhiêu? Viết dưới dạng số thập phân.","0.25","$\\dfrac{30}{120}=0.25$.","$\\dfrac{30}{120}=0{,}25$.",'stat'),
MC("The function $f(x)=a(x-2)^2+5$, where $a$ is a constant, satisfies $f(4)=13$. What is the value of $f(0)$?","Hàm số $f(x)=a(x-2)^2+5$, với $a$ là hằng số, thoả mãn $f(4)=13$. Giá trị của $f(0)$ là",["$5$","$9$","$13$","$21$"],None,"C","$4a+5=13$ gives $a=2$, and $f(0)=2\\cdot4+5=13$. The graph is symmetric about $x=2$, so $f(0)=f(4)$.","$4a+5=13$ cho $a=2$, và $f(0)=2\\cdot4+5=13$. Đồ thị đối xứng qua $x=2$, nên $f(0)=f(4)$.",'quad'),
]

T2M2=[
MC("If $3(x-2)+4=2x+7$, what is the value of $x$?","Nếu $3(x-2)+4=2x+7$ thì giá trị của $x$ là",["$9$","$5$","$3$","$13$"],None,"A","$3x-2=2x+7$, so $x=9$.","$3x-2=2x+7$, nên $x=9$.",'alg1'),
MC("After a 25% discount, a pair of headphones costs 45 dollars. What was the price before the discount, in dollars?","Sau khi giảm 25%, một chiếc tai nghe có giá 45 đô la. Giá trước khi giảm là bao nhiêu đô la?",["$56.25$","$60$","$70$","$33.75$"],["$56{,}25$","$60$","$70$","$33{,}75$"],"B","$0.75P=45$, so $P=60$. Option A adds 25% of 45.","$0{,}75P=45$, nên $P=60$. Phương án A cộng thêm 25% của 45.",'rat'),
SA("For all $x\\ne4$, $\\dfrac{x^2-16}{x-4}=ax+b$, where $a$ and $b$ are constants. What is the value of $a+b$?","Với mọi $x\\ne4$, $\\dfrac{x^2-16}{x-4}=ax+b$, trong đó $a$ và $b$ là các hằng số. Giá trị của $a+b$ bằng bao nhiêu?","5","$\\dfrac{(x-4)(x+4)}{x-4}=x+4$, so $a=1$, $b=4$.","$\\dfrac{(x-4)(x+4)}{x-4}=x+4$, nên $a=1$, $b=4$.",'exp'),
MC("What is the measure of each interior angle of a regular pentagon?","Số đo mỗi góc trong của ngũ giác đều là",["$72^\\circ$","$120^\\circ$","$108^\\circ$","$540^\\circ$"],None,"C","$\\dfrac{3\\cdot180^\\circ}{5}=108^\\circ$. Option A is the exterior angle.","$\\dfrac{3\\cdot180^\\circ}{5}=108^\\circ$. Phương án A là góc ngoài.",'geo1'),
MC("What is the slope of a line perpendicular to $2x+5y=10$?","Hệ số góc của một đường thẳng vuông góc với $2x+5y=10$ là",["$-\\dfrac25$","$\\dfrac25$","$-\\dfrac52$","$\\dfrac52$"],None,"D","$2x+5y=10$ has slope $-\\dfrac25$; the negative reciprocal is $\\dfrac52$.","$2x+5y=10$ có hệ số góc $-\\dfrac25$; nghịch đảo đối là $\\dfrac52$.",'alg2'),
MC("For $x\\ne1$ and $x\\ne-1$, which expression is equivalent to $\\dfrac{1}{x+1}+\\dfrac{1}{x-1}$?","Với $x\\ne1$ và $x\\ne-1$, biểu thức nào tương đương với $\\dfrac{1}{x+1}+\\dfrac{1}{x-1}$?",["$\\dfrac{2}{x^2-1}$","$\\dfrac{2x}{x^2-1}$","$\\dfrac{2}{2x}$","$\\dfrac{x}{x^2-1}$"],None,"B","$\\dfrac{(x-1)+(x+1)}{x^2-1}=\\dfrac{2x}{x^2-1}$.","$\\dfrac{(x-1)+(x+1)}{x^2-1}=\\dfrac{2x}{x^2-1}$.",'exp'),
SA("A rug is 3 feet long and 2 feet wide. What is its area in square inches? (1 foot = 12 inches)","Một tấm thảm dài 3 feet và rộng 2 feet. Diện tích của nó là bao nhiêu inch vuông? (1 foot = 12 inch)","864","$36\\cdot24=864$, or $6\\cdot144$: one square foot is $144$ square inches.","$36\\cdot24=864$, hoặc $6\\cdot144$: một foot vuông bằng $144$ inch vuông.",'rat'),
MC("How many real solutions does $2x^2-3x+5=0$ have?","Phương trình $2x^2-3x+5=0$ có bao nhiêu nghiệm thực?",["$0$","$1$","$2$","Infinitely many"],["$0$","$1$","$2$","Vô số"],"A","$D=9-40=-31<0$.","$D=9-40=-31<0$.",'quad'),
SA("The function $f$ is linear, with $f(1)=5$ and $f(4)=17$. What is the value of $f(10)$?","Hàm số $f$ là hàm bậc nhất, với $f(1)=5$ và $f(4)=17$. Giá trị của $f(10)$ bằng bao nhiêu?","41","The slope is $4$, so $f(10)=17+6\\cdot4=41$.","Hệ số góc là $4$, nên $f(10)=17+6\\cdot4=41$.",'alg2'),
MC("The amount, in dollars, in an account $t$ years from now is $A(t)=1{,}200(1.5)^{\\frac t4}$. Which statement is true?","Số tiền, tính bằng đô la, trong một tài khoản sau $t$ năm nữa là $A(t)=1.200\\cdot(1{,}5)^{\\frac t4}$. Câu nào đúng?",["The amount increases by 50% each year.","The amount increases by 150% every 4 years.","The amount increases by 50% every 4 years.","The amount increases by 4% each year."],["Số tiền tăng 50% mỗi năm.","Số tiền tăng 150% sau mỗi 4 năm.","Số tiền tăng 50% sau mỗi 4 năm.","Số tiền tăng 4% mỗi năm."],"C","The factor $1.5$ is applied once every 4 years: an increase of 50%.","Hệ số $1{,}5$ được nhân một lần sau mỗi 4 năm: tăng 50%.",'expo'),
MC("In a right triangle, $\\cos A=0.6$ for an acute angle $A$. What is $\\tan A$?","Trong một tam giác vuông, góc nhọn $A$ có $\\cos A=0{,}6$. Giá trị của $\\tan A$ là",["$\\dfrac34$","$\\dfrac43$","$\\dfrac45$","$\\dfrac53$"],None,"B","Take sides 3, 4, 5 with adjacent side 3: $\\tan A=\\dfrac43$.","Lấy các cạnh 3, 4, 5 với cạnh kề bằng 3: $\\tan A=\\dfrac43$.",'geo2'),
MC("A random sample of 400 voters in a state found that 52% support a proposal, with a margin of error of 3%. Which conclusion is best supported?","Một mẫu ngẫu nhiên 400 cử tri trong một bang cho thấy 52% ủng hộ một đề xuất, với biên sai số 3%. Kết luận nào được ủng hộ tốt nhất?",["It is certain that more than half of the voters in the state support the proposal.","Exactly 52% of the voters in the state support the proposal.","The true proportion of supporters in the state is plausibly between 49% and 55%.","About 52% of voters in every state support the proposal."],["Chắc chắn hơn một nửa cử tri trong bang ủng hộ đề xuất.","Đúng 52% cử tri trong bang ủng hộ đề xuất.","Tỉ lệ thật những người ủng hộ trong bang hợp lí nằm trong khoảng từ 49% đến 55%.","Khoảng 52% cử tri ở mọi bang ủng hộ đề xuất."],"C","$52\\pm3$ gives 49% to 55%, which includes values below 50%, so A is not certain.","$52\\pm3$ cho khoảng 49% đến 55%, có cả giá trị dưới 50%, nên A không chắc chắn.",'stat'),
SA("If $(x-3)^2=49$ and $x<0$, what is the value of $x$?","Nếu $(x-3)^2=49$ và $x<0$ thì giá trị của $x$ bằng bao nhiêu?","-4","$x-3=\\pm7$, so $x=10$ or $x=-4$.","$x-3=\\pm7$, nên $x=10$ hoặc $x=-4$.",'quad'),
MC("Ana earns 15 dollars per hour tutoring ($t$ hours) and 12 dollars per hour at a café ($c$ hours). She wants to earn at least 360 dollars and to work at most 28 hours. Which system describes her goals?","Ana kiếm 15 đô la mỗi giờ dạy kèm ($t$ giờ) và 12 đô la mỗi giờ ở quán cà phê ($c$ giờ). Ana muốn kiếm ít nhất 360 đô la và làm nhiều nhất 28 giờ. Hệ nào mô tả mục tiêu của Ana?",["$15t+12c\\le360$, $t+c\\ge28$","$15t+12c\\ge360$, $t+c\\ge28$","$12t+15c\\ge360$, $t+c\\le28$","$15t+12c\\ge360$, $t+c\\le28$"],None,"D","\"At least 360\" is $\\ge360$ for the earnings; \"at most 28\" is $\\le28$ for the hours.","\"Ít nhất 360\" là $\\ge360$ cho thu nhập; \"nhiều nhất 28\" là $\\le28$ cho số giờ.",'alg2'),
MC("The graphs of $y=x^2+2x-8$ and $y=2x+1$ intersect at two points. What is the product of the $x$-coordinates of these points?","Đồ thị $y=x^2+2x-8$ và $y=2x+1$ cắt nhau tại hai điểm. Tích hoành độ của hai điểm đó là",["$-9$","$9$","$0$","$-3$"],None,"A","$x^2+2x-8=2x+1\\iff x^2=9$, so $x=3$ or $x=-3$, with product $-9$.","$x^2+2x-8=2x+1\\iff x^2=9$, nên $x=3$ hoặc $x=-3$, tích bằng $-9$.",'quad'),
SA("In a circle of radius 12, a central angle of $150^\\circ$ cuts off an arc of length $k\\pi$. What is the value of $k$?","Trong đường tròn bán kính 12, góc ở tâm $150^\\circ$ chắn một cung dài $k\\pi$. Giá trị của $k$ bằng bao nhiêu?","10","$\\dfrac{150}{360}\\cdot24\\pi=10\\pi$.","$\\dfrac{150}{360}\\cdot24\\pi=10\\pi$.",'geo2'),
MC("Which of the following is a factor of $x^4-16$?","Biểu thức nào sau đây là một nhân tử của $x^4-16$?",["$x-4$","$x+4$","$x^2+4$","$x^2+16$"],None,"C","$x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)$.","$x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)$.",'exp'),
MC("The mean of 10 numbers is 15. Two of the numbers, whose sum is 50, are removed. What is the mean of the remaining 8 numbers?","Số trung bình của 10 số là 15. Bỏ đi hai số có tổng bằng 50. Số trung bình của 8 số còn lại là",["$12.5$","$15$","$10$","$13$"],["$12{,}5$","$15$","$10$","$13$"],"A","$\\dfrac{150-50}{8}=12.5$.","$\\dfrac{150-50}{8}=12{,}5$.",'stat'),
SA("What is the minimum value of $f(x)=(x-1)(x-7)$?","Giá trị nhỏ nhất của $f(x)=(x-1)(x-7)$ là bao nhiêu?","-9","The vertex is halfway between the zeros, at $x=4$: $f(4)=3\\cdot(-3)=-9$.","Đỉnh nằm chính giữa hai nghiệm, tại $x=4$: $f(4)=3\\cdot(-3)=-9$.",'quad'),
MC("A sphere has surface area $100\\pi$. What is its volume?","Một mặt cầu có diện tích $100\\pi$. Thể tích khối cầu đó là",["$\\dfrac{100\\pi}{3}$","$125\\pi$","$\\dfrac{4{,}000\\pi}{3}$","$\\dfrac{500\\pi}{3}$"],["$\\dfrac{100\\pi}{3}$","$125\\pi$","$\\dfrac{4.000\\pi}{3}$","$\\dfrac{500\\pi}{3}$"],"D","$4\\pi r^2=100\\pi$ gives $r=5$, and $\\dfrac43\\pi\\cdot125=\\dfrac{500\\pi}{3}$.","$4\\pi r^2=100\\pi$ cho $r=5$, và $\\dfrac43\\pi\\cdot125=\\dfrac{500\\pi}{3}$.",'geo1'),
SA("A café sells 22 drinks: some cost 0.40 dollars and the rest cost 0.25 dollars. The total is 7 dollars. How many 0.40-dollar drinks were sold?","Một quán bán 22 món đồ uống: một số món giá 0,40 đô la, số còn lại giá 0,25 đô la. Tổng tiền là 7 đô la. Có bao nhiêu món giá 0,40 đô la đã được bán?","10","$0.4x+0.25(22-x)=7\\iff0.15x=1.5\\iff x=10$.","$0{,}4x+0{,}25(22-x)=7\\iff0{,}15x=1{,}5\\iff x=10$.",'alg1'),
MC("For what positive value of $k$ does the line $y=kx$ intersect the parabola $y=x^2+4$ at exactly one point?","Với giá trị dương nào của $k$ thì đường thẳng $y=kx$ cắt parabol $y=x^2+4$ tại đúng một điểm?",["$2$","$4$","$8$","$16$"],None,"B","$x^2-kx+4=0$ has one solution when $k^2-16=0$, so $k=4$.","$x^2-kx+4=0$ có một nghiệm khi $k^2-16=0$, nên $k=4$.",'quad'),
]

TXT={
 'en':dict(
  intro="""This is a full-length practice test in the format of the digital SAT Math section: two modules of 22 questions, 35 minutes each. All questions are written by Lemonmath; they are not real SAT questions, but they follow the official content domains and question styles.

## How to take this test

| | Module 1 | Module 2 |
|---|---|---|
| Questions | 22 | 22 |
| Time | 35 minutes | 35 minutes |
| Calculator | allowed (Desmos or your own) | allowed |

1. Set a timer for 35 minutes and do Module 1 without stopping. Submit it to see your score.
2. Take a 10-minute break at most, then do Module 2 in another 35 minutes.
3. For student-produced responses, type a number: integers, decimals with a point (for example `0.25`) or a minus sign. On the real test fractions such as `7/2` are also accepted.
4. Afterwards, open the answers, read the explanation of every question you missed and add it to your error log.

On the real test, Module 2 adapts to your performance on Module 1. Here both modules are fixed, and Module 2 is a little harder, like the harder second module.
""",
  m1="## Module 1", m2="## Module 2",
  after="""## After the test

Each module is marked out of 22. Use the table to see which lesson to revise for each question you missed. A score of 18 or more in each module suggests you are ready for the hardest SAT questions; below 12, go back to the lessons before taking another full test.
""",
  th="| Question | Module 1 | Module 2 |\n|---|---|---|", tlabel={'alg1':'Linear equations and systems','alg2':'Linear functions and inequalities','exp':'Equivalent expressions','quad':'Quadratics and nonlinear equations','expo':'Exponential functions','rat':'Ratios, percentages and units','stat':'Statistics and probability','geo1':'Area, volume and angles','geo2':'Triangles, trigonometry and circles'},
  tail="Then take the [second practice test]({other}) after at least a week of revision, and remember to review with the methods in [Revision that works](lesson:evidence-based-revision)."),
 'vi':dict(
  intro="""Đây là một đề luyện đủ thời lượng theo đúng cấu trúc phần Toán của SAT thi trên máy: hai module, mỗi module 22 câu trong 35 phút. Mọi câu hỏi do Lemonmath tự soạn; đây không phải câu hỏi SAT thật, nhưng bám sát các mảng nội dung và kiểu câu hỏi chính thức.

## Cách làm đề

| | Module 1 | Module 2 |
|---|---|---|
| Số câu | 22 | 22 |
| Thời gian | 35 phút | 35 phút |
| Máy tính | được dùng (Desmos hoặc máy của bạn) | được dùng |

1. Đặt đồng hồ 35 phút và làm Module 1 liền một mạch. Nộp bài để xem điểm.
2. Nghỉ tối đa 10 phút, rồi làm Module 2 trong 35 phút tiếp theo.
3. Với câu tự điền đáp số, hãy nhập một số: số nguyên, số thập phân hoặc số âm (ở đây nhập dấu phẩy hay dấu chấm đều được). Trong đề thật, SAT dùng dấu chấm, ví dụ `0.25`, và chấp nhận cả phân số như `7/2`.
4. Làm xong, mở phần đáp án, đọc lời giải của mọi câu sai và ghi vào sổ lỗi sai.

Trong đề thật, Module 2 thay đổi theo kết quả Module 1. Ở đây cả hai module cố định, và Module 2 khó hơn một chút, giống module 2 bản khó.
""",
  m1="## Module 1", m2="## Module 2",
  after="""## Sau khi làm đề

Mỗi module tính trên 22 câu. Dùng bảng dưới đây để biết mỗi câu sai cần ôn lại bài nào. Đạt từ 18 câu trở lên ở mỗi module cho thấy bạn đã sẵn sàng với những câu khó nhất của SAT; dưới 12 câu, hãy quay lại các bài học trước khi làm đề mới.
""",
  th="| Câu | Module 1 | Module 2 |\n|---|---|---|", tlabel={'alg1':'Phương trình và hệ bậc nhất','alg2':'Hàm số bậc nhất và bất phương trình','exp':'Biểu thức tương đương','quad':'Hàm bậc hai, phương trình phi tuyến','expo':'Hàm mũ','rat':'Tỉ số, phần trăm, đơn vị','stat':'Thống kê và xác suất','geo1':'Diện tích, thể tích, góc','geo2':'Tam giác, lượng giác, đường tròn'},
  tail="Sau ít nhất một tuần ôn tập, hãy làm [đề luyện thứ hai]({other}), và nhớ ôn bằng các cách trong bài [Ôn thi theo khoa học](lesson:evidence-based-revision).")}

def block(qs,lang):
    out=[':::quiz test']
    for q in qs:
        stem=q[lang].replace('$$ $$','$$\n$$').replace(' $$','\n$$',1) if '$$' in q[lang] else q[lang]
        if q['t']=='mc':
            opts=q['oe'] if lang=='en' else q['ov']
            out+=['::mc',stem]+[f"{'ABCD'[i]}. {o}" for i,o in enumerate(opts)]+['::key '+q['key'], q['xe'] if lang=='en' else q['xv'],'']
        else:
            k=q['key'] if lang=='en' else q['key'].replace('.',',')
            out+=['::sa',stem,'::key '+k, q['xe'] if lang=='en' else q['xv'],'']
    return '\n'.join(out).rstrip()+'\n:::'

def fix_stem(s):
    # "$$a$$ $$b$$ text" -> two display lines then the text
    if s.startswith('$$'):
        parts=s.split('$$')
        # ['', a, ' ', b, ' text']
        return '$$'+parts[1]+'$$\n$$'+parts[3]+'$$\n'+parts[4].strip()
    return s

def write(n,m1,m2,lang):
    for q in m1+m2: q[lang]=fix_stem(q[lang])
    t=TXT[lang]
    title={'en':f'SAT Math practice test {n}','vi':f'Đề luyện SAT Math số {n}'}[lang]
    desc={'en':f'A full-length SAT Math practice test {n}: two modules of 22 questions, 35 minutes each, marked instantly, with a solution to every question.','vi':f'Đề luyện SAT Math số {n} đủ thời lượng: hai module, mỗi module 22 câu trong 35 phút, chấm điểm ngay, có lời giải từng câu.'}[lang]
    other='lesson:sat-practice-test-'+('2' if n==1 else '1')
    def tl(q): return f"[{t['tlabel'][q['topic']]}](lesson:{L[q['topic']]})"
    rows='\n'.join(f"| {i+1} | {tl(a)} | {tl(b)} |" for i,(a,b) in enumerate(zip(m1,m2)))
    md=f"""---
title: {title}
description: {desc}
minutes: 70
type: test
---

{t['intro']}
{t['m1']}

{block(m1,lang)}

{t['m2']}

{block(m2,lang)}

{t['after']}
{t['th']}
{rows}

{t['tail'].format(other=other)}
"""
    os.makedirs(R+lang+'/exams/sat',exist_ok=True)
    open(R+f'{lang}/exams/sat/sat-practice-test-{n}.md','w').write(md)

for lang in ('en','vi'):
    import copy
    write(1,copy.deepcopy(T1M1),copy.deepcopy(T1M2),lang)
    write(2,copy.deepcopy(T2M1),copy.deepcopy(T2M2),lang)
from collections import Counter
for nm,m in (('T1M1',T1M1),('T1M2',T1M2),('T2M1',T2M1),('T2M2',T2M2)):
    print(nm,len(m),Counter(q['key'] for q in m if q['t']=='mc'),sum(q['t']=='sa' for q in m))
