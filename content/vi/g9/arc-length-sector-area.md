---
title: Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên
description: Tính độ dài cung tròn, diện tích hình quạt tròn và diện tích hình vành khuyên, áp dụng vào các bài toán thực tế.
minutes: 20
---

:::goals
- Tính được độ dài cung tròn $n^\circ$ của đường tròn bán kính $R$.
- Tính được diện tích hình quạt tròn và diện tích hình vành khuyên.
- Vận dụng các công thức vào bài toán thực tế (bánh xe, đồng hồ, cần gạt nước).
:::

Cần gạt nước của một ô tô quay quanh trục $O$. Lưỡi cao su gắn trên thanh gạt, từ điểm cách $O$ là $10$ cm đến điểm cách $O$ là $50$ cm. Mỗi lần gạt, thanh quay một góc $120^\circ$. Mỗi lần gạt lau được bao nhiêu xăng-ti-mét vuông kính?

## Độ dài cung tròn

### Khám phá: chia đường tròn thành $360$ phần

Đường tròn bán kính $R$ có độ dài $C=2\pi R$. Cả đường tròn ứng với $360^\circ$, nên cung $1^\circ$ dài $\dfrac{2\pi R}{360}=\dfrac{\pi R}{180}$. Cung $n^\circ$ dài gấp $n$ lần cung $1^\circ$.

:::theorem Độ dài cung tròn
Trên đường tròn bán kính $R$, cung $n^\circ$ có độ dài
$$l=\frac{\pi Rn}{180}.$$
:::

:::example Tính độ dài cung
Tính độ dài cung $60^\circ$ của đường tròn bán kính $6$ cm (làm tròn kết quả đến hàng phần trăm).

**Lời giải.** Áp dụng công thức độ dài cung với $R=6$, $n=60$, ta có

$$l=\frac{\pi\cdot6\cdot60}{180}=2\pi\approx6{,}28\ \text{(cm)}.$$

Vậy cung dài khoảng $6{,}28$ cm.
:::

Từ công thức, khi biết $l$ và $R$ ta tìm được $n$.

:::example Tìm số đo cung
Một cung của đường tròn bán kính $9$ cm có độ dài $5\pi$ cm. Tính số đo của cung đó.

**Lời giải.** Từ $l=\dfrac{\pi Rn}{180}$, ta có

$$n=\frac{180l}{\pi R}=\frac{180\cdot5\pi}{9\pi}=100.$$

Vậy cung có số đo $100^\circ$.
:::

## Diện tích hình quạt tròn

Hình quạt tròn là phần hình tròn giới hạn bởi một cung và hai bán kính đi qua hai đầu mút của cung. Hình tròn có diện tích $\pi R^2$ ứng với $360^\circ$, nên hình quạt $n^\circ$ có diện tích bằng $\dfrac{n}{360}$ diện tích hình tròn.

:::theorem Diện tích hình quạt tròn
Hình quạt tròn bán kính $R$, cung $n^\circ$ có diện tích
$$S=\frac{\pi R^2n}{360}=\frac{lR}{2},$$
trong đó $l$ là độ dài cung của hình quạt.
:::

:::diagram Hình quạt tròn $OAB$ bán kính $R$, cung $n^\circ$
alt: Hình quạt tròn tâm O giới hạn bởi hai bán kính OA, OB và cung AB, góc ở tâm kí hiệu là n độ
point O 0,0 below-left
point A 4,0 below-right
point B 1.24,3.8 above
circle O 4
segment O A "R"
segment O B
angle A O B "n°"
:::

:::example Diện tích hình quạt
Tính diện tích hình quạt tròn bán kính $10$ cm, cung $72^\circ$ (làm tròn kết quả đến hàng phần trăm).

**Lời giải.** Áp dụng công thức diện tích hình quạt, ta có

$$S=\frac{\pi\cdot10^2\cdot72}{360}=20\pi\approx62{,}83\ \text{(cm}^2\text{)}.$$

Tính cách khác: cung dài $l=\dfrac{\pi\cdot10\cdot72}{180}=4\pi$, nên $S=\dfrac{lR}{2}=\dfrac{4\pi\cdot10}{2}=20\pi$.

Vậy diện tích hình quạt khoảng $62{,}83$ cm².
:::

## Diện tích hình vành khuyên

Hình vành khuyên là phần nằm giữa hai đường tròn đồng tâm. Diện tích của nó bằng diện tích hình tròn lớn trừ diện tích hình tròn nhỏ.

:::theorem Diện tích hình vành khuyên
Hình vành khuyên giới hạn bởi hai đường tròn $(O; R)$ và $(O; r)$ với $R>r$ có diện tích
$$S=\pi R^2-\pi r^2=\pi\left(R^2-r^2\right).$$
:::

