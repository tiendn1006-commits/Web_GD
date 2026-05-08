# 🎓 HƯỚNG DẪN LEOEDUCATION PLATFORM

## 📋 Tổng Quan

LeoEducation là nền tảng giáo dục trực tuyến hiện đại với giao diện đẹp mắt, đầy đủ tính năng và trải nghiệm người dùng tuyệt vời.

## 🎨 Cấu Trúc Sections

### 1. **Navbar** (Thanh Điều Hướng)
- Logo LeoEducation với hình ảnh tùy chỉnh
- Menu: Trang chủ, Khóa học, Giới thiệu, Liên hệ
- Toggle Dark/Light mode
- Toggle ngôn ngữ VI/EN
- Button CTA "Khám phá ngay"
- Responsive với hamburger menu
- Glass effect khi scroll

### 2. **Hero Section** (Phần Đầu Trang)
- Tiêu đề lớn với gradient text
- Badge "Nền tảng giáo dục hàng đầu"
- 2 CTA buttons
- 3 thống kê: Học viên, Khóa học, Giảng viên
- Hình ảnh hero với floating cards
- Background gradient + blob animations

### 3. **Categories Section** ✨ MỚI
- 6 danh mục khóa học:
  - 💻 Công Nghệ (28 khóa học)
  - 💼 Kinh Doanh (22 khóa học)
  - 🎨 Thiết Kế (18 khóa học)
  - 🌍 Ngôn Ngữ (15 khóa học)
  - 📈 Marketing (19 khóa học)
  - 👥 Kỹ Năng Mềm (16 khóa học)
- Mỗi card có icon, tên, số khóa học
- Gradient colors khác nhau
- Hover effects mượt mà

### 4. **About Section** (Về Chúng Tôi)
- 4 feature cards với icons
- Hình ảnh minh họa
- Danh sách benefits
- Button CTA

### 5. **Courses Section** (Khóa Học)
- Grid hiển thị khóa học
- Filter buttons
- Course cards với đầy đủ thông tin
- Button "Đăng ký ngay"

### 6. **Instructors Section** ✨ MỚI
- 4 instructor cards:
  - 👨‍💻 Nguyễn Văn A - Web Development (8500 students, 12 courses, 4.9⭐)
  - 👩‍🎨 Trần Thị B - UI/UX Design (6200 students, 8 courses, 4.8⭐)
  - 👨‍💼 Lê Văn C - Business Strategy (7100 students, 10 courses, 4.9⭐)
  - 👩‍🔬 Phạm Thị D - Data Science (9200 students, 14 courses, 5.0⭐)
- Avatar emoji
- Rating stars
- Stats: số học viên & khóa học
- Button "Xem Hồ Sơ"

### 7. **Testimonials Section** (Đánh Giá)
- Feedback từ học viên
- Avatar & rating
- Hover effects

### 8. **Pricing Section** ✨ MỚI
- 3 pricing plans:
  - **Basic**: $0/tháng (5 courses, basic cert)
  - **Pro**: $99/tháng (all courses, priority support) - HIGHLIGHTED
  - **Premium**: $199/tháng (mentor 1-1, job guarantee)
- Pro plan có ring highlight & POPULAR badge
- Features list với checkmarks
- CTA buttons

### 9. **Blog Section** ✨ MỚI
- 3 blog post cards:
  - 💻 "10 Xu Hướng Công Nghệ 2026"
  - 🎨 "Nguyên Tắc Thiết Kế UI/UX Hiện Đại"
  - 📈 "Chiến Lược Marketing Hiệu Quả"
- Category tags
- Ngày đăng
- Excerpt
- Button "Đọc thêm"

### 10. **FAQ Section** ✨ MỚI
- 4 accordion items:
  - "Làm cách nào để đăng ký khóa học?"
  - "Khóa học có tính phí không?"
  - "Tôi có được cấp chứng chỉ không?"
  - "Bao lâu tôi hoàn thành khóa học?"
- Expand/collapse animation
- Chevron icon rotation
- Link "Liên hệ với chúng tôi"

### 11. **Contact Form** (Liên Hệ)
- Form gửi tin nhắn
- Validation
- Success message

### 12. **Footer** (Chân Trang)
- 4 cột layout
- Quick links
- Contact info
- Social media icons
- Copyright

## 🎨 Tính Năng Kỹ Thuật

### Theme System (Dark/Light Mode)
```jsx
import { useTheme } from '../../../contexts/ThemeContext';

const { isDarkMode, toggleTheme } = useTheme();
```

- Toggle button trên Navbar
- Tailwind `dark:` classes
- Smooth transitions (300ms)
- Lưu preference vào localStorage

### Internationalization (i18n)
```jsx
import { useTranslation } from 'react-i18next';

const { t, i18n } = useTranslation();
```

