import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        seed: ["Seed", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Plant shop theme colors
        SampleTheme: {
          primary: "#4A6741", // Dark green from buttons/actions
          secondary: "#9BB48E", // Lighter sage green
          accent: "#FFD700", // Yellow accent (like the sun icon)
          background: {
            DEFAULT: "#FFFFFF", // White background
            subtle: "#E8F0E6", // Light mint background
          },
          text: {
            DEFAULT: "#1A1A1A", // Main text color
            secondary: "#666666", // Secondary text
            price: "#4A6741", // Price text color
          },
          border: "#E2E8E0", // Subtle border color
          icon: {
            DEFAULT: "#4A6741", // Icon color
            inactive: "#9BB48E", // Inactive icon color
          },
          success: "#4A6741", // Success state
          error: "#E53935", // Error state
          discount: "#F6F9D8", // Discount badge background
        },
        // Keep the shadcn variables for compatibility
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
