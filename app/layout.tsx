import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayerProvider } from "@/context/LayerContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exponentor — Exponential Growth, Real Solutions",
  description:
    "Exponentor builds SaaS products that solve real problems. XSITE for real estate cost control. JEMS for student-industry readiness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="noise-bg" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <LayerProvider>{children}</LayerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
