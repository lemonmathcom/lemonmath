---
title: Ma trận và lí thuyết đồ thị
description: IB Math AI HL: phép toán ma trận và ma trận nghịch đảo, giải hệ phương trình, ma trận chuyển và trạng thái dừng, đồ thị, ma trận kề, cây và bài toán đường đi.
minutes: 55
---

:::goals
- Nhân ma trận, tính định thức và ma trận nghịch đảo cấp $2$, giải hệ phương trình bằng ma trận.
- Dùng ma trận chuyển để dự đoán trạng thái tương lai và tìm trạng thái dừng.
- Mô tả đồ thị bằng đỉnh, cạnh, bậc và ma trận kề, và đếm số hành trình.
- Dùng thuật toán Kruskal tìm cây khung nhỏ nhất, giải bài toán người đưa thư Trung Hoa, và tìm cận cho bài toán người bán hàng.
:::

Một người giao hàng muốn ghé qua mọi cửa hàng trong thị trấn rồi về kho theo đường ngắn nhất. Một hội đồng muốn nối cáp cho năm ngôi làng mà tốn ít cáp nhất. Một người dự báo thời tiết biết rằng sau một ngày nắng thường lại là một ngày nắng. Những bài toán này nghe rất khác nhau, nhưng học sinh HL của Math AI giải tất cả bằng hai công cụ: **ma trận**, dùng để lưu nhiều số cùng lúc, và **đồ thị**, chẳng qua là những dấu chấm nối với nhau bằng các đường.

Không công cụ nào cần lí thuyết cao siêu. Điều làm chúng mạnh là máy tính xử lí ma trận lớn chỉ trong một giây, và vài thuật toán rõ ràng biến những bài toán đường đi rối rắm thành các bước làm tuần tự. Việc của ta là lập bài toán cho đúng và đọc kết quả theo tình huống.

## Ma trận

Tích $AB$ xác định khi số cột của $A$ bằng số hàng của $B$; mỗi phần tử là một hàng của $A$ nhân với một cột của $B$. Thứ tự rất quan trọng: thường thì $AB\ne BA$.

Với $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, **định thức** là $\det A=ad-bc$ và, nếu $\det A\ne0$,
$$A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.$$
Một hệ phương trình tuyến tính viết được dưới dạng $AX=B$, nên $X=A^{-1}B$. Với hệ $3\times3$, GDC tìm $A^{-1}$ hoặc giải trực tiếp.

:::example Giải hệ bằng ma trận nghịch đảo
Giải hệ $2x+y=7$ và $5x+3y=18$ bằng ma trận nghịch đảo.

**Lời giải.** Dưới dạng ma trận, $\begin{pmatrix}2&1\\5&3\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}7\\18\end{pmatrix}$. Định thức là $2(3)-1(5)=1$, nên ma trận nghịch đảo là $\begin{pmatrix}3&-1\\-5&2\end{pmatrix}$.

Khi đó $\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}3&-1\\-5&2\end{pmatrix}\begin{pmatrix}7\\18\end{pmatrix}=\begin{pmatrix}21-18\\-35+36\end{pmatrix}=\begin{pmatrix}3\\1\end{pmatrix}$.

Vậy $x=3$ và $y=1$. Kiểm tra: $2(3)+1=7$ và $5(3)+3(1)=18$.
:::

## Ma trận chuyển

Khi một hệ chuyển giữa các trạng thái với xác suất cố định, **ma trận chuyển** $T$ chứa các xác suất đó, với mỗi **cột** có tổng bằng $1$ (cột $j$ cho biết trạng thái $j$ chuyển đi đâu ở bước sau). Nếu $s_0$ là vectơ trạng thái ban đầu thì sau $n$ bước $s_n=T^ns_0$. Về lâu dài, nhiều hệ ổn định ở một **trạng thái dừng** $s$ với $Ts=s$.

:::example Nắng hay mưa?
Ở một thị trấn, sau một ngày nắng là ngày nắng với xác suất $0{,}8$, còn sau một ngày mưa là ngày nắng với xác suất $0{,}4$. Hôm nay trời nắng. Xác suất trời nắng sau hai ngày là bao nhiêu, và về lâu dài tỉ lệ ngày nắng là bao nhiêu?
A. $0{,}72$; $\dfrac23$
B. $0{,}64$; $\dfrac23$
C. $0{,}72$; $0{,}6$
D. $0{,}8$; $0{,}5$

