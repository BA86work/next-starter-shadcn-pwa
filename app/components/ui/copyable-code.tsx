'use client';

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CopyableCodeProps {
  code: string;
}

export function CopyableCode({ code = "bash" }: CopyableCodeProps) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // สำหรับบราวเซอร์ที่รองรับ clipboard API
        await navigator.clipboard.writeText(code);
      } else {
        // สำหรับบราวเซอร์ที่ไม่รองรับ clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = code;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          textArea.remove();
        } catch (error) {
          console.error("Copy failed", error);
          textArea.remove();
          throw error;
        }
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success('คัดลอกสำเร็จ', {
        description: 'คัดลอกคำสั่งไปยังคลิปบอร์ดแล้ว',
        duration: 2000,
      });
    } catch (error) {
      console.error("Copy failed", error);
      toast.error('ไม่สามารถคัดลอกได้', {
        description: 'กรุณาคัดลอกด้วยตนเอง',
        duration: 2000,
      });
    }
  }

  return (
    <div className="group relative">
      <pre className="bg-SampleTheme-background-subtle p-3 pr-12 rounded mt-2 overflow-x-auto font-mono text-sm">
        <code className="text-SampleTheme-primary">{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-1.5 top-1.5 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-SampleTheme-secondary/20"
        onClick={onCopy}
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-SampleTheme-success" />
        ) : (
          <Copy className="h-3.5 w-3.5 text-SampleTheme-icon" />
        )}
      </Button>
    </div>
  )
}
