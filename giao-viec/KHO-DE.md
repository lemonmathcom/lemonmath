# Kho đề thi (từ 11/11/2026)

Mục mới trên web: /vi/on-thi/kho-de-thi/ và /exams/kho-de-thi/ (lộ trình "kho-de-thi" đứng đầu mảng "exams" trong data/curriculum.json).
Học sinh làm đề có bấm giờ, phần trắc nghiệm tự chấm, phần tự luận có lời giải + hướng dẫn chấm và ô tự chấm điểm, có nút in đề dạng phiếu (đáp án và lời giải in ở trang riêng cuối phiếu).

## Quyết định của chủ dự án
- Nguồn: lấy đề trên toanmath.com (kể cả đề của trường, giáo viên), luôn ghi tên đơn vị/tác giả ra đề và link trang gốc. Chủ dự án tự đánh giá và chịu trách nhiệm về bản quyền.
- Đợt 1: 10–15 đề gồm tốt nghiệp THPT, tuyển sinh vào 10, giữa kì/cuối kì lớp 10–12, giữa kì/cuối kì lớp 6–9.
- Song ngữ Việt – Anh (bản tiếng Anh dịch sát đề gốc).
- Đề do tài khoản ChatGPT tải về; tài khoản Pro chuyển thành trang web, tự giải lại từng câu để kiểm tra đáp án.
- Máy làm việc của Claude không truy cập được toanmath.com (bị chặn), nên đề phải được gửi vào (thư mục Dropbox hoặc file đính kèm).

## Chương (chapter id)
| id | Nội dung |
|---|---|
| kd-thpt | Đề tốt nghiệp THPT (chính thức, minh họa, thi thử) |
| kd-vao-10 | Đề tuyển sinh vào lớp 10 |
| kd-hk-thpt | Đề giữa kì, cuối kì lớp 10–12 |
| kd-hk-thcs | Đề giữa kì, cuối kì lớp 6–9 |

Mã bài: kd-<loại>-<năm>-<nơi>, ví dụ kd-vao10-2025-ha-noi, kd-thpt-2025-chinh-thuc, kd-hk1-l10-2025-thpt-xyz-ha-noi. Thêm vào "lessons" của chương với vi, en, minutes (thời gian làm bài).

## Định dạng file (content/vi/exams/kho-de-thi/<id>.md và content/en/exams/kho-de-thi/<id>.md)

```
---
title: Đề tuyển sinh lớp 10 môn Toán năm 2025 – 2026 Sở GD&ĐT Hà Nội
description: (≤ 160 kí tự)
minutes: 120
type: paper
source: Sở GD&ĐT Hà Nội
link: https://thcs.toanmath.com/....html
year: 2025
---

:::quiz exam            (chỉ khi đề có phần trắc nghiệm; viết như kiểm tra mini: ::mc / ::tf / ::sa, ::key, lời giải)
:::

:::exercise Bài 1 (1,5 điểm)        (bản tiếng Anh: Problem 1 (1.5 points))
Đề bài nguyên văn (giữ a), b), c) ...)
::solution
Lời giải chi tiết, ghi điểm từng bước theo hướng dẫn chấm, ví dụ "(0,5 điểm)".
:::
```

- Phần trắc nghiệm chấm như đề THPT: Phần I 0,25; Phần II tối đa 1; Phần III 0,5 điểm/câu. Đề THCS có trắc nghiệm 4 phương án dùng ::mc (0,25 điểm/câu).
- Mỗi bài tự luận phải có số điểm trong tiêu đề (để tính tổng điểm tự chấm) và có ::solution. Không cần ::hint.
- Hình vẽ: dùng :::diagram / :::graph như các bài học, hoặc SVG trong assets/img/kho-de-thi/.
- Kiểm tra: `node tools/check.js <id>` rồi `npm run build`.

## Tiến độ
| Mã | Chương | Trạng thái |
|---|---|---|
| (chưa có) | | chờ thư mục đề từ ChatGPT |
