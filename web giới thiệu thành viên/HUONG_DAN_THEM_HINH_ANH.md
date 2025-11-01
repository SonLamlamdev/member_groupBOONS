# 📸 Hướng Dẫn Thêm Hình Ảnh Cho Thành Viên

## Bước 1: Chuẩn bị hình ảnh

1. **Đặt hình ảnh vào thư mục `images/`** (đã tạo sẵn)
2. Đặt tên file rõ ràng, ví dụ:
   - `nguyen-van-a.jpg`
   - `tran-thi-b.jpg`
   - `le-van-c.jpg`
   - v.v...

3. **Kích thước khuyến nghị:**
   - Hình vuông (tỷ lệ 1:1) hoặc chân dung
   - Độ phân giải: 400x400px trở lên
   - Định dạng: JPG, PNG, hoặc WEBP

## Bước 2: Thay đổi code HTML

### 🔴 CODE CŨ (đang dùng icon):

```html
<div class="card-image">
    <div class="avatar">
        <i class="fas fa-user"></i>
    </div>
</div>
```

### ✅ CODE MỚI (dùng hình ảnh thật):

```html
<div class="card-image">
    <img src="images/nguyen-van-a.jpg" alt="Nguyễn Văn A" class="member-photo">
</div>
```

## Ví dụ đầy đủ cho 1 thành viên:

```html
<!-- Member 1 -->
<div class="team-card">
    <div class="card-image">
        <img src="images/nguyen-van-a.jpg" alt="Nguyễn Văn A" class="member-photo">
    </div>
    <div class="card-content">
        <h3 class="member-name">Nguyễn Văn A</h3>
        <p class="member-role">CEO & Founder</p>
        <p class="member-description">
            Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, anh A là người dẫn dắt công ty đến những thành công mới.
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

## Bước 3: Thêm CSS cho hình ảnh (ĐÃ CÓ SẴN)

CSS đã được thêm vào file `styles.css`. Không cần làm gì thêm!

## 📋 Checklist:

- [ ] Đặt hình ảnh vào thư mục `images/`
- [ ] Đổi tên file ảnh cho dễ nhớ
- [ ] Mở file `index.html`
- [ ] Tìm dòng `<div class="avatar">` của từng thành viên
- [ ] Thay thế toàn bộ bằng `<img src="images/ten-file.jpg" alt="Tên" class="member-photo">`
- [ ] Lưu file và refresh trình duyệt

## 🎯 Vị trí cần sửa trong index.html:

- **Thành viên 1 (Nguyễn Văn A):** Dòng 20-24
- **Thành viên 2 (Trần Thị B):** Dòng 41-45
- **Thành viên 3 (Lê Văn C):** Dòng 62-66
- **Thành viên 4 (Phạm Thị D):** Dòng 83-87
- **Thành viên 5 (Hoàng Văn E):** Dòng 104-108
- **Thành viên 6 (Vũ Thị F):** Dòng 130-134
- **Thành viên 7 (Đỗ Văn G):** Dòng 152-156
- **Thành viên 8 (Bùi Thị H):** Dòng 174-178

## 💡 Mẹo:

- Nếu không có ảnh thật, có thể dùng ảnh từ [UI Faces](https://www.uifaces.co/) hoặc [RandomUser](https://randomuser.me/)
- Nén ảnh trước khi upload để trang web load nhanh hơn
- Đảm bảo tất cả ảnh có kích thước tương tự nhau

---

**Chúc bạn thành công! 🎉**

