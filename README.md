# 🎨 เทมเพลต Next.js+PWA+Shadcn/ui with custom theme

เทมเพลต Next.js ที่ปรับแต่งมาพร้อมกับฟีเจอร์ที่ตั้งค่าไว้ล่วงหน้า รวมถึงการรองรับ PWA, การป้องกันการคลิกขวา และคอมโพเนนต์จาก shadcn/ui

## 🚀 ติดตั้ง

``` bun create BA86work/next-starter-shadcn-pwa <ตั้งชื่อโฟลเดอร์> ```
> อธิบายโครงสร้างคำสั่ง
```bun create <user>/<repo> <ชื่อโฟลเดอร์>```

## 🎁 Dependencies ที่เพิ่มเข้ามา

- `@ducanh2912/next-pwa` - สำหรับรองรับ PWA
- `@radix-ui/react-slot` - คอมโพเนนต์พื้นฐานสำหรับ shadcn/ui
- `class-variance-authority` - จัดการ variants ของ components
- `clsx` - utility สำหรับจัดการ className
- `lucide-react` - ไอคอนสำหรับ UI
- `next-themes` - จัดการธีมในแอป Next.js
- `sonner` - แสดง toast notifications
- `tailwind-merge` - รวม Tailwind classes อย่างชาญฉลาด
- `tailwindcss-animate` - animations สำหรับ Tailwind CSS

### DevDependencies:
- `prettier` - จัดรูปแบบโค้ด
- `prettier-plugin-tailwindcss` - จัดรูปแบบ Tailwind CSS classes

## ✨ ฟีเจอร์ที่เพิ่มเข้ามาจากเทมเพลต Next.js พื้นฐาน

1. **📱 รองรับ PWA**
   - เพิ่มการตั้งค่า PWA พร้อม manifest.json
   - มีคอมโพเนนต์ InstallPWA สำหรับการติดตั้งแอป
   - ไฟล์ตัวอย่างสำหรับไอคอนและภาพหน้าจอ:
     - `/public/sample-icon.png` (512x512)
     - `/public/sample-wide-screenshots.png` (1000x750)
     - `/public/sample-narrow-screenshots.png` (1200x2160)

2. **🎯️ อัปเดตไฟล์สำหรับ PWA**:
   - เตรียมและเพิ่มไฟล์ภาพต่อไปนี้ในโฟลเดอร์ `/public/`:
     - `sample-icon.png` (512x512) - ไอคอนหลักของแอป
     - `sample-wide-screenshots.png` (1000x750) - ภาพหน้าจอสำหรับเดสก์ท็อป
     - `sample-narrow-screenshots.png` (1200x2160) - ภาพหน้าจอสำหรับมือถือ
   > หมายเหตุ: คุณต้องเตรียมไฟล์ภาพเหล่านี้เองตามขนาดที่กำหนด

3. **🎯 คอมโพเนนต์ UI และการจัดสไตล์**
   - ผสานรวมคอมโพเนนต์จาก shadcn/ui
   - การตั้งค่าธีมแบบกำหนดเองใน `tailwind.config.ts`:
     ```js
     SampleTheme: {
       primary: "#4A6741",
       secondary: "#9BB48E",
       accent: "#FFD700"
     }
     ```
   - ตั้งค่า Global CSS พร้อมตัวแปรธีม

4. **🔒 ฟีเจอร์ด้านความปลอดภัย**
   - เพิ่มคอมโพเนนต์ป้องกันการคลิกขวา (`disableRightClick.tsx`)
   - สามารถปรับแต่งกาตั้งค่าความปลอดภัยได้

5. **📁 โครงสร้างโปรเจคที่แนะนำ**
   - โครงสร้างปัจจุบัน:
     - `/app/components/` - คอมโพเนนต์ที่สร้างเอง
     - `/app/components/ui/` - คอมโพเนนต์จาก shadcn/ui
   - เครงสร้างที่แนะนำให้เพิ่มเติม:
     - `/lib/` - สำหรับฟังก์ชันยูทิลิตี้
     - `/hooks/` - สำหรับ React hooks ที่สร้างเอง

6. **⚙️ ไฟล์การตั้งค่า**
   - ปรับแต่ง `next.config.ts` พร้อมการตั้งค่า PWA
   - เพิ่ม `components.json` สำหรับการตั้งค่า shadcn/ui
   - ปรับแต่ง `tailwind.config.ts` พร้อมการตั้งค่าธีม
   - อัปเดต `manifest.json` พร้อมข้อมูล PWA

## 🚀 การติดตั้งเทมเพลต