**Lời giải.** Với các trạng thái (nắng, mưa), $T=\begin{pmatrix}0{,}8&0{,}4\\0{,}2&0{,}6\end{pmatrix}$ và $s_0=\begin{pmatrix}1\\0\end{pmatrix}$. Khi đó $T^2=\begin{pmatrix}0{,}72&0{,}56\\0{,}28&0{,}44\end{pmatrix}$, nên $s_2=\begin{pmatrix}0{,}72\\0{,}28\end{pmatrix}$.

Với trạng thái dừng $\begin{pmatrix}p\\1-p\end{pmatrix}$, hàng thứ nhất của $Ts=s$ cho $0{,}8p+0{,}4(1-p)=p$, nên $0{,}4=0{,}6p$ và $p=\dfrac23$.

Vậy xác suất trời nắng sau hai ngày là $0{,}72$, và về lâu dài $\dfrac23$ số ngày là ngày nắng, chọn đáp án **A**. Phương án B dùng $0{,}8^2$, quên khả năng đi qua một ngày mưa.
:::

## Đồ thị

Một **đồ thị** gồm các **đỉnh** nối với nhau bằng các **cạnh**; đồ thị **có trọng số** có một con số (khoảng cách, chi phí, thời gian) trên mỗi cạnh. **Bậc** của một đỉnh là số cạnh tại đỉnh đó, và tổng các bậc bằng hai lần số cạnh. **Ma trận kề** $M$ có phần tử $m_{ij}$ bằng số cạnh từ đỉnh $i$ đến đỉnh $j$; các phần tử của $M^k$ đếm số **hành trình** độ dài $k$.

- **Chu trình Euler** (đi qua mọi cạnh đúng một lần rồi về chỗ cũ) tồn tại khi mọi đỉnh có bậc chẵn; **đường đi Euler** tồn tại khi có đúng hai đỉnh bậc lẻ, và nó nối hai đỉnh đó.
- **Chu trình Hamilton** đi qua mọi đỉnh đúng một lần rồi về chỗ cũ.
- **Cây** là đồ thị liên thông không có chu trình; **cây khung nhỏ nhất** nối mọi đỉnh với tổng trọng số nhỏ nhất.

:::diagram Một đồ thị có trọng số với năm đỉnh
alt: Năm đỉnh A, B, C, D và E; các cạnh là AB 4, AC 2, BC 5, BD 10, CD 3, CE 8 và DE 6
point A 0,2 left
point B 3,4 above
point C 3,0 below
point D 6,3 right
point E 6,-1 right
segment A B "4"
segment A C "2"
segment B C "5"
segment B D "10"
segment C D "3"
segment C E "8"
segment D E "6"
:::

**Thuật toán Kruskal:** sắp các cạnh theo trọng số tăng dần; lần lượt thêm từng cạnh trừ khi nó tạo thành chu trình; dừng khi mọi đỉnh đã được nối.

:::example Cây khung nhỏ nhất
Dùng thuật toán Kruskal tìm cây khung nhỏ nhất của đồ thị trên và tổng trọng số của nó.
A. $15$
B. $14$
C. $17$
D. $38$

**Lời giải.** Theo thứ tự trọng số, các cạnh là $AC\ (2)$, $CD\ (3)$, $AB\ (4)$, $BC\ (5)$, $DE\ (6)$, $CE\ (8)$, $BD\ (10)$.

Thêm $AC$, $CD$ và $AB$. Bỏ qua $BC$, vì $B$ và $C$ đã được nối qua $A$. Thêm $DE$; lúc này cả năm đỉnh đã nối với nhau, nên dừng.

Vậy cây gồm $AC$, $CD$, $AB$, $DE$ với tổng trọng số $2+3+4+6=15$, chọn đáp án **A**. Phương án D là tổng trọng số của mọi cạnh.
:::

**Bài toán người đưa thư Trung Hoa (route inspection):** để đi qua mọi cạnh rồi về chỗ cũ, tìm các đỉnh bậc lẻ. Nếu có hai đỉnh như vậy, đi lặp lại đường ngắn nhất giữa chúng; độ dài nhỏ nhất của hành trình bằng tổng trọng số các cạnh cộng độ dài đường đó.

