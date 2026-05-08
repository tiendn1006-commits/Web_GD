# 🚀 HƯỚNG DẪN ROUTING - LEOEDUCATION PLATFORM

## 📋 Tổng Quan

LeoEducation Platform đã được cấu trúc lại thành **multi-page application** với React Router, chia thành các trang riêng biệt thay vì tất cả sections trên 1 trang.

## 🗺️ Cấu Trúc Routes

### Routes Chính

| Route | Component | Mô Tả |
|-------|-----------|-------|
| `/` | HomePage | Trang chủ với Hero, Categories, About, Testimonials |
| `/courses` | CoursesPage | Danh sách khóa học với filter và registration |
| `/instructors` | InstructorsPage | Giảng viên xuất sắc |
| `/pricing` | PricingPage | Bảng giá và FAQ |
| `/blog` | BlogPage | Blog & tài nguyên |
| `/about` | AboutPage | Về chúng tôi và đội ngũ giảng viên |
| `/contact` | ContactPage | Form liên hệ |

## 📁 Cấu Trúc Files Mới

```
src/
├── App.jsx (✨ Updated - React Router setup)
├── layouts/
│   └── MainLayout.jsx (✨ New - Navbar + Outlet + Footer)
├── features/
│   └── Home/
│       ├── components/
│       │   ├── Navbar.jsx (✨ Updated - React Router Links)
│       │   ├── Hero.jsx (✨ Updated - Link to /courses)
│       │   ├── About.jsx (✨ Updated - Link to /courses)
│       │   ├── Categories.jsx
│       │   ├── CoursesList.jsx
│       │   ├── Instructors.jsx
│       │   ├── Testimonials.jsx
│       │   ├── Pricing.jsx
│       │   ├── Blog.jsx
│       │   ├── FAQ.jsx
│       │   ├── ContactForm.jsx
│       │   └── Footer.jsx
│       └── pages/
│           ├── HomePage.jsx (✨ New)
│           ├── CoursesPage.jsx (✨ New)
│           ├── InstructorsPage.jsx (✨ New)
│           ├── PricingPage.jsx (✨ New)
│           ├── BlogPage.jsx (✨ New)
│           ├── AboutPage.jsx (✨ New)
│           ├── ContactPage.jsx (✨ New)
│           └── LandingPage.jsx (Old - không dùng nữa)
└── i18n/
    └── locales/
        ├── vi.json (✨ Updated - thêm nav items)
        └── en.json (✨ Updated - thêm nav items)
```

## 🎯 Chi Tiết Từng Trang

### 1. **HomePage** (`/`)
**Sections:**
- Hero (với CTA link đến /courses)
- Categories (6 danh mục)
- About (với link đến /courses)
- Testimonials

**Mục đích:** Landing page chính, giới thiệu tổng quan về platform

### 2. **CoursesPage** (`/courses`)
**Sections:**
- CoursesList (với filter và registration modal)

**Tính năng:**
- Hiển thị tất cả khóa học
- Filter theo category
- Modal đăng ký khóa học
- Registration form

### 3. **InstructorsPage** (`/instructors`)
**Sections:**
- Instructors (4 giảng viên xuất sắc)

**Tính năng:**
- Hiển thị thông tin giảng viên
- Stats: số học viên, số khóa học
- Rating stars
- Button "Xem Hồ Sơ"

### 4. **PricingPage** (`/pricing`)
**Sections:**
- Pricing (3 gói giá)
- FAQ (câu hỏi thường gặp)

**Tính năng:**
- 3 pricing plans: Basic, Pro, Premium
- Pro plan được highlight
- FAQ accordion
- Link liên hệ

### 5. **BlogPage** (`/blog`)
**Sections:**
- Blog (3 blog posts)

**Tính năng:**
- Blog posts với category tags
- Ngày đăng
- Excerpt
- Button "Đọc thêm"

### 6. **AboutPage** (`/about`)
**Sections:**
- About (về chúng tôi)
- Instructors (đội ngũ giảng viên)

**Tính năng:**
- Feature cards
- Benefits list
- Thông tin đội ngũ

### 7. **ContactPage** (`/contact`)
**Sections:**
- ContactForm

**Tính năng:**
- Form gửi tin nhắn
- Validation
- Success message
- Tích hợp backend API

## 🔧 Cách Hoạt Động

### MainLayout Component
```jsx
// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import { Navbar } from '../features/Home/components/Navbar';
import { Footer } from '../features/Home/components/Footer';

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet /> {/* Pages render here */}
      </main>
      <Footer />
    </div>
  );
};
```

