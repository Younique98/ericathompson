'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}