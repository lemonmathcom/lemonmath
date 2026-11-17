# Bật công cụ "Cho cả lớp làm trực tiếp"

Công cụ cần một máy chủ thời gian thực. Dùng Firebase Realtime Database (gói miễn phí Spark).

## Chủ dự án làm một lần (khoảng 5 phút)

1. Vào https://console.firebase.google.com, đăng nhập Google, bấm "Create a project" (tên tuỳ ý, ví dụ lemonmath-live; không cần Google Analytics).
2. Trong dự án: Build → Realtime Database → Create Database. Chọn vùng Singapore (asia-southeast1). Chọn "Start in locked mode".
3. Mở thẻ Rules, xoá hết, dán đoạn dưới đây rồi bấm Publish.
4. Mở thẻ Data, chép địa chỉ ở đầu trang (dạng https://lemonmath-live-default-rtdb.asia-southeast1.firebasedatabase.app) và gửi cho tài khoản Pro.

```json
{
  "rules": {
    ".read": false,
    ".write": false,
    "live": {
      "$room": {
        ".read": true,
        ".write": "!newData.exists()",
        ".validate": "$room.matches(/^[0-9]{6}$/)",
        "meta": {
          ".write": true,
          ".validate": "newData.hasChildren(['state', 'bank', 'ids'])"
        },
        "p": {
          "$pid": {
            ".write": true,
            ".validate": "newData.child('n').isString() && newData.child('n').val().length <= 40"
          }
        }
      }
    }
  }
}
```

Ý nghĩa: không ai liệt kê được danh sách lớp; chỉ người biết mã 6 số mới đọc và ghi được vào lớp đó; ai cũng xoá được một lớp nếu biết mã (để nút Đóng lớp hoạt động).

## Tài khoản Pro làm khi nhận địa chỉ

1. Thêm vào "site" trong data/curriculum.json: `"live": { "firebase": "<địa chỉ>" }`.
2. `npm run build`, mở /vi/giao-vien/, tạo một lớp thử, vào bằng một cửa sổ khác ở /vi/vao-lop/, làm đủ: vào lớp, bắt đầu, trả lời, hiện đúng sai, kết thúc, đóng lớp. Kiểm tra trong thẻ Data của Firebase là lớp đã bị xoá.
3. Commit + push.

## Giới hạn của gói miễn phí

- 100 kết nối cùng lúc. Chỉ màn hình giáo viên giữ kết nối liên tục (học sinh hỏi lại 3 giây một lần), nên nhiều lớp chạy song song vẫn được.
- 1 GB lưu trữ, 10 GB tải về mỗi tháng: một lớp 45 học sinh làm 45 phút dùng vài MB.
- Lớp mà giáo viên quên bấm Đóng lớp sẽ nằm lại trong database. Thỉnh thoảng vào thẻ Data xoá nhánh "live".
