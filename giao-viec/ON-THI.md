# Phân công viết mục Ôn thi (đợt 2, 11/11/2026)

Mục Ôn thi (lemonmath.com/exams/ và /vi/on-thi/) đã có khung, lộ trình và bài mẫu. Còn **91 bài song ngữ** chưa viết, đánh mã **E001–E091**, chia thành 12 gói. Đợt này KHÔNG thay phân công B001–B216: tài khoản nào xong khối B thì nhận một gói E (ghi tên vào cột cuối).

Thứ tự ưu tiên đề nghị: O12 (kĩ năng, ngắn, dùng cho mọi học sinh) → O01, O02 (SAT, đông người tìm nhất) → O05, O06 (AP Calculus) → O08, O09 (IB AA) → các gói còn lại.

| Gói | Kì thi | Số bài | Mã | File giao việc | Tài khoản nhận |
|---|---|---|---|---|---|
| O01 | SAT Math | 7 | E001–E007 | `on-thi/O01-sat.txt` | |
| O02 | SAT Math | 6 | E008–E013 | `on-thi/O02-sat.txt` | |
| O03 | ACT Math | 7 | E014–E020 | `on-thi/O03-act.txt` | |
| O04 | AP Precalculus | 9 | E021–E029 | `on-thi/O04-ap-precalculus.txt` | |
| O05 | AP Calculus AB/BC | 6 | E030–E035 | `on-thi/O05-ap-calculus.txt` | |
| O06 | AP Calculus AB/BC | 9 | E036–E044 | `on-thi/O06-ap-calculus.txt` | |
| O07 | AP Statistics | 10 | E045–E054 | `on-thi/O07-ap-statistics.txt` | |
| O08 | IB Math AA (SL/HL) | 6 | E055–E060 | `on-thi/O08-ib-aa.txt` | |
| O09 | IB Math AA (SL/HL) | 6 | E061–E066 | `on-thi/O09-ib-aa.txt` | |
| O10 | IB Math AI (SL/HL) | 9 | E067–E075 | `on-thi/O10-ib-ai.txt` | |
| O11 | Cambridge IGCSE Mathematics (0580) | 11 | E076–E086 | `on-thi/O11-igcse.txt` | |
| O12 | Kĩ năng ôn thi | 5 | E087–E091 | `on-thi/O12-study-skills.txt` | |

