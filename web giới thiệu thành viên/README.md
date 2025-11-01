# Trang Web Giới Thiệu Thành Viên

Một trang web hiện đại và đẹp mắt để giới thiệu các thành viên trong đội ngũ của bạn.

## 🌟 Tính Năng

- ✨ Thiết kế hiện đại và chuyên nghiệp
- 📱 Responsive - Tương thích với mọi thiết bị
- 🎨 Hiệu ứng animation mượt mà
- 💫 Hiệu ứng hover và click tương tác
- 🎭 Gradient màu sắc bắt mắt
- 🔗 Icon mạng xã hội cho mỗi thành viên
- ⚡ Performance tối ưu
- 🎯 **Modal popup hiển thị thông tin chi tiết khi click vào thành viên**
- 📋 Thông tin đầy đủ: Email, Phone, Địa điểm, Kinh nghiệm, Học vấn, Kỹ năng

## 📁 Cấu Trúc File

```
├── index.html                # File HTML chính với 8 thành viên
├── styles.css                # File CSS cho styling + modal
├── script.js                 # File JavaScript cho tương tác + modal
├── images/                   # Thư mục chứa hình ảnh thành viên
├── README.md                 # File hướng dẫn chính
├── HUONG_DAN_THEM_HINH_ANH.md  # Hướng dẫn thêm hình ảnh
└── HUONG_DAN_MODAL.md        # Hướng dẫn sử dụng modal chi tiết
```

## 🚀 Cách Sử Dụng

1. **Mở trang web:**
   - Chỉ cần mở file `index.html` bằng trình duyệt web

2. **Xem thông tin chi tiết thành viên:**
   - **Click vào bất kỳ thẻ thành viên nào** để mở modal với thông tin đầy đủ
   - Modal hiển thị: Email, Phone, Địa điểm, Kinh nghiệm, Học vấn, Kỹ năng
   - Đóng modal bằng cách: Click nút X, Click bên ngoài, hoặc nhấn ESC

3. **Tùy chỉnh thông tin thành viên:**
   - Mở file `index.html`
   - Tìm phần `<div class="team-card">`
   - Thay đổi các thuộc tính `data-*`:
     - `data-name`: Tên thành viên
     - `data-role`: Vị trí/Chức vụ
     - `data-description`: Mô tả về thành viên
     - `data-email`: Email
     - `data-phone`: Số điện thoại
     - `data-location`: Địa điểm
     - `data-experience`: Kinh nghiệm
     - `data-education`: Học vấn
     - `data-skills`: Kỹ năng
     - Link mạng xã hội trong `data-facebook`, `data-twitter`, `data-linkedin`

4. **Thêm ảnh thật cho thành viên:**
   - Tạo thư mục `images/` trong cùng thư mục
   - Thêm ảnh thành viên vào thư mục
   - Thay đổi trong HTML:
   ```html
   <div class="card-image">
       <img src="images/member-name.jpg" alt="Tên thành viên">
   </div>
   ```

4. **Thay đổi màu sắc:**
   - Mở file `styles.css`
   - Tìm `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`
   - Thay đổi mã màu theo ý muốn

## 🎨 Tùy Chỉnh

### Thêm/Bớt Thành Viên

Để thêm thành viên mới, copy đoạn code này vào trong `<div class="team-grid">`:

```html
<div class="team-card">
    <div class="card-image">
        <div class="avatar">
            <i class="fas fa-user"></i>
        </div>
    </div>
    <div class="card-content">
        <h3 class="member-name">Tên Thành Viên</h3>
        <p class="member-role">Vị Trí</p>
        <p class="member-description">
            Mô tả về thành viên...
        </p>
        <div class="social-links">
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-icon"><i class="fas fa-envelope"></i></a>
        </div>
    </div>
</div>
```

### Thay Đổi Icon Font Awesome

Trang web sử dụng Font Awesome cho các icon. Bạn có thể thay đổi icon tại [Font Awesome Icons](https://fontawesome.com/icons)

## 🌐 Trình Duyệt Hỗ Trợ

- ✅ Chrome (khuyến nghị)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## 💡 Gợi Ý Cải Tiến

- Thêm ảnh thật cho từng thành viên
- Kết nối link mạng xã hội thật
- Thêm modal popup khi click vào thành viên để xem chi tiết
- Tích hợp form liên hệ
- Thêm filter/search để tìm thành viên
- Dark mode toggle

## 📞 Hỗ Trợ

Nếu bạn cần hỗ trợ hoặc có câu hỏi, vui lòng tạo issue hoặc liên hệ.

## 📄 License

Free to use and modify for personal and commercial projects.

---

**Chúc bạn thành công! 🎉**

