---
title: Mở rộng phân số. Phân số bằng nhau
description: Làm quen với phân số có tử và mẫu là số nguyên, nhận biết hai phân số bằng nhau, dùng tính chất cơ bản để rút gọn phân số.
minutes: 25
---

:::goals
- Nhận biết được phân số với tử và mẫu là số nguyên, mẫu khác $0$.
- Kiểm tra được hai phân số có bằng nhau hay không bằng quy tắc nhân chéo.
- Dùng tính chất cơ bản của phân số để viết phân số với mẫu dương và rút gọn phân số.
- Đưa được một phân số về dạng tối giản.
:::

Chia đều $3$ quả cam cho $4$ bạn, mỗi bạn được $\dfrac34$ quả. Phân số ấy bạn đã quen từ tiểu học: nó là thương của phép chia $3:4$.

Bây giờ đổi sang một chuyện khác. Trong $4$ giờ, nhiệt độ ngoài trời giảm đều tổng cộng $3^\circ\text{C}$. Vậy mỗi giờ nhiệt độ thay đổi bao nhiêu? Tổng mức thay đổi là $-3$, chia đều cho $4$ giờ, tức là $(-3):4$. Phép chia này không ra số nguyên. Muốn ghi kết quả, ta cần một phân số có tử là số âm: $\dfrac{-3}{4}$.

Khi đã có số nguyên âm, phân số cũng phải "lớn lên" theo. Phần dưới đây cho bạn thấy những phân số mới này vẫn cư xử đúng như các phân số cũ.

## Mở rộng khái niệm phân số

:::definition Phân số
Với $a$, $b$ là các số nguyên và $b\ne0$, ta gọi $\dfrac{a}{b}$ là một **phân số**; $a$ là **tử số** (tử) và $b$ là **mẫu số** (mẫu) của phân số. Phân số $\dfrac{a}{b}$ đọc là "$a$ phần $b$".
:::

Như vậy $\dfrac{-3}{4}$; $\dfrac{5}{-7}$; $\dfrac{-2}{-9}$; $\dfrac{0}{6}$ đều là phân số. Phân số $\dfrac{a}{b}$ vẫn mang ý nghĩa cũ: nó là kết quả của phép chia số nguyên $a$ cho số nguyên $b$ khác $0$. Chẳng hạn $(-8):11=\dfrac{-8}{11}$.

Mọi số nguyên cũng viết được thành phân số với mẫu bằng $1$: $6=\dfrac61$; $-4=\dfrac{-4}{1}$.

Có hai thứ **không** phải là phân số. Một là $\dfrac{3}{0}$, vì mẫu bằng $0$ (không có phép chia cho $0$). Hai là $\dfrac{1{,}5}{2}$, vì tử không phải số nguyên.

## Hai phân số bằng nhau

Ở tiểu học bạn đã biết $\dfrac12=\dfrac24$: nửa cái bánh cũng là hai phần tư cái bánh. Hãy để ý một điều về bốn con số ấy: $1\cdot4=2\cdot2$. Thử với cặp khác, $\dfrac23=\dfrac{10}{15}$: ta có $2\cdot15=3\cdot10$. Lần nào tích "chéo" cũng bằng nhau.

Ta lấy chính điều này làm cách nhận biết hai phân số bằng nhau, kể cả khi tử và mẫu là số âm.

:::definition Hai phân số bằng nhau
Hai phân số $\dfrac{a}{b}$ và $\dfrac{c}{d}$ được gọi là **bằng nhau**, viết $\dfrac{a}{b}=\dfrac{c}{d}$, nếu
$$a\cdot d=b\cdot c.$$
:::

Người ta thường gọi đây là quy tắc **nhân chéo**: tử phân số này nhân với mẫu phân số kia. Ví dụ $\dfrac{-3}{4}=\dfrac{6}{-8}$ vì $(-3)\cdot(-8)=24$ và $4\cdot6=24$.

## Tính chất cơ bản của phân số

Từ $\dfrac12$ sang $\dfrac24$, ta đã nhân cả tử và mẫu với $2$. Điều đó đúng với mọi phân số và mọi số nguyên khác $0$.

