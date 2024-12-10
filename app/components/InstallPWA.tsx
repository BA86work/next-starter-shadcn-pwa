"use client";

import { useState, useEffect } from "react";
import { toast } from 'sonner'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface WindowWithMSStream extends Window {
  MSStream?: unknown;
}

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      console.log("UserAgent:", userAgent);

      if (userAgent.includes('ipad')) {
        return "iPad";
      } else if (userAgent.includes('iphone')) {
        return "iPhone";
      } else if (userAgent.includes('android')) {
        return "Android";
      } else if (userAgent.includes('windows')) {
        return "Windows";
      } else if (userAgent.includes('macintosh')) {
        return "MacOS";
      } else if (userAgent.includes('linux')) {
        return "Linux";
      }
      return "ไม่สามารถระบุอุปกรณ์ได้";
    };

    const deviceType = detectDevice();
    console.log("Detected device:", deviceType);

    const isIOSDevice = /ipad|iphone|ipod/i.test(navigator.userAgent) && 
      !(window as WindowWithMSStream).MSStream;
    const isAndroidDevice = /android/i.test(navigator.userAgent);

    // แสดง toast แจ้งข้อมูลอุปกรณ์
    setTimeout(() => {
      toast.info('ตรวจพบอุปกรณ์ของคุณ', {
        description: `กำลังใช้งานบน: ${deviceType}`,
        duration: 5000,
      });
    }, 1000);

    // แสดงวิธีการติดตั้งตามประเภทอุปกรณ์
    setTimeout(() => {
      if (isAndroidDevice) {
        toast.success('ติดตั้งแอพบน Android', {
          description: 'คุณสามารถกดปุ่ม "ติดตั้ง" เมื่อมีการแจ้งเตือนจาก Chrome',
          duration: 8000,
        });
      } else if (isIOSDevice) {
        toast.success('วิธีติดตั้งแอพบน iOS', {
          description: 
            '1. กดปุ่ม "แชร์" (Share) ด้านล่าง'+
            '2. เลื่อนหาและกดปุ่ม "Add to Home Screen' +
            '3. กดปุ่ม "Add" มุมบนขวา',
          duration: 10000,
        });
      }
    }, 2000);

    const handler = (e: Event) => {
      console.log("beforeinstallprompt triggered");
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      toast('พร้อมติดตั้งแอพ', {
        description: `คุณสามารถติดตั้งแอพนี้บน ${deviceType} ของคุณได้แล้ว`,
        action: {
          label: 'ติดตั้งเลย',
          onClick: () => handleInstallClick()
        },
        duration: 0,
      });
    };

    window.addEventListener("beforeinstallprompt", handler);
    console.log("Event listener added");

    return () => window.removeEventListener("beforeinstallprompt", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        toast.success('ติดตั้งสำเร็จ', {
          description: 'ขอบคุณที่ติดตั้งแอพของเรา'
        });
      } else {
        toast.error('ยกเลิกการติดตั้ง', {
          description: 'คุณสามารถติดตั้งได้ในภายหลัง'
        });
      }
      setDeferredPrompt(null);
    }
  };

  return null;
}