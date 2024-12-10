'use client';

import { HeroSection } from "./components/sample-component/hero-section";
import { FeaturesGrid } from "./components/sample-component/features-grid";
import { InstallationSection } from "./components/sample-component/installation-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-SampleTheme-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 lg:max-w-6xl">
        <HeroSection />
        <FeaturesGrid />
        <InstallationSection />
      </div>
    </main>
  );
}