:::theorem Tính chất cơ bản của phân số
- Nếu nhân cả tử và mẫu của một phân số với cùng một số nguyên **khác $0$** thì được một phân số bằng phân số đã cho:
$$\dfrac{a}{b}=\dfrac{a\cdot m}{b\cdot m}\quad\text{với } m \text{ là số nguyên},\ m\ne0.$$
- Nếu chia cả tử và mẫu của một phân số cho cùng một **ước chung** của chúng thì được một phân số bằng phân số đã cho:
$$\dfrac{a}{b}=\dfrac{a:n}{b:n}\quad\text{với } n \text{ là ước chung của } a \text{ và } b.$$
:::

Vì sao đúng? Ta kiểm tra bằng nhân chéo: $a\cdot(b\cdot m)$ và $b\cdot(a\cdot m)$ đều bằng $a\cdot b\cdot m$, nên hai phân số bằng nhau.

Tính chất này cho ta hai việc làm rất hay dùng.

**Viết phân số với mẫu dương.** Nhân cả tử và mẫu với $-1$:
$$\dfrac{5}{-7}=\dfrac{5\cdot(-1)}{(-7)\cdot(-1)}=\dfrac{-5}{7},\qquad \dfrac{-2}{-9}=\dfrac{2}{9}.$$
Từ đây về sau, khi tính toán hay so sánh, ta luôn đưa phân số về mẫu dương cho dễ nhìn.

**Rút gọn phân số.** Chia cả tử và mẫu cho một ước chung khác $1$ và $-1$, ta được phân số bằng nó nhưng có tử và mẫu "nhỏ" hơn.

:::definition Phân số tối giản
Phân số **tối giản** là phân số mà tử và mẫu chỉ có ước chung là $1$ và $-1$. Muốn rút gọn một phân số về dạng tối giản, ta chia cả tử và mẫu cho ước chung lớn nhất của phần số tự nhiên của chúng.
:::

Ví dụ: ƯCLN$(18, 24)=6$ nên $\dfrac{-18}{24}=\dfrac{-18:6}{24:6}=\dfrac{-3}{4}$, và $\dfrac{-3}{4}$ là phân số tối giản.

Một phân số có vô số cách viết: $\dfrac{-3}{4}=\dfrac{-6}{8}=\dfrac{-9}{12}=\dfrac{6}{-8}=\dots$ Tất cả là cùng một số. Dạng tối giản với mẫu dương là cách viết gọn nhất, và người ta thường chọn nó để ghi đáp số.

## Ví dụ

Ta bắt đầu bằng việc nhận mặt phân số.

:::example Nhận biết phân số
a) Trong các cách viết sau, cách viết nào cho ta phân số: $\dfrac{-5}{7}$; $\dfrac{4}{-9}$; $\dfrac{3}{0}$; $\dfrac{0}{3}$; $\dfrac{1{,}5}{2}$?

b) Viết các phép chia sau dưới dạng phân số: $(-8):11$; $6:(-13)$.

**Lời giải.**

a) Một phân số phải có tử và mẫu là số nguyên, mẫu khác $0$.

Các cách viết $\dfrac{-5}{7}$; $\dfrac{4}{-9}$; $\dfrac{0}{3}$ thoả mãn điều đó nên là phân số.

Cách viết $\dfrac{3}{0}$ có mẫu bằng $0$ nên không phải là phân số.

Cách viết $\dfrac{1{,}5}{2}$ có tử không phải số nguyên nên không phải là phân số.

b) Ta có $(-8):11=\dfrac{-8}{11}$ và $6:(-13)=\dfrac{6}{-13}$.

Vậy a) các phân số là $\dfrac{-5}{7}$; $\dfrac{4}{-9}$; $\dfrac{0}{3}$; b) $\dfrac{-8}{11}$ và $\dfrac{6}{-13}$.
:::

Quy tắc nhân chéo trả lời nhanh câu hỏi "có bằng nhau không".

:::example Kiểm tra hai phân số bằng nhau
Các cặp phân số sau có bằng nhau không?

a) $\dfrac{-2}{5}$ và $\dfrac{6}{-15}$;

b) $\dfrac{3}{-4}$ và $\dfrac{-9}{-12}$.

**Lời giải.**

a) Ta có $(-2)\cdot(-15)=30$ và $5\cdot6=30$.

Vì $(-2)\cdot(-15)=5\cdot6$ nên $\dfrac{-2}{5}=\dfrac{6}{-15}$.

b) Ta có $3\cdot(-12)=-36$ và $(-4)\cdot(-9)=36$.

