'use client';

import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="min-h-scree">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 pt-20">
          {children}
        </main>
        <Footer />
      </div>
  );
}