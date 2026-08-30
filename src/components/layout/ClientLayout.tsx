"use client";

import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 pt-16">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
