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
      ".read": false,
      ".write": false,
      "$room": {
        ".read": "$room.matches(/^[0-9]{6}$/)",
        ".write": "$room.matches(/^[0-9]{6}$/) && !newData.exists()",
        "meta": {
          ".write": "$room.matches(/^[0-9]{6}$/)",
          ".validate": "newData.hasChildren(['state', 'bank', 'ids'])",
          "state": { ".validate": "newData.isString() && newData.val().matches(/^(lobby|run|end)$/)" },
          "bank":  { ".validate": "newData.isString() && newData.val().length <= 40" },
          "lang":  { ".validate": "newData.isString() && newData.val().matches(/^(vi|en)$/)" },
          "ids":   { ".validate": "newData.hasChildren()", "$i": { ".validate": "newData.isNumber()" } },
          "min":   { ".validate": "newData.isNumber() && newData.val() >= 0 && newData.val() <= 600" },
          "left":  { ".validate": "newData.isNumber() && newData.val() >= 0 && newData.val() <= 36000" },
          "title": { ".validate": "newData.isString() && newData.val().length <= 120" },
          "t":     { ".validate": "newData.isNumber()" },
          "$other": { ".validate": false }
        },
        "p": {
          ".write": "$room.matches(/^[0-9]{6}$/)",
          "$pid": {
            ".validate": "$pid.matches(/^[A-Za-z0-9]{1,24}$/) && newData.child('n').isString() && newData.child('n').val().length <= 40",
            "n": { ".validate": "newData.isString() && newData.val().length <= 40" },
            "a": {
              ".validate": "newData.hasChildren()",
              "$q": { ".validate": "(newData.isString() && newData.val().length <= 60) || newData.isNumber()" }
            },
            "d": { ".validate": "newData.isBoolean()" },
            "t": { ".validate": "newData.isNumber()" },
            "$other": { ".validate": false }
          }
        },
        "$other": { ".validate": false }
      }
    }
  }
}
```

Ý nghĩa và điểm siết chặt so với bản cũ:
- Không ai liệt kê được danh sách lớp; chỉ người biết mã 6 số mới đọc/ghi được vào lớp đó; ai biết mã cũng xoá được lớp (để nút Đóng lớp chạy) — như cũ.
- **Chặn nhồi dữ liệu làm cạn quota (phòng DoS):** mọi trường đều có kiểu và giới hạn độ dài (tên ≤ 40, mỗi đáp án ≤ 60 kí tự, tiêu đề ≤ 120…). Không thể ghi một khối dữ liệu khổng lồ để làm đầy 1 GB / 10 GB tải về của gói miễn phí.
- **Chặn ghi rác:** trong mỗi lớp chỉ cho phép hai nhánh `meta` và `p`; mỗi học sinh chỉ có `n/a/d/t`; mã học sinh phải là chữ-số ≤ 24 kí tự. Mọi khoá lạ bị từ chối.
- **Chặn `meta` sai hình:** `state` chỉ nhận lobby/run/end, `lang` chỉ vi/en, thời gian có trần hợp lý.

> **Giới hạn còn lại (quan trọng, cần biết):** vì công cụ chạy không đăng nhập (REST thuần, không SDK), bí mật duy nhất bảo vệ một lớp là **mã 6 số**. Người nào đoán/dò trúng mã của một lớp đang mở vẫn có thể đọc tên + đáp án của học sinh trong lớp đó, hoặc sửa đề/trạng thái lớp. Quy tắc trên không xoá được rủi ro này. Lớp chỉ tồn tại trong lúc đang học và bị xoá khi Đóng lớp, nên cửa sổ rủi ro hẹp, nhưng để bịt hẳn cần bật **Firebase App Check** (chỉ cho phép yêu cầu phát ra từ chính trang lemonmath.com, chặn curl/bot dò mã) — xem CHECKLIST-BAO-MAT.md mục Firebase. Việc này cần sửa thêm phần gọi REST trong assets/live.js và assets/teacher.js; nhờ tài khoản Pro làm khi bạn sẵn sàng.

## Tài khoản Pro làm khi nhận địa chỉ

1. Thêm vào "site" trong data/curriculum.json: `"live": { "firebase": "<địa chỉ>" }`.
2. `npm run build`, mở /vi/giao-vien/, tạo một lớp thử, vào bằng một cửa sổ khác ở /vi/vao-lop/, làm đủ: vào lớp, bắt đầu, trả lời, hiện đúng sai, kết thúc, đóng lớp. Kiểm tra trong thẻ Data của Firebase là lớp đã bị xoá.
3. Commit + push.

## Giới hạn của gói miễn phí

- 100 kết nối cùng lúc. Chỉ màn hình giáo viên giữ kết nối liên tục (học sinh hỏi lại 3 giây một lần), nên nhiều lớp chạy song song vẫn được.
- 1 GB lưu trữ, 10 GB tải về mỗi tháng: một lớp 45 học sinh làm 45 phút dùng vài MB.
- Lớp mà giáo viên quên bấm Đóng lớp sẽ nằm lại trong database. Thỉnh thoảng vào thẻ Data xoá nhánh "live".
