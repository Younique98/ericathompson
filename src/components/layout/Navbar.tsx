'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  
  return (
    <Link 
      href={href}
      className={clsx(
        'transition-colors duration-200',
        pathname === href ? 'text-white' : 'text-gray-300 hover:text-white'
      )}
    >
      {children}
    </Link>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    console.log('Current theme:', isLight ? 'light' : 'dark');
    setIsLight(!isLight);
    document.body.classList.toggle('light');
    console.log('Theme toggled to:', !isLight ? 'light' : 'dark');
  };

  const buttonClasses = clsx(
    'p-2 transition-colors duration-200',
    isLight ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'
  );

  return (
    <nav className={clsx(
      'fixed top-0 w-full z-50',
      isLight ? 'bg-white' : 'bg-black'
    )}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={clsx(
              'font-bold text-xl',
              isLight ? 'text-black' : 'text-white'
            )}>
              Your Name
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            
            <button
              onClick={toggleTheme}
              className={buttonClasses}
            >
              {isLight ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme}
              className={buttonClasses}
            >
              {isLight ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={buttonClasses}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-3">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/courses">Courses</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};