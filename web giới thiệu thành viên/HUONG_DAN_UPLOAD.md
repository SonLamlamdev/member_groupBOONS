# Hướng Dẫn Đưa Trang Web Lên Internet

Dự án của bạn là một trang web tĩnh (HTML, CSS, JavaScript), rất dễ đưa lên internet. Dưới đây là các cách phổ biến nhất:

## 📋 CÁC BƯỚC CHUẨN BỊ

1. **Kiểm tra file cần thiết:**
   - ✅ index.html
   - ✅ styles.css
   - ✅ script.js
   - ✅ folder images/ (chứa tất cả ảnh)

2. **Nén toàn bộ project thành file .zip** (tùy chọn, một số nền tảng không cần)

---

## 🌐 CÁCH 1: GitHub Pages (MIỄN PHÍ, DỄ NHẤT)

### Bước 1: Tạo tài khoản GitHub
- Truy cập: https://github.com
- Đăng ký tài khoản miễn phí

### Bước 2: Tạo repository mới
1. Click nút **"New"** (hoặc dấu **+** ở góc phải trên)
2. Đặt tên repository (ví dụ: `team-introduction`)
3. Chọn **Public**
4. Click **"Create repository"**

### Bước 3: Upload code lên GitHub
**Cách A - Dùng GitHub Desktop (Đơn giản nhất):**
1. Download GitHub Desktop: https://desktop.github.com
2. Cài đặt và đăng nhập
3. Click **"Clone a repository from the Internet"** > chọn repo vừa tạo
4. Copy toàn bộ file vào folder repo
5. Commit và Push lên GitHub

**Cách B - Dùng trình duyệt (Nhanh):**
1. Vào repository vừa tạo
2. Click **"Upload files"**
3. Kéo thả toàn bộ file vào
4. Click **"Commit changes"**

### Bước 4: Bật GitHub Pages
1. Vào repository > click **"Settings"**
2. Cuộn xuống mục **"Pages"** (bên trái)
3. Trong **"Source"**, chọn **"Deploy from a branch"**
4. Chọn branch **"main"** và folder **"/ (root)"**
5. Click **"Save"**

### Bước 5: Lấy link trang web
- Link sẽ là: `https://[username].github.io/[ten-repo]/`
- Ví dụ: `https://nguyenvana.github.io/team-introduction/`

**⏱️ Thời gian:** 5-10 phút | **💰 Giá:** MIỄN PHÍ | **⭐ Đánh giá:** ⭐⭐⭐⭐⭐

---

## 🌐 CÁCH 2: Netlify (MIỄN PHÍ, SIÊU NHANH)

### Bước 1: Tạo tài khoản
- Truy cập: https://netlify.com
- Đăng ký bằng GitHub hoặc email

### Bước 2: Upload website
**Cách A - Kéo thả (Nhanh nhất):**
1. Vào **"Add new site"** > **"Deploy manually"**
2. Kéo thả toàn bộ folder project vào ô
3. Chờ upload xong (5-10 giây)

**Cách B - Kết nối GitHub:**
1. Click **"Import from Git"**
2. Cho phép Netlify truy cập GitHub
3. Chọn repository
4. Click **"Deploy site"**

### Bước 3: Lấy link
- Netlify tự động tạo link: `https://[ten-ngau-nhien].netlify.app`
- Bạn có thể đổi tên trong Settings > Site details > Change site name

**⏱️ Thời gian:** 2-5 phút | **💰 Giá:** MIỄN PHÍ | **⭐ Đánh giá:** ⭐⭐⭐⭐⭐

---

## 🌐 CÁCH 3: Vercel (MIỄN PHÍ, CHUYÊN NGHIỆP)

### Bước 1: Tạo tài khoản
- Truy cập: https://vercel.com
- Đăng ký bằng GitHub

### Bước 2: Deploy
1. Click **"Add New Project"**
2. Chọn repository GitHub (hoặc upload file)
3. Click **"Deploy"**

### Bước 3: Lấy link
- Link: `https://[ten-project].vercel.app`

**⏱️ Thời gian:** 3-5 phút | **💰 Giá:** MIỄN PHÍ | **⭐ Đánh giá:** ⭐⭐⭐⭐⭐

---

## 🌐 CÁCH 4: Cloudflare Pages (MIỄN PHÍ, TỐC ĐỘ CAO)

### Bước 1: Tạo tài khoản
- Truy cập: https://pages.cloudflare.com
- Đăng ký miễn phí