**Bài toán người bán hàng:** để đi qua mọi đỉnh rồi về chỗ cũ, thuật toán **láng giềng gần nhất** cho một **cận trên**; bỏ đi một đỉnh, tìm cây khung nhỏ nhất của phần còn lại rồi cộng hai cạnh ngắn nhất từ đỉnh đã bỏ cho một **cận dưới**.

:::warning Những cái bẫy thường gặp
- **Thứ tự nhân ma trận:** $AB$ và $BA$ thường khác nhau; $X=A^{-1}B$, không phải $BA^{-1}$.
- **Cột của ma trận chuyển:** kiểm tra ma trận của bạn viết theo chiều nào; ở đây mỗi cột có tổng bằng $1$.
- **Kruskal:** loại mọi cạnh tạo thành chu trình, kể cả khi nó ngắn.
- **Người đưa thư:** cộng **đường ngắn nhất** giữa các đỉnh lẻ, có thể không phải cạnh nối trực tiếp.
- **Các cận:** láng giềng gần nhất cho cận trên, chưa chắc là đường tốt nhất.
:::

:::terms
- matrix / determinant / inverse | ma trận / định thức / ma trận nghịch đảo
- transition matrix | ma trận chuyển
- steady state | trạng thái dừng
- vertex / edge / degree | đỉnh / cạnh / bậc
- adjacency matrix | ma trận kề
- walk / trail / cycle | hành trình / đường đi / chu trình
- Eulerian / Hamiltonian | Euler / Hamilton
- minimum spanning tree | cây khung nhỏ nhất
- route inspection problem | bài toán người đưa thư Trung Hoa
- travelling salesman problem | bài toán người bán hàng
:::

## Bài tập tương tự

:::exercise
Tính $AB$ với $A=\begin{pmatrix}1&2\\3&0\end{pmatrix}$ và $B=\begin{pmatrix}4&1\\-1&2\end{pmatrix}$.

::hint
**Kiến thức:** phần tử $(i,j)$ là hàng $i$ của $A$ nhân với cột $j$ của $B$.

::solution
Tích $AB$ xác định vì $A$ có $2$ cột và $B$ có $2$ hàng. Hàng $1$ của $A$ nhân với các cột của $B$: $1(4)+2(-1)=2$ và $1(1)+2(2)=5$. Hàng $2$: $3(4)+0(-1)=12$ và $3(1)+0(2)=3$.

Vậy $AB=\begin{pmatrix}2&5\\12&3\end{pmatrix}$.

**Đáp số.** $\begin{pmatrix}2&5\\12&3\end{pmatrix}$.
:::

:::exercise
Tìm ma trận nghịch đảo của $C=\begin{pmatrix}4&2\\3&2\end{pmatrix}$.

::hint
**Kiến thức:** $\det C=4(2)-2(3)$.

::solution
Định thức là $\det C=8-6=2\ne0$, nên ma trận nghịch đảo tồn tại.

Đổi chỗ hai phần tử trên đường chéo chính, đổi dấu hai phần tử còn lại rồi chia cho $2$, ta được $C^{-1}=\dfrac12\begin{pmatrix}2&-2\\-3&4\end{pmatrix}=\begin{pmatrix}1&-1\\-1{,}5&2\end{pmatrix}$.

Vậy $C^{-1}=\begin{pmatrix}1&-1\\-1{,}5&2\end{pmatrix}$.

**Đáp số.** $\begin{pmatrix}1&-1\\-1{,}5&2\end{pmatrix}$.
:::

:::exercise
Một đồ thị có năm đỉnh với bậc $3,\ 3,\ 2,\ 2,\ 2$. Đồ thị có bao nhiêu cạnh, và có chu trình Euler hay đường đi Euler không?

::hint
**Kiến thức:** tổng các bậc bằng hai lần số cạnh.

::solution
Tổng các bậc là $3+3+2+2+2=12$, nên đồ thị có $\dfrac{12}{2}=6$ cạnh.

Có đúng hai đỉnh bậc lẻ, nên không có chu trình Euler, nhưng có đường đi Euler bắt đầu ở một đỉnh bậc lẻ và kết thúc ở đỉnh bậc lẻ còn lại.

Vậy đồ thị có $6$ cạnh và có đường đi Euler, nhưng không có chu trình Euler.

**Đáp số.** $6$ cạnh; chỉ có đường đi Euler.
:::

:::exercise
Với đồ thị có các cạnh $AB$, $AC$, $BC$ và $CD$, viết ma trận kề và tìm số hành trình độ dài $2$ từ $A$ đến $D$.