## Tiến độ (tài khoản Pro tự viết từ 11/11/2026)
- Chưa giao gói nào cho tài khoản khác (11/11/2026).
- Đã xong: evidence-based-revision, E001–E011 (toàn bộ bài chủ đề SAT: sat-overview, sat-desmos-strategies, sat-linear-equations-systems, sat-linear-functions-inequalities, sat-equivalent-expressions, sat-quadratics-nonlinear, sat-exponential-functions, sat-ratios-percentages-units, sat-statistics-probability, sat-area-volume-lines-angles, sat-triangles-trig-circles).
- SAT xong trọn gói O01–O02 (E001–E013), kể cả 2 đề luyện. Đề luyện sinh từ tools/gen/sat_tests.py (ngân hàng câu song ngữ) — nếu sửa đề, sửa thẳng file .md.
- Gói O12 kĩ năng ôn thi xong (6/6 bài). Nguồn đã kiểm chứng thêm: Ramirez & Beilock (2011) Science 331(6014); Jamieson et al. (2010) JESP 46(1).
- AP Calculus: xong apcalc-overview, apcalc-limits-continuity, apcalc-differentiation-rules, apcalc-implicit-inverse, apcalc-contextual-applications, apcalc-analytical-applications, apcalc-accumulation-ftc, apcalc-integration-techniques, apcalc-differential-equations, apcalc-area-volume, apcalc-bc-parametric-polar, apcalc-bc-series, apcalc-frq-strategies, apcalc-practice-exam-ab, apcalc-practice-exam-bc: XONG TRỌN GÓI (15/15). Hai đề luyện sinh từ tools/gen/apcalc_tests.py + apcalc_bc_bank.py (ngân hàng câu song ngữ, đáp số Part B đã tính bằng máy); đề BC dồn vào unit riêng của BC (27/42 câu).
- IB Math AA: xong ibaa-overview, ibaa-number-algebra, ibaa-functions, ibaa-geometry-trigonometry, ibaa-statistics-probability, ibaa-calculus, ibaa-hl-complex-proof, ibaa-hl-vectors, ibaa-hl-further-calculus, ibaa-paper3-exploration, ibaa-practice-paper-sl, ibaa-practice-paper-hl: XONG TRỌN GÓI (12/12). Đề SL kiểu Paper 1 (90 phút, không máy tính, 80 điểm); đề HL kiểu Paper 2 (120 phút, GDC, 110 điểm: Section A 50 + Section B 60), lời giải đề HL viết theo chuẩn 2e. Tiêu chí IA đã kiểm chứng: A 4, B 4, C 3, D 3, E 6 (= 20), khuyến nghị 12–20 trang.
- ACT: xong act-overview, act-number-quantity, act-algebra-functions, act-geometry, act-statistics-probability, act-modelling-integrating, act-practice-test-1: XONG TRỌN GÓI (7/7), viết theo chuẩn 2e. Đề luyện sinh từ tools/gen/act_tests.py (45 câu, đáp án rải đều theo dãy KEYS).
- AP Precalculus: XONG (9/9), chuẩn 2e; đề luyện sinh bằng tools/gen/apprecalc_tests.py (42 câu trắc nghiệm + 4 câu tự luận ở tools/gen/apprecalc_frq_*.md). Tiếp theo: AP Statistics.
- AP Statistics: xong apstats-overview, apstats-one-variable-data, apstats-two-variable-regression (3/10), chuẩn 2e, theo khung 2026–27 (đã kiểm tra tỉ trọng 5 unit trên AP Central; chưa xác minh được chi bình phương độc lập/thuần nhất nên KHÔNG đưa vào). Tiếp theo: apstats-collecting-data, apstats-probability-random-variables, apstats-sampling-distributions, apstats-inference-proportions, apstats-inference-means, apstats-frq-strategies, apstats-practice-exam-1 (42 ::mc + 4 tự luận 10 điểm).
- Lưu ý: 40 bài Ôn thi viết trước ngày 11/11 tối (SAT, AP Calculus, IB AA) có lời giải vắn tắt, cần nâng cấp theo chuẩn 2e khi tới lượt Ôn thi trong kế hoạch nâng cấp (sau lớp 9 → lớp 12).
- Câu nhiều ý kiểu IB: viết mỗi ý một dòng "(a) … [n marks]"; render.js tự tách thành đoạn riêng (cả dạng "a) " lẫn "(a) ").
- Đề trắc nghiệm quốc tế: có thể dùng nhiều hộp `:::quiz test` (mỗi module một hộp); câu giữ đúng thứ tự viết, đánh số liên tục, không chia Phần I/II/III.
- Biểu đồ dữ liệu (trục khác đơn vị): thêm dòng `shape: free` trong :::graph.
- Quy ước số: bản Anh viết 24{,}000 hoặc 24,000; bản Việt viết 24.000 (dấu chấm phân cách hàng nghìn, {,} cho số thập phân) để check.js so khớp số liệu hai bản.

## Cách giao
- Dán toàn bộ file `.txt` của gói, kèm 5 file: `_templates/BRIEF-exams.md`, `_templates/WRITING-SPEC.md`, `_templates/GLOSSARY.md`, và cặp bài mẫu `content/vi/g12/review-integrals.md` + `content/en/g12/review-integrals.md` (gói O12 thay cặp mẫu bằng `evidence-based-revision.md` hai bản).
- Bài nộp về: như cũ. `tools/qa/intake.py` chưa biết thư mục exams, nên với bài E hãy chép tay hai file vào `content/vi/exams/<kì thi>/` và `content/en/exams/<kì thi>/`, rồi chạy `node tools/check.js <id>`.
- Thi vào 10 và tốt nghiệp THPT đã nằm trong khối B (lớp 9) và lớp 12; trang Ôn thi tự liên kết sang.

