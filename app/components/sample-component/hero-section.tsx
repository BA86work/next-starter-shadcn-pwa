'use client';

import { Button } from "@/components/ui/button";
import { GithubIcon, Package } from "lucide-react";
import InstallPWA from "../InstallPWA";

export function HeroSection() {
  return (
    <section className="text-center space-y-6 mb-8 sm:mb-12 lg:mb-16">
      <InstallPWA />
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-SampleTheme-text">
          🎨 Next.js + PWA + Shadcn/ui
        </h1>
        <p className="text-base sm:text-lg text-SampleTheme-text-secondary max-w-2xl mx-auto px-4">
          เทมเพลต Next.js ที่ปรับแต่งมาพร้อมกับฟีเจอร์ที่ตั้งค่าไว้ล่วงหน้า รวมถึงการรองรับ PWA, การป้องกันการคลิกขวา และคอมโพเนนต์จาก shadcn/ui
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Button 
          size="lg" 
          className="w-full sm:w-auto bg-SampleTheme-primary hover:bg-SampleTheme-secondary text-white"
          onClick={() => window.open('https://github.com/BA86work/next-starter-shadcn-pwa', '_blank')}
        >
          <GithubIcon className="mr-2 h-4 w-4" />
          Clone Template
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="w-full sm:w-auto border-SampleTheme-primary text-SampleTheme-primary hover:bg-SampleTheme-background-subtle"
          onClick={() => window.open('https://github.com/BA86work/next-starter-shadcn-pwa#readme', '_blank')}
        >
          <Package className="mr-2 h-4 w-4" />
          Documentation
        </Button>
      </div>
    </section>
  );
} 