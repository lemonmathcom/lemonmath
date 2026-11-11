Viết bài làm ra giấy. Mỗi câu $6$ điểm: mỗi ý (A)(i), (A)(ii), (B)(i), (B)(ii), (C)(i), (C)(ii) được $1$ điểm. Ghi số thập phân chính xác đến ba chữ số sau dấu phẩy.

### Part A: dùng máy tính đồ thị (35 phút)

:::exercise Câu 1 (6 điểm): Khái niệm hàm số (Function concepts)
Cho hàm số $f(x)=0{,}5x^3-2x+1$. Hàm số $g$ đồng biến, xác định trên mọi số thực, có một số giá trị cho trong bảng.

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|
| $g(x)$ | $-7$ | $-2$ | $1$ | $4$ | $9$ | $16$ |

(A) (i) Tính $f\big(g(0)\big)$. (ii) Tính $g^{-1}(4)$.

(B) (i) Tìm mọi giá trị $x$ sao cho $f(x)=2$. (ii) Tính tốc độ biến thiên trung bình của $f$ trên đoạn $[1,3]$.

(C) (i) Mô tả dáng điệu ở vô cực của $f$ bằng kí hiệu giới hạn. (ii) $f$ có khả nghịch trên toàn bộ tập xác định không? Giải thích.

::hint
**Kiến thức:** đọc $g(0)$ và $g^{-1}(4)$ từ bảng; giải $f(x)=2$ bằng đồ thị; ở (C)(ii) tìm hai đầu vào có cùng đầu ra.

::solution
(A) (i) Từ bảng, $g(0)=1$, nên $f\big(g(0)\big)=f(1)=0{,}5-2+1=-0{,}5$.

(ii) Vì $g(1)=4$ và $g$ đồng biến, đầu vào duy nhất cho đầu ra $4$ là $1$, nên $g^{-1}(4)=1$.

(B) (i) Vẽ $y=0{,}5x^3-2x+1$ và $y=2$, hoặc giải $0{,}5x^3-2x-1=0$, được ba giao điểm: $x\approx-1{,}675$, $x\approx-0{,}539$ và $x\approx2{,}214$. Cần đủ cả ba giá trị mới được điểm.

(ii) Ta có $f(3)=13{,}5-6+1=8{,}5$ và $f(1)=-0{,}5$, nên tốc độ biến thiên trung bình là $\dfrac{f(3)-f(1)}{3-1}=\dfrac{8{,}5-(-0{,}5)}{2}=4{,}5$.

(C) (i) Số hạng bậc cao nhất $0{,}5x^3$ có bậc lẻ và hệ số dương, nên $\displaystyle\lim_{x\to-\infty}f(x)=-\infty$ và $\displaystyle\lim_{x\to\infty}f(x)=\infty$.

(ii) Không. Chẳng hạn $f(0)=1$ và $f(2)=4-4+1=1$: hai đầu vào khác nhau cho cùng một đầu ra, nên $f$ không phải hàm một-một và không có hàm ngược trên toàn bộ tập xác định.

Vậy các đáp số là $-0{,}5$ và $1$; $x\approx-1{,}675;\ -0{,}539;\ 2{,}214$ và $4{,}5$; hai giới hạn trên, và "không khả nghịch".

**Đáp số.** (A) $-0{,}5$; $1$. (B) $-1{,}675$; $-0{,}539$; $2{,}214$; $4{,}5$. (C) $-\infty$ và $\infty$; không, vì $f(0)=f(2)$.
:::

:::exercise Câu 2 (6 điểm): Mô hình không tuần hoàn (Modeling a non-periodic context)
Một ứng dụng mới có $12$ nghìn người dùng khi ra mắt ($t=0$) và $30$ nghìn người dùng sau $4$ tháng. Số người dùng (nghìn người) sau $t$ tháng được mô hình hoá bởi hàm mũ $U(t)=ab^t$.

(A) (i) Tìm $a$ và $b$. (ii) Người ta cũng đề xuất một mô hình tuyến tính $L(t)$ đi qua cùng hai điểm dữ liệu. Viết biểu thức của $L(t)$.

(B) (i) Tại $t=10$, ứng dụng thực tế có $140$ nghìn người dùng. Tính phần dư của mô hình hàm mũ tại $t=10$, và cho biết mô hình nào gần giá trị thực tế hơn. (ii) Dùng mô hình hàm mũ để tìm thời điểm ứng dụng đạt $200$ nghìn người dùng.