:::diagram Hình vành khuyên giữa hai đường tròn đồng tâm
alt: Hai đường tròn đồng tâm O, bán kính lớn R và bán kính nhỏ r, phần nằm giữa hai đường tròn là hình vành khuyên
point O 0,0 below
point A 3,0 right
point B -1.27,1.27 above-left
circle O 3
circle O 1.8
segment O A "R"
segment O B "r"
:::

:::example Lối đi quanh hồ
Một hồ nước hình tròn bán kính $30$ m. Người ta làm một lối đi rộng $2$ m bao quanh hồ. Tính diện tích lối đi (làm tròn kết quả đến hàng phần trăm).

**Lời giải.** Lối đi là hình vành khuyên với $r=30$ m và $R=30+2=32$ m. Ta có

$$S=\pi\left(32^2-30^2\right)=\pi(1024-900)=124\pi\approx389{,}56\ \text{(m}^2\text{)}.$$

Vậy diện tích lối đi khoảng $389{,}56$ m².
:::

Phần kính được lau ở đầu bài là phần của hình vành khuyên nằm trong góc $120^\circ$.

:::example Cần gạt nước
Giải bài toán ở đầu bài (làm tròn kết quả đến hàng đơn vị).

**Lời giải.** Phần kính được lau bằng hình quạt bán kính $50$ cm trừ hình quạt bán kính $10$ cm, cùng cung $120^\circ$:

$$S=\frac{\pi\cdot50^2\cdot120}{360}-\frac{\pi\cdot10^2\cdot120}{360}=\frac{\pi\left(2500-100\right)}{3}=800\pi\approx2513\ \text{(cm}^2\text{)}.$$

Vậy mỗi lần gạt lau được khoảng $2513$ cm² kính.
:::

:::warning Những sai lầm thường gặp
- **Nhầm hai công thức.** Sai: cung $90^\circ$ của đường tròn bán kính $4$ dài $\dfrac{\pi\cdot4^2\cdot90}{360}=4\pi$. Lí do sai: đó là diện tích hình quạt. Đúng: $l=\dfrac{\pi\cdot4\cdot90}{180}=2\pi$.
- **Tính vành khuyên bằng hiệu bán kính.** Sai: $S=\pi(R-r)^2$. Lí do sai: phải trừ hai diện tích. Đúng: $S=\pi\left(R^2-r^2\right)$.
- **Dùng đường kính thay cho bán kính.** Đọc kĩ đề: bánh xe "đường kính $70$ cm" có $R=35$ cm.
:::

## Thuật ngữ

:::terms
- độ dài đường tròn | circumference
- độ dài cung tròn | arc length
- hình quạt tròn | sector
- hình vành khuyên | annulus
- đường tròn đồng tâm | concentric circles
- hình viên phân | segment of a circle
:::

## Tóm tắt

- Độ dài đường tròn $C=2\pi R$; diện tích hình tròn $\pi R^2$.
- Cung $n^\circ$: $l=\dfrac{\pi Rn}{180}$.
- Hình quạt $n^\circ$: $S=\dfrac{\pi R^2n}{360}=\dfrac{lR}{2}$.
- Hình vành khuyên: $S=\pi\left(R^2-r^2\right)$.

## Luyện tập

Mỗi bài có phần kiến thức và gợi ý các bước. Hãy tự làm trước, rồi mới bấm xem lời giải.