Vì $-36\ne36$ nên $\dfrac{3}{-4}\ne\dfrac{-9}{-12}$.

Vậy cặp ở câu a) bằng nhau, cặp ở câu b) không bằng nhau.

**Nhận xét.** Ở câu b), $\dfrac{3}{-4}$ là số âm còn $\dfrac{-9}{-12}$ là số dương, nên chúng không thể bằng nhau. Nhìn dấu trước cũng là một cách kiểm tra nhanh.
:::

Nhân chéo còn giúp ta tìm một số chưa biết.

:::example Tìm số chưa biết
Tìm số nguyên $x$, biết $\dfrac{x}{-6}=\dfrac{10}{15}$.

**Lời giải.**

Vì $\dfrac{x}{-6}=\dfrac{10}{15}$ nên theo định nghĩa hai phân số bằng nhau, ta có
$$x\cdot15=(-6)\cdot10.$$

Suy ra $15x=-60$, do đó
$$x=(-60):15=-4.$$

Thử lại: $\dfrac{-4}{-6}=\dfrac{4}{6}=\dfrac{2}{3}$ và $\dfrac{10}{15}=\dfrac{2}{3}$, hai phân số bằng nhau.

Vậy $x=-4$.
:::

Tiếp theo, ta dùng tính chất cơ bản theo chiều "nhân".

:::example Viết với mẫu dương, điền số thích hợp
a) Viết các phân số $\dfrac{5}{-8}$ và $\dfrac{-7}{-12}$ thành phân số có mẫu dương.

b) Tìm số thích hợp thay cho dấu $?$ trong $\dfrac{-3}{4}=\dfrac{?}{20}$.

**Lời giải.**

a) Nhân cả tử và mẫu của mỗi phân số với $-1$, ta được
$$\dfrac{5}{-8}=\dfrac{5\cdot(-1)}{(-8)\cdot(-1)}=\dfrac{-5}{8},\qquad \dfrac{-7}{-12}=\dfrac{(-7)\cdot(-1)}{(-12)\cdot(-1)}=\dfrac{7}{12}.$$

b) Mẫu $4$ đã được nhân với $5$ để thành $20$ (vì $20:4=5$). Do đó tử cũng phải nhân với $5$:
$$\dfrac{-3}{4}=\dfrac{(-3)\cdot5}{4\cdot5}=\dfrac{-15}{20}.$$

Vậy a) $\dfrac{5}{-8}=\dfrac{-5}{8}$; $\dfrac{-7}{-12}=\dfrac{7}{12}$; b) số cần điền là $-15$.
:::

Và theo chiều "chia", tức là rút gọn.

:::example Rút gọn về phân số tối giản
Rút gọn các phân số sau về dạng tối giản:

a) $\dfrac{-18}{24}$;

b) $\dfrac{45}{-60}$;

c) $\dfrac{28}{42}$.

**Lời giải.**

a) Ta có ƯCLN$(18, 24)=6$. Chia cả tử và mẫu cho $6$:
$$\dfrac{-18}{24}=\dfrac{-18:6}{24:6}=\dfrac{-3}{4}.$$

b) Trước hết viết phân số với mẫu dương: $\dfrac{45}{-60}=\dfrac{-45}{60}$. Ta có ƯCLN$(45, 60)=15$, nên
$$\dfrac{-45}{60}=\dfrac{-45:15}{60:15}=\dfrac{-3}{4}.$$

c) Ta có ƯCLN$(28, 42)=14$, nên
$$\dfrac{28}{42}=\dfrac{28:14}{42:14}=\dfrac{2}{3}.$$

Vậy kết quả lần lượt là $\dfrac{-3}{4}$; $\dfrac{-3}{4}$; $\dfrac{2}{3}$.

**Nhận xét.** Hai phân số ở câu a) và b) trông khác nhau, nhưng sau khi rút gọn ta thấy chúng bằng nhau. Rút gọn về tối giản là cách đáng tin để nhận ra "cùng một số".
:::

Cuối cùng, một câu hỏi về hai lớp học mà nếu không có phân số thì khó so sánh công bằng.