### Bước 2: Deploy
1. Click **"Create a project"**
2. Chọn **"Upload assets"** hoặc kết nối Git
3. Upload file và deploy

**⏱️ Thời gian:** 3-5 phút | **💰 Giá:** MIỄN PHÍ | **⭐ Đánh giá:** ⭐⭐⭐⭐

---

## 🌐 CÁCH 5: InfinityFree (MIỚI PHÍ, CÓ TÊN MIỀN)

### Bước 1: Đăng ký
- Truy cập: https://infinityfree.net
- Tạo tài khoản miễn phí

### Bước 2: Upload qua FTP
1. Cài FileZilla (trình upload file): https://filezilla-project.org
2. Lấy thông tin FTP từ InfinityFree control panel
3. Kết nối và upload file lên folder **htdocs**

### Bước 3: Truy cập
- Link: `http://[username].infinityfreeapp.com`

**⏱️ Thời gian:** 10-15 phút | **💰 Giá:** MIỄN PHÍ | **⭐ Đánh giá:** ⭐⭐⭐

---

## 🔍 SO SÁNH CÁC PHƯƠNG ÁN

| Nền tảng | Độ khó | Tốc độ | Miễn phí | Tên miền | Đánh giá |
|----------|--------|---------|----------|----------|----------|
| **GitHub Pages** | ⭐⭐ Dễ | Trung bình | ✅ Có | ❌ Subdomain | ⭐⭐⭐⭐⭐ |
| **Netlify** | ⭐ Rất dễ | ⚡ Rất nhanh | ✅ Có | ❌ Subdomain | ⭐⭐⭐⭐⭐ |
| **Vercel** | ⭐⭐ Dễ | ⚡ Rất nhanh | ✅ Có | ❌ Subdomain | ⭐⭐⭐⭐⭐ |
| **Cloudflare** | ⭐⭐ Dễ | ⚡ Nhanh | ✅ Có | ❌ Subdomain | ⭐⭐⭐⭐ |
| **InfinityFree** | ⭐⭐⭐ Khó | Chậm | ✅ Có | ❌ Subdomain | ⭐⭐⭐ |

---

## 🎯 KHUYẾN NGHỊ

### Cho người mới bắt đầu:
👉 **Chọn Netlify** - Đơn giản nhất, kéo thả là xong!

### Cho người muốn chuyên nghiệp:
👉 **Chọn GitHub Pages** - Tích hợp với code, dễ quản lý version

### Cho người cần tốc độ tối đa:
👉 **Chọn Vercel hoặc Cloudflare** - CDN toàn cầu, load siêu nhanh

---

## ✅ CHECKLIST SAU KHI UPLOAD

- [ ] Website đã load được
- [ ] Tất cả ảnh hiển thị đúng
- [ ] CSS hiển thị đúng (màu sắc, layout)
- [ ] JavaScript hoạt động (click vào card mở modal)
- [ ] Website responsive trên mobile
- [ ] Link website share được cho người khác

---

## 🆘 XỬ LÝ LỖI THƯỜNG GẶP

### Ảnh không hiển thị:
- ✅ Kiểm tra tên file ảnh đúng chính tả
- ✅ Đảm bảo folder `images/` được upload
- ✅ Kiểm tra đường dẫn: `images/minhkhoi.jpg` (không có `/` ở đầu)

### CSS không chạy:
- ✅ Kiểm tra file `styles.css` đã được upload
- ✅ Kiểm tra link trong HTML: `<link rel="stylesheet" href="styles.css">`

### JavaScript không chạy:
- ✅ Kiểm tra file `script.js` đã được upload
- ✅ Mở Console (F12) xem có lỗi không

---

## 🔗 LIÊN KẾT NHANH

- 🌐 **GitHub Pages:** https://pages.github.com
- 🚀 **Netlify:** https://netlify.com
- ⚡ **Vercel:** https://vercel.com
- ☁️ **Cloudflare Pages:** https://pages.cloudflare.com
- 📁 **InfinityFree:** https://infinityfree.net

---

## 📝 LƯU Ý

1. **Tất cả các nền tảng trên đều MIỄN PHÍ cho website tĩnh**
2. **Link subdomain** luôn có dạng: `https://ten-tu-dat.site.com`
3. **Nếu muốn tên miền riêng** (như: `www.trangweb.com`), bạn cần mua domain (~$10-15/năm)
4. **GitHub Pages tốt nhất cho học tập** vì tích hợp với Git
5. **Netlify tốt nhất cho demo nhanh** vì kéo thả là xong

---

**Chúc bạn upload thành công! 🎉**