(C) (i) Giải thích ý nghĩa của $b$ theo tình huống. (ii) Nêu một lí do khiến mô hình hàm mũ có thể không phù hợp khi $t$ lớn.

::hint
**Kiến thức:** $a=U(0)$; $b^4=\dfrac{30}{12}$; phần dư $=$ thực tế $-$ dự đoán.

::solution
(A) (i) Tại $t=0$, $U(0)=a=12$. Tại $t=4$, $12b^4=30$, nên $b^4=2{,}5$ và $b=2{,}5^{1/4}\approx1{,}257$.

(ii) Hệ số góc qua $(0,12)$ và $(4,30)$ là $\dfrac{30-12}{4}=4{,}5$, nên $L(t)=12+4{,}5t$.

(B) (i) Mô hình hàm mũ dự đoán $U(10)=12\cdot2{,}5^{2{,}5}\approx118{,}585$, nên phần dư là $140-118{,}585=21{,}415$ nghìn người. Mô hình tuyến tính dự đoán $L(10)=57$, xa $140$ hơn nhiều, nên mô hình hàm mũ gần hơn.

(ii) Giải $12b^t=200$ được $b^t=\dfrac{50}{3}$ và $t=\dfrac{\ln(50/3)}{\ln b}\approx12{,}282$ tháng.

(C) (i) Vì $b\approx1{,}257$ nên số người dùng được nhân với khoảng $1{,}257$ mỗi tháng: tăng khoảng $25{,}7\%$ mỗi tháng.

(ii) Mô hình tăng không giới hạn, nhưng số người dùng không thể vượt quá số khách hàng tiềm năng, nên sự tăng trưởng phải chậm lại; mô hình sẽ ước lượng quá cao khi $t$ lớn.

Vậy $U(t)=12(1{,}257)^t$, $L(t)=12+4{,}5t$, phần dư là $21{,}415$, và ứng dụng đạt $200$ nghìn người dùng sau khoảng $12{,}282$ tháng.

**Đáp số.** (A) $a=12$, $b\approx1{,}257$; $L(t)=12+4{,}5t$. (B) $21{,}415$, mô hình hàm mũ; $t\approx12{,}282$. (C) tăng khoảng $25{,}7\%$ mỗi tháng; tăng không giới hạn là không thực tế.
:::

### Part B: không dùng máy tính (35 phút)

:::exercise Câu 3 (6 điểm): Mô hình tuần hoàn (Modeling a periodic context)
Độ sâu mực nước tại một cầu cảng thay đổi theo dạng sin. Độ sâu thấp nhất là $2$ mét tại $t=1$ giờ, và độ sâu cao nhất kế tiếp là $10$ mét tại $t=7$ giờ.

(A) (i) Tìm chu kì, biên độ và đường trung bình của hàm độ sâu. (ii) Viết biểu thức của độ sâu $D(t)$ (mét) sau $t$ giờ kể từ nửa đêm.

(B) (i) Tính độ sâu tại $t=3$. (ii) Trên khoảng $1<t<4$, độ sâu tăng hay giảm, và tốc độ biến thiên của nó tăng hay giảm? Giải thích.

(C) (i) Tìm mọi thời điểm $t$ thuộc $[0,12]$ mà độ sâu bằng $8$ mét. (ii) Một con thuyền cần độ sâu ít nhất $8$ mét. Trong $[0,12]$, thuyền dùng được cầu cảng trong bao lâu?

::hint
**Kiến thức:** từ thấp nhất đến cao nhất kế tiếp là nửa chu kì; bắt đầu ở cực tiểu thì dùng $-\cos$.

::solution
(A) (i) Từ cực tiểu tại $t=1$ đến cực đại kế tiếp tại $t=7$ là nửa chu kì, nên chu kì là $12$ giờ. Biên độ là $\dfrac{10-2}{2}=4$ và đường trung bình là $y=\dfrac{10+2}{2}=6$.

(ii) Hàm số bắt đầu ở cực tiểu tại $t=1$, nên dùng $-\cos$ dịch sang phải $1$ đơn vị, với $b=\dfrac{2\pi}{12}=\dfrac\pi6$:
$$D(t)=6-4\cos\frac{\pi(t-1)}{6}.$$

(B) (i) $D(3)=6-4\cos\dfrac{\pi}{3}=6-4\cdot\dfrac12=4$ mét.

(ii) Trên $(1,4)$, độ sâu đi từ cực tiểu tại $t=1$ lên đường trung bình tại $t=4$, sau một phần tư chu kì, nên độ sâu tăng. Trong một phần tư chu kì này đồ thị lõm lên, nên độ sâu tăng với tốc độ tăng dần.