:::example Lớp nào có nhiều bạn đi xe đạp hơn?
Lớp 6A có $40$ học sinh, trong đó $24$ bạn đi xe đạp đến trường. Lớp 6B có $45$ học sinh, trong đó $27$ bạn đi xe đạp đến trường. Bạn Hà nói: "Lớp 6B có nhiều bạn đi xe đạp hơn, nên phong trào đi xe đạp của lớp 6B mạnh hơn." Bạn Hà nói đúng không?

**Lời giải.**

*Hiểu đề.* Lớp 6B có nhiều bạn đi xe đạp hơn ($27>24$), nhưng lớp 6B cũng đông hơn. Muốn so sánh công bằng, ta phải xem số bạn đi xe đạp chiếm bao nhiêu phần của mỗi lớp.

*Tìm cách giải.* Viết phân số "số bạn đi xe đạp trên số học sinh cả lớp" cho từng lớp, rút gọn về tối giản rồi so sánh.

*Giải.* Với lớp 6A, số bạn đi xe đạp chiếm $\dfrac{24}{40}$ số học sinh. Vì ƯCLN$(24, 40)=8$ nên
$$\dfrac{24}{40}=\dfrac{24:8}{40:8}=\dfrac{3}{5}.$$

Với lớp 6B, số bạn đi xe đạp chiếm $\dfrac{27}{45}$ số học sinh. Vì ƯCLN$(27, 45)=9$ nên
$$\dfrac{27}{45}=\dfrac{27:9}{45:9}=\dfrac{3}{5}.$$

Hai phân số bằng nhau: ở cả hai lớp, số bạn đi xe đạp đều chiếm $\dfrac35$ số học sinh.

Vậy bạn Hà nói chưa đúng: phong trào đi xe đạp của hai lớp là như nhau.

*Nhìn lại.* Có thể kiểm tra bằng nhân chéo: $24\cdot45=1080$ và $40\cdot27=1080$, nên $\dfrac{24}{40}=\dfrac{27}{45}$. So sánh hai nhóm có số người khác nhau thì phải so theo "phần", không so theo số lượng.
:::

:::warning Những chỗ hay nhầm
- **Coi $\dfrac{a}{0}$ là phân số.** Sai: "$\dfrac{3}{0}$ là phân số có tử $3$, mẫu $0$." Vì sao sai: không có phép chia cho $0$. Đúng: mẫu của phân số phải khác $0$; còn tử thì được phép bằng $0$, ví dụ $\dfrac{0}{3}=0$.
- **Nhân chéo sai dấu.** Sai: $\dfrac{3}{-4}=\dfrac{-9}{-12}$ "vì $3\cdot12=4\cdot9$". Vì sao sai: đã bỏ mất dấu của các số âm. Đúng: $3\cdot(-12)=-36$, còn $(-4)\cdot(-9)=36$, nên hai phân số không bằng nhau.
- **Cộng thay vì nhân.** Sai: $\dfrac{2}{3}=\dfrac{2+2}{3+2}=\dfrac{4}{5}$. Vì sao sai: tính chất cơ bản chỉ nói về **nhân** hoặc **chia** cả tử và mẫu với cùng một số; $2\cdot5\ne3\cdot4$. Đúng: $\dfrac{2}{3}=\dfrac{2\cdot2}{3\cdot2}=\dfrac{4}{6}$.
- **Rút gọn chưa hết.** Sai: "$\dfrac{-18}{24}=\dfrac{-9}{12}$ là phân số tối giản." Vì sao sai: $9$ và $12$ còn ước chung là $3$. Đúng: $\dfrac{-18}{24}=\dfrac{-3}{4}$.
:::

## Thuật ngữ

:::terms
- phân số | fraction
- tử số | numerator
- mẫu số | denominator
- hai phân số bằng nhau | equivalent fractions
- nhân chéo | cross-multiplication
- tính chất cơ bản của phân số | basic property of fractions
- rút gọn phân số | simplifying a fraction
- phân số tối giản | fraction in its simplest form
- ước chung | common factor
- mẫu dương | positive denominator
:::

## Tóm tắt

- $\dfrac{a}{b}$ là phân số khi $a$, $b$ là số nguyên và $b\ne0$; nó là thương của phép chia $a:b$. Số nguyên $a$ viết được là $\dfrac{a}{1}$.
- $\dfrac{a}{b}=\dfrac{c}{d}$ nếu $a\cdot d=b\cdot c$ (nhân chéo).
- Nhân cả tử và mẫu với cùng một số nguyên khác $0$, hoặc chia cả tử và mẫu cho cùng một ước chung, ta được phân số bằng phân số đã cho.
- Đổi dấu cả tử và mẫu để có mẫu dương: $\dfrac{5}{-7}=\dfrac{-5}{7}$.
- Rút gọn về tối giản: chia cả tử và mẫu cho ƯCLN của phần số tự nhiên của chúng.