:::exercise
Tính độ dài cung $45^\circ$ của đường tròn bán kính $12$ cm (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** $l=\dfrac{\pi Rn}{180}$.

**Gợi ý các bước:**
1. Thay $R=12$, $n=45$.

::solution
Ta có $l=\dfrac{\pi\cdot12\cdot45}{180}=3\pi\approx9{,}42$ (cm).

Vậy cung dài khoảng $9{,}42$ cm.

**Đáp số.** $l=3\pi\approx9{,}42$ cm.
:::

:::exercise
Tính diện tích hình quạt tròn bán kính $6$ cm, cung $150^\circ$ (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** $S=\dfrac{\pi R^2n}{360}$.

**Gợi ý các bước:**
1. Thay $R=6$, $n=150$.

::solution
Ta có $S=\dfrac{\pi\cdot36\cdot150}{360}=15\pi\approx47{,}12$ (cm²).

Vậy diện tích hình quạt khoảng $47{,}12$ cm².

**Đáp số.** $S=15\pi\approx47{,}12$ cm².
:::

:::exercise
Tính diện tích hình vành khuyên giới hạn bởi hai đường tròn đồng tâm bán kính $5$ cm và $3$ cm (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** $S=\pi\left(R^2-r^2\right)$.

**Gợi ý các bước:**
1. Tính $R^2-r^2$ rồi nhân với $\pi$.

::solution
Ta có $S=\pi\left(5^2-3^2\right)=16\pi\approx50{,}27$ (cm²).

Vậy diện tích hình vành khuyên khoảng $50{,}27$ cm².

**Đáp số.** $S=16\pi\approx50{,}27$ cm².
:::

:::exercise
Một cung $90^\circ$ có độ dài $4\pi$ cm. Tính bán kính của đường tròn.

::hint
**Kiến thức:** $l=\dfrac{\pi Rn}{180}$, suy ra $R=\dfrac{180l}{\pi n}$.

**Gợi ý các bước:**
1. Thay $l=4\pi$, $n=90$.

::solution
Ta có $R=\dfrac{180\cdot4\pi}{90\pi}=8$ (cm).

Vậy bán kính bằng $8$ cm.

**Đáp số.** $R=8$ cm.
:::

:::exercise
Bánh xe đạp của Nam có đường kính $70$ cm. Khi bánh xe lăn được $100$ vòng thì xe đi được quãng đường bao nhiêu mét (làm tròn kết quả đến hàng phần mười)?

::hint
**Kiến thức:** mỗi vòng, xe đi được một quãng bằng độ dài đường tròn $C=\pi d$.

**Gợi ý các bước:**
1. Tính độ dài đường tròn.
2. Nhân với $100$ rồi đổi ra mét.

::solution
Mỗi vòng xe đi được $C=70\pi$ (cm). Do đó $100$ vòng ứng với $7000\pi\approx21991$ (cm) $\approx219{,}9$ (m).

Vậy xe đi được khoảng $219{,}9$ m.

**Đáp số.** Khoảng $219{,}9$ m.
:::

:::exercise
Một hình vành khuyên có diện tích $40\pi$ cm², hiệu hai bán kính bằng $2$ cm. Tính hai bán kính. (Ôn lại [giải hệ hai phương trình bậc nhất hai ẩn](lesson:solving-simultaneous-equations).)

::hint
**Kiến thức:** $R^2-r^2=(R-r)(R+r)$.

**Gợi ý các bước:**
1. Từ diện tích suy ra $(R-r)(R+r)=40$, nên $R+r=20$.
2. Giải hệ gồm $R+r=20$ và $R-r=2$.

::solution
Theo đề bài ta có $\pi\left(R^2-r^2\right)=40\pi$, suy ra $(R-r)(R+r)=40$. Thay $R-r=2$ vào, ta được $R+r=20$. Giải hệ

$$\begin{cases}R+r=20\\ R-r=2\end{cases}\Rightarrow R=11,\ r=9.$$

Vậy hai bán kính là $11$ cm và $9$ cm.

**Đáp số.** $R=11$ cm, $r=9$ cm.
:::

:::exercise
**(1,5 điểm)** Một chiếc đồng hồ có kim phút dài $10$ cm và kim giờ dài $6$ cm.

a) Trong $20$ phút, đầu kim phút đi được quãng đường bao nhiêu (làm tròn kết quả đến hàng phần trăm)?

b) Tính diện tích hình quạt mà kim phút quét được trong $20$ phút đó (làm tròn kết quả đến hàng phần trăm).

c) Trong $20$ phút đó, kim giờ quay được bao nhiêu độ và đầu kim giờ đi được quãng đường bao nhiêu (làm tròn kết quả đến hàng phần trăm)?

::hint
**Kiến thức:** kim phút quay $6^\circ$ mỗi phút, kim giờ quay $0{,}5^\circ$ mỗi phút.

**Gợi ý các bước:**
1. Tìm số đo cung, rồi dùng $l=\dfrac{\pi Rn}{180}$.
2. Dùng $S=\dfrac{\pi R^2n}{360}$.
3. Làm tương tự với kim giờ.

::solution
a) Kim phút quay $20\cdot6^\circ=120^\circ$, nên $l=\dfrac{\pi\cdot10\cdot120}{180}=\dfrac{20\pi}{3}\approx20{,}94$ (cm).

b) Ta có $S=\dfrac{\pi\cdot10^2\cdot120}{360}=\dfrac{100\pi}{3}\approx104{,}72$ (cm²).

c) Kim giờ quay $20\cdot0{,}5^\circ=10^\circ$, nên $l=\dfrac{\pi\cdot6\cdot10}{180}=\dfrac{\pi}{3}\approx1{,}05$ (cm).

Vậy a) khoảng $20{,}94$ cm; b) khoảng $104{,}72$ cm²; c) $10^\circ$ và khoảng $1{,}05$ cm.

