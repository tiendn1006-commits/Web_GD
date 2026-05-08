# UI Modernization Plan - Education Style

## Phase 1: Global Styles & Theme
- [x] tailwind.config.js - Expand palette (teal, coral, slate), add keyframes
- [x] src/styles/theme-default.css - Update CSS variables, glassmorphism
- [x] src/styles/index.css - Add utilities (glass-strong, bg-grid-pattern, text-balance)
- [x] src/index.css - Remove old max-width layout, enable full-width modern

## Phase 2: Shared Components
- [ ] src/components/Button.jsx - New variants (ghost, gradient-gold, soft), icon slot
- [ ] src/components/Card.jsx - New variants (glass, elevated, flat), gradient border
- [ ] src/components/Input.jsx - Modern focus ring, placeholder styling
- [ ] src/components/Modal.jsx - Slide-up animation, stronger backdrop blur

## Phase 3: Sections
- [ ] Navbar.jsx - Glassmorphism xl, active indicator, mobile slide-in, CTA
- [ ] Hero.jsx - Animated gradient mesh, asymmetric layout, typographic stats
- [ ] About.jsx - Bento Grid features, wave SVG divider, gradient banner
- [ ] CoursesList.jsx - Filter tabs, gradient top border cards, skeleton loading
- [ ] Testimonials.jsx - Staggered masonry, glassmorphism cards, auto-carousel
- [ ] ContactForm.jsx - Info cards gradient, floating labels, success animation
- [ ] Footer.jsx - Dark slate/navy, newsletter input, social icons
- [ ] RegistrationForm.jsx - Sync with new form style, gradient course card

## Phase 4: Polish
- [ ] Verify responsive (mobile/tablet/desktop)
- [ ] ESLint check
- [ ] Dev server test

