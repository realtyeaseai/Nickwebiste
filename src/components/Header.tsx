"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-12 h-12 overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/assets/logo.png"
                alt="ASM Security Integrators"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#1B3FA0] group-hover:text-[#2550c8] transition-colors duration-300">
                ASM Security
              </span>
              <span className="text-xs text-gray-600 font-medium">Integrators</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  pathname === link.href
                    ? "text-[#1B3FA0]"
                    : "text-gray-700 hover:text-[#1B3FA0]"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute inset-0 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 ${
                    pathname === link.href ? "scale-100" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#1B3FA0] transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300 ${
                    pathname === link.href ? "w-3/4" : ""
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-[#1B3FA0] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-xl hover:bg-[#2550c8] transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 text-gray-700 hover:text-[#1B3FA0] focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 rounded-lg bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              className="w-6 h-6 relative z-10 mx-auto transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform ${
                  pathname === link.href
                    ? "bg-blue-50 text-[#1B3FA0] translate-x-2"
                    : "text-gray-700 hover:bg-blue-50 hover:text-[#1B3FA0] hover:translate-x-2"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mx-4 mt-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-6 py-3 bg-[#1B3FA0] text-white text-sm font-semibold rounded-lg shadow-md text-center hover:bg-[#2550c8] transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