**Đáp số.** a) $\dfrac{20\pi}{3}\approx20{,}94$ cm; b) $\dfrac{100\pi}{3}\approx104{,}72$ cm²; c) $10^\circ$ và $\dfrac{\pi}{3}\approx1{,}05$ cm.
:::

:::exercise Thử thách
Cho đường tròn $(O; 6\text{ cm})$ và dây $AB=6$ cm. Tính diện tích hình viên phân giới hạn bởi dây $AB$ và cung nhỏ $AB$ (làm tròn kết quả đến hàng phần trăm).

::hint
**Kiến thức:** diện tích hình viên phân bằng diện tích hình quạt $OAB$ trừ diện tích tam giác $OAB$.

**Gợi ý các bước:**
1. Chỉ ra tam giác $OAB$ đều, suy ra cung nhỏ $AB$ có số đo $60^\circ$.
2. Tính diện tích hình quạt và diện tích tam giác đều.

::solution
Ta có $OA=OB=AB=6$ cm nên tam giác $OAB$ đều, suy ra $\widehat{AOB}=60^\circ$. Diện tích hình quạt là $\dfrac{\pi\cdot36\cdot60}{360}=6\pi$ (cm²). Tam giác đều cạnh $6$ cm có đường cao $3\sqrt3$ cm, nên diện tích là $\dfrac12\cdot6\cdot3\sqrt3=9\sqrt3$ (cm²). Do đó

$$S=6\pi-9\sqrt3\approx3{,}26\ \text{(cm}^2\text{)}.$$

Vậy diện tích hình viên phân khoảng $3{,}26$ cm².

**Đáp số.** $S=6\pi-9\sqrt3\approx3{,}26$ cm².
:::

## Kiểm tra mini

:::quiz
::mc
Độ dài cung $40^\circ$ của đường tròn bán kính $9$ cm là
A. $4\pi$ cm.
B. $2\pi$ cm.
C. $9\pi$ cm.
D. $\pi$ cm.
::key B
$l=\dfrac{\pi\cdot9\cdot40}{180}=2\pi$. A dùng $2\pi R$ thay cho $\pi R$, C dùng công thức diện tích hình quạt, D chia cho $360$ thay vì $180$.

::mc
Diện tích hình quạt tròn bán kính $4$ cm, cung $90^\circ$ là
A. $2\pi$ cm².
B. $16\pi$ cm².
C. $8\pi$ cm².
D. $4\pi$ cm².
::key D
$S=\dfrac{\pi\cdot16\cdot90}{360}=4\pi$. A là độ dài cung, B là diện tích cả hình tròn, C chia cho $180$ thay vì $360$.

::mc
Diện tích hình vành khuyên giới hạn bởi hai đường tròn đồng tâm bán kính $7$ cm và $4$ cm là
A. $33\pi$ cm².
B. $9\pi$ cm².
C. $65\pi$ cm².
D. $6\pi$ cm².
::key A
$S=\pi\left(49-16\right)=33\pi$. B tính $\pi(R-r)^2$, C cộng hai bình phương.

::mc
Một bánh xe có đường kính $60$ cm. Độ dài đường tròn của bánh xe là
A. $30\pi$ cm.
B. $60\pi$ cm.
C. $120\pi$ cm.
D. $900\pi$ cm.
::key B
$C=\pi d=60\pi$ cm. C lấy $60$ làm bán kính, D tính diện tích.

::tf
Cho hình quạt tròn bán kính $6$ cm, cung $120^\circ$. Xét tính đúng sai của các mệnh đề sau:
a) Cung của hình quạt dài $4\pi$ cm.
b) Diện tích hình quạt bằng $12\pi$ cm².
c) Diện tích hình quạt bằng tích độ dài cung và bán kính.
d) Chu vi hình quạt bằng $(4\pi+12)$ cm.
::key Đ Đ S Đ
a) Đúng: $l=\dfrac{\pi\cdot6\cdot120}{180}=4\pi$. b) Đúng: $S=\dfrac{\pi\cdot36\cdot120}{360}=12\pi$. c) Sai: $S=\dfrac{lR}{2}$. d) Đúng: chu vi gồm cung và hai bán kính.

::sa
Tính độ dài (đơn vị: cm) của cung $36^\circ$ trên đường tròn bán kính $10$ cm (làm tròn kết quả đến hàng phần trăm).
::key 6,28
$l=\dfrac{\pi\cdot10\cdot36}{180}=2\pi\approx6{,}28$ cm.

::sa
Tính diện tích (đơn vị: cm²) của hình vành khuyên giới hạn bởi hai đường tròn đồng tâm bán kính $6$ cm và $4$ cm (làm tròn kết quả đến hàng đơn vị).
::key 63
$S=\pi\left(36-16\right)=20\pi\approx62{,}83\approx63$ cm².
:::