::hint
**Kiến thức:** hành trình độ dài $2$ từ $A$ đến $D$ có dạng $A\to X\to D$.

::solution
Với các đỉnh theo thứ tự $A,B,C,D$, ma trận kề là $M=\begin{pmatrix}0&1&1&0\\1&0&1&0\\1&1&0&1\\0&0&1&0\end{pmatrix}$.

Hành trình độ dài $2$ từ $A$ đến $D$ phải đi qua một đỉnh nối với cả hai; chỉ có $C$ thoả mãn, nên có một hành trình $A\to C\to D$. Đây chính là phần tử ở hàng $A$, cột $D$ của $M^2$.

Vậy có $1$ hành trình độ dài $2$ từ $A$ đến $D$.

**Đáp số.** $1$.
:::

:::exercise
Với $T=\begin{pmatrix}0{,}9&0{,}3\\0{,}1&0{,}7\end{pmatrix}$, tìm vectơ trạng thái dừng.

::hint
**Kiến thức:** giải $0{,}9p+0{,}3(1-p)=p$.

::solution
Ở trạng thái dừng, nhân với $T$ không làm vectơ thay đổi. Gọi trạng thái dừng là $\begin{pmatrix}p\\1-p\end{pmatrix}$. Hàng thứ nhất của $Ts=s$ cho $0{,}9p+0{,}3(1-p)=p$, nên $0{,}3=0{,}4p$ và $p=0{,}75$.

Vậy vectơ trạng thái dừng là $\begin{pmatrix}0{,}75\\0{,}25\end{pmatrix}$.

**Đáp số.** $\begin{pmatrix}0{,}75\\0{,}25\end{pmatrix}$.
:::

## Bài tập vận dụng

:::exercise
Một bảo tàng bán được $100$ vé, thu $880$ đô la. Vé người lớn giá $12$ đô la, vé trẻ em $6$ đô la và vé người cao tuổi $8$ đô la, và số vé trẻ em gấp đôi số vé người cao tuổi. Mỗi loại bán được bao nhiêu vé?

::hint
**Kiến thức:** ba phương trình theo $a$, $c$, $s$; giải bằng ma trận trên GDC.

::solution
Gọi $a$, $c$ và $s$ là số vé người lớn, trẻ em và người cao tuổi. Khi đó $a+c+s=100$, $12a+6c+8s=880$ và $c-2s=0$.

Dưới dạng ma trận $\begin{pmatrix}1&1&1\\12&6&8\\0&1&-2\end{pmatrix}\begin{pmatrix}a\\c\\s\end{pmatrix}=\begin{pmatrix}100\\880\\0\end{pmatrix}$, và GDC cho $a=40$, $c=40$, $s=20$. Kiểm tra: $480+240+160=880$.

Vậy bảo tàng bán được $40$ vé người lớn, $40$ vé trẻ em và $20$ vé người cao tuổi.

**Đáp số.** $40$ người lớn, $40$ trẻ em, $20$ người cao tuổi.
:::

:::exercise
Với đồ thị có trọng số trong bài, tìm độ dài hành trình ngắn nhất đi qua mọi cạnh ít nhất một lần và trở về điểm xuất phát.

::hint
**Kiến thức:** các đỉnh bậc lẻ là $B$ và $D$.

::solution
Các bậc là $A:2$, $B:3$, $C:4$, $D:3$, $E:2$, nên các đỉnh bậc lẻ là $B$ và $D$. Tổng trọng số mọi cạnh là $4+2+5+10+3+8+6=38$.

Đường ngắn nhất từ $B$ đến $D$ là $B\to C\to D$ dài $5+3=8$ (ngắn hơn cạnh trực tiếp $10$, hay $B\to A\to C\to D$ dài $9$).

Vậy hành trình ngắn nhất dài $38+8=46$.

**Đáp số.** $46$.
:::

:::exercise
Bốn thị trấn có khoảng cách (km): $AB=5$, $AC=8$, $AD=6$, $BC=4$, $BD=7$, $CD=3$. Tìm cận trên cho bài toán người bán hàng bằng thuật toán láng giềng gần nhất bắt đầu từ $A$, và cận dưới bằng cách bỏ đỉnh $A$. Bạn kết luận được gì?

::hint
**Kiến thức:** cây khung nhỏ nhất của $B,C,D$ dùng $BC$ và $CD$.