ใช้คำสั่งต่อไปนี้เพื่อใช้งานเทมเพลต:

```bash
# ใช้ bun
bun create <user>/<repo> <ชื่อโฟลเดอร์>
```

## 🛠️ ขั้นตอนหลังการติดตั้ง

1. 📦 **ติดตั้ง dependencies**:
```bash
bun install
# หรือ npm install
# หรือ pnpm install
```

2. 🖼️ **อัปเดตไฟล์สำหรับ PWA**:
   - เตรียมและเพิ่มไฟล์ภาพต่อไปนี้ในโฟลเดอร์ `/public/`:
     - `sample-icon.png` (512x512) - ไอคอนหลักของแอป
     - `sample-wide-screenshots.png` (1000x750) - ภาพหน้าจอสำหรับเดสก์ท็อป
     - `sample-narrow-screenshots.png` (1200x2160) - ภาพหน้าจอสำหรับมือถือ
   > หมายเหตุ: คุณต้องเตรียมไฟล์ภาพเหล่านี้เองตามขนาดที่กำหนด

3. ✏️ **ตั้งค่าข้อมูลแอป**:
   - `app/layout.tsx`: อัปเดตชื่อแอปและข้อมูลเมตา
     ```typescript
     const APP_NAME = "ชื่อแอปของคุณ";
     const APP_DEFAULT_TITLE = "ชื่อแอปของคุณ";
     const APP_TITLE_TEMPLATE = "%s - ชื่อแอปของคุณ";
     const APP_DESCRIPTION = "คำอธิบายแอปของคุณ";
     ```
   - `public/manifest.json`: อัปเดตการตั้งค่า PWA
     ```json
     {
       "name": "ชื่อแอปของคุณ",
       "short_name": "ชื่อย่อ",
       "description": "คำอธิบายแอปของคุณ",
       "background_color": "#สีของคุณ",
       "theme_color": "#สีของคุณ"
     }
     ```

4. 🎨 **ปรับแต่งธีม (ตัวเลือก)**:
   - `tailwind.config.ts`: แก้ไขสี SampleTheme
     ```typescript
     SampleTheme: {
       primary: "#สีหลักของคุณ",
       secondary: "#สีรองของคุณ",
       accent: "#สีเน้นของคุณ"
     }
     ```

5. 🔐 **การตั้งค่าความปลอดภัย (ตัวเลือก)**:
   - `app/components/disableRightClick.tsx`: ตั้งค่าการป้องกันการคลิกขวา
   - `app/layout.tsx`: ลบคอมโพเนนต์ DisableRightClick ถ้าไม่ต้องการ

6. 🚀 **เริ่มเซิร์ฟเวอร์สำหรับการพัฒนา**:
```bash
bun dev
# หรือ npm run dev
# หรือ pnpm dev
```

## 📚 เริ่มต้นใช้งาน

ขั้นแรก เริ่มเซิร์ฟเวอร์สำหรับการพัฒนา:

```bash
npm run dev
# หรือ
yarn dev
# หรือ
pnpm dev
# หรือ
bun dev
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์เพื่อดูผลลัพธ์

คุณสามารถเริ่มแก้ไขหน้าเว็บโดยการแก้ไขไฟล์ `app/page.tsx` หน้าเว็บจะอัปเดตอัตโนมัติเมื่อคุณแก้ไขไฟล์

โปรเจคนี้ใช้ [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) เพื่อเพิ่มประสิทธิภาพและโหลดฟอนต์ [Geist](https://vercel.com/font) ซึ่งเป็นฟอนต์ตระกูลใหม่จาก Vercel

## 📚 เรียนรู้เพิ่มเติม

เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับ Next.js ดูได้จากแหล่งข้อมูลต่อไปนี้:

- [เอกสาร Next.js](https://nextjs.org/docs) - เรียนรู้เกี่ยวกับฟีเจอร์และ API ของ Next.js
- [เรียนรู้ Next.js](https://nextjs.org/learn) - บทเรียน Next.js แบบโต้ตอบ

คุณสามารถตรวจสอบ [GitHub repository ของ Next.js](https://github.com/vercel/next.js) - ข้อเสนอแนะและการมีส่วนร่วมของคุณเป็นสิ่งที่ยินดีเสมอ!

## 🌟 เผยแพร่บน Vercel

วิธีที่ง่ายที่สุดในการเผยแพร่แอป Next.js คือการใช้ [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) จากผู้สร้าง Next.js

ดูเพิ่มเติมที่ [เอกสารการเผยแพร่ Next.js](https://nextjs.org/docs/app/building-your-application/deploying) สำหรับรายละเอียดเพิ่มเติม
