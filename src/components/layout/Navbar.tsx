"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return (
      <Link
        href={href}
        onClick={() => setIsMenuOpen(false)}
        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-cyan-400 text-black text-sm font-bold hover:bg-cyan-300 transition-colors"
            >
              <span className="sr-only">Erica Thompson, home</span>
              <span aria-hidden="true">ET</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/courses">Workshops</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-100" />
              ) : (
                <Menu className="h-6 w-6 text-gray-100" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 py-4 space-y-4 flex flex-col text-base">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/courses">Workshops</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
