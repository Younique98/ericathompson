'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //TODO (ET): Handle the theme toggle a bit better

    // Wait until mounted to show theme toggle
  useEffect(() => {
    setMounted(true);
  }, [] );
  

  return (
    <nav className="fixed top-0 w-full bg-black z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
            <Link href="/courses" className="text-gray-300 hover:text-white">Courses</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
         {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-300 hover:text-white"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};