Mỗi giờ nhiệt độ thay đổi $\dfrac{-3}{4}$ độ: câu trả lời cho tình huống đầu bài giờ đã có tên gọi đàng hoàng, và bạn biết nó cũng chính là $\dfrac{-6}{8}$ hay $\dfrac{3}{-4}$. Một số, nhiều cách viết. Bài sau, ta dùng điều này để [so sánh hai phân số](lesson:comparing-fractions-mixed-numbers). Nếu cần ôn cách tìm ƯCLN, bạn xem lại bài [Ước chung. Ước chung lớn nhất](lesson:highest-common-factor).

## Luyện tập

Mỗi bài có kiến thức cần dùng và gợi ý theo bước. Bạn hãy tự làm trước, rồi mới mở lời giải.

:::exercise
Viết các phép chia sau dưới dạng phân số và chỉ ra tử, mẫu của mỗi phân số:

a) $5:(-9)$;

b) $(-4):7$;

c) $(-11):(-3)$.

::hint
**Kiến thức:** $a:b=\dfrac{a}{b}$ với $a$, $b$ nguyên, $b\ne0$.

**Gợi ý các bước:**
1. Số bị chia là tử, số chia là mẫu.
2. Giữ nguyên dấu của từng số.

::solution
a) Ta có $5:(-9)=\dfrac{5}{-9}$, tử là $5$, mẫu là $-9$.

b) Ta có $(-4):7=\dfrac{-4}{7}$, tử là $-4$, mẫu là $7$.

c) Ta có $(-11):(-3)=\dfrac{-11}{-3}$, tử là $-11$, mẫu là $-3$.

Vậy các phân số lần lượt là $\dfrac{5}{-9}$; $\dfrac{-4}{7}$; $\dfrac{-11}{-3}$.

**Đáp số.** a) $\dfrac{5}{-9}$; b) $\dfrac{-4}{7}$; c) $\dfrac{-11}{-3}$.
:::

:::exercise
Các cặp phân số sau có bằng nhau không? Vì sao?

a) $\dfrac{4}{-10}$ và $\dfrac{-6}{15}$;

b) $\dfrac{-5}{8}$ và $\dfrac{15}{-24}$;

c) $\dfrac{-3}{7}$ và $\dfrac{9}{21}$.

::hint
**Kiến thức:** $\dfrac{a}{b}=\dfrac{c}{d}$ nếu $a\cdot d=b\cdot c$.

**Gợi ý các bước:**
1. Tính hai tích chéo, chú ý dấu.
2. So sánh hai tích.

::solution
a) Ta có $4\cdot15=60$ và $(-10)\cdot(-6)=60$. Vì hai tích bằng nhau nên $\dfrac{4}{-10}=\dfrac{-6}{15}$.

b) Ta có $(-5)\cdot(-24)=120$ và $8\cdot15=120$. Vì hai tích bằng nhau nên $\dfrac{-5}{8}=\dfrac{15}{-24}$.

c) Ta có $(-3)\cdot21=-63$ và $7\cdot9=63$. Vì $-63\ne63$ nên $\dfrac{-3}{7}\ne\dfrac{9}{21}$.

Vậy các cặp ở câu a) và b) bằng nhau, cặp ở câu c) không bằng nhau.

**Đáp số.** a) Bằng nhau; b) bằng nhau; c) không bằng nhau.
:::

:::exercise
Tìm số nguyên $x$, biết:

a) $\dfrac{x}{12}=\dfrac{-5}{6}$;

b) $\dfrac{-14}{x}=\dfrac{2}{3}$.

::hint
**Kiến thức:** nhân chéo: $\dfrac{a}{b}=\dfrac{c}{d}$ thì $a\cdot d=b\cdot c$.

**Gợi ý các bước:**
1. Viết đẳng thức hai tích chéo.
2. Tìm thừa số chưa biết bằng phép chia.

::solution
a) Vì $\dfrac{x}{12}=\dfrac{-5}{6}$ nên $x\cdot6=12\cdot(-5)$.