::solution
Láng giềng gần nhất từ $A$: thị trấn gần nhất là $B$ ($5$), rồi $C$ ($4$), rồi $D$ ($3$), rồi về $A$ ($6$), được $5+4+3+6=18$ km. Đây là cận trên.

Bỏ $A$, cây khung nhỏ nhất của $B$, $C$, $D$ dùng $BC$ và $CD$, trọng số $7$. Cộng hai cạnh ngắn nhất từ $A$ là $5$ và $6$, được cận dưới $7+11=18$ km.

Vậy cận trên và cận dưới đều bằng $18$ km, và hành trình $A\to B\to C\to D\to A$ là tối ưu.

**Đáp số.** Cả hai cận đều là $18$ km; hành trình $ABCDA$ là tối ưu.
:::

:::exercise Thử thách
Hai công ti điện thoại chia nhau một thị trường. Mỗi năm, $70\%$ khách của công ti X ở lại và $30\%$ chuyển sang Y, còn $80\%$ khách của Y ở lại và $20\%$ chuyển sang X. Hiện mỗi công ti chiếm một nửa thị trường. Tìm thị phần sau $2$ năm và về lâu dài.

::hint
**Kiến thức:** $T=\begin{pmatrix}0{,}7&0{,}2\\0{,}3&0{,}8\end{pmatrix}$, $s_0=\begin{pmatrix}0{,}5\\0{,}5\end{pmatrix}$.

::solution
Sau một năm, $s_1=Ts_0=\begin{pmatrix}0{,}35+0{,}10\\0{,}15+0{,}40\end{pmatrix}=\begin{pmatrix}0{,}45\\0{,}55\end{pmatrix}$, và sau hai năm $s_2=Ts_1=\begin{pmatrix}0{,}315+0{,}11\\0{,}135+0{,}44\end{pmatrix}=\begin{pmatrix}0{,}425\\0{,}575\end{pmatrix}$.

Với trạng thái dừng, $0{,}7p+0{,}2(1-p)=p$ cho $0{,}2=0{,}5p$, nên $p=0{,}4$.

Vậy sau hai năm X chiếm $42{,}5\%$ và Y chiếm $57{,}5\%$ thị trường, về lâu dài X chiếm $40\%$ và Y chiếm $60\%$.

**Đáp số.** $42{,}5\%$ và $57{,}5\%$; về lâu dài $40\%$ và $60\%$.
:::

:::quiz
::mc
Nếu $\det A=0$ thì
A. $A^{-1}$ tồn tại
B. $A$ là ma trận đơn vị
C. $A$ không có ma trận nghịch đảo
D. $A=0$
::key C
Công thức ma trận nghịch đảo chia cho $\det A$.

::mc
Trong ma trận chuyển như dùng ở đây, mỗi cột có tổng bằng
A. $1$
B. $0$
C. số trạng thái
D. $100$
::key A
Mỗi cột liệt kê mọi nơi một trạng thái có thể chuyển tới.

::mc
Đồ thị có chu trình Euler khi
A. có đúng hai đỉnh bậc lẻ
B. mọi đỉnh có bậc chẵn
C. không có chu trình
D. mọi đỉnh có bậc $1$
::key B
Mỗi lần đi qua một đỉnh dùng một cạnh vào và một cạnh ra.

::mc
Thuật toán láng giềng gần nhất cho bài toán người bán hàng cho ra
A. đường đi tốt nhất chính xác
B. một cận dưới
C. một cây khung nhỏ nhất
D. một cận trên
::key D
Nó cho một hành trình thật, có thể chưa ngắn nhất.

::tf
Một đồ thị có $6$ đỉnh và là một cây. Xét tính đúng sai của các mệnh đề sau:
a) Đồ thị liên thông.
b) Đồ thị không có chu trình.
c) Đồ thị có $5$ cạnh.
d) Đồ thị chắc chắn có chu trình Euler.
::key T T T F
Cây có đỉnh bậc $1$, nên không có chu trình Euler.

::sa
Tính $\det\begin{pmatrix}5&2\\3&4\end{pmatrix}$.
::key 14
$20-6=14$.

::sa
Một đồ thị có các bậc $4,\ 3,\ 3,\ 2$. Đồ thị có bao nhiêu cạnh?
::key 6
$\dfrac{12}{2}=6$.
:::
