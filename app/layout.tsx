import type { Metadata, Viewport } from "next";
import "./globals.css";
import DisableRightClick from "./components/disableRightClick";
import { Toaster } from 'sonner'

const APP_NAME = "Sample-App";
const APP_DEFAULT_TITLE = "Sample-App";
const APP_TITLE_TEMPLATE = "%s - Sample-App";
const APP_DESCRIPTION = "แชทบอทอัจฉริยะที่ตอบคำถามได้ถูกต้อง";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#4A6741", // กำหนดสีธีมของเบราว์เซอร์
  viewportFit: "cover", // กำหนดให้เว็บแสดงผลเต็มหน้าจอ รวมถึงส่วนที่มี notch หรือ rounded corners
  width: "device-width", // กำหนดความกว้างของเว็บให้เท่ากับความกว้างของอุปกรณ์
  initialScale: 1.0, // กำหนดระดับการซูมเริ่มต้นเป็น 100%
  maximumScale: 1, // จำกัดระดับการซูมสูงสุดไว้ที่ 100%
  userScalable: false, // ไม่อนุญาตให้ผู้ใช้ซูมหน้าเว็บ
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DisableRightClick>
          {children}
        </DisableRightClick>
        <Toaster richColors position="top-right" expand={true} />
      </body>
    </html>
  )
}
