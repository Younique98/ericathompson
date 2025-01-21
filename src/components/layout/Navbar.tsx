"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import clsx from "clsx";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(!isLight);
    document.body.classList.toggle("light");
  };

  const ToggleButton = () => {
    return (
      <button onClick={toggleTheme}>
        {isLight ? (
          <Moon className="w-5 h-5" stroke="black" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>
    );
  };

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
        className={clsx(
          "transition-colors duration-200",
          !isLight
            ? "text-white hover:text-yellow-500"
            : "text-black hover:text-black hover:underline",
        )}
      >
        {children}
      </Link>
    );
  };
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={clsx(
                "font-bold text-xl",
                isLight ? "text-black " : "text-white",
              )}
            >
              Erica Thompson
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <ToggleButton />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ToggleButton />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu
                  className={clsx(
                    "h-6 w-6",
                    isLight ? "stroke-black" : "stroke-white",
                  )}
                />
              )}
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
