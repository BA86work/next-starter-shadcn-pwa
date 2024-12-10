'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Smartphone, Palette } from "lucide-react";

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
      {/* PWA Support */}
      <Card className="h-full border-SampleTheme-border bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl text-SampleTheme-text">
            <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-SampleTheme-icon" />
             รองรับ PWA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-SampleTheme-text-secondary">
            <li>เพิ่มการตั้งค่า PWA พร้อม manifest.json</li>
            <li>มีคอมโพเนนต์ InstallPWA สำหรับการติดตั้งแอป</li>
            <li>รองรับไอคอนและภาพหน้าจอหลายขนาด</li>
          </ul>
        </CardContent>
      </Card>

      {/* UI Components */}
      <Card className="h-full border-SampleTheme-border bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl text-SampleTheme-text">
            <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-SampleTheme-icon" />
             UI Components
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-SampleTheme-text-secondary">
            <li>ผสานรวมคอมโพเนนต์จาก shadcn/ui</li>
            <li>ธีมแบบกำหนดเองใน tailwind.config.ts</li>
            <li>Global CSS พร้อมตัวแปรธีม</li>
          </ul>
        </CardContent>
      </Card>

      {/* Security Features */}
      <Card className="h-full md:col-span-2 lg:col-span-1 border-SampleTheme-border bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl text-SampleTheme-text">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-SampleTheme-icon" />
             ความปลอดภัย
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-SampleTheme-text-secondary">
            <li>ป้องกันการคลิกขวา</li>
            <li>ปรับแต่งการตั้งค่าความปลอดภัยได้</li>
            <li>โค้ดที่เป็นระเบียบและปลอดภัย</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 