Suy ra $6x=-60$, do đó $x=(-60):6=-10$.

b) Vì $\dfrac{-14}{x}=\dfrac{2}{3}$ nên $(-14)\cdot3=x\cdot2$.

Suy ra $2x=-42$, do đó $x=(-42):2=-21$.

Thử lại: $\dfrac{-10}{12}=\dfrac{-5}{6}$ và $\dfrac{-14}{-21}=\dfrac{2}{3}$, đều đúng.

Vậy a) $x=-10$; b) $x=-21$.

**Đáp số.** a) $x=-10$; b) $x=-21$.
:::

:::exercise
Viết mỗi phân số sau thành phân số bằng nó và có mẫu dương: $\dfrac{3}{-5}$; $\dfrac{-9}{-14}$; $\dfrac{1}{-2}$.

::hint
**Kiến thức:** nhân cả tử và mẫu với $-1$.

**Gợi ý các bước:**
1. Đổi dấu tử.
2. Đổi dấu mẫu.

::solution
Nhân cả tử và mẫu của mỗi phân số với $-1$, ta được:

$\dfrac{3}{-5}=\dfrac{3\cdot(-1)}{(-5)\cdot(-1)}=\dfrac{-3}{5}$.

$\dfrac{-9}{-14}=\dfrac{(-9)\cdot(-1)}{(-14)\cdot(-1)}=\dfrac{9}{14}$.

$\dfrac{1}{-2}=\dfrac{1\cdot(-1)}{(-2)\cdot(-1)}=\dfrac{-1}{2}$.

Vậy các phân số cần tìm lần lượt là $\dfrac{-3}{5}$; $\dfrac{9}{14}$; $\dfrac{-1}{2}$.

**Đáp số.** $\dfrac{-3}{5}$; $\dfrac{9}{14}$; $\dfrac{-1}{2}$.
:::

:::exercise
Rút gọn các phân số sau về dạng tối giản:

a) $\dfrac{-24}{36}$;

b) $\dfrac{35}{-49}$;

c) $\dfrac{-60}{-84}$;

d) $\dfrac{121}{-33}$.

::hint
**Kiến thức:** chia cả tử và mẫu cho ƯCLN của phần số tự nhiên của chúng; nên đưa về mẫu dương trước.

**Gợi ý các bước:**
1. Viết phân số với mẫu dương.
2. Tìm ƯCLN rồi chia cả tử và mẫu.

::solution
a) Ta có ƯCLN$(24, 36)=12$, nên $\dfrac{-24}{36}=\dfrac{-24:12}{36:12}=\dfrac{-2}{3}$.

b) Ta có $\dfrac{35}{-49}=\dfrac{-35}{49}$. Vì ƯCLN$(35, 49)=7$ nên $\dfrac{-35}{49}=\dfrac{-35:7}{49:7}=\dfrac{-5}{7}$.

c) Ta có $\dfrac{-60}{-84}=\dfrac{60}{84}$. Vì ƯCLN$(60, 84)=12$ nên $\dfrac{60}{84}=\dfrac{60:12}{84:12}=\dfrac{5}{7}$.

d) Ta có $\dfrac{121}{-33}=\dfrac{-121}{33}$. Vì ƯCLN$(121, 33)=11$ nên $\dfrac{-121}{33}=\dfrac{-121:11}{33:11}=\dfrac{-11}{3}$.

Vậy kết quả lần lượt là $\dfrac{-2}{3}$; $\dfrac{-5}{7}$; $\dfrac{5}{7}$; $\dfrac{-11}{3}$.

**Đáp số.** a) $\dfrac{-2}{3}$; b) $\dfrac{-5}{7}$; c) $\dfrac{5}{7}$; d) $\dfrac{-11}{3}$.
:::

:::exercise
Tìm các số nguyên $x$, $y$, biết $\dfrac{-2}{3}=\dfrac{x}{12}=\dfrac{10}{y}$.

::hint
**Kiến thức:** tính chất cơ bản của phân số: nhân cả tử và mẫu với cùng một số nguyên khác $0$.

**Gợi ý các bước:**
1. Từ mẫu $3$ sang mẫu $12$: đã nhân với mấy?
2. Từ tử $-2$ sang tử $10$: đã nhân với mấy?