## Danh sách đầy đủ

| Mã | Kì thi | id | Tên bài | Gói |
|---|---|---|---|---|
| E001 | SAT Math | sat-overview | SAT Math gồm những gì và cách ôn | O01 |
| E002 | SAT Math | sat-desmos-strategies | Dùng Desmos và các mẹo làm bài SAT | O01 |
| E003 | SAT Math | sat-linear-equations-systems | Phương trình và hệ phương trình bậc nhất | O01 |
| E004 | SAT Math | sat-linear-functions-inequalities | Hàm số bậc nhất và bất phương trình | O01 |
| E005 | SAT Math | sat-equivalent-expressions | Biểu thức tương đương và lũy thừa | O01 |
| E006 | SAT Math | sat-quadratics-nonlinear | Hàm bậc hai và phương trình phi tuyến | O01 |
| E007 | SAT Math | sat-exponential-functions | Hàm mũ: tăng trưởng và suy giảm | O01 |
| E008 | SAT Math | sat-ratios-percentages-units | Tỉ số, tỉ lệ, phần trăm và đổi đơn vị | O02 |
| E009 | SAT Math | sat-statistics-probability | Thống kê, đọc biểu đồ và xác suất | O02 |
| E010 | SAT Math | sat-area-volume-lines-angles | Diện tích, thể tích, đường thẳng và góc | O02 |
| E011 | SAT Math | sat-triangles-trig-circles | Tam giác, lượng giác và đường tròn | O02 |
| E012 | SAT Math | sat-practice-test-1 | Đề luyện SAT Math số 1 | O02 |
| E013 | SAT Math | sat-practice-test-2 | Đề luyện SAT Math số 2 | O02 |
| E014 | ACT Math | act-overview | ACT Math gồm những gì và cách ôn | O03 |
| E015 | ACT Math | act-number-quantity | Số, đại lượng và tỉ lệ | O03 |
| E016 | ACT Math | act-algebra-functions | Đại số và hàm số | O03 |
| E017 | ACT Math | act-geometry | Hình học phẳng, toạ độ và lượng giác | O03 |
| E018 | ACT Math | act-statistics-probability | Thống kê và xác suất | O03 |
| E019 | ACT Math | act-modelling-integrating | Mô hình hoá và bài tổng hợp | O03 |
| E020 | ACT Math | act-practice-test-1 | Đề luyện ACT Math số 1 | O03 |
| E021 | AP Precalculus | apprecalc-overview | AP Precalculus gồm những gì và cách ôn | O04 |
| E022 | AP Precalculus | apprecalc-rates-polynomials | Tốc độ biến thiên và hàm đa thức | O04 |
| E023 | AP Precalculus | apprecalc-rational-transformations | Hàm hữu tỉ, phép biến đổi và mô hình hoá | O04 |
| E024 | AP Precalculus | apprecalc-sequences-exponentials | Cấp số và hàm mũ | O04 |
| E025 | AP Precalculus | apprecalc-logarithms-semilog | Hàm ngược, logarit và đồ thị bán logarit | O04 |
| E026 | AP Precalculus | apprecalc-trig-functions-modelling | Hàm lượng giác và mô hình tuần hoàn | O04 |
| E027 | AP Precalculus | apprecalc-trig-equations-polar | Phương trình lượng giác và toạ độ cực | O04 |
| E028 | AP Precalculus | apprecalc-frq-strategies | Bốn dạng câu tự luận và cách đạt điểm | O04 |
| E029 | AP Precalculus | apprecalc-practice-exam-1 | Đề luyện AP Precalculus số 1 | O04 |
| E030 | AP Calculus AB/BC | apcalc-overview | AP Calculus AB/BC gồm những gì và cách ôn | O05 |
| E031 | AP Calculus AB/BC | apcalc-limits-continuity | Giới hạn và tính liên tục | O05 |
| E032 | AP Calculus AB/BC | apcalc-differentiation-rules | Định nghĩa đạo hàm và các quy tắc tính | O05 |
| E033 | AP Calculus AB/BC | apcalc-implicit-inverse | Đạo hàm hàm hợp, hàm ẩn và hàm ngược | O05 |
| E034 | AP Calculus AB/BC | apcalc-contextual-applications | Tốc độ liên quan, chuyển động và xấp xỉ tuyến tính | O05 |
| E035 | AP Calculus AB/BC | apcalc-analytical-applications | Định lí giá trị trung bình, cực trị và khảo sát | O05 |
| E036 | AP Calculus AB/BC | apcalc-accumulation-ftc | Tích phân, tổng Riemann và định lí cơ bản | O06 |
| E037 | AP Calculus AB/BC | apcalc-integration-techniques | Kĩ thuật tính tích phân | O06 |
| E038 | AP Calculus AB/BC | apcalc-differential-equations | Phương trình vi phân và trường hướng | O06 |
| E039 | AP Calculus AB/BC | apcalc-area-volume | Diện tích, thể tích và giá trị trung bình | O06 |
| E040 | AP Calculus AB/BC | apcalc-bc-parametric-polar | Hàm tham số, hàm véc-tơ và toạ độ cực | O06 |
| E041 | AP Calculus AB/BC | apcalc-bc-series | Chuỗi vô hạn, chuỗi Taylor và chuỗi luỹ thừa | O06 |
| E042 | AP Calculus AB/BC | apcalc-frq-strategies | Các dạng câu tự luận AP Calculus và cách trình bày | O06 |
| E043 | AP Calculus AB/BC | apcalc-practice-exam-ab | Đề luyện AP Calculus AB | O06 |
| E044 | AP Calculus AB/BC | apcalc-practice-exam-bc | Đề luyện AP Calculus BC | O06 |
| E045 | AP Statistics | apstats-overview | AP Statistics gồm những gì và cách ôn | O07 |
| E046 | AP Statistics | apstats-one-variable-data | Mô tả dữ liệu một biến | O07 |
| E047 | AP Statistics | apstats-two-variable-regression | Dữ liệu hai biến và hồi quy tuyến tính | O07 |
| E048 | AP Statistics | apstats-collecting-data | Chọn mẫu, nghiên cứu quan sát và thí nghiệm | O07 |
| E049 | AP Statistics | apstats-probability-random-variables | Xác suất và biến ngẫu nhiên | O07 |
| E050 | AP Statistics | apstats-sampling-distributions | Phân phối chuẩn và phân phối mẫu | O07 |
| E051 | AP Statistics | apstats-inference-proportions | Suy luận cho tỉ lệ | O07 |
| E052 | AP Statistics | apstats-inference-means | Suy luận cho trung bình | O07 |
| E053 | AP Statistics | apstats-frq-strategies | Bốn dạng câu tự luận mới và cách viết lời giải | O07 |
| E054 | AP Statistics | apstats-practice-exam-1 | Đề luyện AP Statistics số 1 | O07 |
| E055 | IB Math AA (SL/HL) | ibaa-overview | IB Math AA gồm những gì và cách ôn | O08 |
| E056 | IB Math AA (SL/HL) | ibaa-number-algebra | Số và đại số: cấp số, logarit, nhị thức, chứng minh | O08 |
| E057 | IB Math AA (SL/HL) | ibaa-functions | Hàm số: đồ thị, phép biến đổi, hàm ngược | O08 |
| E058 | IB Math AA (SL/HL) | ibaa-geometry-trigonometry | Hình học và lượng giác | O08 |
| E059 | IB Math AA (SL/HL) | ibaa-statistics-probability | Thống kê và xác suất | O08 |
| E060 | IB Math AA (SL/HL) | ibaa-calculus | Giải tích: đạo hàm, tích phân, động học | O08 |
| E061 | IB Math AA (SL/HL) | ibaa-hl-complex-proof | Số phức, quy nạp và chứng minh | O09 |
| E062 | IB Math AA (SL/HL) | ibaa-hl-vectors | Véc-tơ, đường thẳng và mặt phẳng | O09 |
| E063 | IB Math AA (SL/HL) | ibaa-hl-further-calculus | Giải tích nâng cao: chuỗi Maclaurin, phương trình vi phân | O09 |
| E064 | IB Math AA (SL/HL) | ibaa-paper3-exploration | Paper 3 và bài khám phá toán học (IA) | O09 |
| E065 | IB Math AA (SL/HL) | ibaa-practice-paper-sl | Đề luyện IB Math AA SL | O09 |
| E066 | IB Math AA (SL/HL) | ibaa-practice-paper-hl | Đề luyện IB Math AA HL | O09 |
| E067 | IB Math AI (SL/HL) | ibai-overview | IB Math AI gồm những gì và cách ôn | O10 |
| E068 | IB Math AI (SL/HL) | ibai-number-finance | Số, xấp xỉ và toán tài chính | O10 |
| E069 | IB Math AI (SL/HL) | ibai-function-models | Mô hình hàm số | O10 |
| E070 | IB Math AI (SL/HL) | ibai-geometry-voronoi | Hình học, lượng giác và sơ đồ Voronoi | O10 |
| E071 | IB Math AI (SL/HL) | ibai-statistics-tests | Thống kê, tương quan và kiểm định | O10 |
| E072 | IB Math AI (SL/HL) | ibai-calculus | Giải tích ứng dụng | O10 |
| E073 | IB Math AI (SL/HL) | ibai-hl-matrices-graphs | Ma trận và lí thuyết đồ thị | O10 |
| E074 | IB Math AI (SL/HL) | ibai-hl-further-statistics | Thống kê nâng cao và phương trình vi phân | O10 |
| E075 | IB Math AI (SL/HL) | ibai-practice-paper-sl | Đề luyện IB Math AI SL | O10 |
| E076 | Cambridge IGCSE Mathematics (0580) | igcse-overview | IGCSE Mathematics gồm những gì và cách ôn | O11 |
| E077 | Cambridge IGCSE Mathematics (0580) | igcse-number | Số: phân số, phần trăm, chỉ số, cận trên – cận dưới | O11 |
| E078 | Cambridge IGCSE Mathematics (0580) | igcse-algebra-graphs | Đại số và đồ thị | O11 |
| E079 | Cambridge IGCSE Mathematics (0580) | igcse-coordinate-geometry | Hình học toạ độ | O11 |
| E080 | Cambridge IGCSE Mathematics (0580) | igcse-geometry | Hình học: góc, đồng dạng, định lí đường tròn | O11 |
| E081 | Cambridge IGCSE Mathematics (0580) | igcse-mensuration | Đo lường: chu vi, diện tích, thể tích | O11 |
| E082 | Cambridge IGCSE Mathematics (0580) | igcse-trigonometry | Lượng giác | O11 |
| E083 | Cambridge IGCSE Mathematics (0580) | igcse-transformations-vectors | Phép biến hình và véc-tơ | O11 |
| E084 | Cambridge IGCSE Mathematics (0580) | igcse-probability-statistics | Xác suất và thống kê | O11 |
| E085 | Cambridge IGCSE Mathematics (0580) | igcse-practice-paper-2 | Đề luyện Paper 2 (không máy tính) | O11 |
| E086 | Cambridge IGCSE Mathematics (0580) | igcse-practice-paper-4 | Đề luyện Paper 4 (có máy tính) | O11 |
| E087 | Kĩ năng ôn thi | revision-plan | Lập kế hoạch ôn thi 12 tuần | O12 |
| E088 | Kĩ năng ôn thi | error-log | Sổ lỗi sai: biến mỗi lỗi thành điểm số | O12 |
| E089 | Kĩ năng ôn thi | exam-day-strategy | Chiến thuật trong phòng thi | O12 |
| E090 | Kĩ năng ôn thi | calculator-skills | Dùng máy tính cầm tay và Desmos thông minh | O12 |
| E091 | Kĩ năng ôn thi | calm-under-pressure | Giữ bình tĩnh: giấc ngủ, căng thẳng và phong độ | O12 |
