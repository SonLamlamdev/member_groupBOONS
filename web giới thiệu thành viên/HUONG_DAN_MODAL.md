# 📋 Hướng Dẫn Sử Dụng Modal Thông Tin Chi Tiết

## 🎯 Chức Năng Modal

Khi bạn **click vào bất kỳ thẻ thành viên nào**, một cửa sổ popup (modal) sẽ hiện lên với **thông tin chi tiết** của thành viên đó.

## ✨ Thông Tin Hiển Thị

Modal sẽ hiển thị đầy đủ thông tin:

1. ✅ **Tên & Chức vụ**
2. ✅ **Mô tả chi tiết**
3. ✅ **Email**
4. ✅ **Số điện thoại**
5. ✅ **Địa điểm**
6. ✅ **Kinh nghiệm**
7. ✅ **Học vấn**
8. ✅ **Kỹ năng**
9. ✅ **Link mạng xã hội**

## 🎨 Tính Năng

### Cách Mở Modal
- **Click** vào bất kỳ thẻ thành viên nào

### Cách Đóng Modal
1. Click vào nút **X** ở góc trên bên phải
2. Click vào **vùng tối** bên ngoài modal
3. Nhấn phím **ESC** trên bàn phím

### Hiệu Ứng
- ✨ Animation trượt xuống mượt mà
- 💫 Blur background
- 🎭 Hover effects trên các thông tin
- 📱 Responsive trên mọi thiết bị

## 🛠️ Tùy Chỉnh Thông Tin

### Cách Chỉnh Sửa Thông Tin Thành Viên

Mở file `index.html` và tìm phần `<div class="team-card">`. Mỗi thẻ có các thuộc tính `data-*`:

```html
<div class="team-card" 
     data-name="Nguyễn Văn A"
     data-role="CEO & Founder"
     data-description="Mô tả về thành viên..."
     data-email="nguyenvana@company.com"
     data-phone="0123-456-789"
     data-location="Hà Nội, Việt Nam"
     data-experience="10+ năm kinh nghiệm..."
     data-education="Thạc sĩ Quản trị..."
     data-skills="Lãnh đạo, Chiến lược..."
     data-facebook="#"
     data-twitter="#"
     data-linkedin="#">
```

### Ví Dụ Chỉnh Sửa

**Thay đổi Email:**
```html
data-email="email-moi@company.com"
```

**Thay đổi Số điện thoại:**
```html
data-phone="0987-654-321"
```

**Thay đổi Link Facebook:**
```html
data-facebook="https://facebook.com/username"
```

**Thay đổi Kỹ năng:**
```html
data-skills="React, Node.js, Python, Docker"
```

## 📍 Vị Trí Code

### HTML Modal Structure
- **File:** `index.html`
- **Dòng:** 296-373
- Modal structure với tất cả các trường thông tin

### CSS Styling
- **File:** `styles.css`
- **Dòng:** 194-385
- Styling cho modal, animations, responsive

### JavaScript Logic
- **File:** `script.js`
- **Dòng:** 20-84
- Xử lý mở/đóng modal và hiển thị dữ liệu

## 💡 Mẹo

### 1. Thêm Ảnh Vào Modal
Nếu bạn đã thêm ảnh thật cho thành viên, ảnh sẽ tự động hiển thị trong modal.

### 2. Link Mạng Xã Hội
Thay `#` bằng link thật:
```html
data-facebook="https://facebook.com/yourpage"
data-twitter="https://twitter.com/youraccount"
data-linkedin="https://linkedin.com/in/yourprofile"
```

### 3. Tùy Chỉnh Màu Sắc Modal
Trong file `styles.css`, tìm `.modal-content` và thay đổi:
```css
.modal-content {
    background: #fff; /* Thay đổi màu nền */
    border-radius: 20px; /* Thay đổi độ bo góc */
}
```

### 4. Thay Đổi Kích Thước Modal
```css
.modal-content {
    max-width: 700px; /* Thay đổi chiều rộng tối đa */
}
```

## 🎭 Các Tính Năng Đặc Biệt

### 1. **Auto-close trên ESC**
Modal tự động đóng khi nhấn phím ESC

### 2. **Click Outside to Close**
Click vào vùng tối xung quanh modal để đóng

### 3. **Prevent Body Scroll**
Khi modal mở, trang web phía sau không scroll được

### 4. **Smooth Animations**
Hiệu ứng mở/đóng mượt mà với CSS animations

### 5. **Fully Responsive**
Tự động điều chỉnh kích thước trên mobile, tablet, desktop

## 🔧 Khắc Phục Sự Cố

### Modal không mở?
- Kiểm tra Console (F12) xem có lỗi JavaScript không
- Đảm bảo `script.js` được load đúng cách
- Kiểm tra các thuộc tính `data-*` đã điền đầy đủ

### Modal không đóng?
- Thử refresh trang (F5)
- Kiểm tra JavaScript có lỗi không
- Nhấn ESC để đóng

### Thông tin không hiển thị?
- Kiểm tra các thuộc tính `data-*` trong HTML
- Đảm bảo tên thuộc tính viết đúng
- Xem Console để debug

## 📱 Test Trên Các Thiết Bị

### Desktop (>768px)
- Modal hiển thị ở giữa màn hình
- Kích thước: 700px max-width
- Layout 2 cột cho thông tin

### Tablet (481px - 768px)
- Modal điều chỉnh padding
- Layout 1 cột

### Mobile (≤480px)
- Modal full-width với margin nhỏ
- Avatar nhỏ hơn
- Font size giảm để dễ đọc

## 🎉 Kết Luận

Modal đã được tích hợp hoàn chỉnh! Bạn chỉ cần:

1. ✅ Click vào thành viên
2. ✅ Xem thông tin chi tiết
3. ✅ Tùy chỉnh thông tin theo nhu cầu

**Chúc bạn sử dụng thành công! 🚀**



