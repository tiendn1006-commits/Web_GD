# 2 Concept Giao Dien & Animation Moi

## Concept 1: "Dark Academic" - Hoc thuat, sang trong, bi an

**Mau sac:**
- Background: `slate-950` / `#0B0F19` (toi sau)
- Accent chinh: `amber-400` / vang dong co dien
- Accent phu: `emerald-500` / xanh la dam
- Text: `stone-200` / trang nga
- Card: `slate-900` voi border `slate-800`

**Dac trung thi giac:**
- Gradient text: vang dong -> cam
- Glassmorphism manh tren nen toi
- Glow effect: `box-shadow: 0 0 40px rgba(251,191,36,0.15)`
- Separator: duong line gradient ngang

**Animation he thong:**

| Element | Animation | Chi tiet |
|---------|-----------|----------|
| Navbar | Blur intensify | `backdrop-blur` tang dan tu 0 -> 20px khi scroll, border-bottom xuat hien voi `scaleX` tu 0 -> 1 |
| Hero Headline | Typewriter + Character stagger | Tung chu cai xuat hien lan luot voi cursor nhap nhay, sau do toan bo text glow up |
| Hero Image | Parallax + Floating | Anh dich chuyen cham hon scroll 0.5x, 3 lop overlay dich chuyen khac toc do tao chieu sau |
| Stats | Count-up + Slot machine | So dem tu 0 den gia tri cuoi voi `useSpring`, chu so cuon nhu may slot |
| Section Headers | Line reveal + Text slide | Duong gach ngang keo tu trai sang, text truot len tu duoi voi `clipPath` |
| Cards | 3D Tilt + Glow follow | Theo chuot: xoay 3D `rotateX/Y` toi da 10 do, glow gradient di chuyen theo vi tri chuot |
| Buttons | Magnetic + Ripple | Hut chuot khi hover (di chuyen nhe ve phia chuot), ripple effect khi click |
| Course Cards | Stagger cascade | Xuat hien lan luot tu tren xuong voi do tre 0.1s, moi card xoay nhe 2 do roi ve 0 |
| Testimonials | Infinite marquee | Chay ngang tu dong nhu bang quang cao, pause khi hover |
| Footer | Reveal on scroll | Footer sections xuat hien tu duoi len voi `mask-image` gradient |
| Page Transition | Curtain wipe | 2 tam rem mau den keo ra tu giua khi chuyen trang |
| Scroll Progress | Circular indicator | Vong tron o goc phai duoi, stroke-dasharray thay doi theo % scroll |
| Cursor | Custom glow | Con tro to, mau vang nhat, co the an/doi khi hover vao clickable element |

---

## Concept 2: "Kinetic Playful" - Nang dong, tre trung, tuoi moi

**Mau sac:**
- Background: Gradient lien tuc `linear-gradient(135deg, #fdfbf7 0%, #e0f2fe 50%, #fce7f3 100%)`
- Accent: Da mau - `rose-500`, `violet-500`, `cyan-400` xen ke
- Text: `gray-900` dam
- Card: Trang su voi shadow mau

**Dac trung thi giac:**
- Blob shapes organic chuyen mau lien tuc (morphing SVG)
- Grid pattern doi mau theo thoi gian
- Dots/particles nho bay khap background

**Animation he thong:**

| Element | Animation | Chi tiet |
|---------|-----------|----------|
| Navbar | Elastic bounce | Khi scroll xuong, navbar nhay len voi spring physics `stiffness: 300, damping: 20` |
| Hero | Morphing blobs + Text scramble | Blob SVG bien hinh lien tuc, text headline dao lon chu cai roi sap xep lai |
| Stats | Bouncing numbers | So nhay len cao roi roi xuong voi gravity physics khi xuat hien |
| About | Bento explosion | Grid cards xuat hien tu tam man hinh bay ra 4 huong roi ve vi tri |
| Course Cards | Stack reveal | Cards xep chong nhau, khi scroll tu dong trai ra nhu chia bai |
| Filter Tabs | Liquid morph | Pill active bien hinh mem mai chuyen sang tab khac nhu nuoc chay |
| Testimonials | 3D Carousel | Xoay vong 3D nhu cover flow, card o giua phong to, 2 ben xoay 45 do |
| Contact Form | Handwriting draw | Border form ve tu dong nhu but ve, icon nhay mua khi focus |
| Footer | Wave text | Text copyright song song nhe len xuong tung chu cai |
| Buttons | Jelly press | Khi click, button bien dang nhu thach roi hoi phuc |
| Scroll | Velocity skew | Toan bo noi dung nghieng nhe theo toc do scroll (skewY +-2 do) |
| Loading | Skeleton shimmer | Xuong song nhay disco voi 3 mau gradient chuyen doi |

---

## So sanh nhanh

| Tieu chi | Dark Academic | Kinetic Playful |
|----------|---------------|-----------------|
| Cam xuc | Nghiem tuc, dang tin, sang trong | Vui ve, tre trung, nang dong |
| Do tuoi target | 25-45 (nguoi di lam) | 18-30 (sinh vien, newbie) |
| Thoi gian focus | Lau, doc ky | Nhanh, luot qua |
| Phu hop voi | Edtech cao cap, khoa hoc chuyen sau | Edtech tre, khoa hoc co ban |
| Hieu ung chinh | Glow, tilt, typewriter, parallax | Bounce, morph, jelly, velocity |