(C) (i) $D(t)=8$ cho $-4\cos\dfrac{\pi(t-1)}{6}=2$, tức $\cos\dfrac{\pi(t-1)}{6}=-\dfrac12$. Với $t$ thuộc $[0,12]$, góc $\dfrac{\pi(t-1)}{6}$ thuộc $\left[-\dfrac\pi6,\dfrac{11\pi}{6}\right]$, nên bằng $\dfrac{2\pi}{3}$ hoặc $\dfrac{4\pi}{3}$, cho $t-1=4$ hoặc $t-1=8$, tức $t=5$ hoặc $t=9$.

(ii) Độ sâu ít nhất $8$ m giữa hai thời điểm này, quanh cực đại tại $t=7$, tức từ $t=5$ đến $t=9$: $4$ giờ.

Vậy $D(t)=6-4\cos\dfrac{\pi(t-1)}{6}$, $D(3)=4$ m, và thuyền dùng được cầu cảng trong $4$ giờ.

**Đáp số.** (A) $12$, $4$, $y=6$; $D(t)=6-4\cos\dfrac{\pi(t-1)}{6}$. (B) $4$ m; tăng với tốc độ tăng dần. (C) $t=5$, $t=9$; $4$ giờ.
:::

:::exercise Câu 4 (6 điểm): Biến đổi biểu thức (Symbolic manipulations)
(A) (i) Giải phương trình $\log_2(x+3)+\log_2(x-1)=5$. (ii) Viết $e^{2x+\ln3}$ dưới dạng $a\cdot b^x$, với $a$ và $b$ là hằng số.

(B) (i) Giải phương trình $2\sin^2\theta-3\sin\theta+1=0$ với $0\le\theta<2\pi$. (ii) Viết $\dfrac{\sin2x}{1+\cos2x}$ thành một hàm lượng giác duy nhất của $x$, tại những chỗ biểu thức xác định.

(C) (i) Tìm tập xác định của $h(x)=\ln\left(x^2-4x\right)$. (ii) Với $x>0$, viết $\log\left(1000x^2\right)-\log(10x)$ dưới dạng $c+\log x$.

::hint
**Kiến thức:** quy tắc tích và thương của logarit; $e^{\ln3}=3$; phân tích phương trình bậc hai theo $\sin\theta$; $\sin2x=2\sin x\cos x$ và $1+\cos2x=2\cos^2x$.

::solution
(A) (i) Theo quy tắc tích, $\log_2\big[(x+3)(x-1)\big]=5$, nên $(x+3)(x-1)=32$, tức $x^2+2x-35=0$ và $(x+7)(x-5)=0$. Giá trị $x=-7$ làm hai biểu thức dưới dấu logarit âm, nên bị loại; $x=5$ cho hai biểu thức $8$ và $4$. Nghiệm là $x=5$.

(ii) Theo quy tắc luỹ thừa, $e^{2x+\ln3}=e^{\ln3}\cdot e^{2x}=3\left(e^2\right)^x$, nên $a=3$ và $b=e^2$.

(B) (i) Phân tích như phương trình bậc hai theo $\sin\theta$: $(2\sin\theta-1)(\sin\theta-1)=0$. Nếu $\sin\theta=\dfrac12$ thì $\theta=\dfrac\pi6$ hoặc $\dfrac{5\pi}{6}$; nếu $\sin\theta=1$ thì $\theta=\dfrac\pi2$.

(ii) Dùng công thức nhân đôi, $\dfrac{\sin2x}{1+\cos2x}=\dfrac{2\sin x\cos x}{2\cos^2x}=\dfrac{\sin x}{\cos x}=\tan x$.

(C) (i) Biểu thức dưới dấu logarit phải dương: $x^2-4x=x(x-4)>0$, đúng khi $x<0$ hoặc $x>4$.

(ii) Theo quy tắc thương, $\log\left(1000x^2\right)-\log(10x)=\log\dfrac{1000x^2}{10x}=\log(100x)=\log100+\log x=2+\log x$.

Vậy các đáp số là $x=5$; $3\left(e^2\right)^x$; $\dfrac\pi6,\dfrac\pi2,\dfrac{5\pi}6$; $\tan x$; $x<0$ hoặc $x>4$; $2+\log x$.

**Đáp số.** (A) $x=5$; $3\left(e^2\right)^x$. (B) $\dfrac\pi6,\ \dfrac\pi2,\ \dfrac{5\pi}6$; $\tan x$. (C) $x<0$ hoặc $x>4$; $2+\log x$.
:::