::solution
Ta có $12=3\cdot4$, nên nhân cả tử và mẫu của $\dfrac{-2}{3}$ với $4$:
$$\dfrac{-2}{3}=\dfrac{(-2)\cdot4}{3\cdot4}=\dfrac{-8}{12}.$$
Suy ra $x=-8$.

Ta có $10=(-2)\cdot(-5)$, nên nhân cả tử và mẫu của $\dfrac{-2}{3}$ với $-5$:
$$\dfrac{-2}{3}=\dfrac{(-2)\cdot(-5)}{3\cdot(-5)}=\dfrac{10}{-15}.$$
Suy ra $y=-15$.

Vậy $x=-8$ và $y=-15$.

**Đáp số.** $x=-8$; $y=-15$.
:::

:::exercise
Viết các khoảng thời gian sau dưới dạng phân số tối giản với đơn vị là giờ:

a) $15$ phút;

b) $40$ phút;

c) $54$ phút.

::hint
**Kiến thức:** $1$ giờ $=60$ phút, nên $n$ phút bằng $\dfrac{n}{60}$ giờ.

**Gợi ý các bước:**
1. Viết phân số có mẫu $60$.
2. Rút gọn về tối giản.

::solution
Vì $1$ giờ bằng $60$ phút nên $n$ phút bằng $\dfrac{n}{60}$ giờ.

a) $15$ phút bằng $\dfrac{15}{60}$ giờ. Vì ƯCLN$(15, 60)=15$ nên $\dfrac{15}{60}=\dfrac{1}{4}$.

b) $40$ phút bằng $\dfrac{40}{60}$ giờ. Vì ƯCLN$(40, 60)=20$ nên $\dfrac{40}{60}=\dfrac{2}{3}$.

c) $54$ phút bằng $\dfrac{54}{60}$ giờ. Vì ƯCLN$(54, 60)=6$ nên $\dfrac{54}{60}=\dfrac{9}{10}$.

Vậy $15$ phút $=\dfrac14$ giờ; $40$ phút $=\dfrac23$ giờ; $54$ phút $=\dfrac{9}{10}$ giờ.

**Đáp số.** a) $\dfrac14$ giờ; b) $\dfrac23$ giờ; c) $\dfrac{9}{10}$ giờ.
:::

:::exercise
Một trường khảo sát $150$ học sinh khối 6 về môn thể thao yêu thích, mỗi em chọn đúng một môn. Có $90$ em chọn bóng đá, $36$ em chọn cầu lông, số còn lại chọn bơi. Hỏi số học sinh chọn mỗi môn chiếm bao nhiêu phần số học sinh được khảo sát? (Viết dưới dạng phân số tối giản.)

::hint
**Kiến thức:** phần của một nhóm bằng số người của nhóm chia cho tổng số người; rút gọn bằng ƯCLN.

**Gợi ý các bước:**
1. Tìm số em chọn bơi.
2. Viết ba phân số có mẫu $150$ rồi rút gọn.

::solution
Số học sinh chọn bơi là
$$150-90-36=24\ (\text{em}).$$

Số học sinh chọn bóng đá chiếm $\dfrac{90}{150}$. Vì ƯCLN$(90, 150)=30$ nên $\dfrac{90}{150}=\dfrac{3}{5}$.

Số học sinh chọn cầu lông chiếm $\dfrac{36}{150}$. Vì ƯCLN$(36, 150)=6$ nên $\dfrac{36}{150}=\dfrac{6}{25}$.

Số học sinh chọn bơi chiếm $\dfrac{24}{150}$. Vì ƯCLN$(24, 150)=6$ nên $\dfrac{24}{150}=\dfrac{4}{25}$.

Vậy bóng đá chiếm $\dfrac35$, cầu lông chiếm $\dfrac{6}{25}$, bơi chiếm $\dfrac{4}{25}$ số học sinh được khảo sát.

**Đáp số.** Bóng đá $\dfrac35$; cầu lông $\dfrac{6}{25}$; bơi $\dfrac{4}{25}$.
:::

:::exercise Thử thách
Tìm tất cả các phân số bằng phân số $\dfrac{-3}{4}$ và có mẫu là số nguyên dương nhỏ hơn $20$.

::hint
**Kiến thức:** $\dfrac{-3}{4}$ là phân số tối giản, nên mọi phân số bằng nó có dạng $\dfrac{-3\cdot m}{4\cdot m}$ với $m$ nguyên khác $0$.