### App.jsx với React Router
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/Web_GD">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<CoursesPage />} />
            {/* ... other routes */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
```

### Navbar với React Router Links
```jsx
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: t('nav.home'), path: '/' },
  { label: t('nav.courses'), path: '/courses' },
  // ...
];

// Active state based on current location
const location = useLocation();
const isActive = location.pathname === item.path;
```

## 🎨 Navigation Menu

### Desktop Menu
- 7 menu items: Home, Courses, Instructors, Pricing, Blog, About, Contact
- Active state với gradient background
- Smooth transitions
- Dark/Light mode toggle
- Language toggle (VI/EN)
- CTA button

### Mobile Menu
- Hamburger icon
- Slide-in menu
- Same menu items
- Theme & language toggles
- CTA button

## 🌐 Translations

### Thêm Menu Items Mới
```json
// vi.json
{
  "nav": {
    "home": "Trang chủ",
    "courses": "Khóa học",
    "instructors": "Giảng viên",
    "pricing": "Bảng giá",
    "blog": "Blog",
    "about": "Giới thiệu",
    "contact": "Liên hệ"
  }
}

// en.json
{
  "nav": {
    "home": "Home",
    "courses": "Courses",
    "instructors": "Instructors",
    "pricing": "Pricing",
    "blog": "Blog",
    "about": "About",
    "contact": "Contact"
  }
}
```

## 🚀 Cách Sử Dụng

### 1. Chạy Development Server
```bash
npm run dev
```

### 2. Navigate Giữa Các Trang
- Click vào menu items trên Navbar
- Click vào CTA buttons (Hero, About)
- Click vào category cards
- Sử dụng browser back/forward buttons

### 3. Thêm Route Mới
```jsx
// 1. Tạo page component
// src/features/Home/pages/NewPage.jsx
export const NewPage = () => {
  return (
    <div className="pt-24">
      {/* Your content */}
    </div>
  );
};

// 2. Thêm route vào App.jsx
<Route path="new-page" element={<NewPage />} />

// 3. Thêm menu item vào Navbar
const navItems = [
  // ...
  { label: t('nav.newPage'), path: '/new-page' }
];

// 4. Thêm translation
// vi.json & en.json
{
  "nav": {
    "newPage": "Trang Mới"
  }
}
```

## 🎯 Best Practices

### 1. Sử dụng Link thay vì <a>
```jsx
// ❌ Bad
<a href="/courses">Courses</a>

// ✅ Good
<Link to="/courses">Courses</Link>
```

### 2. Active State
```jsx
const location = useLocation();
const isActive = location.pathname === item.path;
```

### 3. Programmatic Navigation
```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/courses');
```

### 4. Scroll to Top on Route Change
```jsx
// Add to App.jsx or MainLayout
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}
```

## 📊 So Sánh: Single Page vs Multi Page

### Single Page (Trước)
- ✅ Tất cả content load 1 lần
- ✅ Smooth scroll giữa sections
- ❌ URL không thay đổi
- ❌ Không thể bookmark sections
- ❌ SEO kém hơn
- ❌ Initial load time lâu

### Multi Page (Sau)
- ✅ URL riêng cho mỗi page
- ✅ Có thể bookmark và share links
- ✅ SEO tốt hơn
- ✅ Faster initial load
- ✅ Better code organization
- ✅ Lazy loading pages
- ❌ Cần setup routing

## 🐛 Troubleshooting

### Links Không Hoạt Động
- Kiểm tra BrowserRouter đã wrap App
- Verify basename="/Web_GD" nếu deploy trên subdirectory
- Đảm bảo sử dụng `<Link>` không phải `<a>`

### Active State Không Đúng
- Sử dụng `useLocation()` hook
- So sánh `location.pathname` với route path
- Chú ý exact matching cho home route

### Page Không Scroll to Top
- Thêm ScrollToTop component
- Hoặc thêm `window.scrollTo(0, 0)` trong useEffect

## ✅ Checklist Migration

- [x] Tạo MainLayout với Navbar + Outlet + Footer
- [x] Tạo 7 page components
- [x] Cập nhật App.jsx với React Router
- [x] Cập nhật Navbar với Links và useLocation
- [x] Cập nhật Hero và About với Links
- [x] Thêm translations cho menu items
- [x] Test tất cả routes
- [x] Test dark mode trên tất cả pages
- [x] Test language toggle trên tất cả pages
- [x] Test responsive trên tất cả pages

## 🎉 Kết Luận

LeoEducation Platform đã được chuyển đổi thành công từ single-page sang multi-page application với React Router. Mỗi section giờ có URL riêng, dễ dàng navigate và share links!
