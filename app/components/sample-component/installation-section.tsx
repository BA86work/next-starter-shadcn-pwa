'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyableCode } from "../ui/copyable-code";

export function InstallationSection() {
  return (
    <Card className="mb-8 sm:mb-12 border-SampleTheme-border bg-white">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-SampleTheme-text">🚀 การติดตั้ง</CardTitle>
        <CardDescription className="text-sm sm:text-base text-SampleTheme-text-secondary">เลือกใช้คำสั่งที่ต้องการในการติดตั้งเทมเพลต</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-SampleTheme-background-subtle p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
          <p className="mb-2 text-SampleTheme-text-secondary"># ใช้ bun</p>
          <CopyableCode code="bun create next-app -e https://github.com/your-username/your-template-repo" />
          <p className="mt-4 mb-2 text-SampleTheme-text-secondary"># ใช้ npm</p>
          <CopyableCode code="npx create-next-app -e https://github.com/your-username/your-template-repo" />
        </div>
      </CardContent>
    </Card>
  );
} 