- Hỗ trợ VI & EN
- Toggle button trên Navbar
- Tất cả text via translation keys
- Files: `src/i18n/locales/vi.json` & `en.json`

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (1024px), lg (1280px)
- Hamburger menu trên mobile
- Grid layouts responsive

### Animations
- Framer Motion
- Smooth fade/slide transitions
- Hover effects
- Scroll-triggered animations
- Blob animations

## 📁 Cấu Trúc Files

```
src/
├── features/
│   └── Home/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── Categories.jsx ✨ MỚI
│       │   ├── About.jsx
│       │   ├── CoursesList.jsx
│       │   ├── Instructors.jsx ✨ MỚI
│       │   ├── Testimonials.jsx
│       │   ├── Pricing.jsx ✨ MỚI
│       │   ├── Blog.jsx ✨ MỚI
│       │   ├── FAQ.jsx ✨ MỚI
│       │   ├── ContactForm.jsx
│       │   ├── Footer.jsx
│       │   ├── RegistrationForm.jsx
│       │   └── index.js
│       └── pages/
│           └── LandingPage.jsx
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Input.jsx
│   └── Modal.jsx
├── contexts/
│   └── ThemeContext.jsx
├── i18n/
│   ├── index.js
│   └── locales/
│       ├── vi.json
│       └── en.json
└── styles/
    ├── index.css
    └── theme-default.css
```

## 🚀 Cách Sử Dụng

### 1. Cài Đặt Dependencies
```bash
npm install
```

### 2. Chạy Development Server
```bash
npm run dev
```

### 3. Build Production
```bash
npm run build
```

## 🎨 Customization

### Thêm Translation Key Mới
1. Mở `src/i18n/locales/vi.json`
2. Thêm key mới:
```json
{
  "section": {
    "newKey": "Nội dung tiếng Việt"
  }
}
```
3. Thêm vào `en.json`:
```json
{
  "section": {
    "newKey": "English content"
  }
}
```
4. Sử dụng trong component:
```jsx
{t('section.newKey')}
```

### Thêm Button Variant Mới
Mở `src/components/Button.jsx` và thêm vào `variants`:
```jsx
const variants = {
  // ... existing variants
  newVariant: 'bg-gradient-to-r from-color-500 to-color-600 ...'
};
```

### Thêm Section Mới
1. Tạo file component mới trong `src/features/Home/components/`
2. Export trong `index.js`
3. Import và thêm vào `LandingPage.jsx`
4. Thêm translations vào `vi.json` và `en.json`

## 🎯 Best Practices

### 1. Component Structure
- Sử dụng functional components với hooks
- Tách logic phức tạp thành custom hooks
- Giữ components nhỏ và tập trung

### 2. Styling
- Sử dụng Tailwind utility classes
- Thêm `dark:` prefix cho dark mode
- Sử dụng `transition-colors duration-200` cho smooth transitions

### 3. Animations
- Sử dụng Framer Motion cho animations phức tạp
- `whileInView` cho scroll animations
- `viewport={{ once: true }}` để animation chỉ chạy 1 lần

### 4. Performance
- Lazy load images
- Code splitting với React.lazy()
- Optimize bundle size

## 🐛 Troubleshooting

### Translation Keys Không Hiển Thị
- Kiểm tra `src/i18n/index.js` có import đúng files JSON
- Verify translation keys tồn tại trong cả `vi.json` và `en.json`
- Restart dev server

### Dark Mode Không Hoạt Động
- Kiểm tra `tailwind.config.js` có `darkMode: 'class'`
- Verify ThemeContext được wrap ở App.jsx
- Kiểm tra localStorage có lưu theme preference

### Responsive Issues
- Sử dụng Chrome DevTools để test breakpoints
- Kiểm tra Tailwind breakpoint prefixes (sm:, md:, lg:)
- Test trên thiết bị thật

## 📞 Support

Nếu gặp vấn đề, hãy:
1. Kiểm tra console logs
2. Verify tất cả dependencies đã được cài đặt
3. Đảm bảo đang sử dụng Node.js version 16+

## ✅ Checklist Hoàn Thành

- [x] Navbar với logo, menu, theme toggle, language toggle
- [x] Hero section với stats và CTA
- [x] Categories section với 6 danh mục
- [x] About section với features
- [x] Courses section với filter
- [x] Instructors section với 4 giảng viên
- [x] Testimonials section
- [x] Pricing section với 3 plans
- [x] Blog section với 3 posts
- [x] FAQ section với accordion
- [x] Contact form
- [x] Footer
- [x] Dark/Light mode
- [x] Multi-language (VI/EN)
- [x] Responsive design
- [x] Animations & transitions
- [x] Form validation

## 🎉 Kết Luận

LeoEducation Platform đã hoàn thiện với đầy đủ 12 sections, dark mode, multi-language, responsive design và animations mượt mà. Platform sẵn sàng để deploy và sử dụng!