**Gợi ý các bước:**
1. Mẫu là $4\cdot m$, phải dương và nhỏ hơn $20$: tìm các giá trị của $m$.
2. Viết phân số ứng với mỗi giá trị đó.

::solution
Phân số $\dfrac{-3}{4}$ tối giản, nên các phân số bằng nó có dạng $\dfrac{(-3)\cdot m}{4\cdot m}$ với $m$ là số nguyên khác $0$.

Mẫu $4\cdot m$ là số nguyên dương nhỏ hơn $20$, nên $m$ là số nguyên dương và $4\cdot m<20$. Suy ra $m\in\{1;2;3;4\}$.

Với $m=1$, ta được $\dfrac{-3}{4}$.

Với $m=2$, ta được $\dfrac{-6}{8}$.

Với $m=3$, ta được $\dfrac{-9}{12}$.

Với $m=4$, ta được $\dfrac{-12}{16}$.

Vậy các phân số cần tìm là $\dfrac{-3}{4}$; $\dfrac{-6}{8}$; $\dfrac{-9}{12}$; $\dfrac{-12}{16}$.

**Đáp số.** $\dfrac{-3}{4}$; $\dfrac{-6}{8}$; $\dfrac{-9}{12}$; $\dfrac{-12}{16}$.
:::

## Kiểm tra mini

:::quiz
::mc
Cách viết nào sau đây không cho ta một phân số?
A. $\dfrac{-3}{5}$.
B. $\dfrac{0}{7}$.
C. $\dfrac{4}{0}$.
D. $\dfrac{6}{-1}$.
::key C
Mẫu của phân số phải khác $0$. Tử bằng $0$ (B) hay mẫu âm (D) đều được.

::mc
Phân số nào sau đây bằng phân số $\dfrac{-2}{3}$?
A. $\dfrac{2}{3}$.
B. $\dfrac{-4}{9}$.
C. $\dfrac{6}{9}$.
D. $\dfrac{4}{-6}$.
::key D
$(-2)\cdot(-6)=12=3\cdot4$. A và C là số dương; B chỉ nhân tử với $2$ còn mẫu nhân với $3$.

::mc
Rút gọn phân số $\dfrac{-36}{48}$ về dạng tối giản, ta được
A. $\dfrac{-3}{4}$.
B. $\dfrac{-6}{8}$.
C. $\dfrac{3}{4}$.
D. $\dfrac{-9}{12}$.
::key A
ƯCLN$(36, 48)=12$ nên $\dfrac{-36}{48}=\dfrac{-3}{4}$. B và D rút gọn chưa hết; C làm mất dấu.

::mc
Biết $\dfrac{x}{8}=\dfrac{-3}{4}$. Giá trị của $x$ là
A. $6$.
B. $-6$.
C. $-12$.
D. $-24$.
::key B
$4x=8\cdot(-3)=-24$ nên $x=-6$. A sai dấu; D quên chia cho $4$; C chia nhầm cho $2$.

::tf
Xét tính đúng sai của các mệnh đề sau:
a) Mọi số nguyên đều viết được dưới dạng phân số.
b) $\dfrac{-5}{-9}=\dfrac{5}{9}$.
c) Nhân cả tử và mẫu của một phân số với $0$, ta được một phân số bằng phân số đã cho.
d) $\dfrac{-7}{21}$ là phân số tối giản.
::key Đ Đ S S
a) Đúng: $a=\dfrac{a}{1}$. b) Đúng: nhân cả tử và mẫu với $-1$. c) Sai: khi đó mẫu bằng $0$, không còn là phân số. d) Sai: $7$ và $21$ có ước chung là $7$; $\dfrac{-7}{21}=\dfrac{-1}{3}$.

::sa
Tìm số nguyên $x$, biết $\dfrac{-4}{5}=\dfrac{x}{-35}$.
::key 28
$5x=(-4)\cdot(-35)=140$ nên $x=28$.

::sa
Biết $36$ phút bằng $\dfrac{a}{5}$ giờ. Tìm số tự nhiên $a$.
::key 3
$36$ phút $=\dfrac{36}{60}$ giờ $=\dfrac{3}{5}$ giờ (chia cả tử và mẫu cho $12$), nên $a=3$.
:::
