import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DesignFlow AI",
  description: "AI-powered Design Workflow SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex h-screen bg-background text-foreground antialiased overflow-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Sidebar />
          <main className="flex-1 flex flex-col h-screen overflow-y-auto">
            <div className="flex-1 p-8 w-full max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
